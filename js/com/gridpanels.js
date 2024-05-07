var gridpanels= 
{
   objects : new Array,
   ids : new Array,   
   idActual :'',
  bgImgPath :"images/bg/",
addPropertyMethod : function(id)
{
  gridpanels.objects[id].functionOnMouseMove = function(funct)
  {
    gridpanels.functionOnMouseMove(id,funct);
  }
  gridpanels.objects[id].addToBody  =  function()
  {
    gridpanels.addToBody(id);
  }
  gridpanels.objects[id].addText  =  function(text,row,col)
  {
    gridpanels.addText(id,text,row,col);
  }
  gridpanels.objects[id].initEventsPanel  =  function()
  {
    gridpanels.initEventsPanel(id);
  }
  gridpanels.objects[id].getObject  =  function()
  {
    return gridpanels.getObject(id);
  }
  gridpanels.objects[id].getX1  =  function()
  {
    return gridpanels.getX1(id);
  }
  gridpanels.objects[id].getX2  =  function()
  {
    return gridpanels.getX2(id);
  }
  gridpanels.objects[id].getY1  =  function()
  {
    return gridpanels.getY1(id);
  }
  gridpanels.objects[id].getY2  =  function()
  {
    return gridpanels.getY2(id);
  }
  gridpanels.objects[id].getMouseXY  =  function(e)
  {
    gridpanels.getMouseXY(e);
  }
  gridpanels.objects[id].getMouseX  =  function()
  {
    return gridpanels.getMouseX(id);
  }
  gridpanels.objects[id].getMouseY  =  function()
  {
    return gridpanels.getMouseY(id);
  }
  gridpanels.objects[id].hide  =  function()
  {
    gridpanels.hide(id);
  }
  gridpanels.objects[id].moveX  =  function(inc)
  {
    gridpanels.moveX(id,inc);
  }
  gridpanels.objects[id].moveY  =  function(inc)
  {
    gridpanels.moveY(id,inc);
  }
  gridpanels.objects[id].moveXY  =  function(incX,incY)
  {
    gridpanels.moveXY(id,incX,incY);
  }
  gridpanels.objects[id].onClick  =  function(func)
  {
    gridpanels.onClick(id,func);
  }
  gridpanels.objects[id].onChange  =  function(func)
  {
    gridpanels.onChange(id,func);
  }
  gridpanels.objects[id].onBlur  =  function(func)
  {
    gridpanels.onBlur(id,func);
  }
  gridpanels.objects[id].onDblClick  =  function(func)
  {
    gridpanels.onDblClick(id,func);
  }
  gridpanels.objects[id].onFocus  =  function(func)
  {
    gridpanels.onFocus(id,func);
  }
  gridpanels.objects[id].onKeyDown  =  function(func)
  {
    gridpanels.onKeyDown(id,func);
  }
  gridpanels.objects[id].onKeyPress  =  function(func)
  {
    gridpanels.onKeyPress(id,func);
  }
  gridpanels.objects[id].onKeyUp  =  function(func)
  {
    gridpanels.onKeyUp(id,func);
  }
  gridpanels.objects[id].onMouseDown  =  function(func)
  {
    gridpanels.onMouseDown(id,func);
  }
  gridpanels.objects[id].onMouseMove  =  function(func)
  {
    gridpanels.onMouseMove(id,func);
  }
  gridpanels.objects[id].onMouseOut  =  function(func)
  {
    gridpanels.onMouseOut(id,func);
  }
  gridpanels.objects[id].onMouseOver  =  function(func)
  {
    gridpanels.onMouseOver(id,func);
  }
  gridpanels.objects[id].onMouseUp  =  function(func)
  {
    gridpanels.onMouseUp(id,func);
  }
  gridpanels.objects[id].show  =  function()
  {
    gridpanels.show(id);
  }
  gridpanels.objects[id].setDimension  =  function(width,height)
  {
    gridpanels.setDimension(id,width,height);
  }
  gridpanels.objects[id].setAbsolutePosition  =  function(x1,y1,x2,y2)
  {
    gridpanels.setAbsolutePosition(id,x1,y1,x2,y2);
  }
  gridpanels.objects[id].setPositionX  =  function(x)
  {
    gridpanels.setPositionX(id,x);
  }
  gridpanels.objects[id].setPositionY  =  function(y)
  {
    gridpanels.setPositionY(id,y);
  }
  gridpanels.objects[id].setPositionXY  =  function(x1,y1)
  {
    gridpanels.setPositionXY(id,x1,y1);
  }
  gridpanels.objects[id].setRelativePosition  =  function()
  {
    gridpanels.setRelativePosition(id);
  }
  gridpanels.objects[id].setBgColor  =  function(bgColor)
  {
    gridpanels.setBgColor(id,bgColor);
  }
  gridpanels.objects[id].setBorderColor  =  function(borderColor)
  {
    gridpanels.setBorderColor(id,borderColor);
  }
  gridpanels.objects[id].setBorderWidth  =  function(value)
  {
    gridpanels.setBorderWidth(id,value);
  }
	gridpanels.objects[id].setInternalMargin  =  function(value)
  {
    gridpanels.setInternalMargin(id,value);
  }
  gridpanels.objects[id].setPanelStyle  =  function(value)
  {
    gridpanels.setPanelStyle(id,value);
  }
  gridpanels.objects[id].setAttributes  =  function(typesAttribs,valuesAttribs)
  {
    gridpanels.setAttributes(id,typesAttribs,valuesAttribs);
  }
  gridpanels.objects[id].setClassName  =  function(extClass)
  {
    gridpanels.setClassName(id,extClass);
  }
  gridpanels.objects[id].setObjAttrib  =  function(objAttr,env)
  {
    gridpanels.setObjAttrib(id,objAttr,env);
  }
  gridpanels.objects[id].setObjAttribToAll  =  function(objAttrib,env)
  {
    gridpanels.setObjAttribToAll(objAttrib,env);
  }
  gridpanels.objects[id].setEvent  =  function(e,indexEvent)
  {
    gridpanels.setEvent(id,e,indexEvent);
  }
  gridpanels.objects[id].setLoadBGImg = function(activeLoad)
  {
	gridpanels.setLoadBGImg(id, activeLoad);
  }
  gridpanels.objects[id].setLoadBGImgAll = function(activeLoad)
  {
	gridpanels.setLoadBGImgAll(activeLoad);
  }
  gridpanels.objects[id].setBgBodyImg = function(bgImg)
  {
  	gridpanels.setBgBodyImg(id, bgImg);
  }
  gridpanels.objects[id].addObjToPanel = function(obj,row,col)
  {
  	gridpanels.addObjToPanel(id,obj,row,col);
  }
  gridpanels.objects[id].addLn = function(row,col,lns)
  {
  	gridpanels.addLn(id,row,col,lns);
  }
  gridpanels.objects[id].addSpace = function(row,col,space)
  {
  	gridpanels.addSpace(id,row,col,space);
  }
  gridpanels.objects[id].alignObjToCell = function(row,col,align)
  {
  	gridpanels.alignObjToCell(id,row,col,align);
  }
  gridpanels.objects[id].setCenterScreen = function()
  {
  	gridpanels.setCenterScreen(id);
  }
  gridpanels.objects[id].showGrid = function(sts)
  {
  	gridpanels.showGrid(id,sts);
  }
  gridpanels.objects[id].addLnInPixel = function(row, col, pixels)
  {
  	gridpanels.addLnInPixel(id, row, col, pixels);
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
   create : function(id)  
   {
     this.objects[id]=document.createElement("DIV");
     this.objects[id].nameComponent = 'gridPanel';
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
	 return this.objects[id];  
   },
   initEventsPanel : function(id)
   {
     this.objects[id].onmousemove=gridpanels.getMouseXY; 
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
     gridpanels.objects[gridpanels.idActual].mouseX=x;
     gridpanels.objects[gridpanels.idActual].mouseY=y;
     gridpanels.objects[gridpanels.idActual].fomm();
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
   
  setCenterScreen : function(id)
  {
    var x = document.documentElement.clientWidth/2 - this.objects[id].clientWidth/2;
    var y = document.documentElement.clientHeight/2 - this.objects[id].clientHeight/2;
    this.setPositionXY(id,x,y);
  },
   show : function(id)
   {
     this.objects[id].style.display='block';
   },
  showGrid: function(id,sts)
  {
  	if (sts)
	{
  	  this.objects[id].grid.setAttribute("border","1");	
	}
	else
	{
	  this.objects[id].grid.setAttribute("border","0");	
	}
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