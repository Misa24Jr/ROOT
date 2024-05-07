var display =
{
  BGCOLOR : "#000000",
  ONCOLOR : "#FFFF00",
  OFFCOLOR : "222222",
  BORDERSTYLE : "ridge",
  MINHEIGHT : "5%",
  MAXHEIGHT : "35%",
  MINWIDTH : "10%",
  MAXWIDTH : "60%",
  BORDERSTYLE : "groove",
  
addPropertyMethod : function(id)
{
  display.objects[id].addToBody  =  function()
  {
    display.addToBody(id);
  }
  display.objects[id].getObject  =  function()
  {
    return display.getObject(id);
  }
  display.objects[id].getValue  =  function()
  {
    return display.getValue(id);
  }
  display.objects[id].hide  =  function()
  {
    display.hide(id);
  }
  display.objects[id].offLeftPoint  =  function()
  {
    display.offLeftPoint(id);
  }
  display.objects[id].offRightPoint  =  function()
  {
    display.offRightPoint(id);
  }
  display.objects[id].offSegment  =  function(obj)
  {
    display.offSegment(id,obj);
  }
  display.objects[id].onLeftPoint  =  function()
  {
    display.onLeftPoint(id);
  }
  display.objects[id].onMouseMove  =  function( funct)
  {
    display.onMouseMove(id, funct);
  }
  display.objects[id].onMouseOver  =  function( funct)
  {
    display.onMouseOver(id, funct);
  }
  display.objects[id].onClick  =  function( funct)
  {
    display.onClick(id, funct);
  }
  display.objects[id].onChangeValue  =  function(funct)
  {
    display.onChangeValue(id, funct);
  }
  display.objects[id].ondblClick  =  function( funct)
  {
    display.ondblClick(id, funct);
  }
  display.objects[id].onRightPoint  =  function()
  {
    display.onRightPoint(id);
  }
  display.objects[id].onSegment  =  function(obj)
  {
    display.onSegment(id, obj);
  }
  display.objects[id].resize  =  function( w, h)
  {
    display.resize(id, w, h);
  }
  display.objects[id].setAbsolutePosition  =  function()
  {
    display.setAbsolutePosition(id);
  }
  display.objects[id].setBackGroundColor  =  function( bgColor)
  {
    display.setBackGroundColor(id, bgColor);
  }
  display.objects[id].setBorderSize  =  function( borderSize)
  {
    display.setBorderSize(id, borderSize);
  }
  display.objects[id].setBorderStyle  =  function( borderStyle)
  {
    display.setBorderStyle(id, borderStyle);
  }
  display.objects[id].setDimension  =  function( w, h)
  {
    display.setDimension(id, w, h);
  }
  display.objects[id].setObjAttrib  =  function( objAttr, env)
  {
    display.setObjAttrib(id, objAttr, env);
  }
  display.objects[id].setObjAttribToAll  =  function( objAttrib, env)
  {
    display.setObjAttribToAll(objAttrib,env);
  }
  display.objects[id].setOffColor  =  function( color)
  {
    display.setOffColor(id, color);
  }
  display.objects[id].setOnColor  =  function( color)
  {
    display.setOnColor(id, color);
  }
  display.objects[id].setPosition  =  function( x, y)
  {
    display.setPosition(id, x, y);
  }
  display.objects[id].setRelativePosition  =  function()
  {
    display.setRelativePosition(id);
  }
  display.objects[id].setValue  =  function(val)
  {
    display.setValue(id,val);
  }
  display.objects[id].show  =  function()
  {
    display.show(id);
  }
}, 

  addToBody : function(id)
  {
    document.body.appendChild(this.objects[id]);
  },

  create : function(id,w,h,val)
  {
  	this.objects[id] = document.createElement("div");
  	this.objects[id].nameComponent = 'display';
	this.objects[id].id = id;
	this.objects[id].onchangevalue = new Function("");
	this.ids[this.ids.length] = id;
	this.objects[id].w = w;
	this.objects[id].h = h;
	this.objects[id].val = val;
	this.objects[id].table = document.createElement("table");
	this.objects[id].table.style.width = "100%";
	this.objects[id].table.style.height = "100%";
	this.objects[id].table.setAttribute('border','0px'); 
	this.objects[id].table.setAttribute('cellPadding','0px');
	this.objects[id].table.setAttribute('cellSpacing','1px');
	this.objects[id].table.insertRow(0);
	this.objects[id].table.rows[0].insertCell(0);
	this.objects[id].table.rows[0].insertCell(1);
	this.objects[id].table.rows[0].insertCell(2);
	this.objects[id].table.rows[0].insertCell(3);
	this.objects[id].table.rows[0].insertCell(4);
	this.objects[id].table.insertRow(1);
	this.objects[id].table.rows[1].insertCell(0);
	this.objects[id].table.rows[1].insertCell(1);
	this.objects[id].table.rows[1].insertCell(2);
	this.objects[id].table.rows[1].insertCell(3);
	this.objects[id].table.rows[1].insertCell(4);
	this.objects[id].table.insertRow(2);
	this.objects[id].table.rows[2].insertCell(0);
	this.objects[id].table.rows[2].insertCell(1);
	this.objects[id].table.rows[2].insertCell(2);
	this.objects[id].table.rows[2].insertCell(3);
	this.objects[id].table.rows[2].insertCell(4);
	this.objects[id].table.insertRow(3);
	this.objects[id].table.rows[3].insertCell(0);
	this.objects[id].table.rows[3].insertCell(1);
	this.objects[id].table.rows[3].insertCell(2);
	this.objects[id].table.rows[3].insertCell(3);
	this.objects[id].table.rows[3].insertCell(4);
	this.objects[id].table.insertRow(4);
	this.objects[id].table.rows[4].insertCell(0);
	this.objects[id].table.rows[4].insertCell(1);
	this.objects[id].table.rows[4].insertCell(2);
	this.objects[id].table.rows[4].insertCell(3);
	this.objects[id].table.rows[4].insertCell(4);
	for(i=0;i<5;i++)
	{
	  this.objects[id].table.rows[0].cells[i].height = this.MINHEIGHT;
	  this.objects[id].table.rows[1].cells[i].height = this.MAXHEIGHT;
	  this.objects[id].table.rows[2].cells[i].height = this.MINHEIGHT;
	  this.objects[id].table.rows[3].cells[i].height = this.MAXHEIGHT;
	  this.objects[id].table.rows[4].cells[i].height = this.MINHEIGHT;
	  this.objects[id].table.rows[i].cells[0].width = this.MINWIDTH; 
      this.objects[id].table.rows[i].cells[1].width = this.MINWIDTH;
	  this.objects[id].table.rows[i].cells[2].width = this.MAXWIDTH;
	  this.objects[id].table.rows[i].cells[3].width = this.MINWIDTH;
	  this.objects[id].table.rows[i].cells[4].width = this.MINWIDTH;
	}
	this.objects[id].segmentA = this.objects[id].table.rows[0].cells[2];
	this.objects[id].segmentB = this.objects[id].table.rows[1].cells[3];
	this.objects[id].segmentC = this.objects[id].table.rows[3].cells[3];
	this.objects[id].segmentD = this.objects[id].table.rows[4].cells[2];
	this.objects[id].segmentE = this.objects[id].table.rows[3].cells[1];
	this.objects[id].segmentF = this.objects[id].table.rows[1].cells[1];
	this.objects[id].segmentG = this.objects[id].table.rows[2].cells[2];
	this.objects[id].leftPoint = this.objects[id].table.rows[4].cells[0];
	this.objects[id].rightPoint = this.objects[id].table.rows[4].cells[4];
	this.setDimension(id,w,h);
	this.setBackGroundColor(id, this.BGCOLOR);
	this.setBorderStyle(id,this.BORDERSTYLE);
	this.setBorderSize(id,1);
	this.objects[id].appendChild(this.objects[id].table);
	this.offLeftPoint(id);
	this.offRightPoint(id);
	this.setOffColor(id,this.OFFCOLOR);
	this.setOnColor(id,this.ONCOLOR);
	this.addPropertyMethod(id);
	if(attrib)
      this.setObjAttrib(id,attrib,attrib.getActualEnv());
	return this.objects[id];
  },

  getObject : function(id)
  {
    return this.objects[id];
  },
  
  getValue : function(id)
  {
    return this.objects[id].val;
  },
  
  hide : function(id)
  {
    this.objects[id].style.display = "none";
  },
  
  offLeftPoint : function(id)
  {
  	this.objects[id].leftPoint.style.backgroundColor = this.objects[id].offColor;
  },
  
  offRightPoint : function(id)
  {
  	this.objects[id].rightPoint.style.backgroundColor = this.objects[id].offColor;
  },
  
  offSegment : function(id,obj)
  {
  	obj.style.backgroundColor = this.objects[id].offColor;
  },

  onLeftPoint : function(id)
  {
  	this.objects[id].leftPoint.style.backgroundColor = this.objects[id].onColor;
  },
  
  onMouseMove : function(id, funct)
  {
  	this.objects[id].table.onmousemove = new Function(funct);
  },

  onMouseOver : function(id, funct)
  {
  	this.objects[id].onmouseover = new Function(funct);
  },
  
  onClick : function(id, funct)
  {
  	this.objects[id].onclick = new Function(funct);
  },
  
  onChangeValue : function(id, funct)
  {
  	this.objects[id].onchangevalue = new Function(funct);
  },  

  ondblClick : function(id, funct)
  {
  	this.objects[id].ondblclick = new Function(funct);
  },
  
  onRightPoint : function(id)
  {
  	this.objects[id].rightPoint.style.backgroundColor = this.objects[id].onColor;
  },
  
  onSegment : function (id, obj)
  {
  	obj.style.backgroundColor = this.objects[id].onColor;
  },
  
  resize : function(id, w, h)
  {
    this.setDimension(id,w,h);
  },
  
  setAbsolutePosition : function(id)
  {
  	this.objects[id].style.position = "absolute";
  },
  
  setBackGroundColor : function(id, bgColor)
  {
    this.objects[id].style.backgroundColor = bgColor;
	this.objects[id].table.style.backgroundColor = bgColor;
  },
  
  setBorderSize : function(id, borderSize)
  {
    this.objects[id].style.borderWidth = borderSize + "px";
  },
  
  setBorderStyle : function(id, borderStyle)
  {
    this.objects[id].style.borderStyle = borderStyle;
  },
    
  setDimension : function(id, w, h)
  {
    this.objects[id].w = w;
    this.objects[id].h = h;
    this.objects[id].style.width = w;
    this.objects[id].style.height = h;
  },

  setObjAttrib : function(id, objAttr, env)
  {
    this.setBackGroundColor(id,objAttr.Color.bgDisplay[env]);
    this.setBorderStyle(id,objAttr.Border.borderDisplay[env]);
    this.setOnColor(id,objAttr.Color.onDisplay[env]);
    this.setOffColor(id,objAttr.Color.offDisplay[env]);
    this.setValue(id,this.objects[id].val);
  },
  
  setObjAttribToAll : function(objAttrib,env)
  {
    for(i=0;i<this.ids.length;i++)
    {
      this.setObjAttrib(this.ids[i],attrib,env);
    }	
},  

  setOffColor : function(id, color)
  {
    this.objects[id].offColor = color;	
	this.setValue(id, this.objects[id].val);
  },
  
  setOnColor : function(id, color)
  {
  	this.objects[id].onColor = color;
	this.setValue(id, this.objects[id].val);
  },
  
  setPosition : function(id, x, y)
  {
    this.objects[id].style.left = x;
    this.objects[id].style.top = y;
  },

  setRelativePosition : function(id)
  {
  	this.objects[id].style.position = "relative";
  },
  
  setValue : function (id,val)
  {
  	this.objects[id].val = val;
	switch (val) 
	{
      case "1":
	    this.offSegment(id, this.objects[id].segmentA);
		this.onSegment(id, this.objects[id].segmentB);
		this.onSegment(id, this.objects[id].segmentC); 
		this.offSegment(id, this.objects[id].segmentD);
		this.offSegment(id, this.objects[id].segmentE);
		this.offSegment(id, this.objects[id].segmentF);
		this.offSegment(id, this.objects[id].segmentG);
      break;
      case "2":
	    this.onSegment(id, this.objects[id].segmentA);
		this.onSegment(id, this.objects[id].segmentB);
		this.offSegment(id, this.objects[id].segmentC); 
		this.onSegment(id, this.objects[id].segmentD);
		this.onSegment(id, this.objects[id].segmentE);
		this.offSegment(id, this.objects[id].segmentF);
		this.onSegment(id, this.objects[id].segmentG);
      break;
      case "3":
        this.onSegment(id, this.objects[id].segmentA);
		this.onSegment(id, this.objects[id].segmentB);
		this.onSegment(id, this.objects[id].segmentC); 
		this.onSegment(id, this.objects[id].segmentD);
		this.offSegment(id, this.objects[id].segmentE);
		this.offSegment(id, this.objects[id].segmentF);
		this.onSegment(id, this.objects[id].segmentG); 
      break;
	  case "4":
	    this.offSegment(id, this.objects[id].segmentA);
		this.onSegment(id, this.objects[id].segmentB);
		this.onSegment(id, this.objects[id].segmentC); 
		this.offSegment(id, this.objects[id].segmentD);
		this.offSegment(id, this.objects[id].segmentE);
		this.onSegment(id, this.objects[id].segmentF);
		this.onSegment(id, this.objects[id].segmentG);
	  break;  
	  case "5":
	    this.onSegment(id, this.objects[id].segmentA);
		this.offSegment(id, this.objects[id].segmentB);
		this.onSegment(id, this.objects[id].segmentC); 
		this.onSegment(id, this.objects[id].segmentD);
		this.offSegment(id, this.objects[id].segmentE);
		this.onSegment(id, this.objects[id].segmentF);
		this.onSegment(id, this.objects[id].segmentG);
	  break;
	  case "6":
	    this.offSegment(id, this.objects[id].segmentA);
		this.offSegment(id, this.objects[id].segmentB);
		this.onSegment(id, this.objects[id].segmentC); 
		this.onSegment(id, this.objects[id].segmentD);
		this.onSegment(id, this.objects[id].segmentE);
		this.onSegment(id, this.objects[id].segmentF);
		this.onSegment(id, this.objects[id].segmentG);
	  break;
	  case "7":
	    this.onSegment(id, this.objects[id].segmentA);
		this.onSegment(id, this.objects[id].segmentB);
		this.onSegment(id, this.objects[id].segmentC); 
		this.offSegment(id, this.objects[id].segmentD);
		this.offSegment(id, this.objects[id].segmentE);
		this.offSegment(id, this.objects[id].segmentF);
		this.offSegment(id, this.objects[id].segmentG);
	  break;
	  case "8":
	    this.onSegment(id, this.objects[id].segmentA);
		this.onSegment(id, this.objects[id].segmentB);
		this.onSegment(id, this.objects[id].segmentC); 
		this.onSegment(id, this.objects[id].segmentD);
		this.onSegment(id, this.objects[id].segmentE);
		this.onSegment(id, this.objects[id].segmentF);
		this.onSegment(id, this.objects[id].segmentG);
	  break;
	  case "9":
	    this.onSegment(id, this.objects[id].segmentA);
		this.onSegment(id, this.objects[id].segmentB);
		this.onSegment(id, this.objects[id].segmentC); 
		this.offSegment(id, this.objects[id].segmentD);
		this.offSegment(id, this.objects[id].segmentE);
		this.onSegment(id, this.objects[id].segmentF);
		this.onSegment(id, this.objects[id].segmentG);
	  break;
	  case "0":
	    this.onSegment(id, this.objects[id].segmentA);
		this.onSegment(id, this.objects[id].segmentB);
		this.onSegment(id, this.objects[id].segmentC); 
		this.onSegment(id, this.objects[id].segmentD);
		this.onSegment(id, this.objects[id].segmentE);
		this.onSegment(id, this.objects[id].segmentF);
		this.offSegment(id, this.objects[id].segmentG);
	  break;
	  case "A":
	    this.onSegment(id, this.objects[id].segmentA);
		this.onSegment(id, this.objects[id].segmentB);
		this.onSegment(id, this.objects[id].segmentC); 
		this.onSegment(id, this.objects[id].segmentD);
		this.onSegment(id, this.objects[id].segmentE);
		this.onSegment(id, this.objects[id].segmentF);
		this.offSegment(id, this.objects[id].segmentG);
	  break;
	  case "B":
	    this.onSegment(id, this.objects[id].segmentA);
		this.onSegment(id, this.objects[id].segmentB);
		this.onSegment(id, this.objects[id].segmentC); 
		this.onSegment(id, this.objects[id].segmentD);
		this.onSegment(id, this.objects[id].segmentE);
		this.onSegment(id, this.objects[id].segmentF);
		this.offSegment(id, this.objects[id].segmentG);
	  break;
	  case "C":
	    this.onSegment(id, this.objects[id].segmentA);
		this.onSegment(id, this.objects[id].segmentB);
		this.onSegment(id, this.objects[id].segmentC); 
		this.onSegment(id, this.objects[id].segmentD);
		this.onSegment(id, this.objects[id].segmentE);
		this.onSegment(id, this.objects[id].segmentF);
		this.offSegment(id, this.objects[id].segmentG);
	  break;
	  case "D":
	    this.onSegment(id, this.objects[id].segmentA);
		this.onSegment(id, this.objects[id].segmentB);
		this.onSegment(id, this.objects[id].segmentC); 
		this.onSegment(id, this.objects[id].segmentD);
		this.onSegment(id, this.objects[id].segmentE);
		this.onSegment(id, this.objects[id].segmentF);
		this.offSegment(id, this.objects[id].segmentG);
	  break;
	  case "E":
	    this.onSegment(id, this.objects[id].segmentA);
		this.onSegment(id, this.objects[id].segmentB);
		this.onSegment(id, this.objects[id].segmentC); 
		this.onSegment(id, this.objects[id].segmentD);
		this.onSegment(id, this.objects[id].segmentE);
		this.onSegment(id, this.objects[id].segmentF);
		this.offSegment(id, this.objects[id].segmentG);
	  break;
	  case "F":
	    this.onSegment(id, this.objects[id].segmentA);
		this.onSegment(id, this.objects[id].segmentB);
		this.onSegment(id, this.objects[id].segmentC); 
		this.onSegment(id, this.objects[id].segmentD);
		this.onSegment(id, this.objects[id].segmentE);
		this.onSegment(id, this.objects[id].segmentF);
		this.offSegment(id, this.objects[id].segmentG);
	  break;
      default:
	    this.offSegment(id, this.objects[id].segmentA);
		this.offSegment(id, this.objects[id].segmentB);
		this.offSegment(id, this.objects[id].segmentC); 
		this.offSegment(id, this.objects[id].segmentD);
		this.offSegment(id, this.objects[id].segmentE);
		this.offSegment(id, this.objects[id].segmentF);
		this.offSegment(id, this.objects[id].segmentG);
    } 
    this.objects[id].onchangevalue();
  },
  
  show : function(id)
  {
    this.objects[id].style.display = "block";
  } 
}