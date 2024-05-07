var customGrid =
{
  objects : new Array,
  whellID : "",
  mouseX : 0,
  mouseY : 0,
  TYPE_ON_FIRST : 0,
  TYPE_ON_LAST : 1,
  TYPE_ON_NEXT_PAGE : 2,
  TYPE_ON_PRIOR_PAGE : 3,
  TYPE_ON_NEXT : 4,
  TYPE_ON_PRIOR : 5,
  TYPE_ON_ORDER : 6,
  TYPE_ON_CHANGE_EDIT_PAGE : 7,
  bgImgPath :"images/bg/",
  bgImgTitle :"bg228.jpg",
  imgPath :"images/",
  bgImgEven :"bg290.jpg",
  bgImgSelected :"bg228.jpg",
  bgImgOdd :"bg123.jpg",
  imgFirstButton :"buttonWhiteFirst.png",
  imgNextButton :"buttonWhitePlay.png", 
  imgNextButtonPage :"buttonWhiteFF.png", 
  imgPriorButton :"buttonWhitePrior.png", 
  imgPriorButtonPage :"buttonWhiteRew.png", 
  imgLastButton :"buttonWhiteLast.png",
  sizeButtonControl : 25,
  TYPE_COLUMN_EDIT : 0,
  TYPE_COLUMN_RADIO : 1,
  TYPE_COLUMN_CHECK : 2, 
  TYPE_COLUMN_MEMO : 3,
  TYPE_COLUMN_IMAGE : 4,
  TYPE_COLUMN_EXT_OBJ : 5,
  TYPE_COLUMN_BUTTON : 6,
  TYPE_COLUMN_SELECT : 7,
  ids : new Array,
  upDateValueExtObj : true,

  propertyFontTitle : 
  {
  	family : 'verdana',
	color : 'white',
	size :12
  },

  propertyFontRow : 
  {
  	family : 'verdana',
	color : 'black',
	colorSelected : 'white',
	size : 10
  },
  
  xmlStructObj : new Object(),
   
addPropertyMethod : function(id){
  if(xmlStructs)  {
    customGrid.xmlStructObj = xmlStructs;	
  }
  
  customGrid.objects[id].addToBody  =  function()  {
    customGrid.addToBody(id);
  };
  
  customGrid.objects[id].setObjAttrib  =  function(objAttr,env)  {
    customGrid.setObjAttrib(id,objAttr,env);
  };

  customGrid.objects[id].hideBarTitle = function(){
	customGrid.hideBarTitle(id);
  };
  
  customGrid.objects[id].alignBarTitle = function(align){
	customGrid.alignBarTitle(id, align);
  };

  customGrid.objects[id].setTextBarTitle = function(title){
	customGrid.setTextBarTitle(id, title);
  };

  customGrid.objects[id].showBarTitle = function(){
	customGrid.showBarTitle(id);
  };

  customGrid.objects[id].hideBarControl = function(){
	customGrid.hideBarControl(id);
  }

  customGrid.objects[id].showBarControl = function(){
	customGrid.showBarControl(id);
  }
  
  customGrid.objects[id].getObject = function()  {
  	customGrid.getObject(id);
  };
  
  customGrid.objects[id].setBgImgTitle = function(bgImg)  {
  	customGrid.setBgImgTitle(id, bgImg);
  };
  
  customGrid.objects[id].setBgImgBody = function(bgImg)  {
  	customGrid.setBgImgBody(id, bgImg);
  };
  
  customGrid.objects[id].setFontTitleColumn = function(fontFamily, fontSize, color)  {
  	customGrid.setFontTitleColumn(id, fontFamily, fontSize, color);
  };
  
  customGrid.objects[id].setFontTitle = function(fontFamily,fontSize,color)  {
  	customGrid.setFontTitle(id,fontFamily,fontSize,color);
  };
  
  customGrid.objects[id].createColumnTable = function(typeColumn, totRows, titleColumn, groupName, widthCol)  {
  	customGrid.createColumnTable(id, typeColumn, totRows, titleColumn, groupName, widthCol);
  };
  
  customGrid.objects[id].setSizeCol = function(indexColumn, w)  {
  	customGrid.setSizeCol(id, indexColumn, w);
  };
  
  customGrid.objects[id].setHeightCell = function(h, indexColumn)  {
  	customGrid.setHeightCell(id, h, indexColumn);
  };
  
  customGrid.objects[id].setHeightAllCell = function(h)  {
  	customGrid.setHeightAllCell(id, h);
  };
  
  customGrid.objects[id].setBgTitleColumn = function(bgImg)  {
  	customGrid.setBgTitleColumn(id, bgImg);
  };
  
  customGrid.objects[id].setBgRow = function(bgImg, indexRow)  {
  	customGrid.setBgRow(id, bgImg, indexRow);
  };
  
  customGrid.objects[id].setTextColorRow = function(color, indexRow)  {
  	customGrid.setTextColorRow(id, color, indexRow);
  };
  
  customGrid.objects[id].setFontRow = function(family, size, color, indexRow)  {
  	customGrid.setFontRow(id, family, size, color, indexRow);
  };
  
  customGrid.objects[id].setFontAllRow = function(family, size, color)  {
  	customGrid.setFontAllRow(id, family, size, color);
  };
  
  customGrid.objects[id].setDataCell = function(row, col, data)  {
  	customGrid.setDataCell(id, row, col, data);
  };
  
  customGrid.objects[id].getObjectCell = function(row, col)  {
    return customGrid.getObjectCell(id, row, col);
  };
  
  customGrid.objects[id].setSizeObjCell = function(row, col, w, h)  {
  	customGrid.setSizeObjCell(id, row, col, w, h);
  };
  
  customGrid.objects[id].setDataColumn = function(col, dataArray)  {
  	customGrid.setDataColumn(id, col, dataArray);
  };
  
  customGrid.objects[id].getActualRow = function()  {
  	return customGrid.getActualRow(id);
  };
  
  customGrid.objects[id].getActualCol = function()  {
  	return customGrid.getActualCol(id);
  };
  	
  customGrid.objects[id].loadColumnTypeStruct = function(dataStruct, typeColumnArray, widthColumnArray)  {
  	customGrid.loadColumnTypeStruct(id, dataStruct, typeColumnArray, widthColumnArray);
  };
  
  customGrid.objects[id].getIndexStruct = function()  {
  	return customGrid.getIndexStruct(id);
  };
  
  customGrid.objects[id].showData = function()  {
  	customGrid.showData(id);
  };
  
  customGrid.objects[id].setSaveData = function()  {
  	customGrid.setSaveData(id);
  };
  
  customGrid.objects[id].getDataCell = function() {
	  var row = 0;
	  var col = 0;
	  
	  if(customGrid.objects[id].getDataCell.arguments.length < 2) {
		  col = customGrid.objects[id].getDataCell.arguments[0];
		  return customGrid.getDataCell(id, col);
	  }
	  else {
		  row = customGrid.objects[id].getDataCell.arguments[0];
		  col = customGrid.objects[id].getDataCell.arguments[1];
		  return customGrid.getDataCell(id, row, col);
	  }
  };
  
  customGrid.objects[id].getDataRow = function(row)  {
  	return customGrid.getDataRow(id, row);
  };
  
  customGrid.objects[id].getDataRowStruct = function(row)  {
  	return customGrid.getDataRowStruct(id, row);
  };
  
  customGrid.objects[id].getDataColumn = function(col)  {
  	return customGrid.getDataColumn(id, col);
  };
  
  customGrid.objects[id].onClickCell = function(row, col, funct)  {
  	customGrid.onClickCell(id, row, col, funct);
  };
  
  customGrid.objects[id].onDblClickCell = function(row, col, funct)  {
  	customGrid.onDblClickCell(id, row, col, funct);
  };
  
  customGrid.objects[id].onKeyPressCell = function(row, col, funct)  {
  	customGrid.onKeyPressCell(id, row, col, funct);
  };
  	
  customGrid.objects[id].onKeyUpCell = function(row, col, funct)  {
  	customGrid.onKeyUpCell(id, row, col, funct);
  };
  
  customGrid.objects[id].onKeyDownCell = function(row, col, funct)  {
  	customGrid.onKeyDownCell(id, row, col, funct);
  };
  
  customGrid.objects[id].onMouseOutCell = function(row, col, funct)  {
  	customGrid.onMouseOutCell(id, row, col, funct);
  };
  
  customGrid.objects[id].onMouseMoveCell = function(row, col, funct)  {
  	customGrid.onMouseMoveCell(id, row, col, funct);
  };
  
  customGrid.objects[id].onMouseOverCell = function(row, col, funct)  {
  	customGrid.onMouseOverCell(id, row, col, funct);
  };
  
  customGrid.objects[id].onClickRow = function(row, funct)  {
  	customGrid.onClickRow(id, row, funct);
  };
  
  customGrid.objects[id].loadDataStruct = function(dataStruct)  {
  	customGrid.loadDataStruct(id, dataStruct);
  };
  
  customGrid.objects[id].order = function(field)  {
  	customGrid.order(id, field);
  };
  
  customGrid.objects[id].onDblClickRow = function(row, funct)  {
  	customGrid.onDblClickRow(id, row, funct);
  };
  
  customGrid.objects[id].onMouseOutRow = function(row, funct)  {
  	customGrid.onMouseOutRow(id, row, funct);
  };
  
  customGrid.objects[id].onMouseMoveRow = function(row, funct)  {
  	customGrid.onMouseMoveRow(id, row, funct);
  };
  
  customGrid.objects[id].setBgCell = function(bgImg, row, cell)  {
  	customGrid.setBgCell(id, bgImg, row, cell);
  };
  
  customGrid.objects[id].setTextColorCell = function(color, row, col)  {
  	customGrid.setTextColorCell(id, color, row, col);
  };
  
  customGrid.objects[id].setSelectedLnMode = function(mode)  {
	customGrid.setSelectedLnMode(id, mode);
  };
  
  customGrid.objects[id].deleteRecordByIndex = function(index)  {
  	customGrid.deleteRecordByIndex(id, index);
  };
  
  customGrid.objects[id].getIndexStructByRow = function(row)  {
  	return customGrid.getIndexStructByRow(id, row);
  };
  
  customGrid.objects[id].hideCol = function(column)  {
  	customGrid.hideCol(id, column);
  };
  
  customGrid.objects[id].showColumn = function(column)  {
  	customGrid.showColumn(id, column);
  };
  
  customGrid.objects[id].getWidthColumnTable = function(indexColumn)  {
  	return customGrid.getWidthColumnTable(id, indexColumn);
  };
  
  customGrid.objects[id].addExtObj = function(col, arrayObj)  {
  	customGrid.addExtObj(id, col, arrayObj);
  };
  
  customGrid.objects[id].disableOrderColumn = function(col)  {
  	customGrid.disableOrderColumn(id, col);
  };
  
  customGrid.objects[id].enableOrderColumn = function(col)  {
  	customGrid.enableOrderColumn(id, col);
  };
  
  customGrid.objects[id].onControl = function(cteEvent, funct)  {
  	customGrid.onControl(id, cteEvent, funct);
  };
  
  customGrid.objects[id].addObjToTitle = function(columnNumber, extObj)  {
  	customGrid.addObjToTitle(id, columnNumber, extObj);
  };
  
  customGrid.objects[id].alignObjTitle = function(columnNumber, typeAlign)  {
  	customGrid.alignObjTitle(id, columnNumber, typeAlign);
  };
  
  customGrid.objects[id].alignColumnTitle = function(columnNumber, typeAlign)  {
  	customGrid.alignColumnTitle(id, columnNumber, typeAlign);
  };
  
  customGrid.objects[id].setMarginObjTitle = function(columnNumber, margin)  {
  	customGrid.setMarginObjTitle(id, columnNumber, margin);
  };
  
  customGrid.objects[id].createTitleObj = function(col, nameObj, typeObj)  {
  	return customGrid.createTitleObj(id, col, nameObj, typeObj);
  };
  
  customGrid.objects[id].setHeightRowTitles = function(height)  {
  	return customGrid.setHeightRowTitles(id, height);
  };
  
  customGrid.objects[id].setDimImgCell = function(w, h)  {
  	customGrid.setDimImgCell(id, w, h);
  };
  
  customGrid.objects[id].getObjTitle = function(columnNumber)  {
     return customGrid.getObjTitle(id, columnNumber);
  };
  
  customGrid.objects[id].setChecksOn = function(column)  {
    customGrid.setChecksOn(id, column);  
  };
  
  customGrid.objects[id].setChecksOff = function(column)  {
    customGrid.setChecksOff(id, column);  
  };
  
  customGrid.objects[id].activeCheckOnOff = function(column)  {
    customGrid.activeCheckOnOff(id, column);  
  };
  
  customGrid.objects[id].addTitleVectorX = function(vectorTitle)  {
    customGrid.addTitleVectorX(id, vectorTitle);  
  };
  
  customGrid.objects[id].getTotalRow = function()  {
    return customGrid.getTotalRow(id);  
  };
  
  customGrid.objects[id].getTotalCol = function()  {
    return customGrid.getTotalCol(id);  
  };
  
  customGrid.objects[id].onClickCells = function(funct)  {
    customGrid.onClickCells(id, funct);  
  };
  
  customGrid.objects[id].onDblClickCells = function(funct)  {
    customGrid.onDblClickCells(id, funct);  
  };

  customGrid.objects[id].clean = function()  {
    customGrid.clean(id);  
  };
  
  customGrid.objects[id].setReadOnlyCol = function(col, sts)  {
    customGrid.setReadOnlyCol(id, col, sts);  
  };
  
  customGrid.objects[id].getXMLStruct = function(name)  {
    return customGrid.getXMLStruct(id, name);
  };
  
  customGrid.objects[id].getXML = function()  {
    return customGrid.getXML(id);
  };
  
  customGrid.objects[id].setXMLStruct = function(obj)  {
    customGrid.setXMLStruct(id, obj);
  };
  
  customGrid.objects[id].groupRadioByRow = function(colArr, groupName)  {
  	customGrid.groupRadioByRow(id, colArr, groupName);
  };
  
  customGrid.objects[id].getTotalRowStruct = function()  {
  	return customGrid.getTotalRowStruct(id);
  };
  
  customGrid.objects[id].deleteRecordByRow = function(row)  {
    customGrid.deleteRecordByRow(id, row);
  };
  
  customGrid.objects[id].addRecord = function(arrRecord)  {
  	customGrid.addRecord(id, arrRecord);
  };
  
  customGrid.objects[id].setFocus = function()  {
  	customGrid.setFocus(id);
  };
  
  customGrid.objects[id].getDataCellStruct = function(row, col)  {
  	return customGrid.getDataCellStruct(id, row, col);
  };
  
  customGrid.objects[id].deleteRecordByColCondition = function(colCond)  {
  	customGrid.deleteRecordByColCondition(id, colCond);
  };
  
  customGrid.objects[id].recordExist = function(arrRecord)  {
  	return customGrid.recordExist(id, arrRecord);
  };

  customGrid.objects[id].setPosition = function(x, y){
	customGrid.setPosition(id, x, y);
  }

  customGrid.objects[id].setHeightBody = function(hb){
	customGrid.setHeightBody(id, hb);
  }
},

  setPosition : function(id, x, y){
	this.objects[id].style.position = 'absolute';
	this.objects[id].style.left = x + 'px';
	this.objects[id].style.top = y + 'px';
  },

  addRecord : function(id, arrRecord)  {
    this.objects[id].struct.addRecord(arrRecord);	
    this.showData(id);
  },
  
  recordExist : function(id, arrRecord)  {
  	 return this.objects[id].struct.recordExist(arrRecord);
  },
  
  addObjToTitle : function(id, columnNumber, obj)  {
  	this.objects[id].columnTable[columnNumber].tableContainer.rows[0].cells[0].tabla.rows[0].cells[0].appendChild(obj);  	
  },
  
  getObjTitle : function(id, columnNumber)  {
    return this.objects[id].columnTable[columnNumber].tableContainer.rows[0].cells[0].tabla.rows[0].cells[0].firstChild;     
  },
  
  setMarginObjTitle : function(id, columnNumber, margin)  {
  	this.objects[id].columnTable[columnNumber].tableContainer.rows[0].cells[0].tabla.rows[0].cells[0].style.width = margin+'px';
  },
  
  alignObjTitle : function(id, columnNumber, typeAlign)  {
  	this.objects[id].columnTable[columnNumber].tableContainer.rows[0].cells[0].tabla.rows[0].cells[0].align = typeAlign;  	
  },
  
  alignColumnTitle : function(id, columnNumber, typeAlign)  {
  	this.objects[id].columnTable[columnNumber].tableContainer.rows[0].cells[0].align = typeAlign;  	
  }, 

  addToBody : function(id)  {
    document.body.appendChild(this.objects[id]);
  },
  
  addExtObj : function(id, col, arrayObj)  {
	for(var i=0; i<arrayObj.length; i++){
		this.objects[id].columnTable[col].elements[i].appendChild(arrayObj[i]);	
	}
  },
  
  ButtonsEvents : function(id)  {
  	this.objects[id].buttonFirst.onmousedown = function(e)	{		
	  customGrid.objects[id].struct.upDateData();
      customGrid.setDiselectedLn(id);
 	  customGrid.objects[id].buttonFirst.style.borderStyle='inset';
	  customGrid.objects[id].struct.first();
	  customGrid.showData(id);
	  customGrid.setSelectedLn(id);
	  customGrid.objects[id].onFirst();
	};
	this.objects[id].buttonFirst.onmouseup = function(e)	{	
	  customGrid.objects[id].buttonFirst.style.borderStyle='outset';
	};
	
	this.objects[id].buttonFirst.onmouseout = function(e)	{
	  customGrid.objects[id].buttonFirst.style.cursor='default';		
	  customGrid.objects[id].buttonFirst.style.borderStyle='outset';
	  customGrid.objects[id].buttonFirst.style.borderWidth='1px';
	};
	
	this.objects[id].buttonFirst.onmouseover = function(e)	{	
	  customGrid.objects[id].buttonFirst.style.cursor='pointer';	
	  customGrid.objects[id].buttonFirst.style.borderStyle='outset';
	  customGrid.objects[id].buttonFirst.style.borderWidth='1px';
	};
	
  	this.objects[id].buttonNextPage.onmousedown = function(e)	{	
	  customGrid.objects[id].struct.upDateData();
	  customGrid.setDiselectedLn(id);
	  customGrid.objects[id].buttonNextPage.style.borderStyle='inset';
	  customGrid.objects[id].struct.nextPage();
	  customGrid.showData(id);
	  customGrid.setSelectedLn(id);
	  customGrid.objects[id].onNextPage();
	};
	
	this.objects[id].buttonNextPage.onmouseup = function(e)	{	
	  customGrid.objects[id].buttonNextPage.style.borderStyle='outset';
	};
	
	this.objects[id].buttonNextPage.onmouseout = function(e)	{
	  customGrid.objects[id].buttonNextPage.style.cursor='default';		
	  customGrid.objects[id].buttonNextPage.style.borderStyle='outset';
	  customGrid.objects[id].buttonNextPage.style.borderWidth='1px';
	};
	
	this.objects[id].buttonNextPage.onmouseover = function(e)	{
	  customGrid.objects[id].buttonNextPage.style.cursor='pointer';		
	  customGrid.objects[id].buttonNextPage.style.borderStyle='outset';
	  customGrid.objects[id].buttonNextPage.style.borderWidth='1px';
	};
  	
  	this.objects[id].buttonNext.onmousedown = function(e)	{	
	  customGrid.objects[id].struct.upDateData();
	  customGrid.setDiselectedLn(id);
	  customGrid.objects[id].buttonNext.style.borderStyle='inset';
	  customGrid.objects[id].struct.nextItem();
	  customGrid.showData(id);      
	  customGrid.setSelectedLn(id);
	  customGrid.objects[id].onNext();
	};
	
	this.objects[id].buttonNext.onmouseup = function(e)	{	
	  customGrid.objects[id].buttonNext.style.borderStyle='outset';
	};
	
	this.objects[id].buttonNext.onmouseout = function(e)	{	
	  customGrid.objects[id].buttonNext.style.cursor='default';	
	  customGrid.objects[id].buttonNext.style.borderStyle='outset';
	  customGrid.objects[id].buttonNext.style.borderWidth='1px';
	};
	
	this.objects[id].buttonNext.onmouseover = function(e)	{
	  customGrid.objects[id].buttonNext.style.cursor='pointer';		
	  customGrid.objects[id].buttonNext.style.borderStyle='outset';
	  customGrid.objects[id].buttonNext.style.borderWidth='1px';
	};
	
  	this.objects[id].buttonPrior.onmousedown = function(e)	{	
	  customGrid.objects[id].struct.upDateData();
	  customGrid.setDiselectedLn(id);
	  customGrid.objects[id].buttonPrior.style.borderStyle='inset';
	  customGrid.objects[id].struct.priorItem();
	  customGrid.showData(id);
	  customGrid.setSelectedLn(id);
	  customGrid.objects[id].onPrior();
	};
	
	this.objects[id].buttonPrior.onmouseup = function(e)	{	
	  customGrid.objects[id].buttonPrior.style.borderStyle='outset';
	};
	
	this.objects[id].buttonPrior.onmouseout = function(e)	{	
	  customGrid.objects[id].buttonPrior.style.cursor ='default';	
	  customGrid.objects[id].buttonPrior.style.borderStyle='outset';
	  customGrid.objects[id].buttonPrior.style.borderWidth='1px';
	};
	
	this.objects[id].buttonPrior.onmouseover = function(e)
	{
	  customGrid.objects[id].buttonPrior.style.cursor ='pointer';		
	  customGrid.objects[id].buttonPrior.style.borderStyle='outset';
	  customGrid.objects[id].buttonPrior.style.borderWidth='1px';
	};
	
  	this.objects[id].buttonPriorPage.onmousedown = function(e)	{	
	  customGrid.objects[id].struct.upDateData();
	  customGrid.setDiselectedLn(id);
	  customGrid.objects[id].buttonPriorPage.style.borderStyle='inset';
	  customGrid.objects[id].struct.priorPage();
	  customGrid.showData(id);
	  customGrid.setSelectedLn(id);
	  customGrid.objects[id].onPriorPage();
	};
	
	this.objects[id].buttonPriorPage.onmouseup = function(e)	{	
	  customGrid.objects[id].buttonPriorPage.style.borderStyle='outset';
	};
	
	this.objects[id].buttonPriorPage.onmouseout = function(e)	{	
	  customGrid.objects[id].buttonPriorPage.style.cursor='default';	
	  customGrid.objects[id].buttonPriorPage.style.borderStyle='outset';
	  customGrid.objects[id].buttonPriorPage.style.borderWidth='1px';
	};
	
	this.objects[id].buttonPriorPage.onmouseover = function(e)	{
	  customGrid.objects[id].buttonPriorPage.style.cursor='pointer';		
	  customGrid.objects[id].buttonPriorPage.style.borderStyle='outset';
	  customGrid.objects[id].buttonPriorPage.style.borderWidth='1px';
	};
	
	this.objects[id].buttonLast.onmousedown = function(e)	{	
	  customGrid.objects[id].struct.upDateData();
	  customGrid.setDiselectedLn(id);
	  customGrid.objects[id].buttonLast.style.borderStyle='inset';
	  customGrid.objects[id].struct.last();
	  customGrid.showData(id);
	  customGrid.setSelectedLn(id);
	  customGrid.objects[id].onLast();
	};
	
	this.objects[id].buttonLast.onmouseup = function(e)	{	
	  customGrid.objects[id].buttonLast.style.borderStyle='outset';
	};
	
	this.objects[id].buttonLast.onmouseout = function(e)	{
	  customGrid.objects[id].buttonLast.style.cursor='default';		
	  customGrid.objects[id].buttonLast.style.borderStyle='outset';
	  customGrid.objects[id].buttonLast.style.borderWidth='1px';
	};
	
	this.objects[id].buttonLast.onmouseover = function(e)	{
	  customGrid.objects[id].buttonLast.style.cursor='pointer';		
	  customGrid.objects[id].buttonLast.style.borderStyle='outset';
	  customGrid.objects[id].buttonLast.style.borderWidth='1px';
	};
	
	this.objects[id].pageEdit.onkeyup = function(e)	{
	  customGrid.objects[id].struct.upDateData();	
	  var  v =  parseInt(customGrid.objects[id].pageEdit.value,10)-1;
	  var tp = customGrid.objects[id].struct.getTotalPages();
	  if (v > tp-1)	  {	  	
	  	customGrid.objects[id].struct.itemPage = tp-1;
		customGrid.objects[id].struct.last();
	  }
	  else	  {
	  	customGrid.objects[id].struct.itemPage = v;
	  };
	  customGrid.showData(id);
	  customGrid.objects[id].onChangeEditPage();
	};
  },
  
  destroyAllColumnTable : function(id)  {
  	var i=0;
	var p = this.objects[id].columnTable.length;
	for(i=0; i<p; i++)	{	 
	  this.objects[id].columnTable.splice(this.objects[id].columnTable.length-1,1);
	}
	this.objects[id].columnTable = new Array();	
  },
  
  createTitleObj : function(id, col, nameObj, typeObj)  {
  	this.objects[id].HTMLElement[col] = document.createElement(nameObj);
  	this.objects[id].HTMLElement[col].type=typeObj;
  	this.addObjToTitle(id, col, this.objects[id].HTMLElement[col]);
  	return this.objects[id].HTMLElement[col];
  },
  
  createColumnTable : function(id, typeColumn, totRows, titleColumn, groupName, widthCol)  {
  	var i=0;
  	var p = this.objects[id].columnTable.length;
	this.objects[id].columnTable[p] = document.createElement('div');
	this.objects[id].columnTable[p].orderEnable=true;
	this.objects[id].columnTable[p].data = new Array();
	this.objects[id].columnTable[p].tableContainer = document.createElement('table');
	this.objects[id].columnTable[p].tableContainer.setAttribute("border","0");
    this.objects[id].columnTable[p].tableContainer.setAttribute("cellPadding","0");
    this.objects[id].columnTable[p].tableContainer.setAttribute("cellSpacing","0");
	this.objects[id].columnTable[p].tableContainer.insertRow(0);
	this.objects[id].columnTable[p].tableContainer.insertRow(1);
	this.objects[id].columnTable[p].tableContainer.rows[0].insertCell(0);
	this.objects[id].columnTable[p].tableContainer.rows[1].insertCell(0);
	this.objects[id].columnTable[p].tableContainer.rows[0].cells[0].tabla =document.createElement('table');
    this.objects[id].columnTable[p].tableContainer.rows[0].cells[0].tabla.setAttribute("border","0");
    this.objects[id].columnTable[p].tableContainer.rows[0].cells[0].tabla.setAttribute("cellPadding","0");
    this.objects[id].columnTable[p].tableContainer.rows[0].cells[0].tabla.setAttribute("cellSpacing","0");
    this.objects[id].columnTable[p].tableContainer.rows[0].cells[0].tabla.insertRow(0);
    this.objects[id].columnTable[p].tableContainer.rows[0].cells[0].tabla.rows[0].insertCell(0);
    this.objects[id].columnTable[p].tableContainer.rows[0].cells[0].tabla.rows[0].insertCell(1);
    this.objects[id].columnTable[p].tableContainer.rows[0].cells[0].appendChild(this.objects[id].columnTable[p].tableContainer.rows[0].cells[0].tabla);
    this.objects[id].columnTable[p].tableContainer.rows[0].cells[0].tabla.rows[0].cells[1].innerHTML = titleColumn;
    this.objects[id].columnTable[p].tableContainer.rows[0].cells[0].tabla.rows[0].cells[1].style.fontWeight = 'bold';
	this.objects[id].columnTable[p].tableContainer.rows[0].cells[0].align = 'center';
	this.objects[id].columnTable[p].tableContainer.rows[0].cells[0].style.height = '23px';
	this.objects[id].columnTable[p].typeColumn = typeColumn;
	this.objects[id].columnTable[p].elements = new Array();
	this.objects[id].columnTable[p].tableColumn = document.createElement('table');
	this.objects[id].columnTable[p].tableColumn.setAttribute("border","0");
    this.objects[id].columnTable[p].tableColumn.setAttribute("cellPadding","0");
    this.objects[id].columnTable[p].tableColumn.setAttribute("cellSpacing","0");		
	this.objects[id].columnTable[p].tableContainer.rows[1].cells[0].appendChild(this.objects[id].columnTable[p].tableColumn);
	this.objects[id].columnTable[p].tableContainer.rows[0].cells[0].onclick = function(e)	{
		if ((customGrid.objects[id].columnTable[p].typeColumn == 0) || (customGrid.objects[id].columnTable[p].typeColumn == 3))
		{
		   if(customGrid.objects[id].columnTable[p].orderEnable)	
		      customGrid.order(id,p);
		}
	};
	
	this.objects[id].columnTable[p].tableContainer.rows[0].cells[0].onmouseover = function(e)	{
		if (customGrid.objects[id].columnTable[p].typeColumn == 0)
		  customGrid.objects[id].columnTable[p].tableContainer.rows[0].cells[0].style.cursor='pointer';
		if (customGrid.objects[id].columnTable[p].typeColumn == 3)
		  customGrid.objects[id].columnTable[p].tableContainer.rows[0].cells[0].style.cursor='pointer';
	};
	
	this.objects[id].columnTable[p].tableContainer.rows[0].cells[0].onmouseout = function(e)	{
		if (customGrid.objects[id].columnTable[p].typeColumn == 0)
		  customGrid.objects[id].columnTable[p].tableContainer.rows[0].cells[0].style.cursor='default';
		if (customGrid.objects[id].columnTable[p].typeColumn == 3)
		  customGrid.objects[id].columnTable[p].tableContainer.rows[0].cells[0].style.cursor='pointer';
	};
	
	for (i = 0; i < totRows; i++) 	{
		switch (typeColumn)	{
			case 0 : {
						this.objects[id].columnTable[p].elements[i] = document.createElement('input');
						this.objects[id].columnTable[p].elements[i].type = 'text';
						this.objects[id].columnTable[p].elements[i].name = id + 'edit' + groupName + i;
						this.objects[id].columnTable[p].elements[i].typeColumn = typeColumn;
						break;
					 }
			case 1:	 {
						this.objects[id].columnTable[p].elements[i] = document.createElement('input');
						this.objects[id].columnTable[p].elements[i].type = 'radio';
						this.objects[id].columnTable[p].elements[i].name = id + 'radio' + groupName;
						this.objects[id].columnTable[p].elements[i].typeColumn = typeColumn;
						break;
					 }
			case 2:  {
						this.objects[id].columnTable[p].elements[i] = document.createElement('input');
						this.objects[id].columnTable[p].elements[i].type = 'checkbox';
						this.objects[id].columnTable[p].elements[i].name = id + 'checkbox' + groupName + i;
						this.objects[id].columnTable[p].elements[i].typeColumn = typeColumn;
						break;
					 }
			case 3:  {
						this.objects[id].columnTable[p].elements[i] = document.createElement('textArea');
						this.objects[id].columnTable[p].elements[i].name = id + 'textArea' + groupName + i;
						this.objects[id].columnTable[p].elements[i].typeColumn = typeColumn;
						break;
					 }
			case 4:  {
						this.objects[id].columnTable[p].elements[i] = document.createElement('img');
						this.objects[id].columnTable[p].elements[i].name = id + 'img' + groupName + i;
						this.objects[id].columnTable[p].elements[i].typeColumn = typeColumn;
						break;
					 }
			case 5:	 {
						this.objects[id].columnTable[p].elements[i] = document.createElement('div');
						this.objects[id].columnTable[p].elements[i].name = id + 'object' + groupName + i;
						this.objects[id].columnTable[p].elements[i].typeColumn = typeColumn;
						break;
					 }
			case 6:	 {
						this.objects[id].columnTable[p].elements[i] = document.createElement('input');
						this.objects[id].columnTable[p].elements[i].type = 'button';						
						this.objects[id].columnTable[p].elements[i].name = id + 'button' + groupName + i;
						this.objects[id].columnTable[p].elements[i].typeColumn = typeColumn;
						break;
					 }
			case 7:	 {
						this.objects[id].columnTable[p].elements[i] = document.createElement('select');
						this.objects[id].columnTable[p].elements[i].name = id + 'select' + groupName + i;
						this.objects[id].columnTable[p].elements[i].typeColumn = typeColumn;
						break;
					 }
		}
		
		this.objects[id].columnTable[p].elements[i].aRow = i;
		this.objects[id].columnTable[p].elements[i].aCol = p;
		this.objects[id].columnTable[p].elements[i].style.borderWidth = '0px';
		this.objects[id].columnTable[p].elements[i].style.padding = '0px';
		this.objects[id].columnTable[p].elements[i].style.borderRadius = '0em';
		
		this.objects[id].columnTable[p].tableColumn.insertRow(i);
		if(i % 2 == 0)		  
		  this.objects[id].columnTable[p].tableColumn.rows[i].isPar = true
		else
		  this.objects[id].columnTable[p].tableColumn.rows[i].isPar = false;
		
		this.objects[id].columnTable[p].tableColumn.rows[i].insertCell(0);
		this.objects[id].columnTable[p].tableColumn.rows[i].cells[0].align = 'center';
		this.objects[id].columnTable[p].tableColumn.rows[i].cells[0].vAlign = 'middle';			
		this.objects[id].columnTable[p].tableColumn.rows[i].cells[0].appendChild(this.objects[id].columnTable[p].elements[i]);
	    this.objects[id].columnTable[p].tableColumn.rows[i].row = i;
		this.objects[id].columnTable[p].tableColumn.rows[i].col = p;
	 
	    this.objects[id].columnTable[p].tableColumn.rows[i].onmouseover = function(e)	    {	
		  var i=0;
	      for(i=0; i<customGrid.objects[id].struct.pageSize; i++)	      {
	        if(i % 2)
	          customGrid.setBgRow(id, customGrid.bgImgOdd, i); 
	        else
	          customGrid.setBgRow(id, customGrid.bgImgEven, i);
	        customGrid.setTextColorRow(id, customGrid.propertyFontRow.color, i);
	      }
		  
		  switch (customGrid.objects[id].modeRowSelect)		  {
		  	case 0 : 
			{	
			  customGrid.setBgRow(id, customGrid.bgImgSelected, this.row);
			  customGrid.setTextColorRow(id, customGrid.propertyFontRow.colorSelected, this.row);
			  break;
			}
		   	case 1 : 
			{
			  customGrid.setBgCell(id, customGrid.bgImgSelected, this.row, this.col);
			  customGrid.setTextColorCell(id, customGrid.propertyFontRow.colorSelected, this.row, this.col);
			  break;
			}
		  } 		 
		  customGrid.objects[id].actualRow = this.row;
		  customGrid.objects[id].actualCol = this.col;
	    }
		
		this.objects[id].columnTable[p].tableColumn.rows[i].onmouseout = function(e)	    {
		  if(this.isPar)
		    customGrid.setBgRow(id, customGrid.bgImgEven, this.row)
		  else
		    customGrid.setBgRow(id, customGrid.bgImgOdd, this.row);
		  customGrid.setTextColorRow(id, customGrid.propertyFontRow.color, this.row);
		  if(customGrid.objects[id].onMouseOutRow[this.row]!=undefined && customGrid.objects[id].onMouseOutRow[this.row]!=null)
		    customGrid.objects[id].onMouseOutRow[this.row]();
	    }
		this.setFontRow(id, customGrid.propertyFontRow.family, 
	                customGrid.propertyFontRow.size, 
					customGrid.propertyFontRow.color, i);
	}
	
	this.objects[id].columnTable[p].appendChild(this.objects[id].columnTable[p].tableContainer);
	this.objects[id].tableBody.rows[0].insertCell(p);
	this.objects[id].tableBody.rows[0].cells[p].appendChild(this.objects[id].columnTable[p]);
	this.objects[id].tableBody.rows[0].cells[p].vAlign ='top';
	this.setHeightCell(id, 21, p);
	this.setBgTitleColumn(id, this.bgImgTitle);
	this.setFontTitleColumn(id,customGrid.propertyFontTitle.family,
	                        customGrid.propertyFontTitle.size,
							customGrid.propertyFontTitle.color);
	
	 if(widthCol)
	   this.setSizeCol(id,p,widthCol);
	 else
	   this.setSizeCol(id,p,100);
	 this.setEvenOddBgImg(id, this.bgImgEven, this.bgImgOdd);
  },
  
  getTotalRow : function(id)  {
    return this.objects[id].totalRows;  
  },
   
  getTotalRowStruct : function(id){
  	return this.objects[id].struct.getTotalRows();
  },
   
  getTotalCol : function(id)  {
    return this.objects[id].totalColumns;  
  },
  create : function(id, title, heightBody, width, heigthCells, totalRows) {
    this.objects[id] = document.createElement('div');
    this.objects[id].totalRows = totalRows;
	this.objects[id].ambiente = attrib.getActualEnv();
    this.objects[id].totalColumns = 0;
    this.objects[id].nameComponent = 'customGrid';
	this.ids[this.ids.length] = id;
	this.objects[id].id = id;
	this.objects[id].HTMLElement = new Array();
	this.objects[id].onFirst = new Function('');
	this.objects[id].onLast = new Function('');
	this.objects[id].onNextPage = new Function('');
	this.objects[id].onPriorPage = new Function('');
	this.objects[id].onNext = new Function('');
	this.objects[id].onPrior = new Function('');
	this.objects[id].onOrder = new Function('');
	this.objects[id].onChangeEditPage = new Function('');
	this.objects[id].widthImgCell = 17;
	this.objects[id].heightImgCell = 17;
	this.whellID = id;
	this.objects[id].onMouseOutRow = new Array();
	this.objects[id].modeRowSelect = 1;
	this.objects[id].loadData = false;
	this.objects[id].heigthCell = heigthCells;
	this.objects[id].orderField = -1;
    this.objects[id].totalClick = 0;
    this.objects[id].list = new Array;
    this.objects[id].keys = new Array;
	this.objects[id].struct =	{
		offsetPage : 0,
        pageSize   : 0,
        itemPage   : 0,
        fields     : [],
		typeColumn : [0],
        data       : [[],[]],
		index	   : 0, 
		getTotalPages : function(){
			var tr = this.data[0].length;
			var residuo = tr % this.pageSize;
			var tp= parseInt(tr / this.pageSize,10);
			if(residuo!=0)
			  tp++;  
			return tp;
		},
		getActRow : function(){
		  return this.itemPage * this.pageSize + this.offsetPage;
		},
		getTotalRows : function(){
		  return this.data[0].length;
		},
		setEditPage : function(){	
		  customGrid.objects[id].pageEdit.value = this.itemPage+1;
		},
		upDateIndex : function(){
	      this.index = this.offsetPage + this.itemPage * this.pageSize;
		  return this.index;
		},
		first : function(){
		  this.offsetPage=0;
		  this.itemPage = 0;
		  this.setEditPage();
		},
		last : function(){
		  this.offsetPage=0;
		  this.itemPage = this.getTotalPages() - 1;
		  this.setEditPage();
		}, 
		nextItem   : function()	{
		  var ix = this.upDateIndex();	
		  this.offsetPage++;
		  if(this.offsetPage > this.pageSize - 1)
		  {
			this.nextPage();
			if (this.itemPage < this.getTotalPages() - 1) 
			  this.offsetPage = 0;
			else 
			{	
			  if(ix == this.data[0].length-1)	
			  {
			  	this.offsetPage = this.pageSize - 1;
			  } 
			  else
			  {
			  	this.offsetPage = 0;
			  }
			}
		  }  	
		  this.setEditPage();
		},
		upDateData : function()	{
			for(i=0; i<this.data.length; i++)
			{
			  customGrid.saveDataCol(id,i);
			}
		},
		nextPage : function(){	
		  this.itemPage++;
		  if(this.itemPage > this.getTotalPages()-1)  {
		    this.itemPage = this.getTotalPages()-1;
		  }	
		  this.setEditPage();
		},
		priorItem : function() 	{
		  this.offsetPage--;
		  if(this.offsetPage < 0) {
		  	if(this.itemPage > 0){
			  this.priorPage();
			  this.offsetPage = this.pageSize-1;	
			}
			else
			  this.offsetPage=0;			
		  }  	
		  this.setEditPage();
		},
		priorPage : function(){	
		  this.itemPage--;
		  if(this.itemPage < 0) {
		    this.itemPage++;
		  }	
		  this.setEditPage();
		},
		getColumnData : function(column){ 	
		  var c = new Array;
		  var idx = this.upDateIndex();
		  for (var i=0; i<this.pageSize; i++) {
			if ((this.itemPage*this.pageSize+i) < this.data[column].length) {
			  c[i] = this.data[column][this.itemPage*this.pageSize+i];
			}  
			else {
			  c[i] = '';
			}
		  }	
		  return c;
		},
		getRecord : function(row){
		  var rec = new Array;
		  var i=0;
		  for (i = 0; i < this.fields.length; i++) {
		  	rec[i] = this.data[i][row];
  		  }
		  return rec;
		},
		recordExist : function(arrRecord){ 	
		  var flagRec = false;	
		  for(var f = 0; f < this.getTotalRows(); f++) {
		  	flagRec = true;
		  	for (var c = 0; c < this.fields.length; c++) {
		  	  if(this.data[c][f] != arrRecord[c])
		  	    flagRec=false;
  		    }
  		    if(flagRec)
  		      break;
		  }	
		  return flagRec;
		},		
		deleteRecord : function(index){
		  for (var i = 0; i < this.fields.length; i++) {
		  	this.data[i].splice(index,1);
  		  }	
		},
		deleteRecordByColCondition : function(colCond){
		  for(var f = 0; f < this.getTotalRows(); f++){
		    if(this.data[colCond][f]==1){
		      for (var i = 0; i < this.fields.length; i++){
		  	    this.data[i].splice(f,1);
  		      }
  		      f--;	
  		    }
  		  }
		},
		getValue : function(row, col){
		  return this.data[col][row];	
		},
		setRecord : function(row, record){
		  for (var i = 0; i < record.length; i++) {
		  	this.data[i][row] = record[i];
  		  }	
		},
		addRecord : function(record){
		  for (var i = 0; i < record.length; i++) {
		  	this.data[i][this.data[i].length] = record[i];
  		  }	
		},
		setColumnData : function(column, dataCol){
		  for (var i = 0; i < dataCol.length; i++) {
		  	this.data[column][i] = dataCol[i];
  		  }
		},
		setValue : function(row,col, value){
		  this.data[col][row] = value;	
		}
	}
	this.ids[this.ids.length] = id;
	this.objects[id].columnTable = new Array();
	this.objects[id].heightBody = heightBody;
	this.objects[id].actualRow = 0;
	this.objects[id].actualCol = 0;
	this.objects[id].widthGrid = width;
	this.objects[id].tablePrinc = document.createElement('table');
	this.objects[id].tablePrinc.setAttribute("border","0");
    this.objects[id].tablePrinc.setAttribute("cellPadding","0");
    this.objects[id].tablePrinc.setAttribute("cellSpacing","0");
	this.objects[id].tablePrinc.insertRow(0);
	this.objects[id].tablePrinc.insertRow(1);
	this.objects[id].tablePrinc.insertRow(2);
	this.objects[id].tablePrinc.rows[0].insertCell(0);
	this.objects[id].tablePrinc.rows[1].insertCell(0);
	this.objects[id].tablePrinc.rows[2].insertCell(0);
	this.objects[id].tablePrinc.rows[0].cells[0].align ='center';
	this.objects[id].tableBody = document.createElement('table');
	this.objects[id].tableBody.setAttribute("border","0");
    this.objects[id].tableBody.setAttribute("cellPadding","0");
    this.objects[id].tableBody.setAttribute("cellSpacing","1");
	this.objects[id].tableBody.insertRow(0);
	this.objects[id].containerTableBody = document.createElement('div');
	this.objects[id].containerTableBody.style.height = this.objects[id].heightBody + 'px';
	this.objects[id].containerTableBody.style.width = width + 'px';
	this.objects[id].containerTableBody.style.overflow = "auto";
	this.objects[id].containerTableBody.appendChild(this.objects[id].tableBody);
	this.objects[id].tableControl = document.createElement('table');
	this.objects[id].tableControl.setAttribute("border","0");
    this.objects[id].tableControl.setAttribute("cellPadding","0px");
    this.objects[id].tableControl.setAttribute("cellSpacing","0");
	this.objects[id].tableControl.insertRow(0);
	this.objects[id].tableControl.rows[0].insertCell(0);
	this.objects[id].tableControl.rows[0].insertCell(1);
	this.objects[id].tableControl.rows[0].insertCell(2);
	this.objects[id].tableControl.rows[0].insertCell(3);
	this.objects[id].tableControl.rows[0].insertCell(4);
	this.objects[id].tableControl.rows[0].insertCell(5);
	this.objects[id].tableControl.rows[0].insertCell(6);
	this.objects[id].tableControl.rows[0].insertCell(7);
	this.objects[id].tableControl.rows[0].cells[0].align='left';
	this.objects[id].tableControl.rows[0].cells[1].align='left';
	this.objects[id].tableControl.rows[0].cells[2].align='left';
	this.objects[id].tableControl.rows[0].cells[3].align='right';
	this.objects[id].tableControl.rows[0].cells[4].align='left';
	this.objects[id].tableControl.rows[0].cells[5].align='right';
	this.objects[id].tableControl.rows[0].cells[6].align='right';
	this.objects[id].tableControl.rows[0].cells[7].align='right';
	this.objects[id].tableControl.rows[0].cells[0].style.borderWidth ='0px';
	this.objects[id].tableControl.rows[0].cells[1].style.borderWidth ='0px';
	this.objects[id].tableControl.rows[0].cells[2].style.borderWidth ='0px';
	this.objects[id].tableControl.rows[0].cells[3].style.borderWidth ='0px';
	this.objects[id].tableControl.rows[0].cells[4].style.borderWidth ='0px';
	this.objects[id].tableControl.rows[0].cells[5].style.borderWidth ='0px';
	this.objects[id].tableControl.rows[0].cells[6].style.borderWidth ='0px';
	this.objects[id].tableControl.rows[0].cells[7].style.borderWidth ='0px';
	this.objects[id].tableControl.rows[0].cells[0].style.height=this.sizeButtonControl+'px';
	this.objects[id].tableControl.rows[0].cells[0].style.lineHeight=this.sizeButtonControl+'px';
	this.objects[id].tableControl.rows[0].cells[1].style.height=this.sizeButtonControl+'px';
	this.objects[id].tableControl.rows[0].cells[1].style.lineHeight=this.sizeButtonControl+'px';
	this.objects[id].tableControl.rows[0].cells[2].style.height=this.sizeButtonControl+'px';
	this.objects[id].tableControl.rows[0].cells[2].style.lineHeight=this.sizeButtonControl+'px';
	this.objects[id].tableControl.rows[0].cells[3].style.height=this.sizeButtonControl+'px';
	this.objects[id].tableControl.rows[0].cells[3].style.lineHeight=this.sizeButtonControl+'px';
	this.objects[id].tableControl.rows[0].cells[4].style.height=this.sizeButtonControl+'px';
	this.objects[id].tableControl.rows[0].cells[4].style.lineHeight=this.sizeButtonControl+'px';
	this.objects[id].tableControl.rows[0].cells[5].style.height=this.sizeButtonControl+'px';
	this.objects[id].tableControl.rows[0].cells[5].style.lineHeight=this.sizeButtonControl+'px';
	this.objects[id].tableControl.rows[0].cells[6].style.height=this.sizeButtonControl+'px';
	this.objects[id].tableControl.rows[0].cells[6].style.lineHeight=this.sizeButtonControl+'px';
	this.objects[id].tableControl.rows[0].cells[7].style.height=this.sizeButtonControl+'px';
	this.objects[id].tableControl.rows[0].cells[7].style.lineHeight=this.sizeButtonControl+'px';
	this.objects[id].tableControl.rows[0].cells[0].vAlign='middle';
	this.objects[id].tableControl.rows[0].cells[1].vAlign='middle';
	this.objects[id].tableControl.rows[0].cells[2].vAlign='middle';
	this.objects[id].tableControl.rows[0].cells[3].vAlign='middle';
	this.objects[id].tableControl.rows[0].cells[4].vAlign='middle';
	this.objects[id].tableControl.rows[0].cells[5].vAlign='middle';
	this.objects[id].tableControl.rows[0].cells[6].vAlign='middle';
	this.objects[id].tableControl.rows[0].cells[7].vAlign='middle';	
	this.objects[id].tableControl.rows[0].cells[0].style.width = '8%';
	this.objects[id].tableControl.rows[0].cells[1].style.width = '8%';
	this.objects[id].tableControl.rows[0].cells[2].style.width = '8%';
	this.objects[id].tableControl.rows[0].cells[3].style.width = '32%';
	this.objects[id].tableControl.rows[0].cells[4].style.width = '20%';
	this.objects[id].tableControl.rows[0].cells[5].style.width = '8%';
	this.objects[id].tableControl.rows[0].cells[6].style.width = '8%';
	this.objects[id].tableControl.rows[0].cells[7].style.width = '8%';
	this.objects[id].tableControl.width = this.objects[id].widthGrid+'px';
	this.objects[id].buttonFirst = document.createElement('div');
	this.objects[id].buttonFirst.style.width  = '100%';
	this.objects[id].buttonFirst.style.height = this.sizeButtonControl + 'px';
	this.objects[id].buttonFirst.style.lineHeight = this.sizeButtonControl + 'px';
	this.objects[id].buttonFirst.style.borderRadius = '0em';
	this.objects[id].buttonFirst.style.borderStyle='outset';
	this.objects[id].buttonFirst.style.borderWidth='1px';
	this.objects[id].buttonFirst.style.borderColor='#9e9e9e';
	this.objects[id].buttonFirst.style.fontFamily='arial';
	this.objects[id].buttonFirst.align='center';
	this.objects[id].buttonFirst.vAlign='middle';	
	this.objects[id].buttonFirst.innerHTML = '|<'.bold();
	this.objects[id].buttonFirst.style.fontSize ='12px';
	this.objects[id].tableControl.rows[0].cells[0].appendChild(this.objects[id].buttonFirst);
	this.objects[id].buttonNextPage = document.createElement('div');
	this.objects[id].buttonNextPage.style.width = '98%';
	this.objects[id].buttonNextPage.style.height = this.sizeButtonControl + 'px';
	this.objects[id].buttonNextPage.style.lineHeight = this.sizeButtonControl + 'px';
	this.objects[id].buttonNextPage.style.borderRadius = '0em';
	this.objects[id].buttonNextPage.style.borderStyle='outset';
	this.objects[id].buttonNextPage.style.borderWidth='1px';
	this.objects[id].buttonNextPage.style.borderColor='#9e9e9e';
	this.objects[id].buttonNextPage.align='center';
	this.objects[id].buttonNextPage.style.fontFamily='arial';
	this.objects[id].buttonNextPage.vAlign='middle';	
	this.objects[id].buttonNextPage.innerHTML = '>>'.bold();
	this.objects[id].buttonNextPage.style.fontSize ='12px';
	this.objects[id].tableControl.rows[0].cells[6].appendChild(this.objects[id].buttonNextPage);
	this.objects[id].buttonNext = document.createElement('div');
	this.objects[id].buttonNext.style.width = '98%';
	this.objects[id].buttonNext.style.height =this.sizeButtonControl + 'px';
	this.objects[id].buttonNext.style.lineHeight =this.sizeButtonControl + 'px';
	this.objects[id].buttonNext.style.borderRadius='0em';
	this.objects[id].buttonNext.style.borderStyle='outset';
	this.objects[id].buttonNext.style.borderWidth='1px';
	this.objects[id].buttonNext.style.borderColor='#9e9e9e';
	this.objects[id].buttonNext.align='center';
	this.objects[id].buttonNext.style.fontFamily='arial';
	this.objects[id].buttonNext.vAlign='middle';	
	this.objects[id].buttonNext.innerHTML = '>'.bold();
	this.objects[id].buttonNext.style.fontSize ='12px';
	this.objects[id].tableControl.rows[0].cells[5].appendChild(this.objects[id].buttonNext);
	this.objects[id].buttonPriorPage = document.createElement('div');
	this.objects[id].buttonPriorPage.style.width = '98%';
	this.objects[id].buttonPriorPage.style.height =this.sizeButtonControl + 'px';
	this.objects[id].buttonPriorPage.style.lineHeight =this.sizeButtonControl + 'px';
	this.objects[id].buttonPriorPage.style.borderRadius='0em';
	this.objects[id].buttonPriorPage.style.borderStyle='outset';
	this.objects[id].buttonPriorPage.style.borderWidth='1px';
	this.objects[id].buttonPriorPage.style.borderColor='#9e9e9e';
	this.objects[id].buttonPriorPage.align='center';
	this.objects[id].buttonPriorPage.style.fontFamily='arial';
	this.objects[id].buttonPriorPage.vAlign='middle';	
	this.objects[id].buttonPriorPage.innerHTML = '<<'.bold();
	this.objects[id].buttonPriorPage.style.fontSize ='12px';
	this.objects[id].tableControl.rows[0].cells[1].appendChild(this.objects[id].buttonPriorPage);
	this.objects[id].buttonPrior = document.createElement('div');
	this.objects[id].buttonPrior.style.width = '98%';
	this.objects[id].buttonPrior.style.height =this.sizeButtonControl + 'px';
	this.objects[id].buttonPrior.style.lineHeight =this.sizeButtonControl + 'px';
	this.objects[id].buttonPrior.style.borderRadius ='0em';
	this.objects[id].buttonPrior.style.borderStyle='outset';
	this.objects[id].buttonPrior.style.borderWidth='1px';
	this.objects[id].buttonPrior.style.borderColor='#9e9e9e';
	this.objects[id].buttonPrior.align='center';
	this.objects[id].buttonPrior.style.fontFamily='arial';
	this.objects[id].buttonPrior.vAlign='middle';	
	this.objects[id].buttonPrior.innerHTML = '<'.bold();
	this.objects[id].buttonPrior.style.fontSize ='12px';
	this.objects[id].tableControl.rows[0].cells[2].appendChild(this.objects[id].buttonPrior);
	this.objects[id].buttonLast = document.createElement('div');
	this.objects[id].buttonLast.style.width = '98%';
	this.objects[id].buttonLast.style.height =this.sizeButtonControl + 'px';
	this.objects[id].buttonLast.style.lineHeight =this.sizeButtonControl + 'px';
	this.objects[id].buttonLast.style.borderRadius='0em';
	this.objects[id].buttonLast.style.borderStyle='outset';
	this.objects[id].buttonLast.style.borderWidth='1px';
	this.objects[id].buttonLast.style.borderColor='#9e9e9e';
	this.objects[id].buttonLast.align='center';
	this.objects[id].buttonLast.style.fontFamily='arial';
	this.objects[id].buttonLast.vAlign='middle';	
	this.objects[id].buttonLast.innerHTML = '>|'.bold();
	this.objects[id].buttonLast.style.fontSize ='12px';
	this.objects[id].tableControl.rows[0].cells[7].appendChild(this.objects[id].buttonLast);
	this.objects[id].tableControl.rows[0].cells[3].innerHTML = 'Pagina : ';
	this.objects[id].tableControl.rows[0].cells[3].style.fontFamily = 'verdana';
	this.objects[id].tableControl.rows[0].cells[3].style.fontSize = '12px';
	this.objects[id].tableControl.rows[0].cells[4].innerHTML = 'de : 1';
    this.objects[id].tableControl.rows[0].cells[4].style.fontFamily = 'verdana';
    this.objects[id].tableControl.rows[0].cells[4].style.fontSize = '12px';
	this.objects[id].pageEdit = document.createElement('input');
	this.objects[id].pageEdit.style.width = '30px';
	this.objects[id].pageEdit.style.height = '14px';
	this.objects[id].tableControl.rows[0].cells[3].style.width ='40px';
	this.objects[id].tableControl.rows[0].cells[3].appendChild(this.objects[id].pageEdit);
	this.objects[id].appendChild(this.objects[id].tablePrinc);
	this.objects[id].tablePrinc.rows[0].cells[0].innerHTML = title;
	this.objects[id].tablePrinc.rows[0].cells[0].style.fontWeight = 'bold';
	this.objects[id].tablePrinc.rows[1].cells[0].appendChild(this.objects[id].containerTableBody);
	this.objects[id].tablePrinc.rows[1].cells[0].align = "center";
	this.objects[id].tablePrinc.rows[2].cells[0].appendChild(this.objects[id].tableControl);
	this.objects[id].tablePrinc.rows[1].cells[0].style.height = this.objects[id].heightBody+'px';
	this.objects[id].tablePrinc.rows[1].cells[0].style.width = width+'px';
	this.objects[id].tablePrinc.rows[0].cells[0].style.height = '22px';
	this.objects[id].tablePrinc.rows[0].cells[0].style.lineHeight = '22px';
	
	this.addPropertyMethod(id);
	this.setBgImgTitle(id,this.bgImgTitle);
	this.setBgImgBody(id,'bg217.jpg');
	this.setFontTitle(id,customGrid.propertyFontTitle.family,
                      customGrid.propertyFontTitle.size,
					  customGrid.propertyFontTitle.color);
	this.objects[id].isMouseOver=false;
	this.objects[id].onmouseover = function(e){
	  customGrid.objects[id].isMouseOver=true;	
	  customGrid.whellID = id;
	};
	this.objects[id].onmouseout = function(e){
	  customGrid.objects[id].isMouseOver=false;
	  customGrid.whellID = id;
	};
	
	this.ButtonsEvents(id);
	this.wheelEnable();
	if(attrib)
      this.setObjAttrib(id,attrib,attrib.getActualEnv());
	return this.objects[id];
  },

  setHeightBody : function(id, hb){
	this.objects[id].heightBody = hb; 
	var cont = 0;
	var px =setInterval(function() {
		cont+=10;
		customGrid.objects[id].containerTableBody.style.height = cont + 'px';
		if(cont >= hb){
			customGrid.objects[id].containerTableBody.style.height = hb + 'px';
			clearInterval(px);	
		}
	}, 0);
  },

  hideBarControl : function(id){
	this.objects[id].tablePrinc.rows[2].cells[0].style.display = 'none';
  },

  showBarControl : function(id){
	this.objects[id].tablePrinc.rows[2].cells[0].style.display = 'block';
  },

  hideBarTitle : function(id){
	this.objects[id].tablePrinc.rows[0].cells[0].style.display = 'none';
  },
  
  alignBarTitle : function(id, align){
	this.objects[id].tablePrinc.rows[0].cells[0].align = align;
  },

  showBarTitle : function(id){
	this.objects[id].tablePrinc.rows[0].cells[0].style.display = 'block';
  },
  
  setTextBarTitle : function(id, title){
	this.objects[id].tablePrinc.rows[0].cells[0].innerHTML = title;
  },
  
  disableOrderColumn : function(id, col){
  	this.objects[id].columnTable[col].orderEnable=false;
  },
  
  deleteRecordByIndex : function(id, index){
  	this.objects[id].struct.deleteRecord(index);
	this.showData(id);
  },
  
  deleteRecordByColCondition : function(id, colCond){
  	this.objects[id].struct.deleteRecordByColCondition(colCond);
	this.showData(id);
  },
  
  deleteRecordByRow : function(id, row){
  	var r = row + this.objects[id].struct.itemPage*this.objects[id].struct.pageSize;
  	this.objects[id].struct.deleteRecord(r);
	this.showData(id);
  },
  
  enableOrderColumn : function(id, col){
  	this.objects[id].columnTable[col].orderEnable=true;
  },
  
  getDataColumn : function(id, col){
  	var arr = new Array();
  	//var totRow = this.objects[id].columnTable[col].tableColumn.rows.length;
  	var totRow = this.objects[id].struct.data[0].length;
	var i = 0;
	for (i=0; i<totRow; i++){	
	  //arr[i] = this.getDataCell(id,i,col);
	  arr[i] = this.objects[id].struct.data[col][i];
	}
	return arr;
  },

  setReadOnlyCol : function(id, col, sts)  {
    var totRow = this.objects[id].columnTable[col].tableColumn.rows.length;
    for (var i=0; i<totRow; i++)    {   
      this.getObjectCell(id,i,col).readOnly = sts;
    }
  },
    
  getIndexStructByRow : function (id, row){
  	var idx = row + this.objects[id].struct.itemPage * this.objects[id].struct.pageSize;
  	return idx;
  },
  
  getDataCellStruct : function(id, row, col){ 
	if(this.objects[id].struct.data[col][row]===true)
		this.objects[id].struct.data[col][row]=1;
	if(this.objects[id].struct.data[col][row]===false)
		this.objects[id].struct.data[col][row]=0;
  	return this.objects[id].struct.data[col][row];
  },
  
  getDataCell : function() {
	  var row = 0;
	  var col = 0;
	  var id = customGrid.getDataCell.arguments[0];
	  
	  if(customGrid.getDataCell.arguments.length < 3) {
		  row = customGrid.getActualRow(id);
		  col = customGrid.getDataCell.arguments[1];
	  }
	  else {
		  row = customGrid.getDataCell.arguments[1];
		  col = customGrid.getDataCell.arguments[2];
	  }
	  
 	  switch(this.objects[id].columnTable[col].typeColumn) {
	  	case customGrid.TYPE_COLUMN_EDIT : 
		{
		  var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
	  	  return o.value;
	    }
		case customGrid.TYPE_COLUMN_CHECK :
		{
		  var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
	  	  return o.checked;
		}
		case customGrid.TYPE_COLUMN_MEMO :
		{
		  var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
	  	  return o.value;
		}
		case customGrid.TYPE_COLUMN_RADIO :
		{
		  var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
	  	  return o.checked;
		}
		case customGrid.TYPE_COLUMN_EXT_OBJ :
		{
		  var v = '';	
		  if(this.upDateValueExtObj)	
		  {
		  	var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
			v = o.value;
		  }  
	  	  return v;
		}
		case customGrid.TYPE_COLUMN_BUTTON :
		{
	      var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
	  	  return o.value;		
		}
		case customGrid.TYPE_COLUMN_IMAGE :
		{
		  var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
	  	  return o.src;	
		}
		case customGrid.TYPE_COLUMN_SELECT :
		{
		  var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
	  	  return o.value;	
		}
	  }	
  },
  
  getDataRow : function(id, row) {
  	var arr = new Array();
  	for(var i=0; i<this.getTotalCol(id); i++){
  	  arr[i] = this.getDataCell(id, row, i);
  	}
  	return arr;
  },
  
  getDataRowStruct : function(id, row) {
  	var arr = new Array();
  	for(var i=0; i<this.getTotalCol(id); i++){	
  	  arr[i] = this.getDataCellStruct(id, row, i);
  	}
  	return arr;
  },
  
  getXML : function(id) {
  	xmlData ='<?xml version = "1.0" encoding = "ISO-8859-1"?>';
  	xmlData += '<regs>';
  	for(var i=0; i<this.objects[id].struct.getTotalRows(); i++)	{
  		xmlData += '<reg>';
  		for (var j=0; j<this.getTotalCol(id); j++){
  			
  			xmlData += '<'+this.objects[id].struct.fields[j]+'>';
  			xmlData += this.objects[id].struct.data[j][i];
  			xmlData += '</'+this.objects[id].struct.fields[j]+'>';
  		}
  		xmlData += '</reg>';
  	}
  	xmlData += '</regs>';
  	return xmlData;	
  },
  
  getXMLStruct : function(id, name) {
    var rlx = customGrid.xmlStructObj.createRecordList(name);    
    for(var f=0; f<customGrid.objects[id].struct.getTotalRows(); f++) {
    	var reg = "";  
    	for (var c=0; c<customGrid.getTotalCol(id); c++) {
    		if(reg=="")
    			reg+= customGrid.objects[id].struct.data[c][f];
    		else
    			reg+= "###" + customGrid.objects[id].struct.data[c][f];
    	}
    	rlx.addStr('reg'+i,reg);
    }
    return rlx;
  },
    
  getObject : function(id) {
    return this.objects[id];
  },
  
  getActualRow : function(id) {
    return this.objects[id].actualRow;
  },  

  getActualCol : function(id) {
    return this.objects[id].actualCol;
  },  
  
  getObjectCell : function(id, row, col) {
  	var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
    return o;
  },
  
  getIndexStruct : function(id) {
  	this.objects[id].struct.index = this.objects[id].struct.itemPage * this.objects[id].struct.pageSize +
	this.objects[id].struct.offsetPage;
  	return this.objects[id].struct.index;
  },
  
  getMouseXY : function(e) {
    var IE = document.all?true:false;
    if (IE) {
      customGrid.mouseX = event.clientX ;
      customGrid.mouseY = event.clientY ;
    }
    else {	
      customGrid.mouseX = e.screenX;
      customGrid.mouseY = e.screenY;
    }
  },

  hideCol : function(id, column) {
  	this.objects[id].columnTable[column].style.display='none';
  	this.objects[id].columnTable[column].style.borderWidth='0px';
  },
 
  onControl : function(id, cteEvent, funct) {
  	switch(cteEvent){
	 	case this.TYPE_ON_FIRST : {this.objects[id].onFirst = new Function(funct);break;}
	  	case this.TYPE_ON_LAST : {this.objects[id].onLast = new Function(funct);break;}
		case this.TYPE_ON_NEXT_PAGE : {this.objects[id].onNextPage = new Function(funct);break;}
		case this.TYPE_ON_PRIOR_PAGE : {this.objects[id].onPriorPage = new Function(funct);break;}
		case this.TYPE_ON_NEXT : {this.objects[id].onNext = new Function(funct);break;}
		case this.TYPE_ON_PRIOR : {this.objects[id].onPrior = new Function(funct);break;}
		case this.TYPE_ON_ORDER : {this.objects[id].onOrder = new Function(funct);break;}
		case this.TYPE_ON_CHANGE_EDIT_PAGE : {this.objects[id].onChangeEditPage = new Function(funct);break;}
	}
    
  },
  
  onClickCell : function(id, row, col, funct) {  
  	this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].onclick = new Function(funct);  
  },
    
  onClickCells : function(id, funct) {
    for(var f=0; f<this.objects[id].totalRows; f++)
      for(var c=0; c<this.objects[id].totalColumns; c++) {
        this.onClickCell(id,f,c,funct);
      };
  },
  
  onClickRow : function(id, row, funct) {
  	var totC = this.objects[id].columnTable.length;
	var col = 0;
	
	for(col=0; col<totC; col++){
	  this.onClickCell(id, row, col, funct);
	}
  },
  
  onDblClickCell : function(id, row, col, funct) {
  	this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].ondblclick = new Function(funct);
  },
  
  onDblClickCells : function(id, funct) {
    for(var f=0; f<this.objects[id].totalRows; f++)
      for(var c=0; c<this.objects[id].totalColumns; c++) {
        this.onDblClickCell(id,f,c,funct);
      };
  },

  onDblClickRow : function(id, row, funct) {
  	var totC = this.objects[id].columnTable.length;
	var col = 0;
  	for (col = 0; col < totC; col++) {
	  this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].ondblclick = new Function(funct);
	}
  },
  
  onKeyPressCell : function(id, row, col, funct) {
  	this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].onkeypress = new Function(funct);
  },
    
  onKeyUpCell : function(id, row, col, funct) {
  	this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].onkeyup = new Function(funct);
  },
  
  onKeyDownCell : function(id, row, col, funct) {
  	this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].onkeydown = new Function(funct);
  },
  
  onMouseOutCell : function(id, row, col, funct) {
  	this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].onmouseout = new Function(funct);
  },
  
  onMouseOutRow : function(id, row, funct) {
  	this.objects[id].onMouseOutRow[row] = new Function(funct);
  },
  
  onMouseMoveCell : function(id, row, col, funct) {
  	this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].onmousemove = new Function(funct);
  },
  
  onMouseMoveRow : function(id, row, funct) {
  	var totC = this.objects[id].columnTable.length;
	var col = 0;
  	for (col = 0; col < totC; col++) {
	  this.onMouseMoveCell(id, row, col, funct);
	}
  },
  
  onMouseOverCell : function(id, row, col, funct) {
  	this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].onmouseover = new Function(funct);
  },
  
  loadColumnTypeStruct : function(id, dataStruct, typeColumnArray, widthColumnArray) {
    this.objects[id].totalColumns = typeColumnArray.length;
    if(!customGrid.objects[id].totalRows)
      customGrid.objects[id].totalRows=10;  
    if(dataStruct==null){ 
  	  dataStruct = {
  	    offsetPage : 0,
        pageSize : customGrid.objects[id].totalRows,
        itemPage  : 0, 
        fields :[],
        data:[]  
  	  };
  	  for(var i=0; i<typeColumnArray.length; i++) {  
  	    dataStruct.data[i] = new Array();
  	    dataStruct.fields[i] = '';
  	  }
  	  this.loadDataStruct(id, dataStruct);
  	};  
  	
	this.objects[id].struct.typeColumn = typeColumnArray;
	var i=0;
	
	for(i=0; i<typeColumnArray.length;i++){
	  var w=100;  	
	  if(widthColumnArray)  
	    w = widthColumnArray[i];
	  this.createColumnTable(id,typeColumnArray[i], this.objects[id].struct.pageSize, 
	  this.objects[id].struct.fields[i],this.objects[id].struct.fields[i]+i,w);
	  this.setHeightAllCell(id,this.objects[id].heigthCell);
	  if(typeColumnArray[i]==this.TYPE_COLUMN_MEMO)	
	    this.setHeightObjColumn(id,this.objects[id].heigthCell,i);
	  this.setDataColumn(id,i,this.objects[id].struct.data[i]);
	}	
	this.objects[id].struct.setEditPage();
	this.setSaveData(id);
	this.setEvenOddBgImg(id, this.bgImgEven, this.bgImgOdd);
	this.objects[id].loadData = true;
  },
  
  order : function (id, field){
	var intDataStruct = this.objects[id].struct;
    var dataStruct = new Array;
    if(this.objects[id].totalClick > 0){
      var IE = document.all?true:false;
      if(IE)
        this.objects[id].totalClick = 0;
      else
        this.objects[id].totalClick--;
      return;
    }
    for(i=0;i<intDataStruct.data.length;i++){
      dataStruct[i] = new Array;
      for(j=0;j<intDataStruct.data[0].length;j++){
        dataStruct[i][j] = intDataStruct.data[i][j];
      }
    }
	
    for(i=0;i<dataStruct[0].length;i++){
      this.objects[id].keys[i] = i;
      this.objects[id].list[i] = dataStruct[field][i];
    };
    var medio = Math.round((this.objects[id].list.length/2)-1);
    var pivote = this.objects[id].list[medio];
    var primero = this.objects[id].list[0];
    var ultimo = this.objects[id].list[this.objects[id].list.length-1];
	
    if(((primero>pivote)&&(primero<=ultimo))||((primero<pivote)&&(primero>=ultimo))){
      pivote = primero;
    }
    else if(((ultimo>pivote)&&(ultimo<primero))||((ultimo<pivote)&&(ultimo>primero))){
      pivote = ultimo;
    }
    this.quickSort(pivote, 0,this.objects[id].list.length-1,this.objects[id].list,this.objects[id].keys);
    if(field == this.objects[id].orderField){
      x = -1;
      this.objects[id].orderField = -1;
      for(i=this.objects[id].list.length-1;i>=0;i--){
        pos = this.objects[id].keys[i];
        x++;
        for(j=0;j<dataStruct.length;j++){
          dataStruct[j][x] = intDataStruct.data[j][pos];        
		}
      }
    }
    else {	
      this.objects[id].orderField = field;
      for(i=0;i<this.objects[id].list.length;i++){
        pos = this.objects[id].keys[i];
        for(j=0;j<dataStruct.length;j++){
          dataStruct[j][i] = intDataStruct.data[j][pos];
        }
      }
    }
    intDataStruct.data = dataStruct;
	this.objects[id].struct.data = intDataStruct.data;
	this.loadDataStruct(id,intDataStruct);
	customGrid.objects[id].onOrder();
  },
  
  setXMLStruct : function(id, obj){
    this.xmlStructObj = obj;
  },
  
  quickSort : function(pivote,izq, der,list,keys){
    i = izq;
    j = der;
    do {
      while(list[i]<pivote)
      i++;
      while(list[j]>pivote)
      j--;
      if(i<=j)
      {
        var aux = list[i];
        var auxKey = keys[i];
        list[i] = list[j];
        keys[i] = keys[j];
        list[j] = aux;
        keys[j] = auxKey;
        i++;
        j--;
      }
    }
    while(i<=j)
    if(izq < j)
    	this.quickSort(list[Math.round((izq+der)/2)],izq,j,list,keys);
    if(i < der)
    	this.quickSort(list[Math.round((izq+der)/2)],i,der,list,keys);
  },
  
  showColumn : function(id, column) {
  	this.objects[id].columnTable[column].style.display='block';
  	this.objects[id].columnTable[column].style.borderWidth='1px';
  },

  loadDataStruct : function(id, dataStruct) {
  	this.objects[id].struct.offsetPage = dataStruct.offsetPage;
	//this.objects[id].struct.pageSize = dataStruct.pageSize;
	this.objects[id].struct.pageSize = this.objects[id].totalRows;
  	this.objects[id].struct.itemPage = dataStruct.itemPage;
	this.objects[id].struct.fields = dataStruct.fields;
	this.objects[id].struct.data = dataStruct.data;
	this.objects[id].tableControl.rows[0].cells[4].innerHTML = 'de :'+this.objects[id].struct.getTotalPages();
	if(this.objects[id].loadData)
		this.showData(id);
  },
  
  clean : function(id) {
  	for(i=0; i<this.objects[id].struct.fields.length; i++){
  		if(this.objects[id].columnTable[i].typeColumn===customGrid.TYPE_COLUMN_CHECK || this.objects[id].columnTable[i].typeColumn===customGrid.TYPE_COLUMN_RADIO){
  			if(this.getObjTitle(id,i)) 
  				this.getObjTitle(id,i).checked = false;
  		}
  		this.objects[id].struct.data[i].length=0;
  	}
    this.showData(id);
  },
  
  addTitleVectorX : function(id, vectorTitle) {
      for(i=0; i<this.objects[id].struct.fields.length; i++)
      {
        this.objects[id].struct.fields[i] = vectorTitle[i];
        if(this.objects[id].columnTable.length > 0)  
          this.objects[id].columnTable[i].tableContainer.rows[0].cells[0].tabla.rows[0].cells[1].innerHTML = vectorTitle[i];   
      }
  },
  
  setChecksOn : function(id, column) {
    if(!column)
      column = 0;  
    //var totRow = this.objects[id].columnTable[column].tableColumn.rows.length;
    var totRow = customGrid.objects[id].struct.data[0].length;
    var arr = new Array();
    for(i=0; i<totRow; i++)
      arr[i] = 1;
    //this.setDataColumn(id, column, arr);
    customGrid.objects[id].struct.setColumnData(column, arr);
    customGrid.showData(id);
  },
  
  activeCheckOnOff : function(id, column){
    if(!column)
      column=0;
    this.getObjTitle(id,column).onclick = function(e) {
       if(this.checked)
         customGrid.setChecksOn(id,column)
       else
         customGrid.setChecksOff(id,column);
    } 
  },
  
  setChecksOff : function(id, column){
    if(!column)
      column = 0;    
    //var totRow = this.objects[id].columnTable[column].tableColumn.rows.length;
    var totRow = customGrid.objects[id].struct.data[0].length;
    var arr = new Array();
    for(i=0; i<totRow; i++)
      arr[i] = 0;
    //this.setDataColumn(id, column, arr);  
    customGrid.objects[id].struct.setColumnData(column, arr);
    customGrid.showData(id);
  },
  
  setSelectedLn : function(id){
  	 customGrid.setBgRow(id, customGrid.bgImgSelected, customGrid.objects[id].struct.offsetPage);	
	 customGrid.setTextColorRow(id, customGrid.propertyFontRow.colorSelected, customGrid.objects[id].struct.offsetPage);
  },

  setDiselectedLn : function(id){
  	var i=0;
	for(i=0; i<customGrid.objects[id].struct.pageSize; i++)
	{
	  if(i % 2)
	    customGrid.setBgRow(id, customGrid.bgImgOdd, i); 
	  else
	    customGrid.setBgRow(id, customGrid.bgImgEven, i);
	  customGrid.setTextColorRow(id, customGrid.propertyFontRow.color, i);
	}
  },
  
  groupRadioByRow : function(id, colArr, groupName){	
  	
  	var totalRow = this.getTotalRow(id);
  	for(p=0; p<colArr.length; p++){
  	  for (i = 0; i < totalRow; i++){
  	    this.objects[id].columnTable[colArr[p]].elements[i].name = 'radio' + groupName + i;
  	  }
    }
  },
  
  setSaveData : function(id){
   	var objs = new Object();
	var f =0;
	var c=0;
	var totF = this.objects[id].columnTable[0].tableColumn.rows.length;
	var totC = this.objects[id].columnTable.length;
	for(f=0; f<totF; f++){	
	  for(c=0; c<totC; c++){
	    objs = this.getObjectCell(id, f, c);
		objs.onblur = function(e){
		  customGrid.objects[id].struct.upDateData();
		}
		objs.onclick = function(e){
		  customGrid.objects[id].struct.offsetPage = this.aRow;
		  if(this.type=='checkbox'){  
		  	var r = customGrid.objects[id].struct.getActRow();
			if(!customGrid.objects[id].struct.data[this.aCol][r] || parseInt(customGrid.objects[id].struct.data[this.aCol][r],10)===0)
		      customGrid.objects[id].struct.data[this.aCol][r] = 1;
		    else
		      customGrid.objects[id].struct.data[this.aCol][r] = 0;  	
		  }
		  if(this.type=='radio'){
		  	var r = customGrid.objects[id].struct.getActRow();
		  	var tr = customGrid.objects[id].struct.data[0].length;
		    var nameGroup = customGrid.objects[id].columnTable[this.aCol].elements[this.aRow].name;
		    var idx = 0;
		    for(f=0; f<totF; f++){	
	  		  for(c=0; c<totC; c++){
	  		  	if (idx % (totF - 1)==0){
	  		  	  idx = 0;	
	  		  	}
	  		  	if (f < customGrid.objects[id].struct.pageSize)
		          if(customGrid.objects[id].columnTable[c].elements[f].name == nameGroup){
		            customGrid.objects[id].struct.data[c][customGrid.objects[id].struct.offsetPage +
		            customGrid.objects[id].struct.itemPage * customGrid.objects[id].struct.pageSize] = 0;
		          }
		        idx++;
		      }
		    }
		    customGrid.objects[id].struct.data[this.aCol][r] = 1;
		  }
		}
	  }	
	}
  },
  
  saveDataCol : function(id, col){
  	var isEmptyArray ={
		check : function(arr){
		 	var w=0;
			var f=true;
			for(w=0; w<arr.length; w++){
				if (arr[w]!="")
				  f=false;
			}
			return f;
		}
	}
  	var ip = customGrid.objects[id].struct.itemPage;
	var ps = customGrid.objects[id].struct.pageSize;
	var row=0;
	var idx=0;
	var data ='';
	for(row=0; row<customGrid.objects[id].struct.pageSize; row++){
	  data = this.getDataCell(id, row, col);	
	  idx = ip*ps + row;
	  //if(!isEmptyArray.check(data))
	    customGrid.objects[id].struct.setValue(idx, col, data);	
	}
  },
  
  showData : function(id){
	var cols = this.objects[id].struct.fields.length;
    for(var f = 0; f < this.objects[id].struct.pageSize; f++){
	  for(var c=0; c<cols; c++){
	  	this.getObjectCell(id, f, c).style.display = 'block';	
	  };	
	};	
	for(var i=0; i<cols; i++){	
	  this.setDataColumn(id, i, this.objects[id].struct.getColumnData(i));
    };
    if(this.objects[id].struct.itemPage == this.objects[id].struct.getTotalPages()-1){
	  var totFreeCells = this.objects[id].struct.getTotalPages()*this.objects[id].struct.pageSize - this.objects[id].struct.data[0].length;
	  for(var f = this.objects[id].struct.pageSize-1; f > this.objects[id].struct.pageSize - totFreeCells - 1; f--){
	  	for(var c=0; c<cols; c++){
	  	  this.getObjectCell(id, f, c).style.display = 'none';	
	  	};
	  };
    };
  },
  
  setBgImgTitle : function(id,bgImg){
  	this.objects[id].tablePrinc.rows[0].cells[0].style.backgroundImage = 'url('+this.bgImgPath+bgImg+')';
	this.objects[id].tablePrinc.rows[0].cells[0].style.borderStyle = 'outset';
	this.objects[id].tablePrinc.rows[0].cells[0].style.borderWidth = '1px';
	this.objects[id].tablePrinc.rows[2].cells[0].style.backgroundImage = 'url('+this.bgImgPath+bgImg+')';
	this.objects[id].tablePrinc.rows[2].cells[0].style.borderWidth = '0px';
  },
  
  setEvenOddBgImg : function(id, imgEven, imgOdd){
	var totRow = this.objects[id].columnTable[0].tableColumn.rows.length;
	var i=0;
	for(i=0; i<totRow; i++){
	  if (this.objects[id].columnTable[0].tableColumn.rows[i].isPar){
		this.setBgRow(id, imgEven, i);
	  }
	  else {
	  	this.setBgRow(id, imgOdd, i);
	  }
	}
  },
  
  setBgTitleColumn : function(id, bgImg){
  	var totC = this.objects[id].tableBody.rows[0].cells.length;
	var i=0;
	for (i = 0; i < totC; i++){
	  this.objects[id].columnTable[i].tableContainer.rows[0].cells[0].style.backgroundImage = 'url(' + this.bgImgPath + bgImg + ')';
	  this.objects[id].columnTable[i].tableContainer.rows[0].cells[0].style.borderStyle = 'none';
	  this.objects[id].columnTable[i].tableContainer.rows[0].cells[0].style.borderWidth = '0px';
	}
  },
  
  setBgImgBody : function(id,bgImg){
  	this.objects[id].tablePrinc.rows[1].cells[0].style.backgroundImage = 'url('+this.bgImgPath+bgImg+')';
	this.objects[id].tablePrinc.rows[1].cells[0].style.borderStyle = 'outset';
	this.objects[id].tablePrinc.rows[1].cells[0].style.borderWidth = '0px';
  },
  
  setFocus : function(id)  {
    this.getObjectCell(id,0,0).focus();  
  },
  
  setFontTitle : function(id,fontFamily,fontSize,color){
  	this.objects[id].tablePrinc.rows[0].cells[0].style.fontFamily = fontFamily;
	this.objects[id].tablePrinc.rows[0].cells[0].style.fontSize = fontSize+'px';
  	this.objects[id].tablePrinc.rows[0].cells[0].style.color = color;
	this.objects[id].tableControl.rows[0].cells[2].style.color = color;
	this.objects[id].tableControl.rows[0].style.color = color;
  },
  
  setFontTitleColumn : function(id,fontFamily,fontSize,color) {
    var totC = this.objects[id].tableBody.rows[0].cells.length;
	var i=0;
	for (i = 0; i < totC; i++){
	  this.objects[id].columnTable[i].tableContainer.rows[0].cells[0].style.fontFamily = fontFamily;
	  this.objects[id].columnTable[i].tableContainer.rows[0].cells[0].style.fontSize = fontSize+'px';
	  this.objects[id].columnTable[i].tableContainer.rows[0].cells[0].style.color = color;
	}
  },
  
  setSizeCol : function(id, indexColumn, w){
  	var tr = this.objects[id].columnTable[indexColumn].tableColumn.rows.length;
  	for(i=0; i<tr; i++)
	{
	  this.objects[id].columnTable[indexColumn].tableColumn.rows[i].cells[0].widthColumn = w;	
	  this.objects[id].columnTable[indexColumn].tableColumn.rows[i].cells[0].style.width=w+'px';	
	  this.objects[id].columnTable[indexColumn].tableColumn.rows[i].cells[0].firstChild.style.width=w+'px';  	
	} 
  },
  
  getWidthColumnTable : function(id, indexColumn){
	return this.objects[id].columnTable[indexColumn].tableColumn.rows[0].cells[0].widthColumn;	
  },

  setHeightCell : function(id, h, indexColumn){
  	var tr = this.objects[id].columnTable[indexColumn].tableColumn.rows.length;
  	for(i=0; i<tr; i++){
	  this.objects[id].columnTable[indexColumn].tableColumn.rows[i].cells[0].style.height=h+'px';	
	}
  },
  
  setHeightRowTitles : function(id, height){
  	var p = this.objects[id].columnTable.length;
  	var index=0;
	for(index=0; index<p; index++){
  	  this.objects[id].columnTable[index].tableContainer.rows[0].cells[0].style.height = height+'px';
  	}  
  },
  
  setHeightAllCell : function(id, h){
  	var p = this.objects[id].columnTable.length;
  	var index=0;
	for(index=0; index<p; index++){
	  this.setHeightCell(id, h, index);	
	}
  },
  
  setHeightObjColumn : function(id, h, indexColumn){
  	var tr = this.objects[id].columnTable[indexColumn].tableColumn.rows.length;
  	for(i=0; i<tr; i++){
	  this.objects[id].columnTable[indexColumn].tableColumn.rows[i].cells[0].style.height=h+'px';
	  var o = this.objects[id].columnTable[indexColumn].tableColumn.rows[i].cells[0].firstChild;
	  o.style.height = (h-4) + 'px';
	}
  },
  
  setBgRow : function(id, bgImg, indexRow){
  	var tc = this.objects[id].columnTable.length;
	var i=0;
	for(i=0; i<tc; i++){
      this.objects[id].columnTable[i].tableColumn.rows[indexRow].cells[0].style.backgroundImage = 'url('+this.bgImgPath+bgImg+')';
	  var o = this.objects[id].columnTable[i].tableColumn.rows[indexRow].cells[0].firstChild;
	  o.style.backgroundImage = 'url('+this.bgImgPath+bgImg+')';
	}
  },
  
  setBgCell : function(id, bgImg, row, col){
    this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].style.backgroundImage = 'url('+this.bgImgPath+bgImg+')';
	var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
	o.style.backgroundImage = 'url('+this.bgImgPath+bgImg+')';
  },
  
  setSelectedLnMode : function(id, mode){
  	this.objects[id].modeRowSelect=mode;
  },
  
  setTextColorRow : function(id, color, indexRow){
  	var tc = this.objects[id].columnTable.length;
	var i=0;
	for(i=0; i<tc; i++){
      this.objects[id].columnTable[i].tableColumn.rows[indexRow].cells[0].style.color = color;
	  var o = this.objects[id].columnTable[i].tableColumn.rows[indexRow].cells[0].firstChild;
	  o.style.color = color;	
	}
  },
  
  setTextColorCell : function(id, color, row, col){
    this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].style.color = color;
	var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
	o.style.color = color;	
  },
  
  setDimImgCell : function(id, w, h){
    this.objects[id].widthImgCell = w;	
    this.objects[id].heightImgCell = h;
  },
  
  setFontRow : function(id, family, size, color, indexRow){
  	var tc = this.objects[id].columnTable.length;
	var i=0;
	for(i=0; i<tc; i++){
      this.objects[id].columnTable[i].tableColumn.rows[indexRow].cells[0].style.family = family;
	  this.objects[id].columnTable[i].tableColumn.rows[indexRow].cells[0].style.size = size+'px';
	  this.objects[id].columnTable[i].tableColumn.rows[indexRow].cells[0].style.color = color;
	  var o = this.objects[id].columnTable[i].tableColumn.rows[indexRow].cells[0].firstChild;
	  o.style.family = family;
	  o.style.size = size+'px';
	  o.style.color = color;	
	}
  },
  
  setFontAllRow : function(id, family, size, color){
    var p = this.objects[id].struct.pageSize;
  	var index=0;
	for (index = 0; index < p; index++){
	  this.setFontRow(id, family, size, color, index);	
	}	
  },
  
  setDataColumn : function(id, col, dataArray){
	var i = 0;
	for (i=0; i<dataArray.length; i++){	
	  this.setDataCell(id,i,col,dataArray[i]);
	}
  },
  	
  setDataCell : function(id, row, col, data){
  	if(data!=null)
	{	
	  switch(this.objects[id].columnTable[col].typeColumn){
	  	case customGrid.TYPE_COLUMN_EDIT : {
		  var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
	  	  o.value = data;
		  break;
	    }
		case customGrid.TYPE_COLUMN_CHECK :	{
		  var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
		  if(data=='1' || data==1)
			  data = 1;
		  if(data=='0' || data==0)
			  data=0;
		  o.checked = data;
		  break;
		}
		case customGrid.TYPE_COLUMN_MEMO : {
		  var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
	  	  o.value = data;
		  break;
		}
		case customGrid.TYPE_COLUMN_RADIO :	{
		  var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
		  if(data=='1' || data==1)
			  data = 1;
		  if(data=='0' || data==0)
			  data=0;
	  	  o.checked = data;
		  break;
		}
		case customGrid.TYPE_COLUMN_EXT_OBJ :{
		  if(this.upDateValueExtObj) {
		  	var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
	  	    o.value = data;
		    var extObj = o.firstChild;
		    if(extObj!=null) {
		  	  extObj.value = data;
		    }
		  }	
		  break;
		}
		case customGrid.TYPE_COLUMN_BUTTON :{
	      var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
	  	  o.value = data;		
		  break;
		}
		case customGrid.TYPE_COLUMN_IMAGE :	{
		  var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
	  	  o.src = data;
	  	  o.style.width = this.objects[id].widthImgCell + 'px';	
		  o.style.height = this.objects[id].heightImgCell + 'px';
		  break;	
		}
		case customGrid.TYPE_COLUMN_SELECT :{
		  var o = this.objects[id].columnTable[col].tableColumn.rows[row].cells[0].firstChild;
	  	  o.value = data;	
		  break;	
		}
	  }
	}
  },  
  
  setSizeObjCell : function(id, row, col, w, h) {
  	var objCell = this.getObjectCell(id,row,col);
	objCell.style.width = w+'px';
	objCell.style.height = h+'px';
  },
  
  setObjAttrib : function(id,objAttr,env) {
  	this.bgImgTitle = objAttr.BgImg.barTitle[env];
	this.setBgTitleColumn(id, this.bgImgTitle);
	this.setBgImgTitle(id,this.bgImgTitle);
	this.bgImgEven = objAttr.BgImg.gridEvenRow[env];
	this.bgImgOdd = objAttr.BgImg.gridOddRow[env];
	this.propertyFontRow.family = objAttr.Font.editor[env];
	this.propertyFontRow.size = objAttr.Size.editFont[env];
	this.propertyFontRow.color = objAttr.Color.textEditor[env];
	this.propertyFontRow.colorSelected = objAttr.Color.textSelected[env];
	customGrid.propertyFontTitle.family = objAttr.Font.head[env];
	customGrid.propertyFontTitle.color = objAttr.Color.textTitle[env];
	customGrid.propertyFontTitle.size = objAttr.Size.headFont[env];
	this.setFontTitleColumn(id,customGrid.propertyFontTitle.family,
	                        customGrid.propertyFontTitle.size,
							customGrid.propertyFontTitle.color);

	this.setFontTitle(id,customGrid.propertyFontTitle.family,
                      customGrid.propertyFontTitle.size,
					  customGrid.propertyFontTitle.color);

	this.setFontAllRow(id, customGrid.propertyFontRow.family, 
	                customGrid.propertyFontRow.size, 
					customGrid.propertyFontRow.color);
	if (this.objects[id].loadData)
	  this.setEvenOddBgImg(id, this.bgImgEven, this.bgImgOdd);
    this.setBgImgBody(id,objAttr.BgImg.bgPanel[env]);
    this.bgImgSelected=objAttr.BgImg.bgSelected[env];
    this.objects[id].tableControl.rows[0].cells[3].style.color = objAttr.Color.textTitle[env];
  },

  wheel : function(event) {
    var delta = 0;
    if (!event) 
      event = window.event;
    if (event.wheelDelta) { 
	  delta = event.wheelDelta/120;
      if (window.opera)
        delta = -delta;
    } 
    else if (event.detail) { 
      delta = -event.detail/3;
    }
    if (delta!=0)
      customGrid.handle(delta);
	  
    if (event.preventDefault)
      event.preventDefault();
    event.returnValue = false;
  },
  
  handle: function(delta){
    if(this.whellID=="")
    return;
	if(this.objects[this.whellID].isMouseOver){
	  if (delta < 0){
	    this.objects[this.whellID].buttonNext.onmousedown();
	    this.objects[this.whellID].buttonNext.onmouseup();
      }
      else{
	    this.objects[this.whellID].buttonPrior.onmousedown();	
	    this.objects[this.whellID].buttonPrior.onmouseup();
      }	
	}
  },
  
  wheelEnable : function(){
    if (window.addEventListener)
      window.addEventListener('DOMMouseScroll', this.wheel, false);
    window.onmousewheel = document.onmousewheel = this.wheel;
  }
}

