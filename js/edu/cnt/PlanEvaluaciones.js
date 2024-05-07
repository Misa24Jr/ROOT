var dialogsPlanEvaluaciones = {};
var pcbPlanEvaNvlAcad = {};
var pcbPlanEvaPeriodo = {};
var powerComboBoxPlanEvaLapso = {};
var pcbPlanEvaOrg = {};
var pcbPlanEvaSubOrg = {};
var powerComboBoxPlanEvaCarrera = {};
var powerComboBoxPlanEvaMateria = {};
var powerComboBoxPlanEvaSeccion = {};
var powerComboBoxPlanEvaTipEvaluacion = {};
var editsPlanEvaDescripcion = {};
var editsPlanEvaPorcentaje = {};
var editsPlanEvaPtjFaltante = {};
var labelsPlanEvaPonderacion = {};
var labelsPlanEvaFalPonderar = {};
var calendarsPlanEvaFecEvaluacion = {};
var pcbBoxPlanEvaHorInicio = {};
var pcbBoxPlanEvaHorInicio2 = {};
var pcbPlanEvaHorFin = {};
var pcbPlanEvaHorFin2 = {};
var tbPlanEvaluaciones = {};
var gridsPlanEvaluacion = {};
var imgButtonsPlanEvaAgregar = {};
var imgButtonsPlanEvaModificar = {};
var imgButtonsPlanEvaEliminar = {};
var imgButtonsPlanEvaLimpiar = {};
var imgButtonsPlanEvaBuscar = {};
var imgButtonsPlanEvaSalir = {};
var gridsPlanEvaAsignar = {};
var editsPlanEvaLink = {};
var memoPlanEvaComentario = {};
var imgButtonsPlanEvaCopiar = {};
var imgButtonsPlanEvaGuardar = {};
var imgButtonsPlanEvaAsgEliminar = {};
var mw_PlanEvaluaciones = {};// minWindow

var PlanEvaluaciones = {
	windowName : 'PlanEvaluaciones',
	isCreate : false,
	idPlanEval : 0,
	idTareaEnviar : 0,
	fileName : '',
	limitMaxKb : 0,
	
	show : function() {
		if (!this.isCreate)	{
			this.init();
			this.isCreate = true;
		}
		if (dialogsPlanEvaluaciones.isByClean()) 
 			this.limpiar();			
		dialogsPlanEvaluaciones.show();
	},
	
	hide : function() {
		dialogsPlanEvaluaciones.hide();
	},
	
	createMWs : function() {
        mwPlanEvaluaciones = desktop.addMinWindow('P. Evaluaciones', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsPlanEvaluaciones.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsPlanEvaluaciones_Init : function() {
        dialogsPlanEvaluaciones.setMinimizeXY(0,0);
        dialogsPlanEvaluaciones.setCenterScreen();
        dialogsPlanEvaluaciones.addSpace(0,0,20);
        dialogsPlanEvaluaciones.addLn(1,1,1);
		dialogsPlanEvaluaciones.setHeightCell(1,1,10);
        dialogsPlanEvaluaciones.addObjToDialog(pcbPlanEvaNvlAcad,2,1,24);
        dialogsPlanEvaluaciones.addObjToDialog(pcbPlanEvaPeriodo,2,1,24);
        dialogsPlanEvaluaciones.addObjToDialog(powerComboBoxPlanEvaLapso,2,1,24);
        dialogsPlanEvaluaciones.adjAllMarginObj(2,1,25);
		dialogsPlanEvaluaciones.addObjToDialog(pcbPlanEvaOrg,3,1,24);
        dialogsPlanEvaluaciones.addObjToDialog(pcbPlanEvaSubOrg,3,1,24);
        dialogsPlanEvaluaciones.addObjToDialog(powerComboBoxPlanEvaCarrera,3,1,24);
        dialogsPlanEvaluaciones.adjAllMarginObj(3,1,25);
        dialogsPlanEvaluaciones.addObjToDialog(powerComboBoxPlanEvaMateria,4,1,24);
        dialogsPlanEvaluaciones.addObjToDialog(powerComboBoxPlanEvaSeccion,4,1,24);
        dialogsPlanEvaluaciones.addObjToDialog(powerComboBoxPlanEvaTipEvaluacion,4,1,24);
		dialogsPlanEvaluaciones.adjAllMarginObj(4,1,25);
		dialogsPlanEvaluaciones.addObjToDialog(editsPlanEvaDescripcion,5,1,24);
        dialogsPlanEvaluaciones.addObjToDialog(editsPlanEvaPorcentaje,5,1,24);
		dialogsPlanEvaluaciones.addObject(labelsPlanEvaPonderacion,760,112);
		dialogsPlanEvaluaciones.addObject(editsPlanEvaPtjFaltante,790,110);
        dialogsPlanEvaluaciones.addObject(labelsPlanEvaFalPonderar,913,112);
		dialogsPlanEvaluaciones.adjAllMarginObj(5,1,25); 
        var PlanEvaluaciones1 = container.create('contPlanEvaluaciones1');
        PlanEvaluaciones1.setObject(calendarsPlanEvaFecEvaluacion.getEditCalendar(),0,0,0,0);        
		PlanEvaluaciones1.setObject(pcbBoxPlanEvaHorInicio,26,0,0,0); 
        PlanEvaluaciones1.setObject(pcbBoxPlanEvaHorInicio2,0,0,0,0);
        PlanEvaluaciones1.setObject(pcbPlanEvaHorFin,60,0,0,0);
        PlanEvaluaciones1.setObject(pcbPlanEvaHorFin2,0,0,0,0);
        var tbPlanEvaluaciones = tables.create('tablaContPlanEvaluaciones');
        tbPlanEvaluaciones.addRows(1);
        tbPlanEvaluaciones.addCols(0,1);                                         
        tbPlanEvaluaciones.addObjToCell(0,0,PlanEvaluaciones1);                    
        dialogsPlanEvaluaciones.addObjToDialog(tbPlanEvaluaciones,6,1);
        dialogsPlanEvaluaciones.addLn(7,1,1);
		dialogsPlanEvaluaciones.setHeightCell(7,1,12); 
		dialogsPlanEvaluaciones.addObject(gridsPlanEvaluacion,14,200);
		dialogsPlanEvaluaciones.addLn(9,1,1);
		dialogsPlanEvaluaciones.setHeightCell(9,1,0);
		dialogsPlanEvaluaciones.addObjToDialog(imgButtonsPlanEvaAgregar,10,1);        
        dialogsPlanEvaluaciones.addObjToDialog(imgButtonsPlanEvaModificar,10,1);
        dialogsPlanEvaluaciones.addObjToDialog(imgButtonsPlanEvaEliminar,10,1);
        dialogsPlanEvaluaciones.addObjToDialog(imgButtonsPlanEvaLimpiar,10,1);
        dialogsPlanEvaluaciones.addObjToDialog(imgButtonsPlanEvaBuscar,10,1);
        dialogsPlanEvaluaciones.addObjToDialog(imgButtonsPlanEvaSalir,10,1);
        dialogsPlanEvaluaciones.adjAllMarginObj(10,1,20);
        dialogsPlanEvaluaciones.leftMarginObj(10,1,0,128);
		c1 = container.create("c1","ASIGNAR GUIA / ACTIVIDAD", 1);		
		c1.setDimension(915,224);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 14, '#1e1e1e');
		c1.addObject(editsPlanEvaLink,165,10);
		c1.addObject(memoPlanEvaComentario,165,35);
		c1.addObject(imgButtonsPlanEvaGuardar,792,9);
		c1.addObject(imgButtonsPlanEvaCopiar,295,70);
		c1.addObject(imgButtonsPlanEvaAsgEliminar,465,70);
		dialogsPlanEvaluaciones.addObject(c1, 12, 415);
		dialogsPlanEvaluaciones.addObject(gridsPlanEvaAsignar,14,516);
	},
  
	gridsPlanEvaluacion_Init : function(totalRows) {
		gridsPlanEvaluacion = customGrid.create('gridsPlanEvaluacion','',202,918,22,totalRows);
		gridsPlanEvaluacion.loadColumnTypeStruct(null, [customGrid.TYPE_COLUMN_EDIT,
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
														[252,80,230,90,78,78,81,0,0,0,0,0,0]);
		gridsPlanEvaluacion.addTitleVectorX(['Materia','Sección','Contenido / Tema','F. Entrega','Hr. Inicio','Hr. Fin','Ponderación','idmat','idcurso','idtieval','idplaeval','idLapso','fePlanEval']);
		gridsPlanEvaluacion.setSelectedLnMode(0);
//		gridsPlanEvaluacion.addObjToTitle(0, gridsPlanEvaluacion.createTitleObj(0,'input','checkbox'));
//		gridsPlanEvaluacion.activeCheckOnOff(0);
	  	gridsPlanEvaluacion.hideCol(7);
        gridsPlanEvaluacion.hideCol(8);
        gridsPlanEvaluacion.hideCol(9);
	  	gridsPlanEvaluacion.hideCol(10);
	  	gridsPlanEvaluacion.hideCol(11);
	  	gridsPlanEvaluacion.hideCol(12);
		gridsPlanEvaluacion.hideBarTitle();
//		gridsPlanEvaluacion.alignBarTitle('left');
		gridsPlanEvaluacion.hideBarControl();
		for (var i=0; i<13; i++)
			gridsPlanEvaluacion.setReadOnlyCol(i, true);
	},	
	
	gridsPlanEvaAsignar_Init : function(totalRows) {
		gridsPlanEvaAsignar = customGrid.create('gridsPlanEvaAsignar','&nbsp;&nbsp;DOBLE CLIC PARA DESCARGAR ARCHIVO Y/O GUARDAR COMENTARIO',94,910,22,totalRows);
		gridsPlanEvaAsignar.loadColumnTypeStruct(null, [customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
														customGrid.TYPE_COLUMN_EDIT,
														customGrid.TYPE_COLUMN_EDIT],
														[460,350,75,0]);
		gridsPlanEvaAsignar.addTitleVectorX(['Archivo / Link (Sitio Web)','Comentario','F. Asignado','idAsignado']);
		gridsPlanEvaAsignar.setSelectedLnMode(0);
//		gridsPlanEvaAsignar.addObjToTitle(0, gridsPlanEvaAsignar.createTitleObj(0,'input','checkbox'));
//		gridsPlanEvaAsignar.activeCheckOnOff(0);
		gridsPlanEvaAsignar.hideCol(3); 
//		gridsPlanEvaAsignar.hideBarTitle();
		gridsPlanEvaAsignar.alignBarTitle('left');
		gridsPlanEvaAsignar.hideBarControl();
		for (var i=0; i<4; i++)
			gridsPlanEvaAsignar.setReadOnlyCol(i, true);
	},
	
  	create : function() {
  		dialogsPlanEvaluaciones = dialogs.create('dialogsPlanEvaluaciones',0,0,948,617,'PLANIFICAR EVALUACION');
  		dialogsPlanEvaluaciones.setAdjY(20);
  		this.gridsPlanEvaluacion_Init(8);
  		this.gridsPlanEvaAsignar_Init(3);
  		pcbPlanEvaNvlAcad = powerComboBox.create('pcbPlanEvaNvlAcad','pcbPlanEvaNvlAcad','Nivel Academico (+):',1,124);
  		pcbPlanEvaNvlAcad.setValidEmpty();
  		pcbPlanEvaNvlAcad.enableReadOnlyEditor();
  		pcbPlanEvaNvlAcad.addEmptyOption();
  		pcbPlanEvaNvlAcad.enableOnChangeToEmptyOption();
  		pcbPlanEvaPeriodo = powerComboBox.create('pcbPlanEvaPeriodo','pcbPlanEvaPeriodo','Periodo (+):',1,122);
  		pcbPlanEvaPeriodo.setValidEmpty();
  		pcbPlanEvaPeriodo.enableReadOnlyEditor();
  		pcbPlanEvaPeriodo.addEmptyOption();
  		pcbPlanEvaPeriodo.enableOnChangeToEmptyOption();
  		powerComboBoxPlanEvaLapso = powerComboBox.create('powerComboBoxPlanEvaLapso','powerComboBoxPlanEvaLapso','Lapso (^):',1,114);
  		powerComboBoxPlanEvaLapso.setValidEmpty();
  		powerComboBoxPlanEvaLapso.enableReadOnlyEditor();
  		powerComboBoxPlanEvaLapso.addEmptyOption();
  		powerComboBoxPlanEvaLapso.enableOnChangeToEmptyOption();
  		powerComboBoxPlanEvaLapso.setFieldFind(true);
        powerComboBoxPlanEvaLapso.setWidthCombo(177);
        powerComboBoxPlanEvaLapso.hide();
  		pcbPlanEvaOrg = powerComboBox.create('pcbPlanEvaOrg','pcbPlanEvaOrg','Organización (+):',1,124);
  		pcbPlanEvaOrg.setValidEmpty();
  		pcbPlanEvaOrg.enableReadOnlyEditor();
  		pcbPlanEvaOrg.addEmptyOption();
  		pcbPlanEvaOrg.enableOnChangeToEmptyOption();
  		pcbPlanEvaSubOrg = powerComboBox.create('pcbPlanEvaSubOrg','pcbPlanEvaSubOrg','Suborganización (^):',1,122);
  		pcbPlanEvaSubOrg.setValidEmpty();
  		pcbPlanEvaSubOrg.enableReadOnlyEditor();
  		pcbPlanEvaSubOrg.addEmptyOption();
  		pcbPlanEvaSubOrg.enableOnChangeToEmptyOption();
  		powerComboBoxPlanEvaCarrera = powerComboBox.create('powerComboBoxPlanEvaCarrera','powerComboBoxPlanEvaCarrera','Carrera (^):',1,114);
  		powerComboBoxPlanEvaCarrera.setValidEmpty();
  		powerComboBoxPlanEvaCarrera.enableReadOnlyEditor();
  		powerComboBoxPlanEvaCarrera.addEmptyOption();
  		powerComboBoxPlanEvaCarrera.enableOnChangeToEmptyOption();
		powerComboBoxPlanEvaCarrera.setWidthCombo(177);
  		powerComboBoxPlanEvaMateria = powerComboBox.create('powerComboBoxPlanEvaMateria','powerComboBoxPlanEvaMateria','Materia (*):',1,124);
  		powerComboBoxPlanEvaMateria.setValidEmpty();
  		powerComboBoxPlanEvaMateria.enableReadOnlyEditor();
  		powerComboBoxPlanEvaMateria.addEmptyOption();
  		powerComboBoxPlanEvaMateria.setDataType('string');
  		powerComboBoxPlanEvaMateria.setFieldFind(true);
  		powerComboBoxPlanEvaMateria.enableOnChangeToEmptyOption();
  		powerComboBoxPlanEvaSeccion = powerComboBox.create('powerComboBoxPlanEvaSeccion','powerComboBoxPlanEvaSeccion','Sección (*):',1,122);
  		powerComboBoxPlanEvaSeccion.setValidEmpty();
  		powerComboBoxPlanEvaSeccion.enableReadOnlyEditor();
  		powerComboBoxPlanEvaSeccion.addEmptyOption();
  		powerComboBoxPlanEvaSeccion.setFieldFind(true);
  		powerComboBoxPlanEvaTipEvaluacion = powerComboBox.create('powerComboBoxPlanEvaTipEvaluacion','powerComboBoxPlanEvaTipEvaluacion','Forma de Evaluar:',1,114);
  		powerComboBoxPlanEvaTipEvaluacion.setValidEmpty();
  		powerComboBoxPlanEvaTipEvaluacion.enableReadOnlyEditor();
  		powerComboBoxPlanEvaTipEvaluacion.addEmptyOption();
  		powerComboBoxPlanEvaTipEvaluacion.setWidthCombo(177);
  		editsPlanEvaDescripcion = edits.create('editsPlanEvaDescripcion','editsPlanEvaDescripcion','Contenido / Tema:',1,124,'normal');
  		editsPlanEvaDescripcion.setValidEmpty();
        editsPlanEvaDescripcion.setSizeEdit(446);
		editsPlanEvaDescripcion.setMaxLength(50); 
  		editsPlanEvaPorcentaje = edits.create('editsPlanEvaPorcentaje','editsPlanEvaPorcentaje','Ponderación:',1,114,'normal');
  		editsPlanEvaPorcentaje.setDataType('int');
  		editsPlanEvaPorcentaje.setValidEmpty();
        editsPlanEvaPorcentaje.setSizeEdit(24); 
  		editsPlanEvaPtjFaltante = edits.create('editsPlanEvaPtjFaltante','editsPlanEvaPtjFaltante','Falta Ponderar:',1,92,'normal');
  		editsPlanEvaPtjFaltante.setDataType('int');
        editsPlanEvaPtjFaltante.setSizeEdit(24); 
  		editsPlanEvaPtjFaltante.setValidEmpty();
  		editsPlanEvaPtjFaltante.readOnly(true);
		labelsPlanEvaPonderacion = labels.create('labelsPlanEvaPonderacion','%',5); 
		labelsPlanEvaFalPonderar = labels.create('labelsPlanEvaFalPonderar','%',5); 
		calendarsPlanEvaFecEvaluacion = calendars.create('calendarsPlanEvaFecEvaluacion');
  		calendarsPlanEvaFecEvaluacion.setDataType('date');
  		calendarsPlanEvaFecEvaluacion.setValidEmpty();
        calendarsPlanEvaFecEvaluacion.setWidthEditCalendar(126);
        calendarsPlanEvaFecEvaluacion.setCaption('Fecha Entrega:',3,119);
        calendarsPlanEvaFecEvaluacion.sendToFrom(100);   
  		pcbBoxPlanEvaHorInicio = powerComboBox.create('pcbBoxPlanEvaHorInicio','pcbBoxPlanEvaHorInicio','Hora Inicio:',1,122);
  		pcbBoxPlanEvaHorInicio.setValidEmpty();
  		pcbBoxPlanEvaHorInicio.enableReadOnlyEditor();
  		pcbBoxPlanEvaHorInicio.addEmptyOption();
  		pcbBoxPlanEvaHorInicio2 = powerComboBox.create('pcbBoxPlanEvaHorInicio2','pcbBoxPlanEvaHorInicio2',':',1,1);
  		pcbBoxPlanEvaHorInicio2.setValidEmpty();
  		pcbBoxPlanEvaHorInicio2.enableReadOnlyEditor();
  		pcbBoxPlanEvaHorInicio2.addEmptyOption();
        pcbBoxPlanEvaHorInicio.setWidthCombo(40);
        pcbBoxPlanEvaHorInicio2.setWidthCombo(30);
  		pcbPlanEvaHorFin = powerComboBox.create('pcbPlanEvaHorFin','pcbPlanEvaHorFin','Hora Fin:',1,114);
  		pcbPlanEvaHorFin.setValidEmpty();
  		pcbPlanEvaHorFin.enableReadOnlyEditor();
  		pcbPlanEvaHorFin.addEmptyOption();
  		pcbPlanEvaHorFin2 = powerComboBox.create('pcbPlanEvaHorFin2','pcbPlanEvaHorFin2',':',1,1);
  		pcbPlanEvaHorFin2.setValidEmpty();
  		pcbPlanEvaHorFin2.enableReadOnlyEditor();
  		pcbPlanEvaHorFin2.addEmptyOption();
        pcbPlanEvaHorFin.setWidthCombo(40);
        pcbPlanEvaHorFin2.setWidthCombo(30);
  		imgButtonsPlanEvaAgregar = imgButtons.create('imgButtonsPlanEvaAgregar','Agregar','ok.png');
  		imgButtonsPlanEvaModificar = imgButtons.create('imgButtonsPlanEvaModificar','Modificar','icono_modificar.png');
      	imgButtonsPlanEvaModificar.setDisable();
      	imgButtonsPlanEvaEliminar = imgButtons.create('imgButtonsPlanEvaEliminar','Eliminar','eliminar.png');
      	imgButtonsPlanEvaEliminar.setDisable();
      	imgButtonsPlanEvaLimpiar = imgButtons.create('imgButtonsPlanEvaLimpiar','Limpiar','limpiar.png');
      	imgButtonsPlanEvaBuscar = imgButtons.create('imgButtonsPlanEvaBuscar','Buscar','icono_buscar.png');
      	imgButtonsPlanEvaSalir = imgButtons.create('imgButtonsPlanEvaSalir','Salir','salir.png');
        imgButtonsPlanEvaAgregar.setDimension(90,22);
        imgButtonsPlanEvaModificar.setDimension(90,22);
        imgButtonsPlanEvaEliminar.setDimension(90,22);
        imgButtonsPlanEvaLimpiar.setDimension(90,22);
        imgButtonsPlanEvaBuscar.setDimension(90,22);
        imgButtonsPlanEvaSalir.setDimension(90,22);
  		editsPlanEvaLink = edits.create('editsPlanEvaLink','editsPlanEvaLink','Link (Sitio Web):',1,104,'normal');
  		editsPlanEvaLink.setValidEmpty();
  		editsPlanEvaLink.setSizeEdit(513);
  		editsPlanEvaLink.setMaxLength(100); 
		memoPlanEvaComentario = memo.create('memoPlanEvaComentario', 'Comentario (Opcional) :', 1, 1, 102);
		memoPlanEvaComentario.setValidEmpty();		
		memoPlanEvaComentario.setDimension(513, 25);
		memoPlanEvaComentario.setMaxLength(250);
		imgButtonsPlanEvaCopiar = imgButtons.create('imgButtonsPlanEvaCopiar','Copiar Archivo','adjuntar.png');				
		imgButtonsPlanEvaGuardar = imgButtons.create('imgButtonsPlanEvaGuardar','Guardar.','ok.png');				
		imgButtonsPlanEvaAsgEliminar = imgButtons.create('imgButtonsPlanEvaAsgEliminar','Borrar Archivo / Link','eliminar.jpg');				
        imgButtonsPlanEvaGuardar.setDimension(105,52);
        imgButtonsPlanEvaCopiar.setDimension(150,22);
        imgButtonsPlanEvaAsgEliminar.setDimension(150,22);
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsPlanEvaluaciones_Init();
		this.precargarComboBox();
		this.createMWs();
	},

    loadDataPeriodo: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
        Tool.loadPowerComboData(dialogsPlanEvaluaciones, pcbPlanEvaOrg, 0, 1, json('getCargaNotasOrganizacion'));
		Tool.loadPowerComboData(dialogsPlanEvaluaciones, powerComboBoxPlanEvaLapso, 3, 0, json('getMantLapso'));
		powerComboBoxPlanEvaLapso.setBGImg(powerComboBox.bgError);
  		if (json('getCargaNotasOrganizacion').data[0].length == 1) {
  			pcbPlanEvaOrg.setSelectedIndex(1); 
  			rlx.add('reg', pcbPlanEvaPeriodo);
  			rlx.add('reg', pcbPlanEvaOrg);
  			Tool.cnnSrv('MantObject', 'getCargaNotasSubOrganizacion', this.windowName + '.loadDataSubOrg()', rlx);
  		}
    },
    
    loadDataSubOrg: function() {
        var rlx = xmlStructs.createRecordList("rlx");

        Tool.loadPowerComboData(dialogsPlanEvaluaciones, pcbPlanEvaSubOrg, 0, 1, json('getCargaNotasSubOrganizacion'));
  		if (json('getCargaNotasSubOrganizacion').data[0].length == 1) {
  			pcbPlanEvaSubOrg.setSelectedIndex(1); 
  			rlx.add('reg', pcbPlanEvaPeriodo);
  			rlx.add('reg', pcbPlanEvaSubOrg);
  			Tool.cnnSrv('MantObject', 'getCargaNotasCarrera', this.windowName + '.loadDataCarre()', rlx);
  		}
    },
    
    loadDataCarre: function() {
        Tool.loadPowerComboData(dialogsPlanEvaluaciones, powerComboBoxPlanEvaCarrera, 0, 1, json('getCargaNotasCarrera'));
  		if (json('getCargaNotasCarrera').data[0].length == 1) {
  			powerComboBoxPlanEvaCarrera.setSelectedIndex(1); 
    		Tool.getPowerComboData('MantObject', 'getCargaNotasMateria', dialogsPlanEvaluaciones, powerComboBoxPlanEvaMateria, -1, 1, pcbPlanEvaPeriodo, powerComboBoxPlanEvaCarrera);    	
  		}
    },
    
    resetElements : function(element) {
        var rlx = xmlStructs.createRecordList("rlx");

        if (element == 'nvl') {
			Tool.rstPwrCmb(pcbPlanEvaOrg);
			Tool.rstPwrCmb(pcbPlanEvaSubOrg);
	  		Tool.rstPwrCmb(powerComboBoxPlanEvaCarrera);
	  		Tool.rstPwrCmb(powerComboBoxPlanEvaMateria);
	  		Tool.rstPwrCmb(powerComboBoxPlanEvaSeccion);
	  		powerComboBoxPlanEvaTipEvaluacion.setSelectedIndex(0);
	  		editsPlanEvaDescripcion.clear();
	  		editsPlanEvaPorcentaje.clear();
	  		editsPlanEvaPtjFaltante.clear();
	  		calendarsPlanEvaFecEvaluacion.clear();
	  		pcbBoxPlanEvaHorInicio.setSelectedIndex(1);
	  		pcbBoxPlanEvaHorInicio2.setSelectedIndex(1);
	  		pcbPlanEvaHorFin.setSelectedIndex(2);
	  		pcbPlanEvaHorFin2.setSelectedIndex(1);
	  		gridsPlanEvaluacion.clean();  
	    	if (pcbPlanEvaNvlAcad.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getCargaNotasPeriodo', dialogsPlanEvaluaciones, pcbPlanEvaPeriodo, 0, 1, pcbPlanEvaNvlAcad);
		}
		else if (element == 'per') {
			Tool.rstPwrCmb(pcbPlanEvaOrg);
			Tool.rstPwrCmb(pcbPlanEvaSubOrg);
	  		Tool.rstPwrCmb(powerComboBoxPlanEvaCarrera);
	  		Tool.rstPwrCmb(powerComboBoxPlanEvaMateria);
	  		Tool.rstPwrCmb(powerComboBoxPlanEvaSeccion);
	  		powerComboBoxPlanEvaTipEvaluacion.setSelectedIndex(0);
	  		editsPlanEvaDescripcion.clear();
	  		editsPlanEvaPorcentaje.clear();
	  		editsPlanEvaPtjFaltante.clear();
	  		calendarsPlanEvaFecEvaluacion.clear();
	  		pcbBoxPlanEvaHorInicio.setSelectedIndex(1);  
	  		pcbBoxPlanEvaHorInicio2.setSelectedIndex(1);  		
	  		pcbPlanEvaHorFin.setSelectedIndex(2);
	  		pcbPlanEvaHorFin2.setSelectedIndex(1); 
	  		gridsPlanEvaluacion.clean();  
	    	if (pcbPlanEvaPeriodo.getOption() != "") {
	    		rlx.add('reg', pcbPlanEvaPeriodo);
	    		rlx.add('reg', pcbPlanEvaNvlAcad);		
	        	Tool.cnnSrv('MantObject', 'getPeriodoPlanEval', this.windowName + '.loadDataPeriodo()', rlx);
	    	}
    	}
		else if (element == 'org') {
			Tool.rstPwrCmb(pcbPlanEvaSubOrg);
	  		Tool.rstPwrCmb(powerComboBoxPlanEvaCarrera);
	  		Tool.rstPwrCmb(powerComboBoxPlanEvaMateria);
	  		Tool.rstPwrCmb(powerComboBoxPlanEvaSeccion);
	  		powerComboBoxPlanEvaTipEvaluacion.setSelectedIndex(0);
	  		editsPlanEvaDescripcion.clear();
	  		editsPlanEvaPorcentaje.clear();
	  		editsPlanEvaPtjFaltante.clear();
	  		calendarsPlanEvaFecEvaluacion.clear();
	  		pcbBoxPlanEvaHorInicio.setSelectedIndex(1);  
	  		pcbBoxPlanEvaHorInicio2.setSelectedIndex(1);  	
	  		pcbPlanEvaHorFin.setSelectedIndex(2);
	  		pcbPlanEvaHorFin2.setSelectedIndex(1); 
	  		gridsPlanEvaluacion.clean();  
			if (pcbPlanEvaOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getCargaNotasSubOrganizacion', dialogsPlanEvaluaciones, pcbPlanEvaSubOrg, 0, 1, pcbPlanEvaPeriodo, pcbPlanEvaOrg);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(powerComboBoxPlanEvaCarrera);
	  		Tool.rstPwrCmb(powerComboBoxPlanEvaMateria);
	  		Tool.rstPwrCmb(powerComboBoxPlanEvaSeccion);
	  		powerComboBoxPlanEvaTipEvaluacion.setSelectedIndex(0);
	  		editsPlanEvaDescripcion.clear();
	  		editsPlanEvaPorcentaje.clear();
	  		editsPlanEvaPtjFaltante.clear();
	  		calendarsPlanEvaFecEvaluacion.clear();
	  		pcbBoxPlanEvaHorInicio.setSelectedIndex(1);  
	  		pcbBoxPlanEvaHorInicio2.setSelectedIndex(1); 
	  		pcbPlanEvaHorFin.setSelectedIndex(2);
	  		pcbPlanEvaHorFin2.setSelectedIndex(1); 
	  		gridsPlanEvaluacion.clean();  
			if (pcbPlanEvaSubOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getCargaNotasCarrera', dialogsPlanEvaluaciones, powerComboBoxPlanEvaCarrera, 0, 1, pcbPlanEvaPeriodo, pcbPlanEvaSubOrg);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(powerComboBoxPlanEvaMateria);
	  		Tool.rstPwrCmb(powerComboBoxPlanEvaSeccion);
	  		powerComboBoxPlanEvaTipEvaluacion.setSelectedIndex(0);
	  		editsPlanEvaDescripcion.clear();
	  		editsPlanEvaPorcentaje.clear();
	  		editsPlanEvaPtjFaltante.clear();
	  		calendarsPlanEvaFecEvaluacion.clear();
	  		pcbBoxPlanEvaHorInicio.setSelectedIndex(1);  
	  		pcbBoxPlanEvaHorInicio2.setSelectedIndex(1); 
	  		pcbPlanEvaHorFin.setSelectedIndex(2);
	  		pcbPlanEvaHorFin2.setSelectedIndex(1); 
	  		gridsPlanEvaluacion.clean();  
	    	if (powerComboBoxPlanEvaCarrera.getOption() != "")
	    		Tool.getPowerComboDataFnc('powerComboBoxPlanEvaMateria.setSizeHeight(450)','MantObject', 'getCargaNotasMateria', dialogsPlanEvaluaciones, powerComboBoxPlanEvaMateria, 0, 1, pcbPlanEvaPeriodo, powerComboBoxPlanEvaCarrera);    	
		}
		else if (element == 'mat') {
	  		Tool.rstPwrCmb(powerComboBoxPlanEvaSeccion);
	  		//powerComboBoxPlanEvaTipEvaluacion.setSelectedIndex(0);
	  		//editsPlanEvaDescripcion.clear();
	  		//editsPlanEvaPorcentaje.clear();
	  		editsPlanEvaPtjFaltante.clear();
	  		//calendarsPlanEvaFecEvaluacion.clear();
	  		//pcbBoxPlanEvaHorInicio.setSelectedIndex(0);  
	  		//pcbBoxPlanEvaHorInicio2.setSelectedIndex(0); 
	  		//pcbPlanEvaHorFin.setSelectedIndex(0);
	  		//pcbPlanEvaHorFin2.setSelectedIndex(0); 
	  		gridsPlanEvaluacion.clean();  
			if (powerComboBoxPlanEvaMateria.getOption() != "") {
	    		if (powerComboBoxPlanEvaLapso.isVisible())
	    			if (!powerComboBoxPlanEvaLapso.valid(dialogsPlanEvaluaciones)) {
	    				powerComboBoxPlanEvaMateria.setSelectedIndex(0); 
	    				return 0;
	    			}
				Tool.getPowerComboData('MantObject', 'getSeccionMateriaPlanEval', dialogsPlanEvaluaciones, powerComboBoxPlanEvaSeccion, 0, 1, pcbPlanEvaPeriodo, powerComboBoxPlanEvaMateria);
			}
		}
		imgButtonsPlanEvaAgregar.setEnable();
		imgButtonsPlanEvaModificar.setDisable();
		imgButtonsPlanEvaEliminar.setDisable();	
		
		this.idPlanEval = 0;
		this.idTareaEnviar = 0;
		editsPlanEvaLink.clear();
		editsPlanEvaLink.readOnly(false);
		memoPlanEvaComentario.clear();
  		gridsPlanEvaAsignar.clean();  

		switch(parseInt(pcbPlanEvaNvlAcad.getText(),10)) {
			case 1 : {powerComboBoxPlanEvaLapso.show(); break;}
			case 2 : {powerComboBoxPlanEvaLapso.hide(); break;}
			case 3 : {powerComboBoxPlanEvaLapso.hide(); break;}
		}
    },
	
	precargarComboBox : function() {
		var num2Dig = '';
		var numAMPM = '';
		
		//CARGA LAS HORAS
		for(var i=6; i<24; i++) {
			num2Dig = (i<10)? '0'+i : i;
			numAMPM = (num2Dig>12)? ((num2Dig-12)<10)? '0'+(num2Dig-12)+' pm' : num2Dig-12+' pm' : (num2Dig==12)? num2Dig+' pm' : num2Dig+' am'; 
			pcbBoxPlanEvaHorInicio.addOptionAndSimpleValue(null,numAMPM,num2Dig);
			pcbPlanEvaHorFin.addOptionAndSimpleValue(null,numAMPM,num2Dig);
		} 
	  	//CARGA LOS MINUTOS
		for(var i=0; i<60; i++) {
			num2Dig = (i<10)? '0'+i : i;
			pcbBoxPlanEvaHorInicio2.addOptionAndSimpleValue(null,num2Dig,num2Dig);
			pcbPlanEvaHorFin2.addOptionAndSimpleValue(null,num2Dig,num2Dig);
		}
		pcbBoxPlanEvaHorInicio.setSizeHeight(285);
		pcbPlanEvaHorFin.setSizeHeight(285);
		pcbBoxPlanEvaHorInicio2.setSizeHeight(285);
		pcbPlanEvaHorFin2.setSizeHeight(285);
	}, 

	buscar : function() {
		gridsPlanEvaluacion.clean();
		imgButtonsPlanEvaAgregar.setEnable();
		imgButtonsPlanEvaModificar.setDisable();
		imgButtonsPlanEvaEliminar.setDisable();	
		if (pcbPlanEvaNvlAcad.valid(dialogsPlanEvaluaciones))		
			if (pcbPlanEvaPeriodo.valid(dialogsPlanEvaluaciones))		
				if (pcbPlanEvaOrg.valid(dialogsPlanEvaluaciones))		
					if (pcbPlanEvaSubOrg.valid(dialogsPlanEvaluaciones))
						if (powerComboBoxPlanEvaCarrera.valid(dialogsPlanEvaluaciones)) 
							this.callDataCustomGrid();
  	},
  	
    loadDataCustomGrid: function() {
    	var jsn = json('getPlanEvaluaciones');
    	
    	this.gridsPlanEvaluacion_Init(jsn.data[0].length);
    	dialogsPlanEvaluaciones.addObject(gridsPlanEvaluacion,14,200);
    	this.setEvents();
    	gridsPlanEvaluacion.clean();    		
    	Tool.loadGridData(dialogsPlanEvaluaciones, gridsPlanEvaluacion, 'PlanEvaluaciones.setPorPonderar()', jsn);
    },
    
    callDataCustomGrid: function() {
    	var rlx = xmlStructs.createRecordList("rlx");
    	
    	rlx.add('reg', pcbPlanEvaPeriodo);
    	rlx.add('reg', powerComboBoxPlanEvaCarrera);
    	rlx.add('reg', powerComboBoxPlanEvaMateria);
    	rlx.add('reg', powerComboBoxPlanEvaSeccion);
    	rlx.add('reg', powerComboBoxPlanEvaLapso);
    	Tool.cnnSrv("MantObject", "getPlanEvaluaciones", this.windowName + ".loadDataCustomGrid()", rlx);
    },
    
  	setData : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (gridsPlanEvaluacion.getDataCell(gridsPlanEvaluacion.getActualRow(), 1) != "") {	
			editsPlanEvaLink.clear();
			editsPlanEvaLink.readOnly(false);
			memoPlanEvaComentario.clear();
	  		gridsPlanEvaAsignar.clean(); 
			this.idTareaEnviar = 0;
			this.idPlanEval = gridsPlanEvaluacion.getDataCell(gridsPlanEvaluacion.getActualRow(), 10);
			powerComboBoxPlanEvaMateria.findOption(gridsPlanEvaluacion.getDataCell(gridsPlanEvaluacion.getActualRow(), 7));
			powerComboBoxPlanEvaTipEvaluacion.findOption(gridsPlanEvaluacion.getDataCell(gridsPlanEvaluacion.getActualRow(), 9));
			editsPlanEvaDescripcion.setValue(gridsPlanEvaluacion.getDataCell(gridsPlanEvaluacion.getActualRow(), 2));
			editsPlanEvaPorcentaje.setValue(gridsPlanEvaluacion.getDataCell(gridsPlanEvaluacion.getActualRow(), 6));
			calendarsPlanEvaFecEvaluacion.setFechaToEdit(gridsPlanEvaluacion.getDataCell(gridsPlanEvaluacion.getActualRow(), 3));
			pcbBoxPlanEvaHorInicio.findOption(gridsPlanEvaluacion.getDataCell(gridsPlanEvaluacion.getActualRow(), 4).substring(0,2));
			pcbBoxPlanEvaHorInicio2.findOption(gridsPlanEvaluacion.getDataCell(gridsPlanEvaluacion.getActualRow(), 4).substring(3,5));
			pcbPlanEvaHorFin.findOption(gridsPlanEvaluacion.getDataCell(gridsPlanEvaluacion.getActualRow(), 5).substring(0,2));
			pcbPlanEvaHorFin2.findOption(gridsPlanEvaluacion.getDataCell(gridsPlanEvaluacion.getActualRow(), 5).substring(3,5));
			if (gridsPlanEvaluacion.getDataCell(gridsPlanEvaluacion.getActualRow(), 11) > 0)
				powerComboBoxPlanEvaLapso.findOption(gridsPlanEvaluacion.getDataCell(gridsPlanEvaluacion.getActualRow(), 11));
			else
				powerComboBoxPlanEvaLapso.setSelectedIndex(0);  
			imgButtonsPlanEvaAgregar.setDisable();
			imgButtonsPlanEvaModificar.setEnable();
			imgButtonsPlanEvaEliminar.setEnable();
			powerComboBoxPlanEvaSeccion.clear();
			rlx.add('reg', powerComboBoxPlanEvaMateria);
			rlx.add('reg', pcbPlanEvaPeriodo);
			Tool.cnnSrv('MantObject', 'getSeccionPlanEval', this.windowName + '.loadDataSec()', rlx);
		}			
	},

    loadDataCustomGridEnviar: function() {
    	var jsn = json('getTareaEnviar');

    	if (jsn.data[0].length > 0) {
        	this.gridsPlanEvaAsignar_Init(jsn.data[0].length);
        	dialogsPlanEvaluaciones.addObject(gridsPlanEvaAsignar,14,516);
        	this.setEvents();
        	gridsPlanEvaAsignar.clean();
			gridsPlanEvaAsignar.setTextBarTitle('&nbsp;&nbsp;' + powerComboBoxPlanEvaMateria.getOption() + ": " + editsPlanEvaDescripcion.getValue());
        	Tool.loadGridData(dialogsPlanEvaluaciones, gridsPlanEvaAsignar, false, jsn);
    	}
    },
    
    callDataCustomGridEnviar: function() {
    	var rlx = xmlStructs.createRecordList("rlx");
    	
    	gridsPlanEvaAsignar.clean();
    	this.gridsPlanEvaAsignar_Init(3);
		gridsPlanEvaAsignar.setTextBarTitle('&nbsp;&nbsp;' + powerComboBoxPlanEvaMateria.getOption() + ": " + editsPlanEvaDescripcion.getValue());
    	dialogsPlanEvaluaciones.addObject(gridsPlanEvaAsignar,14,516);
    	rlx.addInt('reg', this.idPlanEval);
    	Tool.cnnSrv("MantObject", "getTareaEnviar", this.windowName + ".loadDataCustomGridEnviar()", rlx);
    },
	
	loadDataSec: function() {
		Tool.loadPowerComboData(dialogsPlanEvaluaciones, powerComboBoxPlanEvaSeccion, 0, 1, json('getSeccionPlanEval'));
		powerComboBoxPlanEvaSeccion.findOption(gridsPlanEvaluacion.getDataCell(gridsPlanEvaluacion.getActualRow(), 8));
		this.callDataCustomGridEnviar();
    },

	copyDocEdit : function() {
		editsPlanEvaLink.readOnly(true);
		editsPlanEvaLink.setValue(this.idPlanEval + "_" + AdjuArchivos.getFileName());
		this.fileName = AdjuArchivos.getFileName();
		this.coreUpdateTarea('agregar');
	},
	
  	copyDoc : function() {
		if (pcbPlanEvaNvlAcad.valid(dialogsPlanEvaluaciones))		
			if (pcbPlanEvaPeriodo.valid(dialogsPlanEvaluaciones))		
				if (pcbPlanEvaOrg.valid(dialogsPlanEvaluaciones))		
					if (pcbPlanEvaSubOrg.valid(dialogsPlanEvaluaciones))
						if (powerComboBoxPlanEvaCarrera.valid(dialogsPlanEvaluaciones)) 
							if (powerComboBoxPlanEvaMateria.valid(dialogsPlanEvaluaciones))
								if (powerComboBoxPlanEvaSeccion.valid(dialogsPlanEvaluaciones)) 
									if (powerComboBoxPlanEvaTipEvaluacion.valid(dialogsPlanEvaluaciones))		
										if (editsPlanEvaDescripcion.valid(dialogsPlanEvaluaciones))
											if (calendarsPlanEvaFecEvaluacion.valid(dialogsPlanEvaluaciones)) {
												AdjuArchivos.sizeFile(this.limitMaxKb);//Mbytes
												AdjuArchivos.filter('');
												AdjuArchivos.process(32);
												AdjuArchivos.parameter(this.idPlanEval + "_");
												AdjuArchivos.setExtFnc(this.windowName + ".copyDocEdit()");
												AdjuArchivos.setCountBtn(1);
												AdjuArchivos.show();
				                    		}
	},
	
	setEvents : function() {
		pcbPlanEvaNvlAcad.onChange(this.windowName + ".resetElements('nvl')");
		pcbPlanEvaPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbPlanEvaOrg.onChange(this.windowName + ".resetElements('org')");
		pcbPlanEvaSubOrg.onChange(this.windowName + ".resetElements('suborg')");
		powerComboBoxPlanEvaCarrera.onChange(this.windowName + ".resetElements('carr')");
		powerComboBoxPlanEvaMateria.onChange(this.windowName + ".resetElements('mat')");
		//powerComboBoxPlanEvaSeccion.onChange(this.windowName + ".copiarPlanificacion()");
		editsPlanEvaPorcentaje.onChange(this.windowName + ".validPr()");
		gridsPlanEvaluacion.onClickCells(this.windowName+".setData()");
		gridsPlanEvaAsignar.onClickCells(this.windowName + ".setDataTarea()");
		gridsPlanEvaAsignar.onDblClickCells(this.windowName + ".getDataTarea()");
		imgButtonsPlanEvaAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsPlanEvaModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsPlanEvaEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
		imgButtonsPlanEvaBuscar.onClick(this.windowName+".buscar()");
		imgButtonsPlanEvaLimpiar.onClick(this.windowName+".limpiar()");  	
		imgButtonsPlanEvaSalir.onClick("dialogsPlanEvaluaciones.close()");
		imgButtonsPlanEvaCopiar.onClick(this.windowName + ".copyDoc()");
		imgButtonsPlanEvaGuardar.onClick(this.windowName + ".coreUpdateTarea('modificar')");	
		imgButtonsPlanEvaAsgEliminar.onClick(this.windowName + ".coreUpdateTarea('eliminar')");	
    },
	
    getDataTarea : function() {
		if (gridsPlanEvaAsignar.getDataCell(gridsPlanEvaAsignar.getActualRow(), 0) != "") {	
			if (gridsPlanEvaAsignar.getDataCell(gridsPlanEvaAsignar.getActualRow(), 0).substring(0, 4) != 'http')
				window.open("tarea_enviar/" + gridsPlanEvaAsignar.getDataCell(gridsPlanEvaAsignar.getActualRow(), 0),'_blank','left=10,top=80,Height=1,width=600,toolbar=no,location=no,status=no,menubar=no,resizable=yes,scrollbars=yes');
			else
				window.open(gridsPlanEvaAsignar.getDataCell(gridsPlanEvaAsignar.getActualRow(), 0));
		}
    },
    
  	setDataTarea : function() {
  		editsPlanEvaLink.clear();
  		memoPlanEvaComentario.clear();
		if (gridsPlanEvaAsignar.getDataCell(gridsPlanEvaAsignar.getActualRow(), 2) != "") {	
			editsPlanEvaLink.readOnly(true);
			if (gridsPlanEvaAsignar.getDataCell(gridsPlanEvaAsignar.getActualRow(), 0).substring(0, 4) == 'http') {
				editsPlanEvaLink.readOnly(false);
			}
			editsPlanEvaLink.setValue(gridsPlanEvaAsignar.getDataCell(gridsPlanEvaAsignar.getActualRow(), 0));
			memoPlanEvaComentario.setValue(gridsPlanEvaAsignar.getDataCell(gridsPlanEvaAsignar.getActualRow(), 1));
			this.idTareaEnviar = gridsPlanEvaAsignar.getDataCell(gridsPlanEvaAsignar.getActualRow(), 3);
	  	}
	},

    validPr : function() {
    	if (parseInt(editsPlanEvaPorcentaje.getValue()) > 100) {
    		editsPlanEvaPorcentaje.setValue("");
    		Alert.show('Debe ingresar un porcentaje no mayor a 100%.', 'SISTEMA', Alert.TYPE_INFO);
    	}
    	else if (parseInt(editsPlanEvaPorcentaje.getValue()) < 0) {
    		editsPlanEvaPorcentaje.setValue("");
    		Alert.show('Debe ingresar un porcentaje mayor o igual a 0%.', 'SISTEMA', Alert.TYPE_INFO);
    	}
    },
    
	limpiar : function() {
		this.idPlanEval = 0;
		this.idTareaEnviar = 0;
		AdjuArchivos.clearFileName();
		this.fileName = '';
		pcbPlanEvaNvlAcad.setSelectedIndex(0);  
		pcbPlanEvaPeriodo.setSelectedIndex(0);  
  		Tool.rstPwrCmb(powerComboBoxPlanEvaLapso);
		Tool.rstPwrCmb(pcbPlanEvaOrg);  
		Tool.rstPwrCmb(pcbPlanEvaSubOrg);  		
		Tool.rstPwrCmb(powerComboBoxPlanEvaCarrera);
  		Tool.rstPwrCmb(powerComboBoxPlanEvaMateria);
  		Tool.rstPwrCmb(powerComboBoxPlanEvaSeccion); 
  		powerComboBoxPlanEvaTipEvaluacion.setSelectedIndex(0); 
  		editsPlanEvaDescripcion.setValue("");  
  		editsPlanEvaPorcentaje.setValue("");  		 		 		
  		calendarsPlanEvaFecEvaluacion.clear();
  		pcbBoxPlanEvaHorInicio.setSelectedIndex(1);  
  		pcbBoxPlanEvaHorInicio2.setSelectedIndex(1);  	
  		pcbPlanEvaHorFin.setSelectedIndex(2);
  		pcbPlanEvaHorFin2.setSelectedIndex(1); 
  		gridsPlanEvaluacion.clean();  	
  		dialogsPlanEvaluaciones.setMsg("");  				
		imgButtonsPlanEvaAgregar.setEnable();
		imgButtonsPlanEvaModificar.setDisable();
		imgButtonsPlanEvaEliminar.setDisable();	
		editsPlanEvaLink.clear();
		editsPlanEvaLink.readOnly(false);
		memoPlanEvaComentario.clear();
  		gridsPlanEvaAsignar.clean();  
        Tool.cnnSrv('MantObject', 'getPlanEvaluacionesInit', this.windowName + '.loadDataInit()');
    },

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsPlanEvaluaciones, pcbPlanEvaNvlAcad, 0, 1, json('getCargaNotasNivelAcademico'));
		Tool.loadPowerComboData(dialogsPlanEvaluaciones, powerComboBoxPlanEvaTipEvaluacion, 1, 0, json('getTipoEvaluacion'));
		Tool.loadPowerComboData(dialogsPlanEvaluaciones, pcbPlanEvaPeriodo, 0, 1, json('getMantPeriodoActivoPlan'));
		this.limitMaxKb = json('getParametro').data[0][0];
  		if (json('getCargaNotasNivelAcademico').data[0].length > 0)
  			pcbPlanEvaNvlAcad.setSelectedIndex(1); 
  		if (json('getMantPeriodoActivoPlan').data[0].length == 1) {
  			pcbPlanEvaPeriodo.setSelectedIndex(1); 
  			this.resetElements('per');
  		}
    },
  	
    copiarPlanificacion: function(methodName) {
		imgButtonsPlanEvaAgregar.setEnable();
		imgButtonsPlanEvaModificar.setDisable();
		imgButtonsPlanEvaEliminar.setDisable();	
		this.buscar();
	},

    setPorPonderar: function() {
    	if (json('getPorPonderarLapso').data[0].length > 0) {
        	editsPlanEvaPtjFaltante.setValue(json('getPorPonderarLapso').data[0][0]);
        	if (parseInt(editsPlanEvaPtjFaltante.getValue()) > 0)
        		editsPlanEvaPtjFaltante.setBGImgEdit(edits.bgError);
        	else
        		editsPlanEvaPtjFaltante.setBGImgEdit(edits.bgDisable);
    	}
    	else
    		editsPlanEvaPtjFaltante.setValue("0");
    },
    
    limpiarCoreUpdate: function(methodName) {
    	this.setPorPonderar();
    	this.idPlanEval = 0;
    	dialogsPlanEvaluaciones.setMsg("");
    	//powerComboBoxPlanEvaSeccion.setSelectedIndex(0);
		imgButtonsPlanEvaAgregar.setEnable();
		imgButtonsPlanEvaModificar.setDisable();
		imgButtonsPlanEvaEliminar.setDisable();	
        if (methodName == "eliminar" && gridsPlanEvaluacion.getTotalRowStruct() == 1) { 
    		editsPlanEvaPtjFaltante.setValue("0");
        	gridsPlanEvaluacion.clean();
        	dlgWait.hide();
        }
        else
        	this.buscar();
    },

    validHrInicioMenorHrFin : function(objIni, objIni2, objFin, objFin2) {
		var hrIni = parseInt(objIni.getText() + '' + objIni2.getText());
		var hrFin = parseInt(objFin.getText() + '' + objFin2.getText());

		if (hrIni > hrFin) {
			dialogsPlanEvaluaciones.setMsg("VERIFIQUE: Hora Inicio ES MAYOR a la Hora Fin.");
			objIni.setBGImg(powerComboBox.bgError);
			objIni2.setBGImg(powerComboBox.bgError);
			objFin.setBGImg(powerComboBox.bgError);
			objFin2.setBGImg(powerComboBox.bgError);
			return false;
		}
		else
			return true;
    },
    
    coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbPlanEvaNvlAcad.valid(dialogsPlanEvaluaciones))		
			if (pcbPlanEvaPeriodo.valid(dialogsPlanEvaluaciones))		
				if (pcbPlanEvaOrg.valid(dialogsPlanEvaluaciones))		
					if (pcbPlanEvaSubOrg.valid(dialogsPlanEvaluaciones))
						if (powerComboBoxPlanEvaCarrera.valid(dialogsPlanEvaluaciones)) 
							if (powerComboBoxPlanEvaMateria.valid(dialogsPlanEvaluaciones))
								if (powerComboBoxPlanEvaSeccion.valid(dialogsPlanEvaluaciones)) 
									if (powerComboBoxPlanEvaTipEvaluacion.valid(dialogsPlanEvaluaciones))		
										if (editsPlanEvaDescripcion.valid(dialogsPlanEvaluaciones))
											if (calendarsPlanEvaFecEvaluacion.valid(dialogsPlanEvaluaciones)) 
												if (pcbBoxPlanEvaHorInicio.valid(dialogsPlanEvaluaciones))		
													if (pcbBoxPlanEvaHorInicio2.valid(dialogsPlanEvaluaciones))
														if (pcbPlanEvaHorFin.valid(dialogsPlanEvaluaciones)) 
															if (pcbPlanEvaHorFin2.valid(dialogsPlanEvaluaciones))
																if (editsPlanEvaPorcentaje.valid(dialogsPlanEvaluaciones)) {
																	if (this.validHrInicioMenorHrFin(pcbBoxPlanEvaHorInicio, pcbBoxPlanEvaHorInicio2, pcbPlanEvaHorFin, pcbPlanEvaHorFin2)) {
																		if (methodName != 'eliminar') {
																			rlx.add('reg',powerComboBoxPlanEvaSeccion);
																			rlx.add('reg',powerComboBoxPlanEvaTipEvaluacion);
																			rlx.add('reg',calendarsPlanEvaFecEvaluacion);
																			rlx.addStr('reg',pcbBoxPlanEvaHorInicio.getText() + ':' + pcbBoxPlanEvaHorInicio2.getText());
																			rlx.addStr('reg',pcbPlanEvaHorFin.getText() + ':' + pcbPlanEvaHorFin2.getText());
																			rlx.add('reg',editsPlanEvaPorcentaje);
																			rlx.add('reg',editsPlanEvaDescripcion);
																			rlx.add('reg',powerComboBoxPlanEvaLapso);
																		}
																		if (methodName != 'agregar') {
																			rlx.addInt('reg',this.idPlanEval);
																		}
																		if (powerComboBoxPlanEvaLapso.isVisible())
																			if (!powerComboBoxPlanEvaLapso.valid(dialogsPlanEvaluaciones))
																				return 0;
																		Tool.cnnSrv("MantObject", methodName + this.windowName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
																	}
																}
	},
	
    limpiarCoreUpdateTarea: function(methodName) {
    	this.idTareaEnviar = 0;
    	AdjuArchivos.clearFileName();
    	this.fileName = '';
    	editsPlanEvaLink.readOnly(false);
    	dialogsPlanEvaluaciones.setMsg("");
    	editsPlanEvaLink.clear();
    	memoPlanEvaComentario.clear();
    	this.callDataCustomGridEnviar();
    },
    
    coreUpdateTarea : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbPlanEvaNvlAcad.valid(dialogsPlanEvaluaciones))		
			if (pcbPlanEvaPeriodo.valid(dialogsPlanEvaluaciones))		
				if (pcbPlanEvaOrg.valid(dialogsPlanEvaluaciones))		
					if (pcbPlanEvaSubOrg.valid(dialogsPlanEvaluaciones))
						if (powerComboBoxPlanEvaCarrera.valid(dialogsPlanEvaluaciones)) 
							if (powerComboBoxPlanEvaMateria.valid(dialogsPlanEvaluaciones))
								if (powerComboBoxPlanEvaSeccion.valid(dialogsPlanEvaluaciones)) 
									if (powerComboBoxPlanEvaTipEvaluacion.valid(dialogsPlanEvaluaciones))		
										if (editsPlanEvaDescripcion.valid(dialogsPlanEvaluaciones))
											if (calendarsPlanEvaFecEvaluacion.valid(dialogsPlanEvaluaciones)) {
												if (this.idTareaEnviar == 0) {
													rlx.addInt('reg',this.idPlanEval);
													rlx.add('reg',editsPlanEvaLink);
													rlx.add('reg',memoPlanEvaComentario);
													rlx.addFloat('reg',parseInt(AdjuArchivos.getSizeFileReaded())/1024);
													rlx.addStr('reg',this.fileName);
													methodName = 'agregar'
												}
												else if (methodName == 'modificar') {
													rlx.add('reg',editsPlanEvaLink);
													rlx.add('reg',memoPlanEvaComentario);
													rlx.add('reg',this.idTareaEnviar);
												}
												else if (methodName == 'eliminar') {
													rlx.add('reg',editsPlanEvaLink);
													rlx.addInt('reg',this.idTareaEnviar);
												}
												Tool.cnnSrv("MantObject", methodName + "TareaEnviar", this.windowName + ".limpiarCoreUpdateTarea('" + methodName + "')", rlx);
											}
    }
};
