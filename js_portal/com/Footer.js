flex.Footer = class extends flex.VisualComponent{
  constructor(options){
    super(options, 'Footer', false);
    this.footer = document.createElement('footer');
    this.upSide = document.createElement('div');
    this.imageLogo = document.createElement('img');
    this.containerDirection = document.createElement('div');
    this.contactSection = document.createElement('div');
    this.creatorSection = document.createElement('div');
    this.setProperties(options);
    this.initProperties();
  }

  initProperties(){
    this.footer.className = 'Footer_css'+this.enviroment;
    this.upSide.className = "FooterUpSide_css"+this.enviroment;
    this.imageLogo.className = 'FooterLogo_css'+this.enviroment;
    this.containerDirection.className = 'FooterDirection_css'+this.enviroment;
    this.contactSection.className = 'FooterContact_css'+this.enviroment;
    this.creatorSection.className  = 'FooterCreator_css'+this.enviroment;

    this.footer.appendChild(this.upSide);
    this.upSide.appendChild(this.imageLogo);
    this.upSide.appendChild(this.containerDirection);
    this.upSide.appendChild(this.contactSection);
    this.footer.appendChild(this.creatorSection);
    this.imageLogo.src = this.objProperties.imgSrc;
    this.setDirectionInfo();
    this.setContactInfo();
    this.setCreatorInfo();
  }

  setDirectionInfo(){
    let {direction} = this.objProperties;
    this.containerDirection.innerText = direction;
    return this;
  }

  setContactInfo(){
    const {email, phone, instagram, facebook, youTube} = this.objProperties.contactInfo;
    const cbContainer = document.createElement('div');
    cbContainer.className = 'FooterContactSocialLinks_css'+this.enviroment;
    if(email){
      this.contactSection.appendChild(this.createCb({
        id: 'cbContactEmail'+this.id,
        label : email,
        typeButton: 'gMail',
      }));
    }
    if(phone){
        this.contactSection.appendChild(this.createCb({
          id: 'cbContactPhone'+this.id,
          typeButton: 'call',
          label: phone,
      }));
    }
    if(facebook){
      cbContainer.appendChild(this.createCb({
        id: 'cbContactFacebook'+this.id, 
        typeButton: 'facebook', 
        href: facebook
      }));  
    }
    if(youTube){
      cbContainer.appendChild(this.createCb({
        id: 'cbContactYouTube'+this.id, 
        typeButton: 'youTube',
        href: youTube
      }));
    }
    if(instagram){
      cbContainer.appendChild(this.createCb({
        id: 'cbContactInstagram'+this.id, 
        typeButton: 'instagram',
        href: instagram,
      }));
    }
    this.contactSection.appendChild(cbContainer);

  }

  setCreatorInfo(){
    let {name, email, phone, facebook, instagram, imgSrc, twitter, youTube} = this.objProperties.creatorInfo;
    this.imageCreator = document.createElement('img');
    this.imageCreator.src = imgSrc;
    this.imageCreator.className = 'FooterCreatorLogo_css'+this.enviroment;
    this.creatorSection.appendChild(this.imageCreator);
    if(name){
      let spanName = document.createElement('span');
      spanName.className = 'FooterCreatorElement_css0'+this.enviroment;
      spanName.textContent = name;
      this.creatorSection.appendChild(spanName);
    }
    if(facebook){
      this.creatorSection.appendChild(this.createCb({
        id: 'cbCreatorFacebook'+this.id, 
        typeButton: 'facebook', 
        href: facebook,
        className: 'FooterCreatorElement_css'+this.enviroment
      }));  
    }
    if(instagram){
      this.creatorSection.appendChild(this.createCb({
        id: 'cbCreatorInstagram'+this.id, 
        typeButton: 'instagram',
        href: instagram,
        className: 'FooterCreatorElement_css'+this.enviroment
      }));
    }
    if(twitter){
      this.creatorSection.appendChild(this.createCb({
        id: 'cbCreatorTwitter'+this.id, 
        typeButton: 'twitter',
        href: twitter,
        className: 'FooterCreatorElement_css'+this.enviroment
      }));
    }
    if(youTube){
      this.creatorSection.appendChild(this.createCb({
        id: 'cbCreatorYouTube'+this.id, 
        typeButton: 'youTube',
        href: youTube,
        className: 'FooterCreatorElement_css'+this.enviroment
      }));
    }
    if(phone){
      this.creatorSection.appendChild(this.createCb({
        id: 'cbCreatorPhone'+this.id, 
        typeButton:'call',
        label: phone,
        className: 'FooterCreatorElement_css'+this.enviroment
      }));
    }
    if(email){
      this.creatorSection.appendChild(this.createCb({
        id: 'cbCreatorEmail'+this.id, 
        typeButton:'gMail', 
        label: email,
        className: 'FooterCreatorElement_css'+this.enviroment
      }));
    }
    
    return this;
  }

  createCb(options){
    let {id, href, label, typeButton, className} = options;
    let link = document.createElement('a');
    let container = document.createElement('div');
    let cb = new flex.ControlButton({
      id,
      typeButton,
      backgroundColor1:' #FFFFFF',
      cursor: !label ? 'pointer' : 'default',
      _built: ()=>{
        if(href){
          link.className = className ? className : 'FooterContactElement_css'+this.enviroment;
          link.href = href;
          link.appendChild(cb.getPanel());
        }
        if(label){
          let span = document.createElement('span');
          container.className = className ? className :'FooterContactElement_css'+this.enviroment;
          span.textContent = label;
          container.appendChild(cb.getPanel());
          container.appendChild(span);
        }
      }
    });
    if(label) return container;
    return link;
  }

  getCreatorPanel(){
    return this.creatorSection;
  }

  getPanel(){
    return this.footer;
  }

  addToBody(){
    document.body.appendChild(this.footer);
    return this;
  }
}