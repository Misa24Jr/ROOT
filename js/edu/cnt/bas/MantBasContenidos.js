var dialogsMantBasContenidos = new Object();
var memoMantBasConDescripcion = new Object();
var gridsMantBasConCodDescripcion = new Object();
var imgButtonsMantBasConAgregar = new Object();
var imgButtonsMantBasConModificar = new Object();
var imgButtonsMantBasConEliminar = new Object();
var imgButtonsMantBasConLimpiar = new Object();
var imgButtonsMantBasConSalir = new Object();
var mwMantBasContenidos = new Object();// minWindow

var MantBasContenidos = {
	windowName : 'MantBasContenidos',
	isCreate : false,
	idContenido : 0,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantBasContenidos.isByClean())
 			this.limpiar();			
		dialogsMantBasContenidos.show();
	},
	
	hide : function(){
		dialogsMantBasContenidos.hide();
	},
	
	createMWs : function(){
        	mwMantBasContenidos = desktop.addMinWindow('M.B.Contenidos', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantBasContenidos.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantBasContenidos_Init : function(){
        dialogsMantBasContenidos.setMinimizeXY(0,0);
        dialogsMantBasContenidos.setCenterScreen();
        dialogsMantBasContenidos.addSpace(0,0,20);
        dialogsMantBasContenidos.addLn(1,1,1);
		dialogsMantBasContenidos.setHeightCell(1,1,90);  
		dialogsMantBasContenidos.addObject(memoMantBasConDescripcion,20,38);
		memoMantBasConDescripcion.vAlignCaption('middle');
		memoMantBasConDescripcion.setDimension(775, 70);
		memoMantBasConDescripcion.setMaxLength(2000);
        dialogsMantBasContenidos.addLn(3,1,1);
		dialogsMantBasContenidos.setHeightCell(3,1,10);  
        dialogsMantBasContenidos.addObjToDialog(gridsMantBasConCodDescripcion.getObject(),4,1);
        dialogsMantBasContenidos.addLn(5,1,1);
		dialogsMantBasContenidos.setHeightCell(5,1,12);  
        dialogsMantBasContenidos.addObjToDialog(imgButtonsMantBasConAgregar,6,1);
        dialogsMantBasContenidos.addObjToDialog(imgButtonsMantBasConModificar,6,1);
        dialogsMantBasContenidos.addObjToDialog(imgButtonsMantBasConEliminar,6,1);
        dialogsMantBasContenidos.addObjToDialog(imgButtonsMantBasConLimpiar,6,1);
        dialogsMantBasContenidos.addObjToDialog(imgButtonsMantBasConSalir,6,1); 
        imgButtonsMantBasConAgregar.setDimension(90,22);
        imgButtonsMantBasConModificar.setDimension(90,22);
        imgButtonsMantBasConEliminar.setDimension(90,22);
        imgButtonsMantBasConLimpiar.setDimension(90,22);
        imgButtonsMantBasConSalir.setDimension(90,22);
        dialogsMantBasContenidos.adjAllMarginObj(6,1,18);
        dialogsMantBasContenidos.leftMarginObj(6,1,0,164);
		
	},
  
	gridsMantBasConCodDescripcion_Init : function(){
        gridsMantBasConCodDescripcion.setFixColRow(false,true);
        gridsMantBasConCodDescripcion.addTitleVectorX(['Id_codigo','Descripción']);
        gridsMantBasConCodDescripcion.showData();        
        gridsMantBasConCodDescripcion.setSizeCol(1,5);
        gridsMantBasConCodDescripcion.setSizeCol(2,857);
        gridsMantBasConCodDescripcion.hideCol(1);
	},

	create : function(){
		dialogsMantBasContenidos = dialogs.create('dialogsMantBasContenidos',0,0,900,575,'MANTENIMIENTO CONTENIDOS');
		dialogsMantBasContenidos.setAdjY(40);
		memoMantBasConDescripcion = memo.create('memoMantBasConDescripcion','Descripción:',1,0,80);
        memoMantBasConDescripcion.setValidEmpty(); 
		gridsMantBasConCodDescripcion = grids.create('gridsMantBasConCodDescripcion',20,2);
		imgButtonsMantBasConAgregar = imgButtons.create('imgButtonsMantBasConAgregar','Agregar','ok.png');
		imgButtonsMantBasConModificar = imgButtons.create('imgButtonsMantBasConModificar','Modificar','icono_modificar.png');
		imgButtonsMantBasConModificar.setDisable();
		imgButtonsMantBasConEliminar = imgButtons.create('imgButtonsMantBasConEliminar','Eliminar','eliminar.png');
      	imgButtonsMantBasConEliminar.setDisable();
      	imgButtonsMantBasConLimpiar = imgButtons.create('imgButtonsMantBasConLimpiar','Limpiar','limpiar.png');
      	imgButtonsMantBasConSalir = imgButtons.create('imgButtonsMantBasConSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMantBasContenidos_Init();
		this.gridsMantBasConCodDescripcion_Init();
		this.createMWs();		
	},

  	limpiar : function(methodName){
  		memoMantBasConDescripcion.setValue("");
  		dialogsMantBasContenidos.setMsg("");
		imgButtonsMantBasConAgregar.setEnable();
		imgButtonsMantBasConModificar.setDisable();
		imgButtonsMantBasConEliminar.setDisable();	

        if (methodName == "eliminar" && gridsMantBasConCodDescripcion.getTotalRecord() == 1) { 
        	gridsMantBasConCodDescripcion.clean();
        	dlgWait.hide();
        }
        else
  			Tool.getGridData("MantObject", "get"+this.windowName, dialogsMantBasContenidos, gridsMantBasConCodDescripcion, false); 		    		
  	},
  	
  	setData : function(){
		if (gridsMantBasConCodDescripcion.getDataCell(1) != ""){
			this.idContenido = gridsMantBasConCodDescripcion.getDataCell(1);
	        memoMantBasConDescripcion.setValue(gridsMantBasConCodDescripcion.getDataCell(2));
	        imgButtonsMantBasConAgregar.setDisable();
			imgButtonsMantBasConModificar.setEnable();
			imgButtonsMantBasConEliminar.setEnable();
        }     			
	},
  	
  	setEvents : function(){
  		gridsMantBasConCodDescripcion.onClickCells(this.windowName+".setData()");
	    imgButtonsMantBasConAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantBasConModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantBasConEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
	  	imgButtonsMantBasConLimpiar.onClick(this.windowName+".limpiar()");
	  	imgButtonsMantBasConSalir.onClick('dialogsMantBasContenidos.close()');	  	 	
    },
    
	coreUpdate : function(methodName){
		var rlx = xmlStructs.createRecordList("rlx");

		if (memoMantBasConDescripcion.valid(dialogsMantBasContenidos)) {
			if (methodName == 'eliminar') 
				rlx.addInt('reg', this.idContenido);
			else {
				rlx.add('reg', memoMantBasConDescripcion);
				if (methodName == 'modificar') rlx.addInt('reg', this.idContenido);
			}
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiar('" + methodName + "')", rlx);
		} 
	}
};