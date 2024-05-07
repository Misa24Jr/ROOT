function PanelButton(w,h){
  var pb = new PanelBuilder(null,w,h);	
    
  var arrColor 			=  ['rgba(50,50,200,1)','rgba(10,10,80,1)'];
  var arrColorSelected 	=  ['rgba(200,200,20,1)','rgba(110,110,30,1)'];
                   
  var onMouseOverFunct = new Function('');
  var onMouseOutFunct = new Function('');
  var txtX = 0;
  var txtY = 0;
  
  var textButton="";
  var centerText=true;
  var fontProperty = 'bold 12px Verdana ';
  var fontColorProperty = "white";
  var fontColorPropertySelected = "yellow";
  var xGradient = 0;
  var yGradient = 0;
  var x2Gradient = w;
  var y2Gradient = h;
  
  var refreshContent = function(co){
  	if(co!=undefined)
  	  pb.setFont(fontProperty, co);
  	else
  	  pb.setFont(fontProperty, fontColorProperty);
  	if(textButton!=""){
  	  if(centerText)
  	    pb.setCenterText(textButton);
  	  else
  	    pb.setText(txtX,txtY,textButton);
  	}
  };
  
  var applyGrad = function(ac, co){
  	pb.setFillGradient(xGradient, yGradient, x2Gradient, y2Gradient,ac);
  	if(co!=undefined)
  	  refreshContent(co);
  	else
  	  refreshContent();
  };
    
  pb.getPanel().onmouseover=function(){
  	pb.setFocus();
  	onMouseOverFunct();
  	applyGrad(arrColorSelected, fontColorPropertySelected);
  }
  
  pb.getPanel().onmouseout=function(){
  	pb.delFocus();
  	onMouseOutFunct();
  	applyGrad(arrColor);
  }
  
  
  applyGrad(arrColor);
  pb.setRadius(8,8,8,8);
  pb.setAbsoluteMode();
  
  this.setRadius = function(r1,r2,r3,r4){
    pb.setRadius(r1,r2,r3,r4);
  }
  
  this.setOrientedGradient = function(x1, y1, x2, y2){
  	xGradient = x1;
  	yGradient = y1;
  	x2Gradient = x2;
  	y2Gradient = y2;
  	applyGrad(arrColor);
  };
  
  this.show = function(){
  	pb.show();
  };
  
  this.hide = function(){
  	pb.hide();
  };
  
  this.setPosition = function(x,y){
  	pb.setPosition(x,y); 
  };
  
  this.setBgColor = function(r,g,b,t)
  {
  	arrColor.splice(0,arrColor.length);
  	arrColor[arrColor.length] = 'rgba('+r+','+g+','+b+','+t+')';
  	arrColor[arrColor.length] = 'rgba('+r+','+g+','+b+','+t+')';
  	applyGrad(arrColor);
  };
  
  this.setFont = function(fontProp, color, colorSelected){
  	fontProperty = fontProp;
  	fontColorProperty = color;
  	fontColorPropertySelected = colorSelected;
  	pb.setFont(fontProperty,fontColorProperty);
  };
  
  this.setCenterText = function(txt){
  	textButton=txt;
  	centerText=true;
  	pb.setCenterText(textButton);
  };
  
  this.setText = function( x, y, txt)
  {
  	txtX = x;
  	txtY = y;
  	textButton=txt;
  	centerText=false;
    pb.setText(x,y,textButton);
  };
  
  this.getRGBColor = function(r,g,b,t){
  	return 'rgba('+r+','+g+','+b+','+t+')';
  };
  
  this.cleanGradient = function(){
  	arrColor.splice(0,arrColor.length);
  };
  
  this.cleanGradientSelected = function(){
  	arrColorSelected.splice(0,arrColorSelected.length);
  };
  
  this.addToGradient = function(r,g,b,t){
  	arrColor[arrColor.length] = 'rgba('+r+','+g+','+b+','+t+')';
  };
  
  this.addToGradientSelected = function(r,g,b,t){
  	arrColorSelected[arrColorSelected.length] = 'rgba('+r+','+g+','+b+','+t+')';
  };
  
  this.getPanelBuilder = function(){
  	return pb;
  };
  
  this.setZIndex = function(zi){
  	pb.getPanel().style.zIndex= zi;
  };
  
  this.getPanel = function(){
  	return pb.getPanel();
  };
  
  this.addToBody = function(){
  	pb.addToBody();
  };
  
  this.applyGradient = function(){
  	applyGrad(arrColor);
  };
  
  this.onMouseOver = function(funct){
  	onMouseOverFunct = new Function(funct);
  };
  
  this.onMouseOut = function(funct){
  	onMouseOutFunct = new Function(funct);
  };
  
  this.onClick = function(funct){
  	pb.onClick(funct);
  };
  
  this.onDblClick = function(funct){
  	pb.onDblClick(funct);
  };
  
  this.onMouseDown = function( funct)
  {
  	pb.onMouseDown(funct); 
  };
  
  this.onMouseUp = function( funct) 
  { 
  	pb.onMouseUp(funct);
  };
  
  this.onMouseMove = function( funct) 
  { 
  	pb.onMouseMove(funct);
  };
  
  this.onKeyPress = function( funct) 
  { 
  	pb.onKeyPress(funct);
  };
  
  this.onKeyDown = function( funct) 
  { 
  	pb.onKeyDown(funct);
  };
  
  this.onKeyup = function( funct) 
  { 
  	pb.onKeyup(funct);
  };
  
  this.onFocus = function( funct) 
  { 
  	pb.onFocus(funct);
  };
  
  this.onBlur = function( funct) 
  { 
  	pb.onBlur(funct);
  };
  
  this.addObj = function(obj,x,y)
  {  	
  	pb.addObj(obj,x,y);
  };
  
  this.getImg = function(pathImg){
  	var im = document.createElement('img');
  	im.src = pathImg;
  	return im;
  };
  
  this.addImg = function(img,x,y,width,height)
  {  	
  	img.style.width = width+"px";
  	img.style.height = height+"px";
  	pb.addObj(img,x,y);
  };
    
  this.setDimension = function(width, height)
  {
  	pb.setDimension(width, height);
  	refreshContent();
  };    
};
