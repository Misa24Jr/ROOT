var dialogsAsiGruParticipacion = {};
var pcbAsiGruParPeriodo = {};
var pcbAsiGruParCarrera = {};
var pcbAsiGruParPosicion = {};
var pcbAsiGruParMateria = {};
var pcbAsiGruParSeccion = {};
var pcbAsiGruParGrupo = {};
var pcbAsiGruParDocente = {};
var customGridAsiGruParticipacion = {};
var imgButtonsAsiGruParGuardar = {};
var imgButtonsAsiGruParLimpiar = {};
var imgButtonsAsiGruParReporte = {};
var imgButtonsAsiGruParBuscar = {};
var imgButtonsAsiGruParSalir = {};
var mwAsiGruParticipacion = {};// minWindow

var AsiGruParticipacion = {
	windowName : 'AsiGruParticipacion',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsAsiGruParticipacion.isByClean())
 			this.limpiar();			
		dialogsAsiGruParticipacion.show();
	},
	
	hide : function() {
		dialogsAsiGruParticipacion.hide();
	},
	
	createMWs : function() {
		mwAsiGruParticipacion = desktop.addMinWindow('A.G.P.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsAsiGruParticipacion.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsAsiGruParticipacion_Init : function() {
        dialogsAsiGruParticipacion.setMinimizeXY(0,0);
		dialogsAsiGruParticipacion.setCenterScreen();
		dialogsAsiGruParticipacion.addSpace(1,0,40);
		dialogsAsiGruParticipacion.addLn(1,1,1);
		dialogsAsiGruParticipacion.setHeightCell(1,1,30);		
		dialogsAsiGruParticipacion.addObject(pcbAsiGruParPeriodo,20,49);
		dialogsAsiGruParticipacion.addObject(pcbAsiGruParCarrera,270,49);        
		dialogsAsiGruParticipacion.addObject(pcbAsiGruParPosicion,20, 72);
		dialogsAsiGruParticipacion.addObject(pcbAsiGruParMateria,270, 72);
		dialogsAsiGruParticipacion.addObject(pcbAsiGruParSeccion,20, 95);
		dialogsAsiGruParticipacion.addObject(pcbAsiGruParGrupo,270, 95);
		dialogsAsiGruParticipacion.addObject(pcbAsiGruParDocente,270, 118);
		dialogsAsiGruParticipacion.addObject(customGridAsiGruParticipacion, 20, 150);
		dialogsAsiGruParticipacion.addObject(imgButtonsAsiGruParGuardar,120, 534);
		dialogsAsiGruParticipacion.addObject(imgButtonsAsiGruParLimpiar,230, 534);
		dialogsAsiGruParticipacion.addObject(imgButtonsAsiGruParReporte,340, 534);
		dialogsAsiGruParticipacion.addObject(imgButtonsAsiGruParBuscar,450, 534);
		dialogsAsiGruParticipacion.addObject(imgButtonsAsiGruParSalir,560, 534);
    },
	
  	create : function() {
  		dialogsAsiGruParticipacion = dialogs.create('dialogsAsiGruParticipacion',0,0,770,542,'ASIGNAR GRUPO PARTICIPACIÓN');
		dialogsAsiGruParticipacion.setAdjY(20);
		pcbAsiGruParPeriodo = powerComboBox.create('pcbAsiGruParPeriodo','pcbAsiGruParPeriodo','Periodo (+):',1,77);
		pcbAsiGruParPeriodo.setValidEmpty();
    	pcbAsiGruParPeriodo.addEmptyOption();
    	pcbAsiGruParPeriodo.enableReadOnlyEditor();    	
    	pcbAsiGruParCarrera = powerComboBox.create('pcbAsiGruParCarrera','pcbAsiGruParCarrera','Carrera (+):',1,71); 
    	pcbAsiGruParCarrera.setValidEmpty();
    	pcbAsiGruParCarrera.addEmptyOption();
    	pcbAsiGruParCarrera.enableReadOnlyEditor();	
    	pcbAsiGruParCarrera.setWidthCombo(385);
		pcbAsiGruParPosicion = powerComboBox.create('pcbAsiGruParPosicion','pcbAsiGruParPosicion','Posición (+):',1,77);
		pcbAsiGruParPosicion.setValidEmpty();
    	pcbAsiGruParPosicion.addEmptyOption();
    	pcbAsiGruParPosicion.enableReadOnlyEditor();
		pcbAsiGruParPosicion.setFieldFind(true);
		pcbAsiGruParMateria = powerComboBox.create('pcbAsiGruParMateria','pcbAsiGruParMateria','Materia (+):',1,71);
		pcbAsiGruParMateria.setValidEmpty();
    	pcbAsiGruParMateria.addEmptyOption();
    	pcbAsiGruParMateria.enableReadOnlyEditor();
		pcbAsiGruParMateria.setWidthCombo(385);
		pcbAsiGruParMateria.setDataType('string');
		pcbAsiGruParMateria.setFieldFind(true);
		pcbAsiGruParSeccion = powerComboBox.create('pcbAsiGruParSeccion','pcbAsiGruParSeccion','Sección (^):',1,77);
		pcbAsiGruParSeccion.setValidEmpty();
    	pcbAsiGruParSeccion.addEmptyOption();
    	pcbAsiGruParSeccion.enableReadOnlyEditor();
		pcbAsiGruParSeccion.setFieldFind(true);
		pcbAsiGruParGrupo = powerComboBox.create('pcbAsiGruParGrupo', 'pcbAsiGruParGrupo', 'Grupo (*):', 1,71);
		pcbAsiGruParGrupo.setDataType('string');
		pcbAsiGruParGrupo.addEmptyOption();
        pcbAsiGruParGrupo.setValidEmpty();
        pcbAsiGruParGrupo.setWidthCombo(385);
        pcbAsiGruParGrupo.setSizeHeight(400);
        pcbAsiGruParGrupo.setFieldFind(true)
		pcbAsiGruParDocente = powerComboBox.create('pcbAsiGruParDocente', 'pcbAsiGruParDocente', 'Docente:', 1,71);
		pcbAsiGruParDocente.addEmptyOption();
        pcbAsiGruParDocente.setValidEmpty();
        pcbAsiGruParDocente.enableReadOnlyEditor();
        pcbAsiGruParDocente.setWidthCombo(385);
        pcbAsiGruParDocente.setSizeHeight(400);
		imgButtonsAsiGruParGuardar = imgButtons.create('imgButtonsAsiGruParGuardar','Guardar.','ok.png');		
		imgButtonsAsiGruParLimpiar = imgButtons.create('imgButtonsAsiGruParLimpiar','Limpiar','limpiar.png');		
		imgButtonsAsiGruParReporte = imgButtons.create('imgButtonsAsiGruParReporte','Imprimir','print.png');
      	imgButtonsAsiGruParBuscar = imgButtons.create('imgButtonsAsiGruParBuscar','Buscar','icono_buscar.png');
		imgButtonsAsiGruParSalir = imgButtons.create('imgButtonsAsiGruParSalir','Salir','salir.png');
        imgButtonsAsiGruParGuardar.setDimension(90,22);        
        imgButtonsAsiGruParReporte.setDimension(90,22);        
        imgButtonsAsiGruParLimpiar.setDimension(90,22);		
        imgButtonsAsiGruParBuscar.setDimension(90,22);		
        imgButtonsAsiGruParSalir.setDimension(90,22);
       	customGridAsiGruParticipacion = customGrid.create('cgGridAsiGruParticipacion','CLASIFICACIÓN',318,731,22,13);
		customGridAsiGruParticipacion.loadColumnTypeStruct(null, [customGrid.TYPE_COLUMN_CHECK,
		                                                        customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT, 
																customGrid.TYPE_COLUMN_EDIT, 
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT],
																[25,20,95,138,138,220,0,0,70]);
		customGridAsiGruParticipacion.addTitleVectorX(['','Nº','Cédula','Apellido','Nombre','Grupo','idPers','idProf','Docente']);
		customGridAsiGruParticipacion.setSelectedLnMode(0);
		customGridAsiGruParticipacion.addObjToTitle(0, customGridAsiGruParticipacion.createTitleObj(0,'input','checkbox'));
		customGridAsiGruParticipacion.activeCheckOnOff(0);
		customGridAsiGruParticipacion.hideCol(6); 
		customGridAsiGruParticipacion.hideCol(7); 
		for (var i=1; i<7; i++)
			customGridAsiGruParticipacion.setReadOnlyCol(i, true);
  	},

  	init : function() {
  		this.create();
  		this.setEvents();
  		this.dialogsAsiGruParticipacion_Init();
  		this.createMWs();
  	},

  	buscar : function() {
		pcbAsiGruParDocente.setSelectedIndex(0);
		customGridAsiGruParticipacion.clean();
        if (pcbAsiGruParPeriodo.valid(dialogsAsiGruParticipacion))
	        if (pcbAsiGruParCarrera.valid(dialogsAsiGruParticipacion))
		        if (pcbAsiGruParSeccion.valid(dialogsAsiGruParticipacion)) {
		        	Tool.getGridData('MantObject', 'getAsiGruParticipacion', dialogsAsiGruParticipacion, customGridAsiGruParticipacion, false, pcbAsiGruParSeccion, pcbAsiGruParGrupo, new MiniDataSet(0, 'int', false));
				}
   	},

  	setData : function() {
		if (customGridAsiGruParticipacion.getDataCell(1) != "") {
			pcbAsiGruParGrupo.findOption(customGridAsiGruParticipacion.getDataCell(5));
            pcbAsiGruParDocente.findOption(customGridAsiGruParticipacion.getDataCell(7));
		}     			
	},

	setEvents: function() {
		customGridAsiGruParticipacion.onClickCells(this.windowName + ".setData()");
		pcbAsiGruParPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbAsiGruParCarrera.onChange(this.windowName + ".resetElements('car')");
		pcbAsiGruParPosicion.onChange(this.windowName + ".resetElements('pos')");
		pcbAsiGruParMateria.onChange(this.windowName + ".resetElements('mat')");
		pcbAsiGruParSeccion.onChange(this.windowName + ".resetElements('sec')");		
		imgButtonsAsiGruParGuardar.onClick(this.windowName+".coreUpdate()");		
		imgButtonsAsiGruParLimpiar.onClick(this.windowName+".limpiar()");		
	  	imgButtonsAsiGruParReporte.onClick(this.windowName + ".coreReporte()");
  		imgButtonsAsiGruParBuscar.onClick(this.windowName + ".buscar()");
		imgButtonsAsiGruParSalir.onClick("dialogsAsiGruParticipacion.close()");
	},	

	reporte : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,4);
       	///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        //rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'courier','bold');
        rep.addText(272,21,'LISTADO DE ESTUDIANTES CRP',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'courier','bold');
        rep.addBar(0,38,1128,95,rep.getRGBAObj(187,196,238,0.4),false);
		rep.addText(20, 54, 'PERIODO: '+pcbAsiGruParPeriodo.getOption(),false);
		rep.addText(20, 72, 'GRUPO  : '+pcbAsiGruParGrupo.getOption(),false);
		rep.addText(20, 90, 'DOCENTE: '+json('getAlumnoGrupoCrp').data[15][0],false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);
		rep.addTable('TablaRepoHojaEvaAlumno',['Nº','C.i.','Estudiante','Grado/Sec.','1M','2M','%','%','%','%','%','%','%','%','DEF'],396,100);
        rep.setTotalRowTable(46);
        rep.setHeightRow(17); 
        rep.setSizeColumnArray([30,70,258,80,32,32,32,32,32,32,32,32,32,32,40]);
        rep.setAlignData(['right','center','left','center','center','center','center','center','center','center','center','center','center','center','center']);     
        rep.addJsonData('TablaRepoHojaEvaAlumno','getAlumnoGrupoCrp',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);		
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
        rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	coreReporte: function(){
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (pcbAsiGruParPeriodo.valid(dialogsAsiGruParticipacion))
			if (pcbAsiGruParGrupo.valid(dialogsAsiGruParticipacion)) {
				rlx.add('reg', pcbAsiGruParPeriodo);
				rlx.add('reg', pcbAsiGruParGrupo);
				rlx.addInt('reg', 1);
				Tool.cnnSrv('MantObject', 'getAsiGruParticipacion', this.windowName + '.reporte()', rlx);
		}
	},

  	resetElements : function(element) {
        var rlx = xmlStructs.createRecordList("rlx");

	    imgButtonsAsiGruParReporte.setEnable();	
		if (element == 'per') {
			this.resetElements('pos');
		}
		else if (element == 'car') {
			pcbAsiGruParPosicion.clear();
			pcbAsiGruParMateria.clear();
			pcbAsiGruParSeccion.clear();
			if (pcbAsiGruParCarrera.getOption() != '')
				Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsAsiGruParticipacion, pcbAsiGruParPosicion, 0, 1, pcbAsiGruParCarrera.setModeReturnGetText(0));        		
		}
		else if (element == 'pos') {
			pcbAsiGruParGrupo.clear();
			if (pcbAsiGruParCarrera.getOption() != '') {
				rlx.add('reg', pcbAsiGruParPeriodo);
				rlx.add('reg', pcbAsiGruParCarrera);
				rlx.add('reg', pcbAsiGruParPosicion);
				Tool.cnnSrv('MantObject', 'getAsiGruPartMateria', this.windowName + '.loadDataMateriaGrupo()', rlx);
			}
	    }
		else if (element == 'mat') {
			pcbAsiGruParSeccion.clear();
			if (pcbAsiGruParPosicion.getOption() != '')
				Tool.getPowerComboData('MantObject', 'getAsiGruPartSeccion', dialogsAsiGruParticipacion, pcbAsiGruParSeccion, 0, 1, pcbAsiGruParPeriodo, pcbAsiGruParCarrera.setModeReturnGetText(0), pcbAsiGruParPosicion, pcbAsiGruParMateria);        		
	    }
		else if (element == 'sec') {
			if (pcbAsiGruParSeccion.getOption() != '')
				this.buscar();
	    }
  	},

  	loadDataMateriaGrupo : function() {
		Tool.loadPowerComboData(dialogsAsiGruParticipacion, pcbAsiGruParMateria, 0, 1, json('getMateria'));
		Tool.loadPowerComboData(dialogsAsiGruParticipacion, pcbAsiGruParGrupo, 0, 0, json('getGrupoCrp'));
		Tool.loadPowerComboData(dialogsAsiGruParticipacion, pcbAsiGruParDocente, 0, 1, json('getDocenteGrupoCrp'));
		pcbAsiGruParGrupo.setSizeHeight(350);
		pcbAsiGruParDocente.setSizeHeight(350);
	},
	
  	limpiar : function() {
  		dialogsAsiGruParticipacion.setMsg("");
  		pcbAsiGruParPeriodo.clear();
  		pcbAsiGruParCarrera.clear();
  		pcbAsiGruParPosicion.clear();
  		pcbAsiGruParMateria.clear();
  		pcbAsiGruParSeccion.clear();
  		pcbAsiGruParGrupo.clear();
  		pcbAsiGruParDocente.clear();
  		customGridAsiGruParticipacion.clean();
  		imgButtonsAsiGruParReporte.setDisable();		
		Tool.cnnSrv('MantObject', 'getPreinscriptoInit', this.windowName + '.loadInit()');
  	},

	loadInit : function() {
		Tool.loadPowerComboData(dialogsAsiGruParticipacion, pcbAsiGruParPeriodo, 0, 1, json('getPeriodoVigente'));
		Tool.loadPowerComboData(dialogsAsiGruParticipacion, pcbAsiGruParCarrera, -1, 1, json('getCarrera'));
		Tool.loadPowerComboData(dialogsAsiGruParticipacion, pcbAsiGruParPosicion, 0, 1, json('getMantPensumPosicion'));
		pcbAsiGruParPeriodo.setSelectedIndex(1);
		pcbAsiGruParCarrera.setSelectedIndex(1);
		pcbAsiGruParPosicion.setSelectedIndex(1);
		this.resetElements('pos');
	},
	
	loadNameGrupo : function() {
		pcbAsiGruParGrupo.addOptionAndSimpleValue(null, pcbAsiGruParGrupo.getOption(), pcbAsiGruParGrupo.getOption());
		pcbAsiGruParGrupo.setSelectedIndex(0); 
		pcbAsiGruParGrupo.setSizeHeight(350);
	},

	coreUpdate : function() {
        var rlx = xmlStructs.createRecordList("rlx");
        var flg = false;
        
        if (pcbAsiGruParPeriodo.valid(dialogsAsiGruParticipacion))
	        if (pcbAsiGruParCarrera.valid(dialogsAsiGruParticipacion))
	        	if (pcbAsiGruParPosicion.valid(dialogsAsiGruParticipacion))
					if (pcbAsiGruParMateria.valid(dialogsAsiGruParticipacion))
						if (pcbAsiGruParSeccion.valid(dialogsAsiGruParticipacion)) {
							if (customGridAsiGruParticipacion.getTotalRowStruct() > 0) {
					            for(var f = 0; f < customGridAsiGruParticipacion.struct.getTotalRows(); f++) {
					            	if (parseInt(customGridAsiGruParticipacion.getDataCellStruct(f,0), 10) === 1) {
					            		var reg = "";
					                	reg = pcbAsiGruParSeccion.getText();
					                	reg+= "###" + customGridAsiGruParticipacion.struct.data[6][f];
					                	reg+= "###" + pcbAsiGruParGrupo.getOption();
					                	reg+= "###" + pcbAsiGruParDocente.getText();
					                	rlx.addStr('reg' + f, reg);
					                	flg = true;
					            	}
					            }
					            if (flg) {
									Tool.cnnSrv('MantObject', 'guardarAsiGruParticipacion', this.windowName + '.loadNameGrupo();' + this.windowName + '.resetElements("sec")', rlx);
								}
							}
						}
	}
};