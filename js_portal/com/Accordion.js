flex.Accordion = class extends flex.VisualComponent{
  constructor(options){
    super(options, 'Accordion',false);
    this.semilla=1;
    this.option = options;
    this.accordion = this.vcContainer;//document.createElement('div');
    this.hasCssClass = true;
    this.elements = [this.accordion];
    this.names = ['Accordion'];
    this.setProperties(options);
  }

  refreshProperties(prop){
    prop.that = this;
		flex.propertyManager.refreshProperties(prop);
		let classObj=flex.controller.getObjClass(prop);
		if(classObj){for (var attrname in classObj) { this.objProperties[attrname] = classObj[attrname] };}
    this.accordion.style.position = 'relative';
    if (this.objProperties.width) this.accordion.style.width = this.objProperties.width; 
  }

  addItem(itemConfig){
    this.semilla+=this.semilla;
    let item = document.createElement('div');
    let header = document.createElement('section');
    let titlecontainer = document.createElement('div');
    let itemTitle = document.createElement('h3');
    let body = document.createElement('div');
    let cb = new flex.ControlButton({
      id: 'cb_Accordion_'+this.id+'_'+this.semilla,
      idxElement:0,
      showHint: false,
      backgroundColor1: this.objProperties.cbColor ? this.objProperties.cbColor : 'black',
      cssClass:{
          width:'28px',
          height:'28px',
          backgroundColor:'transparent',
          marginRight : '10px'
      },
      positionHint: 'up',
      typeButton: 'triangleDown',
      _built:()=>{
          item.appendChild(header);
          item.appendChild(body); 
          header.appendChild(cb.getPanel());         
      }
    });
    
    item.className = 'AccordionItem_css' + this.enviroment;
    header.className = 'AccordionItemHeader_css' + this.enviroment;
    titlecontainer.className = 'AccordionTitleContainer_css' + this.enviroment;
    itemTitle.className = 'AccordionItemTitle_css' + this.enviroment;
    body.className = 'AccordionItemBody_css' + this.enviroment;
   
    if(typeof itemConfig.typeIcon === 'string'){
  
    let titleIcon = new flex.ControlButton({
      id: 'titleIcon_'+this.id+'_'+this.semilla,
      idxElement:0,
      showHint: false,
      cssClass:{
        width:'25px',
        height:'25px',
        backgroundColor:'transparent',
        marginRight: 5
      },
      typeButton: itemConfig.typeIcon ? itemConfig.typeIcon : 'user',
      _built:()=>{ 
        titlecontainer.appendChild(titleIcon.getPanel());
        titlecontainer.appendChild(itemTitle);
        }
      });
    } else{
      titlecontainer.appendChild(itemConfig.typeIcon);
      titlecontainer.appendChild(itemTitle);
    }

    itemTitle.innerText = itemConfig.title;

    header.addEventListener('click', (event)=>{
      cb.rotate();
      this.createRippleEffect(event);
      if(body.style.height){
        this.closeAccordion(body);
        header.querySelector('div:nth-child(2)').setAttribute('active',false);
      } else{
        this.accordion.querySelectorAll(`section.AccordionItemHeader_css${this.enviroment} > div`).forEach(cb =>{
        })
        this.accordion.querySelectorAll(`div.AccordionItemBody_css${this.enviroment}`).forEach((body) =>{
          this.closeAccordion(body);
        })
        header.querySelector('div:nth-child(2)').setAttribute('active',true);
        this.openAccordion(body);
      }
    });

    for(let element of itemConfig.elements){
      let bodyItem = document.createElement('section');
      bodyItem.classList.add('BodyItem_css'+ this.enviroment);
      bodyItem.appendChild(element)        
      body.appendChild(bodyItem);
    }

    header.appendChild(titlecontainer);  
    this.accordion.appendChild(item);
    return this;
  }

  openAccordion(item){
    if(this.objProperties.maxHeight){
      item.style.height = this.objProperties.maxHeight;
      item.style.overflowY = 'scroll';
    }
    else item.style.height = item.scrollHeight + "px";
    item.style.borderBottom = '1px solid #ddd';
  }
  /**
   * @description Colapsa el item del acordeon pasado como argumento
   * @param {HTMLObject} item 
   */
  closeAccordion(item){
    item.style.height = null;
    item.style.borderBottom = null;
  }

}