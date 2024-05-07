var dialogsConcGastos = new Object();
var pcbConcGasLugar = new Object();
var ConcGasConcepto = new Object();
var gridsConcGastos = new Object();
var imgButtonsConcGasAgregar = new Object();
var imgButtonsConcGasModificar = new Object();
var imgButtonsConcGasEliminar = new Object();
var imgButtonsConcGasLimpiar = new Object();
var imgButtonsConcGasBuscar = new Object();
var imgButtonsConcGasSalir = new Object();
var mwConcGastos = new Object();// minWindow

var ConcGastos = {
	windowName : 'ConcGastos',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
		  this.init();
		  this.isCreate = true;
		}

		if (dialogsConcGastos.isByClean())
 			//this.limpiar();			
		dialogsConcGastos.show();
	},
	
	hide : function() {
		dialogsConcGastos.hide();
	},
	
	createMWs : function() {
        	mwConcGastos  = desktop.addMinWindow('M.Banco', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsConcGastos .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsConcGastos_Init : function() {
        dialogsConcGastos.setMinimizeXY(0,0);
        dialogsConcGastos.setCenterScreen();
        dialogsConcGastos.addSpace(0,0,20);
        dialogsConcGastos.addLn(1,1,1);
		dialogsConcGastos.setHeightCell(1,1,10);
		dialogsConcGastos.addObjToDialog(pcbConcGasLugar,2,1,24);
		pcbConcGasLugar.setWidthCombo(260);
        dialogsConcGastos.addObjToDialog(ConcGasConcepto,3,1,24);
        ConcGasConcepto.setSizeEdit(601);
		ConcGasConcepto.setMaxLength(130); 
        dialogsConcGastos.addLn(4,1,1);
		dialogsConcGastos.setHeightCell(4,1,8);
        dialogsConcGastos.addObjToDialog(gridsConcGastos.getObject(),5,1);
        dialogsConcGastos.addLn(6,1,1);
		dialogsConcGastos.setHeightCell(6,1,8);
        dialogsConcGastos.addObjToDialog(imgButtonsConcGasAgregar,7,1);
        dialogsConcGastos.addObjToDialog(imgButtonsConcGasModificar,7,1);
        dialogsConcGastos.addObjToDialog(imgButtonsConcGasEliminar,7,1);
        dialogsConcGastos.addObjToDialog(imgButtonsConcGasLimpiar,7,1);
        dialogsConcGastos.addObjToDialog(imgButtonsConcGasBuscar,7,1);
        dialogsConcGastos.addObjToDialog(imgButtonsConcGasSalir,7,1);       
        imgButtonsConcGasAgregar.setDimension(90,22);
        imgButtonsConcGasModificar.setDimension(90,22);
        imgButtonsConcGasEliminar.setDimension(90,22);
        imgButtonsConcGasLimpiar.setDimension(90,22);
        imgButtonsConcGasBuscar.setDimension(90,22);
        imgButtonsConcGasSalir.setDimension(90,22);
        dialogsConcGastos.adjAllMarginObj(7,1,18);
        dialogsConcGastos.leftMarginObj(7,1,0,19);
	},
  
	gridsConcGastos_Init : function()  {
        gridsConcGastos.setFixColRow(false,true);
        gridsConcGastos.addTitleVectorX(['Lugar','Concepto']);
        gridsConcGastos.showData();     
        gridsConcGastos.setSizeCol(1,246);
        gridsConcGastos.setSizeCol(2,430);       
        //gridsConcGastos.hideCol(2);
	},

	create : function() {
		dialogsConcGastos = dialogs.create('dialogsConcGastos',0,0,720,350,'CONCEPTO DE GASTOS');
		pcbConcGasLugar = powerComboBox.create('pcbConcGasLugar','pcbConcGasLugar','Lugar (+):',1,77);
    	pcbConcGasLugar.enableReadOnlyEditor();
    	pcbConcGasLugar.addEmptyOption();
    	pcbConcGasLugar.setValidEmpty();
		ConcGasConcepto = edits.create('ConcGasConcepto','ConcGasConcepto','Concepto:',3,75,'normal');
		ConcGasConcepto.setValidEmpty();
		gridsConcGastos = grids.create('gridsConcGastos',10,2);
		imgButtonsConcGasAgregar = imgButtons.create('imgButtonsConcGasAgregar','Agregar','ok.png');
		imgButtonsConcGasModificar = imgButtons.create('imgButtonsConcGasModificar','Modificar','icono_modificar.png');
		imgButtonsConcGasModificar.setDisable();
		imgButtonsConcGasEliminar = imgButtons.create('imgButtonsConcGasEliminar','Eliminar','eliminar.jpg');
		imgButtonsConcGasEliminar.setDisable();
		imgButtonsConcGasLimpiar = imgButtons.create('imgButtonsConcGasLimpiar','Limpiar','limpiar.png');
		imgButtonsConcGasBuscar = imgButtons.create('imgButtonsConcGasBuscar','Buscar','icono_buscar.png');
		imgButtonsConcGasSalir = imgButtons.create('imgButtonsConcGasSalir','Salir','salir.png');
	},

	init : function() {
	    this.create();
	    this.setEvents();
	    this.dialogsConcGastos_Init();
	    this.gridsConcGastos_Init();
		this.createMWs(); 
	},

  	setData : function() {
		if (gridsConcGastos.getDataCell(1) != "") {
            ConcGasConcepto.setValue(gridsConcGastos.getDataCell(1));
            ConcGasConcepto.hideId = gridsConcGastos.getDataCell(2)
			imgButtonsConcGasAgregar.setDisable();
			imgButtonsConcGasModificar.setEnable();
			imgButtonsConcGasEliminar.setEnable();
		}     			
	},
  	
  	setEvents : function() {
  		gridsConcGastos.onClickCells(this.windowName + ".setData()");
    	imgButtonsConcGasAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
		imgButtonsConcGasModificar.onClick(this.windowName + ".coreUpdate('modificar')");
		imgButtonsConcGasEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
  		imgButtonsConcGasLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsConcGasSalir.onClick('dialogsConcGastos.close()');
  	},
	
  	limpiar : function(methodName) {
  		ConcGasConcepto.hideId = '';
  		ConcGasConcepto.setValue("");
  		dialogsConcGastos.setMsg("");
		imgButtonsConcGasAgregar.setEnable();
		imgButtonsConcGasModificar.setDisable();
		imgButtonsConcGasEliminar.setDisable();

		if (methodName == "eliminar" && gridsConcGastos.getTotalRecord() == 1) { 
			gridsConcGastos.clean();
			dlgWait.hide();
		}
		else 
			Tool.getGridData("MantObject", "get" + this.windowName, dialogsConcGastos, gridsConcGastos, false);
  	},
  	
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (ConcGasConcepto.valid(dialogsConcGastos)) {
			if (methodName == 'eliminar') 
				rlx.addInt('reg', ConcGasConcepto.hideId);
			else {
			 	rlx.add('reg',ConcGasConcepto);
			 	if (methodName == 'modificar') rlx.addInt('reg', ConcGasConcepto.hideId);
			}
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiar('" + methodName + "')", rlx);
		}
	}
};