var dialogsRepoLisMensualidades = new Object();
var pcbRepoLisMenOrg = new Object();
var pcbRepoLisMenSuborg = new Object();
var pcbRepoLisMenCarrera = new Object();
var pcbRepoLisMenPeriodo = new Object();
var pcbRepoLisMensualidad = new Object();
var calendarRepoLisMenDesde = new Object();
var calendarRepoLisMenHasta = new Object();
var imgButtonsRepoLisMenReporte = new Object();
var imgButtonsRepoLisMenSalir = new Object();
var mw_RepoLisMensualidades = new Object();//minWindow
var rl = new Object();

var RepoLisMensualidades = {
    windowName: 'RepoLisMensualidades',
    isCreate: false,
    
    show : function() {  
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
			this.limpiar('lmp');			
		dialogsRepoLisMensualidades.show();
	},
	
	hide : function() {
		dialogsRepoLisMensualidades.hide();
	},
	
    createMWs: function() {
        mwRepoLisMensualidades = desktop.addMinWindow('L. Repres.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoLisMensualidades.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRepoLisMensualidades_Init : function() {
        dialogsRepoLisMensualidades.setMinimizeXY(0,0);
        dialogsRepoLisMensualidades.setCenterScreen();
        dialogsRepoLisMensualidades.addSpace(0,0,20);
        dialogsRepoLisMensualidades.addLn(1,1,1);
		dialogsRepoLisMensualidades.setHeightCell(1,1,10);
        dialogsRepoLisMensualidades.addObjToDialog(pcbRepoLisMenOrg,2,1,24);
        dialogsRepoLisMensualidades.addObjToDialog(pcbRepoLisMenSuborg,2,1,24);
        dialogsRepoLisMensualidades.addObjToDialog(pcbRepoLisMenCarrera,2,1,24);
        dialogsRepoLisMensualidades.adjAllMarginObj(2,1,5);
        dialogsRepoLisMensualidades.addObjToDialog(pcbRepoLisMenPeriodo,3,1,24);
        dialogsRepoLisMensualidades.addObjToDialog(pcbRepoLisMensualidad,3,1,24);
        dialogsRepoLisMensualidades.adjAllMarginObj(3,1,5);   
		dialogsRepoLisMensualidades.addObjToDialog(calendarRepoLisMenDesde.getEditCalendar(),4,1,24);
		dialogsRepoLisMensualidades.addObjToDialog(calendarRepoLisMenHasta.getEditCalendar(),4,1,24);
        dialogsRepoLisMensualidades.adjAllMarginObj(4,1,5);
        dialogsRepoLisMensualidades.addLn(4,1,1);
		dialogsRepoLisMensualidades.setHeightCell(4,1,24);
        dialogsRepoLisMensualidades.addObjToDialog(imgButtonsRepoLisMenReporte,6,1);
        dialogsRepoLisMensualidades.addObjToDialog(imgButtonsRepoLisMenSalir,6,1);
        dialogsRepoLisMensualidades.addLn(5,1,1);
		dialogsRepoLisMensualidades.setHeightCell(5,1,9);
        dialogsRepoLisMensualidades.adjAllMarginObj(6,1,30);
        dialogsRepoLisMensualidades.leftMarginObj(6,1,0,282);  
    },

    create : function() {
    	dialogsRepoLisMensualidades = dialogs.create('dialogsRepoLisMensualidades',0,0,819,125,'RELACIÓN DE MENSUALIDADES');
    	dialogsRepoLisMensualidades.setAdjY(70);
    	pcbRepoLisMenOrg = powerComboBox.create('pcbRepoLisMenOrg','pcbRepoLisMenOrg','Organización :',1,103);
    	pcbRepoLisMenOrg.enableReadOnlyEditor();
    	pcbRepoLisMenOrg.addEmptyOption();
    	pcbRepoLisMenOrg.setValidEmpty();
    	pcbRepoLisMenSuborg = powerComboBox.create('pcbRepoLisMenSuborg','pcbRepoLisMenSuborg','Suborganización :',1,123);
    	pcbRepoLisMenSuborg.enableReadOnlyEditor();
    	pcbRepoLisMenSuborg.addEmptyOption();
    	pcbRepoLisMenSuborg.setValidEmpty();
    	pcbRepoLisMenCarrera = powerComboBox.create('pcbRepoLisMenCarrera','pcbRepoLisMenCarrera','Carrera :',1,65);
    	pcbRepoLisMenCarrera.enableReadOnlyEditor();
    	pcbRepoLisMenCarrera.addEmptyOption();
    	pcbRepoLisMenCarrera.setValidEmpty();
    	pcbRepoLisMenCarrera.setFieldFind(true);
    	pcbRepoLisMenCarrera.setWidthCombo(158);
    	pcbRepoLisMenPeriodo = powerComboBox.create('pcbRepoLisMenPeriodo','pcbRepoLisMenPeriodo','Periodo :',1,103);
    	pcbRepoLisMenPeriodo.enableReadOnlyEditor();
    	pcbRepoLisMenPeriodo.addEmptyOption();
    	pcbRepoLisMenPeriodo.setValidEmpty();
    	pcbRepoLisMensualidad = powerComboBox.create('pcbRepoLisMensualidad','pcbRepoLisMensualidad','Mensualidad :',1,123);
    	pcbRepoLisMensualidad.enableReadOnlyEditor();
    	pcbRepoLisMensualidad.addEmptyOption();
    	pcbRepoLisMensualidad.setValidEmpty();
    	pcbRepoLisMensualidad.setDataType("string");
    	pcbRepoLisMensualidad.setWidthCombo(378);
    	pcbRepoLisMensualidad.setTypeObjOpt('input', 'checkbox');
    	pcbRepoLisMensualidad.setFirstRowCheckMode(2);	
    	calendarRepoLisMenDesde = calendars.create('calendarRepoLisMenDesde');      
    	calendarRepoLisMenDesde.setCaption('Fecha Desde :',1,103);
      	calendarRepoLisMenDesde.setValidEmpty();
		calendarRepoLisMenDesde.setWidthEditCalendar(127);
    	calendarRepoLisMenDesde.sendToFrom(100);
    	calendarRepoLisMenDesde.setFieldFind(true);
      	calendarRepoLisMenHasta = calendars.create('calendarRepoLisMenHasta');      
    	calendarRepoLisMenHasta.setCaption('Fecha Hasta :',1,123);
      	calendarRepoLisMenHasta.setValidEmpty();
		calendarRepoLisMenHasta.setWidthEditCalendar(127);
    	calendarRepoLisMenHasta.sendToFrom(100);
    	calendarRepoLisMenHasta.setFieldFind(true);
    	calendarRepoLisMenDesde.setValidGreaterThan(calendarRepoLisMenHasta);
    	imgButtonsRepoLisMenReporte = imgButtons.create('imgButtonsRepoLisMenReporte','Reporte','print.png');
    	imgButtonsRepoLisMenSalir = imgButtons.create('imgButtonsRepoLisMenSalir','Salir','salir.png');
    	imgButtonsRepoLisMenReporte.setDimension(90,22);
    	imgButtonsRepoLisMenSalir.setDimension(90,22);
  	},

  	init : function() {
  		this.create();
  		this.setEvents();
  		this.dialogsRepoLisMensualidades_Init();
  		this.createMWs();
  	},
  
  	limpiar : function(tipo) {
  		pcbRepoLisMenOrg.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbRepoLisMenSuborg);
  		Tool.rstPwrCmb(pcbRepoLisMenCarrera);
  		Tool.rstPwrCmb(pcbRepoLisMenPeriodo);
  		dialogsRepoLisMensualidades.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoLisMensualidades, pcbRepoLisMenOrg, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoLisMensualidades, pcbRepoLisMenOrg, pcbRepoLisMenSuborg, pcbRepoLisMenCarrera, this.windowName + ".resetElements('init')");
	},
    
    loadDataMensualidadInit: function() {
		Tool.loadPowerComboData(dialogsRepoLisMensualidades, pcbRepoLisMenPeriodo, 0, 1, json('getPeriodoXNivelAcad'));
		pcbRepoLisMenCarrera.setSelectedIndex(0);
		pcbRepoLisMenPeriodo.setSelectedIndex(1);
		Tool.getPowerComboData('ReportObject', 'getConceptoFinanciado', dialogsRepoLisMensualidades, pcbRepoLisMensualidad, 0, 1);
    },
	
	setEvents: function(){
		pcbRepoLisMenOrg.onChange(this.windowName + ".resetElements('org')");
		pcbRepoLisMenSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbRepoLisMenPeriodo.onChange(this.windowName + ".resetElements('per')");
    	imgButtonsRepoLisMenReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsRepoLisMenSalir.onClick('dialogsRepoLisMensualidades.close()');
    },
    
    resetElements : function(element) {
        var rlx = xmlStructs.createRecordList("rlx");

        if (element == 'org') {
			pcbRepoLisMenSuborg.clear();
	  		pcbRepoLisMenCarrera.clear();
	  		pcbRepoLisMenPeriodo.clear();
	    	if (pcbRepoLisMenOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoLisMensualidades, pcbRepoLisMenSuborg, 1, 2, pcbRepoLisMenOrg);
		}
		else if (element == 'suborg') {
	  		pcbRepoLisMenCarrera.clear();
	  		pcbRepoLisMenPeriodo.clear();
	    	if (pcbRepoLisMenSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoLisMensualidades, pcbRepoLisMenCarrera, -1, 3, pcbRepoLisMenSuborg);
		}
		else if (element == 'init') {
	  		pcbRepoLisMenPeriodo.clear();
	    	if (pcbRepoLisMenCarrera.getOption() != "") {
				rlx.add('reg', pcbRepoLisMenCarrera.setModeReturnGetText(5));
				Tool.cnnSrv('MantObject', 'getPeriodoXNivelAcad', this.windowName + '.loadDataMensualidadInit()', rlx);
	    	}
		}
	},
	
    loadDataMensualidad: function() {
		Tool.loadPowerComboData(dialogsRepoLisMensualidades, pcbRepoLisMenPeriodo, 0, 1, json('getPeriodoXNivelAcad'));
		pcbRepoLisMenPeriodo.setSelectedIndex(1);
		Tool.getPowerComboData('ReportObject', 'getConceptoFinanciado', dialogsRepoLisMensualidades, pcbRepoLisMensualidad, 0, 1);
    },
    
	reporte : function() {
		//*************************************** DATA CABECERA ***************************************
		var je = json('getEncabezado');
		var institucion = je.data[0][0].toUpperCase();
		var telefono =je.data[3][0].toUpperCase();
		var codAvec = (je.data[1][0].toUpperCase()=='NULL')? '' : je.data[1][0].toUpperCase();
		var ciudad = je.data[4][0].toUpperCase();
		var direccion = je.data[2][0].toUpperCase();
		var entFederal = je.data[5][0].toUpperCase(); 
		var director = je.data[6][0];
		var ciDirector = je.data[7][0];
		var fecha = Tool.getDate();
		//****************************************** DATA TABLA ***************************************
		var jt = json('getRelacionMensualidad');
		var levelAcad = jt.data[2];
		var grados = jt.data[3];
		var totalAlumnos = jt.data[4];		  
		var promedios = jt.data[5];
		var nCuotas =12;
		//*******************************************************************************
		var rep = new Report('landscape');
		var t1 = 0;
		var t2 = 0;
		var t3 = 0;		  	
		var nivelAcad = new Array();
		var totNivel = new Array();
		//***************************************** DATA VARIABLE *****************************************
		function setNivelAcad(){
	  		var idx = 0;
			for(var i=0; i<jt.data[2].length; i++){
				if(i==0){
		  			nivelAcad[i]=jt.data[2][i];
		  			totNivel[i]=1;
		  		}
		  		else{
		  			idx = nivelAcad.length - 1;	
		  			if(nivelAcad[idx]!=jt.data[2][i]){
		  				nivelAcad[idx+1]=jt.data[2][i];
		  				totNivel[idx+1]=1;	
		  			}	
		  			else{
		  				totNivel[idx]++;
		  			}
				};
			};
		};
			  	
		function addData(x, y){
	  		var xi = x - 58;
			var yi = y + 29.5;
			for(var i=0; i<grados.length; i++){
				//NIVEL ACADEMICO
				rep.addText(16, yi + i*7, levelAcad[i],false,true);	
				
				//GRADOS
				rep.addText(xi, yi + i*7, grados[i],false,true);
		  	    
		  		//TOTAL ALUMNOS
		  		rep.addText(xi+60, yi + i*7, totalAlumnos[i]+'',false,true);
		  		//PROMEDIOS
		  	    
		  		rep.addText(xi+90, yi + i*7, parseFloat(promedios[i]).toFixed(2)+'',false,true);
		  		//TOTAL MENSUAL
		  	    
		  		var tm = '';
		  		if(totalAlumnos[i].trim()!=''){
		  			t1 += parseInt(totalAlumnos[i]);
		  	    	t2 += parseInt(totalAlumnos[i]) * parseFloat(promedios[i]);
		  	    	tm = (parseInt(totalAlumnos[i]) * parseFloat(promedios[i])).toFixed(2) + '';
		  		};
		  	    
		  		rep.addText(xi+120, yi + i*7, tm+'',false,true);
		  		//NUMERO DE CUOTAS
		  		rep.addText(xi+150, yi + i*7, nCuotas+'',false,true);
		  		//TOTAL ANUAL
		  		var ta = '';
		  		if(tm.trim()!=''){
		  			t3 += tm * nCuotas;
		  	    	ta =  tm * nCuotas;
		  		};
		  		rep.addText(xi+180, yi + i*7, ta.toFixed(2) + '',false,true);
			}  		  	  
			rep.addText(x + 2 , y + 138 , t1+'',false,true);
			rep.addText(x + 62 , y + 138 , t2.toFixed(2)+'',false,true);
			rep.addText(x + 122 , y + 138 , t3.toFixed(2)+'',false,true);
		};
			//*************************************************************************************************
		function init() {
			rep.setNoRepeatHead();
			//rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'helvetica','bold');
			//rep.addBar(0,0,297,15,rep.getRGBAObj(220,220,220,0.3),false,true);
        	//rep.addText(77, 10, 'ASOCIACION VENEZOLANA DE EDUCACION CATOLICA - AVEC',false,true);
        	rep.addBar(0,15,297,30,rep.getRGBAObj(240,240,240,0.3),false,true);
        	rep.setFontProperties(rep.getRGBAObj(0,0,0,1),8,'helvetica','bold');
        	rep.addText(2, 20, 'INSTITUCION : '+institucion,false,true);                
        	rep.addText(90, 20, 'CÓDIGO : '+codAvec,false,true);
        	rep.addText(160, 20, 'DIRECCION : '+direccion,false,true);
        	rep.addText(2, 25, 'TELEFONO : '+telefono,false,true);
        	rep.addText(90, 25, 'CIUDAD : '+ciudad,false,true);
        	rep.addText(90, 30, 'FECHA DESDE : '+calendarRepoLisMenDesde.getFechaFromEdit(),false,true);
        	rep.addText(160, 25, 'ENTIDAD FEDERAL : '+entFederal,false,true);
        	rep.addText(160, 30, 'FECHA HASTA : '+calendarRepoLisMenHasta.getFechaFromEdit(),false,true);
        	rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'helvetica','bold');
        	rep.addText(115,40,'RELACIÓN DE MENSUALIDADES',false,true);
		};

		function head(x, y){
			//setNivelAcad();
			rep.addAbsTable(x, y, [30,30,30,30,30], 1, 10, false,true);
			rep.addAbsTable(x - 120, y + 10, [60,60], 1, 15, false,true);
		  	  
			rep.addAbsTable(x, y + 10, [150], 1, 5, false,true);
			rep.addAbsTable(x, y + 15, [30,30,30,30,30], 1, 10, false,true);
	  		
			//rep.addText(x - 116, y + 29.5 +0*(7+7*1) , nivelAcad[0],false,true);		
			//for(var nt=1; nt<totNivel.length; nt++){		  	  	
				//rep.addAbsTable(x - 120, y + 25 + nt*(7+7*totNivel[nt]), [60], 1, 7*totNivel[nt], false,true);
		  		//rep.addText(x - 116, y + 29.5 +nt*(7+7*totNivel[nt-1]) , nivelAcad[nt],false,true);		
		  		//rep.addAbsTable(x - 60, y + 25 + nt*(7+7*totNivel[nt]), [60,30,30,30,30,30], totNivel[nt], 7, false,true);
			//}
			//************************************* DATA FIJA ******************************************
			rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'helvetica','bold');
			for(var i=0; i<5; i++)
				rep.addText(x + 14 +i*30, y + 6 , i+'',false,true);

			rep.setFontProperties(rep.getRGBAObj(0,0,0,1),12,'helvetica','bold');
		  	  
			rep.addText(x - 95, y + 16.5 , 'NIVEL',false,true);
			rep.addText(x - 101.5, y + 20.5 , 'EDUCATIVO',false,true);
			 	  
			rep.addText(x - 38, y + 16.5 , 'GRADO',false,true);
			rep.addText(x + 50, y + 13.5 , 'AÑO ESCOLAR '+ pcbRepoLisMenPeriodo.getValue(),false,true);
			rep.addText(x+1 , y + 20.5 , 'Nº de Alumnos',false,true);
			rep.addText(x+36 , y + 18.5 , 'Promedio',false,true);
			rep.addText(x+32 , y + 22.5 , 'Mens./Alumn.',false,true);
			rep.addText(x+61.5 , y + 18.5 , 'Total Mensual',false,true);
			rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','bold');
			rep.addText(x+62 , y + 22.5 , '(Col Nº1 x Col Nº2)',false,true);
			rep.setFontProperties(rep.getRGBAObj(0,0,0,1),12,'helvetica','bold');
			rep.addText(x+92.5 , y + 21.5 , 'Nº de Cuotas',false,true);
			rep.addText(x+123.5, y + 18.5 , 'Total Anual',false,true);
			rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','bold');
			rep.addText(x+122 , y + 22.5 , '(Col Nº3 x Col Nº4)',false,true);
			rep.setFontProperties(rep.getRGBAObj(0,0,0,1),11,'helvetica','bold');
			rep.addText(x - 14, y + 138 , 'TOTAL:',false,true);
			rep.addAbsTable(x, y + 134, [30], 1, 6, false,true);
			rep.addAbsTable(x + 60, y + 134, [30], 1, 6, false,true);
			rep.addAbsTable(x + 120, y + 134, [30], 1, 6, false,true);
			rep.addText(20, y + 145 , 'NOMBRE DEL DIRECTOR : '+director,false,true);
			rep.addText(20, y + 148.5 , 'CEDULA DE IDENTIDAD : '+ciDirector,false,true);
			rep.addText(20, y + 151.5 , 'FECHA : '+fecha,false,true);
			//******************************************************************************************			  	  
		};
			  	
		function view(){
			rep.printPDF();
		};
		  	
		init();	
        head(132,48);
    	addData(132,48);
    	rep.render();
    	setTimeout(view,1000);
	},
	
	coreUpdate: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (pcbRepoLisMenOrg.valid(dialogsRepoLisMensualidades))
			if (pcbRepoLisMenSuborg.valid(dialogsRepoLisMensualidades))
				if (pcbRepoLisMenPeriodo.valid(dialogsRepoLisMensualidades)) 
					if (pcbRepoLisMensualidad.valid(dialogsRepoLisMensualidades)) 
						if (calendarRepoLisMenDesde.getText() == '' || calendarRepoLisMenDesde.valid(dialogsRepoLisMensualidades)) 
							if (calendarRepoLisMenHasta.getText() == '' || calendarRepoLisMenHasta.valid(dialogsRepoLisMensualidades)) {
								rlx.add('reg', pcbRepoLisMenOrg);
								rlx.add('reg', pcbRepoLisMensualidad);
								rlx.add('reg', pcbRepoLisMenPeriodo);
								rlx.add('reg', pcbRepoLisMenCarrera.setModeReturnGetText(2));
								rlx.add('reg', calendarRepoLisMenDesde);
								rlx.add('reg', calendarRepoLisMenHasta);
								Tool.cnnSrv('ReportObject','getRelacionMensualidad', this.windowName + '.reporte()', rlx);
							}
    }
}
