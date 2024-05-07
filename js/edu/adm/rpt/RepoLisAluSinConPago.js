var dialogsRepoLisAluSinConPago = new Object();
var pcbRepoLisAluSinConPagOrg = new Object();
var pcbRepoLisAluSinConPagSuborg = new Object();
var pcbRepoLisAluSinConPagCarrera = new Object();
var pcbRepoLisAluSinConPagPeriodo = new Object();
var pcbRepoLisAluSinConPagConcepto = new Object();
var calendarRepoLisAluSinConPagfec1 = new Object();
var calendarRepoLisAluSinConPagfec2 = new Object();
var imgButtonsRepoLisAluSinPagReporte = new Object();
var imgButtonsRepoLisAluConPagReporte = new Object();
var imgButtonsRepoLisAluSinConPagLimpiar = new Object();
var imgButtonsRepoLisAluSinConPagSalir = new Object();
var mw_RepoLisAluSinConPago = new Object();// minWindow

var RepoLisAluSinConPago = {
    windowName : 'RepoLisAluSinConPago',
    isCreate: false,
    
    show: function() {
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        
        if (dialogsRepoLisAluSinConPago.isByClean())
			this.limpiar();			
		dialogsRepoLisAluSinConPago.show();
	},
	
    hide: function() {
        dialogsRepoLisAluSinConPago.hide();
    },
    
    createMWs: function() {
        mwRepoLisAluSinConPago = desktop.addMinWindow('Estudiante Concepto', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoLisAluSinConPago.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsRepoLisAluSinConPago_Init : function() {
        dialogsRepoLisAluSinConPago.setMinimizeXY(0,0);
        dialogsRepoLisAluSinConPago.setCenterScreen();
        dialogsRepoLisAluSinConPago.addSpace(0,0,20);
        dialogsRepoLisAluSinConPago.addLn(1,1,1);
		dialogsRepoLisAluSinConPago.setHeightCell(1,1,13);
		dialogsRepoLisAluSinConPago.addObjToDialog(pcbRepoLisAluSinConPagOrg,2,1,24);
		dialogsRepoLisAluSinConPago.addObjToDialog(pcbRepoLisAluSinConPagSuborg,2,1,24);
		dialogsRepoLisAluSinConPago.adjAllMarginObj(2,1,10);
		dialogsRepoLisAluSinConPago.addObjToDialog(pcbRepoLisAluSinConPagCarrera,3,1,24);
		dialogsRepoLisAluSinConPago.addObjToDialog(pcbRepoLisAluSinConPagPeriodo,3,1,24);
        dialogsRepoLisAluSinConPago.adjAllMarginObj(3,1,10);
		dialogsRepoLisAluSinConPago.addObjToDialog(pcbRepoLisAluSinConPagConcepto,4,1,24);
        dialogsRepoLisAluSinConPago.adjAllMarginObj(4,1,10);
		dialogsRepoLisAluSinConPago.addObjToDialog(calendarRepoLisAluSinConPagfec1.getEditCalendar(),5,1,24);
		dialogsRepoLisAluSinConPago.addObjToDialog(calendarRepoLisAluSinConPagfec2.getEditCalendar(),5,1,24);
        dialogsRepoLisAluSinConPago.adjAllMarginObj(5,1,10);
        dialogsRepoLisAluSinConPago.addLn(6,1,1);
		dialogsRepoLisAluSinConPago.setHeightCell(6,1,12);
        dialogsRepoLisAluSinConPago.addObjToDialog(imgButtonsRepoLisAluConPagReporte,7,1);
        dialogsRepoLisAluSinConPago.addObjToDialog(imgButtonsRepoLisAluSinPagReporte,7,1);
		dialogsRepoLisAluSinConPago.addObjToDialog(imgButtonsRepoLisAluSinConPagLimpiar,7,1);
		dialogsRepoLisAluSinConPago.addObjToDialog(imgButtonsRepoLisAluSinConPagSalir,7,1);
		dialogsRepoLisAluSinConPago.leftMarginObj(7,1,0,35);
    	dialogsRepoLisAluSinConPago.adjAllMarginObj(7,1,25);
    },
   
    create : function() {
    	dialogsRepoLisAluSinConPago = dialogs.create('dialogsRepoLisAluSinConPago',0,0,634,155,'ESTUDIANTE CON / SIN CONCEPTO DE PAGO');
    	dialogsRepoLisAluSinConPago.setAdjY(70);
    	pcbRepoLisAluSinConPagOrg = powerComboBox.create('pcbRepoLisAluSinConPagOrg','pcbRepoLisAluSinConPagOrg','Organización (+):',1,110);
    	pcbRepoLisAluSinConPagOrg.enableReadOnlyEditor();
    	pcbRepoLisAluSinConPagOrg.addEmptyOption();
    	pcbRepoLisAluSinConPagOrg.setValidEmpty();
    	pcbRepoLisAluSinConPagOrg.setWidthCombo(150);
    	pcbRepoLisAluSinConPagSuborg = powerComboBox.create('pcbRepoLisAluSinConPagSuborg','pcbRepoLisAluSinConPagSuborg','Suborganización (^):',1,130);
    	pcbRepoLisAluSinConPagSuborg.enableReadOnlyEditor();
    	pcbRepoLisAluSinConPagSuborg.addEmptyOption();
    	pcbRepoLisAluSinConPagSuborg.setValidEmpty();
    	pcbRepoLisAluSinConPagSuborg.setWidthCombo(150);
    	pcbRepoLisAluSinConPagCarrera = powerComboBox.create('pcbRepoLisAluSinConPagCarrera','pcbRepoLisAluSinConPagCarrera','Carrera (^):',1,110);
    	pcbRepoLisAluSinConPagCarrera.enableReadOnlyEditor();
    	pcbRepoLisAluSinConPagCarrera.addEmptyOption();
    	pcbRepoLisAluSinConPagCarrera.setValidEmpty();
    	pcbRepoLisAluSinConPagCarrera.setWidthCombo(150);
    	pcbRepoLisAluSinConPagCarrera.enableOnChangeToEmptyOption();
    	pcbRepoLisAluSinConPagCarrera.setFieldFind(true);
    	pcbRepoLisAluSinConPagPeriodo = powerComboBox.create('pcbRepoLisAluSinConPagPeriodo','pcbRepoLisAluSinConPagPeriodo','Periodo (+):',1,130);
    	pcbRepoLisAluSinConPagPeriodo.enableReadOnlyEditor();
    	pcbRepoLisAluSinConPagPeriodo.addEmptyOption();
    	pcbRepoLisAluSinConPagPeriodo.setValidEmpty();
    	pcbRepoLisAluSinConPagPeriodo.setWidthCombo(150);
    	pcbRepoLisAluSinConPagPeriodo.enableOnChangeToEmptyOption();
    	pcbRepoLisAluSinConPagConcepto = powerComboBox.create('pcbRepoLisAluSinConPagConcepto','pcbRepoLisAluSinConPagConcepto','Concepto (+):',1,110);
    	pcbRepoLisAluSinConPagConcepto.enableReadOnlyEditor();
    	pcbRepoLisAluSinConPagConcepto.addEmptyOption();
    	pcbRepoLisAluSinConPagConcepto.setValidEmpty();
        pcbRepoLisAluSinConPagConcepto.setWidthCombo(462);
        pcbRepoLisAluSinConPagConcepto.setTypeObjOpt('input', 'checkbox');
        pcbRepoLisAluSinConPagConcepto.setFirstRowCheckMode(2);
        calendarRepoLisAluSinConPagfec1 = calendars.create('calendarRepoLisAluSinConPagfec1');      
		calendarRepoLisAluSinConPagfec1.setWidthEditCalendar(149);
    	calendarRepoLisAluSinConPagfec1.setCaption('Fecha Desde:',1,110);
    	calendarRepoLisAluSinConPagfec1.sendToFrom(100);
      	calendarRepoLisAluSinConPagfec1.setValidEmpty();
      	calendarRepoLisAluSinConPagfec1.setFieldFind(true);
      	calendarRepoLisAluSinConPagfec2 = calendars.create('calendarRepoLisAluSinConPagfec2');      
		calendarRepoLisAluSinConPagfec2.setWidthEditCalendar(149);
    	calendarRepoLisAluSinConPagfec2.setCaption('Fecha Hasta:',1,130);
    	calendarRepoLisAluSinConPagfec2.sendToFrom(100);
      	calendarRepoLisAluSinConPagfec2.setValidEmpty();
      	calendarRepoLisAluSinConPagfec2.setFieldFind(true);
      	calendarRepoLisAluSinConPagfec1.setValidGreaterThan(calendarRepoLisAluSinConPagfec2);
      	imgButtonsRepoLisAluConPagReporte = imgButtons.create('imgButtonsRepoLisAluConPagReporte','Con Concepto','print.png');
      	imgButtonsRepoLisAluSinPagReporte = imgButtons.create('imgButtonsRepoLisAluSinPagReporte','Sin Concepto','print.png');
        imgButtonsRepoLisAluSinConPagLimpiar = imgButtons.create('imgButtonsRepoLisAluSinConPagLimpiar', 'Limpiar', 'limpiar.png');
      	imgButtonsRepoLisAluSinConPagSalir = imgButtons.create('imgButtonsRepoLisAluSinConPagSalir','Salir','salir.png');
    	imgButtonsRepoLisAluConPagReporte.setDimension(110,22);
    	imgButtonsRepoLisAluSinPagReporte.setDimension(110,22);
    	imgButtonsRepoLisAluSinConPagLimpiar.setDimension(110,22);
    	imgButtonsRepoLisAluSinConPagSalir.setDimension(110,22);
	},

	init : function() { 
		this.create();
		this.setEvents(); 
		this.dialogsRepoLisAluSinConPago_Init();
		this.createMWs();
	},
	
    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(pcbRepoLisAluSinConPagSuborg);
	  		Tool.rstPwrCmb(pcbRepoLisAluSinConPagCarrera);
	    	if (pcbRepoLisAluSinConPagOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoLisAluSinConPago, pcbRepoLisAluSinConPagSuborg, 1, 2, pcbRepoLisAluSinConPagOrg);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbRepoLisAluSinConPagCarrera);
	    	if (pcbRepoLisAluSinConPagSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoLisAluSinConPago, pcbRepoLisAluSinConPagCarrera, -1, 3, pcbRepoLisAluSinConPagSuborg);
		}
		else if (element == 'carr') {
	    	if (pcbRepoLisAluSinConPagCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoLisAluSinConPago, pcbRepoLisAluSinConPagPeriodo, 0, 1, pcbRepoLisAluSinConPagCarrera.setModeReturnGetText(5));
		}
	},
	
  	limpiar : function() {
  		pcbRepoLisAluSinConPagOrg.setSelectedIndex(0);
  		pcbRepoLisAluSinConPagSuborg.clear();
  		pcbRepoLisAluSinConPagCarrera.clear();
  		pcbRepoLisAluSinConPagPeriodo.setSelectedIndex(0);
  		pcbRepoLisAluSinConPagConcepto.clear();	
        calendarRepoLisAluSinConPagfec1.clear();   
      	calendarRepoLisAluSinConPagfec2.clear();  
  		dialogsRepoLisAluSinConPago.setMsg("");
  		Tool.cnnSrv("ReportObject", "getRepoLisAluSinConPagoInit", this.windowName + ".loadDataInit()");
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoLisAluSinConPago, pcbRepoLisAluSinConPagOrg, 0, 1, json('getData'));
		Tool.loadPowerComboData(dialogsRepoLisAluSinConPago, pcbRepoLisAluSinConPagConcepto, 0, 1, json('getConceptos'));
		Tool.getContext(dialogsRepoLisAluSinConPago, pcbRepoLisAluSinConPagOrg, pcbRepoLisAluSinConPagSuborg, pcbRepoLisAluSinConPagCarrera, this.windowName + ".resetElements('carr')");
	},
	
	setEvents: function() {
		pcbRepoLisAluSinConPagOrg.onChange(this.windowName + ".resetElements('org')");
		pcbRepoLisAluSinConPagSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbRepoLisAluSinConPagCarrera.onChange(this.windowName + ".resetElements('carr')");
  		imgButtonsRepoLisAluConPagReporte.onClick(this.windowName + ".coreUpdate('con')");
  		imgButtonsRepoLisAluSinPagReporte.onClick(this.windowName + ".coreUpdate('sin')");
  		imgButtonsRepoLisAluSinConPagLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsRepoLisAluSinConPagSalir.onClick('dialogsRepoLisAluSinConPago.close()');
    },

	reporte: function(tipoConcepto) {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
    	rep.setPositionIcon(1090,10);
    	//rep.setHeadImage(imgEduca.banner,false);
    	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),14,'courier','bold');
		rep.addBar(0,3,1128,42,rep.getRGBAObj(210,200,200,0.9),false);
		if (tipoConcepto == 'sin')
			rep.addText(346, 29,'LISTADO DE ESTUDIANTE SIN CONCEPTO DE PAGO',false);
		else
			rep.addText(346, 29,'LISTADO DE ESTUDIANTE CON CONCEPTO DE PAGO',false);
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),9,'helvetica','normal');
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,45,1128,94,rep.getRGBAObj(187,196,238,0.8),false);
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),8,'helvetica','normal');
		rep.addText(20, 66,'ORGANIZACIÓN: '+pcbRepoLisAluSinConPagOrg.getOption(),false);
		rep.addText(20, 82,'SUBORGANIZACIÓN: '+pcbRepoLisAluSinConPagSuborg.getOption(),false);
		rep.addText(400, 66,'CARRERA:         '+pcbRepoLisAluSinConPagCarrera.getOption(),false);
		rep.addText(400, 82, 'PERIODO:            '+pcbRepoLisAluSinConPagPeriodo.getOption(),false);
		rep.addText(700, 82, 'BUSQUEDA POR CONCEPTO: '+pcbRepoLisAluSinConPagConcepto.getOption(),false);
        //************************ TABLE ***************************
        rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 9, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);		
		rep.addTable('tablaRepoLisAluSinConPago',['Nº','Cedula Rep.','Apellidos Rep.','Nombres Rep.','Cedula Estudiante','Apellido Estudiante','Nombre Estudiante','Cant. Concepto'],567  ,98);
		rep.setTotalRowTable(22);
		rep.setHeightRow(30);
        rep.setSizeColumnArray([22,100,200,200,100,200,200,109]);
        rep.setAlignData(['right','center','left','left','center','left','left','center']); 
        if (tipoConcepto == 'sin')
        	rep.addJsonData('tablaRepoLisAluSinConPago','getAlumnoSinConceptoPago',[0,1,2,3,4,5,6,7]);
        else
        	rep.addJsonData('tablaRepoLisAluSinConPago','getAlumnoConConceptoPago',[0,1,2,3,4,5,6,7]);
		////////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        //rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        //rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
        rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	coreUpdate: function(tipoConcepto) {
		var rlx = xmlStructs.createRecordList("rlx");
		
		if (pcbRepoLisAluSinConPagOrg.valid(dialogsRepoLisAluSinConPago))
			if (pcbRepoLisAluSinConPagSuborg.valid(dialogsRepoLisAluSinConPago))
				if (pcbRepoLisAluSinConPagPeriodo.valid(dialogsRepoLisAluSinConPago))
					if (pcbRepoLisAluSinConPagConcepto.valid(dialogsRepoLisAluSinConPago)) {
						rlx.add('reg', pcbRepoLisAluSinConPagPeriodo);
						rlx.add('reg', pcbRepoLisAluSinConPagCarrera.setModeReturnGetText(2));
						rlx.add('reg', pcbRepoLisAluSinConPagConcepto);
						rlx.addStr('reg', tipoConcepto);
						rlx.add('reg', calendarRepoLisAluSinConPagfec1);
						rlx.add('reg', calendarRepoLisAluSinConPagfec2);
						Tool.cnnSrv("ReportObject", "getAlumnoSinConceptoPago", this.windowName + ".reporte('" + tipoConcepto +"')", rlx); 
					}
	}
};