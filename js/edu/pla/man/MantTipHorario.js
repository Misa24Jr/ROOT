var dialogsMantTipHorario = new Object();
var powerComboBoxMantTipHorOrg = new Object();
var editsMatTipHorDescripcion = new Object();
var powerComboBoxMantTipHorEstado = new Object();
var gridsMantTipHorCodDescripcion = new Object();
var imgButtonsMantTipHorxAgregar = new Object();
var imgButtonsMantTipHorxModificar = new Object();
var imgButtonsMantTipHorxEliminar = new Object();
var imgButtonsMantTipHorxLimpiar = new Object();
var imgButtonsMantTipHorxSalir = new Object();
var mwMantTipHorario = new Object();// minWindow

var MantTipHorario = {
    windowName: 'MantTipHorario',
    isCreate: false,
    idTipoHorario: 0,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsMantTipHorario.isByClean()) 
            this.limpiar();
        dialogsMantTipHorario.show();
    },
    
    hide: function(){
        dialogsMantTipHorario.hide();
    },
    
    createMWs: function(){
        mwMantTipHorario = desktop.addMinWindow('M.T.Horario', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantTipHorario.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsMantTipHorario_Init: function() {
        dialogsMantTipHorario.setMinimizeXY(0, 0);
        dialogsMantTipHorario.setCenterScreen();
        dialogsMantTipHorario.addSpace(0, 0, 20);
        dialogsMantTipHorario.addLn(1, 1, 1);
		dialogsMantTipHorario.setHeightCell(1,1,10);
        dialogsMantTipHorario.addObjToDialog(powerComboBoxMantTipHorOrg, 2, 1,24);
        powerComboBoxMantTipHorOrg.setWidthCombo(230);
        dialogsMantTipHorario.addObjToDialog(editsMatTipHorDescripcion, 3, 1,24);
        editsMatTipHorDescripcion.setSizeEdit(251);
        editsMatTipHorDescripcion.setMaxLength(50);        
        dialogsMantTipHorario.addObjToDialog(powerComboBoxMantTipHorEstado,4,1,24);
        powerComboBoxMantTipHorEstado.addOptionAndSimpleValue(null,'ACTIVO','ACTIVO');
        powerComboBoxMantTipHorEstado.addOptionAndSimpleValue(null,'INACTIVO','INACTIVO');
	    powerComboBoxMantTipHorEstado.setWidthCombo(230);        
        dialogsMantTipHorario.addLn(5, 1, 1);
		dialogsMantTipHorario.setHeightCell(5,1,10);
        dialogsMantTipHorario.addObjToDialog(gridsMantTipHorCodDescripcion.getObject(), 6, 1);
        dialogsMantTipHorario.addLn(7, 1, 1);
		dialogsMantTipHorario.setHeightCell(7,1,12);
        dialogsMantTipHorario.addObjToDialog(imgButtonsMantTipHorxAgregar, 8, 1);
        dialogsMantTipHorario.addObjToDialog(imgButtonsMantTipHorxModificar, 8, 1);
        dialogsMantTipHorario.addObjToDialog(imgButtonsMantTipHorxEliminar, 8, 1);
        dialogsMantTipHorario.addObjToDialog(imgButtonsMantTipHorxLimpiar, 8, 1);
        dialogsMantTipHorario.addObjToDialog(imgButtonsMantTipHorxSalir, 8, 1);
        imgButtonsMantTipHorxAgregar.setDimension(90, 22);
        imgButtonsMantTipHorxModificar.setDimension(90, 22);
        imgButtonsMantTipHorxEliminar.setDimension(90, 22);
        imgButtonsMantTipHorxLimpiar.setDimension(90, 22);
        imgButtonsMantTipHorxSalir.setDimension(90, 22);
        dialogsMantTipHorario.adjAllMarginObj(8, 1, 18);
        dialogsMantTipHorario.leftMarginObj(8, 1, 0, 30);
    },
    
    gridsMantTipHorCodDescripcion_Init: function(){
        gridsMantTipHorCodDescripcion.setFixColRow(false, true);
        gridsMantTipHorCodDescripcion.addTitleVectorX(['idorg','Organización','idtiphor', 'Descripción','Estado']);
        gridsMantTipHorCodDescripcion.showData();
        gridsMantTipHorCodDescripcion.setSizeCol(1, 0);
        gridsMantTipHorCodDescripcion.setSizeCol(2, 200);
        gridsMantTipHorCodDescripcion.setSizeCol(3, 0);
        gridsMantTipHorCodDescripcion.setSizeCol(4, 285);
        gridsMantTipHorCodDescripcion.setSizeCol(5, 100);
        gridsMantTipHorCodDescripcion.hideCol(1);        
        gridsMantTipHorCodDescripcion.hideCol(3);        
    },
    
    create: function(){
        dialogsMantTipHorario = dialogs.create('dialogsMantTipHorario', 0, 0, 628, 343, 'MANTENIMIENTO TIPO DE HORARIO');
        powerComboBoxMantTipHorOrg = powerComboBox.create('powerComboBoxMantTipHorOrg', 'powerComboBoxMantTipHorOrg', 'Organización :',1,95);
        powerComboBoxMantTipHorOrg.setValidEmpty();
        powerComboBoxMantTipHorOrg.addEmptyOption();
        powerComboBoxMantTipHorOrg.enableReadOnlyEditor();
        editsMatTipHorDescripcion = edits.create('editsMatTipHorDescripcion', 'editsMantTipHorDescripcion', 'Descripción:', 3,93, 'normal');
        editsMatTipHorDescripcion.setValidEmpty();        
        powerComboBoxMantTipHorEstado = powerComboBox.create('powerComboBoxMantTipHorEstado', 'powerComboBoxMantTipHorEstado', 'Estado:', 3,93);
        powerComboBoxMantTipHorEstado.setValidEmpty();
        powerComboBoxMantTipHorEstado.enableReadOnlyEditor();
        powerComboBoxMantTipHorEstado.addEmptyOption();
		powerComboBoxMantTipHorEstado.setDataType('string');   
        gridsMantTipHorCodDescripcion = grids.create('gridsMantTipHorCodDescripcion', 8, 5);
        imgButtonsMantTipHorxAgregar = imgButtons.create('imgButtonsMantTipHorxAgregar', 'Agregar', 'ok.png');
        imgButtonsMantTipHorxModificar = imgButtons.create('imgButtonsMantTipHorxModificar', 'Modificar', 'icono_modificar.png');
        imgButtonsMantTipHorxModificar.setDisable();
        imgButtonsMantTipHorxEliminar = imgButtons.create('imgButtonsMantTipHorxEliminar', 'Eliminar', 'eliminar.png');
        imgButtonsMantTipHorxEliminar.setDisable();
        imgButtonsMantTipHorxLimpiar = imgButtons.create('imgButtonsMantTipHorxLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsMantTipHorxSalir = imgButtons.create('imgButtonsMantTipHorxSalir', 'Salir', 'salir.png');
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsMantTipHorario_Init();
        this.gridsMantTipHorCodDescripcion_Init();
        this.createMWs();
    },
    
    limpiar: function(){
        powerComboBoxMantTipHorOrg.setSelectedIndex(0);
        editsMatTipHorDescripcion.setValue("");
        powerComboBoxMantTipHorEstado.setSelectedIndex(0);
        gridsMantTipHorCodDescripcion.clean();
        dialogsMantTipHorario.setMsg("");
        imgButtonsMantTipHorxAgregar.setEnable();
        imgButtonsMantTipHorxModificar.setDisable();
        imgButtonsMantTipHorxEliminar.setDisable();
        Tool.cnnSrv('MantObject', 'get'+this.windowName, this.windowName + '.loadDataInit()');
	},
	
	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsMantTipHorario, powerComboBoxMantTipHorOrg, 0, 1, json('getData'));
		Tool.loadGridData(dialogsMantTipHorario, gridsMantTipHorCodDescripcion, false, json('getMantTipoHorario'));
	},
    
    setData: function(){
        if (gridsMantTipHorCodDescripcion.getDataCell(1) != "") {
        	this.idTipoHorario = gridsMantTipHorCodDescripcion.getDataCell(3);
            editsMatTipHorDescripcion.setValue(gridsMantTipHorCodDescripcion.getDataCell(4));
            powerComboBoxMantTipHorOrg.findOption(gridsMantTipHorCodDescripcion.getDataCell(1));
            powerComboBoxMantTipHorEstado.findOption(gridsMantTipHorCodDescripcion.getDataCell(5));
            imgButtonsMantTipHorxAgregar.setDisable();
            imgButtonsMantTipHorxModificar.setEnable();
            imgButtonsMantTipHorxEliminar.setEnable();
        }
    },
    
    resetElements : function(element) {
    	imgButtonsMantTipHorxAgregar.setEnable();
    	imgButtonsMantTipHorxModificar.setDisable();
    	imgButtonsMantTipHorxEliminar.setDisable();
	},

	setEvents: function(){
		powerComboBoxMantTipHorOrg.onChange(this.windowName + ".resetElements()");
    	gridsMantTipHorCodDescripcion.onClickCells(this.windowName + ".setData()");
        imgButtonsMantTipHorxAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
        imgButtonsMantTipHorxModificar.onClick(this.windowName + ".coreUpdate('modificar')");
        imgButtonsMantTipHorxEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
        imgButtonsMantTipHorxLimpiar.onClick('MantTipHorario.limpiar()');
        imgButtonsMantTipHorxSalir.onClick('dialogsMantTipHorario.close()');
    },
    
    coreUpdate: function(methodName){
        var rlx = xmlStructs.createRecordList("rlx");
         
        if (powerComboBoxMantTipHorOrg.valid(dialogsMantTipHorario)) 
        	if (editsMatTipHorDescripcion.valid(dialogsMantTipHorario)) 
        		if (powerComboBoxMantTipHorEstado.valid(dialogsMantTipHorario)) {
        	        if (methodName == 'eliminar') {
                        rlx.addInt('reg', this.idTipoHorario);
        	        }
        	        else {
        	            rlx.add('reg', powerComboBoxMantTipHorOrg);
        	            rlx.add('reg', powerComboBoxMantTipHorEstado);
        	        	rlx.add('reg', editsMatTipHorDescripcion);
        		        if (methodName == 'modificar') {
        		        	rlx.addInt('reg', this.idTipoHorario);
        		        }
        	        }
        			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        		}
    }
};
