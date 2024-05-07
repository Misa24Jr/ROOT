var dialogsRepoAluPorSeccion = new Object();
var powerComboBoxRepoAluPorSecOrganizacion = new Object();
var powerComboBoxRepoAluPorSecSuborganizacion = new Object();
var powerComboBoxRepoAluPorSecCarrera = new Object();
var powerComboBoxRepoAluPorSecPeriodo = new Object();
var powerComboBoxRepoAluPorSecPosicion = new Object();
var powerComboBoxRepoAluPorSecSeccion = new Object();
var imgButtonsRepoAluPorSecReporte = new Object();
var imgButtonsRepoAluPorSecSalir = new Object();
var mw_RepoAluPorSeccion = new Object();//minWindow
var rl = new Object();

var RepoAluPorSeccion = {
    windowName: 'RepoAluPorSeccion',
    isCreate: false,
    
    show : function() {  
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsRepoAluPorSeccion.isByClean())
			this.limpiar();			
		dialogsRepoAluPorSeccion.show();
	},
	
	hide : function() {
		dialogsRepoAluPorSeccion.hide();
	},
	
    createMWs: function() {
        mwRepoAluPorSeccion = desktop.addMinWindow('R.A.Sección', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoAluPorSeccion.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRepoAluPorSeccion_Init : function() {
        dialogsRepoAluPorSeccion.setMinimizeXY(0,0);
        dialogsRepoAluPorSeccion.setCenterScreen();
        dialogsRepoAluPorSeccion.addSpace(0,0,20);
        dialogsRepoAluPorSeccion.addLn(1,1,1);
		dialogsRepoAluPorSeccion.setHeightCell(1,1,10);
        dialogsRepoAluPorSeccion.addObjToDialog(powerComboBoxRepoAluPorSecOrganizacion,2,1,24);
        dialogsRepoAluPorSeccion.addObjToDialog(powerComboBoxRepoAluPorSecSuborganizacion,2,1,24);
        dialogsRepoAluPorSeccion.addObjToDialog(powerComboBoxRepoAluPorSecCarrera,2,1,24);
        dialogsRepoAluPorSeccion.adjAllMarginObj(2,1,5);
        dialogsRepoAluPorSeccion.addObjToDialog(powerComboBoxRepoAluPorSecPeriodo,3,1,24);
        dialogsRepoAluPorSeccion.addObjToDialog(powerComboBoxRepoAluPorSecPosicion,3,1,24);
        dialogsRepoAluPorSeccion.addObjToDialog(powerComboBoxRepoAluPorSecSeccion,3,1,24);
        dialogsRepoAluPorSeccion.adjAllMarginObj(3,1,5);   
        dialogsRepoAluPorSeccion.addLn(5,1,1);
		dialogsRepoAluPorSeccion.setHeightCell(5,1,9);
        dialogsRepoAluPorSeccion.addObjToDialog(imgButtonsRepoAluPorSecReporte,6,1);
    	imgButtonsRepoAluPorSecReporte.setDimension(90,22);
        dialogsRepoAluPorSeccion.addObjToDialog(imgButtonsRepoAluPorSecSalir,6,1);
    	imgButtonsRepoAluPorSecSalir.setDimension(90,22);
        dialogsRepoAluPorSeccion.adjAllMarginObj(6,1,30);
        dialogsRepoAluPorSeccion.leftMarginObj(6,1,0,282);
    },

    create : function() {
    	dialogsRepoAluPorSeccion = dialogs.create('dialogsRepoAluPorSeccion',0,0,796,102,'LISTADO DE ESTUDIANTE POR SECCIÓN');
    	dialogsRepoAluPorSeccion.setAdjY(80);
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
  		this.dialogsRepoAluPorSeccion_Init();
  		this.createMWs();
  	},
  
  	limpiar : function() {
  		powerComboBoxRepoAluPorSecOrganizacion.setSelectedIndex(0);
  		Tool.rstPwrCmb(powerComboBoxRepoAluPorSecSuborganizacion);
  		Tool.rstPwrCmb(powerComboBoxRepoAluPorSecCarrera);
  		Tool.rstPwrCmb(powerComboBoxRepoAluPorSecPeriodo);
  		dialogsRepoAluPorSeccion.setMsg("");
  		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoAluPorSeccion, powerComboBoxRepoAluPorSecOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoAluPorSeccion, powerComboBoxRepoAluPorSecOrganizacion, powerComboBoxRepoAluPorSecSuborganizacion, powerComboBoxRepoAluPorSecCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function() {
		powerComboBoxRepoAluPorSecOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxRepoAluPorSecSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		powerComboBoxRepoAluPorSecCarrera.onChange(this.windowName + ".resetElements('carr')");
		powerComboBoxRepoAluPorSecPeriodo.onChange(this.windowName + ".resetElements('per')");
		powerComboBoxRepoAluPorSecPosicion.onChange(this.windowName + ".resetElements('pos')");
    	imgButtonsRepoAluPorSecReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsRepoAluPorSecSalir.onClick('dialogsRepoAluPorSeccion.close()');
    },
    
    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxRepoAluPorSecSuborganizacion);
	  		Tool.rstPwrCmb(powerComboBoxRepoAluPorSecCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoAluPorSecPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoAluPorSecPosicion);
			Tool.rstPwrCmb(powerComboBoxRepoAluPorSecSeccion);
	    	if (powerComboBoxRepoAluPorSecOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoAluPorSeccion, powerComboBoxRepoAluPorSecSuborganizacion, 1, 2, powerComboBoxRepoAluPorSecOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(powerComboBoxRepoAluPorSecCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoAluPorSecPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoAluPorSecPosicion);
			Tool.rstPwrCmb(powerComboBoxRepoAluPorSecSeccion);
	    	if (powerComboBoxRepoAluPorSecSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoAluPorSeccion, powerComboBoxRepoAluPorSecCarrera, -1, 3, powerComboBoxRepoAluPorSecSuborganizacion);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(powerComboBoxRepoAluPorSecPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoAluPorSecPosicion);
			Tool.rstPwrCmb(powerComboBoxRepoAluPorSecSeccion);
	    	if (powerComboBoxRepoAluPorSecCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoAluPorSeccion, powerComboBoxRepoAluPorSecPeriodo, 0, 1, powerComboBoxRepoAluPorSecCarrera.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
          Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsRepoAluPorSeccion, powerComboBoxRepoAluPorSecPosicion, 0, 1, powerComboBoxRepoAluPorSecCarrera.setModeReturnGetText(2));        		
    	} 
    	else if (element == 'pos') {
          Tool.getPowerComboData('MantObject', 'getMantProyAulaSeccion', dialogsRepoAluPorSeccion, powerComboBoxRepoAluPorSecSeccion, 0, 1, powerComboBoxRepoAluPorSecCarrera, powerComboBoxRepoAluPorSecPeriodo, powerComboBoxRepoAluPorSecPosicion);        		
    	}  
	},
	
	reporte : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,30);
        //rep.setNoRepeatHead();
        //rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','bold');
        rep.addBar(0,0,1128,78,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 20, 'ORGANIZACION:         '+powerComboBoxRepoAluPorSecOrganizacion.getOption(),false);
		rep.addText(20, 38, 'SUBORGANIZACION: '+powerComboBoxRepoAluPorSecSuborganizacion.getOption(),false);
		rep.addText(20, 56, 'CARRERA:                   '+powerComboBoxRepoAluPorSecCarrera.getOption(),false);
		rep.addText(480, 20, 'POSICION:  '+powerComboBoxRepoAluPorSecPosicion.getOption(),false);
		rep.addText(480, 38, 'SECCIÓN:    '+powerComboBoxRepoAluPorSecSeccion.getOption(),false);
		rep.addText(480, 56, 'PERIODO:   '+powerComboBoxRepoAluPorSecPeriodo.getOption(),false);
		rep.addText(20, 74, 'PROFESOR GUIA:       '+json('getAluPorSeccionProfGuia').data[0][0],false);
		rep.addBar(0,83,1128,116,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),13,'courier','bold');
		rep.addText(230, 108, 'LISTADO DE ESTUDIANTES POR SECCION',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);
		rep.addTable('TablaRepoAluPorSeccion',['Nº','Cedula','Apellidos','Nombres','Edad','Sexo','Fecha Nac.','Lugar Nac.'],400,120);
		rep.setTotalRowTable(45);
		rep.setHeightRow(17);
        rep.setSizeColumnArray([24,80,182,182,57,53,104,116]);
        rep.setAlignData(['right','center','left','left','center','center','center','left']); 
        rep.addJsonData('TablaRepoAluPorSeccion','getAluPorSeccion',[0,1,2,3,6,7,8,9]);		
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),12,'courier','bold');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	coreUpdate: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (powerComboBoxRepoAluPorSecPeriodo.valid(dialogsRepoAluPorSeccion))
			if (powerComboBoxRepoAluPorSecPosicion.valid(dialogsRepoAluPorSeccion))
				if (powerComboBoxRepoAluPorSecSeccion.valid(dialogsRepoAluPorSeccion)) {
					rlx.add('reg', powerComboBoxRepoAluPorSecSeccion);
					rlx.add('reg', powerComboBoxRepoAluPorSecPeriodo);
					rlx.add('reg', powerComboBoxRepoAluPorSecPosicion);
					rlx.add('reg', powerComboBoxRepoAluPorSecCarrera);
					Tool.cnnSrv('ReportObject', 'getAluPorSeccion', this.windowName + '.reporte()', rlx);
				}
    }
}
