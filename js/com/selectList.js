var selectList =
{
  objects : new Array,
  ids : new Array,
  bgImgPath :"images/bg/",
addPropertyMethod : function(id)
{
  selectList.objects[id].setFieldFind = function(fieldFind)
  {
    selectList.setFieldFind(id,fieldFind);
  } 
  selectList.objects[id].getFieldFind = function()
  {
    return selectList.getFieldFind(id);
  }   
  selectList.objects[id].addToBody  =  function()
  {
    selectList.addToBody(id);
  }
  selectList.objects[id].addLns  =  function(textArr,idArray,arraySelected)
  {
    selectList.addLns(id,textArr,idArray,arraySelected);
  }
  selectList.objects[id].addLn  =  function(text,iDat)
  {
    selectList.addLn(id,text,iDat);
  }
  selectList.objects[id].delLn  =  function(ln)
  {
    selectList.delLn(id,ln);
  }
  selectList.objects[id].delSelectedLn  =  function()
  {
    selectList.delSelectedLn(id);
  }
  selectList.objects[id].getCurrentChecked  =  function()
  {
    selectList.getCurrentChecked(id);
  }
  selectList.objects[id].getRecordSelected  =  function()
  {
    return selectList.getRecordSelected(id);
  }
  selectList.objects[id].getRecordIdSelected  =  function()
  {
    return selectList.getRecordIdSelected(id);
  }
  selectList.objects[id].getArraySelected  =  function()
  {
    return selectList.getArraySelected(id);
  }
  selectList.objects[id].getArrayIdSelected  =  function()
  {
    return selectList.getArrayIdSelected(id);
  }
  selectList.objects[id].getObject  =  function()
  {
    return selectList.getObject(id);
  }
  selectList.objects[id].hide  =  function()
  {
    selectList.hide(id);
  }
  selectList.objects[id].onClick  =  function(funct)
  {
    selectList.onClick(id,funct);
  }
  selectList.objects[id].setPosition  =  function(x,y)
  {
    selectList.setPosition(id,x,y);
  }
  selectList.objects[id].setRelativePosition  =  function()
  {
    selectList.setRelativePosition(id);
  }
  selectList.objects[id].setBgColor  =  function(color)
  {
    selectList.setBgColor(id,color);
  }
  selectList.objects[id].setTitleBgColor  =  function(color)
  {
    selectList.setTitleBgColor(id,color);
  }
  selectList.objects[id].setBorderColor  =  function(color)
  {
    selectList.setBorderColor(id,color);
  }
  selectList.objects[id].setTextColor  =  function(color)
  {
    selectList.setTextColor(id,color);
  }
  selectList.objects[id].setTextTitleColor  =  function(color)
  {
    selectList.setTextTitleColor(id,color);
  }
  selectList.objects[id].setFont  =  function(family,color,size)
  {
    selectList.setFont(id,family,color,size);
  }
  selectList.objects[id].show  =  function()
  {
    selectList.show(id);
  }
  selectList.objects[id].setObjAttrib  =  function(objAttr,env)
  {
    selectList.setObjAttrib(id,objAttr,env);
  }
  selectList.objects[id].setObjAttribToAll  =  function(objAttrib,env)
  {
    selectList.setObjAttribToAll(objAttrib,env);
  }
  selectList.objects[id].setChecksOn  =  function()
  {
    selectList.setChecksOn(id);
  }
  selectList.objects[id].setChecksOff  =  function()
  {
    selectList.setChecksOff(id);
  }
  selectList.objects[id].setLoadBGImg = function(activeLoad)
  {
    selectList.setLoadBGImg(id, activeLoad);
  }
  selectList.objects[id].setLoadBGImgAll = function(activeLoad)
  {
	selectList.setLoadBGImgAll(activeLoad);
  }
  selectList.objects[id].setBgBarImg = function(bgImg)
  {
  	selectList.setBgBarImg(id, bgImg);
  }
  selectList.objects[id].setImgBarSelected = function(imgBarSelected)
  {
  	selectList.setImgBarSelected(id, imgBarSelected);
  }
  selectList.objects[id].setSizeTextTitle = function(size)
  {
    selectList.setSizeTextTitle(id,size);
  }
  selectList.objects[id].deleteAll = function()
  {
  	selectList.deleteAll(id);
  }
  selectList.objects[id].getCheckObj = function(ln)
  {
  	return selectList.getCheckObj(id,ln);
  }
  selectList.objects[id].getIdData = function(ln)
  {
  	return selectList.getIdData(id,ln);
  }
  selectList.objects[id].getCheckObjArray = function()
  {
  	return selectList.getCheckObjArray(id);
  }
  selectList.objects[id].setSeparator = function(separator)
  {
    selectList.setSeparator(id, separator);
  } 
  selectList.objects[id].getText  =  function()
  {
    return selectList.getText(id);
  }
  selectList.objects[id].setCheckOff = function(pos)
  {
    selectList.setCheckOff(id, pos);  
  }
  selectList.objects[id].setCheckOn = function(pos)
  {
    selectList.setCheckOn(id, pos);  
  }
},
  addToBody : function(id)
  {
    document.body.appendChild(this.objects[id]);
  },
  addLns : function(id,textArr,idArray,arraySelected)
  {
    for(i=0; i<textArr.length; i++)
    {
      if(idArray)	
        this.addLn(id,textArr[i],idArray[i])
      else
        this.addLn(id,textArr[i],'none');
      if(arraySelected)
        if (parseInt(arraySelected[i],10))
          this.setCheckOn(id,i);
    }
  },
  addLn : function(id,text,iDat)
  {
  	if(iDat!=null)
  	  this.objects[id].iData[this.objects[id].iData.length] = iDat
  	else
  	  this.objects[id].iData[this.objects[id].iData.length] = 'none'
    var pos = this.objects[id].table.rows.length;
    this.objects[id].table.insertRow(pos);
    this.objects[id].table.rows[pos].insertCell(0);
    this.objects[id].table.rows[pos].insertCell(1);
    var pos2 = this.objects[id].checks.length;
    this.objects[id].checks[pos2]=document.createElement("input");
    this.objects[id].checks[pos2].type = "checkBox";
    this.objects[id].checks[pos2].id ="selectList_"+id+'_'+pos2;
    this.objects[id].table.rows[pos].cells[0].appendChild(this.objects[id].checks[pos2]);
    this.objects[id].table.rows[pos].cells[1].innerHTML=text;
    this.objects[id].table.rows[pos].cells[1].style.width = this.objects[id].widthSelectList+"px";
    this.objects[id].rowCount++;
	this.objects[id].checks[pos2].onclick = function()
	{
		if(selectList.objects[id].checks[pos2].checked)
		{
		  selectList.objects[id].selected = selectList.objects[id].table.rows[pos].cells[1].innerHTML;
		}
		selectList.objects[id].onClickFunct();  
	}
  },
  create : function(id,height,width,title)
  {
    this.objects[id] = document.createElement("div");
    this.objects[id].iData = new Array();
    this.objects[id].separator = ',';
    this.objects[id].fieldFind = false;
    this.objects[id].nameComponent = 'selectList';
	this.objects[id].imgBarSelected = "";
	this.objects[id].loadBGImg = false;
	this.objects[id].selected="";
	this.objects[id].onClickFunct = new Function("");
	this.ids[this.ids.length] = id;
	this.objects[id].id = id;
    this.objects[id].widthSelectList = width;
    this.objects[id].style.position = "absolute";
    this.objects[id].tablePrinc = document.createElement("table");
    this.objects[id].tablePrinc.setAttribute("border","1");
    this.objects[id].tablePrinc.setAttribute("cellPadding","0");
    this.objects[id].tablePrinc.setAttribute("cellSpacing","0");
    this.objects[id].tablePrinc.insertRow(0);
    this.objects[id].tablePrinc.insertRow(1);
    this.objects[id].tablePrinc.rows[0].insertCell(0);
    this.objects[id].tablePrinc.rows[1].insertCell(0);
    this.objects[id].tableTitle = document.createElement("table");
    this.objects[id].tableTitle.setAttribute("border","0");
    this.objects[id].tableTitle.setAttribute("cellPadding","0");
    this.objects[id].tableTitle.setAttribute("cellSpacing","0");
    this.objects[id].tableTitle.insertRow(0);
    this.objects[id].tableTitle.rows[0].insertCell(0);
    this.objects[id].tableTitle.rows[0].insertCell(1);
    this.objects[id].tableTitle.rows[0].cells[0].style.width='20px';
    this.objects[id].tableTitle.rows[0].cells[1].style.width=width+'px';
    this.objects[id].tableTitle.rows[0].cells[1].align='center';
    this.objects[id].checkTodos = document.createElement("input");
    this.objects[id].checkTodos.type="checkbox";
    this.objects[id].checkTodos.onclick = function()
    {
      if(!selectList.objects[id].checkTodos.checked)
      {
      	selectList.setChecksOff(id);
	    selectList.objects[id].onClickFunct();
      }	
      else
      {
        selectList.setChecksOn(id);
	  	selectList.objects[id].onClickFunct();	
      }      
    }

    this.objects[id].tableTitle.rows[0].cells[0].appendChild(this.objects[id].checkTodos);
    this.objects[id].tableTitle.rows[0].cells[1].appendChild(document.createTextNode(title));
    this.objects[id].tablePrinc.rows[0].cells[0].appendChild(this.objects[id].tableTitle);
    this.objects[id].tablePrinc.rows[0].cells[0].setAttribute("align","left");
    this.objects[id].table = document.createElement("table");
    this.objects[id].table.setAttribute("border","0");
    this.objects[id].table.setAttribute("cellPadding","1");
    this.objects[id].table.setAttribute("cellSpacing","0");
    this.objects[id].checks = new Array;
    this.objects[id].divInferior = document.createElement("div");
    this.objects[id].divInferior.style.overflow = "auto";
    this.objects[id].divInferior.style.height = height+"px";
    this.objects[id].divInferior.appendChild(this.objects[id].table);
    this.objects[id].tablePrinc.rows[1].cells[0].appendChild(this.objects[id].divInferior);
    this.objects[id].appendChild(this.objects[id].tablePrinc);
    this.objects[id].rowCount = 0;
    this.setBgColor(id,"#bebebe");
    this.setTitleBgColor(id,"#0000aa");
    this.setTextTitleColor(id,"white");
    this.setBorderColor(id,"#bebebe");
    this.setFont(id,"verdana","black",12);
	this.addPropertyMethod(id);
	if(attrib)
      this.setObjAttrib(id,attrib,attrib.getActualEnv());
	return this.objects[id];
  },
  delLn : function(id,ln)
  {
    if((ln>=0) && (ln<=this.objects[id].table.rows.length))
    {
      for(i=ln; i<this.objects[id].table.rows.length-1;i++)
      {
        this.objects[id].checks[i].checked = this.objects[id].checks[i+1].checked;
        this.objects[id].table.rows[i].cells[1].innerHTML = this.objects[id].table.rows[i+1].cells[1].innerHTML;
        this.objects[id].iData[i]=this.objects[id].iData[i+1];
      }
      var l = this.objects[id].table.rows.length;
      this.objects[id].table.rows[l-1].cells[0].removeChild(this.objects[id].checks[l-1]);
      this.objects[id].table.deleteRow(l-1);
      this.objects[id].checks.splice(l-1, 1);
      this.objects[id].iData.splice(l-1, 1);
    }
  },
  deleteAll : function(id)
  {
    selectList.setChecksOn(id);
    selectList.delSelectedLn(id);
  },
  delSelectedLn : function(id)
  {
    for(j=0; j<this.objects[id].table.rows.length;j++)
    {
      if(this.objects[id].checks[j].checked)
      {
        this.delLn(id,j);
        this.objects[id].rowCount--;
        if(this.objects[id].rowCount<0)
        {
          this.objects[id].rowCount=0;
        }
        j--;
      }
    }
    if((j>0) && (this.objects[id].checks[j-1].checked))
    {
      this.delLn(id,j);
      this.objects[id].rowCount--;
      if(this.objects[id].rowCount<0)
      {
        this.objects[id].rowCount=0;
      }
    }
  },
  getCurrentChecked : function(id)
  {
  	 return this.objects[id].selected;
  },
  getRecordSelected : function(id)
  {
    var a = new Array;
    var txt = "";
    for(i=0; i<this.objects[id].checks.length; i++)
    {
      
      if(this.objects[id].checks[i].checked)
      {
        txt += "'" + this.objects[id].table.rows[i].cells[1].innerHTML + "',";
      }
    }
    txt = txt.substring(0,txt.length-1);
    return txt;
  },
  getRecordIdSelected : function(id)
  {
    var a = new Array;
    var txt = "";
    for(i=0; i<this.objects[id].checks.length; i++)
    {
      if(this.objects[id].checks[i].checked)
      {
        txt +=this.objects[id].iData[i] + ",";
      }
    }
    txt = txt.substring(0,txt.length-1);
    return txt;
  },
  getArraySelected : function(id)
  {
    var a = new Array;
	var cont =0;
    for(i=0; i<this.objects[id].checks.length; i++)
    {
      if(this.objects[id].checks[i].checked)
      {
        a[cont] = this.objects[id].table.rows[i].cells[1].innerHTML;
		cont++;
      }
    }
    return a;
  }, 
   getText : function(id)
   {
     var str = '';
     var arrData = this.getArraySelected(id);
     for(j=0; j<arrData.length;j++)
     {
       if (j==0)
       {
         str = arrData[j];
       }     
       else
       {
         str += this.objects[id].separator+arrData[j];
       }
     }
     return str;
   },
  getArrayIdSelected : function(id)
  {
    var a = new Array;
	var cont =0;
    for(i=0; i<this.objects[id].checks.length; i++)
    {
      if(this.objects[id].checks[i].checked)
      {
        a[cont] = this.objects[id].iData[i];
		cont++;
      }
    }
    return a;
  },  
 
  getCheckObj : function(id,ln)
  {
    return this.objects[id].checks[ln];
  },
  getIdData : function(id,ln)
  {
    return this.objects[id].iData[ln];
  },
  getCheckObjArray : function(id)
  {
    return this.objects[id].checks;
  },
  getObject : function(id)
  {
    return this.objects[id];
  },
  hide : function(id)
  {
    this.objects[id].style.display = 'none';
  },
  
  onClick : function(id,funct)
  {
    selectList.objects[id].onClickFunct = new Function(funct);	
  },
  setSeparator : function(id, separator) 
  {
    this.objects[id].separator = separator;
  },
  setPosition : function(id,x,y)
  {
  	this.objects[id].style.position = "absolute";
	this.objects[id].style.left = x+"px";
	this.objects[id].style.top = y+"px";
  },
  setRelativePosition : function(id)
  {
  	this.objects[id].style.position = "relative";
  },
  setBgColor : function(id,color)
  {
    this.objects[id].table.style.backgroundColor = color;
    this.objects[id].tablePrinc.rows[1].cells[0].style.backgroundColor = color;
  },
  setSizeTextTitle : function(id,size)
  {
    this.objects[id].tablePrinc.rows[0].cells[0].style.fontSize = size+'px';
  },
  setTitleBgColor : function(id,color)
  {
    this.objects[id].tablePrinc.rows[0].cells[0].style.backgroundColor = color;
  },
  setBorderColor : function(id,color)
  {
    this.objects[id].table.style.borderColor = color;
  },
  setTextColor : function(id,color)
  {
    this.objects[id].table.style.color = color;
  },
  setTextTitleColor : function(id,color)
  {
    this.objects[id].tablePrinc.rows[0].cells[0].style.color = color;
  },
  setFont : function(id,family,color,size)
  {
    this.objects[id].table.style.fontFamily = family;
    this.objects[id].table.style.color = color;
    this.objects[id].table.style.fontSize = size+"px";
  },
  show : function(id)
  {
    this.objects[id].style.display = 'block';
  },
  setObjAttrib : function(id,objAttr,env)
  {
	this.objects[id].loadBGImg = objAttr.getLoadBGImg();
    this.setBgColor(id,objAttr.Color.bgSelectedList[env]);
    this.setTitleBgColor(id,objAttr.Color.bgBarraTitle[env]);
    this.setTextTitleColor(id,objAttr.Color.textTitle[env]);
    this.setBorderColor(id,objAttr.Color.borderSelectList[env]);
    this.setFont(id,objAttr.Font.selectList[env],objAttr.Color.textCells[env],objAttr.Size.cellFont[env]);
    this.setSizeTextTitle(id,objAttr.Size.headFont[env]);
    if(this.objects[id].loadBGImg)
	  this.setBgBarImg(id, objAttr.BgImg.barTitle[env]);
  },
  setObjAttribToAll : function(objAttrib,env)
  {
    for(i=0;i<this.ids.length;i++)
    {
      this.setObjAttrib(this.ids[i],attrib,env);
    }	
},  
  setChecksOn : function(id)
  {
    for(i=0; i<this.objects[id].checks.length; i++)
    {
      this.objects[id].checks[i].checked = true;
    }
  },
  setCheckOn : function(id, pos)
  {
    this.objects[id].checks[pos].checked = true;
  },
  setChecksOff : function(id)
  {
    for(i=0; i<this.objects[id].checks.length; i++)
    {
      this.objects[id].checks[i].checked = false;
    }
  },
  setCheckOff : function(id, pos)
  {
    this.objects[id].checks[pos].checked = false;
  },
  setBgBarImg : function(id, bgImg)
  {
  	this.objects[id].tablePrinc.rows[0].cells[0].style.backgroundImage="url("+this.bgImgPath+bgImg+")";	
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
  getFieldFind : function(id)
  {
      return this.objects[id].fieldFind;
  },
  setFieldFind : function(id, fieldFind)
  {
      this.objects[id].fieldFind = fieldFind;
  }
}

