var dialogsMantTutorial = new Object();
var editsMantTutorialPantalla = new Object();
var editsMantTutorialFile = new Object();
var gridsMantTutorial = new Object();
var imgButtonsMantTutorialGuardar = new Object();
var imgButtonsMantTutorialLimpiar = new Object();
var imgButtonsMantTutorialSalir = new Object();
var mwMantTutorial  = new Object();// minWindow

var MantTutorial = {
	windowName : 'MantTutorial',
	isCreate : false, 
	hideIdTutorial: -1,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		this.limpiar();			
		dialogsMantTutorial.show();
	},
	
	hide : function(){
		dialogsMantTutorial.hide();
	},
	
	createMWs : function(){
        	mwMantTutorial = desktop.addMinWindow('Tutorial', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantTutorial.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantTutorial_Init : function(){
        dialogsMantTutorial.setMinimizeXY(0,0);
        dialogsMantTutorial.setCenterScreen();
        dialogsMantTutorial.addSpace(0,0,20);
        dialogsMantTutorial.addLn(1,1,1);
		dialogsMantTutorial.setHeightCell(1,1,10);  
		dialogsMantTutorial.addObjToDialog(editsMantTutorialPantalla,2,1,24);
        dialogsMantTutorial.addObjToDialog(editsMantTutorialFile,3,1,24);
		dialogsMantTutorial.addLn(4,1,1);
		dialogsMantTutorial.setHeightCell(4,1,10); 
		dialogsMantTutorial.addObjToDialog(gridsMantTutorial.getObject(),5,1);
        dialogsMantTutorial.addLn(6,1,1);
		dialogsMantTutorial.setHeightCell(6,1,12);
        dialogsMantTutorial.addObjToDialog(imgButtonsMantTutorialGuardar,7,1);
        dialogsMantTutorial.addObjToDialog(imgButtonsMantTutorialVer,7,1);
        dialogsMantTutorial.addObjToDialog(imgButtonsMantTutorialEliminar,7,1);
        dialogsMantTutorial.addObjToDialog(imgButtonsMantTutorialLimpiar,7,1);
        dialogsMantTutorial.addObjToDialog(imgButtonsMantTutorialSalir,7,1);
        dialogsMantTutorial.adjAllMarginObj(7,1,20);
        dialogsMantTutorial.leftMarginObj(7,1,0,119);
	},
  
    gridsMantTutorial_Init : function(){
        gridsMantTutorial.setFixColRow(false,true);
        gridsMantTutorial.addTitleVectorX(['Nombre de la Pantalla','Nombre del Archivo','id']);
        gridsMantTutorial.showData();        
        gridsMantTutorial.setSizeCol(1,385);
		gridsMantTutorial.setSizeCol(2,385);
        gridsMantTutorial.setSizeCol(3,0);
		gridsMantTutorial.hideCol(3);
	},
 
	create : function(){
		dialogsMantTutorial = dialogs.create('dialogsMantTutorial',0,0,814,548,'TUTORIAL');
		dialogsMantTutorial.setAdjY(20);
		editsMantTutorialPantalla = edits.create('editsMantTutorialPantalla','MantTutorial_Codigo','Nombre de la Pantalla:',1,138,'normal');
		editsMantTutorialPantalla.setValidEmpty();
        editsMantTutorialPantalla.setSizeEdit(634);
	    editsMantTutorialPantalla.setMaxLength(100);
		editsMantTutorialFile = edits.create('editsMantTutorialFile','editsMantTutorialFile','Nombre del Archivo:',1,138,'normal');
		editsMantTutorialFile.setValidEmpty(); 
        editsMantTutorialFile.setSizeEdit(634);  
	    editsMantTutorialFile.setMaxLength(100);
		gridsMantTutorial = grids.create('gridsMantTutorial',20,3);
		imgButtonsMantTutorialGuardar = imgButtons.create('imgButtonsMantTutorialGuardar','Guardar.','ok.png');
		imgButtonsMantTutorialVer = imgButtons.create('imgButtonsMantTutorialVer','Visualizar','aula_3.png');
		imgButtonsMantTutorialEliminar = imgButtons.create('imgButtonsMantTutorialEliminar','Eliminar','eliminar.png');
		imgButtonsMantTutorialLimpiar = imgButtons.create('imgButtonsMantTutorialLimpiar','Limpiar','limpiar.png');
		imgButtonsMantTutorialSalir = imgButtons.create('imgButtonsMantTutorialSalir','Salir','salir.png');
        imgButtonsMantTutorialGuardar.setDimension(90,22);
        imgButtonsMantTutorialVer.setDimension(90,22);
        imgButtonsMantTutorialEliminar.setDimension(90,22);
        imgButtonsMantTutorialLimpiar.setDimension(90,22);
        imgButtonsMantTutorialSalir.setDimension(90,22);
	},
  
	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMantTutorial_Init();
		this.gridsMantTutorial_Init();
		this.createMWs(); 
	},

  	limpiar : function(){
  		this.hideIdTutorial = -1;
  		dialogsMantTutorial.setMsg("");
  		editsMantTutorialPantalla.clear();
		editsMantTutorialFile.clear();
		gridsMantTutorial.clean();
		imgButtonsMantTutorialVer.setDisable();
		imgButtonsMantTutorialEliminar.setDisable();
		Tool.getGridData('SecurityObject', 'getTutorial', dialogsMantTutorial, gridsMantTutorial, false);	 		    		
    },
    
  	setData : function(){
		if (gridsMantTutorial.getDataCell(1) != ""){
	        editsMantTutorialPantalla.setValue(gridsMantTutorial.getDataCell(1));
	        editsMantTutorialFile.setValue(gridsMantTutorial.getDataCell(2));
	        this.hideIdTutorial = gridsMantTutorial.getDataCell(3);
			imgButtonsMantTutorialVer.setEnable();
			imgButtonsMantTutorialEliminar.setEnable();
        }
	},
	
	setEvents : function(){
		gridsMantTutorial.onClickCells(this.windowName+".setData()");
  		imgButtonsMantTutorialGuardar.onClick(this.windowName + ".coreUpdate('guardar')");
  		imgButtonsMantTutorialVer.onClick("new OpenWin().getFile('help/tutorial/'+ editsMantTutorialFile.getValue())");
  		imgButtonsMantTutorialEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
  		imgButtonsMantTutorialLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsMantTutorialSalir.onClick('dialogsMantTutorial.close()');	  	 	
    },
    
	coreUpdate : function(methodName){
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMantTutorialPantalla.valid(dialogsMantTutorial))
			if (editsMantTutorialFile.valid(dialogsMantTutorial)) { 					
            	if (methodName == 'guardar') {
                    rlx.add('reg', editsMantTutorialPantalla);
                    rlx.add('reg', editsMantTutorialFile);
                    methodName = 'modificar';
            	} 

				if (methodName == 'eliminar' || this.hideIdTutorial > 0) 
                    rlx.addInt('reg', this.hideIdTutorial);
				else
                    methodName = 'agregar';

    			Tool.cnnSrv('SecurityObject', methodName + 'Tutorial', this.windowName + '.limpiar()', rlx);
			} 
	}
};
	