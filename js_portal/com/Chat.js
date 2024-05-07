flex.Chat = class extends flex.VisualComponent{
  constructor(options){
    super(options, 'Chat', false);
    this.options = options;
    this.messages = [];
    this.chatcontainer = this.vcContainer;
    this.chatHeader = document.createElement('header');
    this.chatTitle = document.createElement('h3');
    this.messagesContainer = document.createElement('div');
    this.messagesContainerEnd = document.createElement('span');
    this.messageBox = document.createElement('form');
    this.messageInput = document.createElement('input');
    this.messageSubmit = new flex.ControlButton({
      id: 'cb_Chat_'+this.id,
      idxElement:0,
      hint: false,
      width: 30,
      height: 30,
      typeButton: 'messageSent',
      onClick: (e)=>{
        this.sendMesagge(e);
      },
      _built:()=>{
          this.messageSubmit.getPanel().style.position = 'relative';
          this.messageSubmit.getPanel().style.height = this.messageSubmit.objProperties.height + 'px';
          this.messageSubmit.getPanel().style.width = this.messageSubmit.objProperties.width + 'px';
      }
    });
    this.elements = [this.chatcontainer];
    this.names = ['Chatcontainer'];
    this.hasCssClass = true;
    this.messageBox.addEventListener('submit',(e)=>{
      e.preventDefault();
      this.sendMesagge();
    });
    this.setProperties(options);
  }

  setTitle(title){
    this.chatTitle.innerText = title;
    return this;
  }
  
  initProperties(){
    this.chatTitle.innerText = this.options.title;
    this.messageInput.placeholder = 'Escribe un mensaje';
    // this.chatcontainer.appendChild(this.chatHeader);
    this.chatcontainer.appendChild(this.chatTitle);
    this.chatcontainer.appendChild(this.messagesContainer);
    this.messageBox.appendChild(this.messageInput);
    this.messageBox.appendChild(this.messageSubmit.getPanel());
    // this.chatHeader.classList.add('chatHeader_css' + this.enviroment);
    this.messagesContainer.classList.add('Messagescontainer_css'+ this.enviroment);
    this.chatTitle.classList.add('ChatTitle_css' + this.enviroment);
    this.messageBox.classList.add('MessageSender_css' + this.enviroment);
    this.messageInput.classList.add('MessageInput_css'+ this.enviroment);
    if (this.objProperties.messageBox) this.chatcontainer.appendChild(this.messageBox);
    this.messagesContainer.appendChild(this.messagesContainerEnd);
  }
  
  refreshProperties(prop){
    // *************** PROPIEDADES DEL CSS ******************
		prop.that = this;
		flex.propertyManager.refreshProperties(prop);
		let classObj=flex.controller.getObjClass(prop);
		if(classObj){for (var attrname in classObj) { this.objProperties[attrname] = classObj[attrname] };}
		// ****************************************************** 
    if(this.objProperties.width) this.chatcontainer.style.width = this.objProperties.width;
    if(this.objProperties.height) this.chatcontainer.style.height = this.objProperties.height;
  }

  addMessage(textMessage){
    this.messagesContainer.removeChild(this.messagesContainerEnd);
    let message = document.createElement('div');
    let corner = document.createElement('div'),
        text = document.createElement('span');
    text.innerText = textMessage;
    message.appendChild(corner);
    message.appendChild(text);
    message.className = 'Message_css' + this.enviroment;

    corner.classList.add('MessageCorner_css'+this.enviroment);
    text.classList.add('MessageText_css' + this.enviroment);
    this.messagesContainer.appendChild(message);
    this.messagesContainer.appendChild(this.messagesContainerEnd);
    this.goToChatEnd();
    return this; 
  }

  goToChatEnd(){
    this.messagesContainerEnd.scrollIntoView();
    return this;
  }

  sendMesagge(){
    if(this.messageInput.value !== ''){
      let value = this.messageInput.value;
      this.addMessage(value);
      this.messageInput.value = '';
    }
  }
}