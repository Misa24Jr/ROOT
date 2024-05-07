function PanelBuilder(ObjExtend, width, height)
{
  if(ObjExtend)
    PanelBuilder_.prototype = ObjExtend;
  if(width && height)  
    return new PanelBuilder_(width, height)
  else
    return new PanelBuilder_(1,1);
}
function PanelBuilder_(width, height)
{
  this.TYPE_IMGPNG = 0;
  this.TYPE_IMGJPG = 1;
  this.TYPE_IMGBMP = 2;
  this.TYPE_IMGGIF = 3;  
  var cb = new CanvasBuilder(null, width, height);
  //cb.addToBody();
  var box = cb.getPanelCanvas();
  box.isMouseUp = true;
  box.grad = '';
  box.setGradient = false;
  box.extObj = new Array();
  box.extObjById = new Array();
  box.width = width;
  box.height = height;
  box.virtualInput = document.createElement('input');
  box.virtualInput.type ='button';
  box.virtualInput.style.width ='1px';
  box.virtualInput.style.height ='1px';
  box.virtualInput.style.position = 'absolute';
  box.virtualInput.style.left = '-100px';
  box.virtualInput.style.top ='-100px';
  box.r1 = 0;
  box.r2 = 0;
  box.r3 = 0;
  box.r4 = 0;
  box.style.left = '0px';
  box.style.top = '0px';
  box.style.width = width+'px';
  box.style.height = height+'px';
  box.style.lineHeight = height+'px';
  box.style.display = 'none';
  box.rgb = 
  {
    red : 0,
    green : 0,
    blue : 0,
    transparency : 1,	
    getRGB : function()
    {
    	var RGB = "rgba("+box.rgb.red+","+ box.rgb.green+","+ box.rgb.blue+","+ box.rgb.transparency+")";
    	return RGB;
    },
    setRGB :function(r,g,b,t)
    {    	
    	box.rgb.red = r;
    	box.rgb.green = g;
    	box.rgb.blue = b;
    	box.rgb.transparency = t;
    },
    setTransparencyLevel : function(tl)
    {
    	box.rgb.transparency = tl;
    }
  };
  box.rgb.setRGB(0,0,0,1);
  box.onmouseoverF = new Function('');
  box.onmousedownF = new Function('');
  box.onmouseupF = new Function('');
  box.onclickF = new Function('');
  box.ondblclickF = new Function('');
  box.onmouseoutF = new Function('');
  box.onmousemoveF = new Function('');
  box.onkeypressF = new Function('');
  box.onkeydownF = new Function('');
  box.onkeyupF = new Function('');
  box.onfocusF = new Function('');
  box.onblurF = new Function('');
  box.onmouseoutF = new Function('');
  box.virtualInput.onfocus = function(e)	{ box.onfocusF();};
  box.virtualInput.onblur = function(e)     { box.onblurF();}; 
  box.virtualInput.onkeypress = function(e) { box.onkeypressF();};
  box.virtualInput.onkeydown = function(e)  { box.onkeydownF();};
  box.virtualInput.onkeyup = function(e)    { box.onkeyupF();};  
  box.onmouseover = function(e) 			{ box.onmouseoverF();};
  box.onmousedown = function(e) 			{ box.isMouseUp=false;box.isMouseDown=true; box.onmousedownF();};
  box.onmouseup = function(e)   			{ box.isMouseDown=false; box.isMouseUp=true;box.onmouseupF();};
  box.onmousemove = function(e) 			{ box.onmousemoveF();};
  box.onmouseout = function(e) 				{ box.onmouseoutF();};
  box.onclick = function(e)     			{ box.onclickF(); };
  box.ondblclick = function(e)  			{ box.ondblclickF();};
  this.pointObj = new Object();
  this.pointObj.x=-1;
  this.pointObj.y=-1;
  this.x = 0;
  this.y = 0;
  this.addToBodyVBox = function(){
    document.body.appendChild(box.virtualInput);  
  };
  this.getCanvasBuilder = function()
  {
    return cb;  
  };
  this.convertPanelToImg = function(typeImg)
  {
    return cb.convertToImg(typeImg, width, height);
  };
  this.getPanel = function()
  {
  	return box;
  }; 
  this.getCanvasObj = function()
  {
    return cb.getCanvasObj();   
  };
  this.setFill = function(r,g,b,t)
  {
  	box.rgb.setRGB(r,g,b,t);
  };
  this.hide = function()
  {
  	box.style.display = 'none';
  };
  this.show = function()
  {
  	box.style.display = 'block';
  }; 
  this.getCanvasContext = function()
  {
  	return cb.ctx;
  };
  this.roundedRect = function ()
  {
    cb.ctx.save();
    cb.ctx.beginPath();
    cb.ctx.moveTo(box.r1, 0);
    cb.ctx.lineTo(box.width - box.r2, 0);
    cb.ctx.quadraticCurveTo(box.width, 0, box.width, box.r2);
    cb.ctx.lineTo(box.width, box.height - box.r3);
    cb.ctx.quadraticCurveTo(box.width, box.height, box.width - box.r3, box.height);
    cb.ctx.lineTo(box.r4, box.height);
    cb.ctx.quadraticCurveTo(0, box.height, 0, box.height - box.r4);
    cb.ctx.lineTo(0, box.r1);
    cb.ctx.quadraticCurveTo(0, 0, box.r1, 0);
    cb.ctx.closePath(); 
    if(!box.setGradient)
      cb.ctx.fillStyle = box.rgb.getRGB();
  	else
  	  cb.ctx.fillStyle = box.grad;  
  	cb.ctx.fill();  
  	cb.ctx.restore();
  };
  this.addToBody = function()
  {
  	document.body.appendChild(box);    
  };
  this.getStsMouse = function()
  {
  	var osr = new Object();
  	osr.isMouseDown = box.isMouseDown;
  	osr.isMouseUp = box.isMouseUp;
  	return osr;
  };
  this.getMouseXY = function(e)
  {
  	this.pointObj.x = 0;
  	this.pointObj.y = 0;
    var IE = document.all ? true : false;
    if (IE) 
    {
      this.pointObj.x = event.clientX;
      this.pointObj.y = event.clientY;
    }
    else 
    {
      this.pointObj.x = e.pageX;
      this.pointObj.y = e.pageY;
    }
    return this.pointObj;
  };
  this.setCursor = function(typeCursor)
  {
    box.style.cursor = typeCursor;	
  };
  this.onMouseOver = function( funct)
  {
  	box.onmouseoverF = new Function(funct); 
  };
  this.onMouseDown = function( funct)
  {
  	box.onmousedownF = new Function(funct); 
  };
  this.onMouseUp = function( funct) 
  { 
  	box.onmouseupF = new Function(funct);
  };
  this.onClick = function( funct) 
  { 
  	box.onclickF = new Function(funct);
  };
  this.onDblClick = function( funct) 
  { 
  	box.ondblclickF = new Function(funct);
  };
  this.onMouseMove = function( funct) 
  { 
  	box.onmousemoveF = new Function(funct);
  };
  this.onKeyPress = function( funct) 
  { 
  	box.onkeypressF = new Function(funct);
  };
  this.onKeyDown = function( funct) 
  { 
  	box.onkeydownF = new Function(funct);
  };
  this.onKeyup = function( funct) 
  { 
  	box.onkeyupF = new Function(funct);
  };
  this.onFocus = function( funct) 
  { 
  	box.onfocusF = new Function(funct);
  };
  this.onBlur = function( funct) 
  { 
  	box.onblurF = new Function(funct);
  };
  this.onMouseOut = function( funct) 
  { 
  	box.onmouseoutF = new Function(funct);
  };
  this.addObj = function(obj,x,y)
  {  	
  	var l = box.extObj.length;
  	box.extObj[l] = obj;
  	box.extObjById[obj.id] = obj;
  	box.appendChild(box.extObj[l]);
  	obj.style.display 	= 'block';
  	obj.style.position 	= 'absolute';
  	obj.style.left 		= x + 'px';
  	obj.style.top 		= y + 'px';
  	obj.x = x;
  	obj.y = y;
  };
  this.hideAllExtObj = function()
  {
  	var l = box.extObj.length;
  	for(var i=0; i<l; i++)
  	{
  	  box.extObj[i].style.display='none';	
  	}
  };
  this.showAllExtObj = function()
  {
  	var l = box.extObj.length;
  	for(var i=0; i<l; i++)
  	{
  	  box.extObj[i].style.display='block';	
  	}
  };
  this.getArrayObj = function()
  {
  	return box.extObj;
  };
  this.delAllObj = function()
  {
  	var totalDel = 0;
  	var l = box.extObj.length;
  	for(var i=0; i < l; i++)
  	{
	  if(this.delObj( box.extObj[i]))
  	  {
  	    totalDel++;
  	  }
  	}
	box.extObj.splice(0,box.extObj.length); 	
  	box.extObjById.splice(0,box.extObjById.length);
  	return totalDel;
  };
  this.getTotalObj = function()
  {
  	return box.extObj.length;
  };
  this.delObj = function( obj)
  {
  	if(obj != null && obj!='undefined')
  	{
  	  box.removeChild(obj);
  	  box.extObjById[obj.id]=null;
  	  return true;
  	}
  	else
  	  return false;
  };
  this.getObjFromPanel = function(idObj)
  {
  	return box.extObjById[idObj];
  };
  
  this.setZIndex = function(zi){
  	box.style.zIndex= zi;
  };
  
  this.setObjXY = function(obj,x,y)
  {
  	obj.style.left = x + 'px';
  	obj.style.top  = y + 'px';
  	obj.x = x;
  	obj.y = y;
  };
  this.moveObj = function( obj, x, y)
  {
  	this.moveXObj( obj, x);
  	this.moveYObj( obj, y);
  };
  this.moveXObj = function( obj, x)
  {
  	obj.x+=x;
  	obj.style.left 		= obj.x + 'px';
  };
  this.moveYObj = function( obj, y)
  {
  	obj.y+=y;
  	obj.style.top 		= obj.y + 'px';
  };
  this.clearPanel = function()
  {
    cb.ctx.clearRect(0,0,box.width, box.height);	
  };
  this.setRadius = function( radius1, radius2, radius3, radius4)
  {
  	box.r1 = radius1;
  	box.r2 = radius2;
  	box.r3 = radius3;
  	box.r4 = radius4;
  	box.style.borderTopLeftRadius=radius1+'em';
    box.style.borderTopRightRadius=radius2+'em';
    box.style.borderBottomLeftRadius=radius3+'em';
    box.style.borderBottomRightRadius=radius4+'em';
  	this.clearPanel();
  	this.roundedRect();
  };
  
  this.setFocus = function()
  {
  	box.virtualInput.focus();
  };
  
  this.delFocus = function()
  {
  	box.virtualInput.blur();
  };
  
  this.setPosition = function( left, top)
  {
  	this.x = left;
  	this.y = top;
    box.style.left=left+'px';
    box.style.top=top+'px';
  };
  
  this.getObjPosition = function()
  {
  	var Pxy = new Object();
  	Pxy.x=this.x;
  	Pxy.y=this.y;
  	return Pxy;
  };
  
  this.setAbsoluteMode = function()
  {
  	box.style.position = 'absolute';
  };
  this.setRelativeMode = function()
  {
  	box.style.position = 'relative';
  };
  this.setText = function( x, y, text)
  {
    cb.ctx.fillText(text,x,y);
  };
  this.setCenterText = function(text)
  {
  	cb.ctx.shadowOffsetX = 0;
  	cb.ctx.shadowOffsetY = 0;
  	cb.ctx.shadowColor = '';
  	cb.ctx.shadowBlur = 0;
  	var x = box.width / 2;
  	var y = box.height / 2;
  	this.alignText( 'center');
  	this.vAlignText('middle');	
    cb.ctx.fillText(text,x,y);
  };
  this.alignText = function( align)
  {
  	cb.ctx.textAlign = align;
  };
  this.vAlignText = function( align)
  {
  	cb.ctx.textBaseline = align;
  };
  this.setFont = function(font, color)
  {
  	cb.ctx.fillStyle = color;
  	cb.ctx.font = font;
  };
  this.setFillGradient = function(x1,y1,x2,y2,arrColor)
  {
  	box.setGradient = true;
  	box.grad = cb.ctx.createLinearGradient(x1,y1,x2,y2);
    for(var i=0; i<arrColor.length; i++)
    {
      var v = i/(arrColor.length-1);		
      box.grad.addColorStop(v,arrColor[i]);	
    }
  	this.roundedRect();
  };
  this.setDimension = function( width, height)
  {
  	this.clearPanel();
  	box.width = width;
  	box.height = height;
  	box.style.width = width+'px';
  	box.style.height = height+'px';
  	box.style.lineHeight = 'normal';
  	cb.setDimension(width, height);
  	box.style.padding = '0px';
  	this.roundedRect();
  };
  this.setTransparency = function( transparency)
  {
  	this.clearPanel();
  	box.rgb.setTransparencyLevel(transparency);
    this.roundedRect();
  };
  this.setStroke = function()
  {
  	cb.ctx.stroke();
  };
  this.setShadow = function( width, color)
  {
  	var w1 = box.width+width;
  	var h1 = box.height+width;
  	cb.setDimension(w1, h1);
    cb.ctx.shadowOffsetX = width;
  	cb.ctx.shadowOffsetY = width;
  	cb.ctx.shadowColor = color;
  	cb.ctx.shadowBlur = 3;
  	this.roundedRect();
  };
  
  this.delShadow = function()
  {
  	var w1 = box.width;
  	var h1 = box.height;
  	cb.setDimension(w1, h1);
    cb.ctx.shadowOffsetX = 0;
  	cb.ctx.shadowOffsetY = 0;
  	this.roundedRect();
  };
  
  this.addParagraph = function(x, y, paragraph, color, family, size, style, width, align)
  {
  	var para = document.createElement('div');
  	para.innerHTML=paragraph;
  	para.style.position = 'absolute';
  	para.style.width = width + 'px';
  	para.style.left = x + 'px';
  	para.style.top = y + 'px';
  	var font = style+' '+size+'px '+family;
  	para.style.font = font;
  	para.style.color = color;
  	para.style.textAlign = align;
  	box.appendChild(para);
  };
}