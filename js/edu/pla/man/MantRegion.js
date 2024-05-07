var dialogsMantRegion = new Object();
var editsMantRegDescripcion = new Object();
var editsMantRegAbrev = new Object(); 
var gridsMantRegionCodDescripcion = new Object();
var imgButtonsMantRegionAgregar = new Object();
var imgButtonsMantRegionModificar = new Object();
var imgButtonsMantRegionEliminar = new Object();
var imgButtonsMantRegionLimpiar = new Object();
var imgButtonsMantRegionSalir = new Object();
var mwMantRegion = new Object();// minWindow

var MantRegion = {
	windowName : 'MantRegion',
	isCreate : false,
	idRegion : 0,

	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantRegion.isByClean())
 			this.limpiar();			
		dialogsMantRegion.show();
	},
	
	hide : function() {
		dialogsMantRegion.hide();
	},
	
	createMWs : function() {
		mwMantRegion = desktop.addMinWindow('M.Region', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantRegion.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantRegion_Init : function() {
        dialogsMantRegion.setMinimizeXY(0,0);
        dialogsMantRegion.setCenterScreen();
        dialogsMantRegion.addSpace(0,0,20);
        dialogsMantRegion.addLn(1,1,1);
		dialogsMantRegion.setHeightCell(1,1,10);
		dialogsMantRegion.addObjToDialog(editsMantRegAbrev,2,1,24);
		editsMantRegAbrev.setSizeEdit(20);
		editsMantRegAbrev.setMaxLength(2);
		dialogsMantRegion.addObjToDialog(editsMantRegDescripcion,3,1,24);
        editsMantRegDescripcion.setSizeEdit(297);
		editsMantRegDescripcion.setMaxLength(50);
        dialogsMantRegion.addLn(4,1,1);
		dialogsMantRegion.setHeightCell(4,1,10);
        dialogsMantRegion.addObjToDialog(gridsMantRegionCodDescripcion.getObject(),5,1);
        dialogsMantRegion.addLn(6,1,1);
		dialogsMantRegion.setHeightCell(6,1,12);
        dialogsMantRegion.addObjToDialog(imgButtonsMantRegionAgregar,7,1);
        dialogsMantRegion.addObjToDialog(imgButtonsMantRegionModificar,7,1);
        dialogsMantRegion.addObjToDialog(imgButtonsMantRegionEliminar,7,1);
        dialogsMantRegion.addObjToDialog(imgButtonsMantRegionLimpiar,7,1);
        dialogsMantRegion.addObjToDialog(imgButtonsMantRegionSalir,7,1);
        imgButtonsMantRegionAgregar.setDimension(90,22);
        imgButtonsMantRegionModificar.setDimension(90,22);
        imgButtonsMantRegionEliminar.setDimension(90,22);
        imgButtonsMantRegionLimpiar.setDimension(90,22);
        imgButtonsMantRegionSalir.setDimension(90,22);
        dialogsMantRegion.adjAllMarginObj(7,1,20);
        dialogsMantRegion.leftMarginObj(7,1,0,27);   
	},
  
	gridsMantRegionCodDescripcion_Init : function() {
        gridsMantRegionCodDescripcion.setFixColRow(false,true);
        gridsMantRegionCodDescripcion.addTitleVectorX(['Abreviatura','Descripción','idReg']);
        gridsMantRegionCodDescripcion.showData();
        gridsMantRegionCodDescripcion.setReadOnlyToAll();
        gridsMantRegionCodDescripcion.setSizeCol(1,99);
        gridsMantRegionCodDescripcion.setSizeCol(2,485);
        gridsMantRegionCodDescripcion.setSizeCol(3,0);
        gridsMantRegionCodDescripcion.hideCol(3);

	},

 	create : function() {
 		dialogsMantRegion = dialogs.create('dialogsMantRegion',0,0,628,357,'MANTENIMIENTO REGIÓN / ESTADO');
 		editsMantRegAbrev = edits.create('editsMantRegAbrev','editsMantRegAbrev','Abreviatura:',1,80,'normal');
 		editsMantRegAbrev.setValidEmpty();
 		editsMantRegDescripcion = edits.create('editsMantRegDescripcion','MantRegion_Descripcion','Descripción:',1,80,'normal');
 		editsMantRegDescripcion.setValidEmpty();
 		gridsMantRegionCodDescripcion = grids.create('gridsMantRegionCodDescripcion',10,3);
 		imgButtonsMantRegionAgregar = imgButtons.create('imgButtonsMantRegionAgregar','Agregar','ok.png');
 		imgButtonsMantRegionModificar = imgButtons.create('imgButtonsMantRegionModificar','Modificar','icono_modificar.png');
 		imgButtonsMantRegionModificar.setDisable();
 		imgButtonsMantRegionEliminar = imgButtons.create('imgButtonsMantRegionEliminar','Eliminar','eliminar.png');
 		imgButtonsMantRegionEliminar.setDisable();
 		imgButtonsMantRegionLimpiar = imgButtons.create('imgButtonsMantRegionLimpiar','Limpiar','limpiar.png');
 		imgButtonsMantRegionSalir = imgButtons.create('imgButtonsMantRegionSalir','Salir','salir.png');
 	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsMantRegion_Init();
		this.gridsMantRegionCodDescripcion_Init();
		this.createMWs();		
	},

  	limpiar : function() {
  		this.idRegion = 0;
  		editsMantRegAbrev.setValue("");
  		editsMantRegDescripcion.setValue("");
  		gridsMantRegionCodDescripcion.clean();
  		dialogsMantRegion.setMsg("");
		imgButtonsMantRegionAgregar.setEnable();
		imgButtonsMantRegionModificar.setDisable();
		imgButtonsMantRegionEliminar.setDisable();	
		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantRegion, gridsMantRegionCodDescripcion, false);	 		    		
  	},
  	
  	setData : function() {
		if (gridsMantRegionCodDescripcion.getDataCell(1) != "") {
			this.idRegion = gridsMantRegionCodDescripcion.getDataCell(3);
			editsMantRegAbrev.setValue(gridsMantRegionCodDescripcion.getDataCell(1));
			editsMantRegDescripcion.setValue(gridsMantRegionCodDescripcion.getDataCell(2));
			imgButtonsMantRegionAgregar.setDisable();
			imgButtonsMantRegionModificar.setEnable();
			imgButtonsMantRegionEliminar.setEnable();
        }     			
	},
  	
  	setEvents : function() {
	    gridsMantRegionCodDescripcion.onClickCells(this.windowName+".setData()");
	    imgButtonsMantRegionAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantRegionModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantRegionEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
	  	imgButtonsMantRegionLimpiar.onClick('MantRegion.limpiar()');
	  	imgButtonsMantRegionSalir.onClick('dialogsMantRegion.close()');	  	 	
    },
	
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMantRegDescripcion.valid(dialogsMantRegion))
			if (editsMantRegAbrev.valid(dialogsMantRegion)) { 					
				if (methodName != 'eliminar') { 
					rlx.add('reg',editsMantRegDescripcion);
					rlx.add('reg',editsMantRegAbrev);
				}
				if (methodName != 'agregar') 
					rlx.addInt('reg', this.idRegion);
				Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
			} 
	}
};
	