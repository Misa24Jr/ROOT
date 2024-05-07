var gauge =
{
  LEFT : 0.1,
  TOP : 0,
  LETFTEXT : 6,
  LEFTLINE: 0.35,
  WINDICATOR : 0.8,
  HINDICATOR : 0.98,
  PERCENT : 100, 
  WIDTHBOLDTLINE : 0.4,
  SIZETEXT : 0.4,  
  BGCOLOR : "#ffffcc",
  INDICATORBGCOLOR : "225555",
  TEXTCOLORINSET : "000000",
  TEXTCOLOROUTSET : "ffffff",
  VALUEBGCOLOR : "22ff55",
  BORDERSTYLE : "ridge",
  objects: new Array,
  ids : new Array,
addPropertyMethod : function(id)
{
  gauge.objects[id].addToBody  =  function()
  {
    gauge.addToBody(id);
  }
  gauge.objects[id].addLines  =  function()
  {
    gauge.addLines(id);
  }
  gauge.objects[id].addTexts  =  function()
  {
    gauge.addTexts(id);
  }
  gauge.objects[id].getValue  =  function()
  {
    return gauge.getValue(id);
  }
  gauge.objects[id].getObject  =  function()
  {
    return gauge.getObject(id);
  }
  gauge.objects[id].getLeftLine  =  function()
  {
    return gauge.getLeftLine(id);
  }
  gauge.objects[id].getTopValue  =  function(pos)
  {
    return gauge.getTopValue(id,pos);
  }
  gauge.objects[id].getWidthLine  =  function()
  {
    return gauge.getWidthLine(id);
  }
  gauge.objects[id].getHeigthLine  =  function()
  {
    return gauge.getHeigthLine(id);
  }
  gauge.objects[id].getFontSizeText  =  function()
  {
    return gauge.getFontSizeText(id);
  }
  gauge.objects[id].getLeftText  =  function()
  {
    return gauge.getLeftText(id);
  }
  gauge.objects[id].getHeigtValue  =  function(pos)
  {
    return gauge.getHeigtValue(id,pos);
  }
  gauge.objects[id].hide  =  function()
  {
    gauge.hide(id);
  }
  gauge.objects[id].resize  =  function( w, h)
  {
    gauge.resize(id, w, h);
  }
  gauge.objects[id].resizeLines  =  function()
  {
    gauge.resizeLines(id);
  }
  gauge.objects[id].resizeText  =  function()
  {
    gauge.resizeText(id);
  }
  gauge.objects[id].show  =  function()
  {
    gauge.show(id);
  }
  gauge.objects[id].setValue  =  function(pos)
  {
    gauge.setValue(id,pos);
  }
  gauge.objects[id].setPositionObj  =  function( obj,x, y)
  {
    gauge.setPositionObj(id, obj,x, y);
  }
  gauge.objects[id].setPosition  =  function( x, y)
  {
    gauge.setPosition(id, x, y);
  }
  gauge.objects[id].setObjAttrib  =  function( objAttr, env)
  {
    gauge.setObjAttrib(id, objAttr, env);
  }
  gauge.objects[id].setObjAttribToAll  =  function( objAttrib, env)
  {
    gauge.setObjAttribToAll(objAttrib,env);
  }
  gauge.objects[id].setBgColor  =  function( obj, bgColor)
  {
    gauge.setBgColor(id, obj, bgColor);
  }
  gauge.objects[id].setBackGroundColor  =  function( bgColor)
  {
    gauge.setBackGroundColor(id, bgColor);
  }
  gauge.objects[id].setBorderStyle  =  function( borderStyle)
  {
    gauge.setBorderStyle(id, borderStyle);
  }
  gauge.objects[id].setColorBar  =  function( barColor)
  {
    gauge.setColorBar(id, barColor);
  }
  gauge.objects[id].setColorIndicator  =  function( indicatorColor)
  {
    gauge.setColorIndicator(id, indicatorColor);
  }
  gauge.objects[id].setTextColorInset  =  function( color)
  {
    gauge.setTextColorInset(id, color);
  }
  gauge.objects[id].setTextColorOutset  =  function( color)
  {
    gauge.setTextColorOutset(id, color);
  }
  gauge.objects[id].setDimension  =  function( w, h)
  {
    gauge.setDimension(id, w, h);
  }
  gauge.objects[id].setBorderSize  =  function( obj, borderSize)
  {
    gauge.setBorderSize(id, obj, borderSize);
  }
},
  addToBody : function(id)
  {
    document.body.appendChild(this.objects[id]);
  },
  addLines : function(id)
  {
    for(i=25;i<=100;i=i+25)
    {
      this.objects[id].lines[i] = document.createElement("div");
	  this.objects[id].id = id;
      this.objects[id].lines[i].style.position = "absolute";
      this.objects[id].lines[i].style.left = this.getLeftLine(id);
      this.objects[id].lines[i].style.top = this.getTopValue(id,i);
      this.objects[id].lines[i].style.width = this.getWidthLine(id);
      this.objects[id].lines[i].style.height = this.getHeigthLine(id);
      this.objects[id].lines[i].style.backgroundColor = "000000";
      this.objects[id].lines[i].style.fontSize = "0px";
      this.setBorderStyle(id,this.BORDERSTYLE);
      this.objects[id].appendChild(this.objects[id].lines[i]);
    }
  },
  addTexts : function(id)
  {
    for(i=25;i<=100;i=i+25)
    {
      this.objects[id].texts[i] = document.createElement("div");
      this.objects[id].texts[i].appendChild(document.createTextNode(i));
      this.objects[id].texts[i].style.position = "absolute";
      this.objects[id].texts[i].style.left = this.getLeftText(id);
      this.objects[id].texts[i].style.fontSize = this.getFontSizeText(id);
      this.objects[id].texts[i].style.top = this.objects[id].lines[i].style.top;
    }
    this.objects[id].appendChild(this.objects[id].texts[25]);
    this.objects[id].appendChild(this.objects[id].texts[50]);
    this.objects[id].appendChild(this.objects[id].texts[75]);
    this.objects[id].appendChild(this.objects[id].texts[100]);
  },
  create : function(id,x,y,w,h,pos)
  {
    this.objects[id] = document.createElement("div");
    this.objects[id].nameComponent = 'gauge';
	this.ids[this.ids.length] = id;
    this.objects[id].lines = new Array;
    this.objects[id].texts = new Array;
    this.objects[id].w = w;
    this.objects[id].h = h;
    this.objects[id].x = x;
    this.objects[id].y = y;
    this.objects[id].textColorInset = this.TEXTCOLORINSET;
    this.objects[id].textColorOutset = this.TEXTCOLOROUTSET;
    this.objects[id].divLine = document.createElement("div");
    this.objects[id].divIndicator = document.createElement("div");
    this.objects[id].divValue = document.createElement("div");
    this.objects[id].appendChild(this.objects[id].divIndicator);
    this.objects[id].appendChild(this.objects[id].divValue);
    this.objects[id].style.position = "absolute";
    this.objects[id].divLine.style.position = "absolute";
    this.objects[id].divIndicator.style.position = "absolute";
    this.objects[id].divValue.style.position = "absolute";
    this.objects[id].divValue.style.fontSize = "0px";
    this.addLines(id);
    this.addTexts(id);
    this.setBgColor(id,this.objects[id],this.BGCOLOR);
    this.setBgColor(id,this.objects[id].divIndicator,this.INDICATORBGCOLOR);
    this.setBgColor(id,this.objects[id].divValue,this.VALUEBGCOLOR);
    this.setBorderStyle(id,this.BORDERSTYLE);
    this.setPositionObj(id,this.objects[id],x,y);
    this.setPositionObj(id,this.objects[id].divIndicator,Math.round(this.objects[id].w*this.LEFT),Math.round(this.objects[id].h*this.TOP));
    this.setDimension(id,w,h);
    this.setValue(id,pos);
    this.addToBody(id);
	this.addPropertyMethod(id);
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
  getLeftLine : function(id)
  {
    return (Math.round(this.objects[id].w*this.LEFT));
  },
  getTopValue : function(id,pos)
  {
    r = (this.objects[id].h*this.HINDICATOR)*(1-(pos/this.PERCENT));
    return r;
  },
  getWidthLine : function(id)
  {
    return (Math.round(this.objects[id].w*this.WIDTHBOLDTLINE)+"px");
  },
  getHeigthLine : function(id)
  {
    r = Math.round(this.objects[id].h*0.001)+"px";
    if(r = "0px")
    return ("1px");
    else return (r);
  },
  getFontSizeText : function(id)
  {
    r = Math.round(this.objects[id].w*this.SIZETEXT);
    if (r < 9)
    return 8;
    else return (r);
  },
  getLeftText : function(id)
  {
    return this.getLeftLine(id)+(this.objects[id].w/this.LETFTEXT);
  },
  getHeigtValue : function(id,pos)
  {
    return (Math.round((this.objects[id].h*this.HINDICATOR)*(pos/this.PERCENT)));
  },
  hide : function(id)
  {
    this.objects[id].style.display = "none";
  },
  resize : function(id, w, h)
  {
    this.setDimension(id,w,h);
    this.setPositionObj(id,this.objects[id].divIndicator,Math.round(this.objects[id].w*this.LEFT),Math.round(this.objects[id].h*this.TOP));
    this.setValue(id,this.objects[id].value);
    this.resizeLines(id);
    this.resizeText(id);
  },
  resizeLines : function(id)
  {
    for(i=25;i<=100;i=i+25)
    {
      this.objects[id].lines[i].style.left =  this.getLeftLine(id);
      this.objects[id].lines[i].style.top = this.getTopValue(id,i);
      this.objects[id].lines[i].style.width = this.getWidthLine(id);
      this.objects[id].lines[i].style.height = this.getHeigthLine(id);
    }
  },
  resizeText : function(id)
  {
    for(i=25;i<=100;i=i+25)
    {
      this.objects[id].texts[i].style.left = this.getLeftText(id);
      this.objects[id].texts[i].style.fontSize = this.getFontSizeText(id);
      this.objects[id].texts[i].style.top = this.objects[id].lines[i].style.top;
    }
  },
  show : function(id)
  {
    this.objects[id].style.display = "block";
  },
  setValue : function (id,pos)
  {
    if((pos>=0) && (pos<=100))
    {
      this.objects[id].value = pos;
      this.objects[id].divValue.style.height = this.getHeigtValue(id,pos);
      this.objects[id].divValue.style.top = this.getTopValue(id,pos);
      this.objects[id].divValue.style.left = this.getLeftLine(id);
      for(i=25;i<=pos;i=i+25)
      {
        this.objects[id].texts[i].style.color = this.objects[id].textColorInset;
      }
      for(i=100;i>pos;i=i-25)
      {
        this.objects[id].texts[i].style.color = this.objects[id].textColorOutset;
      }
    }
  },
  setPositionObj : function(id, obj,x, y)
  {
    obj.style.left = x;
    obj.style.top = y;
  },
  setPosition : function(id, x, y)
  {
    this.objects[id].style.left = x;
    this.objects[id].style.top = y;
  },
  setObjAttrib : function(id, objAttr, env)
  {
    this.setBackGroundColor(id,objAttr.Color.bgGauge[env]);
    this.setBorderStyle(id,objAttr.Border.styleGauge[env]);
    this.setColorIndicator(id,objAttr.Color.indicatorGauge[env]);
    this.setColorBar(id,objAttr.Color.valueGauge[env]);
    this.setTextColorInset(id,objAttr.Color.textGaugeInSide[env]);
    this.setTextColorOutset(id,objAttr.Color.textGaugeOutSide[env]);
    this.setValue(id,this.objects[id].value);
  },
  setObjAttribToAll : function(objAttrib,env)
  {
    for(i=0;i<this.ids.length;i++)
    {
      this.setObjAttrib(this.ids[i],attrib,env);
    }	
},  
  setBgColor : function(id, obj, bgColor)
  {
    obj.style.backgroundColor = bgColor;
  },
  setBackGroundColor : function(id, bgColor)
  {
    this.objects[id].style.backgroundColor = bgColor;
  },
  setBorderStyle : function(id, borderStyle)
  {
    this.objects[id].style.borderWidth = Math.round((this.objects[id].w*this.TOP))+"px";
    this.objects[id].style.borderStyle = borderStyle;
    this.objects[id].divIndicator.style.borderWidth ="1px";
    this.objects[id].divIndicator.style.borderStyle = borderStyle;
    this.objects[id].divValue.style.borderWidth ="1px";
    this.objects[id].divValue.style.borderStyle = borderStyle;
  },
  setColorBar : function(id, barColor)
  {
    this.setBgColor(id,this.objects[id].divValue,barColor);
  },
  setColorIndicator : function(id, indicatorColor)
  {
    this.setBgColor(id,this.objects[id].divIndicator,indicatorColor);
  },
  setTextColorInset : function(id, color)
  {
    this.objects[id].textColorInset = color;
  },
  setTextColorOutset : function(id, color)
  {
    this.objects[id].textColorOutset = color;
  },
  setDimension : function(id, w, h)
  {
    this.objects[id].w = w;
    this.objects[id].h = h;
    this.objects[id].style.width = w;
    this.objects[id].style.height = h;
    this.objects[id].divIndicator.style.width = Math.round(w*this.WINDICATOR);
    this.objects[id].divValue.style.width = Math.round(w*this.WINDICATOR);
    this.objects[id].divIndicator.style.height = Math.round(h*this.HINDICATOR);
    this.setPositionObj(id,this.objects[id].divIndicator,Math.round(this.objects[id].w*this.LEFT),Math.round(this.objects[id].h*this.TOP));
  },
   setBorderSize : function(id, obj, borderSize)
  {
    obj.style.borderWidth = borderSize + "px";
  }
}