var dialogsReporteHorarioCurso = new Object();
var pcbRepoHorCurOrg = new Object();
var pcbRepoHorCurSuborg = new Object();
var pcbRepoHorCurPrograma = new Object();
var pcbRepoHorCurMateria = new Object();
var pcbRepoHorCurSeccion = new Object();
var pcbRepoHorCurPosicion = new Object();
var pcbRepoHorCurPeriodo = new Object();
var imgButtonsRepoHorCurReporte = new Object();
var imgButtonsRepoHorCurSalir = new Object();
var mw_ReporteHorarioCurso = new Object();// minWindow

var ReporteHorarioCurso = {
    windowName : 'ReporteHorarioCurso',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
			this.limpiar('lmp');			
		dialogsReporteHorarioCurso.show();
	},
        
    hide: function(){
        dialogsReporteHorarioCurso.hide();
    },
    
    createMWs: function(){
        mwReporteHorarioCurso = desktop.addMinWindow('R.H.Curso', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsReporteHorarioCurso.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsReporteHorarioCurso_Init : function(){
        dialogsReporteHorarioCurso.setMinimizeXY(0,0);
        dialogsReporteHorarioCurso.setCenterScreen();
        dialogsReporteHorarioCurso.addSpace(0,0,20);
        dialogsReporteHorarioCurso.addLn(1,1,1);
		dialogsReporteHorarioCurso.setHeightCell(1,1,13);
		dialogsReporteHorarioCurso.addObjToDialog(pcbRepoHorCurOrg,2,1,24);
		dialogsReporteHorarioCurso.addObjToDialog(pcbRepoHorCurSuborg,2,1,24);
		dialogsReporteHorarioCurso.adjAllMarginObj(2,1,10);
		dialogsReporteHorarioCurso.addObjToDialog(pcbRepoHorCurPrograma,3,1,24);
		dialogsReporteHorarioCurso.addObjToDialog(pcbRepoHorCurPeriodo,3,1,24);
		dialogsReporteHorarioCurso.adjAllMarginObj(3,1,10);
		dialogsReporteHorarioCurso.addObjToDialog(pcbRepoHorCurPosicion,4,1,24);
		dialogsReporteHorarioCurso.addObjToDialog(pcbRepoHorCurSeccion,4,1,24);
		dialogsReporteHorarioCurso.adjAllMarginObj(4,1,10);
		dialogsReporteHorarioCurso.addObjToDialog(pcbRepoHorCurMateria,5,1,24);
		dialogsReporteHorarioCurso.adjAllMarginObj(5,1,10);
        dialogsReporteHorarioCurso.addLn(6,1,1);
		dialogsReporteHorarioCurso.setHeightCell(6,1,10);
		dialogsReporteHorarioCurso.addObjToDialog(imgButtonsRepoHorCurReporte,7,1);
        dialogsReporteHorarioCurso.addObjToDialog(imgButtonsRepoHorCurSalir,7,1);
        dialogsReporteHorarioCurso.adjAllMarginObj(7,1,44);
        dialogsReporteHorarioCurso.leftMarginObj(7,1,0,275); 
    },
  
    create : function(){
    	dialogsReporteHorarioCurso = dialogs.create('dialogsReporteHorarioCurso',0,0,818,153,'REPORTE HORARIO POR SECCION / CURSO');
    	dialogsReporteHorarioCurso.setAdjY(80);
    	pcbRepoHorCurOrg = powerComboBox.create('pcbRepoHorCurOrg','pcbRepoHorCurOrg','Organizaciðn (+):',1,102);
    	pcbRepoHorCurOrg.enableReadOnlyEditor();
    	pcbRepoHorCurOrg.addEmptyOption();
    	pcbRepoHorCurOrg.setValidEmpty();
    	pcbRepoHorCurOrg.enableOnChangeToEmptyOption();
    	pcbRepoHorCurSuborg = powerComboBox.create('pcbRepoHorCurSuborg','pcbRepoHorCurSuborg','Suborganizaciðn (^):',1,123);
    	pcbRepoHorCurSuborg.enableReadOnlyEditor();
    	pcbRepoHorCurSuborg.addEmptyOption();
    	pcbRepoHorCurSuborg.setValidEmpty();
    	pcbRepoHorCurSuborg.setWidthCombo(372);
    	pcbRepoHorCurPrograma = powerComboBox.create('pcbRepoHorCurPrograma','pcbRepoHorCurPrograma','Programa (^):',1,102);
    	pcbRepoHorCurPrograma.enableReadOnlyEditor();
    	pcbRepoHorCurPrograma.addEmptyOption();
    	pcbRepoHorCurPrograma.setValidEmpty();
    	pcbRepoHorCurPrograma.setWidthCombo(411);
    	pcbRepoHorCurPosicion = powerComboBox.create('pcbRepoHorCurPosicion','pcbRepoHorCurPosicion','Posicion (^):',1,102);
    	pcbRepoHorCurPosicion.enableReadOnlyEditor();
    	pcbRepoHorCurPosicion.addEmptyOption();
    	pcbRepoHorCurPosicion.setValidEmpty();
    	pcbRepoHorCurPeriodo = powerComboBox.create('pcbRepoHorCurPeriodo','pcbRepoHorCurPeriodo','Periodo (^):',1,84);
    	pcbRepoHorCurPeriodo.enableReadOnlyEditor();
    	pcbRepoHorCurPeriodo.addEmptyOption();
    	pcbRepoHorCurPeriodo.setValidEmpty();
    	pcbRepoHorCurSeccion = powerComboBox.create('pcbRepoHorCurSeccion','pcbRepoHorCurSeccion','Secciðn (^):',1,123);
    	pcbRepoHorCurSeccion.enableReadOnlyEditor();
    	pcbRepoHorCurSeccion.addEmptyOption();
    	pcbRepoHorCurSeccion.setValidEmpty();
    	pcbRepoHorCurSeccion.setDataType('string');
    	pcbRepoHorCurSeccion.setFieldFind(true);
    	pcbRepoHorCurMateria = powerComboBox.create('pcbRepoHorCurMateria','pcbRepoHorCurMateria','Materia  (*):',1,102);
    	pcbRepoHorCurMateria.enableReadOnlyEditor();
    	pcbRepoHorCurMateria.addEmptyOption();
    	pcbRepoHorCurMateria.setValidEmpty();
    	pcbRepoHorCurMateria.setDataType('string');
		pcbRepoHorCurMateria.setWidthCombo(411);
    	pcbRepoHorCurMateria.setFieldFind(true);
      	imgButtonsRepoHorCurReporte = imgButtons.create('imgButtonsRepoHorCurReporte','Reporte','print.png');
      	imgButtonsRepoHorCurSalir = imgButtons.create('imgButtonsRepoHorCurSalir','Salir','salir.png');
    	imgButtonsRepoHorCurReporte.setDimension(90,22);
    	imgButtonsRepoHorCurSalir.setDimension(90,22);
	},

	init : function(){
		this.create();
		this.setEvents(); 
		this.dialogsReporteHorarioCurso_Init();
		this.createMWs();
	},
	
	limpiar : function(tipo) {
  		pcbRepoHorCurOrg.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbRepoHorCurSuborg);
  		Tool.rstPwrCmb(pcbRepoHorCurPrograma);
  		Tool.rstPwrCmb(pcbRepoHorCurPeriodo);
  		dialogsReporteHorarioCurso.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},
	
	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsReporteHorarioCurso, pcbRepoHorCurOrg, 0, 1, json('getData'));
		Tool.getContext(dialogsReporteHorarioCurso, pcbRepoHorCurOrg, pcbRepoHorCurSuborg, pcbRepoHorCurPrograma, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function(){
    	imgButtonsRepoHorCurReporte.onClick(this.windowName + ".coreUpdate()");
		imgButtonsRepoHorCurSalir.onClick('dialogsReporteHorarioCurso.close()');
		pcbRepoHorCurOrg.onChange(this.windowName + ".resetElements('org')");
		pcbRepoHorCurSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbRepoHorCurPrograma.onChange(this.windowName + ".resetElements('carr')");
		pcbRepoHorCurPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbRepoHorCurPosicion.onChange(this.windowName + ".resetElements('pos')");
		pcbRepoHorCurMateria.onChange(this.windowName + ".resetElements('mat')");
    },
	
	resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(pcbRepoHorCurSuborg);
	  		Tool.rstPwrCmb(pcbRepoHorCurPrograma);
	  		Tool.rstPwrCmb(pcbRepoHorCurPeriodo);
			Tool.rstPwrCmb(pcbRepoHorCurPosicion);
			Tool.rstPwrCmb(pcbRepoHorCurMateria);
			Tool.rstPwrCmb(pcbRepoHorCurSeccion);
	    	if (pcbRepoHorCurOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsReporteHorarioCurso, pcbRepoHorCurSuborg, 1, 2, pcbRepoHorCurOrg);
		}

		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbRepoHorCurPrograma);
	  		Tool.rstPwrCmb(pcbRepoHorCurPeriodo);
	  		Tool.rstPwrCmb(pcbRepoHorCurPosicion);
	  		Tool.rstPwrCmb(pcbRepoHorCurMateria);
			Tool.rstPwrCmb(pcbRepoHorCurSeccion);
	    	if (pcbRepoHorCurSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsReporteHorarioCurso, pcbRepoHorCurPrograma, -1, 3, pcbRepoHorCurSuborg);
		}
		
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbRepoHorCurPeriodo);
	  		Tool.rstPwrCmb(pcbRepoHorCurPosicion);
	  		Tool.rstPwrCmb(pcbRepoHorCurMateria);
			Tool.rstPwrCmb(pcbRepoHorCurSeccion);
	    	if (pcbRepoHorCurPrograma.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsReporteHorarioCurso, pcbRepoHorCurPeriodo, 0, 1, pcbRepoHorCurPrograma.setModeReturnGetText(5));
		}
		
	    else if (element == 'per') {
			Tool.rstPwrCmb(pcbRepoHorCurSeccion);
	  		Tool.rstPwrCmb(pcbRepoHorCurMateria);
	  		Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsReporteHorarioCurso, pcbRepoHorCurPosicion, 0, 1, pcbRepoHorCurPrograma.setModeReturnGetText(2));        		
    	} 
    	else if (element == 'pos') {
    		var rlx = xmlStructs.createRecordList("rlx");

    		rlx.add('reg', pcbRepoHorCurPrograma.setModeReturnGetText(2));
    		rlx.add('reg', pcbRepoHorCurPosicion);
    		rlx.add('reg', pcbRepoHorCurPeriodo);
    		Tool.cnnSrv("ReportObject", "getRepoListAlumnoCursoSeccion", this.windowName + ".loadDataSeccionMateria()", rlx);
    	} 
	},
	
	loadDataSeccionMateria: function() {
		Tool.loadPowerComboData(dialogsReporteHorarioCurso, pcbRepoHorCurSeccion, 0, 1, json('getRepoListAlumnoCursoSeccion'));
  		Tool.loadPowerComboData(dialogsReporteHorarioCurso, pcbRepoHorCurMateria, 0, 1, json('getMantPensumMateriaActivaSinPeriodo'));
	},
  	
	reporte : function(){
        var jaux = json("getHorarioCurso");
        var ji = json("getHorarioCurso");
		var ji2 = json("getHorarioXTipo");
        for(var p = 0; p < ji.data[0].length; p++) {
            ji.data[2][p] = jaux.data[1][p];
            ji.data[7][p] = jaux.data[3][p];
            ji.data[3][p] = jaux.data[0][p];
            ji.data[0][p] = jaux.data[4][p];
            ji.data[4][p] = jaux.data[5][p];
            ji.data[1][p] = jaux.data[5][p]; 
		}
		var h = new Horario({prof: true, materia: true, seccion: true, sunday: true, saturday: true});
		var arrObject = [ { data: pcbRepoHorCurSuborg.getOption(), title: "SUBORGANIZACIÓN: ", x: 2, y: 2},
						  { data: pcbRepoHorCurPrograma.getOption(), title: "PROGRAMA: ", x: 2, y: 20},
						  { data: pcbRepoHorCurPeriodo.getOption(), title: "PERIODO: ", x: 2, y: 40},
						  { data: pcbRepoHorCurPosicion.getOption(), title: "POSICION: ", x: 290, y: 40},
						  { data: pcbRepoHorCurSeccion.getOption(), title: "SECCION: ", x: 2, y: 60},
						  { data: pcbRepoHorCurMateria.getOption() , title: "MATERIA: ", x: 288, y: 60},
		];
		h.setDataHeadWithObject(arrObject);
		h.setJson(ji,ji2);
		h.show();
	},
	
	coreUpdate: function(){
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (pcbRepoHorCurOrg.valid(dialogsReporteHorarioCurso))
			if (pcbRepoHorCurSuborg.valid(dialogsReporteHorarioCurso))
				if (pcbRepoHorCurPrograma.valid(dialogsReporteHorarioCurso))
					if (pcbRepoHorCurPeriodo.valid(dialogsReporteHorarioCurso))
						if (pcbRepoHorCurPosicion.valid(dialogsReporteHorarioCurso))
							if (pcbRepoHorCurSeccion.valid(dialogsReporteHorarioCurso)) {
								rlx.add('reg', pcbRepoHorCurPrograma.setModeReturnGetText(2));
								rlx.add('reg', pcbRepoHorCurPosicion);
								rlx.add('reg', pcbRepoHorCurPeriodo);
								rlx.add('reg', pcbRepoHorCurSeccion);
								rlx.add('reg', pcbRepoHorCurSeccion);
								rlx.add('reg', pcbRepoHorCurMateria);
								rlx.add('reg', pcbRepoHorCurMateria);
								Tool.cnnSrv('ReportObject', 'getHorarioCurso', this.windowName + '.reporte()', rlx);
							}
    }
};