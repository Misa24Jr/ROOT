var checkBox= 
{
   objects : new Array,
   ids : new Array,   
   pathImg :'images/',
   imgCheckOn :'aceptar.png',
   imgCheckOff :'cancel.png',
  bgImgPath :"images/bg/",
  sizeIcon :10,
addPropertyMethod : function(id)
{
  checkBox.objects[id].getFieldFind = function() {
	  return checkBox.getFieldFind(id);
  };
  
  checkBox.objects[id].setFieldFind = function(fieldFind) {
	  checkBox.setFieldFind(id, fieldFind);
  };

  checkBox.objects[id].addToBody = function()
  {
    checkBox.addToBody(id);
  };
  
  checkBox.objects[id].checked = function(){
  	checkBox.checked(id);
  };
  
  checkBox.objects[id].unChecked = function(){
  	checkBox.unChecked(id);
  };
  
  checkBox.objects[id].getObject = function(){
  	return checkBox.getObject(id);
  };
  
  checkBox.objects[id].hide = function(){
  	checkBox.hide(id);
  };
  
  checkBox.objects[id].show = function(){
  	checkBox.show(id);
  };
  
  checkBox.objects[id].onMouseDown = function(func){
  	checkBox.onMouseDown(id,func);
  };
  
  checkBox.objects[id].onMouseMove = function(func){
  	checkBox.onMouseMove(id,func);
  };
  
  checkBox.objects[id].onMouseUp = function(func){
  	checkBox.onMouseUp(id,func);
  };
  
  checkBox.objects[id].onMouseOver = function(func){
  	checkBox.onMouseOver(id,func);
  };
  
  checkBox.objects[id].onMouseOut = function(func){
  	checkBox.onMouseOut(id,func);
  };
  
  checkBox.objects[id].setPosition = function(x1,y1){
  	checkBox.setPosition(id,x1,y1);
  };
  
  checkBox.objects[id].setRelativePosition = function(){
  	checkBox.setRelativePosition(id);
  };
  
  checkBox.objects[id].setBgColor = function(bgColor){
  	checkBox.setBgColor(id,bgColor);
  };
  
  checkBox.objects[id].setBorderColor = function(borderColor){
  	checkBox.setBorderColor(id,borderColor);
  };
  
  checkBox.objects[id].setBorderWidth = function(value){
  	checkBox.setBorderWidth(id,value);
  };
  
  checkBox.objects[id].setObjAttrib = function(objAttr,env){
  	checkBox.setObjAttrib(id,objAttr,env);
  };
  
  checkBox.objects[id].setObjAttribToAll = function(objAttrib,env){
  	checkBox.setObjAttribToAll(objAttrib,env);
  };  
  
  checkBox.objects[id].setBgImg = function(bgImg){
  	checkBox.setBgImg(id, bgImg);
  };
  
  checkBox.objects[id].setLoadBGImg = function(activeLoad){
  	checkBox.setLoadBGImg(id, activeLoad);
  };
  
  checkBox.objects[id].setLoadBGImgAll = function(activeLoad){
  	checkBox.setLoadBGImgAll(activeLoad);
  };
  
  checkBox.objects[id].getChecked = function(){
  	return checkBox.getChecked(id);
  };
  
  checkBox.objects[id].getCaption = function(){
  	return checkBox.getCaption(id);
  }; 
  
  checkBox.objects[id].setFontCaption = function(family,size,color){
  	checkBox.setFontCaption(id,family,size,color);
  };
  
  checkBox.objects[id].setMarginLeft = function(marginL){
  	checkBox.setMarginLeft(id,marginL);
  };
 
  checkBox.objects[id].setMarginRight = function(marginR){
  	checkBox.setMarginRight(id,marginR);
  };
  
  checkBox.objects[id].setMarginTopBottom = function(marginTB){
  	checkBox.setMarginTopBottom(id,marginTB);
  };
  
  checkBox.objects[id].setMarginTopBottomToAll = function(marginTB){
  	checkBox.setMarginTopBottomToAll(marginTB);
  };
  
  checkBox.objects[id].setMarginLeftToAll = function(marginL){
  	checkBox.setMarginLeftToAll(marginL);
  };
  
  checkBox.objects[id].setMarginRightToAll = function(marginR){
  	checkBox.setMarginRightToAll(marginR);
  };

  checkBox.objects[id].setChecked = function(booChk) {
	  checkBox.setChecked(id, booChk);  
  };
  
  checkBox.objects[id].getText = function() {
    return checkBox.getText(id);
  };
  
  checkBox.objects[id].onClick = function(func){
  	checkBox.onMouseClick(id, func);
  };
  
  checkBox.objects[id].setDimension = function(w, h){
   	checkBox.setDimension(id, w, h); 
  };
  
  checkBox.objects[id].setMarginCaption = function(mc){
   	checkBox.setMarginCaption(id, mc); 
  };
},

   addToBody : function(id)
   {
     document.body.appendChild(this.objects[id]);
   },

   create : function(id,caption,checked)  
   {
   	 this.ids[this.ids.length]=id;
   	 this.objects[id]= document.createElement('div');
   	 this.objects[id].nameComponent = 'checkbox';
		 this.objects[id].loadBGImg = true;
		 this.objects[id].dataType = 'boolean';
		 this.objects[id].fontSizeCaption = 12;
		 this.objects[id].isChecked = checked;
		 this.objects[id].tableCtn = document.createElement('table');
	    this.objects[id].tableCtn.setAttribute("border","0");
	    this.objects[id].tableCtn.setAttribute("cellPadding","0");
	    this.objects[id].tableCtn.setAttribute("cellSpacing","0");
		 this.objects[id].tableCtn.insertRow(0);
		 this.objects[id].tableCtn.rows[0].insertCell(0); 
		 this.objects[id].tableCtn.rows[0].insertCell(1); 
		 this.objects[id].tableCtn.rows[0].insertCell(2); 
		 this.objects[id].tableCtn.rows[0].insertCell(3); 
		 this.objects[id].tableCtn.rows[0].insertCell(4); 
		 this.objects[id].tableCtn.rows[0].cells[2].width = '7px'; 
		 this.objects[id].tableCtn.rows[0].cells[3].innerHTML = caption;
		 this.objects[id].divImg = document.createElement('div');
		 this.objects[id].divImg.style.width  = (this.sizeIcon)+'px';
		 this.objects[id].divImg.style.height = (this.sizeIcon)+'px';
		 this.objects[id].divImg.style.lineHeight = (this.sizeIcon+3)+'px';
		 this.objects[id].divImg.vAlign = 'middle';	
		 this.objects[id].divImg.align = 'center'; 
		 this.objects[id].divImg.style.borderWidth = '1px';
		 this.objects[id].divImg.align = 'center';
		 this.objects[id].divImg.img = document.createElement('img');
		 this.objects[id].divImg.img.style.marginBottom = '4px';
		 this.objects[id].divImg.img.style.width  = (this.sizeIcon-3)+'px';
		 this.objects[id].divImg.img.style.height = (this.sizeIcon-3)+'px';
		 this.objects[id].divImg.appendChild(this.objects[id].divImg.img);
		 this.objects[id].tableCtn.rows[0].cells[1].appendChild(this.objects[id].divImg); 
		 this.objects[id].fieldFind = false;
		 this.objects[id].divImg.onMouseClick = new Function('');
		 
		 if (checked) 
		 {
		 	this.checked(id);
		 }
		 else 
		 {
		 	this.unChecked(id);
		 }     
		 this.objects[id].divImg.onclick = function(e)
		 {
		 	if (checkBox.objects[id].isChecked)
			{			
			  checkBox.unChecked(id);
			}
			else
			{
			  checkBox.checked(id);
			}
			checkBox.objects[id].divImg.onMouseClick();
		 }
		 this.objects[id].tableCtn.rows[0].cells[3].onclick = function(e)
		 {
		 	if (checkBox.objects[id].isChecked)
			{			
			  checkBox.unChecked(id);
			}
			else
			{
			  checkBox.checked(id);
			}
			checkBox.objects[id].divImg.onMouseClick();
		 }
		 this.objects[id].appendChild(this.objects[id].tableCtn);
		 this.addPropertyMethod(id);
		 this.show(id);
		 if(attrib)
	      this.setObjAttrib(id,attrib,attrib.getActualEnv());
		 return this.objects[id];  
   },
   
   setDimension : function(id, w, h){
   	 this.objects[id].divImg.img.style.width  = (w-2)+'px';
		 this.objects[id].divImg.img.style.height = (h-2)+'px';
		 this.objects[id].divImg.style.width  = w+'px';
		 this.objects[id].divImg.style.height = h+'px';
   },
   
   checked : function(id)
   {
   	this.objects[id].divImg.style.borderStyle = 'inset';
	  	var ruta = this.pathImg+this.imgCheckOn;
	  	this.objects[id].divImg.img.src = ruta;
	  	this.objects[id].isChecked = true;
   },
   unChecked : function(id)
   {
   	this.objects[id].divImg.style.borderStyle = 'outset';
	  	var ruta = this.pathImg+this.imgCheckOff;
	  	this.objects[id].divImg.img.src = ruta;
	  	this.objects[id].isChecked = false;
   },
   setChecked : function(id, booChk) {
	   if (booChk == 'true') 
		   this.checked(id);
	   else 
		   this.unChecked(id);
   },
   
   getObject : function(id)
   {
     return this.objects[id];
   },
   getCaption : function(id)
   {
     return this.objects[id].tableCtn.rows[0].cells[3].innerHTML;
   },
   getChecked : function(id)
   {
     return this.objects[id].isChecked;
   },
   hide : function(id)
   {
     this.objects[id].style.display='none';
   },
   onMouseDown : function(id,func)
   {
     this.objects[id].divImg.onmousedown=new Function(func); 
   },
   onMouseClick : function(id,func)
   {
     this.objects[id].divImg.onMouseClick = new Function(func); 
   },
   onMouseMove : function(id,func)
   {
     this.objects[id].divImg.onmousemove=new Function(func); 
   },
   onMouseOut : function(id,func)
   {
     this.objects[id].divImg.onmouseout=new Function(func); 
   },
   onMouseOver : function(id,func)
   {
     this.objects[id].divImg.onmouseover=new Function(func); 
   },
   onMouseUp : function(id,func)
   {
     this.objects[id].divImg.onmouseup=new Function(func); 
   },
   show : function(id)
   {
     this.objects[id].style.display='block';
   },
   setPosition : function(id,x1,y1)
   {
     this.objects[id].style.position='absolute';
     this.objects[id].style.left=x1+'px'; 
     this.objects[id].style.top=y1+'px';
   }, 
   setRelativePosition : function(id)
   {
     this.objects[id].style.position='relative';  
   },
   setBgColor : function(id,bgColor)
   {
     this.objects[id].divImg.style.backgroundColor= bgColor; 
   },
   setFontCaption : function(id,family,size,color)
   {
   	 this.objects[id].fontSizeCaption = size;
     this.objects[id].tableCtn.rows[0].cells[3].style.fontFamily = family;
	 this.objects[id].tableCtn.rows[0].cells[3].style.fontSize = size+'px';
	 this.objects[id].tableCtn.rows[0].cells[3].style.color = color;
   },
   setBorderColor : function(id,borderColor)
   {
     this.objects[id].divImg.style.borderColor= borderColor; 
   },
   setBorderWidth : function(id,value)
   {
     this.objects[id].divImg.style.borderWidth= value+'px'; 
   },  
   setMarginCaption : function(id,mc)
   {
	  this.objects[id].tableCtn.rows[0].cells[2].width = mc+'px';
   },   
   setMarginLeft : function(id,marginL)
   {
	 this.objects[id].tableCtn.rows[0].cells[0].width = marginL+'px';
   },
   setMarginLeftToAll : function(marginL)
   {
	 for (i = 0; i < this.ids.length; i++) 
	 {
	 	this.setMarginLeft(this.ids[i],marginL);
	 }
   },
   setMarginRightToAll : function(marginR)
   {
	 for (i = 0; i < this.ids.length; i++) 
	 {
	 	this.setMarginRight(this.ids[i],marginR);
	 }
   },   
   setMarginRight : function(id,marginR)
   {
	 this.objects[id].tableCtn.rows[0].cells[4].width = marginR+'px';
   },
   setMarginTopBottom : function(id,marginTB)
   {
     var tam = parseInt(this.objects[id].fontSizeCaption,10);
	 var mtb = parseInt(marginTB,10);
   	 this.objects[id].tableCtn.rows[0].style.height = (tam+mtb)+'px';
   },  
   setMarginTopBottomToAll : function(marginTB)
   {
     for (i = 0; i < this.ids.length; i++) 
	 {
	 	this.setMarginTopBottom(this.ids[i],marginTB);
	 }	
   },  
   setObjAttrib : function(id,objAttr,env)
   {
   	 this.objects[id].loadBGImg = objAttr.getLoadBGImg();
	 this.setFontCaption(id,objAttr.Font.editorCaption[env],objAttr.Size.textCaption[env],objAttr.Color.textCaption[env]);
	 this.setMarginTopBottom(id,6);
	 if(this.objects[id].loadBGImg)
	 {	
	   this.setBgImg(id, objAttr.BgImg.bgButton[env]);
	   this.imgCheckOn = objAttr.BgImg.imgCheckOn[env];
	   this.imgCheckOff = objAttr.BgImg.imgCheckOff[env];
	   if (checkBox.objects[id].isChecked) 
	   {
	  	 this.checked(id);
	   }
	   else 
	   {
 	     this.unChecked(id);
	   }
	 }
   },
  setObjAttribToAll : function(objAttrib,env)
  {
    for(i=0;i<this.ids.length;i++)
    {
      this.setObjAttrib(this.ids[i],attrib,env);
    }	
  },   
  setBgImg : function(id, bgImg)
  {
  	this.objects[id].divImg.style.backgroundImage="url("+this.bgImgPath+bgImg+")";
  },	
  
  setLoadBGImg : function(id, activeLoad)
  {
  	this.objects[id].loadBGImg = activeLoad;
  },
  
  setLoadBGImgAll : function(activeLoad)
  {
  	for(var i=0;i<this.ids.length;i++)
    {
      this.setLoadBGImg(this.ids[i],activeLoad);
    }
  },
  
  getText : function(id) 
  {
	return this.getChecked(id);
  },
  
  getFieldFind : function(id) {
	  return this.objects[id].fieldFind;
  },
  
  setFieldFind : function(id, fieldFind) {
       this.objects[id].fieldFind = fieldFind;
     },
};