var dialogsMantTipAula = new Object();
var editsMantTipAulaCodigo = new Object();
var editsMantTipAulDescripcion = new Object();
var gridsMantTipAulCodDescripcion = new Object();
var imgButtonsMantTipAulAgregar = new Object();
var imgButtonsMantTipAulModificar = new Object();
var imgButtonsMantTipAulEliminar = new Object();
var imgButtonsMantTipAulLimpiar = new Object();
var imgButtonsMantTipAulSalir = new Object();
var mwMantTipAula = new Object();// minWindow
var MantTipAula = {
	windowName : 'MantTipAula',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
		  this.init();
		  this.isCreate = true;
		}

		if (dialogsMantTipAula.isByClean())
 			this.limpiar();			
		dialogsMantTipAula.show();
	},
	hide : function() {
		dialogsMantTipAula.hide();
	},
	createMWs : function() {
        	mwMantTipAula  = desktop.addMinWindow('M.Tipo Aula', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantTipAula .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

  dialogsMantTipAula_Init : function() {
        dialogsMantTipAula.setMinimizeXY(0,0);
        dialogsMantTipAula.setCenterScreen();
        dialogsMantTipAula.addSpace(0,0,20);
        dialogsMantTipAula.addLn(1,1,1);
		dialogsMantTipAula.setHeightCell(1,1,10);
        dialogsMantTipAula.addObjToDialog(editsMantTipAulaCodigo,2,1,24);
        editsMantTipAulaCodigo.setSizeEdit(70);
        dialogsMantTipAula.addObjToDialog(editsMantTipAulDescripcion,3,1,24);
        editsMantTipAulDescripcion.setSizeEdit(295);
		editsMantTipAulDescripcion.setMaxLength(80); 
        dialogsMantTipAula.addLn(4,1,1);
		dialogsMantTipAula.setHeightCell(4,1,10);
        dialogsMantTipAula.addObjToDialog(gridsMantTipAulCodDescripcion.getObject(),5,1);
        dialogsMantTipAula.addLn(6,1,1);
		dialogsMantTipAula.setHeightCell(6,1,12);
        dialogsMantTipAula.addObjToDialog(imgButtonsMantTipAulAgregar,7,1);
        dialogsMantTipAula.addObjToDialog(imgButtonsMantTipAulModificar,7,1);
        dialogsMantTipAula.addObjToDialog(imgButtonsMantTipAulEliminar,7,1);
        dialogsMantTipAula.addObjToDialog(imgButtonsMantTipAulLimpiar,7,1);
        dialogsMantTipAula.addObjToDialog(imgButtonsMantTipAulSalir,7,1);       
        imgButtonsMantTipAulAgregar.setDimension(90,22);
        imgButtonsMantTipAulModificar.setDimension(90,22);
        imgButtonsMantTipAulEliminar.setDimension(90,22);
        imgButtonsMantTipAulLimpiar.setDimension(90,22);
        imgButtonsMantTipAulSalir.setDimension(90,22);
        dialogsMantTipAula.adjAllMarginObj(7,1,18);
        dialogsMantTipAula.leftMarginObj(7,1,0,32);
  },
  
  gridsMantTipAulCodDescripcion_Init : function()  {
        gridsMantTipAulCodDescripcion.setFixColRow(false,true);
        gridsMantTipAulCodDescripcion.addTitleVectorX(['Código','Descripción']);
        gridsMantTipAulCodDescripcion.showData();        
        gridsMantTipAulCodDescripcion.setSizeCol(1,100);
        gridsMantTipAulCodDescripcion.setSizeCol(2,484);
	  gridsMantTipAulCodDescripcion.setReadOnlyToAll();
  },

  create : function() {
      dialogsMantTipAula = dialogs.create('dialogsMantTipAula',0,0,628,357,'MANTENIMIENTO TIPO DE AULA');
      editsMantTipAulaCodigo = edits.create('editsMantTipAulaCodigo','MantTipAula_Codigo','Código:',3,80,'normal');
      editsMantTipAulaCodigo.setValidInteger();
      editsMantTipAulaCodigo.setValidEmpty();
      editsMantTipAulDescripcion = edits.create('editsMantTipAulDescripcion','MantTipAula_Descripcion','Descripción:',3,80,'normal');
      editsMantTipAulDescripcion.setValidEmpty();
      gridsMantTipAulCodDescripcion = grids.create('gridsMantTipAulCodDescripcion',10,2);
      imgButtonsMantTipAulAgregar = imgButtons.create('imgButtonsMantTipAulAgregar','Agregar','ok.png');
      imgButtonsMantTipAulModificar = imgButtons.create('imgButtonsMantTipAulModificar','Modificar','icono_modificar.png');
      imgButtonsMantTipAulModificar.setDisable();
      imgButtonsMantTipAulEliminar = imgButtons.create('imgButtonsMantTipAulEliminar','Eliminar','eliminar.jpg');
      imgButtonsMantTipAulEliminar.setDisable();
      imgButtonsMantTipAulLimpiar = imgButtons.create('imgButtonsMantTipAulLimpiar','Limpiar','limpiar.png');
      imgButtonsMantTipAulSalir = imgButtons.create('imgButtonsMantTipAulSalir','Salir','salir.png');
  },

  init : function()
  {
  	
    this.create();
    this.setEvents();
    MantTipAula.dialogsMantTipAula_Init();
    MantTipAula.gridsMantTipAulCodDescripcion_Init();
	this.createMWs(); 
  },

  	limpiar : function()
  	{
  		editsMantTipAulaCodigo.setValue("");
  		editsMantTipAulDescripcion.setValue("");
  		gridsMantTipAulCodDescripcion.clean();
  		dialogsMantTipAula.setMsg("");
		editsMantTipAulaCodigo.readOnly(false);	    		
		imgButtonsMantTipAulAgregar.setEnable();
		imgButtonsMantTipAulModificar.setDisable();
		imgButtonsMantTipAulEliminar.setDisable();
		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantTipAula, gridsMantTipAulCodDescripcion, false); 		    		
  	},
  	setData : function() 
      {
		if (gridsMantTipAulCodDescripcion.getDataCell(1) != "") 
			{
			editsMantTipAulaCodigo.readOnly(true);
			editsMantTipAulaCodigo.setValue(gridsMantTipAulCodDescripcion.getDataCell(1));
            editsMantTipAulDescripcion.setValue(gridsMantTipAulCodDescripcion.getDataCell(2));
			imgButtonsMantTipAulAgregar.setDisable();
			imgButtonsMantTipAulModificar.setEnable();
			imgButtonsMantTipAulEliminar.setEnable();
            }     			
	},
  	
  	setEvents : function(){
  		gridsMantTipAulCodDescripcion.onClickCells(this.windowName+".setData()");
    	imgButtonsMantTipAulAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantTipAulModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantTipAulEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
  		imgButtonsMantTipAulLimpiar.onClick('MantTipAula.limpiar()');
  		imgButtonsMantTipAulSalir.onClick('dialogsMantTipAula.close()');
   	   },
	
	coreUpdate : function(methodName) {
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == 'eliminar') 
		{
			if (editsMantTipAulaCodigo.valid(dialogsMantTipAula ))
			{
				rlx.add('reg', editsMantTipAulaCodigo);
				procesar = true;
			}
		}
		else 
			{
	  		if (editsMantTipAulaCodigo.valid(dialogsMantTipAula ))		
  				if (editsMantTipAulDescripcion.valid(dialogsMantTipAula ))
  					{ 					
						rlx.add('reg',editsMantTipAulDescripcion);
						rlx.add('reg',editsMantTipAulaCodigo);
						procesar = true;		
					} 
			}
		if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
	}

};