var dialogsMomeEvaluacion = new Object();
var pcbMomeEvaOrg = new Object();
var pcbMomeEvaSuborg = new Object();
var pcbMomeEvaCarrera = new Object();
var pcbMomeEvaPeriodo = new Object();
var pcbMomeEvaPosicion = new Object();
var pcbMomeEvaEdoAlumno = new Object();
var pcbMomeEvaMateria = new Object();
var pcbProEvaluador = new Object();
var editsMomeEvaCi = new Object();
var editsMomeEvaNombre = new Object();
var editsMomeEvaApellido = new Object();
var pcbMome1Octubre = new Object();
var pcbMome4Junio = new Object();
var pcbMome2Diciembre = new Object();
var pcbMome3Enero = new Object();
var gridsMomeEvaluacion = new Object();
var imgButtonsMomeEvaGuardar = new Object();
var imgButtonsMomeEvaEliminar = new Object();
var imgButtonsMomeEvaLimpiar = new Object();
var imgButtonsMomeEvaReporte = new Object();
var imgButtonsMomeEvaBuscar = new Object();
var imgButtonsMomeEvaRepitiente = new Object();
var imgButtonsMomeEvaSalir = new Object();
var mwMomeEvaluacion = new Object();// minWindow

var MomeEvaluacion = {
	windowName: 'MomeEvaluacion',
	isCreate: false,
	idMatePend : 0,

	show: function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMomeEvaluacion.isByClean())
			this.limpiar();			
		dialogsMomeEvaluacion.show();
	},
	
	hide: function() {
		dialogsMomeEvaluacion.hide();
	},
	
    createMWs: function() {
        mwMomeEvaluacion = desktop.addMinWindow('M.Evaluación', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMomeEvaluacion.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsMomeEvaluacion_Init: function() {
        dialogsMomeEvaluacion.setMinimizeXY(0,0);
        dialogsMomeEvaluacion.setCenterScreen();
        dialogsMomeEvaluacion.addSpace(0,0,20);
        dialogsMomeEvaluacion.addLn(1,1,1);
		dialogsMomeEvaluacion.setHeightCell(1,1,15);  
		var c1 = container.create("c1",'Datos Generales',1);
		c1.setDimension(817,98);
		c1.setMarginLeftBarTitle(345);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#7e7e7e');
		c1.addObject(pcbMomeEvaOrg, 30, 55);
		c1.addObject(pcbMomeEvaSuborg, 300, 55);
		c1.addObject(pcbMomeEvaCarrera, 590, 55);
		c1.addObject(pcbMomeEvaPeriodo, 30, 80);
		c1.addObject(pcbMomeEvaPosicion, 300, 80);
		c1.addObject(pcbMomeEvaEdoAlumno, 590, 80);
		c1.addObject(pcbMomeEvaMateria, 30 , 105);
		c1.addObject(pcbProEvaluador, 590 , 105);
		dialogsMomeEvaluacion.addObjToDialog(c1, 2, 1);
		dialogsMomeEvaluacion.addLn(3,1,1);
		var c2 = container.create("c2",'Datos del Alumno',1);
		c2.setDimension(817,48);
		c2.setMarginLeftBarTitle(345);
		c2.setPropertyMarco('groove',1,'#7e7e7e');
		c2.setFontTitle('verdana', 11, '#7e7e7e');
		c2.addObject(editsMomeEvaCi, 30, 171);
		c2.addObject(editsMomeEvaNombre, 300, 171);
		c2.addObject(editsMomeEvaApellido, 590, 171);
		dialogsMomeEvaluacion.addObjToDialog(c2, 4, 1);
		dialogsMomeEvaluacion.addLn(5,1,1);
		var c3 = container.create("c3",'Notas del Momento',1);
		c3.setDimension(817,48);
		c3.setMarginLeftBarTitle(340);
		c3.setPropertyMarco('groove',1,'#7e7e7e');
		c3.setFontTitle('verdana', 11, '#7e7e7e');
		c3.addObject(pcbMome1Octubre, 30, 238);
		c3.addObject(pcbMome2Diciembre, 263, 238);
		c3.addObject(pcbMome3Enero, 453, 238);
		c3.addObject(pcbMome4Junio, 673, 238);
		dialogsMomeEvaluacion.addObjToDialog(c3, 6, 1);
		dialogsMomeEvaluacion.addObject(gridsMomeEvaluacion.getObject(), 19, 290);
        dialogsMomeEvaluacion.addObject(imgButtonsMomeEvaGuardar, 55, 637);
        dialogsMomeEvaluacion.addObject(imgButtonsMomeEvaEliminar, 165, 637);
        dialogsMomeEvaluacion.addObject(imgButtonsMomeEvaLimpiar, 275, 637);
        dialogsMomeEvaluacion.addObject(imgButtonsMomeEvaReporte, 385, 637);
	    dialogsMomeEvaluacion.addObject(imgButtonsMomeEvaRepitiente, 495, 637);	
	    dialogsMomeEvaluacion.addObject(imgButtonsMomeEvaBuscar, 605, 637);	
        dialogsMomeEvaluacion.addObject(imgButtonsMomeEvaSalir, 715, 637);
    },
  
    gridsMomeEvaluacion_Init: function() {
        gridsMomeEvaluacion.setFixColRow(false,true);
        gridsMomeEvaluacion.addTitleVectorX(['C.i.','Apellido','Nombre','Posición','Materia','M 1','M 2','M 3','M 4','idPos','idMat','idProf','idAlum','idMatPend']);
        gridsMomeEvaluacion.showData();
        gridsMomeEvaluacion.setSizeCol(1,79);
        gridsMomeEvaluacion.setSizeCol(2,143);
        gridsMomeEvaluacion.setSizeCol(3,143);
        gridsMomeEvaluacion.setSizeCol(4,100);
        gridsMomeEvaluacion.setSizeCol(5,205);
        gridsMomeEvaluacion.setSizeCol(6,35);
        gridsMomeEvaluacion.setSizeCol(7,35);
        gridsMomeEvaluacion.setSizeCol(8,35);
		gridsMomeEvaluacion.setSizeCol(9,35);
		gridsMomeEvaluacion.setSizeCol(10,0);
		gridsMomeEvaluacion.setSizeCol(11,0);
		gridsMomeEvaluacion.setSizeCol(12,0);
		gridsMomeEvaluacion.setSizeCol(13,0);
		gridsMomeEvaluacion.setSizeCol(14,0);
        gridsMomeEvaluacion.hideCol(10);
        gridsMomeEvaluacion.hideCol(11);
        gridsMomeEvaluacion.hideCol(12);
        gridsMomeEvaluacion.hideCol(13);
        gridsMomeEvaluacion.hideCol(14);
    },

    create: function() {
    	dialogsMomeEvaluacion = dialogs.create('dialogsMomeEvaluacion',0,0,859,648,'ESTUDIANTE CON MATERIA PENDIENTE');
    	dialogsMomeEvaluacion.setAdjY(20);
    	pcbMomeEvaOrg = powerComboBox.create('pcbMomeEvaOrg','pcbMomeEvaOrg','Organización (+):',1,102);
    	pcbMomeEvaOrg.setValidEmpty();
    	pcbMomeEvaOrg.addEmptyOption();
    	pcbMomeEvaOrg.enableReadOnlyEditor();
    	pcbMomeEvaSuborg = powerComboBox.create('pcbMomeEvaSuborg','pcbMomeEvaSuborg','Suborganización (^):',1,122);
    	pcbMomeEvaSuborg.setValidEmpty();
    	pcbMomeEvaSuborg.addEmptyOption();
    	pcbMomeEvaSuborg.enableReadOnlyEditor();
    	pcbMomeEvaCarrera = powerComboBox.create('pcbMomeEvaCarrera','pcbMomeEvaCarrera','Carrera (^):',1,88);
    	pcbMomeEvaCarrera.setValidEmpty();
    	pcbMomeEvaCarrera.addEmptyOption();
    	pcbMomeEvaCarrera.enableReadOnlyEditor();
    	pcbMomeEvaPeriodo = powerComboBox.create('pcbMomeEvaPeriodo','pcbMomeEvaPeriodo','Periodo (^):',1,102);
    	pcbMomeEvaPeriodo.setValidEmpty();
    	pcbMomeEvaPeriodo.addEmptyOption();
    	pcbMomeEvaPeriodo.enableReadOnlyEditor();
    	pcbMomeEvaPosicion = powerComboBox.create('pcbMomeEvaPosicion','pcbMomeEvaPosicion','Posición (^):',1,122);
    	pcbMomeEvaPosicion.setValidEmpty();
    	pcbMomeEvaPosicion.addEmptyOption();
    	pcbMomeEvaPosicion.enableReadOnlyEditor();
    	pcbMomeEvaPosicion.setFieldFind(true);
    	pcbMomeEvaPosicion.enableOnChangeToEmptyOption();
    	pcbMomeEvaEdoAlumno = powerComboBox.create('pcbMomeEvaEdoAlumno', 'pcbMomeEvaEdoAlumno', 'Alumno (*):', 1,88);
        pcbMomeEvaEdoAlumno.enableReadOnlyEditor();
        pcbMomeEvaEdoAlumno.addEmptyOption();
        pcbMomeEvaEdoAlumno.setValidEmpty();
        pcbMomeEvaEdoAlumno.setFieldFind(true);
    	pcbMomeEvaMateria = powerComboBox.create('pcbMomeEvaMateria','pcbMomeEvaMateria','Materia (^):',1,102);
    	pcbMomeEvaMateria.setValidEmpty();
    	pcbMomeEvaMateria.addEmptyOption();
    	pcbMomeEvaMateria.enableReadOnlyEditor();
    	pcbMomeEvaMateria.setDataType('string');
    	pcbMomeEvaMateria.setFieldFind(true);
		pcbMomeEvaMateria.setWidthCombo(418);
		pcbMomeEvaMateria.enableOnChangeToEmptyOption();
		pcbProEvaluador = powerComboBox.create('pcbProEvaluador','pcbProEvaluador','Profesor (^):',1,88);
    	pcbProEvaluador.setValidEmpty();
    	pcbProEvaluador.addEmptyOption();
    	pcbProEvaluador.enableReadOnlyEditor();
		editsMomeEvaCi = edits.create('editsMomeEvaCi','editsMomeEvaCi','C.i. (*):',1,102,'normal');
    	editsMomeEvaCi.setValidInteger();
		editsMomeEvaCi.setSizeEdit(149);
		editsMomeEvaCi.setMaxLength(16);
		editsMomeEvaCi.setFieldFind(true);
    	editsMomeEvaApellido = edits.create('editsMomeEvaApellido','editsMomeEvaApellido','Apellido (*):',1,88,'normal');
    	editsMomeEvaApellido.setValidEmpty();	
		editsMomeEvaApellido.setSizeEdit(149);
		editsMomeEvaApellido.setFieldFind(true);
    	editsMomeEvaNombre = edits.create('editsMomeEvaNombre','editsMomeEvaNombre','Nombre (*):',1,122,'normal');
    	editsMomeEvaNombre.setValidEmpty();
		editsMomeEvaNombre.setSizeEdit(149);
		editsMomeEvaNombre.setFieldFind(true);
    	pcbMome1Octubre = powerComboBox.create('pcbMome1Octubre','pcbMome1Octubre','1.- (OCT):',1,102);
    	pcbMome1Octubre.setValidEmpty();
    	pcbMome1Octubre.enableReadOnlyEditor();
    	pcbMome1Octubre.setWidthCombo(31);
    	pcbMome1Octubre.setDataType('string');
		pcbMome2Diciembre = powerComboBox.create('pcbMome2Diciembre','pcbMome2Diciembre','2.- (DIC):',1,102);
    	pcbMome2Diciembre.setValidEmpty();
    	pcbMome2Diciembre.enableReadOnlyEditor();
		pcbMome2Diciembre.setWidthCombo(31);
		pcbMome2Diciembre.setDataType('string');
		pcbMome3Enero = powerComboBox.create('pcbMome3Enero','pcbMome3Enero','3.- (ENE):',1,102);
    	pcbMome3Enero.setValidEmpty();
    	pcbMome3Enero.enableReadOnlyEditor();
		pcbMome3Enero.setWidthCombo(31);
		pcbMome3Enero.setDataType('string');
    	pcbMome4Junio = powerComboBox.create('pcbMome4Junio','pcbMome4Junio','4.- (JUN):',1,100);
        pcbMome4Junio.setValidEmpty();
    	pcbMome4Junio.enableReadOnlyEditor();
		pcbMome4Junio.setWidthCombo(31);
		pcbMome4Junio.setDataType('string');
		gridsMomeEvaluacion = grids.create('gridsMomeEvaluacion',15,14);
    	imgButtonsMomeEvaGuardar = imgButtons.create('imgButtonsMomeEvaGuardar','Guardar.','ok.png');
    	imgButtonsMomeEvaEliminar = imgButtons.create('imgButtonsMomeEvaEliminar','Eliminar','eliminar.png');
    	imgButtonsMomeEvaLimpiar = imgButtons.create('imgButtonsMomeEvaLimpiar','Limpiar','limpiar.png');
    	imgButtonsMomeEvaReporte = imgButtons.create('imgButtonsMomeEvaReporte','Reporte','print.png');
    	imgButtonsMomeEvaBuscar = imgButtons.create('imgButtonsMomeEvaBuscar','Buscar','icono_buscar.png');
    	imgButtonsMomeEvaRepitiente = imgButtons.create('imgButtonsMomeEvaRepitiente','Repitiente','print.png');
    	imgButtonsMomeEvaSalir = imgButtons.create('imgButtonsMomeEvaSalir','Salir','salir.png');
        imgButtonsMomeEvaGuardar.setDimension(90,22);
        imgButtonsMomeEvaEliminar.setDimension(90,22);
        imgButtonsMomeEvaLimpiar.setDimension(90,22);
        imgButtonsMomeEvaReporte.setDimension(90,22);
        imgButtonsMomeEvaBuscar.setDimension(90,22);
        imgButtonsMomeEvaRepitiente.setDimension(90,22);
        imgButtonsMomeEvaSalir.setDimension(90,22);
    },
		
	precargarComboBox: function() {
		var nota = "";
		
		Tool.rstPwrCmb(pcbMome1Octubre);
		Tool.rstPwrCmb(pcbMome2Diciembre);
		Tool.rstPwrCmb(pcbMome3Enero);
		Tool.rstPwrCmb(pcbMome4Junio);
		
		pcbMome1Octubre.addOptionAndSimpleValue(null,'*','*');
		pcbMome2Diciembre.addOptionAndSimpleValue(null,'*','*');
		pcbMome3Enero.addOptionAndSimpleValue(null,'*','*');
		pcbMome4Junio.addOptionAndSimpleValue(null,'*','*');
		
		pcbMome1Octubre.addOptionAndSimpleValue(null,'I','I');
		pcbMome2Diciembre.addOptionAndSimpleValue(null,'I','I');
		pcbMome3Enero.addOptionAndSimpleValue(null,'I','I');
		pcbMome4Junio.addOptionAndSimpleValue(null,'I','I');

		for(var i=1; i<21; i++) {
			nota = (i<10)? '0'+i:i;
			pcbMome1Octubre.addOptionAndSimpleValue(null,nota,nota);
			pcbMome2Diciembre.addOptionAndSimpleValue(null,nota,nota);
			pcbMome3Enero.addOptionAndSimpleValue(null,nota,nota);
			pcbMome4Junio.addOptionAndSimpleValue(null,nota,nota);
		}
	}, 
		
    init: function() {
    	this.create();
    	this.setEvents();
    	this.dialogsMomeEvaluacion_Init();  
    	this.gridsMomeEvaluacion_Init();
		this.precargarComboBox();
    	this.createMWs();
    },

    limpiarFind: function(ix) {
    	editsMomeEvaCi.hideId = -1;
    	gridsMomeEvaluacion.clean();
  		switch (ix) {
		case 1: 
			editsMomeEvaNombre.clear();
			editsMomeEvaApellido.clear();  		
			break;
		case 2: 
			editsMomeEvaCi.clear();
			editsMomeEvaApellido.clear();  		
			break;
		default:
			editsMomeEvaCi.clear();
			editsMomeEvaNombre.clear();
			break;
		} 
		pcbMome1Octubre.setSeletedIndex(0);
		pcbMome2Diciembre.setSeletedIndex(0);
		pcbMome3Enero.setSeletedIndex(0);
		pcbMome4Junio.setSeletedIndex(0);
  	},

	setEvents: function() {
		editsMomeEvaCi.onEnter(this.windowName + ".buscar()");
		editsMomeEvaCi.onChange(this.windowName + ".limpiarFind(1)");
		editsMomeEvaNombre.onEnter(this.windowName + ".buscar()");
		editsMomeEvaNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsMomeEvaApellido.onEnter(this.windowName + ".buscar()");
		editsMomeEvaApellido.onChange(this.windowName + ".limpiarFind(3)");
		pcbMomeEvaOrg.onChange(this.windowName + ".resetElements('org')");
		pcbMomeEvaSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbMomeEvaCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbMomeEvaPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbMomeEvaPosicion.onChange(this.windowName + ".resetElements('pos')");
		pcbMomeEvaMateria.onChange(this.windowName + ".resetElements('mat')");
		gridsMomeEvaluacion.onClickCells(this.windowName + ".setData()");
  		imgButtonsMomeEvaGuardar.onClick(this.windowName + ".coreUpdate('agregar')");
  		imgButtonsMomeEvaEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
  		imgButtonsMomeEvaLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsMomeEvaReporte.onClick(this.windowName + ".reporte('getMateriaPendiente')");  		
  		imgButtonsMomeEvaRepitiente.onClick(this.windowName + ".getReporte('getAlumnoRepiMatePend')");
  		imgButtonsMomeEvaBuscar.onClick(this.windowName + ".buscar()");
        imgButtonsMomeEvaSalir.onClick('dialogsMomeEvaluacion.close()');
    },
    
    onOffReportBtn: function (sts) {
    	if (sts) {
    		imgButtonsMomeEvaReporte.setEnable();
    	}
    	else {
    		gridsMomeEvaluacion.clean();
    		imgButtonsMomeEvaEliminar.setDisable();
    		imgButtonsMomeEvaReporte.setDisable();
    	}
    },
    
	resetElements: function(element) {
		this.onOffReportBtn(false);
		
    	Tool.rstPwrCmb(pcbProEvaluador);
    	editsMomeEvaCi.hideId = -1;
    	editsMomeEvaCi.clear();
    	editsMomeEvaNombre.clear();
    	editsMomeEvaApellido.clear();
    	pcbMome1Octubre.setSelectedIndex(0);
    	pcbMome4Junio.setSelectedIndex(0);
    	pcbMome2Diciembre.setSelectedIndex(0);
    	pcbMome3Enero.setSelectedIndex(0);
        imgButtonsMomeEvaReporte.setDisable();

		if (element == 'org') {
			Tool.rstPwrCmb(pcbMomeEvaSuborg);
	  		Tool.rstPwrCmb(pcbMomeEvaCarrera);
	  		Tool.rstPwrCmb(pcbMomeEvaPeriodo);
			Tool.rstPwrCmb(pcbMomeEvaPosicion);
	  		Tool.rstPwrCmb(pcbMomeEvaMateria);
	    	if (pcbMomeEvaOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsMomeEvaluacion, pcbMomeEvaSuborg, 1, 2, pcbMomeEvaOrg);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbMomeEvaCarrera);
	  		Tool.rstPwrCmb(pcbMomeEvaPeriodo);
			Tool.rstPwrCmb(pcbMomeEvaPosicion);
	  		Tool.rstPwrCmb(pcbMomeEvaMateria);
	    	if (pcbMomeEvaSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsMomeEvaluacion, pcbMomeEvaCarrera, -1, 3, pcbMomeEvaSuborg);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbMomeEvaPeriodo);
			Tool.rstPwrCmb(pcbMomeEvaPosicion);
	  		Tool.rstPwrCmb(pcbMomeEvaMateria);
	    	if (pcbMomeEvaCarrera.getOption() != "")
	    		Tool.getPowerComboDataFnc('MomeEvaluacion.loadEdoAlumno()', 'MantObject', 'getPeriodoXNivelAcad', dialogsMomeEvaluacion, pcbMomeEvaPeriodo, 0, 1, pcbMomeEvaCarrera.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
	  		Tool.rstPwrCmb(pcbMomeEvaMateria);
	    	Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsMomeEvaluacion, pcbMomeEvaPosicion, 0, 1, pcbMomeEvaCarrera.setModeReturnGetText(2));        		
    	} 
    	else if (element == 'pos') {
    		Tool.rstPwrCmb(pcbMomeEvaMateria);
    		Tool.rstPwrCmb(pcbProEvaluador);
    		if (pcbMomeEvaPosicion.getOption() != "")
    			Tool.getPowerComboData('MantObject', 'getMantPensumMateria', dialogsMomeEvaluacion, pcbMomeEvaMateria, 0, 1, pcbMomeEvaCarrera, pcbMomeEvaPosicion);
    	} 
    	else if (element == 'mat') {
    		Tool.rstPwrCmb(pcbProEvaluador);
    		if (pcbMomeEvaMateria.getOption() != "")
    			Tool.getPowerComboData('MantObject', 'getProfesorMateria', dialogsMomeEvaluacion, pcbProEvaluador, 0, 1, pcbMomeEvaMateria);  	
    	} 
	},

	loadEdoAlumno : function() {
		Tool.getPowerComboDataFnc('pcbMomeEvaEdoAlumno.setSelectedIndex(1)', 'MantObject', 'getMantEstPersona', dialogsMomeEvaluacion, pcbMomeEvaEdoAlumno, 0, 1);
	},
	
	getReporte: function(jsonReporte) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbMomeEvaOrg.valid(dialogsMomeEvaluacion))
			if (pcbMomeEvaSuborg.valid(dialogsMomeEvaluacion))
				if (pcbMomeEvaCarrera.valid(dialogsMomeEvaluacion))
			  		if (pcbMomeEvaPeriodo.valid(dialogsMomeEvaluacion)) {
			  			rlx.addStr('reg', jsonReporte);
			  			rlx.add('reg', pcbMomeEvaPeriodo);
			  			rlx.add('reg', pcbMomeEvaCarrera.setModeReturnGetText(2));
			  			Tool.cnnSrv("MantObject", "getMateriaPendiente", this.windowName + ".reporte('" + jsonReporte + "')", rlx);
			  		}
	},

	reporte: function(jsonReporte) {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		var rep = new Report('portrait');
		rep.setPositionIcon(750,22);
		//rep.setHeadImage("images/amarillo.jpg",false);
		//rep.setNoRepeatHead();
		
		var jsn = json(jsonReporte);
		jsn.fields[0]='Cédula';
		jsn.fields[1]='Apellido';
		jsn.fields[2]='Nombre';
		jsn.fields[3]='Posición';
		jsn.fields[4]='Materia';
		jsn.fields[5]='M 1';
		jsn.fields[6]='M 2';
		jsn.fields[7]='M 3';
		jsn.fields[8]='M 4';
		
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','bold');
		rep.addBar(0,0,1128,68,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 20, 'ORGANIZACION:          '+pcbMomeEvaOrg.getOption(),false);
		rep.addText(20, 38, 'SUBORGANIZACION:  '+pcbMomeEvaSuborg.getOption(),false);
		rep.addText(20, 56, 'CARRERA:                    '+pcbMomeEvaCarrera.getOption(),false);
		rep.addText(450, 20, 'PERIODO:   '+pcbMomeEvaPeriodo.getOption(),false);
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),12,'helvetica','bold');
		rep.addBar(0,72,1128,110,rep.getRGBAObj(187,196,238,0.8),false);
		
		if (jsonReporte == 'getAlumnoRepiMatePend')
			rep.addText(220, 97, 'ALUMNO REPITIENTE POR MATERIA PENDIENTE',false);
		else
			rep.addText(280, 97, 'ALUMNO CON MATERIA PENDIENTE',false);
		
		//************** TABLA PARA FILAS REPETIDAS ****************
		var j = new JsonProcess(jsn, 1, true, rep);
		j.setFontHead(10, 'helvetica', 'bold');
		j.setHideCol([true,true,true,true,false,false,false,false,false,false]);
		j.setFontCell(7, 'helvetica', 'normal');
		j.setDimension(792,20);
		j.setInitCoord(0,115);
		j.setColWidths([24,65,137,138,70,215,35,35,35,35]); 
		j.create();
		//**********************************************************
		rep.render();
		setTimeout(rep.previewHTML(),1000);	
	},
	
	buscar: function() {
		this.onOffReportBtn(false);
		if ((editsMomeEvaCi.getValue() == '' && editsMomeEvaNombre.getValue() == '' && editsMomeEvaApellido.getValue() == '') || (editsMomeEvaCi.getValue() != '' && editsMomeEvaNombre.getValue() != '' && editsMomeEvaApellido.getValue() != '')) {
	        if (pcbMomeEvaOrg.valid(dialogsMomeEvaluacion))
				if (pcbMomeEvaSuborg.valid(dialogsMomeEvaluacion))
					if (pcbMomeEvaCarrera.valid(dialogsMomeEvaluacion))
				  		if (pcbMomeEvaPeriodo.valid(dialogsMomeEvaluacion))
				  			Tool.getGridData('MantObject', 'getMateriaPendiente', dialogsMomeEvaluacion, gridsMomeEvaluacion, this.windowName + '.onOffReportBtn(true)', new MiniDataSet('getMateriaPendiente', 'string', false), pcbMomeEvaPeriodo, pcbMomeEvaCarrera.setModeReturnGetText(2), pcbMomeEvaMateria, new MiniDataSet(editsMomeEvaCi.hideId, 'int', true), pcbMomeEvaPosicion, pcbMomeEvaEdoAlumno)
		}
		else if (editsMomeEvaCi.getValue() != '' || editsMomeEvaNombre.getValue() != '' || editsMomeEvaApellido.getValue() != '') {
			ResuBusqueda.setObjectExtFnc(editsMomeEvaCi, editsMomeEvaNombre, editsMomeEvaApellido, this.windowName + '.buscar()');
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsMomeEvaluacion, gridsResuBusqueda, 'ResuBusqueda', editsMomeEvaCi, editsMomeEvaCi, editsMomeEvaNombre, editsMomeEvaNombre, editsMomeEvaApellido, editsMomeEvaApellido);
		}
	},
	
	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsMomeEvaluacion, pcbMomeEvaOrg, 0, 1, json('getData'));
		Tool.getContext(dialogsMomeEvaluacion, pcbMomeEvaOrg, pcbMomeEvaSuborg, pcbMomeEvaCarrera, this.windowName + ".resetElements('carr')");
	},
    
  	limpiar: function() {
  		this.idMatePend = -1;
  		pcbMomeEvaOrg.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbMomeEvaSuborg);
  		Tool.rstPwrCmb(pcbMomeEvaCarrera);
  		Tool.rstPwrCmb(pcbMomeEvaPeriodo);
  		Tool.rstPwrCmb(pcbMomeEvaPosicion);
  		Tool.rstPwrCmb(pcbMomeEvaEdoAlumno);
  		Tool.rstPwrCmb(pcbMomeEvaMateria);
  		Tool.rstPwrCmb(pcbProEvaluador);
  		editsMomeEvaCi.hideId = -1;
		editsMomeEvaCi.clear();
        editsMomeEvaNombre.clear();
        editsMomeEvaApellido.clear();
        pcbMome1Octubre.setSelectedIndex(1);
        pcbMome2Diciembre.setSelectedIndex(1);
        pcbMome3Enero.setSelectedIndex(1);
        pcbMome4Junio.setSelectedIndex(1);
		gridsMomeEvaluacion.clean();
  		this.onOffReportBtn(false);
  		dialogsMomeEvaluacion.setMsg("");
  		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
	},
	
    setData : function() {
        if (gridsMomeEvaluacion.getDataCell(1) != "") {
        	pcbMomeEvaPosicion.findOption(gridsMomeEvaluacion.getDataCell(10));
        	this.getMateria();
        	editsMomeEvaCi.hideId = gridsMomeEvaluacion.getDataCell(13)
			this.idMatePend = gridsMomeEvaluacion.getDataCell(14);
        	editsMomeEvaCi.setValue(gridsMomeEvaluacion.getDataCell(1));
        	editsMomeEvaApellido.setValue(gridsMomeEvaluacion.getDataCell(2));
        	editsMomeEvaNombre.setValue(gridsMomeEvaluacion.getDataCell(3));
            pcbMome1Octubre.findOption(gridsMomeEvaluacion.getDataCell(6));
            pcbMome2Diciembre.findOption(gridsMomeEvaluacion.getDataCell(7));
            pcbMome3Enero.findOption(gridsMomeEvaluacion.getDataCell(8));
            pcbMome4Junio.findOption(gridsMomeEvaluacion.getDataCell(9));  	
	  		imgButtonsMomeEvaEliminar.setEnable();
        }     			
	},
	
	getMateria: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		rlx.add('reg', pcbMomeEvaCarrera);
		rlx.add('reg', pcbMomeEvaPosicion);
		Tool.cnnSrv("MantObject", "getMantPensumMateria", this.windowName + ".loadMateria()", rlx);
	},
	
	loadMateria: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		Tool.loadPowerComboData(dialogsMomeEvaluacion, pcbMomeEvaMateria, 0, 1, json('getMantPensumMateriaSinPeriodo'));
		pcbMomeEvaMateria.findOption(gridsMomeEvaluacion.getDataCell(11));
		
		rlx.add('reg', pcbMomeEvaMateria);
		Tool.cnnSrv("MantObject", "getProfesorMateria", this.windowName + ".loadProf()", rlx);
	},

	loadProf: function() {
		Tool.loadPowerComboData(dialogsMomeEvaluacion, pcbProEvaluador, 0, 1, json('getProfesor'));
    	pcbProEvaluador.findOption(gridsMomeEvaluacion.getDataCell(12));
	},
	
	limpiarCoreUpdate: function() {
  		this.idMatePend = -1;
  		dialogsMomeEvaluacion.setMsg("");
        pcbMome1Octubre.setSelectedIndex(0);
        pcbMome2Diciembre.setSelectedIndex(0);
        pcbMome3Enero.setSelectedIndex(0);
        pcbMome4Junio.setSelectedIndex(0);
  		gridsMomeEvaluacion.clean();
  		this.buscar();
  	},

  	coreUpdate: function(methodName) {
        var rlx = xmlStructs.createRecordList("rlx");

        if (pcbMomeEvaOrg.valid(dialogsMomeEvaluacion))
			if (pcbMomeEvaSuborg.valid(dialogsMomeEvaluacion))
				if (pcbMomeEvaCarrera.valid(dialogsMomeEvaluacion))
					if (pcbMomeEvaPeriodo.valid(dialogsMomeEvaluacion))
						if (pcbMomeEvaPosicion.valid(dialogsMomeEvaluacion))
							if (pcbMomeEvaMateria.valid(dialogsMomeEvaluacion))
								if (pcbProEvaluador.valid(dialogsMomeEvaluacion))
									if (editsMomeEvaCi.valid(dialogsMomeEvaluacion))
										if (editsMomeEvaApellido.valid(dialogsMomeEvaluacion))
											if (editsMomeEvaNombre.valid(dialogsMomeEvaluacion)) {
												if (methodName == 'eliminar')
													rlx.addInt('reg', this.idMatePend);
												else {
													rlx.add('reg', pcbMomeEvaPeriodo);
													rlx.add('reg', pcbMomeEvaMateria);
													rlx.addInt('reg', editsMomeEvaCi.hideId);
													rlx.add('reg', pcbProEvaluador);
													rlx.add('reg', pcbMome1Octubre);
													rlx.add('reg', pcbMome2Diciembre);
													rlx.add('reg', pcbMome3Enero);
													rlx.add('reg', pcbMome4Junio);
													if (this.idMatePend != -1) {
														methodName = 'modificar';
														rlx.addInt('reg', this.idMatePend);
													}
												}
												Tool.cnnSrv('MantObject', methodName + 'MateriaPendiente', this.windowName + '.limpiarCoreUpdate()', rlx);
											}
  	}
};