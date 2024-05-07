flex.MessageBox = class extends flex.VisualComponent{
    constructor(options) {
        super(options, 'MessageBox', false);
        var that = this;
        this.messageBox = this.vcContainer;
        this.elements = [this.messageBox];
        this.names = ['MessageBox'];
        this.hasCssClass = true;
        this.isShow = true;
        this.objProperties.onClickAceptar = ()=>{};
        this.TYPE_INFO = 'info';
        this.TYPE_ALERT = 'alert';
        this.TYPE_WARNING = 'warning';
        this.TYPE_ERROR = 'error';
        this.TYPE_CONFIRM = 'confirm';

        this.divTitle = document.createElement('div');
        this.divBody = document.createElement('div');
        this.divButton = document.createElement('div');
        this.divContainerTitle = document.createElement('div');
        this.divContainerButton = document.createElement('div');
        this.divContainerImage = document.createElement('div');
        this.divContainerMsg = document.createElement('div');

        this.vcContainer.appendChild(this.divTitle);
        this.vcContainer.appendChild(this.divBody);
        this.vcContainer.appendChild(this.divButton);

        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
              if(entry.contentBoxSize) {
                  //console.log(1,entry.target.getBoundingClientRect().height);
              } 
              else {
                //console.log(2,entry.target);
              }
            }
          });
          
        resizeObserver.observe(this.vcContainer);

        this.buttonOk = new flex.Button({
            id: 'Button_ok_MessageBox_Title_'+this.id,
            caption: 'Cerrar',
            idxElement :0,
            cssClass : 
            {
                position:'relative',
                width: '30%',
                height: '100%',
                textAlign: 'center',
                fontSize:'80%'
            },               
            onClick : ()=>{that.hide(); that.objProperties.onClickAceptar();},
            _built: () => {
                that.setProperties(options);
            }
        });  

        this.objProperties.onClickImage = ()=>{}
        this.buttonImg = new flex.ControlButton({
            id: 'ControlButton_MessageBox_Title_'+this.id,
            idxElement:0,
            cssClass :{
                left:'0px',
                top:'0px',
                width: '50px',
                height: '50px',
                position: 'relative',
            },
            positionHint: 'right',
            typeButton: 'warning',
            showHint: false,
            onClick : ()=>{this.objProperties.onClickImage();},
            _built: () => {              
            }
        });
        
        this.buttonClose = new flex.ControlButton({
            id: 'ControlButton_MessageBox_ButonClose_'+this.id,
            idxElement:0,
            cssClass :{
                left:'0px',
                top:'0px',
                width: '20px',
                height: '20px',
                position: 'relative'
            },
            positionHint: 'bottom',
            typeButton: 'closeButton',
            showHint: true,
            hint:'Cerrar',
            _built: () => {              
            },
            onClick : ()=>{that.hide();}
        });
    } //*********************************** FIN DEL CONSTRUCTOR ************************************/
    onClickImage(extFunct){this.objProperties.onClickImage = extFunct;}
    onClickAceptar(extFunct){this.objProperties.onClickAceptar = extFunct;}
    setTitle(prop) {this.fp.setTitle(prop);return this;}
    setActionConfirm(extFunc) {this.objProperties.actionConfirm = extFunc;return this;}
    addMessage(prop) {this.fp.addText(prop);return this;}

    initProperties(){
        this.objProperties.fontWeightTitle = this.getPropertyValue(this.messageBox,'--fontWeightTitle');
        this.objProperties.colorTitle = this.getPropertyValue(this.messageBox,'--colorTitle');
        this.objProperties.fontSizeTitle = parseInt(flex.controller.removePx(this.getPropertyValue(this.messageBox,'--fontSizeTitle')),10);
        this.objProperties.fontFamilyTitle = this.getPropertyValue(this.messageBox,'--fontFamilyTitle');
        this.objProperties.centerScreen = 'true';
        this.objProperties.widthContainer = parseInt(flex.controller.removePx(this.getPropertyValue(this.messageBox,'width')),10);
        this.objProperties.colorButtonClose = this.getPropertyValue(this.messageBox,'--colorButtonClose');
        this.objProperties.fontSizeText = parseInt(flex.controller.removePx(this.getPropertyValue(this.messageBox,'font-size')),10);
        this.objProperties.fontWeightText = this.getPropertyValue(this.messageBox,'font-weight');
        this.objProperties.colorText = this.getPropertyValue(this.messageBox,'color');
        this.objProperties.fontFamilyText = this.getPropertyValue(this.messageBox,'font-family');     
        //WIDTH DE CADA FILA
        this.divTitle.style.width='100%';
        this.divBody.style.width='100%';
        this.divButton.style.width='100%';
        //HEIGHT DE CADA FILA
        this.divTitle.style.height='12%';
        this.divBody.style.height='70%';
        this.divButton.style.height='18%';
        //DEFINICION DE COLUMNAS
        this.divTitle.style.display = 'grid';
        this.divTitle.style.gridTemplateColumns = "4fr 0.2fr";
        this.divTitle.style.gridTemplateRows = "1fr";
        this.divContainerTitle.style.width = '100%';
        this.divTitle.appendChild(this.divContainerTitle);
        this.divTitle.appendChild(this.divContainerButton);
        this.divContainerButton.appendChild(this.buttonClose.getPanel());
        this.divContainerButton.style.placeItem='center';
        this.divContainerTitle.style.marginLeft ='10px';
        this.divBody.style.display = 'grid';
        this.divBody.style.gridTemplateColumns = "0.5fr 4fr";
        this.divBody.style.gridTemplateRows = "1fr";
        this.divBody.appendChild(this.divContainerImage);
        this.divBody.appendChild(this.divContainerMsg);
        this.divContainerImage.appendChild(this.buttonImg.getPanel());
        this.divBody.style.alignItems = 'center';
        this.divContainerImage.style.marginLeft = '2px';
        this.divContainerMsg.style.marginLeft = '10px';
        this.divContainerMsg.style.marginRight = '10px';
        
        this.divButton.style.display = 'grid';
        this.divButton.appendChild(this.buttonOk.getPanel());
        this.divButton.style.gridTemplateColumns = "1fr";
        this.divButton.style.gridTemplateRows = "1fr";
        this.divButton.style.width = '100%';
        this.divButton.style.height = '22px';
        this.buttonOk.getPanel().style.width='100%';
        this.buttonOk.getPanel().align='center';
        this.divButton.style.alignItem = 'end';
    }
    
    refreshProperties(prop) {
       // *************** PROPIEDADES DEL CSS ******************
		prop.that = this;
		flex.propertyManager.refreshProperties(prop);
        let classObj=flex.controller.getObjClass(prop);
        if(classObj){for (var attrname in classObj) { this.objProperties[attrname] = classObj[attrname] };}
        // ******************************************************	
        
        //BUTON CLOSE
        this.buttonClose.objProperties.backgroundColor1 = this.objProperties.colorButtonClose;
        
        //TITLE
        this.divContainerTitle.style.fontWeight = this.objProperties.fontWeightTitle
        this.divContainerTitle.style.color = this.objProperties.colorTitle;
        this.divContainerTitle.style.fontSize = this.objProperties.fontSizeTitle;
        this.divContainerTitle.style.fontFamily = this.objProperties.fontFamilyTitle;
        //MESSAGE
        this.divContainerMsg.innerText = this.objProperties.message;
        this.divContainerMsg.style.textAlign = 'justify';
        //CALCULO DEL HEIGHT DEL PANEL 
        let pctHeight = this.divContainerMsg.getBoundingClientRect().height*100/flex.controller.resolution().height+20;
        this.objProperties.heightContainer = pctHeight+'%';
        //BUTTON ACEPTAR
        
        //TIPOS DE DIALOGO
        if(this.objProperties.type===this.TYPE_WARNING){
            this.divContainerTitle.innerText = 'ADVERTENCIA';
            this.buttonImg.changeType('alert');
            this.buttonImg.objProperties.backgroundColor1 = 'darkOrange';
            this.buttonOk.changeCaption('Cerrar')
        }

        if(this.objProperties.type===this.TYPE_ERROR){
            this.divContainerTitle.innerText = 'ERROR';
            this.buttonImg.changeType('close');
            this.buttonImg.objProperties.backgroundColor1 = 'red';
            this.buttonOk.changeCaption('Cerrar')
        }

        if(this.objProperties.type===this.TYPE_CONFIRM){
            this.divContainerTitle.innerText = 'CONFIRME';
            this.buttonImg.changeType('checked');
            this.buttonImg.objProperties.backgroundColor1 = 'darkGreen';
            this.buttonOk.changeCaption('Confirmar')
        }

        if(this.objProperties.type===this.TYPE_ALERT){
            this.divContainerTitle.innerText = 'ALERTA';
            this.buttonImg.changeType('alert');
            this.buttonImg.objProperties.backgroundColor1 = 'darkOrange';
            this.buttonOk.changeCaption('Cerrar')
        }

        if(this.objProperties.type===this.TYPE_INFO){
            this.divContainerTitle.innerText = 'INFORMACION';
            this.buttonImg.changeType('info');
            this.buttonImg.objProperties.backgroundColor1 = 'darkOrange';
            this.buttonOk.changeCaption('Cerrar')
        }
        this.divContainerTitle.style.textAlign = 'center';
        this.messageBox.style.height = this.objProperties.heightContainer;
        this.buttonImg.repaint();
        this.buttonClose.repaint();
        if(this.objProperties.centerScreen) this.setCenterScreen();
        return this;
    }
}