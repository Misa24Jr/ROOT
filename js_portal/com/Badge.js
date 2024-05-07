flex.Badge = class extends flex.VisualComponent {
	constructor(options) {
		super(options,'Badge', false);
        this.badge = this.vcContainer;
        this.elements = [this.badge];
        this.names = ['Badge'];
        this.hasCssClass = true;
        this.setProperties(options);
	}
    
    refreshProperties(prop) {
        // *************** PROPIEDADES DEL CSS ******************
		prop.that = this;
		flex.propertyManager.refreshProperties(prop);
		let classObj=flex.controller.getObjClass(prop);
		if(classObj){for (var attrname in classObj) { this.objProperties[attrname] = classObj[attrname] };}
		// ******************************************************
        this.badge.textContent = this.objProperties.caption;
        this.objProperties.width ? this.badge.style.width = this.objProperties.width : this.badge.style.width = getComputedStyle(this.badge).width;    
        this.objProperties.height ? this.badge.style.height = this.objProperties.height : this.badge.style.height = getComputedStyle(this.badge).height; 
        this.objProperties.fontSize ? this.badge.style.fontSize = this.objProperties.fontSize : this.badge.style.fontSize = getComputedStyle(this.badge).fontSize;
    }

    setCaption(newCaption){
        this.objProperties.caption = newCaption;
        this.badge.textContent = this.objProperties.caption;
        return this;
    }

    getCaption(){
        return this.objProperties.caption;
    }

}
