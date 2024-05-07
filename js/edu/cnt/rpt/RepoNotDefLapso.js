var dialogsRepoNotDefLapso = new Object();
var pcbRepoNotDefLapOrganizacion = new Object();
var pcbRepoNotDefLapSuborganizacion = new Object();
var pcbRepoNotDefLapCarrera = new Object();
var pcbRepoNotDefLapPeriodo = new Object();
var pcbRepoNotDefLapLapso = new Object();
var pcbRepoNotDefLapPosicion = new Object();
var pcbRepoNotDefLapMateria = new Object();
var pcbRepoNotDefLapSeccion = new Object();
var pcbRepoNotDefLapTamPapel = new Object();
var editsRepoNotDefLapsoFSize = {};
var editsRepoNotDefLapsoWCell = {};
var editsRepoNotDefLapsoCMat = {};
var imgButtonsRepoNotDefRepPorFinales = new Object();
var imgButtonsRepoNotDefRepPorMateria = new Object();
var imgButtonsRepoNotDefLapSalir = new Object();
var mwRepoNotDefLapso = new Object();//minWindow

var RepoNotDefLapso = {   
    windowName: 'RepoNotDefLapso',
    isCreate: false,
    
    show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsRepoNotDefLapso.isByClean())
			this.limpiar('lmp');			
		dialogsRepoNotDefLapso.show();
	},
	
	hide : function(){
		dialogsRepoNotDefLapso.hide();
	},
	
    createMWs: function(){
    	mwRepoNotDefLapso = desktop.addMinWindow('R.N.D.Lapso', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoNotDefLapso.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

	dialogsRepoNotDefLapso_Init : function(){
        dialogsRepoNotDefLapso.setMinimizeXY(0,0);
        dialogsRepoNotDefLapso.setCenterScreen();
        dialogsRepoNotDefLapso.addSpace(0,0,20);
        dialogsRepoNotDefLapso.addLn(1,1,1);
		dialogsRepoNotDefLapso.setHeightCell(1,1,10);
        dialogsRepoNotDefLapso.addObjToDialog(pcbRepoNotDefLapOrganizacion,2,1,24);
        dialogsRepoNotDefLapso.addObjToDialog(pcbRepoNotDefLapSuborganizacion,2,1,24);
        dialogsRepoNotDefLapso.addObjToDialog(pcbRepoNotDefLapCarrera,2,1,24);
        dialogsRepoNotDefLapso.adjAllMarginObj(2,1,10);
        dialogsRepoNotDefLapso.addObjToDialog(pcbRepoNotDefLapPeriodo,3,1,24);
        dialogsRepoNotDefLapso.addObjToDialog(pcbRepoNotDefLapPosicion,3,1,24);
        dialogsRepoNotDefLapso.addObjToDialog(pcbRepoNotDefLapSeccion,3,1,24);
        dialogsRepoNotDefLapso.adjAllMarginObj(3,1,10);
        dialogsRepoNotDefLapso.addObjToDialog(pcbRepoNotDefLapMateria,4,1,24);
        pcbRepoNotDefLapMateria.setWidthCombo(411);
        dialogsRepoNotDefLapso.addObjToDialog(pcbRepoNotDefLapLapso,4,1,24);
        dialogsRepoNotDefLapso.adjAllMarginObj(4,1,10);
        dialogsRepoNotDefLapso.addLn(5,1,1);
		dialogsRepoNotDefLapso.setHeightCell(5,1,35);
		dialogsRepoNotDefLapso.addObject(pcbRepoNotDefLapTamPapel, 20, 109);
		pcbRepoNotDefLapTamPapel.addOptionAndSimpleValue(null, 'OFICIO', 'OFICIO');
		pcbRepoNotDefLapTamPapel.addOptionAndSimpleValue(null, 'CARTA', 'CARTA');
		pcbRepoNotDefLapTamPapel.setSelectedIndex(1);
		dialogsRepoNotDefLapso.addObject(editsRepoNotDefLapsoFSize, 282, 110);
		dialogsRepoNotDefLapso.addObject(editsRepoNotDefLapsoWCell, 282, 135);
		dialogsRepoNotDefLapso.addObject(editsRepoNotDefLapsoCMat, 282, 160);
		dialogsRepoNotDefLapso.setHeightCell(5,1,85);
		dialogsRepoNotDefLapso.addObjToDialog(imgButtonsRepoNotDefRepPorFinales,6,1);
    	imgButtonsRepoNotDefRepPorFinales.setDimension(90,22);
		dialogsRepoNotDefLapso.addObjToDialog(imgButtonsRepoNotDefRepPorMateria,6,1);
    	imgButtonsRepoNotDefRepPorMateria.setDimension(90,22);
		dialogsRepoNotDefLapso.addObjToDialog(imgButtonsRepoNotDefLapSalir,6,1);
    	imgButtonsRepoNotDefLapSalir.setDimension(90,22);
        dialogsRepoNotDefLapso.adjAllMarginObj(6,1,30);
        dialogsRepoNotDefLapso.leftMarginObj(6,1,0,218);
	},
 
	create : function(){
		dialogsRepoNotDefLapso = dialogs.create('dialogsRepoNotDefLapso',0,0,810,200,'NOTAS DEFINITIVAS POR LAPSO');
		dialogsRepoNotDefLapso.setAdjY(80);
		
		pcbRepoNotDefLapOrganizacion = powerComboBox.create('pcbRepoNotDefLapOrganizacion','pcbRepoNotDefLapOrganizacion','Organización (+):',1,103);
		pcbRepoNotDefLapOrganizacion.enableReadOnlyEditor();
		pcbRepoNotDefLapOrganizacion.addEmptyOption();
		pcbRepoNotDefLapOrganizacion.setValidEmpty();
		
		pcbRepoNotDefLapTamPapel = powerComboBox.create('pcbRepoNotDefLapTamPapel','pcbRepoNotDefLapTamPapel','Tamaño Papel:',1,103);
		pcbRepoNotDefLapTamPapel.enableReadOnlyEditor();
		pcbRepoNotDefLapTamPapel.addEmptyOption();
		pcbRepoNotDefLapTamPapel.setValidEmpty();
		
		pcbRepoNotDefLapSuborganizacion = powerComboBox.create('pcbRepoNotDefLapSuborganizacion','pcbRepoNotDefLapSuborganizacion','Suborganización (^):',1,123);
		pcbRepoNotDefLapSuborganizacion.enableReadOnlyEditor();
		pcbRepoNotDefLapSuborganizacion.addEmptyOption();
		pcbRepoNotDefLapSuborganizacion.setValidEmpty();
		pcbRepoNotDefLapCarrera = powerComboBox.create('pcbRepoNotDefLapCarrera','pcbRepoNotDefLapCarrera','Carrera (^):',1,76);
		pcbRepoNotDefLapCarrera.enableReadOnlyEditor();
		pcbRepoNotDefLapCarrera.addEmptyOption();
		pcbRepoNotDefLapCarrera.setValidEmpty();
		pcbRepoNotDefLapPeriodo = powerComboBox.create('pcbRepoNotDefLapPeriodo','pcbRepoNotDefLapPeriodo','Periodo (^):',1,103);
		pcbRepoNotDefLapPeriodo.enableReadOnlyEditor();
		pcbRepoNotDefLapPeriodo.addEmptyOption();
		pcbRepoNotDefLapPeriodo.setValidEmpty();
		pcbRepoNotDefLapLapso = powerComboBox.create('pcbRepoNotDefLapLapso','pcbRepoNotDefLapLapso','Lapso (^):',1,76);
		pcbRepoNotDefLapLapso.enableReadOnlyEditor();
		pcbRepoNotDefLapLapso.addEmptyOption();
		pcbRepoNotDefLapLapso.setValidEmpty();
		pcbRepoNotDefLapPosicion = powerComboBox.create('pcbRepoNotDefLapPosicion','pcbRepoNotDefLapPosicion','Posición (^):',1,123);
		pcbRepoNotDefLapPosicion.enableReadOnlyEditor();
		pcbRepoNotDefLapPosicion.addEmptyOption();
		pcbRepoNotDefLapPosicion.setValidEmpty();
		pcbRepoNotDefLapMateria = powerComboBox.create('pcbRepoNotDefLapMateria','pcbRepoNotDefLapMateria','Materia (^):',1,103);
		pcbRepoNotDefLapMateria.enableReadOnlyEditor();
		pcbRepoNotDefLapMateria.addEmptyOption();
		pcbRepoNotDefLapMateria.setValidEmpty();
		pcbRepoNotDefLapMateria.setDataType('string');
		pcbRepoNotDefLapMateria.enableOnChangeToEmptyOption();
		pcbRepoNotDefLapSeccion = powerComboBox.create('pcbRepoNotDefLapSeccion','pcbRepoNotDefLapSeccion','Sección (^):',1,76);
		pcbRepoNotDefLapSeccion.enableReadOnlyEditor();
		pcbRepoNotDefLapSeccion.addEmptyOption();	
		pcbRepoNotDefLapSeccion.setValidEmpty();
		editsRepoNotDefLapsoFSize = edits.create('editsRepoNotDefLapsoFSize','editsRepoNotDefLapsoFSize','Tamaño Número:',1,124,'normal');
		editsRepoNotDefLapsoFSize.setValidReal();
		editsRepoNotDefLapsoFSize.setSizeEdit(40);
		editsRepoNotDefLapsoWCell = edits.create('editsRepoNotDefLapsoWCell','editsRepoNotDefLapsoWCell','Ancho Columna:',1,124,'normal');
		editsRepoNotDefLapsoWCell.setValidEmpty();
		editsRepoNotDefLapsoWCell.setSizeEdit(40);
		editsRepoNotDefLapsoCMat = edits.create('editsRepoNotDefLapsoCMat','editsRepoNotDefLapsoCMat','Cantidad Materia:',1,124,'normal');
		editsRepoNotDefLapsoCMat.setValidInteger();
		editsRepoNotDefLapsoCMat.setSizeEdit(40);
		imgButtonsRepoNotDefRepPorFinales = imgButtons.create('imgButtonsRepoNotDefRepPorFinales','Finales','print.png');
		imgButtonsRepoNotDefRepPorMateria = imgButtons.create('imgButtonsRepoNotDefRepPorMateria','Materia','print.png');
		imgButtonsRepoNotDefLapSalir = imgButtons.create('imgButtonsRepoNotDefLapSalir','Salir','salir.png');
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsRepoNotDefLapso_Init();
		this.createMWs();
	},
  
  	limpiar : function(tipo) {
  		pcbRepoNotDefLapOrganizacion.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbRepoNotDefLapSuborganizacion);
  		Tool.rstPwrCmb(pcbRepoNotDefLapCarrera);
  		Tool.rstPwrCmb(pcbRepoNotDefLapPeriodo);
  		Tool.rstPwrCmb(pcbRepoNotDefLapLapso);
  		dialogsRepoNotDefLapso.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoNotDefLapso, pcbRepoNotDefLapOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoNotDefLapso, pcbRepoNotDefLapOrganizacion, pcbRepoNotDefLapSuborganizacion, pcbRepoNotDefLapCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setDefaultDimension: function(swPeriodo) {
		var arreglo;

		if (pcbRepoNotDefLapTamPapel.getOption() == 'OFICIO')
	    	arreglo = json('getSizePapelOficio').data[0][0].split('|');
		else
	    	arreglo = json('getSizePapelCarta').data[0][0].split('|');

		editsRepoNotDefLapsoFSize.setValue(arreglo[0]);
		editsRepoNotDefLapsoWCell.setValue(arreglo[1]);
		editsRepoNotDefLapsoCMat.setValue(arreglo[2]);
  		
  		if (swPeriodo) {
  			Tool.loadPowerComboData(dialogsRepoNotDefLapso, pcbRepoNotDefLapPeriodo, 0, 1, json('getPeriodoXNivelAcad'));
  			pcbRepoNotDefLapPeriodo.setSelectedIndex(1);
  			this.resetElements('per');
  		}
	},

	setEvents: function(){
		pcbRepoNotDefLapOrganizacion.onChange(this.windowName + ".resetElements('org')");
		pcbRepoNotDefLapSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		pcbRepoNotDefLapCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbRepoNotDefLapPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbRepoNotDefLapPosicion.onChange(this.windowName + ".resetElements('pos')");
		pcbRepoNotDefLapLapso.onChange(this.windowName + ".resetElements('lap')");
		pcbRepoNotDefLapMateria.onChange(this.windowName + ".resetElements('mat')");
		pcbRepoNotDefLapTamPapel.onChange(this.windowName + ".setDefaultDimension(false)");
		imgButtonsRepoNotDefRepPorFinales.onClick(this.windowName + ".getDefinitivaFinal()");
		imgButtonsRepoNotDefRepPorMateria.onClick(this.windowName + ".getPtoAdicionalDefLapso()");		
        imgButtonsRepoNotDefLapSalir.onClick('dialogsRepoNotDefLapso.close()');
    },
    
    resetElements : function(element) {
    	var rlx = xmlStructs.createRecordList("rlx");

    	if (element == 'org') {
			Tool.rstPwrCmb(pcbRepoNotDefLapSuborganizacion);
	  		Tool.rstPwrCmb(pcbRepoNotDefLapCarrera);
	  		Tool.rstPwrCmb(pcbRepoNotDefLapPeriodo);
	  		Tool.rstPwrCmb(pcbRepoNotDefLapLapso);
	  		Tool.rstPwrCmb(pcbRepoNotDefLapMateria);
			Tool.rstPwrCmb(pcbRepoNotDefLapPosicion);
			Tool.rstPwrCmb(pcbRepoNotDefLapSeccion);
	    	if (pcbRepoNotDefLapOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoNotDefLapso, pcbRepoNotDefLapSuborganizacion, 1, 2, pcbRepoNotDefLapOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbRepoNotDefLapCarrera);
	  		Tool.rstPwrCmb(pcbRepoNotDefLapPeriodo);
	  		Tool.rstPwrCmb(pcbRepoNotDefLapLapso);
	  		Tool.rstPwrCmb(pcbRepoNotDefLapMateria);
			Tool.rstPwrCmb(pcbRepoNotDefLapPosicion);
			Tool.rstPwrCmb(pcbRepoNotDefLapSeccion);
	    	if (pcbRepoNotDefLapSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoNotDefLapso, pcbRepoNotDefLapCarrera, -1, 3, pcbRepoNotDefLapSuborganizacion);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbRepoNotDefLapPeriodo);
	  		Tool.rstPwrCmb(pcbRepoNotDefLapLapso);
	  		Tool.rstPwrCmb(pcbRepoNotDefLapMateria);
			Tool.rstPwrCmb(pcbRepoNotDefLapPosicion);
			Tool.rstPwrCmb(pcbRepoNotDefLapSeccion);
	    	if (pcbRepoNotDefLapCarrera.getOption() != "") {
		  		rlx.add('reg', pcbRepoNotDefLapCarrera.setModeReturnGetText(5));
	    		Tool.cnnSrv("MantObject", "getPeriodoXNivelAcad", this.windowName + ".setDefaultDimension(true)", rlx);
	    	}
		}
	    else if (element == 'per') {
			Tool.rstPwrCmb(pcbRepoNotDefLapSeccion);
	  		Tool.rstPwrCmb(pcbRepoNotDefLapMateria);
	  		rlx.add('reg', pcbRepoNotDefLapPeriodo);
	  		rlx.add('reg', pcbRepoNotDefLapCarrera.setModeReturnGetText(2));
    		Tool.cnnSrv("ReportObject", "getPosicionPlanifProf", this.windowName + ".loadDataPosicionLapso()", rlx);
    	} 
    	else if (element == 'pos') {
    		pcbRepoNotDefLapLapso.setSelectedIndex(0);
			Tool.rstPwrCmb(pcbRepoNotDefLapSeccion);
	  		rlx.add('reg', pcbRepoNotDefLapPeriodo);
	  		rlx.add('reg', pcbRepoNotDefLapCarrera.setModeReturnGetText(2));
	  		rlx.add('reg', pcbRepoNotDefLapPosicion);
    		Tool.cnnSrv("ReportObject", "getMateriaPlanifProf", this.windowName + ".loadDataMateriaPosicion()", rlx);
    	} 
    	else if (element == 'lap') {
    		Tool.getPowerComboData('ReportObject', 'getMateriaPlanifProf', dialogsRepoNotDefLapso, pcbRepoNotDefLapMateria, 0, 1, pcbRepoNotDefLapPeriodo, pcbRepoNotDefLapCarrera.setModeReturnGetText(2), pcbRepoNotDefLapPosicion);
    	} 
    	else if (element == 'mat') {
    		Tool.getPowerComboData('ReportObject', 'getSeccionPlanifProf', dialogsRepoNotDefLapso, pcbRepoNotDefLapSeccion, -1, 1, pcbRepoNotDefLapPeriodo, pcbRepoNotDefLapCarrera.setModeReturnGetText(2), pcbRepoNotDefLapPosicion, pcbRepoNotDefLapMateria);
    	}
	},

	loadDataMateriaPosicion: function() {
  		Tool.loadPowerComboData(dialogsRepoNotDefLapso, pcbRepoNotDefLapMateria, 0, 1, json('getMateriaPlanifProf'));
  		Tool.loadPowerComboData(dialogsRepoNotDefLapso, pcbRepoNotDefLapSeccion, 0, 1, json('getSeccionPosicion'));
	},

	loadDataPosicionLapso: function() {
  		Tool.loadPowerComboData(dialogsRepoNotDefLapso, pcbRepoNotDefLapPosicion, 0, 1, json('getPosicionPlanifProf'));
  		Tool.loadPowerComboData(dialogsRepoNotDefLapso, pcbRepoNotDefLapLapso, 3, 0, json('getMantLapso'));
	},
	
	reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
		rep.setPositionIcon(756,4);
      //rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
		rep.addBar(0,0,1128,35,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14,'courier','bold');
		rep.addText(225,24,'DEFINITIVAS DE MATERIA POR LAPSO',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.6),8,'helvetica','bold');
		rep.addBar(0,38,1128,97,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 54, 'ORGANIZACION:        '+pcbRepoNotDefLapOrganizacion.getOption(),false);
		rep.addText(20, 72, 'SUBORGANIZACION: '+pcbRepoNotDefLapSuborganizacion.getOption(),false);
		rep.addText(20, 90, 'CARRERA:                  '+pcbRepoNotDefLapCarrera.getOption(),false);
		rep.addText(320, 54, 'PERIODO:   '+pcbRepoNotDefLapPeriodo.getOption(),false);
		rep.addText(320, 72, 'LAPSO:      '+pcbRepoNotDefLapLapso.getOption(),false);
		rep.addText(320, 90, 'POSICION: '+pcbRepoNotDefLapPosicion.getOption(),false);
		rep.addText(490, 54, 'MATERIA:  '+pcbRepoNotDefLapMateria.getOption(),false);
		rep.addText(490, 72, 'SECCION: '+pcbRepoNotDefLapSeccion.getOption(),false);
		//rep.addText(520, 72, 'PROF.: '+json('getMantPersProfCurso').data[0],false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 280, 280, 280, 'helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 9);		
		rep.addTable('TablaRepoNotDefLapso',['Cédula','Apellido','Nombre','Nota','P.A.','DEF.'],400,100);
		rep.setTotalRowTable(48);
		rep.setHeightRow(18);
		rep.setSizeColumnArray([95,270,270,55,55,55]);
		rep.setAlignData(['center','left','left','center','center','center']); 
		rep.addJsonData('TablaRepoNotDefLapso','getPtoAdicionalDefLapso',[0,1,2,3,4,5]); 
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
		rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
		
	reporteFinal : function() {
		var op=pcbRepoNotDefLapTamPapel.getOption().toLowerCase();		
		if(op===''){op='oficio';};
	  	new DefxLapsoPdf({
        paper: op, 
        evaCell:4,
        jsonMat : json('getDefinitivaFinalTotal'),
        jsonData : json('getDefinitivaFinal'),
        fontSizeData : parseFloat(editsRepoNotDefLapsoFSize.getValue()),
        widthCell_ : parseFloat(editsRepoNotDefLapsoWCell.getValue()),  
        totalMatxPage_ : parseInt(editsRepoNotDefLapsoCMat.getValue(),10),
        objHead : {
            title:'NOTAS DEFINITIVAS POR LAPSO',
            institucion: pcbRepoNotDefLapSuborganizacion.getOption(),
            grado : pcbRepoNotDefLapCarrera.getOption(),
            periodo : pcbRepoNotDefLapPeriodo.getOption(),
            seccion : pcbRepoNotDefLapPosicion.getOption() + ' ' + pcbRepoNotDefLapSeccion.getOption(),       
            lapso : pcbRepoNotDefLapLapso.getOption()     
        }
      });
	},
	
	getDefinitivaFinal: function() {
		var rlx = xmlStructs.createRecordList("rlx");
		
		if (pcbRepoNotDefLapPeriodo.valid(dialogsRepoNotDefLapso))
			if (pcbRepoNotDefLapPosicion.valid(dialogsRepoNotDefLapso))
				if (editsRepoNotDefLapsoFSize.valid(dialogsRepoNotDefLapso))
					if (editsRepoNotDefLapsoWCell.valid(dialogsRepoNotDefLapso))
						if (editsRepoNotDefLapsoCMat.valid(dialogsRepoNotDefLapso))
							if (pcbRepoNotDefLapSeccion.valid(dialogsRepoNotDefLapso)) {
								rlx.add('reg', pcbRepoNotDefLapPeriodo);
								if (pcbRepoNotDefLapMateria.getOption() == '') {
									pcbRepoNotDefLapSeccion.setDataType('string');
									rlx.add('reg', pcbRepoNotDefLapSeccion.setModeReturnGetText(0));
								}
								else {
									pcbRepoNotDefLapSeccion.setDataType('int');
									rlx.add('reg', pcbRepoNotDefLapSeccion.setModeReturnGetText(2));
								}
								rlx.add('reg', pcbRepoNotDefLapCarrera.setModeReturnGetText(2));
								rlx.add('reg', pcbRepoNotDefLapPosicion);
								Tool.cnnSrv('MantObject', 'getDefinitivaFinal', this.windowName + '.reporteFinal()', rlx);							
							}
	},
	
	getPtoAdicionalDefLapso: function() {
		var rlx = xmlStructs.createRecordList("rlx");
		
		if (pcbRepoNotDefLapPeriodo.valid(dialogsRepoNotDefLapso))
			if (pcbRepoNotDefLapPosicion.valid(dialogsRepoNotDefLapso))
				if (pcbRepoNotDefLapLapso.valid(dialogsRepoNotDefLapso))
					if (pcbRepoNotDefLapMateria.valid(dialogsRepoNotDefLapso))
						if (pcbRepoNotDefLapSeccion.valid(dialogsRepoNotDefLapso)) {
							pcbRepoNotDefLapSeccion.setDataType('int');
							rlx.add('reg', pcbRepoNotDefLapLapso);
							rlx.add('reg', pcbRepoNotDefLapSeccion.setModeReturnGetText(0));
							Tool.cnnSrv('MantObject', 'getPtoAdicionalDefLapso', this.windowName + '.reporte()', rlx);							
						}
	}
};