var labels= 
{
   objects : new Array,
   ids : new Array,   
addPropertyMethod : function(id)
{
  labels.objects[id].addToBody  =  function()
  {
    labels.addToBody(id);
  }
  labels.objects[id].changeCaption  =  function(caption)
  {
    labels.changeCaption(id,caption);
  }
  labels.objects[id].getCaption  =  function()
  {
    return labels.getCaption(id);
  }
  labels.objects[id].getValue  =  function()
  {
    return labels.getValue(id);
  }
  labels.objects[id].getObject  =  function()
  {
    return labels.getObject(id);
  }
  labels.objects[id].onClick  =  function(func)
  {
    labels.onClick(id,func);
  }
  labels.objects[id].onChange  =  function(func)
  {
    labels.onChange(id,func);
  }
  labels.objects[id].onBlur  =  function(func)
  {
    labels.onBlur(id,func);
  }
  labels.objects[id].onDblClick  =  function(func)
  {
    labels.onDblClick(id,func);
  }
  labels.objects[id].onFocus  =  function(func)
  {
    labels.onFocus(id,func);
  }
  labels.objects[id].onKeyDown  =  function(func)
  {
    labels.onKeyDown(id,func);
  }
  labels.objects[id].onKeyPress  =  function(func)
  {
    labels.onKeyPress(id,func);
  }
  labels.objects[id].onKeyUp  =  function(func)
  {
    labels.onKeyUp(id,func);
  }
  labels.objects[id].onMouseDown  =  function(func)
  {
    labels.onMouseDown(id,func);
  }
  labels.objects[id].onMouseMove  =  function(func)
  {
    labels.onMouseMove(id,func);
  }
  labels.objects[id].onMouseOut  =  function(func)
  {
    labels.onMouseOut(id,func);
  }
  labels.objects[id].onMouseOver  =  function(func)
  {
    labels.onMouseOver(id,func);
  }
  labels.objects[id].onMouseUp  =  function(func)
  {
    labels.onMouseUp(id,func);
  }
  labels.objects[id].resetPosition  =  function()
  {
    labels.resetPosition(id);
  }
  labels.objects[id].setPosition  =  function(x,y)
  {
    labels.setPosition(id,x,y);
  }
  labels.objects[id].setAttributes  =  function(typesAttribs,valuesAttribs)
  {
    labels.setAttributes(id,typesAttribs,valuesAttribs);
  }
  labels.objects[id].setClassName  =  function(extClass)
  {
    labels.setClassName(id,extClass);
  }
  labels.objects[id].setColorText  =  function(val)
  {
    labels.setColorText(id,val);
  }
  labels.objects[id].setFont  =  function(val,size,colorFont)
  {
    labels.setFont(id,val,size,colorFont);
  }
  labels.objects[id].setFontStyle  =  function(s,w)
  {
    labels.setFontStyle(id,s,w);
  }
  labels.objects[id].setObjAttrib  =  function(objAttr,env)
  {
    labels.setObjAttrib(id,objAttr,env);
  }
  labels.objects[id].setObjAttribToAll  =  function(objAttrib,env)
  {
    labels.setObjAttribToAll(objAttrib,env);
  }
  labels.objects[id].setEvent  =  function(e,indexEvent)
  {
    labels.setEvent(id,e,indexEvent);
  }
  labels.objects[id].setValue = function(value)
  {
  	labels.setValue(id,value);
  }
  labels.objects[id].setUnderlineText = function()
  {
  	labels.setUnderlineText(id);
  }
  labels.objects[id].delUnderlineText = function()
  {
  	labels.delUnderlineText(id);
  }
},
   addToBody : function(id)
   {
     document.body.appendChild(this.objects[id]);
   },
   create : function(id,caption)  
   {
     
	 this.ids[this.ids.length] = id;
     this.objects[id]=document.createElement('label');
     this.objects[id].nameComponent = 'labels';
     this.objects[id].ambiente = attrib.getActualEnv();
     this.objects[id].cap = caption;
     this.objects[id].val = '';
     this.objects[id].id=id;
     this.objects[id].innerHTML = this.objects[id].cap;
	 this.addPropertyMethod(id);
	 if(attrib)
       this.setObjAttrib(id,attrib,attrib.getActualEnv());
	 return this.objects[id];
   },
   changeCaption : function(id,caption)
   {
     this.objects[id].firstChild.data=caption;
   },
   getCaption : function(id)
   {
     return this.objects[id].cap;
   },
   getValue : function(id)
   {
     return this.objects[id].val;
   },

   getObject : function(id)
   {
     return this.objects[id];
   },
   onClick : function(id,func)
   {
     this.objects[id].onclick=new Function(func); 
   },
   onChange : function(id,func)
   {
     this.objects[id].onchange=new Function(func);  
   },
   onBlur : function(id,func)
   {
     this.objects[id].onblur=new Function(func);
   },
   onDblClick : function(id,func)
   {
     this.objects[id].ondblclick=new Function(func); 
   }, 
   onFocus : function(id,func)
   {
     this.objects[id].onfocus=new Function(func); 
   },
   onKeyDown : function(id,func)
   {
     this.objects[id].onkeydown=new Function(func); 
   }, 
   onKeyPress : function(id,func)
   {
     this.objects[id].onkeypress=new Function(func); 
   },
   onKeyUp : function(id,func)
   {
     this.objects[id].onkeyup=new Function(func); 
   },
   onMouseDown : function(id,func)
   {
     this.objects[id].onmousedown=new Function(func); 
   },
   onMouseMove : function(id,func)
   {
     this.objects[id].onmousemove=new Function(func); 
   },
   onMouseOut : function(id,func)
   {
     this.objects[id].onmouseout=new Function(func); 
   },
   onMouseOver : function(id,func)
   {
     this.objects[id].onmouseover=new Function(func); 
   },
   onMouseUp : function(id,func)
   {
     this.objects[id].onmouseup=new Function(func); 
   },
   resetPosition : function(id)
   {
     this.objects[id].style.position='relative';
     this.objects[id].style.top='0px';
     this.objects[id].style.left='0px';  
   },
   setPosition : function(id,x,y)
   {
     this.objects[id].style.position='absolute';
     this.objects[id].style.top=y+'px';
     this.objects[id].style.left=x+'px';  
   }, 
   setValue : function(id,value)
   {
     this.objects[id].val=value;
     this.objects[id].innerHTML = this.objects[id].cap+this.objects[id].val;
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
     this.objects[id].style.color=val;
   },
   setUnderlineText : function(id)
   {
     this.objects[id].style.textDecoration="underline";;
   },
   delUnderlineText : function(id)
   {
     this.objects[id].style.textDecoration="none";;
   },
   setFont : function(id,family,size,colorFont)
   {
     this.objects[id].style.fontFamily=family;
     this.objects[id].style.fontSize=size+'px';
     this.setColorText(id,colorFont);
   },
   setFontStyle : function(id,s,w)
   {
     this.objects[id].style.fontStyle=s;
     this.objects[id].style.fontWeight=w;
   },   
   setObjAttrib : function(id,objAttr,env)
   {
     this.setFont(id, objAttr.Font.label[env], objAttr.Size.labelFont[env], objAttr.Color.label[env]);
     this.setFontStyle(id, objAttr.Font.styleLabel[env], objAttr.Font.weightLabel[env]);     
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
   }
} 

