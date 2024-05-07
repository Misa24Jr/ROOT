var dialogsMantAsigTipAulMateria = new Object();
var powerComboBoxAsigTipAulMatOrganizacion = new Object();
var powerComboBoxAsigTipAulMatSuborganizacion = new Object();
var powerComboBoxAsigTipAulMatCarrera = new Object();
var powerComboBoxAsigTipAulMatMateria = new Object();
var powerComboBoxAsigTipAulMatTipAula = new Object();
var gridsMantAsigTipAulMateria = new Object();
var imgButtonsAsigTipAulMatAgregar = new Object();
var imgButtonsAsigTipAulMatModificar = new Object();
var imgButtonsAsigTipAulMatEliminar = new Object();
var imgButtonsAsigTipAulMatLimpiar = new Object();
var imgButtonsAsigTipAulMatSalir = new Object();
var imgButtonsAsigTipAulMatBuscar = new Object();
var mwMantAsigTipAulMateria  = new Object();// minWindow

var MantAsigTipAulMateria = {
	windowName: 'MantAsigTipAulMateria',
	isCreate: false,
	oldTipoAula: 0, 
	
	show: function(){
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantAsigTipAulMateria.isByClean()) 
			this.limpiar();
		dialogsMantAsigTipAulMateria.show();
	},
	
	hide: function(){
		dialogsMantAsigTipAulMateria.hide();
	},
	
	createMWs: function(){
		mwMantAsigTipAulMateria = desktop.addMinWindow('A.T.A. Materia', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsMantAsigTipAulMateria.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},
	
	dialogsMantAsigTipAulMateria_Init: function(){
		dialogsMantAsigTipAulMateria.setMinimizeXY(0, 0);
		dialogsMantAsigTipAulMateria.setCenterScreen();
		dialogsMantAsigTipAulMateria.addSpace(0, 0, 20);
		dialogsMantAsigTipAulMateria.addLn(1, 1, 1);
		dialogsMantAsigTipAulMateria.setHeightCell(1,1,10);  
		dialogsMantAsigTipAulMateria.addObjToDialog(powerComboBoxAsigTipAulMatOrganizacion, 2, 1,24);
		dialogsMantAsigTipAulMateria.addObjToDialog(powerComboBoxAsigTipAulMatSuborganizacion, 2, 1,24);
		dialogsMantAsigTipAulMateria.addObjToDialog(powerComboBoxAsigTipAulMatCarrera, 2, 1,24);
		dialogsMantAsigTipAulMateria.adjAllMarginObj(2, 1, 20);
		dialogsMantAsigTipAulMateria.addObjToDialog(powerComboBoxAsigTipAulMatMateria, 3, 1,24);
		powerComboBoxAsigTipAulMatMateria.setWidthCombo(420);  
		dialogsMantAsigTipAulMateria.addObjToDialog(powerComboBoxAsigTipAulMatTipAula, 3, 1,24);
		dialogsMantAsigTipAulMateria.adjAllMarginObj(3, 1, 19);
		dialogsMantAsigTipAulMateria.addLn(4, 1, 1);
		dialogsMantAsigTipAulMateria.setHeightCell(4,1,10);
		dialogsMantAsigTipAulMateria.addObjToDialog(gridsMantAsigTipAulMateria.getObject(), 5, 1);
		dialogsMantAsigTipAulMateria.addLn(6, 1, 1);
		dialogsMantAsigTipAulMateria.setHeightCell(6,1,12);
		dialogsMantAsigTipAulMateria.addObjToDialog(imgButtonsAsigTipAulMatAgregar, 7, 1);
		dialogsMantAsigTipAulMateria.addObjToDialog(imgButtonsAsigTipAulMatModificar, 7, 1);
		dialogsMantAsigTipAulMateria.addObjToDialog(imgButtonsAsigTipAulMatEliminar, 7, 1);
		dialogsMantAsigTipAulMateria.addObjToDialog(imgButtonsAsigTipAulMatLimpiar, 7, 1);
		dialogsMantAsigTipAulMateria.addObjToDialog(imgButtonsAsigTipAulMatBuscar, 7, 1);
		dialogsMantAsigTipAulMateria.addObjToDialog(imgButtonsAsigTipAulMatSalir, 7, 1);
		imgButtonsAsigTipAulMatAgregar.setDimension(90, 22);
		imgButtonsAsigTipAulMatModificar.setDimension(90, 22);
		imgButtonsAsigTipAulMatEliminar.setDimension(90, 22);
		imgButtonsAsigTipAulMatBuscar.setDimension(90, 22);
		imgButtonsAsigTipAulMatLimpiar.setDimension(90, 22);
		imgButtonsAsigTipAulMatSalir.setDimension(90, 22);
		dialogsMantAsigTipAulMateria.adjAllMarginObj(7, 1, 20);
		dialogsMantAsigTipAulMateria.leftMarginObj(7, 1, 0, 80);
	},
	
	gridsMantAsigTipAulMateria_Init: function(){
		gridsMantAsigTipAulMateria.setFixColRow(false, true);
		gridsMantAsigTipAulMateria.addTitleVectorX(['Materia', 'Codigo Materia', 'Tipo de Aula', 'idtipoaula']);
		gridsMantAsigTipAulMateria.showData();
		gridsMantAsigTipAulMateria.setSizeCol(1, 490);
		gridsMantAsigTipAulMateria.setSizeCol(2, 100);
		gridsMantAsigTipAulMateria.setSizeCol(3, 216);
		gridsMantAsigTipAulMateria.setSizeCol(4, 0);
		gridsMantAsigTipAulMateria.hideCol(4);
	},
	
	create: function(){
		dialogsMantAsigTipAulMateria = dialogs.create('dialogsMantAsigTipAulMateria', 0, 0, 852, 452, 'ASIGNAR TIPO DE AULA A MATERIA');
		powerComboBoxAsigTipAulMatOrganizacion = powerComboBox.create('powerComboBoxAsigTipAulMatOrganizacion', 'powerComboBoxAsigTipAulMatOrganizacion', 'Organización: (+):', 1,105);
		powerComboBoxAsigTipAulMatOrganizacion.setValidEmpty();
        powerComboBoxAsigTipAulMatOrganizacion.addEmptyOption();
        powerComboBoxAsigTipAulMatOrganizacion.enableReadOnlyEditor();
		powerComboBoxAsigTipAulMatSuborganizacion = powerComboBox.create('powerComboBoxAsigTipAulMatSuborganizacion', 'powerComboBoxAsigTipAulMatSuborganizacion', 'Suborganización (^):', 1,122);
		powerComboBoxAsigTipAulMatSuborganizacion.setValidEmpty();
        powerComboBoxAsigTipAulMatSuborganizacion.addEmptyOption();
        powerComboBoxAsigTipAulMatSuborganizacion.enableReadOnlyEditor();
		powerComboBoxAsigTipAulMatCarrera = powerComboBox.create('powerComboBoxAsigTipAulMatCarrera', 'powerComboBoxAsigTipAulMatCarrera', 'Carrera (^):', 1,94);
		powerComboBoxAsigTipAulMatCarrera.setValidEmpty();
        powerComboBoxAsigTipAulMatCarrera.addEmptyOption();
        powerComboBoxAsigTipAulMatCarrera.enableReadOnlyEditor();
		powerComboBoxAsigTipAulMatMateria = powerComboBox.create('powerComboBoxAsigTipAulMatMateria', 'powerComboBoxAsigTipAulMatMateria', 'Materia (*):', 1,105);
		powerComboBoxAsigTipAulMatMateria.setValidEmpty();
        powerComboBoxAsigTipAulMatMateria.addEmptyOption();
        powerComboBoxAsigTipAulMatMateria.enableReadOnlyEditor();
        powerComboBoxAsigTipAulMatMateria.setDataType('string');
        powerComboBoxAsigTipAulMatMateria.setFieldFind(true);
		powerComboBoxAsigTipAulMatTipAula = powerComboBox.create('powerComboBoxAsigTipAulMatTipAula', 'powerComboBoxAsigTipAulMatTipAula', 'Tipo de Aula (*):', 1,95);
		powerComboBoxAsigTipAulMatTipAula.setValidEmpty();
        powerComboBoxAsigTipAulMatTipAula.addEmptyOption();
        powerComboBoxAsigTipAulMatTipAula.enableReadOnlyEditor();
        powerComboBoxAsigTipAulMatTipAula.setFieldFind(true);
		gridsMantAsigTipAulMateria = grids.create('gridsMantAsigTipAulMateria', 15, 4);
		imgButtonsAsigTipAulMatAgregar = imgButtons.create('imgButtonsAsigTipAulMatAgregar', 'Agregar', 'ok.png');
		imgButtonsAsigTipAulMatModificar = imgButtons.create('imgButtonsAsigTipAulMatModificar', 'Modificar', 'icono_modificar.png');
		imgButtonsAsigTipAulMatEliminar = imgButtons.create('imgButtonsAsigTipAulMatEliminar', 'Eliminar', 'eliminar.jpg');
		imgButtonsAsigTipAulMatLimpiar = imgButtons.create('imgButtonsAsigTipAulMatLimpiar', 'Limpiar', 'limpiar.png');
		imgButtonsAsigTipAulMatBuscar = imgButtons.create('imgButtonsAsigTipAulMatBuscar', 'Buscar', 'icono_buscar.png');
		imgButtonsAsigTipAulMatSalir = imgButtons.create('imgButtonsAsigTipAulMatSalir', 'Salir', 'salir.png');
	},
	
	init: function(){
		this.create();
		this.setEvents();
		this.dialogsMantAsigTipAulMateria_Init();
		this.gridsMantAsigTipAulMateria_Init();
		this.createMWs();
	},
	
    limpiarCoreUpdate: function(){
    	//powerComboBoxAsigTipAulMatTipAula.setSelectedIndex(0);
    	powerComboBoxAsigTipAulMatMateria.setSelectedIndex(0);
    	gridsMantAsigTipAulMateria.clean();
    	dialogsMantAsigTipAulMateria.setMsg("");
        imgButtonsAsigTipAulMatAgregar.setEnable();
        imgButtonsAsigTipAulMatModificar.setDisable();
        imgButtonsAsigTipAulMatEliminar.setDisable();
        this.buscar();
    },

    limpiar: function(){
		powerComboBoxAsigTipAulMatOrganizacion.setSelectedIndex(0);
		powerComboBoxAsigTipAulMatSuborganizacion.setSelectedIndex(0);
		powerComboBoxAsigTipAulMatCarrera.setSelectedIndex(0);
		powerComboBoxAsigTipAulMatMateria.setSelectedIndex(0);
		powerComboBoxAsigTipAulMatTipAula.setSelectedIndex(0);
		gridsMantAsigTipAulMateria.clean();
		dialogsMantAsigTipAulMateria.setMsg("");
		powerComboBoxAsigTipAulMatOrganizacion.enableReadOnlyEditor();
		imgButtonsAsigTipAulMatAgregar.setEnable();
		imgButtonsAsigTipAulMatModificar.setDisable();
		imgButtonsAsigTipAulMatEliminar.setDisable();
		Tool.cnnSrv('MantObject', 'getMantAsigTipAulMateriaInit', this.windowName + '.loadInit()');
	},
	
    loadInit: function() {
		Tool.loadPowerComboData(dialogsMantAsigTipAulMateria, powerComboBoxAsigTipAulMatOrganizacion, 0, 1, json('getData'));
		Tool.loadPowerComboData(dialogsMantAsigTipAulMateria, powerComboBoxAsigTipAulMatTipAula, 0, 1, json('getMantTipAula'));
		Tool.getContext(dialogsMantAsigTipAulMateria, powerComboBoxAsigTipAulMatOrganizacion, powerComboBoxAsigTipAulMatSuborganizacion, powerComboBoxAsigTipAulMatCarrera, "Tool.getPowerComboData('MantObject', 'getMantMateria', dialogsMantAsigTipAulMateria, powerComboBoxAsigTipAulMatMateria, 0, 1, powerComboBoxAsigTipAulMatCarrera.setModeReturnGetText(2))");
	},

	setData: function(){
		if (gridsMantAsigTipAulMateria.getDataCell(1) != "") {
			powerComboBoxAsigTipAulMatMateria.findOption(gridsMantAsigTipAulMateria.getDataCell(2));
			this.oldTipoAula = gridsMantAsigTipAulMateria.getDataCell(4);
			powerComboBoxAsigTipAulMatTipAula.findOption(gridsMantAsigTipAulMateria.getDataCell(4));
			imgButtonsAsigTipAulMatAgregar.setDisable();
			imgButtonsAsigTipAulMatModificar.setEnable();
			imgButtonsAsigTipAulMatEliminar.setEnable();
		}
	},
	
  	buscar : function(){
  		if (powerComboBoxAsigTipAulMatOrganizacion.valid(dialogsMantAsigTipAulMateria))
  	  		if (powerComboBoxAsigTipAulMatSuborganizacion.valid(dialogsMantAsigTipAulMateria))
  	  			if (powerComboBoxAsigTipAulMatCarrera.valid(dialogsMantAsigTipAulMateria)) {
		  	    	gridsMantAsigTipAulMateria.clean();  		
  					dialogsMantAsigTipAulMateria.setMsg("");
		  	    	Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantAsigTipAulMateria, gridsMantAsigTipAulMateria, false, powerComboBoxAsigTipAulMatCarrera, powerComboBoxAsigTipAulMatMateria, powerComboBoxAsigTipAulMatMateria, powerComboBoxAsigTipAulMatTipAula, powerComboBoxAsigTipAulMatTipAula);
		  	    }
  	},

    resetElements : function(element) {
    	if (element == 'org') { 
    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsMantAsigTipAulMateria, powerComboBoxAsigTipAulMatSuborganizacion, 1, 2, powerComboBoxAsigTipAulMatOrganizacion);
    		Tool.rstPwrCmb(powerComboBoxAsigTipAulMatCarrera);
    		Tool.rstPwrCmb(powerComboBoxAsigTipAulMatMateria);
    		powerComboBoxAsigTipAulMatTipAula.setSelectedIndex(0);
    	}
    	else if (element == 'sub') { 
			Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsMantAsigTipAulMateria, powerComboBoxAsigTipAulMatCarrera, -1, 3, powerComboBoxAsigTipAulMatSuborganizacion);
			Tool.rstPwrCmb(powerComboBoxAsigTipAulMatMateria);
			powerComboBoxAsigTipAulMatTipAula.setSelectedIndex(0);
		}
		else if (element == 'car') {
			Tool.getPowerComboData('MantObject', 'getMantMateria', dialogsMantAsigTipAulMateria, powerComboBoxAsigTipAulMatMateria, 0, 1, powerComboBoxAsigTipAulMatCarrera.setModeReturnGetText(2));
			powerComboBoxAsigTipAulMatTipAula.setSelectedIndex(0);
		}

    	gridsMantAsigTipAulMateria.clean();
    	imgButtonsAsigTipAulMatAgregar.setEnable();
		imgButtonsAsigTipAulMatModificar.setDisable();
		imgButtonsAsigTipAulMatEliminar.setDisable();
	},
	  	
  	setEvents: function(){
		powerComboBoxAsigTipAulMatOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxAsigTipAulMatSuborganizacion.onChange(this.windowName + ".resetElements('sub')");
		powerComboBoxAsigTipAulMatCarrera.onChange(this.windowName + ".resetElements('car')");
		powerComboBoxAsigTipAulMatMateria.onChange(this.windowName + ".resetElements('')");
		powerComboBoxAsigTipAulMatTipAula.onChange(this.windowName + ".resetElements('')");
		gridsMantAsigTipAulMateria.onClickCells(this.windowName + ".setData()");
		imgButtonsAsigTipAulMatAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
		imgButtonsAsigTipAulMatModificar.onClick(this.windowName + ".coreUpdate('modificar')");
		imgButtonsAsigTipAulMatEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
		imgButtonsAsigTipAulMatLimpiar.onClick('MantAsigTipAulMateria.limpiar()');
		imgButtonsAsigTipAulMatBuscar.onClick('MantAsigTipAulMateria.buscar()');
		imgButtonsAsigTipAulMatSalir.onClick('dialogsMantAsigTipAulMateria.close()');
	},
	
	coreUpdate: function(methodName){
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");
		if (methodName == 'eliminar') {
			if (powerComboBoxAsigTipAulMatMateria.valid(dialogsMantAsigTipAulMateria)) 
				if (powerComboBoxAsigTipAulMatTipAula.valid(dialogsMantAsigTipAulMateria)) {
					rlx.add('reg', powerComboBoxAsigTipAulMatMateria);
					rlx.add('reg', powerComboBoxAsigTipAulMatTipAula);
					procesar = true;
				}
		}
		else {
			if (powerComboBoxAsigTipAulMatOrganizacion.valid(dialogsMantAsigTipAulMateria)) 
				if (powerComboBoxAsigTipAulMatSuborganizacion.valid(dialogsMantAsigTipAulMateria)) 
					if (powerComboBoxAsigTipAulMatCarrera.valid(dialogsMantAsigTipAulMateria)) 
						if (powerComboBoxAsigTipAulMatMateria.valid(dialogsMantAsigTipAulMateria)) 
							if (powerComboBoxAsigTipAulMatTipAula.valid(dialogsMantAsigTipAulMateria)) {
								if (methodName == 'modificar') {
									rlx.add('reg', powerComboBoxAsigTipAulMatTipAula);
									rlx.add('reg', powerComboBoxAsigTipAulMatMateria);
									rlx.addInt('reg', this.oldTipoAula);
								}
								else {
									rlx.add('reg', powerComboBoxAsigTipAulMatMateria);
									rlx.add('reg', powerComboBoxAsigTipAulMatTipAula);
								}
								procesar = true;
							}
		}
		if (procesar) {
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()', rlx);
		}
	}
};