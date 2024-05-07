var tables= 
{
   objects : new Array,
   ids : new Array,   
   actualRow : 0,
   actualCol :0,
addPropertyMethod : function(id)
{
  tables.objects[id].addTableToCell  =  function(row,col,idOrg, idTarget)
  {
    tables.addTableToCell(row,col,idOrg, idTarget);
  }
  tables.objects[id].addObjToCell  =  function(row,col,obj)
  {
    tables.addObjToCell(id,row,col,obj);
  }
  tables.objects[id].addTextToCell  =  function(row,col,text)
  {
    tables.addTextToCell(id,row,col,text);
  }
  tables.objects[id].addToBody  =  function()
  {
    tables.addToBody(id);
  }
  tables.objects[id].addRows  =  function(numRows)
  {
    tables.addRows(id,numRows);
  }
  tables.objects[id].addRowAndData  =  function(dataVector)
  {
    tables.addRowAndData(id,dataVector);
  }
  tables.objects[id].addCols  =  function(row,numCols)
  {
    tables.addCols(id,row,numCols);
  }
  tables.objects[id].addCol  =  function(row,value)
  {
    tables.addCol(id,row,value);
  }
  tables.objects[id].addColsAndData  =  function(row,data)
  {
    tables.addColsAndData(id,row,data);
  }
  tables.objects[id].addRowsCols  =  function(numRows,numCols)
  {
    tables.addRowsCols(id,numRows,numCols);
  }
  tables.objects[id].addTextHead  =  function(texto)
  {
    tables.addTextHead(id,texto);
  }
  tables.objects[id].addDinamicTextToHead  =  function(texto)
  {
    tables.addDinamicTextToHead(id,texto);
  }
  tables.objects[id].addObjToHead  =  function(obj,col)
  {
    tables.addObjToHead(id,obj,col);
  }
  tables.objects[id].addObjsToHead  =  function(objs)
  {
    tables.addObjsToHead(id,objs);
  }
  tables.objects[id].addHeadAttr  =  function(attr,val)
  {
    tables.addHeadAttr(id,attr,val);
  }
	tables.objects[id].createRowsCols  =  function(f,c)
  {
    tables.createRowsCols(id,f,c);
  }
  tables.objects[id].createHead  =  function()
  {
    tables.createHead(id);
  }
  tables.objects[id].deleteObjectFromCell  =  function(row,col)
  {
    tables.deleteObjectFromCell(id,row,col);
  }
  tables.objects[id].delRow  =  function(row)
  {
    tables.delRow(id,row);
  }
  tables.objects[id].deleteAllRows  =  function()
  {
    tables.deleteAllRows(id);
  }
  tables.objects[id].fullCreate  =  function(heads,rows)
  {
    tables.fullCreate(id,heads,rows);
  }
  tables.objects[id].getRecordFromStructExtend  =  function(structObj,structId,row)
  {
    return tables.getRecordFromStructExtend(id,structObj,structId,row);
  }
  tables.objects[id].getObject  =  function()
  {
    return tables.getObject(id);
  }
  tables.objects[id].getWidthCell  =  function(row,col)
  {
    return tables.getWidthCell(id,row,col);
  }
  tables.objects[id].getTextFromCell  =  function(row,col)
  {
    return tables.getTextFromCell(id,row,col);
  }
  tables.objects[id].getObjectFromCell  =  function(row,col)
  {
    return tables.getObjectFromCell(id,row,col);
  }
  tables.objects[id].getRowNumber  =  function(objRow)
  {
    return tables.getRowNumber(objRow);
  }
  tables.objects[id].getColNumber  =  function(objRow)
  {
    return tables.getColNumber(objRow);
  }
  tables.objects[id].loadExtendStruct  =  function(structObj,structId)
  {
    tables.loadExtendStruct(id,structObj,structId);
  }
  tables.objects[id].loadMultiplexStruct  =  function(structObj,structId)
  {
    tables.loadMultiplexStruct(id,structObj,structId);
  }
  tables.objects[id].nextExtendStruct  =  function(structObj,structId)
  {
    tables.nextExtendStruct(id,structObj,structId);
  }
  tables.objects[id].nextExtendRecord  =  function(structObj,structId)
  {
    tables.nextExtendRecord(id,structObj,structId);
  }
  tables.objects[id].nextMultiplexStruct  =  function(structObj,structId)
  {
    tables.nextMultiplexStruct(id,structObj,structId);
  }
  tables.objects[id].nextMultiplexRecord  =  function(structObj,structId)
  {
    tables.nextMultiplexRecord(id,structObj,structId);
  }
  tables.objects[id].onClickRow  =  function(row,func)
  {
    tables.onClickRow(id,row,func);
  }
  tables.objects[id].onChangeRow  =  function(row,func)
  {
    tables.onChangeRow(id,row,func);
  }
  tables.objects[id].onBlurRow  =  function(row,func)
  {
    tables.onBlurRow(id,row,func);
  }
  tables.objects[id].onDblClickRow  =  function(row,func)
  {
    tables.onDblClickRow(id,row,func);
  }
  tables.objects[id].onFocusRow  =  function(row,func)
  {
    tables.onFocusRow(id,row,func);
  }
  tables.objects[id].onKeyDownRow  =  function(row,func)
  {
    tables.onKeyDownRow(id,row,func);
  }
  tables.objects[id].onKeyPressRow  =  function(row,func)
  {
    tables.onKeyPressRow(id,row,func);
  }
  tables.objects[id].onKeyUpRow  =  function(row,func)
  {
    tables.onKeyUpRow(id,row,func);
  }
  tables.objects[id].onMouseDownRow  =  function(row,func)
  {
    tables.onMouseDownRow(id,row,func);
  }
  tables.objects[id].onMouseMoveRow  =  function(row,func)
  {
    tables.onMouseMoveRow(id,row,func);
  }
  tables.objects[id].onMouseOutRow  =  function(row,func)
  {
    tables.onMouseOutRow(id,row,func);
  }
  tables.objects[id].onMouseOverRow  =  function(row,func)
  {
    tables.onMouseOverRow(id,row,func);
  }
  tables.objects[id].onMouseUpRow  =  function(row,func)
  {
    tables.onMouseUpRow(id,row,func);
  }
  tables.objects[id].onClickCell  =  function(row,col,func)
  {
    tables.onClickCell(id,row,col,func);
  }
  tables.objects[id].onChangeCell  =  function(row,col,func)
  {
    tables.onChangeCell(id,row,col,func);
  }
  tables.objects[id].onBlurCell  =  function(row,col,func)
  {
    tables.onBlurCell(id,row,col,func);
  }
  tables.objects[id].onDblClickCell  =  function(row,col,func)
  {
    tables.onDblClickCell(id,row,col,func);
  }
  tables.objects[id].onFocusCell  =  function(row,col,func)
  {
    tables.onFocusCell(id,row,col,func);
  }
  tables.objects[id].onKeyDownCell  =  function(row,col,func)
  {
    tables.onKeyDownCell(id,row,col,func);
  }
  tables.objects[id].onKeyPressCell  =  function(row,col,func)
  {
    tables.onKeyPressCell(id,row,col,func);
  }
  tables.objects[id].onKeyUpCell  =  function(row,col,func)
  {
    tables.onKeyUpCell(id,row,col,func);
  }
  tables.objects[id].onMouseDownCell  =  function(row,col,func)
  {
    tables.onMouseDownCell(id,row,col,func);
  }
  tables.objects[id].onMouseMoveCell  =  function(row,col,func)
  {
    tables.onMouseMoveCell(id,row,col,func);
  }
  tables.objects[id].onMouseOutCell  =  function(row,col,func)
  {
    tables.onMouseOutCell(id,row,col,func);
  }
  tables.objects[id].onMouseOverCell  =  function(row,col,func)
  {
    tables.onMouseOverCell(id,row,col,func);
  }
  tables.objects[id].onMouseUpCell  =  function(row,col,func)
  {
    tables.onMouseUpCell(id,row,col,func);
  }
  tables.objects[id].priorExtendStruct  =  function(structObj,structId)
  {
    tables.priorExtendStruct(id,structObj,structId);
  }
  tables.objects[id].priorExtendRecord  =  function(structObj,structId)
  {
    tables.priorExtendRecord(id,structObj,structId);
  }
  tables.objects[id].priorMultiplexRecord  =  function(structObj,structId)
  {
    tables.priorMultiplexRecord(id,structObj,structId);
  }
  tables.objects[id].priorMultiplexStruct  =  function(structObj,structId)
  {
    tables.priorMultiplexStruct(id,structObj,structId);
  }
  tables.objects[id].reLoadExtendStruct  =  function(structObj,structId)
  {
    tables.reLoadExtendStruct(id,structObj,structId);
  }
  tables.objects[id].reLoadMultiplexStruct  =  function(structObj,structId)
  {
    tables.reLoadMultiplexStruct(id,structObj,structId);
  }
  tables.objects[id].setRecord  =  function(row,record)
  {
    tables.setRecord(id,row,record);
  }
  tables.objects[id].setClassNameTable  =  function(extClass)
  {
    tables.setClassNameTable(id,extClass);
  }
  tables.objects[id].setClassNameCell  =  function(row,col,extClass)
  {
    tables.setClassNameCell(id,row,col,extClass);
  }
  tables.objects[id].setClassNameCellHead  =  function(col,extClass)
  {
    tables.setClassNameCellHead(id,col,extClass);
  }
  tables.objects[id].setClassNameRow  =  function(row,extClass)
  {
    tables.setClassNameRow(id,row,extClass);
  }
  tables.objects[id].setAttrCell  =  function(row,col,typesAttribs,valuesAttribs)
  {
    tables.setAttrCell(id,row,col,typesAttribs,valuesAttribs);
  }
  tables.objects[id].setAttrRow  =  function(row,typesAttribs,valuesAttribs)
  {
    tables.setAttrRow(id,row,typesAttribs,valuesAttribs);
  }
  tables.objects[id].setAttributes  =  function(typesAttribs,valuesAttribs)
  {
    tables.setAttributes(id,typesAttribs,valuesAttribs);
  }
  tables.objects[id].setBorderCell  =  function(row,col,val)
  {
    tables.setBorderCell(id,row,col,val);
  }
  tables.objects[id].setBorderRow  =  function(row,val)
  {
    tables.setBorderRow(id,row,val);
  }
  tables.objects[id].setColorRow  =  function(row,color)
  {
    tables.setColorRow(id,row,color);
  }
  tables.objects[id].setColorHead  =  function(colorHead)
  {
    tables.setColorHead(id,colorHead);
  }
  tables.objects[id].setColorTextCell  =  function(row,col,val)
  {
    tables.setColorTextCell(id,row,col,val);
  }
  tables.objects[id].setColorTextRow  =  function(row,value)
  {
    tables.setColorTextRow(id,row,value);
  }
  tables.objects[id].setFontCell  =  function(row,col,value,size,colorFont)
  {
    tables.setFontCell(id,row,col,value,size,colorFont);
  }
  tables.objects[id].setFontRow  =  function(row,value,size,fontColor)
  {
    tables.setFontRow(id,row,value,size,fontColor);
  }
  tables.objects[id].setFontStyleRow  =  function(row,s,w)
  {
    tables.setFontStyleRow(id,row,s,w);
  }
  tables.objects[id].setFontStyleCell  =  function(row,col,s,w)
  {
    tables.setFontStyleCell(id,row,col,s,w);
  }
  tables.objects[id].setWidthCell  =  function(row,col,value)
  {
    tables.setWidthCell(id,row,col,value);
  }
  tables.objects[id].setColSpan  =  function(row,col,value)
  {
    tables.setColSpan(id,row,col,value);
  }
  tables.objects[id].setRowSpan  =  function(row,col,value)
  {
    tables.setRowSpan(id,row,col,value);
  }
  tables.objects[id].setObjAttrib  =  function(objAttr,env)
  {
    tables.setObjAttrib(id,objAttr,env);
  }
  tables.objects[id].setObjAttribToAll  =  function(objAttrib,env)
  {
    tables.setObjAttribToAll(objAttrib,env);
  }
  tables.objects[id].setEventCell  =  function(row,col,e,indexEvent)
  {
    tables.setEventCell(id,row,col,e,indexEvent);
  }
  tables.objects[id].setEventRow  =  function(row,e,indexEvent)
  {
    tables.setEventRow(id,row,e,indexEvent);
  }
  tables.objects[id].setEventAllRow  =  function(e,indexEvent)
  {
    tables.setEventAllRow(id,e,indexEvent);
  }
  tables.objects[id].setHAlignCell  =  function(align,row,cell)
  {
    tables.setHAlignCell(id,align,row,cell);
  }
  tables.objects[id].setVAlignCell  =  function(align,row,cell)
  {
    tables.setVAlignCell(id,align,row,cell);
  }
  tables.objects[id].textAlignCell  =  function(row,col,align)
  {
    tables.textAlignCell(id,row,col,align);
  }
  tables.objects[id].setHeightRow = function(row,value)
  {
  	tables.setHeightRow(id,row,value)
  }
  tables.objects[id].removeObjInCell = function(row,col,obj)
  {
  	tables.removeObjInCell(id,row,col,obj);
  }
  tables.objects[id].setBgColorCell = function(row,col,color)
  {
  	tables.setBgColorCell(id,row,col,color);
  }
},
   addTableToCell : function(row,col,idOrg, idTarget)
   {
     this.objects[idTarget].rows[row].cells[col].appendChild(this.objects[idOrg]);                           
   },
   addObjToCell : function(id,row,col,obj)
   { 
     this.objects[id].rows[row].cells[col].appendChild(obj);                           
   }, 
   removeObjInCell : function(id,row,col,obj)
   { 
     this.objects[id].rows[row].cells[col].removeChild(obj);                           
   }, 
   addTextToCell : function(id,row,col,text)
   {
     this.objects[id].rows[row].cells[col].innerHTML = text;
   },
   addToBody : function(id)
   {
     document.body.appendChild(this.objects[id]);
   },
   addRows : function(id,numRows)
   {
     for(ix=0; ix<numRows; ix++)
     {
        l = this.objects[id].rows.length;
        this.objects[id].insertRow(l);  
     }
   },
   addRowAndData : function(id,dataVector)
   {
     l = this.objects[id].rows.length;
     this.objects[id].insertRow(l);  
     this.addColsAndData(id,l,dataVector);
   },
   addCols : function(id,row,numCols)
   {
     for(ix=0; ix<numCols; ix++)
     {
       this.addCol(id,row,'&nbsp');
       this.objects[id].rows[row].cells[ix].style.fontSize='0px';
     }
   },
   addCol : function(id,row,value)
   {
      var l =this.objects[id].rows[row].cells.length;
      this.objects[id].rows[row].insertCell(l);
      this.addTextToCell(id,row,l,value); 
   },
   addColsAndData : function(id,row,data)
   {
     for(ix=0; ix<data.length; ix++)
     {
       this.addCol(id,row,data[ix]);       
     }
   },
   addRowsCols : function(id,numRows,numCols)
   {
     this.addRows(id,numRows);
     for(cix=1; cix<=numRows; cix++)
     {
       this.addCols(id,cix,numCols);  
     }
   },
   addTextHead : function(id,texto)
   {
     col=this.objects[id].tHead.rows[0].cells.length;
     this.objects[id].tHead.rows[0].insertCell(col);
     this.objects[id].tHead.rows[0].cells[col].innerHTML=texto;
     this.setHeightRow(id,0,17);
   },
   addDinamicTextToHead : function(id,texto)
   {
     for(ix=0; ix<texto.length; ix++)
     {
       this.addTextHead(id,texto[ix]);
     }
   }, 
   addObjToHead : function(id,obj,col)
   {
     col=this.objects[id].tHead.rows[0].cells.length;
     this.objects[id].tHead.rows[0].insertCell(col);
     this.objects[id].tHead.rows[0].cells[col].appendChild(obj);
   },
   addObjsToHead : function(id,objs)
   {
     for(ix=0; ix<objs.length; ix++)
     {
       this.addObjToHead(id,obj[ix],ix);
     } 
   },
   addHeadAttr : function(id,attr,val)
   {
     this.objects[id].tHead.rows[0].setAttribute(attr,val);
   },
   create : function(id) 
   {
      this.objects[id]=document.createElement('table');
      this.objects[id].nameComponent = 'tables';
      this.objects[id].ambiente = attrib.getActualEnv();
      this.objects[id].id=id;
      this.objects[id].evenRowColor ='';
      this.objects[id].oddRowColor ='';
	  this.ids[this.ids.length] = id;
	  this.addPropertyMethod(id);
	  return this.objects[id];
   },
  createRowsCols : function(id,f,c)
  {
    var t = this.create(id);
    for(i=0; i<f; i++)
    {
      t.insertRow(i);
      for(j=0; j<c; j++)  
      t.rows[i].insertCell(j);
    }  
    return t;
  },
   createHead : function(id)
   {
     this.objects[id].createTHead(); 
     this.objects[id].tHead.insertRow(0);
     this.setHeightRow(id,0,17);
     if(attrib)
       this.setObjAttrib(id,attrib,attrib.getActualEnv());
   },
   deleteObjectFromCell : function(id,row,col)
   {
     this.objects[id].rows[row].cells[col].removeChild(this.objects[id]);
   },
      
   delRow : function(id,row)
   {
     this.objects[id].deleteRow(row);
   },
   
   deleteAllRows : function(id)
   { 
     l = this.objects[id].rows.length;
     for(j=1; j<=l; j++)
     {
       this.objects[id].delRow(id,1);
     }
   }, 
   fullCreate : function(id,heads,rows) 
   {
     this.create(id);
     this.createHead(id);
     this.addDinamicTextToHead(id,heads);
     this.addRowsCols(id,rows,heads.length);  
   },
   getRecordFromStructExtend : function(id,structObj,structId,row)
   {
     var structData = structObj.getObject(structId);
     var indexStruct = structData.itemPage*structData.pageSize + row-1;
     return structObj.extend.getRecordByPos(structId,indexStruct); 
   },
   getObject : function(id) 
   {
     return this.objects[id];
   },
   getWidthCell : function(id,row,col)
   {
     return this.objects[id].rows[row].cells[col].width;
   },
   getTextFromCell : function(id,row,col)
   {
     return this.objects[id].rows[row].cells[col].innerHTML;
   },
   getObjectFromCell : function(id,row,col)
   {
     return this.objects[id].rows[row].cells[col];
   },
   getRowNumber : function(objRow)
   {
     this.actualRow=objRow.x;
     return this.actualRow;
   },
   getColNumber : function(objRow)
   {
     this.actualCol = objRow.y;
     return this.actualCol;
   },
   loadExtendStruct : function(id,structObj,structId)
   { 
     var structData = structObj.getObject(structId);
     structData.itemPage=0; 
     this.createHead(id);
     this.addDinamicTextToHead(id,structData.fields); 
     var numRows = structObj.extend.rowCount(structId);
     if(numRows > structData.pageSize)
     {
       numRows = structData.pageSize
     }
     for(cix=1; cix<=numRows; cix++)
     {
       this.addRowAndData(id,structObj.extend.getRecordByPos(structId, cix-1));
     } 
   },
   loadMultiplexStruct : function(id,structObj,structId)
   { 
     var structData = structObj.getObject(structId);
     structData.itemPage=0; 
     structObj.create(structId,structData);     
     this.createHead(id);
     this.addDinamicTextToHead(id,structData.fields); 
     var numRows = structObj.extend.rowCount(structId);
     if(numRows > structData.pageSize)
     {
       numRows = structData.pageSize
     }
     for(cix=1; cix<=numRows; cix++)
     {  
       var x=structObj.multiplex.getArrayRecordByPos(structId, cix-1); 
       this.addRowAndData(id,x);
     } 
   },
   nextExtendStruct : function(id,structObj,structId)
   {
     var structData =structObj.getObject(structId);
     structData.itemPage++;  
     this.deleteAllRows(id);
     structObj.create(structId,structData);      
     var numRows = structObj.extend.rowCount(structId) - structData.itemPage*structData.pageSize;
       
     if(numRows > structData.pageSize)
     {
       numRows = structData.pageSize;
     }
     if(numRows <= 0)
     {
       structData.itemPage = 0;   
       numRows = structData.pageSize;
     }
     if(structObj.extend.rowCount(structId) < structData.pageSize)
     { 
       numRows=structObj.extend.rowCount(structId);
     }
     structData.offSetPage = structData.itemPage*structData.pageSize; 
     for(cix=1; cix<=numRows; cix++)
     {  
       this.addRowAndData(id,structObj.extend.getRecordByPos(structId, cix-1 + structData.itemPage*structData.pageSize));
     } 
   },
   nextExtendRecord : function(id,structObj,structId)
   { 
     var structData = structObj.getObject(structId);
     var numRows = structObj.extend.rowCount(structId); 
     var diff=numRows - structData.offSetPage; 
     if(diff > structData.pageSize || diff >= this.objects[id].rows.length)
     {
       structData.offSetPage++;
       var cont=0;
       for(cix=structData.offSetPage; cix < structData.offSetPage + structData.pageSize; cix++)
       { 
         cont++; 
         if(cont<this.objects[id].rows.length)
           this.setRecord(id,cont,structObj.extend.getRecordByPos(structId,cix));
       }  	
     } 
   },
   nextMultiplexStruct : function(id,structObj,structId)
   {
     var structData = structObj.getObject(structId);
     structData.itemPage++;  
     this.deleteAllRows(id);
     structObj.create(structId,structData);      
     var numRows = structObj.multiplex.rowCount(structId) - structData.itemPage*structData.pageSize;
     if(numRows > structData.pageSize)
     {
       numRows = structData.pageSize;
     }
     if(numRows <= 0)
     {
       structData.itemPage = 0;   
       numRows = structData.pageSize;
     }
     if(structObj.multiplex.rowCount(structId) < structData.pageSize)
     { 
       numRows=structObj.multiplex.rowCount(structId);
     }
     structData.offSetPage= structData.itemPage*structData.pageSize;   
     for(cix=1; cix<=numRows; cix++)
     { 
       this.addRowAndData(id,structObj.multiplex.getArrayRecordByPos(structId, cix-1 + structData.itemPage*structData.pageSize));
     } 
   },
   nextMultiplexRecord : function(id,structObj,structId)
   { 
     var structData = structObj.getObject(structId);
     var numRows = structObj.extend.rowCount(structId); 
     var diff=numRows - structData.offSetPage; 
     if(diff > structData.pageSize || diff >= this.objects[id].rows.length)
     {
       structData.offSetPage++;
       var cont=0;
       for(cix=structData.offSetPage; cix < structData.offSetPage + structData.pageSize; cix++)
       { 
         cont++; 
         if(cont<this.objects[id].rows.length)
           this.setRecord(id,cont,structObj.multiplex.getArrayRecordByPos(structId, cix));
       }  	
     } 
   },
   onClickRow : function(id,row,func)
   {
     this.objects[id].rows[row].onclick=new Function(func);    
     this.objects[id].rows[row].x=row; 
   },
   onChangeRow : function(id,row,func)
   {
     this.objects[id].rows[row].onchange=new Function(func);  
     this.objects[id].rows[row].x=row;
   },
   onBlurRow : function(id,row,func)
   {
     this.objects[id].rows[row].onblur=new Function(func);
     this.objects[id].rows[row].x=row;
   },
   onDblClickRow : function(id,row,func)
   {
     this.objects[id].rows[row].ondblclick=new Function(func); 
     this.objects[id].rows[row].x=row;
   }, 
   onFocusRow : function(id,row,func)
   {
     this.objects[id].rows[row].onfocus=new Function(func); 
     this.objects[id].rows[row].x=row;
   },
   onKeyDownRow : function(id,row,func)
   {
     this.objects[id].rows[row].onkeydown=new Function(func); 
     this.objects[id].rows[row].x=row;
   }, 
   onKeyPressRow : function(id,row,func)
   {
     this.objects[id].rows[row].onkeypress=new Function(func); 
     this.objects[id].rows[row].x=row;
   },
   onKeyUpRow : function(id,row,func)
   {
     this.objects[id].rows[row].onkeyup=new Function(func); 
     this.objects[id].rows[row].x=row;
   },
   onMouseDownRow : function(id,row,func)
   {
     this.objects[id].rows[row].onmousedown=new Function(func); 
     this.objects[id].rows[row].x=row;
   },
   onMouseMoveRow : function(id,row,func)
   {
     this.objects[id].rows[row].onmousemove=new Function(func); 
     this.objects[id].rows[row].x=row;
   },
   onMouseOutRow : function(id,row,func)
   {
     this.objects[id].rows[row].onmouseout=new Function(func); 
     this.objects[id].rows[row].x=row;
   },
   onMouseOverRow : function(id,row,func)
   {
     this.objects[id].rows[row].onmouseover=new Function(func); 
     this.objects[id].rows[row].x=row;
   },
   onMouseUpRow : function(id,row,func)
   {
     this.objects[id].rows[row].onmouseup=new Function(func); 
     this.objects[id].rows[row].x=row;
   },
   onClickCell : function(id,row,col,func)
   {
     this.objects[id].rows[row].cells[col].onclick=new Function(func); 
     this.objects[id].rows[row].cells[col].y=col;
     this.objects[id].rows[row].cells[col].x=row;
   }, 
   onChangeCell : function(id,row,col,func)
   {
     this.objects[id].rows[row].cells[col].onchange=new Function(func);  
     this.objects[id].rows[row].cells[col].y=col;
     this.objects[id].rows[row].cells[col].x=row;
   },
   onBlurCell : function(id,row,col,func)
   {
     this.objects[id].rows[row].cells[col].onblur=new Function(func);
     this.objects[id].rows[row].cells[col].y=col;
     this.objects[id].rows[row].cells[col].x=row;
   },
   onDblClickCell : function(id,row,col,func)
   {
     this.objects[id].rows[row].cells[col].ondblclick=new Function(func); 
     this.objects[id].rows[row].cells[col].y=col;
     this.objects[id].rows[row].cells[col].x=row;
   }, 
   onFocusCell : function(id,row,col,func)
   {
     this.objects[id].rows[row].cells[col].onfocus=new Function(func); 
     this.objects[id].rows[row].cells[col].y=col;
     this.objects[id].rows[row].cells[col].x=row;
   },
   onKeyDownCell : function(id,row,col,func)
   {
     this.objects[id].rows[row].cells[col].onkeydown=new Function(func); 
     this.objects[id].rows[row].cells[col].y=col;
     this.objects[id].rows[row].cells[col].x=row;
   }, 
   onKeyPressCell : function(id,row,col,func)
   {
     this.objects[id].rows[row].cells[col].onkeypress=new Function(func); 
     this.objects[id].rows[row].cells[col].y=col;
     this.objects[id].rows[row].cells[col].x=row;
   },
   onKeyUpCell : function(id,row,col,func)
   {
     this.objects[id].rows[row].cells[col].onkeyup=new Function(func); 
     this.objects[id].rows[row].cells[col].y=col;
     this.objects[id].rows[row].cells[col].x=row;
   },
   onMouseDownCell : function(id,row,col,func)
   {
     this.objects[id].rows[row].cells[col].onmousedown=new Function(func); 
     this.objects[id].rows[row].cells[col].y=col;
     this.objects[id].rows[row].cells[col].x=row;
   },
   onMouseMoveCell : function(id,row,col,func)
   {
     this.objects[id].rows[row].cells[col].onmousemove=new Function(func); 
     this.objects[id].rows[row].cells[col].y=col;
     this.objects[id].rows[row].cells[col].x=row;
   },
   onMouseOutCell : function(id,row,col,func)
   {
     this.objects[id].rows[row].cells[col].onmouseout=new Function(func); 
     this.objects[id].rows[row].cells[col].y=col;
     this.objects[id].rows[row].cells[col].x=row;
   },
   onMouseOverCell : function(id,row,col,func)
   {
     this.objects[id].rows[row].cells[col].onmouseover=new Function(func); 
     this.objects[id].rows[row].cells[col].y=col;  
     this.objects[id].rows[row].cells[col].x=row;
   },
   onMouseUpCell : function(id,row,col,func)
   {
     this.objects[id].rows[row].cells[col].onmouseup=new Function(func); 
     this.objects[id].rows[row].cells[col].y=col;
     this.objects[id].rows[row].cells[col].x=row;
   },
   priorExtendStruct : function(id,structObj,structId)
   {
      var structData = structObj.getObject(structId);
      structData.itemPage--;  
      this.deleteAllRows(id);
      structObj.create(structId,structData);       
      if(structData.itemPage < 0)
      {
         if(structObj.extend.rowCount(structId)==structData.pageSize)
         {    
           structData.itemPage = 0; 
         }
         else
         {
           structData.itemPage = Math.round(structObj.extend.rowCount(structId)/structData.pageSize);
           if(structData.itemPage >= structObj.extend.rowCount(structId)/structData.pageSize)
           {
             structData.itemPage--; 
           } 
         }  
      }
      var numRows = structObj.extend.rowCount(structId) - structData.itemPage*structData.pageSize; 
      if(numRows >= structData.pageSize)
      {
        numRows = structData.pageSize;
      }
      if(numRows < 0)
      {
        structData.itemPage = 0;   
        numRows = structData.pageSize;
      }
      if(structObj.extend.rowCount(structId) < structData.pageSize)
      { 
        numRows=structObj.extend.rowCount(structId);
      }
      structData.offSetPage = structData.itemPage*structData.pageSize; 
      for(cix=1; cix<=numRows; cix++)
      { 
        this.addRowAndData(id,structObj.extend.getRecordByPos(structId, cix-1 + structData.itemPage*structData.pageSize));
      } 
   },
   priorExtendRecord : function(id,structObj,structId)
   { 
     var structData = structObj.getObject(structId); 
     structData.offSetPage--;
     if(structData.offSetPage >= 0)
     {   
       var cont=0;
       for(cix=structData.offSetPage; cix < structData.offSetPage+ structData.pageSize; cix++)
       { 
         cont++;
         if(cont<this.objects[id].rows.length) 
           this.setRecord(id,cont,structObj.extend.getRecordByPos(structId,cix));
       }  	
     }
     else
     {
       structData.offSetPage=0;
     } 
   },
   priorMultiplexRecord : function(id,structObj,structId)
   { 
     var structData = structObj.getObject(structId);
     structData.offSetPage--;
     if(structData.offSetPage >= 0)
     { 
       var cont=0;
       for(cix=structData.offSetPage; cix < structData.offSetPage + structData.pageSize; cix++)
       { 
         cont++; 
         this.setRecord(id,cont,structObj.multiplex.getArrayRecordByPos(structId, cix));
       }  	
     }
     else
     {
       structData.offSetPage=0;
     } 
   },
   priorMultiplexStruct : function(id,structObj,structId)
   {
      var structData = structObj.getObject(structId);
      structData.itemPage--;  
      this.deleteAllRows(id);
      structObj.create(structId,structData);       
      if(structData.itemPage < 0)
      { 
         if(structObj.multiplex.rowCount(structId)==structData.pageSize)
         {
           structData.itemPage = 0;  
         }
         else
         {
           structData.itemPage = Math.round(structObj.multiplex.rowCount(structId)/structData.pageSize);
           if(structData.itemPage >= structObj.multiplex.rowCount(structId)/structData.pageSize)
           {
             structData.itemPage--;
           }
                     
         }  
      }
      var numRows = structObj.multiplex.rowCount(structId) - structData.itemPage*structData.pageSize; 
      if(numRows >= structData.pageSize)
      {
        numRows = structData.pageSize;
      }
      if(numRows < 0)
      {
        structData.itemPage = 0;   
        numRows = structData.pageSize;
      }
      if(structObj.multiplex.rowCount(structId) < structData.pageSize)
      { 
        numRows=structObj.multiplex.rowCount(structId);
      }
      structData.offSetPage= structData.itemPage*structData.pageSize;  
      for(cix=1; cix<=numRows; cix++)
      { 
        this.addRowAndData(id,structObj.multiplex.getArrayRecordByPos(structId, cix-1 + structData.itemPage*structData.pageSize));
      } 
   },
   reLoadExtendStruct : function(id,structObj,structId)
   {
      var structData=structObj.getObject(structId);
      structData.itemPage=0;  
      this.deleteAllRows(id);
      structObj.create(structId,structData);      
      var numRows = structObj.extend.rowCount(structId);
      if(numRows > structData.pageSize)
      {
        numRows = structData.pageSize;
      }
      for(cix=1; cix<=numRows; cix++)
      {
        this.addRowAndData(id,structObj.extend.getRecordByPos(structId, cix-1));
      } 
   },
   reLoadMultiplexStruct : function(id,structObj,structId)
   {
      var structData = structObj.getObject(structId);
      structData.itemPage=0;  
      this.deleteAllRows(id);
      structObj.create(structId,structData);      
      var numRows = structObj.multiplex.rowCount(structId);
      if(numRows > structData.pageSize)
      {
        numRows = structData.pageSize;
      }
      for(cix=1; cix<=numRows; cix++)
      {
        var x = structObj.multiplex.getArrayRecordByPos(structId, cix-1); 
        this.addRowAndData(id,x);
      } 
   },
   setRecord : function(id,row,record)
   {
     for(ix=0;ix<this.objects[id].rows[row].cells.length;ix++)
     {
       this.addTextToCell(id,row,ix,record[ix]);
     } 
   },
   setClassNameTable : function(id,extClass)
   {
     this.setAttributes(id,'className',extClass); 
   },
   setClassNameCell : function(id,row,col,extClass)
   {
     this.objects[id].rows[row].cells[col].style.className=extClass;
   },
   setClassNameCellHead : function(id,col,extClass)
   {
     this.objects[id].tHead.rows[0].cells[col].style.className=extClass;
   },
   setClassNameRow : function(id,row,extClass)
   {
     this.objects[id].rows[row].style.className=extClass;
   }, 
   setAttrCell : function(id,row,col,typesAttribs,valuesAttribs)
   {
     this.objects[id].rows[row].cells[col].setAttribute(typesAttribs,valuesAttribs);
   },
   setAttrRow : function(id,row,typesAttribs,valuesAttribs)
   {
     this.objects[id].rows[row].setAttribute(typesAttribs,valuesAttribs);
   }, 
   setAttributes : function(Id,typesAttribs,valuesAttribs)
   {                             
      this.objects[Id].setAttribute(typesAttribs,valuesAttribs);    
   },  
   setBorderCell : function(id,row,col,val)
   {
     this.objects[id].rows[row].cells[col].style.borderStyle=val;
   },
   setBorderRow : function(id,row,val)
   {
     for(ix=0; ix<this.objects[id].rows[row].cells.length; ix++)
     {
       this.setBorderCell(id,row,ix,val); 
     }
   },
   setColorRow : function(id,row,color)
   {
     this.setAttrRow(id,row,'bgColor',color);
   },
   setColorHead : function(id,colorHead)
   {
     this.addHeadAttr(id,'bgColor',colorHead); 
   },
   setColorTextCell : function(id,row,col,val)
   {
     this.objects[id].rows[row].cells[col].style.color=val;
   },
   setBgColorCell : function(id,row,col,color)
   {
     this.objects[id].rows[row].cells[col].style.backgroundColor=color;
   },
   setColorTextRow : function(id,row,value)
   {
     this.objects[id].rows[row].style.color=value;
   },
   setFontCell : function(id,row,col,value,size,colorFont)
   {
     this.objects[id].rows[row].cells[col].style.fontFamily=value;
     this.objects[id].rows[row].cells[col].style.fontSize=size+'px';
     this.setColorTextCell(id,row,col,colorFont);
   },
   setFontRow : function(id,row,value,size,fontColor)
   {
     this.objects[id].rows[row].style.fontFamily=value;
     this.objects[id].rows[row].style.fontSize=size+'px';  
     this.setColorTextRow(id,row,fontColor);
   },
   setFontStyleRow : function(id,row,s,w)
   {
     this.objects[id].rows[row].style.fontStyle=s;
     this.objects[id].rows[row].style.fontWeight=w;
   },
   setFontStyleCell : function(id,row,col,s,w)
   {
     this.objects[id].rows[row].cells[col].style.fontStyle=s;
     this.objects[id].rows[row].cells[col].style.fontWeight=w;
   },
   setWidthCell : function(id,row,col,value)
   {
     this.objects[id].rows[row].cells[col].style.width=value+'px';
   },
   setHeightRow : function(id,row,value)
   {
     this.objects[id].rows[row].style.height = value+'px';
   },
   setColSpan : function(id,row,col,value)  
   {
     this.objects[id].rows[row].cells[col].colSpan=value; 
   },
   setRowSpan : function(id,row,col,value)  
   {
     this.objects[id].rows[row].cells[col].rowSpan=value;  
   },
   setObjAttrib : function(id,objAttr,env)
   {
     this.setAttributes(id,'border',objAttr.Size.border[env]);
     this.setAttributes(id,'borderColor',objAttr.Color.border[env]);
     this.setAttributes(id,'cellSpacing',objAttr.Size.cellSpacing[env]);
     this.setAttributes(id,'cellPadding',objAttr.Size.cellPadding[env]);
     this.setColorHead(id,objAttr.Color.bgHeadCells[env]);   
     this.setBorderRow(id,'0',objAttr.Border.styleHead[env]);      
     this.setFontRow(id,0,objAttr.Font.head[env],objAttr.Size.headFont[env],objAttr.Color.textCells[env]);
     this.setFontStyleRow(id,0,objAttr.Font.styleHead[env],objAttr.Font.weightHead[env]);
     this.setColorTextRow(id,0,objAttr.Color.textHead[env]);
     var flag=1;
     for(iw=1;iw<this.objects[id].rows.length; iw++)
     {
       if(flag==1)
       {
         this.setAttrRow(id,iw,'bgColor',objAttr.Color.evenRow[env]);
         this.objects[id].evenRowColor = objAttr.Color.evenRow[env];
      
         flag=0;
       }
       else
       {
         this.setAttrRow(id,iw,'bgColor',objAttr.Color.oddRow[env]); 
         this.objects[id].oddRowColor = objAttr.Color.oddRow[env];
         flag=1;
       }
       this.setBorderRow(id,iw,objAttr.Border.styleRow[env]);      
       this.setFontRow(id,iw,objAttr.Font.cells[env],objAttr.Size.cellFont[env],objAttr.Color.textCells[env]);
       this.setFontStyleRow(id,iw,objAttr.Font.styleCells[env],objAttr.Font.weightCells[env]);
       this.setColorTextRow(id,iw,objAttr.Color.textCells[env]); 
     }     
   },
  setObjAttribToAll : function(objAttrib,env)
  {
    for(i=0;i<this.ids.length;i++)
    {
      this.setObjAttrib(this.ids[i],attrib,env);
    }	
},   
   setEventCell : function(id,row,col,e,indexEvent)
   {
     this.objects[id].rows[row].cells[col].onclick=e.onClick[indexEvent];
     this.objects[id].rows[row].cells[col].onchange=e.onChange[indexEvent];
     this.objects[id].rows[row].cells[col].onblur=e.onBlur[indexEvent];
     this.objects[id].rows[row].cells[col].ondblclick=e.onDblClick[indexEvent];
     this.objects[id].rows[row].cells[col].onfocus=e.onFocus[indexEvent];
     this.objects[id].rows[row].cells[col].onkeydown=e.onKeyDown[indexEvent];
     this.objects[id].rows[row].cells[col].onkeypress=e.onKeyPress[indexEvent];
     this.objects[id].rows[row].cells[col].onkeyup=e.onKeyUp[indexEvent];
     this.objects[id].rows[row].cells[col].onmousedown=e.onMouseDown[indexEvent];
     this.objects[id].rows[row].cells[col].onmousemove=e.onMouseMove[indexEvent];
     this.objects[id].rows[row].cells[col].onmouseout=e.onMouseOut[indexEvent];
     this.objects[id].rows[row].cells[col].onmouseover=e.onMouseOver[indexEvent];
     this.objects[id].rows[row].cells[col].onmouseup=e.onMouseUp[indexEvent];
     this.objects[id].rows[row].cells[col].x=row;
     this.objects[id].rows[row].cells[col].y=col;
   },
   setEventRow : function(id,row,e,indexEvent)
   { 
     for(iix=0; iix<this.objects[id].rows[row].cells.length; iix++)
     {      
       this.setEventCell(id,row,iix,e,indexEvent);
     }
   },
   setEventAllRow : function(id,e,indexEvent)
   {      
     for(ixx=1; ixx<this.objects[id].rows.length; ixx++)
     { 
       this.setEventRow(id,ixx,e,indexEvent);
     }
   },
  setHAlignCell : function(id,align,row,cell)
  {
  	this.objects[id].rows[row].cells[cell].align = align;
  },
  setVAlignCell : function(id,align,row,cell)
  {
  	this.objects[id].rows[row].cells[cell].vAlign = align;
  },  
  textAlignCell : function(id,row,col,align)
  {
  	this.objects[id].rows[row].cells[col].style.textAlign = align;
  }  
} 



