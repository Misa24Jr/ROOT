
var acordeon =
{
  objects : new Array,
  ids : new Array,
  NAME  : 'name',
  VALUE : 'value',
  TYPE  : 'type',
  CHECKED : 'checked',
  OPTION :'option', 
  bgImgPath :"images/bg/",

addPropertyMethod : function(id)
{
  this.objects[id].addToBody  =  function()
  {
    acordeon.addToBody(id);
  }
  this.objects[id].addExtObject  =  function(row,col,obj)
  {
    acordeon.addExtObject(id,row,col,obj);
  }
  this.objects[id].addObjToRow  =  function(Obj)
  {
    acordeon.addObjToRow(id,Obj);
  }
  this.objects[id].addRowElement  =  function(arrTitles)
  {
    acordeon.addRowElement(id,arrTitles);
  }
  this.objects[id].getObjectArray  =  function()
  {
    return acordeon.getObjectArray(id);
  }
  this.objects[id].getObject  =  function()
  {
    return acordeon.getObject(id);
  }
  this.objects[id].getIntObject  =  function()
  {
    return acordeon.getIntObject(id);
  }
  this.objects[id].getTotalCol  =  function()
  {
    return acordeon.getTotalCol(id);
  }
  this.objects[id].getTotalRow  =  function()
  {
    return acordeon.getTotalRow(id);
  }
  this.objects[id].getPropertyValueFromObject  =  function(row,col,property)
  {
    return acordeon.getPropertyValueFromObject(id,row,col,property);
  }
  this.objects[id].getObjectFromArray =  function(row,col)
  {
    return acordeon.getObjectFromArray(id,row,col);
  }
  this.objects[id].hideData  =  function()
  {
    acordeon.hideData(id);
  }
  this.objects[id].makeObject  =  function(row,col,element,type, value, name)
  {
    acordeon.makeObject(id,row,col,element,type, value, name);
  }
  this.objects[id].makeRowObjects  =  function(row,elements,types,totalObject)
  {
  	if(acordeon.objects[id].makeRowObjects.arguments.length > 4)
    {
      acordeon.makeRowObjects(id,row,elements,types,totalObject);
	}
	else
	{
	  acordeon.makeRowObjects(id,row,elements,types);
	}
  }
  this.objects[id].makeRowColObjects  =  function(totalRow,totalCol,element,type)
  {
    acordeon.makeRowColObjects(id,totalRow,totalCol,element,type);
  }
  this.objects[id].onClickObjCell  =  function(row,col,funct)
  {
    this.onClickObjCell(id,row,col,funct);
  }
  this.objects[id].onDblClickObjCell  =  function(row,col,funct)
  {
    acordeon.onDblClickObjCell(id,row,col,funct);
  }
  this.objects[id].onChangeObjCell  =  function(row,col,funct)
  {
    acordeon.onChangeObjCell(id,row,col,funct);
  }
  this.objects[id].onBlurObjCell  =  function(row,col,funct)
  {
    acordeon.onBlurObjCell(id,row,col,funct);
  }
  this.objects[id].onFocusObjCell  =  function(row,col,funct)
  {
    acordeon.onFocusObjCell(id,row,col,funct);
  }
  this.objects[id].onKeyDownObjCell  =  function(row,col,funct)
  {
    acordeon.onKeyDownObjCell(id,row,col,funct);
  }
  this.objects[id].onKeyPressObjCell  =  function(row,col,funct)
  {
    acordeon.onKeyPressObjCell(id,row,col,funct);
  }
  this.objects[id].onKeyUpObjCell  =  function(row,col,funct)
  {
    acordeon.onKeyUpObjCell(id,row,col,funct);
  }
  this.objects[id].onMouseDownObjCell  =  function(row,col,funct)
  {
    acordeon.onMouseDownObjCell(id,row,col,funct);
  }
  this.objects[id].onMouseUpObjCell  =  function(row,col,funct)
  {
    acordeon.onMouseUpObjCell(id,row,col,funct);
  }
  this.objects[id].onMouseOverObjCell  =  function(row,col,funct)
  {
    acordeon.onMouseOverObjCell(id,row,col,funct);
  }
  this.objects[id].onMouseOutObjCell  =  function(row,col,funct)
  {
    acordeon.onMouseOutObjCell(id,row,col,funct);
  }
  this.objects[id].onMouseMoveObjCell  =  function(row,col,funct)
  {
    acordeon.onMouseMoveObjCell(id,row,col,funct);
  }
  this.objects[id].setMsgTitle  =  function(msg)
  {
    acordeon.setMsgTitle(id,msg);
  }
  this.objects[id].setTotalCol  =  function(tc)
  {
    acordeon.setTotalCol(id,tc);
  }
  this.objects[id].setTitle  =  function(title)
  {
    acordeon.setTitle(id,title);
  }
  this.objects[id].setFontFamilyTitle  =  function(fontFamily)
  {
    acordeon.setFontFamilyTitle(id,fontFamily);
  }
  this.objects[id].setFontWeightTitle  =  function(fontW)
  {
    acordeon.setFontWeightTitle(id,fontW);
  }
  this.objects[id].setBorderColorTitle  =  function(borderColor)
  {
    acordeon.setBorderColorTitle(id,borderColor);
  }
  this.objects[id].setBgColorTitleOpen  =  function(color)
  {
    acordeon.setBgColorTitleOpen(id,color);
  }
  this.objects[id].setBgColorTitleClose  =  function(color)
  {
    acordeon.setBgColorTitleClose(id,color);
  }
  this.objects[id].setBGColorTitle  =  function(bgColor)
  {
    acordeon.setBGColorTitle(id,bgColor);
  }
  this.objects[id].setBGColorCell  =  function(row,cell,bgColor)
  {
    acordeon.setBGColorCell(id,row,cell,bgColor);
  }
  this.objects[id].setTitleArr  =  function(titleArr)
  {
    acordeon.setTitleArr(id,titleArr);
  }
  this.objects[id].setColorTitle  =  function(color)
  {
    acordeon.setColorTitle(id,color);
  }
  this.objects[id].setBorderStyleTitle  =  function(bs)
  {
    acordeon.setBorderStyleTitle(id,bs);
  }
  this.objects[id].setSize  =  function(size)
  {
    acordeon.setSize(id,size);
  }
  this.objects[id].setBgColorRow  =  function(row,bgColor)
  {
    acordeon.setBgColorRow(id,row,bgColor);
  }
  this.objects[id].setObjAttrib  =  function(objAttrib,env)
  {
    acordeon.setObjAttrib(id,objAttrib,env);
  }
  this.objects[id].setObjAttribToAll  =  function(objAttrib,env)
  {
    acordeon.setObjAttribToAll(objAttrib,env);
  }
  this.objects[id].setDoubleColorRows  =  function(colorA,colorB)
  {
    acordeon.setDoubleColorRows(id,colorA,colorB);
  }
  this.objects[id].setSizeCol  =  function(size,cell)
  {
    acordeon.setSizeCol(id,size,cell);
  }
  this.objects[id].setPosition  =  function(x,y)
  {
    acordeon.setPosition(id,x,y);
  }
  this.objects[id].setRelativePosition  =  function()
  {
    acordeon.setRelativePosition(id);
  }
  this.objects[id].showData  =  function()
  {
    acordeon.showData(id);
  }
  this.objects[id].spanExtAcordeon  =  function(idTarget,row,idSource)
  {
    acordeon.spanExtAcordeon(idTarget,row,idSource);
  }
  this.objects[id].setBgBarImg = function(barImg)
  {
  	acordeon.setBgBarImg(id, barImg) 
  } 
  this.objects[id].setLoadBGImg = function(activeLoad)
  {
	acordeon.setLoadBGImg(id, activeLoad);
  }
  this.objects[id].setLoadBGImgAll = function(activeLoad)
  {
	acordeon.setLoadBGImgAll(activeLoad);
  }
},

  addToBody : function(id)
  {
    document.body.appendChild(this.objects[id].table);
  },
  
  addExtObject : function(id,row,col,obj)
  {
    if(this.objects[id].objectArray.length <= row)
    {
      this.objects[id].objectArray[row]= new Object();
      this.objects[id].objectArray[row].col = new Array;
    }
    this.objects[id].objectArray[row].col[col]=obj;
  },
  
  addObjToRow : function(id,Obj)
  {
    var totalRowElement = this.objects[id].rowElements.rows.length;
    this.objects[id].rowElements.insertRow(totalRowElement);
    this.objects[id].rowElements.rows[totalRowElement].insertCell(0);
    this.objects[id].rowElements.rows[totalRowElement].cells[0].appendChild(Obj)
  },
  
  addRowElement : function(id,arrTitles)
  {
    switch(this.addRowElement.arguments.length)
    {
      case 1 : 
	  {
        var objectArray  = this.getObjectArray(id);
        var totalObjects = this.objects[id].totalCol;
        var i=0;
        var totalRowElement = this.objects[id].rowElements.rows.length;
        this.objects[id].rowElements.insertRow(totalRowElement);
        this.objects[id].rowElements.rows[totalRowElement].insertCell(0);
        this.objects[id].rowElements.rows[totalRowElement].cells[0].innerHTML=this.objects[id].arrTitles[totalRowElement];
        for(i=0; i<totalObjects; i++)
        {
          this.objects[id].rowElements.rows[totalRowElement].insertCell(this.objects[id].rowElements.rows[totalRowElement].cells.length);
          if(objectArray[totalRowElement].col[i]!=null)
          {
            this.objects[id].rowElements.rows[totalRowElement].cells[i+1].appendChild(objectArray[totalRowElement].col[i]);
            this.objects[id].rowElements.rows[totalRowElement].cells[i+1].align = "center";
          }
        }
      }
      case 2 : 
	  {
        var i=0;
        this.objects[id].arrTitles = arrTitles;
        for(i=0; i<arrTitles.length; i++)
        {
          var objectArray  = this.getObjectArray(id);
          var totalObjects = this.objects[id].totalCol;
          var j=0;
          var totalRowElement = this.objects[id].rowElements.rows.length;
          this.objects[id].rowElements.insertRow(totalRowElement);
          this.objects[id].rowElements.rows[totalRowElement].insertCell(0);
          this.objects[id].rowElements.rows[totalRowElement].cells[0].innerHTML=this.objects[id].arrTitles[totalRowElement];
          for(j=0; j<totalObjects; j++)
          {
            this.objects[id].rowElements.rows[totalRowElement].insertCell(this.objects[id].rowElements.rows
            [totalRowElement].cells.length);
            if(objectArray[totalRowElement].col[j]!=null)
            {
              this.objects[id].rowElements.rows[totalRowElement].cells[j+1].appendChild(objectArray[totalRowElement].col
              [j]);
              this.objects[id].rowElements.rows[totalRowElement].cells[j+1].align = "center";
            }
          }
        }
      }
    }
  },
  
  create : function(id, name, totalCol, msgTitle,expand)
  {
    this.objects[id] = new Object();
    this.objects[id].nameComponent = 'acordeon';
	this.ids[this.ids.length] = id;
	this.objects[id].loadBGImg = false;
    this.objects[id].msgOpen  = '';
    this.objects[id].msgClose = '';
	this.objects[id].colorTitleOpen = 'yellow';
    this.objects[id].colorTitleClose = 'white';
    this.objects[id].title = name;
    this.objects[id].msgTitle = msgTitle;
    this.objects[id].bgColorTitleOpen  = '#888888';
    this.objects[id].bgColorTitleClose = '#666666';
    this.objects[id].borderColorTitle  = '#888888';
	this.objects[id].borderStyleOpen  = 'inset';
	this.objects[id].borderStyleClose = 'outset';
    this.objects[id].isShow =expand;
    this.objects[id].container = document.createElement("div");
    this.objects[id].container.style.borderWidth ='1px';
    this.objects[id].objectArray = new Array;
    this.objects[id].divTitle = document.createElement("div");
    this.objects[id].divTitle.style.borderWidth ='1px';
    this.objects[id].table = document.createElement("table");
    this.objects[id].table.setAttribute("border","0");
    this.objects[id].table.setAttribute("cellPadding","0");
    this.objects[id].table.setAttribute("cellSpacing","0");
    this.objects[id].id = id;
    this.objects[id].totalCol = 1;
    this.objects[id].rowElements = document.createElement("table");
    this.objects[id].rowElements.setAttribute("border","0");
    this.objects[id].rowElements.setAttribute("cellPadding","0");
    this.objects[id].rowElements.setAttribute("cellSpacing","1");
    this.objects[id].table.insertRow(0);
    this.objects[id].table.rows[0].insertCell(0);
    this.objects[id].divTitle.innerHTML=this.objects[id].title;
    this.setColorTitle(id,'white');
    this.setBorderColorTitle(id,this.objects[id].borderColorTitle);
	this.objects[id].table.rows[0].cells[0].appendChild(this.objects[id].divTitle);
    this.objects[id].table.insertRow(1);
    this.objects[id].table.rows[1].insertCell(0);
    this.objects[id].container.appendChild(this.objects[id].rowElements);
    this.objects[id].table.rows[1].cells[0].appendChild(this.objects[id].container);
	this.objects[id].arrTitles = new Array;
    if(expand)
    {
	  acordeon.showData(id);
	  acordeon.setBGColorTitle(id,acordeon.objects[id].bgColorTitleOpen);
      acordeon.setColorTitle(id,acordeon.objects[id].colorTitleOpen);
      acordeon.setFontWeightTitle(id,'bold');
      acordeon.setMsgTitle(id,acordeon.objects[id].msgTitle);
	  acordeon.setBorderStyleTitle(id,acordeon.objects[id].borderStyleOpen);
    }
    else
    {
      acordeon.setBGColorTitle(id,this.objects[id].bgColorTitleClose);
      acordeon.hideData(id);
      acordeon.setTitle(id,this.objects[id].title);
	  acordeon.setBorderStyleTitle(id,this.objects[id].borderStyleClose);
    }
    this.objects[id].divTitle.onclick = function(e)
    {
      if(acordeon.objects[id].isShow)
      {
        acordeon.hideData(id);
        acordeon.setBGColorTitle(id,acordeon.objects[id].bgColorTitleClose);
        acordeon.setColorTitle(id,acordeon.objects[id].colorTitleClose);
        acordeon.setFontWeightTitle(id,'normal');
        acordeon.setTitle(id,acordeon.objects[id].title);
		acordeon.setBorderStyleTitle(id,acordeon.objects[id].borderStyleClose);
      }
      else
      {
        acordeon.showData(id);
        acordeon.setBGColorTitle(id,acordeon.objects[id].bgColorTitleOpen);
        acordeon.setColorTitle(id,acordeon.objects[id].colorTitleOpen);
        acordeon.setFontWeightTitle(id,'bold');
        acordeon.setMsgTitle(id,acordeon.objects[id].msgTitle);
		acordeon.setBorderStyleTitle(id,acordeon.objects[id].borderStyleOpen);
      }
    }
    this.objects[id].totalCol = totalCol;
	this.addPropertyMethod(id);
	if(attrib)
	  this.setObjAttrib(id, attrib,attrib.getActualEnv());
	return this.objects[id];
  },
  
  getObjectArray : function(id)
  {
    return this.objects[id].objectArray;
  },
  
  getObject : function(id)
  {
    return this.objects[id].table;
  },
  
  getIntObject : function(id)
  {
    return this.objects[id];
  },
  
  getTotalCol : function(id)
  {
  	return this.objects[id].totalCol;
  },
  
  getTotalRow : function(id)
  {
  	return this.objects[id].rowElements.rows.length;
  },
  
  getPropertyValueFromObject : function(id,row,col,property)
  {
    if(property==this.VALUE)
    {
      return this.objects[id].objectArray[row].col[col].value;
    }
    if(property==this.NAME)
    {
      return this.objects[id].objectArray[row].col[col].name;
    }
    if(property==this.TYPE)
    {
      return this.objects[id].objectArray[row].col[col].type;
    }
    if(property==this.CHECKED)
    {
      return this.objects[id].objectArray[row].col[col].checked;
    }
    if(property==this.OPTION)
    {
      return this.objects[id].objectArray[row].col[col].options;
    }
  },
  
  getObjectFromArray: function(id,row,col)
  {
    return this.objects[id].objectArray[row].col[col];
  },
  
  hideData : function(id)
  {
    this.objects[id].container.style.display="none";
    acordeon.objects[id].isShow=false;
  },
  
  makeObject : function(id,row,col,element,type, value, name)
  {
    if(element!="textNode")
    {
      if(element!="")
      {
        if(this.objects[id].objectArray.length <= row)
        {
          this.objects[id].objectArray[row]= new Object();
          this.objects[id].objectArray[row].col = new Array;
        }
        this.objects[id].objectArray[row].col[col] = document.createElement(element);
        this.objects[id].objectArray[row].col[col].type  = type;
        this.objects[id].objectArray[row].col[col].value = value;
        this.objects[id].objectArray[row].col[col].name  = name;
      }
    }
    else
    {
      if(this.objects[id].objectArray.length <= row)
      {
        this.objects[id].objectArray[row]= new Object();
        this.objects[id].objectArray[row].col = new Array;
      }
      this.objects[id].objectArray[row].col[col] = document.createTextNode(value);
    }
  },
  
  makeRowObjects : function(id,row,elements,types,totalObject)
  {
    var i=0;
    switch(this.makeRowObjects.arguments.length)
    {
      case 4 : 
	  {  
        for(i=0; i<elements.length; i++)
        {
          this.makeObject(id,row,i,elements[i],types[i],'',id+elements[i]+'['+row+','+i+']');
        }
      }
      case 5 : 
	  {  
        for(i=0; i<totalObject; i++)
        {
          this.makeObject(id,row,i,elements,types,'',id+elements+'['+row+','+i+']');
        }
      }
   }
},

makeRowColObjects : function(id,totalRow,totalCol,element,type)
{
var i=0;
var j=0;
for(i=0; i<totalRow; i++)
{
  for(j=0; j<totalCol; j++)
  {
    this.makeObject(id,i,j,element,type,'',element+'['+i+','+j+']');
  }
}
},

onClickObjCell : function(id,row,col,funct)
{
  this.objects[id].objectArray[row].col[col].onclick = new Function(funct);
},

onDblClickObjCell : function(id,row,col,funct)
{
  this.objects[id].objectArray[row].col[col].ondblclick = new Function(funct);
},

onChangeObjCell : function(id,row,col,funct)
{
  this.objects[id].objectArray[row].col[col].onchange = new Function(funct);
},

onBlurObjCell : function(id,row,col,funct)
{
  this.objects[id].objectArray[row].col[col].onblur = new Function(funct);
},

onFocusObjCell : function(id,row,col,funct)
{
  this.objects[id].objectArray[row].col[col].onfocus = new Function(funct);
},

onKeyDownObjCell : function(id,row,col,funct)
{
  this.objects[id].objectArray[row].col[col].onkeydown = new Function(funct);
},

onKeyPressObjCell : function(id,row,col,funct)
{
  this.objects[id].objectArray[row].col[col].onkeypress = new Function(funct);
},

onKeyUpObjCell : function(id,row,col,funct)
{
  this.objects[id].objectArray[row].col[col].onkeyup = new Function(funct);
},

onMouseDownObjCell : function(id,row,col,funct)
{
  this.objects[id].objectArray[row].col[col].onmousedown = new Function(funct);
},

onMouseUpObjCell : function(id,row,col,funct)
{
  this.objects[id].objectArray[row].col[col].onmouseup = new Function(funct);
},

onMouseOverObjCell : function(id,row,col,funct)
{
  this.objects[id].objectArray[row].col[col].onmouseover = new Function(funct);
},

onMouseOutObjCell : function(id,row,col,funct)
{
  this.objects[id].objectArray[row].col[col].onmouseout = new Function(funct);
},

onMouseMoveObjCell : function(id,row,col,funct)
{
  this.objects[id].objectArray[row].col[col].onmousemove = new Function(funct);
},

setMsgTitle : function(id,msg)
{
  if(msg != '')
  {
    this.objects[id].divTitle.innerHTML = this.objects[id].title+'  -  '+msg;
  }
},

setTotalCol : function(id,tc)
{
  this.objects[id].totalCol = tc;
},

setTitle : function(id,title)
{
  this.objects[id].divTitle.innerHTML = title;
},

setFontFamilyTitle : function(id,fontFamily)
{
  this.objects[id].divTitle.style.fontFamily = fontFamily;
},

setFontWeightTitle : function(id,fontW)
{
  this.objects[id].divTitle.style.fontWeight = fontW;
},

setBorderColorTitle : function(id,borderColor)
{
  this.objects[id].divTitle.style.borderColor = borderColor;
},

setBgColorTitleOpen : function(id,color)
{
  acordeon.objects[id].bgColorTitleOpen = color;
},

setBgColorTitleClose : function(id,color)
{
  acordeon.objects[id].bgColorTitleClose = color;
},

setBGColorTitle : function(id,bgColor)
{
  this.objects[id].divTitle.style.backgroundColor=bgColor;
},

setBGColorCell : function(id,row,cell,bgColor)
{
  this.objects[id].rowElements.rows[row].cells[cell].style.backgroundColor=bgColor;
},

setTitleArr : function(id,titleArr)
{
  this.objects[id].arrTitles=titleArr;
},

setColorTitle : function(id,color)
{
  this.objects[id].divTitle.style.color = color;
},

setBorderStyleTitle : function(id,bs)
{
  this.objects[id].divTitle.style.borderStyle=bs;
},

setSize : function(id,size)
{
  this.objects[id].divTitle.style.width = size+'px';
},

setBgColorRow : function(id,row,bgColor)
{
  for(i=0; i<this.objects[id].rowElements.rows[row].cells.length; i++)
  {
    this.setBGColorCell(id,row,i,bgColor);
  }
},

setObjAttrib : function(id,objAttrib,env)
{
	this.objects[id].loadBGImg = objAttrib.getLoadBGImg();
	this.objects[id].colorTitleOpen = objAttrib.Color.bgHeadCells[env];
	this.objects[id].colorTitleClose = objAttrib.Color.textTitle[env];
    
	this.objects[id].bgColorTitleOpen  = objAttrib.Color.bgSelect[env];
    this.objects[id].bgColorTitleClose = objAttrib.Color.bgBarraTitle[env];
    this.objects[id].borderColorTitle  = objAttrib.Color.bgSelect[env];
	
	this.setDoubleColorRows(id,objAttrib.Color.oddRow[env],objAttrib.Color.evenRow[env]);
	this.setBorderStyleTitle(id,objAttrib.Border.styleHead[env]);
	this.setColorTitle(id,objAttrib.Color.textTitle[env]);	
	this.setFontFamilyTitle(id,objAttrib.Font.head[env]);
	this.setBGColorTitle(id,this.objects[id].bgColorTitleClose);
	if(this.objects[id].isShow)
    {
	  acordeon.setBGColorTitle(id,acordeon.objects[id].bgColorTitleOpen);
      acordeon.setColorTitle(id,acordeon.objects[id].colorTitleOpen);
      acordeon.setFontWeightTitle(id,'bold');
	  acordeon.setBorderStyleTitle(id,acordeon.objects[id].borderStyleOpen);
    }
    else
    {
      acordeon.setBGColorTitle(id,this.objects[id].bgColorTitleClose);
	  acordeon.setBorderStyleTitle(id,this.objects[id].borderStyleClose);
    }
	if(this.objects[id].loadBGImg)
	{	
	  acordeon.setBgBarImg(id, objAttrib.BgImg.barTitle[env]); 
	}
},

setObjAttribToAll : function(objAttrib,env)
{
  for(j=0;j<this.ids.length;j++)
    this.setObjAttrib(this.ids[j],attrib,env);	
},

setDoubleColorRows : function(id,colorA,colorB)
{
  var flag = true;
  var cant = this.objects[id].rowElements.rows.length;
  var c=0;
  for(c=0; c<cant; c++)
  {
    if(flag)
    {
      flag = false;
      this.setBgColorRow(id,c,colorA);
    }
    else
    {
      flag = true;
      this.setBgColorRow(id,c,colorB);
    }
  }
},
setSizeCol : function(id,size,cell)
{
  this.objects[id].rowElements.rows[0].cells[cell].style.width = size+"px";
},
setPosition : function(id,x,y)
{
  this.objects[id].table.style.position = 'absolute';
  this.objects[id].table.style.left = x+'px';
  this.objects[id].table.style.top = y+'px';
},
setRelativePosition : function(id)
{
  this.objects[id].table.style.position = 'relative';
},
showData : function(id)
{
  this.objects[id].container.style.display="block";
  acordeon.objects[id].isShow=true;  
},
spanExtAcordeon : function(idTarget,row,idSource)
{
  acordeon.getIntObject(idTarget).rowElements.rows[row].cells[0].appendChild(acordeon.getIntObject(idSource).table);
  acordeon.getIntObject(idTarget).rowElements.rows[row].cells[0].colSpan = acordeon.getIntObject(idTarget).rowElements.rows[1].cells.length;
},
setBgBarImg : function(id, barImg) 
{
  this.objects[id].divTitle.style.backgroundImage="url("+this.bgImgPath+barImg+")";
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

