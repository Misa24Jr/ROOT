var dialogsRepoCanAluInscritos = new Object();
var pcbRepoCanAluInsOrganizacion = new Object();
var pcbRepoCanAluInsSuborganizacion = new Object();
var pcbRepoCanAluInsPosicion = new Object();
var pcbRepoCanAluInsCarrera = new Object();
var imgButtonsRepoCanAluInscritos = new Object();
var imgButtonsRepoCanAluNoInscritos = new Object();
var imgButtonsRepoCanAluInsSalir = new Object();
var mw_RepoCanAluInscritos = new Object();//minWindow

var RepoCanAluInscritos = {
    windowName: 'RepoCanAluInscritos',
    isCreate: false, 
    
    show : function(){  
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
			this.limpiar('lmp');			
		dialogsRepoCanAluInscritos.show();
	},
	
	hide : function(){
		dialogsRepoCanAluInscritos.hide();
	},
	
    createMWs: function(){
        mwRepoCanAluInscritos = desktop.addMinWindow('R.E.A.Inscritos', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoCanAluInscritos.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRepoCanAluInscritos_Init : function(){
        dialogsRepoCanAluInscritos.setMinimizeXY(0,0);
        dialogsRepoCanAluInscritos.setCenterScreen();
        dialogsRepoCanAluInscritos.addObject(pcbRepoCanAluInsOrganizacion,10,30);
        dialogsRepoCanAluInscritos.addObject(pcbRepoCanAluInsSuborganizacion,280,30);
        dialogsRepoCanAluInscritos.addObject(pcbRepoCanAluInsCarrera,570,30);
        dialogsRepoCanAluInscritos.addObject(pcbRepoCanAluInsPeriodo,10,55);
        dialogsRepoCanAluInscritos.addObject(pcbRepoCanAluInsPosicion,280,55);    
        dialogsRepoCanAluInscritos.addObject(imgButtonsRepoCanAluInscritos,250,90);
        dialogsRepoCanAluInscritos.addObject(imgButtonsRepoCanAluNoInscritos,370,90);
        dialogsRepoCanAluInscritos.addObject(imgButtonsRepoCanAluInsSalir,490,90);
    },
 
    create : function(){
    	dialogsRepoCanAluInscritos = dialogs.create('dialogsRepoCanAluInscritos',0,0,805,102,'ESTADISTICA DE ESTUDIANTES INSCRITOS');
    	dialogsRepoCanAluInscritos.setAdjY(50);
    	pcbRepoCanAluInsOrganizacion = powerComboBox.create('pcbRepoCanAluInsOrganizacion','pcbRepoCanAluInsOrganizacion','Organización (+):',1,103);
    	pcbRepoCanAluInsOrganizacion.enableReadOnlyEditor();
    	pcbRepoCanAluInsOrganizacion.addEmptyOption();
    	pcbRepoCanAluInsOrganizacion.setValidEmpty();
    	
    	pcbRepoCanAluInsSuborganizacion = powerComboBox.create('pcbRepoCanAluInsSuborganizacion','pcbRepoCanAluInsSuborganizacion','Suborganización (^):',1,123);
    	pcbRepoCanAluInsSuborganizacion.enableReadOnlyEditor();
    	pcbRepoCanAluInsSuborganizacion.addEmptyOption();
    	pcbRepoCanAluInsSuborganizacion.setValidEmpty();
    	
    	pcbRepoCanAluInsCarrera = powerComboBox.create('pcbRepoCanAluInsCarrera','pcbRepoCanAluInsCarrera','Carrera (^):',1,73);
    	pcbRepoCanAluInsCarrera.enableReadOnlyEditor();
    	pcbRepoCanAluInsCarrera.addEmptyOption();
    	pcbRepoCanAluInsCarrera.setValidEmpty();
    	pcbRepoCanAluInsCarrera.setFieldFind(true);
    	
    	pcbRepoCanAluInsPosicion = powerComboBox.create('pcbRepoCanAluInsPosicion','pcbRepoCanAluInsPosicion','Posicion (^):',1,123);
    	pcbRepoCanAluInsPosicion.enableReadOnlyEditor();
    	pcbRepoCanAluInsPosicion.addEmptyOption();
    	pcbRepoCanAluInsPosicion.setValidEmpty();
    	pcbRepoCanAluInsPosicion.setFieldFind(true);

    	pcbRepoCanAluInsPeriodo = powerComboBox.create('pcbRepoCanAluInsPeriodo','pcbRepoCanAluInsPeriodo','Periodo:',1,103);
    	pcbRepoCanAluInsPeriodo.enableReadOnlyEditor();
    	pcbRepoCanAluInsPeriodo.addEmptyOption();
    	pcbRepoCanAluInsPeriodo.setValidEmpty();

    	imgButtonsRepoCanAluInscritos = imgButtons.create('imgButtonsRepoCanAluInscritos','Inscritos','print.png');
    	imgButtonsRepoCanAluNoInscritos = imgButtons.create('imgButtonsRepoCanAluNoInscritos','No Inscritos','print.png');
    	imgButtonsRepoCanAluInsSalir = imgButtons.create('imgButtonsRepoCanAluInsSalir','Salir','salir.png');
    	imgButtonsRepoCanAluInsSalir.setDimension(100,22);
        imgButtonsRepoCanAluInscritos.setDimension(100,22);
        imgButtonsRepoCanAluNoInscritos.setDimension(100,22);
  	},

  	init : function(){
  		this.create();
  		this.setEvents();
  		this.dialogsRepoCanAluInscritos_Init();
  		this.createMWs();
  	},
    
  	limpiar : function(tipo) {
  		pcbRepoCanAluInsOrganizacion.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbRepoCanAluInsSuborganizacion);
  		Tool.rstPwrCmb(pcbRepoCanAluInsCarrera);
  		Tool.rstPwrCmb(pcbRepoCanAluInsPeriodo);
  		dialogsRepoCanAluInscritos.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoCanAluInscritos, pcbRepoCanAluInsOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoCanAluInscritos, pcbRepoCanAluInsOrganizacion, pcbRepoCanAluInsSuborganizacion, pcbRepoCanAluInsCarrera, this.windowName + ".resetElements('carr');pcbRepoCanAluInsCarrera.setSelectedIndex(0);");
	},
    
	setEvents: function() {
		pcbRepoCanAluInsOrganizacion.onChange(this.windowName + ".resetElements('org')");
		pcbRepoCanAluInsSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		pcbRepoCanAluInsCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbRepoCanAluInsPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbRepoCanAluInsPosicion.onChange(this.windowName + ".resetElements('pos')");
    	imgButtonsRepoCanAluInscritos.onClick(this.windowName + ".coreUpdate(1)");
    	imgButtonsRepoCanAluNoInscritos.onClick(this.windowName + ".coreUpdate(2)");
        imgButtonsRepoCanAluInsSalir.onClick('dialogsRepoCanAluInscritos.close()');
    },
    
    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(pcbRepoCanAluInsSuborganizacion);
	  		Tool.rstPwrCmb(pcbRepoCanAluInsCarrera);
	  		Tool.rstPwrCmb(pcbRepoCanAluInsPeriodo);
	    	if (pcbRepoCanAluInsOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoCanAluInscritos, pcbRepoCanAluInsSuborganizacion, 1, 2, pcbRepoCanAluInsOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbRepoCanAluInsCarrera);
	  		Tool.rstPwrCmb(pcbRepoCanAluInsPeriodo);
	    	if (pcbRepoCanAluInsSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoCanAluInscritos, pcbRepoCanAluInsCarrera, -1, 3, pcbRepoCanAluInsSuborganizacion);
		}
		else if (element == 'carr') {
	    	if (pcbRepoCanAluInsCarrera.getOption() != "")
	    		Tool.getPowerComboDataFnc('pcbRepoCanAluInsPeriodo.setSelectedIndex(1);' + this.windowName + '.resetElements("per")','MantObject', 'getPeriodoXNivelAcad', dialogsRepoCanAluInscritos, pcbRepoCanAluInsPeriodo, 0, 1, pcbRepoCanAluInsCarrera.setModeReturnGetText(5));
		}
		else if (element == 'per') {
			if (pcbRepoCanAluInsCarrera.getOption() != '')
				Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsRepoCanAluInscritos, pcbRepoCanAluInsPosicion, 0, 1, pcbRepoCanAluInsCarrera.setModeReturnGetText(2));        		
    	}
	},
	
	reporteNoInscritos : function() {
	  		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
    	rep.setPositionIcon(1060,42);
		
		////////rep = new Report('portrait');
    	////////rep.setPositionIcon(750,44);
    	//rep.setHeadImage(imgEduca.banner,false);
    	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'courier','bold');
        rep.addBar(0,0,1128,78,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 23, 'ORGANIZACION:    '+pcbRepoCanAluInsOrganizacion.getOption(),false);
		rep.addText(20, 43, 'SUBORGANIZACION: '+pcbRepoCanAluInsSuborganizacion.getOption(),false);
		rep.addText(20, 63, 'CARRERA:         '+pcbRepoCanAluInsCarrera.getOption(),false);
		rep.addText(500, 23, 'TOTAL INSCRITOS(SIGUIENTE GRADO/AÑO) PERIODO ' + pcbRepoCanAluInsPeriodo.getOption() + ': ' + json('getTotalAlumnoNoInscrito').data[0][0],false);
		rep.addText(500, 43, 'TOTAL INSCRITOS(ESTUDIANTE ACTIVO/RETIRADO/INACTIVO) PERIODO ANTERIOR: '+json('getTotalAlumnoNoInscrito').data[1][0],false);
		rep.addText(500, 63, 'TOTAL NO INSCRITOS PERIODO ANTERIOR: '+json('getListAlumnoNoInscrito').data[0].length,false);
		rep.addBar(0,83,1128,116,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'courier','bold');
		rep.addText(310, 106, 'ESTUDIANTES NO INSCRITOS DEL PERIODO ANTERIOR',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);
		rep.addTable('TablaRepoEstNoIns',['Nº','C.i.','Estudiante','Mención','Posición','Sección','Representante','Telefono','Condición'],565,120);
		rep.setTotalRowTable(32);
		rep.setHeightRow(20);
        rep.setSizeColumnArray([20,80,260,130,100,70,260,120,90]);
        rep.setAlignData(['center','center','left','center','center','center','left','center','center']); 
        rep.addJsonData('TablaRepoEstNoIns','getListAlumnoNoInscrito',[0,1,2,3,4,5,6,7,8]);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	reporte : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,40);
        rep.setNoRepeatHead();
        //rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		//rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		//rep.addBar(0,104,1128,144,rep.getRGBAObj(210,200,200,0.9),false);
        //rep.addHeadTitle('ALUMNOS POR SECCIÓN',true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','normal');
        rep.addBar(0,0,1128,78,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 20, 'ORGANIZACION:        '+pcbRepoCanAluInsOrganizacion.getOption(),false);
		rep.addText(20, 38, 'SUBORGANIZACION: '+pcbRepoCanAluInsSuborganizacion.getOption(),false);
		rep.addText(20, 56, 'PERIODO:   '+pcbRepoCanAluInsPeriodo.getOption(),false);
		rep.addBar(0,83,1128,116,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14,'helvetica','normal');
		rep.addText(208, 108, 'ESTADISTICA DE ESTUDIANTES INSCRITOS',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 11);
		rep.addTable('TablaRepoCanAluInscritos',['Carrera','Posición','Sección','Cantidad'],400,120);
		rep.setTotalRowTable(43);
		rep.setHeightRow(20);
        rep.setSizeColumnArray([400,200,100,98]);
        rep.setAlignData(['left','left','left','center']); 
        rep.addJsonData('TablaRepoCanAluInscritos','getCantAlumnoInscrito',[0,1,2,3]);
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	coreUpdate: function(n) {
        var rlx = xmlStructs.createRecordList("rlx");
        if (pcbRepoCanAluInsPeriodo.valid(dialogsRepoCanAluInscritos)) {
        	rlx.add('reg', pcbRepoCanAluInsPeriodo);
        	rlx.add('reg', pcbRepoCanAluInsPeriodo);
        	rlx.add('reg', pcbRepoCanAluInsPeriodo);
        	rlx.add('reg', pcbRepoCanAluInsCarrera.setModeReturnGetText(2));
        	rlx.add('reg', pcbRepoCanAluInsCarrera.setModeReturnGetText(2));
        	rlx.add('reg', pcbRepoCanAluInsPeriodo);
        	
            if (n == 1) {
            	rlx.addStr('reg', 'inscrip');
            	Tool.cnnSrv('ReportObject', 'getCantAlumnoInscrito', this.windowName + '.reporte()', rlx);
            }
            else {
                if (pcbRepoCanAluInsCarrera.valid(dialogsRepoCanAluInscritos))
                    if (pcbRepoCanAluInsPosicion.valid(dialogsRepoCanAluInscritos)) {
                    	rlx.addStr('reg', 'noinscrip');
                    	rlx.add('reg', pcbRepoCanAluInsPosicion);
                    	Tool.cnnSrv('ReportObject', 'getCantAlumnoInscrito', this.windowName + '.reporteNoInscritos()', rlx);
                    }
            }
        }
    }
}
