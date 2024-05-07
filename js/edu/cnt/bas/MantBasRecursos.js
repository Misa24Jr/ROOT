var dialogsMantBasRecursos = new Object();
var editsMantBasRecDescripcion = new Object();
var gridsMantBasRecCodDescripcion = new Object();
var imgButtonsMantBasRecAgregar = new Object();
var imgButtonsMantBasRecModificar = new Object();
var imgButtonsMantBasRecEliminar = new Object();
var imgButtonsMantBasRecLimpiar = new Object();
var imgButtonsMantBasRecSalir = new Object();
var mwMantBasRecursos = new Object();// minWindow

var MantBasRecursos = {
	windowName : 'MantBasRecursos',
	isCreate : false,
	idRecurso : 0,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantBasRecursos.isByClean())
 			this.limpiar();			
		dialogsMantBasRecursos.show();
	},
	
	hide : function(){
		dialogsMantBasRecursos.hide();
	},
	
	createMWs : function(){
        	mwMantBasRecursos = desktop.addMinWindow('M.B.Recursos', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantBasRecursos.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantBasRecursos_Init : function(){
        dialogsMantBasRecursos.setMinimizeXY(0,0);
        dialogsMantBasRecursos.setCenterScreen();
        dialogsMantBasRecursos.addSpace(0,0,20);
        dialogsMantBasRecursos.addLn(1,1,1);
		dialogsMantBasRecursos.setHeightCell(1,1,10);  
        dialogsMantBasRecursos.addObjToDialog(editsMantBasRecDescripcion,2,1,24);
        editsMantBasRecDescripcion.setSizeEdit(504);
        editsMantBasRecDescripcion.setMaxLength(250);       
        dialogsMantBasRecursos.addLn(3,1,1);
		dialogsMantBasRecursos.setHeightCell(3,1,10);  
        dialogsMantBasRecursos.addObjToDialog(gridsMantBasRecCodDescripcion.getObject(),4,1);
        dialogsMantBasRecursos.addLn(5,1,1);
		dialogsMantBasRecursos.setHeightCell(5,1,12);  
        dialogsMantBasRecursos.addObjToDialog(imgButtonsMantBasRecAgregar,6,1);
        dialogsMantBasRecursos.addObjToDialog(imgButtonsMantBasRecModificar,6,1);
        dialogsMantBasRecursos.addObjToDialog(imgButtonsMantBasRecEliminar,6,1);
        dialogsMantBasRecursos.addObjToDialog(imgButtonsMantBasRecLimpiar,6,1);
        dialogsMantBasRecursos.addObjToDialog(imgButtonsMantBasRecSalir,6,1); 
        imgButtonsMantBasRecAgregar.setDimension(90,22);
        imgButtonsMantBasRecModificar.setDimension(90,22);
        imgButtonsMantBasRecEliminar.setDimension(90,22);
        imgButtonsMantBasRecLimpiar.setDimension(90,22);
        imgButtonsMantBasRecSalir.setDimension(90,22);
        dialogsMantBasRecursos.adjAllMarginObj(6,1,18);
        dialogsMantBasRecursos.leftMarginObj(6,1,0,31);
	},
  
	gridsMantBasRecCodDescripcion_Init : function(){
        gridsMantBasRecCodDescripcion.setFixColRow(false,true);
        gridsMantBasRecCodDescripcion.addTitleVectorX(['Id_codigo','Descripción']);
        gridsMantBasRecCodDescripcion.showData();        
        gridsMantBasRecCodDescripcion.setSizeCol(1,0);
        gridsMantBasRecCodDescripcion.setSizeCol(2,585);
        gridsMantBasRecCodDescripcion.hideCol(1);
	},

	create : function(){
		dialogsMantBasRecursos = dialogs.create('dialogsMantBasRecursos',0,0,628,335,'MANTENIMIENTO DE RECURSOS');
		dialogsMantBasRecursos.setAdjY(40);
		editsMantBasRecDescripcion = edits.create('editsMantBasRecDescripcion','MatPais_Descripcion','Descripción:',3,80,'normal');
		editsMantBasRecDescripcion.setValidEmpty();
		gridsMantBasRecCodDescripcion = grids.create('gridsMantBasRecCodDescripcion',10,2);
		imgButtonsMantBasRecAgregar = imgButtons.create('imgButtonsMantBasRecAgregar','Agregar','ok.png');
		imgButtonsMantBasRecModificar = imgButtons.create('imgButtonsMantBasRecModificar','Modificar','icono_modificar.png');
		imgButtonsMantBasRecModificar.setDisable();
		imgButtonsMantBasRecEliminar = imgButtons.create('imgButtonsMantBasRecEliminar','Eliminar','eliminar.png');
      	imgButtonsMantBasRecEliminar.setDisable();
      	imgButtonsMantBasRecLimpiar = imgButtons.create('imgButtonsMantBasRecLimpiar','Limpiar','limpiar.png');
      	imgButtonsMantBasRecSalir = imgButtons.create('imgButtonsMantBasRecSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMantBasRecursos_Init();
		this.gridsMantBasRecCodDescripcion_Init();
		this.createMWs();		
	},

  	limpiar : function(methodName){
  		editsMantBasRecDescripcion.setValue("");
  		dialogsMantBasRecursos.setMsg("");
		imgButtonsMantBasRecAgregar.setEnable();
		imgButtonsMantBasRecModificar.setDisable();
		imgButtonsMantBasRecEliminar.setDisable();	

        if (methodName == "eliminar" && gridsMantBasRecCodDescripcion.getTotalRecord() == 1) { 
        	gridsMantBasRecCodDescripcion.clean();
        	dlgWait.hide();
        }
        else
  			Tool.getGridData("MantObject", "get"+this.windowName, dialogsMantBasRecursos, gridsMantBasRecCodDescripcion, false); 		    		
  	},
  	
  	setData : function() {
		if (gridsMantBasRecCodDescripcion.getDataCell(1) != "") {
			this.idRecurso = gridsMantBasRecCodDescripcion.getDataCell(1);
	        editsMantBasRecDescripcion.setValue(gridsMantBasRecCodDescripcion.getDataCell(2));
	        imgButtonsMantBasRecAgregar.setDisable();
			imgButtonsMantBasRecModificar.setEnable();
			imgButtonsMantBasRecEliminar.setEnable();
        }     			
	},
  	
  	setEvents : function() {
  		gridsMantBasRecCodDescripcion.onClickCells(this.windowName+".setData()");
	    imgButtonsMantBasRecAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantBasRecModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantBasRecEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
	  	imgButtonsMantBasRecLimpiar.onClick(this.windowName+".limpiar()");
	  	imgButtonsMantBasRecSalir.onClick('dialogsMantBasRecursos.close()');	  	 	
    },
    
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMantBasRecDescripcion.valid(dialogsMantBasRecursos)) {
			if (methodName == 'eliminar') 
				rlx.addInt('reg', this.idRecurso);
			else {
				rlx.add('reg', editsMantBasRecDescripcion);
				if (methodName == 'modificar') rlx.addInt('reg', this.idRecurso);
			}
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiar('" + methodName + "')", rlx);
		} 
	}
};