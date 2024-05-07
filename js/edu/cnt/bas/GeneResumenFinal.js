include('js/edu/cnt/rpt/ResumenFinalBasica');
var dialogsGenResFinCerCal = new Object();
var pcbGeneCerCalOrg = new Object();
var pcbGeneCerCalSuborg = new Object();
var pcbGeneCerCalCarrera = new Object();
var pcbGeneCerCalPeriodo = new Object();
var pcbGeneCerCalPosicion = new Object();
var pcbGeneCerCalSeccion = new Object();
var pcbGeneCerCalMesEvaluacion = new Object();
var pcbGeneCerCalCond = new Object();
var pcbGeneCerCalCodFormato = new Object(); 
var pcbGeneCerCalCodProfesor = new Object(); 
var pcbGeneCerCalCodMateria = new Object(); 
var calendarsGenResFinCerCal = new Object();
var pcbGeneCerCalTotalPag = new Object();
var memoGenResFinCerCal = new Object();
var gridsGeneCerCalificaciones = new Object();
var editsGeneCerCalCodCiDirector = new Object();
var editsGeneCerCalCodNomDirector = new Object();
var editsGeneCerCalCodCiProfGuia = new Object();
var editsGeneCerCalCodNomProfGuia = new Object();
var editsGeneCerCalCodApeProfGuia = new Object();
var editsGeneCerCalCodCiCodPlantel = new Object();
var editsGeneCerCalCodNomPlaEstudio = new Object();
var editsGeneCerCalCodCodigo = new Object();
var editsGeneCerCalCodMencion = new Object();
var imgButtonsGeneCerCalGuardar = new Object();
var imgButtonsGeneCerCalEliminar = new Object();
var imgButtonsGeneCerCalLimpiar = new Object();
var imgButtonsGeneCerCalReporte = new Object();
var imgButtonsGeneCerCalSalir = new Object();
var mwGeneResumenFinal = new Object();// minWindow
var tRecords = 0;
var nomPlanRsmnFin = "";

var GeneResumenFinal = {
    windowName: 'GeneResumenFinal',
    isCreate : false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
		if (dialogsGenResFinCerCal.isByClean())
			this.limpiar();			
        dialogsGenResFinCerCal.show();
    },
    
    hide: function(){
        dialogsGenResFinCerCal.hide();
    },

    createMWs: function(){
    	mwGeneResumenFinal = desktop.addMinWindow('Rsmn Final', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsGenResFinCerCal.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsGenResFinCerCal_Init: function() {
		dialogsGenResFinCerCal.setMinimizeXY(0, 0);
        dialogsGenResFinCerCal.setCenterScreen();
        dialogsGenResFinCerCal.addObject(pcbGeneCerCalOrg, 20, 40);
        dialogsGenResFinCerCal.addObject(pcbGeneCerCalSuborg, 300, 40);
        dialogsGenResFinCerCal.addObject(pcbGeneCerCalCarrera,588,40);
        dialogsGenResFinCerCal.addObject(pcbGeneCerCalPeriodo, 20, 70);
        dialogsGenResFinCerCal.addObject(pcbGeneCerCalPosicion,300,70);
        dialogsGenResFinCerCal.addObject(pcbGeneCerCalSeccion, 588, 70);
        dialogsGenResFinCerCal.addObject(pcbGeneCerCalCodFormato, 20, 100);
        dialogsGenResFinCerCal.addObject(pcbGeneCerCalCond, 300, 100);
        dialogsGenResFinCerCal.addObject(pcbGeneCerCalMesEvaluacion, 588, 100);
		dialogsGenResFinCerCal.addObject(pcbGeneCerCalCodMateria, 20, 130);
        dialogsGenResFinCerCal.addObject(pcbGeneCerCalCodProfesor, 588, 130);
		dialogsGenResFinCerCal.addObject(gridsGeneCerCalificaciones.getObject(),19,159);
		var c1 = container.create("c1",'Director', 1);		
		c1.setDimension(792,40);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#1e1e1e');
		c1.addObject(editsGeneCerCalCodCiDirector, 10,11);
		c1.addObject(editsGeneCerCalCodNomDirector, 269,11);
		dialogsGenResFinCerCal.addObject(c1, 20, 450);
		var c2 = container.create("c2",'Profesor Guia', 1);		
		c2.setDimension(792,40);
		c2.setPropertyMarco('groove',1,'#7e7e7e');
		c2.setFontTitle('verdana', 11, '#1e1e1e');
		c2.addObject(editsGeneCerCalCodCiProfGuia, 10,11);
		c2.addObject(editsGeneCerCalCodNomProfGuia, 269,11);
		c2.addObject(editsGeneCerCalCodApeProfGuia, 557,11);
		dialogsGenResFinCerCal.addObject(c2, 20, 504);
		dialogsGenResFinCerCal.addObject(editsGeneCerCalCodCiCodPlantel, 20, 555);
        dialogsGenResFinCerCal.addObject(editsGeneCerCalCodNomPlaEstudio, 290, 555);
		dialogsGenResFinCerCal.addObject(editsGeneCerCalCodCodigo, 578, 555);
		dialogsGenResFinCerCal.addObject(calendarsGenResFinCerCal.getEditCalendar(), 20,583);
        
        dialogsGenResFinCerCal.addObject(pcbGeneCerCalTotalPag, 578, 583);
        dialogsGenResFinCerCal.addObject(editsGeneCerCalCodMencion,290,583);
		dialogsGenResFinCerCal.addObject(memoGenResFinCerCal,20,612);
		
        dialogsGenResFinCerCal.addObject(imgButtonsGeneCerCalGuardar, 100, 643);
		dialogsGenResFinCerCal.addObject(imgButtonsGeneCerCalEliminar, 228, 643);
		dialogsGenResFinCerCal.addObject(imgButtonsGeneCerCalLimpiar, 391, 643);
		dialogsGenResFinCerCal.addObject(imgButtonsGeneCerCalReporte, 515, 643);
		dialogsGenResFinCerCal.addObject(imgButtonsGeneCerCalSalir, 640, 643);		
    },
    
    loadFormatsBachillerato : function(){
    	pcbGeneCerCalCodFormato.deleteAll();	
    	pcbGeneCerCalCodFormato.addOption(null, 'FINAL');
    	pcbGeneCerCalCodFormato.addOption(null, 'PENDIENTE');
    	pcbGeneCerCalCodFormato.addOption(null, 'REVISION');
    },
    
    loadFormatsBasica : function(){
    	pcbGeneCerCalCodFormato.deleteAll();	
    	pcbGeneCerCalCodFormato.addOption(null, 'FINAL');
    },
	
    loadCondicion : function(){
    	pcbGeneCerCalCond.deleteAll();
    	pcbGeneCerCalCond.addEmptyOption();
    	pcbGeneCerCalCond.addOptionAndSimpleValue(null, 'Laminada','la');
    	pcbGeneCerCalCond.addOptionAndSimpleValue(null, 'Escolar','es');
    	pcbGeneCerCalCond.addOptionAndSimpleValue(null, 'Extranjera','ex');
    	pcbGeneCerCalCond.setSelectedIndex(0);
    },
    
    loadMesEval : function(){	
    	pcbGeneCerCalMesEvaluacion.deleteAll();
		pcbGeneCerCalMesEvaluacion.show();
    	if (pcbGeneCerCalCodFormato.getValue() == 'FINAL' || pcbGeneCerCalCodFormato.getValue() == 'REVISION') {
    		pcbGeneCerCalMesEvaluacion.addOption(null, 'JULIO');
    		pcbGeneCerCalMesEvaluacion.setSelectedIndex(0);
    	}
    	else if (pcbGeneCerCalCodFormato.getValue() == 'PENDIENTE') {
    		pcbGeneCerCalMesEvaluacion.addOption(null, 'OCTUBRE');
    		pcbGeneCerCalMesEvaluacion.addOption(null, 'DICIEMBRE');
    		pcbGeneCerCalMesEvaluacion.addOption(null, 'ENERO');
    		pcbGeneCerCalMesEvaluacion.addOption(null, 'JUNIO');
    	}
    },
	
	gridsGeneCerCalificaciones_Init : function() {
        gridsGeneCerCalificaciones.setFixColRow(false,true);
        gridsGeneCerCalificaciones.addTitleVectorX(['Materia (Asignatura)','Profesor','C.i.','cedJefe','noJefe','cedGuia','noGuia','apGuia','idPersGuia','coPlantel','dePlanEst','coMencion','deMencion','feRemision','obs','idPersMate','idMate','ordenMate','idPlaRsmn','idProfRsmn']);
        gridsGeneCerCalificaciones.showData();
        gridsGeneCerCalificaciones.setSizeCol(1,410);
        gridsGeneCerCalificaciones.setSizeCol(2,280);
        gridsGeneCerCalificaciones.setSizeCol(3,100);
        gridsGeneCerCalificaciones.setSizeCol(4,0);
        gridsGeneCerCalificaciones.setSizeCol(5,0);
        gridsGeneCerCalificaciones.setSizeCol(6,0);
        gridsGeneCerCalificaciones.setSizeCol(7,0);
        gridsGeneCerCalificaciones.setSizeCol(8,0);
        gridsGeneCerCalificaciones.setSizeCol(9,0);
        gridsGeneCerCalificaciones.setSizeCol(10,0);
        gridsGeneCerCalificaciones.setSizeCol(11,0);
        gridsGeneCerCalificaciones.setSizeCol(12,0);
        gridsGeneCerCalificaciones.setSizeCol(13,0);
        gridsGeneCerCalificaciones.setSizeCol(14,0);
        gridsGeneCerCalificaciones.setSizeCol(15,0);
        gridsGeneCerCalificaciones.setSizeCol(16,0);
        gridsGeneCerCalificaciones.setSizeCol(17,0);
        gridsGeneCerCalificaciones.setSizeCol(18,0);
        gridsGeneCerCalificaciones.setSizeCol(19,0);
        gridsGeneCerCalificaciones.setSizeCol(20,0);
        gridsGeneCerCalificaciones.hideCol(4);
        gridsGeneCerCalificaciones.hideCol(5);
        gridsGeneCerCalificaciones.hideCol(6);
        gridsGeneCerCalificaciones.hideCol(7);
        gridsGeneCerCalificaciones.hideCol(8);
        gridsGeneCerCalificaciones.hideCol(9);
        gridsGeneCerCalificaciones.hideCol(10);
        gridsGeneCerCalificaciones.hideCol(11);
        gridsGeneCerCalificaciones.hideCol(12);
        gridsGeneCerCalificaciones.hideCol(13);
        gridsGeneCerCalificaciones.hideCol(14);
        gridsGeneCerCalificaciones.hideCol(15);
        gridsGeneCerCalificaciones.hideCol(16);
        gridsGeneCerCalificaciones.hideCol(17);
        gridsGeneCerCalificaciones.hideCol(18);
        gridsGeneCerCalificaciones.hideCol(19);
        gridsGeneCerCalificaciones.hideCol(20);
	},

    create: function() {
        dialogsGenResFinCerCal = dialogs.create('dialogsGenResFinCerCal', 0, 0, 832, 654, 'RESUMEN FINAL');
        dialogsGenResFinCerCal.setAdjY(50);
        pcbGeneCerCalOrg = powerComboBox.create('pcbGeneCerCalOrg','pcbGeneCerCalOrg','Organización (+):',1,105);
		pcbGeneCerCalOrg.setValidEmpty();
		pcbGeneCerCalOrg.enableReadOnlyEditor();
		pcbGeneCerCalOrg.addEmptyOption();
        pcbGeneCerCalSuborg = powerComboBox.create('pcbGeneCerCalSuborg','pcbGeneCerCalSuborg','Suborganización (^):',1,125);
		pcbGeneCerCalSuborg.setValidEmpty();
		pcbGeneCerCalSuborg.enableReadOnlyEditor();
		pcbGeneCerCalSuborg.addEmptyOption();
		pcbGeneCerCalCarrera = powerComboBox.create('pcbGeneCerCalCarrera','pcbGeneCerCalCarrera','Carrera (^):',1,75);
		pcbGeneCerCalCarrera.setValidEmpty();
		pcbGeneCerCalCarrera.enableReadOnlyEditor();
		pcbGeneCerCalCarrera.addEmptyOption();
		pcbGeneCerCalPeriodo = powerComboBox.create('pcbGeneCerCalPeriodo','pcbGeneCerCalPeriodo','Periodo (^):',1,105);
		pcbGeneCerCalPeriodo.setValidEmpty();
		pcbGeneCerCalPeriodo.enableReadOnlyEditor();
		pcbGeneCerCalPeriodo.addEmptyOption();
		pcbGeneCerCalPosicion = powerComboBox.create('pcbGeneCerCalPosicion','pcbGeneCerCalPosicion','Posición (^):',1,125);
		pcbGeneCerCalPosicion.setValidEmpty();
		pcbGeneCerCalPosicion.enableReadOnlyEditor();
		pcbGeneCerCalPosicion.addEmptyOption();
		pcbGeneCerCalSeccion = powerComboBox.create('pcbGeneCerCalSeccion','pcbGeneCerCalSeccion','Sección (^):',1,75);
		pcbGeneCerCalSeccion.setDataType('string');
		pcbGeneCerCalSeccion.setValidEmpty();
		pcbGeneCerCalSeccion.enableReadOnlyEditor();
		pcbGeneCerCalSeccion.addEmptyOption();
		pcbGeneCerCalMesEvaluacion = powerComboBox.create('pcbGeneCerCalMesEvaluacion','pcbGeneCerCalMesEvaluacion','Mes :',1,75);
		pcbGeneCerCalMesEvaluacion.setDataType('string');
		pcbGeneCerCalMesEvaluacion.setValidEmpty();
		pcbGeneCerCalMesEvaluacion.enableReadOnlyEditor();
		pcbGeneCerCalMesEvaluacion.addEmptyOption();
		pcbGeneCerCalCond = powerComboBox.create('pcbGeneCerCalCond','pcbGeneCerCalCond','Tipo de Cédula :',1,125);
		pcbGeneCerCalCond.setDataType('string');
		pcbGeneCerCalCond.setValidEmpty();
		pcbGeneCerCalCond.enableReadOnlyEditor();
		pcbGeneCerCalCond.addEmptyOption();
		pcbGeneCerCalCond.setTypeObjOpt('input', 'checkbox');
		pcbGeneCerCalCond.setFirstRowCheckMode(2);
		pcbGeneCerCalTotalPag = powerComboBox.create('pcbGeneCerCalTotalPag','pcbGeneCerCalTotalPag','Totalizar :',1,75);
		pcbGeneCerCalTotalPag.setDataType('string');
		pcbGeneCerCalTotalPag.setValidEmpty();
		pcbGeneCerCalTotalPag.enableReadOnlyEditor();
		pcbGeneCerCalTotalPag.addEmptyOption();
		pcbGeneCerCalTotalPag.addOption(null, 'Por Sección', 'S');
		pcbGeneCerCalTotalPag.addOption(null, 'Por Tipo de Cédula', 'T');
		pcbGeneCerCalTotalPag.setSelectedIndex(1);
		pcbGeneCerCalCodFormato = powerComboBox.create('pcbGeneCerCalCodFormato','pcbGeneCerCalCodFormato','Tipo de Formato :',1,105);
		pcbGeneCerCalCodFormato.setDataType('string');
		pcbGeneCerCalCodFormato.setValidEmpty();
		pcbGeneCerCalCodFormato.enableReadOnlyEditor();
		pcbGeneCerCalCodFormato.addEmptyOption();
        pcbGeneCerCalCodFormato.setWidthCombo(127);
		pcbGeneCerCalCodProfesor = powerComboBox.create('pcbGeneCerCalCodProfesor','pcbGeneCerCalCodProfesor','Profesor :',1,75);
		pcbGeneCerCalCodProfesor.setValidEmpty();
		pcbGeneCerCalCodProfesor.enableReadOnlyEditor();
		pcbGeneCerCalCodProfesor.addEmptyOption();
		pcbGeneCerCalCodMateria = powerComboBox.create('pcbGeneCerCalCodMateria','pcbGeneCerCalCodMateria','Materia :',1,105);
		pcbGeneCerCalCodMateria.setDataType('string');
		pcbGeneCerCalCodMateria.setValidEmpty();
		pcbGeneCerCalCodMateria.enableReadOnlyEditor();
		pcbGeneCerCalCodMateria.addEmptyOption();
		pcbGeneCerCalCodMateria.setWidthCombo(428);
		gridsGeneCerCalificaciones = grids.create('gridsGeneCerCalificaciones',12,20); 
		editsGeneCerCalCodCiDirector = edits.create('editsGeneCerCalCodCiDirector','editsGeneCerCalCodCiDirector','C.i. :',1,94,'normal');
		editsGeneCerCalCodCiDirector.setSizeEdit(149);
		editsGeneCerCalCodCiDirector.setValidEmpty();
		editsGeneCerCalCodNomDirector = edits.create('editsGeneCerCalCodNomDirector','editsGeneCerCalCodNomDirector','Nombre :',1,125,'normal');
		editsGeneCerCalCodNomDirector.setSizeEdit(387);
		editsGeneCerCalCodCiProfGuia = edits.create('editsGeneCerCalCodCiProfGuia','editsGeneCerCalCodCiProfGuia','C.i. (*):',1,94,'normal');
		editsGeneCerCalCodCiProfGuia.setSizeEdit(149);
		editsGeneCerCalCodCiProfGuia.setValidInteger();
		editsGeneCerCalCodCiProfGuia.setFieldFind(true);
		editsGeneCerCalCodNomProfGuia = edits.create('editsGeneCerCalCodNomProfGuia','editsGeneCerCalCodNomProfGuia','Nombre (*):',1,125,'normal');
		editsGeneCerCalCodNomProfGuia.setSizeEdit(149);
		editsGeneCerCalCodNomProfGuia.setFieldFind(true);
		editsGeneCerCalCodApeProfGuia = edits.create('editsGeneCerCalCodApeProfGuia','editsGeneCerCalCodApeProfGuia','Apellido (*):',1,75,'normal');
		editsGeneCerCalCodApeProfGuia.setSizeEdit(149);
		editsGeneCerCalCodApeProfGuia.setFieldFind(true);
		editsGeneCerCalCodCiCodPlantel = edits.create('editsGeneCerCalCodCiCodPlantel','editsGeneCerCalCodCiCodPlantel','Cod. Plantel :',1,105,'normal');
		editsGeneCerCalCodCiCodPlantel.setSizeEdit(149);
		editsGeneCerCalCodCiCodPlantel.setValidEmpty();
		editsGeneCerCalCodNomPlaEstudio = edits.create('editsGeneCerCalCodNomPlaEstudio','editsGeneCerCalCodNomPlaEstudio','Plan de Estudio :',1,125,'normal');
		editsGeneCerCalCodNomPlaEstudio.setSizeEdit(149);
		editsGeneCerCalCodNomPlaEstudio.setValidEmpty();
		editsGeneCerCalCodCodigo = edits.create('editsGeneCerCalCodCodigo','editsGeneCerCalCodCodigo','Cod. Plan:',1,75,'normal');
		editsGeneCerCalCodCodigo.setSizeEdit(149);
		editsGeneCerCalCodCodigo.setValidEmpty();
		calendarsGenResFinCerCal = calendars.create('calendarsGenResFinCerCal');      
        calendarsGenResFinCerCal.setValidEmpty();
		calendarsGenResFinCerCal.setWidthEditCalendar(127);
		calendarsGenResFinCerCal.setCaption('Fecha Remisión :',1,105);
		calendarsGenResFinCerCal.sendToFrom(100);
        editsGeneCerCalCodMencion = edits.create('editsGeneCerCalCodMencion','editsGeneCerCalCodMencion','Mencion :',1,125,'normal');
		editsGeneCerCalCodMencion.setSizeEdit(149);
		editsGeneCerCalCodMencion.setValidEmpty();
		memoGenResFinCerCal = memo.create('memoGenResFinCerCal','Observación :',1,0,105);
		memoGenResFinCerCal.setValidEmpty();
		memoGenResFinCerCal.vAlignCaption('middle');
		memoGenResFinCerCal.setDimension(674, 15);
		memoGenResFinCerCal.setMaxLength(300); 
		memoGenResFinCerCal.style.zIndex = 500;
		imgButtonsGeneCerCalGuardar = imgButtons.create('imgButtonsGeneCerCalGuardar','Guardar.','ok.png');
		imgButtonsGeneCerCalGuardar.setDimension(90, 22);
		imgButtonsGeneCerCalEliminar = imgButtons.create('imgButtonsGeneCerCalEliminar','Eliminar Profesor','eliminar.png');
		imgButtonsGeneCerCalEliminar.setDimension(129, 22);
		imgButtonsGeneCerCalLimpiar = imgButtons.create('imgButtonsGeneCerCalLimpiar','Limpiar','limpiar.png');
		imgButtonsGeneCerCalLimpiar.setDimension(90, 22);
		imgButtonsGeneCerCalReporte = imgButtons.create('imgButtonsGeneCerCalReporte','Reporte','print.png');
		imgButtonsGeneCerCalReporte.setDimension(90, 22);
        imgButtonsGeneCerCalSalir = imgButtons.create('imgButtonsGeneCerCalSalir','Salir','salir.png');
		imgButtonsGeneCerCalSalir.setDimension(90, 22);	
    },

    init: function() {
        this.create();
        this.setEvents();
        this.dialogsGenResFinCerCal_Init();
		this.gridsGeneCerCalificaciones_Init();
        this.createMWs(); 
    },
    
    limpiar: function() {
    	pcbGeneCerCalOrg.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbGeneCerCalSuborg);
  		Tool.rstPwrCmb(pcbGeneCerCalCarrera);
  		Tool.rstPwrCmb(pcbGeneCerCalPeriodo);
  		dialogsGenResFinCerCal.setMsg("");
  		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsGenResFinCerCal, pcbGeneCerCalOrg, 0, 1, json('getData'));
		Tool.getContext(dialogsGenResFinCerCal, pcbGeneCerCalOrg, pcbGeneCerCalSuborg, pcbGeneCerCalCarrera, this.windowName + ".resetElements('carr')");
	},
    
	auxClear: function() {
    	gridsGeneCerCalificaciones.clean();
		editsGeneCerCalCodCiDirector.clear();
		editsGeneCerCalCodNomDirector.clear();
		editsGeneCerCalCodCiProfGuia.clear();
		editsGeneCerCalCodNomProfGuia.clear();
		editsGeneCerCalCodApeProfGuia.clear();
		editsGeneCerCalCodCiCodPlantel.clear();
		editsGeneCerCalCodNomPlaEstudio.clear();
		editsGeneCerCalCodCodigo.clear();
		calendarsGenResFinCerCal.clear();
		editsGeneCerCalCodMencion.clear();
		memoGenResFinCerCal.setText("");
	},

    resetElements : function(element) {
    	var rlx = xmlStructs.createRecordList("rlx");
    	
    	if (element == 'org') {
			Tool.rstPwrCmb(pcbGeneCerCalSuborg);
	  		Tool.rstPwrCmb(pcbGeneCerCalCarrera);
	  		Tool.rstPwrCmb(pcbGeneCerCalPeriodo);
			Tool.rstPwrCmb(pcbGeneCerCalPosicion);
			Tool.rstPwrCmb(pcbGeneCerCalSeccion);
			Tool.rstPwrCmb(pcbGeneCerCalCodMateria);
			Tool.rstPwrCmb(pcbGeneCerCalCodProfesor);
			this.auxClear();
	    	if (pcbGeneCerCalOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsGenResFinCerCal, pcbGeneCerCalSuborg, 1, 2, pcbGeneCerCalOrg);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbGeneCerCalCarrera);
	  		Tool.rstPwrCmb(pcbGeneCerCalPeriodo);
			Tool.rstPwrCmb(pcbGeneCerCalPosicion);
			Tool.rstPwrCmb(pcbGeneCerCalSeccion);
			Tool.rstPwrCmb(pcbGeneCerCalCodMateria);
			Tool.rstPwrCmb(pcbGeneCerCalCodProfesor);
			this.auxClear();
	    	if (pcbGeneCerCalSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsGenResFinCerCal, pcbGeneCerCalCarrera, -1, 3, pcbGeneCerCalSuborg);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbGeneCerCalPeriodo);
			Tool.rstPwrCmb(pcbGeneCerCalPosicion);
			Tool.rstPwrCmb(pcbGeneCerCalSeccion);
			Tool.rstPwrCmb(pcbGeneCerCalCodMateria);
			Tool.rstPwrCmb(pcbGeneCerCalCodProfesor);
			this.auxClear();
	    	if (pcbGeneCerCalCarrera.getOption() != "") {
	    		if (pcbGeneCerCalCarrera.setModeReturnGetText(7).getText() == 1 || pcbGeneCerCalCarrera.setModeReturnGetText(7).getText() == 2) {
	    			this.loadFormatsBasica();
	    			pcbGeneCerCalCond.hide();
	    		}
	    		else {
	    			this.loadFormatsBachillerato();
	    			pcbGeneCerCalCond.show();
	    			this.loadCondicion();
	    		}
    			Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsGenResFinCerCal, pcbGeneCerCalPeriodo, 0, 1, pcbGeneCerCalCarrera.setModeReturnGetText(5));
	    	}
		}
	    else if (element == 'per') {
			Tool.rstPwrCmb(pcbGeneCerCalPosicion);
			Tool.rstPwrCmb(pcbGeneCerCalSeccion);
			Tool.rstPwrCmb(pcbGeneCerCalCodMateria);
			Tool.rstPwrCmb(pcbGeneCerCalCodProfesor);
			this.auxClear();
			Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsGenResFinCerCal, pcbGeneCerCalPosicion, -1, 1, pcbGeneCerCalCarrera.setModeReturnGetText(2));        		
    	}
    	else if (element == 'pos') {
			Tool.rstPwrCmb(pcbGeneCerCalSeccion);
			Tool.rstPwrCmb(pcbGeneCerCalCodMateria);
			Tool.rstPwrCmb(pcbGeneCerCalCodProfesor);
			this.auxClear();
    		if (pcbGeneCerCalPosicion.getOption() != "") {
	    		rlx.add('reg', pcbGeneCerCalCarrera.setModeReturnGetText(2));
	    		rlx.add('reg', pcbGeneCerCalPeriodo);
	    		rlx.add('reg', pcbGeneCerCalPosicion.setModeReturnGetText(0));
	    		Tool.cnnSrv("MantObject", "getMantProyAulaSeccion", this.windowName + ".loadSeccion()", rlx);
    		}
    	}
    	else if (element == 'sec') {
    		rlx.add('reg', pcbGeneCerCalPeriodo);
    		rlx.add('reg', pcbGeneCerCalCarrera.setModeReturnGetText(2));
    		rlx.add('reg', pcbGeneCerCalPosicion.setModeReturnGetText(0));
    		rlx.add('reg', pcbGeneCerCalSeccion);
    		Tool.cnnSrv("ReportObject", "getPlanillaResumen", this.windowName + ".loadDataPlanRsmn()", rlx);
    	}
    	else if (element == 'mat') {
    		Tool.rstPwrCmb(pcbGeneCerCalCodProfesor);
    		if (pcbGeneCerCalCodMateria.getOption() != "")
    			Tool.getPowerComboData('MantObject', 'getProfesorMateria', dialogsGenResFinCerCal, pcbGeneCerCalCodProfesor, 0, 1, pcbGeneCerCalCodMateria);  	
    	}
	},
	
	loadDataPlanRsmn: function() {
		Tool.loadGridData(dialogsGenResFinCerCal, gridsGeneCerCalificaciones, false, json('getPlanillaResumen'));

		editsGeneCerCalCodCiDirector.setValue(gridsGeneCerCalificaciones.getDataCell(4));
		editsGeneCerCalCodNomDirector.setValue(gridsGeneCerCalificaciones.getDataCell(5));

		editsGeneCerCalCodCiProfGuia.setValue(gridsGeneCerCalificaciones.getDataCell(6));
		editsGeneCerCalCodNomProfGuia.setValue(gridsGeneCerCalificaciones.getDataCell(7));
		editsGeneCerCalCodApeProfGuia.setValue(gridsGeneCerCalificaciones.getDataCell(8));
		editsGeneCerCalCodCiProfGuia.hideId = gridsGeneCerCalificaciones.getDataCell(9);
		
		editsGeneCerCalCodCiCodPlantel.setValue(gridsGeneCerCalificaciones.getDataCell(10));
		editsGeneCerCalCodNomPlaEstudio.setValue(gridsGeneCerCalificaciones.getDataCell(11));
		editsGeneCerCalCodCodigo.setValue(gridsGeneCerCalificaciones.getDataCell(12));
		editsGeneCerCalCodMencion.setValue(gridsGeneCerCalificaciones.getDataCell(13));
		
		calendarsGenResFinCerCal.setFechaToEdit(gridsGeneCerCalificaciones.getDataCell(14));
		memoGenResFinCerCal.setText(gridsGeneCerCalificaciones.getDataCell(15));
		
		pcbGeneCerCalSeccion.hideId = gridsGeneCerCalificaciones.getDataCell(19);
		pcbGeneCerCalCodProfesor.hideId = 0;		
	},

	loadSeccion: function() {
		Tool.loadPowerComboData(dialogsGenResFinCerCal, pcbGeneCerCalSeccion, 0, 1, json('getSeccionPosicion'));
		Tool.getPowerComboData('MantObject', 'getMantPensumMateria', dialogsGenResFinCerCal, pcbGeneCerCalCodMateria, 0, 1, pcbGeneCerCalCarrera.setModeReturnGetText(2), pcbGeneCerCalPosicion);
	},
	
    limpiarFind : function(ix) {
    	editsGeneCerCalCodCiProfGuia.hideId = -1;
    	
  		switch (ix) {
		case 1: 
			editsGeneCerCalCodNomProfGuia.setValue("");
			editsGeneCerCalCodApeProfGuia.setValue("");  		
			break;
		case 2: 
			editsGeneCerCalCodCiProfGuia.setValue("");
			editsGeneCerCalCodApeProfGuia.setValue("");  		
			break;
		default:
			editsGeneCerCalCodCiProfGuia.setValue("");
		    editsGeneCerCalCodNomProfGuia.setValue("");
			break;
		} 
  	},
	
    buscar : function() {
		if (editsGeneCerCalCodCiProfGuia.getValue() != '' || editsGeneCerCalCodNomProfGuia.getValue() != '' || editsGeneCerCalCodApeProfGuia.getValue() != '') {
			ResuBusqueda.setObjectExtFnc(editsGeneCerCalCodCiProfGuia, editsGeneCerCalCodNomProfGuia, editsGeneCerCalCodApeProfGuia);
			Tool.getGridData('MantObject', 'getMantPersProf', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsGeneCerCalCodCiProfGuia, editsGeneCerCalCodCiProfGuia, editsGeneCerCalCodNomProfGuia, editsGeneCerCalCodNomProfGuia, editsGeneCerCalCodApeProfGuia, editsGeneCerCalCodApeProfGuia);
		}
    },

	setEvents: function() {
    	pcbGeneCerCalOrg.onChange(this.windowName + ".resetElements('org')");
    	pcbGeneCerCalSuborg.onChange(this.windowName + ".resetElements('suborg')");
    	pcbGeneCerCalCarrera.onChange(this.windowName + ".resetElements('carr')");
    	pcbGeneCerCalPeriodo.onChange(this.windowName + ".resetElements('per')");
    	pcbGeneCerCalPosicion.onChange(this.windowName + ".resetElements('pos')");
    	pcbGeneCerCalCodFormato.onChange(this.windowName + ".loadMesEval()");
    	pcbGeneCerCalCodMateria.onChange(this.windowName + ".resetElements('mat')");
    	pcbGeneCerCalSeccion.onChange(this.windowName + ".resetElements('sec')");
    	gridsGeneCerCalificaciones.onClickCells(this.windowName + ".setData()");
    	editsGeneCerCalCodCiProfGuia.onEnter(this.windowName + ".buscar()");
    	editsGeneCerCalCodCiProfGuia.onChange(this.windowName + ".limpiarFind(1)");
    	editsGeneCerCalCodNomProfGuia.onEnter(this.windowName + ".buscar()");
		editsGeneCerCalCodNomProfGuia.onChange(this.windowName + ".limpiarFind(2)");
		editsGeneCerCalCodApeProfGuia.onEnter(this.windowName + ".buscar()");
		editsGeneCerCalCodApeProfGuia.onChange(this.windowName + ".limpiarFind(3)");
    	imgButtonsGeneCerCalGuardar.onClick(this.windowName + ".coreUpdate('guardar')");
    	imgButtonsGeneCerCalEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
    	imgButtonsGeneCerCalLimpiar.onClick(this.windowName + ".limpiar()");
    	imgButtonsGeneCerCalReporte.onClick(this.windowName + ".reporteCoreUpdate()");
        imgButtonsGeneCerCalSalir.onClick("dialogsGenResFinCerCal.close()");
    }, 

    setData: function() {
        if (gridsGeneCerCalificaciones.getDataCell(1) != "") {
        	pcbGeneCerCalCodMateria.findOption(gridsGeneCerCalificaciones.getDataCell(17));
        	this.resetElements('mat');
        	pcbGeneCerCalCodProfesor.hideId = gridsGeneCerCalificaciones.getDataCell(20);
        }     			
	},

	reporteCoreUpdate: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (pcbGeneCerCalPeriodo.valid(dialogsGenResFinCerCal))
			if (pcbGeneCerCalPosicion.valid(dialogsGenResFinCerCal))
				if (pcbGeneCerCalSeccion.valid(dialogsGenResFinCerCal))
					if (pcbGeneCerCalCodFormato.valid(dialogsGenResFinCerCal))
						if (pcbGeneCerCalMesEvaluacion.valid(dialogsGenResFinCerCal)) {
							rlx.add('reg', pcbGeneCerCalPeriodo);
							rlx.add('reg', pcbGeneCerCalCarrera.setModeReturnGetText(2));
							rlx.add('reg', pcbGeneCerCalPosicion.setModeReturnGetText(0));
							rlx.add('reg', pcbGeneCerCalSeccion);
							rlx.addStr('reg', pcbGeneCerCalMesEvaluacion.getOption());
								
					    	if (pcbGeneCerCalCarrera.setModeReturnGetText(7).getText() == 1) {
					    		rlx.addStr('reg', 'inicial');
					    		Tool.cnnSrv('ReportObject', 'getResumenFinalPrimaria', this.windowName + '.reporteRsmFinalInicial()', rlx);
					    	}
					    	else if (pcbGeneCerCalCarrera.setModeReturnGetText(7).getText() == 2) {
					    		rlx.addStr('reg', 'primaria');
					    		Tool.cnnSrv('ReportObject', 'getResumenFinalPrimaria', this.windowName + '.reporteRsmFinPrimariaPage()', rlx);
					    	}
					    	
					    	else {
			        			if (pcbGeneCerCalCond.valid(dialogsGenResFinCerCal)) { 
						    		if (pcbGeneCerCalCodFormato.getValue() == 'FINAL')
						    			nomPlanRsmnFin = "getNotaAlumnoRsmFin";
						    		else if (pcbGeneCerCalCodFormato.getValue() == 'PENDIENTE')
							    		nomPlanRsmnFin = "getNotaAlumnoRsmFinMatePend" + pcbGeneCerCalMesEvaluacion.getOption();
						    		else
						    			nomPlanRsmnFin = "getNotaAlumnoRsmFinRevision";
	
						    		rlx.add('reg', pcbGeneCerCalCond);
						    		rlx.addStr('reg', nomPlanRsmnFin);
						    		rlx.add('reg', pcbGeneCerCalTotalPag);
						    		if(editsGeneCerCalCodCodigo.getValue()==='31059')
						    			Tool.cnnSrv('ReportObject', 'getResumenFinal', this.windowName + '.reporteRsmFinPage31059()', rlx);
						    		else
						    		  Tool.cnnSrv('ReportObject', 'getResumenFinal', this.windowName + '.reporteRsmFinPage()', rlx);
			        			}
					    	}
						}
    },
    
    reporteRsmFinPage31059 : function() {
      var jxx={};
      var jCant = {};
    	if(pcbGeneCerCalCodFormato.getValue()==='FINAL'){
    		jxx = json('getNotaAlumnoRsmFin');
    		jCant = json('getCantAlumnoFINAL');
    	}
    	if(pcbGeneCerCalCodFormato.getValue()==='REVISION'){
    		jxx = json('getNotaAlumnoRsmFinRevision');	
    		jCant = json('getCantAlumnoREVISION');
    	}
    	if(pcbGeneCerCalCodFormato.getValue()==='PENDIENTE'){
    		jCant = json('getCantAlumnoMATERIAPEND');	
    	}

    	if(pcbGeneCerCalCodFormato.getValue()==='PENDIENTE' && pcbGeneCerCalMesEvaluacion.getValue()==='OCTUBRE')
    		jxx = json('getNotaAlumnoRsmFinMatePendOCTUBRE');	
    	if(pcbGeneCerCalCodFormato.getValue()==='PENDIENTE' && pcbGeneCerCalMesEvaluacion.getValue()==='DICIEMBRE')
    		jxx = json('getNotaAlumnoRsmFinMatePendDICIEMBRE');
    	if(pcbGeneCerCalCodFormato.getValue()==='PENDIENTE' && pcbGeneCerCalMesEvaluacion.getValue()==='ENERO')
    		jxx = json('getNotaAlumnoRsmFinMatePendENERO');			
    	if(pcbGeneCerCalCodFormato.getValue()==='PENDIENTE' && pcbGeneCerCalMesEvaluacion.getValue()==='JUNIO')
    		jxx = json('getNotaAlumnoRsmFinMatePendJUNIO');	

		if (pcbGeneCerCalTotalPag.getText() == 'T'){
			jCant.data[0][0] = jxx.data[0].length;
		}

		new ResumenFinal31059Mapping(
			json('getEncabezado'), 
			json('getMateriaRsmFin'), 
			json('getMateriaProRsmFin'), 
			jCant, 			
			jxx
		);
    },
    
	limpiarCoreUpdate: function() {
		pcbGeneCerCalCodProfesor.hideId = 0;
		pcbGeneCerCalCodMateria.setSelectedIndex(0);
		pcbGeneCerCalCodProfesor.setSelectedIndex(0);
		gridsGeneCerCalificaciones.clean();
		memoGenResFinCerCal.setText("");
		this.resetElements('sec');
  	},
  	
	coreUpdate: function(methodName) {
        var rlx = xmlStructs.createRecordList("rlx");

  		if (editsGeneCerCalCodCiDirector.valid(dialogsGenResFinCerCal))
			if (editsGeneCerCalCodNomDirector.valid(dialogsGenResFinCerCal))
				if (editsGeneCerCalCodCiProfGuia.valid(dialogsGenResFinCerCal))
					if (editsGeneCerCalCodNomProfGuia.valid(dialogsGenResFinCerCal))
						if (editsGeneCerCalCodApeProfGuia.valid(dialogsGenResFinCerCal)) 
							if (editsGeneCerCalCodCiCodPlantel.valid(dialogsGenResFinCerCal)) 
								if (editsGeneCerCalCodNomPlaEstudio.valid(dialogsGenResFinCerCal)) 
									if (editsGeneCerCalCodCodigo.valid(dialogsGenResFinCerCal)) 
										if (calendarsGenResFinCerCal.valid(dialogsGenResFinCerCal)) 
											if (editsGeneCerCalCodMencion.valid(dialogsGenResFinCerCal)) {
												if (methodName == 'eliminar')
													rlx.addInt('reg', pcbGeneCerCalCodProfesor.hideId);
												else {
													rlx.addInt('reg', pcbGeneCerCalCodProfesor.hideId);//idProfRsmn
													rlx.add('reg', pcbGeneCerCalCodMateria);
													rlx.add('reg', pcbGeneCerCalCodProfesor);
														
													rlx.addInt('reg', pcbGeneCerCalSeccion.hideId);//idPlanRsmn
													rlx.add('reg', editsGeneCerCalCodCiDirector);
													rlx.add('reg', editsGeneCerCalCodNomDirector);
													rlx.addInt('reg', editsGeneCerCalCodCiProfGuia.hideId);
													rlx.add('reg', editsGeneCerCalCodCiCodPlantel);
													rlx.add('reg', editsGeneCerCalCodNomPlaEstudio);
													rlx.add('reg', editsGeneCerCalCodCodigo);
													rlx.add('reg', calendarsGenResFinCerCal);
													rlx.add('reg', editsGeneCerCalCodMencion);
													rlx.add('reg', memoGenResFinCerCal);
												}
												Tool.cnnSrv('ReportObject', methodName + 'PlanillaResumen', this.windowName + '.limpiarCoreUpdate()', rlx);
											}
    },
    
    reporteRsmFinPrimariaPage : function() {
	  var tRec = json('getNotaAlumnoRsmFinPrimaria').data[0].length;
	  var tPags = 1;
	  var taPag = [0,0,0,0];//alumnos por pagina (4 paginas maximo)
      if(tRec > 60){ 
	    tPags = 4;
        taPag[0]=20;
        taPag[1]=20;
        taPag[2]=20;
        taPag[3]=tRec - 60;
      }  
	  else 
	    if(tRec > 40){ 
	      tPags = 3;
          taPag[0]=20;
          taPag[1]=20;
          taPag[2]=tRec - 40;
        }
	    else 
	      if(tRec > 20){ 
	        tPags = 2;
            taPag[0]=20;
            taPag[1]=tRec - 20;
          }
          else
            taPag[0]=tRec;
	  for(var m=0; m<tPags; m++)
	    this.reporteRsmFinalPrimaria(m,taPag);          
	},
    
    reporteRsmFinalPrimaria : function(page, arrTotAlum) {
        var jHead = json('getEncabezadoPrimaria');
        var jd = json('getNotaAlumnoRsmFinPrimaria');

        var rf = new ResumenFinalBasica();
		var ced = [];
        var ape =[];
        var nom =[];
        var ciudad = [];
        var reg = [];
        var sex = [];
        var f1 = [];
        var f2 = [];
        var f3 = [];
        var la = [];
        var lb = [];
        var lc = [];
        var ld = [];
        var le = [];
        var lp = [];
        var totSeccion = jd.data[0].length+''; //TOTAL ALUMNOS POR SECCION (PRIMARIA)
        
        for(var c=0; c<arrTotAlum[page]; c++ ){
            ced[c] = jd.data[0][c + page*20];
            ape[c] = jd.data[1][c + page*20];
            nom[c] = jd.data[2][c + page*20];
            ciudad[c] = jd.data[3][c + page*20];
            reg[c] = jd.data[4][c + page*20];
            sex[c] = jd.data[5][c + page*20];
            f1[c] = jd.data[6][c + page*20];
            f2[c] = jd.data[7][c + page*20];
            f3[c] = jd.data[8][c + page*20];
            la[c] = jd.data[9][c + page*20];
            lb[c] = jd.data[10][c + page*20];
            lc[c] = jd.data[11][c + page*20];
            ld[c] = jd.data[12][c + page*20];
            le[c] = jd.data[13][c + page*20];
            lp[c] = jd.data[14][c + page*20];
        }
        rf.setDataParteI(jHead.data[0][0],jHead.data[1][0],jHead.data[3][0],jHead.data[4][0]);
		rf.setDataParteII(jHead.data[5][0],jHead.data[6][0],jHead.data[7][0],jHead.data[8][0],
                            jHead.data[9][0],jHead.data[10][0],jHead.data[11][0], jHead.data[12][0],
                            jHead.data[13][0],jHead.data[14][0]);
		rf.setDataParteIII(pcbGeneCerCalPosicion.getValue(),pcbGeneCerCalSeccion.getValue(),totSeccion+'',arrTotAlum[page]+'');
		rf.setDataParteIV(ced,ciudad,reg,sex,f1,f2,f3,la,lb,lc,ld,le,lp,ape,nom,
		 jHead.data[17],jHead.data[18],pcbGeneCerCalCodFormato.getValue());
		
        var observ = memoGenResFinCerCal.getValue().split("#");
          if(parseInt(page,10) > observ.length - 1)
            rf.setDataParteV('');
          else
            rf.setDataParteV(observ[page]);
		rf.setDataParteVI(jHead.data[15],jHead.data[13],jHead.data[14]);
		rf.createRep();
    },
    
    
   reporteRsmFinPage : function() {
	  tRecords = json(nomPlanRsmnFin).data[0].length;
	  var tPags = 1;
	  if(tRecords > 52) 
	    tPags = 5; 
	  else 
	    if(tRecords > 39) 
	      tPags = 4; 
	    else 
	      if(tRecords > 26) 
	        tPags = 3; 
	      else 
	        if(tRecords > 13) 
	          tPags = 2;
	  for(var m=0; m<tPags; m++)
	    this.reporteRsmFin(m);          
	},
		
	reporteRsmFin : function(pag) {  //bachillerato
				
    	//********************************** CABECERA ***************************************   	
    	var jHead = json('getEncabezado');	
	  	var planEstudio = jHead.data[0][0];
	  	var codPlanEstudio = jHead.data[1][0];
	  	var mencion = jHead.data[2][0];
	  	var añoescolar = pcbGeneCerCalPeriodo.getValue();
	  	var mesanoeval = jHead.data[4][0];
	  	var codPlantel = jHead.data[5][0];
	  	var nombre = jHead.data[6][0];
	  	var distrito = jHead.data[7][0];
	  	var direccion = jHead.data[8][0];
	  	var telf = jHead.data[9][0];
	  	var municipio = jHead.data[10][0];
	  	var entidadFederal = jHead.data[11][0];
	  	var zonaEducativa = jHead.data[12][0];
	  	var nom_director = jHead.data[13];
	  	var ci_director = jHead.data[14][0];
		var apefunrecpt = "";
	  	var nomfunrecpt = "";
	  	var cedfunrecpt = "";	
	  	var fechaRemision = jHead.data[15][0];
        var obs = jHead.data[16][0];
        var jf = {};
        if(pcbGeneCerCalCodFormato.getValue()==='FINAL')
          jf = json('getCantAlumnoFINAL');
        if(pcbGeneCerCalCodFormato.getValue()==='PENDIENTE')  
          jf = json('getCantAlumnoMATERIAPEND');
        if(pcbGeneCerCalCodFormato.getValue()==='REVISION')
          jf = json('getCantAlumnoREVISION');
        
		if (pcbGeneCerCalTotalPag.getText() == 'T'){
			jf.data[0][0] = json(nomPlanRsmnFin).data[0].length;
		}
	  	var numstseccion = jf.data[0][0]+''; //TOTAL ALUMNOS POR SECCION (BACHILLERATO)
        //**********************************************************************************
	  	
	  	//************************************* DATA ***************************************
	  	var nivgrado = pcbGeneCerCalPosicion.getValue();
	  	
	  	var tipoevaluacion = pcbGeneCerCalCodFormato.getOption();
	  	var numtabla1  = ['01','02','03','04','05','06','07','08','09','10','11','12','13'];
	  	var numtabla2  = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15'];
	  	var calasig	   = json('getMateriaRsmFin').data;	  	
	  	var cedalumno  = json(nomPlanRsmnFin).data[0].slice(pag*13,13+pag*13);
	  	var apealumno =  json(nomPlanRsmnFin).data[16].slice(pag*13,13+pag*13);
	  	var nomalumno =  json(nomPlanRsmnFin).data[17].slice(pag*13,13+pag*13);
	  	var lugnacimit = json(nomPlanRsmnFin).data[18].slice(pag*13,13+pag*13);
	  	var entfederal = json(nomPlanRsmnFin).data[19].slice(pag*13,13+pag*13);
	  	var sexo =       json(nomPlanRsmnFin).data[20].slice(pag*13,13+pag*13);
	  	var dia =        json(nomPlanRsmnFin).data[21].slice(pag*13,13+pag*13);
	  	var mes =        json(nomPlanRsmnFin).data[22].slice(pag*13,13+pag*13);
	  	var ano =        json(nomPlanRsmnFin).data[23].slice(pag*13,13+pag*13);	  	  	
	  	var materia	=    json('getMateriaProRsmFin').data[0];
	  	var matProf =	 json('getMateriaProRsmFin').data[1];
	  	var matcedprof = json('getMateriaProRsmFin').data[2];
	  	var eduTrab = 	 json('getMateriaETRsmFin').data[0];
	  	var ucET = 		 json('getMateriaETRsmFin').data[1];
	  	var inscritosMateria = [];
        
	  	//***********************************************************************************
	  	
	  	//************************** VARIABLES DE CALCULO GLOBALES **************************
	  	var counter = 0;
	  	var notaAPB = 9.5;
	  	//***********************************************************************************
	  	function formatZero(num) {	  	  
	  	  if(parseInt(num,10) < notaAPB){
	  	  	return '0'+num;
	  	  }
	  	  else
	  	    return num+'';
	  	}
	  		  
        function rendimiento() {
          var lng = cedalumno.length;
          rep.addText(108, 15.5,planEstudio,false,true);
          rep.addText(192, 15.5,codPlanEstudio,false,true);
          rep.addText(108, 19.5,mencion,false,true);
          rep.addText(108, 24,añoescolar,false,true);
          rep.addText(180, 24,mesanoeval,false,true);
          rep.addText(19, 28,codPlantel ,false,true);
          rep.addText(65, 28,nombre ,false,true);
          rep.addText(200, 28,distrito ,false,true);
          rep.addText(19, 31.5,direccion ,false,true);
          rep.addText(177, 31.5,telf ,false,true);
          rep.addText(19, 35.5,municipio ,false,true);
          rep.addText(107, 35.5,entidadFederal ,false,true);
          rep.addText(167, 35.5,zonaEducativa ,false,true);
          rep.addText(19, 39.5,nom_director,false,true);
          rep.addText(163, 39.5,ci_director,false,true);
          if (tipoevaluacion.trim().toUpperCase()==='PENDIENTE')
            rep.addText(173, 116.6,tipoevaluacion,false,true);
          else
        	rep.addText(185, 116.6,tipoevaluacion,false,true);  
          rep.setFontProperties(rep.getRGBAObj(0,0,0,0),9,'helvetica','normal');
          rep.addText(182, 194,nivgrado  ,false,true);
          
          if (tipoevaluacion.trim().toUpperCase()==='PENDIENTE')
        	rep.addText(188, 208, "*", false, true);
          else
        	rep.addText(188, 208,pcbGeneCerCalSeccion.getValue()  ,false,true);  
          
          rep.addText(188, 223,lng+'' ,false,true);
          rep.addText(188, 235,numstseccion  ,false,true);
          rep.setFontProperties(rep.getRGBAObj(0,0,0,0),8,'helvetica','normal');
          var observ = obs.split("#");
          if(parseInt(pag,10) > observ.length - 1)
            rep.addJustParagraph(28, 254, '', 770, 3, [], false, true);
          else
		    rep.addJustParagraph(28, 254, observ[pag], 770, 3, [], false, true);
          //rep.addParagraph(14, 1129,obs,600,12,false);
          rep.addText(5, 285,nom_director,false,true);
          rep.addText(5,296.4,ci_director ,false,true); 
          rep.addText(112, 285,apefunrecpt+'  '+nomfunrecpt,false,true);
          rep.addText(126,296.4,cedfunrecpt ,false,true);
          
          //COLOCACION DE ITEMS VERTICALES
          for(var n1=0; n1<numtabla1.length; n1++){
            rep.addText(4.5, 59.6 + n1*3.8 , formatZero(n1+1), false, true);
            rep.addText(4.5, 128.0 + n1*3.8 , formatZero(n1+1), false, true);
          }
          //**************************************** ESCRITURA DE NOTAS ******************************************	
          var z = '';            
          var apl = 0;
          var colRsm = [];//COLUMNA RESUMEN
          var aplRsm = 0;   
          //************************ RECORRIDO POR COLUMNAS PARA LLENAR NOTAS TABLA III **************************
          for(var n2=0; n2<numtabla2.length; n2++){
            z = formatZero(n2+1);
            rep.addText(41.4 + n2*8.67, 51.9, z, false, true);
            if(calasig[n2]=='*')
              rep.addText(42 + n2*8.67, 55.8, calasig[n2], false, true);
            else
              rep.addText(41.4 + n2*8.67, 55.8, calasig[n2], false, true);
            rep.addText(4.5, 185.4 + n2*3.8 , z, false, true);
              
			rep.setFontProperties(rep.getRGBAObj(0,0,0,0),8,'helvetica','normal');
            //RECORRIDO POR FILA DE LAS NOTAS DE UNA COLUMNA (k=fila)
            counter = 0;
            var inscritos = 0;
            var inasistentes = 0;
            var aprob = 0;
            apl = 0;
            var nulos = true;
            for(var k=pag*13; k<(13+pag*13); k++){              	
              if(k >= json(nomPlanRsmnFin).data[n2+1].length){
                if(counter<13)
                  for(var nn=0; nn<numtabla2.length; nn++)
                    rep.addText(42 + nn*8.67, 59.5+(counter*3.8), '*', false, true);
                //break;
              }  
              else{	
                var nta = json(nomPlanRsmnFin).data[n2+1][k];
                if(nta=='*'){
                  if (tipoevaluacion.trim().toUpperCase()==='FINAL' && n2 < materia.length)
                    rep.addText(41.5 + n2*8.67, 59.5+(counter*3.8), 'NC', false, true);
                  else
                    rep.addText(42 + n2*8.67, 59.5+(counter*3.8), nta, false, true);
                }
                else{
                  rep.addText(41 + n2*8.67, 59.5+(counter*3.8), nta, false, true);
                  nulos = false;
                }  
                if(!nulos && nta!='*'){
                  inscritos++;	
                  if(parseInt(nta,10) > notaAPB)
                    aprob++;
                  else
                    if(nta.toUpperCase()!='I')
                      apl++;
                }                  
                if(nta=='i'||nta=='I')
                  inasistentes++;
                }
              counter++;  
              
            }
            inscritosMateria[n2] = inscritos;
            if(!nulos){
               rep.addText(41.7 + n2*8.67, 59.5+(13*3.8),formatZero(inscritos), false, true);
               rep.addText(41.7 + n2*8.67, 59.5+(14*3.8),formatZero(inasistentes), false, true);
               rep.addText(41.7 + n2*8.67, 59.5+(15*3.8),formatZero(aprob), false, true);
               rep.addText(41.7 + n2*8.67, 59.5+(16*3.8),formatZero(apl), false, true);               
            }
            else{
              if(n2 < materia.length){	
                rep.addText(42 + n2*8.67, 59.5+(13*3.8),'00' , false, true);
                rep.addText(42 + n2*8.67, 59.5+(14*3.8),'00' , false, true);
                rep.addText(42 + n2*8.67, 59.5+(15*3.8),'00' , false, true);
                rep.addText(42 + n2*8.67, 59.5+(16*3.8),'00' , false, true);
              }
              else{
            	rep.addText(42 + n2*8.67, 59.5+(13*3.8),'*' , false, true);
                rep.addText(42 + n2*8.67, 59.5+(14*3.8),'*' , false, true);
                rep.addText(42 + n2*8.67, 59.5+(15*3.8),'*' , false, true);
                rep.addText(42 + n2*8.67, 59.5+(16*3.8),'*' , false, true);
              }
            }
          //********************* TIPO DE LETRA PARA PROF Y MATERIAS *********************
            rep.setFontProperties(rep.getRGBAObj(0,0,0,0),7,'helvetica','normal');
            if(n2 < materia.length)
                rep.addText(9, 185.4 + n2*3.8 , materia[n2], false, true);
            else{
                rep.addText(9, 185.4 + n2*3.8 , "***", false, true);
                rep.addText(61, 185.4 + n2*3.8 , '***', false, true);
                rep.addText(117.5, 185.4 + n2*3.8 , '***', false, true);
            }
            if(n2 < matProf.length){
              if(inscritosMateria[n2]===0){
            	rep.addText(61, 185.4 + n2*3.8 , '      *', false, true);
            	rep.addText(117.5, 185.4 + n2*3.8 , '      *', false, true);
              } 	
              else{
            	rep.addText(61, 185.4 + n2*3.8 , matProf[n2], false, true); 
            	rep.addText(117.5, 185.4 + n2*3.8 , matcedprof[n2], false, true);
              }	
            } 
          }  
          //************************************* fin recorrido notas *******************************************
          
          //********************** recorrido para calculo de ept 1,2,3,4 y columna resumen **********************
          colRsm.length = 0;
          var nx = '';
          var flat = true;
          var fil = 0;
          for(var k=pag*13; k<(13+pag*13); k++){
          	if(k >= json(nomPlanRsmnFin).data[0].length){
              if(fil < 13){
                for(var ff=fil; ff<13; ff++){  
                    rep.addText(172, 59.5 + (ff*3.8), '*' , false, true); 
                    rep.addText(181, 59.5 + (ff*3.8), '*' , false, true); 
                    rep.addText(189, 59.5 + (ff*3.8), '*' , false, true); 
                    rep.addText(197.5, 59.5 + (ff*3.8), '*' , false, true); 
                    rep.addText(203.5, 59.5 + (ff*3.8), '*' , false, true);
                }
              }              
              break;
            }
          	colRsm[fil]='*';
            aplRsm = 0;        
            //*********** PROG. APROBADOS EDUC. TRAB. ************
            rep.addText(172, 59.5 + (fil*3.8), json(nomPlanRsmnFin).data[24][k] , false, true); 	
            rep.addText(181, 59.5 + (fil*3.8), json(nomPlanRsmnFin).data[25][k] , false, true); 
            rep.addText(189, 59.5 + (fil*3.8), json(nomPlanRsmnFin).data[26][k] , false, true); 
            rep.addText(197.5, 59.5 + (fil*3.8), json(nomPlanRsmnFin).data[27][k] , false, true);
            //****************************************************
            for(var col=0; col<numtabla2.length; col++){
              if(col >= json(nomPlanRsmnFin).data.length)
                break;	
          	  nx = json(nomPlanRsmnFin).data[col+1][k];
          	  if(nx!='*' && flat){
          	    if(nx==='I'||nx==='P'){
          	      colRsm[fil]='4';
          	      flat=false;
          	    }
          	    else{
          	      if(parseInt(nx, 10) < notaAPB){
          	      	aplRsm++;
          	      }
          	    }  
              }
            }
            if(aplRsm == 0 && flat)
              colRsm[fil]='1';
            else
              if(aplRsm == 1 && flat)  
                colRsm[fil]='2';
              else
                if(aplRsm > 1 && flat)
                  colRsm[fil]='3';
            
            rep.addText(203, 59.5 + (fil*3.8), colRsm[fil] , false, true);  
            flat=true;
            fil++;
            if(fil > 13 )
              fil = 0;          
          } 
          //*********************************** fin recorrido ept y rsm *****************************************
          
          
          //************************ COLOCACION DE DATOS EN TABLA III DE NOTAS ALUMNOS **************************
          for(var i=0; i<lng; i++){
          	rep.setFontProperties(rep.getRGBAObj(0,0,0,0),8,'helvetica','normal');
          	rep.addText(10, 59.6 + i*3.8 , cedalumno[i], false, true);
          	rep.setFontProperties(rep.getRGBAObj(0,0,0,0),7,'helvetica','normal');
          	rep.addText(9, 128.0 + i*3.8 , apealumno[i]+"", false, true);
          	rep.addText(61.5, 128.0 + i*3.8 , nomalumno[i]+"", false, true);
			rep.addText(118.0, 128.0 + i*3.8 , lugnacimit[i], false, true);
			rep.addText(170.2, 128.0 + i*3.8 , entfederal[i], false, true);
			rep.addText(177.0, 128.0 + i*3.8 , sexo[i], false, true);
			rep.addText(182.5, 128.0 + i*3.8 , dia[i]+"", false, true);
          	rep.addText(188.3, 128.0 + i*3.8 , mes[i]+"", false, true);
          	rep.addText(196.0, 128.0 + i*3.8 , ano[i]+"", false, true);
          }
          
          if(lng < 13){
            for(var i=lng; i<13; i++){
                //rep.setFontProperties(rep.getRGBAObj(0,0,0,0),8,'helvetica','normal');
                //rep.addText(10, 59.6 + i*3.8 , "***", false, true);
                rep.setFontProperties(rep.getRGBAObj(0,0,0,0),7,'helvetica','normal');
                rep.addText(9, 128.0 + i*3.8 , "***", false, true);
                rep.addText(61.5, 128.0 + i*3.8 , "***", false, true);
                rep.addText(118.0, 128.0 + i*3.8 , "***", false, true);
                rep.addText(170.2, 128.0 + i*3.8 , "***", false, true);
                rep.addText(177.0, 128.0 + i*3.8 , "***", false, true);
                rep.addText(182.5, 128.0 + i*3.8 , "***", false, true);
                rep.addText(188.3, 128.0 + i*3.8 , "***", false, true);
                rep.addText(196.0, 128.0 + i*3.8 , "***", false, true);    
            }    
          }
          
          rep.setFontProperties(rep.getRGBAObj(0,0,0,0),8,'helvetica','normal');
        }  
        //*******************************************************************************************************
        
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait',798,1500);
		rep.setPDFFormat('custom','mm', [343, 210]);
		rep.setNoRepeatHead();
		rep.setPositionIcon(770,0);
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.addImage(10,30,314,85,imgEduca.logo_ministerio,false);
		//PARTE-I//////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),13,'helvetica','bold');
		rep.addText(392, 40, 'RESUMEN FINAL DE LA EVALUACION',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),11,'helvetica','bold');
		rep.addText(374, 56, '(Régimen Regular) Código del Formato: RR-DEA-04-03',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),8,'helvetica','bold');
		rep.addLine(406,75,700,75,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addLine(726,75,786,75,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addLine(406,93,786,93,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(318, 75,'I. Plan de estudio: ',false);
        rep.addText(702, 75,'Cod:',false);
        rep.addText(318, 92,'Mención:',false);
		rep.addText(318, 110,'Año Escolar:',false);
		rep.addText(555, 110,'Mes y Año de evaluación:',false);
		//PARTE-II//////////////////////////////////////////////////////////////////////////////////////
        rep.addText(10, 109, 'II. Datos del Plantel:',false);
        rep.addText(10, 126,'Cód Plantel:',false);
        rep.addText(200, 126,'Nombre:',false);
        rep.addText(700, 126,'Dtto. Esc.:',false);
        rep.addText(10, 142,'Dirección:',false);
        rep.addText(10, 159,'Municipio:',false);
        rep.addText(342, 159,'Ent. Federal:',false);
        rep.addText(553, 159,'Zona Educativa:',false);
        rep.addText(10, 176,'Director(a):',false);
        rep.addText(595, 176,'C.I.:',false);
        rep.addText(615, 142,'Teléfono:',false);
        rep.addLine(406,112,550,112,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addLine(678,112,786,112,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addLine(70,131,200,131,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addLine(242,129,702,129,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addLine(746,129,786,129,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addLine(70,146,610,146,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addLine(664,146,786,146,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addLine(70,163,340,163,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addLine(400,163,554,163,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addLine(628,163,786,163,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addLine(70,180,594,180,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addLine(616,180,786,180,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        //PARTE-III////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0),9.5,'helvetica','normal');
				//rep.addText(365, 193, 'ESTUDIANTIL',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0),8,'helvetica','bold');
        rep.addText(10, 193, 'III. Resumen Final de Rendimiento Estudiantil:',false);
        rep.addText(16,235, 'Nº',false);
        rep.addText(65,220, 'Cédula de',false);
		rep.addText(65,238, 'Identidad',false);
        rep.addText(327,210, 'Calificación de las Asignaturas',false);
        rep.addText(673,490, 'Tipo de Evaluación',false);
        rep.addText(676,210, 'Prog. Aprobados',false);
		rep.addText(688,226, 'Educ. Trab.',false);
		rep.addText(30, 500, 'TOTALES',false);
		rep.addText(653,246, '1',false);
		rep.addText(685,246, '2',false);
		rep.addText(717,246, '3',false);
		rep.addText(749,246, '4',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0),6.0,'helvetica','bold');
        rep.addText(101,480, 'Inscritos',false);
        rep.addText(101,495, 'Inasistentes',false);
        rep.addText(101,511, 'Aprobados',false);
        rep.addText(101,528, 'Aplazados',false);
        rep.addText(671,540, 'SE',false);
		rep.addText(671,548, 'XO',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0),5,'helvetica','bold');
		rep.addText(768,216, 'Resu',false);
		rep.addText(769,226, 'men',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0),8,'helvetica','bold');
        rep.addSimpleTablePDF(3 ,45.0,rep.getRGBAObj(0,0,0,1),35,1,11.4,false);//linea E 
        rep.addSimpleTablePDF(3 ,56.6,rep.getRGBAObj(0,0,0,1),35,13,3.8,false);//linea E 
		rep.addLine(30,202,30,470,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addSimpleTablePDF(3 ,106.0,rep.getRGBAObj(0,0,0,1),35,1,15.2,false);//linea E 
		rep.addSimpleTablePDF(26 ,106.2,rep.getRGBAObj(0,0,0,1),12.0,4,3.7,false);//linea E
		rep.addSimpleTablePDF(38 ,45.0,rep.getRGBAObj(0,0,0,1),130.8,1,3.8,false);//linea E 
        rep.addSimpleTablePDF(38.0 ,49.0,rep.getRGBAObj(0,0,0,1),8.8,19,3.8,false);//linea E
		rep.addSimpleTablePDF(46.9 ,49.0,rep.getRGBAObj(0,0,0,1),8.8,19,3.8,false);//linea E
		rep.addSimpleTablePDF(55.6 ,49.0,rep.getRGBAObj(0,0,0,1),8.8,19,3.8,false);//linea E
		rep.addSimpleTablePDF(64.3 ,49.0,rep.getRGBAObj(0,0,0,1),8.8,19,3.8,false);//linea E
		rep.addSimpleTablePDF(73.0 ,49.0,rep.getRGBAObj(0,0,0,1),8.8,19,3.8,false);//linea E
		rep.addSimpleTablePDF(81.7 ,49.0,rep.getRGBAObj(0,0,0,1),8.8,19,3.8,false);//linea E
		rep.addSimpleTablePDF(90.4 ,49.0,rep.getRGBAObj(0,0,0,1),8.8,19,3.8,false);//linea E
		rep.addSimpleTablePDF(99.1 ,49.0,rep.getRGBAObj(0,0,0,1),8.8,19,3.8,false);//linea E
		rep.addSimpleTablePDF(107.8 ,49.0,rep.getRGBAObj(0,0,0,1),8.8,19,3.8,false);//linea E
		rep.addSimpleTablePDF(116.5 ,49.0,rep.getRGBAObj(0,0,0,1),8.8,19,3.8,false);//linea E
		rep.addSimpleTablePDF(125.2 ,49.0,rep.getRGBAObj(0,0,0,1),8.8,19,3.8,false);//linea E
		rep.addSimpleTablePDF(133.9 ,49.0,rep.getRGBAObj(0,0,0,1),8.8,19,3.8,false);//linea E
		rep.addSimpleTablePDF(142.6 ,49.0,rep.getRGBAObj(0,0,0,1),8.8,19,3.8,false);//linea E
		rep.addSimpleTablePDF(151.3 ,49.0,rep.getRGBAObj(0,0,0,1),8.8,19,3.8,false);//linea E
		rep.addSimpleTablePDF(160.0 ,49.0,rep.getRGBAObj(0,0,0,1),8.8,19,3.8,false);//linea E
		rep.addSimpleTablePDF(168.8 ,45.0,rep.getRGBAObj(0,0,0,1),33.4,1,7.6,false);//linea E
		rep.addSimpleTablePDF(168.8 ,52.8,rep.getRGBAObj(0,0,0,1),8.4,14,3.8,false);//linea E
		rep.addSimpleTablePDF(177.2 ,52.8,rep.getRGBAObj(0,0,0,1),8.4,14,3.8,false);//linea E
		rep.addSimpleTablePDF(185.6 ,52.8,rep.getRGBAObj(0,0,0,1),8.4,14,3.8,false);//linea E
		rep.addSimpleTablePDF(194.0 ,52.8,rep.getRGBAObj(0,0,0,1),8.4,14,3.8,false);//linea E
		rep.addSimpleTablePDF(202.4 ,45.0,rep.getRGBAObj(0,0,0,1),3.8,1,11.6,false);//linea E
		rep.addSimpleTablePDF(202.4 ,56.6,rep.getRGBAObj(0,0,0,1),3.8,13,3.8,false);//linea E
		rep.addText(16,544, 'Nº',false);
		rep.addText(100,544, 'Apellidos',false);
		rep.addText(310,544, 'Nombres',false);
		rep.addText(500,544, 'Lugar de Nacimiento',false);
		rep.addText(649,544, 'EF',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),7,'helvetica','bold');
		rep.addText(702,543, 'Fecha Nacimiento',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),8,'helvetica','bold');
		rep.addSimpleTablePDF(168.8 ,106.0,rep.getRGBAObj(0,0,0,1),37.3,1,7.6,false);//linea E
		rep.addText(80,785, 'Asignaturas',false);
		rep.addText(290,780, 'Apellidos y Nombres',false);
		rep.addText(290,793, 'del (la) Profesor(a)',false);
		rep.addText(485,785, 'C.I.',false);
		rep.addText(574,785, 'Firma',false);
		rep.addSimpleTablePDF(168.8 ,113.7,rep.getRGBAObj(0,0,0,1),37.3,1,3.8,false);//linea E
		rep.addSimpleTablePDF(168.8 ,117.5,rep.getRGBAObj(0,0,0,1),37.3,1,3.7,false);//linea E
		rep.addSimpleTablePDF(3 ,121.2,rep.getRGBAObj(0,0,0,1),5,14,3.8,false);//linea E
		rep.addSimpleTablePDF(8 ,121.2,rep.getRGBAObj(0,0,0,1),52.4,14,3.8,false);//linea E
		rep.addSimpleTablePDF(60.2 ,121.2,rep.getRGBAObj(0,0,0,1),56.3,14,3.8,false);//linea E
		rep.addSimpleTablePDF(116.6 ,121.2,rep.getRGBAObj(0,0,0,1),52.2,14,3.8,false);//linea E
		rep.addSimpleTablePDF(168.8 ,121.2,rep.getRGBAObj(0,0,0,1),6.0,14,3.8,false);//linea E
		rep.addSimpleTablePDF(174.7 ,121.2,rep.getRGBAObj(0,0,0,1),6.0,14,3.8,false);//linea E
		rep.addSimpleTablePDF(174.7 ,121.2,rep.getRGBAObj(0,0,0,1),31.4,1,3.7,false);//linea E
		rep.addSimpleTablePDF(180.6 ,125.0,rep.getRGBAObj(0,0,0,1),6.0,13,3.8,false);//linea E
		rep.addSimpleTablePDF(186.7 ,125.0,rep.getRGBAObj(0,0,0,1),6.0,13,3.8,false);//linea E
		rep.addSimpleTablePDF(192.6 ,125.0,rep.getRGBAObj(0,0,0,1),13.6,13,3.8,false);//linea E
		rep.addSimpleTablePDF(3 ,174.5,rep.getRGBAObj(0,0,0,1),57.3,1,7.6,false);// Asignaturas
		rep.addSimpleTablePDF(60.3 ,174.5,rep.getRGBAObj(0,0,0,1),56.3,1,7.6,false);//linea E
		rep.addSimpleTablePDF(116.6 ,174.5,rep.getRGBAObj(0,0,0,1),24.1,1,7.6,false);//linea E
		rep.addSimpleTablePDF(140.7 ,174.5,rep.getRGBAObj(0,0,0,1),28.1,1,7.6,false);//linea E
		rep.addSimpleTablePDF(3 ,182.2,rep.getRGBAObj(0,0,0,1),5,15,3.8,false);//linea E
		rep.addSimpleTablePDF(8 ,182.2,rep.getRGBAObj(0,0,0,1),52.2,15,3.8,false);//linea E
	    rep.addSimpleTablePDF(60.2 ,182.2,rep.getRGBAObj(0,0,0,1),56.3,15,3.8,false);//linea E
		rep.addSimpleTablePDF(116.6 ,182.2,rep.getRGBAObj(0,0,0,1),24.1,15,3.8,false);//linea E
		rep.addSimpleTablePDF(140.7 ,182.2,rep.getRGBAObj(0,0,0,1),28.1,15,3.8,false);//linea E
		//PARTE-IV////////////////////////////////////////////////////////////////////////////////////////
		rep.addText(670,785, 'IV. Identificación del',false);
		rep.addText(700,796, 'Curso:',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),9,'helvetica','bold');
		rep.addText(676,833, 'GRADO O AÑO:',false);
		rep.addText(688,885, 'SECCIÓN:',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),6,'helvetica','bold');
		rep.addText(648,960, 'NUMERO DE ESTUDIANTES EN',false);
		rep.addText(648,974, 'ESTA PAGINA:',false);		
		rep.addText(648,1010, 'NUMERO DE ESTUDIANTES DE',false);	
		rep.addText(648,1020, 'LA SECCIÓN:',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),8,'helvetica','bold');
		
		rep.addSimpleTablePDF(168.8 ,174.5,rep.getRGBAObj(0,0,0,1),37.3,1,11.4,false);//linea E
		rep.addSimpleTablePDF(168.8 ,185.9,rep.getRGBAObj(0,0,0,1),37.3,1,11.4,false);//linea E
		rep.addSimpleTablePDF(168.8 ,197.3,rep.getRGBAObj(0,0,0,1),37.3,1,15.2,false);//linea E
		rep.addSimpleTablePDF(168.8 ,212.5,rep.getRGBAObj(0,0,0,1),37.3,1,15.2,false);//linea E
		rep.addSimpleTablePDF(168.8 ,227.7,rep.getRGBAObj(0,0,0,1),37.3,1,11.4,false);//linea E
		//PARTE-V////////////////////////////////////////////////////////////////////////////////////////
		rep.addText(17,1062, 'V. Programas cursados en Educación para el trabajo / Horas-Estudiantes Semanales de Cada Uno',false);
		rep.addText(17,1078, '1',false);
		rep.addText(17,1095, '2',false);
		rep.addText(431,1078, '3',false);
		rep.addText(431,1095, '4',false);
		rep.addSimpleTablePDF(3.0 ,239.1,rep.getRGBAObj(0,0,0,1),203.1,1,3.8,false);//linea E
		rep.addSimpleTablePDF(3.0 ,242.9,rep.getRGBAObj(0,0,0,1),5.3,2,3.8,false);//linea E
		rep.addSimpleTablePDF(8.2 ,242.9,rep.getRGBAObj(0,0,0,1),96.2,2,3.8,false);//linea E
		rep.addSimpleTablePDF(104.5 ,242.9,rep.getRGBAObj(0,0,0,1),8.0,2,3.8,false);//linea E
		rep.addSimpleTablePDF(112.6 ,242.9,rep.getRGBAObj(0,0,0,1),4.0,2,3.8,false);//linea E
		rep.addSimpleTablePDF(116.6 ,242.9,rep.getRGBAObj(0,0,0,1),81.5,2,3.8,false);//linea E
		rep.addSimpleTablePDF(198.1 ,242.9,rep.getRGBAObj(0,0,0,1),8.0,2,3.8,false);//linea E
		//PARTE-VI/////////////////////////////////////////////////////////////////////////////////////////
		rep.addText(14, 1114, 'VI. Observaciones:',false);
		rep.addLine(100,1118,780,1118,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addLine(14,1135,780,1135,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addLine(14,1153,780,1153,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addLine(14,1170,780,1170,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		//PARTE-VII/////////////////////////////////////////////////////////////////////////////////////////
		rep.addSimpleTablePDF(3 ,269.0,rep.getRGBAObj(0,0,0,1),103.0,1,3.8,false);//linea E
		rep.addText(17, 1190, 'VII. Fecha de Remisión:'+fechaRemision,false);
		rep.addText(90, 1210, 'Director(a):',false);
		rep.addText(17, 1225, 'Apellidos y Nombres:',false);
		rep.addText(17, 1273, 'Número de C.I.:',false);
		rep.addText(17, 1324, 'Firma:',false);
		rep.addText(298, 1280, 'SELLO DEL',false);
		rep.addText(304, 1296, 'PLANTEL',false);
		rep.addSimpleTablePDF(3 ,272.7,rep.getRGBAObj(0,0,0,1),62.5,1,3.8,false);//linea E
		rep.addSimpleTablePDF(3 ,276.5,rep.getRGBAObj(0,0,0,1),62.5,1,3.8,false);//linea E
		rep.addSimpleTablePDF(3 ,280.3,rep.getRGBAObj(0,0,0,1),62.5,1,7.6,false);//linea E
		rep.addSimpleTablePDF(3 ,287.8,rep.getRGBAObj(0,0,0,1),62.5,1,3.8,false);//linea E
		rep.addSimpleTablePDF(3 ,291.6,rep.getRGBAObj(0,0,0,1),62.5,1,7.6,false);//linea E
		rep.addSimpleTablePDF(3 ,299.2,rep.getRGBAObj(0,0,0,1),62.5,1,3.8,false);//linea E
		rep.addSimpleTablePDF(3 ,303.0,rep.getRGBAObj(0,0,0,1),62.5,1,15.2,false);//linea E
		rep.addSimpleTablePDF(65.5 ,272.7,rep.getRGBAObj(0,0,0,1),40.5,1,45.5,false);//linea E
		//PARTE-VIII/////////////////////////////////////////////////////////////////////////////////////////
		rep.addSimpleTablePDF(111.0 ,269.0,rep.getRGBAObj(0,0,0,1),95.0,1,3.8,false);//linea E
		rep.addText(428, 1190, 'VIII. Fecha de Recepción:',false);
		rep.addText(450, 1210, 'Funcionario(a) Receptor(a):',false);
		rep.addText(428, 1225, 'Apellidos y Nombres:',false);
		rep.addText(428, 1273, 'Número de C.I.:',false);
		rep.addText(428, 1324, 'Firma:',false);
		rep.addText(651, 1280, 'SELLO DE LA ZONA',false);
		rep.addText(670, 1296, 'EDUCATIVA',false);
		rep.addSimpleTablePDF(111 ,272.7,rep.getRGBAObj(0,0,0,1),54.5,1,3.8,false);//linea E
		rep.addSimpleTablePDF(111 ,276.5,rep.getRGBAObj(0,0,0,1),54.5,1,3.8,false);//linea E
		rep.addSimpleTablePDF(111 ,280.3,rep.getRGBAObj(0,0,0,1),54.5,1,7.6,false);//linea E
		rep.addSimpleTablePDF(111 ,287.8,rep.getRGBAObj(0,0,0,1),54.5,1,3.8,false);//linea E
		rep.addSimpleTablePDF(111 ,291.6,rep.getRGBAObj(0,0,0,1),54.5,1,7.6,false);//linea E
		rep.addSimpleTablePDF(111 ,299.2,rep.getRGBAObj(0,0,0,1),54.5,1,3.8,false);//linea E
		rep.addSimpleTablePDF(111 ,303.0,rep.getRGBAObj(0,0,0,1),54.5,1,15.2,false);//linea E
		rep.addSimpleTablePDF(165.5 ,272.7,rep.getRGBAObj(0,0,0,1),40.5,1,45.5,false);//linea E
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),8,'helvetica','normal');
		//DATA PARA PROGRAMAS CURSADOS EN EDUCACION PARA EL TRABAJO / HORAS-ALUMNO SEMALALES DE CADA UNO
		var x1 = 35;
		var x2 = 445;
		var y1 = 1079;
		var y2 = 1096;
		var x11 = 405;
		var x12 = 754;
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),7,'helvetica','normal');
		switch(eduTrab.length){
			case 1 : { 
			  rep.addText(x1, y1, eduTrab[0],false);	
			  rep.addText(x11, y1, ucET[0],false);
		      break;
		    }
		    case 2 : { 
		      rep.addText(x1, y1, eduTrab[0],false);	
		      rep.addText(x1, y2, eduTrab[1],false);
		      rep.addText(x11, y1, ucET[0],false);
		      rep.addText(x11, y2, ucET[1],false);
		      break;
		    }
		    case 3 : { 
		      rep.addText(x1, y1, eduTrab[0],false);	
		      rep.addText(x1, y2, eduTrab[1],false);
		      rep.addText(x2, y1, eduTrab[2],false);
		      rep.addText(x11, y1, ucET[0],false);
		      rep.addText(x11, y2, ucET[1],false);
		      rep.addText(x12, y1, ucET[2],false);
		      break;
		    }
		    case 4 : { 
		      rep.addText(x1, y1, eduTrab[0],false);	
		      rep.addText(x1, y2, eduTrab[1],false);
		      rep.addText(x2, y1, eduTrab[2],false);
		      rep.addText(x2, y2, eduTrab[3],false);
		      rep.addText(x11, y1, ucET[0],false);
		      rep.addText(x11, y2, ucET[1],false);
		      rep.addText(x12, y1, ucET[2],false);
		      rep.addText(x12, y2, ucET[3],false);
		      break;
		    }
		}
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),8,'helvetica','normal');	
		//******************************************  N*** FIN GENERACION DEL REPORTE ***********************************************
		rendimiento();
		rep.render();
		rep.printPDF();
	},
	
	resuFinalInicial : function(page,totalAluPag){
		var rf = new ResumenFinalInicial();
	    var jd = json('getEncabezadoPrimaria');
	    var jn = json('getNotaAlumnoRsmFinInicial');
		if(jd.data[19][0]==='SI')
			rf.setDataParteI(0,jd.data[3][0],jd.data[4][0]);
		else
			rf.setDataParteI(1,jd.data[3][0],jd.data[4][0]);
		rf.setDataParteII(jd.data[5][0],jd.data[6][0],jd.data[7][0],jd.data[8][0], 
		jd.data[9][0],jd.data[10][0],jd.data[11][0],jd.data[12][0],jd.data[13][0],jd.data[14][0]);
		var numEstudiantes = jn.data[0].length;
		rf.setDataParteIII(pcbGeneCerCalSeccion.getValue()+' '+pcbGeneCerCalPosicion.getValue(),numEstudiantes + '',totalAluPag[page]+'');
		
		var ced = [];
        var ape =[];
        var nom =[];
        var lugarNac = [];
        var ef = [];
        var sex = [];
        var f1 = [];
        var f2 = [];
        var f3 = [];
        var edadA = [];
        var edadB = [];
        var edadC = [];
        var edadD = [];
        var edadE = [];
        var edadF = [];
        var ingP = [];
        var docenteGuia = jd.data[17][0];
        var ciDodenteGuia = jd.data[18][0];
        var tipoEval = "FINAL";

        for(var c=0; c<totalAluPag[page]; c++ ){
        	ced[c] = jn.data[0][c + page*20]+'';
        	ape[c] = jn.data[1][c + page*20]+'';
        	nom[c] = jn.data[2][c + page*20]+'';
        	lugarNac[c] = jn.data[3][c + page*20]+'';
        	ef[c] = jn.data[4][c + page*20]+'';
        	sex[c] = jn.data[5][c + page*20]+'';
        	f1[c] = jn.data[6][c + page*20]+'';
            f2[c] = jn.data[7][c + page*20]+'';
            f3[c] = jn.data[8][c + page*20]+'';            
            edadA[c] = jn.data[9][c + page*20]+'';
            edadB[c] = jn.data[10][c + page*20]+'';
            edadC[c] = jn.data[11][c + page*20]+'';
            edadD[c] = jn.data[12][c + page*20]+'';
            edadE[c] = jn.data[13][c + page*20]+'';
            edadF[c] = jn.data[14][c + page*20]+'';
			ingP[c] = jn.data[17][c + page*20]+'';
        }
		rf.setDataParteIV(ced,lugarNac,ef,sex,f1,f2,f3,edadA,edadB,edadC,edadD,edadE,edadF,ingP,ape, nom,docenteGuia,ciDodenteGuia,tipoEval);
		if(jd.data[16][0].trim()!=='')
		  rf.setDataParteV(jd.data[16][0]);
		rf.setDataParteVI(jd.data[15][0],jd.data[13][0],jd.data[14][0]);	    
	    rf.createRep();
	},
	
	reporteRsmFinalInicial : function() {		
		var tRec = json('getNotaAlumnoRsmFinInicial').data[0].length;
		  var tPags = 1;
		  var taPag = [0,0,0,0];//alumnos por pagina (4 paginas maximo)
	      if(tRec > 60){ 
		    tPags = 4;
	        taPag[0]=20;
	        taPag[1]=20;
	        taPag[2]=20;
	        taPag[3]=tRec - 60;
	      }  
		  else 
		    if(tRec > 40){ 
		      tPags = 3;
	          taPag[0]=20;
	          taPag[1]=20;
	          taPag[2]=tRec - 40;
	        }
		    else 
		      if(tRec > 20){ 
		        tPags = 2;
	            taPag[0]=20;
	            taPag[1]=tRec - 20;
	          }
	          else
	            taPag[0]=tRec;
		  for(var m=0; m<tPags; m++)
		    this.resuFinalInicial(m,taPag); 
	}	
};
