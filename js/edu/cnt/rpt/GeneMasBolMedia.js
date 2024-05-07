var dialogsGeneMasBolMedia = new Object();
var pcbGeneMasBolMedOrganizacion = new Object();
var pcbGeneMasBolMedSuborganizacion = new Object();
var pcbGeneMasBolMedCarrera = new Object();
var pcbGeneMasBolMedPeriodo = new Object();
var pcbGeneMasBolMedPosicion = new Object();
var pcbGeneMasBolMedLapso = new Object();
var pcbGeneMasBolMedSeccion = new Object();
var pcbGeneMasBolMedTipo = new Object();
var imgButtonsGeneMasBolMedReporte = new Object();
var imgButtonsGeneMasBolMedReporteCodigo = new Object();
var imgButtonsGeneMasBolMedSalir = new Object();
var mwGeneMasBolMedia = new Object();// minWindow

var GeneMasBolMedia = {
	windowName : 'GeneMasBolMedia',
	isCreate : false,
	idPensum : 0,

	show: function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
			this.limpiar('lmp');			
		dialogsGeneMasBolMedia.show();
	},
	
	hide: function(){
		dialogsGeneMasBolMedia.hide();
	},
	
    createMWs: function(){
        mwGeneMasBolMedia = desktop.addMinWindow('G.M.B.Media', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsGeneMasBolMedia.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsGeneMasBolMedia_Init : function() {
        dialogsGeneMasBolMedia.setMinimizeXY(0,0);
        dialogsGeneMasBolMedia.setCenterScreen();
        dialogsGeneMasBolMedia.addSpace(0,0,20);
        dialogsGeneMasBolMedia.addLn(1,1,1);
		var c1 = container.create("c1");
		c1.addObject(pcbGeneMasBolMedOrganizacion, 20, 40);
		c1.addObject(pcbGeneMasBolMedSuborganizacion, 279, 40);
		c1.addObject(pcbGeneMasBolMedCarrera, 560, 40);
		c1.addObject(pcbGeneMasBolMedPeriodo, 20, 65);
		c1.addObject(pcbGeneMasBolMedPosicion, 279, 65);
		c1.addObject(pcbGeneMasBolMedLapso, 560, 65);
		c1.addObject(pcbGeneMasBolMedSeccion, 279, 90);
		c1.addObject(pcbGeneMasBolMedTipo, 560, 90);
		dialogsGeneMasBolMedia.addObjToDialog(c1, 2, 1);
	    dialogsGeneMasBolMedia.addObject(imgButtonsGeneMasBolMedReporte, 158, 128);	
	    dialogsGeneMasBolMedia.addObject(imgButtonsGeneMasBolMedReporteCodigo, 328, 128);	
        dialogsGeneMasBolMedia.addObject(imgButtonsGeneMasBolMedSalir, 498, 128);
    },
  
    create : function() {
    	dialogsGeneMasBolMedia = dialogs.create('dialogsGeneMasBolMedia',0,0,799,140,'GENERADOR MASIVO DE BOLETINES');
    	dialogsGeneMasBolMedia.setAdjY(60);
    	pcbGeneMasBolMedOrganizacion = powerComboBox.create('pcbGeneMasBolMedOrganizacion','pcbGeneMasBolMedOrganizacion','Organización (+):',1,102);
    	pcbGeneMasBolMedOrganizacion.setValidEmpty();
    	pcbGeneMasBolMedOrganizacion.addEmptyOption();
    	pcbGeneMasBolMedOrganizacion.enableReadOnlyEditor();
    	pcbGeneMasBolMedSuborganizacion = powerComboBox.create('pcbGeneMasBolMedSuborganizacion','pcbGeneMasBolMedSuborganizacion','Suborganización (^):',1,123);
    	pcbGeneMasBolMedSuborganizacion.setValidEmpty();
    	pcbGeneMasBolMedSuborganizacion.addEmptyOption();
    	pcbGeneMasBolMedSuborganizacion.enableReadOnlyEditor();
    	pcbGeneMasBolMedCarrera = powerComboBox.create('pcbGeneMasBolMedCarrera','pcbGeneMasBolMedCarrera','Carrera (^):',1,72);
    	pcbGeneMasBolMedCarrera.setValidEmpty();
    	pcbGeneMasBolMedCarrera.addEmptyOption();
    	pcbGeneMasBolMedCarrera.enableReadOnlyEditor();
    	pcbGeneMasBolMedPeriodo = powerComboBox.create('pcbGeneMasBolMedPeriodo','pcbGeneMasBolMedPeriodo','Periodo (^):',1,102);
    	pcbGeneMasBolMedPeriodo.setValidEmpty();
    	pcbGeneMasBolMedPeriodo.addEmptyOption();
    	pcbGeneMasBolMedPeriodo.enableReadOnlyEditor();
    	pcbGeneMasBolMedPosicion = powerComboBox.create('pcbGeneMasBolMedPosicion','pcbGeneMasBolMedPosicion','Posición (^):',1,123);
    	pcbGeneMasBolMedPosicion.setValidEmpty();
    	pcbGeneMasBolMedPosicion.addEmptyOption();
    	pcbGeneMasBolMedPosicion.enableReadOnlyEditor();
    	pcbGeneMasBolMedPosicion.setFieldFind(true);
    	pcbGeneMasBolMedLapso = powerComboBox.create('pcbGeneMasBolMedLapso','pcbGeneMasBolMedLapso','Lapso (^):',1,72);
    	pcbGeneMasBolMedLapso.setValidEmpty();
    	pcbGeneMasBolMedLapso.addEmptyOption();
    	pcbGeneMasBolMedLapso.enableReadOnlyEditor();
    	pcbGeneMasBolMedSeccion = powerComboBox.create('pcbGeneMasBolMedSeccion','pcbGeneMasBolMedSeccion','Sección (*):',1,123);
    	pcbGeneMasBolMedSeccion.setValidEmpty();
    	pcbGeneMasBolMedSeccion.addEmptyOption();
    	pcbGeneMasBolMedSeccion.enableReadOnlyEditor();
    	pcbGeneMasBolMedSeccion.setDataType('string');
    	pcbGeneMasBolMedSeccion.setFieldFind(true);
    	pcbGeneMasBolMedTipo = powerComboBox.create('pcbGeneMasBolMedTipo','pcbGeneMasBolMedTipo','Tipo de Boletín:',1,100);
    	pcbGeneMasBolMedTipo.setWidthCombo(100);
    	pcbGeneMasBolMedTipo.setValidEmpty();
    	pcbGeneMasBolMedTipo.addEmptyOption();
    	pcbGeneMasBolMedTipo.enableReadOnlyEditor();
    	pcbGeneMasBolMedTipo.hide();
    	pcbGeneMasBolMedTipo.addOptionAndSimpleValue(null, 'Lapso', 'Lapso');
    	pcbGeneMasBolMedTipo.addOptionAndSimpleValue(null, 'Final', 'Final');
    	imgButtonsGeneMasBolMedReporte = imgButtons.create('imgButtonsGeneMasBolMedReporte','Boletín','generar_1.png');
    	imgButtonsGeneMasBolMedReporteCodigo = imgButtons.create('imgButtonsGeneMasBolMedReporteCodigo','Boletín Código','concepto_1.png');
    	imgButtonsGeneMasBolMedSalir = imgButtons.create('imgButtonsGeneMasBolMedSalir','Salir','salir.png');
        imgButtonsGeneMasBolMedReporte.setDimension(150,22);
        imgButtonsGeneMasBolMedReporteCodigo.setDimension(150,22);
        imgButtonsGeneMasBolMedSalir.setDimension(150,22);
    },

    init : function() {
    	this.create();
    	this.setEvents();
    	this.dialogsGeneMasBolMedia_Init();  
    	this.createMWs();
    },

	limpiar: function(tipo) {
  		pcbGeneMasBolMedOrganizacion.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbGeneMasBolMedSuborganizacion);
  		Tool.rstPwrCmb(pcbGeneMasBolMedCarrera);
  		Tool.rstPwrCmb(pcbGeneMasBolMedPeriodo);
  		Tool.rstPwrCmb(pcbGeneMasBolMedPosicion);
  		Tool.rstPwrCmb(pcbGeneMasBolMedLapso);
  		Tool.rstPwrCmb(pcbGeneMasBolMedSeccion);
  		dialogsGeneMasBolMedia.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},
	
	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsGeneMasBolMedia, pcbGeneMasBolMedOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsGeneMasBolMedia, pcbGeneMasBolMedOrganizacion, pcbGeneMasBolMedSuborganizacion, pcbGeneMasBolMedCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function(){
  		imgButtonsGeneMasBolMedReporte.onClick(this.windowName + ".coreUpdate('')");
  		imgButtonsGeneMasBolMedReporteCodigo.onClick(this.windowName + ".coreUpdate('cod')");
        imgButtonsGeneMasBolMedSalir.onClick('dialogsGeneMasBolMedia.close()');
		pcbGeneMasBolMedOrganizacion.onChange(this.windowName + ".resetElements('org')");
		pcbGeneMasBolMedSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		pcbGeneMasBolMedCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbGeneMasBolMedPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbGeneMasBolMedPosicion.onChange(this.windowName + ".resetElements('pos')");
		pcbGeneMasBolMedLapso.onChange(this.windowName + ".resetElements('lap')");
    },
    
	resetElements: function(element) {
		pcbGeneMasBolMedTipo.hide();
		if (element == 'org') {
			Tool.rstPwrCmb(pcbGeneMasBolMedSuborganizacion);
	  		Tool.rstPwrCmb(pcbGeneMasBolMedCarrera);
	  		Tool.rstPwrCmb(pcbGeneMasBolMedPeriodo);
			Tool.rstPwrCmb(pcbGeneMasBolMedPosicion);
			Tool.rstPwrCmb(pcbGeneMasBolMedLapso);
			Tool.rstPwrCmb(pcbGeneMasBolMedSeccion);
	    	if (pcbGeneMasBolMedOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsGeneMasBolMedia, pcbGeneMasBolMedSuborganizacion, 1, 2, pcbGeneMasBolMedOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbGeneMasBolMedCarrera);
	  		Tool.rstPwrCmb(pcbGeneMasBolMedPeriodo);
			Tool.rstPwrCmb(pcbGeneMasBolMedPosicion);
			Tool.rstPwrCmb(pcbGeneMasBolMedLapso);
			Tool.rstPwrCmb(pcbGeneMasBolMedSeccion);
	    	if (pcbGeneMasBolMedSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsGeneMasBolMedia, pcbGeneMasBolMedCarrera, -1, 3, pcbGeneMasBolMedSuborganizacion);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbGeneMasBolMedPeriodo);
			Tool.rstPwrCmb(pcbGeneMasBolMedPosicion);
			Tool.rstPwrCmb(pcbGeneMasBolMedLapso);
			Tool.rstPwrCmb(pcbGeneMasBolMedSeccion);
	    	if (pcbGeneMasBolMedCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsGeneMasBolMedia, pcbGeneMasBolMedPeriodo, 0, 1, pcbGeneMasBolMedCarrera.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
			Tool.rstPwrCmb(pcbGeneMasBolMedLapso);
			Tool.rstPwrCmb(pcbGeneMasBolMedSeccion);
	    	Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsGeneMasBolMedia, pcbGeneMasBolMedPosicion, 0, 1, pcbGeneMasBolMedCarrera.setModeReturnGetText(2));        		
    	} 
    	else if (element == 'pos') {
			Tool.rstPwrCmb(pcbGeneMasBolMedSeccion);
			if (pcbGeneMasBolMedLapso.getOption() == "")
				Tool.getPowerComboData('MantObject', 'getMantLapso', dialogsGeneMasBolMedia, pcbGeneMasBolMedLapso, -1, 0, pcbGeneMasBolMedPeriodo);
			else
	    		Tool.getPowerComboData('ReportObject', 'getRepoListAlumnoCursoSeccion', dialogsGeneMasBolMedia, pcbGeneMasBolMedSeccion, 0, 1, pcbGeneMasBolMedCarrera.setModeReturnGetText(2), pcbGeneMasBolMedPosicion, pcbGeneMasBolMedPeriodo);  	
    	} 
    	else if (element == 'lap') {
			if (pcbGeneMasBolMedLapso.getOption() == '3er Momento' && parseInt(pcbGeneMasBolMedCarrera.setModeReturnGetText(7).getText()) == 2)
    			pcbGeneMasBolMedTipo.show();
    		Tool.getPowerComboData('ReportObject', 'getRepoListAlumnoCursoSeccion', dialogsGeneMasBolMedia, pcbGeneMasBolMedSeccion, 0, 1, pcbGeneMasBolMedCarrera.setModeReturnGetText(2), pcbGeneMasBolMedPosicion, pcbGeneMasBolMedPeriodo);  	
    	} 
	},
	
	coreUpdate: function(process) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbGeneMasBolMedOrganizacion.valid(dialogsGeneMasBolMedia))
			if (pcbGeneMasBolMedSuborganizacion.valid(dialogsGeneMasBolMedia))
				if (pcbGeneMasBolMedCarrera.valid(dialogsGeneMasBolMedia))
					if (pcbGeneMasBolMedPeriodo.valid(dialogsGeneMasBolMedia))
						if (pcbGeneMasBolMedPosicion.valid(dialogsGeneMasBolMedia))
							if (pcbGeneMasBolMedLapso.valid(dialogsGeneMasBolMedia)) {
								if (process != 'cod') {
									rlx.add('reg', pcbGeneMasBolMedPeriodo);
									rlx.add('reg', pcbGeneMasBolMedLapso.setModeReturnGetText(3));
									rlx.add('reg', pcbGeneMasBolMedPosicion);
									rlx.add('reg', pcbGeneMasBolMedSeccion);
									rlx.add('reg', pcbGeneMasBolMedLapso.setModeReturnGetText(6));//recomendacion
									rlx.addInt('reg', -1, true);//persona
									if (parseInt(pcbGeneMasBolMedCarrera.setModeReturnGetText(7).getText()) == 2) {//CARRERA PRIMARIA
										if (pcbGeneMasBolMedLapso.getOption() == '3er Momento') {
											if (pcbGeneMasBolMedTipo.valid(dialogsGeneMasBolMedia)) {
												if (pcbGeneMasBolMedTipo.getOption() == 'Final') {
													rlx = xmlStructs.createRecordList("rlx");
													rlx.add('reg', pcbGeneMasBolMedPeriodo);
													rlx.addInt('reg', -1,true);//idPersona
													rlx.add('reg', pcbGeneMasBolMedPosicion);
													rlx.add('reg', pcbGeneMasBolMedSeccion);
													Tool.cnnSrv('ReportObject', 'getBoletinFinal', 'dlgWait.hide()', rlx);
												}
												else {
													rlx.add('reg', pcbGeneMasBolMedCarrera.setModeReturnGetText(2));
													Tool.cnnSrv('ReportObject', 'getMasivoPrimaria', 'dlgWait.hide()', rlx);
												}
											}
										}
										else {
											rlx.add('reg', pcbGeneMasBolMedCarrera.setModeReturnGetText(2));
											Tool.cnnSrv('ReportObject', 'getMasivoPrimaria', 'dlgWait.hide()', rlx);
										}
									}
									else if (parseInt(pcbGeneMasBolMedCarrera.setModeReturnGetText(7).getText()) == 1) {//CARRERA INICIAL
										Tool.cnnSrv('ReportObject', 'getMasivoInicial', 'dlgWait.hide()', rlx);
									}
									else {//CARRERA BACHILLERATO
										rlx.add('reg', pcbGeneMasBolMedCarrera.setModeReturnGetText(2));
										Tool.cnnSrv('ReportObject', 'getMasivoBachillerato', 'dlgWait.hide()', rlx);
									}
								}
								else {
									rlx.add('reg', pcbGeneMasBolMedPeriodo);
    								rlx.add('reg', pcbGeneMasBolMedLapso.setModeReturnGetText(3));
    								rlx.add('reg', pcbGeneMasBolMedPosicion);
    								rlx.add('reg', pcbGeneMasBolMedSeccion);
    								rlx.addInt('reg', -1, true);
									Tool.cnnSrv('ReportObject', 'getMasivoPrimariaCodificado', 'dlgWait.hide()', rlx);
								}
						}
  	 } 
};