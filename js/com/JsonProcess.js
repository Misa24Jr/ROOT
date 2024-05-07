function JsonProcess(jExt, posID, addItemCol, ReportObject) {
  var X = 0;
  var Y = 120;
  var width = 792;
  var heightCell = 20;
  var r = ReportObject;
  var totalRow = 1;
  var cw = new Array();
  var red = 0;
  var green = 0;
  var blue = 0;
  var sizeHead = 10;
  var familyHead = 'helvetica'; 
  var styleHead = 'bold';
  var sizeCell = 10;
  var familyCell = 'helvetica'; 
  var styleCell = 'normal';
  var actY = 1;
  var actRow = 0;
  var jd = {
  	    type : 'E',
  	    offSetPage : jExt.offSetPage,
  	    pageSize : jExt.pageSize,
  	    itemPage : jExt.itemPage,
  	    fields : new Array,
  	    data : [[]],
  	    group : [],
  	    hideCol : []
      };
  
  var completeDigit = function(pos,val){
  	if(parseInt(val,10) < 10)
  	  jd.data[0][pos] = "0"+val;
  	else
  	  jd.data[0][pos] = ""+val;
  };
  	
  if(addItemCol){
  	jd.fields[0]='Nro';
  	for(var f=0; f<jExt.data[0].length; f++){
  	  jd.group[f]=1;
  	  completeDigit(f,f+1);	
  	}
  	for(var c=0; c<jExt.data.length; c++){	
  	  jd.data[c+1] = new Array();	
  	  for(var f=0; f<jExt.data[c].length; f++){ 	
  	    jd.data[c+1][f] = jExt.data[c][f];
  	  }
  	}
  }
  else
    for(var c=0; c<jExt.data.length; c++){	
      jd.data[c+1] = new Array();	
  	  for(var f=0; f<jExt.data[c].length; f++){
  	    jd.data[c][f] = jExt.data[c][f];
  	    jd.group[f]=1;
  	  }  
  	}
  
  for(var i=0; i<jExt.fields.length; i++){
  	jd.fields[jd.fields.length] = jExt.fields[i];
  }
  
  for(var i=0; i<jd.fields.length; i++){
  	jd.hideCol[i] = true;
  }
  
  this.setHideCol = function(arrHide){
  	jd.hideCol = arrHide;
  };
  
  this.setRGB = function(r,g,b){
  	red = r;
  	green = g;
  	blue = b;
  };
  
  this.setFontHead = function(sizeh, familyh, styleh){
    sizeHead = sizeh;
    familyHead = familyh;
    styleHead = styleh;	
  };
  
  this.setFontCell = function(sizeC, familyC, styleC){
    sizeCell = sizeC;
    familyCell = familyC;
    styleCell = styleC;	
  };
  
  this.setColWidths = function(colW){
  	for(var i = 0; i<colW.length; i++)
  	  cw[i] = colW[i];
  };
  
  this.setTotalRow = function(tr){
  	totalRow = tr;
  };
  
  this.setDimension = function(w,hc){
    width = w;
    heightCell = hc;	
  };
  
  this.setInitCoord = function(x,y){
  	X=x;
  	Y=y;
  };
  
  var createHead = function(){
  	r.setFontProperties(r.getRGBAObj(red,green,blue,1), sizeHead, familyHead, styleHead);
  	r.addAbsTable(X,Y,cw, totalRow, heightCell, false);  
  	var yPos =  Y + heightCell/2 + sizeHead/2;
  	var xPos = X;
  	for(var i=0; i<cw.length; i++){
  	  var txt = document.createElement("textNode");
  	  txt.innerHTML = jd.fields[i];
  	  txt.style.fontSize = sizeHead+'px';
  	  txt.style.fontFamily = familyHead;
  	  txt.style.fontStyle = styleHead;
  	  xp = xPos + cw[i]/2 - 1.3*r.measureText(txt.innerHTML)/2 ;
  	  r.addText(xp, yPos, jd.fields[i], false);
  	  xPos += cw[i];
  	};
  };
  
  var setData = function(){
  	actRow++;
  	for(var w=0; w<jd.group[actRow-1]; w++){
  	  var yPos =  Y + (1+actY*2)*heightCell/2 + sizeHead/2;
  	  xPos = X + 2;	
  	  for(var i=0; i<cw.length; i++){
  	    var txt = document.createElement("textNode");
  	    txt.innerHTML = jd.data[i][actRow-1];
  	    txt.style.fontSize = sizeHead+'px';
  	    txt.style.fontFamily = familyHead;
  	    txt.style.fontStyle = styleHead;
  	    if(!jd.hideCol[i] ||  w==0)
  	      r.addText(xPos, yPos, jd.data[i][actRow-1 + w], false);
  	    xPos += cw[i];
  	  };
  	  actY++;
  	};
  };
  
  var addRow = function(){
  	var nRows = jd.group[actRow];
  	r.setFontProperties(r.getRGBAObj(red,green,blue,1), sizeCell, familyCell, styleCell);
  	r.addAbsTable(X, Y+(actY*heightCell), cw, 1, (heightCell*nRows), false);  	
  	setData();  
  };
  
  var groupingCalc = function(){
  	var num=0;
  	for(var i=0; i<jExt.data[posID].length; i++){
  	  num++;	
  	  for(var f=1; f<jExt.data[posID].length; f++){
  	    if(jd.data[posID][i]==jd.data[posID][f] && jd.group[i]!=0 && i!=f){
  	      jd.group[i]++;
  	  	  jd.group[f]=0;
  	    } 
  	  }
  	  if(addItemCol){  
  	  	if(jd.group[i]==0)
  	  	  num--;
  	    completeDigit(i, num);
  	  }
    }
  	completeDigit(jExt.data[posID].length - 1, num);
  };
    
  this.create = function(){
  	createHead();
  	groupingCalc();
  	for(var i=1; i<=jd.data[0].length; i++)
  	  addRow();
  };
};
