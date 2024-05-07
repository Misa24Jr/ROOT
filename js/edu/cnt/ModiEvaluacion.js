var dialogsModiEvaluacion = new Object();
var editsModiEvaCi = new Object();
var editsModiEvaNombre = new Object();
var editsModiEvaApellido = new Object();
var memoModiEvaObservaciones = new Object();
var pcbModiEvaOrg = new Object();
var pcbModiEvaSubOrg = new Object();
var pcbModiEvaCarrera = new Object();
var pcbModiEvaPeriodo = new Object();
var pcbModiEvaMateria = new Object();
var pcbModiEvaSeccion = new Object();
var pcbModiEvaTipEvaluacion = new Object();
var calendarsModiEvaFecInicio = new Object();
var calendarsModiEvaFecFin = new Object();
var customGridModiEvaluacion = new Object();
var imgButtonsModiEvaAgregar = new Object();
var imgButtonsModiEvaModificar = new Object();
var imgButtonsModiEvaEliminar = new Object();
var imgButtonsModiEvaLimpiar = new Object();
var imgButtonsModiEvaReporte = new Object();
var imgButtonsModiEvaBuscar = new Object();
var imgButtonsModiEvaSalir = new Object();
var mwModiEvaluacion = new Object();// minWindow

var ModiEvaluacion = {
	windowName : 'ModiEvaluacion',
	isCreate : false,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsModiEvaluacion.isByClean())
			this.limpiar('lmp');			
		dialogsModiEvaluacion.show();
	},
	
	hide : function(){
		dialogsModiEvaluacion.hide();
	},
	
	createMWs : function(){
		mwModiEvaluacion = desktop.addMinWindow('Modificar Evaluación', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsModiEvaluacion.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsModiEvaluacion_Init : function(){
        dialogsModiEvaluacion.setMinimizeXY(0,0);
        dialogsModiEvaluacion.setCenterScreen();
        dialogsModiEvaluacion.addSpace(0,0,20);
        dialogsModiEvaluacion.addLn(1,1,1);
        dialogsModiEvaluacion.setHeightCell(1,1,20); 
        var c1 = container.create("c1",'Profesor Autorizado',4);
		c1.setDimension(798,60);
		c1.setMarginLeftBarTitle(335);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#000000');
		c1.setObject(editsModiEvaCi, 11, 7, 5, 0);
		editsModiEvaCi.setSizeEdit(149);
		c1.setObject(editsModiEvaNombre, 14, 5, 7, 0);
		editsModiEvaNombre.setSizeEdit(149);
		c1.setObject(editsModiEvaApellido, 14, 5, 2, 0);
		editsModiEvaApellido.setSizeEdit(149);
		dialogsModiEvaluacion.addObjToDialog(c1, 2, 1);
		dialogsModiEvaluacion.addLn(3,1,1);
		dialogsModiEvaluacion.setHeightCell(3,1,77); 
		dialogsModiEvaluacion.addObject(memoModiEvaObservaciones,20,117);
		memoModiEvaObservaciones.vAlignCaption('middle');
		memoModiEvaObservaciones.setDimension(695, 60);
		dialogsModiEvaluacion.addLn(5, 1, 1);
		dialogsModiEvaluacion.setHeightCell(5,1,8);
		dialogsModiEvaluacion.addObjToDialog(pcbModiEvaOrg,6,1,24);
		dialogsModiEvaluacion.addObjToDialog(pcbModiEvaSubOrg,6,1,24);
		dialogsModiEvaluacion.addObjToDialog(pcbModiEvaCarrera,6,1,24);
		dialogsModiEvaluacion.adjAllMarginObj(6,1,22);
		dialogsModiEvaluacion.addObjToDialog(pcbModiEvaPeriodo,7,1,24);
		dialogsModiEvaluacion.addObjToDialog(pcbModiEvaMateria,7,1,24);
		dialogsModiEvaluacion.addObjToDialog(pcbModiEvaSeccion,7,1,24);
		dialogsModiEvaluacion.adjAllMarginObj(7,1,22);
		dialogsModiEvaluacion.addObjToDialog(pcbModiEvaTipEvaluacion,8,1,24);
		dialogsModiEvaluacion.addObjToDialog(calendarsModiEvaFecInicio.getEditCalendar(),8,1,24);
        calendarsModiEvaFecInicio.setWidthEditCalendar(127);
        calendarsModiEvaFecInicio.setCaption('Fecha Inicio (*):',1,124);
        calendarsModiEvaFecInicio.sendToFrom(100);
        dialogsModiEvaluacion.addObjToDialog(calendarsModiEvaFecFin.getEditCalendar(),8,1,24);
        calendarsModiEvaFecFin.setWidthEditCalendar(127);
        calendarsModiEvaFecFin.setCaption('Fecha Fin (*):',1,78);
        calendarsModiEvaFecFin.sendToFrom(100);
        dialogsModiEvaluacion.adjAllMarginObj(8,1,22);  
		dialogsModiEvaluacion.addLn(9, 1, 1);
		dialogsModiEvaluacion.setHeightCell(9,1,10);
		dialogsModiEvaluacion.addObjToDialog(customGridModiEvaluacion,10,1);
		//IMGBUTTONS//
        dialogsModiEvaluacion.addObjToDialog(imgButtonsModiEvaAgregar,12,1,49);
        imgButtonsModiEvaAgregar.setDimension(90,22);
        dialogsModiEvaluacion.addObjToDialog(imgButtonsModiEvaModificar,12,1,49);
        imgButtonsModiEvaModificar.setDimension(90,22);
        dialogsModiEvaluacion.addObjToDialog(imgButtonsModiEvaEliminar,12,1,49);
        imgButtonsModiEvaEliminar.setDimension(90,22);
		dialogsModiEvaluacion.addObjToDialog(imgButtonsModiEvaLimpiar,12,1,49);
        imgButtonsModiEvaLimpiar.setDimension(90,22);
		dialogsModiEvaluacion.addObjToDialog(imgButtonsModiEvaReporte,12,1,49);
        imgButtonsModiEvaReporte.setDimension(90,22);
	  	dialogsModiEvaluacion.addObjToDialog(imgButtonsModiEvaBuscar,12,1,49); 
		imgButtonsModiEvaBuscar.setDimension(90,22);	
        dialogsModiEvaluacion.addObjToDialog(imgButtonsModiEvaSalir,12,1,49);
        imgButtonsModiEvaSalir.setDimension(90,22);
        dialogsModiEvaluacion.adjAllMarginObj(12,1,20);
        dialogsModiEvaluacion.leftMarginObj(12,1,0,17);
	},

	gridsModiEvaluacion_Init: function(){
		customGridModiEvaluacion.loadColumnTypeStruct(null,[customGrid.TYPE_COLUMN_CHECK, 
		                                                    customGrid.TYPE_COLUMN_EDIT, 
		                                                    customGrid.TYPE_COLUMN_EDIT, 
		                                                    customGrid.TYPE_COLUMN_EDIT, 
		                                                    customGrid.TYPE_COLUMN_EDIT,
		                                                    customGrid.TYPE_COLUMN_EDIT,
		                                                    customGrid.TYPE_COLUMN_EDIT], [31,0,104,0,325,0,325]);
		customGridModiEvaluacion.createTitleObj(0,'input','checkbox');
		customGridModiEvaluacion.setMarginObjTitle(0,2);
		customGridModiEvaluacion.alignColumnTitle(0,'center');
		customGridModiEvaluacion.setSelectedLnMode(0);
		customGridModiEvaluacion.addTitleVectorX(['','idEval','C.i.','idPlanEval','Nombre','idPers','Nota']);
        customGridModiEvaluacion.hideCol(1);
        customGridModiEvaluacion.hideCol(3);
        customGridModiEvaluacion.hideCol(5);
        customGridModiEvaluacion.setReadOnlyCol(2, true);
        customGridModiEvaluacion.setReadOnlyCol(4, true);
        customGridModiEvaluacion.setReadOnlyCol(6, true);
        customGridModiEvaluacion.activeCheckOnOff(0);
	},
  
	create : function(){
		dialogsModiEvaluacion = dialogs.create('dialogsModiEvaluacion',0,0,839,574,'AUTORIZAR CAMBIO DE EVALUACION');  
		dialogsModiEvaluacion.setAdjY(20);
		customGridModiEvaluacion = customGrid.create('customGridModiEvaluacion','Alumno(s)',226,800,20,10);
		pcbModiEvaOrg = powerComboBox.create('pcbModiEvaOrg','pcbModiEvaOrg','Organización (+):',1,103);    
		pcbModiEvaOrg.addEmptyOption();
		pcbModiEvaOrg.setValidEmpty();
		pcbModiEvaOrg.enableReadOnlyEditor();
		pcbModiEvaSubOrg = powerComboBox.create('pcbModiEvaSubOrg','pcbModiEvaSubOrg','SubOrganización (^):',1,124); 
		pcbModiEvaSubOrg.addEmptyOption();
		pcbModiEvaSubOrg.setValidEmpty();
		pcbModiEvaSubOrg.enableReadOnlyEditor();
		pcbModiEvaCarrera = powerComboBox.create('pcbModiEvaCarrera','pcbModiEvaCarrera','Carrera (^):',1,78); 
		pcbModiEvaCarrera.addEmptyOption();
		pcbModiEvaCarrera.setValidEmpty();
		pcbModiEvaCarrera.enableReadOnlyEditor();
		pcbModiEvaPeriodo = powerComboBox.create('pcbModiEvaPeriodo','pcbModiEvaPeriodo','Periodo (^):',1,103);    
		pcbModiEvaPeriodo.addEmptyOption();
		pcbModiEvaPeriodo.setValidEmpty();
		pcbModiEvaPeriodo.enableReadOnlyEditor();
		pcbModiEvaMateria = powerComboBox.create('pcbModiEvaMateria','pcbModiEvaMateria','Materia (^):',1,124); 
		pcbModiEvaMateria.addEmptyOption();
		pcbModiEvaMateria.setValidEmpty();
		pcbModiEvaMateria.setDataType('string');
		pcbModiEvaMateria.enableReadOnlyEditor();
		pcbModiEvaSeccion = powerComboBox.create('pcbModiEvaSeccion','pcbModiEvaSeccion','Sección (^):',1,78);
		pcbModiEvaSeccion.addEmptyOption();
		pcbModiEvaSeccion.setValidEmpty();
		pcbModiEvaSeccion.enableReadOnlyEditor();
		pcbModiEvaTipEvaluacion = powerComboBox.create('pcbModiEvaTipEvaluacion', 'pcbModiEvaTipEvaluacion', 'T. Evaluación (^):', 1,103);
		pcbModiEvaTipEvaluacion.addEmptyOption();
		pcbModiEvaTipEvaluacion.setValidEmpty();
		pcbModiEvaTipEvaluacion.enableReadOnlyEditor();
		pcbModiEvaTipEvaluacion.enableOnChangeToEmptyOption();
		editsModiEvaCi = edits.create('editsModiEvaCi','editsModiEvaCi','C.i. (*):',1,91,'normal');      
		editsModiEvaCi.setValidEmpty();
		editsModiEvaCi.setFieldFind(true);
		editsModiEvaCi.setValidInteger();
		editsModiEvaNombre = edits.create('editsModiEvaNombre','editsModiEvaNombre','Nombre (*):',1,126,'normal');      
		editsModiEvaNombre.setValidEmpty();
		editsModiEvaNombre.setFieldFind(true);
		editsModiEvaApellido = edits.create('editsModiEvaApellido','editsModiEvaApellido','Apellido (*)',1,78,'normal');      
		editsModiEvaApellido.setValidEmpty();
		editsModiEvaApellido.setFieldFind(true);
		memoModiEvaObservaciones = memo.create('memoModiEvaObservaciones', 'Observación:', 1,1,100);
		memoModiEvaObservaciones.setValidEmpty();
		memoModiEvaObservaciones.setMaxLength(4000);
		calendarsModiEvaFecInicio = calendars.create('calendarsModiEvaFecInicio');
		calendarsModiEvaFecInicio.setValidEmpty();
		calendarsModiEvaFecFin = calendars.create('calendarsModiEvaFecFin');
		calendarsModiEvaFecFin.setValidEmpty();
		imgButtonsModiEvaAgregar = imgButtons.create('imgButtonsModiEvaAgregar','Agregar','ok.png');
		imgButtonsModiEvaModificar = imgButtons.create('imgButtonsModiEvaModificar','Modificar','icono_modificar.png');
		imgButtonsModiEvaModificar.setDisable();
		imgButtonsModiEvaEliminar = imgButtons.create('imgButtonsModiEvaEliminar','Eliminar','eliminar.png');
		imgButtonsModiEvaEliminar.setDisable();
		imgButtonsModiEvaLimpiar = imgButtons.create('imgButtonsModiEvaLimpiar','Limpiar','limpiar.png');
		imgButtonsModiEvaReporte = imgButtons.create('imgButtonsModiEvaReporte','Reporte','print.png');
		imgButtonsModiEvaBuscar = imgButtons.create('imgButtonsModiEvaBuscar','Buscar','icono_buscar.png');
		imgButtonsModiEvaSalir = imgButtons.create('imgButtonsModiEvaSalir','Salir','salir.png');
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsModiEvaluacion_Init();
		this.gridsModiEvaluacion_Init();
		this.createMWs();
	},
  
  	limpiarFind : function(ix) {
  		editsModiEvaCi.hideId = -1;
  		
  		switch (ix) {
		case 1: 
	  		editsModiEvaNombre.setValue("");
	  		editsModiEvaApellido.setValue("");  		
			break;
		case 2: 
	  		editsModiEvaCi.setValue("");
	  		editsModiEvaApellido.setValue("");  		
			break;
		default:
	  		editsModiEvaCi.setValue("");
  			editsModiEvaNombre.setValue("");
			break;
		} 
  	},
  	
  	limpiar : function(tipo) {
  		editsModiEvaCi.hideId = -1;
  		editsModiEvaCi.setValue("");
  		editsModiEvaNombre.setValue("");
  		editsModiEvaApellido.setValue("");
  		memoModiEvaObservaciones.setValue("");
  		pcbModiEvaOrg.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbModiEvaSubOrg);
  		Tool.rstPwrCmb(pcbModiEvaCarrera);
  		Tool.rstPwrCmb(pcbModiEvaPeriodo);
  		Tool.rstPwrCmb(pcbModiEvaMateria);
		Tool.rstPwrCmb(pcbModiEvaSeccion);
		Tool.rstPwrCmb(pcbModiEvaTipEvaluacion);
		customGridModiEvaluacion.clean();
		calendarsModiEvaFecInicio.clear();
  		calendarsModiEvaFecFin.clear();
  		dialogsModiEvaluacion.setMsg("");
  		imgButtonsModiEvaAgregar.setEnable();
  		imgButtonsModiEvaModificar.setDisable();
  		imgButtonsModiEvaEliminar.setDisable();
  		imgButtonsModiEvaReporte.setDisable();
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsModiEvaluacion, pcbModiEvaOrg, 0, 1, json('getData'));
		Tool.getContext(dialogsModiEvaluacion, pcbModiEvaOrg, pcbModiEvaSubOrg, pcbModiEvaCarrera, this.windowName + ".resetElements('carr')");
	},

  	buscar : function() {
  		customGridModiEvaluacion.clean();
  		imgButtonsModiEvaAgregar.setEnable();
  		imgButtonsModiEvaModificar.setDisable();
  		imgButtonsModiEvaEliminar.setDisable();
  		imgButtonsModiEvaReporte.setDisable();
		if (editsModiEvaCi.getValue() != '' && editsModiEvaNombre.getValue() != '' && editsModiEvaApellido.getValue() != '') {
			this.getModiEvaluacion();
		}
		else if (editsModiEvaCi.getValue() != '' || editsModiEvaNombre.getValue() != '' || editsModiEvaApellido.getValue() != '') {
	  		imgButtonsModiEvaAgregar.setDisable();
			hideIdCedula = editsModiEvaCi;
        	hideDeNombre = editsModiEvaNombre;
        	hideDeApellido = editsModiEvaApellido;	
			Tool.getGridData('MantObject', 'getMantPersProf', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsModiEvaCi, editsModiEvaCi, editsModiEvaNombre, editsModiEvaNombre, editsModiEvaApellido, editsModiEvaApellido);
		}
		else {
			Alert.show('Debe ingresar al menos: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},  

    setEvents : function() {
		editsModiEvaCi.onEnter(this.windowName + ".buscar()");
		editsModiEvaCi.onChange(this.windowName + ".limpiarFind(1)");
		editsModiEvaNombre.onEnter(this.windowName + ".buscar()");
		editsModiEvaNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsModiEvaApellido.onEnter(this.windowName + ".buscar()");
		editsModiEvaApellido.onChange(this.windowName + ".limpiarFind(3)");
		pcbModiEvaOrg.onChange(this.windowName + ".resetElements('org')");
		pcbModiEvaSubOrg.onChange(this.windowName + ".resetElements('suborg')");
		pcbModiEvaCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbModiEvaPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbModiEvaMateria.onChange(this.windowName + ".resetElements('mat')");
		pcbModiEvaSeccion.onChange(this.windowName + ".resetElements('sec')");
		pcbModiEvaTipEvaluacion.onChange(this.windowName + ".resetElements('tip')");
		customGridModiEvaluacion.onClickCells(this.windowName + ".setData()");
		imgButtonsModiEvaAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
		imgButtonsModiEvaModificar.onClick(this.windowName + ".coreUpdate('modificar')");
		imgButtonsModiEvaEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
		imgButtonsModiEvaLimpiar.onClick(this.windowName + ".limpiar('lmp')");
		imgButtonsModiEvaReporte.onClick(this.windowName + ".reporte()");
		imgButtonsModiEvaBuscar.onClick(this.windowName + ".buscar()");
		imgButtonsModiEvaSalir.onClick('dialogsModiEvaluacion.close()');
    },  
	
    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(pcbModiEvaSubOrg);
	  		Tool.rstPwrCmb(pcbModiEvaCarrera);
	  		Tool.rstPwrCmb(pcbModiEvaPeriodo);
	  		Tool.rstPwrCmb(pcbModiEvaMateria);
	  		Tool.rstPwrCmb(pcbModiEvaSeccion);
	  		Tool.rstPwrCmb(pcbModiEvaTipEvaluacion);	
	    	if (pcbModiEvaOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsModiEvaluacion, pcbModiEvaSubOrg, 1, 2, pcbModiEvaOrg);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbModiEvaCarrera);
	  		Tool.rstPwrCmb(pcbModiEvaPeriodo);
	  		Tool.rstPwrCmb(pcbModiEvaMateria);
	  		Tool.rstPwrCmb(pcbModiEvaSeccion);
	  		Tool.rstPwrCmb(pcbModiEvaTipEvaluacion);	
	    	if (pcbModiEvaSubOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsModiEvaluacion, pcbModiEvaCarrera, -1, 3, pcbModiEvaSubOrg);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbModiEvaPeriodo);
	  		Tool.rstPwrCmb(pcbModiEvaMateria);
	  		Tool.rstPwrCmb(pcbModiEvaSeccion);
	  		Tool.rstPwrCmb(pcbModiEvaTipEvaluacion);	
	    	if (pcbModiEvaCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsModiEvaluacion, pcbModiEvaPeriodo, 0, 1, pcbModiEvaCarrera.setModeReturnGetText(5));
		}
		else if (element == 'per') {
	  		Tool.rstPwrCmb(pcbModiEvaMateria);
	  		Tool.rstPwrCmb(pcbModiEvaSeccion);
	  		Tool.rstPwrCmb(pcbModiEvaTipEvaluacion);	
	    	if (pcbModiEvaPeriodo.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getCambioNotasMateria', dialogsModiEvaluacion, pcbModiEvaMateria, 0, 1, pcbModiEvaPeriodo, pcbModiEvaCarrera.setModeReturnGetText(2));
		}
		else if (element == 'mat') {
	  		Tool.rstPwrCmb(pcbModiEvaSeccion);
	  		Tool.rstPwrCmb(pcbModiEvaTipEvaluacion);	
	    	if (pcbModiEvaMateria.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getCambioNotasSeccion', dialogsModiEvaluacion, pcbModiEvaSeccion, 0, 1, pcbModiEvaPeriodo, pcbModiEvaMateria);
		}
		else if (element == 'sec') {
	  		Tool.rstPwrCmb(pcbModiEvaTipEvaluacion);	
	    	if (pcbModiEvaSeccion.getOption() != "") {
	    		Tool.getPowerComboData('MantObject', 'getCambioNotasTipoEvaluacion', dialogsModiEvaluacion, pcbModiEvaTipEvaluacion, 0, 1, pcbModiEvaSeccion);
	    	}
		}
		else if (element == 'tip') {
	    	if (pcbModiEvaTipEvaluacion.getOption() != "") {
	    		Tool.getGridData('MantObject', 'getCambioNotasAlumno', dialogsModiEvaluacion, customGridModiEvaluacion, false, pcbModiEvaSeccion, pcbModiEvaTipEvaluacion);	    		
	    	}
		}
  		calendarsModiEvaFecInicio.clear();
  		calendarsModiEvaFecFin.clear();
  		customGridModiEvaluacion.clean();
  		imgButtonsModiEvaAgregar.setEnable();
  		imgButtonsModiEvaModificar.setDisable();
  		imgButtonsModiEvaEliminar.setDisable();
	},
	
    setData: function(){
		var rlx = xmlStructs.createRecordList("rlx");

		if (customGridModiEvaluacion.getDataCell(1) != "") {
        	editsMantCedIdentidad.setValue(gridsMantPersona.getDataCell(1));
            editsMantNombre.setValue(gridsMantPersona.getDataCell(2));
            editsMantApellido.setValue(gridsMantPersona.getDataCell(3));
            this.hideIdPeriodo = customGridModiEvaluacion.getDataCell(4);
            powerComboBoxMantNacionalidad.findOption(gridsMantPersona.getDataCell(6));
            powerComboBoxMantPerEstCivil.findOption(gridsMantPersona.getDataCell(7));            
            editsMantPerEmail1.setValue(gridsMantPersona.getDataCell(8));
            editsMantPerEmail2.setValue(gridsMantPersona.getDataCell(9));
            powerComboBoxMantPerGruSanguineo.findOption(gridsMantPersona.getDataCell(10));
            powerComboBoxMantPerStatus.findOption(gridsMantPersona.getDataCell(11));
            powerComboBoxMantPerSexo.findOption(gridsMantPersona.getDataCell(12));
            editsMantTelCelular.setValue(gridsMantPersona.getDataCell(13));
            calendarsMantPersona.setFechaToEdit(gridsMantPersona.getDataCell(15));
            powerComboBoxMantPerProfesion.findOption(gridsMantPersona.getDataCell(18));
            editsMantPerRif.setValue(gridsMantPersona.getDataCell(19));
            editsMantPerDireccion.setValue(gridsMantPersona.getDataCell(20));
            editsMantPerConEmergencia.setValue(gridsMantPersona.getDataCell(21));
            imagesMantPersona.setSource('images/pht/' + gridsMantPersona.getDataCell(1) + '.jpg');
            imgButtonsMantPerAgregar.setDisable();
            imgButtonsMantPerModificar.setEnable();
            imgButtonsMantPerEliminar.setEnable();
			imgButtonsMantPerReporte.setEnable();
            rptIndividual = true;
            
            powerComboBoxMantPerPais.findOption(gridsMantPersona.getDataCell(14));
			rlx.addInt('reg', gridsMantPersona.getDataCell(14));
			rlx.addInt('reg', gridsMantPersona.getDataCell(14));
			rlx.addInt('reg', gridsMantPersona.getDataCell(16));
			rlx.addInt('reg', gridsMantPersona.getDataCell(16));
			Tool.cnnSrv('MantObject', 'getMantPersonaUbic', this.windowName + '.loadUbic()', rlx);
        }
    },

	coreUpdate: function(methodName) {
		if (editsModiEvaCi.valid(dialogsModiEvaluacion)) 
			if (editsModiEvaNombre.valid(dialogsModiEvaluacion))
				if (editsModiEvaApellido) {
					Tool.cnnSrv("MantObject", methodName + this.windowName, this.windowName + ".limpiar('core')", customGridModiEvaluacion.getDataColumn(4));
				}
	},

  	reporte : function(){
  		alert('ModiEvaluaciones Boton Reporte en construccion');
    }
};