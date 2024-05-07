var Panel =
{
  objects : new Array(),
  ids : new Array(),
  pointObj : new Object(),
  addToBody : function(id)
  {
  	document.body.appendChild(this.objects[id]);    
  },
  getMouseXY : function(e)
  {
  	Panel.pointObj.x = 0;
  	Panel.pointObj.y = 0;
    var IE = document.all ? true : false;
    if (IE) 
    {
      Panel.pointObj.x = event.clientX;
      Panel.pointObj.y = event.clientY;
    }
    else 
    {
      Panel.pointObj.x = e.pageX;
      Panel.pointObj.y = e.pageY;
    }
    return Panel.pointObj;
  },
  
  create : function(id, width, height)
  {
  	this.ids[this.ids.length]=id;
  	this.objects[id] = CanvasFactory.create(id,width,height);
  	this.objects[id].grad = '';
  	this.objects[id].setGradient = false;
  	this.objects[id].extObj = new Array();
  	this.objects[id].extObjById = new Array();
  	this.objects[id].width = width;
  	this.objects[id].height = height;
  	this.objects[id].virtualInput = document.createElement('input');
  	this.objects[id].virtualInput.type ='button';
  	this.objects[id].virtualInput.id = id;
  	this.objects[id].virtualInput.style.width ='1px';
  	this.objects[id].virtualInput.style.height ='1px';
  	this.objects[id].virtualInput.style.position = 'absolute';
  	this.objects[id].virtualInput.style.left = '-100px';
  	this.objects[id].virtualInput.style.top ='-100px';
  	document.body.appendChild(this.objects[id].virtualInput);
  	this.objects[id].r1 = 0;
  	this.objects[id].r2 = 0;
  	this.objects[id].r3 = 0;
  	this.objects[id].r4 = 0;
  	this.objects[id].id = id;
  	this.objects[id].style.left = '0px';
  	this.objects[id].style.top = '0px';
  	this.objects[id].style.display = 'block';
  	this.objects[id].style.width = width+'px';
  	this.objects[id].style.height = height+'px';
  	this.objects[id].style.lineHeight = height+'px';
  	this.objects[id].panelText = new Array();
  	this.objects[id].style.display = 'none';
  	this.objects[id].rgb = 
  	{
  	  red : 0,
  	  green : 0,
  	  blue : 0,
  	  transparency : 1,	
  	  getRGB : function()
  	  {
  	  	return "rgba("+this.red+","+ this.green+","+ this.blue+","+ this.transparency+")";
  	  },
  	  setRGB :function(r,g,b,t)
  	  {
  	  	this.red = r;
  	  	this.green = g;
  	  	this.blue = b;
  	  	this.transparency = t;
  	  },
  	  setTransparencyLevel : function(tl)
  	  {
  	  	this.transparency = tl;
  	  } 
  	}
  	Panel.objects[id].onmouseoverF = new Function('');
  	Panel.objects[id].onmousedownF = new Function('');
  	Panel.objects[id].onmouseupF = new Function('');
  	Panel.objects[id].onclickF = new Function('');
    Panel.objects[id].ondblclickF = new Function('');
    Panel.objects[id].onmouseoutF = new Function('');
    Panel.objects[id].onmousemoveF = new Function('');
    Panel.objects[id].onkeypressF = new Function('');
  	Panel.objects[id].onkeydownF = new Function('');
  	Panel.objects[id].onkeyupF = new Function('');
  	Panel.objects[id].onfocusF = new Function('');
  	Panel.objects[id].onblurF = new Function('');
  	Panel.objects[id].onmouseoutF = new Function('');
  	Panel.objects[id].virtualInput.onfocus = function(e)	{ Panel.objects[id].onfocusF()		}
  	Panel.objects[id].virtualInput.onblur = function(e)     { Panel.objects[id].onblurF()		}
  	Panel.objects[id].virtualInput.onkeypress = function(e) { Panel.objects[id].onkeypressF()   }
  	Panel.objects[id].virtualInput.onkeydown = function(e)  { Panel.objects[id].onkeydownF() 	}
  	Panel.objects[id].virtualInput.onkeyup = function(e)    { Panel.objects[id].onkeyupF() 		}  
  	Panel.objects[id].onmouseover = function(e) 			{ Panel.objects[id].onmouseoverF() 	}
  	Panel.objects[id].onmousedown = function(e) 			{ Panel.objects[id].onmousedownF() 	}
  	Panel.objects[id].onmouseup = function(e)   			{ Panel.objects[id].onmouseupF() 	}
  	Panel.objects[id].onmousemove = function(e) 			{ Panel.objects[id].onmousemoveF(); }
  	Panel.objects[id].onmouseout = function(e) 				{ Panel.objects[id].onmouseoutF(); 	}
  	Panel.objects[id].onclick = function(e)     			{ Panel.objects[id].onclickF();     }
  	Panel.objects[id].ondblclick = function(e)  			{ Panel.objects[id].ondblclickF();  }
  	this.setFill(id,0,0,0,1);
  	this.objects[id].setFill   = function (r,g,b,t) 		 					{ Panel.setFill(id,r,g,b,t) };
  	this.objects[id].setStroke = function ()        							{ Panel.setStroke(id) };
  	this.objects[id].addToBody = function ()        							{ Panel.addToBody(id) };
  	this.objects[id].setTransparency = function(transparency)					{ Panel.setTransparency(id,transparency) };
  	this.objects[id].clearPanel = function()									{ Panel.clearPanel(id) };
    this.objects[id].setDimension = function(width, height)     				{ Panel.setDimension(id,width,height) }
    this.objects[id].setPosition = function(left, top)     						{ Panel.setPosition(id,left,top) }
    this.objects[id].show = function()     										{ Panel.show(id) }
    this.objects[id].hide = function()     										{ Panel.hide(id) }
    this.objects[id].setAbsoluteMode = function()     							{ Panel.setAbsoluteMode(id) }
    this.objects[id].setRelativeMode = function()     							{ Panel.setRelativeMode(id) }
    this.objects[id].setRadius = function(radius1, radius2, radius3, radius4)  	{ Panel.setRadius(id,radius1,radius2,radius3,radius4) }
  	this.objects[id].setText = function(x,y,text)     							{ Panel.setText(id,x,y,text) }
  	this.objects[id].setFont = function(font,color)								{ Panel.setFont(id,font,color) }
  	this.objects[id].alignText = function(align)								{ Panel.alignText(id, align) }
  	this.objects[id].vAlignText = function(align)								{ Panel.vAlignText(id, align) }
  	this.objects[id].setCenterText = function(text)								{ Panel.setCenterText(id, text) }
  	this.objects[id].setFillGradient = function(x1,y1,x2,y2,arrColor)			{ Panel.setFillGradient(id,x1,y1,x2,y2,arrColor) }
  	this.objects[id].setShadow = function(width,color) 							{ Panel.setShadow(id, width,color) }
  	this.objects[id].delShadow = function() 									{ Panel.delShadow(id) }
  	this.objects[id].addObj = function(obj,x,y) 							    { Panel.addObj(id,obj,x,y) }
  	this.objects[id].delObj = function(obj) 							    	{ return Panel.delObj(id,obj) }
  	this.objects[id].delAllObj = function() 							    	{ return Panel.delAllObj(id) }
  	this.objects[id].moveXObj = function(obj, x)								{ Panel.moveXObj(id,obj,x) }
  	this.objects[id].moveYObj = function(obj, y)								{ Panel.moveYObj(id,obj,y) }
    this.objects[id].moveObj = function(obj, x, y)								{ Panel.moveObj(id,obj,x,y) }
    this.objects[id].setObjXY = function(obj, x, y)		   						{ Panel.setObjXY(id,obj,x,y) }
    this.objects[id].getObjFromPanel = function(idObj)			   				{ return Panel.getObjFromPanel(id,idObj) }
    this.objects[id].getMouseXY = function(e)  									{ return Panel.getMouseXY(e); }
    this.objects[id].getTotalObj = function()									{ return Panel.getTotalObj(id); }
    this.objects[id].getArrayObj = function()									{ return Panel.getArrayObj(id); }
    this.objects[id].onMouseOver = function(funct) 								{ Panel.onMouseOver(id, funct); }
  	this.objects[id].onMouseDown = function(funct) 								{ Panel.onMouseDown(id, funct); }
  	this.objects[id].onMouseUp = function(funct)   								{ Panel.onMouseUp(id, funct); }
  	this.objects[id].onClick = function(funct)     								{ Panel.onClick(id, funct); }
  	this.objects[id].onDblClick = function(funct)  								{ Panel.onDblClick(id, funct); }
  	this.objects[id].onMouseMove = function(funct) 								{ Panel.onMouseMove(id, funct); }
  	this.objects[id].onMouseOut = function(funct) 								{ Panel.onMouseOut(id, funct); }
  	this.objects[id].onKeyPress = function(funct)  								{ Panel.onKeyPress(id, funct); }
  	this.objects[id].onKeyDown = function(funct)   								{ Panel.onKeyDown(id, funct); }
  	this.objects[id].onKeyUp = function(funct)  								{ Panel.onKeyUp(id, funct); }
  	this.objects[id].onFocus = function(funct)  								{ Panel.onFocus(id, funct); }
    this.objects[id].onBlur = function(funct)  									{ Panel.onBlur(id, funct); }	
  	return this.objects[id]; 
  },
  
  onMouseOver : function(id, funct)
  {
  	this.objects[id].onmouseoverF = new Function(funct); 
  },
  
  onMouseDown : function(id, funct)
  {
  	this.objects[id].onmousedownF = new Function(funct); 
  },
  
  onMouseUp : function(id, funct) 
  { 
  	this.objects[id].onmouseupF = new Function(funct);
  },
  
  onClick : function(id, funct) 
  { 
  	this.objects[id].onclickF = new Function(funct);
  },
  
  onDblClick : function(id, funct) 
  { 
  	this.objects[id].ondblclickF = new Function(funct);
  },
  
  onMouseMove : function(id, funct) 
  { 
  	this.objects[id].onmousemoveF = new Function(funct);
  },
  
  onKeyPress : function(id, funct) 
  { 
  	this.objects[id].onkeypressF = new Function(funct);
  },
  
  onKeyDown : function(id, funct) 
  { 
  	this.objects[id].onkeydownF = new Function(funct);
  },
  
  onKeyup : function(id, funct) 
  { 
  	this.objects[id].onkeyupF = new Function(funct);
  },
  
  onFocus : function(id, funct) 
  { 
  	this.objects[id].onfocusF = new Function(funct);
  },
  
  onBlur : function(id, funct) 
  { 
  	this.objects[id].onblurF = new Function(funct);
  },
  
  onMouseOut : function(id, funct) 
  { 
  	this.objects[id].onmouseoutF = new Function(funct);
  },
  
  addObj : function(id,obj,x,y)
  {  	
  	var l = this.objects[id].extObj.length;
  	this.objects[id].extObj[l] = obj;
  	this.objects[id].extObjById[obj.id] = obj;
  	this.objects[id].appendChild(this.objects[id].extObj[l]);
  	obj.style.display 	= 'block';
  	obj.style.position 	= 'absolute';
  	obj.style.left 		= x + 'px';
  	obj.style.top 		= y + 'px';
  	obj.x = x;
  	obj.y = y;
  },
  
  getArrayObj : function(id)
  {
  	return this.objects[id].extObj;
  },
  
  delAllObj : function(id)
  {
  	var totalDel = 0;
  	var l = this.objects[id].extObj.length;
  	for(var i=0; i < l; i++)
  	{
	  if(this.delObj(id, this.objects[id].extObj[i]))
  	  {
  	    totalDel++;
  	  }
  	}
	this.objects[id].extObj.splice(0,this.objects[id].extObj.length); 	
  	this.objects[id].extObjById.splice(0,this.objects[id].extObjById.length);
  	return totalDel;
  },
  
  getTotalObj : function(id)
  {
  	return this.objects[id].extObj.length;
  },
  
  delObj : function(id, obj)
  {
  	if(obj != null && obj!='undefined')
  	{
  	  this.objects[id].removeChild(obj);
  	  this.objects[id].extObjById[obj.id]=null;
  	  return true;
  	}
  	else
  	  return false;
  },
  
  getObjFromPanel : function(id,idObj)
  {
  	return this.objects[id].extObjById[idObj];
  },
  
  setObjXY : function(id,obj,x,y)
  {
  	obj.style.left = x + 'px';
  	obj.style.top  = y + 'px';
  	obj.x = x;
  	obj.y = y;
  },
  
  moveObj : function(id, obj, x, y)
  {
  	this.moveXObj(id, obj, x);
  	this.moveYObj(id, obj, y);
  },
  
  moveXObj : function(id, obj, x)
  {
  	obj.x+=x;
  	obj.style.left 		= obj.x + 'px';
  },
  
  moveYObj : function(id, obj, y)
  {
  	obj.y+=y;
  	obj.style.top 		= obj.y + 'px';
  },
  
  setRadius : function(id, radius1, radius2, radius3, radius4)
  {
  	this.objects[id].r1 = radius1;
  	this.objects[id].r2 = radius2;
  	this.objects[id].r3 = radius3;
  	this.objects[id].r4 = radius4;
  	this.clearPanel(id);
  	this.roundedRect(id);
  	this.show(id);
  },
  
  setFocus : function(id)
  {
  	this.objects[id].virtualInput.focus();
  },
  setPosition : function(id, left, top)
  {
    this.objects[id].style.left=left+'px';
    this.objects[id].style.top=top+'px';
  },
  
  setAbsoluteMode : function(id)
  {
  	this.objects[id].style.position = 'absolute';
  },
  
  setRelativeMode : function(id)
  {
  	this.objects[id].style.position = 'relative';
  },
  
  setText : function(id, x, y, text)
  {
    this.objects[id].ctx.fillText(text,x,y);
  },
  
  setCenterText : function(id, text)
  {
  	this.objects[id].ctx.shadowOffsetX = 0;
  	this.objects[id].ctx.shadowOffsetY = 0;
  	this.objects[id].ctx.shadowColor = '';
  	this.objects[id].ctx.shadowBlur = 0;
  	var x = this.objects[id].width / 2;
  	var y = this.objects[id].height / 2;
  	this.alignText(id, 'center');
  	this.vAlignText(id,'middle');	
    this.objects[id].ctx.fillText(text,x,y);
  },
  
  alignText : function(id, align)
  {
  	this.objects[id].ctx.textAlign = align;
  },
  
  vAlignText : function(id, align)
  {
  	this.objects[id].ctx.textBaseline = align;
  },
  
  setFont : function(id,font, color)
  {
  	this.objects[id].ctx.fillStyle = color;
  	this.objects[id].ctx.font = font;
  },
  
  setFill : function(id,r,g,b,t)
  {
  	this.objects[id].rgb.setRGB(r,g,b,t);
  },
  
  setFillGradient : function(id,x1,y1,x2,y2,arrColor)
  {
  	this.objects[id].setGradient = true;
  	this.objects[id].grad = this.objects[id].ctx.createLinearGradient(x1,y1,x2,y2);
    for(var i=0; i<arrColor.length; i++)
    {
      var v = i/(arrColor.length-1);		
      this.objects[id].grad.addColorStop(v,arrColor[i]);	
    }
  	this.roundedRect(id);
  },
  
  setDimension : function(id, width, height)
  {
  	this.clearPanel(id);
  	this.objects[id].width = width;
  	this.objects[id].height = height;
  	this.objects[id].style.width = width+'px';
  	this.objects[id].style.height = height+'px';
  	this.objects[id].style.lineHeight = height+'px';
  	this.objects[id].setDimCanvas(width, height);
  	this.roundedRect(id);
  },
  
  setTransparency : function(id, transparency)
  {
  	this.clearPanel(id);
  	this.objects[id].rgb.setTransparencyLevel(transparency);
    this.roundedRect(id);
  },
  
  setStroke : function(id)
  {
  	this.objects[id].ctx.stroke();
  },
  
  clearPanel : function(id)
  {
    this.objects[id].ctx.clearRect(0,0,this.objects[id].width, this.objects[id].height);	
  },
  
  
  roundRect : function(id)
  {
  	var lingrad = gcx.createLinearGradient(0, top, 0, Height);
	lingrad.addColorStop(0, 'white');
	lingrad.addColorStop(0.5, '#66CC00');
	lingrad.addColorStop(0.5, 'red');
	lingrad.addColorStop(1, 'white');
	lingrad.addColorStop(1, 'blue');
	gcx.fillStyle = lingrad;
	gcx.beginPath();
	gcx.lineWidth = 1;
	gcx.moveTo(left + radius, top);
	gcx.lineTo(left + Width - radius, top);
	gcx.arc(left + Width - radius, top + radius, radius, (Math.PI / 180) * 270, (Math.PI / 180) * 0, false);
	gcx.lineTo(left + Width, top + Height - radius);
	gcx.arc(left + Width - radius, top + Height - radius, radius, (Math.PI / 180) * 0, (Math.PI / 180) * 90, false);
	gcx.lineTo(left + radius, top + Height);
	gcx.arc(left + radius, top + Height - radius, radius, (Math.PI / 180) * 90, (Math.PI / 180) * 180, false);
	gcx.lineTo(left, top + radius);
	gcx.arc(left + radius, top + radius, radius, (Math.PI / 180) * 180, (Math.PI / 180) * 270, false);
	gcx.closePath();
	gcx.fill();
  },
  roundedRect : function (id)
  {
    var ctx = this.objects[id].ctx; 
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(this.objects[id].r1, 0);
    ctx.lineTo(this.objects[id].width - this.objects[id].r2, 0);
    ctx.quadraticCurveTo(this.objects[id].width, 0, this.objects[id].width, this.objects[id].r2);
    ctx.lineTo(this.objects[id].width, this.objects[id].height - this.objects[id].r3);
    ctx.quadraticCurveTo(this.objects[id].width, this.objects[id].height, this.objects[id].width - this.objects[id].r3, this.objects[id].height);
    ctx.lineTo(this.objects[id].r4, this.objects[id].height);
    ctx.quadraticCurveTo(0, this.objects[id].height, 0, this.objects[id].height - this.objects[id].r4);
    ctx.lineTo(0, this.objects[id].r1);
    ctx.quadraticCurveTo(0, 0, this.objects[id].r1, 0);
    ctx.closePath();   
    if(!this.objects[id].setGradient)
      this.objects[id].ctx.fillStyle = this.objects[id].rgb.getRGB();
  	else
  	  this.objects[id].ctx.fillStyle = this.objects[id].grad;  
  	
  	this.objects[id].ctx.fill();  
  	ctx.restore();
  },
  setShadow : function(id, width, color)
  {
  	var w1 = this.objects[id].width+width;
  	var h1 = this.objects[id].height+width;
  	this.objects[id].setDimCanvas(w1, h1);
    this.objects[id].ctx.shadowOffsetX = width;
  	this.objects[id].ctx.shadowOffsetY = width;
  	this.objects[id].ctx.shadowColor = color;
  	this.objects[id].ctx.shadowBlur = 3;
  	this.roundedRect(id);
  },
  
  delShadow : function(id)
  {
  	var w1 = this.objects[id].width;
  	var h1 = this.objects[id].height;
  	this.objects[id].setDimCanvas(w1, h1);
    this.objects[id].ctx.shadowOffsetX = 0;
  	this.objects[id].ctx.shadowOffsetY = 0;
  	this.roundedRect(id);
  },
  
  hide : function(id)
  {
  	this.objects[id].style.display = 'none';
  },
  
  show : function(id)
  {
  	this.objects[id].style.display = 'block';
  }
}
