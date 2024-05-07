var events=
{
  objects              : new Array,
  onClickContainer     : new Array,
  onChangeContainer    : new Array,
  onBlurContainer      : new Array,
  onDblClickContainer  : new Array,
  onFocusContainer     : new Array,
  onkeyDownContainer   : new Array,
  onkeyPressContainer  : new Array,
  onKeyUpContainer     : new Array,
  onMouseDownContainer : new Array,
  onMouseMoveContainer : new Array,
  onMouseOutContainer  : new Array,
  onMouseOverContainer : new Array,
  onMouseUpContainer   : new Array,
  onLoadContainer      : new Array,
  onResetContainer     : new Array,
  onSelectedContainer  : new Array,
  onSubmitContainer    : new Array,
  onUnLoadContainer    : new Array,
  CLICK       	        : 0,
  CHANGE               : 1,
  BLUR	                : 2,
  DBLCLICK             : 3,
  FOCUS                : 4,
  KEYDOWN              : 5,
  KEYPRESS             : 6,
  KEYUP                : 7,
  MOUSEDOWN            : 8,
  MOUSEMOVE            : 9,
  MOUSEOUT             : 10,
  MOUSEOVER            : 11,
  MOUSEUP              : 12,
  LOAD                 : 13,
  RESET                : 14,
  SELECTED             : 15,
  SUBMIT               : 16,
  UNLOAD               : 17,
  functions            : "",
  mouseX	        : 0,
  mouseY               : 0,
  IE		        : false,
  cursorHand	    : 'pointer',
  cursorWait		: 'wait',
  cursorHelp		: 'help',
  cursorCrosshair	: 'crosshair',
  cursorText		: 'text',
  cursorMove		: 'move',
  cursorNWResize	: 'nw-resize',
  cursorSWResize	: 'sw-resize',
  cursorEResize	: 'e-resize',
  cursorNResize	: 'n-resize',
  cursorSResize	: 's-resize',
  cursorNEResize	: 'ne-resize',
  cursorSEResize	: 'se-resize',
  cursorwResize	: 'w-resize',
addPropertyMethod : function(id)
{
  events.objects[id].appendFunctions  =  function(f)
  {
    return events.appendFunctions(f);
  }
  events.objects[id].addEventListenerToObject  =  function(obj, type, listener,useCapture)
  {
    events.addEventListenerToObject(obj, type, listener,useCapture);
  }
  events.objects[id].addFunctionToContainer  =  function(typeEvent,funct)
  {
    events.addFunctionToContainer(id,typeEvent,funct);
  }
  events.objects[id].clearFunctions  =  function()
  {
    events.clearFunctions();
  }
  events.objects[id].execFunctionsContainer  =  function(typeEvent)
  {
    events.execFunctionsContainer(typeEvent);
  }
  events.objects[id].clearFunctionContainer  =  function(typeEvent)
  {
    events.clearFunctionContainer(typeEvent);
  }
  events.objects[id].clearAllFunctionContainer  =  function()
  {
    events.clearAllFunctionContainer();
  }
  events.objects[id].getEventObj  =  function()
  {
    events.getEventObj(id);
  }
  events.objects[id].getFunctions  =  function()
  {
    events.getFunctions();
  }
  events.objects[id].getKeyCode  =  function(e)
  {
    events.getKeyCode(e);
  }
  events.objects[id].getKeyValue  =  function(e)
  {
    events.getKeyValue(e);
  }
  events.objects[id].getMouseXY  =  function(e)
  {
    events.getMouseXY(e);
  }
  events.objects[id].init  =  function()
  {
    events.init();
  }
  events.objects[id].newEventObject  =  function(pos)
  {
    events.newEventObject(id,pos);
  }
  events.objects[id].newEventObjects  =  function(num)
  {
    events.newEventObjects(id,num);
  }
  events.objects[id].popFunctionContainer  =  function(typeEvent)
  {
    return events.popFunctionContainer(typeEvent);
  }
  events.objects[id].setEventsToObj  =  function(obj,typeEvent,e)
  {
    events.setEventsToObj(obj,typeEvent,e);
  }
  events.objects[id].shiftFunctionContainer  =  function(typeEvent)
  {
    return events.shiftFunctionContainer(typeEvent);
  }
  events.objects[id].setFunction  =  function( typeEvent, funct, index)
  {
    events.setFunction(id, typeEvent, funct, index);
  }
  events.objects[id].setCursorToObject  =  function(obj,typeCursor)
  {
    events.setCursorToObject(obj,typeCursor);
  }
},
  appendFunctions : function(f)
  {
    this.functions += f+";";
  },
  addEventListenerToObject : function(obj, type, listener,useCapture)
  {
    obj.addEventListener( type, listener, useCapture );
  },
  addFunctionToContainer : function(id,typeEvent,funct)
  {
    switch (typeEvent)
    {
      case 0  :
      {
        this.onClickContainer[this.onClickContainer.length]= new Function(funct);
        break;
      }
      case 1  :
      {
        this.onChangeContainer[this.onChangeContainer.length]= new Function(funct);
        break;
      }
      case 2  :
      {
        this.onBlurContainer[this.onBlurContainer.length]= new Function(funct);
        break;
      }
      case 3  :
      {
        this.onDblClickContainer[this.onDblClickContainer.length]= new Function(funct);
        break;
      }
      case 4  :
      {
        this.onFocusContainer[this.onFocusContainer.length]	= new Function(funct);
        break;
      }
      case 5  :
      {
        this.onkeyDownContainer[this.onkeyDownContainer.length]= new Function(funct);
        break;
      }
      case 6  :
      {
        this.onkeyPressContainer[this.onkeyPressContainer.length]= new Function(funct);
        break;
      }
      case 7  :
      {
        this.onKeyUpContainer[this.onKeyUpContainer.length]= new Function(funct);
        break;
      }
      case 8  :
      {
        this.onMouseDownContainer[this.onMouseDownContainer.length]= new Function(funct);
        break;
      }
      case 9  :
      {
        this.onMouseMoveContainer[this.onMouseMoveContainer.length]= new Function(funct);
        break;
      }
      case 10 :
      {
        this.onMouseOutContainer[this.onMouseOutContainer.length]	= new Function(funct);
        break;
      }
      case 11 :
      {
        this.onMouseOverContainer[this.onMouseOverContainer.length]= new Function(funct);
        break;
      }
      case 12 :
      {
        this.onMouseUpContainer[this.onMouseUpContainer.length]	= new Function(funct);
        break;
      }
      case 13 :
      {
        this.onLoadContainer[this.onLoadContainer.length]= new Function(funct);
        break;
      }
      case 14 :
      {
        this.onResetContainer[this.onResetContainer.length]= new Function(funct);
        break;
      }
      case 15 :
      {
        this.onSelectedContainer[this.onSelectedContainer.length]= new Function(funct);
        break;
      }
      case 16 :
      {
        this.onSubmitContainer[this.onSubmitContainer.length]= new Function(funct);
        break;
      }
      case 17 :
      {
        this.onUnLoadContainer[this.onUnLoadContainer.length]= new Function(funct);
        break;
      }
    }
  },
  create      : function(id,cant)
  {
    this.objects[id]=this.get;
    this.objects[id].nameComponent = 'events';
    this.newEventObjects(id,cant);
	this.addPropertyMethod(id);
	return this.objects[id];
  },
  clearFunctions : function()
  {
    functions="";
  },
  execFunctionsContainer : function(typeEvent)
  {
    switch (typeEvent)
    {
      case 0  :
      {
        for(i=0;i<this.onClickContainer.length;i++) this.onClickContainer[i]();
        break;
      }
      case 1  :
      {
        for(i=0;i<this.onChangeContainer.length;i++) this.onChangeContainer[i]();
        break;
      }
      case 2  :
      {
        for(i=0;i<this.onBlurContainer.length;i++) this.onBlurContainer[i]();
        break;
      }
      case 3  :
      {
        for(i=0;i<this.onDblClickContainer.length;i++) this.onDblClickContainer[i]();
        break;
      }
      case 4  :
      {
        for(i=0;i<this.onFocusContainer.length;i++) this.onFocusContainer[i]();
        break;
      }
      case 5  :
      {
        for(i=0;i<this.onkeyDownContainer.length;i++) this.onkeyDownContainer[i]();
        break;
      }
      case 6  :
      {
        for(i=0;i<this.onkeyPressContainer.length;i++) this.onkeyPressContainer[i]();
        break;
      }
      case 7  :
      {
        for(i=0;i<this.onKeyUpContainer.length;i++) this.onKeyUpContainer[i]();
        break;
      }
      case 8  :
      {
        for(i=0;i<this.onMouseDownContainer.length;i++) this.onMouseDownContainer[i]();
        break;
      }
      case 9  :
      {
        for(i=0;i<this.onMouseMoveContainer.length;i++) this.onMouseMoveContainer[i]();
        break;
      }
      case 10 :
      {
        for(i=0;i<this.onMouseOutContainer.length;i++) this.onMouseOutContainer[i]();
        break;
      }
      case 11 :
      {
        for(i=0;i<this.onMouseOverContainer.length;i++) this.onMouseOverContainer[i]();
        break;
      }
      case 12 :
      {
        for(i=0;i<this.onMouseUpContainer.length;i++) this.onMouseUpContainer[i]();
        break;
      }
      case 13 :
      {
        for(i=0;i<this.onLoadContainer.length;i++) this.onLoadContainer[i]();
        break;
      }
      case 14 :
      {
        for(i=0;i<this.onMouseResetContainer.length;i++) this.onResetContainer[i]();
        break;
      }
      case 15 :
      {
        for(i=0;i<this.onMouseSelectedContainer.length;i++) this.onSelectedContainer[i]();
        break;
      }
      case 16 :
      {
        for(i=0;i<this.onMouseSubmitContainer.length;i++) this.onSubmitContainer[i]();
        break;
      }
      case 17 :
      {
        for(i=0;i<this.onMouseUnLoadContainer.length;i++) this.onUnLoadContainer[i]();
        break;
      }
    }
  },
  clearFunctionContainer : function(typeEvent)
  {
    switch (typeEvent)
    {
      case 0  :
      {
        this.onClickContainer.splice(0,this.onClickContainer.length);
        break;
      }
      case 1  :
      {
        this.onChangeContainer.splice(0,this.onChangeContainer.length);
        break;
      }
      case 2  :
      {
        this.onBlurContainer.splice(0,this.onBlurContainer.length);
        break;
      }
      case 3  :
      {
        this.onDblClickContainer.splice(0,this.onDblClickContainer.length);
        break;
      }
      case 4  :
      {
        this.onFocusContainer.splice(0,this.onFocusContainer.length);
        break;
      }
      case 5  :
      {
        this.onkeyDownContainer.splice(0,this.onkeyDownContainer.length);
        break;
      }
      case 6  :
      {
        this.onkeyPressContainer.splice(0,this.onkeyPressContainer.length);
        break;
      }
      case 7  :
      {
        this.onKeyUpContainer.splice(0,this.onKeyUpContainer.length);
        break;
      }
      case 8  :
      {
        this.onMouseDownContainer.splice(0,this.onMouseDownContainer.length);
        break;
      }
      case 9  :
      {
        this.onMouseMoveContainer.splice(0,this.onMouseMoveContainer.length);
        break;
      }
      case 10 :
      {
        this.onMouseOutContainer.splice(0,this.onMouseOutContainer.length);
        break;
      }
      case 11 :
      {
        this.onMouseOverContainer.splice(0,this.onMouseOverContainer.length);
        break;
      }
      case 12 :
      {
        this.onMouseUpContainer.splice(0,this.onMouseUpContainer.length);
        break;
      }
      case 13 :
      {
        this.onLoadContainer.splice(0,this.onLoadContainer.length);
        break;
      }
      case 14 :
      {
        this.onResetContainer.splice(0,this.onResetContainer.length);
        break;
      }
      case 15 :
      {
        this.onSelectedContainer.splice(0,this.onSelectedContainer.length);
        break;
      }
      case 16 :
      {
        this.onSubmitContainer.splice(0,this.onSubmitContainer.length);
        break;
      }
      case 17 :
      {
        this.onUnLoadContainer.splice(0,this.onUnLoadContainer.length);
        break;
      }
    }
  },
  clearAllFunctionContainer : function()
  {
    this.onClickContainer.splice(0,this.onClickContainer.length);
    this.onChangeContainer.splice(0,this.onChangeContainer.length);
    this.onBlurContainer.splice(0,this.onBlurContainer.length);
    this.onDblClickContainer.splice(0,this.onDblClickContainer.length);
    this.onFocusContainer.splice(0,this.onFocusContainer.length);
    this.onkeyDownContainer.splice(0,this.onkeyDownContainer.length);
    this.onkeyPressContainer.splice(0,this.onkeyPressContainer.length);
    this.onKeyUpContainer.splice(0,this.onKeyUpContainer.length);
    this.onMouseDownContainer.splice(0,this.onMouseDownContainer.length);
    this.onMouseMoveContainer.splice(0,this.onMouseMoveContainer.length);
    this.onMouseOutContainer.splice(0,this.onMouseOutContainer.length);
    this.onMouseOverContainer.splice(0,this.onMouseOverContainer.length);
    this.onMouseUpContainer.splice(0,this.onMouseUpContainer.length);
    this.onLoadContainer.splice(0,this.onLoadContainer.length);
    this.onResetContainer.splice(0,this.onResetContainer.length);
    this.onSelectedContainer.splice(0,this.onSelectedContainer.length);
    this.onSubmitContainer.splice(0,this.onSubmitContainer.length);
    this.onUnLoadContainer.splice(0,this.onUnLoadContainer.length);
  },
  getEventObj : function(id)
  {
    return this.objects[id];
  },
  getFunctions : function()
  {
    return this.functions;
  },
  get     :
  {
    onClick     : new Array(new Function('')),
    onChange    : new Array(new Function('')),
    onBlur      : new Array(new Function('')),
    onDblClick  : new Array(new Function('')),
    onFocus     : new Array(new Function('')),
    onKeyDown   : new Array(new Function('')),
    onKeyPress  : new Array(new Function('')),
    onKeyUp     : new Array(new Function('')),
    onMouseDown : new Array(new Function('')),
    onMouseMove : new Array(new Function('')),
    onMouseOut  : new Array(new Function('')),
    onMouseOver : new Array(new Function('')),
    onMouseUp   : new Array(new Function('')),
    onLoad      : new Array(new Function('')),
    onReset     : new Array(new Function('')),
    onSelected  : new Array(new Function('')),
    onSubmit    : new Array(new Function('')),
    onUnLoad    : new Array(new Function(''))
  },
  getKeyCode : function(e)
  {
    if(events.IE)
    {
      return event.keyCode;
    }
    else
    {
      return e.which;
    }
  },
  getKeyValue : function(e)
  {
    return String.fromCharCode(this.getKeyCode(e));
  },
  getMouseXY : function(e)
  {
    if (events.IE)
    {
      events.mouseX = event.clientX + document.body.scrollLeft;
      events.mouseY = event.clientY + document.body.scrollTop;
    }
    else
    {
      events.mouseX = e.pageX;
      events.mouseY = e.pageY;
    }
    if (events.mouseX < 0)
    {
      events.mouseX = 0
    }
    if (events.mouseY < 0)
    {
      events.mouseY = 0
    }
    return true;
  },
  init : function()
  {
    events.IE = document.all?true:false;
  },
  newEventObject : function(id,pos)
  {
    this.objects[id].onClick[pos]     = new Function('');
    this.objects[id].onChange[pos]    = new Function('');
    this.objects[id].onBlur[pos]      = new Function('');
    this.objects[id].onDblClick[pos]  = new Function('');
    this.objects[id].onFocus[pos]     = new Function('');
    this.objects[id].onKeyDown[pos]   = new Function('');
    this.objects[id].onKeyPress[pos]  = new Function('');
    this.objects[id].onKeyUp[pos]     = new Function('');
    this.objects[id].onMouseDown[pos] = new Function('');
    this.objects[id].onMouseMove[pos] = new Function('');
    this.objects[id].onMouseOut[pos]  = new Function('');
    this.objects[id].onMouseOver[pos] = new Function('');
    this.objects[id].onMouseUp[pos]   = new Function('');
    this.objects[id].onLoad[pos]      = new Function('');
    this.objects[id].onReset[pos]     = new Function('');
    this.objects[id].onSelected[pos]  = new Function('');
    this.objects[id].onSubmit[pos]    = new Function('');
    this.objects[id].onUnLoad[pos]    = new Function('');
  },
  newEventObjects : function(id,num)
  {
    for(ix=0;ix<num;ix++)
    {
      this.newEventObject(id,ix);
    }
  },
  popFunctionContainer : function(typeEvent)
  {
    switch (typeEvent)
    {
      case 0  :
      {
        return this.onClickContainer.pop();
        break;
      }
      case 1  :
      {
        return this.onChangeContainer.pop();
        break;
      }
      case 2  :
      {
        return this.onBlurContainer.pop();
        break;
      }
      case 3  :
      {
        return this.onDblClickContainer.pop();
        break;
      }
      case 4  :
      {
        return this.onFocusContainer.pop();
        break;
      }
      case 5  :
      {
        return this.onkeyDownContainer.pop();
        break;
      }
      case 6  :
      {
        return this.onkeyPressContainer.pop();
        break;
      }
      case 7  :
      {
        return this.onKeyUpContainer.pop();
        break;
      }
      case 8  :
      {
        return this.onMouseDownContainer.pop();
        break;
      }
      case 9  :
      {
        return this.onMouseMoveContainer.pop();
        break;
      }
      case 10 :
      {
        return this.onMouseOutContainer.pop();
        break;
      }
      case 11 :
      {
        return this.onMouseOverContainer.pop();
        break;
      }
      case 12 :
      {
        return this.onMouseUpContainer.pop();
        break;
      }
      case 13 :
      {
        return this.onLoadContainer.pop();
        break;
      }
      case 14 :
      {
        return this.onResetContainer.pop();
        break;
      }
      case 15 :
      {
        return this.onSelectedContainer.pop();
        break;
      }
      case 16 :
      {
        return this.onSubmitContainer.pop();
        break;
      }
      case 17 :
      {
        return this.onUnLoadContainer.pop();
        break;
      }
    }
  },
  setEventsToObj : function(obj,typeEvent,e)
  {
    switch (typeEvent)
    {
      case 0  :
      {
        if (!events.IE)
        {
          obj.captureEvents(Event.CLICK)
        };
        obj.onclick    = new Function(e);
        break;
      }
      case 1  :
      {
        if (!events.IE)
        {
          obj.captureEvents(Event.CHANGE)
        };
        obj.onchange   = new Function(e);
        break;
      }
      case 2  :
      {
        if (!events.IE)
        {
          obj.captureEvents(Event.BLUR)
        };
        obj.onblur     = new Function(e);
        break;
      }
      case 3  :
      {
        if (!events.IE)
        {
          obj.captureEvents(Event.DBLCLICK)
        };
        obj.ondblclick = new Function(e);
        break;
      }
      case 4  :
      {
        if (!events.IE)
        {
          obj.captureEvents(Event.FOCUS)
        };
        obj.onfocus    = new Function(e);
        break;
      }
      case 5  :
      {
        if (!events.IE)
        {
          obj.captureEvents(Event.KEYDOWN)
        };
        obj.onkeydown  = new Function(e);
        break;
      }
      case 6  :
      {
        if (!events.IE)
        {
          obj.captureEvents(Event.KEYPRESS)
        };
        obj.onkeypress = new Function(e);
        break;
      }
      case 7  :
      {
        if (!events.IE)
        {
          obj.captureEvents(Event.KEYUP)
        };
        obj.onkeyup    = new Function(e);
        break;
      }
      case 8  :
      {
        if (!events.IE)
        {
          obj.captureEvents(Event.MOUSEDOWN)
        };
        obj.onmousedown= new Function(e);
        break;
      }
      case 9  :
      {
        if (!events.IE)
        {
          obj.captureEvents(Event.MOUSEMOVE)
        };
        obj.onmousemove= new Function(e);
        break;
      }
      case 10 :
      {
        if (!events.IE)
        {
          obj.captureEvents(Event.MOUSEOUT)
        };
        obj.onmouseout = new Function(e);
        break;
      }
      case 11 :
      {
        if (!events.IE)
        {
          obj.captureEvents(Event.MOUSEOVER)
        };
        obj.onmouseover= new Function(e);
        break;
      }
      case 12 :
      {
        if (!events.IE)
        {
          obj.captureEvents(Event.MOUSEUP)
        };
        obj.onmouseup  = new Function(e);
        break;
      }
      case 13 :
      {
        if (!events.IE)
        {
          obj.captureEvents(Event.LOAD)
        };
        obj.onload     = new Function(e);
        break;
      }
      case 14 :
      {
        if (!events.IE)
        {
          obj.captureEvents(Event.RESET)
        };
        obj.onreset    = new Function(e);
        break;
      }
      case 15 :
      {
        if (!events.IE)
        {
          obj.captureEvents(Event.SELECTED)
        };
        obj.onselected = new Function(e);
        break;
      }
      case 16 :
      {
        if (!events.IE)
        {
          obj.captureEvents(Event.SUBMIT)
        };
        obj.onsubmit   = new Function(e);
        break;
      }
      case 17 :
      {
        if (!events.IE)
        {
          obj.captureEvents(Event.UNLOAD)
        };
        obj.onunload   = new Function(e);
        break;
      }
    }
  },
  shiftFunctionContainer : function(typeEvent)
  {
    switch (typeEvent)
    {
      case 0  :
      {
        return this.onClickContainer.shift();
        break;
      }
      case 1  :
      {
        return this.onChangeContainer.shift();
        break;
      }
      case 2  :
      {
        return this.onBlurContainer.shift();
        break;
      }
      case 3  :
      {
        return this.onDblClickContainer.shift();
        break;
      }
      case 4  :
      {
        return this.onFocusContainer.shift();
        break;
      }
      case 5  :
      {
        return this.onkeyDownContainer.shift();
        break;
      }
      case 6  :
      {
        return this.onkeyPressContainer.shift();
        break;
      }
      case 7  :
      {
        return this.onKeyUpContainer.shift();
        break;
      }
      case 8  :
      {
        return this.onMouseDownContainer.shift();
        break;
      }
      case 9  :
      {
        return this.onMouseMoveContainer.shift();
        break;
      }
      case 10 :
      {
        return this.onMouseOutContainer.shift();
        break;
      }
      case 11 :
      {
        return this.onMouseOverContainer.shift();
        break;
      }
      case 12 :
      {
        return this.onMouseUpContainer.shift();
        break;
      }
      case 13 :
      {
        return this.onLoadContainer.shift();
        break;
      }
      case 14 :
      {
        return this.onResetContainer.shift();
        break;
      }
      case 15 :
      {
        return this.onSelectedContainer.shift();
        break;
      }
      case 16 :
      {
        return this.onSubmitContainer.shift();
        break;
      }
      case 17 :
      {
        return this.onUnLoadContainer.shift();
        break;
      }
    }
  },
  setFunction : function(id, typeEvent, funct, index)
  {
    switch (typeEvent)
    {
      case 0  :
      {
        this.objects[id].onClick[index]= new Function(funct);
        break;
      }
      case 1  :
      {
        this.objects[id].onChange[index]= new Function(funct);
        break;
      }
      case 2  :
      {
        this.objects[id].onBlur[index]	= new Function(funct);
        break;
      }
      case 3  :
      {
        this.objects[id].onDblClick[index]= new Function(funct);
        break;
      }
      case 4  :
      {
        this.objects[id].onFocus[index]= new Function(funct);
        break;
      }
      case 5  :
      {
        this.objects[id].onKeyDown[index]= new Function(funct);
        break;
      }
      case 6  :
      {
        this.objects[id].onKeyPress[index]= new Function(funct);
        break;
      }
      case 7  :
      {
        this.objects[id].onKeyUp[index]= new Function(funct);
        break;
      }
      case 8  :
      {
        this.objects[id].onMouseDown[index]= new Function(funct);
        break;
      }
      case 9  :
      {
        this.objects[id].onMouseMove[index]= new Function(funct);
        break;
      }
      case 10 :
      {
        this.objects[id].onMouseOut[index]= new Function(funct);break;
      }
      case 11 :
      {
        this.objects[id].onMouseOver[index]	= new Function(funct);
        break;
      }
      case 12 :
      {
        this.objects[id].onMouseUp[index]= new Function(funct);
        break;
      }
      case 13 :
      {
        this.objects[id].onLoad[index]= new Function(funct);
        break;
      }
      case 14 :
      {
        this.objects[id].onReset[index]= new Function(funct);
        break;
      }
      case 15 :
      {
        this.objects[id].onSelected[index]= new Function(funct);
        break;
      }
      case 16 :
      {
        this.objects[id].onSubmit[index]= new Function(funct);
        break;
      }
      case 17 :
      {
        this.objects[id].onUnLoad[index]= new Function(funct);
        break;
      }
    }
  },
  setCursorToObject : function(obj,typeCursor)
  {
    obj.style.cursor=typeCursor;
  }
}


