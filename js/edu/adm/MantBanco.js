var dialogsMantBanco = new Object();
var editsMantBanDescripcion = new Object();
var pcbMantBancoEstado = new Object();
var gridsMantBanco = new Object();
var imgButtonsMantBanAgregar = new Object();
var imgButtonsMantBanModificar = new Object();
var imgButtonsMantBanEliminar = new Object();
var imgButtonsMantBanLimpiar = new Object();
var imgButtonsMantBanSalir = new Object();
var mwMantBanco = new Object();// minWindow

var MantBanco = {
	windowName : 'MantBanco',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
		  this.init();
		  this.isCreate = true;
		}

		if (dialogsMantBanco.isByClean())
 			this.limpiar();			
		dialogsMantBanco.show();
	},
	
	hide : function() {
		dialogsMantBanco.hide();
	},
	
	createMWs : function() {
        mwMantBanco  = desktop.addMinWindow('M.Banco', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantBanco .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsMantBanco_Init : function() {
        dialogsMantBanco.setMinimizeXY(0,0);
        dialogsMantBanco.setCenterScreen();
        dialogsMantBanco.addSpace(0,0,20);
        dialogsMantBanco.addLn(1,1,1);
		dialogsMantBanco.setHeightCell(1,1,10);
        dialogsMantBanco.addObjToDialog(editsMantBanDescripcion,2,1,24);
        dialogsMantBanco.addObjToDialog(pcbMantBancoEstado,2,1,24);
        dialogsMantBanco.adjAllMarginObj(2,1,12);
        dialogsMantBanco.addLn(3,1,1);
		dialogsMantBanco.setHeightCell(3,1,10);
        dialogsMantBanco.addObjToDialog(gridsMantBanco.getObject(),4,1);
        dialogsMantBanco.addLn(5,1,1);
		dialogsMantBanco.setHeightCell(5,1,12);
        dialogsMantBanco.addObjToDialog(imgButtonsMantBanAgregar,6,1);
        dialogsMantBanco.addObjToDialog(imgButtonsMantBanModificar,6,1);
        dialogsMantBanco.addObjToDialog(imgButtonsMantBanEliminar,6,1);
        dialogsMantBanco.addObjToDialog(imgButtonsMantBanLimpiar,6,1);
        dialogsMantBanco.addObjToDialog(imgButtonsMantBanSalir,6,1);       
        imgButtonsMantBanAgregar.setDimension(90,22);
        imgButtonsMantBanModificar.setDimension(90,22);
        imgButtonsMantBanEliminar.setDimension(90,22);
        imgButtonsMantBanLimpiar.setDimension(90,22);
        imgButtonsMantBanSalir.setDimension(90,22);
        dialogsMantBanco.adjAllMarginObj(6,1,18);
        dialogsMantBanco.leftMarginObj(6,1,0,30);
	},
  
	gridsMantBanco_Init : function()  {
        gridsMantBanco.setFixColRow(false,true);
        gridsMantBanco.addTitleVectorX(['Descripción','idbanco','esbanco']);
        gridsMantBanco.showData();        
        gridsMantBanco.setSizeCol(1,584);
        gridsMantBanco.setSizeCol(2,0);
        gridsMantBanco.setSizeCol(3,0);
        gridsMantBanco.hideCol(2);
        gridsMantBanco.hideCol(3);
	},

	create : function() {
		dialogsMantBanco = dialogs.create('dialogsMantBanco',0,0,628,333,'MANTENIMIENTO BANCO');
		editsMantBanDescripcion = edits.create('editsMantBanDescripcion','editsMantBanDescripcion','Descripción:',3,80,'normal');
		editsMantBanDescripcion.setValidEmpty();
		editsMantBanDescripcion.hideId = '';
        editsMantBanDescripcion.setSizeEdit(343);
		editsMantBanDescripcion.setMaxLength(80); 
		pcbMantBancoEstado = powerComboBox.create('pcbMantBancoEstado', 'pcbMantBancoEstado','Estado:', 1,56);
		pcbMantBancoEstado.enableReadOnlyEditor();
		pcbMantBancoEstado.addEmptyOption();
		pcbMantBancoEstado.setValidEmpty();
		pcbMantBancoEstado.setWidthCombo(70);
		pcbMantBancoEstado.addOptionAndSimpleValue(null, 'ACTIVO', 'ACTIVO');
		pcbMantBancoEstado.addOptionAndSimpleValue(null, 'INACTIVO', 'INACTIVO');
		pcbMantBancoEstado.setDataType('string');
		gridsMantBanco = grids.create('gridsMantBanco',10,3);
		imgButtonsMantBanAgregar = imgButtons.create('imgButtonsMantBanAgregar','Agregar','ok.png');
		imgButtonsMantBanModificar = imgButtons.create('imgButtonsMantBanModificar','Modificar','icono_modificar.png');
		imgButtonsMantBanModificar.setDisable();
		imgButtonsMantBanEliminar = imgButtons.create('imgButtonsMantBanEliminar','Eliminar','eliminar.jpg');
		imgButtonsMantBanEliminar.setDisable();
		imgButtonsMantBanLimpiar = imgButtons.create('imgButtonsMantBanLimpiar','Limpiar','limpiar.png');
		imgButtonsMantBanSalir = imgButtons.create('imgButtonsMantBanSalir','Salir','salir.png');
	},

	init : function() {
	    this.create();
	    this.setEvents();
	    this.dialogsMantBanco_Init();
	    this.gridsMantBanco_Init();
		this.createMWs(); 
	},

  	setData : function() {
		if (gridsMantBanco.getDataCell(1) != "") {
            editsMantBanDescripcion.setValue(gridsMantBanco.getDataCell(1));
            editsMantBanDescripcion.hideId = gridsMantBanco.getDataCell(2)
            pcbMantBancoEstado.findOption(gridsMantBanco.getDataCell(3));
			imgButtonsMantBanAgregar.setDisable();
			imgButtonsMantBanModificar.setEnable();
			imgButtonsMantBanEliminar.setEnable();
		}     			
	},
  	
  	setEvents : function() {
  		gridsMantBanco.onClickCells(this.windowName + ".setData()");
    	imgButtonsMantBanAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
		imgButtonsMantBanModificar.onClick(this.windowName + ".coreUpdate('modificar')");
		imgButtonsMantBanEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
  		imgButtonsMantBanLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsMantBanSalir.onClick('dialogsMantBanco.close()');
  	},
	
  	limpiar : function(methodName) {
  		editsMantBanDescripcion.hideId = '';
  		editsMantBanDescripcion.setValue("");
  		pcbMantBancoEstado.setSelectedIndex(0);
  		dialogsMantBanco.setMsg("");
		imgButtonsMantBanAgregar.setEnable();
		imgButtonsMantBanModificar.setDisable();
		imgButtonsMantBanEliminar.setDisable();

		if (methodName == "eliminar" && gridsMantBanco.getTotalRecord() == 1) { 
			gridsMantBanco.clean();
			dlgWait.hide();
		}
		else 
			Tool.getGridData("MantObject", "get" + this.windowName, dialogsMantBanco, gridsMantBanco, false);
  	},
  	
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMantBanDescripcion.valid(dialogsMantBanco)) 
			if (pcbMantBancoEstado.valid(dialogsMantBanco)) {
				if (methodName == 'eliminar') 
					rlx.addInt('reg', editsMantBanDescripcion.hideId);
				else {
				 	rlx.add('reg',editsMantBanDescripcion);
				 	rlx.add('reg',pcbMantBancoEstado);
				 	if (methodName == 'modificar') rlx.addInt('reg', editsMantBanDescripcion.hideId);
				}
				Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiar('" + methodName + "')", rlx);
			}
	}
};