var dialogsMantSuborganizacion = new Object();
var powerComboBoxMantOrganizacion = new Object();
var editsMantSubDescripcion = new Object();
var gridsMantSuborganizacion = new Object();
var imgButtonsMantSubAgregar = new Object();
var imgButtonsMantSubModificar = new Object();
var imgButtonsMantSubEliminar = new Object();
var imgButtonsMantSubLimpiar = new Object();
var imgButtonsMantSubSalir = new Object();
var mwMantSuborganizacion = new Object();// minWindow

var MantSuborganizacion = {
    windowName: 'MantSuborganizacion',
    isCreate: false,
	subOrgId : 0,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsMantSuborganizacion.isByClean()) 
            this.limpiar();
        dialogsMantSuborganizacion.show();
    },
    
    hide: function(){
        dialogsMantSuborganizacion.hide();
    },
    
    createMWs: function(){
        mwMantSuborganizacion = desktop.addMinWindow('M.Sub. Organizacion', 'MantSuborganizacion.show()', 'MantSuborganizacion.hide()', 'MantSuborganizacion.hide()');
        dialogsMantSuborganizacion.setMinWindowEvent('mwMantSuborganizacion.hide()', 'mwMantSuborganizacion.disable()', 'mwMantSuborganizacion.show()');
    },
    
    dialogsMantSuborganizacion_Init: function(){
        dialogsMantSuborganizacion.setMinimizeXY(0, 0);
        dialogsMantSuborganizacion.setCenterScreen();
        dialogsMantSuborganizacion.addSpace(0, 0, 20);
        dialogsMantSuborganizacion.addLn(1, 1, 1);
		dialogsMantSuborganizacion.setHeightCell(1,1,10);
        dialogsMantSuborganizacion.addObjToDialog(powerComboBoxMantOrganizacion, 2, 1,24);
		powerComboBoxMantOrganizacion.setWidthCombo(263);
		dialogsMantSuborganizacion.adjAllMarginObj(2, 1, 30);
        dialogsMantSuborganizacion.addObjToDialog(editsMantSubDescripcion, 4, 1,24);
        editsMantSubDescripcion.setSizeEdit(487);
		editsMantSubDescripcion.setMaxLength(100); 
        dialogsMantSuborganizacion.addLn(5, 1, 1);
		dialogsMantSuborganizacion.setHeightCell(5,1,10);
        dialogsMantSuborganizacion.addObjToDialog(gridsMantSuborganizacion.getObject(), 6, 1);
        dialogsMantSuborganizacion.addLn(7, 1, 1);
		dialogsMantSuborganizacion.setHeightCell(7,1,12);
        dialogsMantSuborganizacion.addObjToDialog(imgButtonsMantSubAgregar, 8, 1);
        dialogsMantSuborganizacion.addObjToDialog(imgButtonsMantSubModificar, 8, 1);
        dialogsMantSuborganizacion.addObjToDialog(imgButtonsMantSubEliminar, 8, 1);
        dialogsMantSuborganizacion.addObjToDialog(imgButtonsMantSubLimpiar, 8, 1);
        dialogsMantSuborganizacion.addObjToDialog(imgButtonsMantSubSalir, 8, 1);
        imgButtonsMantSubAgregar.setDimension(90, 22);
        imgButtonsMantSubModificar.setDimension(90, 22);
        imgButtonsMantSubEliminar.setDimension(90, 22);
        imgButtonsMantSubLimpiar.setDimension(90, 22);
        imgButtonsMantSubSalir.setDimension(90, 22);
        dialogsMantSuborganizacion.adjAllMarginObj(8, 1, 18);
        dialogsMantSuborganizacion.leftMarginObj(8, 1, 0, 33);
    },
    
    gridsMantSuborganizacion_Init: function(){
        gridsMantSuborganizacion.setFixColRow(false, true);
        gridsMantSuborganizacion.addTitleVectorX(['Organización', 'Id', 'Descripción', 'ID Organizacion']);
        gridsMantSuborganizacion.showData();
        gridsMantSuborganizacion.setSizeCol(1, 180);
        gridsMantSuborganizacion.setSizeCol(2, 0);
        gridsMantSuborganizacion.setSizeCol(3, 406);
        gridsMantSuborganizacion.setSizeCol(4, 0);
        //gridsMantSuborganizacion.setReadOnlyToAll();
        //*************** Columna Oculta *****************
        gridsMantSuborganizacion.hideCol(2);
        gridsMantSuborganizacion.hideCol(4);
        //*************** Columna Oculta *****************
    },
    
    create: function(){
        dialogsMantSuborganizacion = dialogs.create('dialogsMantSuborganizacion', 0, 0, 631, 357, 'SUBORGANIZACIÓN');
        powerComboBoxMantOrganizacion = powerComboBox.create('powerComboBoxMantOrganizacion', 'powerComboBoxMantOrganizacion', 'Organización (*):', 1,103);
        powerComboBoxMantOrganizacion.setValidEmpty();
        powerComboBoxMantOrganizacion.addEmptyOption();
        powerComboBoxMantOrganizacion.enableReadOnlyEditor();
        editsMantSubDescripcion = edits.create('editsMantSubDescripcion', 'editsMantSubDescripcion', 'Descripción:', 1,103,'normal');
        editsMantSubDescripcion.setValidEmpty();
        gridsMantSuborganizacion = grids.create('gridsMantSuborganizacion', 10, 4);
        imgButtonsMantSubAgregar = imgButtons.create('imgButtonsMantSubAgregar', 'Agregar', 'ok.png');
        imgButtonsMantSubModificar = imgButtons.create('imgButtonsMantSubModificar', 'Modificar', 'icono_modificar.png');
        imgButtonsMantSubModificar.setDisable();
        imgButtonsMantSubEliminar = imgButtons.create('imgButtonsMantSubEliminar', 'Eliminar', 'eliminar.jpg');
        imgButtonsMantSubEliminar.setDisable();
        imgButtonsMantSubLimpiar = imgButtons.create('imgButtonsMantSubLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsMantSubSalir = imgButtons.create('imgButtonsMantSubSalir', 'Salir', 'salir.png');
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsMantSuborganizacion_Init();
        this.gridsMantSuborganizacion_Init();
        this.createMWs();
    },
    
    setData: function(){
        if (gridsMantSuborganizacion.getDataCell(1) != "") {
            powerComboBoxMantOrganizacion.findOption(gridsMantSuborganizacion.getDataCell(4));
            this.subOrgId = gridsMantSuborganizacion.getDataCell(2);
            editsMantSubDescripcion.setValue(gridsMantSuborganizacion.getDataCell(3));
            imgButtonsMantSubAgregar.setDisable();
            imgButtonsMantSubModificar.setEnable();
            imgButtonsMantSubEliminar.setEnable();
        }
    },

    resetElements : function(element) {
    	this.subOrgId = 0;
        editsMantSubDescripcion.setValue("");
        gridsMantSuborganizacion.clean();
    	Tool.getGridData('MantObject', 'getMantSuborganizacion', dialogsMantSuborganizacion, gridsMantSuborganizacion, false, powerComboBoxMantOrganizacion);
        imgButtonsMantSubAgregar.setEnable();
        imgButtonsMantSubModificar.setDisable();
        imgButtonsMantSubEliminar.setDisable();
	},
    
    setEvents: function(){
        powerComboBoxMantOrganizacion.onChange(this.windowName + ".resetElements()");
    	gridsMantSuborganizacion.onClickCells(this.windowName+".setData()");
        imgButtonsMantSubAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
        imgButtonsMantSubModificar.onClick(this.windowName + ".coreUpdate('modificar')");
        imgButtonsMantSubEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
        imgButtonsMantSubLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsMantSubSalir.onClick('dialogsMantSuborganizacion.close()');
    },
    
    limpiar: function(){
    	this.subOrgId = 0;
        editsMantSubDescripcion.setValue("");
        gridsMantSuborganizacion.clean();
        dialogsMantSuborganizacion.setMsg("");
        imgButtonsMantSubAgregar.setEnable();
        imgButtonsMantSubModificar.setDisable();
        imgButtonsMantSubEliminar.setDisable();
       	Tool.getPowerComboData("MantObject", "getMantOrganizacion", dialogsMantSuborganizacion, powerComboBoxMantOrganizacion, 0, 1);
    },
    
    limpiarCoreUpdate: function(methodName){
        if (methodName == "eliminar" && gridsMantSuborganizacion.getTotalRecord() == 1) { 
        	this.limpiar();
        }
        else {
	    	this.subOrgId = 0;
	        editsMantSubDescripcion.setValue("");
	        dialogsMantSuborganizacion.setMsg("");
	        imgButtonsMantSubAgregar.setEnable();
	        imgButtonsMantSubModificar.setDisable();
	        imgButtonsMantSubEliminar.setDisable();
	        Tool.getGridData('MantObject', 'getMantSuborganizacion', dialogsMantSuborganizacion, gridsMantSuborganizacion, false, powerComboBoxMantOrganizacion);
        }
    },
    
    coreUpdate: function(methodName){
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (methodName == 'eliminar') {
        	if (this.subOrgId != '') {
                rlx.addInt('reg', this.subOrgId);
                procesar = true;
            }
        }
        else 
            if (methodName == 'modificar') {
                if (powerComboBoxMantOrganizacion.valid(dialogsMantSuborganizacion)) 
                    if (editsMantSubDescripcion.valid(dialogsMantSuborganizacion)) {
                        rlx.add('reg', powerComboBoxMantOrganizacion);
                        rlx.add('reg', editsMantSubDescripcion);
                        rlx.addInt('reg', this.subOrgId);
                        procesar = true;
                    }
            }
            else {
                if (powerComboBoxMantOrganizacion.valid(dialogsMantSuborganizacion)) 
                    if (editsMantSubDescripcion.valid(dialogsMantSuborganizacion)) {
                        rlx.add('reg', powerComboBoxMantOrganizacion);
                        rlx.add('reg', editsMantSubDescripcion);
                        procesar = true;
                    }
            }
        if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
        }
    }
};
