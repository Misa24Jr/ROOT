var dialogsMantCiudad = new Object();
var editsMantCiudadDescripcion = new Object();
var gridsMantCiudadCodDescripcion = new Object();
var imgButtonsMantCiuAgregar = new Object();
var imgButtonsMantCiuModificar = new Object();
var imgButtonsMantCiuEliminar = new Object();
var imgButtonsMantCiuLimpiar = new Object();
var imgButtonsMantCiuSalir = new Object();
var mwMantCiudad = new Object();// minWindow
var MantCiudad = {
	windowName : 'MantCiudad',
	isCreate : false,
	idCiudad : 0,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantCiudad.isByClean())
 			this.limpiar();			
		dialogsMantCiudad.show();
	},
	
	hide : function() {
		dialogsMantCiudad.hide();
	},
	
	createMWs : function() {
        	mwMantCiudad = desktop.addMinWindow('M.Ciudad', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantCiudad.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantCiudad_Init : function() {
        dialogsMantCiudad.setMinimizeXY(0,0);
        dialogsMantCiudad.setCenterScreen();
        dialogsMantCiudad.addSpace(0,0,20);
        dialogsMantCiudad.addLn(1,1,1);
		dialogsMantCiudad.setHeightCell(1,1,10);  
        dialogsMantCiudad.addObjToDialog(editsMantCiudadDescripcion,2,1,24);
        editsMantCiudadDescripcion.setSizeEdit(280);
		editsMantCiudadDescripcion.setMaxLength(50); 
        dialogsMantCiudad.addLn(3,1,1);
		dialogsMantCiudad.setHeightCell(3,1,10);  
        dialogsMantCiudad.addObjToDialog(gridsMantCiudadCodDescripcion.getObject(),4,1);
        dialogsMantCiudad.addLn(5,1,1);
		dialogsMantCiudad.setHeightCell(5,1,12);  
        dialogsMantCiudad.addObjToDialog(imgButtonsMantCiuAgregar,6,1);        
        dialogsMantCiudad.addObjToDialog(imgButtonsMantCiuModificar,6,1);
        dialogsMantCiudad.addObjToDialog(imgButtonsMantCiuEliminar,6,1);
        dialogsMantCiudad.addObjToDialog(imgButtonsMantCiuLimpiar,6,1);
        dialogsMantCiudad.addObjToDialog(imgButtonsMantCiuSalir,6,1);
        imgButtonsMantCiuAgregar.setDimension(90,22);
        imgButtonsMantCiuModificar.setDimension(90,22);
        imgButtonsMantCiuEliminar.setDimension(90,22);
        imgButtonsMantCiuLimpiar.setDimension(90,22);
        imgButtonsMantCiuSalir.setDimension(90,22);
        dialogsMantCiudad.adjAllMarginObj(6,1,15);
        dialogsMantCiudad.leftMarginObj(6,1,0,16);
	},
  
	gridsMantCiudadCodDescripcion_Init : function(){
        gridsMantCiudadCodDescripcion.setFixColRow(false,true);
        gridsMantCiudadCodDescripcion.addTitleVectorX(['Código','Descripción']);
        gridsMantCiudadCodDescripcion.showData();
        gridsMantCiudadCodDescripcion.setReadOnlyToAll();
        gridsMantCiudadCodDescripcion.setSizeCol(1,0);
        gridsMantCiudadCodDescripcion.setSizeCol(2,549);
        gridsMantCiudadCodDescripcion.hideCol(1);

	},

	create : function(){
		dialogsMantCiudad = dialogs.create('dialogsMantCiudad',0,0,592,335,'MANTENIMIENTO DE CIUDAD');
		editsMantCiudadDescripcion = edits.create('editsMantCiudadDescripcion','MantCiudad_Descripcion','Descripción:',1,80,'normal');
		editsMantCiudadDescripcion.setValidEmpty();
		gridsMantCiudadCodDescripcion = grids.create('gridsMantCiudadCodDescripcion',10,2);
		imgButtonsMantCiuAgregar = imgButtons.create('imgButtonsMantCiuAgregar','Agregar','ok.png');
		imgButtonsMantCiuModificar = imgButtons.create('imgButtonsMantCiuModificar','Modificar','icono_modificar.png');
		imgButtonsMantCiuModificar.setDisable();
		imgButtonsMantCiuEliminar = imgButtons.create('imgButtonsMantCiuEliminar','Eliminar','eliminar.png');
		imgButtonsMantCiuEliminar.setDisable();
		imgButtonsMantCiuLimpiar = imgButtons.create('imgButtonsMantCiuLimpiar','Limpiar','limpiar.png');
		imgButtonsMantCiuSalir = imgButtons.create('imgButtonsMantCiuSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMantCiudad_Init();
		this.gridsMantCiudadCodDescripcion_Init();
		this.createMWs();		
	},

	limpiar : function(){
	  	this.idCiudad = 0;
  		editsMantCiudadDescripcion.setValue("");
  		gridsMantCiudadCodDescripcion.clean();  		
  		dialogsMantCiudad.setMsg("");
		imgButtonsMantCiuAgregar.setEnable();
		imgButtonsMantCiuModificar.setDisable();
		imgButtonsMantCiuEliminar.setDisable();	
		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantCiudad, gridsMantCiudadCodDescripcion, false);	
  	},
	
  	setData : function(){
		if (gridsMantCiudadCodDescripcion.getDataCell(1) != "") {
			this.idCiudad = gridsMantCiudadCodDescripcion.getDataCell(1);
			editsMantCiudadDescripcion.setValue(gridsMantCiudadCodDescripcion.getDataCell(2));
			imgButtonsMantCiuAgregar.setDisable();
			imgButtonsMantCiuModificar.setEnable();
			imgButtonsMantCiuEliminar.setEnable();
        }     			
	},
  	
  	setEvents : function(){
  		gridsMantCiudadCodDescripcion.onClickCells(this.windowName+".setData()");
  		imgButtonsMantCiuAgregar.onClick(this.windowName+".coreUpdate('agregar')");
  		imgButtonsMantCiuModificar.onClick(this.windowName+".coreUpdate('modificar')");
  		imgButtonsMantCiuEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
  		imgButtonsMantCiuLimpiar.onClick('MantCiudad.limpiar()');
  		imgButtonsMantCiuSalir.onClick('dialogsMantCiudad.close()');	  	 	
    },
    
	coreUpdate : function(methodName){
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMantCiudadDescripcion.valid(dialogsMantCiudad)){ 					
			if (methodName != 'eliminar')
				rlx.add('reg',editsMantCiudadDescripcion);
			if (methodName != 'agregar') 
				rlx.addInt('reg', this.idCiudad);
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
	}
};
	