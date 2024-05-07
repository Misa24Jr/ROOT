var dialogsResultadosPrueba = new Object();
var calendarsResultadosPrueba = new Object();
var powerComboBoxResultadosPruOrganizacion = new Object();
var powerComboBoxResultadosPruSuborganizacion = new Object();
var powerComboBoxResultadosPruCarrera = new Object();
var powerComboBoxResultadosPruPeriodo = new Object();
var editsResultadosPruCedula = new Object();
var editsResultadosPruNombre = new Object();
var editsResultadosPruApellido = new Object();
var editsResultadosPruResultado = new Object();
var memoResultadosPruObservaciones = new Object();
var gridsResultadosPrueba = new Object();
var imgButtonsResultadosPruAgregar = new Object();
var imgButtonsResultadosPruModificar = new Object();
var imgButtonsResultadosPruEliminar = new Object();
var imgButtonsResultadosPruLimpiar = new Object();
var imgButtonsResultadosPruBusacar = new Object();
var imgButtonsResultadosPruSalir = new Object();
var mwResultadosPrueba  = new Object();// minWindow
var ResultadosPrueba = {
	windowName : 'ResultadosPrueba',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate)	{
			this.init();
			this.isCreate = true;
		}
		if (dialogsResultadosPrueba.isByClean())
 			this.limpiar();			
		dialogsResultadosPrueba.show();
	},
	hide : function() {
		dialogsResultadosPrueba.hide();
	},
	createMWs : function() {
      mwResultadosPrueba = desktop.addMinWindow('R. Prueba', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
      dialogsResultadosPrueba.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
  dialogsResultadosPrueba_Init : function(){
        dialogsResultadosPrueba.setMinimizeXY(0,0);
        dialogsResultadosPrueba.setCenterScreen();
        dialogsResultadosPrueba.addSpace(1,0,20);
        dialogsResultadosPrueba.addLn(1,1,1);
		dialogsResultadosPrueba.setHeightCell(1,1,10);
		dialogsResultadosPrueba.addObjToDialog(powerComboBoxResultadosPruOrganizacion,2,1,24);
		dialogsResultadosPrueba.addObjToDialog(powerComboBoxResultadosPruSuborganizacion,2,1,24);
		dialogsResultadosPrueba.addObjToDialog(powerComboBoxResultadosPruCarrera,2,1,24);
        dialogsResultadosPrueba.adjAllMarginObj(2,1,23);
        dialogsResultadosPrueba.addObjToDialog(editsResultadosPruCedula,3,1,24);
        editsResultadosPruCedula.setSizeEdit(149);
        dialogsResultadosPrueba.addObjToDialog(editsResultadosPruNombre,3,1,24);
        editsResultadosPruNombre.setSizeEdit(149);
		editsResultadosPruNombre.setMaxLength(50); 
        dialogsResultadosPrueba.addObjToDialog(editsResultadosPruApellido,3,1,24);
        editsResultadosPruApellido.setSizeEdit(149);
		editsResultadosPruApellido.setMaxLength(50); 
        dialogsResultadosPrueba.adjAllMarginObj(3,1,23);
        dialogsResultadosPrueba.addObjToDialog(calendarsResultadosPrueba.getEditCalendar(),4,1);
        calendarsResultadosPrueba.setWidthEditCalendar(127);
        calendarsResultadosPrueba.setCaption('Fecha de la Prueba:',1,120);
        calendarsResultadosPrueba.sendToFrom(100);
        dialogsResultadosPrueba.addObjToDialog(powerComboBoxResultadosPruPeriodo,4,1,24);
        dialogsResultadosPrueba.addObjToDialog(editsResultadosPruResultado,4,1,24);
        editsResultadosPruResultado.setSizeEdit(149);
		dialogsResultadosPrueba.adjAllMarginObj(4,1,23);
        dialogsResultadosPrueba.addObjToDialog(memoResultadosPruObservaciones,5,1,54);
		memoResultadosPruObservaciones.vAlignCaption('middle');
        memoResultadosPruObservaciones.setDimension(690,40);
		memoResultadosPruObservaciones.setMaxLength(150); 
        dialogsResultadosPrueba.addLn(6,1,1);
		dialogsResultadosPrueba.setHeightCell(6,1,2);
        dialogsResultadosPrueba.addObjToDialog(gridsResultadosPrueba.getObject(),7,1);
        dialogsResultadosPrueba.addLn(8,1,1);
		dialogsResultadosPrueba.setHeightCell(8,1,12);
        dialogsResultadosPrueba.addObjToDialog(imgButtonsResultadosPruAgregar,9,1);
        dialogsResultadosPrueba.addObjToDialog(imgButtonsResultadosPruModificar,9,1);
        dialogsResultadosPrueba.addObjToDialog(imgButtonsResultadosPruEliminar,9,1);
        dialogsResultadosPrueba.addObjToDialog(imgButtonsResultadosPruLimpiar,9,1);
        dialogsResultadosPrueba.addObjToDialog(imgButtonsResultadosPruBuscar,9,1);
        dialogsResultadosPrueba.addObjToDialog(imgButtonsResultadosPruSalir,9,1);
        imgButtonsResultadosPruAgregar.setDimension(90,22);
        imgButtonsResultadosPruModificar.setDimension(90,22);
        imgButtonsResultadosPruEliminar.setDimension(90,22);
        imgButtonsResultadosPruLimpiar.setDimension(90,22);
        imgButtonsResultadosPruBuscar.setDimension(90,22);
        imgButtonsResultadosPruSalir.setDimension(90,22);
        dialogsResultadosPrueba.adjAllMarginObj(9,1,20);
        dialogsResultadosPrueba.leftMarginObj(9,1,0,82);
  },
  
  gridsResultadosPrueba_Init : function(){
        gridsResultadosPrueba.setFixColRow(false,true);
        gridsResultadosPrueba.addTitleVectorX(['Id_orgz','Id_suborgz','Id_carrera','F. Prueba','Periodo','Carrera','Cedula','Nombre','Apellido','Resultado','Observaciones']);
        gridsResultadosPrueba.showData(); 
		gridsResultadosPrueba.setSizeCol(1,5);
		gridsResultadosPrueba.setSizeCol(2,5);
		gridsResultadosPrueba.setSizeCol(3,5);
        gridsResultadosPrueba.setSizeCol(4,80);
        gridsResultadosPrueba.setSizeCol(5,5);
        gridsResultadosPrueba.setSizeCol(6,245);
        gridsResultadosPrueba.setSizeCol(7,90);
        gridsResultadosPrueba.setSizeCol(8,160);
        gridsResultadosPrueba.setSizeCol(9,160);
        gridsResultadosPrueba.setSizeCol(10,70);
        gridsResultadosPrueba.setSizeCol(11,5);
		gridsResultadosPrueba.hideCol(1);
		gridsResultadosPrueba.hideCol(2);
		gridsResultadosPrueba.hideCol(3);
		gridsResultadosPrueba.hideCol(5);
        gridsResultadosPrueba.hideCol(11);
  },

  create : function(){
      dialogsResultadosPrueba = dialogs.create('dialogsResultadosPrueba',0,0,854,389,'RESULTADO DE LA PRUEBA');
	  powerComboBoxResultadosPruOrganizacion = powerComboBox.create('powerComboBoxResultadosPruOrganizacion','powerComboBoxResultadosPruOrganizacion','Organización (*):',1,120);
      powerComboBoxResultadosPruOrganizacion.setValidEmpty();
      powerComboBoxResultadosPruOrganizacion.addEmptyOption();
      powerComboBoxResultadosPruOrganizacion.enableReadOnlyEditor();
	  powerComboBoxResultadosPruSuborganizacion = powerComboBox.create('powerComboBoxResultadosPruSuborganizacion','powerComboBoxResultadosPruSuborganizacion','Suborganización (^):',1,122);
      powerComboBoxResultadosPruSuborganizacion.setValidEmpty();
      powerComboBoxResultadosPruSuborganizacion.addEmptyOption();
      powerComboBoxResultadosPruSuborganizacion.enableReadOnlyEditor();
	  powerComboBoxResultadosPruCarrera = powerComboBox.create('powerComboBoxResultadosPruCarrera','powerComboBoxResultadosPruCarrera','Carrera (^):',1,75);
      powerComboBoxResultadosPruCarrera.setValidEmpty();
      powerComboBoxResultadosPruCarrera.addEmptyOption();
      powerComboBoxResultadosPruCarrera.enableReadOnlyEditor();
      calendarsResultadosPrueba = calendars.create('calendarsResultadosPrueba');
      calendarsResultadosPrueba.setValidEmpty();
      powerComboBoxResultadosPruPeriodo = powerComboBox.create('powerComboBoxResultadosPruPeriodo','powerComboBoxResultadosPruPeriodo','Periodo:',1,122);
      powerComboBoxResultadosPruPeriodo.setValidEmpty();
      powerComboBoxResultadosPruPeriodo.addEmptyOption();
      powerComboBoxResultadosPruPeriodo.enableReadOnlyEditor();      
      editsResultadosPruCedula = edits.create('editsResultadosPruCedula','editsResultadosPruCedula','C.i. (*):',1,120,'normal');
      editsResultadosPruCedula.setValidEmpty();
	  editsResultadosPruCedula.setValidInteger();
	  editsResultadosPruCedula.setFieldFind(true);
      editsResultadosPruNombre = edits.create('editsResultadosPruNombre','editsResultadosPruNombre','Nombre (*):',1,122,'normal');
      editsResultadosPruNombre.setValidEmpty();
	  editsResultadosPruNombre.setFieldFind(true);
      editsResultadosPruApellido = edits.create('editsResultadosPruApellido','editsResultadosPruApellido','Apellido (*):',1,75,'normal');
      editsResultadosPruApellido.setValidEmpty();
	  editsResultadosPruApellido.setFieldFind(true);
      editsResultadosPruResultado = edits.create('editsResultadosPruResultado','editsResultadosPruResultado','Resultado:',1,75,'normal');
      editsResultadosPruResultado.setValidEmpty();
      memoResultadosPruObservaciones = memo.create('memoResultadosPruObservaciones','Observaciones:',1,1,118);
      memoResultadosPruObservaciones.setValidEmpty();
      gridsResultadosPrueba = grids.create('gridsResultadosPrueba',8,11);
      imgButtonsResultadosPruAgregar = imgButtons.create('imgButtonsResultadosPruAgregar','Agregar','ok.png');
      imgButtonsResultadosPruModificar = imgButtons.create('imgButtonsResultadosPruModificar','Modificar','icono_modificar.png');
      imgButtonsResultadosPruModificar.setDisable();
      imgButtonsResultadosPruEliminar = imgButtons.create('imgButtonsResultadosPruEliminar','Eliminar','eliminar.jpg');
      imgButtonsResultadosPruEliminar.setDisable();
      imgButtonsResultadosPruLimpiar = imgButtons.create('imgButtonsResultadosPruLimpiar','Limpiar','limpiar.png');
      imgButtonsResultadosPruBuscar = imgButtons.create('imgButtonsResultadosPruBuscar','Buscar','icono_buscar.png');
      imgButtonsResultadosPruSalir = imgButtons.create('imgButtonsResultadosPruSalir','Salir','salir.png');
  },

  init : function(){
  	  this.create();
      this.setEvents();
      this.dialogsResultadosPrueba_Init();
      this.gridsResultadosPrueba_Init();
	  this.createMWs();
  },

	loadInit: function(){
		Tool.loadPowerComboData(dialogsResultadosPrueba, powerComboBoxResultadosPruOrganizacion, 0, 1, json('getData'));
		Tool.loadPowerComboData(dialogsResultadosPrueba, powerComboBoxResultadosPruPeriodo, 2, 5, json('getMantPeriodo'));
    },
      
	limpiarCoreUpdate : function() {
  		editsResultadosPruCedula.hideId = -1;
  		dialogsResultadosPrueba.setMsg("");
  		imgButtonsResultadosPruAgregar.setDisable();
  		imgButtonsResultadosPruModificar.setDisable();
  		imgButtonsResultadosPruEliminar.setDisable();	
  		dlgWait.hide();
  	},
  	
  	limpiarFind : function(ix) {
  		editsResultadosPruCedula.hideId = -1;
  		
  		switch (ix) {
		case 1: 
	  		editsResultadosPruNombre.setValue("");
	  		editsResultadosPruApellido.setValue("");  		
			break;
		case 2: 
	  		editsResultadosPruCedula.setValue("");
	  		editsResultadosPruApellido.setValue("");  		
			break;
		default:
	  		editsResultadosPruCedula.setValue("");
  			editsResultadosPruNombre.setValue("");
			break;
		} 
  	},  

  	limpiar : function(){
  		editsResultadosPruCedula.hideId = -1;
		powerComboBoxResultadosPruOrganizacion.setSelectedIndex(0);
		powerComboBoxResultadosPruSuborganizacion.setSelectedIndex(0);
		powerComboBoxResultadosPruCarrera.setSelectedIndex(0);
		editsResultadosPruCedula.setValue("");
  		editsResultadosPruNombre.setValue("");
  		editsResultadosPruApellido.setValue("");
  		calendarsResultadosPrueba.clear();  		
  		powerComboBoxResultadosPruPeriodo.setSelectedIndex(0);
  		editsResultadosPruResultado.setValue("");  		
  		memoResultadosPruObservaciones.setText('');
  		gridsResultadosPrueba.clean();
  		dialogsResultadosPrueba.setMsg("");
  		imgButtonsResultadosPruAgregar.setEnable();
		imgButtonsResultadosPruModificar.setDisable();
		imgButtonsResultadosPruEliminar.setDisable();	
		Tool.cnnSrv('MantObject', 'getMantPensumInit', this.windowName + '.loadInit()');
  	},
  	
  	buscar : function() {
  		ProcDispProf.clearData();
  		imgButtonsResultadosPruModificar.setDisable();
  		imgButtonsResultadosPruEliminar.setDisable();	
		if (editsResultadosPruCedula.getValue() != '' && editsResultadosPruNombre.getValue() != '' && editsResultadosPruApellido.getValue() != '') {
			this.getEvaluacion();
		}
		else if (editsResultadosPruCedula.getValue() != '' || editsResultadosPruNombre.getValue() != '' || editsResultadosPruApellido.getValue() != '') {
	  		imgButtonsResultadosPruAgregar.setDisable();
			ResuBusqueda.setObjectExtFnc(editsResultadosPruCedula, editsResultadosPruNombre, editsResultadosPruApellido, 'Evaluacion.buscar()');
			Tool.getGridData('MantObject', 'getMantPersTodas', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsResultadosPruCedula, editsResultadosPruCedula, editsResultadosPruNombre, editsResultadosPruNombre, editsResultadosPruApellido, editsResultadosPruApellido);
		}
		else {
			Alert.show('Ingrese: C.i., Nombre, Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},  
	
	getDispProf: function() {
		var rlx = xmlStructs.createRecordList("rlx");
		rlx.add('reg',editsResultadosPruCedula);
		imgButtonsResultadosPruAgregar.setEnable();
		Tool.cnnSrv('MantObject', 'getDispProfesor', this.windowName + '.loadDispProf()', rlx);
    },
  
    loadDispProf: function() {
  		imgButtonsResultadosPruAgregar.setDisable();
  		imgButtonsResultadosPruEliminar.setEnable();	
  		imgButtonsResultadosPruReporte.setEnable();	
		ProcDispProf.setData(json('getDispProfesor').data);
    	dialogsEvaluacion.setMsg(xmlHttpReq.objStsResponse.shortInfo);
    	dlgWait.hide();
    },
	
	
	
	
  setData : function(){
		if (gridsResultadosPrueba.getDataCell(4) != ""){
		calendarsResultadosPrueba.readOnly(true);
		calendarsResultadosPrueba.findOption(gridsResultadosPru.getDataCell(4));		
        powerComboBoxResultadosPruCarrera.findOption(gridsResultadosPru.getDataCell(6));
		editsResultadosPruCedula.setValue(gridsResultadosPru.getDataCell(7));
        editsResultadosPruNombre.setValue(gridsResultadosPru.getDataCell(8));
        editsResultadosPruApellido.setValue(gridsResultadosPru.getDataCell(9));
        editsResultadosPruResultado.setValue(gridsResultadosPru.getDataCell(10));
		imgButtonsResultadosPruAgregar.setDisable();
		imgButtonsResultadosPruModificar.setEnable();
		imgButtonsResultadosPruEliminar.setEnable();            
		}			
	},
   
  setEvents : function(){
  	editsResultadosPruCedula.onEnter(this.windowName + ".buscar()");
  	gridsResultadosPrueba.onClickCells(this.windowName+".setData()")
    imgButtonsResultadosPruAgregar.onClick(this.windowName+".coreUpdate('agregar')");
	imgButtonsResultadosPruModificar.onClick(this.windowName+".coreUpdate('modificar')");
	imgButtonsResultadosPruEliminar.onClick(this.windowName+".coreUpdate('eliminar')");	
  	imgButtonsResultadosPruLimpiar.onClick('ResultadosPrueba.limpiar()');
  	imgButtonsResultadosPruBuscar.onClick('ResultadosPrueba.buscar()');
  	imgButtonsResultadosPruSalir.onClick('dialogsResultadosPrueba.close()');
	editsResultadosPruCedula.onEnter(this.windowName + ".buscar()");
	editsResultadosPruCedula.onChange(this.windowName + ".limpiarFind(1)");
	editsResultadosPruNombre.onEnter(this.windowName + ".buscar()");
	editsResultadosPruNombre.onChange(this.windowName + ".limpiarFind(2)");
	editsResultadosPruApellido.onEnter(this.windowName + ".buscar()");
	editsResultadosPruApellido.onChange(this.windowName + ".limpiarFind(3)");
	powerComboBoxResultadosPruOrganizacion.onChange("Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsResultadosPrueba, powerComboBoxResultadosPruSuborganizacion, 1, 2, powerComboBoxResultadosPruOrganizacion)");
	powerComboBoxResultadosPruSuborganizacion.onChange("Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsResultadosPrueba, powerComboBoxResultadosPruCarrera, 2, 3, powerComboBoxResultadosPruSuborganizacion)");	  	 	
  },
  
  coreUpdate: function(methodName) {
		if (powerComboBoxMantProAlumProyecto.valid(dialogsResultadosPrueba)) 
			if (editsResultadosPruCedula.valid(dialogsResultadosPrueba))	{
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()', ProcDispProf);
		}
		else
			Alert.show('Debe ingresar un horario de disponibilidad.', 'SISTEMA', Alert.TYPE_WARNING);
	}
};