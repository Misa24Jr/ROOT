var dialogsMantCueBancarias = new Object();
var pcbMantCueBanco		= {};
var pcbMantCueOrg = new Object();
var editsMantCueBanCodBanco = new Object();
var editsMantCueBanBanco = new Object();
var editsMantCueNumCuenta = new Object();
var pcbMantCueBanEstado = new Object();
var gridsMantCueBancarias = new Object();
var imgButtonsMantCueBanAgregar = new Object();
var imgButtonsMantCueBanModificar = new Object();
var imgButtonsMantCueBanEliminar = new Object();
var imgButtonsMantCueBanLimpiar = new Object();
var imgButtonsMantCueBanSalir = new Object();
var mwMantCueBancarias = new Object();// minWindow

var MantCueBancarias = {
	windowName : 'MantCueBancarias',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
		  this.init();
		  this.isCreate = true;
		}

		if (dialogsMantCueBancarias.isByClean())
 			this.limpiar();			
		dialogsMantCueBancarias.show();
	},
	
	hide : function() {
		dialogsMantCueBancarias.hide();
	},
	
	createMWs : function() {
        	mwMantCueBancarias  = desktop.addMinWindow('M.C.Bancarias', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantCueBancarias .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsMantCueBancarias_Init : function() {
        dialogsMantCueBancarias.setMinimizeXY(0,0);
        dialogsMantCueBancarias.setCenterScreen();
        dialogsMantCueBancarias.addSpace(0,0,20);
        dialogsMantCueBancarias.addLn(1,1,1);
		dialogsMantCueBancarias.setHeightCell(1,1,10);
        dialogsMantCueBancarias.addObjToDialog(pcbMantCueOrg,2,1,24);
        dialogsMantCueBancarias.addObjToDialog(editsMantCueBanCodBanco,2,1,24);
        dialogsMantCueBancarias.addObjToDialog(pcbMantCueBanco,2,1,24);
        dialogsMantCueBancarias.addObjToDialog(editsMantCueBanBanco,2,1,24);
		dialogsMantCueBancarias.adjAllMarginObj(2,1,8);
        dialogsMantCueBancarias.addObjToDialog(editsMantCueNumCuenta,4,1,24);
		dialogsMantCueBancarias.addObjToDialog(pcbMantCueBanEstado,4,1,24);
		dialogsMantCueBancarias.adjAllMarginObj(4,1,8);
        dialogsMantCueBancarias.addLn(5,1,1);
		dialogsMantCueBancarias.setHeightCell(5,1,10);
        dialogsMantCueBancarias.addObjToDialog(gridsMantCueBancarias.getObject(),6,1);
        dialogsMantCueBancarias.addLn(7,1,1);
		dialogsMantCueBancarias.setHeightCell(7,1,8);
        dialogsMantCueBancarias.addObjToDialog(imgButtonsMantCueBanAgregar,8,1);
        dialogsMantCueBancarias.addObjToDialog(imgButtonsMantCueBanModificar,8,1);
        dialogsMantCueBancarias.addObjToDialog(imgButtonsMantCueBanEliminar,8,1);
        dialogsMantCueBancarias.addObjToDialog(imgButtonsMantCueBanLimpiar,8,1);
        dialogsMantCueBancarias.addObjToDialog(imgButtonsMantCueBanSalir,8,1);       
        dialogsMantCueBancarias.adjAllMarginObj(8,1,18);
        dialogsMantCueBancarias.leftMarginObj(8,1,0,62);
	},
  
	gridsMantCueBancarias_Init : function()  {
        gridsMantCueBancarias.setFixColRow(false,true);
        gridsMantCueBancarias.addTitleVectorX(['Organización','Código','Banco','Nº de Cuenta','idOrg','idCta','Estado','idBco']);
        gridsMantCueBancarias.showData();        
        gridsMantCueBancarias.setSizeCol(1,89);
        gridsMantCueBancarias.setSizeCol(2,50);
        gridsMantCueBancarias.setSizeCol(3,200);
        gridsMantCueBancarias.setSizeCol(4,250);
        gridsMantCueBancarias.setSizeCol(5,0);
        gridsMantCueBancarias.setSizeCol(6,0);
        gridsMantCueBancarias.setSizeCol(7,60);
        gridsMantCueBancarias.setSizeCol(8,0);
        gridsMantCueBancarias.hideCol(5);
        gridsMantCueBancarias.hideCol(6);
        gridsMantCueBancarias.hideCol(8);
	},

	create : function() {
		dialogsMantCueBancarias = dialogs.create('dialogsMantCueBancarias',0,0,695,352,'CUENTA BANCARIA');
		pcbMantCueOrg = powerComboBox.create('pcbMantCueOrg','pcbMantCueOrg','Organización (*):',1,107);
	    pcbMantCueOrg.enableReadOnlyEditor();
        pcbMantCueOrg.addEmptyOption();
        pcbMantCueOrg.setValidEmpty();
        pcbMantCueOrg.setWidthCombo(100);
        editsMantCueBanCodBanco = edits.create('editsMantCueBanCodBanco','editsMantCueBanCodBanco','Código:',1,57,'normal');
		editsMantCueBanCodBanco.setValidEmpty();
        editsMantCueBanCodBanco.setSizeEdit(20);
		editsMantCueBanCodBanco.setMaxLength(2); 
		pcbMantCueBanco = powerComboBox.create('pcbMantCueBanco', 'pcbMantCueBanco', 'Banco:', 1,52);
		pcbMantCueBanco.setWidthCombo(71);
		pcbMantCueBanco.enableReadOnlyEditor();
		pcbMantCueBanco.addEmptyOption();
		pcbMantCueBanco.setValidEmpty();		
		editsMantCueBanBanco = edits.create('editsMantCueBanBanco','editsMantCueBanBanco','',1,0,'normal');
		editsMantCueBanBanco.setValidEmpty();
        editsMantCueBanBanco.setSizeEdit(177);
		editsMantCueBanBanco.setMaxLength(80); 
		editsMantCueNumCuenta = edits.create('editsMantCueNumCuenta','editsMantCueNumCuenta','Nº de Cuenta:',1,107,'normal');
		editsMantCueNumCuenta.setValidEmpty();
        editsMantCueNumCuenta.setSizeEdit(207);
		editsMantCueNumCuenta.setMaxLength(80); 
		pcbMantCueBanEstado = powerComboBox.create('pcbMantCueBanEstado', 'pcbMantCueBanEstado','Estado:', 1,52);
		pcbMantCueBanEstado.enableReadOnlyEditor();
		pcbMantCueBanEstado.addEmptyOption();
		pcbMantCueBanEstado.setValidEmpty();
		pcbMantCueBanEstado.setWidthCombo(70);
		pcbMantCueBanEstado.addOptionAndSimpleValue(null, 'ACTIVO', 'ACTIVO');
		pcbMantCueBanEstado.addOptionAndSimpleValue(null, 'INACTIVO', 'INACTIVO');
		pcbMantCueBanEstado.setDataType('string');
		gridsMantCueBancarias = grids.create('gridsMantCueBancarias',10,8);
		imgButtonsMantCueBanAgregar = imgButtons.create('imgButtonsMantCueBanAgregar','Agregar','ok.png');
		imgButtonsMantCueBanModificar = imgButtons.create('imgButtonsMantCueBanModificar','Modificar','icono_modificar.png');
		imgButtonsMantCueBanModificar.setDisable();
		imgButtonsMantCueBanEliminar = imgButtons.create('imgButtonsMantCueBanEliminar','Eliminar','eliminar.jpg');
		imgButtonsMantCueBanEliminar.setDisable();
		imgButtonsMantCueBanLimpiar = imgButtons.create('imgButtonsMantCueBanLimpiar','Limpiar','limpiar.png');
		imgButtonsMantCueBanSalir = imgButtons.create('imgButtonsMantCueBanSalir','Salir','salir.png');
        imgButtonsMantCueBanAgregar.setDimension(90,22);
        imgButtonsMantCueBanModificar.setDimension(90,22);
        imgButtonsMantCueBanEliminar.setDimension(90,22);
        imgButtonsMantCueBanLimpiar.setDimension(90,22);
        imgButtonsMantCueBanSalir.setDimension(90,22);
	},

	init : function() {
	    this.create();
	    this.setEvents();
	    this.dialogsMantCueBancarias_Init();
	    this.gridsMantCueBancarias_Init();
		this.createMWs(); 
	},
	
  	setData : function() {
		if (gridsMantCueBancarias.getDataCell(1) != "") {
			pcbMantCueOrg.findOption(gridsMantCueBancarias.getDataCell(5));
			editsMantCueBanCodBanco.setValue(gridsMantCueBancarias.getDataCell(2));
            editsMantCueBanBanco.setValue(gridsMantCueBancarias.getDataCell(3));
            pcbMantCueBanco.findOption(gridsMantCueBancarias.getDataCell(8));
            editsMantCueNumCuenta.setValue(gridsMantCueBancarias.getDataCell(4));
			editsMantCueBanBanco.hideId = gridsMantCueBancarias.getDataCell(6)
			pcbMantCueBanEstado.findOption(gridsMantCueBancarias.getDataCell(7));
			imgButtonsMantCueBanAgregar.setDisable();
			imgButtonsMantCueBanModificar.setEnable();
			imgButtonsMantCueBanEliminar.setEnable();
		}     			
	},
  	
  	setEvents : function() {
  		gridsMantCueBancarias.onClickCells(this.windowName + ".setData()");
    	imgButtonsMantCueBanAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
		imgButtonsMantCueBanModificar.onClick(this.windowName + ".coreUpdate('modificar')");
		imgButtonsMantCueBanEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
  		imgButtonsMantCueBanLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsMantCueBanSalir.onClick('dialogsMantCueBancarias.close()');
  	},
	
  	limpiar : function() {
  		editsMantCueBanCodBanco.setValue("");
  		editsMantCueBanBanco.hideId = -1;
  		editsMantCueBanBanco.setValue("");
  		pcbMantCueBanco.clear();
  		editsMantCueNumCuenta.setValue("");
  		pcbMantCueBanEstado.setSelectedIndex(0);
		gridsMantCueBancarias.clean();
		imgButtonsMantCueBanAgregar.setEnable();
		imgButtonsMantCueBanModificar.setDisable();
		imgButtonsMantCueBanEliminar.setDisable();
  		dialogsMantCueBancarias.setMsg("");
        Tool.cnnSrv('MantObject', 'getMantOrganizacion', this.windowName + '.loadDataInit()');
    },

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsMantCueBancarias, pcbMantCueOrg, 0, 1, json('getData'));
    	Tool.getGridData('MantObject', 'getMantCueBancarias', dialogsMantCueBancarias, gridsMantCueBancarias, this.windowName + '.loadDataBco()');
  		pcbMantCueOrg.setSelectedIndex(1);
    },
  	
    loadDataBco: function() {
		Tool.getPowerComboData('MantObject', 'getBancoOrigen', dialogsMantCueBancarias, pcbMantCueBanco, 0, 1);
    },
    
  	limpiarCoreUpdate : function(methodName) {
  		editsMantCueBanCodBanco.setValue("");
  		editsMantCueBanBanco.hideId = -1;
  		editsMantCueBanBanco.setValue("");
  		editsMantCueNumCuenta.setValue("");
		imgButtonsMantCueBanAgregar.setEnable();
		imgButtonsMantCueBanModificar.setDisable();
		imgButtonsMantCueBanEliminar.setDisable();

  		if (methodName == "eliminar" && gridsMantCueBancarias.getTotalRecord() == 1) { 
  			gridsMantCueBancarias.clean();
			dlgWait.hide();
		}
		else
			Tool.getGridData('MantObject', 'getMantCueBancarias', dialogsMantCueBancarias, gridsMantCueBancarias, false);
  	},

  	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");
		
		if (pcbMantCueOrg.valid(dialogsMantCueBancarias))
			if (editsMantCueBanCodBanco.valid(dialogsMantCueBancarias))
				if (editsMantCueBanBanco.valid(dialogsMantCueBancarias))
					if (pcbMantCueBanco.valid(dialogsMantCueBancarias))
						if (editsMantCueNumCuenta.valid(dialogsMantCueBancarias)) 
							if (pcbMantCueBanEstado.valid(dialogsMantCueBancarias)) {
								if (methodName == 'eliminar') 
									rlx.addInt('reg', editsMantCueBanBanco.hideId);
								else {
									rlx.add('reg',pcbMantCueOrg);
									rlx.add('reg',editsMantCueBanCodBanco);
									rlx.add('reg',editsMantCueBanBanco);
									rlx.add('reg',editsMantCueNumCuenta);
								 	rlx.add('reg',pcbMantCueBanEstado);
								 	rlx.add('reg',pcbMantCueBanco);
								 	if (methodName == 'modificar') rlx.addInt('reg', editsMantCueBanBanco.hideId);
								}
								Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
							}
	}
};