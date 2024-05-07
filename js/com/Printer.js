Printer = function()
{
	var ventimp = {};
	var posIcon = {x:0, y:0};
	var onMouseOverFunct = new Function('');
	var onMouseOutFunct = new Function('');
	this.nameComponent = 'printer'; 
	this.printThisPage = function(){
      window.print();
	};
	
	this.printString = function(str){
  		var ventimp = window.open('','_blank','');
  		ventimp.document.write(str);
  		ventimp.document.close();
  		ventimp.print();
  		ventimp.close();
	};
	
	this.addPrintMethod = function(container){
		  //container.print = function(){
		  //var restorepage = document.body.innerHTML;
	      //document.body.innerHTML = container.innerHTML;
	      //window.print();
	      //document.body.innerHTML = restorepage;
	   //};
	};
	
	this.printObjectContent = function(obj){
	  ventimp = window.open('','_blank','');
  	  ventimp.document.write( obj.innerHTML );
  	  ventimp.document.close();
	  ventimp.print();
  	  ventimp.close();
    };
	
	this.showInNewTab = function(obj){
	  ventimp = window.open('','_blank','');
  	  ventimp.document.write( obj.innerHTML );
  	  ventimp.print();
	};
	
	this.preview = function(content,w,h){
  		ventimp = window.open('','_blank','width='+w+',height='+h+'resizable=yes,scrollbars=yes,status=no');
	    ventimp.document.write(content);
		return ventimp;
	};
	
	this.createWindow = function(w,h){
	  ventimp = window.open('','_blank','width='+w+',height='+h+'resizable=yes,scrollbars=yes,status=no');
	  return ventimp;
	};
	
	this.addObjectToWindow = function(obj){
	  ventimp.document.body.appendChild(obj); 
	};
	
	this.setPositionIcon = function(x,y){
	   posIcon.x = x;
	   posIcon.y = y; 
	};
	
	this.previewWidthButton = function(content,w,h,iconX)    {
       if(!iconX) 
         iconX = 58;
       ventimp = window.open('','_blank','width='+w+',height='+h+'resizable=yes,scrollbars=yes,status=no');
       ventimp.document.write(content);
       var b = document.createElement('img');
       b.src='images/iconReporte.gif';
       b.id = 'bimp';
       b.style.position = 'absolute';
       b.style.left = posIcon.x + 'px';
       b.style.top  = posIcon.y + 'px';
       if(posIcon.x===0 && posIcon.y===0)
       {
         b.style.left = iconX+'px';
         b.style.top = '20px';
       }
       b.style.width = '40px';
       b.style.height = '40px';
       b.onclick = function(){b.style.display ='none'; ventimp.document.close(); ventimp.print(); ventimp.close();};
       b.onmouseover = function(){b.style.cursor = 'pointer'; onMouseOverFunct();};
       b.onmouseout = function(){b.style.cursor = 'defalut'; onMouseOutFunct();};
       ventimp.document.body.appendChild(b);
       return ventimp;
    };
    
    this.onMouseOver = function(extFunct){
      onMouseOverFunct = new Function(extFunct);
    };
    
    this.onMouseOut = function(extFunct){
      onMouseOutFunct = new Function(extFunct);
    };
    
	this.printPreview = function(){
		ventimp.document.close();
		ventimp.print();
	};
	
	this.closePreview = function(){
		ventimp.close();	
	};
};