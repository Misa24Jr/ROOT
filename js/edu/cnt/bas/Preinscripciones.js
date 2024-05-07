var dialogsPreinscripciones = new Object();
var containerPreinscripcion1 = new Object();					
var containerPreinscripcion2 = new Object();
var containerPreinscripcion3 = new Object();
var containerPreinscripcion4 = new Object();
var pcbPreiCarrera = new Object();
var pcbPreiPeriodo = new Object();
var pcbPreiPosicion = new Object();
var pcbPreiAlumno = new Object();
var pcbPreiSeccion = new Object();
var editsPresFemenino = new Object();
var editsPresMasculino = new Object();
var editsPresExtranjero = new Object();
var editsPresVenezolano = new Object();
var editsPresTotal = new Object();
var pcbPreiCarrera2 = new Object();
var editsPresCedAlumno = new Object();
var pcbPreiPeriodo2 = new Object();
var pcbPreiPosicion2 = new Object();
var pcbPreiSeccion2 = new Object();
var editsPresFemenino2 = new Object();
var editsPresMasculino2 = new Object();
var editsPresExtranjero2 = new Object();
var editsPresVenezolano2 = new Object();
var editsPresTotal2 = new Object();
var customGridPreiPreinscritos = new Object();
var imgButtonsPreiClasificar = new Object();
var imgButtonsPreiInscribir = new Object();
var imgButtonsPreiEliminar = new Object();
var imgButtonsPreiLimpiar = new Object();
var imgButtonsPreiReporte = new Object();
var imgButtonsPreiBuscar = new Object();
var imgButtonsPreiSalir = new Object();
var mwPreinscripciones = new Object();// minWindow

var Preinscripciones = {
	windowName : 'Preinscripciones',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsPreinscripciones.isByClean())
 			this.limpiar();			
		dialogsPreinscripciones.show();
	},
	
	hide : function() {
		dialogsPreinscripciones.hide();
	},
	
	createMWs : function() {
		mwPreinscripciones = desktop.addMinWindow('Plan.Inscrip.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsPreinscripciones.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsPreinscripciones_Init : function() {
        dialogsPreinscripciones.setMinimizeXY(0,0);
		dialogsPreinscripciones.setCenterScreen();
		dialogsPreinscripciones.addSpace(1,0,40);
		dialogsPreinscripciones.addLn(1,1,1);
        dialogsPreinscripciones.setHeightCell(1,1,30);
        dialogsPreinscripciones.addObject(containerPreinscripcion1,20,40);
		dialogsPreinscripciones.addObject(containerPreinscripcion4,20,100);
        dialogsPreinscripciones.addObject(containerPreinscripcion2,20,158);
        dialogsPreinscripciones.addObject(containerPreinscripcion3,20,218);
        containerPreinscripcion4.setFontTitle('verdana', 12, '#7e7e7e');
        containerPreinscripcion3.setFontTitle('verdana', 12, '#7e7e7e');
        containerPreinscripcion2.setFontTitle('verdana', 12, '#7e7e7e');
        containerPreinscripcion1.setFontTitle('verdana', 12, '#7e7e7e');        
		dialogsPreinscripciones.addObject(pcbPreiAlumno,35, 49);
        dialogsPreinscripciones.addObject(pcbPreiCarrera,264, 49);
		dialogsPreinscripciones.addObject(pcbPreiPeriodo,35, 72);
        dialogsPreinscripciones.addObject(pcbPreiPosicion,264, 72);
		dialogsPreinscripciones.addObject(pcbPreiSeccion,507, 72);
		dialogsPreinscripciones.addObject(editsPresFemenino,35,112);
        dialogsPreinscripciones.addObject(editsPresMasculino,190,112);
		dialogsPreinscripciones.addObject(editsPresExtranjero,345,112);
		dialogsPreinscripciones.addObject(editsPresVenezolano,501,112);
		dialogsPreinscripciones.addObject(editsPresTotal,658,112);
		dialogsPreinscripciones.addObject(pcbPreiCarrera2,264,168);
		dialogsPreinscripciones.addObject(editsPresCedAlumno,35,191);
        dialogsPreinscripciones.addObject(pcbPreiPeriodo2,35,168);
        dialogsPreinscripciones.addObject(pcbPreiPosicion2,264, 191);
        dialogsPreinscripciones.addObject(pcbPreiSeccion2,507, 191);
		dialogsPreinscripciones.addObject(editsPresFemenino2,35, 229);
        dialogsPreinscripciones.addObject(editsPresMasculino2,190, 229);
		dialogsPreinscripciones.addObject(editsPresExtranjero2,345, 229);
        dialogsPreinscripciones.addObject(editsPresVenezolano2,501, 229);
		dialogsPreinscripciones.addObject(editsPresTotal2,658, 229);
		dialogsPreinscripciones.addObject(customGridPreiPreinscritos, 20, 270);
		dialogsPreinscripciones.addObject(imgButtonsPreiClasificar,22, 685);
		dialogsPreinscripciones.addObject(imgButtonsPreiInscribir,128, 685);
		dialogsPreinscripciones.addObject(imgButtonsPreiEliminar,234, 685);
		dialogsPreinscripciones.addObject(imgButtonsPreiLimpiar,340, 685);
        dialogsPreinscripciones.addObject(imgButtonsPreiReporte,446, 685);
        dialogsPreinscripciones.addObject(imgButtonsPreiBuscar,552, 685);
		dialogsPreinscripciones.addObject(imgButtonsPreiSalir,658, 685);
    },
	
  	create : function() {
  		dialogsPreinscripciones = dialogs.create('dialogsPreinscripciones',0,0,770,693,'PLANIFICAR INSCRIPCIÓN');
		dialogsPreinscripciones.setAdjY(20);
  		pcbPreiCarrera = powerComboBox.create('pcbPreiCarrera','pcbPreiCarrera','Carrera (+):',1,77);
		pcbPreiCarrera.setValidEmpty();
    	pcbPreiCarrera.addEmptyOption();
    	pcbPreiCarrera.enableReadOnlyEditor();
		pcbPreiCarrera.setWidthCombo(374);
		pcbPreiCarrera.setFieldFind(true);
		pcbPreiAlumno = powerComboBox.create('pcbPreiAlumno','pcbPreiAlumno','Estudiante (+):',1,90);
		pcbPreiAlumno.setValidEmpty();
    	pcbPreiAlumno.addEmptyOption();
    	pcbPreiAlumno.enableReadOnlyEditor();
    	pcbPreiAlumno.addOptionAndSimpleValue(null, 'Regular', '1');
    	pcbPreiAlumno.addOptionAndSimpleValue(null, 'Nuevo', '2');
    	pcbPreiAlumno.setWidthCombo(106);
		pcbPreiPeriodo = powerComboBox.create('pcbPreiPeriodo','pcbPreiPeriodo','Periodo (+):',1,90);
		pcbPreiPeriodo.setValidEmpty();
    	pcbPreiPeriodo.addEmptyOption();
    	pcbPreiPeriodo.enableReadOnlyEditor();
    	pcbPreiPeriodo.setWidthCombo(106);
        pcbPreiPosicion = powerComboBox.create('pcbPreiPosicion','pcbPreiPosicion','Posición (+):',1,77); 
		pcbPreiPosicion.setValidEmpty();
    	pcbPreiPosicion.addEmptyOption();
    	pcbPreiPosicion.enableReadOnlyEditor();	
    	pcbPreiPosicion.setFieldFind(true);
		pcbPreiSeccion = powerComboBox.create('pcbPreiSeccion','pcbPreiSeccion','Sección (*):',1,80);
		pcbPreiSeccion.setValidEmpty();
    	pcbPreiSeccion.addEmptyOption();
    	pcbPreiSeccion.enableReadOnlyEditor();
    	pcbPreiSeccion.setDataType('string');
    	pcbPreiSeccion.setFieldFind(true);
        editsPresFemenino = edits.create('editsPresFemenino','editsPresFemenino','Femenino:',1,68,'normal');
  		editsPresFemenino.setValidEmpty();
        editsPresFemenino.setSizeEdit(40);
        editsPresFemenino.readOnly(true);
		editsPresMasculino = edits.create('editsPresMasculino','editsPresMasculino','Masculino:',1,70,'normal');
  		editsPresMasculino.setValidEmpty();
        editsPresMasculino.setSizeEdit(40);
        editsPresMasculino.readOnly(true);
		editsPresExtranjero = edits.create('editsPresExtranjero','editsPresExtranjero','Extranjero:',1,70,'normal');
        editsPresExtranjero.setValidEmpty();
        editsPresExtranjero.setSizeEdit(40);
		editsPresExtranjero.readOnly(true);
		editsPresVenezolano = edits.create('editsPresVenezolano','editsPresVenezolano','Venezolano:',1,75,'normal');
  		editsPresVenezolano.setValidEmpty();
        editsPresVenezolano.setSizeEdit(40);
		editsPresVenezolano.readOnly(true);
		editsPresTotal = edits.create('editsPresTotal','editsPresTotal','Total:',1,38,'normal');
		editsPresTotal.setValidEmpty();
		editsPresTotal.setSizeEdit(40);
		editsPresTotal.readOnly(true);	
		pcbPreiCarrera2 = powerComboBox.create('pcbPreiCarrera2','pcbPreiCarrera2','Carrera (+):',1,77); 
		pcbPreiCarrera2.setValidEmpty();
    	pcbPreiCarrera2.addEmptyOption();
		pcbPreiCarrera2.enableReadOnlyEditor();	
		pcbPreiCarrera2.setWidthCombo(374);
		pcbPreiCarrera2.setFieldFind(true);
		editsPresCedAlumno = edits.create('editsPresCedAlumno','editsPresCedAlumno','Cedula (*):',1,90,'normal');
		editsPresCedAlumno.setValidInteger();
  		editsPresCedAlumno.setFieldFind(true);
		editsPresCedAlumno.setSizeEdit(127);
		pcbPreiPeriodo2 = powerComboBox.create('pcbPreiPeriodo2','pcbPreiPeriodo2','Periodo (+):',1,90);
		pcbPreiPeriodo2.setValidEmpty();
    	pcbPreiPeriodo2.addEmptyOption();
    	pcbPreiPeriodo2.enableReadOnlyEditor();
    	pcbPreiPeriodo2.setWidthCombo(106);
        pcbPreiPosicion2 = powerComboBox.create('pcbPreiPosicion2','pcbPreiPosicion2','Posición (+):',1,77);
		pcbPreiPosicion2.setValidEmpty();
    	pcbPreiPosicion2.addEmptyOption();
    	pcbPreiPosicion2.enableReadOnlyEditor();
    	pcbPreiPosicion2.setFieldFind(true);
        pcbPreiSeccion2 = powerComboBox.create('pcbPreiSeccion2','pcbPreiSeccion2','Sección (^):',1,80);
		pcbPreiSeccion2.setValidEmpty();
    	pcbPreiSeccion2.addEmptyOption();
    	pcbPreiSeccion2.enableReadOnlyEditor();
    	pcbPreiSeccion2.setDataType('string');
    	pcbPreiSeccion2.setFieldFind(true);
		editsPresFemenino2 = edits.create('editsPresFemenino2','editsPresFemenino2','Femenino:',1,68,'normal');
		editsPresFemenino2.setValidEmpty();
		editsPresFemenino2.setSizeEdit(40);
		editsPresFemenino2.readOnly(true);	
		editsPresMasculino2 = edits.create('editsPresMasculino2','editsPresMasculino2','Masculino:',1,70,'normal');
		editsPresMasculino2.setValidEmpty();
		editsPresMasculino2.setSizeEdit(40);
		editsPresMasculino2.readOnly(true);	
		editsPresExtranjero2 = edits.create('editsPresExtranjero2','editsPresExtranjero2','Extranjero:',1,70,'normal');
		editsPresExtranjero2.setValidEmpty();
		editsPresExtranjero2.setSizeEdit(40);
		editsPresExtranjero2.readOnly(true);	
		editsPresVenezolano2 = edits.create('editsPresVenezolano2','editsPresVenezolano2','Venezolano:',1,75,'normal');
		editsPresVenezolano2.setValidEmpty();
		editsPresVenezolano2.setSizeEdit(40);
		editsPresVenezolano2.readOnly(true);	
		editsPresTotal2	= edits.create('editsPresTotal2','editsPresTotal2','Total:',1,38,'normal');
		editsPresTotal2.setValidEmpty();
		editsPresTotal2.setSizeEdit(40);
		editsPresTotal2.readOnly(true);
		imgButtonsPreiClasificar = imgButtons.create('imgButtonsPreiClasificar','Preinscribir','ok.png');
		imgButtonsPreiInscribir = imgButtons.create('imgButtonsPreiInscribir','Inscribir','ok.png');
		imgButtonsPreiEliminar = imgButtons.create('imgButtonsPreiEliminar','Deshacer','eliminar.png');
		imgButtonsPreiLimpiar = imgButtons.create('imgButtonsPreiLimpiar','Limpiar','limpiar.png');
		imgButtonsPreiReporte = imgButtons.create('imgButtonsPreiReporte','Reporte','print.png');
		imgButtonsPreiBuscar = imgButtons.create('imgButtonsPreiBuscar','Buscar','icono_buscar.png');
		imgButtonsPreiSalir = imgButtons.create('imgButtonsPreiSalir','Salir','salir.png');
        imgButtonsPreiClasificar.setDimension(90,22);
        imgButtonsPreiInscribir.setDimension(90,22);
        imgButtonsPreiEliminar.setDimension(90,22);
        imgButtonsPreiLimpiar.setDimension(90,22);
		imgButtonsPreiReporte.setDimension(90,22);
        imgButtonsPreiBuscar.setDimension(90,22);
        imgButtonsPreiSalir.setDimension(90,22);
       	customGridPreiPreinscritos = customGrid.create('cg2','CLASIFICACIÓN',356,731,22,15);
		customGridPreiPreinscritos.loadColumnTypeStruct(null, [customGrid.TYPE_COLUMN_CHECK,
		                                                        customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT, 
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT],
																[25,20,95,235,50,100,87,70,30,0]);
		customGridPreiPreinscritos.addTitleVectorX(['','Nº','Cédula','Estudiante','Sx/Ed','Periodo','Posición','Sección','Edo.','idPers']);
		customGridPreiPreinscritos.setSelectedLnMode(0);
		customGridPreiPreinscritos.addObjToTitle(0, customGridPreiPreinscritos.createTitleObj(0,'input','checkbox'));
		customGridPreiPreinscritos.activeCheckOnOff(0);
		customGridPreiPreinscritos.hideCol(9); 
		for (var i=1; i<9; i++)
			customGridPreiPreinscritos.setReadOnlyCol(i, true);
		containerPreinscripcion1 = container.create("containerPreinscripcion1",'Origen',4);
        containerPreinscripcion1.setDimension(730,59);
		containerPreinscripcion4 = container.create("containerPreinscripcion4",'Cantidad',4);
        containerPreinscripcion4.setDimension(730,39);
        containerPreinscripcion2 = container.create("containerPreinscripcion2",'Destino',4);
        containerPreinscripcion2.setDimension(730,59);
        containerPreinscripcion3 = container.create("containerPreinscripcion3",'Cantidad',4);
        containerPreinscripcion3.setDimension(730,39);
  	},

  	init : function() {
  		this.create();
  		this.setEvents();
  		this.dialogsPreinscripciones_Init();
  		this.createMWs();
  	},

	limpiarCed : function() {
		pcbPreiCarrera.setSelectedIndex(0);
		pcbPreiPosicion.setSelectedIndex(0);
		pcbPreiSeccion.setSelectedIndex(0);
		this.limpiarCantidad(1);
		pcbPreiCarrera2.setSelectedIndex(0);
		pcbPreiPosicion2.setSelectedIndex(0);
		pcbPreiSeccion2.setSelectedIndex(0);
		this.limpiarCantidad(2);
  	},

	setEvents: function() {
		pcbPreiCarrera.onChange(this.windowName + ".resetElements('car')");
		pcbPreiAlumno.onChange(this.windowName + ".resetElements('cond')");
		pcbPreiPosicion.onChange(this.windowName + ".resetElements('pos1')");
		pcbPreiSeccion.onChange(this.windowName + ".validBuscar()");
		pcbPreiCarrera2.onChange(this.windowName + ".resetElements('car2')");
		editsPresCedAlumno.onEnter(this.windowName + ".validBuscar()");
		editsPresCedAlumno.onChange(this.windowName + ".limpiarCed()");
		pcbPreiPosicion2.onChange(this.windowName + ".resetElements('pos2')");
		pcbPreiSeccion2.onChange(this.windowName + ".validBuscar()");
		imgButtonsPreiClasificar.onClick(this.windowName+".coreUpdate(1)");
		imgButtonsPreiInscribir.onClick(this.windowName+".coreUpdate(2)");
		imgButtonsPreiEliminar.onClick(this.windowName+".coreUpdate(0)");
		imgButtonsPreiLimpiar.onClick(this.windowName+".limpiar()");
		imgButtonsPreiReporte.onClick(this.windowName + ".reporte()");
		imgButtonsPreiBuscar.onClick(this.windowName + ".validBuscar()");
		imgButtonsPreiSalir.onClick("dialogsPreinscripciones.close()");
	},

	validBuscar: function() {
		if (pcbPreiPeriodo.valid(dialogsPreinscripciones))
			if (pcbPreiPeriodo2.valid(dialogsPreinscripciones)) {
				if (editsPresCedAlumno.getValue() == '') {
					if (pcbPreiCarrera.valid(dialogsPreinscripciones))
						if (pcbPreiPeriodo.valid(dialogsPreinscripciones))
							if (pcbPreiPosicion.valid(dialogsPreinscripciones))
								this.buscar();
				}
				else
					this.buscar();
			}
	},
	
	buscar:  function() {
		var rlx = xmlStructs.createRecordList("rlx");
		
		this.limpiarCantidad(1);
		this.limpiarCantidad(2);
		imgButtonsPreiReporte.setDisable();
		rlx.add('reg', pcbPreiPeriodo);
		rlx.add('reg', pcbPreiCarrera.setModeReturnGetText(0));
		rlx.add('reg', pcbPreiCarrera.setModeReturnGetText(0));
		rlx.add('reg', pcbPreiPosicion);
		rlx.add('reg', pcbPreiPosicion);
		if (pcbPreiAlumno.getText() == 1) {
			rlx.add('reg', pcbPreiSeccion);
			rlx.add('reg', pcbPreiSeccion);
		}
		rlx.add('reg', editsPresCedAlumno);
		rlx.add('reg', editsPresCedAlumno);
		rlx.add('reg', pcbPreiPeriodo2);
		rlx.add('reg', pcbPreiCarrera2.setModeReturnGetText(0));
		rlx.add('reg', pcbPreiCarrera2.setModeReturnGetText(0));
		rlx.add('reg', pcbPreiPosicion2);
		rlx.add('reg', pcbPreiPosicion2);
		rlx.add('reg', pcbPreiSeccion2);
		rlx.add('reg', pcbPreiSeccion2);
		if (pcbPreiAlumno.getText() == 1) 
			Tool.cnnSrv("MantObject", "getPreinscripto", this.windowName + ".loadDataGrid()", rlx);
		else
			Tool.cnnSrv("MantObject", "getPreinscriptoSeccionNueIng", this.windowName + ".loadDataGrid()", rlx);
	},

	loadDataGrid: function() {
		imgButtonsPreiReporte.setEnable();

		if (pcbPreiAlumno.getText() == 1) { 
			editsPresFemenino.setValue(json('getPreinscriptoCantOrigen').data[0][0]);
			editsPresMasculino.setValue(json('getPreinscriptoCantOrigen').data[1][0]);
			editsPresExtranjero.setValue(json('getPreinscriptoCantOrigen').data[2][0]);
			editsPresVenezolano.setValue(json('getPreinscriptoCantOrigen').data[3][0]);
			editsPresTotal.setValue(json('getPreinscriptoCantOrigen').data[4][0]);
		}
		else {
			editsPresFemenino.setValue(json('getPreinscriptoNueIngCantOrigen').data[0][0]);
			editsPresMasculino.setValue(json('getPreinscriptoNueIngCantOrigen').data[1][0]);
			editsPresExtranjero.setValue(json('getPreinscriptoNueIngCantOrigen').data[2][0]);
			editsPresVenezolano.setValue(json('getPreinscriptoNueIngCantOrigen').data[3][0]);
			editsPresTotal.setValue(json('getPreinscriptoNueIngCantOrigen').data[4][0]);
		}
		editsPresFemenino2.setValue(json('getPreinscriptoCantDestino').data[0][0]);
		editsPresMasculino2.setValue(json('getPreinscriptoCantDestino').data[1][0]);
		editsPresExtranjero2.setValue(json('getPreinscriptoCantDestino').data[2][0]);
		editsPresVenezolano2.setValue(json('getPreinscriptoCantDestino').data[3][0]);
		editsPresTotal2.setValue(json('getPreinscriptoCantDestino').data[4][0]);
		customGridPreiPreinscritos.clean();
		if (pcbPreiAlumno.getText() == 1) 
			Tool.loadGridData(dialogsPreinscripciones, customGridPreiPreinscritos, false, json('getPreinscripto'));
		else
			Tool.loadGridData(dialogsPreinscripciones, customGridPreiPreinscritos, false, json('getPreinscriptoSeccionNueIng'));
	},

	resetElements: function(element) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (element == 'car') {
			editsPresCedAlumno.clear();
			Tool.rstPwrCmb(pcbPreiSeccion);
			Tool.rstPwrCmb(pcbPreiSeccion2);
			rlx.add('reg', pcbPreiCarrera.setModeReturnGetText(0));
			rlx.add('reg', pcbPreiCarrera.setModeReturnGetText(2));
			Tool.cnnSrv('MantObject', 'getPreinscriptoPerPos', this.windowName + '.loadPeriodoPosicion()',rlx);
		}
		else if (element == 'car2') {
			Tool.rstPwrCmb(pcbPreiSeccion2);
			rlx.add('reg', pcbPreiCarrera2.setModeReturnGetText(0));
			rlx.add('reg', pcbPreiCarrera2.setModeReturnGetText(2));
			Tool.cnnSrv('MantObject', 'getPreinscriptoPerPos', this.windowName + '.loadPeriodoPosicion2()',rlx);
		}
		else if (element == 'pos1') {
			Tool.rstPwrCmb(pcbPreiSeccion);
			this.limpiarCantidad(1);
			if (pcbPreiAlumno.getText() == 1)
				Tool.getPowerComboData('MantObject', 'getMantProyAulaSeccion', dialogsPreinscripciones, pcbPreiSeccion, 0, 1, pcbPreiCarrera.setModeReturnGetText(0), pcbPreiPeriodo, pcbPreiPosicion);
			else 
				this.buscar();		 		    		
		} 
		else if (element == 'pos2') {
			Tool.rstPwrCmb(pcbPreiSeccion2);
			this.limpiarCantidad(2);
			Tool.getPowerComboData('MantObject', 'getMantProyAulaSeccion', dialogsPreinscripciones, pcbPreiSeccion2, 0, 1, pcbPreiCarrera2.setModeReturnGetText(0), pcbPreiPeriodo2, pcbPreiPosicion2);        		
		} 
		else if (element == 'sec2') {
			this.limpiarCantidad(2);
			imgButtonsPreiReporte.setDisable();
			
			rlx.add('reg', pcbPreiPeriodo2);
			rlx.add('reg', pcbPreiCarrera.setModeReturnGetText(0));
			rlx.add('reg', pcbPreiPosicion2);
			rlx.add('reg', pcbPreiSeccion2);
			Tool.cnnSrv("MantObject", "getPreinscripto", this.windowName + ".loadDataGridAluIns()", rlx);
		}
		else if (element == 'cond') {
			if (pcbPreiAlumno.getText() == 1) {
				pcbPreiPeriodo.setSelectedIndex(2);
				pcbPreiPeriodo2.setSelectedIndex(1);
				pcbPreiSeccion.show();
			} 
			else {
				pcbPreiSeccion.hide();
				pcbPreiPeriodo.setSelectedIndex(1);
			}
			pcbPreiPeriodo2.setSelectedIndex(1);
			pcbPreiPosicion.setSelectedIndex(0);
			pcbPreiPosicion2.setSelectedIndex(0);
			Tool.rstPwrCmb(pcbPreiSeccion);
			this.limpiarCantidad(1);
		}
	},

	loadPeriodoPosicion: function() {
		Tool.loadPowerComboData(dialogsPreinscripciones, pcbPreiPosicion, 0, 1, json('getMantPensumPosicion'));
	},

	loadPeriodoPosicion2: function() {
		Tool.loadPowerComboData(dialogsPreinscripciones, pcbPreiPosicion2, 0, 1, json('getMantPensumPosicion'));
	},

	limpiarCantidad: function(panel) {
		customGridPreiPreinscritos.clean();
		
		if (panel == 1) {
			editsPresFemenino.clear();
			editsPresMasculino.clear();
			editsPresExtranjero.clear();
			editsPresVenezolano.clear();
			editsPresTotal.clear();
		}
		else {
			editsPresFemenino2.clear();
			editsPresMasculino2.clear();
			editsPresExtranjero2.clear();
			editsPresVenezolano2.clear();
			editsPresTotal2.clear();
		}
	},

  	limpiar : function() {
  		dialogsPreinscripciones.setMsg("");
  		Tool.rstPwrCmb(pcbPreiCarrera);
  		pcbPreiAlumno.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbPreiPeriodo);
  		Tool.rstPwrCmb(pcbPreiPosicion);
  		Tool.rstPwrCmb(pcbPreiSeccion);
  		this.limpiarCantidad(1);
  		Tool.rstPwrCmb(pcbPreiCarrera2);
  		editsPresCedAlumno.clear();
  		Tool.rstPwrCmb(pcbPreiPeriodo2);
  		Tool.rstPwrCmb(pcbPreiPosicion2);
  		Tool.rstPwrCmb(pcbPreiSeccion2);
  		this.limpiarCantidad(2);
  		customGridPreiPreinscritos.clean();
  		imgButtonsPreiReporte.setDisable();
		Tool.cnnSrv('MantObject', 'getPreinscriptoInit', this.windowName + '.loadInit()');
  	},

	loadInit : function() {
		Tool.loadPowerComboData(dialogsPreinscripciones, pcbPreiCarrera, -1, 1, json('getCarrera'));
		Tool.loadPowerComboData(dialogsPreinscripciones, pcbPreiCarrera2, -1, 1, json('getCarrera'));
		Tool.loadPowerComboData(dialogsPreinscripciones, pcbPreiPosicion, 0, 1, json('getMantPensumPosicion'));
		Tool.loadPowerComboData(dialogsPreinscripciones, pcbPreiPeriodo, 0, 1, json('getPeriodoXNivelAcad'));
		Tool.loadPowerComboData(dialogsPreinscripciones, pcbPreiPeriodo2, 0, 1, json('getPeriodoVigente'));
	},

	reporte : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,30);
        //rep.setNoRepeatHead();
        //rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),8,'helvetica','bold');
        rep.addBar(0,0,1128,78,rep.getRGBAObj(187,196,238,0.8),false);
		//rep.addText(20, 20, 'ORGANIZACION:         '+pcbPreiOrganizacion.getOption(),false);
		//rep.addText(20, 38, 'SUBORGANIZACION: '+pcbPreiSuborganizacion.getOption(),false);
		rep.addText(20, 38, 'PERIODO:   '+pcbPreiPeriodo2.getOption(),false);
		rep.addText(200, 38, 'CARRERA:   '+pcbPreiCarrera2.getOption(),false);
		rep.addText(400, 38, 'POSICION:   '+pcbPreiPosicion2.getOption(),false);
		rep.addText(600, 38, 'SECCIÓN:   '+pcbPreiSeccion2.getOption(),false);
		rep.addText(20, 74, 'FEMENINO:   '+editsPresFemenino2.getText(),true);
		rep.addText(200, 74, 'MASCULINO:   '+editsPresMasculino2.getText(),true);
		rep.addText(400, 74, 'EXTRANJERO:   '+editsPresExtranjero2.getText(),true);
		rep.addText(600, 74, 'VENEZOLANO:   '+editsPresVenezolano2.getText(),true);
		rep.addBar(0,83,1128,116,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),13,'courier','bold');
		rep.addText(225, 108, 'ESTUDIANTES PLANIFICADOS POR SECCION',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);		
		rep.addTable('TablaRepoAluPorSeccion',['Nº','Cedula','Alumno','Sx/Ed','Periodo','Posición','Sección','Edo.'],395,120);
		rep.setTotalRowTable(45);
		rep.setHeightRow(19);
        rep.setSizeColumnArray([24,100,325,60,90,90,70,40]);
        rep.setAlignData(['right','left','left','center','center','center','center','center']); 
        if (pcbPreiAlumno.getText() == 1) 
        	rep.addJsonData('TablaRepoAluPorSeccion','getPreinscripto',[1,2,3,4,5,6,7,8]);
        else
        	rep.addJsonData('TablaRepoAluPorSeccion','getPreinscriptoSeccionNueIng',[1,2,3,4,5,6,7,8]);
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),12,'courier','bold');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	coreUpdate : function(accion) {
        var rlx = xmlStructs.createRecordList("rlx");
        if (pcbPreiAlumno.valid(dialogsPreinscripciones))
	        if (pcbPreiPeriodo2.valid(dialogsPreinscripciones))
	        	if (accion == 0 || pcbPreiCarrera2.valid(dialogsPreinscripciones))
					if (accion == 0 || pcbPreiPosicion2.valid(dialogsPreinscripciones))
						if (accion == 0 || pcbPreiSeccion2.valid(dialogsPreinscripciones)) {
							if (customGridPreiPreinscritos.getTotalRowStruct() > 0) {
					            for(var f = 0; f < customGridPreiPreinscritos.struct.getTotalRows(); f++) {
					            	if (parseInt(customGridPreiPreinscritos.getDataCellStruct(f,0), 10) === 1) {
					            		var reg = "";
					                	reg = pcbPreiPeriodo2.getText();
					                	reg+= "###" + pcbPreiPosicion2.getText();
					                	reg+= "###" + pcbPreiSeccion2.getText();
					                	reg+= "###" + customGridPreiPreinscritos.struct.data[9][f];
					                	reg+= "###" + accion;
					                	reg+= "###" + pcbPreiCarrera2.setModeReturnGetText(0).getText();
					                	
					                	reg+= "###" + pcbPreiPeriodo.getText();
					                	reg+= "###" + pcbPreiCarrera.setModeReturnGetText(0).getText();
					                	reg+= "###" + pcbPreiPosicion.getText();
					                	reg+= "###" + pcbPreiSeccion.getText();
					                	rlx.addStr('reg' + f, reg);
					            	}
					            }
								Tool.cnnSrv('MantObject', 'guardarPreinscripto', this.windowName + '.validBuscar()', rlx);
							}
						}
	}
};