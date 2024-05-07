var dialogsMantMenPredefinido = new Object();
var editsMantMenPreTitulo = new Object();
var memoMantMenPredefinido = new Object();
var gridsMantMenPredefinido = new Object();
var powerComboBoxMantPreEstado = new Object();
var imgButtonsMantMenPreAgregar = new Object();
var imgButtonsMantMenPreModificar = new Object();
var imgButtonsMantMenPreEliminar = new Object();
var imgButtonsMantMenPreLimpiar = new Object();
var imgButtonsMantMenPreSalir = new Object();
var mwMantEstCurso = new Object();// minWindow

var MantMenPredefinido = {
    windowName: 'MantMenPredefinido',
    isCreate: false,
    idMenPrede : 0,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsMantMenPredefinido.isByClean()) 
            this.limpiar();
        dialogsMantMenPredefinido.show();
    },
    hide: function(){
        dialogsMantMenPredefinido.hide();
    },
    createMWs: function(){
        mwMantMenPredefinido = desktop.addMinWindow('M.M.Predefinido', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantMenPredefinido.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    dialogsMantMenPredefinido_Init: function(){
        dialogsMantMenPredefinido.setMinimizeXY(0, 0);
        dialogsMantMenPredefinido.setCenterScreen();
        dialogsMantMenPredefinido.addSpace(0, 0, 20);
        dialogsMantMenPredefinido.addLn(1, 1, 1);
		dialogsMantMenPredefinido.setHeightCell(1,1,10);
		dialogsMantMenPredefinido.addObjToDialog(powerComboBoxMantPreEstado, 3, 1,24);
        powerComboBoxMantPreEstado.addOptionAndSimpleValue(null, 'ACTIVO', 'ACTIVO');
        powerComboBoxMantPreEstado.addOptionAndSimpleValue(null, 'INACTIVO', 'INACTIVO');
		dialogsMantMenPredefinido.addObjToDialog(editsMantMenPreTitulo, 4, 1,24);
        editsMantMenPreTitulo.setSizeEdit(605);
		dialogsMantMenPredefinido.addLn(5, 1, 1);
		dialogsMantMenPredefinido.setHeightCell(5,1,85);
		dialogsMantMenPredefinido.addObject(memoMantMenPredefinido, 20,86);
        memoMantMenPredefinido.vAlignCaption('middle');
        memoMantMenPredefinido.setDimension(603, 80);
        dialogsMantMenPredefinido.addLn(7, 1, 1);
		dialogsMantMenPredefinido.setHeightCell(7,1,10);
		dialogsMantMenPredefinido.addObjToDialog(gridsMantMenPredefinido.getObject(), 8, 1);
        dialogsMantMenPredefinido.addLn(9, 1, 1);
		dialogsMantMenPredefinido.setHeightCell(9,1,10);
        dialogsMantMenPredefinido.addObjToDialog(imgButtonsMantMenPreAgregar, 10, 1);
        dialogsMantMenPredefinido.addObjToDialog(imgButtonsMantMenPreModificar, 10, 1);
        dialogsMantMenPredefinido.addObjToDialog(imgButtonsMantMenPreEliminar, 10, 1);
        dialogsMantMenPredefinido.addObjToDialog(imgButtonsMantMenPreLimpiar, 10, 1);
        dialogsMantMenPredefinido.addObjToDialog(imgButtonsMantMenPreSalir, 10, 1);
        imgButtonsMantMenPreAgregar.setDimension(90, 22);
        imgButtonsMantMenPreModificar.setDimension(90, 22);
        imgButtonsMantMenPreModificar.setDisable();
        imgButtonsMantMenPreEliminar.setDimension(90, 22);
        imgButtonsMantMenPreEliminar.setDisable();
        imgButtonsMantMenPreLimpiar.setDimension(90, 22);
        imgButtonsMantMenPreSalir.setDimension(90, 22);
        dialogsMantMenPredefinido.adjAllMarginObj(10, 1, 20);
        dialogsMantMenPredefinido.leftMarginObj(10, 1, 0, 75);
    },
	
    gridsMantMenPredefinido_Init: function(){
        gridsMantMenPredefinido.setFixColRow(false, true);
        gridsMantMenPredefinido.addTitleVectorX(['Código', 'Titulo', 'Descripcion', 'Estado']);
        gridsMantMenPredefinido.showData();
        gridsMantMenPredefinido.setSizeCol(1, 0);
        gridsMantMenPredefinido.setSizeCol(2, 613);
        gridsMantMenPredefinido.setSizeCol(3, 0);
        gridsMantMenPredefinido.setSizeCol(4, 71);
        gridsMantMenPredefinido.hideCol(1);
        gridsMantMenPredefinido.hideCol(3);
    },
    
    create: function(){
        dialogsMantMenPredefinido = dialogs.create('dialogsMantMenPredefinido', 0, 0, 729, 422, 'MENSAJE PREDEFINIDO');
		dialogsMantMenPredefinido.setAdjY(20);
        editsMantMenPreTitulo = edits.create('editsMantMenPreTitulo', 'MantPreTitulo', 'Titulo:', 1,81, 'normal');
        editsMantMenPreTitulo.setValidEmpty();
        memoMantMenPredefinido = memo.create('memoMantMenPredefinido', 'Descripción:', 1, 1, 79);
        memoMantMenPredefinido.setValidEmpty();
        memoMantMenPredefinido.setMaxLength(4000);
        gridsMantMenPredefinido = grids.create('gridsMantMenPredefinido', 9, 4);
        powerComboBoxMantPreEstado = powerComboBox.create('powerComboBoxMantPreEstado', 'powerComboBoxMantPreEstado', 'Estado:', 1,81);
	  	powerComboBoxMantPreEstado.setDataType('string');
        powerComboBoxMantPreEstado.setValidEmpty();
        powerComboBoxMantPreEstado.addEmptyOption();
        powerComboBoxMantPreEstado.enableReadOnlyEditor();
        imgButtonsMantMenPreAgregar = imgButtons.create('imgButtonsMantMenPreAgregar', 'Agregar', 'ok.png');
        imgButtonsMantMenPreModificar = imgButtons.create('imgButtonsMantMenPreModificar', 'Modificar', 'icono_modificar.png');
        imgButtonsMantMenPreModificar.setDisable();
        imgButtonsMantMenPreEliminar = imgButtons.create('imgButtonsMantMenPreEliminar', 'Eliminar', 'eliminar.jpg');
        imgButtonsMantMenPreEliminar.setDisable();
        imgButtonsMantMenPreLimpiar = imgButtons.create('imgButtonsMantMenPreLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsMantMenPreSalir = imgButtons.create('imgButtonsMantMenPreSalir', 'Salir', 'salir.png');
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsMantMenPredefinido_Init();
        this.gridsMantMenPredefinido_Init();
        this.createMWs();
    },
    
    limpiar: function(methodName){
        editsMantMenPreTitulo.setValue("");
        powerComboBoxMantPreEstado.setSelectedIndex(0);
        memoMantMenPredefinido.setText('');
        gridsMantMenPredefinido.clean();
        dialogsMantMenPredefinido.setMsg("");
        imgButtonsMantMenPreAgregar.setEnable();
        imgButtonsMantMenPreModificar.setDisable();
        imgButtonsMantMenPreEliminar.setDisable();

		if (methodName == "eliminar" && gridsMantMenPredefinido.getTotalRecord() == 1) { 
			gridsMantMenPredefinido.clean();
        	dlgWait.hide();
        }
        else
            Tool.getGridData('MsjObject', 'get'+this.windowName, dialogsMantMenPredefinido, gridsMantMenPredefinido, false);
    },
    
    setData: function(){
    	if (gridsMantMenPredefinido.getDataCell(1) != ""){
            this.idMenPrede = gridsMantMenPredefinido.getDataCell(1);
            editsMantMenPreTitulo.setValue(gridsMantMenPredefinido.getDataCell(2));
			memoMantMenPredefinido.setText(gridsMantMenPredefinido.getDataCell(3));
            powerComboBoxMantPreEstado.findOption(gridsMantMenPredefinido.getDataCell(4));
            imgButtonsMantMenPreAgregar.setDisable();
            imgButtonsMantMenPreModificar.setEnable();
            imgButtonsMantMenPreEliminar.setEnable();
        }
    },
    
    setEvents: function(){
		gridsMantMenPredefinido.onClickCells(this.windowName + ".setData()");
        imgButtonsMantMenPreAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
        imgButtonsMantMenPreModificar.onClick(this.windowName + ".coreUpdate('modificar')");
        imgButtonsMantMenPreEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
        imgButtonsMantMenPreLimpiar.onClick('MantMenPredefinido.limpiar()');
        imgButtonsMantMenPreSalir.onClick('dialogsMantMenPredefinido.close()');
    },
    
    loadDataGrid: function(){
        var rs = xmlHttpReq.objResponse;
        gridsMantMenPredefinido.loadDataStruct(rs);
        gridsMantMenPredefinido.showData();
        dlgWait.hide();
    },
    
    coreUpdate: function(methodName){
        var rlx = xmlStructs.createRecordList("rlx");

        if (editsMantMenPreTitulo.valid(dialogsMantMenPredefinido)) 
        	if (powerComboBoxMantPreEstado.valid(dialogsMantMenPredefinido)) 
            	if (editsMantMenPreTitulo.valid(dialogsMantMenPredefinido)) 
                    if (memoMantMenPredefinido.valid(dialogsMantMenPredefinido)) {
            			if (methodName == 'eliminar') 
            				rlx.addInt('reg', this.idMenPrede);
            			else {
                        	rlx.add('reg', editsMantMenPreTitulo);
                            rlx.add('reg', memoMantMenPredefinido);
                            rlx.add('reg', powerComboBoxMantPreEstado);
                            if (methodName == 'modificar') rlx.addInt('reg', this.idMenPrede);
            			}
            			Tool.cnnSrv('MsjObject', methodName + this.windowName, this.windowName + ".limpiar('" + methodName + "')", rlx);
                    }
    }
};
