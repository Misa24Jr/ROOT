var desktop =
{
  desk : null,
  isDestroy : false,
  divFondo : null,
  xMax : 0,
  yMax : 0,
  mouseX : 0,
  mouseY : 0,
  timerFuncts : new Array,
  pathImg : 'url()',
  pathImgBar : 'url(images/taskbar-start-panel-bg.gif)',
  pathImgButton : 'images/bg',
  pathIconButton : 'images/logo/',
  widthImgButton : 100,
  heightImgButton : 20,
  pathImgMinWindow : 'images/leaf.gif',
  pathImgArrow : 'images/YL_MENU.GIF',
  pathImgMinWindowClose : 'images/close.gif',
  pathImgBarSelected : 'url(images/bg/bg201.jpg)',
  pathImgSeparetor : 'images/taskbar-split-h.gif',
  barHeight : 30,
  onClickButtonStart : new Function(),
  nullDiv : new Array,
  idIcons : new Array,
  fullDataBar : false,
  imgDesk : new Object(),
  textColorIcon : 'white',
  textColorIconSelected : 'yellow',
  
  onResizeExt : new Function(''),

  fontMinWin :
  {
    color : 'white',
    fontWeight : 'bold',
    fontSize : 10,
    family : 'arial'
  },
  fontIcon :
  {
    color : 'black',
    fontWeight : 'bold',
    fontSize : 12,
    family : 'aharoni'
  },
  propertyPanel :
  {
    borderStyle : 'outset',
    pathImgPanel : 'url(images/bg/bg171.jpg)',
    fontFamily : 'aharoni',
    fontColor : 'white',
    fontColorSelected : 'white',
    fontColorDisable : 'gray',
    fontSize : 16,
    fontWeight : 'normal',
    borderWidth : 2,
    iconSize : 20,
    heightCell : 31
  },
  addFunctToTimer : function(funct)
  {
    var lng = this.timerFuncts.length;
    this.timerFuncts[lng] = new Function(funct);
  },
  exeTimer : function()
  {
    var i=0;
    for (i = 0; i < desktop.timerFuncts.length; i++)
    {
      desktop.timerFuncts[i]();
    }
  },
  formatVal : function(value)
  {
  	value=''+value;
  	if(value.length<2)
  	  value='0'+value;
  	return value;  
  },
  getTime : function()
  {
    var date = new Date();
    var dia = date.getDate();
    var mes = date.getMonth()+1;
    var ano = date.getFullYear();
    var hr = date.getHours();
    var min = date.getMinutes();
    var seg = date.getSeconds();
    return this.formatVal(dia)+'/'+this.formatVal(mes)+'/'+ano+'   '+this.formatVal(hr)+':'+this.formatVal(min)+':'+this.formatVal(seg);
  },
  
  addCellToTablaBar : function(cant)
  {
    var i=0;
    for (i = 0; i < cant; i++)
    {
      this.desk.tablaBar.rows[0].insertCell(this.desk.tablaBar.rows[0].cells.length);
    }
  },
  
  addObjToTablaBar : function(obj)
  {
    var size = this.desk.tablaBar.rows[0].cells.length;
    this.desk.tablaBar.rows[0].insertCell(size);
    this.desk.tablaBar.rows[0].cells[size-1].appendChild(obj);
    return size-1;
  },
  
  adjWidth : function()
  {
    var lng = desktop.desk.tablaBar.rows[0].cells.length;
    var ix = 0;
    var contador=0;
    for (ix = 2; ix <= lng-1; ix++)
    {
      if (!desktop.nullDiv[ix])
      {
        contador++;
      }
    }
    var widthCalc = parseInt((desktop.xMax-50)/(lng - contador),10);
    var celda = 0;
    for(celda=2; celda < lng-1; celda++)
    {
      if (desktop.nullDiv[celda])
      {
        var o = desktop.desk.tablaBar.rows[0].cells[celda].firstChild;
        if(widthCalc > o.widthNominal)
        {
          widthCalc = o.widthNominal;
        }
        o.actualWidth = widthCalc;
	    var puntos ='';	        
        if(o.actualWidth < 80)
        {
           o.actualWidth = 80;
           puntos ='...';
        }
        var nl = parseInt(o.actualWidth / 10,10);
        var t = o.txt;
        
        if (nl >= t.length)
        {
          nl = t.length;
        }
        t = t.substring(0, nl);
        o.tabla.rows[0].cells[1].innerHTML = t+puntos;
        o.style.width = o.actualWidth + 'px';
      }
    }
  },
  
  addMinWindow : function(txt, functEnable, functDisable, functRemove)
  {
  	desktop.txtMinWin = txt;
  	desktop.functEnable = functEnable;
  	desktop.functDisable = functDisable;
  	desktop.functRemove = functRemove;
    var minWindow = document.createElement('div');
    minWindow.sts = true;
    minWindow.style.borderStyle ='inset';
    minWindow.functEnable = new Function(functEnable);
    minWindow.functDisable = new Function(functDisable);
    minWindow.functRemove = new Function(functRemove);
    minWindow.style.width ='120px';
    minWindow.style.height ='20px';
    minWindow.actualWidth = 120;
    minWindow.widthNominal = 120;
    minWindow.style.display='block';
    minWindow.txt = txt;
    minWindow.img1 = document.createElement('img');
    minWindow.img1.style.width = '14px';
    minWindow.img1.style.height = '14px';
    minWindow.img1.src = this.pathImgMinWindow;
    minWindow.img2 = document.createElement('img');
    minWindow.img2.style.width = '14px';
    minWindow.img2.style.height = '14px';
    minWindow.img2.src = this.pathImgMinWindowClose;
    minWindow.tabla = document.createElement('table');
    minWindow.tabla.setAttribute("border","0");
    minWindow.tabla.setAttribute("cellPadding","0");
    minWindow.tabla.setAttribute("cellSpacing","0");
    minWindow.tabla.insertRow(0);
    minWindow.tabla.rows[0].insertCell(0);
    minWindow.tabla.rows[0].insertCell(1);
    minWindow.tabla.rows[0].insertCell(2);
    minWindow.tabla.rows[0].cells[0].appendChild(minWindow.img1);
    minWindow.tabla.rows[0].cells[2].appendChild(minWindow.img2);
    minWindow.tabla.rows[0].cells[1].innerHTML = txt;
    minWindow.tabla.rows[0].cells[0].style.width = '12%';
    minWindow.tabla.rows[0].cells[1].style.width = '76%';
    minWindow.tabla.rows[0].cells[2].style.width = '12%';
    minWindow.tabla.rows[0].cells[0].hAlign = 'right';
    minWindow.tabla.rows[0].cells[1].style.color = desktop.fontMinWin.color;
    minWindow.tabla.rows[0].cells[1].style.fontWeight = desktop.fontMinWin.fontWeight;
    minWindow.tabla.rows[0].cells[1].style.fontSize = desktop.fontMinWin.fontSize+'px';
    minWindow.tabla.rows[0].cells[1].style.fontFamily = desktop.fontMinWin.family;
    minWindow.appendChild(minWindow.tabla);
    minWindow.isClickClose = false;
    var size = this.addObjToTablaBar(minWindow);
    minWindow.size = size;
    desktop.nullDiv[size]=true;
    desktop.adjWidth();
    minWindow.disable = function()
    {
      desktop.minWindowDisable(minWindow);
    }
    minWindow.hide = function()
    {
      desktop.minWindowHide(minWindow);
    }
    minWindow.enable = function()
    {
      desktop.minWindowEnable(minWindow);
    }
    minWindow.show = function()
    {
      desktop.minWindowShow(minWindow);
    }
    minWindow.close = function()
    {
      desktop.minWindowClose(minWindow);
    }
    minWindow.onclick = function()
    {
      if (!minWindow.isClickClose)
      {
        if (minWindow.sts)
        {
          minWindow.disable();
        }
        else
        {
          minWindow.enable();
        }
      }
      else
      {
        minWindow.isClickClose=false;
      }
    }
    minWindow.img2.onclick = function()
    {
      minWindow.isClickClose=true;
      minWindow.hide();
    }
    return minWindow;
  },
  
  minWindowDisable : function(minWindow)
  {
    minWindow.sts	= false;
    minWindow.style.borderStyle ='outset';
    minWindow.tabla.rows[0].cells[1].style.fontWeight = 'normal';
    minWindow.functDisable();
  },
  minWindowHide : function(minWindow)
  {
    minWindow.style.display = 'none';
    minWindow.sts	= false;
    minWindow.style.borderStyle ='outset';
    minWindow.tabla.rows[0].cells[1].style.fontWeight = 'normal';
    minWindow.functDisable();
  },
  minWindowEnable : function(minWindow)
  {
    minWindow.sts = true;
    minWindow.style.borderStyle ='inset';
    minWindow.tabla.rows[0].cells[1].style.fontWeight = desktop.fontMinWin.fontWeight;
    minWindow.functEnable();
  },
  minWindowShow : function(minWindow)
  {
    minWindow.style.display = 'block';
    minWindow.sts = true;
    minWindow.style.borderStyle ='inset';
    minWindow.tabla.rows[0].cells[1].style.fontWeight = desktop.fontMinWin.fontWeight;
  },
  minWindowClose : function(minWindow)
  {
    minWindow.functRemove();
    minWindow.onclick = new Function('');
    var size = minWindow.size;
    desktop.removeObjToTablaBar(size);
    var i = 0;
    var ne = 0;
    var l = desktop.desk.tablaBar.rows[0].cells.length;
    for (i = 2; i < l - 1; i++)
    {
      var ob = desktop.desk.tablaBar.rows[0].cells[i].firstChild;
      if (ob == null)
      {
        desktop.nullDiv[i] = false;
        ne++;
      }
    }
    var value = l - ne;
    var widthCalc = parseInt((desktop.xMax - 50) / value,10);
    if(widthCalc > minWindow.widthNominal)
    {
      widthCalc = minWindow.widthNominal;
    }
    
    var celda = 0;
    for (celda = 2; celda < l - 1; celda++)
    {
      var o = desktop.desk.tablaBar.rows[0].cells[celda].firstChild;
      if (desktop.nullDiv[celda])
      {
        if (o.actualWidth > 60)
        {
          o.actualWidth = widthCalc;
          o.style.width = o.actualWidth + 'px';
        }
        var nl = parseInt(widthCalc / 10,10);
        var t = o.txt;

        if (nl >= t.length)
        {
          nl = t.length;
        }
        t = t.substring(0, nl);
        o.tabla.rows[0].cells[1].innerHTML = t;
      }
    }
  },
  addDataText : function(dataText)
  {
  var l = this.desk.tablaDatos.rows[0].cells.length;
	this.desk.tablaDatos.rows[0].insertCell(l);
	this.desk.tablaDatos.rows[0].insertCell(l+1);
	this.desk.tablaDatos.rows[0].cells[l].innerHTML = dataText;	
	//this.desk.tablaDatos.rows[0].cells[l].style.color = dataText.color;
  this.desk.tablaDatos.rows[0].cells[l].style.fontFamily = this.propertyPanel.fontFamily;
	this.desk.tablaDatos.rows[0].cells[l].style.fontSize = this.propertyPanel.fontSize+'px';
	this.desk.tablaPrinc.rows[0].cells[0].align = 'left';
	
	this.desk.tablaDatos.rows[0].cells[l+1].style.height = this.propertyPanel.fontSize+15+'px';
	this.desk.tablaDatos.rows[0].cells[l].style.height = this.propertyPanel.fontSize+15+'px';
	this.desk.tablaDatos.rows[0].cells[l].align='left';
	var t = this.desk.tablaDatos.rows[0].cells.length;
	for(i=0; i < t; i++)
	{
		if((i%2!=0) && !(this.desk.tablaDatos.rows[0].cells[i].isObj))
		{
		  this.desk.tablaDatos.rows[0].cells[i].style.width='20px';
		  this.desk.tablaDatos.rows[0].cells[i].align='center';
		  this.desk.tablaDatos.rows[0].cells[i].innerHTML='|';
		  
		}
	}
	this.desk.tablaDatos.rows[0].cells[t-1].style.width='5px';
	this.desk.tablaDatos.rows[0].cells[t-1].innerHTML='';
  },
  
  addDataObj : function(text,dataObj)
  {
  	var l = this.desk.tablaDatos.rows[0].cells.length;
	this.desk.tablaDatos.rows[0].insertCell(l);
	this.desk.tablaDatos.rows[0].insertCell(l+1);
	this.desk.tablaDatos.rows[0].insertCell(l+2);
	this.desk.tablaDatos.rows[0].insertCell(l+3);
	this.desk.tablaDatos.rows[0].cells[l+1].innerHTML = text;
	this.desk.tablaDatos.rows[0].cells[l+1].isObj = true;
	this.desk.tablaDatos.rows[0].cells[l+1].appendChild(dataObj);
	this.desk.tablaDatos.rows[0].cells[l+1].style.height = this.propertyPanel.fontSize+15+'px';
	this.desk.tablaDatos.rows[0].cells[l].style.width='5px';
  },
  
  applyDataAttrib : function(tAlign,colorText,fontFamily,fontSize,fullWidth)
  {
  	desktop.fullDataBar = fullWidth;
  	desktop.desk.containerTablaDatos.rows[0].cells[0].align = tAlign;
	var l = 0;
	var t = this.desk.tablaDatos.rows[0].cells.length;
	for (l = 0; l < t; l++) 
	{
	  //desktop.desk.tablaDatos.rows[0].cells[l].style.color = colorText;
	  desktop.desk.tablaDatos.rows[0].cells[l].style.fontFamily = fontFamily;
	  desktop.desk.tablaDatos.rows[0].cells[l].style.fontSize = fontSize + 'px';
	  desktop.desk.tablaDatos.rows[0].cells[l].style.height = fontSize+15+'px';
	}
	desktop.adjTablaDatos();
  },
  adjTablaDatos : function()
  {
  	if (desktop.fullDataBar) 
	{
	  desktop.desk.containerTablaDatos.rows[0].cells[0].style.width = desktop.xMax+ 'px';
	}
  },  
  
  destroy : function()
  {
	if(desktop.desk!=null)
	{
	  desktop.hideAllPanelMenu();	
	  var ti =	desktop.idIcons.length;
	  for(var i=0; i<ti; i++)
	  {
	  	desktop.desk.icons[desktop.idIcons[i]].tabla.rows[0].cells[0].removeChild(desktop.desk.icons[desktop.idIcons[i]].divIcon);  
	  	desktop.desk.icons[desktop.idIcons[i]].removeChild(desktop.desk.icons[desktop.idIcons[i]].tabla);
	  	document.body.removeChild(desktop.desk.icons[desktop.idIcons[i]]);
	  }
	  desktop.divFondo.removeChild(desktop.imgDesk);
	  desktop.desk.tablaPrinc.rows[0].cells[0].removeChild(desktop.divFondo);  	  
	  desktop.desk.containerTablaDatos.rows[0].cells[0].removeChild(desktop.desk.tablaDatos);
	  desktop.desk.tablaPrinc.rows[0].cells[0].removeChild(desktop.desk.containerTablaDatos);
	  desktop.desk.divTablaBar.iconDiv.removeChild(desktop.desk.divTablaBar.iconDiv.img);
	  desktop.desk.divTablaBar.tabla.rows[0].cells[0].removeChild(desktop.desk.divTablaBar.iconDiv);
	  desktop.desk.divTablaBar.removeChild(desktop.desk.divTablaBar.tabla);
	  desktop.desk.tablaBar.rows[0].cells[0].removeChild(desktop.desk.divTablaBar);
	  desktop.desk.tablaCont.rows[0].cells[0].removeChild(desktop.desk.tablaBar);
	  desktop.desk.tablaPrinc.rows[1].cells[0].removeChild(desktop.desk.tablaCont);
	  desktop.desk.removeChild(desktop.desk.tablaPrinc);
	  desktop.desk.icons.splice(0,desktop.desk.icons.length); 	
	  desktop.idIcons.splice(0, ti);	  	  
	  document.body.removeChild(desktop.desk);
	  desktop.isDestroy = true;
	} 
	else
      desktop.isDestroy = false;	
  },
  create : function()
  {
  	this.destroy();
    this.desk = document.createElement('div');
    this.nameComponent = 'desktop';
    this.desk.panelMenu = new Array();
    this.desk.idsPanelsMenu = new Array();
    this.desk.style.position='absolute';
    this.desk.style.display='block';
    this.desk.style.borderWidth='0px';
    this.desk.style.borderSize='0px';
    this.desk.style.left='0px';
    this.desk.style.top='0px';
    this.desk.style.fontSize='0px';
    document.body.appendChild(this.desk);
    this.desk.display = 'block';
    this.desk.icons = new Array();
    this.desk.tablaPrinc = document.createElement('table');
    this.desk.tablaPrinc.setAttribute("border","0");
    this.desk.tablaPrinc.setAttribute("cellPadding","0");
    this.desk.tablaPrinc.setAttribute("cellSpacing","0");
    this.desk.tablaPrinc.insertRow(0);
    this.desk.tablaPrinc.insertRow(1);
    this.desk.tablaPrinc.style.borderWidth='0px';
    this.desk.tablaPrinc.style.borderSize='0px';
    this.desk.tablaPrinc.style.borderStyle='none';
    this.desk.tablaPrinc.rows[0].insertCell(0);
    this.desk.tablaPrinc.rows[1].insertCell(0);
    desktop.captureDimension();
	this.setImage();
    this.desk.appendChild(desktop.desk.tablaPrinc);
    this.desk.tablaCont = document.createElement('table');
    this.desk.tablaCont.setAttribute("border","0");
    this.desk.tablaCont.setAttribute("cellPadding","0");
    this.desk.tablaCont.setAttribute("cellSpacing","0");
    this.desk.tablaCont.style.borderWidth='0px';
    this.desk.tablaCont.insertRow(0);
    this.desk.tablaCont.rows[0].insertCell(0);
    this.desk.tablaCont.rows[0].insertCell(1);
    this.desk.tablaCont.rows[0].cells[0].style.width = '90%';
    this.desk.tablaCont.rows[0].cells[1].style.width = '10%';
    this.desk.tablaCont.rows[0].cells[1].style.color = "white";
    this.setSize(desktop.xMax,desktop.yMax);
    this.desk.tablaPrinc.rows[1].cells[0].appendChild(desktop.desk.tablaCont);
    this.desk.tablaBar = document.createElement('table');
    this.desk.tablaBar.setAttribute("border","0");
    this.desk.tablaBar.setAttribute("cellPadding","0");
    this.desk.tablaBar.setAttribute("cellSpacing","0");
    this.desk.tablaBar.style.borderWidth='0px';
    this.desk.tablaBar.insertRow(0);
    this.addCellToTablaBar(3);
    this.desk.tablaBar.rows[0].cells[0].style.height = '25px';
    this.desk.tablaBar.rows[0].cells[0].style.lineHeight = '25px';
    this.desk.tablaBar.rows[0].cells[0].vAlign = 'middle';
    this.desk.tablaBar.rows[0].cells[0].style.width = this.widthImgButton+'px';
    this.desk.tablaBar.rows[0].cells[0].align = 'left';
    this.desk.divTablaBar = document.createElement('div');
    this.desk.divTablaBar.style.borderRadius='1em';
    this.desk.divTablaBar.style.display = 'block';
    this.desk.divTablaBar.style.cursor = 'pointer';
    this.desk.divTablaBar.style.height = '20px';
    this.desk.divTablaBar.tabla = document.createElement('table');
    this.desk.divTablaBar.tabla.insertRow(0);
    this.desk.divTablaBar.tabla.rows[0].insertCell(0);
    this.desk.divTablaBar.tabla.rows[0].insertCell(1);
    this.desk.divTablaBar.tabla.rows[0].insertCell(2);
    this.desk.divTablaBar.tabla.style.borderWidth = '0px';
    this.desk.divTablaBar.tabla.setAttribute("border","0");
    this.desk.divTablaBar.tabla.setAttribute("cellPadding","0");
    this.desk.divTablaBar.tabla.setAttribute("cellSpacing","0");
    this.desk.divTablaBar.tabla.rows[0].cells[0].style.width = parseInt(this.widthImgButton,10)*0.25+'px';
    this.desk.divTablaBar.tabla.rows[0].cells[1].style.width = parseInt(this.widthImgButton,10)*0.15+'px';
    this.desk.divTablaBar.tabla.rows[0].cells[2].style.width = parseInt(this.widthImgButton,10)*0.60+'px';
    this.desk.divTablaBar.tabla.rows[0].cells[0].align='right';
    this.desk.divTablaBar.tabla.rows[0].cells[1].align='center';
    this.desk.divTablaBar.tabla.rows[0].cells[2].align='left';
    this.desk.divTablaBar.tabla.rows[0].cells[2].style.height='21px';
    this.desk.divTablaBar.tabla.rows[0].cells[2].style.lineHeight='21px';
    this.desk.divTablaBar.tabla.rows[0].cells[2].vAlign='top';
    this.desk.divTablaBar.iconDiv = document.createElement('div');
    this.desk.divTablaBar.iconDiv.img = document.createElement('img');
    this.desk.divTablaBar.iconDiv.img.src = this.pathIconButton;
    this.desk.divTablaBar.iconDiv.img.style.width = '21px';
    this.desk.divTablaBar.iconDiv.img.style.height = '21px';
    this.desk.divTablaBar.iconDiv.img.style.borderWidth = '0px';
    this.desk.divTablaBar.iconDiv.style.borderRadius='1em';
    this.desk.divTablaBar.iconDiv.style.display = 'block';
    this.desk.divTablaBar.iconDiv.style.cursor = 'pointer';
    this.desk.divTablaBar.iconDiv.appendChild(this.desk.divTablaBar.iconDiv.img);
    this.desk.divTablaBar.tabla.rows[0].cells[0].appendChild(this.desk.divTablaBar.iconDiv);
	this.desk.divTablaBar.appendChild(this.desk.divTablaBar.tabla);    
    this.desk.tablaBar.rows[0].cells[0].appendChild(this.desk.divTablaBar);
    this.setDimensionButton(this.widthImgButton,this.heightImgButton);
    this.setUpButton();
	this.desk.containerTablaDatos = document.createElement('table');
	this.desk.containerTablaDatos.setAttribute("border","0");
    this.desk.containerTablaDatos.setAttribute("cellPadding","0");
    this.desk.containerTablaDatos.setAttribute("cellSpacing","0");
    this.desk.containerTablaDatos.insertRow(0);
	this.desk.containerTablaDatos.rows[0].insertCell(0);
	this.desk.containerTablaDatos.rows[0].cells[0].align='left';
	this.desk.containerTablaDatos.rows[0].cells[0].style.backgroundImage = desktop.pathImgBar;
	this.desk.tablaDatos = document.createElement('table');
	this.desk.tablaDatos.setAttribute("border","0");
    this.desk.tablaDatos.setAttribute("cellPadding","0");
    this.desk.tablaDatos.setAttribute("cellSpacing","0");
    this.desk.tablaDatos.insertRow(0);
    
	this.desk.containerTablaDatos.rows[0].cells[0].appendChild(desktop.desk.tablaDatos);
	this.desk.tablaPrinc.rows[0].cells[0].appendChild(desktop.desk.containerTablaDatos);
	
	this.desk.tablaPrinc.rows[0].onclick = function(e)
    {
      desktop.hideAllPanelMenu();
    }
    this.desk.divTablaBar.onmousedown = function(e)
    {	
      desktop.setDownButton();
      desktop.onClickButtonStart();
    }
    this.desk.divTablaBar.onmouseup = function(e)
    {
      desktop.setUpButton();
    }
    this.desk.divTablaBar.onmouseover = function(e)
    {
      desktop.setUpButton();
    }
	this.desk.divTablaBar.style.height = this.heightImgButton+'px';
	this.desk.divTablaBar.style.lineHeight = this.heightImgButton+'px';
    this.desk.tablaCont.rows[0].cells[0].appendChild(desktop.desk.tablaBar);
    if (document.all)
    {
      document.body.onresize = function()
      {
        desktop.dimension();
      }
    }
    else
    {
      if (window.addEventListener)
      {
        window.addEventListener("resize", desktop.dimension, false);
        window.onresize = desktop.dimension();
      }
    }
    this.setFontPropertyDate('arial',10,'bold','white');
    this.addFunctToTimer('desktop.setDateTimeToBar()');
    this.setTimer(1000);
    return this;
  },
  
  setIconInitButton : function(iconButton)
  {
    this.pathIconButton = iconButton;
    this.desk.divTablaBar.iconDiv.img.src = this.pathIconButton;
  },
  
  captureDimension : function()
  {
      desktop.xMax = document.documentElement.clientWidth;
      desktop.yMax = document.documentElement.clientHeight - desktop.barHeight - 21 ;
  },
  createPanelMenu : function(structMenu)
  {
    structMenu.subStruct = new Array();
    var i=0;
    for(i=0; i<structMenu.linkIdPanel.length; i++)
    {
      structMenu.subStruct[i]=true;
      if (structMenu.linkIdPanel[i]==0)
      {
        structMenu.subStruct[i]=false;
      }
    }
    var x = 1;
    var y = 10;
    var h = 0;
    var w = 0;
    this.desk.idsPanelsMenu[desktop.desk.idsPanelsMenu.length] = structMenu.idPanelMenu;
    this.desk.panelMenu[structMenu.idPanelMenu] = new Object();
    this.desk.panelMenu[structMenu.idPanelMenu].imgArrow = new Array();
    this.desk.panelMenu[structMenu.idPanelMenu].iconMenuOption = new Array();
    this.desk.panelMenu[structMenu.idPanelMenu].struct = structMenu;
    this.desk.panelMenu[structMenu.idPanelMenu].struct.x = x;
    this.desk.panelMenu[structMenu.idPanelMenu].struct.y = y;
    this.desk.panelMenu[structMenu.idPanelMenu].struct.h = h;
    this.desk.panelMenu[structMenu.idPanelMenu].struct.w = w;
    this.desk.panelMenu[structMenu.idPanelMenu].struct.exeFunct = new Array();
    this.desk.panelMenu[structMenu.idPanelMenu].panel = document.createElement('div');
    this.desk.panelMenu[structMenu.idPanelMenu].panel.style.borderRadius ='1em';
    this.desk.panelMenu[structMenu.idPanelMenu].panel.style.zIndex = 5000;
    this.desk.panelMenu[structMenu.idPanelMenu].panel.isShow = false;
    this.desk.panelMenu[structMenu.idPanelMenu].panel.style.position='absolute';
    this.desk.panelMenu[structMenu.idPanelMenu].panel.style.display ='none';
    this.desk.panelMenu[structMenu.idPanelMenu].panel.style.fontFamily = desktop.propertyPanel.fontFamily;
    this.desk.panelMenu[structMenu.idPanelMenu].panel.style.color = desktop.propertyPanel.fontColor;
    this.desk.panelMenu[structMenu.idPanelMenu].panel.style.fontSize = desktop.propertyPanel.fontSize+'px';
    this.desk.panelMenu[structMenu.idPanelMenu].panel.style.fontWeight = desktop.propertyPanel.fontWeight;
    this.desk.panelMenu[structMenu.idPanelMenu].panel.style.borderWidth = desktop.propertyPanel.borderWidth+'px';
    this.desk.panelMenu[structMenu.idPanelMenu].panel.style.backgroundImage = desktop.propertyPanel.pathImgPanel;
    this.desk.panelMenu[structMenu.idPanelMenu].panel.style.borderStyle = desktop.propertyPanel.borderStyle;
    this.desk.panelMenu[structMenu.idPanelMenu].tablaPanel = document.createElement('table');
    this.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.setAttribute("border","0");
    this.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.setAttribute("cellPadding","0");
    this.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.setAttribute("cellSpacing","0");
    this.desk.panelMenu[structMenu.idPanelMenu].panel.appendChild(this.desk.panelMenu[structMenu.idPanelMenu].tablaPanel);
    this.desk.divTablaBar.onclick = function(e)
    {
      var initId = desktop.desk.idsPanelsMenu[0];
      if (!desktop.desk.panelMenu[initId].panel.isShow)
      {
        desktop.showPanelMenu(initId);
      }
      else
      {
        desktop.hideAllPanelMenu();
      }
    }
    var cant = 0;
    h = structMenu.captions.length*desktop.propertyPanel.heightCell+3;
    w = desktop.maxLength(structMenu.captions)*(parseInt(desktop.propertyPanel.fontSize/2,10)) + 2*desktop.propertyPanel.iconSize + 20;
    
    for(cant=0; cant<structMenu.captions.length; cant++)
    {
      desktop.desk.panelMenu[structMenu.idPanelMenu].imgArrow[cant] = document.createElement('img');
      desktop.desk.panelMenu[structMenu.idPanelMenu].iconMenuOption[cant] = document.createElement('img');
      desktop.desk.panelMenu[structMenu.idPanelMenu].imgArrow[cant].src = this.pathImgArrow;
      desktop.desk.panelMenu[structMenu.idPanelMenu].imgArrow[cant].style.width = '10px';
      desktop.desk.panelMenu[structMenu.idPanelMenu].imgArrow[cant].style.height = '10px';
      desktop.desk.panelMenu[structMenu.idPanelMenu].iconMenuOption[cant].src = desktop.desk.panelMenu
      [structMenu.idPanelMenu].struct.icons[cant];
      desktop.desk.panelMenu[structMenu.idPanelMenu].iconMenuOption[cant].style.width = desktop.propertyPanel.iconSize+'px';
      desktop.desk.panelMenu[structMenu.idPanelMenu].iconMenuOption[cant].style.height = desktop.propertyPanel.iconSize+'px';
      desktop.desk.panelMenu[structMenu.idPanelMenu].struct.exeFunct[cant] = new Function(structMenu.functs[cant]);
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.insertRow(cant);
      var opHeight = (desktop.propertyPanel.heightCell-4)+'px';
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divCaption = document.createElement('div');
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divCaption.align ='left';
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divCaption.style.height = opHeight;
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divCaption.style.lineHeight = opHeight;
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divCaption.vAlign ='middle';
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divCaption.innerHTML = structMenu.captions[cant];
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divIcon = document.createElement('div');
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divIcon.align ='center';
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divIcon.style.height = opHeight;
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divIcon.style.lineHeight = opHeight;
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divIcon.vAlign ='middle';
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divIcon.style.borderTopLeftRadius='1em';
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divIcon.style.borderBottomLeftRadius='1em';
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divFlecha = document.createElement('div');
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divFlecha.align ='center';
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divFlecha.style.height = opHeight;
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divFlecha.style.lineHeight = opHeight;
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divFlecha.vAlign ='middle';
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divFlecha.style.borderTopRightRadius='1em';
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divFlecha.style.borderBottomRightRadius='1em';
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].insertCell(0);
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].insertCell(1);
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].insertCell(2);
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].cells[0].style.width = (desktop.propertyPanel.iconSize+20)+'px';
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].cells[0].style.height = desktop.propertyPanel.heightCell+'px';
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].cells[0].align ='center';
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].cells[1].style.width = w+'px';
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].cells[2].style.width = desktop.propertyPanel.iconSize+'px';
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].cells[2].style.height = desktop.propertyPanel.heightCell+'px';
	    desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].cells[0].appendChild(desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divIcon);	
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].cells[1].appendChild(desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divCaption);
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].cells[2].appendChild(desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divFlecha);
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].row = cant;
      
      if (!desktop.desk.panelMenu[structMenu.idPanelMenu].struct.enableOption[cant])
      {
      	desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divCaption.innerHTML = 'Sin Acceso';
        desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].style.color = desktop.propertyPanel.fontColorDisable;
      }
      if (desktop.desk.panelMenu[structMenu.idPanelMenu].struct.icons[cant] != '')
      {
      	if (!desktop.desk.panelMenu[structMenu.idPanelMenu].struct.enableOption[cant])
      	  desktop.desk.panelMenu[structMenu.idPanelMenu].iconMenuOption[cant].src='images/checked-out.png';
      	desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divIcon.appendChild(desktop.desk.panelMenu[structMenu.idPanelMenu].iconMenuOption[cant]);  
      }
      
      if(desktop.desk.panelMenu[structMenu.idPanelMenu].struct.subStruct[cant])
      {
      	desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].divFlecha.appendChild(desktop.desk.panelMenu[structMenu.idPanelMenu].imgArrow[cant]);
      }
      
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].onclick = function(e)
      {
        if (desktop.desk.panelMenu[structMenu.idPanelMenu].struct.enableOption[this.row])
        {
          desktop.desk.panelMenu[structMenu.idPanelMenu].struct.exeFunct[this.row]();
          if (!desktop.desk.panelMenu[structMenu.idPanelMenu].struct.subStruct[this.row])
            desktop.hideAllPanelMenu();
        }
      }
      
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].onmouseover = function(e)
      {
        if (desktop.desk.panelMenu[structMenu.idPanelMenu].struct.enableOption[this.row])
        {	
          this.style.cursor='pointer';	
          desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[this.row].style.color = desktop.propertyPanel.fontColorSelected;
          this.divCaption.style.backgroundImage = desktop.pathImgBarSelected;
          this.divIcon.style.backgroundImage = desktop.pathImgBarSelected;
          this.divFlecha.style.backgroundImage = desktop.pathImgBarSelected;
          if (desktop.desk.panelMenu[structMenu.idPanelMenu].struct.subStruct[this.row])
          {
            var i = 0;
            var thisLevel = desktop.desk.panelMenu[structMenu.idPanelMenu].struct.level;
            desktop.hidePanelMenuFromLevel(thisLevel);
            for (i = 0; i < desktop.desk.panelMenu[structMenu.idPanelMenu].struct.linkIdPanel.length; i++)
            {
              var iPM = desktop.desk.panelMenu[structMenu.idPanelMenu].struct.linkIdPanel[i];
              if (desktop.desk.panelMenu[iPM].struct.level > thisLevel)
              {
                desktop.hidePanelMenu(iPM);
              }
            }
            var idPM = desktop.desk.panelMenu[structMenu.idPanelMenu].struct.linkIdPanel[this.row];
            desktop.showPanelMenu(idPM);
          }
          else
          {
            var thisLevel = desktop.desk.panelMenu[structMenu.idPanelMenu].struct.level;
            desktop.hidePanelMenuFromLevel(thisLevel);
          }
        }
      }
      desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].onmouseout = function(e)
      {
      	this.style.cursor='default';
        this.divCaption.style.backgroundImage = '';
        this.divIcon.style.backgroundImage = '';
        this.divFlecha.style.backgroundImage = '';
        if (!desktop.desk.panelMenu[structMenu.idPanelMenu].struct.enableOption[this.row])
        {
          desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[this.row].style.color = desktop.propertyPanel.fontColorDisable;
        }
        else
        {
          desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[this.row].style.color = desktop.propertyPanel.fontColor;
        }
      }
    }
    if(structMenu.level == 0)
    {
      if (document.all)
      {
        y = desktop.yMax - h + 12;
      }
      else
      {
        y = desktop.yMax - h + 6 - 2*(desktop.propertyPanel.borderWidth);
      }
    }
    else
    {
      var parentStruct = this.desk.panelMenu[structMenu.idPanelMenu].struct.parentStruct;
      var opc = this.desk.panelMenu[structMenu.idPanelMenu].struct.parentOption;
      var totOpc = this.desk.panelMenu[structMenu.idPanelMenu].struct.captions.length;
      var idPMn = parentStruct.idPanelMenu;
      var objPM = desktop.desk.panelMenu[idPMn].struct;
      x = objPM.x + objPM.w + 2 * desktop.propertyPanel.borderWidth;
      y = objPM.y - (desktop.propertyPanel.heightCell*(totOpc - opc - 1));
    }
    this.desk.panelMenu[structMenu.idPanelMenu].struct.x = x;
    this.desk.panelMenu[structMenu.idPanelMenu].struct.y = y;
    this.desk.panelMenu[structMenu.idPanelMenu].struct.h = h;
    this.desk.panelMenu[structMenu.idPanelMenu].struct.w = w;
    this.desk.panelMenu[structMenu.idPanelMenu].panel.style.left = x+'px';
    this.desk.panelMenu[structMenu.idPanelMenu].panel.style.top = y +'px';
    this.desk.panelMenu[structMenu.idPanelMenu].panel.style.width = 3+ w+'px';
    this.desk.panelMenu[structMenu.idPanelMenu].panel.style.height = h+'px';
    document.body.appendChild(this.desk.panelMenu[structMenu.idPanelMenu].panel);
  }, 
  dimension : function()
  {
	desktop.captureDimension();
    desktop.setSize(desktop.xMax,desktop.yMax);
    if(desktop.desk.tablaBar.rows[0].cells.length > 3)
    {
      desktop.adjWidth();
    }
    var x = 0;
    var y = 0;
    var h = 0;
    var cant = 0;
    var id = desktop.desk.idsPanelsMenu.length;
    if (id > 0)
    {
      var lx = desktop.desk.panelMenu[id-1].struct.captions.length;
      for (cant = 0; cant < id; cant++)
      {
        var idPanelMenu = desktop.desk.idsPanelsMenu[cant];
        if (desktop.desk.panelMenu[idPanelMenu].struct.level == 0)
        {
          h = desktop.desk.panelMenu[idPanelMenu].struct.captions.length*desktop.propertyPanel.heightCell;
          if (document.all)
          {
            y = desktop.yMax - h + 14;
          }
          else
          {
            y = desktop.yMax - h + 20 - 2*desktop.propertyPanel.borderWidth;
          }
        }
        else
        {
          var parentStruct = desktop.desk.panelMenu[idPanelMenu].struct.parentStruct;
          var opc = desktop.desk.panelMenu[idPanelMenu].struct.parentOption;
          var totOpc = desktop.desk.panelMenu[idPanelMenu].struct.captions.length;
          var idPMn = parentStruct.idPanelMenu;
          var objPM = desktop.desk.panelMenu[idPMn].struct;
          x = objPM.x + objPM.w + 2 * desktop.propertyPanel.borderWidth;
          y = objPM.y - (desktop.propertyPanel.heightCell*(totOpc - opc - 1));
        }
        desktop.desk.panelMenu[idPanelMenu].struct.x = x;
        desktop.desk.panelMenu[idPanelMenu].struct.y = y;
        desktop.desk.panelMenu[idPanelMenu].panel.style.left = x+'px';
        desktop.desk.panelMenu[idPanelMenu].panel.style.top =-5+y+'px';
      }
    }
	desktop.adjTablaDatos();
	desktop.setImgDesk();
	desktop.onResizeExt();
  },
  getMouseXY : function(e)
  {
    var IE = document.all?true:false;
    if (IE)
    {
      desktop.mouseX = event.clientX;
      desktop.mouseY  = event.clientY;
    }
    else
    {
      desktop.mouseX = e.screenX;
      desktop.mouseY  = e.screenY;
    }
  },
  hidePanelMenu : function(idPanelMenu)
  {
    desktop.desk.panelMenu[idPanelMenu].panel.style.display ='none';
    desktop.desk.panelMenu[idPanelMenu].panel.isShow = false;
  },
  hideAllPanelMenu : function()
  {
    var i = 0;
    var id = desktop.desk.idsPanelsMenu.length;
    for(i=0; i<id; i++)
    {
      var idPanelMenu = desktop.desk.idsPanelsMenu[i];
      desktop.desk.panelMenu[idPanelMenu].panel.style.display = 'none';
      desktop.desk.panelMenu[idPanelMenu].panel.isShow = false;
    }
  },
  hidePanelMenuFromLevel : function(actLevel)
  {
    var i = 0;
    var id = desktop.desk.idsPanelsMenu.length;
    for(i=0; i<id; i++)
    {
      var idPanelMenu = desktop.desk.idsPanelsMenu[i];
      if (desktop.desk.panelMenu[idPanelMenu].struct.level > actLevel)
      {
        desktop.desk.panelMenu[idPanelMenu].panel.style.display = 'none';
        desktop.desk.panelMenu[idPanelMenu].panel.isShow = false;
      }
    }
  },
  maxLength : function(arrValues)
  {
    var lng = 0;
    var i = 0;
    var aux1 = '';
    var aux2 = '';
    if (arrValues.length==1)
    {
    	lng = arrValues[0].length;
    }
    else
    {
      for (i=0; i<arrValues.length-1; i++)
      {	
        aux1 = arrValues[i];
        aux2 = arrValues[i+1];
        if(aux1.length > aux2.length)
        {
          if (aux1.length > lng)
          lng = aux1.length;
        }
        else
        {
          if (aux2.length > lng)
          lng = aux2.length;
        }
      }
    }
    return lng;
  },
  move : function(e,id)
  {
    desktop.setCursor(id,'pointer');
    var xAnt = desktop.mouseX;
    var yAnt = desktop.mouseY;
    desktop.getMouseXY(e);
    var actX = desktop.desk.icons[id].posX;
    var actY = desktop.desk.icons[id].posY;
    var diffX = desktop.mouseX-xAnt;
    var diffY = desktop.mouseY-yAnt;
    desktop.setPositionIcon(id, actX + diffX, actY + diffY);
  },
  removeMinWindow : function(pos)
  {
    this.removeObjToTablaBar(pos);
  },
  removeObjToTablaBar : function(col)
  {
    var obj = this.desk.tablaBar.rows[0].cells[col].firstChild;
    this.desk.tablaBar.rows[0].cells[col].removeChild(obj);
  },

  getMinWin : function(col)
  {
	return desktop.desk.tablaBar.rows[0].cells[col].firstChild;	  
  },
  showPanelMenu : function(idPanelMenu)
  {
    desktop.desk.panelMenu[idPanelMenu].panel.style.display ='block';
    desktop.desk.panelMenu[idPanelMenu].panel.isShow = true;
  },
  setTimer : function(time)
  {
    setInterval("desktop.exeTimer()",time);
  },
  setDateTimeToBar : function()
  {
    desktop.desk.tablaCont.rows[0].cells[1].innerHTML = desktop.getTime();
  },
  setFontPropertyDate : function(family,size,weight,color)
  {
    desktop.desk.tablaCont.rows[0].cells[1].style.fontFamily = family;
    desktop.desk.tablaCont.rows[0].cells[1].style.fontSize = size+'px';
    desktop.desk.tablaCont.rows[0].cells[1].style.fontWeight = weight;
    desktop.desk.tablaCont.rows[0].cells[1].style.color = color;
  },
  setObjToTablaBar : function(col,obj)
  {
    this.desk.tablaBar.rows[0].cells[col].appendChild(obj);
  },
  setPositionIcon : function(id,x,y)
  {
    this.desk.icons[id].style.left = x+'px';
    this.desk.icons[id].style.top = y+'px';
    desktop.desk.icons[id].posX = x;
    desktop.desk.icons[id].posY = y;
  },
  
  setExtOnResizeFunct : function(funct)
  {
  	desktop.onResizeExt = new Function(funct);
  },
  setIconStruct : function(structIcon)
  {
  	this.setIcon(structIcon.id,structIcon.x,structIcon.y,structIcon.pathImg,structIcon.funct,structIcon.title,structIcon.enableOption);
  },
  setIcon : function(id,x,y,image,funct,title,enableOption)
  {
  	if(enableOption)
  	{
  	  var tc = 0;	
  	  var tamIcon = 40;
  	  var newTamIcon = 40;	
  	  var maxTamIcon = 60;
  	  var sentido = true;
  	  var tamActual = 40;
  	  var sentidoX= 0;
  	  var sentidoY =0;
  	  var der = 0;
  	  var izq = 1;
  	  var arriba = 0;
  	  var abajo = 1;
  	  var iniX = 0;
  	  var iniY = 0;
  	  this.idIcons[this.idIcons.length] = id;
      this.desk.icons[id] = document.createElement('div');
      this.desk.icons[id].divIcon = document.createElement('div');
      this.desk.icons[id].imgIcon = document.createElement('img');
	    this.desk.icons[id].style.zIndex=1;
      this.desk.icons[id].style.display = 'block';
      this.desk.icons[id].style.left = x+'px';
      this.desk.icons[id].style.top = y+'px';
      this.desk.icons[id].posX = x;
      this.desk.icons[id].posY = y;
      this.desk.icons[id].style.position = 'absolute';
      this.desk.icons[id].onclick = new Function(funct);
      this.desk.icons[id].tabla = document.createElement('table');
      this.desk.icons[id].tabla.setAttribute("border","0");
      this.desk.icons[id].tabla.setAttribute("cellPadding","0");
      this.desk.icons[id].tabla.setAttribute("cellSpacing","0");
      this.desk.icons[id].tabla.insertRow(0);
      this.desk.icons[id].tabla.insertRow(1);
      this.desk.icons[id].tabla.rows[0].insertCell(0);
      this.desk.icons[id].tabla.rows[1].insertCell(0);
      this.desk.icons[id].f = new Function(funct);
      this.desk.icons[id].tabla.rows[0].cells[0].align = 'center';
      this.desk.icons[id].tabla.rows[1].cells[0].align = 'center';
      this.desk.icons[id].tabla.rows[1].cells[0].innerHTML = title;
      this.desk.icons[id].imgIcon.src=image;
      this.desk.icons[id].imgIcon.style.width  = tamIcon+'px';
      this.desk.icons[id].imgIcon.style.height = tamIcon+'px';
      this.desk.icons[id].divIcon.appendChild(this.desk.icons[id].imgIcon);
      this.desk.icons[id].tabla.rows[0].cells[0].appendChild(this.desk.icons[id].divIcon);
      this.desk.icons[id].tabla.rows[0].cells[0].style.width = (5+maxTamIcon)+'px';
      this.desk.icons[id].tabla.rows[0].cells[0].style.height = (5+maxTamIcon)+'px';   
      this.desk.icons[id].tabla.rows[1].cells[0].style.width = (5+maxTamIcon)+'px';
      this.desk.icons[id].appendChild(this.desk.icons[id].tabla);
      this.desk.icons[id].tabla.rows[1].cells[0].style.color = this.fontIcon.color;
      this.desk.icons[id].tabla.rows[1].cells[0].align ='center';
      this.desk.icons[id].tabla.rows[1].cells[0].style.fontWeight = this.fontIcon.fontWeight;
      this.desk.icons[id].tabla.rows[1].cells[0].style.fontSize = this.fontIcon.fontSize+'px';
      this.desk.icons[id].tabla.rows[1].cells[0].style.fontFamily = this.fontIcon.family;
      this.desk.icons[id].isClickDown = false;
	    this.desk.icons[id].isClickUp = true;
      document.body.appendChild(this.desk.icons[id]);
	  		  
	  desktop.desk.icons[id].imgIcon.onmousemove = function(e)
	  {
	  	desktop.setCursor(id, 'pointer');
	  	desktop.getMouseXY(e);
	  	tc=0;
	  	var w = parseInt(desktop.desk.icons[id].tabla.offsetWidth,10);	  
	  	var xl = desktop.desk.icons[id].tabla.offsetParent.offsetLeft;
	    var xr = xl + w;
	    var xm = parseInt(w/2+xl,10);
	    if(!document.all)
	    {
	      desktop.mouseX = desktop.mouseX - window.screenX;	
	    }  
	    var p = desktop.mouseX  - xl;
	    if (desktop.mouseX > xm)
	    {		 
	      p = xr - desktop.mouseX;
	    }
	    newTamIcon =  parseInt(tamIcon+p,10);  
	    	    
	    if(newTamIcon > maxTamIcon)
	      newTamIcon = maxTamIcon;
	      
	    if(newTamIcon < tamIcon)
	      newTamIcon = tamIcon  
	      
	  	tamActual = parseInt(newTamIcon,10);
	  	desktop.desk.icons[id].imgIcon.style.width  = tamActual+'px';
		desktop.desk.icons[id].imgIcon.style.height = tamActual+'px'; 
	  }
	  	
	  desktop.desk.icons[id].tabla.onmouseout = function(e)
	  {
	    desktop.setCursor(id, 'default');
	    desktop.desk.icons[id].tabla.rows[1].cells[0].style.color = desktop.textColorIcon;
	    desktop.desk.icons[id].imgIcon.style.width=tamIcon+'px';
		desktop.desk.icons[id].imgIcon.style.height=tamIcon+'px';
		newTamIcon = tamIcon;
	  }	
	  
      desktop.desk.icons[id].tabla.onmouseover = function(e)
	  {	  	
		desktop.setCursor(id, 'pointer');		
		desktop.desk.icons[id].imgIcon.style.width  = newTamIcon+'px';
		desktop.desk.icons[id].imgIcon.style.height = newTamIcon+'px';
		
		desktop.desk.icons[id].tabla.rows[1].cells[0].style.color = desktop.textColorIconSelected;
		desktop.desk.icons[id].tabla.onmousedown = function(e)
		{
			tc++;
			desktop.desk.icons[id].imgIcon.style.width=tamIcon+'px';
			desktop.desk.icons[id].imgIcon.style.height=tamIcon+'px';
        	newTamIcon = tamIcon;
			if(tc>=2)
			{	
			  tc=0;
			  desktop.desk.icons[id].f();
			}
			desktop.desk.icons[id].tabla.rows[0].cells[0].removeChild(desktop.desk.icons[id].divIcon);
			desktop.desk.icons[id].tabla.rows[1].cells[0].style.color = desktop.textColorIconSelected;
			desktop.desk.icons[id].style.zIndex=5000;
			if (desktop.desk.icons[id].isClickUp) 
			{
				desktop.desk.icons[id].tabla.rows[0].cells[0].style.backgroundImage = 'url('+image+')';
				desktop.desk.icons[id].tabla.rows[0].cells[0].style.backgroundRepeat = 'no-repeat';
				desktop.desk.icons[id].tabla.rows[0].cells[0].style.backgroundPosition = 'center';
				desktop.hideAllPanelMenu();
				desktop.getMouseXY(e);
				desktop.desk.icons[id].isClickDown = true;
			}
			desktop.desk.icons[id].isClickUp = false;
			
			document.onmouseup = function(e)
			{
				if(desktop.desk.icons[id]!=null && desktop.desk.icons[id]!=undefined)
				{
				  desktop.desk.icons[id].tabla.rows[0].cells[0].style.backgroundImage = 'url()';
				  desktop.desk.icons[id].tabla.rows[0].cells[0].style.width = (5+maxTamIcon)+'px';
        	      desktop.desk.icons[id].tabla.rows[0].cells[0].style.height = (5+maxTamIcon)+'px';
        	      desktop.desk.icons[id].tabla.rows[1].cells[0].style.width = (5+maxTamIcon)+'px';
				  desktop.desk.icons[id].isClickDown = false;
				  desktop.desk.icons[id].isClickUp = true;
				  desktop.setCursor(id, 'default');
				  desktop.desk.icons[id].style.zIndex=1;
				  desktop.desk.icons[id].tabla.rows[1].cells[0].style.color = desktop.textColorIcon;
				  desktop.desk.icons[id].tabla.rows[0].cells[0].appendChild(desktop.desk.icons[id].divIcon);
				}
			}
			
			document.onmouseover = function(e)
			{
				document.onmousemove(e);
			}
			
			document.onmousemove = function(e)
			{ 
				if(desktop.desk.icons[id]!=null && desktop.desk.icons[id]!=undefined)
				{	
				  if (desktop.desk.icons[id].isClickDown) 
				  {
					desktop.move(e, id);
				  }
				}
			}
		}
	  }	
  	}    
  },
  
  setCursor : function(id,cursor)
  {
    desktop.desk.icons[id].tabla.style.cursor = cursor;
  },
  setOnClickButtonStart : function(funct)
  {
    this.onClickButtonStart = new Function(funct);
  },
  setSize : function(x,y)
  {
    desktop.desk.tablaPrinc.rows[0].cells[0].style.width = x+'px';
    desktop.desk.tablaPrinc.rows[0].cells[0].style.height = y+'px';
    desktop.desk.tablaPrinc.rows[1].cells[0].style.width = x+'px';
    desktop.desk.tablaPrinc.rows[1].cells[0].style.height = desktop.barHeight+'px';
    desktop.desk.tablaCont.rows[0].cells[0].style.width = (x-55)+'px';
  },
  setDimensionButton : function(w,h)
  {
	this.desk.divTablaBar.style.width = w+'px';
	this.desk.divTablaBar.style.height = h+'px';
	this.desk.divTablaBar.style.lineHeight = h+'px';
	this.desk.divTablaBar.vAlign = 'middle';
  },
  setUpButton : function()
  {
	this.desk.divTablaBar.style.borderStyle = 'outset';
    this.desk.divTablaBar.style.borderWidth = '2px';
  },
  
  setDownButton : function()
  {
    this.desk.divTablaBar.style.borderStyle = 'inset';
    this.desk.divTablaBar.style.borderWidth = '2px';
  },
  
  setImgDesk : function()
  {
  	
  	if (document.all) 
	{
		this.imgDesk.style.width = (desktop.xMax) + 'px';
		this.imgDesk.style.height = (desktop.yMax*0.99) + 'px';
	}
	else 
	{
		this.imgDesk.style.width = (desktop.xMax) + 'px';
		this.imgDesk.style.height = (desktop.yMax*0.992) + 'px';
	}
  },
  setImage : function()
  {
    var obj=this.desk.tablaPrinc.rows[0].cells[0].firstChild;
	if(obj!=null)
	  this.desk.tablaPrinc.rows[0].cells[0].removeChild(obj);
	desktop.divFondo = document.createElement('div');
	desktop.divFondo.style.borderWidth='0px';
	desktop.divFondo.style.borderSize='0px';
	this.imgDesk = null;	
	this.imgDesk = document.createElement('img');
	this.imgDesk.style.borderWidth='0px';
	this.imgDesk.style.borderSize='0px';
	this.imgDesk.style.fontSize='0px';
	this.imgDesk.src =  desktop.pathImg.substr(4,desktop.pathImg.length-5);
    this.setImgDesk();	
    desktop.divFondo.style.borderWidth='0px';
    desktop.divFondo.style.fontSize='0px';
    desktop.divFondo.style.borderSize='0px';
    desktop.divFondo.style.borderWidth='0px';
    desktop.divFondo.appendChild(this.imgDesk);
    desktop.divFondo.style.display='block';
	this.desk.tablaPrinc.style.top='0px';
	this.desk.tablaPrinc.rows[0].cells[0].style.fontSize='0px';
	this.desk.tablaPrinc.rows[0].cells[0].style.borderSize='0px';
	this.desk.tablaPrinc.rows[0].cells[0].style.borderWidth='0px';
	this.desk.tablaPrinc.rows[0].cells[0].appendChild(desktop.divFondo);
	this.desk.tablaPrinc.rows[1].cells[0].style.backgroundImage = desktop.pathImgBar;
  },
  setButonInitProp : function(initText,borderColor,fontFamily,fontSize,fontColor)
  {
	this.desk.divTablaBar.style.backgroundImage = 'url('+this.pathImgButton+')';
	this.desk.divTablaBar.tabla.rows[0].cells[2].innerHTML=initText;
	this.desk.divTablaBar.style.borderColor=borderColor;
	this.desk.divTablaBar.style.fontFamily = fontFamily;
	this.desk.divTablaBar.style.fontSize = fontSize+'px';
	this.desk.divTablaBar.style.fontWeight = 'bold';
    this.desk.divTablaBar.style.color=fontColor;
  },
  
  setObjAttrib : function(objAttr,env)
  {
    this.pathImg = 'url(images/'+objAttr.BgImg.deskWallPaper[env]+')';
	this.textColorIconSelected=objAttr.Color.textBarIconSelected[env];
	this.textColorIcon=objAttr.Color.textBarIcon[env];
	for(i=0; i<this.idIcons.length;i++)
	{
	  this.desk.icons[this.idIcons[i]].tabla.rows[1].cells[0].style.color = this.textColorIcon;
	}  
    this.pathImgBar = 'url(images/'+objAttr.BgImg.taskBarWallPaper[env]+')';
    this.pathImgButton = 'images/bg/'+objAttr.BgImg.initButtonWallPaper[env];
    this.widthImgButton = objAttr.Size.widthImgButtonDesk[env];
    this.heightImgButton = objAttr.Size.heightImgButtonDesk[env];
    this.pathImgMinWindow = 'images/'+objAttr.BgImg.deskImgMinWindow[env];
    this.pathImgArrow = 'images/'+objAttr.BgImg.deskImgArrow[env];
    this.pathImgMinWindowClose = 'images/'+objAttr.BgImg.deskMinWindowClose[env];
    this.pathImgBarSelected = 'url(images/bg/'+objAttr.BgImg.deskImgBarSelected[env]+')';
    this.barHeight = objAttr.Size.deskBarHeight[env];
	  this.fontMinWin.color = objAttr.Color.deskFontMinWincolor[env];
    this.fontMinWin.fontWeight = objAttr.Border.deskFontMinWinfontWeight[env];
    this.fontMinWin.fontSize = objAttr.Size.deskFontMinWinfontSize[env];
    this.fontMinWin.family = objAttr.Font.deskFontMinWinfamily[env];
	  this.fontIcon.color = objAttr.Color.textBarIcon[env];
    this.fontIcon.fontWeight = objAttr.Border.deskFontMinWinfontWeight[env];
    this.fontIcon.fontSize = objAttr.Size.deskFontMinWinfontSize[env];
    this.fontIcon.family = objAttr.Font.deskFontMinWinfamily[env];
    this.propertyPanel.borderStyle = objAttr.Border.deskpropertyPanelborderStyle[env];
    this.propertyPanel.pathImgPanel = 'url(images/bg/'+objAttr.BgImg.deskImgPanel[env]+')';
    this.propertyPanel.fontFamily = objAttr.Font.deskpropertyPanelfontFamily[env];
    this.propertyPanel.fontColor = objAttr.Color.deskPropertyPanelfontColor[env];
    
    this.propertyPanel.fontColorSelected = objAttr.Color.propertyPanelFontColorSelected[env];
    this.propertyPanel.fontSize = objAttr.Size.deskPropertyPanelFontSize[env];
    this.propertyPanel.fontWeight = objAttr.Border.propertyPanelFontWeight[env];
    this.propertyPanel.borderWidth = objAttr.Size.propertyPanelBorderWidth[env];
    this.propertyPanel.iconSize = objAttr.Size.propertyPanelIconSize[env];
    this.propertyPanel.heightCell = objAttr.Size.propertyPanelHeightCell[env];
    this.propertyPanel.fontColorDisable = objAttr.Color.propertyPanelfontColorDisable[env];
    var fFmlyPropertyDate = objAttr.Font.deskFFmlyPropertyDate[env];
    var fSizePropertyDate = objAttr.Size.deskFSizePropertyDate[env];
    var fWeightPropertyDate = objAttr.Border.deskFWeightPropertyDate[env];
    var fColorPropertyDate = objAttr.Color.deskFColorPropertyDate[env];
    this.setFontPropertyDate(fFmlyPropertyDate,fSizePropertyDate,fWeightPropertyDate,fColorPropertyDate);
    this.setDimensionButton(this.widthImgButton,this.heightImgButton);
    this.setUpButton();
    this.setImage();
    this.pathIconButton = 'images/logo/'+objAttr.BgImg.initButtonIcon[env];
    this.desk.divTablaBar.iconDiv.img.src = this.pathIconButton;
	  this.setButonInitProp('Inicio',objAttr.Color.borderButton[env],objAttr.Font.imgButton[env],objAttr.Size.headFont[env],objAttr.Color.deskFColorPropertyDate[env]);
    this.desk.divTablaBar.tabla.rows[0].cells[0].style.width = parseInt(this.widthImgButton,10)*0.25+'px';
    this.desk.divTablaBar.tabla.rows[0].cells[1].style.width =  parseInt(this.widthImgButton,10)*0.15+'px';
    this.desk.divTablaBar.tabla.rows[0].cells[2].style.width = parseInt(this.widthImgButton,10)*0.60+'px';
    var i = 0;
    var cant = 0;
    var id = '';
    for(i=0; i<this.desk.idsPanelsMenu.length; i++)
    {
      id = this.desk.idsPanelsMenu[i];
      var structMenu = this.desk.panelMenu[id].struct;
	  desktop.desk.panelMenu[structMenu.idPanelMenu].panel.style.backgroundImage = desktop.propertyPanel.pathImgPanel; 
	  for (cant = 0; cant < structMenu.captions.length; cant++)
      {
	  	desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].style.color = desktop.propertyPanel.fontColor;	  
        if (!desktop.desk.panelMenu[structMenu.idPanelMenu].struct.enableOption[cant])
        {
          desktop.desk.panelMenu[structMenu.idPanelMenu].tablaPanel.rows[cant].style.color = desktop.propertyPanel.fontColorDisable;  
        }
		if (desktop.desk.panelMenu[structMenu.idPanelMenu].struct.linkIdPanel[cant]!=0) 
		{
		  desktop.desk.panelMenu[structMenu.idPanelMenu].imgArrow[cant].src = desktop.pathImgArrow;
		}
      }
    }
    this.dimension();
    for (let l = 0; l < this.desk.tablaDatos.rows[0].cells.length; l++) {
      this.desk.tablaDatos.rows[0].cells[l].style.color = this.propertyPanel.fontColor;
    }
  }
}

