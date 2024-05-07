var radio= 
{
   objects : new Array,
   ids : new Array,   
   pathImg :'images/',
   imgCheckOn :'radioOn.png',
   imgCheckOff :'radioOff.png',
  bgImgPath :"images/bg/",
  sizeIcon :16,
  colorSelected :'#aaaa00',
  colorText :'orange',
addPropertyMethod : function(id)
{
  radio.objects[id].addToBody = function()
  {
    radio.addToBody(id);
  }
  
  radio.objects[id].checked = function()
  {
  	radio.checked(id);
  }
  
  radio.objects[id].unChecked = function()
  {
  	radio.unChecked(id);
  }
  
  radio.objects[id].getObject = function()
  {
  	return radio.getObject(id);
  }
  
  radio.objects[id].hide = function()
  {
  	radio.hide(id);
  }
  
  radio.objects[id].show = function()
  {
  	radio.show(id);
  }
  
  radio.objects[id].onMouseDown = function(func)
  {
  	radio.onMouseDown(id,func);
  }
  
  radio.objects[id].onMouseMove = function(func)
  {
  	radio.onMouseMove(id,func);
  }
  
  radio.objects[id].onMouseUp = function(func)
  {
  	radio.onMouseUp(id,func);
  }
  
  radio.objects[id].onMouseOver = function(func)
  {
  	radio.onMouseOver(id,func);
  }
  
  radio.objects[id].onMouseOut = function(func)
  {
  	radio.onMouseOut(id,func);
  }
  
  radio.objects[id].setPosition = function(x1,y1)
  {
  	radio.setPosition(id,x1,y1)
  }
  
  radio.objects[id].setRelativePosition = function()
  {
  	radio.setRelativePosition(id);
  }
  
  radio.objects[id].setBgColor = function(bgColor)
  {
  	radio.setBgColor(id,bgColor);
  }
  
  radio.objects[id].setBorderColor = function(borderColor)
  {
  	radio.setBorderColor(id,borderColor);
  }
  
  radio.objects[id].setBorderWidth = function(value)
  {
  	radio.setBorderWidth(id,value);
  }
  
  radio.objects[id].setObjAttrib = function(objAttr,env)
  {
  	radio.setObjAttrib(id,objAttr,env);
  }
  
  radio.objects[id].setObjAttribToAll = function(objAttrib,env)
  {
  	radio.setObjAttribToAll(objAttrib,env);
  }  
  
  radio.objects[id].setBgImg = function(bgImg)
  {
  	radio.setBgImg(id, bgImg);
  }
  
  radio.objects[id].setLoadBGImg = function(activeLoad)
  {
  	radio.setLoadBGImg(id, activeLoad);
  }
  
  radio.objects[id].setLoadBGImgAll = function(activeLoad)
  {
  	radio.setLoadBGImgAll(activeLoad);
  }
  
  radio.objects[id].getChecked = function()
  {
  	return radio.getChecked(id);
  }
  
  radio.objects[id].getCaption = function()
  {
  	return radio.getCaption(id);
  }
  radio.objects[id].setFontCaption = function(family,size,color)
  {
  	radio.setFontCaption(id,family,size,color);
  }
  radio.objects[id].setMarginLeft = function(marginL)
  {
  	radio.setMarginLeft(id,marginL);
  }
  radio.objects[id].setMarginRight = function(marginR)
  {
  	radio.setMarginRight(id,marginR);
  }
  radio.objects[id].setMarginTopBottom = function(marginTB)
  {
  	radio.setMarginTopBottom(id,marginTB);
  }
  radio.objects[id].setMarginTopBottomToAll = function(marginTB)
  {
  	radio.setMarginTopBottomToAll(marginTB);
  }
  radio.objects[id].setMarginLeftToAll = function(marginL)
  {
  	radio.setMarginLeftToAll(marginL);
  }
  radio.objects[id].setMarginRightToAll = function(marginR)
  {
  	radio.setMarginRightToAll(marginR);
  }
},
   addToBody : function(id)
   {
     document.body.appendChild(this.objects[id]);
   },
   create : function(id,caption,checked,group)  
   {
   	 this.ids[this.ids.length]=id;
   	 this.objects[id]= document.createElement('div');
   	 this.objects[id].nameComponent = 'radio';
	 this.objects[id].group = group;
	 this.objects[id].loadBGImg = true;
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
	 this.objects[id].divImg.align = 'center';
	 this.objects[id].divImg.img = document.createElement('img');
	 this.objects[id].divImg.img.style.marginBottom = '4px';
	 this.objects[id].divImg.img.style.width  = (this.sizeIcon)+'px';
	 this.objects[id].divImg.img.style.height = (this.sizeIcon)+'px';
	 this.objects[id].divImg.appendChild(this.objects[id].divImg.img);
	 this.objects[id].tableCtn.rows[0].cells[1].appendChild(this.objects[id].divImg); 
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
		radio.checked(id);
	 }
	 this.objects[id].tableCtn.rows[0].cells[3].onclick = function(e)
	 {
	 	radio.checked(id);
	 }
	 this.objects[id].appendChild(this.objects[id].tableCtn);
	 this.addPropertyMethod(id);
	 this.show(id);
	 if(attrib)
       this.setObjAttrib(id,attrib,attrib.getActualEnv());
	 return this.objects[id];  
   },
   checked : function(id)
   {
   	  var grp = this.objects[id].group;
   	  for(i=0;i<this.ids.length;i++)
      {
	  	if(this.objects[this.ids[i]].group == grp)
		{
		  this.unChecked(this.ids[i]);	
		}
	  }
	  var ruta = this.pathImg+this.imgCheckOn;
	  this.objects[id].divImg.img.src = ruta;
	  this.objects[id].isChecked = true;
	  this.objects[id].tableCtn.rows[0].cells[3].style.color = this.colorSelected;  
   },
   unChecked : function(id)
   {
	  var ruta = this.pathImg+this.imgCheckOff;
	  this.objects[id].divImg.img.src = ruta;
	  this.objects[id].isChecked = false;
	  this.objects[id].tableCtn.rows[0].cells[3].style.color = this.colorText;
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
	 this.colorSelected = objAttr.Color.textSelectedRadio[env];
	 this.colorText = objAttr.Color.textCaption[env];
	 if(this.objects[id].loadBGImg)
	 {	
	   this.setBgImg(id, objAttr.BgImg.bgRadio[env]);
	   this.imgCheckOn = objAttr.BgImg.imgRadioOn[env];
	   this.imgCheckOff = objAttr.BgImg.imgRadioOff[env];
	   if (radio.objects[id].isChecked) 
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
  	var i=0;
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
  	for(i=0;i<this.ids.length;i++)
    {
      this.setLoadBGImg(this.ids[i],activeLoad);
    }
  }
}