var calendars = 
{
  objects: new Array,
  ids: new Array,
  DOMINGO: 0,
  LUNES: 1,
  MARTES: 2,
  MIERCOLES: 3,
  JUEVES: 4,
  VIERNES: 5,
  SABADO: 6,
  dia: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
  mes: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  bgImgPath: "images/bg/",
  icono: "calendario.png",
  DDMMYYYY: "DDMMYYYY",
  MMDDYYYY: "MMDDYYYY",
  YYYYMMDD: "YYYYMMDD",
  YYYYDDMM: "YYYYDDMM",
  format: "DDMMYYYY",
  imgEnable : "bg136.jpg",  
  imgDisable : "bg53.jpg",
  bgError :"bgerror.jpg",   
  
  addPropertyMethod: function(id)
  {
    this.objects[id].divTablaEdit.addToBody = function()
    {
      calendars.addToBody(id);
    }
    this.objects[id].divTablaEdit.calc = function()
    {
      calendars.calc(id);
    }
    this.objects[id].divTablaEdit.compare = function(year1, month1, day1, year2, month2, day2)
    {
      return calendars.compare(id, year1, month1, day1, year2, month2, day2);
    }
    this.objects[id].divTablaEdit.getDifference = function(recordDayInit, recordDayFinal)
    {
      return calendars.getDifference(id, recordDayInit, recordDayFinal);
    }
    this.objects[id].divTablaEdit.getObject = function()
    {
      return calendars.getObject(id);
    }
    this.objects[id].divTablaEdit.getIntObject = function()
    {
      return calendars.getIntObject(id);
    }
    this.objects[id].divTablaEdit.getDays = function()
    {
      return calendars.getDays(id);
    }
    this.objects[id].divTablaEdit.getYear = function()
    {
      return calendars.getYear(id);
    }
    this.objects[id].divTablaEdit.getMonth = function()
    {
      return calendars.getMonth(id);
    }
    this.objects[id].divTablaEdit.getIntMonth = function()
    {
      return calendars.getIntMonth(id);
    }
    this.objects[id].divTablaEdit.getDay = function()
    {
      return calendars.getDay(id);
    }
    this.objects[id].divTablaEdit.getRecordDate = function(day, month, year)
    {
      return calendars.getRecordDate(day, month, year);
    }
    this.objects[id].divTablaEdit.getStrDate = function()
    {
      return calendars.getStrDate(id);
    }
    this.objects[id].divTablaEdit.hide = function()
    {
      calendars.hide(id);
    }
    this.objects[id].divTablaEdit.intToStrMonth = function(intMonth)
    {
      return calendars.intToStrMonth(intMonth);
    }
    this.objects[id].divTablaEdit.nextMonth = function()
    {
      calendars.nextMonth(id);
    }
    this.objects[id].divTablaEdit.nextYear = function()
    {
      calendars.nextYear(id);
    }
    this.objects[id].divTablaEdit.onClick = function(func)
    {
      calendars.onClick(id, func);
    }
    this.objects[id].divTablaEdit.onDbClick = function(func)
    {
      calendars.onDbClick(id, func);
    }
    this.objects[id].divTablaEdit.onSelectedDay = function(funct)
    {
      calendars.onSelectedDay(id, funct);
    }
    this.objects[id].divTablaEdit.onChangeYear = function(funct)
    {
      calendars.onChangeYear(id, funct);
    }
    this.objects[id].divTablaEdit.onChangeMonth = function(funct)
    {
      calendars.onChangeMonth(id, funct);
    }
    this.objects[id].divTablaEdit.onHide = function(funct)
    {
      calendars.onHide(id, funct);
    }
    this.objects[id].divTablaEdit.priorMonth = function()
    {
      calendars.priorMonth(id);
    }
    this.objects[id].divTablaEdit.priorYear = function()
    {
      calendars.priorYear(id);
    }
    this.objects[id].divTablaEdit.strToIntMonth = function(strMonth)
    {
      return calendars.strToIntMonth(strMonth);
    }
    this.objects[id].divTablaEdit.setYear = function(year)
    {
      calendars.setYear(id, year);
    }
    this.objects[id].divTablaEdit.setMonth = function(month)
    {
      calendars.setMonth(id, month);
    }
    this.objects[id].divTablaEdit.setDay = function(day)
    {
      calendars.setDay(id, day);
    }
    this.objects[id].divTablaEdit.setObjAttrib = function(objAttr, env)
    {
      calendars.setObjAttrib(id, objAttr, env);
    }
    this.objects[id].divTablaEdit.setObjAttribToAll = function(objAttr, env)
    {
      calendars.setObjAttribToAll(objAttrib, env);
    }
    this.objects[id].divTablaEdit.selectedDay = function(day)
    {
      calendars.selectedDay(id, day);
    }
    this.objects[id].divTablaEdit.setPosition = function(x, y)
    {
      calendars.setPosition(id, x, y);
    }
    this.objects[id].divTablaEdit.setRelativePosition = function()
    {
      calendars.setRelativePosition(id);
    }
    this.objects[id].divTablaEdit.setFocus = function()
    {
      calendars.setFocus(id);
    }
    this.objects[id].divTablaEdit.clear = function()
    {
      calendars.clear(id);
    }
    this.objects[id].divTablaEdit.show = function()
    {
      calendars.show(id);
    }
    this.objects[id].divTablaEdit.setBgBarImg = function(barImg)
    {
      calendars.setBgBarImg(id, barImg)
    }
    this.objects[id].divTablaEdit.setLoadBGImg = function(activeLoad)
    {
      calendars.setLoadBGImg(id, activeLoad);
    }
    this.objects[id].divTablaEdit.setLoadBGImgAll = function(activeLoad)
    {
      calendars.setLoadBGImgAll(activeLoad);
    }
    this.objects[id].divTablaEdit.setCaption = function(caption, margin, widthCaption)
    {
      calendars.setCaption(id, caption, margin, widthCaption);
    }
    this.objects[id].divTablaEdit.setMargin = function(margin)
    {
      calendars.setMargin(id, margin);
    }
	this.objects[id].divTablaEdit.setMarginLeft = function(marginL)
    {
      calendars.setMarginLeft(id, marginL);
    }
    this.objects[id].divTablaEdit.setPropertyIcon = function(bgTitle,colorTitle,bgColor,color)
    {
      calendars.setPropertyIcon(id, bgTitle,colorTitle,bgColor,color);
    }
    this.objects[id].divTablaEdit.formatFecha = function(anio, mes, dia)
    {
      return calendars.formatFecha(id, anio, mes, dia);
    }
    this.objects[id].divTablaEdit.setFechaToEdit = function(strFecha)
    {
      calendars.setFechaToEdit(id, strFecha);
    }
    this.objects[id].divTablaEdit.getFechaFromEdit = function()
    {
      return calendars.getFechaFromEdit(id);
    }
    this.objects[id].divTablaEdit.disableEditCalendar = function()
    {
      calendars.disableEditCalendar(id);
    }
    this.objects[id].divTablaEdit.enableEditCalendar = function()
    {
      calendars.enableEditCalendar(id, strFecha)
    }
    this.objects[id].divTablaEdit.hideEditCalendar = function()
    {
      calendars.hideEditCalendar(id);
    }
    this.objects[id].divTablaEdit.showEditCalendar = function()
    {
      calendars.showEditCalendar(id);
    }
    this.objects[id].divTablaEdit.setWidthEditCalendar = function(width)
    {
      calendars.setWidthEditCalendar(id, width);
    }
    this.objects[id].divTablaEdit.setSeparatorCar = function(sep)
    {
      calendars.setSeparatorCar(id, sep);
    }
    this.objects[id].divTablaEdit.setFormat = function(f)
    {
      calendars.setFormat(id, f);
    }
    this.objects[id].divTablaEdit.setBorderStyleEditCalendar = function(style)
    {
      calendars.setBorderStyleEditCalendar(id, style);
    }
    this.objects[id].divTablaEdit.setColorCaption = function(colorFont)
    {
      calendars.setColorCaption(id, colorFont);
    }
    this.objects[id].divTablaEdit.setFontEditCalendar = function(fontFamily, size, colorFont)
    {
      calendars.setFontEditCalendar(id, fontFamily, size, colorFont);
    }
    this.objects[id].divTablaEdit.setPositionEditCalendar = function(x, y)
    {
      calendars.setPositionEditCalendar(id, x, y);
    }
    this.objects[id].divTablaEdit.getStrDbDate = function()
    {
      return calendars.getStrDbDate(id);
    }
    this.objects[id].divTablaEdit.formatTwoDigit = function()
    {
      calendars.formatTwoDigit(num);
    }
    this.objects[id].divTablaEdit.readOnlyEditCalendar = function(readOnly)
    {
      calendars.readOnlyEditCalendar(id, readOnly);
    }
    this.objects[id].divTablaEdit.setBGColorEditCalendar = function(color)
    {
      calendars.setBGColorEditCalendar(id, color);
    }
    this.objects[id].divTablaEdit.sendToFrom = function(order)
    {
      calendars.sendToFrom(id, order);
    }
    this.objects[id].divTablaEdit.getEditCalendar = function()
    {
      return calendars.getEditCalendar(id);
    }
    this.objects[id].divTablaEdit.setIconProperties = function(margin, width, height)
    {
      calendars.setIconProperties(id, margin, width, height);
    }
    this.objects[id].divTablaEdit.setBorderWidthIcon = function(width)
    {
      calendars.setBorderWidthIcon(id, width);
    }
    this.objects[id].divTablaEdit.setFontStyleCaption = function(s, w)
    {
      calendars.setFontStyleCaption(id, s, w);
    }
    this.objects[id].divTablaEdit.setWidthCaption = function(width)
    {
      calendars.setWidthCaption(id, width);
    }
	this.objects[id].divTablaEdit.compareCalendars = function(calendarExt)
	{
  	  return calendars.compareCalendars(id, calendarExt);
	} 
	this.objects[id].divTablaEdit.setFocusEdit = function()
	{
	  calendars.setFocusEdit(id);
	}
	this.objects[id].divTablaEdit.setBgImgEditCalendar = function(barImg)
	{
	  calendars.setBgImgEditCalendar(id, barImg);
	}
	this.objects[id].divTablaEdit.setMarginTopBottom = function(marginTB)
	{
	  calendars.setMarginTopBottom(id,marginTB);
	}
	this.objects[id].divTablaEdit.setMarginTopBottomToAll = function(marginTB)
	{
	  calendars.setMarginTopBottomToAll(marginTB);	
	}
	this.objects[id].divTablaEdit.getText = function()
	{
	  return calendars.getText(id);	
	}
	this.objects[id].divTablaEdit.setValidEmpty = function()
    {
  	  calendars.setValidEmpty(id);
    }
    this.objects[id].divTablaEdit.setValidRange = function(calendarEnd, maxRange)
    {
      calendars.setValidRange(id, calendarEnd, maxRange);	
    }
    this.objects[id].divTablaEdit.valid = function(objMsg)
    {
      return calendars.valid(id,objMsg);
    }
    this.objects[id].divTablaEdit.validAll = function(objMsg)
    {
      calendars.validAll(objMsg);
    }
    this.objects[id].divTablaEdit.getDifferenceInDays = function(recordDayInit, recordDayFinal)
    {
      return calendars.getDifferenceInDays(id, recordDayInit, recordDayFinal);
    }
    this.objects[id].divTablaEdit.setDataType = function(dataType)
    {
      calendars.setDataType(id, dataType);	
    }
    this.objects[id].divTablaEdit.setValidGreaterThan = function(secondCalendar)
    {
      calendars.setValidGreaterThan(id, secondCalendar);	
    }
    this.objects[id].divTablaEdit.setValidLessThan = function(secondCalendar)
    {
      calendars.setValidLessThan(id,secondCalendar);	
    }
    this.objects[id].divTablaEdit.getCaptionCell = function()
    {
      return calendars.getCaptionCell(id);
    }
    this.objects[id].divTablaEdit.setFieldFind = function(fieldFind)
    {
      calendars.setFieldFind(id,fieldFind);
    } 
    this.objects[id].divTablaEdit.getFieldFind = function()
    {
      return calendars.getFieldFind(id);
    }
    this.objects[id].divTablaEdit.setWidthBoxContainer = function(width)
    {
      calendars.setWidthBoxContainer(id,width);	
    }
    this.objects[id].divTablaEdit.showGrid = function(sts)
    {
  	  calendars.showGrid(id,sts);
    }
    this.objects[id].divTablaEdit.setCenterScreen = function(sts)
    {
      calendars.setCenterScreen(id,sts);
    }
    this.objects[id].divTablaEdit.setDisable = function()
    {
      calendars.setDisable(id);  
    }
    this.objects[id].divTablaEdit.setEnable = function()
    {
      calendars.setEnable(id);  
    }
    this.objects[id].divTablaEdit.getValue = function()
    {
      return calendars.getValue(id);  
    }
    this.objects[id].divTablaEdit.getWeekDay = function()
    {
      return calendars.getWeekDay(id);  
    }
    this.objects[id].divTablaEdit.onShowCalendar = function(funct)
    {
      calendars.onShowCalendar(id, funct); 
    }
  },
  
  addToBody: function(id)
  {
    document.body.appendChild(this.objects[id].divTablaEdit);
  },
  
  calc: function(id)
  {
    d = 1;
    var month = this.objects[id].objDate.getMonth();
    var year = this.objects[id].objDate.getFullYear();
    this.objects[id].year = year;
    this.objects[id].month = this.mes[month];
    this.objects[id].objDate.setDate(1);
    this.objects[id].days.length = 0;
    this.objects[id].dayWeekInit = this.objects[id].objDate.getDay();
    while (this.objects[id].objDate.getMonth() == month) 
    {
      this.objects[id].days[this.objects[id].days.length] = d;
      d++;
      this.objects[id].objDate.setDate(d);
    }
    this.objects[id].objDate.setYear(year);
    this.objects[id].objDate.setMonth(month);
    this.objects[id].count = this.objects[id].days.length;
  },
  
  compare: function(id, year1, month1, day1, year2, month2, day2)
  {
    this.objects[id].fecha1 = new Date(year1, month1, day1);
    this.objects[id].fecha2 = new Date(year2, month2, day2);
    var diff = this.objects[id].fecha1 - this.objects[id].fecha2;
    if (diff > 0) 
      return 1; 
    if (diff < 0) 
      return -1; 
    if (diff == 0) 
      return 0; 
  },
  
  compareCalendars: function(id, calendarExt)
  {
  	var y1 = this.objects[id].objDate.getFullYear();
	var m1 = this.objects[id].objDate.getMonth();
	var d1 = this.objects[id].daySelected;
	var y2 = calendarExt.objDate.getFullYear();
	var m2 = calendarExt.objDate.getMonth();
	var d2 = calendarExt.daySelected;
	var diffY = y1 - y2;
	var diffM = m1 - m2;
	var diffD = d1 - d2;
	
	if(diffY > 0)
	  return 1;
	if(diffY < 0)
	  return -1;
	if(diffY==0)
	{
		if(diffM > 0)
		  return 1;
		if (diffM < 0)
		  return -1;
		if(diffM==0)
		{
			if(diffD > 0)
			  return 1;
			if(diffD < 0)
			  return -1;
			if(diffD==0)
			  return 0;    
		}    
	}  
  },

   setWidthBoxContainer : function(id,width)
   {
     this.objects[id].divTablaEdit.style.width = width + 'px';	
   },
   
   setCenterScreen : function(id, sts)
   {
   	  this.objects[id].center = sts;
   },
   
   showGrid : function(id,sts)
   {
   	 for(var i=0; i<this.ids.length;i++)
   	 {
   	   if(sts)
   	   {
	     this.objects[this.ids[i]].divTablaEdit.style.borderWidth = '1px';
	     this.objects[this.ids[i]].divTablaEdit.style.borderColor = 'black';
	     this.objects[this.ids[i]].divTablaEdit.style.borderStyle = 'groove';
	     this.objects[id].tablaEdit.setAttribute("border", "1");
	   }
	   else
	   {
	     this.objects[this.ids[i]].divTablaEdit.style.borderWidth = '0px';
	     this.objects[this.ids[i]].divTablaEdit.style.borderStyle = 'none';
	     this.objects[id].tablaEdit.setAttribute("border", "0");
	   }	
   	 }
   },

  create: function(id,margin,widthCaption)
  {
    this.objects[id] = new Object();
    this.objects[id].onShowCal = new Function('');
    this.objects[id].nameComponent = 'calendars';
    this.objects[id].ambiente = attrib.getActualEnv();
    this.objects[id].disableButton = false;
    this.objects[id].widthCaption = 0;
    this.objects[id].margin = 0; 
    if(widthCaption!=undefined && widthCaption!=null)
      this.objects[id].widthCaption = parseInt(widthCaption,10);
    if(margin!=undefined && margin!=null)
      this.objects[id].margin = margin; 
	  this.objects[id].fieldFind = false;
    this.objects[id].validEmpty = false;
    this.objects[id].validRange = false;
    this.objects[id].validGreaterThan = false;
    this.objects[id].validLessThan = false;
    this.objects[id].positionRange = -1;
    this.objects[id].parentPositionRange = -1;
    this.objects[id].secondCalendar = new Object();
    this.objects[id].maxRange = 0;
  	this.objects[id].separator= "-";
  	this.objects[id].loadBGImg = true;
  	this.objects[id].center = false;
    this.objects[id].tablaEdit = document.createElement('table');
    this.objects[id].divTablaEdit = document.createElement('div');
    this.objects[id].divTablaEdit.objDate = new Date();
    this.objects[id].divTablaEdit.objDate1 = new Date();
    this.objects[id].divTablaEdit.objDate2 = new Date();
    this.objects[id].divTablaEdit.daySelected = this.objects[id].divTablaEdit.objDate.getDate();
    this.objects[id].divTablaEdit.style.padding = '0px';
    this.objects[id].divTablaEdit.style.borderWidth = '0px';
    this.objects[id].dataType='string';
    this.objects[id].divTablaEdit.dataType = 'string';
    this.objects[id].divTablaEdit.nameComponent='calendars';
    this.objects[id].divTablaEdit.ambiente = attrib.getActualEnv();
    this.objects[id].divTablaEdit.cloneObj = this.objects[id].divTablaEdit;
    this.objects[id].isShow = false;
    this.objects[id].isSelectedDay = false;
    this.objects[id].isSelectedMonth = false;
    this.objects[id].tablaEdit.setAttribute("border", "0");
    this.objects[id].tablaEdit.setAttribute("cellPadding", "0");
    this.objects[id].tablaEdit.setAttribute("cellSpacing", "0");
	  this.objects[id].tablaEdit.style.borderWidth='0px';
	  this.objects[id].tablaEdit.style.fontSize = '0px';
    this.objects[id].tablaEdit.insertRow(0);
    this.objects[id].tablaEdit.rows[0].insertCell(0);
    this.objects[id].tablaEdit.rows[0].insertCell(1);
    this.objects[id].tablaEdit.rows[0].insertCell(2);
    this.objects[id].tablaEdit.rows[0].insertCell(3);
    this.objects[id].tablaEdit.rows[0].insertCell(4);
    this.objects[id].tablaEdit.rows[0].insertCell(5);
    this.objects[id].editCalendar = document.createElement('input'); 
    //this.objects[id].editCalendar.style.borderRadius = '0em';
    //this.objects[id].editCalendar.style.padding = '0px';
    this.objects[id].cap = document.createTextNode(""); 
    this.objects[id].img = document.createElement("img");
    this.objects[id].tablaImg = document.createElement('table');
    this.objects[id].tablaImg.setAttribute("border", "0");
    this.objects[id].tablaImg.setAttribute("cellPadding", "0");
    this.objects[id].tablaImg.setAttribute("cellSpacing", "0");
    this.objects[id].tablaImg.style.borderWidth = '0px';
    this.objects[id].tablaImg.style.fontSize = '0px';
    this.objects[id].tablaImg.style.borderStyle = 'none';
    this.objects[id].tablaImg.insertRow(0);    
    this.objects[id].tablaImg.insertRow(1);
    this.objects[id].tablaImg.rows[0].insertCell(0);
    this.objects[id].tablaImg.rows[1].insertCell(0);
    this.objects[id].tablaImg.rows[0].cells[0].style.fontFamily='time new roman';
    this.objects[id].tablaImg.rows[0].cells[0].align ='center';
    this.objects[id].tablaImg.rows[0].cells[0].style.width ='20px';
    this.objects[id].tablaImg.rows[1].cells[0].align ='center';
    this.objects[id].tablaImg.rows[1].cells[0].style.width ='20px';
    this.objects[id].tablaImg.rows[1].cells[0].style.fontFamily='verdana';
    this.objects[id].tablaImg.rows[1].cells[0].style.fontWeight='bold';
    this.objects[id].img.div = document.createElement('div');
    this.objects[id].img.div.style.padding = '0px';
    this.objects[id].img.div.appendChild(this.objects[id].tablaImg);
	  this.objects[id].img.div.style.width = '20px';
    this.objects[id].img.div.align = 'center';
    this.objects[id].img.div.style.borderStyle = 'outset';
    this.objects[id].img.div.style.borderWidth = '1px';
    this.objects[id].img.div.style.borderColor = '#9e9e9e';
    this.setWidthEditCalendar(id, 70);
    if(widthCaption!=null && widthCaption!=undefined)
    {
      this.setWidthCaption(id, widthCaption);	
    }
    this.setPropertyIcon(id, '#111199','#ffffff','#ffffff','#000000');    
	  this.objects[id].tablaEdit.rows[0].cells[1].appendChild(this.objects[id].cap);
	  if(margin == undefined || margin == null)
      this.objects[id].tablaEdit.rows[0].cells[2].style.width = "20px"; 
    else  
      this.objects[id].tablaEdit.rows[0].cells[2].style.width = margin + "px";
    this.objects[id].tablaEdit.rows[0].cells[3].appendChild(this.objects[id].editCalendar);
    this.objects[id].tablaEdit.rows[0].cells[4].style.width = '0px';
    this.objects[id].tablaEdit.rows[0].cells[5].appendChild(this.objects[id].img.div);
    this.objects[id].tablaEdit.rows[0].cells[5].align = 'left';
    this.objects[id].tablaImg.rows[0].cells[0].style.fontSize = '7px';
    this.objects[id].tablaImg.rows[1].cells[0].style.fontSize = '7px';
    this.objects[id].editCalendar.style.height = '17px';		
    this.objects[id].editCalendar.style.lineHeight = '17px';
	  //this.objects[id].editCalendar.style.borderWidth = '1px';
    //this.objects[id].editCalendar.style.borderStyle ='groove';
    this.objects[id].tablaImg.rows[0].cells[0].style.height 	= '8px';	
    this.objects[id].tablaImg.rows[0].cells[0].style.lineHeight = '8px';	
    this.objects[id].tablaImg.rows[1].cells[0].style.height 	= '9px';	
    this.objects[id].tablaImg.rows[1].cells[0].style.lineHeight = '9px';	
    this.objects[id].tablaEdit.style.height 					= '17px';	
	  this.objects[id].tablaEdit.style.lineHeight					= '17px';	
    this.objects[id].tablaEdit.rows[0].cells[3].style.height 	= '17px';	
    this.objects[id].tablaEdit.rows[0].cells[3].style.lineHeight= '17px';	
    this.objects[id].tablaEdit.rows[0].cells[5].style.height 	= '17px';	
    this.objects[id].tablaEdit.rows[0].cells[5].style.lineHeight= '17px';	
    this.objects[id].tablaEdit.rows[0].cells[0].style.height 	= '17px';	
    this.objects[id].tablaEdit.rows[0].cells[0].style.lineHeight= '17px';	
    this.objects[id].tablaEdit.rows[0].cells[2].style.height 	= '17px';	
    this.objects[id].tablaEdit.rows[0].cells[2].style.lineHeight= '17px';	
    this.objects[id].img.style.height = '17px';								
    this.objects[id].img.style.lineHeight = '17px';							
    this.objects[id].img.div.style.height = '17px';							
  	this.objects[id].img.div.style.lineHeight = '17px';						
  	this.objects[id].divTablaEdit.style.height ='17px';
    this.objects[id].divTablaEdit.style.lineHeight ='17px';
    this.objects[id].divTablaEdit.style.borderStyle ='none';
    this.objects[id].divTablaEdit.style.padding = '0px';
    this.objects[id].divTablaEdit.style.borderWidth ='0px';
    //this.objects[id].editCalendar.style.borderColor ='#7e7e7e';
	  this.objects[id].img.vAlign = 'top';
    this.objects[id].img.div.vAlign = 'middle';						
    this.objects[id].tablaImg.rows[0].cells[0].vAlign =	'top';		
    this.objects[id].tablaImg.rows[1].cells[0].vAlign =	'top';		
    this.objects[id].tablaEdit.rows[0].cells[5].vAlign = 'top';		
    this.objects[id].tablaEdit.rows[0].cells[3].vAlign = 'top';		
    this.objects[id].tablaEdit.rows[0].cells[1].vAlign = 'top';		
    this.objects[id].divTablaEdit.vAlign ='top';					
  	this.objects[id].divTablaEdit.vAlign ='top';
  	this.objects[id].tablaEdit.rows[0].cells[3].style.fontSize = '0px';
    this.objects[id].divTablaEdit.appendChild(this.objects[id].tablaEdit);    
    
    this.objects[id].editCalendar.onclick = function()
    {
      calendars.objects[id].img.div.style.borderStyle = 'outset';	
      calendars.hide(id);
    }
    this.objects[id].editCalendar.onblur = function()
    {
      calendars.objects[id].img.div.style.borderStyle = 'outset';
      var s = calendars.objects[id].editCalendar.value;
      if (s.length < 10) 
      {
        calendars.objects[id].editCalendar.value = '';
      }
	  else
	  {
	  	calendars.updateFecha(id, s);
	  }
    }
    
    this.objects[id].editCalendar.onkeyup = function(key)
    {
      if(!calendars.objects[id].disableButton)
      {   
        var s = '';
        var i = 0;
        var tecla = '';
        var codTecla = '';
        var IE = document.all ? true : false;
        calendars.objects[id].img.div.style.borderStyle = 'outset';
        if (IE) 
        {
          tecla = event.keyCode;
        }
       else 
        {
        tecla = key.which;
        }
        codTecla = String.fromCharCode(tecla);
        s = calendars.objects[id].editCalendar.value;
        var longitud = s.length;
        calendars.objects[id].editCalendar.maxLength = 10;
        if ((codTecla == '0') || (codTecla == '`') ||
        (codTecla == '1') ||
        (codTecla == 'a') ||
        (codTecla == '2') ||
        (codTecla == 'b') ||
        (codTecla == '3') ||
        (codTecla == 'c') ||
        (codTecla == '4') ||
        (codTecla == 'd') ||
        (codTecla == '5') ||
        (codTecla == 'e') ||
        (codTecla == '6') ||
        (codTecla == 'f') ||
        (codTecla == '7') ||
        (codTecla == 'g') ||
        (codTecla == '8') ||
        (codTecla == 'h') ||
        (codTecla == '9') ||
        (codTecla == 'i')) 
        {
          if ((calendars.format == calendars.DDMMYYYY) || (calendars.format == calendars.MMDDYYYY)) 
          {
            switch (longitud)
            {
              case 2:
              {
                s += calendars.objects[id].separator;
                var str = s.charAt(0) + s.charAt(1);
                var val = parseInt(str, 10); 
                if (calendars.format == calendars.DDMMYYYY) 
                {
                  if (val > 31) 
                  {
                    s = '';
                  }  
                }
                else 
                {
                  if (val > 12) 
                  {
                    s = '';
                  }
                }
                break;
              }
              case 5:
              {
                s += calendars.objects[id].separator;
                var str = s.charAt(3) + s.charAt(4);
                var val = parseInt(str, 10); 
                if (calendars.format == calendars.DDMMYYYY) 
                {
                  if (val > 12) 
                  {
                    s = s.charAt(0) + s.charAt(1) + s.charAt(2);
                  }
                }
                else 
                {
                  if (val > 31) 
                  {
                    s = s.charAt(0) + s.charAt(1) + s.charAt(2);
                  }
                }
                break;
              } 
            }
          }
          if ((calendars.format == calendars.YYYYMMDD) || (calendars.format == calendars.YYYYDDMM)) 
          {
            switch (longitud)
            {
              case 4:
              {
                s += calendars.objects[id].separator;
                break;
              }
              case 7:
              {
                s += calendars.objects[id].separator;
                var str = s.charAt(5) + s.charAt(6);
                var val = parseInt(str, 10);
                if (calendars.format == calendars.YYYYMMDD) 
                {
                  if (val > 12) 
                  {
                    s = s.charAt(0) + s.charAt(1) + s.charAt(2) + s.charAt(3) + s.charAt(4);
                  }
                }
                else 
                {
                  if (val > 31) 
                  {
                    s = s.charAt(0) + s.charAt(1) + s.charAt(2) + s.charAt(3) + s.charAt(4);
                  }
                }
                break;
              }
              case 10:
              {
                var str = s.charAt(8) + s.charAt(9);
                var val = parseInt(str, 10); 
                if (calendars.format == calendars.YYYYMMDD) 
                {
                  if (val > 31) 
                  {
                    s = s.charAt(0) + s.charAt(1) + s.charAt(2) + s.charAt(3) + s.charAt(4) + s.charAt(5) + s.charAt(6) + s.charAt(7);
                  }
                }
                else 
                {
                  if (val > 12) 
                  {
                    s = s.charAt(0) + s.charAt(1) + s.charAt(2) + s.charAt(3) + s.charAt(4) + s.charAt(5) + s.charAt(6) + s.charAt(7);
                  }
                }
                break
              }  
            }
          }
        }
        else 
        {
          if (longitud < 10) 
          {
            s = s.substring(0, longitud - 1);
          }
        }
        calendars.objects[id].editCalendar.value = s;
      }
    }
    
    this.objects[id].img.div.ondblclick = function(evt)
    {
        if(!calendars.objects[id].disableButton)
        {
          var today = new Date();
          var y = today.getFullYear();
          var m = today.getMonth()+1;
          var d = today.getDate();
          var f = calendars.formatFecha(id, y, m, d);          
          calendars.setFechaToEdit(id, f);
          calendars.updateFecha(id,f);
          calendars.hide(id);
          calendars.objects[id].isSelectedMonth = true;       
          calendars.calc(id);
          calendars.selectedDay(id, d);
        }
    }
    
    this.objects[id].img.div.onclick = function()
    {     
      if(!calendars.objects[id].disableButton)
      if (!calendars.objects[id].isShow) 
      {
        var x = 0;
        var y = 0;
        var xc = parseInt((document.documentElement.clientWidth  - calendars.objects[id].widthPanel)/2,10);
        var yc = parseInt((document.documentElement.clientHeight - calendars.objects[id].heightPanel)/2,10);
        calendars.objects[id].img.div.style.borderStyle = 'inset';
        if (calendars.objects[id].divTablaEdit.style.position != 'absolute') 
        {
          calendars.objects[id].divTablaEdit.style.position = 'absolute';
          var x1 = calendars.objects[id].divTablaEdit.offsetParent.offsetLeft;
          var x2 = calendars.objects[id].divTablaEdit.offsetWidth;
          var x3 = calendars.objects[id].divTablaEdit.offsetLeft;
          x = x1 + x2 + x3;
          if ((document.documentElement.clientWidth - x) <  calendars.objects[id].widthPanel)
            x = x - calendars.objects[id].widthPanel;
          var y1 = calendars.objects[id].divTablaEdit.offsetParent.offsetTop;
          var y2 = calendars.objects[id].divTablaEdit.offsetTop;
          var y3 = calendars.objects[id].divTablaEdit.offsetHeight;
          y = y1 + y2 + y3;
          calendars.objects[id].divTablaEdit.style.position = '';
        }
        else 
        {	
          var x1 = calendars.objects[id].divTablaEdit.offsetLeft;
          var x2 = calendars.objects[id].divTablaEdit.offsetWidth;
          x = x1 + x2;
          var y1 = calendars.objects[id].divTablaEdit.offsetParent.offsetTop;
          var y2 = calendars.objects[id].divTablaEdit.offsetTop;
          var y3 = calendars.objects[id].divTablaEdit.offsetHeight;
          y = y1 + y2 + y3;
        }
        if(calendars.objects[id].center)
        {
          x = xc;
          y = yc;
        }
        calendars.setPosition(id, x, y);
        calendars.show(id);
      }
      else 
      {
      	calendars.objects[id].img.div.style.borderStyle = 'outset';
        calendars.hide(id);
      }
      calendars.objects[id].onShowCal();
    }

    this.objects[id].onHideCalendar = new Function("");
    this.ids[this.ids.length] = id;
    this.objects[id].id = id;
    this.objects[id].onSelectedDay = new Function("");
    this.objects[id].onChangeYear = new Function("");
    this.objects[id].onChangeMonth = new Function("");
    this.objects[id].colorCells = "#f9f9ff";
    this.objects[id].colorTextDay = "white";
    this.objects[id].colorCellDay = "red";
    this.objects[id].colorText = "#000055";
    this.objects[id].colorTextSelected = "white";
    this.objects[id].colorCellSelected = "red";
    this.objects[id].panel = document.createElement("div");
    this.objects[id].panel.style.display = "none";
    this.objects[id].widthPanel = 255;
    this.objects[id].heightPanel = 185;
    this.objects[id].panel.style.width = this.objects[id].widthPanel+"px";
    this.objects[id].panel.style.height = this.objects[id].hightPanel+"px";
    this.objects[id].panelYear = document.createElement("div");
    this.objects[id].panelMonth = document.createElement("div");
    this.objects[id].buttonClose = document.createElement("div");
    this.objects[id].tableInf = document.createElement("table");
    this.objects[id].tableInf.insertRow(0);
    this.objects[id].tableInf.setAttribute("border", "0px");
    this.objects[id].tableInf.setAttribute("cellspacing", "5px");
    this.objects[id].tableInf.setAttribute("cellpadding", "1px");
    this.objects[id].panelYear.style.borderStyle = "inset";
    this.objects[id].panelYear.style.height = "14px";
    this.objects[id].panelYear.style.width = "34px";
    this.objects[id].panelYear.style.borderWidth = "1px";
    this.objects[id].panelYear.setAttribute("align", "center");
    this.objects[id].panelMonth.style.borderStyle = "inset";
    this.objects[id].panelMonth.style.height = "14px";
    this.objects[id].panelMonth.style.width = "78px";
    this.objects[id].panelMonth.style.borderWidth = "1px";
    this.objects[id].panelMonth.setAttribute("align", "center");
    for (i = 0; i < 7; i++) 
    {
      this.objects[id].tableInf.rows[0].insertCell(i);
    }
    this.objects[id].tableDays = document.createElement("table");
    this.objects[id].tableDays.setAttribute("border", "0px");
    this.objects[id].tableDays.setAttribute("cellspacing", "0px");
    this.objects[id].tableDays.setAttribute("cellpadding", "2px");
    this.objects[id].buttonYearIzq = document.createElement("div");
    this.objects[id].buttonYearDer = document.createElement("div");
    this.objects[id].buttonMonthIzq = document.createElement("div");
    this.objects[id].buttonMonthDer = document.createElement("div");
    this.objects[id].buttonMonthDer.style.width = "15px";
    this.objects[id].buttonMonthIzq.style.width = "15px";
    this.objects[id].buttonYearDer.style.width = "15px";
    this.objects[id].buttonYearIzq.style.width = "15px";
    this.objects[id].buttonClose.style.width = "15px";
    this.objects[id].buttonMonthDer.style.height = "15px";
    this.objects[id].buttonMonthIzq.style.height = "15px";
    this.objects[id].buttonYearDer.style.height = "15px";
    this.objects[id].buttonYearIzq.style.height = "15px";
    this.objects[id].buttonClose.style.height = "15px";
    this.objects[id].buttonMonthDer.innerHTML = ">";
    this.objects[id].buttonMonthDer.style.textAlign = "center";
    this.objects[id].buttonMonthDer.style.borderStyle = "outset";
    this.objects[id].buttonMonthDer.style.borderWidth = "1px";
    this.objects[id].buttonMonthDer.style.backgroundColor = "#f0f0f0";
    this.objects[id].buttonMonthIzq.innerHTML = "<";
    this.objects[id].buttonMonthIzq.style.textAlign = "center";
    this.objects[id].buttonMonthIzq.style.borderStyle = "outset";
    this.objects[id].buttonMonthIzq.style.borderWidth = "1px";
    this.objects[id].buttonMonthIzq.style.backgroundColor = "#f0f0f0";
    this.objects[id].buttonYearDer.innerHTML = ">";
    this.objects[id].buttonYearDer.style.textAlign = "center";
    this.objects[id].buttonYearDer.style.borderStyle = "outset";
    this.objects[id].buttonYearDer.style.borderWidth = "1px";
    this.objects[id].buttonYearDer.style.backgroundColor = "#f0f0f0";
    this.objects[id].buttonYearIzq.innerHTML = "<";
    this.objects[id].buttonYearIzq.style.textAlign = "center";
    this.objects[id].buttonYearIzq.style.borderStyle = "outset";
    this.objects[id].buttonYearIzq.style.borderWidth = "1px";
    this.objects[id].buttonYearIzq.style.backgroundColor = "#f0f0f0";
    this.objects[id].buttonClose.innerHTML = "x";
    this.objects[id].buttonClose.style.textAlign = "center";
    this.objects[id].buttonClose.style.borderStyle = "outset";
    this.objects[id].buttonClose.style.borderWidth = "1px";
    this.objects[id].buttonClose.style.backgroundColor = "#f0f0f0";
    this.objects[id].tableInf.rows[0].cells[0].appendChild(this.objects[id].buttonYearIzq);
    this.objects[id].tableInf.rows[0].cells[1].appendChild(this.objects[id].panelYear);
    this.objects[id].tableInf.rows[0].cells[2].appendChild(this.objects[id].buttonYearDer);
    this.objects[id].tableInf.rows[0].cells[3].appendChild(this.objects[id].buttonMonthIzq);
    this.objects[id].tableInf.rows[0].cells[4].appendChild(this.objects[id].panelMonth);
    this.objects[id].tableInf.rows[0].cells[5].appendChild(this.objects[id].buttonMonthDer);
    this.objects[id].tableInf.rows[0].cells[6].appendChild(this.objects[id].buttonClose);
    this.objects[id].panel.appendChild(this.objects[id].tableInf);
    this.objects[id].panel.appendChild(this.objects[id].tableDays);
    this.objects[id].objDate1 = new Date();
  	this.objects[id].objDate2 = new Date();
  	this.objects[id].objDate = new Date();
  	this.objects[id].divTablaEdit.objDate = this.objects[id].objDate;
    this.objects[id].divTablaEdit.objDate1 = this.objects[id].objDate1;
    this.objects[id].divTablaEdit.objDate2 = this.objects[id].objDate2;
    this.objects[id].days = new Array();
    this.objects[id].dayWeekInit = this.objects[id].DOMINGO;
    this.objects[id].month = this.mes[this.objects[id].objDate.getMonth()];
    this.objects[id].year = this.objects[id].objDate.getFullYear();
    this.objects[id].fecha1 = this.objects[id].objDate1;
    this.objects[id].fecha2 = this.objects[id].objDate2;
    this.objects[id].daySelected = this.objects[id].objDate.getDate();
    this.objects[id].divTablaEdit.daySelected = this.objects[id].objDate.getDate();
    this.objects[id].actDay = this.objects[id].objDate.getDate();
    this.objects[id].actMonth = this.mes[this.objects[id].objDate.getMonth()];
    this.objects[id].actYear = this.objects[id].objDate.getFullYear();
    this.objects[id].count = 0;
    this.objects[id].tableDays.onmouseover = function(e)
    {
      calendars.objects[id].tableDays.style.cursor = "pointer";	
    }
    
    this.objects[id].buttonMonthDer.onmouseover = function()
    {
      calendars.objects[id].buttonMonthDer.style.cursor = "pointer"; 	
    }
    
    this.objects[id].buttonMonthDer.onmousedown = function()
    {
      calendars.objects[id].buttonMonthDer.style.borderStyle = 'inset';	
    }
    this.objects[id].buttonMonthDer.onmouseup = function()
    {
      calendars.objects[id].buttonMonthDer.style.borderStyle = 'outset';	
      calendars.nextMonth(id);
    }
    
    this.objects[id].buttonMonthIzq.onmouseover = function()
    {
      calendars.objects[id].buttonMonthIzq.style.cursor = "pointer"; 	
    }
    this.objects[id].buttonMonthIzq.onmousedown = function()
    {
      calendars.objects[id].buttonMonthIzq.style.borderStyle ='inset';
    }
    this.objects[id].buttonMonthIzq.onmouseup = function()
    {
      calendars.objects[id].buttonMonthIzq.style.borderStyle ='outset';	
      calendars.priorMonth(id);
    }
    
    this.objects[id].buttonYearDer.onmouseover = function()
    {
      calendars.objects[id].buttonYearDer.style.cursor = "pointer"; 	
    }
    this.objects[id].buttonYearDer.onmousedown = function()
    {
      calendars.objects[id].buttonYearDer.style.borderStyle = 'inset';
    }
    this.objects[id].buttonYearDer.onmouseup = function()
    {
      calendars.objects[id].buttonYearDer.style.borderStyle = 'outset';	
      calendars.nextYear(id);
    }
    
    this.objects[id].buttonYearIzq.onmouseover = function()
    {
      calendars.objects[id].buttonYearIzq.style.cursor = "pointer"; 	
    }
    this.objects[id].buttonYearIzq.onmousedown = function()
    {
      calendars.objects[id].buttonYearIzq.style.borderStyle = 'inset';
    }
    this.objects[id].buttonYearIzq.onmouseup = function()
    {
      calendars.priorYear(id);	
      calendars.objects[id].buttonYearIzq.style.borderStyle = 'outset';
    }
    
    this.objects[id].buttonClose.onmouseover = function()
    {
      calendars.objects[id].buttonClose.style.cursor = "pointer"; 	
    }
    this.objects[id].buttonClose.onmousedown = function()
    {
      calendars.objects[id].buttonClose.style.borderStyle = 'inset';	
    }
    this.objects[id].buttonClose.onmouseup = function()
    {
      calendars.objects[id].buttonClose.style.borderStyle = 'outset';	
      calendars.hide(id);
    }
    
    for (i = 0; i < 7; i++) 
    {
      this.objects[id].tableDays.insertRow(i);
      for (j = 0; j < 7; j++) 
      {
        this.objects[id].tableDays.rows[i].insertCell(j);
      }
    }
    
    document.body.appendChild(this.objects[id].panel);
    this.calc(id);
    this.addPropertyMethod(id);
    this.setRound(id);
    this.setDataIcon(id);
    if(attrib)
      this.setObjAttrib(id,attrib,attrib.getActualEnv());
    return this.objects[id].divTablaEdit;
  },
  
  disableEditCalendar: function(id)
  {
    this.objects[id].editCalendar.enable = false;
  },
  setDisable : function(id)
  {
    this.readOnlyEditCalendar(id,true);  
    this.objects[id].disableButton = true;
    this.objects[id].editCalendar.enable = false;
    this.setBgImgEditCalendar(id, this.imgDisable);
  },
  setEnable : function(id)
  {
    this.readOnlyEditCalendar(id,false);  
    this.objects[id].disableButton = false;
    this.objects[id].editCalendar.enable = true;
    this.setBgImgEditCalendar(id, this.imgEnable);
  },
  enableEditCalendar: function(id)
  {
    this.objects[id].editCalendar.enable = true;
  },
  formatFecha: function(id, anio, mes, dia)
  {
    var formato = '';
    var auxs = '';
    var strAnio = anio + '';
    var strMes = mes + '';
    var strDia = dia + '';
	var f = calendars.format;
    while (strAnio.length < 2) 
    {
      auxs = strAnio;
      strAnio = '0' + auxs;
      auxs = strAnio;
    }
    while (strMes.length < 2) 
    {
      auxs = strMes;
      strMes = '0' + auxs;
      auxs = strMes;
    }
    while (strDia.length < 2) 
    {
      auxs = strDia;
      strDia = '0' + auxs;
      auxs = strDia;
    }
    if (f == 'DDMMYYYY') 
    {
      formato = strDia + calendars.objects[id].separator + strMes + calendars.objects[id].separator + strAnio;
    }
    if (f == 'MMDDYYYY') 
    {
      formato = strMes + calendars.objects[id].separator + strDia + calendars.objects[id].separator + strAnio;
    }
    if (f == 'YYYYDDMM') 
    {
      formato = strAnio + calendars.objects[id].separator + strDia + calendars.objects[id].separator + strMes;
    }
    if (f == 'YYYYMMDD') 
    {
      formato = strAnio + calendars.objects[id].separator + strMes + calendars.objects[id].separator + strDia;
    }
    return formato;
  },
  formatTwoDigit: function(num)
  {
    var v = '';
    if (num < 10) 
      v = '0' + num;
    else 
      v = '' + num;
    return v;
  },
     getFieldFind : function(id)
     {
       return this.objects[id].fieldFind;
     },
     setFieldFind : function(id, fieldFind)
     {
       this.objects[id].fieldFind = fieldFind;
     },
  getCaptionCell : function(id)
  {
    return this.objects[id].tablaEdit.rows[0].cells[1];
  },  
  getStrDbDate : function(id)
  {
    var strDbDate = this.formatTwoDigit(this.getYear(id)) + '-' + this.formatTwoDigit(this.getIntMonth(id)) + '-' + this.formatTwoDigit(this.getDay(id));
    return strDbDate;
  },
  getText : function(id) 
  {
	var strDbDate = "";	
	if (this.getFechaFromEdit(id).length > 0) 
	{ 
	  strDbDate = this.formatTwoDigit(this.getYear(id)) + '-' + this.formatTwoDigit(this.getIntMonth(id)) + '-' + this.formatTwoDigit(this.getDay(id));
	}
	return strDbDate;
  },
  getFechaFromEdit: function(id)
  {
    return calendars.objects[id].editCalendar.value;
  },
  getDifference: function(id, recordDayInit, recordDayFinal)
  {  	
    this.objects[id].fecha1 = new Date(recordDayInit.intYear, recordDayInit.intMonth, recordDayInit.intDay);
    this.objects[id].fecha2 = new Date(recordDayFinal.intYear, recordDayFinal.intMonth, recordDayFinal.intDay);
	var diff = this.objects[id].fecha2 - this.objects[id].fecha1;
    return diff; 
  },
  getDifferenceInDays: function(id, recordDayInit, recordDayFinal)
  {
  	var diff = this.getDifference(id, recordDayInit, recordDayFinal)/1000/3600/24;
    return diff; //RETORNA LA DIFERENCIA EN DIAS
  },
  getObject: function(id)
  {
    return this.objects[id].panel;
  },
  getEditCalendar: function(id)
  {
    return this.objects[id].divTablaEdit;
  },
  getIntObject: function(id)
  {
    return this.objects[id];
  },
  getDays: function(id)
  {
    return this.objects[id].days;
  },
  getYear: function(id)
  {
    return this.objects[id].actYear;
  },
  getMonth: function(id)
  {
    return this.objects[id].month;
  },
  getIntMonth: function(id)
  {
  	var m = 0;
  	if(!this.objects[id].isSelectedDay)
    {
		m = this.strToIntMonth(this.objects[id].actMonth)+1;
	}
	else
	{
		m = this.strToIntMonth(this.objects[id].month)+1;
	}	
    return m
  },
  getDay: function(id)
  {
    return this.objects[id].daySelected;
  },
  getWeekDay : function(id)
  {
	var d = new Date(this.getYear(id), this.getIntMonth(id)-1, this.getDay(id));
    d.setDate(this.objects[id].daySelected);
    return this.dia[d.getDay()];
  },
  getRecordDate: function(day, month, year)
  {
    rd = new Object();
    rd.day = day;
    rd.month = month;
    rd.year = year;
    rd.intDay = parseInt(day,10);
    rd.intMonth = this.strToIntMonth(month);
    rd.intYear = parseInt(year,10);
    return rd;
  },
  getStrDate: function(id)
  {
    var strDate = this.getDay(id) + this.objects[id].separator + this.getIntMonth(id) + this.objects[id].separator + this.getYear(id);
    return strDate;
  },
  getValue: function(id)
  {
    return this.getStrDate(id);
  },
  hide: function(id)
  {
  	calendars.objects[id].img.div.style.borderStyle = 'outset';
    if(!this.objects[id].isSelectedDay)
    {
      var d = this.objects[id].actDay;
      var m = this.strToIntMonth(this.objects[id].actMonth)+1;
      var y = this.objects[id].actYear;
      f = this.formatFecha(id, y, m, d);
      this.updateFecha(id,f);
    }
    calendars.objects[id].isShow = false;
    this.objects[id].panel.style.display = "none";
    this.objects[id].onHideCalendar();
  },
  hideEditCalendar: function(id)
  {
    this.objects[id].divTablaEdit.style.display = "none";
  },
  isEmpty : function(s)
  {
     var i;
     var c;
     var whitespace = "\t\n\r";  
     if((s == null) || (s.length==0))
       return true;
     for(i=0; i<s.length; i++)
     {
       c=s.charAt(i);
       if(whitespace.indexOf(c) == -1)
         return false; 
     }
     return true;
  },
  intToStrMonth: function(intMonth)
  {
    if (intMonth > -1 && intMonth < 12) 
      return this.mes[intMonth];
    else 
      return -1;
  },
  nextMonth: function(id)
  {     
    if(this.objects[id].objDate.getMonth()==0)
    {
      if(this.objects[id].actMonth=='Diciembre')
      {
         if(this.objects[id].actYear==this.objects[id].year) 
         {
           this.objects[id].objDate.setYear(this.objects[id].year+1);
         }
      }
    }
    this.objects[id].objDate.setMonth(this.objects[id].objDate.getMonth()+1);
    this.calc(id);
    this.show(id);
    this.objects[id].onChangeMonth();
  },
  nextYear: function(id)
  {
    this.objects[id].objDate.setYear(this.objects[id].objDate.getFullYear() + 1);
    this.calc(id);
    this.show(id);
    this.objects[id].onChangeYear();
  },
  onClick: function(id, func)
  {
    this.objects[id].tableDays.onclick = new Function(func);
  },
  
  onShowCalendar : function(id, funct)
  {  
    this.objects[id].onShowCal = new Function(funct);  
  },
  onDbClick: function(id, func)
  {
    this.objects[id].tableDays.ondblclick = new Function(func);
  },
  onSelectedDay: function(id, funct)
  {
    this.objects[id].onSelectedDay = new Function(funct);
  },
  onChangeYear: function(id, funct)
  {
    this.objects[id].onChangeYear = new Function(funct);
  },
  onChangeMonth: function(id, funct)
  {
    this.objects[id].onChangeMonth = new Function(funct);
  },
  onHide: function(id, funct)
  {
    this.objects[id].onHideCalendar = new Function(funct);
  },
  priorMonth: function(id)
  {
    this.objects[id].objDate.setMonth(parseInt(this.objects[id].objDate.getMonth(),10) - 1);
    this.calc(id);
    this.show(id);
    this.objects[id].onChangeMonth();
  },
  priorYear: function(id)
  {
    this.objects[id].objDate.setYear(this.objects[id].objDate.getFullYear() - 1);
    this.calc(id);
    this.show(id);
    this.objects[id].onChangeYear();
  },
  readOnlyEditCalendar: function(id, readOnly)
  {
    this.objects[id].editCalendar.readOnly = readOnly;
    if (readOnly == true) 
    {
      //this.setBGColorEditCalendar(id, "#F0F0F0");
      this.objects[id].editCalendar.style.opacity = 0.3;
    }
    else 
    {
      //this.setBGColorEditCalendar(id, "#FFFFFF");
      this.objects[id].editCalendar.style.opacity = 1;
    }
  },
  setFocusEdit : function(id)
  {
  	this.objects[id].editCalendar.focus();
  },
  setBorderWidthIcon: function(id, width)
  {
    this.objects[id].img.div.style.borderWidth = width + 'px';
  },
  setIconProperties: function(id, margin, width, height)
  {
    this.objects[id].img.style.width = width + 'px';
    this.objects[id].img.style.height = height + 'px';
    this.objects[id].img.div.style.width = (width - 1) + 'px';
    this.objects[id].img.div.style.height = (height - 1) + 'px';
    this.objects[id].tablaEdit.rows[0].cells[4].style.width = margin + 'px';
  },
  setBGColorEditCalendar: function(id, color)
  {
    //this.objects[id].editCalendar.style.background = color;
  },
  setFormat: function(id, f)
  {
    calendars.format = f;
  },
  setBorderStyleEditCalendar: function(id, style)
  {
    //this.objects[id].editCalendar.style.borderStyle = style;
  },
  setColorCaption: function(id, colorFont)
  {
    //this.objects[id].tablaEdit.rows[0].cells[1].style.color = colorFont;
  },
  setFontEditCalendar: function(id, fontFamily, size, colorFont)
  {
    //this.objects[id].editCalendar.style.fontFamily = fontFamily;
    //this.objects[id].editCalendar.style.fontSize = size + 'px';
    //this.objects[id].editCalendar.style.color = colorFont;
  },
  setFontStyleCaption: function(id, s, w)
  {
    calendars.objects[id].tablaEdit.rows[0].cells[1].style.fontStyle = s;
    calendars.objects[id].tablaEdit.rows[0].cells[1].style.fontWeight = w;
  },
  setWidthCaption: function(id, width)
  {
    this.objects[id].tablaEdit.rows[0].cells[1].style.width = width + 'px';
  },
  setFontCaption: function(id, fontFamily, size, colorFont)
  {
    //this.objects[id].tablaEdit.rows[0].cells[1].style.fontFamily = fontFamily;
    //this.objects[id].tablaEdit.rows[0].cells[1].style.fontSize = size + 'px';
    //this.setColorCaption(id, colorFont);
  },
  setSeparatorCar: function(id, sep)
  {
    this.objects[id].separator = sep;
  },
  setCaption: function(id, caption, margin, widthCaption)
  {
  	this.objects[id].widthCaption = widthCaption;
    this.objects[id].margin = margin; 
    this.objects[id].cap.nodeValue = caption;
    this.objects[id].tablaEdit.rows[0].cells[2].style.width = margin + "px";
    if(widthCaption!=null && widthCaption!=undefined)
      this.objects[id].tablaEdit.rows[0].cells[1].style.width = widthCaption + "px";
    if(this.objects[id].widthEditCalendar!=undefined && this.objects[id].widthEditCalendar!=null)
    {
      var wt = 22+parseInt(this.objects[id].widthCaption,10) + parseInt(this.objects[id].margin,10) + parseInt(this.objects[id].widthEditCalendar,10);
      this.setWidthBoxContainer(id,wt);    	
    }
  },
  setWidthEditCalendar: function(id, width)
  {
  	this.objects[id].widthEditCalendar = width;
    this.objects[id].editCalendar.style.width = width + 'px';
    if(this.objects[id].widthCaption!=undefined && this.objects[id].widthCaption!=null)
    {
      var wt = 22+parseInt(this.objects[id].widthCaption,10) + parseInt(this.objects[id].margin,10) + parseInt(this.objects[id].widthEditCalendar,10);
 	  this.setWidthBoxContainer(id,wt);
    }
  },
  strToIntMonth: function(strMonth)
  {
    for (i = 0; i < 12; i++) 
    {
      if (this.mes[i] == strMonth) 
        return i;
    }
    return -1;
  },
  setYear: function(id, year)
  {
    this.objects[id].year = year;
    this.objects[id].objDate.setYear(year);
    this.objects[id].divTablaEdit.objDate.setYear(year);
  },
  setMonth: function(id, month)
  {  
    this.objects[id].month = month;
    this.objects[id].objDate.setMonth(month);
    this.objects[id].divTablaEdit.objDate.setMonth(month);
  },
  setDay: function(id, day)
  {
    this.objects[id].daySelected = day;
    this.objects[id].divTablaEdit.daySelected = day;
    this.objects[id].objDate.setDate(day);
    this.objects[id].divTablaEdit.objDate.setDate(day);
  },
  setObjAttrib: function(id, objAttr, env)
  {  
  	this.objects[id].loadBGImg = objAttr.getLoadBGImg();
    this.objects[id].colorCells = objAttr.Color.calendarCells[env];
    this.objects[id].colorTextDay = objAttr.Color.calendarTextDay[env];
    this.objects[id].colorCellDay = objAttr.Color.calendarCellDay[env];
    this.objects[id].colorText = objAttr.Color.calendarText[env];
    this.objects[id].colorTextSelected = objAttr.Color.calendarTextSelected[env];
    this.objects[id].colorCellSelected = objAttr.Color.calendarCellSelected[env];
    this.objects[id].tableInf.style.fontFamily = objAttr.Font.cells[env];
    this.objects[id].tableDays.style.fontFamily = objAttr.Font.cells[env];
    this.objects[id].buttonMonthDer.style.fontSize = "12px";
    this.objects[id].buttonMonthIzq.style.fontSize = "12px";
    this.objects[id].buttonYearDer.style.fontSize = "12px";
    this.objects[id].buttonYearIzq.style.fontSize = "12px";
    this.objects[id].buttonClose.style.fontSize = "12px";
    this.objects[id].tableInf.style.fontSize = "10px";
    this.objects[id].panel.style.fontSize = "10px";
    this.objects[id].panel.style.height = "175px";
    this.objects[id].tableDays.style.height = "122px";
    this.setBGColorEditCalendar(id, objAttr.Color.bgEditor[env]);
    this.setFontEditCalendar(id, objAttr.Font.editor[env], objAttr.Size.editFont[env], objAttr.Color.textEditor[env]);
    this.setFontCaption(id, objAttr.Font.editor[env], objAttr.Size.editFont[env], objAttr.Color.textEditorCaption[env]);
    this.setFontStyleCaption(id, objAttr.Font.styleEditorCaption[env], objAttr.Font.weightEditorCaption[env]);
    if (this.objects[id].loadBGImg) 
    {
      this.bgError = objAttr.BgImg.bgError[env];	
      this.setBgBarImg(id, objAttr.BgImg.barTitle[env]);
	  this.imgEnable=objAttr.BgImg.bgEdit[env];
	  this.imgDisable = objAttr.BgImg.bgButtonDisable[env];
	  if(this.objects[id].disableButton)
        this.setBgImgEditCalendar(id,objAttr.BgImg.bgButtonDisable[env]);
      else
        this.setBgImgEditCalendar(id,objAttr.BgImg.bgEdit[env]);
    }
    this.setPropertyIcon(id, objAttr.Color.calendarBgTitleIcon[env], objAttr.Color.calendarTextTitleIcon[env],	
    objAttr.Color.calendarBgColorIcon[env], objAttr.Color.calendarTextIcon[env]);
    this.objects[id].editCalendar.className = this.objects[id].nameComponent + 'Css'+attrib.getActualEnv();
    this.objects[id].tablaEdit.rows[0].cells[1].className = 'calendarsCaptionCss'+attrib.getActualEnv();
    
  },
  setObjAttribToAll: function(objAttrib, env)
  {
    for (i = 0; i < this.ids.length; i++) 
    {
      this.setObjAttrib(this.ids[i], attrib, env);
    }
  },
  setFechaToEdit: function(id, strFecha)
  {  	
    if (this.allTrim(strFecha))
    {
      this.updateFecha(id, strFecha);
      this.objects[id].editCalendar.value = strFecha;
    }
  },
  allTrim: function(sString)
  {
    var s1 = calendars.leftTrim(sString);
    var s2 = calendars.rightTrim(s1);
    return s2;
  },
  leftTrim: function(sString)
  {
    while (sString.substring(0, 1) == ' ') 
    {
      sString = sString.substring(1, sString.length);
    }
    return sString;
  },
  rightTrim: function(sString)
  {
    while (sString.substring(sString.length - 1, sString.length) == ' ') 
    {
      sString = sString.substring(0, sString.length - 1);
    }
    return sString;
  },
  setMarginTopBottom : function(id,marginTB)
  {
	var mtb = parseInt(marginTB,10);
   	this.objects[id].tablaEdit.rows[0].style.height = mtb +'px';
  }, 
  setMarginTopBottomToAll : function(marginTB)
  {
    for (i = 0; i < this.ids.length; i++) 
	{
	  this.setMarginTopBottom(this.ids[i],marginTB);
	}	
  },  
  setDataType : function(id, dataType)
  {
  	this.objects[id].dataType = dataType;
  	this.objects[id].divTablaEdit.dataType = dataType;
  },
  setMargin: function(id, margin)
  {
    this.objects[id].tablaEdit.rows[0].cells[2].style.width = margin + "px";
  },
  setMarginLeft: function(id, marginL)
  {
    this.objects[id].tablaEdit.rows[0].cells[0].style.width = marginL + "px";
  },
  setDataIcon: function(id)
  {
  	var m = this.getMonth(id).toUpperCase();
  	var mx = m.charAt(0)+m.charAt(1)+m.charAt(2);
  	this.objects[id].tablaImg.rows[0].cells[0].innerHTML = mx;
    this.objects[id].tablaImg.rows[1].cells[0].innerHTML=this.objects[id].daySelected;
  },
  selectedDay: function(id, day)
  {
    this.objects[id].isSelectedDay = true;
    for (i = 1; i < 7; i++) 
    {
      for (j = 0; j < 7; j++) 
      {
        this.objects[id].tableDays.rows[i].cells[j].style.backgroundColor = this.objects[id].colorCells;
        this.objects[id].tableDays.rows[i].cells[j].style.color = this.objects[id].colorText;
        if (this.objects[id].tableDays.rows[i].cells[j].innerHTML == day) 
        {
          this.objects[id].tableDays.rows[i].cells[j].style.backgroundColor = this.objects[id].colorCellSelected;
          this.objects[id].tableDays.rows[i].cells[j].style.color = this.objects[id].colorTextSelected;
          this.objects[id].daySelected = day;
        }
      }
    }
    var y = calendars.objects[id].year;    
    var m = calendars.getIntMonth(id) + '';
    var d = calendars.getDay(id);
    calendars.setYear(id, y);
    calendars.setMonth(id, m);
    calendars.setDay(id, d);    
    var f = calendars.formatFecha(id, y, m, d);
	calendars.setFechaToEdit(id, f);
    calendars.hide(id);
    this.objects[id].isSelectedMonth = true;
    this.objects[id].onSelectedDay();
  },
  setPosition: function(id, x, y)
  {
    this.objects[id].panel.style.position = "absolute";
    this.objects[id].panel.style.left = x + "px";
    this.objects[id].panel.style.top = y + "px";
  },
  setPositionEditCalendar: function(id, x, y)
  {
    this.objects[id].divTablaEdit.style.position = "absolute";
    this.objects[id].divTablaEdit.style.left = x + "px";
    this.objects[id].divTablaEdit.style.top = y + "px";
  },
  setRelativePosition: function(id)
  {
    this.objects[id].panel.style.position = "relative";
  },
  setFocus: function(id)
  {
    this.objects[id].editCalendar.focus();
  },
  clear: function(id)
  {
    this.objects[id].editCalendar.value = "";
  },
  showEditCalendar: function(id)
  {
    this.objects[id].divTablaEdit.style.display = "block";
  },
  show: function(id)
  {
    this.objects[id].isSelectedDay = false;
    this.objects[id].isSelectedMonth = false;
    calendars.objects[id].isShow = true;
    this.objects[id].panel.style.backgroundColor = this.objects[id].colorCells;
    this.objects[id].tableInf.rows[0].style.backgroundColor = this.objects[id].colorCells;
    this.objects[id].panelYear.style.backgroundColor = this.objects[id].colorCells;
    this.objects[id].panelMonth.style.backgroundColor = this.objects[id].colorCells;
    this.objects[id].panelYear.style.color = this.objects[id].colorText;
    this.objects[id].panelMonth.style.color = this.objects[id].colorText;
    var dia = ["D", "L", "M", "M", "J", "V", "S"];
    var k = 0;
    for (x = 0; x <= 6; x++) 
    {
      for (j = 0; j < 7; j++) 
      {
        this.objects[id].tableDays.rows[x].cells[j].style.width = "34px";
        this.objects[id].tableDays.rows[x].cells[j].setAttribute("align", "center");
        if (x == 0) 
        {
          this.objects[id].tableDays.rows[x].cells[j].style.backgroundColor = this.objects[id].colorCellDay;
          this.objects[id].tableDays.rows[x].cells[j].style.color = this.objects[id].colorTextDay;
          this.objects[id].tableDays.rows[x].cells[j].innerHTML = dia[j].bold();
        }
        else 
        {
          this.objects[id].tableDays.rows[x].cells[j].style.backgroundColor = this.objects[id].colorCells;
          this.objects[id].tableDays.rows[x].cells[j].style.color = this.objects[id].colorText;
          if (j >= this.objects[id].dayWeekInit || x > 1) 
          {
            if (k < this.objects[id].days.length) 
            {
              this.objects[id].tableDays.rows[x].cells[j].onmousedown = new Function("calendars.selectedDay('" + id + "'," + this.objects[id].days[k] + ")");
              if (this.objects[id].days[k] == this.objects[id].daySelected) 
              {
                this.objects[id].tableDays.rows[x].cells[j].style.backgroundColor = this.objects[id].colorCellSelected;
                this.objects[id].tableDays.rows[x].cells[j].style.color = this.objects[id].colorTextSelected;
                this.objects[id].tableDays.rows[x].cells[j].innerHTML = this.objects[id].days[k];
              }
              else 
                this.objects[id].tableDays.rows[x].cells[j].innerHTML = this.objects[id].days[k];
              k++;
            }
            else 
            {
              this.objects[id].tableDays.rows[x].cells[j].innerHTML = ".";
            }
          }
          else 
          {
            this.objects[id].tableDays.rows[x].cells[j].innerHTML = ".";
          }
        }
      }
    }
    this.objects[id].panelYear.innerHTML = this.objects[id].year;
    this.objects[id].panelMonth.innerHTML = this.objects[id].month;
    this.objects[id].panel.style.display = "block";
  },
  sendToFrom: function(id, order)
  {
    this.objects[id].panel.style.zIndex = 1000 * order;
  },
  setBgBarImg: function(id, barImg)
  {
    this.objects[id].panel.style.backgroundImage = "url(" + this.bgImgPath + barImg + ")";
    this.objects[id].tableInf.rows[0].cells[0].style.backgroundImage = "url(" + this.bgImgPath + barImg + ")";
    this.objects[id].tableInf.rows[0].cells[1].style.backgroundImage = "url(" + this.bgImgPath + barImg + ")";
    this.objects[id].tableInf.rows[0].cells[2].style.backgroundImage = "url(" + this.bgImgPath + barImg + ")";
    this.objects[id].tableInf.rows[0].cells[3].style.backgroundImage = "url(" + this.bgImgPath + barImg + ")";
    this.objects[id].tableInf.rows[0].cells[4].style.backgroundImage = "url(" + this.bgImgPath + barImg + ")";
    this.objects[id].tableInf.rows[0].cells[5].style.backgroundImage = "url(" + this.bgImgPath + barImg + ")";
    this.objects[id].tableInf.rows[0].cells[6].style.backgroundImage = "url(" + this.bgImgPath + barImg + ")";
  },
  setBgImgEditCalendar: function(id, barImg)
  { 
    //this.objects[id].editCalendar.style.backgroundImage = "url(" + this.bgImgPath + barImg + ")";
  },
  setLoadBGImg: function(id, activeLoad)
  {
    this.objects[id].loadBGImg = activeLoad;
  },
  setLoadBGImgAll: function(activeLoad)
  {
    for (i = 0; i < this.ids.length; i++) 
    {
      this.setLoadBGImg(this.ids[i], activeLoad);
    }
  },
  setValidEmpty : function(id)
  {
  	this.objects[id].validEmpty = true;	
  },
  setValidGreaterThan : function(id, secondCalendar)
  {
  	this.objects[id].secondCalendar = secondCalendar.getIntObject(id);
  	this.objects[id].validGreaterThan = true;	
  },
  setValidLessThan : function(id, secondCalendar)
  {
  	this.objects[id].secondCalendar = secondCalendar.getIntObject(id);
  	this.objects[id].validLessThan = true;	
  },
  setValidRange : function(id, calendarEnd, maxRange)
  {
  	calendarEnd.maxRange = maxRange;
  	this.objects[id].maxRange = maxRange;
  	this.objects[id].validRange = true;	
  	calendarEnd.validRange = false;
  	if(calendarEnd.parentPositionRange == -1)
  	{
  	  calendarEnd.positionRange = 0;
  	  this.objects[id].parentPositionRange = 0;
  	}
  	else
  	{
  	  calendarEnd.positionRange = calendarEnd.parentPositionRange + 1;  
  	  this.objects[id].parentPositionRange = calendarEnd.positionRange;
  	}    
  	calendarEnd.secondCalendar = this.objects[id];
  	this.objects[id].secondCalendar = calendarEnd.getIntObject(id);
  },  
  setRound : function(id)
  {
    this.objects[id].divTablaEdit.style.borderWidth='0px';
    this.objects[id].divTablaEdit.style.borderRadius='1em';
    this.objects[id].divTablaEdit.style.border='0px';
    this.objects[id].divTablaEdit.style.borderStyle='none';
    this.objects[id].panel.style.borderWidth='0px';
    this.objects[id].panel.style.borderRadius='1em';
    this.objects[id].panel.style.border='0px';
    this.objects[id].panel.style.borderStyle='groove';
  },
  updateFecha: function(id, strFecha)
  {
    if (this.format == 'DDMMYYYY') 
    {
	  var d = parseInt(strFecha.substr(0, 2),10);
      var m = parseInt(strFecha.substr(3, 2),10);
	  var y = parseInt(strFecha.substr(6, 4),10);
	  var dt = new Date(y, m-1, d);
	  this.objects[id].objDate = dt;
	  
	  calendars.setMonth(id, this.objects[id].objDate.getMonth());
	  
	  this.objects[id].month = this.intToStrMonth(m - 1);
      this.objects[id].objDate.setYear(y);
	  this.objects[id].year = this.objects[id].objDate.getFullYear();
	  this.objects[id].daySelected = d;
	  this.objects[id].actDay = d;
    }
    if (this.format == 'MMDDYYYY') 
    {
      var d = parseInt(strFecha.substr(3, 2),10);
	  var m = parseInt(strFecha.substr(0, 2),10);
	  var y = strFecha.substr(6, 4);
      var dt = new Date(y, m-1, d);
	  this.objects[id].objDate = dt;
	  calendars.setMonth(id,this.objects[id].objDate.getMonth());
	  this.objects[id].month = this.intToStrMonth(m - 1);
      this.objects[id].objDate.setYear(y);
	  this.objects[id].year = this.objects[id].objDate.getFullYear();
	  this.objects[id].daySelected = d;
	  this.objects[id].actDay = d;
    }
    if (this.format == 'YYYYDDMM') 
    {	
	  var d = parseInt(strFecha.substr(5, 2),10);	
      var m = parseInt(strFecha.substr(8, 2),10);
	  var y = strFecha.substr(0, 4);
	  var dt = new Date(y, m-1, d);
	  this.objects[id].objDate = dt;
	  calendars.setMonth(id,this.objects[id].objDate.getMonth());
	  this.objects[id].month = this.intToStrMonth(m - 1);
      this.objects[id].objDate.setYear(y);
	  this.objects[id].year = this.objects[id].objDate.getFullYear();
	  this.objects[id].daySelected = d;
	  this.objects[id].actDay = d;
    }
    if (this.format == 'YYYYMMDD') 
    {
      var m = parseInt(strFecha.substr(5, 2),10);
	  var d = parseInt(strFecha.substr(8, 2),10);
	  var y = strFecha.substr(0, 4);
	  var dt = new Date(y, m-1, d);
	  this.objects[id].objDate = dt;
	  this.objects[id].objDate.setMonth(this.objects[id].objDate.getMonth());
	  this.objects[id].month = this.intToStrMonth(m - 1);
      this.objects[id].objDate.setYear(y);
	  this.objects[id].year = this.objects[id].objDate.getFullYear();
	  this.objects[id].daySelected = d;
	  this.objects[id].actDay = d;
    }
    this.objects[id].actMonth = this.mes[m-1];
    this.objects[id].actYear = this.objects[id].objDate.getFullYear();
    this.objects[id].divTablaEdit.daySelected = this.objects[id].daySelected;
    
  },
  setPropertyIcon : function(id, bgTitle,colorTitle,bgColor,color)
  {
  	this.objects[id].tablaImg.rows[0].cells[0].style.backgroundColor = bgTitle;
    this.objects[id].tablaImg.rows[0].cells[0].style.color = colorTitle;
    this.objects[id].tablaImg.rows[1].cells[0].style.backgroundColor = bgColor;
    this.objects[id].tablaImg.rows[1].cells[0].style.color = color;
  },
  valid : function(id,objMsg)
  {
    if(objMsg)
      objMsg.setMsg('',false);
  	if(this.objects[id].validGreaterThan)
	{
	    var d = this.objects[id].divTablaEdit.compareCalendars(this.objects[id].secondCalendar);
	    if (d > 0)
	    {
	      this.setBgImgEditCalendar(id, this.bgError);
	  	  this.objects[id].secondCalendar.divTablaEdit.setBgImgEditCalendar(this.bgError);
	   	   if(this.valid.arguments.length < 2 || objMsg==null)
             alert('['+this.objects[id].cap.nodeValue + '] NO DEBE SER MAYOR QUE ['+this.objects[id].secondCalendar.cap.nodeValue+']');
		   else
		     objMsg.setMsg('['+this.objects[id].cap.nodeValue+'] NO DEBE SER MAYOR QUE ['+this.objects[id].secondCalendar.cap.nodeValue+']',true);  
		   return false;
	    }	
	    if (this.objects[id].editCalendar.readOnly)
        {
          this.setBgImgEditCalendar(id, this.imgDisable);
          this.objects[id].secondCalendar.divTablaEdit.setBgImgEditCalendar(this.imgDisable);
        }  
        else
        {
          this.setBgImgEditCalendar(id, this.imgEnable);
          this.objects[id].secondCalendar.divTablaEdit.setBgImgEditCalendar(this.imgEnable);
        };			
	}
	if(this.objects[id].validLessThan)
	{
		var d = this.objects[id].divTablaEdit.compareCalendars(this.objects[id].secondCalendar);
	    if (d < 0)
	    {
	      this.setBgImgEditCalendar(id, this.bgError);
	  	  this.objects[id].secondCalendar.divTablaEdit.setBgImgEditCalendar(this.bgError);
	   	   if(this.valid.arguments.length < 2 || objMsg==null)
             alert('['+this.objects[id].cap.nodeValue+'] NO DESE SER MENOR QUE ['+this.objects[id].secondCalendar.cap.nodeValue)+']';
		   else
		     objMsg.setMsg('['+this.objects[id].cap.nodeValue+'] NO DEBE SER MENOR QUE ['+this.objects[id].secondCalendar.cap.nodeValue+']', true);  
		   return false;	
	    }
	    if (this.objects[id].editCalendar.readOnly)
        {
          this.setBgImgEditCalendar(id, this.imgDisable);
          this.objects[id].secondCalendar.divTablaEdit.setBgImgEditCalendar(this.imgDisable);
        }  
        else
        {
          this.setBgImgEditCalendar(id, this.imgEnable);
          this.objects[id].secondCalendar.divTablaEdit.setBgImgEditCalendar(this.imgEnable);
        };	 						
	}
	
  	if(this.objects[id].validRange)
	{		
	  var valor = this.objects[id].secondCalendar.editCalendar.value;
	  var valor2 = this.objects[id].editCalendar.value;
	  if(!this.isEmpty(valor))	
	  {	   
	  	
	  	if(this.objects[id].positionRange < this.objects[id].secondCalendar.positionRange)
	  	{ 
	 	  var rd2 = this.getRecordDate(this.getDay(id), this.getMonth(id),this.getYear(id));
	  	  var rd1 = this.getRecordDate(this.objects[id].secondCalendar.divTablaEdit.getDay(id), 
		  					       this.objects[id].secondCalendar.divTablaEdit.getMonth(id),
	  						       this.objects[id].secondCalendar.divTablaEdit.getYear(id));	
	  	}
	  	else
	  	{	
	  	  var rd1 = this.getRecordDate(this.getDay(id), this.getMonth(id),this.getYear(id));
	  	  var rd2 = this.getRecordDate(this.objects[id].secondCalendar.divTablaEdit.getDay(id), 
		  					       this.objects[id].secondCalendar.divTablaEdit.getMonth(id),
	  						       this.objects[id].secondCalendar.divTablaEdit.getYear(id));
	  	}
	    var d = this.getDifferenceInDays(id, rd1, rd2);
	    var dfc = this.objects[id].divTablaEdit.compareCalendars(this.objects[id].secondCalendar);
	    if (dfc > 0)
	    {
	      this.setBgImgEditCalendar(id, this.bgError);
	  	  this.objects[id].secondCalendar.divTablaEdit.setBgImgEditCalendar(this.bgError);
	   	   if(this.valid.arguments.length < 2 || objMsg==null)
             alert('['+this.objects[id].cap.nodeValue+'] NO DEBE SER MAYOR QUE ['+this.objects[id].secondCalendar.cap.nodeValue+']');
		   else
		     objMsg.setMsg('['+this.objects[id].cap.nodeValue+'] NO DEBE SER MAYOR QUE ['+this.objects[id].secondCalendar.cap.nodeValue+']', true);  
		   return false;	
	    }
	    if(Math.abs(d)  > this.objects[id].maxRange)
	    {
	  	  this.setBgImgEditCalendar(id, this.bgError);
	  	  this.objects[id].secondCalendar.divTablaEdit.setBgImgEditCalendar(this.bgError);
	   	   if(this.valid.arguments.length < 2 || objMsg==null)
             alert('EL PERIODO DE FECHAS ' + '('+valor2+')'+' - ('+valor+') NO DEBE SER MAYOR A '+this.objects[id].maxRange+' DIAS');
		   else
		     objMsg.setMsg('EL PERIODO DE FECHAS ' + '('+valor2+')'+' - ('+valor+') NO DEBE SER MAYOR A '+this.objects[id].maxRange+' DIAS', true);  
		   return false;  
	    }
	    else
	    {
	  	  if (this.objects[id].editCalendar.readOnly)
	      {
	     	this.setBgImgEditCalendar(id, this.imgDisable);
	     	this.objects[id].secondCalendar.divTablaEdit.setBgImgEditCalendar(this.imgDisable);
	      }  
	      else
	      {
	     	this.setBgImgEditCalendar(id, this.imgEnable);
	     	this.objects[id].secondCalendar.divTablaEdit.setBgImgEditCalendar(this.img);
	      }
		  if (objMsg!= null)
		    objMsg.setMsg('', false);
		  return true;   
	    }
	  }
	  else
	  {
	  	 this.setBgImgEditCalendar(id, this.bgError);
	  	 this.objects[id].secondCalendar.divTablaEdit.setBgImgEditCalendar(this.bgError);
	   	 if(this.valid.arguments.length < 2 || objMsg==null)
           alert('ERROR : CAMPOS VACIOS');
		 else
		   objMsg.setMsg('ERROR : CAMPOS VACIOS', true);  
		 return false;
	  }
	}
	
  	if(this.objects[id].validEmpty)
	{
	  var valor = this.objects[id].editCalendar.value;
	  if(this.isEmpty(valor))
	  {
	  	 this.setBgImgEditCalendar(id, this.bgError);
	   	 if(this.valid.arguments.length < 2 || objMsg==null)
           alert('CAMPO: ['+this.objects[id].cap.nodeValue+'] SIN VALOR');
		 else
		   objMsg.setMsg('CAMPO: ['+this.objects[id].cap.nodeValue+'] SIN VALOR', true);  
		 return false;  
	  }
	  else
	  {
	  	 if (this.objects[id].editCalendar.readOnly)
	     {
	     	this.setBgImgEditCalendar(id, this.imgDisable);
	     }  
	     else
	     {
	     	this.setBgImgEditCalendar(id, this.imgEnable);
	     }
		 if (objMsg!= null)
		    objMsg.setMsg('', false);
		 return true;   
	  }
	}
  },
  validAll : function(objMsg)
  {     
     for(ix=0; ix<this.ids.length; ix++)
     {
	   if(this.validAll.arguments.length > 0)
         this.valid(this.ids[ix], objMsg);
	   else
	     this.valid(this.ids[ix]);
     }
  }
}
