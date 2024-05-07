var images=
{
        objects : new Array,
        ids : new Array,
		addPropertyMethod : function(id)
		{
  			this.objects[id].addToBody  =  function()
  			{
    			images.addToBody(id);
  			}
  			this.objects[id].appendToObj  =  function(obj)
  			{
    			images.appendToObj(id,obj);
  			}
			this.objects[id].setAlign  =  function(align)
  			{
    			images.setAlign(id,align);
  			}
  			this.objects[id].getObject  =  function()
  			{
    			return images.getObject(id);
  			}
  			this.objects[id].onClick  =  function(func)
  			{
    			images.onClick(id,func);
  			}
  			this.objects[id].onMouseDown  =  function(func)
  			{
    			images.onMouseDown(id,func);
  			}
  			this.objects[id].onMouseMove  =  function(func)
  			{
    			images.onMouseMove(id,func);
  			}
  			this.objects[id].onMouseOut  =  function(func)
  			{
    			images.onMouseOut(id,func);
  			}
  			this.objects[id].onMouseOver  =  function(func)
  			{
    			images.onMouseOver(id,func);
  			}
  			this.objects[id].onMouseUp  =  function(func)
  			{
    			images.onMouseUp(id,func);
  			}
  			this.objects[id].setBorder = function(size)
			{
				images.setBorder(id,size);
			}
			this.objects[id].setSize = function(h,w)
			{
				images.setSize(id,h,w);
			}
			this.objects[id].setSource = function(src)
			{
				images.setSource(id,src);
			}
			this.objects[id].setTitle = function(title)
			{
				images.setTitle(id,title);
			}
			this.objects[id].setEvent = function(e,indexEvent)
			{
				images.setEvent(id,e,indexEvent);
			}
			this.objects[id].setBorderStyle = function(borderStyle, borderWidth)
			{
			   images.setBorderStyle(id, borderStyle, borderWidth);
			}
			this.objects[id].setButtonModel = function()
			{
			  images.setButtonModel(id);	
			}
			this.objects[id].setRounded = function(tl,tr,bl,br)
			{
			  images.setRounded(id,tl,tr,bl,br);  
			}
			this.objects[id].setPosition = function(x,y)
			{
			  images.setPosition(id,x,y);	
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
        
        create : function(id,name,src)
        {
           this.ids[this.ids.length] = id;
		   this.objects[id] = document.createElement('img');
		   this.objects[id].nameComponent = 'images';
		   this.objects[id].name = name;
		   this.objects[id].id = id;
		   this.objects[id].src = src;
		   this.addPropertyMethod(id);
		   return this.objects[id];
        },
        getObject : function(id)
        {
          return this.objects[id];
        },
        onClick : function(id,func)
        {
           this.objects[id].onclick = new Function(func);
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
          this.objects[id].onmouseover = new Function(func);
        },
        onMouseUp : function(id,func)
        {
          this.objects[id].onmouseup=new Function(func);
        },
        setAlign : function(id,align)
        {
          this.objects[id].align = align;
        },
        setBorder : function(id,size)
        {
          this.objects[id].border = size;
        },
        setBorderStyle : function(id, borderStyle, borderWidth)
        {
          this.objects[id].style.borderStyle = borderStyle;
          this.objects[id].style.borderWidth = borderWidth + 'px';
        },
        
        setPosition : function(id,x,y)
   		{
     	  this.objects[id].style.position='absolute';
     	  this.objects[id].style.top=y+'px';
          this.objects[id].style.left=x+'px';  
        },
        
        setButtonModel : function(id)
        {
          this.objects[id].onmouseover = function(e)
          {
          	images.setBorderStyle(id, 'outset',1);
          }
          this.objects[id].onmouseout = function(e)
          {
          	images.objects[id].style.borderStyle ='none';
          }	
          this.objects[id].onmousedown = function(e)
          {
          	images.setBorderStyle(id, 'inset',1);
          }
          this.objects[id].onmouseup = function(e)
          {
          	images.setBorderStyle(id, 'outset',1);
          }
        },
        
        setRounded : function(id,tl,tr,bl,br)
        {
          this.objects[id].style.borderTopLeftRadius=tl+'em';
          this.objects[id].style.borderTopRightRadius=tr+'em';
          this.objects[id].style.borderBottomLeftRadius=bl+'em';
          this.objects[id].style.borderBottomRightRadius=br+'em';
        },
        
        setSize : function(id,h,w)
        {
        	this.objects[id].height = h;
			this.objects[id].width = w;
        },
        setSource : function(id,src)
        {
        	var truco = Math.ceil(Math.random()*100);
        	
        	this.objects[id] = document.getElementById(id);
        	this.objects[id].innerHTML = "<img src='" + src + "?" + truco + "'/>";
        	this.objects[id].src = src + "?" + truco;
        },
        setTitle : function(id,title)
        {
        	this.objects[id].title = title;
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


