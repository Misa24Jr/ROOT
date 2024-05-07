var dialogsMantProfesion = new Object();
var editsMantProDescripcion = new Object();
var gridsMantProCodDescripcion = new Object();
var imgButtonsMantProAgregar = new Object();
var imgButtonsMantProModificar = new Object();
var imgButtonsMantProEliminar = new Object();
var imgButtonsMantProLimpiar = new Object();
var imgButtonsMantProSalir = new Object();
var mwMantProfesion = new Object();// minWindow

var MantProfesion = {
	windowName : 'MantProfesion',
	isCreate : false,
	idProfesion : 0,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantProfesion.isByClean())
 			this.limpiar();			
		dialogsMantProfesion.show();
	},
	
	hide : function() {
		dialogsMantProfesion.hide();
	},
	
	createMWs : function() {
        	mwMantProfesion = desktop.addMinWindow('Cargo', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantProfesion.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantProfesion_Init : function(){
        dialogsMantProfesion.setMinimizeXY(0,0);
        dialogsMantProfesion.setCenterScreen();
        dialogsMantProfesion.addSpace(0,0,20);
        dialogsMantProfesion.addLn(1,1,1);
		dialogsMantProfesion.setHeightCell(1,1,10);
        dialogsMantProfesion.addObjToDialog(editsMantProDescripcion,2,1,24);
        editsMantProDescripcion.setSizeEdit(298);
	    editsMantProDescripcion.setMaxLength(50);
        dialogsMantProfesion.addLn(3,1,1);
		dialogsMantProfesion.setHeightCell(3,1,10);
        dialogsMantProfesion.addObjToDialog(gridsMantProCodDescripcion.getObject(),4,1);
        dialogsMantProfesion.addLn(5,1,1);
		dialogsMantProfesion.setHeightCell(5,1,12);
        dialogsMantProfesion.addObjToDialog(imgButtonsMantProAgregar,6,1);
        dialogsMantProfesion.addObjToDialog(imgButtonsMantProModificar,6,1);
        dialogsMantProfesion.addObjToDialog(imgButtonsMantProEliminar,6,1);
        dialogsMantProfesion.addObjToDialog(imgButtonsMantProLimpiar,6,1);
        dialogsMantProfesion.addObjToDialog(imgButtonsMantProSalir,6,1);        
        imgButtonsMantProAgregar.setDimension(90,22);
        imgButtonsMantProModificar.setDimension(90,22);
        imgButtonsMantProEliminar.setDimension(90,22);
        imgButtonsMantProLimpiar.setDimension(90,22);
        imgButtonsMantProSalir.setDimension(90,22);
        dialogsMantProfesion.adjAllMarginObj(6,1,18);
        dialogsMantProfesion.leftMarginObj(6,1,0,30); 
	},

	gridsMantProCodDescripcion_Init : function() {
        gridsMantProCodDescripcion.setFixColRow(false,true);
        gridsMantProCodDescripcion.addTitleVectorX(['Código','Descripción']);
        gridsMantProCodDescripcion.showData();
        gridsMantProCodDescripcion.setReadOnlyToAll();
        gridsMantProCodDescripcion.setSizeCol(1,0);
        gridsMantProCodDescripcion.setSizeCol(2,585);
        gridsMantProCodDescripcion.hideCol(1);

	},

	create : function() {
		dialogsMantProfesion = dialogs.create('dialogsMantProfesion',0,0,629,335,'CARGO');
		editsMantProDescripcion = edits.create('editsMantProDescripcion','MantProfesionDescripcion','Descripción:',1,80,'normal');
		editsMantProDescripcion.setValidEmpty();
		gridsMantProCodDescripcion = grids.create('gridsMantProCodDescripcion',10,2);
		imgButtonsMantProAgregar = imgButtons.create('imgButtonsMantProAgregar','Agregar','ok.png');
		imgButtonsMantProModificar = imgButtons.create('imgButtonsMantProModificar','Modificar','icono_modificar.png');
		imgButtonsMantProModificar.setDisable();
		imgButtonsMantProEliminar = imgButtons.create('imgButtonsMantProEliminar','Eliminar','eliminar.png');
		imgButtonsMantProEliminar.setDisable();
		imgButtonsMantProLimpiar = imgButtons.create('imgButtonsMantProLimpiar','Limpiar','limpiar.png');
		imgButtonsMantProSalir = imgButtons.create('imgButtonsMantProSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMantProfesion_Init();
		this.gridsMantProCodDescripcion_Init();
		this.createMWs();		
	},

  	limpiar : function() {
  		this.idProfesion = 0;
  		editsMantProDescripcion.setValue("");
  		gridsMantProCodDescripcion.clean();
  		dialogsMantProfesion.setMsg("");
		imgButtonsMantProAgregar.setEnable();
		imgButtonsMantProModificar.setDisable();
		imgButtonsMantProEliminar.setDisable();	
		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantProfesion, gridsMantProCodDescripcion, false);
  			 		    		
  	},
  	
  	setData : function() {
		if (gridsMantProCodDescripcion.getDataCell(1) != "") {
			this.idProfesion = gridsMantProCodDescripcion.getDataCell(1);
			editsMantProDescripcion.setValue(gridsMantProCodDescripcion.getDataCell(2));
			imgButtonsMantProAgregar.setDisable();
			imgButtonsMantProModificar.setEnable();
			imgButtonsMantProEliminar.setEnable();
        }     			
	},
  	
  	setEvents : function() {
  		gridsMantProCodDescripcion.onClickCells(this.windowName+".setData()")	
  		imgButtonsMantProAgregar.onClick(this.windowName+".coreUpdate('agregar')");
  		imgButtonsMantProModificar.onClick(this.windowName+".coreUpdate('modificar')");
  		imgButtonsMantProEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
  		imgButtonsMantProLimpiar.onClick('MantProfesion.limpiar()');
  		imgButtonsMantProSalir.onClick('dialogsMantProfesion.close()');	  	 	
    },
	
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMantProDescripcion.valid(dialogsMantProfesion)) { 					
			if (methodName != 'eliminar') 
				rlx.add('reg',editsMantProDescripcion);
			if (methodName != 'agregar') 
				rlx.addInt('reg', this.idProfesion);
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
		} 
	}
}