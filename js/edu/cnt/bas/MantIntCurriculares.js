var dialogsMantIntCurriculares = new Object();
var editsMantBasIntCurDescripcion = new Object();
var gridsMantIntCurCodDescripcion = new Object();
var imgButtonsIntCurAgregar = new Object();
var imgButtonsIntCurModificar = new Object();
var imgButtonsIntCurEliminar = new Object();
var imgButtonsIntCurLimpiar = new Object();
var imgButtonsIntCurSalir = new Object();
var mwMantIntCurriculares = new Object();// minWindow

var MantIntCurriculares = {
	windowName : 'MantIntCurriculares',
	isCreate : false,
	idIntCurriculares : 0,
	
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantIntCurriculares.isByClean())
 			this.limpiar();			
		dialogsMantIntCurriculares.show();
	},
	
	hide : function(){
		dialogsMantIntCurriculares.hide();
	},
	
	createMWs : function(){
        	mwMantIntCurriculares = desktop.addMinWindow('I.Curriculares', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantIntCurriculares.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantIntCurriculares_Init : function(){
        dialogsMantIntCurriculares.setMinimizeXY(0,0);
        dialogsMantIntCurriculares.setCenterScreen();
        dialogsMantIntCurriculares.addSpace(0,0,20);
        dialogsMantIntCurriculares.addLn(1,1,1);
		dialogsMantIntCurriculares.setHeightCell(1,1,10);  
        dialogsMantIntCurriculares.addObjToDialog(editsMantBasIntCurDescripcion,2,1,24);
        editsMantBasIntCurDescripcion.setSizeEdit(504);
        editsMantBasIntCurDescripcion.setMaxLength(250);       
        dialogsMantIntCurriculares.addLn(3,1,1);
		dialogsMantIntCurriculares.setHeightCell(3,1,10);  
        dialogsMantIntCurriculares.addObjToDialog(gridsMantIntCurCodDescripcion.getObject(),4,1);
        dialogsMantIntCurriculares.addLn(5,1,1);
		dialogsMantIntCurriculares.setHeightCell(5,1,12);  
        dialogsMantIntCurriculares.addObjToDialog(imgButtonsIntCurAgregar,6,1);
        dialogsMantIntCurriculares.addObjToDialog(imgButtonsIntCurModificar,6,1);
        dialogsMantIntCurriculares.addObjToDialog(imgButtonsIntCurEliminar,6,1);
        dialogsMantIntCurriculares.addObjToDialog(imgButtonsIntCurLimpiar,6,1);
        dialogsMantIntCurriculares.addObjToDialog(imgButtonsIntCurSalir,6,1); 
        imgButtonsIntCurAgregar.setDimension(90,22);
        imgButtonsIntCurModificar.setDimension(90,22);
        imgButtonsIntCurEliminar.setDimension(90,22);
        imgButtonsIntCurLimpiar.setDimension(90,22);
        imgButtonsIntCurSalir.setDimension(90,22);
        dialogsMantIntCurriculares.adjAllMarginObj(6,1,18);
        dialogsMantIntCurriculares.leftMarginObj(6,1,0,31);
	},
  
	gridsMantIntCurCodDescripcion_Init : function(){
        gridsMantIntCurCodDescripcion.setFixColRow(false,true);
        gridsMantIntCurCodDescripcion.addTitleVectorX(['Id_codigo','Descripción']);
        gridsMantIntCurCodDescripcion.showData();        
        gridsMantIntCurCodDescripcion.setSizeCol(1,5);
        gridsMantIntCurCodDescripcion.setSizeCol(2,585);
        gridsMantIntCurCodDescripcion.hideCol(1);
	},

	create : function(){
		dialogsMantIntCurriculares = dialogs.create('dialogsMantIntCurriculares',0,0,628,335,'INTENCIONALIDADES CURRICULARES');
		dialogsMantIntCurriculares.setAdjY(40);
		editsMantBasIntCurDescripcion = edits.create('editsMantBasIntCurDescripcion','MatPais_Descripcion','Descripción:',3,80,'normal');
		editsMantBasIntCurDescripcion.setValidEmpty();
		gridsMantIntCurCodDescripcion = grids.create('gridsMantIntCurCodDescripcion',10,2);
		imgButtonsIntCurAgregar = imgButtons.create('imgButtonsIntCurAgregar','Agregar','ok.png');
		imgButtonsIntCurModificar = imgButtons.create('imgButtonsIntCurModificar','Modificar','icono_modificar.png');
		imgButtonsIntCurModificar.setDisable();
		imgButtonsIntCurEliminar = imgButtons.create('imgButtonsIntCurEliminar','Eliminar','eliminar.png');
      	imgButtonsIntCurEliminar.setDisable();
      	imgButtonsIntCurLimpiar = imgButtons.create('imgButtonsIntCurLimpiar','Limpiar','limpiar.png');
      	imgButtonsIntCurSalir = imgButtons.create('imgButtonsIntCurSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMantIntCurriculares_Init();
		this.gridsMantIntCurCodDescripcion_Init();
		this.createMWs();		
	},

  	limpiar : function(methodName){
  		editsMantBasIntCurDescripcion.setValue("");
  		dialogsMantIntCurriculares.setMsg("");
		imgButtonsIntCurAgregar.setEnable();
		imgButtonsIntCurModificar.setDisable();
		imgButtonsIntCurEliminar.setDisable();	

		if (methodName == "eliminar" && gridsMantIntCurCodDescripcion.getTotalRecord() == 1) { 
			gridsMantIntCurCodDescripcion.clean();
        	dlgWait.hide();
        }
        else
  			Tool.getGridData("MantObject", "getMantBasPilares", dialogsMantIntCurriculares, gridsMantIntCurCodDescripcion, false); 		    		
  	},
  	
  	setData : function(){
		if (gridsMantIntCurCodDescripcion.getDataCell(1) != ""){
			this.idIntCurriculares = gridsMantIntCurCodDescripcion.getDataCell(1);
	        editsMantBasIntCurDescripcion.setValue(gridsMantIntCurCodDescripcion.getDataCell(2));
	        imgButtonsIntCurAgregar.setDisable();
			imgButtonsIntCurModificar.setEnable();
			imgButtonsIntCurEliminar.setEnable();
        }     			
	},
  	   
  	setEvents : function(){
  		gridsMantIntCurCodDescripcion.onClickCells(this.windowName+".setData()");
	    imgButtonsIntCurAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsIntCurModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsIntCurEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
	  	imgButtonsIntCurLimpiar.onClick(this.windowName+".limpiar()");
	  	imgButtonsIntCurSalir.onClick('dialogsMantIntCurriculares.close()');	  	 	
    },
    
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMantBasIntCurDescripcion.valid(dialogsMantIntCurriculares)) {
			if (methodName == 'eliminar') 
				rlx.addInt('reg', this.idIntCurriculares);
			else {
				rlx.add('reg', editsMantBasIntCurDescripcion);
				if (methodName == 'modificar') rlx.addInt('reg', this.idIntCurriculares);
			}
			Tool.cnnSrv('MantObject', methodName + 'MantBasPilares', this.windowName + ".limpiar('" + methodName + "')", rlx);
		} 
	}
};