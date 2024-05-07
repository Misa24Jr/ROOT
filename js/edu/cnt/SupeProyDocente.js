var dialogsSupeProyDocente = new Object();
var pcbSupeProyDocenteOrganizacion = new Object();
var pcbSupeProyDocenteSuborganizacion = new Object();
var pcbSupeProyDocenteCarrera = new Object();
var pcbSupeProyDocentePeriodo = new Object();
var pcbSupeProyDocenteLapso = new Object();
var editsSupeProyDocenteCi = new Object();
var editsSupeProyDocenteNombre = new Object();
var editsSupeProyDocenteApellido = new Object();
var gridsSupeProyDocente = new Object();
var imgButtonsSupeProyDocenteVisProyecto = new Object();
var imgButtonsSupeProyDocenteVisBoletin = new Object();
var imgButtonsSupeProyDocenteVisBolFin = new Object();
var imgButtonsSupeProyDocenteLimpiar = new Object();
var imgButtonsSupeProyDocenteBuscar = new Object();
var imgButtonsSupeProyDocenteSalir = new Object();
var mwSupeProyDocente  = new Object();// minWindow

var SupeProyDocente = {
	windowName: 'SupeProyDocente',
	isCreate: false,
	hideIdProy: 0,
	hideIdPos: 0,
	hideIdSec: 0,
	
	show: function(){
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsSupeProyDocente.isByClean()) 
			this.limpiar();
			
		dialogsSupeProyDocente.show();
	},
	
	hide: function(){
		dialogsSupeProyDocente.hide();
	},
	
	createMWs: function(){
		mwSupeProyDocente = desktop.addMinWindow('S.PY.Docente', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsSupeProyDocente.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},
	
	dialogsSupeProyDocente_Init: function(){
		dialogsSupeProyDocente.setMinimizeXY(0, 0);
		dialogsSupeProyDocente.setCenterScreen();
		dialogsSupeProyDocente.addSpace(0, 0, 20);
		dialogsSupeProyDocente.addLn(1, 1, 1);
		dialogsSupeProyDocente.setHeightCell(1,1,15);
		var c1 = container.create("c1",'Datos Requeridos', 1);		
		c1.setDimension(801,74);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#1e1e1e');
		c1.addObject(pcbSupeProyDocenteOrganizacion, 30,55);
		c1.addObject(pcbSupeProyDocenteSuborganizacion, 300,55);
		c1.addObject(pcbSupeProyDocenteCarrera, 587,55);
		c1.addObject(pcbSupeProyDocentePeriodo, 30,80);
		c1.addObject(pcbSupeProyDocenteLapso, 300, 80);
		dialogsSupeProyDocente.addObjToDialog(c1, 2, 1);
		dialogsSupeProyDocente.addLn(3,1,1);
		dialogsSupeProyDocente.setHeightCell(3,1,20);
		var c2 = container.create("c2",'Busqueda por Docente', 1);		
		c2.setDimension(801,51);
		c2.setPropertyMarco('groove',1,'#7e7e7e');
		c2.setFontTitle('verdana', 11, '#1e1e1e');
		c2.addObject(editsSupeProyDocenteCi, 30,152);
		c2.addObject(editsSupeProyDocenteNombre, 300,152);
		c2.addObject(editsSupeProyDocenteApellido, 587,152);
		dialogsSupeProyDocente.addObjToDialog(c2, 4, 1);
		dialogsSupeProyDocente.addLn(5,1,1);
		dialogsSupeProyDocente.setHeightCell(5,1,11);
        dialogsSupeProyDocente.addObjToDialog(gridsSupeProyDocente.getObject(),6,1);
        dialogsSupeProyDocente.addLn(7,1,1);
		dialogsSupeProyDocente.setHeightCell(7,1,9);
		dialogsSupeProyDocente.addObjToDialog(imgButtonsSupeProyDocenteVisProyecto,8,1);
        dialogsSupeProyDocente.addObjToDialog(imgButtonsSupeProyDocenteVisBoletin,8,1);
        dialogsSupeProyDocente.addObjToDialog(imgButtonsSupeProyDocenteVisBolFin,8,1);
		dialogsSupeProyDocente.addObjToDialog(imgButtonsSupeProyDocenteLimpiar,8,1);
        dialogsSupeProyDocente.addObjToDialog(imgButtonsSupeProyDocenteBuscar,8,1);
        dialogsSupeProyDocente.addObjToDialog(imgButtonsSupeProyDocenteSalir,8,1); 
        dialogsSupeProyDocente.adjAllMarginObj(8,1,10);
        dialogsSupeProyDocente.leftMarginObj(8,1,0,0);
	},	
		
	gridsSupeProyDocente_Init: function(){
        gridsSupeProyDocente.setFixColRow(false,true);
        gridsSupeProyDocente.addTitleVectorX(['Nº','C.i.','Nombre','Apellido','Proyecto','Sección','Boletin Creado','idProy','idPos','idSec']);
        gridsSupeProyDocente.showData();
        gridsSupeProyDocente.setSizeCol(1,20);
        gridsSupeProyDocente.setSizeCol(2,83);
        gridsSupeProyDocente.setSizeCol(3,172);
        gridsSupeProyDocente.setSizeCol(4,172);
        gridsSupeProyDocente.setSizeCol(5,203);
        gridsSupeProyDocente.setSizeCol(6,55);
        gridsSupeProyDocente.setSizeCol(7,90);
        gridsSupeProyDocente.setSizeCol(8,0);
        gridsSupeProyDocente.hideCol(8);
        gridsSupeProyDocente.setSizeCol(9,0);
        gridsSupeProyDocente.hideCol(9);
        gridsSupeProyDocente.setSizeCol(10,0);
        gridsSupeProyDocente.hideCol(10);
	},
	
	create: function(){
        /////////////////////////////////////////////////INFORMACIÓN GENERAL/////////////////////////////////////////////////
		dialogsSupeProyDocente = dialogs.create('dialogsSupeProyDocente',0,0,843,648,'SUPERVISION DE PROYECTO');   
		dialogsSupeProyDocente.setAdjY(20);
		pcbSupeProyDocenteOrganizacion = powerComboBox.create('pcbSupeProyDocenteOrganizacion','pcbSupeProyDocenteOrganizacion','Organización (+):',1,100);
		pcbSupeProyDocenteOrganizacion.setValidEmpty();
		pcbSupeProyDocenteOrganizacion.enableReadOnlyEditor();
		pcbSupeProyDocenteOrganizacion.addEmptyOption ();
		pcbSupeProyDocenteSuborganizacion = powerComboBox.create('pcbSupeProyDocenteSuborganizacion','pcbSupeProyDocenteSuborganizacion','Suborganización (^):',1,120);
		pcbSupeProyDocenteSuborganizacion.setValidEmpty();
		pcbSupeProyDocenteSuborganizacion.enableReadOnlyEditor();
		pcbSupeProyDocenteSuborganizacion.addEmptyOption();
		pcbSupeProyDocenteCarrera = powerComboBox.create('pcbSupeProyDocenteCarrera','pcbSupeProyDocenteCarrera','Carrera (^):',1,75);
		pcbSupeProyDocenteCarrera.setValidEmpty();
		pcbSupeProyDocenteCarrera.enableReadOnlyEditor();
		pcbSupeProyDocenteCarrera.addEmptyOption();
		pcbSupeProyDocentePeriodo = powerComboBox.create('pcbSupeProyDocentePeriodo','pcbSupeProyDocentePeriodo','Periodo (+):',1,100);
		pcbSupeProyDocentePeriodo.setValidEmpty();
		pcbSupeProyDocentePeriodo.enableReadOnlyEditor();
		pcbSupeProyDocentePeriodo.addEmptyOption();
		pcbSupeProyDocenteLapso = powerComboBox.create('pcbSupeProyDocenteLapso','pcbSupeProyDocenteLapso','Lapso (+):',1,120);
		pcbSupeProyDocenteLapso.setValidEmpty();
		pcbSupeProyDocenteLapso.enableReadOnlyEditor();
		pcbSupeProyDocenteLapso.addEmptyOption();
		editsSupeProyDocenteCi = edits.create('editsSupeProyDocenteCi','editsSupeProyDocenteCi','C.i. (*):',1,100,'normal');
		editsSupeProyDocenteCi.setValidInteger();
		editsSupeProyDocenteCi.setValidEmpty();
		editsSupeProyDocenteCi.setFieldFind(true);
		editsSupeProyDocenteCi.setSizeEdit(148);
		editsSupeProyDocenteNombre = edits.create('editsSupeProyDocenteNombre','editsSupeProyDocenteNombre','Nombre (*):',1,120,'normal');
		editsSupeProyDocenteNombre.setValidEmpty();
		editsSupeProyDocenteNombre.setFieldFind(true);
		editsSupeProyDocenteNombre.setSizeEdit(148);
		editsSupeProyDocenteApellido = edits.create('editsSupeProyDocenteApellido','editsSupeProyDocenteApellido','Apellido (*):',1,75,'normal');
		editsSupeProyDocenteApellido.setValidEmpty();
		editsSupeProyDocenteApellido.setFieldFind(true);
		editsSupeProyDocenteApellido.setSizeEdit(148);
		gridsSupeProyDocente = grids.create('gridsSupeProyDocente',20,10); 
		imgButtonsSupeProyDocenteVisProyecto = imgButtons.create('imgButtonsSupeProyDocenteVisProyecto','Ver Proyecto','visualizar_1.png');
		imgButtonsSupeProyDocenteVisBoletin = imgButtons.create('imgButtonsSupeProyDocenteVisBoletin','Ver Boletín','visualizar_2.png');
		imgButtonsSupeProyDocenteVisBolFin = imgButtons.create('imgButtonsSupeProyDocenteVisBolFin','Ver Boletín Final','visualizar_2.png');
		imgButtonsSupeProyDocenteLimpiar = imgButtons.create('imgButtonsSupeProyDocenteLimpiar','Limpiar','limpiar.png');
		imgButtonsSupeProyDocenteBuscar = imgButtons.create('imgButtonsSupeProyDocenteBuscar','Buscar','icono_buscar.png');
		imgButtonsSupeProyDocenteSalir = imgButtons.create('imgButtonsSupeProyDocenteSalir','Salir','salir.png');
        imgButtonsSupeProyDocenteVisProyecto.setDimension(124,22);
        imgButtonsSupeProyDocenteVisBoletin.setDimension(124,22);
        imgButtonsSupeProyDocenteVisBolFin.setDimension(124,22);
        imgButtonsSupeProyDocenteLimpiar.setDimension(124,22);
        imgButtonsSupeProyDocenteBuscar.setDimension(124,22);
        imgButtonsSupeProyDocenteSalir.setDimension(124,22);
	},

	init: function(){
		this.create();
		this.setEvents();
		this.dialogsSupeProyDocente_Init();
		this.gridsSupeProyDocente_Init();
		this.createMWs(); 
	},
	
	limpiarFind: function(ix) {
		editsSupeProyDocenteCi.hideId = -1;
		this.hideIdProy = 0;
		this.hideIdPos = 0;
		this.hideIdSec = 0;
		gridsSupeProyDocente.clean();
    	imgButtonsSupeProyDocenteVisProyecto.setDisable();
    	imgButtonsSupeProyDocenteVisBoletin.setDisable();
    	imgButtonsSupeProyDocenteVisBolFin.setDisable();
		dialogsSupeProyDocente.setMsg("");

  		switch (ix) {
		case 1: 
			editsSupeProyDocenteNombre.setValue("");
			editsSupeProyDocenteApellido.setValue("");  		
			break;
		case 2: 
			editsSupeProyDocenteCi.setValue("");
			editsSupeProyDocenteApellido.setValue("");  		
			break;
		default:
			editsSupeProyDocenteCi.setValue("");
			editsSupeProyDocenteNombre.setValue("");
			break;
		} 
  	},
  	
	limpiar: function() {
		this.hideIdProy = 0;
		this.hideIdPos = 0;
		this.hideIdSec = 0;
		editsSupeProyDocenteCi.hideId = -1;
		dialogsSupeProyDocente.setMsg("");
		Tool.rstPwrCmb(pcbSupeProyDocenteOrganizacion);
		Tool.rstPwrCmb(pcbSupeProyDocenteSuborganizacion);
		Tool.rstPwrCmb(pcbSupeProyDocenteCarrera);
		Tool.rstPwrCmb(pcbSupeProyDocentePeriodo);
		Tool.rstPwrCmb(pcbSupeProyDocenteLapso);
		editsSupeProyDocenteCi.setValue("");
		editsSupeProyDocenteNombre.setValue("");
		editsSupeProyDocenteApellido.setValue("");
		gridsSupeProyDocente.clean();
    	imgButtonsSupeProyDocenteVisProyecto.setDisable();
    	imgButtonsSupeProyDocenteVisBoletin.setDisable();
    	imgButtonsSupeProyDocenteVisBolFin.setDisable();
  		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
    },

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsSupeProyDocente, pcbSupeProyDocenteOrganizacion, 0, 1, json('getData'));
    	Tool.getContext(dialogsSupeProyDocente, pcbSupeProyDocenteOrganizacion, pcbSupeProyDocenteSuborganizacion, pcbSupeProyDocenteCarrera, "Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsSupeProyDocente, pcbConsProAprPosicion, 0, 1, pcbSupeProyDocenteCarrera.setModeReturnGetText(2))");
		Tool.getContext(dialogsSupeProyDocente, pcbSupeProyDocenteOrganizacion, pcbSupeProyDocenteSuborganizacion, pcbSupeProyDocenteCarrera, this.windowName + ".resetElements('car')");
	},
    
    resetElements: function(element) {
		gridsSupeProyDocente.clean();
    	imgButtonsSupeProyDocenteVisProyecto.setDisable();
    	imgButtonsSupeProyDocenteVisBoletin.setDisable();
    	imgButtonsSupeProyDocenteVisBolFin.setDisable();
		
		if (element == 'org') {
			Tool.rstPwrCmb(pcbSupeProyDocenteCarrera);
			Tool.rstPwrCmb(pcbSupeProyDocentePeriodo);
			Tool.rstPwrCmb(pcbSupeProyDocenteLapso);
	    	if (pcbSupeProyDocenteOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsSupeProyDocente, pcbSupeProyDocenteSuborganizacion, 1, 2, pcbSupeProyDocenteOrganizacion);		
		}
		else if (element == 'sub') {
			Tool.rstPwrCmb(pcbSupeProyDocentePeriodo);
			Tool.rstPwrCmb(pcbSupeProyDocenteLapso);
	    	if (pcbSupeProyDocenteSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsSupeProyDocente, pcbSupeProyDocenteCarrera, -1, 3, pcbSupeProyDocenteSuborganizacion);		
		}
		else if (element == 'car') {
			Tool.rstPwrCmb(pcbSupeProyDocenteLapso);
	    	if (pcbSupeProyDocenteCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsSupeProyDocente, pcbSupeProyDocentePeriodo, 0, 1, pcbSupeProyDocenteCarrera.setModeReturnGetText(5));
		}
		else if (element == 'per') {
	    	if (pcbSupeProyDocentePeriodo.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantLapso', dialogsSupeProyDocente, pcbSupeProyDocenteLapso, 3, 0, pcbSupeProyDocentePeriodo);
	    }
	},

    buscar : function() {
		if (pcbSupeProyDocenteOrganizacion.valid(dialogsSupeProyDocente)) 
			if (pcbSupeProyDocenteSuborganizacion.valid(dialogsSupeProyDocente)) 
				if (pcbSupeProyDocenteCarrera.valid(dialogsSupeProyDocente)) 
					if (pcbSupeProyDocentePeriodo.valid(dialogsSupeProyDocente)) 
						if (pcbSupeProyDocenteLapso.valid(dialogsSupeProyDocente)) {
					    	imgButtonsSupeProyDocenteVisProyecto.setDisable();
					    	imgButtonsSupeProyDocenteVisBoletin.setDisable();
					    	imgButtonsSupeProyDocenteVisBolFin.setDisable();
							if ((editsSupeProyDocenteCi.getValue() != '' && editsSupeProyDocenteNombre.getValue() != '' && editsSupeProyDocenteApellido.getValue() != '') || (editsSupeProyDocenteCi.getValue() == '' && editsSupeProyDocenteNombre.getValue() == '' && editsSupeProyDocenteApellido.getValue() == '')) {
								Tool.getGridData('ReportObject', 'getListadoProyDocente', dialogsSupeProyDocente, gridsSupeProyDocente, false, pcbSupeProyDocenteLapso, pcbSupeProyDocentePeriodo, pcbSupeProyDocenteCarrera.setModeReturnGetText(2), new MiniDataSet(editsSupeProyDocenteCi.hideId, 'int', true), new MiniDataSet(editsSupeProyDocenteCi.hideId, 'int', true));	    		
							}
							else {
								if (editsSupeProyDocenteCi.getValue() != '' || editsSupeProyDocenteNombre.getValue() != '' || editsSupeProyDocenteApellido.getValue() != '') {
									ResuBusqueda.setObjectExtFnc(editsSupeProyDocenteCi, editsSupeProyDocenteNombre, editsSupeProyDocenteApellido, 'SupeProyDocente.buscar()');
									Tool.getGridData('MantObject', 'getMantPersProf', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsSupeProyDocenteCi, editsSupeProyDocenteCi, editsSupeProyDocenteNombre, editsSupeProyDocenteNombre, editsSupeProyDocenteApellido, editsSupeProyDocenteApellido);
								}
							}
						}
    },

	setEvents : function() {
		pcbSupeProyDocenteOrganizacion.onChange(this.windowName + ".resetElements('org')");
		pcbSupeProyDocenteSuborganizacion.onChange(this.windowName + ".resetElements('sub')");
		pcbSupeProyDocenteCarrera.onChange(this.windowName + ".resetElements('car')");
		pcbSupeProyDocentePeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbSupeProyDocenteLapso.onChange(this.windowName + ".buscar()");
		editsSupeProyDocenteCi.onEnter(this.windowName + ".buscar()");
		editsSupeProyDocenteCi.onChange(this.windowName + ".limpiarFind(1)");
		editsSupeProyDocenteNombre.onEnter(this.windowName + ".buscar()");
		editsSupeProyDocenteNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsSupeProyDocenteApellido.onEnter(this.windowName + ".buscar()");
		editsSupeProyDocenteApellido.onChange(this.windowName + ".limpiarFind(3)");
		gridsSupeProyDocente.onClickCells(this.windowName + ".setData()");
		imgButtonsSupeProyDocenteVisProyecto.onClick(this.windowName + ".getInfRepProy()"); 
		imgButtonsSupeProyDocenteVisBoletin.onClick(this.windowName+".getBoletin()"); 
		imgButtonsSupeProyDocenteVisBolFin.onClick(this.windowName+".getBoletinFinal()"); 
		imgButtonsSupeProyDocenteLimpiar.onClick(this.windowName+".limpiar()"); 
	  	imgButtonsSupeProyDocenteBuscar.onClick(this.windowName+".buscar()");
	  	imgButtonsSupeProyDocenteSalir.onClick("dialogsSupeProyDocente.close()");
    }, 
    
    setData: function() {
    	if (gridsSupeProyDocente.getDataCell(1) != "") {
	    	editsSupeProyDocenteCi.setValue(gridsSupeProyDocente.getDataCell(2));
	    	editsSupeProyDocenteNombre.setValue(gridsSupeProyDocente.getDataCell(3));
	    	editsSupeProyDocenteApellido.setValue(gridsSupeProyDocente.getDataCell(4));
	    	this.hideIdProy = gridsSupeProyDocente.getDataCell(8);
			this.hideIdPos = gridsSupeProyDocente.getDataCell(9);
			this.hideIdSec = gridsSupeProyDocente.getDataCell(10);
	    	imgButtonsSupeProyDocenteVisProyecto.setEnable();
	    	imgButtonsSupeProyDocenteVisBoletin.setEnable();
	    	if (pcbSupeProyDocenteLapso.getOption() == '3er Momento')
	    		imgButtonsSupeProyDocenteVisBolFin.setEnable();
	    	else
	    		imgButtonsSupeProyDocenteVisBolFin.setDisable();
    	}
    },

    getInfRepProy: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		rlx.addInt('reg', this.hideIdProy);
		Tool.cnnSrv("MantObject", "getInfoReporteProyecto", "RepoProyAprendizaje.reporte1()", rlx);
	},
    
    getBoletin: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		rlx.add('reg', pcbSupeProyDocentePeriodo);
		rlx.add('reg', pcbSupeProyDocenteLapso);
		rlx.addInt('reg', this.hideIdPos,true);
		rlx.addStr('reg', this.hideIdSec,true);
		rlx.addStr('reg', '');//recomendacion
		rlx.addInt('reg', -1,true);//idPersona
		if (pcbSupeProyDocenteCarrera.setModeReturnGetText(2).getText() == 103)//CARRERA PRIMARIA
			Tool.cnnSrv('ReportObject', 'getMasivoPrimaria', 'dlgWait.hide()', rlx);
		else//CARRERA INICIAL
			Tool.cnnSrv('ReportObject', 'getMasivoInicial', 'dlgWait.hide()', rlx);
	},
    
    getBoletinFinal: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		rlx.add('reg', pcbSupeProyDocentePeriodo);
		rlx.addInt('reg', -1,true);//idPersona
		rlx.addInt('reg', this.hideIdPos,true);//posicion
		rlx.addInt('reg', this.hideIdSec,true);//seccion
		Tool.cnnSrv('ReportObject', 'getBoletinFinal', 'dlgWait.hide()', rlx);
	}
};