var dialogsMantPeriodo = new Object();
var editsMantTipPerDesPeriodo = new Object();
var powerComboBoxMantPerNivAcademico = new Object();
var powerComboBoxMantTipPerEstado = new Object();
var calendarsMantTipPerFecInicio = new Object();
var calendarsMantTipPerFecFin = new Object();
var gridsMantPeriodo = new Object();
var imgButtonsMantPeriodoAgregar = new Object();
var imgButtonsMantPeriodoModificar = new Object();
var imgButtonsMantPeriodoEliminar = new Object();
var imgButtonsMantPeriodoLimpiar = new Object();
var imgButtonsMantPeriodoBuscar = new Object();
var imgButtonsMantPeriodoSalir = new Object();
var mwdialogsMantPeriodo = new Object();// minWindow

var MantPeriodo = {
    windowName: 'MantPeriodo',
    isCreate: false,
    hideIdPeriodo: 0,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsMantPeriodo.isByClean()) 
            this.limpiar();
        dialogsMantPeriodo.show();
    },
    hide: function(){
        dialogsMantPeriodo.hide();
    },
    createMWs: function(){
        mwdialogsMantPeriodo = desktop.addMinWindow('M.Periodo','dialogsMantPeriodo.show()','dialogsMantPeriodo.hide()','dialogsMantPeriodo.hide()');
        dialogsMantPeriodo.setMinWindowEvent('mwdialogsMantPeriodo.hide()','mwdialogsMantPeriodo.disable()','mwdialogsMantPeriodo.show()');
    },
    
    dialogsMantPeriodo_Init: function() {
    	dialogsMantPeriodo.setMinimizeXY(0, 0);
        dialogsMantPeriodo.setCenterScreen();
        dialogsMantPeriodo.addSpace(0, 0, 20);
        dialogsMantPeriodo.addLn(1, 1, 1);
		dialogsMantPeriodo.setHeightCell(1,1,10);
        dialogsMantPeriodo.addObjToDialog(powerComboBoxMantPerNivAcademico, 2, 1,24);
        dialogsMantPeriodo.addObjToDialog(powerComboBoxMantTipPerEstado, 2, 1,24);
        dialogsMantPeriodo.adjAllMarginObj(2, 1, 25);
        dialogsMantPeriodo.addObjToDialog(calendarsMantTipPerFecInicio.getEditCalendar(), 3, 1,24);
        calendarsMantTipPerFecInicio.setWidthEditCalendar(127);
        calendarsMantTipPerFecInicio.setCaption('Fecha Inicio (*):', 1,122);
        calendarsMantTipPerFecInicio.sendToFrom(100);
        dialogsMantPeriodo.addObjToDialog(calendarsMantTipPerFecFin.getEditCalendar(), 3, 1,24);
        calendarsMantTipPerFecFin.setWidthEditCalendar(127);
        calendarsMantTipPerFecFin.setCaption('Fecha Fin (*):', 1,80);
        calendarsMantTipPerFecFin.sendToFrom(100);
        dialogsMantPeriodo.adjAllMarginObj(3, 1, 25);
        dialogsMantPeriodo.addObjToDialog(editsMantTipPerDesPeriodo, 4, 1,24);
        editsMantTipPerDesPeriodo.setSizeEdit(149);
		editsMantTipPerDesPeriodo.setMaxLength(50); 
        dialogsMantPeriodo.adjAllMarginObj(4, 1, 25);
        dialogsMantPeriodo.addLn(5, 1, 1);
		dialogsMantPeriodo.setHeightCell(5,1,10);
        dialogsMantPeriodo.addObjToDialog(gridsMantPeriodo.getObject(), 6, 1);
        dialogsMantPeriodo.addLn(7, 1, 1);
		dialogsMantPeriodo.setHeightCell(7,1,12);
        dialogsMantPeriodo.addObjToDialog(imgButtonsMantPeriodoAgregar, 8, 1);
        dialogsMantPeriodo.addObjToDialog(imgButtonsMantPeriodoModificar, 8, 1);
        dialogsMantPeriodo.addObjToDialog(imgButtonsMantPeriodoEliminar, 8, 1);
        dialogsMantPeriodo.addObjToDialog(imgButtonsMantPeriodoLimpiar, 8, 1);
		dialogsMantPeriodo.addObjToDialog(imgButtonsMantPeriodoBuscar, 8, 1);
        dialogsMantPeriodo.addObjToDialog(imgButtonsMantPeriodoSalir, 8, 1);
        imgButtonsMantPeriodoAgregar.setDimension(90, 22);
        imgButtonsMantPeriodoModificar.setDimension(90, 22);
        imgButtonsMantPeriodoEliminar.setDimension(90, 22);
        imgButtonsMantPeriodoLimpiar.setDimension(90, 22);
		imgButtonsMantPeriodoBuscar.setDimension(90, 22);
        imgButtonsMantPeriodoSalir.setDimension(90, 22);
        dialogsMantPeriodo.adjAllMarginObj(8, 1, 20);
        dialogsMantPeriodo.leftMarginObj(8, 1, 0, 9);
    },
	
    gridsMantPeriodo_Init: function(){
	    gridsMantPeriodo.setFixColRow(false, true);
	    gridsMantPeriodo.addTitleVectorX(['id_nivel_academico','id_edo_periodo','Nivel Académico','id_periodo','Estado','Periodo','Fecha Inicio','Fecha Fin']);
	    gridsMantPeriodo.showData();
	    gridsMantPeriodo.setSizeCol(1, 0);   
	    gridsMantPeriodo.setSizeCol(2, 0);
	    gridsMantPeriodo.setSizeCol(3, 120);	
	    gridsMantPeriodo.setSizeCol(4, 0);   
	    gridsMantPeriodo.setSizeCol(5, 110);
	    gridsMantPeriodo.setSizeCol(6, 252);
		gridsMantPeriodo.setSizeCol(7, 90);
		gridsMantPeriodo.setSizeCol(8, 90);
		gridsMantPeriodo.hideCol(1);
	    gridsMantPeriodo.hideCol(2);
	    gridsMantPeriodo.hideCol(4);
    },
    
    create: function(){
        dialogsMantPeriodo = dialogs.create('dialogsMantPeriodo', 0, 0, 709, 381, 'MANTENIMIENTO DE PERIODO');
        powerComboBoxMantPerNivAcademico = powerComboBox.create('powerComboBoxMantPerNivAcademico','powerComboBoxMantPerNivAcademico','Nivel Académico (*):', 1,122);
        powerComboBoxMantPerNivAcademico.setValidEmpty();
        powerComboBoxMantPerNivAcademico.enableReadOnlyEditor();
        powerComboBoxMantPerNivAcademico.addEmptyOption();
        powerComboBoxMantPerNivAcademico.setFieldFind(true);
        powerComboBoxMantTipPerEstado = powerComboBox.create('powerComboBoxMantTipPerEstado', 'powerComboBoxMantTipPerEstado', 'Estado (*):', 1,80);
        powerComboBoxMantTipPerEstado.setValidEmpty();
        powerComboBoxMantTipPerEstado.enableReadOnlyEditor();
        powerComboBoxMantTipPerEstado.addEmptyOption();
        powerComboBoxMantTipPerEstado.setFieldFind(true);
        editsMantTipPerDesPeriodo = edits.create('editsMantTipPerDesPeriodo', 'editsMantTipPerDesPeriodo', 'Periodo (*):', 1,122);
        editsMantTipPerDesPeriodo.setValidEmpty();
        editsMantTipPerDesPeriodo.setFieldFind(true);
        calendarsMantTipPerFecInicio = calendars.create('calendarsMantTipPerFecInicio');
        calendarsMantTipPerFecInicio.setValidEmpty();
        calendarsMantTipPerFecInicio.setDataType('string');
        calendarsMantTipPerFecInicio.setFieldFind(true);
        calendarsMantTipPerFecFin = calendars.create('calendarsMantTipPerFecFin');
        calendarsMantTipPerFecFin.setValidEmpty();
        calendarsMantTipPerFecFin.setDataType('string');
        calendarsMantTipPerFecFin.setFieldFind(true);
        calendarsMantTipPerFecInicio.setValidGreaterThan(calendarsMantTipPerFecFin);
        gridsMantPeriodo = grids.create('gridsMantPeriodo ',10,8);
        imgButtonsMantPeriodoAgregar = imgButtons.create('imgButtonsMantPeriodoAgregar', 'Agregar', 'ok.png');
        imgButtonsMantPeriodoModificar = imgButtons.create('imgButtonsMantPeriodoModificar', 'Modificar', 'icono_modificar.png');
        imgButtonsMantPeriodoModificar.setDisable();
        imgButtonsMantPeriodoEliminar = imgButtons.create('imgButtonsMantPeriodoEliminar', 'Eliminar', 'eliminar.png');
        imgButtonsMantPeriodoEliminar.setDisable();
        imgButtonsMantPeriodoLimpiar = imgButtons.create('imgButtonsMantPeriodoLimpiar', 'Limpiar', 'limpiar.png');
		imgButtonsMantPeriodoBuscar = imgButtons.create('imgButtonsMantPeriodoBuscar', 'Buscar', 'icono_buscar.png');
        imgButtonsMantPeriodoSalir = imgButtons.create('imgButtonsMantPeriodoSalir', 'Salir', 'salir.png');
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsMantPeriodo_Init();
        this.gridsMantPeriodo_Init();
        this.createMWs();
    },
    
    limpiar: function(){
        powerComboBoxMantPerNivAcademico.setSelectedIndex(0);
        powerComboBoxMantTipPerEstado.setSelectedIndex(0);
        editsMantTipPerDesPeriodo.setValue("");
        calendarsMantTipPerFecInicio.clear();
        calendarsMantTipPerFecFin.clear();
        gridsMantPeriodo.clean();
        dialogsMantPeriodo.setMsg("");
        imgButtonsMantPeriodoAgregar.setEnable();
        imgButtonsMantPeriodoModificar.setDisable();
        imgButtonsMantPeriodoEliminar.setDisable();
		Tool.cnnSrv('MantObject', 'getMantPeriodoInit', this.windowName + '.loadInit()');
    },

	loadInit: function(){
		Tool.loadPowerComboData(dialogsMantPeriodo, powerComboBoxMantPerNivAcademico, 0, 1, json('getMantNivAcademico'));
		Tool.loadPowerComboData(dialogsMantPeriodo, powerComboBoxMantTipPerEstado, 0, 1, json('getMantEstPeriodo'));
		powerComboBoxMantPerNivAcademico.setSelectedIndex(1);
    },
    
    setData: function(){
        if (gridsMantPeriodo.getDataCell(4) != "") {
            powerComboBoxMantPerNivAcademico.findOption(gridsMantPeriodo.getDataCell(1));
            powerComboBoxMantTipPerEstado.findOption(gridsMantPeriodo.getDataCell(2));
            editsMantTipPerDesPeriodo.setValue(gridsMantPeriodo.getDataCell(6));
            calendarsMantTipPerFecInicio.setFechaToEdit(gridsMantPeriodo.getDataCell(7));
            calendarsMantTipPerFecFin.setFechaToEdit(gridsMantPeriodo.getDataCell(8));
            this.hideIdPeriodo = gridsMantPeriodo.getDataCell(4);
            imgButtonsMantPeriodoAgregar.setDisable();
            imgButtonsMantPeriodoModificar.setEnable();
            imgButtonsMantPeriodoEliminar.setEnable();
        }
    },
    
    setEvents: function(){
    	editsMantTipPerDesPeriodo.onEnter(this.windowName + ".buscar()");
    	gridsMantPeriodo.onClickCells(this.windowName + ".setData()");
        imgButtonsMantPeriodoAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
        imgButtonsMantPeriodoModificar.onClick(this.windowName + ".coreUpdate('modificar')");
        imgButtonsMantPeriodoEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
        imgButtonsMantPeriodoLimpiar.onClick(this.windowName + ".limpiar()");
		imgButtonsMantPeriodoBuscar.onClick(this.windowName + ".buscar()");
        imgButtonsMantPeriodoSalir.onClick('dialogsMantPeriodo.close()');
    },

    buscar: function(){
    	gridsMantPeriodo.clean();
		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantPeriodo, gridsMantPeriodo, false, powerComboBoxMantTipPerEstado, powerComboBoxMantTipPerEstado, powerComboBoxMantPerNivAcademico, powerComboBoxMantPerNivAcademico, editsMantTipPerDesPeriodo, editsMantTipPerDesPeriodo, calendarsMantTipPerFecInicio, calendarsMantTipPerFecInicio, calendarsMantTipPerFecFin, calendarsMantTipPerFecFin);
    },
    
    limpiarCoreUpdate: function(methodName) {
    	powerComboBoxMantTipPerEstado.setSelectedIndex(0);
        calendarsMantTipPerFecInicio.clear();
        calendarsMantTipPerFecFin.clear();
        editsMantTipPerDesPeriodo.setValue("");
        dialogsMantPeriodo.setMsg("");
        imgButtonsMantPeriodoAgregar.setEnable();
        imgButtonsMantPeriodoModificar.setDisable();
        imgButtonsMantPeriodoEliminar.setDisable();
        if (methodName == "eliminar" && gridsMantPeriodo.getTotalRecord() == 1) { 
        	gridsMantPeriodo.clean();
        	dlgWait.hide();
        }
        else
            this.buscar();
    },

    coreUpdate: function(methodName){
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (methodName == 'eliminar') {
            if (powerComboBoxMantPerNivAcademico.valid(dialogsMantPeriodo)) {
                rlx.addInt('reg', this.hideIdPeriodo);
                procesar = true;
            }
        }
        else {
			if (powerComboBoxMantPerNivAcademico.valid(dialogsMantPeriodo)) 
                if (powerComboBoxMantTipPerEstado.valid(dialogsMantPeriodo)) 
                    if (editsMantTipPerDesPeriodo.valid(dialogsMantPeriodo)) 
                        if (calendarsMantTipPerFecInicio.valid(dialogsMantPeriodo)) 
                            if (calendarsMantTipPerFecFin.valid(dialogsMantPeriodo)) {
                                rlx.add('reg', powerComboBoxMantTipPerEstado);
                                rlx.add('reg', editsMantTipPerDesPeriodo);
                                rlx.add('reg', calendarsMantTipPerFecInicio);
                                rlx.add('reg', calendarsMantTipPerFecFin);
                                rlx.add('reg', powerComboBoxMantPerNivAcademico);
                            	if (methodName == 'modificar') 
                                    rlx.addInt('reg', this.hideIdPeriodo);
                            	procesar = true;
                            }
        }
        if (procesar) { 
			Tool.cnnSrv("MantObject", methodName + this.windowName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
        }
    }
};
