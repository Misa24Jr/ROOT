var dialogsMantParametros = new Object();
var editsMantParDescrip = new Object();
var editsMantParVal = new Object();
var gridsMantParametros = new Object();
var imgButtonsMantParModificar = new Object();
var imgButtonsMantParLimpiar = new Object();
var imgButtonsMantParSalir = new Object();
var mwMantParametros  = new Object();// minWindow

var MantParametros = {
	windowName : 'MantParametros',
	isCreate : false, 
	hideIdParam: 0,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		this.limpiar();			
		dialogsMantParametros.show();
	},
	
	hide : function(){
		dialogsMantParametros.hide();
	},
	
	createMWs : function(){
        	mwMantParametros = desktop.addMinWindow('M.E.Curso', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantParametros.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantParametros_Init : function(){
        dialogsMantParametros.setMinimizeXY(0,0);
        dialogsMantParametros.setCenterScreen();
        dialogsMantParametros.addSpace(0,0,20);
        dialogsMantParametros.addLn(1,1,1);
		dialogsMantParametros.setHeightCell(1,1,10);  
		dialogsMantParametros.addObjToDialog(editsMantParVal,2,1,24);
        dialogsMantParametros.addObjToDialog(editsMantParDescrip,3,1,24);
		dialogsMantParametros.addLn(4,1,1);
		dialogsMantParametros.setHeightCell(4,1,10); 
		dialogsMantParametros.addObjToDialog(gridsMantParametros.getObject(),5,1);
        dialogsMantParametros.addLn(6,1,1);
		dialogsMantParametros.setHeightCell(6,1,12);
        dialogsMantParametros.addObjToDialog(imgButtonsMantParModificar,7,1);
        dialogsMantParametros.addObjToDialog(imgButtonsMantParLimpiar,7,1);
        dialogsMantParametros.addObjToDialog(imgButtonsMantParSalir,7,1);
        dialogsMantParametros.adjAllMarginObj(7,1,20);
        dialogsMantParametros.leftMarginObj(7,1,0,72);
	},
  
    gridsMantParametros_Init : function(){
        gridsMantParametros.setFixColRow(false,true);
        gridsMantParametros.addTitleVectorX(['id_descripcion','Descripción','Valor']);
        gridsMantParametros.showData();        
        gridsMantParametros.setSizeCol(1,0);
        gridsMantParametros.setSizeCol(2,385);
		gridsMantParametros.setSizeCol(3,70);
		gridsMantParametros.hideCol(1);
	},
 
	create : function(){
		dialogsMantParametros = dialogs.create('dialogsMantParametros',0,0,499,642,'CONFIGURACIÓN DE VARIABLES DE ENTORNO');
		dialogsMantParametros.setAdjY(20);
		editsMantParDescrip = edits.create('editsMantParDescrip','MantParametros_Codigo','Descripción:',1,78,'normal');
		editsMantParDescrip.setValidEmpty();
		editsMantParDescrip.readOnly(true);
        editsMantParDescrip.setSizeEdit(379);
	    editsMantParDescrip.setMaxLength(20);
		editsMantParVal = edits.create('editsMantParVal','editsMantParVal','Valor:',1,78,'normal');
		editsMantParVal.setValidEmpty(); 
        editsMantParVal.setSizeEdit(379);  
	    editsMantParVal.setMaxLength(150);
		gridsMantParametros = grids.create('gridsMantParametros',25,3);
		imgButtonsMantParModificar = imgButtons.create('imgButtonsMantParModificar','Guardar.','ok.png');
		imgButtonsMantParLimpiar = imgButtons.create('imgButtonsMantParLimpiar','Limpiar','limpiar.png');
		imgButtonsMantParSalir = imgButtons.create('imgButtonsMantParSalir','Salir','salir.png');
        imgButtonsMantParModificar.setDimension(90,22);
        imgButtonsMantParLimpiar.setDimension(90,22);
        imgButtonsMantParSalir.setDimension(90,22);
	},
  
	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMantParametros_Init();
		this.gridsMantParametros_Init();
		this.createMWs(); 
	},

  	limpiar : function(){
  		editsMantParDescrip.setValue("");
		editsMantParVal.setValue("");
  		dialogsMantParametros.setMsg("");
		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantParametros, gridsMantParametros, false);	 		    		
    },
    
  	setData : function(){
		if (gridsMantParametros.getDataCell(1) != ""){
	        this.hideIdParam = gridsMantParametros.getDataCell(1);
	        editsMantParDescrip.setValue(gridsMantParametros.getDataCell(2));
	        editsMantParVal.setValue(gridsMantParametros.getDataCell(3));
        }     			
	},
	
	setEvents : function(){
		gridsMantParametros.onClickCells(this.windowName+".setData()");
  		imgButtonsMantParModificar.onClick(this.windowName + ".coreUpdate('modificar')");
  		imgButtonsMantParLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsMantParSalir.onClick('dialogsMantParametros.close()');	  	 	
    },
    
	coreUpdate : function(methodName){
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == 'eliminar') {
			if (editsMantParDescrip.valid(dialogsMantParametros)) {
				rlx.addInt('reg', this.hideIdParam);
				procesar = true;
			}
		}
		else{
			if (editsMantParDescrip.valid(dialogsMantParametros))
				if (editsMantParVal.valid(dialogsMantParametros)) { 					
					rlx.add('reg',editsMantParVal);
                	if (methodName == 'modificar') 
                        rlx.addInt('reg', this.hideIdParam);
					procesar = true;		
				} 
		}
		if (procesar){            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
	}
};
	