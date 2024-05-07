flex.Hero = class extends flex.VisualComponent{
  constructor(options){
    super(options, 'Hero', false);
    this.hero = this.vcContainer;
    this.image = document.createElement('img');
    this.titleContent = document.createElement('div');
    this.title = document.createElement('h1');
    this.subTitle = document.createElement('p');
    this.linkContent = document.createElement('div');
    this.elements = [this.hero];
    this.names = ['Hero'];
    this.hasCssClass = true;
    this.setProperties(options);
  }

  initProperties(){
    this.image.className = 'HeroImage_css'+this.enviroment;
    this.titleContent.className = 'HeroTitleContent_css'+this.enviroment;
    this.title.className = 'HeroTitle_css'+this.enviroment;
    this.subTitle.className = 'HeroSubTitle_css'+this.enviroment;
    this.linkContent.className = 'HeroLinkContent_css'+this.enviroment;
    // this.link1.className = 'HeroLink_css'+this.enviroment;
    // this.link2.className = 'HeroLink_css'+this.enviroment;
    // this.image.style.backgroundImage = `url(${this.objProperties.imgSrc})`;
    this.image.src = this.objProperties.imgSrc;
    this.hero.appendChild(this.titleContent);
    this.hero.appendChild(this.linkContent);
    this.hero.appendChild(this.image);
    this.titleContent.appendChild(this.title);
    this.titleContent.appendChild(this.subTitle);
    // this.linkContent.appendChild(this.link1);
    // this.linkContent.appendChild(this.link2);
  }

   
  refreshProperties(prop) {
  // *************** PROPIEDADES DEL CSS ******************
    prop.that = this;
    flex.propertyManager.refreshProperties(prop);
    let classObj=flex.controller.getObjClass(prop);
    if(classObj){for (var attrname in classObj) { this.objProperties[attrname] = classObj[attrname] };}
    this.setHeroText();
    this.setLinks();

    if(this.objProperties.fullHeight === false) this.hero.style.height = '25vh';
  }

  setLinks(){
    if(this.objProperties.linksOptions){
      for(let linkOption of this.objProperties.linksOptions){
        const {link, caption, typeButton} = linkOption;
        this.linkContent.appendChild(this.createButtonLink(link, caption, typeButton));
      }
    }
    return this;
  }

  setHeroText(){
    const {title, subTitle} = this.objProperties;
    this.title.innerText = title;
    this.subTitle.innerText = subTitle; 
    return this;
  }

  setTitle(title){
    this.objProperties.title = title;
    this.setHeroText();
    return this;
  }

  setSubTitle(subTitle){
    this.objProperties.subTitle = subTitle;
    this.setHeroText();
  }

  getHeroText(){
    const {title, subTitle} = this.objProperties;
    return {title, subTitle};
  }

  getHeroTitle(){
    return this.getHeroText().title;
  }

  getHeroSubTitle(){
    return this.getHeroTitle().subTitle;
  }

  createButtonLink(link, caption, typeButton){
    const container = document.createElement('a');
    const cb = new flex.ControlButton({
      id: caption + this.id,
      typeButton,
      idxElement: 0,
      _built:()=>{
        const text = document.createElement('p')
        container.href = link;
        container.className = 'HeroLink_css'+this.enviroment;
        text.className = 'HeroLinkText_css'+this.enviroment;
        text.innerText = caption;
        text.style.margin = 0;
        container.appendChild(cb.getPanel());
        container.appendChild(text);
      }
    })
    return container;
  }

}