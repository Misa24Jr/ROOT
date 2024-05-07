var dialogsPuntAdicional = new Object();
var pcbPuntAdiOrg = new Object();
var pcbPuntAdiPuntAdiSuborg = new Object();
var pcbPuntAdiCarrera = new Object();
var pcbPuntAdiPeriodo = new Object();
var pcbPuntAdiPosicion = new Object();
var pcbPuntAdiLapso = new Object();
var pcbPuntAdiMateria = new Object();
var pcbPuntAdiSeccion = new Object();
var editsMantAsoPuntAdiCi = new Object();
var editsMantAsoPuntAdiNombre = new Object();
var editsMantAsoPuntAdiApellido = new Object();
var pcbMantAsoPuntAdiPunAdicional = new Object();
var gridsPuntAdicional = new Object();
var imgButtonsPuntAdiLimpiar = new Object();
var imgButtonsPuntAdiBuscar = new Object();
var imgButtonsPuntAdiSalir = new Object();
var mwPuntAdicional = new Object();// minWindow

var PuntAdicional = {
	windowName : 'PuntAdicional',
	isCreate : false,
	idPensum : 0,

	show: function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsPuntAdicional.isByClean())
			this.limpiar('lmp');		
		dialogsPuntAdicional.show();
	},
	
	hide: function(){
		dialogsPuntAdicional.hide();
	},
	
    createMWs: function(){
        mwPuntAdicional = desktop.addMinWindow('P.Adicional', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsPuntAdicional.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsPuntAdicional_Init : function() {
        dialogsPuntAdicional.setMinimizeXY(0,0);
        dialogsPuntAdicional.setCenterScreen();
        dialogsPuntAdicional.addSpace(0,0,20);
        dialogsPuntAdicional.addLn(1,1,1);
		dialogsPuntAdicional.setHeightCell(1,1,15);  
		var c1 = container.create("c1",'Datos Generales',1);
		c1.setDimension(778,98);
		c1.setMarginLeftBarTitle(345);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#7e7e7e');
		c1.addObject(pcbPuntAdiOrg, 30, 55);
		c1.addObject(pcbPuntAdiPuntAdiSuborg, 289, 55);
		c1.addObject(pcbPuntAdiCarrera, 569, 55);
		c1.addObject(pcbPuntAdiPeriodo, 30, 80);
		c1.addObject(pcbPuntAdiPosicion, 289, 80);
		c1.addObject(pcbPuntAdiLapso, 569, 80);
		c1.addObject(pcbPuntAdiMateria, 30, 105);
		c1.addObject(pcbPuntAdiSeccion, 568, 105);
		dialogsPuntAdicional.addObjToDialog(c1, 2, 1);
		dialogsPuntAdicional.addLn(3,1,1);
		var c2 = container.create("c2",'Datos del Alumno',1);
		c2.setDimension(778,51);
		c2.setMarginLeftBarTitle(315);
		c2.setPropertyMarco('groove',1,'#7e7e7e');
		c2.setFontTitle('verdana', 11, '#7e7e7e');
		c2.addObject(editsMantAsoPuntAdiCi, 30, 173);
		editsMantAsoPuntAdiCi.setSizeEdit(149);
		editsMantAsoPuntAdiCi.setMaxLength(16); 
		c2.addObject(editsMantAsoPuntAdiNombre, 289, 173);
		editsMantAsoPuntAdiNombre.setSizeEdit(149);
		c2.addObject(editsMantAsoPuntAdiApellido, 570, 173);
		editsMantAsoPuntAdiApellido.setSizeEdit(149);
		dialogsPuntAdicional.addObjToDialog(c2, 4, 1);
		dialogsPuntAdicional.addObject(pcbMantAsoPuntAdiPunAdicional, 289, 221);
		dialogsPuntAdicional.addObject(gridsPuntAdicional.getObject(), 20, 247);
        dialogsPuntAdicional.addObject(imgButtonsPuntAdiLimpiar, 229, 594);
	    dialogsPuntAdicional.addObject(imgButtonsPuntAdiBuscar, 364, 594);	
        dialogsPuntAdicional.addObject(imgButtonsPuntAdiSalir, 499, 594);
        imgButtonsPuntAdiBuscar.setDimension(90,22);
        imgButtonsPuntAdiLimpiar.setDimension(90,22);
        imgButtonsPuntAdiSalir.setDimension(90,22);
    },
  
    gridsPuntAdicional_Init : function() {
        gridsPuntAdicional.setFixColRow(false,true);
        gridsPuntAdicional.addTitleVectorX(['C.i:','Apellido','Nombre','Nota','PA','DEF.','idRsmLps']);
        gridsPuntAdicional.showData();
        gridsPuntAdicional.setSizeCol(1,91);
        gridsPuntAdicional.setSizeCol(2,250);
        gridsPuntAdicional.setSizeCol(3,250);
        gridsPuntAdicional.setSizeCol(4,60);
        gridsPuntAdicional.setSizeCol(5,60);
        gridsPuntAdicional.setSizeCol(6,60);
        gridsPuntAdicional.setSizeCol(7,0);
        gridsPuntAdicional.hideCol(7);
    },

    create : function() {
    	dialogsPuntAdicional = dialogs.create('dialogsPuntAdicional',0,0,819,604,'PUNTO ADICIONAL');
    	dialogsPuntAdicional.setAdjY(20);
    	pcbPuntAdiOrg = powerComboBox.create('pcbPuntAdiOrg','pcbPuntAdiOrg','Organización (+):',1,100);
    	pcbPuntAdiOrg.setValidEmpty();
    	pcbPuntAdiOrg.addEmptyOption();
    	pcbPuntAdiOrg.enableReadOnlyEditor();
    	pcbPuntAdiPuntAdiSuborg = powerComboBox.create('pcbPuntAdiPuntAdiSuborg','pcbPuntAdiPuntAdiSuborg','Suborganización (^):',1,120);
    	pcbPuntAdiPuntAdiSuborg.setValidEmpty();
    	pcbPuntAdiPuntAdiSuborg.addEmptyOption();
    	pcbPuntAdiPuntAdiSuborg.enableReadOnlyEditor();
    	pcbPuntAdiCarrera = powerComboBox.create('pcbPuntAdiCarrera','pcbPuntAdiCarrera','Carrera (^):',1,69);
    	pcbPuntAdiCarrera.setValidEmpty();
    	pcbPuntAdiCarrera.addEmptyOption();
    	pcbPuntAdiCarrera.enableReadOnlyEditor();
    	pcbPuntAdiPeriodo = powerComboBox.create('pcbPuntAdiPeriodo','pcbPuntAdiPeriodo','Periodo (+):',1,100);
    	pcbPuntAdiPeriodo.setValidEmpty();
    	pcbPuntAdiPeriodo.addEmptyOption();
    	pcbPuntAdiPeriodo.enableReadOnlyEditor();
    	pcbPuntAdiPosicion = powerComboBox.create('pcbPuntAdiPosicion','pcbPuntAdiPosicion','Posición (^):',1,120);
    	pcbPuntAdiPosicion.setValidEmpty();
    	pcbPuntAdiPosicion.addEmptyOption();
    	pcbPuntAdiPosicion.enableReadOnlyEditor();
    	pcbPuntAdiPosicion.setFieldFind(true);
    	pcbPuntAdiLapso = powerComboBox.create('pcbPuntAdiLapso','pcbPuntAdiLapso','Lapso (^):',1,69);
    	pcbPuntAdiLapso.setValidEmpty();
    	pcbPuntAdiLapso.addEmptyOption();
    	pcbPuntAdiLapso.enableReadOnlyEditor();
    	pcbPuntAdiMateria = powerComboBox.create('pcbPuntAdiMateria','pcbPuntAdiMateria','Materia (^):',1,100);
    	pcbPuntAdiMateria.setValidEmpty();
    	pcbPuntAdiMateria.addEmptyOption();
    	pcbPuntAdiMateria.enableReadOnlyEditor();
    	pcbPuntAdiMateria.setDataType('string');
    	pcbPuntAdiMateria.setFieldFind(true);
		pcbPuntAdiMateria.setWidthCombo(407);
    	pcbPuntAdiSeccion = powerComboBox.create('pcbPuntAdiSeccion','pcbPuntAdiSeccion','Sección (^):',1,70);
    	pcbPuntAdiSeccion.setValidEmpty();
    	pcbPuntAdiSeccion.addEmptyOption();
    	pcbPuntAdiSeccion.enableReadOnlyEditor();
    	editsMantAsoPuntAdiCi = edits.create('editsMantAsoPuntAdiCi','editsMantAsoPuntAdiCi','C.i:',1,100,'normal');
    	editsMantAsoPuntAdiCi.setValidInteger();
    	editsMantAsoPuntAdiCi.setValidEmpty();
    	editsMantAsoPuntAdiCi.readOnly(true);  
    	editsMantAsoPuntAdiNombre = edits.create('editsMantAsoPuntAdiNombre','editsMantAsoPuntAdiNombre','Nombre:',1,120,'normal');
    	editsMantAsoPuntAdiNombre.setValidEmpty();
    	editsMantAsoPuntAdiNombre.readOnly(true);  
    	editsMantAsoPuntAdiApellido = edits.create('editsMantAsoPuntAdiApellido','editsMantAsoPuntAdiApellido','Apellido:',1,68,'normal');
    	editsMantAsoPuntAdiApellido.setValidEmpty();	
    	editsMantAsoPuntAdiApellido.readOnly(true);  
    	pcbMantAsoPuntAdiPunAdicional = powerComboBox.create('pcbMantAsoPuntAdiPunAdicional','pcbMantAsoPuntAdiPunAdicional','Punto Adicional:',1,120);
    	pcbMantAsoPuntAdiPunAdicional.setValidEmpty();
    	pcbMantAsoPuntAdiPunAdicional.addEmptyOption();
    	pcbMantAsoPuntAdiPunAdicional.enableReadOnlyEditor();
    	pcbMantAsoPuntAdiPunAdicional.idRsmLap = "";
    	pcbMantAsoPuntAdiPunAdicional.setWidthCombo(30);
    	gridsPuntAdicional = grids.create('gridsPuntAdicional',15,7);
    	imgButtonsPuntAdiLimpiar = imgButtons.create('imgButtonsPuntAdiLimpiar','Limpiar','limpiar.png');
    	imgButtonsPuntAdiBuscar = imgButtons.create('imgButtonsPuntAdiBuscar','Buscar','icono_buscar.png');
    	imgButtonsPuntAdiSalir = imgButtons.create('imgButtonsPuntAdiSalir','Salir','salir.png');
    },

    init : function() {
    	this.create();
    	this.setEvents();
    	this.dialogsPuntAdicional_Init();  
    	this.gridsPuntAdicional_Init();
    	this.createMWs();
    },

	limpiar: function(tipo) {
		editsMantAsoPuntAdiCi.setValue("");
        editsMantAsoPuntAdiNombre.setValue("");
        editsMantAsoPuntAdiApellido.setValue("");
        pcbMantAsoPuntAdiPunAdicional.setSelectedIndex(0);
		pcbMantAsoPuntAdiPunAdicional.idRsmLap = "";
		gridsPuntAdicional.clean();
  		dialogsPuntAdicional.setMsg("");
  		if (tipo == "srv") 
  			this.loadDataGrid();
  		else {
			pcbPuntAdiOrg.setSelectedIndex(0);
	  		Tool.rstPwrCmb(pcbPuntAdiPuntAdiSuborg);
	  		Tool.rstPwrCmb(pcbPuntAdiCarrera);
	  		Tool.rstPwrCmb(pcbPuntAdiPeriodo);
	  		Tool.rstPwrCmb(pcbPuntAdiPosicion);
	  		Tool.rstPwrCmb(pcbPuntAdiLapso);
	  		Tool.rstPwrCmb(pcbPuntAdiMateria);
	  		Tool.rstPwrCmb(pcbPuntAdiSeccion);
  		}
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},
	
	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsPuntAdicional, pcbPuntAdiOrg, 0, 1, json('getData'));
		Tool.getContext(dialogsPuntAdicional, pcbPuntAdiOrg, pcbPuntAdiPuntAdiSuborg, pcbPuntAdiCarrera, this.windowName + ".resetElements('carr')");
	},
	
	loadDataGrid : function() {   
		if (pcbPuntAdiOrg.valid(dialogsPuntAdicional))
			if (pcbPuntAdiPuntAdiSuborg.valid(dialogsPuntAdicional))
				if (pcbPuntAdiCarrera.valid(dialogsPuntAdicional))
					if (pcbPuntAdiPeriodo.valid(dialogsPuntAdicional))
						if (pcbPuntAdiPosicion.valid(dialogsPuntAdicional))
							if (pcbPuntAdiMateria.valid(dialogsPuntAdicional))
								if (pcbPuntAdiSeccion.valid(dialogsPuntAdicional))	 	
									Tool.getGridData('MantObject', 'getPtoAdicionalDefLapso', dialogsPuntAdicional, gridsPuntAdicional, false, pcbPuntAdiLapso, pcbPuntAdiSeccion);
    },
    
	setEvents: function() {
		pcbPuntAdiOrg.onChange(this.windowName + ".resetElements('org')");
		pcbPuntAdiPuntAdiSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbPuntAdiCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbPuntAdiPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbPuntAdiPosicion.onChange(this.windowName + ".resetElements('pos')");
		pcbPuntAdiMateria.onChange(this.windowName + ".resetElements('mat')");
		pcbPuntAdiLapso.onChange(this.windowName + ".resetElements('lap')");
		pcbPuntAdiSeccion.onChange(this.windowName + ".resetElements('sec')");
		pcbMantAsoPuntAdiPunAdicional.onChange(this.windowName + ".coreUpdate()");
		gridsPuntAdicional.onClickCells(this.windowName + ".setData()");
  		imgButtonsPuntAdiLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsPuntAdiBuscar.onClick(this.windowName + ".loadDataGrid()");
        imgButtonsPuntAdiSalir.onClick('dialogsPuntAdicional.close()');
    },
    
	resetElements: function(element) {
		editsMantAsoPuntAdiCi.setValue("");
        editsMantAsoPuntAdiNombre.setValue("");
        editsMantAsoPuntAdiApellido.setValue("");
        pcbMantAsoPuntAdiPunAdicional.setSelectedIndex(0);
		pcbMantAsoPuntAdiPunAdicional.idRsmLap = "";
		gridsPuntAdicional.clean();		
		
		if (element == 'org') {
			Tool.rstPwrCmb(pcbPuntAdiPuntAdiSuborg);
	  		Tool.rstPwrCmb(pcbPuntAdiCarrera);
	  		Tool.rstPwrCmb(pcbPuntAdiPeriodo);
			Tool.rstPwrCmb(pcbPuntAdiPosicion);
			Tool.rstPwrCmb(pcbPuntAdiSeccion);
	  		Tool.rstPwrCmb(pcbPuntAdiMateria);
	    	if (pcbPuntAdiOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsPuntAdicional, pcbPuntAdiPuntAdiSuborg, 1, 2, pcbPuntAdiOrg);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbPuntAdiCarrera);
	  		Tool.rstPwrCmb(pcbPuntAdiPeriodo);
			Tool.rstPwrCmb(pcbPuntAdiPosicion);
			Tool.rstPwrCmb(pcbPuntAdiSeccion);
	  		Tool.rstPwrCmb(pcbPuntAdiMateria);
	    	if (pcbPuntAdiPuntAdiSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsPuntAdicional, pcbPuntAdiCarrera, -1, 3, pcbPuntAdiPuntAdiSuborg);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbPuntAdiPeriodo);
			Tool.rstPwrCmb(pcbPuntAdiPosicion);
			Tool.rstPwrCmb(pcbPuntAdiSeccion);
	  		Tool.rstPwrCmb(pcbPuntAdiMateria);
	    	if (pcbPuntAdiCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsPuntAdicional, pcbPuntAdiPeriodo, 0, 1, pcbPuntAdiCarrera.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
			Tool.rstPwrCmb(pcbPuntAdiSeccion);
	  		Tool.rstPwrCmb(pcbPuntAdiMateria);
	    	Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsPuntAdicional, pcbPuntAdiPosicion, 0, 1, pcbPuntAdiCarrera.setModeReturnGetText(2));        		
    	} 
    	else if (element == 'pos') {
    		Tool.getPowerComboData('MantObject', 'getMantLapso', dialogsPuntAdicional, pcbPuntAdiLapso, 3, 0, pcbPuntAdiPeriodo);  	
    	} 
    	else if (element == 'lap') {
			Tool.rstPwrCmb(pcbPuntAdiSeccion);
    		Tool.getPowerComboData('ReportObject', 'getMateriaPlanifProf', dialogsPuntAdicional, pcbPuntAdiMateria, 0, 1, pcbPuntAdiPeriodo, pcbPuntAdiCarrera.setModeReturnGetText(2), pcbPuntAdiPosicion);
    	} 
    	else if (element == 'mat') {
    		Tool.getPowerComboData('ReportObject', 'getSeccionPlanifProf', dialogsPuntAdicional, pcbPuntAdiSeccion, -1, 1, pcbPuntAdiPeriodo, pcbPuntAdiCarrera.setModeReturnGetText(2), pcbPuntAdiPosicion, pcbPuntAdiMateria);
    	}
    	else if (element == 'sec') {
    		this.loadDataGrid();
    	}
	},
	
  	setData : function() {
		if (gridsPuntAdicional.getDataCell(1) != "") {
			editsMantAsoPuntAdiCi.setValue(gridsPuntAdicional.getDataCell(1));
	        editsMantAsoPuntAdiApellido.setValue(gridsPuntAdicional.getDataCell(2));
	        editsMantAsoPuntAdiNombre.setValue(gridsPuntAdicional.getDataCell(3));
	        
	        Tool.rstPwrCmb(pcbMantAsoPuntAdiPunAdicional);
	        for (var pto = 0; pto <= 20-gridsPuntAdicional.getDataCell(4); pto++)
	    		pcbMantAsoPuntAdiPunAdicional.addOptionAndSimpleValue(null, pto, pto);

	        if (gridsPuntAdicional.getDataCell(5) != "")
	        	pcbMantAsoPuntAdiPunAdicional.findOption(gridsPuntAdicional.getDataCell(5));
	        
	        pcbMantAsoPuntAdiPunAdicional.idRsmLap = gridsPuntAdicional.getDataCell(7)
		}     			
	},
	
	coreUpdate: function() {
		var rlx = xmlStructs.createRecordList("rlx");
		
		if (pcbPuntAdiOrg.valid(dialogsPuntAdicional))
			if (pcbPuntAdiPuntAdiSuborg.valid(dialogsPuntAdicional))
				if (pcbPuntAdiCarrera.valid(dialogsPuntAdicional))
					if (pcbPuntAdiPeriodo.valid(dialogsPuntAdicional))
						if (pcbPuntAdiPosicion.valid(dialogsPuntAdicional))
							if (pcbPuntAdiMateria.valid(dialogsPuntAdicional))
								if (pcbPuntAdiSeccion.valid(dialogsPuntAdicional))
									if (pcbMantAsoPuntAdiPunAdicional.valid(dialogsPuntAdicional)) {
										rlx.add('reg', pcbMantAsoPuntAdiPunAdicional);
										rlx.addInt('reg', pcbMantAsoPuntAdiPunAdicional.idRsmLap);
										Tool.cnnSrv('MantObject', 'modificarPuntoAdicional', this.windowName + ".limpiar('srv')", rlx);
									}
  	 } 
};