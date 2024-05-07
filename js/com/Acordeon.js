Acordeon = function(w,hPanel, title)
{
   var contenedor = document.createElement('div'); 
   var marcoImg = document.createElement('div'); 
   var heightCanvas = 14;
   var cb = new CanvasBuilder(null, w, heightCanvas);
   var ctx = cb.getCanvasContext();
   var ta = document.createElement('textArea');
   var colorBar = 'rgba(100,100,100,0.7)';
   var colorText = 'rgba(0,0,0,1)';
   var bgText = 'rgba(255,255,255,1)';
   var colorTriangle = 'rgba(100,100,100,0.7)';
   var fontCnf = 'bold 10px helvetica';
   var colorPanel = 'rgba(100,50,10,0.8)';
   var bgBillBoard ='rgba(0,0,0,1)';
   var borderColorBillBoard = 'rgba(40,80,40,1)';
   var fontSizeBillBoard = '14px';
   var fontFamilyBillBoard = 'arial';
   var fontStyleBillBoard = 'bold';
   var textColorBillBoard = 'white';
   var at = new AcordeonAttrib();
   this.id = title;
   
  this.replaceAll = function(text, busca, reemplaza) {
  	while (text.toString().indexOf(busca) != -1) 
  		text = text.toString().replace(busca, reemplaza);
  	return text;
  };

   this.addJsonToBillBoard = function(jSON)
   {
      if(jSON)
      { 
        for(var i=0; i<jSON.data[0].length; i++) 
          ta.value+= this.replaceAll(jSON.data[0][i],'/n','\n') + '\n\n';  
      }
      else
        ta.value='';
   };
   
   this.setId = function(id)
   {
     this.id = id;  
   };
   
   if(at && attrib)
   {
     colorBar = at.getColorBar(attrib.getActualEnv());
     colorText = at.getColorText(attrib.getActualEnv());
     bgText = at.getBgText(attrib.getActualEnv());
     colorTriangle = at.getColorTriangle(attrib.getActualEnv());
     fontCnf = at.getFontCnf(attrib.getActualEnv());
     colorPanel = at.getColorPanel(attrib.getActualEnv());
     bgBillBoard =at.getBgBillBoard(attrib.getActualEnv());
     borderColorBillBoard = at.getBorderColorBillBoard(attrib.getActualEnv());
     fontSizeBillBoard = at.getFontSizeBillBoard(attrib.getActualEnv());
     fontFamilyBillBoard = at.getFontFamilyBillBoard(attrib.getActualEnv());
     fontStyleBillBoard = at.getFontStyleBillBoard(attrib.getActualEnv());
     textColorBillBoard = at.getTextColorBillBoard(attrib.getActualEnv());    
   };
   
   var panel = cb.getPanelCanvas();
   panel.style.zIndex=100000;
   var sts = 0;
   
   this.setBillBoard = function()
   {   
     ta.style.width=(w-42)+'px';
     ta.style.height= (hPanel-25)+'px';
     ta.style.backgroundColor = bgBillBoard;
     ta.style.borderColor = borderColorBillBoard;
     ta.style.fontSize = fontSizeBillBoard;
     ta.style.fontFamily = fontFamilyBillBoard;
     ta.style.fontStyle = fontStyleBillBoard;
     ta.style.color = textColorBillBoard;
     ta.style.borderStyle = 'solid';
     ta.style.borderWidth = '8px';
     ta.readOnly = true;
     ta.style.resize = 'none';  
     contenedor.appendChild(ta);
     ta.style.position = 'absolute';
     ta.style.left = '10px';
     ta.style.top = '9px'; 
   };
   
   this.setPositionBillBoard = function(x,y)
   {
     ta.style.position = 'absolute';
     ta.style.left = x+'px';
     ta.style.top = y+'px';  
   };
   
   this.setZIndex = function(zi)
   {
     panel.style.zIndex=zi; 
   };
   
   this.addMsgToBillBoard = function(msg)
   {
     ta.value+=msg+'\n';  
   };
   
   this.clearBillBoard = function(msg)
   {
     ta.value='';  
   };
   
   this.updateTitle = function(newTitle, newBgColor, newTextColor)
   {
   	 title = newTitle; 
     setBgTitle(newBgColor);
     setTitle(newTitle,newTextColor);
   };
   
   var initContenedor = function()
   {
     contenedor.style.backgroundColor=colorPanel;
     contenedor.style.position='absolute';
     contenedor.style.left='1px';
     contenedor.style.top='18px';
     contenedor.style.width  = (w - 10)+'px';
     contenedor.style.height = hPanel+'px'; 
     contenedor.style.display = 'none';
   };
   
   var initMarcoImg = function()
   {
     panel.appendChild(marcoImg);  
     marcoImg.style.position='absolute';
     marcoImg.style.left=(w-14)+'px';
     marcoImg.style.top='1px';
     marcoImg.style.width  = '14px';
     marcoImg.style.height = (2+heightCanvas)+'px'; 
     marcoImg.style.display = 'block';  
     marcoImg.style.backgroundColor = 'rgba(0,0,0,0)';
   };
   
   var showContenedor = function() 
   {
     contenedor.style.display='block';   
   };
   
   var hideContenedor = function() 
   {
     contenedor.style.display='none';   
   };
   
   var setTriangleDown = function()
   {
     ctx.clearRect(w-12,1,w,10);
     ctx.beginPath();
     ctx.fillStyle = colorTriangle;
     ctx.lineWidth=0.5;
     ctx.moveTo(w-12,1);
     ctx.lineTo(w,1);
     ctx.lineTo(w-6,10);
     ctx.lineTo(w-12,1);
     ctx.fill();
     ctx.closePath();  
   };
   
   var setTriangleUp = function()
   {
     ctx.clearRect(w-12,1,w,10);
     ctx.beginPath();
     ctx.fillStyle = colorTriangle;
     ctx.lineWidth=0.5;
     ctx.moveTo(w-6,1);
     ctx.lineTo(w,10);
     ctx.lineTo(w-12,10);
     ctx.lineTo(w-6,1);
     ctx.fill();
     ctx.closePath();  
   };
   
   var setBgTitle = function(bgColorTitle)
   {
   	 bgText = bgColorTitle;
   	 ctx.beginPath();
     ctx.fillStyle = bgColorTitle;
     var m = ctx.measureText(title).width;
     var x1 = (w-10)/2 - m/2 - m*0.1;
     var x2 = m + m*0.2;
     ctx.clearRect(x1 ,0,x2,heightCanvas);
     ctx.fillRect(x1 ,0,x2,heightCanvas);
     ctx.closePath();
   };
   
   var setTitle = function(textTitle, colorTextTitle)
   {
   	 colorText = colorTextTitle;
   	 ctx.beginPath();
     ctx.font = fontCnf;
     ctx.fillStyle = colorTextTitle;
     ctx.textAlign='center';
     ctx.fillText(textTitle,(w-10)/2, 11);
     ctx.closePath();
   };
   
   var create = function()
   {
     ctx.fillStyle = colorBar;
     ctx.fillRect(0,heightCanvas/2,w-10,1);     
     setTriangleDown();   
     setBgTitle(bgText);
     setTitle(title,colorText);
   };
   
   collapse = function(st)
   {
   	 if(st==0)
     {  
       cb.setDimension(w,hPanel); 
       panel.style.width=w+'px';
       panel.style.height=hPanel+'px';
       create();
       setTriangleUp();
       showContenedor();
       sts=1;
     }
     else
     {
       cb.setDimension(w,heightCanvas); 
       panel.style.width=w+'px';
       panel.style.height=heightCanvas+'px';
       create(); 
       hideContenedor();
       sts=0;
     }
   };
   
   marcoImg.onclick = function(e)
   {
     collapse(sts);     
   };
   
   this.expanding = function()
   {
   	 collapse(0);
   };
   
   this.contracting = function()
   {
   	 collapse(1);
   };
   
   this.addToBody = function()
   {
     cb.addToBody();  
   };
   
   this.setPosition = function(x,y)
   {
     panel.style.position = 'absolute';
     panel.style.left = x+'px';
     panel.style.top = y+'px';    
   };
   
   this.setColorPanel = function(red, green, blue, transparency)
   {
     panel.style.backgroundColor = 'rgba('+red+','+green+','+blue+','+transparency+')'; 
   };
   
   this.setPanelStyle = function(stl)
   {
   	 panel.style.borderWidth = '1px';
   	 panel.style.borderStyle = stl; 
   };
   
   this.addObject = function(obj, x, y)
   {
     contenedor.appendChild(obj);
     obj.style.position = 'absolute';
     obj.style.left = x+'px';
     obj.style.top = y+'px'; 
   };
   
   this.removeObject = function(obj)
   {
     contenedor.removeChild(obj);  
   };
   
   this.show = function()
   {
     panel.style.display = 'block';
   };
   
   this.hide = function()
   {
     panel.style.display = 'none';
   };
   
   this.getObject = function()
   {
     return panel;  
   };
   
   initContenedor();
   create();
   panel.appendChild(contenedor); 
   initMarcoImg(); 
   panel.style.position = 'absolute';
   panel.style.left = '1px';
   panel.style.top = '1px';   
};

