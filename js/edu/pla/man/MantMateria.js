var dialogsMantMateria = new Object();
var editsMantMatId = new Object();
var editsMantMatDescripcion = new Object();
var editsMantMatFeCreacion = new Object();
var editsMantMatAbreviatura = new Object();
var powerComboBoxMantMatCarrera = new Object();
var powerComboBoxMantMatOrg = new Object();
var powerComboBoxMantMatSuborganizacion = new Object();
var powerComboBoxMantMatEstado = new Object();
var powerComboBoxMantMatTipMateria = new Object();
var powerComboBoxMantMatTipCalificacion = new Object();
var powerComboBoxMantMatPromedio = new Object();
var powerComboBoxMantMatBoletin = new Object();
var powerComboBoxMantMatET = new Object();
var gridsMantMateria = new Object();
var imgButtonsMantMatAgregar = new Object();
var imgButtonsMantMatModificar = new Object();
var imgButtonsMantMatEliminar = new Object();
var imgButtonsMantMatLimpiar = new Object();
var imgButtonsMantMatBuscar = new Object();
var imgButtonsMantMatSalir = new Object();
var mwMantMateria = new Object();// minWindow

var MantMateria = {
    windowName: 'MantMateria',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate){
            this.init();
            this.isCreate = true;
        }
        if (dialogsMantMateria.isByClean()) 
            this.limpiar();
        dialogsMantMateria.show();
    },
    
    hide: function(){
        dialogsMantMateria.hide();
    },
    
    createMWs: function(){
        mwMantMateria = desktop.addMinWindow('M.Materia', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantMateria.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsMantMateria_Init: function(){
        dialogsMantMateria.setMinimizeXY(0, 0);
        dialogsMantMateria.setCenterScreen();
        dialogsMantMateria.addSpace(0, 0, 20);
        dialogsMantMateria.addLn(1, 1, 1);
		dialogsMantMateria.setHeightCell(1,1,10);  
		dialogsMantMateria.addObjToDialog(powerComboBoxMantMatOrg, 2, 1,24);
		editsMantMatId.setSizeEdit(149);
        dialogsMantMateria.addObjToDialog(powerComboBoxMantMatSuborganizacion, 2, 1,24);
        powerComboBoxMantMatEstado.addOptionAndSimpleValue(null, 'ACTIVO', 'ACTIVO');
        powerComboBoxMantMatEstado.addOptionAndSimpleValue(null, 'INACTIVO', 'INACTIVO');
		powerComboBoxMantMatEstado.addOptionAndSimpleValue(null, 'SIN HORARIO', 'SIN HORARIO');
		dialogsMantMateria.addObjToDialog(powerComboBoxMantMatCarrera, 2, 1,24);
        dialogsMantMateria.adjAllMarginObj(2, 1, 20); 
        dialogsMantMateria.addObjToDialog(editsMantMatId, 3, 1,21);
        dialogsMantMateria.addObjToDialog(powerComboBoxMantMatEstado, 3, 1,24);
        dialogsMantMateria.addObjToDialog(powerComboBoxMantMatTipMateria, 3, 1,24);
        dialogsMantMateria.adjAllMarginObj(3, 1, 20);
        dialogsMantMateria.addObjToDialog(editsMantMatDescripcion, 4, 1,24);
        editsMantMatDescripcion.setSizeEdit(443);
        editsMantMatDescripcion.setMaxLength(100); 
        dialogsMantMateria.addObjToDialog(powerComboBoxMantMatTipCalificacion, 4, 1,24); 
        dialogsMantMateria.adjAllMarginObj(4, 1, 20);
        dialogsMantMateria.addObjToDialog(editsMantMatFeCreacion, 5, 1,24);
		editsMantMatFeCreacion.setSizeEdit(149);
        editsMantMatFeCreacion.readOnly(true);
        dialogsMantMateria.addObjToDialog(editsMantMatAbreviatura, 5, 1,24);
        editsMantMatAbreviatura.setSizeEdit(50);
        editsMantMatAbreviatura.setMaxLength(6); 
        dialogsMantMateria.addObject(powerComboBoxMantMatBoletin, 481, 109);
		powerComboBoxMantMatBoletin.setWidthCombo(20);
		powerComboBoxMantMatBoletin.addOptionAndSimpleValue(null, 'SI', 'SI');
		powerComboBoxMantMatBoletin.addOptionAndSimpleValue(null, 'NO', 'NO');
		dialogsMantMateria.addObject(powerComboBoxMantMatPromedio, 590, 109);
		powerComboBoxMantMatPromedio.setWidthCombo(20);
		powerComboBoxMantMatPromedio.addOptionAndSimpleValue(null, 'SI', 'SI');
		powerComboBoxMantMatPromedio.addOptionAndSimpleValue(null, 'NO', 'NO');
		dialogsMantMateria.addObject(powerComboBoxMantMatET, 796, 109);
		powerComboBoxMantMatET.setWidthCombo(20);
		powerComboBoxMantMatET.addOptionAndSimpleValue(null, 'NO', 'NO');
		powerComboBoxMantMatET.addOptionAndSimpleValue(null, 'SI', 'SI');
        dialogsMantMateria.adjAllMarginObj(5, 1, 20);
        dialogsMantMateria.addLn(6, 1, 1);
		dialogsMantMateria.setHeightCell(6,1,2);  
        dialogsMantMateria.addObjToDialog(gridsMantMateria.getObject(), 7, 1);
        dialogsMantMateria.addLn(8, 1, 1);
		dialogsMantMateria.setHeightCell(8,1,10);  
        dialogsMantMateria.addObjToDialog(imgButtonsMantMatAgregar, 9, 1);
        dialogsMantMateria.addObjToDialog(imgButtonsMantMatModificar, 9, 1);
        dialogsMantMateria.addObjToDialog(imgButtonsMantMatEliminar, 9, 1);
        dialogsMantMateria.addObjToDialog(imgButtonsMantMatLimpiar, 9, 1);        
        dialogsMantMateria.addObjToDialog(imgButtonsMantMatBuscar, 9, 1);
        dialogsMantMateria.addObjToDialog(imgButtonsMantMatSalir, 9, 1);
        imgButtonsMantMatAgregar.setDimension(90, 22);
        imgButtonsMantMatModificar.setDimension(90, 22);
        imgButtonsMantMatEliminar.setDimension(90, 22);
        imgButtonsMantMatLimpiar.setDimension(90, 22);        
        imgButtonsMantMatBuscar.setDimension(90, 22);        
        imgButtonsMantMatSalir.setDimension(90, 22);
        dialogsMantMateria.adjAllMarginObj(9, 1, 20);
        dialogsMantMateria.leftMarginObj(9, 1, 0, 94);
    },
	
    gridsMantMateria_Init: function(){
        gridsMantMateria.setFixColRow(false, true);
        gridsMantMateria.addTitleVectorX(['Código','Descripción','Tipo de Materia','suborganización','T. Calificación','Estado','idorganizacion','idsuborganizacion','idcarrera','fecha','idtipmateria','idtipocalif','AB','BL','PM','ET']);
        gridsMantMateria.showData();
        gridsMantMateria.setReadOnlyToAll();
        gridsMantMateria.setSizeCol(1,100);
        gridsMantMateria.setSizeCol(2,362);
        gridsMantMateria.setSizeCol(3,140); 
        gridsMantMateria.setSizeCol(4,0);
        gridsMantMateria.setSizeCol(5,90);        
        gridsMantMateria.setSizeCol(6,61);
        gridsMantMateria.setSizeCol(7,0);        
        gridsMantMateria.setSizeCol(8,0);
        gridsMantMateria.setSizeCol(9,0);
        gridsMantMateria.setSizeCol(10,0);
		gridsMantMateria.setSizeCol(11,0);
		gridsMantMateria.setSizeCol(12,0);
		gridsMantMateria.setSizeCol(13,20);
		gridsMantMateria.setSizeCol(14,20);
		gridsMantMateria.setSizeCol(15,20);
		gridsMantMateria.setSizeCol(16,20);
        //*************** Columna Oculta *****************        
        gridsMantMateria.hideCol(4);
        gridsMantMateria.hideCol(7);
        gridsMantMateria.hideCol(8);        
        gridsMantMateria.hideCol(9);
        gridsMantMateria.hideCol(10);
		gridsMantMateria.hideCol(11);
		gridsMantMateria.hideCol(12);
        //*************** Columna Oculta *****************
    },
    
    create: function(){
        dialogsMantMateria = dialogs.create('dialogsMantMateria', 0, 0, 882, 585, 'MANTENIMIENTO DE MATERIA');
        editsMantMatId = edits.create('editsMantMatId', 'editsMantMatId', 'Código (*):',1, 105, 'normal');
        editsMantMatId.setValidEmpty();
        editsMantMatId.setFieldFind(true);
        editsMantMatDescripcion = edits.create('editsMantMatDescripcion', 'editsMantMatDescripcion', 'Descripción (*):', 1,105, 'normal');
        editsMantMatDescripcion.setValidEmpty();
        editsMantMatDescripcion.setFieldFind(true);
        editsMantMatFeCreacion = edits.create('editsMantMatFeCreacion', 'editsMantMatFeCreacion', 'Fecha Creación :', 1,105, 'normal');
        editsMantMatAbreviatura = edits.create('editsMantMatAbreviatura', 'editsMantMatAbreviatura', 'Abreviatura:', 1,124, 'normal');
        editsMantMatAbreviatura.setValidEmpty();
        editsMantMatAbreviatura.setFieldFind(true);
        powerComboBoxMantMatCarrera = powerComboBox.create('powerComboBoxMantMatCarrera', 'powerComboBoxMantMatCarrera', 'Carrera (^):', 1,124);
        powerComboBoxMantMatCarrera.enableReadOnlyEditor();
        powerComboBoxMantMatCarrera.addEmptyOption();
        powerComboBoxMantMatCarrera.setValidEmpty();
        powerComboBoxMantMatOrg = powerComboBox.create('powerComboBoxMantMatOrg', 'powerComboBoxMantMatOrg', 'Organización (+):', 1,105);
        powerComboBoxMantMatOrg.enableReadOnlyEditor();
        powerComboBoxMantMatOrg.addEmptyOption();
        powerComboBoxMantMatOrg.setValidEmpty();
        powerComboBoxMantMatSuborganizacion = powerComboBox.create('powerComboBoxMantMatSuborganizacion', 'powerComboBoxMantMatSuborganizacion', 'Suborganización (^):', 1,124);
        powerComboBoxMantMatSuborganizacion.enableReadOnlyEditor();
        powerComboBoxMantMatSuborganizacion.addEmptyOption();
        powerComboBoxMantMatSuborganizacion.setValidEmpty();
        powerComboBoxMantMatEstado = powerComboBox.create('powerComboBoxMantMatEstado', 'powerComboBoxMantMatEstado', 'Estado (*):', 1,124);
        powerComboBoxMantMatEstado.enableReadOnlyEditor();
        powerComboBoxMantMatEstado.addEmptyOption();
        powerComboBoxMantMatEstado.setValidEmpty();
        powerComboBoxMantMatEstado.setDataType('string');
        powerComboBoxMantMatEstado.setFieldFind(true);
		powerComboBoxMantMatTipMateria = powerComboBox.create('powerComboBoxMantMatTipMateria', 'powerComboBoxMantMatTipMateria', 'Tipo de Materia (*):', 1,124);
        powerComboBoxMantMatTipMateria.enableReadOnlyEditor();
        powerComboBoxMantMatTipMateria.addEmptyOption();
        powerComboBoxMantMatTipMateria.setValidEmpty();
        powerComboBoxMantMatTipMateria.setFieldFind(true);
        powerComboBoxMantMatTipCalificacion = powerComboBox.create('powerComboBoxMantMatTipCalificacion', 'powerComboBoxMantMatTipCalificacion', 'Tipo de Calificación:', 1, 124);
        powerComboBoxMantMatTipCalificacion.enableReadOnlyEditor();
        powerComboBoxMantMatTipCalificacion.addEmptyOption();
        powerComboBoxMantMatTipCalificacion.setValidEmpty();
        powerComboBoxMantMatPromedio = powerComboBox.create('powerComboBoxMantMatPromedio', 'powerComboBoxMantMatPromedio', 'Promedio:', 1,123);
        powerComboBoxMantMatPromedio.enableReadOnlyEditor();
        powerComboBoxMantMatPromedio.setValidEmpty();
        powerComboBoxMantMatPromedio.setDataType('string');
        powerComboBoxMantMatBoletin = powerComboBox.create('powerComboBoxMantMatBoletin', 'powerComboBoxMantMatBoletin', 'Boletín:', 1, 45);
        powerComboBoxMantMatBoletin.enableReadOnlyEditor();
        powerComboBoxMantMatBoletin.setValidEmpty();
        powerComboBoxMantMatBoletin.setDataType('string');
        powerComboBoxMantMatET = powerComboBox.create('powerComboBoxMantMatET', 'powerComboBoxMantMatET', 'E.T.:', 1,25);
        powerComboBoxMantMatET.enableReadOnlyEditor();
        powerComboBoxMantMatET.setValidEmpty();
        powerComboBoxMantMatET.setDataType('string');
        gridsMantMateria = grids.create('gridsMantMateria', 20, 16);	
        imgButtonsMantMatAgregar = imgButtons.create('imgButtonsMantMatAgregar', 'Agregar', 'ok.png');
        imgButtonsMantMatModificar = imgButtons.create('imgButtonsMantMatModificar', 'Modificar', 'icono_modificar.png');
        imgButtonsMantMatModificar.setDisable();
        imgButtonsMantMatEliminar = imgButtons.create('imgButtonsMantMatEliminar', 'Eliminar', 'eliminar.jpg');
        imgButtonsMantMatEliminar.setDisable();
        imgButtonsMantMatLimpiar = imgButtons.create('imgButtonsMantMatLimpiar', 'Limpiar', 'limpiar.png');        
        imgButtonsMantMatBuscar = imgButtons.create('imgButtonsMantMatBuscar', 'Buscar', 'icono_buscar.png');        
        imgButtonsMantMatSalir = imgButtons.create('imgButtonsMantMatSalir', 'Salir', 'salir.png');
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsMantMateria_Init();
        this.gridsMantMateria_Init();
        this.createMWs();
    },
    
    limpiar: function(){
    	editsMantMatId.setValue("");
        editsMantMatDescripcion.setValue("");
        editsMantMatFeCreacion.setValue("");
        powerComboBoxMantMatCarrera.setSelectedIndex(0);        
        powerComboBoxMantMatOrg.setSelectedIndex(0);         
        powerComboBoxMantMatEstado.setSelectedIndex(0); 		
        powerComboBoxMantMatSuborganizacion.setSelectedIndex(0);
        powerComboBoxMantMatTipMateria.setSelectedIndex(0);
        powerComboBoxMantMatTipCalificacion.setSelectedIndex(0);
        gridsMantMateria.clean();
        dialogsMantMateria.setMsg("");
        editsMantMatId.readOnly(false);
	 	editsMantMatAbreviatura.setValue("");
	 	powerComboBoxMantMatPromedio.setSelectedIndex(0);
	 	powerComboBoxMantMatBoletin.setSelectedIndex(0);
	 	powerComboBoxMantMatET.setSelectedIndex(0);
        imgButtonsMantMatAgregar.setEnable();
        imgButtonsMantMatModificar.setDisable();
        imgButtonsMantMatEliminar.setDisable();
        Tool.cnnSrv('MantObject', 'getMantMateriaInit', this.windowName + '.loadDataInit()');
    },

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsMantMateria, powerComboBoxMantMatOrg, 0, 1, json('getData'));
		Tool.loadPowerComboData(dialogsMantMateria, powerComboBoxMantMatTipMateria, 0, 1, json('getMantTipoMateria'));
		Tool.loadPowerComboData(dialogsMantMateria, powerComboBoxMantMatTipCalificacion, 0, 1, json('getMantTipoCalificacion'));
		Tool.getContext(dialogsMantMateria, powerComboBoxMantMatOrg, powerComboBoxMantMatSuborganizacion, powerComboBoxMantMatCarrera, "Tool.getGridData('MantObject', 'getAsiMatAlPensumMateria', dialogsMantMateria, gridsMantMateria, false, powerComboBoxMantMatCarrera.setModeReturnGetText(2), editsMantMatId, editsMantMatId, editsMantMatDescripcion, editsMantMatDescripcion, powerComboBoxMantMatEstado, powerComboBoxMantMatEstado, powerComboBoxMantMatTipMateria, powerComboBoxMantMatTipMateria)");
    },
    
    limpiarCoreUpdate: function() {
        editsMantMatId.setValue("");
        editsMantMatDescripcion.setValue("");
        powerComboBoxMantMatTipMateria.setSelectedIndex(0);
        editsMantMatFeCreacion.setValue("");
        gridsMantMateria.clean();
        dialogsMantMateria.setMsg("");
        editsMantMatId.readOnly(false);
	 	editsMantMatAbreviatura.setValue("");
	 	powerComboBoxMantMatPromedio.setSelectedIndex(0);
	 	powerComboBoxMantMatBoletin.setSelectedIndex(0);
	 	powerComboBoxMantMatET.setSelectedIndex(0);
        imgButtonsMantMatAgregar.setEnable();
        imgButtonsMantMatModificar.setDisable();
        imgButtonsMantMatEliminar.setDisable();
        Tool.getGridData('MantObject', 'getAsiMatAlPensumMateria', dialogsMantMateria, gridsMantMateria, false, powerComboBoxMantMatCarrera.setModeReturnGetText(2), editsMantMatId, editsMantMatId, editsMantMatDescripcion, editsMantMatDescripcion, powerComboBoxMantMatEstado, powerComboBoxMantMatEstado, powerComboBoxMantMatTipMateria, powerComboBoxMantMatTipMateria);
    },

    setData: function() {
        if (gridsMantMateria.getDataCell(1) != "") {
            editsMantMatId.readOnly(true);
            editsMantMatId.setValue(gridsMantMateria.getDataCell(1));            
            editsMantMatDescripcion.setValue(gridsMantMateria.getDataCell(2));
            powerComboBoxMantMatTipCalificacion.findOption(gridsMantMateria.getDataCell(12));
            powerComboBoxMantMatEstado.findOption(gridsMantMateria.getDataCell(6));
            editsMantMatFeCreacion.setValue(gridsMantMateria.getDataCell(10));
			powerComboBoxMantMatTipMateria.findOption(gridsMantMateria.getDataCell(11));
			editsMantMatAbreviatura.setValue(gridsMantMateria.getDataCell(13));
			powerComboBoxMantMatBoletin.findOption(gridsMantMateria.getDataCell(14));
			powerComboBoxMantMatPromedio.findOption(gridsMantMateria.getDataCell(15));
			powerComboBoxMantMatET.findOption(gridsMantMateria.getDataCell(16));
            imgButtonsMantMatAgregar.setDisable();
            imgButtonsMantMatModificar.setEnable();
            imgButtonsMantMatEliminar.setEnable();
        }
    },
    
	resetElements : function(element) {
		if (element == 'org') {
	        Tool.rstPwrCmb(powerComboBoxMantMatCarrera);
	        editsMantMatId.setValue("");
	        editsMantMatDescripcion.setValue("");
	        editsMantMatFeCreacion.setValue("");
			powerComboBoxMantMatTipMateria.setSelectedIndex(0);
	        gridsMantMateria.clean();
	        dialogsMantMateria.setMsg("");
			Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsMantMateria, powerComboBoxMantMatSuborganizacion, 1, 2, powerComboBoxMantMatOrg);
		}
		else if (element == 'suborg') {
	        editsMantMatId.setValue("");
	        editsMantMatDescripcion.setValue("");
	        editsMantMatFeCreacion.setValue("");
			powerComboBoxMantMatTipMateria.setSelectedIndex(0);
	        gridsMantMateria.clean();
	        dialogsMantMateria.setMsg("");
	        Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsMantMateria, powerComboBoxMantMatCarrera, -1, 3, powerComboBoxMantMatSuborganizacion);
		}
		else if (element == 'carr') {
	        editsMantMatId.setValue("");
	        editsMantMatDescripcion.setValue("");
	        editsMantMatFeCreacion.setValue("");
			powerComboBoxMantMatTipMateria.setSelectedIndex(0);
	        gridsMantMateria.clean();
	        dialogsMantMateria.setMsg("");
			Tool.getGridData('MantObject', 'getAsiMatAlPensumMateria', dialogsMantMateria, gridsMantMateria, false, powerComboBoxMantMatCarrera.setModeReturnGetText(2), editsMantMatId, editsMantMatId, editsMantMatDescripcion, editsMantMatDescripcion, powerComboBoxMantMatEstado, powerComboBoxMantMatEstado, powerComboBoxMantMatTipMateria, powerComboBoxMantMatTipMateria);			
		}
        editsMantMatId.readOnly(false);
        imgButtonsMantMatAgregar.setEnable();
        imgButtonsMantMatModificar.setDisable();
        imgButtonsMantMatEliminar.setDisable();		
	},

	setEvents: function(){
    	gridsMantMateria.onClickCells(this.windowName+".setData()");
        imgButtonsMantMatAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
        imgButtonsMantMatModificar.onClick(this.windowName + ".coreUpdate('modificar')");
        imgButtonsMantMatEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
        imgButtonsMantMatLimpiar.onClick(this.windowName + ".limpiar()");        
        imgButtonsMantMatBuscar.onClick(this.windowName + ".buscar()");        
        imgButtonsMantMatSalir.onClick("dialogsMantMateria.close()");
		powerComboBoxMantMatOrg.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxMantMatSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		powerComboBoxMantMatCarrera.onChange(this.windowName + ".resetElements('carr')");
		editsMantMatId.onEnter(this.windowName + ".buscar()");
		editsMantMatDescripcion.onEnter(this.windowName + ".buscar()");
		powerComboBoxMantMatEstado.onEnter(this.windowName + ".buscar()");
		powerComboBoxMantMatTipMateria.onEnter(this.windowName + ".buscar()");
    },

	buscar: function(){
		if (powerComboBoxMantMatCarrera.valid(dialogsMantMateria)) {
			gridsMantMateria.clean();
			Tool.getGridData('MantObject', 'getAsiMatAlPensumMateria', dialogsMantMateria, gridsMantMateria, false, powerComboBoxMantMatCarrera.setModeReturnGetText(2), editsMantMatId, editsMantMatId, editsMantMatDescripcion, editsMantMatDescripcion, powerComboBoxMantMatEstado, powerComboBoxMantMatEstado, powerComboBoxMantMatTipMateria, powerComboBoxMantMatTipMateria);			
		}
    },

    coreUpdate: function(methodName){
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (methodName == 'eliminar') {
            if (editsMantMatId.valid(dialogsMantMateria)) {
                rlx.add('reg', editsMantMatId);
                procesar = true;
            }
        }
        else {
            if (editsMantMatId.valid(dialogsMantMateria)) 
                if (powerComboBoxMantMatEstado.valid(dialogsMantMateria))
                    if (powerComboBoxMantMatOrg.valid(dialogsMantMateria))                             
                    	if (powerComboBoxMantMatSuborganizacion.valid(dialogsMantMateria)) 
                           	if (powerComboBoxMantMatCarrera.valid(dialogsMantMateria)) 
                           		if (editsMantMatDescripcion.valid(dialogsMantMateria))
									if (powerComboBoxMantMatTipMateria.valid(dialogsMantMateria))
										if (powerComboBoxMantMatTipCalificacion.valid(dialogsMantMateria)){
											rlx.add('reg',powerComboBoxMantMatCarrera);
	                                     	rlx.add('reg',editsMantMatDescripcion);                                            
	                                     	rlx.add('reg',powerComboBoxMantMatEstado);
										 	rlx.add('reg',powerComboBoxMantMatTipMateria);
										 	rlx.add('reg',powerComboBoxMantMatTipCalificacion);
										 	rlx.add('reg',editsMantMatAbreviatura);
										 	rlx.add('reg',powerComboBoxMantMatBoletin);
										 	rlx.add('reg',powerComboBoxMantMatPromedio);
										 	rlx.add('reg',powerComboBoxMantMatET);
										 	rlx.add('reg',editsMantMatId);
	                                     	procesar = true;
	                           			}
        }
        if (procesar) {
            xmlHttpReq.addParam(xmlStructs.TYPE_PARAM_RECORDLIST, rlx.getRecordList());
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()');
        }
    }
};

