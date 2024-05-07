var dialogsMantPais = new Object();
var editsMatPaiDescripcion = new Object();
var gridsMantPaiCodDescripcion = new Object();
var imgButtonsMantPaiAgregar = new Object();
var imgButtonsMantPaiModificar = new Object();
var imgButtonsMantPaiEliminar = new Object();
var imgButtonsMantPaiLimpiar = new Object();
var imgButtonsMantPaiSalir = new Object();
var mwMantPais = new Object();// minWindow

var MantPais = {
	windowName : 'MantPais',
	isCreate : false,
	idPais : 0,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantPais.isByClean())
 			this.limpiar();			
		dialogsMantPais.show();
	},
	
	hide : function() {
		dialogsMantPais.hide();
	},
	
	createMWs : function() {
        	mwMantPais = desktop.addMinWindow('M.Pais', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantPais.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantPais_Init : function() {
        dialogsMantPais.setMinimizeXY(0,0);
        dialogsMantPais.setCenterScreen();
        dialogsMantPais.addSpace(0,0,20);
        dialogsMantPais.addLn(1,1,1);
		dialogsMantPais.setHeightCell(1,1,10);  
        dialogsMantPais.addObjToDialog(editsMatPaiDescripcion,2,1,24);
        editsMatPaiDescripcion.setSizeEdit(295);
        editsMatPaiDescripcion.setMaxLength(50);       
        dialogsMantPais.addLn(3,1,1);
		dialogsMantPais.setHeightCell(3,1,10);  
        dialogsMantPais.addObjToDialog(gridsMantPaiCodDescripcion.getObject(),4,1);
        dialogsMantPais.addLn(5,1,1);
		dialogsMantPais.setHeightCell(5,1,12);  
        dialogsMantPais.addObjToDialog(imgButtonsMantPaiAgregar,6,1);
        dialogsMantPais.addObjToDialog(imgButtonsMantPaiModificar,6,1);
        dialogsMantPais.addObjToDialog(imgButtonsMantPaiEliminar,6,1);
        dialogsMantPais.addObjToDialog(imgButtonsMantPaiLimpiar,6,1);
        dialogsMantPais.addObjToDialog(imgButtonsMantPaiSalir,6,1); 
        imgButtonsMantPaiAgregar.setDimension(90,22);
        imgButtonsMantPaiModificar.setDimension(90,22);
        imgButtonsMantPaiEliminar.setDimension(90,22);
        imgButtonsMantPaiLimpiar.setDimension(90,22);
        imgButtonsMantPaiSalir.setDimension(90,22);
        dialogsMantPais.adjAllMarginObj(6,1,18);
        dialogsMantPais.leftMarginObj(6,1,0,31);
	},
  
	gridsMantPaiCodDescripcion_Init : function() {
        gridsMantPaiCodDescripcion.setFixColRow(false,true);
        gridsMantPaiCodDescripcion.addTitleVectorX(['Código','Descripción']);
        gridsMantPaiCodDescripcion.showData();        
        gridsMantPaiCodDescripcion.setSizeCol(1,0);
        gridsMantPaiCodDescripcion.setSizeCol(2,586);
        gridsMantPaiCodDescripcion.hideCol(1);
	},

	create : function() {
		dialogsMantPais = dialogs.create('dialogsMantPais',0,0,629,335,'MANTENIMIENTO DE PAÍS');
		editsMatPaiDescripcion = edits.create('editsMatPaiDescripcion','MatPais_Descripcion','Descripción:',3,80,'normal');
		editsMatPaiDescripcion.setValidEmpty();
		gridsMantPaiCodDescripcion = grids.create('gridsMantPaiCodDescripcion',10,2);
		imgButtonsMantPaiAgregar = imgButtons.create('imgButtonsMantPaiAgregar','Agregar','ok.png');
		imgButtonsMantPaiModificar = imgButtons.create('imgButtonsMantPaiModificar','Modificar','icono_modificar.png');
		imgButtonsMantPaiModificar.setDisable();
		imgButtonsMantPaiEliminar = imgButtons.create('imgButtonsMantPaiEliminar','Eliminar','eliminar.png');
      	imgButtonsMantPaiEliminar.setDisable();
      	imgButtonsMantPaiLimpiar = imgButtons.create('imgButtonsMantPaiLimpiar','Limpiar','limpiar.png');
      	imgButtonsMantPaiSalir = imgButtons.create('imgButtonsMantPaiSalir','Salir','salir.png');
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsMantPais_Init();
		this.gridsMantPaiCodDescripcion_Init();
		this.createMWs();		
	},

  	limpiar : function() {
  		this.idPais = 0;
  		editsMatPaiDescripcion.setValue("");
  		gridsMantPaiCodDescripcion.clean();
  		dialogsMantPais.setMsg("");
		imgButtonsMantPaiAgregar.setEnable();
		imgButtonsMantPaiModificar.setDisable();
		imgButtonsMantPaiEliminar.setDisable();	
		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantPais, gridsMantPaiCodDescripcion, false); 		    		
  	},
  	
  	setData : function() {
		if (gridsMantPaiCodDescripcion.getDataCell(1) != "") {
			this.idPais = gridsMantPaiCodDescripcion.getDataCell(1);
	        editsMatPaiDescripcion.setValue(gridsMantPaiCodDescripcion.getDataCell(2));
	        imgButtonsMantPaiAgregar.setDisable();
			imgButtonsMantPaiModificar.setEnable();
			imgButtonsMantPaiEliminar.setEnable();
        }     			
	},
  	
  	setEvents : function() {
  		gridsMantPaiCodDescripcion.onClickCells(this.windowName+".setData()");
	    imgButtonsMantPaiAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantPaiModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantPaiEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
	  	imgButtonsMantPaiLimpiar.onClick('MantPais.limpiar()');
	  	imgButtonsMantPaiSalir.onClick('dialogsMantPais.close()');	  	 	
    },
    
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMatPaiDescripcion.valid(dialogsMantPais)) {
			if (methodName != 'eliminar') 
				rlx.add('reg',editsMatPaiDescripcion);
			if (methodName != 'agregar') 
				rlx.addInt('reg', this.idPais);
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
		} 
	}
};