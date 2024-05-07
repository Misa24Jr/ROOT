var Collapser = class{
	constructor(options) {
        var that = this;
        this.tableContainer = document.createElement('table');
        this.generalTable   = document.createElement('table');
        this.divContainer   = document.createElement('div');
        this.arrow          = document.createElement('div');
        this.collapser      = document.createElement('div');
        
        this.isShow = true;
        this.elements = [this.collapser];
		this.names = ['Collapser'];
		this.id='';
		this.name = 'Collapser';
		//ACTUALIZA EL ID
        try{
            if(options)
                if(options.id)
                    this.id=options.id;
        }
        catch(e){
            console.log('ERROR:',e);
        }
        //ACTUALIZA EL ENVIROMENT
        this.enviroment = 0; 
        try{
            if(options.enviroment)
                this.enviroment = options.enviroment;
            }
        catch(e){
            console.log('ERROR:',e);
        }        
		this.options = options;       
        this.isArrowUp = true;        
        this.tableContainer.setAttribute("border","0");
	    this.tableContainer.setAttribute("cellPadding","0");
        this.tableContainer.setAttribute("cellSpacing","0");
        this.generalTable.setAttribute("border","0");
	    this.generalTable.setAttribute("cellPadding","0");
        this.generalTable.setAttribute("cellSpacing","0");
        this.generalTable.insertRow(0);
        this.generalTable.insertRow(1);
        this.generalTable.rows[0].insertCell(0);//collapser
        this.generalTable.rows[1].insertCell(0);//Container
        this.tableContainer.style.backgroundColor = "rgba(0,0,0,0)";
        this.tableContainer.insertRow(0);
        this.tableContainer.rows[0].insertCell(0);//raya
        this.tableContainer.rows[0].insertCell(1);//titulo
        this.tableContainer.rows[0].insertCell(2);//raya
        this.tableContainer.rows[0].insertCell(3);//button       
        
		this.objProperties = {
			x 							: 0,
            y 							: 0,
            title                       : '',
            factorIcon                  : 5,
			colorDisable				: 'rgba(0,0,0,0.3)',
			overColor					: 'rgba(255,255,0,1)',
            width					    : 100,
            widthLines                  : 300,
            widthTitle                  : 10,
            heightCollapser			    : 30,
            heightPanel                 : 200,
            heightLine                  : 1,
            lineHeight					: 30,
			fontFamily					: 'verdana',
			fontSize		 			: '12',
			fontWeight					: 'bold',
            fontStyle					: 'normal',
            fontColor					: 'rgba(0,0,0,1)',
            backgroundColor				: 'rgba(110,130,150, 1)',
            bgPanel				        : 'rgba(210,210,210, 1)',
			bgDisable					: 'rgba(0,0,0, 0.3)',
			bgColorOver					: 'rgba(140,160,180, 0.8)',
			borderWidth 				: 'thin',			
			borderColor					: 'rgba(0,0,0,0.3)',
			borderStyle					: 'outset',
			borderTopLeftRadius			: '0.5em',
			borderTopRightRadius		: '0.5em',
			borderBottomLeftRadius		: '0.5em',
			borderBottomRightRadius		: '0.5em',			
			overCursor					: 'pointer',
            defaultCursor				: 'default',
            textAlign                   : 'center',
            position                    : 'absolute',
            disabled					: false,
            zIndex                      : 9999999999999999,
	   		onClick						: ()=>{},
			onDblClick 					: ()=>{},
			onMouseDown 				: ()=>{},
			onMouseUp 					: ()=>{},
			onMouseOver 				: ()=>{},
			onMouseMove 				: ()=>{},
			onMouseOut 					: ()=>{},
			onFocus						: ()=>{},
			onBlur						: ()=>{}
		}
        function createLine(){
            var line = document.createElement('div');
            line.style.height = that.objProperties.heightLine+'px';
            line.style.width = that.objProperties.widthLine+'px';
            line.style.position = 'relative';
            line.style.left='0px';
            line.style.top='0px';
            line.style.backgroundColor = that.objProperties.backgroundColor;
            line.style.display='block';
            return line;
        }     
        this.leftLine = createLine();
        this.rightLine = createLine();

        this.setProperties(options);

        this.tableContainer.rows[0].cells[0].appendChild(this.leftLine);
        this.tableContainer.rows[0].cells[1].innerHTML = this.objProperties.title;
        this.tableContainer.rows[0].cells[2].appendChild(this.rightLine);
        this.tableContainer.rows[0].cells[3].appendChild(this.setArrowUp());
        this.generalTable.rows[0].cells[0].appendChild(this.tableContainer);
        this.generalTable.rows[1].cells[0].appendChild(this.divContainer);
        this.collapser.appendChild(this.generalTable);        
        
        this.arrow.onclick = ()=>{
			that.objProperties.onClick();
            if(that.isArrowUp){
                that.setArrowDown();
                that.showPanel();
            }
            else{
                that.setArrowUp();
                that.hidePanel();
            }
        }
		
		this.collapser.onmouseover = (e)=>{
			that.collapser.style.cursor = that.objProperties.overCursor;
			that.objProperties.onMouseOver();
		}
		this.collapser.onmouseout = (e)=>{
			that.collapser.style.cursor = that.objProperties.defaultCursor;
			that.objProperties.onMouseOut();
		}
		this.collapser.onclick = (e)=>{
			that.objProperties.onClick();
		}
		this.collapser.ondblclick = (e)=>{
			that.objProperties.onDblClick();
		}
		this.collapser.onmousedown = (e)=>{
			that.objProperties.onMouseDown();
		}
		this.collapser.onmouseup = (e)=>{
			that.objProperties.onMouseUp();
		}
		this.collapser.onmousemove = (e)=>{
			that.objProperties.onMouseMove();
		}
		this.collapser.onfocus = (e)=>{		
			that.objProperties.onFocus();
		}
		this.collapser.onblur = (e)=>{
			that.objProperties.onBlur();
        }

	}//********************** End Constructor ************************
	
	onClick(extFunct){this.objProperties.onClick = extFunct}
	onDblClick(extFunct){this.objProperties.onDblClick = extFunct}
	onMouseDown(extFunct){this.objProperties.onMouseDown = extFunct}
	onMouseUp(extFunct){this.objProperties.onMouseUp = extFunct}
	onMouseOver(extFunct){this.objProperties.onMouseOver = extFunct}
	onMouseMove(extFunct){this.objProperties.onMouseMove = extFunct}
	onMouseOut(extFunct){this.objProperties.onMouseOut = extFunct}
	onFocus(extFunct){this.objProperties.onFocus = extFunct}
    onBlur(extFunct){this.objProperties.onBlur = extFunct}

    setArrowUp() {
        this.arrow.style.display = 'block';
        this.arrow.style.position = this.objProperties.position;
        this.arrow.style.width = '0px';
        this.arrow.style.height = '0px';
        this.arrow.style.borderLeft = this.objProperties.factorIcon*1+'px solid transparent';
        this.arrow.style.borderRight = this.objProperties.factorIcon*1+'px solid transparent';
        this.arrow.style.borderTop = '1px';
        this.arrow.style.borderBottom = this.objProperties.factorIcon*2+'px solid '+this.objProperties.backgroundColor;
        this.arrow.style.backgroundColor = 'rgba(0,0,0,0)';
        this.arrow.style.transition = 'all 0.3s';
        this.isArrowUp = true;
        return this.arrow;
    }       

    setArrowDown(){
        this.arrow.style.display = 'block';
        this.arrow.style.width = '0px';
        this.arrow.style.height = '0px';
        this.arrow.style.borderLeft = this.objProperties.factorIcon*1+'px solid transparent';
        this.arrow.style.borderRight = this.objProperties.factorIcon*1+'px solid transparent';
        this.arrow.style.borderTop = this.objProperties.factorIcon*2+'px solid '+this.objProperties.backgroundColor;
        this.arrow.style.borderBottom = '1px';
        this.arrow.style.backgroundColor = 'rgba(0,0,0,0)';
        this.arrow.style.transition = 'all 0.3s';
        this.isArrowUp = false;
        return this.arrow;
    }
	
	setProperties(prop){
        for(var attrname in prop) {this.objProperties[attrname] = prop[attrname]}; 
        
		this.tableContainer.rows[0].cells[1].style.fontFamily = this.objProperties.fontFamily;
		this.tableContainer.rows[0].cells[1].style.fontSize = this.objProperties.fontSize + 'px';
        this.tableContainer.rows[0].cells[1].style.fontStyle = this.objProperties.fontStyle;
        this.tableContainer.rows[0].cells[1].style.fontColor = this.objProperties.fontColor;
        this.tableContainer.rows[0].cells[1].fontWeight = this.objProperties.fontWeight;	
        this.tableContainer.rows[0].cells[1].style.textAlign = this.objProperties.textAlign;			
        this.tableContainer.rows[0].cells[1].style.width = this.objProperties.widthTitle+'px';
        
        let tt = parseInt(this.objProperties.widthLine,10)*2 + parseInt(this.objProperties.widthTitle,10);
        this.showPanel();
        this.divContainer.style.zIndex = this.objProperties.zIndex;
        this.divContainer.style.width = tt + 'px';
        this.divContainer.style.height = '0px';
        this.divContainer.style.position = 'relative';
        this.divContainer.style.left = '0px';
        this.divContainer.style.top = '0px';
        this.divContainer.style.overflow = 'auto';
        this.divContainer.style.borderLeft = '1px solid transparent';
        this.divContainer.style.borderRight = '1px solid transparent';
        this.divContainer.style.borderTop = '1px solid transparent';
        this.divContainer.style.borderBottom = '1px solid transparent';
        this.divContainer.style.backgroundColor = this.objProperties.bgPanel;
        this.divContainer.style.transition = "all 0.3s";
        this.hidePanel();

        this.leftLine.style.height = this.objProperties.heightLine+'px';
        this.leftLine.style.width = this.objProperties.widthLine+'px';
        this.leftLine.style.backgroundColor = this.objProperties.backgroundColor;        
        
        this.rightLine.style.height = this.objProperties.heightLine+'px';
        this.rightLine.style.width = this.objProperties.widthLine+'px';
        this.rightLine.style.backgroundColor = this.objProperties.backgroundColor;
        
        this.collapser.style.display = 'block';
		this.collapser.style.position = this.objProperties.position;
		this.collapser.style.left = this.objProperties.x +'px';
		this.collapser.style.top = this.objProperties.y +'px';
		if(this.objProperties.disabled){
			this.tableContainer.rows[0].cells[1].style.fontColor = this.objProperties.colorDisable;
		}
		else{
			this.tableContainer.rows[0].cells[1].style.fontColor = this.objProperties.fontColor;
		}
		return this;
    }
    
    addObject(obj, x, y){		
        obj.style.position = 'absolute';
        obj.style.left = x + 'px';
        obj.style.top = y + 'px';
        this.divContainer.appendChild(obj);
        return this;
    }
	
	getObject(){
		return this.collapser;
	}
	
	show(){
		this.collapser.style.display = 'block';
		this.isShow = true;
		return this;
    }
    
    showPanel(){
        this.setArrowDown();
        this.divContainer.style.display = 'block';
        this.divContainer.style.height = this.objProperties.heightPanel+'px';
        return this;
    }
    
    hidePanel(){
        this.setArrowUp();
        this.divContainer.style.display = 'none';
        this.divContainer.style.height = '0px';
		return this;
	}
	
	hide(){
		this.collapser.style.display = 'none';
		this.isShow = false;
		return this;
	}
	
	setPosition(x,y){
		this.objProperties.x = x;
		this.objProperties.y = y;
		this.collapser.style.left = this.objProperties.x + 'px';
		this.collapser.style.top = this.objProperties.y + 'px';
		return this;
	}
	
	getPosition(){
		return {
			x : this.objProperties.x,
			y : this.objProperties.y
		}
	}
    
    addToBody(){ 
		document.body.appendChild(this.collapser);
		return this; 
	} 
}