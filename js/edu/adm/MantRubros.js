var dialogsMantRubros = new Object();
var pcbMantRubConcenpto = new Object();
var editsMantRubRubro = new Object();
var editsMantRubMonto = new Object();
var gridsMantRubros = new Object();
var imgButtonsReprAgregar = new Object();
var imgButtonsReprModificar = new Object();
var imgButtonsReprEliminar = new Object();
var imgButtonsReprLimpiar = new Object();
var imgButtonsReprBuscar = new Object();
var imgButtonsReprSalir = new Object();
var mwMantRubros = new Object();// minWindow

var MantRubros = {
	windowName : 'MantRubros',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
		  this.init();
		  this.isCreate = true;
		}

		if (dialogsMantRubros.isByClean())
 			this.limpiar();			
		dialogsMantRubros.show();
	},
	
	hide : function() {
		dialogsMantRubros.hide();
	},
	
	createMWs : function() {
        	mwMantRubros  = desktop.addMinWindow('MantRubros', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantRubros .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsMantRubros_Init : function() {
        dialogsMantRubros.setMinimizeXY(0,0);
        dialogsMantRubros.setCenterScreen();
        dialogsMantRubros.addObject(pcbMantRubConcenpto,20,38);
		dialogsMantRubros.addObject(editsMantRubRubro, 20,63);
		dialogsMantRubros.addObject(editsMantRubMonto, 326,63);
		dialogsMantRubros.addObject(gridsMantRubros.getObject(),20,90);
		dialogsMantRubros.addObject(imgButtonsReprAgregar,27,440);
		dialogsMantRubros.addObject(imgButtonsReprModificar,137,440);
		dialogsMantRubros.addObject(imgButtonsReprEliminar,247,440);
		dialogsMantRubros.addObject(imgButtonsReprLimpiar,357,440);
        dialogsMantRubros.addObject(imgButtonsReprBuscar,467,440);
        dialogsMantRubros.addObject(imgButtonsReprSalir,577,440);
	},
  
	gridsMantRubros_Init : function()  {
		gridsMantRubros.setFixColRow(false,true);
        gridsMantRubros.addTitleVectorX(['Concepto','Rubro','Monto','idConcep','idRubro']);
        gridsMantRubros.showData();  
        gridsMantRubros.setSizeCol(1,250);
        gridsMantRubros.setSizeCol(2,350);
        gridsMantRubros.setSizeCol(3,55);
        gridsMantRubros.setSizeCol(4,0);      
        gridsMantRubros.setSizeCol(5,0);      
        gridsMantRubros.hideCol(4);
        gridsMantRubros.hideCol(5);
	},

	create : function() {
		dialogsMantRubros = dialogs.create('dialogsMantRubros',0,0,700,450,'RUBRO DEL CONCEPTO');
		pcbMantRubConcenpto = powerComboBox.create('pcbMantRubConcenpto', 'pcbMantRubConcenpto', 'Concepto (*):', 1,78);
		pcbMantRubConcenpto.enableReadOnlyEditor();
		pcbMantRubConcenpto.setFieldFind(true);
		pcbMantRubConcenpto.addEmptyOption();
		pcbMantRubConcenpto.setValidEmpty();
		editsMantRubRubro = edits.create('editsMantRubRubro','editsMantRubRubro','Rubro (*):',1,78,'normal');
		editsMantRubRubro.setFieldFind(true);
		editsMantRubRubro.setValidEmpty();
  		editsMantRubRubro.hideId = '';
		editsMantRubMonto = edits.create('editsMantRubMonto','editsMantRubMonto','Monto:',1,42,'normal');
		editsMantRubMonto.setValidReal();
		gridsMantRubros = grids.create('gridsMantRubros',15,5);
		imgButtonsReprAgregar = imgButtons.create('imgButtonsReprAgregar','Agregar','ok.png');
		imgButtonsReprModificar = imgButtons.create('imgButtonsReprModificar','Modificar','icono_modificar.png');
		imgButtonsReprEliminar = imgButtons.create('imgButtonsReprEliminar','Eliminar','eliminar.jpg');
		imgButtonsReprLimpiar = imgButtons.create('imgButtonsReprLimpiar','Limpiar','limpiar.png');
		imgButtonsReprBuscar = imgButtons.create('imgButtonsReprBuscar','Buscar','icono_buscar.png');
		imgButtonsReprSalir = imgButtons.create('imgButtonsReprSalir','Salir','salir.png');
        pcbMantRubConcenpto.setWidthCombo(300);
		editsMantRubRubro.setSizeEdit(220);
		editsMantRubRubro.setMaxLength(200);
		editsMantRubMonto.setSizeEdit(50);
        imgButtonsReprAgregar.setDimension(94,22);
        imgButtonsReprModificar.setDimension(94,22);
        imgButtonsReprEliminar.setDimension(94,22);
        imgButtonsReprLimpiar.setDimension(94,22);
        imgButtonsReprBuscar.setDimension(94,22);
        imgButtonsReprSalir.setDimension(94,22);
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsMantRubros_Init();
		this.gridsMantRubros_Init();
		this.createMWs(); 
	},
	
  	setData : function() {
		if (gridsMantRubros.getDataCell(1) != "") {
			pcbMantRubConcenpto.findOption(gridsMantRubros.getDataCell(4));
			editsMantRubRubro.setValue(gridsMantRubros.getDataCell(2));
			editsMantRubMonto.setValue(gridsMantRubros.getDataCell(3));
			editsMantRubRubro.hideId = gridsMantRubros.getDataCell(5)
			imgButtonsReprAgregar.setDisable();
            imgButtonsReprModificar.setEnable();
            imgButtonsReprEliminar.setEnable();
		}     			
	},

	buscar : function() {
		gridsMantRubros.clean();
		Tool.getGridData("MantObject", "get" + this.windowName, dialogsMantRubros, gridsMantRubros, false, editsMantRubRubro, editsMantRubRubro, pcbMantRubConcenpto, pcbMantRubConcenpto);
	},
	
	setEvents : function() {
		editsMantRubRubro.onEnter(this.windowName + ".buscar()");
		gridsMantRubros.onClickCells(this.windowName + ".setData()");
    	imgButtonsReprAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
		imgButtonsReprModificar.onClick(this.windowName + ".coreUpdate('modificar')");
		imgButtonsReprEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
		imgButtonsReprBuscar.onClick(this.windowName + ".buscar()");
		imgButtonsReprLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsReprSalir.onClick('dialogsMantRubros.close()');
  	},
  	
  	limpiar : function() {
  		pcbMantRubConcenpto.setSelectedIndex(0);
  		editsMantRubRubro.hideId = '';
  		editsMantRubRubro.setValue("");
  		editsMantRubMonto.setValue("");
  		gridsMantRubros.clean();
  		dialogsMantRubros.setMsg("");
		imgButtonsReprAgregar.setEnable();
		imgButtonsReprModificar.setDisable();
		imgButtonsReprEliminar.setDisable();
		Tool.getPowerComboData('MantObject', 'getConceptoNoFinanciado', dialogsMantRubros, pcbMantRubConcenpto, 0, 1)
	},
  	
  	limpiarCoreUpdate : function(methodName) {
  		editsMantRubRubro.hideId = '';
  		editsMantRubRubro.setValue("");
  		editsMantRubMonto.setValue("");
		imgButtonsReprAgregar.setEnable();
		imgButtonsReprModificar.setDisable();
		imgButtonsReprEliminar.setDisable();

  		if (methodName == "eliminar" && gridsMantRubros.getTotalRecord() == 1) { 
  			gridsMantRubros.clean();
			dlgWait.hide();
		}
		else
			this.buscar();
  	},
  	
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbMantRubConcenpto.valid(dialogsMantRubros)) 
			if (editsMantRubRubro.valid(dialogsMantRubros)) 
				if (editsMantRubMonto.valid(dialogsMantRubros)) {
					if (methodName == 'eliminar') { 
						rlx.addInt('reg', editsMantRubRubro.hideId);
						rlx.add('reg', pcbMantRubConcenpto);
					}
					else {
						rlx.add('reg', editsMantRubRubro);
						rlx.add('reg', editsMantRubMonto);
						rlx.add('reg', pcbMantRubConcenpto);
					 	if (methodName == 'modificar') 
					 		rlx.addInt('reg', editsMantRubRubro.hideId);
					}
					Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
				}
	}
};