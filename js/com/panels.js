var panels= 
{
   objects : new Array,
   ids : new Array,   
   idActual :'',
  bgImgPath :"images/bg/",
  loadBG : true,
addPropertyMethod : function(id)
{
  panels.objects[id].functionOnMouseMove = function(funct)
  {
    panels.functionOnMouseMove(id,funct);
  }
  panels.objects[id].addToBody  =  function()
  {
    panels.addToBody(id);
  }
  panels.objects[id].addText  =  function(text,row,col)
  {
    panels.addText(id,text,row,col);
  }
  panels.objects[id].initEventsPanel  =  function()
  {
    panels.initEventsPanel(id);
  }
  panels.objects[id].getObject  =  function()
  {
    return panels.getObject(id);
  }
  panels.objects[id].getX1  =  function()
  {
    return panels.getX1(id);
  }
  panels.objects[id].getX2  =  function()
  {
    return panels.getX2(id);
  }
  panels.objects[id].getY1  =  function()
  {
    return panels.getY1(id);
  }
  panels.objects[id].getY2  =  function()
  {
    return panels.getY2(id);
  }
  panels.objects[id].getMouseXY  =  function(e)
  {
    panels.getMouseXY(e);
  }
  panels.objects[id].getMouseX  =  function()
  {
    return panels.getMouseX(id);
  }
  panels.objects[id].getMouseY  =  function()
  {
    return panels.getMouseY(id);
  }
  panels.objects[id].hide  =  function()
  {
    panels.hide(id);
  }
  panels.objects[id].moveX  =  function(inc)
  {
    panels.moveX(id,inc);
  }
  panels.objects[id].moveY  =  function(inc)
  {
    panels.moveY(id,inc);
  }
  panels.objects[id].moveXY  =  function(incX,incY)
  {
    panels.moveXY(id,incX,incY);
  }
  panels.objects[id].onClick  =  function(func)
  {
    panels.onClick(id,func);
  }
  panels.objects[id].onChange  =  function(func)
  {
    panels.onChange(id,func);
  }
  panels.objects[id].onBlur  =  function(func)
  {
    panels.onBlur(id,func);
  }
  panels.objects[id].onDblClick  =  function(func)
  {
    panels.onDblClick(id,func);
  }
  panels.objects[id].onFocus  =  function(func)
  {
    panels.onFocus(id,func);
  }
  panels.objects[id].onKeyDown  =  function(func)
  {
    panels.onKeyDown(id,func);
  }
  panels.objects[id].onKeyPress  =  function(func)
  {
    panels.onKeyPress(id,func);
  }
  panels.objects[id].onKeyUp  =  function(func)
  {
    panels.onKeyUp(id,func);
  }
  panels.objects[id].onMouseDown  =  function(func)
  {
    panels.onMouseDown(id,func);
  }
  panels.objects[id].onMouseMove  =  function(func)
  {
    panels.onMouseMove(id,func);
  }
  panels.objects[id].onMouseOut  =  function(func)
  {
    panels.onMouseOut(id,func);
  }
  panels.objects[id].onMouseOver  =  function(func)
  {
    panels.onMouseOver(id,func);
  }
  panels.objects[id].onMouseUp  =  function(func)
  {
    panels.onMouseUp(id,func);
  }
  panels.objects[id].show  =  function()
  {
    panels.show(id);
  }
  panels.objects[id].setDimension  =  function(width,height)
  {
    panels.setDimension(id,width,height);
  }
  panels.objects[id].setAbsolutePosition  =  function(x1,y1,x2,y2)
  {
    panels.setAbsolutePosition(id,x1,y1,x2,y2);
  }
  panels.objects[id].setPositionX  =  function(x)
  {
    panels.setPositionX(id,x);
  }
  panels.objects[id].setPositionY  =  function(y)
  {
    panels.setPositionY(id,y);
  }
  panels.objects[id].setPositionXY  =  function(x1,y1)
  {
    panels.setPositionXY(id,x1,y1);
  }
  panels.objects[id].setRelativePosition  =  function()
  {
    panels.setRelativePosition(id);
  }
  panels.objects[id].setBgColor  =  function(bgColor)
  {
    panels.setBgColor(id,bgColor);
  }
  panels.objects[id].setBorderColor  =  function(borderColor)
  {
    panels.setBorderColor(id,borderColor);
  }
  panels.objects[id].setBorderWidth  =  function(value)
  {
    panels.setBorderWidth(id,value);
  }
	panels.objects[id].setInternalMargin  =  function(value)
  {
    panels.setInternalMargin(id,value);
  }
  panels.objects[id].setPanelStyle  =  function(value)
  {
    panels.setPanelStyle(id,value);
  }
  panels.objects[id].setAttributes  =  function(typesAttribs,valuesAttribs)
  {
    panels.setAttributes(id,typesAttribs,valuesAttribs);
  }
  panels.objects[id].setClassName  =  function(extClass)
  {
    panels.setClassName(id,extClass);
  }
  panels.objects[id].setObjAttrib  =  function(objAttr,env)
  {
    panels.setObjAttrib(id,objAttr,env);
  }
  panels.objects[id].setObjAttribToAll  =  function(objAttrib,env)
  {
    panels.setObjAttribToAll(objAttrib,env);
  }
  panels.objects[id].setEvent  =  function(e,indexEvent)
  {
    panels.setEvent(id,e,indexEvent);
  }
  panels.objects[id].setLoadBGImg = function(activeLoad)
  {
	panels.setLoadBGImg(id, activeLoad);
  }
  panels.objects[id].setLoadBGImgAll = function(activeLoad)
  {
	panels.setLoadBGImgAll(activeLoad);
  }
  panels.objects[id].setBgBodyImg = function(bgImg)
  {
  	panels.setBgBodyImg(id, bgImg);
  }
  panels.objects[id].addObjToPanel = function(obj,row,col)
  {
  	panels.addObjToPanel(id,obj,row,col);
  }
  panels.objects[id].addLn = function(row,col,lns)
  {
  	panels.addLn(id,row,col,lns);
  }
  panels.objects[id].addSpace = function(row,col,space)
  {
  	panels.addSpace(id,row,col,space);
  }
  panels.objects[id].alignObjToCell = function(row,col,align)
  {
  	panels.alignObjToCell(id,row,col,align);
  }
  panels.objects[id].setCenterScreen = function(adjY)
  {
  	panels.setCenterScreen(id, adjY);
  }
  panels.objects[id].addLnInPixel = function(row, col, pixels)
  {
  	panels.addLnInPixel(id, row, col, pixels);
  }	
  panels.objects[id].addObject = function(obj, x, y)
  {
    panels.addObject(id, obj, x, y);
  }
  panels.objects[id].addTextXY = function(textObj, x, y)
  {
    panels.addTextXY(id, textObj, x, y) ;
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
  addSpace : function(id,row,col,space)
  {
    var actSizeRow = this.objects[id].grid.rows.length;
    while(actSizeRow <= row)
    {
      this.objects[id].grid.insertRow(actSizeRow);
      actSizeRow = this.objects[id].grid.rows.length;
    }
    var actSizeCol = this.objects[id].grid.rows[row].cells.length;
    while(actSizeCol <= col)
    {
      this.objects[id].grid.rows[row].insertCell(actSizeCol);
      actSizeCol = this.objects[id].grid.rows[row].cells.length;
    }
    this.objects[id].grid.rows[row].cells[col].style.width = space+"px";
  },
  addLn : function(id,row,col,lns)
  {
    var actSizeRow = this.objects[id].grid.rows.length;
    while(actSizeRow <= row)
    {
      this.objects[id].grid.insertRow(actSizeRow);
      actSizeRow = this.objects[id].grid.rows.length;
    }
    var actSizeCol = this.objects[id].grid.rows[row].cells.length;
    while(actSizeCol <= col)
    {
      this.objects[id].grid.rows[row].insertCell(actSizeCol);
      actSizeCol = this.objects[id].grid.rows[row].cells.length;
    }
	var s = "";
	for(i=0; i<lns; i++)
	  s+= "<BR>";
    this.objects[id].grid.rows[row].cells[col].innerHTML = s;
  },
  alignObjToCell : function(id,row,col,align)
  {
  	this.objects[id].grid.rows[row].cells[col].align = align;
  },     
   addText : function(id,text,row,col)
   {
   	 var actSizeRow = this.objects[id].grid.rows.length;
     while(actSizeRow <= row)
     {
       this.objects[id].grid.insertRow(actSizeRow);
       actSizeRow = this.objects[id].grid.rows.length;
     }
     var actSizeCol = this.objects[id].grid.rows[row].cells.length;
     while(actSizeCol <= col)
     {
       this.objects[id].grid.rows[row].insertCell(actSizeCol);
       actSizeCol = this.objects[id].grid.rows[row].cells.length;
     }
     this.objects[id].grid.rows[row].cells[col].innerHTML += text;  
   },
  addLnInPixel : function(id,row,col,pixels)
  {
    var actSizeRow = this.objects[id].grid.rows.length;
    while(actSizeRow <= row)
    {
      this.objects[id].grid.insertRow(actSizeRow);
      actSizeRow = this.objects[id].grid.rows.length;
    }
    var actSizeCol = this.objects[id].grid.rows[row].cells.length;
    while(actSizeCol <= col)
    {
      this.objects[id].grid.rows[row].insertCell(actSizeCol);
      actSizeCol = this.objects[id].grid.rows[row].cells.length;
    }
	this.objects[id].grid.rows[row].cells[col].style.height = pixels+'px';  
  },
  addObjToPanel : function(id,obj,row,col)
  {
    var actSizeRow = this.objects[id].grid.rows.length;
    while(actSizeRow <= row)
    {
      this.objects[id].grid.insertRow(actSizeRow);
      actSizeRow = this.objects[id].grid.rows.length;
    }
    var actSizeCol = this.objects[id].grid.rows[row].cells.length;
    while(actSizeCol <= col)
    {
      this.objects[id].grid.rows[row].insertCell(actSizeCol);
      actSizeCol = this.objects[id].grid.rows[row].cells.length;
    }
    this.objects[id].grid.rows[row].cells[col].appendChild(obj);
  },
  addObject : function(id, obj, x, y)
  {
    obj.style.position = 'absolute';
    obj.style.left = x + 'px';
    obj.style.top = y + 'px';
    obj.style.display='block';
    this.objects[id].appendChild(obj);
  },    
  addTextXY : function(id, textObj, x, y)
  {
    textObj.style.position = 'absolute';  
    textObj.style.left = x + 'px';
    textObj.style.top = y + 'px';
    textObj.style.display='block';
    this.objects[id].appendChild(textObj);
  }, 
   create : function(id,loadBG)  
   {
   	 if(loadBG!=undefined)
   	   this.loadBG = loadBG;
     this.objects[id]=document.createElement("DIV");
     this.objects[id].nameComponent = 'panels';
     this.objects[id].style.behavior='url(PIE.htc)';
     this.objects[id].style.borderRadius='1em';
	 this.objects[id].grid = document.createElement("TABLE");
     this.objects[id].grid.setAttribute("border","0");
     this.objects[id].grid.setAttribute("cellPadding","0");
     this.objects[id].grid.setAttribute("cellSpacing","0");
	 this.objects[id].appendChild(this.objects[id].grid);
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
	 if(attrib)
       this.setObjAttrib(id,attrib,attrib.getActualEnv());
	 return this.objects[id];  
   },
   initEventsPanel : function(id)
   {
     this.objects[id].onmousemove=panels.getMouseXY; 
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
     panels.objects[panels.idActual].mouseX=x;
     panels.objects[panels.idActual].mouseY=y;
     panels.objects[panels.idActual].fomm();
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
  setCenterScreen : function(id, adjY)
  {
  	
    var x = document.documentElement.clientWidth/2 - this.objects[id].clientWidth/2;
    var y = document.documentElement.clientHeight/2 - this.objects[id].clientHeight/2;
	if(adjY)
		y+=adjY;
    this.setPositionXY(id,x,y);
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
	   if(this.loadBG){	
	     this.setBgBodyImg(id, objAttr.BgImg.bgPanel[env]);
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