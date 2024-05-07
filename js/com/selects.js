var selects= 
{
   objects      : new Array,
   ids          : new Array,
   pathImg      : "images/bg/",
   validInteger : new Array,
   validEmpty   : new Array,
   validEmail   : new Array,
   validReal    : new Array,
   bgImgPath 	: "images/bg/",   
   bgImgEdit 	: "images/bg/",   
   bgEnable 	: "bg116",   
   bgDisable 	: "bg53",   
   bgError 		: "bgerror.jpg",   
   
   
addPropertyMethod : function(id)
{
	selects.objects[id].setFieldFind = function(fieldFind)
  	{
  		selects.setFieldFind(id,fieldFind);
  	} 
  	selects.objects[id].getFieldFind = function()
  	{
      return selects.getFieldFind(id);
  	} 
  selects.objects[id].addToBody   =  function()
  {
    selects.addToBody(id);
  }
  selects.objects[id].alignCaption = function(align)
  {
  	selects.alignCaption(id,align);
  }
  selects.objects[id].appendToObj  =  function(obj)
  {
    selects.appendToObj(id,obj);
  }
  selects.objects[id].addOption  =  function(option,value)
  {
    selects.addOption(id,option,value);
  }
  selects.objects[id].addArrOption = function(arrOption, arrValues)
  {
  	selects.addArrOption(id, arrOption, arrValues);
  }
  selects.objects[id].addBasicStruct  =  function(structDataObject)
  {
    selects.addBasicStruct(id,structDataObject);
  }
  selects.objects[id].createMultSelect  =  function(initNum, endNum)
  {
    selects.createMultSelect(initNum, endNum);
  }
  selects.objects[id].disable  =  function()
  {
    selects.disable(id);
  }
  selects.objects[id].deleteOption  =  function(item)
  {
    selects.deleteOption(id,item);
  }
  selects.objects[id].clear  =  function()
  {
    selects.clear(id);
  }
  selects.objects[id].deleteAll  =  function()
  {
    selects.deleteAll(id);
  }
  selects.objects[id].findOption  =  function(value)
  {
    selects.findOption(id, value);
  }
  selects.objects[id].enable  =  function()
  {
    selects.enable(id);
  }
  selects.objects[id].getOption  =  function(item)
  {
    return selects.getOption(id,item);
  }
  selects.objects[id].getValue  =  function(item)
  {
    return selects.getValue(id,item);
  }
  selects.objects[id].getArrayValue = function(item)
  {
    return selects.getArrayValue(id, item);
  } 
  selects.objects[id].getMultiple  =  function()
  {
    return selects.getMultiple(id);
  }
  selects.objects[id].getSelectedIndex  =  function()
  {
    return selects.getSelectedIndex(id);
  }
  selects.objects[id].getObject  =  function()
  {
    return selects.getObject(id);
  }
  selects.objects[id].getText = function()
  {
  	return selects.getText(id);
  }
  selects.objects[id].getSelect = function()
  {
  	return selects.getSelect(id);
  }
  selects.objects[id].onClick  =  function(func)
  {
    selects.onClick(id,func);
  }
  selects.objects[id].onChange  =  function(func)
  {
    selects.onChange(id,func);
  }
  selects.objects[id].onBlur  =  function(func)
  {
    selects.onBlur(id,func);
  }
  selects.objects[id].onDblClick  =  function(func)
  {
    selects.onDblClick(id,func);
  }
  selects.objects[id].onFocus  =  function(func)
  {
    selects.onFocus(id,func);
  }
  selects.objects[id].onKeyDown  =  function(func)
  {
    selects.onKeyDown(id,func);
  }
  selects.objects[id].onKeyPress  =  function(func)
  {
    selects.onKeyPress(id,func);
  }
  selects.objects[id].onKeyUp  =  function(func)
  {
    selects.onKeyUp(id,func);
  }
  selects.objects[id].onMouseDown  =  function(func)
  {
    selects.onMouseDown(id,func);
  }
  selects.objects[id].onMouseMove  =  function(func)
  {
    selects.onMouseMove(id,func);
  }
  selects.objects[id].onMouseOut  =  function(func)
  {
    selects.onMouseOut(id,func);
  }
  selects.objects[id].onMouseOver  =  function(func)
  {
    selects.onMouseOver(id,func);
  }
  selects.objects[id].onMouseUp  =  function(func)
  {
    selects.onMouseUp(id,func);
  }
  selects.objects[id].resetPosition  =  function()
  {
    selects.resetPosition(id);
  }
  selects.objects[id].setOption  =  function(item,value)
  {
    selects.setOption(id,item,value);
  }
  selects.objects[id].setValue  =  function(item,value)
  {
    selects.setValue(id,item,value);
  }
  selects.objects[id].setArrayValue = function(item, arrValue)
  {
    selects.setArrayValue(id, item, arrValue);
  }
  selects.objects[id].setSelectedIndex  =  function(item)
  {
    selects.setSelectedIndex(id,item);
  }
  selects.objects[id].setMultiple  =  function()
  {
    selects.setMultiple(id);
  }
  selects.objects[id].setSimple  =  function()
  {
    selects.setSimple(id);
  }
  selects.objects[id].setPosition  =  function(x,y)
  {
    selects.setPosition(id,x,y);
  }
  selects.objects[id].setAttributes  =  function(typesAttribs,valuesAttribs)
  {
    selects.setAttributes(id,typesAttribs,valuesAttribs);
  }
  selects.objects[id].setClassName  =  function(extClass)
  {
    selects.setClassName(id,extClass);
  }
  selects.objects[id].setColorText  =  function(val)
  {
    selects.setColorText(id,val);
  }
  selects.objects[id].setFont  =  function(val,size,colorFont)
  {
    selects.setFont(id,val,size,colorFont);
  }
  selects.objects[id].setFontStyle  =  function(s,w)
  {
    selects.setFontStyle(id,s,w);
  }
  selects.objects[id].setBorderColor  =  function(val)
  {
    selects.setBorderColor(id,val);
  }
  selects.objects[id].setBGColor  =  function(val)
  {
    selects.setBGColor(id,val);
  }
  selects.objects[id].setSize  =  function(size)
  {
    selects.setSize(id,size);
  }
  selects.objects[id].setBorderStyle  =  function(val)
  {
    selects.setBorderStyle(id,val);
  }
  selects.objects[id].setCaption = function(caption,margin)
  {
  	selects.setCaption(id,caption,margin);
  }
  selects.objects[id].setFontCaption = function(fontFamily,size,colorFont)
  {
  	selects.setFontCaption(id,fontFamily,size,colorFont)
  }
  selects.objects[id].setColorCaption = function(colorFont)
  {
  	selects.setColorCaption(id,colorFont);
  }
  selects.objects[id].setFontStyleCaption = function(s,w)
  {
  	selects.setFontStyleCaption(id,s,w)
  }
  selects.objects[id].setObjAttrib  =  function(objAttr,env)
  {
    selects.setObjAttrib(id,objAttr,env);
  }
  selects.objects[id].setObjAttribToAll  =  function(objAttrib,env)
  {
    selects.setObjAttribToAll(objAttrib,env);
  }
  selects.objects[id].setEvent  =  function(e,indexEvent)
  {
    selects.setEvent(id,e,indexEvent);
  }
  selects.objects[id].setBasicStruct  =  function(initNum,endNum,structObj)
  {
    selects.setBasicStruct(initNum,endNum,structObj);
  }
  selects.objects[id].setWidth = function(w)
  {
	selects.setWidth(id,w);
  }
  selects.objects[id].setFillValue = function(initValue,endValue)
  {
	selects.setFillValue(id,initValue,endValue);
  }
  selects.objects[id].loadDataStruct = function(dataStruct)
  {
  	selects.loadDataStruct(id,dataStruct);
  }
  selects.objects[id].setBGImg = function(img)
  {
    selects.setBGImg(id,img);
  }
  selects.objects[id].setLoadBGImg = function(activeLoad)
  {
    calendars.setLoadBGImg(id, activeLoad);
  }
//*************************************************************************  
  selects.objects[id].valid = function(objMsg)
  {
	  return selects.valid(id,objMsg);
  }
  selects.objects[id].setValidGreaterThan = function(secondEdit)
  {
	  selects.setValidGreaterThan(id, secondEdit);  
  }    
  selects.objects[id].setValidLessThan = function(secondEdit)
  {
	  selects.setValidLessThan(id, secondEdit);  
  }
  
  selects.objects[id].setValidInteger  =  function()
  {
	  selects.setValidInteger(id);
  }
  selects.objects[id].setValidEmpty  =  function()
  {
	  selects.setValidEmpty(id);
  }
  selects.objects[id].setValidEmail  =  function()
  {
	  selects.setValidEmail(id);
  }
  selects.objects[id].setValidReal  =  function()
  {
	  selects.setValidReal(id);
  }

  selects.objects[id].isEmpty  =  function(s)
  {
    return selects.isEmpty(s);
  }
  selects.objects[id].isEmail  =  function(s)
  {
    return selects.isEmail(s);
  }
  selects.objects[id].isDigit  =  function(c)
  {
    return selects.isDigit(c);
  }
  selects.objects[id].isInteger  =  function(s)
  {
    return selects.isInteger(s);
  }
  selects.objects[id].isIntegerInRange  =  function(s,min,max)
  {
    return selects.isIntegerInRange(s,min,max);
  }
  selects.objects[id].isReal  =  function(s)
  {
    return selects.isReal(s);
  }
  selects.objects[id].setDataType = function(dataType)
  {
	  selects.setDataType(id,dataType)
  }
  
},
//*************************************************************************  
	setDataType : function(id,dataType)
	{
		 this.objects[id].dataType = dataType;
	},

	setValidGreaterThan : function(id, secondEdit)
	{
	  this.objects[id].validGreaterThan = true;
	  this.objects[id].secondEdit = secondEdit;
	},
	
	setValidLessThan : function(id, secondEdit)
	{
	  this.objects[id].validLessThan = true;
	  this.objects[id].secondEdit = secondEdit;
	},
	setValidInteger : function(id)
	{
	  this.validInteger[id]=true;
	  this.setDataType(id,'int');
	},
	setValidEmpty : function(id)
	{
	  this.validEmpty[id]=true;
	},
	setValidEmail : function(id)
	{
	  this.validEmail[id]=true;
	},
	setValidReal : function(id)
	{
	  this.validReal[id]=true;
	  this.setDataType(id,'float');
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
	isEmail : function(s)
	{
	  var positionOfAt;
	  if(this.isEmpty(s))
	    return false;
	  positionOfAt = s.indexOf('@',1);
	  if((positionOfAt == -1) || (positionOfAt == (s.length-1)))
	    return false;
	  return true;
	}, 
	isDigit : function(c)
	{
	  return ((c>="0") && (c<="9"));
	},
	isInteger : function(s)
	{
	  var i;
	  var c;
	  if(this.isEmpty(s))
	    return false;
	  for(i=0; i<s.length; i++)
	  {
	    c=s.charAt(i); 
	    if(!this.isDigit(c))
	      return false;
	  }
	  return true; 
	},
	isIntegerInRange : function(s,min,max)
	{
	  if(this.isEmpty(s))
	    return false; 
	  if(!this.isInteger(s))
	    return false;
	  var num = parseInt(s);
	  return ((num >= min) && (num <= max));
	},
	isReal : function(s)
	{
		 var w=0;
	  if(this.isEmpty(s))
	  {
	    return false;
	  } 
		 var l = parseInt(s.length,10);
	  var ix=0;
	  for(ix=0; ix<l; ix++)
	  {
	    var c = s.charAt(ix); 
	    if(!this.isDigit(c))
	    {   
	      if(s.charAt(ix)!='.')  
	      {
	        return false;
	      }
	      else
	      {	
	        w+=1;
	        if(w > 1 || ix ==l-1)
	        {
	          return false;
	        }  
	      }
	    }
	  } 
	  return true;
	},
	  
	  valid : function(id,objMsg) {
		  var sts = true;
		  var valor = this.getOption(id);
		  
		  if(this.validEmpty[id] && sts) {
		      if(this.isEmpty(this.getOption(id))) {
		    	  this.setBGImg(id, this.bgError);
		    	  if(this.valid.arguments.length < 2 || objMsg==null)
		    		  alert('CAMPO: ['+this.objects[id].cap.nodeValue+'] SIN VALOR');
		    	  else {
		    		  objMsg.setMsg('CAMPO: ['+this.objects[id].cap.nodeValue+'] SIN VALOR', true);  
		    	  }
		    	  this.objects[id].select.focus();
		    	  sts = false;
		      }
		      else {
		    	  if (!this.objects[id].isReadOnly)   
		    		  this.setBGImg(id, this.bgEnable);
		    	  else
		    		  this.setBGImg(id, this.bgDisable);
		    	  if (this.valid.arguments.length == 2)
		    		  objMsg.setMsg('', false);
		      }  
		  }
		  if(this.validInteger[id]) {
		      if (!this.isInteger(valor)) {
				  this.setBGImg(id, this.bgError);
				  if (this.valid.arguments.length < 2 || objMsg==null) 
					  alert('CAMPO: [' + this.objects[id].cap.nodeValue + '] CON VALOR ENTERO NO VALIDO: ' + valor);
				  else 
					  objMsg.setMsg('CAMPO: [' + this.objects[id].cap.nodeValue + '] CON VALOR ENTERO NO VALIDO: ' + valor, true);
				  this.objects[id].select.focus();
				  sts = false;
		      }
		      else {
		    	  if (!this.objects[id].isReadOnly)   
		    		  this.setBGImg(id, this.bgEnable);
				  else
					  this.setBGImg(id, this.bgDisable);
				  if (this.valid.arguments.length == 2)
					  objMsg.setMsg('',false);
			   }	 
		  } 
		  if(this.validEmail[id] && sts) {
			  if(!this.isEmail(this.getOption(id))) {
				  this.setBGImg(id, this.bgError);
				  if(this.valid.arguments.length < 2 || objMsg==null)
					  alert('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON EMAIL NO VALIDO - VALOR:' +this.getOption(id));
				  else
					  objMsg.setMsg('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON EMAIL NO VALIDO - VALOR:' +this.getOption(id), true);  
				  this.objects[id].select.focus();
				  sts = false;
			  }  
			  else {
				  if (!this.objects[id].isReadOnly)   
					  this.setBGImg(id, this.bgEnable);
				  else
					  this.setBGImg(id, this.bgDisable); 
				  if (this.valid.arguments.length == 2)
					  objMsg.setMsg('', false);
			  }  
		  }
		  if(this.validReal[id] && sts) {
		      if(!this.isReal(this.getOption(id))) {
		    	  this.setBGImg(id, this.bgError);
		    	  if(this.valid.arguments.length < 2 || objMsg==null)
		    		  alert('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON VALOR NUMERICO REAL NO VALIDO - VALOR :' +this.getOption(id));
		    	  else
		    		  objMsg.setMsg('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON VALOR NUMERICO REAL NO VALIDO - VALOR :' +this.getOption(id), true);  
		    	  this.objects[id].select.focus();
		    	  sts = false;
		      }
			  else {
				  if (!this.objects[id].isReadOnly)   
					  this.setBGImg(id, this.bgEnable);
				  else
					  this.setBGImg(id, this.bgDisable);  
				  if (this.valid.arguments.length == 2)
					  objMsg.setMsg('',false);
			  }
		  }
		  if(this.objects[id].validGreaterThan && sts) {
			  var v1 = parseFloat(this.getOption(id)); 
			  var v2 = parseFloat(this.objects[id].secondEdit.getOption());
			  if(v1 < v2) {
				  this.setBGImg(id, this.bgError);
				  if(this.valid.arguments.length < 2 || objMsg==null)
					  alert('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON VALOR '+v1+' MENOR QUE ' +v2);
				  else
					  objMsg.setMsg('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON VALOR '+v1+' MENOR QUE ' +v2, true);  
				  this.objects[id].select.focus();
				  sts = false;    
			  }
		  }
		  if(this.objects[id].validLessThan && sts) {
			  var v1 = parseFloat(this.getOption(id)); 
			  var v2 = parseFloat(this.objects[id].secondEdit.getOption());
			  if(v1 > v2) {
				  this.setBGImg(id, this.bgError);
				  if(this.valid.arguments.length < 2 || objMsg==null)
					  alert('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON VALOR '+v1+' MAYOR QUE ' +v2);
				  else
					  objMsg.setMsg('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON VALOR '+v1+' MAYOR QUE ' +v2, true);  
				  this.objects[id].select.focus();
				  sts = false;    
			  }
		  }     
		  this.objects[id].stsValid = sts;
		  return sts; 
	  },  	
	
	
//*************************************************************************  

   setFieldFind : function(id, fieldFind)
   {
     this.objects[id].fieldFind = fieldFind;
   },
   getFieldFind : function(id)
   {
     return this.objects[id].fieldFind;
   },
   addToBody    : function(id)
   {
     document.body.appendChild(this.objects[id]);
   },
   alignCaption : function(id,align)
   {
   	 this.objects[id].rows[0].cells[0].style.textAlign = align;
   },   
   appendToObj : function(id,obj)
   {
     obj.appendChild(this.objects[id]);
   },
   addOption : function(id,option,value)
   {
     var o = document.createElement("OPTION");
     this.objects[id].select.options.add(o);
     this.setOption(id,this.objects[id].select.options.length-1,option);
     this.setValue(id,this.objects[id].select.options.length-1,value);
   },
   addArrOption : function(id, arrOption, arrValues)
   {
   	 var i=0;
   	 for(i=0; i<arrOption.length; i++)
	 {
	 	selects.addOption(id,arrOption[i],arrValues[i]);
	 }
   },
   addBasicStruct : function(id,structDataObject)
   {
     for(ix=0; ix<structDataObject.data.length;ix++)
     {
       this.addOption(id,structDataObject.fields[ix],structDataObject.data[ix]);
     }
   },
   create : function(id,name,caption,margin)  
   {
    this.objects[id] = document.createElement("table");
    this.objects[id].nameComponent = 'selects';
	  this.objects[id].loadBGImg = true;
	  this.ids[this.ids.length] = id;
	  this.objects[id].id=id;
    this.objects[id].name=name;
  	this.objects[id].fieldFind = false;
  	this.objects[id].setAttribute('border','0px'); 
  	this.objects[id].setAttribute('cellPadding','0px');
  	this.objects[id].setAttribute('cellSpacing','0px');
  	this.objects[id].insertRow(0);
  	this.objects[id].rows[0].insertCell(0);
  	this.objects[id].rows[0].insertCell(1);
  	this.objects[id].select=document.createElement('select');
  	this.objects[id].cap = document.createTextNode(caption);
  	this.setFontCaption(id,"arial",12,"black");
  	this.objects[id].rows[0].cells[0].style.width = margin+'px';
    this.objects[id].select.id=id;
    this.objects[id].select.name=name;
    this.objects[id].rows[0].cells[0].appendChild(this.objects[id].cap);
	  this.objects[id].rows[0].cells[1].appendChild(this.objects[id].select); 
	  this.addPropertyMethod(id);
	  if(attrib)
      this.setObjAttrib(id,attrib,attrib.getActualEnv());

	  this.validInteger[id]=false;
    this.validEmpty[id]= false;
    this.validEmail[id]=false; 
	  this.objects[id].dataType = 'string';
	  return this.objects[id];
   },
   
   createMultSelect : function(initNum, endNum)
   {
     for(ix=initNum; ix<=endNum; ix++)
     {
       this.create('select'+ ix,'select'+ ix);
     }
   },
   disable : function(id)
   {
     this.objects[id].select.disabled=true;
     this.objects[id].select.style.opacity=levelOpacityDisable;
   },
   deleteOption : function(id,item)
   { 
     this.objects[id].select.remove(item);
   },
   findOption : function(id, value)
   { 
	 var count = this.objects[id].select.options.length;
	 for(ix=0;ix<count;ix++)
     {
		 if (this.objects[id].select.options[ix].value == value) {
			 this.objects[id].select.selectedIndex = ix;
		 }
     }
   },
   clear : function(id) {
	   this.deleteAll(id);
   },
   deleteAll : function(id)
   { 
	 var count = this.objects[id].select.options.length;
	 for(ix=0;ix<count;ix++)
     {
	   var ultimo = this.objects[id].select.options.length-1;
	   this.objects[id].select.remove(ultimo);
     }
   },
   enable : function(id)
   {
     this.objects[id].select.disabled=false;
     this.objects[id].select.style.opacity=1;
   },
   getOption : function(id,item)
   {
     if(item)  
       return this.objects[id].select.options[item].text
     else
       return this.objects[id].select.options[this.objects[id].select.selectedIndex].text;
   },
   getValue : function(id,item)
   {
     return this.objects[id].select.options[item].value;
   },
   getArrayValue : function(id,item)
   {
     var cadenaValor = this.objects[id].select.options[item].value;
     eval(cadenaValor);
     var arr = array_Value;
     return arr;
   },
   getMultiple : function(id)
   { 
     var tempArr = new Array;
     for(ix=0;ix<this.objects[id].select.options.length;ix++)
     {
       if(this.objects[id].select.options[ix].selected)
         tempArr[tempArr.length]=this.objects[id].select.options[ix].text; 
     }
     return tempArr; 
   },
   getSelectedIndex : function(id)
   {
     return this.objects[id].select.selectedIndex;
   },
   getObject : function(id)
   {
     return this.objects[id];
   },
   getText : function(id) {
	   return this.getSelect(id).value;
   },
   getSelect : function(id)
   {
     return this.objects[id].select;
   },
  loadDataStruct : function(id,dataStruct)
  {
  	this.addArrOption(id, dataStruct.data[0], dataStruct.data[1]);
  },      
   onClick : function(id,func)
   {
     this.objects[id].select.onclick=new Function(func); 
   },
   onChange : function(id,func)
   {
     this.objects[id].select.onchange=new Function(func);  
   },
   onBlur : function(id,func)
   {
     this.objects[id].select.onblur=new Function(func);
   },
   onDblClick : function(id,func)
   {
     this.objects[id].select.ondblclick=new Function(func); 
   }, 
   onFocus : function(id,func)
   {
     this.objects[id].select.onfocus=new Function(func); 
   },
   onKeyDown : function(id,func)
   {
     this.objects[id].select.onkeydown=new Function(func); 
   }, 
   onKeyPress : function(id,func)
   {
     this.objects[id].select.onkeypress=new Function(func); 
   },
   onKeyUp : function(id,func)
   {
     this.objects[id].select.onkeyup=new Function(func); 
   },
   onMouseDown : function(id,func)
   {
     this.objects[id].select.onmousedown=new Function(func); 
   },
   onMouseMove : function(id,func)
   {
     this.objects[id].select.onmousemove=new Function(func); 
   },
   onMouseOut : function(id,func)
   {
     this.objects[id].select.onmouseout=new Function(func); 
   },
   onMouseOver : function(id,func)
   {
     this.objects[id].select.onmouseover=new Function(func); 
   },
   onMouseUp : function(id,func)
   {
     this.objects[id].select.onmouseup=new Function(func); 
   },
   resetPosition : function(id)
   {
     this.objects[id].style.position='relative';
     this.objects[id].style.top='0px';
     this.objects[id].style.left='0px';  
   },
   setOption : function(id,item,value)
   {
     this.objects[id].select.options[item].text=value;
   },
   setValue : function(id,item,value)
   {
	 this.objects[id].select.options[item].value=value;
   }, 
   setArrayValue : function(id,item,arrValue)
   {
     var i=0;
     var cadena='var array_Value = '+'[';
     for(i=0; i<arrValue.length; i++)
     {
       if (i == 0) 
       {
         cadena = cadena + '\''+arrValue[i]+'\'';
       }
       else
       {
         cadena = cadena + ',' + '\''+arrValue[i]+'\'';
       }
     }
     cadena = cadena + '];';
     this.objects[id].select.options[item].value=cadena;
   }, 
   setSelectedIndex : function(id,item)
   {
     this.objects[id].select.selectedIndex=item;
   },
   setMultiple : function(id)
   {
     this.objects[id].select.multiple=true;
   },
   setSimple : function(id)
   {
     this.objects[id].select.multiple=false;
   }, 
   setPosition : function(id,x,y)
   {
     this.objects[id].style.position='absolute';
     this.objects[id].style.top=y+'px';
     this.objects[id].style.left=x+'px';  
   },
   setAttributes : function(id,typesAttribs,valuesAttribs)
   {                             
      this.objects[id].select.setAttribute(typesAttribs,valuesAttribs);    
   },  
   setClassName : function(id,extClass)
   {
     this.setAttributes(id,'className',extClass); 
   },
   setColorText : function(id,val)
   {
     //this.objects[id].select.style.color=val;
   },
   setBGImg : function(id,img)
   {
	  /* this.objects[id].select.style.backgroundImage = 'none';
	   this.objects[id].select.style.backgroundImage = 'url('+this.pathImg+img+')';
	  */
   },
   setFont : function(id,val,size,colorFont)
   {
   /*
     this.objects[id].select.style.fontFamily=val;
     this.objects[id].select.style.fontSize=size+'px';
     this.setColorText(id,colorFont);
    */
   },
   setFontStyle : function(id,s,w)
   {
     //this.objects[id].select.style.fontStyle=s;
     //this.objects[id].select.style.fontWeight=w;
   },   
   setBorderColor : function(id,val)
   {
     //this.setAttributes(id,'borderColor',val);
   },
   setBGColor : function(id,val)
   {
     //this.objects[id].select.style.background=val; 
   },
   setSize : function(id,size)
   {
     this.objects[id].select.size=size; 
   },
   setBorderStyle : function(id,val)
   {
     //this.objects[id].select.style.borderStyle=val; 
   },
   setCaption : function(id,caption,margin)
   {
    /*
   	this.objects[id].cap.nodeValue = caption;
	  this.objects[id].rows[0].cells[0].style.width = margin+'px';	
	  */
   },
   setFontCaption : function(id,fontFamily,size,colorFont)
   {
    /*
    this.objects[id].rows[0].cells[0].style.fontFamily=fontFamily;
	  this.objects[id].rows[0].cells[0].style.fontSize=size+'px';
	  this.setColorCaption(id,colorFont);
	  */
   },
   setColorCaption : function(id,colorFont)
   {
     //this.objects[id].rows[0].cells[0].style.color = colorFont;
   },
   setFontStyleCaption : function(id,s,w)
   {
     //this.objects[id].rows[0].cells[0].style.fontStyle=s;
		 //this.objects[id].rows[0].cells[0].style.fontWeight=w;
   },   
  setObjAttrib : function(id,objAttr,env)
  {
    /*this.setAttributes(id,'border',objAttr.Size.borderSelect[env]);
    this.setAttributes(id,'borderColor',objAttr.Color.borderSelect[env]);
    this.setBGColor(id,objAttr.Color.bgSelect[env]);
    this.setBorderColor(id,objAttr.Color.borderSelect[env]); 
    this.setBorderStyle(id,objAttr.Border.styleSelect[env]);
    this.setFont(id, objAttr.Font.select[env], objAttr.Size.selectFont[env], objAttr.Color.textSelect[env]);
    this.setFontCaption(id, objAttr.Font.select[env], objAttr.Size.selectFont[env], objAttr.Color.textEditorCaption[env]);
	  this.setFontStyle(id, objAttr.Font.styleSelect[env], objAttr.Font.weightSelect[env]);
    this.setFontStyleCaption(id, objAttr.Font.styleEditorCaption[env], objAttr.Font.weightSelect[env]);
    if (this.objects[id].loadBGImg) 
	  {
	 	  this.setBGImg(id, objAttr.BgImg.bgEdit[env]);
	  } 
	  */
	  this.objects[id].select.className = this.objects[id].nameComponent + 'Css' + attrib.getActualEnv();
	  this.objects[id].rows[0].cells[0].className = 'selectsCaptionCss' + attrib.getActualEnv();
  },
  setObjAttribToAll : function(objAttrib,env)
  {
    /*for(i=0;i<this.ids.length;i++)
    {
      this.setObjAttrib(this.ids[i],attrib,env);
    }	
    */
  },   
  setEvent : function(id,e,indexEvent)
  {
     this.objects[id].onclick=e.onClick[indexEvent];
     this.objects[id].onchange=e.onChange[indexEvent];
     this.objects[id].onblur=e.onBlur[indexEvent];
     this.objects[id].ondblclick=e.onDblClick[indexEvent];
     this.objects[id].onfocus=e.onFocus[indexEvent];
     this.objects[id].onkeydown=e.onKeyDown[indexEvent];
     this.objects[id].onkeypress=e.onKeyPress[indexEvent];
     this.objects[id].onkeyup=e.onKeyUp[indexEvent];
     this.objects[id].onmousedown=e.onMouseDown[indexEvent];
     this.objects[id].onmousemove=e.onMouseMove[indexEvent];
     this.objects[id].onmouseout=e.onMouseOut[indexEvent];
     this.objects[id].onmouseover=e.onMouseOver[indexEvent];
     this.objects[id].onmouseup=e.onMouseUp[indexEvent];
  },
  setBasicStruct : function(initNum,endNum,structObj)
  {
    for(ix=initNum; ix<=endNum; ix++)
    {
      this.objects['select'+ix].value=structObj.data[ix-1];
    }
  },
  setWidth : function(id, w)
  {
 	  this.objects[id].select.style.width = w+"px";	 
  },
  setFillValue : function(id,initValue,endValue)
  {	 
    for (var i=initValue; i<=endValue; i++)
    {
	  if (i< 10)
	    i = "0" + i;	 	
	  this.addOption(id,i,i);	 
    }
  },
  setLoadBGImg: function(id, activeLoad)
  {
    //this.objects[id].loadBGImg = activeLoad;
  }
} 

