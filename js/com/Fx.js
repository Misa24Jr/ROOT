function Fx(){
  var e = new Object();
  var fxActive = false;
    
  function setOp(obj, value) {
    obj.style.opacity = value/100;
    obj.style.MozOpacity = value/100;
    obj.style.KhtmlOpacity = value/100;
    obj.style.filter = 'alpha(opacity=' + value+ ')';
    obj.style.zoom=1;//necesario para Explorer
  };
  
  function opFx(){
    for (var c=0 ; c < 100; c++) 
      (function(c){
         setTimeout(function(){setOp(e,c);} , 6*c);
     })(c);
  };
  
  this.blinkElement = function(element, intensity, time){
    element.style.position = 'absolute';
    flat = true;
    counter=0;    
    function blinking(){
      if(flat){
        element.style.display = 'none';
        flat = false;
      }
      else{
        element.style.display = 'block';
        flat = true;
      }
      counter+=intensity;
      if(counter>=time*1000){
        clearInterval(si);
        element.style.display = 'block';
      }
    }
    var si = setInterval(blinking,intensity);    
  };
  
  this.trembleElement = function(element, intensity, time, x,y){
    if(!x)
      x=0;
    if(!y)
      y=0;
    element.style.position = 'absolute';
    flat = true;
    counter=0;    
    function mover(){
      if(flat){
        element.style.left = x+3+'px';
        element.style.top = y+3+'px';
        flat = false;
      }
      else{
        element.style.left = x+'px';
        element.style.top = y+'px';
        flat = true;
      }
      counter+=intensity;
      if(counter>=time*1000){
        clearInterval(si);
        element.style.left = x+'px';
        //element.style.top = '0px';
      }
    }
    var si = setInterval(mover,intensity);    
  };
  
  this.activeFx = function(){
  	return fxActive;
  };
    
  this.setHTMLElement = function(element){
  	e = element;
  };
  
  this.sliderFx = function (widthElement, timeDelay, orientation){
     if(!fxActive){
	   fxActive=true;
	   if(i)
	     clearInterval(i);	  
	   e.style.width = '0px';
	   e.style.left = widthElement + 'px';
	   var counter = 0;
	   function stop(){	
	     clearInterval(i);	
	     fxActive=false;
	   };
	   var i = setInterval(function mover(){
	   	counter += 40;
	   	if(counter > widthElement){
	   	  e.style.width = widthElement + 'px';
	   	  e.style.left = '2px';
	   	  stop();
	   	}
	   	else{     	  
	   	  e.style.width =  counter + 'px';	
	   	  if(orientation==='izq')
	   	    e.style.left =  widthElement - counter + 'px';  
	   	  else
	   	    e.style.left =  -widthElement + counter + 'px';
	   	}
	   }, timeDelay);  	
     }
  };
  
  this.opacityFx = function (){
    opFx();
  }; 
}
