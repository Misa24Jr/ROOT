var dialogsSupePlaEvaluativa = new Object();
var pcbSupePlaEvaOrg = new Object();
var pcbSupePlaEvaSuborg = new Object();
var pcbSupePlaEvaCarrera = new Object();
var pcbSupePlaEvaPeriodo = new Object();
var pcbSupePlaEvaPosicion = new Object();
var pcbSupePlaEvaLapso = new Object();
var pcbSupePlaEvaMateria = new Object();
var pcbSupePlaEvaSeccion = new Object();
var calendarsSupePlaEvaDesde = new Object();
var calendarsSupePlaEvaHasta = new Object();
var editsSupePlaEvaCi = new Object();
var editsSupePlaEvaNombre = new Object();
var editsSupePlaEvaApellido = new Object();
var pcbSupePlaEvaN1 = new Object();
var pcbSupePlaEvaAZ1 = new Object();
var pcbSupePlaEvaN2 = new Object();
var pcbSupePlaEvaAZ2 = new Object();
var pcbSupePlaEvaN3 = new Object();
var pcbSupePlaEvaAZ3 = new Object();
var imgButtonsSupePlaEvaLimpiar = new Object();
var imgButtonsSupePlaEvaBuscar = new Object();
var imgButtonsSupePlaEvaSalir = new Object();
var mwSupePlaEvaluativa  = new Object();// minWindow

var SupePlaEvaluativa = {
	windowName: 'SupePlaEvaluativa',
	isCreate: false,
	cursoSeccion: '',
	
	show: function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsSupePlaEvaluativa.isByClean()) 
			this.limpiar();
			
		dialogsSupePlaEvaluativa.show();
	},
	
	hide: function() {
		dialogsSupePlaEvaluativa.hide();
	},
	
	createMWs: function() {
		mwSupePlaEvaluativa = desktop.addMinWindow('S.PY.Docente', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsSupePlaEvaluativa.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},
	
	dialogsSupePlaEvaluativa_Init: function() {
		dialogsSupePlaEvaluativa.setMinimizeXY(0, 0);
		dialogsSupePlaEvaluativa.setCenterScreen();
		dialogsSupePlaEvaluativa.addSpace(0, 0, 20);
		dialogsSupePlaEvaluativa.addLn(1, 1, 1);
		dialogsSupePlaEvaluativa.setHeightCell(1,1,15);
		var c1 = container.create("c1",'Datos Generales', 1);		
		c1.setDimension(801,99);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#1e1e1e');
		c1.addObject(pcbSupePlaEvaOrg, 30,55);
		c1.addObject(pcbSupePlaEvaSuborg, 300,55);
		c1.addObject(pcbSupePlaEvaCarrera, 587,55);
		c1.addObject(pcbSupePlaEvaPeriodo, 30,80);
		c1.addObject(pcbSupePlaEvaLapso, 300, 80);
		c1.addObject(pcbSupePlaEvaPosicion, 587, 80);
		c1.addObject(pcbSupePlaEvaMateria, 30, 105);
		pcbSupePlaEvaMateria.setWidthCombo(418);
		c1.addObject(pcbSupePlaEvaSeccion, 587, 105);
		dialogsSupePlaEvaluativa.addObjToDialog(c1, 2, 1);
		dialogsSupePlaEvaluativa.addLn(3,1,1);
		dialogsSupePlaEvaluativa.setHeightCell(3,1,16);
		var c2 = container.create("c2",'Fecha Evaluación', 1);		
		c2.setDimension(801,42);
		c2.setPropertyMarco('groove',1,'#7e7e7e');
		c2.setFontTitle('verdana', 11, '#1e1e1e');
		c2.addObject(calendarsSupePlaEvaDesde.getEditCalendar(), 170,168);
		calendarsSupePlaEvaDesde.setWidthEditCalendar(127);
		calendarsSupePlaEvaDesde.setCaption('Desde (*):',3,68);
		calendarsSupePlaEvaDesde.sendToFrom(100);
		c2.addObject(calendarsSupePlaEvaHasta.getEditCalendar(), 430,168);
		calendarsSupePlaEvaHasta.setWidthEditCalendar(127);
		calendarsSupePlaEvaHasta.setCaption('Hasta (*):',3,68);
		calendarsSupePlaEvaHasta.sendToFrom(100);
		dialogsSupePlaEvaluativa.addObjToDialog(c2, 4, 1);
		dialogsSupePlaEvaluativa.addLn(5,1,1);
		dialogsSupePlaEvaluativa.setHeightCell(5,1,16);
        var c3 = container.create("c3",'Datos Profesor/Alumno', 1);		
		c3.setDimension(801,42);
		c3.setPropertyMarco('groove',1,'#7e7e7e');
		c3.setFontTitle('verdana', 11, '#1e1e1e');
		c3.addObject(editsSupePlaEvaCi, 30,229);
		c3.addObject(editsSupePlaEvaNombre, 300,229);
		c3.addObject(editsSupePlaEvaApellido, 587,229);
		dialogsSupePlaEvaluativa.addObjToDialog(c3, 6, 1);
		dialogsSupePlaEvaluativa.addLn(7,1,1);
		dialogsSupePlaEvaluativa.setHeightCell(7,1,16);
		var c4 = container.create("c4",'Orden de busqueda', 1);		
		c4.setDimension(801,42);
		c4.setPropertyMarco('groove',1,'#7e7e7e');
		c4.setFontTitle('verdana', 11, '#1e1e1e');
		c4.addObject(pcbSupePlaEvaAZ1, 54,289);
		c4.addObject(pcbSupePlaEvaN1, 128,289);
		pcbSupePlaEvaAZ1.setWidthCombo(22);
		pcbSupePlaEvaAZ1.addOptionAndSimpleValue(null,'A-Z','');
        pcbSupePlaEvaAZ1.addOptionAndSimpleValue(null, 'Z-A',' DESC');
		c4.addObject(pcbSupePlaEvaAZ2, 345,289);
		c4.addObject(pcbSupePlaEvaN2, 419,289);
		pcbSupePlaEvaAZ2.setWidthCombo(22);
		pcbSupePlaEvaAZ2.addOptionAndSimpleValue(null,'A-Z','');
        pcbSupePlaEvaAZ2.addOptionAndSimpleValue(null, 'Z-A',' DESC');
		c4.addObject(pcbSupePlaEvaAZ3, 587,289);
		c4.addObject(pcbSupePlaEvaN3, 661,289);
		pcbSupePlaEvaAZ3.setWidthCombo(22);
		pcbSupePlaEvaAZ3.addOptionAndSimpleValue(null,'A-Z','');
        pcbSupePlaEvaAZ3.addOptionAndSimpleValue(null, 'Z-A',' DESC');
		dialogsSupePlaEvaluativa.addObjToDialog(c4, 8, 1);
		dialogsSupePlaEvaluativa.addLn(9,1,1);
		dialogsSupePlaEvaluativa.setHeightCell(9,1,11);
		dialogsSupePlaEvaluativa.addObjToDialog(imgButtonsSupePlaEvaLimpiar,10,1);
        dialogsSupePlaEvaluativa.addObjToDialog(imgButtonsSupePlaEvaBuscar,10,1);
        dialogsSupePlaEvaluativa.addObjToDialog(imgButtonsSupePlaEvaSalir,10,1); 
        dialogsSupePlaEvaluativa.adjAllMarginObj(10,1,25);
        dialogsSupePlaEvaluativa.leftMarginObj(10,1,0,239);
	},	
			
	create: function() {
        /////////////////////////////////////////////////INFORMACIÓN GENERAL/////////////////////////////////////////////////
		dialogsSupePlaEvaluativa = dialogs.create('dialogsSupePlaEvaluativa',0,0,843,340,'SUPERVISIÓN DE PLANIFICACIÓN EVALUATIVA');   
		dialogsSupePlaEvaluativa.setAdjY(30);
		pcbSupePlaEvaOrg = powerComboBox.create('pcbSupePlaEvaOrg','pcbSupePlaEvaOrg','Organización (+):',1,100);
		pcbSupePlaEvaOrg.setValidEmpty();
		pcbSupePlaEvaOrg.enableReadOnlyEditor();
		pcbSupePlaEvaOrg.addEmptyOption ();
		pcbSupePlaEvaSuborg = powerComboBox.create('pcbSupePlaEvaSuborg','pcbSupePlaEvaSuborg','Suborganización (^):',1,120);
		pcbSupePlaEvaSuborg.setValidEmpty();
		pcbSupePlaEvaSuborg.enableReadOnlyEditor();
		pcbSupePlaEvaSuborg.addEmptyOption();
		pcbSupePlaEvaCarrera = powerComboBox.create('pcbSupePlaEvaCarrera','pcbSupePlaEvaCarrera','Carrera (^):',1,75);
		pcbSupePlaEvaCarrera.setValidEmpty();
		pcbSupePlaEvaCarrera.enableReadOnlyEditor();
		pcbSupePlaEvaCarrera.addEmptyOption();
		pcbSupePlaEvaCarrera.setFieldFind(true);
		pcbSupePlaEvaPeriodo = powerComboBox.create('pcbSupePlaEvaPeriodo','pcbSupePlaEvaPeriodo','Periodo (*):',1,100);
		pcbSupePlaEvaPeriodo.setValidEmpty();
		pcbSupePlaEvaPeriodo.enableReadOnlyEditor();
		pcbSupePlaEvaPeriodo.addEmptyOption();
		pcbSupePlaEvaPeriodo.setFieldFind(true);
		pcbSupePlaEvaPosicion = powerComboBox.create('pcbSupePlaEvaPosicion','pcbSupePlaEvaPosicion','Posición (*):',1,75);
		pcbSupePlaEvaPosicion.setValidEmpty();
		pcbSupePlaEvaPosicion.enableReadOnlyEditor();
		pcbSupePlaEvaPosicion.addEmptyOption();
		pcbSupePlaEvaPosicion.setFieldFind(true);
		pcbSupePlaEvaPosicion.enableOnChangeToEmptyOption();
		pcbSupePlaEvaSeccion = powerComboBox.create('pcbSupePlaEvaSeccion','pcbSupePlaEvaSeccion','Sección (*):',1,75);
		pcbSupePlaEvaSeccion.setValidEmpty();
		pcbSupePlaEvaSeccion.enableReadOnlyEditor();
		pcbSupePlaEvaSeccion.addEmptyOption();
		pcbSupePlaEvaSeccion.setFieldFind(true);
		pcbSupePlaEvaMateria = powerComboBox.create('pcbSupePlaEvaMateria','pcbSupePlaEvaMateria','Materia (*):',1,100);
		pcbSupePlaEvaMateria.setValidEmpty();
		pcbSupePlaEvaMateria.enableReadOnlyEditor();
		pcbSupePlaEvaMateria.addEmptyOption();
		pcbSupePlaEvaMateria.setFieldFind(true);
		pcbSupePlaEvaMateria.enableOnChangeToEmptyOption();
		pcbSupePlaEvaLapso = powerComboBox.create('pcbSupePlaEvaLapso','pcbSupePlaEvaLapso','Lapso (*):',1,120);
		pcbSupePlaEvaLapso.setValidEmpty();
		pcbSupePlaEvaLapso.enableReadOnlyEditor();
		pcbSupePlaEvaLapso.addEmptyOption();
		pcbSupePlaEvaLapso.setFieldFind(true);
		calendarsSupePlaEvaDesde = calendars.create('calendarsSupePlaEvaDesde:');
    	calendarsSupePlaEvaDesde.setValidEmpty();   
		calendarsSupePlaEvaHasta = calendars.create('calendarsSupePlaEvaHasta:');
    	calendarsSupePlaEvaHasta.setValidEmpty();
    	calendarsSupePlaEvaHasta.setFieldFind(true);
		editsSupePlaEvaCi = edits.create('editsSupePlaEvaCi','editsSupePlaEvaCi','C.i. (*):',1,100,'normal');
		editsSupePlaEvaCi.setValidInteger();
		editsSupePlaEvaCi.setValidEmpty();
		editsSupePlaEvaCi.setFieldFind(true);
		editsSupePlaEvaCi.setSizeEdit(148);
		editsSupePlaEvaNombre = edits.create('editsSupePlaEvaNombre','editsSupePlaEvaNombre','Nombre (*):',1,120,'normal');
		editsSupePlaEvaNombre.setValidEmpty();
		editsSupePlaEvaNombre.setFieldFind(true);
		editsSupePlaEvaNombre.setSizeEdit(148);
		editsSupePlaEvaApellido = edits.create('editsSupePlaEvaApellido','editsSupePlaEvaApellido','Apellido (*):',1,75,'normal');
		editsSupePlaEvaApellido.setValidEmpty();
		editsSupePlaEvaApellido.setFieldFind(true);
		editsSupePlaEvaApellido.setSizeEdit(148);
		pcbSupePlaEvaAZ1 = powerComboBox.create('pcbSupePlaEvaAZ1','pcbSupePlaEvaAZ1','Nº 1:',1,30);
		pcbSupePlaEvaAZ1.setValidEmpty();
		pcbSupePlaEvaAZ1.enableReadOnlyEditor();
		pcbSupePlaEvaAZ1.addEmptyOption();
		pcbSupePlaEvaN1 = powerComboBox.create('pcbSupePlaEvaN1','pcbSupePlaEvaN1','',1,1);
		pcbSupePlaEvaN1.setValidEmpty();
		pcbSupePlaEvaN1.enableReadOnlyEditor();
		pcbSupePlaEvaN1.addEmptyOption();
		pcbSupePlaEvaN1.addOptionAndSimpleValue(null, 'Contenido', 5);
		pcbSupePlaEvaN1.addOptionAndSimpleValue(null, 'Fecha', 10);
		pcbSupePlaEvaN1.addOptionAndSimpleValue(null, 'Forma Evaluar', 6);
		pcbSupePlaEvaN1.addOptionAndSimpleValue(null, 'Materia', 2);
		pcbSupePlaEvaN1.addOptionAndSimpleValue(null, 'Posición', 11);
		pcbSupePlaEvaN1.addOptionAndSimpleValue(null, 'Profesor', 9);
		pcbSupePlaEvaN1.addOptionAndSimpleValue(null, 'Sección', 4);
		pcbSupePlaEvaAZ2 = powerComboBox.create('pcbSupePlaEvaAZ2','pcbSupePlaEvaAZ2','Nº 2:',1,30);
		pcbSupePlaEvaAZ2.setValidEmpty();
		pcbSupePlaEvaAZ2.enableReadOnlyEditor();
		pcbSupePlaEvaAZ2.addEmptyOption();
		pcbSupePlaEvaN2 = powerComboBox.create('pcbSupePlaEvaN2','pcbSupePlaEvaN2','',1,1);
		pcbSupePlaEvaN2.setValidEmpty();
		pcbSupePlaEvaN2.enableReadOnlyEditor();
		pcbSupePlaEvaN2.addEmptyOption();
		pcbSupePlaEvaN2.addOptionAndSimpleValue(null, 'Contenido', 5);
		pcbSupePlaEvaN2.addOptionAndSimpleValue(null, 'Fecha', 10);
		pcbSupePlaEvaN2.addOptionAndSimpleValue(null, 'Forma Evaluar', 6);
		pcbSupePlaEvaN2.addOptionAndSimpleValue(null, 'Materia', 2);
		pcbSupePlaEvaN2.addOptionAndSimpleValue(null, 'Posición', 11);
		pcbSupePlaEvaN2.addOptionAndSimpleValue(null, 'Profesor', 9);
		pcbSupePlaEvaN2.addOptionAndSimpleValue(null, 'Sección', 4);
		pcbSupePlaEvaAZ3 = powerComboBox.create('pcbSupePlaEvaAZ3','pcbSupePlaEvaAZ3','Nº 3:',1,30);
		pcbSupePlaEvaAZ3.setValidEmpty();
		pcbSupePlaEvaAZ3.enableReadOnlyEditor();
		pcbSupePlaEvaAZ3.addEmptyOption();
		pcbSupePlaEvaN3 = powerComboBox.create('pcbSupePlaEvaN3','pcbSupePlaEvaN3','',1,1);
		pcbSupePlaEvaN3.setValidEmpty();
		pcbSupePlaEvaN3.enableReadOnlyEditor();
		pcbSupePlaEvaN3.addEmptyOption();
		pcbSupePlaEvaN3.addOptionAndSimpleValue(null, 'Contenido', 5);
		pcbSupePlaEvaN3.addOptionAndSimpleValue(null, 'Fecha', 10);
		pcbSupePlaEvaN3.addOptionAndSimpleValue(null, 'Forma Evaluar', 6);
		pcbSupePlaEvaN3.addOptionAndSimpleValue(null, 'Materia', 2);
		pcbSupePlaEvaN3.addOptionAndSimpleValue(null, 'Posición', 11);
		pcbSupePlaEvaN3.addOptionAndSimpleValue(null, 'Profesor', 9);
		pcbSupePlaEvaN3.addOptionAndSimpleValue(null, 'Sección', 4);
		imgButtonsSupePlaEvaLimpiar = imgButtons.create('imgButtonsSupePlaEvaLimpiar','Limpiar','limpiar.png');
		imgButtonsSupePlaEvaBuscar = imgButtons.create('imgButtonsSupePlaEvaBuscar','Buscar','icono_buscar.png');
		imgButtonsSupePlaEvaSalir = imgButtons.create('imgButtonsSupePlaEvaSalir','Salir','salir.png');
        imgButtonsSupePlaEvaLimpiar.setDimension(90,22);
        imgButtonsSupePlaEvaBuscar.setDimension(90,22);
        imgButtonsSupePlaEvaSalir.setDimension(90,22);
	},

	init: function() {
		this.create();
		this.setEvents();
		this.dialogsSupePlaEvaluativa_Init();
		this.createMWs(); 
	},
	
	limpiarFind: function(ix) {
		editsSupePlaEvaCi.hideId = -1;
		dialogsSupePlaEvaluativa.setMsg("");

  		switch (ix) {
		case 1: 
			editsSupePlaEvaNombre.setValue("");
			editsSupePlaEvaApellido.setValue("");  		
			break;
		case 2: 
			editsSupePlaEvaCi.setValue("");
			editsSupePlaEvaApellido.setValue("");  		
			break;
		default:
			editsSupePlaEvaCi.setValue("");
			editsSupePlaEvaNombre.setValue("");
			break;
		} 
  	},
  	
	limpiar: function() {
		dialogsSupePlaEvaluativa.setMsg("");
		pcbSupePlaEvaOrg.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbSupePlaEvaSuborg);
  		Tool.rstPwrCmb(pcbSupePlaEvaCarrera);
  		Tool.rstPwrCmb(pcbSupePlaEvaPeriodo);
  		Tool.rstPwrCmb(pcbSupePlaEvaPosicion);
  		Tool.rstPwrCmb(pcbSupePlaEvaLapso);
  		Tool.rstPwrCmb(pcbSupePlaEvaMateria);
  		Tool.rstPwrCmb(pcbSupePlaEvaSeccion);
  		calendarsSupePlaEvaDesde.clear();
  		calendarsSupePlaEvaHasta.clear();
		editsSupePlaEvaCi.hideId = -1;
		editsSupePlaEvaCi.setValue("");
		editsSupePlaEvaNombre.setValue("");
		editsSupePlaEvaApellido.setValue("");
		pcbSupePlaEvaAZ1.setSelectedIndex(1);
		pcbSupePlaEvaAZ2.setSelectedIndex(1);
		pcbSupePlaEvaAZ3.setSelectedIndex(1);
		pcbSupePlaEvaN1.setSelectedIndex(0);
		pcbSupePlaEvaN2.setSelectedIndex(0);
		pcbSupePlaEvaN3.setSelectedIndex(0);
  		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
    },
	
	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsSupePlaEvaluativa, pcbSupePlaEvaOrg, 0, 1, json('getData'));
		Tool.getContext(dialogsSupePlaEvaluativa, pcbSupePlaEvaOrg, pcbSupePlaEvaSuborg, pcbSupePlaEvaCarrera, this.windowName + ".resetElements('carr')");
	},
    
    resetElements: function(element) {
    	var rlx = xmlStructs.createRecordList("rlx");

    	if (element == 'org') {
			Tool.rstPwrCmb(pcbSupePlaEvaSuborg);
	  		Tool.rstPwrCmb(pcbSupePlaEvaCarrera);
	  		Tool.rstPwrCmb(pcbSupePlaEvaPeriodo);
			Tool.rstPwrCmb(pcbSupePlaEvaPosicion);
	  		Tool.rstPwrCmb(pcbSupePlaEvaLapso);
	  		Tool.rstPwrCmb(pcbSupePlaEvaMateria);
			Tool.rstPwrCmb(pcbSupePlaEvaSeccion);
	    	if (pcbSupePlaEvaOrg.getOption() !== "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsSupePlaEvaluativa, pcbSupePlaEvaSuborg, 1, 2, pcbSupePlaEvaOrg);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbSupePlaEvaCarrera);
	  		Tool.rstPwrCmb(pcbSupePlaEvaPeriodo);
			Tool.rstPwrCmb(pcbSupePlaEvaPosicion);
	  		Tool.rstPwrCmb(pcbSupePlaEvaLapso);
	  		Tool.rstPwrCmb(pcbSupePlaEvaMateria);
			Tool.rstPwrCmb(pcbSupePlaEvaSeccion);
	    	if (pcbSupePlaEvaSuborg.getOption() !== "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsSupePlaEvaluativa, pcbSupePlaEvaCarrera, -1, 3, pcbSupePlaEvaSuborg);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbSupePlaEvaPeriodo);
			Tool.rstPwrCmb(pcbSupePlaEvaPosicion);
	  		Tool.rstPwrCmb(pcbSupePlaEvaLapso);
	  		Tool.rstPwrCmb(pcbSupePlaEvaMateria);
			Tool.rstPwrCmb(pcbSupePlaEvaSeccion);
	    	if (pcbSupePlaEvaCarrera.getOption() !== "") 
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsSupePlaEvaluativa, pcbSupePlaEvaPeriodo, 0, 1, pcbSupePlaEvaCarrera.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
			Tool.rstPwrCmb(pcbSupePlaEvaSeccion);
	  		Tool.rstPwrCmb(pcbSupePlaEvaMateria);
	  		rlx.add('reg', pcbSupePlaEvaPeriodo);
	  		rlx.add('reg', pcbSupePlaEvaCarrera.setModeReturnGetText(2));
    		Tool.cnnSrv("ReportObject", "getPosicionPlanifProf", this.windowName + ".loadDataPosicionLapso()", rlx);
    	} 
    	else if (element == 'pos') {
    		if (pcbSupePlaEvaPosicion.getOption() === "") {
    			Tool.rstPwrCmb(pcbSupePlaEvaMateria);
    		}
    		else {
    			Tool.rstPwrCmb(pcbSupePlaEvaSeccion);
    			rlx.add('reg', pcbSupePlaEvaPeriodo);
    			rlx.add('reg', pcbSupePlaEvaCarrera.setModeReturnGetText(2));
    			rlx.add('reg', pcbSupePlaEvaPosicion);
    			Tool.cnnSrv("ReportObject", "getMateriaPlanifProf", this.windowName + ".loadDataMateriaPosicion()", rlx);
    		}    		
    	} 
    	else if (element == 'mat') {
    		if (pcbSupePlaEvaMateria.getOption() === "")
    			this.resetElements('pos');
    		else {
    	  		this.cursoSeccion = 'curso';
    			Tool.getPowerComboData('ReportObject', 'getSeccionPlanifProf', dialogsSupePlaEvaluativa, pcbSupePlaEvaSeccion, -1, 1, pcbSupePlaEvaPeriodo, pcbSupePlaEvaCarrera.setModeReturnGetText(2), pcbSupePlaEvaPosicion, pcbSupePlaEvaMateria);
    		}
    	}
	},
	
	loadDataMateriaPosicion: function() {
  		Tool.loadPowerComboData(dialogsSupePlaEvaluativa, pcbSupePlaEvaMateria, 0, 1, json('getMateriaPlanifProf'));
  		Tool.loadPowerComboData(dialogsSupePlaEvaluativa, pcbSupePlaEvaSeccion, 0, 1, json('getSeccionPosicion'));
  		this.cursoSeccion = 'seccion';
	},
	
	loadDataPosicionLapso: function() {
  		Tool.loadPowerComboData(dialogsSupePlaEvaluativa, pcbSupePlaEvaPosicion, 0, 1, json('getPosicionPlanifProf'));
  		Tool.loadPowerComboData(dialogsSupePlaEvaluativa, pcbSupePlaEvaLapso, 3, 0, json('getMantLapso'));
	},

	buscar: function() {
		if (pcbSupePlaEvaOrg.valid(dialogsSupePlaEvaluativa)) 
			if (pcbSupePlaEvaSuborg.valid(dialogsSupePlaEvaluativa)) 
				if (pcbSupePlaEvaCarrera.valid(dialogsSupePlaEvaluativa)) 
					if (pcbSupePlaEvaPeriodo.valid(dialogsSupePlaEvaluativa)) {
						if (editsSupePlaEvaCi.getValue() != '' || editsSupePlaEvaNombre.getValue() != '' || editsSupePlaEvaApellido.getValue() != '') {
							ResuBusqueda.setObjectExtFnc(editsSupePlaEvaCi, editsSupePlaEvaNombre, editsSupePlaEvaApellido, 'dlgWait.hide()');
							Tool.getGridData('MantObject', 'getMantPersTodas', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsSupePlaEvaCi, editsSupePlaEvaCi, editsSupePlaEvaNombre, editsSupePlaEvaNombre, editsSupePlaEvaApellido, editsSupePlaEvaApellido);
						}
					}
    },

	setEvents: function() {
		pcbSupePlaEvaOrg.onChange(this.windowName + ".resetElements('org')");
		pcbSupePlaEvaSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbSupePlaEvaCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbSupePlaEvaPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbSupePlaEvaPosicion.onChange(this.windowName + ".resetElements('pos')");
		pcbSupePlaEvaMateria.onChange(this.windowName + ".resetElements('mat')");
		editsSupePlaEvaCi.onEnter(this.windowName + ".buscar()");
		editsSupePlaEvaCi.onChange(this.windowName + ".limpiarFind(1)");
		editsSupePlaEvaNombre.onEnter(this.windowName + ".buscar()");
		editsSupePlaEvaNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsSupePlaEvaApellido.onEnter(this.windowName + ".buscar()");
		editsSupePlaEvaApellido.onChange(this.windowName + ".limpiarFind(3)");
		imgButtonsSupePlaEvaLimpiar.onClick(this.windowName+".limpiar()"); 
	  	imgButtonsSupePlaEvaBuscar.onClick(this.windowName+".coreUpdate()");
	  	imgButtonsSupePlaEvaSalir.onClick("dialogsSupePlaEvaluativa.close()");
    }, 

    reporte: function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
		rep.setPageSize(1060);
		rep.setWidthReport(1450);
		rep.setPositionIcon(1200,4);
       	///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1450,34,rep.getRGBAObj(215,246,236,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),13,'helvetica','bold');
		rep.addText(10, 24, 'Organización: '+pcbSupePlaEvaSuborg.getOption()+'   Carrera:' +pcbSupePlaEvaCarrera.getOption()+'   Periodo: '+pcbSupePlaEvaPeriodo.getOption()+'             Programación de Examenes.',false);
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 10, 'rgba(0,0,0,0.9)', 'rgba(0,0,0,0.9)', 2,'bold');
		rep.setTableCellProperties(1, 'helvetica', 8);
		rep.addTable('TablaRepoProbador',['Nº','Cedula','Profesor','Fecha/Hora','Lapso','Materia','P','S','Contenido','Forma de Evaluar','Valor'],720,40);
        rep.setTotalRowTable(28);
        rep.setHeightRow(22); 
        rep.setSizeColumnArray([40,68,262,170,   70,    220,36,25,340,180,42]);
        rep.setAlignData(['right','right','left','left','center','left','center','center','left','left','center']);     
        rep.addJsonData('TablaRepoProbador','getCalendarioEvaluacion',[0,8,9,1,13,2,3,4,5,6,7]);
		//////////////////////////////////////////PIE DE PAGINA////////////////////////////////////////////////////////////////////////////
        //rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        //rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		setTimeout(rep.previewHTML,100);
		rep.render();		
	}, 	
	
	coreUpdate: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        var strOrden = '';
        
		if (pcbSupePlaEvaOrg.valid(dialogsSupePlaEvaluativa)) 
			if (pcbSupePlaEvaSuborg.valid(dialogsSupePlaEvaluativa)) 
				if (pcbSupePlaEvaPeriodo.valid(dialogsSupePlaEvaluativa)) {
					rlx.add('reg', pcbSupePlaEvaPeriodo);
					rlx.add('reg', pcbSupePlaEvaCarrera.setModeReturnGetText(2));
					rlx.add('reg', pcbSupePlaEvaMateria);
					rlx.add('reg', pcbSupePlaEvaSeccion);
					rlx.add('reg', pcbSupePlaEvaLapso);
					rlx.add('reg', calendarsSupePlaEvaDesde);
					rlx.add('reg', calendarsSupePlaEvaHasta);
					rlx.addInt('reg', editsSupePlaEvaCi.hideId, true);
					rlx.add('reg', pcbSupePlaEvaPosicion);
					if (pcbSupePlaEvaN1.getText() != '' && pcbSupePlaEvaN1.getText() != -1 && pcbSupePlaEvaN1.getText() != '-1') {
						strOrden = pcbSupePlaEvaN1.getText() + pcbSupePlaEvaAZ1.getText();
					}
					if (pcbSupePlaEvaN2.getText() != '' && pcbSupePlaEvaN2.getText() != -1 && pcbSupePlaEvaN2.getText() != '-1') {
						strOrden = ((strOrden != '')? strOrden + ', ' : '') + pcbSupePlaEvaN2.getText() + pcbSupePlaEvaAZ2.getText();
					}
					if (pcbSupePlaEvaN3.getText() != '' && pcbSupePlaEvaN3.getText() != -1 && pcbSupePlaEvaN3.getText() != '-1') {
						strOrden = ((strOrden != '')? strOrden + ', ' : '') + pcbSupePlaEvaN3.getText() + pcbSupePlaEvaAZ3.getText();
					}
					rlx.addStr('reg', (strOrden != '')? strOrden : '10, 12');
					rlx.addStr('reg', this.cursoSeccion);
					Tool.cnnSrv("MantObject","getSupPlaEvaluativa", this.windowName + ".reporte()", rlx);
				}
	}
};