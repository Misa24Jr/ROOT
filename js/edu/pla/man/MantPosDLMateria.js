var dialogsMantPosDLMateria = new Object();
var editsMantPosDLMatDescripcion = new Object();
var editsMantPosDLMatIntervalo = new Object();
var editsMantPosDLMatDeLarga = new Object();
var gridsMantPosDLMateria = new Object();
var imgButtonsMantPosDLMatAgregar = new Object();
var imgButtonsMantPosDLMatModificar = new Object();
var imgButtonsMantPosDLMatEliminar = new Object();
var imgButtonsMantPosDLMatLimpiar = new Object();
var imgButtonsMantPosDLMatSalir = new Object(); 
var mwMantPosDLMateria = new Object();// minWindow

var MantPosDLMateria = {
    windowName: 'MantPosDLMateria',
    isCreate: false,
    mantPosDLMatId : 0,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsMantPosDLMateria.isByClean()) 
            this.limpiar();
        dialogsMantPosDLMateria.show();
    },
	
    hide: function(){
        dialogsMantPosDLMateria.hide();
    },
	
    createMWs: function(){
        mwMantPosDLMateria = desktop.addMinWindow('M.P.Materia', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantPosDLMateria.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsMantPosDLMateria_Init: function(){
    	dialogsMantPosDLMateria.setMinimizeXY(0, 0);
        dialogsMantPosDLMateria.setCenterScreen();
        dialogsMantPosDLMateria.addSpace(0, 0, 20);
        dialogsMantPosDLMateria.addLn(1, 1, 1);
		dialogsMantPosDLMateria.setHeightCell(1,1,10);
        dialogsMantPosDLMateria.addObjToDialog(editsMantPosDLMatDescripcion, 2, 1, 24);
        editsMantPosDLMatDescripcion.setSizeEdit(300);
        editsMantPosDLMatDescripcion.setMaxLength(50);
        dialogsMantPosDLMateria.addObject(editsMantPosDLMatIntervalo, 460, 37);
        editsMantPosDLMatIntervalo.setSizeEdit(48);
        editsMantPosDLMatIntervalo.setMaxLength(2);
        dialogsMantPosDLMateria.addObjToDialog(editsMantPosDLMatDeLarga, 3, 1, 24);
        editsMantPosDLMatDeLarga.setSizeEdit(440);
        editsMantPosDLMatDeLarga.setMaxLength(10);
        dialogsMantPosDLMateria.addLn(4, 1, 1);
		dialogsMantPosDLMateria.setHeightCell(4,1,10);
        dialogsMantPosDLMateria.addObjToDialog(gridsMantPosDLMateria.getObject(), 5, 1);
        dialogsMantPosDLMateria.addLn(6, 1, 1);
		dialogsMantPosDLMateria.setHeightCell(6,1,12);
        dialogsMantPosDLMateria.addObjToDialog(imgButtonsMantPosDLMatAgregar, 7, 1);
        dialogsMantPosDLMateria.addObjToDialog(imgButtonsMantPosDLMatModificar, 7, 1);
        dialogsMantPosDLMateria.addObjToDialog(imgButtonsMantPosDLMatEliminar, 7, 1);
        dialogsMantPosDLMateria.addObjToDialog(imgButtonsMantPosDLMatLimpiar, 7, 1);
        dialogsMantPosDLMateria.addObjToDialog(imgButtonsMantPosDLMatSalir, 7, 1);
        imgButtonsMantPosDLMatAgregar.setDimension(90, 22);
        imgButtonsMantPosDLMatModificar.setDimension(90, 22);
        imgButtonsMantPosDLMatEliminar.setDimension(90, 22);
        imgButtonsMantPosDLMatLimpiar.setDimension(90, 22);
        imgButtonsMantPosDLMatSalir.setDimension(90, 22);
        dialogsMantPosDLMateria.adjAllMarginObj(7, 1, 18);
        dialogsMantPosDLMateria.leftMarginObj(7, 1, 0, 29);
    },
	
    gridsMantPosDLMateria_Init: function(){
        gridsMantPosDLMateria.setFixColRow(false, true);
        gridsMantPosDLMateria.addTitleVectorX(['Id Posicion', 'Descripción', 'Posición', 'Descripción Larga']);
        gridsMantPosDLMateria.showData();
        gridsMantPosDLMateria.setReadOnlyToAll();
        gridsMantPosDLMateria.setSizeCol(1, 0);
        gridsMantPosDLMateria.setSizeCol(2, 211);
        gridsMantPosDLMateria.setSizeCol(3, 70);
        gridsMantPosDLMateria.setSizeCol(4, 300);
        gridsMantPosDLMateria.hideCol(1);
    },
    
    create: function(){
        dialogsMantPosDLMateria = dialogs.create('dialogsMantPosDLMateria', 0, 0, 626, 356, 'POSICIONES DE LA CARRERA');
		dialogsMantPosDLMateria.setAdjY(20);
        editsMantPosDLMatDescripcion = edits.create('editsMantPosDLMatDescripcion', 'editsMantPosDLMatDescripcion', 'Descripción:', 1,115, 'normal');
        editsMantPosDLMatDescripcion.setValidEmpty();
        editsMantPosDLMatIntervalo = edits.create('editsMantPosDLMatIntervalo', 'editsMantPosDLMatIntervalo', 'Posición:', 1,67, 'normal');
        editsMantPosDLMatIntervalo.setValidInteger();
        editsMantPosDLMatDeLarga = edits.create('editsMantPosDLMatDeLarga', 'editsMantPosDLMatDeLarga', 'Descripción Larga:', 1,115, 'normal');
        editsMantPosDLMatDeLarga.setValidEmpty();
        gridsMantPosDLMateria = grids.create('gridsMantPosDLMateria', 10, 4);
        imgButtonsMantPosDLMatAgregar = imgButtons.create('imgButtonsMantPosDLMatAgregar', 'Agregar', 'ok.png');
        imgButtonsMantPosDLMatModificar = imgButtons.create('imgButtonsMantPosDLMatModificar', 'Modificar', 'icono_modificar.png');
        imgButtonsMantPosDLMatModificar.setDisable();
        imgButtonsMantPosDLMatEliminar = imgButtons.create('imgButtonsMantPosDLMatEliminar', 'Eliminar', 'eliminar.jpg');
        imgButtonsMantPosDLMatEliminar.setDisable();
        imgButtonsMantPosDLMatLimpiar = imgButtons.create('imgButtonsMantPosDLMatLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsMantPosDLMatSalir = imgButtons.create('imgButtonsMantPosDLMatSalir', 'Salir', 'salir.png');
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsMantPosDLMateria_Init();
        this.gridsMantPosDLMateria_Init();
        this.createMWs();
    },
    
    setData: function(){
        if (gridsMantPosDLMateria.getDataCell(1) != "") 
        {
        	this.mantPosDLMatId = gridsMantPosDLMateria.getDataCell(1);
            editsMantPosDLMatDescripcion.setValue(gridsMantPosDLMateria.getDataCell(2));
            editsMantPosDLMatIntervalo.setValue(gridsMantPosDLMateria.getDataCell(3));
            editsMantPosDLMatDeLarga.setValue(gridsMantPosDLMateria.getDataCell(4));
            imgButtonsMantPosDLMatAgregar.setDisable();
            imgButtonsMantPosDLMatModificar.setEnable();
            imgButtonsMantPosDLMatEliminar.setEnable();
        }
    },
    
    setEvents: function(){
    	gridsMantPosDLMateria.onClickCells(this.windowName+".setData()");
        imgButtonsMantPosDLMatAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
        imgButtonsMantPosDLMatModificar.onClick(this.windowName + ".coreUpdate('modificar')");
        imgButtonsMantPosDLMatEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
        imgButtonsMantPosDLMatLimpiar.onClick('MantPosDLMateria.limpiar()');
        imgButtonsMantPosDLMatSalir.onClick('dialogsMantPosDLMateria.close()');
    },
    
    limpiar: function(){
        editsMantPosDLMatDescripcion.clear();
        editsMantPosDLMatIntervalo.clear();
        editsMantPosDLMatDeLarga.clear();
        gridsMantPosDLMateria.clean();
        dialogsMantPosDLMateria.setMsg("");
        imgButtonsMantPosDLMatAgregar.setEnable();
        imgButtonsMantPosDLMatModificar.setDisable();
        imgButtonsMantPosDLMatEliminar.setDisable();
		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantPosDLMateria, gridsMantPosDLMateria, false);
    },

    coreUpdate: function(methodName){
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (methodName == 'eliminar') {
            if (editsMantPosDLMatDescripcion.valid(dialogsMantPosDLMateria)) {
                rlx.addInt('reg', this.mantPosDLMatId);
                procesar = true;
            }
        }
        else {
        	if (editsMantPosDLMatDescripcion.valid(dialogsMantPosDLMateria)) 
        		if (editsMantPosDLMatIntervalo.valid(dialogsMantPosDLMateria)) {
        			rlx.add('reg', editsMantPosDLMatDescripcion);
                    rlx.add('reg', editsMantPosDLMatIntervalo);
                    rlx.add('reg', editsMantPosDLMatDeLarga);
		            if (methodName == 'modificar') {
                        rlx.addInt('reg', this.mantPosDLMatId);
		            }
                    procesar = true;
                }
        }
        if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
    }
}
