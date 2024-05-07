var powerComboBox= 
{
   objects      : new Array,
   ids          : new Array,
   fullPathImg  : "images/arrowDown.jpg",   
   overFlowY  : 11,   
  pathImg : "images/bg/",
  imgSelected : "bg136.jpg",  
  imgOptionPanel : "bg136.jpg",  
  imgDisable : "bg53.jpg",
  bgError :"bgerror.jpg",   
  GET_TEXT_MODE_RETURN_SIMPLE :0,   
  GET_TEXT_MODE_RETURN_SIMPLE :1,   
  FIRST_CHECK_MODE_NONE : 0,   
  FIRST_CHECK_MODE_NORMAL : 1,   
  FIRST_CHECK_MODE_ALL : 2,     
  addPropertyMethod : function(id) 
  {
    powerComboBox.objects[id].addToBody   =  function()
    {
      powerComboBox.addToBody(id);
    }
	powerComboBox.objects[id].addOption   =  function(obj,option, arrValues)
    {
      powerComboBox.addOption(id, obj, option, arrValues);
    }
	powerComboBox.objects[id].setColors = function(colorText, colorSelectedText, bgColor, bgColorSelected, colorTextDisable)
	{
	  powerComboBox.setColors(id, colorText, colorSelectedText, bgColor, bgColorSelected, colorTextDisable);
	}	
	powerComboBox.objects[id].setWidthCombo = function(width)
	{
	  powerComboBox.setWidthCombo(id, width);	
	}
	powerComboBox.objects[id].setMarkOption = function(index)
	{
	  powerComboBox.setMarkOption(id, index);
	}
	powerComboBox.objects[id].setNormalOption = function(index)
	{
	  powerComboBox.setNormalOption(id, index);
	}
	powerComboBox.objects[id].setWidthObjectCombo = function(width)
	{
	  powerComboBox.setWidthObjectCombo(id, width);
	}
	powerComboBox.objects[id].setWidthOptionCombo = function(width)
	{
	  powerComboBox.setWidthOptionCombo(id, width);
	}
	powerComboBox.objects[id].enableBorderPanelOption = function()
    {
	  powerComboBox.enableBorderPanelOption(id);
	}	
	powerComboBox.objects[id].disableBorderPanelOption = function()
    {
	  powerComboBox.disableBorderPanelOption(id);
	}
	powerComboBox.objects[id].onClickOption = function(funct, item)
	{
	  powerComboBox.onClickOption(id, funct, item);	
	}	
	powerComboBox.objects[id].onMouseOverOption = function(funct, item)
	{
	  powerComboBox.onMouseOverOption(id, funct, item);	
	}
	powerComboBox.objects[id].onBlurEditor = function(funct)
	{
	  powerComboBox.onBlurEditor(id, funct);	
	}
	powerComboBox.objects[id].onClickEditor = function(funct)
	{
	  powerComboBox.onClickEditor(id, funct);	
	}
	powerComboBox.objects[id].onKeyPress = function(funct)
	{
	  powerComboBox.onKeyPress(id, funct);	
	}
	powerComboBox.objects[id].enableReadOnlyEditor = function()
	{
	  powerComboBox.enableReadOnlyEditor(id);	
	}
	powerComboBox.objects[id].disableReadOnlyEditor = function()
	{
	  powerComboBox.disableReadOnlyEditor(id);	
	}
	powerComboBox.objects[id].disableOption = function(itemOption)
    {
	  powerComboBox.disableOption(id, itemOption);
	}	
	powerComboBox.objects[id].enableOption = function(itemOption)
    {
	  powerComboBox.enableOption(id, itemOption);
	}
	powerComboBox.objects[id].getValueFromArray = function(itemOption, itemValue)
    {
	  return powerComboBox.getValueFromArray(id, itemOption, itemValue);	
    }
	powerComboBox.objects[id].getArrayValue = function(itemOption)
	{
	  return powerComboBox.getArrayValue(id, itemOption);
	}
	powerComboBox.objects[id].setValueToArrayValue = function(itemOption, itemValue, value)
	{
  	  powerComboBox.setValueToArrayValue(id, itemOption, itemValue, value);
	}
	powerComboBox.objects[id].setArrayValue = function(itemOption, arrayValue)
    {
      powerComboBox.setArrayValue(id, itemOption, arrayValue); 
    }
	powerComboBox.objects[id].setOption = function(itemOption, option)
	{
	  powerComboBox.setOption(id, itemOption, option);	
	}
	powerComboBox.objects[id].getOption = function(itemOption)
	{
      return powerComboBox.getOption(id, itemOption);
	}
	powerComboBox.objects[id].getOptionArray = function()
    {
  	  return powerComboBox.getOptionArray(id);
    }
	powerComboBox.objects[id].getTotalOptions = function()
	{
	  return powerComboBox.getTotalOptions(id);	
	}		
    powerComboBox.objects[id].clear = function()
	{
	  powerComboBox.clear(id);	
	}
	powerComboBox.objects[id].clearEditor = function()
	{
	  powerComboBox.clearEditor(id);	
	}
	powerComboBox.objects[id].setSelectedIndex = function(itemOption)
    {
      powerComboBox.setSelectedIndex(id, itemOption);
    }
    powerComboBox.objects[id].setSelectedOption = function(option)
    {
      powerComboBox.setSelectedOption(id, option);
    }
    powerComboBox.objects[id].getObjFromOption = function(itemOption)
    {
   	  return powerComboBox.getObjFromOption(id, itemOption);
    }
	powerComboBox.objects[id].getArrayObj = function()
    {
   	  return powerComboBox.getArrayObj(id);
    }
	powerComboBox.objects[id].getItemIndex = function()
    {
   	  return powerComboBox.getItemIndex(id);
    }
    powerComboBox.objects[id].setPosition = function(x, y)
    {
	  powerComboBox.setPosition(id, x, y);	
	}
	powerComboBox.objects[id].setRelativePosition = function()
	{
	  powerComboBox.setRelativePosition(id);	
	}
	powerComboBox.objects[id].deleteAll = function()
	{
	  powerComboBox.deleteAll(id);	
	}
	powerComboBox.objects[id].getStruct = function()
    {
	  return powerComboBox.getStruct(id);	
	}
	powerComboBox.objects[id].addArrOption = function(arrObj, arrayOption, dblArrValues)
    {
      powerComboBox.addArrOption(id, arrObj, arrayOption, dblArrValues);
    }
	powerComboBox.objects[id].addArrayToArray = function(arr)
    {
      return powerComboBox.addArrayToArray(arr);
    }
	powerComboBox.objects[id].onChange = function(funct)
	{
	  powerComboBox.onChange(id, funct);
	}
	powerComboBox.objects[id].upDateIndex = function(itemOption)
	{
	  powerComboBox.upDateIndex(id, itemOption);	
	}
	powerComboBox.objects[id].setObjAttrib  =  function(objAttr,env)
    {
      powerComboBox.setObjAttrib(id,objAttr,env);
    }
    powerComboBox.objects[id].setBGColor  =  function(val)
    {
      powerComboBox.setBGColor(id,val);
    }
	powerComboBox.objects[id].setBorderStyle  =  function(val)
    {
      powerComboBox.setBorderStyle(id,val);
    }
    powerComboBox.objects[id].setFont  =  function(val,size,colorFont)
    {
      powerComboBox.setFont(id,val,size,colorFont);
    }
	powerComboBox.objects[id].setFontCaption = function(fontFamily,size,colorFont)
    {
  	  powerComboBox.setFontCaption(id,fontFamily,size,colorFont);
    }
	powerComboBox.objects[id].setFontStyle  =  function(s,w)
    {
      powerComboBox.setFontStyle(id,s,w);
    }
	powerComboBox.objects[id].setFontStyleCaption = function(s,w)
    {
  	  powerComboBox.setFontStyleCaption(id,s,w)
    }
	powerComboBox.objects[id].setObjAttribToAll  =  function(objAttrib,env)
    {
      powerComboBox.setObjAttribToAll(objAttrib,env);
    }
	powerComboBox.objects[id].getArray = function()
    {
      return powerComboBox.getArray(id);
    }
    powerComboBox.objects[id].getObject = function()
	{
	  return powerComboBox.getObject(id);	
	}
    powerComboBox.objects[id].getText = function()
	{
	  return powerComboBox.getText(id);	
	}
    powerComboBox.objects[id].setFocus = function()
	{
	  powerComboBox.setFocus(id);	
    }
	powerComboBox.objects[id].enable = function()
    {
      powerComboBox.enable(id);
    }
    powerComboBox.objects[id].disable = function()
    {
      powerComboBox.disable(id);
    }
	powerComboBox.objects[id].setLoadBGImg = function(activeLoad)
    {
      calendars.setLoadBGImg(id, activeLoad);
    }
    powerComboBox.objects[id].setLoadBGImgAll = function(activeLoad)
    {
      calendars.setLoadBGImgAll(activeLoad);
    }
	powerComboBox.objects[id].setBGImg = function(img)
    {
      powerComboBox.setBGImg(id,img);
    }
	powerComboBox.objects[id].getOneValue = function()
	{
	  return powerComboBox.getOneValue(id);
	}
	powerComboBox.objects[id].setMarginTopBottom = function(marginTB)
	{
	  powerComboBox.setMarginTopBottom(id,marginTB);	
	}
	powerComboBox.objects[id].setMarginTopBottomToAll = function(marginTB)
	{
	  powerComboBox.setMarginTopBottomToAll(marginTB);	
	}
	powerComboBox.objects[id].setMarginLeft = function(marginL)
	{
	  powerComboBox.setMarginLeft(id,marginL);	
	}
	powerComboBox.objects[id].setMarginRight = function(marginR)
	{
	  powerComboBox.setMarginRight(id,marginR);	
	}
	powerComboBox.objects[id].setMarginLeftToAll = function(marginL)
	{
	  powerComboBox.setMarginLeftToAll(marginL);	
	}
	powerComboBox.objects[id].setMarginRightToAll = function(marginR)
	{
	  powerComboBox.setMarginRightToAll(marginR);	
	}
	powerComboBox.objects[id].vAlignCaption = function(align)
    {
  	  powerComboBox.vAlignCaption(id,align);
    }
	powerComboBox.objects[id].addOptionAndSimpleValue = function(obj, option, simpleValue)
	{
	  powerComboBox.addOptionAndSimpleValue(id, obj, option, simpleValue);
	}
	powerComboBox.objects[id].addSimpleArrOptionValue = function(arrObj, arrayOption, ArrValues)
	{	
	  powerComboBox.addSimpleArrOptionValue(id, arrObj, arrayOption, ArrValues);	
	}
	powerComboBox.objects[id].getValueByItem = function(itemOption)
    {
	  return powerComboBox.getValueByItem(id, itemOption);	
	}	
	powerComboBox.objects[id].addEmptyOption = function()
	{
	  powerComboBox.addEmptyOption(id);	
	}
	powerComboBox.objects[id].findOption = function(option)
	{
	  if(powerComboBox.objects[id].findOption.arguments.length > 1)
		powerComboBox.findOption(id, option, powerComboBox.objects[id].findOption.arguments[1])
	  else
	    powerComboBox.findOption(id, option);	
	}
	powerComboBox.objects[id].setSizeHeight = function(height)
    {
   	  powerComboBox.setSizeHeight(id, height);
   	}
   	powerComboBox.objects[id].disableScrollX = function()
    {
   	  powerComboBox.disableScrollX(id);
    }
    powerComboBox.objects[id].enableScrollX = function()
    {
   	  powerComboBox.enableScrollX(id);
    }
    powerComboBox.objects[id].disableScrollY = function()
    {
   	  powerComboBox.disableScrollY(id);
    }
    powerComboBox.objects[id].enableScrollY = function()
    {
   	  powerComboBox.enableScrollY(id);
    }
    powerComboBox.objects[id].setDataType = function(dataType)
    {
      powerComboBox.setDataType(id, dataType);	
    }
	powerComboBox.objects[id].valid = function(objMsg)
	{
	  return powerComboBox.valid(id,objMsg);	
	}
	powerComboBox.objects[id].setValidEmpty = function()
	{
	  powerComboBox.setValidEmpty(id);	
	}
  	powerComboBox.objects[id].setFieldFind = function(fieldFind)
  	{
      powerComboBox.setFieldFind(id,fieldFind);
  	} 
  	powerComboBox.objects[id].getFieldFind = function()
  	{
      return powerComboBox.getFieldFind(id);
  	} 
  	powerComboBox.objects[id].onEnter = function(funct)
  	{
  	  powerComboBox.onEnter(id,funct);	
  	}
  	powerComboBox.objects[id].onEscape = function(funct)
  	{
  	  powerComboBox.onEscape(id,funct);	
  	}
  	powerComboBox.objects[id].createInput = function(idInput, type)
    {
      return powerComboBox.createInput(idInput, type);	
    }
    powerComboBox.objects[id].getCaptionCell = function()
    {
      return powerComboBox.getCaptionCell(id);	
    }
    powerComboBox.objects[id].setTypeObjOpt = function(objName, typeObj, value)
    {
      powerComboBox.setTypeObjOpt(id, objName, typeObj, value);
    }
    powerComboBox.objects[id].setModeReturnGetText = function(mode)
	{
	  return powerComboBox.setModeReturnGetText(id, mode);
	}
	powerComboBox.objects[id].setFirstRowCheckMode = function(mode)
	{
	  powerComboBox.setFirstRowCheckMode(id, mode);
	}
	powerComboBox.objects[id].addDataStruct = function(dataSt, optItem)
	{
	  powerComboBox.addDataStruct(id, dataSt, optItem);	
	}
	powerComboBox.objects[id].concatArray = function(arr1, arr2)
	{
	  return powerComboBox.concatArray(arr1, arr2);	
	}
	powerComboBox.objects[id].setBorderColor = function(borderColor)
	{
	  powerComboBox.setBorderColor(id, borderColor);
	}
	powerComboBox.objects[id].getIndexByChar = function(key)
	{
	  powerComboBox.getIndexByKey(id, key);
	}
	powerComboBox.objects[id].setCheckEnable = function(arrVal, pos)
	{
	  powerComboBox.setCheckEnable(id, arrVal, pos);	
	}
	powerComboBox.objects[id].setCheckDisable = function(arrVal, pos)
	{
	  powerComboBox.setCheckEnable(id, arrVal, pos);	
	}
	powerComboBox.objects[id].clearChecks = function()
	{
	  powerComboBox.clearChecks(id);	
	}
    powerComboBox.objects[id].setWidthContainer = function(widthCaption, margin, widthElement)
    {
  	  powerComboBox.setWidthContainer(id,widthCaption, margin, widthElement);
    }
    powerComboBox.objects[id].showGrid = function(sts)
    {
  	  powerComboBox.showGrid(id,sts);
    }
    powerComboBox.objects[id].setWidthBoxContainer = function(width)
    {
      powerComboBox.setWidthBoxContainer(id,width);	
    }
    powerComboBox.objects[id].onMouseOver = function(funct)
    {
      powerComboBox.onMouseOver(id,funct)	
    }
    powerComboBox.objects[id].deleteOption = function(itemOpc)
    {
      powerComboBox.deleteOption(id, itemOpc);	
    }
    powerComboBox.objects[id].disableOnChangeToEmptyOption = function()
    {
      powerComboBox.disableOnChangeToEmptyOption(id);	
    }
    powerComboBox.objects[id].enableOnChangeToEmptyOption = function()
    {
      powerComboBox.enableOnChangeToEmptyOption(id);	
    }
    powerComboBox.objects[id].getValue = function()
    {
      return powerComboBox.getValue(id);
    }
    powerComboBox.objects[id].setImgButton = function(img)
    {
      powerComboBox.setImgButton(id, img);  
    }
    powerComboBox.objects[id].setValidGreaterThan = function(secondCombo)
    {
      powerComboBox.setValidGreaterThan(id, secondCombo);    
    }
    powerComboBox.objects[id].setValidLessThan = function(secondCombo)
    {
      powerComboBox.setValidLessThan(id, secondCombo);    
    }
    powerComboBox.objects[id].hide = function()
    {
      powerComboBox.hide(id);	
    }
    powerComboBox.objects[id].show = function()
    {
      powerComboBox.show(id);	
    }
    powerComboBox.objects[id].isVisible = function()
    {
      return powerComboBox.isVisible(id);	
    }
    powerComboBox.objects[id].getOptionChecked = function()
    {
      return powerComboBox.getOptionChecked(id);	
    }
    powerComboBox.objects[id].setCaption = function(caption)
    {
      return powerComboBox.setCaption(id, caption);	
    }
    powerComboBox.objects[id].setMaxLength = function(max)
    {
      powerComboBox.setMaxLength(id, max);
    }
  },
   addToBody  : function(id)
   {
     document.body.appendChild(this.objects[id]);
   },
  addArrOption: function(id, arrObj, arrayOption, dblArrValues)
  {
    for (i = 0; i < dblArrValues.length; i++) 
    {
      if (arrObj == null)
        this.addOption(id, null, arrayOption[i], dblArrValues[i]);
      else  
       this.addOption(id, arrObj[i], arrayOption[i], dblArrValues[i]);
    }
  },
  addDataStruct: function(id, dataSt, optItem)
  {
  	this.objects[id].indexOptionStruct = optItem;
  	var ta = dataSt.length;
  	var arr = new Array;
  	var dblArrValues = new Array;
  	for(i=0; i<dataSt[optItem].length; i++)		
  	  dblArrValues[i] = new Array;	
  	var k=0;
  	for(var i=0; i<ta; i++)
  	{
  		if(i!=optItem)
  		{
  			for(var j=0; j<dataSt[i].length; j++)
  			{
  				dblArrValues[j][k] = dataSt[i][j];	
  			}
  			k++;
  		}
  	}
    this.addArrOption(id, null, dataSt[optItem], dblArrValues);
  },
  addSimpleArrOptionValue: function(id, arrObj, arrayOption, ArrValues)
  {
    for (i = 0; i < arrayOption.length; i++) 
    {
      if (arrObj == null)
        this.addOptionAndSimpleValue(id, null, arrayOption[i], ArrValues[i]);
      else  
       this.addOptionAndSimpleValue(id, arrObj[i], arrayOption[i], ArrValues[i]);
    }
  },
  addArrayToArray : function(arr)
  {
  	var arrDef = new Array;
    arrDef[arrDef.length] = arr;
    return arrDef;
  },
  addOptionAndSimpleValue : function(id, obj, option, simpleValue)
  {
    var arrVal = new Array();
	arrVal[0]= simpleValue;
	this.addOption(id, obj, option, arrVal);
  },
   addEmptyOption : function(id)
   {
	  this.addOption(id,null,'&nbsp',['-1']);  
   },
   addOption : function(id, obj, option, arrValues)
   {
   	 var index = this.objects[id].data.obj.length;
   	 this.objects[id].data.obj[index] = obj;	
	 powerComboBox.objects[id].onClickArray[index] = new Function('');
	 powerComboBox.objects[id].onMouseOverArray[index] = new Function('');
	 this.objects[id].data.options[index]=option;
	 if(this.objects[id].data.options.length > this.overFlowY)
	 {
	   this.enableScrollY(id);     
	   this.setSizeHeight(id,150); 
	 }
	 
	 this.objects[id].data.values[index]=arrValues;
	 this.objects[id].data.sts[index]=true;
	 this.objects[id].tablaPanel.insertRow(index);
	 this.objects[id].tablaPanel.rows[index].insertCell(0);
	 this.objects[id].tablaPanel.rows[index].insertCell(1);	 
	 this.objects[id].tablaPanel.rows[index].className = 'powerComboBoxPanelOptionCss'+ attrib.getActualEnv();
	 //this.objects[id].tablaPanel.rows[index].cells[1].className = 'powerComboBoxPanelOptionCss'+ attrib.getActualEnv();
	 this.objects[id].data.colorText[index] = this.objects[id].colorText;
	 this.objects[id].data.colorTextSelected[index] = this.objects[id].colorSelectedText;
     this.objects[id].tablaPanel.rows[index].cells[1].innerHTML = option;  
	 if (obj != null) 
	 {
	 	this.objects[id].tablaPanel.rows[index].cells[0].appendChild(obj);
	 }
	 else
	 {
	 	if(this.objects[id].activeExtObj)
	 	{
	 	  this.objects[id].data.obj[index]= document.createElement(this.objects[id].extObjName);
	 	  this.objects[id].data.obj[index].type = this.objects[id].extObjType;
	 	  this.objects[id].data.obj[index].id = id+index;
	 	  if(this.objects[id].extObjValue!=null)
	 	  {
	 	  	this.objects[id].data.obj[index].value = this.objects[id].extObjValue;
	 	  }
	 	  if(index==0)
	 	  {
	 	  	switch(this.objects[id].firstRowCheckMode)
	 	  	{
	 	  		case 0 : {
	 	  					break;
	 	  				 }
	 	  		case 1 : {
	 	  					this.objects[id].tablaPanel.rows[index].cells[0].appendChild(this.objects[id].data.obj[index]);
	 	  					break;
	 	  				 }
	 	  		case 2 : {
	 	  					this.objects[id].tablaPanel.rows[index].cells[0].appendChild(this.objects[id].data.obj[index]);
	 	  					this.objects[id].data.obj[index].onclick = function(e)
	 	  					{
	 	  					  var to = powerComboBox.getTotalOptions(id);
  	 						  for(var i=1; i<to; i++)
  	 						  {
  	 						  	powerComboBox.objects[id].data.obj[i].checked = powerComboBox.objects[id].data.obj[0].checked;
  	 						  }
  	 		
	 	  					}
	 	  					break;
	 	  				 }
	 	  	}
	 	  }
	 	  else
	 	    this.objects[id].tablaPanel.rows[index].cells[0].appendChild(this.objects[id].data.obj[index]);
	 	}
	 }
	 this.setNormalOption(id, index);	
	 this.objects[id].tablaPanel.rows[index].cells[0].onmouseover = function(e)
	 {
	     powerComboBox.setMarkOption(id,index);
	     powerComboBox.objects[id].onMouseOverArray[index]();
	     
	 }
	 this.objects[id].tablaPanel.rows[index].cells[1].onmouseover = function(e)
	 {
	 	powerComboBox.setMarkOption(id,index);
	 	powerComboBox.objects[id].onMouseOverArray[index]();
	 }
	 this.objects[id].tablaPanel.rows[index].cells[0].onmouseout = function(e)
	 {
	 	powerComboBox.setNormalOption(id,index);
	 }
	 this.objects[id].tablaPanel.rows[index].cells[1].onmouseout = function(e)
	 {
	 	powerComboBox.setNormalOption(id,index);
	 }
	 if(this.objects[id].data.obj[index])
	   this.objects[id].data.obj[index].onclick = function(e)
	   {
	     if(powerComboBox.objects[id].data.obj[index].checked)
           powerComboBox.objects[id].data.obj[index].checked = false
         else
           powerComboBox.objects[id].data.obj[index].checked = true;  
         powerComboBox.objects[id].data.obj[index].isClick = true;
	   }
	 this.objects[id].tablaPanel.rows[index].cells[0].onclick = function(e)
	 { 
        if(powerComboBox.objects[id].data.obj[index] && powerComboBox.objects[id].data.obj[index].type=='checkbox')
          switch(powerComboBox.objects[id].firstRowCheckMode)
          {
            case 0 : {
                        if(index!=0)
                        {
                          if(powerComboBox.objects[id].data.obj[index].checked)
                            powerComboBox.objects[id].data.obj[index].checked = false
                          else
                            powerComboBox.objects[id].data.obj[index].checked = true;
                         }break;
                     }
            case 1 : {
                        if(powerComboBox.objects[id].data.obj[index].checked)
                          powerComboBox.objects[id].data.obj[index].checked = false
                        else
                          powerComboBox.objects[id].data.obj[index].checked = true;
                        break;
                     }
            case 2 : {
                        var to = powerComboBox.getTotalOptions(id);
                        if(powerComboBox.objects[id].data.obj[index].checked)
                          powerComboBox.objects[id].data.obj[index].checked = false
                        else
                          powerComboBox.objects[id].data.obj[index].checked = true;
                        if(index==0)
                        {  
                          for(var i=1; i<to; i++)
                          {
                            powerComboBox.objects[id].data.obj[i].checked = powerComboBox.objects[id].data.obj[0].checked;
                          }
                        }
                        break;
                     }
          }
        if(!powerComboBox.objects[id].data.obj[index].isClick)
        {
          powerComboBox.objects[id].panel.style.display = 'none';
          //powerComboBox.objects[id].panelImg.style.borderStyle = 'outset';  
        }   
        powerComboBox.objects[id].data.obj[index].isClick = false;
	 	var objCheck = powerComboBox.objects[id].tablaPanel.rows[index].cells[0].firstChild;
	 	if(typeof objCheck=='object')
	 	  if(objCheck.checked)
	 	  {
	 	  	if(index==0 && powerComboBox.objects[id].firstRowCheckMode==2)	 	  	
	 	  	  powerComboBox.setSelectedIndex(id,index+1)
	 	  	else
	 	  	  powerComboBox.setSelectedIndex(id,index);
	 	  }
	 	  else 
	 	  { 
	 	  	powerComboBox.clearEditor(id);
	 	  	var val = powerComboBox.objects[id].tablaPanel.rows[index].cells[1].innerHTML;
            if(powerComboBox.objects[id].data.obj[index] && powerComboBox.objects[id].data.obj[index].type=='checkbox')
            {
              val='' ; 
              for(var ix=0; ix<powerComboBox.objects[id].data.obj.length; ix++)
              {  
                if(powerComboBox.objects[id].data.obj[ix].checked)
                {
                  val = powerComboBox.objects[id].tablaPanel.rows[ix].cells[1].innerHTML;
                  if((ix==index || !powerComboBox.objects[id].data.obj[index].checked) && val!='' && val!='&nbsp;')
                    break;
                }
              }
            }
          
            if (val != '&nbsp;') 
            {
              powerComboBox.objects[id].input.value = val;
            }
	 	  }
	 }
	 this.objects[id].tablaPanel.rows[index].cells[1].onclick = function()
	 {
	 	if (powerComboBox.objects[id].data.sts[index]) 
		{  
		  if(powerComboBox.objects[id].data.obj[index] && powerComboBox.objects[id].data.obj[index].type=='checkbox')
		    switch(powerComboBox.objects[id].firstRowCheckMode)
            {
              case 0 : {
                          if(index!=0)
                          {
                            if(!powerComboBox.objects[id].data.obj[index].checked)
                              //powerComboBox.objects[id].data.obj[index].checked = false
                            //else
                              powerComboBox.objects[id].data.obj[index].checked = true;
                          }break;
                       }
              case 1 : {
                          if(!powerComboBox.objects[id].data.obj[index].checked)
                            //powerComboBox.objects[id].data.obj[index].checked = false
                          //else
                            powerComboBox.objects[id].data.obj[index].checked = true;
                          break;
                       }
              case 2 : {
                          var to = powerComboBox.getTotalOptions(id);
                          if(!powerComboBox.objects[id].data.obj[index].checked)
                            //powerComboBox.objects[id].data.obj[index].checked = false
                          //else
                            powerComboBox.objects[id].data.obj[index].checked = true;
                          if(index==0)
                          { 
                            for(var i=1; i<to; i++)
                            {
                              powerComboBox.objects[id].data.obj[i].checked = powerComboBox.objects[id].data.obj[0].checked;
                            }
                          }
                          break;
                       }
            }
		  powerComboBox.objects[id].panel.style.display = 'none';
	      //powerComboBox.objects[id].panelImg.style.borderStyle = 'outset';
          var val = powerComboBox.objects[id].tablaPanel.rows[index].cells[1].innerHTML; 
	      if(powerComboBox.objects[id].data.obj[index] && powerComboBox.objects[id].data.obj[index].type=='checkbox')
	      {
	        val='';
		    for(var ix=0; ix<powerComboBox.objects[id].data.obj.length; ix++)
		    { 
		      if(powerComboBox.objects[id].data.obj[ix].checked)
		      {
		        val = powerComboBox.objects[id].tablaPanel.rows[ix].cells[1].innerHTML;
		        if(ix==index || !powerComboBox.objects[id].data.obj[index].checked)
		          break;
		      }
		    }
		  }
		  if (val != '&nbsp;') 
		  {
		    powerComboBox.objects[id].input.value = val; 
		  }
		  else 
		    powerComboBox.objects[id].input.value = '';
		  powerComboBox.objects[id].isOpen = false;
		  powerComboBox.setNormalOption(id, index);
		  powerComboBox.objects[id].onClickArray[index]();
		  powerComboBox.objects[id].itemIndex = index;
		  if(!powerComboBox.objects[id].disOnChangeToEmptyOption)
	  	    powerComboBox.objects[id].onChangeCombo()
	  	  else
	  	    if(!powerComboBox.isEmpty(powerComboBox.objects[id].input.value))
	  		  powerComboBox.objects[id].onChangeCombo();
		}  
	 }
   },
   clear : function(id)
   {
	   this.objects[id].deleteAll();
	   this.objects[id].addEmptyOption();
	   this.objects[id].setSelectedIndex(0);
   },
   clearEditor : function(id)
   {
   	 this.objects[id].input.value='';
   },
   clearChecks : function(id)
   {	
	   var ao = powerComboBox.getArrayObj(id);
	   for(var i=0; i<ao.length; i++)
	   {	
		   if(typeof(ao[i])=='object' && ao[i]!=null && ao[i]!='')	
		   {
			   ao[i].checked = false;
		   }  
	   }
   },
   concatArray : function(arr1, arr2)
   {
  	 var arrDef = new Array;
   	 for(var i=0; i<arr1.length; i++)
  	   arrDef[i] = arr[i];	
  	 for(var i=0; i<arr2.length; i++)
  	   arrDef[arrDef.length] = arr[i];
  	 return arrDef;   
   },
   createInput : function(idInput, type)
   {
   	  var i = document.createElement('input');
   	  i.type = type;
   	  i.id = idInput;
   	  return i;
   },
   measureText : function (pText, pFontSize, pStyle) 
   {
     var lDiv = document.createElement('lDiv');
 
     document.body.appendChild(lDiv);

     if (pStyle != null) 
     {
         lDiv.style = pStyle;
     }
     lDiv.style.fontSize = "" + pFontSize + "px";
     lDiv.style.position = "absolute";
     lDiv.style.left = -1000;
     lDiv.style.top = -1000;

     lDiv.innerHTML = pText;

     var lResult = 
     {
        width: lDiv.clientWidth,
        height: lDiv.clientHeight
     };

     document.body.removeChild(lDiv);
     lDiv = null;

     return lResult;
  },
  getBlank : function(txt)
  {
  	var t=0;
  	for(var i=0; i<txt.length; i++)
  	{
  	  if(txt.charAt(i)==' ')
  	    t++
  	}
  	return t;
  },
   setWidthContainer : function(id,widthCaption, margin, widthElement)
   {
	 this.objects[id].table.rows[0].cells[0].style.width = widthCaption+'px';
	 this.objects[id].table.rows[0].cells[1].style.width = margin+'px';
	 if(widthElement!=null)
	   this.setWidthCombo(id, widthElement);
   },
   showGrid : function(id,sts)
   {
   	 for(var i=0; i<this.ids.length;i++)
   	 {
   	   if(sts)
   	   {
	     this.objects[this.ids[i]].table.setAttribute('border','1px');
	     this.objects[this.ids[i]].style.borderWidth = '1px';
	     this.objects[this.ids[i]].style.borderColor = 'black';
	     this.objects[this.ids[i]].style.borderStyle = 'groove';
	   }
	   else
	   {
	     this.objects[this.ids[i]].table.setAttribute('border','0px');
	     this.objects[this.ids[i]].style.borderWidth = '0px';
	     this.objects[this.ids[i]].style.borderStyle = 'none';
	   }	
   	 }
   },
   setWidthBoxContainer : function(id,width)
   {
     this.objects[id].style.width = width + 'px';	
   },
    setImgButton : function(id, img)
   {
     //this.fullPathImg = 'images/'+img;  
     //this.objects[id].img.src = this.fullPathImg;
   },
   setValidGreaterThan : function(id, secondCombo)
   {
     this.objects[id].validGreaterThan = true;
     this.objects[id].secondCombo = secondCombo;
   },
   setValidLessThan : function(id, secondCombo)
   {
     this.objects[id].validLessThan = true;
     this.objects[id].secondCombo = secondCombo;
   },
   create : function(id,name,caption,margin,widthCaption)  
   {
     this.objects[id] = document.createElement("div");
     this.objects[id].secondCombo = new Object();
     this.objects[id].ambiente = attrib.getActualEnv();
     this.objects[id].sts_Show = true;
     this.objects[id].validGreaterThan = false;
     this.objects[id].validLessThan = false;
     this.objects[id].onMouseOver = new Function('');
     this.objects[id].onMouseOverArray = new Array();
     this.objects[id].onClickArray = new Array();
     this.objects[id].style.fontSize = '0px';
     this.objects[id].style.borderWidth = '0px';
     this.objects[id].style.padding = '0px';
     this.objects[id].style.borderStyle = 'none';
     this.objects[id].nameComponent = 'powerComboBox';
     this.objects[id].disOnChangeToEmptyOption = true;
     this.objects[id].margin = margin;
     this.objects[id].getTextReturnMode = 0; 
     this.objects[id].indexOptionStruct = 1000000;
     this.objects[id].heightEdit = 17;
     this.objects[id].widthCaption = 0;
     this.objects[id].dataType='int';
	 this.objects[id].fieldFind = false;
	 this.objects[id].firstRowCheckMode = 1;
	 this.objects[id].colorBorderInput ='#8e8e8e';
	 this.objects[id].extObjName = '';
	 this.objects[id].extObjType = '';
	 this.objects[id].extObjValue = '';
	 this.objects[id].activeExtObj = false;
	 this.objects[id].validEmpty = false;
	 this.objects[id].loadBGImg = true;
	 this.objects[id].table = document.createElement("table");
	 this.ids[this.ids.length] = id;
	 this.objects[id].arr = new Array;
	 this.objects[id].id=id;
	 this.objects[id].itemIndex =-1;
	 this.objects[id].bgColorDisable ='gray';
	 this.objects[id].isOpen = false;
	 this.objects[id].insidePanel = false;
     this.objects[id].name=name;
	 this.objects[id].onChangeCombo = new Function('');
	 this.objects[id].table.setAttribute('border','0px'); 
	 this.objects[id].table.setAttribute('cellPadding','0px');
	 this.objects[id].table.setAttribute('cellSpacing','0px');
	 this.objects[id].table.style.fontSize='0px';
	 this.objects[id].table.style.borderWidth='0px';
	 this.objects[id].table.style.borderStyle='none';
	 this.objects[id].table.insertRow(0);
	 this.objects[id].table.rows[0].insertCell(0);
	 this.objects[id].table.rows[0].insertCell(1);
	 this.objects[id].table.rows[0].insertCell(2);
	 this.objects[id].table.rows[0].insertCell(3);
	 this.objects[id].input = document.createElement('input');
	 //this.objects[id].input.style.borderRadius = '0em';
	 //this.objects[id].input.style.padding = '0px';
	 //this.objects[id].input.style.borderWidth = '0px';
	 this.objects[id].cap = document.createTextNode(caption);
	 this.objects[id].captionText = caption;
	 this.objects[id].table.rows[0].cells[1].style.width = margin+'px';
	 var w = this.measureText(caption,12,null).width + this.getBlank(caption)*6;
	 if(widthCaption!=null && widthCaption!=undefined)
	 {
	   this.objects[id].table.rows[0].cells[0].style.width = widthCaption +'px';
	   this.objects[id].widthCaption = parseInt(widthCaption,10);	
	 }
	 else
	 {
	 	this.objects[id].table.rows[0].cells[0].style.width = w +'px';
	 }
     this.objects[id].input.id=id;
     this.objects[id].input.name=name;
	 this.objects[id].panel=document.createElement('div');   
	 this.objects[id].panel.style.borderStyle 	= 'solid';
	 this.objects[id].panel.style.borderWidth 	= '1px';
	 this.objects[id].panel.style.display 		= 'none';
	 this.objects[id].panel.style.overflow 		= "auto";
	 this.objects[id].panel.style.backgroundColor = "white";
	 this.objects[id].tablaPanel=document.createElement('table');   
	 this.objects[id].tablaPanel.setAttribute('border','0px');
	 this.objects[id].tablaPanel.setAttribute('cellPadding','0px');
	 this.objects[id].tablaPanel.setAttribute('cellSpacing','0px');
     this.objects[id].tablaPanel.style.borderWidth = '0px';
     //this.objects[id].img = document.createElement('img');
     //this.objects[id].img.style.fontSize = '0px';
     //this.objects[id].img.style.borderWidth = '0px';
	 //this.objects[id].img.style.borderStyle = 'none';
	 //this.objects[id].img.style.padding = '0px';
	 //this.objects[id].img.src = this.fullPathImg;
	 this.objects[id].panelImg=document.createElement('div');   
	 //this.objects[id].panelImg.style.fontSize='12px';
	 //this.objects[id].panelImg.style.borderWidth='0px';
	 //this.objects[id].panelImg.style.borderStyle='none';
	 //this.objects[id].panelImg.style.padding = '0px';
	 
	 this.objects[id].table.rows[0].cells[0].appendChild(this.objects[id].cap);
	 this.objects[id].table.rows[0].cells[2].appendChild(this.objects[id].input); 
	 //this.objects[id].panelImg.appendChild(this.objects[id].img);
	 //this.objects[id].panelImg.style.backgroundColor = 'rgba(0,0,0,0)'; 
	 this.objects[id].table.rows[0].cells[3].appendChild(this.objects[id].panelImg); 
	 this.objects[id].panelImg.style.display='block';
     this.vAlignCaption(id,"middle");
	 this.objects[id].table.rows[0].cells[1].vAlign = "middle";
     this.objects[id].table.rows[0].cells[2].vAlign = "middle";
     //this.objects[id].table.rows[0].cells[3].vAlign = "middle";
     this.objects[id].table.rows[0].cells[0].hAlign = "left";
	 this.objects[id].table.rows[0].cells[0].align  = "left";
	 this.objects[id].table.rows[0].cells[1].hAlign = "left";
	 this.objects[id].table.rows[0].cells[1].align  = "left";
     this.objects[id].table.rows[0].cells[2].hAlign = "left";
     this.objects[id].table.rows[0].cells[2].align  = "left";
     //this.objects[id].table.rows[0].cells[3].hAlign = "left";
     //this.objects[id].table.rows[0].cells[3].align  = "left";
     this.setPropertyButton(id,this.objects[id].heightEdit,this.objects[id].heightEdit,"#dddddd");
	 this.setWidthCombo(id, 128);
	 this.setColors(id, "black", "white", "white", "blue", "gray");
	 this.objects[id].panel.appendChild(this.objects[id].tablaPanel);
	 document.body.appendChild(this.objects[id].panel);
	 this.objects[id].panel.style.position='absolute';
	 this.objects[id].appendChild(this.objects[id].table);
	 powerComboBox.objects[id].input.onmouseover = function(e)
	 {
	   powerComboBox.objects[id].onMouseOver();
	 }
	 this.objects[id].panelImg.onmousedown = function(e)
     {
	 	if (!powerComboBox.objects[id].disableCombo) 
		{
	 		for (i = 0; i < powerComboBox.ids.length; i++) 
			{
	 			if (powerComboBox.ids[i] != id) 
				{
	 				powerComboBox.objects[powerComboBox.ids[i]].isOpen = false;
	 				//powerComboBox.objects[powerComboBox.ids[i]].panelImg.style.borderStyle = 'outset';
	 				powerComboBox.objects[powerComboBox.ids[i]].panel.style.display = 'none';
	 			}
	 		}
	 		var xa = 0;
	 		var xb = 0;
	 		var xc = 0;
	 		var xd = 0;
	 		var sts = false;
	 		powerComboBox.objects[id].insidePanel = false;
	 		var dx = 0;
	 		
	 		if (powerComboBox.objects[id].style.position == 'relative' || powerComboBox.objects[id].style.position == '') 
			{
	 			sts = true;
	 		}
	 		powerComboBox.objects[id].style.position = 'absolute';
	 		
	 		xa = powerComboBox.objects[id].table.offsetParent.offsetLeft;
	 		
	 		xc = powerComboBox.objects[id].offsetParent.offsetLeft;
	 		xd = powerComboBox.objects[id].input.offsetWidth;
	 		if (sts) 
	 			powerComboBox.objects[id].style.position = 'relative';
	 		
	 		xb = powerComboBox.objects[id].panelImg.offsetParent.offsetLeft;
	 		var x = ( xa + xb + xc - xd + dx + "px");
	 		
	 		var y = (powerComboBox.objects[id].offsetParent.offsetTop +
	 		powerComboBox.objects[id].table.offsetParent.offsetTop +
	 		powerComboBox.objects[id].table.clientHeight +
	 		powerComboBox.objects[id].table.offsetTop -	4) + "px";
	 		powerComboBox.objects[id].panel.style.zIndex = 100000;
	 		powerComboBox.objects[id].panel.style.left = x ;
	 		powerComboBox.objects[id].panel.style.top = y;
			document.onmousedown = new Function('');
			if (!powerComboBox.objects[id].isOpen) 
			{
				powerComboBox.objects[id].isOpen = true;
				//powerComboBox.objects[id].panelImg.style.borderStyle = 'inset';
				powerComboBox.objects[id].panel.style.display = 'block';
			}
			else 
			{
				powerComboBox.objects[id].isOpen = false;
				//powerComboBox.objects[id].panelImg.style.borderStyle = 'outset';
				powerComboBox.objects[id].panel.style.display = 'none';
			}
		}
     }  
	 powerComboBox.objects[id].panelImg.onmouseout = function()
	 {
	 	powerComboBox.objects[id].insidePanel=false;
	 	document.onmousedown = function()
		{
		  if (powerComboBox.objects[id].isOpen && !powerComboBox.objects[id].insidePanel) 
		  {
		  	powerComboBox.objects[id].isOpen = false;
		  	//powerComboBox.objects[id].panelImg.style.borderStyle = 'outset';
		  	powerComboBox.objects[id].panel.style.display = 'none';
		  	document.onmousedown = new Function('');
		  }
		}
	 }	
	 powerComboBox.objects[id].panel.onmouseout = function()
	 {
	 	powerComboBox.objects[id].insidePanel=false;
	 	document.onmousedown = function()
		{
		  if (!powerComboBox.objects[id].insidePanel) 
		  {
		  	powerComboBox.objects[id].isOpen = false;
		  	//powerComboBox.objects[id].panelImg.style.borderStyle = 'outset';
		  	powerComboBox.objects[id].panel.style.display = 'none';
		  	document.onmousedown = new Function('');
		  }
		}
	 }
	 powerComboBox.objects[id].panel.onmouseover = function()
	 {
	 	powerComboBox.objects[id].insidePanel=true;
	 	document.onmouseup = new Function('');
	 }	
	 powerComboBox.objects[id].input.onmousedown = function()
	 {
	   powerComboBox.objects[id].insidePanel=false;	
	   //powerComboBox.objects[id].panelImg.style.borderStyle = 'outset';
	   powerComboBox.objects[id].panel.style.display = 'none';
	   powerComboBox.objects[id].isOpen=false;
	 }
	 powerComboBox.objects[id].input.keyNum = 0;
	 powerComboBox.objects[id].input.onEnter = new Function('');
	 powerComboBox.objects[id].input.onEscape = new Function('');
	 powerComboBox.objects[id].input.onKeyPress = new Function('');
	 var newkey = 0;
	 var setCheckers = function(itOp)
	 {
	 	try
        {
	      if(typeof(powerComboBox.objects[id].data.obj[itOp]) == 'object')
	      {
	 	    if(typeof(powerComboBox.objects[id].data.obj[itOp].type)=='string')
	        {
	   	      powerComboBox.clearChecks(id);
	   	      if(powerComboBox.getOption(id,itOp)!='')
	 	        powerComboBox.objects[id].data.obj[itOp].checked=true;
	        };
	      };
	    }
	    catch(e)
	    {
	    };
	 };
	 
	 powerComboBox.objects[id].input.onkeydown = function(e)
	 {		
	   if(document.all)
	   {
	   	  if(window.event)
	   	  {
	   	  	newkey=window.event;
	   	  }
	   }
	   else
	   {
	   	 newkey = e.keyCode;
	   }
	   	
	   powerComboBox.objects[id].input.keyNum = newkey;
	   powerComboBox.objects[id].input.onKeyPress();
	   switch (powerComboBox.objects[id].input.keyNum)
	   {
	   	  case 13 : {powerComboBox.objects[id].input.onEnter();break; }
	   	  case 27 : {powerComboBox.objects[id].input.onEscape();break; }
	   	  case 40 : {	   	  		      
	   	  			  var idx = parseInt(powerComboBox.getItemIndex(id),10);
	   	  			  idx++; 
	   	  			  if(idx > parseInt(powerComboBox.getTotalOptions(id),10)-1)
	   	  			  {
	   	  			  	 idx=0;
	   	  			  }
	   	  			  setCheckers(idx);
	   	  			  while(!powerComboBox.objects[id].data.sts[idx])
	   	  			  {
	   	  			  	idx++;
	   	  			  	powerComboBox.upDateIndex(id,idx);
	   	  			  	if(idx > parseInt(powerComboBox.getTotalOptions(id),10)-1)
	   	  			  	  break;
	   	  			  }
	   	  			  powerComboBox.setSelectedIndex(id, idx);
	   	  			  if(!powerComboBox.objects[id].disOnChangeToEmptyOption)
	   	  			    powerComboBox.objects[id].onChangeCombo()
	   	  			  else
	   	  			    if(!powerComboBox.isEmpty(powerComboBox.objects[id].input.value))
	   	  			      powerComboBox.objects[id].onChangeCombo();
	   	  			  break; 
	   	  			}
	   	  case 38 : {
	   	  			  var idx = parseInt(powerComboBox.getItemIndex(id),10);
	   	  			  idx--;
	   	  			  if(idx < 0)
	   	  			  {
	   	  			  	idx = parseInt(powerComboBox.getTotalOptions(id),10)-1;
	   	  			  }
	   	  			  setCheckers(idx);
	   	  			  while(!powerComboBox.objects[id].data.sts[idx])
	   	  			  {
	   	  			  	idx--;
	   	  			  	powerComboBox.upDateIndex(id,idx);
	   	  			  	if(idx < 0)
	   	  			  	  break;
	   	  			  }
	   	  			  powerComboBox.setSelectedIndex(id, idx);
	   	  			  if(!powerComboBox.objects[id].disOnChangeToEmptyOption)
	   	  			    powerComboBox.objects[id].onChangeCombo()
	   	  			  else
	   	  			    if(!powerComboBox.isEmpty(powerComboBox.objects[id].input.value))
	   	  			      powerComboBox.objects[id].onChangeCombo();
	   	  			  break; 
	   	  			}	
	   }
	 }
	 this.objects[id].data =
	 {
	 	options : new Array,
		values : [[]],
		obj : new Array,
		sts  : new Array,
		colorText : new Array,
		colorTextSelected : new Array
	 }	 
	 this.objects[id].panel.style.overflowX='hidden';
	 this.addPropertyMethod(id);
	 if(attrib)
      this.setObjAttrib(id,attrib,attrib.getActualEnv());
	 return this.objects[id];
   },  
   getIndexByChar : function(id, key)
   {
   	  var to = parseInt(powerComboBox.getTotalOptions(id),10)
   	  for(var idx=0; idx<to; idx++)
   	  {
   	  	var o = powerComboBox.getOption(id, idx);
   	  	
   	  	if(o.charAt(0)==key)
   	  	{
   	  	  return idx;	
   	  	}   	    
   	  }   	  
   	  return -1;
   },
   hide : function(id)
   {
   	 this.objects[id].style.display = 'none';
   	 this.objects[id].sts_Show = false;
   },
   isVisible : function(id)
   {
   	  return this.objects[id].sts_Show;
   },
   show : function(id)
   {
   	 this.objects[id].style.display = 'block';
   	 this.objects[id].sts_Show = true;
   },   
   deleteAll : function(id)
   {
   	  var t1 = this.objects[id].data.options.length;
	  for (i=0; i<t1; i++)
	  {
	  	this.objects[id].data.options.splice(0,1);
        this.objects[id].data.values.splice(0,1);
	    this.objects[id].data.obj.splice(0,1);
	    this.objects[id].data.sts.splice(0,1);
	    this.objects[id].data.colorText.splice(0,1);
	    this.objects[id].data.colorTextSelected.splice(0,1);
	    this.objects[id].tablaPanel.deleteRow(0);
	  }
	  this.objects[id].input.value='';
   },
   deleteOption : function(id, itemOpc)
   {
   	 var t1 = this.objects[id].data.options.length-1;
   	 for(var i=itemOpc; i<t1; i++)
   	 {
   	   this.objects[id].data.options[i] = this.objects[id].data.options[i+1];
   	   this.objects[id].data.values[i] = this.objects[id].data.values[i+1];
   	   this.objects[id].data.obj[i] = this.objects[id].data.obj[i+1];
   	   this.objects[id].data.sts[i] = this.objects[id].data.sts[i+1];
   	   this.objects[id].data.colorText[i] = this.objects[id].data.colorText[i+1];
   	   this.objects[id].data.colorTextSelected[i] = this.objects[id].data.colorTextSelected[i+1];
   	   this.objects[id].tablaPanel.rows[i].cells[1].innerHTML = this.objects[id].tablaPanel.rows[i+1].cells[1].innerHTML;
   	   this.objects[id].tablaPanel.rows[i].cells[0] = this.objects[id].tablaPanel.rows[i+1].cells[0];
   	 } 
	 this.objects[id].data.options.splice(t1,1);
     this.objects[id].data.values.splice(t1,1);
	 this.objects[id].data.obj.splice(t1,1);
	 this.objects[id].data.sts.splice(t1,1);
	 this.objects[id].data.colorText.splice(t1,1);
	 this.objects[id].data.colorTextSelected.splice(t1,1);
	 this.objects[id].tablaPanel.deleteRow(t1);
	 this.objects[id].input.value='';
   },
  disable: function(id)
  {
    this.objects[id].disableCombo=true;
    this.enableReadOnlyEditor(id);
    this.objects[id].panelImg.style.opacity = levelOpacityDisable;
  },   
    disableOption : function(id, itemOption)
   {
   	 powerComboBox.objects[id].data.colorText[itemOption] = powerComboBox.objects[id].colorTextDisable;
   	 powerComboBox.setNormalOption(id, itemOption)
   	 powerComboBox.objects[id].data.sts[itemOption] = false; 	
	 powerComboBox.objects[id].tablaPanel.rows[itemOption].cells[1].style.color = powerComboBox.objects[id].data.colorText[itemOption];
	 var objEle = powerComboBox.objects[id].tablaPanel.rows[itemOption].cells[0].firstChild;
	 	if(typeof objEle=='object')
	 	  objEle.disabled=true;
   },
   disableReadOnlyEditor : function(id)
   {
   	 powerComboBox.objects[id].input.readOnly = false;
   	 //powerComboBox.setBGImg(id, this.imgOptionPanel);
   	 powerComboBox.objecs[id].input.style.opacity = 1;
   	 this.objects[id].panelImg.style.opacity = 1;
   },
   disableBorderPanelOption : function(id)
   {
   	 this.objects[id].tablaPanel.setAttribute('border','0px'); 
   },     
   disableScrollX : function(id)
   {
   	this.objects[id].panel.style.overflowX='hidden';
   },
   enableScrollX : function(id)
   {
   	this.objects[id].panel.style.overflowX='auto';
   },
   disableScrollY : function(id)
   {
   	this.objects[id].panel.style.overflowY='hidden';
   },
   enableScrollY : function(id)
   {
   	this.objects[id].panel.style.overflowY='auto';
   },
  enable : function(id)
  {
    this.objects[id].disableCombo=false;
    this.objects[id].panelImg.style.opacity = 1;
  },   
   enableBorderPanelOption : function(id)
   {
   	 this.objects[id].tablaPanel.setAttribute('border','1px'); 
   },   
   enableOption : function(id, itemOption)
   {
   	 powerComboBox.objects[id].data.sts[itemOption] = true;
   	 powerComboBox.objects[id].data.colorText[itemOption] = powerComboBox.objects[id].colorText;
   	 powerComboBox.setNormalOption(id, itemOption);   	  	 
   },
   enableReadOnlyEditor : function(id)
   {
   	 powerComboBox.objects[id].input.readOnly = true;
	 //powerComboBox.setBGImg(id, this.imgDisable);
	 powerComboBox.objects[id].input.style.opacity = levelOpacityDisable;
	 this.objects[id].panelImg.style.opacity = 1;
   },
  findOption : function(id, value)
  {
	 if(powerComboBox.findOption.arguments.length > 2)
	 {
	   var pos = powerComboBox.findOption.arguments[2];	 
	   this.setSelectedIndex(id,1);
	   for (var i = 0; i < this.getTotalOptions(id); i++) 
	   {
		 this.setSelectedIndex(id,i);
	     if (value == powerComboBox.getArrayValue(id, i)[pos]) 
	     {
		   break;
	     }
	   } 
	 }
	 else
	 {
   	   this.setSelectedIndex(id,1);
	   for (var i = 0; i < this.getTotalOptions(id); i++) 
	   {
	     this.setSelectedIndex(id,i);
	     if (value == this.getOneValue(id)) 
	     {
		    break;
	     }
	   }
	 }
  },
   getFieldFind : function(id)
   {
     return this.objects[id].fieldFind;
   },
  getCaptionCell : function(id)
  {
    return this.objects[id].table.rows[0].cells[0];
  },
  getArray : function(id)
  {
    return this.objects[id].arr;
  },
  getText : function(id)
  {
  	 var mode = this.objects[id].getTextReturnMode; 
  	 if (this.objects[id].extObjType=='checkbox')
  	 {
  	 	var to = this.getTotalOptions(id);
  	 	var arrV = new Array;
  	 	var separador = '|';
  	 	var fEntrar = true;
  	 	for(var i=0; i<to; i++)
  	 	{
  	 		if (i==0) 
  	 		{
  	 			if (this.objects[id].firstRowCheckMode==1)
  	 			  fEntrar = true;
  	 			else
  	 			  fEntrar = false;
  	 		}
  	 		else
  	 		  fEntrar = true;
  	 		
  	 		if(fEntrar)
  	 		{
  	 		  var obj = this.getObjFromOption(id, i);
  	 		  if(obj.checked)
  	 		  {	
  	 		    if(mode!=-1)
  	 		    { 
  	 		      arrV[arrV.length] = this.objects[id].data.values[i][mode];
  	 		    }
			    else
			    {
			  	  if(arrV.length==0)
			  	    arrV[arrV.length] = this.objects[id].data.values[i];
			  	  else
			  	    arrV[arrV.length] = separador + this.objects[id].data.values[i];
			    }  	 		  	
  	 		  }
  	 		}
  	 	}
  	 	return arrV;  	
  	 } 
  	 else
  	 {
  	   if(this.objects[id].input.value=='')
    	 return -1	 
  	   if(mode!=-1)
  	   {  
  	   	 if(mode > this.objects[id].indexOptionStruct )
  	   	   return this.objects[id].data.values[this.objects[id].itemIndex][mode-1]
  	   	 else
  	   	   return this.objects[id].data.values[this.objects[id].itemIndex][mode]
  	   } 
	   else 
	     return this.objects[id].data.values[this.objects[id].itemIndex];
  	 }
  },
  getObject : function(id)
  {
    return this.objects[id];
  },
   getStruct : function(id)
   {
   	 return this.objects[id].data;
   },
   getItemIndex : function(id)
   {  	
   	  return this.objects[id].itemIndex;
   },
   getObjFromOption : function(id, itemOption)
   {
   	 return powerComboBox.objects[id].data.obj[itemOption];
   },
   getArrayObj : function(id)
   {
   	 return powerComboBox.objects[id].data.obj;
   },
  getValueFromArray : function(id, itemOption, itemValue)
  {
    return powerComboBox.objects[id].data.values[itemOption][itemValue]; 
  },
  getOption : function(id, itemOption)
  {
  	if(itemOption != null)
	{
	  return powerComboBox.objects[id].data.options[itemOption];	
	}
	else
	{
	  return powerComboBox.objects[id].input.value;	
	}
  },
  getValue : function(id)
  {
    return powerComboBox.objects[id].input.value; 
  },
  getOptionArray : function(id)
  {
  	return powerComboBox.objects[id].data.options;
  },  
  getOptionChecked : function(id)
  {
  	var data = { fields:new Array, arrValues : new Array};
  	var ops = powerComboBox.objects[id].data.options;
  	for(var i=0; i<ops.length; i++)
  	{
  	  var obj = this.getObjFromOption(id, i);
  	  if(obj.checked)
  	  {
  	  	if((this.objects[id].firstRowCheckMode==2 && i>0) || this.objects[id].firstRowCheckMode<2)
  	  	{
   	  	  var idx = data.arrValues.length;
  	  	  data.fields[data.fields.length] = ops[i];
  	  	  data.arrValues[idx] = new Array;
  	  	  data.arrValues[idx] = this.getArrayValue(id, i);
  	  	}
  	  }	
  	}
  	return data;
  },
  getTotalOptions : function(id)
  {
  	return powerComboBox.objects[id].data.options.length;
  },  
  getArrayValue : function(id, itemOption)
  {
    return powerComboBox.objects[id].data.values[itemOption]; 
  },   
  getOneValue : function(id)
  {
    return powerComboBox.objects[id].data.values[powerComboBox.getItemIndex(id)][0]; 
  },
  getValueByItem : function(id, itemOption)
  {
    return powerComboBox.objects[id].data.values[itemOption][0]; 
  },
  isEmpty : function(s)
  {
     var i;
     var c;
     var whitespace = "\t\n\r";  
     if((s == null) || (s.length==0))
       return true;
     for(i=0; i<s.length; i++)
     {
       c=s.charAt(i);
       if(whitespace.indexOf(c) == -1)
         return false; 
     }
     return true;
  },
  onChange : function(id,funct)
  {
    powerComboBox.objects[id].onChangeCombo = new Function(funct);
  },  
  disableOnChangeToEmptyOption : function(id)
  {
    powerComboBox.objects[id].disOnChangeToEmptyOption = true;
  },  
  enableOnChangeToEmptyOption : function(id)
  {
    powerComboBox.objects[id].disOnChangeToEmptyOption = false;
  },  
  onMouseOver : function(id,funct)
  {
    powerComboBox.objects[id].onMouseOver = new Function(funct);
  },  
  onEnter : function(id,funct)
  {
    powerComboBox.objects[id].input.onEnter = new Function(funct);
  },  
  onEscape : function(id,funct)
  {
    powerComboBox.objects[id].input.onEscape = new Function(funct);
  },  
   onClickOption : function(id,funct,item)
   {
	 if(item==undefined)
	 {
		for(var i=0; i<powerComboBox.objects[id].onClickArray.length; i++)
		  powerComboBox.objects[id].onClickArray[i] = new Function(funct);	
	 } 
	 else
   	   powerComboBox.objects[id].onClickArray[item] = new Function(funct);
   },  
   onMouseOverOption : function(id,funct,item)
   {
   	 powerComboBox.objects[id].onMouseOverArray[item] = new Function(funct);
   },
   onBlurEditor : function(id,funct)
   {
   	 powerComboBox.objects[id].input.onblur = new Function(funct);
   },
   onClickEditor : function(id,funct)
   {
   	 powerComboBox.objects[id].input.onclick = new Function(funct);
   },
   onKeyPress : function(id,funct)
   {
   	 powerComboBox.objects[id].input.onKeyPress = new Function(funct);
   },
   setModeReturnGetText : function(id, mode)
   {
     this.objects[id].getTextReturnMode = mode; 
     return this.objects[id];
   },
setCheckEnable : function(id, arrVal, pos)
{
  if(pos==null || pos=='null' ||  pos < 0)
    pos=0;
  powerComboBox.clearChecks(id);
  var ao = powerComboBox.getArrayObj(id);
  var to = parseInt(powerComboBox.getTotalOptions(id),10);
  for(var k=0; k<arrVal.length; k++)
    for(var i=0; i<to; i++)
    {
       	var v = powerComboBox.objects[id].data.values[i][pos]; 
       	if (v==arrVal[k])
       	{
       		ao[i].checked=true;
       		powerComboBox.setSelectedIndex(id,i);
       	}
    }
   	
},
setCheckDisable : function(id, arrVal, pos)
{
  if(pos==null || pos=='null' ||  pos < 0)
    pos=0;
  powerComboBox.clearChecks(id);
  var ao = powerComboBox.getArrayObj(id);
  var to = parseInt(powerComboBox.getTotalOptions(id),10);
  for(var k=0; k<arrVal.length; k++)
    for(var i=0; i<to; i++)
    {
       	var v = powerComboBox.objects[id].data.values[i][pos]; 
       	if (v==arrVal[k])
  		  ao[i].checked=false;	     	
    }
    powerComboBox.setSelectedIndex(id,-1);
},
   setTypeObjOpt : function(id, objName, typeObj, value)
   {
   	  this.objects[id].activeExtObj = true;
   	  this.objects[id].extObjName = objName;
	  this.objects[id].extObjType = typeObj;
	  if(value!=null)
	    this.objects[id].extObjValue = value;
	  else   
	   this.objects[id].extObjValue = null;
   },
   setFirstRowCheckMode : function(id, mode)
   {
   	 this.objects[id].firstRowCheckMode = mode;
   },
   setSelectedIndex : function(id, itemOption)
   {
   	 var io = powerComboBox.objects[id].data.options[itemOption];
   	 if(io!='&nbsp')
   	 {
	 	powerComboBox.objects[id].input.value = io;
	 }
	 else
	 {
	 	powerComboBox.objects[id].input.value = '';
	 }
	 powerComboBox.objects[id].itemIndex = itemOption;
   },
   setSelectedOption : function(id, option)
   {
   	 for(var i=0; i<powerComboBox.objects[id].data.options.length; i++)
   	 {
   	   if(powerComboBox.objects[id].data.options[i]==option)
   	   {
   	   	  powerComboBox.setSelectedIndex(id, i);
   	   	  break;
   	   }   	
   	 } 
   }, 
   setSizeHeight : function(id, height)
   {
   	 powerComboBox.objects[id].panel.style.height = height+'px';
   }, 
   setFocus : function(id)
   {
   	  powerComboBox.objects[id].input.focus();
   },
  setLoadBGImg: function(id, activeLoad)
  {
    this.objects[id].loadBGImg = activeLoad;
  },
  setLoadBGImgAll: function(activeLoad)
  {
    for (i = 0; i < this.ids.length; i++) 
    {
      this.setLoadBGImg(this.ids[i], activeLoad);
    }
  },
   setValueToArrayValue : function(id, itemOption, itemValue, value)
   {
     powerComboBox.objects[id].data.values[itemOption][itemValue] = value; 
   },
   setArrayValue : function(id, itemOption, arrayValue)
   {
     powerComboBox.objects[id].data.values[itemOption] = arrayValue; 
   },   
  setColors : function(id, colorText, colorSelectedText, bgColor, bgColorSelected, colorTextDisable)
  {
  	this.objects[id].colorText = colorText;
	this.objects[id].colorSelectedText = colorSelectedText;
	this.objects[id].bgColor = bgColor;
	this.objects[id].bgColorSelected = bgColorSelected; 	
	this.objects[id].colorTextDisable = colorTextDisable;
  },   
  setOption : function(id, itemOption, option)
  {
  	powerComboBox.objects[id].data.options[itemOption]=option;
	powerComboBox.objects[id].tablaPanel.rows[itemOption].cells[1].innerHTML = option;  
	powerComboBox.objects[id].itemIndex = itemOption;
  },
  setBorderColor : function(id, borderColor)
  {
  	 this.objects[id].colorBorderInput = borderColor;
  },
  setDataType : function(id, dataType)
  {	
  	powerComboBox.objects[id].dataType = dataType;
  },
  setMarkOption : function(id, index)
  {	
    if (powerComboBox.objects[id].data.sts[index]) 
	{
	  if (!this.objects[id].loadBGImg) 
	  {
	  	powerComboBox.objects[id].tablaPanel.rows[index].cells[0].style.backgroundColor = powerComboBox.objects[id].bgColorSelected;
		powerComboBox.objects[id].tablaPanel.rows[index].cells[0].style.color = powerComboBox.objects[id].data.colorTextSelected[index];
		powerComboBox.objects[id].tablaPanel.rows[index].cells[1].style.backgroundColor = powerComboBox.objects[id].bgColorSelected;
		powerComboBox.objects[id].tablaPanel.rows[index].cells[1].style.color = powerComboBox.objects[id].data.colorTextSelected[index];
		var o = powerComboBox.objects[id].tablaPanel.rows[index].cells[0].firstChild;
		if (o != null) 
		{
		  o.style.backgroundColor = powerComboBox.objects[id].bgColorSelected;
		  o.style.color = powerComboBox.objects[id].colorSelectedText;
		}
	  }
	  else
	  {
	    //powerComboBox.objects[id].tablaPanel.rows[index].cells[0].style.backgroundImage =  'url('+this.pathImg+this.imgSelected+')';
	    powerComboBox.objects[id].tablaPanel.rows[index].cells[0].style.color = powerComboBox.objects[id].data.colorTextSelected[index];
	    //powerComboBox.objects[id].tablaPanel.rows[index].cells[1].style.backgroundImage = 'url('+this.pathImg+this.imgSelected+')';
	    powerComboBox.objects[id].tablaPanel.rows[index].cells[1].style.color = powerComboBox.objects[id].data.colorTextSelected[index];
	  }	
	}
  },
  setNormalOption : function(id, index)
  {
  	if (powerComboBox.objects[id].data.sts[index]) {
		if (!this.objects[id].loadBGImg) {
			powerComboBox.objects[id].tablaPanel.rows[index].cells[1].style.backgroundColor = powerComboBox.objects[id].bgColor;
			powerComboBox.objects[id].tablaPanel.rows[index].cells[1].style.color = powerComboBox.objects[id].data.colorText[index];
			powerComboBox.objects[id].tablaPanel.rows[index].cells[0].style.backgroundColor = powerComboBox.objects[id].bgColor;
			powerComboBox.objects[id].tablaPanel.rows[index].cells[0].style.color = powerComboBox.objects[id].data.colorText[index];
			
			var o = powerComboBox.objects[id].tablaPanel.rows[index].cells[0].firstChild;
			if (o != null) {
				o.style.backgroundColor = powerComboBox.objects[id].bgColor;
				o.style.color = powerComboBox.objects[id].colorText;
			}
		}
		else {
			//powerComboBox.objects[id].tablaPanel.rows[index].cells[1].style.backgroundImage = 'url(' + this.pathImg + this.imgOptionPanel + ')';
			powerComboBox.objects[id].tablaPanel.rows[index].cells[1].style.color = powerComboBox.objects[id].data.colorText[index];
			//powerComboBox.objects[id].tablaPanel.rows[index].cells[0].style.backgroundImage = 'url(' + this.pathImg + this.imgOptionPanel + ')';
			powerComboBox.objects[id].tablaPanel.rows[index].cells[0].style.color = powerComboBox.objects[id].data.colorText[index];
		}
	}
	else 
	{
		if (this.objects[id].loadBGImg) 
		{
			//powerComboBox.objects[id].tablaPanel.rows[index].cells[1].style.backgroundImage = 'url(' + this.pathImg + this.imgOptionPanel + ')';
			//powerComboBox.objects[id].tablaPanel.rows[index].cells[0].style.backgroundImage = 'url(' + this.pathImg + this.imgOptionPanel + ')';
		}
	}
  },
  setWidthCombo : function(id, width)
  {
  	this.objects[id].input.style.width = width +'px';
	this.objects[id].table.rows[0].cells[2].style.width = width+'px';
	this.objects[id].tablaPanel.style.width = width+'px';	
	var wt = parseInt(this.objects[id].widthCaption,10) + parseInt(this.objects[id].margin,10) + parseInt(width,10) + 21;
	this.setWidthBoxContainer(id,wt);
  },
  setWidthObjectCombo : function(id, width)
  {
  	var i=0;
	var l = this.objects[id].tablaPanel.rows.length;
	for(i=0; i<l; i++)
	{
	  this.objects[id].tablaPanel.rows[i].cells[0].style.width = width+'px';	
	}
  },  
  setWidthOptionCombo : function(id, width)
  {
  	var i=0;
	var l = this.objects[id].tablaPanel.rows.length;
	for(i=0; i<l; i++)
	{
	  this.objects[id].tablaPanel.rows[i].cells[1].style.width = width+'px';	
	}
  },   
   setPropertyButton : function(id,w,h,bgColor)
   {
   	 w=w+2;
   	 //this.objects[id].panelImg.style.width = w+'px';   	    	 
	 //this.objects[id].panelImg.style.height = h+'px';
	 //this.objects[id].panelImg.style.lineHeight = h+'px';
	 //this.objects[id].panelImg.style.borderStyle = 'outset';
	 //this.objects[id].panelImg.style.borderWidth = '1px';
     //this.objects[id].panelImg.style.borderColor = '#7e7e7e';
	 //this.objects[id].panelImg.align = 'center';
	 //this.objects[id].panelImg.vAlign='middle';
	 //this.objects[id].img.style.width = w+'px';
	 //this.objects[id].img.style.height = h+'px';	 
	// this.objects[id].img.style.lineHeight = h+'px';
	// this.objects[id].img.vAlign = 'top';
	 this.objects[id].input.style.height = h+'px';
	 this.objects[id].input.style.lineHeight = h+'px';
	 //this.objects[id].input.style.borderWidth='1px';
	 //this.objects[id].input.style.borderColor='#7e7e7e';
	 //this.objects[id].input.style.borderStyle='groove';
	 this.objects[id].table.rows[0].cells[0].style.height =-2+h+'px';
	 this.objects[id].table.rows[0].cells[0].style.lineHeight =-2+h+'px';
	 this.objects[id].table.rows[0].cells[0].vAlign = 'middle';
	 this.objects[id].table.rows[0].cells[1].style.height =-2+h+'px';
	 this.objects[id].table.rows[0].cells[1].style.lineHeight =-2+h+'px';
	 this.objects[id].table.rows[0].cells[1].vAlign = 'middle';
	 this.objects[id].table.rows[0].cells[2].style.height =-2+h+'px';
	 this.objects[id].table.rows[0].cells[2].style.lineHeight =-2+h+'px';
	 this.objects[id].table.rows[0].cells[2].vAlign = 'middle';
	 //this.objects[id].table.rows[0].cells[3].style.height =-2+h+'px';
	 //this.objects[id].table.rows[0].cells[3].style.lineHeight =-2+h+'px';
	 //this.objects[id].table.rows[0].cells[3].vAlign = 'top';
	 this.objects[id].style.height= h+'px';
	 this.objects[id].style.lineHeight= h+'px';
	 this.objects[id].vAlign = 'middle';
   },
   setPosition : function(id, x, y)
   {
   	 powerComboBox.objects[id].style.position='absolute';
     powerComboBox.objects[id].style.left=x+'px';
     powerComboBox.objects[id].style.top=y+'px';
     powerComboBox.objects[id].panel.style.left = x + 'px';
     powerComboBox.objects[id].panel.style.top = y + 'px';
   },
   setRelativePosition : function(id)
   {
   	 powerComboBox.objects[id].style.position='relative';
	 powerComboBox.objects[id].style.left='0px';
     powerComboBox.objects[id].style.top='0px';
   },
   setBGColor : function(id,val)
   {
     //this.objects[id].input.style.background = val; 
   },
   setBorderStyle : function(id,val)
   {
     //this.objects[id].input.style.borderStyle=val; 
   }, 
   setFont : function(id,val,size,colorFont)
   {
     //this.objects[id].input.style.fontFamily=val;
     //this.objects[id].input.style.fontSize=size+'px';
     //this.objects[id].input.style.color = colorFont;
     
     this.objects[id].panel.style.fontFamily=val;
     this.objects[id].panel.style.fontSize=size+'px';
     this.objects[id].panel.style.color = colorFont;
   },    
   setFontCaption : function(id,fontFamily,size,colorFont)
   {
     //this.objects[id].table.rows[0].cells[0].style.fontFamily = fontFamily;
	 //this.objects[id].table.rows[0].cells[0].style.fontSize = size+'px';
	 //this.objects[id].table.rows[0].cells[0].style.color = colorFont;
   },
   setMarginTopBottom : function(id,marginTB)
   {
	 var mtb = parseInt(marginTB,10);
   	 this.objects[id].table.rows[0].style.height = mtb + 'px';
   },  
   setMarginTopBottomToAll : function(marginTB)
   {
     for (i = 0; i < this.ids.length; i++) 
	 {
	 	this.setMarginTopBottom(this.ids[i],marginTB);
	 }	
   },  
   setFontStyle : function(id,s,w)
   {
     //this.objects[id].input.style.fontStyle=s;
     //this.objects[id].input.style.fontWeight=w;
     this.objects[id].panel.style.fontStyle=s;
     this.objects[id].panel.style.fontWeight=w;
   },  
   setFontStyleCaption : function(id,s,w)
   {
     //this.objects[id].table.rows[0].cells[0].style.fontStyle  = s;
	 //this.objects[id].table.rows[0].cells[0].style.fontWeight = w;
   },       
  setObjAttribToAll : function(objAttrib,env)
  {
  /*
  	var i =0;
    for(i=0;i<this.ids.length;i++)
    {
      this.setObjAttrib(this.ids[i],attrib,env);
    }	
    */
  },      
   setObjAttrib : function(id,objAttr,env)
   {
     /*
     this.setBGColor(id,objAttr.Color.bgSelect[env]);
	 this.setFont(id, objAttr.Font.select[env], objAttr.Size.selectFont[env], objAttr.Color.textSelect[env]);
     this.setFontCaption(id, objAttr.Font.select[env], objAttr.Size.selectFont[env], objAttr.Color.textEditorCaption[env]);
	 this.setFontStyle(id, objAttr.Font.styleSelect[env], objAttr.Font.weightEditor[env]);
     this.setFontStyleCaption(id, objAttr.Font.styleEditorCaption[env], objAttr.Font.weightSelect[env]);   
     */
     this.objects[id].colorTextDisable = objAttr.Color.textMenuDisable[env];  
	 this.objects[id].bgColorSelected = objAttr.Color.barSelected[env];     
	 this.objects[id].bgColorDisable = objAttr.Color.bgDiselected[env];
	 this.objects[id].colorSelectedText = objAttr.Color.textSelected[env];
	 var size = parseInt(objAttr.Size.selectFont[env],10);
	 var cap = this.objects[id].captionText;
	 var b = this.getBlank(cap);
	 var m = this.measureText(cap,size,objAttr.Font.styleSelect[env]).width;
	 if(objAttr.Font.weightEditor[env]=='bold')
	 {
	    m = m + cap.length;
	 }
	 var w = m + b*6;
	 if(this.objects[id].widthCaption > 0 )
	 {
	 	this.objects[id].table.rows[0].cells[0].style.width = this.objects[id].widthCaption +'px';
	 }
	 else
	 {
	   this.objects[id].table.rows[0].cells[0].style.width = w +'px';	
	 }
	 
	 if (this.objects[id].loadBGImg) 
     {
	   this.bgError = objAttr.BgImg.bgError[env];
       //this.setImgButton(id, objAttr.BgImg.imgButtonPowerCombo[env]);  
	   //this.imgSelected = objAttr.BgImg.bgSelected[env];	
	   //this.imgOptionPanel = objAttr.BgImg.bgPanelCombo[env];
	   for (i = 0; i < this.getTotalOptions(id); i++) 
	   {
	     this.setNormalOption(id, i); 
	   }		   	  
	   this.imgDisable=objAttr.BgImg.bgButtonDisable[env];
	   /*
	   if (!powerComboBox.objects[id].input.readOnly)
          this.setBGImg(id, objAttr.BgImg.bgPanelCombo[env]);
	   else
	     this.setBGImg(id, this.imgDisable);
	    */
	   //this.objects[id].panel.style.backgroundImage = 'url('+this.pathImg+objAttr.BgImg.bgPanelCombo[env]+')';
     }
     this.objects[id].className = this.objects[id].nameComponent + 'Css'+attrib.getActualEnv();
     this.objects[id].panelImg.className = 'powerComboBoxPanelImgCss' + attrib.getActualEnv();
     this.objects[id].input.className = 'powerComboBoxEditorCss' + attrib.getActualEnv();
     this.objects[id].table.rows[0].cells[0].className = 'powerComboBoxCaptionCss' + attrib.getActualEnv();
   },
  setBGImg : function(id,img)
  {
    //this.objects[id].input.style.backgroundImage = 'url('+this.pathImg+img+')';
  },
   setFieldFind : function(id, fieldFind)
   {
     this.objects[id].fieldFind = fieldFind;
   },
  setValidEmpty : function(id)
  {
    this.objects[id].validEmpty=true;	
  },
   upDateIndex : function(id,itemOption)
   {
     powerComboBox.objects[id].itemIndex = itemOption;
   },
  vAlignCaption : function(id,align)
  {
  	this.objects[id].table.rows[0].cells[0].style.height = this.objects[id].heightEdit+'px';
  	this.objects[id].table.rows[0].cells[0].style.lineHeight = this.objects[id].heightEdit+'px';
  	this.objects[id].table.rows[0].cells[0].vAlign = align;
  },
  valid : function(id,objMsg)
  {
    if (powerComboBox.objects[id].input.readOnly)
      powerComboBox.setBGImg(id, this.imgDisable);
    else
      powerComboBox.setBGImg(id, this.imgOptionPanel);
    if (this.valid.arguments.length == 2)
      objMsg.setMsg('',false);  
  	if(this.objects[id].validEmpty)  
	{
	  var valor = this.objects[id].input.value;
	  if(this.isEmpty(valor))
	  {
	  	this.setBGImg(id, this.bgError);
	   	 if(this.valid.arguments.length < 2 || objMsg==null)
           alert('CAMPO: ['+this.objects[id].cap.nodeValue+'] SIN VALOR');
		 else
		   objMsg.setMsg('CAMPO: ['+this.objects[id].cap.nodeValue+'] SIN VALOR', true);  
		return false;   
	  }
	  else
	  {
	     if(this.objects[id].validLessThan) 
	     {
	       var v1 = parseFloat(this.getValue(id)); 
           var v2 = parseFloat(this.objects[id].secondCombo.getValue());
           if(v1 > v2)
           {
             this.setBGImg(id, this.bgError);
             if(this.valid.arguments.length < 2 || objMsg==null)
               alert('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON VALOR '+v1+' MAYOR QUE ' +v2);
             else
               objMsg.setMsg('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON VALOR '+v1+' MAYOR QUE ' +v2, true);
             this.setFocus(id);
             return false;
           }
	     }
	     if(this.objects[id].validGreaterThan) 
         {
           var v1 = parseFloat(this.getValue(id));
           var v2 = parseFloat(this.objects[id].secondCombo.getValue());
           if(v1 < v2)
           {
             this.setBGImg(id, this.bgError);
             if(this.valid.arguments.length < 2 || objMsg==null)
               alert('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON VALOR '+v1+' MENOR QUE ' +v2);
             else
               objMsg.setMsg('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON VALOR '+v1+' MENOR QUE ' +v2, true);
             this.setFocus(id);
             return false;    
           }
         }
		 return true;   
	  }
	}
  },
   validAll : function(objMsg)
   {     
     for(ix=0; ix<this.ids.length; ix++)
     {
	   if(this.validAll.arguments.length > 0)
         this.valid(this.ids[ix], objMsg);
	   else
	     this.valid(this.ids[ix]);
     }
   },
   setCaption : function(id, caption) {
	   this.objects[id].cap.nodeValue = caption;
   },
   setMaxLength : function(id,max)
   {
     this.objects[id].input.maxLength=max; 
   }
} 

