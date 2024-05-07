var edits= 
{
    INTEGERMASK : 0,
    FLOATMASK : 0,
    MONEYMASK : 0,
    DATEMASK : 0,
    HOURMASK : 0,			
    TELEPHONEMASK : "(###) ###-####",	
    DATEUSMASK : "m/dd/yyyy",
    DATELATINMASK : "dd/mm/yyyy",	
    objects      : new Array,
    ids : new Array,   
    type         : 'text',
    validInteger : new Array,
    validEmpty   : new Array,
    validEmail   : new Array,
    validReal    : new Array,
    bgImgPath :"images/bg/",   
    bgImgEdit :"images/bg/",   
    bgEnable :"bg116",   
    bgDisable :"bg53",   
    bgError :"bgerror.jpg",   
   
addPropertyMethod : function(id)
{
  edits.objects[id].div.addToBody     =  function()
  {
    edits.addToBody(id);
  }
  edits.objects[id].div.alignCaption     =  function(align)
  {
    edits.alignCaption(id,align);
  }
  edits.objects[id].div.appendToObj  =  function(obj)
  {
    edits.appendToObj(id,obj);
  }
  edits.objects[id].div.createMultEdit  =  function(initNum, endNum)
  {
    edits.createMultEdit(initNum, endNum);
  }
  edits.objects[id].div.createMultEditWithCaption  =  function(initNum, endNum, captions, margins)
  {
    edits.createMultEditWithCaption(initNum, endNum, captions, margins);
  }
  edits.objects[id].div.getCaption  =  function()
  {
    return edits.getCaption(id);
  }
  edits.objects[id].div.getValue  =  function()
  {
    return edits.getValue(id);
  }
  edits.objects[id].div.getObject  =  function()
  {
    return edits.getObject(id);
  }
  edits.objects[id].div.getEdit  =  function()
  {
    return edits.getEdit(id);
  }
  edits.objects[id].div.isEmpty  =  function(s)
  {
    return edits.isEmpty(s);
  }
  edits.objects[id].div.isEmail  =  function(s)
  {
    return edits.isEmail(s);
  }
  edits.objects[id].div.isDigit  =  function(c)
  {
    return edits.isDigit(c);
  }
  edits.objects[id].div.isInteger  =  function(s)
  {
    return edits.isInteger(s);
  }
  edits.objects[id].div.isIntegerInRange  =  function(s,min,max)
  {
    return edits.isIntegerInRange(s,min,max);
  }
  edits.objects[id].div.isReal  =  function(s)
  {
    return edits.isReal(s);
  }
  edits.objects[id].div.onClick  =  function(func)
  {
    edits.onClick(id,func);
  }
  edits.objects[id].div.onChange  =  function(func)
  {
    edits.onChange(id,func);
  }
  edits.objects[id].div.onBlur  =  function(func)
  {
    edits.onBlur(id,func);
  }
  edits.objects[id].div.onDblClick  =  function(func)
  {
    edits.onDblClick(id,func);
  }
  edits.objects[id].div.onFocus  =  function(func)
  {
    edits.onFocus(id,func);
  }
  edits.objects[id].div.onKeyDown  =  function(func)
  {
    edits.onKeyDown(id,func);
  }
  edits.objects[id].div.onKeyPress  =  function(func)
  {
    edits.onKeyPress(id,func);
  }
  edits.objects[id].div.onKeyUp  =  function(func)
  {
    edits.onKeyUp(id,func);
  }
  edits.objects[id].div.onMouseDown  =  function(func)
  {
    edits.onMouseDown(id,func);
  }
  edits.objects[id].div.onMouseMove  =  function(func)
  {
    edits.onMouseMove(id,func);
  }
  edits.objects[id].div.onMouseOut  =  function(func)
  {
    edits.onMouseOut(id,func);
  }
  edits.objects[id].div.onMouseOver  =  function(func)
  {
    edits.onMouseOver(id,func);
  }
  edits.objects[id].div.onMouseUp  =  function(func)
  {
    edits.onMouseUp(id,func);
  }
  edits.objects[id].div.readOnly  =  function(readOnly)
  {
    edits.readOnly(id,readOnly);
  }
  edits.objects[id].div.setMask  =  function( mask, maskType)
  {
    edits.setMask(id, mask, maskType);
  }
  edits.objects[id].div.setPosition  =  function(x,y)
  {
    edits.setPosition(id,x,y);
  }
  edits.objects[id].div.resetPosition  =  function()
  {
    edits.resetPosition(id);
  }
  edits.objects[id].div.setCaption  =  function(caption,margin)
  {
    edits.setCaption(id,caption,margin);
  }
  edits.objects[id].div.setIntegerMask  =  function(integers,separator)
  {
    edits.setIntegerMask(id,integers,separator);
  }
  edits.objects[id].div.setValue  =  function(text)
  {
    edits.setValue(id,text);
  }
  edits.objects[id].div.clear  =  function()
  {
    edits.clear(id);
  }
  edits.objects[id].div.setAttributes  =  function(typesAttribs,valuesAttribs)
  {
    edits.setAttributes(id,typesAttribs,valuesAttribs);
  }
  edits.objects[id].div.setClassName  =  function(extClass)
  {
    edits.setClassName(id,extClass);
  }
  edits.objects[id].div.setColorText  =  function(colorFont)
  {
    edits.setColorText(id,colorFont);
  }
  edits.objects[id].div.setColorCaption  =  function(colorFont)
  {
    edits.setColorCaption(id,colorFont);
  }
  edits.objects[id].div.setFont  =  function(fontFamily,size,colorFont)
  {
    edits.setFont(id,fontFamily,size,colorFont);
  }
  edits.objects[id].div.setFontCaption  =  function(fontFamily,size,colorFont)
  {
    edits.setFontCaption(id,fontFamily,size,colorFont);
  }
  edits.objects[id].div.setFontStyle  =  function(s,w)
  {
    edits.setFontStyle(id,s,w);
  }
  edits.objects[id].div.setFontStyleCaption  =  function(s,w)
  {
    edits.setFontStyleCaption(id,s,w);
  }
  edits.objects[id].div.setBorderColor  =  function(color)
  {
    edits.setBorderColor(id,color);
  }
  edits.objects[id].div.setBorderColorMarco  =  function(color)
  {
    edits.setBorderColorMarco(id,color);
  }
  edits.objects[id].div.setBGColor  =  function(color)
  {
    edits.setBGColor(id,color);
  }
  edits.objects[id].div.setBGColorMarco  =  function(color)
  {
    edits.setBGColorMarco(id,color);
  }
  edits.objects[id].div.setSizeEdit  =  function(size)
  {
    edits.setSizeEdit(id,size);
  }
  edits.objects[id].div.setMaxLength  =  function(max)
  {
    edits.setMaxLength(id,max);
  }
  edits.objects[id].div.setBorderStyle  =  function(style)
  {
    edits.setBorderStyle(id,style);
  }
  edits.objects[id].div.setBorderStyleMarco  =  function(style)
  {
    edits.setBorderStyleMarco(id,style);
  }
  edits.objects[id].div.setBorderSizeMarco  =  function(size)
  {
    edits.setBorderSizeMarco(id,size);
  }
  edits.objects[id].div.setObjAttrib  =  function(objAttr,env)
  {
    edits.setObjAttrib(id,objAttr,env);
  }
  edits.objects[id].div.setObjAttribToAll  =  function(objAttrib,env)
  {
    edits.setObjAttribToAll(objAttrib,env);
  }
  edits.objects[id].div.setEvent  =  function(e,indexEvent)
  {
    edits.setEvent(id,e,indexEvent);
  }
  edits.objects[id].div.setValidInteger  =  function()
  {
    edits.setValidInteger(id);
  }
  edits.objects[id].div.setValidEmpty  =  function()
  {
    edits.setValidEmpty(id);
  }
  edits.objects[id].div.setValidEmail  =  function()
  {
    edits.setValidEmail(id);
  }
  edits.objects[id].div.setValidReal  =  function()
  {
    edits.setValidReal(id);
  }
  edits.objects[id].div.setBasicStruct  =  function(initNum,endNum,structObj)
  {
    edits.setBasicStruct(initNum,endNum,structObj);
  }
  edits.objects[id].div.setPassEdit  =  function()
  {
    edits.setPassEdit(id);
  }
  edits.objects[id].div.setTextEdit  =  function()
  {
    edits.setTextEdit(id);
  }
  edits.objects[id].div.leftTrim  =  function(sString)
  {
    return edits.leftTrim(sString);
  }
  edits.objects[id].div.rightTrim  =  function(sString)
  {
    return edits.rightTrim(sString);
  }
  edits.objects[id].div.allTrim  =  function(sString)
  {
    return edits.allTrim(sString);
  }
  edits.objects[id].div.valid  =  function(objMsg)
  {
    return edits.valid(id,objMsg);
  }
  edits.objects[id].div.validAll  =  function()
  {
    edits.validAll();
  }  
  edits.objects[id].div.setValidGreaterThan = function(secondEdit)
  {
    edits.setValidGreaterThan(id, secondEdit);  
  }    
  edits.objects[id].div.setValidLessThan = function(secondEdit)
  {
    edits.setValidLessThan(id, secondEdit);  
  }
  edits.objects[id].div.setLoadBGImg = function(activeLoad)
  {
	edits.setLoadBGImg(id, activeLoad);
  }
  edits.objects[id].div.setLoadBGImgAll = function(activeLoad)
  {
	edits.setLoadBGImgAll(activeLoad);
  }
  edits.objects[id].div.setBgBodyImg = function(bgImg)
  {
  	edits.setBgBodyImg(id, bgImg);
  }
  edits.objects[id].div.setBGImgEdit = function(bgImg)
  {
  	edits.setBGImgEdit(id, bgImg);
  }    
  edits.objects[id].div.setMarginTopBottom = function(marginTB)
  {
  	edits.setMarginTopBottom(id,marginTB);
  }
  edits.objects[id].div.setMarginTopBottomToAll = function(marginTB)
  {
  	edits.setMarginTopBottomToAll(marginTB);
  }
  edits.objects[id].div.setMarginLeftToAll = function(marginL)
  {
  	edits.setMarginLeftToAll(marginL);
  }
  edits.objects[id].div.setMarginRightToAll = function(marginR)
  {
  	edits.setMarginRightToAll(marginR);
  }
  edits.objects[id].div.setMarginLeft = function(marginL)
  {
  	edits.setMarginLeft(id,marginL);
  }
  edits.objects[id].div.setMarginRight = function(marginR)
  {
  	edits.setMarginRight(id,marginR);
  }
  edits.objects[id].div.vAlignCaption = function(align)
  {
  	edits.vAlignCaption(id,align);
  }
  edits.objects[id].div.setFocus = function()
  {
  	edits.setFocus(id);
  }
  edits.objects[id].div.getText = function()
  {
    return edits.getText(id);
  } 
  edits.objects[id].div.setDataType = function(dataType)
  {
  	edits.setDataType(id,dataType)
  }
  edits.objects[id].div.setFieldFind = function(fieldFind)
  {
    edits.setFieldFind(id,fieldFind);
  } 
  edits.objects[id].div.getFieldFind = function()
  {
    return edits.getFieldFind(id);
  }
  edits.objects[id].div.onEnter = function(func) 
  {
  	edits.onEnter(id,func); 
  }
  edits.objects[id].div.onEscape = function(func) 
  {
  	edits.onEscape(id,func); 
  }
  edits.objects[id].div.getCaptionCell = function()
  {
  	return edits.getCaptionCell(id);
  }
  edits.objects[id].div.setWidthContainer = function(widthCaption, margin, widthElement)
  {
  	edits.setWidthContainer(id,widthCaption, margin, widthElement);
  }
  edits.objects[id].div.showGrid = function(sts)
  {
  	edits.showGrid(id,sts);
  }
  edits.objects[id].div.setWidthBoxContainer = function(width)
  {
    edits.setWidthBoxContainer(id,width);	
  }
  edits.objects[id].div.show = function()
  {
    edits.show(id);	
  }
  edits.objects[id].div.hide = function()
  {
    edits.hide(id);	
  }
  edits.objects[id].div.setMaskPhone = function(areaCode)
  {
  	edits.setMaskPhone(id, areaCode);
  }
  edits.objects[id].div.sts_Show = function() {
    edits.sts_Show(id);	
  }
  edits.objects[id].div.delMaskPhone = function(){
  	edits.delMaskPhone(id);
  }
},
   
   addToBody    : function(id)
   {
     document.body.appendChild(this.objects[id].div);
   },
   alignCaption : function(id,align)
   {
   	 this.objects[id].rows[0].cells[0].style.textAlign = align;
   },   
   appendToObj : function(id,obj)
   {
     obj.appendChild(this.objects[id].div);
   },
   
   setWidthContainer : function(id,widthCaption, margin, widthElement)
   {
	 this.objects[id].rows[0].cells[0].style.width = widthCaption+'px';
	 this.objects[id].rows[0].cells[1].style.width = margin+'px';
	 if(widthElement!=null)
	   this.objects[id].rows[0].cells[2].style.width = widthElement + 'px';
   },
   
   showGrid : function(id,sts)
   {
   	for(var i=0; i<this.ids.length;i++)
   	{
   	  if(sts)
   	  {
	    this.objects[this.ids[i]].setAttribute('border','1px');
	    this.objects[this.ids[i]].div.style.borderWidth = '1px';
	    this.objects[this.ids[i]].div.style.borderColor = 'black';
	    this.objects[this.ids[i]].div.style.borderStyle = 'groove';
	  }
	  else
	  {
	  	this.objects[this.ids[i]].setAttribute('border','0px');
	    this.objects[this.ids[i]].div.style.borderWidth = '0px';
	    this.objects[this.ids[i]].div.style.borderStyle = 'none';
	  }	
   	}
   },
   
   setWidthBoxContainer : function(id,width)
   {
     this.objects[id].div.style.width = width + 'px';	
   },
   
   setMaskPhone : function(id, areaCode)
   {  
   	 this.objects[id].isMaskPhone = true;
   	 if(areaCode!=undefined)
   	 {
   	   this.objects[id].paramMaskPhone = areaCode; 
   	   if(this.getValue(id).charAt(0)!='+')
   	     this.setValue(id, '+'+areaCode);
   	 }
   },
   
   delMaskPhone : function(id)
   {  
   	 this.objects[id].isMaskPhone = false;
   	 this.setValue(id,'');
   },

   create : function(id, name, caption, margin, widthCaption, typeEdit)  
   {
     this.objects[id] = document.createElement("table");
     this.objects[id].div = document.createElement("div");
     this.objects[id].isMaskPhone = false;
     this.objects[id].paramMaskPhone = '';
     this.objects[id].div.sts_Show = true;
     this.objects[id].div.secondEdit = new Object();
     this.objects[id].div.validGreaterThan = false;
     this.objects[id].div.validLessThan = false;
     this.objects[id].isReadOnly = false;
	 this.objects[id].div.hideId = -1;
     this.objects[id].div.id = id;
     this.objects[id].div.align ='left';     
     this.objects[id].div.style.padding = '0px';
     this.objects[id].div.style.borderWidth = '0px';
     this.objects[id].div.appendChild(this.objects[id]);
     this.objects[id].div.nameComponent = 'edits';
     this.objects[id].nameComponent = 'edits';
     this.objects[id].captionText=caption;
	 this.objects[id].loadBGImg = true;
	 this.objects[id].dataType = 'string';
	 this.objects[id].div.dataType = 'string';
	 this.objects[id].fieldFind = false;
	 this.ids[this.ids.length] = id;
	 this.objects[id].onFocus = new Function('');
	 this.objects[id].stsValid = true;
	 this.objects[id].div.stsValid = true;
	 this.objects[id].onkeyPress = new Function('');
	 this.objects[id].setAttribute('border','0px'); 
	 this.objects[id].setAttribute('cellPadding','0px');
	 this.objects[id].setAttribute('cellSpacing','0px');
	 //this.objects[id].style.borderWidth = '0px';
	 //this.objects[id].style.borderStyle = 'none';
	 //this.objects[id].style.fontSize = '0px';
	 this.objects[id].insertRow(0);
	 this.objects[id].rows[0].insertCell(0);
	 this.objects[id].rows[0].insertCell(1);
	 this.objects[id].rows[0].insertCell(2);
	 this.objects[id].rows[0].insertCell(3);
	 this.objects[id].rows[0].cells[0].align = 'left';
	 this.objects[id].rows[0].cells[1].align = 'left';
	 this.objects[id].rows[0].cells[2].align = 'left';
	 this.objects[id].rows[0].cells[3].align = 'left';
	 //this.objects[id].style.borderWidth = '0px';
	 this.objects[id].edit=document.createElement('input');
	 //this.objects[id].edit.style.backgroundColor = 'rgba(0,0,0,0)';
	 //this.objects[id].edit.style.borderWidth='1px';
	 //this.objects[id].edit.style.borderRadius='0em';
	 //this.objects[id].edit.style.padding = '0px';
	 this.objects[id].cap = document.createTextNode(caption);
	 this.objects[id].widthCaption = 0;
	 this.setFontCaption(id,"tahoma",12,"black");
	 this.objects[id].margin = margin; 
	 this.objects[id].rows[0].cells[1].style.width = margin+'px';
	 
	 var w = this.measureText(caption,12,null).width + this.getBlank(caption)*6;
	 
	 if (widthCaption!=null && widthCaption!=undefined)
	 {
	 	this.objects[id].rows[0].cells[0].style.width = widthCaption +'px'; 
	 	this.objects[id].widthCaption = widthCaption;
	 }  
     else
     {
       this.objects[id].rows[0].cells[0].style.width = w +'px';
     }
	 if(edits.create.arguments.length < 5)
       this.objects[id].edit.type=this.type;
	 else
	   if (typeEdit!='password')
	     this.objects[id].edit.type='text'
	   else  
	     this.objects[id].edit.type=typeEdit;
     this.objects[id].edit.id=id;
	 this.objects[id].id = id;
     this.objects[id].edit.name=name;
     this.validInteger[id]=false;
     this.validEmpty[id]= false;
     this.validEmail[id]=false; 
	 this.objects[id].rows[0].cells[0].appendChild(this.objects[id].cap);
	 this.objects[id].rows[0].cells[2].appendChild(this.objects[id].edit);
	 this.addPropertyMethod(id);
	 this.objects[id].edit.onEnter = new Function('');
	 this.objects[id].edit.onEscape = new Function('');
	 this.objects[id].edit.keyNum =0;
	 this.objects[id].edit.onchange = new Function('');  
	 
	 this.objects[id].edit.onkeypress = function(e)
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
	   edits.objects[id].edit.keyNum = e;
	   edits.objects[id].onkeyPress();
	   if (!edits.objects[id].stsValid)	
	     if (!edits.objects[id].isReadOnly)   
            edits.setBGImgEdit(id, edits.bgEnable);
          else
            edits.setBGImgEdit(id, edits.bgDisable);
	   
	   switch (edits.objects[id].edit.keyNum)
	   {
	   	  case 13 : {edits.objects[id].edit.onEnter();break; }
	   	  case 27 : {edits.objects[id].edit.onEscape();break; }
	   	  default : {edits.objects[id].edit.onchange();break; }
	   };
	 };
	 
	 this.objects[id].edit.onkeyup = function(e)
	 {
	   if (edits.objects[id].isMaskPhone)
	   {
	     var x = edits.objects[id].edit.value.length;
	     var s = edits.objects[id].edit.value;
	   	 if(x>1)
	   	   if(!edits.isDigit(s.charAt(x-1)))
	   	     edits.objects[id].edit.value = '+'+edits.objects[id].paramMaskPhone; 
	   	 if (s.charAt(0)!='+')
	   	   edits.objects[id].edit.value = '+'+edits.objects[id].paramMaskPhone;  
	   	 if (x > 3)  
	       if (s.charAt(3)=='0')
	         edits.objects[id].edit.value=s.substr(0,3)+s.substr(4,x-1); 
       };
	 }
	 	 
	 this.objects[id].edit.onfocus = function(e)
	 {	
	   edits.objects[id].onFocus();	
	 }
	 this.vAlignCaption(id,'middle');
	 this.objects[id].div.style.height ='17px';
	 this.objects[id].div.style.lineHeight ='17px';
	 this.objects[id].div.vAlign ='middle';
	 this.objects[id].edit.style.height ='17px';
	 this.objects[id].edit.style.lineHeight ='17px';
	 //this.objects[id].rows[0].cells[0].style.fontSize='0px';
	 //this.objects[id].rows[0].cells[0].style.height = '0px';
   	 //this.objects[id].rows[0].cells[0].style.lineHeight = '0px';
   	 this.objects[id].rows[0].cells[2].style.height = '0px';
   	 this.objects[id].rows[0].cells[2].style.lineHeight = '0px';
	 this.objects[id].rows[0].cells[0].vAlign = 'middle';
	 this.objects[id].rows[0].cells[2].vAlign = 'middle';
	 if(attrib)
       this.setObjAttrib(id,attrib,attrib.getActualEnv());
	 return this.objects[id].div;
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
  
  setBorderColor : function(id, borderColor)
  {
  	 //this.objects[id].edit.style.borderColor = borderColor;
  },
  
   createMultEdit : function(initNum, endNum)
   {
     for(ix=initNum; ix<=endNum; ix++)
     {
       this.create('edit'+ ix,'edit'+ ix,"",0);
     }
   },
   createMultEditWithCaption : function(initNum, endNum, captions, margins)
   {
     for(ix=initNum; ix<=endNum; ix++)
     {
       i = (ix-initNum);
	   this.create('edit'+ ix,'edit'+ ix,captions[i],margins[i]);
     }
   },
   
   getCaption : function(id)
   {
   	return this.objects[id].cap.nodeValue;
   },
   
   getCaptionCell : function(id)
   {
   	return this.objects[id].rows[0].cells[0];
   },

   hide : function(id)
   {
   	 this.objects[id].div.style.display='none';
   	 this.objects[id].div.sts_Show = false;
   },
   
   show : function(id)
   {
   	 this.objects[id].div.style.display='block';
   	 this.objects[id].div.sts_Show = true;
   },
   
   sts_Show : function() { 
	   	return this.objects[id].div.sts_Show;
   },
   
   getValue : function(id)
   {
     return this.objects[id].edit.value;
   },

   getText : function(id)
   {
     return this.objects[id].edit.value;
   },

   getObject : function(id)
   {
     return this.objects[id].div;
   },
   
   getEdit : function(id)
   {
     return this.objects[id].edit;
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
   
   onClick : function(id,func)
   {
	   var fn = new Function(func);
	   this.objects[id].edit.onclick=function(e){
		   if(!edits.objects[id].isReadOnly)
			 fn();  
	   }
   },
   
   onChange : function(id,func)
   {
     this.objects[id].edit.onchange = new Function(func);  
   },
   
   onBlur : function(id,func)
   {
     this.objects[id].edit.onblur=new Function(func);
   },
   
   onDblClick : function(id,func)
   {
     this.objects[id].edit.ondblclick=new Function(func); 
   },
    
   onFocus : function(id,func)
   {
     this.objects[id].onFocus = new Function(func); 
   },
   
   onKeyDown : function(id,func)
   {
     this.objects[id].edit.onkeydown=new Function(func); 
   },
    
   onKeyPress : function(id,func)
   {
     this.objects[id].onKeyPress=Function(func); 
   },
   
   onKeyUp : function(id,func)
   {
     this.objects[id].edit.onkeyup=new Function(func); 
   },

   onEnter : function(id,func)
   {
     this.objects[id].edit.onEnter = new Function(func); 
   },

   onEscape : function(id,func)
   {
     this.objects[id].edit.onEscape = new Function(func); 
   },
   
   onMouseDown : function(id,func)
   {
     this.objects[id].edit.onmousedown=new Function(func); 
   },
   
   onMouseMove : function(id,func)
   {
     this.objects[id].edit.onmousemove=new Function(func); 
   },
   
   onMouseOut : function(id,func)
   {
     this.objects[id].edit.onmouseout=new Function(func); 
   },
   
   onMouseOver : function(id,func)
   {
     this.objects[id].edit.onmouseover=new Function(func); 
   },
   
   onMouseUp : function(id,func)
   {
     this.objects[id].edit.onmouseup=new Function(func); 
   },
   
    readOnly : function(id,readOnly)
    {
  	  this.objects[id].edit.readOnly = readOnly;
  	  this.objects[id].isReadOnly = readOnly;
  	  if (readOnly)
      this.objects[id].edit.style.opacity = levelOpacityDisable;
  	    //this.setBGImgEdit(id,this.bgDisable);
  	  else
        this.objects[id].edit.style.opacity = 1;
  	    //this.setBGImgEdit(id,this.bgEnable);
    },
      
   setMask : function(id, mask, maskType)
   {
   	 this.objects[id].mask = new Mask(mask, maskType);
     this.objects[id].mask.attach(this.getEdit(id));
   },
   setFocus : function(id)
   {
   	 this.objects[id].edit.focus();   
   },
   setPosition : function(id,x,y)
   {
     this.objects[id].style.position='absolute';
     this.objects[id].style.top=y+'px';
     this.objects[id].style.left=x+'px';  
   },
   
   resetPosition : function(id)
   {
     this.objects[id].style.position='relative';
     this.objects[id].style.top='0px';
     this.objects[id].style.left='0px';  
   },
   
   setCaption : function(id,caption,margin)
   {
   	 this.objects[id].cap.nodeValue = caption;
	 this.objects[id].rows[0].cells[1].style.width = margin;	
   },

   setDataType : function(id,dataType)
   {
   	 this.objects[id].dataType = dataType;
   	 this.objects[id].div.dataType = dataType;
   },
   
   setIntegerMask : function(id,integers,separator)
   {
     this.objects[id].mask = this.INTEGERMASK;
	 this.objects[id].mask.integer = integers;
	 this.objects[id].mask.separator = separator;
	 this.objects[id].edit.style.textAlign="right";
	 if(this.objects[id].edit.value=="")
	 {
	   this.objects[id].edit.value = "0";	
	 } else if(this.isInteger(this.objects[id].edit.value))
	   {
	   	s = "";
		for(i=this.objects[id].edit.value.length-1;i>=0;i--)
		{
		  if((!((i+1)%3))&& i != this.objects[id].edit.value.length-1)
		  {
		  	s = this.objects[id].edit.value[i] + separator + s
		  }	
		  else s = this.objects[id].edit.value[i] + s
		}
		this.objects[id].edit.value = s;
	   } 
	 this.objects[id].edit.onkeydown = function(event)
	 {
	 	alert(String.fromCharCode(event.keyCode));
	 }
   },

   setValue : function(id,text)
   {
     this.objects[id].edit.value=text;  
   },
   
   clear : function(id)
   {
     this.objects[id].edit.value='';  
   },
   
   setAttributes : function(id,typesAttribs,valuesAttribs)
   {                             
      this.objects[id].edit.setAttribute(typesAttribs,valuesAttribs);    
   },
     
   setClassName : function(id,extClass)
   {
     this.setAttributes(id,'className',extClass); 
   },
   
   setColorText : function(id,colorFont)
   {
     //this.objects[id].edit.style.color=colorFont;
   },
   
   setColorCaption : function(id,colorFont)
   {
     //this.objects[id].rows[0].cells[0].style.color = colorFont;
   },
   
   setFont : function(id,fontFamily,size,colorFont)
   {
     //this.objects[id].edit.style.fontFamily=fontFamily;
     //this.objects[id].edit.style.fontSize=size+'px';
	  this.setColorText(id,colorFont);
   },
   
   setFontCaption : function(id,fontFamily,size,colorFont)
   {
    //this.objects[id].rows[0].cells[0].style.fontFamily=fontFamily;
	  //this.objects[id].rows[0].cells[0].style.fontSize=size+'px';
	  this.setColorCaption(id,colorFont);
   },
   
   setFontStyle : function(id,s,w)
   {
     //this.objects[id].edit.style.fontStyle=s;
     //this.objects[id].edit.style.fontWeight=w;
   },   
   
   setFontStyleCaption : function(id,s,w)
   {
     //this.objects[id].rows[0].cells[0].style.fontStyle=s;
     //this.objects[id].rows[0].cells[0].style.fontWeight=w;
   },
   
   setBorderColorMarco : function(id,color)
   {
	 this.objects[id].setAttribute('borderColor',color);
   },
   
   setBGColor : function(id,color)
   {
    //this.objects[id].edit.style.background=color; 
   },
   
   setBGColorMarco : function(id,color)
   {
     //this.objects[id].style.background=color; 
   },
   
   setSizeEdit : function(id,size)
   { 
     this.objects[id].edit.style.width = size+'px';
     if(this.objects[id].widthCaption==undefined || this.objects[id].widthCaption==null)
       this.objects[id].widthCaption = 100;
     if(this.objects[id].margin==undefined || this.objects[id].margin==null)
       this.objects[id].margin = 30;
     var wt = parseInt(this.objects[id].widthCaption,10) + parseInt(this.objects[id].margin,10) + parseInt(size,10);
	 this.setWidthBoxContainer(id,wt);
   },
   
   setMaxLength : function(id,max)
   {
     this.objects[id].edit.maxLength=max; 
   },
   
   setBorderStyle : function(id,style)
   {
     //this.objects[id].edit.style.borderStyle=style; 
   },
   
   setBorderStyleMarco : function(id,style)
   {
     //this.objects[id].style.borderStyle=style; 
   },
   
   setBorderSizeMarco : function(id,size)
   {
     this.objects[id].setAttribute('border',size+'px'); 
   },
   
   setObjAttrib : function(id,objAttr,env)
   {
   /*
   	 this.objects[id].loadBGImg = objAttr.getLoadBGImg(); 
     this.setAttributes(id,'borderColor',objAttr.Color.border[env]);
	 this.setBGColorMarco(id,objAttr.Color.bgEditorMarco[env]);
     this.setSizeEdit(id,objAttr.Size.editLength[env]);
     this.setBorderColor(id,objAttr.Color.borderEditor[env]);
     this.setBorderStyle(id,objAttr.Border.styleEditor[env]);
     this.setFont(id, objAttr.Font.editor[env], objAttr.Size.editFont[env], objAttr.Color.textEditor[env]);
	 this.setFontCaption(id, objAttr.Font.editorCaption[env], objAttr.Size.editFontCaption[env], objAttr.Color.textEditorCaption[env]);
     this.setFontStyle(id, objAttr.Font.styleEditor[env], objAttr.Font.weightEditor[env]);
	 this.setFontStyleCaption(id, objAttr.Font.styleEditorCaption[env], objAttr.Font.weightEditorCaption[env]); 
	 if(this.objects[id].loadBGImg)
	 {	
	   this.bgEnable = objAttr.BgImg.bgEdit[env];
	   this.bgDisable = objAttr.BgImg.bgButtonDisable[env];
	   if (!this.objects[id].isReadOnly)   
          this.setBGImgEdit(id, this.bgEnable);
       else
          this.setBGImgEdit(id, this.bgDisable);
	   this.bgError=objAttr.BgImg.bgError[env];
	 }
	 var size = parseInt(objAttr.Size.editFont[env],10);
	 */
	  this.objects[id].className = this.objects[id].nameComponent + 'Css'+attrib.getActualEnv();
	  this.objects[id].edit.className = 'editorCss'+attrib.getActualEnv();
	  this.objects[id].rows[0].cells[0].className = 'editCaptionCss'+attrib.getActualEnv();
   },
   
  setObjAttribToAll : function(objAttrib,env)
  {
    for(i=0;i<this.ids.length;i++)
    {
      this.setObjAttrib(this.ids[i],attrib,env);
    }	
},
   
   setEvent : function(id,e,indexEvent)
   {
     this.objects[id].edit.onclick=e.onClick[indexEvent];
     this.objects[id].edit.onchange=e.onChange[indexEvent];
     this.objects[id].edit.onblur=e.onBlur[indexEvent];
     this.objects[id].edit.ondblclick=e.onDblClick[indexEvent];
     this.objects[id].edit.onfocus=e.onFocus[indexEvent];
     this.objects[id].edit.onkeydown=e.onKeyDown[indexEvent];
     this.objects[id].edit.onkeypress=e.onKeyPress[indexEvent];
     this.objects[id].edit.onkeyup=e.onKeyUp[indexEvent];
     this.objects[id].edit.onmousedown=e.onMouseDown[indexEvent];
     this.objects[id].edit.onmousemove=e.onMouseMove[indexEvent];
     this.objects[id].edit.onmouseout=e.onMouseOut[indexEvent];
     this.objects[id].edit.onmouseover=e.onMouseOver[indexEvent];
     this.objects[id].edit.onmouseup=e.onMouseUp[indexEvent];
   },
   
   setValidGreaterThan : function(id, secondEdit)
   {
     this.objects[id].div.validGreaterThan = true;
     this.objects[id].div.secondEdit = secondEdit;
   },
   
   setValidLessThan : function(id, secondEdit)
   {
     this.objects[id].div.validLessThan = true;
     this.objects[id].div.secondEdit = secondEdit;
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
   setBasicStruct : function(initNum,endNum,structObj)
   {
     for(ix=initNum; ix<=endNum; ix++)
     {
	   this.setValue('edit'+ix,structObj.data[ix-1]);
     }
   },
   setPassEdit : function(id)
   {
   	 this.objects[id].edit.type = 'password';  	 
   },
   setTextEdit : function(id)
   {
     this.objects[id].edit.type = 'text';
   }, 
   leftTrim : function(sString)
   {
     while(sString.substring(0,1)==' ')
     {
       sString = sString.substring(1, sString.length);
     }
     return sString;
   },
   
   rightTrim : function(sString)
   {
     while(sString.substring(sString.length-1,sString.length)==' ')
     {
       sString = sString.substring(0, sString.length-1);
     }
     return sString;
   },  
   
  setBgBodyImg : function(id, bgImg)
  {
  	//this.objects[id].rows[0].cells[0].style.backgroundImage="url("+this.bgImgPath+bgImg+")";
  	//this.objects[id].rows[0].cells[1].style.backgroundImage="url("+this.bgImgPath+bgImg+")";
  },	
  
  setLoadBGImg : function(id, activeLoad)
  {
  	this.objects[id].loadBGImg = activeLoad;
  },
   setMarginLeft : function(id,marginL)
   {
	 this.objects[id].rows[0].cells[0].width = marginL+'px';
   },
   setMarginLeftToAll : function(marginL)
   {
	 for (i = 0; i < this.ids.length; i++) 
	 {
	 	this.setMarginLeft(this.ids[i],marginL);
	 }
   },
   setMarginRightToAll : function(marginR)
   {
	 for (i = 0; i < this.ids.length; i++) 
	 {
	 	this.setMarginRight(this.ids[i],marginR);
	 }
   },   
   setMarginRight : function(id,marginR)
   {
	 this.objects[id].rows[0].cells[3].width = marginR+'px';
   },
   setMarginTopBottom : function(id,marginTB)
   {
	 var mtb = parseInt(marginTB,10);
   	 this.objects[id].rows[0].style.height = mtb + 'px';
   },  
   setMarginTopBottomToAll : function(marginTB)
   {
     for (i = 0; i < this.ids.length; i++) 
	 {
	 	this.setMarginTopBottom(this.ids[i],marginTB);
	 }	
   }, 
  setBGImgEdit : function(id, bgImg)
  {
    //this.objects[id].edit.style.backgroundImage = 'none';
  	//this.objects[id].edit.style.backgroundImage = 'url(images/bg/'+bgImg+')';
  },
  
  setLoadBGImgAll : function(activeLoad)
  {
  	for(i=0;i<this.ids.length;i++)
    {
      this.setLoadBGImg(this.ids[i],activeLoad);
    }
  },
  
   getFieldFind : function(id)
   {
     return this.objects[id].fieldFind;
   },

   setFieldFind : function(id, fieldFind)
   {
     this.objects[id].fieldFind = fieldFind;
   },
  
   allTrim : function(sString)
   {
     var s1 = edits.leftTrim(sString);
     var s2 = edits.rightTrim(s1);
     return s2;
   },     
   
   valid : function(id,objMsg)
   {     
     var sts = true;
     var valor = this.getValue(id);
     if(this.validInteger[id]) 
     {
       if (!this.isInteger(valor)) 
	   {
		  this.setBGImgEdit(id, this.bgError);
		  if (this.valid.arguments.length < 2 || objMsg==null) 
		  	 alert('CAMPO: [' + this.objects[id].cap.nodeValue + '] CON VALOR ENTERO NO VALIDO: ' + valor);
		  else 
		 	 objMsg.setMsg('CAMPO: [' + this.objects[id].cap.nodeValue + '] CON VALOR ENTERO NO VALIDO: ' + valor, true);
		  this.objects[id].edit.focus();
		  sts = false;
	   }
	   else 
	   {
	      if (!this.objects[id].isReadOnly)   
		    this.setBGImgEdit(id, this.bgEnable);
		  else
		    this.setBGImgEdit(id, this.bgDisable);
		  if (this.valid.arguments.length == 2)
		    objMsg.setMsg('',false);
	   }	 
     } 
     if(this.validEmpty[id] && sts) 
     {
       if(this.isEmpty(this.getValue(id)))
       {
	     this.setBGImgEdit(id, this.bgError);
	   	 if(this.valid.arguments.length < 2 || objMsg==null)
           alert('CAMPO: ['+this.objects[id].cap.nodeValue+'] SIN VALOR');
		 else{
           
		   objMsg.setMsg('CAMPO: ['+this.objects[id].cap.nodeValue+'] SIN VALOR', true);  
         }
         this.objects[id].edit.focus();
         sts = false;
       }
	   else
	   {
	   	 if (!this.objects[id].isReadOnly)   
            this.setBGImgEdit(id, this.bgEnable);
          else
            this.setBGImgEdit(id, this.bgDisable);
		 if (this.valid.arguments.length == 2)
		    objMsg.setMsg('', false);
	   }  
     }
     if(this.validEmail[id] && sts) 
     {
       if(!this.isEmail(this.getValue(id)))
       {
	   	 this.setBGImgEdit(id, this.bgError);
	   	 if(this.valid.arguments.length < 2 || objMsg==null)
           alert('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON EMAIL NO VALIDO - VALOR:' +this.getValue(id));
		 else
		   objMsg.setMsg('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON EMAIL NO VALIDO - VALOR:' +this.getValue(id), true);  
         this.objects[id].edit.focus();
         sts = false;
       }  
	   else
	   {
	   	 if (!this.objects[id].isReadOnly)   
            this.setBGImgEdit(id, this.bgEnable);
          else
            this.setBGImgEdit(id, this.bgDisable); 
		 if (this.valid.arguments.length == 2)
		    objMsg.setMsg('', false);
	   }  
     }
     if(this.validReal[id] && sts) 
     {
       if(!this.isReal(this.getValue(id)))
       {
	   	 this.setBGImgEdit(id, this.bgError);
		 if(this.valid.arguments.length < 2 || objMsg==null)
           alert('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON VALOR NUMERICO REAL NO VALIDO - VALOR :' +this.getValue(id));
		 else
		   objMsg.setMsg('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON VALOR NUMERICO REAL NO VALIDO - VALOR :' +this.getValue(id), true);  
         this.objects[id].edit.focus();
         sts = false;
       }
	   else
	   {
	     if (!this.objects[id].isReadOnly)   
            this.setBGImgEdit(id, this.bgEnable);
          else
            this.setBGImgEdit(id, this.bgDisable);  
		 if (this.valid.arguments.length == 2)
		    objMsg.setMsg('',false);
	   }
	        
     }
     if(this.objects[id].div.validGreaterThan && sts) 
     {
       var v1 = parseFloat(this.getValue(id)); 
       var v2 = parseFloat(this.objects[id].div.secondEdit.getValue());
       if(v1 < v2)
       {
         this.setBGImgEdit(id, this.bgError);
         if(this.valid.arguments.length < 2 || objMsg==null)
           alert('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON VALOR '+v1+' MENOR QUE ' +v2);
         else
           objMsg.setMsg('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON VALOR '+v1+' MENOR QUE ' +v2, true);  
         this.objects[id].edit.focus();
         sts = false;    
       }
     }
     if(this.objects[id].div.validLessThan && sts) 
     {
       var v1 = parseFloat(this.getValue(id)); 
       var v2 = parseFloat(this.objects[id].div.secondEdit.getValue());
       if(v1 > v2)
       {
         this.setBGImgEdit(id, this.bgError);
         if(this.valid.arguments.length < 2 || objMsg==null)
           alert('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON VALOR '+v1+' MAYOR QUE ' +v2);
         else
           objMsg.setMsg('CAMPO: ['+this.objects[id].cap.nodeValue+'] CON VALOR '+v1+' MAYOR QUE ' +v2, true);  
         this.objects[id].edit.focus();
         sts = false;    
       }
     }     
	 this.objects[id].stsValid = sts;
     return sts; 
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
   vAlignCaption : function(id,align)
   {
   	 this.objects[id].rows[0].cells[0].vAlign = align;
   }
} 

