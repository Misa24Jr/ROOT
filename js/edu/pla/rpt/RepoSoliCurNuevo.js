var dialogsRepoSoliCurNuevo = new Object();
var powerComboBoxRepoSoliCurNueOrganizacion = new Object();
var powerComboBoxRepoSoliCurNueSuborganizacion = new Object();
var powerComboBoxRepoSoliCurNueCarrera = new Object();
var powerComboBoxRepoSoliCurNuePeriodo = new Object();
var editsRepoSoliCurNuePeriodo = new Object();
var imgButtonsRepoSoliCurNueReporte = new Object();
var imgButtonsRepoSoliCurNueSalir = new Object();
var mw_RepoSoliCurNuevo = new Object();// minWindow

var RepoSoliCurNuevo = {
    windowName : 'RepoSoliCurNuevo',
    isCreate: false,
    idPeriodo : 0,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
			this.limpiar();	
		dialogsRepoSoliCurNuevo.show();
	},
        
    hide: function(){
        dialogsRepoSoliCurNuevo.hide();
    },
    
    createMWs: function(){
        mwRepoSoliCurNuevo = desktop.addMinWindow('R.S.C.Nuevo', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoSoliCurNuevo.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsRepoSoliCurNuevo_Init : function(){
        dialogsRepoSoliCurNuevo.setMinimizeXY(0,0);
        dialogsRepoSoliCurNuevo.setCenterScreen();
        dialogsRepoSoliCurNuevo.addSpace(0,0,20);
        dialogsRepoSoliCurNuevo.addLn(1,1,1);
		dialogsRepoSoliCurNuevo.setHeightCell(1,1,13);
		dialogsRepoSoliCurNuevo.addObjToDialog(powerComboBoxRepoSoliCurNueOrganizacion,2,1,24);
		dialogsRepoSoliCurNuevo.addObjToDialog(powerComboBoxRepoSoliCurNueSuborganizacion,2,1,24);
		dialogsRepoSoliCurNuevo.addObjToDialog(powerComboBoxRepoSoliCurNueCarrera,2,1,24);
		dialogsRepoSoliCurNuevo.adjAllMarginObj(2,1,15);
		dialogsRepoSoliCurNuevo.addObjToDialog(powerComboBoxRepoSoliCurNuePeriodo,3,1,24);
	    dialogsRepoSoliCurNuevo.addObjToDialog(editsRepoSoliCurNuePeriodo,3,1,24);
	    editsRepoSoliCurNuePeriodo.setSizeEdit(148);
	    dialogsRepoSoliCurNuevo.adjAllMarginObj(3,1,15);
        dialogsRepoSoliCurNuevo.addLn(5,1,1);
		dialogsRepoSoliCurNuevo.setHeightCell(5,1,10);
		dialogsRepoSoliCurNuevo.addObjToDialog(imgButtonsRepoSoliCurNueReporte,6,1);
    	imgButtonsRepoSoliCurNueReporte.setDimension(90,22);
        dialogsRepoSoliCurNuevo.addObjToDialog(imgButtonsRepoSoliCurNueSalir,6,1);
    	imgButtonsRepoSoliCurNueSalir.setDimension(90,22);
        dialogsRepoSoliCurNuevo.adjAllMarginObj(6,1,30);
        dialogsRepoSoliCurNuevo.leftMarginObj(6,1,0,258); 
    },
  
    create : function(){
    	dialogsRepoSoliCurNuevo = dialogs.create('dialogsRepoSoliCurNuevo',0,0,773,105,'SOLICUTUDES DE ALUMNOS PARA LA APERTURA NUEVOS CURSOS');
    	dialogsRepoSoliCurNuevo.setAdjY(80);
    	powerComboBoxRepoSoliCurNueOrganizacion = powerComboBox.create('powerComboBoxRepoSoliCurNueOrganizacion','powerComboBoxRepoSoliCurNueOrganizacion','Organización:',1,95);
    	powerComboBoxRepoSoliCurNueOrganizacion.enableReadOnlyEditor();
    	powerComboBoxRepoSoliCurNueOrganizacion.addEmptyOption();
    	powerComboBoxRepoSoliCurNueOrganizacion.setValidEmpty();
    	powerComboBoxRepoSoliCurNueOrganizacion.enableOnChangeToEmptyOption();
    	powerComboBoxRepoSoliCurNueSuborganizacion = powerComboBox.create('powerComboBoxRepoSoliCurNueSuborganizacion','powerComboBoxRepoSoliCurNueSuborganizacion','Suborganización:',1,103);
    	powerComboBoxRepoSoliCurNueSuborganizacion.enableReadOnlyEditor();
    	powerComboBoxRepoSoliCurNueSuborganizacion.addEmptyOption();
    	powerComboBoxRepoSoliCurNueSuborganizacion.setValidEmpty();
    	powerComboBoxRepoSoliCurNueCarrera = powerComboBox.create('powerComboBoxRepoSoliCurNueCarrera','powerComboBoxRepoSoliCurNueCarrera','Carrera:',1,56);
    	powerComboBoxRepoSoliCurNueCarrera.enableReadOnlyEditor();
    	powerComboBoxRepoSoliCurNueCarrera.addEmptyOption();
    	powerComboBoxRepoSoliCurNueCarrera.setValidEmpty();
    	powerComboBoxRepoSoliCurNuePeriodo = powerComboBox.create('powerComboBoxRepoSoliCurNuePeriodo','powerComboBoxRepoSoliCurNuePeriodo','Estado Periodo:',1,95);
    	powerComboBoxRepoSoliCurNuePeriodo.enableReadOnlyEditor();
    	powerComboBoxRepoSoliCurNuePeriodo.addEmptyOption();
    	powerComboBoxRepoSoliCurNuePeriodo.setValidEmpty();
        editsRepoSoliCurNuePeriodo = edits.create('editsRepoSoliCurNuePeriodo','editsRepoSoliCurNuePeriodo','Periodo:',1,103,'normal');
        editsRepoSoliCurNuePeriodo.setValidEmpty();
    	editsRepoSoliCurNuePeriodo.readOnly(true);
      	imgButtonsRepoSoliCurNueReporte = imgButtons.create('imgButtonsRepoSoliCurNueReporte','Reporte','print.png');
      	imgButtonsRepoSoliCurNueSalir = imgButtons.create('imgButtonsRepoSoliCurNueSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents(); 
		this.dialogsRepoSoliCurNuevo_Init();
		this.createMWs();
	},
	
	limpiar : function() {
  		Tool.rstPwrCmb(powerComboBoxRepoSoliCurNueOrganizacion);
  		Tool.rstPwrCmb(powerComboBoxRepoSoliCurNueSuborganizacion);
  		Tool.rstPwrCmb(powerComboBoxRepoSoliCurNueCarrera);
  		Tool.rstPwrCmb(powerComboBoxRepoSoliCurNuePeriodo);
  		editsRepoSoliCurNuePeriodo.setValue("");
        Tool.cnnSrv('MantObject', 'getMantCreMateriaInit', this.windowName + '.loadDataInit()');
    },

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoSoliCurNuevo, powerComboBoxRepoSoliCurNueOrganizacion, 0, 1, json('getData'));
		Tool.loadPowerComboData(dialogsRepoSoliCurNuevo, powerComboBoxRepoSoliCurNuePeriodo, 0, 1, json('getMantEstPeriodo'));
		Tool.getContext(dialogsRepoSoliCurNuevo, powerComboBoxRepoSoliCurNueOrganizacion, powerComboBoxRepoSoliCurNueSuborganizacion, powerComboBoxRepoSoliCurNueCarrera);
    },
	
	setEvents: function(){
    	imgButtonsRepoSoliCurNueReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsRepoSoliCurNueSalir.onClick('dialogsRepoSoliCurNuevo.close()'); 
		powerComboBoxRepoSoliCurNueOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxRepoSoliCurNueSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		//powerComboBoxRepoSoliCurNueCarrera.onChange(this.windowName + ".resetElements('carr')");
		powerComboBoxRepoSoliCurNuePeriodo.onChange(this.windowName + ".resetElements('per')");
    },
	
	resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxRepoSoliCurNueSuborganizacion);
	  		Tool.rstPwrCmb(powerComboBoxRepoSoliCurNueCarrera);
	    	if (powerComboBoxRepoSoliCurNueOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoSoliCurNuevo, powerComboBoxRepoSoliCurNueSuborganizacion, 1, 2, powerComboBoxRepoSoliCurNueOrganizacion);
		}
	
	else if (element == 'suborg') {
	  		Tool.rstPwrCmb(powerComboBoxRepoSoliCurNueCarrera);
	    	if (powerComboBoxRepoSoliCurNueSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoSoliCurNuevo, powerComboBoxRepoSoliCurNueCarrera, -1, 3, powerComboBoxRepoSoliCurNueSuborganizacion);
		}
		
	else if (element == 'per') {
            var rlx = xmlStructs.createRecordList("rlx");

        	editsRepoSoliCurNuePeriodo.setValue("");
            rlx.add('reg', powerComboBoxRepoSoliCurNuePeriodo);
    		rlx.add('reg', powerComboBoxRepoSoliCurNueCarrera.setModeReturnGetText(5));		
        	Tool.cnnSrv('MantObject', 'getPeriodo', this.windowName + '.loadDataPer()', rlx);
   		}
   
   }, 
   
	loadDataPer: function() {
    	this.idPeriodo = json('getPeriodo').data[0];
    	Tool.loadEditData(dialogsRepoSoliCurNuevo, editsRepoSoliCurNuePeriodo, 1, json('getPeriodo'));   	
	},
	
	reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
        rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addHeadTitle('SOLICITUDES DE APERTURA DE NUEVOS CURSOS',true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),6,'verdana','bold');
        rep.addBar(0,152,1128,220,rep.getRGBAObj(187,196,238,0.8),false);
        rep.addLine(0,146,1128,146,rep.getRGBAObj(210,210,210,1),1,false);
        rep.addLine(0,226,1128,226,rep.getRGBAObj(210,210,210,1),1,false); 
		rep.addText(20, 173, 'ORGANIZACIÓN:        '+powerComboBoxRepoSoliCurNueOrganizacion.getOption(),false);
		rep.addText(20, 190, 'SUBORGANIZACIÓN:  '+powerComboBoxRepoSoliCurNueSuborganizacion.getOption(),false);
		rep.addText(20, 207, 'CARRERA:                   '+powerComboBoxRepoSoliCurNueCarrera.getOption(),false);
		rep.addText(400, 173, 'PERIODO:    '+editsRepoSoliCurNuePeriodo.getText(),false);
		//////////////////////////////////////////GENERACION//DE//TABLA/////////////////////////////////////////////////////////////////////////////////////
        rep.addTable('tablaCurSolicitado',['Cod Materia','Materia','Cantidad'],394,232);
        rep.setSizeColumnArray([130,560,106]);
        rep.setAlignData(['center','left','center']); 
        rep.addJsonData('tablaCurSolicitado','getCursoSolicitado');		
		rep.setTotalRowTable(39);
		rep.setHeightRow(18);
		///////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
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
        
		if (powerComboBoxRepoSoliCurNueOrganizacion.valid(dialogsRepoSoliCurNuevo))
			if (powerComboBoxRepoSoliCurNueSuborganizacion.valid(dialogsRepoSoliCurNuevo))
				if (powerComboBoxRepoSoliCurNueCarrera.valid(dialogsRepoSoliCurNuevo))
					if (powerComboBoxRepoSoliCurNuePeriodo.valid(dialogsRepoSoliCurNuevo)){
						rlx.addInt('reg',this.idPeriodo);
						rlx.add('reg', powerComboBoxRepoSoliCurNueCarrera.setModeReturnGetText(2));
						Tool.cnnSrv('ReportObject', 'getCursoSolicitado', this.windowName + '.reporte()', rlx); 
	   	}
    }
};
