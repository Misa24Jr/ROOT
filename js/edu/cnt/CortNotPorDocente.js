var dialogsCortNotPorDocente = new Object();
var pcbCortNotPorDocOrganizacion = new Object();
var pcbCortNotPorDocSuborganizacion = new Object();
var pcbCortNotPorDocCarrera = new Object();
var pcbCortNotPorDocPeriodo = new Object();
var pcbCortNotPorDocLapso = new Object();
var editsCortNotPorDocCi = new Object();
var editsCortNotPorDocNombre = new Object();
var editsCortNotPorDocApellido = new Object();
var gridsCortNotPorDocente = new Object();
var imgButtonsCortNotPorDocLimpiar = new Object();
var imgButtonsCortNotPorDocBuscar = new Object();
var imgButtonsCortNotPorDocSalir = new Object();
var mwCortNotPorDocente  = new Object();// minWindow

var CortNotPorDocente = {
	windowName: 'CortNotPorDocente',
	isCreate: false,
	idPeriodo: 0,
	idProyecto: 0,
	idProEsp: 0,
	objGrid: new Object(),
	
	show: function(){
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsCortNotPorDocente.isByClean()) 
			this.limpiar();
			
		dialogsCortNotPorDocente.show();
	},
	
	hide: function(){
		dialogsCortNotPorDocente.hide();
	},
	
	createMWs: function(){
		mwCortNotPorDocente = desktop.addMinWindow('C.N.P.Docente', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsCortNotPorDocente.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},
	
	dialogsCortNotPorDocente_Init: function(){
		dialogsCortNotPorDocente.setMinimizeXY(0, 0);
		dialogsCortNotPorDocente.setCenterScreen();
		dialogsCortNotPorDocente.addSpace(0, 0, 20);
		dialogsCortNotPorDocente.addLn(1, 1, 1);
		dialogsCortNotPorDocente.setHeightCell(1,1,15);
		var c1 = container.create("c1",'Datos Requeridos', 1);		
		c1.setDimension(801,74);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#1e1e1e');
		c1.addObject(pcbCortNotPorDocOrganizacion, 30,55);
		c1.addObject(pcbCortNotPorDocSuborganizacion, 300,55);
		c1.addObject(pcbCortNotPorDocCarrera, 587,55);
		c1.addObject(pcbCortNotPorDocPeriodo, 30,80);
		c1.addObject(pcbCortNotPorDocLapso, 300, 80);
		dialogsCortNotPorDocente.addObjToDialog(c1, 2, 1);
		dialogsCortNotPorDocente.addLn(3,1,1);
		dialogsCortNotPorDocente.setHeightCell(3,1,20);
		var c2 = container.create("c2",'Busqueda por Docente', 1);		
		c2.setDimension(801,51);
		c2.setPropertyMarco('groove',1,'#7e7e7e');
		c2.setFontTitle('verdana', 11, '#1e1e1e');
		c2.addObject(editsCortNotPorDocCi, 80,152);
		c2.addObject(editsCortNotPorDocNombre, 300,152);
		c2.addObject(editsCortNotPorDocApellido, 587,152);
		dialogsCortNotPorDocente.addObjToDialog(c2, 4, 1);
		dialogsCortNotPorDocente.addLn(5,1,1);
		dialogsCortNotPorDocente.setHeightCell(5,1,11);
        dialogsCortNotPorDocente.addObjToDialog(gridsCortNotPorDocente.getObject(),6,1);
        dialogsCortNotPorDocente.addLn(7,1,1);
		dialogsCortNotPorDocente.setHeightCell(7,1,9);
		dialogsCortNotPorDocente.addObjToDialog(imgButtonsCortNotPorDocLimpiar,8,1);
        dialogsCortNotPorDocente.addObjToDialog(imgButtonsCortNotPorDocBuscar,8,1);
        dialogsCortNotPorDocente.addObjToDialog(imgButtonsCortNotPorDocSalir,8,1); 
        imgButtonsCortNotPorDocLimpiar.setDimension(90,22);
        imgButtonsCortNotPorDocBuscar.setDimension(90,22);
        imgButtonsCortNotPorDocSalir.setDimension(90,22);
        dialogsCortNotPorDocente.adjAllMarginObj(8,1,18);
        dialogsCortNotPorDocente.leftMarginObj(8,1,0,245);
	},	
		
	gridsCortNotPorDocente_Init : function(){
        gridsCortNotPorDocente.setFixColRow(false,true);
        gridsCortNotPorDocente.addTitleVectorX(['Nº','C.i.','Nombre','Apellido','Nº Curso Asignado','Nº Curso Evaluado','idPers']);
        gridsCortNotPorDocente.showData();
        gridsCortNotPorDocente.setSizeCol(1,20);
        gridsCortNotPorDocente.setSizeCol(2,83);
        gridsCortNotPorDocente.setSizeCol(3,232);
        gridsCortNotPorDocente.setSizeCol(4,232);
        gridsCortNotPorDocente.setSizeCol(5,115);
        gridsCortNotPorDocente.setSizeCol(6,115);
        gridsCortNotPorDocente.setSizeCol(7,0);
        gridsCortNotPorDocente.hideCol(7);
	},
	
	create : function(){
        /////////////////////////////////////////////////INFORMACIÓN GENERAL/////////////////////////////////////////////////
		dialogsCortNotPorDocente = dialogs.create('dialogsCortNotPorDocente',0,0,843,648,'SUPERVISION DE EVALUACION');   
		dialogsCortNotPorDocente.setAdjY(20);
		pcbCortNotPorDocOrganizacion = powerComboBox.create('pcbCortNotPorDocOrganizacion','pcbCortNotPorDocOrganizacion','Organización (+):',1,100);
		pcbCortNotPorDocOrganizacion.setValidEmpty();
		pcbCortNotPorDocOrganizacion.enableReadOnlyEditor();
		pcbCortNotPorDocOrganizacion.addEmptyOption ();
		pcbCortNotPorDocSuborganizacion = powerComboBox.create('pcbCortNotPorDocSuborganizacion','pcbCortNotPorDocSuborganizacion','Suborganización (^):',1,120);
		pcbCortNotPorDocSuborganizacion.setValidEmpty();
		pcbCortNotPorDocSuborganizacion.enableReadOnlyEditor();
		pcbCortNotPorDocSuborganizacion.addEmptyOption();
		pcbCortNotPorDocCarrera = powerComboBox.create('pcbCortNotPorDocCarrera','pcbCortNotPorDocCarrera','Carrera (^):',1,75);
		pcbCortNotPorDocCarrera.setValidEmpty();
		pcbCortNotPorDocCarrera.enableReadOnlyEditor();
		pcbCortNotPorDocCarrera.addEmptyOption();
		pcbCortNotPorDocPeriodo = powerComboBox.create('pcbCortNotPorDocPeriodo','pcbCortNotPorDocPeriodo','Periodo (+):',1,100);
		pcbCortNotPorDocPeriodo.setValidEmpty();
		pcbCortNotPorDocPeriodo.enableReadOnlyEditor();
		pcbCortNotPorDocPeriodo.addEmptyOption();
		pcbCortNotPorDocLapso = powerComboBox.create('pcbCortNotPorDocLapso','pcbCortNotPorDocLapso','Lapso (+):',1,120);
		pcbCortNotPorDocLapso.setValidEmpty();
		pcbCortNotPorDocLapso.enableReadOnlyEditor();
		pcbCortNotPorDocLapso.addEmptyOption();
		editsCortNotPorDocCi = edits.create('editsCortNotPorDocCi','editsCortNotPorDocCi','C.i. (*):',1,50,'normal');
		editsCortNotPorDocCi.setValidInteger();
		editsCortNotPorDocCi.setValidEmpty();
		editsCortNotPorDocCi.setFieldFind(true);
		editsCortNotPorDocCi.setSizeEdit(148);
		editsCortNotPorDocNombre = edits.create('editsCortNotPorDocNombre','editsCortNotPorDocNombre','Nombre (*):',1,120,'normal');
		editsCortNotPorDocNombre.setValidEmpty();
		editsCortNotPorDocNombre.setFieldFind(true);
		editsCortNotPorDocNombre.setSizeEdit(148);
		editsCortNotPorDocApellido = edits.create('editsCortNotPorDocApellido','editsCortNotPorDocApellido','Apellido (*):',1,75,'normal');
		editsCortNotPorDocApellido.setValidEmpty();
		editsCortNotPorDocApellido.setFieldFind(true);
		editsCortNotPorDocApellido.setSizeEdit(148);
		gridsCortNotPorDocente = grids.create('gridsCortNotPorDocente',20,7); 
		imgButtonsCortNotPorDocLimpiar = imgButtons.create('imgButtonsCortNotPorDocLimpiar','Limpiar','limpiar.png');
		imgButtonsCortNotPorDocBuscar = imgButtons.create('imgButtonsCortNotPorDocBuscar','Buscar','icono_buscar.png');
		imgButtonsCortNotPorDocSalir = imgButtons.create('imgButtonsCortNotPorDocSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsCortNotPorDocente_Init();
		this.gridsCortNotPorDocente_Init();
		this.createMWs(); 
	},
	
	limpiarFind : function(ix) {
		editsCortNotPorDocCi.hideId = -1;
		gridsCortNotPorDocente.clean();
		dialogsCortNotPorDocente.setMsg("");

  		switch (ix) {
		case 1: 
			editsCortNotPorDocNombre.setValue("");
			editsCortNotPorDocApellido.setValue("");  		
			break;
		case 2: 
			editsCortNotPorDocCi.setValue("");
			editsCortNotPorDocApellido.setValue("");  		
			break;
		default:
			editsCortNotPorDocCi.setValue("");
			editsCortNotPorDocNombre.setValue("");
			break;
		} 
  	},
  	
	limpiar : function(){
		editsCortNotPorDocCi.hideId = -1;
		dialogsCortNotPorDocente.setMsg("");
		Tool.rstPwrCmb(pcbCortNotPorDocOrganizacion);
		Tool.rstPwrCmb(pcbCortNotPorDocSuborganizacion);
		Tool.rstPwrCmb(pcbCortNotPorDocCarrera);
		Tool.rstPwrCmb(pcbCortNotPorDocPeriodo);
		Tool.rstPwrCmb(pcbCortNotPorDocLapso);
		editsCortNotPorDocCi.setValue("");
		editsCortNotPorDocNombre.setValue("");
		editsCortNotPorDocApellido.setValue("");
		gridsCortNotPorDocente.clean();
  		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
    },

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsCortNotPorDocente, pcbCortNotPorDocOrganizacion, 0, 1, json('getData'));
    	Tool.getContext(dialogsCortNotPorDocente, pcbCortNotPorDocOrganizacion, pcbCortNotPorDocSuborganizacion, pcbCortNotPorDocCarrera, "Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsCortNotPorDocente, pcbConsProAprPosicion, 0, 1, pcbCortNotPorDocCarrera.setModeReturnGetText(2))");
		Tool.getContext(dialogsCortNotPorDocente, pcbCortNotPorDocOrganizacion, pcbCortNotPorDocSuborganizacion, pcbCortNotPorDocCarrera, this.windowName + ".resetElements('car')");
	},
    
    resetElements : function(element) {
		gridsCortNotPorDocente.clean();
		imgButtonsCortNotPorDocBuscar.setEnable();
		
		if (element == 'org') {
			Tool.rstPwrCmb(pcbCortNotPorDocCarrera);
			Tool.rstPwrCmb(pcbCortNotPorDocPeriodo);
			Tool.rstPwrCmb(pcbCortNotPorDocLapso);
	    	if (pcbCortNotPorDocOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsCortNotPorDocente, pcbCortNotPorDocSuborganizacion, 1, 2, pcbCortNotPorDocOrganizacion);		
		}
		else if (element == 'sub') {
			Tool.rstPwrCmb(pcbCortNotPorDocPeriodo);
			Tool.rstPwrCmb(pcbCortNotPorDocLapso);
	    	if (pcbCortNotPorDocSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsCortNotPorDocente, pcbCortNotPorDocCarrera, -1, 3, pcbCortNotPorDocSuborganizacion);		
		}
		else if (element == 'car') {
			Tool.rstPwrCmb(pcbCortNotPorDocLapso);
	    	if (pcbCortNotPorDocCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsCortNotPorDocente, pcbCortNotPorDocPeriodo, 0, 1, pcbCortNotPorDocCarrera.setModeReturnGetText(5));
		}
		else if (element == 'per') {
	    	if (pcbCortNotPorDocPeriodo.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantLapso', dialogsCortNotPorDocente, pcbCortNotPorDocLapso, 3, 0, pcbCortNotPorDocPeriodo);
	    }
	},
	
    buscar : function() {
		if (pcbCortNotPorDocOrganizacion.valid(dialogsCortNotPorDocente)) 
			if (pcbCortNotPorDocSuborganizacion.valid(dialogsCortNotPorDocente)) 
				if (pcbCortNotPorDocCarrera.valid(dialogsCortNotPorDocente)) 
					if (pcbCortNotPorDocPeriodo.valid(dialogsCortNotPorDocente)) 
						if (pcbCortNotPorDocLapso.valid(dialogsCortNotPorDocente)) {
							if ((editsCortNotPorDocCi.getValue() != '' && editsCortNotPorDocNombre.getValue() != '' && editsCortNotPorDocApellido.getValue() != '') || (editsCortNotPorDocCi.getValue() == '' && editsCortNotPorDocNombre.getValue() == '' && editsCortNotPorDocApellido.getValue() == '')) {
								Tool.getGridData('ReportObject', 'getListadoDocenteCurso', dialogsCortNotPorDocente, gridsCortNotPorDocente, false, pcbCortNotPorDocPeriodo, pcbCortNotPorDocCarrera.setModeReturnGetText(2), pcbCortNotPorDocLapso, new MiniDataSet(editsCortNotPorDocCi.hideId, 'int', true), new MiniDataSet(editsCortNotPorDocCi.hideId, 'int', true), pcbCortNotPorDocPeriodo, pcbCortNotPorDocCarrera.setModeReturnGetText(2), new MiniDataSet(editsCortNotPorDocCi.hideId, 'int', true), new MiniDataSet(editsCortNotPorDocCi.hideId, 'int', true));	    		
							}
							else {
								if (editsCortNotPorDocCi.getValue() != '' || editsCortNotPorDocNombre.getValue() != '' || editsCortNotPorDocApellido.getValue() != '') {
									ResuBusqueda.setObjectExtFnc(editsCortNotPorDocCi, editsCortNotPorDocNombre, editsCortNotPorDocApellido, 'CortNotPorDocente.buscar()');
									Tool.getGridData('MantObject', 'getMantPersProf', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsCortNotPorDocCi, editsCortNotPorDocCi, editsCortNotPorDocNombre, editsCortNotPorDocNombre, editsCortNotPorDocApellido, editsCortNotPorDocApellido);
								}
							}
						}
    },

	setEvents : function() {
		pcbCortNotPorDocOrganizacion.onChange(this.windowName + ".resetElements('org')");
		pcbCortNotPorDocSuborganizacion.onChange(this.windowName + ".resetElements('sub')");
		pcbCortNotPorDocCarrera.onChange(this.windowName + ".resetElements('car')");
		pcbCortNotPorDocPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbCortNotPorDocLapso.onChange(this.windowName + ".buscar()");
		editsCortNotPorDocCi.onEnter(this.windowName + ".buscar()");
		editsCortNotPorDocCi.onChange(this.windowName + ".limpiarFind(1)");
		editsCortNotPorDocNombre.onEnter(this.windowName + ".buscar()");
		editsCortNotPorDocNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsCortNotPorDocApellido.onEnter(this.windowName + ".buscar()");
		editsCortNotPorDocApellido.onChange(this.windowName + ".limpiarFind(3)");
		gridsCortNotPorDocente.onClickCells(this.windowName + ".coreUpdate()");
		imgButtonsCortNotPorDocLimpiar.onClick(this.windowName+".limpiar()"); 
	  	imgButtonsCortNotPorDocBuscar.onClick(this.windowName+".buscar()");
	  	imgButtonsCortNotPorDocSalir.onClick("dialogsCortNotPorDocente.close()");
    }, 

	reporte : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,4);
        rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),11,'courier','bold');
        rep.addText(448,22,'SUPERVISION DE EVALUACION',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),9,'courier','normal');
        rep.addBar(0,38,1128,97,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 54, 'ORGANIZACION: '+pcbCortNotPorDocOrganizacion.getOption(),false);
		rep.addText(20, 72, 'PERIODO:      '+pcbCortNotPorDocPeriodo.getOption(),false);
		rep.addText(20, 90, 'CARRERA:      '+pcbCortNotPorDocCarrera.getOption(),false);
		rep.addText(400, 54, 'CEDULA:  '+gridsCortNotPorDocente.getDataCell(2),false);
		rep.addText(400, 72, 'DOCENTE: '+gridsCortNotPorDocente.getDataCell(3) + ' ' + gridsCortNotPorDocente.getDataCell(4),false);
		rep.addText(400, 90, 'LAPSO:   '+pcbCortNotPorDocLapso.getOption(),false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 9);
		rep.addTable('TablaRepoHojaEvaAlumno',['Materia','Posición','Sección','Eval. Planif.','Eval. Con Nota','Alumno Eval.','Aplazado','Aprobado'],396,102);
        rep.setTotalRowTable(34);
        rep.setHeightRow(26); 
        rep.setSizeColumnArray([198,76,60,105,105,105,74,75]);
        rep.setAlignData(['left','left','center','center','center','center','center','center']);     
        rep.addJsonData('TablaRepoHojaEvaAlumno','getListadoDocenteCursoMateria',[0,1,2,3,4,5,6,7]);
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},

	coreUpdate : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		rlx.add('reg', pcbCortNotPorDocLapso);
		rlx.add('reg', pcbCortNotPorDocLapso);
		rlx.add('reg', pcbCortNotPorDocPeriodo);
		rlx.add('reg', pcbCortNotPorDocCarrera.setModeReturnGetText(2));
		rlx.addInt('reg', gridsCortNotPorDocente.getDataCell(7));
		rlx.add('reg', pcbCortNotPorDocLapso);
		rlx.add('reg', pcbCortNotPorDocPeriodo);
		rlx.add('reg', pcbCortNotPorDocCarrera.setModeReturnGetText(2));
		rlx.addInt('reg', gridsCortNotPorDocente.getDataCell(7));
		rlx.add('reg', pcbCortNotPorDocPeriodo);
		rlx.add('reg', pcbCortNotPorDocCarrera.setModeReturnGetText(2));
		rlx.addInt('reg', gridsCortNotPorDocente.getDataCell(7));
		Tool.cnnSrv('ReportObject', 'getListadoDocenteCursoMateria', this.windowName + '.reporte()', rlx);
	}
};