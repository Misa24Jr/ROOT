var dialogsMantCalEscolar = new Object();
var editsMantCalEscId = new Object();
var editsMantCalEscId = new Object();
var editsMantCalEscDescripción = new Object();
var editsMantCalEscNumCalificacion = new Object();
var gridsMantCalEscolar = new Object();
var imgButtonsMantCalEscAgregar = new Object();
var imgButtonsMantCalEscModificar = new Object();
var imgButtonsMantCalEscEliminar = new Object();
var imgButtonsMantCalEscLimpiar = new Object();
var imgButtonsMantCalEscBuscar = new Object();
var imgButtonsMantCalEscSalir = new Object();
var mw_MantCalEscolar = new Object();// minWindow
var MantCalEscolar = {
	windowName : 'MantCalEscolar',
	isCreate : false,
	
	show : function() 
	{
		if (!this.isCreate)
		{
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantCalEscolar.isByClean())
 			this.limpiar();			
		dialogsMantCalEscolar.show();
	},
	hide : function() 
	{
		dialogsMantCalEscolar.hide();
	},
	createMWs : function() 
	{
      mwMantCalEscolar = desktop.addMinWindow('M.C.Escolar', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
      dialogsMantCalEscolar.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},

  dialogsMantCalEscolar_Init : function(){
        dialogsMantCalEscolar.setMinimizeXY(0,0);
        dialogsMantCalEscolar.setCenterScreen();
        dialogsMantCalEscolar.addSpace(0,0,20);
        dialogsMantCalEscolar.addLn(1,1,1);
		dialogsMantCalEscolar.setHeightCell(1,1,10);
        dialogsMantCalEscolar.addObjToDialog(editsMantCalEscId,2,1,24);
        editsMantCalEscId.setSizeEdit(148);
        dialogsMantCalEscolar.addObjToDialog(editsMantCalEscNumCalificacion,2,1,24);
        editsMantCalEscNumCalificacion.setSizeEdit(20);
        dialogsMantCalEscolar.adjAllMarginObj(2,1,30);
        dialogsMantCalEscolar.addObjToDialog(editsMantCalEscDescripción,3,1,24);
		editsMantCalEscDescripción.setSizeEdit(331);
		editsMantCalEscDescripción.setMaxLength(50); 
        dialogsMantCalEscolar.addLn(4,1,1);
		dialogsMantCalEscolar.setHeightCell(4,1,10);
        dialogsMantCalEscolar.addObjToDialog(gridsMantCalEscolar.getObject(),5,1);
		dialogsMantCalEscolar.addLn(6,1,1);
		dialogsMantCalEscolar.setHeightCell(6,1,12);
        dialogsMantCalEscolar.addObjToDialog(imgButtonsMantCalEscAgregar,7,1);
        imgButtonsMantCalEscAgregar.setDimension(90,22);
        dialogsMantCalEscolar.addObjToDialog(imgButtonsMantCalEscModificar,7,1);
        imgButtonsMantCalEscModificar.setDimension(90,22);
        dialogsMantCalEscolar.addObjToDialog(imgButtonsMantCalEscEliminar,7,1);        
        imgButtonsMantCalEscEliminar.setDimension(90,22);      
        dialogsMantCalEscolar.addObjToDialog(imgButtonsMantCalEscLimpiar,7,1);
        imgButtonsMantCalEscLimpiar.setDimension(90,22);
        dialogsMantCalEscolar.addObjToDialog(imgButtonsMantCalEscBuscar,7,1);
        imgButtonsMantCalEscBuscar.setDimension(90,22);
        dialogsMantCalEscolar.addObjToDialog(imgButtonsMantCalEscSalir,7,1);
        imgButtonsMantCalEscSalir.setDimension(90,22);
        dialogsMantCalEscolar.adjAllMarginObj(7,1,20);
        dialogsMantCalEscolar.leftMarginObj(7,1,0,18);
  },
  
  gridsMantCalEscolar_Init : function(){
    gridsMantCalEscolar.setFixColRow(false,true);
    gridsMantCalEscolar.addTitleVectorX(['Id. Calificación','Descripción','Numero Clasificación']);
    gridsMantCalEscolar.showData();
    gridsMantCalEscolar.setSizeCol(1,100);
    gridsMantCalEscolar.setSizeCol(2,440);
    gridsMantCalEscolar.setSizeCol(3,140);
    
  },

  create : function(){
      dialogsMantCalEscolar = dialogs.create('dialogsMantCalEscolar',0,0,727,357,'MANTENIMIENTO DE CALIFICACIÓN ESCOLAR');
      editsMantCalEscId = edits.create('editsMantCalEscId','editsMantCalEscId','Id. Calificacación:',1,107,'normal');
      editsMantCalEscId.setValidEmpty();
	  editsMantCalEscDescripción = edits.create('editsMantCalEscDescripción','editsMantCalEscDescripción','Descripción:',1,107,'normal');
      editsMantCalEscDescripción.setValidEmpty();
	  editsMantCalEscNumCalificacion = edits.create('editsMantCalEscNumCalificacion','editsMantCalEscNumCalificacion','Numero Clasificación:',1,132,'normal');
      editsMantCalEscNumCalificacion.setValidEmpty();
	  editsMantCalEscNumCalificacion.setValidInteger();
	  gridsMantCalEscolar = grids.create('gridsMantCalEscolar',10,3);
	  imgButtonsMantCalEscAgregar = imgButtons.create('imgButtonsMantCalEscAgregar','Agregar','ok.png');
      imgButtonsMantCalEscModificar = imgButtons.create('imgButtonsMantCalEscModificar','Modificar','icono_modificar.png');
      imgButtonsMantCalEscModificar.setDisable();
      imgButtonsMantCalEscEliminar = imgButtons.create('imgButtonsMantCalEscEliminar','Eliminar','eliminar.png');
      imgButtonsMantCalEscEliminar.setDisable();
      imgButtonsMantCalEscLimpiar = imgButtons.create('imgButtonsMantCalEscLimpiar','Limpiar','limpiar.png');
      imgButtonsMantCalEscBuscar = imgButtons.create('imgButtonsMantCalEscBuscar','Buscar','icono_buscar.png');
      imgButtonsMantCalEscSalir = imgButtons.create('imgButtonsMantCalEscSalir','Salir','salir.png');
  },

  init : function(){
    this.create();
    this.setEvents();
  	this.dialogsMantCalEscolar_Init();
  	this.gridsMantCalEscolar_Init();
	this.createMWs();
  },

  limpiar: function(){
		editsMantCalEscId.setValue("");
		editsMantCalEscDescripción.setValue("");
		editsMantCalEscNumCalificacion.setValue("");
		gridsMantCalEscolar.clean();
        dialogsMantCalEscolar.setMsg("");
		imgButtonsMantCalEscAgregar.setEnable();
        imgButtonsMantCalEscModificar.setDisable();
        imgButtonsMantCalEscEliminar.setDisable();
        //xmlHttpReq.getData("MantObject", "get" + this.windowName, this.windowName + ".loadDataGrid()");
    },
	
	setData : function(){
		if (gridsMantCalEscolar.getDataCell(1) != "") {
		editsMantCalEscId.setValue(gridsMantCalEscolar.getDataCell(1));
		editsMantCalEscDescripción.setValue(gridsMantCalEscolar.getDataCell(2));
		editsMantCalEscNumCalificacion.setValue(gridsMantCalEscolar.getDataCell(3));
		imgButtonsMantCalEscAgregar.setDisable();
		imgButtonsMantCalEscModificar.setEnable();
		imgButtonsMantCalEscEliminar.setEnable();            	
        }     			
	},
	
  setEvents: function(){
    	gridsMantCalEscolar.onClickCells(this.windowName + ".setData()")
        imgButtonsMantCalEscAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
        imgButtonsMantCalEscModificar.onClick(this.windowName + ".coreUpdate('modificar')");
        imgButtonsMantCalEscEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
        imgButtonsMantCalEscLimpiar.onClick('MantCalEscolar.limpiar()');
        imgButtonsMantCalEscBuscar.onClick('MantCalEscolar.buscar()');
		imgButtonsMantCalEscSalir.onClick('dialogsMantCalEscolar.close()');
        },

	coreUpdate: function(methodName){
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
         
        if (methodName == 'eliminar') {
            if (editsMantCalEscId.valid(dialogsMantCalEscolar)){
                rlx.add('reg', editsMantCalEscId);
                procesar = true;
            }
        }
		
        else {
        	  if (editsMantCalEscId.valid(dialogsMantCalEscolar))
			  	  if (editsMantCalEscNumCalificacion.valid(dialogsMantCalEscolar))	
			  	  	  if (editsMantCalEscDescripción.valid(dialogsMantCalEscolar))
				  	  {
							rlx.add('reg', editsMantCalEscDescripción);
							rlx.add('reg', editsMantCalEscNumCalificacion);
							rlx.add('reg', editsMantCalEscId);
		            if (methodName == 'modificar') {
						rlx.add('reg', editsMantCalEscId);
		            }
	                procesar = true;
	           	}
        }
        if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
   
     }
}
