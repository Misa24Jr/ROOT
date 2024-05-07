var dialogs = 
{
  mwObj : new Array(),
  objects: new Array,
  ids: new Array,
  TYPE_ALIGN_CENTER: "center",
  TYPE_ALIGN_LEFT: "left",
  TYPE_ALIGN_RIGHT: "right",
  bgImgPath: "images/bg/",
  botonCloseImgPath: "bg207.jpg",
  transparecyBgImg: "shadow-c.png",
  bgImgDlg: "bg228.jpg",
  botonMinImgPath: "bg207.jpg",
  botonMaxImgPath: "bg207.jpg",
  fontFamilyBottonControl: 'arial',
  fontColorBottonControl: 'white',
  adjY: 0,
  mouseX: 0,
  mouseY: 0,
  mouseXDown: 0,
  mouseYDown: 0,
  mouseXMove: 0,
  mouseYMove: 0,
  totalDialogs: 0,
  pathImg: 'images/difuso.png',
  isClick: false,
  STS_CLOSE : 0,
  STS_CREATE : 1,
  STS_SHOW : 2,
  STS_MINIMIZE : 3,
  iconImg: 'images/logo/lapiz.png',
  imgDivModal : "transparente.gif",  
  menuProperty: 
  {
    imgBar: 'url(images/bg/bg211.jpg)',
    imgBarSelected: 'url(images/bg/bg201.jpg)',
    imgPanel: 'url(images/bg/bg211.jpg)',
    imgArrow: 'images/next.gif',
    sizeFlecha: 12,
    borderStyle: 'none',
    borderStylePanel: 'outset',
    borderWidthPanel: 2,
    colorText: 'black',
    colorTextSubMenu: 'black',
    backgroundColor: 'darkblue',
    colorTextSelected: 'white',
    colorTextDisable: 'gray',
    fontFamily: 'arial',
    fontSize: '12',
    fontWeight: 'normal',
    fontWeightSelected: 'normal'
  },
  addPropertyMethod: function(id)
  {
    dialogs.objects[id].alignTitle = function(typeAlign)
    {
      dialogs.alignTitle(id, typeAlign);
    };
    dialogs.objects[id].addObjToDialog = function(obj, row, col, heightCell, leftMargin)
    {
      dialogs.addObjToDialog(id, obj, row, col, heightCell, leftMargin);
    };
    dialogs.objects[id].alignObjToCell = function(row, col, align)
    {
      dialogs.alignObjToCell(id, row, col, align);
    };
    dialogs.objects[id].addSpace = function(row, col, space)
    {
      dialogs.addSpace(id, row, col, space);
    };
    dialogs.objects[id].addLn = function(row, col, lns)
    {
      dialogs.addLn(id, row, col, lns);
    };
    dialogs.objects[id].close = function()
    {
      dialogs.close(id);
    };
    dialogs.objects[id].destroyDialog = function()
    {
      dialogs.destroyDialog(id);
    };
    dialogs.objects[id].getMouseXY = function(e)
    {
      dialogs.getMouseXY(e);
    };
    dialogs.objects[id].getObject = function()
    {
      return dialogs.getObject(id);
    };
    dialogs.objects[id].hide = function()
    {
      dialogs.hide(id);
    };
    dialogs.objects[id].minimize = function()
    {
      dialogs.minimize(id);
    };
    dialogs.objects[id].maximize = function()
    {
      dialogs.maximize(id);
    };
    dialogs.objects[id].onClickDialog = function(funct)
    {
      dialogs.onClickDialog(id, funct);
    };
    dialogs.objects[id].onClickStsBar = function(funct)
    {
      dialogs.onClickStsBar(id, funct);
    };
    dialogs.objects[id].onDblClickStsBar = function(funct)
    {
      dialogs.onDblClickStsBar(id, funct);
    };
    dialogs.objects[id].onDblClickDialog = function(funct)
    {
      dialogs.onDblClickDialog(id, funct);
    };
    dialogs.objects[id].OnBeforeMinimize = function(funct)
    {
      dialogs.OnBeforeMinimize(id, funct);
    };
    dialogs.objects[id].OnAfterMinimize = function(funct)
    {
      dialogs.OnAfterMinimize(id, funct);
    };
    dialogs.objects[id].OnBeforeMaximize = function(funct)
    {
      dialogs.OnBeforeMaximize(id, funct);
    };
    dialogs.objects[id].OnAfterMaximize = function(funct)
    {
      dialogs.OnAfterMaximize(id, funct);
    };
	dialogs.objects[id].removeObjFromDialog = function(obj, row, col)
    {
      dialogs.removeObjFromDialog(id, obj, row, col);
    };
    dialogs.objects[id].setBgBarImg = function(barImg)
    {
      //dialogs.setBgBarImg(id, barImg);
    };
    dialogs.objects[id].setBgBodyImg = function(bgImg)
    {
      //dialogs.setBgBodyImg(id, bgImg);
    };
    dialogs.objects[id].setEvents = function()
    {
      dialogs.setEvents(id);
    };
    dialogs.objects[id].setResizeDialog = function(x2, y2)
    {
      dialogs.setResizeDialog(id, x2, y2);
    };
    dialogs.objects[id].setPosition = function(x, y)
    {
      dialogs.setPosition(id, x, y);
    };
    dialogs.objects[id].setAdjY = function(adj)
    {
      dialogs.setAdjY(adj);
    };
    dialogs.objects[id].setCenterScreen = function()
    {
      dialogs.setCenterScreen(id);
    };
    dialogs.objects[id].setFullScreen = function()
    {
      dialogs.setFullScreen(id);
    };
    dialogs.objects[id].setEnableMinimize = function(sts)
    {
      dialogs.setEnableMinimize(id, sts);
    };
    dialogs.objects[id].setEnableClose = function(sts)
    {
      dialogs.setEnableClose(id, sts);
    };  
    dialogs.objects[id].setEnableResize = function(sts)
    {
      dialogs.setEnableResize(id, sts);
    };
    dialogs.objects[id].setEnableFullScreen = function(sts)
    {
      dialogs.setEnableFullScreen(id, sts);
    };
    dialogs.objects[id].setMinimizeXY = function(x, y)
    {
      dialogs.setMinimizeXY(id, x, y);
    };
    dialogs.objects[id].sendToFrom = function()
    {
      dialogs.sendToFrom(id);
    };
    dialogs.objects[id].setBlockModal = function()
    {
      dialogs.setBlockModal(id);
    };
    dialogs.objects[id].remBlockModal = function()
    {
      dialogs.remBlockModal(id);
    };
    dialogs.objects[id].show = function()
    {
      dialogs.show(id);
    };
    dialogs.objects[id].showModal = function()
    {
      dialogs.showModal(id);
    };
    dialogs.objects[id].setBodyHeight = function(height)
    {
      dialogs.setBodyHeight(id, height);
    };
    dialogs.objects[id].setWidth = function(width)
    {
      dialogs.setWidth(id, width);
    };
    dialogs.objects[id].setTitle = function(title)
    {
      dialogs.setTitle(id, title);
    };
    dialogs.objects[id].setColorTitle = function(color)
    {
      dialogs.setColorTitle(id, color);
    };
    dialogs.objects[id].setBorderStyleTitleBar = function(borderStyle)
    {
      dialogs.setBorderStyleTitleBar(id, borderStyle);
    };
    dialogs.objects[id].setBorderStyleStsBar = function(borderStyle)
    {
      dialogs.setBorderStyleStsBar(id, borderStyle);
    };
    dialogs.objects[id].setBorderStyleBodyDialog = function(borderStyle)
    {
      dialogs.setBorderStyleBodyDialog(id, borderStyle);
    };
    dialogs.objects[id].setWidthControlButtons = function(value)
    {
      dialogs.setWidthControlButtons(id, value);
    };
    dialogs.objects[id].setHeightControlButtons = function(value)
    {
      dialogs.setHeightControlButtons(id, value);
    };
    dialogs.objects[id].setHeightBarTitle = function(value)
    {
      dialogs.setHeightBarTitle(id, value);
    };
    dialogs.objects[id].setHeightBarSts = function(value)
    {
      dialogs.setHeightBarSts(id, value);
    };
    dialogs.objects[id].setMsg = function(msg,sts)
    {
      dialogs.setMsg(id, msg, sts);
    };
    dialogs.objects[id].setColorTextMsg = function(color)
    {
      dialogs.setColorTextMsg(id, color);
    };
    dialogs.objects[id].setBgColorBarTitle = function(color)
    {
      dialogs.setBgColorBarTitle(id, color);
    };
    dialogs.objects[id].setBgColorBarSts = function(color)
    {
      dialogs.setBgColorBarSts(id, color);
    };
    dialogs.objects[id].setBgColorBodyDialog = function(color)
    {
      dialogs.setBgColorBodyDialog(id, color);
    };
    dialogs.objects[id].setFontBarTitle = function(fontFamily, fontSize, fontColor)
    {
      dialogs.setFontBarTitle(id, fontFamily, fontSize, fontColor);
    };
    dialogs.objects[id].setFontBarSts = function(fontFamily, fontSize, fontColor)
    {
      dialogs.setFontBarSts(id, fontFamily, fontSize, fontColor);
    };
    dialogs.objects[id].setSpacing = function(spacing, padding)
    {
      dialogs.setSpacing(id, spacing, padding);
    };
    dialogs.objects[id].setObjAttrib = function(objAttrib, env)
    {
      dialogs.setObjAttrib(id, objAttrib, env);
    };
    dialogs.objects[id].setObjAttribToAll = function(objAttrib, env)
    {
      dialogs.setObjAttribToAll(objAttrib, env);
    };
    dialogs.objects[id].setLoadBGImg = function(activeLoad)
    {
      dialogs.setLoadBGImg(id, activeLoad);
    };
    dialogs.objects[id].setLoadBGImgAll = function(activeLoad)
    {
      dialogs.setLoadBGImgAll(activeLoad);
    };
    dialogs.objects[id].showGrid = function(sts)
    {
      dialogs.showGrid(id, sts);
    };
    dialogs.objects[id].onHideDialog = function(funct)
    {
      dialogs.onHideDialog(id, funct);
    };
    dialogs.objects[id].onShowDialog = function(funct)
    {
      dialogs.onShowDialog(id, funct);
    };
    dialogs.objects[id].onClickCloseDialog = function(funct)
    {
      dialogs.onClickCloseDialog(id, funct);
    };
    dialogs.objects[id].onClickMinimizeDialog = function(funct, sts)
    {
      dialogs.onClickMinimizeDialog(id, funct, sts);
    };
    dialogs.objects[id].onAfterMinimize = function(funct)
    {
      dialogs.onAfterMinimize(id, funct);
    };
    dialogs.objects[id].onBeforeMinimize = function(funct)
    {
      dialogs.onBeforeMinimize(id, funct);
    };
    dialogs.objects[id].setMinWindowEvent = function(eClose, eMin, eShow)
    {
      dialogs.setMinWindowEvent(id, eClose, eMin, eShow);
    };
    dialogs.objects[id].setMenu = function(structMenuDlg)
    {
      dialogs.setMenu(id, structMenuDlg);
    };
    dialogs.objects[id].setSubMenu = function(structSubMenuDlg)
    {
      dialogs.setSubMenu(id, structSubMenuDlg);
    };
    dialogs.objects[id].hideAllSubMenu = function()
    {
      dialogs.hideAllSubMenu(id);
    };
    dialogs.objects[id].hideAllMenuForAllDlg = function()
    {
      dialogs.hideAllMenuForAllDlg();
    };
    dialogs.objects[id].setFocus = function()
    {
      dialogs.setFocus(id);
    };
    dialogs.objects[id].setPriorPosition = function()
    {
      dialogs.setPriorPosition(id);
    };
	dialogs.objects[id].setSizeCell = function(row,col,width,height)
	{
	  dialogs.setSizeCell(id,row,col,width,height);
	};
	dialogs.objects[id].adjAllMarginObj = function(row, col, margin)
	{
	  dialogs.adjAllMarginObj(id, row, col, margin);
	};
	dialogs.objects[id].leftMarginObj = function(row, col, posObject, margin)
	{
	  dialogs.leftMarginObj(id, row, col, posObject, margin);	
	};
	dialogs.objects[id].setWidthSubCellObj = function(row, col, posObject, width)
	{
	  dialogs.setWidthSubCellObj(id, row, col, posObject, width);
	};
	dialogs.objects[id].setWidthCell = function(row,col,width)
    {
	  dialogs.setWidthCell(id,row,col,width);
    };
    dialogs.objects[id].setHeightCell = function(row,col,height)
	{
	  dialogs.setHeightCell(id,row,col,height);	
    };
	dialogs.objects[id].setStaticOrder = function(isStatic)
	{
	  dialogs.setStaticOrder(id, isStatic);	
	};
	dialogs.objects[id].getTitleDialog = function()
    {
      return dialogs.getTitleDialog(id);
    };
	dialogs.objects[id].getSTS = function()
    {
      return dialogs.getSTS(id);
    };
    dialogs.objects[id].vAlignObjToCell = function(row, col, valign)
    {
      dialogs.vAlignObjToCell(id, row, col, valign);
    };
    dialogs.objects[id].getObjectFromCell = function(objId)
    {	
      return dialogs.getObjectFromCell(id, objId);	
    };
    dialogs.objects[id].setLeftMarginObj = function(obj, margin)
    {
      dialogs.setLeftMarginObj(id, obj, margin);
    };
    dialogs.objects[id].setBottomMarginObj = function(obj, margin)
    {
      dialogs.setBottomMarginObj(id, obj, margin);
    };
	dialogs.objects[id].setTopMarginObj = function(obj, margin)
	{
	  dialogs.setTopMarginObj(id, obj, margin);	
	};
	dialogs.objects[id].bottomMarginObj = function(row, col, posObject, margin)
	{
	  dialogs.bottomMarginObj(id, row, col, posObject, margin);	
	};
	dialogs.objects[id].topMarginObj = function(row, col, posObject, margin)
	{
	  dialogs.topMarginObj(id, row, col, posObject, margin);	
	};
	dialogs.objects[id].getObjInDialog = function(idObj)  
	{
	  return dialogs.getObjInDialog(idObj);	
	};
	dialogs.objects[id].closeAll = function()
	{
	  dialogs.closeAll();	
	};
	dialogs.objects[id].enableScrollMsg = function(velocity, blink, fontFamily, fontSize, fontColor)
	{
	  dialogs.enableScrollMsg(id, velocity, blink, fontFamily, fontSize, fontColor);	
	};
	dialogs.objects[id].disableScrollMsg = function()
	{
	  dialogs.disableScrollMsg(id);	
	};
	dialogs.objects[id].onScrollMsgComplete = function(funct, n)
	{
	  dialogs.onScrollMsgComplete(id, funct, n);
	};
	dialogs.objects[id].getPositionPoint = function()
	{
	  return dialogs.getPositionPoint(id);
	};
	dialogs.objects[id].setImageDivModal = function(imageDivModal)
    {
      dialogs.setImageDivModal(id, imageDivModal);
    };
    dialogs.objects[id].setTransparencyBgImg = function(transparencyImg)
    {
      dialogs.setTransparencyBgImg(transparencyImg);  
    };
    dialogs.objects[id].setIconDlg = function(path, icon)
    {
      dialogs.setIconDlg(id, path, icon);  
    };
    dialogs.objects[id].setIconAllDlg = function(path, icon)
    {
      dialogs.setIconAllDlg(path, icon);  
    };
    dialogs.objects[id].addObject = function(obj,x,y)
    {
      dialogs.addObject(id,obj,x,y);  
    };
    dialogs.objects[id].isByClean = function()
    {
      return dialogs.isByClean(id);
    };
    dialogs.objects[id].setStsModal = function()
    {
      dialogs.setStsModal(id);
    };
    dialogs.objects[id].updateBgBodyImg = function(bgImg)
    {
      dialogs.updateBgBodyImg(id, bgImg);
    };
    
    dialogs.objects[id].setBgBotonClose = function(bgImg)
    {
      dialogs.setBgBotonClose(id, bgImg);
    };
    
    dialogs.objects[id].setPositionObject = function(obj,x,y)
    {
      dialogs.setPositionObject(id,obj,x,y);	
    };
    
    dialogs.objects[id].showButtonHelp = function(){
    	dialogs.showButtonHelp(id)
  	};
  
    dialogs.objects[id].hideButtonHelp = function(){
    	dialogs.hideButtonHelp(id)
    };
  
    dialogs.objects[id].isShowButtonHelp = function(){
  		return dialogs.isShowButtonHelp(id);
    };
  
    dialogs.objects[id].onClickButtonHelp = function(funct){
		dialogs.onClickButtonHelp(id, funct); 	
    };    
    
  },
  
  setPositionObject : function(id,obj,x,y){
	obj.style.position = 'absolute';
	obj.style.left = x+'px';
	obj.style.top = y+'px';   
  },
  
  enableScrollMsg : function(id, velocity, blink, fontFamily, fontSize, fontColor)
  {
  	this.setFontBarSts(id, fontFamily, fontSize, fontColor);
  	this.objects[id].itemCarMsg = 0;
  	this.objects[id].scrollCounter = 0;
  	this.objects[id].scrollCounterDef = 0;
  	this.objects[id].onScrollComplete = new Function('');
  	this.objects[id].idScrollMsg = setInterval('dialogs.scrollMsg('+id+')',velocity);
    this.objects[id].msgBlink = blink;
  },
  
  scrollMsg : function(objElement)
  {
  	var flag = false;
  	objElement.tableSts.rows[0].cells[1].align = 'center';
  	if(objElement.itemCarMsg > objElement.stsMsg.length)
  	{
  	  if(objElement.itemCarMsg > objElement.stsMsg.length+2)
  	  {
  	  	objElement.itemCarMsg=0;
  	  	objElement.scrollCounter++;
  	  	if(objElement.scrollCounter % objElement.scrollCounterDef == 0)
  	  	{
  	  	  flag=true;	
  	  	  objElement.onScrollComplete();
  	    }
  	  }
  	}
  	var c = objElement.stsMsg.substring(0, objElement.itemCarMsg);
  	if(objElement.msgBlink && objElement.itemCarMsg % 2 != 0)
  	  c = '';
  	if(!flag)
  	  objElement.tableSts.rows[0].cells[1].innerHTML = c;
  	objElement.itemCarMsg++;
  },
  
  onScrollMsgComplete : function(id, funct, n)
  {
  	this.objects[id].scrollCounterDef = parseInt(n, 10); 
  	this.objects[id].onScrollComplete = new Function(funct);
  },
  
  disableScrollMsg : function(id)
  {
  	clearInterval(this.objects[id].idScrollMsg);
  	this.objects[id].tableSts.rows[0].cells[1].align = 'left';
  	this.objects[id].tableSts.rows[0].cells[1].innerHTML = this.objects[id].stsMsg;
  	this.setColorTextMsg(id, this.objects[id].actColor);
  },
  
  alignTitle: function(id, typeAlign)
  {
    this.objects[id].tableTitleIcon.rows[0].cells[1].style.textAlign = typeAlign;
  },
  
  addHTMLToDialog: function(id, html, row, col)
  {
    var actSizeRow = this.objects[id].tableBody.rows.length;
    while (actSizeRow <= row) 
    {
      this.objects[id].tableBody.insertRow(actSizeRow);
      actSizeRow = this.objects[id].tableBody.rows.length;
    }
    var actSizeCol = this.objects[id].tableBody.rows[row].cells.length;
    while (actSizeCol <= col) 
    {
      this.objects[id].tableBody.rows[row].insertCell(actSizeCol);
      actSizeCol = this.objects[id].tableBody.rows[row].cells.length;
    }
    this.objects[id].tableBody.rows[row].cells[col].innerHTML = html;
  },
  
  addObject : function(id,obj,x,y)
  {
    obj.style.position = 'absolute';
    obj.style.left = x+'px';
    obj.style.top = y+'px';  
    this.objects[id].divBody.appendChild(obj);
    this.objects[id].relativeObj[this.objects[id].relativeObj.length] = obj; 
  },
  
  hideAllRelativeObj : function(id)
  {  
    for(var i=0; i<this.objects[id].relativeObj.length; i++)  
    { 
      this.objects[id].relativeObj[i].style.display = 'none';  
    }
  },
  
  showAllRelativeObj : function(id)
  {
    for(var i=0; i<this.objects[id].relativeObj.length; i++)  
    {
      this.objects[id].relativeObj[i].style.display = 'block';
      if(this.objects[id].relativeObj[i].nameComponent=='powerComboBox'|| this.objects[id].relativeObj[i].nameComponent=='edits' || 
	  this.objects[id].relativeObj[i].nameComponent=='imgButtons' || this.objects[id].relativeObj[i].nameComponent=='memo')  	
        if(!this.objects[id].relativeObj[i].sts_Show)
          this.objects[id].relativeObj[i].style.display = 'none';   
    }
  },
  addObjToDialog: function(id, obj, row, col, heightCell, leftMargin)
  {
    var actSizeRow = this.objects[id].tableBody.rows.length;
    while (actSizeRow <= row) 
    {
      this.objects[id].tableBody.insertRow(actSizeRow);
      actSizeRow = this.objects[id].tableBody.rows.length;
    };
    var actSizeCol = this.objects[id].tableBody.rows[row].cells.length;
    while (actSizeCol <= col) 
    {
      this.objects[id].tableBody.rows[row].insertCell(actSizeCol);
	  var container = document.createElement('table');
	  container.setAttribute("border", "0");
      container.setAttribute("cellPadding", "0");
      container.setAttribute("cellSpacing", "0");
	  container.style.borderWidth='0px';
	  container.style.fontSize='0px';
	  container.insertRow(0);
	  container.insertRow(1);
	  container.insertRow(2);
	  container.rows[0].style.borderStyle='none';
	  container.rows[0].style.height='0px';
	  container.rows[0].style.width='0px';
	  container.rows[0].style.fontSize='0px';
	  this.objects[id].tableBody.rows[row].cells[actSizeCol].typeElement='table';
	  this.objects[id].tableBody.rows[row].cells[actSizeCol].appendChild(container);
      actSizeCol = this.objects[id].tableBody.rows[row].cells.length;
    };
	var cont = this.objects[id].tableBody.rows[row].cells[col].firstChild;
	if(this.objects[id].tableBody.rows[row].cells[actSizeCol-1].typeElement=='table')
	{
		var p = cont.rows[0].cells.length;
		cont.rows[0].insertCell(p);
		cont.rows[1].insertCell(p);
		cont.rows[2].insertCell(p);
		cont.rows[0].insertCell(p+1);
		cont.rows[1].insertCell(p+1);
		cont.rows[2].insertCell(p+1);
		cont.rows[1].cells[p+1].style.height='0px';
		cont.rows[1].cells[p+1].style.lineHeight='0px';			
		if(heightCell!=null)
		{
			this.setHeightCell(id,row,col,heightCell);
		};		
		cont.rows[1].cells[p+1].vAlign='top';
		cont.rows[1].cells[p+1].appendChild(obj);
		if(leftMargin!=null && leftMargin!=undefined)
		{
		  this.leftMarginObj(id,row,col,parseInt(p/2,10),leftMargin);
		};
	};
  },
  
  getObjInDialog : function(idObj)
  {
  	for(var i=0; i<this.ids.length; i++)
  	{
  	  var cellObj = this.getObjectFromCell(this.ids[i], idObj);	
  	  if(cellObj != null)
  	    return cellObj.obj;
  	}
  	return null;
  },
  
  getObjectFromCell : function(id, objId)
  {
  	var Cell = new Object();
  	Cell.Obj = null;
  	var flagStop = false;
  	var tRows = this.objects[id].tableBody.rows.length;
  	for(var f = 0; f < tRows; f++)
  	{
  	  var tCols = this.objects[id].tableBody.rows[f].cells.length;		
      for(var c = 0; c < tCols; c++)
      {
        if(this.objects[id].tableBody.rows[f].cells[c].typeElement=='table')
        {
      		var cont = this.objects[id].tableBody.rows[f].cells[c].firstChild;        		
      		var p = cont.rows[1].cells.length;
      		for(i=0; i < p; i++)	
      		{
      		  	var obj = cont.rows[1].cells[i].firstChild;
      		  	if(typeof (obj) == 'object')
      		  	{	
      		  	  if(obj!=null)
      		  	  {
      		  	  	
      		  	  	if(obj.id == objId)
      		  	    {
      		  	    	Cell.Obj = obj;
      		  	    	Cell.objCount = parseInt(cont.rows[1].cells.length/2,10);
      		  	  		Cell.rowContainer = 0;
      		  	  		Cell.colContainer = i;
      		  	  		Cell.row = f;
      		  	  		Cell.col = c;
      		  	  		Cell.posObj = parseInt((i-1)/2,10);
      		  	  		flagStop = true;	
      		  	  	}	
      		  	  }		
      		  	}
      		  	if(flagStop)
      		  	  break;
      		}
        }	
        if(flagStop)
      	  break;
      }		
  	  if(flagStop)
      	break;	  	  	
  	}
  	return Cell;
  },
  
  adjAllMarginObj : function(id, row, col, margin)
  {
  	var i=0;
	var cont = this.objects[id].tableBody.rows[row].cells[col].firstChild;
	for(i=0; i<cont.rows[0].cells.length-1;i++)
	{
	  if(i % 2 ==0 && i!=0)		
	    cont.rows[0].cells[i].width = margin+'px';
	}
  },
  
  getTitleDialog: function(id)
  {
     return this.objects[id].titleDialog;
  },

  getSTS: function(id)
  {
     return this.objects[id].sts;
  },
  
  isByClean: function(id)
  {
  	 if(this.getSTS(id)==this.STS_CLOSE || this.getSTS(id)==this.STS_CREATE)
       return true;
     return false;
  },
  
  leftMarginObj : function(id, row, col, posObject, margin)
  {
	var cont = this.objects[id].tableBody.rows[row].cells[col].firstChild;
	cont.rows[1].cells[posObject*2].width = margin+'px';
  },
    
  topMarginObj : function(id, row, col, posObject, margin)
  {
	var cont = this.objects[id].tableBody.rows[row].cells[col].firstChild;
	cont.rows[0].cells[posObject*2].height = margin+'px';
  },
  
  bottomMarginObj : function(id, row, col, posObject, margin)
  {
	var cont = this.objects[id].tableBody.rows[row].cells[col].firstChild;
	cont.rows[2].cells[posObject*2].height = margin+'px';
  },
    
  setLeftMarginObj : function(id, obj, margin)
  {
  	var co = this.getObjectFromCell(id, obj.id);
  	this.leftMarginObj(id, co.row, co.col, co.posObj, margin);
  },
    
  setTopMarginObj : function(id, obj, margin)
  {
  	var co = this.getObjectFromCell(id, obj.id);
  	this.topMarginObj(id, co.row, co.col, co.posObj, margin);
  },
  
  setBottomMarginObj : function(id, obj, margin)
  {
  	var co = this.getObjectFromCell(id, obj.id);
  	this.bottomMarginObj(id, co.row, co.col, co.posObj, margin);
  },
  
  setWidthSubCellObj : function(id, row, col, posObject, width)
  {
	var cont = this.objects[id].tableBody.rows[row].cells[col].firstChild;
	cont.rows[0].cells[posObject*2+1].width = width+'px';
  },
  
  alignObjToCell: function(id, row, col, align)
  {
    this.objects[id].tableBody.rows[row].cells[col].align = align;
  },
  
  vAlignObjToCell: function(id, row, col, vAlign)
  {
    this.objects[id].tableBody.rows[row].cells[col].vAlign = vAlign;
  },
  addSpace: function(id, row, col, space)
  {
    var actSizeRow = this.objects[id].tableBody.rows.length;
    while (actSizeRow <= row) 
    {
      this.objects[id].tableBody.insertRow(actSizeRow);
      actSizeRow = this.objects[id].tableBody.rows.length;
    }
    var actSizeCol = this.objects[id].tableBody.rows[row].cells.length;
    while (actSizeCol <= col) 
    {
      this.objects[id].tableBody.rows[row].insertCell(actSizeCol);
      actSizeCol = this.objects[id].tableBody.rows[row].cells.length;
    }
    this.objects[id].tableBody.rows[row].cells[col].style.width = space + "px";
  },
  addLn: function(id, row, col, lns)
  {
    var actSizeRow = this.objects[id].tableBody.rows.length;
    while (actSizeRow <= row) 
    {
      this.objects[id].tableBody.insertRow(actSizeRow);
      actSizeRow = this.objects[id].tableBody.rows.length;
    }
    var actSizeCol = this.objects[id].tableBody.rows[row].cells.length;
    while (actSizeCol <= col) 
    {
      this.objects[id].tableBody.rows[row].insertCell(actSizeCol);
      actSizeCol = this.objects[id].tableBody.rows[row].cells.length;
    }
    var s = "";
    this.objects[id].tableBody.rows[row].cells[col].style.height = 17*lns+'px';
    this.objects[id].tableBody.rows[row].cells[col].style.lineHeight = 17*lns+'px';
  },

  setRound : function(id)
  {
    /*
    this.objects[id].style.borderRadius='1em';
    this.objects[id].style.border='0px';
    this.objects[id].style.borderWidth='0px';
    this.objects[id].style.borderStyle='groove';
    this.objects[id].divTableTitle.style.borderTopLeftRadius='1em';
    this.objects[id].divTableTitle.style.borderTopRightRadius='1em';
    this.objects[id].buttonClose.style.borderWidth='1px';
    this.objects[id].buttonClose.style.borderRadius='1em';
    this.objects[id].buttonHelp.style.borderWidth='1px';
    this.objects[id].buttonHelp.style.borderRadius='1em';
    this.objects[id].buttonMin.style.borderWidth='1px';
    this.objects[id].buttonMin.style.borderRadius='1em';
    this.objects[id].divTableSts.style.borderBottomLeftRadius='1em';
    this.objects[id].divTableSts.style.borderBottomRightRadius='1em';
    this.objects[id].divTableSts.style.height='22px';
    */
  },

  showButtonHelp : function(id){
	this.objects[id].showButtonHelp = true;
	this.objects[id].buttonHelp.style.display = 'block';
  },
	
  hideButtonHelp : function(id){
	 this.objects[id].showButtonHelp = false;
	this.objects[id].buttonHelp.style.display = 'none';
  },
	
  isShowButtonHelp : function(id){
	return this.objects[id].showButtonHelp;
  },
	
  onClickButtonHelp : function(id, funct){
	  if(typeof funct==='string')
		  this.objects[id].onClickBtnHelp = new Function(funct);
	  else
		  this.objects[id].onClickBtnHelp = funct;
  },
	
  showHelp : function(w, h, tutorial){
	if(!w)
		w=400;
	if(!h)
		h=300;
	var ventHelp = window.open('help/tutorial/'+tutorial,'_blank','width='+w+',height='+h+'resizable=yes,scrollbars=yes,status=no,location=no');
  },
  
  create: function(id, x1, y1, x2, y2, title)
  {
    this.ids[this.ids.length] = id;
    if (this.objects[id] == null) 
      this.totalDialogs++;
    this.objects[id] = document.createElement("div");
    this.objects[id].showButtonHelp = false;
    this.objects[id].onClickBtnHelp = new Function('');
    this.objects[id].isFx = false;
    this.objects[id].nameComponent='dialogs';
    this.objects[id].actColor ='white';
    this.objects[id].ambiente = attrib.getActualEnv();
    this.objects[id].relativeObj = new Array();
	  this.objects[id].sts = this.STS_CREATE;
	  this.objects[id].staticOrder = false;
    this.objects[id].tempX1 = 0;
    this.objects[id].tempY1 = 0;
    this.objects[id].focusHere = false;
    this.objects[id].isModal = false;
    this.objects[id].submenu = new Array();
    this.objects[id].eventHideAllMenus = new Function('');
    this.objects[id].onHideDialogF = new Function('');
    this.objects[id].onShowDialogF = new Function('');
    this.objects[id].onClickCloseDialog = new Function('');
    this.objects[id].onClickMinimizeDlg = new Function('');
    this.objects[id].id = id;
    this.objects[id].idsPanelMenu = new Array();
    this.objects[id].minWindow = new Object();
    this.objects[id].minWindow.eventCloseDlg = new Function('');
    this.objects[id].minWindow.eventMinDlg = new Function('');
    this.objects[id].minWindow.eventShow = new Function('');
    this.objects[id].isClick = false;
    this.objects[id].loadBGImg = true;
    this.objects[id].order = this.totalDialogs;
    this.objects[id].style.zIndex = 50 * this.objects[id].order;
    this.objects[id].divModal = document.createElement("div");
    this.objects[id].divModal.style.position = "absolute";
    this.objects[id].divModal.style.display = "none";
    this.objects[id].divModal.style.top = '0px';
    this.objects[id].divModal.style.left = '0px';
    this.objects[id].divModal.style.width = document.documentElement.clientWidth  + 'px';
    this.objects[id].divModal.style.height = document.documentElement.clientHeight + 'px';
    document.body.appendChild(dialogs.objects[id].divModal);
    this.objects[id].isMaxScreen = false;
    this.objects[id].isMinScreen = false;
    this.objects[id].divBody = document.createElement("div");
    document.body.appendChild(this.objects[id]);
    this.objects[id].enableResize = true;
    this.objects[id].enableMinimize = true;
    this.objects[id].enableMaximize = true;
    this.objects[id].enableFullScreen = true;
    this.objects[id].x1 = x1;
    this.objects[id].x2 = x2;
    this.objects[id].y1 = y1;
    this.objects[id].y2 = y2;
    this.objects[id].widthDialog = x2 - x1;
    this.objects[id].heightDialog = y2 - y1;
    this.objects[id].heightBarSts = 20;
    this.objects[id].heightBarTitle = 20;
    this.objects[id].heightBarMenu = 0;
    this.objects[id].heightControlButtons = 20;
    this.objects[id].stsMsg = "";
    this.objects[id].minimizeX = 0;
    this.objects[id].minimizeY = 0;
    this.objects[id].titleDialog = title;
    this.objects[id].onBeforeMinimizeFunct = new Function("");
    this.objects[id].onAfterMinimizeFunct = new Function("");
    this.objects[id].onBeforeMaximizeFunct = new Function("");
    this.objects[id].onAfterMaximizeFunct = new Function("");
    this.objects[id].onDblClickTitleBarFunct = new Function("");
    this.objects[id].tableContainer = document.createElement("table");
    this.objects[id].tableContainer.setAttribute("border", "0");
    this.objects[id].tableContainer.setAttribute("cellPadding", "0");
    this.objects[id].tableContainer.setAttribute("cellSpacing", "0");
    this.objects[id].tableContainer.insertRow(0);
    this.objects[id].tableContainer.insertRow(1);
    this.objects[id].tableContainer.insertRow(2);
    this.objects[id].tableContainer.insertRow(3);
    this.objects[id].tableContainer.rows[0].insertCell(0);
    this.objects[id].tableContainer.rows[1].insertCell(0);
    this.objects[id].tableContainer.rows[2].insertCell(0);
    this.objects[id].tableContainer.rows[3].insertCell(0);
    this.objects[id].tableSts = document.createElement("table");
    this.objects[id].divTableSts = document.createElement("div");
    this.objects[id].divTableSts.appendChild(this.objects[id].tableSts);
    this.objects[id].tableSts.setAttribute("border", "0");
    this.objects[id].tableSts.setAttribute("cellPadding", "0");
    this.objects[id].tableSts.setAttribute("cellSpacing", "0");
    this.objects[id].tableSts.insertRow(0);
    this.objects[id].tableSts.rows[0].insertCell(0);
    this.objects[id].tableSts.rows[0].insertCell(1);
    this.objects[id].tableSts.rows[0].insertCell(2);
    this.objects[id].tableSts.rows[0].cells[0].style.width = '3%';
    this.objects[id].tableSts.rows[0].cells[1].style.width = '92%';
    this.objects[id].tableSts.rows[0].cells[2].style.width = '5%';
    this.objects[id].tableSts.style.width = this.objects[id].widthDialog + 'px';
    this.objects[id].tableContainer.rows[3].cells[0].appendChild(this.objects[id].divTableSts);
    this.objects[id].tableBody = document.createElement("table");
    this.objects[id].tableBody.setAttribute("border", "0");
    this.objects[id].tableBody.setAttribute("cellPadding", "0");
    this.objects[id].tableBody.setAttribute("cellSpacing", "0");
    this.objects[id].tableBody.style.borderWidth='0px';
    this.objects[id].tableBody.style.fontSize='0px';
    this.objects[id].tableTitle = document.createElement("table");
    this.objects[id].divTableTitle = document.createElement("div");
    this.objects[id].divTableTitle.appendChild(this.objects[id].tableTitle);
    this.objects[id].tableTitle.setAttribute("border", "0");
    this.objects[id].tableTitle.setAttribute("cellPadding", "0");
    this.objects[id].tableTitle.setAttribute("cellSpacing", "2");
    this.objects[id].tableTitleIcon = document.createElement("table");
    this.objects[id].tableTitleIcon.setAttribute("border", "0");
    this.objects[id].tableTitleIcon.setAttribute("cellPadding", "0");
    this.objects[id].tableTitleIcon.setAttribute("cellSpacing", "0");
    this.objects[id].tableTitleIcon.insertRow(0);
    this.objects[id].tableTitleIcon.rows[0].insertCell(0);
    this.objects[id].tableTitleIcon.rows[0].insertCell(1);
    this.objects[id].tableTitleIcon.rows[0].cells[0].align='center';
    this.objects[id].divIcon = document.createElement("div");
    this.objects[id].divIcon.style.borderRadius='1em';
    this.objects[id].divIcon.align = 'center';
    this.objects[id].divIcon.style.height = '20px';
    this.objects[id].divIcon.style.lineHeight = '20px';
    this.objects[id].divIcon.vAlign = 'middle';
    this.objects[id].divIcon.img = document.createElement("img");
    //this.objects[id].divIcon.img.src = this.iconImg;
    this.objects[id].divIcon.img.style.height = '20px';
    this.objects[id].divIcon.img.style.lineHeight = '20px';
    this.objects[id].divIcon.img.vAlign = 'middle';
    this.objects[id].divIcon.img.style.borderWidth = '0px';
    this.objects[id].divIcon.img.style.width = '20px';
    //this.objects[id].divIcon.appendChild(this.objects[id].divIcon.img);
    this.objects[id].tableTitleIcon.rows[0].cells[0].appendChild(this.objects[id].divIcon);
    this.objects[id].tableTitle.insertRow(0);
    this.objects[id].tableTitle.rows[0].insertCell(0);
    this.objects[id].tableTitle.rows[0].insertCell(1);
    this.objects[id].tableTitle.rows[0].insertCell(2);
    this.objects[id].tableTitle.rows[0].insertCell(3);
    this.objects[id].tableTitle.rows[0].insertCell(4);
    this.objects[id].tableTitle.rows[0].cells[4].style.width='2px';
    this.objects[id].tableTitle.rows[0].cells[0].appendChild(this.objects[id].tableTitleIcon); 
    this.objects[id].buttonClose = document.createElement("div");
    this.objects[id].buttonClose.align = 'center';
    this.objects[id].buttonClose.innerHTML = 'x';
    //this.objects[id].buttonClose.style.color = this.fontColorBottonControl;
    //this.objects[id].buttonClose.style.fontFamily = this.fontFamilyBottonControl;
    //this.objects[id].buttonClose.style.fontWeight = 'bold';
    //this.objects[id].buttonClose.style.borderColor = '#cecece';
    //this.objects[id].buttonClose.style.backgroundImage = 'url(' +this.bgImgPath+this.botonCloseImgPath + ')';
    //this.objects[id].buttonClose.style.borderStyle = "outset";
    //this.objects[id].buttonClose.style.borderWidth = "1px";
    //this.objects[id].buttonClose.style.fontSize = '12px';
    this.objects[id].buttonMin = document.createElement("div");
    this.objects[id].buttonMin.align = 'center';
    this.objects[id].buttonMin.innerHTML = '-';
    //this.objects[id].buttonMin.style.fontFamily = this.fontFamilyBottonControl;
    //this.objects[id].buttonMin.style.fontWeight = 'bold';
    //this.objects[id].buttonMin.style.backgroundImage = 'url(' +this.bgImgPath + this.botonMinImgPath + ')';
    //this.objects[id].buttonMin.style.color = this.fontColorBottonControl;
    //this.objects[id].buttonMin.style.borderStyle = 'outset';
    //this.objects[id].buttonMin.style.borderWidth = '1px';
    //this.objects[id].buttonMin.style.borderColor = '#cecece';
    //this.objects[id].buttonMin.style.fontSize = '12px';
    
    this.objects[id].buttonHelp = document.createElement("div");
    this.objects[id].buttonHelp.align = 'center';
    this.objects[id].buttonHelp.innerHTML = '?';
    //this.objects[id].buttonHelp.style.fontFamily = this.fontFamilyBottonControl;
    //this.objects[id].buttonHelp.style.fontWeight = 'bold';
    //this.objects[id].buttonHelp.style.backgroundImage = 'url(' +this.bgImgPath + this.botonMinImgPath + ')';
    //this.objects[id].buttonHelp.style.color = this.fontColorBottonControl;
    //this.objects[id].buttonHelp.style.borderStyle = 'outset';
    //this.objects[id].buttonHelp.style.borderWidth = '1px';
    //this.objects[id].buttonHelp.style.borderColor = '#cecece';
    //this.objects[id].buttonHelp.style.fontSize = '12px';
    
    this.objects[id].tableTitle.rows[0].cells[1].appendChild(this.objects[id].buttonHelp);
    this.objects[id].tableTitle.rows[0].cells[2].appendChild(this.objects[id].buttonMin);
    this.objects[id].tableTitle.rows[0].cells[3].appendChild(this.objects[id].buttonClose);
	  this.hideButtonHelp(id); 	        

  	try {
  	 	var jd = xmlHttpReq.json('getTutorial');
  		if(typeof jd !='undefined' && jd!=null) {
  			if(typeof json('getTutorial')==='object'){
  				for(var i=0; i<json('getTutorial').data[0].length; i++){
  					if(json('getTutorial').data[0][i].trim().toUpperCase()===title.trim().toUpperCase()){
  						this.showButtonHelp(id);	
  						this.onClickButtonHelp(id, 'dialogs.showHelp(400,300,\''+json('getTutorial').data[1][i]+'\')');
  						break;
  					}
  				}
  			}
  		}
  	}
  	catch(err) {}	 
    this.objects[id].divBody.appendChild(this.objects[id].tableBody);
    this.objects[id].tableContainer.rows[0].cells[0].appendChild(this.objects[id].divTableTitle);
    this.objects[id].tableContainer.rows[2].cells[0].appendChild(this.objects[id].divBody);
    this.objects[id].tableContainer.rows[2].cells[0].vAlign = "top";
    this.objects[id].tableContainer.rows[2].cells[0].align = "left";
    this.objects[id].appendChild(this.objects[id].tableContainer);    
    this.objects[id].tableTitle.rows[0].cells[2].style.width = "1px";
    this.objects[id].tableTitle.rows[0].cells[3].style.width = "1px";
    this.setWidth(id, this.objects[id].widthDialog);
    this.setBodyHeight(id, this.objects[id].heightDialog);
    this.setTitle(id, this.objects[id].titleDialog);
    this.alignTitle(id, this.TYPE_ALIGN_CENTER);
    this.setPosition(id, x1, y1);
    this.setHeightBarTitle(id, this.objects[id].heightBarTitle);
    this.setMsg(id, "&nbsp", false);
    this.setHeightBarSts(id, this.objects[id].heightBarSts);
    this.setHeightControlButtons(id, this.objects[id].heightControlButtons);
    this.setWidthControlButtons(id, this.objects[id].heightControlButtons);
    this.setBgColorBarTitle(id, "#cecece");
    this.setBgColorBarSts(id, "#eeeeee");
    this.alignTitle(id, 'center');
    
    /*
    this.objects[id].buttonMin.onmousedown = function()
    {
      dialogs.objects[id].buttonMin.style.borderStyle = 'inset';
    }
    this.objects[id].buttonMin.onmouseover = function()
    {
      dialogs.objects[id].buttonMin.style.cursor = "pointer";
    }
    this.objects[id].buttonMin.onmouseup = function()
    {
      dialogs.objects[id].buttonMin.style.borderStyle = 'outset';
    }
    this.objects[id].buttonMin.onmouseout = function()
    {
      dialogs.objects[id].buttonMin.style.borderStyle = 'outset';
      dialogs.objects[id].buttonMin.style.cursor = "default";
    }
    */
    this.objects[id].buttonMin.onclick = function()
    {
      dialogs.minimize(id);
      dialogs.objects[id].onClickMinimizeDlg();
      dialogs.objects[id].minWindow.eventMinDlg();
    }
    /*
    this.objects[id].buttonClose.onmouseover = function()
    {
      dialogs.objects[id].buttonClose.style.cursor = "pointer";
    }
    this.objects[id].buttonClose.onmousedown = function()
    {
      dialogs.objects[id].buttonClose.style.borderStyle = 'inset';
    }
    this.objects[id].buttonClose.onmouseout = function()
    {
      dialogs.objects[id].buttonClose.style.borderStyle = 'outset';
      dialogs.objects[id].buttonClose.style.cursor = "default";
    }
    this.objects[id].buttonClose.onmouseup = function()
    {
      dialogs.objects[id].buttonClose.style.borderStyle = 'outset';
    }
    */
    this.objects[id].buttonClose.onclick = function()
    {
      dialogs.hide(id);
      dialogs.objects[id].onClickCloseDialog();
      dialogs.objects[id].minWindow.eventCloseDlg();
      dialogs.objects[id].sts=dialogs.STS_CLOSE;
    }
    /*
    this.objects[id].buttonHelp.onmouseover = function()
    {
      dialogs.objects[id].buttonHelp.style.cursor = "pointer";
    }
    this.objects[id].buttonHelp.onmousedown = function()
    {
      dialogs.objects[id].buttonHelp.style.borderStyle = 'inset';
    }
    this.objects[id].buttonHelp.onmouseout = function()
    {
      dialogs.objects[id].buttonHelp.style.borderStyle = 'outset';
      dialogs.objects[id].buttonHelp.style.cursor = "default";
    }
    this.objects[id].buttonHelp.onmouseup = function()
    {
      dialogs.objects[id].buttonHelp.style.borderStyle = 'outset';
    }
    */
    this.objects[id].buttonHelp.onclick = function()
    {
    	dialogs.objects[id].onClickBtnHelp();
    }
    
    
    this.objects[id].onmousedown = function()
    {
      dialogs.sendToFrom(id);
    }

    this.objects[id].ondblclick = function()
    {
      dialogs.sendToFrom(id);
    }
    this.hide(id);
    this.setEvents(id);
    this.sendToFrom(id);
    this.remBlockModal(id);
    this.addPropertyMethod(id);
    this.setRound(id);
    if(attrib)
      this.setObjAttrib(id, attrib,attrib.getActualEnv());
    this.objects[id].sts = this.STS_CREATE;
    return this.objects[id];
  },
  
  close: function(id)
  {
	if (document.all) 
	  this.objects[id].buttonClose.click();
	else 
	{
	  this.hide(id);
	  dialogs.objects[id].minWindow.eventCloseDlg();
	}
	dialogs.objects[id].onClickCloseDialog();
	this.objects[id].sts = this.STS_CLOSE;  
  },
  
  closeAll: function()
  {  
	for(var i=0; i<this.ids.length; i++)
	{
	  var id = this.ids[i];	
  	  this.objects[id].sts = this.STS_CLOSE;
	  if (document.all) 
	    this.objects[id].buttonClose.click();
	  else 
	  {
	    this.hide(id);
	    dialogs.objects[id].minWindow.eventCloseDlg();
	  }  
	}
  },
  
  destroyDialog: function(id)
  {
    document.body.removeChild(dialogs.objects[id].divModal);
    document.body.removeChild(this.objects[id]);
  },
  
  setFocus: function(id)
  {
    var tid = this.ids.length;
    var i = 0;
    for (i = 0; i < tid; i++) 
    {
      this.objects[this.ids[i]].focusHere = false;
    }
    this.objects[id].focusHere = true;
  },
  
  getMouseXY: function(e)
  {
    var IE = document.all ? true : false;
    if (IE) 
    {
      dialogs.mouseX = event.clientX;
      dialogs.mouseY = event.clientY;
    }
    else 
    {
      dialogs.mouseX = e.pageX;
      dialogs.mouseY = e.pageY;
    }
    
    if (dialogs.mouseY < 10) 
    {
      dialogs.mouseY = 10;
    }
    if (dialogs.mouseX < 10) 
    {
      dialogs.mouseX = 10;
    }
  },
  
  getObject: function(id)
  {
    return this.objects[id];
  },
  
  hide: function(id)
  {
  	this.showHideBodyElements(id,false);
    dialogs.objects[id].eventHideAllMenus();
    this.remBlockModal(id);
    this.objects[id].style.display = "none";
    this.objects[id].onHideDialogF(); 
    dialogs.objects[id].sts=dialogs.STS_MINIMIZE;
  },
  
  hideAllSubMenu: function(id)
  {
    var topc = this.objects[id].idsPanelMenu.length;
    var i = 0;
    var idp = '';
    for (i = 0; i < topc; i++) 
    {
      idp = this.objects[id].idsPanelMenu[i];
      dialogs.objects[id].submenu[idp].panel.style.display = 'none';
    }
  },
  
  hideAllSubMenuFromLevel: function(id, level)
  {
    var topc = this.objects[id].idsPanelMenu.length;
    var i = 0;
    var idp = '';
    for (i = 0; i < topc; i++) 
    {
      idp = this.objects[id].idsPanelMenu[i];
      if (dialogs.objects[id].submenu[idp].level > level) 
      {
        dialogs.objects[id].submenu[idp].panel.style.display = 'none';
      }
    }
  },
  
  hideAllMenuForAllDlg: function()
  {
    var tid = this.ids.length;
    var i = 0;
    for (i = 0; i < tid; i++) 
    {
      this.hideAllSubMenu(this.ids[i]);
    }
  },
  
  maxLength: function(arrValues)
  {
    var lng = 0;
    var i = 0;
    var aux1 = '';
    var aux2 = '';
    for (i = 0; i < arrValues.length - 1; i++) 
    {
      aux1 = arrValues[i];
      aux2 = arrValues[i + 1];
      if (aux1.length > aux2.length) 
      {
        if (aux1.length > lng) 
          lng = aux1.length;
      }
      else 
      {
        if (aux2.length > lng) 
          lng = aux2.length;
      }
    }
    return lng;
  },
  
  minimize: function(id)
  {
    if (this.objects[id].enableMinimize) 
    {
      this.showHideBodyElements(id,false);
	  this.objects[id].sts = this.STS_MINIMIZE;	
      this.objects[id].isMinScreen = true;
      this.objects[id].onBeforeMinimizeFunct();
      this.objects[id].divBody.style.display = "none";
      this.setBodyHeight(id, 0);
      this.setHeightBarSts(id, 0);
      this.objects[id].tableSts.rows[0].cells[1].innerHTML = "";
      this.objects[id].style.left = this.objects[id].minimizeX + "px";
      this.objects[id].style.top = this.objects[id].minimizeY + "px";
      this.objects[id].buttonMin.onclick = function()
      {
        dialogs.maximize(id);
        dialogs.objects[id].onClickMinimizeDlg();
        dialogs.objects[id].minWindow.eventMinDlg();
      }
      this.setWidth(id, 120);
      var tempTitle = this.objects[id].titleDialog.charAt(0) +
      this.objects[id].titleDialog.charAt(1) +
      this.objects[id].titleDialog.charAt(2) +
      this.objects[id].titleDialog.charAt(3) +
      this.objects[id].titleDialog.charAt(4) +
      "...";
      this.setTitle(id, tempTitle);
      this.objects[id].onAfterMinimizeFunct();
      this.objects[id].buttonMin.innerHTML = '+';
      this.objects[id].tableSts.style.width = 120 + 'px';
      this.objects[id].tableContainer.style.width = 120 + 'px';
    }
  },
  
  maximize: function(id)
  {
    if (this.objects[id].enableMaximize) 
    {
      this.showHideBodyElements(id,true);
	  this.objects[id].sts = this.STS_SHOW;	
      this.objects[id].isMinScreen = false;
      this.objects[id].onBeforeMaximizeFunct();
      this.objects[id].divBody.style.display = "block";
      var y = this.objects[id].y2 - this.objects[id].y1;
      this.setBodyHeight(id, y);
      this.show(id);
      this.setHeightBarSts(id, this.objects[id].heightBarSts);
      this.objects[id].tableSts.rows[0].cells[1].innerHTML = this.objects[id].stsMsg;
      this.setPosition(id, this.objects[id].x1, this.objects[id].y1);
      this.setWidth(id, this.objects[id].widthDialog);
      this.setTitle(id, this.objects[id].titleDialog);
      this.objects[id].onAfterMaximizeFunct();
      this.objects[id].buttonMin.innerHTML = '-';
      this.objects[id].buttonMin.onclick = function()
      {
        dialogs.minimize(id);
        dialogs.objects[id].onClickMinimizeDlg();
        dialogs.objects[id].minWindow.eventMinDlg();
      }
      var wtc = dialogs.objects[id].tableContainer.rows[0].offsetWidth - 5;
      var wts = dialogs.objects[id].tableSts.style.offsetWidth;
      if (wtc < 0) 
      {
        wtc = 0;
      }
      dialogs.objects[id].tableSts.style.width = wtc + 'px';
      dialogs.objects[id].tableContainer.style.width = wtc + 'px';
    }
  },
  
  onHideDialog: function(id, funct)
  {
    this.objects[id].onHideDialogF = new Function(funct);
  },
  
  onShowDialog: function(id, funct)
  {
    this.objects[id].onShowDialogF = new Function(funct);
  },
  
  onClickDialog: function(id, funct)
  {
    this.objects[id].onclick = new Function(funct);
  },
  
   onClickMinimizeDialog: function(id, funct, sts)
  {
    dialogs.objects[id].enableMinimize = sts;
    dialogs.objects[id].onClickMinimizeDlg = new Function(funct);
  },
  
  
  onClickCloseDialog: function(id, funct)
  {
    dialogs.objects[id].onClickCloseDialog = new Function(funct);
  },
  
  onClickStsBar: function(id, funct)
  {
    this.objects[id].tableContainer.rows[3].cells[0].onclick = new Function(funct);
  },
  
  onDblClickStsBar: function(id, funct)
  {
    this.objects[id].tableContainer.rows[3].cells[0].ondblclick = new Function(funct);
  },
  
  onDblClickDialog: function(id, funct)
  {
    this.objects[id].ondblclick = new Function(funct);
  },
  
  onBeforeMinimize: function(id, funct)
  {
    this.objects[id].onBeforeMinimizeFunct = new Function(funct);
  },
  
  onAfterMinimize: function(id, funct)
  {
    this.objects[id].onAfterMinimizeFunct = new Function(funct);
  },
  
  onBeforeMaximize: function(id, funct)
  {
    this.objects[id].onBeforeMaximizeFunct = new Function(funct);
  },
  
  onAfterMaximize: function(id, funct)
  {
    this.objects[id].onAfterMaximizeFunct = new Function(funct);
  },
  
  setStsModal : function(id)
  {
  	this.objects[id].isModal=true;
  },
  
  setSizeCell : function(id,row,col,width,height)
  {
  	this.objects[id].tableBody.rows[row].cells[col].style.width = width+'px';
	this.objects[id].tableBody.rows[row].cells[col].style.height = height+'px';
  },
  
  setWidthCell : function(id,row,col,width)
  {
  	this.objects[id].tableBody.rows[row].cells[col].style.width = width+'px';
  },
  
  setHeightCell : function(id,row,col,height)
  {
	this.objects[id].tableBody.rows[row].cells[col].style.height   = height+'px';
	this.objects[id].tableBody.rows[row].cells[col].style.lineHeight = height+'px';
	//this.objects[id].tableBody.rows[row].cells[col].style.fontSize = height+'px';
  },

  setSubMenu: function(id, structSubMenuDlg)
  {
    this.objects[id].idsPanelMenu[this.objects[id].idsPanelMenu.length] = structSubMenuDlg.idPanelMenu;
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu] = new Object();
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu] = structSubMenuDlg;
    var sizeFont = dialogs.menuProperty.fontSize;
    var heightOpc = parseInt(sizeFont * 2.5,10);
    var sizeFlecha = dialogs.menuProperty.sizeFlecha;
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel = document.createElement('div');
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel = document.createElement('table');
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.appendChild(dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel);
    document.body.appendChild(dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel);
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.setAttribute("border", "0");
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.setAttribute("cellPadding", "0");
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.setAttribute("cellSpacing", "0");
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.img = new Array;
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.imgArrow = document.createElement('img');
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.imgArrow.src = dialogs.menuProperty.imgArrow;
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.imgArrow.style.width = sizeFlecha + 'px';
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.imgArrow.style.height = sizeFlecha + 'px';
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.borderStyle = dialogs.menuProperty.borderStylePanel;
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.borderWidth = dialogs.menuProperty.borderWidthPanel + 'px';
    
    var i = 0;
    var wRow = 0;
    for (i = 0; i < structSubMenuDlg.captions.length; i++) 
    {
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.img[i] = document.createElement('img');
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.img[i].src = structSubMenuDlg.icons[i];
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.img[i].style.width = parseInt(heightOpc/1.5,10) + 'px';
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.img[i].style.height = parseInt(heightOpc/1.5,10) + 'px';
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.img[i].align='center';
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.insertRow(i);
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].row = i;
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].insertCell(0);
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].insertCell(1);
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].insertCell(2);
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].cells[0].width = (heightOpc + 5) + 'px';
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].cells[0].height = heightOpc + 'px';
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].cells[2].width = (sizeFlecha + 12) + 'px';
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].cells[1].innerHTML = structSubMenuDlg.captions[i]; 
      if (structSubMenuDlg.icons[i] != '') 
      {
        dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].cells[0].appendChild(dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.img[i]);
      }
      if (structSubMenuDlg.subMenues[i] != 0) 
      {
        dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].cells[2].appendChild(dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.imgArrow);
        dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].cells[2].align = 'center';
      }
      if (dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].enableOption[i]) 
      {
        dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].style.color = dialogs.menuProperty.colorTextSubMenu;
      }
      else 
      {
        dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].style.color = dialogs.menuProperty.colorTextDisable;
      }
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].style.fontFamily = dialogs.menuProperty.fontFamily;
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].style.fontWeight = dialogs.menuProperty.fontWeight;
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].style.fontSize = dialogs.menuProperty.fontSize + 'px';
      if (wRow < dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].offsetWidth) 
      {
        wRow = dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].offsetWidth;
      }
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].onmousedown = function(e)
      {
        if (dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].enableOption[this.row]) 
        {
          dialogs.hideAllSubMenu(id);
          var f = new Function(dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].functs[this.row]);
          f();
        }
      }
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].onmouseover = function(e)
      {
        if (dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].enableOption[this.row]) 
        {
          dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[this.row].style.backgroundImage = dialogs.menuProperty.imgBarSelected;
          dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[this.row].style.color = dialogs.menuProperty.colorTextSelected;
          dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.cursor = "pointer";
          if (dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].subMenues[this.row] != 0) 
          {
            var idsm = dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].subMenues[this.row];
            dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].show(idsm)
          }
          else 
          {
            dialogs.hideAllSubMenuFromLevel(id, dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].level);
          }
        }
      }
      dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].onmouseout = function(e)
      {
        if (dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].enableOption[this.row]) 
        {
          dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.cursor = "default";
          dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[this.row].style.backgroundImage = '';
          dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[this.row].style.color = dialogs.menuProperty.colorTextSubMenu;
        }
      }
      dialogs.objects[id].eventHideAllMenus = function()
      {
        dialogs.hideAllSubMenu(id);
      }
    }
    var hRow = dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.offsetHeight;
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].widthOption = wRow;
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].heightPanel = hRow;
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.backgroundImage = dialogs.menuProperty.imgPanel;
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.width = dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].widthOption + 'px';
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.height = hRow + 'px';
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.left = dialogs.objects[id].x1 + 'px';
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.top = dialogs.objects[id].y1 + 'px';
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.position = 'absolute';
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.display = 'none';
    dialogs.objects[id].submenu[structSubMenuDlg.idPanelMenu].show = function(idp)
    {
      var yPos = -1;
      var xPos = -1;
      dialogs.objects[id].submenu[idp].panel.style.zIndex = dialogs.objects[id].style.zIndex + 1;
      var parentMenu = dialogs.objects[id].submenu[idp].parentMenu;
      if (parentMenu.level == 0) 
      {
        dialogs.hideAllSubMenu(id);       
        yPos = dialogs.objects[id].menu.y;
        var c = 0
        var w = 0;
        if (dialogs.objects[id].submenu[idp].parentOpc > 0) 
        {
          for (c = 0; c < dialogs.objects[id].submenu[idp].parentOpc; c++) 
          {
            w += dialogs.objects[id].menu.widthOption[c];
          }
          xPos = dialogs.objects[id].x1 + w;
        }
        else 
        {
          xPos = dialogs.objects[id].x1 + 2;
        }
      }
      else 
      {
        yPos = parentMenu.posY + (parentMenu.parentOpc + 1) * heightOpc + 5;
        xPos = parentMenu.posX + parentMenu.widthOption + (parentMenu.level + 1) * dialogs.menuProperty.borderWidthPanel;
      }
      dialogs.objects[id].submenu[idp].panel.style.position = 'absolute';
      dialogs.objects[id].submenu[idp].panel.style.left = xPos + 'px';
      dialogs.objects[id].submenu[idp].panel.style.top = yPos + 'px';
      dialogs.objects[id].submenu[idp].panel.style.display = 'block';
      dialogs.objects[id].submenu[idp].posX = xPos;
      dialogs.objects[id].submenu[idp].posY = yPos;
    }
  },
  
  setMenu: function(id, structMenuDlg)
  {
  	dialogs.objects[id].menu = structMenuDlg;
    dialogs.objects[id].menu.isClick = false;
    dialogs.objects[id].menu.widthOption = new Array();
    dialogs.objects[id].tablaMenu = document.createElement('table');
    dialogs.objects[id].tablaMenu.setAttribute("border", "0");
    dialogs.objects[id].tablaMenu.setAttribute("cellPadding", "0");
    dialogs.objects[id].tablaMenu.setAttribute("cellSpacing", "0");
    dialogs.objects[id].tablaMenu.insertRow(0);
    dialogs.objects[id].heightBarMenu = 18;
    if (dialogs.objects[id].loadBGImg) 
    {
      dialogs.objects[id].tableContainer.rows[1].cells[0].style.backgroundImage = dialogs.menuProperty.imgBar;
    }
    dialogs.objects[id].tableContainer.rows[1].cells[0].appendChild(dialogs.objects[id].tablaMenu);
    dialogs.objects[id].tablaMenu.style.fontSize = dialogs.menuProperty.fontSize + 'px';
    dialogs.objects[id].tablaMenu.style.fontFamily = dialogs.menuProperty.fontFamily;
    dialogs.objects[id].tableContainer.rows[1].cells[0].style.borderStyle = dialogs.menuProperty.borderStyle;
    dialogs.objects[id].tablaMenu.style.height = (dialogs.menuProperty.fontSize * 2) + 'px';
    var totMenu = dialogs.objects[id].menu.captions.length;
    var i = 0;
    var idp = 0;
    for (i = 0; i < totMenu; i++) 
    {
      dialogs.objects[id].tablaMenu.rows[0].insertCell(i);
      var lenOpction = dialogs.objects[id].menu.captions[i].length;
      var sizeFont = dialogs.menuProperty.fontSize;
      dialogs.objects[id].menu.widthOption[i] = parseInt(lenOpction * (sizeFont - 2) * 75 / 100, 10);
      dialogs.objects[id].tablaMenu.rows[0].cells[i].innerHTML = dialogs.objects[id].menu.captions[i];
      if (dialogs.objects[id].menu.enableOption[i]) 
      {
        dialogs.objects[id].tablaMenu.rows[0].cells[i].style.color = dialogs.menuProperty.colorText;
      }
      else 
      {
        dialogs.objects[id].tablaMenu.rows[0].cells[i].style.color = dialogs.menuProperty.colorTextDisable;
      }
      dialogs.objects[id].tablaMenu.rows[0].cells[i].cell = i;
      dialogs.objects[id].tablaMenu.rows[0].cells[i].style.height = dialogs.objects[id].heightBarMenu+'px';
      dialogs.objects[id].tablaMenu.rows[0].cells[i].style.width = dialogs.objects[id].menu.widthOption[i] + 'px';
      dialogs.objects[id].tablaMenu.rows[0].cells[i].align = 'center';
      dialogs.objects[id].tablaMenu.rows[0].cells[i].onmouseover = function(e)
      {
        if (dialogs.objects[id].focusHere) 
        {
          dialogs.objects[id].tablaMenu.rows[0].cells[this.cell].style.cursor = "pointer";
          if (dialogs.objects[id].menu.enableOption[this.cell]) 
          {
            var valY1 = parseInt(dialogs.objects[id].y1, 10);
            var valY2 = parseInt(dialogs.objects[id].heightBarMenu, 10);
            var valY3 = parseInt(dialogs.objects[id].heightBarTitle, 10);
            var valY = valY1 + valY2 + valY3;
            dialogs.objects[id].tablaMenu.rows[0].cells[this.cell].style.color = dialogs.menuProperty.colorTextSelected;
            dialogs.objects[id].tablaMenu.rows[0].cells[this.cell].style.fontWeight = dialogs.menuProperty.fontWeightSelected;
            dialogs.objects[id].menu.y = valY + 8;
            if (dialogs.objects[id].loadBGImg) 
            {
              dialogs.objects[id].tablaMenu.rows[0].cells[this.cell].style.backgroundImage = dialogs.menuProperty.imgBarSelected;
              //dialogs.objects[id].tablaMenu.rows[0].cells[this.cell].style.backgroundColor = 'darkblue';
              idp = dialogs.objects[id].menu.subMenues[this.cell];
              if (dialogs.objects[id].menu.isClick) 
              {
                dialogs.objects[id].submenu[idp].show(idp);
              }
            }
            else 
            {
            }
          }
        }
      }
      dialogs.objects[id].tablaMenu.rows[0].cells[i].onmousedown = function(e)
      {
      	dialogs.setFocus(id);
        if (dialogs.objects[id].focusHere) 
        {
          if (dialogs.objects[id].menu.enableOption[this.cell]) 
          {
            if (dialogs.objects[id].menu.isClick) 
            {
              dialogs.hideAllSubMenu(id);
              dialogs.objects[id].menu.isClick = false;
            }
            else 
            {
              idp = dialogs.objects[id].menu.subMenues[this.cell];
              dialogs.objects[id].submenu[idp].show(idp);
              dialogs.objects[id].menu.isClick = true;
            }
          }
        }
      }
      dialogs.objects[id].tablaMenu.rows[0].cells[i].onmouseout = function(e)
      {
        if (dialogs.objects[id].focusHere) 
        {
          dialogs.objects[id].tablaMenu.rows[0].cells[this.cell].style.cursor = "default";
          if (dialogs.objects[id].menu.enableOption[this.cell]) 
          {
            dialogs.objects[id].tablaMenu.rows[0].cells[this.cell].style.color = dialogs.menuProperty.colorText;
            dialogs.objects[id].tablaMenu.rows[0].cells[this.cell].style.fontWeight = dialogs.menuProperty.fontWeight;
			if (dialogs.objects[id].loadBGImg) 
            {
              dialogs.objects[id].tablaMenu.rows[0].cells[this.cell].style.backgroundImage = '';
			  idp = dialogs.objects[id].menu.subMenues[this.cell];
            }
            else 
            {
            }
          }
        }
      }
    }
  },
  
  setBgBarImg: function(id, barImg)
  {
  	/*this.objects[id].divTableTitle.style.backgroundImage = "url(" + this.bgImgPath + barImg + ")";
    this.objects[id].divTableSts.style.backgroundImage = "url(" + this.bgImgPath + barImg + ")";
    this.objects[id].style.backgroundImage = "url(" + this.bgImgPath + barImg + ")";
    */
  },
  
  setBgBodyImg: function(id, bgImg)
  {
  /*
	  if (bgImg != dialogs.transparecyBgImg) 
		  this.objects[id].style.backgroundImage = "url(" + this.bgImgPath + bgImg + ")";
	  else
		  this.objects[id].style.backgroundImage = "url(" + bgImg + ")";
	*/
  },
  
  setBgBotonClose: function(id, bgImg)
  {
  	//this.objects[id].buttonClose.style.backgroundImage = 'url(' +this.bgImgPath + bgImg + ')';
  },
  
  updateBgBodyImg: function(id, bgImg)
  {
  	//this.bgImgDlg = bgImg;
  },
  
  showHideBodyElements : function(id,sts) 
  {
    if(sts)
      this.showAllRelativeObj(id)
    else
      this.hideAllRelativeObj(id);
  	if(window.powerComboBox!=undefined && window.powerComboBox!=null)
  	{
  	   var tpc = powerComboBox.ids.length;
  	   for(var i=0; i<tpc; i++)
  	   {
  	   	 powerComboBox.objects[powerComboBox.ids[i]].panel.style.display = 'none';
  	   } 	
  	}
  	var tr = this.objects[id].tableBody.rows.length;
  	for(var i=0; i<tr; i++)
  	{
  	  var tc = this.objects[id].tableBody.rows[i].cells.length;
  	  for(var j=0; j<tc; j++)
  	  {
  		var cont = this.objects[id].tableBody.rows[i].cells[j].firstChild;
  	    if(this.objects[id].tableBody.rows[i].cells[j].typeElement=='table')
  		{
  		  var tcc = cont.rows[1].cells.length;
  		  for(var k=0; k<tcc; k++)
  		  {
  		    var ele = cont.rows[1].cells[k].firstChild;
  		  	if(ele!=null)
  		  	{
  		  	  if(sts){
			    ele.style.display = 'block';
			    if(ele.nameComponent == 'imgButtons'){
			      if(!ele.sts_Show)
			        ele.style.display='none'; 
				}
			  }
			  else
			  {
			    ele.style.display='none';
			    if(ele.nameComponent=='calendars')
			    {
			   	  ele.cloneObj.hide();
			    }
			    if(ele.nameComponent=='powerComboBox')
			    {
			      	ele.panel.style.display = 'none';
			    }
			  }	
  		  	}
  		  }	
  		}	
  	  }
  	}
    
  },
  setEvents: function(id)
  {
    dialogs.objects[id].tableContainer.rows[2].cells[0].onmousedown = function(e)
    {
      dialogs.hideAllMenuForAllDlg();
    }
    dialogs.objects[id].tableTitle.rows[0].cells[0].onmousedown = function(e)
    {
      dialogs.showHideBodyElements(id,false);	
  	  if (dialogs.objects[id].loadBGImg) 
	    dialogs.setBgBodyImg(id, dialogs.transparecyBgImg);
      dialogs.objects[id].style.opacity = 0.6;
      dialogs.hideAllMenuForAllDlg();
      dialogs.objects[id].isClick = true;
      dialogs.objects[id].tableTitle.rows[0].cells[0].style.cursor = "pointer";
      dialogs.getMouseXY(e);
      dialogs.mouseXDown = dialogs.mouseX;
      dialogs.mouseYDown = dialogs.mouseY;
      document.onmousemove = function(e)
      {
        document.onmousedown = function(e)
        {
          dialogs.hideAllMenuForAllDlg();
        }
        if (dialogs.objects[id].isClick) 
        {
          dialogs.getMouseXY(e);
          var difX = dialogs.mouseX - dialogs.mouseXDown;
          var difY = dialogs.mouseY - dialogs.mouseYDown;
          var newX = dialogs.objects[id].x1 + difX;
          var newY = dialogs.objects[id].y1 + difY;
          if (!dialogs.objects[id].isMaxScreen && (!dialogs.objects[id].isMinScreen)) 
          {
            dialogs.setPosition(id, newX, newY);
          }
          dialogs.mouseXDown = dialogs.mouseX;
          dialogs.mouseYDown = dialogs.mouseY;
        }
      }
      dialogs.objects[id].tableTitle.rows[0].cells[0].onmouseout = function(e)
      {
        dialogs.getMouseXY(e);
        dialogs.objects[id].tableTitle.rows[0].cells[0].style.cursor = "default";
        var difX = dialogs.mouseX - dialogs.mouseXDown;
        var difY = dialogs.mouseY - dialogs.mouseYDown;
        var newX = dialogs.objects[id].x1 + difX;
        var newY = dialogs.objects[id].y1 + difY;
        if (!dialogs.objects[id].isMaxScreen && (!dialogs.objects[id].isMinScreen)) 
        {
          dialogs.setPosition(id, newX, newY);
        }
        dialogs.mouseXDown = dialogs.mouseX;
        dialogs.mouseYDown = dialogs.mouseY;
        dialogs.objects[id].tableTitle.rows[0].cells[0].onmouseout = new Function("");
      }
    }
    this.objects[id].tableTitle.rows[0].cells[0].onmouseover = function(e)
    {
      dialogs.objects[id].tableTitle.rows[0].cells[0].style.cursor='pointer';	
    }
    this.objects[id].tableTitle.rows[0].cells[0].onmousemove = function(e)
    {
      dialogs.objects[id].tableTitle.rows[0].cells[0].style.cursor='pointer';	
    }
    this.objects[id].tableTitle.rows[0].cells[0].onmouseup = function(e)
    {
      dialogs.objects[id].tableTitle.rows[0].cells[0].style.cursor='default';	
      dialogs.showHideBodyElements(id,true);	
	  if (dialogs.objects[id].loadBGImg) 
 	    dialogs.setBgBodyImg(id, dialogs.bgImgDlg);
    dialogs.objects[id].style.opacity = 1;
	  dialogs.objects[id].isClick = false;
      dialogs.objects[id].tableTitle.rows[0].cells[0].style.cursor = "default";
      dialogs.getMouseXY(e);
      if (!dialogs.objects[id].isMaxScreen && (!dialogs.objects[id].isMinScreen)) 
      {
        dialogs.setPosition(id, dialogs.objects[id].x1, dialogs.objects[id].y1);
      }
      document.onmousemove = new Function("");
      dialogs.objects[id].tableTitle.rows[0].cells[0].onmouseout = new Function("");
      document.onmousedown = new Function("");
      dialogs.setEvents(id);
      dialogs.isClick = false;
    },    
    this.objects[id].divModal.onmouseup = function(e)
    {
      dialogs.objects[id].isClick = false;
      dialogs.getMouseXY(e);
      if (!dialogs.objects[id].isMaxScreen && (!dialogs.objects[id].isMinScreen)) 
      {
        dialogs.setPosition(id, dialogs.objects[id].x1, dialogs.objects[id].y1);
      }
      dialogs.objects[id].tableTitle.rows[0].cells[0].style.cursor = "default";
      dialogs.objects[id].tableTitle.rows[0].cells[0].onmousemove = new Function("");
      dialogs.objects[id].tableTitle.rows[0].cells[0].onmouseout = new Function("");
      dialogs.objects[id].tableTitle.rows[0].cells[0].onmousedown = new Function("");
      dialogs.isClick = false;
      dialogs.setEvents(id);
    }
    
    this.objects[id].divModal.onmousemove = function(e)
    {
      if (dialogs.objects[id].isClick) 
      {
        dialogs.getMouseXY(e);
      }
    }
    this.objects[id].tableTitle.rows[0].cells[0].ondblclick = function(e)
    {
      dialogs.hideAllMenuForAllDlg();
      if (!dialogs.objects[id].isMaxScreen) 
      {
        dialogs.objects[id].isMaxScreen = true;
        dialogs.setFullScreen(id);
      }
      else 
      {
        dialogs.setPriorPosition(id);
        dialogs.maximize(id);
        dialogs.objects[id].isMaxScreen = false;
      }
    }
    dialogs.objects[id].tableContainer.rows[2].cells[0].onmouseup = function(e)
    {
      dialogs.isClick = false;
    }
    dialogs.objects[id].tableContainer.rows[2].cells[0].onmousemove = function(e)
    {
      dialogs.getMouseXY(e);
      var dx = dialogs.objects[id].x2 - 5;
      var diffX = parseInt(dialogs.mouseX) - dx;
      if ((diffX > -2) && (diffX < 10)) 
      {
        dialogs.objects[id].style.cursor = "w-resize";
        dialogs.objects[id].tableContainer.rows[2].cells[0].onmousedown = function(e)
        {
          dialogs.getMouseXY(e);
          var dx = dialogs.objects[id].x2 - 5;
          var diffX = parseInt(dialogs.mouseX) - dx;
          if ((diffX > -2) && (diffX < 10)) 
          {
            dialogs.isClick = true;
          }
          else 
          {
            dialogs.isClick = false;
          }
          dialogs.hideAllMenuForAllDlg();
          document.onmousemove = function(e)
          {
            dialogs.getMouseXY(e);
            var dx = dialogs.objects[id].x2 - 5;
            var diffX = parseInt(dialogs.mouseX) - dx;
            if (dialogs.isClick) 
            {
              if ((dialogs.objects[id].enableResize)) 
              {
                var wtt = dialogs.objects[id].tableTitle.offsetWidth;
                var wtc = dialogs.objects[id].tableContainer.offsetWidth;
                var dw = wtc - wtt;
                if (!((dw > 4) && (diffX < 0))) 
                {
                  dialogs.objects[id].x2 += diffX;
                  dialogs.objects[id].widthDialog += diffX;
                  dialogs.setResizeDialog(id, dialogs.objects[id].widthDialog, dialogs.objects[id].heightDialog);
                  dialogs.objects[id].tableSts.style.width = dialogs.objects[id].widthDialog + 'px';
                  dialogs.objects[id].tableContainer.style.width = dialogs.objects[id].widthDialog + 'px';
                }
              }
            }
            
          }
          document.onmouseup = function(e)
          {
            dialogs.objects[id].style.cursor = "default";
          }
        }
      }
      else 
      {
        dialogs.objects[id].style.cursor = "default";
      }
    }
    dialogs.objects[id].tableSts.rows[0].cells[2].onmouseover = function(e)
    {
      dialogs.objects[id].tableSts.rows[0].cells[2].style.cursor = "nw-resize";
    }
    
    dialogs.objects[id].tableSts.rows[0].cells[1].onmouseover = function(e)
    {
      dialogs.objects[id].tableSts.rows[0].cells[1].style.cursor = "s-resize";
    }
    
    dialogs.objects[id].tableContainer.rows[3].cells[0].onmouseout = function(e)
    {
      dialogs.objects[id].tableSts.rows[0].cells[2].style.cursor = "default";
      var wtc = dialogs.objects[id].tableContainer.rows[0].offsetWidth - 5;
      var wts = dialogs.objects[id].tableSts.style.offsetWidth;
      if (wtc < 0) 
      {
        wtc = 0;
      }
      dialogs.objects[id].tableSts.style.width = wtc + 'px';
      dialogs.objects[id].tableContainer.style.width = wtc + 'px';
      dialogs.objects[id].tableSts.style.offsetWidth = wtc + 'px';
      dialogs.objects[id].tableContainer.style.offsetWidth = wtc + 'px';
    }
    dialogs.objects[id].tableSts.rows[0].cells[2].onmousedown = function(e)
    {
      dialogs.hideAllMenuForAllDlg();
      dialogs.isClick = true;
      dialogs.objects[id].isClick = true;
      document.onmousemove = function(e)
      {
        dialogs.objects[id].tableSts.rows[0].cells[2].style.cursor = "nw-resize";
        if (dialogs.objects[id].isClick) 
        {
          dialogs.getMouseXY(e);
          var dY = parseInt(dialogs.objects[id].heightBarSts, 10);
          dY += parseInt(dialogs.objects[id].heightBarTitle, 10);
          dY += parseInt(dialogs.objects[id].y2, 10);
          dY += dialogs.objects[id].heightBarMenu;
          dy = parseInt(dY, 10);
          var dx = dialogs.objects[id].x2 - 5;
          var diffX = parseInt(dialogs.mouseX) - dx;
          var diffY = parseInt(dialogs.mouseY) - dy;
          if (dialogs.isClick) 
          {
            if ((dialogs.objects[id].enableResize)) 
            {
              var wtt = dialogs.objects[id].tableTitle.offsetWidth;
              var wtc = dialogs.objects[id].tableContainer.offsetWidth;
              var dw = wtc - wtt;
              
              if (!((dw > 4) && (diffX < 0))) 
              {
                dialogs.objects[id].x2 += diffX;
                dialogs.objects[id].y2 += diffY;
                dialogs.objects[id].widthDialog += diffX;
                dialogs.objects[id].heightDialog += diffY;
                dialogs.setResizeDialog(id, dialogs.objects[id].widthDialog, dialogs.objects[id].heightDialog);
                dialogs.objects[id].tableSts.style.width = dialogs.objects[id].widthDialog + 'px';
                dialogs.objects[id].tableTitle.style.width = dialogs.objects[id].widthDialog + 'px';
                dialogs.objects[id].tableContainer.style.width = dialogs.objects[id].widthDialog + 'px';
              }
            }
          }
        }
      }
    }
    
    dialogs.objects[id].tableSts.rows[0].cells[1].onmousedown = function(e)
    {
      dialogs.hideAllMenuForAllDlg();
      dialogs.isClick = true;
      dialogs.objects[id].isClick = true;
      document.onmousemove = function(e)
      {
        dialogs.objects[id].tableSts.rows[0].cells[1].style.cursor = "s-resize";
        if (dialogs.objects[id].isClick) 
        {
          dialogs.getMouseXY(e);
          var dY = parseInt(dialogs.objects[id].heightBarSts, 10);
          dY += parseInt(dialogs.objects[id].heightBarTitle, 10);
          dY += parseInt(dialogs.objects[id].y2, 10);
          dY += dialogs.objects[id].heightBarMenu;
          dy = parseInt(dY, 10);
          var diffY = parseInt(dialogs.mouseY) - dy;
          if (dialogs.isClick) 
          {
            if ((dialogs.objects[id].enableResize)) 
            {
              dialogs.objects[id].y2 += diffY;
              dialogs.objects[id].heightDialog += diffY;
              dialogs.setResizeDialog(id, dialogs.objects[id].widthDialog, dialogs.objects[id].heightDialog);
            }
          }
        }
      }
    }
    
    dialogs.objects[id].tableContainer.onmouseup = function(e)
    {
      dialogs.isClick = false;
      dialogs.objects[id].isClick = false;
      var wtc = dialogs.objects[id].tableContainer.rows[0].offsetWidth - 5;
      var wts = dialogs.objects[id].tableSts.style.offsetWidth;
      if (wtc < 0) 
      {
        wtc = 0;
      }
      dialogs.objects[id].tableSts.style.offsetWidth = wtc + 'px';
      dialogs.objects[id].tableContainer.style.offsetWidth = wtc + 'px';
      dialogs.objects[id].tableSts.rows[0].cells[2].style.cursor = "default";
    }
  },
  setResizeDialog: function(id, x2, y2)
  {
    if (this.objects[id].enableResize) 
    {
      dialogs.setWidth(id, x2);
      dialogs.setBodyHeight(id, y2);
    }
  },
  showGrid: function(id, sts)
  {
    if (sts) 
    {
      this.objects[id].tableBody.setAttribute("border", "1");
    }
    else 
    {
      this.objects[id].tableBody.setAttribute("border", "0");
    }
  },
  setImageDivModal : function(imageDivModal)
  {
    this.imgDivModal = imageDivModal;  
  },
  setPosition: function(id, x, y)
  {
    dialogs.objects[id].eventHideAllMenus();
    this.objects[id].tempX1 = this.objects[id].x1;
    this.objects[id].tempY1 = this.objects[id].y1;
    this.objects[id].x1 = x;
    this.objects[id].y1 = y;
    this.objects[id].style.position = "absolute";
    this.objects[id].style.left = this.objects[id].x1 + "px";
    this.objects[id].style.top = this.objects[id].y1 + "px";
    this.objects[id].x2 = this.objects[id].widthDialog + this.objects[id].x1;
    this.objects[id].y2 = this.objects[id].heightDialog + this.objects[id].y1;
    dialogs.sendToFrom(id);
  },
  getPositionPoint : function(id)
  {
  	var point = new Object();
  	point.x1 = dialogs.objects[id].x1;
  	point.y1 = dialogs.objects[id].y1;
  	point.x2 = dialogs.objects[id].x2;
  	point.y2 = dialogs.objects[id].y2;
  	return point;
  },
  setPriorPosition: function(id)
  {
    this.setPosition(id, this.objects[id].tempX1, this.objects[id].tempY1)
  },
  setAdjY: function(adj)
  {
    this.adjY = adj;
  },
  setCenterScreen: function(id)
  {
    var x = document.documentElement.clientWidth / 2 - this.objects[id].widthDialog / 2;
    var y = document.documentElement.clientHeight / 2 - this.objects[id].heightDialog / 2 - this.adjY;
    if (y < 5) {
      y = 5;
    }
    if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)) {
    	this.setPosition(id, 34, y);
    }
	else {
    	this.setPosition(id, x, y);
	}
  },
  setFullScreen: function(id)
  {
    if (this.objects[id].enableFullScreen) 
    {
      this.objects[id].isMinScreen = false;
      this.objects[id].divBody.style.display = "block";
      var y = document.documentElement.clientHeight;
      this.setBodyHeight(id, y);
      this.show(id);
      this.setHeightBarSts(id, this.objects[id].heightBarSts);
      this.objects[id].tableSts.rows[0].cells[1].innerHTML = this.objects[id].stsMsg;
      this.objects[id].style.left = "0px";
      this.objects[id].style.top = "0px";
      this.objects[id].buttonMin.onclick = function()
      {
        dialogs.setPriorPosition(id);
        dialogs.maximize(id);
        dialogs.objects[id].isMaxScreen = false;
        dialogs.objects[id].onClickMinimizeDlg();
        dialogs.objects[id].minWindow.eventMinDlg();
      }
      this.objects[id].tableContainer.style.width = document.documentElement.clientWidth + "px";
      this.setWidth(id, document.documentElement.clientWidth);
      this.setTitle(id, this.objects[id].titleDialog);
      this.objects[id].x1 = 0;
      this.objects[id].y1 = 0;
      dialogs.sendToFrom(id);
      this.objects[id].buttonMin.innerHTML = '-';
    }
  },
  setEnableMinimize: function(id, sts)
  {
    this.objects[id].enableMinimize = sts;
    if (!sts) 
      this.objects[id].buttonMin.style.display = "none";
    else 
      this.objects[id].buttonMin.style.display = "block";
  },

  setEnableClose: function(id, sts)
  {
    if (!sts)
      this.objects[id].buttonClose.style.display = "none";
    else 
      this.objects[id].buttonClose.style.display = "block";
  },
  
  setEnableResize: function(id, sts)
  {
    this.objects[id].enableResize = sts;
  },
  setEnableFullScreen: function(id, sts)
  {
    this.objects[id].enableFullScreen = sts;
  },
  setMinimizeXY: function(id, x, y)
  {
    this.objects[id].minimizeX = x;
    this.objects[id].minimizeY = y;
  },
  sendToFrom: function(id)
  {
    dialogs.setFocus(id);
    var i = 0;
    var maxZIndex = parseInt(dialogs.objects[id].style.zIndex, 10);
    var maxId = id;
    var valZIndex = 0;
    var ident = id;
    var actZIndex = dialogs.objects[id].style.zIndex; 
	for (i = 0; i < this.ids.length; i++) 
    {	
      ident = dialogs.ids[i];
      if (!dialogs.objects[ident].staticOrder) 
	  {
		valZIndex = parseInt(dialogs.objects[ident].style.zIndex, 10);
		if ((valZIndex > maxZIndex)) 
		{
		  maxZIndex = valZIndex;
		  maxId = ident;
		  actZIndex = dialogs.objects[id].style.zIndex;
		  dialogs.objects[id].style.zIndex = maxZIndex;
		  dialogs.objects[maxId].style.zIndex = actZIndex;
		}
	  }
    }
  },
  
  setBlockModal: function(id)
  {
  	dialogs.objects[id].style.zIndex++;
    dialogs.objects[id].divModal.style.zIndex = dialogs.objects[id].style.zIndex - 1; 
    dialogs.objects[id].divModal.style.display = 'block';
    dialogs.objects[id].style.zIndex--;
  },
  remBlockModal: function(id)
  {
    dialogs.objects[id].divModal.style.zIndex = -1 * dialogs.objects[id].style.zIndex;
    dialogs.objects[id].divModal.style.display = 'none';
  },
  removeObjFromDialog: function(id, obj, row, col)
  {
  	this.objects[id].tableBody.rows[row].cells[col].removeChild(obj);
  },
  setMinWindowEvent: function(id, eClose, eMin, eShow)
  {
  	if(desktop.txtMinWin!=null && desktop.txtMinWin!=undefined && typeof eClose == 'string')
  	{
  	  dialogs.objects[id].txtMinWin 	= desktop.txtMinWin;	
  	  dialogs.objects[id].funcEnable 	= desktop.functEnable;
  	  dialogs.objects[id].functDisable 	= desktop.functDisable;
  	  dialogs.objects[id].functRemove 	= desktop.functRemove;
  	  dialogs.objects[id].eClose = eClose;
  	  dialogs.objects[id].eMin = eMin;
  	  dialogs.objects[id].eShow = eShow;
    }
    dialogs.objects[id].enableMinimize = false;
    if(typeof eClose=='object')
    {
    	dialogs.objects[id].minWindow.eventCloseDlg = eClose.hide;
        dialogs.objects[id].minWindow.eventMinDlg = eClose.disable;
        dialogs.objects[id].minWindow.eventShow = eClose.show;
    }
    else
    {
      dialogs.objects[id].minWindow.eventCloseDlg = new Function(eClose);
      dialogs.objects[id].minWindow.eventMinDlg = new Function(eMin);
      dialogs.objects[id].minWindow.eventShow = new Function(eShow);	
    }
    
  },
  show: function(id)
  {
  	this.objects[id].sts = this.STS_SHOW;
  	if(dialogs.objects[id].txtMinWin!=null && dialogs.objects[id].txtMinWin!=undefined)
  	{
  		var exist = false;
  		if(desktop!=null && desktop!=undefined)
  		{
  		  if(desktop.isDestroy)
  		  {	  
  			for(var i=0; i<dialogs.mwObj.length; i++)
  			{
  			  if(dialogs.mwObj[i].idMw == id)	
  			  {
  				var mw = desktop.getMinWin(dialogs.mwObj[i].size);  
  				if(mw==null || mw==undefined)
  				  mw = dialogs.mwObj[i] = desktop.addMinWindow(dialogs.objects[id].txtMinWin, dialogs.objects[id].funcEnable, dialogs.objects[id].functDisable, dialogs.objects[id].functRemove);	
  				dialogs.setMinWindowEvent(id, mw);
  				exist = true;
  				break;
  			  }
  			}
  			if(!exist)
  			{
  			  	
  			  for(var i=0; i<desktop.desk.tablaBar.rows[0].cells.length; i++)	
  			  {
  				var mw = desktop.desk.tablaBar.rows[0].cells[i].firstChild;  
  				if(mw!=null && mw!=undefined)
  				  if(mw.txt==dialogs.objects[id].txtMinWin)  
  			      {
  				    dialogs.setMinWindowEvent(id, mw); 
  				    exist = true;
  				    break;
  			      }
  			  }
  			  if(!exist)
			  {
				var p = dialogs.mwObj.length;	
				dialogs.mwObj[p] = new Object();
	  			dialogs.mwObj[p] = desktop.addMinWindow(dialogs.objects[id].txtMinWin, dialogs.objects[id].funcEnable, dialogs.objects[id].functDisable, dialogs.objects[id].functRemove)	
	  		    dialogs.mwObj[p].idMw = id;	
	  			dialogs.setMinWindowEvent(id, dialogs.mwObj[p]);
			  }
  			  
  			}
  		  }
  		}
  	}

  	if (dialogs.objects[id].loadBGImg)
  	  this.setBgBodyImg(id,dialogs.bgImgDlg);
    dialogs.objects[id].style.opacity = 1;
    dialogs.setFocus(id);
    dialogs.hideAllMenuForAllDlg();
    dialogs.sendToFrom(id);
    dialogs.objects[id].style.display = "block";
    dialogs.objects[id].onShowDialogF();
    dialogs.objects[id].minWindow.eventShow();
    if (this.objects[id].isModal) 
    {	
      this.setBlockModal(id);
    }
    this.showHideBodyElements(id,true);
  },
  showModal: function(id)
  {
    this.objects[id].isModal = true;
    this.show(id);
  },
  setStaticOrder: function(id, isStatic)
  {
    this.objects[id].staticOrder = isStatic;
  },
  setBodyHeight: function(id, height)
  {
    this.objects[id].tableContainer.rows[2].cells[0].style.height = height + "px";
    this.objects[id].divBody.style.height = height + "px";
  },
  setWidth: function(id, width)
  {
    this.objects[id].tableTitle.style.width = width + "px";
    this.objects[id].tableContainer.style.width = width + "px";
    this.objects[id].tableTitleIcon.rows[0].cells[0].style.width = "30px";
    this.objects[id].tableTitleIcon.rows[0].cells[1].style.width = (width-30-40) +  "px";
  },
  setTitle: function(id, title)
  {
    this.objects[id].tableTitleIcon.rows[0].cells[1].innerHTML = title;
  },
  setColorTitle: function(id, color)
  {
    //this.objects[id].tableTitleIcon.rows[0].cells[1].style.color = color;
  },
  setBorderStyleTitleBar: function(id, borderStyle)
  {
    //this.objects[id].tableContainer.rows[0].cells[0].style.borderStyle = borderStyle;
  },
  setBorderStyleStsBar: function(id, borderStyle)
  {
    //this.objects[id].tableContainer.rows[3].cells[0].style.borderStyle = borderStyle;
  },
  setBorderStyleBodyDialog: function(id, borderStyle)
  {
    //this.objects[id].tableContainer.rows[2].cells[0].style.borderStyle = borderStyle;
  },
  setWidthControlButtons: function(id, value)
  {
    this.objects[id].buttonClose.style.width = value + "px";
    this.objects[id].buttonMin.style.width = value + "px";
    this.objects[id].buttonHelp.style.width = value + "px";
  },
  setHeightControlButtons: function(id, value)
  {
  	this.objects[id].heightControlButtons = value;
    this.objects[id].buttonClose.style.height = value + "px";
    this.objects[id].buttonClose.style.lineHeight = value + "px";
    this.objects[id].buttonClose.vAlign = "middle";
    this.objects[id].buttonMin.style.height = value + "px";
    this.objects[id].buttonMin.style.lineHeight = value + "px";
    this.objects[id].buttonMin.vAlign = "middle";
    this.objects[id].buttonHelp.style.height = value + "px";
    this.objects[id].buttonHelp.style.lineHeight = value + "px";
    this.objects[id].buttonHelp.vAlign = "middle";    
  },
  setHeightBarTitle: function(id, value)
  {
    this.objects[id].tableContainer.rows[0].cells[0].style.height = value + "px";
  },
  setHeightBarSts: function(id, value)
  {
  	this.objects[id].heightBarSts = value;
    this.objects[id].tableContainer.rows[3].cells[0].style.height = value + "px";
  },
  setMsg: function(id, msg, sts)
  {
  	this.objects[id].tableSts.rows[0].cells[1].style.height = this.objects[id].heightBarSts+'px';
    this.objects[id].tableSts.rows[0].cells[1].style.lineHeight = this.objects[id].heightBarSts+'px';
    this.objects[id].tableSts.rows[0].cells[1].vAlign = 'middle';
    this.objects[id].tableSts.rows[0].cells[1].innerHTML = msg;
    this.objects[id].stsMsg = msg;
    if(this.objects[id].orgMsg==undefined)
      this.objects[id].orgMsg = msg;      
    if(sts && !dialogs.objects[id].isFx){    
      this.objects[id].isFx=true;
      var actColor = this.objects[id].tableContainer.rows[3].cells[0].style.color;
      var actSize = this.objects[id].tableContainer.rows[3].cells[0].style.fontSize.split('px')[0];
      var f = true;
      var cont = 0;
      function fx(){
        if(f){
          dialogs.objects[id].tableContainer.rows[3].cells[0].style.fontSize = actSize+'px';
          dialogs.objects[id].tableContainer.rows[3].cells[0].style.color = actColor;	
          dialogs.objects[id].tableContainer.rows[3].cells[0].style.color = 'yellow';
          dialogs.objects[id].tableContainer.rows[3].cells[0].style.fontSize = (parseInt(actSize,10)+3)+'px';
          f=false;
        }
        else{
          dialogs.objects[id].tableContainer.rows[3].cells[0].style.fontSize = actSize+'px';
          dialogs.objects[id].tableContainer.rows[3].cells[0].style.color = actColor;	
          dialogs.objects[id].tableContainer.rows[3].cells[0].style.color = 'green';
          dialogs.objects[id].tableContainer.rows[3].cells[0].style.fontSize = (parseInt(actSize,10)+3)+'px';
          f=true;
        }
        cont+=10;
        if(cont === 200){
          dialogs.objects[id].tableContainer.rows[3].cells[0].style.fontSize = actSize+'px';
          dialogs.objects[id].tableContainer.rows[3].cells[0].style.color = actColor;
          dialogs.objects[id].isFx=false;
          clearInterval(si);
        }
      }
      var si = setInterval(fx, 200);
      dialogs.objects[id].tableContainer.rows[3].cells[0].style.fontSize = actSize+'px';
      dialogs.objects[id].tableContainer.rows[3].cells[0].style.color = actColor;
    }  
  },
  setColorTextMsg: function(id, color)
  {
    this.objects[id].tableSts.rows[0].cells[1].style.color = color;
    this.objects[id].actColor = color;
  },
  setBgColorBarTitle: function(id, color)
  {
  /*
  	if (!this.objects[id].loadBGImg) 
    {
      this.objects[id].tableContainer.rows[0].cells[0].style.backgroundColor = color;
    }
    */
  },
  setBgColorBarSts: function(id, color)
  {
  /*
  	if (!this.objects[id].loadBGImg) 
    {
      this.objects[id].tableContainer.rows[3].cells[0].style.backgroundColor = color;
    }
    */
  },
  setBgColorBodyDialog: function(id, color)
  {
    /*
  	if (!this.objects[id].loadBGImg) 
    {
      this.objects[id].tableContainer.rows[2].cells[0].style.backgroundColor = color;
    } 
    */
  },
  setFontBarTitle: function(id, fontFamily, fontSize, fontColor)
  {
  /*
    this.objects[id].tableTitleIcon.rows[0].cells[1].style.color = fontColor;
    this.objects[id].tableTitleIcon.rows[0].cells[1].style.fontFamily = fontFamily;
    this.objects[id].tableTitleIcon.rows[0].cells[1].style.fontSize = fontSize + "px";
    */
  },
  setFontBarSts: function(id, fontFamily, fontSize, fontColor)
  {
  /*
    this.objects[id].tableContainer.rows[3].cells[0].style.color = fontColor;
    this.objects[id].tableContainer.rows[3].cells[0].style.fontFamily = fontFamily;
    this.objects[id].tableContainer.rows[3].cells[0].style.fontSize = fontSize + "px";
    */
  },
  setSpacing: function(id, spacing, padding)
  {
    this.objects[id].tableBody.setAttribute("cellPadding", spacing);
    this.objects[id].tableBody.setAttribute("cellSpacing", padding);
  },
  setLoadBGImg: function(id, activeLoad)
  {
    //this.objects[id].loadBGImg = activeLoad;
  },
  setLoadBGImgAll: function(activeLoad)
  {
  /*
    for (i = 0; i < this.ids.length; i++) 
    {
      this.setLoadBGImg(this.ids[i], activeLoad);
    }
    */
  },
  
  setTransparencyBgImg : function(transparencyImg)
  {
    this.transparecyBgImg = transparencyImg; 
    if(attrib)
      attrib.BgImg.transparecyBgImg[attrib.getActualEnv()] = transparencyImg;
  },
  
  
  
  setIconDlg : function(id, path, icon)
  {
  /*
    this.iconImg = path+icon;
    this.objects[id].divIcon.img.src = this.iconImg;  
    if(attrib)
    {
      attrib.BgImg.initButtonIcon[attrib.getActualEnv()]=icon;
      attrib.ACTUAL_ICON_DLG = icon;
    }
    */
  },
  setIconAllDlg : function(path, icon)
  {
  /*
    for(var i=0; i<this.ids.length; i++)
    {
      this.setIconDlg(this.ids[i], path, icon);
    }
    */
  },
  setObjAttrib: function(id, objAttrib, env)
  {
    if(env===undefined)
      env = attrib.getActualEnv();
    //this.objects[id].loadBGImg = objAttrib.getLoadBGImg();
    //this.setFontBarTitle(id, objAttrib.Font.head[env], objAttrib.Size.dialogTitle[env], objAttrib.Color.textDialogBarraTitle[env]);
    //this.setFontBarSts(id, objAttrib.Font.head[env], objAttrib.Size.dialogTitle[env], objAttrib.Color.textDialogBarraTitle[env]);
    //this.objects[id].heightBarSts = objAttrib.Size.titleBar[env];
    //this.setHeightBarSts(id, this.objects[id].heightBarSts);
    //this.objects[id].heightBarTitle = objAttrib.Size.titleBar[env];
    //this.setHeightBarTitle(id, this.objects[id].heightBarTitle);
    this.menuProperty.colorText = objAttrib.Color.textMenu[env];
    this.menuProperty.colorTextSelected = objAttrib.Color.textMenuSel[env];
    this.menuProperty.colorTextSubMenu = objAttrib.Color.textSubMenu[env];
    if (this.objects[id].loadBGImg) 
    {
      //this.setBgBarImg(id, objAttrib.BgImg.barTitle[env]);
      //this.setBgBodyImg(id, objAttrib.BgImg.bgPanel[env]);
	    this.bgImgDlg = objAttrib.BgImg.bgPanel[env];
	    this.transparecyBgImg = objAttrib.BgImg.transparecyBgImg[env];
	    this.menuProperty.imgBar = "url("+this.bgImgPath+objAttrib.BgImg.barMenuDlg[env]+")";
  	  if(dialogs.objects[id].tableContainer.rows[1].cells[0])
  	  {
  	  	dialogs.objects[id].tableContainer.rows[1].cells[0].style.backgroundImage = dialogs.menuProperty.imgBar;
  	  }  
  	  this.menuProperty.imgBarSelected = 'url(images/bg/'+objAttrib.BgImg.bgSelected[env]+')';
  	  this.menuProperty.imgPanel = 'url(images/bg/'+objAttrib.BgImg.bgPanelMenuDlg[env]+')';
  	  this.menuProperty.fontFamily = objAttrib.Font.menu[env];
  	  this.menuProperty.fontSize = objAttrib.Size.menu[env];
      
  	  var ct =0;
  	  for(ct=0; ct<this.objects[id].idsPanelMenu.length; ct++)
  	  {
    	  var smd = this.objects[id].idsPanelMenu[ct]; 
    		this.objects[id].submenu[smd].panel.style.backgroundImage = this.menuProperty.imgPanel;
    		dialogs.objects[id].tablaMenu.rows[0].cells[ct].style.color = dialogs.menuProperty.colorText;
    		for (i = 0; i < dialogs.objects[id].submenu[smd].captions.length; i++)
    		dialogs.objects[id].submenu[smd].panel.tablaPanel.rows[i].style.color = dialogs.menuProperty.colorTextSubMenu;
  	  }
	  }
    //this.botonCloseImgPath = objAttrib.BgImg.botonCloseImgPathDlg[env];
    //this.botonMinImgPath = objAttrib.BgImg.botonMinImgPathDlg[env];
    //this.botonMaxImgPath = objAttrib.BgImg.botonMaxImgPathDlg[env];
    //this.fontFamilyBottonControl = objAttrib.Font.fontFamilyBottonControlDlg[env];
    //this.fontColorBottonControl = objAttrib.Color.fontColorBottonControlDlg[env];
    //this.objects[id].buttonClose.style.color = this.fontColorBottonControl;
    //this.objects[id].buttonClose.style.fontFamily = this.fontFamilyBottonControl;
    //this.objects[id].buttonClose.style.backgroundImage = 'url(' +this.bgImgPath+this.botonCloseImgPath + ')';
    //this.objects[id].buttonMin.style.fontFamily = this.fontFamilyBottonControl;
    //this.objects[id].buttonMin.style.backgroundImage = 'url(' +this.bgImgPath + this.botonMinImgPath + ')';
    //this.objects[id].buttonMin.style.color = this.fontColorBottonControl;
    this.setHeightControlButtons(id, objAttrib.Size.heightControlButtonsDlg[env]);
    this.setWidthControlButtons(id, objAttrib.Size.widthControlButtonsDlg[env]);
    //this.iconImg = 'images/logo/'+objAttrib.BgImg.initButtonIcon[env];
    //this.objects[id].divIcon.img.src = this.iconImg;
    this.setImageDivModal(objAttrib.BgImg.imgDivModal[env]);
    this.objects[id].divModal.style.backgroundImage = 'url(images/bg/'+ this.imgDivModal +')';
    this.objects[id].divModal.style.backgroundRepeat = 'repeat';    
    this.objects[id].className = this.objects[id].nameComponent + 'Css'+attrib.getActualEnv();
    this.objects[id].buttonClose.className = 'dialogsButtonCloseCss'+attrib.getActualEnv();
    this.objects[id].buttonMin.className = 'dialogsButtonCloseCss'+attrib.getActualEnv();
    this.objects[id].tableTitleIcon.rows[0].cells[1].className = 'dialogsTitleCss'+attrib.getActualEnv();
    this.objects[id].tableSts.rows[0].cells[1].className = 'dialogsMessageCss'+attrib.getActualEnv();
  },
  setObjAttribToAll: function(objAttrib, env)
  {
  /*
    for (i = 0; i < this.ids.length; i++) 
    {
      this.setObjAttrib(this.ids[i], attrib, env);
    }
  */
  }
}

