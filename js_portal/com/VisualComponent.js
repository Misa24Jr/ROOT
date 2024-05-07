flex.VisualComponent = class{
    constructor(options, name, useContainer=true){
        var that = this;
        this.resolution = flex.controller.resolution(0.5,0.5);
        this.cx = this.resolution.width;
        this.cy = this.resolution.height;
        this.useContainer = useContainer;
        this.isShow = false;
        this.hideValue = null;
        this._allBuilt = (e)=>{};
        this.options = options;
        this.id='_VC1';
        if(name)
            this.name = name;
        else
        this.name = 'VisualComponent';
        this.hasCss = false;
        this.elements = [];
        this.names = [];
        this.vcContainer = document.createElement('div');
        this.hasCssClass = false;

        //ACTUALIZA HAS_CSS_CLASS
        try{
        if(options.hasCssClass)
            this.hasCssClass = options.hasCssClass;
        }
        catch(e){
            console.log(e);
            console.log('ERROR: el objeto <<options>> esta mal formado..!');
        }
        //ACTUALIZA ELEMENTS Y NAMES
        try{
            if(options.elements)
                this.elements = options.elements;
            if(options.names)
                this.names = options.names;                
        }
        catch(e){
            console.log(e);
            console.log('ERROR: el objeto <<options>> no incuye elements o names');
        }

        //ACTUALIZA EL ID
        try{
            if(options.id)
                this.id=options.id;
        }
        catch(e){
            console.log('ERROR:',e);
        }
          
        //ACTUALIZA EL NAME
        try{
            if(options.name)
                this.name=options.name;
        }
        catch(e){
            console.log('ERROR:',e);
        }
        
		//VERIFICA SI EL OBJETO YA EXISTE
        if(flex.controller.getObject(this.id)){
            return flex.controller.getObject(this.id);
        }

        //ACTUALIZA EL ENVIROMENT
        this.enviroment = flex.propertyManager.getActEnviroment(); 
        try{
            if(options.enviroment)
                this.enviroment = options.enviroment;
            }
        catch(e){
            console.log('ERROR:',e);
		}		
		
		this.objProperties = {
            adyYMsg             : 0,
            adyWMsg             : 400,
            ampm                : '',
            autoHidePanel       : false,   
            alignTitle          :'Center',
            align               : 'left',
            autoHidePanel       : false,   
            bgBarTitle          : 'rgba(0,0,0,0)',
            bgGradient          : '',
            buttonCloseColor    : 'black',
            buttonCloseColorOver:'red',
            buttonCloseSize     : 15,
            marginShape			: 6,
            checks				: [],
            colorTitle          : 'black',   
            colorText           : 'black',
            centerScreen        : false,
            dataLeft	        : [],
            dragX1              : 0,
            dragX2              : 250,
            dragY1              : 0,
            dragY2              : 30,  
            disabled            : false,
            defaultOption		: 0,
            displayContainer    : 'block',
            enviroment          : 0,
            factorShape			: 4,
            fontFamilyTitle     : 'verdana',
            fontSizeTitle       : 12,
            fontWeightTitle     : 'bold',
            fontFamilyText      : 'verdana',
            fontSizeText        : 12,
            fontWeightText      : 'normal',
            functions			: [],
            groupName           : 'radio',
            hideValue           : '',
            hint                : '',
            heightBarTitle      : 20,
            heightContainer     : 300,
            hour                : '',
            isDragable          : true,
            itemIndex			: 0,
            keyPressed          : '',
            maxLength			: 10,
            maxValue            : 100,
            marginShape			: 6,
            minutes             : '',
            message             : '',
            options             : [],
            padding             : 4,
            resizable           : false,
            resizeDragX         : true,
            resizeDragY         : false,
            readOnly            : false,
            showShadow          : true,
            showButtonClose     : true,
            show		        : true,	
            showHint	        : true,
            seconds             : '',
            showHour            : true,
            showMinutes         : true,
            showSeconds         : false,
            showAmPm            : true,
            subTitle	        : '',
            typeData	        : 'string',
            typeData            : '',
            text                :'',
            textNode			: '',
            title               : '',
            subTitle1           : '',
            subTitle2           : '',
            src			        : '',
            showIcon	        : false,
            showPct		        : true,
            useGradient         : false,
            values              : [],
            value               : 0,
            viewBox             : "0 0  17 16",
            widthDigit          : 10,
            widthContainer      : 400,
            x			        : 0,
            y			        : 0,            
            onClickPanel        : ()=>{},
            onDblClickPanel     : ()=>{},
			onMouseDownPanel    : ()=>{},
			onMouseUpPanel      : ()=>{},
			onMouseOverPanel    : ()=>{},
			onMouseMovePanel    : ()=>{},
            onMouseOutPanel     : ()=>{},
			onClick		        : () => {},
			onDblClick 	        : () => {},
			onMouseDown         : () => {},
			onMouseUp 	        : () => {},
			onMouseOver         : () => {},
			onMouseMove         : () => {},
			onMouseOut 	        : () => {},
			onFocus		        : () => {},
            onBlur		        : () => {},
            onKeyPress          : () => {},
            onKeyUp             : () => {},
            onKeyDown           : () => {},
            onChange            : () => {},
            onEnter             : () => {},
            onEscape            : () => {},
            onHide              : () => {},
            onShow              : () => {},
            onDrag              : () => {},
            onClose             : () => {},
            onClickArrowLeft    : () => {},
            onClickArrowRight   : () => {},
            _built		        : () => {}
		}        		
        this.setKey = (k)=>{this.objProperties.keyPressed = k;};
        //EVENTOS DEL CONTENEDOR	   options
		this.vcContainer.addEventListener('mouseover',(e)=>{if (!that.objProperties.disabled)that.objProperties.onMouseOver();},true);
		this.vcContainer.addEventListener('mouseout', (e)=>{if (!that.objProperties.disabled)that.objProperties.onMouseOut();},true);
		this.vcContainer.addEventListener('click', (e)=>{if (!that.objProperties.disabled)that.objProperties.onClick();},true);
		this.vcContainer.addEventListener('dblclick', (e)=>{if (!that.objProperties.disabled)that.objProperties.onDblClick();},true);
		this.vcContainer.addEventListener('mousedown', (e)=>{if (!that.objProperties.disabled)that.objProperties.onMouseDown();},true);
		this.vcContainer.addEventListener('mouseup', (e)=>{if (!that.objProperties.disabled)that.objProperties.onMouseUp();},true);
		this.vcContainer.addEventListener('mousemove', (e)=>{if (!that.objProperties.disabled)that.objProperties.onMouseMove();},true);
		this.vcContainer.addEventListener('focus', (e)=>{if (!that.objProperties.disabled)that.objProperties.onFocus();},true);
        this.vcContainer.addEventListener('blur', (e)=>{if (!that.objProperties.disabled)that.objProperties.onBlur();},true);
        this.vcContainer.addEventListener('keydown', (e)=> { if (!that.objProperties.disabled){that.setKey(e.key); that.objProperties.onKeyDown();} },true);
        this.vcContainer.addEventListener('change',(e)=> { if (!that.objProperties.disabled) that.objProperties.keyPressed = e.key; that.objProperties.onChange(); }, true);
        this.vcContainer.addEventListener('keypress', (e) =>{if (!that.objProperties.disabled && !that.objProperties.readOnly) {that.objProperties.onKeyPress();}},true);
        this.vcContainer.addEventListener('keyup', (e)=> { 
            if (!that.objProperties.disabled) {
                if(e.key==='Enter'){that.objProperties.onEnter();}
                if(e.key==='Escape'){ that.objProperties.onEscape();}
                that.setKey(e.key);
                that.objProperties.onKeyUp();
            }
        },false);
		try{
			if(flex.controller){
				flex.controller.addObject(this, this.id);
			}
		}
		catch(e){
			console.log('Alerta: El Controlador no se encuentra instanciado..!')
        }
        for(var attrname in options) {this.objProperties[attrname] = options[attrname]};
    };
    //********************** End Constructor ************************
    
    onMouseOver(extFunct){this.objProperties.onMouseOver = extFunct};
    onMouseOut(extFunct){this.objProperties.onMouseOut = extFunct};
    onMouseMove(extFunct){this.objProperties.onMouseMove = extFunct};
    onClick(extFunct){this.objProperties.onClick = extFunct};
    onDblClick(extFunct){this.objProperties.onDblClick = exthidect};
    onKeyDown(extFunct){this.objProperties.onKeyDown = extFunct};
    onKeyUp(extFunct){this.objProperties.onKeyUp = extFunct};
    onChange(extFunct){this.objProperties.onChange = extFunct};
    onKeyPress(extFunct){this.objProperties.onKeyPress = extFunct};
    onHide(extFunct){this.objProperties.onHide = extFunct};
    onShow(extFunct){this.objProperties.onShow = extFunct};
    onDrag(extFunct){this.objProperties.onDrag = extFunct};
    allBuilt(e) { this._allBuilt(e);};    
    addObject(obj){this.vcContainer.appendChild(obj);return this;}
    addHTML(scriptHTML){document.body.innerHTML += scriptHTML;return this;}
    addJS(scriptJS){eval(scriptJS);return this;}
    toggleCss(element, styleSheet){flex.controller.toggleCss(element, styleSheet);return this;}
    removeCss(element, styleSheet){flex.controller.removeCss(element, styleSheet);return this;}
    getKeyPressed(){return this.objProperties.keyPressed;}
    getPropertyValue(element, property){return window.getComputedStyle(element, null).getPropertyValue(property);}
    getElements(){return this.elements}
    getPanel(){return this.vcContainer;}
	getObject(){return this;}
	setFocus(){this.vcContainer.focus();return this;}
    refreshProperties(prop){prop.that = this;flex.propertyManager.refreshProperties(prop);return this;}
    cleanVcContainer(){this.vcContainer.innerHTML=''}
    setHideValue(val){this.hideValue = val; return this;}
    getHideValue(){return this.hideValue;}

    setStyleProperty(prop, indexElement){
        for(let attrib in prop) {
            if(typeof indexElement==='int')
                this.elements[indexElement].style.setProperty(attrib, prop[attrib]);
            if(typeof indexElement==='object')
                indexElement.style.setProperty(attrib, prop[attrib]);
        }
        return this;
    }

    getObjContent(){
        return this.vcContainer.firstChild;
    }

    createCSS(scriptCSS){
        flex.controller.createCSS(scriptCSS);
        let n = '_'+this.id;
        if(flex.controller.mapCss.get(n)===undefined){
            flex.controller.mapCss.set(n, scriptCSS);
        }
        return this;
    }

    refreshCss(prop){
        prop.element.classList.remove(prop.className);
        var cssProp =flex.propertyManager.cssProperties;
        var newCssClass = `.${prop.className}{`;
        for(var attrname in prop.cssClass) {
            newCssClass += `${cssProp[attrname]}:${prop.cssClass[attrname]};`;
        };
        newCssClass = newCssClass.substr(0,newCssClass.length-1) + '}';
        this.createCSS(`.${prop.className}${newCssClass}`);
        //this.createCSS(`${newCssClass}`);
        flex.controller.CSS({
			method:'toggle',
			element : prop.element,
			className : prop.className
		});
    }

    CSS(objCSS){
        if(objCSS.method === 'contains')
            return flex.controller.CSS(objCSS);
        flex.controller.CSS(objCSS);
        return this;
    }
    	
	setPx(txt){
		txt = ''+txt;
		if(txt.charAt(txt.length-1)==='x' && txt.charAt(txt.length-2)==='p')
			return txt;
		else	
			return txt+'px';
	}

	async setProperties(prop){
       let that = this;
        try{
            if(flex.controller){
                if(that.elements.length > 0){                    
                    if(that.hasCssClass){
                        flex.controller.setCss(that, that.enviroment, await function(comp){
                            if(that.objProperties._built!=undefined){
                                for(let i=0; i< that.elements.length; i++){
                                    document.body.appendChild(that.elements[i]);
                                }
                                if(that.initProperties) that.initProperties(prop);
                                that.refreshProperties(prop);
                                for(let i=0; i< that.elements.length; i++){
                                    document.body.removeChild(that.elements[i]);
                                }
                                if(that.useContainer) 
                                    that.addToContainer(that.elements);
                                that.objProperties._built();
                                flex.controller.notifyBuilt(that);                                
                            }
                            else{
                                that.refreshProperties(prop);
                            }
                        });
                    }
                    else{
                        setTimeout(()=>{
                            that.objProperties._built();
                            flex.controller.notifyBuilt(that);                    
                        }, 5);
                    }
                }
                else{
                    setTimeout(()=>{
                        that.objProperties._built();
                        flex.controller.notifyBuilt(that);                    
                    }, 5);
                }
            }
        }
        catch(e){
            console.log('ERROR: Verifique su codigo, se genero un problema de carga en el componente..!');
        }
		return this;
	}
	
	show(){
        this.objProperties.onShow();
		this.vcContainer.style.display = this.objProperties.displayContainer;
		this.isShow = true;
		return this;
	}
	
	hide(){
        this.objProperties.onHide();
		this.vcContainer.style.display = 'none';
		this.isShow = false;
		return this;
	}
    
    addToContainer(arr){
        if(Array.isArray(arr)){
            for(let i=0; i<arr.length; i++){
                this.vcContainer.appendChild(arr[i]);
            } 
        }
        else{
            this.vcContainer.appendChild(arr);
        }
        return this;
    }
	
	addToBody(obj){
        if(obj)        
            document.body.appendChild(obj);
        else
            document.body.appendChild(this.vcContainer);
		return this; 
	}

    createRippleEffect(event){
        let header = event.currentTarget,
            circle = document.createElement('span'),
            diameter = Math.max(header.clientWidth, header.clientHeight),
            radius = diameter / 2;
        circle.style.width = circle.style.height = diameter +'px';
        circle.style.left = event.clientX - (header.getBoundingClientRect().left + radius) + 'px';
        circle.style.top = event.clientY - (header.getBoundingClientRect().top + radius) + 'px';
        circle.classList.add('ripple');
        const ripple = header.getElementsByClassName('ripple')[0];
        if(ripple) ripple.remove();
        header.appendChild(circle);
    }

    setCenterScreen(){
        let xpct = ((this.cx - this.vcContainer.getBoundingClientRect().width/2)/(2*this.cx))*100+'%';
        let ypct = ((this.cy - this.vcContainer.getBoundingClientRect().height/2)/(2*this.cy))*100+'%';
        this.vcContainer.style.left = xpct;
        this.vcContainer.style.top = ypct;
        //this.vcContainer.style.left = (this.cx - this.vcContainer.getBoundingClientRect().width/2) + 'px';
        //this.vcContainer.style.top = (this.cy - this.vcContainer.getBoundingClientRect().height/2); + 'px';
        return this;
    }

    setPosition(x, y) {
        this.objProperties.x = x;
        this.objProperties.y = y;
        this.px = this.objProperties.x;
        this.py = this.objProperties.y;
        if (typeof x === 'string')
            this.vcContainer.style.left = this.objProperties.x;
        else    
            this.vcContainer.style.left = this.objProperties.x + 'px';
        if (typeof y === 'string')
            this.vcContainer.style.top = this.objProperties.y;
        else
            this.vcContainer.style.top = this.objProperties.y + 'px';
        return this;
    }

    setPositionObj(obj, x, y) {
        var vx = 0;
        var vy = 0;
        if (typeof x === 'string')
            vx = parseFloat(x.split('%')[0]) * this.objProperties.width / 100;
        else
            vx = x;
        if (typeof y === 'string')
            vy = parseFloat(y.split('%')[0]) * this.objProperties.height / 100;
        else vy = y;
        obj.style.position = 'absolute';
        obj.style.left = vx + 'px';
        obj.style.top = vy + 'px';
        return this;
    }

    getPosition() {
        return {
            x: this.objProperties.x,
            y: this.objProperties.y
        }
    }

    setDimension(w, h, obj) {
        if(obj){
            if (typeof w === 'object') {
                if(typeof w.width==='string'){
                    obj.style.width = w.width;
                    obj.style.height = w.height;
                }   
                else{
                    obj.style.width = w.width+'px';
                    obj.style.height = w.height+'px';        
                } 
            }
            else{
                if(typeof w.width==='string'){
                    obj.style.width = w;
                    obj.style.height = h;
                }   
                else{
                    obj.style.width = w+'px';
                    obj.style.height = h+'px';        
                }
            }
            return this;
        }
        if (typeof w === 'object') {
            this.objProperties.width = w.width;
            this.objProperties.height = w.height;
            if(typeof w.width ==='string')
                this.vcContainer.style.width = this.objProperties.width;
            else
                this.vcContainer.style.width = this.objProperties.width + 'px';
            if(typeof w.height ==='string')
                this.vcContainer.style.height = this.objProperties.height;
            else
                this.vcContainer.style.height = this.objProperties.height + 'px';
        } 
        else {
            this.objProperties.width = w;
            this.objProperties.height = h;
            if(typeof w ==='string')
                this.vcContainer.style.width = this.objProperties.width;
            else
                this.vcContainer.style.width = this.objProperties.width + 'px';
            if(typeof h ==='string')
                this.vcContainer.style.height = this.objProperties.height;
            else
                this.vcContainer.style.height = this.objProperties.height + 'px';
        }
        return this;
    }

    getDimension(pctX, pctY, obj) {
        if(obj){//objeto externo
            let {width, height} = obj.getBoundingClientRect();
            if (pctX && pctY) {
                return {
                    width:  width * pctX,
                    height: height * pctY
                }
            }
            else{
                return {
                    width: this.getPropertyValue(obj, 'width'),
                    height: this.getPropertyValue(obj, 'height'),
                    numWidth: width,
                    numHeight: height
                }
            }
        }
        else{//vcContainer
            let {width, height} = this.vcContainer.getBoundingClientRect();
            this.objProperties.width = width;
            this.objProperties.height = height;
            if (pctX && pctY) {
                if(typeof this.objProperties.width==='string')
                    this.objProperties.width = width;
                if(typeof this.objProperties.height==='string')
                    this.objProperties.height = height;
                return {
                    width: this.objProperties.width * pctX,
                    height: this.objProperties.height * pctY
                }
            } 
            else{
                return {
                    width: this.objProperties.width,
                    height: this.objProperties.height
                }
            }
        }
    }
}