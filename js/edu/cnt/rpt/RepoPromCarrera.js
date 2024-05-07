var dialogsRepoPromCarrera = new Object();
var pcbRepoPromCarreraOrg = new Object();
var pcbRepoPromCarreraSuborg = new Object();
var pcbRepoPromCarreraCarr = new Object();
var pcbRepoPromCarreraPeriodo = new Object();
var pcbRepoPromCarreraPosicion = new Object();
var pcbRepoPromCarreraPosProm = new Object();
var imgButtonsRepoCuadHonReporte = new Object();
var imgButtonsRepoCuadHonSalir = new Object();
var mwRepoPromCarrera = new Object();// minWindow

var RepoPromCarrera = {
    windowName: 'RepoPromCarrera',
    isCreate: false,
	
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoPromCarrera.isByClean()) 
            this.limpiar('lmp');
        dialogsRepoPromCarrera.show();
    },
    
    hide: function(){
        dialogsRepoPromCarrera.hide();
    },
    
    createMWs: function(){
        mwRepoPromCarrera = desktop.addMinWindow('Prom. Carrera', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoPromCarrera.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRepoPromCarrera_Init: function(){
        dialogsRepoPromCarrera.setMinimizeXY(0, 0);
        dialogsRepoPromCarrera.setCenterScreen();    
		dialogsRepoPromCarrera.addObject(pcbRepoPromCarreraOrg, 10, 35);
		dialogsRepoPromCarrera.addObject(pcbRepoPromCarreraSuborg, 285, 35);
        dialogsRepoPromCarrera.addObject(pcbRepoPromCarreraCarr, 580, 35);
        dialogsRepoPromCarrera.addObject(pcbRepoPromCarreraPeriodo, 10, 60);
        dialogsRepoPromCarrera.addObject(pcbRepoPromCarreraPosicion, 285, 60);
        dialogsRepoPromCarrera.addObject(pcbRepoPromCarreraPosProm, 580, 60);
        dialogsRepoPromCarrera.addObject(imgButtonsRepoCuadHonReporte, 308, 93);
        dialogsRepoPromCarrera.addObject(imgButtonsRepoCuadHonSalir, 419, 93);
        imgButtonsRepoCuadHonReporte.setDimension(90, 22);
        imgButtonsRepoCuadHonSalir.setDimension(90, 22);
        
    },
	
    create: function() {
        dialogsRepoPromCarrera = dialogs.create('dialogsRepoPromCarrera', 0, 0, 819, 105, 'PROMEDIO DE LA CARRERA');
        dialogsRepoPromCarrera.setAdjY(60);
        pcbRepoPromCarreraOrg = powerComboBox.create('pcbRepoPromCarreraOrg', 'pcbRepoPromCarreraOrg', 'Organización (+):', 1,102);
        pcbRepoPromCarreraOrg.enableReadOnlyEditor();
        pcbRepoPromCarreraOrg.addEmptyOption();
        pcbRepoPromCarreraOrg.setValidEmpty();
        pcbRepoPromCarreraSuborg = powerComboBox.create('pcbRepoPromCarreraSuborg', 'pcbRepoPromCarreraSuborg', 'Suborganización (^):', 1,122);
        pcbRepoPromCarreraSuborg.enableReadOnlyEditor();
        pcbRepoPromCarreraSuborg.addEmptyOption();
        pcbRepoPromCarreraSuborg.setValidEmpty();
        pcbRepoPromCarreraCarr = powerComboBox.create('pcbRepoPromCarreraCarr', 'pcbRepoPromCarreraCarr', 'Carrera (^):', 1,81);
        pcbRepoPromCarreraCarr.enableReadOnlyEditor();
        pcbRepoPromCarreraCarr.addEmptyOption();
        pcbRepoPromCarreraCarr.setValidEmpty();
        pcbRepoPromCarreraPeriodo = powerComboBox.create('pcbRepoPromCarreraPeriodo', 'pcbRepoPromCarreraPeriodo', 'Periodo (^):', 1,102);
        pcbRepoPromCarreraPeriodo.enableReadOnlyEditor();
        pcbRepoPromCarreraPeriodo.addEmptyOption();
        pcbRepoPromCarreraPeriodo.setValidEmpty();
        pcbRepoPromCarreraPosicion = powerComboBox.create('pcbRepoPromCarreraPosicion','pcbRepoPromCarreraPosicion','Estudiante :',1,123);
    	pcbRepoPromCarreraPosicion.enableReadOnlyEditor();
    	pcbRepoPromCarreraPosicion.addEmptyOption();
    	pcbRepoPromCarreraPosicion.setValidEmpty();
        pcbRepoPromCarreraPosProm = powerComboBox.create('pcbRepoPromCarreraPosProm','pcbRepoPromCarreraPosProm','Promedio :',1,81);
        pcbRepoPromCarreraPosProm.setTypeObjOpt('input', 'checkbox');
        pcbRepoPromCarreraPosProm.setFirstRowCheckMode(2);
        pcbRepoPromCarreraPosProm.setDataType('string');
        pcbRepoPromCarreraPosProm.enableReadOnlyEditor();
        pcbRepoPromCarreraPosProm.addEmptyOption();
    	pcbRepoPromCarreraPosProm.setValidEmpty();
    	pcbRepoPromCarreraPosProm.setFieldFind(true);
        imgButtonsRepoCuadHonReporte = imgButtons.create('imgButtonsRepoCuadHonReporte', 'Reporte', 'ok.png');
        imgButtonsRepoCuadHonSalir = imgButtons.create('imgButtonsRepoCuadHonSalir', 'Salir', 'salir.png');
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsRepoPromCarrera_Init();
        this.createMWs();
    },
    
    limpiar : function(tipo) {
  		pcbRepoPromCarreraOrg.setSelectedIndex(0);
  		pcbRepoPromCarreraSuborg.clear();
  		pcbRepoPromCarreraCarr.clear();
  		pcbRepoPromCarreraPeriodo.clear();
  		pcbRepoPromCarreraPosicion.clear();
  		pcbRepoPromCarreraPosProm.clear();
  		dialogsRepoPromCarrera.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoPromCarrera, pcbRepoPromCarreraOrg, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoPromCarrera, pcbRepoPromCarreraOrg, pcbRepoPromCarreraSuborg, pcbRepoPromCarreraCarr, this.windowName + ".resetElements('carr')");
	},
    
    setEvents: function(){
		pcbRepoPromCarreraOrg.onChange(this.windowName + ".resetElements('org')");
		pcbRepoPromCarreraSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbRepoPromCarreraCarr.onChange(this.windowName + ".resetElements('carr')");
		pcbRepoPromCarreraPeriodo.onChange(this.windowName + ".resetElements('per')");	
    	imgButtonsRepoCuadHonReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsRepoCuadHonSalir.onClick('dialogsRepoPromCarrera.close()');
    },
    
    resetElements : function(element) {
        var rlx = xmlStructs.createRecordList("rlx");

        if (element == 'org') {
			pcbRepoPromCarreraSuborg.clear();
	  		pcbRepoPromCarreraCarr.clear();
	  		pcbRepoPromCarreraPeriodo.clear();
			pcbRepoPromCarreraPosicion.clear();
	  		pcbRepoPromCarreraPosProm.clear();
	    	if (powerComboBoxRepoAluPorSecOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoPromCarrera, pcbRepoPromCarreraSuborg, 1, 2, powerComboBoxRepoAluPorSecOrganizacion);
		}
		else if (element == 'suborg') {
	  		pcbRepoPromCarreraCarr.clear();
	  		pcbRepoPromCarreraPeriodo.clear();
			pcbRepoPromCarreraPosicion.clear();
	  		pcbRepoPromCarreraPosProm.clear();
	    	if (pcbRepoPromCarreraSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoPromCarrera, pcbRepoPromCarreraCarr, -1, 3, pcbRepoPromCarreraSuborg);
		}
		else if (element == 'carr') {
	  		pcbRepoPromCarreraPeriodo.clear();
			pcbRepoPromCarreraPosicion.clear();
	  		pcbRepoPromCarreraPosProm.clear();
	    	if (pcbRepoPromCarreraCarr.getOption() != "")
	    		Tool.getPowerComboDataFnc('pcbRepoPromCarreraPeriodo.setSelectedIndex(1);' + this.windowName + '.resetElements("per")', 'MantObject', 'getPeriodoXNivelAcad', dialogsRepoPromCarrera, pcbRepoPromCarreraPeriodo, 0, 1, pcbRepoPromCarreraCarr.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
    		rlx.add('reg', pcbRepoPromCarreraCarr.setModeReturnGetText(2));
    		rlx.add('reg', pcbRepoPromCarreraPeriodo);
			Tool.cnnSrv("ReportObject", "getRepoPromAlumPosLap", this.windowName + ".loadDataPos()", rlx);
    	} 
	},
	
	loadDataPos: function() {
		Tool.loadPowerComboData(dialogsRepoPromCarrera, pcbRepoPromCarreraPosicion, 0, 1, json('getMantPensumPosicion'));
		Tool.loadPowerComboData(dialogsRepoPromCarrera, pcbRepoPromCarreraPosProm, 0, 1, json('getMantPensumPosicion'));
	},

	reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
        rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14,'helvetica','bold');
		rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,0.9),true);
		rep.addText(300, 130, 'PROMEDIO DE LA CARRERA',false);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','bold');
        rep.addBar(0,152,1128,220,rep.getRGBAObj(187,196,238,0.8),true);
        rep.addLine(0,146,1128,146,rep.getRGBAObj(210,210,210,1),1,true);
        rep.addLine(0,226,1128,226,rep.getRGBAObj(210,210,210,1),1,true); 
        rep.addText(20, 173, 'ORGANIZACIÓN:          '+pcbRepoPromCarreraOrg.getOption(),true);
		rep.addText(20, 190, 'SUBORGANIZACIÓN:   '+pcbRepoPromCarreraSuborg.getOption(),true);
		rep.addText(20, 207, 'CARRERA:                    '+pcbRepoPromCarreraCarr.getOption(),true);
		rep.addText(480, 207, 'PERIODO: '+pcbRepoPromCarreraPeriodo.getOption(),true);
		//////////////////////////////////////////TABLA DE DATOS///////////////////////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
  		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 9);	
		rep.addTable('tablaPromCarrera',['Nº','C.i.','Apellido','Nombre','Promedio'],392,232);
		rep.setTotalRowTable(40);
		rep.setHeightRow(18);
		rep.setSizeColumnArray([34,100,282,282,98]);
		rep.setAlignData(['right','right','left','left','center']);
		rep.addJsonData('tablaPromCarrera','getRepoPromAlumUniversidad',[0,1,2,3,4]); 
        //////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();    	
	},

    coreUpdate: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (pcbRepoPromCarreraPeriodo.valid(dialogsRepoPromCarrera))  
        	if (pcbRepoPromCarreraCarr.valid(dialogsRepoPromCarrera)) {
			    rlx.add('reg', pcbRepoPromCarreraPosProm);
			    rlx.add('reg', pcbRepoPromCarreraPeriodo);
			    rlx.add('reg', pcbRepoPromCarreraCarr);
			    rlx.add('reg', pcbRepoPromCarreraPosicion);
			    Tool.cnnSrv('ReportObject', 'getRepoPromAlumUniversidad', this.windowName + ".reporte()", rlx);
        	}
    }
}; 

