var dialogsAjusCuotas = new Object();
var pcbAjusCuoPeriodo = new Object();
var pcbAjusCuoConcepto = new Object();
var pcbAjusCuoCarrera = new Object();
var radioAjusCuoFecha = new Object();
var radioAjusCuoAlumno = new Object();
var calendarAjusCuofec1 = new Object();
var calendarAjusCuofec2 = new Object();
var editsAjusCuoCi = new Object();
var editsAjusCuoNombre = new Object();
var editsAjusCuoApellido = new Object();
var editsAjusCuoMonto = new Object();
var pcbAjusCuoEstado = new Object();
var editsAjusCuoMes = new Object();
var memoAjusCuoObservaciones = new Object();
var gridsAjusCuentas = new Object();
var imgButtonsAjusCueGuardar = new Object();
var imgButtonsAjusCueEliminar = new Object();
var imgButtonsAjusCueLimpiar = new Object();
var imgButtonsAjusCueBuscar = new Object();
var imgButtonsAjusCueSalir = new Object();
var mwAjusCuotas = new Object();// minWindow

var AjusCuotas = {
    windowName: 'AjusCuotas',
    isCreate: false,
    idCuota: 0,
    idCredito: 0,
    
    show: function() {
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsAjusCuotas.isByClean()) 
            this.limpiar();
        dialogsAjusCuotas.show();
    },
    
    hide: function() {
        dialogsAjusCuotas.hide();
    },
    
    createMWs: function() {
        mwAjusCuotas = desktop.addMinWindow('A.Cuotas', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsAjusCuotas.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsAjusCuotas_Init: function() {
    	dialogsAjusCuotas.setMinimizeXY(0, 0);
        dialogsAjusCuotas.setCenterScreen();
        dialogsAjusCuotas.addSpace(0, 0, 20);
        dialogsAjusCuotas.addLn(1, 1, 1);
		dialogsAjusCuotas.setHeightCell(1,1,10);  
		dialogsAjusCuotas.addObjToDialog(pcbAjusCuoPeriodo, 2, 1,24);
        dialogsAjusCuotas.addObjToDialog(pcbAjusCuoCarrera, 2, 1,24);
        dialogsAjusCuotas.addObjToDialog(pcbAjusCuoConcepto, 2, 1,24);
		dialogsAjusCuotas.adjAllMarginObj(2, 1, 8);
		dialogsAjusCuotas.addLn(3, 1, 1);
		dialogsAjusCuotas.setHeightCell(3,1,12); 
		var c1 = container.create("c1",'Tipo de Ajuste', 2);
		c1.setDimension(742,88);
		c1.setMarginLeftBarTitle(20);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#1e1e1e');
		c1.addObject(radioAjusCuoFecha, 30,90);
		c1.addObject(radioAjusCuoAlumno, 30,123);
		c1.addObject(calendarAjusCuofec1.getEditCalendar(), 120,90);
    	c1.addObject(calendarAjusCuofec2.getEditCalendar(), 291,90);
    	c1.addObject(editsAjusCuoCi, 120,123);
    	c1.addObject(editsAjusCuoNombre, 290,123);
    	c1.addObject(editsAjusCuoApellido, 530,123);
    	dialogsAjusCuotas.addObjToDialog(c1, 4, 1);
    	dialogsAjusCuotas.addLn(5, 1, 1);
		dialogsAjusCuotas.setHeightCell(5,1,10);
    	dialogsAjusCuotas.addObjToDialog(editsAjusCuoMonto, 6, 1,24);
        dialogsAjusCuotas.addObjToDialog(pcbAjusCuoEstado, 6, 1,24);
        dialogsAjusCuotas.addObjToDialog(editsAjusCuoMes, 6, 1,24);
		dialogsAjusCuotas.adjAllMarginObj(6, 1, 8);
		dialogsAjusCuotas.addObject(memoAjusCuoObservaciones, 20, 203);
		memoAjusCuoObservaciones.style.zIndex = 1000;
		dialogsAjusCuotas.addObject(gridsAjusCuentas.getObject(), 20,260);
		dialogsAjusCuotas.addLn(7, 1, 1);
		dialogsAjusCuotas.setHeightCell(7,1,357);
        dialogsAjusCuotas.addObjToDialog(imgButtonsAjusCueGuardar, 8, 1);
        dialogsAjusCuotas.addObjToDialog(imgButtonsAjusCueEliminar, 8, 1);
        dialogsAjusCuotas.addObjToDialog(imgButtonsAjusCueLimpiar, 8, 1);
        dialogsAjusCuotas.addObjToDialog(imgButtonsAjusCueBuscar, 8, 1);
        dialogsAjusCuotas.addObjToDialog(imgButtonsAjusCueSalir, 8, 1);
        dialogsAjusCuotas.adjAllMarginObj(8, 1, 24);
        dialogsAjusCuotas.leftMarginObj(8,1,0,95);
    },
    
    gridsAjusCuentas_Init: function() {
        gridsAjusCuentas.setFixColRow(false, true);
        gridsAjusCuentas.addTitleVectorX(['Cedula','Carrera','Concepto','Monto','Estado','Mes','Fecha Vencimiento','Observación','idEdoFinan','idCuota','idConcepto','idCredito','idCarrera']);
        gridsAjusCuentas.showData();
        gridsAjusCuentas.setSizeCol(1, 85);
        gridsAjusCuentas.setSizeCol(2, 120);
        gridsAjusCuentas.setSizeCol(3, 201);
        gridsAjusCuentas.setSizeCol(4, 50);
        gridsAjusCuentas.setSizeCol(5, 80);
        gridsAjusCuentas.setSizeCol(6, 80);
        gridsAjusCuentas.setSizeCol(7, 120);
        gridsAjusCuentas.setSizeCol(8, 0);
        gridsAjusCuentas.setSizeCol(9, 0);
        gridsAjusCuentas.setSizeCol(10, 0);
        gridsAjusCuentas.setSizeCol(11, 0);
        gridsAjusCuentas.setSizeCol(12, 0);
        gridsAjusCuentas.setSizeCol(13, 0);
        gridsAjusCuentas.hideCol(8);
        gridsAjusCuentas.hideCol(9);
        gridsAjusCuentas.hideCol(10);
        gridsAjusCuentas.hideCol(11);
        gridsAjusCuentas.hideCol(12);
        gridsAjusCuentas.hideCol(13);
    },
    
    create: function() {
        dialogsAjusCuotas = dialogs.create('dialogsAjusCuotas', 0, 0, 785, 562, 'AJUSTE DE CUOTAS');
        dialogsAjusCuotas.setAdjY(20);
        pcbAjusCuoPeriodo = powerComboBox.create('pcbAjusCuoPeriodo', 'pcbAjusCuoPeriodo', 'Periodo (+):', 1, 113);
        pcbAjusCuoPeriodo.setValidEmpty();
        pcbAjusCuoPeriodo.addEmptyOption();
        pcbAjusCuoPeriodo.enableReadOnlyEditor();
        pcbAjusCuoCarrera = powerComboBox.create('pcbAjusCuoCarrera', 'pcbAjusCuoCarrera', 'Carrera (*):', 1, 80);
        pcbAjusCuoCarrera.setValidEmpty();
        pcbAjusCuoCarrera.addEmptyOption();
        pcbAjusCuoCarrera.enableReadOnlyEditor();
        pcbAjusCuoCarrera.setFieldFind(true);
        pcbAjusCuoConcepto = powerComboBox.create('pcbAjusCuoConcepto', 'pcbAjusCuoConcepto', 'Concepto (*):', 1, 80);
        pcbAjusCuoConcepto.setValidEmpty();
        pcbAjusCuoConcepto.addEmptyOption();
        pcbAjusCuoConcepto.enableReadOnlyEditor();
        pcbAjusCuoConcepto.setFieldFind(true);
		radioAjusCuoFecha = radio.create('radioAjusCuoFecha','Fecha',false,'gp1');        
        radioAjusCuoAlumno = radio.create('radioAjusCuoAlumno','Estudiante',false,'gp1');  
        calendarAjusCuofec1 = calendars.create('calendarAjusCuofec1');      
		calendarAjusCuofec1.setWidthEditCalendar(70);
    	calendarAjusCuofec1.setCaption('Desde:',1,69);
    	calendarAjusCuofec1.sendToFrom(100);
      	calendarAjusCuofec1.setValidEmpty();
      	calendarAjusCuofec1.setFieldFind(true);
      	calendarAjusCuofec2 = calendars.create('calendarAjusCuofec2');      
		calendarAjusCuofec2.setWidthEditCalendar(70);
    	calendarAjusCuofec2.setCaption('Hasta:',1,80);
    	calendarAjusCuofec2.sendToFrom(100);
      	calendarAjusCuofec2.setValidEmpty();
      	calendarAjusCuofec2.setFieldFind(true);
      	calendarAjusCuofec1.setValidGreaterThan(calendarAjusCuofec2);
      	editsAjusCuoCi = edits.create('editsAjusCuoCi', 'editsAjusCuoCi', 'C.i. (*):', 1, 69, 'normal');
    	editsAjusCuoCi.setSizeEdit(92);
        editsAjusCuoCi.setValidInteger();
        editsAjusCuoCi.setFieldFind(true);
        editsAjusCuoNombre = edits.create('editsAjusCuoNombre', 'editsMantCuoPorcentaje', 'Nombre (*):', 1, 80, 'normal');
    	editsAjusCuoNombre.setSizeEdit(149);
        editsAjusCuoNombre.setValidEmpty();
        editsAjusCuoNombre.setFieldFind(true);
		editsAjusCuoApellido = edits.create('editsAjusCuoApellido', 'editsAjusCuoApellido', 'Apellido (*):', 1, 80, 'normal');
    	editsAjusCuoApellido.setSizeEdit(149);
        editsAjusCuoApellido.setValidEmpty();
        editsAjusCuoApellido.setFieldFind(true);
		editsAjusCuoMonto = edits.create('editsAjusCuoMonto', 'editsAjusCuoMonto', 'Monto:', 1, 113, 'normal');
    	editsAjusCuoMonto.setSizeEdit(148);
        editsAjusCuoMonto.setValidReal();
		pcbAjusCuoEstado = powerComboBox.create('pcbAjusCuoEstado', 'pcbAjusCuoEstado', 'Estado (*):', 1, 80);
        pcbAjusCuoEstado.setValidEmpty();
        pcbAjusCuoEstado.addEmptyOption();
        pcbAjusCuoEstado.enableReadOnlyEditor();
        pcbAjusCuoEstado.setFieldFind(true);
		editsAjusCuoMes = edits.create('editsAjusCuoMes', 'editsAjusCuoMes', 'Mes :', 1, 82, 'normal');
    	editsAjusCuoMes.setSizeEdit(149);
    	editsAjusCuoMes.readOnly(true);
		memoAjusCuoObservaciones = memo.create('memoAjusCuoObservaciones','Observación:', 1, 0, 112);
		memoAjusCuoObservaciones.vAlignCaption('middle');
		memoAjusCuoObservaciones.setDimension(628, 40);
		memoAjusCuoObservaciones.setMaxLength(300);
		memoAjusCuoObservaciones.setValidEmpty(); 
        gridsAjusCuentas = grids.create('gridsAjusCuentas', 12, 13);
        imgButtonsAjusCueGuardar = imgButtons.create('imgButtonsAjusCueGuardar', 'Guardar', 'ok.png');
        imgButtonsAjusCueEliminar = imgButtons.create('imgButtonsAjusCueEliminar', 'Eliminar', 'eliminar.jpg');
        imgButtonsAjusCueLimpiar = imgButtons.create('imgButtonsAjusCueLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsAjusCueBuscar = imgButtons.create('imgButtonsAjusCueBuscar', 'Buscar', 'icono_buscar.png');
        imgButtonsAjusCueSalir = imgButtons.create('imgButtonsAjusCueSalir', 'Salir', 'salir.png');
        imgButtonsAjusCueGuardar.setDimension(90, 22);
        imgButtonsAjusCueEliminar.setDimension(90, 22);
        imgButtonsAjusCueLimpiar.setDimension(90, 22);
        imgButtonsAjusCueBuscar.setDimension(90, 22);
        imgButtonsAjusCueSalir.setDimension(90, 22);
    },
    
    init: function() {
        this.create();
        this.setEvents();
        this.dialogsAjusCuotas_Init();
        this.gridsAjusCuentas_Init();
        this.createMWs();
    },

   	buscar : function() {
  		if (pcbAjusCuoPeriodo.valid(dialogsAjusCuotas)) {
  	  		this.idCuota = 0;
  	  		this.idCredito = 0;
  			if (radioAjusCuoAlumno.getChecked()) {
		    	if (editsAjusCuoCi.getValue() != '' && editsAjusCuoNombre.getValue() != '' && editsAjusCuoApellido.getValue() != '') {
		        	editsAjusCuoMonto.setValue("");
		        	editsAjusCuoMes.setValue("");
		        	memoAjusCuoObservaciones.setText("");
		    		gridsAjusCuentas.clean();
		        	imgButtonsAjusCueGuardar.setEnable();
		    		imgButtonsAjusCueEliminar.setEnable();
		    		Tool.getGridData('MantObject', 'getAjusteCuota', dialogsAjusCuotas, gridsAjusCuentas, false, new MiniDataSet(editsAjusCuoCi.hideId, 'int', true), new MiniDataSet(editsAjusCuoCi.hideId, 'int', true), pcbAjusCuoConcepto, pcbAjusCuoConcepto, pcbAjusCuoPeriodo, calendarAjusCuofec1, calendarAjusCuofec2, calendarAjusCuofec2, calendarAjusCuofec2, pcbAjusCuoEstado, pcbAjusCuoEstado, pcbAjusCuoCarrera, pcbAjusCuoCarrera);
				}
				else if (editsAjusCuoCi.getValue() != '' || editsAjusCuoNombre.getValue() != '' || editsAjusCuoApellido.getValue() != '') {
		        	ResuBusqueda.setObjectExtFnc(editsAjusCuoCi, editsAjusCuoNombre, editsAjusCuoApellido, 'AjusCuotas.buscar()');
					Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsAjusCuoCi, editsAjusCuoCi, editsAjusCuoNombre, editsAjusCuoNombre, editsAjusCuoApellido, editsAjusCuoApellido);
				}
				else {
					Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
				}
  			}
  			else if (radioAjusCuoFecha.getChecked()) {
  				if (pcbAjusCuoConcepto.valid(dialogsAjusCuotas))
  					if (calendarAjusCuofec1.valid(dialogsAjusCuotas))
  	  					if (calendarAjusCuofec2.valid(dialogsAjusCuotas)) {
	  	  		        	editsAjusCuoMonto.setValue("");
	  			        	editsAjusCuoMes.setValue("");
	  			        	memoAjusCuoObservaciones.setText("");
  	  	  		    		gridsAjusCuentas.clean();
  	  	  		    		imgButtonsAjusCueGuardar.setEnable();
  	  						imgButtonsAjusCueEliminar.setDisable();
  	  	  		    		Tool.getGridData('MantObject', 'getAjusteCuota', dialogsAjusCuotas, gridsAjusCuentas, false, new MiniDataSet(editsAjusCuoCi.hideId, 'int', true), new MiniDataSet(editsAjusCuoCi.hideId, 'int', true), pcbAjusCuoConcepto, pcbAjusCuoConcepto, pcbAjusCuoPeriodo, calendarAjusCuofec1, calendarAjusCuofec2, calendarAjusCuofec2, calendarAjusCuofec2, pcbAjusCuoEstado, pcbAjusCuoEstado, pcbAjusCuoCarrera, pcbAjusCuoCarrera);
  	  					}
  			}
  			else 
				Alert.show('Debe elegir un tipo de ajuste por Fecha o Estudiante.', 'SISTEMA', Alert.TYPE_INFO);
  		}
   	},
    
    loadDataPeridoConcepto: function() {
  		Tool.loadPowerComboData(dialogsAjusCuotas, pcbAjusCuoPeriodo, 0, 1, json('getPeriodoTodo'));
  		Tool.loadPowerComboData(dialogsAjusCuotas, pcbAjusCuoCarrera, 0, 1, json('getTodaCarrera'));
  		Tool.loadPowerComboData(dialogsAjusCuotas, pcbAjusCuoConcepto, 0, 1, json('getConceptoFinanciado'));
  		Tool.loadPowerComboData(dialogsAjusCuotas, pcbAjusCuoEstado, 0, 1, json('getEdoFinanciado'));
    },
    
    setData: function() {
        if (gridsAjusCuentas.getDataCell(1) != "") {
        	if (gridsAjusCuentas.getDataCell(5) == 'PENDIENTE' || gridsAjusCuentas.getDataCell(5) == 'EXONERADA') {
	        	editsAjusCuoMonto.setValue(gridsAjusCuentas.getDataCell(4));
	        	pcbAjusCuoConcepto.findOption(gridsAjusCuentas.getDataCell(11));
	        	pcbAjusCuoEstado.findOption(gridsAjusCuentas.getDataCell(9));
	        	editsAjusCuoMes.setValue(gridsAjusCuentas.getDataCell(6));
	        	memoAjusCuoObservaciones.setText(gridsAjusCuentas.getDataCell(8));
	      		this.idCuota = gridsAjusCuentas.getDataCell(10);
	      		this.idCredito = gridsAjusCuentas.getDataCell(12);
	        	pcbAjusCuoCarrera.findOption(gridsAjusCuentas.getDataCell(13));
	        	imgButtonsAjusCueEliminar.setEnable();
        	}
			else
				Alert.show('Debe elegir un estado PENDIENTE y/o una cuota con estado diferente a CANCELADA o ABONO.', 'SISTEMA', Alert.TYPE_INFO);
        }
    },

	limpiarFind : function(ix) {
		editsAjusCuoCi.hideId = -1;
		gridsAjusCuentas.clean();
		dialogsAjusCuotas.setMsg("");

  		switch (ix) {
		case 1: 
			editsAjusCuoNombre.setValue("");
			editsAjusCuoApellido.setValue("");  		
			break;
		case 2: 
			editsAjusCuoCi.setValue("");
			editsAjusCuoApellido.setValue("");  		
			break;
		default:
			editsAjusCuoCi.setValue("");
			editsAjusCuoNombre.setValue("");
			break;
		} 
  	},

    switchRadio: function(modo) {
    	editsAjusCuoCi.hideId = -1;
  		this.idCuota = 0;
  		this.idCredito = 0;
    	calendarAjusCuofec1.clear();
    	calendarAjusCuofec2.clear();
    	editsAjusCuoCi.setValue("");
        editsAjusCuoNombre.setValue("");
    	editsAjusCuoApellido.setValue("");
    	editsAjusCuoMonto.setValue("");
    	pcbAjusCuoEstado.setSelectedIndex(1);
    	editsAjusCuoMes.setValue("");
    	memoAjusCuoObservaciones.setText("");
    	gridsAjusCuentas.clean();
    	
    	if (modo == "fec") {
    		calendarAjusCuofec1.setEnable();
        	calendarAjusCuofec2.setEnable();
        	editsAjusCuoCi.readOnly(true);
        	editsAjusCuoNombre.readOnly(true);
        	editsAjusCuoApellido.readOnly(true);
        	imgButtonsAjusCueEliminar.setDisable();
    	}
    	else if (modo == "alu") {
    		pcbAjusCuoConcepto.setSelectedIndex(0);
        	calendarAjusCuofec1.setDisable();
        	calendarAjusCuofec2.setDisable();
        	editsAjusCuoCi.readOnly(false);
        	editsAjusCuoNombre.readOnly(false);
        	editsAjusCuoApellido.readOnly(false);
    	}
    	else {
    		radioAjusCuoFecha.unChecked();
    		radioAjusCuoAlumno.unChecked();
        	calendarAjusCuofec1.setDisable();
        	calendarAjusCuofec2.setDisable();
        	editsAjusCuoCi.readOnly(true);
        	editsAjusCuoNombre.readOnly(true);
        	editsAjusCuoApellido.readOnly(true);
    	}
    },
    
    setEvents: function() {
		radioAjusCuoFecha.onMouseDown(this.windowName + ".switchRadio('fec')");
		radioAjusCuoAlumno.onMouseDown(this.windowName + ".switchRadio('alu')");
		editsAjusCuoCi.onEnter(this.windowName + ".buscar()");
		editsAjusCuoCi.onChange(this.windowName + ".limpiarFind(1)");
		editsAjusCuoCi.onClick(this.windowName + ".limpiarFind(1)");
		editsAjusCuoNombre.onEnter(this.windowName + ".buscar()");
		editsAjusCuoNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsAjusCuoNombre.onClick(this.windowName + ".limpiarFind(2)");
		editsAjusCuoApellido.onEnter(this.windowName + ".buscar()");
		editsAjusCuoApellido.onChange(this.windowName + ".limpiarFind(3)");
		editsAjusCuoApellido.onClick(this.windowName + ".limpiarFind(3)");
		gridsAjusCuentas.onClickCells(this.windowName + ".setData()")
        imgButtonsAjusCueGuardar.onClick(this.windowName + ".coreUpdate('guardar')");
        imgButtonsAjusCueEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
        imgButtonsAjusCueLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsAjusCueBuscar.onClick(this.windowName + ".buscar()");
        imgButtonsAjusCueSalir.onClick('dialogsAjusCuotas.close()');
    },
    
  	limpiar: function() {
  		editsAjusCuoCi.hideId = -1;
  		this.idCuota = 0;
  		this.idCredito = 0;
    	pcbAjusCuoPeriodo.setSelectedIndex(0);
    	pcbAjusCuoCarrera.setSelectedIndex(0);
    	pcbAjusCuoConcepto.setSelectedIndex(0);
    	this.switchRadio('');
    	editsAjusCuoMonto.setValue("");
    	pcbAjusCuoEstado.setSelectedIndex(1);
    	editsAjusCuoMes.setValue("");
    	memoAjusCuoObservaciones.setText("");
    	gridsAjusCuentas.clean();
    	imgButtonsAjusCueGuardar.setDisable();
    	imgButtonsAjusCueEliminar.setDisable();
        dialogsAjusCuotas.setMsg("");
		Tool.cnnSrv("MantObject", "getPeriodoConcepto", this.windowName + ".loadDataPeridoConcepto()");
    },

	limpiarCoreUpdate : function(methodName) {
    	editsAjusCuoMonto.setValue("");
    	pcbAjusCuoEstado.setSelectedIndex(1);
    	editsAjusCuoMes.setValue("");
    	memoAjusCuoObservaciones.setText("");
    	imgButtonsAjusCueGuardar.setDisable();
    	imgButtonsAjusCueEliminar.setDisable();
		if (methodName == 'eliminar' && (this.idCuota == 0 || gridsAjusCuentas.getTotalRecord() == 1)) {
	  		this.idCuota = 0;
	  		this.idCredito = 0;
	    	gridsAjusCuentas.clean();
			dlgWait.hide();
		}			
		else {
	  		this.idCuota = 0;//SE DUPLICO POR COMUNICACION ASINCRONA AL METODO: this.buscar();
	  		this.idCredito = 0;
			this.buscar();
		}
	},
    
    coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");
		auxName = "";
		
  		if (pcbAjusCuoPeriodo.valid(dialogsAjusCuotas))		
			if (pcbAjusCuoConcepto.valid(dialogsAjusCuotas))
				if (methodName == 'eliminar' || editsAjusCuoMonto.valid(dialogsAjusCuotas))
					if (pcbAjusCuoEstado.valid(dialogsAjusCuotas))
						if (methodName == 'eliminar' || memoAjusCuoObservaciones.valid(dialogsAjusCuotas))
							if (pcbAjusCuoEstado.getOption() == 'PENDIENTE' || pcbAjusCuoEstado.getOption() == 'EXONERADA') {
								if (methodName == 'guardar') {
						  			if (radioAjusCuoFecha.getChecked() && this.idCuota == 0) {
						  				if (pcbAjusCuoConcepto.valid(dialogsAjusCuotas))
						  					if (calendarAjusCuofec1.valid(dialogsAjusCuotas))
						  	  					if (calendarAjusCuofec2.valid(dialogsAjusCuotas)) {
													rlx.add('reg', editsAjusCuoMonto);
													rlx.add('reg', pcbAjusCuoEstado);
													rlx.add('reg', memoAjusCuoObservaciones);
													rlx.add('reg', calendarAjusCuofec1);
													rlx.add('reg', calendarAjusCuofec2);
													rlx.add('reg', pcbAjusCuoConcepto);
													rlx.add('reg', pcbAjusCuoPeriodo);
													rlx.add('reg', pcbAjusCuoEstado);
													rlx.add('reg', pcbAjusCuoCarrera);
													rlx.add('reg', pcbAjusCuoCarrera);
													auxName = "Lote";
						  	  					}
					  				}
					  				else {
										rlx.add('reg', editsAjusCuoMonto);
										rlx.add('reg', pcbAjusCuoEstado);
										rlx.add('reg', memoAjusCuoObservaciones);
										rlx.addInt('reg', this.idCuota);
										rlx.addInt('reg', editsAjusCuoCi.hideId);
										rlx.add('reg', pcbAjusCuoConcepto);
										rlx.add('reg', pcbAjusCuoCarrera);
										rlx.add('reg', pcbAjusCuoPeriodo);
					  	  			}
								}
								else if (methodName == 'eliminar') {
									rlx.addInt('reg', this.idCuota);
									rlx.addInt('reg', this.idCredito);
									rlx.addInt('reg', editsAjusCuoCi.hideId);
									rlx.add('reg',pcbAjusCuoPeriodo);
									rlx.add('reg', pcbAjusCuoConcepto);
								}
								Tool.cnnSrv("MantObject", methodName + "AjusteCuota" + auxName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
							}
							else
								Alert.show('Debe elegir un estado PENDIENTE y/o una cuota con estado diferente a CANCELADA o ABONO.', 'SISTEMA', Alert.TYPE_INFO);
    }
};
