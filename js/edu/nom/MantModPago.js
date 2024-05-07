var dialogsMantModPago = new Object();
var editsMantModPagId = new Object();
var editsMantModPagDescripcion = new Object();
var gridsMantModPagIdDescripcion = new Object();
var imgButtonsMantModPagAgregar = new Object();
var imgButtonsMantModPagModificar = new Object();
var imgButtonsMantModPagEliminar = new Object();
var imgButtonsMantModPagLimpiar = new Object();
var imgButtonsMantModPagSalir = new Object();
var mwMantModPago  = new Object();// minWindow
var MantModPago = {
	windowName : 'MantModPago',
	isCreate : false,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantModPago.isByClean())
 			this.limpiar();			
		dialogsMantModPago.show();
	},
	hide : function(){
		dialogsMantModPago.hide();
	},
	createMWs : function(){
      mwMantModPago = desktop.addMinWindow('M.M.Pago', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
      dialogsMantModPago.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
  dialogsMantModPago_Init : function(){
        dialogsMantModPago.setMinimizeXY(0,0);
        dialogsMantModPago.setCenterScreen();
        dialogsMantModPago.addSpace(0,0,20);
        dialogsMantModPago.addLn(1,1,1);
		dialogsMantModPago.setHeightCell(1,1,10);
        dialogsMantModPago.addObjToDialog(editsMantModPagId,2,1,24);
        editsMantModPagId.setSizeEdit(70);
        dialogsMantModPago.addObjToDialog(editsMantModPagDescripcion,3,1,24);
        editsMantModPagDescripcion.setSizeEdit(300);
		editsMantModPagDescripcion.setMaxLength(50); 
        dialogsMantModPago.addLn(4,1,1);
		dialogsMantModPago.setHeightCell(4,1,10);
        dialogsMantModPago.addObjToDialog(gridsMantModPagIdDescripcion.getObject(),5,1);
        dialogsMantModPago.addLn(6,1,1);
		dialogsMantModPago.setHeightCell(6,1,12);
        dialogsMantModPago.addObjToDialog(imgButtonsMantModPagAgregar,7,1);
        dialogsMantModPago.addObjToDialog(imgButtonsMantModPagModificar,7,1);
        dialogsMantModPago.addObjToDialog(imgButtonsMantModPagEliminar,7,1);
        dialogsMantModPago.addObjToDialog(imgButtonsMantModPagLimpiar,7,1);
        dialogsMantModPago.addObjToDialog(imgButtonsMantModPagSalir,7,1);
        imgButtonsMantModPagAgregar.setDimension(90,22);
        imgButtonsMantModPagModificar.setDimension(90,22);
        imgButtonsMantModPagEliminar.setDimension(90,22);
        imgButtonsMantModPagLimpiar.setDimension(90,22);
        imgButtonsMantModPagSalir.setDimension(90,22);
        dialogsMantModPago.adjAllMarginObj(7,1,15);
        dialogsMantModPago.leftMarginObj(7,1,0,16);
  },
  
  gridsMantModPagIdDescripcion_Init : function(){
        gridsMantModPagIdDescripcion.setFixColRow(false,true);        
        gridsMantModPagIdDescripcion.addTitleVectorX(['Código','Descripción']);         
        gridsMantModPagIdDescripcion.showData();
        gridsMantModPagIdDescripcion.setSizeCol(1,100);
        gridsMantModPagIdDescripcion.setSizeCol(2,448);
  }, 

  create : function(){
      dialogsMantModPago = dialogs.create('dialogsMantModPago',0,0,592,359,'MANTENIMIENTO MODO DE PAGO');
      editsMantModPagId = edits.create('editsMantModPagId','MantModPagId','Código:',1,78,'normal');
      editsMantModPagId.setValidInteger();
      editsMantModPagId.setValidEmpty();
      editsMantModPagDescripcion = edits.create('editsMantModPagDescripcion','MantModPagDescripcion','Descripción:',1,78,'normal');
      editsMantModPagDescripcion.setValidEmpty();
      gridsMantModPagIdDescripcion = grids.create('gridsMantModPagIdDescripcion',10,2);
      imgButtonsMantModPagAgregar = imgButtons.create('imgButtonsMantModPagAgregar','Agregar','ok.png');
      imgButtonsMantModPagModificar = imgButtons.create('imgButtonsMantModPagModificar','Modificar','icono_modificar.png');
      imgButtonsMantModPagModificar.setDisable();
      imgButtonsMantModPagEliminar = imgButtons.create('imgButtonsMantModPagEliminar','Eliminar','eliminar.jpg');
      imgButtonsMantModPagEliminar.setDisable();
      imgButtonsMantModPagLimpiar = imgButtons.create('imgButtonsMantModPagLimpiar','Limpiar','limpiar.png');
      imgButtonsMantModPagSalir = imgButtons.create('imgButtonsMantModPagSalir','Salir','salir.png');
  },

  init : function(){
    this.create();
    this.setEvents();
  	this.dialogsMantModPago_Init();
  	this.gridsMantModPagIdDescripcion_Init();
	this.createMWs(); 
  },

  limpiar : function(){
  		editsMantModPagId.setValue("");
  		editsMantModPagDescripcion.setValue(""); 	
  		gridsMantModPagIdDescripcion.clean();
  		dialogsMantModPago.setMsg("");
		editsMantModPagId.readOnly(false);	    		
		imgButtonsMantModPagAgregar.setEnable();
		imgButtonsMantModPagModificar.setDisable();
		imgButtonsMantModPagEliminar.setDisable();	
		//Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantModPago, gridsMantModPagIdDescripcion, false);		 		    		
  	},
  	  
    setData : function(){
		if (dialogsMantModPago.getDataCell(1) != ""){
			editsMantModPagId.readOnly(true);
			editsMantModPagId.setValue(gridsMantModPago.getDataCell(1));
            editsMantModPagDescripcion.setValue(gridsMantModPago.getDataCell(2));
			imgButtonsMantModPagAgregar.setDisable();
			imgButtonsMantModPagModificar.setEnable();
			imgButtonsMantModPagEliminar.setEnable();			
		}
	},
   
  setEvents : function(){
  	gridsMantModPagIdDescripcion.onClickCells(this.windowName+".setData()")
    imgButtonsMantModPagAgregar.onClick(this.windowName+".coreUpdate('agregar')");
  	imgButtonsMantModPagModificar.onClick(this.windowName+".coreUpdate('modificar')");
  	imgButtonsMantModPagEliminar.onClick(this.windowName+".coreUpdate('eliminar')");	
  	imgButtonsMantModPagLimpiar.onClick('MantModPago.limpiar()');  	
  	imgButtonsMantModPagSalir.onClick('dialogsMantModPago.close()');	  	 	
  },
  
  coreUpdate : function(methodName){
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");
		if (methodName == 'eliminar'){

			if (editsMantModPagId.valid(dialogsMantModPago)){
			rlx.add('reg', editsMantModPagId);
			procesar = true;
			}
		}
		else{
	  		if (editsMantModPagId.valid(dialogsMantModPago))
  				if (editsMantModPagDescripcion.valid(dialogsMantModPago)){ 					
					rlx.add('reg',editsMantModPagDescripcion);
					rlx.add('reg',editsMantModPagId);
					procesar = true;		
					} 
			}
		if (procesar){            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
	}
}


