var dialogsMantPensum = new Object();
var powerComboBoxMantPenOrganizacion = new Object();
var powerComboBoxMantPenSuborganizacion = new Object();
var powerComboBoxMantPenCarrera = new Object();
var powerComboBoxMantPenFecPublicacion = new Object();
var calendarsMantPenFecPublicacion = new Object();
var calendarsMantPenFecAplicacion = new Object();
var editsMantPenPeriodo = new Object();
var editsMantPenDescripcion = new Object();
var powerComboBoxMantPenEstado = new Object();
var gridsMantPensum = new Object();
var imgButtonsMantPensumAgregar = new Object();
var imgButtonsMantPensumModificar = new Object();
var imgButtonsMantPensumEliminar = new Object();
var imgButtonsMantPensumBuscar = new Object();
var imgButtonsMantPensumLimpiar = new Object();
var imgButtonsMantPensumSalir = new Object();
var mwdialogsMantPensum = new Object();// minWindow

var MantPensum = {
	windowName : 'MantPensum',
	isCreate : false,
	idPensum : 0,
	idPeriodo: 0,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantPensum.isByClean())
 			this.limpiar();			
		dialogsMantPensum.show();
	},
	
	hide : function(){
		dialogsMantPensum.hide();
	},
	
	createMWs : function(){
        	mwMantPensum = desktop.addMinWindow('M. Pensum', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantPensum.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
			
	dialogsMantPensum_Init : function(){
		dialogsMantPensum.setMinimizeXY(0,0);
		dialogsMantPensum.setCenterScreen();
		dialogsMantPensum.addSpace(0,0,20);
		dialogsMantPensum.addLn(1,1,1);
		dialogsMantPensum.setHeightCell(1,1,10);
	    dialogsMantPensum.addObjToDialog(powerComboBoxMantPenOrganizacion,2,1,24);
	    dialogsMantPensum.addObjToDialog(powerComboBoxMantPenSuborganizacion,2,1,24);
	    dialogsMantPensum.addObjToDialog(powerComboBoxMantPenCarrera,2,1,24);
	    dialogsMantPensum.adjAllMarginObj(2,1,20);    
	    dialogsMantPensum.addObjToDialog(editsMantPenPeriodo,3,1,24);
		editsMantPenPeriodo.setSizeEdit(149);
	    dialogsMantPensum.addObjToDialog(calendarsMantPenFecPublicacion.getEditCalendar(),3,1,24);
	    calendarsMantPenFecPublicacion.setWidthEditCalendar(126);
	    calendarsMantPenFecPublicacion.setCaption('F. de Publicación:',1,125);
	    calendarsMantPenFecPublicacion.sendToFrom(100);
	    dialogsMantPensum.addObjToDialog(calendarsMantPenFecAplicacion.getEditCalendar(),3,1,24);
	    calendarsMantPenFecAplicacion.setWidthEditCalendar(126);
	    calendarsMantPenFecAplicacion.setCaption('F. de Aplicación:',1,102);
	    calendarsMantPenFecAplicacion.sendToFrom(100);
	    dialogsMantPensum.adjAllMarginObj(3,1,20);
		dialogsMantPensum.addObjToDialog(powerComboBoxMantPenEstado,4,1,24);
	    dialogsMantPensum.addObjToDialog(editsMantPenDescripcion,4,1,24);    
	    editsMantPenDescripcion.setSizeEdit(419);
		editsMantPenDescripcion.setMaxLength(50); 
	    dialogsMantPensum.adjAllMarginObj(4,1,20);
		dialogsMantPensum.addLn(5,1,1);
		dialogsMantPensum.setHeightCell(5,1,10);  
	    dialogsMantPensum.addObjToDialog(gridsMantPensum.getObject(),6,1);      
	    dialogsMantPensum.addLn(7,1,1);
		dialogsMantPensum.setHeightCell(7,1,12);      
	    dialogsMantPensum.addObjToDialog(imgButtonsMantPensumAgregar,8,1);
	    dialogsMantPensum.addObjToDialog(imgButtonsMantPensumModificar,8,1);
	    dialogsMantPensum.addObjToDialog(imgButtonsMantPensumEliminar,8,1);    
	    dialogsMantPensum.addObjToDialog(imgButtonsMantPensumLimpiar,8,1);
	    dialogsMantPensum.addObjToDialog(imgButtonsMantPensumBuscar,8,1);	
	    dialogsMantPensum.addObjToDialog(imgButtonsMantPensumSalir,8,1);
	    imgButtonsMantPensumAgregar.setDimension(90,22);
	    imgButtonsMantPensumModificar.setDimension(90,22);
	    imgButtonsMantPensumEliminar.setDimension(90,22);
	    imgButtonsMantPensumBuscar.setDimension(90,22);
	    imgButtonsMantPensumLimpiar.setDimension(90,22);
	    imgButtonsMantPensumSalir.setDimension(90,22);
	    dialogsMantPensum.adjAllMarginObj(8,1,20);
	    dialogsMantPensum.leftMarginObj(8,1,0,88);
	},
  
	gridsMantPensum_Init : function(){
        gridsMantPensum.setFixColRow(false,true);
        gridsMantPensum.addTitleVectorX(['Descripción','Periodo','Estado','F. Publicación','F. Aplicación','Id. Pensum','Id. Org','Id. Suborg','Id. Carrera','id periodo']);
        gridsMantPensum.showData();
        gridsMantPensum.setSizeCol(1,330);
        gridsMantPensum.setSizeCol(2,150);
        gridsMantPensum.setSizeCol(3,120);
        gridsMantPensum.setSizeCol(4,109);
        gridsMantPensum.setSizeCol(5,109);
        gridsMantPensum.setSizeCol(6,5);
        gridsMantPensum.setSizeCol(7,5);
        gridsMantPensum.setSizeCol(8,5);
        gridsMantPensum.setSizeCol(9,5);
        gridsMantPensum.setSizeCol(10,5);
        gridsMantPensum.hideCol(6);
        gridsMantPensum.hideCol(7);
        gridsMantPensum.hideCol(8);
        gridsMantPensum.hideCol(9);
        gridsMantPensum.hideCol(10);
	},

	create : function(){
		dialogsMantPensum = dialogs.create('dialogsMantPensum',0,0,865,380,'MANTENIMIENTO PENSUM');
		dialogsMantPensum.setAdjY(20);
		powerComboBoxMantPenOrganizacion = powerComboBox.create('powerComboBoxMantPenOrganizacion','powerComboBoxMantPenOrganizacion','Organización (+):',1,110);
		powerComboBoxMantPenOrganizacion.setValidEmpty();
		powerComboBoxMantPenOrganizacion.enableReadOnlyEditor();
		powerComboBoxMantPenOrganizacion.addEmptyOption();
		powerComboBoxMantPenSuborganizacion = powerComboBox.create('powerComboBoxMantPenSuborganizacion','powerComboBoxMantPenSuborganizacion','Suborganización (^):',1,125);
		powerComboBoxMantPenSuborganizacion.setValidEmpty();
		powerComboBoxMantPenSuborganizacion.enableReadOnlyEditor();
		powerComboBoxMantPenSuborganizacion.addEmptyOption();
		powerComboBoxMantPenCarrera = powerComboBox.create('powerComboBoxMantPenCarrera','powerComboBoxMantPenCarrera','Carrera (^):',1,101);
		powerComboBoxMantPenCarrera.setValidEmpty();
		powerComboBoxMantPenCarrera.enableReadOnlyEditor();
		powerComboBoxMantPenCarrera.addEmptyOption();
		calendarsMantPenFecPublicacion = calendars.create('calendarsMantPenFecPublicacion');
		calendarsMantPenFecPublicacion.setValidEmpty();
		calendarsMantPenFecPublicacion.setDataType('date');
		calendarsMantPenFecAplicacion = calendars.create('calendarsMantPenFecAplicacion');
		calendarsMantPenFecAplicacion.setValidEmpty();
		calendarsMantPenFecAplicacion.setDataType('date');
		editsMantPenPeriodo = edits.create('editsMantPenPeriodo','editsMantPenPeriodo','Periodo:',1,110,'normal');
		editsMantPenPeriodo.setValidEmpty();
		editsMantPenDescripcion = edits.create('editsMantPenDescripcion','editsMantPenDescripcion','Descripción:',1,125,'normal');
		editsMantPenDescripcion.setValidEmpty();
		powerComboBoxMantPenEstado = powerComboBox.create('powerComboBoxMantPenEstado','powerComboBoxMantPenEstado','Estado (*):',1,110);
		powerComboBoxMantPenEstado.setValidEmpty();
		powerComboBoxMantPenEstado.enableReadOnlyEditor();
		powerComboBoxMantPenEstado.addEmptyOption();
		powerComboBoxMantPenEstado.setDataType('string');
		powerComboBoxMantPenEstado.setFieldFind(true);
		powerComboBoxMantPenEstado.addOptionAndSimpleValue(null,'ACTIVO','ACTIVO');
		powerComboBoxMantPenEstado.addOptionAndSimpleValue(null,'INACTIVO','INACTIVO');
		gridsMantPensum = grids.create('gridsMantPensum',10,10);
		imgButtonsMantPensumAgregar = imgButtons.create('imgButtonsMantPensumAgregar','Agregar','ok.png');
		imgButtonsMantPensumModificar = imgButtons.create('imgButtonsMantPensumModificar','Modificar','icono_modificar.png');
		imgButtonsMantPensumModificar.setDisable();
		imgButtonsMantPensumEliminar = imgButtons.create('imgButtonsMantPensumEliminar','Eliminar','eliminar.png');
		imgButtonsMantPensumEliminar.setDisable();
		imgButtonsMantPensumBuscar = imgButtons.create('imgButtonsMantPensumBuscar','Buscar','icono_buscar.png');
		imgButtonsMantPensumLimpiar = imgButtons.create('imgButtonsMantPensumLimpiar','Limpiar','limpiar.png');
		imgButtonsMantPensumSalir = imgButtons.create('imgButtonsMantPensumSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMantPensum_Init();
		this.gridsMantPensum_Init();
		this.createMWs();
	},

	limpiarCoreUpdate : function() {
		calendarsMantPenFecPublicacion.clear();
		calendarsMantPenFecAplicacion.clear(); 	
		editsMantPenPeriodo.setValue("");
		editsMantPenPeriodo.readOnly(true);
		powerComboBoxMantPenEstado.setSelectedIndex(0);		
		editsMantPenDescripcion.setValue("");
		gridsMantPensum.clean();
		dialogsMantPensum.setMsg(""); 			
		imgButtonsMantPensumAgregar.setEnable();
		imgButtonsMantPensumModificar.setDisable();
		imgButtonsMantPensumEliminar.setDisable();
		Tool.getGridData('MantObject', 'getMantPensum', dialogsMantPensum, gridsMantPensum, false, powerComboBoxMantPenCarrera.setModeReturnGetText(2), powerComboBoxMantPenEstado, powerComboBoxMantPenEstado);
	},

	limpiar : function() {
		Tool.rstPwrCmb(powerComboBoxMantPenOrganizacion); 	
		Tool.rstPwrCmb(powerComboBoxMantPenSuborganizacion);  		
		Tool.rstPwrCmb(powerComboBoxMantPenCarrera);  		
		editsMantPenPeriodo.setValue("");
		editsMantPenPeriodo.readOnly(true);
  		powerComboBoxMantPenEstado.setSelectedIndex(0);  		
  		calendarsMantPenFecPublicacion.clear();
  		calendarsMantPenFecAplicacion.clear(); 	
  		editsMantPenDescripcion.setValue("");
  		gridsMantPensum.clean();
  		dialogsMantPensum.setMsg(""); 			
		imgButtonsMantPensumAgregar.setEnable();
		imgButtonsMantPensumModificar.setDisable();
		imgButtonsMantPensumEliminar.setDisable();
        Tool.cnnSrv('MantObject', 'getMantOrganizacion', this.windowName + '.loadDataInit()');
  	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsMantPensum, powerComboBoxMantPenOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsMantPensum, powerComboBoxMantPenOrganizacion, powerComboBoxMantPenSuborganizacion, powerComboBoxMantPenCarrera, this.windowName + '.getPeriodoPensum()');
    },
    
    getPeriodoPensum: function() {
    	var rlx = xmlStructs.createRecordList("rlx");
    	
    	rlx.add('reg',powerComboBoxMantPenCarrera.setModeReturnGetText(5));
    	Tool.cnnSrv('MantObject', 'getPeriodoPensum', this.windowName + '.loadDataPeriodoPensum()', rlx);
    },
    
    loadDataPeriodoPensum: function() {
    	this.idPeriodo = json('getPeriodoPensum').data[0];
    	Tool.loadEditData(dialogsMantPensum, editsMantPenPeriodo, 1, json('getPeriodoPensum'));   	
    },
    
	setData : function() {
		if (gridsMantPensum.getDataCell(1) != "") {	
			this.idPensum = gridsMantPensum.getDataCell(6);
            editsMantPenPeriodo.setValue(gridsMantPensum.getDataCell(2));
			this.idPeriodo = gridsMantPensum.getDataCell(10);
            calendarsMantPenFecPublicacion.setFechaToEdit(gridsMantPensum.getDataCell(4));  
			calendarsMantPenFecAplicacion.setFechaToEdit(gridsMantPensum.getDataCell(5));
			powerComboBoxMantPenEstado.findOption(gridsMantPensum.getDataCell(3));
			editsMantPenDescripcion.setValue(gridsMantPensum.getDataCell(1));
			imgButtonsMantPensumAgregar.setDisable();
			imgButtonsMantPensumModificar.setEnable();
			imgButtonsMantPensumEliminar.setEnable();
		}
	},
    
    resetElements : function(element) {
    	if (element == 'org') {
    		Tool.rstPwrCmb(powerComboBoxMantPenSuborganizacion);
    		Tool.rstPwrCmb(powerComboBoxMantPenCarrera);
    		editsMantPenPeriodo.setValue("");
	  		gridsMantPensum.clean();
	  		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsMantPensum, powerComboBoxMantPenSuborganizacion, 1, 2, powerComboBoxMantPenOrganizacion);		
	  	}
		else if (element == 'suborg') {
			Tool.rstPwrCmb(powerComboBoxMantPenCarrera);
			editsMantPenPeriodo.setValue("");
	  		gridsMantPensum.clean();
	  		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsMantPensum, powerComboBoxMantPenCarrera, -1, 3, powerComboBoxMantPenSuborganizacion);		
	  	}
		else if (element == 'carr') {
			editsMantPenPeriodo.setValue("");
	  		gridsMantPensum.clean();
	  		this.getPeriodoPensum();
	  	}
    	imgButtonsMantPensumAgregar.setEnable();
    	imgButtonsMantPensumModificar.setDisable();
    	imgButtonsMantPensumEliminar.setDisable();
	},

	setEvents : function() {
		powerComboBoxMantPenOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxMantPenSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");	
		powerComboBoxMantPenCarrera.onChange(this.windowName + ".resetElements('carr')");
		gridsMantPensum.onClickCells(this.windowName + ".setData()");
	  	imgButtonsMantPensumAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantPensumModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantPensumEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
	  	imgButtonsMantPensumBuscar.onClick("MantPensum.buscar()");
	  	imgButtonsMantPensumLimpiar.onClick("MantPensum.limpiar()");  	
	  	imgButtonsMantPensumSalir.onClick("dialogsMantPensum.close()");
	},

	buscar : function() {
		if (powerComboBoxMantPenOrganizacion.valid(dialogsMantPensum))
			if (powerComboBoxMantPenSuborganizacion.valid(dialogsMantPensum))
				if (powerComboBoxMantPenCarrera.valid(dialogsMantPensum)) {
					gridsMantPensum.clean();
					Tool.getGridData('MantObject', 'getMantPensum', dialogsMantPensum, gridsMantPensum, false, powerComboBoxMantPenCarrera.setModeReturnGetText(2), powerComboBoxMantPenEstado, powerComboBoxMantPenEstado);
				}
	},
  
	coreUpdate : function(methodName) {
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == 'eliminar') {
			if (powerComboBoxMantPenOrganizacion.valid(dialogsMantPensum)) {
				rlx.addInt('reg', this.idPensum);
				procesar = true;
			}
		}										
		else {
	  		if (powerComboBoxMantPenOrganizacion.valid(dialogsMantPensum))
	  			if (powerComboBoxMantPenSuborganizacion.valid(dialogsMantPensum))
	  				if (powerComboBoxMantPenCarrera.valid(dialogsMantPensum))	  				
	  					if (calendarsMantPenFecPublicacion.valid(dialogsMantPensum))
	  						if (calendarsMantPenFecAplicacion.valid(dialogsMantPensum))
	  							if (editsMantPenPeriodo.valid(dialogsMantPensum))
	  								if (powerComboBoxMantPenEstado.valid(dialogsMantPensum))
	  									if (editsMantPenDescripcion.valid(dialogsMantPensum)) { 	
	  										rlx.addInt('reg',this.idPeriodo);
											rlx.add('reg',powerComboBoxMantPenCarrera.setModeReturnGetText(2));
											rlx.add('reg',editsMantPenDescripcion);				
											rlx.add('reg',powerComboBoxMantPenEstado);
											rlx.add('reg',calendarsMantPenFecPublicacion);
											rlx.add('reg',calendarsMantPenFecAplicacion);
								            if (methodName == 'modificar') {
		                                        rlx.addInt('reg', this.idPensum);
								            }
											procesar = true;		
										} 
			}
		if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()', rlx);
        }
	}
}; 	
