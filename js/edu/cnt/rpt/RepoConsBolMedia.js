var dialogsRepoConsBolMedia = new Object();
var editsRepoConsBolMediaCedula = new Object();
var editsRepoConsBolMediaNombre = new Object();
var editsRepoConsBolMediaApellido = new Object();
var pcbRepoConsBolMediaPeriodo = new Object();
var pcbRepoConsBolMediaCarrera = new Object();
var pcbRepoConsBolMediaLapso = new Object();
var imgButtonsRepoConsBolMediaBoletin = new Object();
var imgButtonsRepoConsBolMediaFinal = new Object();
var imgButtonsRepoConsBolMediaSalir = new Object();
var mw_RepoConsBolMedia = new Object();// minWindow

var RepoConsBolMedia = {
    windowName : 'RepoConsBolMedia',
    isCreate: false,
    existeCod: false,
    
    show: function() {
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoConsBolMedia.isByClean())
			this.limpiar();			
		dialogsRepoConsBolMedia.show();
	},
	
    hide: function() {
        dialogsRepoConsBolMedia.hide();
    },
    
    createMWs: function() {
        mwRepoConsBolMedia = desktop.addMinWindow('C.B.Media', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoConsBolMedia.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsConsBolMedia_Init : function() {
        dialogsRepoConsBolMedia.setMinimizeXY(0,0);
        dialogsRepoConsBolMedia.setCenterScreen();
        dialogsRepoConsBolMedia.addSpace(0,0,20);
        dialogsRepoConsBolMedia.addLn(1,1,1);
		dialogsRepoConsBolMedia.setHeightCell(1,1,13);		
		dialogsRepoConsBolMedia.addObject(editsRepoConsBolMediaCedula,25,40);		
		editsRepoConsBolMediaCedula.setSizeEdit(200);
		dialogsRepoConsBolMedia.addObject(editsRepoConsBolMediaNombre,25,75);		
		editsRepoConsBolMediaNombre.setSizeEdit(200);
		dialogsRepoConsBolMedia.addObject(editsRepoConsBolMediaApellido,25,110);		
		editsRepoConsBolMediaApellido.setSizeEdit(200);		
		dialogsRepoConsBolMedia.addObject(pcbRepoConsBolMediaCarrera,25,145);		
		pcbRepoConsBolMediaCarrera.setWidthCombo(190);
		dialogsRepoConsBolMedia.addObject(pcbRepoConsBolMediaPeriodo,25,180);		
		pcbRepoConsBolMediaPeriodo.setWidthCombo(190);
		dialogsRepoConsBolMedia.addObject(pcbRepoConsBolMediaLapso,25,215);		
		pcbRepoConsBolMediaLapso.setWidthCombo(190);        
		dialogsRepoConsBolMedia.addObject(imgButtonsRepoConsBolMediaBoletin,23,250);
		dialogsRepoConsBolMedia.addObject(imgButtonsRepoConsBolMediaSalir,184,250);
    },

    create : function() {
    	dialogsRepoConsBolMedia = dialogs.create('dialogsRepoConsBolMedia',0,0,333,264,'CONSULTAR BOLETIN');
    	dialogsRepoConsBolMedia.setAdjY(80);
    	editsRepoConsBolMediaCedula = edits.create('editsRepoConsBolMediaCedula','editsRepoConsBolMediaCedula','C.i. (*):',1,80,'normal');
    	editsRepoConsBolMediaCedula.setValidInteger();
      	editsRepoConsBolMediaCedula.setFieldFind(true);
      	editsRepoConsBolMediaNombre = edits.create('editsRepoConsBolMediaNombre','editsRepoConsBolMediaNombre','Nombre (*):',1,80,'normal');
      	editsRepoConsBolMediaNombre.setValidEmpty();
      	editsRepoConsBolMediaNombre.setFieldFind(true);
      	editsRepoConsBolMediaApellido = edits.create('editsRepoConsBolMediaApellido','editsRepoConsBolMediaApellido','Apellido (*):',1,80,'normal');
      	editsRepoConsBolMediaApellido.setValidEmpty();
      	editsRepoConsBolMediaApellido.setFieldFind(true);
      	pcbRepoConsBolMediaCarrera = powerComboBox.create('pcbRepoConsBolMediaCarrera','pcbRepoConsBolMediaCarrera','Carrera:',1,76);
    	pcbRepoConsBolMediaCarrera.enableReadOnlyEditor();
    	pcbRepoConsBolMediaCarrera.addEmptyOption();
    	pcbRepoConsBolMediaCarrera.setValidEmpty();
    	pcbRepoConsBolMediaPeriodo = powerComboBox.create('pcbRepoConsBolMediaPeriodo','pcbRepoConsBolMediaPeriodo','Periodo (*):',1,76);
    	pcbRepoConsBolMediaPeriodo.setValidEmpty();
    	pcbRepoConsBolMediaPeriodo.enableReadOnlyEditor();
    	pcbRepoConsBolMediaPeriodo.addEmptyOption();
    	pcbRepoConsBolMediaLapso = powerComboBox.create('pcbRepoConsBolMediaLapso','pcbRepoConsBolMediaLapso','Lapso:',1,76);
    	pcbRepoConsBolMediaLapso.enableReadOnlyEditor();
    	pcbRepoConsBolMediaLapso.addEmptyOption();
    	pcbRepoConsBolMediaLapso.setValidEmpty();
      	imgButtonsRepoConsBolMediaBoletin = imgButtons.create('imgButtonsRepoConsBolMediaBoletin','Ver Boletín','generar_1.png');
      	imgButtonsRepoConsBolMediaFinal = imgButtons.create('imgButtonsRepoConsBolMediaFinal','Ver Boletín Final','generar_1.png');
      	imgButtonsRepoConsBolMediaSalir = imgButtons.create('imgButtonsRepoConsBolMediaSalir','Salir','salir.png');
    	imgButtonsRepoConsBolMediaBoletin.setDimension(125,22);
    	imgButtonsRepoConsBolMediaFinal.setDimension(125,22);
    	imgButtonsRepoConsBolMediaSalir.setDimension(125,22);
	},

	init : function() {
		this.create();
		this.setEvents(); 
		this.dialogsConsBolMedia_Init();
		this.createMWs();
	},
	
	limpiarFind : function(ix) {
		this.existeCod = false;
		editsRepoConsBolMediaCedula.hideId = -1;
		this.posOriBoton();
		
  		switch (ix) {
		case 1: 
			editsRepoConsBolMediaNombre.setValue("");
			editsRepoConsBolMediaApellido.setValue("");  		
			break;
		case 2: 
			editsRepoConsBolMediaCedula.setValue("");
			editsRepoConsBolMediaApellido.setValue("");  		
			break;
		default:
			editsRepoConsBolMediaCedula.setValue("");
		    editsRepoConsBolMediaNombre.setValue("");
			break;
		} 
  		Tool.rstPwrCmb(pcbRepoConsBolMediaCarrera);
  		Tool.rstPwrCmb(pcbRepoConsBolMediaPeriodo);
  	},

   	loadDataCarrInscrip : function() {
  		Tool.loadPowerComboData(dialogsRepoConsBolMedia, pcbRepoConsBolMediaCarrera, -1, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			pcbRepoConsBolMediaCarrera.setSelectedIndex(1); 
  			this.buscarPeriodo(); 
  		}
   	},

   	buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");

    	if (editsRepoConsBolMediaCedula.getValue() != '' && editsRepoConsBolMediaNombre.getValue() != '' && editsRepoConsBolMediaApellido.getValue() != '') {
			if (pcbRepoConsBolMediaCarrera.setModeReturnGetText(0).getText() == "" || pcbRepoConsBolMediaCarrera.setModeReturnGetText(0).getText() == "-1") {
		  		Tool.rstPwrCmb(pcbRepoConsBolMediaCarrera);
		  		Tool.rstPwrCmb(pcbRepoConsBolMediaPeriodo);
		  		rlx.add('reg', editsRepoConsBolMediaCedula);
	    		Tool.cnnSrv('MantObject', 'getCarrera', this.windowName + '.loadDataCarrInscrip()', rlx);
			}
			else {
	  			this.buscarPeriodo();
			}
		}
		else if (editsRepoConsBolMediaCedula.getValue() != '' || editsRepoConsBolMediaNombre.getValue() != '' || editsRepoConsBolMediaApellido.getValue() != '') {
	  		Tool.rstPwrCmb(pcbRepoConsBolMediaCarrera);
	  		Tool.rstPwrCmb(pcbRepoConsBolMediaPeriodo);
        	ResuBusqueda.setObjectExtFnc(editsRepoConsBolMediaCedula, editsRepoConsBolMediaNombre, editsRepoConsBolMediaApellido, 'RepoConsBolMedia.buscar()');
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsRepoConsBolMediaCedula, editsRepoConsBolMediaCedula, editsRepoConsBolMediaNombre, editsRepoConsBolMediaNombre, editsRepoConsBolMediaApellido, editsRepoConsBolMediaApellido);
		}
		else {
			Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},
	
    buscarPeriodo : function(element) {
		var rlx = xmlStructs.createRecordList("rlx");

		this.existeCod = false;
		imgButtonsRepoConsBolMediaFinal.hide();
		if (pcbRepoConsBolMediaCarrera.getOption() != "") {
	    	rlx.add('reg', pcbRepoConsBolMediaCarrera.setModeReturnGetText(2)); 
	        Tool.cnnSrv('MantObject', 'getPeriodoXNivelAcad', this.windowName + '.loadDataPeriodo()', rlx);
		}
	},

	loadDataPeriodo: function() {
  		Tool.loadPowerComboData(dialogsRepoConsBolMedia, pcbRepoConsBolMediaPeriodo, 0, 1, json('getPeriodoXNivelAcad'));
  		if (json('getPeriodoXNivelAcad').data[0].length > 0) {
  			pcbRepoConsBolMediaPeriodo.setSelectedIndex(1);
  			Tool.getPowerComboData('MantObject', 'getMantLapso', dialogsRepoConsBolMedia, pcbRepoConsBolMediaLapso, -1, 0, pcbRepoConsBolMediaPeriodo)  			
  		}
    },
	
   	loadDataPers : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		editsRepoConsBolMediaCedula.readOnly(true);
  	    editsRepoConsBolMediaNombre.readOnly(true);
  	    editsRepoConsBolMediaApellido.readOnly(true);
  	    editsRepoConsBolMediaCedula.onEnter("");
  		editsRepoConsBolMediaCedula.onChange("");
  		editsRepoConsBolMediaNombre.onEnter("");
  		editsRepoConsBolMediaNombre.onChange("");
  		editsRepoConsBolMediaApellido.onEnter("");
  		editsRepoConsBolMediaApellido.onChange("");
    	if (json('getPermiso').data[0][0] != 'ACTIVO') {
  			editsRepoConsBolMediaCedula.setValue(json('getDatoPersona').data[0][0]);
  	  		editsRepoConsBolMediaNombre.setValue(json('getDatoPersona').data[1][0]);
  	  		editsRepoConsBolMediaApellido.setValue(json('getDatoPersona').data[2][0]);
  	  		editsRepoConsBolMediaCedula.hideId = json('getDatoPersona').data[3][0];
  	  		rlx.add('reg', editsRepoConsBolMediaCedula);
  			Tool.cnnSrv('MantObject', 'getCarrera', this.windowName + '.loadDataCarrInscrip()', rlx);
  		}
    	else {
  	    	editsRepoConsBolMediaCedula.readOnly(false);
  	    	editsRepoConsBolMediaNombre.readOnly(false);
  	    	editsRepoConsBolMediaApellido.readOnly(false);
  		  	editsRepoConsBolMediaCedula.onEnter(this.windowName + ".buscar()");
  		  	editsRepoConsBolMediaCedula.onChange(this.windowName + ".limpiarFind(1)");
  		  	editsRepoConsBolMediaNombre.onEnter(this.windowName + ".buscar()");
  		  	editsRepoConsBolMediaNombre.onChange(this.windowName + ".limpiarFind(2)");
  		  	editsRepoConsBolMediaApellido.onEnter(this.windowName + ".buscar()");
  		  	editsRepoConsBolMediaApellido.onChange(this.windowName + ".limpiarFind(3)");
    	}
        dialogsRepoConsBolMedia.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    limpiar : function() {
		this.existeCod = false;
    	editsRepoConsBolMediaCedula.hideId = -1;
  		editsRepoConsBolMediaCedula.setValue(""); 
  		editsRepoConsBolMediaNombre.setValue(""); 
  		editsRepoConsBolMediaApellido.setValue(""); 
  		Tool.rstPwrCmb(pcbRepoConsBolMediaCarrera);
  		Tool.rstPwrCmb(pcbRepoConsBolMediaPeriodo);
  		Tool.rstPwrCmb(pcbRepoConsBolMediaLapso);
  		imgButtonsRepoConsBolMediaFinal.hide();
  		dialogsRepoConsBolMedia.setMsg("");
		Tool.cnnSrv('InscripObject', 'getCargarPersona', this.windowName + '.loadDataPers()');
	},

	setEvents: function() {
		editsRepoConsBolMediaCedula.onEnter(this.windowName + ".buscar()");
  		editsRepoConsBolMediaCedula.onChange(this.windowName + ".limpiarFind(1)");
  		editsRepoConsBolMediaCedula.onClick(this.windowName + ".limpiarFind(1)");
  		editsRepoConsBolMediaNombre.onEnter(this.windowName + ".buscar()");
  		editsRepoConsBolMediaNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsRepoConsBolMediaNombre.onClick(this.windowName + ".limpiarFind(2)");
  		editsRepoConsBolMediaApellido.onEnter(this.windowName + ".buscar()");
  		editsRepoConsBolMediaApellido.onChange(this.windowName + ".limpiarFind(3)");
  		editsRepoConsBolMediaApellido.onClick(this.windowName + ".limpiarFind(3)");
		pcbRepoConsBolMediaCarrera.onChange(this.windowName + ".buscarPeriodo()");
		pcbRepoConsBolMediaPeriodo.onChange("Tool.getPowerComboData('MantObject', 'getMantLapso', dialogsRepoConsBolMedia, pcbRepoConsBolMediaLapso, -1, 0, pcbRepoConsBolMediaPeriodo)");
		pcbRepoConsBolMediaLapso.onChange(this.windowName + ".showBoletinFinal()");
    	imgButtonsRepoConsBolMediaBoletin.onClick(this.windowName + ".existeBoletinCodigo()");
    	imgButtonsRepoConsBolMediaFinal.onClick(this.windowName + ".reporteBoletinFinal()");
        imgButtonsRepoConsBolMediaSalir.onClick('dialogsRepoConsBolMedia.close()');
    },
	
    showBoletinFinal: function() {
    	if (pcbRepoConsBolMediaLapso.getOption() == '3er Momento' && parseInt(pcbRepoConsBolMediaCarrera.setModeReturnGetText(4).getText()) == 2) {
    		dialogsRepoConsBolMedia.setPositionObject(imgButtonsRepoConsBolMediaBoletin,23,250);
    		dialogsRepoConsBolMedia.addObject(imgButtonsRepoConsBolMediaFinal,184,250);
    		dialogsRepoConsBolMedia.setPositionObject(imgButtonsRepoConsBolMediaSalir,184,280);
            imgButtonsRepoConsBolMediaFinal.show();
    	}
		else { 
			this.posOriBoton();
		}
    },
    
    posOriBoton: function() {
		imgButtonsRepoConsBolMediaFinal.hide();
		dialogsRepoConsBolMedia.setPositionObject(imgButtonsRepoConsBolMediaBoletin,23,250);
		dialogsRepoConsBolMedia.setPositionObject(imgButtonsRepoConsBolMediaSalir,184,250);
    },
    
    existeBoletinCodigo : function() {
        var rlx = xmlStructs.createRecordList("rlx");

		if (editsRepoConsBolMediaCedula.valid(dialogsRepoConsBolMedia))
			if (editsRepoConsBolMediaNombre.valid(dialogsRepoConsBolMedia))
				if (editsRepoConsBolMediaApellido.valid(dialogsRepoConsBolMedia))
					if (pcbRepoConsBolMediaCarrera.valid(dialogsRepoConsBolMedia))
						if (pcbRepoConsBolMediaPeriodo.valid(dialogsRepoConsBolMedia))
							if (pcbRepoConsBolMediaLapso.valid(dialogsRepoConsBolMedia)) {
								rlx.add('reg', pcbRepoConsBolMediaPeriodo);
								rlx.add('reg', pcbRepoConsBolMediaLapso.setModeReturnGetText(3));
								rlx.addInt('reg', editsRepoConsBolMediaCedula.hideId, true);
								Tool.cnnSrv('MantObject', 'getExisteBoletinCodigo', this.windowName + '.validaExiste()', rlx);
							}
    },

    validaExiste : function() {
    	if (parseInt(json('getExisteBoletinCodigo').data[0][0]) > 0) {
    		this.existeCod = true;
    	}
    	this.reporteBoletin();
    },

    reporteBoletin: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
		rlx.add('reg', pcbRepoConsBolMediaPeriodo);
		rlx.add('reg', pcbRepoConsBolMediaLapso.setModeReturnGetText(3));
		rlx.addInt('reg', -1, true);//posicion
		rlx.addInt('reg', -1, true);//seccion
		rlx.add('reg', pcbRepoConsBolMediaLapso.setModeReturnGetText(6));//recomendacion
		rlx.addInt('reg', editsRepoConsBolMediaCedula.hideId, true);
		if (parseInt(pcbRepoConsBolMediaCarrera.setModeReturnGetText(4).getText()) == 2) {//CARRERA PRIMARIA
			if (this.existeCod == true) {
				rlx = xmlStructs.createRecordList("rlx");
				rlx.add('reg', pcbRepoConsBolMediaPeriodo);
				rlx.add('reg', pcbRepoConsBolMediaLapso.setModeReturnGetText(3));
				rlx.addInt('reg', -1, true);//posicion
				rlx.addInt('reg', -1, true);//seccion
				rlx.addInt('reg', editsRepoConsBolMediaCedula.hideId, true);
				Tool.cnnSrv('ReportObject', 'getMasivoPrimariaCodificado', 'dlgWait.hide()', rlx);
			}
			else {
				rlx.add('reg', pcbRepoConsBolMediaCarrera.setModeReturnGetText(0));
				Tool.cnnSrv('ReportObject', 'getMasivoPrimaria', 'dlgWait.hide()', rlx);
			}
		}
		else if (parseInt(pcbRepoConsBolMediaCarrera.setModeReturnGetText(4).getText()) == 1)//CARRERA INICIAL
			if (this.existeCod == true) {
				rlx = xmlStructs.createRecordList("rlx");
				rlx.add('reg', pcbRepoConsBolMediaPeriodo);
				rlx.add('reg', pcbRepoConsBolMediaLapso.setModeReturnGetText(3));
				rlx.addInt('reg', -1, true);//posicion
				rlx.addInt('reg', -1, true);//seccion
				rlx.addInt('reg', editsRepoConsBolMediaCedula.hideId, true);
				Tool.cnnSrv('ReportObject', 'getMasivoPrimariaCodificado', 'dlgWait.hide()', rlx);
			}
			else
				Tool.cnnSrv('ReportObject', 'getMasivoInicial', 'dlgWait.hide()', rlx);
		else {//CARRERA BACHILLERATO
			rlx.add('reg', pcbRepoConsBolMediaCarrera.setModeReturnGetText(0));
			Tool.cnnSrv('ReportObject', 'getMasivoBachillerato', 'dlgWait.hide()', rlx);
		}
    },
    
    reporteBoletinFinal: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (editsRepoConsBolMediaCedula.valid(dialogsRepoConsBolMedia))
			if (editsRepoConsBolMediaNombre.valid(dialogsRepoConsBolMedia))
				if (editsRepoConsBolMediaApellido.valid(dialogsRepoConsBolMedia))
					if (pcbRepoConsBolMediaCarrera.valid(dialogsRepoConsBolMedia))
						if (pcbRepoConsBolMediaPeriodo.valid(dialogsRepoConsBolMedia))
							if (pcbRepoConsBolMediaLapso.valid(dialogsRepoConsBolMedia)) {
								rlx.add('reg', pcbRepoConsBolMediaPeriodo);
						        rlx.addInt('reg', editsRepoConsBolMediaCedula.hideId, true);
								rlx.addInt('reg', -1, true);//posicion
								rlx.addInt('reg', -1, true);//seccion
								Tool.cnnSrv('ReportObject', 'getBoletinFinal', 'dlgWait.hide()', rlx);
							}
    }
};