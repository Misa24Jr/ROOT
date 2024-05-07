var dialogsModoIngreso = new Object();
var editsModoIngModIngreso = new Object();
var gridsModoIngreso = new Object();
var imgButtonsModoIngAgregar = new Object();
var imgButtonsModoIngModificar = new Object();
var imgButtonsModoIngEliminar = new Object();
var imgButtonsModoIngLimpiar = new Object();
var imgButtonsModoIngSalir = new Object();
var mwModoIngreso = new Object();// minWindow

var ModoIngreso = {
	windowName : 'ModoIngreso',
	isCreate : false,
	hideIdModoIngreso: 0,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsModoIngreso.isByClean())
 			this.limpiar();			
		dialogsModoIngreso.show();
	},
	
	hide : function() {
		dialogsModoIngreso.hide();
	},
	
	createMWs : function() {
      mwModoIngreso = desktop.addMinWindow('M. Ingresos', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
      dialogsModoIngreso.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
  dialogsModoIngreso_Init : function() {
  	  dialogsModoIngreso.setMinimizeXY(0,0);
      dialogsModoIngreso.setCenterScreen();
      dialogsModoIngreso.addSpace(0,0,20);
      dialogsModoIngreso.addLn(1,1,1);
	  dialogsModoIngreso.setHeightCell(1,1,10);
      dialogsModoIngreso.addObjToDialog(editsModoIngModIngreso,3,1,24); 
      editsModoIngModIngreso.setSizeEdit(287);
	  editsModoIngModIngreso.setMaxLength(50);        
      dialogsModoIngreso.addLn(4,1,1);
	  dialogsModoIngreso.setHeightCell(4,1,10);
      dialogsModoIngreso.addObjToDialog(gridsModoIngreso.getObject(),5,1);
      dialogsModoIngreso.addLn(6,1,1);
	  dialogsModoIngreso.setHeightCell(6,1,12);
      dialogsModoIngreso.addObjToDialog(imgButtonsModoIngAgregar,7,1);
      dialogsModoIngreso.addObjToDialog(imgButtonsModoIngModificar,7,1);
      dialogsModoIngreso.addObjToDialog(imgButtonsModoIngEliminar,7,1);
      dialogsModoIngreso.addObjToDialog(imgButtonsModoIngLimpiar,7,1);
      dialogsModoIngreso.addObjToDialog(imgButtonsModoIngSalir,7,1);
      imgButtonsModoIngAgregar.setDimension(90,22);
      imgButtonsModoIngModificar.setDimension(90,22);
      imgButtonsModoIngEliminar.setDimension(90,22);
      imgButtonsModoIngLimpiar.setDimension(90,22);
      imgButtonsModoIngSalir.setDimension(90,22);
      dialogsModoIngreso.adjAllMarginObj(7,1,20);
      dialogsModoIngreso.leftMarginObj(7,1,0,26);
  },
  
  gridsModoIngreso_Init : function() {
        gridsModoIngreso.setFixColRow(false,true);
        gridsModoIngreso.addTitleVectorX(['Id','Modo de Ingreso']);
        gridsModoIngreso.showData();
        gridsModoIngreso.setSizeCol(1,100);
        gridsModoIngreso.setSizeCol(2,485);
      },

  create : function() {
      dialogsModoIngreso = dialogs.create('dialogsModoIngreso',0,0,629,332,'MODO DE INGRESO');
      editsModoIngModIngreso = edits.create('editsModoIngModIngreso','editsModoIngModIngreso','Modo de Ingreso:',1,104,'normal');      
      editsModoIngModIngreso.setValidEmpty();
      gridsModoIngreso = grids.create('gridsModoIngreso',10,2);
      imgButtonsModoIngAgregar = imgButtons.create('imgButtonsModoIngAgregar','Agregar','ok.png');
      imgButtonsModoIngModificar = imgButtons.create('imgButtonsModoIngModificar','Modificar','icono_modificar.png');
      imgButtonsModoIngModificar.setDisable();
      imgButtonsModoIngEliminar = imgButtons.create('imgButtonsModoIngEliminar','Eliminar','eliminar.jpg');
      imgButtonsModoIngEliminar.setDisable();
      imgButtonsModoIngLimpiar = imgButtons.create('imgButtonsModoIngLimpiar','Limpiar','limpiar.png');
      imgButtonsModoIngSalir = imgButtons.create('imgButtonsModoIngSalir','Salir','salir.png');
  },

  init : function() {
	  this.create();
	  this.setEvents();
	  this.dialogsModoIngreso_Init();
	  this.gridsModoIngreso_Init();
	  this.createMWs();
  },

  	limpiar : function() {
  		editsModoIngModIngreso.setValue(""); 	
  		gridsModoIngreso.clean();
  		dialogsModoIngreso.setMsg("");
		imgButtonsModoIngAgregar.setEnable();
		imgButtonsModoIngModificar.setDisable();
		imgButtonsModoIngEliminar.setDisable();	
		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsModoIngreso, gridsModoIngreso, false);		 		    		
  	},
  	  
    setData : function(){
		if (gridsModoIngreso.getDataCell(1) != ""){
			this.hideIdModoIngreso = gridsModoIngreso.getDataCell(1);
            editsModoIngModIngreso.setValue(gridsModoIngreso.getDataCell(2));
			imgButtonsModoIngAgregar.setDisable();
			imgButtonsModoIngModificar.setEnable();
			imgButtonsModoIngEliminar.setEnable();			
		}
	},
   
	setEvents : function(){
		gridsModoIngreso.onClickCells(this.windowName+".setData()");
		imgButtonsModoIngAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsModoIngModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsModoIngEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
		imgButtonsModoIngLimpiar.onClick('ModoIngreso.limpiar()');  	
		imgButtonsModoIngSalir.onClick('dialogsModoIngreso.close()');	  	 	
	},

	coreUpdate : function(methodName) {
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == 'eliminar') {
			if (editsModoIngModIngreso.valid(dialogsModoIngreso)) {
				rlx.addInt('reg', this.hideIdModoIngreso);
				procesar = true;
			}
		}

		else {
			if (editsModoIngModIngreso.valid(dialogsModoIngreso)) { 					
				rlx.add('reg',editsModoIngModIngreso);
            	if (methodName == 'modificar') 
                    rlx.addInt('reg', this.hideIdModoIngreso);
				procesar = true;		
			} 
		}
		if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
	}
};
