
var grids=
{
  objects : new Array,
  ids : new Array,
  whellID : "",
  list : new Array,
  keys : new Array,
  ALIGN_CENTER : "center",
  ALIGN_RIGHT : "right",
  ALIGN_LEFT : "left",
  gridX : 0,
  gridY : 0,
  gridInit : 0,
  NO_EVENT : 0,
  CLICK_EVENT : 1,
  DBLCLICK_EVENT : 2,
  MOUSE_OVER_EVENT : 3,
  bgImgPath :"images/bg/",
  events : new Array,
  attObj : new Object,
  enviorement : 0,
  xmlStructObj : new Object,  
  addPropertyMethod : function(id)
  {
    grids.objects[id].addToBody  =  function()
    {
      grids.addToBody(id);
    }
    grids.objects[id].addData = function(dataArray)
    {
      grids.addData(id,dataArray);
    }
    grids.objects[id].addTitle  =  function(x,y,title)
    {
      grids.addTitle(id,x,y,title);
    }
    grids.objects[id].activeSelectedCell  =  function()
    {
      grids.activeSelectedCell(id);
    }
    grids.objects[id].activeSelectedRow  =  function(multiselect)
    {
      grids.activeSelectedRow(id,multiselect);
    }
    grids.objects[id].addTitleVectorX  =  function( vectorTitle)
    {
      grids.addTitleVectorX(id, vectorTitle);
    }
    grids.objects[id].addTitleVectorY  =  function(vectorTitle)
    {
      grids.addTitleVectorY(id,vectorTitle);
    }
    grids.objects[id].alignTextTitle  =  function(align)
    {
      grids.alignTextTitle(id,align);
    }
    grids.objects[id].addRow  =  function(readOnly)
    {
      grids.addRow(id,readOnly);
    }
    grids.objects[id].autoSaveEnable  =  function()
    {
      grids.autoSaveEnable(id);
    }
    grids.objects[id].autoSaveDisable  =  function()
    {
      grids.autoSaveDisable(id);
    }
    grids.objects[id].autoSizeField  =  function(field)
    {
      grids.autoSizeField(id,field);
    }
    grids.objects[id].handle =  function(delta)
    {
      grids.handle(delta);
    }
    grids.objects[id].isDigit  =  function(c)
    {
      return grids.isDigit(c);
    }
    grids.objects[id].isInteger  =  function(s)
    {
      return grids.isInteger(s);
    }
    grids.objects[id].controlEvents  =  function()
    {
      grids.controlEvents(id);
    }
    grids.objects[id].deselectedRow  =  function( row)
    {
      grids.deselectedRow(id, row);
    }
	grids.objects[id].deselectedAllRow  =  function()
    {
      grids.deselectedAllRow(id);
    }
    grids.objects[id].deselectedCell  =  function( row, col)
    {
      grids.deselectedCell(id, row, col);
    }
    grids.objects[id].deleteRecordStruct  =  function(index)
    {
      grids.deleteRecordStruct(id,index);
    }
    grids.objects[id].deleteRow  =  function(row)
    {
      grids.deleteRow(id,row);
    }
    grids.objects[id].deleteCol  =  function(col)
    {
      grids.deleteCol(id,col);
    }
    grids.objects[id].dataRowCount  =  function()
    {
      return grids.dataRowCount(id);
    }
    grids.objects[id].fieldAjustEnable  =  function()
    {
      grids.fieldAjustEnable(id);
    }
    grids.objects[id].fieldAjustDisable  =  function()
    {
      grids.fieldAjustDisable(id);
    }
    grids.objects[id].firstPage  =  function()
    {
      grids.firstPage(id);
    }
    grids.objects[id].getTotalRows  =  function()
    {
      return grids.getTotalRows(id);
    }
    grids.objects[id].getTotalCols  =  function()
    {
      return grids.getTotalCols(id);
    }
    grids.objects[id].getActualRecord  =  function()
    {
      return grids.getActualRecord(id);
    }
    grids.objects[id].getMouseXY  =  function(e)
    {
      grids.getMouseXY(e);
    }
    grids.objects[id].getObject  =  function()
    {
      return grids.getObject(id);
    }
    grids.objects[id].getDataCell  =  function(col)
    {
      return grids.getDataCell(id,col);
    }
    grids.objects[id].getDataRowVector  =  function(row)
    {
      return grids.getDataRowVector(id,row);
    }
	grids.objects[id].getRecord = function(row)
	{
	  return grids.getRecord(id, row);	
	}  
	grids.objects[id].getRecordList = function()
	{
	  return grids.getRecordList(id);
	}	
    grids.objects[id].getRow  =  function(objEdit)
    {
      return grids.getRow(objEdit);
    }
    grids.objects[id].getCol  =  function(objEdit)
    {
      return grids.getCol(objEdit);
    }
    grids.objects[id].getRowCell  =  function()
    {
      return grids.getRowCell(id);
    }
    grids.objects[id].getColCell  =  function()
    {
      return grids.getColCell(id);
    }
    grids.objects[id].getSelectedRows = function()
    {
      return grids.getSelectedRows(id);
    }
    grids.objects[id].getDataStructObj  =  function()
    {
      return grids.getDataStructObj(id);
    }
    grids.objects[id].getDataRowStruct  =  function(row)
    {
      return grids.getDataRowStruct(id,row);
    }
    grids.objects[id].hideCol  =  function(col)
    {
      grids.hideCol(id,col);
    }
    grids.objects[id].initializeEvents  =  function(nameEdit)
    {
      grids.initializeEvents(id,nameEdit);
    }
    grids.objects[id].loadDataStruct  =  function(dataStruct)
    {
      grids.loadDataStruct(id,dataStruct);
    }
    grids.objects[id].loadDefaultProperties  =  function()
    {
      grids.loadDefaultProperties(id);
    }
    grids.objects[id].lastPage  =  function()
    {
      grids.lastPage(id);
    }
    grids.objects[id].nextPage  =  function()
    {
      grids.nextPage(id);
    }
    grids.objects[id].nextValue  =  function()
    {
      grids.nextValue(id);
    }
    grids.objects[id].onBlurCell  =  function(row, col,funct)
    {
      grids.onBlurCell(id,row, col,funct);
    }
    grids.objects[id].onChangeCell  =  function(row, col,funct)
    {
      grids.onChangeCell(id,row, col,funct);
    }
    grids.objects[id].onClickCell  =  function(row,col,funct)
    {
      grids.onClickCell(id,row,col,funct);
    }
    grids.objects[id].onDblClickCell  =  function(row, col,funct)
    {
      grids.onDblClickCell(id,row, col,funct);
    }
    grids.objects[id].onFocusCell  =  function(row, col,funct)
    {
      grids.onFocusCell(id,row, col,funct);
    }
    grids.objects[id].onKeyDownCell  =  function(row, col,funct)
    {
      grids.onKeyDownCell(id,row, col,funct);
    }
    grids.objects[id].onKeyPressCell  =  function(row, col,funct)
    {
      grids.onKeyPressCell(id,row, col,funct);
    }
    grids.objects[id].onKeyUpCell  =  function(row, col,funct)
    {
      grids.onKeyUpCell(id,row, col,funct);
    }
    grids.objects[id].onMouseDownCell  =  function(row, col,funct)
    {
      grids.onMouseDownCell(id,row, col,funct);
    }
    grids.objects[id].onMouseMoveCell  =  function(row, col,funct)
    {
      grids.onMouseMoveCell(id,row, col,funct);
    }
    grids.objects[id].onMouseOutCell  =  function(row, col,funct)
    {
      grids.onMouseOutCell(id,row, col,funct);
    }
    grids.objects[id].onMouseOverCell  =  function(row, col,funct)
    {
      grids.onMouseOverCell(id,row, col,funct);
    }
    grids.objects[id].onMouseUpCell  =  function(row, col,funct)
    {
      grids.onMouseUpCell(id,row, col,funct);
    }
    grids.objects[id].order  =  function(field)
    {
      grids.order(id, field);
    }
    grids.objects[id].priorValue  =  function()
    {
      grids.priorValue(id);
    }
    grids.objects[id].priorPage  =  function()
    {
      grids.priorPage(id);
    }
    grids.objects[id].resizeCol  =  function( col, incr)
    {
      grids.resizeCol(id, col, incr);
    }
	grids.objects[id].setTypeArray = function(typeArr)
	{
	  grids.setTypeArray(id, typeArr);	
	}  
    grids.objects[id].saveData  =  function(nameEdit)
    {
      grids.saveData(id,nameEdit);
    }
    grids.objects[id].showData  =  function()
    {
      grids.showData(id);
    }
	grids.objects[id].setNumericCol = function(arrNumericCol)
	{
	  grids.setNumericCol(id, arrNumericCol);
	}
	grids.objects[id].setXMLStruct = function(obj)
    {
 	  grids.setXMLStruct(id, obj);
    }
    grids.objects[id].sortDisable  =  function()
    {
      grids.sortDisable(id);
    }
    grids.objects[id].setSingleSelection = function(sts)
    {
      grids.setSingleSelection(id, sts);
    }
    grids.objects[id].quickSort  =  function(pivote,izq, der)
    {
      grids.quickSort(pivote,izq, der);
    }
    grids.objects[id].setPropertyValues  =  function(prty)
    {
      grids.setPropertyValues(id,prty)
    }
    grids.objects[id].setProperties  =  function()
    {
      grids.setProperties(id);
    }
    grids.objects[id].setPropertyAllCell  =  function()
    {
      grids.setPropertyAllCell(id);
    }
    grids.objects[id].selectedRow  =  function( row)
    {
      grids.selectedRow(id, row);
    }
    grids.objects[id].selectedBar = function(row)
    {
      grids.selectedBar(id, row);
    }
    grids.objects[id].selectedCell  =  function( row, col)
    {
      grids.selectedCell(id, row, col);
    }
    grids.objects[id].showCol  =  function(col)
    {
      grids.showCol(id,col);
    }
    grids.objects[id].setDataRowVector  =  function(row,vector)
    {
      grids.setDataRowVector(id,row,vector);
    }
    grids.objects[id].setColorCell  =  function(row,col,bgColor)
    {
      grids.setColorCell(id,row,col,bgColor);
    }
    grids.objects[id].setColorTextCell  =  function(row,col,bgColor)
    {
      grids.setColorTextCell(id,row,col,bgColor);
    }
    grids.objects[id].setColorRow  =  function(row,bgColor)
    {
      grids.setColorRow(id,row,bgColor);
    }
    grids.objects[id].setColorTextRow  =  function(row,textColor)
    {
      grids.setColorTextRow(id,row,textColor);
    }
    grids.objects[id].setSizeCol  =  function( col, width)
    {
      grids.setSizeCol(id, col, width);
    }
    grids.objects[id].setFontCell  =  function(row,col,font,size,style,color)
    {
      grids.setFontCell(id,row,col,font,size,style,color);
    }
    grids.objects[id].setFontRow  =  function(row,font,size,style,color)
    {
      grids.setFontRow(id,row,font,size,style,color);
    }
    grids.objects[id].setFontTableControl  =  function(font,size,style,color)
    {
      grids.setFontTableControl(id,font,size,style,color);
    }
    grids.objects[id].setColorBarTitle  =  function( color)
    {
      grids.setColorBarTitle(id, color);
    }
    grids.objects[id].setFontTitleWeight  =  function( fw)
    {
      grids.setFontTitleWeight(id, fw);
    }
    grids.objects[id].setFontTitle  =  function(font,size,style,color)
    {
      grids.setFontTitle(id,font,size,style,color);
    }
    grids.objects[id].setDataCell  =  function(row,col,data)
    {
      grids.setDataCell(id,row,col,data);
    }
    grids.objects[id].setReadOnlyCell  =  function(row,col)
    {
      grids.setReadOnlyCell(id,row,col);
    }
    grids.objects[id].setReadOnlyToAll  =  function()
    {
      grids.setReadOnlyToAll(id);
    }
    grids.objects[id].setReadOnlyCol  =  function(col)
    {
      grids.setReadOnlyCol(id,col);
    }
    grids.objects[id].setReadOnlyCols  =  function(colArr)
    {
      grids.setReadOnlyCols(id,colArr);
    }
	grids.objects[id].setExternalMargin  =  function(value)
  	{
    	grids.setExternalMargin(id,value);
  	}
    grids.objects[id].setEditCell  =  function(row,col)
    {
      grids.setEditCell(id,row,col);
    }
    grids.objects[id].setReadOnlyRow  =  function(row)
    {
      grids.setReadOnlyRow(id,row);
    }
    grids.objects[id].setEditRow  =  function(row)
    {
      grids.setEditRow(id,row);
    }
    grids.objects[id].setFixColRow  =  function(fixCol,fixRow)
    {
      grids.setFixColRow(id,fixCol,fixRow);
    }
    grids.objects[id].setPosition  =  function(x,y)
    {
      grids.setPosition(id,x,y);
    }
    grids.objects[id].setObjAttrib  =  function(objAttr,env)
    {
      grids.setObjAttrib(id,objAttr,env);
    }
    grids.objects[id].setObjAttribToAll  =  function(objAttrib,env)
    {
      grids.setObjAttribToAll(objAttrib,env);
    }
    grids.objects[id].sortByField  =  function(field)
    {
      grids.sortByField(id,field);
    }
    grids.objects[id].sortEnable  =  function()
    {
      grids.sortEnable(id);
    }
    grids.objects[id].sortDisable  =  function()
    {
      grids.sortDisable(id);
    }
    grids.objects[id].quickSort  =  function(pivote,izq, der)
    {
      grids.quickSort(pivote,izq, der);
    }
    grids.objects[id].totalPage  =  function()
    {
      return grids.totalPage(id);
    }
    grids.objects[id].wheel =  function(event)
    {
      grids.wheel(event);
    }
    grids.objects[id].wheelEnable  =  function()
    {
      grids.wheelEnable();
    }
    grids.objects[id].setVisible = function(s)
    {
      grids.setVisible(id,s);
    }
    grids.objects[id].clean = function()
    {
      grids.clean(id);
    }
    grids.objects[id].setBgBarImg = function(barImg)
    {
      grids.setBgBarImg(id, barImg)
    }
    grids.objects[id].setLoadBGImg = function(activeLoad)
    {
      grids.setLoadBGImg(id, activeLoad);
    }
    grids.objects[id].setLoadBGImgAll = function(activeLoad)
    {
      grids.setLoadBGImgAll(activeLoad);
    }
    grids.objects[id].setImgEdit = function(imgEdit)
    {
      grids.setImgEdit(id, imgEdit);
    }
	grids.objects[id].onClickCells = function(funct)
	{
	  grids.onClickCells(id,funct);
	}	
	grids.objects[id].onDblClickCells= function(funct)
	{
	  grids.onDblClickCells(id,funct);
	}		
	grids.objects[id].setWidthGrid = function(width)
    {
      grids.setWidthGrid(id, width)
  	}
  	grids.objects[id].addObjToTitle = function(obj, typeObj, column, margin)
  	{
  	  return grids.addObjToTitle(id, obj, typeObj, column, margin);	
  	}
  	grids.objects[id].alignColumnTitle = function(align, column)
    {
      grids.alignColumnTitle(id,align, column);	
    }
    grids.objects[id].setEditModeToAll = function()
    {
      grids.setEditModeToAll(id);
    }
    grids.objects[id].getXML = function()
	{
	  return grids.getXML(id);	
	}
	grids.objects[id].setFocus = function()
	{
	  grids.setFocus(id);	
	}
	grids.objects[id].onEnter = function(funct)
	{
	  grids.onEnter(id, funct);	
	}
	grids.objects[id].onEscape = function(funct)
	{
	  grids.onEscape(id, funct);	
	}
	grids.objects[id].setEditCol = function(col)
	{
	  grids.setEditCol(id,col);	
	}
	grids.objects[id].setBorderCells = function(sts)
	{
	  grids.setBorderCells(id, sts);	
	}
	grids.objects[id].setMaskInteger = function(sts, col)
	{
	  grids.setMaskInteger(id, sts, col);	
	}
	grids.objects[id].setMaskReal = function(sts, col)
	{
	  grids.setMaskReal(id, sts, col);	
	}
	grids.objects[id].setMaskEmail = function(sts, col)
	{
	  grids.setMaskEmail(id, sts, col);	
	}
	grids.objects[id].setMaskNumRange = function(sts, minRange, maxRange, col)
	{
	  grids.setMaskNumRange(id, sts, minRange, maxRange, col);	
	}
	grids.objects[id].getEdit = function(row, col)
	{
	  return grids.getEdit(id, row, col);
	}
	grids.objects[id].getTotalRecord = function()
	{
	  return grids.getTotalRecord(id)  
	}
	grids.objects[id].getXMLStruct = function(name, arrCol)
	{
	  return grids.getXMLStruct(id, name, arrCol);  
	}
	grids.objects[id].setFocusCell = function(f, c)
    {
      grids.setFocusCell(id, f, c);
    }
    grids.objects[id].getObjFocusColRow = function()
    {
      return grids.getObjFocusColRow(id);  
    }
    grids.objects[id].hasChange = function(f, c)
    {
      return grids.hasChange(id, f, c);  
    }    
    grids.objects[id].setTitleColumn = function(col, titleCol)
    {
      grids.setTitleColumn(id, col, titleCol);  
    }    
    grids.objects[id].getTitleColumn = function(col)
    {
      return grids.getTitleColumn(id, col);
    }
    grids.objects[id].cleanRow = function()
    {
      grids.cleanRow(id);	
    }   
    grids.objects[id].dataColumnExist = function(dat, col)
    {
      return grids.dataColumnExist(id, dat, col);	
    }
    grids.objects[id].dataRowExist = function(arrayData)   
    {
      return grids.dataRowExist(id, arrayData);	
    } 
    grids.objects[id].enableRepeatAddRow = function()   
    {
      grids.enableRepeatAddRow(id);	
    }
    grids.objects[id].getDataCellRow = function(col, row)
    {
      return grids.getDataCellRow(id,col,row);	
    }
    grids.objects[id].getKeyPress = function()
    {
  	  return grids.getKeyPress(id);  
    }
  },
    
  addToBody : function(id)
  {
    document.body.appendChild(this.objects[id].container);
  },
  
  addData : function(id,dataArray)
  {
    var tc = dataArray.length;
    if(this.objects[id].dataStruct.data[0].length==0)
    {
      for(var i=0; i<tc; i++)
      {
        this.objects[id].dataStruct.data[i]= new Array;
        this.objects[id].dataStruct.data[i].splice(0, this.objects[id].dataStruct.data[i].length);
      }
    }
    var f = this.objects[id].dataStruct.data[0].length;
    for(var i=0; i<tc; i++)
    {
      this.objects[id].dataStruct.data[i][f] = dataArray[i];
    }
    dataArray.splice(0, dataArray.length);
    this.showData(id);
  },

  addTitle : function(id,x,y,title)
  {
    if(x > 0 && y==0)
    {
      this.objects[id].dataStruct.fields[this.objects[id].dataStruct.fields.length] = title;
    }
    if((x==0 && this.objects[id].rowTitleX) || (y==0 && this.objects[id].rowTitleY))
    {
      this.objects[id].table.rows[x].cells[y].tableTitle = document.createElement('table');
      this.objects[id].table.rows[x].cells[y].tableTitle.setAttribute("border","0");
      this.objects[id].table.rows[x].cells[y].tableTitle.setAttribute("cellPadding","0");
      this.objects[id].table.rows[x].cells[y].tableTitle.setAttribute("cellSpacing","0");
      this.objects[id].table.rows[x].cells[y].tableTitle.insertRow(0);
      this.objects[id].table.rows[x].cells[y].tableTitle.rows[0].insertCell(0);
      this.objects[id].table.rows[x].cells[y].tableTitle.rows[0].insertCell(1);
      this.objects[id].table.rows[x].cells[y].tableTitle.rows[0].insertCell(2);
      this.objects[id].table.rows[x].cells[y].tableTitle.rows[0].cells[2].innerHTML = title;
      this.objects[id].table.rows[x].cells[y].tableTitle.rows[0].cells[0].style.height = '24px';
      this.objects[id].table.rows[x].cells[y].tableTitle.rows[0].cells[1].style.height = '24px';
      this.objects[id].table.rows[x].cells[y].tableTitle.rows[0].cells[2].style.height = '24px';
      this.objects[id].table.rows[x].cells[y].align = 'center';
      this.objects[id].table.rows[x].cells[y].appendChild(this.objects[id].table.rows[x].cells[y].tableTitle);
      this.objects[id].table.rows[x].cells[y].style.cursor='pointer';
      if(x==0)
      {
        this.objects[id].vectorTitles[y] = title;
      }
    }
  },
  addObjToTitle : function(id, obj, typeObj, column, margin)
  {
  	var o = document.createElement(obj);
  	o.type = typeObj;
    this.objects[id].table.rows[0].cells[column].tableTitle.rows[0].cells[0].appendChild(o);
    this.objects[id].table.rows[0].cells[column].tableTitle.rows[0].cells[1].style.width = margin+'px';	
    this.objects[id].table.rows[0].cells[column].onclick = new Function('');
    return o;
  },
  
  activeSelectedCell : function(id)
  {
    this.objects[id].selectCell =  this.MOUSE_OVER_EVENT;
  },
  activeSelectedRow : function(id,multiselect)
  {
    this.objects[id].selectRow = true;
    this.objects[id].multiSelect = multiselect;
  },
  addTitleVectorX : function(id, vectorTitle)
  {
    for(i=0; i < this.objects[id].table.rows[0].cells.length-1; i++)
    {
      this.objects[id].dataCol[i+1] =
      {
        sts : false,
        width : 150	
      }	
      this.addTitle(id,0,i+1,vectorTitle[i]);
    }	
  },
  addTitleVectorY : function(id,vectorTitle)
  {
    for(i=0; i < this.objects[id].table.rows.length; i++)
    {
      this.addTitle(id,i,0,vectorTitle[i]);
    }
  },
  alignTextTitle : function(id,align)
  {
    if(this.objects[id].rowTitleX)
    {
      for(c = 1; c < this.objects[id].table.rows[0].cells.length; c++)
      {
        this.objects[id].table.rows[0].cells[c].tableTitle.rows[0].cells[2].style.textAlign = align;
      }
    }
    if(this.objects[id].rowTitleY)
    {
      for(f = 0; f < this.objects[id].table.rows.length; f++)
      {
        this.objects[id].table.rows[f].cells[0].tableTitle.rows[0].cells[2].style.textAlign = align;
      }
    }
  },
  
  alignColumnTitle : function(id,align, column)
  {
     this.objects[id].table.rows[0].cells[column].tableTitle.rows[0].cells[2].style.textAlign = align;
     this.objects[id].table.rows[0].cells[column].align = align;
  },
  
  setMaskInteger : function(id, sts, col)
  {
  	if(sts)
  	  this.objects[id].maskInteger[col] = true	
  	else
  	  this.objects[id].maskInteger[col] = false;
  },
  setMaskReal : function(id, sts, col)
  {
  	if(sts)
  	  this.objects[id].maskReal[col] = true	
  	else
  	  this.objects[id].maskReal[col] = false;
  },

  setMaskEmail : function(id, sts, col)
  {
  	if(sts)
  	  this.objects[id].maskEmail[col] = true	
  	else
  	  this.objects[id].maskEmail[col] = false;
  },
  
  setMaskNumRange : function(id, sts, minRange, maxRange, col)
  {
  	this.objects[id].minRange = minRange;
  	this.objects[id].maxRange = maxRange;  	
  	if(sts)
  	  this.objects[id].maskNumRange[col] = true	
  	else
  	  this.objects[id].maskNumRange[col] = false;
  },
  addRow : function(id,readOnly)
  {
    var ro = false;
    if (this.addRow.arguments.length == 2)
    {
      ro = this.addRow.arguments[1];
    }
    var oecc = this.objects[id].twoColorsRows;
    var nameEdit = "";
    var f = this.objects[id].table.rows.length;
    this.objects[id].table.insertRow(f);
    this.objects[id].table.rows[0].style.height='24px';
    this.objects[id].table.rows[0].style.lineHeight='24px';
    this.objects[id].table.rows[0].vAlign='middle';
    
    for(c = 0; c < this.objects[id].totalCols; c++)
    {
      var nameEdit = id+f+","+c;
      this.objects[id].table.rows[f].insertCell(c);
      if(f!=0 && c!=0)
      {
        this.objects[id].edits[nameEdit] = document.createElement("input");
        this.objects[id].edits[nameEdit].style.width = "100px";
        this.objects[id].edits[nameEdit].style.height = "18px";
        this.objects[id].edits[nameEdit].style.lineHeight = "1";
        this.objects[id].edits[nameEdit].style.borderRadius = 0;
        this.objects[id].edits[nameEdit].row = f;
        this.objects[id].edits[nameEdit].col = c;
        this.objects[id].edits[nameEdit].name = nameEdit;
        this.objects[id].edits[nameEdit].widthCell = this.objects[id].columnWidth;
        this.objects[id].edits[nameEdit].style.borderWidth = "0px";
        this.objects[id].edits[nameEdit].style.borderStyle = "none";
        this.objects[id].edits[nameEdit].style.padding = "0px";
        this.objects[id].edits[nameEdit].hasChg=false;
        this.initializeEvents(id,nameEdit);
        if(ro)
        {
          this.objects[id].edits[nameEdit].readOnly=true;
        }
        if(oecc)
        {
          if((f % 2) == 0)
          {
            this.setColorCell(id,f,c,this.objects[id].colorEvenRow);
          }
          else
          {
            this.setColorCell(id,f,c,this.objects[id].colorOddRow);
          }
        }
        else
        {
          this.setColorCell(id,f,c,this.objects[id].colorCells);
        }
        this.setFontCell(id,f,c,this.objects[id].fontFamilyCells,this.objects[id].fontSizeCells,this.objects[id].fontStyleCell,this.objects[id].fontColorCells);
        this.objects[id].table.rows[f].cells[c].style.fontSize ="0px";
        this.objects[id].table.rows[f].cells[c].style.height = "18px";
        this.objects[id].table.rows[f].cells[c].style.lineHeight = "1";
        this.objects[id].table.rows[f].cells[c].vAlign ='top';
        this.objects[id].table.rows[f].cells[c].appendChild(this.objects[id].edits[nameEdit]);
        if(c!=1)
          this.objects[id].table.rows[f].cells[c].align = 'left';
        else
          this.objects[id].table.rows[f].cells[c].align = 'center';
        this.objects[id].table.rows[f].cells[c].style.backgroundColor = '#cecece';
        this.objects[id].table.rows[f].cells[c].style.width = "100px";
        this.objects[id].table.rows[f].cells[c].hideCol = false;
                
        this.objects[id].edits[nameEdit].onkeydown = function(e)
        {
          grids.events[nameEdit].onKeyDown();  
        }   
             
        this.objects[id].edits[nameEdit].onkeyup = function(e)
        {    	
          grids.objects[id].focusCell = this.col;
          grids.objects[id].focusRow = this.row;
          var newKey='';
          if(document.all)
	      {
	   	    if(window.event)
	   	    {
	   	  	  newkey = window.event;
	   	    }
	      }
	      else
	      {
	   	    newkey = e.keyCode;
	      }
	      grids.objects[id].keypress = newkey;
	      var nmed = id + this.row + ',' + this.col;
	      grids.events[nmed].onKeyUp();
	      grids.objects[id].edits[nmed].hasChg=false;
	      switch(newkey)
	      {
	      	case 33 : {	
	      		        if(grids.objects[id].pageCountEdit.value>"1")
      					{
        				  grids.priorPage(id);
        				  grids.objects[id].pageCountEdit.value--;
      					}
	 				    break;
	      		      }
	      	case 34 : {	
	      				if(grids.objects[id].pageCountEdit.value<grids.totalPage(id))
      					{
        				  grids.nextPage(id);
        				  grids.objects[id].pageCountEdit.value++;
      					}
	 				    break;
	      		      }
	        case 37 : {	
	 				    break;
	      		      }
	        case 39 : {	
	 				    break;
	      		      }
	      		      
	        case 36 : {	
	 					grids.firstPage(id);     				 
	      		        break;
	      		      }
	        case 35 : {
	 					grids.lastPage(id);     				 
	      		        break;
	      		      }
	      	case 13 : {
	 					grids.objects[id].onEnter();     				 
	      		        break;
	      		      }
	        case 27 : {
	        			grids.objects[id].onESC();
	        			break;
	        		  }
	        case 40 : {
	        	        var r = this.row + 1;
	        	        if(r >= grids.objects[id].totalRows)
	        	        {	       
	        	          r = grids.objects[id].totalRows-1;
	        	          grids.nextValue(id);
	        	        }  
	        	        grids.setFocusCell(id,r,this.col);
	        			grids.cleanSelected(id);
	        			grids.selectedRow(id,r);
	        			break
	        		  }
	        case 38 : {
	        			var r = this.row - 1;
	        	        var c = this.col;
	        	        if(r<1)
	        	        {
	        	          r=1;
	        	          grids.priorValue(id);
	        	        }
	        			grids.setFocusCell(id,r,c);
	        			grids.cleanSelected(id);
	        			grids.selectedRow(id,r);
	        			break
	        		  }
	        case 8 :  {
	                    var r = this.row;
                        var c = this.col;
                        grids.setFocusCell(id,r,c);
	        			break;
	                  }
	        default : {
	        			
	        			grids.objects[id].edits[nmed].hasChg=true;
	        			if(grids.objects[id].maskInteger[this.col])
	        			{	
	        			  var code = String.fromCharCode(newkey);	
	        			  var txt = '';
	        			  var lg = this.value.length;
	        			  var signo = false;
	        			  for(i=0; i<lg; i++)
	        			  {
	        			    if(grids.isDigit(this.value.charAt(i)))
	        			    {
	        			      txt += this.value.charAt(i);
	        			      signo=true;
	        			    }
	        			    else
	        			    {
	        			      if(this.value.charAt(i)=='-' && !signo)
	        			      {
	        			      	txt += this.value.charAt(i);
	        			      	signo=true;
	        			      }	
	        			    }	
	        			  }	
	        			  this.value = txt;
	        			}
	        			
          			    if(grids.objects[id].maskEmail[this.col])
	        			{
	        			  var code = String.fromCharCode(newkey);	
	        			  var txt = '';
	        			  var lg = this.value.length;
	        			  var pto = false;
	        			  for(i=0; i<lg; i++)
	        			  {
	        			    if(this.value.charAt(i)!='@')
	        			    {
	        			      txt += this.value.charAt(i);
	        			    } 
	        			    else
	        			    {
	        			      if(!pto)
	        			       txt += this.value.charAt(i);
	        			      pto = true;
	        			    }    	
	        			  }	
	        			  this.value = txt;
	        			}
	        			
	        			if(grids.objects[id].maskReal[this.col])
	        			{
	        			  var code = String.fromCharCode(newkey);	
	        			  var txt = '';
	        			  var lg = this.value.length;
	        			  var pto = false;
	        			  var signo = false;
	        			  for(i=0; i<lg; i++)
	        			  {
	        			    if(grids.isDigit(this.value.charAt(i)) || this.value.charAt(i)=='.' || this.value.charAt(i)=='-')
	        			    {
	        			      if(this.value.charAt(i)=='-' && !signo)
	        			      { 
	        			      	signo = true;
	        			      	txt='-';
	        			      	
	        			      }
	        			      else
	        			      {
	        			      	signo = true;
	        			        if(this.value.charAt(i)!='.' && this.value.charAt(i)!='-')
	        			        {
	        			          txt += this.value.charAt(i);
	        			        } 
	        			        else
	        			        {
	        			      	  if(!pto && this.value.charAt(i)!='-')
	        			      	  {
	        			      	    txt += this.value.charAt(i);
	        			      	  }
	        			          pto = true;
	        			        }
	        			      }    	
	        			    }	
	        			  }	
	        			  this.value = txt;
	        			}
	        			
	        			if(grids.objects[id].maskNumRange[this.col])
	        			{
	        			  var code = String.fromCharCode(newkey);	
	        			  var txt = '';
	        			  var lg = this.value.length;
	        			  var pto = false;
	        			  var signo = false;
	        			  for(i=0; i<lg; i++)
	        			  {
	        			    if(grids.isDigit(this.value.charAt(i)) || this.value.charAt(i)=='.' || this.value.charAt(i)=='-')
	        			    {
	        			      if(this.value.charAt(i)=='-' && !signo)
	        			      { 
	        			      	signo = true;
	        			      	txt='-';
	        			      	
	        			      }
	        			      else
	        			      {
	        			      	signo = true;
	        			        if(this.value.charAt(i)!='.' && this.value.charAt(i)!='-')
	        			        {
	        			          txt += this.value.charAt(i);
	        			        } 
	        			        else
	        			        {
	        			      	  if(!pto && this.value.charAt(i)!='-')
	        			      	  {
	        			      	    txt += this.value.charAt(i);
	        			      	  }
	        			          pto = true;
	        			        }
	        			      }    	
	        			    }	
	        			  }	
	        			  var fv = parseFloat(txt);
	        			  if(fv < grids.objects[id].minRange || fv > grids.objects[id].maxRange)
	        			  {
	        			    this.value = '';	
	        			  }	
	        			  else
	        			    this.value = txt;
	        			}
	        			break;
	        		  }
	      }	
	      var position = grids.objects[id].dataStruct.offsetPage +
          grids.objects[id].dataStruct.itemPage *
          grids.objects[id].dataStruct.pageSize +
          grids.objects[id].dataStructScroll;
          var m = parseInt(position / grids.objects[id].dataStruct.pageSize,10);
          grids.objects[id].pageCountEdit.value = m+1;
	      grids.objects[id].autoSaveFunct(nameEdit);
        }
        
        grids.objects[id].table.onmouseup = function(e)
        {
          grids.objects[id].flagDown = false;
        }
       
        grids.objects[id].table.onmousedown = function(e)
        {
          grids.getMouseXY(e);
          if(grids.objects[id].isOut)
          {
            grids.gridInit = grids.gridX;
            if(grids.objects[id].table.style.cursor == "w-resize")
            grids.objects[id].flagDown = true;
            else
            grids.objects[id].flagDown = false;
          }
        }
       
        grids.objects[id].table.onmousemove = function(e)
        {
          grids.getMouseXY(e);
          var diff = grids.gridX - grids.gridInit;
          if(grids.objects[id].flagDown)
          {
            grids.resizeCol(id,grids.objects[id].actCol,diff);
            grids.gridInit = grids.gridX;
          }
        }
        
        grids.objects[id].edits[nameEdit].onmouseout = function(e)
        {
          this.style.cursor = 'default';	
          grids.getMouseXY(e);
          grids.objects[id].dataStruct.offsetPage = this.row - 1;
          var position = grids.objects[id].dataStruct.offsetPage +
          grids.objects[id].dataStruct.itemPage *
          grids.objects[id].dataStruct.pageSize +
          grids.objects[id].dataStructScroll;
          if (!grids.objects[id].flagDown)
          {
            grids.objects[id].xout = grids.gridX;
            grids.objects[id].yout = grids.gridY;
            var d2 = grids.objects[id].yout - grids.objects[id].yin;
            if (((d2 >= 0 && d2 < 4)) && (grids.objects[id].xout >= grids.objects[id].xin))
            grids.objects[id].table.style.cursor = "w-resize";
            else
            grids.objects[id].table.style.cursor = "default";
            grids.objects[id].actCol = grids.getCol(this);
          }
          if (grids.objects[id].selectRow)
          {
            if (grids.objects[id].dataStruct.data[0].length > 0)
            {
              if (!grids.objects[id].dataStruct.isRegSelected[position])
              {
                grids.deselectedRow(id, this.row);
              }
              else
              {
                grids.selectedBar(id, this.row);
              }
            }
          }
          if (grids.objects[id].selectCell == grids.MOUSE_OVER_EVENT)
          {
            grids.deselectedCell(id, this.row, this.col);
          }
          grids.objects[id].isOut = true;
        }
        
        grids.objects[id].edits[nameEdit].onmouseover = function(e)
        {		
          this.style.cursor = 'pointer';	
          grids.cleanSelected(id);	
          grids.selectedRow(id,this.row);
          grids.getMouseXY(e);
          if (!grids.objects[id].flagDown)
          {
            grids.objects[id].xin = grids.gridX;
            grids.objects[id].yin = grids.gridY;
            var d2 = grids.objects[id].yout - grids.objects[id].yin;
            if (((d2 >= 0 && d2 < 4)) && (grids.objects[id].xout >= grids.objects[id].xin))
              grids.objects[id].table.style.cursor = "w-resize";
            else
              grids.objects[id].table.style.cursor = "default";
            
          }
          for (iw = 1; iw < grids.objects[id].table.rows[0].cells.length; iw++)
          {
          	grids.objects[id].actRow = this.row;
            grids.objects[id].actualRecord[iw] = grids.getDataCell(id, iw);
          }
          if (grids.objects[id].selectRow)
          {
            if(grids.objects[id].dataStruct.data[0].length > 0)
            {
              grids.selectedRow(id, this.row);
            }
          }
          if (grids.objects[id].selectCell == grids.MOUSE_OVER_EVENT)
          {
            grids.selectedCell(id, this.row, this.col);
          }
          grids.objects[id].isOut = false;
        }
      }
    }
  },
  
  
  autoSaveEnable : function(id)
  {
    if(this.objects[id].autoEnable)
      return;
    this.objects[id].autoEnable = true;
    for(row = 1;row<this.objects[id].table.rows.length;row++)
      for(col = 1; col < this.objects[id].table.rows[row].cells.length; col++)
      {
        this.saveData(id, id+row+","+col);
      }
  },
  
  
  autoSaveDisable : function(id)
  {
    this.objects[id].autoEnable = false;
  },
  
  
  autoSizeField : function(id,field)
  {
  	
  	this.objects[id].table.rows[0].cells[field].tableTitle.rows[0].cells[2].ondblclick = function()
    {
      var maximo=0;
      grids.objects[id].table.dblclick = 2;
      for(i=0;i<grids.objects[id].dataStruct.data[field-1].length;i++)
        if(maximo<grids.objects[id].dataStruct.data[field-1][i].length)
          maximo = grids.objects[id].dataStruct.data[field-1][i].length;
      grids.setSizeCol(id, field, maximo*8);
    }
  },
  
  getKeyPress : function(id)
  {
	return grids.objects[id].keypress;  
  },  
  
  create : function(id,rows,cols) 
  {
    cols++;
    rows++;
    this.ids[this.ids.length] = id;
    if(this.create.arguments.length < 3)
    {
      alert("FALTAN PARAMETROS EN LA LLAMADA A CREATE()..!")
    }
    else
    {
      var ro = false;
      if(this.create.arguments.length >= 4)
      {
        ro = this.create.arguments[3];
      }
      this.objects[id] = new Object();
      this.objects[id].ambiente = attrib.getActualEnv();
      this.objects[id].focusCell = 1;
      this.objects[id].focusRow = 1;
      this.objects[id].autoSaveFunct = new Function('');
      this.objects[id].maskInteger 	= new Array();
      this.objects[id].maskReal 	= new Array();
      this.objects[id].maskEmail 	= new Array();
      this.objects[id].maskNumRange	= new Array();
      this.objects[id].minRange = 0;
  	  this.objects[id].maxRange = 100; 
  	  grids.objects[id].keypress = 0;
  	  grids.objects[id].noRepeatRow = true;
      for(var i=0; i<=cols; i++)
      {
        this.objects[id].maskInteger[i]=false;	
        this.objects[id].maskReal[i]=false;
        this.objects[id].maskEmail[i]=false;
      }
      
      this.objects[id].maskCol = -1;
      this.objects[id].onEnter = new Function('');
      this.objects[id].onESC = new Function('');
      this.objects[id].nameComponent = 'grids';
      this.objects[id].dataCol = new Array();
	  this.objects[id].typeArray = new Array;
      this.objects[id].singleSelection = false;
      this.objects[id].loadBGImg = false;
      this.objects[id].firstOrder = false;
	  this.objects[id].numericCol = new Array;
      this.objects[id].barSelected = "blue";
      this.objects[id].imgEdit = "";
      this.objects[id].id = id;
      this.loadDefaultProperties(id);
      if(this.create.arguments.length >= 5)
      {
        this.objects[id].twoColorsRows = this.create.arguments[4];
      }
      this.objects[id].vectorTitles = new Array;
      this.objects[id].container = document.createElement("div");
      this.objects[id].container.style.borderWidth = '0px';
      this.objects[id].container.style.borderStyle = 'none';
      this.objects[id].container.onmousemove = function()
      {
        grids.whellID = id;
      }
      this.objects[id].orderField = -1;
      this.objects[id].totalRows = rows;
      this.objects[id].totalCols = cols;
      this.objects[id].xin = 0;
      this.objects[id].xout = 0;
      this.objects[id].yin = 0;
      this.objects[id].yout = 0;
      this.objects[id].actCol = 0;
      this.objects[id].actRow = 0;
      this.objects[id].antCol = 0;
      this.objects[id].antRow = 0;
      this.objects[id].isOut = false;
      this.objects[id].actualRecord = new Array;
      this.objects[id].multiSelect = false;
      this.objects[id].selectCell = 0;
      this.objects[id].selectRow = false;
      this.objects[id].flagDown = false;
      this.objects[id].totalColWidth = 0;
      this.objects[id].table = document.createElement("table");
      this.objects[id].table.setAttribute("border","0");
      this.objects[id].table.setAttribute("cellPadding","0");
      this.objects[id].table.setAttribute("cellSpacing","1px");
      this.objects[id].table.style.borderWidth ="0px";
      this.objects[id].table.style.backgroundColor ="#dedede";
      this.objects[id].divData = document.createElement("div");
      this.objects[id].divData.style.borderStyle='groove';
      this.objects[id].divData.style.borderWidth='0px';
      this.objects[id].divData.appendChild(this.objects[id].table);
      this.objects[id].divData.style.overflow = "auto";
      this.objects[id].tableControl = document.createElement("table");
      this.objects[id].tableControl.style.width = "100%";
      this.objects[id].tableControl.setAttribute("border","0");
      this.objects[id].tableControl.setAttribute("cellPadding","0");
      this.objects[id].tableControl.setAttribute("cellSpacing","0");
      this.objects[id].tableControl.style.borderWidth='0px';
      this.objects[id].tableControl.insertRow(0);
      for(i=0; i<6; i++)
      {
        this.objects[id].tableControl.rows[0].insertCell(i);
        this.objects[id].tableControl.rows[0].cells[i].style.width = "8%";
        this.objects[id].tableControl.rows[0].cells[i].style.textAlign = "center";
        this.objects[id].tableControl.rows[0].cells[i].style.borderStyle="outset";
        this.objects[id].tableControl.rows[0].cells[i].style.borderWidth="1px";
        this.objects[id].tableControl.rows[0].cells[i].style.cursor = 'pointer';
      }
      this.objects[id].tableControl.rows[0].insertCell(3).style.width = "52%";
      this.objects[id].tableControl.rows[0].cells[3].style.textAlign = "center";
      this.objects[id].maxControl = this.objects[id].tableControl.rows[0].cells.length;
      this.objects[id].pageCountEdit = document.createElement("input");
      this.objects[id].pageCountEdit.style.textAlign = "center";
      this.objects[id].pageCountEdit.value = "1";
      this.objects[id].pageCountEdit.style.width = "20%";
      this.objects[id].pageCountEdit.style.height = "18px";
      this.objects[id].pageCountEdit.onkeyup = function()
      {
        if(!((grids.isInteger(grids.objects[id].pageCountEdit.value))&&
        (grids.objects[id].pageCountEdit.value<=grids.totalPage(id)))||
        (grids.objects[id].pageCountEdit.value=='0')||
        (grids.objects[id].pageCountEdit.value==' '))
          grids.objects[id].pageCountEdit.value = grids.objects[id].dataStruct.itemPage+1;
        else
        if(grids.objects[id].pageCountEdit.value != "" )
        { 
          grids.objects[id].dataStruct.itemPage = grids.objects[id].pageCountEdit.value-1;
          grids.showData(id);
        }
      }
      this.objects[id].pageCountLabel = document.createTextNode("1");
      this.objects[id].tableControl.rows[0].cells[0].appendChild(document.createTextNode("|<"));
      this.objects[id].tableControl.rows[0].cells[1].appendChild(document.createTextNode("<<"));
      this.objects[id].tableControl.rows[0].cells[2].appendChild(document.createTextNode("<"));
      this.objects[id].tableControl.rows[0].cells[3].appendChild(document.createTextNode("Pagina: "));
      this.objects[id].tableControl.rows[0].cells[3].appendChild(this.objects[id].pageCountEdit);
      this.objects[id].tableControl.rows[0].cells[3].appendChild(document.createTextNode(" de: "));
      this.objects[id].tableControl.rows[0].cells[3].appendChild(this.objects[id].pageCountLabel);
      this.objects[id].tableControl.rows[0].cells[3].vAlign = 'middle';
      this.objects[id].tableControl.rows[0].cells[4].appendChild(document.createTextNode(">"));
      this.objects[id].tableControl.rows[0].cells[5].appendChild(document.createTextNode(">>"));
      this.objects[id].tableControl.rows[0].cells[6].appendChild(document.createTextNode(">|"));
      this.objects[id].tableControl.rows[0].style.height="23px";
      this.objects[id].tableControl.rows[0].style.lineHeight="23px";
      this.objects[id].tableControl.rows[0].vAlign="middle";
      this.objects[id].tableControl.rows[0].cells[3].style.borderStyle = "outset";
      this.objects[id].tableControl.rows[0].cells[3].style.borderWidth = "1px";
      this.objects[id].tablePrinc = document.createElement("table");
      this.objects[id].tablePrinc.setAttribute("border","0");
      this.objects[id].tablePrinc.setAttribute("cellPadding","0");
      this.objects[id].tablePrinc.setAttribute("cellSpacing","0");
      this.objects[id].tablePrinc.insertRow(0);
      this.objects[id].tablePrinc.insertRow(1);
      this.objects[id].tablePrinc.style.borderWidth ="0px";
      this.objects[id].tablePrinc.rows[0].insertCell(0);
      this.objects[id].tablePrinc.rows[1].insertCell(0);
      this.objects[id].tablePrinc.rows[0].cells[0].appendChild(this.objects[id].divData);
      this.objects[id].tablePrinc.rows[1].cells[0].appendChild(this.objects[id].tableControl);
      this.objects[id].container.appendChild(this.objects[id].tablePrinc);
      this.objects[id].edits = new Array;
      this.objects[id].dataStructScroll = 0;
      this.objects[id].dataStruct =
      {
        type      : 'E',
        offsetPage: 0,
        pageSize  : rows-1,
        itemPage  : 0,
        fields    : [],
        data 	  : [[],[]]
      }

      for(i = 0; i < rows; i++)
      {
        this.addRow(id,ro);
      }
      this.setProperties(id);
    }
    this.controlEvents(id);
    this.addPropertyMethod(id);
    this.wheelEnable();
    this.activeSelectedRow(id,-1);
    this.setReadOnlyToAll(id);
    if(attrib)
      this.setObjAttrib(id,attrib,attrib.getActualEnv());
    return this.objects[id];
  },
  
  cleanRow : function(id)
  {
  	var p = 0;  	
  	p =  parseInt(this.objects[id].dataStruct.itemPage,10) * parseInt(this.objects[id].dataStruct.pageSize,10)  +   
  	parseInt(this.objects[id].dataStruct.offsetPage,10);
    for(j=0; j < this.objects[id].dataStruct.data.length; j++)
      this.objects[id].dataStruct.data[j].splice(p,1);
    this.showData(id);
  },
  
  clean : function(id)
  {
    var i=0;
    this.objects[id].dataStruct.itemPage=0;
    this.objects[id].dataStruct.offsetPage=0;
    this.objects[id].pageCountEdit.value = grids.objects[id].dataStruct.itemPage+1;
	this.objects[id].dataStruct.isRegSelected = [];
    for(i=0; i<this.objects[id].table.rows[0].cells.length; i++) {
      this.objects[id].dataStruct.data[i] = [];
	  this.objects[id].dataStruct.isRegSelected[i] = false;
    }
    this.objects[id].pageCountLabel.nodeValue = this.totalPage(id);
    grids.firstPage(id); 
  },
  handle: function(delta)
  {
    if(this.whellID=="")
    return;
    if (delta < 0)
    {
      this.objects[this.whellID].tableControl.rows[0].cells[4].onmousedown();
      this.objects[this.whellID].tableControl.rows[0].cells[4].onmouseup();
    }
    else
    {
      this.objects[this.whellID].tableControl.rows[0].cells[2].onmousedown();
      this.objects[this.whellID].tableControl.rows[0].cells[2].onmouseup();
    }
  },
  
  hasChange : function(id, f, c)
  {
    var nmed2 = id + f + ',' + c;  
    return grids.objects[id].edits[nmed2].hasChg;    
  },
  
  getEdit : function(id, row, col)
  {
  	var nameEdit = id + row + "," + col;
  	var edit = grids.objects[id].edits[nameEdit]; 
  	return edit;
  },
  
  getObjFocusColRow : function(id)
  {
    var fcr = new Object();
    fcr.col = this.objects[id].focusCell;
    fcr.row = this.objects[id].focusRow;
    fcr.nameEdit = id + fcr.row + "," + fcr.col;
    return fcr;
  },
  
  setBorderCells : function(id, sts)
  {
  	if(sts)
      grids.objects[id].table.setAttribute("border","1")
    else
      grids.objects[id].table.setAttribute("border","0");
  },
  isDigit : function(c)
  {
    return ((c>="0") && (c<="9"));
  },
  isInteger : function(s)
  {
    var i;
    var c;
    if((s=null)||(s=""))
    return false;
    for(i=0; i<s.length; i++)
    {
      c=s.charAt(i);
      if(!this.isDigit(c))
      return false;
    }
    return true;
  },
  controlEvents : function(id)
  {
    this.objects[id].tableControl.rows[0].cells[0].onmousedown = function()
    {
      grids.objects[id].tableControl.rows[0].cells[0].style.borderStyle = "inset";
      grids.firstPage(id);
      grids.objects[id].pageCountEdit.value = "1";
    }
    this.objects[id].tableControl.rows[0].cells[0].onmouseup = function()
    {
      grids.objects[id].tableControl.rows[0].cells[0].style.borderStyle = "outset";
      grids.objects[id].edits[id+grids.objects[id].actRow+',1'].focus();
    }
    this.objects[id].tableControl.rows[0].cells[1].onmousedown = function()
    {
      grids.objects[id].tableControl.rows[0].cells[1].style.borderStyle = "inset";
      if(grids.objects[id].pageCountEdit.value=="")
      grids.objects[id].pageCountEdit.value = grids.objects[id].dataStruct.itemPage+1;
      if(grids.objects[id].pageCountEdit.value>"1")
      {
        grids.priorPage(id);
        grids.objects[id].pageCountEdit.value--;
      }
    }
    this.objects[id].tableControl.rows[0].cells[1].onmouseup = function()
    {
      grids.objects[id].tableControl.rows[0].cells[1].style.borderStyle = "outset";
      grids.objects[id].edits[id+grids.objects[id].actRow+',1'].focus();
    }
    
    this.objects[id].tableControl.rows[0].cells[2].onmousedown = function()
    {
      grids.objects[id].tableControl.rows[0].cells[2].style.borderStyle = "inset";
      grids.priorValue(id);
      grids.objects[id].pageCountEdit.value = grids.objects[id].dataStruct.itemPage+1;
    }
    this.objects[id].tableControl.rows[0].cells[2].onmouseup = function()
    {
      grids.objects[id].tableControl.rows[0].cells[2].style.borderStyle = "outset";
      grids.objects[id].edits[id+grids.objects[id].actRow+',1'].focus();
    }
    
    this.objects[id].tableControl.rows[0].cells[4].onmousedown = function()
    {
      grids.objects[id].tableControl.rows[0].cells[4].style.borderStyle = "inset";
      grids.nextValue(id);
      grids.objects[id].pageCountEdit.value = grids.objects[id].dataStruct.itemPage+1;
    }
    this.objects[id].tableControl.rows[0].cells[4].onmouseup = function()
    {
      grids.objects[id].tableControl.rows[0].cells[4].style.borderStyle = "outset";
      grids.objects[id].edits[id+grids.objects[id].actRow+',1'].focus();
    }
   
    this.objects[id].tableControl.rows[0].cells[5].onmousedown = function()
    {
      grids.objects[id].tableControl.rows[0].cells[5].style.borderStyle = "inset";
      if(grids.objects[id].pageCountEdit.value=="")
      grids.objects[id].pageCountEdit.value = grids.objects[id].dataStruct.itemPage+1;
      if(grids.objects[id].pageCountEdit.value<grids.totalPage(id))
      {
        grids.nextPage(id);
        grids.objects[id].pageCountEdit.value++;
      }
    }
   
    this.objects[id].tableControl.rows[0].cells[5].onmouseup = function()
    {
      grids.objects[id].tableControl.rows[0].cells[5].style.borderStyle = "outset";
      grids.objects[id].edits[id+grids.objects[id].actRow+',1'].focus();
    }
    this.objects[id].tableControl.rows[0].cells[6].onmousedown = function()
    {
      grids.cleanSelected(id);	
      grids.objects[id].tableControl.rows[0].cells[6].style.borderStyle = "inset";
      grids.lastPage(id);
      grids.objects[id].pageCountEdit.value = grids.totalPage(id);
    }
    this.objects[id].tableControl.rows[0].cells[6].onmouseup = function()
    {
      grids.objects[id].tableControl.rows[0].cells[6].style.borderStyle = "outset";
      grids.setFocus(id);
    }
  },
  
   deselectedRow : function(id, row)
   {
   	 if (this.objects[id].loadBGImg) 
	 {
	 	grids.setImgRow(id, row, "");
	 }
   	 if(row % 2)
	 {
	   this.setColorRow(id,row,this.objects[id].colorEvenRow);	
	 }
     else
	 {
	 	this.setColorRow(id,row,this.objects[id].colorOddRow);
	 }
     this.setColorTextRow(id,row,this.objects[id].fontColorCells);
   },
   

   deselectedAllRow : function(id)
   {
	 	var ts = this.objects[id].dataStruct.data[0].length;
		var tp = this.objects[id].dataStruct.pageSize;
		for(ix=0;ix<ts; ix++)
        {	
			this.objects[id].dataStruct.isRegSelected[ix]=false;
		}
		if(ts<tp)
		  for(ix=1;ix<=tp; ix++)
          {
			this.deselectedRow(id,ix);
		  }	
		this.showData(id);
   },
   
   cleanSelected : function(id)
   {
   	 var tp = this.objects[id].dataStruct.pageSize;
   	 for(var ix=1; ix<=tp; ix++)
     {	
		this.deselectedRow(id,ix);
	 }
   },	
   
  
  deselectedCell : function(id, row, col)
  {
    grids.setColorCell(id,row,col,grids.objects[id].colorCells);
    grids.setColorTextCell(id,row,col,grids.objects[id].fontColorCells);
  },
  
  deleteRecordStruct : function(id,index)
  {
    this.itemIndex=index;
    for(ix=0; ix < this.objects[id].dataStruct.data.length; ix++)
    {
      this.objects[id].dataStruct.data[ix].splice(index,1);
    }
    if (this.dataRowCount(id) != 0)
    	grids.objects[id].dataStruct.isRegSelected[index] = false;
	for(ix=1; ix < this.objects[id].table.rows.length; ix++)
    {	
	  this.deselectedRow(id,ix);
	}
  },
  
  deleteRow : function(id,row)
  {
    for(i=row; i < this.objects[id].table.rows.length-1; i++)
    {
      for(j=0; j < this.objects[id].table.rows[i].cells.length; j++)
      {
        this.objects[id].table.rows[i].cells[j].innerHTML = this.objects[id].table.rows[i+1].cells[j].innerHTML;
      }
    }
    this.objects[id].table.deleteRow(this.objects[id].table.rows.length-1);
  },
 
  deleteCol : function(id,col)
  {
    var ultC = this.objects[id].table.rows[0].cells.length-1;
    var ultR = this.objects[id].table.rows.length;
    if(col > 0 && col < ultC)
    {
      var nameEdit1="";
      var nameEdit2="";
      for(i=0; i < ultR; i++)
      {
        if (col < ultC)
        {
          for(j=col; j<ultC; j++)
          {
            nameEdit1 = id+i+","+j;
            nameEdit2 = id+i+","+(j+1);
            if(i > 0)
            {
              this.objects[id].edits[nameEdit1].value = this.objects[id].edits[nameEdit2].value;
            }
            else
            {
              this.objects[id].table.rows[i].cells[j].innerHTML = this.objects[id].table.rows[i].cells[j+1].innerHTML;
            }
          }
        }
        this.objects[id].table.rows[i].deleteCell(ultC);
      }
    }
  },
 
  dataRowCount : function(id)
  {
    return this.objects[id].dataStruct.data[0].length;
  },
  
  fieldAjustEnable : function(id)
  {
    for(i=1;i<this.objects[id].table.rows[0].cells.length;i++)
    {
      this.autoSizeField(id,i);	
    }  
  },
  
  fieldAjustDisable : function(id)
  {
    this.objects[id].table.rows[0].cells[field].tableTitle.rows[0].cells[2].ondblclick = function(){}
  },
  
  firstPage : function(id)
  {
    this.objects[id].dataStruct.itemPage=0;
    this.objects[id].dataStructScroll=0;
    this.showData(id);
  },
  
  getXML : function(id)
  {
  	xmlData ='<?xml version = "1.0" encoding = "ISO-8859-1"?>'
  	xmlData += '<regs>';
  	for(var i=0; i<this.objects[id].dataStruct.data[0].length; i++)//filas
  	{
  		xmlData += '<reg>'
  		for (var j=0; j<this.objects[id].dataStruct.fields.length; j++)//columnas
  		{
  			xmlData += '<'+this.objects[id].dataStruct.fields[j]+'>';
  			xmlData += this.objects[id].dataStruct.data[j][i];
  			xmlData += '</'+this.objects[id].dataStruct.fields[j]+'>';
  		}
  		xmlData += '</reg>'
  	}
  	xmlData += '</regs>';
  	return xmlData;	
  },
  
  getRecord : function(id, row) {
	  var nameRecord = id+'RecordRow'+row;
	  this.xmlStructObj.createRecord(nameRecord,nameRecord);
	  var tipos = this.objects[id].typeArray;
	  var arrData = this.getDataRowStruct(id,row);
	  var totalColumn = arrData.length;	
	  var i=0;
	  var nameVar='';
	  var valor='';
	  for (i=0; i<totalColumn; i++) { 	
		  nameVar =	'val'+row+','+i;
		  this.xmlStructObj.createVar(nameVar,'',tipos[i],arrData[i]);
		  valor = this.xmlStructObj.getVar(nameVar);
		  this.xmlStructObj.addFieldToRecord(nameRecord,valor);
	  } 
	  var s = this.xmlStructObj.getRecord(nameRecord); 
	  return s;
  },
  
  getRecordList : function(id) {
	  var fila=0;
	  var nameRecordList = id+'RecordList';
	  this.xmlStructObj.createRecordList(nameRecordList);
	  var totalRowsGrid = this.getTotalRows(id);
	  var tipos = this.objects[id].typeArray;
	  for (fila = 0; fila < totalRowsGrid; fila++) {
		  this.xmlStructObj.addRecordToList(nameRecordList,this.getRecord(id,fila));			
	  }	
	  return this.xmlStructObj.getRecordList(nameRecordList);
  },
  
  getXMLStruct : function(id, name, arrCol) {
	  var reg = "";
      checkExp = function(str) {
    	  for(var c=0; c < str.length; c++) {
    		  if(str.charAt(c) != ' ' && str.charAt(c) != '#')
    			  return true;
    	  }
    	  return false;
      };
      
      buildRecord = function(row) {
    	  for (var j=0; j<grids.objects[id].dataStruct.fields.length; j++) {
		  if(grids.objects[id].dataStruct.data[j][row]) {	  
			  if(reg=="")	
				  reg+= grids.objects[id].dataStruct.data[j][row];
			  else
				  reg+= "###"+grids.objects[id].dataStruct.data[j][row]; 
		  }
		  else 
			  if(reg=="")    
				  reg+= "";
			  else
				  reg+= "###";
    	  }  
      }
      
      try {
    	  var rlx = this.xmlStructObj.createRecordList(name);
    	  for(var i=0; i<this.objects[id].dataStruct.data[0].length; i++) {
    		  reg = "";  
    		  if(arrCol) {
    			  for(var gc=0; gc<arrCol.length; gc++) {
    				  if((this.objects[id].dataStruct.data[arrCol[gc]-1][i] != this.objects[id].auxDataStruct.data[arrCol[gc]-1][i])) {
    					  buildRecord(i);
    					  break;
    				  }  
    			  }
    		  }
    		  else
    			  buildRecord(i);
    		  if(checkExp(reg.trim()))
    			  rlx.addStr('reg'+i, reg);
    	  }
    	  return rlx;
      }
	  catch (e) {
		  alert(i+','+j+' '+e);  
		  return null;  
	  }
  },
  
  
  getTotalRows : function(id)
  {
    return this.objects[id].table.rows.length;
  },
  
  getTotalCols : function(id)
  {
    return this.objects[id].table.rows[0].cells.length;
  },
  
  getActualRecord : function(id)
  {
    return grids.objects[id].actualRecord;
  },

  getMouseXY : function(e)
  {
    var IE = document.all?true:false;
    if (IE)
    {
      grids.gridX = event.clientX ;
      grids.gridY = event.clientY ;
    }
    else
    {
      grids.gridX = e.screenX;
      grids.gridY = e.screenY;
    }
  },

  getObject : function(id)
  {
    return this.objects[id].container;
  },

  getDataCell : function(id,col)
  {
  	var row = this.getRowCell(id);
    var nameEdit = id+row+","+col;
    return this.objects[id].edits[nameEdit].value;
  },
  
  getDataCellRow : function(id,col,row)
  {
    var nameEdit = id+row+","+col;
    return this.objects[id].edits[nameEdit].value;
  },

  getDataRowStruct : function(id,row)
  {
    var i=0;
    var arr = new Array();
    for(j=0; j<this.objects[id].dataStruct.data.length; j++)
    {
      arr[j] =  this.objects[id].dataStruct.data[j][row];
    }
    return arr;
  },

  getDataRowVector : function(id,row)
  {
    var vector = new Array;
    var nameEdit = "";
    for(c = 1; c < this.objects[id].table.rows[row].cells.length; c++)
    {
      nameEdit = id+row+","+c;
      vector[vector.length] = this.objects[id].edits[nameEdit].value;
    }
    return vector;
  },

  getRow : function(objEdit)
  {
    return objEdit.row;
  },

  getCol : function(objEdit)
  {
    return objEdit.col;
  },

  getRowCell : function(id)
  {
    return grids.objects[id].actRow;
  },

  getColCell : function(id)
  {
    return grids.objects[id].actCol;
  },

  getDataStructObj : function(id)
  {
    return this.objects[id].dataStruct;
  },

  getSelectedRows : function(id)
  {
    var i=0;
    var arr = new Array();
    for(i=0; i<this.objects[id].dataStruct.data[0].length; i++)
    {
      if(grids.objects[id].dataStruct.isRegSelected[i])
      {
        arr[arr.length] =  i;
      }
    }
    return arr;
  },

  hideCol : function(id,col)
  {
    for(f = 0; f < this.objects[id].table.rows.length; f++)
    {
      this.objects[id].table.rows[f].cells[col].hideCol = true;
      this.objects[id].table.rows[f].cells[col].style.display = 'none';
    }
  },

  initializeEvents : function(id,nameEdit)
  {
    this.events[nameEdit]=new Object();
    this.events[nameEdit].onBlur = new Function("");
    this.events[nameEdit].onChange = new Function("");
    this.events[nameEdit].onClick = new Function("");
    this.events[nameEdit].onDblClick = new Function("");
    this.events[nameEdit].onFocus = new Function("");
    this.events[nameEdit].onKeyDown = new Function("");
    this.events[nameEdit].onKeyPress = new Function("");
    this.events[nameEdit].onKeyUp = new Function("");
    this.events[nameEdit].onMouseDown = new Function("");
    this.events[nameEdit].onMouseMove = new Function("");
    this.events[nameEdit].onMouseOut = new Function("");
    this.events[nameEdit].onMouseOver = new Function("");
    this.events[nameEdit].onMouseUp = new Function("");
    grids.objects[id].edits[nameEdit].onblur = function(e)
    {
      grids.objects[id].antCol = this.col;
      grids.objects[id].antRow = this.row;
      grids.events[nameEdit].onBlur();
    }
    grids.objects[id].edits[nameEdit].onchange = function(e)
    {
      grids.events[nameEdit].onChange();
    }
    grids.objects[id].edits[nameEdit].onclick = function(e)
    {
      grids.objects[id].dataStruct.priorItemPage = grids.objects[id].dataStruct.itemPage;
      grids.objects[id].dataStruct.offsetPage = this.row-1;
      var position = grids.objects[id].dataStruct.offsetPage +
      grids.objects[id].dataStruct.itemPage *
      grids.objects[id].dataStruct.pageSize +
      grids.objects[id].dataStructScroll;
      if (grids.objects[id].multiSelect==grids.CLICK_EVENT)
      {
        if(grids.objects[id].dataStruct.isRegSelected[position])
        {
          grids.objects[id].dataStruct.isRegSelected[position] = false;
          grids.deselectedRow(id, this.row);
        }
        else
        {
          if(grids.objects[id].singleSelection)
          {
            var t = grids.objects[id].dataStruct.isRegSelected.length;
            for(i=0; i<t; i++)
            {
              grids.objects[id].dataStruct.isRegSelected[i] = false;
            }
            for(i=1; i<=grids.objects[id].dataStruct.pageSize; i++)
            {
              grids.deselectedRow(id, i);
            }
          }
          grids.selectedBar(id, grids.getRowCell(id));
          grids.objects[id].dataStruct.isRegSelected[position] = true;
        }
      }
      grids.events[nameEdit].onClick();
    }
    grids.objects[id].edits[nameEdit].ondblclick = function(e)
    {
      grids.objects[id].dataStruct.offsetPage = this.row-1;
      var position = grids.objects[id].dataStruct.offsetPage +
      grids.objects[id].dataStruct.itemPage *
      grids.objects[id].dataStruct.pageSize +
      grids.objects[id].dataStructScroll;
      if(grids.objects[id].selectRow)
      {
        if(grids.objects[id].dataStruct.data[0].length > 0)
        grids.selectedBar(id,this.row);
      }
      if(grids.objects[id].selectCell==grids.DBLCLICK_EVENT)
      {
        grids.selectedCell(id,this.row , this.col);
        grids.deselectedCell(id,grids.objects[id].antRow,grids.objects[id].antCol);
      }
      if (grids.objects[id].multiSelect==grids.DBLCLICK_EVENT)
      {
        if(grids.objects[id].dataStruct.isRegSelected[position])
        {
          grids.objects[id].dataStruct.isRegSelected[position] = false;
          grids.deselectedRow(id, this.row);
        }
        else
        {
          if(grids.objects[id].singleSelection)
          {
            var t = grids.objects[id].dataStruct.isRegSelected.length;
            for(i=0; i<t; i++)
            {
              grids.objects[id].dataStruct.isRegSelected[i] = false;
            }
            for(i=1; i<=grids.objects[id].dataStruct.pageSize; i++)
            {
              grids.deselectedRow(id, i);
            }
          }
          grids.selectedBar(id, grids.getRowCell(id));
          grids.objects[id].dataStruct.isRegSelected[position] = true;
        }
      }
      grids.events[nameEdit].onDblClick();
    }
    grids.objects[id].edits[nameEdit].onfocus = function(e)
    {
      grids.cleanSelected(id);	
      grids.selectedRow(id,this.row);
      grids.objects[id].actRow = this.row;
      grids.objects[id].actCol = this.col;
      grids.events[id+this.row+','+this.col].onFocus();
    }
    grids.objects[id].edits[nameEdit].onmouseup = function(e)
    {
      grids.events[nameEdit].onMouseUp();
    }
    grids.objects[id].edits[nameEdit].onkeypress = function(e)
    {
      grids.events[nameEdit].onKeyPress();
    }
    grids.objects[id].edits[nameEdit].onkeydown = function(e)
    {
      grids.events[nameEdit].onKeyDown();
    }
    grids.objects[id].edits[nameEdit].onmousedown = function(e)
    {
      grids.events[nameEdit].onMouseDown();
    }
    grids.objects[id].edits[nameEdit].onmousemove = function(e)
    {
      grids.events[nameEdit].onMouseMove();
    }
    grids.objects[id].edits[nameEdit].onmouseout = function(e)
    {
      grids.events[nameEdit].onMouseOut();
    }
    grids.objects[id].edits[nameEdit].onmouseover = function(e)
    {
      grids.events[nameEdit].onMouseOver();
    }
  },

  loadDataStruct : function(id,dataStruct)
  {
	grids.clean(id);  
	grids.objects[id].auxDataStruct = new Object();
  	var ps = this.objects[id].dataStruct.pageSize;
    grids.objects[id].dataStruct.data = dataStruct.data.slice();    
    grids.objects[id].auxDataStruct.data = new Array(dataStruct.data.length);
    for(var f=0; f< dataStruct.data.length; f++)
      grids.objects[id].auxDataStruct.data[f] = dataStruct.data[f].slice();	
    grids.objects[id].dataStruct.fields = dataStruct.fields.slice();
  	grids.objects[id].dataStruct.pageSize = ps;
  	grids.objects[id].dataStruct.isRegSelected = [];
    for(i=0; i<dataStruct.data[0].length; i++)
    {
    	grids.objects[id].dataStruct.isRegSelected[i] = false;
    }
    grids.objects[id].pageCountLabel.nodeValue = this.totalPage(id);
    grids.sortEnable(id);
    grids.showData(id);
  },
 
  getTotalRecord : function(id)
  {
    return this.objects[id].dataStruct.data[0].length;  
  },

  loadDefaultProperties : function(id)
  {
    this.objects[id].rowTitleX = false;
    this.objects[id].rowTitleY = false;
    this.setPropertyValues(id,["outset","#cecece","verdana",150,"black","normal","center",10,"white","verdana",12,"black","normal","blue","white","normal","#ffffff","#f7f7f7"]);
  },

  lastPage : function(id)
  {
    this.objects[id].dataStruct.itemPage = this.totalPage(id)-1 ;
    this.objects[id].dataStructScroll=0;
    this.showData(id);
  },

  nextPage : function(id)
  {
    if(this.objects[id].dataStruct.itemPage < this.totalPage(id))
    {
      this.objects[id].dataStruct.itemPage++;
      this.objects[id].dataStructScroll=0;
      this.showData(id);
    }
  },

  nextValue : function(id)
  {
    row = this.objects[id].edits[id+"1,1"].dataRow+1;
    if(row <this.objects[id].dataStruct.data[0].length)
    {
      if(this.objects[id].dataStructScroll < this.objects[id].dataStruct.pageSize-1)
      {
        this.objects[id].dataStructScroll++;
      }
      else
      {
        this.nextPage(id);
      }
      this.showData(id);
    }
  },
  
  onEnter : function(id, funct)
  {
  	grids.objects[id].onEnter = new Function(funct);
  },
  
  onEscape : function(id, funct)
  {
  	grids.objects[id].onESC = new Function(funct);
  },

  onBlurCell : function(id,row, col,funct)
  {
    var nameEdit = id+row+","+col;
    this.events[nameEdit].onBlur = new Function(funct);
  },

  onChangeCell : function(id,row, col,funct)
  {
    var nameEdit = id+row+","+col;
    this.events[nameEdit].onChange = new Function(funct);
  },

  onClickCell : function(id,row,col,funct)
  {
    var nameEdit = id+row+","+col;
    grids.events[nameEdit].onClick = new Function(funct);
  },

  onClickCells : function(id,funct)
  {
  	var row=0;
	var col=0;
    for (row = 1; row < this.getTotalRows(id); row++) 
	{
		for (col = 1; col < this.getTotalCols(id); col++) 
		{
			var nameEdit = id + row + "," + col;
			grids.events[nameEdit].onClick = new Function(funct);
		}
	}
  },

  onDblClickCell : function(id,row, col,funct)
  {
    var nameEdit = id+row+","+col;
    this.events[nameEdit].onDblClick = new Function(funct);
  },
  
  onDblClickCells : function(id,funct)
  {
  	var row=0;
	var col=0;
    for (row = 1; row < this.getTotalRows(id); row++) 
	{
		for (col = 1; col < this.getTotalCols(id); col++) 
		{
			var nameEdit = id + row + "," + col;
			grids.events[nameEdit].onDblClick = new Function(funct);
		}
	}
  },

  onFocusCell : function(id,row, col,funct)
  {
    var nameEdit = id+row+","+col;
    this.events[nameEdit].onFocus = new Function(funct);
  },

  onKeyDownCell : function(id,row, col,funct)
  {
    var nameEdit = id+row+","+col;
    this.events[nameEdit].onKeyDown = new Function(funct);
  },

  onKeyPressCell : function(id,row, col,funct)
  {
    var nameEdit = id+row+","+col;
    this.events[nameEdit].onKeyPress = new Function(funct);
  },

  onKeyUpCell : function(id,row, col,funct)
  {
    var nameEdit = id+row+","+col;
    this.events[nameEdit].onKeyUp = new Function(funct);
  },

  onMouseDownCell : function(id,row, col,funct)
  {
    var nameEdit = id+row+","+col;
    this.events[nameEdit].onMouseDown = new Function(funct);
  },

  onMouseMoveCell : function(id,row, col,funct)
  {
    var nameEdit = id+row+","+col;
    this.events[nameEdit].onMouseMove = new Function(funct);
  },

  onMouseOutCell : function(id,row, col,funct)
  {
    var nameEdit = id+row+","+col;
    this.events[nameEdit].onMouseOut = new Function(funct);
  },

  onMouseOverCell : function(id,row, col,funct)
  {
    var nameEdit = id+row+","+col;
    this.events[nameEdit].onMouseOver = new Function(funct);
  },

  onMouseUpCell : function(id,row, col,funct)
  {
    var nameEdit = id+row+","+col;
    this.events[nameEdit].onMouseUp = new Function(funct);
  },

  order : function (id, field)
  {	
  	this.list.splice(0,this.list.length);
    var isnumericCol = false;
	for(t=0; t<this.objects[id].numericCol.length; t++)
	{
	  if(this.objects[id].numericCol[t]==field)
		isnumericCol = true;
	}
    var dataStructx = new Array;
    dataStructx.splice(0,dataStructx.length);
    var sel = new Array;
    if(this.objects[id].table.dblclick > 0)
    {
      this.objects[id].table.dblclick--;
      return;
    }
    var total = this.objects[id].dataStruct.data[0].length;
    for(i=0;i<this.objects[id].dataStruct.data.length;i++)
    {
      dataStructx[i] = new Array;
      for(j=0;j<total;j++)
      {
        dataStructx[i][j] = this.objects[id].dataStruct.data[i][j];
      }
    }
    for(i=0;i<dataStructx[0].length;i++)
    {
      this.keys[i] = i;
	  if(isnumericCol)  
        this.list[i] = parseInt(dataStructx[field][i]);
	  else
	  	this.list[i] = dataStructx[field][i].toUpperCase();
    }
    var medio = Math.round((this.list.length/2)-1);
    pivote = this.list[medio];
    primero = this.list[0];
    ultimo = this.list[this.list.length-1];
    
    if(((primero> pivote) && (primero<=ultimo)) ||
	   ((primero<pivote)  && (primero>=ultimo)))
    {
      pivote = primero;
    }
    else 
	  if(((ultimo>pivote) && (ultimo<primero)) ||
	  ((ultimo<pivote) &&  (ultimo>primero)))
      {
        pivote = ultimo;
      }
    this.quickSort(pivote, 0,this.list.length-1);
    
    if(field == this.objects[id].orderField)
    {
      this.objects[id].orderField = -1;
      for(i=this.list.length-1;i>=0;i--)
      {
        pos = this.keys[i];
        sel[i] = grids.objects[id].dataStruct.isRegSelected[pos];
        for(j=0;j<dataStructx.length;j++)
        {
          dataStructx[j][i] = this.objects[id].dataStruct.data[j][pos];
        }
      }
    }
    else 
    {
      this.objects[id].orderField = field;
      for(i=0;i<this.list.length;i++)
      {
        pos = this.keys[i];
        sel[this.list.length - i - 1] = grids.objects[id].dataStruct.isRegSelected[pos];
        for(j=0;j<dataStructx.length;j++)
        {
          dataStructx[j][this.list.length - i - 1] = this.objects[id].dataStruct.data[j][pos];
        }
      }
    }
    this.objects[id].dataStruct.data.splice(0, this.objects[id].dataStruct.data.length);
    this.objects[id].dataStruct.data = dataStructx.slice();
    grids.objects[id].dataStruct.isRegSelected = sel;
    this.showData(id);
  },

  priorValue : function(id)
  {
    if(this.objects[id].dataStructScroll > 0)
    {
      this.objects[id].dataStructScroll--;
    }
    else
    {
      if(this.objects[id].dataStruct.itemPage > 0)
      {
        this.objects[id].dataStructScroll--;
        this.objects[id].dataStructScroll = this.objects[id].dataStruct.pageSize-1;
        this.objects[id].dataStruct.itemPage--;
      }
    }
    this.showData(id);
  },

  priorPage : function(id)
  {
    if(this.objects[id].dataStruct.itemPage > 0)
    {
      this.objects[id].dataStruct.itemPage--;
      this.objects[id].dataStructScroll=0;
      this.showData(id);
    }
  },


  setFocus : function(id)
  {
    grids.setFocusCell(id,1,1);  
  },

  setFocusCell : function(id, f, c)
  {
    var ne = id + f + ',' + c;        
    grids.objects[id].edits[ne].focus();
    grids.selectedRow(id,f);
    grids.objects[id].focusCell = c;
    grids.objects[id].focusRow = f;
    grids.objects[id].actRow = f;
    grids.objects[id].actCol = c;
  },
   
  setTitleColumn : function(id, col, titleCol)
  {
     this.objects[id].dataStruct.fields[col] = titleCol;
     this.objects[id].table.rows[0].cells[col].tableTitle.rows[0].cells[2].innerHTML = titleCol;
  },  
 
  getTitleColumn : function(id, col)
  {
	  return this.objects[id].table.rows[0].cells[col].textContent
  },

  quickSort : function(pivote,izq, der)
  {
    i = izq;
    j = der;
    do
    {
      while(this.list[i]<pivote)
        i++;
      while(this.list[j]>pivote)
        j--;
      if(i<=j)
      {
        var aux = this.list[i];
        var auxKey = this.keys[i];
        this.list[i] = this.list[j];
        this.keys[i] = this.keys[j];
        this.list[j] = aux;
        this.keys[j] = auxKey;
        i++;
        j--;
      }
    }while(i<=j)
    if(izq < j)
      this.quickSort(this.list[Math.round((izq+der)/2)],izq,j);
    if(i < der)
      this.quickSort(this.list[Math.round((izq+der)/2)],i,der);
  },

  resizeCol : function(id, col, incr)
  {
    var nameEdit = "";
    var str1 = "";
    var str2 = "";
    var len = 0;
    for(f = 1; f < this.objects[id].table.rows.length; f++)
    {
      nameEdit = id+f+","+col;
      if(grids.objects[id].edits[nameEdit].widthCell+incr > 0)
      {
        grids.objects[id].edits[nameEdit].widthCell+=incr;
        this.objects[id].table.rows[f].cells[col].style.width = grids.objects[id].edits[nameEdit].widthCell+"px";
      }
    }
  },

  setTypeArray : function(id, typeArr)
  {
  	this.objects[id].typeArray=typeArr;
  },

  saveData : function(id,nameEdit)
  {
	this.objects[id].autoSaveFunct = function(nameEdit) 
    {
      if(!grids.objects[id].autoEnable)
        return;
      if(grids.objects[id].edits[nameEdit]==undefined)
        return;  
      row = grids.objects[id].edits[nameEdit].dataRow;
      pos = grids.objects[id].edits[nameEdit].row;
      var tc = grids.getTotalCols(id);
      if(row < grids.objects[id].dataStruct.data[0].length)
      {
        for(i=1;i<=grids.objects[id].dataStruct.data.length;i++)
        {
          if(i < tc)
            grids.objects[id].dataStruct.data[i-1][row] = grids.objects[id].edits[id+pos+","+i].value.trim();
        }
      }
      else
      {
        pos = pos + grids.objects[id].dataStruct.data[0].length - row;
        for(k=grids.objects[id].dataStruct.data[0].length;k<=row;k++)
        {
          for(i=1;i<=grids.objects[id].dataStruct.data.length;i++)
          {
            grids.objects[id].dataStruct.data[i-1][k] = " ";
            if(grids.objects[id].edits[id+pos+","+i]!=undefined)
              grids.objects[id].dataStruct.data[i-1][row] = grids.objects[id].edits[id+pos+","+i].value.trim();
          }
          pos++; 
        }
      }
    }
  },

  setNumericCol : function(id, arrNumericCol)
  {
 	this.objects[id].numericCol= arrNumericCol;
  },

  setXMLStruct : function(id, obj)
  {
 	this.xmlStructObj = obj;
  },
  
  dataColumnExist : function(id, dat, col)
  {
  	var dataColumnObj = new Object();
  	dataColumnObj.exist = false; 
  	dataColumnObj.column = col; 
  	dataColumnObj.dat = dat; 
  	dataColumnObj.row = -1;
  	dataColumnObj.record = new Array();
  	
  	for(var row = 0; row < grids.getTotalRecord(id); row++)
    {	
      if(this.objects[id].dataStruct.data[(col-1)][row]==dat)
      {
      	 dataColumnObj.row   = row + 1;
      	 dataColumnObj.exist = true;
      	 dataColumnObj.record = grids.getDataRowStruct(id,row);
         break;
      }
    };
    return dataColumnObj;
  },
  
  dataRowExist : function(id, arrayData, columnCheck)
  {
  	if(arrayData.length != this.objects[id].dataStruct.data.length){
  	  return false;
  	}
  	var exist = true;	
  	for(var row = 0; row < grids.getTotalRecord(id); row++){
  	  exist = true;	
  	  if(columnCheck==undefined)
  	  {  
  	    for(var col = 0; col < arrayData.length; col++){
  	      if(this.objects[id].dataStruct.data[col][row]!=arrayData[col])
          {	
  	  	    exist = false;
  	      };
  	    };
  	  }
  	  else
  	  {
  	  	for(var col = 0; col < columnCheck.length; col++){
  	      if(this.objects[id].dataStruct.data[columnCheck[col]][row]!=arrayData[columnCheck[col]])
          {	
  	  	    exist = false;
  	      };
  	    };
  	  }
  	};
  	return exist;
  },
  
  enableRepeatAddRow : function(id)   
  {
    grids.objects[id].noRepeatRow = false;
  },

  showData : function(id)
  {
    var nameEdit = "";
    this.objects[id].dataStruct.offsetPage = 0;
    var totalCol = this.objects[id].table.rows[0].cells.length;
    var totalRow = this.objects[id].table.rows.length;
    var pos = this.objects[id].dataStruct.itemPage * this.objects[id].dataStruct.pageSize;
    for(row = 1; row < totalRow; row++)
    for(col = 1; col < totalCol; col++)
    {
      nameEdit = id+row+","+col;
      this.objects[id].dataStruct.offsetPage = row-1;
      var position = this.objects[id].dataStruct.offsetPage +
      this.objects[id].dataStruct.itemPage *
      this.objects[id].dataStruct.pageSize +
      this.objects[id].dataStructScroll;
      this.objects[id].edits[nameEdit].dataRow = position;
      this.objects[id].edits[nameEdit].dataCol = col-1;
      if((position < this.dataRowCount(id)) && (position>=0))
      {	
        this.objects[id].edits[nameEdit].value = this.objects[id].dataStruct.data[(col-1)][position];
	    if(this.objects[id].dataStruct.isRegSelected[position])
        {
          this.selectedBar(id, row);
        }
        else
        {
          this.deselectedRow(id, row);
        }
      }
      else
      {
        this.objects[id].edits[nameEdit].value = "";
      }
    }
    if(this.objects[id].loadBGImg)
    {
	  this.setObjAttrib(id, this.attObj, this.enviorement);
    }
  },

  sortEnable : function(id)
  {
    for(i=1;i<this.objects[id].table.rows[0].cells.length;i++)
      this.sortByField(id,i);
  },

  sortDisable : function(id)
  {
    this.objects[id].table.rows[0].cells[field].tableTitle.rows[0].cells[2].onclick = function(){}
  },

  setBgBarImg : function(id, barImg)
  {
    if(this.objects[id].rowTitleX)
    {
      for(c = 0; c < this.objects[id].table.rows[0].cells.length; c++)
      {
        this.objects[id].table.rows[0].cells[c].style.backgroundImage = "url(" + this.bgImgPath + barImg + ")";
      }
      for(f = 1; f < this.objects[id].table.rows.length; f++)
      {
        this.objects[id].table.rows[f].cells[0].style.backgroundImage = "url(" + this.bgImgPath + barImg + ")";
      }
    }
    for(f = 0; f < this.objects[id].maxControl; f++)
    {
      this.objects[id].tableControl.rows[0].cells[f].style.backgroundImage = "url(" + this.bgImgPath + barImg + ")";
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

  setImgEdit : function(id, imgEdit)
  {
    this.objects[id].imgEdit = imgEdit;
  },


  setPropertyValues : function(id,prty)
  {
    for(i=0; i<prty.length; i++)
    {
      switch(i)
      {
        case 0 : { this.objects[id].barTitleStyle 		= prty[i]; break;}
        case 1 : { this.objects[id].colorBarTitle 		= prty[i]; break;}
        case 2 : { this.objects[id].fontFamilyBarTitle  = prty[i]; break;}
        case 3 : { this.objects[id].fontSizeBarTitle 	= prty[i]; break;}
        case 4 : { this.objects[id].fontColorBarTitle 	= prty[i]; break;}
        case 5 : { this.objects[id].fontStyleBarTitle 	= prty[i]; break;}
        case 6 : { this.objects[id].textAlignBarTitle 	= prty[i]; break;}
        case 7 : { this.objects[id].columnWidth 		= prty[i]; break;}
        case 8 : { this.objects[id].colorCells 		    = prty[i]; break;}
        case 9 : { this.objects[id].fontFamilyCells 	= prty[i]; break;}
        case 10 :{ this.objects[id].fontSizeCells 		= prty[i]; break;}
        case 11 :{ this.objects[id].fontColorCells 	= prty[i]; break;}
        case 12 :{ this.objects[id].fontStyleCell 		= prty[i]; break;}
        case 13 :{ this.objects[id].colorBarSelect 	= prty[i]; break;}
        case 14 :{ this.objects[id].colorTextSelected 	= prty[i]; break;}
        case 15 :{ this.objects[id].fontStyleCell 		= prty[i]; break;}
        case 16 :{ this.objects[id].colorEvenRow 		= prty[i]; break;}
        case 17 :{ this.objects[id].colorOddRow 		= prty[i]; break;}
      }
    }
  },

  setProperties : function(id)
  {
    this.setColorBarTitle(id, this.objects[id].colorBarTitle);
    this.setFontTitle(id,this.objects[id].fontFamilyBarTitle,this.objects[id].fontSizeBarTitle,this.objects[id].fontStyleBarTitle,this.objects[id].fontColorBarTitle);
    this.alignTextTitle(id,this.objects[id].textAlignBarTitle);
  },

  setPropertyAllCell : function(id)
  {
    var nameEdit = "";
    for (row = 1; row < this.objects[id].table.rows.length; row++) 
    {
  	  for (col = 1; col < this.objects[id].table.rows[0].cells.length; col++) 
	  {
  		nameEdit = id + row + "," + col;
  		if (row % 2) 
		{
  			this.objects[id].edits[nameEdit].style.backgroundColor = this.objects[id].colorEvenRow;
  		}
  		else 
		{
  			this.objects[id].edits[nameEdit].style.backgroundColor = this.objects[id].colorOddRow;
  		}
  		this.objects[id].edits[nameEdit].style.color = this.objects[id].fontColorCells;
  		this.objects[id].edits[nameEdit].style.fontFamily = this.objects[id].fontFamilyCells;
  		this.objects[id].edits[nameEdit].style.fontStyle = this.objects[id].fontStyleCell;
  		this.objects[id].edits[nameEdit].style.fontSize = this.objects[id].fontSizeCells + "px";
  		this.objects[id].edits[nameEdit].style.size = this.objects[id].columnWidth + "px";
  		this.objects[id].edits[nameEdit].style.borderWidth='0px';
  	  }
    }	
  },

  selectedRow : function(id, row)
  {
  	grids.setColorTextRow(id, row, grids.objects[id].colorTextSelected);
    if (this.objects[id].loadBGImg)
    {
      grids.setImgRow(id, row, grids.objects[id].imgEdit);
    }
    else
    {
      grids.setColorRow(id, row, grids.objects[id].colorBarSelect);      
    }
  },

  selectedBar : function(id, row)
  {
	grids.setColorTextRow(id,row,grids.objects[id].colorTextSelected);
  	if (this.objects[id].loadBGImg)
    {
      grids.setImgRow(id, row, grids.objects[id].imgEdit);
    }
    else
    {
      grids.setColorRow(id,row,grids.objects[id].barSelected);
	}
  },

   setImgRow : function(id,row,bgImg)
   {
     var nameEdit = "";
     for(c = 1; c < this.objects[id].table.rows[row].cells.length; c++)
     {
       nameEdit = id+row+","+c;
	   if(bgImg=="")
	     this.objects[id].edits[nameEdit].style.backgroundImage = "none";
	   else 	 
	     this.objects[id].edits[nameEdit].style.backgroundImage = "url(" + this.bgImgPath + bgImg + ")";	 
     }
   },

  selectedCell : function(id, row, col)
  {
    grids.setColorCell(id,row,col,grids.objects[id].colorBarSelect);
    grids.setColorTextCell(id,row,col,grids.objects[id].colorTextSelected);
  },

  showCol : function(id,col)
  {
    var wc = this.objects[id].edits[id+"1,"+col].widthCell;
    for(f = 0; f < this.objects[id].table.rows.length; f++)
    { 
      this.objects[id].table.rows[f].cells[col].hideCol = false;
      this.objects[id].table.rows[f].cells[col].style.display = 'table-cell';
    };
  },

  setDataRowVector : function(id,row,vector)
  {
    var nameEdit = "";
    for(c = 1; c < this.objects[id].table.rows[row].cells.length; c++)
    {
      nameEdit = id+row+","+c;
      this.objects[id].edits[nameEdit].value = vector[c-1];
    }
    this.objects[id].dataStruct.offsetPage = row-1;
    var pos = this.objects[id].dataStruct.itemPage * this.objects[id].dataStruct.pageSize + this.objects[id].dataStruct.offsetPage;
    this.objects[id].dataStruct.data[pos] = vector;
  },
 
  setColorCell : function(id,row,col,bgColor)
  {
    var nameEdit = id+row+","+col;
    if(this.objects[id].edits[nameEdit]!=undefined)
      this.objects[id].edits[nameEdit].style.backgroundColor = bgColor;
  },

  setColorTextCell : function(id,row,col,bgColor)
  {
    var nameEdit = id+row+","+col;
    this.objects[id].edits[nameEdit].style.color = bgColor;
  },

  setColorRow : function(id,row,bgColor)
  {
    var nameEdit = "";
    for(c = 1; c < this.objects[id].table.rows[row].cells.length; c++)
    {
      nameEdit = id+row+","+c;
      this.objects[id].edits[nameEdit].style.backgroundColor = bgColor;
    }
  },

  setColorTextRow : function(id,row,textColor)
  {
    var nameEdit = "";
    for(c = 1; c < this.objects[id].table.rows[row].cells.length; c++)
    {
      nameEdit = id+row+","+c;
      this.objects[id].edits[nameEdit].style.color = textColor;
    }
  },

  setWidthGrid : function(id, width)
  {
  	this.objects[id].divData.style.width = width + 'px';	
  },  

  setSizeCol : function(id, col, width)
  {
    var nameEdit = "";
    for(f = 1; f < this.objects[id].table.rows.length; f++)
    {	
      nameEdit = id+f+","+col;
      
      	this.objects[id].edits[nameEdit].widthCell = width;
        this.objects[id].table.rows[f].cells[col].style.width = width+"px";
     
      this.objects[id].edits[nameEdit].style.width = width + 'px';      
    }
    this.objects[id].table.rows[0].cells[col].style.width = grids.objects[id].edits[nameEdit].widthCell+"px";
    if (!this.objects[id].dataCol[col].sts)
    {
      this.objects[id].dataCol[col].sts=true;
      this.objects[id].dataCol[col].width = width;	
    }
    
  },

  setFontCell : function(id,row,col,font,size,style,color)
  {
    var nameEdit = id+row+","+col;
    this.objects[id].edits[nameEdit].style.fontFamily = font;
    this.objects[id].edits[nameEdit].style.fontSize = size+"px";
    this.objects[id].edits[nameEdit].style.fontStyle = style;
    this.objects[id].edits[nameEdit].style.color = color;
  },

  setFontRow : function(id,row,font,size,style,color)
  {
    var nameEdit = "";
    for(c = 1; c < this.objects[id].table.rows[row].cells.length; c++)
    {
      nameEdit = id+row+","+c;
      this.objects[id].edits[nameEdit].style.fontFamily = font;
      this.objects[id].edits[nameEdit].style.fontSize = size+"px";
      this.objects[id].edits[nameEdit].style.fontStyle = style;
      this.objects[id].edits[nameEdit].style.color = color;
    }
  },

  setFontTableControl : function(id,font,size,style,color)
  {
    this.objects[id].tableControl.style.fontFamily = font;
    this.objects[id].tableControl.style.fontSize = size+"px";
    this.objects[id].tableControl.style.fontStyle = style;
    this.objects[id].tableControl.style.color = color;
  },

  setColorBarTitle : function(id, color)
  {
    if(this.objects[id].rowTitleX)
    {
      for(c = 0; c < this.objects[id].table.rows[0].cells.length; c++)
      {
        this.objects[id].table.rows[0].cells[c].style.backgroundColor = color;
      }
      for(f = 1; f < this.objects[id].table.rows.length; f++)
      {
        this.objects[id].table.rows[f].cells[0].style.backgroundColor = color;
      }
    }
    for(f = 0; f < this.objects[id].maxControl; f++)
    {
      this.objects[id].tableControl.rows[0].cells[f].style.backgroundColor = color;
    }
  },
  setFontTitleWeight : function(id, fw)
  {
    if(this.objects[id].rowTitleX)
    {
      this.objects[id].table.rows[0].style.fontWeight = fw;
    }
  },

  setFontTitle : function(id,font,size,style,color)
  {
    if(this.objects[id].rowTitleX)
    {
      var lg = this.objects[id].table.rows[0].cells.length;
      var c=0;
      for(c = 1; c < lg; c++)
      {
        this.objects[id].table.rows[0].cells[c].tableTitle.rows[0].cells[2].style.fontFamily = font;
        this.objects[id].table.rows[0].cells[c].tableTitle.rows[0].cells[2].style.fontSize = size+"px";
        this.objects[id].table.rows[0].cells[c].tableTitle.rows[0].cells[2].style.fontStyle = style;
        this.objects[id].table.rows[0].cells[c].tableTitle.rows[0].cells[2].style.color = color;
      }
    }
    if(this.objects[id].rowTitleY)
    {
      var f=0;
      for(f = 0; f < this.objects[id].table.rows.length; f++)
      {
        this.objects[id].table.rows[f].cells[0].tableTitle.rows[0].cells[2].style.fontFamily = font;
        this.objects[id].table.rows[f].cells[0].tableTitle.rows[0].cells[2].style.fontSize = size+"px";
        this.objects[id].table.rows[f].cells[0].tableTitle.rows[0].cells[2].style.fontStyle = style;
        this.objects[id].table.rows[f].cells[0].tableTitle.rows[0].cells[2].style.color = color;
      }
    }
  },

  setDataCell : function(id,row,col,data)
  {
    if(row <= this.objects[id].dataStruct.pageSize)
    {
      var nameEdit = id+row+","+col;
      this.objects[id].edits[nameEdit].value = data;
    }
    this.objects[id].dataStruct.offsetPage = row-1;
    var pos = this.objects[id].dataStruct.itemPage * this.objects[id].dataStruct.pageSize + this.objects[id].dataStruct.offsetPage;
    this.objects[id].dataStruct.data[col-1][pos] = data;
  },

  setReadOnlyCell : function(id,row,col)
  {
    var nameEdit = id+row+","+col;
    this.objects[id].edits[nameEdit].readOnly = true;
  },

  setReadOnlyToAll : function(id)
  {
    for(row=1;row<this.objects[id].totalRows;row++)
      for(col=1;col<this.objects[id].totalCols;col++)
      {
        var nameEdit = id+row+","+col;
        this.objects[id].edits[nameEdit].readOnly = true;
      }
  },

  setEditModeToAll : function(id)
  {
    for(row=1;row<this.objects[id].totalRows;row++)
      for(col=1;col<this.objects[id].totalCols;col++)
      {
        var nameEdit = id+row+","+col;
        this.objects[id].edits[nameEdit].readOnly = false;
      }
  },

  setReadOnlyCol : function(id, col)
  {
    for(row=1;row<this.objects[id].totalRows;row++)
    {
      var nameEdit = id+row+","+col;
      this.objects[id].edits[nameEdit].readOnly = true;
    }
  },

  setReadOnlyCols : function(id, colArr)
  {
    for(c=0; c<colArr.length; c++)
    {
      this.setReadOnlyCol(id,colArr[c]);
    }
  },

   setExternalMargin : function(id,value)
   {
		 this.objects[id].container.style.padding= value+'px'; 
   },  	 	 

  setEditCell : function(id,row,col)
  {
    var nameEdit = id+row+","+col;
    this.objects[id].edits[nameEdit].readOnly = false;
  },

  setEditCol : function(id,col)
  {
  	for(var i=1; i<this.objects[id].table.rows.length; i++)
    {
      var nameEdit = id+i+","+col;
      this.objects[id].edits[nameEdit].readOnly = false;
    }
  },
  
  setReadOnlyRow : function(id,row)
  {
    var nameEdit = "";
    for(c = 1; c < this.objects[id].table.rows[row].cells.length; c++)
    {
      nameEdit = id+row+","+c;
      this.objects[id].edits[nameEdit].readOnly = true;
    }
  },

  setEditRow : function(id,row)
  {
    var nameEdit = "";
    for(c = 1; c < this.objects[id].table.rows[row].cells.length; c++)
    {
      nameEdit = id+row+","+c;
      this.objects[id].edits[nameEdit].readOnly = false;
    }
  },

  setFixColRow : function(id,fixCol,fixRow)
  {
    this.objects[id].rowTitleX = fixRow;
    this.objects[id].rowTitleY = fixCol;
    for(c = 1; c < this.objects[id].table.rows[0].cells.length; c++)
    {
      if (this.objects[id].rowTitleX)
      {
        this.objects[id].table.rows[0].cells[c].style.borderStyle="outset";
        this.objects[id].table.rows[0].cells[c].style.borderWidth="0px";	
      }
      else
      {
        this.objects[id].table.rows[0].cells[c].style.borderWidth="0px";
        this.objects[id].table.rows[0].cells[c].style.width='0px'
      }	
      
    }
    for(f = 0; f < this.objects[id].table.rows.length; f++)
    {
      if (this.objects[id].rowTitleY)
      {
      	this.objects[id].table.rows[f].cells[0].style.borderStyle = "outset";
        this.objects[id].table.rows[f].cells[0].style.borderWidth = "0px";
      }
      else
      {
        this.objects[id].table.rows[f].cells[0].style.borderWidth = "0px";
        this.objects[id].table.rows[f].cells[0].style.width='0px';
      }	
      
    }
  },

  setPosition : function(id,x,y)
  {
    this.objects[id].container.style.position = "absolute";
    this.objects[id].container.style.left = x+"px";
    this.objects[id].container.style.top = y+"px";
  },

  setObjAttrib : function(id,objAttr,env)
  {
  	this.attObj = objAttr;
    this.enviorement = env;
	this.objects[id].loadBGImg = objAttr.getLoadBGImg(); 
    this.objects[id].fontFamilyBarTitle = objAttr.Font.head[env];
    this.objects[id].barSelected = objAttr.Color.barSelected[env];
    this.objects[id].fontSizeBarTitle = objAttr.Size.headFont[env];
    this.objects[id].fontStyleBarTitle = objAttr.Font.styleHead[env];
    this.objects[id].fontColorBarTitle = objAttr.Color.textTitle[env];
    this.objects[id].barTitleStyle = objAttr.Border.styleHead[env];
    this.objects[id].colorBarTitle = objAttr.Color.bgBarraTitle[env];
    this.objects[id].colorCells = objAttr.Color.bgCells[env];
    this.objects[id].fontFamilyCells = objAttr.Font.cells[env];
    this.objects[id].fontSizeCells = objAttr.Size.cellFont[env];
    this.objects[id].fontColorCells = objAttr.Color.textCells[env];
    this.objects[id].fontStyleCell = objAttr.Font.styleCells[env];
    this.objects[id].colorBarSelect = objAttr.Color.bgSelected[env];
    this.objects[id].colorTextSelected = objAttr.Color.textSelected[env];
    this.objects[id].fontStyleCell = objAttr.Font.styleCells[env];
    this.objects[id].colorEvenRow = objAttr.Color.evenRow[env];
    this.objects[id].colorOddRow = objAttr.Color.oddRow[env];
    this.setFontTableControl(id, objAttr.Font.head[env],objAttr.Size.headFont[env],objAttr.Font.styleHead[env],objAttr.Color.textTitle[env]);
    this.setPropertyAllCell(id);
    this.setProperties(id);
    this.setFontTitleWeight(id,objAttr.Font.weightHead[env]);
    if(this.objects[id].loadBGImg)
    {
      this.setBgBarImg(id, objAttr.BgImg.barTitle[env]);
      this.setImgEdit(id, objAttr.BgImg.bgSelected[env]);
    }
  },

  setObjAttribToAll : function(objAttrib,env)
  {
    for(i=0;i<this.ids.length;i++)
    {
      this.setObjAttrib(this.ids[i],attrib,env);
    }
  },

  setVisible : function(id, s)
  {
    if (s == true)
    {
      this.objects[id].table.style.visibility = "visible"
      this.objects[id].tableControl.style.visibility = "visible"
    }
    else
    {
      this.objects[id].table.style.visibility = "hidden";
      this.objects[id].tableControl.style.visibility = "hidden"
    }
  },

  sortByField : function(id,field)
  {
  	this.objects[id].table.rows[0].cells[field].tableTitle.rows[0].cells[2].onclick = function()
    {
      setTimeout('grids.order("'+id+'",'+(field-1)+')',300);
    }
  },

  sortDisable : function(id)
  {
    this.objects[id].table.rows[0].cells[field].tableTitle.rows[0].cells[2].onclick = function(){}
  },

  setSingleSelection : function(id, sts)
  {
    this.objects[id].singleSelection = sts;
  },

  quickSort : function(pivote,izq, der)
  {
    i = izq;
    j = der;
    do
    {
      while(this.list[i]<pivote)
      i++;
      while(this.list[j]>pivote)
      j--;
      if(i<=j)
      {
        var aux = this.list[i];
        var auxKey = this.keys[i];
        this.list[i] = this.list[j];
        this.keys[i] = this.keys[j];
        this.list[j] = aux;
        this.keys[j] = auxKey;
        i++;
        j--;
      }
    }while(i<=j)
    if(izq < j)
      this.quickSort(this.list[Math.round((izq+der)/2)],izq,j);
    if(i < der)
      this.quickSort(this.list[Math.round((izq+der)/2)],i,der);
  },

  totalPage : function(id)
  {
    var ps = this.objects[id].dataStruct.pageSize;
    var tp = 0;
    var intTp =0;
    if(ps > 0)
    {
      tp = this.dataRowCount(id)/ps;
      intTp = parseInt(""+tp);
      if(tp - intTp != 0)
      {
        intTp++;
        tp = intTp;
      }
    }
    return tp;
  },

  wheel : function(event)
  {
    var delta = 0;
    if (!event) 
      event = window.event;
    if (event.wheelDelta) 
    { 
      delta = event.wheelDelta/120;

      if (window.opera)
        delta = -delta;
    } 
	
    else if (event.detail) 
    { 
      delta = -event.detail/3;
    }

    if (delta)
      grids.handle(delta);

    if (event.preventDefault)
      event.preventDefault();
    event.returnValue = false;
  },

  wheelEnable : function()
  {
   
    if (window.addEventListener)
      
      window.addEventListener('DOMMouseScroll', this.wheel, false);
      
    window.onmousewheel = document.onmousewheel = this.wheel;
  }
}

