var dialogsMantParentesco = new Object();
var editsMantParentDescripcion = new Object();
var gridsMantParentCodDescripcion = new Object();
var imgButtonsMantParentAgregar = new Object();
var imgButtonsMantParentModificar = new Object();
var imgButtonsMantParentEliminar = new Object();
var imgButtonsMantParentLimpiar = new Object();
var imgButtonsMantParentSalir = new Object();
var mwMantParentesco = new Object();// minWindow

var MantParentesco = {
	windowName : 'MantParentesco',
	isCreate : false,
	idProfesion : 0,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantParentesco.isByClean())
 			this.limpiar();			
		dialogsMantParentesco.show();
	},
	
	hide : function() {
		dialogsMantParentesco.hide();
	},
	
	createMWs : function() {
        	mwMantParentesco = desktop.addMinWindow('M.Parentesco', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantParentesco.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantParentesco_Init : function(){
        dialogsMantParentesco.setMinimizeXY(0,0);
        dialogsMantParentesco.setCenterScreen();
        dialogsMantParentesco.addSpace(0,0,20);
        dialogsMantParentesco.addLn(1,1,1);
		dialogsMantParentesco.setHeightCell(1,1,10);
        dialogsMantParentesco.addObjToDialog(editsMantParentDescripcion,2,1,24);
        editsMantParentDescripcion.setSizeEdit(298);
	    editsMantParentDescripcion.setMaxLength(50);
        dialogsMantParentesco.addLn(3,1,1);
		dialogsMantParentesco.setHeightCell(3,1,10);
        dialogsMantParentesco.addObjToDialog(gridsMantParentCodDescripcion.getObject(),4,1);
        dialogsMantParentesco.addLn(5,1,1);
		dialogsMantParentesco.setHeightCell(5,1,12);
        dialogsMantParentesco.addObjToDialog(imgButtonsMantParentAgregar,6,1);
        dialogsMantParentesco.addObjToDialog(imgButtonsMantParentModificar,6,1);
        dialogsMantParentesco.addObjToDialog(imgButtonsMantParentEliminar,6,1);
        dialogsMantParentesco.addObjToDialog(imgButtonsMantParentLimpiar,6,1);
        dialogsMantParentesco.addObjToDialog(imgButtonsMantParentSalir,6,1);        
        imgButtonsMantParentAgregar.setDimension(90,22);
        imgButtonsMantParentModificar.setDimension(90,22);
        imgButtonsMantParentEliminar.setDimension(90,22);
        imgButtonsMantParentLimpiar.setDimension(90,22);
        imgButtonsMantParentSalir.setDimension(90,22);
        dialogsMantParentesco.adjAllMarginObj(6,1,18);
        dialogsMantParentesco.leftMarginObj(6,1,0,30); 
	},

	gridsMantParentCodDescripcion_Init : function() {
        gridsMantParentCodDescripcion.setFixColRow(false,true);
        gridsMantParentCodDescripcion.addTitleVectorX(['Código','Descripción']);
        gridsMantParentCodDescripcion.showData();
        gridsMantParentCodDescripcion.setReadOnlyToAll();
        gridsMantParentCodDescripcion.setSizeCol(1,0);
        gridsMantParentCodDescripcion.setSizeCol(2,585);
        gridsMantParentCodDescripcion.hideCol(1);

	},

	create : function() {
		dialogsMantParentesco = dialogs.create('dialogsMantParentesco',0,0,629,335,'MANTENIMIENTO DE PARENTESCO');
		editsMantParentDescripcion = edits.create('editsMantParentDescripcion','MantParentescoDescripcion','Descripción:',1,80,'normal');
		editsMantParentDescripcion.setValidEmpty();
		gridsMantParentCodDescripcion = grids.create('gridsMantParentCodDescripcion',10,2);
		imgButtonsMantParentAgregar = imgButtons.create('imgButtonsMantParentAgregar','Agregar','ok.png');
		imgButtonsMantParentModificar = imgButtons.create('imgButtonsMantParentModificar','Modificar','icono_modificar.png');
		imgButtonsMantParentModificar.setDisable();
		imgButtonsMantParentEliminar = imgButtons.create('imgButtonsMantParentEliminar','Eliminar','eliminar.png');
		imgButtonsMantParentEliminar.setDisable();
		imgButtonsMantParentLimpiar = imgButtons.create('imgButtonsMantParentLimpiar','Limpiar','limpiar.png');
		imgButtonsMantParentSalir = imgButtons.create('imgButtonsMantParentSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMantParentesco_Init();
		this.gridsMantParentCodDescripcion_Init();
		this.createMWs();		
	},

  	limpiar : function() {
  		this.idProfesion = 0;
  		editsMantParentDescripcion.setValue("");
  		gridsMantParentCodDescripcion.clean();
  		dialogsMantParentesco.setMsg("");
		imgButtonsMantParentAgregar.setEnable();
		imgButtonsMantParentModificar.setDisable();
		imgButtonsMantParentEliminar.setDisable();	
		Tool.getGridData('MantObject', 'getParentesco', dialogsMantParentesco, gridsMantParentCodDescripcion, false);
  	},
  	
  	setData : function() {
		if (gridsMantParentCodDescripcion.getDataCell(1) != "") {
			this.idProfesion = gridsMantParentCodDescripcion.getDataCell(1);
			editsMantParentDescripcion.setValue(gridsMantParentCodDescripcion.getDataCell(2));
			imgButtonsMantParentAgregar.setDisable();
			imgButtonsMantParentModificar.setEnable();
			imgButtonsMantParentEliminar.setEnable();
        }     			
	},
  	
  	setEvents : function() {
  		gridsMantParentCodDescripcion.onClickCells(this.windowName+".setData()")	
  		imgButtonsMantParentAgregar.onClick(this.windowName+".coreUpdate('agregar')");
  		imgButtonsMantParentModificar.onClick(this.windowName+".coreUpdate('modificar')");
  		imgButtonsMantParentEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
  		imgButtonsMantParentLimpiar.onClick('MantParentesco.limpiar()');
  		imgButtonsMantParentSalir.onClick('dialogsMantParentesco.close()');	  	 	
    },
	
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMantParentDescripcion.valid(dialogsMantParentesco)) {
			if (methodName != 'eliminar') 
				rlx.add('reg',editsMantParentDescripcion);
			if (methodName != 'agregar') 
				rlx.addInt('reg', this.idProfesion);
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
		}
	}
}