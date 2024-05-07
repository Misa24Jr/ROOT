var dialogsAsigLiteral = new Object();
var pcbAsigLitOrg = new Object();
var pcbAsigLitSuborg = new Object();
var pcbAsigLitCarrera = new Object();
var pcbAsigLitPosicion = new Object();
var pcbAsigLitSeccion = new Object();
var pcbAsigLitPeriodo = new Object();
var customGridAsigLiteral = new Object();
var imgButtonsAsigLitGuardar = new Object();
var imgButtonsAsigLitEliminar = new Object();
var imgButtonsAsigLitLimpiar = new Object();
var imgButtonsAsigLitReporte = new Object();
var imgButtonsAsigLitSalir = new Object();
var mw_AsigLiteral = new Object();//minWindow
var rl = new Object();

var AsigLiteral = {
    windowName: 'AsigLiteral',
    isCreate: false,
    hideId: -1,
    
    show : function(){  
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
			this.limpiar();			
		dialogsAsigLiteral.show();
	},
	
	hide : function(){
		dialogsAsigLiteral.hide();
	},
	
    createMWs: function(){
        mwAsigLiteral = desktop.addMinWindow('A.Literal.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsAsigLiteral.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsAsigLiteral_Init : function(){
        dialogsAsigLiteral.setMinimizeXY(0,0);
        dialogsAsigLiteral.setCenterScreen();
        dialogsAsigLiteral.addSpace(0,0,20);
        dialogsAsigLiteral.addLn(1,1,1);
		dialogsAsigLiteral.setHeightCell(1,1,10);
        dialogsAsigLiteral.addObjToDialog(pcbAsigLitOrg,2,1,24);
        dialogsAsigLiteral.addObjToDialog(pcbAsigLitSuborg,2,1,24);
        dialogsAsigLiteral.addObjToDialog(pcbAsigLitCarrera,2,1,24);
        dialogsAsigLiteral.adjAllMarginObj(2,1,5);
        dialogsAsigLiteral.addObjToDialog(pcbAsigLitPeriodo,3,1,24);
        dialogsAsigLiteral.addObjToDialog(pcbAsigLitPosicion,3,1,24);
        dialogsAsigLiteral.addObjToDialog(pcbAsigLitSeccion,3,1,24);
		dialogsAsigLiteral.adjAllMarginObj(3,1,5);   		
		dialogsAsigLiteral.addObject(customGridAsigLiteral,20,90);        
        dialogsAsigLiteral.addLn(5,1,1);
		dialogsAsigLiteral.setHeightCell(5,1,560);
		dialogsAsigLiteral.addObjToDialog(imgButtonsAsigLitGuardar,6,1);
		dialogsAsigLiteral.addObjToDialog(imgButtonsAsigLitEliminar,6,1);
        dialogsAsigLiteral.addObjToDialog(imgButtonsAsigLitLimpiar,6,1);
        dialogsAsigLiteral.addObjToDialog(imgButtonsAsigLitReporte,6,1);
        dialogsAsigLiteral.addObjToDialog(imgButtonsAsigLitSalir,6,1);
        dialogsAsigLiteral.adjAllMarginObj(6,1,22);
        dialogsAsigLiteral.leftMarginObj(6,1,0,100);  
	},
	
    create : function(){
    	dialogsAsigLiteral = dialogs.create('dialogsAsigLiteral',0,0,790,648,'ASIGNAR LITERAL');
    	dialogsAsigLiteral.setAdjY(70);
    	pcbAsigLitOrg = powerComboBox.create('pcbAsigLitOrg','pcbAsigLitOrg','Organización (+):',1,103);
    	pcbAsigLitOrg.enableReadOnlyEditor();
    	pcbAsigLitOrg.addEmptyOption();
    	pcbAsigLitOrg.setValidEmpty();
    	pcbAsigLitSuborg = powerComboBox.create('pcbAsigLitSuborg','pcbAsigLitSuborg','Suborganización (^):',1,123);
    	pcbAsigLitSuborg.enableReadOnlyEditor();
    	pcbAsigLitSuborg.addEmptyOption();
    	pcbAsigLitSuborg.setValidEmpty();
    	pcbAsigLitCarrera = powerComboBox.create('pcbAsigLitCarrera','pcbAsigLitCarrera','Carrera (^):',1,71);
    	pcbAsigLitCarrera.enableReadOnlyEditor();
    	pcbAsigLitCarrera.addEmptyOption();
    	pcbAsigLitCarrera.setValidEmpty();
    	pcbAsigLitCarrera.setFieldFind(true);
    	pcbAsigLitPeriodo = powerComboBox.create('pcbAsigLitPeriodo','pcbAsigLitPeriodo','Periodo (^):',1,103);
    	pcbAsigLitPeriodo.enableReadOnlyEditor();
    	pcbAsigLitPeriodo.addEmptyOption();
    	pcbAsigLitPeriodo.setValidEmpty();
    	pcbAsigLitPosicion = powerComboBox.create('pcbAsigLitPosicion','pcbAsigLitPosicion','Posición (^):',1,123);
    	pcbAsigLitPosicion.enableReadOnlyEditor();
    	pcbAsigLitPosicion.addEmptyOption();
    	pcbAsigLitPosicion.setValidEmpty();
    	pcbAsigLitPosicion.setFieldFind(true);
    	pcbAsigLitSeccion = powerComboBox.create('pcbAsigLitSeccion','pcbAsigLitSeccion','Sección (^):',1,71);
    	pcbAsigLitSeccion.enableReadOnlyEditor();
    	pcbAsigLitSeccion.addEmptyOption();
    	pcbAsigLitSeccion.setValidEmpty();
    	pcbAsigLitSeccion.setDataType("string");
    	pcbAsigLitSeccion.setFieldFind(true);
		customGridAsigLiteral = customGrid.create('cgLiteral','EVALUACION',494,750,26,18);
		customGridAsigLiteral.loadColumnTypeStruct(null, [customGrid.TYPE_COLUMN_EDIT,
            											customGrid.TYPE_COLUMN_EDIT,
            											customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_RADIO,
		                                                customGrid.TYPE_COLUMN_RADIO,
		                                                customGrid.TYPE_COLUMN_RADIO,
		                                                customGrid.TYPE_COLUMN_RADIO,
		                                                customGrid.TYPE_COLUMN_RADIO,
		                                                customGrid.TYPE_COLUMN_RADIO,
		                                                customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT],
		                                                [25,100,237,237,15,15,15,15,15,15,0,0]);
		customGridAsigLiteral.addTitleVectorX(['Nº','C.i.','Apellido','Nombre','A','B','C','D','E','P','idPers','literal']);
		customGridAsigLiteral.groupRadioByRow([4,5,6,7,8,9],'Group');
		customGridAsigLiteral.setSelectedLnMode(0);
		customGridAsigLiteral.hideCol(10);
		customGridAsigLiteral.hideCol(11);
		imgButtonsAsigLitGuardar = imgButtons.create('imgButtonsAsigLitGuardar','Guardar.','ok.png');
		imgButtonsAsigLitEliminar = imgButtons.create('imgButtonsAsigLitEliminar','Eliminar','eliminar.png');
    	imgButtonsAsigLitLimpiar = imgButtons.create('imgButtonsAsigLitLimpiar','Limpiar','limpiar.png');		
    	imgButtonsAsigLitReporte = imgButtons.create('imgButtonsCreaBolReporte','Reporte','print.png'); 		  
    	imgButtonsAsigLitSalir = imgButtons.create('imgButtonsAsigLitSalir','Salir','salir.png');		
    	imgButtonsAsigLitGuardar.setDimension(90,22);
    	imgButtonsAsigLitEliminar.setDimension(90,22);
    	imgButtonsAsigLitLimpiar.setDimension(90,22);	
    	imgButtonsAsigLitReporte.setDimension(90,22);
    	imgButtonsAsigLitSalir.setDimension(90,22);
  	},

  	init : function(){
  		this.create();
  		this.setEvents();
  		this.dialogsAsigLiteral_Init();
  		this.createMWs();
  	},

  	limpiar : function() {
  		this.hideId = -1;
  		pcbAsigLitOrg.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbAsigLitSuborg);
  		Tool.rstPwrCmb(pcbAsigLitCarrera);
  		Tool.rstPwrCmb(pcbAsigLitPeriodo);
  		Tool.rstPwrCmb(pcbAsigLitPosicion);
  		Tool.rstPwrCmb(pcbAsigLitSeccion);
		customGridAsigLiteral.clean();
		imgButtonsAsigLitEliminar.setDisable();
		imgButtonsAsigLitReporte.setDisable();
		dialogsAsigLiteral.setMsg("");
		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsAsigLiteral, pcbAsigLitOrg, 0, 1, json('getData'));
		Tool.getContext(dialogsAsigLiteral, pcbAsigLitOrg, pcbAsigLitSuborg, pcbAsigLitCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function() {
		pcbAsigLitOrg.onChange(this.windowName + ".resetElements('org')");
		pcbAsigLitSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbAsigLitCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbAsigLitPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbAsigLitPosicion.onChange(this.windowName + ".resetElements('pos')");
		pcbAsigLitSeccion.onChange(this.windowName + ".buscar()");
		customGridAsigLiteral.onClickCells(this.windowName + ".setData()");
		imgButtonsAsigLitGuardar.onClick(this.windowName + ".coreUpdate('guardar')");
		imgButtonsAsigLitEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
		imgButtonsAsigLitLimpiar.onClick(this.windowName + ".limpiar()");
    	imgButtonsAsigLitReporte.onClick(this.windowName + ".reporte()");
        imgButtonsAsigLitSalir.onClick('dialogsAsigLiteral.close()');
    },
    
    setData: function() {
    	this.hideId = customGridAsigLiteral.getDataCell(customGridAsigLiteral.getActualRow(), 10);
    	imgButtonsAsigLitEliminar.setEnable();
    },
    
    buscar: function() {
    	var rlx = xmlStructs.createRecordList("rlx");
    	
    	rlx.add('reg', pcbAsigLitPeriodo);
		rlx.add('reg', pcbAsigLitCarrera.setModeReturnGetText(2));
    	rlx.add('reg', pcbAsigLitPosicion);
    	rlx.add('reg', pcbAsigLitSeccion);
	  	Tool.cnnSrv('MantObject', 'getAlumnoAsigLiteral', this.windowName + '.loadDataAlumnoLiteral()', rlx);
    },
    
    loadDataAlumnoLiteral : function() {
    	imgButtonsAsigLitReporte.setEnable();
		customGridAsigLiteral.loadDataStruct(json('getAlumnoAsigLiteral'));
    },

    resetElements : function(element) {
    	var rlx = xmlStructs.createRecordList("rlx");

    	customGridAsigLiteral.clean();
		imgButtonsAsigLitEliminar.setDisable();
		imgButtonsAsigLitReporte.setDisable();

		if (element == 'org') {
			Tool.rstPwrCmb(pcbAsigLitSuborg);
	  		Tool.rstPwrCmb(pcbAsigLitCarrera);
	  		Tool.rstPwrCmb(pcbAsigLitPeriodo);
			Tool.rstPwrCmb(pcbAsigLitPosicion);
    		Tool.rstPwrCmb(pcbAsigLitSeccion);
	    	if (pcbAsigLitOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsAsigLiteral, pcbAsigLitSuborg, 1, 2, pcbAsigLitOrg);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbAsigLitCarrera);
	  		Tool.rstPwrCmb(pcbAsigLitPeriodo);
			Tool.rstPwrCmb(pcbAsigLitPosicion);
    		Tool.rstPwrCmb(pcbAsigLitSeccion);
	    	if (pcbAsigLitSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsAsigLiteral, pcbAsigLitCarrera, -1, 3, pcbAsigLitSuborg);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbAsigLitPeriodo);
			Tool.rstPwrCmb(pcbAsigLitPosicion);
    		Tool.rstPwrCmb(pcbAsigLitSeccion);
	    	if (pcbAsigLitCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsAsigLiteral, pcbAsigLitPeriodo, 0, 1, pcbAsigLitCarrera.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
			Tool.rstPwrCmb(pcbAsigLitPosicion);
    		Tool.rstPwrCmb(pcbAsigLitSeccion);
			rlx.add('reg', pcbAsigLitPeriodo);
			rlx.add('reg', pcbAsigLitCarrera.setModeReturnGetText(2));
			Tool.cnnSrv('MantObject', 'getMantProyAulaInit', this.windowName + '.loadDataPosicion()', rlx);
    	} 
    	else if (element == 'pos') {
    		Tool.rstPwrCmb(pcbAsigLitSeccion);
        	rlx.add('reg', pcbAsigLitPeriodo);
    		rlx.add('reg', pcbAsigLitCarrera.setModeReturnGetText(2));
    		rlx.add('reg', pcbAsigLitPosicion);
    		Tool.cnnSrv('MantObject', 'getMantProyAulaSeccPers', this.windowName + '.loadDataSeccion()', rlx);
    	}  
	},

	loadDataPosicion: function() {
    	var rlx = xmlStructs.createRecordList("rlx");

		Tool.loadPowerComboData(dialogsAsigLiteral, pcbAsigLitPosicion, 0, 1, json('getPosicion'));
    	if (json('getPosicion').data[0].length == 1) {
    		pcbAsigLitPosicion.setSelectedIndex(1);
        	this.resetElements('pos');
    	}
    },

    loadDataSeccion: function() {
		Tool.loadPowerComboData(dialogsAsigLiteral, pcbAsigLitSeccion, 0, 1, json('getSeccionPersona'));
    	if (json('getSeccionPersona').data[0].length == 1) {
    		pcbAsigLitSeccion.setSelectedIndex(1);
    		this.buscar();
    	}
    },	
	
	reporte : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,30);
        //rep.setNoRepeatHead();
        //rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','bold');
        rep.addBar(0,0,1128,78,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 20, 'ORGANIZACION:         '+pcbAsigLitOrg.getOption(),false);
		rep.addText(20, 38, 'SUBORGANIZACION: '+pcbAsigLitSuborg.getOption(),false);
		rep.addText(20, 56, 'CARRERA:                   '+pcbAsigLitCarrera.getOption(),false);
		rep.addText(480, 20, 'POSICION:  '+pcbAsigLitPosicion.getOption(),false);
		rep.addText(480, 38, 'SECCIÓN:    '+pcbAsigLitSeccion.getOption(),false);
		rep.addText(480, 56, 'PERIODO:   '+pcbAsigLitPeriodo.getOption(),false);
		rep.addBar(0,83,1128,116,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),13,'courier','bold');
		rep.addText(270, 108, 'LITERAL DEL ESTUDIANTE',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);		
		rep.addTable('TablaRepoAluPorSeccion',['Nº','Cedula','Apellidos','Nombres','Literal'],400,120);
		rep.setTotalRowTable(45);
		rep.setHeightRow(17);
        rep.setSizeColumnArray([24,90,302,302,80]);
        rep.setAlignData(['right','center','left','left','center']); 
        rep.addJsonData('TablaRepoAluPorSeccion','getAlumnoAsigLiteral',[0,1,2,3,11]);		
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),12,'courier','bold');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
    
	limpiarCoreUpdate: function() {
    	this.hideId = -1;
		imgButtonsAsigLitEliminar.setDisable();
		this.buscar();
	},
	
	coreUpdate: function(methodName) {
    	var rlx = xmlStructs.createRecordList("rlx");
    	
    	if (customGridAsigLiteral.getTotalRowStruct() > 0) {
			if (methodName == 'guardar') {
	            for (var f = 0; f < customGridAsigLiteral.struct.getTotalRows(); f++) {
	            	var reg = "";
	            	var literal = 0;
	            	
	            	if (customGridAsigLiteral.struct.data[4][f] == true)
	            		literal = 1;
	            	else if (customGridAsigLiteral.struct.data[5][f] == true)
	            		literal = 2;
	            	else if (customGridAsigLiteral.struct.data[6][f] == true)
	            		literal = 3;
	            	else if (customGridAsigLiteral.struct.data[7][f] == true)
	            		literal = 4;
	            	else if (customGridAsigLiteral.struct.data[8][f] == true)
	            		literal = 5;
	            	else if (customGridAsigLiteral.struct.data[9][f] == true)
	            		literal = 6;
	            		
	            	if (literal != 0) {
	                	reg = customGridAsigLiteral.struct.data[10][f];
	                	reg+= "###" + pcbAsigLitPeriodo.getText();
	                	reg+= "###" + literal;
	                	rlx.addStr('reg' + f, reg);
	            	}
	            }
				Tool.cnnSrv("MantObject", "guardarAsigLiteral", this.windowName + ".limpiarCoreUpdate()", rlx);
			}
			else {
		    	if (this.hideId != -1) {
					rlx.addInt('reg', this.hideId);
					rlx.add('reg', pcbAsigLitPeriodo);
					Tool.cnnSrv("MantObject", "eliminarAsigLiteral", this.windowName + ".limpiarCoreUpdate()", rlx);
		    	}
			}
    	}
    }
}
