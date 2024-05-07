var dialogsRepoEstRepitiente = new Object();
var powerComboBoxRepoEstRepOrganizacion = new Object();
var powerComboBoxRepoEstRepSuborganizacion = new Object();
var powerComboBoxRepoEstRepCarrera = new Object();
var powerComboBoxRepoEstRepPosicion = new Object();
var imgButtonsRepoEstRepReporte = new Object();
var imgButtonsRepoEstRepSalir = new Object();
var mw_RepoEstRep = new Object();//minWindow
var rl = new Object();

var RepoEstRepitiente = {
    windowName: 'RepoEstRepitiente',
    isCreate: false,
    
    show : function(){  
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
			this.limpiar('lmp');			
		dialogsRepoEstRepitiente.show();
	},
	
	hide : function(){
		dialogsRepoEstRepitiente.hide();
	},
	
    createMWs: function(){
        mwRepoEstRepitiente = desktop.addMinWindow('M.Pendiente', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoEstRepitiente.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRepoEstRepitiente_Init : function(){
        dialogsRepoEstRepitiente.setMinimizeXY(0,0);
        dialogsRepoEstRepitiente.setCenterScreen();
        dialogsRepoEstRepitiente.addSpace(0,0,20);
        dialogsRepoEstRepitiente.addLn(1,1,1);
		dialogsRepoEstRepitiente.setHeightCell(1,1,10);
        dialogsRepoEstRepitiente.addObjToDialog(powerComboBoxRepoEstRepOrganizacion,2,1,24);
        dialogsRepoEstRepitiente.addObjToDialog(powerComboBoxRepoEstRepSuborganizacion,2,1,24);
        dialogsRepoEstRepitiente.addObjToDialog(powerComboBoxRepoEstRepCarrera,2,1,24);
        dialogsRepoEstRepitiente.adjAllMarginObj(2,1,5);
        dialogsRepoEstRepitiente.addObjToDialog(powerComboBoxRepoEstRepPeriodo,3,1,24);
        dialogsRepoEstRepitiente.adjAllMarginObj(3,1,5);   
        dialogsRepoEstRepitiente.addLn(5,1,1);
		dialogsRepoEstRepitiente.setHeightCell(5,1,9);
        dialogsRepoEstRepitiente.addObjToDialog(imgButtonsRepoEstRepReporte,6,1);
    	imgButtonsRepoEstRepReporte.setDimension(90,22);
        dialogsRepoEstRepitiente.addObjToDialog(imgButtonsRepoEstRepSalir,6,1);
    	imgButtonsRepoEstRepSalir.setDimension(90,22);
        dialogsRepoEstRepitiente.adjAllMarginObj(6,1,30);
        dialogsRepoEstRepitiente.leftMarginObj(6,1,0,230);  
    },

    create : function(){
    	dialogsRepoEstRepitiente = dialogs.create('dialogsRepoEstRepitiente',0,0,718,102,'ESTUDIANTE REPITIENTE');
    	dialogsRepoEstRepitiente.setAdjY(80);
    	powerComboBoxRepoEstRepOrganizacion = powerComboBox.create('powerComboBoxRepoEstRepOrganizacion','powerComboBoxRepoEstRepOrganizacion','Organ. (+):',1,68);
    	powerComboBoxRepoEstRepOrganizacion.enableReadOnlyEditor();
    	powerComboBoxRepoEstRepOrganizacion.addEmptyOption();
    	powerComboBoxRepoEstRepOrganizacion.setValidEmpty();
    	powerComboBoxRepoEstRepSuborganizacion = powerComboBox.create('powerComboBoxRepoEstRepSuborganizacion','powerComboBoxRepoEstRepSuborganizacion','Suborg. (^):',1,80);
    	powerComboBoxRepoEstRepSuborganizacion.enableReadOnlyEditor();
    	powerComboBoxRepoEstRepSuborganizacion.addEmptyOption();
    	powerComboBoxRepoEstRepSuborganizacion.setValidEmpty();
    	powerComboBoxRepoEstRepCarrera = powerComboBox.create('powerComboBoxRepoEstRepCarrera','powerComboBoxRepoEstRepCarrera','Carrera (^):',1,71);
    	powerComboBoxRepoEstRepCarrera.enableReadOnlyEditor();
    	powerComboBoxRepoEstRepCarrera.addEmptyOption();
    	powerComboBoxRepoEstRepCarrera.setValidEmpty();
    	powerComboBoxRepoEstRepCarrera.setFieldFind(true);
    	powerComboBoxRepoEstRepPeriodo = powerComboBox.create('powerComboBoxRepoEstRepPeriodo','powerComboBoxRepoEstRepPeriodo','Periodo(+):',1,68);
    	powerComboBoxRepoEstRepPeriodo.enableReadOnlyEditor();
    	powerComboBoxRepoEstRepPeriodo.addEmptyOption();
    	powerComboBoxRepoEstRepPeriodo.setValidEmpty();
    	imgButtonsRepoEstRepReporte = imgButtons.create('imgButtonsRepoEstRepReporte','Reporte','print.png');
    	imgButtonsRepoEstRepSalir = imgButtons.create('imgButtonsRepoEstRepSalir','Salir','salir.png');
  	},

  	init : function(){
  		this.create();
  		this.setEvents();
  		this.dialogsRepoEstRepitiente_Init();
  		this.createMWs();
  	},
  
  	limpiar : function(tipo) {
  		powerComboBoxRepoEstRepOrganizacion.setSelectedIndex(0);
  		Tool.rstPwrCmb(powerComboBoxRepoEstRepSuborganizacion);
  		Tool.rstPwrCmb(powerComboBoxRepoEstRepCarrera);
  		Tool.rstPwrCmb(powerComboBoxRepoEstRepPeriodo);
  		dialogsRepoEstRepitiente.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoEstRepitiente, powerComboBoxRepoEstRepOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoEstRepitiente, powerComboBoxRepoEstRepOrganizacion, powerComboBoxRepoEstRepSuborganizacion, powerComboBoxRepoEstRepCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function(){
    	//imgButtonsRepoEstRepReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsRepoEstRepSalir.onClick('dialogsRepoEstRepitiente.close()');
		
		imgButtonsRepoEstRepReporte.onClick(this.windowName + ".reporte()");
		
		powerComboBoxRepoEstRepOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxRepoEstRepSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		powerComboBoxRepoEstRepCarrera.onChange(this.windowName + ".resetElements('carr')");
		powerComboBoxRepoEstRepPeriodo.onChange(this.windowName + ".resetElements('per')");
    },
    
    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxRepoEstRepSuborganizacion);
	  		Tool.rstPwrCmb(powerComboBoxRepoEstRepCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoEstRepPeriodo);
	    	if (powerComboBoxRepoEstRepOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoEstRepitiente, powerComboBoxRepoEstRepSuborganizacion, 1, 2, powerComboBoxRepoEstRepOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(powerComboBoxRepoEstRepCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoEstRepPeriodo);
	    	if (powerComboBoxRepoEstRepSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoEstRepitiente, powerComboBoxRepoEstRepCarrera, -1, 3, powerComboBoxRepoEstRepSuborganizacion);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(powerComboBoxRepoEstRepPeriodo);
	    	if (powerComboBoxRepoEstRepCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoEstRepitiente, powerComboBoxRepoEstRepPeriodo, 0, 1, powerComboBoxRepoEstRepCarrera.setModeReturnGetText(5));
		}
	},
	
	reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
    	rep.setPositionIcon(750,44);
    	//rep.setHeadImage(imgEduca.banner,false);
    	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'courier','bold');
        rep.addBar(0,0,1128,78,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 23, 'ORGANIZACION:    '+powerComboBoxRepoEstRepOrganizacion.getOption(),false);
		rep.addText(20, 43, 'SUBORGANIZACION: '+powerComboBoxRepoEstRepSuborganizacion.getOption(),false);
		rep.addText(20, 63, 'CARRERA:         '+powerComboBoxRepoEstRepCarrera.getOption(),false);
		rep.addText(500, 43, 'PERIODO: '+powerComboBoxRepoEstRepPeriodo.getOption(),false);
		rep.addText(500, 63, 'TOTAL REPITIENTES: '/*+powerComboBoxRepoEstRepPeriodo.getOption()*/,false);
		rep.addBar(0,83,1128,116,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'courier','bold');
		rep.addText(278, 106, 'ESTUDIANTE REPITIENTE',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 9);
		rep.addTable('TablaRepoEstRep',['Nº','C.i.','Estudiante','Mención','Posición','Sección','Materia'],398,120);
		rep.setTotalRowTable(43);
		rep.setHeightRow(20);
        rep.setSizeColumnArray([20,70,200,96,70,70,273]);
        rep.setAlignData(['center','center','left','center','center','center','left']); 
        //rep.addJsonData('TablaRepoEstRep','getCantAlumnoInscrito',[0,1,2,3]);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		//Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	//Reporte.create();
    	//dialogsReporte.showModal();
    	rep.previewHTML();
	},
	/*
	coreUpdate: function() {
		var rlx = xmlStructs.createRecordList("rlx");
        if (powerComboBoxRepoEstRepOrganizacion.valid(dialogsRepoEstRepitiente))
			if (powerComboBoxRepoEstRepSuborganizacion.valid(dialogsRepoEstRepitiente))
				if (powerComboBoxRepoEstRepPeriodo.valid(dialogsRepoEstRepitiente)) {
					rlx.add('reg', powerComboBoxRepoEstRepPeriodo);
					rlx.add('reg', powerComboBoxRepoEstRepOrganizacion);
					rlx.add('reg', powerComboBoxRepoEstRepCarrera);
					rlx.add('reg', powerComboBoxRepoEstRepCarrera);
					rlx.add('reg', powerComboBoxRepoEstRepPosicion);
					//Tool.cnnSrv('ReportObject','getListadoRepresentante', this.windowName + '.reporte()', rlx);
				}
				
    }
	*/
}
