var dialogsRepoLisSegEscolar = new Object();
var pcbRepoLisSegEscOrg = new Object();
var pcbRepoLisSegEscSuborg = new Object();
var pcbRepoLisSegEscCarrera = new Object();
var pcbRepoLisSegEscPosicion = new Object();
var pcbRepoLisSegEscSeccion = new Object();
var pcbRepoLisSegEscPeriodo = new Object();
var pcbRepoLisSegEscEleccion = new Object();
var imgButtonsRepoLisSegEscReporte = new Object();
var imgButtonsRepoLisSegEscSalir = new Object();
var mw_RepoLisSegEscolar = new Object();//minWindow

var RepoLisSegEscolar = {
    windowName: 'RepoLisSegEscolar',
    isCreate: false,
    
    show : function(){  
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
			this.limpiar('lmp');			
		dialogsRepoLisSegEscolar.show();
	},
	
	hide : function(){
		dialogsRepoLisSegEscolar.hide();
	},
	
    createMWs: function(){
        mwRepoLisSegEscolar = desktop.addMinWindow('Data Integral', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoLisSegEscolar.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRepoLisSegEscolar_Init : function(){
        dialogsRepoLisSegEscolar.setMinimizeXY(0,0);
        dialogsRepoLisSegEscolar.setCenterScreen();
        dialogsRepoLisSegEscolar.addSpace(0,0,20);
        dialogsRepoLisSegEscolar.addLn(1,1,1);
		dialogsRepoLisSegEscolar.setHeightCell(1,1,10);
        dialogsRepoLisSegEscolar.addObjToDialog(pcbRepoLisSegEscOrg,2,1,24);
        dialogsRepoLisSegEscolar.addObjToDialog(pcbRepoLisSegEscSuborg,3,1,24);
        dialogsRepoLisSegEscolar.addObjToDialog(pcbRepoLisSegEscCarrera,4,1,24);
        dialogsRepoLisSegEscolar.addObjToDialog(pcbRepoLisSegEscPeriodo,5,1,24);
        dialogsRepoLisSegEscolar.addObjToDialog(pcbRepoLisSegEscPosicion,6,1,24);
        dialogsRepoLisSegEscolar.addObjToDialog(pcbRepoLisSegEscSeccion,7,1,24);
		dialogsRepoLisSegEscolar.addObjToDialog(pcbRepoLisSegEscEleccion,8,1,24);
        dialogsRepoLisSegEscolar.addLn(9,1,1);
		dialogsRepoLisSegEscolar.setHeightCell(9,1,13);
        dialogsRepoLisSegEscolar.addObjToDialog(imgButtonsRepoLisSegEscReporte,10,1);
    	imgButtonsRepoLisSegEscReporte.setDimension(90,22);
		dialogsRepoLisSegEscolar.addObjToDialog(imgButtonsRepoLisSegEscSalir,10,1);
    	imgButtonsRepoLisSegEscSalir.setDimension(90,22);
        dialogsRepoLisSegEscolar.adjAllMarginObj(10,1,30);
        dialogsRepoLisSegEscolar.leftMarginObj(10,1,0,124);  
    },
 
    create : function(){
    	dialogsRepoLisSegEscolar = dialogs.create('dialogsRepoLisSegEscolar',0,0,500,230,'DATA INTEGRAL DE INSCRITOS');
    	dialogsRepoLisSegEscolar.setAdjY(70);
    	pcbRepoLisSegEscOrg = powerComboBox.create('pcbRepoLisSegEscOrg','pcbRepoLisSegEscOrg','Organización (+):',1,128);
    	pcbRepoLisSegEscOrg.enableReadOnlyEditor();
    	pcbRepoLisSegEscOrg.addEmptyOption();
    	pcbRepoLisSegEscOrg.setValidEmpty();
		pcbRepoLisSegEscOrg.setWidthCombo(310);
    	pcbRepoLisSegEscSuborg = powerComboBox.create('pcbRepoLisSegEscSuborg','pcbRepoLisSegEscSuborg','Suborganización (^):',1,128);
    	pcbRepoLisSegEscSuborg.enableReadOnlyEditor();
    	pcbRepoLisSegEscSuborg.addEmptyOption();
    	pcbRepoLisSegEscSuborg.setValidEmpty();
		pcbRepoLisSegEscSuborg.setWidthCombo(310);
    	pcbRepoLisSegEscCarrera = powerComboBox.create('pcbRepoLisSegEscCarrera','pcbRepoLisSegEscCarrera','Carrera (^):',1,128);
    	pcbRepoLisSegEscCarrera.enableReadOnlyEditor();
    	pcbRepoLisSegEscCarrera.addEmptyOption();
    	pcbRepoLisSegEscCarrera.setValidEmpty();
		pcbRepoLisSegEscCarrera.setFieldFind(true);
		pcbRepoLisSegEscCarrera.setWidthCombo(310);
    	pcbRepoLisSegEscPeriodo = powerComboBox.create('pcbRepoLisSegEscPeriodo','pcbRepoLisSegEscPeriodo','Periodo (*):',1,128);
    	pcbRepoLisSegEscPeriodo.enableReadOnlyEditor();
    	pcbRepoLisSegEscPeriodo.addEmptyOption();
    	pcbRepoLisSegEscPeriodo.setValidEmpty();
		pcbRepoLisSegEscPeriodo.setWidthCombo(310);
    	pcbRepoLisSegEscPosicion = powerComboBox.create('pcbRepoLisSegEscPosicion','pcbRepoLisSegEscPosicion','Posición (*):',1,128);
    	pcbRepoLisSegEscPosicion.enableReadOnlyEditor();
    	pcbRepoLisSegEscPosicion.addEmptyOption();
    	pcbRepoLisSegEscPosicion.setValidEmpty();
		pcbRepoLisSegEscPosicion.setFieldFind(true);
		pcbRepoLisSegEscPosicion.setWidthCombo(310);
    	pcbRepoLisSegEscSeccion = powerComboBox.create('pcbRepoLisSegEscSeccion','pcbRepoLisSegEscSeccion','Sección (*):',1,128);
    	pcbRepoLisSegEscSeccion.enableReadOnlyEditor();
    	pcbRepoLisSegEscSeccion.addEmptyOption();
    	pcbRepoLisSegEscSeccion.setValidEmpty();
    	pcbRepoLisSegEscSeccion.setDataType("string");
    	pcbRepoLisSegEscSeccion.setFieldFind(true);
		pcbRepoLisSegEscSeccion.setWidthCombo(310);
		pcbRepoLisSegEscEleccion = powerComboBox.create('pcbRepoLisSegEscEleccion','pcbRepoLisSegEscEleccion','Tipo de Reporte (*):',1,128);
    	pcbRepoLisSegEscEleccion.enableReadOnlyEditor();
    	pcbRepoLisSegEscEleccion.addEmptyOption();
    	pcbRepoLisSegEscEleccion.setValidEmpty();
    	pcbRepoLisSegEscEleccion.setDataType("string");
    	pcbRepoLisSegEscEleccion.setFieldFind(true);
		pcbRepoLisSegEscEleccion.setWidthCombo(310);
		pcbRepoLisSegEscEleccion.addOptionAndSimpleValue(null,'Listado Por Familia (HTML)','ListFamilia1');
		pcbRepoLisSegEscEleccion.addOptionAndSimpleValue(null,'Listado Por Familia (EXCEL)','ListFamilia2');
        pcbRepoLisSegEscEleccion.addOptionAndSimpleValue(null,'Listado Seguro Escolar (EXCEL)','ListSeguro3');
		imgButtonsRepoLisSegEscReporte = imgButtons.create('imgButtonsRepoLisSegEscReporte','Reporte','print.png');
		imgButtonsRepoLisSegEscSalir = imgButtons.create('imgButtonsRepoLisSegEscSalir','Salir','salir.png');
  	},

  	init : function(){
  		this.create();
  		this.setEvents();
  		this.dialogsRepoLisSegEscolar_Init();
  		this.createMWs();
  	},
  
  	limpiar : function(tipo) {
  		pcbRepoLisSegEscOrg.setSelectedIndex(0);
  		pcbRepoLisSegEscSuborg.clear();
  		pcbRepoLisSegEscCarrera.clear();
  		pcbRepoLisSegEscPeriodo.clear();
  		dialogsRepoLisSegEscolar.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoLisSegEscolar, pcbRepoLisSegEscOrg, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoLisSegEscolar, pcbRepoLisSegEscOrg, pcbRepoLisSegEscSuborg, pcbRepoLisSegEscCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function(){
    	imgButtonsRepoLisSegEscReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsRepoLisSegEscSalir.onClick('dialogsRepoLisSegEscolar.close()');
		pcbRepoLisSegEscOrg.onChange(this.windowName + ".resetElements('org')");
		pcbRepoLisSegEscSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbRepoLisSegEscCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbRepoLisSegEscPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbRepoLisSegEscPosicion.onChange(this.windowName + ".resetElements('pos')");
    },
    
    resetElements : function(element) {
		if (element == 'org') {
			pcbRepoLisSegEscSuborg.clear();
	  		pcbRepoLisSegEscCarrera.clear();
	  		pcbRepoLisSegEscPeriodo.clear();
			pcbRepoLisSegEscPosicion.clear();
	    	if (pcbRepoLisSegEscOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoLisSegEscolar, pcbRepoLisSegEscSuborg, 1, 2, pcbRepoLisSegEscOrg);
		}
		else if (element == 'suborg') {
	  		pcbRepoLisSegEscCarrera.clear();
	  		pcbRepoLisSegEscPeriodo.clear();
			pcbRepoLisSegEscPosicion.clear();
	    	if (pcbRepoLisSegEscSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoLisSegEscolar, pcbRepoLisSegEscCarrera, -1, 3, pcbRepoLisSegEscSuborg);
		}
		else if (element == 'carr') {
	  		pcbRepoLisSegEscPeriodo.clear();
			pcbRepoLisSegEscPosicion.clear();
	    	if (pcbRepoLisSegEscCarrera.getOption() != "")
	    		Tool.getPowerComboDataFnc(this.windowName + '.loadAutoPeriodo()', 'MantObject', 'getPeriodoXNivelAcad', dialogsRepoLisSegEscolar, pcbRepoLisSegEscPeriodo, 0, 1, pcbRepoLisSegEscCarrera.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
          Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsRepoLisSegEscolar, pcbRepoLisSegEscPosicion, 0, 1, pcbRepoLisSegEscCarrera.setModeReturnGetText(2));        		
    	} 
    	else if (element == 'pos') {
          Tool.getPowerComboData('MantObject', 'getMantProyAulaSeccion', dialogsRepoLisSegEscolar, pcbRepoLisSegEscSeccion, 0, 1, pcbRepoLisSegEscCarrera, pcbRepoLisSegEscPeriodo, pcbRepoLisSegEscPosicion);        		
    	}  
	},
	
	loadAutoPeriodo : function() {
		pcbRepoLisSegEscPeriodo.setSelectedIndex(1);
		this.resetElements('per');
	},	
	
	reporteHtml : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
    	rep.setPositionIcon(756,86);
    	rep.setHeadImage(imgEduca.banner,false);
    	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','bold');
        rep.addBar(0,0,1128,78,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 20, 'ORGANIZACION:        '+pcbRepoLisSegEscOrg.getOption(),false);
		rep.addText(20, 38, 'SUBORGANIZACION: '+pcbRepoLisSegEscSuborg.getOption(),false);
		rep.addText(20, 56, 'CARRERA:                  '+pcbRepoLisSegEscCarrera.getOption(),false);
		rep.addText(530, 20, 'POSICION:  '+pcbRepoLisSegEscPosicion.getOption(),false);
		rep.addText(530, 38, 'SECCIÓN:    '+pcbRepoLisSegEscSeccion.getOption(),false);
		rep.addText(530, 56, 'PERIODO:   '+pcbRepoLisSegEscPeriodo.getOption(),false);
		rep.addBar(0,83,1128,116,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),13,'helvetica','bold');
		rep.addText(300, 108, 'LISTADO POR FAMILIA',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'bold helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'bold helvetica', 7);
		rep.addTable('TablaRepoLisSegEscolar',['Cédula','Apellido Alumno','Nombre Alumno','Apellido Representante','Nombre Representante','Teléfono'],400  ,120);
		rep.setTotalRowTable(43);
		rep.setHeightRow(20);
        rep.setSizeColumnArray([70,162,162,162,162,80]);
        rep.setAlignData(['center','left','left','left','left','center']); 
        rep.addJsonData('TablaRepoLisSegEscolar','getListadoAlumno',[3,5,4,2,1,11]);		
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),12,'helvetica','bold');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		rep.previewHTML();
		//rep.renderToExcel();
	},
	
	reporteExcel : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
    	rep.setPositionIcon(756,85);
    	rep.setHeadImage(imgEduca.banner,false);
    	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','bold');
        rep.addBar(0,0,1128,78,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 20, 'ORGANIZACION:        '+pcbRepoLisSegEscOrg.getOption(),false);
		rep.addText(20, 38, 'SUBORGANIZACION: '+pcbRepoLisSegEscSuborg.getOption(),false);
		rep.addText(20, 56, 'CARRERA:                  '+pcbRepoLisSegEscCarrera.getOption(),false);
		rep.addText(530, 20, 'POSICION:  '+pcbRepoLisSegEscPosicion.getOption(),false);
		rep.addText(530, 38, 'SECCIÓN:    '+pcbRepoLisSegEscSeccion.getOption(),false);
		rep.addText(530, 56, 'PERIODO:   '+pcbRepoLisSegEscPeriodo.getOption(),false);
		rep.addBar(0,83,1128,116,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),13,'helvetica','bold');
		rep.addText(300, 108, 'LISTADO POR FAMILIA',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'bold helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'bold helvetica', 7);
		rep.addTable('TablaRepoLisSegEscolar',['Cédula','Apellido Alumno','Nombre Alumno','Apellido Representante','Nombre Representante','Teléfono'],400  ,120);
		rep.setTotalRowTable(43);
		rep.setHeightRow(20);
        rep.setSizeColumnArray([70,162,162,162,162,80]);
        rep.setAlignData(['center','left','left','left','left','center']); 
        rep.addJsonData('TablaRepoLisSegEscolar','getListadoAlumno',[3,5,4,2,1,11]);
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),12,'helvetica','bold');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		//rep.previewHTML();
		rep.renderToExcel();
	},
		
	reporteSegEsc : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
    	rep.setPositionIcon(1090,44);
    	rep.setHeadImage(imgEduca.banner,false);
    	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','bold');
        rep.addBar(0,0,1128,78,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 20, 'ORGANIZACION:        '+pcbRepoLisSegEscOrg.getOption(),false);
		rep.addText(20, 38, 'SUBORGANIZACION: '+pcbRepoLisSegEscSuborg.getOption(),false);
		rep.addText(20, 56, 'CARRERA:                  '+pcbRepoLisSegEscCarrera.getOption(),false);
		rep.addText(530, 20, 'POSICION:  '+pcbRepoLisSegEscPosicion.getOption(),false);
		rep.addText(530, 38, 'SECCIÓN:    '+pcbRepoLisSegEscSeccion.getOption(),false);
		rep.addText(530, 56, 'PERIODO:   '+pcbRepoLisSegEscPeriodo.getOption(),false);
		rep.addBar(0,83,1128,116,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'helvetica','bold');
		rep.addText(430, 108, 'LISTADO DE ESTUDIANTES',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'bold helvetica',0, 0, 0, 8, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'bold helvetica', 3);
		rep.addTable('TablaRepoLisSegEscolar',['Cedula Rep.','Nombre','Apellido','Cedula Alum.','Nombres','Apellidos','Sexo','F. Nac.','Edad','Grado/Año','Seccion','Telf. Rep.','Codigo Plantel','Estado','Municipio','Email Alum.','Direccion','Carrera'],560  ,120);
		rep.setTotalRowTable(20);
		rep.setHeightRow(20);
        rep.setSizeColumnArray([80,80,80,90,80,80,40,60,80,50,60,80,80,80,70,500,200]);
        rep.setAlignData(['center','left','left','center','left','left','center','center','center','left','Center','left','center','left','left','left','left','left']); 
        rep.addJsonData('TablaRepoLisSegEscolar','getListadoAlumno',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),12,'helvetica','bold');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		//rep.previewHTML();
		rep.renderToExcel();
	},
		
	reporte : function(frmReport) {
        if(frmReport == 'ListFamilia1')
			this.reporteHtml();
        if(frmReport == 'ListFamilia2')
			this.reporteExcel(); 
		if(frmReport == 'ListSeguro3')
			this.reporteSegEsc();    		
    },
   
    coreUpdate: function() {
    	var rlx = xmlStructs.createRecordList("rlx");
        
		if (pcbRepoLisSegEscPeriodo.valid(dialogsRepoLisSegEscolar))
			if (pcbRepoLisSegEscCarrera.valid(dialogsRepoLisSegEscolar))
				if (pcbRepoLisSegEscEleccion.valid(dialogsRepoLisSegEscolar)) {
					rlx.add('reg', pcbRepoLisSegEscPeriodo);
					rlx.add('reg', pcbRepoLisSegEscCarrera);
					rlx.add('reg', pcbRepoLisSegEscPosicion);
					rlx.add('reg', pcbRepoLisSegEscPosicion);
					rlx.add('reg', pcbRepoLisSegEscSeccion);
					rlx.add('reg', pcbRepoLisSegEscSeccion);
					Tool.cnnSrv('ReportObject','getListadoAlumno', this.windowName + '.reporte("' + pcbRepoLisSegEscEleccion.getText() + '")', rlx);
				}
	}
}
