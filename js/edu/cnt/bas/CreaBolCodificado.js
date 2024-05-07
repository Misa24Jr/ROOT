var dialogsCreaBolCodificado = {};
var pcbCreaBolCodOrg = {};
var pcbCreaBolCodSuborg = {};
var pcbCreaBolCodCarr = {};
var pcbCreaBolCodPeriodo = {};
var pcbCreaBolCodPosicion = {};
var pcbCreaBolCodSeccion = {};
var pcbCreaBolCodLapso = {};
var editsCreaBolCodProyecto = {};
var pcbCreaBolCodArea = {};
var tabsCreaBolCodificado = {};
var editsCreaBolCodEstudiante = {};
var memoCreaBolCodRedaccion = {};
var memoCreaBolCodRecomendacion = {};
var memoCreaBolCodDescripcion = {};
var lgEvaluacion = new ListGrid({"widthListCol":307, "widthCells":28,  "bgControlBar":"rgba(200,200,200,0.7)", "totalCol":19});
var lgObservacion = new ListGrid({"widthListCol":307, "widthCells":28, "bgControlBar":"rgba(200,200,200,0.7)", "grantX":true, "setLastCell":true, "totalCol":18});
var imgButtonsCreaBolCodGuardar = {};
var imgButtonsCreaBolCodEliminar = {};
var imgButtonsCreaBolCodVerBoletin = {};
var imgButtonsCreaBolCodVerHoja = {};
var imgButtonsCreaBolCodReporte = {};
var imgButtonsCreaBolCodLimpiar = {};
var imgButtonsCreaBolCodSalir = {};
var mwCreaBolCodificado  = {};// minWindow 

//****************** ESTRUCTURAS DE MENU PARA EL DIALOGO *******************
var MenuDlgCreBolCodificado = {
    idPanelMenu : 0,
	level : 0,
    captions : ['Mantenimiento'],
    functs : [''],
	subMenues : [1],
    icons : [''], 
    enableOption : [true]	
};
	  	
var SubCreBolCodificado = {	
	idPanelMenu : 1,
	level : 1,
    captions : ['Codificar Indicador','Codificar Calificativo','Codificar Observación'],
    functs : ['exeShow("js/edu/cnt/bas/","MantEvaCodificada")','exeShow("js/edu/cnt/bas/","MantCalificativos")','exeShow("js/edu/cnt/bas/","MantCodObservacion")'],
    subMenues : [0,0,0],
    icons : ['images/evaluacion_2.png','images/evaluacion_2.png','images/evaluacion_2.png'], 
    enableOption : [true,true,true,true],	
	parentMenu : MenuDlgCreBolCodificado,
	parentOpc : 0
};

var CreaBolCodificado = {
	windowName: 'CreaBolCodificado',
	isCreate: false,
	idBoletinInd: -1,
	idBoletinObs: -1,
	rowHeadIndicador: -1,
	colHeadIndicador: -1,
	
	show: function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsCreaBolCodificado.isByClean()) 
			this.limpiar('init');
		dialogsCreaBolCodificado.show();
	},
	
	hide: function() {
		dialogsCreaBolCodificado.hide();
	},
	
	createMWs: function() {
		mwCreaBolCodificado = desktop.addMinWindow('B. Codificado', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsCreaBolCodificado.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},
	
	dialogsCreaBolCodificado_Init: function() {
		dialogsCreaBolCodificado.setMenu(MenuDlgCreBolCodificado);
		dialogsCreaBolCodificado.setSubMenu(SubCreBolCodificado);
		dialogsCreaBolCodificado.setMinimizeXY(0, 0);
		dialogsCreaBolCodificado.setCenterScreen();
		dialogsCreaBolCodificado.addSpace(0, 0, 20);
		dialogsCreaBolCodificado.addLn(1, 1, 1);
		dialogsCreaBolCodificado.setHeightCell(1,1,10);
				
		var c1 = container.create("c1");
		c1.setDimension(835,88);
		c1.setPropertyMarco('groove',2,'#5e5e5e');		
		c1.addObject(pcbCreaBolCodOrg, 35, 69);
		c1.addObject(pcbCreaBolCodSuborg, 322, 69);
		c1.addObject(pcbCreaBolCodCarr, 624, 69);
		c1.addObject(pcbCreaBolCodPeriodo, 35, 94);
		c1.addObject(pcbCreaBolCodPosicion, 322, 94);
		c1.addObject(pcbCreaBolCodSeccion, 624, 94);
		c1.addObject(pcbCreaBolCodLapso, 35, 119);
		c1.addObject(editsCreaBolCodProyecto, 322, 119);
		c1.addObject(memoCreaBolCodDescripcion, 20, 58);

		dialogsCreaBolCodificado.addObjToDialog(c1, 2, 1);
		dialogsCreaBolCodificado.addLn(3, 1, 1);
		dialogsCreaBolCodificado.setHeightCell(3,1,7);		
		dialogsCreaBolCodificado.addObjToDialog(tabsCreaBolCodificado, 4, 1);
		dialogsCreaBolCodificado.addLn(5, 1, 1);
		dialogsCreaBolCodificado.setHeightCell(5,1,9);	
		dialogsCreaBolCodificado.addObject(editsCreaBolCodEstudiante,322,162);
		dialogsCreaBolCodificado.addObjToDialog(imgButtonsCreaBolCodGuardar,6,1);
		dialogsCreaBolCodificado.addObjToDialog(imgButtonsCreaBolCodEliminar,6,1);
		dialogsCreaBolCodificado.addObjToDialog(imgButtonsCreaBolCodVerBoletin,6,1);
		dialogsCreaBolCodificado.addObjToDialog(imgButtonsCreaBolCodVerHoja,6,1);
		dialogsCreaBolCodificado.addObjToDialog(imgButtonsCreaBolCodReporte,6,1);
		dialogsCreaBolCodificado.addObjToDialog(imgButtonsCreaBolCodLimpiar,6,1);
		dialogsCreaBolCodificado.addObjToDialog(imgButtonsCreaBolCodSalir,6,1);		
		dialogsCreaBolCodificado.leftMarginObj(6,1,0,26); 
		dialogsCreaBolCodificado.adjAllMarginObj(6,1,18);  	
	},
	
	tabsCreaBolCodificado_Init: function() {
		tabsCreaBolCodificado.selectTab(0, true);
		tabsCreaBolCodificado.setSizeText(12);
		tabsCreaBolCodificado.setFontFamily('helvetica','black');
		tabsCreaBolCodificado.setBorderWidthPanel(0);
		tabsCreaBolCodificado.addLnToGridPanel(0,6);			
		var c1 = container.create("c1");
		c1.setDimension(835,50);		
		c1.addObject(pcbCreaBolCodArea, 35, 194);
		c1.addObject(memoCreaBolCodRedaccion, 322, 188);
		c1.addObject(lgEvaluacion.getObject(),20,220);			
		tabsCreaBolCodificado.addObjToGridPanel(0, c1, 1, 1);				
		var c2 = container.create("c2");
		c2.addObject(lgObservacion.getObject(),20,220);				
		c2.addObject(memoCreaBolCodRecomendacion, 35, 194);
		tabsCreaBolCodificado.addObjToGridPanel(1,c2, 2, 1);		
	},

	create: function() {
		/////////////////////////////////////////////////INFORMACIÓN GENERAL/////////////////////////////////////////////////
		dialogsCreaBolCodificado = dialogs.create('dialogsCreaBolCodificado',0,0,912,569,'BOLETIN CODIFICADO');
		dialogsCreaBolCodificado.setAdjY(30);
		tabsCreaBolCodificado = tabs.create('tabsCreaBolCodificado',840,388,['EVALUACIÓN','OBSERVACIÓN']);		
		pcbCreaBolCodOrg = powerComboBox.create('pcbCreaBolCodOrg','pcbCreaBolCodOrg','Organización (+):',1,101);
		pcbCreaBolCodOrg.setValidEmpty();
		pcbCreaBolCodOrg.enableReadOnlyEditor();
		pcbCreaBolCodOrg.addEmptyOption();
		pcbCreaBolCodSuborg = powerComboBox.create('pcbCreaBolCodSuborg','pcbCreaBolCodSuborg','Suborganización (^):',1,122);
		pcbCreaBolCodSuborg.setValidEmpty();
		pcbCreaBolCodSuborg.enableReadOnlyEditor();
		pcbCreaBolCodSuborg.addEmptyOption();
		pcbCreaBolCodCarr = powerComboBox.create('pcbCreaBolCodCarr','pcbCreaBolCodCarr','Carrera (^):',1,75);
		pcbCreaBolCodCarr.setValidEmpty();
		pcbCreaBolCodCarr.enableReadOnlyEditor();
		pcbCreaBolCodCarr.addEmptyOption();
		pcbCreaBolCodPeriodo = powerComboBox.create('pcbCreaBolCodPeriodo','pcbCreaBolCodPeriodo','Periodo (^):',1,101);
		pcbCreaBolCodPeriodo.setValidEmpty();
		pcbCreaBolCodPeriodo.enableReadOnlyEditor();
		pcbCreaBolCodPeriodo.addEmptyOption();
		pcbCreaBolCodPosicion = powerComboBox.create('pcbCreaBolCodPosicion','pcbCreaBolCodPosicion','Posición (^):',1,122);
		pcbCreaBolCodPosicion.setValidEmpty();
		pcbCreaBolCodPosicion.enableReadOnlyEditor();
		pcbCreaBolCodPosicion.addEmptyOption();
		pcbCreaBolCodSeccion = powerComboBox.create('pcbCreaBolCodSeccion','pcbCreaBolCodSeccion','Sección (^):',1,75);
		pcbCreaBolCodSeccion.setValidEmpty();
		pcbCreaBolCodSeccion.enableReadOnlyEditor();
		pcbCreaBolCodSeccion.addEmptyOption();
		pcbCreaBolCodSeccion.setDataType('string');
		pcbCreaBolCodLapso = powerComboBox.create('pcbCreaBolCodLapso','pcbCreaBolCodLapso','Lapso (+):',1,101);
		pcbCreaBolCodLapso.setValidEmpty();
		pcbCreaBolCodLapso.enableReadOnlyEditor();
		pcbCreaBolCodLapso.addEmptyOption();		
		editsCreaBolCodProyecto = edits.create('editsCreaBolCodProyecto','editsCreaBolCodProyecto','Proyecto (+):',1,122,'normal');  		
		editsCreaBolCodProyecto.setMaxLength(500);
		editsCreaBolCodProyecto.setSizeEdit(404);	
		editsCreaBolCodProyecto.setValidEmpty();
		editsCreaBolCodEstudiante = edits.create('editsCreaBolCodEstudiante','editsCreaBolCodEstudiante','Estudiante :',1,122,'normal');  		
		editsCreaBolCodEstudiante.setMaxLength(50);
		editsCreaBolCodEstudiante.setSizeEdit(414);	
		editsCreaBolCodEstudiante.setValidEmpty();
		editsCreaBolCodEstudiante.readOnly(true);
		pcbCreaBolCodArea = powerComboBox.create('pcbCreaBolCodArea','pcbCreaBolCodArea','Área (*):',1,54);
		pcbCreaBolCodArea.setDataType('string');
		pcbCreaBolCodArea.setFieldFind(true);
		pcbCreaBolCodArea.setValidEmpty();
		pcbCreaBolCodArea.enableReadOnlyEditor();
		pcbCreaBolCodArea.addEmptyOption();
		pcbCreaBolCodArea.setWidthCombo(175);
		memoCreaBolCodRedaccion = memo.create('memoCreaBolCodRedaccion','Redactar Inicio:',1,0,119);
        memoCreaBolCodRedaccion.setValidEmpty();
		memoCreaBolCodRedaccion.setMaxLength(500);
		memoCreaBolCodRedaccion.setDimension(447, 25);
		memoCreaBolCodRedaccion.vAlignCaption('middle');
		memoCreaBolCodRedaccion.setZIndex(10);
		memoCreaBolCodRecomendacion = memo.create('memoCreaBolCodRecomendacion','Sugerencia :',1,0,102);
		memoCreaBolCodRecomendacion.setValidEmpty(); 	
		memoCreaBolCodRecomendacion.vAlignCaption('middle');
		memoCreaBolCodRecomendacion.setDimension(720, 17);
		memoCreaBolCodDescripcion = memo.create('memoCreaBolCodDescripcion','',1,0,0);
		memoCreaBolCodDescripcion.setValidEmpty(); 	
		memoCreaBolCodDescripcion.vAlignCaption('middle');
		memoCreaBolCodDescripcion.setDimension(837, 90);
		memoCreaBolCodDescripcion.hide();
		imgButtonsCreaBolCodGuardar = imgButtons.create('imgButtonsCreaBolCodGuardar','Guardar.','ok.png');
		imgButtonsCreaBolCodEliminar = imgButtons.create('imgButtonsCreaBolCodEliminar','Eliminar','eliminar.png');
		imgButtonsCreaBolCodVerBoletin = imgButtons.create('imgButtonsCreaBolCodVerBoletin','Ver Boletín','icono_buscar.png');
		imgButtonsCreaBolCodVerHoja = imgButtons.create('imgButtonsCreaBolCodVerHoja','Ver Hoja','print.png');
		imgButtonsCreaBolCodReporte = imgButtons.create('imgButtonsCreaBolCodReporte','Reporte','print.png');
		imgButtonsCreaBolCodLimpiar = imgButtons.create('imgButtonsCreaBolCodLimpiar','Limpiar','limpiar.png');
		imgButtonsCreaBolCodSalir = imgButtons.create('imgButtonsCreaBolCodSalir','Salir','salir.png');
		imgButtonsCreaBolCodGuardar.setDimension(100,22);
        imgButtonsCreaBolCodEliminar.setDimension(100,22);
        imgButtonsCreaBolCodVerBoletin.setDimension(100,22);
		imgButtonsCreaBolCodVerHoja.setDimension(100,22);
		imgButtonsCreaBolCodReporte.setDimension(100,22);
		imgButtonsCreaBolCodLimpiar.setDimension(100,22);
		imgButtonsCreaBolCodSalir.setDimension(100,22);
	},

	init: function() {
	    this.create();
	    this.setEvents();
	    this.dialogsCreaBolCodificado_Init();
	    this.tabsCreaBolCodificado_Init();
		this.createMWs(); 
	},

	setEvents: function() {
		pcbCreaBolCodOrg.onChange(this.windowName + ".resetElementsAlumno('org')");
		pcbCreaBolCodSuborg.onChange(this.windowName + ".resetElementsAlumno('sub')");
		pcbCreaBolCodCarr.onChange(this.windowName + ".resetElementsAlumno('car')");
		pcbCreaBolCodPeriodo.onChange(this.windowName + ".resetElementsAlumno('per')");
		pcbCreaBolCodPosicion.onChange(this.windowName + ".resetElementsAlumno('pos')");
		pcbCreaBolCodSeccion.onChange(this.windowName + ".buscar('')");
		pcbCreaBolCodLapso.onChange(this.windowName + ".buscar('');");
		editsCreaBolCodEstudiante.onMouseOver(this.windowName+".buscarDescripcion(false)");
		pcbCreaBolCodArea.onChange(this.windowName + ".buscar('area');");
		pcbCreaBolCodArea.onMouseOver(this.windowName+".buscarDescripcion(false)");
		tabsCreaBolCodificado.onTabSelected(0, this.windowName+".buscarDescripcion(false)");
		tabsCreaBolCodificado.onTabSelected(1, this.windowName+".buscarDescripcion(false)");
		lgEvaluacion.onClickStudent(this.windowName+".setData()");
		lgObservacion.onClickStudent(this.windowName+".setData()");
		memoCreaBolCodRecomendacion.onMouseOver(this.windowName+".buscarDescripcion(false)");
		memoCreaBolCodDescripcion.onMouseOver(this.windowName+".buscarDescripcion(false)");
		imgButtonsCreaBolCodGuardar.onClick(this.windowName+".coreUpdate('guardar')");
		imgButtonsCreaBolCodEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
		imgButtonsCreaBolCodVerBoletin.onClick(this.windowName + ".verBoletin()");
		imgButtonsCreaBolCodVerHoja.onClick(this.windowName + ".verHoja()");
		imgButtonsCreaBolCodReporte.onClick(this.windowName + ".reporte()");
		imgButtonsCreaBolCodLimpiar.onClick(this.windowName+".limpiar('init')");
	  	imgButtonsCreaBolCodSalir.onClick('dialogsCreaBolCodificado.close()');
    },

    setData: function() {
		var rlx = xmlStructs.createRecordList("rlx");

    	if (lgEvaluacion.getStudent().name != '') { 
        	editsCreaBolCodEstudiante.setValue(lgEvaluacion.getStudent().name);
        	editsCreaBolCodEstudiante.hideId = lgEvaluacion.getStudent().id;
    	}	
    	else if (lgObservacion.getStudent().name != '') {
        	editsCreaBolCodEstudiante.setValue(lgObservacion.getStudent().name);
        	editsCreaBolCodEstudiante.hideId = lgObservacion.getStudent().id;
    	}
    	lgEvaluacion.getStudent().name = '';
    	lgObservacion.getStudent().name = '';
		imgButtonsCreaBolCodVerBoletin.setEnable();
  		
		rlx.add('reg', pcbCreaBolCodPeriodo);
		rlx.add('reg', pcbCreaBolCodPosicion);
		rlx.add('reg', pcbCreaBolCodSeccion);
		rlx.add('reg', pcbCreaBolCodLapso);
		rlx.addInt('reg', editsCreaBolCodEstudiante.hideId);
  		Tool.cnnSrv('MantObject', 'getRecomCreaBoletinCodificado', this.windowName + '.loadRecomRedac()', rlx);
    },

	loadRecomRedac: function() {
		memoCreaBolCodRedaccion.setText(json('getRecomCreaBoletinCodificado').data[1][0]);
		memoCreaBolCodRecomendacion.setText(json('getRecomCreaBoletinCodificado').data[0][0]);
	},

	limpiar: function(process) {
		pcbCreaBolCodArea.clear();
		editsCreaBolCodProyecto.clear();
		editsCreaBolCodEstudiante.clear();
		editsCreaBolCodEstudiante.hideId = -1
		memoCreaBolCodRedaccion.clear();
		memoCreaBolCodRecomendacion.clear();
		memoCreaBolCodDescripcion.clear();
		memoCreaBolCodDescripcion.hide();
		lgEvaluacion.clear();
		lgObservacion.clear();
		imgButtonsCreaBolCodVerBoletin.setDisable();
		imgButtonsCreaBolCodVerHoja.setDisable();
		imgButtonsCreaBolCodReporte.setDisable();
  		dialogsCreaBolCodificado.setMsg("");
  		if (process == 'init') {
  			pcbCreaBolCodOrg.clear();
			pcbCreaBolCodSuborg.clear();
			pcbCreaBolCodCarr.clear();
			pcbCreaBolCodPeriodo.clear();
			pcbCreaBolCodPosicion.clear();
			pcbCreaBolCodSeccion.clear();
			pcbCreaBolCodLapso.clear();
  			Tool.cnnSrv('MantObject', 'getMantOrganizacion', this.windowName + '.loadDataOrg()');
  		}
    },
	
	loadDataOrg: function() {
    	Tool.loadPowerComboData(dialogsCreaBolCodificado, pcbCreaBolCodOrg, 0, 1, json('getData'));
    	Tool.getContext(dialogsCreaBolCodificado, pcbCreaBolCodOrg, pcbCreaBolCodSuborg, pcbCreaBolCodCarr, this.windowName + ".resetElementsAlumno('car')");
    },

    resetElementsAlumno: function(element) {
    	this.limpiar('');
		
		if (element == 'org') {
			pcbCreaBolCodCarr.clear();
			pcbCreaBolCodPosicion.clear();
			pcbCreaBolCodPeriodo.setSelectedIndex(0);   
			Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsCreaBolCodificado, pcbCreaBolCodSuborg, 1, 2, pcbCreaBolCodOrg);		
		}
		else if (element == 'sub') {
			pcbCreaBolCodPosicion.clear();
			pcbCreaBolCodPeriodo.setSelectedIndex(0);
			Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsCreaBolCodificado, pcbCreaBolCodCarr, -1, 3, pcbCreaBolCodSuborg);		
		}
		else if (element == 'car') {
			pcbCreaBolCodPeriodo.clear();
			Tool.getPowerComboDataFnc('pcbCreaBolCodPeriodo.setSelectedIndex(1);' + this.windowName + '.resetElementsAlumno("per");', 'MantObject', 'getPeriodoXNivelAcad', dialogsCreaBolCodificado, pcbCreaBolCodPeriodo, 0, 1, pcbCreaBolCodCarr.setModeReturnGetText(5));		
		}
		else if (element == 'per' && pcbCreaBolCodCarr.valid(dialogsCreaBolCodificado)) {
	    	var rlx = xmlStructs.createRecordList("rlx");

			rlx.add('reg', pcbCreaBolCodPeriodo);
			rlx.add('reg', pcbCreaBolCodCarr.setModeReturnGetText(2));
			Tool.cnnSrv('MantObject', 'getMantProyAulaInit', this.windowName + '.loadDataPosicion()', rlx);
		}
		else if (element == 'pos') {
			if (pcbCreaBolCodPeriodo.valid(dialogsCreaBolCodificado))
				Tool.getPowerComboDataFnc('CreaBolCodificado.loadDataSeccion()', 'MantObject', 'getMantProyAulaSeccPers', dialogsCreaBolCodificado, pcbCreaBolCodSeccion, 0, 1, pcbCreaBolCodPeriodo, pcbCreaBolCodCarr.setModeReturnGetText(2), pcbCreaBolCodPosicion);
	    }
	},

	loadDataPosicion: function() {
    	var rlx = xmlStructs.createRecordList("rlx");

    	Tool.loadPowerComboData(dialogsCreaBolCodificado, pcbCreaBolCodLapso, 3, 0, json('getMantLapso'));
    	if (json('getPosicion').data[0].length > 0) {
    		Tool.loadPowerComboData(dialogsCreaBolCodificado, pcbCreaBolCodPosicion, 0, 1, json('getPosicion'));
    		pcbCreaBolCodPosicion.setSelectedIndex(1);
        	rlx.add('reg', pcbCreaBolCodPeriodo);
    		rlx.add('reg', pcbCreaBolCodCarr.setModeReturnGetText(2));
    		rlx.add('reg', pcbCreaBolCodPosicion);
    		Tool.cnnSrv('MantObject', 'getMantProyAulaSeccPers', this.windowName + '.loadDataSeccion()', rlx);
    	}
    },

    loadDataSeccion: function() {
    	if (json('getSeccionPersona').data[0].length > 0) {
    		Tool.loadPowerComboData(dialogsCreaBolCodificado, pcbCreaBolCodSeccion, 0, 1, json('getSeccionPersona'));
    		pcbCreaBolCodSeccion.setSelectedIndex(1);
    		Tool.getPowerComboDataFnc('CreaBolCodificado.buscar("")', 'MantObject', 'getAreaCreaBoletinCodificado', dialogsCreaBolCodificado, pcbCreaBolCodArea, 0, 1, pcbCreaBolCodCarr.setModeReturnGetText(2), pcbCreaBolCodPosicion);
    	}
    	else
    		Tool.getPowerComboData('MantObject', 'getAreaCreaBoletinCodificado', dialogsCreaBolCodificado, pcbCreaBolCodArea, 0, 1, pcbCreaBolCodCarr.setModeReturnGetText(2), pcbCreaBolCodPosicion);
    },	

    buscarDescripcionVisible: function(valor, fila, col, valorHead) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (valor != "" && valor != "INAS" && fila === 0) {
    		memoCreaBolCodDescripcion.show();
    		if (tabsCreaBolCodificado.getActualTab() == 0) {
        		Tool.getMemoDataLessWaitMsg('MantObject', 'getIndicadorCodificado', dialogsCreaBolCodificado, memoCreaBolCodDescripcion, 3, new MiniDataSet(valor, 'int', true), new MiniDataSet(valor, 'int', true), pcbCreaBolCodArea, pcbCreaBolCodArea, new MiniDataSet('-1', 'str', true), new MiniDataSet('-1', 'str', true));
    		}
    		else {
        		Tool.getMemoDataLessWaitMsg('MantObject', 'getObservacionCodificado', dialogsCreaBolCodificado, memoCreaBolCodDescripcion, 2, new MiniDataSet(valor, 'int', true), new MiniDataSet(valor, 'int', true), new MiniDataSet('-1', 'str', true), new MiniDataSet('-1', 'str', true));
    		}
    	}
    	else {
    		if ((valor == "" && fila === 0) || col < 2 || valor == "INAS") {
    			memoCreaBolCodDescripcion.hide();
    			memoCreaBolCodDescripcion.clear();
    		}
    		else if (valor != "" && valor != "INAS" && fila > 0 && tabsCreaBolCodificado.getActualTab() == 0) {
    			memoCreaBolCodDescripcion.show();
    			if (valorHead != "") {
    				rlx.addInt('reg', valorHead, true);
    				rlx.addInt('reg', valorHead, true);
    				rlx.add('reg', pcbCreaBolCodArea);
    				rlx.add('reg', pcbCreaBolCodArea);
    				rlx.addStr('reg', '-1', true);
    				rlx.addStr('reg', '-1', true);
    				Tool.cnnSrvLessWaitMsg("MantObject", "getIndicadorCodificado", this.windowName + ".LoadBuscarIndicado('" + valor + "')", rlx);
    			}
    			else {
    				rlx.addStr('reg', valor, true);
    				rlx.addStr('reg', valor, true);
    				rlx.addStr('reg', '-1', true);
    				rlx.addStr('reg', '-1', true);
    				Tool.cnnSrvLessWaitMsg("MantObject", "getCalificativoCodificado", this.windowName + ".LoadBuscarCalificativo(memoCreaBolCodDescripcion.getText())", rlx);
    			}
    		}
    		else if (valorHead != "" && fila > 0 && tabsCreaBolCodificado.getActualTab() == 1) {
    			if (valorHead != "INAS") {
    				memoCreaBolCodDescripcion.show();
            		Tool.getMemoDataLessWaitMsg('MantObject', 'getObservacionCodificado', dialogsCreaBolCodificado, memoCreaBolCodDescripcion, 2, new MiniDataSet(valorHead, 'int', true), new MiniDataSet(valorHead, 'int', true), new MiniDataSet('-1', 'str', true), new MiniDataSet('-1', 'str', true));
    			}
    			else {
        			memoCreaBolCodDescripcion.hide();
        			memoCreaBolCodDescripcion.clear();
    			}
    		}
    		else if (valor == "" && valorHead != "" && fila > 0 && tabsCreaBolCodificado.getActualTab() == 0) {
    			memoCreaBolCodDescripcion.clear();
        		Tool.getMemoDataLessWaitMsg('MantObject', 'getIndicadorCodificado', dialogsCreaBolCodificado, memoCreaBolCodDescripcion, 3, new MiniDataSet(valorHead, 'int', true), new MiniDataSet(valorHead, 'int', true), pcbCreaBolCodArea, pcbCreaBolCodArea, new MiniDataSet('-1', 'str', true), new MiniDataSet('-1', 'str', true));
    		}
    	}
    },
    
    buscarDescripcion: function(visible, valor, fila, col, valorHead) {
		if (visible) {
			setTimeout(function(){CreaBolCodificado.buscarDescripcionVisible(valor, fila, col, valorHead)}, 500);
		}
		else {
			memoCreaBolCodDescripcion.hide();
			memoCreaBolCodDescripcion.clear();
		}
    },
    
    LoadBuscarIndicado: function(valor) {
		var rlx = xmlStructs.createRecordList("rlx");
		
		memoCreaBolCodDescripcion.setText(json('getIndicador').data[3][0]);
		rlx.addStr('reg', valor, true);
		rlx.addStr('reg', valor, true);
		rlx.addStr('reg', '-1', true);
		rlx.addStr('reg', '-1', true);
		Tool.cnnSrvLessWaitMsg("MantObject", "getCalificativoCodificado", this.windowName + ".LoadBuscarCalificativo(memoCreaBolCodDescripcion.getText())", rlx);
    },
    
    LoadBuscarCalificativo: function(cadena) {
		memoCreaBolCodDescripcion.setText(json('getMantCalificativos').data[2][0] + "\n" + cadena.substring(cadena.indexOf("\n")+1));
    },
    
    buscar: function(src) {
		var rlx = xmlStructs.createRecordList("rlx");
		
		this.idBoletinInd = -1;
		this.idBoletinObs = -1;
		if (src != 'area')
			editsCreaBolCodProyecto.clear();
		lgEvaluacion.clear();
		lgObservacion.clear();
		editsCreaBolCodEstudiante.clear();
		editsCreaBolCodEstudiante.hideId = -1
		memoCreaBolCodRedaccion.clear();
		memoCreaBolCodRecomendacion.clear();
		memoCreaBolCodDescripcion.clear();
		imgButtonsCreaBolCodVerBoletin.setDisable();
		imgButtonsCreaBolCodVerHoja.setDisable();
		imgButtonsCreaBolCodReporte.setDisable();
		if (pcbCreaBolCodOrg.valid(dialogsCreaBolCodificado))
			if (pcbCreaBolCodSuborg.valid(dialogsCreaBolCodificado))
				if (pcbCreaBolCodCarr.valid(dialogsCreaBolCodificado))
					if (pcbCreaBolCodPeriodo.valid(dialogsCreaBolCodificado))
						if (pcbCreaBolCodPosicion.valid(dialogsCreaBolCodificado))
							if (pcbCreaBolCodSeccion.valid(dialogsCreaBolCodificado))
								if (pcbCreaBolCodLapso.getOption() != '') {
									rlx.add('reg', pcbCreaBolCodPeriodo);
									rlx.add('reg', pcbCreaBolCodPosicion);
									rlx.add('reg', pcbCreaBolCodSeccion);
									rlx.add('reg', pcbCreaBolCodLapso);
									rlx.add('reg', pcbCreaBolCodArea);
									Tool.cnnSrv("MantObject", "getCreaBolCodificadoListadoAlumno", this.windowName + ".loadListStudents()", rlx);
								}
    },
    
    loadListStudents: function() {
    	var listInd = json('getListInd');
    	var listObs = json('getListObs');
    	var hi = json('getHeaderInd');
    	var ho = json('getHeaderObs');
    	var dhi =[];
    	var dho =[];
    	var dataInd = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    	var dataObs = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    	
    	if (ho.data[0].length > 0) {
    		editsCreaBolCodProyecto.setValue(ho.data[1][0]);
    		this.idBoletinInd = this.idBoletinObs = ho.data[0][0];
    	}
    	else if (hi.data[0].length > 0) {
    		editsCreaBolCodProyecto.setValue(hi.data[1][0]);
			this.idBoletinInd = this.idBoletinObs = hi.data[0][0];
    	}
			
    	if (listInd.data[0].length > 0 || listObs.data[0].length > 0) {
        	for(var i=4; i<listInd.data.length; i++)
        		dataInd[i-4]=listInd.data[i];
        	
        	for(var i=4; i<listObs.data.length; i++)
        		dataObs[i-4]=listObs.data[i];
        	
        	for(var i=2; i<hi.data.length; i++)
        		dhi[i-2]=hi.data[i][0];
        	
        	for(var i=2; i<ho.data.length; i++)
        		dho[i-2]=ho.data[i][0];
        	
        	if (listInd.data[0].length > 0)
        		for(var i=0; i<listInd.data[2].length; i++)
        			lgEvaluacion.addFixedCols([listInd.data[2][i],listInd.data[3][i],-1,-1,-1,-1,-1,-1]);
        	if (listObs.data[0].length > 0)
        		for(var i=0; i<listObs.data[2].length; i++)
        			lgObservacion.addFixedCols([listObs.data[2][i],listObs.data[3][i],-1,-1,-1,-1,-1,-1]);
        	    	
        	lgEvaluacion.setDataHead(dhi);
        	lgObservacion.setDataHead(dho);
        	lgEvaluacion.setList(listInd.data[1]);
        	lgObservacion.setList(listObs.data[1]);
        	lgEvaluacion.setData(dataInd);
        	lgObservacion.setData(dataObs);
        	lgEvaluacion.showFirst();
        	lgObservacion.showFirst();
    	}
		imgButtonsCreaBolCodVerHoja.setEnable();
		imgButtonsCreaBolCodReporte.setEnable();
    },
    
    verHoja: function() {
		lgEvaluacion.print(pcbCreaBolCodSuborg.getValue(), pcbCreaBolCodPeriodo.getValue(), pcbCreaBolCodPosicion.getValue(), '"'+pcbCreaBolCodSeccion.getValue()+'"', tabsCreaBolCodificado.getActualTab());
    },
    
    verBoletin: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbCreaBolCodOrg.valid(dialogsCreaBolCodificado))
			if (pcbCreaBolCodSuborg.valid(dialogsCreaBolCodificado))
				if (pcbCreaBolCodCarr.valid(dialogsCreaBolCodificado))
					if (pcbCreaBolCodPeriodo.valid(dialogsCreaBolCodificado))
						if (pcbCreaBolCodPosicion.valid(dialogsCreaBolCodificado))
							if (pcbCreaBolCodSeccion.valid(dialogsCreaBolCodificado))
								if (pcbCreaBolCodLapso.valid(dialogsCreaBolCodificado)) {
									if (parseInt(pcbCreaBolCodCarr.setModeReturnGetText(7).getText()) != 3) {
										rlx.add('reg', pcbCreaBolCodPeriodo);
	    								rlx.add('reg', pcbCreaBolCodLapso);
	    								rlx.add('reg', pcbCreaBolCodPosicion);
	    								rlx.add('reg', pcbCreaBolCodSeccion);
	    								rlx.addInt('reg', editsCreaBolCodEstudiante.hideId, true);
										Tool.cnnSrv('ReportObject', 'getMasivoPrimariaCodificado', 'dlgWait.hide()', rlx);
									}
									else {
										//CARRERA BACHILLERATO
										rlx.add('reg', pcbCreaBolCodPeriodo);
	    								rlx.add('reg', pcbCreaBolCodLapso);
	    								rlx.add('reg', pcbCreaBolCodPosicion);
	    								rlx.add('reg', pcbCreaBolCodSeccion);
	    								rlx.addStr('reg', '');
	    								rlx.addInt('reg', editsCreaBolCodEstudiante.hideId, true);
										rlx.add('reg', pcbCreaBolCodCarr.setModeReturnGetText(2));
										Tool.cnnSrv('ReportObject', 'getMasivoBachillerato', 'dlgWait.hide()', rlx);
									}
								}
    },

    reporte: function() {
    	if (tabsCreaBolCodificado.getActualTab() === 0)
    		lgEvaluacion.printContent(	pcbCreaBolCodSuborg.getValue(), 
    									pcbCreaBolCodPeriodo.getValue(), 
    									pcbCreaBolCodPosicion.getValue(), 
    									'"'+pcbCreaBolCodSeccion.getValue()+'"', 
    									pcbCreaBolCodLapso.getValue(),  
    									pcbCreaBolCodArea.getValue(), 
    									'', 
    									editsCreaBolCodProyecto.getValue(), 0);
    	else
    		lgObservacion.printContent(	pcbCreaBolCodSuborg.getValue(), 
    									pcbCreaBolCodPeriodo.getValue(), 
    									pcbCreaBolCodPosicion.getValue(),
    									'"'+pcbCreaBolCodSeccion.getValue()+'"',
    									pcbCreaBolCodLapso.getValue(), 
    									pcbCreaBolCodArea.getValue(), 
    									'', 
    									editsCreaBolCodProyecto.getValue(), 1);
    },

    coreUpdate: function(methodName) {
    	var rlx = xmlStructs.createRecordList("rlx");
    	
		if (pcbCreaBolCodOrg.valid(dialogsCreaBolCodificado))
			if (pcbCreaBolCodSuborg.valid(dialogsCreaBolCodificado))
				if (pcbCreaBolCodCarr.valid(dialogsCreaBolCodificado))
					if (pcbCreaBolCodPeriodo.valid(dialogsCreaBolCodificado))
						if (pcbCreaBolCodPosicion.valid(dialogsCreaBolCodificado))
							if (pcbCreaBolCodSeccion.valid(dialogsCreaBolCodificado))
								if (pcbCreaBolCodLapso.valid(dialogsCreaBolCodificado))
									if (editsCreaBolCodProyecto.valid(dialogsCreaBolCodificado))
										if (tabsCreaBolCodificado.getActualTab() == 0) {
											if(!lgEvaluacion.checkDuplicate().sts) {
												if (methodName == 'guardar') {
													if (pcbCreaBolCodArea.valid(dialogsCreaBolCodificado)) {
														lgEvaluacion.setParamRecordList([editsCreaBolCodEstudiante.hideId, this.idBoletinInd, pcbCreaBolCodPeriodo, pcbCreaBolCodPosicion, pcbCreaBolCodSeccion ,pcbCreaBolCodLapso, editsCreaBolCodProyecto, pcbCreaBolCodArea, memoCreaBolCodRedaccion]);
														Tool.cnnSrv("MantObject", "guardarIndCreaBolCodificado", this.windowName + ".buscar()", lgEvaluacion);
													}
												}											
												else {
													if (this.idBoletinInd > -1) {
														rlx.addInt('reg', this.idBoletinInd);
														rlx.add('reg', pcbCreaBolCodArea);
														Tool.cnnSrv("MantObject", "eliminarIndCreaBolCodificado", this.windowName + ".buscar()", rlx);
													}
												}
											}
											else{
												Alert.show('ERROR: Existen códigos duplicados en las evaluaciones, corrija antes de guardar..!','CODIGO DUPLICADO');
											}
										}
										else {
											if(!lgObservacion.checkDuplicate().sts) {
												if (methodName == 'guardar') {
													lgObservacion.setParamRecordList([editsCreaBolCodEstudiante.hideId, this.idBoletinObs, pcbCreaBolCodPeriodo, pcbCreaBolCodPosicion, pcbCreaBolCodSeccion ,pcbCreaBolCodLapso, editsCreaBolCodProyecto, memoCreaBolCodRecomendacion]);
													Tool.cnnSrv("MantObject", "guardarObsCreaBolCodificado", this.windowName + ".buscar()", lgObservacion);
												}
												else {
													if (this.idBoletinObs > -1) {
														rlx.addInt('reg', this.idBoletinObs);
														Tool.cnnSrv("MantObject", "eliminarObsCreaBolCodificado", this.windowName + ".buscar()", rlx);
													}
												}
											}
											else{
												Alert.show('ERROR: Existen códigos duplicados en las observaciones, corrija antes de guardar..!','CODIGO DUPLICADO');
											}
										}
	}
};
