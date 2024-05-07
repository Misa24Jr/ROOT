var dialogsEstadisticaSeccion = new Object();
var pcbEstadisticaSeccionOrg = new Object();
var pcbEstadisticaSeccionPeriodo = new Object();
var imgButtonsEstadisticaSeccionReporte = new Object();
var imgButtonsEstadisticaSeccionReporteFM = new Object();
var imgButtonsEstadisticaSeccionSalir = new Object();

var RepoEstadisticaSeccion = {
    windowName: 'RepoEstadisticaSeccion',
    isCreate: false,
	
    show: function() {
        if (!this.isCreate) {   
            this.init();
            this.isCreate = true;
        }
        if (dialogsEstadisticaSeccion.isByClean()) 
          this.limpiar();
        dialogsEstadisticaSeccion.show();
    },
            
    hide: function() {
       dialogsEstadisticaSeccion.hide();
    },
        
    createMWs: function() {
        mwRepoEstadisticaSeccion = desktop.addMinWindow('C. Notas', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsEstadisticaSeccion.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsEstadisticaSeccion_init: function() {
        dialogsEstadisticaSeccion.setMinimizeXY(0, 0);
        dialogsEstadisticaSeccion.setCenterScreen();
        dialogsEstadisticaSeccion.addSpace(0,0,20);
        dialogsEstadisticaSeccion.addObject(pcbEstadisticaSeccionOrg, 20, 36);
        dialogsEstadisticaSeccion.addObject(pcbEstadisticaSeccionPeriodo, 270, 36);
        dialogsEstadisticaSeccion.addObject(imgButtonsEstadisticaSeccionReporte,55,66);
        dialogsEstadisticaSeccion.addObject(imgButtonsEstadisticaSeccionReporteFM,191,66);
        dialogsEstadisticaSeccion.addObject(imgButtonsEstadisticaSeccionSalir,328,66);
    },
    
    create: function(){
        dialogsEstadisticaSeccion = dialogs.create('dialogsEstadisticaSeccion', 0, 0, 500, 76, 'ESTADISTICAS POR SECCION');
        dialogsEstadisticaSeccion.setAdjY(60);
        pcbEstadisticaSeccionOrg = powerComboBox.create('pcbEstadisticaSeccionOrg','pcbEstadisticaSeccionOrg','Organización(+):',1,35);
    	pcbEstadisticaSeccionOrg.enableReadOnlyEditor();
    	pcbEstadisticaSeccionOrg.addEmptyOption();
    	pcbEstadisticaSeccionOrg.setValidEmpty();
    	pcbEstadisticaSeccionOrg.enableOnChangeToEmptyOption();
        pcbEstadisticaSeccionOrg.setWidthCombo(120);
    	pcbEstadisticaSeccionPeriodo = powerComboBox.create('pcbEstadisticaSeccionPeriodo','pcbEstadisticaSeccionPeriodo','Periodo(^):',1,67);
    	pcbEstadisticaSeccionPeriodo.enableReadOnlyEditor();
    	pcbEstadisticaSeccionPeriodo.addEmptyOption();
    	pcbEstadisticaSeccionPeriodo.setValidEmpty();
    	pcbEstadisticaSeccionPeriodo.enableOnChangeToEmptyOption();   
        pcbEstadisticaSeccionPeriodo.setWidthCombo(120);
      	imgButtonsEstadisticaSeccionReporte = imgButtons.create('imgButtonsEstadisticaSeccionReporte','Reporte General','print.png');
      	imgButtonsEstadisticaSeccionReporteFM = imgButtons.create('imgButtonsEstadisticaSeccionReporteFM','Reporte Edad','print.png');
      	imgButtonsEstadisticaSeccionSalir = imgButtons.create('imgButtonsEstadisticaSeccionSalir','Salir','salir.png');    		
        imgButtonsEstadisticaSeccionReporte.setDimension(120,22);
        imgButtonsEstadisticaSeccionReporteFM.setDimension(120,22);
        imgButtonsEstadisticaSeccionSalir.setDimension(120,22);
    },

    init: function(){
        this.create();
        this.setEvents();
        this.dialogsEstadisticaSeccion_init();
        this.createMWs();
    },

    setEvents: function(){
   	 	imgButtonsEstadisticaSeccionReporte.onClick(this.windowName + ".coreUpdate('gn')");
   	 	imgButtonsEstadisticaSeccionReporteFM.onClick(this.windowName + ".coreUpdate('fm')");
   	 	imgButtonsEstadisticaSeccionSalir.onClick("dialogsEstadisticaSeccion.close()");
    },

    limpiar : function(tipo) {
  		Tool.rstPwrCmb(pcbEstadisticaSeccionOrg);
  		Tool.rstPwrCmb(pcbEstadisticaSeccionPeriodo);
  		dialogsEstadisticaSeccion.setMsg("");
  		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsEstadisticaSeccion, pcbEstadisticaSeccionOrg, 0, 1, json('getData'));
		pcbEstadisticaSeccionOrg.setSelectedIndex(1);
		Tool.getPowerComboData('ReportObject', 'getPeriodoEstadisticaSeccion', dialogsEstadisticaSeccion, pcbEstadisticaSeccionPeriodo, 0, 1);
	},

	reporte: function() {   	
   	    var dm = function() {	
   	    var escuela = new Array();
   	    var totGrados = 0;
   	    var totSecciones =0;
   	    
   		var escuelaExist = function(id) {
   			for(var i=0; i<escuela.length; i++) {
   				if(escuela[i].id_escuela==id)
   					return true;
   			}
   			return false;
   		};
   		var getEscuela = function(id_esc) {
   			for(var i=0; i<escuela.length; i++)
   				if(escuela[i].id_escuela==id_esc)
   					return escuela[i];
   			return null;			
   		};
   		
   		var gradoExist = function(objEsc, id_grado){
   		  for(var i=0; i<objEsc.grado.length; i++)
   		    if(objEsc.grado[i].id_grado == id_grado)
   		       return true;
   		  return false;  	
   		};
   		
   		var getGrado = function(objEsc, id_grado){
   		  for(var i=0; i<objEsc.grado.length; i++) {
   		    if(objEsc.grado[i].id_grado == id_grado)
   		       return objEsc.grado[i];
   		  }
   		  return null;  	
   		};
   		
   		var seccionExist = function(objGrado, secc){
   		  for(var i=0; i<objGrado.secciones.length; i++) {
   		    if(objGrado.secciones[i].seccion==secc)
   		      return true;
   		  }
   		  return false;
   		};
   		
   		var getSeccion = function(objGrado, secc){
   		  for(var i=0; i<objGrado.secciones.length; i++)
   		    if(objGrado.secciones[i].seccion==secc)
   		      return objGrado.secciones[i];
   		  return null;
   		};
   		
   		var getTotal = function(objSecc, sex){
   		  for(var i=0; i<objSecc.sex.length; i++)
   		    if(objSecc.total[i].sex==sex)
   		      return objSecc.total[i];
   		  return null;
   		};
   		
   		var totalExist = function(objSecc, sex){
   		  for(var i=0; i<objSecc.sex.length; i++)
   		    if(objSecc.total[i].sex==sex)
   		      return true;
   		  return false;
   		};
   		
   		var add = function(esc, secc, grado, total, edad, sex, nac, sis){
   		  var lg = escuela.length;	
   		  escuela[lg]=new Object();
   		  escuela[lg].id_escuela = esc;
   		  escuela[lg].sis = sis;
   	   	  escuela[lg].grado = new Array();
   		  escuela[lg].grado[0] = new Object();
   	      escuela[lg].grado[0].id_grado=grado;
   		  escuela[lg].grado[0].secciones = new Array();
   		  escuela[lg].grado[0].secciones[0]=new Object();
   		  escuela[lg].grado[0].secciones[0].seccion =secc;
   		  escuela[lg].grado[0].secciones[0].total=new Array();
   		  escuela[lg].grado[0].secciones[0].totalSeccion = parseInt(total,10);
   		  escuela[lg].grado[0].secciones[0].total[0] = new Object();
   		  escuela[lg].grado[0].secciones[0].total[0].total = parseInt(total,10);
   		  escuela[lg].grado[0].secciones[0].total[0].edad=parseInt(edad,10);
   		  escuela[lg].grado[0].secciones[0].total[0].sex=sex;
   		  escuela[lg].grado[0].secciones[0].total[0].nac=nac;
   		};
   		
   		addGrado = function(objEsc, secc, grado, total, edad, sex, nac){
   		  var t = objEsc.grado.length;
   		  objEsc.grado[t] = new Object();
   		  objEsc.grado[t].id_grado=grado;
   		  objEsc.grado[t].secciones = new Array();
   		  objEsc.grado[t].secciones[0]=new Object();
   		  objEsc.grado[t].secciones[0].seccion =secc;
   		  objEsc.grado[t].secciones[0].total = new Array();
   		  objEsc.grado[t].secciones[0].totalSeccion=parseInt(total, 10);
   		  objEsc.grado[t].secciones[0].total[0] = new Object();
   		  objEsc.grado[t].secciones[0].total[0].total=parseInt(total, 10);
   		  objEsc.grado[t].secciones[0].total[0].edad=parseInt(edad, 10);
   		  objEsc.grado[t].secciones[0].total[0].sex=sex;
   		  objEsc.grado[t].secciones[0].total[0].nac=nac;
   		  totGrados++;
   		};		
   		
   		addSeccion = function(secc, objGrado, total, edad, sex, nac){
   	      var t = objGrado.secciones.length;
   	      //objGrado.secciones = new Array();
   	      objGrado.secciones[t]=new Object();
   	      objGrado.secciones[t].seccion = secc;
   	      objGrado.secciones[t].total = new Array();
   		  objGrado.secciones[t].totalSeccion=parseInt(total, 10); 
   		  objGrado.secciones[t].total[0]= new Object();
   		  objGrado.secciones[t].total[0].total=parseInt(total,10);
   		  objGrado.secciones[t].total[0].edad=parseInt(edad,10);
   		  objGrado.secciones[t].total[0].sex=sex;
   		  objGrado.secciones[t].total[0].nac=nac; 
   		  totSecciones++;
   	    };	
   	    
   	    addTotal = function(objSecc, total, edad, sex, nac){
   	      var t = objSecc.total.length;
   	      objSecc.totalSeccion+=parseInt(total, 10);
   	      objSecc.total[t] = new Object();
   		  objSecc.total[t].total=parseInt(total,10);
   		  objSecc.total[t].edad=parseInt(edad,10);
   		  objSecc.total[t].sex=sex;
   		  objSecc.total[t].nac=nac;
   	    };	
   		
   		var addRecord  = function(esc, secc, grado, total, edad, sex, nac, sis){
   			if(escuela.length == 0){	
   			   add(esc, secc, grado, total, edad, sex, nac, sis);
   			}
   			else{	
      		  if(escuelaExist(esc)) {
      		  	var e = getEscuela(esc);
      		  	if(gradoExist(e, grado)) {
      		  	  var g = getGrado(e, grado);
      		  	  if(seccionExist(g, secc)) {
      		  	  	var s = getSeccion(g, secc);
      		  	    addTotal(s, total, edad, sex, nac);
      		  	  }
      		  	  else {
      		  	    addSeccion(secc, g, total, edad, sex, nac);
      		  	  }
      		  	}
      		  	else {
      		  	  addGrado(e, secc, grado, total, edad, sex, nac);
      		  	}
      		  }
   			  else {
   			  	add(esc, secc, grado, total, edad, sex, nac, sis);
   			  }	   			 		     			  	
   			};
   		 };
   	     this.addJson = function(j){
   	      	for(var f=0; f<j.data[0].length; f++)
   	     	  addRecord(j.data[0][f],j.data[1][f],j.data[2][f],j.data[3][f],j.data[4][f],j.data[5][f],j.data[6][f],j.data[7][f]);
   	     };
   	     this.getTotalSistemas = function(){ 
   	     	return escuela.length;
   	     };
   	     this.getTotalGrados = function(){ 
   	     	return totGrados;
   	     };
   	     this.getTotalSecciones = function(){ 
   	     	return totSecciones;
   	     };
   	     this.getObjSystem = function(pos){ 
   	     	return escuela[pos];
   	     };
   	     
   	     this.getTotalEdad = function(idxEsc, idxGrado, idxSeccion, edad){
   	     	var totalEdad =0;
   	        for(var m = 0; m<d.getObjSystem(idxEsc).grado[idxGrado].secciones[idxSeccion].total.length; m++) { 
   	          if(d.getObjSystem(idxEsc).grado[idxGrado].secciones[idxSeccion].total[m].edad == edad)	
   	           totalEdad += d.getObjSystem(idxEsc).grado[idxGrado].secciones[idxSeccion].total[m].total;
   	        };
   	        return totalEdad;
   	     };
   	     
   	     this.getTotalSex = function(idxEsc, idxGrado, idxSeccion, sex){
   	     	var totalSex =0;
   	        for(var m = 0; m<d.getObjSystem(idxEsc).grado[idxGrado].secciones[idxSeccion].total.length; m++) { 
   	          if(d.getObjSystem(idxEsc).grado[idxGrado].secciones[idxSeccion].total[m].sex.charAt(0).toUpperCase() == sex.toUpperCase())	
   	           totalSex += d.getObjSystem(idxEsc).grado[idxGrado].secciones[idxSeccion].total[m].total;
   	        };
   	        return totalSex;
   	     };
   	     
   	     this.getTotalNac = function(idxEsc, idxGrado, idxSeccion){
   	     	var nac='V';
   	     	var totalNac = 0;
   	     	var totalExt = 0;
   	        for(var m = 0; m<d.getObjSystem(idxEsc).grado[idxGrado].secciones[idxSeccion].total.length; m++) { 
   	          if(d.getObjSystem(idxEsc).grado[idxGrado].secciones[idxSeccion].total[m].nac.charAt(0).toUpperCase() == nac)	
   	            totalNac += d.getObjSystem(idxEsc).grado[idxGrado].secciones[idxSeccion].total[m].total;
   	          else
   	            totalExt += d.getObjSystem(idxEsc).grado[idxGrado].secciones[idxSeccion].total[m].total;
   	        };
   	        return {v:totalNac, e:totalExt};
   	     };
   	     
   	  };
 
   	  var d = new dm();
   	  d.addJson(json('getEstadisticaSeccion'));
   	  var totales = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
   	  var totGen  = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
   	  rep = new Report('landscape');
      rep.setPositionIcon(1100,108);
      //rep.setHeadImage(imgEduca.banner,false);
      rep.setNoRepeatHead();
	  //////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
	  rep.setFontProperties(rep.getRGBAObj(0,0,0,1),12,'helvetica','normal');
	  rep.addBar(20,104,1090,160,rep.getRGBAObj(210,200,200,1),false);
      rep.addHeadTitle('ESTADISTICAS POR SECCIONES',false);
	  rep.setFontProperties(rep.getRGBAObj(50,35,35,0.9),10,'helvetica','normal');
	  rep.addText(25, 150,'Periodo: '+pcbEstadisticaSeccionPeriodo.getValue()+'    Fecha: '+Tool.getTimestamp(),false);
	  //************************************* TABLA DE DATOS ***************************************
	  var rgb = rep.getRGBAObj(0,0,0,1);
	  rep.setFontProperties(rgb,10,'helvetica','normal');	  
	  var cy = rep.getNewY(10);	 
	  //************************************************** GENERACION DE TABLAS POR GRADO **************************************************** 
      for(var ts=0; ts<d.getTotalSistemas(); ts++) {
        //rep.addText(1, cy,'------------------------------------------------',false);
        for(var gr=0; gr<d.getObjSystem(ts).grado.length; gr++) {
	      var totalSec = d.getObjSystem(ts).grado[gr].secciones.length;
	      if(cy + 40 + (totalSec+1)*20 > (rep.getPageSize())) {
	    	rep.addPage();
	    	cy = 20;//margen superior de página    		
	      }
	      rep.setFontProperties(rgb,10,'helvetica','normal');
	      rep.addRectangle(20,cy,1090,cy+20,rgb,false);
	      rep.addText(25, cy+15,'Sub-Sistema: '+d.getObjSystem(ts).sis,false);
	      rep.addText(500, cy+15,'Grado o Año: '+d.getObjSystem(ts).grado[gr].id_grado,false);
	  	  rep.addSimpleTable(20,cy+20,rgb,160,totalSec+1,20,false);
	  	  rep.setFontProperties(rgb,10,'helvetica','bold');
	  	  rep.addText(60, cy+33,'SECCION',false);
	  	  for(var i=0; i<24; i++) {
	    	rep.addSimpleTable(180+i*36,cy+20,rgb,37,totalSec+1,20,false);
	    	if(i===0)
	      	  rep.addText(184+i*36, cy+33,'<3',false);
	    	else
	      	  if(i<19)
	        	rep.addText(184+i*36, cy+33,i+2+'',false);
	    	switch(i){
	      	  case 19 : { rep.addText(184+i*36, cy+33, '>20', false); break;}
	      	  case 20 : { rep.addText(184+i*36, cy+33, ' F',  false); break;}
	      	  case 21 : { rep.addText(184+i*36, cy+33, ' M',  false); break;}
	      	  case 22 : { rep.addText(184+i*36, cy+33, ' V',  false); break;}
	      	  case 23 : { rep.addText(184+i*36, cy+33, ' E',  false); break;}
	    	}    	    		    
	  	  }
		  //secciones
	      for(var sx=0; sx<d.getObjSystem(ts).grado[gr].secciones.length; sx++) {
	      	rep.addText(30, cy+55 + 19*sx, d.getObjSystem(ts).grado[gr].secciones[sx].seccion ,false);
	        for(var i=0; i<20; i++){	
	          var tEdad = d.getTotalEdad(ts,gr,sx,i+2);
	          if(tEdad > 0)
	            rep.addText(184+i*36, cy+55 + 19*sx, tEdad+'',false);
	          totales[i]+=tEdad;
	        }
	        var tSexF = d.getTotalSex(ts,gr,sx,'F');
	        var tSexM = d.getTotalSex(ts,gr,sx,'M');
	        var tVen = d.getTotalNac(ts,gr,sx).v;
	        var tExt = d.getTotalNac(ts,gr,sx).e;
	        var tSecc = d.getObjSystem(ts).grado[gr].secciones[sx].totalSeccion;
	        rep.addText(904, cy+55 + 19*sx, tSexF+'',false);
	        rep.addText(940, cy+55 + 19*sx, tSexM+'',false);
	        rep.addText(976, cy+55 + 19*sx, tVen+'',false);
	        rep.addText(1012, cy+55 + 19*sx, tExt+'',false);
	        rep.addText(1048, cy+55 + 19*sx, tSecc+'',false);
	        totales[20]+=tSexF;
	        totales[21]+=tSexM;
	        totales[22]+=tVen;
	        totales[23]+=tExt;
	        totales[24]+=tSecc;
	        //getTotalNac
	      }
	  	  rep.addSimpleTable(180+24*36,cy+20,rgb,45,totalSec+1,20,false);
	  	  rep.addText(182+24*36, cy+33,'TOTAL',false);
	  	  cy = rep.getNewY(24*totalSec);  
	  	}//fin for por grados
	  	//TOTALES POR SISTEMA EDUCATIVO (BASICA - BACHILLERATO)
	  	rep.addSimpleTable(20,cy+20,rgb,160,1,20,false);
	    rep.setFontProperties(rgb,10,'helvetica','bold');	   
	    rep.addText(60, cy+36,'TOTALES',false);
	    for(var i=0; i<24; i++) {
	      rep.addSimpleTable(180+i*36,cy+20,rgb,37,1,20,false);
	      if(totales[i]>0)
	        rep.addText(184+i*36, cy+35, totales[i]+'',false);
	    }
	    rep.addSimpleTable(180+24*36,cy+20,rgb,45,1,20,false);
	    if(totales[24] > 0)
	      rep.addText(184+24*36, cy+35, totales[24]+'',false);
	    cy = rep.getNewY(49);
        for(var i=0; i<25; i++){
	      totGen[i]+=totales[i];
	      totales[i]=0;
	    }
	  }//fin for total sistemas
      
	  //TOTALES GENERALES (POR LA INSTITUCION)
	  cy = rep.getNewY(49); 
	  if(cy + 20 >= rep.getPageSize()){
	    rep.addPage();
	    cy=20;
	  }
      
	  rep.addSimpleTable(20,cy+20,rgb,160,1,20,false);
	  rep.setFontProperties(rgb,10,'helvetica','bold');	   
	  rep.addText(30, cy+36,'TOTAL GENERAL',false);
	  for(var i=0; i<24; i++) {
	    rep.addSimpleTable(180+i*36,cy+20,rgb,37,1,20,false);
	    if(totGen[i]>0)
	      rep.addText(184+i*36, cy+35, totGen[i]+'',false);
	  }
	  rep.addSimpleTable(180+24*36,cy+20,rgb,45,1,20,false);
	  if(totGen[24] > 0)
	    rep.addText(184+24*36, cy+35, totGen[24]+'',false);
      
	  //****************************************************************************************************************************************
	  rep.render();
	  Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
      Reporte.create();
      dialogsReporte.showModal();
   },
   
	reporteFM: function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape',1420);
        rep.setPositionIcon(1056,15);
        rep.setNoRepeatHead();
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','normal');
        rep.addBar(0,0,1397,48,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 20, 'ORGANIZACION: '+pcbEstadisticaSeccionOrg.getOption(),false);
		rep.addText(260, 20, 'PERIODO: '+pcbEstadisticaSeccionPeriodo.getOption(),false);
		rep.addText(20, 40, 'LEYENDA: Femenino = F  Masculino = M',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14,'helvetica','normal');
		rep.addText(488, 40, 'ESTADISTICA POR EDAD',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 8, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTotalRowTable(41);
		rep.setHeightRow(18);
		rep.setTableCellProperties(1, 'helvetica', 10);
		rep.addTable('TablaRepoCanAluInscritos',['CARRERA','POSICION','SECCION','<3F','<3M','3F','3M','4F','4M','5F','5M','6F','6M','7F','7M','8F','8M','9F','9M','10F','10M','11F','11M','12F','12M','13F','13M','14F','14M','15F','15M','16F','16M','17F','17M','18F','18M','19F','19M','20F','20M','>21F','>21M'],695,50);
        rep.setSizeColumnArray([130,78,65,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,33,33]);
        rep.setAlignData(['left','left','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center']); 
        rep.addJsonData('TablaRepoCanAluInscritos','getEstadisticaSeccionFM',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42]);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},

	coreUpdate: function(tipo) {
		var rlx = xmlStructs.createRecordList("rlx");        
        
		if (pcbEstadisticaSeccionOrg.valid(dialogsEstadisticaSeccion))
			if (pcbEstadisticaSeccionPeriodo.valid(dialogsEstadisticaSeccion)){
				rlx.add('reg', pcbEstadisticaSeccionPeriodo);
        		rlx.add('reg', pcbEstadisticaSeccionOrg);
        		rlx.addStr('reg', tipo);
        		Tool.cnnSrv('ReportObject', 'getEstadisticaSeccion', (tipo == 'gn')? this.windowName + '.reporte()' : this.windowName + '.reporteFM()', rlx);
        	}
	}
};