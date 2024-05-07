var dialogsRepoHojaEvaAlumno = new Object();
var pcbRepoHojaEvaAlumnoOrganizacion = new Object();
var pcbRepoHojaEvaAlumnoSuborganizacion = new Object();
var pcbRepoHojaEvaAlumnoCarrera = new Object();
var pcbRepoHojaEvaAlumnoPeriodo = new Object();
var pcbRepoHojaEvaAlumnoPosicion = new Object();
var pcbRepoHojaEvaAlumnoMateria = new Object();
var pcbRepoHojaEvaAlumnoSeccion = new Object();
var pcbRepoHojaEvaAlumnoTipFormato = new Object();
var imgButtonsRepoHojaEvaAluReporte = new Object();
var imgButtonsRepoHojaEvaAluSalir = new Object();
var mw_RepoHojaEvaAlumno = new Object();//minWindow

var RepoHojaEvaAlumno = {   
    windowName: 'RepoHojaEvaAlumno',
    isCreate: false,
    
    show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsRepoHojaEvaAlumno.isByClean())
			this.limpiar('lmp');			
		dialogsRepoHojaEvaAlumno.show();
	},
	
	hide : function(){
		dialogsRepoHojaEvaAlumno.hide();
	},
	
    createMWs: function(){
        mwRepoHojaEvaAlumno = desktop.addMinWindow('Hoja Eval.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoHojaEvaAlumno.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRepoHojaEvaAlumno_Init : function(){
        dialogsRepoHojaEvaAlumno.setMinimizeXY(0,0);
        dialogsRepoHojaEvaAlumno.setCenterScreen();
        dialogsRepoHojaEvaAlumno.addSpace(0,0,20);
        dialogsRepoHojaEvaAlumno.addLn(1,1,1);
		dialogsRepoHojaEvaAlumno.setHeightCell(1,1,10);
        dialogsRepoHojaEvaAlumno.addObjToDialog(pcbRepoHojaEvaAlumnoOrganizacion,2,1,24);
        dialogsRepoHojaEvaAlumno.addObjToDialog(pcbRepoHojaEvaAlumnoSuborganizacion,2,1,24);
        dialogsRepoHojaEvaAlumno.addObjToDialog(pcbRepoHojaEvaAlumnoCarrera,2,1,24);
        dialogsRepoHojaEvaAlumno.adjAllMarginObj(2,1,10);
        dialogsRepoHojaEvaAlumno.addObjToDialog(pcbRepoHojaEvaAlumnoPeriodo,3,1,24);
        dialogsRepoHojaEvaAlumno.addObjToDialog(pcbRepoHojaEvaAlumnoPosicion,3,1,24);
        dialogsRepoHojaEvaAlumno.addObjToDialog(pcbRepoHojaEvaAlumnoSeccion,3,1,24);
        dialogsRepoHojaEvaAlumno.adjAllMarginObj(3,1,10);
        dialogsRepoHojaEvaAlumno.addObjToDialog(pcbRepoHojaEvaAlumnoMateria,4,1,24);
        pcbRepoHojaEvaAlumnoMateria.setWidthCombo(411);
        dialogsRepoHojaEvaAlumno.addObjToDialog(pcbRepoHojaEvaAlumnoTipFormato,4,1,24);
		pcbRepoHojaEvaAlumnoTipFormato.addOptionAndSimpleValue(null, 'Inicial-Basica-0','Inicial-Basica-0');
        pcbRepoHojaEvaAlumnoTipFormato.addOptionAndSimpleValue(null, 'Inicial-Basica-1','Inicial-Basica-1');
        pcbRepoHojaEvaAlumnoTipFormato.addOptionAndSimpleValue(null, 'Inicial-Basica-2','Inicial-Basica-2');
		pcbRepoHojaEvaAlumnoTipFormato.addOptionAndSimpleValue(null, 'Media-Superior-3','Media-Superior-3');
		pcbRepoHojaEvaAlumnoTipFormato.addOptionAndSimpleValue(null, 'Media-Superior-4','Media-Superior-4');
        pcbRepoHojaEvaAlumnoTipFormato.addOptionAndSimpleValue(null, 'Media-Superior-5','Media-Superior-5');
        pcbRepoHojaEvaAlumnoTipFormato.addOptionAndSimpleValue(null, 'Media-Superior-6','Media-Superior-6');       
		pcbRepoHojaEvaAlumnoTipFormato.addOptionAndSimpleValue(null, 'Media-Superior-Rev-4','MediaSupRev44');		
		pcbRepoHojaEvaAlumnoTipFormato.addOptionAndSimpleValue(null, 'Media-Superior-Rev-5','MediaSupRev-55');		
		pcbRepoHojaEvaAlumnoTipFormato.addOptionAndSimpleValue(null, 'Media-Superior-Rev-6','MediaSupRev-66');
		pcbRepoHojaEvaAlumnoTipFormato.addOptionAndSimpleValue(null, 'Planilla-Diaria-7','Reporte-7');
		pcbRepoHojaEvaAlumnoTipFormato.addOptionAndSimpleValue(null, 'Lista-Cotejos-8','Reporte-8');
		pcbRepoHojaEvaAlumnoTipFormato.addOptionAndSimpleValue(null, 'Escala-Criterios-9','Reporte-9');
		pcbRepoHojaEvaAlumnoTipFormato.addOptionAndSimpleValue(null, 'Escala-Estimación-10','Reporte-10');
		pcbRepoHojaEvaAlumnoTipFormato.addOptionAndSimpleValue(null, 'Guia-Observación-11','Reporte-11');
		pcbRepoHojaEvaAlumnoTipFormato.addOptionAndSimpleValue(null, 'Instr-Informe-Final-12','Reporte-12');
		pcbRepoHojaEvaAlumnoTipFormato.addOptionAndSimpleValue(null, 'Evaluac.-Parciales-13','Reporte-13');        
        pcbRepoHojaEvaAlumnoTipFormato.addOptionAndSimpleValue(null, 'Control de Asistencia-14','Reporte-14');        
		pcbRepoHojaEvaAlumnoTipFormato.setSizeHeight(300);
		dialogsRepoHojaEvaAlumno.adjAllMarginObj(4,1,10);
        dialogsRepoHojaEvaAlumno.addLn(5,1,1);
		dialogsRepoHojaEvaAlumno.setHeightCell(5,1,9);
        dialogsRepoHojaEvaAlumno.addObjToDialog(imgButtonsRepoHojaEvaAluReporte,6,1);
    	imgButtonsRepoHojaEvaAluReporte.setDimension(90,22);
        dialogsRepoHojaEvaAlumno.addObjToDialog(imgButtonsRepoHojaEvaAluSalir,6,1);
    	imgButtonsRepoHojaEvaAluSalir.setDimension(90,22);
        dialogsRepoHojaEvaAlumno.adjAllMarginObj(6,1,30);
        dialogsRepoHojaEvaAlumno.leftMarginObj(6,1,0,289);
    },
 
    create : function(){
    	dialogsRepoHojaEvaAlumno = dialogs.create('dialogsRepoHojaEvaAlumno',0,0,833,126,'HOJA DE EVALUACIÓN DEL ESTUDIANTE');
    	dialogsRepoHojaEvaAlumno.setAdjY(70);
    	pcbRepoHojaEvaAlumnoOrganizacion = powerComboBox.create('pcbRepoHojaEvaAlumnoOrganizacion','pcbRepoHojaEvaAlumnoOrganizacion','Organización (+):',1,103);
    	pcbRepoHojaEvaAlumnoOrganizacion.enableReadOnlyEditor();
    	pcbRepoHojaEvaAlumnoOrganizacion.addEmptyOption();
    	pcbRepoHojaEvaAlumnoOrganizacion.setValidEmpty();
    	pcbRepoHojaEvaAlumnoSuborganizacion = powerComboBox.create('pcbRepoHojaEvaAlumnoSuborganizacion','pcbRepoHojaEvaAlumnoSuborganizacion','Suborganización (^):',1,123);
    	pcbRepoHojaEvaAlumnoSuborganizacion.enableReadOnlyEditor();
    	pcbRepoHojaEvaAlumnoSuborganizacion.addEmptyOption();
    	pcbRepoHojaEvaAlumnoSuborganizacion.setValidEmpty();
    	pcbRepoHojaEvaAlumnoCarrera = powerComboBox.create('pcbRepoHojaEvaAlumnoCarrera','pcbRepoHojaEvaAlumnoCarrera','Carrera (^):',1,99);
    	pcbRepoHojaEvaAlumnoCarrera.enableReadOnlyEditor();
    	pcbRepoHojaEvaAlumnoCarrera.addEmptyOption();
    	pcbRepoHojaEvaAlumnoCarrera.setValidEmpty();
    	pcbRepoHojaEvaAlumnoPeriodo = powerComboBox.create('pcbRepoHojaEvaAlumnoPeriodo','pcbRepoHojaEvaAlumnoPeriodo','Periodo (^):',1,103);
    	pcbRepoHojaEvaAlumnoPeriodo.enableReadOnlyEditor();
    	pcbRepoHojaEvaAlumnoPeriodo.addEmptyOption();
    	pcbRepoHojaEvaAlumnoPeriodo.setValidEmpty();
    	pcbRepoHojaEvaAlumnoPosicion = powerComboBox.create('pcbRepoHojaEvaAlumnoPosicion','pcbRepoHojaEvaAlumnoPosicion','Posición (^):',1,123);
    	pcbRepoHojaEvaAlumnoPosicion.enableReadOnlyEditor();
    	pcbRepoHojaEvaAlumnoPosicion.addEmptyOption();
    	pcbRepoHojaEvaAlumnoPosicion.setValidEmpty();
    	pcbRepoHojaEvaAlumnoMateria = powerComboBox.create('pcbRepoHojaEvaAlumnoMateria','pcbRepoHojaEvaAlumnoMateria','Materia (^):',1,103);
    	pcbRepoHojaEvaAlumnoMateria.enableReadOnlyEditor();
    	pcbRepoHojaEvaAlumnoMateria.addEmptyOption();
    	pcbRepoHojaEvaAlumnoMateria.setValidEmpty();
    	pcbRepoHojaEvaAlumnoMateria.setDataType('string');
    	pcbRepoHojaEvaAlumnoMateria.setFieldFind(true);
    	pcbRepoHojaEvaAlumnoSeccion = powerComboBox.create('pcbRepoHojaEvaAlumnoSeccion','pcbRepoHojaEvaAlumnoSeccion','Sección (^):',1,99);
    	pcbRepoHojaEvaAlumnoSeccion.enableReadOnlyEditor();
    	pcbRepoHojaEvaAlumnoSeccion.addEmptyOption();
    	pcbRepoHojaEvaAlumnoSeccion.setValidEmpty();
    	pcbRepoHojaEvaAlumnoSeccion.setDataType('string');
    	pcbRepoHojaEvaAlumnoSeccion.setFieldFind(true);
    	pcbRepoHojaEvaAlumnoTipFormato = powerComboBox.create('pcbRepoHojaEvaAlumnoTipFormato','pcbRepoHojaEvaAlumnoTipFormato','Tipo Formato:',1,99);
    	pcbRepoHojaEvaAlumnoTipFormato.enableReadOnlyEditor();
    	pcbRepoHojaEvaAlumnoTipFormato.addEmptyOption();
    	pcbRepoHojaEvaAlumnoTipFormato.setValidEmpty();
    	pcbRepoHojaEvaAlumnoTipFormato.setDataType('string');
    	pcbRepoHojaEvaAlumnoTipFormato.setFieldFind(true);
    	imgButtonsRepoHojaEvaAluReporte = imgButtons.create('imgButtonsRepoHojaEvaAluReporte','Reporte','print.png');
    	imgButtonsRepoHojaEvaAluSalir = imgButtons.create('imgButtonsRepoHojaEvaAluSalir','Salir','salir.png');
    },

    init : function(){
    	this.create();
    	this.setEvents();
    	this.dialogsRepoHojaEvaAlumno_Init();
    	this.createMWs();
    },
  
  	limpiar : function(tipo) {
  		pcbRepoHojaEvaAlumnoOrganizacion.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoSuborganizacion);
  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoCarrera);
  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoPeriodo);
  		dialogsRepoHojaEvaAlumno.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoHojaEvaAlumno, pcbRepoHojaEvaAlumnoOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoHojaEvaAlumno, pcbRepoHojaEvaAlumnoOrganizacion, pcbRepoHojaEvaAlumnoSuborganizacion, pcbRepoHojaEvaAlumnoCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function(){
    	imgButtonsRepoHojaEvaAluReporte.onClick(this.windowName + ".coreUpdate()");    	
        imgButtonsRepoHojaEvaAluSalir.onClick('dialogsRepoHojaEvaAlumno.close()');
		pcbRepoHojaEvaAlumnoOrganizacion.onChange(this.windowName + ".resetElements('org')");
		pcbRepoHojaEvaAlumnoSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		pcbRepoHojaEvaAlumnoCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbRepoHojaEvaAlumnoPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbRepoHojaEvaAlumnoPosicion.onChange(this.windowName + ".resetElements('pos')");
		pcbRepoHojaEvaAlumnoMateria.onChange(this.windowName + ".resetElements('mat')");
    },
    
    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoSuborganizacion);
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoCarrera);
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoPeriodo);
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoMateria);
			Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoPosicion);
			Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoSeccion);
	    	if (pcbRepoHojaEvaAlumnoOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoHojaEvaAlumno, pcbRepoHojaEvaAlumnoSuborganizacion, 1, 2, pcbRepoHojaEvaAlumnoOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoCarrera);
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoPeriodo);
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoMateria);
			Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoPosicion);
			Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoSeccion);
	    	if (pcbRepoHojaEvaAlumnoSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoHojaEvaAlumno, pcbRepoHojaEvaAlumnoCarrera, -1, 3, pcbRepoHojaEvaAlumnoSuborganizacion);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoPeriodo);
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoMateria);
			Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoPosicion);
			Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoSeccion);
			pcbRepoHojaEvaAlumnoTipFormato.setSelectedIndex(0);
	    	if (pcbRepoHojaEvaAlumnoCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoHojaEvaAlumno, pcbRepoHojaEvaAlumnoPeriodo, 0, 1, pcbRepoHojaEvaAlumnoCarrera.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
			Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoSeccion);
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoMateria);
	  		Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsRepoHojaEvaAlumno, pcbRepoHojaEvaAlumnoPosicion, 0, 1, pcbRepoHojaEvaAlumnoCarrera.setModeReturnGetText(2));        		
    	} 
    	else if (element == 'pos') {
    		var rlx = xmlStructs.createRecordList("rlx");

    		rlx.add('reg', pcbRepoHojaEvaAlumnoCarrera.setModeReturnGetText(2));
    		rlx.add('reg', pcbRepoHojaEvaAlumnoPosicion);
    		rlx.add('reg', pcbRepoHojaEvaAlumnoPeriodo);
    		Tool.cnnSrv("ReportObject", "getRepoListAlumnoCursoSeccion", this.windowName + ".loadDataSeccionMateria()", rlx);
    	} 
	},
	
	loadDataSeccionMateria: function() {
		Tool.loadPowerComboData(dialogsRepoHojaEvaAlumno, pcbRepoHojaEvaAlumnoSeccion, 0, 1, json('getRepoListAlumnoCursoSeccion'));
  		Tool.loadPowerComboData(dialogsRepoHojaEvaAlumno, pcbRepoHojaEvaAlumnoMateria, 0, 1, json('getMantPensumMateriaActivaSinPeriodo'));
  		pcbRepoHojaEvaAlumnoMateria.setSizeHeight(300);
	},
	
	reporte0 : function() {
		var j = json('getRepoListAlumnoCurso');
		//json para formato de evaluación de alumno de primaria (j2)
		var j2 = {
			fields : ['item','nu_cedula','de_apellido','de_nombre','','i','p','c','','i','p','c','','i','p','c','','i','p','c','','def'],
			data : [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
		};
		//DATA PARA J2		
		for(var i=0; i<j.data[0].length; i++){
		  j2.data[0][i] = j.data[0][i];//item
		  j2.data[1][i] = j.data[1][i];//ci
		  j2.data[2][i] = j.data[2][i];//apellido
		  j2.data[3][i] = j.data[3][i];//nombre
		  j2.data[4][i] = '';//|
		  j2.data[5][i] = '';//i
		  j2.data[6][i] = '';//p
		  j2.data[7][i] = '';//c
		  j2.data[8][i] = '';//|
		  j2.data[9][i] = '';//i
		  j2.data[10][i] = '';//p
		  j2.data[11][i] = '';//c
		  j2.data[12][i] = '';//|
		  j2.data[13][i] = '';//i
		  j2.data[14][i] = '';//p
		  j2.data[15][i] = '';//c
		  j2.data[16][i] = '';//|
		  j2.data[17][i] = '';//i
		  j2.data[18][i] = '';//p
		  j2.data[19][i] = '';//c
		  j2.data[20][i] = '';//|
		  j2.data[21][i] = '';//def
		}
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,0);
        ///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'courier','bold');
        rep.addText(242,21,'HOJA DE EVALUACIÓN DEL ESTUDIANTE',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'courier','bold');
        rep.addBar(0,38,1128,97,rep.getRGBAObj(187,196,238,0.4),false);
		rep.addText(20, 54, 'ORGANIZACION:    '+pcbRepoHojaEvaAlumnoOrganizacion.getOption(),false);
		rep.addText(20, 72, 'SUBORGANIZACION: '+pcbRepoHojaEvaAlumnoSuborganizacion.getOption(),false);
		rep.addText(20, 90, 'ESCUELA:         '+pcbRepoHojaEvaAlumnoCarrera.getOption(),false);
		rep.addText(400, 54, 'PERIODO:  '+pcbRepoHojaEvaAlumnoPeriodo.getOption(),false);
		rep.addText(400, 72, 'POSICION: '+pcbRepoHojaEvaAlumnoPosicion.getOption(),false);
		rep.addText(400, 90, 'MATERIA:  '+pcbRepoHojaEvaAlumnoMateria.getOption(),false);
		rep.addText(650, 54, 'SECCION: '+pcbRepoHojaEvaAlumnoSeccion.getOption(),false);
		rep.addBar(0,102,1128,158,rep.getRGBAObj(210,200,200,0.7),false);
		rep.addText(20, 117, 'INDICADOR:',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);
		rep.addTable('TablaRepoHojaEvaAlumno',['Nº','C.i.','Apellido','Nombre','','I','P','C','','I','P','C','','I','P','C','','I','P','C','','Def'],398,160);
        rep.setTotalRowTable(43);
        rep.setHeightRow(20); 
        rep.setSizeColumnArray([20,70,202,202,2,20,20,20,2,20,20,20,2,20,20,20,2,20,20,20,2,55]);
        rep.setAlignData(['center','center','left','left','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center']);     
        rep.addJsonToTable('TablaRepoHojaEvaAlumno', j2, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]);
		rep.addJsonToTable('TablaRepoHojaEvaAlumno', j2, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		rep.previewHTML();
	},
		
	reporte1 : function() {
		var j = json('getRepoListAlumnoCurso');
		//json para formato de evaluación de alumno de primaria (j2)
		var j2 = {
			fields : ['item','nu_cedula','de_apellido','de_nombre','','i','p','c','','i','p','c','','i','p','c','','i','p','c','','def'],
			data : [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
		};
		//DATA PARA J2		
		for(var i=0; i<j.data[0].length; i++){
		  j2.data[0][i] = j.data[0][i];//item
		  j2.data[1][i] = j.data[1][i];//ci
		  j2.data[2][i] = j.data[2][i];//apellido
		  j2.data[3][i] = j.data[3][i];//nombre
		  j2.data[4][i] = '';//|
		  j2.data[5][i] = '';//i
		  j2.data[6][i] = '';//p
		  j2.data[7][i] = '';//c
		  j2.data[8][i] = '';//|
		  j2.data[9][i] = '';//i
		  j2.data[10][i] = '';//p
		  j2.data[11][i] = '';//c
		  j2.data[12][i] = '';//|
		  j2.data[13][i] = '';//i
		  j2.data[14][i] = '';//p
		  j2.data[15][i] = '';//c
		  j2.data[16][i] = '';//|
		  j2.data[17][i] = '';//i
		  j2.data[18][i] = '';//p
		  j2.data[19][i] = '';//c
		  j2.data[20][i] = '';//|
		  j2.data[21][i] = '';//def
		}
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
		rep.setPageSize(1150);
		rep.setPositionIcon(756,4);
       	///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'courier','bold');
        rep.addText(242,21,'HOJA DE EVALUACIÓN DEL ESTUDIANTE',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'courier','bold');
        rep.addBar(0,38,1128,78,rep.getRGBAObj(187,196,238,0.4),false);
		rep.addText(20, 48, 'ORGANIZACION:    '+pcbRepoHojaEvaAlumnoOrganizacion.getOption(),false);
		rep.addText(20, 61, 'SUBORGANIZACION: '+pcbRepoHojaEvaAlumnoSuborganizacion.getOption(),false);
		rep.addText(20, 74, 'ESCUELA:         '+pcbRepoHojaEvaAlumnoCarrera.getOption(),false);
		rep.addText(400, 48, 'PERIODO:  '+pcbRepoHojaEvaAlumnoPeriodo.getOption(),false);
		rep.addText(400, 61, 'POSICION: '+pcbRepoHojaEvaAlumnoPosicion.getOption(),false);
		rep.addText(400, 74, 'MATERIA:  '+pcbRepoHojaEvaAlumnoMateria.getOption(),false);
		rep.addText(650, 48, 'SECCION: '+pcbRepoHojaEvaAlumnoSeccion.getOption(),false);
		rep.addBar(0,82,1128,293,rep.getRGBAObj(210,200,200,0.4),false);
		rep.addText(18, 96, 'INDICADORES:',false);
		rep.addText(650, 96, 'RESULTADO EVALUATIVO:',false);
		rep.addLine(2,99,2,291,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(19,99,19,291,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(650,99,650,291,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(790,99,790,291,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(2,99,650,99,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(650,99,790,99,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(2,115,650,115,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(650,115,790,115,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(2,131,650,131,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(650,131,790,131,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(2,147,650,147,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(650,147,790,147,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(2,163,650,163,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(650,163,790,163,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(2,179,650,179,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(650,179,790,179,rep.getRGBAObj(20,20,20,4),1,false);
		rep.addLine(2,195,650,195,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(650,195,790,195,rep.getRGBAObj(20,20,20,4),1,false);
		rep.addLine(2,211,650,211,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(2,227,650,227,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(2,243,650,243,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(2,259,650,259,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(2,275,650,275,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(2,291,650,291,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addLine(650,291,790,291,rep.getRGBAObj(20,20,20,0.4),1,false);
		rep.addText(9, 111, '1',false);
		rep.addText(655, 111, '(E)  Excelente',false);
		rep.addText(9, 127, '2',false);
		rep.addText(655, 127, '(MB) Muy Bien',false);
		rep.addText(9, 143, '3',false);
		rep.addText(655, 143, '(B)  Bien',false);
		rep.addText(9, 159, '4',false);
		rep.addText(655, 159, '(R)  Regular',false);
		rep.addText(9, 175, '5',false);
		rep.addText(655, 175, '(PM) Puedes Mejorar',false);
		rep.addText(9, 191, '6',false);
		rep.addText(655, 191, '(SE) Sin Evaluar',false);
		rep.addText(9, 207, '7',false);
		rep.addText(655, 207, 'Nota:',false);
		rep.addText(9, 223, '8',false);
		rep.addText(9, 239, '9',false);
		rep.addText(3, 255, '10',false);
		rep.addText(3, 271, '11',false);
		rep.addText(3, 287, '12',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(0, 180, 180, 180, 'helvetica', 0, 0, 0, 10, 'rgba(20,20,20,0.9)', 'rgba(20,20,20,0.9)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);
		rep.addTable('TablaRepoHojaEvaAlumno',['Nº','C.i.','Apellido','Nombre','','1','2','3','4','5','6','7','8','9','10','11','12'],396,298);
        rep.setTotalRowTable(47);
        rep.setHeightRow(18); 
        rep.setSizeColumnArray([20,80,204,204,2,24,24,24,24,24,24,24,24,24,24,24,24]);
        rep.setAlignData(['center','center','left','left','center','center','center','center','center','center','center','center','center','center','center','center','center']);     
        rep.addJsonToTable('TablaRepoHojaEvaAlumno', j2, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,]);
		rep.addJsonToTable('TablaRepoHojaEvaAlumno', j2, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,]);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		rep.previewHTML();
	},
	
	reporte2 : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
		rep.setPageSize(1150);
		rep.setWidthReport(845);
        rep.setPositionIcon(800,4);
       	///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','bold');
		rep.addText(10, 24, ''+pcbRepoHojaEvaAlumnoOrganizacion.getOption(),false);
		rep.addText(90, 24, 'Año o Grado: '+pcbRepoHojaEvaAlumnoPosicion.getOption(),false);
		rep.addText(240,24, 'Sección: '+pcbRepoHojaEvaAlumnoSeccion.getOption(),false);
		rep.addText(330,24, 'Lapso:_____',false);
		rep.addText(440, 24, 'Asignatura: '+pcbRepoHojaEvaAlumnoMateria.getOption(),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','bold');
		rep.addSimpleTable(0,40.0,rep.getRGBAObj(0,0,0,1),380.8,1,20.5,false);//linea E
		rep.addText(120,55,'CONTROL DE ASISTENCIA',false); 
		rep.addText(494,60,'P R O Y E C T O  D E   A P R E N D I Z A J E',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','bold');
		rep.addText(724,210,'Estrategia',false); 
		rep.addText(724,225,'Evaluativa',false);
		rep.addText(796,225,'Fecha',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','bold');
		rep.addText(391,226,'Nº',false); 
		rep.addText(391,266,'01',false);
		rep.addText(391,326,'02',false);
		rep.addText(391,386,'03',false);
		rep.addText(391,446,'04',false);
		rep.addText(391,506,'05',false);
		rep.addText(391,566,'06',false); 
		rep.addText(391,626,'07',false); 
		rep.addText(391,686,'08',false); 
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),11,'helvetica','bold','black');
		rep.addText(492,226,'Finalidad o Contenido',false); 
       	rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','bold','black');
		rep.addAbsTable(0, 60, [20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20], 1, 970.0, false);
		rep.addSimpleTable(388,40.0,rep.getRGBAObj(0,0,0,1),455.0,6,25.0,false);//linea E////////
		rep.addSimpleTable(388,190.0,rep.getRGBAObj(0,0,0,1),455.0,1,40.0,false);//linea E////////
		rep.addSimpleTable(388,230.0,rep.getRGBAObj(0,0,0,1),455.0,8,60.0,false);//linea E////////
		rep.addAbsTable(388, 190.0, [20,314,60,60], 1, 520.0, false);
		rep.addAbsTable(783, 728.0, [60], 1, 149.0, false);
		rep.addSimpleTable(388,728.0,rep.getRGBAObj(0,0,0,1),455.0,6,25.0,false);//linea E////////
		rep.addText(634,750,'FINALIDAD PROPUESTA:',false);
		rep.addText(570,774,'FINALIDADES COMPLEMENTARIAS:',false);
		rep.addText(624,800,'FINALIDADES LOGRADAS:',false);
		rep.addText(650,825,'TOTAL ESTUDIANTES:',false);
		rep.addText(485,849,'Nº ESTUDIANTES QUE LOGRARON LA FINALIDAD:',false); 
		rep.addText(466,872,'Nº ESTUDIANTES QUE NO LOGRARON LA FINALIDAD:',false);
		rep.addSimpleTable(388,888.0,rep.getRGBAObj(0,0,0,1),455.0,4,25.0,false);//linea E////////
		rep.addText(391,908,'OBSERVACIONES:',false);
		rep.addSimpleTable(388,996.0,rep.getRGBAObj(0,0,0,1),455.0,1,34.0,false);//linea E////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','bold','black');
		rep.addText(430,1012,'Valores: Responsabilidad (Uniforme, Cumplimiento, Académico, Otros). ',false);
		rep.addText(490,1025,'Disciplina, Asistencia, Respeto y Puntualidad.). ',false);
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 10, 'rgba(0,0,0,0.9)', 'rgba(0,0,0,0.9)', 2,'bold');
		rep.setTableCellProperties(1, 'helvetica', 10);
		rep.addTable('TablaRepoProbador',['Nº'],8,201);
        rep.setTotalRowTable(46);
        rep.setHeightRow(18); 
        rep.setSizeColumnArray([21]);
        rep.setAlignData(['right']);     
        rep.addJsonData('TablaRepoProbador','getRepoListAlumnoCurso',[0,2,3,5,6,7,8,9,10,11,12,13,14,15]);
		rep.addSimpleTable(0,220.0,rep.getRGBAObj(0,0,0,1),380.0,45,18.0,false);//linea E////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','bold');
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		setTimeout(rep.previewHTML,100);
		rep.render();		
	}, 	
		
	reporte3 : function() {
			var j = json('getRepoListAlumnoCurso');
			//json para formato de evaluación de alumno de primaria (j3)
			var j3 = {
				fields : ['item','nu_cedula','de_apellido','de_nombre','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
				data : [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
			};						
			//DATA PARA J3		
			for(var i=0; i<j.data[0].length; i++){
			  j3.data[0][i] = j.data[0][i];//item
			  j3.data[1][i] = j.data[1][i];//ci
			  j3.data[2][i] = j.data[2][i];//apellido
			  j3.data[3][i] = j.data[3][i];//nombre
			  j3.data[4][i] = '';//i
			  j3.data[5][i] = '';//p
			  j3.data[6][i] = '';//c
			  j3.data[7][i] = '';//i
			  j3.data[8][i] = '';//p
			  j3.data[9][i] = '';//c
			  j3.data[10][i] = '';//i
			  j3.data[11][i] = '';//p
			  j3.data[12][i] = '';//c
			  j3.data[13][i] = '';//i
			  j3.data[14][i] = '';//p
			  j3.data[15][i] = '';//c
			  j3.data[16][i] = '';//def			  
			}					
		    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
			rep = new Report('portrait');
			rep.setPDFFormat('custom','mm', [343, 210]);
	        rep.setPositionIcon(756,4);
	        //rep.setNoRepeatHead();
			///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
	        rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
	        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'courier','bold');
	        rep.addText(242,21,'HOJA DE EVALUACIÓN CONTINUA',false);
	        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),7,'helvetica','bold');
	        rep.addBar(0,38,1128,78,rep.getRGBAObj(187,196,238,0.4),false);
			rep.addText(20, 48, 'ORGANIZACION:        '+pcbRepoHojaEvaAlumnoOrganizacion.getOption(),false);
			rep.addText(20, 61, 'SUBORGANIZACION: '+pcbRepoHojaEvaAlumnoSuborganizacion.getOption(),false);
			rep.addText(20, 74, 'ESCUELA:                 '+pcbRepoHojaEvaAlumnoCarrera.getOption(),false);
			rep.addText(400, 48, 'PERIODO:  '+pcbRepoHojaEvaAlumnoPeriodo.getOption(),false);
			rep.addText(400, 61, 'POSICION: '+pcbRepoHojaEvaAlumnoPosicion.getOption(),false);
			rep.addText(400, 74, 'MATERIA:    '+pcbRepoHojaEvaAlumnoMateria.getOption(),false);
			rep.addText(620, 48, 'SECCION: '+pcbRepoHojaEvaAlumnoSeccion.getOption(),false);
			rep.addBar(0,82,1128,210,rep.getRGBAObj(210,200,200,0.4),false);
			rep.addSimpleTablePDF(160.0 ,49.0,rep.getRGBAObj(0,0,0,1),8.8,19,3.8,false);//linea E
			//************************ TABLE ***************************
			rep.setTableRowProperties(0, 180, 180, 180, 'helvetica', 0, 0, 0, 9, 'rgba(0,0,0,0.9)', 'rgba(0,0,0,0.9)',1);
			rep.setTableCellProperties(1, 'helvetica', 7);
			rep.addTable('TablaRepoHojaEvaAlumno2',['Nº','C.i.','Apellido','Nombre','','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22'],390,87);
	        rep.setTotalRowTable(47);
	        rep.setHeightRow(19); 
	        rep.setSizeColumnArray([28,60,132,132,2,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20]);
	        rep.setAlignData(['center','center','left','left','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center']);     
	        rep.addJsonToTable('TablaRepoHojaEvaAlumno2', j3, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]);
			rep.addJsonToTable('TablaRepoHojaEvaAlumno2', j3, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]);
			//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
	        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
	        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
			//********************************************* FIN GENERACION DEL REPORTE ***********************************************
			rep.render();
			setTimeout(rep.previewHTML,100);
	        rep.render();	        
		},
	
	reporte4 : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,4);
       	///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'courier','bold');
        rep.addText(242,21,'HOJA DE EVALUACIÓN DEL ESTUDIANTE',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'courier','bold');
        rep.addBar(0,38,1128,115,rep.getRGBAObj(187,196,238,0.4),false);
		rep.addText(20, 54, 'ORGANIZACION: '+pcbRepoHojaEvaAlumnoOrganizacion.getOption(),false);
		rep.addText(380, 54, 'SUBORGANIZACION: '+pcbRepoHojaEvaAlumnoSuborganizacion.getOption(),false);
		rep.addText(20, 90, 'CARRERA     : '+pcbRepoHojaEvaAlumnoCarrera.getOption(),false);
		rep.addText(20, 72, 'PERIODO     : '+pcbRepoHojaEvaAlumnoPeriodo.getOption(),false);
		rep.addText(380, 72, 'POSICION       : '+pcbRepoHojaEvaAlumnoPosicion.getOption(),false);
		rep.addText(380, 90, 'MATERIA        : '+pcbRepoHojaEvaAlumnoMateria.getOption(),false);
		rep.addText(650, 72, 'SECCION: '+pcbRepoHojaEvaAlumnoSeccion.getOption(),false);
		rep.addText(20, 108, 'PROFESOR    : '+json('getProfesorCurso').data[0][0],false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);
		rep.addTable('TablaRepoHojaEvaAlumno',['Nº','C.i.','Apellido','Nombre','1M','2M','%','%','%','%','%','%','%','%','DEF'],396,125);
        rep.setTotalRowTable(46);
        rep.setHeightRow(17); 
        rep.setSizeColumnArray([30,70,169,169,32,32,32,32,32,32,32,32,32,32,40]);
        rep.setAlignData(['right','center','left','left','center','center','center','center','center','center','center','center','center','center','center']);     
        rep.addJsonData('TablaRepoHojaEvaAlumno','getRepoListAlumnoCurso',[0,1,2,3,5,6,7,8,9,10,11,12,13,14,15]);		
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		rep.previewHTML();
	},
			
	reporte5 : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
		rep.setPageSize(1150);
		rep.setWidthReport(845);
        rep.setPositionIcon(770,4);
        ///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'courier','bold');
        rep.addText(295,21,'HOJA DE EVALUCIÓN CONTINUA',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'courier','bold');
        rep.addSimpleTable(1,40.0,rep.getRGBAObj(0,0,0,1),306.0,1,70.0,false);//linea E
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','bold','black');
		rep.addText(15,68, 'Unidad Educativa',false);
		rep.addText(15, 90, ''+pcbRepoHojaEvaAlumnoOrganizacion.getOption(),false);
		rep.addSimpleTable(1,110.0,rep.getRGBAObj(0,0,0,1),306.0,1,90.0,false);//linea E
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','bold','black');
		rep.addText(15, 125, 'Periodo Escolar: '+pcbRepoHojaEvaAlumnoPeriodo.getOption(),false);
		rep.addText(15, 140, 'Año o Grado:      '+pcbRepoHojaEvaAlumnoPosicion.getOption()+' '+pcbRepoHojaEvaAlumnoSeccion.getOption(),false);
		rep.addText(15,155, 'Materia',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),6,'helvetica','bold','black');
		rep.addText(15, 170, ''+pcbRepoHojaEvaAlumnoMateria.getOption(),false);
		rep.addAbsTable(307, 40, [26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26], 1, 18, false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','bold','black');
		rep.addText(310,53, 'EP',false);rep.addText(339,53,'R',false);rep.addText(361,53, 'EP',false); rep.addText(391,53,'R',false);
		rep.addText(413,53, 'EP',false);rep.addText(443,53,'R',false);rep.addText(465,53, 'EP',false); rep.addText(494,53,'R',false);
		rep.addText(517,53, 'EP',false);rep.addText(547,53,'R',false);rep.addText(569,53, 'EP',false); rep.addText(599,53,'R',false); 
		rep.addText(621,53, 'EP',false);rep.addText(651,53,'R',false);rep.addText(673,53, 'EP',false); rep.addText(703,53,'R',false);		
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),7,'helvetica','bold','black');
		rep.addText(727,53, 'C',false);rep.addText(727,63,'A',false); rep.addText(727,73, 'L' ,false); rep.addText(727,83,'I',false);
		rep.addText(727,93, 'F',false);rep.addText(727,103,'I',false);rep.addText(727,113, 'C' ,false); rep.addText(727,123,'A',false);
		rep.addText(727,133, 'C',false);rep.addText(727,143,'I',false);rep.addText(727,153, 'O' ,false); rep.addText(727,163,'N',false);		
		rep.addText(738,122, 'P',false);rep.addText(738,132,'R',false);rep.addText(738,142, 'O' ,false); rep.addText(738,152,'M',false);
		rep.addText(738,162, 'E',false);rep.addText(738,172,'D',false);rep.addText(738,182, 'I' ,false); rep.addText(738,192,'O',false);		
		rep.addText(757,53, 'P',false);rep.addText(757,63,'U',false);rep.addText(757,73, 'N' ,false); rep.addText(757,83,'T',false);
		rep.addText(757,93, 'O',false);rep.addText(757,103,'S',false);rep.addText(772,98, 'A' ,false); rep.addText(772,108,'D',false);
		rep.addText(772,118, 'I',false);rep.addText(772,128,'C',false);rep.addText(772,138, 'I ' ,false); rep.addText(772,148,'O',false);
		rep.addText(772,158, 'N',false);rep.addText(772,168,'A',false);rep.addText(772,178, 'L' ,false); rep.addText(772,188,'E',false);
		rep.addText(772,198,'S',false);rep.addText(795,53, 'D',false);rep.addText(795,63,'E',false); rep.addText(795,73, 'F' ,false);
		rep.addText(795,83,'I',false);rep.addText(795,93, 'N',false);rep.addText(795,103,'I',false);rep.addText(795,113, 'T' ,false);
		rep.addText(795,123,'I',false);rep.addText(795,133, 'V',false);rep.addText(795,143,'A',false);rep.addText(817,53, 'T',false);
		rep.addText(817,63,'O',false);rep.addText(817,73, 'T' ,false);rep.addText(817,83,'A',false);rep.addText(817,93, 'L',false);
		rep.addText(830,75, 'I',false);rep.addText(830,85,'N',false);rep.addText(830,95, 'A',false);rep.addText(830,105,'S',false);
		rep.addText(830,115, 'I ',false);rep.addText(830,125,'S',false);rep.addText(830,135, 'T',false);rep.addText(830,145,'E',false);
		rep.addText(830,155, 'N' ,false);rep.addText(830,165,'C',false);rep.addText(830,175,'I',false);rep.addText(830,185,'A',false);
		rep.addText(830,195,'S',false);		
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','bold','black');
		rep.addAbsTable(307, 58, [26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26], 1, 142, false);
		rep.addAbsTable(723, 40, [30,30,30,30], 1, 160.0, false);
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 10, 'rgba(0,0,0,0.9)', 'rgba(0,0,0,0.9)', 2);
		rep.setTableCellProperties(1, 'courier', 8);
		rep.addTable('TablaRepoHojaEvaAlumno',['Nº','Apellido','Nombre'],150,201);
        rep.setTotalRowTable(45);
        rep.setHeightRow(17); 
        rep.setSizeColumnArray([28,143,143]);
        rep.setAlignData(['right','left','left']);     
        rep.addJsonData('TablaRepoHojaEvaAlumno','getRepoListAlumnoCurso',[0,2,3,5,6,7,8,9,10,11,12,13,14,15]);		
		rep.addSimpleTable(306,202.0,rep.getRGBAObj(0,0,0,1),536.0,45,17.0,false);//linea E////////
		rep.addAbsTable(307, 202, [26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,30,30,30,30], 1, 765, false);
        rep.addText(20,1000, 'R  = Rasgos' ,false);
		rep.addText(120,1000,'EP = Evaluación Parcial',false);
		rep.addText(20,1060,'FIRMA DEL PROFESOR: _____________________________',false);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		rep.previewHTML();
	},
	
	reporte6 : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
		rep.setPageSize(1150);
		rep.setWidthReport(845);
        rep.setPositionIcon(800,4);
       	///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'courier','bold');
        rep.addText(215,23,'REGISTRO DE ACTUACIÓN GENERAL DEL ESTUDIANTE',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'courier','bold');
        rep.addSimpleTable(1,40.0,rep.getRGBAObj(0,0,0,1),253.0,1,70.0,false);//linea E
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','bold','black');
		rep.addText(15,68, 'Unidad Educativa',false);
		rep.addText(15, 90, ''+pcbRepoHojaEvaAlumnoOrganizacion.getOption(),false);
		rep.addSimpleTable(1,110.0,rep.getRGBAObj(0,0,0,1),253.0,1,90.0,false);//linea E
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','bold','black');
		rep.addText(15, 125, 'Periodo Escolar: '+pcbRepoHojaEvaAlumnoPeriodo.getOption(),false);
		rep.addText(15, 140, 'Año o Grado:       '+pcbRepoHojaEvaAlumnoPosicion.getOption(),false);
		rep.addText(15,155, 'Sección:               '+pcbRepoHojaEvaAlumnoSeccion.getOption(),false);
		rep.addText(15,170, 'Materia:',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),6,'helvetica','bold','black');
		rep.addText(64, 170, ''+pcbRepoHojaEvaAlumnoMateria.getOption(),false);
		rep.addAbsTable(0, 184, [255,32,32,32,32,32,32,32], 1, 18, false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','bold','black');
		rep.addText(15,195, 'Lapso: ______',false); rep.addText(208,197, 'Fechas:',false);
		rep.addText(257,197, '1era:',false); rep.addText(322,197,'1era:',false); rep.addText(386,197, '1era:',false); rep.addText(449,197,'1era:',false);
		rep.addText(259,180, 'ACT:',false); rep.addText(292,180,'ACT:',false); rep.addText(324,180, 'ACT:',false); rep.addText(355,180,'ACT:',false);
		rep.addText(388,180, 'ACT:',false); rep.addText(420,180,'ACT:',false); rep.addText(451,180, 'ACT:',false); rep.addText(500,194, 'INASISTENCIA DEL ESTUDIANTE D/M',false);
		//rep.addImage(105,492,300,531,'images/logo/_portada_boletin', false);
		rep.addImage(528,50,670,170,'images/logo/MRAB_portada_boletin.jpg', false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),6,'helvetica','bold','black');
		rep.addText(724,51, 'P',false); rep.addText(724,58,'R',false); rep.addText(724,68, 'O' ,false); rep.addText(724,78,'M',false);
		rep.addText(724,88, 'E',false); rep.addText(724,98,'D',false); rep.addText(724,108, 'I' ,false); rep.addText(724,118,'O',false);
		rep.addText(724,122, '',false); rep.addText(724,130,'E',false); rep.addText(724,138, 'S' ,false); rep.addText(724,146,'T',false);
		rep.addText(724,154, 'U',false); rep.addText(724,162,'D',false); rep.addText(724,170, 'I' ,false); rep.addText(724,178,'A',false);
		rep.addText(724,186, 'N',false); rep.addText(724,194,'T',false); rep.addText(724,201, 'E' ,false); 
		rep.addText(756,53, 'A',false); rep.addText(756,61,'J',false); rep.addText(756,69, 'U' ,false); rep.addText(756,77,'S',false);
		rep.addText(756,85, 'T',false); rep.addText(756,93,'E',false); rep.addText(756,103, '' ,false); rep.addText(756,111,'P',false);
		rep.addText(756,119, 'R',false); rep.addText(756,127,'O',false); rep.addText(756,135, 'F ' ,false); rep.addText(756,143,'E',false);
		rep.addText(756,151, 'S',false); rep.addText(756,159,'O',false); rep.addText(756,167, 'R' ,false); 		
		rep.addText(788,53, 'A',false); rep.addText(788,61,'J',false); rep.addText(788,69, 'U' ,false); rep.addText(788,77,'S',false);
		rep.addText(788,85, 'T',false); rep.addText(788,93,'E',false); rep.addText(788,103, '' ,false); rep.addText(788,111,'C',false);
		rep.addText(788,119, 'O',false); rep.addText(788,127,'N',false); rep.addText(788,135, 'S',false); rep.addText(788,143,'E',false); 
		rep.addText(788,151, 'J',false); rep.addText(788,159,'O',false);  		
		rep.addText(822,53, 'D',false); rep.addText(822,61,'E',false); rep.addText(822,69, 'F' ,false); rep.addText(822,77,'I',false);
		rep.addText(822,85, 'N',false);	rep.addText(822,95, 'I' ,false); rep.addText(822,103,'T',false); rep.addText(822,111, 'I',false);
		rep.addText(822,119,'V',false); rep.addText(822,127, 'A' ,false); 
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'courier','bold','black');
		rep.addAbsTable(255, 40, [32,32,32,32,32,32,32], 1, 945.0, false);
		rep.addAbsTable(480, 40, [231], 1,163.0, false);
		rep.addAbsTable(480, 202, [33,33,33,32,33,33,33], 1, 783.0, false);
		rep.addAbsTable(710, 40, [33,33,33,33], 1, 945.0, false);
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 10, 'rgba(0,0,0,0.9)', 'rgba(0,0,0,0.9)', 2,'bold');
		rep.setTableCellProperties(1, 'arial', 7);
		rep.addTable('TablaRepoProbador',['Nº','Apellido','Nombre'],127,201);
        rep.setTotalRowTable(46);
        rep.setHeightRow(17); 
        rep.setSizeColumnArray([28,116,116]);
        rep.setAlignData(['right','left','left']);     
        rep.addJsonData('TablaRepoProbador','getRepoListAlumnoCurso',[0,2,3,5,6,7,8,9,10,11,12,13,14,15]);		
		rep.addSimpleTable(255,202.0,rep.getRGBAObj(0,0,0,1),588.0,45,17.0,false);//linea E////////
		rep.addText(15,1060,'Nombre del Profesor:                                    Firma del Profesor: _____________________________',false);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		setTimeout(rep.previewHTML,600);
		rep.render();		
	},
	
	reporte7 : function() {		
		var rce10 = new ReportBuilder('p','pt','a4');
		rce10.clearReport();
		rce10.setSheetMargins({"left":80, "right":70, "top":30,"bottom":40});
        rce10.addImage({"src":imgEduca.banner, "width":400, "height":50, "align":'center', "y":10});
        rce10.addText({"text":'PLANIFICACIÓN DIARIA',"align":'left',"fontSize":13,"fontStyle":'bold'});
		rce10.addText({});
		rce10.addText({"text":'Disciplina: __________________________________, Año: _________, Sección: _________, Lapso: ______________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
        rce10.addText({"text":'Fecha de Ejecución: ____________________________________________________, Valor del Mes: ______________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'Componente: ______________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'Contenido: ________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
        rce10.addText({});
        rce10.addText({"text":'MOMENTOS DE LA CLASE:' ,"align":'left',"fontSize":14,"fontStyle":'bold'});
		rce10.addText({});
		rce10.addText({"text":'__________________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'__________________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'__________________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'__________________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'__________________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'__________________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'__________________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'__________________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'__________________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'__________________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'__________________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'Estrategias Metodológicas: __________________________________________________________________________' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'__________________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'Recursos: _________________________________________________________________________________________' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'__________________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({});
		rce10.addText({"text":'Tipo de Evaluación:' ,"align":'left',"fontSize":14,"fontStyle":'bold'});
		rce10.addText({});
		rce10.addText({"text":'Explorativa: ____                     Formativa: ____                        Sumativa: ____',"align":'justify',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({});
		rce10.addText({"text":'Instrumentos de Evaluzación:' ,"align":'left',"fontSize":14,"fontStyle":'bold'});
		rce10.addText({});
		rce10.addText({"text":'Lista de Cotejo:____  Escala de Criterio:____  Guía de Observación:____  Registro Descriptivo:____',"align":'justify',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'Escala de Estimación:____  Portafolio:____  Otros:____  Otros:____   Otros:____ ',"align":'justify',"fontSize":12,"fontStyle":'bold'});
        rce10.addText({"text":'Formas de Participación:' ,"align":'left',"fontSize":14,"fontStyle":'bold'});
		rce10.addText({});
		rce10.addText({"text":'Autoevaluación: ____              Coevaluación: ____                Heteroevaluación: ____',"align":'justify',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({});
		rce10.addText({"text":'Observación:' ,"align":'left',"fontSize":14,"fontStyle":'bold'});
		rce10.addText({"text":'__________________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'__________________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'__________________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'__________________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({"text":'__________________________________________________________________________________________________ ' ,"align":'left',"fontSize":12,"fontStyle":'bold'});
		rce10.addText({});
		rce10.addText({});
		rce10.addText({"text":'Nombre del Profesor: ______________________________  Firma del Profesor: ______________________',"align":'center',"fontSize":12,"fontStyle":'bold'});
		rce10.renderToPDF();
     },   
		
	reporte8 : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
		rep.setPageSize(1150);
		rep.setWidthReport(845);
        rep.setPositionIcon(800,4);
       	///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','bold');
		rep.addText(10, 24, ''+pcbRepoHojaEvaAlumnoOrganizacion.getOption(),false);
		rep.addText(90, 24, 'Año o Grado: '+pcbRepoHojaEvaAlumnoPosicion.getOption(),false);
		rep.addText(240,24, 'Sección: '+pcbRepoHojaEvaAlumnoSeccion.getOption(),false);
		rep.addText(330,24, 'Lapso:_____',false);
		rep.addText(450, 24, 'Asignatura: '+pcbRepoHojaEvaAlumnoMateria.getOption(),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','bold');
		rep.addSimpleTable(1,40.0,rep.getRGBAObj(0,0,0,1),841.8,1,20.5,false);//linea E
		rep.addSimpleTable(1,60.0,rep.getRGBAObj(0,0,0,1),421.0,1,162.5,false);//linea E
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','bold');
        rep.addText(370,55,'LISTA DE COTEJO',false); 
        rep.addText(5,75,'INDICADOR:',false)
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','bold','black');
		rep.addAbsTable(422, 60, [30,30,30,30,30,30,30,30,30,30,30,30,30,30], 1, 970.0, false);
		rep.addText(431,235, 'SI     NO     SI      NO     SI     NO     SI      NO    SI      NO     SI     NO     SI     NO',false);
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 10, 'rgba(0,0,0,0.9)', 'rgba(0,0,0,0.9)', 2,'bold');
		rep.setTableCellProperties(1, 'helvetica', 10);
		rep.addTable('TablaRepoProbador',['Nº','Apellido','Nombre'],207,201);
        rep.setTotalRowTable(46);
        rep.setHeightRow(18); 
        rep.setSizeColumnArray([28,200,200]);
        rep.setAlignData(['right','left','left']);     
        rep.addJsonData('TablaRepoProbador','getRepoListAlumnoCurso',[0,2,3,5,6,7,8,9,10,11,12,13,14,15]);		
		rep.addSimpleTable(421,220.0,rep.getRGBAObj(0,0,0,1),420.0,45,18.0,false);//linea E////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','bold');
		rep.addText(15,1080,'EX: Excelente (18-20),   B: Bueno (15-17),   R: Regular (11-14),   M: Mejorable (10),   NP: No Presentó',false);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		setTimeout(rep.previewHTML,100);
		rep.render();		
	}, 	
	
	reporte9 : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
		rep.setPageSize(1150);
		rep.setWidthReport(845);
        rep.setPositionIcon(800,4);
       	///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','bold');
		rep.addText(10, 24, ''+pcbRepoHojaEvaAlumnoOrganizacion.getOption(),false);
		rep.addText(90, 24, 'Año o Grado: '+pcbRepoHojaEvaAlumnoPosicion.getOption(),false);
		rep.addText(240,24, 'Sección: '+pcbRepoHojaEvaAlumnoSeccion.getOption(),false);
		rep.addText(330,24, 'Lapso:_____',false);
		rep.addText(450, 24, 'Asignatura: '+pcbRepoHojaEvaAlumnoMateria.getOption(),false)
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','bold');
		rep.addSimpleTable(1,40.0,rep.getRGBAObj(0,0,0,1),602.0,1,162.5,false);//linea E
        rep.addSimpleTable(1,40.0,rep.getRGBAObj(0,0,0,1),841.8,1,20.5,false);//linea E
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','bold');
        rep.addText(220,55,'ESCALA DE CRITERIOS',false); rep.addText(700,55,'RASGOS',false);
        rep.addText(5,75,'ACTIVIDAD EVALUARIVA:',false); rep.addText(700,55,'RASGOS',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','bold','black');
		rep.addAbsTable(603, 61, [40,40,40,40,40,40], 1, 970.0, false);
		rep.addText(822,90, 'D',false); rep.addText(822,101,'E',false); rep.addText(822,112, 'F' ,false); rep.addText(824,123,'I',false);
		rep.addText(822,134, 'N',false);	rep.addText(824,145, 'I' ,false); rep.addText(822,156,'T',false); rep.addText(824,167, 'I',false);
		rep.addText(822,178,'V',false); rep.addText(822,189, 'A' ,false);
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 10, 'rgba(0,0,0,0.9)', 'rgba(0,0,0,0.9)', 2,'bold');
		rep.setTableCellProperties(1, 'helvetica', 10);
		rep.addTable('TablaRepoProbador',['Nº','Apellido','Nombre'],302,201);
        rep.setTotalRowTable(46);
        rep.setHeightRow(18); 
        rep.setSizeColumnArray([28,290,290]);
        rep.setAlignData(['right','left','left']);     
        rep.addJsonData('TablaRepoProbador','getRepoListAlumnoCurso',[0,2,3,5,6,7,8,9,10,11,12,13,14,15]);		
		rep.addSimpleTable(603,202.0,rep.getRGBAObj(0,0,0,1),240.0,46,18.0,false);//linea E////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','bold');
		rep.addText(15,1110,'Nombre del Profesor:                                    Firma del Profesor: _____________________________',false);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		setTimeout(rep.previewHTML,100);
		rep.render();		
	}, 
	 
	reporte10 : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
		rep.setPageSize(1150);
		rep.setWidthReport(845);
        rep.setPositionIcon(800,4);
       	///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','bold');
		rep.addText(10, 24, ''+pcbRepoHojaEvaAlumnoOrganizacion.getOption(),false);
		rep.addText(90, 24, 'Año o Grado: '+pcbRepoHojaEvaAlumnoPosicion.getOption(),false);
		rep.addText(240,24, 'Sección: '+pcbRepoHojaEvaAlumnoSeccion.getOption(),false);
		rep.addText(330,24, 'Lapso:_____',false);
		rep.addText(450, 24, 'Asignatura: '+pcbRepoHojaEvaAlumnoMateria.getOption(),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','bold');
		rep.addSimpleTable(1,40.0,rep.getRGBAObj(0,0,0,1),841.8,1,20.5,false);//linea E
		rep.addSimpleTable(1,60.0,rep.getRGBAObj(0,0,0,1),421.0,1,162.5,false);//linea E
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','bold');
        rep.addText(360,55,'ESCALA DE ESTIMACIÓN',false); 
        rep.addText(5,75,'INDICADOR:',false)
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','bold','black');
		rep.addAbsTable(422, 60, [60,60,60,60,60,60,60], 1, 970.0, false);
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 10, 'rgba(0,0,0,0.9)', 'rgba(0,0,0,0.9)', 2,'bold');
		rep.setTableCellProperties(1, 'helvetica', 10);
		rep.addTable('TablaRepoProbador',['Nº','Apellido','Nombre'],207,201);
        rep.setTotalRowTable(46);
        rep.setHeightRow(18); 
        rep.setSizeColumnArray([28,200,200]);
        rep.setAlignData(['right','left','left']);     
        rep.addJsonData('TablaRepoProbador','getRepoListAlumnoCurso',[0,2,3,5,6,7,8,9,10,11,12,13,14,15]);		
		rep.addSimpleTable(421,220.0,rep.getRGBAObj(0,0,0,1),420.0,45,18.0,false);//linea E////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','bold');
		rep.addText(15,1080,'EX: Excelente (18-20),   B: Bueno (15-17),   R: Regular (11-14),   M: Mejorable (10),   NP: No Presentó',false);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		setTimeout(rep.previewHTML,100);
		rep.render();		
	}, 
	
	reporte11 : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
		rep.setPageSize(1060);
		rep.setWidthReport(1700);
		rep.setPositionIcon(1250,4);
       	///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1450,34,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),13,'helvetica','bold');
		rep.addText(10, 24, ''+pcbRepoHojaEvaAlumnoOrganizacion.getOption(),false);
		rep.addText(90, 24, 'Año o Grado: '+pcbRepoHojaEvaAlumnoPosicion.getOption(),false);
		rep.addText(250,24, 'Sección: '+pcbRepoHojaEvaAlumnoSeccion.getOption(),false);
		rep.addText(350,24, 'Lapso:_____',false);
		rep.addText(470, 24, 'Asignatura: '+pcbRepoHojaEvaAlumnoMateria.getOption(),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','bold');
		rep.addSimpleTable(1,40.0,rep.getRGBAObj(0,0,0,1),380.0,1,980.0,false);//linea Egggggg
		rep.addSimpleTable(380,40.0,rep.getRGBAObj(0,0,0,1),1068.8,1,40.5,false);//linea E
		rep.addAbsTable(380, 80, [178,178,178,178,178,178], 1, 940.0, false);
		rep.addAbsTable(0, 200, [380.0], 1, 718.0, false);
		rep.addAbsTable(0, 200, [1448.0], 19, 35.0, false);
		rep.addAbsTable(380, 200, [35.8,35.9,35.8,35.8,35.8], 1, 718.0, false);
		rep.addAbsTable(557, 200, [35.8,35.9,35.8,35.8,35.8], 1, 718.0, false);
		rep.addAbsTable(736, 200, [35.8,35.9,35.8,35.8,35.8], 1, 718.0, false);
		rep.addAbsTable(913, 200, [35.8,35.9,35.8,35.8,35.8], 1, 718.0, false);
		rep.addAbsTable(1091, 200, [35.8,35.9,35.8,35.8,35.8], 1, 718.0, false);
		rep.addAbsTable(1269, 200, [35.8,35.9,35.8,35.8,35.8], 1, 718.0, false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),13,'helvetica','bold');
        rep.addText(870,70,'ESTUDIANTE',false); 
        rep.addText(5,60,'INDICADOR / ACTIVIDAD',false)
		rep.addText(5,942,'OBSERVACIONES',false); 
		rep.addText(3,222, 'ASPECTOS A EVALUAR                                      EX    B     R    M    NP  EX    B     R    M    NP  EX    B     R    M    NP  EX    B     R    M    NP  EX    B     R    M    NP  EX    B     R    M    NP',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),11,'helvetica','bold');
		rep.addText(5,1040,'EX: Excelente (18-20),   B: Bueno (15-17),   R: Regular (11-14),   M: Mejorable (10),   NP: No Presentó',false);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		setTimeout(rep.previewHTML,100);
		rep.render();		
	}, 	
	
	reporte12 : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
		rep.setPageSize(1060);
		rep.setWidthReport(1700);
		rep.setPositionIcon(1350,4);
       	///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1450,34,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),13,'helvetica','bold');
		rep.addText(10, 24, ''+pcbRepoHojaEvaAlumnoOrganizacion.getOption(),false);
		rep.addText(90, 24, 'Año o Grado: '+pcbRepoHojaEvaAlumnoPosicion.getOption(),false);
		rep.addText(270,24, 'Sección: '+pcbRepoHojaEvaAlumnoSeccion.getOption(),false);
		rep.addText(380,24, 'Lapso:_____',false);
		rep.addText(700, 24, 'INSTRUMENTO PARA INFORME FINAL',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),13,'helvetica','bold');
		rep.addText(5,70,'COMPETENCIAS',false); 
		rep.addText(870,70,'ESTUDIANTE',false); 
        rep.addSimpleTable(1,40.0,rep.getRGBAObj(0,0,0,1),380.0,1,159.0,false);//
		rep.addSimpleTable(1,40.0,rep.getRGBAObj(0,0,0,1),1447.8,1,40.5,false);//
		rep.addAbsTable(380, 80, [178,178,178,178,178,178], 1, 119.0, false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','bold');
        rep.addText(3,218, '                                   RASGOS                                      A       B        C       D        A       B        C       D       A       B        C       D        A       B        C       D        A       B        C       D        A       B        C       D           ',false);
		rep.addText(3,239, '1.-Presentación.',false);              
		rep.addText(3,330, '2.-Planteamiento del Problema.',false);
		rep.addText(3,422, '3.-Marco Teórico y Metodología.',false);
		rep.addText(3,516, '4.-Análisis e Interpretación de los Resultados.',false);              
		rep.addText(3,609, '5.-Conclusiones.',false);
		rep.addText(3,702, '6.-Recomendaciones.',false);
		rep.addText(3,796, '7.-Referencias Biográficas.',false);              
		rep.addText(3,888, '8.-Anexos.',false);
		rep.addText(3,982, '9.-Puntualidad en la Entrega.',false);
		rep.addAbsTable(1, 200, [380.0], 1, 23.0, false);
		rep.addAbsTable(1, 200, [380.0], 1, 115.0, false);
		rep.addAbsTable(380, 200, [1068.0], 5, 23.0, false);//
		rep.addAbsTable(380, 316, [1068.0], 4, 23.0, false);//
		rep.addAbsTable(380, 408, [1068.0], 4, 23.0, false);//
		rep.addAbsTable(380, 501, [1068.0], 4, 23.0, false);//
		rep.addAbsTable(380, 595, [1068.0], 4, 23.0, false);//
		rep.addAbsTable(380, 687, [1068.0], 4, 23.0, false);//
		rep.addAbsTable(380, 780, [1068.0], 4, 23.0, false);//
		rep.addAbsTable(380, 873, [1068.0], 4, 23.0, false);//
		rep.addAbsTable(380, 967, [1068.0], 4, 23.0, false);//
		rep.addAbsTable(1, 315, [380.0], 8, 93.0, false);
		rep.addAbsTable(380, 200, [44.5,44.5,44.5,44.5], 1, 858.0, false);
		rep.addAbsTable(558, 200, [44.5,44.5,44.5,44.5], 1, 858.0, false);
		rep.addAbsTable(736, 200, [44.5,44.5,44.5,44.5], 1, 858.0, false);
		rep.addAbsTable(914, 200, [44.5,44.5,44.5,44.5], 1, 858.0, false);
		rep.addAbsTable(1092, 200, [44.5,44.5,44.5,44.5], 1, 858.0, false);
		rep.addAbsTable(1270, 200, [44.5,44.5,44.5,44.5], 1, 858.0, false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),11,'helvetica','bold');
		//////////////////////////////////////////PIE DE PAGINA////////////////////////////////////////////////////////////////////////////
        //rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        //rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		setTimeout(rep.previewHTML,100);
		rep.render();		
	}, 	
	
	reporte13 : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
		rep.setPageSize(1150);
		rep.setWidthReport(845);
        rep.setPositionIcon(800,4);
       	///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'courier','bold');
        rep.addText(235,23,''+pcbRepoHojaEvaAlumnoSuborganizacion.getOption(),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'courier','bold');
        rep.addSimpleTable(1,40.0,rep.getRGBAObj(0,0,0,1),319.0,1,70.0,false);//linea E
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','bold','black');
		rep.addText(15,68, 'Unidad Educativa',false);
		rep.addText(15, 90, ''+pcbRepoHojaEvaAlumnoOrganizacion.getOption(),false);
		rep.addSimpleTable(320,40.0,rep.getRGBAObj(0,0,0,1),390.0,1,30.0,false);//linea E
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','bold','black');
		rep.addText(420,66, 'EVALUACIONES PARCIALES',false);
		rep.addSimpleTable(1,110.0,rep.getRGBAObj(0,0,0,1),319.0,1,90.0,false);//linea E
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','bold','black');
		rep.addText(15, 125, 'Periodo Escolar: '+pcbRepoHojaEvaAlumnoPeriodo.getOption(),false);
		rep.addText(15, 140, 'Año o Grado:       '+pcbRepoHojaEvaAlumnoPosicion.getOption(),false);
		rep.addText(15,155, 'Sección:               '+pcbRepoHojaEvaAlumnoSeccion.getOption(),false);
		rep.addText(15,170, 'Materia:'+pcbRepoHojaEvaAlumnoMateria.getOption(),false);
		rep.addText(329,215, '1er.    2do.    01       02      03       04       05       06       07       08       09       10       11       12       13       14',false);
		rep.addText(329,215, '1er.    2do.    01       02      03       04       05       06       07       08       09       10       11       12       13       14',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','bold','black');
		rep.addText(15,195, 'Momento: ______',false); 
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),6,'helvetica','bold','black');
		rep.addText(724,51, 'C',false); rep.addText(724,58,'A',false); rep.addText(724,68, 'L' ,false); rep.addText(726,78,'I',false);
		rep.addText(724,88, 'F.',false); rep.addText(724,98,'',false); rep.addText(724,112, 'P' ,false); rep.addText(724,122, 'R',false); 
		rep.addText(724,130,'O',false); rep.addText(724,138, 'B' ,false); rep.addText(724,146,'A',false); rep.addText(724,154, 'B',false); 
		rep.addText(724,162,'L',false); rep.addText(724,170, 'E' ,false);
		rep.addText(756,53, 'M',false); rep.addText(756,61,'O',false); rep.addText(756,69, 'D' ,false); rep.addText(758,77,'I',false);
		rep.addText(756,85, 'F',false); rep.addText(758,93,'I',false); rep.addText(756,104, 'C.' ,false);
		rep.addText(756,119, 'C',false); rep.addText(756,127,'O',false); rep.addText(756,135, 'N ' ,false); rep.addText(756,143,'S',false);
		rep.addText(756,151, 'E',false); rep.addText(756,159,'J',false); rep.addText(756,167, 'O' ,false); 
		rep.addText(788,53, 'D',false); rep.addText(788,61,'E',false); rep.addText(788,69, 'F' ,false); rep.addText(790,77,'I',false);
		rep.addText(788,85, 'N',false); rep.addText(790,93,'I',false); rep.addText(788,103, 'T' ,false); rep.addText(790,111,'I',false);
		rep.addText(788,119, 'V',false); rep.addText(788,127,'A',false); 
		rep.addText(822,53, 'T',false); rep.addText(822,61,'O',false); rep.addText(822,69, 'T' ,false); rep.addText(822,77,'A',false);
		rep.addText(822,85, 'L',false);	rep.addText(824,100, 'I' ,false); rep.addText(822,108,'N',false); rep.addText(822,116, 'A',false);
		rep.addText(822,124,'S',false); rep.addText(824,132, 'I' ,false); rep.addText(822,140,'S',false); rep.addText(824,148, 'I.' ,false); 
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','bold','black');
		rep.addText(330,100, 'M' ,false); rep.addText(330,115, 'O',false); rep.addText(330,130,'M',false); rep.addText(330,145, 'E' ,false); rep.addText(330,160,'N',false); rep.addText(330,175, 'T' ,false); rep.addText(330,190,'0',false);
		rep.addText(363,100, 'M' ,false); rep.addText(363,115, 'O',false); rep.addText(363,130,'M',false); rep.addText(363,145, 'E' ,false); rep.addText(363,160,'N',false); rep.addText(363,175, 'T' ,false); rep.addText(363,190,'0',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'courier','bold','black');
		rep.addAbsTable(320, 70, [32,32,32,32,32], 1, 1070.0, false);
		rep.addAbsTable(480, 70, [33,33,33,32,33,33,33], 1, 1070.0, false);
		rep.addAbsTable(710, 40, [33,33,33,33], 1, 1100.0, false);
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 10, 'rgba(0,0,0,0.9)', 'rgba(0,0,0,0.9)', 2,'bold');
		rep.setTableCellProperties(2, 'helvetica', 8);
		rep.addTable('TablaRepoProbador',['N°','Apellido','Nombre','1M','2M'],189,201);
        rep.setTotalRowTable(46);
        rep.setHeightRow(20);
        rep.setSizeColumnArray([28,148,149,32,32]);
        rep.setAlignData(['right','left','left','center','center']);
        rep.addJsonData('TablaRepoProbador','getRepoListAlumnoCurso',[0,2,3,5,6]);
		rep.addSimpleTable(320,202.0,rep.getRGBAObj(0,0,0,1),522.5,47,20,false);//linea E////////
		//rep.previewHTML();
		setTimeout(rep.previewHTML,100);
		rep.render();		
	},	
		
	reporte44 : function(){
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
		rep.setPageSize(1180);
		//rep.setWidthReport(820);
	    rep.setPositionIcon(756,4);
	    //////////////////////////////////////TITULO INFORMATIVO DEL REPORTE///////////////////////////////////////////////////////////////////////////////
	    rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
	    rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'courier','bold');
	    rep.addText(315,21,'RESUMEN EVALUATIVO',false);
	    rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'courier','bold');
	    rep.addBar(0,38,1128,78,rep.getRGBAObj(187,196,238,0.4),false);
		rep.addText(40, 54, 'LAPSO:    ',false);
		rep.addText(350, 54, 'POSICIÓN:  '+pcbRepoHojaEvaAlumnoPeriodo.getOption(),false);
		rep.addText(600, 54, 'SECCION: '+pcbRepoHojaEvaAlumnoSeccion.getOption(),false);
		rep.addText(40, 70, 'MATERIA: '+pcbRepoHojaEvaAlumnoMateria.getOption(),false);
		rep.addText(350, 70, 'PROFESOR:         ',false);
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),11,'helvetica','NORMAL');
		rep.addText(14,106,'Nº',false);
		rep.addText(64,106,'FECHA',false);
		rep.addText(239,106,'CONTENIDO',false);
		rep.addText(503,106,'FORMA',false);
		rep.addText(648,106,'%',false); 
		rep.addSimpleTable(1,85.0,rep.getRGBAObj(0,0,0,1),38.0,1,28.0,false);//linea E
		rep.addSimpleTable(39,85.0,rep.getRGBAObj(0,0,0,1),100.0,1,28.0,false);//linea E 
		rep.addSimpleTable(139,85.0,rep.getRGBAObj(0,0,0,1),290.0,1,28.0,false);//linea E 
		rep.addSimpleTable(429,85.0,rep.getRGBAObj(0,0,0,1),200.0,1,28.0,false);//linea E
		rep.addSimpleTable(629,85.0,rep.getRGBAObj(0,0,0,1),50.0,1,28.0,false);//linea E
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),8,'helvetica','NORMAL');
		rep.addText(693,106,'Nº LISTA',false);
		rep.addText(746,106,'T. INAS.',false);
		rep.addSimpleTable(690,85.0,rep.getRGBAObj(0,0,0,1),50.0,1,28.0,false);//linea E
		rep.addSimpleTable(740,85.0,rep.getRGBAObj(0,0,0,1),50.0,1,28.0,false);//linea E
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.addSimpleTable(1,113.0,rep.getRGBAObj(0,0,0,1),38.0,17,28.0,false);//linea E
		rep.addSimpleTable(39,113.0,rep.getRGBAObj(0,0,0,1),100.0,17,28.0,false);//linea E
		rep.addSimpleTable(139,113.0,rep.getRGBAObj(0,0,0,1),290.0,17,28.0,false);//linea E
		rep.addSimpleTable(429,113.0,rep.getRGBAObj(0,0,0,1),200.0,17,28.0,false);//linea E
		rep.addSimpleTable(629,113.0,rep.getRGBAObj(0,0,0,1),50.0,17,28.0,false);//linea E
		rep.addSimpleTable(690,113.0,rep.getRGBAObj(0,0,0,1),50.0,45,19.45,false);//linea E
		rep.addSimpleTable(740,113.0,rep.getRGBAObj(0,0,0,1),50.0,45,19.45,false);//linea E
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),11,'helvetica','NORMAL');
		rep.addText(14,621,'Nº',false);
		rep.addText(50,621,'T. APROBADOS',false);
		rep.addText(184,621,'T. APLAZADOS',false);
		rep.addText(429,621,'OBSERVACIONES',false);
		rep.addSimpleTable(1,600.0,rep.getRGBAObj(0,0,0,1),38.0,1,28.0,false);//linea E
		rep.addSimpleTable(39,600.0,rep.getRGBAObj(0,0,0,1),130.0,1,28.0,false);//linea E 
		rep.addSimpleTable(169,600.0,rep.getRGBAObj(0,0,0,1),130.0,1,28.0,false);//linea E 
		rep.addSimpleTable(299,600.0, rep.getRGBAObj(0,0,0,1),380.0,1,28.0,false);//linea E 
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
		rep.addSimpleTable(1,628.0,rep.getRGBAObj(0,0,0,1),38.0,18,20.0,false);//linea E
		rep.addSimpleTable(39,628.0,rep.getRGBAObj(0,0,0,1),130.0,18,20.0,false);//linea E 
		rep.addSimpleTable(169,628.0,rep.getRGBAObj(0,0,0,1),130.0,18,20.0,false);//linea E 
		rep.addSimpleTable(299,628.0,rep.getRGBAObj(0,0,0,1),380.0,18,20.0,false);//linea E 
		rep.addText(13,985,'%',false);
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),9,'helvetica','NORMAL');
		rep.addText(40,1065,'FECHA:',false);
		rep.addText(250,1065,'FIRMA DEL DOCENTE',false);
		rep.addText(540,1065,'C.I.:',false);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		rep.previewHTML();
		},
	
	reporte55 : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
		rep.setPageSize(1150);
		rep.setWidthReport(845);
        rep.setPositionIcon(756,4);
        //rep.setNoRepeatHead();
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'courier','bold');
        rep.addText(270,21,'RESUMEN DE LAPSO',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),11,'helvetica','bold','black');
        rep.addText(35,65, 'CONTROL DE ASISTENCIA',false);       
		rep.addAbsTable(1, 70, [16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17], 1, 130, false);
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 8, 'rgba(0,0,0,0.9)', 'rgba(0,0,0,0.9)', 2);
		rep.setTableCellProperties(1, 'courier', 7);
		rep.addTable('TablaRepoHojaEvaAlumno',['Nº'],9,178);
        rep.setTotalRowTable(44);
        rep.setHeightRow(20); 
        rep.setSizeColumnArray([14]);
        rep.setAlignData(['right']);     
        rep.addJsonData('TablaRepoHojaEvaAlumno','getRepoListAlumnoCurso',[0,2,3,5,6,7,8,9,10,11,12,13,14,15]);		
		rep.addAbsTable(1, 198, [16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16], 1, 880, false);
        rep.addSimpleTable(1,199.0,rep.getRGBAObj(0,0,0,1),257.0,44,20.0,false);//linea E
        rep.addAbsTable(270, 70, [60,60,60,60], 1, 1009, false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'courier','bold');
        rep.addText(282,95,'FECHA',false);
        rep.addText(340,95,'CLASES',false);
        rep.addText(345,105,'DADAS',false);
        rep.addText(393,95,'NºFINALI',false);
        rep.addText(401,105,'DADES',false);
        rep.addText(456,95,'MATERIA',false);
        rep.addText(461,105,'VISTA',false);
        rep.addSimpleTable(270,70.0,rep.getRGBAObj(0,0,0,1),240.0,25,40.4,false);//linea E
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),11,'helvetica','bold','black');
        rep.addAbsTable(523, 70, [319],1,28,false);
        rep.addText(557,90,'RESUMEN DEL PLAN EVALUATIVO',false);
		rep.addAbsTable(523, 98, [30,88,55,30,116,],17,35,false);
        rep.addAbsTable(523, 710, [319],1,26,false);
        rep.addText(600,730,'RESUMEN DE LAPSO',false);
		rep.addAbsTable(523, 737, [279,40,],11,31,false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','bold','black');
		rep.addText(526,766,'TOTAL CLASES PROGRAMADAS',false);
		rep.addText(526,797,'TOTAL CLASES DADAS',false);
		rep.addText(526,828,'% DE CLASES DADAS',false);
		rep.addText(526,859,'TOTAL FINALIDADES PROGRAMADAS',false);
		rep.addText(526,890,'TOTAL FINALIDADES DADAS',false);
		rep.addText(526,921,'% DE FINALIDADES DADAS',false);
		rep.addText(526,952,'TOTAL ESTUDIANTES',false);
		rep.addText(526,982,'TOTAL ESTUDIANTES APLAZADOS',false);
		rep.addText(526,1013,'% DE ESTUDIANTES APLAZADOS',false);
		rep.addText(526,1044,'TOTAL ESTUDIANTES APROBADOS',false);
		rep.addText(526,1075,'% DE ESTUDIANTES APROBADOS',false);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		rep.previewHTML();
	},
	
	reporte66 : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
		rep.setPageSize(1150);
		rep.setWidthReport(845);
        rep.setPositionIcon(800,4);
       	///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),18,'arial','bold');
        rep.addText(370,28,'L A P S O',false);
        rep.addAbsTable(0, 38, [160,160,200,325], 1, 996, false);
		rep.addSimpleTable(0,74.0,rep.getRGBAObj(0,0,0,1),844.0,30,32.0,false);//linea E////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'arial','bold');
		rep.addText(53,70, 'FECHA',false); rep.addText(199,70,'N-CLASES',false); rep.addText(364,70, 'N-OBJETIVOS',false); rep.addText(623,70,'MATERIA VISTA',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'arial','bold');
		rep.addText(15,1090,'Nombre del Profesor: ________________________________________________  Firma del Profesor: _________________________',false);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		setTimeout(rep.previewHTML,600);
		rep.render();		
	},     
    
    reporte14 : function() {
			
            var j = json('getRepoListAlumnoCurso');
			//json para formato de evaluación de alumno de primaria (j3)
			var j3 = {
				fields : ['item','nu_cedula','de_apellido','de_nombre','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
				data : [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
			};						
			//DATA PARA J3		
			for(var i=0; i<j.data[0].length; i++){
			  j3.data[0][i] = j.data[0][i];//item
			  j3.data[1][i] = j.data[1][i];//ci
			  j3.data[2][i] = j.data[2][i];//apellido
			  j3.data[3][i] = j.data[3][i];//nombre              
			  j3.data[4][i] = '';//i
			  j3.data[5][i] = '';//p
			  j3.data[6][i] = '';//c
			  j3.data[7][i] = '';//i
			  j3.data[8][i] = '';//p
			  j3.data[9][i] = '';//c
			  j3.data[10][i] = '';//i
			  j3.data[11][i] = '';//p
			  j3.data[12][i] = '';//c
			  j3.data[13][i] = '';//i
			  j3.data[14][i] = '';//p
			  j3.data[15][i] = '';//c
			  j3.data[16][i] = '';//def			  
			}            
		    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
			rep = new Report('portrait');
			rep.setPDFFormat('custom','mm', [343, 210]);
	        rep.setPositionIcon(756,4);
	        //rep.setNoRepeatHead();
			///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
	        rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
	        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'courier','bold');
	        rep.addText(307,21,'CONTROL DE ASISTENCIA',false);
	         rep.addText(307,21,'CONTROL DE ASISTENCIA',false);
            rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),7,'helvetica','bold');
	        rep.addBar(0,38,1128,78,rep.getRGBAObj(187,196,238,0.4),false);
			rep.addText(20, 48, 'ORGANIZACION:        '+pcbRepoHojaEvaAlumnoOrganizacion.getOption(),false);
            rep.addText(20, 48, 'ORGANIZACION:        '+pcbRepoHojaEvaAlumnoOrganizacion.getOption(),false);
			rep.addText(20, 61, 'SUBORGANIZACION: '+pcbRepoHojaEvaAlumnoSuborganizacion.getOption(),false);
			rep.addText(21, 74, 'ESCUELA:                   '+pcbRepoHojaEvaAlumnoCarrera.getOption(),false);
            rep.addText(20, 61, 'SUBORGANIZACION: '+pcbRepoHojaEvaAlumnoSuborganizacion.getOption(),false);
			rep.addText(21, 74, 'ESCUELA:                   '+pcbRepoHojaEvaAlumnoCarrera.getOption(),false);
            rep.addText(21, 74, 'ESCUELA:                   '+pcbRepoHojaEvaAlumnoCarrera.getOption(),false);
			rep.addText(360, 48, 'PERIODO:  '+pcbRepoHojaEvaAlumnoPeriodo.getOption(),false);
            rep.addText(360, 48, 'PERIODO:  '+pcbRepoHojaEvaAlumnoPeriodo.getOption(),false);
			rep.addText(360, 61, 'POSICION: '+pcbRepoHojaEvaAlumnoPosicion.getOption(),false);
            rep.addText(360, 61, 'POSICION: '+pcbRepoHojaEvaAlumnoPosicion.getOption(),false);
			rep.addText(360, 74, 'MATERIA:    '+pcbRepoHojaEvaAlumnoMateria.getOption(),false);
            rep.addText(360, 74, 'MATERIA:    '+pcbRepoHojaEvaAlumnoMateria.getOption(),false);
			rep.addText(620, 48, 'SECCION: '+pcbRepoHojaEvaAlumnoSeccion.getOption(),false);
            rep.addText(620, 48, 'SECCION: '+pcbRepoHojaEvaAlumnoSeccion.getOption(),false);
            rep.addText(621, 61, '______________ MOMENTO ',false);
            rep.addText(621, 61, '______________ MOMENTO ',false);			
			//************************ TABLE ***************************
			rep.setTableRowProperties(0, 180, 180, 180, 'helvetica', 0, 0, 0, 9, 'rgba(0,0,0,1)', 'rgba(0,0,0,1)',2);
			rep.setTableCellProperties(1, 'helvetica', 7);
			rep.addTable('TablaRepoHojaEvaAlumno2',['Nº','C.i.','Apellido','Nombre','','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22'],390,87);
	        rep.setTotalRowTable(38);
	        rep.setHeightRow(14); 
	        rep.setSizeColumnArray([28,60,132,132,2,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20]);
	        rep.setAlignData(['center','center','left','left','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center']);     
	        rep.addJsonToTable('TablaRepoHojaEvaAlumno2', j3, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]);
			rep.addJsonToTable('TablaRepoHojaEvaAlumno2', j3, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]);            
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            rep.setFontProperties(rep.getRGBAObj(0,0,0,1),12,'helvetica','BOLD');
            rep.addText(5,648,' OBSERVACIONES:          /        FECHA ==>> ',false);
            rep.addText(5,648,' OBSERVACIONES:          /        FECHA ==>> ',false);           
            rep.addSimpleTable(0.0,620.0,rep.getRGBAObj(0,0,0,1),344,1,40,17.8,false);//linea                         
            rep.addSimpleTable(0.0,660.0,rep.getRGBAObj(0,0,0,1),344,1,40,17.8,false);//linea             
            rep.addSimpleTable(0.0,700.0,rep.getRGBAObj(0,0,0,1),344,1,40,17.8,false);//linea             
            rep.addSimpleTable(0.0,740.0,rep.getRGBAObj(0,0,0,1),344,1,40,17.8,false);//linea             
            rep.addSimpleTable(0.0,780.0,rep.getRGBAObj(0,0,0,1),344,1,40,17.8,false);//linea 
            rep.addSimpleTable(0.0,820.0,rep.getRGBAObj(0,0,0,1),344,1,40,17.8,false);//linea             
            rep.addSimpleTable(0.0,860.0,rep.getRGBAObj(0,0,0,1),344,1,40,17.8,false);//linea 
            rep.addSimpleTable(0.0,900.0,rep.getRGBAObj(0,0,0,1),344,1,40,17.8,false);//linea             
            rep.addSimpleTable(0.0,940.0,rep.getRGBAObj(0,0,0,1),344,1,40,17.8,false);//linea 
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            rep.addSimpleTable(345.5,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea 
            rep.addSimpleTable(366.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea 
            rep.addSimpleTable(386.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea             
            rep.addSimpleTable(406.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea
            rep.addSimpleTable(426.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea
            rep.addSimpleTable(446.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea
            rep.addSimpleTable(466.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea
            rep.addSimpleTable(486.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea
            rep.addSimpleTable(506.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea
            rep.addSimpleTable(526.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea             
            rep.addSimpleTable(546.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea 
            rep.addSimpleTable(566.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea 
            rep.addSimpleTable(586.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea 
            rep.addSimpleTable(606.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea 
            rep.addSimpleTable(626.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea 
            rep.addSimpleTable(646.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea 
            rep.addSimpleTable(666.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea 
            rep.addSimpleTable(686.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea 
            rep.addSimpleTable(706.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea             
            rep.addSimpleTable(726.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea 
            rep.addSimpleTable(746.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea 
            rep.addSimpleTable(766.0,620.0,rep.getRGBAObj(0,0,0,1),21,1,360,17.8,false);//linea      
            //////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
	        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
	        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
			//********************************************* FIN GENERACION DEL REPORTE ***********************************************			
			rep.render();
            Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printHTML,100()","rep.previewHTML()","rep.printHTML,100()"]);
            Reporte.create();
            dialogsReporte.showModal();           
		},    
	
	coreUpdate: function(){
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (pcbRepoHojaEvaAlumnoPeriodo.valid(dialogsRepoHojaEvaAlumno))
			if (pcbRepoHojaEvaAlumnoPosicion.valid(dialogsRepoHojaEvaAlumno))
				if (pcbRepoHojaEvaAlumnoSeccion.valid(dialogsRepoHojaEvaAlumno))
					if (pcbRepoHojaEvaAlumnoMateria.valid(dialogsRepoHojaEvaAlumno))
						if (pcbRepoHojaEvaAlumnoTipFormato.valid(dialogsRepoHojaEvaAlumno)) {
							rlx.add('reg', pcbRepoHojaEvaAlumnoCarrera.setModeReturnGetText(2));
							rlx.add('reg', pcbRepoHojaEvaAlumnoPosicion);
							rlx.add('reg', pcbRepoHojaEvaAlumnoPeriodo);
							rlx.add('reg', pcbRepoHojaEvaAlumnoSeccion);
							rlx.add('reg', pcbRepoHojaEvaAlumnoMateria);							
							if (pcbRepoHojaEvaAlumnoTipFormato.getValue()=="Inicial-Basica-0")
								Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte0()', rlx);
							else if (pcbRepoHojaEvaAlumnoTipFormato.getValue()=="Inicial-Basica-1")
								Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte1()', rlx);						
							else if (pcbRepoHojaEvaAlumnoTipFormato.getValue()=="Inicial-Basica-2")
								Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte2()', rlx);						
							else if (pcbRepoHojaEvaAlumnoTipFormato.getValue()=="Media-Superior-3")
								Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte3()', rlx);
							else if (pcbRepoHojaEvaAlumnoTipFormato.getValue()=="Media-Superior-4")
								Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte4()', rlx);
							else if (pcbRepoHojaEvaAlumnoTipFormato.getValue()=="Media-Superior-5")
								Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte5()', rlx);
							else if (pcbRepoHojaEvaAlumnoTipFormato.getValue()=="Media-Superior-6")
								Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte6()', rlx);                               
							else if (pcbRepoHojaEvaAlumnoTipFormato.getText()=="Reporte-7")
								Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte7()', rlx);
							else if (pcbRepoHojaEvaAlumnoTipFormato.getText()=="Reporte-8")
								Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte8()', rlx);
							else if (pcbRepoHojaEvaAlumnoTipFormato.getText()=="Reporte-9")
								Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte9()', rlx);
							else if (pcbRepoHojaEvaAlumnoTipFormato.getText()=="Reporte-10")
								Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte10()', rlx);
							else if (pcbRepoHojaEvaAlumnoTipFormato.getText()=="Reporte-11")
								Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte11()', rlx);
							else if (pcbRepoHojaEvaAlumnoTipFormato.getText()=="Reporte-12")
								Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte12()', rlx);							
                            else if (pcbRepoHojaEvaAlumnoTipFormato.getText()=="Reporte-13")                     
								Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte13()', rlx);                           
                            else if (pcbRepoHojaEvaAlumnoTipFormato.getText()=="Reporte-14")                      
								Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte14()', rlx);                                
							else if (pcbRepoHojaEvaAlumnoTipFormato.getText()=="MediaSupRev44")
								Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte44()', rlx);
							else if (pcbRepoHojaEvaAlumnoTipFormato.getText()=="MediaSupRev-55")
								Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte55()', rlx);
							else if (pcbRepoHojaEvaAlumnoTipFormato.getText()=="MediaSupRev-66")
								Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte66()', rlx);                                    
						}
    }
};

