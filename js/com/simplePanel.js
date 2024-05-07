var simplePanel = 
{
   objects : new Array,
   ids : new Array,   
   idActual :'',
  bgImgPath :"images/bg/",
addPropertyMethod : function(id)
{
  simplePanel.objects[id].functionOnMouseMove = function(funct)
  {
    simplePanel.functionOnMouseMove(id,funct);
  }
  simplePanel.objects[id].addToBody  =  function()
  {
    simplePanel.addToBody(id);
  }
  simplePanel.objects[id].addObjToPanel  =  function(obj)
  {
    simplePanel.addObjToPanel(id,obj);
  }
  simplePanel.objects[id].addText  =  function(text)
  {
    simplePanel.addText(id,text);
  }
  simplePanel.objects[id].initEventsPanel  =  function()
  {
    simplePanel.initEventsPanel(id);
  }
  simplePanel.objects[id].getObject  =  function()
  {
    return simplePanel.getObject(id);
  }
  simplePanel.objects[id].getX1  =  function()
  {
    return simplePanel.getX1(id);
  }
  simplePanel.objects[id].getX2  =  function()
  {
    return simplePanel.getX2(id);
  }
  simplePanel.objects[id].getY1  =  function()
  {
    return simplePanel.getY1(id);
  }
  simplePanel.objects[id].getY2  =  function()
  {
    return simplePanel.getY2(id);
  }
  simplePanel.objects[id].getMouseXY  =  function(e)
  {
    simplePanel.getMouseXY(e);
  }
  simplePanel.objects[id].getMouseX  =  function()
  {
    return simplePanel.getMouseX(id);
  }
  simplePanel.objects[id].getMouseY  =  function()
  {
    return simplePanel.getMouseY(id);
  }
  simplePanel.objects[id].hide  =  function()
  {
    simplePanel.hide(id);
  }
  simplePanel.objects[id].moveX  =  function(inc)
  {
    simplePanel.moveX(id,inc);
  }
  simplePanel.objects[id].moveY  =  function(inc)
  {
    simplePanel.moveY(id,inc);
  }
  simplePanel.objects[id].moveXY  =  function(incX,incY)
  {
    simplePanel.moveXY(id,incX,incY);
  }
  simplePanel.objects[id].onClick  =  function(func)
  {
    simplePanel.onClick(id,func);
  }
  simplePanel.objects[id].onChange  =  function(func)
  {
    simplePanel.onChange(id,func);
  }
  simplePanel.objects[id].onBlur  =  function(func)
  {
    simplePanel.onBlur(id,func);
  }
  simplePanel.objects[id].onDblClick  =  function(func)
  {
    simplePanel.onDblClick(id,func);
  }
  simplePanel.objects[id].onFocus  =  function(func)
  {
    simplePanel.onFocus(id,func);
  }
  simplePanel.objects[id].onKeyDown  =  function(func)
  {
    simplePanel.onKeyDown(id,func);
  }
  simplePanel.objects[id].onKeyPress  =  function(func)
  {
    simplePanel.onKeyPress(id,func);
  }
  simplePanel.objects[id].onKeyUp  =  function(func)
  {
    simplePanel.onKeyUp(id,func);
  }
  simplePanel.objects[id].onMouseDown  =  function(func)
  {
    simplePanel.onMouseDown(id,func);
  }
  simplePanel.objects[id].onMouseMove  =  function(func)
  {
    simplePanel.onMouseMove(id,func);
  }
  simplePanel.objects[id].onMouseOut  =  function(func)
  {
    simplePanel.onMouseOut(id,func);
  }
  simplePanel.objects[id].onMouseOver  =  function(func)
  {
    simplePanel.onMouseOver(id,func);
  }
  simplePanel.objects[id].onMouseUp  =  function(func)
  {
    simplePanel.onMouseUp(id,func);
  }
  simplePanel.objects[id].show  =  function()
  {
    simplePanel.show(id);
  }
  simplePanel.objects[id].setDimension  =  function(width,height)
  {
    simplePanel.setDimension(id,width,height);
  }
  simplePanel.objects[id].setAbsolutePosition  =  function(x1,y1,x2,y2)
  {
    simplePanel.setAbsolutePosition(id,x1,y1,x2,y2);
  }
  simplePanel.objects[id].setPositionX  =  function(x)
  {
    simplePanel.setPositionX(id,x);
  }
  simplePanel.objects[id].setPositionY  =  function(y)
  {
    simplePanel.setPositionY(id,y);
  }
  simplePanel.objects[id].setPositionXY  =  function(x1,y1)
  {
    simplePanel.setPositionXY(id,x1,y1);
  }
  simplePanel.objects[id].setRelativePosition  =  function()
  {
    simplePanel.setRelativePosition(id);
  }
  simplePanel.objects[id].setBgColor  =  function(bgColor)
  {
    simplePanel.setBgColor(id,bgColor);
  }
  simplePanel.objects[id].setBorderColor  =  function(borderColor)
  {
    simplePanel.setBorderColor(id,borderColor);
  }
  simplePanel.objects[id].setBorderWidth  =  function(value)
  {
    simplePanel.setBorderWidth(id,value);
  }
	simplePanel.objects[id].setInternalMargin  =  function(value)
  {
    simplePanel.setInternalMargin(id,value);
  }
  simplePanel.objects[id].setPanelStyle  =  function(value)
  {
    simplePanel.setPanelStyle(id,value);
  }
  simplePanel.objects[id].setAttributes  =  function(typesAttribs,valuesAttribs)
  {
    simplePanel.setAttributes(id,typesAttribs,valuesAttribs);
  }
  simplePanel.objects[id].setClassName  =  function(extClass)
  {
    simplePanel.setClassName(id,extClass);
  }
  simplePanel.objects[id].setObjAttrib  =  function(objAttr,env)
  {
    simplePanel.setObjAttrib(id,objAttr,env);
  }
  simplePanel.objects[id].setObjAttribToAll  =  function(objAttrib,env)
  {
    simplePanel.setObjAttribToAll(objAttrib,env);
  }
  simplePanel.objects[id].setEvent  =  function(e,indexEvent)
  {
    simplePanel.setEvent(id,e,indexEvent);
  }
  simplePanel.objects[id].setLoadBGImg = function(activeLoad)
  {
	simplePanel.setLoadBGImg(id, activeLoad);
  }
  simplePanel.objects[id].setLoadBGImgAll = function(activeLoad)
  {
	simplePanel.setLoadBGImgAll(activeLoad);
  }
  simplePanel.objects[id].setBgBodyImg = function(bgImg)
  {
  	simplePanel.setBgBodyImg(id, bgImg);
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
     this.objects[id].nameComponent = 'simplePanel';
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
     this.objects[id].onmousemove=simplePanel.getMouseXY; 
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
     simplePanel.objects[simplePanel.idActual].mouseX=x;
     simplePanel.objects[simplePanel.idActual].mouseY=y;
     simplePanel.objects[simplePanel.idActual].fomm();
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