var layout =
{
  objects : new Array,
  tableLayout : new Object(),
  tableBody : new Object(),
  contentLayout : new Object(),
  controlSize : new Array,
  PANEL_STYLE_GROOVE : "groove",
  PANEL_STYLE_RIDGE  : "ridge",
  PANEL_STYLE_DASHED : "dshed",
  PANEL_STYLE_DOUBLE : "double",
  PANEL_STYLE_OUTSET : "outset",
  PANEL_STYLE_INSET  : "inset",
  PANEL_TOP 	 : 0,
  PANEL_LEFT 	 : 1,
  PANEL_RIGHT 	 : 2,
  PANEL_BOTTOM	 : 3,
  TOTAL_HEIGHT	: 0,
  TOTAL_WIDTH	: 0,
  LEFT_WIDTH    : 200,
  BOTTOM_HEIGHT : 50,
  x : 0,
  y : 0,
  flagMoveX : false,
  flagMoveY : false,
  priorY    : 0,
  loadBGImg : true,
  bgImgPath :"images/bg/",
  addToBody : function()
  {
    document.body.appendChild(this.contentLayout);
  },
  addHTMLToPanel : function(panelType,page,row,col)
  {
    if(this.objects[panelType].active)
    {
      this.createPosition(panelType,row,col);
      this.objects[panelType].gridPanel.rows[row].cells[col].innerHTML +=page;
    }
  },
  addObjToPanel : function(panelType,obj,row,col)
  {
    if(this.objects[panelType].active)
    {
      this.createPosition(panelType,row,col);
      this.objects[panelType].gridPanel.rows[row].cells[col].appendChild(obj);
    }
  },
  createPosition : function(panelType,row,col)
  {
    if(this.objects[panelType].active)
    {
      if(this.objects[panelType].gridPanel.rows.length <= row)
      {
        for(i=this.objects[panelType].gridPanel.rows.length; i <= row; i++)
        {	
          this.objects[panelType].gridPanel.insertRow(i);
		}
      }
      if(this.objects[panelType].gridPanel.rows[row].cells.length <= col)
      {
        for(i=this.objects[panelType].gridPanel.rows[row].cells.length; i <= col; i++)
        {
		  this.objects[panelType].gridPanel.rows[row].insertCell(i);
		}
      }
    }
  },
  create : function()
  {
    this.contentLayout = document.createElement("div");
    this.nameComponent = 'layout';
	this.contentLayout.bgControlSize = "#7e7e7e";
	this.contentLayout.bgControlSizeCenter = "black";
    this.contentLayout.style.borderWidth ="1px";
    this.contentLayout.style.borderStyle = "inset";
    this.contentLayout.style.cursor = "w-resize";
    this.contentLayout.x = 0;
    this.contentLayout.y = 0;
    for(i=0; i<2; i++)
    {
      this.controlSize[i] = document.createElement("div");
      this.controlSize[i].cuadro = document.createElement("div");
      this.controlSize[i].cuadro.style.visibility = "visible";
      this.controlSize[i].cuadro.style.fontSize = "0px";
      if(i==0)
      {
        this.controlSize[i].cuadro.style.height = "7px";
        this.controlSize[i].cuadro.style.width = "5px";
      }
      else
      {
        this.controlSize[i].cuadro.style.height = "5px";
        this.controlSize[i].cuadro.style.width = "7px";
      }
      this.controlSize[i].cuadro.style.backgroundColor = "black";
      this.controlSize[i].cuadro.style.borderWidth = "0px";
      this.controlSize[i].cuadro.style.position = "absolute";
      this.controlSize[i].cuadro.changeColor = function(color)
      {
        this.controlSize[i].cuadro.style.backgroundColor = color;
      }
    }
    this.controlSize[0].cuadro.style.top	  	= "18px";
    this.controlSize[1].cuadro.style.left	  	= "18px";
    this.tableLayout = document.createElement("table"),
    this.tableLayout.setAttribute("border","0");
    this.tableLayout.setAttribute("cellsSpacing","0");
    this.tableLayout.setAttribute("cellPadding","0");
    for(i=0; i<3; i++)
    {
      this.tableLayout.insertRow(i);
      this.tableLayout.rows[i].insertCell(0);
    }
    this.contentLayout.appendChild(this.tableLayout);
    this.tableBody = document.createElement("table");
    this.tableBody.setAttribute("border","0");
    this.tableBody.setAttribute("cellsSpacing","0");
    this.tableBody.setAttribute("cellPadding","0");
    this.tableBody.insertRow(0);
    this.tableBody.rows[0].insertCell(0);
    this.tableBody.rows[0].insertCell(1);
    this.tableLayout.rows[1].cells[0].appendChild(this.tableBody);
    this.objects = [new Object(),new Object(),new Object(),new Object()];
    for(i=0; i<4; i++)
    this.objects[i].active = false;
    for(i = 0; i < this.create.arguments.length; i++)
    {
      if((this.create.arguments[i] < 4) && (this.create.arguments[i] >=0))
      {
        this.objects[this.create.arguments[i]].active = true;
        this.objects[this.create.arguments[i]].panel = document.createElement("div");
        this.objects[this.create.arguments[i]].widthPanel=0;
        this.objects[this.create.arguments[i]].heightPanel=0;
        this.objects[this.create.arguments[i]].backgroundColorPanel="white";
        this.objects[this.create.arguments[i]].borderStylePanel = "outset";
        this.objects[this.create.arguments[i]].panel.style.cursor = "default";
        this.objects[this.create.arguments[i]].panel.style.visibility = "visible";
        this.objects[this.create.arguments[i]].panel.style.overflow = "hidden";
        this.objects[this.create.arguments[i]].borderWidth = 1;
        this.objects[this.create.arguments[i]].gridPanel = document.createElement("table");
        this.objects[this.create.arguments[i]].gridPanel.setAttribute("border","0");
        this.objects[this.create.arguments[i]].gridPanel.setAttribute("cellsSpacing","0");
        this.objects[this.create.arguments[i]].gridPanel.setAttribute("cellPadding","0");
        this.objects[this.create.arguments[i]].panel.appendChild(this.objects[this.create.arguments[i]].gridPanel);
      }
      var maxWidth = 800;
      var leftWidth = 100;
      switch (this.create.arguments[i])
      {
        case this.PANEL_TOP :
        {
          this.tableLayout.rows[0].cells[0].appendChild(this.objects[this.PANEL_TOP].panel);
          this.show(this.PANEL_TOP );
          break;
        }
        case this.PANEL_LEFT :
        {
          this.tableBody.rows[0].cells[0].appendChild(this.objects[this.PANEL_LEFT].panel);
          this.show(this.PANEL_LEFT);
          this.controlSize[0].style.width 			  	  = "5px";
          this.controlSize[0].style.height 		      	  = "40px";
          this.controlSize[0].style.visibility			  = "visible";
          this.controlSize[0].style.borderWidth 	  	  = this.objects[this.PANEL_LEFT].borderWidth+"px";
          this.controlSize[0].style.fontSize			  = "0px";
          this.controlSize[0].style.position			  = "absolute";
          this.controlSize[0].style.align          		  = "center";
          this.controlSize[0].appendChild(this.controlSize[0].cuadro);
          this.objects[this.PANEL_LEFT].panel.appendChild(this.controlSize[0]);
          break;
        }
        case this.PANEL_RIGHT :
        {
          this.tableBody.rows[0].cells[1].appendChild(this.objects[this.PANEL_RIGHT].panel);
          this.show(this.PANEL_RIGHT);
          break;
        }
        case this.PANEL_BOTTOM :
        {
          this.tableLayout.rows[2].cells[0].appendChild(this.objects[this.PANEL_BOTTOM].panel);
          this.show(this.PANEL_BOTTOM);
          this.controlSize[1].style.width 			  	  = "40px";
          this.controlSize[1].style.height 		      	  = "5px";
          this.controlSize[1].style.visibility			  = "visible";
          this.controlSize[1].style.borderWidth 	  	  = this.objects[this.PANEL_BOTTOM].borderWidth+"px";
          this.controlSize[1].style.fontSize			  = "0px";
          this.controlSize[1].style.position			  = "absolute";
          this.controlSize[0].style.align          		  = "center";
          this.controlSize[1].appendChild(this.controlSize[1].cuadro);
          this.objects[this.PANEL_LEFT].panel.appendChild(this.controlSize[1]);
          break;
        }
      }
    }
    this.setSizePanels(900, this.LEFT_WIDTH, 40, this.BOTTOM_HEIGHT, 440);
    this.eventPanel();
    if(attrib)
      this.setObjAttrib(attrib,attrib.getActualEnv());
	return this;
  },
  eventPanel : function()
  {
    layout.contentLayout.onmousemove = layout.getMouseXY;
    layout.contentLayout.style.cursor="default";
    layout.controlSize[0].onmouseover = function()
    {
      layout.controlSize[0].style.cursor = "w-resize";
    }
    layout.controlSize[0].cuadro.onmouseover = function()
    {
      layout.controlSize[0].cuadro.style.cursor = "crosshair";
    }
    layout.controlSize[0].cuadro.onmousedown = function()
    {
      layout.resizeBodyPanel(0);
    }
    layout.controlSize[0].onmouseup = function()
    {
      layout.controlSize[0].style.cursor == "default";
    }
    layout.controlSize[0].onmousedown = function()
    {
      if(layout.controlSize[0].style.cursor == "w-resize")
      layout.flagMoveX = true;
    }
    layout.controlSize[1].onmouseover = function()
    {
      layout.controlSize[1].style.cursor = "n-resize";
    }
    layout.controlSize[1].cuadro.onmouseover = function()
    {
      layout.controlSize[1].cuadro.style.cursor = "crosshair";
    }
    layout.controlSize[1].cuadro.onmousedown = function()
    {
      var ant = layout.objects[layout.PANEL_BOTTOM].heightPanel;
      layout.objects[layout.PANEL_BOTTOM].heightPanel=0;
      layout.refreshPropertyPanel(layout.PANEL_BOTTOM);
      if(layout.objects[layout.PANEL_RIGHT].active)
      {
        layout.objects[layout.PANEL_RIGHT].heightPanel += ant;
        layout.refreshPropertyPanel(layout.PANEL_RIGHT);
      }
      if(layout.objects[layout.PANEL_LEFT].active)
      {
        layout.objects[layout.PANEL_LEFT].heightPanel += ant;
        layout.refreshPropertyPanel(layout.PANEL_LEFT);
      }
    }
    layout.controlSize[1].onmouseup = function()
    {
      layout.controlSize[1].style.cursor == "default";
    }
    layout.controlSize[1].onmousedown = function()
    {
      layout.priorY = layout.y;
      if(layout.controlSize[1].style.cursor == "n-resize")
      layout.flagMoveY = true;
    }
    layout.contentLayout.onmouseup = function()
    {
      layout.flagMoveX = false;
      layout.flagMoveY = false;
    }
  },
  getLayoutObj : function()
  {
    return this.tableLayout;
  },
  getMouseXY : function(e)
  {
    var IE = document.all?true:false;
    if (IE)
    {
      layout.x = event.clientX ;
      layout.y = event.clientY ;
    }
    else
    {
      layout.x = e.screenX;
      layout.y = e.screenY;
    }
    if(layout.flagMoveX)
    {
      layout.x-=layout.contentLayout.x+3;
      layout.resizeBodyPanel(layout.x);
    }
    if(layout.flagMoveY)
    {
      layout.resizeBottomPanel(layout.y);
    }
  },
  hide : function(panelType)
  {
    if(this.objects[panelType].active)
    this.objects[panelType].panel.style.visibility = "hidden";
  },
  resizeBottomPanel : function(height)
  {
    if(this.objects[this.PANEL_BOTTOM].active)
    {
      var oldHeight = this.objects[this.PANEL_BOTTOM].heightPanel;
      var diff = height-layout.priorY ;
      var flag = true;
      if((this.objects[this.PANEL_BOTTOM].heightPanel - diff) > 0)
      {
        if(this.objects[this.PANEL_RIGHT].active)
        {
          if(this.objects[this.PANEL_RIGHT].heightPanel + diff > 5)
          {
            this.objects[this.PANEL_RIGHT].heightPanel += diff;
            this.refreshPropertyPanel(this.PANEL_RIGHT);
          }
          else
          flag = false;
        }
        if(this.objects[this.PANEL_LEFT].active)
        {
          if(this.objects[this.PANEL_LEFT].heightPanel + diff > 5)
          {
            this.objects[this.PANEL_LEFT].heightPanel += diff;
            this.refreshPropertyPanel(this.PANEL_LEFT);
          }
          else
          flag = false;
        }
        if(flag)
        this.objects[this.PANEL_BOTTOM].heightPanel -= diff;
        this.refreshPropertyPanel(this.PANEL_BOTTOM);
        this.priorY = height;
      }
    }
  },
  resizeBodyPanel : function(width)
  {
    if(this.objects[this.PANEL_LEFT].active)
    {
      var oldWidth = this.objects[this.PANEL_LEFT].widthPanel;
      if(width > layout.contentLayout.x || width==0)
      {
        if(width < this.TOTAL_WIDTH - 5)
        {
          this.objects[this.PANEL_LEFT].widthPanel  = width;
          if(this.objects[this.PANEL_RIGHT].active)
          {
            this.objects[this.PANEL_RIGHT].widthPanel+=oldWidth - width;
            this.refreshPropertyPanel(this.PANEL_RIGHT);
          }
        }
        this.refreshPropertyPanel(this.PANEL_LEFT);
      }
    }
  },
  refreshPropertyPanel : function(panelType)
  {
    if(this.objects[panelType].active)
    {
      this.objects[panelType].panel.style.backgroundColor = this.objects[panelType].backgroundColorPanel;
      this.objects[panelType].panel.style.width 		  = this.objects[panelType].widthPanel+"px";
      this.objects[panelType].panel.style.height 		  = this.objects[panelType].heightPanel+"px";
      this.objects[panelType].panel.style.borderStyle 	  = this.objects[panelType].borderStylePanel;
      this.objects[panelType].panel.style.borderWidth	  = this.objects[panelType].borderWidth+"px";
      this.contentLayout.style.backgroundColor 			  = this.objects[panelType].backgroundColorPanel;
      if(this.objects[this.PANEL_LEFT].active)
      {
        this.controlSize[0].style.left 		  		= 3+this.objects[this.PANEL_LEFT].widthPanel+"px";
        this.controlSize[0].style.top 			  	= 20+parseInt(""+this.objects[this.PANEL_LEFT].heightPanel/2)+"px";
        this.controlSize[0].style.borderStyle 	  	= this.objects[this.PANEL_LEFT].borderStylePanel;
        this.controlSize[0].style.backgroundColor   = this.contentLayout.bgControlSize;
      }
      if(this.objects[this.PANEL_BOTTOM].active)
      {
        this.controlSize[1].style.left 		  		= this.contentLayout.x-40+parseInt(""+this.objects[this.PANEL_BOTTOM].widthPanel/2)+"px";
        this.controlSize[1].style.top 			  	= 10+this.TOTAL_HEIGHT-this.objects[this.PANEL_BOTTOM].heightPanel+"px";
        this.controlSize[1].style.borderStyle 	  	= this.objects[this.PANEL_BOTTOM].borderStylePanel;
        this.controlSize[1].style.backgroundColor   = this.contentLayout.bgControlSize;
      }
    }
  },
  setNoResizePanel : function(controlSize)
  {
    this.controlSize[controlSize].style.visibility = "hidden";
    this.controlSize[controlSize].cuadro.style.visibility = "hidden";
  },
  setResizePanel : function(controlSize)
  {
    this.controlSize[controlSize].style.visibility = "visible";
    this.controlSize[controlSize].cuadro.style.visibility = "visible";
  },
  setBgColorControlSize : function(bgColor,colorPoint)
  {
  	this.controlSize[0].cuadro.style.backgroundColor = colorPoint;
	this.controlSize[1].cuadro.style.backgroundColor = colorPoint;
	this.contentLayout.bgControlSize = bgColor;
	this.controlSize[0].style.backgroundColor = bgColor;
	this.controlSize[1].style.backgroundColor = bgColor;
  },
  setPanelAutoScroll : function(panelType)
  {
    this.objects[panelType].panel.style.overflow = "auto";
  },
  setPanelHidden : function(panelType)
  {
    this.objects[panelType].panel.style.overflow = "hidden";
  },
  setBorderStylePanel : function(panelType,borderStyle)
  {
    if(this.objects[panelType].active)
    {
      this.objects[panelType].borderStylePanel = borderStyle;
      this.refreshPropertyPanel(panelType);
    }
  },
  setBackgroundColorPanel : function(panelType,bgColor)
  {
    if(this.objects[panelType].active)
    {
      this.objects[panelType].backgroundColorPanel = bgColor;
      this.refreshPropertyPanel(panelType);
    }
  },
  setSizePanels : function(width, leftWidth, heightTop, heightBottom, heightCenter)
  {
    this.TOTAL_HEIGHT = 0;
    this.TOTAL_WIDTH = width;
    for(j=0; j<4; j++)
    {
      if(this.objects[j].active)
      {
        switch (j)
        {
          case 0 : {
            this.objects[j].widthPanel  = width;
            this.objects[j].heightPanel = heightTop;
            this.TOTAL_HEIGHT += heightTop;
            break;
          }
          case 1 : {
            this.objects[j].widthPanel  = leftWidth;
            this.objects[j].heightPanel = heightCenter;
            this.TOTAL_HEIGHT += heightCenter;
            break;
          }
          case 2 : {
            this.objects[j].widthPanel  = width-leftWidth-6;
            this.objects[j].heightPanel = heightCenter;
            if(!this.objects[1].active)
            {
              this.TOTAL_HEIGHT += heightCenter;
            }
            break;
          }
          case 3 : {
            this.objects[j].widthPanel  = width;
            this.objects[j].heightPanel = heightBottom;
            this.TOTAL_HEIGHT += heightBottom;
            break;
          }
        }
      }
      this.refreshPropertyPanel(j);
    }
  },
  setObjAttrib : function(objAttr,env)
  {
    for(i=0; i<4; i++)
    {
      if(this.objects[i].active)
      {
        this.objects[i].backgroundColorPanel = objAttr.Color.bgLayout[env];
        this.objects[i].borderStylePanel 	   = objAttr.Border.borderStyleLayout[env];
        this.refreshPropertyPanel(i);
		if (this.loadBGImg) 
		{
		  this.setBgBarImg(objAttr.BgImg.bgPanel[env], i); 
		}
      }
    }
	this.contentLayout.bgControlSize = objAttr.Color.bgControlSizeLayout[env];
	this.contentLayout.bgControlSizeCenter = objAttr.Color.bgControlSizeCenter[env];
	this.setBgColorControlSize(objAttr.Color.bgControlSizeLayout[env], objAttr.Color.bgControlSizeCenter[env]);
  },
  setPositionLayout : function(x,y)
  {
    this.contentLayout.x = x;
    this.contentLayout.y = y;
    this.contentLayout.style.position = "absolute";
    this.contentLayout.style.left = x+"px";
    this.contentLayout.style.top = y+"px";
  },
  show : function(panelType)
  {
    if(this.objects[panelType].active)
    {
      this.objects[panelType].panel.style.visibility = "visible";
    }
  },
  setBgBarImg : function(bgImg, typePanel) 
  {
  	this.objects[typePanel].panel.style.backgroundImage="url("+this.bgImgPath+bgImg+")";
  }, 
  setLoadBGImg : function(activeLoad)
  {
  	this.loadBGImg = activeLoad;
  }
}

