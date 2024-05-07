var dialogsTransformarMateria = new Object();
var pcbTransformarMateriaCodPlan = new Object();
var pcbTransformarMateriaAnio = new Object();
var pcbTransformarMateriaMatOrigen = new Object();
var pcbTransformarMateriaMatDestino = new Object();
var gridsTransformarMateria = new Object();
var imgButtonsTransformarMateriaGuardar = new Object();
var imgButtonsTransformarMateriaEliminar = new Object();
var imgButtonsTransformarMateriaLimpiar = new Object();
var imgButtonsTransformarMateriaSalir = new Object();

var TransformarMateria = {
	windowName : 'TransformarMateria',
	isCreate : false,
	idTransfMateria : 0,
	
	show: function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsTransformarMateria.isByClean())
			this.limpiar();
		
		dialogsTransformarMateria.show();
	},
	
	hide: function() {
		dialogsTransformarMateria.hide();
	},
	
	createMWs: function() {
		mwTransformarMateria = desktop.addMinWindow('T.Materia', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsTransformarMateria.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},
   
	dialogsTransformarMateria_Init : function(){
		dialogsTransformarMateria.setCenterScreen();
		dialogsTransformarMateria.setMinimizeXY(0,560);
		dialogsTransformarMateria.addObject(pcbTransformarMateriaCodPlan,24,40);
		dialogsTransformarMateria.addObject(pcbTransformarMateriaAnio,374,40);
		dialogsTransformarMateria.addObject(pcbTransformarMateriaMatOrigen,24,70);
		dialogsTransformarMateria.addObject(pcbTransformarMateriaMatDestino,24,100);
		dialogsTransformarMateria.addObject(gridsTransformarMateria.getObject(),20,130);
		dialogsTransformarMateria.addObject(imgButtonsTransformarMateriaGuardar,28,578);
		dialogsTransformarMateria.addObject(imgButtonsTransformarMateriaEliminar,158,578);
		dialogsTransformarMateria.addObject(imgButtonsTransformarMateriaLimpiar,288,578);
		dialogsTransformarMateria.addObject(imgButtonsTransformarMateriaSalir,418,578);
	},
  
	gridsTransformar_Init : function() {
		gridsTransformarMateria.setFixColRow(false,true);
		gridsTransformarMateria.addTitleVectorX(["Año","Materia Origen","Materia Destino","coPlan","idTranfMat"]);
		gridsTransformarMateria.setSizeCol(1,40);
		gridsTransformarMateria.setSizeCol(2,150);
		gridsTransformarMateria.setSizeCol(3,310);
		gridsTransformarMateria.setSizeCol(4, 0);
		gridsTransformarMateria.setSizeCol(5, 0);
		gridsTransformarMateria.hideCol(4);        
		gridsTransformarMateria.hideCol(5);        
	},
   
	create : function() {
		dialogsTransformarMateria = dialogs.create("dialogsTransformarMateria",100,100,645,690,"TRANSFORMAR MATERIA");
		pcbTransformarMateriaCodPlan = powerComboBox.create("pcbTransformarMateriaCodPlan","pcbTransformarMateriaCodPlan","Código Plan:", 2,100);
		pcbTransformarMateriaCodPlan.setValidEmpty();
		pcbTransformarMateriaCodPlan.addEmptyOption();
    	pcbTransformarMateriaCodPlan.setMaxLength(5);
		pcbTransformarMateriaCodPlan.setDataType('string');
		pcbTransformarMateriaAnio = powerComboBox.create("pcbTransformarMateriaAnio","pcbTransformarMateriaAnio","Año/Grado:", 2,75);
    	pcbTransformarMateriaAnio.setValidEmpty();
    	pcbTransformarMateriaAnio.addEmptyOption();
    	pcbTransformarMateriaAnio.enableReadOnlyEditor();
		pcbTransformarMateriaAnio.setWidthCombo(53);
		pcbTransformarMateriaAnio.setFieldFind(true);
		pcbTransformarMateriaAnio.enableOnChangeToEmptyOption();
		pcbTransformarMateriaMatOrigen = powerComboBox.create("pcbTransformarMateriaMatOrigen","pcbTransformarMateriaMatOrigen","Materia Origen:", 2,100);
    	pcbTransformarMateriaMatOrigen.setValidEmpty();
    	pcbTransformarMateriaMatOrigen.addEmptyOption();
    	pcbTransformarMateriaMatOrigen.enableReadOnlyEditor();
    	pcbTransformarMateriaMatOrigen.setWidthCombo(378);
    	pcbTransformarMateriaMatOrigen.setDataType('string');
		pcbTransformarMateriaMatDestino = powerComboBox.create("pcbTransformarMateriaMatDestino","pcbTransformarMateriaMatDestino","Materia Destino:", 2,100);
    	pcbTransformarMateriaMatDestino.setValidEmpty();
    	pcbTransformarMateriaMatDestino.addEmptyOption();
    	pcbTransformarMateriaMatDestino.setWidthCombo(378);
    	pcbTransformarMateriaMatDestino.setDataType('string');
		gridsTransformarMateria = grids.create("gridsTransformarMateria",20,5);
		imgButtonsTransformarMateriaGuardar = imgButtons.create("imgButtonsTransformarMateriaGuardar","Guardar.","aceptar.png");
		imgButtonsTransformarMateriaEliminar = imgButtons.create("imgButtonsTransformarMateriaEliminar","Eliminar","eliminar.png");
		imgButtonsTransformarMateriaLimpiar = imgButtons.create("imgButtonsTransformarMateriaLimpiar","Limpiar","limpiar.png");
		imgButtonsTransformarMateriaSalir = imgButtons.create("imgButtonsTransformarMateriaSalir","Salir","salir.png");
		imgButtonsTransformarMateriaGuardar.setDimension(100,20);
		imgButtonsTransformarMateriaEliminar.setDimension(100,20);
		imgButtonsTransformarMateriaLimpiar.setDimension(100,20);
		imgButtonsTransformarMateriaSalir.setDimension(100,20);
	},
   
	init : function() {
    	this.create();
    	this.setEvents();
    	this.dialogsTransformarMateria_Init();  
    	this.gridsTransformar_Init();
    	this.createMWs();
    },
    
    limpiar: function() {
  		dialogsTransformarMateria.setMsg("");
	  	pcbTransformarMateriaAnio.clear();
	  	pcbTransformarMateriaMatOrigen.clear();
	  	pcbTransformarMateriaMatDestino.clear();
		gridsTransformarMateria.clean();
		imgButtonsTransformarMateriaEliminar.setDisable();
		Tool.cnnSrv('MantObject', 'getTransformarMateriaInit', this.windowName + '.loadDataInit()');
	},
	
    loadDataInit: function() {
    	Tool.loadPowerComboData(dialogsTransformarMateria, pcbTransformarMateriaCodPlan, 0, 0, json('getCodigoPlan'));
    	Tool.loadPowerComboData(dialogsTransformarMateria, pcbTransformarMateriaAnio, 0, 4, json('getPosicionNotaCert'));
  	},
  	
    getAsignatura: function(refreshGrid) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbTransformarMateriaCodPlan.valid(dialogsTransformarMateria)) {
			rlx.addStr('reg', pcbTransformarMateriaCodPlan.getOption());
			rlx.add('reg', pcbTransformarMateriaAnio);
			rlx.add('reg', pcbTransformarMateriaAnio);
	    	Tool.cnnSrv('MantObject', 'getTransformarMateria', this.windowName + '.loadAsignatura(' + refreshGrid + ')', rlx);
		}
		else
			pcbTransformarMateriaAnio.setSelectedIndex(0);
    },
    
    loadAsignatura: function(refreshGrid) {
    	Tool.loadPowerComboData(dialogsTransformarMateria, pcbTransformarMateriaMatOrigen, 1, 0, json('getCargaNotaCertAsigPosicion'));
    	pcbTransformarMateriaMatOrigen.setSizeHeight(350);
    	Tool.loadPowerComboData(dialogsTransformarMateria, pcbTransformarMateriaMatDestino, 0, 0, json('getCargaNotaCertAsigPosicion'));
    	pcbTransformarMateriaMatDestino.addOptionAndSimpleValue(null,"***BORRAR MATERIA***","kill");
    	pcbTransformarMateriaMatDestino.setSizeHeight(350);
    	
    	if (refreshGrid) {
    		Tool.loadGridData(dialogsTransformarMateria, gridsTransformarMateria, false, json('getTransformarMateria'));
        	imgButtonsTransformarMateriaEliminar.setDisable();
    	} 
    	else {	
    		pcbTransformarMateriaMatOrigen.setSelectedOption(gridsTransformarMateria.getDataCell(2));
	 		pcbTransformarMateriaMatDestino.setSelectedIndex(0);
	 		pcbTransformarMateriaMatDestino.setSelectedOption(gridsTransformarMateria.getDataCell(3));
	        if (pcbTransformarMateriaMatDestino.getOption() == "") {
	        	pcbTransformarMateriaMatDestino.addOptionAndSimpleValue(null, gridsTransformarMateria.getDataCell(3), gridsTransformarMateria.getDataCell(3));
	        	pcbTransformarMateriaMatDestino.setSelectedOption(gridsTransformarMateria.getDataCell(3));
	        }

    	}
    	refreshGrid = false;
    },
    
 	setData: function() {
		if (gridsTransformarMateria.getDataCell(1) != "") {
	 		this.idTransfMateria = gridsTransformarMateria.getDataCell(5);
	 		pcbTransformarMateriaAnio.setSelectedOption(gridsTransformarMateria.getDataCell(1));
	        imgButtonsTransformarMateriaEliminar.setEnable();
	        this.getAsignatura(false);
		}
 	},
 	
	setEvents: function() {
		pcbTransformarMateriaCodPlan.onChange(this.windowName + ".getAsignatura(true)");
		pcbTransformarMateriaAnio.onChange(this.windowName + ".getAsignatura(true)");
		gridsTransformarMateria.onClickCells(this.windowName + ".setData()");
  		imgButtonsTransformarMateriaGuardar.onClick(this.windowName + ".coreUpdate('guardar')");
  		imgButtonsTransformarMateriaEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
  		imgButtonsTransformarMateriaLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsTransformarMateriaSalir.onClick('dialogsTransformarMateria.close()');
    },
    
  	limpiarCoreUpdate: function(methodName) {
  		this.idTransfMateria = 0;
		imgButtonsTransformarMateriaEliminar.setDisable();
		pcbTransformarMateriaMatOrigen.setSelectedIndex(0);
		if (methodName == "eliminar" && gridsTransformarMateria.getTotalRecord() == 1) {
			gridsTransformarMateria.clean();
			dlgWait.hide();
		}
		else 
			Tool.getGridData('MantObject', 'getTransformarMateria', dialogsTransformarMateria, gridsTransformarMateria, false, new MiniDataSet(pcbTransformarMateriaCodPlan.getOption(), 'str', false), pcbTransformarMateriaAnio, pcbTransformarMateriaAnio);
  	},
		
	coreUpdate: function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbTransformarMateriaCodPlan.valid(dialogsTransformarMateria))
			if (pcbTransformarMateriaAnio.valid(dialogsTransformarMateria))
				if (pcbTransformarMateriaMatOrigen.valid(dialogsTransformarMateria))
					if (pcbTransformarMateriaMatDestino.valid(dialogsTransformarMateria)) {
						if (methodName == 'eliminar')
							rlx.addInt('reg', this.idTransfMateria);
						else {
							rlx.addStr('reg', pcbTransformarMateriaCodPlan.getOption());
							rlx.add('reg', pcbTransformarMateriaAnio);
							rlx.add('reg', pcbTransformarMateriaMatOrigen);
							rlx.addStr('reg', pcbTransformarMateriaMatDestino.getOption());
							rlx.addInt('reg', this.idTransfMateria);
						} 
						Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
					}
  	 }
};
