var dialogsMantNivAcademico = new Object();
var editsMantNivAcademicoDescripcion = new Object();
var gridsMantNivAcademicoCodDescripcion = new Object();
var imgButtonsMantNivAcaModificar = new Object();
var imgButtonsMantNivAcaLimpiar = new Object();
var imgButtonsMantNivAcaSalir = new Object();
var mwMantNivAcademico = new Object();// minWindow

var MantNivAcademico = {
    windowName: 'MantNivAcademico',
    isCreate: false,
    idNivAcademico : 0,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsMantNivAcademico.isByClean()) 
            this.limpiar();
        dialogsMantNivAcademico.show();
    },
    hide: function(){
        dialogsMantNivAcademico.hide();
    },
    createMWs: function(){
        mwMantNivAcademico = desktop.addMinWindow('M.N.Academico', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantNivAcademico.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsMantNivAcademico_Init: function(){
        dialogsMantNivAcademico.setMinimizeXY(0, 0);
        dialogsMantNivAcademico.setCenterScreen();
        dialogsMantNivAcademico.addSpace(0, 0, 20);
        dialogsMantNivAcademico.addLn(1, 1, 1);
		dialogsMantNivAcademico.setHeightCell(1,1,10);  
        dialogsMantNivAcademico.addObjToDialog(editsMantNivAcademicoDescripcion, 3, 1,24);
        editsMantNivAcademicoDescripcion.setSizeEdit(298);
		editsMantNivAcademicoDescripcion.setMaxLength(50);
        dialogsMantNivAcademico.addLn(4, 1, 1);
		dialogsMantNivAcademico.setHeightCell(4,1,5); 
        dialogsMantNivAcademico.addObjToDialog(gridsMantNivAcademicoCodDescripcion.getObject(), 5, 1);
        dialogsMantNivAcademico.addLn(6, 1, 1);
		dialogsMantNivAcademico.setHeightCell(6,1,12); 
        dialogsMantNivAcademico.addObjToDialog(imgButtonsMantNivAcaModificar, 7, 1);
        dialogsMantNivAcademico.addObjToDialog(imgButtonsMantNivAcaLimpiar, 7, 1);
        dialogsMantNivAcademico.addObjToDialog(imgButtonsMantNivAcaSalir, 7, 1);
        imgButtonsMantNivAcaModificar.setDimension(90, 22);
        imgButtonsMantNivAcaLimpiar.setDimension(90, 22);
        imgButtonsMantNivAcaSalir.setDimension(90, 22);
        dialogsMantNivAcademico.adjAllMarginObj(7, 1, 18);
        dialogsMantNivAcademico.leftMarginObj(7, 1, 0, 140);
    },
	
    gridsMantNivAcademicoCodDescripcion_Init: function(){
        gridsMantNivAcademicoCodDescripcion.setFixColRow(false, true);
        gridsMantNivAcademicoCodDescripcion.addTitleVectorX(['Código', 'Descripción']);
        gridsMantNivAcademicoCodDescripcion.showData();
        gridsMantNivAcademicoCodDescripcion.setSizeCol(1, 100);
        gridsMantNivAcademicoCodDescripcion.setSizeCol(2, 486);
        
    },
    
    create: function(){
        dialogsMantNivAcademico = dialogs.create('dialogsMantNivAcademico', 0, 0, 630, 330, 'NIVEL ACADEMICO');
		dialogsMantNivAcademico.setAdjY(20);
        editsMantNivAcademicoDescripcion = edits.create('editsMantNivAcademicoDescripcion', 'MantNivAcademicoDescripcion', 'Descripción:', 1,80, 'normal');
        editsMantNivAcademicoDescripcion.setValidEmpty();
        gridsMantNivAcademicoCodDescripcion = grids.create('gridsMantNivAcademicoCodDescripcion', 10, 2);
        imgButtonsMantNivAcaModificar = imgButtons.create('imgButtonsMantNivAcaModificar', 'Modificar', 'icono_modificar.png');
        imgButtonsMantNivAcaModificar.setDisable();
        imgButtonsMantNivAcaLimpiar = imgButtons.create('imgButtonsMantNivAcaLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsMantNivAcaSalir = imgButtons.create('imgButtonsMantNivAcaSalir', 'Salir', 'salir.png');
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsMantNivAcademico_Init();
        this.gridsMantNivAcademicoCodDescripcion_Init();
        this.createMWs();
    },
    
    setData: function(){
        if (gridsMantNivAcademicoCodDescripcion.getDataCell(1) != "") {
            this.NivAcademicoCodigo = gridsMantNivAcademicoCodDescripcion.getDataCell(1);
            editsMantNivAcademicoDescripcion.setValue(gridsMantNivAcademicoCodDescripcion.getDataCell(2));
            imgButtonsMantNivAcaModificar.setEnable();
        }
    },
    
    setEvents: function(){
    	gridsMantNivAcademicoCodDescripcion.onClickCells(this.windowName + ".setData()");
        imgButtonsMantNivAcaModificar.onClick("MantNivAcademico.coreUpdate('modificar')");
        imgButtonsMantNivAcaLimpiar.onClick("MantNivAcademico.limpiar()");
        imgButtonsMantNivAcaSalir.onClick("dialogsMantNivAcademico.close()");
    },
    
    limpiar: function(){
        this.NivAcademicoCodigo = 0;
        editsMantNivAcademicoDescripcion.setValue("");
        gridsMantNivAcademicoCodDescripcion.clean();
        dialogsMantNivAcademico.setMsg("");
        imgButtonsMantNivAcaModificar.setDisable();
        Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantNivAcademico, gridsMantNivAcademicoCodDescripcion, false);
    },
          
    coreUpdate: function(methodName){
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (editsMantNivAcademicoDescripcion.valid(dialogsMantNivAcademico)) {
        	if (methodName == 'agregar' || methodName == 'modificar')  
                rlx.add('reg', editsMantNivAcademicoDescripcion);
        	if (methodName != 'agregar') 
                rlx.addInt('reg', this.NivAcademicoCodigo);
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
    }
};
