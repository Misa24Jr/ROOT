var dialogsRepoCuadHonor = new Object();
var powerComboBoxRepoCuaHonOrganizacion = new Object();
var powerComboBoxRepoCuaHonSuborganizacion = new Object();
var powerComboBoxRepoCuaHonCarrera = new Object();
var powerComboBoxRepoCuaHonLapso = new Object();
var powerComboBoxRepoCuaHonPeriodo = new Object();
var powerComboBoxRepoCuaHonPosicion = new Object();
var powerComboBoxRepoCuaHonSeccion = new Object();
var editsRepoCuaHonPromedio = new Object();
var selectsRepoCuaMIM = new Object();
var imgButtonsRepoCuadHonReporte = new Object();
var imgButtonsRepoCuadHonSalir = new Object();
var mwRepoCuadHonor = new Object();// minWindow

var RepoCuadHonor = {
    windowName: 'RepoCuadHonor',
    isCreate: false,
	
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoCuadHonor.isByClean()) 
            this.limpiar('lmp');
        dialogsRepoCuadHonor.show();
    },
    
    hide: function(){
        dialogsRepoCuadHonor.hide();
    },
    
    createMWs: function(){
        mwRepoCuadHonor = desktop.addMinWindow('R.C.Honor', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoCuadHonor.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    showPeriodo : function(){
    	powerComboBoxRepoCuaHonLapso.hide();	
    	powerComboBoxRepoCuaHonPeriodo.show();
	},
	
	showLapso : function(){
		powerComboBoxRepoCuaHonLapso.show();	
	},	

    dialogsRepoCuadHonor_Init: function(){
        dialogsRepoCuadHonor.setMinimizeXY(0, 0);
        dialogsRepoCuadHonor.setCenterScreen();    
		dialogsRepoCuadHonor.addObject(powerComboBoxRepoCuaHonOrganizacion, 20, 35);
		dialogsRepoCuadHonor.addObject(powerComboBoxRepoCuaHonSuborganizacion, 290, 35);
        dialogsRepoCuadHonor.addObject(powerComboBoxRepoCuaHonCarrera, 580, 35);
        dialogsRepoCuadHonor.addObject(powerComboBoxRepoCuaHonPeriodo, 20, 60);
        dialogsRepoCuadHonor.addObject(powerComboBoxRepoCuaHonPosicion, 290, 60);
        dialogsRepoCuadHonor.addObject(powerComboBoxRepoCuaHonSeccion, 580, 60);
        dialogsRepoCuadHonor.addObject(powerComboBoxRepoCuaHonLapso, 20, 85);
        dialogsRepoCuadHonor.addObject(editsRepoCuaHonPromedio, 290, 86);
        dialogsRepoCuadHonor.addObject(selectsRepoCuaMIM, 412, 85);
        selectsRepoCuaMIM.addOption('>=','>=');
        selectsRepoCuaMIM.addOption('<=','<=');
        dialogsRepoCuadHonor.addObject(imgButtonsRepoCuadHonReporte, 298, 113);
        dialogsRepoCuadHonor.addObject(imgButtonsRepoCuadHonSalir, 429, 113);
        imgButtonsRepoCuadHonReporte.setDimension(90, 22);
        imgButtonsRepoCuadHonSalir.setDimension(90, 22);
        
    },
	
    create: function() {
        dialogsRepoCuadHonor = dialogs.create('dialogsRepoCuadHonor', 0, 0, 819, 122, 'REPORTE CUADRO DE HONOR');
        dialogsRepoCuadHonor.setAdjY(60);
        powerComboBoxRepoCuaHonOrganizacion = powerComboBox.create('powerComboBoxRepoCuaHonOrganizacion', 'powerComboBoxRepoCuaHonOrganizacion', 'Organización (+):', 1,102);
        powerComboBoxRepoCuaHonOrganizacion.enableReadOnlyEditor();
        powerComboBoxRepoCuaHonOrganizacion.addEmptyOption();
        powerComboBoxRepoCuaHonOrganizacion.setValidEmpty();
        powerComboBoxRepoCuaHonLapso = powerComboBox.create('powerComboBoxRepoCuaHonLapso', 'powerComboBoxRepoCuaHonLapso', 'Lapso (+):', 1,102);
        powerComboBoxRepoCuaHonLapso.enableReadOnlyEditor();
        powerComboBoxRepoCuaHonLapso.addEmptyOption();
        powerComboBoxRepoCuaHonLapso.setValidEmpty();
        powerComboBoxRepoCuaHonSuborganizacion = powerComboBox.create('powerComboBoxRepoCuaHonSuborganizacion', 'powerComboBoxRepoCuaHonSuborganizacion', 'Suborganizacion (^):', 1,122);
        powerComboBoxRepoCuaHonSuborganizacion.enableReadOnlyEditor();
        powerComboBoxRepoCuaHonSuborganizacion.addEmptyOption();
        powerComboBoxRepoCuaHonSuborganizacion.setValidEmpty();
        powerComboBoxRepoCuaHonCarrera = powerComboBox.create('powerComboBoxRepoCuaHonCarrera', 'powerComboBoxRepoCuaHonCarrera', 'Carrera (^):', 1,71);
        powerComboBoxRepoCuaHonCarrera.enableReadOnlyEditor();
        powerComboBoxRepoCuaHonCarrera.addEmptyOption();
        powerComboBoxRepoCuaHonCarrera.setValidEmpty();
        powerComboBoxRepoCuaHonPeriodo = powerComboBox.create('powerComboBoxRepoCuaHonPeriodo', 'powerComboBoxRepoCuaHonPeriodo', 'Periodo (^):', 1,102);
        powerComboBoxRepoCuaHonPeriodo.enableReadOnlyEditor();
        powerComboBoxRepoCuaHonPeriodo.addEmptyOption();
        powerComboBoxRepoCuaHonPeriodo.setValidEmpty();
        powerComboBoxRepoCuaHonPosicion = powerComboBox.create('powerComboBoxRepoCuaHonPosicion','powerComboBoxRepoCuaHonPosicion','Posición (*):',1,123);
    	powerComboBoxRepoCuaHonPosicion.enableReadOnlyEditor();
    	powerComboBoxRepoCuaHonPosicion.addEmptyOption();
    	powerComboBoxRepoCuaHonPosicion.setValidEmpty();
    	powerComboBoxRepoCuaHonPosicion.setFieldFind(true);
    	powerComboBoxRepoCuaHonSeccion = powerComboBox.create('powerComboBoxRepoCuaHonSeccion','powerComboBoxRepoCuaHonSeccion','Sección (*):',1,71);
    	powerComboBoxRepoCuaHonSeccion.enableReadOnlyEditor();
    	powerComboBoxRepoCuaHonSeccion.addEmptyOption();
    	powerComboBoxRepoCuaHonSeccion.setValidEmpty();
    	powerComboBoxRepoCuaHonSeccion.setDataType("string");
    	powerComboBoxRepoCuaHonSeccion.setFieldFind(true);
        editsRepoCuaHonPromedio = edits.create('editsRepoCuaHonPromedio','editsRepoCuaHonPromedio','Promedio (+):',1,170,'normal');
      	editsRepoCuaHonPromedio.setValidEmpty();
		editsRepoCuaHonPromedio.setSizeEdit(34);
		editsRepoCuaHonPromedio.setMaxLength(5);
		editsRepoCuaHonPromedio.setDataType('float');
        selectsRepoCuaMIM = selects.create('selectsRepoCuaMIM', 'selectsRepoCuaMIM','',0);
        imgButtonsRepoCuadHonReporte = imgButtons.create('imgButtonsRepoCuadHonReporte', 'Reporte', 'ok.png');
        imgButtonsRepoCuadHonSalir = imgButtons.create('imgButtonsRepoCuadHonSalir', 'Salir', 'salir.png');
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsRepoCuadHonor_Init();
        this.createMWs();
    },
    
    limpiar : function(tipo) {
  		powerComboBoxRepoCuaHonOrganizacion.setSelectedIndex(0);
  		selectsRepoCuaMIM.setSelectedIndex(0);
  		Tool.rstPwrCmb(powerComboBoxRepoCuaHonSuborganizacion);
  		Tool.rstPwrCmb(powerComboBoxRepoCuaHonCarrera);
  		Tool.rstPwrCmb(powerComboBoxRepoCuaHonPeriodo);
  		Tool.rstPwrCmb(powerComboBoxRepoCuaHonPosicion);
  		Tool.rstPwrCmb(powerComboBoxRepoCuaHonSeccion);
  		dialogsRepoCuadHonor.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},

	loadDataInit: function() {
		this.showPeriodo();
		Tool.loadPowerComboData(dialogsRepoCuadHonor, powerComboBoxRepoCuaHonOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoCuadHonor, powerComboBoxRepoCuaHonOrganizacion, powerComboBoxRepoCuaHonSuborganizacion, powerComboBoxRepoCuaHonCarrera, this.windowName + ".resetElements('carr')");
	},
    
    setEvents: function(){
		powerComboBoxRepoCuaHonOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxRepoCuaHonSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		powerComboBoxRepoCuaHonCarrera.onChange(this.windowName + ".resetElements('carr')");
		powerComboBoxRepoCuaHonPeriodo.onChange(this.windowName + ".resetElements('per')");	
		powerComboBoxRepoCuaHonPosicion.onChange(this.windowName + ".resetElements('pos')");
    	imgButtonsRepoCuadHonReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsRepoCuadHonSalir.onClick('dialogsRepoCuadHonor.close()');
    },
    
    resetElements : function(element) {
        var rlx = xmlStructs.createRecordList("rlx");

        if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxRepoCuaHonSuborganizacion);
	  		Tool.rstPwrCmb(powerComboBoxRepoCuaHonCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoCuaHonPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoCuaHonPosicion);
	    	if (powerComboBoxRepoAluPorSecOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoCuadHonor, powerComboBoxRepoCuaHonSuborganizacion, 1, 2, powerComboBoxRepoAluPorSecOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(powerComboBoxRepoCuaHonCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoCuaHonPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoCuaHonPosicion);
	    	if (powerComboBoxRepoCuaHonSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoCuadHonor, powerComboBoxRepoCuaHonCarrera, -1, 3, powerComboBoxRepoCuaHonSuborganizacion);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(powerComboBoxRepoCuaHonPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoCuaHonPosicion);
	    	if (powerComboBoxRepoCuaHonCarrera.getOption() != "")
	    		
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoCuadHonor, powerComboBoxRepoCuaHonPeriodo, 0, 1, powerComboBoxRepoCuaHonCarrera.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
	    	if (powerComboBoxRepoCuaHonCarrera.setModeReturnGetText(5).getText()==1) {
	    		this.showLapso();	
	    		
	    		rlx.add('reg', powerComboBoxRepoCuaHonCarrera.setModeReturnGetText(2));
	    		rlx.add('reg', powerComboBoxRepoCuaHonPeriodo);
				Tool.cnnSrv("ReportObject", "getRepoPromAlumPosLap", this.windowName + ".loadDataPosLap()", rlx);
	    	}
    	} 
    	else if (element == 'pos') {
          	Tool.getPowerComboData('MantObject', 'getMantProyAulaSeccion', dialogsRepoCuadHonor, powerComboBoxRepoCuaHonSeccion, 0, 1, powerComboBoxRepoCuaHonCarrera, powerComboBoxRepoCuaHonPeriodo, powerComboBoxRepoCuaHonPosicion);  
    	}  
	},
	
	loadDataPosLap: function() {
		Tool.loadPowerComboData(dialogsRepoCuadHonor, powerComboBoxRepoCuaHonPosicion, 0, 1, json('getMantPensumPosicion'));
		Tool.loadPowerComboData(dialogsRepoCuadHonor, powerComboBoxRepoCuaHonLapso, 3, 0, json('getMantLapso'));
	},

	reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
        rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14,'helvetica','bold');
		rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,0.9),true);
		rep.addText(300, 130, 'CUADRO DE HONOR',false);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','bold');
        rep.addBar(0,152,1128,220,rep.getRGBAObj(187,196,238,0.8),true);
        rep.addLine(0,146,1128,146,rep.getRGBAObj(210,210,210,1),1,true);
        rep.addLine(0,226,1128,226,rep.getRGBAObj(210,210,210,1),1,true); 
        rep.addText(20, 173, 'ORGANIZACIÓN:          '+powerComboBoxRepoCuaHonOrganizacion.getOption(),true);
		rep.addText(20, 190, 'SUBORGANIZACIÓN:   '+powerComboBoxRepoCuaHonSuborganizacion.getOption(),true);
		rep.addText(20, 207, 'CARRERA:                    '+powerComboBoxRepoCuaHonCarrera.getOption(),true);
		rep.addText(480, 207, 'PERIODO: '+powerComboBoxRepoCuaHonPeriodo.getOption(),true);
		//////////////////////////////////////////TABLA DE DATOS///////////////////////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
  		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 9);	
		rep.addTable('tablaCuadHonor',['C.i.','Apellido','Nombre','Posición','Sección','Promedio'],390,232);
		rep.setTotalRowTable(40);
		rep.setHeightRow(18);
		rep.setSizeColumnArray([100,200,200,120,100,80]);
		rep.setAlignData(['center','left','left','left','center','center']);
		rep.addJsonData('tablaCuadHonor','getRepoPromAlumColegio',[0,1,2,3,4,5]); 
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
        
		if (powerComboBoxRepoCuaHonPeriodo.valid(dialogsRepoCuadHonor)) { 
        	if (powerComboBoxRepoCuaHonCarrera.setModeReturnGetText(5).getText() == 1) {//MEDIA
        		if (powerComboBoxRepoCuaHonLapso.valid(dialogsRepoCuadHonor)) { 
				    rlx.add('reg', powerComboBoxRepoCuaHonPeriodo);
				    rlx.add('reg', powerComboBoxRepoCuaHonLapso);
				    rlx.add('reg', powerComboBoxRepoCuaHonCarrera.setModeReturnGetText(2));
				    rlx.add('reg', powerComboBoxRepoCuaHonPosicion);
				    rlx.add('reg', powerComboBoxRepoCuaHonSeccion);
				    rlx.addStr('reg', selectsRepoCuaMIM.getSelect().value);
				    rlx.add('reg', editsRepoCuaHonPromedio);
				    Tool.cnnSrv('ReportObject', 'getRepoPromAlumColegio', this.windowName + ".reporte('getRepoPromAlumColegio')", rlx);
        		}
        	}
        	else {//PREGRADO-POSTGRADO
			    rlx.add('reg', powerComboBoxRepoCuaHonPeriodo);
			    rlx.add('reg', editsRepoCuaHonPromedio);
			    Tool.cnnSrv('ReportObject', 'getRepoPromAlumUniversidad', this.windowName + ".reporte('getRepoPromAlumUniversidad')", rlx); 
        	}
    	}
    }
}; 

