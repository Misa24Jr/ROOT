var dialogsRepoLisAluCurso = new Object();
var powerComboBoxRepoLisAluCurOrganizacion = new Object();
var powerComboBoxRepoLisAluCurSuborganizacion = new Object();
var powerComboBoxRepoLisAluCurCarrera = new Object();
var powerComboBoxRepoLisAluCurPeriodo = new Object();
var powerComboBoxRepoLisAluCurPosicion = new Object();
var powerComboBoxRepoLisAluCurMateria = new Object();
var powerComboBoxRepoLisAluCurSeccion = new Object();
var imgButtonsRepoLisAluCurSeccion = new Object();
var imgButtonsRepoLisAluCurSalir = new Object();
var mw_RepoLisAluCurso = new Object();//minWindow

var RepoLisAluCurso = {
    windowName: 'RepoLisAluCurso',
    isCreate: false,
    
    show: function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
			this.limpiar('lmp');			
		dialogsRepoLisAluCurso.show();
	},
	
	hide: function(){
		dialogsRepoLisAluCurso.hide();
	},
	
    createMWs: function(){
        mwRepoLisAluCurso = desktop.addMinWindow('Est.Secc.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoLisAluCurso.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRepoLisAluCurso_Init: function(){
        dialogsRepoLisAluCurso.setMinimizeXY(0,0);
        dialogsRepoLisAluCurso.setCenterScreen();
        dialogsRepoLisAluCurso.addSpace(0,0,20);
        dialogsRepoLisAluCurso.addLn(1,1,1);
		dialogsRepoLisAluCurso.setHeightCell(1,1,10);
        dialogsRepoLisAluCurso.addObjToDialog(powerComboBoxRepoLisAluCurOrganizacion,2,1,24);
        dialogsRepoLisAluCurso.addObjToDialog(powerComboBoxRepoLisAluCurSuborganizacion,2,1,24);
        dialogsRepoLisAluCurso.addObjToDialog(powerComboBoxRepoLisAluCurCarrera,2,1,24);
        dialogsRepoLisAluCurso.adjAllMarginObj(2,1,15);
        dialogsRepoLisAluCurso.addObjToDialog(powerComboBoxRepoLisAluCurPeriodo,3,1,24);
        dialogsRepoLisAluCurso.addObjToDialog(powerComboBoxRepoLisAluCurPosicion,3,1,24);
        dialogsRepoLisAluCurso.adjAllMarginObj(3,1,15);
        dialogsRepoLisAluCurso.addObjToDialog(powerComboBoxRepoLisAluCurMateria,4,1,24);
        dialogsRepoLisAluCurso.addObjToDialog(powerComboBoxRepoLisAluCurSeccion,4,1,24);
        dialogsRepoLisAluCurso.adjAllMarginObj(4,1,15);
        dialogsRepoLisAluCurso.addLn(5,1,1);
		dialogsRepoLisAluCurso.setHeightCell(5,1,9);
        dialogsRepoLisAluCurso.addObjToDialog(imgButtonsRepoLisAluCurSeccion,6,1);
        dialogsRepoLisAluCurso.addObjToDialog(imgButtonsRepoLisAluCurSalir,6,1);
        dialogsRepoLisAluCurso.adjAllMarginObj(6,1,30);
        dialogsRepoLisAluCurso.leftMarginObj(6,1,0,282);
	},
 
	create: function(){
		dialogsRepoLisAluCurso = dialogs.create('dialogsRepoLisAluCurso',0,0,820,127,'LISTADO DE ESTUDIANTES POR CURSO');
		dialogsRepoLisAluCurso.setAdjY(70);
		powerComboBoxRepoLisAluCurOrganizacion = powerComboBox.create('powerComboBoxRepoLisAluCurOrganizacion','powerComboBoxRepoLisAluCurOrganizacion','Organización (+):',1,103);
		powerComboBoxRepoLisAluCurOrganizacion.enableReadOnlyEditor();
		powerComboBoxRepoLisAluCurOrganizacion.addEmptyOption();
		powerComboBoxRepoLisAluCurOrganizacion.setValidEmpty();
		powerComboBoxRepoLisAluCurSuborganizacion = powerComboBox.create('powerComboBoxRepoLisAluCurSuborganizacion','powerComboBoxRepoLisAluCurSuborganizacion','Suborganización (^):',1,123);
		powerComboBoxRepoLisAluCurSuborganizacion.enableReadOnlyEditor();
		powerComboBoxRepoLisAluCurSuborganizacion.addEmptyOption();
		powerComboBoxRepoLisAluCurSuborganizacion.setValidEmpty();
		powerComboBoxRepoLisAluCurCarrera = powerComboBox.create('powerComboBoxRepoLisAluCurCarrera','powerComboBoxRepoLisAluCurCarrera','Carrera (^):',1,75);
		powerComboBoxRepoLisAluCurCarrera.enableReadOnlyEditor();
		powerComboBoxRepoLisAluCurCarrera.addEmptyOption();
		powerComboBoxRepoLisAluCurCarrera.setValidEmpty();
		powerComboBoxRepoLisAluCurPeriodo = powerComboBox.create('powerComboBoxRepoLisAluCurPeriodo','powerComboBoxRepoLisAluCurPeriodo','Periodo (^):',1,103);
		powerComboBoxRepoLisAluCurPeriodo.enableReadOnlyEditor();
		powerComboBoxRepoLisAluCurPeriodo.addEmptyOption();
		powerComboBoxRepoLisAluCurPeriodo.setValidEmpty();
		powerComboBoxRepoLisAluCurPosicion = powerComboBox.create('powerComboBoxRepoLisAluCurPosicion','powerComboBoxRepoLisAluCurPosicion','Posición (^):',1,123);
		powerComboBoxRepoLisAluCurPosicion.enableReadOnlyEditor();
		powerComboBoxRepoLisAluCurPosicion.addEmptyOption();
		powerComboBoxRepoLisAluCurPosicion.setValidEmpty();
		powerComboBoxRepoLisAluCurSeccion = powerComboBox.create('powerComboBoxRepoLisAluCurSeccion','powerComboBoxRepoLisAluCurSeccion','Sección (*):',1,75);
		powerComboBoxRepoLisAluCurSeccion.enableReadOnlyEditor();
		powerComboBoxRepoLisAluCurSeccion.addEmptyOption();
		powerComboBoxRepoLisAluCurSeccion.setValidEmpty();
		powerComboBoxRepoLisAluCurSeccion.setDataType('string');
		powerComboBoxRepoLisAluCurSeccion.setFieldFind(true);
		powerComboBoxRepoLisAluCurMateria = powerComboBox.create('powerComboBoxRepoLisAluCurMateria','powerComboBoxRepoLisAluCurMateria','Materia (*):',1,103);
		powerComboBoxRepoLisAluCurMateria.enableReadOnlyEditor();
		powerComboBoxRepoLisAluCurMateria.addEmptyOption();
		powerComboBoxRepoLisAluCurMateria.setValidEmpty();
		powerComboBoxRepoLisAluCurMateria.setDataType('string');
		powerComboBoxRepoLisAluCurMateria.setFieldFind(true);
        powerComboBoxRepoLisAluCurMateria.setWidthCombo(416);
		imgButtonsRepoLisAluCurSeccion = imgButtons.create('imgButtonsRepoLisAluCurSeccion','Reporte','print.png');
		imgButtonsRepoLisAluCurSalir = imgButtons.create('imgButtonsRepoLisAluCurSalir','Salir','salir.png');
    	imgButtonsRepoLisAluCurSeccion.setDimension(90,22);
    	imgButtonsRepoLisAluCurSalir.setDimension(90,22);
	},

	init: function(){
		this.create();
		this.setEvents();
		this.dialogsRepoLisAluCurso_Init();
		this.createMWs();
	},
  
	limpiar: function(tipo) {
  		powerComboBoxRepoLisAluCurOrganizacion.setSelectedIndex(0);
  		Tool.rstPwrCmb(powerComboBoxRepoLisAluCurSuborganizacion);
  		Tool.rstPwrCmb(powerComboBoxRepoLisAluCurCarrera);
  		Tool.rstPwrCmb(powerComboBoxRepoLisAluCurPeriodo);
  		dialogsRepoLisAluCurso.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoLisAluCurso, powerComboBoxRepoLisAluCurOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoLisAluCurso, powerComboBoxRepoLisAluCurOrganizacion, powerComboBoxRepoLisAluCurSuborganizacion, powerComboBoxRepoLisAluCurCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function(){
    	imgButtonsRepoLisAluCurSeccion.onClick(this.windowName + ".coreUpdate()");
        imgButtonsRepoLisAluCurSalir.onClick('dialogsRepoLisAluCurso.close()');
		powerComboBoxRepoLisAluCurOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxRepoLisAluCurSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		powerComboBoxRepoLisAluCurCarrera.onChange(this.windowName + ".resetElements('carr')");
		powerComboBoxRepoLisAluCurPeriodo.onChange(this.windowName + ".resetElements('per')");
		powerComboBoxRepoLisAluCurPosicion.onChange(this.windowName + ".resetElements('pos')");
    },
    
    resetElements: function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxRepoLisAluCurSuborganizacion);
	  		Tool.rstPwrCmb(powerComboBoxRepoLisAluCurCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoLisAluCurPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoLisAluCurPosicion);
			Tool.rstPwrCmb(powerComboBoxRepoLisAluCurSeccion);
	  		Tool.rstPwrCmb(powerComboBoxRepoLisAluCurMateria);
	    	if (powerComboBoxRepoLisAluCurOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoLisAluCurso, powerComboBoxRepoLisAluCurSuborganizacion, 1, 2, powerComboBoxRepoLisAluCurOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(powerComboBoxRepoLisAluCurCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoLisAluCurPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoLisAluCurPosicion);
			Tool.rstPwrCmb(powerComboBoxRepoLisAluCurSeccion);
	  		Tool.rstPwrCmb(powerComboBoxRepoLisAluCurMateria);
	    	if (powerComboBoxRepoLisAluCurSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoLisAluCurso, powerComboBoxRepoLisAluCurCarrera, -1, 3, powerComboBoxRepoLisAluCurSuborganizacion);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(powerComboBoxRepoLisAluCurPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoLisAluCurPosicion);
			Tool.rstPwrCmb(powerComboBoxRepoLisAluCurSeccion);
	  		Tool.rstPwrCmb(powerComboBoxRepoLisAluCurMateria);
	    	if (powerComboBoxRepoLisAluCurCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoLisAluCurso, powerComboBoxRepoLisAluCurPeriodo, 0, 1, powerComboBoxRepoLisAluCurCarrera.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
			Tool.rstPwrCmb(powerComboBoxRepoLisAluCurSeccion);
	  		Tool.rstPwrCmb(powerComboBoxRepoLisAluCurMateria);
	    	Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsRepoLisAluCurso, powerComboBoxRepoLisAluCurPosicion, 0, 1, powerComboBoxRepoLisAluCurCarrera.setModeReturnGetText(2));        		
    	} 
    	else if (element == 'pos') {
    		var rlx = xmlStructs.createRecordList("rlx");

    		rlx.add('reg', powerComboBoxRepoLisAluCurCarrera.setModeReturnGetText(2));
    		rlx.add('reg', powerComboBoxRepoLisAluCurPosicion);
    		rlx.add('reg', powerComboBoxRepoLisAluCurPeriodo);
    		Tool.cnnSrv("ReportObject", "getRepoListAlumnoCursoSeccion", this.windowName + ".loadDataSeccionMateria()", rlx);
    	} 
	},
	
	loadDataSeccionMateria: function() {
		Tool.loadPowerComboData(dialogsRepoLisAluCurso, powerComboBoxRepoLisAluCurSeccion, 0, 1, json('getRepoListAlumnoCursoSeccion'));
  		Tool.loadPowerComboData(dialogsRepoLisAluCurso, powerComboBoxRepoLisAluCurMateria, 0, 1, json('getMantPensumMateriaActivaSinPeriodo'));
	},
	
	reporte: function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,0);
        //rep.setNoRepeatHead();
        //rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),13,'courier','bold');
        rep.addBar(0,0,1128,37,rep.getRGBAObj(180,180,180,0.8),false);
		rep.addText(235, 25, 'LISTADO DE ALUMNOS POR CURSO',false);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','normal');
        rep.addBar(0,42,1128,103,rep.getRGBAObj(187,196,238,0.4),false);
		rep.addText(20, 62, 'ORGANIZACION:          '+powerComboBoxRepoLisAluCurOrganizacion.getOption(),false);
		rep.addText(20, 79, 'SUBORGANIZACION:   '+powerComboBoxRepoLisAluCurSuborganizacion.getOption(),false);
		rep.addText(20, 96, 'ESCUELA:                     '+powerComboBoxRepoLisAluCurCarrera.getOption(),false);
		rep.addText(400, 62, 'PERIODO:   '+powerComboBoxRepoLisAluCurPeriodo.getOption(),false);
		rep.addText(400, 79, 'POSICION:  '+powerComboBoxRepoLisAluCurPosicion.getOption(),false);
		rep.addText(400, 96, 'MATERIA:   '+powerComboBoxRepoLisAluCurMateria.getOption(),false);
		rep.addText(650, 62, 'SECCION:  '+powerComboBoxRepoLisAluCurSeccion.getOption(),false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);
		rep.addTable('TablaRepoLisAluCurso',['Nº','Ci.','Apellido','Nombre','Sección'],392,107);
        rep.setTotalRowTable(43);
        rep.setHeightRow(20); 
        rep.setSizeColumnArray([44,80,302,302,72]);
        rep.setAlignData(['right','center','left','left','center']); 
        rep.addJsonData('TablaRepoLisAluCurso','getRepoListAlumnoCurso',[0,1,2,3,4]); 		
        /////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	coreUpdate: function(){
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (powerComboBoxRepoLisAluCurPeriodo.valid(dialogsRepoLisAluCurso))
			if (powerComboBoxRepoLisAluCurPosicion.valid(dialogsRepoLisAluCurso)) 
				if (powerComboBoxRepoLisAluCurMateria.valid(dialogsRepoLisAluCurso)) {
						rlx.add('reg', powerComboBoxRepoLisAluCurCarrera.setModeReturnGetText(2));
						rlx.add('reg', powerComboBoxRepoLisAluCurPosicion);
						rlx.add('reg', powerComboBoxRepoLisAluCurPeriodo);
						rlx.add('reg', powerComboBoxRepoLisAluCurSeccion);
						rlx.add('reg', powerComboBoxRepoLisAluCurMateria);
						Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte()', rlx);
					}
    }
};