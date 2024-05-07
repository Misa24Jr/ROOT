flex.Switch = class extends flex.VisualComponent{
  constructor(options){
    super(options, 'Switch');
    this.label = document.createElement('label');
    this.span = document.createElement('span');
    this.elements = [ this.label];
    this.names = ['Switch'];
    this.hasCssClass = true;

    this.label.addEventListener('click', ()=>{
      this.activeSwitch();
      this.createRippleEffect();
    });
    this.setProperties(options);
  }

  initProperties(){
    
    this.getPanel().style.width = 0;
    this.getPanel().style.height = 0;
  }
  refreshProperties(prop){
    // *************** PROPIEDADES DEL CSS ******************
		prop.that = this;
		flex.propertyManager.refreshProperties(prop);
		let classObj=flex.controller.getObjClass(prop);
		if(classObj){for (var attrname in classObj) { this.objProperties[attrname] = classObj[attrname] };}
		// ******************************************************
    this.span.className = 'SwitchSlider_css' + this.enviroment;;
    this.label.appendChild(this.span);
    this.label.setAttribute('active','false');
    this.span.style.left = 0;
    if(prop.backgroundColor) this.label.style.backgroundColor = prop.backgroundColor;
    if(prop.sizeCircle) this.span.style.width = this.span.style.height = this.objProperties.sizeCircle;
    if(prop.bgButton) this.span.style.backgroundColor = prop.bgButton;
    if(this.objProperties.defaultActive) this.activeSwitch();
  }

  activeSwitch(){
    if(this.label.getAttribute('active') == 'false'){
      this.label.setAttribute('active', 'true');
      this.span.style.left = this.label.getBoundingClientRect().width - this.span.getBoundingClientRect().width + 'px';
      if(this.options.bgActive) this.label.style.backgroundColor = this.options.bgActive;
      if(this.options.bgButtonActive) this.span.style.backgroundColor = this.options.bgButtonActive;
    } else{
      this.label.setAttribute('active', 'false');  
      this.span.style.left = 0;
      this.label.style.backgroundColor = this.options.backgroundColor;
      this.span.style.backgroundColor = this.options.bgButton;
    }
  }

  createRippleEffect(){
    let circle = document.createElement('span'),
        diameter = Math.max(this.span.getBoundingClientRect().width, this.span.getBoundingClientRect().height);
    circle.style.width = circle.style.height = diameter +'px';
    circle.style.left = 0;
    circle.style.top = 0;
    circle.classList.add('SwitchRipple_css'+this.enviroment);
    const ripple = this.span.getElementsByClassName('SwitchRipple_css'+this.enviroment)[0];
    if(ripple) ripple.remove();
    this.span.appendChild(circle)
  }

  getActive(){
    return this.label.getAttribute('active') =='true' ? true : false;
  }
}