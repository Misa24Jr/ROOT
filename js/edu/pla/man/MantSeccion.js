var dialogsMantSeccion = new Object();
var editsMantSecCodigo = new Object();
var editsMantSecDescripcion = new Object();
var gridsMantSecCodDescripcion = new Object();
var imgButtonsMantSecAgregar = new Object();
var imgButtonsMantSecModificar = new Object();
var imgButtonsMantSecEliminar = new Object();
var imgButtonsMantSecLimpiar = new Object();
var imgButtonsMantSecSalir = new Object();
var mwMantSeccion = new Object();// minWindow
var MantSeccion = {
	windowName : 'MantSeccion',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantSeccion.isByClean())
 			this.limpiar();			
		dialogsMantSeccion.show();
	},
	hide : function() {
		dialogsMantSeccion.hide();
	},
	createMWs : function() {
        	mwMantSeccion = desktop.addMinWindow('M.Seccion', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantSeccion.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
  dialogsMantSeccion_Init : function() {
        dialogsMantSeccion.setMinimizeXY(0,0);
        dialogsMantSeccion.setCenterScreen();
        dialogsMantSeccion.addSpace(0,0,20);
        dialogsMantSeccion.addLn(1,1,1);
		dialogsMantSeccion.setHeightCell(1,1,10);
        dialogsMantSeccion.addObjToDialog(editsMantSecCodigo,2,1,24);
        editsMantSecCodigo.setSizeEdit(70);
        dialogsMantSeccion.addObjToDialog(editsMantSecDescripcion,3,1,24);
        editsMantSecDescripcion.setSizeEdit(294);
		editsMantSecDescripcion.setMaxLength(200); 
        dialogsMantSeccion.addLn(4,1,1);
		dialogsMantSeccion.setHeightCell(4,1,10);
        dialogsMantSeccion.addObjToDialog(gridsMantSecCodDescripcion.getObject(),5,1);
        dialogsMantSeccion.addLn(6,1,1);
		dialogsMantSeccion.setHeightCell(6,1,12);
        dialogsMantSeccion.addObjToDialog(imgButtonsMantSecAgregar,7,1);
        dialogsMantSeccion.addObjToDialog(imgButtonsMantSecModificar,7,1);
        dialogsMantSeccion.addObjToDialog(imgButtonsMantSecEliminar,7,1);
        dialogsMantSeccion.addObjToDialog(imgButtonsMantSecLimpiar,7,1);
        dialogsMantSeccion.addObjToDialog(imgButtonsMantSecSalir,7,1);       
        imgButtonsMantSecAgregar.setDimension(90,22);
        imgButtonsMantSecModificar.setDimension(90,22);
        imgButtonsMantSecEliminar.setDimension(90,22);
        imgButtonsMantSecLimpiar.setDimension(90,22);
        imgButtonsMantSecSalir.setDimension(90,22);
        dialogsMantSeccion.adjAllMarginObj(7,1,18);
        dialogsMantSeccion.leftMarginObj(7,1,0,31);
  },
  
        gridsMantSecCodDescripcion_Init : function(){
        gridsMantSecCodDescripcion.setFixColRow(false,true);
        gridsMantSecCodDescripcion.addTitleVectorX(['Código','Descripción']);
        gridsMantSecCodDescripcion.showData();
        gridsMantSecCodDescripcion.setSizeCol(1,100);
        gridsMantSecCodDescripcion.setSizeCol(2,485);
  },

  create : function() {
      dialogsMantSeccion = dialogs.create('dialogsMantSeccion',0,0,629,357,'MANTENIMIENTO DE SECCIÓN');
	  dialogsMantSeccion.setAdjY(20);
      editsMantSecCodigo = edits.create('editsMantSecCodigo','MantSeccion_Codigo','Código:',3,80,'normal');      
      editsMantSecCodigo.setValidEmpty();
      editsMantSecDescripcion = edits.create('editsMantSecDescripcion','MantSeccion_Descripcion','Descripción:',3,80,'normal');
      editsMantSecDescripcion.setValidEmpty();
      gridsMantSecCodDescripcion = grids.create('gridsMantSecCodDescripcion',10,2);
      imgButtonsMantSecAgregar = imgButtons.create('imgButtonsMantSecAgregar','Agregar','ok.png');
      imgButtonsMantSecModificar = imgButtons.create('imgButtonsMantSecModificar','Modificar','icono_modificar.png');
      imgButtonsMantSecModificar.setDisable();
      imgButtonsMantSecEliminar = imgButtons.create('imgButtonsMantSecEliminar','Eliminar','eliminar.jpg');
      imgButtonsMantSecEliminar.setDisable();
      imgButtonsMantSecLimpiar = imgButtons.create('imgButtonsMantSecLimpiar','Limpiar','limpiar.png');
      imgButtonsMantSecSalir = imgButtons.create('imgButtonsMantSecSalir','Salir','salir.png');
  },

  init : function(){
    this.create();
    this.setEvents();
    this.dialogsMantSeccion_Init();
    this.gridsMantSecCodDescripcion_Init();
	this.createMWs(); 
  },

   limpiar : function() {
  		editsMantSecCodigo.setValue("");
  		editsMantSecDescripcion.setValue("");
  		gridsMantSecCodDescripcion.clean();
  		dialogsMantSeccion.setMsg("");
  		editsMantSecCodigo.readOnly(false);	    		
		imgButtonsMantSecAgregar.setEnable();
		imgButtonsMantSecModificar.setDisable();
		imgButtonsMantSecEliminar.setDisable();			
		Tool.getGridData('MantObject', 'getMantSeccion', dialogsMantSeccion, gridsMantSecCodDescripcion, false);
  	},
  	
  	setData : function() {
		if (gridsMantSecCodDescripcion.getDataCell(1) != "") {
		editsMantSecCodigo.readOnly(true);
		editsMantSecCodigo.setValue(gridsMantSecCodDescripcion.getDataCell(1));
        editsMantSecDescripcion.setValue(gridsMantSecCodDescripcion.getDataCell(2));
        imgButtonsMantSecAgregar.setDisable();
		imgButtonsMantSecModificar.setEnable();
		imgButtonsMantSecEliminar.setEnable();
        }     			
	},
  	
  	setEvents : function() {
    gridsMantSecCodDescripcion.onClickCells(this.windowName+".setData()");	
    imgButtonsMantSecAgregar.onClick(this.windowName+".coreUpdate('agregar')");
	imgButtonsMantSecModificar.onClick(this.windowName+".coreUpdate('modificar')");
	imgButtonsMantSecEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
  	imgButtonsMantSecLimpiar.onClick('MantSeccion.limpiar()');
  	imgButtonsMantSecSalir.onClick('dialogsMantSeccion.close()');	  	 	
    },
    
	coreUpdate : function(methodName) {
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == 'eliminar') {
			if (editsMantSecCodigo.valid(dialogsMantSeccion)) {
			rlx.add('reg', editsMantSecCodigo);
			procesar = true;
			}
		}

		else 
			{
	  		if (editsMantSecCodigo.valid(dialogsMantSeccion))
  				if (editsMantSecDescripcion.valid(dialogsMantSeccion)) { 					
					rlx.add('reg',editsMantSecDescripcion);
					rlx.add('reg',editsMantSecCodigo);
					procesar = true;		
					} 
			}
		if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
	}

}