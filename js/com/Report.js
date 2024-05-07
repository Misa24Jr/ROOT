Report = function(orientation)
{
  var timeDelay = 1000;
  var fontProperty = 
  {
     color : 'black',
     size : 12,
     family : 'arial',
     fontType : 'normal',  
     rgbaObj : new Object(),
     align : 'left'    
  };
  var hrTableProperty = 
  {
    lineColor : 'rgb(200,200,200)',
    fontColor : 'rgb(0,0,0)',
    fontSize  : 8,
    widthCell : 98,
    heightCell : 28,    
    fontFamily : 'helvetica',
    totalRow : 22,
    titCol : ['HORAS','LUN','MAR','MIE','JUE','VIE','SAB','DOM'],
    totalCol : 8
  };
  
  var tableProperty =
  {
     widthLine : 1,
     heightRow : 28,
     fontFamilyCell : 'helvetica',
     fontCellColorRED : 0,
     fontCellColorGREEN : 0,
     fontCellColorBLUE : 0,     
     fontSizeCell : 8,
     fontFamilyTitle : 'helvetica',
     fontColorTitleRED : 0,
     fontColorTitleGREEN : 0,
     fontColorTitleBLUE : 0,
     fontSizeTitle : 12,
     fontTypeTitle : 'bold',
     heightRowTitle : 14,
     backGroundColorTitleRED : '170',
     backGroundColorTitleGREEN : '170',
     backGroundColorTitleBLUE : '245',
     TRANSPARENCY : 1,
     oddColorRED : 225,
     oddColorGREEN : 225,
     oddColorBLUE : 255,
     evenColorRED : 240,
     evenColorGREEN : 240,
     evenColorBLUE : 255,
     oddColorRow : '',
     evenColorRow :'',
     sizeCols : [],
     totalRow : 21,
     newTotalRow : 24,
     yTable : 1,
     alignData : [],
     columnDataPages : new Array(),
     rgbaObj : new Object(),
  	 newHeightBarCell : null
  };

  var pdfFormat = 'letter';
  var metricPDFPage = 'pt';
  var dimPDFPage = [];
  var widthReport = 792;
  var pageSize = 1024;
  var actX=0;
  var actY=0;
  
  var heightFooterBar = 30;
  var yiFooter = pageSize - ( heightFooterBar + 10 );
  if(orientation=='landscape')
  {
    widthReport = 1124;
    pageSize = 790;   
    tableProperty.totalRow = 21;
    tableProperty.newTotalRow = 24; 
    yiFooter = pageSize - ( heightFooterBar + 10 );
  }
  else
  {
    tableProperty.totalRow = 30;
    tableProperty.newTotalRow = 37;  
  };
  if(arguments.length > 1)
  {
  	if(arguments[1])
  	  widthReport = arguments[1];
    if(arguments[2])
      pageSize = arguments[2];
    yiFooter = pageSize - ( heightFooterBar + 10 );
  }
  tableProperty.oddColorRow = 'rgb('+tableProperty.oddColorRED+','+tableProperty.oddColorGREEN+','+tableProperty.oddColorBLUE+')';
  tableProperty.evenColorRow ='rgb('+tableProperty.evenColorRED+','+tableProperty.evenColorGREEN+','+tableProperty.evenColorBLUE+')';
  var pages = new Array();
  pages.length=0;
  var totalPages = 0;
  var totalRD = 0;
  var pr = new Printer();
  var data = new Array();
  var tables = new Array();
  tables.length=0;
  var hTables = new Array();
  hTables.length=0;
  var headImgX = 0;
  var headImgY = 1;
  var heightHeadImg = 100;
  tableProperty.yTable = headImgY + heightHeadImg + 110;
  var actualPage = 0;
  var itemFooter = 0;
  var itemHeadImg = -1;
  var objColorFooter = null;
  var defaultImg = 'images/amarillo.jpg';
  var strDate = new Date().toString('dd, MM ,yyyy '); 
  if(typeof Tool!='undefined')
    strDate = Tool.getTimestamp();
  var totalReg = 0;
  var repeatHead = true;
  var typeShow = ['datauristring','dataurlstring','dataurlnewwindow','datauri'];
  excel = new Excel();
  var excelProperty =
  {
      data_St : new Array(),
      title : 'Reporte',
      sheetName :'mySheet',
      arrayTitles : new Array()
  };
  var separator = '|';
  var colorDlgSeparator ='rgba(80,80,80,0.8)';
  var barra = new Object();
  var barraInt = new Object();
  var pdfDoc = null;  
  var jpdf = new jsPDF(orientation);
  
  generalCanvas = new CanvasBuilder(null,widthReport,pageSize);
  generalctx = generalCanvas.getCanvasContext();
  
  var utf8_encode = function ( string ) 
  {
    return unescape( encodeURIComponent( string ) );
  };

  var utf8_decode = function ( string ) 
  {
    return decodeURIComponent( escape( string ) );
  };
  
  this.getStringRenderSize = function(txt){
  	return jpdf.getStringUnitWidth(txt)*jpdf.getFontRenderSize();
  }; 
  
  this.setCeroIzq = function(valor)
  {
  	if(valor!=undefined && valor!="")
  	{
  	  var resp = "";
  	  if( valor < 10 )
  	    resp = "0"+valor;
  	  else
  	    resp = valor+"";
      return resp;
   }
   return "";
  };
  
  this.setPDFFormat = function(format, metric, arr)
  {
    pdfFormat = format;
    if(metric!=undefined)	
      metricPDFPage = metric;
    if(arr!=undefined)
      dimPDFPage = arr;
  };
  
  this.setFooterBarPositionY = function(positionY)
  {
      yiFooter = positionY;
  };
  
  this.getFooterBarPositionY = function()
  {
     return yiFooter; 
  };
  
  this.setStrDate = function(jsonName)
  {
     strDate = json(jsonName).data[0];
  };

  this.setSeparator = function(spr)
  {
    setSeparator(spr);
  };
  
  this.setBgColorDlgTxt = function(bgColor)
  {
     colorDlgSeparator = bgColor;
  };
  
  this.setNoRepeatHead = function(newTotalRow)
  {
     repeatHead = false;
     if(newTotalRow)
       tableProperty.newTotalRow = newTotalRow;
  };
  
  this.setTotalRowTable = function(totalRow)
  {
     tableProperty.totalRow = totalRow;
  };
  
  this.setNewPosYTable = function(newPosY)
  {
     tableProperty.yTable = newPosY;
  };
  
  this.setTableCellProperties = function( widthLine, fontFamilyCell, fontSizeCell)
  {
     tableProperty.widthLine = widthLine;
     tableProperty.fontFamilyCell = fontFamilyCell;
     tableProperty.fontSizeCell = fontSizeCell;  
  };
  
  this.setHeightRow = function(heightRow)
  {
    tableProperty.heightRow = heightRow;  
  };
  
  this.setTableRowProperties = function(heightRow, RED, GREEN, BLUE, fontFamilyTitle, 
                                        fontColorTitleRED, fontColorTitleGREEN,fontColorTitleBLUE, 
                                        fontSizeTitle, oddColorRow, evenColorRow, newHeightBarCell,fontTypeTitle)
  {
     tableProperty.heightRow = heightRow;
     tableProperty.backGroundColorTitleRED = RED;
     tableProperty.backGroundColorTitleGREEN = GREEN;
     tableProperty.backGroundColorTitleBLUE = BLUE;
     tableProperty.fontFamilyTitle = fontFamilyTitle;
     tableProperty.fontColorTitleRED = fontColorTitleRED;
     tableProperty.fontColorTitleGREEN = fontColorTitleGREEN;
     tableProperty.fontColorTitleBLUE = fontColorTitleBLUE;
     tableProperty.fontSizeTitle = fontSizeTitle;
     tableProperty.oddColorRow = oddColorRow;
     tableProperty.evenColorRow = evenColorRow;
     tableProperty.newHeightBarCell = newHeightBarCell;
     if(fontTypeTitle)
       tableProperty.fontTypeTitle = fontTypeTitle;
  };
  
  this.setSizeColumnArray = function(sizeColArray)
  {
     tableProperty.sizeCols = sizeColArray;
  };
        
  this.setAlignData = function(alignArray)
  {
    tableProperty.alignData = alignArray; 
  };
  
  this.setFontProperties = function(rgbaObj,sizeP,familyP,fontTypeP)
  {
     fontProperty.rgbaObj = rgbaObj;
     fontProperty.color = rgbaObj.getRGBA();
     fontProperty.size = sizeP;
     fontProperty.family = familyP;
     fontProperty.fontType = fontTypeP;
  };
  
  this.setTextAlign = function(align)
  {
     fontProperty.align = align;
  };
  
  this.getRGBAObj = function(RED, GREEN, BLUE, TRANSPARENCY)
  {  
     var rgba = new Object(); 
     if(!TRANSPARENCY)
       TRANSPARENCY = 1;
     rgba.getRGBA     = function(){ return "rgba("+RED+","+GREEN+","+BLUE+","+TRANSPARENCY+")";};
     rgba.getRGB      = function(){ return "rgba("+RED+","+GREEN+","+BLUE+")";};
     rgba.getColor    = function(){ return "#"+RED.toString(16)+GREEN.toString(16)+BLUE.toString(16);};
     rgba.getIntBlue  = function(){ return parseInt(BLUE,10);};
     rgba.getIntRed   = function(){ return parseInt(RED,10);};
     rgba.getIntGreen = function(){ return parseInt(GREEN,10);};
     rgba.red = RED;
     rgba.green = GREEN;
     rgba.blue = BLUE;
     rgba.transparency = TRANSPARENCY;
     return rgba;   
  };
  
  this.setWidthReport = function(w)
  {
     widthReport = w; 
  };
  
  this.setColorText = function(colorP)
  {
     fontProperty.color = colorP; 
  };  
  
  this.setFontFamily = function(familyP)
  {
     fontProperty.family = familyP; 
  };
  
  this.setSizeText = function(sizeP)
  {
     fontProperty.size = sizeP; 
  };
  
  this.setFontType = function(fontTypeP)
  {
     fontProperty.fontType = fontTypeP;  
  };
  
  this.setPageSize = function(pageSizeP)
  {
     changePageSize(pageSizeP);
  };
  
  this.getPageSize = function()
  {
     return pageSize;
  };
  
  this.clearData = function()
  {
    data.length = 0;    
  };
  
  this.getNewY = function(y1)
  {
  	if(y1===undefined)
  	  return actY - (pageSize * actualPage);
  	return actY - (pageSize * actualPage) + y1;
  };
  
  this.getStrFromArray = function(cad, sep)
  {
  	 var cadena='';
  	 for(var i=0; i<cad.length; i++)
  	 {
  	 	if( i < cad.length -1)
  	 	  cadena += cad[i] + sep+' ';
  	 }
  	 cadena += cad[cad.length -1];  
  	 return cadena;
  };
  
  this.measureText = function(txt)
  {
  	return pages[actualPage].ctx.measureText(txt).width;
  };
  
  this.addText = function(x1,y1,text,mode, pdfCoord, pdfX1, pdfY1, align)
  {
  	if(pdfCoord==undefined || pdfCoord==null)
  	  pdfCoord=false;
  	y1+= pageSize * (actualPage);
    addTxt(x1, y1, text, mode, pdfCoord, pdfX1, pdfY1, align);
    actX=x1;
    actY=y1;
  };  
  
  this.addRotateText = function(x1,y1,text, angle)
  {
  	 y1+= pageSize * (actualPage);
    addRotateTxt(x1, y1, text, angle);
    actX=x1;
    actY=y1;
  };
  
  this.addTextJustRight = function(x1,y1,text,mode, pdfCoord, pdfx1, pdfy1)
  {
  	if(pdfCoord==undefined || pdfCoord==null) pdfCoord=false;
  	y1+= pageSize * (actualPage);
  	var nx = parseInt(x1, 10) - parseInt(pages[actualPage].ctx.measureText(text.trim()).width, 10);
    addTxt(nx,y1,text.trim(),mode,pdfCoord, pdfx1, pdfy1);
    actX=x1;
    actY=y1;
  }; 
  
  this.addJustifyText = function(x1,y1,text,sizeLn,mode,pdfCoord)
  {
  	if(pdfCoord==undefined || pdfCoord==null)
  	  pdfCoord=false;
  	y1+= pageSize * (actualPage);
    addJustifyTxt(x1,y1,text,sizeLn,mode,pdfCoord);
    actX=x1;
    actY=y1;
  };
  
  var addJustifyTxtToPDF = function(item)
  {
     var t = data[item];      
     var red = t.rgbaObj.getIntRed(); 
     var green = t.rgbaObj.getIntGreen();
     var blue = t.rgbaObj.getIntBlue();  
     pdfDoc.setTextColor(red,green,blue);
     pdfDoc.setFont(t.fontFamily);
     pdfDoc.setFontType(t.fontType);
     pdfDoc.setFontSize(t.fontSize-0.7);
     pdfDoc.addJustifyText(data[item].text, data[item].x1, data[item].y1, data[item].sizeLn);
  };
  
  var addJustifyTxt = function(x1,y1,text,sizeLn,mode,pdfCoord)
  {
      var item = data.length;
      data[item] = new Object();
      data[item].pdfCoord = pdfCoord;
      data[item].text = text;
      data[item].x1 = x1;
      data[item].y1 = y1;
      data[item].sizeLn = sizeLn;
      data[item].colorText = fontProperty.color;
      data[item].fontSize = fontProperty.size;
      data[item].fontFamily = fontProperty.family;
      data[item].fontType = fontProperty.fontType;
      data[item].rgbaObj = fontProperty.rgbaObj;
      data[item].offsetPage = y1 % pageSize;
      data[item].itemPage = parseInt(y1/pageSize,10);
      data[item].itemPage0 = parseInt(y1/pageSize,10);
      data[item].typeData = 'addJustifyTxt';
      data[item].item = item; 
      data[item].mode = mode;
      newPage(data[item].itemPage);
  };
  
  this.addTextAlign = function(x1,y1,text,hAlign,vAlign,mode,pdfCoord)
  {
  	if(pdfCoord==undefined || pdfCoord==null)
  	  pdfCoord=false;
  	y1+= pageSize * (actualPage);
    addTxtAlign(x1,y1,text,hAlign,vAlign,mode,pdfCoord);
    actX=x1;
    actY=y1;
  };
  
  var addTxtAlign = function(x1,y1,text,hAlign,vAlign,mode,pdfCoord)
  {
      var item = data.length;
      data[item] = new Object();
      data[item].pdfCoord = pdfCoord;
      data[item].text = text;
      data[item].x1 = x1;
      data[item].y1 = y1;
      data[item].hAlign = hAlign;
      data[item].vAlign = vAlign;
      data[item].colorText = fontProperty.color;
      data[item].fontSize = fontProperty.size;
      data[item].fontFamily = fontProperty.family;
      data[item].fontType = fontProperty.fontType;
      data[item].rgbaObj = fontProperty.rgbaObj;
      data[item].offsetPage = y1 % pageSize;
      data[item].itemPage = parseInt(y1/pageSize,10);
      data[item].itemPage0 = parseInt(y1/pageSize,10);
      data[item].typeData = 'addTxtAlign';
      data[item].item = item; 
      data[item].mode = mode;
      newPage(data[item].itemPage);
  };
  
  var addTxtAlignToPDF = function(item)
  {
     var t = data[item];      
     var red = t.rgbaObj.getIntRed(); 
     var green = t.rgbaObj.getIntGreen();
     var blue = t.rgbaObj.getIntBlue();  
     pdfDoc.setTextColor(red,green,blue);
     pdfDoc.setFont(t.fontFamily);
     pdfDoc.setFontType(t.fontType);
     pdfDoc.setFontSize(t.fontSize-0.7);
     pdfDoc.textAlign(data[item].text, data[item].x1, data[item].y1, data[item].hAlign, data[item].vAlign);
  };
  
  var addTxt = function(x1,y1,text,mode,pdfCoord, pdfx1, pdfy1, align)
  {
      var item = data.length;
      data[item] = new Object();
      data[item].pdfCoord = pdfCoord;
      data[item].text = text;
      data[item].align = align;
      data[item].x1 = x1;
      data[item].y1 = y1;
      data[item].colorText = fontProperty.color;
      data[item].fontSize = fontProperty.size;
      data[item].fontFamily = fontProperty.family;
      data[item].fontType = fontProperty.fontType;
      data[item].rgbaObj = fontProperty.rgbaObj;
      data[item].offsetPage = y1 % pageSize;
      data[item].itemPage = parseInt(y1/pageSize,10);
      data[item].itemPage0 = parseInt(y1/pageSize,10);
      data[item].typeData = 'text';
      data[item].item = item; 
      data[item].mode = mode;
      if(pdfx1)
        data[item].pdfx1 = pdfx1;
      if(pdfy1)
        data[item].pdfy1 = pdfy1;
      newPage(data[item].itemPage);
  };
  
  var addRotateTxt = function(x1,y1,text,angle)
  {
      var item = data.length;
      data[item] = new Object();
      data[item].text = text;
      data[item].angle = angle;
      data[item].x1 = x1;
      data[item].y1 = y1;
      data[item].colorText = fontProperty.color;
      data[item].fontSize = fontProperty.size;
      data[item].fontFamily = fontProperty.family;
      data[item].fontType = fontProperty.fontType;
      data[item].rgbaObj = fontProperty.rgbaObj;
      data[item].offsetPage = y1 % pageSize;
      data[item].itemPage = parseInt(y1/pageSize,10);
      data[item].itemPage0 = parseInt(y1/pageSize,10);
      data[item].typeData = 'rotateText';
      data[item].item = item; 
      newPage(data[item].itemPage);
  };
  
  var getRGBA = function(RED, GREEN, BLUE, TRANSPARENCY)
  {  
     var rgba = new Object(); 
     if(!TRANSPARENCY)
       TRANSPARENCY = 1;
     rgba.getRGBA     = function(){ return "rgba("+RED+","+GREEN+","+BLUE+","+TRANSPARENCY+")";};
     rgba.getRGB      = function(){ return "rgba("+RED+","+GREEN+","+BLUE+")";};
     rgba.getColor    = function(){ return "#"+RED.toString(16)+GREEN.toString(16)+BLUE.toString(16);};
     rgba.getIntBlue  = function(){ return parseInt(BLUE,10);};
     rgba.getIntRed   = function(){ return parseInt(RED,10);};
     rgba.getIntGreen = function(){ return parseInt(GREEN,10);};
     rgba.red = RED;
     rgba.green = GREEN;
     rgba.blue = BLUE;
     rgba.transparency = TRANSPARENCY;
     return rgba;   
  };
    
  
  
  this.setTimeDelayRenderImg = function(td)
  {
  	timeDelay = td;
  };
  
  this.addImage = function(x1, y1, x2, y2, imageFullPath, mode, pdfCoord, pdfx1, pdfy1)
  {
  	 if(pdfCoord==undefined || pdfCoord==null)
  	   pdfCoord=false;
  	 y1+= pageSize * (actualPage);
  	 y2+= pageSize * (actualPage);
     var item = data.length; 
     data[item] = new Object();
     data[item].pdfCoord = pdfCoord;
     data[item].src = imageFullPath;
     data[item].x1 = x1;
     data[item].y1 = y1;
     data[item].x2 = x2;
     data[item].y2 = y2;
     data[item].dy = y2 - y1;
     data[item].dx = x2 - x1;
     data[item].offsetPage = y1 % pageSize;
     data[item].itemPage = parseInt(y2/pageSize,10);
     data[item].itemPage0 = parseInt(y2/pageSize,10);
     data[item].typeData = 'image';
     data[item].item = item;
     data[item].imgSts = false;
     data[item].mode = mode;
     if(pdfx1)
       data[item].pdfx1 = pdfx1;
     if(pdfy1)
       data[item].pdfy1 = pdfy1;
     actX=x2;
     actY=y2;
     newPage(data[item].itemPage);
  };
  
  this.setHeightImage = function(hi)
  { 
  	heightHeadImg = hi;
  };
  
  this.resetHeightImage = function()
  { 
  	heightHeadImg = 100;
  };
  
  this.setHeadImage = function(imageFullPath,mode)
  {
     var item = data.length; 
     data[item] = new Object();
     data[item].src = imageFullPath;
     data[item].x1 = headImgX;
     data[item].y1 = headImgY;
     data[item].x2 = widthReport;
     data[item].y2 = headImgY+heightHeadImg;
     data[item].dy = heightHeadImg;
     data[item].dx = widthReport - headImgX;
     data[item].offsetPage = headImgY % pageSize;
     data[item].itemPage = parseInt((headImgY+heightHeadImg)/pageSize,10);
     data[item].itemPage0 = parseInt((headImgY+heightHeadImg)/pageSize,10);
     data[item].typeData = 'headImage';
     data[item].item = item;
     data[item].mode = mode;
     newPage(data[item].itemPage);
     itemHeadImg = item;
  };
  
  this.addBar = function(x1,y1,x2,y2,rgbaObj,mode,pdfCoord, pdfx1, pdfy1)
  {
  	 if(pdfCoord==undefined || pdfCoord==null)
  	   pdfCoord=false;
  	 y1+= pageSize * (actualPage);
  	 y2+= pageSize * (actualPage);
     var item = data.length;
     data[item] = new Object();
     data[item].pdfCoord = pdfCoord;
     data[item].x1 = x1;
     data[item].y1 = y1;
     data[item].x2 = x2;
     data[item].y2 = y2;
     data[item].dy = y2 - y1;
     data[item].dx = x2 - x1;
     data[item].offsetPage = y1 % pageSize;
     data[item].itemPage = parseInt(y2/pageSize,10);
     data[item].itemPage0 = parseInt(y2/pageSize,10);
     data[item].rgbaObj = rgbaObj;
     data[item].typeData = 'bar';
     data[item].item = item;
     data[item].mode = mode;
     if(pdfx1)
       data[item].pdfx1 = pdfx1;
     if(pdfy1)
       data[item].pdfy1 = pdfy1;
     actX=x2;
     actY=y2;
     newPage(data[item].itemPage);
  };
  
  this.addBarGradient = function(x1,y1,x2,y2,rgbaObj,rgbaObj1,rgbaObj2,mode, pdfx1, pdfy1)
  {
  	 y1+= pageSize * (actualPage);
  	 y2+= pageSize * (actualPage); 
     var item = data.length; 
     data[item] = new Object();  
     data[item].x1 = x1;
     data[item].y1 = y1;
     data[item].x2 = x2;
     data[item].y2 = y2;
     data[item].dy = y2 - y1;
     data[item].dx = x2 - x1;
     data[item].offsetPage = y1 % pageSize;
     data[item].itemPage = parseInt(y2/pageSize,10);
     data[item].itemPage0 = parseInt(y2/pageSize,10);
     data[item].rgbaObj =  rgbaObj;
     data[item].rgbaObj1 = rgbaObj1;
     data[item].rgbaObj2 = rgbaObj2;
     data[item].typeData = 'barGradient';
     data[item].item = item;
     data[item].mode = mode;
     if(pdfx1)
       data[item].pdfx1 = pdfx1;
     if(pdfy1)
       data[item].pdfy1 = pdfy1;
     newPage(data[item].itemPage);
     actX=x2;
     actY=y2;
  };
  
  this.addRectangle = function(x1,y1,x2,y2,rgbaObj,mode, pdfCoord, pdfx1, pdfy1)
  {
  	 if(pdfCoord==undefined || pdfCoord==null)
  	   pdfCoord=false;
  	 y1+= pageSize * (actualPage);
  	 y2+= pageSize * (actualPage);
     var item = data.length; 
     data[item] = new Object();  
     data[item].pdfCoord=pdfCoord;
     data[item].x1 = x1;
     data[item].y1 = y1;
     data[item].x2 = x2;
     data[item].y2 = y2;
     data[item].dy = y2 - y1;
     data[item].dx = x2 - x1;
     data[item].offsetPage = y1 % pageSize;
     data[item].itemPage = parseInt(y2/pageSize,10);
     data[item].itemPage0 = parseInt(y2/pageSize,10);
     data[item].rgbaObj = rgbaObj;
     data[item].typeData = 'rectangle';
     data[item].item = item;
     data[item].mode = mode;
     if(pdfx1)
       data[item].pdfx1 = pdfx1;
     if(pdfy1)
       data[item].pdfy1 = pdfy1;
     newPage(data[item].itemPage);
     actX=x2;
     actY=y2;
  };
  
  this.addRectanglePDF = function(x1,y1,x2,y2,rgbaObj,mode)
  {
  	 y1+= pageSize * (actualPage);
  	 y2+= pageSize * (actualPage);
     var item = data.length; 
     data[item] = new Object();  
     data[item].x1 = x1;
     data[item].y1 = y1;
     data[item].x2 = x2;
     data[item].y2 = y2;
     data[item].dy = y2 - y1;
     data[item].dx = x2 - x1;
     data[item].offsetPage = y1 % pageSize;
     data[item].itemPage = parseInt(y2/pageSize,10);
     data[item].itemPage0 = parseInt(y2/pageSize,10);
     data[item].rgbaObj = rgbaObj;
     data[item].typeData = 'rectanglePDF';
     data[item].item = item;
     data[item].mode = mode;
     newPage(data[item].itemPage);
     actX=x2;
     actY=y2;
  };
  
  this.addSimpleTable = function(x1,y1,rgbaObj,width,totalCell,heightCell,mode, pdfCoord, pdfx1, pdfy1)
  {
  	 if(pdfCoord==undefined || pdfCoord==null)
  	   pdfCoord=false;
  	 y1+= pageSize * (actualPage);
     var item = data.length; 
     data[item] = new Object();  
     data[item].pdfCoord = pdfCoord;
     data[item].x1 = x1;
     data[item].y1 = y1;
     data[item].dy = heightCell*totalCell;
     data[item].dx = width;
     data[item].heightCell = heightCell;
     data[item].totalCell = totalCell;
     data[item].offsetPage = y1 % pageSize;
     var y2 = y1 + heightCell*totalCell;
     data[item].itemPage = parseInt(y2/pageSize,10);
     data[item].itemPage0 = parseInt(y2/pageSize,10);
     data[item].rgbaObj = rgbaObj;
     data[item].typeData = 'simpleTable';
     data[item].item = item;
     data[item].mode = mode;
     if(pdfx1)
       data[item].pdfx1 = pdfx1;
     if(pdfy1)
       data[item].pdfy1 = pdfy1;
     newPage(data[item].itemPage);
     actX=x1+width;
     actY=y2;
  };
  
  this.addAbsTable = function(x1, y1, widthColArray, totalRow, heightCell, mode, pdfCoord, pdfx1, pdfy1)
  {
  	 if(pdfCoord==undefined || pdfCoord==null)
  	   pdfCoord = false;
  	 y1+= pageSize * (actualPage);
     var item = data.length; 
     var totalCol = widthColArray.length;
     data[item] = new Object();  
     data[item].pdfCoord = pdfCoord;
     data[item].x1 = x1;
     data[item].y1 = y1;
     data[item].dy = heightCell*totalRow;
     var tw=0;
     for(var i=0; i<widthColArray; i++)
       tw+=widthColArray[i];
     data[item].dx = tw;
     data[item].heightCell = heightCell;
     data[item].totalCell = totalRow;
     data[item].totalCol = totalCol;
     data[item].sizeCols = widthColArray;
     data[item].offsetPage = y1 % pageSize;
     var y2 = y1 + heightCell*totalRow;
     data[item].itemPage = parseInt(y2/pageSize,10);
     data[item].itemPage0 = parseInt(y2/pageSize,10);
     data[item].rgbaObj = getRGBA(0,0,0,1);//negro
     data[item].typeData = 'AbsTable';
     data[item].item = item;
     data[item].mode = mode;
     if(pdfx1)
       data[item].pdfx1 = pdfx1;
     if(pdfy1)
       data[item].pdfy1 = pdfy1;
     newPage(data[item].itemPage);
     actX=x1+tw;
     actY=y2;
  };
  
  this.addAbsTableRGB = function(x1, y1, widthColArray, totalRow, heightCell, rgbObj, mode, pdfCoord, pdfx1, pdfy1)
  {
  	 if(pdfCoord==undefined || pdfCoord==null)
  	   pdfCoord = false;
  	 y1+= pageSize * (actualPage);
     var item = data.length; 
     var totalCol = widthColArray.length;
     data[item] = new Object();  
     data[item].pdfCoord = pdfCoord;
     data[item].x1 = x1;
     data[item].y1 = y1;
     data[item].dy = heightCell*totalRow;
     var tw=0;
     for(var i=0; i<widthColArray; i++)
       tw+=widthColArray[i];
     data[item].dx = tw;
     data[item].heightCell = heightCell;
     data[item].totalCell = totalRow;
     data[item].totalCol = totalCol;
     data[item].sizeCols = widthColArray;
     data[item].offsetPage = y1 % pageSize;
     var y2 = y1 + heightCell*totalRow;
     data[item].itemPage = parseInt(y2/pageSize,10);
     data[item].itemPage0 = parseInt(y2/pageSize,10);
     data[item].rgbaObj = rgbObj;
     data[item].typeData = 'AbsTable';
     data[item].item = item;
     data[item].mode = mode;
     if(pdfx1)
       data[item].pdfx1 = pdfx1;
     if(pdfy1)
       data[item].pdfy1 = pdfy1;
     newPage(data[item].itemPage);
     actX=x1+tw;
     actY=y2;
  };
  
  this.addSimpleTablePDF = function(x1,y1,rgbaObj,width,totalCell,heightCell,mode)
  {
  	 y1+= pageSize * (actualPage);
     var item = data.length; 
     data[item] = new Object();  
     data[item].x1 = x1;
     data[item].y1 = y1;
     data[item].dy = heightCell*totalCell;
     data[item].dx = width;
     data[item].heightCell = heightCell;
     data[item].totalCell = totalCell;
     data[item].offsetPage = y1 % pageSize;
     var y2 = y1 + heightCell*totalCell;
     data[item].itemPage = parseInt(y2/pageSize,10);
     data[item].itemPage0 = parseInt(y2/pageSize,10);
     data[item].rgbaObj = rgbaObj;
     data[item].typeData = 'simpleTablePDF';
     data[item].item = item;
     data[item].mode = mode;
     newPage(data[item].itemPage);
     actX=x1+width;
     actY=y2;
  };
  
  this.getJasonTableFrame = function(arrFields, arrColumnSizes, arrData, heightCell)
  {
  	
  	var context = pages[actualPage].ctx;
  	var arrTf = [];
  	
  	function chunkCount(str, sizeLine)
  	{
  	  	
  	  var cc = parseInt(context.measureText(str).width/sizeLine,10);
  	  if(context.measureText(str).width % sizeLine > 0)
  	    cc++;   	    
  	  return cc;
  	};  
  	
  	function chunkStrArr(str, countLine)
  	{	
  	  var arr = new Array();
  	  var idx=0;
  	  var carCount = parseInt(str.length/countLine, 10);
  	  for(var i=0; i<str.length; i++)
  	  {
  	  	if(arr[idx]==undefined)
  	  	  arr[idx] = '';
  	  	arr[idx] += str.charAt(i);
  	  	if(arr[idx].length > carCount)
  	  	  idx++;
  	  }	
  	  return arr;  	
    };	  	
  	
  	var tableFrame = function ()
  	{
  	  this.fields 	 	= [];
  	  this.columnSizes 	= [];
  	  this.data	 	 	= [[],[]]; 
  	  this.heightCell	= 100;	
  	  this.totalRows   	= 1;
  	  this.totalCols   	= 1;
  	  this.tableWidth  	= 100;
  	  this.tableHeight 	= 100;
  	  this.totalPages  	= 1;
  	  this.dataCol     	= [];
  	};
  	
  	function createTF()
  	{
  	  arrTf[arrTf.length] = new tableFrame();
  	  return arrTf[arrTf.length-1];
  	}
  	
  	var tf = new tableFrame();
  	if(heightCell!=undefined)
  	  tf.heightCell = heightCell;  
  	if(arrFields!=undefined)
  	  tf.fields = [].concat(arrFields);
  	if(arrColumnSizes!=undefined)  
  	{
  	  tf.columnSizes = [].concat(arrColumnSizes);
  	  var t = tf.columnSizes.length;
  	  tf.tableWidth = 0;
  	  for(var i=0; i<t; i++)
  	    tf.tableWidth +=tf.columnSizes[i]; 
  	};
  	
  	if(arrData!=undefined)
  	{
  	  tf.data = [].concat(arrData);
  	  tf.totalCols = tf.data.length;
  	  tf.totalRows = tf.data[0].length + 1;
  	  var val = [];
  	  for(var c=0; c<tf.data.length; c++)
  	  {
  	  	tf.dataCol[c]='';
  	  	val[c]=0;
  	  	var a=[];
  	    for(var f=0; f<tf.data[c].length; f++)
  	    {
  	      //cantidad de pedazos por linea	
		  var count = chunkCount(tf.data[c][f], tf.columnSizes[c]);
		  //arreglo string de los pedazos de linea
		  a = chunkStrArr(tf.data[c][f], count);
		  
		  //se concatenan los pedazon al arreglo de datos por columna
		  if(f<tf.data[c].length-1)
		  {
		  	for(var w=0; w<a.length; w++)
		  	  if(a[w]!=undefined)
		        tf.dataCol[c]+= a[w]+'\n';
		  }
		  else
		  {
		  	for(var w=0; w<a.length; w++)
		    {
		      if(a[w]!=undefined)
		      {	
		        if(w < a.length - 1)
		          tf.dataCol[c]+= a[w]+'\n';
		        else
		          tf.dataCol[c]+= a[w];
		      }
		    }
		  }
		  val[c]+=a.length;//total de lineas por columna
  	  	};		
  	  };
  	  var m = Math.max.apply(null,val);//maximo numero de lineas de todas las columnas
  	  var tht = m * tf.heightCell + tf.heightCell;//ancho de esta tabla
  	  var margen = 162;
  	  //total de paginas
  	  tf.totalPages = parseInt(tht/(pageSize-margen),10);
  	  if(tht % (pageSize-margen) > 0)
  	    tf.totalPages++; 
  	  var th = 0;
  	  if(tf.totalPages == 1 )  
  	    th = tht;//alto de una tabla
  	  else
  	    th = pageSize - margen;
  	  	//calcular total de lineas por pagina en la tabla
  	  var tlpp = parseInt(th/tf.heightCell);
  	  if(tht % tf.heightCell > 0)
  	    tlpp++;
  	  var dataC =[];
  	  for(var c=0; c<tf.totalCols; c++)
  	  {
  	  	  dataC[c] = tf.dataCol[c].split('\n');//lineas totales de la columna
  	  }
  	  for(var i=0; i<tf.totalPages; i++)
  	  { 
  	  	  createTF();	
  	  	  arrTf[i].fields = [].concat(tf.fields);
  	  	  arrTf[i].columnSizes = [].concat(tf.columnSizes);
  	  	  arrTf[i].heightCell	= tf.heightCell;
  	  	  arrTf[i].totalCols	= tf.totalCols;
  	  	  arrTf[i].tableWidth 	= tf.tableWidth;
  	  	  arrTf[i].totalPages	= tf.totalPages;
  	  	  arrTf[i].totalRows   = tlpp + 1;	
  	  	  arrTf[i].tableHeight = tf.heightCell * arrTf[i].totalRows;
  	  	  //verificamos la data por columnas
  	  	  for(var c=0; c<tf.totalCols; c++)
  	  	  {
  	  	  	arrTf[i].dataCol[c] =''; 	  
  	  	  	for(var idx=0; idx<tlpp; idx++)
  	  	  	{	
  	  	  	  if(dataC[c][idx+i*tlpp]!=undefined)
  	  	  	  {
  	  	  	  	arrTf[i].dataCol[c] += dataC[c][idx+i*tlpp]+'\n';
  	  	  	  }  	  	  	    
  	  	  	}
  	  	  } 	  	  	
  	  }
	  tf.tableHeight = th;
    };
    return arrTf;
  };
  
  this.addTableFrame = function(x1,y1,jsonTableFrame, rgbaObj, mode, pdfCoord, pdfx1, pdfy1)
  {
  	 if(pdfCoord == undefined || pdfCoord == null)
  	   pdfCoord = false;
  	 if(mode == undefined || mode == null)
  	   mode = false;
  	 var vy = [];
  	 for(var i=0; i<jsonTableFrame[0].totalPages; i++)
  	   vy[i] = i*pageSize + y1;
  	 for(var i=0; i<jsonTableFrame[0].totalPages; i++)
  	 {
  	   vy[i]+= pageSize * (actualPage);
       var item = data.length; 
       data[item] = new Object();  
       data[item].pdfCoord = pdfCoord;
       data[item].jsonFrame = jsonTableFrame[i];
       data[item].x1 = x1;
       data[item].y1 = vy[i]; 
       data[item].dy = jsonTableFrame[0].heightCell * jsonTableFrame[0].totalRows;
       data[item].dx = jsonTableFrame[0].tableWidth;
       data[item].offsetPage = vy[i] % pageSize;
       var y2 = vy[i] + jsonTableFrame[0].heightCell*jsonTableFrame[0].totalRows;
       data[item].itemPage = parseInt(y2/pageSize,10);
       data[item].itemPage0 = parseInt(y2/pageSize,10);
       data[item].rgbaObj = rgbaObj;
       data[item].typeData = 'tableFrame';
       data[item].item = item;
       data[item].mode = mode;
       if(pdfx1)
         data[item].pdfx1 = pdfx1;
       if(pdfy1)
         data[item].pdfy1 = pdfy1;
       newPage(data[item].itemPage);
       actX=x1+data[item].dx;
       actY=y2;
     }
  };
  
  this.addLine = function(x1,y1,x2,y2,rgbaObj,lineWidth,mode,pdfCoord, pdfx1, pdfy1)
  {
  	 if(pdfCoord==undefined || pdfCoord==null)
  	   pdfCoord = false;
  	 y1+= pageSize * (actualPage);
  	 y2+= pageSize * (actualPage);
     var item = data.length; 
     data[item] = new Object();
     data[item].pdfCoord = pdfCoord;  
     data[item].x1 = x1;
     data[item].y1 = y1;
     data[item].x2 = x2;
     data[item].y2 = y2 % pageSize;
     data[item].dy = y2 - y1;
     data[item].dx = x2 - x1;
     data[item].lineWidth = lineWidth;
     data[item].offsetPage = y1 % pageSize;
     data[item].itemPage = parseInt(y2/pageSize,10);
     data[item].itemPage0 = parseInt(y2/pageSize,10);
     data[item].rgbaObj = rgbaObj;
     data[item].typeData = 'line';
     data[item].item = item;
     data[item].mode = mode;
     if(pdfx1)
       data[item].pdfx1 = pdfx1;
     if(pdfy1)
       data[item].pdfy1 = pdfy1;
     newPage(data[item].itemPage);
     actX=x2;
     actY=y2;
  };
  
  this.getExcelObj = function()
  {
    return excel;  
  };
  
  this.addHeadTitle = function(title,mode, pdfCoord, pdfx1, pdfy1)
  { 
  	 if(pdfCoord==undefined || pdfCoord==null)
  	   pdfCoord=false;
     excelProperty.title = title; 
     var item = data.length; 
     data[item] = new Object(); 
     var x1 = parseInt(widthReport/2,10);
     data[item].pdfCoord=pdfCoord;
     data[item].x1 = x1;
     data[item].y1 = headImgY + heightHeadImg + fontProperty.size + 10; 
     data[item].headTitle = title; 
     data[item].colorText = fontProperty.color;
     data[item].fontSize = fontProperty.size;
     data[item].fontFamily = fontProperty.family;
     data[item].fontType = fontProperty.fontType;
     data[item].rgbaObj = fontProperty.rgbaObj;
     data[item].typeData = 'headTitle';
     data[item].item = item;
     data[item].offsetPage = data[item].y1 % pageSize;
     data[item].itemPage = parseInt((data[item].y1+fontProperty.size)/pageSize,10);
     data[item].itemPage0 = parseInt((data[item].y1+fontProperty.size)/pageSize,10);
     data[item].mode = mode;
     if(pdfx1)
       data[item].pdfx1 = pdfx1;
     if(pdfy1)
       data[item].pdfy1 = pdfy1;
     newPage(data[item].itemPage);
     actX=x1;
     actY=data[item].y1;
  };
  
  this.addFooterBar = function(rgbaObj, mode, pdfCoord, pdfx1, pdfy1)
  { 
  	 if(pdfCoord==undefined || pdfCoord==null)
  	   pdfCoord = false;
     var item = data.length; 
     data[item] = new Object();   
     data[item].pdfCoord = pdfCoord;
     data[item].typeData = 'footerBar'; 
     data[item].item = item;
     data[item].x1 = 0;
     data[item].y1 = yiFooter;
     data[item].x2 = widthReport;
     data[item].y2 = (yiFooter + heightFooterBar);
     data[item].dx = widthReport;
     data[item].dy = heightFooterBar;
     data[item].offsetPage = (yiFooter) % pageSize;
     data[item].itemPage = parseInt((yiFooter + heightFooterBar)/pageSize,10);
     data[item].itemPage0 = parseInt((yiFooter + heightFooterBar)/pageSize,10);
     data[item].rgbaObj = rgbaObj;
     data[item].typeData = 'footerBar';
     data[item].item = item;
     data[item].mode = mode;
     if(pdfx1)
       data[item].pdfx1 = pdfx1;
     if(pdfy1)
       data[item].pdfy1 = pdfy1;
     newPage(data[item].itemPage);
     itemFooter = item;
     objColorFooter = rgbaObj;
     actX=data[item].x2;
  };  
  
  var addDispProfObj = function(x1,y1,jsonHorario,jsonDisp)
  {
    var jh = jsonHorario.data;
    var jd = jsonDisp.data;
    var arrayImg = ['images/profesorEnable.png','images/profesorDisable.png'];    
    var item = data.length;
    data[item] = new Object();  
    data[item].idHorario = jh[0];
    data[item].horario = jh[1];        
    data[item].fila = new Array();
    for(var i=0; i<data[item].idHorario.length; i++)
      data[item].fila[jh[0][i]] = i;    
    data[item].col = new Array();         
    data[item].col = jd[3];           
    data[item].materias = jd[4];       
    data[item].item = item;
    data[item].x1 = x1;
    data[item].y1 = y1;
    data[item].itemPage   =  parseInt( y1 / pageSize,10);
    data[item].itemPage0  =  parseInt( y1 / pageSize,10);
    data[item].offsetPage =  y1 % pageSize;
    data[item].arrayData = [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    ];
    excelProperty.data_St = [
      ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
      ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
      ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
      ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
      ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
      ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
      ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
      ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-']
    ];
    excelProperty.data_St[0] = data[item].horario;
    tableProperty.sizeCols = [100,100,100,100,100,100,100,100];
    excelProperty.arrayTitles = hrTableProperty.titCol;
    data[item].arrayImg = arrayImg;
    
    for(var i = 0; i < jd[1].length; i++)
    {
        var f = data[item].fila[jd[1][i]];
        var c = data[item].col[i] - 1;
        var sts = data[item].materias[i];
        if(sts !='null')  
        {
          excelProperty.data_St[c+1][f] = 'Ocupado';  
          data[item].arrayData[c][f] = 1 
        }
        else
        {
          excelProperty.data_St[c+1][f] = 'Disponible';             
          data[item].arrayData[c][f] = 0 
        }
    };
    
    data[item].imgs = new Array();
    data[item].isImgLoad = new Array();
    data[item].typeData = 'imageHrTable';
    for(var i=0; i<arrayImg.length; i++)
    {
      data[item].imgs[i] = new Image();
      data[item].imgs[i].pos = i;
      data[item].imgs[i].onload = function()
      { 
        data[item].isImgLoad[this.pos] = true;    
      };
      data[item].imgs[i].src = arrayImg[i];
      data[item].isImgLoad[i] = false;
    };
    newPage(data[item].itemPage);      
  };
  
  
  this.addObjDispProf = function(x1,y1,jsonHorario,jsonDisp)
  {
  	y1+= pageSize * (actualPage);
    addDispProfObj(x1, y1, jsonHorario, jsonDisp);   
    actX=x1;
    actY=y1;
  };
  
  this.addDispProf = function(x1, y1)
  {
  	y1+= pageSize * (actualPage);
    addDispProfObj(x1,y1,json('getHorario'),json('getDispProfesor'));
    actX=x1;
    actY=y1;
  }; 
  
  this.addImageHrTable = function(horario, arrayImg, arrayData, x1, y1, pdfx1, pdfy1)
  {
  	y1+= pageSize * (actualPage);
    var item = data.length;
    data[item] = new Object();
    data[item].item = item;
    data[item].x1 = x1;
    data[item].y1 = y1;
    data[item].itemPage =  parseInt( y1 / pageSize,10);
    data[item].itemPage0 =  parseInt( y1 / pageSize,10);
    data[item].offsetPage = y1 % pageSize;
    data[item].arrayImg = arrayImg;
    data[item].horario = horario;
    data[item].arrayData = arrayData;
    data[item].imgs = new Array();
    data[item].isImgLoad = new Array();
    data[item].typeData = 'imageHrTable';
    for(var i=0; i<arrayImg.length; i++)
    {
      data[item].imgs[i] = new Image();
      data[item].imgs[i].pos = i;
      data[item].imgs[i].onload = function()
      { 
        data[item].isImgLoad[this.pos] = true;    
      }
      data[item].imgs[i].src = arrayImg[i];
      data[item].isImgLoad[i] = false;
    };
    if(pdfx1)
       data[item].pdfx1 = pdfx1;
    if(pdfy1)
       data[item].pdfy1 = pdfy1;
    newPage(data[item].itemPage);
    actX=x1;
    actY=y1;
  };
  
  this.addHorario = function(horario, arrayData, x1, y1)
  { 
  	y1+= pageSize * (actualPage);
    var item = data.length;
    data[item] = new Object();
    data[item].item = item;
    data[item].x1 = x1;
    data[item].y1 = y1;
    data[item].itemPage =  parseInt( y1 / pageSize,10);
    data[item].itemPage0 =  parseInt( y1 / pageSize,10);
    data[item].offsetPage = y1 % pageSize;
    data[item].horario = horario;
    data[item].fila = new Array();
    for(var i=0; i< horario.data[0].length; i++)
      data[item].fila[horario.data[0][i]] = i;  
    data[item].arrayData = arrayData;
    data[item].imgs = new Array();
    data[item].isImgLoad = new Array();
    data[item].typeData = 'horario';
    newPage(data[item].itemPage); 

    var ad = getArrayData();
    ad[0] = horario.data[1];
    for(var i=0; i<arrayData.data[0].length; i++)
    {
      if(arrayData.data[0][i]!='0')	
      {
        var f = data[item].fila[arrayData.data[0][i]];
        var c = arrayData.data[1][i];
        ad[c][f]= arrayData.data[2][i] +' '+
        '<br>' +  arrayData.data[3][i] +' '+
        '<br>' +  arrayData.data[4][i] +' '+
        '<br>' +  arrayData.data[5][i];
      }
    };
    excelProperty.data_St = ad;
    tableProperty.sizeCols = [150,100,100,100,100,100,100,100]
    excelProperty.arrayTitles = hrTableProperty.titCol;   
    actX=x1;
    actY=y1;
  };
  
  this.addJsonHorario = function(jsonHorario, jsonData, x1, y1)
  {
  	y1+= pageSize * (actualPage);
    var horario = json(jsonHorario);
    var arrayData = json(jsonData);
    var item = data.length;
    data[item] = new Object();
    data[item].item = item;
    data[item].x1 = x1;
    data[item].y1 = y1;
    data[item].itemPage =  parseInt( y1 / pageSize,10);
    data[item].itemPage0 =  parseInt( y1 / pageSize,10);
    data[item].offsetPage = y1 % pageSize;
    data[item].horario = horario;
    data[item].fila = new Array();
    for(var i=0; i< horario.data[0].length; i++)
      data[item].fila[horario.data[0][i]] = i;  
    data[item].arrayData = arrayData;
    data[item].imgs = new Array();
    data[item].isImgLoad = new Array();
    data[item].typeData = 'horario';
    newPage(data[item].itemPage);
    actX=x1;
    actY=y1;
  };
  
  this.addTable = function(idTable,arrayTitles, vx, vy)
  { 
     var vx1 = parseInt(widthReport/2,10);
     if(vx && vy )
     {
       vx1 = vx;  
       tableProperty.yTable = vy; 
     };       
     for(i=0;i<arrayTitles.length;i++)
      arrayTitles[i] = arrayTitles[i]; 
     excelProperty.arrayTitles = arrayTitles; 
     var item = data.length; 
     data[item] = new Object();  
     data[item].x1 = vx1;
     data[item].y1 = tableProperty.yTable;
     data[item].id = idTable;
     data[item].arrayTitles = arrayTitles;
     data[item].offsetPage = tableProperty.yTable % pageSize;
     data[item].itemPage = parseInt(tableProperty.yTable/pageSize,10);
     data[item].itemPage0 = parseInt(tableProperty.yTable/pageSize,10);
     data[item].typeData = 'table';   
     data[item].item = item;
     data[item].totalCol = arrayTitles.length;
     data[item].rgbaObj = this.getRGBAObj(tableProperty.backGroundColorTitleRED,
     tableProperty.backGroundColorTitleGREEN,
     tableProperty.backGroundColorTitleBLUE,
     tableProperty.TRANSPARENCY);
     hTables[idTable] = tableProperty.yTable + tableProperty.heightRow;  
     tables[idTable] = data[item];
     tableProperty.rgbaObj = this.getRGBAObj(tableProperty.fontColorTitleRED,
                                             tableProperty.fontColorTitleGREEN,
                                             tableProperty.fontColorTitleBLUE,tableProperty.TRANSPARENCY);
     actX=data[item].x1;
     actY=data[item].y1;
     newPage(data[item].itemPage);
  };
    
  this.addColumnData = function(idTable, columnData, pos)
  {
     var cte = parseInt(columnData.length/tableProperty.totalRow,10);
     var res = columnData.length %  tableProperty.totalRow;
     var tf = cte;
     if(res > 0)
       tf++;
     for(var i=0; i<tf; i++)
     {
       tableProperty.columnDataPages[i] = new Object();
       tableProperty.columnDataPages[i].columnData = new Array(); 
       tableProperty.columnDataPages[i].totalReg = columnData.length;  
       tableProperty.columnDataPages[i].acu = 0;         
     }
     var p=0;
     var cc = 0;
     var ac = 0;
     for(var c=0; c < columnData.length; c++)
     {
        if(c % tableProperty.totalRow == 0 && c > 0 && cc==0)
        {
           p++; 
           newPage(p);
           data[data.length-1].itemPage = p;
           tableProperty.columnDataPages[p].acu += tableProperty.columnDataPages[p-1].acu;
           cc++;
           if(repeatHead)
             cc=0;
           ac = tableProperty.columnDataPages[p].acu;
        }
        if(c % (tableProperty.newTotalRow + ac) == 0 && c > tableProperty.totalRow && !repeatHead)
        {   
           p++;  
           newPage(p);
           data[data.length-1].itemPage = p;
           tableProperty.columnDataPages[p].acu += tableProperty.columnDataPages[p-1].acu;
           cc++;
           ac = tableProperty.columnDataPages[p].acu;
        }
        tableProperty.columnDataPages[p].columnData[tableProperty.columnDataPages[p].columnData.length] = columnData[c];
        tableProperty.columnDataPages[p].acu ++;
     }   
     for(var i=0; i<tableProperty.columnDataPages.length; i++)
     {
       var item = data.length;
       data[item] = new Object();  
       data[item].id = idTable;
       data[item].pos = pos;
       data[item].columnData = tableProperty.columnDataPages[i].columnData;
       data[item].typeData = 'columnData'; 
       data[item].item = item;
       data[item].itemPage = i;  
       data[item].itemPage0 = i;
       data[item].totalReg = columnData.length;
     };  
  }; 

  this.addStructData = function(idTable, stData)
  {
     excelProperty.data_St = stData.data; 
     for(var i=0; i<stData.data.length; i++)
     {
        this.addColumnData(idTable, stData.data[i], i);
     } 
  };
  
  this.addMultiArrayData = function(idTable, stData)
  {
     excelProperty.data_St = stData; 
     for(var i=0; i<stData.length; i++)
     {
        this.addColumnData(idTable, stData[i], i);
     } 
  };

  this.addJsonData = function(idTable, jsonName, arrayColPos)
  {
	for(var ixx=0; ixx<3; ixx++)//pinta 2 veces
	{		
		if( typeof arrayColPos != 'undefined' )
		{
			var jd = json(jsonName).data;  
			for(var i=0; i<arrayColPos.length; i++)
			{
				excelProperty.data_St[i] = jd[arrayColPos[i]];    
			} 
		} 
		else
			excelProperty.data_St = json(jsonName).data;  
		for(var i=0; i<excelProperty.data_St.length; i++)
		{
			this.addColumnData(idTable, excelProperty.data_St[i], i);
		} 
	}
  };
  
  this.addJsonToTable = function(idTable, jsonObj, arrayColPos)
  {
     if( typeof arrayColPos != 'undefined' )
     {
       var jd = jsonObj.data;  
       for(var i=0; i<arrayColPos.length; i++)
       {
         excelProperty.data_St[i] = jd[arrayColPos[i]];    
       }  
     } 
     else
       excelProperty.data_St = jsonObj.data;  
     for(var i=0; i<excelProperty.data_St.length; i++)
     {
       this.addColumnData(idTable, excelProperty.data_St[i], i);
     } 
  };
  
  this.getColumnDataFromData = function(id)
  {
    var arrTypes = new Array();
    for(var i=0; i<data.length; i++)
    {
       if(data[i].typeData=='columnData' && data[i].id == id)
       {
         arrTypes[arrTypes.length] = data[i];  
       } 
    }  
    return arrTypes;
  };
  
  this.setSheetNameToExcel = function(name)
  {
    excelProperty.sheetName = name;
  };
  
  this.getDataFromTypeData = function(typeData)
  {
    var arrTypes = new Array();
    for(var i=0; i<data.length; i++)
    {
       if(data[i].typeData==typeData)
       {
         arrTypes[arrTypes.length] = data[i];  
       } 
    }  
    return arrTypes;
  };
  
  this.previewHTML = function()
  {
    var imgs = '';  
    for(var i=0; i<pages.length; i++)
    {
      imgs += '<img src="' + pages[i].panelOut.getCanvasObj().toDataURL("img/png") + '"/>\n';  
    };
    if(pages.length > 1)    
      pr.previewWidthButton(imgs, widthReport+32, pageSize, widthReport - 50)
    else
      pr.previewWidthButton(imgs, widthReport+32, pageSize)
  };
  
  this.printPreview = function()
  {
    pr.printPreview();
  };
  
  this.closePreview = function()
  {
    pr.closePreview();
  };
  
  this.setPositionIcon = function(x,y)
  {
    pr.setPositionIcon(x,y);
  };
  
  this.addGraph = function(x1, y1, graph, nameGraph, pdfCoord)
  {  
  	if(pdfCoord==undefined || pdfCoord==null)
  	  pdfCoord=false;
  	y1+= pageSize * (actualPage);
    var item = data.length; 
    data[item] = new Object();
    data[item].pdfCoord = pdfCoord;
    data[item].graph = graph;
    data[item].nameGraph = nameGraph;
    data[item].x1 = x1;
    data[item].y1 = y1;
    data[item].dy = graph.getHeightGraph();
    data[item].dx = graph.getWidthGraph();
    data[item].offsetPage = y1 % pageSize;
    data[item].itemPage = parseInt((y1+data[item].dy)/pageSize,10);
    data[item].itemPage0 = parseInt((y1+data[item].dy)/pageSize,10);
    data[item].typeData = 'graph';
    data[item].item = item;
    data[item].mode = false;
    newPage(data[item].itemPage);
    actX=x1+data[item].dx;
    actY=y1+data[item].dy;
  };
  
  this.addCanvas = function(x1, y1, w, h, canvasObj, nameGraph, pdfCoord, pdfx1, pdfy1)
  {
  	if(pdfCoord==undefined || pdfCoord==null)
  	  pdfCoord=false;
  	y1+= pageSize * (actualPage);
    var item = data.length; 
    data[item] = new Object();
    data[item].pdfCoord = pdfCoord;
    data[item].canvasObj = canvasObj;
    data[item].nameGraph = nameGraph;
    data[item].x1 = x1;
    data[item].y1 = y1;
    data[item].dy = h;
    data[item].dx = w;
    data[item].offsetPage = y1 % pageSize;
    data[item].itemPage = parseInt((y1+h)/pageSize,10);
    data[item].itemPage0 = parseInt((y1+h)/pageSize,10);
    data[item].typeData = 'canvas';
    data[item].item = item;
    data[item].mode = false;
    if(pdfx1)
       data[item].pdfx1 = pdfx1;
    if(pdfy1)
       data[item].pdfy1 = pdfy1;
    newPage(data[item].itemPage);
    actX=x1+w;
    actY=y1+h;	
  };
  
  this.getActX = function(x)
  {
  	if(x!=undefined)
  	  actX+=x;
  	return actX;
  };
  
  this.getActY = function(y)
  {
  	if(y!=undefined)
  	  actY+=y;
  	return actY;
  };
  
  var changePageSize = function(pageSizeP)
  {
    pageSize = pageSizeP;  
    yiFooter = pageSize - heightFooterBar - 60;
  };
  
  var setSeparator = function(str)
  {
    separator = str;  
  };
  
  var getBlankSpace = function(cad)
  {
    var c = 0;
    for(var i=0; i<cad.length; i++)
    {
      if(cad.charAt(i)==' ')
        c++  
    }
    return c++;
  };
  
  var newPage = function(it)
  { 
    if(it >= totalPages)
    {
       for(var i = totalPages; i<=it; i++ ) 
       {
          if(!pages[i])
          {
            pages[i]              = new Object();
            pages[i].panelOut     = new CanvasBuilder(null,widthReport,pageSize);
            pages[i].ctx          = pages[i].panelOut.getCanvasContext();
            pages[i].panelCanvas  = pages[i].panelOut.getPanelCanvas();
            pages[i].headCB       = new CanvasBuilder(null,widthReport,heightHeadImg);
            pages[i].headCanvas   = pages[i].headCB.getCanvasObj();
            pages[i].headCTX      = pages[i].headCB.getCanvasContext();  
            pages[i].headImg      = new Image();  
            pages[i].imgCB        = new CanvasBuilder(null,widthReport,heightHeadImg);
            pages[i].imgCanvas    = pages[i].imgCB.getCanvasObj();
            pages[i].imgCTX       = pages[i].imgCB.getCanvasContext();
            pages[i].bodyImgs         = new Image();
            pages[i].bodyImgs2        = new Image();
            pages[i].bodyImgs.hasNext = false;
            pages[i].bodyImgs2.hasNext = false;
            pages[i].graphics = new Array();
            totalPages++;
          }
       }
    }
    return pages[totalPages-1];
  };
  
  this.addPage = function()
  {
  	newPage(totalPages);
  	actualPage = totalPages-1;
  };
  
  var addTextToPanel = function(item)
  { 
     var t = data[item];    
     var ctx = pages[actualPage].ctx;
     ctx.beginPath();
     ctx.fillStyle = t.colorText;
     ctx.font = t.fontType+' '+t.fontSize+'pt '+t.fontFamily;
     if(t.typeData=='headTitle')
     {
       ctx.textAlign ='center';  
       ctx.fillText(t.headTitle, t.x1, t.offsetPage)
     }
     else
     {
       if(typeof t.align === 'string')	
         ctx.textAlign = t.align;
       else
         ctx.textAlign = 'left';
       ctx.fillText(t.text, t.x1, t.offsetPage);  
     }  
     ctx.closePath();
  };
  
  var addImgToPanel = function(item)
  { 
    var t = data[item];
    var img = new Image();
    var ctx = pages[actualPage].ctx;
    img.src = t.src;
    img.onload = function(e)
    {        
      ctx.drawImage(img, t.x1, t.offsetPage, t.dx, t.dy);
      t.imgSts=true;
    } 
  };  
  
  var addBarToPanel = function(item)
  {
     var t = data[item];
     var d = document.createElement('div'); 
     var ctx = pages[actualPage].ctx;
     d.style.position = 'absolute';
     d.style.display = 'block';
     d.style.left = t.x1 + 'px';
     d.style.top  = t.offsetPage + 'px';
     d.style.width = t.dx +'px';
     d.style.height = t.dy + 'px';
     d.style.backgroundColor = t.rgbaObj.getRGBA();
     ctx.beginPath();
     ctx.fillStyle=t.rgbaObj.getRGBA();
     ctx.fillRect(t.x1,t.offsetPage,t.dx,t.dy);
     ctx.closePath();
  };
  
  var addBarGradientToPanel = function(item)
  {
     var t = data[item];
     var d = document.createElement('div'); 
     var ctx = pages[actualPage].ctx;
     d.style.position = 'absolute';
     d.style.display = 'block';
     d.style.left = t.x1 + 'px';
     d.style.top  = t.offsetPage + 'px';
     d.style.width = t.dx +'px';
     d.style.height = t.dy + 'px';
     d.style.backgroundColor = t.rgbaObj.getRGBA();
     ctx.beginPath();
     var grd = ctx.createLinearGradient(t.x1, t.offsetPage, t.dx, t.dy);
     grd.addColorStop(0,t.rgbaObj());
     grd.addColorStop(0.5,t.rgbaObj1());
     grd.addColorStop(1,t.rgbaObj2());
     ctx.fillStyle=grd;
     ctx.fillRect(t.x1,t.offsetPage,t.dx,t.dy);
     ctx.closePath();
  };
  
  var addRectangleToPanel = function(item)
  {
     var t = data[item];
     var ctx = pages[actualPage].ctx;
     ctx.beginPath();
     ctx.strokeStyle = t.rgbaObj.getRGBA();
     ctx.rect(t.x1,t.offsetPage,t.dx,t.dy);
     ctx.stroke();
     ctx.closePath();
  };
  
  var addAbsTableToPanel = function(item)
  {
     var t = data[item];
     var ctx = pages[actualPage].ctx;
     ctx.beginPath();
     ctx.strokeStyle = t.rgbaObj.getRGBA();
     var deltax=0;
     for(var f=0; f<t.totalCell; f++)
     {
       deltax=0;
       for(c=0; c<t.totalCol; c++)
       {
         ctx.rect(t.x1 + deltax, t.offsetPage+f*t.heightCell,t.sizeCols[c], t.heightCell);
         deltax+=t.sizeCols[c];
         ctx.stroke();	
       };   
     };
     ctx.closePath();
  };
  
  var addSimpleTableToPanel = function(item)
  {
     var t = data[item];
     var ctx = pages[actualPage].ctx;
     ctx.beginPath();
     //ctx.strokeStyle = t.rgbaObj.getRGBA();
     //ctx.strokeStyle = 'rgb(0,0,0)';
     //ctx.fillStyle = 'black';
     ctx.strokeStyle = 'black';
     for(var i=0; i<t.totalCell; i++)
     {
       ctx.rect(t.x1,t.offsetPage+i*t.heightCell,t.dx,t.heightCell);
       ctx.stroke();	
     }     
     ctx.closePath();
  };
  
  var addTableFrameToPanel = function(item)
  {
     var t = data[item];
     var j = t.jsonFrame;
     var ctx = pages[actualPage].ctx;
     var sizeFont = 12;
     ctx.beginPath();
     ctx.strokeStyle = t.rgbaObj.getRGBA();
     ctx.textAlign ='center'; 
     ctx.fillStyle='black';
     var ac = 0; //ancho de columna
     ctx.rect(t.x1, t.offsetPage, t.dx, j.heightCell);
     ctx.stroke();
     ctx.closePath();
     
     //Celdas de titulo
     ctx.beginPath();
     var x = t.x1+j.columnSizes[0]/2;
     ctx.font="14px verdana bold";
     for(var i=0; i<j.totalCols; i++)
     {
       ac += j.columnSizes[i];
       ctx.rect(parseInt(t.x1,10), parseInt(t.offsetPage,10), parseInt(ac,10), parseInt(j.tableHeight,10));
       ctx.fillText(j.fields[i],x, t.offsetPage + j.heightCell/2 + sizeFont/2);
       if(i<j.totalCols-1)
         x+=j.columnSizes[i]/2 + j.columnSizes[i+1]/2;	
     }
     ctx.rect(t.x1,t.offsetPage,t.dx, j.tableHeight);
     ctx.stroke();
     ctx.closePath();
     
     //Colocar la data
     ctx.beginPath();
     ctx.font="12px verdana";
     ctx.textAlign ='left';
     x=t.x1+2;
     for(var c=0; c<j.totalCols; c++)	
     {
       y=t.offsetPage + (j.heightCell + j.heightCell/2);	
       var auxJ = j.dataCol[c].split('\n');
       for(var r=0; r<auxJ.length; r++)
       {
         ctx.fillText(auxJ[r], x, y, j.columnSizes[c]-4);
         y+= (j.heightCell);    
       }   
       if(c < j.totalCols - 1)
         x+=j.columnSizes[c];	
     }
     ctx.closePath();    
  };

  var addLineToPanel = function(item)
  {
     var t = data[item];
     var ctx = pages[actualPage].ctx;
     ctx.beginPath();
     ctx.lineWidth = t.lineWidth;
     ctx.moveTo(t.x1,t.offsetPage);
     ctx.lineTo(t.x2,t.y2);
     ctx.closePath();
     ctx.strokeStyle = t.rgbaObj.getRGBA();
     ctx.stroke();
  };
    
  var addColumnDataToTable = function(item)
  {
    var t = data[item];
    if(t.pos===0 && actualPage!==0){
      addTableToPanel(tables[t.id].item);
    }
    var tab = tables[t.id]; 
    var ctx = pages[actualPage].ctx;
    tab.totalRow = t.columnData.length;
    var tr = tableProperty.totalRow;
    var tOffsetPage = tab.offsetPage;
    if(!repeatHead && t.itemPage > 0)
    {
      if(tableProperty.newTotalRow > tableProperty.totalRow)
        tr = tableProperty.newTotalRow;
      tOffsetPage = tab.offsetPage - (tr - tableProperty.totalRow)*tableProperty.heightRow;
    }
    var wt = 0;
    tab.xAcu = new Array();
    for(var i=0; i<tableProperty.sizeCols.length; i++)
    {
       tab.xAcu[i] = wt;
       wt += tableProperty.sizeCols[i]; 
     }
    var newX1 = tab.x1 - parseInt(wt/2,10);
    ctx.beginPath();
    var y = 0;
    for(var i=1; i<=tr; i++)
    {
       if(i % 2)   
         ctx.fillStyle = tableProperty.oddColorRow
       else
         ctx.fillStyle = tableProperty.evenColorRow;  
       y = tOffsetPage + tableProperty.heightRow*i;
       var dy = tableProperty.heightRow;
       if(tableProperty.newHeightBarCell!=null)
         ctx.fillRect(newX1 + tab.xAcu[t.pos], y, tableProperty.sizeCols[t.pos], tableProperty.newHeightBarCell)
       else
    	   ctx.fillRect(newX1 + tab.xAcu[t.pos], y, tableProperty.sizeCols[t.pos], dy) ; 
    }
    ctx.closePath();
    var ht = tab.offsetPage + tableProperty.heightRow * (t.columnData.length + 1);
    y=0;
    for(var i=0; i < t.columnData.length; i++)
    {
      ctx.beginPath();
      ctx.fillStyle = 'rgb('+tableProperty.fontCellColorRED+','+tableProperty.fontCellColorGREEN+','+tableProperty.fontCellColorBLUE+')';
      ctx.font = tableProperty.fontSizeCell+'pt '+tableProperty.fontFamilyCell;  
      y = tOffsetPage + parseInt(tableProperty.fontSizeCell/2,10) + parseInt(tableProperty.heightRow,10)*(i+1) + parseInt(tableProperty.heightRow/2,10); 
      ctx.textAlign ='left';
      var dataPrint = '';
      for(var k=0; k<t.columnData[i].length; k++){
      	if(ctx.measureText(dataPrint + t.columnData[i].charAt(k)).width < tableProperty.sizeCols[t.pos])
      		dataPrint += t.columnData[i].charAt(k);
      	else
      		break;
      }
      if(tableProperty.alignData.length > 0)
        ctx.textAlign = tableProperty.alignData[t.pos];       
      if(ctx.textAlign=='left')
      	ctx.fillText(dataPrint, newX1 + tab.xAcu[t.pos] + 5, y) ;
        //ctx.fillText(t.columnData[i], newX1 + tab.xAcu[t.pos] + 5, y) ; 
      if(ctx.textAlign=='center')
      	ctx.fillText(dataPrint, newX1 + tab.xAcu[t.pos] + parseInt(tableProperty.sizeCols[t.pos]/2,10), y) ;
        //ctx.fillText(t.columnData[i], newX1 + tab.xAcu[t.pos] + parseInt(tableProperty.sizeCols[t.pos]/2,10), y) ;
      if(ctx.textAlign=='right')
      	ctx.fillText(dataPrint, newX1 + tab.xAcu[t.pos] + tableProperty.sizeCols[t.pos] - 5, y) ;   
        //ctx.fillText(t.columnData[i], newX1 + tab.xAcu[t.pos] + tableProperty.sizeCols[t.pos] - 5, y) ;   
      
      ctx.closePath();
      
      if(tab.xAcu[t.pos] > 0)
      {
        var htt = tOffsetPage + tableProperty.heightRow*(tr+1) - tableProperty.heightRowTitle;  
        ctx.beginPath();  
        ctx.lineWidth = 0.5;
        ctx.moveTo(tab.xAcu[0]+1, tOffsetPage);
        ctx.lineTo(tab.xAcu[0]+1,htt);
        pc = parseInt(tab.xAcu[tab.xAcu.length-1],10) + parseInt(tableProperty.sizeCols[tableProperty.sizeCols.length-1],10) - 7;
        if (pc > widthReport - 1)
          pc = widthReport-1;
        ctx.moveTo(pc, tOffsetPage);
        ctx.lineTo(pc,htt);
        ctx.moveTo(newX1 + tab.xAcu[t.pos], tOffsetPage);
        ctx.lineTo(newX1 + tab.xAcu[t.pos], htt);
        ctx.closePath();
        ctx.strokeStyle = 'rgba(200,200,200,1)';
        ctx.stroke();
      }  
    }    
    tables[t.id] = tab;
  };
  
  var addTableToPanel = function(item)
  {   
     var t = data[item];
     var bgColor  = t.rgbaObj.getRGBA();
     var tOffsetPage = t.offsetPage;
     
     if(!repeatHead && actualPage > 0){
      if(tableProperty.newTotalRow > tableProperty.totalRow)
        tOffsetPage = t.offsetPage - (tableProperty.newTotalRow - tableProperty.totalRow)*tableProperty.heightRow;
     }
     
     var ctx = pages[actualPage].ctx;
     t.totalRow = 1;
     t.xAcu = new Array();
     var wt = 0;
     for(var i=0; i<tableProperty.sizeCols.length; i++)
     {
       t.xAcu[i] = wt;
       wt += tableProperty.sizeCols[i]; 
     }
     var newX1 = t.x1 - parseInt(wt/2,10); 
     ctx.beginPath();
     ctx.fillStyle = bgColor;
     ctx.fillRect(newX1, tOffsetPage, wt, tableProperty.heightRow);
     ctx.closePath();
     ctx.beginPath();
     ctx.fillStyle = tableProperty.rgbaObj.getRGBA(tableProperty.fontColorTitleRED,tableProperty.fontColorTitleGREEN,tableProperty.fontColorTitleBLUE,tableProperty.TRANSPARENCY);
     ctx.font = tableProperty.fontTypeTitle+' '+tableProperty.fontSizeTitle+'pt '+tableProperty.fontFamilyTitle;
     var wp=2;
     var x=0;
     var y = 0;
     for(var i=0; i<t.arrayTitles.length; i++)
     {
       x = newX1 + parseInt(tableProperty.sizeCols[i]/2,10) - parseInt(ctx.measureText(t.arrayTitles[i]).width/2,10) + wp;
       y = tOffsetPage + parseInt(tableProperty.fontSizeTitle/2,10) + parseInt(tableProperty.heightRow/2,10);
       ctx.textAlign ='left';
       ctx.fillText(t.arrayTitles[i], x, y);
       wp += tableProperty.sizeCols[i];
     }
     ctx.closePath();
     tables[t.id]=t;
  };
  
  var addFooterBarToPanel = function(item)
  {      
     var t = data[item];
     var ctx = pages[actualPage].ctx;
     ctx.beginPath();
     ctx.fillStyle = objColorFooter.getRGBA();
     ctx.fillRect(t.x1,t.offsetPage,t.dx,t.dy);
     ctx.closePath();
     ctx.beginPath();
     ctx.fillStyle = fontProperty.color;
     ctx.font = fontProperty.fontType+' '+fontProperty.size+'pt '+fontProperty.family;
     var y = t.offsetPage+(parseInt(t.dy/2,10))+parseInt(fontProperty.size/2,10);
     ctx.textAlign = 'left';
     ctx.fillText(strDate, t.x1+10,y);
     ctx.textAlign = 'center';
     ctx.fillText( 'Página: ' + (actualPage+1) +' de '+ totalPages, parseInt(widthReport/2,10),y);
     ctx.textAlign = 'right';
     ctx.fillText('Registro(s): '+tableProperty.columnDataPages[actualPage].acu+'  de '+tableProperty.columnDataPages[actualPage].totalReg, widthReport-15,y);
     ctx.closePath();
  };
    
  var getArrayData  = function()
  {
    return [['','','','','','','','','','','','','','','','','','',''],
            ['','','','','','','','','','','','','','','','','','',''],
            ['','','','','','','','','','','','','','','','','','',''],
            ['','','','','','','','','','','','','','','','','','',''],
            ['','','','','','','','','','','','','','','','','','',''],
            ['','','','','','','','','','','','','','','','','','',''],
            ['','','','','','','','','','','','','','','','','','',''],
            ['','','','','','','','','','','','','','','','','','','']
           ];
  };
    
  var addHorarioToPDF = function(item)
  { 
    var t = data[item];   
    var ctx = pages[actualPage].ctx;
    pdfDoc.setTextColor(0,0,0);
    pdfDoc.setFont('helvetica');
    pdfDoc.setFontSize(12);
    pdfDoc.setFontType('bold');
    pdfDoc.setLineWidth(0.5);
    pdfDoc.setDrawColor(150,150,150);
    var hCell = hrTableProperty.heightCell+10;
    for(var i = 0; i < hrTableProperty.totalRow + 1; i++)
    {
      var xl1 = convertXPDF(t.x1);
      var yl1 = convertYPDF(t.y1) + i*convertYPDF(hCell);
      var xl2 = convertXPDF(t.x1+hrTableProperty.widthCell*hrTableProperty.totalCol);
      var yl2 = yl1;    
      pdfDoc.line(xl1,yl1,xl2,yl2);  
    };
    for(var i=0; i<=hrTableProperty.totalCol; i++)
    {
      var tam = convertXPDF(ctx.measureText(hrTableProperty.titCol[i]).width/2);  
      if(i==0)  
      {   
        var xt1 = convertXPDF(t.x1+hrTableProperty.widthCell/2);
        var yt1 = convertYPDF(t.y1)+convertYPDF(parseInt(hCell/2)+6);
        pdfDoc.text(hrTableProperty.titCol[i],xt1-tam,yt1); 
        xt1 = convertXPDF(t.x1);   
        yt1 = convertYPDF(t.y1);
        pdfDoc.line(xt1, yt1, xt1, convertYPDF(t.y1) + hrTableProperty.totalRow*convertYPDF(hCell));
      }
      else
      { 
        var xt1 = convertXPDF(t.x1+hrTableProperty.widthCell*(i+1)-hrTableProperty.widthCell/2);  
        var yt1 = convertYPDF(t.y1) + convertYPDF(parseInt(hCell/2)+6);
        if(i < hrTableProperty.totalCol)  
          pdfDoc.text(hrTableProperty.titCol[i],xt1-tam,yt1);
        xt1 = convertXPDF(t.x1+i*hrTableProperty.widthCell);
        yt1 = convertYPDF(t.y1);
        var xt2 = convertXPDF(t.x1 + i * hrTableProperty.widthCell);
        var yt2 = convertYPDF(t.y1) + hrTableProperty.totalRow * convertYPDF(hCell);
        pdfDoc.line(xt1,yt1,xt2,yt2);
      }
    };
    pdfDoc.setFont('helvetica');
    pdfDoc.setFontSize(6);
    var dtLn0 = getArrayData(); 
    var dtLn1 = getArrayData(); 
    var dtLn2 = getArrayData(); 
    var dtLn3 = getArrayData(); 
    ctx.beginPath();
    ctx.font = '6pt helvetica';
    ctx.closePath();
    for (var i = 0; i < t.arrayData.data[0].length; i++)
    {
      if(t.arrayData.data[0][i]!='0')	
      {
        t.arrayData.data[0][i];
        var c = parseInt(t.arrayData.data[1][i],10)-1;
        var f = t.fila[t.arrayData.data[0][i]];
        
        var mat = t.arrayData.data[2][i];
        var sec = t.arrayData.data[3][i];
        var aul = t.arrayData.data[4][i];
        var pro = t.arrayData.data[5][i];        
        while(ctx.measureText(mat).width > 85)
          mat = mat.substring(0, mat.length-2);
        while(ctx.measureText(sec).width > 85)
          sec = sec.substring(0, sec.length-2);
        while(ctx.measureText(aul).width > 85)
          aul = aul.substring(0, aul.length-2);
        while(ctx.measureText(pro).width > 85)
          pro = pro.substring(0, pro.length-2);
        if (mat==undefined)
          mat=''; 
        if (sec==undefined)
          sec=''; 
        if (aul==undefined)
          aul=''; 
        if (pro==undefined)
          pro=''; 
        if(dtLn0[c][f]=='')
        {
          dtLn0[c][f]=mat;    
          dtLn1[c][f]=sec;    
          dtLn2[c][f]=aul;     
          dtLn3[c][f]=pro;     
        }
        else 
        {	
          dtLn1[c][f]=mat;   
          dtLn2[c][f] =sec+' / '+aul; 
          dtLn3[c][f]= 'CHOQUE';
        }
      }
    };
    
    for(var i = 0; i < hrTableProperty.totalRow - 1; i++)
    {	
      for(var j = 1; j < 9; j++)  
      {
        var xm = convertXPDF(t.x1 + (hrTableProperty.widthCell * j - hrTableProperty.widthCell/2));
        var ym = convertYPDF(t.y1) + convertYPDF(parseInt(hCell,10)) * (i+1) + 2.25;
        var tam = convertXPDF(ctx.measureText(t.horario.data[1][i]).width/2) + 1;
        if (j == 1)     
        {  
          pdfDoc.setTextColor(0,0,0);         
          if(i<t.horario.data[1].length)  
            pdfDoc.text(t.horario.data[1][i], xm - tam, ym + convertYPDF(18));
        }   
        else
        { 
          if(dtLn3[j-2][i]=='CHOQUE')  
            pdfDoc.setTextColor(250,0,0); 
          else
            pdfDoc.setTextColor(0,0,0);   
          if(dtLn0[j-2][i]==undefined)  
            dtLn0[j-2][i]="";
          if(dtLn1[j-2][i]==undefined)  
            dtLn1[j-2][i]="";
          if(dtLn2[j-2][i]==undefined)  
            dtLn2[j-2][i]="";
          if(dtLn3[j-2][i]==undefined)  
            dtLn3[j-2][i]="";
          tam = convertXPDF(ctx.measureText(dtLn0[j-2][i]).width/2) + 1;
          pdfDoc.text(dtLn0[j-2][i], xm - tam, ym);
          
          tam = convertXPDF(ctx.measureText(dtLn1[j-2][i]).width/2) + 1;
          pdfDoc.text(dtLn1[j-2][i], xm - tam, ym+convertYPDF(10));
          
          tam = convertXPDF(ctx.measureText(dtLn2[j-2][i]).width/2) + 1;
          pdfDoc.text(dtLn2[j-2][i], xm - tam, ym+convertYPDF(20));
          
          tam = convertXPDF(ctx.measureText(dtLn3[j-2][i]).width/2) + 1;  
          pdfDoc.text(dtLn3[j-2][i], xm - tam, ym+convertYPDF(30));
        }
      }
    }
  };
    
  var addHorarioToPanel = function(item)
  {
    var t = data[item];   
    var ctx = pages[actualPage].ctx;
    ctx.beginPath();
    ctx.textAlign = 'left';
    ctx.fillStyle = hrTableProperty.fontColor;
    ctx.font = 'bold 12pt helvetica';
    ctx.lineWidth = 1;
    ctx.strokeStyle = hrTableProperty.lineColor;
    var hCell = hrTableProperty.heightCell+10;
    for(var i = 0; i < hrTableProperty.totalRow + 1; i++)
    {
      ctx.moveTo(t.x1, t.y1+(i*hCell));
      ctx.lineTo(t.x1+hrTableProperty.widthCell*hrTableProperty.totalCol, t.y1+(i*hCell));    
      ctx.stroke();
    }
    ctx.closePath();
    ctx.beginPath();
    ctx.textAlign = 'center';
    
    for(var i=0; i<=hrTableProperty.totalCol; i++)
    {
      if(i==0)  
      { 
        ctx.fillText(hrTableProperty.titCol[i],t.x1+hrTableProperty.widthCell/2,t.y1+parseInt(hCell/2)+6);    
        ctx.moveTo(t.x1, t.y1);
        ctx.lineTo(t.x1, t.y1+(hrTableProperty.totalRow*hCell));
      }
      else
      { 
        if(i < hrTableProperty.totalCol)  
          ctx.fillText(hrTableProperty.titCol[i],t.x1+hrTableProperty.widthCell*(i+1)-hrTableProperty.widthCell/2,t.y1+parseInt(hCell/2)+6);
        ctx.moveTo(t.x1+i*hrTableProperty.widthCell, t.y1);
        ctx.lineTo(t.x1+i*hrTableProperty.widthCell, t.y1+(hrTableProperty.totalRow*hCell));
      }
      ctx.stroke();
    }
    ctx.closePath();
    ctx.beginPath();
    ctx.font = '7pt helvetica';
    ctx.closePath();
    
    var dtLn0 = getArrayData(); 
    var dtLn1 = getArrayData(); 
    var dtLn2 = getArrayData(); 
    var dtLn3 = getArrayData();

    for (var i = 0; i < t.arrayData.data[0].length; i++)
    {
      if(t.arrayData.data[0][i]!=0)
      {	
        t.arrayData.data[0][i];
        var c = parseInt(t.arrayData.data[1][i],10)-1;
        var f = t.fila[t.arrayData.data[0][i]];
        var mat = t.arrayData.data[2][i];
        var sec = t.arrayData.data[3][i];
        var aul = t.arrayData.data[4][i];
        var pro = t.arrayData.data[5][i];
    
        while(ctx.measureText(mat).width > 95)
          mat = mat.substring(0, mat.length-2);
        while(ctx.measureText(sec).width > 95)
          sec = sec.substring(0, sec.length-2);
        while(ctx.measureText(aul).width > 95)
          aul = aul.substring(0, aul.length-2);
        while(ctx.measureText(pro).width > 95)
          pro = pro.substring(0, pro.length-2);
        if(dtLn0[c][f]=='')
        {
          dtLn0[c][f]=mat;     
          dtLn1[c][f]=sec;     
          dtLn2[c][f]=aul;     
          dtLn3[c][f]=pro;     
        }
        else 
        {
          dtLn1[c][f]=mat;    
          dtLn2[c][f] =sec+' / '+aul; 
          dtLn3[c][f]= 'HR. COMPARTIDA';
        }
      }
    }
   
    for(var i = 0; i < hrTableProperty.totalRow - 1; i++)
    {
      for(var j = 1; j < 9; j++)  
      {
        var xm = t.x1 + (hrTableProperty.widthCell * j - hrTableProperty.widthCell/2);
        var ym = t.y1 + parseInt(hCell,10) * (i+1.25);
        if (j == 1)
        {
          ctx.beginPath();  
          ctx.fillStyle = hrTableProperty.fontColor;
          if(i<t.horario.data[1].length)  
            ctx.fillText(t.horario.data[1][i], xm, ym + 18);
          ctx.closePath();
        }   
        else
        { 
          ctx.beginPath();  
          if(dtLn3[j-2][i]=='HR. COMPARTIDA')  
          {
            ctx.fillStyle = 'red'; 
          }
          else
          {
            ctx.fillStyle = hrTableProperty.fontColor;
          }
          if(dtLn0[j-2][i]===undefined)
            dtLn0[j-2][i]='';
          if(dtLn1[j-2][i]===undefined)
            dtLn1[j-2][i]='';
          if(dtLn2[j-2][i]===undefined)
            dtLn2[j-2][i]='';
          if(dtLn3[j-2][i]===undefined)
            dtLn3[j-2][i]='';  
          ctx.fillText(dtLn0[j-2][i], xm, ym);
          ctx.fillText(dtLn1[j-2][i], xm, ym+9);
          ctx.fillText(dtLn2[j-2][i], xm, ym+18);
          ctx.fillText(dtLn3[j-2][i], xm, ym+27);
          ctx.closePath();
        }
      }
    }
    ctx.beginPath();
    ctx.font = fontProperty.fontType+' '+fontProperty.size+'pt '+fontProperty.family;
    ctx.closePath();
  };
  
  var addImageHrTableToPanel = function(item)
  {    
    var t = data[item];   
    var ctx = pages[actualPage].ctx;
    t.canvasObj = pages[actualPage].panelOut.getCanvasObj();
    ctx.beginPath();
    ctx.textAlign = 'left';
    ctx.fillStyle = hrTableProperty.fontColor;
    ctx.font = 'bold 12pt helvetica';
    ctx.lineWidth = 1;
    ctx.strokeStyle = hrTableProperty.lineColor;
    for(var i=0; i<hrTableProperty.totalRow+1; i++)
    {
      ctx.moveTo(t.x1, t.y1+(i*hrTableProperty.heightCell));
      ctx.lineTo(t.x1+hrTableProperty.widthCell*hrTableProperty.totalCol, t.y1+(i*hrTableProperty.heightCell));    
      ctx.stroke();
    }
    ctx.textAlign = 'center';
    for(var i=0; i<=hrTableProperty.totalCol; i++)
    {
      if(i==0)  
      { 
        ctx.fillText(hrTableProperty.titCol[i],t.x1+hrTableProperty.widthCell/2,t.y1+parseInt(hrTableProperty.heightCell/2)+6);    
        ctx.moveTo(t.x1, t.y1);
        ctx.lineTo(t.x1, t.y1+(hrTableProperty.totalRow*hrTableProperty.heightCell));
      }
      else
      { 
        if(i < hrTableProperty.totalCol)  
          ctx.fillText(hrTableProperty.titCol[i],t.x1+hrTableProperty.widthCell*(i+1)-hrTableProperty.widthCell/2,t.y1+parseInt(hrTableProperty.heightCell/2)+6);
        ctx.moveTo(t.x1+i*hrTableProperty.widthCell, t.y1);
        ctx.lineTo(t.x1+i*hrTableProperty.widthCell, t.y1+(hrTableProperty.totalRow*hrTableProperty.heightCell));
      }
      ctx.stroke();  
    }
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = hrTableProperty.fontColor;
    ctx.font = hrTableProperty.fontSize+'pt'+' '+hrTableProperty.fontFamily;
    ctx.textAlign = 'left';
    for(var i=0; i<t.horario.length; i++)
    {
      var yx = t.y1 + hrTableProperty.heightCell * (i+1.5) + hrTableProperty.fontSize/2;      
      yImg = t.y1 + hrTableProperty.heightCell * (i+1) + 2;
      ctx.fillText(t.horario[i],t.x1 + 2, yx); 
      
      for (var j=0; j<hrTableProperty.totalCol;j++)
      {
         var xx = t.x1 + hrTableProperty.widthCell*(j+1);
         var xImg = t.x1 + hrTableProperty.widthCell * (j+1) + hrTableProperty.widthCell/2 - (hrTableProperty.heightCell-4)/2;
         if(t.arrayData.length > j)
         {
           if(t.arrayData[j].length > i)
           {
             if(parseInt(t.arrayData[j][i],10) >= 0 )
               ctx.drawImage(t.imgs[t.arrayData[j][i]], xImg, 3+yImg, hrTableProperty.heightCell-10, hrTableProperty.heightCell-10);
           }
         }
      }
    }
    ctx.closePath();   
    //dynamicPause();
    //setTimeout(dynamicPause, timeDelay);
  };
  
  var addCanvasToPanel = function(item)
  {
    var t = data[item];  
    var dprc = document.createElement('div');
    dprc.style.backgroundColor = 'rgba(100,100,100,0.1)';
    dprc.style.display='block';
    dprc.style.width = '500px';
    dprc.style.height = '50px';
    dprc.style.borderRadius = '1em';
    dprc.style.lineHeight = '50px';
    dprc.vAlign = 'middle';
    dprc.style.position = 'absolute';
    var x = window.innerWidth;
    var y = window.innerHeight;
    dprc.style.left = parseInt(x/2 - 250,10) + 'px';
    dprc.style.top = item*12+parseInt(y/2 - 50 , 10) + 'px';
    dprc.innerHTML='';
    dprc.align='center';
    document.body.appendChild(dprc);
    var idxg = pages[t.itemPage].graphics.length;
    pages[t.itemPage].graphics[idxg]  = new Object(); 
    pages[t.itemPage].graphics[idxg] = pages[t.itemPage].imgCB.convertCanvasToImg(0, t.w, t.h, t.canvasObj);
    var punto='';
    pages[t.itemPage].graphics[idxg].onload = function()
    {
      punto+='.';  
      dprc.innerHTML = 'Cargando '+t.nameGraph+punto;  
      if(pages[t.itemPage].graphics[idxg].complete)    
      {
        pages[t.itemPage].ctx.drawImage(pages[t.itemPage].graphics[idxg], t.x1, t.offsetPage, t.dx, t.dy); 
        dprc.style.display='none';  
        document.body.removeChild(dprc); 
      }
      else
      {
        this.onload();  
      } 
    }
  };
  
  var addGraphToPanel = function(item)
  {
    var t = data[item];  
    var dprc = document.createElement('div');
    dprc.style.display = 'block';
    dprc.style.width = '500px';
    dprc.style.height = '50px';
    dprc.style.lineHeight = '50px';
    dprc.vAlign = 'middle';
    dprc.style.position = 'absolute';
    dprc.style.backgroundColor = 'rgba(100,100,100,0.1)';
    dprc.style.borderRadius = '1em';
    var x = window.innerWidth;
    var y = window.innerHeight;
    dprc.style.left = parseInt(x/2 - 250,10) + 'px';
    dprc.style.top = parseInt(y/2 - 50 ,10) + 'px';
    dprc.innerHTML='';
    dprc.align='center';
    document.body.appendChild(dprc);
    var faover = false;
    var idxg = pages[t.itemPage].graphics.length;
    pages[t.itemPage].graphics[idxg]  = new Object();
    animationOver = function()
    {    
      var prc = t.graph.getChartObj().getPercentAnimation();  
      dprc.innerHTML = 'Renderizando ' + t.nameGraph + '... ' + parseInt(prc*100,10)+' %';
      if (prc < 1) 
        setTimeout(animationOver, 200)
      else
      { 
         pages[t.itemPage].graphics[idxg] = t.graph.getCanvasBuilder().convertToImg(0, t.w, t.h);  
         dprc.style.display = 'none';       
         faover = true;
         cargando();
      };
    };
    animationOver();
    var cargando = function()
    {      
      if(faover)
      {
        dprc.style.display='block';  
        dprc.innerHTML = 'Cargando '+t.nameGraph+'...';  
        if(pages[t.itemPage].graphics[idxg].complete)    
        { 
          pages[t.itemPage].ctx.drawImage(pages[t.itemPage].graphics[idxg], t.x1, t.offsetPage, t.dx, t.dy); 
          dprc.style.display='none';
          document.body.removeChild(dprc);
          t.renderedGraph = pages[t.itemPage].graphics[idxg];
        }
        else
          setTimeout(cargando,100);
      }
      else
        setTimeout(cargando,100);
    }     
  };   
    
  function sleep(millis)
  {
    var date = new Date();
    var curDate = null;
    do 
    { 
      curDate = new Date(); 
    }
    while(curDate-date < millis);
  };
  
  this.UnionArray = function(uArr)
  {
  	var rArr = [];
  	for(var x=0; x<uArr.length; x++)
  	{
  	  var v = uArr[x].split(' ');
  	  if(typeof v ==='object')
  	    rArr = rArr.concat(v);
  	  if(typeof v ==='string')
  	    rArr[rArr.length]= v;
  	};
  	return rArr;
  };
  
  this.delay = function(millis)
  {
    sleep(millis);	
  };
  
  this.printPDF = function()
  {      
    renderToPDF();  
    setTimeout(function exePrinf(){pdfDoc.output(typeShow[2])},timeDelay);  
  };
  
  this.addParagraph = function(x1, y1, paragraph, longLn, sizeLn, mode)
  {
  	 y1+= pageSize * (actualPage);
  	 var ph = paragraph.split('\n');
  	 for(var tph=0; tph<ph.length; tph++)
  	 {  
  	   if(tph > 0)
  	   	 y1 += sizeLn;
  	   var words = ph[tph].split(' ');
       var line = '';
       var ctx = pages[actualPage].ctx;
       var getLn = function(words)
       {
         var st = '';	
         for(var i=0; i<words.length; i++)
  	       st+=words[i]+' ';	
  	     return st;
       }   	 
  	   var justifyStr = function(str)
  	   {
  	     var w = str.split(' ');	
  	     var px  = document.createElement('p');
  	     px.innerHTML=' ';
  	     var dx = longLn - parseInt(ctx.measureText(getLn(w)).width,10); 
  	     for(var i=0; i<dx-1; i++)
  	     {
  	   	   if(parseInt(longLn,10) - parseInt(ctx.measureText(getLn(w)).width,10) > 2) 
  	   	   {
  	   	     if(i < w.length - 1)
  	   	       w[i+1]+=px.innerHTML;
  	   	     else
  	   	       i=0;
  	         if(parseInt(ctx.measureText(getLn(w)).width,10) >= parseInt(longLn))
  	           break;
  	       }
  	     }
  	     return getLn(w);
  	   };  	
     
       for(var n = 0; n < words.length; n++)
       {
         var testLine = line + words[n] + ' ';
         var metrics = ctx.measureText(testLine);
         var testWidth = metrics.width;
         if (testWidth > longLn && n > 0) 
         { 	
           addTxt(x1,y1,justifyStr(line),mode);
           line = words[n] + ' ';
           y1 += sizeLn;
         }
         else 
         {
           line = testLine;
         }
       }
       addTxt(x1,y1,line,mode);
       var v = parseInt(y1/pageSize,10);
       var diff = 0;
       if(v > 0)
         diff = y1 - pageSize*(v);
       else
         diff = pageSize - y1;
       if(diff < 100)
         y1+= diff+50;
       actX=x1;
       actY=y1;
     }
  };
  
  this.addJustParagraph = function(x1, y1, paragraph, sizeLn, hightLn, wordBoldArr, mode, pdfCoord, pdfx1, pdfy1)
  {
  	if(pdfCoord==undefined || pdfCoord==null)
  	  pdfCoord=false;
  	y1+= pageSize * (actualPage);
  	var item = data.length;
    data[item] = new Object();
    data[item].pdfCoord = pdfCoord;
    data[item].text = paragraph;
    data[item].x1 = x1;
    data[item].y1 = y1;
    if(wordBoldArr)
      data[item].wordBoldArr = wordBoldArr;
    else
      data[item].wordBoldArr=null;  
    var y2 = paragraph.length/(sizeLn*fontProperty.size/jpdf.getScaleFactor());
    data[item].sizeLn = sizeLn;
    data[item].hightLn = hightLn;
    data[item].colorText = fontProperty.color;
    data[item].fontSize = fontProperty.size;
    data[item].fontFamily = fontProperty.family;
    data[item].fontType = fontProperty.fontType;
    data[item].rgbaObj = fontProperty.rgbaObj;
    data[item].offsetPage = y1 % pageSize;
    data[item].itemPage = parseInt(y1/pageSize,10);
    data[item].itemPage0 = parseInt(y1/pageSize,10);
    data[item].typeData = 'addJustParagraph';
    data[item].item = item; 
    data[item].mode = mode;
    //newPage(data[item].itemPage);
  	if(pdfx1)
      data[item].pdfx1 = pdfx1;
    if(pdfy1)
      data[item].pdfy1 = pdfy1;
    newPage(data[item].itemPage);
    actX=x1;
    actY=y1;
  };
  
  var addParagraphToPanel = function(item){
  	var t = data[item];      
    var red = t.rgbaObj.getIntRed(); 
    var green = t.rgbaObj.getIntGreen();
    var blue = t.rgbaObj.getIntBlue();  
    var prf = data[item].text;
    var x1 = data[item].x1;
    var y1 = data[item].y1;
    var sl = data[item].sizeLn;
    //var hl = data[item].hightLn;    
    var pnl = pages[actualPage].panelCanvas;
  
    var para = document.createElement('div');
  	para.innerHTML=prf;
  	para.style.position = 'absolute';
  	para.style.display = 'block';
  	para.style.width = sl + 'px';
  	para.style.left = x1 + 'px';
  	para.style.top = y1 + 'px';
  	para.style.backgroundColor = 'rgba(255,255,255,0)';
    	
  	var font = t.fontType+' '+t.fontSize+'px '+t.fontFamily;
  	para.style.font = font;
  	para.style.color = t.colorText;
  	para.style.textAlign = 'justify';
  	pnl.appendChild(para);
  };
  
  var addParagraphToPDF = function(item)
  {  	 
     var t = data[item];      
     var red = t.rgbaObj.getIntRed(); 
     var green = t.rgbaObj.getIntGreen();
     var blue = t.rgbaObj.getIntBlue();  
     var hl = data[item].hightLn;
     var para = data[item].text;alert(para)
     var x1 = data[item].x1;
     var y1 = data[item].y1;
     var sl = data[item].sizeLn;
     var hl = data[item].hightLn;
     var tokens = para.split(' ');
     var lines = [''];
     var ln = 0;
      
	 pdfDoc.setTextColor(red,green,blue);
     pdfDoc.setFont(t.fontFamily);
     pdfDoc.setFontType(t.fontType);
     pdfDoc.setFontSize(t.fontSize-0.7);     
     
     for(var i = 0; i<tokens.length; i++){	
       if(lines[ln].length*(jpdf.getFontSize() - 3.5) > sl) {
         lines[ln]=lines[ln].substring(0,lines[ln].length-1);
         ln++;
         lines[ln]='';
       };  
       lines[ln]+=tokens[i]+' ';
     };
     
	 for(var i=0; i<lines.length - 1; i++){
	   if(data[item].wordBoldArr==null)
	     pdfDoc.addJustifyText(lines[i], x1, y1, sl);
	   else
	     pdfDoc.addJustifyText(lines[i], x1, y1, sl, data[item].wordBoldArr[i]);
  	   y1 += hl;
  	};
  	pdfDoc.addJustifyText(lines[lines.length-1],x1, y1, -1, data[item].wordBoldArr[lines.length-1]);
  };
  
  var addJustParagraphToPDF = function(item)
  {  	 
     var t = data[item];      
     var red = t.rgbaObj.getIntRed(); 
     var green = t.rgbaObj.getIntGreen();
     var blue = t.rgbaObj.getIntBlue();  
     var hl = data[item].hightLn;
     var para = data[item].text;
     var x1 = data[item].x1;
     var y1 = data[item].y1;
     var sl = data[item].sizeLn;
     var hl = data[item].hightLn;
     var tokens = para.split(' ');
     var lines = [''];
     var ln = 0;
      
	 pdfDoc.setTextColor(red,green,blue);
     pdfDoc.setFont(t.fontFamily);
     pdfDoc.setFontType(t.fontType);
     pdfDoc.setFontSize(t.fontSize-0.7);     
     
     for(var i = 0; i<tokens.length; i++){	
       if(lines[ln].length*(jpdf.getFontSize() - 3.5) > sl) {
         lines[ln]=lines[ln].substring(0,lines[ln].length-1);
         ln++;
         lines[ln]='';
       };  
       lines[ln]+=tokens[i]+' ';
     };
     
	 for(var i=0; i<lines.length - 1; i++){
	   if(data[item].wordBoldArr==null)
	     pdfDoc.addJustifyText(lines[i], x1, y1, sl);
	   else
	     pdfDoc.addJustifyText(lines[i], x1, y1, sl, data[item].wordBoldArr[i]);
  	   y1 += hl;
  	};
  	pdfDoc.addJustifyText(lines[lines.length-1],x1, y1, -1, data[item].wordBoldArr[lines.length-1]);
  };
  
  var restore = function()
  {
    for(var i=0; i<data.length; i++)  
      data[i].itemPage = data[i].itemPage0;    
  };
  
  var addColumnDataToPDF = function(item)
  {
    var t = data[item];  
    var x=0;
    var y=0;
    if(t.pos==0 && actualPage!=0)
      addTableToPDF(tables[t.id].item); 
    var tab = tables[t.id]; 
    var ctx = pages[actualPage].ctx;
    tab.totalRow = t.columnData.length;
    var tr = tableProperty.totalRow;
    var tOffsetPage = tab.offsetPage;
    if(!repeatHead && t.itemPage > 0)
    {
      tr = tableProperty.newTotalRow;
      tOffsetPage = tab.offsetPage - (tr - tableProperty.totalRow)*tableProperty.heightRow;
    }
    var wt = 0;
    tab.xAcu = new Array();
    for(var i=0; i<tableProperty.sizeCols.length; i++)
    {
       tab.xAcu[i] = wt;
       wt += tableProperty.sizeCols[i]; 
    }
    var newX1 = tab.x1 - parseInt(wt/2,10);
    for(var i=1; i<=tr; i++)
    {
       if(i % 2)   
       {
        pdfDoc.setDrawColor(0);
        pdfDoc.setFillColor(tableProperty.oddColorRED,tableProperty.oddColorGREEN, tableProperty.oddColorBLUE);
       }
       else
       {
         pdfDoc.setDrawColor(0);
         pdfDoc.setFillColor(tableProperty.evenColorRED,tableProperty.evenColorGREEN, tableProperty.evenColorBLUE);  
       }
       y = convertYPDF(tOffsetPage) + convertYPDF(tableProperty.heightRow*i);
       var dy = convertYPDF(tableProperty.heightRow) + 1;
       pdfDoc.rect(convertXPDF(newX1) + convertXPDF(tab.xAcu[t.pos]), y, convertXPDF(tableProperty.sizeCols[t.pos]+1), dy,'F');
     }    

    pdfDoc.setTextColor(tableProperty.fontCellColorRED,tableProperty.fontCellColorGREEN,tableProperty.fontCellColorBLUE);
    pdfDoc.setFontSize(tableProperty.fontSizeCell);
    pdfDoc.setFont(tableProperty.fontFamilyCell);
    y=0;
    for(var i=0; i < t.columnData.length; i++)
    {
      y = convertYPDF(tOffsetPage) + convertYPDF(parseInt(tableProperty.fontSizeCell/2,10)) + 
      convertYPDF(parseInt(tableProperty.heightRow,10)*(i+1)) + 
      convertYPDF(parseInt(tableProperty.heightRow/2,10)); 
      x = convertXPDF(newX1 + tab.xAcu[t.pos]) + 1;
      var tt = convertXPDF(ctx.measureText(t.columnData[i]).width);
      if(tableProperty.alignData.length > 0)
      { 
        if(tableProperty.alignData[t.pos]=='center')
          x = convertXPDF(newX1 + tab.xAcu[t.pos] + parseInt(tableProperty.sizeCols[t.pos]/2,10)) - parseInt(tt/2,10) - parseInt(tableProperty.fontSizeCell/10,10);
        if(tableProperty.alignData[t.pos]=='right')
          x = convertXPDF(newX1 + tab.xAcu[t.pos] + tableProperty.sizeCols[t.pos]) - tt - parseInt(tableProperty.fontSizeCell/10,10);  
      }
      pdfDoc.text(x, y,t.columnData[i]);
    }    
    tables[t.id] = tab;
  };
  
  var addTableToPDF = function(item)
  {
     var t = data[item];
     var bgColor  = t.rgbaObj.getRGBA();
     var tOffsetPage = t.offsetPage;
     if(!repeatHead && actualPage > 0)
       tOffsetPage =  t.offsetPage - (tableProperty.newTotalRow - tableProperty.totalRow)*tableProperty.heightRow;   
     var ctx = pages[actualPage].ctx;
     t.totalRow = 1;
     t.xAcu = new Array();
     
     var wt = 0;
     for(var i=0; i<tableProperty.sizeCols.length; i++)
     {
       t.xAcu[i] = wt;
       wt += tableProperty.sizeCols[i]; 
     }
     newX1 = t.x1 - parseInt(wt/2,10);
     pdfDoc.setDrawColor(0);
     pdfDoc.setFillColor(t.rgbaObj.getIntRed(),t.rgbaObj.getIntGreen(),t.rgbaObj.getIntBlue());
     pdfDoc.rect(convertXPDF(newX1),convertYPDF(tOffsetPage),convertXPDF(wt),convertYPDF(tableProperty.heightRow),'F');
     pdfDoc.setTextColor(tableProperty.fontColorTitleRED,tableProperty.fontColorTitleGREEN,tableProperty.fontColorTitleBLUE);
     pdfDoc.setFontSize(tableProperty.fontSizeTitle);
     pdfDoc.setFontType(tableProperty.fontTypeTitle);
     pdfDoc.setFont(tableProperty.fontFamilyTitle);
     var wp=2;
     var x=0;
     var y = 0;
     for(var i=0; i<t.arrayTitles.length; i++)
     {
       x = newX1 + parseInt(tableProperty.sizeCols[i]/2,10) - parseInt(ctx.measureText(t.arrayTitles[i]).width/2,10) + wp - parseInt(tableProperty.fontSizeTitle/2,10);
       y = tOffsetPage + parseInt(tableProperty.fontSizeTitle/2,10) + parseInt(tableProperty.heightRow/2,10) - parseInt(tableProperty.fontSizeTitle/10,10);
       pdfDoc.text(convertXPDF(x),convertYPDF(y),t.arrayTitles[i]);
       wp += tableProperty.sizeCols[i];
     }
     tables[t.id]=t;
  };
    
  var addTableFrameToPDF = function(item)
  {
     var t = data[item];
     var j = t.jsonFrame;
     var ctx = pages[actualPage].ctx;
     var sizeFont = 12;
     pdfDoc.setDrawColor(0);
     pdfDoc.setFillColor(t.rgbaObj.getIntRed(),t.rgbaObj.getIntGreen(),t.rgbaObj.getIntBlue());
     pdfDoc.setTextColor(0,0,0);
     var ac = 0; //ancho de columna
     if(!t.pdfCoord)
       pdfDoc.rect(convertXPDF(t.x1),convertYPDF(t.offsetPage),convertXPDF(t.dx),convertYPDF(j.heightCell),'D');
     else
       pdfDoc.rect(t.x1,t.offsetPage,t.dx,j.heightCell,'D');
     var x = t.x1+j.columnSizes[0]/4;
     pdfDoc.setFontSize(10);
     //pdfDoc.setFontType('bold');
     pdfDoc.setFont('helvetica');
     for(var i=0; i<j.totalCols; i++)
     {
       ac += j.columnSizes[i];
       if(!t.pdfCoord)
       {
         pdfDoc.rect(convertXPDF(t.x1),convertYPDF(t.offsetPage),convertXPDF(ac),convertYPDF(j.tableHeight),'D');
         pdfDoc.text(convertXPDF(x),convertYPDF(t.offsetPage + j.heightCell/2 + sizeFont/2),j.fields[i]);
       }
       else
       {
         pdfDoc.rect(t.x1,t.offsetPage,ac,j.tableHeight,'D');
         pdfDoc.text(x,t.offsetPage + j.heightCell/2 + sizeFont/2,j.fields[i]);
       }
       if(i<j.totalCols-1)
         x+=j.columnSizes[i]/2 + j.columnSizes[i+1]/2;	
     }
     if(!t.pdfCoord)
       pdfDoc.rect(convertXPDF(t.x1),convertYPDF(t.offsetPage),convertXPDF(t.dx),convertYPDF(j.tableHeight),'D');
     else
       pdfDoc.rect(t.x1,t.offsetPage,t.dx,j.tableHeight,'D');
     pdfDoc.setFontSize(7);
     x=t.x1+2;
     for(var c=0; c<j.totalCols; c++)	
     {
       y=t.offsetPage + (j.heightCell + j.heightCell/2);	
       var auxJ = j.dataCol[c].split('\n');
       for(var r=0; r<auxJ.length; r++)
       {
       	 if(!t.pdfCoord)
           pdfDoc.text(convertXPDF(x),convertYPDF(y),auxJ[r]);
         else
           pdfDoc.text(x,y,auxJ[r]);
         y+= (j.heightCell);    
       }   
       if(c < j.totalCols - 1)
         x+=j.columnSizes[c];	
     }
     ctx.closePath();    
  };  
    
  var addHeadImgToPDF = function(item)
  {       
    var t = data[item]; 
    pages[actualPage].headCB.setDimension(t.dx,t.dy);
    pages[actualPage].headImg.src = t.src; 
    pages[actualPage].headImg.isLoad = false;  
    pages[actualPage].headImg.page = actualPage;
    pages[actualPage].headImg.onload = function(e)
    {    
      pages[this.page].headCTX.drawImage(this, convertXPDF(t.x1), convertYPDF(t.offsetPage), t.dx, t.dy);
      this.isLoad = true;
      var imageData = atob(pages[this.page].headCanvas.toDataURL("image/jpeg").slice('data:image/jpeg;base64,'.length));
      pdfDoc.addImage(imageData, 'JPEG', convertXPDF(t.x1), convertYPDF(t.offsetPage));
    } 
    pages[actualPage].item = item;        
  };

  var addImgToPDF = function(item)
  {  
    return new Promise((resolver, reject)=>{
      var t = data[item]; 
      pages[actualPage].imgCB.setDimension(t.dx,t.dy);
      pages[actualPage].bodyImgs.src = t.src; 
      pages[actualPage].bodyImgs.isLoad = false;  
      pages[actualPage].bodyImgs.page = actualPage;
      pages[actualPage].bodyImgs.hasNext = true;
      pages[actualPage].bodyImgs.onload = function(e)
      {    
        pages[this.page].imgCTX.drawImage(this, 0, 0, t.dx, t.dy);
        this.isLoad = true;
        var imageData = atob(pages[this.page].imgCanvas.toDataURL("image/jpeg").slice('data:image/jpeg;base64,'.length));
        if(!t.pdfCoord)
          pdfDoc.addImage(imageData, 'JPEG', convertXPDF(t.x1), convertYPDF(t.offsetPage));
        else
          pdfDoc.addImage(imageData, 'JPEG', t.x1, t.offsetPage);
        resolver(true)
      } 
      pages[actualPage].item = item;
    })
  };
  
  var addImgToPDF2 = function(item)
  {  
    return new Promise((resolver, reject)=>{
      var t = data[item]; 
      pages[actualPage].imgCB.setDimension(t.dx,t.dy);
      pages[actualPage].bodyImgs2.src = t.src; 
      pages[actualPage].bodyImgs2.isLoad = false;  
      pages[actualPage].bodyImgs2.page = actualPage;
      pages[actualPage].bodyImgs2.hasNext = true;
      pages[actualPage].bodyImgs2.onload = function(e)
      {    
        pages[this.page].imgCTX.drawImage(this, 0, 0, t.dx, t.dy);
        this.isLoad = true;
        var imageData = atob(pages[this.page].imgCanvas.toDataURL("image/jpeg").slice('data:image/jpeg;base64,'.length));
        if(!t.pdfCoord)
          pdfDoc.addImage(imageData, 'JPEG', convertXPDF(t.x1), convertYPDF(t.offsetPage));
        else
          pdfDoc.addImage(imageData, 'JPEG', t.x1, t.offsetPage);
        resolver(true);
      } 
      pages[actualPage].item = item;
    })
  };
  
  var addImageHrTableToPDF = function(item)
  {  
    var t = data[item];
    pages[actualPage].item = item;
    var ncb = new CanvasBuilder(null,widthReport, pageSize - t.y1);
    var yGlobal = 2;
    var ctx = ncb.getCanvasContext();
    var canvasObj = ncb.getCanvasObj();
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,widthReport,pageSize);
    
    ctx.beginPath();
    ctx.textAlign = 'left';
    ctx.fillStyle = hrTableProperty.fontColor;
    ctx.font = 'bold 12pt helvetica';
    ctx.lineWidth = 1;
    ctx.strokeStyle = hrTableProperty.lineColor;
    for(var i=0; i<hrTableProperty.totalRow+1; i++)
    {
      ctx.moveTo(t.x1, yGlobal+(i*hrTableProperty.heightCell));
      ctx.lineTo(t.x1+hrTableProperty.widthCell*hrTableProperty.totalCol, yGlobal+(i*hrTableProperty.heightCell));    
      ctx.stroke();
    }
    ctx.textAlign = 'center';
    for(var i=0; i<=hrTableProperty.totalCol; i++)
    {
      if(i==0)  
      { 
        ctx.fillText(hrTableProperty.titCol[i],t.x1+hrTableProperty.widthCell/2,yGlobal+parseInt(hrTableProperty.heightCell/2)+6);    
        ctx.moveTo(t.x1, yGlobal);
        ctx.lineTo(t.x1, yGlobal+(hrTableProperty.totalRow*hrTableProperty.heightCell));
      }
      else
      { 
        if(i < hrTableProperty.totalCol)  
          ctx.fillText(hrTableProperty.titCol[i],t.x1+hrTableProperty.widthCell*(i+1)-hrTableProperty.widthCell/2,yGlobal+parseInt(hrTableProperty.heightCell/2)+6);
        ctx.moveTo(t.x1+i*hrTableProperty.widthCell, yGlobal);
        ctx.lineTo(t.x1+i*hrTableProperty.widthCell, yGlobal+(hrTableProperty.totalRow*hrTableProperty.heightCell));
      }
      ctx.stroke();  
    }
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = hrTableProperty.fontColor;
    ctx.font = hrTableProperty.fontSize+'pt'+' '+hrTableProperty.fontFamily;
    ctx.textAlign = 'left';
    for(var i=0; i<t.horario.length; i++)
    {
      var yx = yGlobal + hrTableProperty.heightCell * (i+1.5) + hrTableProperty.fontSize/2;      
      yImg = yGlobal + hrTableProperty.heightCell * (i+1) + 2;
      ctx.fillText(t.horario[i],t.x1 + 2, yx); 
      
      for (var j=0; j<hrTableProperty.totalCol;j++)
      {
         var xx = t.x1 + hrTableProperty.widthCell*(j+1);
         var xImg = t.x1 + hrTableProperty.widthCell * (j+1) + hrTableProperty.widthCell/2 - (hrTableProperty.heightCell-4)/2;
         if(t.arrayData.length > j)
         {
           if(t.arrayData[j].length > i)
           {
             if(parseInt(t.arrayData[j][i],10) >= 0 )
               ctx.drawImage(t.imgs[t.arrayData[j][i]], xImg, 3+yImg, hrTableProperty.heightCell-10, hrTableProperty.heightCell-10);
           }
         }
      }
    }
    ctx.closePath();
    var imageData = atob(canvasObj.toDataURL("image/jpeg").slice('data:image/jpeg;base64,'.length));
    pdfDoc.addImage(imageData, 'JPEG', convertXPDF(t.x1)-1, convertYPDF(t.y1));
  };
  
  var addCanvasToPDF = function(item)
  {  
    var t = data[item]; 
    var imageData = t.canvasObj.toDataURL("image/jpeg");
    if(!t.pdfCoord)
      pdfDoc.addImage(imageData, 'JPEG', convertXPDF(t.x1), convertYPDF(t.offsetPage));
    else
      pdfDoc.addImage(imageData, 'JPEG', t.x1, t.offsetPage);
    pages[actualPage].item = item;
  };
  
  var addGraphToPDF = function(item)
  {
    var t = data[item]; 
    var ncb = new CanvasBuilder(null,t.dx,t.dy);
    var myCtx = ncb.getCanvasContext();
    var myCanvas = ncb.getCanvasObj();
    myCtx.fillStyle = 'rgb(255,255,255)';
    myCtx.fillRect(0,0,t.dx,t.dy);
    myCtx.drawImage(t.renderedGraph, 0, 0, t.dx, t.dy); 
    var imageData = atob(myCanvas.toDataURL("image/jpeg").slice('data:image/jpeg;base64,'.length));
    if(!t.pdfCoord)
      pdfDoc.addImage(imageData, 'JPEG', convertXPDF(t.x1), convertYPDF(t.offsetPage));
    else
      pdfDoc.addImage(imageData, 'JPEG', t.x1, t.offsetPage);
    pages[actualPage].item = item; 
  };
  
  var addLineToPDF = function(item)
  {
     var t = data[item];
     var red = t.rgbaObj.getIntRed(); 
     var green = t.rgbaObj.getIntGreen();
     var blue = t.rgbaObj.getIntBlue();
     
     var x1 = convertXPDF(t.x1);
     var y1 = convertYPDF(t.offsetPage)-0.5;
     var x2 = convertXPDF(t.x2);
     var y2 = convertYPDF(t.y2) - 0.5;
     
     if(t.pdfCoord)
     {
     	x1 = t.x1;
     	y1 = t.offsetPage;
     	x2 = t.x2;
     	y2 = t.y2;
     }
     pdfDoc.setLineWidth(t.lineWidth/3.5);
     pdfDoc.setDrawColor(red,green,blue);
     pdfDoc.line(x1,y1,x2,y2);
  };
  
  var addTextToPDF = function(item)
  {
     var t = data[item];      
     var red = t.rgbaObj.getIntRed(); 
     var green = t.rgbaObj.getIntGreen();
     var blue = t.rgbaObj.getIntBlue();  
     pdfDoc.setTextColor(red,green,blue);
     pdfDoc.setFont(t.fontFamily);
     pdfDoc.setFontType(t.fontType);
     pdfDoc.setFontSize(t.fontSize-0.7);
     if(t.typeData=='headTitle')
     {
       var xt = 100 - convertXPDF(parseInt(pages[0].ctx.measureText(t.headTitle).width/2,10)) + 0.5;
       if(orientation=='landscape')
         if(!t.pdfCoord)
           xt = 143 - convertXPDF(parseInt(pages[0].ctx.measureText(t.headTitle).width/2,10)) + 0.5;  
         else
           xt = 143 - parseInt(pages[0].ctx.measureText(t.headTitle).width/2,10) + 0.5; 
       if(!t.pdfCoord)    
         pdfDoc.text(xt, convertYPDF(t.y1), t.headTitle);
       else
         pdfDoc.text(xt, t.y1, t.headTitle);
     }
     else
     {
       if(data[item].itemPage > 0)	
       {
         if(!t.pdfCoord)
           pdfDoc.text(convertXPDF(t.x1), convertYPDF(t.y1-(pageSize*data[item].itemPage)), t.text);
         else
           pdfDoc.text(t.x1, t.y1-(pageSize*data[item].itemPage), t.text);
       }
       else
       {
       	 if(!t.pdfCoord) 
           pdfDoc.text(convertXPDF(t.x1), convertYPDF(t.y1), t.text);
         else
           pdfDoc.text(t.x1, t.y1, t.text);
       }
     };
  };
  
  var addRotateTextToPDF = function(item){  
     var t = data[item];      
     var red = t.rgbaObj.getIntRed(); 
     var green = t.rgbaObj.getIntGreen();
     var blue = t.rgbaObj.getIntBlue();  
     pdfDoc.setTextColor(red,green,blue);
     pdfDoc.setFont(t.fontFamily);
     pdfDoc.setFontType(t.fontType);
     pdfDoc.setFontSize(t.fontSize-0.7);
     if(data[item].itemPage > 0){
     		pdfDoc.text(t.x1, t.y1-(pageSize*data[item].itemPage), t.text, null, t.angle);
     }
     else{
         pdfDoc.text(t.x1, t.y1, t.text, null, t.angle);
     }
  };
  
  var addBarToPDF = function(item)
  {
     var t = data[item];
     var red = t.rgbaObj.getIntRed(); 
     var green = t.rgbaObj.getIntGreen();
     var blue = t.rgbaObj.getIntBlue();     
     var x1 = convertXPDF(t.x1);
     var dx = convertXPDF(t.dx) + 0.5;
     var y1 = convertYPDF(t.offsetPage)-0.5;
     var dy = convertYPDF(t.dy)-0.5;
     if(t.pdfCoord)
     {
       x1 = t.x1;
       dx = t.dx;
       y1 = t.offsetPage;
       dy = t.dy;
     }
     pdfDoc.setDrawColor(0);
     pdfDoc.setFillColor(red,green,blue);
     pdfDoc.rect(x1,y1,dx,dy,'F');
  };
  
  var addRectangleToPDF = function(item)
  {
     var t = data[item];
     var red = t.rgbaObj.getIntRed(); 
     var green = t.rgbaObj.getIntGreen();
     var blue = t.rgbaObj.getIntBlue();
     var x1 = convertXPDF(t.x1);
     var dx = convertXPDF(t.dx) + 0.5;
     var y1 = convertYPDF(t.offsetPage)-0.5;
     var dy = convertYPDF(t.dy) + 0.8;     
     if(t.pdfCoord)
     {
       x1 = t.x1;
       dx = t.dx;
       y1 = t.offsetPage;
       dy = t.dy;
     }
     pdfDoc.setDrawColor(0);
     pdfDoc.rect(x1,y1,dx,dy);
  };
  
  var addRectanglePDFToPDF = function(item)
  {
     var t = data[item];
     var red = t.rgbaObj.getIntRed(); 
     var green = t.rgbaObj.getIntGreen();
     var blue = t.rgbaObj.getIntBlue();
     var x1 = t.x1;
     var dx = t.dx ;
     var y1 = t.offsetPage;
     var dy = t.dy;
     pdfDoc.setDrawColor(0);
     pdfDoc.rect(x1,y1,dx,dy);
  };
  
  var addSimpleTableToPDF = function(item)
  {
     var t = data[item];
     var red = t.rgbaObj.getIntRed(); 
     var green = t.rgbaObj.getIntGreen();
     var blue = t.rgbaObj.getIntBlue();
     
     var x1 = convertXPDF(t.x1);
     var dx = convertXPDF(t.dx) + 0.5;
     var y1 = convertYPDF(t.offsetPage)-0.5;
     var hc = convertYPDF(t.heightCell)+0.8;
     if(t.pdfCoord)
     {
       x1 = t.x1;
       dx = t.dx;
       y1 = t.offsetPage;
       hc = t.heightCell;
     }
     pdfDoc.setDrawColor(0);
     for(var i=0; i<t.totalCell; i++)
     {
       pdfDoc.rect(x1,y1+i*hc,dx,hc);
     } 
  };
  
  var addAbsTableToPDF = function(item)
  {
     var t = data[item];
     var red = t.rgbaObj.getIntRed(); 
     var green = t.rgbaObj.getIntGreen();
     var blue = t.rgbaObj.getIntBlue();
     
     var x1 = convertXPDF(t.x1);
     var y1 = convertYPDF(t.offsetPage)-0.5;
     var hc = convertYPDF(t.heightCell)+0.8;
     if(t.pdfCoord)
     {
       x1 = t.x1;
       y1 = t.offsetPage;
       hc = t.heightCell;
     }
     var deltax=0;
     pdfDoc.setDrawColor(0);
     for(var f=0; f<t.totalCell; f++)
     {
       deltax=0;	
       for(c=0; c<t.totalCol; c++)
       {
       	 if(!t.pdfCoord)
           pdfDoc.rect(x1 + convertXPDF(deltax), y1+f*hc, convertXPDF(t.sizeCols[c])-0.5, hc);
         else
           pdfDoc.rect(x1 + deltax, y1+f*hc, t.sizeCols[c], hc);
         deltax+=t.sizeCols[c];
       };
     };
  };
  
  var addSimpleTablePDFToPDF = function(item)
  {
     var t = data[item];
     var red = t.rgbaObj.getIntRed(); 
     var green = t.rgbaObj.getIntGreen();
     var blue = t.rgbaObj.getIntBlue();
     var x1 = t.x1;
     var dx = t.dx;
     var y1 = t.offsetPage;
     var hc = t.heightCell;
     pdfDoc.setDrawColor(0);
     for(var i=0; i<t.totalCell; i++)
     {
       pdfDoc.rect(x1,y1+i*hc,dx,hc);
     } 
  };
  
  var addFooterBarToPDF = function(item)
  {
     var t = data[item]; 
     var red = t.rgbaObj.getIntRed(); 
     var green = t.rgbaObj.getIntGreen();
     var blue = t.rgbaObj.getIntBlue();
     var x1 = convertXPDF(t.x1);
     var dx = convertXPDF(t.dx) + 1;
     if(t.pdfCoord)
     {
       x1 = t.x1;
       dx = t.dx;
     }
     var y1 = 0;
     var ar = 0;
     if(orientation=='landscape')
     {
       y1 = 200;
       ar = 296;
     }
     else
     {
       y1 = 259.5;
       ar = 210;
     }
     var dy = convertYPDF(t.dy);
     if(t.pdfcoord)
       dy = t.dy;
     pdfDoc.setDrawColor(0);
     pdfDoc.setFillColor(red,green,blue);
     pdfDoc.rect(x1,y1,dx,dy,'F');
     pdfDoc.setFontSize(fontProperty.size);
     if(fontProperty.fontType!='normal')
       pdfDoc.setFontType(fontProperty.fontType);
     pdfDoc.setFont(fontProperty.family);
     red = fontProperty.rgbaObj.getIntRed();
     green = fontProperty.rgbaObj.getIntGreen();
     blue = fontProperty.rgbaObj.getIntBlue();
     pdfDoc.setTextColor(red,green,blue);
     pdfDoc.text(x1+5,y1+5,strDate);
     var text = 'Página: '+ (actualPage+1) +' de '+ totalPages;
     var wt = convertXPDF(pages[0].ctx.measureText(text).width);
     if(t.pdfCoord)
       wt = pages[0].ctx.measureText(text).width;
     var x = parseInt(ar/2 - wt/2,10); 
     pdfDoc.text(x ,y1+5,text);
     var text2 = 'Registro(s): '+tableProperty.columnDataPages[actualPage].acu+'  de '+tableProperty.columnDataPages[actualPage].totalReg;
     wt = convertXPDF(pages[0].ctx.measureText(text2).width);
     if(t.pdfCoord)
       wt = pages[0].ctx.measureText(text2).width;
     x = ar - wt - 16; 
     pdfDoc.text(x ,y1+5,text2);
  };
  
  var createTxt = function()
  {
    var sb  = new StringBuffer();
    sb.appendLn(excelProperty.title);
    sb.appendLn('');   
    for(var c=0; c<excelProperty.arrayTitles.length; c++)
    {
       if(c > 0) 
         sb.append(separator + excelProperty.arrayTitles[c]);
       else
         sb.append(excelProperty.arrayTitles[c]);
    }

    sb.appendLn('');
    var st = excelProperty.data_St;
    var cols = tableProperty.sizeCols.length;
    var rows = st[0].length;
    for(var f=0; f<rows; f++)
    {
      for(var c=0; c<cols; c++)
      {
         if(c > 0) 
           sb.append(separator+st[c][f]);  
         else
           sb.append(st[c][f]); 
      }
      sb.appendLn('');
    }
    var txt  = sb.toString();  
    return txt;
  };
  var convertYPDF = function(value)
  {
     if(orientation=='landscape')
       return parseFloat((value * 210 ) / pageSize, 10)-0.6;
     else
     {
       if(pdfFormat=='letter')	
         return parseFloat((value * 296 ) / pageSize, 10)-0.6;
       if(pdfFormat=='custom')	
         return parseFloat((value * dimPDFPage[0] ) / pageSize, 10)-0.6;           
     }
  };
  
  var convertXPDF = function(value)
  {
     if(orientation=='landscape')
       return parseFloat((value * 296 ) / widthReport, 10)+0.4;
     else
       return parseFloat((value * 210 ) / widthReport, 10)+0.4;
  };
  
  var renderToPDF = async function()
  {        
    pdfDoc = null;       
    var imgpdf = 0; 
    if(pdfFormat == 'custom')
      pdfDoc = new jsPDF(orientation, metricPDFPage, dimPDFPage);
    else
      pdfDoc = new jsPDF(orientation); 
    //createGauge();  
    restore();  
    actualPage=0;
    if(!objColorFooter)     
       objColorFooter = this.getRGBAObj(20,20,80,1); 
    //if(itemHeadImg < 0)
       //this.setHeadImage(defaultImg); 
    for(var p=0; p<pages.length; p++)
    { 
      actualPage = p;  
      //setPorcentValueGauge((p+1)/pages.length);
      if(p > 0)
        pdfDoc.addPage();
      for(var i=0; i<data.length; i++)  
      {           
         if(data[i].itemPage == p)
         {
           if(data[i].typeData=='table')
           {
             addTableToPDF(i);  
           }  
           if(data[i].typeData=='footerBar')
           {
             addFooterBarToPDF(i);
             if(data[i].mode)
               data[i].itemPage++;   
           }  
           if(data[i].typeData=='headTitle')
           {
             addTextToPDF(i);  
             if(repeatHead)
               if(data[i].mode)
                 data[i].itemPage++;
           } 
           if(data[i].typeData=='headImage')
           {
             addHeadImgToPDF(i);  
             if(repeatHead)
               if(data[i].mode)
                 data[i].itemPage++; 
             //checkImg((p+1)/pages.length);
           }
           if(data[i].typeData=='image')
           {
           	 imgpdf++; 
           	 if(imgpdf % 2)
           	   await addImgToPDF2(i);
           	 else
               await addImgToPDF(i);
             if(data[i].mode)
               data[i].itemPage++;
             //checkImg((p+1)/pages.length);
           }
           if(data[i].typeData=='imageHrTable')
           { 
             addImageHrTableToPDF(i);  
           }
           
           if(data[i].typeData=='horario')
           { 
             addHorarioToPDF(i);  
           } 
           if(data[i].typeData=='canvas')
           {
             addCanvasToPDF(i);
             //checkImg((p+1)/pages.length);
           }
           if(data[i].typeData=='graph')
           {
             addGraphToPDF(i);
             //checkImg((p+1)/pages.length);
           }
           if(data[i].typeData=='bar')
           {
             addBarToPDF(i);
             if(data[i].mode)
               data[i].itemPage++;
           } 
           if(data[i].typeData=='rectangle')
           {
             addRectangleToPDF(i);
             if(data[i].mode)
               data[i].itemPage++;
           }
           if(data[i].typeData=='rectanglePDF')
           {
             addRectanglePDFToPDF(i);
             if(data[i].mode)
               data[i].itemPage++;
           }
           if(data[i].typeData=='simpleTable')
           {
             addSimpleTableToPDF(i);
             if(data[i].mode)
               data[i].itemPage++;
           }
           if(data[i].typeData=='simpleTablePDF')
           {
             addSimpleTablePDFToPDF(i);
             if(data[i].mode)
               data[i].itemPage++;
           }
           if(data[i].typeData=='AbsTable')
           {
             addAbsTableToPDF(i);
             if(data[i].mode)
               data[i].itemPage++;
           }
           if(data[i].typeData=='tableFrame')
           {
             addTableFrameToPDF(i);
             if(data[i].mode)
               data[i].itemPage++;
           }
           if(data[i].typeData=='columnData')
           { 
             addColumnDataToPDF(i);
           } 
           if(data[i].typeData=='line')
           {
             addLineToPDF(i);
             if(data[i].mode)
               data[i].itemPage++;
           }
           if(data[i].typeData=='text')
           {
             addTextToPDF(i); 
             if(data[i].mode)
               data[i].itemPage++;
           } 
           if(data[i].typeData=='rotateText')
           {
             addRotateTextToPDF(i); 
             if(data[i].mode)
               data[i].itemPage++;
           } 
           if(data[i].typeData=='addTxtAlign')
           {
             addTxtAlignToPDF(i); 
             if(data[i].mode)
               data[i].itemPage++;
           }
           if(data[i].typeData=='addJustifyTxt')
           {
             addJustifyTxtToPDF(i); 
             if(data[i].mode)
               data[i].itemPage++;
           }
           if(data[i].typeData=='addParagraph')
           {
             addParagraphToPDF(i); 
             if(data[i].mode)
               data[i].itemPage++;
           }
           if(data[i].typeData=='addJustParagraph')
           {
             addJustParagraphToPDF(i); 
             if(data[i].mode)
               data[i].itemPage++;
           }
         }           
      }
    }
    //closeGauge();
  };
  
  this.render = function(extFunct)
  { 
     var vTot = pages.length;
     restore(); 
     actualPage = 0; 
     if(!objColorFooter)     
       objColorFooter = this.getRGBAObj(20,20,80,1); 
     //if(itemHeadImg < 0)
       //this.setHeadImage(defaultImg);
     for (p=0; p<pages.length; p++)
     {
       actualPage = p; 
       var poc = (p+1)/vTot;
       pages[p].panelOut.setDimension(widthReport, pageSize);
       for(var i=0; i<data.length; i++)
       {
         if(data[i].itemPage == p)
         {  
           if(data[i].typeData=='headTitle')
           {
             addTextToPanel(i);  
             if(repeatHead)
               if(data[i].mode)
                 data[i].itemPage++;
           }
           if(data[i].typeData=='imageHrTable')
           { 
             addImageHrTableToPanel(i);  
           }
           if(data[i].typeData=='horario')
           { 
             addHorarioToPanel(i);
           }
           if(data[i].typeData=='graph')
           {
             addGraphToPanel(i);  
           }
           if(data[i].typeData=='canvas')
           {
             addCanvasToPanel(i);  
           }
           if(data[i].typeData=='text')
           {
             addTextToPanel(i); 
             if(data[i].mode)
               data[i].itemPage++;
           } 
           if(data[i].typeData=='addParagraph')
           {
             addParagraphToPanel(i); 
             if(data[i].mode)
               data[i].itemPage++;
           }
           if(data[i].typeData=='image')
           {
             addImgToPanel(i);
             if(data[i].mode)
               data[i].itemPage++; 
           }
           if(data[i].typeData=='bar')
           {
             addBarToPanel(i);
             if(data[i].mode)
               data[i].itemPage++;
           }
           if(data[i].typeData=='barGradient')
           {
             addBarGradientToPanel(i);
             if(data[i].mode)
               data[i].itemPage++;
           }
           if(data[i].typeData=='rectangle')
           {
             addRectangleToPanel(i);
             if(data[i].mode)
               data[i].itemPage++;
           }
           if(data[i].typeData=='simpleTable')
           {
             addSimpleTableToPanel(i);
             if(data[i].mode)
               data[i].itemPage++;
           }
           if(data[i].typeData=='AbsTable')
           {
             addAbsTableToPanel(i);
             if(data[i].mode)
               data[i].itemPage++;
           }
           if(data[i].typeData=='tableFrame')
           {
             addTableFrameToPanel(i);
             if(data[i].mode)
               data[i].itemPage++;
           }
           if(data[i].typeData=='line')
           {
             addLineToPanel(i);
             if(data[i].mode)
               data[i].itemPage++;
           }           
           if(data[i].typeData=='table')
           {
             addTableToPanel(i);  
           }
           if(data[i].typeData=='columnData')
           { 
             addColumnDataToTable(i);
           } 
           if(data[i].typeData=='footerBar')
           {
             addFooterBarToPanel(i);
             if(data[i].mode)
               data[i].itemPage++;   
           }
           if(data[i].typeData=='headImage')
           {  
             addImgToPanel(i);
             if(repeatHead)
               if(data[i].mode)
               {
                 data[i].itemPage++;
               }
           }
         }
       }                      
     }
     if (extFunct!=undefined){
       extFunct();
     }
  };
  
  this.renderToExcel = function()
  {
    excel.setTableId('tableExcelId');
    excel.setSheetName(excelProperty.sheetName);
    excel.setTitle(excelProperty.title);
    excel.setAlignColmn(tableProperty.alignData);
    excel.setArrayTitle(excelProperty.arrayTitles);
    excel.setSizeCols(tableProperty.sizeCols);
    excel.addDataStruct(excelProperty.data_St);
    excel.render();
  };
  
  this.renderToTxt = function()
  {
    var d = document.createElement('div');
    d.style.position = 'absolute';
    d.style.left = parseInt(window.screen.width/2 - 150,10) + 'px';
    d.style.top = parseInt(window.screen.height/2 - 140,10) + 'px';
    d.style.width = '300px';
    d.style.height = '120px';
    d.style.borderWidth ='1px';
    d.style.borderColor = 'rgba(200,200,200,0.4)';
    d.style.backgroundColor = colorDlgSeparator;
    d.style.borderStyle = 'ridge';
    d.style.fontFamily = 'verdana';
    d.style.fontSize = '11px';
    d.style.borderRadius='1em';
    d.style.zIndex ='100000';
    var tn1 = document.createElement('textNode');
    tn1.innerHTML = 'Separador : ';
    tn1.style.position = 'absolute';
    tn1.style.color='white';
    tn1.style.left = '15px';
    tn1.style.top = '20px';
    var tn2 = document.createElement('textNode');
    tn2.innerHTML = 'Nombre archivo: ';
    tn2.style.position = 'absolute';
    tn2.style.color='white';
    tn2.style.left = '15px';
    tn2.style.top = '50px';
    d.appendChild(tn1);
    d.appendChild(tn2);
    d.style.display='block';
    d.align = 'center';
    var ip1 = document.createElement('input');
    ip1.size = 1;
    ip1.style.width = '14px';
    ip1.value = '|';
    ip1.style.position='absolute';
    ip1.style.left = '120px';
    ip1.style.top = '16px';
    ip1.style.color='#aeaeae';
    var ip2 = document.createElement('input');
    ip2.size = 25;
    ip2.style.width = '165px';
    ip2.value = 'educa';
    ip2.style.position='absolute';
    ip2.style.left = '120px';
    ip2.style.top = '46px';
    ip2.style.color='#aeaeae';
    d.appendChild(ip1);
    d.appendChild(ip2);
    document.body.appendChild(d);
    var btn = document.createElement('input');
    btn.type = 'button';
    btn.value='Continuar';
    btn.style.position = 'absolute';
    btn.style.left='112px';
    btn.style.top='85px';
    btn.style.fontFamily='verdana';
    btn.style.fontSize='11px';
    btn.onclick = function(e){d.style.display = 'none';};
    d.appendChild(btn);
    ip1.onkeypress = function(e)
    {
      this.style.color='#000000';  
    };
    ip2.onkeypress = function(e)
    {
      this.style.color='#000000';  
    };
    ip1.onblur = function(e)
    { 
      setSeparator(ip1.value);     
      a.download = ip2.value+".txt";
      a.href = "data:text/plain;base64," + btoa(createTxt());
    };
    ip2.onblur = function(e)
    { 
      setSeparator(ip1.value);     
      a.download = ip2.value+".txt";
      a.href = "data:text/plain;base64," + btoa(createTxt());
    };
    var a = d.appendChild(document.createElement("a"));
    a.appendChild(btn);
    ip1.focus();
  };
}