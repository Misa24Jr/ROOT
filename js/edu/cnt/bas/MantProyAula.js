var dialogsMantProyAula = new Object();
var pcbMantProyAulOrganizacion = new Object();
var pcbMantProyAulSuborganizacion = new Object();
var pcbMantProyAulCarrera = new Object();
var pcbMantProyAulPeriodo = new Object();
var pcbMantProyAulPosicion = new Object();
var pcbMantProyAulSeccion = new Object();
var editsMantProyAulNombre = new Object();
var pcbMantProyAulLapso = new Object();
var calendarsMantProyAulHorInicio = new Object();
var calendarsMantProyAulHorFin = new Object();
var memoMantProyAulPotencialidades = new Object();
var memoMantProyAulIntereses = new Object();
var memoMantProyAulNecesidades = new Object();
var memoMantProyAulJustificacion = new Object();
var gridsMantProyAulAreAprendizaje = new Object();
var selectListMantProyAulAreIntCurricilares = new Object();
var selectListMantProyAulEjeIntegradores = new Object(); 
var selectListMantProyAulEvaluacion = new Object();
var pcbMantProyAulAreCono = new Object();
var pcbMantProyAulAreComp = new Object();
var pcbMantProyAulAreCont = new Object();
var memoMantProyAulAreIndicador = new Object();
var gridsMantProyAulArea = new Object();
var editsMantProyAulActActividad = new Object();
var pcbMantProyAulActAreCono = new Object();
var pcbMantProyAulActComp = new Object();
var pcbMantProyAulActCont = new Object();
var memoMantProyAulActIndicador = new Object();
var gridsMantProyAulActividad = new Object();
var selectListMantProyAulEstrategias = new Object();
var selectListMantProyAulRecursos = new Object();
var imgButtonsMantProyAulAgregar = new Object();
var imgButtonsMantProyAulModificar = new Object();
var imgButtonsMantProyAulEliminar = new Object();
var imgButtonsMantProyAulLimpiar = new Object();
var imgButtonsMantProyAulBuscar = new Object();
var imgButtonsMantProyAulReporte = new Object();
var imgButtonsMantProyAulSalir = new Object();
var imgButtonsMantProyAulIntCurAgregar = new Object();
var imgButtonsMantProyAuEjeIntAgregar = new Object();
var imgButtonsMantProyAulInsAgregar = new Object();
var imgButtonsMantProyAulAreConAgregar = new Object();
var imgButtonsMantProyAulAreConEliminar = new Object();
var imgButtonsMantProyAulAreConLimpiar = new Object();
var imgButtonsMantProyAulActAgregar = new Object();
var imgButtonsMantProyAulActEliminar = new Object();
var imgButtonsMantProyAulActLimpiar = new Object();
var imgButtonsMantProyAulEstAgregar = new Object();
var imgButtonsMantProyAulRecAgregar = new Object();
var mwAplRegInscripcion  = new Object();// minWindow

var MantProyAula = {
	windowName: 'MantProyAula',
	isCreate: false,
	idProyecto: 0,
	idActividad: 0,
	idPryCurAre: 0,
	objGrid: new Object(),
	
	show: function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
			include('js/edu/cnt/rpt/RepoProyAprendizaje');	
		}
		if (dialogsMantProyAula.isByClean()) 
			this.limpiar();
			
		dialogsMantProyAula.show();
	},
	
	hide: function() {
		dialogsMantProyAula.hide();
	},
	
	createMWs: function() {
		mwMantProyAula = desktop.addMinWindow('Proyecto Aula', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsMantProyAula.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},
	
	dialogsMantProyAula_Init: function() {
		dialogsMantProyAula.setMinimizeXY(0, 0);
		dialogsMantProyAula.setCenterScreen();
		dialogsMantProyAula.addSpace(0, 0, 20);
		dialogsMantProyAula.addLn(1, 1, 1);
		dialogsMantProyAula.setHeightCell(1,1,12);
		dialogsMantProyAula.addObjToDialog(tabsMantProyAula, 2, 1);
	},
		///////////////////////PANEL//PROYECTO//APRENDIZAJE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
	tabsMantProyAula_Init: function() {
		tabsMantProyAula.selectTab(7);
		tabsMantProyAula.selectTab(6);
		tabsMantProyAula.selectTab(5);
		tabsMantProyAula.selectTab(4);
		tabsMantProyAula.selectTab(3);
		tabsMantProyAula.selectTab(2);
		tabsMantProyAula.selectTab(1);
		tabsMantProyAula.selectTab(0);
		tabsMantProyAula.setSizeText(8);
		tabsMantProyAula.setFontFamily('helvetica','black');
		tabsMantProyAula.setBorderWidthPanel(0);
		tabsMantProyAula.addLnToGridPanel(0,6)
		var c1 = container.create("c1");
		c1.setDimension(876,490);
		c1.addObject(pcbMantProyAulOrganizacion, 20,80);
		c1.addObject(pcbMantProyAulSuborganizacion, 326,80);
		c1.addObject(pcbMantProyAulCarrera, 636,80);
		c1.addObject(pcbMantProyAulPeriodo, 20,105);
		c1.addObject(pcbMantProyAulPosicion, 326,105);
		c1.addObject(pcbMantProyAulSeccion, 636,105);
		c1.addObject(pcbMantProyAulLapso, 20, 130);
		c1.addObject(calendarsMantProyAulHorInicio.getEditCalendar(), 326, 130);
		calendarsMantProyAulHorInicio.setWidthEditCalendar(127);
		calendarsMantProyAulHorInicio.setCaption('Fecha Inicio:', 1,129);
		calendarsMantProyAulHorInicio.sendToFrom(100);
		c1.addObject(calendarsMantProyAulHorFin.getEditCalendar(), 636, 130);
		calendarsMantProyAulHorFin.setWidthEditCalendar(127);
		calendarsMantProyAulHorFin.setCaption('Fecha Fin:', 1,100);
		calendarsMantProyAulHorFin.sendToFrom(100);
		c1.addObject(editsMantProyAulNombre, 20, 155);
		c1.addObject(memoMantProyAulPotencialidades, 20, 180);
		memoMantProyAulPotencialidades.vAlignCaption('middle');
		memoMantProyAulPotencialidades.setDimension(737, 33);
		memoMantProyAulPotencialidades.setMaxLength(5000);
		memoMantProyAulIntereses.vAlignCaption('middle');
		memoMantProyAulIntereses.setDimension(737, 33);
		memoMantProyAulIntereses.setMaxLength(5000); 
		c1.addObject(memoMantProyAulIntereses, 20, 224);
		memoMantProyAulIntereses.vAlignCaption('middle');
		memoMantProyAulIntereses.setDimension(737, 33);
		memoMantProyAulIntereses.setMaxLength(5000); 
		c1.addObject(memoMantProyAulNecesidades, 20, 269);
		memoMantProyAulNecesidades.vAlignCaption('middle');
		memoMantProyAulNecesidades.setDimension(737, 33);
		memoMantProyAulNecesidades.setMaxLength(5000);
		c1.addObject(memoMantProyAulJustificacion, 20, 310);
		memoMantProyAulJustificacion.vAlignCaption('middle');
		memoMantProyAulJustificacion.setDimension(737, 33);
		memoMantProyAulJustificacion.setMaxLength(5000);
		c1.addObject(gridsMantProyAulAreAprendizaje.getObject(),20,354);
		tabsMantProyAula.addObjToGridPanel(0, c1, 4, 1);
		///////////////////////PANEL//INT.CURRICULARES///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		tabsMantProyAula.addLnToGridPanel(1,6)
		c2 = container.create("c2");
		c2.setDimension(876,490);
		c2.addObject(selectListMantProyAulAreIntCurricilares, 20, 80);
		selectListMantProyAulAreIntCurricilares.setSizeTextTitle(10);
        selectListMantProyAulAreIntCurricilares.setFont('verdana','black',12);
		selectListMantProyAulAreIntCurricilares.setBgColor('white');
		c2.addObject(imgButtonsMantProyAulIntCurAgregar.getObject(),406,570);
		imgButtonsMantProyAulIntCurAgregar.setDimension(90,22);
		tabsMantProyAula.addObjToGridPanel(1, c2, 5, 1);
		tabsMantProyAula.addLnToGridPanel(2,6)
		/////////////////////////////////////////EJES///INTEGRADORES////////////////////////////////////////////////////////////////////////
		c5 = container.create("c5");
		c5.setDimension(876,490);
		c5.addObject(selectListMantProyAulEjeIntegradores, 20,80);
		c5.addObject(imgButtonsMantProyAuEjeIntAgregar.getObject(),406,570);
		imgButtonsMantProyAuEjeIntAgregar.setDimension(90,22);
		tabsMantProyAula.addObjToGridPanel(2, c5, 5, 1);
		tabsMantProyAula.addLnToGridPanel(4,6);
		//////////////////////////////////////PANEL///EVALUACION///////////////////////////////////////////////////////
		c7 = container.create("c7");
		c7.setDimension(876,490);
		c7.addObject(selectListMantProyAulEvaluacion, 20,80);
		c7.addObject(imgButtonsMantProyAulInsAgregar.getObject(),406,570);
		imgButtonsMantProyAulInsAgregar.setDimension(90,22);
		tabsMantProyAula.addObjToGridPanel(3, c7, 5, 1);
		tabsMantProyAula.addLnToGridPanel(6,6);
		////////////////////////////AREAS/CONOCIMIENTO//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		c4 = container.create("c4");
		c4.setDimension(876,490);
		c4.addObject(pcbMantProyAulAreCono, 20,80);
		c4.addObject(pcbMantProyAulAreComp, 20,105);
		c4.addObject(pcbMantProyAulAreCont, 20,130);
		c4.addObject(memoMantProyAulAreIndicador, 20,155);
		memoMantProyAulAreIndicador.vAlignCaption('middle');
		memoMantProyAulAreIndicador.setMaxLength(5000);
		c4.addObject(gridsMantProyAulArea.getObject(),20,202);
		c4.addObject(imgButtonsMantProyAulAreConAgregar.getObject(),288,570);
		imgButtonsMantProyAulAreConAgregar.setDimension(90,22);
		c4.addObject(imgButtonsMantProyAulAreConEliminar.getObject(),406,570);
		imgButtonsMantProyAulAreConEliminar.setDimension(90,22);
		c4.addObject(imgButtonsMantProyAulAreConLimpiar.getObject(),530,570);
		imgButtonsMantProyAulAreConLimpiar.setDimension(90,22);
		tabsMantProyAula.addObjToGridPanel(4, c4, 5, 1);
		tabsMantProyAula.addLnToGridPanel(3,6);
		////////////////////////////ACTIVIDADES/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		c3 = container.create("c3");
		c3.setDimension(876,490);
		c3.addObject(editsMantProyAulActActividad, 20, 80);
		c3.addObject(pcbMantProyAulActAreCono, 20, 105);
		c3.addObject(pcbMantProyAulActComp, 20, 130);
		c3.addObject(pcbMantProyAulActCont, 20, 155);
		c3.addObject(memoMantProyAulActIndicador, 20, 180);
		c3.addObject(gridsMantProyAulActividad.getObject(),20,240);
		c3.addObject(imgButtonsMantProyAulActAgregar.getObject(),288,570);
		imgButtonsMantProyAulActAgregar.setDimension(90,22);
		c3.addObject(imgButtonsMantProyAulActEliminar.getObject(),406,570);
		imgButtonsMantProyAulActEliminar.setDimension(90,22);
		c3.addObject(imgButtonsMantProyAulActLimpiar.getObject(),530,570);
		imgButtonsMantProyAulActLimpiar.setDimension(90,22);
		tabsMantProyAula.addObjToGridPanel(5, c3, 5, 1);
		tabsMantProyAula.addLnToGridPanel(2,6)
		////////////////////////////////////////PANEL///ESTRATATEGIAS///////////////////////////////////////////////////////
		c6 = container.create("c6");
		c6.setDimension(876,490);
		c6.addObject(selectListMantProyAulEstrategias, 20,80);
		c6.addObject(imgButtonsMantProyAulEstAgregar.getObject(),406,570);
		imgButtonsMantProyAulEstAgregar.setDimension(90,22);
		tabsMantProyAula.addObjToGridPanel(6, c6, 5, 1);
		tabsMantProyAula.addLnToGridPanel(5,6);
		/////////////////////////////////////PANEL//RECURSOS//////////////////////////////////////////////////
		c8 = container.create("c8");
		c8.setDimension(876,490);
		c8.addObject(selectListMantProyAulRecursos, 20,80);
		c8.addObject(imgButtonsMantProyAulRecAgregar.getObject(),406,570);
		imgButtonsMantProyAulRecAgregar.setDimension(90,22);
		tabsMantProyAula.addObjToGridPanel(7, c8, 5, 1);
		//////////////////////////BOTONES///PRINCIPALES///DEL////TABS///PROYECTO//APRENDIZAJE////////////////////////////////////////////////////////////////////////////////////////////
		c1.addObject(imgButtonsMantProyAulAgregar, 63,570);
		imgButtonsMantProyAulAgregar.setDimension(90,22);
		c1.addObject(imgButtonsMantProyAulModificar, 173,570);
		imgButtonsMantProyAulModificar.setDimension(90,22);
		c1.addObject(imgButtonsMantProyAulEliminar, 292,570);
		imgButtonsMantProyAulEliminar.setDimension(90,22);
		c1.addObject(imgButtonsMantProyAulLimpiar, 407,570);
		imgButtonsMantProyAulLimpiar.setDimension(90,22);
		c1.addObject(imgButtonsMantProyAulReporte, 523,570);
		imgButtonsMantProyAulReporte.setDimension(90,22);
		c1.addObject(imgButtonsMantProyAulBuscar, 637,570);
		imgButtonsMantProyAulBuscar.setDimension(90,22);
		c1.addObject(imgButtonsMantProyAulSalir, 753,570);
        imgButtonsMantProyAulSalir.setDimension(90,22); 
        tabsMantProyAula.addLnToGridPanel(0,554);
        memoMantProyAulPotencialidades.style.zIndex = 1000;
        memoMantProyAulIntereses.style.zIndex = 999;
        memoMantProyAulNecesidades.style.zIndex = 998;
        memoMantProyAulJustificacion.style.zIndex = 997;
        memoMantProyAulAreIndicador.style.zIndex = 1000;
        memoMantProyAulActIndicador.style.zIndex = 1000;
	},

	gridsMantProyAulAreAprendizaje_Init : function() {
        gridsMantProyAulAreAprendizaje.setFixColRow(false,true);
        gridsMantProyAulAreAprendizaje.addTitleVectorX(['Fecha Inicio','Fecha Fin','Lapso','Proyecto','idProyecto','idLapso','dePotencialidad','deInteres','deNecesidad','deJustificacion']);
        gridsMantProyAulAreAprendizaje.showData();
        gridsMantProyAulAreAprendizaje.setSizeCol(1,74);
        gridsMantProyAulAreAprendizaje.setSizeCol(2,74);
        gridsMantProyAulAreAprendizaje.setSizeCol(3,91);
        gridsMantProyAulAreAprendizaje.setSizeCol(4,622);
        gridsMantProyAulAreAprendizaje.setSizeCol(5,0);
        gridsMantProyAulAreAprendizaje.setSizeCol(6,0);
        gridsMantProyAulAreAprendizaje.setSizeCol(7,0);
        gridsMantProyAulAreAprendizaje.setSizeCol(8,0);
        gridsMantProyAulAreAprendizaje.setSizeCol(9,0);
        gridsMantProyAulAreAprendizaje.setSizeCol(10,0);
        gridsMantProyAulAreAprendizaje.hideCol(5);
        gridsMantProyAulAreAprendizaje.hideCol(6);
        gridsMantProyAulAreAprendizaje.hideCol(7);
        gridsMantProyAulAreAprendizaje.hideCol(8);
        gridsMantProyAulAreAprendizaje.hideCol(9);
        gridsMantProyAulAreAprendizaje.hideCol(10);
	},
	
	gridsMantProyAulArea_Init : function() {
        gridsMantProyAulArea.setFixColRow(false,true);
        gridsMantProyAulArea.addTitleVectorX(['Área','Componente','Contenido','Indicador','idArea','idMateria','idComp','idPryCurAre']);
        gridsMantProyAulArea.showData();
        gridsMantProyAulArea.setSizeCol(1,130);
        gridsMantProyAulArea.setSizeCol(2,300);
        gridsMantProyAulArea.setSizeCol(3,300);
        gridsMantProyAulArea.setSizeCol(4,132);
        gridsMantProyAulArea.setSizeCol(5,0);
        gridsMantProyAulArea.setSizeCol(6,0);
        gridsMantProyAulArea.setSizeCol(7,0);
        gridsMantProyAulArea.setSizeCol(8,0);
        gridsMantProyAulArea.hideCol(5);
        gridsMantProyAulArea.hideCol(6);
        gridsMantProyAulArea.hideCol(7);
        gridsMantProyAulArea.hideCol(8);
	},
	
	gridsMantProyAulActividad_Init : function() {
        gridsMantProyAulActividad.setFixColRow(false,true);
        gridsMantProyAulActividad.addTitleVectorX(['Actividad','Área','Componente','Contenido','Indicador','idMateria','idComp','idPryCurAre','idActi']);
        gridsMantProyAulActividad.showData();
        gridsMantProyAulActividad.setSizeCol(1,130);
        gridsMantProyAulActividad.setSizeCol(2,130);
        gridsMantProyAulActividad.setSizeCol(3,235);
        gridsMantProyAulActividad.setSizeCol(4,235);
        gridsMantProyAulActividad.setSizeCol(5,132);
        gridsMantProyAulActividad.setSizeCol(6,0);
        gridsMantProyAulActividad.setSizeCol(7,0);
        gridsMantProyAulActividad.setSizeCol(8,0);
        gridsMantProyAulActividad.setSizeCol(9,0);
        gridsMantProyAulActividad.hideCol(6);
        gridsMantProyAulActividad.hideCol(7);
        gridsMantProyAulActividad.hideCol(8);
        gridsMantProyAulActividad.hideCol(9);
	},

	create : function() {
        /////////////////////////////////////////////////INFORMACIÓN GENERAL/////////////////////////////////////////////////
		dialogsMantProyAula = dialogs.create('dialogsMantProyAula',0,0,907,580,'PROYECTO DE APRENDIZAJE');   
		dialogsMantProyAula.setAdjY(20);
        ////////////////////////////////////////////////////////COMPONENTE TABS///////////////////////////////////////////////////////////////////
		tabsMantProyAula = tabs.create('tabsMantProyAula',885,112,['PROYECTO DE APRENDIZAJE','INT. CURRICULARES','EJES INTEGRADORES','EVALUACÍON','ÁREAS DEL CONOCIMIENTO','ACTIVIDADES','ESTRATEGIAS','RECURSOS']); 
        ////////////////////////////////////////////////////////PROYECTO/DE/AULA///////////////////////////////////////////////////////////////////
		pcbMantProyAulOrganizacion = powerComboBox.create('pcbMantProyAulOrganizacion','pcbMantProyAulOrganizacion','Organización (+):',1,125);
		pcbMantProyAulOrganizacion.setValidEmpty();
		pcbMantProyAulOrganizacion.enableReadOnlyEditor();
		pcbMantProyAulOrganizacion.addEmptyOption();
		pcbMantProyAulSuborganizacion = powerComboBox.create('pcbMantProyAulSuborganizacion','pcbMantProyAulSuborganizacion','Suborganización (^):',1,129);
		pcbMantProyAulSuborganizacion.setValidEmpty();
		pcbMantProyAulSuborganizacion.enableReadOnlyEditor();
		pcbMantProyAulSuborganizacion.addEmptyOption();
		pcbMantProyAulCarrera = powerComboBox.create('pcbMantProyAulCarrera','pcbMantProyAulCarrera','Carrera (^):',1,100);
		pcbMantProyAulCarrera.setValidEmpty();
		pcbMantProyAulCarrera.enableReadOnlyEditor();
		pcbMantProyAulCarrera.addEmptyOption();
		pcbMantProyAulPeriodo = powerComboBox.create('pcbMantProyAulPeriodo','pcbMantProyAulPeriodo','Periodo (+):',1,125);
		pcbMantProyAulPeriodo.setValidEmpty();
		pcbMantProyAulPeriodo.enableReadOnlyEditor();
		pcbMantProyAulPeriodo.addEmptyOption();
		pcbMantProyAulLapso = powerComboBox.create('pcbMantProyAulLapso','pcbMantProyAulLapso','Lapso (*):',1,125);
		pcbMantProyAulLapso.setValidEmpty();
		pcbMantProyAulLapso.enableReadOnlyEditor();
		pcbMantProyAulLapso.addEmptyOption();
		pcbMantProyAulLapso.setFieldFind(true);
		editsMantProyAulNombre = edits.create('editsMantProyAulNombre','editsMantProyAulNombre','Nombre Proyecto:',1,125,'normal');
		editsMantProyAulNombre.setSizeEdit(740);
		editsMantProyAulNombre.setMaxLength(500); 
		editsMantProyAulNombre.setValidEmpty();
		editsMantProyAulNombre.setFieldFind(true);
		pcbMantProyAulPosicion = powerComboBox.create('pcbMantProyAulPosicion','pcbMantProyAulPosicion','Posición (^):',1,129);
		pcbMantProyAulPosicion.setValidEmpty();
		pcbMantProyAulPosicion.enableReadOnlyEditor();
		pcbMantProyAulPosicion.addEmptyOption();
		pcbMantProyAulSeccion = powerComboBox.create('pcbMantProyAulSeccion','pcbMantProyAulSeccion','Sección (^):',1,100);
		pcbMantProyAulSeccion.setDataType('string');
		pcbMantProyAulSeccion.setValidEmpty();
		pcbMantProyAulSeccion.enableReadOnlyEditor();
		pcbMantProyAulSeccion.addEmptyOption();
		calendarsMantProyAulHorInicio = calendars.create('calendarsMantProyAulHorInicio');
		calendarsMantProyAulHorInicio.setValidEmpty(); 
		calendarsMantProyAulHorFin = calendars.create('calendarsMantProyAulHorFin');
		calendarsMantProyAulHorFin.setValidEmpty(); 
		memoMantProyAulPotencialidades = memo.create('memoMantProyAulPotencialidades','Potencialidades:',1,0,124);
		memoMantProyAulPotencialidades.setValidEmpty();  
		memoMantProyAulIntereses = memo.create('memoMantProyAulIntereses','Intereses:',1,0,124);
		memoMantProyAulIntereses.setValidEmpty(); 
		memoMantProyAulNecesidades = memo.create('memoMantProyAulNecesidades','Necesidades:',1,0,124);
		memoMantProyAulNecesidades.setValidEmpty();  
		memoMantProyAulJustificacion = memo.create('memoMantProyAulJustificacion','Justificación:',1,0,124);
		memoMantProyAulJustificacion.setValidEmpty();
		gridsMantProyAulAreAprendizaje = grids.create('gridsMantProyAulAreAprendizaje',8,10); 
		imgButtonsMantProyAulAgregar = imgButtons.create('imgButtonsAplRegInsCarAgregar','Agregar','ok.png');
		imgButtonsMantProyAulModificar = imgButtons.create('imgButtonsAplRegInsCarModificar','Modificar','icono_modificar.png');
		imgButtonsMantProyAulModificar.setDisable();
		imgButtonsMantProyAulEliminar = imgButtons.create('imgButtonsAplRegInsCarEliminar','Eliminar','eliminar.png');
		imgButtonsMantProyAulEliminar.setDisable();      
		imgButtonsMantProyAulLimpiar = imgButtons.create('imgButtonsAplRegInsCarLimpiar','Limpiar','limpiar.png');
		imgButtonsMantProyAulBuscar = imgButtons.create('imgButtonsAplRegInsCarBuscar','Buscar','icono_buscar.png');
		imgButtonsMantProyAulReporte = imgButtons.create('imgButtonsAplRegInsCarReporte','Reporte','print.png');
		imgButtonsMantProyAulSalir = imgButtons.create('imgButtonsAplRegInsCarSalir','Salir','salir.png');
		/////////////////////////////////////////////////////////TABS/INT//CURRICULARES//////////////////////////////////////////////////////////////////////////////////////////////////
		selectListMantProyAulAreIntCurricilares = selectList.create('selectListMantProyAulAreIntCurricilares', 451, 839, 'INTENCIONALIDADES CURRICULARES');
		imgButtonsMantProyAulIntCurAgregar = imgButtons.create('imgButtonsMantProyAulIntCurAgregar','Guardar.','ok.png');
		////////////////////////////////////////////////////////TABS///EJES///INTEGRADORES///////////////////////////////////////////////////////////////////////////////////////////////
		selectListMantProyAulEjeIntegradores = selectList.create('selectListMantProyAulEjeIntegradores', 451, 839, 'EJES INTEGRADORES');
		imgButtonsMantProyAuEjeIntAgregar = imgButtons.create('imgButtonsMantProyAuEjeIntAgregar','Guardar.','ok.png');
		/////////////////////////////////////////////////////////TABS///ACTIVIDADES//////////////////////////////////////////////////////////////////////////////////////////////////////
		editsMantProyAulActActividad = edits.create('editsMantProyAulActActividad','editsMantProyAulActActividad','Actividad:',1,155,'normal');
		editsMantProyAulActActividad.setSizeEdit(710);
		editsMantProyAulActActividad.setMaxLength(5000); 
		editsMantProyAulActActividad.setValidEmpty();
		pcbMantProyAulActAreCono = powerComboBox.create('pcbMantProyAulActAreCono','pcbMantProyAulActAreCono','Área de Conocimiento (^):',1,155);
		pcbMantProyAulActAreCono.setWidthCombo(689);
		pcbMantProyAulActAreCono.setDataType('string');
		pcbMantProyAulActAreCono.setValidEmpty();
		pcbMantProyAulActAreCono.enableReadOnlyEditor();
		pcbMantProyAulActAreCono.addEmptyOption();
		pcbMantProyAulActComp = powerComboBox.create('pcbMantProyAulActComp','pcbMantProyAulActComp','Componente (^):',1,155);
		pcbMantProyAulActComp.setWidthCombo(689);
		pcbMantProyAulActComp.setValidEmpty();
		pcbMantProyAulActComp.enableReadOnlyEditor();
		pcbMantProyAulActComp.addEmptyOption();
		pcbMantProyAulActCont = powerComboBox.create('pcbMantProyAulActCont','pcbMantProyAulActCont','Contenido (^):',1,155);
		pcbMantProyAulActCont.setWidthCombo(689);
		pcbMantProyAulActCont.setValidEmpty();
		pcbMantProyAulActCont.enableReadOnlyEditor();
		pcbMantProyAulActCont.addEmptyOption();
		memoMantProyAulActIndicador = memo.create('memoMantProyAulActIndicador','Indicador:',1,0,154);
		memoMantProyAulActIndicador.vAlignCaption('middle');
		memoMantProyAulActIndicador.setDimension(708, 45);
		memoMantProyAulActIndicador.setMaxLength(5000);
		memoMantProyAulActIndicador.setValidEmpty();
		gridsMantProyAulActividad = grids.create('gridsMantProyAulActividad',14,9);
		imgButtonsMantProyAulActAgregar = imgButtons.create('imgButtonsMantProyAulActAgregar','Guardar.','ok.png');
		imgButtonsMantProyAulActEliminar = imgButtons.create('imgButtonsMantProyAulActEliminar','Eliminar','eliminar.png');
		imgButtonsMantProyAulActLimpiar = imgButtons.create('imgButtonsMantProyAulActLimpiar','Limpiar','limpiar.png');
		/////////////////////////////////////////////////////////TABS/CONTENIDOS/////////////////////////////////////////////////////////////////////////////////////////////////////////
		pcbMantProyAulAreCono = powerComboBox.create('pcbMantProyAulAreCono','pcbMantProyAulAreCono','Área de Conocimiento (+):',1,155);
		pcbMantProyAulAreCono.setWidthCombo(689);
		pcbMantProyAulAreCono.setDataType('string');
		pcbMantProyAulAreCono.setValidEmpty();
		pcbMantProyAulAreCono.enableReadOnlyEditor();
		pcbMantProyAulAreCono.addEmptyOption();
		pcbMantProyAulAreComp = powerComboBox.create('pcbMantProyAulAreComp','pcbMantProyAulAreComp','Componente (^):',1,155);
		pcbMantProyAulAreComp.setWidthCombo(689);
		pcbMantProyAulAreComp.setValidEmpty();
		pcbMantProyAulAreComp.enableReadOnlyEditor();
		pcbMantProyAulAreComp.addEmptyOption();
		pcbMantProyAulAreCont = powerComboBox.create('pcbMantProyAulAreCont','pcbMantProyAulAreCont','Contenido (^):',1,155);
		pcbMantProyAulAreCont.setWidthCombo(689);
		pcbMantProyAulAreCont.setValidEmpty();
		pcbMantProyAulAreCont.enableReadOnlyEditor();
		pcbMantProyAulAreCont.addEmptyOption();
		pcbMantProyAulAreCont.setTypeObjOpt('input', 'checkbox');
		pcbMantProyAulAreCont.setFirstRowCheckMode(2);
		memoMantProyAulAreIndicador = memo.create('memoMantProyAulAreIndicador','Indicador:',1,0,154);
		memoMantProyAulAreIndicador.setDimension(708, 34);
		memoMantProyAulAreIndicador.setValidEmpty();
		gridsMantProyAulArea = grids.create('gridsMantProyAulArea',16,8); 
		imgButtonsMantProyAulAreConAgregar = imgButtons.create('imgButtonsMantProyAulAreConAgregar','Guardar.','ok.png');
		imgButtonsMantProyAulAreConEliminar = imgButtons.create('imgButtonsMantProyAulAreConEliminar','Eliminar','eliminar.png');
		imgButtonsMantProyAulAreConLimpiar = imgButtons.create('imgButtonsMantProyAulAreConLimpiar','Limpiar','limpiar.png');
		/////////////////////////////////////////////////////////TABS//ESTRATEGIAS//////////////////////////////////////////////////////////////////////////////////////////////////////
		selectListMantProyAulEstrategias = selectList.create('selectListMantProyAulEstrategias', 451, 839, 'Estrategias');
		imgButtonsMantProyAulEstAgregar = imgButtons.create('imgButtonsMantProyAulEstAgregar','Guardar.','ok.png');
		/////////////////////////////////////////////////////////TABS//EVALUACION///////////////////////////////////////////////////////////////////////////////////////////////////////
		selectListMantProyAulEvaluacion = selectList.create('selectListMantProyAulEvaluacion', 451, 839, 'INSTRUMENTOS DE EVALUACION');
		imgButtonsMantProyAulInsAgregar = imgButtons.create('imgButtonsMantProyAulInsAgregar','Guardar.','ok.png');
		/////////////////////////////////////////////////////////TABS///RECURSOS////////////////////////////////////////////////////////////////////////////////////////////////////////
		selectListMantProyAulRecursos = selectList.create('selectListMantProyAulRecursos', 451, 839, 'RECURSOS');
		imgButtonsMantProyAulRecAgregar = imgButtons.create('imgButtonsMantProyAulRecAgregar','Guardar.','ok.png');
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsMantProyAula_Init();
		this.tabsMantProyAula_Init();
		this.gridsMantProyAulAreAprendizaje_Init();
		this.gridsMantProyAulActividad_Init();
		this.gridsMantProyAulArea_Init();
		this.createMWs(); 
	},
	
	setVisibleTab : function(id) {
		switch (id) {
			case 1:
				tabsMantProyAula.showTab(1);
				tabsMantProyAula.showTab(2);
				tabsMantProyAula.showTab(3);
				tabsMantProyAula.showTab(4);
				tabsMantProyAula.showTab(5);
				tabsMantProyAula.hideTab(6);
				tabsMantProyAula.hideTab(7);
				break;
			case 2:
				tabsMantProyAula.showTab(6);
				tabsMantProyAula.showTab(7);
				break;
			case 3:
				tabsMantProyAula.hideTab(6);
				tabsMantProyAula.hideTab(7);
				break;
			default:
				tabsMantProyAula.hideTab(1);
				tabsMantProyAula.hideTab(2);
				tabsMantProyAula.hideTab(3);
				tabsMantProyAula.hideTab(4);
				tabsMantProyAula.hideTab(5);
				tabsMantProyAula.hideTab(6);
				tabsMantProyAula.hideTab(7);
				break;
		}
	},
	
	limpiar : function() {
		dialogsMantProyAula.setMsg("");
		this.setVisibleTab(0);
		//tabsMantProyAula.showPanel(5);
		Tool.rstPwrCmb(pcbMantProyAulOrganizacion);
		Tool.rstPwrCmb(pcbMantProyAulSuborganizacion);
		Tool.rstPwrCmb(pcbMantProyAulCarrera);
		Tool.rstPwrCmb(pcbMantProyAulPeriodo);
		Tool.rstPwrCmb(pcbMantProyAulSeccion);
		Tool.rstPwrCmb(pcbMantProyAulPosicion);
		Tool.rstPwrCmb(pcbMantProyAulSeccion);
		editsMantProyAulNombre.setValue("");
		Tool.rstPwrCmb(pcbMantProyAulLapso);
		calendarsMantProyAulHorInicio.clear();
		calendarsMantProyAulHorFin.clear();
		memoMantProyAulPotencialidades.setText("");
		memoMantProyAulIntereses.setText("");
		memoMantProyAulNecesidades.setText("");
		memoMantProyAulJustificacion.setText("");		
		gridsMantProyAulAreAprendizaje.clean();
		imgButtonsMantProyAulAgregar.setEnable();
		imgButtonsMantProyAulModificar.setDisable();
		imgButtonsMantProyAulEliminar.setDisable();
		imgButtonsMantProyAulReporte.setDisable();
		Tool.cnnSrv('MantObject', 'getMantOrganizacion', this.windowName + '.loadDataOrg()');
    },

	loadDataOrg: function() {
    	Tool.loadPowerComboData(dialogsMantProyAula, pcbMantProyAulOrganizacion, 0, 1, json('getData'));
    	Tool.getContext(dialogsMantProyAula, pcbMantProyAulOrganizacion, pcbMantProyAulSuborganizacion, pcbMantProyAulCarrera, "MantProyAula.resetElements('car')");
    },
  	
    resetElements : function(element) {
		gridsMantProyAulAreAprendizaje.clean();
		imgButtonsMantProyAulAgregar.setEnable();
		imgButtonsMantProyAulModificar.setDisable();
		imgButtonsMantProyAulEliminar.setDisable();
		this.setVisibleTab(0);
		editsMantProyAulNombre.setValue("");
		calendarsMantProyAulHorInicio.clear();
		calendarsMantProyAulHorFin.clear();
		memoMantProyAulIntereses.setText("");
		memoMantProyAulPotencialidades.setText("");
		memoMantProyAulNecesidades.setText("");
		memoMantProyAulJustificacion.setText("");
		
		if (element == 'org') {
			Tool.rstPwrCmb(pcbMantProyAulCarrera);
			Tool.rstPwrCmb(pcbMantProyAulPosicion);
			pcbMantProyAulPeriodo.setSelectedIndex(0);
			Tool.rstPwrCmb(pcbMantProyAulLapso);
			Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsMantProyAula, pcbMantProyAulSuborganizacion, 1, 2, pcbMantProyAulOrganizacion);		
		}
		else if (element == 'sub') {
			Tool.rstPwrCmb(pcbMantProyAulPosicion);
			pcbMantProyAulPeriodo.setSelectedIndex(0);
			Tool.rstPwrCmb(pcbMantProyAulLapso);
			Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsMantProyAula, pcbMantProyAulCarrera, -1, 3, pcbMantProyAulSuborganizacion);		
		}
		else if (element == 'car') {
			if (parseInt(pcbMantProyAulCarrera.setModeReturnGetText(2).getText()) == 147) {//CARRERA INICIAL
				pcbMantProyAulAreCont.setCaption('Finalidad (^):');
				pcbMantProyAulActCont.setCaption('Finalidad (^):');
				memoMantProyAulAreIndicador.setCaption('Aprendizaje Alcanzado:');
				memoMantProyAulActIndicador.setCaption('Aprendizaje Alcanzado:');
				gridsMantProyAulArea.setTitleColumn(3, 'Finalidad');
				gridsMantProyAulActividad.setTitleColumn(4, 'Finalidad');
				gridsMantProyAulArea.setTitleColumn(4, 'Aprendizaje');
				gridsMantProyAulActividad.setTitleColumn(5, 'Aprendizaje');
			}
			else {
				pcbMantProyAulAreCont.setCaption('Contenido (^):');
				pcbMantProyAulActCont.setCaption('Contenido (^):');
				memoMantProyAulAreIndicador.setCaption('Indicador:');
				memoMantProyAulActIndicador.setCaption('Indicador:');
				gridsMantProyAulArea.setTitleColumn(3, 'Contenido');
				gridsMantProyAulActividad.setTitleColumn(4, 'Contenido');
				gridsMantProyAulArea.setTitleColumn(4, 'Indicador');
				gridsMantProyAulActividad.setTitleColumn(5, 'Indicador');
			}
			pcbMantProyAulPeriodo.setSelectedIndex(0);
			Tool.rstPwrCmb(pcbMantProyAulLapso);
			Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsMantProyAula, pcbMantProyAulPeriodo, 0, 1, pcbMantProyAulCarrera.setModeReturnGetText(5));		
		}
		else if (element == 'per' && pcbMantProyAulCarrera.valid(dialogsMantProyAula)) {
	    	var rlx = xmlStructs.createRecordList("rlx");

			rlx.add('reg', pcbMantProyAulPeriodo);
			rlx.add('reg', pcbMantProyAulCarrera.setModeReturnGetText(2));
			Tool.cnnSrv('MantObject', 'getMantProyAulaInit', this.windowName + '.loadDataInit()', rlx);
		}
		else if (element == 'pos') {
			if (pcbMantProyAulPeriodo.valid(dialogsMantProyAula))
				Tool.getPowerComboData('MantObject', 'getMantProyAulaSeccPers', dialogsMantProyAula, pcbMantProyAulSeccion, 0, 1, pcbMantProyAulPeriodo, pcbMantProyAulCarrera.setModeReturnGetText(2), pcbMantProyAulPosicion);
	    }
	},

    loadDataInit: function() {
    	var rlx = xmlStructs.createRecordList("rlx");

    	Tool.loadPowerComboData(dialogsMantProyAula, pcbMantProyAulLapso, 3, 0, json('getMantLapso'));
    	if (json('getPosicion').data[0].length > 0) {
    		Tool.loadPowerComboData(dialogsMantProyAula, pcbMantProyAulPosicion, 0, 1, json('getPosicion'));
        	pcbMantProyAulPosicion.setSelectedIndex(1);
        	rlx.add('reg', pcbMantProyAulPeriodo);
    		rlx.add('reg', pcbMantProyAulCarrera.setModeReturnGetText(2));
    		rlx.add('reg', pcbMantProyAulPosicion);
    		Tool.cnnSrv('MantObject', 'getMantProyAulaSeccPers', this.windowName + '.loadDataSeccion()', rlx);
    	}
    },

    loadDataSeccion: function() {
    	if (json('getSeccionPersona').data[0].length > 0) {
    		Tool.loadPowerComboData(dialogsMantProyAula, pcbMantProyAulSeccion, 0, 1, json('getSeccionPersona'));
    		pcbMantProyAulSeccion.setSelectedIndex(1);
    		this.buscar();
    	}
    },
    
    buscar : function() {
		if (pcbMantProyAulPeriodo.valid(dialogsMantProyAula))
			if (pcbMantProyAulPosicion.valid(dialogsMantProyAula))
				if (pcbMantProyAulPeriodo.valid(dialogsMantProyAula))
					if (pcbMantProyAulSeccion.valid(dialogsMantProyAula)) {
						this.setVisibleTab(0);
						gridsMantProyAulAreAprendizaje.clean(); 
						imgButtonsMantProyAulAgregar.setEnable();
						imgButtonsMantProyAulModificar.setDisable();
						imgButtonsMantProyAulEliminar.setDisable();
						imgButtonsMantProyAulReporte.setDisable();
						Tool.getGridData("MantObject", "get"+this.windowName, dialogsMantProyAula, gridsMantProyAulAreAprendizaje, false, pcbMantProyAulPeriodo, pcbMantProyAulCarrera.setModeReturnGetText(2), pcbMantProyAulPosicion, pcbMantProyAulSeccion, pcbMantProyAulLapso, pcbMantProyAulLapso); 		    		
					}
    },

   	setDataProyApre : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (gridsMantProyAulAreAprendizaje.getDataCell(1) != "") {
			this.setVisibleTab(1);
			this.idProyecto = gridsMantProyAulAreAprendizaje.getDataCell(5);
			pcbMantProyAulLapso.findOption(gridsMantProyAulAreAprendizaje.getDataCell(6));
			editsMantProyAulNombre.setValue(gridsMantProyAulAreAprendizaje.getDataCell(4));
			calendarsMantProyAulHorInicio.setFechaToEdit(gridsMantProyAulAreAprendizaje.getDataCell(1));
			calendarsMantProyAulHorFin.setFechaToEdit(gridsMantProyAulAreAprendizaje.getDataCell(2));
			memoMantProyAulPotencialidades.setText(gridsMantProyAulAreAprendizaje.getDataCell(7));
			memoMantProyAulIntereses.setText(gridsMantProyAulAreAprendizaje.getDataCell(8));
			memoMantProyAulNecesidades.setText(gridsMantProyAulAreAprendizaje.getDataCell(9));
			memoMantProyAulJustificacion.setText(gridsMantProyAulAreAprendizaje.getDataCell(10));
			imgButtonsMantProyAulAgregar.setDisable();
			imgButtonsMantProyAulModificar.setEnable();
			imgButtonsMantProyAulEliminar.setEnable();
			imgButtonsMantProyAulReporte.setEnable();

	    	rlx.addInt('reg', this.idProyecto);
			rlx.add('reg', pcbMantProyAulCarrera.setModeReturnGetText(2));
			rlx.add('reg', pcbMantProyAulPeriodo);
	    	rlx.add('reg', pcbMantProyAulPosicion); 
	        Tool.cnnSrv('MantObject', 'getMantProyAulaTabInit', this.windowName + '.loadDataTab()', rlx);
		}
	},

	loadDataTab: function() {
		Tool.loadSelectListData(dialogsMantProyAula, selectListMantProyAulAreIntCurricilares, 0, 1, 2, json('getMantProyAulaCur'));
		Tool.loadSelectListData(dialogsMantProyAula, selectListMantProyAulEjeIntegradores, 0, 1, 2, json('getMantProyAulaEje'));
		Tool.loadSelectListData(dialogsMantProyAula, selectListMantProyAulEvaluacion, 0, 1, 2, json('getMantProyAulaIns'));
    	Tool.loadPowerComboData(dialogsMantProyAula, pcbMantProyAulAreCono, -1, 2, json('getMantProyAulaMateria'));
    	Tool.loadGridData(dialogsMantProyAula, gridsMantProyAulArea, false, json('getMantProyAulaArea'));
		Tool.loadPowerComboData(dialogsMantProyAula, pcbMantProyAulActAreCono, 0, 1, json('getMantProyAulaMateriaAct'));
    	Tool.loadGridData(dialogsMantProyAula, gridsMantProyAulActividad, false, json('getMantProyAulAct'));
        this.limpiarCoreUpdateActividad('limpiar');
    	this.limpiarCoreUpdateArea('limpiar');
    },

	setDataArea : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (gridsMantProyAulArea.getDataCell(1) != "") {
			this.idPryCurAre = gridsMantProyAulArea.getDataCell(8);
			imgButtonsMantProyAulAreConEliminar.setEnable();
			rlx.addInt('reg', gridsMantProyAulArea.getDataCell(6));
			rlx.addInt('reg', gridsMantProyAulArea.getDataCell(7)); 
		    Tool.cnnSrv('MantObject', 'getMantProyAulaCompCont', this.windowName + '.loadDataArea()', rlx);
		}			
	},  

	loadDataArea: function() {
		Tool.loadPowerComboData(dialogsMantProyAula, pcbMantProyAulAreComp, 0, 1, json('getMantProyAulaComp'));
		Tool.loadPowerComboData(dialogsMantProyAula, pcbMantProyAulAreCont, -1, 1, json('getMantProyAulaCont'));
		pcbMantProyAulAreCono.findOption(gridsMantProyAulArea.getDataCell(6), 1);
		pcbMantProyAulAreComp.findOption(gridsMantProyAulArea.getDataCell(7));
		pcbMantProyAulAreCont.setCheckEnable([gridsMantProyAulArea.getDataCell(5)]);
		memoMantProyAulAreIndicador.setText(gridsMantProyAulArea.getDataCell(4));
	},

    resetElementsArea : function(element) {
    	memoMantProyAulAreIndicador.setText("");
		imgButtonsMantProyAulAreConEliminar.setDisable();
		
		if (element == 'are') {
	    	this.idPryCurAre = 0;
			Tool.rstPwrCmb(pcbMantProyAulAreCont);			
			Tool.getPowerComboData('MantObject', 'getMantProyAulaComp', dialogsMantProyAula, pcbMantProyAulAreComp, 0, 1, pcbMantProyAulAreCono.setModeReturnGetText(1));		
		}
		else if (element == 'com') {
			Tool.getPowerComboData('MantObject', 'getMantProyAulaCont', dialogsMantProyAula, pcbMantProyAulAreCont, -1, 1, pcbMantProyAulAreCono.setModeReturnGetText(1), pcbMantProyAulAreComp);		
		}
		else if (element == 'con') {
			memoMantProyAulAreIndicador.setText(pcbMantProyAulAreCont.setModeReturnGetText(1).getText());
		}
    },

    setDataActividad : function() {
		var rlx = xmlStructs.createRecordList("rlx");
		
		if (gridsMantProyAulActividad.getDataCell(1) != "") {
			this.setVisibleTab(2);
			this.idPryCurAre = gridsMantProyAulActividad.getDataCell(8);
			this.idActividad = gridsMantProyAulActividad.getDataCell(9);
			editsMantProyAulActActividad.setValue(gridsMantProyAulActividad.getDataCell(1));
			imgButtonsMantProyAulActEliminar.setEnable();

			rlx.addInt('reg', this.idProyecto);
			rlx.addStr('reg', gridsMantProyAulActividad.getDataCell(6));
			rlx.addInt('reg', gridsMantProyAulActividad.getDataCell(7));
			rlx.addInt('reg', this.idActividad);
			Tool.cnnSrv('MantObject', 'getMantProyAulaCompContAct', this.windowName + '.loadDataActividad()', rlx);
		}
	},

	loadDataActividad : function() {
		if (gridsMantProyAulActividad.getDataCell(7) != 0) {
			Tool.loadPowerComboData(dialogsMantProyAula, pcbMantProyAulActComp, 0, 1, json('getMantProyAulaCompAct'));
			Tool.loadPowerComboData(dialogsMantProyAula, pcbMantProyAulActCont, -1, 1, json('getMantProyAulaContAct'));
			editsMantProyAulActActividad.setValue(gridsMantProyAulActividad.getDataCell(1));
			pcbMantProyAulActAreCono.findOption(gridsMantProyAulActividad.getDataCell(6));
			pcbMantProyAulActComp.findOption(gridsMantProyAulActividad.getDataCell(7));
			pcbMantProyAulActCont.findOption(gridsMantProyAulActividad.getDataCell(8));
			memoMantProyAulActIndicador.setText(gridsMantProyAulActividad.getDataCell(5));
		}
    	Tool.loadSelectListData(dialogsMantProyAula, selectListMantProyAulEstrategias, 0, 1, 2, json('getMantProyAulaEst'));
    	Tool.loadSelectListData(dialogsMantProyAula, selectListMantProyAulRecursos, 0, 1, 2, json('getMantProyAulaRec'));
 	},

 	resetElementsAreaAct : function(element) {
    	memoMantProyAulActIndicador.setText("");
    	imgButtonsMantProyAulActEliminar.setDisable();
		
		if (element == 'are') {
			Tool.rstPwrCmb(pcbMantProyAulActCont);			
			Tool.getPowerComboData('MantObject', 'getMantProyAulaCompAct', dialogsMantProyAula, pcbMantProyAulActComp, 0, 1, new MiniDataSet(this.idProyecto, 'int', false), pcbMantProyAulActAreCono);
		}
		else if (element == 'com') {
			Tool.getPowerComboData('MantObject', 'getMantProyAulaContAct', dialogsMantProyAula, pcbMantProyAulActCont, -1, 1, new MiniDataSet(this.idProyecto, 'int', false), pcbMantProyAulActAreCono, pcbMantProyAulActComp);
		}
		else if (element == 'con') {
			memoMantProyAulActIndicador.setText(pcbMantProyAulActCont.setModeReturnGetText(2).getText());
		}
    },

	setEvents : function() {
		pcbMantProyAulOrganizacion.onChange(this.windowName + ".resetElements('org')");
		pcbMantProyAulSuborganizacion.onChange(this.windowName + ".resetElements('sub')");
		pcbMantProyAulCarrera.onChange(this.windowName + ".resetElements('car')");
		pcbMantProyAulPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbMantProyAulPosicion.onChange(this.windowName + ".resetElements('pos')");
		pcbMantProyAulSeccion.onChange(this.windowName + ".resetElements('sec')");
		gridsMantProyAulAreAprendizaje.onClickCells(this.windowName+".setDataProyApre()"); 

		pcbMantProyAulAreCono.onChange(this.windowName + ".resetElementsArea('are')");
		pcbMantProyAulAreComp.onChange(this.windowName + ".resetElementsArea('com')");
		pcbMantProyAulAreCont.onChange(this.windowName + ".resetElementsArea('con')");
		gridsMantProyAulArea.onClickCells(this.windowName+".setDataArea()");
		
		pcbMantProyAulActAreCono.onChange(this.windowName + ".resetElementsAreaAct('are')");
		pcbMantProyAulActComp.onChange(this.windowName + ".resetElementsAreaAct('com')");
		pcbMantProyAulActCont.onChange(this.windowName + ".resetElementsAreaAct('con')");
		gridsMantProyAulActividad.onClickCells(this.windowName+".setDataActividad()");

		imgButtonsMantProyAulAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantProyAulModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantProyAulEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
		imgButtonsMantProyAulLimpiar.onClick(this.windowName+".limpiar()");
	  	imgButtonsMantProyAulBuscar.onClick(this.windowName+".buscar()");
	  	imgButtonsMantProyAulReporte.onClick(this.windowName+".getInfRepProy()");
	  	imgButtonsMantProyAulSalir.onClick('dialogsMantProyAula.close()');
	  	
	  	imgButtonsMantProyAulIntCurAgregar.onClick(this.windowName+".coreUpdateElement('agregar', 'Cur', selectListMantProyAulAreIntCurricilares, MantProyAula.idProyecto)");
	  	imgButtonsMantProyAuEjeIntAgregar.onClick(this.windowName+".coreUpdateElement('agregar', 'Eje', selectListMantProyAulEjeIntegradores, MantProyAula.idProyecto)");
		imgButtonsMantProyAulInsAgregar.onClick(this.windowName+".coreUpdateElement('agregar', 'Ins', selectListMantProyAulEvaluacion, MantProyAula.idProyecto)");
		imgButtonsMantProyAulAreConAgregar.onClick(this.windowName+".coreUpdateArea('agregar')");
		imgButtonsMantProyAulAreConEliminar.onClick(this.windowName+".coreUpdateArea('eliminar')");
		imgButtonsMantProyAulAreConLimpiar.onClick(this.windowName+".limpiarCoreUpdateArea('limpiar')");
		imgButtonsMantProyAulActAgregar.onClick(this.windowName+".coreUpdateActividad('agregar')");
		imgButtonsMantProyAulActEliminar.onClick(this.windowName+".coreUpdateActividad('eliminar')");
		imgButtonsMantProyAulActLimpiar.onClick(this.windowName+".limpiarCoreUpdateActividad('limpiar')");
		imgButtonsMantProyAulEstAgregar.onClick(this.windowName+".coreUpdateElement('agregar', 'Est', selectListMantProyAulEstrategias, MantProyAula.idActividad)");
		imgButtonsMantProyAulRecAgregar.onClick(this.windowName+".coreUpdateElement('agregar', 'Rec', selectListMantProyAulRecursos, MantProyAula.idActividad)");
    }, 

	getInfRepProy : function() {
		var rlx = xmlStructs.createRecordList("rlx");

  		if (this.idProyecto != 0) {
  			rlx.addInt('reg', this.idProyecto);
  			Tool.cnnSrv("MantObject", "getInfoReporteProyecto", "RepoProyAprendizaje.reporte1()", rlx);
  		}
	},

	loadGridComboAreaAct : function() {
		this.setVisibleTab(3);
		editsMantProyAulActActividad.setValue("");
		pcbMantProyAulActAreCono.setSelectedIndex(0);
		Tool.rstPwrCmb(pcbMantProyAulActComp);
		Tool.rstPwrCmb(pcbMantProyAulActCont);
		memoMantProyAulActIndicador.setText("");
		imgButtonsMantProyAulActEliminar.setDisable();
    	Tool.loadGridData(dialogsMantProyAula, gridsMantProyAulArea, false, json('getMantProyAulaArea'));
		Tool.loadPowerComboData(dialogsMantProyAula, pcbMantProyAulActAreCono, 0, 1, json('getMantProyAulaMateriaAct'));
    	Tool.loadGridData(dialogsMantProyAula, gridsMantProyAulActividad, false, json('getMantProyAulAct'));
	},
	
    limpiarCoreUpdateArea : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		this.idPryCurAre = 0;
    	pcbMantProyAulAreComp.setSelectedIndex(0);
		Tool.rstPwrCmb(pcbMantProyAulAreCont);
		memoMantProyAulAreIndicador.setText("");
		imgButtonsMantProyAulAreConEliminar.setDisable();
        if (methodName == "eliminar" && gridsMantProyAulArea.getTotalRecord() == 1) {
        	gridsMantProyAulArea.clean();
        	dlgWait.hide();
        }
        else {
    		rlx.addInt('reg', this.idProyecto);
    		Tool.cnnSrv("MantObject", "getMantProyAulaArea", this.windowName + ".loadGridComboAreaAct()", rlx);
        }
	},

	coreUpdateArea : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbMantProyAulAreCono.valid(dialogsMantProyAula))
			if (pcbMantProyAulAreComp.valid(dialogsMantProyAula))
				if (pcbMantProyAulAreCont.valid(dialogsMantProyAula)) {
		      		if (methodName == 'agregar') {
		            	rlx.addInt('reg', this.idPryCurAre);
		            	rlx.addInt('reg', pcbMantProyAulAreCono.setModeReturnGetText(0).getText());
		            	rlx.add('reg', memoMantProyAulAreIndicador);
		            	rlx.add('reg', pcbMantProyAulAreCont.setModeReturnGetText(0));
		        	}
		      		else {
		            	rlx.addInt('reg', this.idPryCurAre);
		      		}
		        	Tool.cnnSrv("MantObject", methodName + this.windowName + "Area", this.windowName + ".limpiarCoreUpdateArea('" + methodName + "')", rlx);
				}
	},

	limpiarCoreUpdateElement : function(methodName, tipo, id) {
		Tool.getSelectListData('MantObject', "get" + this.windowName + tipo, dialogsMantProyAula, this.objGrid, 0, 1, 2, new MiniDataSet(id, 'int', false));
	},

    coreUpdateElement : function(methodName, tipo, objGrid, id) {
		var rlx = xmlStructs.createRecordList("rlx");
		this.objGrid = objGrid;

    	rlx.addInt('reg', id);
		rlx.addInt('reg', objGrid.getRecordIdSelected());
		rlx.addStr('reg', tipo);
    	Tool.cnnSrv("MantObject", "agregarMantProyAulaElement", this.windowName + ".limpiarCoreUpdateElement('" + methodName + "', '" + tipo + "', " + id + ")", rlx);
	},

	limpiarCoreUpdateActividad : function(methodName) {
		this.idActividad = 0;
		this.setVisibleTab(3);
		editsMantProyAulActActividad.setValue("");
		pcbMantProyAulActAreCono.setSelectedIndex(0);
		Tool.rstPwrCmb(pcbMantProyAulActComp);
		Tool.rstPwrCmb(pcbMantProyAulActCont);
		memoMantProyAulActIndicador.setText("");
		imgButtonsMantProyAulActEliminar.setDisable();
        if (methodName == "limpiar" || (methodName == "eliminar" && gridsMantProyAulActividad.getTotalRecord() == 1)) { 
        	gridsMantProyAulActividad.clean();
        	dlgWait.hide();
        }
        else
			Tool.getGridData("MantObject", "getMantProyAulAct", dialogsMantProyAula, gridsMantProyAulActividad, false, new MiniDataSet(this.idProyecto, 'int', false)); 		    		
	},

	coreUpdateActividad : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMantProyAulActActividad.valid(dialogsMantProyAula))
			if (pcbMantProyAulActAreCono.valid(dialogsMantProyAula))
				if (pcbMantProyAulActComp.valid(dialogsMantProyAula))
					if (pcbMantProyAulActCont.valid(dialogsMantProyAula)) {
			      		if (methodName == 'agregar') {
			            	rlx.addInt('reg', this.idActividad);
			            	rlx.add('reg', editsMantProyAulActActividad);
			            	rlx.addInt('reg', this.idProyecto);
			            	rlx.add('reg', pcbMantProyAulActCont.setModeReturnGetText(0));
			            	rlx.add('reg', memoMantProyAulActIndicador);
			        	}
			      		else {
			            	rlx.addInt('reg', this.idActividad);
			      			rlx.addInt('reg', this.idPryCurAre);
			      		}
			        	Tool.cnnSrv("MantObject", methodName + "MantProyAulAct", this.windowName + ".limpiarCoreUpdateActividad('" + methodName + "')", rlx);
					}
	},

	limpiarCoreUpdate : function(methodName) {
		dialogsMantProyAula.setMsg("");
		this.setVisibleTab(0);
		pcbMantProyAulLapso.setSelectedIndex(0);
		editsMantProyAulNombre.setValue("");
		calendarsMantProyAulHorInicio.clear();
		calendarsMantProyAulHorFin.clear();
		memoMantProyAulIntereses.setText("");
		memoMantProyAulPotencialidades.setText("");
		memoMantProyAulNecesidades.setText("");
		memoMantProyAulJustificacion.setText("");
		imgButtonsMantProyAulAgregar.setEnable();
		imgButtonsMantProyAulModificar.setDisable();
		imgButtonsMantProyAulEliminar.setDisable();
		imgButtonsMantProyAulReporte.setDisable();
		
        if (methodName == "eliminar" && gridsMantProyAulAreAprendizaje.getTotalRecord() == 1) { 
        	gridsMantProyAulAreAprendizaje.clean();
        	dlgWait.hide();
        }
        else
			Tool.getGridData("MantObject", "get"+this.windowName, dialogsMantProyAula, gridsMantProyAulAreAprendizaje, false, pcbMantProyAulPeriodo, pcbMantProyAulCarrera.setModeReturnGetText(2), pcbMantProyAulPosicion, pcbMantProyAulSeccion, pcbMantProyAulLapso, pcbMantProyAulLapso); 		    		
	},
	
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");
			
		if (pcbMantProyAulPeriodo.valid(dialogsMantProyAula))
			if (pcbMantProyAulPosicion.valid(dialogsMantProyAula))
				if (pcbMantProyAulSeccion.valid(dialogsMantProyAula))
					if (calendarsMantProyAulHorInicio.valid(dialogsMantProyAula))
						if (calendarsMantProyAulHorFin.valid(dialogsMantProyAula))
							if (pcbMantProyAulLapso.valid(dialogsMantProyAula))
								if (editsMantProyAulNombre.valid(dialogsMantProyAula))
									if (memoMantProyAulPotencialidades.valid(dialogsMantProyAula))
										if (memoMantProyAulIntereses.valid(dialogsMantProyAula))
											if (memoMantProyAulNecesidades.valid(dialogsMantProyAula)) 
												if (memoMantProyAulJustificacion.valid(dialogsMantProyAula)) {
				                           			if (methodName == 'agregar' || methodName == 'modificar') {
				                           				rlx.add('reg', calendarsMantProyAulHorInicio);
				                                		rlx.add('reg', calendarsMantProyAulHorFin);
				                                		rlx.add('reg', editsMantProyAulNombre);
				                                		rlx.add('reg', memoMantProyAulPotencialidades);
				                           				rlx.add('reg', memoMantProyAulIntereses);
				                                		rlx.add('reg', memoMantProyAulNecesidades);
				                                		rlx.add('reg', memoMantProyAulJustificacion);
				                                		rlx.add('reg', pcbMantProyAulLapso);
				                              			if (methodName != 'modificar') {
					                                		rlx.add('reg', pcbMantProyAulCarrera.setModeReturnGetText(2));
					                                		rlx.add('reg', pcbMantProyAulPeriodo);
					                                		rlx.add('reg', pcbMantProyAulPosicion);
					                                		rlx.add('reg', pcbMantProyAulSeccion);
				                                		}
													}
													if (methodName != 'agregar') { 
														rlx.addInt('reg', this.idProyecto);
													}
													Tool.cnnSrv("MantObject", methodName + this.windowName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
												}
	}
};	