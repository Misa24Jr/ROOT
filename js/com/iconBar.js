var iconBar =
{
  objects : new Array,
   ids : new Array, 
   colorTextSelected : '#aaaa00',  
   colorText : '#000000',
   colorTextDisable : '#a7a7a7',
   pathBgImg :'images/bg/',
   mouseX: 0,
   mouseY: 0,
  addPropertyMethod : function(id)
  {
    iconBar.objects[id].addToBody = function()
    {
      iconBar.addToBody(id);
    }
    iconBar.objects[id].getObject = function()
    {
      return iconBar.getObject(id);
    }
	iconBar.objects[id].setObjAttribToAll = function(objAttrib,env)
	{
	  iconBar.setObjAttribToAll(objAttrib,env);	
	}
	iconBar.objects[id].setObjAttrib = function(objAttr,env)
	{
	  iconBar.setObjAttrib(id,objAttr,env);	
	}
    iconBar.objects[id].addStructIcons = function(structIcon)
	{
	  iconBar.addStructIcons(id,structIcon); 	
	}
	iconBar.objects[id].setFont = function(family, size, color)
	{
	  iconBar.setFont(id, family, size, color);	
	}
	iconBar.objects[id].setBgImg = function(bgImg)
	{
	  iconBar.setBgImg(id, bgImg);	
	}
	iconBar.objects[id].setPosition = function(x1,y1)
	{
	  iconBar.setPosition(id,x1,y1);	
	}
	iconBar.objects[id].setRelativePosition = function()
	{
	  iconBar.setRelativePosition(id);	
	}
	iconBar.objects[id].onSelect = function(funct,iconNumber)
	{
	  iconBar.onSelect(id, funct, iconNumber);	
	}
	iconBar.objects[id].onExit = function(funct,iconNumber)
	{
	  iconBar.onExit(id, funct, iconNumber);	
	}
	iconBar.objects[id].setTopCenter = function()
	{
	  iconBar.setTopCenter(id);	
	}
	iconBar.objects[id].setBottomCenter = function()
	{
	  iconBar.setBottomCenter(id);	
	}
  },
  addToBody : function(id)
  {
    document.body.appendChild(this.objects[id]);
  },
  addStructIcons : function(id,structIcon)
  {	
  	var i=0;
  	for(i=0; i<structIcon.images.length; i++)
	{
	  var t = this.objects[id].tableCtn.rows[0].cells.length;
	  this.objects[id].tableCtn.rows[0].insertCell(t);  
	  this.objects[id].tableCtn.rows[1].insertCell(t);
	  this.objects[id].tableCtn.rows[0].cells[t].funct = new Function(structIcon.functs[i]);
	  this.objects[id].tableCtn.rows[0].cells[t].width = (structIcon.width+structIcon.inc+5)+'px';
	  this.objects[id].tableCtn.rows[0].cells[t].height = (structIcon.height+structIcon.inc/2+5)+'px';
	  this.objects[id].tableCtn.rows[0].cells[t].style.borderWidth='0px';
	  this.objects[id].tableCtn.rows[0].cells[t].style.fontSize='0px';
	  var d = document.createElement('div');
	  d.img = document.createElement('img');
	  d.img.src = structIcon.images[i];
	  d.img.style.height = structIcon.height+'px';
	  d.img.style.width = structIcon.width+'px';
	  d.appendChild(d.img);
	  this.objects[id].tableCtn.rows[0].cells[t].cell = t;
	  this.objects[id].tableCtn.rows[0].cells[t].divText = document.createElement('div');
	  if (structIcon.showTitles)
	    this.objects[id].tableCtn.rows[0].cells[t].divText.innerHTML = structIcon.titles[i];
	  if(structIcon.hideText)
		iconBar.objects[id].tableCtn.rows[0].cells[t].divText.style.display = 'none';
	  this.objects[id].tableCtn.rows[0].cells[t].divText.vAlign = 'top';
	  this.objects[id].tableCtn.rows[0].cells[t].sts = structIcon.sts[t];
	  this.objects[id].tableCtn.rows[0].cells[t].onExit = new Function('');
	  this.objects[id].tableCtn.rows[0].cells[t].onSelect = new Function('');
	  this.objects[id].tableCtn.rows[0].cells[t].appendChild(d); 
	  this.objects[id].tableCtn.rows[1].cells[t].appendChild(this.objects[id].tableCtn.rows[0].cells[t].divText); 
	  if(!structIcon.hideText)
	    iconBar.objects[id].tableCtn.rows[0].cells[t].divText.style.display = 'none';
	  if (structIcon.sts[t]) 
	  {
	  	this.objects[id].tableCtn.rows[1].cells[t].style.color = this.colorText;
	  }
	  else 
	  {
	  	this.objects[id].tableCtn.rows[1].cells[t].style.color = this.colorTextDisable;
	  }	
	  
	  this.objects[id].tableCtn.rows[0].cells[t].align = 'center';
	  this.objects[id].tableCtn.rows[1].cells[t].align = 'center';
	  
	  this.objects[id].tableCtn.rows[0].cells[t].onclick = function(e)
	  {
	  	if (this.sts) 
		{
		  iconBar.objects[id].tableCtn.rows[0].cells[this.cell].funct();
		}  
	  }
	  this.objects[id].tableCtn.rows[0].cells[t].onmousemove = function(e)
	  {
	  	if (this.sts) 
		{
		  iconBar.getMouseXY(e);
		  var w = parseInt(structIcon.width,10);
		  var ic = parseInt(structIcon.inc,10);
		  if(structIcon.idDlg == null)
		    var px =parseInt(iconBar.objects[id].posX,10)
		  else
		    var px =parseInt(dialogs.objects[structIcon.idDlg].x1,10);
		  
		  var porInc = iconBar.mouseX - (px + (w+ic)*this.cell);
		  var pi2 = parseInt(porInc/2,10);
		  if (porInc > structIcon.inc)
		  	porInc = ic;
		  var ob = iconBar.objects[id].tableCtn.rows[0].cells[this.cell].firstChild;
		  ob.img.style.height = (structIcon.height + porInc - pi2) + 'px';
		  ob.img.style.width = (structIcon.width + porInc - pi2) + 'px';
		}  
	  }
	  this.objects[id].tableCtn.rows[0].cells[t].onmouseover = function(e)
	  {
	  	if (this.sts) 
		{		
		  iconBar.objects[id].tableCtn.rows[0].cells[this.cell].style.cursor = 'pointer';
		  iconBar.setColorText(id,iconBar.colorTextSelected,this.cell);
		  iconBar.objects[id].tableCtn.rows[0].cells[this.cell].divText.style.display = 'block';
		  this.onSelect();
		}  
	  }
	  this.objects[id].tableCtn.rows[0].cells[t].onmouseout = function(e)
	  {
	  	if (this.sts) 
		{
		  iconBar.objects[id].tableCtn.rows[0].cells[this.cell].style.cursor = 'default';	
		  var ob = iconBar.objects[id].tableCtn.rows[0].cells[this.cell].firstChild;
		  ob.img.style.height = structIcon.height + 'px';
		  ob.img.style.width = structIcon.width + 'px';
		  iconBar.setColorText(id,iconBar.colorText,this.cell);
		  if(structIcon.hideText)
		  {
		  	iconBar.objects[id].tableCtn.rows[0].cells[this.cell].divText.style.display = 'none';
		  }  
		  this.onExit();
		}  
	  } 	  
	}
  },
  create : function(id)
  {
  	this.ids[this.ids.length]=id;
	this.objects[id] = document.createElement('div');
	this.objects[id].nameComponent = 'iconBar';
	this.objects[id].posX = 0;
	this.objects[id].posY = 0;
	this.objects[id].tableCtn = document.createElement('table');
    this.objects[id].tableCtn.setAttribute("border","0");
    this.objects[id].tableCtn.setAttribute("cellPadding","0");
    this.objects[id].tableCtn.setAttribute("cellSpacing","0");
	this.objects[id].tableCtn.insertRow(0);
	this.objects[id].tableCtn.insertRow(1);
	this.objects[id].tableCtn.insertRow(2);
  	this.objects[id].appendChild(this.objects[id].tableCtn);
	this.objects[id].loadBGImg=true;
    this.addPropertyMethod(id);
    if(attrib)
      this.setObjAttrib(id,attrib,attrib.getActualEnv());
    return this.objects[id];
  },
  getObject : function(id)
  {
    return this.objects[id];
  },
  getMouseXY: function(e)
  {
    var IE = document.all ? true : false;
    if (IE) 
    {
      iconBar.mouseX = event.clientX;
      iconBar.mouseY = event.clientY;
    }
    else 
    {
      iconBar.mouseX = e.pageX;
      iconBar.mouseY = e.pageY;
    }
  },
  onSelect : function(id, funct, iconNumber)
  {
  	this.objects[id].tableCtn.rows[0].cells[iconNumber].onSelect = new Function(funct);
  },
  onExit : function(id, funct, iconNumber)
  {
    iconBar.objects[id].tableCtn.rows[0].cells[iconNumber].onExit = new Function(funct);
  },
  setColorText : function(id,color,iconNumber)
  {
    this.objects[id].tableCtn.rows[1].cells[iconNumber].style.color = color;
  },
  setFont : function(id,family, size, color)
  {
    var i=0;
	var t = this.objects[id].tableCtn.rows[0].cells.length;
   	for(i=0; i<t; i++)
	{
	  this.objects[id].tableCtn.rows[1].cells[i].style.family = family;
	  this.objects[id].tableCtn.rows[1].cells[i].style.fontSize = size+'px';
   	  if(this.objects[id].tableCtn.rows[0].cells[i].sts)
	    this.objects[id].tableCtn.rows[1].cells[i].style.color = color;
	}	
  },
  setBgImg : function(id, bgImg)
  {
  	var t = this.objects[id].tableCtn.rows[0].cells.length;
   	for (i = 0; i < t; i++) 
	{
	  var ob = iconBar.objects[id].tableCtn.rows[0].cells[i].firstChild;
	  ob.img.style.backgroundImage = 'url(' + this.pathBgImg + bgImg + ')';
	}
  },
   setPosition : function(id,x1,y1)
   {
   	 this.objects[id].posX=x1;
	 this.objects[id].posY=y1;
     this.objects[id].style.position='absolute';
     this.objects[id].style.left=x1+'px'; 
     this.objects[id].style.top=y1+'px';
   }, 
   setTopCenter : function(id)
   {
   	 var w  = parseInt(this.objects[id].tableCtn.rows[0].cells[0].width,10);
	 var t  = parseInt(this.objects[id].tableCtn.rows[0].cells.length,10);
   	 var x1 = parseInt(document.documentElement.clientWidth/2,10);
	 var v  = parseInt(w*t/2,10);
     x1 = x1 - v;
	 var y1 = parseInt(w/2,10);
	 this.setPosition(id,x1,y1);
   },
   setBottomCenter : function(id)
   {
   	 var w  = parseInt(this.objects[id].tableCtn.rows[0].cells[0].width,10);
	 var t  = parseInt(this.objects[id].tableCtn.rows[0].cells.length,10);
   	 var x1 = parseInt(document.documentElement.clientWidth/2,10);
	 var v  = parseInt(w*t/2,10);
     x1 = x1 - v;
	 var yt = parseInt(document.documentElement.clientHeight,10);
	 var y1 = parseInt(w/2,10);
	 yt = yt - y1 - 115;
	 this.setPosition(id,x1,yt);
   },
   setRelativePosition : function(id)
   {
     this.objects[id].style.position='relative';  
   },
   setObjAttrib : function(id,objAttr,env)
   {
   	 this.objects[id].loadBGImg = objAttr.getLoadBGImg();
	 this.setFont(id,objAttr.Font.editorCaption[env],objAttr.Size.textHint[env],objAttr.Color.textBarIcon[env]);
	 this.colorText = objAttr.Color.textBarIcon[env];
	 this.colorTextDisable = objAttr.Color.textBarIconDisable[env];
	 this.colorTextSelected = objAttr.Color.textBarIconSelected[env];
   },
  setObjAttribToAll : function(objAttrib,env)
  {
    for(i=0;i<this.ids.length;i++)
    {
      this.setObjAttrib(this.ids[i],attrib,env);
    }	
  }
}

