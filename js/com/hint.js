var hint = 
{
	objHint : new Object(),
	dataHint : {x:new Array(), y:new Array(), text:new Array()},
	onMouseOverHint : new Function(),
	onMouseOutHint : new Function(),
	refreshHint : new Function(),
	arrRefresh : new Array,
	create : function()
	{
	  this.objHint.panel = document.createElement("div");
	  this.nameComponent = 'hint';
	  this.objHint.panel.style.zIndex="100000";
	  this.setBgColor("#ffffcc");
	  this.setFont("Verdana",10,"black");
	  this.setBorderStyle("groove");
	  this.dataHint.show = false;
	  this.hideHint();
	  document.body.appendChild(this.objHint.panel);
	  if(attrib)
        this.setObjAttrib(attrib,attrib.getActualEnv());
	  return this;
	},
	addToHintWithPos : function(obj,text,x,y, onlyCaption, activePointerCursor, container)
	{		
	  if(activePointerCursor==null)
	     activePointerCursor = false;	
	  this.dataHint.x[obj.id] = x;
	  this.dataHint.text[obj.id] = text;
	  this.dataHint.y[obj.id] = y;
	  var ob = new Object();
	  if(onlyCaption)
	    ob = obj.getCaptionCell()
	  else
	    ob = obj;
	  var mPointer = function(tipo)
	  {
	  	  if(tipo==1)
	  	    obj.style.cursor = 'pointer'
	  	  else
	  	    obj.style.cursor = 'default'
	  }
	  ob.onmouseover = function(e)
	  {
	  	if(activePointerCursor)
	  	  mPointer(1);
	  	hint.onMouseOverHint();	
	  	hint.refreshHint();
	    if(!hint.dataHint.show)
		{
		  hint.dataHint.show = true;	
	      hint.objHint.panel.innerHTML = hint.dataHint.text[obj.id];
	      hint.objHint.panel.style.position = "absolute";
	      hint.objHint.panel.style.left = hint.dataHint.x[obj.id]+"px";
	      hint.objHint.panel.style.top = hint.dataHint.y[obj.id]+"px";
		  hint.showHint();
		}
	  }	
	  ob.onmouseout = function(e)
	  {
	  	if(activePointerCursor)
	  	  mPointer(0);
	  	hint.onMouseOutHint();
	  	if(hint.dataHint.show)
		{
		   hint.dataHint.show = false;	
	       hint.hideHint();
		} 
	  }
	},
   addToHintWithRefreshPos : function(obj,objPos,text,x,y,onlyCaption, activePointerCursor)
  {
  	 if(activePointerCursor==null)
  	   activePointerCursor=false;
  	 if(onlyCaption==null)
  	   onlyCaption=false;  
	 hint.addToHintWithPos(obj,text,x,y, onlyCaption, activePointerCursor);
	 hint.refreshPosition(obj, objPos, x, y);
  },
  refreshPosition : function(obj, objPos, x, y)
  {
  	  var p = hint.arrRefresh.length;
  	  hint.arrRefresh[p] = new Object();
  	  hint.arrRefresh[p].obj = obj;
  	  hint.arrRefresh[p].objPos = objPos;
  	  hint.arrRefresh[p].x = x;
  	  hint.arrRefresh[p].y = y;
	  hint.refreshHint = function(e)
	  {
	  	for(var i=0; i < hint.arrRefresh.length; i++)
	  	{
		  hint.setPosition(hint.arrRefresh[i].obj, hint.arrRefresh[i].objPos.x1 + 
	  	  hint.arrRefresh[i].x, hint.arrRefresh[i].objPos.y1 + hint.arrRefresh[i].y);
	  	}  
	  }
  },
  onMouseOver : function(funct)
  {
	  hint.onMouseOverHint = new Function(funct);
  },
  onMouseOut : function(funct)
  {
	  hint.onMouseOutHint = new Function(funct);
  },
  addToHint : function(obj,text,activePointerCursor)
  {
  	  if(activePointerCursor==null)
	     activePointerCursor = false;
	  var t = obj.offsetTop;
	  var h = obj.offsetHeight;
	  var a = h-t;
	  
	  var mPointer = function(tipo)
	  {
	  	  if(tipo==1)
	  	    obj.style.cursor = 'pointer'
	  	  else
	  	    obj.style.cursor = 'default'
	  }
	  
	  this.dataHint.x[obj.id] = obj.offsetLeft;
	  this.dataHint.text[obj.id] = text;
	  if((a-t)>0)
	  {
	    this.dataHint.y[obj.id] = t+h;
	  }
	  else	
	  {
	  	this.dataHint.y[obj.id] = t-h+6;
	  } 
	  obj.onmouseover = function(e)
	  {	
	  	if(activePointerCursor)
	  	  mPointer(1);
	  	hint.onMouseOverHint();
	    if(!hint.dataHint.show)
		{
		  hint.dataHint.show = true;	
	      hint.objHint.panel.innerHTML = hint.dataHint.text[obj.id];
	      hint.objHint.panel.style.position = "absolute";
	      hint.objHint.panel.style.left = hint.dataHint.x[obj.id]+"px";
	      hint.objHint.panel.style.top = hint.dataHint.y[obj.id]+"px";
		  hint.showHint();
		}
	  }	
	  obj.onmouseout = function(e)
	  {
	  	if(activePointerCursor)
	  	  mPointer(0);
	  	hint.onMouseOutHint();
	  	if(hint.dataHint.show)
		{
		   hint.dataHint.show = false;	
	       hint.hideHint();
		} 
	  }
  },
  setPosition : function(obj,x,y)
  {
	 this.dataHint.x[obj.id] = x;
	 this.dataHint.y[obj.id] = y; 
  },
	showHint : function()
	{	
	  hint.objHint.panel.style.display = "block";	  
	},
	hideHint : function()
	{
	  hint.objHint.panel.style.display = "none";
	},
	setBgColor : function(bgColor)
	{
      this.objHint.panel.style.backgroundColor = bgColor;
	},
	setFont : function(family,size,color)
	{
	  this.objHint.panel.style.fontFamily = family;
	  this.objHint.panel.style.fontSize = size+"px";
	  this.objHint.panel.style.color = color;
	},
	setBorderStyle : function(borderStyle)
	{
	  this.objHint.panel.style.borderWidth ="1px";	
	  this.objHint.panel.style.borderStyle = borderStyle;	
	},
	setObjAttrib : function(objAttr,env)
    {
	  this.setBgColor(objAttr.Color.bgHint[env]);
	  this.setFont(objAttr.Font.menu[env],objAttr.Size.textHint[env],objAttr.Color.textHint[env]);
	  this.setBorderStyle(objAttr.Border.styleHint[env]);	
    }
}