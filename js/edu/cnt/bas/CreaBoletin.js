var dialogsCreaBoletin = new Object();
var pcbCreaBolOrg = new Object();
var pcbCreaBolSuborg = new Object();
var pcbCreaBolCarr = new Object();
var pcbCreaBolPeriodo = new Object();
var pcbCreaBolPosicion = new Object();
var pcbCreaBolSeccion = new Object();
var pcbCreaBolLapso1 = new Object();
var gridsCreaBoletin = new Object();
var customGridCreaBoletin = new Object();
var imgButtonsCreaBolBus1 = new Object();
var imgButtonsCreaBolLim1 = new Object();
var imgButtonsCreaBolSal1 = new Object();
var editsCreaBolCi = new Object();
var editsCreaBolNombre = new Object();
var editsCreaBolApellido = new Object();
var editsCreaBolFecInicio = new Object();
var editsCreaBolFecFin = new Object();
var pcbCreaBolProAula = new Object();
var pcbCreaBolLiteral = new Object();
var pcbCreaBolLapso = new Object();
var editsCreaBolInasistencia = new Object();
var imagesCreaBolAreFotAlumno = new Object();
var memoCreaBolIndicadores = new Object();
var memoCreaBolResumen = new Object();
var memoCreaBolObservaciones = new Object();
var memoCreaBolComponente = new Object();
var imgButtonsCreaBolGuardar = new Object();
var imgButtonsCreaBolEliminar = new Object();
var imgButtonsCreaBolLimpiar = new Object();
var imgButtonsCreaBolReporte = new Object();
var imgButtonsCreaBolSalir = new Object();
var imgButtonsCreaBolGuardar2 = new Object();
var imgButtonsCreaBolEliminar2 = new Object();
var imgButtonsCreaBolReporte2 = new Object();
var imgButtonsCreaBolSalir2 = new Object();
var mwCreaBoletin  = new Object();// minWindow 
var tabsCreaBolBoletin = new Object();
var tabsCreaBoletin = new Object();

var CreaBoletin = {
	windowName: 'CreaBoletin',
	isCreate: false,
	
	show: function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
			include('js/edu/cnt/rpt/RepoTipoBoletines');	
		}
		if (dialogsCreaBoletin.isByClean()) 
			this.limpiar('alumno');
		dialogsCreaBoletin.show();
	},
	
	hide: function() {
		dialogsCreaBoletin.hide();
	},
	
	createMWs: function() {
		mwCreaBoletin = desktop.addMinWindow('C. Boletin', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsCreaBoletin.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},
	
	dialogsCreaBoletin_Init: function() {
		dialogsCreaBoletin.setMinimizeXY(0, 0);
		dialogsCreaBoletin.setCenterScreen();
		dialogsCreaBoletin.addSpace(0, 0, 20);
		dialogsCreaBoletin.addLn(1, 1, 1);
		dialogsCreaBoletin.setHeightCell(1,1,16);
		dialogsCreaBoletin.addObjToDialog(tabsCreaBoletin, 2, 1);
	},
	
	tabsCreaBoletin_Init: function() {
		tabsCreaBoletin.selectTab(2);
		tabsCreaBoletin.selectTab(1);
		tabsCreaBoletin.selectTab(0);
		tabsCreaBoletin.setSizeText(12);
		tabsCreaBoletin.setFontFamily('helvetica','black');
		tabsCreaBoletin.setBorderWidthPanel(0);
		tabsCreaBoletin.addLnToGridPanel(0,6)
		var c1 = container.create("c1");
		c1.setDimension(835,91);
		c1.setPropertyMarco('groove',2,'#5e5e5e');
		c1.addObject(pcbCreaBolOrg, 35, 90);
		c1.addObject(pcbCreaBolSuborg, 322, 90 );
		c1.addObject(pcbCreaBolCarr, 624, 90 );
		c1.addObject(pcbCreaBolPeriodo, 35, 115 );
		c1.addObject(pcbCreaBolPosicion, 322, 115 );
		c1.addObject(pcbCreaBolSeccion, 624, 115 );
		c1.addObject(pcbCreaBolLapso1, 35, 140 );
		c1.addObject(gridsCreaBoletin.getObject(),18,180);
		tabsCreaBoletin.addObjToGridPanel(0, c1, 1, 1);
		var c2 = container.create("c2");
		c2.addObject(imgButtonsCreaBolBus1, 289,565);
		c2.addObject(imgButtonsCreaBolLim1, 399,565);
		c2.addObject(imgButtonsCreaBolSal1, 509,565);
		imgButtonsCreaBolBus1.setDimension(90,22);
        imgButtonsCreaBolLim1.setDimension(90,22);
        imgButtonsCreaBolSal1.setDimension(90,22);
		tabsCreaBoletin.addObjToGridPanel(0,c2, 2, 1);
		tabsCreaBoletin.addLnToGridPanel(1,6)
		var c3 = container.create("c3",'Datos del Alumno', 2);
		c3.setDimension(835,91);
		c3.setMarginLeftBarTitle(372);
		c3.setPropertyMarco('groove',2,'#5e5e5e');
		c3.setFontTitle('verdana', 11, '#1e1e1e');
		c3.addObject(editsCreaBolCi, 35, 90);
		editsCreaBolCi.setSizeEdit(149);
		c3.addObject(editsCreaBolNombre, 322, 90 );
		editsCreaBolNombre.setSizeEdit(149);
		editsCreaBolNombre.setMaxLength(50); 
		c3.addObject(editsCreaBolApellido, 560, 90);
		editsCreaBolApellido.setSizeEdit(149);
		editsCreaBolApellido.setMaxLength(50); 
		c3.addObject(pcbCreaBolLapso, 35,115);
		c3.addObject(editsCreaBolFecInicio, 322, 115 );
		editsCreaBolFecInicio.setSizeEdit(149);
		editsCreaBolFecInicio.setMaxLength(50); 
		c3.addObject(editsCreaBolFecFin, 560, 115);
		editsCreaBolFecFin.setSizeEdit(149);
		editsCreaBolFecFin.setMaxLength(50);
		c3.addObject(pcbCreaBolProAula, 35, 140);
		pcbCreaBolProAula.setWidthCombo(365);
		c3.addObject(editsCreaBolInasistencia, 560, 140);
		editsCreaBolInasistencia.setSizeEdit(21);
        editsCreaBolInasistencia.setMaxLength(3); 
		c3.addObject(imagesCreaBolAreFotAlumno, 791, 90);
		imagesCreaBolAreFotAlumno.setSize(70,60);
		dialogsCreaBoletin.addObjToDialog(c3, 2, 1);
		tabsCreaBoletin.addObjToGridPanel(1, c3, 1, 1);
		tabsCreaBoletin.addLnToGridPanel(2,6)
		var c1 = container.create("c1");
		c1.setDimension(835,89);
		c1.setPropertyMarco('groove',2,'#5e5e5e');
		c1.addObject(pcbCreaBolLiteral, 35, 90);
		pcbCreaBolLiteral.setWidthCombo(706);
		c1.addObject(memoCreaBolComponente, 35, 120);
		memoCreaBolComponente.vAlignCaption('middle');
		memoCreaBolComponente.setDimension(726, 30);
		c1.addObject(customGridCreaBoletin, 20, 177);
		c1.addObject(imgButtonsCreaBolGuardar2, 224,565);
		c1.addObject(imgButtonsCreaBolEliminar2, 334,565);
		c1.addObject(imgButtonsCreaBolReporte2, 444,565);
		c1.addObject(imgButtonsCreaBolSalir2, 554,565);
		imgButtonsCreaBolGuardar2.setDimension(90,22);
        imgButtonsCreaBolEliminar2.setDimension(90,22);
        imgButtonsCreaBolReporte2.setDimension(90,22);
        imgButtonsCreaBolSalir2.setDimension(90,22);
		tabsCreaBoletin.addObjToGridPanel(2, c1, 1, 1);
		tabsCreaBoletin.addLnToGridPanel(1,347)
		tabsCreaBoletin.addObjToGridPanel(1,tabsCreaBolBoletin, 2, 1);
		tabsCreaBolBoletin.selectTab(2);
		tabsCreaBolBoletin.selectTab(1);
		tabsCreaBolBoletin.selectTab(0);
		tabsCreaBolBoletin.setSizeText(12);
		tabsCreaBolBoletin.setFontFamily('helvetica','black');
		tabsCreaBolBoletin.setBorderWidthPanel(0);
		var c4 = container.create("c4");
		c4.addObject(memoCreaBolIndicadores, 20,212);
		memoCreaBolIndicadores.vAlignCaption('middle');
		memoCreaBolIndicadores.setDimension(835, 337);
		tabsCreaBolBoletin.addObjToGridPanel(0, c4, 2, 1);
		var c5 = container.create("c5");
		c5.addObject(memoCreaBolResumen, 20,212);
		memoCreaBolResumen.vAlignCaption('middle');
		memoCreaBolResumen.setDimension(835, 337);
		tabsCreaBolBoletin.addObjToGridPanel(1, c5, 2, 1);
		var c6 = container.create("c6");
		c6.addObject(memoCreaBolObservaciones, 20,212);
		memoCreaBolObservaciones.vAlignCaption('middle');
		memoCreaBolObservaciones.setDimension(835, 337);
		tabsCreaBolBoletin.addObjToGridPanel(2, c6, 2, 1);
		var c7 = container.create("c7");
		c7.addObject(imgButtonsCreaBolGuardar, 174,565);
		c7.addObject(imgButtonsCreaBolEliminar, 284,565);
		c7.addObject(imgButtonsCreaBolLimpiar, 394,565);
		c7.addObject(imgButtonsCreaBolReporte, 504,565);
		c7.addObject(imgButtonsCreaBolSalir, 614,565);
		imgButtonsCreaBolGuardar.setDimension(90,22);
        imgButtonsCreaBolEliminar.setDimension(90,22);
        imgButtonsCreaBolLimpiar.setDimension(90,22);
        imgButtonsCreaBolReporte.setDimension(90,22);
        imgButtonsCreaBolSalir.setDimension(90,22);
		tabsCreaBoletin.addObjToGridPanel(1,c7, 3, 1);
		//zIndex//de/memos//////////////////////////////
		memoCreaBolIndicadores.style.zIndex = 100;
		memoCreaBolResumen.style.zIndex = 90;
		memoCreaBolObservaciones.style.zIndex = 80;
		memoCreaBolComponente.style.zIndex = 70;
	},

	gridsCreaBoletin_Init: function(){
    	gridsCreaBoletin.setFixColRow(false,true);
    	gridsCreaBoletin.addTitleVectorX(['Nº','C.i.', 'Apellido','Nombre','Fecha Modificación Boletín','idPers']);
    	gridsCreaBoletin.showData();
    	gridsCreaBoletin.setSizeCol(1,20);
    	gridsCreaBoletin.setSizeCol(2,100);
    	gridsCreaBoletin.setSizeCol(3,250);
    	gridsCreaBoletin.setSizeCol(4,250);
    	gridsCreaBoletin.setSizeCol(5,214);
		gridsCreaBoletin.setSizeCol(6,0);
    	gridsCreaBoletin.hideCol(6);
  	},
		
	create: function() {
		/////////////////////////////////////////////////INFORMACIÓN GENERAL/////////////////////////////////////////////////
		dialogsCreaBoletin = dialogs.create('dialogsCreaBoletin',0,0,878,574,'CREAR BOLETIN');
		dialogsCreaBoletin.setAdjY(20);
		tabsCreaBoletin = tabs.create('tabsCreaBoletin',840,500,['BUSQUEDA POR ALUMNO','BOLETIN LAPSO','BOLETIN FINAL']);
		tabsCreaBolBoletin = tabs.create('tabsCreaBolBoletin',780,300,['INDICADORES','RESUMEN EVALUATIVO','OBSERVACIONES Y RECOMENDACIONES']);
		pcbCreaBolOrg = powerComboBox.create('pcbCreaBolOrg','pcbCreaBolOrg','Organización (+):',1,101);
		pcbCreaBolOrg.setValidEmpty();
		pcbCreaBolOrg.enableReadOnlyEditor();
		pcbCreaBolOrg.addEmptyOption();
		pcbCreaBolSuborg = powerComboBox.create('pcbCreaBolSuborg','pcbCreaBolSuborg','Suborganización (^):',1,119);
		pcbCreaBolSuborg.setValidEmpty();
		pcbCreaBolSuborg.enableReadOnlyEditor();
		pcbCreaBolSuborg.addEmptyOption();
		pcbCreaBolCarr = powerComboBox.create('pcbCreaBolCarr','pcbCreaBolCarr','Carrera (^):',1,70);
		pcbCreaBolCarr.setValidEmpty();
		pcbCreaBolCarr.enableReadOnlyEditor();
		pcbCreaBolCarr.addEmptyOption();
		pcbCreaBolPeriodo = powerComboBox.create('pcbCreaBolPeriodo','pcbCreaBolPeriodo','Periodo (^):',1,101);
		pcbCreaBolPeriodo.setValidEmpty();
		pcbCreaBolPeriodo.enableReadOnlyEditor();
		pcbCreaBolPeriodo.addEmptyOption();
		pcbCreaBolPosicion = powerComboBox.create('pcbCreaBolPosicion','pcbCreaBolPosicion','Posición (^):',1,119);
		pcbCreaBolPosicion.setValidEmpty();
		pcbCreaBolPosicion.enableReadOnlyEditor();
		pcbCreaBolPosicion.addEmptyOption();
		pcbCreaBolSeccion = powerComboBox.create('pcbCreaBolSeccion','pcbCreaBolSeccion','Sección (^):',1,70);
		pcbCreaBolSeccion.setValidEmpty();
		pcbCreaBolSeccion.enableReadOnlyEditor();
		pcbCreaBolSeccion.addEmptyOption();
		pcbCreaBolSeccion.setDataType('string');
		pcbCreaBolLapso1 = powerComboBox.create('pcbCreaBolLapso1','pcbCreaBolLapso1','Lapso (+):',1,101);
		pcbCreaBolLapso1.setValidEmpty();
		pcbCreaBolLapso1.enableReadOnlyEditor();
		pcbCreaBolLapso1.addEmptyOption();
		gridsCreaBoletin = grids.create('gridsCreaBoletin',17,6);
		customGridCreaBoletin = customGrid.create('cg1','EVALUACION',286,838,26,10);
		customGridCreaBoletin.loadColumnTypeStruct(null, [customGrid.TYPE_COLUMN_EDIT,
		                                                  customGrid.TYPE_COLUMN_EDIT,
		                                                  customGrid.TYPE_COLUMN_RADIO,
		                                                  customGrid.TYPE_COLUMN_RADIO,
		                                                  customGrid.TYPE_COLUMN_RADIO,
		                                                  customGrid.TYPE_COLUMN_EDIT,
		                                                  customGrid.TYPE_COLUMN_EDIT], 
		                                                  [180,355,90,90,90,0,0]);
		
		customGridCreaBoletin.addTitleVectorX(['AREA','COMPONENTE','SIN LOGRAR','MEDIANAMENTE','TOTALMENTE','idProyCursoArea','idLiteral']);
		customGridCreaBoletin.groupRadioByRow([2,3,4],'Group');
		customGridCreaBoletin.setSelectedLnMode(0);
		customGridCreaBoletin.hideCol(5);
		customGridCreaBoletin.hideCol(6);
		imgButtonsCreaBolLim1 = imgButtons.create('imgButtonsCreaBolLim1','Limpiar','limpiar.png');
		imgButtonsCreaBolBus1 = imgButtons.create('imgButtonsCreaBolBus1','Buscar','icono_buscar.png');
		imgButtonsCreaBolSal1 = imgButtons.create('imgButtonsCreaBolSal1','Salir','salir.png');
		editsCreaBolCi = edits.create('editsCreaBolCi','editsCreaBolCi','C.i. (*):',1,125,'normal');
		editsCreaBolCi.setValidEmpty();
		editsCreaBolCi.setFieldFind(true);
		editsCreaBolCi.setValidInteger();
		editsCreaBolNombre = edits.create('editsCreaBolNombre','editsCreaBolNombre','Nombre (*):',1,75,'normal');
		editsCreaBolNombre.setValidEmpty();
		editsCreaBolNombre.setFieldFind(true);  
		editsCreaBolApellido = edits.create('editsCreaBolApellido','editsCreaBolApellido','Apellido (*):',1,76,'nromal');
		editsCreaBolApellido.setValidEmpty();
		editsCreaBolApellido.setFieldFind(true);  
		pcbCreaBolLapso = powerComboBox.create('pcbCreaBolLapso','pcbCreaBolLapso','Lapso (+):',1,125);
		pcbCreaBolLapso.setValidEmpty();
		pcbCreaBolLapso.enableReadOnlyEditor();
		pcbCreaBolLapso.addEmptyOption();
		editsCreaBolFecInicio = edits.create('editsCreaBolFecInicio','editsCreaBolFecInicio','Fecha Inicio:',1,75,'normal');
		editsCreaBolFecInicio.setValidEmpty();
		editsCreaBolFecInicio.readOnly(true); 
		editsCreaBolFecFin = edits.create('editsCreaBolFecFin','editsCreaBolFecFin','Fecha Fin:',1,76,'nromal');
		editsCreaBolFecFin.setValidEmpty();
		editsCreaBolFecFin.readOnly(true);  
		pcbCreaBolProAula = powerComboBox.create('pcbCreaBolProAula','pcbCreaBolProAula','Nombre Proyecto (^):',1,125);
		pcbCreaBolProAula.setValidEmpty();
		pcbCreaBolProAula.enableReadOnlyEditor();
		pcbCreaBolProAula.addEmptyOption();
		pcbCreaBolLiteral = powerComboBox.create('pcbCreaBolLiteral','pcbCreaBolLiteral','Literal:',1,80);
		pcbCreaBolLiteral.setValidEmpty();
		pcbCreaBolLiteral.enableReadOnlyEditor();
		pcbCreaBolLiteral.addEmptyOption();
		editsCreaBolInasistencia = edits.create('editsCreaBolInasistencia','editsCreaBolInasistencia','Inasistencia:',1,76,'normal');
		editsCreaBolInasistencia.setValidEmpty();
		editsCreaBolInasistencia.setValidInteger();
		memoCreaBolIndicadores = memo.create('memoCreaBolIndicadores','',1,0,0);
		memoCreaBolIndicadores.setValidEmpty(); 
		memoCreaBolResumen = memo.create('memoCreaBolResumen','',1,0,0);
		memoCreaBolResumen.setValidEmpty();
		memoCreaBolObservaciones = memo.create('memoCreaBolObservaciones','',1,0,0);
		memoCreaBolObservaciones.setValidEmpty();
		memoCreaBolComponente = memo.create('memoCreaBolComponente','Componente:',1,0,79);
		memoCreaBolComponente.setValidEmpty();
		memoCreaBolResumen.setMaxLength(5000);
		memoCreaBolIndicadores.setMaxLength(10000); 
		memoCreaBolObservaciones.setMaxLength(5000);
		memoCreaBolComponente.setMaxLength(2520); 
		memoCreaBolComponente.setReadOnly(true);
		imagesCreaBolAreFotAlumno = images.create('imagesCreaBolAreFotAlumno','imagesCreaBolAreFotAlumno','images/pht/anonymous.png');
		imgButtonsCreaBolGuardar = imgButtons.create('imgButtonsCreaBolGuardar','Guardar.','ok.png');
		imgButtonsCreaBolEliminar = imgButtons.create('imgButtonsCreaBolEliminar','Eliminar','eliminar.png');
		imgButtonsCreaBolLimpiar = imgButtons.create('imgButtonsCreaBolLimpiar','Limpiar','limpiar.png');
		imgButtonsCreaBolReporte = imgButtons.create('imgButtonsCreaBolReporte','Ver Boletín','print.png'); 		  
		imgButtonsCreaBolSalir = imgButtons.create('imgButtonsCreaBolSalir','Salir','salir.png');
		imgButtonsCreaBolGuardar2 = imgButtons.create('imgButtonsCreaBolGuardar2','Guardar.','ok.png');
		imgButtonsCreaBolEliminar2 = imgButtons.create('imgButtonsCreaBolEliminar2','Eliminar','eliminar.png');
		imgButtonsCreaBolEliminar2.setDisable();
		imgButtonsCreaBolReporte2 = imgButtons.create('imgButtonsCreaBolReporte2','Ver Boletín','print.png');
		imgButtonsCreaBolReporte2.setDisable();
		imgButtonsCreaBolSalir2 = imgButtons.create('imgButtonsCreaBolSalir2','Salir','salir.png');
	},

	init: function() {
	    this.create();
	    this.setEvents();
	    this.dialogsCreaBoletin_Init();
	    this.tabsCreaBoletin_Init();
	    this.gridsCreaBoletin_Init();
		this.createMWs(); 
	},

	setVisibleTab: function(id) {
		switch (id) {
			case 3:
				tabsCreaBoletin.showTab(2);
				break;
			default:
				tabsCreaBoletin.hideTab(2);
				break;
		}
	},
	
	limpiarFind: function(ix) {
		this.setVisibleTab(0);
		editsCreaBolCi.hideId = -1;
		memoCreaBolComponente.hideId = -1;
		Tool.rstPwrCmb(pcbCreaBolLapso);
		editsCreaBolFecInicio.setValue("");
		editsCreaBolFecFin.setValue("");
		Tool.rstPwrCmb(pcbCreaBolProAula);
		memoCreaBolIndicadores.setText("");
  		memoCreaBolResumen.setText("");
  		memoCreaBolObservaciones.setText("");
  		editsCreaBolInasistencia.setValue("");
  		
		switch (ix) {
		case 1: 
			editsCreaBolNombre.setValue("");
			editsCreaBolApellido.setValue("");  		
			break;
		case 2: 
			editsCreaBolCi.setValue("");
	  		editsCreaBolApellido.setValue("");  		
			break;
		default:
	  		editsCreaBolCi.setValue("");
  			editsCreaBolNombre.setValue("");
			break;
		} 
	},    

	limpiar: function(tpBtn) {
		tabsCreaBolBoletin.setSizeText(10);
		tabsCreaBoletin.setSizeText(10);
		this.setVisibleTab(0);
		editsCreaBolCi.hideId = -1;
		memoCreaBolComponente.hideId = -1;
		editsCreaBolCi.setValue("");
  		editsCreaBolNombre.setValue("");
  		editsCreaBolApellido.setValue("");
  		imagesCreaBolAreFotAlumno.setSource('images/pht/anonymous.png');
  		Tool.rstPwrCmb(pcbCreaBolLapso);
		editsCreaBolFecInicio.setValue("");
		editsCreaBolFecFin.setValue("");
		Tool.rstPwrCmb(pcbCreaBolProAula);
		pcbCreaBolLiteral.setSelectedIndex(0);
		memoCreaBolIndicadores.setText("");
  		memoCreaBolResumen.setText("");
  		memoCreaBolObservaciones.setText("");
		memoCreaBolComponente.setText("");
  		editsCreaBolInasistencia.setValue("");
  		imgButtonsCreaBolReporte.setDisable();
  		
  		customGridCreaBoletin.clean();
  		
  		dialogsCreaBoletin.setMsg("");
  		if (tpBtn == 'alumno') {
  			Tool.rstPwrCmb(pcbCreaBolOrg);
			Tool.rstPwrCmb(pcbCreaBolSuborg);
			Tool.rstPwrCmb(pcbCreaBolCarr);
			Tool.rstPwrCmb(pcbCreaBolPeriodo);
			Tool.rstPwrCmb(pcbCreaBolPosicion);
			Tool.rstPwrCmb(pcbCreaBolSeccion);
			Tool.rstPwrCmb(pcbCreaBolLapso1);
			gridsCreaBoletin.clean();
  			Tool.cnnSrv('MantObject', 'getMantOrganizacion', this.windowName + '.loadDataOrg()');
  		}
    },

	loadDataOrg: function() {
    	Tool.loadPowerComboData(dialogsCreaBoletin, pcbCreaBolOrg, 0, 1, json('getData'));
    	Tool.getContext(dialogsCreaBoletin, pcbCreaBolOrg, pcbCreaBolSuborg, pcbCreaBolCarr, "CreaBoletin.resetElementsAlumno('car')");
    },

    resetElementsAlumno: function(element) {
		gridsCreaBoletin.clean();
    	this.limpiar('');
		
		if (element == 'org') {
			Tool.rstPwrCmb(pcbCreaBolCarr);
			Tool.rstPwrCmb(pcbCreaBolPosicion);
			pcbCreaBolPeriodo.setSelectedIndex(0);   
			Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsCreaBoletin, pcbCreaBolSuborg, 1, 2, pcbCreaBolOrg);		
		}
		else if (element == 'sub') {
			Tool.rstPwrCmb(pcbCreaBolPosicion);
			pcbCreaBolPeriodo.setSelectedIndex(0);
			Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsCreaBoletin, pcbCreaBolCarr, -1, 3, pcbCreaBolSuborg);		
		}
		else if (element == 'car') {
			
			if (parseInt(pcbCreaBolCarr.setModeReturnGetText(7).getText()) == 1) {
				tabsCreaBolBoletin.setCaption(0,'FORMACIÓN PERSONAL SOCIAL Y COMUNICATIVA');
				tabsCreaBolBoletin.setCaption(1,'RELACIÓN CON OTROS ELEMENTOS DEL AMBIENTE');
			}
			else {
				tabsCreaBolBoletin.setCaption(0,'INDICADORES');
				tabsCreaBolBoletin.setCaption(1,'RESUMEN EVALUATIVO');
			}
			
	    	pcbCreaBolPeriodo.setSelectedIndex(0);
	    	Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsCreaBoletin, pcbCreaBolPeriodo, 0, 1, pcbCreaBolCarr.setModeReturnGetText(5));		
		}
		else if (element == 'per' && pcbCreaBolCarr.valid(dialogsCreaBoletin)) {
	    	var rlx = xmlStructs.createRecordList("rlx");

			rlx.add('reg', pcbCreaBolPeriodo);
			rlx.add('reg', pcbCreaBolCarr.setModeReturnGetText(2));
			Tool.cnnSrv('MantObject', 'getMantProyAulaInit', this.windowName + '.loadDataPosicion()', rlx);
		}
		else if (element == 'pos') {
			if (pcbCreaBolPeriodo.valid(dialogsCreaBoletin))
				Tool.getPowerComboData('MantObject', 'getMantProyAulaSeccPers', dialogsCreaBoletin, pcbCreaBolSeccion, 0, 1, pcbCreaBolPeriodo, pcbCreaBolCarr.setModeReturnGetText(2), pcbCreaBolPosicion);
	    }
	},

	loadDataPosicion: function() {
    	var rlx = xmlStructs.createRecordList("rlx");

    	Tool.loadPowerComboData(dialogsCreaBoletin, pcbCreaBolLapso1, 3, 0, json('getMantLapso'));
    	if (json('getPosicion').data[0].length > 0) {
    		Tool.loadPowerComboData(dialogsCreaBoletin, pcbCreaBolPosicion, 0, 1, json('getPosicion'));
    		pcbCreaBolPosicion.setSelectedIndex(1);
        	rlx.add('reg', pcbCreaBolPeriodo);
    		rlx.add('reg', pcbCreaBolCarr.setModeReturnGetText(2));
    		rlx.add('reg', pcbCreaBolPosicion);
    		Tool.cnnSrv('MantObject', 'getMantProyAulaSeccPers', this.windowName + '.loadDataSeccion()', rlx);
    	}
    },

    loadDataSeccion: function() {
    	if (json('getSeccionPersona').data[0].length > 0) {
    		Tool.loadPowerComboData(dialogsCreaBoletin, pcbCreaBolSeccion, 0, 1, json('getSeccionPersona'));
    		pcbCreaBolSeccion.setSelectedIndex(1);
    	}
    },	
    
    buscarAlumno: function() {
    	Tool.getGridData("MantObject", "getCreaBoletinListadoAlumno", dialogsCreaBoletin, gridsCreaBoletin, "CreaBoletin.showBoletinFinal()", pcbCreaBolSeccion, pcbCreaBolPeriodo, pcbCreaBolPosicion, pcbCreaBolCarr.setModeReturnGetText(2), pcbCreaBolLapso1); 		    		
    },
    
	loadDataProyBoletin: function() {
		Tool.loadPowerComboData(dialogsCreaBoletin, pcbCreaBolProAula, 0, 1, json('getProyecto'));
		this.setVisibleTab(0);
		customGridCreaBoletin.clean();
		if (json('getCreaBoletin').data[0].length > 0) {
			pcbCreaBolProAula.findOption(json('getCreaBoletin').data[3][0]);
			Tool.loadMemoData(dialogsCreaBoletin, memoCreaBolResumen, 0, json('getCreaBoletin'))
			Tool.loadMemoData(dialogsCreaBoletin, memoCreaBolObservaciones, 1, json('getCreaBoletin'))
			Tool.loadMemoData(dialogsCreaBoletin, memoCreaBolIndicadores, 2, json('getCreaBoletin'))
			Tool.loadEditData(dialogsCreaBoletin, editsCreaBolInasistencia, 3, json('getCreaBoletin'))
			this.showBoletinFinal();
			imgButtonsCreaBolReporte.setEnable();
		}
		tabsCreaBolBoletin.selectTab(0);
  	},

  	getFechaLapso: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		rlx.addInt('reg', editsCreaBolCi.hideId);
  		Tool.cnnSrv('MantObject', 'getCreaBoletinLapso', this.windowName + '.loadDataFechaLapso()', rlx);
  	},
  	
  	loadDataFechaLapso: function() {
  		Tool.loadPowerComboData(dialogsCreaBoletin, pcbCreaBolLiteral, 0, 1, json('getLiteral'));
  		Tool.loadPowerComboData(dialogsCreaBoletin, pcbCreaBolLapso, -1, 1, json('getLapso'));
    	pcbCreaBolLapso.findOption(pcbCreaBolLapso1.getText());
    	tabsCreaBoletin.showPanel(1);
    	imagesCreaBolAreFotAlumno.getObject().onerror = function() {imagesCreaBolAreFotAlumno.setSource('images/pht/anonymous.png')};
		imagesCreaBolAreFotAlumno.setSource('images/pht/'+editsCreaBolCi.getValue()+'.jpg');
  		this.resetElements('pro');
  	},
  	
    resetElements: function(element) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (element == 'lap') {
			imagesCreaBolAreFotAlumno.getObject();
			imagesCreaBolAreFotAlumno.getObject().onerror = function() {imagesCreaBolAreFotAlumno.setSource('images/pht/anonymous.png')};
			imagesCreaBolAreFotAlumno.setSource('images/pht/'+editsCreaBolCi.getValue()+'.jpg');
			editsCreaBolFecInicio.setValue("");
			editsCreaBolFecFin.setValue("");
			Tool.rstPwrCmb(pcbCreaBolProAula);
	  		memoCreaBolIndicadores.setText("");
	  		memoCreaBolResumen.setText("");
	  		editsCreaBolInasistencia.setValue("");
	  		memoCreaBolObservaciones.setText("");
			Tool.getPowerComboData('MantObject', 'getCreaBoletinLapso', dialogsCreaBoletin, pcbCreaBolLapso, -1, 1, new MiniDataSet(editsCreaBolCi.hideId, 'int', false));		
		}
		else if (element == 'pro') {
			editsCreaBolFecInicio.setValue(pcbCreaBolLapso.setModeReturnGetText(2).getText());
			editsCreaBolFecFin.setValue(pcbCreaBolLapso.setModeReturnGetText(3).getText());
	  		memoCreaBolIndicadores.setText("");
	  		memoCreaBolResumen.setText("");
	  		memoCreaBolObservaciones.setText("");
	  		editsCreaBolInasistencia.setValue("");
	  		imgButtonsCreaBolReporte.setDisable();
	    	imgButtonsCreaBolReporte2.setDisable();
   			rlx.addInt('reg', editsCreaBolCi.hideId);
        	rlx.add('reg', pcbCreaBolLapso.setModeReturnGetText(0));
	  		Tool.cnnSrv('MantObject', 'getCreaBoletinProyecto', this.windowName + '.loadDataProyBoletin()', rlx);
		}
		else if (element == 'ind') {
        	Tool.getMemoData('MantObject', 'getCreaBoletinIndicador', dialogsCreaBoletin, memoCreaBolIndicadores, 0, pcbCreaBolProAula)
		}
    },
    
    buscar: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsCreaBolCi.getValue() != '' && editsCreaBolNombre.getValue() != '' && editsCreaBolApellido.getValue() != '') {
			this.resetElements('lap');
		}
		else if (editsCreaBolCi.getValue() != '' || editsCreaBolNombre.getValue() != '' || editsCreaBolApellido.getValue() != '') {
        	ResuBusqueda.setObjectExtFnc(editsCreaBolCi, editsCreaBolNombre, editsCreaBolApellido, 'CreaBoletin.buscar()');
			Tool.getGridData('MantObject', 'getCreaBoletinAlumno', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsCreaBolCi, editsCreaBolCi, editsCreaBolNombre, editsCreaBolNombre, editsCreaBolApellido, editsCreaBolApellido);
		}
		else {
			Alert.show('Ingrese: C.i., Nombre, Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},  

	setEvents: function() {
		pcbCreaBolOrg.onChange(this.windowName + ".resetElementsAlumno('org')");
		pcbCreaBolSuborg.onChange(this.windowName + ".resetElementsAlumno('sub')");
		pcbCreaBolCarr.onChange(this.windowName + ".resetElementsAlumno('car')");
		pcbCreaBolPeriodo.onChange(this.windowName + ".resetElementsAlumno('per')");
		pcbCreaBolPosicion.onChange(this.windowName + ".resetElementsAlumno('pos')");
		pcbCreaBolSeccion.onChange(this.windowName + ".resetElementsAlumno('sec')");
		pcbCreaBolLapso1.onChange("CreaBoletin.limpiar('');CreaBoletin.buscarAlumno();");
		gridsCreaBoletin.onClickCells(this.windowName+".setDataAlumno()"); 
		editsCreaBolCi.onEnter(this.windowName + ".buscar()");
		editsCreaBolCi.onChange(this.windowName + ".limpiarFind(1)");
		editsCreaBolNombre.onEnter(this.windowName + ".buscar()");
		editsCreaBolNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsCreaBolApellido.onEnter(this.windowName + ".buscar()");
		editsCreaBolApellido.onChange(this.windowName + ".limpiarFind(3)");
		pcbCreaBolLapso.onChange(this.windowName + ".resetElements('pro')");
		pcbCreaBolProAula.onChange(this.windowName + ".resetElements('ind')");
		customGridCreaBoletin.onClickCells(this.windowName+".setDataComponente()");
		imgButtonsCreaBolGuardar.onClick(this.windowName+".coreUpdate('guardar')");
		imgButtonsCreaBolEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
		imgButtonsCreaBolLimpiar.onClick(this.windowName+".limpiar('')");
		imgButtonsCreaBolReporte.onClick(this.windowName + ".reporteBoletin()");
	  	imgButtonsCreaBolSalir.onClick('dialogsCreaBoletin.close()');
	  	imgButtonsCreaBolBus1.onClick("CreaBoletin.limpiar('');CreaBoletin.buscarAlumno();");
	  	imgButtonsCreaBolLim1.onClick(this.windowName +".limpiar('alumno')");
	  	imgButtonsCreaBolSal1.onClick('dialogsCreaBoletin.close()');
		imgButtonsCreaBolGuardar2.onClick(this.windowName +".coreUpdateFinal('guardar')");
		imgButtonsCreaBolEliminar2.onClick(this.windowName +".coreUpdateFinal('eliminar')");
		imgButtonsCreaBolReporte2.onClick(this.windowName + ".reporteBoletinFinal()");
	  	imgButtonsCreaBolSalir2.onClick('dialogsCreaBoletin.close()');		
    }, 

    setDataAlumno: function() {
    	editsCreaBolCi.setValue(gridsCreaBoletin.getDataCell(2));
    	editsCreaBolNombre.setValue(gridsCreaBoletin.getDataCell(4));
    	editsCreaBolApellido.setValue(gridsCreaBoletin.getDataCell(3));
    	editsCreaBolCi.hideId = gridsCreaBoletin.getDataCell(6);
    	this.getFechaLapso();
    },
    
    setDataComponente: function() {
    	memoCreaBolComponente.setText(customGridCreaBoletin.getDataCell(customGridCreaBoletin.getActualRow(), 1));
    	memoCreaBolComponente.hideId = customGridCreaBoletin.getDataCell(customGridCreaBoletin.getActualRow(), 5)
		imgButtonsCreaBolEliminar2.setEnable();
    },

    showBoletinFinal: function() {
    	var rlx = xmlStructs.createRecordList("rlx");

    	memoCreaBolComponente.hideId = -1;
    	customGridCreaBoletin.clean();
    	if (pcbCreaBolLapso.getOption().substring(0, 1) == '3') {
			this.setVisibleTab(3);
			rlx.addInt('reg', editsCreaBolCi.hideId,true);
			rlx.add('reg', pcbCreaBolPeriodo);
		  	Tool.cnnSrv('MantObject', 'getCreaBoletinLiteComp', this.windowName + '.loadDataBoletinFinal()', rlx);
		}
		else 
			this.setVisibleTab(0);
    },
    
    loadDataBoletinFinal: function() {
    	pcbCreaBolLiteral.setSelectedIndex(0);
    	if (parseInt(json('getCreaBoletinLiteComp').data[6][0]) > 0) {
    		imgButtonsCreaBolReporte2.setEnable();
    		pcbCreaBolLiteral.findOption(json('getCreaBoletinLiteComp').data[6][0]);
    	}
		customGridCreaBoletin.loadDataStruct(json('getCreaBoletinLiteComp'));
    },
    
    limpiarCoreUpdate: function(methodName) {
		memoCreaBolComponente.hideId = -1;
    	if (methodName == 'guardar') {
    		this.buscarAlumno();
      		imgButtonsCreaBolReporte.setEnable();
    		dialogsCreaBoletin.setMsg('Boletin guardado...');
    	}
    	else {
    		this.setVisibleTab(0);
    		Tool.rstPwrCmb(pcbCreaBolProAula);
      		memoCreaBolIndicadores.setText("");
      		memoCreaBolResumen.setText("");
      		memoCreaBolObservaciones.setText("");
      		editsCreaBolInasistencia.setValue("");
    		dialogsCreaBoletin.setMsg('Boletin eliminado...');
    	}
    },
    
	reporteBoletin: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
		rlx.add('reg', pcbCreaBolPeriodo);
		rlx.add('reg', pcbCreaBolLapso.setModeReturnGetText(0));
		rlx.addInt('reg', -1,true);//posicion
		rlx.addInt('reg', -1,true);//seccion
		rlx.addStr('reg', '');//recomendacion
		rlx.addInt('reg', editsCreaBolCi.hideId,true);
		if (parseInt(pcbCreaBolCarr.setModeReturnGetText(7).getText()) == 2) 
			Tool.cnnSrv('ReportObject', 'getMasivoPrimaria', 'dlgWait.hide()', rlx);
		else
			Tool.cnnSrv('ReportObject', 'getMasivoInicial', 'dlgWait.hide()', rlx);
    },
    
	coreUpdate: function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");
        var salvar = false;
        
		if (editsCreaBolCi.valid(dialogsCreaBoletin))
			if (editsCreaBolNombre.valid(dialogsCreaBoletin))
				if (editsCreaBolApellido.valid(dialogsCreaBoletin))
					if (editsCreaBolInasistencia.valid(dialogsCreaBoletin))
						if (pcbCreaBolLapso.valid(dialogsCreaBoletin))
							//if (memoCreaBolIndicadores.valid(dialogsCreaBoletin))
								//if (memoCreaBolResumen.valid(dialogsCreaBoletin))
									//if (memoCreaBolObservaciones.valid(dialogsCreaBoletin))	
										if (pcbCreaBolProAula.valid(dialogsCreaBoletin)) {
											rlx.addInt('reg', editsCreaBolCi.hideId);
											rlx.add('reg', pcbCreaBolLapso.setModeReturnGetText(0));
											if (methodName == 'guardar') {
			                        			rlx.add('reg', memoCreaBolResumen);
			                        			rlx.add('reg', memoCreaBolObservaciones);
			                        			rlx.add('reg', memoCreaBolIndicadores);
			                        			rlx.add('reg', editsCreaBolInasistencia);
			                        			rlx.add('reg', pcbCreaBolProAula);
			                        			rlx.addStr('reg', pcbCreaBolPosicion.getOption());
			                        			rlx.addStr('reg', pcbCreaBolSeccion.getOption());
										    }
											Tool.cnnSrv("MantObject", methodName + this.windowName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
											salvar = true;
										}
		if(!salvar)
			Alert.show('FALTA INFORMACION REQUERIDA PARA GUARDAR, VERIFIQUE...', 'ALERTA', Alert.TYPE_INFO);	
	},
	
	limpiarCoreUpdateFinal: function() {
    	var rlx = xmlStructs.createRecordList("rlx");

    	memoCreaBolComponente.hideId = -1;
		memoCreaBolComponente.setText("");
		imgButtonsCreaBolEliminar2.setDisable();

		rlx.addInt('reg', editsCreaBolCi.hideId,true);
		rlx.add('reg', pcbCreaBolPeriodo);
		Tool.cnnSrv('MantObject', 'getCreaBoletinLiteComp', this.windowName + '.loadDataBoletinFinal()', rlx);
	},
	
    coreUpdateFinal: function(methodName) {
    	var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == 'guardar') {
	    	if (pcbCreaBolLiteral.valid(dialogsCreaBoletin)) {
	            for(var f = 0; f < customGridCreaBoletin.struct.getTotalRows(); f++) {
	            	var reg = "";
	            	var tpCriterio = 0;
	            	if (customGridCreaBoletin.struct.data[2][f] == true)
	            		tpCriterio = 3;
	            	else if (customGridCreaBoletin.struct.data[3][f] == true)
	            		tpCriterio = 2;
	            	else if (customGridCreaBoletin.struct.data[4][f] == true)
	            		tpCriterio = 1;
	            		
	            	if (tpCriterio != 0) {
	                	reg = editsCreaBolCi.hideId;
	                	reg+= "###" + pcbCreaBolPeriodo.getText();
	                	reg+= "###" + customGridCreaBoletin.struct.data[5][f];
	                	reg+= "###" + tpCriterio;
	                	reg+= "###" + pcbCreaBolLiteral.getText();
	                	rlx.addStr('reg' + f, reg);
	            	}
	            }
				Tool.cnnSrv("MantObject", "guardarBoletinFinal", this.windowName + ".limpiarCoreUpdateFinal()", rlx);
			}
		}
		else {
	    	if (memoCreaBolComponente.valid(dialogsCreaBoletin)) {
				rlx.addInt('reg', editsCreaBolCi.hideId);
				rlx.add('reg', pcbCreaBolPeriodo);
				rlx.addInt('reg', memoCreaBolComponente.hideId);
				Tool.cnnSrv("MantObject", "eliminarBoletinFinal", this.windowName + ".limpiarCoreUpdateFinal()", rlx);
	    	}
		}
    },
    
    reporteBoletinFinal: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
		rlx.add('reg', pcbCreaBolPeriodo);
		rlx.addInt('reg', editsCreaBolCi.hideId,true);
		rlx.addInt('reg', -1,true);//posicion
		rlx.addInt('reg', -1,true);//seccion
		Tool.cnnSrv('ReportObject', 'getBoletinFinal', 'dlgWait.hide()', rlx);
    }
};
