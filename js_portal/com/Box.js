flex.Box = class extends flex.VisualComponent{
    constructor(options){
        super(options, 'Box', false);
        this.box = this.vcContainer;
        this.innerBox = document.createElement('section');
        this.buttonContainer = document.createElement('div');
        this.resizeSpan = [];
        for(let i = 0; i < 8; i++){
            let span = document.createElement('span');
            span.className = 'BoxSpanResize_css'+this.enviroment;
            this.resizeSpan.push(span);
            this.box.appendChild(span);
        };
        this.panelControlContainer = document.createElement('div');
        this.panelControlContainer.className = 'BoxPanelControlContainer_css'+this.enviroment; 
        this.resizeBox = this.resizeBox.bind(this);
        this.stopResizeBox = this.stopResizeBox.bind(this);
        this.dragBox = this.dragBox.bind(this);
        this.stopDragBox = this.stopDragBox.bind(this);
        this.pointer = {
            over: false,
            move : false,
            resizeData: {
                currentSpan : null,
                originalX: 0,
                originalY: 0,
                originalWidth:0,
                originalHeight:0,
                pointerX: 0,
                pointerY: 0 
            }
        };
        this.fontOptions = {
            currentValues:{
                fontSize: 4,
                fontFamily: 0,
                fontAlign: 0,
                color: 'black'
            },
            fontAlign: ['justify', 'left', 'right', 'center'],
            fontSize: [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72],
            fontFamily: ['Arial', 'Verdana', 'Georgia', 'Cambria', 'Times'],
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontDecoration: 'none'
        };
        this.colorPicker = document.createElement('input');
        this.colorPicker.type = 'color';

        this.selectFontFamily = this.createSelect({
            id: 'BoxSelectFontFamily'+this.id,
            options: this.fontOptions.fontFamily,
            values:  this.fontOptions.fontFamily
        });
        this.selectFontSize = this.createSelect({
            id: 'BoxSelectFontSize'+this.id,
            options:this.fontOptions.fontSize,
            values: this.fontOptions.fontSize,
        });
        this.cbIncreaseFontSize = this.createCB('boxcbincreaseFontSize', 'textSizeUp', 1,7);
        this.cbDecreaseFontSize = this.createCB('boxcbDecreaseFontSize', 'textSizeDown',1,8);
        this.cbBold = this.createCB('BoxcbBold', 'bold',2,1);
        this.cbItalic = this.createCB('BoxcbItalic', 'italic',2,2);
        this.cbDecoration = this.createCB('BoxcbDecoration', 'underline',2,3);
        this.cbColor = this.createCB('BoxcbColor', 'text',2,4);
        this.cbAlignLeft = this.createCB('BoxcbAlignLeft', 'alignLeft',2,5);
        this.cbAlignCenter = this.createCB('BoxcbAlignCenter', 'alignCenter',2,6);
        this.cbAlignRight = this.createCB('BoxcbAlignRight', 'alignRight',2,7);
        this.cbJustify = this.createCB('BoxcbJustify', 'justify',2,8);

        this.cbSelectInnerBox = this.createCB('BoxcbSelectInnerBox', 'editText',1,10);
        this.cbMoveBox = this.createCB('BoxcbMoveBox', 'fourway',2,10);

        this.cbFigure= new flex.ControlButton({
            id: 'cbFigure' + this.id,
            idxElement : 0,
            typeButton: 'rect',
            cssClass:{
                width: '90px',
                height: '90px',
            }
        });

        this.cbCancel = new flex.ControlButton({
            id: 'cbCancel' + this.id,
            idxElement : 0,
            typeButton: 'close',
            backgroundColor1: 'white',
            cssClass: {
                backgroundColor: 'rgba(180, 0, 0, 1)',
                width: '20px',
                height: '20px',
                padding: '10px'
            }
        });
        this.cbConfirm= new flex.ControlButton({
            id: 'cbConfirm' + this.id,
            idxElement : 0,
            typeButton: 'checked',
            backgroundColor1: 'white',
            cssClass: {
                backgroundColor: 'rgba(0, 180, 0, 1)',
                width: '20px',
                height: '20px',
                padding: '10px'
            }
           
        });
        
        
        this.hasCssClass = true;
        this.elements = [this.box];
        this.names = ['Box'];

        this.ro = new ResizeObserver(entries => {
            for (let entry of entries) {
                this.resize();
            }
        });

        this.ro.observe(this.box);
        this.setProperties(options);
    }

    initProperties(){
        this.buttonContainer.className = 'BoxButtonContainer_css'+this.enviroment;
        this.buttonContainer.appendChild(this.cbCancel.getPanel());
        this.buttonContainer.appendChild(this.cbConfirm.getPanel());
        this.box.appendChild(this.buttonContainer);
        this.box.appendChild(this.innerBox);
        this.colorPicker.style.display = 'none';

        this.resizeSpan[0].classList.add('top', 'left');
        this.resizeSpan[1].classList.add('top', 'midLeft');
        this.resizeSpan[2].classList.add('top', 'right');
        this.resizeSpan[3].classList.add('midTop', 'right');
        this.resizeSpan[4].classList.add('bottom', 'right');
        this.resizeSpan[5].classList.add('bottom','midLeft');
        this.resizeSpan[6].classList.add('bottom', 'left');
        this.resizeSpan[7].classList.add('midTop', 'left');
        document.body.appendChild(this.panelControlContainer);

        /*Select */
        this.selectFontSize.showOption(this.fontOptions.currentValues.fontSize);
        this.panelControlContainer.appendChild(this.selectFontFamily.getPanel());
        this.selectFontFamily.getPanel().style.gridColumn = '1/4';
        this.selectFontSize.getPanel().style.gridColumn = '4/6';
        /*ControlButtons */
        this.panelControlContainer.appendChild(this.selectFontSize.getPanel());
        this.panelControlContainer.appendChild(this.cbIncreaseFontSize.getPanel());
        this.panelControlContainer.appendChild(this.cbDecreaseFontSize.getPanel());
        this.panelControlContainer.appendChild(this.cbBold.getPanel());
        this.panelControlContainer.appendChild(this.cbItalic.getPanel());
        this.panelControlContainer.appendChild(this.cbDecoration.getPanel());
        this.panelControlContainer.appendChild(this.cbColor.getPanel());
        this.panelControlContainer.appendChild(this.cbAlignLeft.getPanel());
        this.panelControlContainer.appendChild(this.cbAlignRight.getPanel());
        this.panelControlContainer.appendChild(this.cbAlignCenter.getPanel());
        this.panelControlContainer.appendChild(this.cbJustify.getPanel());
        this.panelControlContainer.appendChild(this.cbSelectInnerBox.getPanel());
        this.panelControlContainer.appendChild(this.cbMoveBox.getPanel());

        this.events();
        
    }
      

    refreshProperties(prop){
         // *************** PROPIEDADES DEL CSS ******************
		prop.that = this;
		flex.propertyManager.refreshProperties(prop);
		let classObj=flex.controller.getObjClass(prop);
		if(classObj){for (var attrname in classObj) { this.objProperties[attrname] = classObj[attrname] };}
      
        this.innerBox.className = 'InnerBox_css'+this.enviroment;
        if(this.objProperties.boxMode === 'text') this.setTextMode();
        if(this.objProperties.boxMode === 'image') this.setImageMode();
        if(this.objProperties.boxMode === 'figure') this.setFigureMode();
        this.updateInnerBoxChildValues();
    }

    events(){
        this.cbCancel.onClick(()=>{
            this.hide();
            if(this.objProperties.onCbCancelClick) this.objProperties.onCbCancelClick();
        });

        this.cbConfirm.onClick(()=>{
            if(this.objProperties.onCbConfirmClick) this.objProperties.onCbConfirmClick();
        });

        if(this.getBoxMode() === 'text'){
            this.selectFontSize.onChange(()=>{
                this.fontOptions.currentValues.fontSize = this.selectFontSize.getItemIndex();
                this.updateInnerBoxChildValues();
            });
    
            this.selectFontFamily.onChange(()=>{
                this.fontOptions.currentValues.fontFamily = this.selectFontFamily.getItemIndex();
                this.updateInnerBoxChildValues();
            });
    
            this.cbIncreaseFontSize.onClick(()=>{
                if(this.fontOptions.currentValues.fontSize < this.fontOptions.fontSize.length){
                    this.fontOptions.currentValues.fontSize++;
                    this.selectFontSize.showOption(this.fontOptions.currentValues.fontSize);
                    this.updateInnerBoxChildValues();
                }
            });
    
            this.cbDecreaseFontSize.onClick(()=>{
                if(this.fontOptions.currentValues.fontSize > 0){
                    this.fontOptions.currentValues.fontSize--;
                    this.selectFontSize.showOption(this.fontOptions.currentValues.fontSize);
                    this.updateInnerBoxChildValues();
                }
            });
    
            this.cbBold.onClick(()=>{
                let {fontWeight} = this.fontOptions;
                this.fontOptions.fontWeight = fontWeight === 'normal' ? 'bold' : 'normal';
                this.updateInnerBoxChildValues();
            });
    
            this.cbItalic.onClick(()=>{
                let {fontStyle} = this.fontOptions;
                this.fontOptions.fontStyle = fontStyle === 'normal' ? 'italic' : 'normal';
                this.updateInnerBoxChildValues();
            });
    
            this.cbDecoration.onClick(()=>{
                let {fontDecoration} = this.fontOptions;
                this.fontOptions.fontDecoration = fontDecoration === 'none' ? 'underline' : 'none';
                this.updateInnerBoxChildValues();
            });
    
            this.cbAlignLeft.onClick(()=>{
                this.fontOptions.currentValues.fontAlign = 1;
                this.updateInnerBoxChildValues();
            });
    
            this.cbAlignCenter.onClick(()=>{
                this.fontOptions.currentValues.fontAlign = 3;
                this.updateInnerBoxChildValues();
            });
    
            this.cbAlignRight.onClick(()=>{
                this.fontOptions.currentValues.fontAlign = 2;
                this.updateInnerBoxChildValues();
            });
    
            this.cbColor.onClick(()=>{
                this.colorPicker.click();
            })
    
            this.colorPicker.addEventListener('change',(e)=>{
                this.fontOptions.currentValues.color = this.colorPicker.value;
                this.updateInnerBoxChildValues();
            })
    
            this.cbJustify.onClick(()=>{
                this.fontOptions.currentValues.fontAlign = 0;
                this.updateInnerBoxChildValues();
            });
        }
        
        if(this.getBoxMode() === 'image')

        this.cbSelectInnerBox.onClick(()=>{
            this.innerBox.style.pointerEvents = 'unset';
            this.inputBox.style.pointerEvents = 'unset';
            this.box.style.cursor = 'text';
        });

        this.cbMoveBox.onClick(()=>{
            this.innerBox.style.pointerEvents = 'none';
            this.inputBox.style.pointerEvents = 'none';
            this.box.style.cursor = 'move';
        });

        this.box.addEventListener('click', e=>{
            if(this.objProperties.boxMode === 'text') this.inputBox.focus();
        });

        this.box.addEventListener('pointerdown',(e)=>{
            this.pointer.over = true;
            if(e.target === this.box) this.pointer.move = true; 
            window.addEventListener('pointermove',this.dragBox);
            window.addEventListener('pointerup', this.stopDragBox);
        });

        this.box.addEventListener('pointerup',()=>{
            this.pointer.over = false;
            this.pointer.move = false;  
            this.pointer.resize = false;
            this.pointer.resizeData.originalX = this.box.getBoundingClientRect().left;
            if(this.objProperties.boxMode === 'text') this.inputBox.focus();
        });

        this.resizeSpan.forEach(span =>{
            span.addEventListener('pointerdown', e=>{
                e.preventDefault();
                this.pointer.resizeData.originalWidth = this.box.getBoundingClientRect().width;
                this.pointer.resizeData.originalHeight = this.box.getBoundingClientRect().height;
                this.pointer.resizeData.originalX = this.box.getBoundingClientRect().left;
                this.pointer.resizeData.originalY = this.box.getBoundingClientRect().top;
                this.pointer.resizeData.pointerX = e.pageX;
                this.pointer.resizeData.pointerY = e.pageY;
                this.pointer.resizeData.currentSpan = span;
                window.addEventListener('pointermove', this.resizeBox);
                window.addEventListener('pointerup', this.stopResizeBox);
            });
        });

    }

    onCbCancelClick(extFunct){
        this.objProperties.onCbCancelClick = extFunct;
        return this;
    }

    onCbConfirmClick(extFunct){
        this.objProperties.onCbConfirmClick = extFunct;
        return this;
    }

    onCbTextClick(extFunct){
        this.objProperties.onCbTextClick = extFunct;
        return this;
    }

    onCbFontFamilyClick(extFunct){
        this.objProperties.onCbFontFamilyClick = extFunct;
        return this;
    }

    onCbFontTypeClick(extFunct){
        this.objProperties.onCbFontTypeClick = extFunct;
        return this;
    }

    onCbColorPickerClick(extFunct){
        this.objProperties.onCbColorPickerClick = extFunct;
        return this;
    }

    setTextMode(){
        this.inputBox = document.createElement('textarea');
        this.inputBox.className = 'InputBox_css'+this.enviroment;
        this.inputBox.style.resize = 'none';
        this.inputBox.style.pointerEvents = 'none';
        this.innerBox.appendChild(this.inputBox);

        return this;
    }

    updateInnerBoxChildValues(){
        if(this.getBoxMode() === 'text'){
            let {fontSize, fontAlign, fontFamily, color} = this.fontOptions.currentValues;
            let {fontWeight, fontStyle, fontDecoration} = this.fontOptions;
            this.inputBox.style.fontSize = this.fontOptions.fontSize[fontSize] + 'px';
            this.inputBox.style.fontWeight = fontWeight;
            this.inputBox.style.fontStyle = fontStyle;
            this.inputBox.style.textDecoration = fontDecoration;
            this.inputBox.style.fontFamily = this.fontOptions.fontFamily[fontFamily];
            this.inputBox.style.textAlign = this.fontOptions.fontAlign[fontAlign];
            this.inputBox.style.color = color;
            this.cbColor.setText('black', color);
        }
        return this;
    }

    setImageMode(){
        this.image = document.createElement('img');
        this.image.draggable = false;
        this.image.src = this.objProperties.imgSrc;
        this.image.style.width = '100%';
        this.image.style.height = 'auto';
        this.innerBox.appendChild(this.image);
        return this;
    }

    setFigureMode(){
        this.image = document.createElement('img');
        this.image.draggable = false;
        this.image.style.width = '100%';
        this.image.style.height = 'auto';
        this.innerBox.appendChild(this.image);
        this.cbFigure.changeType(this.objProperties.typeFigure);
        this.setSvgToImage();
    }

    dragBox(e){
        if(this.pointer.move){
            this.getPanel().style.left = e.x - this.box.getBoundingClientRect().width / 2 + 'px';
            this.getPanel().style.top = e.y - this.box.getBoundingClientRect().height / 2 + 'px';
        }
        return this;
    }

    stopDragBox(e){
        window.removeEventListener('pointerup', this.stopDragBox);
        window.removeEventListener('pointermove',this.dragBox);
    }

    resizeBox(e){
        const {currentSpan} = this.pointer.resizeData;
        if(currentSpan.classList.contains('top') && currentSpan.classList.contains('left')) this.setResize(e, 'top', 'left');
        if(currentSpan.classList.contains('top') && currentSpan.classList.contains('midLeft')) this.setResize(e, 'top', null);
        if(currentSpan.classList.contains('top') && currentSpan.classList.contains('right')) this.setResize(e, 'top', 'right');
        if(currentSpan.classList.contains('midTop') && currentSpan.classList.contains('right')) this.setResize(e, null, 'right');
        if(currentSpan.classList.contains('bottom') && currentSpan.classList.contains('right')) this.setResize(e, 'bottom', 'right');
        if(currentSpan.classList.contains('bottom') && currentSpan.classList.contains('midLeft')) this.setResize(e, 'bottom', null);
        if(currentSpan.classList.contains('bottom') && currentSpan.classList.contains('left')) this.setResize(e, 'bottom', 'left');
        if(currentSpan.classList.contains('midTop') && currentSpan.classList.contains('left')) this.setResize(e, null, 'left');
    }

    setResize(e, top, left){
        const {originalWidth, originalHeight, originalX, originalY, pointerX, pointerY} = this.pointer.resizeData;
        if(top){
            if (top === 'bottom'){
                this.box.style.height = e.pageY - this.box.getBoundingClientRect().top + 'px';
            } else{
                this.box.style.height = originalHeight - (e.pageY - pointerY) + 'px';
                this.box.style.top = originalY + (e.pageY - pointerY) + 'px';
            }
        }
        if (left){
            if(left  === 'right'){
                this.box.style.width = e.pageX - this.box.getBoundingClientRect().left + 'px';
            } else{
                this.box.style.width = originalWidth - (e.pageX - pointerX) + 'px';
                this.box.style.left = originalX + (e.pageX - pointerX) + 'px';
            }
        }
        return this;
    }

    stopResizeBox(e){
        window.removeEventListener('pointermove', this.resizeBox);
        window.removeEventListener('pointerup', this.stopResizeBox);
        this.pointer.resizeData.currentSpan = null;
    }

    resize(){
        if(this.objProperties.boxMode === 'image'){
            this.image.style.width = this.box.getBoundingClientRect().width + 'px';
            this.image.style.height = 'auto';
        }
        if(this.objProperties.boxMode === 'figure'){
            this.image.style.width = this.box.getBoundingClientRect().width + 'px';
            this.image.style.height = this.box.getBoundingClientRect().height*0.9 + 'px';

        }
    }

    setSvgToImage(){
        let data = new XMLSerializer().serializeToString(this.cbFigure.getSvg());
        this.image.src = 'data:image/svg+xml; charset=utf8, '+ encodeURIComponent(data);
    }

    getTextInfo(){
        return {
            value: this.inputBox.value,
            size: this.inputBox.getBoundingClientRect().height,
            fontFamily: getComputedStyle(this.inputBox).fontFamily,
            fontLength: this.inputBox.value.length,
            textColor: this.colorPicker.value
        }
    }

    getImageInfo(){
        return {
            image: this.image,
            width: this.image.getBoundingClientRect().width,
            height: this.image.getBoundingClientRect().height,
        }
    }

    getBoxMode(){
        return this.objProperties.boxMode;
    }

    getBoxInfo(){
        if(this.objProperties.textMode === 'text') return this.getTextInfo();
        if(this.objProperties.textMode === 'image') return this.getImageInfo();
    }

    hide(){
        this.box.style.display = 'none';
        this.panelControlContainer.style.display = 'none';
        return this;
    }

    createCB(id, typeButton,gridRow, gridColumn){
        return new flex.ControlButton({
          id : id + this.id,
          rippleEffect: true,
          typeButton,
          backgroundColor1: 'black',
          backgroundColor2 : 'red',
          idxElement : 0,
          cssClass: {
            width: '100%',
            height: '100%',
            gridRow: gridRow ? gridRow : null,
            gridColumn: gridColumn ? gridColumn : null
          }
        });
    }

    createSelect(objOptions){
        const {id, options, values} = objOptions;
        return new flex.Select({
            id,
            idxElement: 0,
            options,
            values, 
            cssClass:{
                position: 'static',
                width: '100%',
                height: '100%'
            }
        });
    }

    cleanTextBox(){
        this.inputBox.value = '';
        return this;
    }
}