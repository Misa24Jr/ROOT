var popupMenu =
{
  BGCOLOR : "#DEDEDE",
  COLORSELECTED : "#000077",
  COLORDISELECTED : "EFEFEF",
  COLORTEXTSELECTED : "#FFFFFF",
  COLORTEXTDISELECTED : "000000",
  BORDERSTYLE : "outset",
  BORDERSIZE : 0,  
  FONTFAMILY : "italic",
  FONTSTYLE : "normal",
  FONTSIZE : 10,
  ON_CLICK : 0,
  ON_DBLCLICK : 1,
  ON_MOUSEDOWN : 2,
  ON_MOUSEUP : 3,
  ON_MOUSEOUT : 4,
  ON_MOUSEOVER : 5, 
  ON_FOCUS : 6,
  objects: new Array,
  ids : new Array,
  x : 0,
  y : 0, 
  bgImgPath :"images/bg/", 
  imgPath :"images/", 
addPropertyMethod : function(id)
{
  popupMenu.objects[id].addRow  =  function( text, imgIcon)
  {
    popupMenu.addRow(id, text, imgIcon);
  }
  popupMenu.objects[id].addEventToRow  =  function( row, funct)
  {
    popupMenu.addEventToRow(id, row, funct);
  }
  popupMenu.objects[id].addToBody  =  function()
  {
    popupMenu.addToBody(id);
  }
  popupMenu.objects[id].activePopupMenu  =  function(objExt,typeEvent)
  {
    popupMenu.activePopupMenu(id,objExt,typeEvent);
  }
  popupMenu.objects[id].captureClick =  function()
  {
    popupMenu.captureClick(id);
  }
  popupMenu.objects[id].clearMenu  =  function()
  {
    popupMenu.clearMenu(id);
  }
  popupMenu.objects[id].deleteRow =  function(row)
  {
    popupMenu.deleteRow(id,row);
  }
  popupMenu.objects[id].getObject  =  function()
  {
    return popupMenu.getObject(id);
  }
  popupMenu.objects[id].hide  =  function()
  {
    popupMenu.hide(id);
  }
  popupMenu.objects[id].hideAll  =  function()
  {
    popupMenu.hideAll();
  }
  popupMenu.objects[id].loadArrayFunctions  =  function( array)
  {
    popupMenu.loadArrayFunctions(id, array);
  }
  popupMenu.objects[id].loadArrayOptions  =  function( array)
  {
    popupMenu.loadArrayOptions(id, array);
  }
  popupMenu.objects[id].loadPopupMenuStruct  =  function(PMStruct)
  {
    popupMenu.loadPopupMenuStruct(id,PMStruct);
  }
  popupMenu.objects[id].repaint  =  function()
  {
    popupMenu.repaint(id);
  }
  popupMenu.objects[id].setBackGroundColor  =  function( bgColor)
  {
    popupMenu.setBackGroundColor(id, bgColor);
  }
  popupMenu.objects[id].setBorderSize  =  function( borderSize)
  {
    popupMenu.setBorderSize(id, borderSize);
  }
  popupMenu.objects[id].setBorderStyle  =  function( borderStyle)
  {
    popupMenu.setBorderStyle(id, borderStyle);
  }
  popupMenu.objects[id].setDimension  =  function( w, h)
  {
    popupMenu.setDimension(id, w, h);
  }
  popupMenu.objects[id].setObjAttrib  =  function( objAttr, env)
  {
    popupMenu.setObjAttrib(id, objAttr, env);
  }
  popupMenu.objects[id].setObjAttribToAll  =  function( objAttrib, env)
  {
    popupMenu.setObjAttribToAll(objAttrib,env);
  }
  popupMenu.objects[id].setColorRow  =  function( row, color)
  {
    popupMenu.setColorRow(id, row, color);
  }
  popupMenu.objects[id].setColorDiselected  =  function( color)
  {
    popupMenu.setColorDiselected(id, color);
  }
  popupMenu.objects[id].setColorSelected  =  function( color)
  {
    popupMenu.setColorSelected(id, color);
  }
  popupMenu.objects[id].setFontSelected  =  function( fontFamily, fontStyle, size, color)
  {
    popupMenu.setFontSelected(id, fontFamily, fontStyle, size, color);
  }
  popupMenu.objects[id].setFontDiselected  =  function( fontFamily, fontStyle, size, color)
  {
    popupMenu.setFontDiselected(id, fontFamily, fontStyle, size, color);
  }
  popupMenu.objects[id].setFontRow  =  function( row, fontFamily, fontStyle, size, color)
  {
    popupMenu.setFontRow(id, row, fontFamily, fontStyle, size, color);
  }
  popupMenu.objects[id].setTextColorSelected  =  function( color)
  {
    popupMenu.setTextColorSelected(id, color);
  }
  popupMenu.objects[id].setTextColorDiselected  =  function( color)
  {
    popupMenu.setTextColorDiselected(id, color);
  }
  popupMenu.objects[id].setPosition  =  function( x, y)
  {
    popupMenu.setPosition(id, x, y);
  }
  popupMenu.objects[id].setTextColorRow  =  function( row, color)
  {
    popupMenu.setTextColorRow(id, row, color);
  }
  popupMenu.objects[id].show  =  function()
  {
    popupMenu.show(id);
  }
  popupMenu.objects[id].setBgBodyImg  =  function(bgImg)
  {
    popupMenu.setBgBodyImg(id, bgImg);
  }
  popupMenu.objects[id].setLoadBGImg  =  function(activeLoad)
  {	
    popupMenu.setLoadBGImg(id, activeLoad);
  }
  popupMenu.objects[id].setLoadBGImgAll  =  function(activeLoad)
  {
    popupMenu.setLoadBGImgAll(activeLoad);
  }
  popupMenu.objects[id].setImgBarSelected  =  function(imgBarSelected)
  {
    popupMenu.setImgBarSelected(id, imgBarSelected);
  }
  popupMenu.objects[id].setImgPanelSelected  =  function(imgPanelSelected)
  {
    popupMenu.setImgPanelSelected(id, imgPanelSelected);
  }
  popupMenu.objects[id].getShowClickFunct = function()
  {
  	return popupMenu.getShowClickFunct(id);
  }
  popupMenu.objects[id].setBorderPanel = function(style, widthBorder)
  {
  	popupMenu.setBorderPanel(id, style, widthBorder);
  }
  popupMenu.objects[id].setFocus = function()
  {
  	popupMenu.setFocus(id);
  }
  popupMenu.objects[id].onFocus = function(funct)
  {
  	popupMenu.onFocus(id, funct);
  }
  popupMenu.objects[id].onEsc = function(funct)
  {
    popupMenu.onEsc(id, funct);  
  }
  popupMenu.objects[id].getItemIndex = function()
  {
  	return popupMenu.getItemIndex(id);
  }
  popupMenu.objects[id].getOption = function(index)
  {
  	return popupMenu.getOption(id,index);
  }
  popupMenu.objects[id].setExtObj = function(extObj)
  {
  	popupMenu.setExtObj(id, extObj);
  }
},
  setSelectedRow : function(id, row)
  {
  	var r = popupMenu.objects[id].botonFocus.row;
  	if(r >= popupMenu.objects[id].table.rows.length)
	  r = 0;
	if(r < 0)  
	  r = popupMenu.objects[id].table.rows.length-1;
  	popupMenu.setColorRow(id,r, popupMenu.objects[id].colorDiselected);
	popupMenu.setFontRow(id,r, popupMenu.objects[id].diselectedFamily, popupMenu.objects[id].diselectedStyle, popupMenu.objects[id].diselectedSize,popupMenu.objects[id].textColorDiselected);
	if (popupMenu.objects[id].loadBGImg) 
	{
	  popupMenu.objects[id].table.rows[r].cells[1].style.backgroundImage = "url(" + popupMenu.bgImgPath + popupMenu.objects[id].imgPanelSelected + ")";
	  popupMenu.objects[id].table.rows[r].cells[0].style.backgroundImage = "url(" + popupMenu.bgImgPath + popupMenu.objects[id].imgPanelSelected + ")";
	}
	
	if(row >= popupMenu.objects[id].table.rows.length)
	  row = 0;
	if(row < 0)  
	  row = popupMenu.objects[id].table.rows.length-1;
	popupMenu.objects[id].botonFocus.row = row;  
	popupMenu.setColorRow(id,row, popupMenu.objects[id].colorSelected);
	popupMenu.setFontRow(id,row, popupMenu.objects[id].selectedFamily, 
	                     popupMenu.objects[id].selectedStyle, 
	                     popupMenu.objects[id].selectedSize,
	                     popupMenu.objects[id].textColorSelected);
	if (popupMenu.objects[id].loadBGImg) 
	{
	  popupMenu.objects[id].table.rows[row].cells[1].style.backgroundImage = "url(" + popupMenu.bgImgPath + popupMenu.objects[id].imgBarSelected + ")";
	  popupMenu.objects[id].table.rows[row].cells[0].style.backgroundImage = "url(" + popupMenu.bgImgPath + popupMenu.objects[id].imgBarSelected + ")";
	}
	popupMenu.objects[id].itemIndex = row;
  },
  addRow : function(id, text, imgIcon)
  {
  	var row = this.objects[id].table.rows.length;
	this.objects[id].table.insertRow(row);
	this.objects[id].table.rows[row].insertCell(0);
	this.objects[id].table.rows[row].insertCell(1);
	if (this.addRow.arguments[2] != null)
	{
		var d = document.createElement('img');
		d.src = this.imgPath + imgIcon;
		d.style.width = '15px';
		d.style.height ='15px';
		this.objects[id].table.rows[row].cells[0].appendChild(d);
	} 
	this.objects[id].table.rows[row].cells[1].innerHTML= text;
	this.objects[id].table.rows[row].cells[1].style.textAlign = 'center';
	this.objects[id].table.rows[row].cells[1].style.backgroundColor = this.objects[id].colorDiselected;
	this.objects[id].table.rows[row].cells[1].style.color = this.objects[id].colorTextDiselected;
	this.objects[id].table.rows[row].cells[1].style.fontFamily = this.objects[id].diselectedFamily;
	this.objects[id].table.rows[row].cells[1].style.fontStyle = this.objects[id].diselectedStyle;
	this.objects[id].table.rows[row].cells[1].style.fontSize = this.objects[id].diselectedSize+'px';
	this.objects[id].table.rows[row].cells[1].style.borderWidth = '0px';
	this.objects[id].table.rows[row].cells[0].style.backgroundColor = this.objects[id].colorDiselected;
	this.objects[id].table.rows[row].cells[0].style.color = this.objects[id].colorTextDiselected;
	this.objects[id].table.rows[row].cells[0].style.fontFamily = this.objects[id].diselectedFamily;
	this.objects[id].table.rows[row].cells[0].style.fontStyle = this.objects[id].diselectedStyle;
	this.objects[id].table.rows[row].cells[0].style.fontSize = this.objects[id].diselectedSize+'px';
	this.objects[id].table.rows[row].cells[0].style.borderWidth = '0px';
	
	this.objects[id].table.rows[row].cells[0].onmouseover = function(e)
	{
		popupMenu.setSelectedRow(id,row);
	}
	this.objects[id].table.rows[row].cells[1].onmouseover = function(e)
	{
		popupMenu.setSelectedRow(id,row);
	}
	if(popupMenu.objects[id].loadBGImg)
	{
		popupMenu.objects[id].table.rows[row].cells[1].style.backgroundImage = "url(" + popupMenu.bgImgPath + popupMenu.objects[id].imgPanelSelected + ")";
		popupMenu.objects[id].table.rows[row].cells[0].style.backgroundImage = "url(" + popupMenu.bgImgPath + popupMenu.objects[id].imgPanelSelected + ")";
	}
  },
  
  addEventToRow : function(id, row, funct)
  {
  	this.objects[id].table.rows[row].onclick = new Function(funct);
  },

  addToBody : function(id)
  {
    document.body.appendChild(this.objects[id]);
  },
  activePopupMenu : function(id,objExt, typeEvent)
  {
  	this.objects[id].objExt = objExt;
  	switch(typeEvent)
	{
		case popupMenu.ON_CLICK :
		{
			objExt.onclick = function()
			{
				popupMenu.captureClick(id);
				popupMenu.show(id);
			}
			break;
		}
		case popupMenu.ON_FOCUS :
		{
			objExt.onfocus = function()
			{
				popupMenu.captureClick(id);
				popupMenu.show(id);
			}
			break;
		}
  		case popupMenu.ON_DBLCLICK : 
		{
			objExt.ondblclick = function()
			{
				popupMenu.captureClick(id);
				popupMenu.show(id);
			}
			break;
		}
  		case popupMenu.ON_MOUSEDOWN : 
		{
			objExt.onmousedown = function()
			{
				popupMenu.captureClick(id);
				popupMenu.show(id);
			}
			break;
		} 
  		case popupMenu.ON_MOUSEUP : 
		{
			objExt.onmouseup = function()
			{
				popupMenu.captureClick(id);
				popupMenu.show(id);
			}
			break;
		}
  		case popupMenu.ON_MOUSEOUT : 
		{
			objExt.onmouseout = function()
			{
				popupMenu.captureClick(id);
				popupMenu.show(id);
			}
			break;
		}
  		case popupMenu.ON_MOUSEOVER : 
		{
			objExt.onmouseover = function()
			{
				popupMenu.captureClick(id);
				popupMenu.show(id);
			}
			break;
		}
	}	
  },
  setExtObj : function(id, extObj)
  {
    this.objects[id].objExt = extObj;	
  },
  getShowClickFunct : function(id)
  {
  	var f = function()
  	{	
  	  popupMenu.captureClick(id);
	  popupMenu.show(id);
	}
	return f;
  },
  captureClick: function(id)
  {
    document.onclick = function(e)
    {
      document.offsetTop = 0;
	  if (popupMenu.objects[id].mostrar == false)
	  {
	  	popupMenu.hideAll();
	  }
	  else
	  {
		popupMenu.hideAll();
		popupMenu.show(id);
		popupMenu.objects[id].mostrar = false;
		this.IE = document.all?true:false;
     	var incr=0;
    	if (this.IE) 
    	{ 
      	  popupMenu.objects[id].x = event.clientX ;
      	  popupMenu.objects[id].y = event.clientY ;
    	} 
    	else 
    	{ 
      	  popupMenu.objects[id].x = e.clientX;
      	  popupMenu.objects[id].y = e.clientY;  
    	}
		popupMenu.setPosition(id, popupMenu.objects[id].x, popupMenu.objects[id].y);	
	  }  
    }
  },  
  clearMenu : function(id)
  {
  	for(i=this.objects[id].table.rows.length-1;i>=0;i--)
	{
		this.objects[id].table.deleteRow(i);
	}
  },
  create : function(id,w,h)
  {
  	this.ids[this.ids.length] = id;
	this.objects[id] = document.createElement("div");
	this.objects[id].nameComponent = 'popupmenu';
	this.objects[id].objExt = null;
	this.objects[id].onESC = new Function('');
	this.objects[id].isShow = false;
	this.setBorderPanel(id,'outset',1);
	this.objects[id].loadBGImg = true;
	this.objects[id].imgBarSelected = "";
	this.objects[id].imgPanelSelected = "";
	this.objects[id].style.position = "absolute";
	this.objects[id].style.zIndex = 200000;
	this.setDimension(id, w, h);
	this.objects[id].x = 0;
	this.objects[id].y = 0;
	this.objects[id].table = document.createElement("table");
	this.objects[id].table.setAttribute('border',0);
	this.objects[id].table.setAttribute('cellSpacing',0);
	this.objects[id].table.setAttribute('cellPadding',0);
	this.objects[id].appendChild(this.objects[id].table);
	this.objects[id].table.style.height = "100%";
	this.objects[id].table.style.width = "100%";
	this.objects[id].mostrar = false;
	this.setBorderStyle(id, this.BORDERSTYLE);
	this.setBorderSize(id, this.BORDERSIZE);
	this.setBackGroundColor(id,this.BGCOLOR);
	this.setColorSelected(id,this.COLORSELECTED);
	this.setTextColorSelected(id,this.COLORTEXTSELECTED);
	this.setFontSelected(id, this.FONTFAMILY, this.FONTSTYLE, this.FONTSIZE, this.COLORTEXTSELECTED);
	this.setColorDiselected(id, this.COLORDISELECTED);
	this.setTextColorDiselected(id,this.COLORTEXTDISELECTED);
	this.setFontDiselected(id, this.FONTFAMILY, this.FONTSTYLE, this.FONTSIZE, this.COLORTEXTDISELECTED); 
    this.hide(id);
	this.addPropertyMethod(id);
	this.objects[id].botonFocus = document.createElement('input');
	this.objects[id].botonFocus.type='button';
	this.objects[id].botonFocus.style.width='1px';
	this.objects[id].botonFocus.style.height='1px';
	this.objects[id].botonFocus.style.left='-10000px';
	this.objects[id].botonFocus.style.top='-10000px';
	this.objects[id].botonFocus.style.position = 'absolute';
	this.objects[id].botonFocus.row = -1;
	this.objects[id].botonFocus.onFocusFunct = new Function('');
	this.objects[id].itemIndex=-1;
	document.body.appendChild(this.objects[id].botonFocus);
	this.objects[id].botonFocus.onfocus = function(e)
	{
	  popupMenu.objects[id].botonFocus.onFocusFunct();
	}
	
	this.objects[id].botonFocus.onkeydown = function(e)
    {
      if(!e)
	  {
	    if(window.event)
	  	{
	  	  e=window.event;
	  	}
	  }
	  if(typeof(e.keyCode)=='number')
	  {
	  	e = e.keyCode;
	  }
	  else
	  {
	    if(typeof(e.which)=='number')
	    {
	    	e=e.which;
	    } 
	    else
	    {
	    	e=e.charCode;
	    }
	  }	
	  switch(e)
	  {
	  	case 40 : 
	  	{ 
	  	  var newRow = popupMenu.objects[id].botonFocus.row + 1;
	  	  popupMenu.setSelectedRow(id,newRow);
	  	  break;
	  	}
	  	case 38 : 
	  	{
	  	  var newRow = popupMenu.objects[id].botonFocus.row - 1;
	  	  popupMenu.setSelectedRow(id,newRow);
	  	  break;
	  	}
	  	case 13 : 
	  	{
	  	  popupMenu.objects[id].itemIndex = popupMenu.objects[id].botonFocus.row;	
	  	  popupMenu.hide(id);	
	  	  popupMenu.objects[id].table.rows[popupMenu.objects[id].botonFocus.row].onclick();
	  	  break;
	  	}
	  	case 27 :
	  	{	
	  	  popupMenu.hide(id);
	  	  popupMenu.objects[id].onESC();
	  	  break;
	  	}
	  }
    }
    if(attrib)
      this.setObjAttrib(id,attrib,attrib.getActualEnv()); 
	return this.objects[id];
  },
  getItemIndex : function(id)
  {
  	return popupMenu.objects[id].itemIndex;
  },
  getOption : function(id, index)
  {
  	return this.objects[id].table.rows[index].cells[1].innerHTML;
  },
  onEsc : function(id, funct)
  {
    this.objects[id].onESC = new Function(funct);  
  },
  setFocus : function(id)
  {
  	this.objects[id].botonFocus.focus();
  },
  onFocus : function(id, funct)
  {
    this.objects[id].botonFocus.onFocusFunct = new Function(funct);
  },
  deleteRow: function(id,row)
  {
  	this.objects[id].table.deleteRow(this.objects[id].row);
  },
  getObject : function(id)
  {
    return this.objects[id];
  },
  hide : function(id)
  {
    this.objects[id].style.display = "none";
    if(this.objects[id].isShow)
      if(this.objects[id].objExt!=null)
        this.objects[id].objExt.focus();	
    this.objects[id].isShow = false;
  },
  hideAll : function()
  {
  	for(i=0;i<this.ids.length;i++)
	{
	  this.objects[this.ids[i]].style.display = "none";
	  if(this.objects[this.ids[i]].objExt!=null)
      {
      	if(this.objects[this.ids[i]].isShow)
          this.objects[this.ids[i]].objExt.focus();	
      }
      this.objects[this.ids[i]].isShow = false;
	}
  },
  loadArrayFunctions : function(id, array)
  {
  	for(i=0;(i<array.length)&&(i<this.objects[id].table.rows.length);i++)
	{
	  this.addEventToRow(id,i,array[i]);
	}
  },
  loadArrayOptions : function(id, array)
  {
  	this.clearMenu(id);
	for(i=0;i<array.length;i++)
	{
	  this.addRow(id,array[i]);
	}
  },
  loadPopupMenuStruct : function(id,PMStruct)
  {
    this.loadArrayOptions(id,PMStruct.options);	
	this.loadArrayFunctions(id,PMStruct.functs);
  },
  repaint : function(id)
  {
  	for(i=0;i<this.objects[id].table.rows.length;i++)
	{
	  this.setColorRow(id,i, popupMenu.objects[id].colorDiselected);
      this.setFontRow(id,i, this.objects[id].diselectedFamily, this.objects[id].diselectedStyle, this.objects[id].diselectedSize,this.objects[id].textColorDiselected);
	}
  },  
  setBackGroundColor : function(id, bgColor)
  {
    this.objects[id].style.backgroundColor = bgColor;
	this.objects[id].table.style.backgroundColor = bgColor;
  },
  setBorderSize : function(id, borderSize)
  {
    this.objects[id].table.style.borderWidth = borderSize + "px";
  },
  setBorderStyle : function(id, borderStyle)
  {
    this.objects[id].table.style.borderStyle = borderStyle;
  },
  setBorderPanel : function(id, style, widthBorder) 
  {
  	this.objects[id].style.borderStyle =style;
	this.objects[id].style.borderWidth =widthBorder+'px';
  },
  setDimension : function(id, w, h)
  {
    this.objects[id].w = w;
    this.objects[id].h = h;
    this.objects[id].style.width = w+'px';
    this.objects[id].style.height = h+'px';
  },
  setObjAttrib : function(id, objAttr, env)
  {
    this.setBackGroundColor(id,objAttr.Color.bgPopupMenu[env]);
    this.setBorderStyle(id,objAttr.Border.borderPopupMenu[env]);
    this.setColorDiselected(id,objAttr.Color.bgDiselected[env]);
    this.setColorSelected(id,objAttr.Color.bgSelected[env]);
	this.setFontDiselected(id,objAttr.Font.pmFamilyDiselected[env], objAttr.Font.styleDiselected[env], objAttr.Size.PMFontDiselected[env], objAttr.Color.pmTextDiselected[env]);
    this.setFontSelected(id,objAttr.Font.pmFamilySelected[env], objAttr.Font.styleSelected[env], objAttr.Size.PMFontSelected[env], objAttr.Color.pmTextSelected[env]);
	this.repaint(id);
	if(this.objects[id].loadBGImg)
	{
		this.setImgPanelSelected(id, objAttr.BgImg.bgPanel[env]);
		this.setImgBarSelected(id, objAttr.BgImg.bgSelected[env]);
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
  setColorRow : function(id, row, color)
  {
    this.objects[id].table.rows[row].cells[1].style.backgroundColor = color;
  },
  setColorDiselected : function(id, color)
  {
    this.objects[id].colorDiselected = color;
  },
  setColorSelected : function(id, color)
  {
    this.objects[id].colorSelected = color;
  },
  setFontSelected : function(id, fontFamily, fontStyle, size, color)
  {
  	this.objects[id].selectedFamily = fontFamily;
	this.objects[id].selectedStyle = fontStyle;
	this.objects[id].selectedSize = size;
	this.setTextColorSelected(id, color);
  },
  setFontDiselected : function(id, fontFamily, fontStyle, size, color)
  {
  	this.objects[id].diselectedFamily = fontFamily;
	this.objects[id].diselectedStyle = fontStyle;
	this.objects[id].diselectedSize = size;
	this.setTextColorDiselected(id, color);
  },
  setFontRow : function(id, row, fontFamily, fontStyle, size, color)
  {
    this.objects[id].table.rows[row].cells[1].style.fontFamily = fontFamily;
	this.objects[id].table.rows[row].cells[1].style.fontStyle = fontStyle;
	this.objects[id].table.rows[row].cells[1].style.fontSize = size+'px';
	popupMenu.setTextColorRow(id,row, color);
  },
  setTextColorSelected : function(id, color)
  {
  	this.objects[id].textColorSelected = color;
  },  
  setTextColorDiselected : function(id, color)
  {
  	this.objects[id].textColorDiselected = color;
  },
  setPosition : function(id, x, y)
  {
    this.objects[id].style.left = x+'px';
    this.objects[id].style.top = y+'px';
	this.objects[id].x = x;
	this.objects[id].y = y;
  },
  setTextColorRow : function(id, row, color)
  {
  	this.objects[id].table.rows[row].cells[1].style.color = color;
  },
  show : function(id)
  {
    this.objects[id].style.display = "block";
	this.objects[id].mostrar = true;
	this.objects[id].isShow = true;
	this.setFocus(id);
  },
  setBgBodyImg : function(id, bgImg)
  {
  	var tf = this.objects[id].table.rows.length;
	for (i = 0; i < tf; i++) 
	{
	  this.objects[id].table.rows[i].cells[1].style.backgroundImage = "url(" + this.bgImgPath + bgImg + ")";
	  this.objects[id].table.rows[i].cells[0].style.backgroundImage = "url(" + this.bgImgPath + bgImg + ")";
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
  setImgBarSelected : function(id, imgBarSelected)
  {
  	this.objects[id].imgBarSelected = imgBarSelected;
  },
  setImgPanelSelected : function(id, imgPanelSelected)
  {
  	this.objects[id].imgPanelSelected = imgPanelSelected;
  }
}