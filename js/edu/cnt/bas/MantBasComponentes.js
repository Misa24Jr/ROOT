var dialogsMantBasComponentes = new Object();
var editsMantBasComDescripcion = new Object();
var gridsMantBasComCodDescripcion = new Object();
var imgButtonsMantBasComAgregar = new Object();
var imgButtonsMantBasComModificar = new Object();
var imgButtonsMantBasComEliminar = new Object();
var imgButtonsMantBasComLimpiar = new Object();
var imgButtonsMantBasComSalir = new Object();
var mwMantBasComponentes = new Object();// minWindow

var MantBasComponentes = {
	windowName : 'MantBasComponentes',
	isCreate : false,
	idComp : 0,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantBasComponentes.isByClean())
 			this.limpiar();			
		dialogsMantBasComponentes.show();
	},
	
	hide : function(){
		dialogsMantBasComponentes.hide();
	},
	
	createMWs : function(){
        	mwMantBasComponentes = desktop.addMinWindow('M.B.Componentes', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantBasComponentes.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantBasComponentes_Init : function(){
        dialogsMantBasComponentes.setMinimizeXY(0,0);
        dialogsMantBasComponentes.setCenterScreen();
        dialogsMantBasComponentes.addSpace(0,0,20);
        dialogsMantBasComponentes.addLn(1,1,1);
		dialogsMantBasComponentes.setHeightCell(1,1,10);  
        dialogsMantBasComponentes.addObjToDialog(editsMantBasComDescripcion,2,1,24);
        editsMantBasComDescripcion.setSizeEdit(777);
        editsMantBasComDescripcion.setMaxLength(250);       
        dialogsMantBasComponentes.addLn(3,1,1);
		dialogsMantBasComponentes.setHeightCell(3,1,10);  
        dialogsMantBasComponentes.addObjToDialog(gridsMantBasComCodDescripcion.getObject(),4,1);
        dialogsMantBasComponentes.addLn(5,1,1);
		dialogsMantBasComponentes.setHeightCell(5,1,12);  
        dialogsMantBasComponentes.addObjToDialog(imgButtonsMantBasComAgregar,6,1);
        dialogsMantBasComponentes.addObjToDialog(imgButtonsMantBasComModificar,6,1);
        dialogsMantBasComponentes.addObjToDialog(imgButtonsMantBasComEliminar,6,1);
        dialogsMantBasComponentes.addObjToDialog(imgButtonsMantBasComLimpiar,6,1);
        dialogsMantBasComponentes.addObjToDialog(imgButtonsMantBasComSalir,6,1); 
        imgButtonsMantBasComAgregar.setDimension(90,22);
        imgButtonsMantBasComModificar.setDimension(90,22);
        imgButtonsMantBasComEliminar.setDimension(90,22);
        imgButtonsMantBasComLimpiar.setDimension(90,22);
        imgButtonsMantBasComSalir.setDimension(90,22);
        dialogsMantBasComponentes.adjAllMarginObj(6,1,18);
        dialogsMantBasComponentes.leftMarginObj(6,1,0,164);
	},
  
	gridsMantBasComCodDescripcion_Init : function(){
        gridsMantBasComCodDescripcion.setFixColRow(false,true);
        gridsMantBasComCodDescripcion.addTitleVectorX(['Id_codigo','Descripción']);
        gridsMantBasComCodDescripcion.showData();        
        gridsMantBasComCodDescripcion.setSizeCol(1,5);
        gridsMantBasComCodDescripcion.setSizeCol(2,857);
        gridsMantBasComCodDescripcion.hideCol(1);
	},

	create : function(){
		dialogsMantBasComponentes = dialogs.create('dialogsMantBasComponentes',0,0,900,525,'MANTENIMIENTO COMPONENTES');
		dialogsMantBasComponentes.setAdjY(40);
		editsMantBasComDescripcion = edits.create('editsMantBasComDescripcion','MatPais_Descripcion','Descripción:',3,80,'normal');
		editsMantBasComDescripcion.setValidEmpty();
		gridsMantBasComCodDescripcion = grids.create('gridsMantBasComCodDescripcion',20,2);
		imgButtonsMantBasComAgregar = imgButtons.create('imgButtonsMantBasComAgregar','Agregar','ok.png');
		imgButtonsMantBasComModificar = imgButtons.create('imgButtonsMantBasComModificar','Modificar','icono_modificar.png');
		imgButtonsMantBasComModificar.setDisable();
		imgButtonsMantBasComEliminar = imgButtons.create('imgButtonsMantBasComEliminar','Eliminar','eliminar.png');
      	imgButtonsMantBasComEliminar.setDisable();
      	imgButtonsMantBasComLimpiar = imgButtons.create('imgButtonsMantBasComLimpiar','Limpiar','limpiar.png');
      	imgButtonsMantBasComSalir = imgButtons.create('imgButtonsMantBasComSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMantBasComponentes_Init();
		this.gridsMantBasComCodDescripcion_Init();
		this.createMWs();		
	},

  	limpiar : function(methodName){
  		editsMantBasComDescripcion.setValue("");
  		dialogsMantBasComponentes.setMsg("");
		imgButtonsMantBasComAgregar.setEnable();
		imgButtonsMantBasComModificar.setDisable();
		imgButtonsMantBasComEliminar.setDisable();	

		if (methodName == "eliminar" && gridsMantBasComCodDescripcion.getTotalRecord() == 1) { 
			gridsMantBasComCodDescripcion.clean();
        	dlgWait.hide();
        }
        else
  			Tool.getGridData("MantObject", "get"+this.windowName, dialogsMantBasComponentes, gridsMantBasComCodDescripcion, false); 		    		
  	},
  	
  	setData : function(){
		if (gridsMantBasComCodDescripcion.getDataCell(1) != ""){
			this.idComp = gridsMantBasComCodDescripcion.getDataCell(1);
	        editsMantBasComDescripcion.setValue(gridsMantBasComCodDescripcion.getDataCell(2));
	        imgButtonsMantBasComAgregar.setDisable();
			imgButtonsMantBasComModificar.setEnable();
			imgButtonsMantBasComEliminar.setEnable();
        }     			
	},
  	
  	setEvents : function(){
  		gridsMantBasComCodDescripcion.onClickCells(this.windowName+".setData()");
	    imgButtonsMantBasComAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantBasComModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantBasComEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
	  	imgButtonsMantBasComLimpiar.onClick(this.windowName+".limpiar()");
	  	imgButtonsMantBasComSalir.onClick('dialogsMantBasComponentes.close()');	  	 	
    },
    
	coreUpdate : function(methodName){
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMantBasComDescripcion.valid(dialogsMantBasComponentes)) {
			if (methodName == 'eliminar') 
				rlx.addInt('reg', this.idComp);
			else {
				rlx.add('reg', editsMantBasComDescripcion);
				if (methodName == 'modificar') rlx.addInt('reg', this.idComp);
			}
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiar('" + methodName + "')", rlx);
		} 
	}
};