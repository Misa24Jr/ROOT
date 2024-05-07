var dialogsRepoResuDatPerAlumnos = new Object();
var powerComboBoxRepoLisSecAluRepOrganizacion = new Object();
var powerComboBoxRepoLisSecAluRepEstPeriodo = new Object();
var powerComboBoxRepoLisSecAluRepPeriodo = new Object();
var imgButtonsRepoResuDatPerAlumnosReporte = new Object();
var imgButtonsRepoResuDatPerAlumnosSalir = new Object();


var RepoResuDatPerAlumnos = {
    windowName: 'RepoResuDatPerAlumnos',
    isCreate: false,
	
    show: function(){
        if (!this.isCreate) {   
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoResuDatPerAlumnos.isByClean()) 
          this.limpiar();
        dialogsRepoResuDatPerAlumnos.show();
    },
            
    hide: function(){
       dialogsRepoResuDatPerAlumnos.hide();
    },
        
    createMWs: function(){
        mwRepoResuDatPerAlumnos = desktop.addMinWindow('C. Notas', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoResuDatPerAlumnos.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsRepoResuDatPerAlumnos_init: function(){
        dialogsRepoResuDatPerAlumnos.setMinimizeXY(0, 0);
        dialogsRepoResuDatPerAlumnos.setCenterScreen();
        powerComboBoxRepoLisSecAluRepOrganizacion.setWidthCombo(120);
        powerComboBoxRepoLisSecAluRepEstPeriodo.setWidthCombo(120);
        powerComboBoxRepoLisSecAluRepPeriodo.setWidthCombo(120);
        dialogsRepoResuDatPerAlumnos.addObject(powerComboBoxRepoLisSecAluRepOrganizacion, 10, 40);
        dialogsRepoResuDatPerAlumnos.addObject(powerComboBoxRepoLisSecAluRepEstPeriodo, 260, 40);
        dialogsRepoResuDatPerAlumnos.addObject(powerComboBoxRepoLisSecAluRepPeriodo, 520, 40);
        dialogsRepoResuDatPerAlumnos.addObject(imgButtonsRepoResuDatPerAlumnosReporte,262,70);
        dialogsRepoResuDatPerAlumnos.addObject(imgButtonsRepoResuDatPerAlumnosSalir,390,70);
        imgButtonsRepoResuDatPerAlumnosReporte.setDimension(90,22);
        imgButtonsRepoResuDatPerAlumnosSalir.setDimension(90,22);
    },
    
    loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoResuDatPerAlumnos, powerComboBoxRepoLisSecAluRepOrganizacion, 0, 1, json('getData'));
		Tool.cnnSrv('ReportObject', 'getHorarioAulaInit', this.windowName + '.loadDataResultado()');
	},
	loadDataResultado: function() {
		Tool.loadPowerComboData(dialogsRepoResuDatPerAlumnos, powerComboBoxRepoLisSecAluRepEstPeriodo, 0, 1, json('getMantEstPeriodo'));
	},
	
	findPeriodo : function(){
	  Tool.rstPwrCmb(powerComboBoxRepoLisSecAluRepPeriodo);
	    	if (powerComboBoxRepoLisSecAluRepEstPeriodo.getOption() != "")
	    		Tool.getPowerComboData('ReportObject', 'getPeriodoXEdoPeriodo', dialogsRepoResuDatPerAlumnos, powerComboBoxRepoLisSecAluRepPeriodo, 0, 1, powerComboBoxRepoLisSecAluRepEstPeriodo);
	},
    
    create: function(){
        dialogsRepoResuDatPerAlumnos = dialogs.create('dialogsRepoResuDatPerAlumnos', 0, 0, 745, 80, 'LISTADO RESUMEN DE DATOS PERSONALES DE ALUMNOS');
        dialogsRepoResuDatPerAlumnos.setAdjY(60);
        powerComboBoxRepoLisSecAluRepOrganizacion = powerComboBox.create('powerComboBoxRepoLisSecAluRepOrganizacion','powerComboBoxRepoLisSecAluRepOrganizacion','Organización(+):',1,96);
    	powerComboBoxRepoLisSecAluRepOrganizacion.enableReadOnlyEditor();
    	powerComboBoxRepoLisSecAluRepOrganizacion.addEmptyOption();
    	powerComboBoxRepoLisSecAluRepOrganizacion.setValidEmpty();
    	powerComboBoxRepoLisSecAluRepOrganizacion.enableOnChangeToEmptyOption();
    	powerComboBoxRepoLisSecAluRepEstPeriodo = powerComboBox.create('powerComboBoxRepoLisSecAluRepEstPeriodo','powerComboBoxRepoLisSecAluRepEstPeriodo','Estado Periodo(+):',1,108);
        powerComboBoxRepoLisSecAluRepEstPeriodo.enableReadOnlyEditor();
    	powerComboBoxRepoLisSecAluRepEstPeriodo.addEmptyOption();
    	powerComboBoxRepoLisSecAluRepEstPeriodo.setValidEmpty();
    	powerComboBoxRepoLisSecAluRepEstPeriodo.enableOnChangeToEmptyOption();
    	powerComboBoxRepoLisSecAluRepPeriodo = powerComboBox.create('powerComboBoxRepoLisSecAluRepPeriodo','powerComboBoxRepoLisSecAluRepPeriodo','Periodo(^):',1,67);
    	powerComboBoxRepoLisSecAluRepPeriodo.enableReadOnlyEditor();
    	powerComboBoxRepoLisSecAluRepPeriodo.addEmptyOption();
    	powerComboBoxRepoLisSecAluRepPeriodo.setValidEmpty();
    	powerComboBoxRepoLisSecAluRepPeriodo.enableOnChangeToEmptyOption();   
      	imgButtonsRepoResuDatPerAlumnosReporte = imgButtons.create('imgButtonsRepoResuDatPerAlumnosReporte','Reporte','print.png');
      	imgButtonsRepoResuDatPerAlumnosSalir = imgButtons.create('imgButtonsRepoResuDatPerAlumnosSalir','Salir','salir.png');    		
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsRepoResuDatPerAlumnos_init();
        this.createMWs();
    },
    	
   setEvents: function(){
   	 imgButtonsRepoResuDatPerAlumnosSalir.onClick('dialogsRepoResuDatPerAlumnos.close()');
   	 powerComboBoxRepoLisSecAluRepEstPeriodo.onChange(this.windowName + ".findPeriodo()");
   	 //imgButtonsRepoResuDatPerAlumnosReporte.onClick(this.windowName + '.coreUpdate()');
   	 imgButtonsRepoResuDatPerAlumnosReporte.onClick(this.windowName + '.reporte()');
   },
   
   resetElements : function(element) {
   },

   limpiar : function(tipo) {
  		powerComboBoxRepoLisSecAluRepOrganizacion.setSelectedIndex(0);
  		Tool.rstPwrCmb(powerComboBoxRepoLisSecAluRepOrganizacion);
  		Tool.rstPwrCmb(powerComboBoxRepoLisSecAluRepEstPeriodo);
  		Tool.rstPwrCmb(powerComboBoxRepoLisSecAluRepPeriodo);
  		dialogsRepoResuDatPerAlumnos.setMsg("");
  		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
	},
   
   reporte : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
    	rep.setPositionIcon(1090,46);
    	//rep.setHeadImage(imgEduca.banner,false);
    	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','bold');
        rep.addBar(0,0,1128,80,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 25, 'ORGANIZACION:            '+powerComboBoxRepoLisSecAluRepOrganizacion.getOption(),false);
		rep.addText(20, 43, 'SUBORGANIZACION: '  /*+powerComboBoxRepoAluPorSecSuborganizacion.getOption()*/,false);
		rep.addText(530, 25, 'POSICION:  '/*+powerComboBoxRepoAluPorSecPosicion.getOption()*/,false);
		rep.addText(530, 43, 'SECCIÓN:    '/*+powerComboBoxRepoAluPorSecSeccion.getOption()*/,false);
		rep.addText(20, 61, 'PERIODO:   '+powerComboBoxRepoLisSecAluRepPeriodo.getOption(),false);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,84,1128,120,rep.getRGBAObj(210,200,200,0.9),false);
		rep.addText(330, 110, 'LISTADO RESUMEN DE DATOS PERSONALES DE ALUMNOS',false);
		//************************ TABLE ***************************
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'helvetica','bold');
		rep.setTableRowProperties(20, 180, 180, 180, 'bold helvetica',0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)','rgba(180,180,180,0.4)','rgba(180,180,180,0.4)','rgba(180,180,180,0.4)','rgba(180,180,180,0.4)','rgba(180,180,180,0.4)','rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'bold helvetica', 11);
		rep.addTable('TablaRepoAluPorSeccion',['Nº','Cedula','Apellidos y Nombres del Alumno','Sexo','Facha Nac.','Lugar Nac.','Cedula Rep.','Representante'],535,125);
		//rep.setTotalRowTable(43);
		//rep.setHeightRow(20);
        rep.setSizeColumnArray([38,100,370,50,100,180,100,250]);
        rep.setAlignData(['center','left','left','center','left','left','left','left']); 
        //rep.addJsonData('TablaRepoAluPorSeccion','getAluPorSeccion',[0,1,2,3]);
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        /*
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),12,'helvetica','bold');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        */
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	coreUpdate: function(){
   	var rlx = xmlStructs.createRecordList("rlx");        
        if (powerComboBoxRepoLisSecAluRepOrganizacion.valid(dialogsRepoResuDatPerAlumnos))
		    if (powerComboBoxRepoLisSecAluRepEstPeriodo.valid(dialogsRepoResuDatPerAlumnos))
			    if (powerComboBoxRepoLisSecAluRepPeriodo.valid(dialogsRepoResuDatPerAlumnos)){
				    	rlx.add('reg', powerComboBoxRepoLisSecAluRepPeriodo);
						rlx.add('reg', powerComboBoxRepoLisSecAluRepOrganizacion);
						rlx.add('reg', powerComboBoxRepoLisSecAluRepPeriodo);
		        	 	Tool.cnnSrv('ReportObject', 'getEstadisticaSeccion', this.windowName + '.reporte()', rlx);
        		}
   }     
};