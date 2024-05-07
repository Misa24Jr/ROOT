var dialogsMantPerfil = new Object();
var editsMantPerDescripcion = new Object();
var editsMantPerDurSesion = new Object();
var powerComboBoxMantPerEstado = new Object();
var powerComboBoxMantPerModulo = new Object();
var powerComboBoxMantPerTiPers = new Object();
var gridsMantPerfil = new Object();
var imgButtonsMantPerAgregar = new Object();
var imgButtonsMantPerModificar = new Object();
var imgButtonsMantPerEliminar = new Object();
var imgButtonsMantPerLimpiar = new Object();
var imgButtonsMantPerSalir = new Object();
var mwMantPais = new Object();// minWindow

var MantPerfil = {
	windowName : 'MantPerfil',
	isCreate : false,
	idPerfil : 0,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantPerfil.isByClean())
 			this.limpiar();			
		dialogsMantPerfil.show();
	},
	hide : function() {
		dialogsMantPerfil.hide();
	},
	createMWs : function() {
        	mwMantPerfil = desktop.addMinWindow('M.Perfil', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantPerfil.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantPerfil_Init : function() {
		dialogsMantPerfil.setMinimizeXY(0,0);
        dialogsMantPerfil.setCenterScreen();
        dialogsMantPerfil.addSpace(0,0,20);
        dialogsMantPerfil.addLn(1,1,1);
		dialogsMantPerfil.setHeightCell(1,1,10);
		dialogsMantPerfil.addObjToDialog(editsMantPerDescripcion,2,1,24);
        editsMantPerDescripcion.setSizeEdit(428);
        editsMantPerDescripcion.setMaxLength(50); 
		dialogsMantPerfil.addObjToDialog(editsMantPerDurSesion,3,1,24);
        editsMantPerDurSesion.setSizeEdit(80);
        editsMantPerDurSesion.setMaxLength(20); 
		dialogsMantPerfil.addObjToDialog(powerComboBoxMantPerEstado,3,1,24);
		powerComboBoxMantPerEstado.setWidthCombo(160);
		powerComboBoxMantPerEstado.addOptionAndSimpleValue(null,'ACTIVO','ACTIVO');
        powerComboBoxMantPerEstado.addOptionAndSimpleValue(null,'INACTIVO','INACTIVO');
		dialogsMantPerfil.adjAllMarginObj(3,1,113);
		dialogsMantPerfil.addObjToDialog(powerComboBoxMantPerTiPers,4,1,24);
		powerComboBoxMantPerModulo.setWidthCombo(160);
		dialogsMantPerfil.addObjToDialog(powerComboBoxMantPerModulo,4,1,24);
		powerComboBoxMantPerTiPers.setWidthCombo(160);
		dialogsMantPerfil.adjAllMarginObj(4,1,12);
        dialogsMantPerfil.addLn(6,1,1);
		dialogsMantPerfil.setHeightCell(6,1,10);
        dialogsMantPerfil.addObjToDialog(gridsMantPerfil.getObject(),7,1);
        dialogsMantPerfil.addLn(8,1,1);
		dialogsMantPerfil.setHeightCell(8,1,10);
		dialogsMantPerfil.setHeightCell(8,1,12);  
        dialogsMantPerfil.addObjToDialog(imgButtonsMantPerAgregar,9,1);
        dialogsMantPerfil.addObjToDialog(imgButtonsMantPerModificar,9,1);
        dialogsMantPerfil.addObjToDialog(imgButtonsMantPerEliminar,9,1);
        dialogsMantPerfil.addObjToDialog(imgButtonsMantPerLimpiar,9,1);
        dialogsMantPerfil.addObjToDialog(imgButtonsMantPerSalir,9,1); 
        imgButtonsMantPerAgregar.setDimension(90,22);
        imgButtonsMantPerModificar.setDimension(90,22);
        imgButtonsMantPerEliminar.setDimension(90,22);
        imgButtonsMantPerLimpiar.setDimension(90,22);
        imgButtonsMantPerSalir.setDimension(90,22);
        dialogsMantPerfil.adjAllMarginObj(9,1,20);
        dialogsMantPerfil.leftMarginObj(9,1,0,32);
	},
  
	gridsMantPerfil_Init : function() {
        gridsMantPerfil.setFixColRow(false,true);
        gridsMantPerfil.addTitleVectorX(['Id','Descripción','Duración (min)','Estado']);
        gridsMantPerfil.showData();        
        gridsMantPerfil.setSizeCol(1,5);
        gridsMantPerfil.setSizeCol(2,410);
		gridsMantPerfil.setSizeCol(3,112);
		gridsMantPerfil.setSizeCol(4,70);
		gridsMantPerfil.hideCol(1);
	},

	create : function() {
		dialogsMantPerfil = dialogs.create('dialogsMantPerfil',0,0,637,343,'PERFIL');
		dialogsMantPerfil.setAdjY(10);
		editsMantPerDescripcion = edits.create('editsMantPerDescripcion','MatPerDescripcion','Descripción:',1,167,'normal');
		editsMantPerDescripcion.setValidEmpty();
		editsMantPerDurSesion = edits.create('editsMantPerDurSesion','editsMantPerDurSesion','Duración de la Sesión (min):',1,167,'normal');
		editsMantPerDurSesion.setValidEmpty();
		powerComboBoxMantPerEstado = powerComboBox.create('powerComboBoxMantPerEstado', 'powerComboBoxMantPerEstado', 'Estado:', 1,53);
		powerComboBoxMantPerEstado.setValidEmpty();
		powerComboBoxMantPerEstado.addEmptyOption();
		powerComboBoxMantPerEstado.enableReadOnlyEditor();
		powerComboBoxMantPerEstado.setDataType('string');
		powerComboBoxMantPerModulo = powerComboBox.create('powerComboBoxMantPerModulo', 'powerComboBoxMantPerModulo', 'Modulo:', 1,53);
		powerComboBoxMantPerModulo.setValidEmpty();
		powerComboBoxMantPerModulo.addEmptyOption();
		powerComboBoxMantPerModulo.enableReadOnlyEditor();
		powerComboBoxMantPerModulo.setTypeObjOpt('input', 'checkbox');
		powerComboBoxMantPerModulo.setFirstRowCheckMode(2);
		powerComboBoxMantPerTiPers = powerComboBox.create('powerComboBoxMantPerTiPers', 'powerComboBoxMantPerTiPers', 'Tipo de Persona:', 1,167);
		powerComboBoxMantPerTiPers.setValidEmpty();
		powerComboBoxMantPerTiPers.addEmptyOption();
		powerComboBoxMantPerTiPers.enableReadOnlyEditor();
		powerComboBoxMantPerTiPers.setTypeObjOpt('input', 'checkbox');
		powerComboBoxMantPerTiPers.setFirstRowCheckMode(2);
		gridsMantPerfil = grids.create('gridsMantPerfil',8,4);
		imgButtonsMantPerAgregar = imgButtons.create('imgButtonsMantPerAgregar','Agregar','ok.png');
		imgButtonsMantPerModificar = imgButtons.create('imgButtonsMantPerModificar','Modificar','icono_modificar.png');
		imgButtonsMantPerModificar.setDisable();
		imgButtonsMantPerEliminar = imgButtons.create('imgButtonsMantPerEliminar','Eliminar','eliminar.png');
		imgButtonsMantPerEliminar.setDisable();
		imgButtonsMantPerLimpiar = imgButtons.create('imgButtonsMantPerLimpiar','Limpiar','limpiar.png');
		imgButtonsMantPerSalir = imgButtons.create('imgButtonsMantPerSalir','Salir','salir.png');
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsMantPerfil_Init();
		this.gridsMantPerfil_Init();
		this.createMWs();		
	},

  	limpiar : function() {
  		editsMantPerDescripcion.setValue("");
		editsMantPerDurSesion.setValue("");
		powerComboBoxMantPerEstado.setSelectedIndex(0);
  		gridsMantPerfil.clean();
  		dialogsMantPerfil.setMsg("");
		imgButtonsMantPerAgregar.setEnable();
		imgButtonsMantPerModificar.setDisable();
		imgButtonsMantPerEliminar.setDisable();	
		Tool.cnnSrv('SecurityObject', 'getMantPerfilInit', this.windowName + '.loadDataInit()');
  	},
  	
    loadDataInit: function() {
        Tool.loadPowerComboData(dialogsMantPerfil, powerComboBoxMantPerModulo, 0, 1, json('getModulo'));
        Tool.loadPowerComboData(dialogsMantPerfil, powerComboBoxMantPerTiPers, 0, 1, json('getMantTipPersona'));
        Tool.loadGridData(dialogsMantPerfil, gridsMantPerfil, false, json('getMantPerfil'));
        dialogsMantPerfil.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

  	setData : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (gridsMantPerfil.getDataCell(1) != "") {
			idPerfil = gridsMantPerfil.getDataCell(1);
	        editsMantPerDescripcion.setValue(gridsMantPerfil.getDataCell(2));
			editsMantPerDurSesion.setValue(gridsMantPerfil.getDataCell(3));
			powerComboBoxMantPerEstado.findOption(gridsMantPerfil.getDataCell(4));
	        imgButtonsMantPerAgregar.setDisable();
			imgButtonsMantPerModificar.setEnable();
			imgButtonsMantPerEliminar.setEnable();
			rlx.addInt('reg', idPerfil);
			Tool.cnnSrv('SecurityObject', 'getMantPerfilTipoPers', this.windowName + '.loadTipoPers()', rlx);
        }     			
	},
  	
    loadTipoPers: function(){
		var rlx = xmlStructs.createRecordList("rlx");

		powerComboBoxMantPerTiPers.setCheckEnable(json('getMantPerfilTipoPers').data[0]);
		rlx.addInt('reg', idPerfil);
		Tool.cnnSrv('SecurityObject', 'getMantPerfilModulo', this.windowName + '.loadModulo()', rlx);
	},

    loadModulo: function(){
		powerComboBoxMantPerModulo.setCheckEnable(json('getMantPerfilModulo').data[0]);
		dlgWait.hide();
	},

	setEvents : function() {
  		gridsMantPerfil.onClickCells(this.windowName+".setData()");
  		imgButtonsMantPerAgregar.onClick(this.windowName+".coreUpdate('agregar')");
  		imgButtonsMantPerModificar.onClick(this.windowName+".coreUpdate('modificar')");
  		imgButtonsMantPerEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
  		imgButtonsMantPerLimpiar.onClick('MantPerfil.limpiar()');
  		imgButtonsMantPerSalir.onClick('dialogsMantPerfil.close()');	  	 	
    },
    
	coreUpdate : function(methodName) {
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == 'eliminar') {
			if (editsMantPerDescripcion.valid(dialogsMantPerfil)) {
				rlx.addInt('reg', idPerfil);
				procesar = true;
			}
		}
		else {
			if (editsMantPerDescripcion.valid(dialogsMantPerfil))  					
				if (editsMantPerDurSesion.valid(dialogsMantPerfil)) 
					if (powerComboBoxMantPerEstado.valid(dialogsMantPerfil)) 
						if (powerComboBoxMantPerTiPers.valid(dialogsMantPerfil)) 
							if (powerComboBoxMantPerModulo.valid(dialogsMantPerfil)) {
								rlx.add('reg', editsMantPerDescripcion);
								rlx.add('reg', powerComboBoxMantPerEstado);
								rlx.add('reg', editsMantPerDurSesion);
								rlx.add('reg', powerComboBoxMantPerTiPers);
								rlx.add('reg', powerComboBoxMantPerModulo);
								if (methodName == 'modificar') rlx.addInt('reg', idPerfil);
								procesar = true;		
							} 
		}
		if (procesar) {            
			Tool.cnnSrv('SecurityObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
	}
};