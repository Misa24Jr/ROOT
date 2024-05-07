flex.BlackboardPanel = class extends flex.VisualComponent{
  constructor(options){
    super(options, 'BlackboardPanel',false);

    this.blackboardPanel = document.createElement('section');
    this.secondaryPanel = document.createElement('div');
    this.colorPicker = document.createElement('input');
    this.tpMain = this.createTP('tpMain','column');
    this.cbEdit = this.createCB('cbEdit', 'edit');
    this.cbErase = this.createCB('cbErase','erase'); 
    this.cbUndo = this.createCB('cbUndo', 'back');
    this.cbRedo = this.createCB('cbRedo','forward'); 
    this.cbImage = this.createCB('cbImage','image'); 
    this.cbText = this.createCB('cbText','text'); 
    this.cbFigure = this.createCB('cbFigure','figure'); 
    this.cbCamera = this.createCB('cbCamera','camera');  
    this.cssSecundariesPanels= {
      width: '100%',
      height: '50px',
      position: 'relative',
      borderTopLeftRadius: 0,
      boxShadow: 'none',
      padding: '0.6vw'
    }

    this.tpEdit = this.createTP('tpEdit','row', this.cssSecundariesPanels);
    this.cbDrawWidth1 = this.createCB('cbDrawWidth1','circle');
    this.cbDrawWidth2 = this.createCB('cbDrawWidth2','circle');
    this.cbDrawWidth3 = this.createCB('cbDrawWidth3','circle');
    this.cbDrawWidth4 = this.createCB('cbDrawWidth4','circle');
    this.cbDrawColor = this.createCB('cbDrawColor', 'colorPalette');

    this.tpErase = this.createTP('tpErase', 'row', this.cssSecundariesPanels);
    this.cbEraseWidth1 = this.createCB('cbEraseWidth1','square');
    this.cbEraseWidth2 = this.createCB('cbEraseWidth2','square');
    this.cbEraseWidth3 = this.createCB('cbEraseWidth3','square');
    this.cbEraseWidth4 = this.createCB('cbEraseWidth4','square');
    this.cbCleanCanvas = this.createCB('cbCleanCanvas','brush');

    this.tpFigure = this.createTP('tpFigure','row', this.cssSecundariesPanels);

    this.cbTriangle= this.createCB('cbTriangle','triangle');

    this.cbSquare = this.createCB('cbSquareFigure','square');

    this.cbCircle = this.createCB('cbCircle','circle2');

    this.cbEllipse = this.createCB('cbEllipse','ellipse');

    this.cbRect = this.createCB('cbRect','rect');

    this.cbChangeBlackboard = this.createCB('cbChangeBlackboard','board');

    this.cbHide =  new flex.ControlButton({
      id : 'cbHide' + this.id,
      typeButton : 'arrowLeft',
      idxElement : 0,
      rippleEffect : true,
      hintCaption: 'Hint creado desde css',
      cssClass: {
        width: '50px',
        height: '50px',
        position: 'absolute'
      },
      _built:()=>this.built()
    });
    this.setProperties(options);
  }
  
  built(){
    this.tpEdit.hide('row');
    this.tpErase.hide('row');
    this.tpFigure.hide('row');

    this.blackboardPanel.className = 'BlackboardPanel_css'+this.enviroment;
    this.secondaryPanel.className = 'SecondaryPanel_css'+this.enviroment;
    this.blackboardPanel.appendChild(this.tpMain.getPanel());
    this.blackboardPanel.appendChild(this.secondaryPanel);
    this.tpMain.addItem(this.cbEdit.getPanel());
    this.tpMain.addItem(this.cbErase.getPanel());
    this.tpMain.addItem(this.cbFigure.getPanel());
    this.tpMain.addItem(this.cbUndo.getPanel());
    this.tpMain.addItem(this.cbRedo.getPanel());
    this.tpMain.addItem(this.cbImage.getPanel());
    this.tpMain.addItem(this.cbText.getPanel());
    this.tpMain.addItem(this.cbCamera.getPanel());
    this.tpMain.addItem(this.cbChangeBlackboard.getPanel());
    
    this.secondaryPanel.appendChild(this.tpEdit.getPanel());
    this.cbDrawWidth1.setViewBox(-15, 0, 50, 16);
    this.cbDrawWidth2.setViewBox(-8,0,34,16); 
    this.cbDrawWidth3.setViewBox(-2,1,23,16); 
    this.tpEdit.addItem(this.cbDrawWidth1.getPanel());
    this.tpEdit.addItem(this.cbDrawWidth2.getPanel());
    this.tpEdit.addItem(this.cbDrawWidth3.getPanel());
    this.tpEdit.addItem(this.cbDrawWidth4.getPanel());
    this.tpEdit.addItem(this.cbDrawColor.getPanel());
    this.colorPicker.type = 'color';
    this.colorPicker.style.display = 'none';
    this.tpEdit.addItem(this.colorPicker);
    this.secondaryPanel.appendChild(this.tpErase.getPanel());

    this.cbEraseWidth1.setViewBox(-15, 0, 50, 16);
    this.cbEraseWidth2.setViewBox(-8,0,34,16); 
    this.cbEraseWidth3.setViewBox(-2,0,23,16); 
    this.tpErase.addItem(this.cbEraseWidth1.getPanel());
    this.tpErase.addItem(this.cbEraseWidth2.getPanel());
    this.tpErase.addItem(this.cbEraseWidth3.getPanel());
    this.tpErase.addItem(this.cbEraseWidth4.getPanel());
    this.tpErase.addItem(this.cbCleanCanvas.getPanel());

    this.secondaryPanel.appendChild(this.tpFigure.getPanel());
    this.tpFigure.addItem(this.cbTriangle.getPanel());
    this.tpFigure.addItem(this.cbCircle.getPanel());
    this.tpFigure.addItem(this.cbEllipse.getPanel());
    this.tpFigure.addItem(this.cbSquare.getPanel());
    this.tpFigure.addItem(this.cbRect.getPanel());

    this.cbEdit.getPanel().setAttribute('active',false);
    this.cbErase.getPanel().setAttribute('active',false);
    this.cbFigure.getPanel().setAttribute('active',false);
    this.cbHide.getPanel().setAttribute('active', false);

    this.blackboardPanel.appendChild(this.cbHide.getPanel());
    this.events();
  }

  events(){
    this.cbHide.onClick(()=>{
      this.cbHide.rotate()
      if (this.cbHide.getRotate()){
        this.tpEdit.hide('row');
        this.tpErase.hide('row');
        this.tpFigure.hide('row');
        this.tpMain.hide('row');
        this.cbEdit.getPanel().setAttribute('active',false);
        this.cbErase.getPanel().setAttribute('active',false);
        this.cbFigure.getPanel().setAttribute('active',false);
      } else{
        this.tpMain.show('row');
      }
    });

    this.cbEdit.onClick(()=>{
      this.collapseToolPanel(this.cbEdit, this.tpEdit);
      if(this.objProperties.onClickEdit) this.objProperties.onClickEdit();
    });

    this.cbErase.onClick(()=>{
      this.collapseToolPanel(this.cbErase, this.tpErase);
      if(this.objProperties.onClickErase) this.objProperties.onClickErase();
    });

    this.cbFigure.onClick(()=>{
      this.collapseToolPanel(this.cbFigure, this.tpFigure);
      if(this.objProperties.onClickFigure) this.objProperties.onClickFigure();
    });

    this.cbUndo.onClick(()=>{
      if(this.objProperties.onClickUndo) this.objProperties.onClickUndo();
    });

    this.cbRedo.onClick(()=>{
      if(this.objProperties.onClickRedo) this.objProperties.onClickRedo();
    });

    this.cbImage.onClick(()=>{
      if(this.objProperties.onClickImage) this.objProperties.onClickImage();
    });

    this.cbText.onClick(()=>{
      if(this.objProperties.onClickText) this.objProperties.onClickText();
    });

    this.cbCamera.onClick(()=>{
      if(this.objProperties.onClickCamera) this.objProperties.onClickCamera();
    });

    this.cbDrawWidth1.onClick(()=>{
      if(this.objProperties.onClickDrawWidth1) this.objProperties.onClickDrawWidth1();
    });

    this.cbDrawWidth2.onClick(()=>{
      if(this.objProperties.onClickDrawWidth2) this.objProperties.onClickDrawWidth2();
    });

    this.cbDrawWidth3.onClick(()=>{
      if(this.objProperties.onClickDrawWidth3) this.objProperties.onClickDrawWidth3();
    });

    this.cbDrawWidth4.onClick(()=>{
      if(this.objProperties.onClickDrawWidth4) this.objProperties.onClickDrawWidth4();
    });

    this.cbDrawColor.onClick(()=>{
      this.colorPicker.click();
      if(this.objProperties.onClickDrawColor) this.objProperties.onClickDrawColor();
    });

    this.colorPicker.addEventListener('change',()=>{
      if(this.objProperties.onDrawColorChange) this.objProperties.onDrawColorChange();
    })

    this.cbEraseWidth1.onClick(()=>{
      if(this.objProperties.onClickEraseWidth1) this.objProperties.onClickEraseWidth1();
    });

    this.cbEraseWidth2.onClick(()=>{
      if(this.objProperties.onClickEraseWidth2) this.objProperties.onClickEraseWidth2();
    });

    this.cbEraseWidth3.onClick(()=>{
      if(this.objProperties.onClickEraseWidth3) this.objProperties.onClickEraseWidth3();
    });

    this.cbEraseWidth4.onClick(()=>{
      if(this.objProperties.onClickEraseWidth4) this.objProperties.onClickEraseWidth4();
    });

    this.cbCleanCanvas.onClick(()=>{
      if(this.objProperties.onClickCleanCanvas) this.objProperties.onClickCleanCanvas();
    });

    this.cbTriangle.onClick(()=>{
      if(this.objProperties.onClickTriangle) this.objProperties.onClickTriangle();
    });

    this.cbCircle.onClick(()=>{
      if(this.objProperties.onClickCircle) this.objProperties.onClickCircle();
    });

    this.cbEllipse.onClick(()=>{
      if(this.objProperties.onClickEllipse) this.objProperties.onClickEllipse();
    });

    this.cbSquare.onClick(()=>{
      if(this.objProperties.onClickSquare) this.objProperties.onClickSquare();
    });

    this.cbRect.onClick(()=>{
      if(this.objProperties.onClickRectangle) this.objProperties.onClickRectangle();
    });

    this.cbChangeBlackboard.onClick(()=>{
      if(this.objProperties.onChangeBlackboard) this.objProperties.onChangeBlackboard();
    });
  }

  refreshProperties(prop){
    prop.that = this;
    flex.propertyManager.refreshProperties(prop);
    let classObj=flex.controller.getObjClass(prop);
    if(classObj){for (var attrname in classObj) { this.objProperties[attrname] = classObj[attrname] }};
  }

  onClickEdit(exFuntc){this.objProperties.onClickEdit = exFuntc};
  onClickErase(exFuntc){this.objProperties.onClickErase = exFuntc};
  onClickFigure(exFuntc){this.objProperties.onClickFigure = exFuntc};
  onClickUndo(exFuntc){this.objProperties.onClickUndo = exFuntc};
  onClickRedo(exFuntc){this.objProperties.onClickRedo = exFuntc};
  onClickImage(exFuntc){this.objProperties.onClickImage = exFuntc};
  onClickText(exFuntc){this.objProperties.onClickText = exFuntc};
  onClickCamera(exFuntc){this.objProperties.onClickCamera = exFuntc};
  onClickDrawWidth1(exFuntc){this.objProperties.onClickDrawWidth1 = exFuntc};
  onClickDrawWidth2(exFuntc){this.objProperties.onClickDrawWidth2 = exFuntc};
  onClickDrawWidth3(exFuntc){this.objProperties.onClickDrawWidth3 = exFuntc};
  onClickDrawWidth4(exFuntc){this.objProperties.onClickDrawWidth4 = exFuntc};
  onClickDrawColor(exFuntc){this.objProperties.onClickDrawColor = exFuntc};
  onDrawColorChange(exFuntc){this.objProperties.onDrawColorChange = exFuntc};
  onClickEraseWidth1(exFuntc){this.objProperties.onClickEraseWidth1 = exFuntc};
  onClickEraseWidth2(exFuntc){this.objProperties.onClickEraseWidth2 = exFuntc};
  onClickEraseWidth3(exFuntc){this.objProperties.onClickEraseWidth3 = exFuntc};
  onClickEraseWidth4(exFuntc){this.objProperties.onClickEraseWidth4 = exFuntc};
  onClickCleanCanvas(exFuntc){this.objProperties.onClickCleanCanvas = exFuntc};
  onClickTriangle(exFuntc){this.objProperties.onClickTriangle = exFuntc};
  onClickCircle(exFuntc){this.objProperties.onClickCircle = exFuntc};
  onClickEllipse(exFuntc){this.objProperties.onClickEllipse = exFuntc};
  onClickSquare(exFuntc){this.objProperties.onClickSquare = exFuntc};
  onClickRectangle(exFuntc){this.objProperties.onClickRectangle = exFuntc};
  onChangeBlackboard(exFunct){this.objProperties.onChangeBlackboard = exFunct};

  createCB(id, typeButton, cssClass){
    let cb = new flex.ControlButton({
      id : id + this.id,
      rippleEffect: true,
      typeButton,
      idxElement : 0,
      cssClass
    });
    return cb;
  }

  getDrawColor(){
    return this.colorPicker.value;
  }

  createTP(id, panelDirection = 'row', cssClass){
    let tp =  new flex.ToolPanel({
      id: id + this.id,
      idxElement: 0,
      panelDirection,
      cssClass: cssClass ? cssClass : {
        width: '100%',
        padding:'10px'
      }
    });
    return tp;
  }

  addToBody(){
    document.body.appendChild(this.blackboardPanel);
    return this;
  }

  collapseToolPanel(cb, tp){
    if (cb.getPanel().getAttribute('active') == 'true'){
      tp.hide('row');
      cb.getPanel().setAttribute('active', false);
    } else{
      tp.show('row');
      cb.getPanel().setAttribute('active', true);
    }
    return this;
  }

  getPanel(){
    return this.blackboardPanel;
  }

}