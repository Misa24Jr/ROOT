var dialogsMantBasInstrumentos = new Object();
var editsMantBasInsDescripcion = new Object();
var gridsMantBasInsCodDescripcion = new Object();
var imgButtonsMantBasInsAgregar = new Object();
var imgButtonsMantBasInsModificar = new Object();
var imgButtonsMantBasInsEliminar = new Object();
var imgButtonsMantBasInsLimpiar = new Object();
var imgButtonsMantBasInsSalir = new Object();
var mwMantBasInstrumentos = new Object();// minWindow

var MantBasInstrumentos = {
	windowName : 'MantBasInstrumentos',
	isCreate : false,
	idInstrumento : 0,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantBasInstrumentos.isByClean())
 			this.limpiar();			
		dialogsMantBasInstrumentos.show();
	},
	
	hide : function(){
		dialogsMantBasInstrumentos.hide();
	},
	
	createMWs : function(){
        	mwMantBasInstrumentos = desktop.addMinWindow('M.B.Instrumentos', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantBasInstrumentos.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantBasInstrumentos_Init : function(){
        dialogsMantBasInstrumentos.setMinimizeXY(0,0);
        dialogsMantBasInstrumentos.setCenterScreen();
        dialogsMantBasInstrumentos.addSpace(0,0,20);
        dialogsMantBasInstrumentos.addLn(1,1,1);
		dialogsMantBasInstrumentos.setHeightCell(1,1,10);  
        dialogsMantBasInstrumentos.addObjToDialog(editsMantBasInsDescripcion,2,1,24);
        editsMantBasInsDescripcion.setSizeEdit(504);
        editsMantBasInsDescripcion.setMaxLength(250);       
        dialogsMantBasInstrumentos.addLn(3,1,1);
		dialogsMantBasInstrumentos.setHeightCell(3,1,10);  
        dialogsMantBasInstrumentos.addObjToDialog(gridsMantBasInsCodDescripcion.getObject(),4,1);
        dialogsMantBasInstrumentos.addLn(5,1,1);
		dialogsMantBasInstrumentos.setHeightCell(5,1,12);  
        dialogsMantBasInstrumentos.addObjToDialog(imgButtonsMantBasInsAgregar,6,1);
        dialogsMantBasInstrumentos.addObjToDialog(imgButtonsMantBasInsModificar,6,1);
        dialogsMantBasInstrumentos.addObjToDialog(imgButtonsMantBasInsEliminar,6,1);
        dialogsMantBasInstrumentos.addObjToDialog(imgButtonsMantBasInsLimpiar,6,1);
        dialogsMantBasInstrumentos.addObjToDialog(imgButtonsMantBasInsSalir,6,1); 
        imgButtonsMantBasInsAgregar.setDimension(90,22);
        imgButtonsMantBasInsModificar.setDimension(90,22);
        imgButtonsMantBasInsEliminar.setDimension(90,22);
        imgButtonsMantBasInsLimpiar.setDimension(90,22);
        imgButtonsMantBasInsSalir.setDimension(90,22);
        dialogsMantBasInstrumentos.adjAllMarginObj(6,1,18);
        dialogsMantBasInstrumentos.leftMarginObj(6,1,0,31);
	},
  
	gridsMantBasInsCodDescripcion_Init : function(){
        gridsMantBasInsCodDescripcion.setFixColRow(false,true);
        gridsMantBasInsCodDescripcion.addTitleVectorX(['Id_codigo','Descripción']);
        gridsMantBasInsCodDescripcion.showData();        
        gridsMantBasInsCodDescripcion.setSizeCol(1,5);
        gridsMantBasInsCodDescripcion.setSizeCol(2,585);
        gridsMantBasInsCodDescripcion.hideCol(1);
	},

	create : function(){
		dialogsMantBasInstrumentos = dialogs.create('dialogsMantBasInstrumentos',0,0,628,335,'MANTENIMIENTO INSTRUMENTOS DE EVALUACION');
		dialogsMantBasInstrumentos.setAdjY(40);
		editsMantBasInsDescripcion = edits.create('editsMantBasInsDescripcion','MatPais_Descripcion','Descripción:',3,80,'normal');
		editsMantBasInsDescripcion.setValidEmpty();
		gridsMantBasInsCodDescripcion = grids.create('gridsMantBasInsCodDescripcion',10,2);
		imgButtonsMantBasInsAgregar = imgButtons.create('imgButtonsMantBasInsAgregar','Agregar','ok.png');
		imgButtonsMantBasInsModificar = imgButtons.create('imgButtonsMantBasInsModificar','Modificar','icono_modificar.png');
		imgButtonsMantBasInsModificar.setDisable();
		imgButtonsMantBasInsEliminar = imgButtons.create('imgButtonsMantBasInsEliminar','Eliminar','eliminar.png');
      	imgButtonsMantBasInsEliminar.setDisable();
      	imgButtonsMantBasInsLimpiar = imgButtons.create('imgButtonsMantBasInsLimpiar','Limpiar','limpiar.png');
      	imgButtonsMantBasInsSalir = imgButtons.create('imgButtonsMantBasInsSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMantBasInstrumentos_Init();
		this.gridsMantBasInsCodDescripcion_Init();
		this.createMWs();		
	},

  	limpiar : function(methodName){
  		editsMantBasInsDescripcion.setValue("");
  		dialogsMantBasInstrumentos.setMsg("");
		imgButtonsMantBasInsAgregar.setEnable();
		imgButtonsMantBasInsModificar.setDisable();
		imgButtonsMantBasInsEliminar.setDisable();	

		if (methodName == "eliminar" && gridsMantBasInsCodDescripcion.getTotalRecord() == 1) { 
			gridsMantBasInsCodDescripcion.clean();
        	dlgWait.hide();
        }
        else
  			Tool.getGridData("MantObject", "get"+this.windowName, dialogsMantBasInstrumentos, gridsMantBasInsCodDescripcion, false); 		    		
  	},
  	
  	setData : function(){
		if (gridsMantBasInsCodDescripcion.getDataCell(1) != ""){
			this.idInstrumento = gridsMantBasInsCodDescripcion.getDataCell(1);
	        editsMantBasInsDescripcion.setValue(gridsMantBasInsCodDescripcion.getDataCell(2));
	        imgButtonsMantBasInsAgregar.setDisable();
			imgButtonsMantBasInsModificar.setEnable();
			imgButtonsMantBasInsEliminar.setEnable();
        }     			
	},
  	
  	setEvents : function(){
  		gridsMantBasInsCodDescripcion.onClickCells(this.windowName+".setData()");
	    imgButtonsMantBasInsAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantBasInsModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantBasInsEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
	  	imgButtonsMantBasInsLimpiar.onClick(this.windowName+".limpiar()");
	  	imgButtonsMantBasInsSalir.onClick('dialogsMantBasInstrumentos.close()');	  	 	
    },
    
	coreUpdate : function(methodName){
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMantBasInsDescripcion.valid(dialogsMantBasInstrumentos)) {
			if (methodName == 'eliminar') 
				rlx.addInt('reg', this.idInstrumento);
			else {
				rlx.add('reg', editsMantBasInsDescripcion);
				if (methodName == 'modificar') rlx.addInt('reg', this.idInstrumento);
			}
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiar('" + methodName + "')", rlx);
		} 
	}
};