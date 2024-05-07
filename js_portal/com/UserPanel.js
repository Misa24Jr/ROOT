flex.UserPanel = class extends flex.VisualComponent{
  constructor(options){
    super(options, 'UserPanel', false);
    this.userPanel = this.vcContainer;//document.createElement('section');
    this.elements = [this.userPanel];
    this.names = ['UserPanel'];
    this.hassCssClass = true;
    this.label = document.createElement('label');
    // this.userPanel.className = 'UserPanel_css' + this.enviroment;
    this.photoContainer = document.createElement('div');
    this.tpUser = new flex.ToolPanel({
      id: 'tpUser'+this.id,
      idxElement: 0,
      cssClass: {
        padding: '5px',
        width: '100%',
        height: '100%', 
        border: 'none',
        boxShadow: 'none',
        overflow: 'visible',
        zIndex: 2
      }
    });
    this.notification = new flex.Badge({
      id: 'badgeNotification'+this.id,
      idxElement: 0,
      caption: 0,
      cssClass: {
        minWidth: '15px',
        minHeight: '15px',
        fontSize: '15px',
        position: 'absolute',
        left: '70%',
        top: 0
      }
    }); 

    this.cbUserPhoto = this.createCB('cbUserPhoto'+this.id, 'user',{
      width: '35px',
      height : '35px',
      margin: 'auto'
    });

    this.switchUser = new flex.Switch({
      id: 'switchUser'+this.id,
      idxElement: 0,
      defaultActive: true,
      sizeCircle: '25px',
      cssClass: {
        width: '50px',
        height: '15px'
      }
    });
    
    this.tpControlUser = new flex.ToolPanel({
      id: 'tpControlUser'+this.id,
      idxElement: 0,
      cssClass: {
        padding: '5px',
        width: '100%',
        height: '100%', 
        border: 'none',
        boxShadow: 'none',

      }
    });

    this.cbEnableVoice = this.createCB('cbEnableVoice'+this.id, 'mic',{
      width: '25px',
      height : '25px'
    });

    this.cbEnableSound = this.createCB('cbEnableSound'+this.id, 'sound', {
      width: '25px',
      height : '25px'
    });

    this.cbEnableEdit = this.createCB('cbEnableEdit'+this.id, 'edit', {
      width: '25px',
      height : '25px'
    });

    this.cbEnableMessage = this.createCB('cbEnableMessages'+this.id, 'message', {
      width: '25px',
      height : '25px'
    });
    
    this.tpUser._allBuilt = () => this.built();
    this.setProperties(options);
    this.initCssProperties();
  }

  initCssProperties(){
    (this.objProperties.width) ? this.userPanel.style.width = this.objProperties.width : getComputedStyle(this.userPanel).width;
    (this.objProperties.height) ? this.userPanel.style.height = this.objProperties.height : getComputedStyle(this.userPanel).height;
    (this.objProperties.boxShadow) ? this.userPanel.style.boxShadow = this.objProperties.boxShadow : getComputedStyle(this.userPanel).boxShadow;
    (this.objProperties.borderRadius) ? this.userPanel.style.borderRadius = this.objProperties.borderRadius : getComputedStyle(this.userPanel).borderRadius;
    (this.objProperties.margin) ? this.userPanel.style.margin = this.objProperties.margin : getComputedStyle(this.userPanel).margin;
    (this.objProperties.fontSize) ? this.label.style.fontSize = this.objProperties.fontSize : getComputedStyle(this.label).fontSize;
    (this.objProperties.textTransform) ? this.label.style.textTransform = this.objProperties.textTransform : getComputedStyle(this.label).textTransform;
    (this.objProperties.userSelect) ? this.label.style.userSelect = this.objProperties.userSelect : getComputedStyle(this.label).userSelect;
    
  }

  built(){
    this.switchUser.getPanel().style.width = this.switchUser.getPanel().style.height = 'auto';
    this.tpUser.getPanel().style.height = '60%';
    this.tpControlUser.getPanel().style.height = '40%';

    this.userPanel.appendChild(this.tpUser.getPanel());
    this.tpUser.addItem(this.photoContainer);
    this.photoContainer.appendChild(this.notification.getPanel());
    this.photoContainer.appendChild(this.cbUserPhoto.getPanel());
    this.photoContainer.style.width= '50px';
    this.photoContainer.style.height= '50px';
    this.photoContainer.style.position = 'relative';
    this.label.innerText = this.objProperties.userPanelName,
    this.label.className = 'UserPanelLabel_css'+this.enviroment;
    this.tpUser.addItem(this.label);
    this.tpUser.addItem(this.switchUser.getPanel());

    this.userPanel.appendChild(this.tpControlUser.getPanel());
    this.tpControlUser.addItem(this.cbEnableVoice.getPanel());
    this.tpControlUser.addItem(this.cbEnableSound.getPanel());
    this.tpControlUser.addItem(this.cbEnableEdit.getPanel());
    this.tpControlUser.addItem(this.cbEnableMessage.getPanel());
    this.events();
  }

  events(){
    this.switchUser.onClick(()=>{
      if(this.objProperties.onSwitchClick) this.objProperties.onSwitchClick();
    });

    this.cbEnableSound.onClick(()=>{
      if(this.switchUser.getActive()) this.cbEnableSound.getTypeButton()==='sound' ? this.cbEnableSound.changeType('soundMute') : this.cbEnableSound.changeType('sound'); 
      if(this.objProperties.onSoundClick && this.switchUser.getActive()) this.objProperties.onSoundClick();
    });

    this.cbEnableVoice.onClick(()=>{
      if(this.objProperties.onVoiceClick && this.switchUser.getActive()) this.objProperties.onVoiceClick();
    });

    this.cbEnableEdit.onClick(()=>{
      if(this.objProperties.onEditClick && this.switchUser.getActive()) this.objProperties.onEditClick();
    });

    this.cbEnableMessage.onClick(()=>{
      if(this.switchUser.getActive()) this.cbEnableMessage.getTypeButton()==='message' ? this.cbEnableMessage.changeType('messageDissabled') : this.cbEnableMessage.changeType('message'); 
      if(this.objProperties.onMessageClick && this.switchUser.getActive()) this.objProperties.onMessageClick();
    });
    
  }

  onSwitchClick(exFuntc){this.objProperties.onSwitchClick = exFuntc};
  onSoundClick(exFuntc){this.objProperties.onSoundClick = exFuntc};
  onVoiceClick(exFuntc){this.objProperties.onVoiceClick = exFuntc};
  onEditClick(exFuntc){this.objProperties.onEditClick = exFuntc};
  onMessageClick(exFuntc){this.objProperties.onMessageClick = exFuntc};

  getLabel(){
    return this.label.innerText;
  }

  setNotification(notification){
    this.notification.setCaption(notification);
    return this;
  }

  getNotification(){
    return this.notification.getCaption();
  }

  createCB(id, typeButton, cssClass){
    let cb = new flex.ControlButton({
      id : id + this.id,
      typeButton,
      idxElement : 0,
      cssClass
    });
    return cb;
  }
}