var ControlButton = class{
	constructor(options) {
		var that = this;
		this.isShow = true;
		this.controlButton = new PanelBuilder({width:12, height:12})
		.setAbsoluteMode()
		.setFill(0,0,0,0)
    	.setRadius(0,0,0,0)
    	.setFont('10px Verdana','black');
		this.panel = this.controlButton.getPanel()
		this.ctx = this.controlButton.getCanvasContext();	
		this.hint = document.createElement('div');
		this.panelShape = document.createElement('div');
		
		this.objProperties = {
			x 						: 0,
			y 						: 0,
			name					: 'ControlButton',
			charge                  : 1,
			width 					: 20,
			height 					: 20,
	        lineWidth				: 1,
	        text                    : '',
	        textColor               : 'black',
	        textSize                : 10,
	        textFamily              : 'arial',
	        textAlign               : 'center',
	        textWeight              : 'normal',
			topMargin				: 4,
			leftMargin				: 2,
			showHint				: false,
			hint					: '',
			xHint					: 0,
			yHint					: 0,
			fontFamilyHint			: 'verdana',
			fontSizeHint			: 10,
			positionHint			: 'down',
			separationHint			: 8,
			colorHint				: 'black',
			bgColorHint				: 'rgba(255,242,165,1)',
			typeButton				: 'first',
			backgroundColor			: 'rgba(0,0,0, 1)',
	        backgroundColor2		: 'rgba(150,150,150,1)',
	        backgroundColor3		: 'rgba(150,150,150,1)',
			bgDisable				: 'rgba(0,0,0, 0.3)',
			shadowColor				: 'rgba(0,0,0, 0.5)',
            bgColorOver				: 'rgba(190,190,0,1)',
	        bgColorOver2			: 'rgba(170,170,0,1)',
	        bgColorOver3			: 'rgba(150,150,0,1)',
			overCursor				: 'pointer',
			defaultCursor			: 'default',
			position				: 'relative',
			disabled				: false,	
			onClick 				: ()=>{},
			onDblClick 				: ()=>{},
			onMouseDown 			: ()=>{},
			onMouseUp 				: ()=>{},
			onMouseOver 			: ()=>{},
			onMouseMove 			: ()=>{},
			onMouseOut 				: ()=>{}
		}
		this.panel.appendChild(this.hint);
		this.setProperties(options);		
		this.panel.onmouseover = (e)=>{
			if(!this.objProperties.disabled){
				that.repaint(that.objProperties.bgColorOver,that.objProperties.bgColorOver2,that.objProperties.bgColorOver3);
				that.panel.style.cursor = that.objProperties.overCursor;
				that.objProperties.onMouseOver();	
				if(that.objProperties.showHint){
					that.showHint();
				}
			}			
		}
		this.panel.onmouseout = (e)=>{
			if(!this.objProperties.disabled){
				that.repaint(that.objProperties.backgroundColor,that.objProperties.backgroundColor2,that.objProperties.backgroundColor3)
				that.panel.style.cursor = that.objProperties.defaultCursor;
				that.objProperties.onMouseOut();
				that.hideHint();
			}
		}
		this.panel.onclick = (e)=>{
			if(!this.objProperties.disabled)
				that.objProperties.onClick();
			that.hideHint();	
		}
		this.panel.ondblclick = (e)=>{
			if(!this.objProperties.disabled)
				that.objProperties.onDblClick();
		}
		this.panel.onmousedown = (e)=>{
			if(!this.objProperties.disabled)
				that.objProperties.onMouseDown();
		}
		this.panel.onmouseup = (e)=>{
			if(!this.objProperties.disabled)
				that.objProperties.onMouseUp();
		}
		this.panel.onmousemove = (e)=>{
			if(!this.objProperties.disabled)
				that.objProperties.onMouseMove();
		}
	}//********************** End Constructor ************************
	
	onClick(extFunct){this.objProperties.onClick = extFunct}
	onDblClick(extFunct){this.objProperties.onDblClick = extFunct}
	onMouseDown(extFunct){this.objProperties.onMouseDown = extFunct}
	onMouseUp(extFunct){this.objProperties.onMouseUp = extFunct}
	onMouseOver(extFunct){this.objProperties.onMouseOver = extFunct}
	onMouseMove(extFunct){this.objProperties.onMouseMove = extFunct}
	onMouseOut(extFunct){this.objProperties.onMouseOut = extFunct}
	
	setProperties(prop){
		for(var attrname in prop) { this.objProperties[attrname] = prop[attrname]}; 
		this.controlButton.setDimension(this.objProperties.width, this.objProperties.height);
		this.controlButton.setPosition(this.objProperties.x, this.objProperties.y);		
		if(this.objProperties.disabled){
			this.repaint(this.objProperties.bgDisable, this.objProperties.bgDisable, this.objProperties.bgDisable);
		}
		else{
			this.repaint( this.objProperties.backgroundColor, this.objProperties.backgroundColor2, this.objProperties.backgroundColor3)
		}
		this.panel.style.position = this.objProperties.position;
		//HINT PROPERTIES
		this.hint.innerHTML = this.objProperties.hint;
		var sizeText = this.objProperties.hint.length*this.objProperties.fontSizeHint*0.6; 
		this.hint.style.position =  'absolute';
		if(this.objProperties.positionHint === 'up'){
			this.hint.style.left = this.objProperties.xHint + 'px';
			if(this.objProperties.yHint===0)
				this.hint.style.top = -(this.objProperties.fontSizeHint + this.objProperties.separationHint) + 'px';	
			else
				this.hint.style.top = this.objProperties.yHint + 'px';
		}
		
		if(this.objProperties.positionHint === 'down'){
			this.hint.style.left = this.objProperties.xHint + 'px';
			if(this.objProperties.yHint===0)
				this.hint.style.top = (this.objProperties.height + this.objProperties.separationHint) + 'px';
			else
				this.hint.style.top = this.objProperties.yHint + 'px';
		}
		
		if(this.objProperties.positionHint === 'right'){
			if(this.objProperties.xHint === 0)
				this.hint.style.left = (this.objProperties.width + this.objProperties.separationHint)+'px';
			else
				this.hint.style.left = this.objProperties.xHint + 'px';
			this.hint.style.top = this.objProperties.yHint + 'px';	
		}
		
		if(this.objProperties.positionHint === 'left'){
			if(this.objProperties.xHint === 0)
				this.hint.style.left = -(sizeText + this.objProperties.separationHint)+'px';
			else
				this.hint.style.left = this.objProperties.xHint + 'px';
			this.hint.style.top = this.objProperties.yHint + 'px';
		}
				
		this.hint.style.color = this.objProperties.colorHint;
		this.hint.style.borderWidth = '1px';
		this.hint.style.borderStyle = 'groove';
		this.hint.style.height = (this.objProperties.fontSizeHint + 3) + 'px';
		this.hint.style.lineHeigth = (this.objProperties.fontSizeHint + 3) + 'px';
		this.hint.style.backgroundColor = this.objProperties.bgColorHint;
		this.hint.style.fontFamily = this.objProperties.fontFamilyHint;
		this.hint.style.fontSize = this.objProperties.fontSizeHint + 'px';
		this.hint.style.width = sizeText + 'px';
		this.hint.style.textAlign = 'center';
		this.hideHint();
		return this;
	}
   
   setHint(hintValue){
      this.objProperties.hint = hintValue;
      var sizeText = this.objProperties.hint.length*this.objProperties.fontSizeHint*0.6;
      this.hint.style.width = sizeText + 'px';
      this.hint.innerHTML = this.objProperties.hint;
   }

	showHint(){
		this.hint.style.display = 'block';	
	}
	
	hideHint(){
		this.hint.style.display = 'none';
   }
   
   setUpButton(bg){
		this.ctx.beginPath();
      this.ctx.fillStyle = bg;
      this.ctx.strokeStyle = bg;
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);
      this.ctx.moveTo(0,this.objProperties.height);
      this.ctx.lineTo(this.objProperties.width/2,0);
      this.ctx.lineTo(this.objProperties.width,this.objProperties.height);
      this.ctx.lineTo(0,this.objProperties.height);
      this.ctx.stroke();
      this.ctx.fill();
      this.ctx.closePath();
   }
   
   setDownButton(bg){
		this.ctx.beginPath();
      this.ctx.fillStyle = bg;
      this.ctx.strokeStyle = bg;
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);
      this.ctx.moveTo(0,0);
      this.ctx.lineTo(this.objProperties.width/2,this.objProperties.height);
      this.ctx.lineTo(this.objProperties.width,0);
      this.ctx.lineTo(0,0);
      this.ctx.stroke();
      this.ctx.fill();
      this.ctx.closePath();
	}
	
	setFirstButton(bg){
		this.ctx.beginPath();
      this.ctx.fillStyle = bg;
      this.ctx.strokeStyle = bg;
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);
      this.ctx.moveTo(0,this.objProperties.height/2);
      this.ctx.lineTo(this.objProperties.width,0);
      this.ctx.lineTo(this.objProperties.width,this.objProperties.height);
      this.ctx.lineTo(0,this.objProperties.height/2);
      this.ctx.lineTo(0,0);
      this.ctx.lineTo(0,this.objProperties.height);
      this.ctx.stroke();
      this.ctx.fill();
      this.ctx.closePath();
	}
	
	setNextPageButton(bg){
	  this.ctx.beginPath();
      this.ctx.fillStyle = bg;
      this.ctx.strokeStyle = bg;
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.moveTo(0,0);
      this.ctx.lineTo(this.objProperties.width/2,this.objProperties.height/2);      
      this.ctx.lineTo(0,this.objProperties.height);
      this.ctx.moveTo(0,0);      
      this.ctx.moveTo(this.objProperties.width/2,0);
      this.ctx.lineTo(this.objProperties.width,this.objProperties.height/2);
      this.ctx.lineTo(this.objProperties.width/2,this.objProperties.height);
      this.ctx.moveTo(this.objProperties.width/2,0);      
      this.ctx.stroke();
      this.ctx.fill();
      this.ctx.closePath();
	}
	
	setLastButton(bg){
	  this.ctx.beginPath();
      this.ctx.fillStyle = bg;
      this.ctx.strokeStyle = bg;
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);
      this.ctx.moveTo(0,0);
      this.ctx.lineTo(this.objProperties.width,this.objProperties.height/2);
      this.ctx.lineTo(0,this.objProperties.height);
      this.ctx.moveTo(this.objProperties.width,0)
      this.ctx.lineTo(this.objProperties.width,this.objProperties.height);
      this.ctx.stroke();
      this.ctx.fill();
      this.ctx.closePath();
	}
	
	setPriorPageButton(bg){
	  this.ctx.beginPath();
      this.ctx.fillStyle = bg;
      this.ctx.strokeStyle = bg;
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);
      
      this.ctx.moveTo(0,this.objProperties.height/2);
      this.ctx.lineTo(this.objProperties.width/2,0);
      this.ctx.lineTo(this.objProperties.width/2, this.objProperties.height);
      this.ctx.lineTo(0,this.objProperties.height/2);
      
      this.ctx.moveTo(this.objProperties.width/2,this.objProperties.height/2);
      this.ctx.lineTo(this.objProperties.width,0);
      this.ctx.lineTo(this.objProperties.width,this.objProperties.height);
      this.ctx.lineTo(this.objProperties.width/2,this.objProperties.height/2);
      
      this.ctx.stroke();
      this.ctx.fill();
      this.ctx.closePath();
	}
	
	setNextButton(bg){
	  this.ctx.beginPath();
      this.ctx.fillStyle = bg;
      this.ctx.strokeStyle = bg;
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);
      this.ctx.moveTo(0,0);
      this.ctx.lineTo(this.objProperties.width,this.objProperties.height/2);
      this.ctx.lineTo(0,this.objProperties.height);
      this.ctx.lineTo(0,0);
      this.ctx.stroke();
      this.ctx.fill();
      this.ctx.closePath();
	}
	
	setPriorButton(bg){
		this.ctx.beginPath();
      this.ctx.fillStyle = bg;
      this.ctx.strokeStyle = bg;
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);
      this.ctx.moveTo(0,this.objProperties.height/2);
      this.ctx.lineTo(this.objProperties.width,0);
      this.ctx.lineTo(this.objProperties.width, this.objProperties.height);
      this.ctx.lineTo(0,this.objProperties.height/2);
      this.ctx.stroke();
      this.ctx.fill();
      this.ctx.closePath();
	}
	
	setStopButton(bg){
		this.ctx.beginPath();
      this.ctx.fillStyle = bg;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);
      this.ctx.fillRect(0, 0, this.objProperties.width, this.objProperties.height);
      this.ctx.closePath();
	}
	
	setOnOffButton(bg){
		this.ctx.beginPath();      
      this.ctx.strokeStyle = bg;
      this.ctx.fillStyle = bg;
      this.ctx.lineWidth = this.objProperties.width/5;
      this.ctx.arc(this.objProperties.width/2, this.objProperties.height/2, this.objProperties.width/2, 0, Math.PI*2, true);
      this.ctx.moveTo(this.objProperties.width/2,this.objProperties.height/4);
      this.ctx.lineTo(this.objProperties.width/2,this.objProperties.height - this.objProperties.height/4);
      this.ctx.stroke();
      this.ctx.closePath();
	}
	
	setPauseButton(bg){
		this.ctx.beginPath();      
      this.ctx.strokeStyle = bg;
      this.ctx.fillStyle = bg;
      this.ctx.lineWidth = this.objProperties.width/5;
      this.ctx.moveTo(this.objProperties.width/3,this.objProperties.height/5);
      this.ctx.lineTo(this.objProperties.width/3,this.objProperties.height - this.objProperties.height/5);
      this.ctx.moveTo(this.objProperties.width - this.objProperties.width/3,this.objProperties.height/5);
      this.ctx.lineTo(this.objProperties.width - this.objProperties.width/3,this.objProperties.height - this.objProperties.height/5);      
      this.ctx.stroke();
      this.ctx.closePath();
	}
	
	setExchangeButton(bg){
		this.ctx.beginPath();
      this.ctx.strokeStyle = bg;
      this.ctx.fillStyle = bg;
      this.ctx.lineWidth = this.objProperties.lineWidth*2;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);  

      this.ctx.moveTo(this.objProperties.leftMargin, this.objProperties.height/2);
      this.ctx.lineTo(this.objProperties.width/2-this.objProperties.leftMargin , this.objProperties.topMargin);
      this.ctx.moveTo(this.objProperties.leftMargin, this.objProperties.height/2);
      this.ctx.lineTo(this.objProperties.width/2-this.objProperties.leftMargin ,this.objProperties.height-this.objProperties.topMargin);	
      
      this.ctx.moveTo(this.objProperties.width - this.objProperties.leftMargin, this.objProperties.height/2);
      this.ctx.lineTo(this.objProperties.width/2+this.objProperties.leftMargin ,this.objProperties.topMargin);
      this.ctx.moveTo(this.objProperties.width - this.objProperties.leftMargin, this.objProperties.height/2);
      this.ctx.lineTo(this.objProperties.width/2+this.objProperties.leftMargin ,this.objProperties.height-this.objProperties.topMargin);
      	
      this.ctx.stroke();
      this.ctx.closePath();
	}
	
	setCloseTree(bg){
		this.ctx.beginPath();
      this.ctx.strokeStyle = bg;
      this.ctx.fillStyle = bg;
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);  
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(this.objProperties.width-1, this.objProperties.height/2);
      this.ctx.lineTo(0,this.objProperties.height);	      	
      this.ctx.stroke();
      this.ctx.closePath();
	}
	
	setOpenTree(bg){
		this.ctx.beginPath();
      this.ctx.strokeStyle = bg;
      this.ctx.fillStyle = bg;
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);  
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(this.objProperties.width/2, this.objProperties.height-1);
      this.ctx.lineTo(this.objProperties.width, 0);	      	
      this.ctx.stroke();
      this.ctx.closePath();
	}
	
	setFolder(bg){
      this.ctx.beginPath();
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);
      this.ctx.strokeStyle = bg;
      this.ctx.fillStyle = bg;
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.moveTo(0,0);
      this.ctx.lineTo(this.objProperties.width*0.4,1);
      this.ctx.lineTo(this.objProperties.width*0.5, this.objProperties.height*0.25);
      this.ctx.lineTo(this.objProperties.width-1, this.objProperties.height*0.25); 
      this.ctx.lineTo(this.objProperties.width-1, this.objProperties.height-1);  
      this.ctx.lineTo(0,this.objProperties.height-1);
      this.ctx.lineTo(0,1);
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.closePath();
      
      this.ctx.beginPath();
	     this.ctx.strokeStyle = 'black';
	     this.ctx.fillStyle = 'black';
	     this.ctx.lineWidth = this.objProperties.lineWidth;
	     this.ctx.moveTo(this.objProperties.width*0.4,1);
	     this.ctx.lineTo(this.objProperties.width*0.5, this.objProperties.height*0.25);
	     this.ctx.moveTo(this.objProperties.width, this.objProperties.height*0.3);
	     this.ctx.lineTo(this.objProperties.width, this.objProperties.height);
	     this.ctx.lineTo(2,this.objProperties.height);
	     this.ctx.stroke();
      this.ctx.closePath();
   }

   setOpenFolder(bg){      
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);  
      this.ctx.beginPath();
         this.ctx.fillStyle = 'black';
         this.ctx.strokeStyle = bg;
         this.ctx.lineWidth = this.objProperties.lineWidth;  
         this.ctx.fillRect(this.objProperties.width*0.2, 0, this.objProperties.width, this.objProperties.height);    
      this.ctx.closePath();

      this.ctx.beginPath();
         this.ctx.fillStyle = bg;
         this.ctx.strokeStyle = bg;
         this.ctx.lineWidth = this.objProperties.lineWidth;  
         this.ctx.moveTo(0, this.objProperties.height*0.2);
         this.ctx.lineTo(this.objProperties.width*0.8, this.objProperties.height*0.2);
         this.ctx.lineTo(this.objProperties.width, this.objProperties.height);
         this.ctx.lineTo(this.objProperties.width*0.2, this.objProperties.height);
         this.ctx.lineTo(0, this.objProperties.height*0.2);
         this.ctx.stroke();
         this.ctx.fill();
      this.ctx.closePath();
   }
	
	setDoc(bg){
	  this.ctx.beginPath();
      this.ctx.strokeStyle = bg;      
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;      
      this.ctx.fillRect(0,0, this.objProperties.width, this.objProperties.height);  
      this.ctx.clearRect(this.objProperties.width*0.55,0, this.objProperties.width*0.55, this.objProperties.height*0.4);
      this.ctx.moveTo(this.objProperties.width*0.55, 0);
      this.ctx.lineTo(this.objProperties.width, this.objProperties.height*0.4);    
      this.ctx.stroke();      
      this.ctx.closePath();
	}
	
	setDisk(bg){
	  this.ctx.beginPath();
      this.ctx.strokeStyle = bg;      
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;      
      this.ctx.fillRect(0,this.objProperties.height/2, this.objProperties.width, this.objProperties.height);
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(this.objProperties.width - 8, this.objProperties.height/2 + 2, 2, 2);
      this.ctx.fillRect(this.objProperties.width - 4, this.objProperties.height/2 + 2, 2, 2);
      this.ctx.moveTo(1, this.objProperties.height/2);
      this.ctx.fillStyle = bg;
      this.ctx.lineTo(this.objProperties.width/4, 1); 
      this.ctx.lineTo(this.objProperties.width*3/4 , 1);  
      this.ctx.lineTo(this.objProperties.width-1 , this.objProperties.height/2); 
      this.ctx.stroke();      
      this.ctx.closePath();
	}
	
	setAlert(bg){
		this.ctx.beginPath();
      this.ctx.strokeStyle = bg;      
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;
      this.ctx.moveTo(this.objProperties.width/2, 1);
      this.ctx.lineTo(1, this.objProperties.height - 1); 
      this.ctx.lineTo(this.objProperties.width - 1, this.objProperties.height -1);
      this.ctx.lineTo(this.objProperties.width/2, 1);      
      this.ctx.fillRect(this.objProperties.width/2 - 1, this.objProperties.height/3, 2, 2);      
      this.ctx.moveTo(this.objProperties.width/2, this.objProperties.height/3 + 4);
      this.ctx.lineTo(this.objProperties.width/2, this.objProperties.height - 4);
      this.ctx.stroke();      
      this.ctx.closePath();
	}
	
	setFind(bg){
		this.ctx.beginPath();
      this.ctx.strokeStyle = bg;      
      this.ctx.lineWidth = this.objProperties.lineWidth*3;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;
      this.ctx.arc(this.objProperties.width*2/3, this.objProperties.height/2, this.objProperties.width/4, 0, Math.PI*2, true);
      
      this.ctx.moveTo(this.objProperties.width*1/2, this.objProperties.height*2/3 - 1);
      this.ctx.lineTo(0, this.objProperties.height); 
      this.ctx.stroke();      
      this.ctx.closePath();
	}
	
	setPosition(x,y){
		this.objProperties.x = x;
		this.objProperties.y = y;
		this.controlButton.style.left = this.objProperties.x + 'px';
		this.controlButton.style.top = this.objProperties.y + 'px';
		return this;
	}
	
	setPrint(bg){
		this.ctx.beginPath();      
      this.ctx.strokeStyle = bg;      
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;      
      this.ctx.fillRect(0,this.objProperties.height/2, this.objProperties.width*0.95, this.objProperties.height/2);      
      this.ctx.clearRect(this.objProperties.width*0.1,this.objProperties.height/2+this.objProperties.height*0.1, 
                         this.objProperties.width*0.75, this.objProperties.height*0.6/2);      
      this.ctx.fillRect(this.objProperties.width*0.6,this.objProperties.height/2+this.objProperties.height/2*0.4, 
         this.objProperties.width*0.1, this.objProperties.height/2*0.2);
      this.ctx.fillRect(this.objProperties.width*0.2,0, this.objProperties.width*0.6, this.objProperties.height/2); 
      this.ctx.clearRect(this.objProperties.width*0.3,this.objProperties.height/2*0.2, this.objProperties.width*0.4, this.objProperties.height/2*0.8); 
      this.ctx.fillRect(this.objProperties.width*0.35, this.objProperties.height/2*0.3, this.objProperties.width*0.3, this.objProperties.height/2*0.1);
      this.ctx.fillRect(this.objProperties.width*0.35, this.objProperties.height/2*0.5, this.objProperties.width*0.3, this.objProperties.height/2*0.1);
      this.ctx.fillRect(this.objProperties.width*0.35, this.objProperties.height/2*0.7, this.objProperties.width*0.3, this.objProperties.height/2*0.1);
	}
	
	setSave(bg){
		this.ctx.beginPath();            
         this.ctx.lineWidth = 0.5;
         this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
         this.ctx.fillStyle = bg;      
         this.ctx.fillRect(0,0, this.objProperties.width, this.objProperties.height);
      this.ctx.closePath();
      this.ctx.beginPath();
         this.ctx.fillStyle = 'rgba(200,200,200,0.6)';
         this.ctx.fillRect(this.objProperties.width*0.05,this.objProperties.height*0.05,this.objProperties.width*0.1,this.objProperties.height*0.1);
         this.ctx.fillRect(this.objProperties.width*0.85,this.objProperties.height*0.05,this.objProperties.width*0.1,this.objProperties.height*0.1);
      this.ctx.closePath();
      this.ctx.beginPath();
         this.ctx.fillStyle = 'white';
         this.ctx.fillRect(this.objProperties.width*0.1,this.objProperties.height*0.2,this.objProperties.width*0.8,this.objProperties.height*0.4);
      this.ctx.closePath();
      this.ctx.beginPath();
         this.ctx.fillStyle = 'rgba(200,200,200,0.9)';
         this.ctx.fillRect(this.objProperties.width*0.3,this.objProperties.height*0.75,this.objProperties.width*0.4,this.objProperties.height*0.3);
      this.ctx.closePath();
      this.ctx.beginPath();
         this.ctx.fillStyle = bg;
         this.ctx.fillRect(this.objProperties.width*0.35,this.objProperties.height*0.8,this.objProperties.width*0.1,this.objProperties.height*0.15);
      this.ctx.closePath();
      this.ctx.beginPath();
         this.ctx.strokeStyle = 'rgba(0,0,0,1)';
         this.ctx.moveTo(this.objProperties.width*0.15, this.objProperties.height*0.32);
         this.ctx.lineTo(this.objProperties.width*0.85, this.objProperties.height*0.32);  
         this.ctx.moveTo(this.objProperties.width*0.15, this.objProperties.height*0.48);
         this.ctx.lineTo(this.objProperties.width*0.85, this.objProperties.height*0.48);    
         this.ctx.stroke();
      this.ctx.closePath();
	}
	
	setEdit(bg){
		this.ctx.beginPath();            
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;
      this.ctx.strokeStyle = bg;
      this.ctx.moveTo(this.objProperties.width*0.8, 0);
      this.ctx.lineTo(0, this.objProperties.height*0.8);
      this.ctx.moveTo(this.objProperties.width, this.objProperties.height*0.2);
      this.ctx.lineTo(this.objProperties.width*0.2, this.objProperties.height);      
      this.ctx.moveTo(this.objProperties.width*0.8, 0);
      this.ctx.lineTo(this.objProperties.width, this.objProperties.height*0.2);      
      this.ctx.moveTo(0, this.objProperties.height*0.8);
      this.ctx.lineTo(this.objProperties.width*0.2, this.objProperties.height);
      this.ctx.moveTo(0, this.objProperties.height*0.8);
      this.ctx.lineTo(0, this.objProperties.height);
      this.ctx.lineTo(this.objProperties.width*0.2, this.objProperties.height);      
      this.ctx.moveTo(this.objProperties.width*0.6, this.objProperties.height*0.2);
      this.ctx.lineTo(this.objProperties.width*0.8, this.objProperties.height*0.4);
      this.ctx.fill();      
      this.ctx.moveTo(this.objProperties.width*0.6, this.objProperties.height*0.3);
      this.ctx.lineTo(this.objProperties.width*0.1, this.objProperties.height*0.8);      
      this.ctx.moveTo(this.objProperties.width*0.65, this.objProperties.height*0.35);
      this.ctx.lineTo(this.objProperties.width*0.15, this.objProperties.height*0.85);      
      this.ctx.moveTo(this.objProperties.width*0.7, this.objProperties.height*0.4);
      this.ctx.lineTo(this.objProperties.width*0.2, this.objProperties.height*0.9);      
      this.ctx.moveTo(0, this.objProperties.height);
      this.ctx.lineTo(this.objProperties.width, this.objProperties.height);      
      this.ctx.stroke();
      this.ctx.closePath();
	}
	
	setRefresh(bg){
		this.ctx.beginPath();            
      this.ctx.lineWidth = 1;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;      
      this.ctx.strokeStyle = bg;      
      this.ctx.moveTo(this.objProperties.width*0.8, this.objProperties.height*0.3);
      this.ctx.lineTo(this.objProperties.width*0.5, this.objProperties.height*0.3);
      this.ctx.moveTo(this.objProperties.width*0.8, this.objProperties.height*0.3);   
		this.ctx.lineTo(this.objProperties.width*0.8, 0);
		this.ctx.lineTo(this.objProperties.width*0.5, this.objProperties.height*0.3);
		this.ctx.fill();
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.arc(this.objProperties.width/2, this.objProperties.height/2, this.objProperties.width*0.4, 0, Math.PI*1.6, false);
      this.ctx.stroke();
      this.ctx.closePath();
	}
	
	setBlock(bg){
		this.ctx.beginPath();            
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;      
      this.ctx.strokeStyle = bg;      
      this.ctx.moveTo(this.objProperties.width*0.2, this.objProperties.height*0.7);
      this.ctx.lineTo(this.objProperties.width*0.8, this.objProperties.height*0.25);
      this.ctx.arc(this.objProperties.width/2, this.objProperties.height/2, this.objProperties.width*0.4, 0, Math.PI*2, false);
      this.ctx.stroke();
      this.ctx.closePath();
	}
	
	setClose(bg){
		this.ctx.beginPath();            
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;      
      this.ctx.strokeStyle = bg;      
      this.ctx.moveTo(0, this.objProperties.height);
      this.ctx.lineTo(this.objProperties.width, 0);
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(this.objProperties.width, this.objProperties.height);
      this.ctx.stroke();
      this.ctx.closePath();
	}
	
	setInfo(bg){
		this.ctx.beginPath();            
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;      
      this.ctx.strokeStyle = bg;      
      this.ctx.moveTo(this.objProperties.width/2, this.objProperties.height*0.25);
      this.ctx.lineTo(this.objProperties.width/2, this.objProperties.height*0.35);      
      this.ctx.moveTo(this.objProperties.width/2, this.objProperties.height*0.4);
      this.ctx.lineTo(this.objProperties.width/2, this.objProperties.height*0.75);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.arc(this.objProperties.width/2, this.objProperties.height/2, this.objProperties.width*0.4, 0, Math.PI*2, false);
      this.ctx.stroke();
      this.ctx.closePath();
	}
	
	setOk(bg){
		this.ctx.beginPath();            
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;      
      this.ctx.strokeStyle = bg;            
      this.ctx.moveTo(1, this.objProperties.height/2);
      this.ctx.lineTo(this.objProperties.width/3, this.objProperties.height-1);
      this.ctx.lineTo(this.objProperties.width-1, 1);
      this.ctx.stroke();
      this.ctx.closePath();
	}
	
	setDelete(bg){
		this.ctx.beginPath();            
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;
      this.ctx.strokeStyle = bg;      
      this.ctx.fillRect(this.objProperties.width*0.2, 1, this.objProperties.width*0.6, this.objProperties.height*0.2);
      this.ctx.clearRect(this.objProperties.width*0.2 + 2, 3, this.objProperties.width*0.6 - 4, this.objProperties.height*0.2 - 2);
      this.ctx.moveTo(1, this.objProperties.height*0.2 + 1);
      this.ctx.lineTo(this.objProperties.width, this.objProperties.height*0.2 + 1);
      this.ctx.moveTo(1, this.objProperties.height*0.2 + 2);
      this.ctx.lineTo(this.objProperties.width*0.2, this.objProperties.height - 1);
      this.ctx.lineTo(this.objProperties.width*0.8, this.objProperties.height - 1);
      this.ctx.lineTo(this.objProperties.width - 1, this.objProperties.height*0.2 + 2);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.lineWidth = 1; 
      this.ctx.moveTo(this.objProperties.width*0.2, this.objProperties.height*0.4); 
      this.ctx.lineTo(this.objProperties.width*0.3, this.objProperties.height*0.85 );
      this.ctx.moveTo(this.objProperties.width/2, this.objProperties.height*0.4);
      this.ctx.lineTo(this.objProperties.width/2, this.objProperties.height*0.85 );
      this.ctx.moveTo(this.objProperties.width*0.8, this.objProperties.height*0.4);
      this.ctx.lineTo(this.objProperties.width*0.7, this.objProperties.height*0.85 );
      this.ctx.stroke();
      this.ctx.closePath();
	}
	
	setDownload(bg){
	  this.ctx.beginPath();            
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;
      this.ctx.strokeStyle = bg;      
      this.ctx.fillRect(this.objProperties.width/2 - this.objProperties.width*0.3/2, 1, this.objProperties.width*0.3, this.objProperties.height*0.6);      
      this.ctx.moveTo(1, this.objProperties.height*0.6); 
      this.ctx.lineTo(this.objProperties.width - 1, this.objProperties.height*0.6 );
      this.ctx.lineTo(this.objProperties.width/2, this.objProperties.height - 2);
      this.ctx.lineTo(1, this.objProperties.height*0.6 );
      this.ctx.moveTo(1, this.objProperties.height - 1);
      this.ctx.lineTo(this.objProperties.width, this.objProperties.height - 1);
      this.ctx.fill();      
      this.ctx.stroke();
      this.ctx.closePath();
	}
	
	setUpLoad(bg){
	  this.ctx.beginPath();            
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;
      this.ctx.strokeStyle = bg;      
      this.ctx.fillRect(0, this.objProperties.height*0.6, this.objProperties.width*0.1, this.objProperties.height);
      this.ctx.fillRect(0, this.objProperties.height*0.9, this.objProperties.width, this.objProperties.height);
      this.ctx.fillRect(this.objProperties.width*0.9, this.objProperties.height*0.6, this.objProperties.width, this.objProperties.height);
      this.ctx.moveTo(this.objProperties.width*0.2, this.objProperties.height*0.3); 
      this.ctx.lineTo(this.objProperties.width*0.5 , this.objProperties.height*0.05);
      this.ctx.lineTo(this.objProperties.width*0.8, this.objProperties.height*0.3);
      this.ctx.lineTo(this.objProperties.width*0.2, this.objProperties.height*0.3 );
      this.ctx.fill();      
      this.ctx.stroke();
      this.ctx.fillRect(this.objProperties.width*0.4, this.objProperties.height*0.3, this.objProperties.width*0.2, this.objProperties.height*0.45);
      this.ctx.closePath();
	}
	
	setUser(bg){
		this.ctx.beginPath();            
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;      
      this.ctx.strokeStyle = bg; 
      this.ctx.arc(this.objProperties.width/2, this.objProperties.height/3, this.objProperties.width*0.25, 0, Math.PI*2, false);
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.arc(this.objProperties.width/2, this.objProperties.height*0.98, this.objProperties.width*0.4, 0, Math.PI, true);
      this.ctx.stroke();
      this.ctx.closePath();
	}
	
	setFlag(bg){
		this.ctx.beginPath();            
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;
      this.ctx.strokeStyle = bg;      
      this.ctx.moveTo(1, 1); 
      this.ctx.lineTo(1, this.objProperties.height - 1);
      this.ctx.moveTo(1, 1);
      this.ctx.lineTo(this.objProperties.width*0.6, this.objProperties.height/3);      
      this.ctx.lineTo(1, this.objProperties.height/2 );
      this.ctx.fill();      
      this.ctx.stroke();
      this.ctx.closePath();
	}
	
	setMusic(bg){
		this.ctx.beginPath();            
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;      
      this.ctx.strokeStyle = bg;      
      this.ctx.moveTo(this.objProperties.width/2, 1);
      this.ctx.lineTo(this.objProperties.width/2, this.objProperties.height*0.8);      
      this.ctx.moveTo(this.objProperties.width/2, 1);
      this.ctx.lineTo(this.objProperties.width*0.75, this.objProperties.height*0.35);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.arc(this.objProperties.width*0.35, this.objProperties.height*0.76, this.objProperties.width*0.15, 0, Math.PI*2, false);
      this.ctx.stroke();
      this.ctx.fill();
      this.ctx.closePath();
	}
	
	setPhoto(bg){
		this.ctx.beginPath();            
         this.ctx.lineWidth = this.objProperties.lineWidth;
         this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
         this.ctx.fillStyle = bg;      
         this.ctx.strokeStyle = bg;      
         this.ctx.fillRect(0, this.objProperties.height*0.25, this.objProperties.width, this.objProperties.height);
         this.ctx.fillRect(this.objProperties.width*0.2, 0, this.objProperties.width*0.6, this.objProperties.height);
         this.ctx.fillStyle = 'white';
         this.ctx.fillRect(this.objProperties.width*0.4, this.objProperties.height*0.05, this.objProperties.width*0.2, this.objProperties.height*0.1);
      this.ctx.closePath();
      
      this.ctx.beginPath();
      this.ctx.fillStyle = 'white';
      this.ctx.arc(this.objProperties.width/2, this.objProperties.height*0.6, this.objProperties.width*0.26, 0, Math.PI*2, false);
      this.ctx.stroke();
      this.ctx.fill();
      this.ctx.closePath();
      
      this.ctx.beginPath();
      this.ctx.fillStyle = 'black';
      this.ctx.arc(this.objProperties.width/2, this.objProperties.height*0.6, this.objProperties.width*0.2, 0, Math.PI*2, false);
      this.ctx.stroke();
      this.ctx.fill();
      this.ctx.closePath();
      
      this.ctx.beginPath();
      this.ctx.fillStyle = 'white';
      this.ctx.arc(this.objProperties.width/2, this.objProperties.height*0.6, this.objProperties.width*0.1, 0, Math.PI*2, false);
      this.ctx.stroke();
      this.ctx.fill();
      this.ctx.closePath();
   }
   
   setCloseButton(bg){
		this.ctx.beginPath();            
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;      
      this.ctx.strokeStyle = bg;      
      this.ctx.moveTo(this.objProperties.width*0.25, this.objProperties.height*0.25);
      this.ctx.lineTo(this.objProperties.width*0.75, this.objProperties.height*0.75);      
      this.ctx.moveTo(this.objProperties.width*0.75, this.objProperties.height*0.25);
      this.ctx.lineTo(this.objProperties.width*0.25, this.objProperties.height*0.75);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.arc(this.objProperties.width/2, this.objProperties.height/2, this.objProperties.width*0.4, 0, Math.PI*2, false);
      this.ctx.stroke();
      this.ctx.closePath();
   }
   
   setMaximize(bg){
		this.ctx.beginPath();            
         this.ctx.lineWidth = this.objProperties.lineWidth;
         this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
         this.ctx.fillStyle = bg;      
         this.ctx.strokeStyle = bg;      
   
         this.ctx.moveTo(0, 0);
         this.ctx.lineTo(this.objProperties.width*0.35, 0);      
   
         this.ctx.moveTo(0, 0);
         this.ctx.lineTo(0, this.objProperties.height*0.35);
   
         this.ctx.moveTo(this.objProperties.width*0.65, 0);
         this.ctx.lineTo(this.objProperties.width, 0);
   
         this.ctx.moveTo(this.objProperties.width, 0);
         this.ctx.lineTo(this.objProperties.width, this.objProperties.height*0.35);

         this.ctx.moveTo(0, this.objProperties.height*0.65);
         this.ctx.lineTo(0, this.objProperties.height);
         this.ctx.lineTo(this.objProperties.width*0.35, this.objProperties.height);

         this.ctx.moveTo(this.objProperties.width*0.65, this.objProperties.height);
         this.ctx.lineTo(this.objProperties.width, this.objProperties.height);
         this.ctx.lineTo(this.objProperties.width, this.objProperties.height*0.65);
         this.ctx.stroke();
      this.ctx.closePath();
   }
   
   setMinimize(bg){
		this.ctx.beginPath();            
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;      
      this.ctx.strokeStyle = bg;     
  
      this.ctx.moveTo(this.objProperties.width*0.35, 0);
      this.ctx.lineTo(this.objProperties.width*0.35, this.objProperties.height*0.35);
      this.ctx.lineTo(0, this.objProperties.height*0.35);
  
      this.ctx.moveTo(this.objProperties.width*0.65, 0);
      this.ctx.lineTo(this.objProperties.width*0.65, this.objProperties.height*0.35);
      this.ctx.lineTo(this.objProperties.width, this.objProperties.height*0.35);

      this.ctx.moveTo(0, this.objProperties.height*0.65);
      this.ctx.lineTo(this.objProperties.width*0.35, this.objProperties.height*0.65);
      this.ctx.lineTo(this.objProperties.width*0.35, this.objProperties.height);

      this.ctx.moveTo(this.objProperties.width, this.objProperties.height*0.65);
      this.ctx.lineTo(this.objProperties.width*0.65, this.objProperties.height*0.65);
      this.ctx.lineTo(this.objProperties.width*0.65, this.objProperties.height);
      this.ctx.stroke();
   }
   
   setPlus(bg){
		this.ctx.beginPath();            
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;      
      this.ctx.strokeStyle = bg;  
      this.ctx.moveTo(this.objProperties.width*0.5, 0);
      this.ctx.lineTo(this.objProperties.width*0.5, this.objProperties.height);
      this.ctx.moveTo(0, this.objProperties.height*0.5);
      this.ctx.lineTo(this.objProperties.width, this.objProperties.height*0.5);
      this.ctx.stroke();
   }
   
   setMinus(bg){
		this.ctx.beginPath();            
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;      
      this.ctx.strokeStyle = bg;
      this.ctx.moveTo(0, this.objProperties.height*0.5);
      this.ctx.lineTo(this.objProperties.width, this.objProperties.height*0.5);
      this.ctx.stroke();
   }
   
   setBatery(bg){      
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);  
      this.ctx.beginPath();
         this.ctx.fillStyle = bg;
         this.ctx.strokeStyle = bg;
         this.ctx.lineWidth = this.objProperties.lineWidth;  
         this.ctx.fillRect(0, 0, this.objProperties.width*0.8, this.objProperties.height);
         this.ctx.fillRect(this.objProperties.width*0.8, this.objProperties.height*0.2,
         this.objProperties.width*0.2, this.objProperties.height*0.6);
         this.ctx.clearRect(this.objProperties.width*0.05, this.objProperties.width*0.05,
                            this.objProperties.width*0.75 - this.objProperties.width*0.05, this.objProperties.height - this.objProperties.width*0.1); 
      this.ctx.closePath();

      this.ctx.beginPath();
         if(this.objProperties.charge <= 0.2)
            this.ctx.fillStyle = 'darkred';
         else
            this.ctx.fillStyle = 'darkgreen';
         this.ctx.fillRect(this.objProperties.width*0.05, this.objProperties.width*0.05,
                           this.objProperties.width*0.7*this.objProperties.charge, this.objProperties.height - this.objProperties.width*0.1);
      this.ctx.closePath();
   }

   setChain(bg){
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);
		this.ctx.beginPath();            
         this.ctx.lineWidth = this.objProperties.lineWidth;               
         this.ctx.fillStyle = bg;      
         this.ctx.strokeStyle = bg;      
         this.ctx.fillRect(0, this.objProperties.height*0.30, this.objProperties.width, this.objProperties.height*0.4);
         
         this.ctx.fillStyle = 'white';
         this.ctx.fillRect(0, 0, this.objProperties.width*0.3, this.objProperties.height);
         this.ctx.fillRect(this.objProperties.width*0.7, 0, this.objProperties.width, this.objProperties.height);
      this.ctx.closePath();
      
      this.ctx.beginPath();
         this.ctx.fillStyle = bg;
         this.ctx.arc(this.objProperties.width, this.objProperties.height*0.5, this.objProperties.width*0.4, 0, Math.PI*2, false);
         this.ctx.arc(this.objProperties.width*0.01, this.objProperties.height*0.5, this.objProperties.width*0.4, -Math.PI*2, 0, false);
         this.ctx.stroke();
         this.ctx.fill();
      this.ctx.closePath();
      
      this.ctx.beginPath();            
         this.ctx.clearRect(0,this.objProperties.height*0.3,this.objProperties.width*0.2,this.objProperties.height*0.4);
         this.ctx.clearRect(this.objProperties.width*0.8,this.objProperties.height*0.3,this.objProperties.width*0.2,this.objProperties.height*0.4);
      this.ctx.closePath();
   }

   setShape(bg){
      var sx = 0.14*this.objProperties.width/15;
      var sy = 0.14*this.objProperties.height/15;      
      this.panelShape.innerHTML='';
      this.panelShape.innerHTML = this.objProperties.text;
      this.panelShape.style.color = this.objProperties.textColor;
      this.panelShape.style.textAlign = this.objProperties.textAlign;
      this.panelShape.style.fontSize = this.objProperties.textSize+"px ";
      this.panelShape.style.fontFamily =  this.objProperties.textFamily;
      this.panelShape.style.backgroundColor = 'rgba(0,0,0,0)';
      this.panelShape.style.fontWeight = this.objProperties.textWeight;
      this.panelShape.style.position = 'absolute';
      this.panelShape.style.left = 10*sx+'px';
      this.panelShape.style.top = 22.5*sy+'px'; 
      this.panelShape.style.width = this.objProperties.width*0.82 + 'px';
      this.panel.appendChild(this.panelShape);      
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);
      this.ctx.beginPath(); 
         this.ctx.strokeStyle = bg;
         this.ctx.moveTo(55*sx, 5*sy);
         this.ctx.quadraticCurveTo(5*sx, 5*sy, 5*sx, 42.5*sy);
         this.ctx.quadraticCurveTo(5*sx, 80*sy, 30*sx, 80*sy);
         this.ctx.quadraticCurveTo(30*sx, 100*sy, 10*sx, 105*sy);
         this.ctx.quadraticCurveTo(40*sx, 100*sy, 45*sx, 80*sy);
         this.ctx.quadraticCurveTo(105*sx, 80*sy, 105*sx, 42.5*sy);
         this.ctx.quadraticCurveTo(105*sx, 5*sy, 55*sx, 5*sy);
         this.ctx.stroke();
      this.ctx.closePath();
   }

   setGraphic(bg){
		this.ctx.beginPath();            
         this.ctx.lineWidth = this.objProperties.lineWidth;
         this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
         this.ctx.fillStyle = bg;      
         this.ctx.strokeStyle = bg;
         this.ctx.moveTo(0,0);
         this.ctx.lineTo(0, this.objProperties.height);
         this.ctx.lineTo(this.objProperties.width, this.objProperties.height);
         this.ctx.moveTo(0,this.objProperties.height*0.6);
         this.ctx.lineTo(this.objProperties.width*0.3, this.objProperties.height*0.3);
         this.ctx.lineTo(this.objProperties.width*0.5, this.objProperties.height*0.6);
         this.ctx.lineTo(this.objProperties.width*0.9, this.objProperties.height*0.2);
         this.ctx.stroke();
      this.ctx.closePath();
   }

   setTool(bg){
      this.ctx.beginPath();
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
      this.ctx.fillStyle = bg;      
      this.ctx.strokeStyle = bg;
      this.ctx.arc(this.objProperties.width*0.5, this.objProperties.height*0.5, this.objProperties.width*0.3, 0, Math.PI*2, false);
      this.ctx.fill();

      this.ctx.moveTo(this.objProperties.width/2, 0);
      this.ctx.lineTo(this.objProperties.width/2, this.objProperties.height);

      this.ctx.moveTo(0, this.objProperties.height*0.5);
      this.ctx.lineTo(this.objProperties.width, this.objProperties.height*0.5);
      
      this.ctx.moveTo(this.objProperties.width*0.15, this.objProperties.height*0.15);
      this.ctx.lineTo(this.objProperties.width*0.85, this.objProperties.height*0.85);

      this.ctx.moveTo(this.objProperties.width*0.15, this.objProperties.height*0.85);
      this.ctx.lineTo(this.objProperties.width*0.85, this.objProperties.height*0.15);
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.beginPath();
         this.ctx.fillStyle = 'white';    
         this.ctx.strokeStyle = 'white';
         this.ctx.arc(this.objProperties.width*0.5, this.objProperties.height*0.5, this.objProperties.width*0.25, 0, Math.PI*2, false);
         this.ctx.fill();
      this.ctx.closePath();
   }

   setAudio(bg){
      this.ctx.beginPath();
         this.ctx.lineWidth = this.objProperties.lineWidth;
         this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
         this.ctx.fillStyle = bg;      
         this.ctx.strokeStyle = bg;
         this.ctx.fillRect(0, this.objProperties.height*0.3, this.objProperties.width/3, this.objProperties.height*0.4);
         this.ctx.moveTo(this.objProperties.width/3, this.objProperties.height*0.3);
         this.ctx.lineTo(this.objProperties.width*0.7, 0);
         this.ctx.lineTo(this.objProperties.width*0.7, this.objProperties.height);
         this.ctx.lineTo(this.objProperties.width/3, this.objProperties.height*0.7);         
         this.ctx.moveTo(this.objProperties.width*0.8, this.objProperties.height*0.5);
         this.ctx.lineTo(this.objProperties.width, this.objProperties.height*0.5);         
         this.ctx.moveTo(this.objProperties.width*0.8, this.objProperties.height*0.2);
         this.ctx.lineTo(this.objProperties.width, 0);         
         this.ctx.moveTo(this.objProperties.width*0.8, this.objProperties.height*0.8);
         this.ctx.lineTo(this.objProperties.width, this.objProperties.height);
         this.ctx.stroke();
      this.ctx.closePath();
   }

   setVideo(bg){
      this.ctx.beginPath();
         this.ctx.lineWidth = this.objProperties.lineWidth;
         this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
         this.ctx.fillStyle = bg;      
         this.ctx.strokeStyle = bg;
         this.ctx.fillRect(0, 0, this.objProperties.width, this.objProperties.height);
         this.ctx.clearRect(this.objProperties.width*0.13, this.objProperties.height*0.1, this.objProperties.width*0.1, this.objProperties.height*0.1);    
         this.ctx.clearRect(this.objProperties.width*0.33, this.objProperties.height*0.1, this.objProperties.width*0.1, this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.53, this.objProperties.height*0.1, this.objProperties.width*0.1, this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.73, this.objProperties.height*0.1, this.objProperties.width*0.1, this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.13, this.objProperties.height*0.8, this.objProperties.width*0.1, this.objProperties.height*0.1);    
         this.ctx.clearRect(this.objProperties.width*0.33, this.objProperties.height*0.8, this.objProperties.width*0.1, this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.53, this.objProperties.height*0.8, this.objProperties.width*0.1, this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.73, this.objProperties.height*0.8, this.objProperties.width*0.1, this.objProperties.height*0.1);
      this.ctx.closePath();      
      this.ctx.beginPath();
         this.ctx.fillStyle = 'white';      
         this.ctx.strokeStyle = 'white';
         this.ctx.moveTo(this.objProperties.width*0.4, this.objProperties.height*0.3);
         this.ctx.lineTo(this.objProperties.width*0.4, this.objProperties.height*0.65);
         this.ctx.lineTo(this.objProperties.width*0.65, this.objProperties.height*0.5);
         this.ctx.lineTo(this.objProperties.width*0.4, this.objProperties.height*0.3);
         this.ctx.fill();
         this.ctx.stroke();
      this.ctx.closePath();
   }

   setMonitor(bg){
      this.ctx.beginPath();
         this.ctx.lineWidth = this.objProperties.lineWidth;
         this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
         this.ctx.fillStyle = bg;      
         this.ctx.strokeStyle = bg;
         this.ctx.fillRect(0, 0, this.objProperties.width, this.objProperties.height);
         this.ctx.clearRect(this.objProperties.width*0.1, this.objProperties.height*0.1, this.objProperties.width*0.8, this.objProperties.height*0.5);
         this.ctx.clearRect(0, this.objProperties.height*0.7, this.objProperties.width*0.4, this.objProperties.height*0.2);    
         this.ctx.clearRect(this.objProperties.width*0.6, this.objProperties.height*0.7, this.objProperties.width*0.4, this.objProperties.height*0.2);
         this.ctx.clearRect(0, this.objProperties.height*0.7, this.objProperties.width*0.2, this.objProperties.height*0.3);    
         this.ctx.clearRect(this.objProperties.width*0.8, this.objProperties.height*0.7, this.objProperties.width*0.2, this.objProperties.height*0.3);    
      this.ctx.closePath();
   }

   setKey(bg){
      this.ctx.beginPath();
         this.ctx.lineWidth = this.objProperties.lineWidth;
         this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
         this.ctx.fillStyle = bg;      
         this.ctx.strokeStyle = bg;
         this.ctx.arc(this.objProperties.width*0.75, this.objProperties.height*0.5, this.objProperties.width*0.2, 0, Math.PI*2, false);
         this.ctx.fill();
         this.ctx.fillRect(0, this.objProperties.height*0.4, this.objProperties.width*0.6, this.objProperties.height*0.2);
         this.ctx.stroke();
         this.ctx.closePath();
      this.ctx.beginPath();
         this.ctx.fillStyle = 'white';    
         this.ctx.strokeStyle = 'white';
         this.ctx.arc(this.objProperties.width*0.8, this.objProperties.height*0.45, this.objProperties.width*0.05, 0, Math.PI*2, false);
         this.ctx.fill();
         this.ctx.fillRect(this.objProperties.width*0.05, this.objProperties.height*0.5, this.objProperties.width*0.05, this.objProperties.height*0.2);
         this.ctx.fillRect(this.objProperties.width*0.15, this.objProperties.height*0.5, this.objProperties.width*0.05, this.objProperties.height*0.2);
         this.ctx.fillRect(this.objProperties.width*0.25, this.objProperties.height*0.5, this.objProperties.width*0.05, this.objProperties.height*0.2);
         this.ctx.fillRect(this.objProperties.width*0.35, this.objProperties.height*0.5, this.objProperties.width*0.05, this.objProperties.height*0.2);
      this.ctx.closePath();
   }

   setConector(bg){
      this.ctx.beginPath();
         this.ctx.lineWidth = this.objProperties.lineWidth;
         this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
         this.ctx.fillStyle = bg;      
         this.ctx.strokeStyle = bg;
         this.ctx.fillRect(0, this.objProperties.height*0.3, this.objProperties.width*0.3, this.objProperties.height*0.1);
         this.ctx.fillRect(0, this.objProperties.height*0.6, this.objProperties.width*0.3, this.objProperties.height*0.1);
         this.ctx.fillRect(this.objProperties.width*0.2, this.objProperties.height*0.1, this.objProperties.width*0.1, this.objProperties.height*0.8);
         this.ctx.fillRect(this.objProperties.width*0.3, this.objProperties.height*0.2, this.objProperties.width*0.3, this.objProperties.height*0.6);
         this.ctx.fillRect(this.objProperties.width*0.6, this.objProperties.height*0.4, this.objProperties.width*0.6, this.objProperties.height*0.2);
      this.ctx.closePath();
   }

   setHome(bg){
      this.ctx.beginPath();
         this.ctx.lineWidth = this.objProperties.lineWidth;
         this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
         this.ctx.fillStyle = bg;      
         this.ctx.strokeStyle = bg;
         this.ctx.moveTo(0, this.objProperties.height/2);
         this.ctx.lineTo(this.objProperties.width/2, 0);
         this.ctx.lineTo(this.objProperties.width, this.objProperties.height/2);

         this.ctx.moveTo(this.objProperties.width*0.2, this.objProperties.height*0.4);
         this.ctx.lineTo(this.objProperties.width*0.2, this.objProperties.height);

         this.ctx.moveTo(this.objProperties.width*0.8, this.objProperties.height*0.4);
         this.ctx.lineTo(this.objProperties.width*0.8, this.objProperties.height);

         this.ctx.fillRect(this.objProperties.width*0.4, this.objProperties.height*0.6, this.objProperties.width*0.2, this.objProperties.height*0.35);
         
         this.ctx.stroke();
      this.ctx.closePath();
   }

   setText(bg){
      this.ctx.beginPath();
         this.ctx.lineWidth = this.objProperties.lineWidth;
         this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
         this.ctx.fillStyle = bg;      
         this.ctx.strokeStyle = bg;
         this.ctx.fillRect(0, 0, this.objProperties.width, this.objProperties.height*0.1);
         this.ctx.fillRect(0, 0, this.objProperties.width*0.15, this.objProperties.height*0.4);
         this.ctx.fillRect(this.objProperties.width*0.85, 0, this.objProperties.width*0.15, this.objProperties.height*0.4);
         this.ctx.fillRect(this.objProperties.width*0.4, 0, this.objProperties.width*0.2, this.objProperties.height);
         this.ctx.stroke();
      this.ctx.closePath();
   }

   setColor(bg, bg2, bg3){
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.beginPath();         
         this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);
         this.ctx.strokeStyle = bg;        
         this.ctx.fillStyle = bg;
         this.ctx.arc(this.objProperties.width*0.5, this.objProperties.height*0.3, this.objProperties.width*0.2, 0, Math.PI*2, false);
         this.ctx.fill();
         this.ctx.stroke();
         this.ctx.closePath();  
      this.ctx.beginPath();
         this.ctx.strokeStyle = bg2;
         this.ctx.fillStyle = bg2;
         this.ctx.arc(this.objProperties.width*0.3, this.objProperties.height*0.65, this.objProperties.width*0.2, 0, Math.PI*2, false);
         this.ctx.fill();
         this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.beginPath();   
         this.ctx.strokeStyle = bg3;
         this.ctx.fillStyle = bg3;
         this.ctx.arc(this.objProperties.width*0.7, this.objProperties.height*0.65, this.objProperties.width*0.2, 0, Math.PI*2, false);
         this.ctx.fill();
         this.ctx.stroke();
      this.ctx.closePath();
   }

   setEmail(bg, bg2, bg3){
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.beginPath();         
         this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);
         this.ctx.strokeStyle = bg;        
         this.ctx.fillStyle = bg;
         this.ctx.moveTo(0, 0);
         this.ctx.lineTo(this.objProperties.width, 0);
         this.ctx.lineTo(this.objProperties.width*0.5, this.objProperties.height*0.5);
         this.ctx.lineTo(0, 0);
         this.ctx.lineTo(0, this.objProperties.height);
         this.ctx.lineTo(this.objProperties.width, this.objProperties.height);
         this.ctx.lineTo(this.objProperties.width, 0);
         this.ctx.moveTo(0, this.objProperties.height);
         this.ctx.lineTo(this.objProperties.width*0.4, this.objProperties.height*0.4);
         this.ctx.moveTo(this.objProperties.width, this.objProperties.height);
         this.ctx.lineTo(this.objProperties.width*0.6, this.objProperties.height*0.4);
         this.ctx.stroke();
         this.ctx.closePath();  
      this.ctx.beginPath();
   }

   setCalc(bg){
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.beginPath();         
         this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);
         this.ctx.strokeStyle = bg;        
         this.ctx.fillStyle = bg;
         this.ctx.fillRect(0,0,this.objProperties.width,this.objProperties.height);
         //Pantalla
         this.ctx.clearRect(this.objProperties.width*0.1,this.objProperties.height*0.1,this.objProperties.width*0.82,this.objProperties.height*0.4);
         //Hilara 1 de botones
         this.ctx.clearRect(this.objProperties.width*0.15,this.objProperties.height*0.6,this.objProperties.width*0.1,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.35,this.objProperties.height*0.6,this.objProperties.width*0.1,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.55,this.objProperties.height*0.6,this.objProperties.width*0.1,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.75,this.objProperties.height*0.6,this.objProperties.width*0.1,this.objProperties.height*0.1);
         //hilera 2 de botones
         this.ctx.clearRect(this.objProperties.width*0.15,this.objProperties.height*0.75,this.objProperties.width*0.1,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.35,this.objProperties.height*0.75,this.objProperties.width*0.1,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.55,this.objProperties.height*0.75,this.objProperties.width*0.1,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.75,this.objProperties.height*0.75,this.objProperties.width*0.1,this.objProperties.height*0.1);
         this.ctx.closePath();  
      this.ctx.beginPath();
   }

   setBook(bg){
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.beginPath();         
         this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);
         this.ctx.strokeStyle = bg;        
         this.ctx.fillStyle = bg;
         this.ctx.fillRect(0,0,this.objProperties.width,this.objProperties.height);
         this.ctx.clearRect(1,1,this.objProperties.width-2,this.objProperties.height-2);
         this.ctx.moveTo(this.objProperties.width/2, 0);
         this.ctx.lineTo(this.objProperties.width/2, this.objProperties.height);


         this.ctx.moveTo(4, this.objProperties.height*0.2);
         this.ctx.lineTo(this.objProperties.width/2-4, this.objProperties.height*0.2);
         //this.ctx.moveTo(2, this.objProperties.height*0.3);
         //this.ctx.lineTo(this.objProperties.width/2-2, this.objProperties.height*0.3);
         this.ctx.moveTo(2, this.objProperties.height*0.35);
         this.ctx.lineTo(this.objProperties.width/2-2, this.objProperties.height*0.35);
         this.ctx.moveTo(2, this.objProperties.height*0.45);
         this.ctx.lineTo(this.objProperties.width/2-2, this.objProperties.height*0.45);
         this.ctx.moveTo(2, this.objProperties.height*0.55);
         this.ctx.lineTo(this.objProperties.width/2-2, this.objProperties.height*0.55);
         this.ctx.moveTo(2, this.objProperties.height*0.65);
         this.ctx.lineTo(this.objProperties.width/2-2, this.objProperties.height*0.65);
         this.ctx.moveTo(2, this.objProperties.height*0.8);
         this.ctx.lineTo(this.objProperties.width/2-2, this.objProperties.height*0.8);
         
         this.ctx.moveTo(this.objProperties.width/2+4, this.objProperties.height*0.2);
         this.ctx.lineTo(this.objProperties.width-4, this.objProperties.height*0.2);
         //this.ctx.moveTo(this.objProperties.width/2+2, this.objProperties.height*0.3);
         //this.ctx.lineTo(this.objProperties.width-2, this.objProperties.height*0.3);
         this.ctx.moveTo(this.objProperties.width/2+2, this.objProperties.height*0.35);
         this.ctx.lineTo(this.objProperties.width-2, this.objProperties.height*0.35);
         this.ctx.moveTo(this.objProperties.width/2+2, this.objProperties.height*0.45);
         this.ctx.lineTo(this.objProperties.width-2, this.objProperties.height*0.45);
         this.ctx.moveTo(this.objProperties.width/2+2, this.objProperties.height*0.55);
         this.ctx.lineTo(this.objProperties.width-2, this.objProperties.height*0.55);
         this.ctx.moveTo(this.objProperties.width/2+2, this.objProperties.height*0.65);
         this.ctx.lineTo(this.objProperties.width-2, this.objProperties.height*0.65);
         this.ctx.moveTo(this.objProperties.width/2+2, this.objProperties.height*0.8);
         this.ctx.lineTo(this.objProperties.width-2, this.objProperties.height*0.8);
         this.ctx.stroke();
         this.ctx.closePath();  
      this.ctx.beginPath();
   }

   setKeyboard(bg){
      this.ctx.lineWidth = this.objProperties.lineWidth;
      this.ctx.beginPath();         
         this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);
         this.ctx.strokeStyle = bg;        
         this.ctx.fillStyle = bg;
         this.ctx.fillRect(0,0,this.objProperties.width,this.objProperties.height);
         //Space
         this.ctx.clearRect(this.objProperties.width*0.3,this.objProperties.height*0.7,this.objProperties.width*0.4,this.objProperties.height*0.1);
         //Hilara 1 de botones
         this.ctx.clearRect(this.objProperties.width*0.16,this.objProperties.height*0.2,this.objProperties.width*0.07,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.26,this.objProperties.height*0.2,this.objProperties.width*0.07,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.36,this.objProperties.height*0.2,this.objProperties.width*0.07,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.46,this.objProperties.height*0.2,this.objProperties.width*0.07,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.56,this.objProperties.height*0.2,this.objProperties.width*0.07,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.66,this.objProperties.height*0.2,this.objProperties.width*0.07,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.76,this.objProperties.height*0.2,this.objProperties.width*0.07,this.objProperties.height*0.1);
         //hilera 2 de botones
         this.ctx.clearRect(this.objProperties.width*0.16,this.objProperties.height*0.4,this.objProperties.width*0.07,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.26,this.objProperties.height*0.4,this.objProperties.width*0.07,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.36,this.objProperties.height*0.4,this.objProperties.width*0.07,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.46,this.objProperties.height*0.4,this.objProperties.width*0.07,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.56,this.objProperties.height*0.4,this.objProperties.width*0.07,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.66,this.objProperties.height*0.4,this.objProperties.width*0.07,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.76,this.objProperties.height*0.4,this.objProperties.width*0.07,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.16,this.objProperties.height*0.7,this.objProperties.width*0.07,this.objProperties.height*0.1);
         this.ctx.clearRect(this.objProperties.width*0.76,this.objProperties.height*0.7,this.objProperties.width*0.07,this.objProperties.height*0.1);
         
         this.ctx.closePath();  
      this.ctx.beginPath();
   }

   setMoney(bg){
      this.ctx.beginPath();
         this.ctx.lineWidth = this.objProperties.lineWidth;
         this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
         this.ctx.fillStyle = bg;      
         this.ctx.strokeStyle = bg;
         this.ctx.arc(this.objProperties.width*0.5, this.objProperties.height*0.5, this.objProperties.width*0.3, 0, Math.PI*2, false);
         this.ctx.fill();
         this.ctx.stroke();
      this.ctx.closePath()
      this.ctx.beginPath();  
         this.ctx.fillStyle = 'white';      
         this.ctx.strokeStyle = 'white';
         this.ctx.arc(this.objProperties.width*0.5, this.objProperties.height*0.5, this.objProperties.width*0.25, 0, Math.PI*2, false);
         this.ctx.fill();
         this.ctx.stroke();       
      this.ctx.closePath();
      this.ctx.beginPath();  
         this.ctx.fillStyle = bg;
         this.ctx.font= (this.objProperties.height*0.65)+'px Arial';
         this.ctx.fillText('$',this.objProperties.width*0.5-(this.objProperties.width*0.27)/2, this.objProperties.height*0.5+this.objProperties.width*0.3/2);
      this.ctx.closePath();
   }

   setShare(bg){
      this.ctx.beginPath();
         this.ctx.lineWidth = this.objProperties.lineWidth;
         this.ctx.clearRect(0,0,this.objProperties.width,this.objProperties.height);      
         this.ctx.fillStyle = bg;      
         this.ctx.strokeStyle = bg;
         this.ctx.arc(this.objProperties.width*0.15, this.objProperties.height*0.5, 
                      this.objProperties.width*0.1, 0, Math.PI*2, false);
         this.ctx.fill();
         this.ctx.stroke();
      this.ctx.closePath()   
      this.ctx.beginPath();
         this.ctx.arc(this.objProperties.width*0.85, this.objProperties.height*0.18, 
                      this.objProperties.width*0.1, 0, Math.PI*2, false);
         this.ctx.fill();
         this.ctx.stroke();
      this.ctx.closePath()
      this.ctx.beginPath();
         this.ctx.arc(this.objProperties.width*0.85, this.objProperties.height*0.85, 
                      this.objProperties.width*0.1, 0, Math.PI*2, false);
         this.ctx.fill();
         this.ctx.stroke();
      this.ctx.closePath()
      this.ctx.beginPath();
         this.ctx.moveTo(this.objProperties.width*0.85, this.objProperties.height*0.18);   
         this.ctx.lineTo(this.objProperties.width*0.15, this.objProperties.height*0.5);
         this.ctx.lineTo(this.objProperties.width*0.85, this.objProperties.height*0.85);
         this.ctx.stroke();
      this.ctx.closePath()
   }
	
	repaint(bg, bg2, bg3){
      if(!bg) bg = this.objProperties.backgroundColor;
      if(this.objProperties.typeButton==='up') this.setUpButton(bg);
      if(this.objProperties.typeButton==='down') this.setDownButton(bg);
      if(this.objProperties.typeButton==='first') this.setFirstButton(bg);
      if(this.objProperties.typeButton==='last') this.setLastButton(bg);
      if(this.objProperties.typeButton==='next') this.setNextButton(bg);
      if(this.objProperties.typeButton==='prior') this.setPriorButton(bg);
      if(this.objProperties.typeButton==='nextPage') this.setNextPageButton(bg);
      if(this.objProperties.typeButton==='priorPage') this.setPriorPageButton(bg);
      if(this.objProperties.typeButton==='stop') this.setStopButton(bg);
      if(this.objProperties.typeButton==='onoff') this.setOnOffButton(bg);
      if(this.objProperties.typeButton==='pause') this.setPauseButton(bg);
      if(this.objProperties.typeButton==='exchange') this.setExchangeButton(bg);
      if(this.objProperties.typeButton==='closeTree') this.setCloseTree(bg);
      if(this.objProperties.typeButton==='openTree') this.setOpenTree(bg);
      if(this.objProperties.typeButton==='folder') this.setFolder(bg);
      if(this.objProperties.typeButton==='doc') this.setDoc(bg);
      if(this.objProperties.typeButton==='disk') this.setDisk(bg);
      if(this.objProperties.typeButton==='alert') this.setAlert(bg);
      if(this.objProperties.typeButton==='find') this.setFind(bg);
      if(this.objProperties.typeButton==='print') this.setPrint(bg);
      if(this.objProperties.typeButton==='save') this.setSave(bg);
      if(this.objProperties.typeButton==='edit') this.setEdit(bg);
      if(this.objProperties.typeButton==='refresh') this.setRefresh(bg);
      if(this.objProperties.typeButton==='block') this.setBlock(bg);
      if(this.objProperties.typeButton==='close') this.setClose(bg);
      if(this.objProperties.typeButton==='info') this.setInfo(bg);
      if(this.objProperties.typeButton==='ok') this.setOk(bg);
      if(this.objProperties.typeButton==='delete') this.setDelete(bg);  
      if(this.objProperties.typeButton==='download') this.setDownload(bg);
      if(this.objProperties.typeButton==='user') this.setUser(bg);
      if(this.objProperties.typeButton==='flag') this.setFlag(bg);
      if(this.objProperties.typeButton==='music') this.setMusic(bg);
      if(this.objProperties.typeButton==='photo') this.setPhoto(bg);
      if(this.objProperties.typeButton==='openFolder') this.setOpenFolder(bg); 
      if(this.objProperties.typeButton==='closeButton') this.setCloseButton(bg); 
      if(this.objProperties.typeButton==='maximize') this.setMaximize(bg);
      if(this.objProperties.typeButton==='minimize') this.setMinimize(bg);
      if(this.objProperties.typeButton==='plus') this.setPlus(bg);
      if(this.objProperties.typeButton==='minus') this.setMinus(bg);
      if(this.objProperties.typeButton==='batery') this.setBatery(bg);
      if(this.objProperties.typeButton==='chain') this.setChain(bg);
      if(this.objProperties.typeButton==='shape') this.setShape(bg);
      if(this.objProperties.typeButton==='graphic') this.setGraphic(bg);
      if(this.objProperties.typeButton==='tool') this.setTool(bg);
      if(this.objProperties.typeButton==='audio') this.setAudio(bg);
      if(this.objProperties.typeButton==='video') this.setVideo(bg);
      if(this.objProperties.typeButton==='monitor') this.setMonitor(bg);
      if(this.objProperties.typeButton==='key') this.setKey(bg);
      if(this.objProperties.typeButton==='conector') this.setConector(bg);
      if(this.objProperties.typeButton==='home') this.setHome(bg);
      if(this.objProperties.typeButton==='text') this.setText(bg);
      if(this.objProperties.typeButton==='color') this.setColor(bg, bg2, bg3);
      if(this.objProperties.typeButton==='email') this.setEmail(bg, bg2, bg3);
      if(this.objProperties.typeButton==='calc') this.setCalc(bg);
      if(this.objProperties.typeButton==='book') this.setBook(bg);
      if(this.objProperties.typeButton==='keyboard') this.setKeyboard(bg);
      if(this.objProperties.typeButton==='money') this.setMoney(bg);
      if(this.objProperties.typeButton==='share') this.setShare(bg);
      if(this.objProperties.typeButton==='upload') this.setUpLoad(bg);
   }
   
   changeType(typeButton){
      this.objProperties.typeButton = typeButton;
      this.repaint(this.objProperties.backgroundColor,this.objProperties.backgroundColor2,this.objProperties.backgroundColor3);
      return this;
   }
	
	getPosition(){
		return {
			x : this.objProperties.x,
			y : this.objProperties.y
		}
	}
	
	getObject(){
		return this.controlButton;
   }
   
   getObjProperties(){
		return this.objProperties;
	}
	
	show(){
		this.controlButton.show();
		this.isShow = true;
		return this;
	}
	
	hide(){
		this.controlButton.hide();
		this.isShow = false;
		return this;
	}
	
	getObjectPanel(){
		return this.panel;
	}
	
	setDimension(w, h){
		this.objProperties.width = w;
		this.objProperties.height = h;
		this.setProperties(this.objProperties);
		return this;
	}
	
	addToBody(){ 
		document.body.appendChild(this.panel);
		return this; 
	} 
}