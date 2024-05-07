var dialogsReptConstancias = {};
var tabsReptConst = {};
var editsReptConstCi = {};
var editsReptConstNombre = {};
var editsReptConstApellido = {};
var pcbReptConstCarrera = {};
var pcbReptConstPeriodo = {};
var pcbReptConstOrg = {};
var pcbReptConstSuborg = {};
var pcbReptConstCarrera2 = {};
var pcbReptConstPeriodo2 = {};
var pcbReptConstPosicion = {};
var pcbReptConstSeccion = {};
var pcbReptConstPlantilla = {};
var pcbReptConstLapso = {};
var gridReptConst = {};
var imgButtonsReptConstReporte = {};
var imgButtonsReptConstLimpiar = {};
var imgButtonsReptConstBuscar = {};
var imgButtonsReptConstSalir = {}; 
var mwReptConstancias = {};// minWindow

var ReptConstancias = {
    windowName: 'ReptConstancias',
    isCreate: false,
	
    show: function() {
        if (!this.isCreate) {
			VistapreviaConstancia.show();
			VistapreviaConstancia.close();
            this.init();
            this.isCreate = true;
        }
        if (dialogsReptConstancias.isByClean()) 
            this.limpiar();
        dialogsReptConstancias.show();
    },
    
    hide: function() {
        dialogsReptConstancias.hide();
    },
    
    createMWs: function() {
        mwReptConstancias = desktop.addMinWindow('R.Constancias', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsReptConstancias.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsReptConstancias_Init: function() {
    	dialogsReptConstancias.setMinimizeXY(0, 0);
    	dialogsReptConstancias.setCenterScreen();
    	dialogsReptConstancias.addSpace(0, 0, 26);
        dialogsReptConstancias.addLn(1,1,1);
        dialogsReptConstancias.setHeightCell(1,1,10);
        dialogsReptConstancias.addObjToDialog(tabsReptConst, 2, 1);  
    	dialogsReptConstancias.addObject(pcbReptConstPlantilla,30,140);
    	dialogsReptConstancias.addObject(pcbReptConstLapso,570,140);
    	dialogsReptConstancias.addObject(gridReptConst.getObject(), 25, 185);
		dialogsReptConstancias.addObject(imgButtonsReptConstReporte,200,378);
		dialogsReptConstancias.addObject(imgButtonsReptConstLimpiar,310,378);
		dialogsReptConstancias.addObject(imgButtonsReptConstBuscar,420,378);
		dialogsReptConstancias.addObject(imgButtonsReptConstSalir,530,378);
	},
    
    tabsReptConst_Init: function() {
		tabsReptConst.showPanel(0);
		tabsReptConst.hideTab(1);
		tabsReptConst.setSizeText(12);
		tabsReptConst.setFontFamily('Tw Cen MT Condensed Extra Bold');
		tabsReptConst.setBorderWidthPanel(0);       	
		///////////////////////////////////PANEL PLANILLAS///////////////////////////////////////////////    
		var c1 = container.create("c1");
		c1.addObject(editsReptConstCi,30,90);
		c1.addObject(editsReptConstNombre,290,90);
		c1.addObject(editsReptConstApellido,571,90);
		c1.addObject(pcbReptConstCarrera,30,115);
		c1.addObject(pcbReptConstPeriodo,290,115);
		tabsReptConst.addObjToGridPanel(0, c1, 1, 1);		
		////////////////////////////////////////PANEL ASIGNATURAS////////////////////////////////////////////    		
		var c2 = container.create("c2");
		c2.addObject(pcbReptConstOrg,30,90);		
		c2.addObject(pcbReptConstSuborg,290,90);
		c2.addObject(pcbReptConstCarrera2,570,90);
		c2.addObject(pcbReptConstPeriodo2,30,115);
		c2.addObject(pcbReptConstPosicion,290,115);
		c2.addObject(pcbReptConstSeccion,570,115);
		tabsReptConst.addObjToGridPanel(1, c2, 1, 1);		
    },
	
    initGrid : function(){
    	gridReptConst.setFixColRow(false,true);
    	gridReptConst.addTitleVectorX(["id","¿PREGUNTA?","RESPUESTA","etiqueta"]);
    	gridReptConst.showData();
    	gridReptConst.setSizeCol(1, 0);
    	gridReptConst.setSizeCol(2, 327);
    	gridReptConst.setSizeCol(3, 436);
    	gridReptConst.setSizeCol(4, 0);
    	gridReptConst.hideCol(1);
    	gridReptConst.hideCol(4);
    	gridReptConst.setXMLStruct(xmlStructs);
    	gridReptConst.setEditCol(3);
    	gridReptConst.autoSaveEnable();
    },

    create: function() {
    	dialogsReptConstancias = dialogs.create('dialogsReptConstancias', 0, 0, 815, 380, 'CONSTANCIAS');
    	dialogsReptConstancias.setAdjY(70);
    	tabsReptConst = tabs.create('tabsReptConst', 765, 115, ['ESTUDIANTE','SECCION']);	
    	editsReptConstCi = edits.create('editsReptConstCi', 'editsReptConstCi', 'C.i. (*):', 1,103, 'normal');    
    	editsReptConstCi.setValidInteger();
    	editsReptConstCi.setFieldFind(true);
		editsReptConstCi.setSizeEdit(149);
		editsReptConstNombre = edits.create('editsReptConstNombre', 'editsReptConstNombre', 'Nombre (*):', 1,123, 'normal');
		editsReptConstNombre.setValidEmpty();
		editsReptConstNombre.setFieldFind(true);
		editsReptConstNombre.setSizeEdit(149);
		editsReptConstNombre.setMaxLength(50); 
		editsReptConstApellido = edits.create('editsReptConstApellido', 'editsReptConstApellido', 'Apellido (*):', 1,70, 'normal');
		editsReptConstApellido.setValidEmpty();
		editsReptConstApellido.setFieldFind(true);
		editsReptConstApellido.setSizeEdit(149);
		editsReptConstApellido.setMaxLength(50);
		pcbReptConstCarrera = powerComboBox.create('pcbReptConstCarrera','pcbReptConstCarrera','Carrera:',1,103);
		pcbReptConstCarrera.setValidEmpty();
		pcbReptConstCarrera.enableReadOnlyEditor();
		pcbReptConstCarrera.addEmptyOption();
		pcbReptConstPeriodo = powerComboBox.create('pcbReptConstPeriodo','pcbReptConstPeriodo','Periodo (*):',1,123);
		pcbReptConstPeriodo.setValidEmpty();
		pcbReptConstPeriodo.enableReadOnlyEditor();
		pcbReptConstPeriodo.addEmptyOption();
    	pcbReptConstOrg = powerComboBox.create('pcbReptConstOrg','pcbReptConstOrg','Organización (+):',1,103);
    	pcbReptConstOrg.enableReadOnlyEditor();
    	pcbReptConstOrg.addEmptyOption();
    	pcbReptConstOrg.setValidEmpty();
    	pcbReptConstSuborg = powerComboBox.create('pcbReptConstSuborg','pcbReptConstSuborg','Suborganización (^):',1,123);
    	pcbReptConstSuborg.enableReadOnlyEditor();
    	pcbReptConstSuborg.addEmptyOption();
    	pcbReptConstSuborg.setValidEmpty();
    	pcbReptConstCarrera2 = powerComboBox.create('pcbReptConstCarrera2','pcbReptConstCarrera2','Carrera (^):',1,71);
    	pcbReptConstCarrera2.enableReadOnlyEditor();
    	pcbReptConstCarrera2.addEmptyOption();
    	pcbReptConstCarrera2.setValidEmpty();
    	pcbReptConstPeriodo2 = powerComboBox.create('pcbReptConstPeriodo2','pcbReptConstPeriodo2','Periodo:',1,103);
    	pcbReptConstPeriodo2.enableReadOnlyEditor();
    	pcbReptConstPeriodo2.addEmptyOption();
    	pcbReptConstPeriodo2.setValidEmpty();
    	pcbReptConstPosicion = powerComboBox.create('pcbReptConstPosicion','pcbReptConstPosicion','Posición:',1,123);
    	pcbReptConstPosicion.enableReadOnlyEditor();
    	pcbReptConstPosicion.addEmptyOption();
    	pcbReptConstPosicion.setValidEmpty();
    	pcbReptConstPosicion.setFieldFind(true);
    	pcbReptConstSeccion = powerComboBox.create('pcbReptConstSeccion','pcbReptConstSeccion','Sección:',1,71);
    	pcbReptConstSeccion.enableReadOnlyEditor();
    	pcbReptConstSeccion.addEmptyOption();
    	pcbReptConstSeccion.setValidEmpty();
    	pcbReptConstSeccion.setDataType("string");
    	pcbReptConstSeccion.setFieldFind(true);
    	pcbReptConstPlantilla = powerComboBox.create('pcbReptConstPlantilla','pcbReptConstPlantilla','Formato:',1,103);
    	pcbReptConstPlantilla.enableReadOnlyEditor();
    	pcbReptConstPlantilla.addEmptyOption();
    	pcbReptConstPlantilla.setValidEmpty();
    	pcbReptConstPlantilla.setWidthCombo(408);
    	pcbReptConstLapso = powerComboBox.create('pcbReptConstLapso','pcbReptConstLapso','Momento:',1,71);
    	pcbReptConstLapso.enableReadOnlyEditor();
    	pcbReptConstLapso.addEmptyOption();
    	pcbReptConstLapso.setValidEmpty();
		pcbReptConstLapso.setFieldFind(true);
		pcbReptConstLapso.hide();
    	gridReptConst = grids.create("gridReptConst",7,4);
		imgButtonsReptConstReporte = imgButtons.create('imgButtonsReptConstReporte', 'Imprimir', 'print.png');
		imgButtonsReptConstLimpiar = imgButtons.create('imgButtonsReptConstLimpiar', 'Limpiar', 'limpiar.png');
      	imgButtonsReptConstBuscar = imgButtons.create('imgButtonsReptConstBuscar','Buscar','icono_buscar.png');
		imgButtonsReptConstSalir = imgButtons.create('imgButtonsReptConstSalir', 'Salir', 'salir.png');
		imgButtonsReptConstReporte.setDimension(90, 22);
		imgButtonsReptConstLimpiar.setDimension(90, 22);
		imgButtonsReptConstBuscar.setDimension(90, 22);
		imgButtonsReptConstSalir.setDimension(90, 22);
    },
    
    init: function() {
        this.create();
        this.setEvents();
        this.initGrid();
        this.dialogsReptConstancias_Init();
        this.tabsReptConst_Init();
        this.createMWs();
    },
    
    callDataPers : function() {
    	Tool.cnnSrv("InscripObject", "getCargarPersona", this.windowName + ".loadDataPers()")	
    },
    
    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(pcbReptConstSuborg);
	  		Tool.rstPwrCmb(pcbReptConstCarrera2);
	  		Tool.rstPwrCmb(pcbReptConstPeriodo2);
			Tool.rstPwrCmb(pcbReptConstPosicion);
			Tool.rstPwrCmb(pcbReptConstSeccion);
	    	if (pcbReptConstOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsReptConstancias, pcbReptConstSuborg, 1, 2, pcbReptConstOrg);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbReptConstCarrera2);
	  		Tool.rstPwrCmb(pcbReptConstPeriodo2);
			Tool.rstPwrCmb(pcbReptConstPosicion);
			Tool.rstPwrCmb(pcbReptConstSeccion);
	    	if (pcbReptConstSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsReptConstancias, pcbReptConstCarrera2, -1, 3, pcbReptConstSuborg);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbReptConstPeriodo2);
			Tool.rstPwrCmb(pcbReptConstPosicion);
			Tool.rstPwrCmb(pcbReptConstSeccion);
	    	if (pcbReptConstCarrera2.getOption() != "")
	    		Tool.getPowerComboDataFnc(this.windowName + '.callDataPers()', 'MantObject', 'getPeriodoXNivelAcad', dialogsReptConstancias, pcbReptConstPeriodo2, 0, 1, pcbReptConstCarrera2.setModeReturnGetText(5));
	    	else
	    		this.callDataPers();
		}
	    else if (element == 'per') {
	    	Tool.getPowerComboDataFnc(this.windowName + '.getDataLapso()', 'MantObject', 'getMantPensumPosicion', dialogsReptConstancias, pcbReptConstPosicion, 0, 1, pcbReptConstCarrera2.setModeReturnGetText(2));        		
    	} 
    	else if (element == 'pos') {
    		Tool.getPowerComboData('MantObject', 'getMantProyAulaSeccion', dialogsReptConstancias, pcbReptConstSeccion, 0, 1, pcbReptConstCarrera2, pcbReptConstPeriodo2, pcbReptConstPosicion);        		
    	}  
	},

	setDataPeriodoTab : function() {
		imgButtonsReptConstReporte.setEnable();
		pcbReptConstPeriodo2.setSelectedOption(pcbReptConstPeriodo.getOption());
		this.resetElements('per');
	},
	
    setEvents: function() {
    	editsReptConstCi.onEnter(this.windowName + ".buscar()");
		editsReptConstCi.onChange(this.windowName + ".limpiarFind(1)");
		editsReptConstCi.onClick(this.windowName + ".limpiarFind(1)");
		editsReptConstNombre.onEnter(this.windowName + ".buscar()");
		editsReptConstNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsReptConstNombre.onClick(this.windowName + ".limpiarFind(2)");
		editsReptConstApellido.onEnter(this.windowName + ".buscar()");
		editsReptConstApellido.onChange(this.windowName + ".limpiarFind(3)");
		editsReptConstApellido.onClick(this.windowName + ".limpiarFind(3)");
		pcbReptConstPlantilla.onChange(this.windowName + ".loadGrid()");
		pcbReptConstCarrera.onChange("Tool.getPowerComboData('ReportObject', 'getHorarioAlumnoSinEdoPeriodo', dialogsReptConstancias, pcbReptConstPeriodo, 0, 1, new MiniDataSet(editsReptConstCi.hideId, 'int', false))");
		pcbReptConstPeriodo.onChange(this.windowName + ".setDataPeriodoTab()");		
		pcbReptConstOrg.onChange(this.windowName + ".resetElements('org')");
		pcbReptConstSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbReptConstCarrera2.onChange(this.windowName + ".resetElements('carr')");
		pcbReptConstPeriodo2.onChange(this.windowName + ".resetElements('per')");
		pcbReptConstPosicion.onChange(this.windowName + ".resetElements('pos')");
		tabsReptConst.addEventOnTabSelect(0, this.windowName + ".limpiarTabs()");
		tabsReptConst.addEventOnTabSelect(1, this.windowName + ".limpiarTabs()");
		imgButtonsReptConstReporte.onClick(this.windowName + ".coreUpdate()");        
		imgButtonsReptConstLimpiar.onClick(this.windowName + ".limpiar()");
    	imgButtonsReptConstBuscar.onClick(this.windowName + ".buscar()");
		imgButtonsReptConstSalir.onClick("dialogsReptConstancias.close();");
    },
    
    loadGrid : function() {
		if (pcbReptConstPlantilla.setModeReturnGetText(7).getText() == 7)
			pcbReptConstLapso.show();
		else
			pcbReptConstLapso.hide();
		
    	gridReptConst.clean();
		Tool.getGridData('ReportObject', 'getEtiqueta', dialogsReptConstancias, gridReptConst, false, pcbReptConstPlantilla.setModeReturnGetText(0), new MiniDataSet(-9, 'int', false));	
    },

    limpiarFind : function(ix) {
    	editsReptConstCi.hideId = -1;
  		switch (ix) {
		case 1: 
			editsReptConstNombre.setValue("");
			editsReptConstApellido.setValue("");  		
			break;
		case 2: 
			editsReptConstCi.setValue("");
			editsReptConstApellido.setValue("");  		
			break;
		default:
			editsReptConstCi.setValue("");
		    editsReptConstNombre.setValue("");
			break;
		} 
  	},
	
	getDataLapso : function() {
		pcbReptConstPlantilla.setSizeHeight(400);
		if(tabsReptConst.getActualTab()===0 && pcbReptConstPeriodo.getOption() != '') {
			Tool.getPowerComboData('MantObject', 'getMantLapso', dialogsReptConstancias, pcbReptConstLapso, 3, 0, pcbReptConstPeriodo);
		}		
		else if(tabsReptConst.getActualTab()===1 && pcbReptConstPeriodo2.getOption() != '') {
			Tool.getPowerComboData('MantObject', 'getMantLapso', dialogsReptConstancias, pcbReptConstLapso, 3, 0, pcbReptConstPeriodo2);
		}		
	},
	
  	getDataPlantilla : function() {
        Tool.getPowerComboDataFnc(this.windowName + '.getDataLapso()', 'ReportObject', 'getPlantillaConstancia', dialogsReptConstancias, pcbReptConstPlantilla, -1, 1, new MiniDataSet("1,3,4,5,7", 'str', false));        		
  	},
  	
   	loadDataCarrInscrip : function() {
  		Tool.loadPowerComboData(dialogsReptConstancias, pcbReptConstCarrera, -1, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			pcbReptConstCarrera.setSelectedIndex(1); 
  			Tool.getPowerComboDataFnc(this.windowName + '.getDataPlantilla()', 'ReportObject', 'getHorarioAlumnoSinEdoPeriodo', dialogsReptConstancias, pcbReptConstPeriodo, 0, 1, new MiniDataSet(editsReptConstCi.hideId, 'int', false));		
  		}
  		else
  			this.getDataPlantilla();
   	},

   	loadDataInit: function() {
   		Tool.loadPowerComboData(dialogsReptConstancias, pcbReptConstOrg, 0, 1, json('getData'));
   		Tool.getContext(dialogsReptConstancias, pcbReptConstOrg, pcbReptConstSuborg, pcbReptConstCarrera2, this.windowName + ".resetElements('carr')");
   	},

   	loadDataPers : function() {
		var rlx = xmlStructs.createRecordList("rlx");
		
		editsReptConstCi.readOnly(true);
  	   	editsReptConstNombre.readOnly(true);
  	   	editsReptConstApellido.readOnly(true);
  	   	editsReptConstCi.onEnter("");
  		editsReptConstCi.onChange("");
  		editsReptConstNombre.onEnter("");
  		editsReptConstNombre.onChange("");
  		editsReptConstApellido.onEnter("");
  		editsReptConstApellido.onChange("");
    	if (json('getPermiso').data[0] != 'ACTIVO') {
  			editsReptConstCi.setValue(json('getDatoPersona').data[0]);
  	  		editsReptConstNombre.setValue(json('getDatoPersona').data[1]);
  	  		editsReptConstApellido.setValue(json('getDatoPersona').data[2]);
  	  		editsReptConstCi.hideId = json('getDatoPersona').data[3];
  	  		rlx.add('reg', editsReptConstCi);
  			Tool.cnnSrv('MantObject', 'getCarrera', this.windowName + '.loadDataCarrInscrip()', rlx);
  		}
    	else {
    		tabsReptConst.showTab(1);
  	    	editsReptConstCi.readOnly(false);
  	    	editsReptConstNombre.readOnly(false);
  	    	editsReptConstApellido.readOnly(false);
  		  	editsReptConstCi.onEnter(this.windowName + ".buscar()");
  		  	editsReptConstCi.onChange(this.windowName + ".limpiarFind(1)");
  		  	editsReptConstNombre.onEnter(this.windowName + ".buscar()");
  		  	editsReptConstNombre.onChange(this.windowName + ".limpiarFind(2)");
  		  	editsReptConstApellido.onEnter(this.windowName + ".buscar()");
  		  	editsReptConstApellido.onChange(this.windowName + ".limpiarFind(3)");
  		  	this.getDataPlantilla();
    	}
        dialogsReptConstancias.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },
    
    limpiarTabs : function() {
    	dialogsReptConstancias.setMsg("");
    	if (tabsReptConst.getActualTab() == 1) {
        	editsReptConstCi.hideId = -1;
        	editsReptConstCi.clear();
        	editsReptConstNombre.clear();
        	editsReptConstApellido.clear();
    	}
    	else {
    		pcbReptConstPosicion.setSelectedIndex(0);
    		pcbReptConstSeccion.setSelectedIndex(0);
    	}
    },
    
    limpiar : function() {
    	editsReptConstCi.hideId = -1;
  		editsReptConstCi.setValue("");
  		editsReptConstNombre.setValue("");
  		editsReptConstApellido.setValue("");
  		dialogsReptConstancias.setMsg("");
  		pcbReptConstCarrera.setSelectedIndex(0);
  		pcbReptConstPeriodo.setSelectedIndex(0);
		pcbReptConstPlantilla.setSelectedIndex(0);
		pcbReptConstPeriodo2.clear();
		pcbReptConstLapso.hide();
		gridReptConst.clean();
  		pcbReptConstOrg.clear();
  		pcbReptConstSuborg.clear();
  		pcbReptConstCarrera2.clear();
  		pcbReptConstPeriodo2.clear();
  		pcbReptConstPosicion.clear();
  		pcbReptConstSeccion.clear();
		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  	},
  	
  	loadComboCarrera : function() {
  		var rlx = xmlStructs.createRecordList("rlx");  		
		rlx.add('reg', editsReptConstCi);
  		Tool.cnnSrv('MantObject', 'getCarrera', this.windowName + '.loadDataCarr()', rlx); 
  	},
  	
  	loadDataCarr : function() {
  		Tool.loadPowerComboData(dialogsReptConstancias, pcbReptConstCarrera, -1, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			pcbReptConstCarrera.setSelectedIndex(1); 
  	  		pcbReptConstCarrera2.setSelectedOption(pcbReptConstCarrera.getOption());
  			imgButtonsReptConstReporte.setEnable();
    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsReptConstancias, pcbReptConstPeriodo, 0, 1, pcbReptConstCarrera.setModeReturnGetText(2));
  		}
  	},

  	buscar: function() {
		if (editsReptConstCi.getValue() !== '' || editsReptConstNombre.getValue() !== '' || editsReptConstApellido.getValue() !== '') {
			ResuBusqueda.setObjectExtFnc(editsReptConstCi, editsReptConstNombre, editsReptConstApellido, this.windowName + ".loadComboCarrera()");
			Tool.getGridData('MantObject', 'getMantPersTodas', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsReptConstCi, editsReptConstCi, editsReptConstNombre, editsReptConstNombre, editsReptConstApellido, editsReptConstApellido);
		}
		else {
			Alert.show('Debe ingresar al menos: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
		imgButtonsReptConstReporte.setDisable();
	},

	reporte : async function() {
		var txt = '';	
		
		async function prt(j, pos, tot) {
			return await new Promise( (resolve, reject)=> {
				try {
					richEditVistapreviaConstancia.cleanLabelDescription();
					richEditVistapreviaConstancia.setText(pcbReptConstPlantilla.setModeReturnGetText(2).getText());			
					//ETIQUETAS DE LA BD
					for(var i=0; i<j.fields.length; i++){
						richEditVistapreviaConstancia.addLabelDescription(j.fields[i], j.data[i][0]);
					};
					//ETIQUETAS DEL GRID		
					for(var f = 0; f < gridReptConst.getDataStructObj().data[0].length; f++){
						if (parseInt(gridReptConst.getDataRowStruct(f)[0], 10) != ''){
							richEditVistapreviaConstancia.addLabelDescription(gridReptConst.getDataRowStruct(f)[1], gridReptConst.getDataRowStruct(f)[2]);
						}
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
		//Por alumno o masiva
		if(tabsReptConst.getActualTab()===0){//Por alumno
			prt(json('getConstanciasPorAlumno', 0, 1), false);
			//margenes y tipo de papel
			richEditVistapreviaConstancia.setOrientation(pcbReptConstPlantilla.setModeReturnGetText(3).getText());
			richEditVistapreviaConstancia.setMarginTop(pcbReptConstPlantilla.setModeReturnGetText(4).getText());
			richEditVistapreviaConstancia.setMarginLeft(pcbReptConstPlantilla.setModeReturnGetText(5).getText());
			richEditVistapreviaConstancia.setMarginRight(pcbReptConstPlantilla.setModeReturnGetText(6).getText());	
			setTimeout( ()=>{
				richEditVistapreviaConstancia.print();
				VistapreviaConstancia.close();
			}, 1000);
		}
		else{	//Masiva
			var tx = await pcbReptConstPlantilla.setModeReturnGetText(2).getText();
		   richEditVistapreviaConstancia.setText(tx);
			var jg = json('getConstanciasPorAlumno');
			var pag='';
			var jAlumn =
			{
				fields : jg.fields,
				data : []
			};
			
			for(var f = 0; f<jg.data[0].length; f++){ 
				for(c=0; c<jg.data.length; c++){
					jAlumn.data[c] = [];
					jAlumn.data[c][0] = '';
					jAlumn.data[c][0] = jg.data[c][f];
				}
				await prt(jAlumn, f, jg.data[0].length).then( (obj)=>{									
					pag += obj.content;					
					if(obj.position >= obj.total - 1){
						richEditVistapreviaConstancia.setText(pag);
						//margenes y tipo de papel
						richEditVistapreviaConstancia.setOrientation(pcbReptConstPlantilla.setModeReturnGetText(3).getText());
						richEditVistapreviaConstancia.setMarginTop(pcbReptConstPlantilla.setModeReturnGetText(4).getText());
						richEditVistapreviaConstancia.setMarginLeft(pcbReptConstPlantilla.setModeReturnGetText(5).getText());
						richEditVistapreviaConstancia.setMarginRight(pcbReptConstPlantilla.setModeReturnGetText(6).getText());	
						setTimeout( ()=>{
							richEditVistapreviaConstancia.print();
							VistapreviaConstancia.close();
						}, 1000); 
						pag='';
					}
				})
			};
		}
    },
   
    coreUpdate: function() {
    	VistapreviaConstancia.show();
    	var rlx = xmlStructs.createRecordList("rlx");
    	var flgBuscar = false;

    	if (pcbReptConstPlantilla.valid(dialogsReptConstancias)) {
	    	if (tabsReptConst.getActualTab() == 0) {
	    		if (editsReptConstCi.valid(dialogsReptConstancias))
		    		if (pcbReptConstCarrera.valid(dialogsReptConstancias))
		    			if (pcbReptConstPeriodo.valid(dialogsReptConstancias))
							if (!pcbReptConstLapso.isVisible() || pcbReptConstLapso.valid(dialogsReptConstancias))
	    						flgBuscar = true;
	    	}
	    	else {
	    		if (pcbReptConstCarrera2.valid(dialogsReptConstancias))
	    			if (pcbReptConstPeriodo2.valid(dialogsReptConstancias))
	    				if (pcbReptConstPosicion.valid(dialogsReptConstancias))
							if (!pcbReptConstLapso.isVisible() || pcbReptConstLapso.valid(dialogsReptConstancias))
	    						flgBuscar = true;
	    	}
    	}
    	VistapreviaConstancia.close();
    	
    	if (flgBuscar) {
			rlx.add('reg', pcbReptConstPlantilla.setModeReturnGetText(7));

			if(tabsReptConst.getActualTab()===0) 
				rlx.add('reg', pcbReptConstCarrera.setModeReturnGetText(0));
			else 
				rlx.add('reg', pcbReptConstCarrera2.setModeReturnGetText(2));
			
			rlx.add('reg', editsReptConstCi);
			
			if(tabsReptConst.getActualTab()===0) {
				rlx.add('reg', pcbReptConstPeriodo);
				rlx.add('reg', pcbReptConstPeriodo);
			}
			else { 
				rlx.add('reg', pcbReptConstPeriodo2);
				rlx.add('reg', pcbReptConstPeriodo2);
			}
			
			rlx.add('reg', pcbReptConstPosicion);
			rlx.add('reg', pcbReptConstSeccion);
			rlx.add('reg', pcbReptConstSeccion);
			rlx.add('reg', pcbReptConstLapso);
			rlx.addStr('reg', pcbReptConstLapso.getOption());
			Tool.cnnSrv('ReportObject', 'getConstanciasPorAlumno', this.windowName + '.reporte()', rlx);
    	}    	
	}
};
