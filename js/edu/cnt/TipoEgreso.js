var dialogsTipoEgreso = new Object();
var editsTipoEgrId = new Object();
var editsTipoEgrDescripcion = new Object();
var gridsTipoEgreso = new Object();
var imgButtonsTipoEgrAgregar = new Object();
var imgButtonsTipoEgrModificar = new Object();
var imgButtonsTipoEgrLimpiar = new Object();
var imgButtonsTipoEgrEliminar = new Object();
var imgButtonsTipoEgrSalir = new Object();
var mwTipoEgreso  = new Object();// minWindow
var TipoEgreso = {
	windowName : 'TipoEgreso',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsTipoEgreso.isByClean())
 			this.limpiar();			
		dialogsTipoEgreso.show();
	},
	hide : function() {
		dialogsTipoEgreso.hide();
	},
	createMWs : function() {
        	mwTipoEgreso = desktop.addMinWindow('Tipo Egreso', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsTipoEgreso.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
 dialogsTipoEgreso_Init : function() {
        dialogsTipoEgreso.setMinimizeXY(0,0);
        dialogsTipoEgreso.setCenterScreen();
        dialogsTipoEgreso.addSpace(1,0,20);
        dialogsTipoEgreso.addLn(1,1,1);
		dialogsTipoEgreso.setHeightCell(1,1,10);
        //dialogsTipoEgreso.addObjToDialog(editsTipoEgrId,2,1,24);
    	editsTipoEgrId.setSizeEdit(70);
		editsTipoEgrId.setMaxLength(10);
		editsTipoEgrId.hide();
        dialogsTipoEgreso.addObjToDialog(editsTipoEgrDescripcion,3,1,24);
        editsTipoEgrDescripcion.setSizeEdit(298);
	  	editsTipoEgrDescripcion.setMaxLength(50);	
        dialogsTipoEgreso.addLn(4,1,1);
		dialogsTipoEgreso.setHeightCell(4,1,10);
        dialogsTipoEgreso.addObjToDialog(gridsTipoEgreso.getObject(),5,1);
        dialogsTipoEgreso.addLn(6,1,1);
		dialogsTipoEgreso.setHeightCell(6,1,12);
        dialogsTipoEgreso.addObjToDialog(imgButtonsTipoEgrAgregar,7,1);
        imgButtonsTipoEgrAgregar.setDimension(90,22);
        dialogsTipoEgreso.addObjToDialog(imgButtonsTipoEgrModificar,7,1);
        imgButtonsTipoEgrModificar.setDimension(90,22);
        dialogsTipoEgreso.addObjToDialog(imgButtonsTipoEgrEliminar,7,1);
        imgButtonsTipoEgrEliminar.setDimension(90,22);
        dialogsTipoEgreso.addObjToDialog(imgButtonsTipoEgrLimpiar,7,1);
        imgButtonsTipoEgrLimpiar.setDimension(90,22);
        dialogsTipoEgreso.addObjToDialog(imgButtonsTipoEgrSalir,7,1);
        imgButtonsTipoEgrSalir.setDimension(90,22);
        dialogsTipoEgreso.adjAllMarginObj(7,1,20);
        dialogsTipoEgreso.leftMarginObj(7,1,0,26);
  },
  
  gridsTipoEgreso_Init : function() {
        gridsTipoEgreso.setFixColRow(false,true);
        gridsTipoEgreso.addTitleVectorX(['Código','Descripción']);
        gridsTipoEgreso.showData();        
        gridsTipoEgreso.setSizeCol(1,0);
        gridsTipoEgreso.setSizeCol(2,586);
        gridsTipoEgreso.hideCol(1);
  },

  create : function() {
      dialogsTipoEgreso = dialogs.create('dialogsTipoEgreso',0,0,630,356,'TIPO DE EGRESO');
      editsTipoEgrId = edits.create('editsTipoEgrId','editsTipoEgrId','Código:',1,80,'normal');
      editsTipoEgrId.setValidInteger();
      editsTipoEgrId.setValidEmpty();
      editsTipoEgrDescripcion = edits.create('editsTipoEgrDescripcion','editsTipoEgrDescripcion','Descripción:',1,80,'normal');
      editsTipoEgrDescripcion.setValidEmpty();
      gridsTipoEgreso = grids.create('gridsTipoEgreso',10,2);
      imgButtonsTipoEgrAgregar = imgButtons.create('imgButtonsTipoEgrAgregar','Agregar','ok.png');
      imgButtonsTipoEgrModificar = imgButtons.create('imgButtonsTipoEgrModificar','Modificar','icono_modificar.png');
      imgButtonsTipoEgrModificar.setDisable();
      imgButtonsTipoEgrEliminar = imgButtons.create('imgButtonsTipoEgrEliminar','Elimnar','eliminar.jpg');
      imgButtonsTipoEgrEliminar.setDisable();
      imgButtonsTipoEgrLimpiar = imgButtons.create('imgButtonsTipoEgrLimpiar','Limpiar','limpiar.png');      
      imgButtonsTipoEgrSalir = imgButtons.create('imgButtonsTipoEgrSalir','Salir','salir.png');
  },

  init : function() {
    this.create();
    this.setEvents();
  	this.dialogsTipoEgreso_Init();
  	this.gridsTipoEgreso_Init();
	this.createMWs(); 
  },

  	limpiar : function() {
  		editsTipoEgrId.setValue("");
  		editsTipoEgrDescripcion.setValue(""); 	
  		gridsTipoEgreso.clean();
  		dialogsTipoEgreso.setMsg("");
  		editsTipoEgrId.readOnly(false);	    	
		imgButtonsTipoEgrAgregar.setEnable();
		imgButtonsTipoEgrModificar.setDisable();
		imgButtonsTipoEgrEliminar.setDisable();	
		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsTipoEgreso, gridsTipoEgreso, false);	    		
  	},
  	  
    setData : function() {
		if (gridsTipoEgreso.getDataCell(1) != ""){
		editsTipoEgrId.readOnly(true);
		editsTipoEgrId.setValue(gridsTipoEgreso.getDataCell(1));	
        editsTipoEgrDescripcion.setValue(gridsTipoEgreso.getDataCell(2));
        imgButtonsTipoEgrAgregar.setDisable();
		imgButtonsTipoEgrModificar.setEnable();
		imgButtonsTipoEgrEliminar.setEnable();			
		}
	},
   
	setEvents : function() {
		gridsTipoEgreso.onClickCells(this.windowName+".setData()");
		imgButtonsTipoEgrAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsTipoEgrModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsTipoEgrEliminar.onClick(this.windowName+".coreUpdate('eliminar')"); 	
		imgButtonsTipoEgrLimpiar.onClick('TipoEgreso.limpiar()');  	
		imgButtonsTipoEgrSalir.onClick('dialogsTipoEgreso.close()');	  	 	
	},
  
	coreUpdate : function(methodName) {
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == 'eliminar') {
			if (editsTipoEgrId.valid(dialogsTipoEgreso)) {
				rlx.add('reg', editsTipoEgrId);
				procesar = true;
			}
			
		}
		else {
	  		if (editsTipoEgrId.valid(dialogsTipoEgreso))
  				if (editsTipoEgrDescripcion.valid(dialogsTipoEgreso)) { 					
					rlx.add('reg',editsTipoEgrDescripcion);
					rlx.add('reg',editsTipoEgrId);					
					procesar = true;		
				} 
			}
		if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
	}
};

  