flex.Card = class extends flex.VisualComponent {
	constructor(options) {
		super(options, 'Card', false);
		this.card = this.vcContainer;
		this.elements = [this.card];
		this.names = ['Card'];
		this.hasCssClass = true;
		this.setProperties(options);
		this.card.id = this.id;
	}

	addSection(data) {
		data.forEach((da) => {
			const {imageHeight, whiteSpace, backgroundPosition } = da;
			let secContainer = document.createElement('div');
			let textContainer = document.createElement('div');
			let title = document.createElement('p');
			let text = document.createElement('p');
			let img = document.createElement('div');
			
			secContainer.className = 'SectionContainer';
			text.className = 'Text';
			title.className = 'Title';
			textContainer.className = 'TextContainer';

			if (da.image === '' || da.image === false || da.image === null || typeof da.image === "undefined") {
			} 
			else {
				img.style.backgroundImage = `url(${da.image})`;
				img.className = 'Image';

				switch (da.imageAling) {
					case 'center':
						secContainer.style.textAlign = 'center';
						img.style.width = '100%';
						break;
					case 'left':
						img.style.float = da.imageAling;
						img.style.width = '50%';
						img.style.marginRight = '4%';
						break;
					case 'right':
						img.style.float = da.imageAling;
						img.style.width = '50%';
						break;
					default:
						break;
				}
				secContainer.appendChild(img);
			}	
			textContainer.appendChild(title);
			textContainer.appendChild(text);
			if(backgroundPosition) img.style.backgroundPosition = backgroundPosition;
			if(imageHeight) img.style.height = imageHeight;
			if(whiteSpace) text.style.whiteSpace = whiteSpace;
			title.textContent = da.title;
			title.style.textAlign = da.titleAling;
			text.textContent = da.text;

			//AGREGAR LINK 			
			let linkCard = document.createElement('a');
			linkCard.id = da.id;
			let textLinkCard = document.createElement('docTextLinkCard');
			textLinkCard.style.margin = '0';
			if(da.link) linkCard.href = da.link;
			linkCard.className = 'NavBarLink_css'+this.enviroment;
			linkCard.appendChild(textLinkCard);
			textLinkCard.textContent = da.textLink;
			textContainer.appendChild(linkCard);
			
			text.style.columnCount = da.textColumnCount ? da.textColumnCount : 0;
			secContainer.appendChild(textContainer);
			this.card.appendChild(secContainer);
		})
		return this;
	}
  
	refreshProperties(prop) {
		// *************** PROPIEDADES DEL CSS ******************
		prop.that = this;
		flex.propertyManager.refreshProperties(prop);
		let classObj = flex.controller.getObjClass(prop);
		if (classObj) {
			for (var attrname in classObj) {
				this.objProperties[attrname] = classObj[attrname];
			}
		}
		// ******************************************************
	}
}
