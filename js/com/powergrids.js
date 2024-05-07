var powerGrids =
{
  objects : new Array,
  TYPE_INPUT_TEXT : 'text',
  TYPE_INPUT_CHECK : 'checkbox',
  TYPE_INPUT_BUTTON : 'button',
  TYPE_INPUT_FILE : 'inputFile',
  TYPE_INPUT_RADIO : 'radio',
  TYPE_INPUT_SUBMIT : 'submit',
  TYPE_TEXT_AREA : 'textArea',
  TYPE_SELECT : 'select',
  INPUT_ELEMENT : 'input',
  TEXT_AREA_ELEMENT : 'textArea',
  SELECT_ELEMENT : 'select',
  IMAGE_ELEMENT : 'img',
  mouseX : 0,
  mouseY : 0,
  ids : new Array,
  bgImgPath :"images/bg/",
  imgControl : ["buttonWhiteFirst.png","buttonWhitePrior.png","buttonWhitePlay.png","buttonWhiteLast.png"],
  loadAttrib : false,
addPropertyMethod : function(id)
{
  powerGrids.objects[id].addToBody  =  function()
  {
    powerGrids.addToBody(id);
  }
  powerGrids.objects[id].addRow  =  function()
  {
    powerGrids.addRow(id);
  }
  powerGrids.objects[id].addRecord  =  function(row1,col1,reg)
  {
    powerGrids.addRecord(id,row1,col1,reg);
  }
  powerGrids.objects[id].addTableControl  =  function(row,col,d)
  {
    powerGrids.addTableControl(id,row,col,d);
  }
  powerGrids.objects[id].addCol  =  function(row,addTableControl)
  {
    powerGrids.addCol(id,row,addTableControl);
  }
  powerGrids.objects[id].adjGrid  =  function(row1,col1,row2,col2,addTableControl)
  {
    powerGrids.adjGrid(id,row1,col1,row2,col2,addTableControl);
  }
  powerGrids.objects[id].activeAutoSizeCol  =  function(row1,col1,field,height)
  {
    powerGrids.activeAutoSizeCol(id,row1,col1,field,height);
  }
  powerGrids.objects[id].activeAutoSizeCols  =  function(row1,col1,height)
  {
    powerGrids.activeAutoSizeCols(id,row1,col1,height);
  }
  powerGrids.objects[id].activeOrderByColSubCell  =  function(row1,col1,col2)
  {
    powerGrids.activeOrderByColSubCell(id,row1,col1,col2);
  }
  powerGrids.objects[id].activeOrderByColsSubCell  =  function(row1,col1,arrCol)
  {
    powerGrids.activeOrderByColsSubCell(id,row1,col1,arrCol);
  }
  powerGrids.objects[id].addObjToSubCell  =  function(row1,col1,row2,col2,obj,addTableControl)
  {
    powerGrids.addObjToSubCell(id,row1,col1,row2,col2,obj,addTableControl);
  }
  powerGrids.objects[id].addObjToArrayElements  =  function(row1,col1,row2,col2,obj)
  {
    powerGrids.addObjToArrayElements(id,row1,col1,row2,col2,obj);
  }
  powerGrids.objects[id].addMultObjsToArrayElements  =  function(arrNames,arrTypes,arrValues,row,col,totalRows)
  {
    powerGrids.addMultObjsToArrayElements(id,arrNames,arrTypes,arrValues,row,col,totalRows);
  }
  powerGrids.objects[id].addRowObjsToArrayElements  =  function(nameElement,typeElement,values,row1,col1,row2,totalElements)
  {
    powerGrids.addRowObjsToArrayElements(id,nameElement,typeElement,values,row1,col1,row2,totalElements);
  }
  powerGrids.objects[id].addTextArrayToArrayElements  =  function(textArr,row1,col1,row2)
  {
    powerGrids.addTextArrayToArrayElements(id,textArr,row1,col1,row2);
  }
  powerGrids.objects[id].cleanCell  =  function(row,col)
  {
    powerGrids.cleanCell(id,row,col);
  }
  powerGrids.objects[id].cleanValuesSubCell  =  function(row,col)
  {
    powerGrids.cleanValuesSubCell(id,row,col);
  }
  powerGrids.objects[id].cleanSubCell  =  function(row1,col1,row2,col2)
  {
    powerGrids.cleanSubCell(id,row1,col1,row2,col2);
  }
  powerGrids.objects[id].deleteSubCell  =  function(row1,col1,row2,col2)
  {
    powerGrids.deleteSubCell(id,row1,col1,row2,col2);
  }
  powerGrids.objects[id].deleteSubRow  =  function(row1,col1,row2)
  {
    powerGrids.deleteSubRow(id,row1,col1,row2);
  }
  powerGrids.objects[id].deleteRow  =  function(row)
  {
    powerGrids.deleteRow(id,row);
  }
  powerGrids.objects[id].deleteCell  =  function(row,col)
  {
    powerGrids.deleteCell(id,row,col);
  }
  powerGrids.objects[id].getMouseXY  =  function(e)
  {
    powerGrids.getMouseXY(e);
  }
  powerGrids.objects[id].getActSubRow  =  function()
  {
    return powerGrids.getActSubRow(id);
  }
  powerGrids.objects[id].getActSubCell  =  function()
  {
    return powerGrids.getActSubCell(id);
  }
  powerGrids.objects[id].getTextObj  =  function(text)
  {
    return powerGrids.getTextObj(text);
  }
  powerGrids.objects[id].getObjSubCell  =  function(row1,col1,row2,col2)
  {
    return powerGrids.getObjSubCell(id,row1,col1,row2,col2);
  }
  powerGrids.objects[id].getValueFromObjSubCell  =  function(row1,col1,row2,col2)
  {
    return powerGrids.getValueFromObjSubCell(id,row1,col1,row2,col2);
  }
  powerGrids.objects[id].getCheckStsFromObjSubCell  =  function(row1,col1,row2,col2)
  {
    return powerGrids.getCheckStsFromObjSubCell(id,row1,col1,row2,col2);
  }
  powerGrids.objects[id].getCheckStsArrFromObjSubCol  =  function(row1,col1,col2,initRow,endRow)
  {
    return powerGrids.getCheckStsArrFromObjSubCol(id,row1,col1,col2,initRow,endRow);
  }
  powerGrids.objects[id].getObject  =  function()
  {
    return powerGrids.getObject(id);
  }
  powerGrids.objects[id].getTextObjArr  =  function(textArr)
  {
    return powerGrids.getTextObjArr(textArr);
  }
  powerGrids.objects[id].getColumnValues  =  function(row1,col1,col2)
  {
    return powerGrids.getColumnValues(id,row1,col1,col2);
  }
  powerGrids.objects[id].getRecordValues  =  function(row1,col1,row2)
  {
    return powerGrids.getRecordValues(id,row1,col1,row2);
  }
  powerGrids.objects[id].hideCell  =  function(row,col)
  {
    powerGrids.hideCell(id,row,col);
  }
  powerGrids.objects[id].loadArrayElementsToGridCell  =  function( row,col,addTableControl)
  {
    powerGrids.loadArrayElementsToGridCell(id, row,col,addTableControl);
  }
  powerGrids.objects[id].loadValuesToSubCell  =  function(row,col)
  {
    powerGrids.loadValuesToSubCell(id,row,col);
  }
  powerGrids.objects[id].loadDataStruct  =  function(row,col,dataStruct)
  {
    powerGrids.loadDataStruct(id,row,col,dataStruct);
  }
  powerGrids.objects[id].onMouseOverToCell  =  function(row,col,funct)
  {
    powerGrids.onMouseOverToCell(id,row,col,funct);
  }
  powerGrids.objects[id].onClickToCell  =  function(row,col,funct)
  {
    powerGrids.onClickToCell(id,row,col,funct);
  }
  powerGrids.objects[id].onDblClickToCell  =  function(row,col,funct)
  {
    powerGrids.onDblClickToCell(id,row,col,funct);
  }
  powerGrids.objects[id].onMouseMoveToCell  =  function(row,col,funct)
  {
    powerGrids.onMouseMoveToCell(id,row,col,funct);
  }
  powerGrids.objects[id].onMouseUpToCell  =  function(row,col,funct)
  {
    powerGrids.onMouseUpToCell(id,row,col,funct);
  }
  powerGrids.objects[id].onMouseDownToCell  =  function(row,col,funct)
  {
    powerGrids.onMouseDownToCell(id,row,col,funct);
  }
  powerGrids.objects[id].onMouseOutToCell  =  function(row,col,funct)
  {
    powerGrids.onMouseOutToCell(id,row,col,funct);
  }
  powerGrids.objects[id].order  =  function(row1,col1, field)
  {
    powerGrids.order(id, row1,col1, field);
  }
  powerGrids.objects[id].quickSort  =  function(pivote,izq, der,list,keys)
  {
    powerGrids.quickSort(pivote,izq, der,list,keys);
  }
  powerGrids.objects[id].resizeCell  =  function(row,col,w,h)
  {
    powerGrids.resizeCell(id,row,col,w,h);
  }
  powerGrids.objects[id].sleep  =  function(millisecond)
  {
    powerGrids.sleep(millisecond);
  }
  powerGrids.objects[id].setSelectedCell  =  function(sts)
  {
    powerGrids.setSelectedCell(id,sts);
  }
  powerGrids.objects[id].setSelectedRow  =  function(sts)
  {
    powerGrids.setSelectedRow(id,sts);
  }
  powerGrids.objects[id].showCell  =  function(row,col)
  {
    powerGrids.showCell(id,row,col);
  }
  powerGrids.objects[id].setOnClickForObjSubCell  =  function(row1,col1,row2,col2,funct)
  {
    powerGrids.setOnClickForObjSubCell(id,row1,col1,row2,col2,funct);
  }
  powerGrids.objects[id].setOnDblClickForObjSubCell  =  function(row1,col1,row2,col2,funct)
  {
    powerGrids.setOnDblClickForObjSubCell(id,row1,col1,row2,col2,funct);
  }
  powerGrids.objects[id].setOnMouseOverForObjSubCell  =  function(row1,col1,row2,col2,funct)
  {
    powerGrids.setOnMouseOverForObjSubCell(id,row1,col1,row2,col2,funct);
  }
  powerGrids.objects[id].setOnMouseOutForObjSubCell  =  function(row1,col1,row2,col2,funct)
  {
    powerGrids.setOnMouseOutForObjSubCell(id,row1,col1,row2,col2,funct);
  }
  powerGrids.objects[id].setOnMouseMoveForObjSubCell  =  function(row1,col1,row2,col2,funct)
  {
    powerGrids.setOnMouseMoveForObjSubCell(id,row1,col1,row2,col2,funct);
  }
  powerGrids.objects[id].setOnMouseUpForObjSubCell  =  function(row1,col1,row2,col2,funct)
  {
    powerGrids.setOnMouseUpForObjSubCell(id,row1,col1,row2,col2,funct);
  }
  powerGrids.objects[id].setOnMouseDownForObjSubCell  =  function(row1,col1,row2,col2,funct)
  {
    powerGrids.setOnMouseDownForObjSubCell(id,row1,col1,row2,col2,funct);
  }
  powerGrids.objects[id].setTextToGridCell  =  function(row1,col1,row2,col2,text,addTableControl)
  {
    powerGrids.setTextToGridCell(id,row1,col1,row2,col2,text,addTableControl);
  }
  powerGrids.objects[id].setColumnTextToGridCell  =  function(row1,col1,colText,textArr)
  {
    powerGrids.setColumnTextToGridCell(id,row1,col1,colText,textArr);
  }
  powerGrids.objects[id].setRowTextToGridCell  =  function(row1,col1,rowText,textArr)
  {
    powerGrids.setRowTextToGridCell(id,row1,col1,rowText,textArr);
  }
  powerGrids.objects[id].setTitle  =  function(title,align)
  {
    powerGrids.setTitle(id,title,align);
  }
  powerGrids.objects[id].setStyleBarTitle  =  function(styleBarTitle)
  {
    powerGrids.setStyleBarTitle(id,styleBarTitle);
  }
  powerGrids.objects[id].setStyleBarControl  =  function(row,col,styleBarControl)
  {
    powerGrids.setStyleBarControl(id,row,col,styleBarControl);
  }
  powerGrids.objects[id].setBgColorBarControl  =  function(row,col,bgColor)
  {
    powerGrids.setBgColorBarControl(id,row,col,bgColor);
  }
  powerGrids.objects[id].setColorBarTitle  =  function(colorBar)
  {
    powerGrids.setColorBarTitle(id,colorBar);
  }
  powerGrids.objects[id].setStyleRow  =  function(styleRow,colorRow,fontFamily,fontSize,fontColor,row1,col1,row2)
  {
    powerGrids.setStyleRow(id,styleRow,colorRow,fontFamily,fontSize,fontColor,row1,col1,row2);
  }
  powerGrids.objects[id].setFontBarControl  =  function(row,col,fontFamily,fontSize,fontColor)
  {
    powerGrids.setFontBarControl(id,row,col,fontFamily,fontSize,fontColor);
  }
  powerGrids.objects[id].setFontTitle  =  function(fontFamily,fontSize,fontColor)
  {
    powerGrids.setFontTitle(id,fontFamily,fontSize,fontColor);
  }
  powerGrids.objects[id].setColorSubCell  =  function(row1,col1,row2,col2,color)
  {
    powerGrids.setColorSubCell(id,row1,col1,row2,col2,color);
  }
  powerGrids.objects[id].setColorSubRow  =  function(row1,col1,row2,color)
  {
    powerGrids.setColorSubRow(id,row1,col1,row2,color);
  }
  powerGrids.objects[id].setColorObjSubCell  =  function(row1,col1,row2,col2,color)
  {
    powerGrids.setColorObjSubCell(id,row1,col1,row2,col2,color);
  }
  powerGrids.objects[id].setColorObjSubRow  =  function(row1,col1,row2,color)
  {
    powerGrids.setColorObjSubRow(id,row1,col1,row2,color);
  }
  powerGrids.objects[id].setTextColorToObjSubCell  =  function(row1,col1,row2,col2,color)
  {
    powerGrids.setTextColorToObjSubCell(id,row1,col1,row2,col2,color);
  }
  powerGrids.objects[id].setTextColorToObjSubRow  =  function(row1,col1,row2,color)
  {
    powerGrids.setTextColorToObjSubRow(id,row1,col1,row2,color);
  }
  powerGrids.objects[id].setValueToObjSubCell  =  function(row1,col1,row2,col2,value,saveToStruct)
  {
    powerGrids.setValueToObjSubCell(id,row1,col1,row2,col2,value,saveToStruct);
  }
  powerGrids.objects[id].setFontToObjSubCell  =  function(row1,col1,row2,col2,fontFamily,fontSize,fontColor)
  {
    powerGrids.setFontToObjSubCell(id,row1,col1,row2,col2,fontFamily,fontSize,fontColor);
  }
  powerGrids.objects[id].setFontToObjSubRow  =  function(row1,col1,row2,fontFamily,fontSize,fontColor)
  {
    powerGrids.setFontToObjSubRow(id,row1,col1,row2,fontFamily,fontSize,fontColor);
  }
  powerGrids.objects[id].setFontToAllObjects  =  function(row1,col1,fontFamily,fontSize,fontColor)
  {
    powerGrids.setFontToAllObjects(id,row1,col1,fontFamily,fontSize,fontColor);
  }
  powerGrids.objects[id].setSizeElement  =  function(row1,col1,row2,col2,w,h)
  {
    powerGrids.setSizeElement(id,row1,col1,row2,col2,w,h);
  }
  powerGrids.objects[id].setSizeColumnElements  =  function(row1,col1,col2,w,h)
  {
    powerGrids.setSizeColumnElements(id,row1,col1,col2,w,h);
  }
  powerGrids.objects[id].setSizeAllColumnElements  =  function(row1,col1,w,h)
  {
    powerGrids.setSizeAllColumnElements(id,row1,col1,w,h);
  }
  powerGrids.objects[id].setSizeSubCell  =  function(row1,col1,row2,col2,w,h)
  {
    powerGrids.setSizeSubCell(id,row1,col1,row2,col2,w,h);
  }
  powerGrids.objects[id].setSizeColumnSubCells  =  function(row1,col1,col2,w,h)
  {
    powerGrids.setSizeColumnSubCells(id,row1,col1,col2,w,h);
  }
  powerGrids.objects[id].setDualColorToCells  =  function(row1,col1,color1,color2)
  {
    powerGrids.setDualColorToCells(id,row1,col1,color1,color2);
  }
  powerGrids.objects[id].setPropertyObjSubCell  =  function(row1,col1,row2,col2,prop,value)
  {
    powerGrids.setPropertyObjSubCell(id,row1,col1,row2,col2,prop,value);
  }
  powerGrids.objects[id].setPropertyColumnObj  =  function(row1,col1,col2,prop,value)
  {
    powerGrids.setPropertyColumnObj(id,row1,col1,col2,prop,value);
  }
  powerGrids.objects[id].setObjAttrib  =  function(objAttrib,env)
  {
    powerGrids.setObjAttrib(id,objAttrib,env);
  }
  powerGrids.objects[id].setEnableResize  =  function(row1,col1,h)
  {
    powerGrids.setEnableResize(id,row1,col1,h);
  }
  powerGrids.objects[id].setAllObjAttrib  =  function(objAttrib,env)
  {
    powerGrids.setAllObjAttrib(objAttrib,env);
  }
  powerGrids.objects[id].setLoadBGImg = function(activeLoad)
  {
    powerGrids.setLoadBGImg(id, activeLoad);
  }
  powerGrids.objects[id].setLoadBGImgAll = function(activeLoad)
  {
	powerGrids.setLoadBGImgAll(activeLoad);
  }
  powerGrids.objects[id].setBgBarImg = function(bgImg)
  {
  	powerGrids.setBgBarImg(id, bgImg);
  }
  powerGrids.objects[id].setImgBarSelected = function(imgBarSelected)
  {
  	powerGrids.setImgBarSelected(id, imgBarSelected);
  }
  powerGrids.objects[id].alignSubCell = function(row1, col1, row2, col2, align)
  {
  	powerGrids.alignSubCell(id, row1, col1, row2, col2, align);
  }  
  powerGrids.objects[id].setHeightBarTitle = function(height)
  {
  	powerGrids.setHeightBarTitle(id,height);
  }
  powerGrids.objects[id].setHeightBarControl = function(row,col,height)
  {
  	powerGrids.setHeightBarControl(id,row,col,height);
  }
},
  addToBody : function(id)
  {
    document.body.appendChild(this.objects[id].panel);
  },
  alignSubCell : function(id, row1, col1, row2, col2, align)
  {
  	var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    divTabla.tableCell.rows[row2].cells[col2].align = align;
    divTabla.tableCell.rows[row2].cells[col2].style.borderWidth = '1px';
  },
  addRow : function(id)
  {
    var r = this.objects[id].bodyTable.rows.length;
    this.objects[id].bodyTable.insertRow(r);
  },
  addRecord : function(id,row1,col1,reg)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var lng = divTabla.dataStruct.data[0].length;
    for(i=0; i<divTabla.dataStruct.fields.length; i++)
    {
      divTabla.dataStruct.data[i][lng]=reg[i];
    }
    divTabla.totalRow++;
  },
  addTableControl : function(id,row,col,d)
  {
    d.tableControls = document.createElement("table");
    d.tableControls.setAttribute("border","0");
    d.tableControls.setAttribute("cellPadding","0");
    d.tableControls.setAttribute("cellSpacing","0");
    d.tableControls.insertRow(0);
    d.tableControls.rows[0].insertCell(0);
    d.tableControls.rows[0].insertCell(1);
    d.tableControls.rows[0].insertCell(2);
    d.tableControls.rows[0].insertCell(3);
    d.tableControls.rows[0].insertCell(4);
    d.img1 = document.createElement("img");
    d.img2 = document.createElement("img");
    d.img3 = document.createElement("img");
    d.img4 = document.createElement("img");
    d.img1.src = "images/"+this.imgControl[0];
    d.img2.src = "images/"+this.imgControl[1];
    d.img3.src = "images/"+this.imgControl[2];
    d.img4.src = "images/"+this.imgControl[3];
    d.img1.style.height = "12px";
    d.img1.style.width = "12px";
    d.img2.style.height = "12px";
    d.img2.style.width = "12px";
    d.img3.style.height = "12px";
    d.img3.style.width = "12px";
    d.img4.style.height = "12px";
    d.img4.style.width = "12px";
    d.tableControls.rows[0].cells[0].appendChild(d.img1);
    d.tableControls.rows[0].cells[1].appendChild(d.img2);
    d.tableControls.rows[0].cells[2].innerHTML = 'pag : ';
    d.tableControls.rows[0].cells[3].appendChild(d.img3);
    d.tableControls.rows[0].cells[4].appendChild(d.img4);    
    d.tableControls.style.width = "100%";
    d.tableControls.rows[0].cells[0].style.width = "20%";
    d.tableControls.rows[0].cells[1].style.width = "20%";
    d.tableControls.rows[0].cells[2].style.width = "20%";
    d.tableControls.rows[0].cells[3].style.width = "20%";
    d.tableControls.rows[0].cells[4].style.width = "20%";
    d.tableControls.rows[0].cells[0].style.textAlign = "center";
    d.tableControls.rows[0].cells[1].style.textAlign = "center";
    d.tableControls.rows[0].cells[2].style.textAlign = "center";
    d.tableControls.rows[0].cells[3].style.textAlign = "center";
    d.tableControls.rows[0].cells[4].style.textAlign = "center";
    d.tableContainer.rows[0].cells[0].appendChild(d.tableControls);
    this.setStyleBarControl(id,row,col,"outset");
    this.setHeightBarControl(id,row,col,20);
    this.setBgColorBarControl(id,row,col,'#e7e7e7');
    d.tableControls.rows[0].cells[0].onmousedown = function(e)
    {
      d.tableControls.rows[0].cells[0].style.borderStyle = "inset";
      d.dataStruct.itemPage--;
      d.dataStruct.offsetPage = 0;
      if(d.dataStruct.itemPage < 0)
      {
        d.dataStruct.itemPage = 0;
      }
      d.tableControls.rows[0].cells[2].innerHTML = 'pag : '+d.dataStruct.itemPage;
      powerGrids.cleanValuesSubCell("pg",row,col);
      powerGrids.loadValuesToSubCell("pg",row,col);
    }
    d.tableControls.rows[0].cells[0].onmouseup = function(e)
    {
      d.tableControls.rows[0].cells[0].style.borderStyle ="outset";
    }
    d.tableControls.rows[0].cells[1].onmouseout = function(e)
    {
      d.tableControls.rows[0].cells[1].style.borderStyle = "outset";
    }
    d.tableControls.rows[0].cells[1].onmousedown = function(e)
    {
      d.tableControls.rows[0].cells[1].style.borderStyle = "inset";
      var ent = parseInt(d.totalRow / d.dataStruct.pageSize);
      var dec = (d.totalRow / d.dataStruct.pageSize)-ent;
      if(dec > 0)
      {
        dec = 1;
      }
      var maxPage = ent+dec;
      d.dataStruct.offsetPage--;
      if(d.dataStruct.offsetPage < 0)
      {
        if(d.dataStruct.itemPage > 0)
        {
          d.dataStruct.offsetPage = d.dataStruct.pageSize-1;
          d.dataStruct.itemPage--;
          d.tableControls.rows[0].cells[2].innerHTML = 'pag : '+d.dataStruct.itemPage;
        }
        else
        {
          d.dataStruct.offsetPage = 0;
        }
      }
      powerGrids.cleanValuesSubCell("pg",row,col);
      powerGrids.loadValuesToSubCell("pg",row,col);
    }
    d.tableControls.rows[0].cells[1].onmouseup = function(e)
    {
      d.tableControls.rows[0].cells[1].style.borderStyle ="outset";
    }
    d.tableControls.rows[0].cells[3].onmouseout = function(e)
    {
      d.tableControls.rows[0].cells[3].style.borderStyle = "outset";
    }
    d.tableControls.rows[0].cells[3].onmousedown = function(e)
    {
      d.tableControls.rows[0].cells[3].style.borderStyle = "inset";
      var ent = parseInt(d.totalRow / d.dataStruct.pageSize);
      var dec = (d.totalRow / d.dataStruct.pageSize)-ent;
      if(dec > 0)
      {
        dec = 1;
      }
      var maxPage = ent+dec;
      d.dataStruct.offsetPage++;
      if(d.dataStruct.offsetPage > d.dataStruct.pageSize-1)
      {
        if(d.dataStruct.itemPage < maxPage)
        {
          d.dataStruct.offsetPage = 0;
          d.dataStruct.itemPage++;
          d.tableControls.rows[0].cells[2].innerHTML = 'pag : '+d.dataStruct.itemPage;
        }
        else
        {
          d.dataStruct.offsetPage--;
        }
      }
      else
      {
        var v = d.dataStruct.offsetPage+(d.dataStruct.itemPage*d.dataStruct.pageSize)+d.dataStruct.pageSize-1;
        if(v >= maxPage*d.dataStruct.pageSize)
        {
          d.dataStruct.offsetPage--;
        }
      }
      powerGrids.cleanValuesSubCell("pg",row,col);
      powerGrids.loadValuesToSubCell("pg",row,col);
    }
    d.tableControls.rows[0].cells[3].onmouseup = function(e)
    {
      d.tableControls.rows[0].cells[3].style.borderStyle ="outset";
    }
    d.tableControls.rows[0].cells[4].onmouseout = function(e)
    {
      d.tableControls.rows[0].cells[4].style.borderStyle = "outset";
    }
    d.tableControls.rows[0].cells[4].onmousedown = function(e)
    {
      d.tableControls.rows[0].cells[4].style.borderStyle = "inset";
      var ent = parseInt(d.totalRow / d.dataStruct.pageSize);
      var dec = (d.totalRow / d.dataStruct.pageSize) - ent;
      if(dec > 0)
      {
        dec = 1;
      }
      var maxPage = ent+dec;
      d.dataStruct.itemPage++;
      d.dataStruct.offsetPage = 0;
      if(d.dataStruct.itemPage > maxPage-1)
      {
        d.dataStruct.itemPage = maxPage-1;
      }
      d.tableControls.rows[0].cells[2].innerHTML = 'pag : '+d.dataStruct.itemPage;
      powerGrids.cleanValuesSubCell("pg",row,col);
      powerGrids.loadValuesToSubCell("pg",row,col);
    }
    d.tableControls.rows[0].cells[4].onmouseup = function(e)
    {
      d.tableControls.rows[0].cells[4].style.borderStyle ="outset";
    }
  },
  addCol : function(id,row,addTableControl)
  {
  	this.objects[id].addTableControl = addTableControl;
    var c = this.objects[id].bodyTable.rows[row].cells.length;
    this.objects[id].bodyTable.rows[row].insertCell(c);
    var d = document.createElement("div");
    d.tableContainer = document.createElement("table");
    d.tableContainer.setAttribute("border","0");
    d.tableContainer.setAttribute("cellPadding","0");
    d.tableContainer.setAttribute("cellSpacing","0");
    d.tableContainer.insertRow(0);
    d.tableContainer.insertRow(1);
    d.tableContainer.rows[0].insertCell(0);
    d.tableContainer.rows[1].insertCell(0);
    d.tableCell = document.createElement("table");
    d.tableCell.setAttribute("border","0");
    d.tableCell.setAttribute("cellPadding","0");
    d.tableCell.setAttribute("cellSpacing","0");
    d.tableCell.style.borderWidth='0px';
    d.appendChild(d.tableContainer);
    d.tableContainer.rows[0].cells[0].appendChild(d.tableCell);
    this.objects[id].bodyTable.rows[row].cells[c].appendChild(d);
    if(addTableControl)
    {
      this.addTableControl(id,row,c,d);
    }
  },
  adjGrid : function(id,row1,col1,row2,col2,addTableControl)
  {
    while(row1 >= this.objects[id].bodyTable.rows.length)
    {
      this.addRow(id);
    }
    var co = this.objects[id].bodyTable.rows[row1].cells.length;
    while(col1 >= co)
    {
      this.addCol(id,row1,addTableControl);
      co = this.objects[id].bodyTable.rows[row1].cells.length;
    }
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var r = divTabla.tableCell.rows.length;
    while(row2 >= r)
    {
      divTabla.tableCell.insertRow(r);
      r = divTabla.tableCell.rows.length;
    }
    var c = divTabla.tableCell.rows[row2].cells.length;
    while(col2 >= c)
    {
      divTabla.tableCell.rows[row2].insertCell(c);
      c = divTabla.tableCell.rows[row2].cells.length;
    }
  },
  activeAutoSizeCol : function(id,row1,col1,field,height)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var e = new Object();
    var v =0;
    divTabla.tableCell.rows[0].cells[field].ondblclick = function()
    {
      powerGrids.objects[id].totalClick = 2;
      var maximo = 2;
      for(i=0; i < divTabla.dataStruct.pageSize; i++)
      {
        e = divTabla.tableCell.rows[i].cells[field].firstChild;
        if(i==0)
        v = e.length;
        else
        v = e.value.length;
        if(maximo < v)
        {
          maximo = v;
        }
      }
      powerGrids.setSizeColumnElements(id,row1,col1,field,maximo*8,height);
      powerGrids.setSizeColumnSubCells(id,row1,col1,field,maximo*8,height);
    }
  },
  activeAutoSizeCols : function(id,row1,col1,height)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    for(field=0; field < divTabla.tableCell.rows[0].cells.length; field++)
    {
      this.activeAutoSizeCol(id,row1,col1,field,height);
    }
  },
  activeOrderByColSubCell : function(id,row1,col1,col2)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    divTabla.tableCell.rows[0].cells[col2].onclick = function()
    {
      setTimeout("powerGrids.order('"+id+"',"+row1+","+col1+","+col2+")",300);
      powerGrids.order(id,0,col1,col2);
    }
  },
  activeOrderByColsSubCell : function(id,row1,col1,arrCol)
  {
    for(index = 0; index < arrCol.length; index++)
    {
      this.activeOrderByColSubCell(id,row1,col1,arrCol[index]);
    }
  },
  addObjToSubCell : function(id,row1,col1,row2,col2,obj,addTableControl)
  {
    this.adjGrid(id,row1,col1,row2,col2,addTableControl);
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    divTabla.tableCell.rows[row2].cells[col2].appendChild(obj);
    if(obj.type!=null)
    {
      obj.onclick = function(e)
      {
        powerGrids.objects[id].actRow = row2;
        powerGrids.objects[id].actCell = col2;
        var p = row2+divTabla.dataStruct.itemPage*divTabla.dataStruct.pageSize-1;
        if(obj.type=="radio")
        {
          for(i=0; i<divTabla.dataStruct.data[col2].length; i++)
          {
            divTabla.dataStruct.data[col2][i] = false;
          }
          obj.checked = true;
          divTabla.dataStruct.data[col2][p] = obj.checked;
        }
        if(obj.type=="checkbox")
        {
          if(obj.checked)
          {
            divTabla.dataStruct.data[col2][p] = true;
          }
          else
          {
            divTabla.dataStruct.data[col2][p] = false;
          }
        }
      }
      obj.onchange = function(e)
      {
        powerGrids.objects[id].actRow = row2;
        powerGrids.objects[id].actCell = col2;
        if(obj.type=="select-one")
        {
          var p = row2 + divTabla.dataStruct.itemPage * divTabla.dataStruct.pageSize - 1;
          var selected = obj.value;
          var l = obj.options.length;
          var arr = new Array;
          arr[0] = selected;
          if(selected != '0')
          {
            for(w=0; w < l; w++)
            {
              if(obj.options[w].text!=selected)
              {
                arr[arr.length] = obj.options[w].text;
              }
            }
            divTabla.dataStruct.data[col2][p] = arr;
          }
        }
      },
      obj.onblur = function(e)
      {
        var p = row2+divTabla.dataStruct.itemPage*divTabla.dataStruct.pageSize-1;
        if(obj.type=="text")
        {
          divTabla.dataStruct.data[col2][p] = obj.value;
        }
        if(obj.type=="textarea")
        {
          divTabla.dataStruct.data[col2][p] = obj.value;
        }
      }
      obj.onmouseover = function(e)
      {
        powerGrids.objects[id].actRow = row2;
        powerGrids.objects[id].actCell = col2;
        if(powerGrids.objects[id].selectedRow)
        {
          var tc = divTabla.tableCell.rows[row2].cells.length;
          for(a=0; a<tc; a++)
          {
            var o = divTabla.tableCell.rows[row2].cells[a].firstChild;
            o.style.backgroundColor = powerGrids.objects[id].colorSelected;
            o.style.color = powerGrids.objects[id].fontSelected;
          }
		  if (!powerGrids.objects[id].loadBGImg) 
		  {
		  	powerGrids.setColorSubRow(id, row1, col1, row2, powerGrids.objects[id].colorSelected);
		  }
		  else
		  {
			for (x = 0; x < tc; x++) 
			{
			  divTabla.tableCell.rows[row2].cells[x].style.backgroundImage = "url(" + powerGrids.bgImgPath + powerGrids.objects[id].imgBarSelected + ")";
              var o = divTabla.tableCell.rows[row2].cells[x].firstChild;
              o.style.backgroundImage = "url(" + powerGrids.bgImgPath + powerGrids.objects[id].imgBarSelected + ")";
			}  
		  }	
        }
        else
        {
          if(powerGrids.objects[id].selectedCell)
          {
            obj.style.backgroundColor = powerGrids.objects[id].colorSelected;
            obj.style.color = powerGrids.objects[id].fontSelected;
            divTabla.tableCell.rows[row2].cells[col2].style.backgroundColor = powerGrids.objects[id].colorSelected;
          }
        }
      }
      obj.onmouseout = function(e)
      {
        if(powerGrids.objects[id].selectedRow)
        {
          var tc = divTabla.tableCell.rows[row2].cells.length;
          for(a=0; a<tc; a++)
          {
            var o = divTabla.tableCell.rows[row2].cells[a].firstChild;
            if(row2 % 2 == 0)
              o.style.backgroundColor = powerGrids.objects[id].colorDiselectedEven;
            else
              o.style.backgroundColor = powerGrids.objects[id].colorDiselectedOdd;
            o.style.color = powerGrids.objects[id].fontDiselected;
          }
          if(row2 % 2 == 0)
            powerGrids.setColorSubRow(id,row1,col1,row2,powerGrids.objects[id].colorDiselectedEven);
          else
            powerGrids.setColorSubRow(id,row1,col1,row2,powerGrids.objects[id].colorDiselectedOdd);
		  if (powerGrids.objects[id].loadBGImg) 
		  {
		  	for (x = 0; x < tc; x++) 
			{
			  divTabla.tableCell.rows[row2].cells[x].style.backgroundImage = "";
              var o = divTabla.tableCell.rows[row2].cells[x].firstChild;
              o.style.backgroundImage = "";
			}
		  }		
        }
        else
        {
          if(powerGrids.objects[id].selectedCell)
          {
            if(row2 % 2 == 0)
              obj.style.backgroundColor = powerGrids.objects[id].colorDiselectedEven;
            else
              obj.style.backgroundColor = powerGrids.objects[id].colorDiselectedOdd;
            obj.style.color = powerGrids.objects[id].fontDiselected;
            if(row2 % 2 == 0)
              divTabla.tableCell.rows[row2].cells[col2].style.backgroundColor = powerGrids.objects[id].colorDiselectedEven;
            else
              divTabla.tableCell.rows[row2].cells[col2].style.backgroundColor = powerGrids.objects[id].colorDiselectedOdd;
          }
        }
      }
    }
  },
  addObjToArrayElements : function(id,row1,col1,row2,col2,obj)
  {
    if(this.objects[id].cells[row1][col1]==null)
    {
      this.objects[id].cells[row1][col1] = new Object();
      this.objects[id].cells[row1][col1].rows = new Array;
    }
    if(this.objects[id].cells[row1][col1].rows[row2]==null)
    {
      this.objects[id].cells[row1][col1].rows[row2] = new Object();
      this.objects[id].cells[row1][col1].rows[row2].cols = new Array;
    }
    this.objects[id].cells[row1][col1].rows[row2].cols[col2] = obj;
  },
  addMultObjsToArrayElements : function(id,arrNames,arrTypes,arrValues,row,col,totalRows)
  {
    for(i=0; i<totalRows; i++)
    {
      var lastRow = this.objects[id].cells[row][col].rows.length;
      for(j=0; j<arrNames.length; j++)
      {
        if(arrTypes[j]=='radio')
        {
          if(document.all?true:false)
          {
            var e = document.createElement("<input type='radio' name='input'>")
          }
          else
          {
            var e = document.createElement(arrNames[j]);
          }
        }
        else
        {
          var e = document.createElement(arrNames[j]);
        }
        if(arrNames[j] == "img")
        {
          e.src = arrValues[j];
          e.type ='img';
        }
        if((arrNames[j] != "select")&&(arrNames[j] != "textArea") && (arrNames[j] != "img"))
        {
          e.type = arrTypes[j];
        }
        e.value = arrValues[j];
        e.name = arrNames[j]+"["+row+","+col+","+i+","+j+"]";
        e.id = "e["+row+","+col+","+lastRow+","+j+"]";
        if(dataStruct.typeElement[j]=="checkbox" || (dataStruct.typeElement[j]=="radio"))
        {
          e.defaultChecked = arrValues[j];
          e.checked = arrValues[j];
        }
        this.addObjToArrayElements(id,row,col,lastRow,j,e);
      }
    }
  },
  addRowObjsToArrayElements : function(id,nameElement,typeElement,values,row1,col1,row2,totalElements)
  {
    for(i=0; i<totalElements; i++)
    {
      if(typeElement=='radio')
      var e = document.createElement("<input type='radio' name='input'>")
      else
      var obj = document.createElement(nameElement);
      if(nameElement=="select")
      {
        for(k=0;k<values.length;k++)
        {
          var o = document.createElement("OPTION");
          obj.options.add(o);
          obj.options[k].text  = values[k];
          obj.options[k].value = values[k];
        }
      }
      else
      {
        if(nameElement == "img")
        {
          obj.src = values;
        }
        else
        {
          obj.type = typeElement;
          obj.value = values;
        }
      }
      obj.name = nameElement;
      obj.id = "e["+row1+","+col1+","+row2+","+i+"]";
      this.addObjToArrayElements(id,row1,col1,row2,i,obj);
    }
  },
  addTextArrayToArrayElements : function(id,textArr,row1,col1,row2)
  {
    for(i=0; i<textArr.length; i++)
    {
      var e = document.createTextNode(textArr[i]);
      this.addObjToArrayElements(id,row1,col1,row2,i,e);
    }
  },
  create : function(id,title)
  {
    this.loadAttrib = false;  
    this.ids[this.ids.length] = id;
    this.objects[id] = new Object();
    this.objects[id].nameComponent = 'powergrids';
    this.objects[id].addTableControl='true';
	this.objects[id].imgBarSelected = "";
	this.objects[id].loadBGImg = false;
    this.objects[id].orderField = -1;
    this.objects[id].totalClick = 0;
    this.objects[id].actRow = 0;
    this.objects[id].actCell = 0;
    this.objects[id].list = new Array;
    this.objects[id].keys = new Array;
    this.objects[id].colorSelected = "#8e8e8e";
    this.objects[id].colorDiselectedEven = "white";
    this.objects[id].colorDiselectedOdd = "white";
    this.objects[id].selectedCell = false;
    this.objects[id].selectedRow = false;
    this.objects[id].fontSelected = "white";
    this.objects[id].fontDiselected = "black";
    this.objects[id].cells = [[],[]];
    this.objects[id].panel = document.createElement("div");
    this.objects[id].bodyPanel = document.createElement("div");
    this.objects[id].tablePrinc = document.createElement("table");
    this.objects[id].tablePrinc.setAttribute("border","1");
    this.objects[id].tablePrinc.setAttribute("cellPadding","0");
    this.objects[id].tablePrinc.setAttribute("cellSpacing","0");
    this.objects[id].tablePrinc.insertRow(0);
    this.objects[id].tablePrinc.insertRow(1);
    this.objects[id].tablePrinc.insertRow(2);
    this.objects[id].tablePrinc.rows[0].insertCell(0);
    this.objects[id].tablePrinc.rows[1].insertCell(0);
    this.objects[id].tablePrinc.style.borderWidth = '0px';
    this.objects[id].panel.appendChild(this.objects[id].tablePrinc);
    this.objects[id].bodyTable = document.createElement("table");
    this.objects[id].bodyTable.setAttribute("border","0");
    this.objects[id].bodyTable.setAttribute("cellPadding","0");
    this.objects[id].bodyTable.setAttribute("cellSpacing","0");
    this.objects[id].bodyPanel.appendChild(this.objects[id].bodyTable);
    this.objects[id].tablePrinc.rows[1].cells[0].appendChild(this.objects[id].bodyPanel);
    this.setTitle(id,title,'center');
    this.setStyleBarTitle(id,'outset');
    this.setColorBarTitle(id,'#e7e7e7');
	this.addPropertyMethod(id);
	this.setHeightBarTitle(id,20);
	return this.objects[id];
  },
  cleanCell : function(id,row,col)
  {
    this.objects[id].bodyTable.rows[row].cells[col].innerHTML = "";
  },
  cleanValuesSubCell : function(id,row,col)
  {
    var divTabla = this.objects[id].bodyTable.rows[row].cells[col].firstChild;
    var tr = divTabla.tableCell.rows.length;
    var tc = divTabla.tableCell.rows[0].cells.length;
    for(i=1; i<tr; i++)
    {
      for(j=0; j<tc; j++)
      {
        var e = divTabla.tableCell.rows[i].cells[j].firstChild;
        e.value="";
        if((e.type == "radio") || (e.type == "checkbox") )
        {
          e.checked = false;
          e.defaultChecked = false;
        }
        if(e.type == "select-one")
        {
          var to = e.options.length;
          for(k=0; k<to; k++)
          {
            e.remove(0);
          }
        }
      }
    }
  },
  cleanSubCell : function(id,row1,col1,row2,col2)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    divTabla.tableCell.rows[row2].cells[col2].innerHTML = "";
  },
  deleteSubCell : function(id,row1,col1,row2,col2)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    divTabla.tableCell.rows[row2].deleteCell(col2);
  },
  deleteSubRow : function(id,row1,col1,row2)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    divTabla.tableCell.deleteRow(row2);
  },
  deleteRow : function(id,row)
  {
    this.objects[id].bodyTable.deleteRow(row);
  },
  deleteCell : function(id,row,col)
  {
    this.objects[id].bodyTable.rows[row].deleteCell(col);
  },
  getMouseXY : function(e)
  {
    var IE = document.all?true:false;
    if (IE)
    {
      powerGrids.mouseX = event.clientX;
      powerGrids.mouseY = event.clientY;
    }
    else
    {
      powerGrids.mouseX = e.pageX;
      powerGrids.mouseY = e.pageY;
    }
  },
  getActSubRow : function(id)
  {
    return powerGrids.objects[id].actRow;
  },
  getActSubCell : function(id)
  {
    return powerGrids.objects[id].actCell;
  },
  getTextObj : function(text)
  {
    return document.createTextNode(text);
  },
  getObjSubCell : function(id,row1,col1,row2,col2)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    return divTabla.tableCell.rows[row2].cells[col2].firstChild;
  },
  getValueFromObjSubCell : function(id,row1,col1,row2,col2)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var e = divTabla.tableCell.rows[row2].cells[col2].firstChild;
    return e.value;
  },
  getCheckStsFromObjSubCell : function(id,row1,col1,row2,col2)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var e = divTabla.tableCell.rows[row2].cells[col2].firstChild;
    return e.checked;
  },
  getCheckStsArrFromObjSubCol : function(id,row1,col1,col2,initRow,endRow)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var arr = new Array;
    for(i=0; i<=(endRow-initRow); i++)
    {
      arr[i] = this.getCheckStsFromObjSubCell(id,row1,col1,i+initRow,col2);
    }
    return arr;
  },
  getObject : function(id)
  {
    return this.objects[id].panel;
  },
  getTextObjArr : function(textArr)
  {
    var toa = new Array;
    for(i=0; i<textArr.length; i++)
    {
      toa[i] = this.getTextObj(textArr[i]);
    }
    return toa;
  },
  getColumnValues : function(id,row1,col1,col2)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    return divTabla.dataStruct.data[col2];
  },
  getRecordValues : function(id,row1,col1,row2)
  {
    var arr = new Array;
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var f = row2-1;
    if (f<0)
    {
      f=0;
    }
    for(i=0; i<divTabla.dataStruct.fields.length; i++)
    {
      if(divTabla.dataStruct.columnElement[i]!=powerGrids.SELECT_ELEMENT)
      arr[i]=divTabla.dataStruct.data[i][f];
      else
      arr[i]=divTabla.dataStruct.data[i][f][0];
    }
    return arr;
  },
  hideCell : function(id,row,col)
  {
    var divTabla = this.objects[id].bodyTable.rows[row].cells[col].firstChild;
    divTabla.style.display = "none";
  },
  loadArrayElementsToGridCell : function(id, row,col,addTableControl)
  {
    for(r=0; r<this.objects[id].cells[row][col].rows.length; r++)
    {
      for(c=0; c<this.objects[id].cells[row][col].rows[r].cols.length; c++)
      {
        var obj = this.objects[id].cells[row][col].rows[r].cols[c];
        this.addObjToSubCell(id,row,col,r,c,obj,addTableControl);
        if((row==0) && (col==0))
          this.alignSubCell(id,0,0,0,c,'center');
      }
    }
    if(attrib)
      this.setObjAttrib(id,attrib,attrib.getActualEnv());
  },
  loadValuesToSubCell : function(id,row,col)
  {
    var divTabla = this.objects[id].bodyTable.rows[row].cells[col].firstChild;
    var init = divTabla.dataStruct.itemPage*divTabla.dataStruct.pageSize + divTabla.dataStruct.offsetPage;
    var maxPos = divTabla.dataStruct.data[0].length;
    for(r=0; r<divTabla.dataStruct.pageSize; r++)
    {
      for(c=0; c<divTabla.totalCol; c++)
      {
        if(r+init < maxPos)
        {
          var e = divTabla.tableCell.rows[r+1].cells[c].firstChild;
          e.value = divTabla.dataStruct.data[c][r+init];
          if(dataStruct.typeElement[c]=="checkbox")
          {
            e.defaultChecked = divTabla.dataStruct.data[c][r+init];
            e.checked = divTabla.dataStruct.data[c][r+init];
          }
          if(divTabla.dataStruct.typeElement[c]=="radio")
          {
            e.defaultChecked = divTabla.dataStruct.data[c][r+init];
            e.checked = divTabla.dataStruct.data[c][r+init];
          }
          if(divTabla.dataStruct.columnElement[c]=="img")
          {
            e.src = divTabla.dataStruct.data[c][r+init];
          }
          if(divTabla.dataStruct.columnElement[c]=="select")
          {
            for(k=0;k<divTabla.dataStruct.data[c][r+init].length;k++)
            {
              var o = document.createElement("OPTION");
              e.options.add(o);
              e.options[k].text  = divTabla.dataStruct.data[c][r+init][k];
              e.options[k].value = divTabla.dataStruct.data[c][r+init][k];
            }
          }
        }
      }
    }
    if(attrib)
      this.setObjAttrib(id,attrib,attrib.getActualEnv());
  },
  loadDataStruct : function(id,row,col,dataStruct)
  {
    if (dataStruct.pageSize > dataStruct.data[0].length)
    dataStruct.pageSize = dataStruct.data[0].length;
    this.addTextArrayToArrayElements(id,dataStruct.fields,row,col,0);
    var a = new Array;
    var cont =0;
    this.addMultObjsToArrayElements(id,dataStruct.columnElement,dataStruct.typeElement,dataStruct.columnElement,row,col,dataStruct.pageSize);
    this.loadArrayElementsToGridCell(id,row,col,true);
    this.setStyleRow(id,"outset","#e7e7e7","verdana",16,'black',row,col,0);
    var divTabla = this.objects[id].bodyTable.rows[row].cells[col].firstChild;
    divTabla.dataStruct = dataStruct;
    divTabla.totalRow = dataStruct.data[0].length;
    divTabla.totalCol = dataStruct.fields.length;
    divTabla.tableControls.rows[0].cells[2].innerHTML = 'pag : '+dataStruct.itemPage;
    for(i=0; i<dataStruct.pageSize;i++)
    {
      for(j=0;j<dataStruct.fields.length;j++)
      {
        var e = divTabla.tableCell.rows[i+1].cells[j].firstChild;
        e.value = dataStruct.data[j][i];
        if(dataStruct.typeElement[j]=="checkbox")
        {
          e.defaultChecked = dataStruct.data[j][i];
          e.checked = dataStruct.data[j][i];
        }
        if(dataStruct.typeElement[j]=="radio")
        {
          e.defaultChecked = dataStruct.data[j][i];
          e.checked = dataStruct.data[j][i];
        }
        if(dataStruct.columnElement[j]=="select")
        {
          for(k=0;k<dataStruct.data[j][i].length;k++)
          {
            var o = document.createElement("OPTION");
            e.options.add(o);
            e.options[k].text  = dataStruct.data[j][i][k];
            e.options[k].value = dataStruct.data[j][i][k];
          }
        }
        if(dataStruct.columnElement[j] == "img")
        {
          e.src = dataStruct.data[j][i];
        }
      }
    }
    if(attrib)
      this.setObjAttrib(id,attrib,attrib.getActualEnv());
  },
  onMouseOverToCell : function(id,row,col,funct)
  {
    var divTabla = this.objects[id].bodyTable.rows[row].cells[col].firstChild;
    divTabla.onmouseover = new Function(funct);
  },
  onClickToCell : function(id,row,col,funct)
  {
    var divTabla = this.objects[id].bodyTable.rows[row].cells[col].firstChild;
    divTabla.onclick = new Function(funct);
  },
  onDblClickToCell : function(id,row,col,funct)
  {
    var divTabla = this.objects[id].bodyTable.rows[row].cells[col].firstChild;
    divTabla.ondblclick = new Function(funct);
  },
  onMouseMoveToCell : function(id,row,col,funct)
  {
    var divTabla = this.objects[id].bodyTable.rows[row].cells[col].firstChild;
    divTabla.onmousemove = new Function(funct);
  },
  onMouseUpToCell : function(id,row,col,funct)
  {
    var divTabla = this.objects[id].bodyTable.rows[row].cells[col].firstChild;
    divTabla.onmouseup = new Function(funct);
  },
  onMouseDownToCell : function(id,row,col,funct)
  {
    var divTabla = this.objects[id].bodyTable.rows[row].cells[col].firstChild;
    divTabla.onmousedown = new Function(funct);
  },
  onMouseOutToCell : function(id,row,col,funct)
  {
    var divTabla = this.objects[id].bodyTable.rows[row].cells[col].firstChild;
    divTabla.onmouseout = new Function(funct);
  },
  order : function (id, row1,col1, field)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var intDataStruct = divTabla.dataStruct;
    var dataStruct = new Array;
    if(powerGrids.objects[id].totalClick > 0)
    {
      var IE = document.all?true:false;
      if(IE)
      powerGrids.objects[id].totalClick = 0;
      else
      powerGrids.objects[id].totalClick--;
      return;
    }
    for(i=0;i<intDataStruct.data.length;i++)
    {
      dataStruct[i] = new Array;
      for(j=0;j<intDataStruct.data[0].length;j++)
      {
        dataStruct[i][j] = intDataStruct.data[i][j];
      }
    }
    for(i=0;i<dataStruct[0].length;i++)
    {
      this.objects[id].keys[i] = i;
      this.objects[id].list[i] = dataStruct[field][i]
    }
    var medio = Math.round((this.objects[id].list.length/2)-1);
    var pivote = this.objects[id].list[medio];
    var primero = this.objects[id].list[0];
    var ultimo = this.objects[id].list[this.objects[id].list.length-1];
    if(((primero>pivote)&&(primero<=ultimo))||((primero<pivote)&&(primero>=ultimo)))
    {
      pivote = primero;
    }
    else if(((ultimo>pivote)&&(ultimo<primero))||((ultimo<pivote)&&(ultimo>primero)))
    {
      pivote = ultimo;
    }
    this.quickSort(pivote, 0,this.objects[id].list.length-1,this.objects[id].list,this.objects[id].keys);
    if(field == this.objects[id].orderField) 
    {
      x = -1;
      this.objects[id].orderField = -1;
      for(i=this.objects[id].list.length-1;i>=0;i--)
      {
        pos = this.objects[id].keys[i];
        x++;
        for(j=0;j<dataStruct.length;j++)
        {
          dataStruct[j][x] = intDataStruct.data[j][pos];
        }
      }
    }
    else 
    {
      this.objects[id].orderField = field;
      for(i=0;i<this.objects[id].list.length;i++)
      {
        pos = this.objects[id].keys[i];
        for(j=0;j<dataStruct.length;j++)
        {
          dataStruct[j][i] = intDataStruct.data[j][pos];
        }
      }
    }
    intDataStruct.data = dataStruct;
    powerGrids.cleanValuesSubCell(id,row1,col1);
    powerGrids.loadValuesToSubCell(id,row1,col1);
  },
  quickSort : function(pivote,izq, der,list,keys)
  {
    i = izq;
    j = der;
    do
    {
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
  resizeCell : function(id,row,col,w,h)
  {
    var divTabla = this.objects[id].bodyTable.rows[row].cells[col].firstChild;
    divTabla.style.width = w+'px';
    divTabla.style.height = h+'px';
    this.objects[id].bodyTable.rows[row].cells[col].style.width  = w+'px';
    this.objects[id].bodyTable.rows[row].cells[col].style.height = h+'px';
  },
  sleep : function(millisecond)
  {
    var now = new Date();
    var exitTime = now.getTime() + millisecond;
    while(true)
    {
      now = new Date();
      if(now.getTime() >= exitTime)
      return;
    }
  },
  setSelectedCell : function(id,sts)
  {
    this.objects[id].selectedCell = sts;
  },
  setSelectedRow : function(id,sts)
  {
    this.objects[id].selectedRow = sts;
  },
  showCell : function(id,row,col)
  {
    var divTabla = this.objects[id].bodyTable.rows[row].cells[col].firstChild;
    divTabla.style.display = "block";
  },
  setOnClickForObjSubCell : function(id,row1,col1,row2,col2,funct)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var e = divTabla.tableCell.rows[row2].cells[col2].firstChild;
    e.onclick = new Function(funct);
  },
  setOnDblClickForObjSubCell : function(id,row1,col1,row2,col2,funct)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var e = divTabla.tableCell.rows[row2].cells[col2].firstChild;
    e.ondblclick = new Function(funct);
  },
  setOnMouseOverForObjSubCell : function(id,row1,col1,row2,col2,funct)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var e = divTabla.tableCell.rows[row2].cells[col2].firstChild;
    e.onmouseover = new Function(funct);
  },
  setOnMouseOutForObjSubCell : function(id,row1,col1,row2,col2,funct)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var e = divTabla.tableCell.rows[row2].cells[col2].firstChild;
    e.onmouseout = new Function(funct);
  },
  setOnMouseMoveForObjSubCell : function(id,row1,col1,row2,col2,funct)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var e = divTabla.tableCell.rows[row2].cells[col2].firstChild;
    e.onmousemove = new Function(funct);
  },
  setOnMouseUpForObjSubCell : function(id,row1,col1,row2,col2,funct)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var e = divTabla.tableCell.rows[row2].cells[col2].firstChild;
    e.onmouseup = new Function(funct);
  },
  setOnMouseDownForObjSubCell : function(id,row1,col1,row2,col2,funct)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var e = divTabla.tableCell.rows[row2].cells[col2].firstChild;
    e.onmousedown = new Function(funct);
  },
  setTextToGridCell : function(id,row1,col1,row2,col2,text,addTableControl)
  {
    this.adjGrid(id,row1,col1,row2,col2,addTableControl);
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var tn = document.createTextNode(text);
    divTabla.tableCell.rows[row2].cells[col2].innerHTML = "";
    divTabla.tableCell.rows[row2].cells[col2].appendChild(tn);
  },
  setColumnTextToGridCell : function(id,row1,col1,colText,textArr)
  {
    for(i=0; i<textArr.length; i++)
    {
      this.setTextToGridCell(id,row1,col1,i,colText,textArr[i],false);
    }
  },
  setRowTextToGridCell : function(id,row1,col1,rowText,textArr)
  {
    for(i=0; i<textArr.length; i++)
    {
      this.setTextToGridCell(id,row1,col1,rowText,i,textArr[i],false);
    }
  },
  setTitle : function(id,title,align)
  {
    this.objects[id].tablePrinc.rows[0].cells[0].innerHTML = title;
    this.objects[id].tablePrinc.rows[0].cells[0].style.textAlign = align;
  },
  setStyleBarTitle : function(id,styleBarTitle)
  {
    this.objects[id].tablePrinc.rows[0].cells[0].style.borderStyle = styleBarTitle;
  },
  setHeightBarTitle : function(id,height)
  {
    this.objects[id].tablePrinc.rows[0].cells[0].style.height = height+'px';
  },
  setStyleBarControl : function(id,row,col,styleBarControl)
  {
    var divTabla = this.objects[id].bodyTable.rows[row].cells[col].firstChild;
    divTabla.tableControls.rows[0].cells[0].style.borderStyle = styleBarControl;
    divTabla.tableControls.rows[0].cells[1].style.borderStyle = styleBarControl;
    divTabla.tableControls.rows[0].cells[2].style.borderStyle = "inset";
    divTabla.tableControls.rows[0].cells[3].style.borderStyle = styleBarControl;
    divTabla.tableControls.rows[0].cells[4].style.borderStyle = styleBarControl;
    divTabla.tableControls.rows[0].cells[0].style.borderWidth='1px';
    divTabla.tableControls.rows[0].cells[1].style.borderWidth='1px';
    divTabla.tableControls.rows[0].cells[2].style.borderWidth='1px';
    divTabla.tableControls.rows[0].cells[3].style.borderWidth='1px';
    divTabla.tableControls.rows[0].cells[4].style.borderWidth='1px';
  },
  setHeightBarControl : function(id,row,col,height)
  {
    var divTabla = this.objects[id].bodyTable.rows[row].cells[col].firstChild;
    divTabla.tableControls.rows[0].cells[0].style.height = height+'px';
    divTabla.tableControls.rows[0].cells[1].style.height = height+'px';
    divTabla.tableControls.rows[0].cells[2].style.height = height+'px';
    divTabla.tableControls.rows[0].cells[3].style.height = height+'px';
    divTabla.tableControls.rows[0].cells[4].style.height = height+'px';
    divTabla.tableControls.rows[0].cells[0].style.lineHeight = height+'px';
    divTabla.tableControls.rows[0].cells[1].style.lineHeight = height+'px';
    divTabla.tableControls.rows[0].cells[2].style.lineHeight = height+'px';
    divTabla.tableControls.rows[0].cells[3].style.lineHeight = height+'px';
    divTabla.tableControls.rows[0].cells[4].style.lineHeight = height+'px';
    divTabla.tableControls.rows[0].cells[0].vAlign = 'middle';
    divTabla.tableControls.rows[0].cells[1].vAlign = 'middle';
    divTabla.tableControls.rows[0].cells[2].vAlign = 'middle';
    divTabla.tableControls.rows[0].cells[3].vAlign = 'middle';
    divTabla.tableControls.rows[0].cells[4].vAlign = 'middle';
    
    divTabla.tableControls.rows[0].cells[2].style.fontSize = '12px';
  },
  setBgColorBarControl : function(id,row,col,bgColor)
  {
    var divTabla = this.objects[id].bodyTable.rows[row].cells[col].firstChild;
    divTabla.tableControls.rows[0].cells[0].style.backgroundColor = bgColor;
    divTabla.tableControls.rows[0].cells[1].style.backgroundColor = bgColor;
    divTabla.tableControls.rows[0].cells[2].style.backgroundColor = bgColor;
    divTabla.tableControls.rows[0].cells[3].style.backgroundColor = bgColor;
    divTabla.tableControls.rows[0].cells[4].style.backgroundColor = bgColor;
  },
  setColorBarTitle : function(id,colorBar)
  {		
    this.objects[id].tablePrinc.rows[0].cells[0].style.backgroundColor = colorBar;
  },
  setStyleRow : function(id,styleRow,colorRow,fontFamily,fontSize,fontColor,row1,col1,row2)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    if(divTabla!=null)
    {
      for(i=0; i<divTabla.tableCell.rows[row2].cells.length; i++)
      {
        divTabla.tableCell.rows[row2].cells[i].style.borderStyle = styleRow;
        divTabla.tableCell.rows[row2].cells[i].style.backgroundColor = colorRow;
        divTabla.tableCell.rows[row2].cells[i].style.fontFamily = fontFamily;
        divTabla.tableCell.rows[row2].cells[i].style.fontSize = fontSize+"px";
        divTabla.tableCell.rows[row2].cells[i].style.color = fontColor;
      }
    }
  },
  setFontBarControl : function(id,row,col,fontFamily,fontSize,fontColor)
  {
    var divTabla = this.objects[id].bodyTable.rows[row].cells[col].firstChild;
    for(i=0; i<divTabla.tableControls.rows[0].cells.length; i++)
    {
      divTabla.tableControls.rows[0].cells[i].style.fontFamily = fontFamily;
      divTabla.tableControls.rows[0].cells[i].style.fontSize = fontSize;
      divTabla.tableControls.rows[0].cells[i].style.color = fontColor;
    }
  },
  setFontTitle : function(id,fontFamily,fontSize,fontColor)
  {
    this.objects[id].tablePrinc.rows[0].cells[0].style.fontFamily = fontFamily;
    this.objects[id].tablePrinc.rows[0].cells[0].style.fontSize = fontSize+'px';
    this.objects[id].tablePrinc.rows[0].cells[0].style.color = fontColor;
  },
  setColorSubCell : function(id,row1,col1,row2,col2,color)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    divTabla.tableCell.rows[row2].cells[col2].style.backgroundColor = color;
  },
  setColorSubRow : function(id,row1,col1,row2,color)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var l = divTabla.tableCell.rows[row2].cells.length;
    for(i=0; i<l; i++)
    {
      this.setColorSubCell(id,row1,col1,row2,i,color);
    }
  },
  setColorObjSubCell : function(id,row1,col1,row2,col2,color)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var obj = divTabla.tableCell.rows[row2].cells[col2].firstChild;
    obj.style.backgroundColor = color;
  },
  setColorObjSubRow : function(id,row1,col1,row2,color)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var l = divTabla.tableCell.rows[row2].cells.length;
    for(i=0; i<l; i++)
    {
      this.setColorObjSubCell(id,row1,col1,row2,i,color);
    }
  },
  setTextColorToObjSubCell : function(id,row1,col1,row2,col2,color)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var obj = divTabla.tableCell.rows[row2].cells[col2].firstChild;
    obj.style.color = color;
  },
  setTextColorToObjSubRow : function(id,row1,col1,row2,color)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var l = divTabla.tableCell.rows[row2].cells.length;
    for(i=0; i<l; i++)
    {
      this.setTextColorToObjSubCell(id,row1,col1,row2,i,color);
    }
  },
  setValueToObjSubCell : function(id,row1,col1,row2,col2,value,saveToStruct)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var e = divTabla.tableCell.rows[row2].cells[col2].firstChild;
    e.value = value;
    if(saveToStruct)
    {
      divTabla.dataStruct.data[col2][row2-1] = value;
    }
  },
  setFontToObjSubCell : function(id,row1,col1,row2,col2,fontFamily,fontSize,fontColor)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var obj = divTabla.tableCell.rows[row2].cells[col2].firstChild;
    obj.style.color = fontColor;
    obj.style.fontFamily = fontFamily;
    obj.style.fontSize = fontSize+"px";
  },
  setFontToObjSubRow : function(id,row1,col1,row2,fontFamily,fontSize,fontColor)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var l = divTabla.tableCell.rows[row2].cells.length;
    for(i=0; i<l; i++)
    {
      this.setFontToObjSubCell(id,row1,col1,row2,i,fontFamily,fontSize,fontColor);
    }
  },
  setFontToAllObjects : function(id,row1,col1,fontFamily,fontSize,fontColor)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var row2 = divTabla.tableCell.rows.length;
    for(j=1; j<row2; j++)
    {
      this.setFontToObjSubRow(id,row1,col1,j,fontFamily,fontSize,fontColor);
    }
  },
  setSizeElement : function(id,row1,col1,row2,col2,w,h)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var e = divTabla.tableCell.rows[row2].cells[col2].firstChild;
    e.style.width = w+"px";
    e.style.height = h+"px";
  },
  setSizeColumnElements : function(id,row1,col1,col2,w,h)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var l = divTabla.tableCell.rows.length;
    for(i=1; i<l; i++)
    {
      this.setSizeElement(id,row1,col1,i,col2,w,h);
    }
  },
  setSizeAllColumnElements : function(id,row1,col1,w,h)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var m = divTabla.tableCell.rows[0].cells.length;
    for(j=0; j<m; j++)
    {
      this.setSizeColumnElements(id,row1,col1,j,w,h);
    }
  },
  setSizeSubCell : function(id,row1,col1,row2,col2,w,h)
  {
    var divTabla = this.objects[id].bodyTable.rows[0].cells[0].firstChild;
    divTabla.tableCell.rows[row2].cells[col2].style.width = w+"px";
    divTabla.tableCell.rows[row2].cells[col2].style.height = h+"px";
  },
  setSizeColumnSubCells : function(id,row1,col1,col2,w,h)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var l = divTabla.tableCell.rows.length;
    for(i=0; i<l; i++)
    {
      this.setSizeSubCell(id,row1,col1,i,col2,w,h);
    }
  },
  setDualColorToCells : function(id,row1,col1,color1,color2)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var longitud = divTabla.tableCell.rows.length;
    var p=0;
    for(j = 1; j < longitud; j++)
    {
      p = j % 2;
      if(p==0)
      {
        this.setColorSubRow(id,row1,col1,j,color1);
        this.setColorObjSubRow(id,row1,col1,j,color1);
      }
      else
      {
        this.setColorSubRow(id,row1,col1,j,color2);
        this.setColorObjSubRow(id,row1,col1,j,color2);
      }
    }
  },
  setPropertyObjSubCell : function(id,row1,col1,row2,col2,prop,value)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var e = divTabla.tableCell.rows[row2].cells[col2].firstChild;
    e.setAttribute(prop,value);
  },
  setPropertyColumnObj : function(id,row1,col1,col2,prop,value)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var rs = divTabla.tableCell.rows.length;
    for(m=1; m<rs; m++)
    {
      this.setPropertyObjSubCell(id,row1,col1,m,col2,prop,value);
    }
  },
  setObjAttrib : function(id,objAttrib,env)
  {
    if(this.loadAttrib)
      return
    this.loadAttrib = true;
	this.objects[id].loadBGImg = objAttrib.getLoadBGImg();
    var r1 = this.objects[id].bodyTable.rows.length;
    if(r1 > 0)
    {
      var c1 = this.objects[id].bodyTable.rows[0].cells.length;
      for(row1 = 0; row1 < r1; row1++)
      {
        for(col1 = 0; col1 < c1; col1++)
        {
          var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
          this.setDualColorToCells("pg",row1,col1,objAttrib.Color.evenRow[env],objAttrib.Color.oddRow[env]);
          this.objects[id].colorSelected = objAttrib.Color.bgMenuSel[env];
          this.objects[id].colorDiselectedEven = objAttrib.Color.evenRow[env];
          this.objects[id].colorDiselectedOdd = objAttrib.Color.oddRow[env];
          this.objects[id].fontSelected = objAttrib.Color.textMenuSel[env];
          this.objects[id].fontDiselected = objAttrib.Color.textCells[env];
          this.setStyleBarTitle(id,objAttrib.Border.styleHead[env]);
          if(this.objects[id].addTableControl)
          {
            this.setStyleBarControl(id,row1,col1,objAttrib.Border.styleHead[env]);
            this.setBgColorBarControl(id,row1,col1,objAttrib.Color.bgMenuSel[env]);
            this.setFontBarControl(id,row1,col1,objAttrib.Font.head[env],objAttrib.Size.cellFont[env],objAttrib.Color.textTitle[env]);
          }
          this.setColorBarTitle(id,objAttrib.Color.bgMenuSel[env]);
          this.setFontTitle(id,objAttrib.Font.head[env],objAttrib.Size.headFont[env],objAttrib.Color.textTitle[env]);
          this.setFontToAllObjects(id,row1,col1,objAttrib.Font.cells[env],objAttrib.Size.cellFont[env],objAttrib.Color.textCells[env]);
          this.setStyleRow(id,objAttrib.Border.styleHead[env],objAttrib.Color.bgMenuSel[env],objAttrib.Font.head[env],objAttrib.Size.headFont
          [env],objAttrib.Color.textTitle[env],row1,col1,0);
        }
      }
	  if(this.objects[id].loadBGImg)
	  {	
	    this.setBgBarImg(id, objAttrib.BgImg.barTitle[env]);
		this.setImgBarSelected(id, objAttrib.BgImg.bgSelected[env]);
	  }
    }
  },
  setEnableResize : function(id,row1,col1,h)
  {
    var divTabla = this.objects[id].bodyTable.rows[row1].cells[col1].firstChild;
    var isClick = false;
    var cell = powerGrids.getActSubCell(id);
    var row2 = powerGrids.getActSubRow(id);
    divTabla.tableContainer.rows[0].cells[0].onmouseover = function(e)
    {
      var cell = powerGrids.getActSubCell(id);
      var w = divTabla.tableCell.rows[0].cells[cell].offsetWidth+12;
      var x = divTabla.tableCell.rows[0].cells[cell].offsetLeft;
      powerGrids.getMouseXY(e);
      if(powerGrids.mouseX >= (x+w))
      {
        divTabla.tableContainer.style.cursor = "w-resize";
      }
    }
    divTabla.tableContainer.onmouseup = function(e)
    {
      isClick = false;
      divTabla.tableContainer.style.cursor = "default";
    }
    divTabla.onmouseup = function(e)
    {
      isClick = false;
      divTabla.tableContainer.style.cursor = "default";
    }
    divTabla.onmousedown = function(e)
    {
      cell = powerGrids.getActSubCell(id);
      row2 = powerGrids.getActSubRow(id);
    },
    divTabla.tableContainer.onmouseout = function(e)
    {
      divTabla.tableContainer.style.cursor = "default";
    }
    divTabla.tableControls.onmouseover = function(e)
    {
      isClick = false;
      divTabla.tableContainer.style.cursor = "default";
    },
    divTabla.tableControls.onmouseout = function(e)
    {
      isClick = false;
      divTabla.tableContainer.style.cursor = "default";
    },
    divTabla.tableControls.onmousemove = function(e)
    {
      isClick = false;
      divTabla.tableContainer.style.cursor = "default";
    },
    divTabla.tableContainer.onmousedown = function(e)
    {
      var cell = powerGrids.getActSubCell(id);
      var w = divTabla.tableCell.rows[0].cells[cell].offsetWidth+12;
      var h = divTabla.tableCell.rows[0].cells[cell].offsetHeight;
      var x = divTabla.tableCell.rows[0].cells[cell].offsetLeft;
      if(powerGrids.mouseX >= (x+w))
      {
        isClick = true;
      }
    }
    divTabla.tableContainer.onmousemove = function(e)
    {
      if(isClick)
      {
        divTabla.tableContainer.style.cursor = "w-resize";
        powerGrids.getMouseXY(e);
        var w = divTabla.tableCell.rows[0].cells[cell].offsetWidth+12;
        var x = divTabla.tableCell.rows[0].cells[cell].offsetLeft;
        var diff = powerGrids.mouseX - (w+x);
        var inc = w+diff;
        powerGrids.setSizeColumnElements(id,row1,col1,cell,inc,h);
        powerGrids.setSizeColumnSubCells(id,row1,col1,cell,inc,h);
      }
    }
  },
  setAllObjAttrib : function(objAttrib,env)
  {
    for(c = 0; c < this.ids.length; c++)
    {
      this.setObjAttrib(this.ids[c],objAttrib,env);
    }
  },
  setBgBarImg : function(id, bgImg)
  {
  	this.objects[id].tablePrinc.rows[0].cells[0].style.backgroundImage="url("+this.bgImgPath+bgImg+")";	
	var tRows = this.objects[id].bodyTable.rows.length;
	var tCols = this.objects[id].bodyTable.rows[0].cells.length;
	var divTabla = new Object();		
	for (i = 0; i < tRows; i++) 
	{
		for (j = 0; j < tCols; j++) 
		{
			divTabla = this.objects[id].bodyTable.rows[i].cells[j].firstChild;
			if (divTabla.tableControls != null) 
			{
				divTabla.tableControls.rows[0].cells[0].style.backgroundImage = "url(" + this.bgImgPath + bgImg + ")";
				divTabla.tableControls.rows[0].cells[1].style.backgroundImage = "url(" + this.bgImgPath + bgImg + ")";
				divTabla.tableControls.rows[0].cells[2].style.backgroundImage = "url(" + this.bgImgPath + bgImg + ")";
				divTabla.tableControls.rows[0].cells[3].style.backgroundImage = "url(" + this.bgImgPath + bgImg + ")";
				divTabla.tableControls.rows[0].cells[4].style.backgroundImage = "url(" + this.bgImgPath + bgImg + ")";
			}
		}
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
  }
}


