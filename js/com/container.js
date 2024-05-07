var container =
{
  objects : new Array,
  ids : new Array(),
  pathBgImg : 'images/bg/',
  addPropertyMethod : function(id)
  {
    this.objects[id].addToBody = function()
    {
      container.addToBody(id);
    }
    this.objects[id].setObject = function(obj,lMargin,tMargin,rMargin,bMargin,row)
    {
      container.setObject(id,obj,lMargin,tMargin,rMargin,bMargin,row);
    }
    this.objects[id].setLMargin = function(lMargin, posObj)
    {
      container.setLMargin(id,lMargin, posObj);
    }
    this.objects[id].setRMargin = function(rMargin, posObj)
    {
      container.setRMargin(id,rMargin, posObj);
    }
    this.objects[id].setTMargin = function(tMargin, posObj)
    {
      container.setTMargin(id,tMargin, posObj);
    }
    this.objects[id].setBMargin = function(bMargin, posObj)
    {
      container.setBMargin(id,bMargin, posObj);
    }
    this.objects[id].getObject = function()
    {
      container.getObject(id);
    }
    this.objects[id].getGridContainer = function()
    {
      return container.getGridContainer(id);	
    }
    this.objects[id].setFontTitle = function(fontFamily, fontSize, fontColor)
    {
      container.setFontTitle(id, fontFamily, fontSize, fontColor);
    }
    this.objects[id].setPositionBarTitle = function(x, y)
    {
      container.setPositionBarTitle(id, x, y);	
    }
    this.objects[id].setMarginLeftBarTitle = function(ml)
    {
      container.setMarginLeftBarTitle(id, ml)
    }    
    this.objects[id].setBgTitle = function(height, bgImg, borderStyle, borderWidth)
    {
      container.setBgTitle(id, height, bgImg, borderStyle, borderWidth);
    }	
    this.objects[id].setWidthMarcoTitle = function(width)
    {
      container.setWidthMarcoTitle(id, width);
    }
    this.objects[id].setDimension = function(w, h)
    {
      container.setDimension(id, w, h);	
    }
	this.objects[id].setPropertyMarco = function(borderStyle, borderWidth, colorLn)
    {
      container.setPropertyMarco(id, borderStyle, borderWidth, colorLn);	
    }
    this.objects[id].setHeightRow = function(row,height)
    {
      container.setHeightRow(id, row, height);
    }
    this.objects[id].setHeightRows = function(height)
    {
      container.setHeightRows(id, height);
    }
    this.objects[id].vAlignRow = function(row, vAlign)
    {
      container.vAlignRow(id, row, vAlign);	
    }
    this.objects[id].onMouseOut = function(funct)
    {
      container.onMouseOut(id, funct);	
    }
    this.objects[id].onMouseDown = function(funct)
    {
      container.onMouseDown(id, funct);	
    }
    this.objects[id].onMouseUp = function(funct)
    {
      container.onMouseUp(id, funct);	
    }
    this.objects[id].onMouseOver = function(funct)
    {
      container.onMouseOver(id, funct);	
    }
    this.objects[id].onMouseMove = function(funct)
    {
      container.onMouseMove(id, funct);	
    }
    this.objects[id].onClick = function(funct)
    {
      container.onClick(id, funct);	
    }
    this.objects[id].addObject = function(obj, x, y)
    {
      container.addObject(id, obj, x, y);
    }
    this.objects[id].moveObject = function(obj, x, y)
    {
      container.moveObject(id, obj, x, y);
    }
  },
  
  onClick : function(id, funct)
  {
  	this.objects[id].onclick = new Function(funct);
  },


  onMouseMove : function(id, funct)
  {
  	this.objects[id].onmousemove = new Function(funct);
  },

  onMouseOver : function(id, funct)
  {
  	this.objects[id].onmouseover = new Function(funct);
  },

  onMouseUp : function(id, funct)
  {
  	this.objects[id].onmouseup = new Function(funct);
  },

  onMouseDown : function(id, funct)
  {
  	this.objects[id].onmousedown = new Function(funct);
  },

  onMouseOut : function(id, funct)
  {
  	this.objects[id].onmouseout = new Function(funct);
  },
  
  addToBody : function(id)
  {
    document.body.appendChild(this.objects[id]);
  },
  
  addObject : function(id, obj, x, y)
  {
  	obj.style.position = 'absolute';
  	obj.style.left = x + 'px';
  	obj.style.top = y + 'px';
    this.objects[id].appendChild(obj);
  },
  
  moveObject : function(id, obj, x, y)
  {
  	obj.style.position = 'absolute';
  	obj.style.left = x + 'px';
  	obj.style.top = y + 'px';
  },

  create : function(id,titulo,totalRows)
  {
  	if(totalRows==null)
  	  totalRows=1;
    this.objects[id] = document.createElement("div");  
    this.objects[id].id = id;
    this.ids[this.ids.length] = id;
    this.objects[id].style.borderRadius='1em';
    this.objects[id].nameComponent = 'container';
    if(titulo!=null)
    {
      this.setPropertyMarco(id, 'solid', 1, '#AEAEAE');	
      this.objects[id].widthTitle = parseInt(titulo.length,10);	
      this.objects[id].divTitle = document.createElement("div"); 
      this.objects[id].divTitle.style.borderRadius = '1em';
      this.objects[id].divTitle.style.display='block';
      this.objects[id].divTitle.style.position='relative';
      this.objects[id].divTitle.txt = document.createElement("label");
      this.objects[id].divTitle.style.width = 10 + this.objects[id].widthTitle*6 + 'px';
      this.objects[id].divTitle.align = 'center';
      this.objects[id].divTitle.txt.innerHTML = titulo;
      this.objects[id].divTitle.appendChild(this.objects[id].divTitle.txt);
      this.objects[id].appendChild(this.objects[id].divTitle);
      this.objects[id].nameComponent = 'container';
      this.setFontTitle(id, 'arial', '14', 'black');
      if(attrib)
        this.setBgTitle(id, 14, attrib.BgImg.bgPanel[attrib.getActualEnv()], 'none', 0)
      else
        this.setBgTitle(id, 14, 'bg236.jpg', 'none', 0);
      this.setPositionBarTitle(id, 20, -7);
    }
    
    this.objects[id].arrayObj = new Array();
    this.objects[id].tableContainer = document.createElement("table");
  	this.objects[id].tableContainer.setAttribute("border","0");
    this.objects[id].tableContainer.setAttribute("cellPadding","0");
    this.objects[id].tableContainer.setAttribute("cellSpacing","0");
    this.objects[id].tableContainer.style.fontSize='0px';
    for(var i=0; i<totalRows; i++)
       this.objects[id].tableContainer.insertRow(i);
    this.objects[id].appendChild(this.objects[id].tableContainer);
    this.addPropertyMethod(id);
    return this.objects[id];
  },
  getObject : function(id)
  {
    return this.objects[id];
  },
  getGridContainer : function(id)
  {
    return this.objects[id].tableContainer;
  },

  setDimension : function(id, w, h)
  {
  	this.objects[id].style.width = w +'px';
  	this.objects[id].style.height = h +'px';
  },
  
  setFontTitle : function(id, fontFamily, fontSize, fontColor)
  {
   	this.objects[id].divTitle.txt.style.color = fontColor;
    this.objects[id].divTitle.txt.style.fontSize = fontSize +'px';
    this.objects[id].divTitle.txt.style.fontFamily = fontFamily;
  },
  
  setPositionBarTitle : function(id, x, y)
  {
  	this.objects[id].divTitle.style.top = y + 'px';
    this.objects[id].divTitle.style.left = x + 'px';
  },

  setMarginLeftBarTitle : function(id, ml)
  {
    this.objects[id].divTitle.style.left = ml + 'px';
  },

  setBgTitle : function(id, height, bgImg, borderStyle, borderWidth)
  {
  	this.objects[id].divTitle.style.backgroundImage = 'url('+this.pathBgImg+bgImg+')';
  	this.objects[id].divTitle.style.borderStyle = borderStyle;
  	this.objects[id].divTitle.style.borderWidth = borderWidth + 'px';
  	this.objects[id].divTitle.style.height = height + 'px';
  	this.objects[id].divTitle.style.lineHeight = height + 'px';
  	this.objects[id].divTitle.vAlign = 'middle';
  },
  
  setWidthMarcoTitle : function(id, width)
  {
  	this.objects[id].divTitle.style.width = width+ 'px';
  },
  
  setPropertyMarco : function (id, borderStyle, borderWidth, colorLn) 
  {
    this.objects[id].style.borderStyle = borderStyle;
    this.objects[id].style.display='block';
    this.objects[id].style.borderWidth = borderWidth + 'px';
    this.objects[id].style.borderColor = colorLn;
  },  
  
  setObject : function(id,obj,lMargin,tMargin,rMargin,bMargin,row)
  {
  	if(row==null)
  	  row=0;
  	var t = this.objects[id].arrayObj.length;
  	this.objects[id].arrayObj[t] = document.createElement('table');
  	this.objects[id].arrayObj[t].setAttribute("border","0");
    this.objects[id].arrayObj[t].setAttribute("cellPadding","0");
    this.objects[id].arrayObj[t].setAttribute("cellSpacing","0");
    this.objects[id].arrayObj[t].insertRow(0);
    this.objects[id].arrayObj[t].insertRow(1);
    this.objects[id].arrayObj[t].insertRow(2);
    this.objects[id].arrayObj[t].style.fontSize='0px';
    this.objects[id].arrayObj[t].style.borderWidth='0px';
    this.objects[id].arrayObj[t].rows[0].insertCell(0);
    this.objects[id].arrayObj[t].rows[0].insertCell(1);
    this.objects[id].arrayObj[t].rows[0].insertCell(2);
    this.objects[id].arrayObj[t].rows[1].insertCell(0);
    this.objects[id].arrayObj[t].rows[1].insertCell(1);
    this.objects[id].arrayObj[t].rows[1].insertCell(2);
    this.objects[id].arrayObj[t].rows[2].insertCell(0);
    this.objects[id].arrayObj[t].rows[2].insertCell(1);
    this.objects[id].arrayObj[t].rows[2].insertCell(2);
    this.objects[id].arrayObj[t].rows[1].cells[1].appendChild(obj);
    this.objects[id].arrayObj[t].rows[1].cells[0].style.width  = lMargin+"px";
    this.objects[id].arrayObj[t].rows[1].cells[2].style.width  = rMargin+"px";
    this.objects[id].arrayObj[t].rows[0].cells[1].style.height = tMargin+"px";
    this.objects[id].arrayObj[t].rows[2].cells[1].style.height = bMargin+"px";
    var totCeldas = this.objects[id].tableContainer.rows[row].cells.length;
    this.objects[id].tableContainer.rows[row].insertCell(totCeldas);
    this.objects[id].tableContainer.rows[row].cells[totCeldas].appendChild(this.objects[id].arrayObj[t]);
  },
 
setHeightRow : function(id, row, height)
{
  this.objects[id].arrayObj[row].rows[1].cells[1].style.height = height+'px';
},  
vAlignRow : function(id, row, vAlign)
{
  this.objects[id].arrayObj[row].rows[1].cells[1].vAlign = vAlign;	
},  

setHeightRows : function(id, height)
{
  var totRows = this.objects[id].tableContainer.rows.length;
  for(var i=0; i<totRows; i++)
  {
  	this.objects[id].arrayObj[i].rows[1].cells[1].style.height = height+'px';
  }
}, 
  
  setLMargin : function(id,lMargin, posObj)
  {
    this.objects[id].arrayObj[posObj].rows[1].cells[0].style.width  = lMargin+"px";
  },
  setRMargin : function(id,rMargin, posObj)
  {
    this.objects[id].arrayObj[posObj].rows[1].cells[2].style.width  = rMargin+"px";
  },

  setTMargin : function(id,tMargin, posObj)
  {
    this.objects[id].arrayObj[posObj].rows[0].cells[1].style.height  = tMargin+"px";
  },

  setBMargin : function(id,bMargin, posObj)
  {
    this.objects[id].arrayObj[posObj].rows[2].cells[1].style.height  = bMargin+"px";
  }
}

