var graphics =
{
  objects : new Array,
  TYPE_ON_MOUSE_OVER : 0,
  TYPE_ONCLICK : 1,
  TYPE_ON_MOUSE_OUT : 2,
  TYPE_ON_MOUSE_MOVE : 3,
  TYPE_ONDBLCLICK : 4,
  actualPoint :
  {
    x : 0,
    y : 0,
    w : 0,
    h : 0,
    text : '',
    color : '',
	serieNum : 0,
    obj : new Object()
  },
addPropertyMethod : function(id)
{
  graphics.objects[id].addToBody  =  function()
  {
    graphics.addToBody(id);
  }
  graphics.objects[id].addObject  =  function(obj)
  {
    graphics.addObject(id,obj);
  }
  graphics.objects[id].bar  =  function(X1,Y1,w,h,color,txt,colorText,sizeText,serieNum)
  {
    return graphics.bar(id,X1,Y1,w,h,color,txt,colorText,sizeText,serieNum);
  }
  graphics.objects[id].createPanel  =  function(x,y,sizeX,sizeY)
  {
    graphics.createPanel(id,x,y,sizeX,sizeY);
  }
  graphics.objects[id].delBar  =  function(X1,Y1,W,H)
  {
    graphics.delBar(id,X1,Y1,W,H);
  }
  graphics.objects[id].drawPoints  =  function(point)
  {
    graphics.drawPoints(id,point);
  }
  graphics.objects[id].drawHorizontalLine  =  function(X1,Y1,X2,color,widthLine,serieNum)
  {
    return graphics.drawHorizontalLine(id,X1,Y1,X2,color,widthLine,serieNum);
  }
  graphics.objects[id].drawVerticalLine  =  function(X1,Y1,Y2,color,widthLine,serieNum)
  {
    return graphics.drawVerticalLine(id,X1,Y1,Y2,color,widthLine,serieNum);
  }
  graphics.objects[id].delLine  =  function(X1,Y1,X2,Y2,color)
  {
    graphics.delLine(id,X1,Y1,X2,Y2,color);
  }
  graphics.objects[id].delVerticalLine  =  function(X1,Y1,Y2,color,widthLine)
  {
    graphics.delVerticalLine(id,X1,Y1,Y2,color,widthLine);
  }
  graphics.objects[id].delPixel  =  function(X,Y,color)
  {
    graphics.delPixel(id,X,Y,color);
  }
  graphics.objects[id].delText  =  function(X,Y)
  {
    graphics.delText(id,X,Y);
  }
  graphics.objects[id].delHorizontalLine  =  function(X1,Y1,X2,color,widthLine)
  {
    graphics.delHorizontalLine(id,X1,Y1,X2,color,widthLine);
  }
  graphics.objects[id].getActualPoint  =  function()
  {
    return graphics.getActualPoint();
  }
  graphics.objects[id].hidePanel  =  function()
  {
    graphics.hidePanel(id);
  }
  graphics.objects[id].line  =  function(X1,Y1,X2,Y2,color,arrV)
  {
    graphics.line(id,X1,Y1,X2,Y2,color,arrV);
  },
  graphics.objects[id].loadObjPoint = function(objPoint)
  {
  	graphics.loadObjPoint(objPoint);
  },
  graphics.objects[id].putPixel  =  function(X,Y,color,serieNum)
  {
    return graphics.putPixel(id,X,Y,color,serieNum);
  }
  graphics.objects[id].resizePanel  =  function(sizeX,sizeY)
  {
    graphics.resizePanel(id,sizeX,sizeY);
  }
  graphics.objects[id].setCallBackFunction  =  function(funct,type)
  {
    graphics.setCallBackFunction(id,funct,type);
  }
  graphics.objects[id].setBgColorPanel  =  function(color)
  {
    graphics.setBgColorPanel(id,color);
  }
  graphics.objects[id].setBorderSizePanel  =  function(size)
  {
    graphics.setBorderSizePanel(id,size);
  }
  graphics.objects[id].setBorderStylePanel  =  function(style)
  {
    graphics.setBorderStylePanel(id,style);
  }
  graphics.objects[id].setSizePanel  =  function()
  {
    graphics.setSizePanel(id);
  }
  graphics.objects[id].setPositionPanel  =  function(x,y)
  {
    graphics.setPositionPanel(id,x,y);
  }
  graphics.objects[id].showPanel  =  function()
  {
    graphics.showPanel(id);
  }
  graphics.objects[id].setSizePixel  =  function(size)
  {
    graphics.setSizePixel(id,size);
  }
  graphics.objects[id].setText  =  function(X,Y,color,size,text)
  {
    graphics.setText(id,X,Y,color,size,text);
  }
  graphics.objects[id].rectangle  =  function(X1,Y1,X2,Y2,color)
  {
    graphics.rectangle(id,X1,Y1,X2,Y2,color);
  }
  graphics.objects[id].delRectangle  =  function(X1,Y1,X2,Y2,color)
  {
    graphics.delRectangle(id,X1,Y1,X2,Y2,color);
  }
  graphics.objects[id].triangle  =  function(X1,Y1,X2,Y2,X3,Y3,color)
  {
    graphics.triangle(id,X1,Y1,X2,Y2,X3,Y3,color);
  }
  graphics.objects[id].delTriangle  =  function(X1,Y1,X2,Y2,X3,Y3,color)
  {
    graphics.delTriangle(id,X1,Y1,X2,Y2,X3,Y3,color);
  }
  graphics.objects[id].fillTriangle  =  function(X1,Y1,X2,Y2,X3,Y3,color,serieNum)
  {
    graphics.fillTriangle(id,X1,Y1,X2,Y2,X3,Y3,color,serieNum);
  }
  graphics.objects[id].delFillTriangle  =  function(X1,Y1,X2,Y2,X3,Y3,color)
  {
    graphics.delFillTriangle(id,X1,Y1,X2,Y2,X3,Y3,color);
  }
  graphics.objects[id].circle  =  function(X,Y,r,color)
  {
    graphics.circle(id,X,Y,r,color);
  }
  graphics.objects[id].delCircle  =  function(X,Y,r,color)
  {
    graphics.delCircle(id,X,Y,r,color);
  }
  graphics.objects[id].arc  =  function(X,Y,r,initAng,endAng,color)
  {
    graphics.arc(id,X,Y,r,initAng,endAng,color);
  }
  graphics.objects[id].delArc  =  function(X,Y,r,initAng,endAng,color)
  {
    graphics.delArc(id,X,Y,r,initAng,endAng,color);
  }
  graphics.objects[id].getY  =  function(X,Y,r,initAng,endAng,color)
  {
    return graphics.getY(X1,Y1,X2,Y2,ValueX);
  }
  graphics.objects[id].getX  =  function(X,Y,r,initAng,endAng,color)
  {
    return graphics.getX(X1,Y1,X2,Y2,valueY);
  }
  graphics.objects[id].cuadrante  =  function(X,Y,r,initAng,endAng,color)
  {
    return graphics.cuadrante(ang);
  }
  graphics.objects[id].fillCuadrante  =  function(X,Y,r,initAng,endAng,cuadrante,color,serieNum)
  {
    graphics.fillCuadrante(id,X,Y,r,initAng,endAng,cuadrante,color,serieNum);
  }
  graphics.objects[id].delFillCuadrante  =  function(X,Y,r,initAng,endAng,cuadrante,color)
  {
    graphics.delFillCuadrante(id,X,Y,r,initAng,endAng,cuadrante,color);
  }
  graphics.objects[id].fillArc  =  function(X,Y,r,initAng,endAng,color,serieNum)
  {
    graphics.fillArc(id,X,Y,r,initAng,endAng,color,serieNum);
  }
  graphics.objects[id].delFillArc  =  function(X,Y,r,initAng,endAng,color)
  {
    graphics.delFillArc(id,X,Y,r,initAng,endAng,color);
  }
  graphics.objects[id].setWidthBar  =  function(X1,Y1,W,H,newW)
  {
    graphics.setWidthBar(id,X1,Y1,W,H,newW);
  }
  graphics.objects[id].setValueBar  =  function( X1, Y1, W, H, txt, color)
  {
    graphics.setValueBar(id, X1, Y1, W, H, txt, color);
  }
},
  addToBody : function(id)
  {
    document.body.appendChild(this.objects[id]);
  },
  addObject : function(id,obj)
  {
    this.objects[id].appendChild(obj);
  },
  bar : function(id,X1,Y1,w,h,color,txt,colorText,sizeText,serieNum)
  {
    var t = document.createElement("div");
    t.setAttribute('id','bar('+X1+','+Y1+','+w+','+h+')');
    t.setAttribute('border','0px');
    t.style.position		= "absolute";
    t.style.top				= Y1+"px";
    t.style.left			= X1+"px";
    t.style.color			= colorText;
    t.style.textAlign		= 'center';
    t.style.fontSize 		= sizeText+'px';
    t.style.width			= w+'px';
    t.style.height			= h+'px';
    t.style.backgroundColor = color;
    t.style.display			='block';
    t.text = txt;
    t.textObj = document.createElement("P");
    t.textObj.setAttribute('id','textBar('+X1+','+Y1+','+w+','+h+')');
    t.textObj.appendChild(document.createTextNode(t.text));
    t.appendChild(t.textObj);
    t.x = X1;
    t.y = Y1;
    t.w = w;
    t.h = h;
    t.text = txt;
	t.serieNum = serieNum;
    t.color = color;
    this.objects[id].appendChild(t);
    t.onmouseover = function(e)
    {
      graphics.loadObjPoint(t);
	  graphics.objects[id].functOnMouseOver();
    }
	t.onmousemove = function(e)
	{
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnMouseMove();
	}
	t.onmouseout = function(e)
	{
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnMouseOut();
	}
	t.onclick = function(e)
	{
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnClick();
	}
	t.ondblclick = function(e)
	{
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnDblClick();
	}
    return t;
  },
  createPanel : function(id,x,y,sizeX,sizeY)
  {
    this.objects[id] = document.createElement("div");
	this.objects[id].nameComponent = 'graphics';
	this.objects[id].id = id;
    this.objects[id].functOnMouseOver = new Function("");
	this.objects[id].functOnClick = new Function("");
	this.objects[id].functOnMouseOut = new Function("");
	this.objects[id].functOnMouseMove = new Function("");
	this.objects[id].functOnDblClick = new Function("");
    this.objects[id].panelW = sizeX;
    this.objects[id].panelH = sizeY;
    this.objects[id].panelX = x;
    this.objects[id].panelY = y;
    this.objects[id].sizePixel = 1;
    this.setSizePanel(id);
    this.setBgColorPanel(id,"black");
    this.setPositionPanel(id,x,y);
    this.showPanel(id);
	this.addPropertyMethod(id);
    return this.objects[id]; 
  },
  delBar : function(id,X1,Y1,W,H)
  {
    var t = document.getElementById('bar('+X1+','+Y1+','+W+','+H+')');
    this.objects[id].removeChild(t);
  },
  drawPoints : function(id,point)
  {
    var i=0;
    for(i=0; i<point.x.length; i++)
    {
      this.putPixel(id,point.x[i],point.y[i],point.color,-1);
    }
  },
  drawHorizontalLine : function(id,X1,Y1,X2,color,widthLine,serieNum)
  {
    var t = document.createElement("DIV");
    var idLine = 'line'+color+'('+X1+','+Y1+','+X2+','+widthLine+')';
    t.setAttribute('id',idLine);
    t.style.position="absolute";
    t.style.top = Y1+"px";
    t.style.left = X1+"px";
    t.style.width = X2-X1+"px";
    t.style.height = widthLine+"px";
    t.style.backgroundColor=color;
    t.style.fontSize="1px";
    t.x = X1;
    t.y = Y1;
    t.w = X2;
    t.h = widthLine;
    t.color = color;
    t.text='';
	t.serieNum = serieNum;
    this.objects[id].appendChild(t);
    t.onmouseover = function(e)
    {
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnMouseOver();
    }
	t.onmousemove = function(e)
	{
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnMouseMove();
	}
	t.onmouseout = function(e)
	{
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnMouseOut();
	}
	t.onclick = function(e)
	{
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnClick();
	}
	t.ondblclick = function(e)
	{
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnDblClick();
	}
    return t;
  },
  drawVerticalLine : function(id,X1,Y1,Y2,color,widthLine,serieNum)
  {
    var t = document.createElement("DIV");
    var idLine = 'line'+color+'('+X1+','+Y1+','+widthLine+','+Y2+')';
    t.setAttribute('id',idLine);
    t.style.position="absolute";
    t.style.top = Y1+"px";
    t.style.left = X1+"px";
    t.style.width = widthLine+"px";
    t.style.height = Y2-Y1+"px";
    t.style.backgroundColor=color;
    t.style.fontSize="0px";
    t.style.borderSize ="0px";
    t.x = X1;
    t.y = Y1;
    t.w = widthLine;
    t.h = Y2;
	t.serieNum = serieNum;
    t.text = '';
    t.color = color;
    this.objects[id].appendChild(t);
    t.onmouseover = function(e)
    {
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnMouseOver();
    }
	t.onmousemove = function(e)
	{
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnMouseMove();
	}
	t.onmouseout = function(e)
	{
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnMouseOut();
	}
	t.onclick = function(e)
	{
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnClick();
	}
	t.ondblclick = function(e)
	{	
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnDblClick();
	}
    return t;
  },
  delLine : function(id,X1,Y1,X2,Y2,color)
  {
    if(X1==X2)
    {
      if(Y1>Y2)
      {
        var aux=Y1;
        Y1=Y2;
        Y2=aux;
      }
      for(i=Y1; i<Y2+1; i++)
      {
        this.delPixel(id,X1,i,color);
      }
      return;
    }
    dx = Math.abs(X2-X1);
    dy = Math.abs(Y2-Y1);
    m = (Y2-Y1)/(X2-X1);
    b=Y2-m*X2;
    var i=0;
    var j=0;
    if(X1>X2)
    {
      var aux=X1;
      X1=X2;
      X2=aux;
    }
    if(Y1>Y2)
    {
      var aux=Y1;
      Y1=Y2;
      Y2=aux;
    }
    if(dx>dy)
    {
      for(i=X1; i<X2+1; i++)
      {
        j=m*i+b;
        this.delPixel(id,i,j,color);
      }
    }
    else
    {
      for(i=Y1; i<Y2+1; i++)
      {
        j=parseInt((i-b)/m);
        this.delPixel(id,j,i,color);
      }
    }
  },
  delVerticalLine : function(id,X1,Y1,Y2,color,widthLine)
  {
    var idLine = 'line'+color+'('+X1+','+Y1+','+widthLine+','+Y2+')';
    var t = document.getElementById(idLine);
    this.objects[id].removeChild(t);
  },
  delPixel : function(id,X,Y,color)
  {
    var idPixel = 'pixel'+color+'('+X+','+Y+')';
    var t = document.getElementById(idPixel);
    this.objects[id].removeChild(t);
  },
  delText : function(id,X,Y)
  {
    var idText = id+'_text('+X+','+Y+')';
    var t = document.getElementById(idText);
    this.objects[id].removeChild(t);
  },
  delHorizontalLine : function(id,X1,Y1,X2,color,widthLine)
  {
    var idLine = 'line'+color+'('+X1+','+Y1+','+X2+','+widthLine+')';
    var t = document.getElementById(idLine);
    this.objects[id].removeChild(t);
  },
  getActualPoint : function()
  {
    return graphics.actualPoint;
  },
  hidePanel : function(id)
  {
    this.objects[id].style.display='none';
  },
  line : function(id,X1,Y1,X2,Y2,color,serieNum)
  {
	if(X1==X2)
    {
      if(Y1>Y2)
      {
        var aux=Y1;
        Y1 = Y2;
        Y2 = aux;
	  }
	  for(i=Y1; i<Y2+1; i++)
      {
        this.putPixel(id,X1,i,color,serieNum);
      }
    }
    dx = Math.abs(X2-X1);
    dy = Math.abs(Y2-Y1);
    m = (Y2-Y1)/(X2-X1);
    b  = Y2  - m  * X2;
    var i=0;
    var j=0;
    if(X1>X2)
    {
      var aux=X1;
      X1=X2;
      X2=aux;
    }
    if(Y1>Y2)
    {
      var aux=Y1;
      Y1=Y2;
      Y2=aux;
    }
    if(dx>dy)
    {
      for(i=X1; i<X2+1; i++)
      {
        j=m*i+b;
        this.putPixel(id,i,j,color,serieNum);
      }
    }
    else
    {	
	  for(i=Y1; i<Y2+1; i++)
      {
        j=parseInt((i-b)/m);
        this.putPixel(id,j,i,color,serieNum);
      }
    }
  },
  loadObjPoint : function(objPoint)
  {
      graphics.actualPoint.x = objPoint.x;
      graphics.actualPoint.y = objPoint.y;
      graphics.actualPoint.w = objPoint.w;
      graphics.actualPoint.h = objPoint.h;
      graphics.actualPoint.text = objPoint.txt;
      graphics.actualPoint.color = objPoint.color;
      graphics.actualPoint.obj = objPoint;  
	  graphics.actualPoint.serieNum = objPoint.serieNum;
  },
  putPixel : function(id,X,Y,color,serieNum)
  {
    var t = document.createElement("DIV");
    var idPixel = 'pixel'+color+'('+X+','+Y+')';
    t.setAttribute('id',idPixel);
    t.style.position="absolute";
    t.style.top=Y+"px";
    t.style.left=X+"px";
    t.style.backgroundColor=color;
    t.style.fontSize="1px";
    t.style.width = this.objects[id].sizePixel+'px';
    t.style.height = this.objects[id].sizePixel+'px';
    t.x=X;
    t.y=Y;
	t.w = this.objects[id].sizePixel;
    t.h = this.objects[id].sizePixel;
    t.color = color;
    t.text='';
	t.serieNum = serieNum;
    this.objects[id].appendChild(t);
    t.onmouseover = function(e)
    {
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnMouseOver();
    }
	t.onmousemove = function(e)
	{
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnMouseMove();
	}
	t.onmouseout = function(e)
	{
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnMouseOut();
	}
	t.onclick = function(e)
	{
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnClick();
	}
	t.ondblclick = function(e)
	{
	  graphics.loadObjPoint(t);
	  graphics.objects[id].functOnDblClick();
	}
    return t;
  },
  resizePanel : function(id,sizeX,sizeY)
  {
    this.objects[id].panelW = sizeX;
    this.objects[id].panelH = sizeY;
    this.showPanel(id);
  },
  setCallBackFunction : function(id,funct,type)
  {
  	switch(type)
	{
		case graphics.TYPE_ON_MOUSE_OVER :
		{
          this.objects[id].functOnMouseOver = new Function(funct);
		  break;
		}
		case graphics.TYPE_ON_MOUSE_MOVE :
		{
          this.objects[id].functOnMouseMove = new Function(funct);
		  break;
		}
		case graphics.TYPE_ON_MOUSE_OUT :
		{
          this.objects[id].functOnMouseOut = new Function(funct);
		  break;
		}
		case graphics.TYPE_ONCLICK :
		{
          this.objects[id].functOnClick = new Function(funct);
		  break;
		}
		case graphics.TYPE_ONDBLCLICK :
		{
          this.objects[id].functOnDblClick = new Function(funct);
		  break;
		}
	}
  },
  setBgColorPanel : function(id,color)
  {
    this.objects[id].style.backgroundColor = color;
  },
  setBorderSizePanel : function(id,size)
  {
    this.objects[id].setAttribute('border',size+'px');
  },
  setBorderStylePanel : function(id,style)
  {
    this.objects[id].style.borderStyle = style;
  },
  setSizePanel : function(id)
  {
    this.objects[id].style.width  = this.objects[id].panelW+'px';
    this.objects[id].style.height = this.objects[id].panelH+'px';
  },
  setPositionPanel : function(id,x,y)
  {
    this.objects[id].style.position = 'absolute';
    this.objects[id].style.top = y+'px';
    this.objects[id].style.left = x+'px';
  },
  showPanel : function(id)
  {
    this.objects[id].style.display='block';
  },
  setSizePixel : function(id,size)
  {
    this.objects[id].sizePixel = size;
  },
  setText : function(id,X,Y,color,size,text)
  {
    var idText = id+'_text('+X+','+Y+')';
    var t = document.createElement("P");
    t.setAttribute('id',idText);
    t.style.position="absolute";
    t.style.top=Y+"px";
    t.style.left=X+"px";
    t.style.color=color;
    t.style.fontSize=size+"px";
    var tn = document.createTextNode(text);
    t.appendChild(tn);
    this.objects[id].appendChild(t);
  },
  rectangle : function(id,X1,Y1,X2,Y2,color)
  {
    this.drawVerticalLine(id,X1,Y1,Y2,color,1,-1);
    this.drawHorizontalLine(id,X1,Y1,X2,color,1);
    this.drawHorizontalLine(id,X1,Y2,X2,color,1);
    this.drawVerticalLine(id,X2,Y1,Y2,color,1,-1);
  },
  delRectangle : function(id,X1,Y1,X2,Y2,color)
  {
    this.delVerticalLine(id,X1,Y1,Y2,color,1);
    this.delHorizontalLine(id,X1,Y1,X2,color,1);
    this.delHorizontalLine(id,X1,Y2,X2,color,1);
    this.delVerticalLine(id,X2,Y1,Y2,color,1);
  },
  triangle : function(id,X1,Y1,X2,Y2,X3,Y3,color)
  {
    this.line(id,X1,Y1,X2,Y2,color,[X1,Y1,X2,Y2]);
    this.line(id,X2,Y2,X3,Y3,color,[X2,Y2,X3,Y3]);
    this.line(id,X1,Y1,X3,Y3,color,[X1,Y1,X3,Y3]);
  },
  delTriangle : function(id,X1,Y1,X2,Y2,X3,Y3,color)
  {
    this.delLine(id,X1,Y1,X2,Y2,color);
    this.delLine(id,X2,Y2,X3,Y3,color);
    this.delLine(id,X1,Y1,X3,Y3,color);
  },
  fillTriangle : function(id,X1,Y1,X2,Y2,X3,Y3,color,serieNum)
  {
    var dx12 = X2-X1;
    var dy12 = Y2-Y1;
    var m12 = dy12/dx12;
    var b12=Y2-m12*X2;
    var dx13 = X3-X1;
    var dy13 = Y3-Y1;
    var m13 = dy13/dx13;
    var b13 = Y3-m13*X3;
    var dx23 = X2-X3;
    var dy23 = Y2-Y3;
    var m23 = dy23/dx23;
    var b23=Y2-m23*X2;
    if(X1 < X2)
    {
      for(var i=X1; i<=X2; i++)
      {
        y12 = m12*i+b12;
        y13 = m13*i+b13;
        if(y12 > y13)
        {
          var auxy = y12;
          y12 = y13;
          y13=auxy;
        }
        this.drawVerticalLine(id,i,y12,y13,color,3,serieNum);
      }
    }
    if(X2 < X3)
    {
      for(var i=X2; i<=X3; i++)
      {
        y23 = m23*i+b23;
        y13 = m13*i+b13;
        if(y23>y13)
        {
          var auxy = y23;
          y23 = y13;
          y13=auxy;
        }
        this.drawVerticalLine(id,i,y23,y13,color,3,serieNum);
      }
    }
  },
  delFillTriangle : function(id,X1,Y1,X2,Y2,X3,Y3,color)
  {
    var dx12 = X2-X1;
    var dy12 = Y2-Y1;
    var m12 = dy12/dx12;
    var b12=Y2-m12*X2;
    var dx13 = X3-X1;
    var dy13 = Y3-Y1;
    var m13 = dy13/dx13;
    var b13 = Y3-m13*X3;
    var dx23 = X2-X3;
    var dy23 = Y2-Y3;
    var m23 = dy23/dx23;
    var b23=Y2-m23*X2;
    if(X1 < X2)
    {
      for(var i=X1; i<=X2; i++)
      {
        y12 = m12*i+b12;
        y13 = m13*i+b13;
        if(y12 > y13)
        {
          var auxy = y12;
          y12 = y13;
          y13=auxy;
        }
        this.delVerticalLine(id,i,y12,y13,color,3);
      }
    }
    if(X2 < X3)
    {
      for(var i=X2; i<=X3; i++)
      {
        y23 = m23*i+b23;
        y13 = m13*i+b13;
        if(y23>y13)
        {
          var auxy = y23;
          y23 = y13;
          y13=auxy;
        }
        this.delVerticalLine(id,i,y23,y13,color,3);
      }
    }
  },
  circle : function(id,X,Y,r,color)
  {
    var i=0;
    var px=0;
    var py=0;
    for(i=0;i<361;i++)
    {
      px = X+r*Math.cos(i*3.141592/180);
      py = Y-r*Math.sin(i*3.141592/180);
      this.putPixel(id,px,py,color,-1);
    }
  },
  delCircle : function(id,X,Y,r,color)
  {
    var i=0;
    var px=0;
    var py=0;
    for(i=0;i<361;i++)
    {
      px = X+r*Math.cos(i*3.141592/180);
      py = Y-r*Math.sin(i*3.141592/180);
      this.delPixel(id,px,py,color);
    }
  },
  arc : function(id,X,Y,r,initAng,endAng,color)
  {
    var i=0;
    var px=0;
    var py=0;
    for(i=initAng;i<endAng;i++)
    {
      px = X+r*Math.cos(i*3.141592/180);
      py = Y-r*Math.sin(i*3.141592/180);
      this.putPixel(id,px,py,color,-1);
    }
  },
  delArc : function(id,X,Y,r,initAng,endAng,color)
  {
    var i=0;
    var px=0;
    var py=0;
    for(i=initAng;i<endAng;i++)
    {
      px = X+r*Math.cos(i*3.141592/180);
      py = Y-r*Math.sin(i*3.141592/180);
      this.delPixel(id,px,py,color);
    }
  },
  getY : function(X1,Y1,X2,Y2,ValueX)
  {
    var dx = X2-X1;
    var dy = Y2-Y1;
    var m = dy/dx;
    var b=Y2-m*X2;
    return m*ValueX+b;
  },
  getX : function(X1,Y1,X2,Y2,valueY)
  {
    var dx = X2-X1;
    var dy = Y2-Y1;
    var m = dy/dx;
    var b=Y2-m*X2;
    var x = (valueY-b)/m;
    return x;
  },
  cuadrante : function(ang)
  {
    var initAng = ang;
    while(initAng > 360)
    {
      initAng = initAng/360;
    }
    if(initAng >=0 && initAng<=90)
    return 1;
    if(initAng >=90 && initAng<=180)
    return 2;
    if(initAng >=180 && initAng<=270)
    return 3;
    if(initAng >=270 && initAng<=360)
    return 4;
  },
  fillCuadrante : function(id,X,Y,r,initAng,endAng,cuadrante,color,serieNum)
  {
   var initX = X+r*Math.cos(initAng * Math.PI/180);
    var initY = Y-r*Math.sin(initAng * Math.PI/180);
    var endX  = X+r*Math.cos(endAng  * Math.PI/180);
    var endY  = Y-r*Math.sin(endAng  * Math.PI/180);
    switch(cuadrante)
    {
      case 1 : {
        for(i=initAng;i<endAng;i++)
        {
          var px = X+r*Math.cos(i*Math.PI/180);
          var py = Y-r*Math.sin(i*Math.PI/180);
          this.drawVerticalLine(id,px,py,initY,color,3,serieNum);
        }
        break;
      }
      case 2 : {
        for(i=initAng;i<endAng;i++)
        {
          var px = X+r*Math.cos(i*Math.PI/180);
          var py = Y-r*Math.sin(i*Math.PI/180);
          var gy = this.getY(initX,initY,endX,endY,px);
          this.drawVerticalLine(id,px,py,gy,color,3,serieNum);
        }
        break;
      }
      case 3 : {
        for(i=initAng;i<endAng;i++)
        {
          var px = X+r*Math.cos(i*Math.PI/180);
          var py = Y-r*Math.sin(i*Math.PI/180);
          var y = this.getY(initX,initY,endX,endY,px);
          this.drawVerticalLine(id,px,y,py,color,3,serieNum);
        }
        break;
      }
      case 4 : {
        for(i=initAng;i<endAng;i++)
        {
          var px = X+r*Math.cos(i*Math.PI/180);
          var py = Y-r*Math.sin(i*Math.PI/180);
          var y = this.getY(initX,initY,endX,endY,px);
          this.drawVerticalLine(id,px,y,py,color,3,serieNum);
        }
        break;
      }
    }
    if(X<=endX && endX<initX)
    this.fillTriangle(id,X,Y,endX,endY,initX,initY,color,serieNum);
    if(endX<=X && X<initX)
    this.fillTriangle(id,endX,endY,X,Y,initX,initY,color,serieNum);
    if(endX<initX && initX<=X)
    this.fillTriangle(id,endX,endY,initX,initY,X,Y,color,serieNum);
    if(initX<=endX && endX<=X)
    this.fillTriangle(id,initX,initY,endX,endY,X,Y,color,serieNum);
    if(initX<=X && X<endX)
    this.fillTriangle(id,initX,initY,X,Y,endX,endY,color,serieNum);
    if(X<=initX && initX<endX)
    this.fillTriangle(id,X,Y,initX,initY,endX,endY,color,serieNum);
  },
  delFillCuadrante : function(id,X,Y,r,initAng,endAng,cuadrante,color)
  {
    var initX = X+r*Math.cos(initAng * Math.PI/180);
    var initY = Y-r*Math.sin(initAng * Math.PI/180);
    var endX  = X+r*Math.cos(endAng  * Math.PI/180);
    var endY  = Y-r*Math.sin(endAng  * Math.PI/180);
    switch(cuadrante)
    {
      case 1 : {
        for(i=initAng;i<endAng;i++)
        {
          var px = X+r*Math.cos(i*Math.PI/180);
          var py = Y-r*Math.sin(i*Math.PI/180);
          this.delVerticalLine(id,px,py,initY,color,3);
        }
        break;
      }
      case 2 : {
        for(i=initAng;i<endAng;i++)
        {
          var px = X+r*Math.cos(i*Math.PI/180);
          var py = Y-r*Math.sin(i*Math.PI/180);
          var gy = this.getY(initX,initY,endX,endY,px);
          this.delVerticalLine(id,px,py,gy,color,3);
        }
        break;
      }
      case 3 : {
        for(i=initAng;i<endAng;i++)
        {
          var px = X+r*Math.cos(i*Math.PI/180);
          var py = Y-r*Math.sin(i*Math.PI/180);
          var y = this.getY(initX,initY,endX,endY,px);
          this.delVerticalLine(id,px,y,py,color,3);
        }
        break;
      }
      case 4 : {
        for(i=initAng;i<endAng;i++)
        {
          var px = X+r*Math.cos(i*Math.PI/180);
          var py = Y-r*Math.sin(i*Math.PI/180);
          var y = this.getY(initX,initY,endX,endY,px);
          this.delVerticalLine(id,px,y,py,color,3);
        }
        break;
      }
    }
    if(X<=endX && endX<initX)
    this.delFillTriangle(id,X,Y,endX,endY,initX,initY,color);
    if(endX<=X && X<initX)
    this.delFillTriangle(id,endX,endY,X,Y,initX,initY,color);
    if(endX<initX && initX<=X)
    this.delFillTriangle(id,endX,endY,initX,initY,X,Y,color);
    if(initX<=endX && endX<=X)
    this.delFillTriangle(id,initX,initY,endX,endY,X,Y,color);
    if(initX<=X && X<endX)
    this.delFillTriangle(id,initX,initY,X,Y,endX,endY,color);
    if(X<=initX && initX<endX)
    this.delFillTriangle(id,X,Y,initX,initY,endX,endY,color);
  },
  fillArc : function(id,X,Y,r,initAng,endAng,color,serieNum)
  {
    switch(this.cuadrante(initAng))
    {
      case 1 : {
        switch(this.cuadrante(endAng))
        {
          case 1 :
          {
            if(initAng < endAng)
            {
              this.fillCuadrante(id,X,Y,r,initAng,endAng,1,color,serieNum);
            }
            else
            {
              this.fillCuadrante(id,X,Y,r,initAng,90,1,color,serieNum);
              this.fillCuadrante(id,X,Y,r,90,180,2,color,serieNum);
              this.fillCuadrante(id,X,Y,r,180,270,3,color,serieNum);
              this.fillCuadrante(id,X,Y,r,270,360,4,color,serieNum);
              this.fillCuadrante(id,X,Y,r,0,endAng,1,color,serieNum);
            }
            break;
          }
          case 2 :
          {
            this.fillCuadrante(id,X,Y,r,initAng,90,1,color,serieNum);
            this.fillCuadrante(id,X,Y,r,90,endAng,2,color,serieNum);
            break;
          }
          case 3 :
          {
            this.fillCuadrante(id,X,Y,r,initAng,90,1,color,serieNum);
            this.fillCuadrante(id,X,Y,r,90,180,2,color,serieNum);
            this.fillCuadrante(id,X,Y,r,180,endAng,3,color,serieNum);
            break;
          }
          case 4 :
          {
            this.fillCuadrante(id,X,Y,r,initAng,90,1,color,serieNum);
            this.fillCuadrante(id,X,Y,r,90,180,2,color,serieNum);
            this.fillCuadrante(id,X,Y,r,180,270,3,color,serieNum);
            this.fillCuadrante(id,X,Y,r,270,endAng,4,color,serieNum);
            break;
          }
        }
        break;
      }
      case 2 : {
        switch(this.cuadrante(endAng))
        {
          case 1 :
          {
            this.fillCuadrante(id,X,Y,r,initAng,180,2,color,serieNum);
            this.fillCuadrante(id,X,Y,r,180,270,3,color,serieNum);
            this.fillCuadrante(id,X,Y,r,270,360,4,color,serieNum);
            this.fillCuadrante(id,X,Y,r,0,endAng,1,color,serieNum);
            break;
          }
          case 2 :
          {
            if(initAng < endAng)
            {
              this.fillCuadrante(id,X,Y,r,initAng,endAng,2,color);
            }
            else
            {
              this.fillCuadrante(id,X,Y,r,initAng,180,2,color,serieNum);
              this.fillCuadrante(id,X,Y,r,180,270,3,color,serieNum);
              this.fillCuadrante(id,X,Y,r,270,360,4,color,serieNum);
              this.fillCuadrante(id,X,Y,r,0,90,1,color,serieNum);
              this.fillCuadrante(id,X,Y,r,90,endAng,2,color,serieNumr);
            }
            break;
          }
          case 3 :
          {
            this.fillCuadrante(id,X,Y,r,initAng,180,2,color,serieNum);
            this.fillCuadrante(id,X,Y,r,180,endAng,3,color,serieNum);
            break;
          }
          case 4 :
          {
            this.fillCuadrante(id,X,Y,r,initAng,180,2,color,serieNum);
            this.fillCuadrante(id,X,Y,r,180,270,3,color,serieNum);
            this.fillCuadrante(id,X,Y,r,270,endAng,4,color,serieNum);
            break;
          }
        }
        break;
      }
      case 3 : {
        switch(this.cuadrante(endAng))
        {
          case 1 :
          {
            this.fillCuadrante(id,X,Y,r,initAng,270,3,color,serieNum);
            this.fillCuadrante(id,X,Y,r,270,360,4,color,serieNum);
            this.fillCuadrante(id,X,Y,r,0,endAng,1,color,serieNum);
            break;
          }
          case 2 :
          {
            this.fillCuadrante(id,X,Y,r,initAng,270,3,color,serieNum);
            this.fillCuadrante(id,X,Y,r,270,360,4,color,serieNum);
            this.fillCuadrante(id,X,Y,r,0,90,1,color,serieNum);
            this.fillCuadrante(id,X,Y,r,90,endAng,2,color,serieNum);
            break;
          }
          case 3 :
          {
            if(initAng < endAng)
            {
              this.fillCuadrante(id,X,Y,r,initAng,endAng,3,color,serieNum);
            }
            else
            {
              this.fillCuadrante(id,X,Y,r,initAng,270,3,color,serieNum);
              this.fillCuadrante(id,X,Y,r,270,360,4,color,serieNum);
              this.fillCuadrante(id,X,Y,r,0,90,1,color,serieNum);
              this.fillCuadrante(id,X,Y,r,90,180,2,color,serieNum);
              this.fillCuadrante(id,X,Y,r,180,endAng,3,color,serieNum);
            }
            break;
          }
          case 4 :
          {
            this.fillCuadrante(id,X,Y,r,initAng,270,3,color,serieNum);
            this.fillCuadrante(id,X,Y,r,270,endAng,4,color,serieNum);
            break;
          }
        }
        break;
      }
      case 4 : {
        switch(this.cuadrante(endAng))
        {
          case 1 :
          {
            this.fillCuadrante(id,X,Y,r,initAng,360,4,color,serieNum);
            this.fillCuadrante(id,X,Y,r,0,endAng,1,color,serieNum);
            break;
          }
          case 2 :
          {
            this.fillCuadrante(id,X,Y,r,initAng,360,4,color,serieNum);
            this.fillCuadrante(id,X,Y,r,0,90,1,color,serieNum);
            this.fillCuadrante(id,X,Y,r,90,endAng,2,color,serieNum);
            break;
          }
          case 3 :
          {
            this.fillCuadrante(id,X,Y,r,initAng,360,4,color,serieNum);
            this.fillCuadrante(id,X,Y,r,0,90,1,color,serieNum);
            this.fillCuadrante(id,X,Y,r,90,180,2,color,serieNum);
            this.fillCuadrante(id,X,Y,r,180,endAng,3,color,serieNum);
            break;
          }
          case 4 :
          {
            if(initAng < endAng)
            {
              this.fillCuadrante(id,X,Y,r,initAng,endAng,4,color,serieNum);
            }
            else
            {
              this.fillCuadrante(id,X,Y,r,initAng,360,4,color,serieNum);
              this.fillCuadrante(id,X,Y,r,0,90,1,color,serieNum);
              this.fillCuadrante(id,X,Y,r,90,180,2,color,serieNum);
              this.fillCuadrante(id,X,Y,r,180,270,3,color,serieNum);
              this.fillCuadrante(id,X,Y,r,270,endAng,4,color,serieNum);
            }
            break;
          }
        }
        break;
      }
    }
  },
  delFillArc : function(id,X,Y,r,initAng,endAng,color)
  {
    switch(this.cuadrante(initAng))
    {
      case 1 : {
        switch(this.cuadrante(endAng))
        {
          case 1 :
          {
            if(initAng < endAng)
            {
              this.delFillCuadrante(id,X,Y,r,initAng,endAng,1,color);
            }
            else
            {
              this.delFillCuadrante(id,X,Y,r,initAng,90,1,color);
              this.delFillCuadrante(id,X,Y,r,90,180,2,color);
              this.delFillCuadrante(id,X,Y,r,180,270,3,color);
              this.delFillCuadrante(id,X,Y,r,270,360,4,color);
              this.delFillCuadrante(id,X,Y,r,0,endAng,1,color);
            }
            break;
          }
          case 2 :
          {
            this.delFillCuadrante(id,X,Y,r,initAng,90,1,color);
            this.delFillCuadrante(id,X,Y,r,90,endAng,2,color);
            break;
          }
          case 3 :
          {
            this.delFillCuadrante(id,X,Y,r,initAng,90,1,color);
            this.delFillCuadrante(id,X,Y,r,90,180,2,color);
            this.delFillCuadrante(id,X,Y,r,180,endAng,3,color);
            break;
          }
          case 4 :
          {
            this.delFillCuadrante(id,X,Y,r,initAng,90,1,color);
            this.delFillCuadrante(id,X,Y,r,90,180,2,color);
            this.delFillCuadrante(id,X,Y,r,180,270,3,color);
            this.delFillCuadrante(id,X,Y,r,270,endAng,4,color);
            break;
          }
        }
        break;
      }
      case 2 : {
        switch(this.cuadrante(endAng))
        {
          case 1 :
          {
            this.delFillCuadrante(id,X,Y,r,initAng,180,2,color);
            this.delFillCuadrante(id,X,Y,r,180,270,3,color);
            this.delFillCuadrante(id,X,Y,r,270,360,4,color);
            this.delFillCuadrante(id,X,Y,r,0,endAng,1,color);
            break;
          }
          case 2 :
          {
            if(initAng < endAng)
            {
              this.delFillCuadrante(id,X,Y,r,initAng,endAng,2,color);
            }
            else
            {
              this.delFillCuadrante(id,X,Y,r,initAng,180,2,color);
              this.delFillCuadrante(id,X,Y,r,180,270,3,color);
              this.delFillCuadrante(id,X,Y,r,270,360,4,color);
              this.delFillCuadrante(id,X,Y,r,0,90,1,color);
              this.delFillCuadrante(id,X,Y,r,90,endAng,2,color);
            }
            break;
          }
          case 3 :
          {
            this.delFillCuadrante(id,X,Y,r,initAng,180,2,color);
            this.delFillCuadrante(id,X,Y,r,180,endAng,3,color);
            break;
          }
          case 4 :
          {
            this.delFillCuadrante(id,X,Y,r,initAng,180,2,color);
            this.delFillCuadrante(id,X,Y,r,180,270,3,color);
            this.delFillCuadrante(id,X,Y,r,270,endAng,4,color);
            break;
          }
        }
        break;
      }
      case 3 : {
        switch(this.cuadrante(endAng))
        {
          case 1 :
          {
            this.delFillCuadrante(id,X,Y,r,initAng,270,3,color);
            this.delFillCuadrante(id,X,Y,r,270,360,4,color);
            this.delFillCuadrante(id,X,Y,r,0,endAng,1,color);
            break;
          }
          case 2 :
          {
            this.delFillCuadrante(id,X,Y,r,initAng,270,3,color);
            this.delFillCuadrante(id,X,Y,r,270,360,4,color);
            this.delFillCuadrante(id,X,Y,r,0,90,1,color);
            this.delFillCuadrante(id,X,Y,r,90,endAng,2,color);
            break;
          }
          case 3 :
          {
            if(initAng < endAng)
            {
              this.delFillCuadrante(id,X,Y,r,initAng,endAng,3,color);
            }
            else
            {
              this.delFillCuadrante(id,X,Y,r,initAng,270,3,color);
              this.delFillCuadrante(id,X,Y,r,270,360,4,color);
              this.delFillCuadrante(id,X,Y,r,0,90,1,color);
              this.delFillCuadrante(id,X,Y,r,90,180,2,color);
              this.delFillCuadrante(id,X,Y,r,180,endAng,3,color);
            }
            break;
          }
          case 4 :
          {
            this.delFillCuadrante(id,X,Y,r,initAng,270,3,color);
            this.delFillCuadrante(id,X,Y,r,270,endAng,4,color);
            break;
          }
        }
        break;
      }
      case 4 : {
        switch(this.cuadrante(endAng))
        {
          case 1 :
          {
            this.delFillCuadrante(id,X,Y,r,initAng,360,4,color);
            this.delFillCuadrante(id,X,Y,r,0,endAng,1,color);
            break;
          }
          case 2 :
          {
            this.delFillCuadrante(id,X,Y,r,initAng,360,4,color);
            this.delFillCuadrante(id,X,Y,r,0,90,1,color);
            this.delFillCuadrante(id,X,Y,r,90,endAng,2,color);
            break;
          }
          case 3 :
          {
            this.delFillCuadrante(id,X,Y,r,initAng,360,4,color);
            this.delFillCuadrante(id,X,Y,r,0,90,1,color);
            this.delFillCuadrante(id,X,Y,r,90,180,2,color);
            this.delFillCuadrante(id,X,Y,r,180,endAng,3,color);
            break;
          }
          case 4 :
          {
            if(initAng < endAng)
            {
              this.delFillCuadrante(id,X,Y,r,initAng,endAng,4,color);
            }
            else
            {
              this.delFillCuadrante(id,X,Y,r,initAng,360,4,color);
              this.delFillCuadrante(id,X,Y,r,0,90,1,color);
              this.delFillCuadrante(id,X,Y,r,90,180,2,color);
              this.delFillCuadrante(id,X,Y,r,180,270,3,color);
              this.delFillCuadrante(id,X,Y,r,270,endAng,4,color);
            }
            break;
          }
        }
        break;
      }
    }
  },
  setWidthBar : function(id,X1,Y1,W,H,newW)
  {
    var t = document.getElementById('bar('+X1+','+Y1+','+W+','+H+')');
    t.style.width = newW+"px";
  },
  setValueBar : function(id, X1, Y1, W, H, txt, color)
  {
    var t = document.getElementById('bar('+X1+','+Y1+','+W+','+H+')');
    var node = document.getElementById('textBar('+X1+','+Y1+','+W+','+H+')');
    t.removeChild(node);
    t.textObj = document.createElement("P");
    t.textObj.style.color = color;
    t.textObj.setAttribute('id','textBar('+X1+','+Y1+','+W+','+H+')');
    t.textObj.appendChild(document.createTextNode(t.text));
    t.text = txt;
    t.appendChild(t.textObj);
  }
}

