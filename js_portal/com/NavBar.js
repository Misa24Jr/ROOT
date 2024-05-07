flex.NavBar = class extends flex.VisualComponent{
  constructor(options){
    super(options, 'NavrBar', false);
    this.vcContainer = document.createElement('nav');
    this.navBar = this.vcContainer;
    this.elements = [this.navBar];
    this.names = ['NavBar'];
    this.hasCssClass = true;
    this.hamburguer = document.createElement('div');
    this.upSide = document.createElement('section');
    this.downSide = document.createElement('div'); 
    this.linksContainer = document.createElement('section');
    this.bar1 = document.createElement('div');
    this.bar2 = document.createElement('div');
    this.bar3 = document.createElement('div');
    this.contactSection = document.createElement('div');
    this.imgLogo = document.createElement('img');
    this.logoLink = document.createElement('a');
    this.imgLogo.src = this.objProperties.imgSrc;
    this.logoLink.href = this.objProperties.logoLink;
    this.setColorOnScroll = this.setColorOnScroll.bind(this);
    this.setProperties(options);
  }
  
  initProperties(){
    this.setActiveHamburguer(false);
    // this.navBar.className = 'NavBar_css'+this.enviroment;
    this.upSide.className = 'NavBarUpSide_css'+this.enviroment;
    this.imgLogo.className = 'NavBarImageLogo_css'+this.enviroment;
    this.logoLink.className = 'NavBarLogoLink_css'+this.enviroment;
    this.linksContainer.className = 'NavBarLinksContainer_css'+this.enviroment;
    this.hamburguer.className = 'NavBarHamburguer_css'+this.enviroment;
    this.bar1.className = 'NavBarBar1_css'+this.enviroment;
    this.bar2.className = 'NavBarBar2_css'+this.enviroment;
    this.bar3.className = 'NavBarBar3_css'+this.enviroment;
    this.contactSection.className = 'NavBarContactSection_css'+this.enviroment;
    this.downSide.classList = 'NavBarDownSide_css'+this.enviroment;
    this.linksContainer.setAttribute('active',false);
    this.linksContainer.tabIndex = 1;

    // this.navBar.appendChild(this.upSide);
    this.navBar.appendChild(this.downSide);
    this.downSide.appendChild(this.hamburguer);
    this.upSide.appendChild(this.contactSection);
    // this.upSide.appendChild(this.hamburguer);
    // this.upSide.appendChild(this.logoLink);
    this.hamburguer.appendChild(this.bar1);
    this.hamburguer.appendChild(this.bar2);
    this.hamburguer.appendChild(this.bar3);
    this.logoLink.appendChild(this.imgLogo);
    this.downSide.appendChild(this.logoLink);
    this.downSide.appendChild(this.linksContainer);
    this.setLinks();
    this.events();

    return this;
  }

  events(){
    document.addEventListener('scroll',e=>{
      if ( document.documentElement.scrollTop > 0) {
        if(this.objProperties.onScrollTopOut) this.objProperties.onScrollTopOut(); 
        this.setColorOnScroll(true);
        
      } else {
        if(this.objProperties.onScrollTopEnter) this.objProperties.onScrollTopEnter(); 
        this.setColorOnScroll(false);
      }
    });

    [...this.linksContainer.children].forEach(option =>{
      option.addEventListener('click',e=>{
        if(this.getActiveHamburguer()){
          this.setActiveHamburguer(false);
          this.linksContainer.setAttribute('active',false);
        } 
      })
    });
    
    this.hamburguer.addEventListener('click',()=>{
      if(this.getActiveHamburguer() === true){
        this.setActiveHamburguer(false);
        console.log(document.body)
        document.documentElement.style.overflowY = 'auto';
        this.linksContainer.setAttribute('active',false);
      } else{
        this.setActiveHamburguer(true);
        document.documentElement.style.overflowY = 'hidden';
        this.linksContainer.setAttribute('active',true);
        this.linksContainer.focus();
      }
    });
  }

  onScrollTopOut(funct){
    this.objProperties.onScrollTopOut = funct 
    return this;
  }

  onScrollTopEnter(funct){
    this.objProperties.onScrollTopEnter = funct 
    return this;
  }

  getPanel(){
    return this.navBar;
  }

  createButtonLink(link, caption, typeButton){
    const container = document.createElement('a');
    const cb = new flex.ControlButton({
      id: caption + this.id,
      typeButton,
      _built:()=>{
        const text = document.createElement('p')
        container.href = link;
        container.className = 'NavBarButtonLink_css'+this.enviroment;
        text.className = 'NavBarButtonLinkText_css'+this.enviroment;
        text.innerText = caption;
        text.style.margin = 0;
        container.appendChild(cb.getPanel());
        container.appendChild(text);
        cb.getPanel().style.marginRight = '10px';
      }
    });
    return container;
  }

  setContact(objContact){
    let {email, phone, facebook, instagram, twitter, youTube} = objContact;
    if(email){
      this.createCb({
        id: 'cbContactEmail'+this.id, 
        typeButton:'gMail', 
        label: email
      });
    }
    if(phone){
      this.createCb({
        id: 'cbContactPhone'+this.id, 
        typeButton:'call', 
        label: phone
      });
    }
    if(facebook){
      this.createCb({
        id: 'cbContactFacebook'+this.id, 
        typeButton: 'facebook', 
        href: facebook
      });
    }
    if(instagram){
      this.createCb({
        id: 'cbContactInstagram'+this.id, 
        typeButton: 'instagram',
        href: instagram,
      });
    }
    if(twitter){
      this.createCb({
        id: 'cbContactTwitter'+this.id, 
        typeButton: 'twitter',
        href: twitter,
      });
    }
    if(youTube){
      this.createCb({
        id: 'cbContactYouTube'+this.id, 
        typeButton: 'youTube',
        href: youTube,
      });
    }
  }

  setColorOnScroll(condition){
    if ( condition && innerWidth > 1000) {
      this.navBar.style.backgroundColor = this.getPropertyValue(this.navBar, '--backgroundScroll');
      this.navBar.style.color = this.getPropertyValue(this.navBar, '--fontColorScroll');
      this.getButtonLinks()[1].setAttribute('active',true);
      this.navBar.style.boxShadow = '0 6px 12px 0 rgb(0 0 0 / 8%)';
    } else {
      this.getButtonLinks()[1].setAttribute('active',false);
      this.navBar.style.backgroundColor = this.getPropertyValue(this.navBar, '--backgroundInitial');
      this.navBar.style.color = this.getPropertyValue(this.navBar, '--fontColorInitial');
      this.navBar.style.boxShadow = 'none';
    }
  }

  createCb(options){
    let {id, href, label, typeButton} = options;
    let cb = new flex.ControlButton({
        id, 
        width: 20,
        height:20,
        typeButton,
        bgColorOver: 'white',
        cursor: !label ? 'pointer' : 'default',
        _built: ()=>{
          if(href){
            let link = document.createElement('a');
            link.className = 'NavBarContactElement_css'+this.enviroment;
            link.href = href;
            link.appendChild(cb.getPanel());
            this.contactSection.appendChild(link);
          }
          if(label){
            let container = document.createElement('div');
            let span = document.createElement('span');
            container.className = 'NavBarContactElement_css'+this.enviroment;
            span.textContent = label;
            container.appendChild(cb.getPanel());
            container.appendChild(span);
            this.contactSection.appendChild(container);
          }
        }
      });
      return this;
    }

  setActiveHamburguer(state){
    this.hamburguer.setAttribute('active',state );
    return this;
  }

  getActiveHamburguer(){
    return this.hamburguer.getAttribute('active') == 'true'? true : false;
  }

  addToBody(){
    document.body.appendChild(this.navBar);
    return this
  }

  setLinks() {
    for (let option of this.objProperties.options) {
      let {id, title, typeIcon, link} = option;
      if(typeIcon !== undefined){
        this.downSide.appendChild(this.createButtonLink(link, title, typeIcon));
      }
      else{
        let anchor = document.createElement('a');
          anchor.id = id;
          let text = document.createElement('p');
          text.style.margin = '0';
          if(link) anchor.href = link;
          anchor.className = 'NavBarLink_css'+this.enviroment;
          // anchor.append(cb.getPanel()); 
          anchor.appendChild(text);
          text.textContent = title;
          this.linksContainer.appendChild(anchor);
      }
      // }
    }
    return this;
  }

  setActualSection(id){
    this.linksContainer.querySelector(`#${id}`).setAttribute('active',true);
    return this;
  }

  getSection(id){
    return this.linksContainer.querySelector(`#${id}`);
  }

  getButtonLinks(){
    return [...this.downSide.querySelectorAll(`.NavBarButtonLink_css0`)];
  }

  hideButtonLinks(){
    this.getButtonLinks().forEach(button=>{
      button.style.display = 'none';
    });
    return this;
  }

  showButtonLinks(){
    this.getButtonLinks().forEach(button=>{
      button.style.display = 'flex';
    });
    return this;
  }

  refreshProperties(prop) {
    // *************** PROPIEDADES DEL CSS ******************
      prop.that = this;
      flex.propertyManager.refreshProperties(prop);
      let classObj=flex.controller.getObjClass(prop);
      if(classObj){for (var attrname in classObj) { this.objProperties[attrname] = classObj[attrname] };}
  }
}