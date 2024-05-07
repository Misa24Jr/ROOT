var dialogsRepoCorNotas            = new Object();
var editsCorNotCedula              = new Object();
var editsCorNotNombre              = new Object();
var editsCorNotApellido            = new Object();
var editsCorNotPeriodo             = new Object();
var powerComboBoxCorNotCarrera     = new Object();
var powerComboBoxCorNotLapso       = new Object();
var imgButtonsCorNotReporte        = new Object();
var imgButtonsCorNotReporteDetalle = new Object();
var imgButtonsCorNotSalir          = new Object();
var mw_RepoCorNotas                = new Object();// minWindow
       
var RepoCorNotas = {
    windowName : 'RepoCorNotas',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoCorNotas.isByClean())
			this.limpiar();			
		dialogsRepoCorNotas.show();
	},
	
    hide: function(){
        dialogsRepoCorNotas.hide();
    },
    createMWs: function(){
        mwRepoCorNotas = desktop.addMinWindow('Corte Notas', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoCorNotas.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsRepoCorNotas_Init : function(){
        dialogsRepoCorNotas.setMinimizeXY(0,0);
        dialogsRepoCorNotas.setCenterScreen();
        dialogsRepoCorNotas.addSpace(0,0,25);
        dialogsRepoCorNotas.addLn(1,1,1);
		dialogsRepoCorNotas.setHeightCell(1,1,13);        
        dialogsRepoCorNotas.addObject(editsCorNotCedula, 25,40);		
		editsCorNotCedula.setSizeEdit(200);		
        dialogsRepoCorNotas.addObject(editsCorNotNombre, 25,75);
        editsCorNotNombre.setSizeEdit(200);
        dialogsRepoCorNotas.addObject(editsCorNotApellido, 25,110);		
		editsCorNotApellido.setSizeEdit(200);
		dialogsRepoCorNotas.addObject(powerComboBoxCorNotCarrera, 25,145);		
		powerComboBoxCorNotCarrera.setWidthCombo(190);
		dialogsRepoCorNotas.addObject(editsCorNotPeriodo, 25,180);		
		editsCorNotPeriodo.setSizeEdit(200);
		dialogsRepoCorNotas.addObject(powerComboBoxCorNotLapso, 25,215);		
		powerComboBoxCorNotLapso.setWidthCombo(190);	
        dialogsRepoCorNotas.addLn(2,1,1);
		dialogsRepoCorNotas.setHeightCell(2,1,215);
		dialogsRepoCorNotas.addObjToDialog(imgButtonsCorNotReporte,3,1);
		dialogsRepoCorNotas.addObjToDialog(imgButtonsCorNotReporteDetalle,3,1);
        dialogsRepoCorNotas.addObjToDialog(imgButtonsCorNotSalir,3,1);
        dialogsRepoCorNotas.adjAllMarginObj(3,1,5);
        dialogsRepoCorNotas.leftMarginObj(3,1,0,0); 
    },

    create : function(){
    	dialogsRepoCorNotas = dialogs.create('dialogsRepoCorNotas',0,0,333,264,'CORTE DE NOTAS');
    	dialogsRepoCorNotas.setAdjY(80);
    	editsCorNotCedula = edits.create('editsCorNotCedula','editsCorNotCedula','C.i. (*):',1,80,'normal');
    	editsCorNotCedula.setValidInteger();
      	editsCorNotCedula.setFieldFind(true);
      	editsCorNotNombre = edits.create('editsCorNotNombre','editsCorNotNombre','Nombre (*):',1,80,'normal');
      	editsCorNotNombre.setValidEmpty();
      	editsCorNotNombre.setFieldFind(true);
      	editsCorNotApellido = edits.create('editsCorNotApellido','editsCorNotApellido','Apellido (*):',1,80,'normal');
      	editsCorNotApellido.setValidEmpty();
      	editsCorNotApellido.setFieldFind(true);
      	powerComboBoxCorNotCarrera = powerComboBox.create('powerComboBoxCorNotCarrera','powerComboBoxCorNotCarrera','Carrera:',1,76);
    	powerComboBoxCorNotCarrera.enableReadOnlyEditor();
    	powerComboBoxCorNotCarrera.addEmptyOption();
    	powerComboBoxCorNotCarrera.setValidEmpty();
    	editsCorNotPeriodo = edits.create('editsCorNotPeriodo','editsCorNotPeriodo','Periodo:',1,80,'normal');
    	editsCorNotPeriodo.setValidEmpty();
    	editsCorNotPeriodo.setFieldFind(true);
    	editsCorNotPeriodo.readOnly(true);
    	editsCorNotPeriodo.idPeriodo = 0;
    	editsCorNotPeriodo.dePosicion = '';
    	powerComboBoxCorNotLapso = powerComboBox.create('powerComboBoxCorNotLapso','powerComboBoxCorNotLapso','Lapso:',1,76);
    	powerComboBoxCorNotLapso.enableReadOnlyEditor();
    	powerComboBoxCorNotLapso.addEmptyOption();
    	powerComboBoxCorNotLapso.setValidEmpty();
      	imgButtonsCorNotReporte = imgButtons.create('imgButtonsCorNotReporte','Ver Notas','print.png');
      	imgButtonsCorNotReporteDetalle = imgButtons.create('imgButtonsCorNotReporteDetalle','Ver Detalle','print.png');
      	imgButtonsCorNotSalir = imgButtons.create('imgButtonsCorNotSalir','Salir','salir.png');
    	imgButtonsCorNotReporte.setDimension(90,22);
    	imgButtonsCorNotReporteDetalle.setDimension(90,22);
    	imgButtonsCorNotSalir.setDimension(90,22);
      	this.isCreate=true;
	},

	init : function(){
		this.create();
		this.setEvents(); 
		this.dialogsRepoCorNotas_Init();
		this.createMWs();
	},
	
	limpiarFind : function(ix) {
		editsCorNotCedula.hideId = -1;
		
  		switch (ix) {
		case 1: 
			editsCorNotNombre.setValue("");
			editsCorNotApellido.setValue("");  		
			break;
		case 2: 
			editsCorNotCedula.setValue("");
			editsCorNotApellido.setValue("");  		
			break;
		default:
			editsCorNotCedula.setValue("");
		    editsCorNotNombre.setValue("");
			break;
		} 
  		Tool.rstPwrCmb(powerComboBoxCorNotCarrera);
  		editsCorNotPeriodo.setValue("");
  	},

   	loadDataCarrInscrip : function() {
  		Tool.loadPowerComboData(dialogsRepoCorNotas, powerComboBoxCorNotCarrera, -1, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			powerComboBoxCorNotCarrera.setSelectedIndex(1); 
  			this.buscarPeriodo(); 
  		}
   	},

   	buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");

    	if (editsCorNotCedula.getValue() != '' && editsCorNotNombre.getValue() != '' && editsCorNotApellido.getValue() != '') {
			if (powerComboBoxCorNotCarrera.setModeReturnGetText(0).getText() == "" || powerComboBoxCorNotCarrera.setModeReturnGetText(0).getText() == "-1") {
		  		Tool.rstPwrCmb(powerComboBoxCorNotCarrera);
		  		editsCorNotPeriodo.setValue("");
		  		rlx.add('reg', editsCorNotCedula);
	    		Tool.cnnSrv('MantObject', 'getCarrera', this.windowName + '.loadDataCarrInscrip()', rlx);
			}
			else {
	  			this.buscarPeriodo(); 
			}
		}
		else if (editsCorNotCedula.getValue() != '' || editsCorNotNombre.getValue() != '' || editsCorNotApellido.getValue() != '') {
	  		Tool.rstPwrCmb(powerComboBoxCorNotCarrera);
	  		editsCorNotPeriodo.setValue("");
        	ResuBusqueda.setObjectExtFnc(editsCorNotCedula, editsCorNotNombre, editsCorNotApellido, 'RepoCorNotas.buscar()');
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsCorNotCedula, editsCorNotCedula, editsCorNotNombre, editsCorNotNombre, editsCorNotApellido, editsCorNotApellido);
		}
		else {
			Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},
	
    buscarPeriodo : function(element) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (powerComboBoxCorNotCarrera.getOption() != "") {
			rlx.addInt('reg', editsCorNotCedula.hideId);
	    	rlx.add('reg', powerComboBoxCorNotCarrera.setModeReturnGetText(0)); 
	        Tool.cnnSrv('ReportObject', 'getHorarioAlumnoPeriodo', this.windowName + '.loadDataPeriodo()', rlx);
		}
	},
	
	loadDataPeriodo: function() {
		editsCorNotPeriodo.idPeriodo = json('getHorarioAlumnoPeriodo').data[0][0];
		editsCorNotPeriodo.dePosicion = json('getHorarioAlumnoPeriodo').data[2][0];
		Tool.loadEditData(dialogsRepoCorNotas, editsCorNotPeriodo, 1, json('getHorarioAlumnoPeriodo'));
		Tool.getPowerComboData('MantObject', 'getMantLapso', dialogsRepoCorNotas, powerComboBoxCorNotLapso, 3, 0, new MiniDataSet(editsCorNotPeriodo.idPeriodo, 'int', false));		
    },
	
   	loadDataCarrInscrip : function() {
  		Tool.loadPowerComboData(dialogsRepoCorNotas, powerComboBoxCorNotCarrera, -1, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			powerComboBoxCorNotCarrera.setSelectedIndex(1); 
  			this.buscarPeriodo(); 
  		}
   	},

   	loadDataPers : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		editsCorNotCedula.readOnly(true);
  	    editsCorNotNombre.readOnly(true);
  	    editsCorNotApellido.readOnly(true);
  	    editsCorNotCedula.onEnter("");
  		editsCorNotCedula.onChange("");
  		editsCorNotNombre.onEnter("");
  		editsCorNotNombre.onChange("");
  		editsCorNotApellido.onEnter("");
  		editsCorNotApellido.onChange("");
    	if (json('getPermiso').data[0] != 'ACTIVO') {
  			editsCorNotCedula.setValue(json('getDatoPersona').data[0]);
  	  		editsCorNotNombre.setValue(json('getDatoPersona').data[1]);
  	  		editsCorNotApellido.setValue(json('getDatoPersona').data[2]);
  	  		editsCorNotCedula.hideId = json('getDatoPersona').data[3];
  	  		rlx.add('reg', editsCorNotCedula);
  			Tool.cnnSrv('MantObject', 'getCarrera', this.windowName + '.loadDataCarrInscrip()', rlx);
  		}
    	else {
  	    	editsCorNotCedula.readOnly(false);
  	    	editsCorNotNombre.readOnly(false);
  	    	editsCorNotApellido.readOnly(false);
  		  	editsCorNotCedula.onEnter(this.windowName + ".buscar()");
  		  	editsCorNotCedula.onChange(this.windowName + ".limpiarFind(1)");
  		  	editsCorNotNombre.onEnter(this.windowName + ".buscar()");
  		  	editsCorNotNombre.onChange(this.windowName + ".limpiarFind(2)");
  		  	editsCorNotApellido.onEnter(this.windowName + ".buscar()");
  		  	editsCorNotApellido.onChange(this.windowName + ".limpiarFind(3)");
    	}
        dialogsRepoCorNotas.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    limpiar : function() {
    	editsCorNotCedula.hideId = -1;
  		editsCorNotCedula.setValue(""); 
  		editsCorNotNombre.setValue(""); 
  		editsCorNotApellido.setValue(""); 
  		Tool.rstPwrCmb(powerComboBoxCorNotCarrera);
  		Tool.rstPwrCmb(powerComboBoxCorNotLapso);
  		editsCorNotPeriodo.setValue("");
  		dialogsRepoCorNotas.setMsg("");
		Tool.cnnSrv('InscripObject', 'getCargarPersona', this.windowName + '.loadDataPers()');
	},

	setEvents: function(){
		editsCorNotCedula.onEnter(this.windowName + ".buscar()");
  		editsCorNotCedula.onChange(this.windowName + ".limpiarFind(1)");
  		editsCorNotNombre.onEnter(this.windowName + ".buscar()");
  		editsCorNotNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsCorNotApellido.onEnter(this.windowName + ".buscar()");
  		editsCorNotApellido.onChange(this.windowName + ".limpiarFind(3)");
    	imgButtonsCorNotReporte.onClick(this.windowName + ".coreUpdate('')");
    	imgButtonsCorNotReporteDetalle.onClick(this.windowName + ".coreUpdate('nota')");
        imgButtonsCorNotSalir.onClick('dialogsRepoCorNotas.close()');
		powerComboBoxCorNotCarrera.onChange(this.windowName + ".buscarPeriodo()");
    },
	
	reporte: function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
        rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),18,'courier','bold');
		rep.addBar(0,104,1128,140,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addText(300, 132, ('CORTE DE NOTAS'),false);
        rep.addText(300.4, 132.4, ('CORTE DE NOTAS'),false);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,144,1128,190,rep.getRGBAObj(187,196,238,0.8),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8 ,'helvetica','normal');
		rep.addText(20, 157, 'C.I:               '+editsCorNotCedula.getText(),false);
        rep.addText(20.4, 157.4, 'C.I:               '+editsCorNotCedula.getText(),false);
		rep.addText(20, 170, 'NOMBRE:    '+editsCorNotNombre.getText()+" "+editsCorNotApellido.getText(),false);
        rep.addText(20.4, 170.4, 'NOMBRE:    '+editsCorNotNombre.getText()+" "+editsCorNotApellido.getText(),false);
		rep.addText(20, 183, 'PERIODO:   '+editsCorNotPeriodo.getText(),false);
        rep.addText(20.4, 183.4, 'PERIODO:   '+editsCorNotPeriodo.getText(),false);
		rep.addText(350, 157,'LAPSO:        '+powerComboBoxCorNotLapso.getOption(),false);
        rep.addText(350.4, 157.4,'LAPSO:        '+powerComboBoxCorNotLapso.getOption(),false);
		rep.addText(350, 170,'POSICION:   '    +editsCorNotPeriodo.dePosicion,false);
        rep.addText(350.4, 170.4,'POSICION:   '    +editsCorNotPeriodo.dePosicion,false);
		rep.addText(350, 183, 'FECHA:        '+Tool.getTimestamp(),false);
        rep.addText(350.4, 183.4, 'FECHA:        '+Tool.getTimestamp(),false);
        //************************ TABLE ***************************
        rep.setTableRowProperties(20, 280, 280, 280, 'bold helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'bold helvetica', 8);
		rep.addTable('tablaCorNotas',['','','','','','','',''],399,214);
		rep.setTotalRowTable(14);
		rep.setHeightRow(20);
        rep.setSizeColumnArray([170,60,100,100,100,100,90,78]);
        rep.setAlignData(['left','center','center','center','center','center','center','center',]);
        rep.addBar(0,194,860,236,rep.getRGBAObj(186,166,107,0.4),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),10,'helvetica','normal');
        rep.addLine(1,194,1,256,rep.getRGBAObj(180,180,180,0.4),2,false);//linea I
        rep.addLine(170,194,170,266,rep.getRGBAObj(180,180,180,0.4),2,false);//linea I
        rep.addLine(230,194,230,280,rep.getRGBAObj(180,180,180,0.4),2,false);//linea I
        rep.addLine(230,216,530,216,rep.getRGBAObj(180,180,180,0.4),2,false);//linea -
        rep.addLine(330,215,330,280,rep.getRGBAObj(180,180,180,0.4),2,false);//linea I
        rep.addLine(430,215,430,236,rep.getRGBAObj(180,180,180,0.4),2,false);//linea I
        rep.addLine(530,194,530,236,rep.getRGBAObj(180,180,180,0.4),2,false);//linea I
        rep.addLine(630,194,630,236,rep.getRGBAObj(180,180,180,0.4),2,false);//linea I
        rep.addLine(720,194,720,236,rep.getRGBAObj(180,180,180,0.4),2,false);//linea I
        rep.addLine(791,194,791,236,rep.getRGBAObj(180,180,180,0.4),2,false);//linea I
        rep.addText(60, 230,'MATERIA',false);
        rep.addText(188, 230,'SEC.',false);
        rep.addText(331, 212,'EVALUACIONES',false);
        rep.addText(234, 230,'PLANIFICADAS',false);
        rep.addText(341, 230,'REALIZADAS',false);
        rep.addText(432, 230,'PRESENTADAS',false);
        rep.addText(552, 212,'PUNTOS',false);
        rep.addText(534, 230,'ACUMULADOS',false);
        //rep.addText(664, 212,'',false);
        rep.addText(632, 230,'% EVALUADO',false);
        rep.addText(730, 230,'ESTADO',false);
        rep.addJsonData('tablaCorNotas','getCorteNotas');
		////////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        //rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        //rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();                
        setTimeout(rep.previewHTML,1000);
	},
	
	reporteSumario: function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
        rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),18,'courier','bold');
		rep.addBar(0,104,1128,140,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addText(300, 132, ('CORTE DE NOTAS'),false);
        rep.addText(300.4, 132.4, ('CORTE DE NOTAS'),false);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,144,1128,190,rep.getRGBAObj(187,196,238,0.8),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','normal');
		rep.addText(20, 157, 'C.I:               '+editsCorNotCedula.getText(),false);
        rep.addText(20.4, 157.4, 'C.I:               '+editsCorNotCedula.getText(),false);
		rep.addText(20, 170, 'NOMBRE:    '+editsCorNotNombre.getText()+" "+editsCorNotApellido.getText(),false);
        rep.addText(20.4, 170.4, 'NOMBRE:    '+editsCorNotNombre.getText()+" "+editsCorNotApellido.getText(),false);
		rep.addText(20, 183, 'PERIODO:   '+editsCorNotPeriodo.getText(),false);
        rep.addText(20.4, 183.4, 'PERIODO:   '+editsCorNotPeriodo.getText(),false);
		rep.addText(350, 157,'LAPSO:        '+powerComboBoxCorNotLapso.getOption(),false);
        rep.addText(350.4, 157.4,'LAPSO:        '+powerComboBoxCorNotLapso.getOption(),false);
		rep.addText(350, 170,'POSICION:   '    +editsCorNotPeriodo.dePosicion,false);
        rep.addText(350.4, 170.4,'POSICION:   '    +editsCorNotPeriodo.dePosicion,false);
		rep.addText(350, 183, 'FECHA:        '+Tool.getTimestamp(),false);
        rep.addText(350.4, 183.4, 'FECHA:        '+Tool.getTimestamp(),false);        
        //************************ TABLE ***************************
        rep.setTableRowProperties(20, 280, 280, 280, 'helvetica',0, 0, 0, 8, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 9);
		rep.addTable('tablaCorNotas',['M A T E R I A','N-1','N-2','N-3','N-4','N-5','N-6','N-7','N-8','N-9','N-10','N-11','N-12','N-13','N-14','N-15'],395,190);
		rep.setTotalRowTable(14);
        rep.setSizeColumnArray([273,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35]);
        rep.setAlignData(['left','center','center','center','center','center','center','center','center','center','center','center','center','center','center']);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),10,'helvetica','normal');
        rep.addJsonData('tablaCorNotas','getCorteNotasDetalle'); 
		////////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        //rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        //rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();                
        setTimeout(rep.previewHTML,1000);
	},

	coreUpdate: function(tipoCorte) {
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (editsCorNotCedula.valid(dialogsRepoCorNotas))
			if (editsCorNotNombre.valid(dialogsRepoCorNotas))
				if (editsCorNotApellido.valid(dialogsRepoCorNotas))
					if (editsCorNotPeriodo.valid(dialogsRepoCorNotas))
						if (powerComboBoxCorNotLapso.valid(dialogsRepoCorNotas)) {
							if (tipoCorte == 'nota') {
								rlx.addInt('reg', editsCorNotPeriodo.idPeriodo);
								rlx.add('reg', powerComboBoxCorNotLapso);
								rlx.addInt('reg', editsCorNotCedula.hideId);
								rlx.addInt('reg', editsCorNotPeriodo.idPeriodo);
								rlx.add('reg', powerComboBoxCorNotLapso);
								rlx.addInt('reg', editsCorNotCedula.hideId);
								Tool.cnnSrv('ReportObject', 'getCorteNotas', this.windowName + '.reporte()', rlx);
							}
							else {
								rlx.addInt('reg', editsCorNotCedula.hideId);
								rlx.add('reg', powerComboBoxCorNotLapso);
								Tool.cnnSrv('ReportObject', 'getCorteNotasDetalle', this.windowName + '.reporteSumario()', rlx);
							}
						}
    }
};