var dialogsReviNotas = new Object();
var pcbReviNotOrganizacion = new Object();
var pcbReviNotSuborganizacion = new Object();
var pcbReviNotCarrera = new Object();
var pcbReviNotPeriodo = new Object();
var pcbReviNotPosicion = new Object();
var pcbReviNotSeccion = new Object();
var pcbReviNotMateria = new Object();
var pcbReviNotProfesor = new Object();
var editsReviNotCedula = new Object();
var editsReviNotNombre = new Object();
var editsReviNotApellido = new Object();
var memoReviNotObservaciones = new Object();
var pcbReviNotNota = new Object();
var gridsReviNotas = new Object();
var imgButtonsReviNotGuardar = new Object();
var imgButtonsReviNotLimpiar = new Object();
var imgButtonsReviNotReporte = new Object();
var imgButtonsReviNotBuscar = new Object();
var imgButtonsReviNotSalir = new Object();
var imgButtonsReviNotRepitientes = new Object();
var imgButtonsReviNotMatPend = new Object();
var mw_ReviNotas = new Object();//minWindow

var ReviNotas = {
    windowName: 'ReviNotas',
    isCreate: false,
    idRevision : 0,
    idRsmEval : 0,
    
    show: function() {  
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsReviNotas.isByClean())
			this.limpiar();			
		dialogsReviNotas.show();
	},
	
	hide: function() {
		dialogsReviNotas.hide();
	},
	
    createMWs: function() {
        mwReviNotas = desktop.addMinWindow('R.Notas.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsReviNotas.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsReviNotas_Init: function() {
        dialogsReviNotas.setMinimizeXY(0,0);
        dialogsReviNotas.setCenterScreen();
        dialogsReviNotas.addSpace(0,0,20);
        dialogsReviNotas.addLn(1,1,1);
		dialogsReviNotas.setHeightCell(1,1,20);
        dialogsReviNotas.addObjToDialog(pcbReviNotOrganizacion,2,1,24);
        dialogsReviNotas.addObjToDialog(pcbReviNotSuborganizacion,2,1,24);
        dialogsReviNotas.addObjToDialog(pcbReviNotCarrera,2,1,24);
        dialogsReviNotas.adjAllMarginObj(2,1,20);
        dialogsReviNotas.addObjToDialog(pcbReviNotPeriodo,3,1,24);
        dialogsReviNotas.addObjToDialog(pcbReviNotPosicion,3,1,24);
        dialogsReviNotas.addObjToDialog(pcbReviNotSeccion,3,1,24);
        dialogsReviNotas.adjAllMarginObj(3,1,20);   
        dialogsReviNotas.addObjToDialog(pcbReviNotMateria, 4, 1,24);
        dialogsReviNotas.addObjToDialog(pcbReviNotProfesor, 4, 1,24);
        dialogsReviNotas.adjAllMarginObj(4, 1, 20);
        dialogsReviNotas.addObjToDialog(editsReviNotCedula, 5, 1,24);
        dialogsReviNotas.addObjToDialog(editsReviNotNombre, 5, 1,24);
        dialogsReviNotas.addObjToDialog(editsReviNotApellido, 5, 1,24);
        dialogsReviNotas.adjAllMarginObj(5, 1, 20);
		dialogsReviNotas.addLn(6,1,1);
		dialogsReviNotas.setHeightCell(6,1,3);
        dialogsReviNotas.addObjToDialog(memoReviNotObservaciones,7,1,30);
        dialogsReviNotas.addObjToDialog(pcbReviNotNota, 7, 1,24);
        dialogsReviNotas.adjAllMarginObj(7, 1, 20);
		dialogsReviNotas.addLn(8,1,1);
		dialogsReviNotas.setHeightCell(8,1,3);
		dialogsReviNotas.addObjToDialog(gridsReviNotas.getObject(),9,1);
        dialogsReviNotas.addLn(10,1,1);
		dialogsReviNotas.setHeightCell(10,1,9);
		dialogsReviNotas.addObjToDialog(imgButtonsReviNotGuardar,11,1);
		dialogsReviNotas.addObjToDialog(imgButtonsReviNotLimpiar,11,1);
    	dialogsReviNotas.addObjToDialog(imgButtonsReviNotBuscar,11,1);
        dialogsReviNotas.addObjToDialog(imgButtonsReviNotSalir,11,1);
        dialogsReviNotas.adjAllMarginObj(11,1,20);
        dialogsReviNotas.leftMarginObj(11,1,0,205);
        dialogsReviNotas.addLn(11,1,1);
		dialogsReviNotas.setHeightCell(11,1,40);
        dialogsReviNotas.addObjToDialog(imgButtonsReviNotReporte,12,1);
        dialogsReviNotas.addObjToDialog(imgButtonsReviNotRepitientes,12,1);
        dialogsReviNotas.addObjToDialog(imgButtonsReviNotMatPend,12,1);
        dialogsReviNotas.adjAllMarginObj(12,1,20);
        dialogsReviNotas.leftMarginObj(12,1,0,135);
    },

	gridsReviNotas_Init: function() {
        gridsReviNotas.setFixColRow(false,true);
        gridsReviNotas.addTitleVectorX(['C.i.','Apellido','Nombre','Posición','Sección','Materia','Nota F.','Nota R.','idRevision','deObs','idRsmEval','idMateria','idPos','idSec','idPers','idProf']);
        gridsReviNotas.showData();
        gridsReviNotas.setSizeCol(1,79);
        gridsReviNotas.setSizeCol(2,143);
        gridsReviNotas.setSizeCol(3,143);
        gridsReviNotas.setSizeCol(4,100);
        gridsReviNotas.setSizeCol(5,65);
        gridsReviNotas.setSizeCol(6,190);
        gridsReviNotas.setSizeCol(7,65);
        gridsReviNotas.setSizeCol(8,65);
        gridsReviNotas.setSizeCol(9,0);
        gridsReviNotas.setSizeCol(10,0);
        gridsReviNotas.setSizeCol(11,0);
        gridsReviNotas.setSizeCol(12,0);
        gridsReviNotas.setSizeCol(13,0);
        gridsReviNotas.setSizeCol(14,0);
        gridsReviNotas.setSizeCol(15,0);
        gridsReviNotas.setSizeCol(16,0);
        gridsReviNotas.hideCol(9);
        gridsReviNotas.hideCol(10);
        gridsReviNotas.hideCol(11);
        gridsReviNotas.hideCol(12);
        gridsReviNotas.hideCol(13);
        gridsReviNotas.hideCol(14);
        gridsReviNotas.hideCol(15);
        gridsReviNotas.hideCol(16);
	},

    create: function() {
    	dialogsReviNotas = dialogs.create('dialogsReviNotas',0,0,899,567,'REVISIÓN DE NOTAS');
    	dialogsReviNotas.setAdjY(20);
    	pcbReviNotOrganizacion = powerComboBox.create('pcbReviNotOrganizacion','pcbReviNotOrganizacion','Organización (+):',1,103);
    	pcbReviNotOrganizacion.enableReadOnlyEditor();
    	pcbReviNotOrganizacion.addEmptyOption();
    	pcbReviNotOrganizacion.setValidEmpty();
    	pcbReviNotOrganizacion.setWidthCombo(152);
    	pcbReviNotSuborganizacion = powerComboBox.create('pcbReviNotSuborganizacion','pcbReviNotSuborganizacion','Suborganización (^):',1,123);
    	pcbReviNotSuborganizacion.enableReadOnlyEditor();
    	pcbReviNotSuborganizacion.addEmptyOption();
    	pcbReviNotSuborganizacion.setValidEmpty();
    	pcbReviNotSuborganizacion.setWidthCombo(152);
    	pcbReviNotCarrera = powerComboBox.create('pcbReviNotCarrera','pcbReviNotCarrera','Carrera (^):',1,71);
    	pcbReviNotCarrera.enableReadOnlyEditor();
    	pcbReviNotCarrera.addEmptyOption();
    	pcbReviNotCarrera.setWidthCombo(152);
    	pcbReviNotCarrera.setValidEmpty();
    	pcbReviNotPeriodo = powerComboBox.create('pcbReviNotPeriodo','pcbReviNotPeriodo','Periodo (*):',1,103);
    	pcbReviNotPeriodo.enableReadOnlyEditor();
    	pcbReviNotPeriodo.addEmptyOption();
    	pcbReviNotPeriodo.setValidEmpty();
    	pcbReviNotPeriodo.setWidthCombo(152);
    	pcbReviNotPosicion = powerComboBox.create('pcbReviNotPosicion','pcbReviNotPosicion','Posición (*):',1,123);
    	pcbReviNotPosicion.enableReadOnlyEditor();
    	pcbReviNotPosicion.addEmptyOption();
    	pcbReviNotPosicion.setValidEmpty();
    	pcbReviNotPosicion.setFieldFind(true);
    	pcbReviNotPosicion.setWidthCombo(152);
    	pcbReviNotPosicion.enableOnChangeToEmptyOption();
    	pcbReviNotSeccion = powerComboBox.create('pcbReviNotSeccion','pcbReviNotSeccion','Sección (*):',1,71);
    	pcbReviNotSeccion.enableReadOnlyEditor();
    	pcbReviNotSeccion.addEmptyOption();
    	pcbReviNotSeccion.setValidEmpty();
    	pcbReviNotSeccion.setFieldFind(true);
    	pcbReviNotSeccion.setDataType("string");
    	pcbReviNotSeccion.setWidthCombo(152);
    	pcbReviNotMateria = powerComboBox.create('pcbReviNotMateria','pcbReviNotMateria','Materia (*):',1,103);
    	pcbReviNotMateria.setValidEmpty();
    	pcbReviNotMateria.addEmptyOption();
    	pcbReviNotMateria.enableReadOnlyEditor();
    	pcbReviNotMateria.setDataType('string');
    	pcbReviNotMateria.setFieldFind(true);
		pcbReviNotMateria.setWidthCombo(469);
		pcbReviNotMateria.enableOnChangeToEmptyOption();
		pcbReviNotProfesor = powerComboBox.create('pcbReviNotProfesor','pcbReviNotProfesor','Profesor :',1,71);
		pcbReviNotProfesor.setValidEmpty();
		pcbReviNotProfesor.addEmptyOption();
		pcbReviNotProfesor.enableReadOnlyEditor();
		pcbReviNotProfesor.setWidthCombo(152);
		editsReviNotCedula = edits.create('editsReviNotCedula', 'editsReviNotCedula', 'C.i. (*):', 1,103, 'normal');    
        editsReviNotCedula.setValidInteger();
        editsReviNotCedula.setSizeEdit(173);
        editsReviNotCedula.setMaxLength(16);
        editsReviNotCedula.setFieldFind(true);
        editsReviNotNombre = edits.create('editsReviNotNombre', 'editsReviNotNombre', 'Nombre (*):', 1,123, 'normal');
        editsReviNotNombre.setSizeEdit(173);
		editsReviNotNombre.setMaxLength(50);
		editsReviNotNombre.setValidEmpty();
		editsReviNotNombre.setFieldFind(true);
		editsReviNotApellido = edits.create('editsReviNotApellido', 'editsReviNotApellido', 'Apellido (*):', 1,71, 'normal');
		editsReviNotApellido.setSizeEdit(173);
		editsReviNotApellido.setMaxLength(50);
		editsReviNotApellido.setValidEmpty();
		editsReviNotApellido.setFieldFind(true);
		pcbReviNotNota = powerComboBox.create('pcbReviNotNota','pcbReviNotNota','Nota :',1,73);
		pcbReviNotNota.enableReadOnlyEditor();
		pcbReviNotNota.addEmptyOption();
		pcbReviNotNota.setValidEmpty();
		pcbReviNotNota.setDataType("string");
		pcbReviNotNota.setFieldFind(true);
		pcbReviNotNota.setWidthCombo(35);
		pcbReviNotNota.enableOnChangeToEmptyOption();
        for (var pto = 1; pto <= 20; pto++)
        	pcbReviNotNota.addOptionAndSimpleValue(null, pto, pto);
		pcbReviNotNota.addOptionAndSimpleValue(null, 'I', 'I');
    	memoReviNotObservaciones = memo.create('memoReviNotObservaciones','Observación :',1,1,101);
        memoReviNotObservaciones.setValidEmpty();
		memoReviNotObservaciones.vAlignCaption('middle');
        memoReviNotObservaciones.setDimension(488,18);
		memoReviNotObservaciones.setMaxLength(150); 
    	gridsReviNotas = grids.create('gridsReviNotas',15,16);
    	imgButtonsReviNotGuardar = imgButtons.create('imgButtonsReviNotGuardar','Guardar.','ok.png');
    	imgButtonsReviNotLimpiar = imgButtons.create('imgButtonsReviNotLimpiar','Limpiar','limpiar.png');
    	imgButtonsReviNotBuscar = imgButtons.create('imgButtonsReviNotBuscar','Buscar','icono_buscar.png');
    	imgButtonsReviNotSalir = imgButtons.create('imgButtonsReviNotSalir','Salir','salir.png');
    	imgButtonsReviNotReporte = imgButtons.create('imgButtonsReviNotReporte','Reporte Revisión Notas','print.png');
    	imgButtonsReviNotRepitientes = imgButtons.create('imgButtonsReviNotRepitientes','Reporte Repitiente','print.png');
    	imgButtonsReviNotMatPend = imgButtons.create('imgButtonsReviNotMatPend','Cargar Materia Pendiente','ok.png');
		imgButtonsReviNotGuardar.setDimension(95,22);
		imgButtonsReviNotLimpiar.setDimension(95,22);
    	imgButtonsReviNotBuscar.setDimension(95,22);
    	imgButtonsReviNotSalir.setDimension(95,22);
    	imgButtonsReviNotReporte.setDisable();
    	imgButtonsReviNotReporte.setDimension(180,22);
		imgButtonsReviNotRepitientes.setDimension(180,22);
		imgButtonsReviNotMatPend.setDimension(180,22);
  	},

  	init: function() {
  		this.create();
  		this.setEvents();
  		this.dialogsReviNotas_Init();
  		this.gridsReviNotas_Init();
  		this.createMWs();
  	},
  
    limpiarFind: function(ix) {
    	editsReviNotCedula.hideId = -1;
    	gridsReviNotas.clean();
  		switch (ix) {
		case 1: 
			editsReviNotNombre.clear();
			editsReviNotApellido.clear();  		
			break;
		case 2: 
			editsReviNotCedula.clear();
			editsReviNotApellido.clear();  		
			break;
		default:
			editsReviNotCedula.clear();
		editsReviNotNombre.clear();
			break;
		} 
  		memoReviNotObservaciones.setText("");
  		pcbReviNotNota.setSeletedIndex(0);
  	},

  	limpiar: function() {
  		this.idRevision = 0;
  		this.idRsmEval = 0;
  		pcbReviNotOrganizacion.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbReviNotSuborganizacion);
  		Tool.rstPwrCmb(pcbReviNotCarrera);
  		Tool.rstPwrCmb(pcbReviNotPeriodo);
  		Tool.rstPwrCmb(pcbReviNotPosicion);
  		Tool.rstPwrCmb(pcbReviNotSeccion);
  		Tool.rstPwrCmb(pcbReviNotMateria);
  		Tool.rstPwrCmb(pcbReviNotProfesor);
  		editsReviNotCedula.hideId = -1;
  		editsReviNotCedula.clear();
  		editsReviNotNombre.clear();
  		editsReviNotApellido.clear();
  		pcbReviNotNota.setSelectedIndex(0);
  		memoReviNotObservaciones.setText("");
  		gridsReviNotas.clean();
  		dialogsReviNotas.setMsg("");
  		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsReviNotas, pcbReviNotOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsReviNotas, pcbReviNotOrganizacion, pcbReviNotSuborganizacion, pcbReviNotCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function() {
		pcbReviNotOrganizacion.onChange(this.windowName + ".resetElements('org')");
		pcbReviNotSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		pcbReviNotCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbReviNotPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbReviNotPosicion.onChange(this.windowName + ".resetElements('pos')");
		pcbReviNotMateria.onChange(this.windowName + ".resetElements('mat')");
		editsReviNotCedula.onEnter(this.windowName + ".buscar()");
		editsReviNotCedula.onChange(this.windowName + ".limpiarFind(1)");
		editsReviNotNombre.onEnter(this.windowName + ".buscar()");
		editsReviNotNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsReviNotApellido.onEnter(this.windowName + ".buscar()");
		editsReviNotApellido.onChange(this.windowName + ".limpiarFind(3)");
		pcbReviNotNota.onChange(this.windowName + ".coreUpdate()");
		gridsReviNotas.onClickCells(this.windowName + ".setData()");
		imgButtonsReviNotGuardar.onClick(this.windowName + ".coreUpdate()");
		imgButtonsReviNotLimpiar.onClick(this.windowName + ".limpiar()");
    	imgButtonsReviNotBuscar.onClick(this.windowName + ".buscar()");
    	imgButtonsReviNotSalir.onClick('dialogsReviNotas.close()');
    	imgButtonsReviNotReporte.onClick(this.windowName + ".reporte('getAlumnoRevision')");
    	imgButtonsReviNotRepitientes.onClick(this.windowName + ".getReporte('getAlumnoRepitiente')");
    	imgButtonsReviNotMatPend.onClick(this.windowName + ".getReporte('getAlumnoMateriaPend')");
    },

    resetElements: function(element) {
		var rlx = xmlStructs.createRecordList("rlx");
    	
    	Tool.rstPwrCmb(pcbReviNotProfesor);
    	editsReviNotCedula.hideId = -1;
    	editsReviNotCedula.clear();
  		editsReviNotNombre.clear();
  		editsReviNotApellido.clear();
  		memoReviNotObservaciones.setText("");
  		pcbReviNotNota.setSelectedIndex(0);
  		gridsReviNotas.clean();
  		imgButtonsReviNotReporte.setDisable();
  		
		if (element == 'org') {
			Tool.rstPwrCmb(pcbReviNotSuborganizacion);
	  		Tool.rstPwrCmb(pcbReviNotCarrera);
	  		Tool.rstPwrCmb(pcbReviNotPeriodo);
			Tool.rstPwrCmb(pcbReviNotPosicion);
			Tool.rstPwrCmb(pcbReviNotSeccion);
			Tool.rstPwrCmb(pcbReviNotMateria);
	    	if (pcbReviNotOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsReviNotas, pcbReviNotSuborganizacion, 1, 2, pcbReviNotOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbReviNotCarrera);
	  		Tool.rstPwrCmb(pcbReviNotPeriodo);
			Tool.rstPwrCmb(pcbReviNotPosicion);
			Tool.rstPwrCmb(pcbReviNotSeccion);
			Tool.rstPwrCmb(pcbReviNotMateria);
	    	if (pcbReviNotSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsReviNotas, pcbReviNotCarrera, -1, 3, pcbReviNotSuborganizacion);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbReviNotPeriodo);
			Tool.rstPwrCmb(pcbReviNotPosicion);
			Tool.rstPwrCmb(pcbReviNotSeccion);
			Tool.rstPwrCmb(pcbReviNotMateria);
	    	if (pcbReviNotCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsReviNotas, pcbReviNotPeriodo, 0, 1, pcbReviNotCarrera.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
			Tool.rstPwrCmb(pcbReviNotSeccion);
			Tool.rstPwrCmb(pcbReviNotMateria);
	    	if (pcbReviNotCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsReviNotas, pcbReviNotPosicion, 0, 1, pcbReviNotCarrera.setModeReturnGetText(2));        		
    	} 
    	else if (element == 'pos') {
			Tool.rstPwrCmb(pcbReviNotSeccion);
			Tool.rstPwrCmb(pcbReviNotMateria);
    		if (pcbReviNotPosicion.getOption() != "") {
	    		rlx.add('reg', pcbReviNotCarrera.setModeReturnGetText(2));
	    		rlx.add('reg', pcbReviNotPeriodo);
	    		rlx.add('reg', pcbReviNotPosicion);
	    		Tool.cnnSrv("MantObject", "getMantProyAulaSeccion", this.windowName + ".loadSeccion()", rlx);
    		}
    	}  
    	else if (element == 'mat') {
    		Tool.rstPwrCmb(pcbReviNotProfesor);
    		if (pcbReviNotMateria.getOption() != "")
    			Tool.getPowerComboData('MantObject', 'getProfesorMateria', dialogsReviNotas, pcbReviNotProfesor, 0, 1, pcbReviNotMateria);  	
    	} 
	},
	
	loadSeccion: function() {
		Tool.loadPowerComboData(dialogsReviNotas, pcbReviNotSeccion, 0, 1, json('getSeccionPosicion'));
		Tool.getPowerComboData('MantObject', 'getMantPensumMateria', dialogsReviNotas, pcbReviNotMateria, 0, 1, pcbReviNotCarrera.setModeReturnGetText(2), pcbReviNotPosicion);
	},
	
    setData: function() {
        if (gridsReviNotas.getDataCell(1) != "") {
        	editsReviNotCedula.setValue(gridsReviNotas.getDataCell(1));
			editsReviNotApellido.setValue(gridsReviNotas.getDataCell(2));
			editsReviNotNombre.setValue(gridsReviNotas.getDataCell(3));
			pcbReviNotPosicion.findOption(gridsReviNotas.getDataCell(13));
			editsReviNotCedula.hideId = gridsReviNotas.getDataCell(15);
			pcbReviNotProfesor.findOption(gridsReviNotas.getDataCell(16));
	  		this.getMateria();
	        if (gridsReviNotas.getDataCell(8) != "")
				pcbReviNotNota.findOption(gridsReviNotas.getDataCell(8));
	        else
	        	pcbReviNotNota.setSelectedIndex(0);
			this.idRevision = gridsReviNotas.getDataCell(9);
			memoReviNotObservaciones.setText(gridsReviNotas.getDataCell(10));
			this.idRsmEval = gridsReviNotas.getDataCell(11);
        }     			
	},

	getMateria: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		rlx.add('reg', pcbReviNotCarrera);
		rlx.add('reg', pcbReviNotPosicion);
		Tool.cnnSrv("MantObject", "getMantPensumMateria", this.windowName + ".loadAutoMateria()", rlx);
	},
	
	loadAutoMateria: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		Tool.loadPowerComboData(dialogsReviNotas, pcbReviNotMateria, 0, 1, json('getMantPensumMateriaSinPeriodo'));
		pcbReviNotMateria.findOption(gridsReviNotas.getDataCell(12));
		
		rlx.add('reg', pcbReviNotCarrera.setModeReturnGetText(2));
		rlx.add('reg', pcbReviNotPeriodo);
		rlx.add('reg', pcbReviNotPosicion);
		Tool.cnnSrv("MantObject", "getMantProyAulaSeccion", this.windowName + ".loadAutoSeccion()", rlx);
	},

	loadAutoSeccion: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		Tool.loadPowerComboData(dialogsReviNotas, pcbReviNotSeccion, 0, 1, json('getSeccionPosicion'));
		pcbReviNotSeccion.findOption(gridsReviNotas.getDataCell(14));
		
		rlx.add('reg', pcbReviNotMateria);
		Tool.cnnSrv("MantObject", "getProfesorMateria", this.windowName + ".loadProf()", rlx);
	},

	loadProf: function() {
		Tool.loadPowerComboData(dialogsReviNotas, pcbReviNotProfesor, 0, 1, json('getProfesor'));
		pcbReviNotProfesor.findOption(gridsReviNotas.getDataCell(16));
	},

	getReporte: function(jsonReporte) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbReviNotOrganizacion.valid(dialogsReviNotas))
			if (pcbReviNotSuborganizacion.valid(dialogsReviNotas))
				if (pcbReviNotCarrera.valid(dialogsReviNotas))
			  		if (pcbReviNotPeriodo.valid(dialogsReviNotas)) {
			  			rlx.add('reg', pcbReviNotPeriodo);
			  			rlx.add('reg', pcbReviNotCarrera.setModeReturnGetText(2));
			  			rlx.add('reg', pcbReviNotPosicion);
			  			rlx.add('reg', pcbReviNotSeccion);
			  			rlx.add('reg', pcbReviNotMateria);
			  			rlx.addInt('reg', editsReviNotCedula.hideId, true);
			  			rlx.addStr('reg', jsonReporte);
			  			Tool.cnnSrv("MantObject", "getAlumnoRevision", this.windowName + ".reporte('" + jsonReporte + "')", rlx);
			  		}
	},
	
	reporte: function(jsonReporte) {       
        var jsn = json(jsonReporte);        
        var book = new Book({
              title:'', 
              bodyWidth:window.innerWidth - 380, 
              bodyHeight:window.innerHeight - 150
        });		
		//CLACULOS PARA PAGINACION
		var totReg = jsn.data[0].length;
        var totxPag = 8;
		var totPag2 = totxPag;
        /*
        var totPag = parseInt((totReg - 18)/totPag2, 10);
        if(totPag < totReg/totxPag)
            totPag++;
		totPag++;
        */
        var sheets = [];
		var data = [[],[],[],[],[],[],[],[],[]];
		//CARGA DE DATOS PARA LA TABLA
        var ciAnt = null;
        var item = 0;
		for(var i=0; i<totReg; i++){
            if(jsn.data[0][i]!==ciAnt){
                item++;
                data[0].push(''+(item));
                data[1].push(jsn.data[0][i]);
                data[2].push(jsn.data[1][i]);
                data[3].push(jsn.data[2][i]);
                data[4].push(jsn.data[3][i]);
                data[5].push(jsn.data[4][i]);
                data[6].push(jsn.data[5][i]);
                data[7].push(jsn.data[6][i]);
                data[8].push(jsn.data[7][i]); 
            }
            else{
                data[4][item-1]+='<br>'+jsn.data[3][i];
                data[5][item-1]+='<br>'+jsn.data[4][i];
                data[6][item-1]+='<br>'+jsn.data[5][i];
                data[7][item-1]+='<br>'+jsn.data[6][i];
                data[8][item-1]+='<br>'+jsn.data[7][i];
            }
            ciAnt = jsn.data[0][i];
		}
        totPag = item/totxPag;
        //totPag2 = totPag;
		var sheetHead = book.createSheet();
		sheetHead.addImage({x:70, y:18, w:100, h:95, position:'absolute', path:'images_portal/logos/colegio-logo.jpg'});	
		sheetHead.bar({x:176, y:25, height:86, width:654, backgroundColor:'rgba(187,196,238,0.4)'});
        
        //************** MANEJO DE CAMBIO DE TITULO **************
        var titulo='';
        var xTitle=0;
        var yTitle=0;
        if (jsonReporte == 'getAlumnoRepitiente'){
            titulo = 'REVISIÓN - REPITIENTE';
            xTitle = 345;
            yTitle = 140;
        }
		else if (jsonReporte == 'getAlumnoMateriaPend'){
            titulo = 'REVISIÓN - MATERIA - PENDIENTE';
            xTitle = 300;
            yTitle = 140;
		}
		else{
            titulo = 'REVISIÓN DE NOTAS';
            xTitle = 345;
            yTitle = 140;
		}
        //*********************************************************
        
		sheetHead.addText({
			x:179, 
			y:30,
			position : 'absolute',
			fontSize:11,
			fontFamily : 'verdana',
			text:'ORGANIZACIÓN : '+pcbReviNotOrganizacion.getValue(),
			fontWeight : 'bold',
			width:600            
		});       
		
		sheetHead.addText({
			x:179, 
			y:50,
			position : 'absolute',
			fontSize:11,
			fontFamily : 'verdana',
			text:'SUBORGANIZACIÓN : '+pcbReviNotSuborganizacion.getValue(),
			fontWeight : 'bold',
			width:600
            //backgroundColor : 'rgba(0, 0, 0, 1)'
		});
		
		sheetHead.addText({
			x:179, 
			y:70,
			position : 'absolute',
			fontSize:11,
			fontFamily : 'verdana',
			text:'CARRERA : '+pcbReviNotCarrera.getValue(),
			fontWeight : 'bold',
			width:600
		});
			
		sheetHead.addText({
			x:179, 
			y:90,
			position : 'absolute',
			fontSize:11,
			fontFamily : 'verdana',
			text:'POSICIÓN : '+pcbReviNotPosicion.getValue(),
			fontWeight : 'bold',
			width:300 
		});
		
		sheetHead.addText({
			x:370, 
			y:90,
			position : 'absolute',
			fontSize:11,
			fontFamily : 'verdana',
			text:'SECCIÓN : '+pcbReviNotSeccion.getValue(),
			fontWeight : 'bold',
			width:400
		});
		
		sheetHead.addText({
			x:540, 
			y:90,
			position : 'absolute',
			fontSize:11,
			fontFamily : 'verdana',
			text:'PERIODO : '+pcbReviNotPeriodo.getValue(),
			fontWeight : 'bold',
			width:400
		});
        
        sheetHead.addText({
			x:xTitle, 
			y:yTitle,
			position : 'absolute',
			fontSize:17,
			fontFamily : 'verdana',
			text:titulo,
			fontWeight : 'bold',
			width:400            
		});	
        //CREACION DE HOJAS (SHEETS) Y SUS CONTENIDOS
		for(var i=0; i<totPag; i++){
			if(i===0)
				sheets[i] = sheetHead;
			else{
				sheets[i] = book.createSheet();
				totxPag=totPag2;
			}
			var ini = i*totxPag;
            var fin = totxPag + i*totxPag;
            var diff = fin-item;
            if(fin > item) {
				diff = fin - ini;
                fin=item;
                totxPag = diff;
            }   
		//////////////////////////////////////TABLE///////////////////////////////			
			var objTable = {
                x : 80,
                y : 180,
                //y : 10,
                fontColorTitles : 'black',
                fontSizeTitles:11,                
                position : 'absolute',				
                lineColor : 'rgba(0,0,0,0.9)',
				//heightRow  : 124,
                heightRow  : 116,
                fontSizeData : 9,
                alignColumns:['center','left','left','left','center','center','left','center','center'],
				alignTitles : ['center','center','center','center','center','center','center','center','center'],
                bgCellTitles : 'rgba(100,100,100,0)',
                bgCellColumns : ['white','white','white','white','white','white','white','white','white'],
                
                columnTitles : ['Nº','Cédula','Apellido','Nombre','Posición','Sección','Materia','Nota F.','Nota R.'],
                
                widthColumns : [24,74,110,110,50,50,234,40,40], 
                rows : totxPag,
                data : [
						data[0].slice(ini, fin),////numero
						data[1].slice(ini, fin),////cedula
						data[2].slice(ini, fin),////apellido
						data[3].slice(ini, fin),////nombre
						data[4].slice(ini, fin),////posicion
						data[5].slice(ini, fin),////seccion
						data[6].slice(ini, fin),////materia
						data[7].slice(ini, fin),////nota F
						data[8].slice(ini, fin),////nota R
				],
                dataRowIndexIni : 0,
                dataRowIndexEnd : totxPag
            };
			
			if(i===0){
				objTable.y = 180;
			}
			else{
				objTable.y = 115;
			}
			sheets[i].addTable(objTable);		
		}
		
        adjY = 0
		if((fin - ini) <= 0 ){
			fin=0;
			ini=0;
			adjY = 60;
		}
		
		book.addToBody();
		book.setCenterScreen();
		book.showFirst();
	},
	
	buscar: function() {
		imgButtonsReviNotReporte.setDisable();
		if ((editsReviNotCedula.getValue() == '' && editsReviNotNombre.getValue() == '' && editsReviNotApellido.getValue() == '') || (editsReviNotCedula.getValue() != '' && editsReviNotNombre.getValue() != '' && editsReviNotApellido.getValue() != '')) {
	        if (pcbReviNotOrganizacion.valid(dialogsReviNotas))
				if (pcbReviNotSuborganizacion.valid(dialogsReviNotas))
					if (pcbReviNotCarrera.valid(dialogsReviNotas))
				  		if (pcbReviNotPeriodo.valid(dialogsReviNotas))
				  			Tool.getGridData('MantObject', 'getAlumnoRevision', dialogsReviNotas, gridsReviNotas, 'imgButtonsReviNotReporte.setEnable()', pcbReviNotPeriodo, pcbReviNotCarrera.setModeReturnGetText(2), pcbReviNotPosicion, pcbReviNotSeccion, pcbReviNotMateria, new MiniDataSet(editsReviNotCedula.hideId, 'int', true), new MiniDataSet('getAlumnoRevision', 'str', false));
		}
		else if (editsReviNotCedula.getValue() != '' || editsReviNotNombre.getValue() != '' || editsReviNotApellido.getValue() != '') {
			ResuBusqueda.setObjectExtFnc(editsReviNotCedula, editsReviNotNombre, editsReviNotApellido, this.windowName + '.buscar()');
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsReviNotas, gridsResuBusqueda, 'ResuBusqueda', editsReviNotCedula, editsReviNotCedula, editsReviNotNombre, editsReviNotNombre, editsReviNotApellido, editsReviNotApellido);
		}
	},
	
	limpiarCoreUpdate: function() {
		this.idRevision = 0;
		this.idRsmEval = 0;
		dialogsReviNotas.setMsg("");
  		Tool.rstPwrCmb(pcbReviNotMateria);
		editsReviNotCedula.hideId = -1;
  		editsReviNotCedula.clear();
  		editsReviNotNombre.clear();
  		editsReviNotApellido.clear();
  		pcbReviNotNota.setSelectedIndex(0);
  		memoReviNotObservaciones.setText("");
  		gridsReviNotas.clean();
  		this.buscar();
  	},
  	
	coreUpdate: function() {
        var rlx = xmlStructs.createRecordList("rlx");

  		if (editsReviNotCedula.valid(dialogsReviNotas))
			if (editsReviNotNombre.valid(dialogsReviNotas))
				if (editsReviNotApellido.valid(dialogsReviNotas))
					if (pcbReviNotMateria.valid(dialogsReviNotas)) {
							rlx.addInt('reg', this.idRevision);
							rlx.addInt('reg', this.idRsmEval);
							rlx.add('reg', pcbReviNotNota);
							rlx.add('reg', memoReviNotObservaciones);
							rlx.add('reg', pcbReviNotProfesor);
							rlx.addInt('reg', editsReviNotCedula.hideId);
							Tool.cnnSrv('MantObject','guardarRevision', this.windowName + '.limpiarCoreUpdate()', rlx);
						}
    }
}
