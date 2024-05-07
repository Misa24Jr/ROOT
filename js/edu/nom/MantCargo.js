var dialogsMantCargo = new Object();
var editsMantCarId = new Object();
var editsMantCarDescripcion = new Object();
var powerComboBoxMantCarCalCargo = new Object();
var powerComboBoxMantCarModPago = new Object();
var powerComboBoxMantCarEstCargo = new Object();
var gridsMantCarIdDesClaModEst = new Object();
var imgButtonsMantCarAgregar = new Object();
var imgButtonsMantCarModificar = new Object();
var imgButtonsMantCarEliminar = new Object();
var imgButtonsMantCarLimpiar = new Object();
var imgButtonsMantCarBuscar = new Object();
var imgButtonsMantCarSalir = new Object();
var mwMantCargo  = new Object();// minWindow
var MantCargo = {
	windowName : 'MantCargo',
	isCreate : false,
	
	show : function() 
	{
		if (!this.isCreate)
		{
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantCargo.isByClean())
 			this.limpiar();			
		dialogsMantCargo.show();
	},
	hide : function() 
	{
		dialogsMantCargo.hide();
	},
	createMWs : function(){
        	mwMantCargo = desktop.addMinWindow('M.Cargo', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantCargo.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
    dialogsMantCargo_Init : function(){
        dialogsMantCargo.setMinimizeXY(0,0);
        dialogsMantCargo.setCenterScreen();
        dialogsMantCargo.addSpace(1,0,20);
        dialogsMantCargo.addLn(1,1,1);
		dialogsMantCargo.setHeightCell(1,1,10);
        dialogsMantCargo.addObjToDialog(editsMantCarId,2,1,24);
        editsMantCarId.setSizeEdit(70);
        dialogsMantCargo.addObjToDialog(powerComboBoxMantCarCalCargo,3,1,24);
		dialogsMantCargo.addObjToDialog(editsMantCarDescripcion,3,1,24);
        editsMantCarDescripcion.setSizeEdit(149);
		editsMantCarDescripcion.setMaxLength(50); 
        dialogsMantCargo.adjAllMarginObj(3,1,20);
        dialogsMantCargo.addObjToDialog(powerComboBoxMantCarEstCargo,4,1,24);
		dialogsMantCargo.addObjToDialog(powerComboBoxMantCarModPago,4,1,24);
        dialogsMantCargo.adjAllMarginObj(4,1,20);
        dialogsMantCargo.addLn(5,1,1);
		dialogsMantCargo.setHeightCell(5,1,10);
        dialogsMantCargo.addObjToDialog(gridsMantCarIdDesClaModEst.getObject(),6,1);
        dialogsMantCargo.addLn(7,1,1);
		dialogsMantCargo.setHeightCell(7,1,12);
        dialogsMantCargo.addObjToDialog(imgButtonsMantCarAgregar,8,1);
        dialogsMantCargo.addObjToDialog(imgButtonsMantCarModificar,8,1);
        dialogsMantCargo.addObjToDialog(imgButtonsMantCarEliminar,8,1);
        dialogsMantCargo.addObjToDialog(imgButtonsMantCarLimpiar,8,1);
        dialogsMantCargo.addObjToDialog(imgButtonsMantCarBuscar,8,1);
        dialogsMantCargo.addObjToDialog(imgButtonsMantCarSalir,8,1);
        imgButtonsMantCarAgregar.setDimension(90,22);
        imgButtonsMantCarModificar.setDimension(90,22);
        imgButtonsMantCarEliminar.setDimension(90,22);
        imgButtonsMantCarLimpiar.setDimension(90,22);
        imgButtonsMantCarBuscar.setDimension(90,22);
        imgButtonsMantCarSalir.setDimension(90,22);
        dialogsMantCargo.adjAllMarginObj(8,1,20);
        dialogsMantCargo.leftMarginObj(8,1,0,19);
  },
  
  gridsMantCarIdDesClaModEst_Init : function(){
        gridsMantCarIdDesClaModEst.setFixColRow(false,true);
        gridsMantCarIdDesClaModEst.addTitleVectorX(['Código','Descripción','Clase de Cargo','Modo de Pago','Estado del Cargo']);
        gridsMantCarIdDesClaModEst.showData();
        gridsMantCarIdDesClaModEst.setReadOnlyToAll();
        gridsMantCarIdDesClaModEst.setSizeCol(1,80);
        gridsMantCarIdDesClaModEst.setSizeCol(2,246);
        gridsMantCarIdDesClaModEst.setSizeCol(3,120);
        gridsMantCarIdDesClaModEst.setSizeCol(4,120);
        gridsMantCarIdDesClaModEst.setSizeCol(5,116);
  },

  create : function(){
      dialogsMantCargo = dialogs.create('dialogsMantCargo',0,0,730,382,'MANTENIMIENTO DE CARGO');
      editsMantCarId = edits.create('editsMantCarId','editsMantCarId','Código:',1,116,'normal');
      editsMantCarId.setValidInteger();
      editsMantCarId.setValidEmpty();
      editsMantCarDescripcion = edits.create('editsMantCarDescripcion','editsMantCarDescripcion','Descripción:',1,110,'normal');
      editsMantCarDescripcion.setValidEmpty();
      powerComboBoxMantCarCalCargo = powerComboBox.create('powerComboBoxMantCarCalCargo','powerComboBoxMantCarCalCargo','Clase de Cargo (*):',1,116);
      powerComboBoxMantCarCalCargo.setValidEmpty();
      powerComboBoxMantCarCalCargo.enableReadOnlyEditor();
      powerComboBoxMantCarCalCargo.addEmptyOption();
      powerComboBoxMantCarModPago = powerComboBox.create('powerComboBoxMantCarModPago','powerComboBoxMantCarModPago','Modo de Pago (*):',1,110);
      powerComboBoxMantCarModPago.setValidEmpty();
      powerComboBoxMantCarModPago.enableReadOnlyEditor();
      powerComboBoxMantCarModPago.addEmptyOption();      
      powerComboBoxMantCarEstCargo = powerComboBox.create('powerComboBoxMantCarEstCargo','powerComboBoxMantCarEstCargo','Estado del Cargo:',1,116);
      powerComboBoxMantCarEstCargo.setValidEmpty();
      powerComboBoxMantCarEstCargo.enableReadOnlyEditor();
      powerComboBoxMantCarEstCargo.addEmptyOption();            
      gridsMantCarIdDesClaModEst = grids.create('gridsMantCarIdDesClaModEst',10,5);
      imgButtonsMantCarAgregar = imgButtons.create('imgButtonsMantCarAgregar','Agregar','ok.png');
      imgButtonsMantCarModificar = imgButtons.create('imgButtonsMantCarModificar','Modificar','icono_modificar.png');
      imgButtonsMantCarModificar.setDisable();
      imgButtonsMantCarEliminar = imgButtons.create('imgButtonsMantCarEliminar','Eliminar','eliminar.jpg');
      imgButtonsMantCarEliminar.setDisable();
      imgButtonsMantCarLimpiar = imgButtons.create('imgButtonsMantCarLimpiar','Limpiar','limpiar.png');
      imgButtonsMantCarBuscar = imgButtons.create('imgButtonsMantCarBuscar','Buscar','icono_buscar.png');
      imgButtonsMantCarSalir = imgButtons.create('imgButtonsMantCarSalir','Salir','salir.png');
  },

  init : function(){
    this.create();
    this.setEvents();
  	this.dialogsMantCargo_Init();
  	this.gridsMantCarIdDesClaModEst_Init();
	this.createMWs();
  },

  	limpiar : function(){
  		editsMantCarId.setValue("");
  		editsMantCarDescripcion.setValue("");
  		powerComboBoxMantCarCalCargo.setSelectedIndex(0);
  		powerComboBoxMantCarModPago.setSelectedIndex(0);
  		powerComboBoxMantCarEstCargo.setSelectedIndex(0);
  		gridsMantCarIdDesClaModEst.clean();
  		dialogsMantCargo.setMsg("");
  		editsMantCarId.readOnly(false);	    		
		imgButtonsMantCarAgregar.setEnable();
		imgButtonsMantCarModificar.setDisable();
		imgButtonsMantCarEliminar.setDisable();	
		//xmlHttpReq.getData("MantObject", "get"+this.windowName, this.windowName+".loadDataGrid()");	 		    		
  	},
  	
  	buscar : function(){
  		alert('MantCargo en construccion');
  },	
  setData : function(){
		if (gridsMantCarIdDesClaModEst.getDataCell(1) != ""){
		editsMantCarId.readOnly(true);
		editsMantCarId.setValue(gridsMantCarIdDesClaModEst.getDataCell(1));
        editsMantCarDescripcion.findOption(gridsMantCarIdDesClaModEst.getDataCell(2));
        powerComboBoxMantCarCalCargo.findOption(gridsMantCarIdDesClaModEst.getDataCell(3));
        powerComboBoxMantCarModPago.findOption(gridsMantCarIdDesClaModEst.getDataCell(4));
        powerComboBoxMantCarEstCargo.findOption(gridsMantCarIdDesClaModEst.getDataCell(5));
        imgButtonsMantCarAgregar.setDisable();
		imgButtonsMantCarModificar.setEnable();
		imgButtonsMantCarEliminar.setEnable();            
		}
	}, 
  
  setEvents : function(){
  	imgButtonsMantCarAgregar.onClick(this.windowName+".coreUpdate('agregar')");
	imgButtonsMantCarModificar.onClick(this.windowName+".coreUpdate('modificar')");
	imgButtonsMantCarEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
  	imgButtonsMantCarLimpiar.onClick('MantCargo.limpiar()');
  	imgButtonsMantCarBuscar.onClick('MantCargo.buscar()');
  	imgButtonsMantCarSalir.onClick('dialogsMantCargo.close()');
  },
  
  loadDataGrid : function(){	
	var rs = xmlHttpReq.objResponse;
	gridsMantCarIdDesClaModEst.loadDataStruct(rs);
    gridsMantCarIdDesClaModEst.showData();		
	gridsMantCarIdDesClaModEst.onClickCells(this.windowName+".setData()")
	dlgWait.hide();
	},
	
	coreUpdate : function(methodName){
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == 'eliminar') 
		{
			if (editsMantCarId.valid(dialogsMantCargo))
			{
			rlx.add('reg', editsMantCarId);
			procesar = true;
			}
		}
		else 
			{
	  		if (editsMantCarId.valid(dialogsMantCargo))
  				if (editsMantCarDescripcion.valid(dialogsMantCargo))
  					if (powerComboBoxMantCarCalCargo.valid(dialogsMantCargo)) 
        				if (powerComboBoxMantCarModPago.valid(dialogsMantCargo))
	    					if (powerComboBoxMantCarEstCargo.valid(dialogsMantCargo)){ 					
					rlx.add('reg',editsMantCarDescripcion);
					rlx.add('reg',powerComboBoxMantCarCalCargo);
					rlx.add('reg',powerComboBoxMantCarModPago);
					rlx.add('reg',powerComboBoxMantCarEstCargo);
					rlx.add('reg',editsMantCarId);
					procesar = true;		
					} 
			}
		if (procesar){            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
	}
}

