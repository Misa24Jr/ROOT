var dialogsTipoPrueba = new Object();
var editsTipoPruCodigo = new Object();
var editsTipoPruDescripcion = new Object();
var gridsTipoPrueba = new Object();
var imgButtonsTipoPruAgregar = new Object();
var imgButtonsTipoPruModificar = new Object();
var imgButtonsTipoPruEliminar = new Object();
var imgButtonsTipoPruLimpiar = new Object();
var imgButtonsTipoPruSalir = new Object();
var mwTipoPrueba  = new Object();// minWindow
var TipoPrueba = {
	windowName : 'TipoPrueba',
	isCreate : false,
	
	show : function() 
	{
		if (!this.isCreate)
		{
			this.init();
			this.isCreate = true;
		}
		if (dialogsTipoPrueba.isByClean())
 			this.limpiar();			
		dialogsTipoPrueba.show();
	},
	hide : function() 
	{
		dialogsTipoPrueba.hide();
	},
	createMWs : function() 
	{
      mwTipoPrueba = desktop.addMinWindow('T. Prueba', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
      dialogsTipoPrueba.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
  dialogsTipoPrueba_Init : function(){
        dialogsTipoPrueba.setMinimizeXY(0,0);
        dialogsTipoPrueba.setCenterScreen();
        dialogsTipoPrueba.addSpace(0,0,20);
        dialogsTipoPrueba.addLn(1,1,1);
		dialogsTipoPrueba.setHeightCell(1,1,10);
        dialogsTipoPrueba.addObjToDialog(editsTipoPruCodigo,2,1,24);
        editsTipoPruCodigo.setSizeEdit(70);
        dialogsTipoPrueba.addObjToDialog(editsTipoPruDescripcion,3,1,24);
        editsTipoPruDescripcion.setSizeEdit(298); 
		editsTipoPruDescripcion.setMaxLength(50);        
        dialogsTipoPrueba.addLn(4,1,1);
		dialogsTipoPrueba.setHeightCell(4,1,10);
        dialogsTipoPrueba.addObjToDialog(gridsTipoPrueba.getObject(),5,1);
        dialogsTipoPrueba.addLn(6,1,1); 
		dialogsTipoPrueba.setHeightCell(6,1,12);       
        dialogsTipoPrueba.addObjToDialog(imgButtonsTipoPruAgregar,7,1);
        dialogsTipoPrueba.addObjToDialog(imgButtonsTipoPruModificar,7,1);
        dialogsTipoPrueba.addObjToDialog(imgButtonsTipoPruEliminar,7,1);
        dialogsTipoPrueba.addObjToDialog(imgButtonsTipoPruLimpiar,7,1);
        dialogsTipoPrueba.addObjToDialog(imgButtonsTipoPruSalir,7,1);        
        imgButtonsTipoPruAgregar.setDimension(90,22);
        imgButtonsTipoPruModificar.setDimension(90,22);
        imgButtonsTipoPruEliminar.setDimension(90,22);
        imgButtonsTipoPruLimpiar.setDimension(90,22);
        imgButtonsTipoPruSalir.setDimension(90,22);
        dialogsTipoPrueba.adjAllMarginObj(7,1,20);
        dialogsTipoPrueba.leftMarginObj(7,1,0,23);       
  },
  gridsTipoPrueba_Init : function(){
        gridsTipoPrueba.setFixColRow(false,true);
        gridsTipoPrueba.addTitleVectorX(['Código','Descripción']);
        gridsTipoPrueba.showData();        
        gridsTipoPrueba.setSizeCol(1,100);
        gridsTipoPrueba.setSizeCol(2,480);
  },

  create : function(){
      dialogsTipoPrueba = dialogs.create('dialogsTipoPrueba',0,0,624,356,'TIPO DE PRUEBA');
      editsTipoPruCodigo = edits.create('editsTipoPruCodigo','editsTipoPruCodigo','Código:',1,78,'normal');
      editsTipoPruCodigo.setValidEmpty();
      editsTipoPruDescripcion = edits.create('editsTipoPruDescripcion','editsTipoPruDescripcion','Descripción:',1,78,'normal');
      editsTipoPruDescripcion.setValidEmpty();
      gridsTipoPrueba = grids.create('gridsTipoPrueba',10,2);     
      imgButtonsTipoPruAgregar = imgButtons.create('imgButtonsTipoPruAgregar','Agregar','ok.png');
      imgButtonsTipoPruModificar = imgButtons.create('imgButtonsTipoPruModificar','Modificar','icono_modificar.png');
      imgButtonsTipoPruModificar.setDisable();
      imgButtonsTipoPruEliminar = imgButtons.create('imgButtonsTipoPruEliminar','Eliminar','eliminar.jpg');
      imgButtonsTipoPruEliminar.setDisable();
      imgButtonsTipoPruLimpiar = imgButtons.create('imgButtonsTipoPruLimpiar','Limpiar','limpiar.png');
      imgButtonsTipoPruSalir = imgButtons.create('imgButtonsTipoPruSalir','Salir','salir.png');
  },

  init : function(){
    this.create();
    this.setEvents();
  	this.dialogsTipoPrueba_Init();
  	this.gridsTipoPrueba_Init();
	this.createMWs();
  },

  	limpiar : function(){
  		editsTipoPruCodigo.setValue("");
  		editsTipoPruDescripcion.setValue(""); 	
  		gridsTipoPrueba.clean();
  		dialogsTipoPrueba.setMsg("");
		editsTipoPruCodigo.readOnly(false);	    		
		imgButtonsTipoPruAgregar.setEnable();
		imgButtonsTipoPruModificar.setDisable();
		imgButtonsTipoPruEliminar.setDisable();	
		//Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantTipPago, gridsMantTipPagoIdDescripcion, false);	 		    		
  	},
  	  
    setData : function(){
		if (dialogsTipoPrueba.getDataCell(fila, 1) != ""){
			editsTipoPruCodigo.readOnly(true);
			editsTipoPruCodigo.setValue(gridsTipoPrueba.getDataCell(1));
            editsTipoPruDescripcion.setValue(gridsTipoPrueba.getDataCell(2));
			imgButtonsTipoPruAgregar.setDisable();
			imgButtonsTipoPruModificar.setEnable();
			imgButtonsTipoPruEliminar.setEnable();			
		}
	},
   
  setEvents : function(){	
	gridsTipoPrueba.onClickCells(this.windowName+".setData()")
    imgButtonsTipoPruAgregar.onClick(this.windowName+".coreUpdate('agregar')");
  	imgButtonsTipoPruModificar.onClick(this.windowName+".coreUpdate('modificar')");
  	imgButtonsTipoPruEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
  	imgButtonsTipoPruLimpiar.onClick('TipoPrueba.limpiar()');  	
  	imgButtonsTipoPruSalir.onClick('dialogsTipoPrueba.close()');	  	 	
  },
  
  coreUpdate : function(methodName)
		{
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == 'eliminar') 
		{
			if (editsTipoPruCodigo.valid(dialogsTipoPrueba))
			{
			rlx.add('reg', editsTipoPruCodigo);
			procesar = true;
			}
		}

		else 
			{
	  		if (editsTipoPruCodigo.valid(dialogsTipoPrueba))
  				if (editsTipoPruDescripcion.valid(dialogsTipoPrueba))
					{ 					
					rlx.add('reg',editsTipoPruDescripcion);
					rlx.add('reg',editsTipoPruCodigo);					
					procesar = true;		
					} 
			}
		if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
	}
}