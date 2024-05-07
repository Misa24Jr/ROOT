var dialogsMantBasEjeIntegrales = new Object();
var editsMantBasEjeIntDescripcion = new Object();
var gridsMantBasEjeIntCodDescripcion = new Object();
var imgButtonsMantBasEjeIntAgregar = new Object();
var imgButtonsMantBasEjeIntModificar = new Object();
var imgButtonsMantBasEjeIntEliminar = new Object();
var imgButtonsMantBasEjeIntLimpiar = new Object();
var imgButtonsMantBasEjeIntSalir = new Object();
var mwMantBasEjeIntegrales = new Object();// minWindow

var MantBasEjeIntegrales = {
	windowName : 'MantBasEjeIntegrales',
	isCreate : false,
	idEjeInt : 0,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantBasEjeIntegrales.isByClean())
 			this.limpiar();			
		dialogsMantBasEjeIntegrales.show();
	},
	
	hide : function(){
		dialogsMantBasEjeIntegrales.hide();
	},
	
	createMWs : function(){
        	mwMantBasEjeIntegrales = desktop.addMinWindow('M.B.E.Integrales', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantBasEjeIntegrales.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantBasEjeIntegrales_Init : function(){
        dialogsMantBasEjeIntegrales.setMinimizeXY(0,0);
        dialogsMantBasEjeIntegrales.setCenterScreen();
        dialogsMantBasEjeIntegrales.addSpace(0,0,20);
        dialogsMantBasEjeIntegrales.addLn(1,1,1);
		dialogsMantBasEjeIntegrales.setHeightCell(1,1,10);  
        dialogsMantBasEjeIntegrales.addObjToDialog(editsMantBasEjeIntDescripcion,2,1,24);
        editsMantBasEjeIntDescripcion.setSizeEdit(504);
        editsMantBasEjeIntDescripcion.setMaxLength(250);       
        dialogsMantBasEjeIntegrales.addLn(3,1,1);
		dialogsMantBasEjeIntegrales.setHeightCell(3,1,10);  
        dialogsMantBasEjeIntegrales.addObjToDialog(gridsMantBasEjeIntCodDescripcion.getObject(),4,1);
        dialogsMantBasEjeIntegrales.addLn(5,1,1);
		dialogsMantBasEjeIntegrales.setHeightCell(5,1,12);  
        dialogsMantBasEjeIntegrales.addObjToDialog(imgButtonsMantBasEjeIntAgregar,6,1);
        dialogsMantBasEjeIntegrales.addObjToDialog(imgButtonsMantBasEjeIntModificar,6,1);
        dialogsMantBasEjeIntegrales.addObjToDialog(imgButtonsMantBasEjeIntEliminar,6,1);
        dialogsMantBasEjeIntegrales.addObjToDialog(imgButtonsMantBasEjeIntLimpiar,6,1);
        dialogsMantBasEjeIntegrales.addObjToDialog(imgButtonsMantBasEjeIntSalir,6,1); 
        imgButtonsMantBasEjeIntAgregar.setDimension(90,22);
        imgButtonsMantBasEjeIntModificar.setDimension(90,22);
        imgButtonsMantBasEjeIntEliminar.setDimension(90,22);
        imgButtonsMantBasEjeIntLimpiar.setDimension(90,22);
        imgButtonsMantBasEjeIntSalir.setDimension(90,22);
        dialogsMantBasEjeIntegrales.adjAllMarginObj(6,1,18);
        dialogsMantBasEjeIntegrales.leftMarginObj(6,1,0,31);
	},
  
	gridsMantBasEjeIntCodDescripcion_Init : function(){
        gridsMantBasEjeIntCodDescripcion.setFixColRow(false,true);
        gridsMantBasEjeIntCodDescripcion.addTitleVectorX(['Id_codigo','Descripción']);
        gridsMantBasEjeIntCodDescripcion.showData();        
        gridsMantBasEjeIntCodDescripcion.setSizeCol(1,5);
        gridsMantBasEjeIntCodDescripcion.setSizeCol(2,585);
        gridsMantBasEjeIntCodDescripcion.hideCol(1);
	},

	create : function(){
		dialogsMantBasEjeIntegrales = dialogs.create('dialogsMantBasEjeIntegrales',0,0,628,335,'EJES INTEGRADORES');
		dialogsMantBasEjeIntegrales.setAdjY(40);
		editsMantBasEjeIntDescripcion = edits.create('editsMantBasEjeIntDescripcion','MatPais_Descripcion','Descripción:',3,80,'normal');
		editsMantBasEjeIntDescripcion.setValidEmpty();
		gridsMantBasEjeIntCodDescripcion = grids.create('gridsMantBasEjeIntCodDescripcion',10,2);
		imgButtonsMantBasEjeIntAgregar = imgButtons.create('imgButtonsMantBasEjeIntAgregar','Agregar','ok.png');
		imgButtonsMantBasEjeIntModificar = imgButtons.create('imgButtonsMantBasEjeIntModificar','Modificar','icono_modificar.png');
		imgButtonsMantBasEjeIntModificar.setDisable();
		imgButtonsMantBasEjeIntEliminar = imgButtons.create('imgButtonsMantBasEjeIntEliminar','Eliminar','eliminar.png');
      	imgButtonsMantBasEjeIntEliminar.setDisable();
      	imgButtonsMantBasEjeIntLimpiar = imgButtons.create('imgButtonsMantBasEjeIntLimpiar','Limpiar','limpiar.png');
      	imgButtonsMantBasEjeIntSalir = imgButtons.create('imgButtonsMantBasEjeIntSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMantBasEjeIntegrales_Init();
		this.gridsMantBasEjeIntCodDescripcion_Init();
		this.createMWs();		
	},

  	limpiar : function(methodName){
  		editsMantBasEjeIntDescripcion.setValue("");
  		dialogsMantBasEjeIntegrales.setMsg("");
		imgButtonsMantBasEjeIntAgregar.setEnable();
		imgButtonsMantBasEjeIntModificar.setDisable();
		imgButtonsMantBasEjeIntEliminar.setDisable();	

		if (methodName == "eliminar" && gridsMantBasEjeIntCodDescripcion.getTotalRecord() == 1) { 
			gridsMantBasEjeIntCodDescripcion.clean();
        	dlgWait.hide();
        }
        else
  			Tool.getGridData("MantObject", "get"+this.windowName, dialogsMantBasEjeIntegrales, gridsMantBasEjeIntCodDescripcion, false); 		    		
  	},
  	
  	setData : function(){
		if (gridsMantBasEjeIntCodDescripcion.getDataCell(1) != ""){
			this.idEjeInt = gridsMantBasEjeIntCodDescripcion.getDataCell(1);
	        editsMantBasEjeIntDescripcion.setValue(gridsMantBasEjeIntCodDescripcion.getDataCell(2));
	        imgButtonsMantBasEjeIntAgregar.setDisable();
			imgButtonsMantBasEjeIntModificar.setEnable();
			imgButtonsMantBasEjeIntEliminar.setEnable();
        }     			
	},
  	
  	setEvents : function(){
  		gridsMantBasEjeIntCodDescripcion.onClickCells(this.windowName+".setData()");
	    imgButtonsMantBasEjeIntAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantBasEjeIntModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantBasEjeIntEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
	  	imgButtonsMantBasEjeIntLimpiar.onClick(this.windowName+".limpiar()");
	  	imgButtonsMantBasEjeIntSalir.onClick('dialogsMantBasEjeIntegrales.close()');	  	 	
    },
    
	coreUpdate : function(methodName){
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMantBasEjeIntDescripcion.valid(dialogsMantBasEjeIntegrales)) {
			if (methodName == 'eliminar') 
				rlx.addInt('reg', this.idEjeInt);
			else {
				rlx.add('reg', editsMantBasEjeIntDescripcion);
				if (methodName == 'modificar') rlx.addInt('reg', this.idEjeInt);
			}
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiar('" + methodName + "')", rlx);
		} 
	}
};