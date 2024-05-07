var dialogsCargNotCer = {};
var tabsCargNotCertificadas = {};
var editsCargNotCerCi = {};
var editsCargNotCerNombre = {};
var editsCargNotCerApellido = {};
//TAB PLANILLA////////////////////////////////////
var editsCargNotCerPlanEstudio = {};
var pcbCargNotCerCodPlan = {};
var editsCargNotCerMencion = {};
var memoCargNotCerPlanilla = {};
var calendarCargNotCerFeExp = {};
var pcbCargNotCerPlaPromedio = {};
var pcbCargNotCerReverso = {};
var gridsCargNotCerPlanilla = {};
var imgButtonsCargNotCerReverso = {};
var imgButtonsCargNotCerAgregar = {};
var imgButtonsCargNotCerModificar = {};
var imgButtonsCargNotCerEliminar = {};
var imgButtonsCargNotCerBuscar = {};
var imgButtonsCargNotCerReporte = {};
var imgButtonsCargNotCerLimpiar = {};
var imgButtonsCargNotCerSalir = {};
//TAB PLANTEL////////////////////////////////////
var pcbCargNotCerNumPlantel = {};
var pcbCargNotCerPlaInstitucion = {};
var editsCargNotCerPlaLocalidad = {};
var editsCargNotCerPlaEF = {};
var gridsCargNotCerPlaInstitucion = {};
//TAB ASIGNATURA/////////////////////////////////
var pcbCargNotCerNomPlantel = {};
var pcbCargNotCerGrado = {};
var editsCargNotCerGrado = {};
var pcbCargNotCerAsiAsignatura = {};
var pcbCargNotCerNota = {};
var pcbCargNotCerTE = {};
var pcbCargNotCerMes = {};
var pcbCargNotCerIngreso = {};
var editsCargNotCerAsiYear = {};
var editsCargNotCerOrdenAsig = {};
var gridsCargNotCerAsiAsignatura = {};
//TAB ASIGNATURA LITERAL////////////////////////////////////
var pcbCargNotCerAsigLT = {};
var pcbCargNotCerAno = {};
var pcbCargNotCerLiteral = {};
var pcbCargNotCerGrupo = {};
var gridsCargNotCerAsiLT = {};
//TAB ASIGNATURA ET//////////////////////////////
var pcbCargNotGrado = {};
var pcbCargNotCerAsigET = {};
var pcbCargNotCerHoras = {};
var editsCargNotCerOrdenAsigET = {};
var gridsCargNotCerAsiET = {};
var imagesCargNotCerUpdate = {};

//****************** ESTRUCTURAS DE MENU PARA EL DIALOGO *******************
var MenuDlgCargNotCertificadas = {
    idPanelMenu : 0,
	level : 0,
    captions : ['Mantenimiento'],
    functs : [''],
	subMenues : [1],
    icons : [''], 
    enableOption : [true]	
};

var SubMenuCargNotCertificadas = {	
	idPanelMenu : 1,
	level : 1,
    captions : ['Admisión','Plantel','Mención','Transformar Materia','Asignar Grupo Participación'],
    functs : ['exeShow("js/edu/cnt/","Admision")','exeShow("js/edu/cnt/","MantInsProcedencia")','exeShow("js/edu/seg/","Mencion")','exeShow("js/edu/cnt/","TransformarMateria")','exeShow("js/edu/cnt/bas/","AsiGruParticipacion")'],
    subMenues : [0,0,0,0,0],
    icons : ['images/preescolar_basica.png','images/organizacion_1.png','images/mencion_1.png','images/controlpago_1.png','images/rptelisalucur_1.png'], 
    enableOption : [true,true,true,true,true],	
	parentMenu : MenuDlgCargNotCertificadas,
	parentOpc : 0
};

var CargNotCertificadas = {
    windowName : 'CargNotCertificadas',
    isCreate : false,
    idPlanilla : 0,
    idAsignatura : 0,
    idAsignaturaET : 0,
    idAsignaturaLT : 0,
    idPlantel : 0,
    COD_PLAN_EST : 31059,
    
    show: function() {
        if (!this.isCreate) {
			VistapreviaConstancia.show();
			VistapreviaConstancia.close();
            this.init();
            this.isCreate = true;
        }
        if (dialogsCargNotCer.isByClean()) 
            this.limpiar(true);
        
        dialogsCargNotCer.show();
    },
    
    hide: function(){
        dialogsCargNotCer.hide();
    },
    
    createMWs: function(){
        mwCargNotCertificadas = desktop.addMinWindow('Notas Certif.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsCargNotCer.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
	
    dialogsCargNotCer_Init: function() {
		dialogsCargNotCer.setMenu(MenuDlgCargNotCertificadas);
		dialogsCargNotCer.setSubMenu(SubMenuCargNotCertificadas);
		dialogsCargNotCer.setMinimizeXY(0, 0);
        dialogsCargNotCer.setCenterScreen();
        dialogsCargNotCer.addSpace(0, 0, 20);       	
		dialogsCargNotCer.addObject(editsCargNotCerCi,20,57);
		dialogsCargNotCer.addObject(editsCargNotCerNombre,316,57);
		dialogsCargNotCer.addObject(editsCargNotCerApellido,608,57);
		dialogsCargNotCer.addLn(1, 1, 1);
		dialogsCargNotCer.setHeightCell(1,1,42);
        dialogsCargNotCer.addObjToDialog(tabsCargNotCertificadas, 2, 1);
		dialogsCargNotCer.addLn(3, 1, 1);
		dialogsCargNotCer.setHeightCell(3,1,10);
		dialogsCargNotCer.addObjToDialog(imgButtonsCargNotCerAgregar,4,1,24);
        dialogsCargNotCer.addObjToDialog(imgButtonsCargNotCerModificar,4,1,24);
		dialogsCargNotCer.addObjToDialog(imgButtonsCargNotCerEliminar,4,1,24);
		dialogsCargNotCer.addObjToDialog(imgButtonsCargNotCerLimpiar,4,1,24);
		dialogsCargNotCer.addObjToDialog(imgButtonsCargNotCerReporte,4,1,24);
		dialogsCargNotCer.addObjToDialog(imgButtonsCargNotCerBuscar,4,1,24);		
		dialogsCargNotCer.addObjToDialog(imgButtonsCargNotCerSalir,4,1,24);		
		dialogsCargNotCer.adjAllMarginObj(4,1,18);
        dialogsCargNotCer.leftMarginObj(4,1,0,32); 
    },
    
    tabsCargNotCertificadas_Init: function() {
		tabsCargNotCertificadas.selectTab(4);
		tabsCargNotCertificadas.selectTab(3);
    	tabsCargNotCertificadas.selectTab(2);
		tabsCargNotCertificadas.selectTab(1);
		tabsCargNotCertificadas.showPanel(0);
        tabsCargNotCertificadas.setSizeText(12);
        tabsCargNotCertificadas.setFontFamily('Tw Cen MT Condensed Extra Bold');
        tabsCargNotCertificadas.setBorderWidthPanel(0);       	
		///////////////////////////////////PANEL PLANILLAS///////////////////////////////////////////////    
        var c1 = container.create("c1");
        c1.addObject(editsCargNotCerPlanEstudio,20,130);
		c1.addObject(pcbCargNotCerCodPlan, 316,130);
		c1.addObject(imagesCargNotCerUpdate, 563,130);
		c1.addObject(editsCargNotCerMencion, 608,130);
		c1.addObject(calendarCargNotCerFeExp, 20, 154);
		c1.addObject(pcbCargNotCerPlaPromedio, 316, 154);
		c1.addObject(pcbCargNotCerReverso, 55, 484);
		c1.addObject(imgButtonsCargNotCerReverso, 682, 484);
		c1.addObject(gridsCargNotCerPlanilla.getObject(),20,239);	
		c1.addObject(memoCargNotCerPlanilla, 20, 178);
		tabsCargNotCertificadas.addObjToGridPanel(0, c1, 1, 1);		
        editsCargNotCerPlanEstudio.setMaxLength(50);
        editsCargNotCerMencion.setMaxLength(50);		
		///////////////////////////////////PANEL PLANTEL///////////////////////////////////////////////    
        var c11 = container.create("c11");
        c11.addObject(pcbCargNotCerNumPlantel,20,130);
		c11.addObject(pcbCargNotCerPlaInstitucion, 316,130);		
		c11.addObject(editsCargNotCerPlaLocalidad, 20, 154);
		c11.addObject(editsCargNotCerPlaEF, 316, 154);
		c11.addObject(gridsCargNotCerPlaInstitucion.getObject(),20,182);	
		tabsCargNotCertificadas.addObjToGridPanel(1, c11, 1, 1);		
		////////////////////////////////////////PANEL ASIGNATURAS////////////////////////////////////////////    		
		var c2 = container.create("c2");
		c2.addObject(pcbCargNotCerNomPlantel, 20,130);		
		c2.addObject(pcbCargNotCerIngreso, 608, 100);
		c2.addObject(pcbCargNotCerGrado,608,130);
		c2.addObject(editsCargNotCerGrado,761,130);
		c2.addObject(pcbCargNotCerAsiAsignatura, 20, 154);
		c2.addObject(pcbCargNotCerNota, 400, 154);
		c2.addObject(pcbCargNotCerTE, 500,154);
		c2.addObject(pcbCargNotCerMes, 588, 154);
		c2.addObject(editsCargNotCerAsiYear, 686, 154);       		
		c2.addObject(editsCargNotCerOrdenAsig, 777, 154);
		c2.addObject(gridsCargNotCerAsiAsignatura.getObject(),20,182);
        tabsCargNotCertificadas.addObjToGridPanel(2, c2, 1, 1);		
		////////////////////////////////////////PANEL ASIGNATURAS LITERAL//////////////////////////////////////////// 	
		var c3 = container.create("c3");		
		c3.addObject(pcbCargNotCerAsigLT,20,130);
		c3.addObject(pcbCargNotCerAno, 600, 130);
		c3.addObject(pcbCargNotCerLiteral, 746,130);				
		c3.addObject(pcbCargNotCerGrupo, 20, 154);
		c3.addObject(gridsCargNotCerAsiLT.getObject(),20,182);
        tabsCargNotCertificadas.addObjToGridPanel(3, c3, 2, 1);   		
		////////////////////////////////////////PANEL ASIGNATURAS ET//////////////////////////////////////////// 	
		var c31 = container.create("c31");		
		c31.addObject(pcbCargNotGrado,20,130);
	    c31.addObject(pcbCargNotCerAsigET,115,130);
		c31.addObject(pcbCargNotCerHoras,608,130);
		c31.addObject(editsCargNotCerOrdenAsigET,720,130);
		c31.addObject(gridsCargNotCerAsiET.getObject(),20,182);		
        tabsCargNotCertificadas.addObjToGridPanel(4, c31, 2, 1);
    },
	
    gridsCargNotCerPlanilla_Init: function() {
        gridsCargNotCerPlanilla.setFixColRow(false, true);
        gridsCargNotCerPlanilla.addTitleVectorX(['Plan de Estudio','Código del Plan','Mención','observacion','idPlanilla','calcProm']);
        gridsCargNotCerPlanilla.showData();
        gridsCargNotCerPlanilla.setSizeCol(1, 305);
        gridsCargNotCerPlanilla.setSizeCol(2, 200);
        gridsCargNotCerPlanilla.setSizeCol(3, 305);       
        gridsCargNotCerPlanilla.setSizeCol(4, 0);       
        gridsCargNotCerPlanilla.setSizeCol(5, 0);       
        gridsCargNotCerPlanilla.setSizeCol(6, 0);       
        gridsCargNotCerPlanilla.hideCol(4);
        gridsCargNotCerPlanilla.hideCol(5);
        gridsCargNotCerPlanilla.hideCol(6);
    },
	
    gridsCargNotCerPlaInstitucion_Init: function() {
    	gridsCargNotCerPlaInstitucion.setFixColRow(false, true);
    	gridsCargNotCerPlaInstitucion.addTitleVectorX(['Nº Plantel','Nombre Plantel','Localidad','E.F.','idPlantel','idInstitucion']);
    	gridsCargNotCerPlaInstitucion.showData();
    	gridsCargNotCerPlaInstitucion.setSizeCol(1, 80);
    	gridsCargNotCerPlaInstitucion.setSizeCol(2, 440);
    	gridsCargNotCerPlaInstitucion.setSizeCol(3, 250);       
    	gridsCargNotCerPlaInstitucion.setSizeCol(4, 40);       
    	gridsCargNotCerPlaInstitucion.setSizeCol(5, 0);       
    	gridsCargNotCerPlaInstitucion.setSizeCol(6, 0);       
    	gridsCargNotCerPlaInstitucion.hideCol(5);
    	gridsCargNotCerPlaInstitucion.hideCol(6);
    },
        
    gridsCargNotCerAsiAsignatura_Init: function() {
        gridsCargNotCerAsiAsignatura.setFixColRow(false, true);
        gridsCargNotCerAsiAsignatura.addTitleVectorX(['Año/Grado','Asignatura','Nota','T-E', 'Mes','Año','Nº','Orden','idPlantel','idAsig','idPos','Ingreso','deLargaPos']);
        gridsCargNotCerAsiAsignatura.showData();
        gridsCargNotCerAsiAsignatura.setSizeCol(1, 111);
        gridsCargNotCerAsiAsignatura.setSizeCol(2, 415);
        gridsCargNotCerAsiAsignatura.setSizeCol(3, 40);
        gridsCargNotCerAsiAsignatura.setSizeCol(4, 30);
        gridsCargNotCerAsiAsignatura.setSizeCol(5, 30);
        gridsCargNotCerAsiAsignatura.setSizeCol(6, 60);
        gridsCargNotCerAsiAsignatura.setSizeCol(7, 30);
        gridsCargNotCerAsiAsignatura.setSizeCol(8, 40);
        gridsCargNotCerAsiAsignatura.setSizeCol(9, 0);
        gridsCargNotCerAsiAsignatura.setSizeCol(10, 0);
        gridsCargNotCerAsiAsignatura.setSizeCol(11, 0);
        gridsCargNotCerAsiAsignatura.setSizeCol(12, 50);
        gridsCargNotCerAsiAsignatura.setSizeCol(13, 0);
        gridsCargNotCerAsiAsignatura.hideCol(9);
        gridsCargNotCerAsiAsignatura.hideCol(10);
        gridsCargNotCerAsiAsignatura.hideCol(11);
        gridsCargNotCerAsiAsignatura.hideCol(13);
	},
	
	gridsCargNotCerAsiLT_Init: function() {
        gridsCargNotCerAsiLT.setFixColRow(false, true);
        gridsCargNotCerAsiLT.addTitleVectorX(['Año','Asignatura','Grupo','Literal','idAsigLT','Ingreso']);
        gridsCargNotCerAsiLT.showData();
        gridsCargNotCerAsiLT.setSizeCol(1, 80);
        gridsCargNotCerAsiLT.setSizeCol(2, 389);
        gridsCargNotCerAsiLT.setSizeCol(3, 200);
        gridsCargNotCerAsiLT.setSizeCol(4, 90);
        gridsCargNotCerAsiLT.setSizeCol(5, 0);
        gridsCargNotCerAsiLT.setSizeCol(6, 50);
		gridsCargNotCerAsiLT.hideCol(5);        
	},

	gridsCargNotCerAsiET_Init: function() {
        gridsCargNotCerAsiET.setFixColRow(false, true);
        gridsCargNotCerAsiET.addTitleVectorX(['Grado','Asignatura E.T.','Horas','Orden','idAsigET','Ingreso']);
        gridsCargNotCerAsiET.showData();
        gridsCargNotCerAsiET.setSizeCol(1, 50);
        gridsCargNotCerAsiET.setSizeCol(2, 610);
        gridsCargNotCerAsiET.setSizeCol(3, 50);
        gridsCargNotCerAsiET.setSizeCol(4, 50);
        gridsCargNotCerAsiET.setSizeCol(5, 0);
        gridsCargNotCerAsiET.setSizeCol(6, 50);
		gridsCargNotCerAsiET.hideCol(5);        
	},
	
    create: function() {
        dialogsCargNotCer = dialogs.create('dialogsCargNotCer', 0, 0, 856, 517, 'NOTAS CERTIFICADAS');
        dialogsCargNotCer.setAdjY(50);		
		editsCargNotCerCi = edits.create('editsCargNotCerCi', 'editsCargNotCerCi', 'C.i. (*):', 1,95, 'normal');
        editsCargNotCerCi.setFieldFind(true);
        editsCargNotCerCi.setValidInteger();
		editsCargNotCerCi.setSizeEdit(149);
        editsCargNotCerNombre = edits.create('editsCargNotCerNombre', 'editsCargNotCerNombre', 'Nombre (*):', 1,95, 'normal');
        editsCargNotCerNombre.setValidEmpty();
        editsCargNotCerNombre.setFieldFind(true);
		editsCargNotCerNombre.setSizeEdit(149);
        editsCargNotCerApellido = edits.create('editsCargNotCerApellido', 'editsCargNotCerApellido', 'Apellido (*):', 1,77, 'nromal');
        editsCargNotCerApellido.setValidEmpty();
        editsCargNotCerApellido.setFieldFind(true);
		editsCargNotCerApellido.setSizeEdit(149);
        tabsCargNotCertificadas = tabs.create('tabsCargNotCertificadas', 816, 397, ['PLANILLA','PLANTEL', 'ASIGNATURA','ASIGNATURA LITERAL','ASIGNATURA E.T.']);	
        imgButtonsCargNotCerReverso = imgButtons.create('imgButtonsCargNotCerReverso', 'Imprimir Reverso', 'print.png');
		imgButtonsCargNotCerAgregar = imgButtons.create('imgButtonsCargNotCerAgregar', 'Agregar', 'ok.png');
        imgButtonsCargNotCerModificar = imgButtons.create('imgButtonsCargNotCerModificar', 'Modificar.', 'icono_modificar.png');
        imgButtonsCargNotCerModificar.setDisable();
        imgButtonsCargNotCerEliminar = imgButtons.create('imgButtonsCargNotCerEliminar', 'Eliminar.', 'eliminar.png');
        imgButtonsCargNotCerEliminar.setDisable();
        imgButtonsCargNotCerBuscar = imgButtons.create('imgButtonsCargNotCerBuscar', 'Buscar', 'icono_buscar.png');
		imgButtonsCargNotCerReporte = imgButtons.create('imgButtonsCargNotCerRepòrte', 'Imprimir', 'print.png');
        imgButtonsCargNotCerLimpiar = imgButtons.create('imgButtonsCargNotCerLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsCargNotCerSalir = imgButtons.create('imgButtonsCargNotCerSalir', 'Salir', 'salir.png');
        imgButtonsCargNotCerReverso.setDimension(120, 22);
        imgButtonsCargNotCerAgregar.setDimension(90, 22);
        imgButtonsCargNotCerModificar.setDimension(90, 22);
        imgButtonsCargNotCerEliminar.setDimension(90, 22);
        imgButtonsCargNotCerBuscar.setDimension(90, 22);
        imgButtonsCargNotCerLimpiar.setDimension(90, 22);
		imgButtonsCargNotCerReporte.setDimension(90, 22);
		imgButtonsCargNotCerBuscar.setDimension(90, 22);
        imgButtonsCargNotCerSalir.setDimension(90, 22);
		////////////////////////TAB PLANILLA////////////////////////////////////// ////////////////////////////////////////////////////////
        editsCargNotCerPlanEstudio = edits.create('editsCargNotCerPlanEstudio', 'editsCargNotCerPlanEstudio', 'Plan Estudio:', 1,95, 'normal');
        editsCargNotCerPlanEstudio.setValidEmpty();
        pcbCargNotCerCodPlan = powerComboBox.create('pcbCargNotCerCodPlan', 'pcbCargNotCerCodPlan', 'Código Plan:', 2,94);
        pcbCargNotCerCodPlan.setValidEmpty();
        pcbCargNotCerCodPlan.addEmptyOption();
        pcbCargNotCerCodPlan.setWidthCombo(126);
        pcbCargNotCerCodPlan.addOptionAndSimpleValue(null, this.COD_PLAN_EST, this.COD_PLAN_EST);
        pcbCargNotCerCodPlan.setDataType('string');
        editsCargNotCerMencion = edits.create('CargNotCerMencion', 'CargNotCerMencion', 'Mención:', 1,77, 'nromal');
        editsCargNotCerMencion.setValidEmpty();
		memoCargNotCerPlanilla = memo.create('memoCargNotCerPlanilla','Observación:',1,0,94);
		memoCargNotCerPlanilla.setValidEmpty(); 	
		memoCargNotCerPlanilla.vAlignCaption('middle');
		memoCargNotCerPlanilla.setDimension(719, 51);
		calendarCargNotCerFeExp = calendars.create("calendarCargNotCerFeExp");
		calendarCargNotCerFeExp.setValidEmpty();
		calendarCargNotCerFeExp.setCaption('Fecha Exp.:',1,95);
		calendarCargNotCerFeExp.setWidthEditCalendar(127);
		calendarCargNotCerFeExp.sendToFrom(100);
		pcbCargNotCerPlaPromedio = powerComboBox.create('pcbCargNotCerPlaPromedio', 'pcbCargNotCerPlaPromedio', 'Promedio:', 2,94);
		pcbCargNotCerPlaPromedio.setDataType('string');
		pcbCargNotCerPlaPromedio.setValidEmpty();
		pcbCargNotCerPlaPromedio.enableReadOnlyEditor();
		pcbCargNotCerPlaPromedio.addEmptyOption();
		pcbCargNotCerPlaPromedio.setWidthCombo(126);
		pcbCargNotCerReverso = powerComboBox.create('pcbCargNotCerReverso','pcbCargNotCerReverso','Formato:',1,55);
    	pcbCargNotCerReverso.enableReadOnlyEditor();
    	pcbCargNotCerReverso.addEmptyOption();
    	pcbCargNotCerReverso.setValidEmpty();
    	pcbCargNotCerReverso.setWidthCombo(540);
        gridsCargNotCerPlanilla = grids.create('gridsCargNotCerPlanilla', 9, 6);
        ////////////////////////TAB PLANTEL////////////////////////////////////// ////////////////////////////////////////////////////////
        pcbCargNotCerNumPlantel = powerComboBox.create('pcbCargNotCerNumPlantel', 'pcbCargNotCerNumPlantel', 'Nº Plantel:', 2,94);
        pcbCargNotCerNumPlantel.setValidEmpty();
        pcbCargNotCerNumPlantel.enableReadOnlyEditor();
        pcbCargNotCerNumPlantel.addEmptyOption();
		pcbCargNotCerNumPlantel.setWidthCombo(29);
        pcbCargNotCerPlaInstitucion = powerComboBox.create('pcbCargNotCerPlaInstitucion', 'pcbCargNotCerPlaInstitucion', 'Nombre Plantel:', 2,94);
        pcbCargNotCerPlaInstitucion.setValidEmpty();
        pcbCargNotCerPlaInstitucion.enableReadOnlyEditor();
        pcbCargNotCerPlaInstitucion.addEmptyOption();
        pcbCargNotCerPlaInstitucion.setWidthCombo(402);        
        editsCargNotCerPlaLocalidad = edits.create('editsCargNotCerPlaLocalidad','editsCargNotCerPlaLocalidad','Localidad:',1,95,'normal');
        editsCargNotCerPlaLocalidad.readOnly(true);
        editsCargNotCerPlaLocalidad.setValidEmpty();
        editsCargNotCerPlaLocalidad.setSizeEdit(149);	
        editsCargNotCerPlaLocalidad.setMaxLength(50);
        editsCargNotCerPlaEF = edits.create('editsCargNotCerPlaEF','editsCargNotCerPlaEF','E. Federal:',1,95,'normal');
        editsCargNotCerPlaEF.readOnly(true);
        editsCargNotCerPlaEF.setValidEmpty();
        editsCargNotCerPlaEF.setSizeEdit(20);	
        editsCargNotCerPlaEF.setMaxLength(2); 				
        gridsCargNotCerPlaInstitucion = grids.create('gridsCargNotCerPlaInstitucion', 15, 6);        
		///////////////////////////////////////////TAB ASIGNATURA////////////////////////////////////////////////////////        
        pcbCargNotCerNomPlantel = powerComboBox.create('pcbCargNotCerNomPlantel', 'pcbCargNotCerNomPlantel', 'Nombre Plantel:', 2,95);
        pcbCargNotCerNomPlantel.setValidEmpty();
        pcbCargNotCerNomPlantel.enableReadOnlyEditor();
        pcbCargNotCerNomPlantel.addEmptyOption();		
		pcbCargNotCerNomPlantel.setWidthCombo(439);
		pcbCargNotCerGrado = powerComboBox.create('pcbCargNotCerGrado', 'pcbCargNotCerGrado', 'Año/Grado:', 2,77);
		pcbCargNotCerGrado.setValidEmpty();
		pcbCargNotCerGrado.enableReadOnlyEditor();
		pcbCargNotCerGrado.addEmptyOption();		
		pcbCargNotCerGrado.setWidthCombo(53);
		pcbCargNotCerGrado.setFieldFind(true);
		pcbCargNotCerGrado.enableOnChangeToEmptyOption();
		editsCargNotCerGrado = edits.create('editsCargNotCerGrado','editsCargNotCerGrado','',1,0,'normal');
		editsCargNotCerGrado.setValidEmpty();
		editsCargNotCerGrado.setSizeEdit(72);	
		editsCargNotCerGrado.setMaxLength(10);
		pcbCargNotCerAsiAsignatura = powerComboBox.create('pcbCargNotCerAsiAsignatura', 'pcbCargNotCerAsiAsignatura', 'Asignatura:', 2,95);
		pcbCargNotCerAsiAsignatura.setValidEmpty();
		pcbCargNotCerAsiAsignatura.addEmptyOption();		
		pcbCargNotCerAsiAsignatura.setWidthCombo(250);
        editsCargNotCerOrdenAsig = edits.create('editsCargNotCerOrdenAsig','editsCargNotCerOrdenAsig','Orden:',1,42,'normal');
        editsCargNotCerOrdenAsig.setValidInteger();
        editsCargNotCerOrdenAsig.setSizeEdit(15);	
        editsCargNotCerOrdenAsig.setMaxLength(2); 				
        pcbCargNotCerNota = powerComboBox.create('pcbCargNotCerNota', 'pcbCargNotCerNota', 'Nota:', 2,35);
        pcbCargNotCerNota.enableReadOnlyEditor();
        pcbCargNotCerNota.setWidthCombo(32);
        pcbCargNotCerNota.setValidEmpty();
        pcbCargNotCerNota.addEmptyOption();
        pcbCargNotCerTE = powerComboBox.create('pcbCargNotCerTE', 'pcbCargNotCerTE', 'T-E:', 2,25);
		pcbCargNotCerTE.setWidthCombo(29);
        pcbCargNotCerTE.setValidEmpty();
        pcbCargNotCerTE.enableReadOnlyEditor();
        pcbCargNotCerTE.addEmptyOption();
        pcbCargNotCerTE.setDataType('string');
		pcbCargNotCerMes = powerComboBox.create('pcbCargNotCerMes', 'pcbCargNotCerMes', 'Mes:', 2,29);
        pcbCargNotCerMes.setValidEmpty();
        pcbCargNotCerMes.enableReadOnlyEditor();
        pcbCargNotCerMes.addEmptyOption();
		pcbCargNotCerMes.setWidthCombo(32);
		pcbCargNotCerMes.setDataType('string');
		pcbCargNotCerIngreso = powerComboBox.create('pcbCargNotCerIngreso', 'pcbCargNotCerIngreso', 'Ingreso (*):', 2,77);
		pcbCargNotCerIngreso.setValidEmpty();
		pcbCargNotCerIngreso.enableReadOnlyEditor();
		pcbCargNotCerIngreso.addEmptyOption();
		pcbCargNotCerIngreso.setWidthCombo(53);
		pcbCargNotCerIngreso.setDataType('string');
		pcbCargNotCerIngreso.setFieldFind(true);
		pcbCargNotCerIngreso.enableOnChangeToEmptyOption();
		editsCargNotCerAsiYear = edits.create('editsCargNotCerAsiYear','editsCargNotCerAsiYear','Año:',1,29,'normal');
        editsCargNotCerAsiYear.setValidInteger();
        editsCargNotCerAsiYear.setMaxLength(4); 	
		gridsCargNotCerAsiAsignatura = grids.create('gridsCargNotCerAsiAsignatura', 15, 13);		
		////////////////////////TAB ASIGNATURA LITERAL////////////////////////////////////// ////////////////////////////////////////////////////////
        pcbCargNotCerAsigLT = powerComboBox.create('pcbCargNotCerAsigLT', 'pcbCargNotCerAsigLT', 'Asignatura:', 2,70);
        pcbCargNotCerAsigLT.setValidEmpty();
        pcbCargNotCerAsigLT.addEmptyOption();
		pcbCargNotCerAsigLT.setWidthCombo(446);		
        pcbCargNotCerAno = powerComboBox.create('pcbCargNotCerAno', 'pcbCargNotCerAno', 'Año:', 2,30);
        pcbCargNotCerAno.setValidEmpty();
        pcbCargNotCerAno.enableReadOnlyEditor();
        pcbCargNotCerAno.addEmptyOption();
		pcbCargNotCerAno.setWidthCombo(53);        		
        pcbCargNotCerLiteral = powerComboBox.create('pcbCargNotCerLiteral', 'pcbCargNotCerLiteral', 'Literal:', 2,42);
        pcbCargNotCerLiteral.setValidEmpty();
        pcbCargNotCerLiteral.enableReadOnlyEditor();
        pcbCargNotCerLiteral.addEmptyOption();
		pcbCargNotCerLiteral.setWidthCombo(22);   		
		pcbCargNotCerGrupo = powerComboBox.create('pcbCargNotCerGrupo', 'pcbCargNotCerGrupo', 'Grupo:', 2,70);
		pcbCargNotCerGrupo.setValidEmpty();
		pcbCargNotCerGrupo.addEmptyOption();
		pcbCargNotCerGrupo.setWidthCombo(446);		
		pcbCargNotCerGrupo.addOptionAndSimpleValue(null, 'EXONERADA', 'EXONERADA');
        gridsCargNotCerAsiLT = grids.create('gridsCargNotCerAsiLT', 15, 6);        		
		////////////////////////////////TAB ASIGNATURA ET////////////////////////////////////// //////////////////////////		
		pcbCargNotGrado = powerComboBox.create('pcbCargNotGrado', 'pcbCargNotGrado', 'Grado:', 2,40);
        pcbCargNotGrado.setValidEmpty();
        pcbCargNotGrado.addEmptyOption();
        pcbCargNotGrado.enableReadOnlyEditor();
		pcbCargNotGrado.setWidthCombo(20);
		pcbCargNotCerAsigET = powerComboBox.create('pcbCargNotCerAsigET', 'pcbCargNotCerAsigET', 'Asignatura E.T:', 2,95);
		pcbCargNotCerAsigET.setValidEmpty();
		pcbCargNotCerAsigET.addEmptyOption();		
		pcbCargNotCerAsigET.setWidthCombo(328);
        editsCargNotCerOrdenAsigET = edits.create('editsCargNotCerOrdenAsigET','editsCargNotCerOrdenAsigET','Orden:',1,42,'normal');
        editsCargNotCerOrdenAsigET.setValidInteger();
        editsCargNotCerOrdenAsigET.setSizeEdit(15);	
        editsCargNotCerOrdenAsigET.setMaxLength(2); 				
		pcbCargNotCerHoras = powerComboBox.create('pcbCargNotCerHoras', 'pcbCargNotCerHoras', 'Horas:', 1,42);
        pcbCargNotCerHoras.setValidEmpty();
        pcbCargNotCerHoras.addEmptyOption();
        pcbCargNotCerHoras.enableReadOnlyEditor();
        pcbCargNotCerHoras.setWidthCombo(32);
        pcbCargNotCerHoras.setDataType('string');
        gridsCargNotCerAsiET = grids.create('gridsCargNotCerAsiET', 15, 6);		
        editsCargNotCerPlanEstudio.setSizeEdit(149);
        editsCargNotCerMencion.setSizeEdit(149);
        editsCargNotCerMencion.setMaxLength(50);
		editsCargNotCerAsiYear.setSizeEdit(45);
		imagesCargNotCerUpdate = images.create('imagesCargNotCerUpdate','imagesCargNotCerUpdate','images/relojCreCurso_1.png');
		imagesCargNotCerUpdate.setSize(17,17);
		hint.create();
		hint.addToHintWithPos(imagesCargNotCerUpdate,"ACTUALIZAR NOTAS",dialogsCargNotCer.x1+564,dialogsCargNotCer.y1+115);
		xFunct = function(){
		  hint.setPosition(imagesCargNotCerUpdate, dialogsCargNotCer.x1+564, dialogsCargNotCer.y1+115);
		};
		hint.onMouseOver('xFunct()');
		
        for (var pto = 1; pto <= 5; pto++)
        	pcbCargNotCerNumPlantel.addOptionAndSimpleValue(null, pto, pto);
        
        for (var pto = 1; pto <= 12; pto++) {
        	pcbCargNotCerMes.addOptionAndSimpleValue(null, (pto<10)? '0'+pto : pto, pto);
    		pcbCargNotCerHoras.addOptionAndSimpleValue(null, (pto<10)? '0'+pto : pto, pto);
        }
        pcbCargNotCerMes.setSizeHeight(220);
        pcbCargNotCerHoras.setSizeHeight(220);

        
        for (var pto = 1; pto <= 9; pto++) 
        	pcbCargNotGrado.addOptionAndSimpleValue(null, pto, pto);
        
        for (var pto = 10; pto <= 20; pto++)
        	pcbCargNotCerNota.addOptionAndSimpleValue(null, pto, pto);
        
    	pcbCargNotCerNota.addOptionAndSimpleValue(null, 'P', 0);
    	pcbCargNotCerNota.addOptionAndSimpleValue(null, 'C', -5);
    	pcbCargNotCerNota.addOptionAndSimpleValue(null, 'AP', -10);
    	pcbCargNotCerNota.addOptionAndSimpleValue(null, 'R', -12);
    	pcbCargNotCerNota.addOptionAndSimpleValue(null, 'EX', -13);
    	pcbCargNotCerNota.addOptionAndSimpleValue(null, 'T', -14);
    	pcbCargNotCerNota.addOptionAndSimpleValue(null, 'Q', -15);
    	pcbCargNotCerNota.addOptionAndSimpleValue(null, 'F', -16);
    	pcbCargNotCerNota.addOptionAndSimpleValue(null, 'E', -17);
    	pcbCargNotCerNota.setSizeHeight(350);
    	
    	pcbCargNotCerPlaPromedio.addOptionAndSimpleValue(null, 'Calculo x Planilla', 'P');
    	pcbCargNotCerPlaPromedio.addOptionAndSimpleValue(null, 'Calculo Global', 'G');
    	
    	pcbCargNotCerIngreso.addOptionAndSimpleValue(null, 'MANUAL', 'MANUAL');
    	pcbCargNotCerIngreso.addOptionAndSimpleValue(null, 'EDUCA', 'EDUCA');
    },
	
    init: function() {
        this.create();
        this.setEvents();
        this.dialogsCargNotCer_Init();
        this.gridsCargNotCerPlanilla_Init();
        this.gridsCargNotCerPlaInstitucion_Init();
		this.gridsCargNotCerAsiAsignatura_Init();
		this.gridsCargNotCerAsiLT_Init();
		this.gridsCargNotCerAsiET_Init();
        this.tabsCargNotCertificadas_Init();
        this.createMWs();
    },

    reloadNota: function() {
    	var rlx = xmlStructs.createRecordList("rlx");
    	
		rlx.addInt('reg', 1);
		rlx.addInt('reg', editsCargNotCerCi.hideId);
		rlx.addInt('reg', editsCargNotCerCi.hideId);
        Tool.cnnSrv('MantObject', 'setUpdateNota', 'Alert.show("SELECCIONE EL PLAN DE ESTUDIO Y LUEGO ASIGNATURA", "SISTEMA", Alert.TYPE_INFO)', rlx);
    },
    
    setEvents: function() {
		imagesCargNotCerUpdate.onClick(this.windowName + ".reloadNota()");
        editsCargNotCerCi.onEnter(this.windowName + ".buscar()");
		editsCargNotCerNombre.onEnter(this.windowName + ".buscar()");
		editsCargNotCerApellido.onEnter(this.windowName + ".buscar()");
		editsCargNotCerCi.onChange(this.windowName + ".limpiarFind(1)");
		editsCargNotCerNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsCargNotCerApellido.onChange(this.windowName + ".limpiarFind(3)");
		editsCargNotCerCi.onClick(this.windowName + ".limpiarFind(1)");
		editsCargNotCerNombre.onClick(this.windowName + ".limpiarFind(2)");
		editsCargNotCerApellido.onClick(this.windowName + ".limpiarFind(3)");
		tabsCargNotCertificadas.addEventOnTabSelect(1, this.windowName + ".rstStsBtn()");
		tabsCargNotCertificadas.addEventOnTabSelect(2, this.windowName + ".rstStsBtn()");
		tabsCargNotCertificadas.addEventOnTabSelect(3, this.windowName + ".rstStsBtn()");
		pcbCargNotCerPlaInstitucion.onChange(this.windowName + ".setDataPlantel()");
		pcbCargNotCerGrado.onChange(this.windowName + ".getAsignatura()");
		pcbCargNotCerIngreso.onChange(this.windowName + ".getAsignatura()");
		pcbCargNotCerNota.onChange(this.windowName + ".autoCoreUpdate()");
		editsCargNotCerAsiYear.onEnter(this.windowName + ".coreUpdate('agregar')");
		gridsCargNotCerPlanilla.onClickCells(this.windowName + ".setData()");
		gridsCargNotCerPlaInstitucion.onClickCells(this.windowName + ".setData()");
		gridsCargNotCerAsiAsignatura.onClickCells(this.windowName + ".setData()");
		gridsCargNotCerAsiET.onClickCells(this.windowName + ".setData()");
		gridsCargNotCerAsiLT.onClickCells(this.windowName + ".setData()");
    	imgButtonsCargNotCerReverso.onClick(this.windowName + ".coreUpdateReverso()");
        imgButtonsCargNotCerAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
        imgButtonsCargNotCerModificar.onClick(this.windowName + ".coreUpdate('modificar')");
        imgButtonsCargNotCerEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
        imgButtonsCargNotCerLimpiar.onClick(this.windowName + ".limpiar(true)");
		imgButtonsCargNotCerReporte.onClick(this.windowName + ".reporte()");
        imgButtonsCargNotCerBuscar.onClick(this.windowName + ".buscar()");
        imgButtonsCargNotCerSalir.onClick("dialogsCargNotCer.close();");
    },

    setDataPlantel: function () {
    	editsCargNotCerPlaLocalidad.setValue(pcbCargNotCerPlaInstitucion.setModeReturnGetText(7).getText());
    	editsCargNotCerPlaEF.setValue(pcbCargNotCerPlaInstitucion.setModeReturnGetText(6).getText());
    },
    
    getAsignatura: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		imgButtonsCargNotCerEliminar.setEnable();
		rlx.addInt('reg', this.idPlanilla);
		rlx.add('reg', pcbCargNotCerGrado.setModeReturnGetText(0));
		rlx.add('reg', pcbCargNotCerGrado.setModeReturnGetText(0));
		rlx.add('reg', pcbCargNotCerIngreso);
		rlx.add('reg', pcbCargNotCerIngreso);
    	Tool.cnnSrv('MantObject', 'getCargaNotaCertAsigPosicion', this.windowName + '.loadAsignatura()', rlx);
    },
    
    loadAsignatura: function() {
    	Tool.loadGridData(dialogsCargNotCer, gridsCargNotCerAsiAsignatura, false, json('getCargaNotaCertAsignatura'));
    	editsCargNotCerGrado.setValue(pcbCargNotCerGrado.setModeReturnGetText(3).getText());
    	Tool.loadPowerComboData(dialogsCargNotCer, pcbCargNotCerAsiAsignatura, 0, 0, json('getCargaNotaCertAsigPosicion'));
    	pcbCargNotCerAsiAsignatura.addOptionAndSimpleValue(null, 'EDUCACION PARA EL TRABAJO', 'EDUCACION PARA EL TRABAJO');
    	pcbCargNotCerAsiAsignatura.setSizeHeight(300);
  		imgButtonsCargNotCerAgregar.setEnable();
		imgButtonsCargNotCerModificar.setDisable();
		if (pcbCargNotCerIngreso.getOption() == '') {
			imgButtonsCargNotCerEliminar.setDisable();
		} 
    	this.incremOrden();
    },
    
    rstStsBtn: function() {
		imgButtonsCargNotCerAgregar.setEnable();
		imgButtonsCargNotCerModificar.setDisable();
		imgButtonsCargNotCerEliminar.setDisable();
    },
    
   	buscar: function() {
    	if (editsCargNotCerCi.getValue() != '' && editsCargNotCerNombre.getValue() != '' && editsCargNotCerApellido.getValue() != '') {
        	this.setVisibleTab(0);
    		gridsCargNotCerPlanilla.clean();
    		Tool.getGridData('MantObject', 'getCargaNotaCertPlanilla', dialogsCargNotCer, gridsCargNotCerPlanilla, false, new MiniDataSet(editsCargNotCerCi.hideId, 'int', false));
		}
		else if (editsCargNotCerCi.getValue() != '' || editsCargNotCerNombre.getValue() != '' || editsCargNotCerApellido.getValue() != '') {
        	ResuBusqueda.setObjectExtFnc(editsCargNotCerCi, editsCargNotCerNombre, editsCargNotCerApellido, 'CargNotCertificadas.buscar()');
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsCargNotCerCi, editsCargNotCerCi, editsCargNotCerNombre, editsCargNotCerNombre, editsCargNotCerApellido, editsCargNotCerApellido);
		}
		else {
			Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},

    limpiarFind: function(ix) {
  		switch (ix) {
		case 1: 
			editsCargNotCerNombre.setValue("");
			editsCargNotCerApellido.setValue("");  		
			break;
		case 2: 
			editsCargNotCerCi.setValue("");
			editsCargNotCerApellido.setValue("");  		
			break;
		default:
			editsCargNotCerCi.setValue("");
		    editsCargNotCerNombre.setValue("");
			break;
		} 
    	this.setVisibleTab(0);
    	this.limpiar(false);    	
  	},
    
	setVisibleTab: function(id) {
		switch (id) {
			case 1:
				tabsCargNotCertificadas.showTab(1);
				tabsCargNotCertificadas.showTab(2);
				if (this.COD_PLAN_EST == gridsCargNotCerPlanilla.getDataCell(2)) {
					tabsCargNotCertificadas.hideTab(4);
					tabsCargNotCertificadas.showTab(3);
				}
				else {
					tabsCargNotCertificadas.hideTab(3);
					tabsCargNotCertificadas.showTab(4);
				}
				break;
			default:				
				tabsCargNotCertificadas.showPanel(0);
				tabsCargNotCertificadas.hideTab(1);
				tabsCargNotCertificadas.hideTab(2);
				tabsCargNotCertificadas.hideTab(3);
				tabsCargNotCertificadas.hideTab(4);
				break;
		}
	},
  	
	limpiar: function(action) {
		dialogsCargNotCer.setMsg("");
		if (tabsCargNotCertificadas.getActualTab() == 0 || tabsCargNotCertificadas.getActualTab() == 1) {
			pcbCargNotCerNumPlantel.setSelectedIndex(0);
			pcbCargNotCerPlaInstitucion.setSelectedIndex(0);
			editsCargNotCerPlaLocalidad.clear();
			editsCargNotCerPlaEF.clear();
			gridsCargNotCerPlaInstitucion.clean();
		}
		if (tabsCargNotCertificadas.getActualTab() == 0 || tabsCargNotCertificadas.getActualTab() == 2) {
			pcbCargNotCerNomPlantel.setSelectedIndex(0);
			pcbCargNotCerGrado.setSelectedIndex(0);
			editsCargNotCerGrado.clear();
			pcbCargNotCerAsiAsignatura.setSelectedIndex(0);
			pcbCargNotCerNota.setSelectedIndex(0);
			pcbCargNotCerTE.setSelectedIndex(0);
			pcbCargNotCerMes.setSelectedIndex(0);
			pcbCargNotCerIngreso.setSelectedIndex(0);
			editsCargNotCerAsiYear.clear();
			editsCargNotCerOrdenAsig.clear();
			gridsCargNotCerAsiAsignatura.clean();
		}
		if (tabsCargNotCertificadas.getActualTab() == 0 || tabsCargNotCertificadas.getActualTab() == 3) {
			pcbCargNotCerAsigLT.setSelectedIndex(0);
			pcbCargNotCerLiteral.setSelectedIndex(0);
			pcbCargNotCerGrupo.clear();
			pcbCargNotCerGrupo.addOptionAndSimpleValue(null, 'EXONERADA', 'EXONERADA');
			gridsCargNotCerAsiLT.clean();
		}
		if (tabsCargNotCertificadas.getActualTab() == 0 || tabsCargNotCertificadas.getActualTab() == 4) {
			pcbCargNotGrado.setSelectedIndex(0);
			pcbCargNotCerHoras.setSelectedIndex(0);
			pcbCargNotCerAsigET.setSelectedIndex(0);
			gridsCargNotCerAsiET.clean();
		}
		if (tabsCargNotCertificadas.getActualTab() == 0) {
			this.setVisibleTab(0);
			editsCargNotCerCi.hideId = -1;
			if (action) {
				editsCargNotCerCi.clear();
				editsCargNotCerNombre.clear();
				editsCargNotCerApellido.clear();
				Tool.rstPwrCmb(pcbCargNotCerNomPlantel);
				Tool.rstPwrCmb(pcbCargNotCerGrado);
				Tool.rstPwrCmb(pcbCargNotCerTE);
			}
			else {
				pcbCargNotCerNomPlantel.setSelectedIndex(0);
				pcbCargNotCerGrado.setSelectedIndex(0);
				editsCargNotCerGrado.clear();
				pcbCargNotCerTE.setSelectedIndex(0);
			}
			editsCargNotCerPlanEstudio.clear();
			pcbCargNotCerCodPlan.setSelectedIndex(0);
			editsCargNotCerMencion.clear();
			memoCargNotCerPlanilla.setText('');
			pcbCargNotCerPlaPromedio.setSelectedIndex(0);
			gridsCargNotCerPlanilla.clean();
			if (action) Tool.cnnSrv('MantObject', 'getCargaNotaCertInit', this.windowName + '.loadDataInit()');
		}
		imgButtonsCargNotCerAgregar.setEnable();
		imgButtonsCargNotCerModificar.setDisable();
		imgButtonsCargNotCerEliminar.setDisable();
		imgButtonsCargNotCerReporte.setDisable();
		calendarCargNotCerFeExp.setFechaToEdit(Tool.getDate());
	},
    
    loadDataInit: function() {
    	Tool.loadPowerComboData(dialogsCargNotCer, pcbCargNotCerPlaInstitucion, -1, 0, json('getMantInsProcedencia'));
    	Tool.loadPowerComboData(dialogsCargNotCer, pcbCargNotCerGrado, -1, 4, json('getPosicionNotaCert'));
    	Tool.loadPowerComboData(dialogsCargNotCer, pcbCargNotCerTE, 0, 1, json('getTipoEvaluacion'));
    	pcbCargNotCerTE.setSizeHeight(220);
    	Tool.loadPowerComboData(dialogsCargNotCer, pcbCargNotCerAsigET, 0, 0, json('getMateriaET'));
    	Tool.loadPowerComboData(dialogsCargNotCer, pcbCargNotCerAsigLT, 0, 0, json('getMateriaLiteral'));
    	Tool.loadPowerComboData(dialogsCargNotCer, pcbCargNotCerAno, 2, 2, json('getPosicionNotaCert'));
    	Tool.loadPowerComboData(dialogsCargNotCer, pcbCargNotCerLiteral, 0, 0, json('getLiteral'));
    	pcbCargNotCerLiteral.addOptionAndSimpleValue(null, '*', '*');    	
    	pcbCargNotCerLiteral.addOptionAndSimpleValue(null, '**', '**');    	
    	pcbCargNotCerLiteral.addOptionAndSimpleValue(null, '***', '***');    	
    	pcbCargNotCerLiteral.addOptionAndSimpleValue(null, 'EXONERADA', 'EXONERADA');    	
    	pcbCargNotCerLiteral.addOptionAndSimpleValue(null, 'EX', 'EX'); 
        Tool.getPowerComboDataFnc('pcbCargNotCerReverso.setSelectedIndex(1)', 'ReportObject', 'getPlantillaConstancia', dialogsCargNotCer, pcbCargNotCerReverso, -1, 1, new MiniDataSet('8', 'str', false));        		
  	},

   	setData: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (tabsCargNotCertificadas.getActualTab() == 0) {
			if (gridsCargNotCerPlanilla.getDataCell(1) != "") {
				this.setVisibleTab(1);
				editsCargNotCerPlanEstudio.setValue(gridsCargNotCerPlanilla.getDataCell(1));
				pcbCargNotCerCodPlan.clear();
				pcbCargNotCerCodPlan.addOptionAndSimpleValue(null, this.COD_PLAN_EST, this.COD_PLAN_EST);
				if (this.COD_PLAN_EST != gridsCargNotCerPlanilla.getDataCell(2))
					pcbCargNotCerCodPlan.addOptionAndSimpleValue(null, gridsCargNotCerPlanilla.getDataCell(2), gridsCargNotCerPlanilla.getDataCell(2));
				pcbCargNotCerCodPlan.setSelectedOption(gridsCargNotCerPlanilla.getDataCell(2));
				editsCargNotCerMencion.setValue(gridsCargNotCerPlanilla.getDataCell(3));
				memoCargNotCerPlanilla.setText(gridsCargNotCerPlanilla.getDataCell(4));
				pcbCargNotCerPlaPromedio.setSelectedIndex(0);
				if (gridsCargNotCerPlanilla.getDataCell(6) != "-1")
					pcbCargNotCerPlaPromedio.findOption(gridsCargNotCerPlanilla.getDataCell(6));
				this.idPlanilla = gridsCargNotCerPlanilla.getDataCell(5);

				pcbCargNotCerNumPlantel.setSelectedIndex(0);
				pcbCargNotCerPlaInstitucion.setSelectedIndex(0);
				editsCargNotCerPlaLocalidad.clear();
				editsCargNotCerPlaEF.clear();
				gridsCargNotCerPlaInstitucion.clean();
				
				pcbCargNotCerNomPlantel.setSelectedIndex(0);
				pcbCargNotCerGrado.setSelectedIndex(0);
				editsCargNotCerGrado.clear();
				pcbCargNotCerAsiAsignatura.setSelectedIndex(0);
				pcbCargNotCerNota.setSelectedIndex(0);
				pcbCargNotCerTE.setSelectedIndex(0);
				pcbCargNotCerMes.setSelectedIndex(0);
				pcbCargNotCerIngreso.setSelectedIndex(0);
				editsCargNotCerAsiYear.clear();
				editsCargNotCerOrdenAsig.clear();
				gridsCargNotCerAsiAsignatura.clean();

				pcbCargNotGrado.setSelectedIndex(0);
				pcbCargNotCerAsigET.setSelectedIndex(0);
				pcbCargNotCerHoras.setSelectedIndex(0);
				editsCargNotCerOrdenAsigET.clear();
				gridsCargNotCerAsiET.clean();

				rlx.addInt('reg', this.idPlanilla);
				rlx.add('reg', pcbCargNotCerGrado.setModeReturnGetText(0));
				rlx.add('reg', pcbCargNotCerGrado.setModeReturnGetText(0));
				rlx.addInt('reg', editsCargNotCerCi.hideId);
				rlx.addStr('reg', pcbCargNotCerCodPlan.getOption());
				rlx.add('reg', pcbCargNotCerIngreso);
				rlx.add('reg', pcbCargNotCerIngreso);
		        Tool.cnnSrv('MantObject', 'getCargaNotaCertAsigPlanilla', this.windowName + '.loadDataTab()', rlx);
			}
		}
		else if (tabsCargNotCertificadas.getActualTab() == 1) {
			if (gridsCargNotCerPlaInstitucion.getDataCell(1) != "") {
		        pcbCargNotCerNumPlantel.findOption(gridsCargNotCerPlaInstitucion.getDataCell(1));
				pcbCargNotCerPlaInstitucion.setSelectedOption(gridsCargNotCerPlaInstitucion.getDataCell(2));
				editsCargNotCerPlaLocalidad.setValue(gridsCargNotCerPlaInstitucion.getDataCell(3));
				editsCargNotCerPlaEF.setValue(gridsCargNotCerPlaInstitucion.getDataCell(4));
		        this.idPlantel = gridsCargNotCerPlaInstitucion.getDataCell(5);
			}
		}
		else if (tabsCargNotCertificadas.getActualTab() == 2) {
			if (gridsCargNotCerAsiAsignatura.getDataCell(1) != "") {
				pcbCargNotCerIngreso.setSelectedIndex(0);
		        pcbCargNotCerNomPlantel.findOption(gridsCargNotCerAsiAsignatura.getDataCell(9));
				pcbCargNotCerGrado.findOption(gridsCargNotCerAsiAsignatura.getDataCell(11));
				editsCargNotCerGrado.setValue(gridsCargNotCerAsiAsignatura.getDataCell(13));
				pcbCargNotCerAsiAsignatura.setSelectedIndex(0);
				pcbCargNotCerAsiAsignatura.setSelectedOption(gridsCargNotCerAsiAsignatura.getDataCell(2));
				pcbCargNotCerNota.setSelectedOption(gridsCargNotCerAsiAsignatura.getDataCell(3));
		        pcbCargNotCerTE.findOption(gridsCargNotCerAsiAsignatura.getDataCell(4));
		        pcbCargNotCerMes.findOption(gridsCargNotCerAsiAsignatura.getDataCell(5));
		        editsCargNotCerAsiYear.setValue(gridsCargNotCerAsiAsignatura.getDataCell(6));
		        editsCargNotCerOrdenAsig.setValue(gridsCargNotCerAsiAsignatura.getDataCell(8));
		        this.idAsignatura = gridsCargNotCerAsiAsignatura.getDataCell(10);
	
				rlx.addInt('reg', this.idPlanilla);
				rlx.add('reg', pcbCargNotCerGrado.setModeReturnGetText(0));
				rlx.add('reg', pcbCargNotCerGrado.setModeReturnGetText(0));
				rlx.add('reg', pcbCargNotCerIngreso);
				rlx.add('reg', pcbCargNotCerIngreso);
		    	Tool.cnnSrv('MantObject', 'getCargaNotaCertAsigPosicion', this.windowName + '.loadAsignaturaGrid()', rlx);
			}
		}
		else if (tabsCargNotCertificadas.getActualTab() == 3) {
			pcbCargNotCerAsigLT.setSelectedIndex(0);
			pcbCargNotCerAsigLT.setSelectedOption(gridsCargNotCerAsiLT.getDataCell(2));
	        if (pcbCargNotCerAsigLT.getOption() == "") {
	        	pcbCargNotCerAsigLT.addOptionAndSimpleValue(null, gridsCargNotCerAsiLT.getDataCell(2), gridsCargNotCerAsiLT.getDataCell(2));
	        	pcbCargNotCerAsigLT.setSelectedOption(gridsCargNotCerAsiLT.getDataCell(2));
	        }
			pcbCargNotCerAno.findOption(gridsCargNotCerAsiLT.getDataCell(1));
			pcbCargNotCerLiteral.findOption(gridsCargNotCerAsiLT.getDataCell(4));
			pcbCargNotCerGrupo.setSelectedIndex(0);
			pcbCargNotCerGrupo.setSelectedOption(gridsCargNotCerAsiLT.getDataCell(3));
	        if (pcbCargNotCerGrupo.getOption() == "") {
	        	pcbCargNotCerGrupo.addOptionAndSimpleValue(null, gridsCargNotCerAsiLT.getDataCell(3), gridsCargNotCerAsiLT.getDataCell(3));
	        	pcbCargNotCerGrupo.setSelectedOption(gridsCargNotCerAsiLT.getDataCell(3));
	        }
			this.idAsignaturaLT = gridsCargNotCerAsiLT.getDataCell(5);
		}
		else {
			if (gridsCargNotCerAsiET.getDataCell(1) != "") {
		        pcbCargNotGrado.findOption(gridsCargNotCerAsiET.getDataCell(1));
		        pcbCargNotCerAsigET.setSelectedIndex(0);
		        pcbCargNotCerAsigET.setSelectedOption(gridsCargNotCerAsiET.getDataCell(2));
		        if (pcbCargNotCerAsigET.getOption() == "") {
		        	pcbCargNotCerAsigET.addOptionAndSimpleValue(null, gridsCargNotCerAsiET.getDataCell(2), gridsCargNotCerAsiET.getDataCell(2));
		        	pcbCargNotCerAsigET.setSelectedOption(gridsCargNotCerAsiET.getDataCell(2));
		        }
		        pcbCargNotCerHoras.findOption(gridsCargNotCerAsiET.getDataCell(3));
		        editsCargNotCerOrdenAsigET.setValue(gridsCargNotCerAsiET.getDataCell(4));
		        this.idAsignaturaET = gridsCargNotCerAsiET.getDataCell(5);
			}
		}
		imgButtonsCargNotCerAgregar.setDisable();
		imgButtonsCargNotCerModificar.setEnable();
		imgButtonsCargNotCerEliminar.setEnable();
	},

	loadAsignaturaGrid: function() {
		Tool.loadPowerComboData(dialogsCargNotCer, pcbCargNotCerAsiAsignatura, 0, 0, json('getCargaNotaCertAsigPosicion'));
    	pcbCargNotCerAsiAsignatura.addOptionAndSimpleValue(null, 'EDUCACION PARA EL TRABAJO', 'EDUCACION PARA EL TRABAJO');
    	pcbCargNotCerAsiAsignatura.setSizeHeight(300);
		if (pcbCargNotCerAsiAsignatura.getOption() == "") {
        	pcbCargNotCerAsiAsignatura.addOptionAndSimpleValue(null, gridsCargNotCerAsiAsignatura.getDataCell(2), gridsCargNotCerAsiAsignatura.getDataCell(2));
        	pcbCargNotCerAsiAsignatura.setSelectedOption(gridsCargNotCerAsiAsignatura.getDataCell(2));
        }
		pcbCargNotCerAsiAsignatura.setSizeHeight(300);
	},

	loadDataTab: function() {
		imgButtonsCargNotCerReporte.setEnable();
    	if (json('getCargaNotaCertPlantel').data[0].length > 0) {
    		Tool.loadPowerComboData(dialogsCargNotCer, pcbCargNotCerNomPlantel, 4, 1, json('getCargaNotaCertPlantel'));
    		Tool.loadGridData(dialogsCargNotCer, gridsCargNotCerPlaInstitucion, false, json('getCargaNotaCertPlantel'));
    	}
    	if (json('getCargaNotaCertAsignatura').data[0].length > 0)
    		Tool.loadGridData(dialogsCargNotCer, gridsCargNotCerAsiAsignatura, false, json('getCargaNotaCertAsignatura'));
    	if (json('getCargaNotaCertAsigET').data[0].length > 0)
    		Tool.loadGridData(dialogsCargNotCer, gridsCargNotCerAsiET, false, json('getCargaNotaCertAsigET'));
    	if (json('getCargaNotaCertAsigLT').data[0].length > 0)
    		Tool.loadGridData(dialogsCargNotCer, gridsCargNotCerAsiLT, false, json('getCargaNotaCertAsigLT'));
    	this.incremOrden();
    	this.incremOrdenET();
    },
  	
  	incremOrden: function() {
  		var num = json('getCargaNotaCertAsignatura').data[0].length + 1;
  		editsCargNotCerOrdenAsig.setValue((num<10)? '0'+num : num);
  	},
  	
  	incremOrdenET: function() {
  		var num = json('getCargaNotaCertAsigET').data[0].length + 1
  		editsCargNotCerOrdenAsigET.setValue((num<10)? '0'+num : num);
  	},

  	limpiarCoreUpdate: function(methodName) {
  		imgButtonsCargNotCerAgregar.setEnable();
		imgButtonsCargNotCerModificar.setDisable();
		imgButtonsCargNotCerEliminar.setDisable();

		if (tabsCargNotCertificadas.getActualTab() == 0) {
			this.setVisibleTab(0);
			this.idPlanilla = 0;
			dialogsCargNotCer.setMsg("");
  			editsCargNotCerPlanEstudio.clear();
  			pcbCargNotCerCodPlan.setSelectedIndex(0);
  			editsCargNotCerMencion.clear();
  			memoCargNotCerPlanilla.setText('');
  			pcbCargNotCerPlaPromedio.setSelectedIndex(0);
  			if (methodName == "eliminar" && gridsCargNotCerPlanilla.getTotalRecord() == 1) {
  	  			gridsCargNotCerPlanilla.clean();
  				dlgWait.hide();
  			}
  			else 
  				this.buscar();
  		}
		else if (tabsCargNotCertificadas.getActualTab() == 1) {
			this.idPlantel = 0;
			pcbCargNotCerNumPlantel.setSelectedIndex(0);
			pcbCargNotCerPlaInstitucion.setSelectedIndex(0);
			editsCargNotCerPlaLocalidad.clear();
			editsCargNotCerPlaEF.clear();
  			if (methodName == "eliminar" && gridsCargNotCerPlaInstitucion.getTotalRecord() == 1) {
  				gridsCargNotCerPlaInstitucion.clean();
  				dlgWait.hide();
  			}
  			else 
  				Tool.getGridData('MantObject', 'getCargaNotaCertPlantel', dialogsCargNotCer, gridsCargNotCerPlaInstitucion, "Tool.loadPowerComboData(dialogsCargNotCer, pcbCargNotCerNomPlantel, 4, 1, json('getCargaNotaCertPlantel'))", new MiniDataSet(this.idPlanilla, 'int', false));
		}
		else if (tabsCargNotCertificadas.getActualTab() == 2) {
			this.idAsignatura = 0;
			pcbCargNotCerAsiAsignatura.setSelectedIndex(0);
			pcbCargNotCerNota.setSelectedIndex(0);
  			if (methodName == "eliminar" && gridsCargNotCerAsiAsignatura.getTotalRecord() == 1) {
  				gridsCargNotCerAsiAsignatura.clean();
  				dlgWait.hide();
  			}
  			else 
  				Tool.getGridData('MantObject', 'getCargaNotaCertAsignatura', dialogsCargNotCer, gridsCargNotCerAsiAsignatura, 'CargNotCertificadas.incremOrden()', new MiniDataSet(this.idPlanilla, 'int', false), pcbCargNotCerGrado.setModeReturnGetText(0), pcbCargNotCerGrado.setModeReturnGetText(0), pcbCargNotCerIngreso, pcbCargNotCerIngreso);
		}
		else if (tabsCargNotCertificadas.getActualTab() == 3) {
		    this.idAsignaturaLT = 0;
		    pcbCargNotCerAsigLT.setSelectedIndex(0);
		    pcbCargNotCerGrupo.clear();
			pcbCargNotCerGrupo.addOptionAndSimpleValue(null, 'EXONERADA', 'EXONERADA');
  			if (methodName == "eliminar" && gridsCargNotCerAsiLT.getTotalRecord() == 1) {
  				gridsCargNotCerAsiLT.clean();
  				dlgWait.hide();
  			}
  			else 
  				Tool.getGridData('MantObject', 'getCargaNotaCertAsigLT', dialogsCargNotCer, gridsCargNotCerAsiLT, false, new MiniDataSet(this.idPlanilla, 'int', false));
		}
		else {
		    this.idAsignaturaET = 0;
		    pcbCargNotCerAsigET.setSelectedIndex(0);
  			if (methodName == "eliminar" && gridsCargNotCerAsiET.getTotalRecord() == 1) {
  				gridsCargNotCerAsiET.clean();
  				dlgWait.hide();
  			}
  			else 
  				Tool.getGridData('MantObject', 'getCargaNotaCertAsigET', dialogsCargNotCer, gridsCargNotCerAsiET, 'CargNotCertificadas.incremOrdenET()', new MiniDataSet(this.idPlanilla, 'int', false));
		}
  	},

  	autoCoreUpdate: function() {
  		if(this.idAsignatura == 0)
  			this.coreUpdate('agregar')
  		else 
  			this.coreUpdate('modificar')
  	},
    
    reporteNotas : function(nu){
        var j1 = json('getReporte_I_IX_P'+nu);
        var j2 = json('getReporte_II_VI_X');
        var j3 = json('getReporte_III');
		  var j4 = json('getReporte_IV_P'+nu);
        var planteles = ['******','******','******','******','******'];
        var localidades = ['******','******','******','******','******'];
        var ef = ['**','**','**','**','**'];
        for(var i=0; i<j4.data[1].length; i++){
          planteles[i] = j4.data[1][i];
          localidades[i] = j4.data[2][i];
          ef[i] = j4.data[3][i];
        }
        var j50 = json('getReporte_V0_P'+nu);
        var j51 = json('getReporte_V1_P'+nu);
        var j52 = json('getReporte_V2_P'+nu);
        var j8 = json('getReporte_VIII_P'+nu);
        
        var asig0 = ['','','','','','','','','','','','','','',''];
        var enn0 =  ['','','','','','','','','','','','','','',''];
        var te0 =   ['','','','','','','','','','','','','','',''];
        var mes0 =  ['','','','','','','','','','','','','','',''];
        var ani0 =  ['','','','','','','','','','','','','','',''];
        var cpl0 =  ['','','','','','','','','','','','','','',''];
        
        var asig1 = ['','','','','','','','','','','','','','',''];
        var enn1 =  ['','','','','','','','','','','','','','',''];
        var te1 =   ['','','','','','','','','','','','','','',''];
        var mes1 =  ['','','','','','','','','','','','','','',''];
        var ani1 =  ['','','','','','','','','','','','','','',''];
        var cpl1 =  ['','','','','','','','','','','','','','',''];
        
        var asig2 = ['','','','','','','','','','','','','','',''];
        var enn2 =  ['','','','','','','','','','','','','','',''];
        var te2 =   ['','','','','','','','','','','','','','',''];
        var mes2 =  ['','','','','','','','','','','','','','',''];
        var ani2 =  ['','','','','','','','','','','','','','',''];
        var cpl2 =  ['','','','','','','','','','','','','','',''];
        var aog0 = '';
        var aog1 = '';
        var aog2 = '';
        if(j50.fields.length > 7){
	        for(var i=0; i<j50.data[2].length; i++){
	        	asig0[i]	= j50.data[2][i];
	        	enn0[i] 	= j50.data[3][i];
	        	te0[i] 		= j50.data[4][i];
	        	mes0[i] 	= j50.data[5][i];
	        	ani0[i] 	= j50.data[6][i];
	        	cpl0[i] 	= j50.data[7][i];
	        }
	        aog0 = j50.data[1][0];
        }
        if(j51.fields.length > 7){
	        for(var i=0; i<j51.data[2].length; i++){
	        	asig1[i]	= j51.data[2][i];
	        	enn1[i] 	= j51.data[3][i];
	        	te1[i] 		= j51.data[4][i];
	        	mes1[i] 	= j51.data[5][i];
	        	ani1[i] 	= j51.data[6][i];
	        	cpl1[i] 	= j51.data[7][i];
	        }
	        aog1 = j51.data[1][0];
        }
        if(j52.fields.length > 7){
	        for(var i=0; i<j52.data[2].length; i++){
	        	asig2[i]	= j52.data[2][i];
	        	enn2[i] 	= j52.data[3][i];
	        	te2[i] 		= j52.data[4][i];
	        	mes2[i] 	= j52.data[5][i];
	        	ani2[i] 	= j52.data[6][i];
	        	cpl2[i] 	= j52.data[7][i];
	        }
	        aog2 = j52.data[1][0];
        }        
        var nc = new NotasCertificadas();
        nc.initReport(); 
        nc.setDataParteI(j1.data[0][0],j1.data[1][0]);
        nc.setDataParteII(j1.data[2][0], j2.data[0][0], j2.data[1][0], j2.data[2][0], j2.data[3][0], j2.data[4][0], j2.data[11][0],j2.data[6][0], j2.data[7][0]);
        nc.setDataParteIII(j3.data[0][0],j3.data[1][0],j3.data[2][0],j3.data[3][0],j3.data[7][0], j3.data[5][0]);
        nc.setDataParteIV(planteles,localidades,ef);        
        nc.setDataParteV(0, aog0, asig0, enn0, te0, mes0, ani0, cpl0);
        nc.setDataParteV(1, aog1, asig1, enn1, te1, mes1, ani1, cpl1);
        nc.setDataParteV(2, aog2, asig2, enn2, te2, mes2, ani2, cpl2);
	    nc.setDataParteVI(j2.data[8][0], j2.data[9][0]);
	    nc.setDataParteVIII(j8.data[0],j8.data[1],j8.data[2]);
        nc.setDataParteIX(((j1.data[5][0] != -1)? 'Promedio: ' + j1.data[5][0] + '  ' : '') + j1.data[3][0]);
	    nc.setDataParteX(j2.data[5][0]+', '+j2.data[10][0]);
	    nc.createRep();
    },

    reporteNotas31059: function() {
    	var mat1 =[]; var mat2 =[]; var mat3 =[]; var mat4 =[]; var mat5 =[]; var not1 =[]; var not2 =[]; var not3 =[]; var not4 =[]; var not5 =[];
        var te1 = []; var te2 = []; var te3 = []; var te4 = []; var te5 = []; var mes1 =[];var mes2 =[];var mes3 =[];var mes4 =[];var mes5 =[];
        var ano1 =[]; var ano2 =[]; var ano3 =[]; var ano4 =[]; var ano5 =[]; var plantel1 =[];var plantel2 =[];var plantel3 =[];var plantel4 =[];
        var plantel5 =[];var calfLetras1 =[];var calfLetras2 =[];var calfLetras3 =[];var calfLetras4 =[];var calfLetras5 =[];
        var calfLetras =['CERO UNO','CERO DOS','CERO TRES', 'CERO CUATRO','CERO CINCO','CERO SEIS','CERO SIETE','CERO OCHO','CERO NUEVE',
		'DIEZ','ONCE','DOCE','TRECE','CATORCE','QUINCE','DIECISEIS','DIECISIETE','DIECIOCHO', 'DIECINUEVE', 'VEINTE'];
        var j1 = json('getReporte_I_IX_P0');
	    var j2 = json('getReporte_II_VI_X');
	    var j3 = json('getReporte_III');
	    var j4 = json('getReporte_IV_P0');
	    var jp = json('getReporte_Pla');
	    var jm = json('getReporte_Materia');
	    var jl = json('getReporte_Literal');
	    var jg = json('getReporte_LiteralGrupo');
		var tm = [0,0,0,0,0];
	    
		var setCalif = function(value, calfLet){
			value = value+'';
			if(value.toUpperCase()==='P') {
         	   	calfLet[calfLet.length]='PENDIENTE';
         	}
            else if (value.toUpperCase()==='C') {
         	   	calfLet[calfLet.length]='CURSADA'
            }
            else if (value.toUpperCase()==='AP') {
         	   	calfLet[calfLet.length]='Aprobada por convenio Andrés Bello'
            }
            else if (value.toUpperCase()==='R') {
         	   	calfLet[calfLet.length]='REVISION'
            }
            else if (value.toUpperCase()==='EX') {
         	   	calfLet[calfLet.length]='EXONERADA'
            }
            else if (value.toUpperCase()==='T') {
         	   	calfLet[calfLet.length]='TRANSFERENCIA'
            }
            else if (value.toUpperCase()==='Q') {
         	   	calfLet[calfLet.length]='QUEDADA'
            }
            else if (value.toUpperCase()==='F') {
         	   	calfLet[calfLet.length]='FINAL'
            }
            else if (value.toUpperCase()==='E') {
         	   	calfLet[calfLet.length]='EQUIVALENCIA'
            }
            else {
            	calfLet[calfLet.length] = calfLetras[parseInt(value,10)-1];
            }
		}
		
        for(var i=j4.data[0].length; i<5; i++){
          j4.data[0][i]=''; //nu_orden
          j4.data[1][i]='***';//de_institucion 
          j4.data[2][i]='***';//de_localidad 
          j4.data[3][i]='**'; //co_ef
          j4.data[4][i]=''; //id_plantel
          j4.data[5][i]=''; //id_institucion
        }
	    
        for(var i=0; i<jm.data[0].length; i++){
            switch(parseInt(jm.data[0][i],10)){			 	
             case 1 : {
               mat1[mat1.length] = jm.data[2][i];
               te1[te1.length]   = jm.data[4][i];
               not1[not1.length] = jm.data[3][i];
               mes1[mes1.length] = jm.data[5][i];
               ano1[ano1.length] = jm.data[6][i];
               plantel1[plantel1.length] = jm.data[7][i];            
               setCalif(jm.data[3][i], calfLetras1);
               tm[0]++;
               break;
             }
             case 2 : {
               mat2[mat2.length] = jm.data[2][i];
               te2[te2.length] =   jm.data[4][i];
               not2[not2.length] = jm.data[3][i];
               mes2[mes2.length] = jm.data[5][i];
               ano2[ano2.length] = jm.data[6][i];
               plantel2[plantel2.length] = jm.data[7][i];
               setCalif(jm.data[3][i], calfLetras2);
               tm[1]++;
               break;
             }
             case 3 : {
               mat3[mat3.length] = jm.data[2][i];
               te3[te3.length]   = jm.data[4][i];
               not3[not3.length] = jm.data[3][i];
               mes3[mes3.length] = jm.data[5][i];
               ano3[ano3.length] = jm.data[6][i];
               plantel3[plantel3.length] = jm.data[7][i];
               setCalif(jm.data[3][i], calfLetras3);
               tm[2]++;
               break;
             }
             case 4 : {
               mat4[mat4.length] = jm.data[2][i];
               te4[te4.length]   = jm.data[4][i];
               not4[not4.length] = jm.data[3][i];
               mes4[mes4.length] = jm.data[5][i];
               ano4[ano4.length] = jm.data[6][i];
               plantel4[plantel4.length] = jm.data[7][i];
               setCalif(jm.data[3][i], calfLetras4);
               tm[3]++;
               break;
             } 
             case 5 : {
               mat5[mat5.length] = jm.data[2][i];
               te5[te5.length]   = jm.data[4][i];
               not5[not5.length] = jm.data[3][i];
               mes5[mes5.length] = jm.data[5][i];
               ano5[ano5.length] = jm.data[6][i];
               plantel5[plantel5.length] = jm.data[7][i];
               setCalif(jm.data[3][i], calfLetras5);
               tm[4]++;
               break;
             } 
           }    
         }  
        
        if(tm[0]>0 && tm[0]<7){
			mat1[tm[0]] = "***";
            te1[tm[0]]  = "**";
            not1[tm[0]] = "**";
            mes1[tm[0]] = "**";
            ano1[tm[0]] = "**";
            plantel1[tm[0]] = "**";
            calfLetras1[tm[0]] = "***";
		}
		
		
		if(tm[1]>0 && tm[1]<7){
			mat2[tm[1]] = "***";
            te2[tm[1]]  = "**";
            not2[tm[1]] = "**";
            mes2[tm[1]] = "**";
            ano2[tm[1]] = "**";
            plantel2[tm[1]] = "**";
            calfLetras2[tm[1]] = "***";
		}
		
		
		if(tm[2]>0 && tm[2]<9){
			mat3[tm[2]] = "***";
            te3[tm[2]]  = "**";
            not3[tm[2]] = "**";
            mes3[tm[2]] = "**";
            ano3[tm[2]] = "**";
            plantel3[tm[2]] = "**";
            calfLetras3[tm[2]] = "***";
		}
		
		if(tm[3]>0 && tm[3]<9){
			mat4[tm[3]] = "***";
            te4[tm[3]]  = "**";
            not4[tm[3]] = "**";
            mes4[tm[3]] = "**";
            ano4[tm[3]] = "**";
            plantel4[tm[3]] = "**";
            calfLetras4[tm[3]] = "***";
		}

		if(tm[4]>0 && tm[4]<10){
			mat5[tm[4]] = "***";
            te5[tm[4]]  = "**";
            not5[tm[4]] = "**";
            mes5[tm[4]] = "**";
            ano5[tm[4]] = "**";
            plantel5[tm[4]] = "**";
            calfLetras5[tm[4]] = "***";
		}
		
		if(tm[0]===0){
        	mat1[0] = "***";te1[0]  = "**";not1[0] = "**";mes1[0] = "**";ano1[0] = "**";plantel1[0] = "**";calfLetras1[0] = "***";
        }
		
		if(tm[1]===0){
        	mat2[0] = "***";te2[0]  = "**";not2[0] = "**";mes2[0] = "**";ano2[0] = "**";plantel2[0] = "**";calfLetras2[0] = "***";
        }
		
		if(tm[2]===0){
        	mat3[0] = "***";te3[0]  = "**";not3[0] = "**";mes3[0] = "**";ano3[0] = "**";plantel3[0] = "**";calfLetras3[0] = "***";
        }
		
		if(tm[3]===0){
        	mat4[0] = "***";te4[0]  = "**";not4[0] = "**";mes4[0] = "**";ano4[0] = "**";plantel4[0] = "**";calfLetras4[0] = "***";
        }
		
		if(tm[4]===0){
        	mat5[0] = "***";te5[0]  = "**";not5[0] = "**";mes5[0] = "**";ano5[0] = "**";plantel5[0] = "**";calfLetras5[0] = "***";
        }
		
        var literales = ['***','***','***','***','***'];
        var grupos = ['***','***','***','***','***'];
        var litGrupos = ['***','***','***','***','***'];
        
        for(var w=0; w<jl.data[0].length; w++){
        	literales[parseInt(jl.data[0][w],10)-1] = jl.data[2][w];
        }
        
        for(var w=0; w<jg.data[0].length; w++){
        	grupos[parseInt(jg.data[0][w],10)-1] = jg.data[3][w];
        	litGrupos[parseInt(jg.data[0][w],10)-1] = jg.data[2][w];
        }
        
        var jData =  {
        ///////////PARTE I
        plan:j1.data[0][0],
        cod:j1.data[1][0], 
        lugar_fecha:j2.data[5][0] + ', ' + j2.data[10][0],
        ///////////PARTE: II
        codigo: j2.data[0][0],
        nombreP: j2.data[1][0],
        dir:j2.data[3][0],
        tel:j2.data[4][0],
        munic:j2.data[11][0],
        entFed:j2.data[6][0],
        zEdu:j2.data[7][0],
        ///////////PARTE III
        cedIde:j3.data[0][0],
        fecNac:j3.data[1][0],
        ape:j3.data[2][0],
        nom:j3.data[3][0],
        lugNac:j3.data[4][0],
        pais:j3.data[6][0],
        est:j3.data[5][0],
        muni:j3.data[7][0],
        ///////////PARTE IV
        //I
        nomP1:j4.data[1][0],
        loc1:j4.data[2][0],
        ef1:j4.data[3][0],
        //II
        nomP2:j4.data[1][1],
        loc2:j4.data[2][1],
        ef2:j4.data[3][1],
        //III
        nomP3:j4.data[1][2],
        loc3:j4.data[2][2],
        ef3:j4.data[3][2],
        //IV
        nomP4:j4.data[1][3],
        loc4:j4.data[2][3],
        ef4:j4.data[3][3],
        //V
        nomP5:j4.data[1][4],
        loc5:j4.data[2][4],
        ef5:j4.data[3][4],
        ////////////PARTE V
        //Data Table 1-5 Año
        materias1: mat1,
        calificacion1: not1,
        calLet1: calfLetras1,
        TE1: te1,
        mes1: mes1,
        ano1: ano1,
        pl1: plantel1,
                
        materias2: mat2,
        calificacion2: not2,
        calLet2: calfLetras2,
        TE2: te2,
        mes2: mes2,
        ano2: ano2,
        pl2: plantel2,
        
        materias3: mat3,
        calificacion3: not3,
        calLet3: calfLetras3,
        TE3: te3,
        mes3: mes3,
        ano3: ano3,
        pl3: plantel3,
        
        materias4: mat4,
        calificacion4: not4,
        calLet4: calfLetras4,
        TE4: te4,
        mes4: mes4,
        ano4: ano4,
        pl4: plantel4,
        
        materias5: mat5,
        calificacion5: not5,
        calLet5: calfLetras5,
        TE5: te5,
        mes5: mes5,
        ano5: ano5,
        pl5: plantel5,
        
        lit: literales,
        gru: grupos,
        litGru : litGrupos,
        //obs: j1.data[3][0],
        obse:((j1.data[5][0] != -1)? 'Promedio: ' + j1.data[5][0] + '  ' : '') + j1.data[3][0],
        //////////////Parte VI
        nomJef: j2.data[8][0],
        cedJef: j2.data[9][0]          
      }
      var c = new Certificacion();
      c.setData(jData);
      c.init();    	
    },
    
   reportePlanilla: function() {
        if (pcbCargNotCerCodPlan.getOption() === '31059'){
        	  if(json('getBachTecnica').data[0][0].toUpperCase()==='SI'){
        		  new CertificacionBatchMapping({
        	     		j1 : json('getReporte_I_IX_P0'), 
        	      	j2 : json('getReporte_II_VI_X'), 
        	      	j3 : json('getReporte_III'), 
        	      	j4 : json('getReporte_IV_P0'), 
        	      	j5 : json('getReporte_II_VI_X'), 
        	      	jn : json('getCargaNotaCertAsignatura'),
        	      	jl : json('getCargaNotaCertAsigLT')
              });
        	  }
        	  else
        	    this.reporteNotas31059();//Notas para Bachillerato de primero a Quinto        
        }
        else {
        	for(var i=0; i<json('getReporte_Pla').data[0].length; i++)
        		this.reporteNotas(i);
        }
  	}, 
  	
  	reporte: function() {
  		var rlx = xmlStructs.createRecordList("rlx");        

  		rlx.addInt('reg', editsCargNotCerCi.hideId);
  		rlx.add('reg', pcbCargNotCerCodPlan);
  		rlx.addStr('reg', calendarCargNotCerFeExp.getFechaFromEdit());
  		Tool.cnnSrv('MantObject', 'getCargaNotaCertReporte', this.windowName + ".reportePlanilla()", rlx);
  	},
  	
  	reporteReverso : async function() {
		var txt = '';	
		
		async function prt(j, pos, tot) {
			return await new Promise( (resolve, reject)=> {
				try {
					richEditVistapreviaConstancia.cleanLabelDescription();
					richEditVistapreviaConstancia.setText(pcbCargNotCerReverso.setModeReturnGetText(2).getText());			
					//ETIQUETAS DE LA BD
					for(var i=0; i<j.fields.length; i++){
						richEditVistapreviaConstancia.addLabelDescription(j.fields[i], j.data[i][0]);
					};
					richEditVistapreviaConstancia.setText(richEditVistapreviaConstancia.replaceAllLabels(richEditVistapreviaConstancia.getText()));					
					if(pos < tot && pos > 0){
						richEditVistapreviaConstancia.addPageBreak();
					}
					var txt = richEditVistapreviaConstancia.getText();
					resolve({sts:true, position : pos, total: tot, content : txt});
				}
				catch(e){
					reject(e);
				}	
			});
		}
		prt(json('getConstanciasPorAlumno', 0, 1), false);
		//margenes y tipo de papel
		richEditVistapreviaConstancia.setOrientation(pcbCargNotCerReverso.setModeReturnGetText(3).getText());
		richEditVistapreviaConstancia.setMarginTop(pcbCargNotCerReverso.setModeReturnGetText(4).getText());
		richEditVistapreviaConstancia.setMarginLeft(pcbCargNotCerReverso.setModeReturnGetText(5).getText());
		richEditVistapreviaConstancia.setMarginRight(pcbCargNotCerReverso.setModeReturnGetText(6).getText());	
		setTimeout( ()=>{
			richEditVistapreviaConstancia.print();
			VistapreviaConstancia.close();
		}, 1000);
    },

    coreUpdateReverso: function() {
    	VistapreviaConstancia.show();
    	var rlx = xmlStructs.createRecordList("rlx");

    	VistapreviaConstancia.close();
    	if (pcbCargNotCerReverso.valid(dialogsCargNotCer))	{
    		rlx.add('reg', pcbCargNotCerReverso.setModeReturnGetText(7));
			Tool.cnnSrv('ReportObject', 'getConstanciasPorAlumno', this.windowName + '.reporteReverso()', rlx);
    	}    	
	},

  	coreUpdate: function(methodName) {
        var rlx = xmlStructs.createRecordList("rlx");
        var nameProcess = '';
        
        if (editsCargNotCerCi.valid(dialogsCargNotCer))
			if (editsCargNotCerNombre.valid(dialogsCargNotCer))
				if (editsCargNotCerApellido.valid(dialogsCargNotCer)) {
					if (tabsCargNotCertificadas.getActualTab() == 0) {
						if (editsCargNotCerPlanEstudio.valid(dialogsCargNotCer))
							if (pcbCargNotCerCodPlan.valid(dialogsCargNotCer))
								if (editsCargNotCerMencion.valid(dialogsCargNotCer)) {
									nameProcess = 'Planilla';
									if (methodName != 'eliminar') {
										rlx.add('reg', editsCargNotCerPlanEstudio);
										rlx.addStr('reg', pcbCargNotCerCodPlan.getOption());
										rlx.add('reg', editsCargNotCerMencion);
										rlx.add('reg', memoCargNotCerPlanilla);
										rlx.addInt('reg', editsCargNotCerCi.hideId);
										rlx.add('reg', pcbCargNotCerPlaPromedio);
									}
									if (methodName != 'agregar') 
										rlx.addInt('reg', this.idPlanilla);
								}
					}
					else if (tabsCargNotCertificadas.getActualTab() == 1) {
						if (pcbCargNotCerNumPlantel.valid(dialogsCargNotCer)) 
							if (pcbCargNotCerPlaInstitucion.valid(dialogsCargNotCer)) { 
								nameProcess = 'Plantel';
								if (methodName != 'eliminar') {
									rlx.addInt('reg', this.idPlanilla);
									rlx.add('reg', pcbCargNotCerPlaInstitucion.setModeReturnGetText(5));
									rlx.add('reg', pcbCargNotCerNumPlantel);
								}
								if (methodName != 'agregar') 
									rlx.addInt('reg', this.idPlantel);
							}
					}
					else if (tabsCargNotCertificadas.getActualTab() == 2) {
			            if (methodName == 'eliminar' || pcbCargNotCerNomPlantel.valid(dialogsCargNotCer))
			                if (pcbCargNotCerGrado.valid(dialogsCargNotCer))
			                    if (methodName == 'eliminar' || pcbCargNotCerAsiAsignatura.valid(dialogsCargNotCer))
		                            if (methodName == 'eliminar' || pcbCargNotCerNota.valid(dialogsCargNotCer))
		                                if (methodName == 'eliminar' || pcbCargNotCerTE.valid(dialogsCargNotCer))
		                                    if (methodName == 'eliminar' || pcbCargNotCerMes.valid(dialogsCargNotCer)) 
			                                    if (methodName == 'eliminar' || editsCargNotCerAsiYear.valid(dialogsCargNotCer))
			    			                        if (editsCargNotCerOrdenAsig.valid(dialogsCargNotCer)) {
				                                    	nameProcess = 'Asignatura';
				                                    	if (methodName != 'eliminar') {
				                                    		rlx.addInt('reg', this.idPlanilla);
				                                    		rlx.add('reg', pcbCargNotCerGrado.setModeReturnGetText(0));
				                                    		rlx.addStr('reg', pcbCargNotCerAsiAsignatura.getOption());
				                                    		rlx.add('reg', pcbCargNotCerNota);
				                                    		rlx.add('reg', pcbCargNotCerTE);
				                							rlx.add('reg', pcbCargNotCerMes);
				                							rlx.add('reg', editsCargNotCerAsiYear);
				                							rlx.add('reg', pcbCargNotCerNomPlantel);
				                							rlx.addStr('reg', 'MANUAL');
				                							rlx.add('reg', editsCargNotCerOrdenAsig);
				                							rlx.add('reg', editsCargNotCerGrado);
				                                    	}
				                                    	if (methodName != 'agregar') {
				                                    		rlx.addInt('reg', this.idAsignatura);
				                                    		if (methodName == 'eliminar' && pcbCargNotCerIngreso.getOption() != '') { 
				                                    			rlx = xmlStructs.createRecordList("rlx");
				                                    			rlx.addInt('reg', this.idPlanilla);
					                            				rlx.add('reg', pcbCargNotCerGrado.setModeReturnGetText(0));
				                                    			rlx.add('reg', pcbCargNotCerIngreso);
				                                    			gridsCargNotCerAsiAsignatura.clean();
				                                    		}
				                                    	}
				                                    }
					}
					else if (tabsCargNotCertificadas.getActualTab() == 3) {
						if (pcbCargNotCerAsigLT.valid(dialogsCargNotCer))
							if (pcbCargNotCerAno.valid(dialogsCargNotCer))
								if (pcbCargNotCerLiteral.valid(dialogsCargNotCer)) {
									nameProcess = 'AsigLT';
									if (methodName != 'eliminar') {
										rlx.addInt('reg', this.idPlanilla);
										rlx.add('reg', pcbCargNotCerAno);
										rlx.addStr('reg', pcbCargNotCerAsigLT.getOption());
										rlx.addStr('reg', pcbCargNotCerLiteral.getOption());
										rlx.addStr('reg', pcbCargNotCerGrupo.getOption());
									}
									if (methodName != 'agregar') 
										rlx.addInt('reg', this.idAsignaturaLT);
								}
					}
					else {
			            if (pcbCargNotGrado.valid(dialogsCargNotCer))
			            	if (pcbCargNotCerAsigET.valid(dialogsCargNotCer))
				                if (pcbCargNotCerHoras.valid(dialogsCargNotCer))
				                    if (editsCargNotCerOrdenAsigET.valid(dialogsCargNotCer)) {
										nameProcess = 'AsigET';
										if (methodName != 'eliminar') {
											rlx.addInt('reg', this.idPlanilla);
											rlx.add('reg', pcbCargNotGrado);
											rlx.addStr('reg', pcbCargNotCerAsigET.getOption());
											rlx.add('reg', pcbCargNotCerHoras);
											rlx.add('reg', editsCargNotCerOrdenAsigET);
										}
										if (methodName != 'agregar') 
											rlx.addInt('reg', this.idAsignaturaET);
				                    }
					}
					if (nameProcess != '')
						Tool.cnnSrv('MantObject', methodName + 'CargaNotaCert' + nameProcess, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
				}
	}
};
