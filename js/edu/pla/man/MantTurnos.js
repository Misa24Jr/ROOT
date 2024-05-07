var dialogsMantTurnos = new Object();
var editsMantTurCodigo = new Object();
var editsMantTurDescripcion = new Object();
var gridsMantTurnos = new Object();
var imgButtonsMantTurAgregar = new Object();
var imgButtonsMantTurModificar = new Object();
var imgButtonsMantTurEliminar = new Object();
var imgButtonsMantTurLimpiar = new Object();
var imgButtonsMantTurSalir = new Object();
var mwdialogsMantTurnos = new Object();// minWindow
var MantTurnos = {
	windowName : 'MantTurnos',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantTurnos.isByClean())
 			this.limpiar();			
		dialogsMantTurnos.show();
	},
	hide : function() {
		dialogsMantTurnos.hide();
	},
	createMWs : function() {
     mwMantTurnos = desktop.addMinWindow('M.Turnos', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
     dialogsMantTurnos.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
  dialogsMantTurnos_Init : function() {
        dialogsMantTurnos.setMinimizeXY(0,0);
        dialogsMantTurnos.setCenterScreen();
        dialogsMantTurnos.addSpace(1,0,20);
        dialogsMantTurnos.addLn(1,1,1);
		dialogsMantTurnos.setHeightCell(1,1,10);
        dialogsMantTurnos.addObjToDialog(editsMantTurCodigo,2,1,24);
        editsMantTurCodigo.setSizeEdit(70);
	    editsMantTurCodigo.setMaxLength(1);
        dialogsMantTurnos.addObjToDialog(editsMantTurDescripcion,3,1,24);
	    editsMantTurDescripcion.setSizeEdit(295);
	    editsMantTurDescripcion.setMaxLength(50);
        dialogsMantTurnos.addLn(4,1,1);
		dialogsMantTurnos.setHeightCell(4,1,10);
        dialogsMantTurnos.addObjToDialog(gridsMantTurnos.getObject(),5,1);
        dialogsMantTurnos.addLn(6,1,1);
		dialogsMantTurnos.setHeightCell(6,1,12);
        dialogsMantTurnos.addObjToDialog(imgButtonsMantTurAgregar,9,1);
        dialogsMantTurnos.addObjToDialog(imgButtonsMantTurModificar,9,1);
        dialogsMantTurnos.addObjToDialog(imgButtonsMantTurEliminar,9,1);
        dialogsMantTurnos.addObjToDialog(imgButtonsMantTurLimpiar,9,1);
        dialogsMantTurnos.addObjToDialog(imgButtonsMantTurSalir,9,1);
        imgButtonsMantTurAgregar.setDimension(90,22);
        imgButtonsMantTurModificar.setDimension(90,22);
        imgButtonsMantTurEliminar.setDimension(90,22);
        imgButtonsMantTurLimpiar.setDimension(90,22);
        imgButtonsMantTurSalir.setDimension(90,22);
		dialogsMantTurnos.adjAllMarginObj(9,1,20);
        dialogsMantTurnos.leftMarginObj(9,1,0,26);
  },
  
  gridsMantTurnos_Init : function() {
        gridsMantTurnos.setFixColRow(false,true);
        gridsMantTurnos.addTitleVectorX(['Código','Descripción']);
        gridsMantTurnos.showData();       
        gridsMantTurnos.setSizeCol(1,96);
        gridsMantTurnos.setSizeCol(2,489);
  },

  create : function() {
      dialogsMantTurnos = dialogs.create('dialogsMantTurnos',0,0,629,357,'MANTENIMINETO DE TURNOS');
      editsMantTurCodigo = edits.create('editsMantTurCodigo','editsMantTurCodigo','Código:',1,81,'normal');      
      editsMantTurCodigo.setValidEmpty();
      editsMantTurDescripcion = edits.create('editsMantTurDescripcion','editsMantTurDescripcion','Descripción:',1,81,'normal');
      editsMantTurDescripcion.setValidEmpty();
      gridsMantTurnos = grids.create('gridsMantTurnos',10,2);
      dialogsMantTurnos.addLn(4,1,1);
      imgButtonsMantTurAgregar = imgButtons.create('imgButtonsMantTurAgregar','Agregar','ok.png');
      imgButtonsMantTurAgregar.setDisable();
      imgButtonsMantTurModificar = imgButtons.create('imgButtonsMantTurModificar','Modificar','icono_modificar.png');
      imgButtonsMantTurModificar.setDisable();
      imgButtonsMantTurEliminar = imgButtons.create('imgButtonsMantTurEliminar','Eliminar','eliminar.png');
      imgButtonsMantTurLimpiar = imgButtons.create('imgButtonsMantTurLimpiar','Limpiar','limpiar.png');
      imgButtonsMantTurSalir = imgButtons.create('imgButtonsMantTurSalir','Salir','salir.png');
  },

  init : function() {
    this.create();
    this.setEvents();
    this.dialogsMantTurnos_Init();
    this.gridsMantTurnos_Init();
    this.createMWs();	
  },

 limpiar : function() {
  		editsMantTurCodigo.setValue("");
  		editsMantTurDescripcion.setValue("");
  		gridsMantTurnos.clean();
  		dialogsMantTurnos.setMsg("");
  		editsMantTurCodigo.readOnly(false);	    		 
		imgButtonsMantTurAgregar.setEnable();
		imgButtonsMantTurModificar.setDisable();
		imgButtonsMantTurEliminar.setDisable();	
		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantTurnos, gridsMantTurnos, false); 		
  	},
	
  	setData : function() {
		if (gridsMantTurnos.getDataCell(1) != "") {
		editsMantTurCodigo.readOnly(true);
		editsMantTurCodigo.setValue(gridsMantTurnos.getDataCell(1));
        editsMantTurDescripcion.setValue(gridsMantTurnos.getDataCell(2));
        imgButtonsMantTurAgregar.setDisable();
		imgButtonsMantTurModificar.setEnable();
		imgButtonsMantTurEliminar.setEnable();
        }     			
	},
  	
  	setEvents : function() {
    gridsMantTurnos.onClickCells(this.windowName+".setData()");
    imgButtonsMantTurAgregar.onClick(this.windowName+".coreUpdate('agregar')");
	imgButtonsMantTurModificar.onClick(this.windowName+".coreUpdate('modificar')");
	imgButtonsMantTurEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
  	imgButtonsMantTurLimpiar.onClick('MantTurnos.limpiar()');
  	imgButtonsMantTurSalir.onClick('dialogsMantTurnos.close()');	  	 	
    },
    
	coreUpdate : function(methodName) {
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == 'eliminar') {
			if (editsMantTurCodigo.valid(dialogsMantTurnos)) {
			rlx.add('reg', editsMantTurCodigo);
			procesar = true;
			}
		}

		else {
	  		if (editsMantTurCodigo.valid(dialogsMantTurnos))		
  				if (editsMantTurDescripcion.valid(dialogsMantTurnos)) { 					
					rlx.add('reg',editsMantTurDescripcion);
					rlx.add('reg',editsMantTurCodigo);
					procesar = true;		
					} 
			}
		if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
	}
};