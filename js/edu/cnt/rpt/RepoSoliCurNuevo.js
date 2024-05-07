var dialogsRepoSoliCurNuevo = new Object();
var powerComboBoxRepoSoliCurNueOrganizacion = new Object();
var powerComboBoxRepoSoliCurNueSuborganizacion = new Object();
var powerComboBoxRepoSoliCurNueCarrera = new Object();
var powerComboBoxRepoSoliCurNueMateria = new Object();
var powerComboBoxRepoSoliCurNuePosicion = new Object();
var powerComboBoxRepoSoliCurNuePeriodo = new Object();
var imgButtonsRepoSoliCurNueReporte = new Object();
var imgButtonsRepoSoliCurNueSalir = new Object();
var mw_RepoSoliCurNuevo = new Object();// minWindow

var RepoSoliCurNuevo = {
    windowName : 'RepoSoliCurNuevo',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
			this.limpiar('lmp');			
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
	    powerComboBoxRepoSoliCurNuePeriodo.setWidthCombo(396);
		dialogsRepoSoliCurNuevo.addObjToDialog(powerComboBoxRepoSoliCurNuePosicion,3,1,24);
		dialogsRepoSoliCurNuevo.adjAllMarginObj(3,1,15);
        dialogsRepoSoliCurNuevo.addObjToDialog(powerComboBoxRepoSoliCurNueMateria,4,1,24);
        powerComboBoxRepoSoliCurNueMateria.setWidthCombo(617);
        dialogsRepoSoliCurNuevo.addLn(5,1,1);
		dialogsRepoSoliCurNuevo.setHeightCell(5,1,10);
		dialogsRepoSoliCurNuevo.addObjToDialog(imgButtonsRepoSoliCurNueReporte,6,1);
    	imgButtonsRepoSoliCurNueReporte.setDimension(90,22);
        dialogsRepoSoliCurNuevo.addObjToDialog(imgButtonsRepoSoliCurNueSalir,6,1);
    	imgButtonsRepoSoliCurNueSalir.setDimension(90,22);
        dialogsRepoSoliCurNuevo.adjAllMarginObj(6,1,30);
        dialogsRepoSoliCurNuevo.leftMarginObj(6,1,0,255); 
    },
  
    create : function(){
    	dialogsRepoSoliCurNuevo = dialogs.create('dialogsRepoSoliCurNuevo',0,0,763,129,'SOLICUTUDES DE ALUMNOS PARA LA APERTURA NUEVOS CURSOS');
    	dialogsRepoSoliCurNuevo.setAdjY(80);
    	powerComboBoxRepoSoliCurNueOrganizacion = powerComboBox.create('powerComboBoxRepoSoliCurNueOrganizacion','powerComboBoxRepoSoliCurNueOrganizacion','Organización:',1,85);
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
    	powerComboBoxRepoSoliCurNuePosicion = powerComboBox.create('powerComboBoxRepoSoliCurNuePosicion','powerComboBoxRepoSoliCurNuePosicion','Posicíon:',1,56);
    	powerComboBoxRepoSoliCurNuePosicion.enableReadOnlyEditor();
    	powerComboBoxRepoSoliCurNuePosicion.addEmptyOption();
    	powerComboBoxRepoSoliCurNuePosicion.setValidEmpty();
    	powerComboBoxRepoSoliCurNueMateria = powerComboBox.create('powerComboBoxRepoSoliCurNueMateria','powerComboBoxRepoSoliCurNueMateria','Materia:',1,85);
    	powerComboBoxRepoSoliCurNueMateria.enableReadOnlyEditor();
    	powerComboBoxRepoSoliCurNueMateria.addEmptyOption();
    	powerComboBoxRepoSoliCurNueMateria.setValidEmpty();
    	powerComboBoxRepoSoliCurNueMateria.setDataType('string');
    	powerComboBoxRepoSoliCurNuePeriodo = powerComboBox.create('powerComboBoxRepoSoliCurNuePeriodo','powerComboBoxRepoSoliCurNuePeriodo','Periodo:',1,85);
    	powerComboBoxRepoSoliCurNuePeriodo.enableReadOnlyEditor();
    	powerComboBoxRepoSoliCurNuePeriodo.addEmptyOption();
    	powerComboBoxRepoSoliCurNuePeriodo.setValidEmpty();
      	imgButtonsRepoSoliCurNueReporte = imgButtons.create('imgButtonsRepoSoliCurNueReporte','Reporte','print.png');
      	imgButtonsRepoSoliCurNueSalir = imgButtons.create('imgButtonsRepoSoliCurNueSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents(); 
		this.dialogsRepoSoliCurNuevo_Init();
		this.createMWs();
	},
	
	limpiar : function(tipo) {
  		powerComboBoxRepoSoliCurNueOrganizacion.setSelectedIndex(0);
  		Tool.rstPwrCmb(powerComboBoxRepoSoliCurNueSuborganizacion);
  		Tool.rstPwrCmb(powerComboBoxRepoSoliCurNueCarrera);
  		Tool.rstPwrCmb(powerComboBoxRepoSoliCurNuePeriodo);
  		dialogsRepoSoliCurNuevo.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},
	
	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoSoliCurNuevo, powerComboBoxRepoSoliCurNueOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoSoliCurNuevo, powerComboBoxRepoSoliCurNueOrganizacion, powerComboBoxRepoSoliCurNueSuborganizacion, powerComboBoxRepoSoliCurNueCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function(){
    	imgButtonsRepoSoliCurNueReporte.onClick(this.windowName + ".reporte()");
    	//imgButtonsRepoSoliCurNueReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsRepoSoliCurNueSalir.onClick('dialogsRepoSoliCurNuevo.close()');
		powerComboBoxRepoSoliCurNueOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxRepoSoliCurNueSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		powerComboBoxRepoSoliCurNueCarrera.onChange(this.windowName + ".resetElements('carr')");
		powerComboBoxRepoSoliCurNuePeriodo.onChange(this.windowName + ".resetElements('per')");
		powerComboBoxRepoSoliCurNuePosicion.onChange(this.windowName + ".resetElements('pos')");
		powerComboBoxRepoSoliCurNueMateria.onChange(this.windowName + ".resetElements('mat')");
    },
	
	resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxRepoSoliCurNueSuborganizacion);
	  		Tool.rstPwrCmb(powerComboBoxRepoSoliCurNueCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoSoliCurNuePeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoSoliCurNuePosicion);
			Tool.rstPwrCmb(powerComboBoxRepoSoliCurNueMateria);
	    	if (powerComboBoxRepoSoliCurNueOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoSoliCurNuevo, powerComboBoxRepoSoliCurNueSuborganizacion, 1, 2, powerComboBoxRepoSoliCurNueOrganizacion);
		}

		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(powerComboBoxRepoSoliCurNueCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoSoliCurNuePeriodo);
	  		Tool.rstPwrCmb(powerComboBoxRepoSoliCurNuePosicion);
	  		Tool.rstPwrCmb(powerComboBoxRepoSoliCurNueMateria);
	    	if (powerComboBoxRepoSoliCurNueSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoSoliCurNuevo, powerComboBoxRepoSoliCurNueCarrera, -1, 3, powerComboBoxRepoSoliCurNueSuborganizacion);
		}
		
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(powerComboBoxRepoSoliCurNuePeriodo);
	  		Tool.rstPwrCmb(powerComboBoxRepoSoliCurNuePosicion);
	  		Tool.rstPwrCmb(powerComboBoxRepoSoliCurNueMateria);
	    	if (powerComboBoxRepoSoliCurNueCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoSoliCurNuevo, powerComboBoxRepoSoliCurNuePeriodo, 0, 1, powerComboBoxRepoSoliCurNueCarrera.setModeReturnGetText(5));
		}
		
	    else if (element == 'per') {
          Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsRepoSoliCurNuevo, powerComboBoxRepoSoliCurNuePosicion, 0, 1, powerComboBoxRepoSoliCurNueCarrera.setModeReturnGetText(2));        		
    	} 
    	else if (element == 'pos') {
          Tool.getPowerComboData('MantObject', 'getMantPensumMateria', dialogsRepoSoliCurNuevo, powerComboBoxRepoSoliCurNueMateria, 0, 1, powerComboBoxRepoSoliCurNueCarrera, powerComboBoxRepoSoliCurNuePosicion);        		
    	} 
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
		rep.addText(400, 173, 'PERIODO:    '+powerComboBoxRepoSoliCurNuePeriodo.getOption(),false);
		rep.addText(400, 190, 'POSICIÓN:  '+powerComboBoxRepoSoliCurNuePosicion.getOption(),false);
		rep.addText(400, 207, 'MATERIA:     '+powerComboBoxRepoSoliCurNueMateria.getOption(),false);
		//////////////////////////////////////////GENERACION//DE//TABLA/////////////////////////////////////////////////////////////////////////////////////
        rep.addTable('tablaCurSolicitado',['Cod Materia', 'Materia','Cantidad'],395,232);
        rep.setSizeColumnArray([150,540,100]);
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
					if (powerComboBoxRepoSoliCurNuePeriodo.valid(dialogsRepoSoliCurNuevo))
						if (powerComboBoxRepoSoliCurNuePosicion.valid(dialogsRepoSoliCurNuevo))
							if (powerComboBoxRepoSoliCurNueMateria.valid(dialogsRepoSoliCurNuevo)){
								rlx.add('reg', powerComboBoxRepoSoliCurNueMateria); 
								Tool.cnnSrv('ReportObject', 'getCursoSolicitado', this.windowName + '.reporte()', rlx); 
						    	}
						    
    }
};
