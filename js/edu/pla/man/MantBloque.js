var dialogsMantBloque = new Object();
var editsMantBloqueCodBloque = new Object();
var editsMantBloqueDescBloque = new Object();
var editsMantBloqueDescUbicacion = new Object();
var gridsMantBloqueCodDescDescEst = new Object();
var imgButtonsMantBloqueAgregar = new Object();
var imgButtonsMantBloqueModificar = new Object();
var imgButtonsMantBloqueEliminar = new Object();
var imgButtonsMantBloqueLimpiar = new Object();
var imgButtonsMantBloqueSalir = new Object();
var mwMantBloque = new Object();// minWindow
var MantBloque = {
    windowName: 'MantBloque',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsMantBloque.isByClean()) 
            this.limpiar();
        dialogsMantBloque.show();
    },
    hide: function(){
        dialogsMantBloque.hide();
    },
    createMWs: function(){
        mwMantBloque = desktop.addMinWindow('M.Bloque', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantBloque.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsMantBloque_Init: function(){
        dialogsMantBloque.setMinimizeXY(0, 0);
        dialogsMantBloque.setCenterScreen();
        dialogsMantBloque.addSpace(0, 0, 20);
        dialogsMantBloque.addLn(1, 1, 1);
		dialogsMantBloque.setHeightCell(1,1,10);  
        dialogsMantBloque.addObjToDialog(editsMantBloqueCodBloque, 2, 1,24);
        editsMantBloqueCodBloque.setSizeEdit(80);
        dialogsMantBloque.addObjToDialog(editsMantBloqueDescBloque, 3, 1,24);
        editsMantBloqueDescBloque.setSizeEdit(300);
		editsMantBloqueDescBloque.setMaxLength(50); 
        dialogsMantBloque.addObjToDialog(editsMantBloqueDescUbicacion, 4, 1,24);
        editsMantBloqueDescUbicacion.setSizeEdit(300);
		editsMantBloqueDescUbicacion.setMaxLength(50); 
        dialogsMantBloque.addLn(6, 1, 1);
		dialogsMantBloque.setHeightCell(6,1,10);  
        dialogsMantBloque.addObjToDialog(gridsMantBloqueCodDescDescEst.getObject(), 7, 1);
        dialogsMantBloque.addLn(8, 1, 1);
		dialogsMantBloque.setHeightCell(8,1,12);  
        dialogsMantBloque.addObjToDialog(imgButtonsMantBloqueAgregar, 9, 1);
        dialogsMantBloque.addObjToDialog(imgButtonsMantBloqueModificar, 9, 1);
        dialogsMantBloque.addObjToDialog(imgButtonsMantBloqueEliminar, 9, 1);
        dialogsMantBloque.addObjToDialog(imgButtonsMantBloqueLimpiar, 9, 1);
        dialogsMantBloque.addObjToDialog(imgButtonsMantBloqueSalir, 9, 1);
        imgButtonsMantBloqueAgregar.setDimension(90, 22);
        imgButtonsMantBloqueModificar.setDimension(90, 22);
        imgButtonsMantBloqueEliminar.setDimension(90, 22);
        imgButtonsMantBloqueLimpiar.setDimension(90, 22);
        imgButtonsMantBloqueSalir.setDimension(90, 22);
        dialogsMantBloque.adjAllMarginObj(9, 1, 20);
        dialogsMantBloque.leftMarginObj(9, 1, 0, 39);
    },
    gridsMantBloqueCodDescDescEst_Init: function(){
        gridsMantBloqueCodDescDescEst.setFixColRow(false, true);
        gridsMantBloqueCodDescDescEst.addTitleVectorX(['Código', 'Descripción de Bloque', 'Descripción de Ubicación']);
        gridsMantBloqueCodDescDescEst.showData();
        gridsMantBloqueCodDescDescEst.setSizeCol(1, 100);
        gridsMantBloqueCodDescDescEst.setSizeCol(2, 220);
        gridsMantBloqueCodDescDescEst.setSizeCol(3, 290);
    },
    
    create: function(){
        dialogsMantBloque = dialogs.create('dialogsMantBloque', 0, 0, 655, 380, 'MANTENIMIENTO DE BLOQUE');
		dialogsMantBloque.setAdjY(20);
        editsMantBloqueCodBloque = edits.create('editsMantBloqueCodBloque', 'editsMantBloqueCodBloque', 'Código de Bloque:', 3,160, 'normal');
        editsMantBloqueCodBloque.setValidEmpty();
        editsMantBloqueDescBloque = edits.create('editsMantBloqueDescBloque', 'editsMantBloqueDescBloque', 'Descripción de Bloque:', 3,160, 'normal');
        editsMantBloqueDescBloque.setValidEmpty();
        editsMantBloqueDescUbicacion = edits.create('editsMantBloqueDescUbicacion', 'editsMantBloqueDescUbicacion', 'Descripción de Ubicación:', 3,160, 'normal');
        editsMantBloqueDescUbicacion.setValidEmpty();
        gridsMantBloqueCodDescDescEst = grids.create('gridsMantBloqueCodDescDescEst', 10, 3);
        imgButtonsMantBloqueAgregar = imgButtons.create('imgButtonsMantBloqueAgregar', 'Agregar', 'ok.png');
        imgButtonsMantBloqueModificar = imgButtons.create('imgButtonsMantBloqueModificar', 'Modificar', 'icono_modificar.png');
        imgButtonsMantBloqueModificar.setDisable();
        imgButtonsMantBloqueEliminar = imgButtons.create('imgButtonsMantBloqueEliminar', 'Eliminar', 'eliminar.png');
        imgButtonsMantBloqueEliminar.setDisable();
        imgButtonsMantBloqueLimpiar = imgButtons.create('imgButtonsMantBloqueLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsMantBloqueSalir = imgButtons.create('imgButtonsMantBloqueSalir', 'Salir', 'salir.png');
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsMantBloque_Init();
        this.gridsMantBloqueCodDescDescEst_Init();
        this.createMWs();
    },
    
    limpiar: function(){
        editsMantBloqueCodBloque.setValue("");
        editsMantBloqueDescBloque.setValue("");
        editsMantBloqueDescUbicacion.setValue("");
        gridsMantBloqueCodDescDescEst.clean();
        dialogsMantBloque.setMsg("");
        editsMantBloqueCodBloque.readOnly(false);
        imgButtonsMantBloqueAgregar.setEnable();
        imgButtonsMantBloqueModificar.setDisable();
        imgButtonsMantBloqueEliminar.setDisable();
        Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantBloque, gridsMantBloqueCodDescDescEst, false);
    },
    
    setData: function(){
        if (gridsMantBloqueCodDescDescEst.getDataCell(1) != "") {
            editsMantBloqueCodBloque.setValue(gridsMantBloqueCodDescDescEst.getDataCell(1));
            editsMantBloqueDescBloque.setValue(gridsMantBloqueCodDescDescEst.getDataCell(2));
            editsMantBloqueDescUbicacion.setValue(gridsMantBloqueCodDescDescEst.getDataCell(3));            
            editsMantBloqueCodBloque.readOnly(true);
            imgButtonsMantBloqueAgregar.setDisable();
            imgButtonsMantBloqueModificar.setEnable();
            imgButtonsMantBloqueEliminar.setEnable();
        }
    },
    
    setEvents: function(){
    	gridsMantBloqueCodDescDescEst.onClickCells(this.windowName+".setData()");
        imgButtonsMantBloqueAgregar.onClick("MantBloque.coreUpdate('agregar')");
        imgButtonsMantBloqueModificar.onClick("MantBloque.coreUpdate('modificar')");
        imgButtonsMantBloqueEliminar.onClick("MantBloque.coreUpdate('eliminar')");
        imgButtonsMantBloqueLimpiar.onClick('MantBloque.limpiar()');
        imgButtonsMantBloqueSalir.onClick('dialogsMantBloque.close()');
    },
    
    coreUpdate: function(methodName){
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (methodName == 'eliminar') {
            if (editsMantBloqueCodBloque.valid(dialogsMantBloque)) {
                rlx.add('reg', editsMantBloqueCodBloque);
                procesar = true;
            }
        }
        else {
            if (editsMantBloqueCodBloque.valid(dialogsMantBloque)) 
                if (editsMantBloqueDescBloque.valid(dialogsMantBloque)) 
                    if (editsMantBloqueDescUbicacion.valid(dialogsMantBloque)) {
                        rlx.add('reg', editsMantBloqueDescBloque);
                        rlx.add('reg', editsMantBloqueDescUbicacion);
                        rlx.add('reg', editsMantBloqueCodBloque);
                        procesar = true;
                    }
        }
        if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
    }
};
