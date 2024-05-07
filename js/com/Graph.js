function Graph(width, height, typeGraphic) 
{
  if(typeGraphic.toUpperCase() == 'BAR')
    var typeGraph = 0;
  if(typeGraphic.toUpperCase() == 'PIE')
    var typeGraph = 1;
  if(typeGraphic.toUpperCase() == 'LINE')
    var typeGraph = 2;
  if(typeGraphic.toUpperCase() == 'RADAR')
    var typeGraph = 3;
  if(typeGraphic.toUpperCase() == 'POLAR')
    var typeGraph = 4;
  if(typeGraphic.toUpperCase() == 'DOUGHNUT')
    var typeGraph = 5;
  var cb = new CanvasBuilder(null,width,height);
  var ctx = cb.getCanvasContext();
  cb.getPanelCanvas().align = 'center';
  var ch = new Chart(ctx);
  var wLdy = 200;
  var hLdy = height;
  var lgd = new CanvasBuilder(null,wLdy,hLdy);
  var ctxLgd = lgd.getCanvasContext();
  var panelLgd = lgd.getPanelCanvas();
  panelLgd.style.position = 'absolute';
  panelLgd.style.left = (width+5)+'px';
  panelLgd.style.top = '10px';
  var bgColorLegend = 'rgba(245,245,255,0.7)';
  var dataLgd = [];
  var valorLgd = [];
   
  var barData = 
  {
      base : 240,
      r:170,
      g:210,
      b:240,
      tp:1,
      span : 7,
      colors : [],
      
      colorCalc : function()
      {
        barData.r-=barData.span*6;
        if (barData.r < 50)
        {
          barData.r = barData.base;
          barData.base+=5;
        }
        
        barData.g-=barData.span*4;
        if(barData.g < 50)
        {
          barData.g=barData.base;
          barData.base+=5;
        }
        
        barData.b-=barData.span;
        if(barData.b < 50)
        {
          barData.base=barData.base;
          barData.base+=5;
        }
        if(barData.base > 250)
        {
          barData.r = barData.base;  
        }
        var tam = barData.colors.length;
        barData.colors[tam] = new Object();
        barData.colors[tam].r = barData.r;
        barData.colors[tam].g = barData.g;
        barData.colors[tam].b = barData.b;
        barData.colors[tam].t = barData.tp;
      },
      
      getColor : function(transparency)
      { 
          if(!transparency)
            return "rgba("+this.r+","+this.g+","+this.b+","+this.tp+")"
          else
            return  "rgba("+this.r+","+this.g+","+this.b+","+transparency+")";
      },
      
      getNewColor : function(){ barData.colorCalc(); return barData.getColor()},
      
      data : { labels : [], datasets:[]},
      
      addLabels : function(l)
      {
        barData.data.labels=l;
      },
      
      addSerie : function(serie)
      {  
        barData.data.datasets[barData.data.datasets.length] = 
        {
          fillColor : barData.getNewColor(),
          strokeColor : barData.getColor(1),
          data : serie
        }
      },
      
      getBarData : function()
      {
        return barData.data;  
      }
  }
  
  var pieData =
  {
     data : [],
     values : [],
     getDataPie : function()
     {
        for(var i=0; i<pieData.values.length; i++)
        {
          barData.colorCalc();
          pieData.data[i] = new Object();
          pieData.data[i].value = pieData.values[i];
          pieData.data[i].color = 'rgba('+barData.r+','+barData.g+','+barData.b+','+barData.tp+')';          
        }  
        return pieData.data;
     },
     
     setSerie : function(serie)
     {
        pieData.values = serie; 
     }
  }
  
  var isShowLegend = false;
  
  var lineData = 
  {
      dataLn : {labels : [], datasets : []},
      setLabels : function(labels)
      {
        lineData.dataLn.labels = labels;  
      },
      addData : function(serie)
      {
        var idx =  lineData.dataLn.datasets.length;
        barData.colorCalc();  
        lineData.dataLn.datasets[idx] = new Object();
        lineData.dataLn.datasets[idx].fillColor = 'rgba('+barData.r+','+barData.g+','+barData.b+','+barData.tp+')';
        lineData.dataLn.datasets[idx].strokeColor = 'rgba('+barData.r+','+barData.g+','+barData.b+',1)';
        lineData.dataLn.datasets[idx].pointColor = 'rgba('+barData.r+','+barData.g+','+barData.b+',1)';  
        lineData.dataLn.datasets[idx].pointStrokeColor = 'rgba(0,0,0,1)';
        lineData.dataLn.datasets[idx].data = serie;
      },
      getDataLine : function()
      {
        return lineData.dataLn;  
      } 
  }
  
  var doughnutData =
  {
     data : [],
     values : [],
     getDoughnutData : function()
     {
        for(var i=0; i<doughnutData.values.length; i++)
        {
          barData.colorCalc();
          doughnutData.data[i] = new Object();
          doughnutData.data[i].value = doughnutData.values[i];
          doughnutData.data[i].color = 'rgba('+barData.r+','+barData.g+','+barData.b+','+barData.tp+')';          
        }  
        return doughnutData.data;
     },
     
     setSerie : function(serie)
     {
        doughnutData.values = serie; 
     }
  }
  
  var polarData =
  {
     data : [],
     values : [],
     getPolarData : function()
     {
        for(var i=0; i<polarData.values.length; i++)
        {
          barData.colorCalc();
          polarData.data[i] = new Object();
          polarData.data[i].value = polarData.values[i];
          polarData.data[i].color = 'rgba('+barData.r+','+barData.g+','+barData.b+','+barData.tp+')';          
        }  
        return polarData.data;
     },
     
     setSerie : function(serie)
     {
        polarData.values = serie; 
     }
  }
  
  var radarData = 
  {
      dataLn : {labels : [], datasets : []},
      setLabels : function(labels)
      {
        radarData.dataLn.labels = labels;  
      },
      addData : function(serie)
      {
        var idx =  radarData.dataLn.datasets.length;
        barData.colorCalc();  
        radarData.dataLn.datasets[idx] = new Object();
        radarData.dataLn.datasets[idx].fillColor = 'rgba('+barData.r+','+barData.g+','+barData.b+','+barData.tp+')';
        radarData.dataLn.datasets[idx].strokeColor = 'rgba('+barData.r+','+barData.g+','+barData.b+',1)';
        radarData.dataLn.datasets[idx].pointColor = 'rgba('+barData.r+','+barData.g+','+barData.b+',1)';  
        radarData.dataLn.datasets[idx].pointStrokeColor = 'rgba(0,0,0,1)';
        radarData.dataLn.datasets[idx].data = serie;
      },
      getRadarData : function()
      {
        return radarData.dataLn;  
      } 
  }
  
  this.getWidthGraph = function()
  {
    return width;    
  }
  
  this.getHeightGraph = function()
  {
    return height;    
  }
  
  this.getPanelGraph = function()
  {
    var pg = document.createElement('div');
    pg.appendChild(cb.getPanelCanvas());
    pg.appendChild(panelLgd);
    return pg;   
  }
  
  this.convertChartToImg = function(typeImg,w,h)
  {
    return cb.convertToImg(typeImg, w, h); 
  }
  
  this.showLegend = function(x,y,title,bgColor)
  {
  	if(typeof title!='string')
  	  title='Leyenda';
  	if(typeof bgColor!='string')
  	  bgColor = bgColorLegend
  	else
  	  bgColorLegend = bgColor;
    isShowLegend = true;   
    hLdy = barData.colors.length*20+80;
    lgd.setDimension(wLdy,barData.colors.length*20+80);
    if(x && y)
    {
      this.setPositionLegend(x,y);  
    }  
    ctxLgd.beginPath();  
    ctxLgd.fillStyle = bgColorLegend;
    ctxLgd.fillRect(0,0,wLdy,hLdy); 
    ctxLgd.closePath();
    
    ctxLgd.beginPath();
    ctxLgd.fillStyle = 'black';
    ctxLgd.textAlign ='center'; 
    ctxLgd.font = 'bold 9pt helvetica'; 
    ctxLgd.fillText(title, wLdy/2, 20);
    ctxLgd.closePath();
    for(var i=0; i<barData.colors.length; i++)
    {
       y = 25*i + 40; 
       ctxLgd.beginPath(); 
       ctxLgd.textAlign ='left'; 
       ctxLgd.fillStyle = 'rgba('+barData.colors[i].r+','+
       barData.colors[i].g+','+
       barData.colors[i].b+','+
       barData.colors[i].t+')';       
       ctxLgd.fillRect(10,y,25,15); 
       ctxLgd.font = '10pt helvetica'; 
       ctxLgd.fillText(dataLgd[i], 40, y + 12);
       ctxLgd.closePath();
       if(typeGraph==1||typeGraph==5||typeGraph==4)
       {
         ctxLgd.beginPath();
         ctxLgd.textAlign ='right'; 
         ctxLgd.fillText(valorLgd[i], wLdy-10, y + 12);
         ctxLgd.closePath();
       }
    }
  }    
  
  this.showCustomLegend = function(x,y,bgColorLgd,colorFont, fontSize, title)
  {
    isShowLegend = true;   
    hLdy = dataLgd.length*20+80;
    lgd.setDimension(wLdy,dataLgd.length*20+80);
    if(x && y)
    {
      this.setPositionLegend(x,y);  
    }  
    ctxLgd.beginPath();  
    bgColorLegend = bgColorLgd;
    ctxLgd.fillStyle = bgColorLegend;
    ctxLgd.fillRect(0,0,wLdy,hLdy); 
    ctxLgd.closePath();
    
    ctxLgd.beginPath();
    ctxLgd.fillStyle = 'black';
    ctxLgd.textAlign ='center'; 
    ctxLgd.font = 'bold '+fontSize+'pt helvetica'; 
    ctxLgd.fillText(title, wLdy/2, 20);
    ctxLgd.closePath();
    for(var i=0; i<dataLgd.length; i++)
    {
       y = 25*i + 40; 
       ctxLgd.beginPath();
       ctxLgd.fillStyle = colorFont; 
       ctxLgd.textAlign ='left'; 
       ctxLgd.fillStyle = 'rgba('+colorFont+')';       
       ctxLgd.font = fontSize+'pt helvetica'; 
       ctxLgd.fillText(dataLgd[i], 40, y + 12);
       ctxLgd.closePath();
       if(typeGraph==1||typeGraph==5||typeGraph==4)
       {
         ctxLgd.beginPath();
         ctxLgd.textAlign ='right'; 
         ctxLgd.fillText(valorLgd[i], wLdy-10, y + 12);
         ctxLgd.closePath();
       }
    }
  }  
  
  this.getMeasureText = function(text)
  {
     return ctx.measureText(text); 
  }
  
  this.getGreaterText = function(arrayText)
  {
     var m = arrayText[0];
     for(var i=0; i<arrayText.length; i++)
     {
        if(ctx.measureText(arrayText[i]) > ctx.measureText(m))
          m = arrayText[i];  
     } 
     return m;
  }
  
  this.setBgColorPanelLegend = function(bgColor)
  {
    bgColorLegend = bdColor;  
  }
  
  this.setWidthPanelLegend = function(w)
  {
    wLdy = w;  
    lgd.setDimension(w,hLdy);
  }
  
  this.setDimensionPanelLegend = function(w,h)
  {
    wLdy = w;  
    hLdy = h;
    lgd.setDimension(wLdy,hLdy);
  }
  
  this.getWidthPanelLgd = function()
  {
    return wLdy;    
  }
  
  this.getHeightPanelLgd = function()
  {
    return hLdy;  
  }
  
  this.setPositionLegend = function(x,y)
  {
    if(!isShowLegend)  
      this.showLegend();  
    panelLgd.style.left = x + 'px';
    panelLgd.style.top = y + 'px';  
  }
  
  this.getPanelLegend = function()
  {
    return panelLgd;    
  }
  
  this.setLegend = function(arrayLeyenda)
  {
    dataLgd = arrayLeyenda;
  }  
  
  this.addBarSerie = function(serie)
  {
    barData.addSerie(serie);
  }
  
  this.addLabels = function(l)
  {
    barData.addLabels(l);    
  }
  
  this.addBarStruct = function(bs)
  {
    barData.addLabels(bs.fields); 
    for(i=0; i<bs.data.length; i++)  
    {
      this.addBarSerie(bs.data[i]);    
    }    
  }
  
  this.addPieStruct = function(ps)
  { 
    valorLgd = ps.data[0];
    pieData.setSerie(ps.data[0]);
  }
  
  this.addDoughnutStruct = function(ps)
  { 
    valorLgd = ps.data[0];  
    doughnutData.setSerie(ps.data[0]);    
  }
  
  this.addPolarStruct = function(ps)
  { 
    valorLgd = ps.data[0];  
    polarData.setSerie(ps.data[0]);    
  }
  this.addLineStruct = function(ls)
  { 
    lineData.setLabels(ls.fields); 
    for(var i=0; i<ls.data.length; i++)
    {
      lineData.addData(ls.data[i]);            
    }
  }
  
  this.addRadarStruct = function(ls)
  { 
    radarData.setLabels(ls.fields); 
    for(var i=0; i<ls.data.length; i++)
    {
      radarData.addData(ls.data[i]);            
    }
  }
  this.getChartObj = function()
  {
    return ch;  
  }
  
  this.getCanvasLegend = function()
  {
    return lgd.getCanvasObj();  
  }
  
  this.draw = function(showLegend, option)
  {
    switch(typeGraph)
    {
      case 0  : {
                  ch.Bar(barData.getBarData(), option);
                  break;
                }
      case 1 :  {
                  ch.Pie(pieData.getDataPie(), option);
                  break;
                }
      case 2 :  {
                  ch.Line(lineData.getDataLine(), option);
                  break; 
                }
      case 3 :  {
                  ch.Radar(radarData.getRadarData(), option);
                  break; 
                }
      case 4 :  {
                  ch.PolarArea(polarData.getPolarData(), option);
                  break;
                }      
      case 5 :  {
                  ch.Doughnut(doughnutData.getDoughnutData(), option);
                  break;
                }    
    }  
    if(showLegend)
      this.showLegend();
  }
  
  this.getCanvasCtx = function()
  {
    return ctx;    
  }
  
  this.getCanvasBuilder = function()
  {
    return cb;  
  }
  
  this.getCanvasObject = function()
  {
    return cb.getCanvasObj();
  }
  
  this.getPanelCanvas = function()
  {
    return cb.getPanelCanvas();  
  }
  
  this.addToBody = function()
  {
    cb.addToBody();  
    lgd.addToBody();
  }
  
  this.setBgColor = function(rgbaColor)
  {
     cb.setBgColor(rgbaColor);
  }
}
