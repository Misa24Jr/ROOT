var dialogsRepoDiaDesarrollo = new Object();
var powerComboBoxRepoAluPorSecOrganizacion = new Object();
var powerComboBoxRepoAluPorSecSuborganizacion = new Object();
var powerComboBoxRepoAluPorSecCarrera = new Object();
var powerComboBoxRepoAluPorSecPeriodo = new Object();
var powerComboBoxRepoAluPorSecPosicion = new Object();
var powerComboBoxRepoAluPorSecSeccion = new Object();
var imgButtonsRepoAluPorSecReporte = new Object();
var imgButtonsRepoAluPorSecSalir = new Object();
var mw_RepoDiaDesarrollo = new Object();//minWindow
var rl = new Object();

var RepoDiaDesarrollo = {
    windowName: 'RepoDiaDesarrollo',
    isCreate: false,
    
    show : function() {  
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsRepoDiaDesarrollo.isByClean())
			this.reporte();			
		dialogsRepoDiaDesarrollo.show();
	},
	
	hide : function() {
		dialogsRepoDiaDesarrollo.hide();
	},
	
    createMWs: function() {
        mwRepoDiaDesarrollo = desktop.addMinWindow('R.A.Sección', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoDiaDesarrollo.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRepoDiaDesarrollo_Init : function() {
        dialogsRepoDiaDesarrollo.setMinimizeXY(0,0);
        dialogsRepoDiaDesarrollo.setCenterScreen();
        dialogsRepoDiaDesarrollo.addSpace(0,0,20);
        dialogsRepoDiaDesarrollo.addLn(1,1,1);
		dialogsRepoDiaDesarrollo.setHeightCell(1,1,10);
        dialogsRepoDiaDesarrollo.addObjToDialog(powerComboBoxRepoAluPorSecOrganizacion,2,1,24);
        dialogsRepoDiaDesarrollo.addObjToDialog(powerComboBoxRepoAluPorSecSuborganizacion,2,1,24);
        dialogsRepoDiaDesarrollo.addObjToDialog(powerComboBoxRepoAluPorSecCarrera,2,1,24);
        dialogsRepoDiaDesarrollo.adjAllMarginObj(2,1,5);
        dialogsRepoDiaDesarrollo.addObjToDialog(powerComboBoxRepoAluPorSecPeriodo,3,1,24);
        dialogsRepoDiaDesarrollo.addObjToDialog(powerComboBoxRepoAluPorSecPosicion,3,1,24);
        dialogsRepoDiaDesarrollo.addObjToDialog(powerComboBoxRepoAluPorSecSeccion,3,1,24);
        dialogsRepoDiaDesarrollo.adjAllMarginObj(3,1,5);   
        dialogsRepoDiaDesarrollo.addLn(5,1,1);
		dialogsRepoDiaDesarrollo.setHeightCell(5,1,9);
        dialogsRepoDiaDesarrollo.addObjToDialog(imgButtonsRepoAluPorSecReporte,6,1);
    	imgButtonsRepoAluPorSecReporte.setDimension(90,22);
        dialogsRepoDiaDesarrollo.addObjToDialog(imgButtonsRepoAluPorSecSalir,6,1);
    	imgButtonsRepoAluPorSecSalir.setDimension(90,22);
        dialogsRepoDiaDesarrollo.adjAllMarginObj(6,1,30);
        dialogsRepoDiaDesarrollo.leftMarginObj(6,1,0,282);
    },

    create : function() {
    	dialogsRepoDiaDesarrollo = dialogs.create('dialogsRepoDiaDesarrollo',0,0,796,102,'DIALOGO DE DESARROLLO');
    	dialogsRepoDiaDesarrollo.setAdjY(80);
    	powerComboBoxRepoAluPorSecOrganizacion = powerComboBox.create('powerComboBoxRepoAluPorSecOrganizacion','powerComboBoxRepoAluPorSecOrganizacion','Organización (+):',1,103);
    	powerComboBoxRepoAluPorSecOrganizacion.enableReadOnlyEditor();
    	powerComboBoxRepoAluPorSecOrganizacion.addEmptyOption();
    	powerComboBoxRepoAluPorSecOrganizacion.setValidEmpty();
    	powerComboBoxRepoAluPorSecSuborganizacion = powerComboBox.create('powerComboBoxRepoAluPorSecSuborganizacion','powerComboBoxRepoAluPorSecSuborganizacion','Suborganización (^):',1,123);
    	powerComboBoxRepoAluPorSecSuborganizacion.enableReadOnlyEditor();
    	powerComboBoxRepoAluPorSecSuborganizacion.addEmptyOption();
    	powerComboBoxRepoAluPorSecSuborganizacion.setValidEmpty();
    	powerComboBoxRepoAluPorSecCarrera = powerComboBox.create('powerComboBoxRepoAluPorSecCarrera','powerComboBoxRepoAluPorSecCarrera','Carrera (^):',1,71);
    	powerComboBoxRepoAluPorSecCarrera.enableReadOnlyEditor();
    	powerComboBoxRepoAluPorSecCarrera.addEmptyOption();
    	powerComboBoxRepoAluPorSecCarrera.setValidEmpty();
    	powerComboBoxRepoAluPorSecPeriodo = powerComboBox.create('powerComboBoxRepoAluPorSecPeriodo','powerComboBoxRepoAluPorSecPeriodo','Periodo:',1,103);
    	powerComboBoxRepoAluPorSecPeriodo.enableReadOnlyEditor();
    	powerComboBoxRepoAluPorSecPeriodo.addEmptyOption();
    	powerComboBoxRepoAluPorSecPeriodo.setValidEmpty();
    	powerComboBoxRepoAluPorSecPosicion = powerComboBox.create('powerComboBoxRepoAluPorSecPosicion','powerComboBoxRepoAluPorSecPosicion','Posición:',1,123);
    	powerComboBoxRepoAluPorSecPosicion.enableReadOnlyEditor();
    	powerComboBoxRepoAluPorSecPosicion.addEmptyOption();
    	powerComboBoxRepoAluPorSecPosicion.setValidEmpty();
    	powerComboBoxRepoAluPorSecSeccion = powerComboBox.create('powerComboBoxRepoAluPorSecSeccion','powerComboBoxRepoAluPorSecSeccion','Sección:',1,71);
    	powerComboBoxRepoAluPorSecSeccion.enableReadOnlyEditor();
    	powerComboBoxRepoAluPorSecSeccion.addEmptyOption();
    	powerComboBoxRepoAluPorSecSeccion.setValidEmpty();
    	powerComboBoxRepoAluPorSecSeccion.setDataType("string");
    	imgButtonsRepoAluPorSecReporte = imgButtons.create('imgButtonsRepoAluPorSecReporte','Reporte','print.png');
    	imgButtonsRepoAluPorSecSalir = imgButtons.create('imgButtonsRepoAluPorSecSalir','Salir','salir.png');
  	},

  	init : function() {
  		this.create();
  		this.setEvents();
  		this.dialogsRepoDiaDesarrollo_Init();
  		this.createMWs();
  	},
  
  	limpiar : function() {
  		powerComboBoxRepoAluPorSecOrganizacion.setSelectedIndex(0);
  		Tool.rstPwrCmb(powerComboBoxRepoAluPorSecSuborganizacion);
  		Tool.rstPwrCmb(powerComboBoxRepoAluPorSecCarrera);
  		Tool.rstPwrCmb(powerComboBoxRepoAluPorSecPeriodo);
  		dialogsRepoDiaDesarrollo.setMsg("");
  		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoDiaDesarrollo, powerComboBoxRepoAluPorSecOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoDiaDesarrollo, powerComboBoxRepoAluPorSecOrganizacion, powerComboBoxRepoAluPorSecSuborganizacion, powerComboBoxRepoAluPorSecCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function() {
		powerComboBoxRepoAluPorSecOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxRepoAluPorSecSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		powerComboBoxRepoAluPorSecCarrera.onChange(this.windowName + ".resetElements('carr')");
		powerComboBoxRepoAluPorSecPeriodo.onChange(this.windowName + ".resetElements('per')");
		powerComboBoxRepoAluPorSecPosicion.onChange(this.windowName + ".resetElements('pos')");
    	imgButtonsRepoAluPorSecReporte.onClick(this.windowName + ".reporte()");
        imgButtonsRepoAluPorSecSalir.onClick('dialogsRepoDiaDesarrollo.close()');
    },
    
    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxRepoAluPorSecSuborganizacion);
	  		Tool.rstPwrCmb(powerComboBoxRepoAluPorSecCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoAluPorSecPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoAluPorSecPosicion);
			Tool.rstPwrCmb(powerComboBoxRepoAluPorSecSeccion);
	    	if (powerComboBoxRepoAluPorSecOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoDiaDesarrollo, powerComboBoxRepoAluPorSecSuborganizacion, 1, 2, powerComboBoxRepoAluPorSecOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(powerComboBoxRepoAluPorSecCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoAluPorSecPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoAluPorSecPosicion);
			Tool.rstPwrCmb(powerComboBoxRepoAluPorSecSeccion);
	    	if (powerComboBoxRepoAluPorSecSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoDiaDesarrollo, powerComboBoxRepoAluPorSecCarrera, -1, 3, powerComboBoxRepoAluPorSecSuborganizacion);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(powerComboBoxRepoAluPorSecPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoAluPorSecPosicion);
			Tool.rstPwrCmb(powerComboBoxRepoAluPorSecSeccion);
	    	if (powerComboBoxRepoAluPorSecCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoDiaDesarrollo, powerComboBoxRepoAluPorSecPeriodo, 0, 1, powerComboBoxRepoAluPorSecCarrera.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
          Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsRepoDiaDesarrollo, powerComboBoxRepoAluPorSecPosicion, 0, 1, powerComboBoxRepoAluPorSecCarrera.setModeReturnGetText(2));        		
    	} 
    	else if (element == 'pos') {
          Tool.getPowerComboData('MantObject', 'getMantProyAulaSeccion', dialogsRepoDiaDesarrollo, powerComboBoxRepoAluPorSecSeccion, 0, 1, powerComboBoxRepoAluPorSecCarrera, powerComboBoxRepoAluPorSecPeriodo, powerComboBoxRepoAluPorSecPosicion);        		
    	}  
	},
	
reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,110);
        rep.setNoRepeatHead();
        rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),14,'courier','bold');
		rep.addBar(0,104,1128,144,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addText(279, 131,'CONSTANCIA DE CUPO',true);
        
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','normal');
		rep.addText(100, 185, 'Quien  suscribe  '/* + director + ', C.I. '*/,false);
       
        rep.addText(300, 185, 'venezolano, titular de la'/* + nuCeDirector +*/,false);
        rep.addText(80, 210, ','/* + nuCeDirector +*/,false);
       
       
       
        //rep.addText(465, 455,''/*+editsReptGenIniBasNombre.getText()+" "+editsReptGenIniBasApellido.getText()*/,false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),11.0,'helvetica','normal');
        rep.addText(50, 485,'portador (a) de la cédula de identidad numero:',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'verdana','bold');
        /*
        //rep.addText(352, 485,'V-'+editsReptGenIniBasCi.getText(),false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),11.0,'helvetica','normal');
        rep.addText(446, 485,', de nacionalidad: '+json('getMantPersTodas').data[5][0],false);
        rep.addText(649, 485,'y  cursa  por',false);
        rep.addText(50, 515,'esta institución estudios en: ',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'verdana','bold');
        //rep.addText(236, 515,''+json('getMantenimientodeCarrera').data[7][0],false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),11.0,'helvetica','normal');
        rep.addText(70, 545,'Por lo que  expido la  presente para los fines donde haya lugar y del interesado,  la misma no es valida',false);
        rep.addText(50, 575,'sin el sello y firma.',false);
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 8, 'rgba(0,0,0,0.9)', 'rgba(0,0,0,0.9)', 2);
		rep.setTableCellProperties(1, 'courier', 7);
		rep.addTable('TablaRepoHojaEvaAlumno',['Nº'],9,182);
        rep.setTotalRowTable(45);
        rep.setHeightRow(17); 
        rep.setSizeColumnArray([14]);
        rep.setAlignData(['right']);     
        //rep.addJsonData('TablaRepoHojaEvaAlumno','getRepoListAlumnoCurso',[0,2,3,5,6,7,8,9,10,11,12,13,14,15]);
		
		
        rep.addAbsTable(270, 70, [60,60,60,60], 1, 1000, false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'courier','bold');
        rep.addText(282,95,'FECHA',false);
        rep.addText(340,95,'CLASES',false);
        rep.addText(345,105,'DADAS',false);
        rep.addText(393,95,'NºFINALI',false);
        rep.addText(401,105,'DADES',false);
        rep.addText(456,95,'MATERIA',false);
        rep.addText(461,105,'VISTA',false);
        rep.addSimpleTable(270,70.0,rep.getRGBAObj(0,0,0,1),240.0,25,40.0,false);//linea E
        
        rep.addAbsTable(523, 70, [319],1,28,false);
        rep.addText(535,90,'RESUMEN DEL PLAN EVALUATIVO',false);
		
        rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 8, 'rgba(0,0,0,0.9)', 'rgba(0,0,0,0.9)', 2);
		rep.setTableCellProperties(1, 'courier', 7);
		rep.addTable('TablaRepoHojaEvaAlumno1',['Nº'],530,105);
        rep.setTotalRowTable(45);
        rep.setHeightRow(17); 
        rep.setSizeColumnArray([14]);
        rep.setAlignData(['right']);     
        //rep.addJsonData('TablaRepoHojaEvaAlumno','getRepoListAlumnoCurso',[0,2,3,5,6,7,8,9,10,11,12,13,14,15]);
        rep.addAbsTable(550,105, [120,60,22,90], 1, 600, false);
        
        
        
        
		
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		/*
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
    	*/
		rep.render();
		rep.previewHTML();
	},
	
	coreUpdate: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
		//if (powerComboBoxRepoAluPorSecPeriodo.valid(dialogsRepoDiaDesarrollo))
			/*if (powerComboBoxRepoAluPorSecPosicion.valid(dialogsRepoDiaDesarrollo))*/ {
				rlx.add('reg', powerComboBoxRepoAluPorSecSeccion);
				rlx.add('reg', powerComboBoxRepoAluPorSecPeriodo);
				rlx.add('reg', powerComboBoxRepoAluPorSecPosicion);
				rlx.add('reg', powerComboBoxRepoAluPorSecCarrera);
				Tool.cnnSrv('ReportObject', 'getAluPorSeccion', this.windowName + '.reporte()', rlx);
			}
    }
}
