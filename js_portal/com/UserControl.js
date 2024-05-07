flex.UserControl = class {
  constructor(options){
    this.options = options;
    this.id = this.options.id;
    this.userPanelSeed = 0;
    this.pos = 0;
    this.listNames = options.listNames;
    this.userControl = document.createElement('section');
    this.tpMainContainer = new flex.ToolPanel({
      id: 'tpMainContainer'+this.id,
      idxElement: 0,
      panelDirection: 'column',
      cssClass: {
        padding: '5px',
        width: '100%',
        height: '100%', 
        border: 'none',
        boxShadow: 'none'
      }
    });
   
    this.cbHide = new flex.ControlButton({
      id: 'cbHideUserControl'+this.id,
      idxElement: 0,
      rippleEffect : true,
      typeButton: 'arrowRight'
    });

    this.accordion = new flex.Accordion({
      id: 'accordion'+this.id,
      width: '100%',
      maxHeight: '38vh',
      cbColor: '#FFFFFF'
    });

    this.userPanels = this.listNames.map(name=>{
      this.userPanelSeed++;
      return new flex.UserPanel({
        id: 'userPanel'+this.userPanelSeed,
        height: '80px',
        width: '95%',
        userPanelName: name, 
        onClick: ()=>this.setChatTitle(name)
      })
    });
    this.badgeAccordion = new flex.Badge({
      id: 'badgeAccordion'+this.userPanelSeed+1,
      idxElement: 0,
      caption: 0,
      cssClass: {
        width: '15px',
        height: '15px',
      }
    });

    this.badgeUserControl = new flex.Badge({
      id: 'badgeUserControl'+this.userPanelSeed+1,
      caption: 0,
      idxElement: 0,
      cssClass: {
        width: '18px',
        height: '18px',
        lineHeight: '18px',
        left: '-30px',
        top: '10px',
        position: 'absolute',
        display: 'none'
      }
    });

    this.chat = new flex.Chat({
      id: 'userControlChat'+this.id,
      title: 'Seleccione un usuario.',
      width: '100%',
      messageBox: true,
    });
    this.chat._allBuilt = ()=>this.built();

  }
  built(){
    this.userControl.className= 'UserControl_css0';
    this.userControl.appendChild(this.badgeUserControl.getPanel());
    this.userControl.appendChild(this.cbHide.getPanel());
    this.tpMainContainer.getPanel().style.justifyContent = 'flex-start';
    this.userControl.appendChild(this.tpMainContainer.getPanel());
    this.tpMainContainer.addItem(this.accordion.getPanel());
    this.tpMainContainer.addItem(this.chat.getPanel())
    this.accordion.addItem({
      title: 'estudiantes',
      typeIcon: this.badgeAccordion.getPanel(),
      elements: this.userPanels.map(element => element.getPanel()),
    });
    this.pos = getComputedStyle(this.tpMainContainer.getPanel()).width;
    this.events();
  }

  events(){
    this.cbHide.onClick(()=>{
      this.cbHide.rotate();
      if (this.cbHide.getRotate()){
        this.userControl.style.transform = 'translateX(100%)';
        this.tpMainContainer.hide('row');
        this.badgeUserControl.show();
      } else{
        this.badgeUserControl.hide();
        this.userControl.style.transform = 'translateX(0)';
        this.tpMainContainer.show('row');
      }
    });
    this.accordion.onClick(()=>{
      this.chat.goToChatEnd();
    });
  }

  getTotalNotification(){
    let value = 0;
    for (const userPanel of this.userPanels) {
      value += userPanel.getNotification();
    }
    return value;
  }

  updateTotalNotification(){
    this.badgeAccordion.setCaption(this.getTotalNotification());
    this.badgeUserControl.setCaption(this.getTotalNotification());
  }

  addToBody(){
    document.body.appendChild(this.userControl)
  }

  setChatTitle(title){
    this.chat.setTitle(title);
    return this;
  }

  getPanel(){
    return this.userControl;
  }

  getUserPanel(panel){
    if (panel === 0) return this.userPanels[0];
    return panel && typeof panel === 'number' ? this.userPanels[panel] : this.userPanels;
  }
}