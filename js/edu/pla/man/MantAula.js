var dialogsMantAula = new Object();
var editsMantAulCodAula = new Object();
var powerComboBoxMantAulBloque = new Object();
var editsMantAulCapAula = new Object();
var powerComboBoxMantAulTipAula = new Object();
var editsMantAulDescripcion = new Object();
var gridsMantAulCodBloCapTipAula = new Object();
var imgButtonsMantAulAgregar = new Object();
var imgButtonsMantAulModificar = new Object();
var imgButtonsMantAulEliminar = new Object();
var imgButtonsMantAulLimpiar = new Object();
var imgButtonsMantAulSalir = new Object();
var mwMantAula = new Object();// minWindow

var MantAula = {
    windowName: 'MantAula',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsMantAula.isByClean()) 
            this.limpiar();
        dialogsMantAula.show();
    },
    hide: function(){
        dialogsMantAula.hide();
    },
    createMWs: function(){
        mwMantAula = desktop.addMinWindow('M.Aula', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantAula.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    dialogsMantAula_Init: function(){
        dialogsMantAula.setMinimizeXY(0, 0);
        dialogsMantAula.setCenterScreen();
        dialogsMantAula.addSpace(0, 0, 20);
        dialogsMantAula.addLn(1, 1, 1);
		dialogsMantAula.setHeightCell(1,1,10);  
		dialogsMantAula.addObjToDialog(powerComboBoxMantAulBloque, 2, 1,24);
        dialogsMantAula.adjAllMarginObj(2, 1, 40);
        dialogsMantAula.addObjToDialog(powerComboBoxMantAulTipAula, 2, 1,24);
        editsMantAulCodAula.setSizeEdit(149);
		editsMantAulCodAula.setMaxLength(12); 
		dialogsMantAula.adjAllMarginObj(2, 1, 30);
        dialogsMantAula.addObjToDialog(editsMantAulCodAula, 3, 1,24);
        dialogsMantAula.addObjToDialog(editsMantAulCapAula, 3, 1,24);
        editsMantAulCapAula.setSizeEdit(149);
		dialogsMantAula.adjAllMarginObj(3, 1, 30);
        dialogsMantAula.addObjToDialog(editsMantAulDescripcion, 4, 1,24);
        editsMantAulDescripcion.setSizeEdit(446);
		editsMantAulDescripcion.setMaxLength(70); 
        dialogsMantAula.addLn(5, 1, 1);
		dialogsMantAula.setHeightCell(5,1,10);  
        dialogsMantAula.addObjToDialog(gridsMantAulCodBloCapTipAula.getObject(), 6, 1);
        dialogsMantAula.addLn(7, 1, 1);
		dialogsMantAula.setHeightCell(7,1,9);  
        dialogsMantAula.addObjToDialog(imgButtonsMantAulAgregar, 8, 1);
        dialogsMantAula.addObjToDialog(imgButtonsMantAulModificar, 8, 1);
        dialogsMantAula.addObjToDialog(imgButtonsMantAulEliminar, 8, 1);
        dialogsMantAula.addObjToDialog(imgButtonsMantAulLimpiar, 8, 1);
        dialogsMantAula.addObjToDialog(imgButtonsMantAulSalir, 8, 1);
        imgButtonsMantAulAgregar.setDimension(90, 22);
        imgButtonsMantAulModificar.setDimension(90, 22);
        imgButtonsMantAulEliminar.setDimension(90, 22);
        imgButtonsMantAulLimpiar.setDimension(90, 22);
        imgButtonsMantAulSalir.setDimension(90, 22);
        dialogsMantAula.adjAllMarginObj(8, 1, 20);
        dialogsMantAula.leftMarginObj(8, 1, 0, 68);
    },
    
    gridsMantAulCodBloCapTipAula_Init: function(){
        gridsMantAulCodBloCapTipAula.setFixColRow(false, true);
        gridsMantAulCodBloCapTipAula.addTitleVectorX(['Bloque', 'Cod. Aula', 'Cap. Maxima', 'idTipoAula', 'Tipo de Aula', 'Descripción']);
        gridsMantAulCodBloCapTipAula.showData();
	  	gridsMantAulCodBloCapTipAula.setReadOnlyToAll();
	  	gridsMantAulCodBloCapTipAula.wheelEnable();
	  	gridsMantAulCodBloCapTipAula.sortEnable();
        gridsMantAulCodBloCapTipAula.setSizeCol(1, 80);
        gridsMantAulCodBloCapTipAula.setSizeCol(2, 80);
        gridsMantAulCodBloCapTipAula.setSizeCol(3, 80);
        gridsMantAulCodBloCapTipAula.setSizeCol(4, 0);
        gridsMantAulCodBloCapTipAula.setSizeCol(5, 130);
        gridsMantAulCodBloCapTipAula.setSizeCol(6, 300);
        //*************** Columna Oculta *****************
        gridsMantAulCodBloCapTipAula.hideCol(4);
        //*************** Columna Oculta *****************
    },
    
    create: function(){
        dialogsMantAula = dialogs.create('dialogsMantAula', 0, 0, 717, 566, 'MANTENIMIENTO DE AULA');
		dialogsMantAula.setAdjY(20);
        editsMantAulCodAula = edits.create('editsMantAulCodAula', 'MantAulCodAula', 'Código de Aula:', 1,94, 'normal');
        editsMantAulCodAula.setValidEmpty();
        powerComboBoxMantAulBloque = powerComboBox.create('powerComboBoxMantAulBloque', 'powerComboBoxMantAulBloque', 'Bloque (*):', 1,94);
        powerComboBoxMantAulBloque.setValidEmpty();
        powerComboBoxMantAulBloque.addEmptyOption();
        powerComboBoxMantAulBloque.enableReadOnlyEditor();
        powerComboBoxMantAulBloque.setDataType('string');
        powerComboBoxMantAulBloque.setFieldFind(true);
        editsMantAulCapAula = edits.create('editsMantAulCapAula', 'MantAulCapAula', 'Capacidad del Aula: ', 1,117, 'normal');
        editsMantAulCapAula.setValidInteger();
        powerComboBoxMantAulTipAula = powerComboBox.create('powerComboBoxMantAulTipAula', 'powerComboBoxMantAulTipAula', 'Tipo de Aula (*):', 1,117);
        powerComboBoxMantAulTipAula.setValidEmpty();
        powerComboBoxMantAulTipAula.addEmptyOption();
        powerComboBoxMantAulTipAula.enableReadOnlyEditor();
        powerComboBoxMantAulTipAula.setFieldFind(true);
        editsMantAulDescripcion = edits.create('editsMantAulDescripcion', 'MantAulDescripcion', 'Descripción:', 1,94, 'normal');
        editsMantAulDescripcion.setValidEmpty();
        gridsMantAulCodBloCapTipAula = grids.create('gridsMantAulCodBloCapTipAula', 20, 6);
        imgButtonsMantAulAgregar = imgButtons.create("imgButtonsMantAulAgregar", 'Agregar', 'ok.png');
        imgButtonsMantAulModificar = imgButtons.create("imgButtonsMantAulModificar", 'Modificar', 'icono_modificar.png');
        imgButtonsMantAulModificar.setDisable();
        imgButtonsMantAulEliminar = imgButtons.create("imgButtonsMantAulEliminar", 'Eliminar', 'eliminar.png');
        imgButtonsMantAulEliminar.setDisable();
        imgButtonsMantAulLimpiar = imgButtons.create("imgButtonsMantAulLimpiar",'Limpiar','limpiar.png');
        imgButtonsMantAulSalir = imgButtons.create("imgButtonsMantAulSalir", 'Salir', 'salir.png');
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsMantAula_Init();
        this.gridsMantAulCodBloCapTipAula_Init();
        this.createMWs();
    },
    
    setData: function(){
        if (gridsMantAulCodBloCapTipAula.getDataCell(1) != "") {
            editsMantAulCodAula.setValue(gridsMantAulCodBloCapTipAula.getDataCell(2));
            editsMantAulCapAula.setValue(gridsMantAulCodBloCapTipAula.getDataCell(3));
            editsMantAulDescripcion.setValue(gridsMantAulCodBloCapTipAula.getDataCell(6));
            powerComboBoxMantAulBloque.findOption(gridsMantAulCodBloCapTipAula.getDataCell(1));
            powerComboBoxMantAulTipAula.findOption(gridsMantAulCodBloCapTipAula.getDataCell(4));
            editsMantAulCodAula.readOnly(true);
            imgButtonsMantAulAgregar.setDisable();
            imgButtonsMantAulModificar.setEnable();
            imgButtonsMantAulEliminar.setEnable();
        }
        
    },
    
    setEvents: function(){
    	powerComboBoxMantAulBloque.onChange("Tool.getGridData('MantObject', 'getMantAula', dialogsMantAula, gridsMantAulCodBloCapTipAula, false, powerComboBoxMantAulBloque, powerComboBoxMantAulBloque, powerComboBoxMantAulTipAula, powerComboBoxMantAulTipAula)");
    	powerComboBoxMantAulTipAula.onChange("Tool.getGridData('MantObject', 'getMantAula', dialogsMantAula, gridsMantAulCodBloCapTipAula, false, powerComboBoxMantAulBloque, powerComboBoxMantAulBloque, powerComboBoxMantAulTipAula, powerComboBoxMantAulTipAula)");
        gridsMantAulCodBloCapTipAula.onClickCells(this.windowName + ".setData()");
        imgButtonsMantAulAgregar.onClick("MantAula.coreUpdate('agregar')");
        imgButtonsMantAulModificar.onClick("MantAula.coreUpdate('modificar')");
        imgButtonsMantAulEliminar.onClick("MantAula.coreUpdate('eliminar')");
        imgButtonsMantAulLimpiar.onClick("MantAula.limpiar()");
        imgButtonsMantAulSalir.onClick('dialogsMantAula.close()');
    },
    
    limpiarCoreUpdate: function(){
		var rlx = xmlStructs.createRecordList("rlx");

		editsMantAulCodAula.readOnly(false);
        editsMantAulCodAula.setValue("");
        //editsMantAulDescripcion.setValue("");
        gridsMantAulCodBloCapTipAula.clean();
        dialogsMantAula.setMsg("");
        imgButtonsMantAulAgregar.setEnable();
        imgButtonsMantAulModificar.setDisable();
        imgButtonsMantAulEliminar.setDisable();

        rlx.add('reg', powerComboBoxMantAulBloque);
		rlx.add('reg', powerComboBoxMantAulBloque);
		rlx.add('reg', powerComboBoxMantAulTipAula);
		rlx.add('reg', powerComboBoxMantAulTipAula);
		Tool.cnnSrv('MantObject', 'getMantAulaInit', this.windowName + '.loadInitCoreUpdate()', rlx);
    },

	loadInitCoreUpdate: function(){
		Tool.loadGridData(dialogsMantAula, gridsMantAulCodBloCapTipAula, false, json('getMantAula'));
    },

    limpiar: function(){
		var rlx = xmlStructs.createRecordList("rlx");

		editsMantAulCodAula.setValue("");
        editsMantAulCapAula.setValue("");
        editsMantAulDescripcion.setValue("");
        powerComboBoxMantAulBloque.setSelectedIndex(0);
        powerComboBoxMantAulTipAula.setSelectedIndex(0);
        gridsMantAulCodBloCapTipAula.clean();
        dialogsMantAula.setMsg("");
        editsMantAulCodAula.readOnly(false);
        imgButtonsMantAulAgregar.setEnable();
        imgButtonsMantAulModificar.setDisable();
        imgButtonsMantAulEliminar.setDisable();
        
		rlx.add('reg', powerComboBoxMantAulBloque);
		rlx.add('reg', powerComboBoxMantAulBloque);
		rlx.add('reg', powerComboBoxMantAulTipAula);
		rlx.add('reg', powerComboBoxMantAulTipAula);
		Tool.cnnSrv('MantObject', 'getMantAulaInit', this.windowName + '.loadInit()', rlx);
    },

	loadInit: function(){
		Tool.loadPowerComboData(dialogsMantAula, powerComboBoxMantAulBloque, 0, 1, json('getMantBloque'));
		Tool.loadPowerComboData(dialogsMantAula, powerComboBoxMantAulTipAula, 0, 1, json('getMantTipAula'));
		Tool.loadGridData(dialogsMantAula, gridsMantAulCodBloCapTipAula, false, json('getMantAula'));
    },
    
    coreUpdate: function(methodName){
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (methodName == 'eliminar') {
            if (editsMantAulCodAula.valid(dialogsMantAula)) {
                rlx.add('reg', editsMantAulCodAula);
                procesar = true;
            }
        }
        else {
            if (editsMantAulCodAula.valid(dialogsMantAula)) 
                if (powerComboBoxMantAulBloque.valid(dialogsMantAula)) 
                    if (editsMantAulCapAula.valid(dialogsMantAula)) 
                        if (powerComboBoxMantAulTipAula.valid(dialogsMantAula)) 
                            if (editsMantAulDescripcion.valid(dialogsMantAula)) {
                                rlx.add('reg', editsMantAulDescripcion);
                                rlx.add('reg', powerComboBoxMantAulTipAula);
                                rlx.add('reg', editsMantAulCapAula);
                                rlx.add('reg', powerComboBoxMantAulBloque);
                                rlx.add('reg', editsMantAulCodAula);
                                procesar = true;
                            }
        }
        if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()', rlx);
        }
    }
};