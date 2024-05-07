var dialogsMantFrecuencia = new Object();
var editsMantFreId = new Object();
var editsMantFreDescripcion = new Object();
var calendarsMantFreFecInicio = new Object();
var calendarsMantFreFecFin = new Object();
var gridsMantFreIdDescripcion = new Object();
var imgButtonsMantFreAgregar = new Object();
var imgButtonsMantFreModificar = new Object();
var imgButtonsMantFreEliminar = new Object();
var imgButtonsMantFreLimpiar = new Object();
var imgButtonsMantFreSalir = new Object();
var mwMantFrecuencia = new Object();// minWindow
var MantFrecuencia = {
	windowName : 'MantFrecuencia',
	isCreate : false,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantFrecuencia.isByClean())
 			this.limpiar();			
		dialogsMantFrecuencia.show();
	},
	hide : function(){
		dialogsMantFrecuencia.hide();
	},
	createMWs : function(){
      mwMantFrecuencia = desktop.addMinWindow('M. Frecuencia', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
      dialogsMantFrecuencia.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
  dialogsMantFrecuencia_Init : function(){
        dialogsMantFrecuencia.setMinimizeXY(0,0);
        dialogsMantFrecuencia.setCenterScreen();
        dialogsMantFrecuencia.addSpace(0,0,20);
        dialogsMantFrecuencia.addLn(1,1,1);
		dialogsMantFrecuencia.setHeightCell(1,1,10);
        dialogsMantFrecuencia.addObjToDialog(editsMantFreId,2,1,24);
        editsMantFreId.setSizeEdit(70);        
		dialogsMantFrecuencia.addObjToDialog(calendarsMantFreFecInicio.getEditCalendar(),2,1);
        calendarsMantFreFecInicio.setWidthEditCalendar(127);
        calendarsMantFreFecInicio.setCaption('Fecha Inicio:',1,78);
        calendarsMantFreFecInicio.sendToFrom(100);
        dialogsMantFrecuencia.adjAllMarginObj(2,1,205);               
		dialogsMantFrecuencia.addObjToDialog(editsMantFreDescripcion,3,1,24);
        editsMantFreDescripcion.setSizeEdit(255);
		editsMantFreDescripcion.setMaxLength(50);         
        dialogsMantFrecuencia.addObjToDialog(calendarsMantFreFecFin.getEditCalendar(),3,1);
        calendarsMantFreFecFin.setWidthEditCalendar(127);
        calendarsMantFreFecFin.setCaption('Fecha Fin:',1,78);
        calendarsMantFreFecFin.sendToFrom(100);
        dialogsMantFrecuencia.adjAllMarginObj(3,1,20);        
	    dialogsMantFrecuencia.addLn(4,1,1);
		dialogsMantFrecuencia.setHeightCell(4,1,10);
        dialogsMantFrecuencia.addObjToDialog(gridsMantFreIdDescripcion.getObject(),5,1);
        dialogsMantFrecuencia.addLn(6,1,1);
		dialogsMantFrecuencia.setHeightCell(6,1,12);
        dialogsMantFrecuencia.addObjToDialog(imgButtonsMantFreAgregar,7,1);
        dialogsMantFrecuencia.addObjToDialog(imgButtonsMantFreModificar,7,1);
        dialogsMantFrecuencia.addObjToDialog(imgButtonsMantFreEliminar,7,1);
        dialogsMantFrecuencia.addObjToDialog(imgButtonsMantFreLimpiar,7,1);
        dialogsMantFrecuencia.addObjToDialog(imgButtonsMantFreSalir,7,1);
        imgButtonsMantFreAgregar.setDimension(90,22);
        imgButtonsMantFreModificar.setDimension(90,22);
        imgButtonsMantFreEliminar.setDimension(90,22);
        imgButtonsMantFreLimpiar.setDimension(90,22);
        imgButtonsMantFreSalir.setDimension(90,22);
        dialogsMantFrecuencia.adjAllMarginObj(7,1,20);
        dialogsMantFrecuencia.leftMarginObj(7,1,0,29);
  },
  
  gridsMantFreIdDescripcion_Init : function(){
        gridsMantFreIdDescripcion.setFixColRow(false,true);
        gridsMantFreIdDescripcion.addTitleVectorX(['Codigo','Descripción','Fecha Inicio','Fecha Fin']);
        gridsMantFreIdDescripcion.showData();
        gridsMantFreIdDescripcion.setSizeCol(1,90);
        gridsMantFreIdDescripcion.setSizeCol(2,306);
        gridsMantFreIdDescripcion.setSizeCol(3,95);
        gridsMantFreIdDescripcion.setSizeCol(4,98);
  },

  create : function(){
      dialogsMantFrecuencia = dialogs.create('dialogsMantFrecuencia',0,0,635,359,'MANTENIMIENTO FRECUENCIA');
      editsMantFreId = edits.create('editsMantFreId','MantFrecuenciaCodigo','C. Frecuencia:',1,90,'normal');
      editsMantFreId.setValidInteger();
      editsMantFreId.setValidEmpty();
      editsMantFreDescripcion = edits.create('editsMantFreDescripcion','MantFrecuenciaDescripcion','Descripción:',1,90,'normal');
      editsMantFreDescripcion.setValidEmpty();      
      calendarsMantFreFecInicio = calendars.create('calendarsMantFreFecInicio');
      calendarsMantFreFecInicio.setValidEmpty();
      calendarsMantFreFecFin = calendars.create('calendarsMantFreFecFin');
      calendarsMantFreFecFin.setValidEmpty();
      gridsMantFreIdDescripcion = grids.create('gridsMantFreIdDescripcion',10,4);
      imgButtonsMantFreAgregar = imgButtons.create('imgButtonsMantFreAgregar','Agregar','ok.png');
      imgButtonsMantFreModificar = imgButtons.create('imgButtonsMantFreModificar','Modificar','icono_modificar.png');
      imgButtonsMantFreModificar.setDisable();
      imgButtonsMantFreEliminar = imgButtons.create('imgButtonsMantFreEliminar','Eliminar','eliminar.png');
      imgButtonsMantFreEliminar.setDisable();
      imgButtonsMantFreLimpiar = imgButtons.create('imgButtonsMantFreLimpiar','Limpiar','limpiar.png');
      imgButtonsMantFreSalir = imgButtons.create('imgButtonsMantFreSalir','Salir','salir.png');
  },

  init : function(){
    this.create();
    this.setEvents();
  	MantFrecuencia.dialogsMantFrecuencia_Init();
  	MantFrecuencia.gridsMantFreIdDescripcion_Init();
	dialogsMantFrecuencia.show();
	MantFrecuencia.createMWs();		
  },

  	limpiar : function(){
  		editsMantFreId.setValue("");
  		editsMantFreDescripcion.setValue("");
  		calendarsMantFreFecInicio.clear(); 
  		calendarsMantFreFecFin.clear(); 
  		gridsMantFreIdDescripcion.clean();
  		dialogsMantFrecuencia.setMsg("");
		imgButtonsMantFreAgregar.setEnable();
		imgButtonsMantFreModificar.setDisable();
		imgButtonsMantFreEliminar.setDisable();	
		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantFrecuencia, gridsMantFreIdDescripcion, false); 		 		    		
  	},
  	setData : function(){
		if (gridsMantFreIdDescripcion.getDataCell(1) != ""){
			editsMantFreId.readOnly(true);
			editsMantFreId.setValue(gridsMantFreIdDescripcion.getDataCell(1));
            editsMantFreDescripcion.setValue(gridsMantFreIdDescripcion.getDataCell(2));
            calendarsMantFreFecInicio.findOption(gridsMantFreIdDescripcion.getDataCell(3));
            calendarsMantFreFecFin.findOption(gridsMantFreIdDescripcion.getDataCell(4));
			imgButtonsMantFreAgregar.setDisable();
			imgButtonsMantFreModificar.setEnable();
			imgButtonsMantFreEliminar.setEnable();
        }     			
	},
  	
  	setEvents : function(){
	gridsMantFreIdDescripcion.onClickCells(this.windowName+".setData()")
    imgButtonsMantFreAgregar.onClick(this.windowName+".coreUpdate('agregar')");
  	imgButtonsMantFreModificar.onClick(this.windowName+".coreUpdate('modificar')");
  	imgButtonsMantFreEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
  	imgButtonsMantFreLimpiar.onClick('MantFrecuencia.limpiar()');
  	imgButtonsMantFreSalir.onClick('dialogsMantFrecuencia.close()');	  	 	
    },
		
   coreUpdate: function(methodName){
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (methodName == 'eliminar'){
            if (editsMantFreId.valid(dialogsMantFrecuencia)){
                rlx.add('reg', editsMantFreId);
                procesar = true;
            }
        }
        else {
            if (editsMantFreId.valid(dialogsMantMatDictada)) 
                if (editsMantFreDescripcion.valid(dialogsMantMatDictada)) 
                    if (calendarsMantFreFecInicio.valid(dialogsMantMatDictada)) 
                        if (calendarsMantFreFecFin.valid(dialogsMantMatDictada)){
						rlx.add('reg',editsMantFreDescripcion);
	                    rlx.add('reg',calendarsMantFreFecInicio);
						rlx.add('reg',calendarsMantFreFecFin);
						rlx.add('reg',editsMantFreId);
						procesar = true;
                        }
        	  }
        if (procesar){
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
    }
}