var dialogsMantTipPersona = new Object();
var powerComboBoxMantTipPerGrupo = new Object();
var editsMantTipPerDescripcion = new Object();
var gridsMantTipPerCodDescripcion = new Object();
var imgButtonsMantTipPerAgregar = new Object();
var imgButtonsMantTipPerModificar = new Object();
var imgButtonsMantTipPerEliminar = new Object();
var imgButtonsMantTipPerLimpiar = new Object();
var imgButtonsMantTipPerSalir = new Object();
var mwMantTipPersona = new Object();// minWindow
var MantTipPersona = {
	windowName : 'MantTipPersona',
	isCreate : false,
	idTiPers : 0,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantTipPersona.isByClean())
 			this.limpiar();			
		dialogsMantTipPersona.show();
	},
	hide : function() {
		dialogsMantTipPersona.hide();
	},
	createMWs : function() {
		mwMantTipPersona = desktop.addMinWindow('M.T.Persona', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsMantTipPersona.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	dialogsMantTipPersona_Init : function() {
        dialogsMantTipPersona.setMinimizeXY(0,0);
        dialogsMantTipPersona.setCenterScreen();
        dialogsMantTipPersona.addSpace(0,0,20);
        dialogsMantTipPersona.addLn(1,1,1);
		dialogsMantTipPersona.setHeightCell(1,1,10);
        dialogsMantTipPersona.addObjToDialog(editsMantTipPerDescripcion,2,1,24);
        editsMantTipPerDescripcion.setSizeEdit(301);
	  	editsMantTipPerDescripcion.setMaxLength(50);
        dialogsMantTipPersona.addObjToDialog(powerComboBoxMantTipPerGrupo,2,1,24);
        dialogsMantTipPersona.adjAllMarginObj(2,1,20);
        dialogsMantTipPersona.addLn(3,1,1);
		dialogsMantTipPersona.setHeightCell(3,1,12);
        dialogsMantTipPersona.addObjToDialog(gridsMantTipPerCodDescripcion.getObject(),4,1);
        dialogsMantTipPersona.addLn(5,1,1);
		dialogsMantTipPersona.setHeightCell(5,1,12);
        dialogsMantTipPersona.addObjToDialog(imgButtonsMantTipPerAgregar,6,1);
        dialogsMantTipPersona.addObjToDialog(imgButtonsMantTipPerModificar,6,1);
        dialogsMantTipPersona.addObjToDialog(imgButtonsMantTipPerEliminar,6,1);
        dialogsMantTipPersona.addObjToDialog(imgButtonsMantTipPerLimpiar,6,1);
        dialogsMantTipPersona.addObjToDialog(imgButtonsMantTipPerSalir,6,1);        
        imgButtonsMantTipPerAgregar.setDimension(90,22);
        imgButtonsMantTipPerModificar.setDimension(90,22);
        imgButtonsMantTipPerEliminar.setDimension(90,22);
        imgButtonsMantTipPerLimpiar.setDimension(90,22);
        imgButtonsMantTipPerSalir.setDimension(90,22);
		dialogsMantTipPersona.adjAllMarginObj(6,1,18);
        dialogsMantTipPersona.leftMarginObj(6,1,0,32);
	},
	
	gridsMantTipPerCodDescripcion_Init : function() {
        gridsMantTipPerCodDescripcion.setFixColRow(false,true);
        gridsMantTipPerCodDescripcion.addTitleVectorX(['Id','Descripcion','Tipo','idgrupo']);
        gridsMantTipPerCodDescripcion.showData();        
        gridsMantTipPerCodDescripcion.setSizeCol(1,0);
        gridsMantTipPerCodDescripcion.setSizeCol(2,400);
        gridsMantTipPerCodDescripcion.setSizeCol(3,187);
        gridsMantTipPerCodDescripcion.setSizeCol(4,0);
        gridsMantTipPerCodDescripcion.hideCol(1);
        gridsMantTipPerCodDescripcion.hideCol(4);
	},

	create : function() {
		dialogsMantTipPersona = dialogs.create('dialogsMantTipPersona',0,0,632,335,'MANTENIMIENTO GRUPO DE PERSONA');
		dialogsMantTipPersona.setAdjY(25);
		powerComboBoxMantTipPerGrupo = powerComboBox.create('powerComboBoxMantTipPerGrupo', 'powerComboBoxMantTipPerGrupo', 'Tipo:', 1,42);
		powerComboBoxMantTipPerGrupo.enableReadOnlyEditor();
		powerComboBoxMantTipPerGrupo.addEmptyOption();
		powerComboBoxMantTipPerGrupo.setValidEmpty();
		editsMantTipPerDescripcion = edits.create('editsMantTipPerDescripcion','MantTipPersona_Descripcion','Descripcion:',1,76,'normal');
		editsMantTipPerDescripcion.setValidEmpty();
		gridsMantTipPerCodDescripcion = grids.create('gridsMantTipPerCodDescripcion',10,4);
		imgButtonsMantTipPerAgregar = imgButtons.create('imgButtonsMantTipPerAgregar','Agregar','ok.png');
		imgButtonsMantTipPerModificar = imgButtons.create('imgButtonsMantTipPerModificar','Modificar','icono_modificar.png');
		imgButtonsMantTipPerModificar.setDisable();
		imgButtonsMantTipPerEliminar = imgButtons.create('imgButtonsMantTipPerEliminar','Eliminar','eliminar.png');
		imgButtonsMantTipPerEliminar.setDisable();
		imgButtonsMantTipPerLimpiar = imgButtons.create('imgButtonsMantTipPerLimpiar','Limpiar','limpiar.png');
		imgButtonsMantTipPerSalir = imgButtons.create('imgButtonsMantTipPerSalir','Salir','salir.png');
	},

  	init : function() {
  		this.create();
  		this.setEvents();
  		this.dialogsMantTipPersona_Init();
  		this.gridsMantTipPerCodDescripcion_Init();
  		this.createMWs();		
  	},

  	limpiar : function() {
  		editsMantTipPerDescripcion.setValue("");
  		gridsMantTipPerCodDescripcion.clean();
  		dialogsMantTipPersona.setMsg("");
		imgButtonsMantTipPerAgregar.setEnable();
		imgButtonsMantTipPerModificar.setDisable();
		imgButtonsMantTipPerEliminar.setDisable();	
		Tool.cnnSrv('MantObject', 'getGrupoTipoPersona', this.windowName + '.loadInit()');
		
  	},

	loadInit: function() {
		if (powerComboBoxMantTipPerGrupo.getOption == "")
			Tool.loadPowerComboData(dialogsMantTipPersona, powerComboBoxMantTipPerGrupo, 0, 1, json('getGrupoTipoPersona'));
		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantTipPersona, gridsMantTipPerCodDescripcion, false); 		    		
    },
	  	
  	setData : function() {
		if (gridsMantTipPerCodDescripcion.getDataCell(1) != "") {
			idTiPers = gridsMantTipPerCodDescripcion.getDataCell(1);
			editsMantTipPerDescripcion.setValue(gridsMantTipPerCodDescripcion.getDataCell(2));
			powerComboBoxMantTipPerGrupo.findOption(gridsMantTipPerCodDescripcion.getDataCell(4));
			imgButtonsMantTipPerAgregar.setDisable();
			imgButtonsMantTipPerModificar.setEnable();
			imgButtonsMantTipPerEliminar.setEnable();
        }     			
	},
  	
  	setEvents : function() {
  		gridsMantTipPerCodDescripcion.onClickCells(this.windowName+".setData()");
  		imgButtonsMantTipPerAgregar.onClick(this.windowName+".coreUpdate('agregar')");
  		imgButtonsMantTipPerModificar.onClick(this.windowName+".coreUpdate('modificar')");
  		imgButtonsMantTipPerEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
  		imgButtonsMantTipPerLimpiar.onClick('MantTipPersona.limpiar()');
  		imgButtonsMantTipPerSalir.onClick('dialogsMantTipPersona.close()');	  	 	
    },
    
	coreUpdate : function(methodName) {
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == 'eliminar') {
			if (editsMantTipPerDescripcion.valid(dialogsMantTipPersona)) {
				rlx.addInt('reg', idTiPers);
				procesar = true;
			}
		}
		else {
	  		if (editsMantTipPerDescripcion.valid(dialogsMantTipPersona))
  				if (powerComboBoxMantTipPerGrupo.valid(dialogsMantTipPersona)) { 					
					rlx.add('reg',editsMantTipPerDescripcion);
					rlx.add('reg',powerComboBoxMantTipPerGrupo);
					if (methodName == 'modificar') rlx.addInt('reg',idTiPers);
					procesar = true;		
				} 
			}
		if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
	}
};