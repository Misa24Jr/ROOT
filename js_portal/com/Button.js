flex.Button = class extends flex.VisualComponent{
	constructor(options) {
        super(options, 'Button');
        this.button = document.createElement('button');	
        this.elements = [this.button];
		this.names = ['Button'];
        this.hasCssClass = true;
        this.isShow = true;
        this.objProperties.caption = '';
		this.button.hasCaption=false;
        this.setProperties(options);
		
	}//********************** End Constructor ************************

	refreshProperties(prop){		
		// *************** PROPIEDADES DEL CSS ******************
		prop.that = this;
		flex.propertyManager.refreshProperties(prop);
		let classObj=flex.controller.getObjClass(prop);
		if(classObj){for (var attrname in classObj) { this.objProperties[attrname] = classObj[attrname] };}
		// ******************************************************

		//	************ PROPIEDADES DEL COMPONENTE *************
		for(var attrname in prop) {this.objProperties[attrname] = prop[attrname]};
		if('xImg' in prop) this.objProperties.xImg = prop.xImg;else this.objProperties.xImg = 4;
		if('yImg' in prop) this.objProperties.yImg = prop.yImg;else this.objProperties.yImg = 4;
		if('showImage' in prop) this.objProperties.showImage = prop.showImage;else this.objProperties.showImage = false;
		if('imagePath' in prop) this.objProperties.imagePath = prop.imagePath;else this.objProperties.imagePath = '';
		if('imageWidth' in prop) this.objProperties.imageWidth = prop.imageWidth;else this.objProperties.imageWidth = parseInt(flex.controller.removePx(this.getPropertyValue(this.button,'--imageWidth')),10);
		if('imageHeight' in prop) this.objProperties.imageHeight = prop.imageHeight;
		else this.objProperties.imageHeight = parseInt(flex.controller.removePx(this.getPropertyValue(this.button,'--imageHeight')),10);
		
		if(!this.button.hasCaption){
			let cap = document.createTextNode(this.objProperties.caption);
			this.button.appendChild(cap);
			this.button.hasCaption=true;
		}				
		if(this.objProperties.showImage)
			this.addImage(this.objProperties.xImg, this.objProperties.yImg, this.objProperties.imagePath);
		return this;
		//********************************************************
	}
	
	getCaption(){return this.objProperties.caption;}
	getObject(){return this.button}
	setFocus(){this.button.focus(); return this;}
	
	changeCaption(newCaption){		
		for(var i=0; i<this.button.childNodes.length; i++){
			if(this.button.childNodes[i].nodeValue===this.objProperties.caption){
				this.button.childNodes[i].nodeValue = newCaption;
				this.objProperties.caption = newCaption;
				this.refreshProperties(this.options);
			}	
		}
		return this;
	}
	
	addImage(x, y, imgPath){
		if(Number.isInteger(this.objProperties.imageWidth) && 
			Number.isInteger(this.objProperties.imageHeight)){
			var img = document.createElement('img');
			img.src = imgPath;
			img.id = imgPath;
			img.style.position = 'absolute';
			img.style.left = x + 'px';
			img.style.top = y + 'px';
			img.style.width = this.objProperties.imageWidth + 'px';
			img.style.height = this.objProperties.imageHeight + 'px';
			this.button.appendChild(img);
			this.objProperties.imagePath = imgPath;
		}
		return this;
	}
	
	removeImage(imgPath){
		this.button.removeChild(document.getElementById(imgPath));
		return this;
	}
	
	changeImage(oldImage, newImage){
		this.removeImage(oldImage);
		this.addImage(this.objProperties.xImg, this.objProperties.yImg, newImage);
		return this;
	} 
}
