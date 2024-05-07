var dialogsAsinAulas = new Object();
var pcbAsinAulOrg = new Object();
var pcbAsinAulSubOrg = new Object();
var pcbAsinAulCarrera = new Object();
var pcbAsinAulPeriodo = new Object();
var pcbAsinAulTipAulas = new Object();
var pcbAsinAulBloque = new Object();
var pcbAsinAulAulas = new Object();
var gridsAsinAulas = new Object();
var imagesAsinAulas = new Object();
var imgButtonsAsinAulAgregar = new Object();
var imgButtonsAsinAulEliminar = new Object();
var imgButtonsAsinAulBuscar = new Object();
var imgButtonsAsinAulLimpiar = new Object();
var imgButtonsAsinAulReporte = new Object();
var imgButtonsAsinAulSalir = new Object();
var mwAsinAulas = new Object();// minWindow

var AsinAulas = {
    windowName: 'AsinAulas',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsAsinAulas.isByClean())
			this.limpiar();
        dialogsAsinAulas.show();
    },
	
    hide: function(){
        dialogsAsinAulas.hide();
    },
	
    createMWs: function(){
        mwAsinAulas = desktop.addMinWindow('Asignar Aulas. Curso', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsAsinAulas.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsAsinAulas_Init: function(){
        dialogsAsinAulas.setMinimizeXY(0, 0);
        dialogsAsinAulas.setCenterScreen();
        dialogsAsinAulas.addSpace(0, 0, 20);
        dialogsAsinAulas.addLn(1, 1, 1);
		dialogsAsinAulas.setHeightCell(1,1,10); 
		dialogsAsinAulas.addObjToDialog(pcbAsinAulOrg, 2, 1, 24);
		dialogsAsinAulas.addObjToDialog(pcbAsinAulSubOrg, 2, 1, 24);
		dialogsAsinAulas.adjAllMarginObj(2, 1, 20);
		dialogsAsinAulas.addObjToDialog(pcbAsinAulCarrera, 3, 1, 24);
        dialogsAsinAulas.addObjToDialog(pcbAsinAulPeriodo, 3, 1,24);
		dialogsAsinAulas.addObject(imagesAsinAulas, 807, 62);
        dialogsAsinAulas.adjAllMarginObj(3, 1, 20);
		dialogsAsinAulas.addObjToDialog(pcbAsinAulTipAulas, 4, 1,24);
		dialogsAsinAulas.addObjToDialog(pcbAsinAulBloque, 4, 1,24);
		dialogsAsinAulas.addObjToDialog(pcbAsinAulAulas, 4, 1,24);
		dialogsAsinAulas.adjAllMarginObj(4, 1, 20);
        dialogsAsinAulas.addLn(5, 1, 1);
		dialogsAsinAulas.setHeightCell(5,1,12); 
        dialogsAsinAulas.addObjToDialog(gridsAsinAulas.getObject(), 6, 1);
        dialogsAsinAulas.addLn(7, 1, 1);
		dialogsAsinAulas.setHeightCell(7,1,10); 
        dialogsAsinAulas.addObjToDialog(imgButtonsAsinAulAgregar, 8, 1);
        dialogsAsinAulas.addObjToDialog(imgButtonsAsinAulEliminar, 8, 1);
        dialogsAsinAulas.addObjToDialog(imgButtonsAsinAulLimpiar, 8, 1);
        dialogsAsinAulas.addObjToDialog(imgButtonsAsinAulReporte, 8, 1);
		dialogsAsinAulas.addObjToDialog(imgButtonsAsinAulBuscar, 8, 1);
        dialogsAsinAulas.addObjToDialog(imgButtonsAsinAulSalir, 8, 1,28);
        dialogsAsinAulas.adjAllMarginObj(8, 1, 20);
        dialogsAsinAulas.leftMarginObj(8, 1, 0, 76);
    },
	
    gridsAsinAulas_Init: function(){
        gridsAsinAulas.setFixColRow(false, true);
        gridsAsinAulas.addTitleVectorX(['Periodo','Programa','Bloque','Tipo de Aula','deAula','idbloque','idtipoaula','Aula','org','suborg','idorg','idsuborg','idcarrera']);
        gridsAsinAulas.showData();
        gridsAsinAulas.setSizeCol(1, 134);
        gridsAsinAulas.setSizeCol(2, 289);
        gridsAsinAulas.setSizeCol(3, 75);
        gridsAsinAulas.setSizeCol(4, 225);
        gridsAsinAulas.setSizeCol(5, 0);
        gridsAsinAulas.setSizeCol(6, 0);
        gridsAsinAulas.setSizeCol(7, 0);
        gridsAsinAulas.setSizeCol(8, 75);
        gridsAsinAulas.hideCol(5);
        gridsAsinAulas.hideCol(6);
        gridsAsinAulas.hideCol(7);
        gridsAsinAulas.hideCol(9);
        gridsAsinAulas.hideCol(10);
        gridsAsinAulas.hideCol(11);
        gridsAsinAulas.hideCol(12);
        gridsAsinAulas.hideCol(13);
    },
    
    create: function(){
        dialogsAsinAulas = dialogs.create('dialogsAsinAulas', 0, 0, 844, 383, 'ASIGNAR AULA AL PROGRAMA');
        dialogsAsinAulas.setAdjY(20);
        pcbAsinAulOrg = powerComboBox.create('pcbAsinAulOrg', 'pcbAsinAulOrg', 'Organización (+):', 1,120);
        pcbAsinAulOrg.enableReadOnlyEditor();
        pcbAsinAulOrg.addEmptyOption();
        pcbAsinAulOrg.setValidEmpty();       
        pcbAsinAulOrg.enableOnChangeToEmptyOption();
        pcbAsinAulOrg.setFieldFind(true);
        pcbAsinAulSubOrg = powerComboBox.create('pcbAsinAulSubOrg', 'pcbAsinAulSubOrg', 'Suborganización (^):',1,130);
        pcbAsinAulSubOrg.enableReadOnlyEditor();
        pcbAsinAulSubOrg.addEmptyOption();
        pcbAsinAulSubOrg.setValidEmpty();
        pcbAsinAulSubOrg.enableOnChangeToEmptyOption();
        pcbAsinAulSubOrg.setFieldFind(true);
        pcbAsinAulSubOrg.setWidthCombo(362);
        pcbAsinAulCarrera = powerComboBox.create('pcbAsinAulCarrera', 'pcbAsinAulCarrera', 'Programa (^):', 1,120);
        pcbAsinAulCarrera.enableReadOnlyEditor();
        pcbAsinAulCarrera.addEmptyOption();
        pcbAsinAulCarrera.setValidEmpty();
        pcbAsinAulCarrera.setFieldFind(true);
        pcbAsinAulCarrera.setWidthCombo(428);
		pcbAsinAulPeriodo = powerComboBox.create('pcbAsinAulPeriodo', 'pcbAsinAulPeriodo', 'Periodo (^):', 1,75);
        pcbAsinAulPeriodo.enableReadOnlyEditor();
        pcbAsinAulPeriodo.addEmptyOption();
        pcbAsinAulPeriodo.setValidEmpty();
        pcbAsinAulPeriodo.setWidthCombo(96);
		/////////////CREAR HINT//////////////////////////////////////////////////////////////////////////////////////////////////
		imagesAsinAulas = images.create('imagesAsinAulas','imagesAsinAulas','images/duplicar_periodo_1.png');
		imagesAsinAulas.setSize(17,17);
		hint.create();
		hint.addToHintWithPos(imagesAsinAulas,"Duplicar para Nuevo Periodo",0,0);
		xFunct = function() {hint.setPosition(imagesAsinAulas, dialogsAsinAulas.x1+670, dialogsAsinAulas.y1+47);};
		hint.onMouseOver('xFunct()');
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        pcbAsinAulBloque = powerComboBox.create('pcbAsinAulBloque', 'pcbAsinAulBloque', 'Bloque (+):', 1,130);
        pcbAsinAulBloque.enableReadOnlyEditor();
        pcbAsinAulBloque.addEmptyOption();
        pcbAsinAulBloque.setValidEmpty();
        pcbAsinAulBloque.setDataType('string');
        pcbAsinAulBloque.setFieldFind(true);
		pcbAsinAulTipAulas = powerComboBox.create('pcbAsinAulTipAulas', 'pcbAsinAulTipAulas', 'Tipo de Aula (^):', 1,120);
        pcbAsinAulTipAulas.enableReadOnlyEditor();
        pcbAsinAulTipAulas.addEmptyOption();
        pcbAsinAulTipAulas.setValidEmpty();
        pcbAsinAulTipAulas.setFieldFind(true);
        pcbAsinAulAulas = powerComboBox.create('pcbAsinAulAulas', 'pcbAsinAulAulas', 'Aula (^):', 1,75);
        pcbAsinAulAulas.enableReadOnlyEditor();
        pcbAsinAulAulas.addEmptyOption();
        pcbAsinAulAulas.setValidEmpty();
        pcbAsinAulAulas.setDataType('string');
        pcbAsinAulAulas.setFieldFind(true);
        pcbAsinAulAulas.setWidthCombo(117);
        gridsAsinAulas = grids.create('gridsAsinAulas', 10, 13);
        imgButtonsAsinAulAgregar = imgButtons.create('imgButtonsAsinAulAgregar', 'Agregar', 'ok.png');
        imgButtonsAsinAulEliminar = imgButtons.create('imgButtonsAsinAulEliminar', 'Eliminar', 'eliminar.png');
        imgButtonsAsinAulEliminar.setDisable();
        imgButtonsAsinAulLimpiar = imgButtons.create('imgButtonsAsinAulLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsAsinAulReporte = imgButtons.create('imgButtonsAsinAulReporte', 'Reporte', 'print.png');
		imgButtonsAsinAulBuscar = imgButtons.create('imgButtonsAsinAulBuscar', 'Buscar', 'icono_buscar.png');
        imgButtonsAsinAulSalir = imgButtons.create('imgButtonsAsinAulSalir', 'Salir', 'salir.png');
        imgButtonsAsinAulAgregar.setDimension(90, 22);
        imgButtonsAsinAulEliminar.setDimension(90, 22);
        imgButtonsAsinAulLimpiar.setDimension(90, 22);
        imgButtonsAsinAulReporte.setDimension(90, 22);
        imgButtonsAsinAulBuscar.setDimension(90, 22);
        imgButtonsAsinAulSalir.setDimension(90, 22);
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsAsinAulas_Init();
        this.gridsAsinAulas_Init();
        this.createMWs();
    },
    
    limpiar: function(){
    	pcbAsinAulOrg.setSelectedIndex(0);
    	Tool.rstPwrCmb(pcbAsinAulSubOrg);
    	Tool.rstPwrCmb(pcbAsinAulCarrera);
    	Tool.rstPwrCmb(pcbAsinAulPeriodo);
    	Tool.rstPwrCmb(pcbAsinAulBloque);
    	Tool.rstPwrCmb(pcbAsinAulTipAulas);
    	Tool.rstPwrCmb(pcbAsinAulAulas);
        gridsAsinAulas.clean();
        dialogsAsinAulas.setMsg("");
        imgButtonsAsinAulAgregar.setEnable();
        imgButtonsAsinAulEliminar.setDisable();
        imgButtonsAsinAulReporte.setDisable();
		Tool.cnnSrv('MantObject', 'getMantCreMateriaInit', this.windowName + '.loadInit()');
    },
    
    loadInit: function(){
		Tool.loadPowerComboData(dialogsAsinAulas, pcbAsinAulOrg, 0, 1, json('getData'));
		Tool.loadPowerComboData(dialogsAsinAulas, pcbAsinAulTipAulas, 0, 1, json('getMantTipAula'));
		Tool.getContext(dialogsAsinAulas, pcbAsinAulOrg, pcbAsinAulSubOrg, pcbAsinAulCarrera, this.windowName + ".resetElements('carr')");
	},

	buscar: function(){
		if (pcbAsinAulCarrera.valid(dialogsAsinAulas))
	        if (pcbAsinAulPeriodo.valid(dialogsAsinAulas)){
	        	gridsAsinAulas.clean();
	        	Tool.getGridData('MantObject', 'getAsinAulas', dialogsAsinAulas, gridsAsinAulas, false, pcbAsinAulOrg, pcbAsinAulSubOrg, pcbAsinAulCarrera.setModeReturnGetText(2), pcbAsinAulPeriodo, pcbAsinAulBloque, pcbAsinAulBloque, pcbAsinAulTipAulas, pcbAsinAulTipAulas, pcbAsinAulAulas, pcbAsinAulAulas);
	        	imgButtonsAsinAulReporte.setEnable();
	        }
    },
	
    setData: function(){
        var rlx = xmlStructs.createRecordList("rlx");

        if (gridsAsinAulas.getDataCell(1) != "") { 
            imgButtonsAsinAulAgregar.setDisable();
            imgButtonsAsinAulEliminar.setEnable();
            rlx.addStr('reg', gridsAsinAulas.getDataCell(6));
			rlx.addInt('reg', gridsAsinAulas.getDataCell(7));
			rlx.addInt('reg', gridsAsinAulas.getDataCell(11));
			rlx.addInt('reg', gridsAsinAulas.getDataCell(12));
			Tool.cnnSrv('MantObject', 'getBloqueAula', this.windowName + '.loadAula()', rlx);
        }
    },

	loadAula: function(){
		pcbAsinAulOrg.findOption(gridsAsinAulas.getDataCell(11));
		Tool.loadPowerComboData(dialogsAsinAulas, pcbAsinAulTipAulas, 0, 1, json('getMantAulaTipoAula'));
		Tool.loadPowerComboData(dialogsAsinAulas, pcbAsinAulAulas, 0, 0, json('getMantAulaBloqueAula'));
		Tool.loadPowerComboData(dialogsAsinAulas, pcbAsinAulSubOrg, 1, 2, json('getMantSuborganizacion'));
		Tool.loadPowerComboData(dialogsAsinAulas, pcbAsinAulCarrera, -1, 3, json('getMantenimientodeCarrera'));
        pcbAsinAulBloque.findOption(gridsAsinAulas.getDataCell(6));
        pcbAsinAulTipAulas.findOption(gridsAsinAulas.getDataCell(7));
        pcbAsinAulAulas.findOption(gridsAsinAulas.getDataCell(8));
        pcbAsinAulSubOrg.findOption(gridsAsinAulas.getDataCell(12));
        pcbAsinAulCarrera.findOption(gridsAsinAulas.getDataCell(13),2);
	},
    
    resetElements : function(element) {
    	if (element == 'org') {
    		Tool.rstPwrCmb(pcbAsinAulSubOrg);
    		Tool.rstPwrCmb(pcbAsinAulCarrera);
	  		Tool.rstPwrCmb(pcbAsinAulPeriodo);
    		if (pcbAsinAulOrg.getOption() != "")
    			Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsAsinAulas, pcbAsinAulSubOrg, 1, 2, pcbAsinAulOrg);
    	}
		else if (element == 'suborg') {
			Tool.rstPwrCmb(pcbAsinAulCarrera);
	  		Tool.rstPwrCmb(pcbAsinAulPeriodo);
    		if (pcbAsinAulSubOrg.getOption() != "")
    			Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsAsinAulas, pcbAsinAulCarrera, -1, 3, pcbAsinAulSubOrg);		
    	}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbAsinAulPeriodo);
	    	if (pcbAsinAulCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsAsinAulas, pcbAsinAulPeriodo, 0, 1, pcbAsinAulCarrera.setModeReturnGetText(5));
		}
		else if (element == 'tipo') {
			Tool.rstPwrCmb(pcbAsinAulBloque);
			Tool.rstPwrCmb(pcbAsinAulAulas);
			Tool.getPowerComboData('MantObject', 'getAsinAulasBloque', dialogsAsinAulas, pcbAsinAulBloque, 0, 1, pcbAsinAulTipAulas);
			imgButtonsAsinAulReporte.setDisable();			
			return;
		}
		else if (element == 'bloq') {
			gridsAsinAulas.clean();
    		Tool.rstPwrCmb(pcbAsinAulAulas);
    		Tool.getPowerComboData('MantObject', 'getMantAulaBloqueAula', dialogsAsinAulas, pcbAsinAulAulas, 0, 0, pcbAsinAulBloque, pcbAsinAulTipAulas);
    	}
        imgButtonsAsinAulAgregar.setEnable();
        imgButtonsAsinAulEliminar.setDisable();
	},
	
    setEvents: function() {
        pcbAsinAulOrg.onChange(this.windowName + ".resetElements('org')");
		pcbAsinAulSubOrg.onChange(this.windowName + ".resetElements('suborg')");
		pcbAsinAulCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbAsinAulPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbAsinAulBloque.onChange(this.windowName + ".resetElements('bloq')");
		pcbAsinAulTipAulas.onChange(this.windowName + ".resetElements('tipo')");
		imagesAsinAulas.onClick(this.windowName + ".callDuplicar()");
    	gridsAsinAulas.onClickCells(this.windowName+".setData()");	
        imgButtonsAsinAulAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
        imgButtonsAsinAulEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
        imgButtonsAsinAulBuscar.onClick(this.windowName + ".buscar()");
        imgButtonsAsinAulLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsAsinAulReporte.onClick(this.windowName + ".reporte()");
        imgButtonsAsinAulSalir.onClick('dialogsAsinAulas.close()');
	},
	
	callDuplicar: function() {
		if (pcbAsinAulPeriodo.valid(dialogsAsinAulas)) {	
			DuplPeriodo.setExtFnc('AsinAulas.duplicar()');
			DuplPeriodo.setNvlAcademic(pcbAsinAulCarrera.setModeReturnGetText(5).getText());
			DuplPeriodo.show();
		}
	},
    
	duplicar: function() {
        var rlx = xmlStructs.createRecordList("rlx");

        rlx.addInt('reg', idPeriodoDuplPeriodo);
		rlx.add('reg', pcbAsinAulPeriodo);
		Tool.cnnSrv('MantObject', 'duplicarPeriodoAulaCarrera', this.windowName + '.limpiar()', rlx);
	},

    limpiarCoreUpdate: function(){
    	pcbAsinAulAulas.setSelectedIndex(0);
        gridsAsinAulas.clean();
        dialogsAsinAulas.setMsg("");
        imgButtonsAsinAulAgregar.setEnable();
        imgButtonsAsinAulEliminar.setDisable();
        this.buscar();
    },

    coreUpdate: function(methodName) {
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (methodName == 'eliminar') {
    		if (pcbAsinAulCarrera.valid(dialogsAsinAulas)) 
    			if (pcbAsinAulPeriodo.valid(dialogsAsinAulas))
					if (pcbAsinAulAulas.valid(dialogsAsinAulas)) {
						rlx.add('reg',pcbAsinAulPeriodo);
                		rlx.add('reg',pcbAsinAulCarrera.setModeReturnGetText(2));
						rlx.add('reg',pcbAsinAulAulas);
               			procesar = true;
           			 }
        }
        else {
            if (pcbAsinAulSubOrg.valid(dialogsAsinAulas)) 
                if (pcbAsinAulCarrera.valid(dialogsAsinAulas))
				 	if (pcbAsinAulPeriodo.valid(dialogsAsinAulas)) 
                    	if (pcbAsinAulBloque.valid(dialogsAsinAulas)) 
                        	if (pcbAsinAulAulas.valid(dialogsAsinAulas)) {
                            	rlx.add('reg', pcbAsinAulAulas);
                            	rlx.add('reg',pcbAsinAulPeriodo);
                            	rlx.add('reg',pcbAsinAulCarrera.setModeReturnGetText(2));
                            	if (methodName == 'modificar') {
                                	rlx.addStr('reg', this.hideIdAula);
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
		rep = new Report('landscape');
		rep.setPositionIcon(1088,108);//IMAGEN ICONO DE IMPRESORA/// 
		rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();	
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addHeadTitle('LISTADO DE AULAS ASIGNADAS AL PROGRAMA',true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),8,'courier','bold');
        rep.addBar(0,152,1128,200,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addLine(0,146,1128,146,rep.getRGBAObj(210,210,210,1),1,false);
        rep.addLine(0,206,1128,206,rep.getRGBAObj(210,210,210,1),1,false);
		rep.addText(20, 170,'ORGANIZACIÓN:',false);
        rep.addText(123, 170,pcbAsinAulOrg.getValue(),false);
		rep.addText(300, 170, 'SUBORGANIZACIÓN:',false);
		rep.addText(424, 170,pcbAsinAulSubOrg.getValue(),false);
		rep.addText(680, 170, 'PROGRAMA:',false);
		rep.addText(746, 170,pcbAsinAulCarrera.getValue(),false);
		rep.addText(20, 190, 'PERIODO:',false);
		rep.addText(123, 190,pcbAsinAulPeriodo.getValue(),false);
		//////////////////////////////////////////TABLA DE DATOS////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
        rep.setTableRowProperties(20, 180, 180, 180, 'bold helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'bold helvetica', 8);	
        rep.addTable('tablaAsigAulCarrera',['Cod. Aula','Descripción de Aula','Tipo de Aula','Bloque']);
        rep.setTotalRowTable(23);
		rep.setHeightRow(23);
        rep.setSizeColumnArray([100,540,200,290]);
        rep.setAlignData(['center','left','left','left']);
        rep.addJsonData('tablaAsigAulCarrera','getAsinAulas',[7,4,3,2]); 		  
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
