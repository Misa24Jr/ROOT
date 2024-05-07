var dialogsHojaRegTitulo = {};
var tabsHojaRegTitulo = {};
var pcbHojaRegTituloPeriodo = {};
var pcbHojaRegTituloCarrera = {};
var pcbHojaRegTituloCodFrm = {};
var pcbHojaRegTituloTipoEval = {};
var pcbHojaRegTituloTipoEvalSeccion = {};
var editsHojaRegTituloMonthEgreso = {};
var editsHojaRegTituloLugarFeExp = {};
var editsHojaRegTituloYearEgreso = {};
var editsHojaRegTituloNombreDoc = {};
var pcbHojaRegTituloTipoReg = {};
var editsHojaRegTituloCodPlanEstudio = {};
var memoHojaRegTituloObservacion = {};
var calendarHojaRegTituloFeRemision = {};
var containerDirector = {};
var editsHojaRegTituloNoDirector = {};
var editsHojaRegTituloCiDirector = {};
var containerCoordinador = {};
var editsHojaRegTituloNoCoordinador = {};
var editsHojaRegTituloCiCoordinador = {};
var containerFuncional = {};
var editsHojaRegTituloNoFuncional = {};
var editsHojaRegTituloCiFuncional = {};
var pcbHojaRegTituloPosicion = {};
var pcbHojaRegTituloSeccion = {};
var editsHojaRegTituloEstudiante = {};
var pcbHojaRegTituloPlantilla = {};
var customGridHojaRegTitulo = {};
var imgButtonsHojaRegTituloGuardar = {};
var imgButtonsHojaRegTituloBuscar = {};
var imgButtonsHojaRegTituloLimpiar = {};
var imgButtonsHojaRegTituloVerReg = {};
var imgButtonsHojaRegTituloVerTit = {};
var imgButtonsHojaRegTituloSalir = {};
var mwHojaRegistroTitulo = {};// minWindow
var rt = {};

var HojaRegistroTitulo = {
	windowName : 'HojaRegistroTitulo',
	isCreate : false,
	idRegTitulo : -1,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsHojaRegTitulo.isByClean())
 			this.limpiar();
		dialogsHojaRegTitulo.show();
		Vistaprevia.show();
		Vistaprevia.close()
	},
	
	hide : function() {
		dialogsHojaRegTitulo.hide();
	},
	
	createMWs : function() {
		mwHojaRegistroTitulo = desktop.addMinWindow('Hoja Titulo', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsHojaRegTitulo.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsHojaRegTitulo_Init : function() {
        dialogsHojaRegTitulo.setMinimizeXY(0, 0);
		dialogsHojaRegTitulo.setCenterScreen();
		dialogsHojaRegTitulo.addSpace(0, 0, 18);
		dialogsHojaRegTitulo.addObjToDialog(tabsHojaRegTitulo, 1, 1);		
		dialogsHojaRegTitulo.addLn(1,1,1);
		dialogsHojaRegTitulo.setHeightCell(1,1,196);
		dialogsHojaRegTitulo.addObject(imgButtonsHojaRegTituloGuardar,48, 562);		
		dialogsHojaRegTitulo.addObject(imgButtonsHojaRegTituloBuscar,163, 562);        
		dialogsHojaRegTitulo.addObject(imgButtonsHojaRegTituloLimpiar,278, 562);        
		dialogsHojaRegTitulo.addObject(imgButtonsHojaRegTituloVerReg,393, 562);        
		dialogsHojaRegTitulo.addObject(imgButtonsHojaRegTituloVerTit,508, 562);
		dialogsHojaRegTitulo.addObject(imgButtonsHojaRegTituloSalir,623, 562);
    },
	
    tabsHojaRegTitulo_Init: function() {
    	tabsHojaRegTitulo.showPanel(0);
		tabsHojaRegTitulo.setSizeText(12);
		tabsHojaRegTitulo.setFontFamily('Tw Cen MT Condensed Extra Bold');
		tabsHojaRegTitulo.setBorderWidthPanel(0);       	
		///////////////////////////////////TAB TITULO///////////////////////////////////////////////    
		var c1 = container.create("c1");
		c1.addObject(pcbHojaRegTituloPeriodo,20,90);
		c1.addObject(pcbHojaRegTituloCarrera,315,90);
		c1.addObject(pcbHojaRegTituloCodFrm,20,125);
		c1.addObject(pcbHojaRegTituloTipoEval,315,125);
		c1.addObject(editsHojaRegTituloMonthEgreso,557,125);
		c1.addObject(editsHojaRegTituloLugarFeExp,20,160);
		c1.addObject(editsHojaRegTituloYearEgreso,557,160);
		c1.addObject(editsHojaRegTituloNombreDoc,20,195);
		c1.addObject(pcbHojaRegTituloTipoReg,315,195);
		c1.addObject(editsHojaRegTituloCodPlanEstudio,557,195);
		c1.addObject(containerDirector,14,243);
		c1.addObject(editsHojaRegTituloNoDirector,20,260);
		c1.addObject(editsHojaRegTituloCiDirector,557,260);
		c1.addObject(containerCoordinador,14,325);
		c1.addObject(editsHojaRegTituloNoCoordinador,20,342);
		c1.addObject(editsHojaRegTituloCiCoordinador,557,342);
		c1.addObject(containerFuncional,14,406);
		c1.addObject(editsHojaRegTituloNoFuncional,20,422);
		c1.addObject(editsHojaRegTituloCiFuncional,557,422);
		c1.addObject(memoHojaRegTituloObservacion,20,490);
		c1.addObject(calendarHojaRegTituloFeRemision,557,500);
		tabsHojaRegTitulo.addObjToGridPanel(0, c1, 1, 1);		
		////////////////////////////////////////TAB ESTUDIANTE////////////////////////////////////////////    		
		var c2 = container.create("c2");
		c2.addObject(pcbHojaRegTituloTipoEvalSeccion,20,90);		
		c2.addObject(pcbHojaRegTituloPosicion,270,90);		
		c2.addObject(pcbHojaRegTituloSeccion,525,90);
		c2.addObject(editsHojaRegTituloEstudiante,20,530);
		c2.addObject(pcbHojaRegTituloPlantilla,544,530);
		c2.addObject(customGridHojaRegTitulo,20,115);
		tabsHojaRegTitulo.addObjToGridPanel(1, c2, 1, 1);		
    },

    create : function() {
  		dialogsHojaRegTitulo = dialogs.create('dialogsHojaRegTitulo',0,0,770,574,'HOJA DE REGISTRO DE TITULO');
		dialogsHojaRegTitulo.setAdjY(20);
		tabsHojaRegTitulo = tabs.create('tabsHojaRegTitulo', 765, 135, ['TITULO','ESTUDIANTE']);
		containerDirector = container.create("containerDirector",'Director',4);
		containerDirector.setFontTitle('verdana', 12, '#7e7e7e');
		containerDirector.setDimension(740,50);
		containerCoordinador = container.create("containerCoordinador",'Coordinador',4);
		containerCoordinador.setFontTitle('verdana', 12, '#7e7e7e');
		containerCoordinador.setDimension(740,50);
        containerFuncional = container.create("containerFuncional",'Funcionario',4);
		containerFuncional.setFontTitle('verdana', 12, '#7e7e7e');
        containerFuncional.setDimension(740,50);
		pcbHojaRegTituloPeriodo = powerComboBox.create('pcbHojaRegTituloPeriodo','pcbHojaRegTituloPeriodo','Periodo (+):',1,160);
		pcbHojaRegTituloPeriodo.setValidEmpty();
    	pcbHojaRegTituloPeriodo.addEmptyOption();
    	pcbHojaRegTituloPeriodo.enableReadOnlyEditor();
    	pcbHojaRegTituloPeriodo.setWidthCombo(85);
    	pcbHojaRegTituloCarrera = powerComboBox.create('pcbHojaRegTituloCarrera','pcbHojaRegTituloCarrera','Carrera (+):',1,120); 
    	pcbHojaRegTituloCarrera.setValidEmpty();
    	pcbHojaRegTituloCarrera.addEmptyOption();
    	pcbHojaRegTituloCarrera.enableReadOnlyEditor();
    	pcbHojaRegTituloCarrera.setWidthCombo(292);
		pcbHojaRegTituloCodFrm = powerComboBox.create('pcbHojaRegTituloCodFrm','pcbHojaRegTituloCodFrm','Código Formato (+):',1,160);
		pcbHojaRegTituloCodFrm.setValidEmpty();
    	pcbHojaRegTituloCodFrm.addEmptyOption();
		pcbHojaRegTituloCodFrm.setWidthCombo(85);
		pcbHojaRegTituloCodFrm.setDataType('string');
		pcbHojaRegTituloTipoReg = powerComboBox.create('pcbHojaRegTituloTipoReg','pcbHojaRegTituloTipoReg','Tipo Registro:',1,120);
		pcbHojaRegTituloTipoReg.setValidEmpty();
		pcbHojaRegTituloTipoReg.addEmptyOption();
		pcbHojaRegTituloTipoReg.setWidthCombo(75);
		pcbHojaRegTituloTipoReg.setDataType('string');
		pcbHojaRegTituloTipoEval = powerComboBox.create('pcbHojaRegTituloTipoEval','pcbHojaRegTituloTipoEval','Tipo Evaluación (^):',1,120);
		pcbHojaRegTituloTipoEval.setValidEmpty();
		pcbHojaRegTituloTipoEval.addEmptyOption();
		pcbHojaRegTituloTipoEval.enableReadOnlyEditor();
		pcbHojaRegTituloTipoEval.setWidthCombo(75);
		pcbHojaRegTituloTipoEval.addOptionAndSimpleValue(null, 'FINAL', 'F');
		pcbHojaRegTituloTipoEval.addOptionAndSimpleValue(null, 'REVISIÓN', 'R');
		pcbHojaRegTituloTipoEval.addOptionAndSimpleValue(null, 'PENDIENTE', 'M');
		pcbHojaRegTituloTipoEval.addOptionAndSimpleValue(null, 'OTRO', 'O');
		pcbHojaRegTituloTipoEval.setDataType('string');
		pcbHojaRegTituloTipoEvalSeccion = powerComboBox.create('pcbHojaRegTituloTipoEvalSeccion','pcbHojaRegTituloTipoEvalSeccion','Tipo Evaluación (*):',1,120);
		pcbHojaRegTituloTipoEvalSeccion.setValidEmpty();
		pcbHojaRegTituloTipoEvalSeccion.addEmptyOption();
		pcbHojaRegTituloTipoEvalSeccion.enableReadOnlyEditor();
		pcbHojaRegTituloTipoEvalSeccion.setWidthCombo(75);
		pcbHojaRegTituloTipoEvalSeccion.addOptionAndSimpleValue(null, 'FINAL', 'F');
		pcbHojaRegTituloTipoEvalSeccion.addOptionAndSimpleValue(null, 'REVISIÓN', 'R');
		pcbHojaRegTituloTipoEvalSeccion.addOptionAndSimpleValue(null, 'PENDIENTE', 'M');
		pcbHojaRegTituloTipoEvalSeccion.addOptionAndSimpleValue(null, 'OTRO', 'O');
		pcbHojaRegTituloTipoEvalSeccion.setDataType('string');
		pcbHojaRegTituloTipoEvalSeccion.setFieldFind(true);
		pcbHojaRegTituloTipoEvalSeccion.enableOnChangeToEmptyOption();
		editsHojaRegTituloMonthEgreso = edits.create('editsHojaRegTituloMonthEgreso','editsHojaRegTituloMonthEgreso','Mes Egreso:',1,105,'normal');      
		editsHojaRegTituloMonthEgreso.setValidEmpty();  
		editsHojaRegTituloMonthEgreso.setSizeEdit(86);
		editsHojaRegTituloLugarFeExp = edits.create('editsHojaRegTituloLugarFeExp','editsHojaRegTituloLugarFeExp','Lugar / Fecha Expedición:',1,160,'normal');      
		editsHojaRegTituloLugarFeExp.setValidEmpty();  
		editsHojaRegTituloLugarFeExp.setSizeEdit(351);
		editsHojaRegTituloYearEgreso = edits.create('editsHojaRegTituloYearEgreso','editsHojaRegTituloYearEgreso','Año Egreso:',1,105,'normal');      
		editsHojaRegTituloYearEgreso.setValidEmpty();  
		editsHojaRegTituloYearEgreso.setSizeEdit(86);
		editsHojaRegTituloNombreDoc = edits.create('editsHojaRegTituloNombreDoc','editsHojaRegTituloNombreDoc','Nombre Documento:',1,160,'normal');      
		editsHojaRegTituloNombreDoc.setValidEmpty();  
		editsHojaRegTituloNombreDoc.setSizeEdit(105);
		editsHojaRegTituloCodPlanEstudio = edits.create('editsHojaRegTituloCodPlanEstudio','editsHojaRegTituloCodPlanEstudio','Código:',1,105,'normal');      
		editsHojaRegTituloCodPlanEstudio.setValidEmpty();  
		editsHojaRegTituloCodPlanEstudio.setSizeEdit(86);
		editsHojaRegTituloNoDirector = edits.create('editsHojaRegTituloNoDirector','editsHojaRegTituloNoDirector','Apellidos / Nombres:',1,160,'normal');      
		editsHojaRegTituloNoDirector.setValidEmpty();  
		editsHojaRegTituloNoDirector.setSizeEdit(351);
		editsHojaRegTituloCiDirector = edits.create('editsHojaRegTituloCiDirector','editsHojaRegTituloCiDirector','Cedula:',1,105,'normal');      
		editsHojaRegTituloCiDirector.setValidEmpty();  
		editsHojaRegTituloCiDirector.setSizeEdit(86);
		editsHojaRegTituloNoCoordinador = edits.create('editsHojaRegTituloNoCoordinador','editsHojaRegTituloNoCoordinador','Apellidos / Nombres:',1,160,'normal');      
		editsHojaRegTituloNoCoordinador.setValidEmpty();  
		editsHojaRegTituloNoCoordinador.setSizeEdit(351);
		editsHojaRegTituloCiCoordinador = edits.create('editsHojaRegTituloCiCoordinador','editsHojaRegTituloCiCoordinador','Cedula:',1,105,'normal');      
		editsHojaRegTituloCiCoordinador.setValidEmpty();  
		editsHojaRegTituloCiCoordinador.setSizeEdit(86);
		editsHojaRegTituloNoFuncional = edits.create('editsHojaRegTituloNoFuncional','editsHojaRegTituloNoFuncional','Apellidos / Nombres:',1,160,'normal');      
		editsHojaRegTituloNoFuncional.setValidEmpty();  
		editsHojaRegTituloNoFuncional.setSizeEdit(351);
		editsHojaRegTituloCiFuncional = edits.create('editsHojaRegTituloCiFuncional','editsHojaRegTituloCiFuncional','Cedula:',1,105,'normal');      
		editsHojaRegTituloCiFuncional.setValidEmpty();  
		editsHojaRegTituloCiFuncional.setSizeEdit(86);
		memoHojaRegTituloObservacion = memo.create('memoHojaRegTituloObservacion','Observación:', 1, 1, 157);
		memoHojaRegTituloObservacion.setValidEmpty();
		memoHojaRegTituloObservacion.setMaxLength(250);
		memoHojaRegTituloObservacion.setDimension(351, 50);
		calendarHojaRegTituloFeRemision = calendars.create("calendarHojaRegTituloFeRemision");
		calendarHojaRegTituloFeRemision.setValidEmpty();
		calendarHojaRegTituloFeRemision.setCaption('Fecha Remisión:',1,105);
		calendarHojaRegTituloFeRemision.setWidthEditCalendar(64);
		calendarHojaRegTituloFeRemision.sendToFrom(100);
    	pcbHojaRegTituloPosicion = powerComboBox.create('pcbHojaRegTituloPosicion','pcbHojaRegTituloPosicion','Posición (+):',1,77);
		pcbHojaRegTituloPosicion.setValidEmpty();
    	pcbHojaRegTituloPosicion.addEmptyOption();
    	pcbHojaRegTituloPosicion.enableReadOnlyEditor();
		pcbHojaRegTituloSeccion = powerComboBox.create('pcbHojaRegTituloSeccion','pcbHojaRegTituloSeccion','Sección (^):',1,75);
		pcbHojaRegTituloSeccion.setValidEmpty();
    	pcbHojaRegTituloSeccion.addEmptyOption();
    	pcbHojaRegTituloSeccion.enableReadOnlyEditor();
    	pcbHojaRegTituloSeccion.setDataType('string');
		editsHojaRegTituloEstudiante = edits.create('editsHojaRegTituloEstudiante','editsHojaRegTituloEstudiante','Estudiante:',1,77,'normal');      
		editsHojaRegTituloEstudiante.setValidEmpty();  
		editsHojaRegTituloEstudiante.setSizeEdit(412);
		editsHojaRegTituloEstudiante.readOnly(true);
		pcbHojaRegTituloPlantilla = powerComboBox.create('pcbHojaRegTituloPlantilla','pcbHojaRegTituloPlantilla','Plantilla:',1,57);
		pcbHojaRegTituloPlantilla.setValidEmpty();
		pcbHojaRegTituloPlantilla.addEmptyOption();
		pcbHojaRegTituloPlantilla.enableReadOnlyEditor();
       	customGridHojaRegTitulo = customGrid.create('cgGridHojaRegTitulo','SERIAL DEL TITULO OTORGADO',355,730,22,15);
		customGridHojaRegTitulo.loadColumnTypeStruct(null, [customGrid.TYPE_COLUMN_CHECK,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT, 
																customGrid.TYPE_COLUMN_EDIT, 
																customGrid.TYPE_COLUMN_EDIT, 
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT],
																[25,20,95,138,138,30,95,165,0,0,0,0,0,0,0,0]);
		customGridHojaRegTitulo.addTitleVectorX(['','Nº','Cédula','Apellido','Nombre','T-E','Serial','Observación','idPers','ent.federal','mcpio','dia','mes','año','grado','seccion']);
		customGridHojaRegTitulo.setSelectedLnMode(0);
		customGridHojaRegTitulo.addObjToTitle(0, customGridHojaRegTitulo.createTitleObj(0,'input','checkbox'));
		customGridHojaRegTitulo.activeCheckOnOff(0);
		customGridHojaRegTitulo.setSaveData();
		customGridHojaRegTitulo.hideCol(8); 
		customGridHojaRegTitulo.hideCol(9); 
		customGridHojaRegTitulo.hideCol(10); 
		customGridHojaRegTitulo.hideCol(11); 
		customGridHojaRegTitulo.hideCol(12); 
		customGridHojaRegTitulo.hideCol(13); 
		customGridHojaRegTitulo.hideCol(14); 
		customGridHojaRegTitulo.hideCol(15); 
		for (var i=1; i<6; i++) customGridHojaRegTitulo.setReadOnlyCol(i, true);
		imgButtonsHojaRegTituloGuardar = imgButtons.create('imgButtonsHojaRegTituloGuardar','Guardar.','ok.png');		
		imgButtonsHojaRegTituloBuscar = imgButtons.create('imgButtonsHojaRegTituloBuscar','Buscar','icono_buscar.png');
		imgButtonsHojaRegTituloLimpiar = imgButtons.create('imgButtonsHojaRegTituloLimpiar','Limpiar','limpiar.png');		
		imgButtonsHojaRegTituloVerReg = imgButtons.create('imgButtonsHojaRegTituloVerReg','Ver Hoja','print.png');		
		imgButtonsHojaRegTituloVerTit = imgButtons.create('imgButtonsHojaRegTituloVerTit','Ver Titulo','print.png');		
		imgButtonsHojaRegTituloSalir = imgButtons.create('imgButtonsHojaRegTituloSalir','Salir','salir.png');
        imgButtonsHojaRegTituloGuardar.setDimension(100,22);        
        imgButtonsHojaRegTituloBuscar.setDimension(100,22);        
        imgButtonsHojaRegTituloLimpiar.setDimension(100,22);		
        imgButtonsHojaRegTituloVerTit.setDimension(100,22);		
        imgButtonsHojaRegTituloVerReg.setDimension(100,22);		
        imgButtonsHojaRegTituloSalir.setDimension(100,22);
  	},

  	init : function() {
  		this.create();
  		this.setEvents();
  		this.dialogsHojaRegTitulo_Init();
        this.tabsHojaRegTitulo_Init();
  		this.createMWs();
  	},

  	limpiarTipoEval : function() {
  		this.idRegTitulo = -1;
  		dialogsHojaRegTitulo.setMsg("");
  		editsHojaRegTituloMonthEgreso.clear();
  		editsHojaRegTituloLugarFeExp.clear();
  		editsHojaRegTituloYearEgreso.clear();
  		editsHojaRegTituloNombreDoc.clear();
  		editsHojaRegTituloCodPlanEstudio.clear();
  		editsHojaRegTituloNoDirector.clear();
  		editsHojaRegTituloCiDirector.clear();
  		editsHojaRegTituloNoCoordinador.clear();
  		editsHojaRegTituloCiCoordinador.clear();
  		editsHojaRegTituloNoFuncional.clear();
  		editsHojaRegTituloCiFuncional.clear();
  		memoHojaRegTituloObservacion.clear();
  		calendarHojaRegTituloFeRemision.clear();
  		customGridHojaRegTitulo.clean();
  		editsHojaRegTituloEstudiante.idPersona = -1;
  		editsHojaRegTituloEstudiante.clear();
  		imgButtonsHojaRegTituloVerReg.setDisable();
  		imgButtonsHojaRegTituloVerTit.setDisable();
  	},

  	limpiar : function() {
  		this.idRegTitulo = -1;
  		dialogsHojaRegTitulo.setMsg("");
  		pcbHojaRegTituloCodFrm.clear();
  		pcbHojaRegTituloTipoEval.setSelectedIndex(0);
  		pcbHojaRegTituloTipoEvalSeccion.setSelectedIndex(0);
  		editsHojaRegTituloMonthEgreso.clear();
  		editsHojaRegTituloLugarFeExp.clear();
  		editsHojaRegTituloYearEgreso.clear();
  		editsHojaRegTituloNombreDoc.clear();
  		editsHojaRegTituloCodPlanEstudio.clear();
  		editsHojaRegTituloNoDirector.clear();
  		editsHojaRegTituloCiDirector.clear();
  		editsHojaRegTituloNoCoordinador.clear();
  		editsHojaRegTituloCiCoordinador.clear();
  		editsHojaRegTituloNoFuncional.clear();
  		editsHojaRegTituloCiFuncional.clear();
  		memoHojaRegTituloObservacion.clear();
  		calendarHojaRegTituloFeRemision.clear();
  		pcbHojaRegTituloPeriodo.clear();
  		pcbHojaRegTituloCarrera.clear();
  		pcbHojaRegTituloPosicion.clear();
  		pcbHojaRegTituloSeccion.clear();
  		customGridHojaRegTitulo.clean();
  		editsHojaRegTituloEstudiante.idPersona = -1;
  		editsHojaRegTituloEstudiante.clear();
  		imgButtonsHojaRegTituloVerReg.setDisable();
  		imgButtonsHojaRegTituloVerTit.setDisable();
		Tool.cnnSrv('MantObject', 'getTituloInit', this.windowName + '.loadInit()');
  	},

	loadInit : function() {
		Tool.loadPowerComboData(dialogsHojaRegTitulo, pcbHojaRegTituloPeriodo, 0, 1, json('getPeriodoXNivelAcad'));
		pcbHojaRegTituloPeriodo.setSelectedIndex(1);
		Tool.loadPowerComboData(dialogsHojaRegTitulo, pcbHojaRegTituloCarrera, -1, 1, json('getCarrera'));
		pcbHojaRegTituloCarrera.setSelectedIndex(1);
		Tool.loadPowerComboData(dialogsHojaRegTitulo, pcbHojaRegTituloPosicion, 0, 1, json('getMantPensumPosicion'));
		if (json('getCodigoFormato').data[0].length > 0) {
			Tool.loadPowerComboData(dialogsHojaRegTitulo, pcbHojaRegTituloCodFrm, 0, 0, json('getCodigoFormato'));
			pcbHojaRegTituloCodFrm.setSelectedIndex(1);
		}
		Tool.loadPowerComboData(dialogsHojaRegTitulo, pcbHojaRegTituloTipoReg, 0, 0, json('getTipoRegistro'));
		if (json('getPlantilla').data[0].length > 0) {
			Tool.loadPowerComboData(dialogsHojaRegTitulo, pcbHojaRegTituloPlantilla, -1, 1, json('getPlantilla'));
			pcbHojaRegTituloPlantilla.setSelectedIndex(1);
		}
		pcbHojaRegTituloTipoEval.setSelectedIndex(1);
		this.buscar();
	},

	loadSeccion : function() {
		if (json('getSeccionTitulo').data[0].length == 1) {
			pcbHojaRegTituloSeccion.setSelectedIndex(1);
			this.resetElements('sec');
		}
	},
	
  	resetElements : function(element) {
  		var rlx = xmlStructs.createRecordList("rlx");
  		 
		if (element == 'car') {
			pcbHojaRegTituloPosicion.clear();
			pcbHojaRegTituloSeccion.clear();
			customGridHojaRegTitulo.clean();
			if (pcbHojaRegTituloCarrera.getOption() != '')
				Tool.getPowerComboDataFnc(this.windowName + '.buscar()', 'MantObject', 'getMantPensumPosicion', dialogsHojaRegTitulo, pcbHojaRegTituloPosicion, 0, 1, pcbHojaRegTituloCarrera.setModeReturnGetText(0));        		
		}
		else if (element == 'pos') {
			pcbHojaRegTituloSeccion.clear();
			customGridHojaRegTitulo.clean();
			if (pcbHojaRegTituloPosicion.getOption() != '')
				Tool.getPowerComboDataFnc(this.windowName + '.loadSeccion()', 'MantObject', 'getSeccionTitulo', dialogsHojaRegTitulo, pcbHojaRegTituloSeccion, 0, 1, pcbHojaRegTituloPeriodo, pcbHojaRegTituloCarrera.setModeReturnGetText(0), pcbHojaRegTituloPosicion);        		
	    }
		else if (element == 'sec') {
			if (pcbHojaRegTituloSeccion.getOption() != '')
				Tool.getGridData('MantObject', 'getEstudianteTitulo', dialogsHojaRegTitulo, customGridHojaRegTitulo, imgButtonsHojaRegTituloVerReg.setEnable(), pcbHojaRegTituloCodFrm, pcbHojaRegTituloPeriodo, pcbHojaRegTituloCarrera, pcbHojaRegTituloPosicion, pcbHojaRegTituloSeccion);
	    }
		else if (element == 'tip') {
	        if (pcbHojaRegTituloPeriodo.valid(dialogsHojaRegTitulo))
		        if (pcbHojaRegTituloCarrera.valid(dialogsHojaRegTitulo))
			        if (pcbHojaRegTituloCodFrm.valid(dialogsHojaRegTitulo)) {
			        	this.limpiarTipoEval();
	                    rlx.add('reg', pcbHojaRegTituloPeriodo);
	                    rlx.add('reg', pcbHojaRegTituloCarrera);
	                    rlx.addStr('reg', pcbHojaRegTituloCodFrm.getOption());
	                    rlx.add('reg', pcbHojaRegTituloTipoEval);
			  	        rlx.add('reg', pcbHojaRegTituloSeccion);
			        	Tool.cnnSrv('MantObject', 'getHojaRegTitulo', this.windowName + '.loadDataHojaRegTitulo()', rlx);
			        }
		}
  	},

  	loadDataHojaRegTitulo : function() {
  		if (json('getDatoRegTitulo').data[0].length > 0) {
	  		editsHojaRegTituloMonthEgreso.setValue(json('getDatoRegTitulo').data[1][0]);
	  		editsHojaRegTituloLugarFeExp.setValue(json('getDatoRegTitulo').data[3][0]);
	  		editsHojaRegTituloYearEgreso.setValue(json('getDatoRegTitulo').data[2][0]);
	  		editsHojaRegTituloNombreDoc.setValue(json('getDatoRegTitulo').data[12][0]);

			if (json('getCodigoFormato').data[0].length > 0 && pcbHojaRegTituloTipoEval.getOption() == '') {
				Tool.loadPowerComboData(dialogsHojaRegTitulo, pcbHojaRegTituloCodFrm, 0, 0, json('getCodigoFormato'));
				pcbHojaRegTituloCodFrm.setSelectedIndex(1);
			}

	  		pcbHojaRegTituloTipoReg.setSelectedIndex(0);
	  		pcbHojaRegTituloTipoReg.setSelectedOption(json('getDatoRegTitulo').data[22][0]);
	        if (pcbHojaRegTituloTipoReg.getOption() == "") {
	        	pcbHojaRegTituloTipoReg.addOptionAndSimpleValue(null, json('getDatoRegTitulo').data[22][0], json('getDatoRegTitulo').data[22][0]);
	        	pcbHojaRegTituloTipoReg.setSelectedOption(json('getDatoRegTitulo').data[22][0]);
	        }
	  		
	        editsHojaRegTituloCodPlanEstudio.setValue(json('getDatoRegTitulo').data[13][0]);
	  		editsHojaRegTituloNoDirector.setValue(json('getDatoRegTitulo').data[14][0]);
	  		editsHojaRegTituloCiDirector.setValue(json('getDatoRegTitulo').data[15][0]);
	  		editsHojaRegTituloNoCoordinador.setValue(json('getDatoRegTitulo').data[16][0]);
	  		editsHojaRegTituloCiCoordinador.setValue(json('getDatoRegTitulo').data[17][0]);
	  		editsHojaRegTituloNoFuncional.setValue(json('getDatoRegTitulo').data[18][0]);
	  		editsHojaRegTituloCiFuncional.setValue(json('getDatoRegTitulo').data[19][0]);
	  		memoHojaRegTituloObservacion.setText(json('getDatoRegTitulo').data[20][0]);
			calendarHojaRegTituloFeRemision.setFechaToEdit(json('getDatoRegTitulo').data[21][0]);
	  		this.idRegTitulo = json('getDatoRegTitulo').data[23][0];
	  		customGridHojaRegTitulo.clean();
  		}
  		this.resetElements('sec');
  	},

  	syncTipoEvaluacion: function() {
  		if (pcbHojaRegTituloTipoEvalSeccion.valid(dialogsHojaRegTitulo)) {
			pcbHojaRegTituloTipoEval.setSelectedOption(pcbHojaRegTituloTipoEvalSeccion.getOption());
			this.resetElements('tip');
		}
	},
	
	buscar: function() {
    	if (pcbHojaRegTituloTipoEval.valid(dialogsHojaRegTitulo)) {
    		pcbHojaRegTituloTipoEvalSeccion.setSelectedOption(pcbHojaRegTituloTipoEval.getOption());
    		this.resetElements('tip');
    	}
	},
	
	setEvents: function() {
		pcbHojaRegTituloPeriodo.onChange(this.windowName + ".buscar()");
		pcbHojaRegTituloCodFrm.onChange(this.windowName + ".buscar()");
		pcbHojaRegTituloTipoEval.onChange(this.windowName + ".buscar()");
		pcbHojaRegTituloTipoEvalSeccion.onChange(this.windowName + ".syncTipoEvaluacion()");
		pcbHojaRegTituloCarrera.onChange(this.windowName + ".resetElements('car')");
		pcbHojaRegTituloPosicion.onChange(this.windowName + ".resetElements('pos')");
		pcbHojaRegTituloSeccion.onChange(this.windowName + ".resetElements('sec')");	
		customGridHojaRegTitulo.onClickCells(this.windowName + ".setData()");
		imgButtonsHojaRegTituloGuardar.onClick(this.windowName+".coreUpdate()");		
  		imgButtonsHojaRegTituloBuscar.onClick(this.windowName + ".buscar()");
		imgButtonsHojaRegTituloLimpiar.onClick(this.windowName+".limpiar()");		
		imgButtonsHojaRegTituloVerReg.onClick(this.windowName+".getDataPrintHojaRegTitulo()");		
		imgButtonsHojaRegTituloVerTit.onClick(this.windowName+".getDataPrintTitulo()");		
		imgButtonsHojaRegTituloSalir.onClick("dialogsHojaRegTitulo.close()");
	},	

    setData: function() {
		if (customGridHojaRegTitulo.getDataCell(1) != "") {
			if (customGridHojaRegTitulo.getDataCell(customGridHojaRegTitulo.getActualRow(), 5) == pcbHojaRegTituloTipoEvalSeccion.getText()) {
		    	var apellido = customGridHojaRegTitulo.getDataCell(customGridHojaRegTitulo.getActualRow(), 3);
		    	var nombre = customGridHojaRegTitulo.getDataCell(customGridHojaRegTitulo.getActualRow(), 4);
		    	var serial = customGridHojaRegTitulo.getDataCell(customGridHojaRegTitulo.getActualRow(), 6);
		    	
		    	editsHojaRegTituloEstudiante.idPersona = customGridHojaRegTitulo.getDataCell(customGridHojaRegTitulo.getActualRow(), 8);
				editsHojaRegTituloEstudiante.setValue(apellido + ', ' + nombre + ' - Serial: ' + serial);
				imgButtonsHojaRegTituloVerTit.setEnable();
				dialogsHojaRegTitulo.setMsg("");
			}
			else {
				editsHojaRegTituloEstudiante.idPersona = -1;
				editsHojaRegTituloEstudiante.clear();
				imgButtonsHojaRegTituloVerTit.setDisable();
				dialogsHojaRegTitulo.setMsg("El valor de la Columna T-E, debe ser igual al valor de la caja Tipo Evaluación");
			}
        }
    },
  	
    validateCoreUpdate: function() {
    	var flgOut = false;
    	
        if (pcbHojaRegTituloPeriodo.valid(dialogsHojaRegTitulo))
	        if (pcbHojaRegTituloCarrera.valid(dialogsHojaRegTitulo))
	        	if (pcbHojaRegTituloCodFrm.valid(dialogsHojaRegTitulo))
		        	if (pcbHojaRegTituloTipoEval.valid(dialogsHojaRegTitulo))
			        	if (editsHojaRegTituloMonthEgreso.valid(dialogsHojaRegTitulo))
				        	if (editsHojaRegTituloLugarFeExp.valid(dialogsHojaRegTitulo))
					        	if (editsHojaRegTituloYearEgreso.valid(dialogsHojaRegTitulo))
						        	if (editsHojaRegTituloNombreDoc.valid(dialogsHojaRegTitulo))
							        	if (pcbHojaRegTituloTipoReg.valid(dialogsHojaRegTitulo))
								        	if (editsHojaRegTituloCodPlanEstudio.valid(dialogsHojaRegTitulo))
									        	if (editsHojaRegTituloNoDirector.valid(dialogsHojaRegTitulo))
										        	if (editsHojaRegTituloCiDirector.valid(dialogsHojaRegTitulo))
											        	if (editsHojaRegTituloNoCoordinador.valid(dialogsHojaRegTitulo))
												        	if (editsHojaRegTituloCiCoordinador.valid(dialogsHojaRegTitulo))
													        	if (editsHojaRegTituloNoFuncional.valid(dialogsHojaRegTitulo))
														        	if (editsHojaRegTituloCiFuncional.valid(dialogsHojaRegTitulo))
															        	if (calendarHojaRegTituloFeRemision.valid(dialogsHojaRegTitulo))
															        		if (pcbHojaRegTituloPosicion.valid(dialogsHojaRegTitulo)) {
															        			if (pcbHojaRegTituloSeccion.valid(dialogsHojaRegTitulo))
															        				flgOut = true;
															        		}
															        		else {
															        	    	tabsHojaRegTitulo.showPanel(1);
															        		}
        return flgOut;
    },
    
	coreUpdate : function() {
        var rlx = xmlStructs.createRecordList("rlx");
        var flgOnce = false;
        
		customGridHojaRegTitulo.setSaveData();
        if (this.validateCoreUpdate()) {
			if (customGridHojaRegTitulo.getTotalRowStruct() > 0) {
	            for(var f = 0; f < customGridHojaRegTitulo.struct.getTotalRows(); f++) {
	            	if (parseInt(customGridHojaRegTitulo.getDataCellStruct(f,0), 10) === 1) {
	            		var reg = "";
	                	reg = this.idRegTitulo;
	                	reg+= "###" + pcbHojaRegTituloPeriodo.getText();
	                	reg+= "###" + pcbHojaRegTituloCarrera.getText();
	                	reg+= "###" + pcbHojaRegTituloCodFrm.getOption();
	                	reg+= "###" + pcbHojaRegTituloTipoEval.getText();
	                	reg+= "###" + pcbHojaRegTituloTipoReg.getOption();
	                	reg+= "###" + editsHojaRegTituloMonthEgreso.getText();
	                	reg+= "###" + editsHojaRegTituloYearEgreso.getText();
	                	reg+= "###" + editsHojaRegTituloLugarFeExp.getText();
	                	reg+= "###" + editsHojaRegTituloNombreDoc.getText();
	                	reg+= "###" + editsHojaRegTituloCodPlanEstudio.getText();
	                	reg+= "###" + editsHojaRegTituloNoDirector.getText();
	                	reg+= "###" + editsHojaRegTituloCiDirector.getText();
	                	reg+= "###" + editsHojaRegTituloNoCoordinador.getText();
	                	reg+= "###" + editsHojaRegTituloCiCoordinador.getText();
	                	reg+= "###" + editsHojaRegTituloNoFuncional.getText();
	                	reg+= "###" + editsHojaRegTituloCiFuncional.getText();
	                	reg+= "###" + calendarHojaRegTituloFeRemision.getText();
	                	reg+= "###" + memoHojaRegTituloObservacion.getText();
	                	reg+= "###" + customGridHojaRegTitulo.struct.data[8][f];//idPersona
	                	reg+= "###" + customGridHojaRegTitulo.struct.data[6][f];//serial
	                	reg+= "### " + customGridHojaRegTitulo.getDataCellStruct(f,7);//observacion
	                	rlx.addStr('reg' + f, reg);
	                	flgOnce = true;
	            	}
	            }
	            if (!flgOnce) {
            		var reg = "";
                	reg = this.idRegTitulo;
                	reg+= "###" + pcbHojaRegTituloPeriodo.getText();
                	reg+= "###" + pcbHojaRegTituloCarrera.getText();
                	reg+= "###" + pcbHojaRegTituloCodFrm.getOption();
                	reg+= "###" + pcbHojaRegTituloTipoEval.getText();
                	reg+= "###" + pcbHojaRegTituloTipoReg.getOption();
                	reg+= "###" + editsHojaRegTituloMonthEgreso.getText();
                	reg+= "###" + editsHojaRegTituloYearEgreso.getText();
                	reg+= "###" + editsHojaRegTituloLugarFeExp.getText();
                	reg+= "###" + editsHojaRegTituloNombreDoc.getText();
                	reg+= "###" + editsHojaRegTituloCodPlanEstudio.getText();
                	reg+= "###" + editsHojaRegTituloNoDirector.getText();
                	reg+= "###" + editsHojaRegTituloCiDirector.getText();
                	reg+= "###" + editsHojaRegTituloNoCoordinador.getText();
                	reg+= "###" + editsHojaRegTituloCiCoordinador.getText();
                	reg+= "###" + editsHojaRegTituloNoFuncional.getText();
                	reg+= "###" + editsHojaRegTituloCiFuncional.getText();
                	reg+= "###" + calendarHojaRegTituloFeRemision.getText();
                	reg+= "###" + memoHojaRegTituloObservacion.getText();
                	reg+= "###-1";//idPersona
                	reg+= "### ";//serial
                	rlx.addStr('reg', reg);
	            }
			}
			else {
        		var reg = "";
            	reg = this.idRegTitulo;
            	reg+= "###" + pcbHojaRegTituloPeriodo.getText();
            	reg+= "###" + pcbHojaRegTituloCarrera.getText();
            	reg+= "###" + pcbHojaRegTituloCodFrm.getValue();
            	reg+= "###" + pcbHojaRegTituloTipoEval.getText();
            	reg+= "###" + pcbHojaRegTituloTipoReg.getOption();
            	reg+= "###" + editsHojaRegTituloMonthEgreso.getText();
            	reg+= "###" + editsHojaRegTituloYearEgreso.getText();
            	reg+= "###" + editsHojaRegTituloLugarFeExp.getText();
            	reg+= "###" + editsHojaRegTituloNombreDoc.getText();
            	reg+= "###" + editsHojaRegTituloCodPlanEstudio.getText();
            	reg+= "###" + editsHojaRegTituloNoDirector.getText();
            	reg+= "###" + editsHojaRegTituloCiDirector.getText();
            	reg+= "###" + editsHojaRegTituloNoCoordinador.getText();
            	reg+= "###" + editsHojaRegTituloCiCoordinador.getText();
            	reg+= "###" + editsHojaRegTituloNoFuncional.getText();
            	reg+= "###" + editsHojaRegTituloCiFuncional.getText();
            	reg+= "###" + calendarHojaRegTituloFeRemision.getText();
            	reg+= "###" + memoHojaRegTituloObservacion.getText();
            	reg+= "###-1";//idPersona
            	rlx.addStr('reg', reg);
			}
			Tool.cnnSrv('MantObject', 'guardarSerialTitulo', this.windowName + '.syncTipoEvaluacion()', rlx);
        }
	},

	getDataPrintHojaRegTitulo: function() {
  		var rlx = xmlStructs.createRecordList("rlx");

  		if (pcbHojaRegTituloTipoEvalSeccion.valid(dialogsHojaRegTitulo)) 
  	  		if (pcbHojaRegTituloPosicion.valid(dialogsHojaRegTitulo)) 
  	    		if (pcbHojaRegTituloSeccion.valid(dialogsHojaRegTitulo)) {
		  	  		rlx.add('reg', pcbHojaRegTituloPeriodo);
		  	        rlx.add('reg', pcbHojaRegTituloCarrera);
		  	        rlx.addStr('reg', pcbHojaRegTituloCodFrm.getOption());
		  	        rlx.add('reg', pcbHojaRegTituloTipoEval);
		  	        rlx.add('reg', pcbHojaRegTituloSeccion);
		  	    	Tool.cnnSrv('MantObject', 'getHojaRegTitulo', this.windowName + '.reporteHojaReg()', rlx);
  	    		}
    },
	
	reporteHojaReg: function() {
		new RetTituloMapping(json('getDatoRegTitulo'), json('getDatoRegTituloSerial')).generate();
	},
	
	getDataPrintTitulo: function() {
  		var rlx = xmlStructs.createRecordList("rlx");
      rlx.addInt('reg', this.idRegTitulo);
      rlx.addInt('reg', editsHojaRegTituloEstudiante.idPersona);
    	Tool.cnnSrv('MantObject', 'getDatoTitulo', this.windowName + '.reporteTitulo()', rlx);
    },
	
	reporteTitulo: function() {
		Vistaprevia.show();	
		richEditVistaprevia.setText(pcbHojaRegTituloPlantilla.setModeReturnGetText(2).getText());
		var j = json('getDatoTitulo');
		for(var i=0; i<j.fields.length; i++){
			richEditVistaprevia.addLabelDescription(j.fields[i],j.data[i][0]);	
		}
		richEditVistaprevia.setText(richEditVistaprevia.replaceAllLabels(richEditVistaprevia.getText()));		
		richEditVistaprevia.setOrientation(pcbHojaRegTituloPlantilla.setModeReturnGetText(3).getText());
		richEditVistaprevia.setMarginTop(pcbHojaRegTituloPlantilla.setModeReturnGetText(4).getText());
		richEditVistaprevia.setMarginLeft(pcbHojaRegTituloPlantilla.setModeReturnGetText(5).getText());
		richEditVistaprevia.setMarginRight(pcbHojaRegTituloPlantilla.setModeReturnGetText(6).getText());
		Vistaprevia.hide();
		setTimeout( ()=>{
			richEditVistaprevia.print();
			Vistaprevia.close();
		}, 1000);
	}    
};