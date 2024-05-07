var buttons=
{
        objects : new Array,
        ids : new Array,
        BUTTON : 'button',
        pathImg : 'images/bg/',
        bgImg : 'url(images/bg)',
        RADIO  : 'radio',
        CHECK  : 'checkbox',
		addPropertyMethod : function(id)
		{
  			this.objects[id].addToBody  =  function()
  			{
    			buttons.addToBody(id);
  			}
  			this.objects[id].appendToObj  =  function(obj)
  			{
    			buttons.appendToObj(id,obj);
  			}
  			this.objects[id].getValue  =  function()
  			{
    			return buttons.getValue(id);
  			}
  			this.objects[id].getObject  =  function()
  			{
    			return buttons.getObject(id);
  			}
				this.objects[id].isCheck  =  function()
  			{
    			return buttons.isCheck(id);
  			}
  			this.objects[id].onClick  =  function(func)
  			{
    			buttons.onClick(id,func);
  			}
  			this.objects[id].onChange  =  function(func)
  			{
    			buttons.onChange(id,func);
  			}
  			this.objects[id].onBlur  =  function(func)
  			{
    			buttons.onBlur(id,func);
  			}
  			this.objects[id].onDblClick  =  function(func)
  			{
    			buttons.onDblClick(id,func);
  			}
 			  this.objects[id].onFocus  =  function(func)
  			{
    			buttons.onFocus(id,func);
  			}
  			this.objects[id].onKeyDown  =  function(func)
  			{
    			buttons.onKeyDown(id,func);
  			}
  			this.objects[id].onKeyPress  =  function(func)
  			{
    			buttons.onKeyPress(id,func);
  			}
  			this.objects[id].onKeyUp  =  function(func)
  			{
    			buttons.onKeyUp(id,func);
  			}
  			this.objects[id].onMouseDown  =  function(func)
  			{
    			buttons.onMouseDown(id,func);
  			}
  			this.objects[id].onMouseMove  =  function(func)
  			{
    			buttons.onMouseMove(id,func);
  			}
  			this.objects[id].onMouseOut  =  function(func)
  			{
    			buttons.onMouseOut(id,func);
  			}
  			this.objects[id].onMouseOver  =  function(func)
  			{
    			buttons.onMouseOver(id,func);
  			}
  			this.objects[id].onMouseUp  =  function(func)
  			{
    			buttons.onMouseUp(id,func);
  			}
  			this.objects[id].setValue  =  function(v)
  			{
    			buttons.setValue(id,v);
  			}
  			this.objects[id].setAttributes  =  function(typesAttribs,valuesAttribs)
  			{
    			buttons.setAttributes(id,typesAttribs,valuesAttribs);
  			}
  			this.objects[id].setObjAttribToAll  =  function(objAttrib,env)
  			{
    			buttons.setObjAttribToAll(objAttrib,env);
  			}
			this.objects[id].setCheck = function()
			{
				buttons.setCheck(id)
			}
			this.objects[id].setUnCheck = function()
			{
				buttons.setUnCheck(id)
			}
			this.objects[id].setVisible = function(s)
			{
			  buttons.setVisible(id,s)
			}
 			this.objects[id].setClassName = function(extClass)
			{
				buttons.setClassName(id,extClass)
			}
			this.objects[id].setColorText = function(val)
			{
				buttons.setColorText(id,val);
			}
			this.objects[id].setFont = function(val,size,colorFont)
			{
				buttons.setFont(id,val,size,colorFont);
			}
			this.objects[id].setFontStyle = function(s,w)
			{
				buttons.setFontStyle(id,s,w);
			}
			this.objects[id].setBorderColor = function(val)
			{
				buttons.setBorderColor(id,val);
			}
			this.objects[id].setBGColor = function(val)
			{
				buttons.setBGColor(id,val);
			}
			this.objects[id].setBorderStyle = function(val)
			{
				buttons.setBorderStyle(id,val);
			}
			this.objects[id].setObjAttrib = function(objAttr,env)
			{
				buttons.setObjAttrib(id,objAttr,env);
			}
			this.objects[id].setEvent = function(e,indexEvent)
			{
				buttons.setEvent(id,e,indexEvent);
			}
			this.objects[id].setBGImg = function(img)
        	{
              buttons.setBGImg(id,img);
            }
		},
        addToBody : function(id)
        {
                document.body.appendChild(this.objects[id]);
        },
        appendToObj : function(id,obj)
        {
                obj.appendChild(this.objects[id]);
        },
        create : function(id,name,type,value)
        {
           this.ids[this.ids.length] = id;
		   if(document.all) 
             this.objects[id]=document.createElement("<input type =\""+type+"\" name = \""+name+"\" id = \""+id+"\" value =  \""+value+"\">");
           else
             this.objects[id]=document.createElement('input');
           this.objects[id].type=type;
           this.objects[id].name=name;
           this.objects[id].id=id;
           this.objects[id].value=value;
		   this.addPropertyMethod(id);
		   this.objects[id].nameComponent = 'buttons';
		   if(attrib)
                this.setObjAttrib(id,attrib,attrib.getActualEnv());
		   return this.objects[id];
        },
        getValue : function(id)
        {
           return this.objects[id].value;
        },
        getObject : function(id)
        {
           return this.objects[id];
        },
        isCheck : function(id)
        {
			return this.objects[id].checked; 
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
        
        setValue : function(id,v)
        {
            this.objects[id].value=v;
        },
        
        setCheck : function(id)
        {
            this.objects[id].defaultChecked=true;
			this.objects[id].checked=true;
        },
		
        setUnCheck : function(id)
        {
            this.objects[id].defaultChecked=false;
			this.objects[id].checked=false;
        },
        
        setAttributes : function(Id,typesAttribs,valuesAttribs)
        {
            this.objects[Id].setAttribute(typesAttribs,valuesAttribs);
        },
		
        setVisible : function(id, s)
        {
			if (s == true) 
              this.objects[id].style.visibility = "visible"
			else
			  this.objects[id].style.visibility = "hidden";
        },
        
        setClassName : function(id,extClass)
        {
            this.setAttributes(id,'className',extClass);
        },
       
        setColorText : function(id,val)
        {
            this.objects[id].style.color=val;
        },
       
        setFont : function(id,val,size,colorFont)
        {
            this.objects[id].style.fontFamily=val;
            this.objects[id].style.fontSize=size+'px';
            this.setColorText(id,colorFont);
        },
        
        setFontStyle : function(id,s,w)
        {
            this.objects[id].style.fontStyle=s;
            this.objects[id].style.fontWeight=w;
        },
        
        setBorderColor : function(id,val)
        {
            this.setAttributes(id,'borderColor',val);
        },
       
        setBGColor : function(id,val)
        {
            this.objects[id].style.background=val;
        },
		
        setBGImg : function(id,img)
        {
           this.objects[id].style.backgroundImage = 'url('+this.pathImg+img+')';
        },
        
        setBorderStyle : function(id,val)
        {
           this.objects[id].style.borderStyle=val;
        },
       
        setObjAttrib : function(id,objAttr,env)
        {
            /*
            if(this.getObject(id).type==this.BUTTON)
            {
                this.setAttributes(id,'border',objAttr.Size.borderButton[env]);
                this.setAttributes(id,'borderColor',objAttr.Color.borderButton[env]);
                this.setBGColor(id,objAttr.Color.button[env]);
                this.setFont(id, objAttr.Font.button[env], objAttr.Size.buttonFont[env], objAttr.Color.textButton[env]);
                this.setFontStyle(id, objAttr.Font.styleButton[env], objAttr.Font.weightButton[env]);
                this.setBorderColor(id,objAttr.Color.borderButton[env]);
                this.setBorderStyle(id,objAttr.Border.styleButton[env]);
				this.setBGImg(id,objAttr.BgImg.bgButton[env]);
            }
            if(this.getObject(id).type==this.RADIO)
            {
                this.setAttributes(id,'border',objAttr.Size.borderRadio[env]);
                this.setAttributes(id,'borderColor',objAttr.Color.borderRadio[env]);
                this.setBGColor(id,objAttr.Color.bgRadio[env]);
                this.setBorderColor(id,objAttr.Color.borderRadio[env]);
                this.setBorderStyle(id,objAttr.Border.styleRadio[env]);
            }
            if(this.getObject(id).type==this.CHECK)
            {
                this.setAttributes(id,'border',objAttr.Size.borderCheck[env]);
                this.setAttributes(id,'borderColor',objAttr.Color.borderCheck[env]);
                this.setBGColor(id,objAttr.Color.bgCheck[env]);
                this.setBorderColor(id,objAttr.Color.borderCheck[env]);
                this.setBorderStyle(id,objAttr.Border.styleCheck[env]);
            }
            */
            this.objects[id].className = this.objects[id].nameComponent + 'Css'+attrib.getActualEnv();
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


