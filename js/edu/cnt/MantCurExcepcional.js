var dialogsMantCurExcepcional = new Object();
var editsMantCurExcCi = new Object();
var editsMantCurExcNombre = new Object();
var editsMantCurExcApellido = new Object();
var editsMantCurExcMotivo = new Object();
var powerComboBoxMantCurExcOrganizacion = new Object();
var powerComboBoxMantCurExcSuborganizacion = new Object();
var powerComboBoxMantCurExcCarrera = new Object();
var powerComboBoxMantCurExcPosicion = new Object();
var powerComboBoxMantCurExcMateria = new Object();
var powerComboBoxMantCurExcSeccion = new Object();
var powerComboBoxMantCurExcEstPeriodo = new Object();
var editsMantCurExcPeriodo = new Object();
var gridsMantCurExcepcional = new Object();
var imgButtonsMantCurExcAgregar = new Object();
var imgButtonsMantCurExcModificar = new Object();
var imgButtonsMantCurExcEliminar = new Object();
var imgButtonsMantCurExcBuscar = new Object();
var imgButtonsMantCurExcLimpiar = new Object();
var imgButtonsMantCurExcSalir = new Object();
var mwMantCurExcepcional = new Object();// minWindow

var MantCurExcepcional = {
	windowName : 'MantCurExcepcional',
	isCreate : false,
	idCurso : 0,
    idPeriodo : 0,

	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantCurExcepcional.isByClean())
 			this.limpiar();			
		dialogsMantCurExcepcional.show();
	},
	
	hide : function() {
		dialogsMantCurExcepcional.hide();
	},
	
	createMWs : function() {
		mwMantCurExcepcional = desktop.addMinWindow('M.C.Excepcional', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsMantCurExcepcional.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},

	dialogsMantCurExcepcional_Init : function() {
        dialogsMantCurExcepcional.setMinimizeXY(0,0);
        dialogsMantCurExcepcional.setCenterScreen();
        dialogsMantCurExcepcional.addSpace(0,0,20);
        dialogsMantCurExcepcional.addLn(1,1,1);
		dialogsMantCurExcepcional.setHeightCell(1,1,10);
		dialogsMantCurExcepcional.addObjToDialog(editsMantCurExcCi,2,1,24);
        editsMantCurExcCi.setSizeEdit(149);
        dialogsMantCurExcepcional.addObjToDialog(editsMantCurExcNombre,2,1,24);
        editsMantCurExcNombre.setSizeEdit(149);
		editsMantCurExcNombre.setMaxLength(50); 
        dialogsMantCurExcepcional.addObjToDialog(editsMantCurExcApellido,2,1,24);
        editsMantCurExcApellido.setSizeEdit(149);
		editsMantCurExcApellido.setMaxLength(50); 
		dialogsMantCurExcepcional.adjAllMarginObj(2,1,20);
        dialogsMantCurExcepcional.addObjToDialog(powerComboBoxMantCurExcOrganizacion,3,1,24);
        dialogsMantCurExcepcional.addObjToDialog(powerComboBoxMantCurExcSuborganizacion,3,1,24);
        dialogsMantCurExcepcional.addObjToDialog(powerComboBoxMantCurExcCarrera,3,1,24);
		dialogsMantCurExcepcional.adjAllMarginObj(3,1,20);
		dialogsMantCurExcepcional.addObjToDialog(powerComboBoxMantCurExcEstPeriodo,4,1,24);
		dialogsMantCurExcepcional.addObjToDialog(editsMantCurExcPeriodo,4,1,24);
        editsMantCurExcPeriodo.setSizeEdit(149);
		dialogsMantCurExcepcional.adjAllMarginObj(4,1,20);
		dialogsMantCurExcepcional.addObjToDialog(powerComboBoxMantCurExcPosicion,5,1,24);
		dialogsMantCurExcepcional.addObjToDialog(powerComboBoxMantCurExcMateria,5,1,24);
		dialogsMantCurExcepcional.addObjToDialog(powerComboBoxMantCurExcSeccion,5,1,24);
		dialogsMantCurExcepcional.adjAllMarginObj(5,1,20);
		dialogsMantCurExcepcional.addObjToDialog(editsMantCurExcMotivo,6,1,24);
		editsMantCurExcMotivo.setSizeEdit(693);
		editsMantCurExcMotivo.setMaxLength(150); 
		dialogsMantCurExcepcional.adjAllMarginObj(6,1,20);		
        dialogsMantCurExcepcional.addLn(7,1,1);
		dialogsMantCurExcepcional.setHeightCell(7,1,10);
        dialogsMantCurExcepcional.addObjToDialog(gridsMantCurExcepcional.getObject(),8,1);
        dialogsMantCurExcepcional.addLn(9,1,1);
		dialogsMantCurExcepcional.setHeightCell(9,1,12);
        dialogsMantCurExcepcional.addObjToDialog(imgButtonsMantCurExcAgregar,10,1);
        dialogsMantCurExcepcional.addObjToDialog(imgButtonsMantCurExcModificar,10,1);
        dialogsMantCurExcepcional.addObjToDialog(imgButtonsMantCurExcEliminar,10,1);
        dialogsMantCurExcepcional.addObjToDialog(imgButtonsMantCurExcLimpiar,10,1);
        dialogsMantCurExcepcional.addObjToDialog(imgButtonsMantCurExcBuscar,10,1);
        dialogsMantCurExcepcional.addObjToDialog(imgButtonsMantCurExcSalir,10,1);
        imgButtonsMantCurExcAgregar.setDimension(90,22);
        imgButtonsMantCurExcModificar.setDimension(90,22);
        imgButtonsMantCurExcEliminar.setDimension(90,22);
        imgButtonsMantCurExcBuscar.setDimension(90,22);
        imgButtonsMantCurExcLimpiar.setDimension(90,22);
        imgButtonsMantCurExcSalir.setDimension(90,22);
        dialogsMantCurExcepcional.adjAllMarginObj(10,1,20);
        dialogsMantCurExcepcional.leftMarginObj(10,1,0,80);
        editsMantCurExcPeriodo.readOnly(true);
	},
  
	gridsMantCurExcepcional_Init : function() {
        gridsMantCurExcepcional.setFixColRow(false,true);
        gridsMantCurExcepcional.addTitleVectorX(['Periodo','Carrera','Posición','Materia','Sección','deMotivo','idCurso','idPeriodo']);
        gridsMantCurExcepcional.showData();
        gridsMantCurExcepcional.setSizeCol(1,80);
        gridsMantCurExcepcional.setSizeCol(2,180);
        gridsMantCurExcepcional.setSizeCol(3,160);
        gridsMantCurExcepcional.setSizeCol(4,274);
		gridsMantCurExcepcional.setSizeCol(5,110);
		gridsMantCurExcepcional.setSizeCol(6,0);
		gridsMantCurExcepcional.setSizeCol(7,0);
		gridsMantCurExcepcional.setSizeCol(8,0);
        gridsMantCurExcepcional.hideCol(6);
        gridsMantCurExcepcional.hideCol(7);
        gridsMantCurExcepcional.hideCol(8);
	},

	create : function() {
		dialogsMantCurExcepcional = dialogs.create('dialogsMantCurExcepcional',0,0,850,430,'AUTORIZAR INSCRIPCIÓN EXCEPCIONAL');
		powerComboBoxMantCurExcOrganizacion = powerComboBox.create('powerComboBoxMantCurExcOrganizacion','powerComboBoxMantCurExcOrganizacion','Organización (+):',1,116);
		powerComboBoxMantCurExcOrganizacion.setValidEmpty();
		powerComboBoxMantCurExcOrganizacion.addEmptyOption();
		powerComboBoxMantCurExcOrganizacion.enableReadOnlyEditor();        
		powerComboBoxMantCurExcSuborganizacion = powerComboBox.create('powerComboBoxMantCurExcSuborganizacion','powerComboBoxMantCurExcSuborganizacion','Suborganización (^):',1,125);
		powerComboBoxMantCurExcSuborganizacion.setValidEmpty();
		powerComboBoxMantCurExcSuborganizacion.addEmptyOption();
		powerComboBoxMantCurExcSuborganizacion.enableReadOnlyEditor();
		powerComboBoxMantCurExcCarrera = powerComboBox.create('powerComboBoxMantCurExcCarrera','powerComboBoxMantCurExcCarrera','Carrera (^):',1,79);
		powerComboBoxMantCurExcCarrera.setValidEmpty();
		powerComboBoxMantCurExcCarrera.addEmptyOption();
		powerComboBoxMantCurExcCarrera.enableReadOnlyEditor();
		editsMantCurExcCi = edits.create('editsMantCurExcCi','editsMantCurExcCi','C.i: (*):',1,116);
      	editsMantCurExcCi.setValidInteger();
      	editsMantCurExcCi.setFieldFind(true);
      	editsMantCurExcNombre = edits.create('editsMantCurExcNombre','editsMantCurExcNombre','Nombre (*):',1,125);
      	editsMantCurExcNombre.setValidEmpty();
      	editsMantCurExcNombre.setFieldFind(true);
      	editsMantCurExcApellido = edits.create('editsMantCurExcApellido','editsMantCurExcApellido','Apellido (*):',1,79);
      	editsMantCurExcApellido.setValidEmpty();
      	editsMantCurExcApellido.setFieldFind(true);
      	editsMantCurExcMotivo = edits.create('editsMantCurExcMotivo','editsMantCurExcMotivo','Motivo :',1,116);
      	editsMantCurExcMotivo.setValidEmpty();
      	editsMantCurExcPeriodo = edits.create('editsMantCurExcPeriodo','editsMantCurExcPeriodo','Periodo:',1,125,'normal');
        editsMantCurExcPeriodo.setValidEmpty();
      	powerComboBoxMantCurExcPosicion = powerComboBox.create('powerComboBoxMantCurExcPosicion','powerComboBoxMantCurExcPosicion','Posición (^):',1,116);
      	powerComboBoxMantCurExcPosicion.setValidEmpty();
      	powerComboBoxMantCurExcPosicion.addEmptyOption();
      	powerComboBoxMantCurExcPosicion.enableReadOnlyEditor();
      	powerComboBoxMantCurExcMateria = powerComboBox.create('powerComboBoxMantCurExcMateria','powerComboBoxMantCurExcMateria','Materia (^):',1,125);
      	powerComboBoxMantCurExcMateria.setValidEmpty();
      	powerComboBoxMantCurExcMateria.addEmptyOption();
      	powerComboBoxMantCurExcMateria.enableReadOnlyEditor();
      	powerComboBoxMantCurExcMateria.setDataType('string');
      	powerComboBoxMantCurExcSeccion = powerComboBox.create('powerComboBoxMantCurExcSeccion','powerComboBoxMantCurExcSeccion','Sección (^):',1,79);
      	powerComboBoxMantCurExcSeccion.setValidEmpty();
      	powerComboBoxMantCurExcSeccion.addEmptyOption();
      	powerComboBoxMantCurExcSeccion.enableReadOnlyEditor();
      	gridsMantCurExcepcional = grids.create('gridsMantCurExcepcional',10,8);
      	imgButtonsMantCurExcAgregar = imgButtons.create('imgButtonsMantCurExcAgregar','Agregar','ok.png');
      	imgButtonsMantCurExcModificar = imgButtons.create('imgButtonsMantCurExcModificar','Modificar','icono_modificar.png');
      	imgButtonsMantCurExcModificar.setDisable();
      	imgButtonsMantCurExcEliminar = imgButtons.create('imgButtonsMantCurExcEliminar','Eliminar','eliminar.jpg');
      	imgButtonsMantCurExcEliminar.setDisable();
      	imgButtonsMantCurExcBuscar = imgButtons.create('imgButtonsMantCurExcBuscar','Buscar','icono_buscar.png');
      	imgButtonsMantCurExcLimpiar = imgButtons.create('imgButtonsMantCurExcLimpiar','Limpiar','limpiar.png');
      	imgButtonsMantCurExcSalir = imgButtons.create('imgButtonsMantCurExcSalir','Salir','salir.png');
		powerComboBoxMantCurExcEstPeriodo = powerComboBox.create('powerComboBoxMantCurExcEstPeriodo', 'powerComboBoxMantCurExcEstPeriodo', 'Estado Periodo (^):', 1,116);
        powerComboBoxMantCurExcEstPeriodo.enableReadOnlyEditor();
        powerComboBoxMantCurExcEstPeriodo.addEmptyOption();
        powerComboBoxMantCurExcEstPeriodo.setValidEmpty();  
        
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsMantCurExcepcional_Init();
		this.gridsMantCurExcepcional_Init();
		this.createMWs();
	},
	
  	limpiarFind : function(ix) {
  		editsMantCurExcCi.hideId = -1;
  		
  		switch (ix) {
		case 1: 
			editsMantCurExcNombre.setValue("");
			editsMantCurExcApellido.setValue("");  		
			break;
		case 2: 
			editsMantCurExcCi.setValue("");
			editsMantCurExcApellido.setValue("");  		
			break;
		default:
			editsMantCurExcCi.setValue("");
		editsMantCurExcNombre.setValue("");
			break;
		} 
  	},
	
  	limpiar : function() {
  		editsMantCurExcCi.hideId = -1;
  		editsMantCurExcCi.setValue("");
  		editsMantCurExcNombre.setValue("");
  		editsMantCurExcApellido.setValue("");  		
  		editsMantCurExcMotivo.setValue("");  		
  		Tool.rstPwrCmb(powerComboBoxMantCurExcOrganizacion);
  		Tool.rstPwrCmb(powerComboBoxMantCurExcSuborganizacion);
  		Tool.rstPwrCmb(powerComboBoxMantCurExcCarrera);
  		Tool.rstPwrCmb(powerComboBoxMantCurExcPosicion);
  		Tool.rstPwrCmb(powerComboBoxMantCurExcMateria);
  		Tool.rstPwrCmb(powerComboBoxMantCurExcSeccion); 
  		Tool.rstPwrCmb(powerComboBoxMantCurExcEstPeriodo);
		editsMantCurExcPeriodo.setValue("");
  		gridsMantCurExcepcional.clean();  		
  		dialogsMantCurExcepcional.setMsg("");
		imgButtonsMantCurExcAgregar.setEnable();
		imgButtonsMantCurExcModificar.setDisable();
		imgButtonsMantCurExcEliminar.setDisable();	
        Tool.cnnSrv('MantObject', 'getMantCreMateriaInit', this.windowName + '.loadDataInit()');
    },

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsMantCurExcepcional, powerComboBoxMantCurExcOrganizacion, 0, 1, json('getData'));
		Tool.loadPowerComboData(dialogsMantCurExcepcional, powerComboBoxMantCurExcEstPeriodo, 0, 1, json('getMantEstPeriodo'));
		Tool.getContext(dialogsMantCurExcepcional, powerComboBoxMantCurExcOrganizacion, powerComboBoxMantCurExcSuborganizacion, powerComboBoxMantCurExcCarrera);
    },
  	
	buscar: function() {
		imgButtonsMantCurExcAgregar.setEnable();
		imgButtonsMantCurExcModificar.setDisable();
		imgButtonsMantCurExcEliminar.setDisable();	
		gridsMantCurExcepcional.clean();
		if ((editsMantCurExcCi.getValue() != '' && editsMantCurExcNombre.getValue() != '' && editsMantCurExcApellido.getValue() != '')) {
	  		editsMantCurExcMotivo.setValue("");  		
			Tool.getGridData('MantObject', 'getCurExcepcional', dialogsMantCurExcepcional, gridsMantCurExcepcional, false, new MiniDataSet(editsMantCurExcCi.hideId, 'int', false));
		}
		else if (editsMantCurExcCi.getValue() != '' || editsMantCurExcNombre.getValue() != '' || editsMantCurExcApellido.getValue() != '') {
        	ResuBusqueda.setObjectExtFnc(editsMantCurExcCi, editsMantCurExcNombre, editsMantCurExcApellido, 'MantCurExcepcional.buscar()');
			Tool.getGridData('MantObject', 'getMantPersTodas', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsMantCurExcCi, editsMantCurExcCi, editsMantCurExcNombre, editsMantCurExcNombre, editsMantCurExcApellido, editsMantCurExcApellido);
		}
		else {
			Alert.show('Debe ingresar al menos: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
	},
	
    setData : function() {
		if (gridsMantCurExcepcional.getDataCell(1) != "") {
	  		powerComboBoxMantCurExcPosicion.setSelectedIndex(0);
	  		Tool.rstPwrCmb(powerComboBoxMantCurExcMateria);
	  		Tool.rstPwrCmb(powerComboBoxMantCurExcSeccion);  		
	  		this.idCurso = gridsMantCurExcepcional.getDataCell(7);
	  		this.idPeriodo = gridsMantCurExcepcional.getDataCell(8); 
	  		editsMantCurExcMotivo.setValue(gridsMantCurExcepcional.getDataCell(6));
        	imgButtonsMantCurExcAgregar.setDisable();
			imgButtonsMantCurExcModificar.setEnable();
			imgButtonsMantCurExcEliminar.setEnable();             
		}
	},
	
	setEvents : function() {
		gridsMantCurExcepcional.onClickCells(this.windowName + ".setData()");		
  		powerComboBoxMantCurExcOrganizacion.onChange(this.windowName + ".resetElements('org')");
  		powerComboBoxMantCurExcSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
  		powerComboBoxMantCurExcCarrera.onChange(this.windowName + ".resetElements('carr')");
  		powerComboBoxMantCurExcPosicion.onChange(this.windowName + ".resetElements('pos')");
  		powerComboBoxMantCurExcMateria.onChange(this.windowName + ".resetElements('mat')");
  		powerComboBoxMantCurExcEstPeriodo.onChange(this.windowName + ".resetElements('per')");
		editsMantCurExcCi.onEnter(this.windowName + ".buscar()");
		editsMantCurExcNombre.onEnter(this.windowName + ".buscar()");
		editsMantCurExcApellido.onEnter(this.windowName + ".buscar()");
		editsMantCurExcCi.onChange(this.windowName + ".limpiarFind(1)");
		editsMantCurExcNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsMantCurExcApellido.onChange(this.windowName + ".limpiarFind(3)");
		imgButtonsMantCurExcAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
		imgButtonsMantCurExcModificar.onClick(this.windowName + ".coreUpdate('modificar')");
		imgButtonsMantCurExcEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
		imgButtonsMantCurExcBuscar.onClick(this.windowName + ".buscar()");
		imgButtonsMantCurExcLimpiar.onClick(this.windowName + ".limpiar()");
		imgButtonsMantCurExcSalir.onClick('dialogsMantCurExcepcional.close()');
	},
  
    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxMantCurExcSuborganizacion);
			Tool.rstPwrCmb(powerComboBoxMantCurExcCarrera);
			Tool.rstPwrCmb(powerComboBoxMantCurExcPosicion);
			Tool.rstPwrCmb(powerComboBoxMantCurExcMateria);
    		Tool.rstPwrCmb(powerComboBoxMantCurExcSeccion);
    		powerComboBoxMantCurExcEstPeriodo.setSelectedIndex(0);
    		editsMantCurExcPeriodo.setValue("");
			Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsMantCurExcepcional, powerComboBoxMantCurExcSuborganizacion, 1, 2, powerComboBoxMantCurExcOrganizacion);		
		}
		else if (element == 'suborg') {
			Tool.rstPwrCmb(powerComboBoxMantCurExcCarrera);
			Tool.rstPwrCmb(powerComboBoxMantCurExcPosicion);
			Tool.rstPwrCmb(powerComboBoxMantCurExcMateria);
    		Tool.rstPwrCmb(powerComboBoxMantCurExcSeccion);
    		powerComboBoxMantCurExcEstPeriodo.setSelectedIndex(0);
    		editsMantCurExcPeriodo.setValue("");
			Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsMantCurExcepcional, powerComboBoxMantCurExcCarrera, -1, 3, powerComboBoxMantCurExcSuborganizacion);		
		}
		else if (element == 'carr') {
			Tool.rstPwrCmb(powerComboBoxMantCurExcPosicion);
    		Tool.rstPwrCmb(powerComboBoxMantCurExcMateria);
    		Tool.rstPwrCmb(powerComboBoxMantCurExcSeccion);
    		powerComboBoxMantCurExcEstPeriodo.setSelectedIndex(0);
    		editsMantCurExcPeriodo.setValue("");
    		if (editsMantCurExcPeriodo.valid(dialogsMantCurExcepcional))
    			Tool.getPowerComboData('MantObject', 'getPosicionMateria', dialogsMantCurExcepcional, powerComboBoxMantCurExcPosicion, 0, 1, powerComboBoxMantCurExcCarrera.setModeReturnGetText(2), new MiniDataSet(this.idPeriodo,'int', false), powerComboBoxMantCurExcCarrera.setModeReturnGetText(2), new MiniDataSet(this.idPeriodo,'int', false));
		}
		else if (element == 'pos') {
    		Tool.rstPwrCmb(powerComboBoxMantCurExcMateria);
    		Tool.rstPwrCmb(powerComboBoxMantCurExcSeccion);
			Tool.getPowerComboData('MantObject', 'getMateriaCurExcepcional', dialogsMantCurExcepcional, powerComboBoxMantCurExcMateria, 0, 1, powerComboBoxMantCurExcCarrera.setModeReturnGetText(2), powerComboBoxMantCurExcPosicion, new MiniDataSet(this.idPeriodo,'int', false), powerComboBoxMantCurExcCarrera.setModeReturnGetText(2), powerComboBoxMantCurExcPosicion, new MiniDataSet(this.idPeriodo,'int', false));	  	
		}
		else if (element == 'mat') {
    		Tool.rstPwrCmb(powerComboBoxMantCurExcSeccion);
			Tool.getPowerComboData('MantObject', 'getSeccionCurExcepcional', dialogsMantCurExcepcional, powerComboBoxMantCurExcSeccion, 0, 1, powerComboBoxMantCurExcMateria, new MiniDataSet(this.idPeriodo,'int', false));	  	
		}
		else if (element == 'per') {
            var rlx = xmlStructs.createRecordList("rlx");

        	editsMantCurExcPeriodo.setValue("");
            rlx.add('reg', powerComboBoxMantCurExcEstPeriodo);
    		rlx.add('reg', powerComboBoxMantCurExcCarrera.setModeReturnGetText(5));		
        	Tool.cnnSrv('MantObject', 'getPeriodo', this.windowName + '.loadDataPer()', rlx);
    	}
  		gridsMantCurExcepcional.clean();  		
		imgButtonsMantCurExcAgregar.setEnable();
		imgButtonsMantCurExcModificar.setDisable();
		imgButtonsMantCurExcEliminar.setDisable();
	},

    loadDataPer: function() {
    	this.idPeriodo = json('getPeriodo').data[0];
    	Tool.loadEditData(dialogsMantCurExcepcional, editsMantCurExcPeriodo, 1, json('getPeriodo'));   	
    	this.loadDataPos();    	
    },

    loadDataPos: function() {
    	if (powerComboBoxMantCurExcCarrera.getOption() != "")
    		Tool.getPowerComboData('MantObject', 'getPosicionMateria', dialogsMantCurExcepcional, powerComboBoxMantCurExcPosicion, 0, 1, powerComboBoxMantCurExcCarrera.setModeReturnGetText(2), new MiniDataSet(this.idPeriodo,'int', false), powerComboBoxMantCurExcCarrera.setModeReturnGetText(2), new MiniDataSet(this.idPeriodo,'int', false));    	
    },
    
    limpiarCoreUpdate : function() {
    	editsMantCurExcCi.hideId = -1;
  		editsMantCurExcMotivo.setValue("");  		
  		powerComboBoxMantCurExcPosicion.setSelectedIndex(0);
  		Tool.rstPwrCmb(powerComboBoxMantCurExcMateria);
  		Tool.rstPwrCmb(powerComboBoxMantCurExcSeccion);  		
  		gridsMantCurExcepcional.clean();  		
  		dialogsMantCurExcepcional.setMsg("");
		this.buscar();
  	},

    coreUpdate : function(methodName) {
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == 'eliminar') {
			if (editsMantCurExcCi.valid(dialogsMantCurExcepcional))		
				if (editsMantCurExcNombre.valid(dialogsMantCurExcepcional))
					if (editsMantCurExcApellido.valid(dialogsMantCurExcepcional)) {
						rlx.addInt('reg',this.idCurso);
						rlx.addInt('reg',editsMantCurExcCi.hideId);
						rlx.addInt('reg',this.idCurso);
						rlx.addInt('reg',editsMantCurExcCi.hideId);
						rlx.addInt('reg',this.idPeriodo);
						procesar = true;
					}
		}
		else {
			if (editsMantCurExcCi.valid(dialogsMantCurExcepcional))		
				if (editsMantCurExcNombre.valid(dialogsMantCurExcepcional))
					if (editsMantCurExcApellido.valid(dialogsMantCurExcepcional))
				  		if (powerComboBoxMantCurExcOrganizacion.valid(dialogsMantCurExcepcional))		
			  				if (powerComboBoxMantCurExcSuborganizacion.valid(dialogsMantCurExcepcional))
			  					if (powerComboBoxMantCurExcCarrera.valid(dialogsMantCurExcepcional)) 
			  						if (methodName == 'modificar' || powerComboBoxMantCurExcEstPeriodo.valid(dialogsMantCurExcepcional))
			  							if (methodName == 'modificar' || editsMantCurExcPeriodo.valid(dialogsMantCurExcepcional))
					  						if (methodName == 'modificar' || powerComboBoxMantCurExcPosicion.valid(dialogsMantCurExcepcional))
					  							if (methodName == 'modificar' || powerComboBoxMantCurExcMateria.valid(dialogsMantCurExcepcional))
					  								if (methodName == 'modificar' || powerComboBoxMantCurExcSeccion.valid(dialogsMantCurExcepcional))  					
					  									if (editsMantCurExcMotivo.valid(dialogsMantCurExcepcional)) {
															rlx.add('reg',editsMantCurExcMotivo);
															if (methodName == 'agregar') {
																rlx.add('reg',powerComboBoxMantCurExcSeccion);
																rlx.addInt('reg',editsMantCurExcCi.hideId);
															}
															else {
																rlx.addInt('reg',this.idCurso);
																rlx.addInt('reg',editsMantCurExcCi.hideId);
																rlx.addInt('reg',this.idCurso);
																rlx.addInt('reg',editsMantCurExcCi.hideId);
																rlx.addInt('reg',this.idPeriodo);
															}
															procesar = true;		
														}
		}
		if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()', rlx);
        }
    }
};
