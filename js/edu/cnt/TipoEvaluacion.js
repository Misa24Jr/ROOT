var dialogsTipoEvaluacion = new Object();
var editsTipoEvaDescripcion = new Object();
var gridsTipoEvaluacion = new Object();
var imgButtonsTipoEvaAgregar = new Object();
var imgButtonsTipoEvaModificar = new Object();
var imgButtonsTipoEvaEliminar = new Object();
var imgButtonsTipoEvaLimpiar = new Object();
var imgButtonsTipoEvaSalir = new Object();
var mwTipoEvaluacion  = new Object();// minWindow

var TipoEvaluacion = {
	windowName : 'TipoEvaluacion',
	isCreate : false,
	idTipoEvaluacion : 0,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsTipoEvaluacion.isByClean())
 			this.limpiar();			
		dialogsTipoEvaluacion.show();
	},
	
	hide : function() {
		dialogsTipoEvaluacion.hide();
	},
	
	createMWs : function() {
        	mwTipoEvaluacion = desktop.addMinWindow('Tipos de Evaluacion', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsTipoEvaluacion.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsTipoEvaluacion_Init : function() {
        dialogsTipoEvaluacion.setMinimizeXY(0,0);
        dialogsTipoEvaluacion.setCenterScreen();
        dialogsTipoEvaluacion.addSpace(1,0,20);
        dialogsTipoEvaluacion.addLn(1,1,1);
		dialogsTipoEvaluacion.setHeightCell(1,1,10);
        dialogsTipoEvaluacion.addObjToDialog(editsTipoEvaDescripcion,3,1,24);
        editsTipoEvaDescripcion.setSizeEdit(299);
		editsTipoEvaDescripcion.setMaxLength(50); 
        dialogsTipoEvaluacion.addLn(4,1,1);
		dialogsTipoEvaluacion.setHeightCell(4,1,10);
        dialogsTipoEvaluacion.addObjToDialog(gridsTipoEvaluacion.getObject(),5,1);
        dialogsTipoEvaluacion.addLn(6,1,1);
		dialogsTipoEvaluacion.setHeightCell(6,1,12);
        dialogsTipoEvaluacion.addObjToDialog(imgButtonsTipoEvaAgregar,7,1);
        dialogsTipoEvaluacion.addObjToDialog(imgButtonsTipoEvaModificar,7,1);
        dialogsTipoEvaluacion.addObjToDialog(imgButtonsTipoEvaEliminar,7,1);
        dialogsTipoEvaluacion.addObjToDialog(imgButtonsTipoEvaLimpiar,7,1);
        dialogsTipoEvaluacion.addObjToDialog(imgButtonsTipoEvaSalir,7,1);        
        imgButtonsTipoEvaAgregar.setDimension(90,22);
        imgButtonsTipoEvaModificar.setDimension(90,22);
        imgButtonsTipoEvaEliminar.setDimension(90,22);
        imgButtonsTipoEvaLimpiar.setDimension(90,22);
        imgButtonsTipoEvaSalir.setDimension(90,22);
		imgButtonsTipoEvaModificar.setDisable();
		imgButtonsTipoEvaEliminar.setDisable();
        dialogsTipoEvaluacion.adjAllMarginObj(7,1,20);
        dialogsTipoEvaluacion.leftMarginObj(7,1,0,26);
	},
	
	gridsTipoEvaluacion_Init : function(){
        gridsTipoEvaluacion.setFixColRow(false,true);
        gridsTipoEvaluacion.addTitleVectorX(['Descripción', 'id',]);
        gridsTipoEvaluacion.showData();        
        gridsTipoEvaluacion.setSizeCol(1,587);
        gridsTipoEvaluacion.setSizeCol(2,0);
        gridsTipoEvaluacion.hideCol(2);
	},

	create : function(){
		dialogsTipoEvaluacion = dialogs.create('dialogsTipoEvaluacion',0,0,631,335,'FORMAS DE EVALUACIÓN');
		editsTipoEvaDescripcion = edits.create('editsTipoEvaDescripcion','editsTipoEvaDescripcion','Descripción:',1,80,'normal');
		editsTipoEvaDescripcion.setValidEmpty();
		gridsTipoEvaluacion = grids.create('gridsTipoEvaluacion',10,2);
		imgButtonsTipoEvaAgregar = imgButtons.create('imgButtonsTipoEvaAgregar','Agregar','ok.png');
		imgButtonsTipoEvaModificar = imgButtons.create('imgButtonsTipoEvaModificar','Modificar','icono_modificar.png');
		imgButtonsTipoEvaEliminar = imgButtons.create('imgButtonsTipoEvaEliminar','Eliminar','eliminar.jpg');
		imgButtonsTipoEvaLimpiar = imgButtons.create('imgButtonsTipoEvaLimpiar','Limpiar','limpiar.png');
		imgButtonsTipoEvaSalir = imgButtons.create('imgButtonsTipoEvaSalir','Salir','salir.png');
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsTipoEvaluacion_Init();
		this.gridsTipoEvaluacion_Init();
		this.createMWs();
	},

  	limpiar : function(){
  		editsTipoEvaDescripcion.setValue(""); 	
  		gridsTipoEvaluacion.clean();
  		dialogsTipoEvaluacion.setMsg("");
		imgButtonsTipoEvaAgregar.setEnable();
		imgButtonsTipoEvaModificar.setDisable();
		imgButtonsTipoEvaEliminar.setDisable();	
		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsTipoEvaluacion, gridsTipoEvaluacion, false);	    		
  	},
  	  
    setData : function(){
		if (gridsTipoEvaluacion.getDataCell(1) != ""){
			idTipoEvaluacion = gridsTipoEvaluacion.getDataCell(2);
			editsTipoEvaDescripcion.setValue(gridsTipoEvaluacion.getDataCell(1));
			imgButtonsTipoEvaAgregar.setDisable();
			imgButtonsTipoEvaModificar.setEnable();
			imgButtonsTipoEvaEliminar.setEnable();			
		}
	},
   
	setEvents : function(){
		gridsTipoEvaluacion.onClickCells(this.windowName + ".setData()");
		imgButtonsTipoEvaAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
		imgButtonsTipoEvaModificar.onClick(this.windowName + ".coreUpdate('modificar')");
		imgButtonsTipoEvaEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");	
		imgButtonsTipoEvaLimpiar.onClick(this.windowName + ".limpiar()");  	
		imgButtonsTipoEvaSalir.onClick("dialogsTipoEvaluacion.close()");	  	 	
	},
  
	coreUpdate : function(methodName){
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsTipoEvaDescripcion.valid(dialogsTipoEvaluacion)){ 					
			if (methodName != 'eliminar')
				rlx.add('reg',editsTipoEvaDescripcion);					
			if (methodName != 'agregar') 
				rlx.addInt('reg',idTipoEvaluacion);
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
		} 
	}
};