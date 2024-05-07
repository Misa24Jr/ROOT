var dialogsMantMatDictada = new Object();
var editsMantMatDicCedula = new Object();
var editsMantMatDicNombre = new Object();
var editsMantMatDicApellido = new Object();
var powerComboBoxMantMatDicOrganizacion = new Object();
var powerComboBoxMantMatDicSuborganizacion = new Object();
var powerComboBoxMantMatDicCarrera = new Object();
var powerComboBoxMantMatDicMateria = new Object();
var gridsMantMatDictada = new Object();
var imgButtonsMantMatDictadaAgregar = new Object();
var imgButtonsMantMatDictadaEliminar = new Object();
var imgButtonsMantMatDictadaLimpiar = new Object();
var imgButtonsMantMatDictadaBuscar = new Object();
var imgButtonsMantMatDictadaSalir = new Object();
var mwMantMatDictada = new Object();// minWindow

var MantMatDictada = {
    windowName: 'MantMatDictada',
    isCreate: false,
    hideIdMateriaGrid: null,
	
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsMantMatDictada.isByClean()) 
            this.limpiar();
        dialogsMantMatDictada.show();
    },
    hide: function(){
        dialogsMantMatDictada.hide();
    },
    createMWs: function(){
        mwMantMatDictada = desktop.addMinWindow('M.M.Dictada', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantMatDictada.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsMantMatDictada_Init: function(){
        dialogsMantMatDictada.setMinimizeXY(0, 0);
        dialogsMantMatDictada.setCenterScreen();
        dialogsMantMatDictada.addSpace(1, 0, 20);
        dialogsMantMatDictada.addLn(1, 1, 1);
		dialogsMantMatDictada.setHeightCell(1,1,10);  
		dialogsMantMatDictada.addObjToDialog(editsMantMatDicCedula, 2, 1,24);
        editsMantMatDicCedula.setSizeEdit(149);
        dialogsMantMatDictada.addObjToDialog(editsMantMatDicNombre, 2, 1,24);
        editsMantMatDicNombre.setSizeEdit(149);
		editsMantMatDicNombre.setMaxLength(50); 
        dialogsMantMatDictada.addObjToDialog(editsMantMatDicApellido, 2, 1,24);
        editsMantMatDicApellido.setSizeEdit(149);
		editsMantMatDicApellido.setMaxLength(50); 
        dialogsMantMatDictada.adjAllMarginObj(2, 1, 30);
        dialogsMantMatDictada.addObjToDialog(powerComboBoxMantMatDicOrganizacion, 3, 1,24);
        dialogsMantMatDictada.addObjToDialog(powerComboBoxMantMatDicSuborganizacion, 3, 1,24);
        dialogsMantMatDictada.addObjToDialog(powerComboBoxMantMatDicCarrera, 3, 1,24);
        dialogsMantMatDictada.adjAllMarginObj(3, 1, 30);
        dialogsMantMatDictada.addObjToDialog(powerComboBoxMantMatDicMateria, 4, 1,24);
		powerComboBoxMantMatDicMateria.setWidthCombo(680);
        dialogsMantMatDictada.addLn(5, 1, 1);
		dialogsMantMatDictada.setHeightCell(5,1,10);  
        dialogsMantMatDictada.addObjToDialog(gridsMantMatDictada.getObject(), 6, 1);
        dialogsMantMatDictada.addLn(7, 1, 1);
		dialogsMantMatDictada.setHeightCell(7,1,12);  
        dialogsMantMatDictada.addObjToDialog(imgButtonsMantMatDictadaAgregar, 8, 1);
        dialogsMantMatDictada.addObjToDialog(imgButtonsMantMatDictadaEliminar, 8, 1);
        dialogsMantMatDictada.addObjToDialog(imgButtonsMantMatDictadaLimpiar, 8, 1);
        dialogsMantMatDictada.addObjToDialog(imgButtonsMantMatDictadaBuscar, 8, 1);
        dialogsMantMatDictada.addObjToDialog(imgButtonsMantMatDictadaSalir, 8, 1);
        imgButtonsMantMatDictadaAgregar.setDimension(90, 22);
        imgButtonsMantMatDictadaEliminar.setDimension(90, 22);
        imgButtonsMantMatDictadaLimpiar.setDimension(90, 22);
        imgButtonsMantMatDictadaBuscar.setDimension(90, 22);
        imgButtonsMantMatDictadaSalir.setDimension(90, 22);
        dialogsMantMatDictada.adjAllMarginObj(8, 1, 20);
        dialogsMantMatDictada.leftMarginObj(8, 1, 0, 132);
    },
	
    gridsMantMatDictada_Init: function(){
        gridsMantMatDictada.setFixColRow(false, true);
        gridsMantMatDictada.addTitleVectorX(['C.i', 'Nombre', 'Apellido', 'id_organizacion', 'id_suborganizacion', 'id_carrera', 'Carrera', 'id_materia', 'Posición', 'Materia', 'id_persona']);
        gridsMantMatDictada.showData();
        gridsMantMatDictada.setSizeCol(1, 89);
        gridsMantMatDictada.setSizeCol(2, 130);
        gridsMantMatDictada.setSizeCol(3, 130);
        gridsMantMatDictada.setSizeCol(4, 0);
        gridsMantMatDictada.setSizeCol(5, 0);
        gridsMantMatDictada.setSizeCol(6, 0);
        gridsMantMatDictada.setSizeCol(7, 174);
        gridsMantMatDictada.setSizeCol(8, 0);
        gridsMantMatDictada.setSizeCol(9, 60);
        gridsMantMatDictada.setSizeCol(10, 214);
        gridsMantMatDictada.setSizeCol(11, 0);
        gridsMantMatDictada.hideCol(4);
        gridsMantMatDictada.hideCol(5);
        gridsMantMatDictada.hideCol(6);
        gridsMantMatDictada.hideCol(8);
        gridsMantMatDictada.hideCol(11);
    },
    
    create: function(){
        dialogsMantMatDictada = dialogs.create('dialogsMantMatDictada', 0, 0, 844, 383, 'MANTENIMIENTO MATERIA DICTADA POR PROFESOR');
        editsMantMatDicCedula = edits.create('editsMantMatDicCedula', 'editsMantMatDicCedula', 'C.i. (*):', 1,102, 'normal');//    
        editsMantMatDicCedula.setValidInteger();
        editsMantMatDicCedula.setFieldFind(true);
        editsMantMatDicNombre = edits.create('editsMantMatDicNombre', 'editsMantMatDicNombre', 'Nombre (*):', 1,120, 'normal');
        editsMantMatDicNombre.setValidEmpty();
		editsMantMatDicNombre.setFieldFind(true);
        editsMantMatDicApellido = edits.create('editsMantMatDicApellido', 'editsMantMatDicApellido', 'Apellido (*):', 1,72, 'normal');
        editsMantMatDicApellido.setValidEmpty();
		editsMantMatDicApellido.setFieldFind(true);
        powerComboBoxMantMatDicOrganizacion = powerComboBox.create('powerComboBoxMantMatDicOrganizacion', 'powerComboBoxMantMatDicOrganizacion', 'Organización (+):', 1,102);
        powerComboBoxMantMatDicOrganizacion.enableReadOnlyEditor();
        powerComboBoxMantMatDicOrganizacion.addEmptyOption();
        powerComboBoxMantMatDicOrganizacion.setValidEmpty();
        powerComboBoxMantMatDicSuborganizacion = powerComboBox.create('powerComboBoxMantMatDicSuborganizacion', 'powerComboBoxMantMatDicSuborganizacion', 'Suborganización (^):', 1,120);
        powerComboBoxMantMatDicSuborganizacion.enableReadOnlyEditor();
        powerComboBoxMantMatDicSuborganizacion.addEmptyOption();
        powerComboBoxMantMatDicSuborganizacion.setValidEmpty();
        powerComboBoxMantMatDicCarrera = powerComboBox.create('powerComboBoxMantMatDicCarrera', 'powerComboBoxMantMatDicCarrera', 'Carrera (^):', 1,72);
        powerComboBoxMantMatDicCarrera.enableReadOnlyEditor();
        powerComboBoxMantMatDicCarrera.addEmptyOption();
        powerComboBoxMantMatDicCarrera.setValidEmpty();
        powerComboBoxMantMatDicMateria = powerComboBox.create('powerComboBoxMantMatDicMateria', 'powerComboBoxMantMatDicMateria', 'Materia (^):', 1,102);
        powerComboBoxMantMatDicMateria.enableReadOnlyEditor();
        powerComboBoxMantMatDicMateria.addEmptyOption();
        powerComboBoxMantMatDicMateria.setValidEmpty();
		powerComboBoxMantMatDicMateria.setDataType('string');
		powerComboBoxMantMatDicMateria.setFieldFind(true);
        gridsMantMatDictada = grids.create('gridsMantMatDictada', 10, 11);
        imgButtonsMantMatDictadaAgregar = imgButtons.create('imgButtonsMantMatDictadaAgregar', 'Agregar', 'ok.png');
        imgButtonsMantMatDictadaEliminar = imgButtons.create('imgButtonsMantMatDictadaEliminar', 'Eliminar', 'eliminar.jpg');
        imgButtonsMantMatDictadaEliminar.setDisable();
        imgButtonsMantMatDictadaLimpiar = imgButtons.create('imgButtonsMantMatDictadaLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsMantMatDictadaBuscar = imgButtons.create('imgButtonsMantMatDictadaBuscar', 'Buscar', 'icono_buscar.png');
        imgButtonsMantMatDictadaSalir = imgButtons.create('imgButtonsMantMatDictadaSalir', 'Salir', 'salir.png');
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsMantMatDictada_Init();
        this.gridsMantMatDictada_Init();
        this.createMWs();
    },
    
    setData: function(){
		var rlx = xmlStructs.createRecordList("rlx");

        if (gridsMantMatDictada.getDataCell(1) != "") {
        	editsMantMatDicCedula.hideId = gridsMantMatDictada.getDataCell(11);
			this.hideIdMateriaGrid = gridsMantMatDictada.getDataCell(8);
            editsMantMatDicCedula.setValue(gridsMantMatDictada.getDataCell(1));
            editsMantMatDicNombre.setValue(gridsMantMatDictada.getDataCell(2));
            editsMantMatDicApellido.setValue(gridsMantMatDictada.getDataCell(3));
            imgButtonsMantMatDictadaAgregar.setDisable();
            imgButtonsMantMatDictadaEliminar.setEnable();
			
			rlx.addInt('reg', gridsMantMatDictada.getDataCell(4));
			rlx.addInt('reg', gridsMantMatDictada.getDataCell(5));
			rlx.addInt('reg', gridsMantMatDictada.getDataCell(6));
			rlx.addStr('reg', gridsMantMatDictada.getDataCell(8));
			Tool.cnnSrv('MantObject', 'getMantOrganizacionInit', this.windowName + '.loadInit()', rlx);
        }
    },

	loadInit: function(){
		Tool.loadPowerComboData(dialogsMantMatDictada, powerComboBoxMantMatDicSuborganizacion, 1, 2, json('getMantSuborganizacion'));
		Tool.loadPowerComboData(dialogsMantMatDictada, powerComboBoxMantMatDicCarrera, -1, 3, json('getMantenimientodeCarrera'));
		Tool.loadPowerComboData(dialogsMantMatDictada, powerComboBoxMantMatDicMateria, 0, 1, json('getMantMateria'));
    	powerComboBoxMantMatDicOrganizacion.findOption(gridsMantMatDictada.getDataCell(4));
    	powerComboBoxMantMatDicSuborganizacion.findOption(gridsMantMatDictada.getDataCell(5));
		powerComboBoxMantMatDicCarrera.findOption(gridsMantMatDictada.getDataCell(6), 2);
		powerComboBoxMantMatDicMateria.findOption(gridsMantMatDictada.getDataCell(8));
	},
	
    setEvents: function(){
        gridsMantMatDictada.onClickCells(this.windowName + ".setData()");
        imgButtonsMantMatDictadaAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
        imgButtonsMantMatDictadaEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
        imgButtonsMantMatDictadaBuscar.onClick(this.windowName + ".buscar()");
        imgButtonsMantMatDictadaLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsMantMatDictadaSalir.onClick("dialogsMantMatDictada.close();");
		powerComboBoxMantMatDicOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxMantMatDicSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		powerComboBoxMantMatDicCarrera.onChange(this.windowName + ".resetElements('carr')");
		powerComboBoxMantMatDicMateria.onChange(this.windowName + ".resetElements('')");
		editsMantMatDicCedula.onEnter(this.windowName + ".buscar()");
		editsMantMatDicCedula.onChange(this.windowName + ".limpiarFind(1)");
		editsMantMatDicNombre.onEnter(this.windowName + ".buscar()");
		editsMantMatDicNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsMantMatDicApellido.onEnter(this.windowName + ".buscar()");
		editsMantMatDicApellido.onChange(this.windowName + ".limpiarFind(3)");
    },

    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxMantMatDicCarrera);
			Tool.rstPwrCmb(powerComboBoxMantMatDicMateria);
			Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsMantMatDictada, powerComboBoxMantMatDicSuborganizacion, 1, 2, powerComboBoxMantMatDicOrganizacion);		
		}
		else if (element == 'suborg') {
			Tool.rstPwrCmb(powerComboBoxMantMatDicMateria);
			Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsMantMatDictada, powerComboBoxMantMatDicCarrera, -1, 3, powerComboBoxMantMatDicSuborganizacion);		}
		else if (element == 'carr') {
			Tool.getPowerComboData('MantObject', 'getMateriaPensum', dialogsMantMatDictada, powerComboBoxMantMatDicMateria, 0, 1, powerComboBoxMantMatDicCarrera.setModeReturnGetText(2));
		}
		imgButtonsMantMatDictadaAgregar.setEnable();
		imgButtonsMantMatDictadaEliminar.setDisable();
	},

	limpiar: function(){
		editsMantMatDicCedula.hideId = -1;
        editsMantMatDicCedula.setValue("");
        editsMantMatDicNombre.setValue("");
        editsMantMatDicApellido.setValue("");
        Tool.rstPwrCmb(powerComboBoxMantMatDicOrganizacion);
        Tool.rstPwrCmb(powerComboBoxMantMatDicSuborganizacion);
        Tool.rstPwrCmb(powerComboBoxMantMatDicCarrera);
        Tool.rstPwrCmb(powerComboBoxMantMatDicMateria);
        gridsMantMatDictada.clean();
        dialogsMantMatDictada.setMsg("");
        imgButtonsMantMatDictadaAgregar.setEnable();
        imgButtonsMantMatDictadaEliminar.setDisable();
        Tool.cnnSrv('MantObject', 'getMantOrganizacion', this.windowName + '.loadDataInit()');
    },

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsMantMatDictada, powerComboBoxMantMatDicOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsMantMatDictada, powerComboBoxMantMatDicOrganizacion, powerComboBoxMantMatDicSuborganizacion, powerComboBoxMantMatDicCarrera, "Tool.getPowerComboData('MantObject', 'getMateriaPensum', dialogsMantMatDictada, powerComboBoxMantMatDicMateria, 0, 1, powerComboBoxMantMatDicCarrera.setModeReturnGetText(2))");
    },
    
	limpiarCoreUpdate : function() {
		powerComboBoxMantMatDicMateria.setSelectedIndex(0);
		gridsMantMatDictada.clean();
		dialogsMantMatDictada.setMsg("");
		imgButtonsMantMatDictadaAgregar.setEnable();
		imgButtonsMantMatDictadaEliminar.setDisable();
		this.buscar();
	},

	limpiarFind : function(ix) {
		editsMantMatDicCedula.hideId = -1;
		imgButtonsMantMatDictadaAgregar.setEnable();
		imgButtonsMantMatDictadaEliminar.setDisable();
		powerComboBoxMantMatDicMateria.setSelectedIndex(0);
		
  		switch (ix) {
		case 1: 
	  		editsMantMatDicNombre.setValue("");
	  		editsMantMatDicApellido.setValue("");  		
			break;
		case 2: 
	  		editsMantMatDicCedula.setValue("");
	  		editsMantMatDicApellido.setValue("");  		
			break;
		default:
	  		editsMantMatDicCedula.setValue("");
  			editsMantMatDicNombre.setValue("");
			break;
		} 
  	},

	buscar: function() {
		gridsMantMatDictada.clean();
		if (editsMantMatDicCedula.getValue() == '' && editsMantMatDicNombre.getValue() == '' && editsMantMatDicApellido.getValue() == '' && powerComboBoxMantMatDicMateria.getOption() == '') {
			Tool.getGridData('MantObject', 'getMantMatDictada', dialogsMantMatDictada, gridsMantMatDictada, false, editsMantMatDicCedula, editsMantMatDicCedula, powerComboBoxMantMatDicMateria, powerComboBoxMantMatDicMateria);
		}
		if ((editsMantMatDicCedula.getValue() != '' && editsMantMatDicNombre.getValue() != '' && editsMantMatDicApellido.getValue() != '') || powerComboBoxMantMatDicMateria.getOption() != '') {
			Tool.getGridData('MantObject', 'getMantMatDictada', dialogsMantMatDictada, gridsMantMatDictada, false, editsMantMatDicCedula, editsMantMatDicCedula, powerComboBoxMantMatDicMateria, powerComboBoxMantMatDicMateria);
		}
		else if (editsMantMatDicCedula.getValue() != '' || editsMantMatDicNombre.getValue() != '' || editsMantMatDicApellido.getValue() != '') {
        	ResuBusqueda.setObjectExtFnc(editsMantMatDicCedula, editsMantMatDicNombre, editsMantMatDicApellido, 'MantMatDictada.buscar()');
			Tool.getGridData('MantObject', 'getMantPersProf', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsMantMatDicCedula, editsMantMatDicCedula, editsMantMatDicNombre, editsMantMatDicNombre, editsMantMatDicApellido, editsMantMatDicApellido);
		}
	},
	    
    coreUpdate: function(methodName){
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (methodName == 'eliminar') {
            if (editsMantMatDicCedula.valid(dialogsMantMatDictada)) {
                rlx.addInt('reg', editsMantMatDicCedula.hideId);
                rlx.add('reg', powerComboBoxMantMatDicMateria);
                procesar = true;
            }
        }
        else {
            if (editsMantMatDicCedula.valid(dialogsMantMatDictada)) 
                if (editsMantMatDicNombre.valid(dialogsMantMatDictada)) 
                    if (editsMantMatDicApellido.valid(dialogsMantMatDictada)) 
                        if (powerComboBoxMantMatDicOrganizacion.valid(dialogsMantMatDictada)) 
                            if (powerComboBoxMantMatDicSuborganizacion.valid(dialogsMantMatDictada)) 
                                if (powerComboBoxMantMatDicCarrera.valid(dialogsMantMatDictada)) 
                                    if (powerComboBoxMantMatDicMateria.valid(dialogsMantMatDictada)) {
							            if (methodName == 'modificar') {
	                                        rlx.add('reg', powerComboBoxMantMatDicMateria);
	                                        rlx.addInt('reg', editsMantMatDicCedula.hideId);
											rlx.addStr('reg', this.hideIdMateriaGrid);
							            }
										else {
	                                        rlx.addInt('reg', editsMantMatDicCedula.hideId);
	                                        rlx.add('reg', powerComboBoxMantMatDicMateria);
										}
                                        procesar = true;
                                    }
        }
        if (procesar) {
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()', rlx);
        }
    }
};

