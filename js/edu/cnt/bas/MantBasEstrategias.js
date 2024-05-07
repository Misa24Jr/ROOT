var dialogsMantBasEstrategias = new Object();
var editsMatBasEstDescripcion = new Object();
var gridsMantBasEstCodDescripcion = new Object();
var imgButtonsMantBasEstAgregar = new Object();
var imgButtonsMantBasEstModificar = new Object();
var imgButtonsMantBasEstEliminar = new Object();
var imgButtonsMantBasEstLimpiar = new Object();
var imgButtonsMantBasEstSalir = new Object();
var mwMantBasEstrategias = new Object();// minWindow

var MantBasEstrategias = {
	windowName : 'MantBasEstrategias',
	isCreate : false,
	idEstrategia : 0,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantBasEstrategias.isByClean())
 			this.limpiar();			
		dialogsMantBasEstrategias.show();
	},
	
	hide : function(){
		dialogsMantBasEstrategias.hide();
	},
	
	createMWs : function(){
        	mwMantBasEstrategias = desktop.addMinWindow('M.B. Estrategias', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantBasEstrategias.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantBasEstrategias_Init : function(){
        dialogsMantBasEstrategias.setMinimizeXY(0,0);
        dialogsMantBasEstrategias.setCenterScreen();
        dialogsMantBasEstrategias.addSpace(0,0,20);
        dialogsMantBasEstrategias.addLn(1,1,1);
		dialogsMantBasEstrategias.setHeightCell(1,1,10);  
        dialogsMantBasEstrategias.addObjToDialog(editsMatBasEstDescripcion,2,1,24);
        editsMatBasEstDescripcion.setSizeEdit(504);
        editsMatBasEstDescripcion.setMaxLength(250);       
        dialogsMantBasEstrategias.addLn(3,1,1);
		dialogsMantBasEstrategias.setHeightCell(3,1,10);  
        dialogsMantBasEstrategias.addObjToDialog(gridsMantBasEstCodDescripcion.getObject(),4,1);
        dialogsMantBasEstrategias.addLn(5,1,1);
		dialogsMantBasEstrategias.setHeightCell(5,1,12);  
        dialogsMantBasEstrategias.addObjToDialog(imgButtonsMantBasEstAgregar,6,1);
        dialogsMantBasEstrategias.addObjToDialog(imgButtonsMantBasEstModificar,6,1);
        dialogsMantBasEstrategias.addObjToDialog(imgButtonsMantBasEstEliminar,6,1);
        dialogsMantBasEstrategias.addObjToDialog(imgButtonsMantBasEstLimpiar,6,1);
        dialogsMantBasEstrategias.addObjToDialog(imgButtonsMantBasEstSalir,6,1); 
        imgButtonsMantBasEstAgregar.setDimension(90,22);
        imgButtonsMantBasEstModificar.setDimension(90,22);
        imgButtonsMantBasEstEliminar.setDimension(90,22);
        imgButtonsMantBasEstLimpiar.setDimension(90,22);
        imgButtonsMantBasEstSalir.setDimension(90,22);
        dialogsMantBasEstrategias.adjAllMarginObj(6,1,18);
        dialogsMantBasEstrategias.leftMarginObj(6,1,0,31);
	},
  
	gridsMantBasEstCodDescripcion_Init : function(){
        gridsMantBasEstCodDescripcion.setFixColRow(false,true);
        gridsMantBasEstCodDescripcion.addTitleVectorX(['Id_codigo','Descripción']);
        gridsMantBasEstCodDescripcion.showData();        
        gridsMantBasEstCodDescripcion.setSizeCol(1,0);
        gridsMantBasEstCodDescripcion.setSizeCol(2,585);
        gridsMantBasEstCodDescripcion.hideCol(1);
	},

	create : function(){
		dialogsMantBasEstrategias = dialogs.create('dialogsMantBasEstrategias',0,0,628,335,'MANTENIMIENTO DE ESTRATEGIAS');
		dialogsMantBasEstrategias.setAdjY(40);
		editsMatBasEstDescripcion = edits.create('editsMatBasEstDescripcion','MatPais_Descripcion','Descripción:',3,80,'normal');
		editsMatBasEstDescripcion.setValidEmpty();
		gridsMantBasEstCodDescripcion = grids.create('gridsMantBasEstCodDescripcion',10,2);
		imgButtonsMantBasEstAgregar = imgButtons.create('imgButtonsMantBasEstAgregar','Agregar','ok.png');
		imgButtonsMantBasEstModificar = imgButtons.create('imgButtonsMantBasEstModificar','Modificar','icono_modificar.png');
		imgButtonsMantBasEstModificar.setDisable();
		imgButtonsMantBasEstEliminar = imgButtons.create('imgButtonsMantBasEstEliminar','Eliminar','eliminar.png');
      	imgButtonsMantBasEstEliminar.setDisable();
      	imgButtonsMantBasEstLimpiar = imgButtons.create('imgButtonsMantBasEstLimpiar','Limpiar','limpiar.png');
      	imgButtonsMantBasEstSalir = imgButtons.create('imgButtonsMantBasEstSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMantBasEstrategias_Init();
		this.gridsMantBasEstCodDescripcion_Init();
		this.createMWs();		
	},

  	limpiar : function(methodName){
  		editsMatBasEstDescripcion.setValue("");
  		dialogsMantBasEstrategias.setMsg("");
		imgButtonsMantBasEstAgregar.setEnable();
		imgButtonsMantBasEstModificar.setDisable();
		imgButtonsMantBasEstEliminar.setDisable();	

        if (methodName == "eliminar" && gridsMantBasEstCodDescripcion.getTotalRecord() == 1) { 
        	gridsMantBasEstCodDescripcion.clean();
        	dlgWait.hide();
        }
        else
  			Tool.getGridData("MantObject", "get" + this.windowName, dialogsMantBasEstrategias, gridsMantBasEstCodDescripcion, false); 		    		
  	},
  	
  	setData : function(){
		if (gridsMantBasEstCodDescripcion.getDataCell(1) != ""){
			this.idEstrategia = gridsMantBasEstCodDescripcion.getDataCell(1);
	        editsMatBasEstDescripcion.setValue(gridsMantBasEstCodDescripcion.getDataCell(2));
	        imgButtonsMantBasEstAgregar.setDisable();
			imgButtonsMantBasEstModificar.setEnable();
			imgButtonsMantBasEstEliminar.setEnable();
        }     			
	},
  	
  	setEvents : function(){
  		gridsMantBasEstCodDescripcion.onClickCells(this.windowName + ".setData()");
	    imgButtonsMantBasEstAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
		imgButtonsMantBasEstModificar.onClick(this.windowName + ".coreUpdate('modificar')");
		imgButtonsMantBasEstEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
	  	imgButtonsMantBasEstLimpiar.onClick(this.windowName + ".limpiar()");
	  	imgButtonsMantBasEstSalir.onClick("dialogsMantBasEstrategias.close()");	  	 	
    },
    
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMatBasEstDescripcion.valid(dialogsMantBasEstrategias)) {
			if (methodName == 'eliminar') 
				rlx.addInt('reg', this.idEstrategia);
			else {
				rlx.add('reg', editsMatBasEstDescripcion);
				if (methodName == 'modificar') rlx.addInt('reg', this.idEstrategia);
			}
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiar('" + methodName + "')", rlx);
		} 
	}
};