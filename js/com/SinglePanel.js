var SinglePanel = 
{
   objects : new Array,
   ids : new Array,   
   idActual :'',
  bgImgPath :"images/bg/",
addPropertyMethod : function(id)
{
  SinglePanel.objects[id].functionOnMouseMove = function(funct)
  {
    SinglePanel.functionOnMouseMove(id,funct);
  }
  SinglePanel.objects[id].addToBody  =  function()
  {
    SinglePanel.addToBody(id);
  }
  SinglePanel.objects[id].addObjToPanel  =  function(obj)
  {
    SinglePanel.addObjToPanel(id,obj);
  }
  SinglePanel.objects[id].addText  =  function(text)
  {
    SinglePanel.addText(id,text);
  }
  SinglePanel.objects[id].initEventsPanel  =  function()
  {
    SinglePanel.initEventsPanel(id);
  }
  SinglePanel.objects[id].getObject  =  function()
  {
    return SinglePanel.getObject(id);
  }
  SinglePanel.objects[id].getX1  =  function()
  {
    return SinglePanel.getX1(id);
  }
  SinglePanel.objects[id].getX2  =  function()
  {
    return SinglePanel.getX2(id);
  }
  SinglePanel.objects[id].getY1  =  function()
  {
    return SinglePanel.getY1(id);
  }
  SinglePanel.objects[id].getY2  =  function()
  {
    return SinglePanel.getY2(id);
  }
  SinglePanel.objects[id].getMouseXY  =  function(e)
  {
    SinglePanel.getMouseXY(e);
  }
  SinglePanel.objects[id].getMouseX  =  function()
  {
    return SinglePanel.getMouseX(id);
  }
  SinglePanel.objects[id].getMouseY  =  function()
  {
    return SinglePanel.getMouseY(id);
  }
  SinglePanel.objects[id].hide  =  function()
  {
    SinglePanel.hide(id);
  }
  SinglePanel.objects[id].moveX  =  function(inc)
  {
    SinglePanel.moveX(id,inc);
  }
  SinglePanel.objects[id].moveY  =  function(inc)
  {
    SinglePanel.moveY(id,inc);
  }
  SinglePanel.objects[id].moveXY  =  function(incX,incY)
  {
    SinglePanel.moveXY(id,incX,incY);
  }
  SinglePanel.objects[id].onClick  =  function(func)
  {
    SinglePanel.onClick(id,func);
  }
  SinglePanel.objects[id].onChange  =  function(func)
  {
    SinglePanel.onChange(id,func);
  }
  SinglePanel.objects[id].onBlur  =  function(func)
  {
    SinglePanel.onBlur(id,func);
  }
  SinglePanel.objects[id].onDblClick  =  function(func)
  {
    SinglePanel.onDblClick(id,func);
  }
  SinglePanel.objects[id].onFocus  =  function(func)
  {
    SinglePanel.onFocus(id,func);
  }
  SinglePanel.objects[id].onKeyDown  =  function(func)
  {
    SinglePanel.onKeyDown(id,func);
  }
  SinglePanel.objects[id].onKeyPress  =  function(func)
  {
    SinglePanel.onKeyPress(id,func);
  }
  SinglePanel.objects[id].onKeyUp  =  function(func)
  {
    SinglePanel.onKeyUp(id,func);
  }
  SinglePanel.objects[id].onMouseDown  =  function(func)
  {
    SinglePanel.onMouseDown(id,func);
  }
  SinglePanel.objects[id].onMouseMove  =  function(func)
  {
    SinglePanel.onMouseMove(id,func);
  }
  SinglePanel.objects[id].onMouseOut  =  function(func)
  {
    SinglePanel.onMouseOut(id,func);
  }
  SinglePanel.objects[id].onMouseOver  =  function(func)
  {
    SinglePanel.onMouseOver(id,func);
  }
  SinglePanel.objects[id].onMouseUp  =  function(func)
  {
    SinglePanel.onMouseUp(id,func);
  }
  SinglePanel.objects[id].show  =  function()
  {
    SinglePanel.show(id);
  }
  SinglePanel.objects[id].setDimension  =  function(width,height)
  {
    SinglePanel.setDimension(id,width,height);
  }
  SinglePanel.objects[id].setAbsolutePosition  =  function(x1,y1,x2,y2)
  {
    SinglePanel.setAbsolutePosition(id,x1,y1,x2,y2);
  }
  SinglePanel.objects[id].setPositionX  =  function(x)
  {
    SinglePanel.setPositionX(id,x);
  }
  SinglePanel.objects[id].setPositionY  =  function(y)
  {
    SinglePanel.setPositionY(id,y);
  }
  SinglePanel.objects[id].setPositionXY  =  function(x1,y1)
  {
    SinglePanel.setPositionXY(id,x1,y1);
  }
  SinglePanel.objects[id].setRelativePosition  =  function()
  {
    SinglePanel.setRelativePosition(id);
  }
  SinglePanel.objects[id].setBgColor  =  function(bgColor)
  {
    SinglePanel.setBgColor(id,bgColor);
  }
  SinglePanel.objects[id].setBorderColor  =  function(borderColor)
  {
    SinglePanel.setBorderColor(id,borderColor);
  }
  SinglePanel.objects[id].setBorderWidth  =  function(value)
  {
    SinglePanel.setBorderWidth(id,value);
  }
	SinglePanel.objects[id].setInternalMargin  =  function(value)
  {
    SinglePanel.setInternalMargin(id,value);
  }
  SinglePanel.objects[id].setPanelStyle  =  function(value)
  {
    SinglePanel.setPanelStyle(id,value);
  }
  SinglePanel.objects[id].setAttributes  =  function(typesAttribs,valuesAttribs)
  {
    SinglePanel.setAttributes(id,typesAttribs,valuesAttribs);
  }
  SinglePanel.objects[id].setClassName  =  function(extClass)
  {
    SinglePanel.setClassName(id,extClass);
  }
  SinglePanel.objects[id].setObjAttrib  =  function(objAttr,env)
  {
    SinglePanel.setObjAttrib(id,objAttr,env);
  }
  SinglePanel.objects[id].setObjAttribToAll  =  function(objAttrib,env)
  {
    SinglePanel.setObjAttribToAll(objAttrib,env);
  }
  SinglePanel.objects[id].setEvent  =  function(e,indexEvent)
  {
    SinglePanel.setEvent(id,e,indexEvent);
  }
  SinglePanel.objects[id].setLoadBGImg = function(activeLoad)
  {
	SinglePanel.setLoadBGImg(id, activeLoad);
  }
  SinglePanel.objects[id].setLoadBGImgAll = function(activeLoad)
  {
	SinglePanel.setLoadBGImgAll(activeLoad);
  }
  SinglePanel.objects[id].setBgBodyImg = function(bgImg)
  {
  	SinglePanel.setBgBodyImg(id, bgImg);
  }
},
   functionOnMouseMove : function(id,funct)
   {
     this.objects[id].fomm = new Function(funct);
   },
   addToBody : function(id)
   {
     document.body.appendChild(this.objects[id]);
   },
   addObjToPanel : function(id,obj)
   {
     this.objects[id].appendChild(obj);
   },
   addText : function(id,text)
   {
     this.objects[id].innerHTML += text;  
   },
   create : function(id)  
   {
     this.objects[id]=document.createElement("DIV");
     this.objects[id].nameComponent = 'SinglePanel';
     this.objects[id].style.borderRadius='1em';
	 this.objects[id].loadBGImg = false;
	 this.ids[this.ids.length] = id;
     this.objects[id].id=id;
     this.objects[id].x1=0;
     this.objects[id].x2=0;
     this.objects[id].y1=0;
     this.objects[id].y2=0;
     this.objects[id].mouseX=0;
     this.objects[id].mouseY=0;
     this.hide(id);
     this.idActual=id;
     this.objects[id].fomm = new Function(""); 
	 this.addPropertyMethod(id);
	 
	 return this.objects[id];  
   },
   initEventsPanel : function(id)
   {
     this.objects[id].onmousemove=SinglePanel.getMouseXY; 
   },
   getObject : function(id)
   {
     return this.objects[id];
   },
   getX1 : function(id)
   {
     return this.objects[id].x1; 
   },
   getX2 : function(id)
   {
     return this.objects[id].x2; 
   },
   getY1 : function(id)
   {
     return this.objects[id].y1; 
   },
   getY2 : function(id)
   {
     return this.objects[id].y2; 
   },
   getMouseXY : function(e) 
   {  
     this.IE = document.all?true:false;
     
     var incr=0;
     if (this.IE) 
     { 
       x = event.clientX ;
       y = event.clientY ;
     } 
     else 
     { 
       x = e.screenX;
       y = e.screenY;  
     }  
     if (x < 0)
     {
       y = 0;
     }
     if (x < 0)
     {
       y = 0;
     }
     SinglePanel.objects[SinglePanel.idActual].mouseX=x;
     SinglePanel.objects[SinglePanel.idActual].mouseY=y;
     SinglePanel.objects[SinglePanel.idActual].fomm();
   },
   getMouseX : function(id)
   {
     return this.objects[id].mouseX;
   },
   getMouseY : function(id)
   {
     return this.objects[id].mouseY;
   },
   hide : function(id)
   {
     this.objects[id].style.display='none';
   },
   moveX : function(id,inc)
   {
     if(this.objects[id].style.position!='absolute')
     {
       this.objects[id].style.position='absolute';
     }
     this.objects[id].x1+=inc;
     this.objects[id].style.left=this.objects[id].x1+'px'; 
   },
   moveY : function(id,inc)
   {
     if(this.objects[id].style.position!='absolute')
     {
       this.objects[id].style.position='absolute';
     }
     this.objects[id].y1+=inc;
     this.objects[id].style.top=this.objects[id].y1+'px'; 
   },
   moveXY : function(id,incX,incY)
   {
     if(this.objects[id].style.position!='absolute')
     {
       this.objects[id].style.position='absolute';
     }
     this.objects[id].x1+=incX;
     this.objects[id].style.left=this.objects[id].x1+'px'; 
     this.objects[id].y1+=incY;
     this.objects[id].style.top=this.objects[id].y1+'px'; 
   },
   onClick : function(id,func)
   {
     this.objects[id].onclick=new Function(func); 
   },
   onChange : function(id,func)
   {
     this.objects[id].onchange=new Function(func);  
   },
   onBlur : function(id,func)
   {
     this.objects[id].onblur=new Function(func);
   },
   onDblClick : function(id,func)
   {
     this.objects[id].ondblclick=new Function(func); 
   }, 
   onFocus : function(id,func)
   {
     this.objects[id].onfocus=new Function(func); 
   },
   onKeyDown : function(id,func)
   {
     this.objects[id].onkeydown=new Function(func); 
   }, 
   onKeyPress : function(id,func)
   {
     this.objects[id].onkeypress=new Function(func); 
   },
   onKeyUp : function(id,func)
   {
     this.objects[id].onkeyup=new Function(func); 
   },
   onMouseDown : function(id,func)
   {
     this.objects[id].onmousedown=new Function(func); 
   },
   onMouseMove : function(id,func)
   {
     this.objects[id].onmousemove=new Function(func); 
   },
   onMouseOut : function(id,func)
   {
     this.objects[id].onmouseout=new Function(func); 
   },
   onMouseOver : function(id,func)
   {
     this.objects[id].onmouseover=new Function(func); 
   },
   onMouseUp : function(id,func)
   {
     this.objects[id].onmouseup=new Function(func); 
   },
   show : function(id)
   {
     this.objects[id].style.display='block';
   },
   setDimension : function(id,width,height)
   {
     this.objects[id].x2=width;
     this.objects[id].y2=height;
     this.objects[id].style.width=width+'px'; 
     this.objects[id].style.height=height+'px';
   },
   setAbsolutePosition : function(id,x1,y1,x2,y2)
   {
     if(this.objects[id].style.position!='absolute')
     {
       this.objects[id].style.position='absolute';
     }
     this.objects[id].x1=x1;
     this.objects[id].y1=y1;
     this.objects[id].x2=x2;
     this.objects[id].y2=y2;
     this.objects[id].style.left=x1+'px'; 
     this.objects[id].style.top=y1+'px';
     this.objects[id].style.width=x2+'px'; 
     this.objects[id].style.height=y2+'px';
   },
   setPositionX : function(id,x)
   {
     if(this.objects[id].style.position!='absolute')
     {
       this.objects[id].style.position='absolute';
     }
     this.objects[id].x1=x;
     this.objects[id].style.left=this.objects[id].x1+'px';
   },
   setPositionY : function(id,y)
   {
     if(this.objects[id].style.position!='absolute')
     {
       this.objects[id].style.position='absolute';
     }
     this.objects[id].y1=y;
     this.objects[id].style.top=this.objects[id].y1+'px';
   },
   setPositionXY : function(id,x1,y1)
   {
     if(this.objects[id].style.position!='absolute')
     {
       this.objects[id].style.position='absolute';
     }
     this.objects[id].x1=x1;
     this.objects[id].y1=y1;
     this.objects[id].style.left=x1+'px'; 
     this.objects[id].style.top=y1+'px';
   }, 
   setRelativePosition : function(id)
   {
     this.objects[id].style.position='relative';  
   },
   setBgColor : function(id,bgColor)
   {
     this.objects[id].style.backgroundColor= bgColor; 
   },
   setBorderColor : function(id,borderColor)
   {
     this.objects[id].style.borderColor= borderColor; 
   },
   setBorderWidth : function(id,value)
   {
     this.objects[id].style.borderWidth= value+'px'; 
   },  
   setInternalMargin : function(id,value)
   {
     this.objects[id].style.padding= value+'px'; 
   },	 
   setPanelStyle : function(id,value)
   {
     this.objects[id].style.borderStyle=value;
   },
   setAttributes : function(Id,typesAttribs,valuesAttribs)
   {                             
     this.objects[Id].setAttribute(typesAttribs,valuesAttribs);    
   },  
   setClassName : function(id,extClass)
   {
     this.setAttributes(id,'className',extClass); 
   },
   setObjAttrib : function(id,objAttr,env)
   {
	 	this.objects[id].loadBGImg = objAttr.getLoadBGImg();
     this.setBgColor(id,objAttr.Color.bgPanel[env]);
     this.setPanelStyle(id,objAttr.Border.stylePanel[env]);
     this.setBorderWidth(id,objAttr.Size.borderPanel[env]);
     this.setBorderColor(id,objAttr.Color.borderPanel[env]);
	 if(this.objects[id].loadBGImg)
	 {	
	   this.setBgBodyImg(id, objAttr.BgImg.bgPanel[env]);
	 }
   },
  setObjAttribToAll : function(objAttrib,env)
  {
    for(i=0;i<this.ids.length;i++)
    {
      this.setObjAttrib(this.ids[i],attrib,env);
    }	
},   
   setEvent : function(id,e,indexEvent)
   {
     this.objects[id].onclick=e.onClick[indexEvent];
     this.objects[id].onchange=e.onChange[indexEvent];
     this.objects[id].onblur=e.onBlur[indexEvent];
     this.objects[id].ondblclick=e.onDblClick[indexEvent];
     this.objects[id].onfocus=e.onFocus[indexEvent];
     this.objects[id].onkeydown=e.onKeyDown[indexEvent];
     this.objects[id].onkeypress=e.onKeyPress[indexEvent];
     this.objects[id].onkeyup=e.onKeyUp[indexEvent];
     this.objects[id].onmousedown=e.onMouseDown[indexEvent];
     this.objects[id].onmousemove=e.onMouseMove[indexEvent];
     this.objects[id].onmouseout=e.onMouseOut[indexEvent];
     this.objects[id].onmouseover=e.onMouseOver[indexEvent];
     this.objects[id].onmouseup=e.onMouseUp[indexEvent];
   },
  setBgBodyImg : function(id, bgImg)
  {
  	this.objects[id].style.backgroundImage="url("+this.bgImgPath+bgImg+")";
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