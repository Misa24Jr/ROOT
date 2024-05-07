var tabs=
{
  objects   	    : new Array,
  ids : new Array,
  imgs      	    : new Array,
  pathImgs  	    :"images",
  imgsOn    	    : ["/tabLeft.gif","/tabCenter.gif","/tabRight.gif"],    
  imgsOff   	    : ["/tabLeftOff.gif","/tabCenterOff.gif","/tabRightOff.gif"],
  onTabSelect      : new Array,
  onTabOver        : new Array,
  BORDER_GROOVE    : "groove",
  BORDER_DASHED    : "dashed",
  BORDER_INSET     : "inset",
  BORDER_OUTSET    : "outset",
  BORDER_RIDGE     : "ridge",
  BORDER_DOTTED    : "dotted",
  BORDER_DOUBLE    : "double",
  BORDER_NORMAL    : "none",
  bgImgPath :"images/bg/",
addPropertyMethod : function(id)
{
  tabs.objects[id].addToBody  =  function()
  {
    tabs.addToBody(id);
  }
  tabs.objects[id].addEventOnTabOver  =  function(tabNum,funct)
  {
    tabs.addEventOnTabOver(id,tabNum,funct);
  }
  tabs.objects[id].addEventOnTabSelect  =  function(tabNum,funct)
  {
    tabs.addEventOnTabSelect(id,tabNum,funct);
  }
  tabs.objects[id].onTabSelected  =  function(tabNum,funct)
  {
    tabs.onTabSelected(id,tabNum,funct);
  }
  tabs.objects[id].addTab  =  function(name)
  {
    tabs.addTab(id,name);
  }
  tabs.objects[id].addObjToPanel  =  function(panelNum,obj)
  {
    tabs.addObjToPanel(id,panelNum,obj);
  }
  tabs.objects[id].addHTMLToPanel  =  function(panelNum,html)
  {
    tabs.addHTMLToPanel(id,panelNum,html);
  }
  tabs.objects[id].addObjToGridPanel  =  function(panelNum,obj,row,col)
  {
    tabs.addObjToGridPanel(id,panelNum,obj,row,col);
  }
  tabs.objects[id].addTextToGridPanel  =  function(panelNum,text,row,col)
  {
    tabs.addTextToGridPanel(id,panelNum,text,row,col);
  }
  tabs.objects[id].alignGridPanel  =  function(panelNum,row,col,align)
  {
    tabs.alignGridPanel(id,panelNum,row,col,align);
  }
  tabs.objects[id].setWidthCell = function(panelNum,row,col,width)
  {
    tabs.setWidthCell(id,panelNum,row,col,width);
  }
  tabs.objects[id].changeTextTab  =  function(tabNum,text)
  {
    tabs.changeTextTab(id,tabNum,text);
  }
  tabs.objects[id].createImg  =  function(val)
  {
    tabs.createImg(id,val);
  }
  tabs.objects[id].getObject  =  function()
  {
    return tabs.getObject(id);
  }
  tabs.objects[id].hide  =  function()
  {
    tabs.hide(id);
  }
  tabs.objects[id].onClick  =  function(func)
  {
    tabs.onClick(id,func);
  }
  tabs.objects[id].onChange  =  function(func)
  {
    tabs.onChange(id,func);
  }
  tabs.objects[id].onBlur  =  function(func)
  {
    tabs.onBlur(id,func);
  }
  tabs.objects[id].onDblClick  =  function(func)
  {
    tabs.onDblClick(id,func);
  }
  tabs.objects[id].onFocus  =  function(func)
  {
    tabs.onFocus(id,func);
  }
  tabs.objects[id].onKeyDown  =  function(func)
  {
    tabs.onKeyDown(id,func);
  }
  tabs.objects[id].onKeyPress  =  function(func)
  {
    tabs.onKeyPress(id,func);
  }
  tabs.objects[id].onKeyUp  =  function(func)
  {
    tabs.onKeyUp(id,func);
  }
  tabs.objects[id].onMouseDown  =  function(row,func)
  {
    tabs.onMouseDown(id,row,func);
  }
  tabs.objects[id].onMouseMove  =  function(func)
  {
    tabs.onMouseMove(id,func);
  }
  tabs.objects[id].onMouseOut  =  function(func)
  {
    tabs.onMouseOut(id,func);
  }
  tabs.objects[id].onMouseOver  =  function(func)
  {
    tabs.onMouseOver(id,func);
  }
  tabs.objects[id].onMouseUp  =  function(func)
  {
    tabs.onMouseUp(id,func);
  }
  tabs.objects[id].panelHide  =  function()
  {
    tabs.panelHide(id);
  }
  tabs.objects[id].showPanel  =  function(tabNum)
  {
    tabs.showPanel(id,tabNum);
  }
  tabs.objects[id].setPropertyPanel  =  function()
  {
    tabs.setPropertyPanel(id);
  }
  tabs.objects[id].setPanelAutoScroll  =  function(tabNum)
  {
    tabs.setPanelAutoScroll(id,tabNum);
  }
  tabs.objects[id].setPanelHidden  =  function(tabNum)
  {
    tabs.setPanelHidden(id,tabNum);
  }
  tabs.objects[id].setBorderStylePanel  =  function(borderStyle)
  {
    tabs.setBorderStylePanel(id,borderStyle);
  }
  tabs.objects[id].setPropertyTab  =  function(tabNum)
  {
    tabs.setPropertyTab(id,tabNum);
  }
  tabs.objects[id].setcursorType  =  function(type)
  {
    tabs.setcursorType(id,type);
  }
  tabs.objects[id].setPositionXY  =  function(x,y)
  {
    tabs.setPositionXY(id,x,y);
  }
  tabs.objects[id].setRelativePosition  =  function()
  {
    tabs.setRelativePosition(id);
  }
  tabs.objects[id].setSpacing  =  function(spacing, padding)
  {
    tabs.setSpacing(id,spacing, padding);
  }
  tabs.objects[id].setSpacingTab  =  function(tab, spacing, padding)
  {
    tabs.setSpacingTab(id,tab, spacing, padding);
  }
  tabs.objects[id].showColorText  =  function(tabNum)
  {
    tabs.showColorText(id,tabNum);
  }
  tabs.objects[id].showColorTextSelected  =  function(tabNum)
  {
    tabs.showColorTextSelected(id,tabNum);
  }
  tabs.objects[id].setSizeText  =  function(val)
  {
    tabs.setSizeText(id,val);
  }
  tabs.objects[id].setFontFamily  =  function(fontFamilyTab)
  {
    tabs.setFontFamily(id,fontFamilyTab);
  }
  tabs.objects[id].setFontStyle  =  function(fontStyleTab)
  {
    tabs.setFontStyle(id,fontStyleTab);
  }
  tabs.objects[id].setSizePanel  =  function(sizex,sizey)
  {
    tabs.setSizePanel(id,sizex,sizey);
  }
  tabs.objects[id].setObjAttrib  =  function(objAttr,env)
  {
    tabs.setObjAttrib(id,objAttr,env);
  }
  tabs.objects[id].setObjAttribToAll  =  function(objAttrib,env)
  {
    tabs.setObjAttribToAll(objAttrib,env);
  }
  tabs.objects[id].selectTab  =  function(tabNum, cancelEvent)
  {
    tabs.selectTab(id,tabNum, cancelEvent);
  }
  tabs.objects[id].textAlignGridPanel  =  function(panelNum,row,col,align)
  {
    tabs.textAlignGridPanel(id,panelNum,row,col,align);
  }
  tabs.objects[id].hideTab   =  function(tabNum)
  {
  	tabs.hideTab(id,tabNum);
  }
  tabs.objects[id].showTab =  function(tabNum)
  {
    tabs.showTab(id,tabNum);
  }
  tabs.objects[id].setLoadBGImg = function(activeLoad)
  {
	tabs.setLoadBGImg(id, activeLoad);
  }
  tabs.objects[id].setLoadBGImgAll = function(activeLoad)
  {
	tabs.setLoadBGImgAll(activeLoad);
  }
  tabs.objects[id].setBgBodyImg = function(bgImg)
  {
  	tabs.setBgBodyImg(id, bgImg);
  }
  tabs.objects[id].setHeightRow = function(tab,row,h)
  {
  	tabs.setHeightRow(id,tab,row,h);
  }
  tabs.objects[id].getCellGridPanel = function(panelNumber,row,col)
  {
  	return tabs.getCellGridPanel(id,panelNumber,row,col);
  }
  tabs.objects[id].setFontCellPanel = function(fontFamily,sizeFont,color,panelNum,row,col)
  {
  	tabs.setFontCellPanel(id,fontFamily,sizeFont,color,panelNum,row,col);
  }
  tabs.objects[id].getGridPanel = function(panelNumber)
  {
  	return tabs.getGridPanel(id,panelNumber);
  }
  tabs.objects[id].setBorderWidthPanel = function(borderWidth)
  {
  	tabs.setBorderWidthPanel(id, borderWidth);
  }
  tabs.objects[id].setHeightCellPanel = function(row,col,panelNum,height)
  {
  	tabs.setHeightCellPanel(id,row,col,panelNum,height);
  }
  tabs.objects[id].addLnToGridPanel = function(panelNum,heigth)
  {
  	tabs.addLnToGridPanel(id,panelNum,heigth);
  }
  tabs.objects[id].getActualTab = function()
  {
	return tabs.getActualTab(id);  
  }
  tabs.objects[id].setCaption = function(tabNum, capt){
  	tabs.setCaption(id, tabNum, capt);
  }
  tabs.objects[id].addObject = function(panelNum,obj,x,y){
  	tabs.addObject(id, panelNum,obj,x,y);
  }
},
  addToBody : function(id)
  {
    document.body.appendChild(this.objects[id]);
  },
  addEventOnTabOver : function(id,tabNum,funct)
  {
    this.onTabOver[tabNum] = new Function(funct);
  },
  onTabSelected : function(id,tabNum,funct)
  {
    this.onTabSelect[tabNum] = new Function(funct);
  },
  addEventOnTabSelect : function(id,tabNum,funct)
  {
    this.onTabSelect[tabNum] = new Function(funct);
  },
  addTab : function(id,name)
  {
    var actualTab=this.objects[id].tableObj.rows[0].cells.length;
    this.objects[id].tableObj.rows[0].insertCell(actualTab);
    this.objects[id].tableObj.rows[0].insertCell(actualTab+1);
    this.objects[id].tableObj.rows[0].insertCell(actualTab+2);
    this.createImg(id,actualTab);
    this.objects[id].tableObj.rows[0].cells[actualTab].appendChild(this.imgs[id+'izq'+actualTab]);
    this.objects[id].tableObj.rows[0].cells[actualTab+1].style.backgroundImage = "url("+this.pathImgs+this.imgsOff[1]+")";
    this.objects[id].tableObj.rows[0].cells[actualTab+2].appendChild(this.imgs[id+'der'+actualTab]);
    this.objects[id].tableObj.rows[0].cells[actualTab+1].innerHTML=name;
    this.objects[id].panel[parseInt(""+actualTab/3)] = document.createElement("DIV");
    this.objects[id].panel[parseInt(""+actualTab/3)].style.overflow = "auto";
    this.objects[id].appendChild(this.objects[id].panel[parseInt(""+actualTab/3)]);
    this.objects[id].totalTabs+=1;
    this.objects[id].panel[parseInt(""+actualTab/3)].tableGrid = document.createElement("TABLE");
    this.objects[id].panel[parseInt(""+actualTab/3)].tableGrid.setAttribute('border','0px');
    this.objects[id].panel[parseInt(""+actualTab/3)].tableGrid.setAttribute('cellSpacing','0px');
    this.objects[id].panel[parseInt(""+actualTab/3)].tableGrid.setAttribute('cellPadding','0px');
    this.objects[id].panel[parseInt(""+actualTab/3)].appendChild(this.objects[id].panel[parseInt(""+actualTab/3)].tableGrid);
    this.onTabOver[parseInt(""+actualTab/3)] = new Function("");
    this.onTabSelect[parseInt(""+actualTab/3)] = new Function("");
    this.objects[id].tableObj.rows[0].cells[actualTab].onmousedown   = new Function("tabs.selectTab('"+id+"',"+parseInt(""+actualTab/3)+")");
    this.objects[id].tableObj.rows[0].cells[actualTab+1].onmousedown = new Function("tabs.selectTab('"+id+"',"+parseInt(""+actualTab/3)+")");
    this.objects[id].tableObj.rows[0].cells[actualTab+2].onmousedown = new Function("tabs.selectTab('"+id+"',"+parseInt(""+actualTab/3)+")");
    this.objects[id].tableObj.rows[0].cells[actualTab].onmouseover   = new Function("tabs.onTabOver["+parseInt(""+actualTab/3)+"]();tabs.showColorTextSelected('"+id+"',"+parseInt(""+actualTab/3)+")");
    this.objects[id].tableObj.rows[0].cells[actualTab+1].onmouseover = new Function("tabs.onTabOver["+parseInt(""+actualTab/3)+"]();tabs.showColorTextSelected('"+id+"',"+parseInt(""+actualTab/3)+")");
    this.objects[id].tableObj.rows[0].cells[actualTab+2].onmouseover = new Function("tabs.onTabOver["+parseInt(""+actualTab/3)+"]();tabs.showColorTextSelected('"+id+"',"+parseInt(""+actualTab/3)+")");
    this.objects[id].tableObj.rows[0].cells[actualTab].onmouseout   = new Function("tabs.showColorText('"+id+"',"+parseInt(""+actualTab/3)+")");
    this.objects[id].tableObj.rows[0].cells[actualTab+1].onmouseout = new Function("tabs.showColorText('"+id+"',"+parseInt(""+actualTab/3)+")");
    this.objects[id].tableObj.rows[0].cells[actualTab+2].onmouseout = new Function("tabs.showColorText('"+id+"',"+parseInt(""+actualTab/3)+")");
  },
  addObjToPanel : function(id,panelNum,obj)
  {
    this.objects[id].panel[panelNum].appendChild(obj);
  },
  addObject : function(id,panelNum,obj,x,y)
  {
    this.objects[id].panel[panelNum].appendChild(obj);
    obj.style.position = 'absolute';
    obj.style.left = x + "px";
    obj.style.top = y + "px";
  },
  addHTMLToPanel : function(id,panelNum,html)
  {
    this.objects[id].panel[panelNum].innerHTML=html;
  },
  addObjToGridPanel : function(id,panelNum,obj,row,col)
  {
    var totalRow = this.objects[id].panel[panelNum].tableGrid.rows.length;
    if(row >= totalRow)
    {
      for(i=totalRow; i<row+1; i++)
      {
        this.objects[id].panel[panelNum].tableGrid.insertRow(i);
        var totalCol = this.objects[id].panel[panelNum].tableGrid.rows[i].cells.length;
        if(col >= totalCol)
        {
          for(j=totalCol; j<col+1; j++)
          {
            this.objects[id].panel[panelNum].tableGrid.rows[i].insertCell(j);
          }  
        }
      }
    }
    else
    {
      var totalCol = this.objects[id].panel[panelNum].tableGrid.rows[row].cells.length;
      if(col >= totalCol)
      {
        for(j=totalCol; j<col+1; j++)
        {
          this.objects[id].panel[panelNum].tableGrid.rows[row].insertCell(j);
        }  
      }
    }
    this.objects[id].panel[panelNum].tableGrid.rows[row].cells[col].appendChild(obj);
  },
  addLnToGridPanel : function(id,panelNum,height)
  {
  	var totalRow = this.objects[id].panel[panelNum].tableGrid.rows.length;
    this.addTextToGridPanel(id,panelNum,' ',totalRow,0);
    this.setHeightRow(id,panelNum,totalRow,height);
  },
  addTextToGridPanel : function(id,panelNum,text,row,col)
  {
    var totalRow = this.objects[id].panel[panelNum].tableGrid.rows.length;
    if(row >= totalRow)
    {
      for(i=totalRow; i<row+1; i++)
      {
        this.objects[id].panel[panelNum].tableGrid.insertRow(i);
        var totalCol = this.objects[id].panel[panelNum].tableGrid.rows[i].cells.length;
        if(col >= totalCol)
        {
          for(j=totalCol; j<col+1; j++)
          {
            this.objects[id].panel[panelNum].tableGrid.rows[i].insertCell(j);
          }  
        }
      }
    }
    else
    {
      var totalCol = this.objects[id].panel[panelNum].tableGrid.rows[row].cells.length;
      if(col >= totalCol)
      {
        for(j=totalCol; j<col+1; j++)
        {
          this.objects[id].panel[panelNum].tableGrid.rows[row].insertCell(j);
        }  
      }
    }
    var tn = document.createTextNode(text)
    this.objects[id].panel[panelNum].tableGrid.rows[row].cells[col].appendChild(tn);
  },  
  alignGridPanel : function(id,panelNum,row,col,align)
  {
  	this.objects[id].panel[panelNum].tableGrid.rows[row].cells[col].align = align;
  },  
  setWidthCell : function(id,panelNum,row,col,width)
  {
  	var actSizeRow = this.objects[id].panel[panelNum].tableGrid.rows.length; 
    while(actSizeRow <= row)
    {
      this.objects[id].panel[panelNum].tableGrid.insertRow(actSizeRow);
      actSizeRow = this.objects[id].panel[panelNum].tableGrid.rows.length;
    }
    var actSizeCol = this.objects[id].panel[panelNum].tableGrid.rows[row].cells.length;
    while(actSizeCol <= col)
    {
      this.objects[id].panel[panelNum].tableGrid.rows[row].insertCell(actSizeCol);
      actSizeCol = this.objects[id].panel[panelNum].tableGrid.rows[row].cells.length;
    }
    this.objects[id].panel[panelNum].tableGrid.rows[row].cells[col].style.width = width+"px";
  },    
  changeTextTab : function(id,tabNum,text)
  {
    this.objects[id].tableObj.rows[0].cells[tabNum*3+1].innerHTML=text;
  },
  createImg : function(id,val)
  {
    this.imgs[id+'izq'+val]	= document.createElement("img");
    this.imgs[id+'der'+val]	= document.createElement("img");
    this.imgs[id+'centro'+val]	= document.createElement("img");
    this.imgs[id+'izq'+val].src	= this.pathImgs+this.imgsOff[0];
    this.imgs[id+'centro'+val].src	= this.pathImgs+this.imgsOff[1];
    this.imgs[id+'der'+val].src	= this.pathImgs+this.imgsOff[2];
  },
  create : function(id,panelWidth,panelHeight,names)
  {
    this.objects[id] = document.createElement("DIV");
    this.objects[id].actualTab = 0;
    this.objects[id].nameComponent = 'tabs';
	this.objects[id].loadBGImg = false;
    this.objects[id].id = id;
	this.ids[this.ids.length] = id;
    this.objects[id].style.overflow = "auto";
    this.objects[id].tableObj = document.createElement("TABLE");
	this.objects[id].tableObj.style.fontSize = "0px";
    this.objects[id].panel= new Array;
    this.objects[id].panelWidth=panelWidth;
    this.objects[id].panelHeight=panelHeight;
    this.objects[id].bgPanel='white';
    this.objects[id].panelDisplay = "none";
    this.objects[id].panelBorderStyle	= "groove";
    this.objects[id].tableObj.setAttribute('border','0px');
    this.objects[id].tableObj.setAttribute('cellSpacing','0px');
    this.objects[id].tableObj.setAttribute('cellPadding','0px');
    this.objects[id].tableObj.insertRow(0);
    this.objects[id].totalTabs 	= 0;
    this.objects[id].tabNames 		= [];
    for(var ww=0; ww<names.length; ww++)
      this.objects[id].tabNames[ww] = names[ww];
    this.objects[id].fontFamilyTab	= "normal";
    this.objects[id].fontSizeText	= '12px';
    this.objects[id].fontStyleTab 	= "normal"
    this.objects[id].colorText		= "black";
    this.objects[id].colorTextSelected	= "white";
    this.objects[id].typeCursor	= "normal";
    this.objects[id].appendChild(this.objects[id].tableObj);
    for(i=0;i<names.length;i++)
    {
      this.addTab(id,names[i]);
      this.setPropertyTab(id,i);
    }
    this.setPropertyPanel(id);
	this.addPropertyMethod(id);
	if(attrib)
      this.setObjAttrib(id,attrib,attrib.getActualEnv());
	return this.objects[id];
  },
  getObject : function(id)
  {
    return this.objects[id];
  },
  getActualTab : function(id)
  {
	return this.objects[id].actualTab;  
  },
  getCellGridPanel : function(id,panelNumber,row,col)
  {
  	return this.objects[id].panel[panelNumber].tableGrid.rows[row].cells[col];
  },
  getGridPanel : function(id,panelNumber)
  {
  	return this.objects[id].panel[panelNumber];
  },
  hide : function(id)
  {
    this.objects[id].style.display='none';
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

  onMouseDown : function(id,row,func)
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
  panelHide : function(id)
  {
    for(i=0;i<this.objects[id].totalTabs;i++)
    {
      this.objects[id].panel[i].style.display="none";
    }
  },
  showPanel : function(id,tabNum)
  {
    for(i=0;i<this.objects[id].totalPanel;i++)
    {
      if(i==tabNum)
        this.objects[id].panel[i].style.display="block";
      else
        this.objects[id].panel[i].style.display="none";
    }
	this.selectTab(id,tabNum);
  },
  setPropertyPanel : function(id)
  {
    for(i=0;i<this.objects[id].totalTabs;i++)
    {
      this.objects[id].panel[i].style.display			= 	this.objects[id].panelDisplay;
      this.objects[id].panel[i].style.borderStyle		= 	this.objects[id].panelBorderStyle;
      this.objects[id].panel[i].style.borderWidth		= 	"1px";
      this.objects[id].panel[i].style.width 			= 	this.objects[id].panelWidth+"px";
      this.objects[id].panel[i].style.height			= 	this.objects[id].panelHeight+"px";
      this.objects[id].panel[i].style.backgroundColor	= 	this.objects[id].bgPanel;
      this.objects[id].panel[i].style.overflow      	=	"hidden";
    }
  },
  setBorderWidthPanel : function(id, borderWidth)
  {
    for(i=0;i<this.objects[id].totalTabs;i++)
    {
      this.objects[id].panel[i].style.borderWidth = borderWidth+"px";
    }
  },
  setPanelAutoScroll : function(id,tabNum)
  {
    this.objects[id].panel[tabNum].style.overflow     = "auto";
  },
  setPanelHidden : function(id,tabNum)
  {
    this.objects[id].panel[tabNum].style.overflow     = "hidden";
  },
  hideTab : function(id,tabNum)
  {
	this.objects[id].tableObj.rows[0].cells[tabNum*3].innerHTML="";
    this.objects[id].tableObj.rows[0].cells[tabNum*3+1].innerHTML="";
    this.objects[id].tableObj.rows[0].cells[tabNum*3+2].innerHTML="";
  },
  showTab : function(id,tabNum)
  {
    this.objects[id].tableObj.rows[0].cells[tabNum*3].appendChild(this.imgs[id+'izq'+tabNum*3]);
    this.objects[id].tableObj.rows[0].cells[tabNum*3+1].style.backgroundImage = "url("+this.pathImgs+this.imgsOff[1]+")";
    this.objects[id].tableObj.rows[0].cells[tabNum*3+2].appendChild(this.imgs[id+'der'+tabNum*3]);
  	this.objects[id].tableObj.rows[0].cells[tabNum*3].onmousedown   = new Function("tabs.selectTab('"+id+"',"+parseInt(""+tabNum)+")");
	this.objects[id].tableObj.rows[0].cells[tabNum*3+1].innerHTML='';
	this.objects[id].tableObj.rows[0].cells[tabNum*3+1].innerHTML=this.objects[id].tabNames[tabNum];
  },
  setCaption : function(id, tabNum, cpt)
  {
  	this.objects[id].tabNames[tabNum]=cpt;
  	this.objects[id].tableObj.rows[0].cells[tabNum*3+1].innerHTML=this.objects[id].tabNames[tabNum];
  }, 
  setBorderStylePanel : function(id,borderStyle)
  {
    for(i=0;i<this.objects[id].totalTabs;i++)
    {
      this.objects[id].panelBorderStyle = borderStyle;
      this.objects[id].panel[i].style.borderStyle	= this.objects[id].panelBorderStyle;
    }
  },
  setPropertyTab : function(id,tabNum)
  {
    this.objects[id].tableObj.rows[0].cells[tabNum*3+1].style.fontSize = this.objects[id].fontSizeText;
    this.objects[id].tableObj.rows[0].cells[tabNum*3+1].style.color = this.objects[id].colorText;
    this.objects[id].tableObj.rows[0].cells[tabNum*3+1].style.fontFamily = this.objects[id].fontFamilyTab;
    this.objects[id].tableObj.rows[0].cells[tabNum*3+1].style.fontStyle=this.objects[id].fontStyleTab;
    this.setcursorType(id,this.objects[id].typeCursor);
    this.objects[id].tableObj.rows[0].cells[tabNum*3+1].sts=false;
  },
  setcursorType : function(id,type)
  {
    this.objects[id].style.cursor=type;
  },
  setPositionXY : function(id,x,y)
  {
    if(this.objects[id].style.position!='absolute')
    {
      this.objects[id].style.position='absolute';
    }
    this.objects[id].style.left=x+'px';
    this.objects[id].style.top=y+'px';
  },
  setRelativePosition : function(id)
  {
    this.objects[id].style.left='0px';
    this.objects[id].style.top='0px';
    this.objects[id].style.position='relative';
  },
  setSpacing : function(id,spacing, padding)
  {
  	for(i=0;i<this.objects[id].panel.length;i++)
	{
	  this.objects[id].panel[i].tableGrid.setAttribute('cellSpacing',spacing);
	  this.objects[id].panel[i].tableGrid.setAttribute('cellPadding',padding);
	}
  },
  setSpacingTab : function(id,tab, spacing, padding)
  {
  	this.objects[id].panel[tab].tableGrid.setAttribute('cellSpacing',spacing);
	this.objects[id].panel[tab].tableGrid.setAttribute('cellPadding',padding);
  },
  setHeightRow : function(id,tab,row,h)
  {
  	this.objects[id].panel[tab].tableGrid.rows[row].style.height = h+'px';
  },
  showColorText : function(id,tabNum)
  {
    if(!this.objects[id].tableObj.rows[0].cells[tabNum*3+1].sts)
    this.objects[id].tableObj.rows[0].cells[tabNum*3+1].style.color = this.objects[id].colorText;
  },
  showColorTextSelected : function(id,tabNum)
  {
    this.objects[id].tableObj.rows[0].cells[tabNum*3+1].style.color = this.objects[id].colorTextSelected;
  },
  setSizeText : function(id,val)
  {
    this.objects[id].fontSizeText=val;
    for(i=0;i<this.objects[id].totalTabs;i++)
    {
      this.objects[id].tableObj.rows[0].cells[i*3+1].style.fontSize = this.objects[id].fontSizeText+'px';
    }
  },
  setFontFamily : function(id,fontFamilyTab)
  {
    this.objects[id].fontFamilyTab=fontFamilyTab;
    for(i=0;i<this.objects[id].totalTabs;i++)
    {
      this.objects[id].tableObj.rows[0].cells[3*i+1].style.fontFamily=this.objects[id].fontFamilyTab;
    }
  },
  setFontCellPanel : function(id,fontFamily,sizeFont,color,panelNum,row,col)
  {
  	this.objects[id].panel[panelNum].tableGrid.rows[row].cells[col].style.fontFamily = fontFamily;
	this.objects[id].panel[panelNum].tableGrid.rows[row].cells[col].style.fontSize = sizeFont+'px';
	this.objects[id].panel[panelNum].tableGrid.rows[row].cells[col].style.color = color;
  },
  setHeightCellPanel : function(id,row,col,panelNum,height)
  {
	this.objects[id].panel[panelNum].tableGrid.rows[row].cells[col].style.height = height+'px';
  },
  setFontStyle : function(id,fontStyleTab)
  {
    this.objects[id].fontStyleTab=fontStyleTab;
    for(i=0;i<this.objects[id].totalTabs;i++)
    {
      this.objects[id].tableObj.rows[0].cells[3*i+1].style.fontStyle=this.objects[id].fontStyleTab;
    }
  },
  setSizePanel : function(id,sizex,sizey)
  {
    this.objects[id].panelWidth 	= sizex;
    this.objects[id].panelHeight 	= sizey;
    this.setPropertyPanel(id);
  },
  setObjAttrib : function(id,objAttr,env)
  {
	this.objects[id].loadBGImg = objAttr.getLoadBGImg();
    this.objects[id].bgPanel 		= objAttr.Color.bgTabsPanel[env];
    this.objects[id].panelDisplay 	= "none";
    this.objects[id].panelBorderStyle	= objAttr.Border.borderStyleTabPanel[env];
    this.objects[id].fontFamilyTab = objAttr.Font.tabs[env];
    this.objects[id].fontStyleTab = objAttr.Font.styleTab[env];
    this.objects[id].typeCursor= 'normal';
    this.objects[id].colorText=objAttr.Color.tabsColorText[env];
    this.objects[id].colorTextSelected=objAttr.Color.tabsColorTextSelected[env];
    this.objects[id].fontSizeText=objAttr.Size.tabsText[env];
    for(i=0;i<this.objects[id].totalTabs;i++)
    {
      this.showColorText(id,i);
      this.setPropertyTab(id,i);
    }
    this.setPropertyPanel(id);
	if(this.objects[id].loadBGImg)
	{	
	  this.setBgBodyImg(id, objAttr.BgImg.bgPanel[env]);
	  this.imgsOn[0]= '/'+objAttr.BgImg.tabLeftOn[env];
	  this.imgsOn[1]= '/'+objAttr.BgImg.tabCenterOn[env];
	  this.imgsOn[2]= '/'+objAttr.BgImg.tabRightOn[env];
	  this.imgsOff[0]= '/'+objAttr.BgImg.tabLeftOff[env];
	  this.imgsOff[1]= '/'+objAttr.BgImg.tabCenterOff[env];
	  this.imgsOff[2]= '/'+objAttr.BgImg.tabRightOff[env];
	}
  },
  setObjAttribToAll : function(objAttrib,env)
  {
    for(i=0;i<this.ids.length;i++)
    {
      this.setObjAttrib(this.ids[i],attrib,env);
    }	
},  
  selectTab : function(id,tabNum, cancelEvent)
  {
    for(i=0;i<this.objects[id].totalTabs;i++)
    {
      if(i!=tabNum)
      {
        this.imgs[id+'izq'+i*3].src    = this.pathImgs+this.imgsOff[0];
        this.imgs[id+'centro'+i*3].src = this.pathImgs+this.imgsOff[1];
		    this.imgs[id+'der'+i*3].src    = this.pathImgs+this.imgsOff[2];
        this.objects[id].tableObj.rows[0].cells[i*3+1].style.backgroundImage = "url("+this.pathImgs+this.imgsOff[1]+")";
        this.showColorText(id,i,this.objects[id].colorText);
        this.objects[id].panel[i].style.display="none";
        this.objects[id].tableObj.rows[0].cells[i*3+1].sts=false;
        this.showColorText(id,i);
      }
      else
      {
        this.imgs[id+'izq'+i*3].src	= this.pathImgs+this.imgsOn[0];
        this.imgs[id+'centro'+i*3].src = this.pathImgs+this.imgsOn[1];
        this.imgs[id+'der'+i*3].src 	= this.pathImgs+this.imgsOn[2];
        this.objects[id].tableObj.rows[0].cells[i*3+1].style.backgroundImage = "url("+this.pathImgs+this.imgsOn[1]+")";
        this.showColorTextSelected(id,i,this.objects[id].colorTextSelected);
        this.objects[id].panel[i].style.display="block";
        this.objects[id].tableObj.rows[0].cells[i*3+1].sts=true;
      }
    }
    this.objects[id].actualTab = tabNum;
    if(!cancelEvent)
      this.onTabSelect[tabNum]();
    
  },

  setBgBodyImg : function(id, bgImg)
  {
  	for (i = 0; i < this.objects[id].totalTabs; i++) 
	{
		this.objects[id].panel[i].style.backgroundImage = "url(" + this.bgImgPath + bgImg + ")";
	}  
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
  },
  textAlignGridPanel : function(id,panelNum,row,col,align)
  {
  	this.objects[id].panel[panelNum].tableGrid.rows[row].cells[col].style.textAlign = align;
  }   
}

