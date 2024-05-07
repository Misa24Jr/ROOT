var memo= 
{
   objects : [],
   ids : [],
   bgImgPath :"images/bg/",   
   imgEnable : "bg136.jpg",  
   imgDisable : "bg53.jpg",
   bgError :"bgerror.jpg",   
   addPropertyMethod : function(id)
   {
      memo.objects[id].setFieldFind = function(fieldFind)
      {
       memo.setFieldFind(id,fieldFind);
      }; 
      memo.objects[id].getFieldFind = function()
      {
        return memo.getFieldFind(id);
      }; 
      memo.objects[id].addToBody     =  function()
      {
        memo.addToBody(id);
      };
      memo.objects[id].appendToObj  =  function(obj)
      {
        memo.appendToObj(id,obj);
      };
      memo.objects[id].createMultTextArea  =  function(initNum, endNum)
      {
        memo.createMultTextArea(initNum, endNum);
      };
      memo.objects[id].getText  =  function()
      {
        return memo.getText(id);
      };
      memo.objects[id].getObject  =  function()
      {
        return memo.getObject(id);
      };
      memo.objects[id].onClick  =  function(func)
      {
        memo.onClick(id,func);
      };
      memo.objects[id].onChange  =  function(func)
      {
        memo.onChange(id,func);
      };
      memo.objects[id].onBlur  =  function(func)
      {
        memo.onBlur(id,func);
      };
      memo.objects[id].onDblClick  =  function(func)
      {
        memo.onDblClick(id,func);
      };
      memo.objects[id].onFocus  =  function(func)
      {
        memo.onFocus(id,func);
      };
      memo.objects[id].onKeyDown  =  function(func)
      {
        memo.onKeyDown(id,func);
      };
      memo.objects[id].onKeyPress  =  function(func)
      {
        memo.onKeyPress(id,func);
      };
      memo.objects[id].onKeyUp  =  function(func)
      {
        memo.onKeyUp(id,func);
      };
      memo.objects[id].onMouseDown  =  function(row,func)
      {
        memo.onMouseDown(id,row,func);
      };
      memo.objects[id].onMouseMove  =  function(func)
      {
        memo.onMouseMove(id,func);
      };
      memo.objects[id].onMouseOut  =  function(func)
      {
        memo.onMouseOut(id,func);
      };
      memo.objects[id].onMouseOver  =  function(func)
      {
        memo.onMouseOver(id,func);
      };
      memo.objects[id].onMouseUp  =  function(func)
      {
        memo.onMouseUp(id,func);
      };
      memo.objects[id].setPosition  =  function(x,y)
      {
        memo.setPosition(id,x,y);
      };
      memo.objects[id].resetPosition  =  function()
      {
        memo.resetPosition(id);
      };
      memo.objects[id].setReadOnly  =  function()
      {
        memo.setReadOnly(id);
      };
      memo.objects[id].setEditMode  =  function()
      {
        memo.setEditMode(id);
      };
      memo.objects[id].setText  =  function(text)
      {
        memo.setText(id,text);
      };
      memo.objects[id].clear = function()
      {
        memo.clear(id);
      };
      memo.objects[id].setValue  =  function(text)
      {
        memo.setValue(id,text);
      };
      memo.objects[id].setAttributes  =  function(typesAttribs,valuesAttribs)
      {
        memo.setAttributes(id,typesAttribs,valuesAttribs);
      };
      memo.objects[id].setClassName  =  function(extClass)
      {
        memo.setClassName(id,extClass);
      };
      memo.objects[id].setColorText  =  function(val)
      {
        memo.setColorText(id,val);
      };
      memo.objects[id].setFont  =  function(val,size,colorFont)
      {
        memo.setFont(id,val,size,colorFont);
      };
      memo.objects[id].setFontStyle  =  function(s,w)
      {
        memo.setFontStyle(id,s,w);
      };
      memo.objects[id].setBorderColor  =  function(val)
      {
        memo.setBorderColor(id,val);
      };
      memo.objects[id].setBGColor  =  function(val)
      {
        memo.setBGColor(id,val);
      };
      memo.objects[id].setColMemo  =  function(size)
      {
        memo.setColMemo(id,size);
      };
      memo.objects[id].setRowMemo  =  function(rows)
      {
        memo.setRowMemo(id,rows);
      };
      memo.objects[id].setBorderStyle  =  function(val)
      {
        memo.setBorderStyle(id,val);
      };
      memo.objects[id].setObjAttrib  =  function(objAttr,env)
      {
        memo.setObjAttrib(id,objAttr,env);
      };
      memo.objects[id].setObjAttribToAll  =  function(objAttrib,env)
      {
        memo.setObjAttribToAll(objAttrib,env);
      };
      memo.objects[id].setEvent  =  function(e,indexEvent)
      {
        memo.setEvent(id,e,indexEvent);
      };
      memo.objects[id].setBasicStruct  =  function(initNum,endNum,structObj)
      {
        memo.setBasicStruct(initNum,endNum,structObj);
      };
      memo.objects[id].setDimension = function(w,h)
      {
       memo.setDimension(id,w,h); 
      };
      memo.objects[id].setLoadBGImg = function(activeLoad)
      {
       memo.setLoadBGImg(id, activeLoad);
      };
      memo.objects[id].setLoadBGImgAll = function(activeLoad)
      {
       memo.setLoadBGImgAll(activeLoad);
      };
      memo.objects[id].setBgBodyImg = function(bgImg)
      {
       memo.setBgBodyImg(id, bgImg);
      };
      memo.objects[id].setColorTextCaption = function(val)  
      {
       memo.setColorTextCaption(id,val);
      };
      memo.objects[id].setFontCaption = function(val,size,colorFont)
      {
       memo.setFontCaption(id,val,size,colorFont);
      },
      memo.objects[id].setMarginLeft = function(marginL)
      {
       memo.setMarginLeft(id,marginL);
      };
      memo.objects[id].setMarginLeftToAll = function(marginL)
      {
       memo.setMarginLeftToAll(marginL);
      };
      memo.objects[id].setMarginRightToAll = function(marginR)
      {
       memo.setMarginRightToAll(marginR);
      };   
      memo.objects[id].setMarginRight = function(marginR)
      {
       memo.setMarginRight(id,marginR);
      };
      memo.objects[id].setMarginTopBottom = function(marginTB)
      {
       memo.setMarginTopBottom(id,marginTB);
      };  
      memo.objects[id].setMarginTopBottomToAll = function(marginTB)
      {
       memo.setMarginTopBottomToAll(marginTB);
      };
      memo.objects[id].vAlignCaption = function(align)
      {
       memo.vAlignCaption(id,align);
      };
      memo.objects[id].setValidEmpty = function()
      {
       memo.setValidEmpty(id);
      };
      memo.objects[id].valid = function(objMsg)
      {
       return memo.valid(id,objMsg);
      };
      memo.objects[id].validAll = function(objMsg)
      {
       memo.validAll(objMsg);
      };
      memo.objects[id].setMaxLength = function(max)
      {
       memo.setMaxLength(id,max);
      };
      memo.objects[id].onEnter = function(funct)
      {
        memo.onEnter(id,funct);	
      };
      memo.objects[id].onEscape = function(funct)
      {
        memo.onEscape(id,funct);	
      };
      memo.objects[id].onSetText = function(funct)
      {
        memo.onSetText(id, funct);  
      };
      memo.objects[id].getValue = function()
      {
        return memo.getValue(id);  
      };
      memo.objects[id].setZIndex = function(value)
      {
       memo.setZIndex(id, value);
      };
      memo.objects[id].cleanWordPaste = function(str)
      {
        return memo.cleanWordPaste(str);
      };
      memo.objects[id].setCaption = function(caption)
      {
      	memo.setCaption(id, caption);
      };
	  memo.objects[id].hide = function()
      {
      	memo.hide(id);
      };
	  memo.objects[id].show = function()
      {
      	memo.show(id);
      };
   },
   addToBody    : function(id)
   {
     document.body.appendChild(this.objects[id]);
   },
   appendToObj : function(id,obj)
   {
     obj.appendChild(this.objects[id]);
   },
   hide : function(id)
   {
	   this.objects[id].style.display = 'none';
	   this.objects[id].sts_Show = false;
   },
   show : function(id)
   {
	   this.objects[id].style.display = 'block';
	   this.objects[id].sts_Show = true;
   },
   create : function(id,caption,positionCaption,marginLeft,widthCaption)
   {
   	  this.objects[id] = document.createElement('div');
	    this.objects[id].sts_Show = true;
     	this.objects[id].RichEdit = null;
     	this.objects[id].pc = positionCaption;
     	this.objects[id].setTextFunct = new Function('');
     	this.objects[id].nameComponent = 'memo';
     	this.objects[id].cap = document.createTextNode(caption);
     	this.objects[id].dataType ='string';
      this.objects[id].fieldFind = false;
     	this.objects[id].validEmpty = false;	
      this.objects[id].tableCtn = document.createElement('table');
      this.objects[id].table = document.createElement('table');
      this.objects[id].memo=document.createElement('textArea');
      this.objects[id].memo.innerHTML='';
      //this.objects[id].memo.style.padding = '0px';
      //this.objects[id].memo.style.borderRadius ='0em';
      this.objects[id].memo.onEnter = new Function('');
      this.objects[id].memo.onEscape = new Function('');
      this.objects[id].memo.onkeyPress = new Function('');
      this.objects[id].memo.id = id;
      this.objects[id].table.setAttribute("border","0");
      this.objects[id].table.setAttribute("cellPadding","0");
      this.objects[id].table.setAttribute("cellSpacing","0");
      this.objects[id].table.insertRow(0);
      this.objects[id].table.insertRow(1);
      this.objects[id].table.rows[0].insertCell(0);
      this.objects[id].table.rows[1].insertCell(0);
      this.objects[id].tableCtn.setAttribute("border","0");
      this.objects[id].tableCtn.setAttribute("cellPadding","0");
      this.objects[id].tableCtn.setAttribute("cellSpacing","0");
      this.objects[id].tableCtn.insertRow(0);
      this.objects[id].tableCtn.rows[0].insertCell(0); 
      this.objects[id].tableCtn.rows[0].insertCell(1);
      this.objects[id].tableCtn.rows[0].insertCell(2);
      this.objects[id].tableCtn.rows[0].insertCell(3); 
      
      this.objects[id].tableCtn.rows[0].cells[2].appendChild(this.objects[id].memo);
      this.objects[id].tableCtn.rows[0].cells[2].align ='left';
      this.objects[id].table.rows[1].cells[0].appendChild(this.objects[id].tableCtn);
      this.objects[id].appendChild(this.objects[id].table);
	 
      if (positionCaption === 0) 
      {
        this.objects[id].table.rows[0].cells[0].appendChild(this.objects[id].cap);
      }
      else 
      {
        this.objects[id].tableCtn.rows[0].cells[1].appendChild(this.objects[id].cap);
        this.vAlignCaption(id,'top');
      }
      if(marginLeft!==0)
        this.objects[id].tableCtn.rows[0].cells[0].width = marginLeft+'px'; 
      if(widthCaption!==0)
        this.objects[id].tableCtn.rows[0].cells[1].width = widthCaption+'px'; 
      this.objects[id].memo.loadBGImg = false;
      this.ids[this.ids.length] = id;
      this.objects[id].memo.id=id;
      this.addPropertyMethod(id);
      this.objects[id].memo.onkeypress = function(e)
      {
        memo.objects[id].memo.onkeyPress();
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
        switch (e)
        {
             case 13 : {memo.objects[id].memo.onEnter();break; }
             case 27 : {memo.objects[id].memo.onEscape();break; }
        }	 	
      };
      if(attrib)
         this.setObjAttrib(id,attrib,attrib.getActualEnv());
      return this.objects[id];
   }, 

   onSetText : function(id, funct)
   {
     this.objects[id].setTextFunct = new Function(funct);  
   },
   onEnter : function(id,funct)
   {
     this.objects[id].memo.onEnter = new Function(funct);
   },  
   onEscape : function(id,funct)
   {
     this.objects[id].memo.onEscape = new Function(funct);
   },  
   createMultTextArea : function(initNum, endNum)
   {
     for(ix=initNum; ix<=endNum; ix++)
     {
       this.create('textArea'+ ix,'textArea'+ ix);
     }
   },
   getText : function(id)
   {
     return this.objects[id].memo.value;
   },
   getValue : function(id)
   {
     return this.objects[id].memo.value;
   },
   getObject : function(id)
   {
     return this.objects[id];
   },
   isEmpty : function(s)
   {
     var i;
     var c;
     var whitespace = "\t\n\r";  
     if((s === null) || (s.length===0))
       return true;
     for(i=0; i<s.length; i++)
     {
       c=s.charAt(i);
       if(whitespace.indexOf(c) === -1)
         return false; 
     }
     return true;
   },
   onClick : function(id,func)
   {
     this.objects[id].memo.onclick=new Function(func); 
   },
   onChange : function(id,func)
   {
     this.objects[id].memo.onchange=new Function(func);  
   },
   onBlur : function(id,func)
   {
     this.objects[id].memo.onblur=new Function(func);
   },
   onDblClick : function(id,func)
   {
     this.objects[id].memo.ondblclick=new Function(func); 
   }, 
   onFocus : function(id,func)
   {
     this.objects[id].memo.onfocus=new Function(func); 
   },
   onKeyDown : function(id,func)
   {
     this.objects[id].memo.onkeydown=new Function(func); 
   }, 
   onKeyPress : function(id,func)
   {
     this.objects[id].memo.onkeyPress=new Function(func); 
   },
   onKeyUp : function(id,func)
   {
     this.objects[id].memo.onkeyup=new Function(func); 
   },
   onMouseDown : function(id,row,func)
   {
     this.objects[id].memo.onmousedown=new Function(func); 
   },
   onMouseMove : function(id,func)
   {
     this.objects[id].memo.onmousemove=new Function(func); 
   },
   onMouseOut : function(id,func)
   {
     this.objects[id].memo.onmouseout=new Function(func); 
   },
   onMouseOver : function(id,func)
   {
     this.objects[id].memo.onmouseover=new Function(func); 
   },
   onMouseUp : function(id,func)
   {
     this.objects[id].memo.onmouseup=new Function(func); 
   },
   setPosition : function(id,x,y)
   {
     this.objects[id].style.position='absolute';
     this.objects[id].style.top=y+'px';
     this.objects[id].style.left=x+'px';  
   },
   setZIndex : function(id, value)
   {
   	 this.objects[id].style.zIndex = value;
   },
   setDimension : function(id,w,h)
   {
     this.objects[id].memo.style.width=w+'px';
     this.objects[id].memo.style.height=h+'px';  
   },
   resetPosition : function(id)
   {
     this.objects[id].style.position='relative';
     this.objects[id].style.top='0px';
     this.objects[id].style.left='0px';  
   },
   setReadOnly : function(id)
   {
      this.objects[id].memo.readOnly=true; 
      this.objects[id].memo.style.opacity=levelOpacityDisable; 
      this.objects[id].table.rows[0].cells[0].style.opacity = levelOpacityDisable;
      //this.setBgBodyImg(id, this.imgDisable);
   },
   setEditMode : function(id)
   {
     this.objects[id].memo.readOnly=false; 
     //this.setBgBodyImg(id, this.imgEnable);
     this.objects[id].table.rows[0].cells[0].style.opacity = 1;
     this.objects[id].memo.style.opacity=1;
   },
   setText : function(id,text)
   {
	    this.objects[id].memo.value = this.replaceAll(text,'/n','\n');  
	    this.objects[id].setTextFunct();
   },
   clear : function(id)
   {
	    this.objects[id].memo.value = '';  
	    this.objects[id].setTextFunct();
   },
   setValue : function(id,text)
   {
	   this.setText(id,text);
   },
   setAttributes : function(Id,typesAttribs,valuesAttribs)
   {                             
      this.objects[Id].setAttribute(typesAttribs,valuesAttribs);    
   },  
   setClassName : function(id,extClass)
   {
     this.setAttributes(id,'className',extClass); 
   },
   setColorText : function(id,val)
   {
     //this.objects[id].memo.style.color=val;
   },
   setColorTextCaption : function(id,val)
   {
	    this.objects[id].tableCtn.rows[0].cells[1].style.color=val;
   },
   setFont : function(id,val,size,colorFont)
   {
     //this.objects[id].memo.style.fontFamily=val;
     //this.objects[id].memo.style.fontSize=size+'px';
     this.setColorText(id,colorFont);
   },
   setFontCaption : function(id,val,size,colorFont)
   {
      //this.objects[id].tableCtn.rows[0].cells[1].style.fontFamily = val;
	    //this.objects[id].tableCtn.rows[0].cells[1].style.fontSize = size+'px';
	    //this.objects[id].tableCtn.rows[0].cells[1].style.color = colorFont;
   },
   setFontStyle : function(id,s,w)
   {
     //this.objects[id].memo.style.fontStyle=s;
     //this.objects[id].memo.style.fontWeight=w;
   },   
   setFontStyleCaption : function(id,s,w)
   {
	    //this.objects[id].tableCtn.rows[0].cells[1].style.fontStyle=s;
	    //this.objects[id].tableCtn.rows[0].cells[1].style.fontWeight=w;
   },
   setBorderColor : function(id,val)
   {
     //this.setAttributes(id,'borderColor',val);
   },
   setBGColor : function(id,val)
   {
     //this.objects[id].memo.style.background=val; 
   },
   setColMemo : function(id,size)
   {
     this.objects[id].memo.cols=size;
   },
   setMaxLength : function(id,max)
   {
     this.objects[id].memo.maxLength=max; 
   },
   setRowMemo : function(id,rows)
   {
     this.objects[id].memo.rows=rows;
   },
   setBorderStyle : function(id,val)
   {
     //this.objects[id].memo.style.borderStyle=val; 
   },
   setObjAttrib : function(id,objAttr,env)
   {   
   	  //this.objects[id].loadBGImg = objAttr.getLoadBGImg();
      //this.setFontCaption(id,objAttr.Font.editorCaption[env],objAttr.Size.editFontCaption[env],objAttr.Color.textEditorCaption[env]);
      //this.setFontStyleCaption(id, objAttr.Font.styleEditorCaption[env], objAttr.Font.weightEditorCaption[env]);
      //this.setAttributes(id,'border',objAttr.Size.borderMemo[env]);
      //this.setAttributes(id,'borderColor',objAttr.Color.borderMemo[env]);
      //this.setBGColor(id,objAttr.Color.bgMemo[env]);
      //this.setBorderColor(id,objAttr.Color.borderMemo[env]); 
      //this.setFont(id, objAttr.Font.memo[env], objAttr.Size.memoFont[env], objAttr.Color.memoEditor[env]);
      //this.setFontStyle(id, objAttr.Font.styleMemo[env], objAttr.Font.weightMemo[env]);     
      //this.setColMemo(id,objAttr.Size.memoLength[env]);
      //this.setRowMemo(id,objAttr.Size.memoRows[env]);
      /*
      if(this.objects[id].loadBGImg)
      {	
        this.bgError = objAttr.BgImg.bgError[env];	
        this.imgEnable=objAttr.BgImg.bgEdit[env]; 
        this.imgDisable = objAttr.BgImg.bgButtonDisable[env];
        if (this.objects[id].memo.readOnly)
          this.setBgBodyImg(id, this.imgDisable);
        else
          this.setBgBodyImg(id, this.imgEnable);	   
      }
      */
      this.objects[id].memo.className = this.objects[id].nameComponent + 'Css'+attrib.getActualEnv();
      this.objects[id].table.className = 'memoCaptionCss'+attrib.getActualEnv();
      this.objects[id].tableCtn.className = 'memoCaptionCss'+attrib.getActualEnv();
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
     this.objects[id].memo.onclick=e.onClick[indexEvent];
     this.objects[id].memo.onchange=e.onChange[indexEvent];
     this.objects[id].memo.memo.onblur=e.onBlur[indexEvent];
     this.objects[id].ondblclick=e.onDblClick[indexEvent];
     this.objects[id].memo.onfocus=e.onFocus[indexEvent];
     this.objects[id].memo.onkeydown=e.onKeyDown[indexEvent];
     this.objects[id].memo.onkeyPress=e.onKeyPress[indexEvent];
     this.objects[id].memo.onkeyup=e.onKeyUp[indexEvent];
     this.objects[id].memo.onmousedown=e.onMouseDown[indexEvent];
     this.objects[id].memo.onmousemove=e.onMouseMove[indexEvent];
     this.objects[id].memo.onmouseout=e.onMouseOut[indexEvent];
     this.objects[id].memo.onmouseover=e.onMouseOver[indexEvent];
     this.objects[id].memo.onmouseup=e.onMouseUp[indexEvent];
   },
   setBasicStruct : function(initNum,endNum,structObj)
   {
     for(ix=initNum; ix<=endNum; ix++)
     {
       this.objects['textArea'+ix].value=structObj.data[ix-1];
     }
   },
   setBgBodyImg : function(id, bgImg)
   {
   	  //this.objects[id].memo.style.backgroundImage="url("+this.bgImgPath+bgImg+")";
   },   
   setLoadBGImg : function(id, activeLoad)
   {
   	this.objects[id].loadBGImg = activeLoad;
   },
   setMarginLeft : function(id,marginL)
   {
	 this.objects[id].tableCtn.rows[0].cells[0].width = marginL+'px';
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
	 this.objects[id].tableCtn.rows[0].cells[3].width = marginR+'px';
   },
   setMarginTopBottom : function(id,marginTB)
   {
	 var mtb = parseInt(marginTB,10);
   	 this.objects[id].tableCtn.rows[0].style.height = mtb + 'px';
     this.objects[id].table.rows[0].style.height = mtb + 'px';
   },  
   setMarginTopBottomToAll : function(marginTB)
   {
     for (i = 0; i < this.ids.length; i++) 
	 {
	 	this.setMarginTopBottom(this.ids[i],marginTB);
	 }	
   },  
   setLoadBGImgAll : function(activeLoad)
   {
   	for(i=0;i<this.ids.length;i++)
     {
       this.setLoadBGImg(this.ids[i],activeLoad);
     }
   },
  
   setValidEmpty : function(id)
   {
     this.objects[id].validEmpty=true;	
   },
  
   vAlignCaption : function(id,align)
   {
   	this.objects[id].tableCtn.rows[0].cells[1].vAlign = align;
   },
  
   valid : function(id,objMsg)
   {
   	if(this.objects[id].validEmpty)
      {
        var valor = this.getText(id);
        if(this.isEmpty(valor))
        {
        	this.setBgBodyImg(id, this.bgError);
         	 if(this.valid.arguments.length < 2 || objMsg===null)
            alert('CAMPO: ['+this.objects[id].cap.nodeValue+'] SIN VALOR');
      	 else
      	   objMsg.setMsg('CAMPO: ['+this.objects[id].cap.nodeValue+'] SIN VALOR', true);  
      	 return false;  
        }
        else
        {
        	 if (this.objects[id].memo.readOnly)
           {
           	this.setBgBodyImg(id, this.imgDisable);
           }  
           else
           {
           	this.setBgBodyImg(id, this.imgEnable);
           }
      	 if (this.valid.arguments.length == 2)
      	    objMsg.setMsg('',false);
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
   
   setCaption : function(id, caption){
   	 if (this.objects[id].pc === 0) 
      {
      	this.objects[id].table.rows[0].cells[0].removeChild(this.objects[id].cap);
      	this.objects[id].cap = document.createTextNode(caption);
        this.objects[id].table.rows[0].cells[0].appendChild(this.objects[id].cap);
      }
      else 
      {
      	this.objects[id].tableCtn.rows[0].cells[1].removeChild(this.objects[id].cap);
      	this.objects[id].cap = document.createTextNode(caption);
        this.objects[id].tableCtn.rows[0].cells[1].appendChild(this.objects[id].cap);
        //this.vAlignCaption(id,'top');
      }
   },

   replaceAll : function(text, busca, reemplaza){
      while (text.toString().indexOf(busca) != -1) 
      	text = text.toString().replace(busca, reemplaza);
      return text;
   },
   getFieldFind : function(id)
   {
	  return this.objects[id].fieldFind;
   },
   setFieldFind : function(id, fieldFind)
   {
	  this.objects[id].fieldFind = fieldFind;
   },
   cleanWordPaste : function ( str )
   {
     str = str.replace(/<o:p>\s*<\/o:p>/g, "") ;
     str = str.replace(/<o:p>.*?<\/o:p>/g, "&nbsp;") ;
     str = str.replace( /\s*mso-[^:]+:[^;"]+;?/gi, "" ) ;
     str = str.replace( /\s*MARGIN: 0cm 0cm 0pt\s*;/gi, "" ) ;
     str = str.replace( /\s*MARGIN: 0cm 0cm 0pt\s*"/gi, "\"" ) ;
     str = str.replace( /\s*TEXT-INDENT: 0cm\s*;/gi, "" ) ;
     str = str.replace( /\s*TEXT-INDENT: 0cm\s*"/gi, "\"" ) ;
     str = str.replace( /\s*TEXT-ALIGN: [^\s;]+;?"/gi, "\"" ) ;
     str = str.replace( /\s*PAGE-BREAK-BEFORE: [^\s;]+;?"/gi, "\"" ) ;
     str = str.replace( /\s*FONT-VARIANT: [^\s;]+;?"/gi, "\"" ) ;
     str = str.replace( /\s*tab-stops:[^;"]*;?/gi, "" ) ;
     str = str.replace( /\s*tab-stops:[^"]*/gi, "" ) ;
     str = str.replace( /\s*face="[^"]*"/gi, "" ) ;
     str = str.replace( /\s*face=[^ >]*/gi, "" ) ;
     str = str.replace( /\s*FONT-FAMILY:[^;"]*;?/gi, "" ) ;
     str = str.replace(/<(\w[^>]*) class=([^ |>]*)([^>]*)/gi, "<$1$3") ;
     str = str.replace( /<(\w[^>]*) style="([^\"]*)"([^>]*)/gi, "<$1$3" ) ;
     str = str.replace( /\s*style="\s*"/gi, '' ) ;
     str = str.replace( /<SPAN\s*[^>]*>\s*&nbsp;\s*<\/SPAN>/gi, '&nbsp;' ) ;
     str = str.replace( /<SPAN\s*[^>]*><\/SPAN>/gi, '' ) ;
     str = str.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi, "<$1$3") ;
     str = str.replace( /<SPAN\s*>(.*?)<\/SPAN>/gi, '$1' ) ;
     str = str.replace( /<FONT\s*>(.*?)<\/FONT>/gi, '$1' ) ;
     str = str.replace(/<\\?\?xml[^>]*>/gi, "") ;
     str = str.replace(/<\/?\w+:[^>]*>/gi, "") ;
     str = str.replace( /<H\d>\s*<\/H\d>/gi, '' ) ;
     str = str.replace( /<H1([^>]*)>/gi, '' ) ;
     str = str.replace( /<H2([^>]*)>/gi, '' ) ;
     str = str.replace( /<H3([^>]*)>/gi, '' ) ;
     str = str.replace( /<H4([^>]*)>/gi, '' ) ;
     str = str.replace( /<H5([^>]*)>/gi, '' ) ;
     str = str.replace( /<H6([^>]*)>/gi, '' ) ;
     str = str.replace( /<\/H\d>/gi, '<br>' ) ; 
     str = str.replace( /<(U|I|STRIKE)>&nbsp;<\/\1>/g, '&nbsp;' ) ;
     str = str.replace( /<(B|b)>&nbsp;<\/\b|B>/g, '' ) ;
     str = str.replace( /<([^\s>]+)[^>]*>\s*<\/\1>/g, '' ) ;
     str = str.replace( /<([^\s>]+)[^>]*>\s*<\/\1>/g, '' ) ;
     str = str.replace( /<([^\s>]+)[^>]*>\s*<\/\1>/g, '' ) ;
     var re = new RegExp("(<P)([^>]*>.*?)(<\/P>)","gi") ;
     str = str.replace( re, "<div$2</div>" ) ;
     var re2 = new RegExp("(<font|<FONT)([^*>]*>.*?)(<\/FONT>|<\/font>)","gi") ;
     str = str.replace( re2, "<div$2</div>") ;
     str = str.replace( /size|SIZE = ([\d]{1})/g, '' ) ;		
     return str ;
   }
};