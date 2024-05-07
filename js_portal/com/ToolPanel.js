flex.ToolPanel = class extends flex.VisualComponent{
  constructor(options){
    super(options, 'ToolPanel', false);
    this.toolPanel = this.vcContainer;//document.createElement('div');
    this.elements = [this.toolPanel];
    this.names = ['ToolPanel'];
    this.hasCssClass = true;
    this.setProperties(options);
    this.toolPanel.addEventListener('transitionend', (e)=>{
      if (this.toolPanel.getBoundingClientRect().width ===0 || this.toolPanel.getBoundingClientRect().height == 0 ) this.toolPanel.style.visibility = 'hidden';
    });
    this.toolPanel.addEventListener('transitionstart',(e)=>{
      if (this.toolPanel.getBoundingClientRect().width !== 0 || this.toolPanel.getBoundingClientRect().height !== 0 ) this.toolPanel.style.visibility = 'visible';
      if ( e.propertyName === 'width'|| e.propertyName === 'height' && e.propertyName === 'height' && getComputedStyle(this.toolPanel).height !== 0) this.toolPanel.style.visibility = 'visible';

    });
  }

  initProperties(){
    this.toolPanel.style.flexDirection = this.objProperties.panelDirection;
    this.toolPanel.style.justifyContent = 'space-between';
    this.toolPanel.style.alignItems = 'center';
    this.objProperties.padding = getComputedStyle(this.toolPanel).padding;
    this.objProperties.paddingPanel = this.objProperties.cssClass && this.objProperties.cssClass.padding ? this.objProperties.cssClass.padding : this.toolPanel.getBoundingClientRect().padding; 
    if(this.objProperties.paddingPanel === undefined) this.objProperties.paddingPanel = {
      left : this.objProperties.cssClass && this.objProperties.cssClass.paddingLeft ? this.objProperties.cssClass.paddingLeft : getComputedStyle(this.toolPanel).paddingLeft,
      right: this.objProperties.cssClass && this.objProperties.cssClass.paddingRight ? this.objProperties.cssClass.paddingRight : getComputedStyle(this.toolPanel).paddingRight,
      top:  this.objProperties.cssClass && this.objProperties.cssClass.paddingTop ? this.objProperties.cssClass.paddingTop : getComputedStyle(this.toolPanel).paddingTop,
      bottom: this.objProperties.cssClass && this.objProperties.cssClass.paddingBottom ? this.objProperties.cssClass.paddingBottom : getComputedStyle(this.toolPanel).paddingBottom
    }
    this.objProperties.borderPanel = this.objProperties.cssClass && this.objProperties.cssClass.border ? this.objProperties.cssClass.border : this.toolPanel.getBoundingClientRect().border; 
    if(this.objProperties.borderPanel === undefined) this.objProperties.borderPanel = {
      left : this.objProperties.cssClass && this.objProperties.cssClass.borderLeft ? this.objProperties.cssClass.borderLeft : getComputedStyle(this.toolPanel).borderLeft,
      right: this.objProperties.cssClass && this.objProperties.cssClass.borderRight ? this.objProperties.cssClass.borderRight : getComputedStyle(this.toolPanel).borderRight,
      top: this.objProperties.cssClass && this.objProperties.cssClass.bordferTop ? this.objProperties.cssClass.borderTop : getComputedStyle(this.toolPanel).borderTop,
      bottom: this.objProperties.cssClass && this.objProperties.cssClass.borderBottom ? this.objProperties.cssClass.borderBottom : getComputedStyle(this.toolPanel).borderBottom
    }
    
  }


  refreshProperties(prop){
    prop.that = this;
    flex.propertyManager.refreshProperties(prop);
    let classObj=flex.controller.getObjClass(prop);
    if(classObj){for (var attrname in classObj) { this.objProperties[attrname] = classObj[attrname] };}
    // this.getPanel().style.width = this.toolPanel.style.width;
    // this.getPanel().style.height = this.toolPanel.style.heigth;
    // this.toolPanel.style.width = this.toolPanel.getBoundingClientRect().width;
    this.objProperties.widthPanel=this.objProperties.width;
    this.objProperties.heightPanel=this.objProperties.height;
  }
  
  addItem(element){
    this.toolPanel.appendChild(element);
    return this;
  }
  
  setDimension(direction = this.objProperties.panelDirection){
   direction == 'row' ? this.toolPanel.style.width = this.objProperties.widthPanel : this.toolPanel.style.height = this.objProperties.heightPanel;
    if(typeof this.objProperties.paddingPanel === 'object'){
      this.toolPanel.style.paddingTop = this.objProperties.paddingPanel.top;
      this.toolPanel.style.paddingBottom = this.objProperties.paddingPanel.bottom;
      this.toolPanel.style.paddingLeft = this.objProperties.paddingPanel.left;
      this.toolPanel.style.paddingRight = this.objProperties.paddingPanel.right;
    } else {
      this.toolPanel.style.padding = this.objProperties.paddingPanel;
    }
    if(typeof this.objProperties.borderPanel === 'object'){
      this.toolPanel.style.borderTop = this.objProperties.borderPanel.top;
      this.toolPanel.style.borderBottom = this.objProperties.borderPanel.bottom;
      this.toolPanel.style.borderLeft = this.objProperties.borderPanel.left;
      this.toolPanel.style.borderRight = this.objProperties.borderPanel.right;
    } else {
      this.toolPanel.style.border = this.objProperties.borderPanel;
    }
    return this;
  }

  hide(direction = this.objProperties.panelDirection){
    if(direction === 'row'){
      this.toolPanel.style.transitionProperty = 'width, padding';
      this.toolPanel.style.width = this.toolPanel.style.paddingRight = this.toolPanel.style.paddingLeft = 0;
      this.toolPanel.style.borderLeft = this.toolPanel.style.borderRight = 0;
    } else{
      this.toolPanel.style.transitionProperty = 'height, padding';
      this.toolPanel.style.height = this.toolPanel.style.paddingTop = this.toolPanel.style.paddingBottom = 0;
      this.toolPanel.style.borderTop = this.toolPanel.style.borderBottom = 0; 
    }
  }

  show(direction = this.objProperties.panelDirection){
    this.setDimension(direction);
  }
    
}