var dialogsContInas = new Object();
var pcbContInaOrg = new Object();
var pcbContInaSuborg = new Object();
var pcbContInaCarrera = new Object();
var pcbContInaPeriodo = new Object();
var pcbContInaPosicion = new Object();
var pcbContInaLapso = new Object();
var pcbContInaMateria = new Object();
var pcbContInaSeccion = new Object();
var gridsContInasistencia = new Object();
var imgButtonsContInaGuardar = new Object();
var imgButtonsContInaLimpiar = new Object();
var imgButtonsContInaBuscar = new Object();
var imgButtonsContInaSalir = new Object();
var mwContInasistencia = new Object();// minWindow

var ContInasistencia = {
	windowName : 'ContInasistencia',
	isCreate : false,
	idRsmLapso : 0,
	idPers : 0,

	show: function(){
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsContInas.isByClean())
			this.limpiar('lmp');			
		dialogsContInas.show();
	},
	
	hide: function() {
		dialogsContInas.hide();
	},
	
    createMWs: function() {
        mwContInasistencia = desktop.addMinWindow('C.Inasistencia', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsContInas.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsContInas_Init : function() {
        dialogsContInas.setMinimizeXY(0,0);
        dialogsContInas.setCenterScreen();
        dialogsContInas.addSpace(0,0,20);
        dialogsContInas.addLn(1,1,1);
		dialogsContInas.setHeightCell(1,1,16); 
		dialogsContInas.addObject(pcbContInaOrg, 25, 35);
		dialogsContInas.addObject(pcbContInaSuborg, 289, 35);
		dialogsContInas.addObject(pcbContInaCarrera, 575, 35);
		dialogsContInas.addObject(pcbContInaPeriodo, 25, 60);
		dialogsContInas.addObject(pcbContInaPosicion, 289, 60);
		dialogsContInas.addObject(pcbContInaLapso, 575, 60);
		dialogsContInas.addObject(pcbContInaMateria, 25, 85);
		dialogsContInas.addObject(pcbContInaSeccion, 575, 85);
		dialogsContInas.addLn(3,1,1);
		dialogsContInas.addObject(gridsContInasistencia.getObject(), 20, 115);
        dialogsContInas.addObject(imgButtonsContInaGuardar, 168, 560);
        dialogsContInas.addObject(imgButtonsContInaLimpiar, 298, 560);
	    dialogsContInas.addObject(imgButtonsContInaBuscar, 428, 560);	
        dialogsContInas.addObject(imgButtonsContInaSalir, 558, 560);
        imgButtonsContInaGuardar.setDimension(100,22);
        imgButtonsContInaBuscar.setDimension(100,22);
        imgButtonsContInaLimpiar.setDimension(100,22);
        imgButtonsContInaSalir.setDimension(100,22);
    },
  
	gridsContInasistencia_Init : function() {
        gridsContInasistencia.setFixColRow(false,true);
        gridsContInasistencia.addTitleVectorX(['Nº','C.i.','Apellido','Nombre','Inasistencia','Observación','idRsmLapso','idPers','idCurso','idLapso']);
        gridsContInasistencia.showData();
        gridsContInasistencia.setSizeCol(1,30);
        gridsContInasistencia.setSizeCol(2,85);
        gridsContInasistencia.setSizeCol(3,185);
        gridsContInasistencia.setSizeCol(4,185);
        gridsContInasistencia.setSizeCol(5,90);
        gridsContInasistencia.setEditCol(5);
        gridsContInasistencia.setSizeCol(6,200);
        gridsContInasistencia.setEditCol(6);
        gridsContInasistencia.setSizeCol(7,0);
        gridsContInasistencia.setSizeCol(8,0);
        gridsContInasistencia.setSizeCol(9,0);
        gridsContInasistencia.setSizeCol(10,0);
        gridsContInasistencia.hideCol(7);
        gridsContInasistencia.hideCol(8);
        gridsContInasistencia.hideCol(9);
        gridsContInasistencia.hideCol(10);
        gridsContInasistencia.autoSaveEnable();
        gridsContInasistencia.setXMLStruct(xmlStructs);
        for(var i=1; i<gridsContInasistencia.getTotalRows(); i++) 
        	gridsContInasistencia.onKeyUpCell(i, 5, this.windowName + ".checkKeyPress()");
	},

	checkKeyPress : function() {
		if(gridsContInasistencia.getDataCell(5).trim() != "") {
			if(isNaN(gridsContInasistencia.getDataCell(5).trim())) {
				dialogsContInas.setMsg("SOLO PUEDE INGRESAR NUMEROS.");
				gridsContInasistencia.getEdit(gridsContInasistencia.getRowCell(), 5).value = "";
				gridsContInasistencia.setDataCell(gridsContInasistencia.getRowCell(), 5, "");
				gridsContInasistencia.setFocusCell(gridsContInasistencia.getRowCell(), 5);            
			}   
		}
		else
			dialogsContInas.setMsg("");
    },
    
	create : function() {
		dialogsContInas = dialogs.create('dialogsContInas',0,0,819,572,'CONTROL DE INASISTENCIA');
		dialogsContInas.setAdjY(20);
		pcbContInaOrg = powerComboBox.create('pcbContInaOrg','pcbContInaOrg','Organización (+):',1,105);
		pcbContInaOrg.setValidEmpty();
		pcbContInaOrg.addEmptyOption();
		pcbContInaOrg.enableReadOnlyEditor();
		pcbContInaSuborg = powerComboBox.create('pcbContInaSuborg','pcbContInaSuborg','Suborganización (^):',1,125);
		pcbContInaSuborg.setValidEmpty();
		pcbContInaSuborg.addEmptyOption();
		pcbContInaSuborg.enableReadOnlyEditor();
		pcbContInaCarrera = powerComboBox.create('pcbContInaCarrera','pcbContInaCarrera','Carrera (^):',1,75);
		pcbContInaCarrera.setValidEmpty();
		pcbContInaCarrera.addEmptyOption();
		pcbContInaCarrera.enableReadOnlyEditor();
		pcbContInaPeriodo = powerComboBox.create('pcbContInaPeriodo','pcbContInaPeriodo','Periodo (^):',1,105);
		pcbContInaPeriodo.setValidEmpty();
		pcbContInaPeriodo.addEmptyOption();
		pcbContInaPeriodo.enableReadOnlyEditor();
		pcbContInaPosicion = powerComboBox.create('pcbContInaPosicion','pcbContInaPosicion','Posición (^):',1,125);
		pcbContInaPosicion.setValidEmpty();
		pcbContInaPosicion.addEmptyOption();
		pcbContInaPosicion.enableReadOnlyEditor();
		pcbContInaPosicion.setFieldFind(true);
		pcbContInaLapso = powerComboBox.create('pcbContInaLapso','pcbContInaLapso','Lapso (^):',1,75);
		pcbContInaLapso.setValidEmpty();
      	pcbContInaLapso.addEmptyOption();
      	pcbContInaLapso.enableReadOnlyEditor();
      	pcbContInaSeccion = powerComboBox.create('pcbContInaSeccion','pcbContInaSeccion','Sección (*):',1,75);
      	pcbContInaSeccion.setValidEmpty();
      	pcbContInaSeccion.addEmptyOption();
      	pcbContInaSeccion.enableReadOnlyEditor();
      	pcbContInaMateria = powerComboBox.create('pcbContInaMateria','pcbContInaMateria','Materia (*):',1,105);
      	pcbContInaMateria.setValidEmpty();
      	pcbContInaMateria.addEmptyOption();
      	pcbContInaMateria.enableReadOnlyEditor();
      	pcbContInaMateria.setDataType('string');
      	pcbContInaMateria.setFieldFind(true);
		pcbContInaMateria.setWidthCombo(412);
      	gridsContInasistencia = grids.create('gridsContInasistencia',20,10);
      	imgButtonsContInaGuardar = imgButtons.create('imgButtonsContInaGuardar','Guardar.','ok.png');
      	imgButtonsContInaLimpiar = imgButtons.create('imgButtonsContInaLimpiar','Limpiar','limpiar.png');
      	imgButtonsContInaBuscar = imgButtons.create('imgButtonsContInaBuscar','Buscar','icono_buscar.png');
      	imgButtonsContInaSalir = imgButtons.create('imgButtonsContInaSalir','Salir','salir.png');
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsContInas_Init();  
		this.gridsContInasistencia_Init();
		this.createMWs();
	},

	limpiar: function(tipo) {
		this.idRsmLapso = 0;
		this.idPers = 0;
  		pcbContInaOrg.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbContInaSuborg);
  		Tool.rstPwrCmb(pcbContInaCarrera);
  		Tool.rstPwrCmb(pcbContInaPeriodo);
  		Tool.rstPwrCmb(pcbContInaPosicion);
  		Tool.rstPwrCmb(pcbContInaLapso);
  		Tool.rstPwrCmb(pcbContInaMateria);
  		Tool.rstPwrCmb(pcbContInaSeccion);
  		gridsContInasistencia.clean();
  		dialogsContInas.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},
	
	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsContInas, pcbContInaOrg, 0, 1, json('getData'));
		Tool.getContext(dialogsContInas, pcbContInaOrg, pcbContInaSuborg, pcbContInaCarrera, this.windowName + ".resetElements('carr')");
	},
	
    nextValue : function() {
    	rowCell2 = gridsContInasistencia.getRowCell() + 1;  
    	if(rowCell2 >= gridsContInasistencia.getTotalRows()) {          
    		rowCell2 = gridsContInasistencia.getTotalRows() - 1;
    		gridsContInasistencia.nextValue();
    	}
    	gridsContInasistencia.setFocusCell(rowCell2, 5);
    	gridsContInasistencia.selectedRow(rowCell2);
    },
		
	setEvents: function() {
		pcbContInaOrg.onChange(this.windowName + ".resetElements('org')");
		pcbContInaSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbContInaCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbContInaPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbContInaPosicion.onChange(this.windowName + ".resetElements('pos')");
		pcbContInaLapso.onChange(this.windowName + ".resetElements('lap')");
		pcbContInaMateria.onChange(this.windowName + ".resetElements('mat')");
		pcbContInaSeccion.onChange(this.windowName + ".resetElements('sec')");
		gridsContInasistencia.onEnter(this.windowName + ".nextValue()");
  		imgButtonsContInaGuardar.onClick(this.windowName + ".coreUpdate()");
  		imgButtonsContInaLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsContInaBuscar.onClick(this.windowName + ".buscar()");
        imgButtonsContInaSalir.onClick('dialogsContInas.close()');
    },
    
    buscar: function() {
		if (pcbContInaLapso.valid(dialogsContInas)) {
			if (pcbContInaMateria.valid(dialogsContInas)) 
				if (pcbContInaSeccion.valid(dialogsContInas)) {
					gridsContInasistencia.clean();
					Tool.getGridData('MantObject', 'getContInasistencia', dialogsContInas, gridsContInasistencia, false, pcbContInaLapso, pcbContInaSeccion);
				}
		}
	},
    
	resetElements: function(element) {
		var rlx = xmlStructs.createRecordList("rlx");

		this.idRsmLapso = 0;
		this.idPers = 0;
		gridsContInasistencia.clean();
		
		if (element == 'org') {
			Tool.rstPwrCmb(pcbContInaSuborg);
	  		Tool.rstPwrCmb(pcbContInaCarrera);
	  		Tool.rstPwrCmb(pcbContInaPeriodo);
	  		Tool.rstPwrCmb(pcbContInaLapso);
	  		Tool.rstPwrCmb(pcbContInaMateria);
			Tool.rstPwrCmb(pcbContInaPosicion);
			Tool.rstPwrCmb(pcbContInaSeccion);
	    	if (pcbContInaOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsContInas, pcbContInaSuborg, 1, 2, pcbContInaOrg);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbContInaCarrera);
	  		Tool.rstPwrCmb(pcbContInaPeriodo);
	  		Tool.rstPwrCmb(pcbContInaLapso);
	  		Tool.rstPwrCmb(pcbContInaMateria);
			Tool.rstPwrCmb(pcbContInaPosicion);
			Tool.rstPwrCmb(pcbContInaSeccion);
	    	if (pcbContInaSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsContInas, pcbContInaCarrera, -1, 3, pcbContInaSuborg);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbContInaPeriodo);
	  		Tool.rstPwrCmb(pcbContInaLapso);
	  		Tool.rstPwrCmb(pcbContInaMateria);
			Tool.rstPwrCmb(pcbContInaPosicion);
			Tool.rstPwrCmb(pcbContInaSeccion);
	    	if (pcbContInaCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsContInas, pcbContInaPeriodo, 0, 1, pcbContInaCarrera.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
			Tool.rstPwrCmb(pcbContInaSeccion);
	  		Tool.rstPwrCmb(pcbContInaMateria);
	  		rlx.add('reg', pcbContInaPeriodo);
	  		rlx.add('reg', pcbContInaCarrera.setModeReturnGetText(2));
    		Tool.cnnSrv("ReportObject", "getPosicionPlanifProf", this.windowName + ".loadDataPosicionLapso()", rlx);
    	} 
    	else if (element == 'pos') {
    		Tool.rstPwrCmb(pcbContInaSeccion);
	  		rlx.add('reg', pcbContInaPeriodo);
	  		rlx.add('reg', pcbContInaCarrera.setModeReturnGetText(2));
	  		rlx.add('reg', pcbContInaPosicion);
    		Tool.cnnSrv("ReportObject", "getMateriaPlanifProf", this.windowName + ".loadDataMateriaPosicion()", rlx);
    	} 
    	else if (element == 'mat') {
    		Tool.getPowerComboData('ReportObject', 'getSeccionPlanifProf', dialogsContInas, pcbContInaSeccion, -1, 1, pcbContInaPeriodo, pcbContInaCarrera.setModeReturnGetText(2), pcbContInaPosicion, pcbContInaMateria);
    	}
    	else if (element == 'sec') {
    		this.buscar();
    	}
	},
	
	loadDataPosicionLapso: function() {
  		Tool.loadPowerComboData(dialogsContInas, pcbContInaPosicion, 0, 1, json('getPosicionPlanifProf'));
  		Tool.loadPowerComboData(dialogsContInas, pcbContInaLapso, 3, 0, json('getMantLapso'));
	},
	
	loadDataMateriaPosicion: function() {
  		Tool.loadPowerComboData(dialogsContInas, pcbContInaMateria, 0, 1, json('getMateriaPlanifProf'));
  		pcbContInaMateria.setSizeHeight(300);
  		Tool.loadPowerComboData(dialogsContInas, pcbContInaSeccion, 0, 1, json('getSeccionPosicion'));
	},
	
	limpiarCoreUpdate: function() {
		this.idRsmLapso = 0;
		this.idPers = 0;
  		gridsContInasistencia.clean();
  		dialogsContInas.setMsg("");
  		this.buscar();
	},

	coreUpdate: function() {
        if (pcbContInaOrg.valid(dialogsContInas))
        	if (pcbContInaSuborg.valid(dialogsContInas))
        		if (pcbContInaCarrera.valid(dialogsContInas))
        			if (pcbContInaPeriodo.valid(dialogsContInas))
        				if (pcbContInaPosicion.valid(dialogsContInas))
        					if (pcbContInaLapso.valid(dialogsContInas))
        						if (pcbContInaSeccion.valid(dialogsContInas))
        							if (pcbContInaMateria.valid(dialogsContInas)) 
        								Tool.cnnSrv('MantObject', 'setContInasistencia', this.windowName + '.limpiarCoreUpdate()', gridsContInasistencia.getXMLStruct("rlxListaEval", [5,6]));	
	}
};