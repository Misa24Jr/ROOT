var dialogsPlanInscripcion = new Object();
var pcbPlanInsOrganizacion = new Object();
var pcbPlanInsSuborganizacion = new Object();
var pcbPlanInsCarrera = new Object();
var pcbPlanInsProceso = new Object();
var calendarsPlanInsFecIniProInscrip = new Object();
var calendarsPlanInsFecFinProInscrip = new Object();
var gridsPlanInscripcion = new Object();
var imgButtonsPlanInsAgregar = new Object();
var imgButtonsPlanInsModificar = new Object();
var imgButtonsPlanInsEliminar = new Object();
var imgButtonsPlanInsLimpiar = new Object();
var imgButtonsPlanInsBuscar = new Object();
var imgButtonsPlanInsReporte = new Object();
var imgButtonsPlanInsSalir = new Object();
var mwPlanInscripcion = new Object();// minWindow

var PlanInscripcion = {
	windowName : 'PlanInscripcion',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsPlanInscripcion.isByClean())
 			this.limpiar();			
		dialogsPlanInscripcion.show();
	},
	
	hide : function() {
		dialogsPlanInscripcion.hide();
	},
	
	createMWs : function() {
        	mwPlanInscripcion = desktop.addMinWindow('P. Inscripcion', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsPlanInscripcion.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsPlanInscripcion_Init : function() {
        dialogsPlanInscripcion.setMinimizeXY(0,0);
        dialogsPlanInscripcion.setCenterScreen();
        dialogsPlanInscripcion.addSpace(0,0,20);
        dialogsPlanInscripcion.addLn(1,1,1);    
		dialogsPlanInscripcion.setHeightCell(1,1,10);    
        dialogsPlanInscripcion.addObjToDialog(pcbPlanInsOrganizacion,2,1,24); 
		dialogsPlanInscripcion.addObjToDialog(pcbPlanInsSuborganizacion,2,1,24); 
		dialogsPlanInscripcion.addObjToDialog(pcbPlanInsCarrera,2,1,24);
		dialogsPlanInscripcion.adjAllMarginObj(2,1,17); 
		dialogsPlanInscripcion.addObjToDialog(pcbPlanInsProceso,3,1,24);
		dialogsPlanInscripcion.addObjToDialog(calendarsPlanInsFecIniProInscrip.getEditCalendar(),3,1,24);
        calendarsPlanInsFecIniProInscrip.setWidthEditCalendar(127);
        calendarsPlanInsFecIniProInscrip.setCaption('Fecha Inicio (*):',1,120);
        calendarsPlanInsFecIniProInscrip.sendToFrom(100);
        dialogsPlanInscripcion.addObjToDialog(calendarsPlanInsFecFinProInscrip.getEditCalendar(),3,1,24);
        calendarsPlanInsFecFinProInscrip.setWidthEditCalendar(127);
        calendarsPlanInsFecFinProInscrip.setCaption('Fecha Fin (*):',1,78);
        calendarsPlanInsFecFinProInscrip.sendToFrom(100);
        dialogsPlanInscripcion.adjAllMarginObj(3,1,19);  
		dialogsPlanInscripcion.addLn(4,1,1);
        dialogsPlanInscripcion.setHeightCell(4,1,10);    
        dialogsPlanInscripcion.addObjToDialog(gridsPlanInscripcion.getObject(),5,1);
        dialogsPlanInscripcion.addLn(6,1,1); 
		dialogsPlanInscripcion.setHeightCell(6,1,14);           
        dialogsPlanInscripcion.addObjToDialog(imgButtonsPlanInsAgregar,7,1);
        dialogsPlanInscripcion.addObjToDialog(imgButtonsPlanInsModificar,7,1);
        dialogsPlanInscripcion.addObjToDialog(imgButtonsPlanInsEliminar,7,1);        
        dialogsPlanInscripcion.addObjToDialog(imgButtonsPlanInsLimpiar,7,1);
        dialogsPlanInscripcion.addObjToDialog(imgButtonsPlanInsReporte,7,1);
        dialogsPlanInscripcion.addObjToDialog(imgButtonsPlanInsBuscar,7,1);
        dialogsPlanInscripcion.addObjToDialog(imgButtonsPlanInsSalir,7,1);
        imgButtonsPlanInsAgregar.setDimension(90,22);
        imgButtonsPlanInsModificar.setDimension(90,22);
        imgButtonsPlanInsEliminar.setDimension(90,22);
        imgButtonsPlanInsBuscar.setDimension(90,22);
        imgButtonsPlanInsLimpiar.setDimension(90,22);
        imgButtonsPlanInsReporte.setDimension(90,22);
        imgButtonsPlanInsSalir.setDimension(90,22);
        dialogsPlanInscripcion.adjAllMarginObj(7,1,17);
        dialogsPlanInscripcion.leftMarginObj(7,1,0,25);
	},  

	gridsPlanInscripcion : function() {
		gridsPlanInscripcion.setFixColRow(false, true);
		gridsPlanInscripcion.addTitleVectorX(['Edo. Periodo', 'Periodo', 'Proceso', 'Carrera', 'Fecha Inicio', 'Fecha Fin', 'idSuborg', 'idCarrera', 'idPeriodo', 'idProceso']);
		gridsPlanInscripcion.showData();
		gridsPlanInscripcion.setSizeCol(1, 90);
		gridsPlanInscripcion.setSizeCol(2, 110);
		gridsPlanInscripcion.setSizeCol(3, 100);
		gridsPlanInscripcion.setSizeCol(4, 294);
		gridsPlanInscripcion.setSizeCol(5, 95);
		gridsPlanInscripcion.setSizeCol(6, 95);
		gridsPlanInscripcion.setSizeCol(7, 0);
		gridsPlanInscripcion.setSizeCol(8, 0);
		gridsPlanInscripcion.setSizeCol(9, 0);
		gridsPlanInscripcion.setSizeCol(10, 0);
		gridsPlanInscripcion.hideCol(7);
		gridsPlanInscripcion.hideCol(8);
		gridsPlanInscripcion.hideCol(9);
		gridsPlanInscripcion.hideCol(10);
	},

	create : function() {
		dialogsPlanInscripcion = dialogs.create('dialogsPlanInscripcion',0,0,830,361,'PLANIFICAR FECHA DE INSCRIPCIÓN');
		pcbPlanInsOrganizacion = powerComboBox.create('pcbPlanInsOrganizacion','pcbPlanInsOrganizacion','Organización (+):',1,105);
		pcbPlanInsOrganizacion.setValidEmpty();
		pcbPlanInsOrganizacion.enableReadOnlyEditor();
		pcbPlanInsOrganizacion.addEmptyOption();
		pcbPlanInsOrganizacion.enableOnChangeToEmptyOption();
		pcbPlanInsSuborganizacion = powerComboBox.create('pcbPlanInsSuborganizacion','pcbPlanInsSuborganizacion','Suborganización (^):',1,122);
		pcbPlanInsSuborganizacion.setValidEmpty();
		pcbPlanInsSuborganizacion.enableReadOnlyEditor();
		pcbPlanInsSuborganizacion.addEmptyOption();
		pcbPlanInsSuborganizacion.setFieldFind(true);
		pcbPlanInsSuborganizacion.enableOnChangeToEmptyOption();
		pcbPlanInsCarrera = powerComboBox.create('pcbPlanInsCarrera','pcbPlanInsCarrera','Carrera (^):',1,80);
		pcbPlanInsCarrera.setValidEmpty();
		pcbPlanInsCarrera.enableReadOnlyEditor();
		pcbPlanInsCarrera.addEmptyOption();
		pcbPlanInsCarrera.setFieldFind(true);
		pcbPlanInsProceso = powerComboBox.create('pcbPlanInsProceso','pcbPlanInsProceso','Proceso (*):',1,105);
		pcbPlanInsProceso.setValidEmpty();
		pcbPlanInsProceso.enableReadOnlyEditor();
		pcbPlanInsProceso.addEmptyOption();
		pcbPlanInsProceso.setFieldFind(true);
		calendarsPlanInsFecIniProInscrip = calendars.create('calendarsPlanInsFecIniProInscrip');
        calendarsPlanInsFecIniProInscrip.setValidEmpty();
		calendarsPlanInsFecFinProInscrip = calendars.create('calendarsPlanInsFecFinProInscrip');
        calendarsPlanInsFecFinProInscrip.setValidEmpty();
        calendarsPlanInsFecFinProInscrip.setFieldFind(true);
        calendarsPlanInsFecIniProInscrip.setValidGreaterThan(calendarsPlanInsFecFinProInscrip);
		gridsPlanInscripcion = grids.create('gridsPlanInscripcion',10,10);
		imgButtonsPlanInsAgregar = imgButtons.create('imgButtonsPlanInsAgregar','Agregar','ok.png');
		imgButtonsPlanInsModificar = imgButtons.create('imgButtonsPlanInsModificar','Modificar','icono_modificar.png');
		imgButtonsPlanInsModificar.setDisable();
		imgButtonsPlanInsEliminar = imgButtons.create('imgButtonsPlanInsEliminar','Eliminar','eliminar.jpg');
		imgButtonsPlanInsEliminar.setDisable();
		imgButtonsPlanInsLimpiar = imgButtons.create('imgButtonsPlanInsLimpiar','Limpiar','limpiar.png');
		imgButtonsPlanInsReporte = imgButtons.create('imgButtonsPlanInsReporte','Reporte','print.png');
		imgButtonsPlanInsBuscar = imgButtons.create('imgButtonsPlanInsBuscar','Buscar','icono_buscar.png');      
		imgButtonsPlanInsSalir = imgButtons.create('imgButtonsPlanInsSalir','Salir','salir.png');      
  	},

  	init : function() {
	    this.create();
	    this.setEvents();
	    this.dialogsPlanInscripcion_Init();
	    this.gridsPlanInscripcion();
		this.createMWs();

  	},

	resetElements : function(element) {
		if (element == 'org') {
        	Tool.rstPwrCmb(pcbPlanInsSuborganizacion);
	        Tool.rstPwrCmb(pcbPlanInsCarrera);
	        pcbPlanInsProceso.setSelectedIndex(0);
	        if (pcbPlanInsOrganizacion.getOption() != "")
	        	Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsPlanInscripcion, pcbPlanInsSuborganizacion, 1, 2, pcbPlanInsOrganizacion);
		}
		else if (element == 'suborg') {
        	Tool.rstPwrCmb(pcbPlanInsCarrera);
			pcbPlanInsProceso.setSelectedIndex(0);
	        if (pcbPlanInsSuborganizacion.getOption() != "")
	        	Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsPlanInscripcion, pcbPlanInsCarrera, -1, 3, pcbPlanInsSuborganizacion);
		}
		dialogsPlanInscripcion.setMsg("");
		gridsPlanInscripcion.clean();
        pcbPlanInsProceso.enable();
		imgButtonsPlanInsAgregar.setEnable();
		imgButtonsPlanInsModificar.setDisable();
		imgButtonsPlanInsEliminar.setDisable();		
	},

	setEvents : function() {
  		pcbPlanInsOrganizacion.onChange(this.windowName + ".resetElements('org')");
  		pcbPlanInsSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
  		pcbPlanInsCarrera.onChange(this.windowName + ".resetElements()");
		gridsPlanInscripcion.onClickCells(this.windowName+".setData()");
  		imgButtonsPlanInsAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsPlanInsModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsPlanInsEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
		imgButtonsPlanInsBuscar.onClick(this.windowName + '.buscar()');
		imgButtonsPlanInsLimpiar.onClick(this.windowName + '.limpiar()');
		imgButtonsPlanInsReporte.onClick(this.windowName + '.reporte()');
		imgButtonsPlanInsSalir.onClick('dialogsPlanInscripcion.close()');
	},

    limpiar: function() {
    	Tool.rstPwrCmb(pcbPlanInsOrganizacion);
    	Tool.rstPwrCmb(pcbPlanInsSuborganizacion);
    	Tool.rstPwrCmb(pcbPlanInsCarrera);
    	Tool.rstPwrCmb(pcbPlanInsProceso);
		calendarsPlanInsFecIniProInscrip.clear();
		calendarsPlanInsFecFinProInscrip.clear();
    	gridsPlanInscripcion.clean();
        dialogsPlanInscripcion.setMsg("");
        pcbPlanInsProceso.enable();
        imgButtonsPlanInsAgregar.setEnable();
        imgButtonsPlanInsModificar.setDisable();
        imgButtonsPlanInsEliminar.setDisable();
        imgButtonsPlanInsReporte.setDisable();
        Tool.cnnSrv('MantObject', 'getPlanInscripcionInit', this.windowName + '.loadDataInit()');
    },

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsPlanInscripcion, pcbPlanInsOrganizacion, 0, 1, json('getData'));
		Tool.loadPowerComboData(dialogsPlanInscripcion, pcbPlanInsProceso, 0, 1, json('getTipoInscripcion'));
		Tool.getContext(dialogsPlanInscripcion, pcbPlanInsOrganizacion, pcbPlanInsSuborganizacion, pcbPlanInsCarrera);
    },

    limpiarCoreUpdate: function() {
    	pcbPlanInsProceso.setSelectedIndex(0);
		dialogsPlanInscripcion.setMsg("");
        pcbPlanInsProceso.enable();
        imgButtonsPlanInsAgregar.setEnable();
        imgButtonsPlanInsModificar.setDisable();
        imgButtonsPlanInsEliminar.setDisable();
        this.buscar();
    },

    setData: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (gridsPlanInscripcion.getDataCell(1) != "") {
        	pcbPlanInsSuborganizacion.findOption(gridsPlanInscripcion.getDataCell(7));
        	pcbPlanInsProceso.findOption(gridsPlanInscripcion.getDataCell(10));
        	calendarsPlanInsFecIniProInscrip.setFechaToEdit(gridsPlanInscripcion.getDataCell(5));
        	calendarsPlanInsFecFinProInscrip.setFechaToEdit(gridsPlanInscripcion.getDataCell(6));
        	this.idPeriodo = gridsPlanInscripcion.getDataCell(9);
        	pcbPlanInsProceso.disable();
        	imgButtonsPlanInsAgregar.setDisable();
			imgButtonsPlanInsModificar.setEnable();
			imgButtonsPlanInsEliminar.setEnable();
			rlx.add('reg', pcbPlanInsSuborganizacion);
			Tool.cnnSrv('MantObject', 'getMantenimientodeCarrera', this.windowName + '.loadInit()', rlx);
        }     			
	},
	
	loadInit: function() {
		Tool.loadPowerComboData(dialogsPlanInscripcion, pcbPlanInsCarrera, -1, 3, json('getMantenimientodeCarrera'));
    	pcbPlanInsCarrera.findOption(gridsPlanInscripcion.getDataCell(8),2);
	},

	buscar: function() {
		if (pcbPlanInsOrganizacion.valid(dialogsPlanInscripcion)) {
	        imgButtonsPlanInsAgregar.setEnable();
	        imgButtonsPlanInsModificar.setDisable();
	        imgButtonsPlanInsEliminar.setDisable();
			imgButtonsPlanInsReporte.setDisable();
			gridsPlanInscripcion.clean();
			Tool.getGridData('MantObject', 'getPlanInscripcion', dialogsPlanInscripcion, gridsPlanInscripcion, new Function('imgButtonsPlanInsReporte.setEnable()'),
					pcbPlanInsOrganizacion,
					pcbPlanInsSuborganizacion,
					pcbPlanInsSuborganizacion,
					pcbPlanInsCarrera.setModeReturnGetText(2),
					pcbPlanInsCarrera.setModeReturnGetText(2),
					pcbPlanInsProceso, 
					pcbPlanInsProceso, 
					calendarsPlanInsFecIniProInscrip,
					calendarsPlanInsFecFinProInscrip,
					calendarsPlanInsFecFinProInscrip);			
		}
    },

    coreUpdate: function(methodName) {
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (methodName == 'eliminar') {
        	if (pcbPlanInsOrganizacion.valid(dialogsPlanInscripcion)) 
                if (pcbPlanInsProceso.valid(dialogsPlanInscripcion))
                	if (this.idPeriodo != 0) {
					 	rlx.add('reg',pcbPlanInsOrganizacion);
					 	rlx.add('reg',pcbPlanInsSuborganizacion);
					 	rlx.add('reg',pcbPlanInsSuborganizacion);
					 	rlx.add('reg',pcbPlanInsCarrera.setModeReturnGetText(2));
					 	rlx.add('reg',pcbPlanInsCarrera.setModeReturnGetText(2));
					 	rlx.addInt('reg',this.idPeriodo);
						rlx.add('reg',pcbPlanInsProceso);
					 	procesar = true;
                	}
        }
        else {
        	if (pcbPlanInsOrganizacion.valid(dialogsPlanInscripcion)) 
                if (pcbPlanInsProceso.valid(dialogsPlanInscripcion))
                    if (calendarsPlanInsFecIniProInscrip.valid(dialogsPlanInscripcion))                             
                    	if (calendarsPlanInsFecFinProInscrip.valid(dialogsPlanInscripcion)) {
                            if (methodName == 'agregar') {
	                    		rlx.add('reg',pcbPlanInsProceso);
	                         	rlx.add('reg',calendarsPlanInsFecIniProInscrip);                                            
	                         	rlx.add('reg',calendarsPlanInsFecFinProInscrip);
							 	rlx.add('reg',pcbPlanInsOrganizacion);
							 	rlx.add('reg',pcbPlanInsSuborganizacion);
							 	rlx.add('reg',pcbPlanInsSuborganizacion);
							 	rlx.add('reg',pcbPlanInsCarrera.setModeReturnGetText(2));
							 	rlx.add('reg',pcbPlanInsCarrera.setModeReturnGetText(2));
                            }
                            else {
	                         	rlx.add('reg',calendarsPlanInsFecIniProInscrip);                                            
	                         	rlx.add('reg',calendarsPlanInsFecFinProInscrip);
        					 	rlx.add('reg',pcbPlanInsOrganizacion);
        					 	rlx.add('reg',pcbPlanInsSuborganizacion);
        					 	rlx.add('reg',pcbPlanInsSuborganizacion);
        					 	rlx.add('reg',pcbPlanInsCarrera.setModeReturnGetText(2));
        					 	rlx.add('reg',pcbPlanInsCarrera.setModeReturnGetText(2));
        					 	rlx.addInt('reg',this.idPeriodo);
        						rlx.add('reg',pcbPlanInsProceso);
                            }
                         	procesar = true;
               			}
        }
        if (procesar) {
    		Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()', rlx);
        }
    },
    
    reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
        rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addHeadTitle('FECHAS DE INSCRIPCION PLANIFICADAS',true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),7.8,'verdana','bold');
        rep.addBar(0,152,1128,220,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addLine(0,146,1128,146,rep.getRGBAObj(210,210,210,1),1,false);
        rep.addLine(0,226,1128,226,rep.getRGBAObj(210,210,210,1),1,false); 
		rep.addText(20, 170,'ORGANIZACIÓN:',false);
        rep.addText(148, 170,pcbPlanInsOrganizacion.getValue(),false);
		rep.addText(20, 190, 'SUBORGANIZACIÓN:',false);
		rep.addText(148, 190,pcbPlanInsSuborganizacion.getValue(),false);
		rep.addText(20, 210, 'ESCUELA:',false);
		rep.addText(148, 210,pcbPlanInsCarrera.getValue(),false);
		//////////////////////////////////////////TABLA DE DATOS////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
        
        rep.setTableRowProperties(20, 180, 180, 180, 'bold helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'bold helvetica', 10);
        
        rep.addTable('tablaRepPlaInscripcion',['PERIODO','PROCESO','CARRERA','FECHA INICIO','FECHA FIN'],400,230);
        
        rep.setTotalRowTable(29);
		rep.setHeightRow(26);   
        
        rep.setSizeColumnArray([100,140,320,120,120]);
        rep.addJsonData('tablaRepPlaInscripcion','getPlanInscripcion',[0,1,2,3,4]);
        rep.setAlignData(['center','left','left','center','center']);
		//rep.setTotalRowTable(21);
		rep.setHeightRow(26);        
        //////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	}
};