var dialogsRepoRelFamHerMayor = new Object();
var pcbRepoRelFamHerMayOrg = new Object();
var pcbRepoRelFamHerMaySuborg = new Object();
var pcbRepoRelFamHerMayCarrera = new Object();
var pcbRepoRelFamHerMayPosicion = new Object();
var pcbRepoRelFamHerMaySeccion = new Object();
var pcbRepoRelFamHerMayPeriodo = new Object();
var editsRepoRelFamHerMayCedula = new Object();
var editsRepoRelFamHerMayNombre = new Object();
var editsRepoRelFamHerMayApellido = new Object();
var imgBtnRepoRelFamHerMayLimpiar = new Object();
var imgBtnRepoRelFamHerMayBuscar = new Object();
var imgBtnRepoRelFamHerMaySalir = new Object();
var mwRepoRelFamHerMayor = new Object();//minWindow
var rl = new Object();

var RepoRelFamHerMayor = {
    windowName: 'RepoRelFamHerMayor',
    isCreate: false,
    
    show : function(){  
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
			this.limpiar();			
		dialogsRepoRelFamHerMayor.show();
	},
	
	hide : function(){
		dialogsRepoRelFamHerMayor.hide();
	},
	
    createMWs: function(){
        mwRepoRelFamHerMayor = desktop.addMinWindow('L. Repres.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoRelFamHerMayor.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRepoRelFamHerMayor_Init : function(){
        dialogsRepoRelFamHerMayor.setMinimizeXY(0,0);
        dialogsRepoRelFamHerMayor.setCenterScreen();
        dialogsRepoRelFamHerMayor.addSpace(0,0,20);
        dialogsRepoRelFamHerMayor.addLn(1,1,1);
		dialogsRepoRelFamHerMayor.setHeightCell(1,1,10);
        dialogsRepoRelFamHerMayor.addObjToDialog(pcbRepoRelFamHerMayOrg,2,1,24);
        dialogsRepoRelFamHerMayor.addObjToDialog(pcbRepoRelFamHerMaySuborg,2,1,24);
        dialogsRepoRelFamHerMayor.addObjToDialog(pcbRepoRelFamHerMayCarrera,2,1,24);
        dialogsRepoRelFamHerMayor.adjAllMarginObj(2,1,5);
        dialogsRepoRelFamHerMayor.addObjToDialog(pcbRepoRelFamHerMayPeriodo,3,1,24);
        dialogsRepoRelFamHerMayor.addObjToDialog(pcbRepoRelFamHerMayPosicion,3,1,24);
        dialogsRepoRelFamHerMayor.addObjToDialog(pcbRepoRelFamHerMaySeccion,3,1,24);
        dialogsRepoRelFamHerMayor.adjAllMarginObj(3,1,5);   
        dialogsRepoRelFamHerMayor.addLn(4,1,1);
		dialogsRepoRelFamHerMayor.setHeightCell(4,1,6);				
		var c1 = container.create("c1",'Estudiante / Representante:',1);
		c1.setDimension(770,41);
		c1.setPropertyMarco('groove',2,'#5e5e5e');		
		c1.setFontTitle('verdana', 11, '#7e7e7e');
		c1.addObject(editsRepoRelFamHerMayCedula, 35, 102);
		c1.addObject(editsRepoRelFamHerMayNombre, 278, 102);
		c1.addObject(editsRepoRelFamHerMayApellido, 556, 102);
		editsRepoRelFamHerMayCedula.setSizeEdit(149);		
		editsRepoRelFamHerMayNombre.setSizeEdit(149);		
		editsRepoRelFamHerMayApellido.setSizeEdit(149);	
		dialogsRepoRelFamHerMayor.addObjToDialog(c1, 5, 1)		
		dialogsRepoRelFamHerMayor.addLn(6,1,1);
		dialogsRepoRelFamHerMayor.setHeightCell(6,1,8);		
        dialogsRepoRelFamHerMayor.addObjToDialog(imgBtnRepoRelFamHerMayBuscar,7,1);
		dialogsRepoRelFamHerMayor.addObjToDialog(imgBtnRepoRelFamHerMayLimpiar,7,1);
        dialogsRepoRelFamHerMayor.addObjToDialog(imgBtnRepoRelFamHerMaySalir,7,1);
    	imgBtnRepoRelFamHerMayBuscar.setDimension(90,22);
    	imgBtnRepoRelFamHerMayLimpiar.setDimension(90,22);		
    	imgBtnRepoRelFamHerMaySalir.setDimension(90,22);
        dialogsRepoRelFamHerMayor.adjAllMarginObj(7,1,30);
        dialogsRepoRelFamHerMayor.leftMarginObj(7,1,0,219);  
    },

    create : function(){
    	dialogsRepoRelFamHerMayor = dialogs.create('dialogsRepoRelFamHerMayor',0,0,811,150,'RELACIÓN DE FAMILIAS HERMANO MAYOR');
    	dialogsRepoRelFamHerMayor.setAdjY(70);
    	pcbRepoRelFamHerMayOrg = powerComboBox.create('pcbRepoRelFamHerMayOrg','pcbRepoRelFamHerMayOrg','Organización (+):',1,103);
    	pcbRepoRelFamHerMayOrg.enableReadOnlyEditor();
    	pcbRepoRelFamHerMayOrg.addEmptyOption();
    	pcbRepoRelFamHerMayOrg.setValidEmpty();
    	pcbRepoRelFamHerMaySuborg = powerComboBox.create('pcbRepoRelFamHerMaySuborg','pcbRepoRelFamHerMaySuborg','Suborganización (^):',1,123);
    	pcbRepoRelFamHerMaySuborg.enableReadOnlyEditor();
    	pcbRepoRelFamHerMaySuborg.addEmptyOption();
    	pcbRepoRelFamHerMaySuborg.setValidEmpty();
    	pcbRepoRelFamHerMayCarrera = powerComboBox.create('pcbRepoRelFamHerMayCarrera','pcbRepoRelFamHerMayCarrera','Carrera (^):',1,87);
    	pcbRepoRelFamHerMayCarrera.enableReadOnlyEditor();
    	pcbRepoRelFamHerMayCarrera.addEmptyOption();
    	pcbRepoRelFamHerMayCarrera.setValidEmpty();
    	pcbRepoRelFamHerMayCarrera.setFieldFind(true);
    	pcbRepoRelFamHerMayCarrera.enableOnChangeToEmptyOption();
    	pcbRepoRelFamHerMayPeriodo = powerComboBox.create('pcbRepoRelFamHerMayPeriodo','pcbRepoRelFamHerMayPeriodo','Periodo(+):',1,103);
    	pcbRepoRelFamHerMayPeriodo.enableReadOnlyEditor();
    	pcbRepoRelFamHerMayPeriodo.addEmptyOption();
    	pcbRepoRelFamHerMayPeriodo.setValidEmpty();
    	pcbRepoRelFamHerMayPosicion = powerComboBox.create('pcbRepoRelFamHerMayPosicion','pcbRepoRelFamHerMayPosicion','Posición(+):',1,123);
    	pcbRepoRelFamHerMayPosicion.enableReadOnlyEditor();
    	pcbRepoRelFamHerMayPosicion.addEmptyOption();
    	pcbRepoRelFamHerMayPosicion.setValidEmpty();
    	pcbRepoRelFamHerMayPosicion.setFieldFind(true);
    	pcbRepoRelFamHerMayPosicion.enableOnChangeToEmptyOption();
    	pcbRepoRelFamHerMaySeccion = powerComboBox.create('pcbRepoRelFamHerMaySeccion','pcbRepoRelFamHerMaySeccion','Sección(+):',1,87);
    	pcbRepoRelFamHerMaySeccion.enableReadOnlyEditor();
    	pcbRepoRelFamHerMaySeccion.addEmptyOption();
    	pcbRepoRelFamHerMaySeccion.setValidEmpty();
    	pcbRepoRelFamHerMaySeccion.setDataType("string");
    	pcbRepoRelFamHerMaySeccion.setFieldFind(true);		
		editsRepoRelFamHerMayCedula = edits.create('editsRepoRelFamHerMayCedula','editsRepoRelFamHerMayCedula','C.i. (*):',1,88,'normal');
    	editsRepoRelFamHerMayCedula.setValidInteger();
      	editsRepoRelFamHerMayCedula.setFieldFind(true);
      	editsRepoRelFamHerMayNombre = edits.create('editsRepoRelFamHerMayNombre','editsRepoRelFamHerMayNombre','Nombre (*):',1,123,'normal');
      	editsRepoRelFamHerMayNombre.setValidEmpty();
      	editsRepoRelFamHerMayNombre.setFieldFind(true);
      	editsRepoRelFamHerMayApellido = edits.create('editsRepoRelFamHerMayApellido','editsRepoRelFamHerMayApellido','Apellido (*):',1,71,'normal');
      	editsRepoRelFamHerMayApellido.setValidEmpty();
      	editsRepoRelFamHerMayApellido.setFieldFind(true);		
		imgBtnRepoRelFamHerMayLimpiar = imgButtons.create('imgBtnRepoRelFamHerMayLimpiar','Limpiar','limpiar.png');
		imgBtnRepoRelFamHerMayBuscar = imgButtons.create('imgBtnRepoRelFamHerMayBuscar','Buscar','icono_buscar.png');
    	imgBtnRepoRelFamHerMaySalir = imgButtons.create('imgBtnRepoRelFamHerMaySalir','Salir','salir.png');
  	},

  	init : function(){
  		this.create();
  		this.setEvents();
  		this.dialogsRepoRelFamHerMayor_Init();
  		this.createMWs();
  	},
  
  	limpiar : function() {
  		editsRepoRelFamHerMayCedula.hideId = -1;
  		pcbRepoRelFamHerMayOrg.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbRepoRelFamHerMaySuborg);
  		Tool.rstPwrCmb(pcbRepoRelFamHerMayCarrera);
  		Tool.rstPwrCmb(pcbRepoRelFamHerMayPeriodo);
  		Tool.rstPwrCmb(pcbRepoRelFamHerMayPosicion);
  		Tool.rstPwrCmb(pcbRepoRelFamHerMaySeccion);
  		editsRepoRelFamHerMayCedula.clear();
  		editsRepoRelFamHerMayNombre.clear();
  		editsRepoRelFamHerMayApellido.clear();
  		dialogsRepoRelFamHerMayor.setMsg("");
  		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoRelFamHerMayor, pcbRepoRelFamHerMayOrg, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoRelFamHerMayor, pcbRepoRelFamHerMayOrg, pcbRepoRelFamHerMaySuborg, pcbRepoRelFamHerMayCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function(){
		pcbRepoRelFamHerMayOrg.onChange(this.windowName + ".resetElements('org')");
		pcbRepoRelFamHerMaySuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbRepoRelFamHerMayCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbRepoRelFamHerMayPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbRepoRelFamHerMayPosicion.onChange(this.windowName + ".resetElements('pos')");
		editsRepoRelFamHerMayCedula.onEnter(this.windowName + ".buscar()");
		editsRepoRelFamHerMayCedula.onChange(this.windowName + ".limpiarFind(1)");
		editsRepoRelFamHerMayNombre.onEnter(this.windowName + ".buscar()");
		editsRepoRelFamHerMayNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsRepoRelFamHerMayApellido.onEnter(this.windowName + ".buscar()");
		editsRepoRelFamHerMayApellido.onChange(this.windowName + ".limpiarFind(3)");
    	imgBtnRepoRelFamHerMayLimpiar.onClick(this.windowName + ".limpiar()");
    	imgBtnRepoRelFamHerMayBuscar.onClick(this.windowName + ".buscar()");
        imgBtnRepoRelFamHerMaySalir.onClick('dialogsRepoRelFamHerMayor.close()');
    },
    
	buscar: function() {
		if ((editsRepoRelFamHerMayCedula.getValue() == '' && editsRepoRelFamHerMayNombre.getValue() == '' && editsRepoRelFamHerMayApellido.getValue() == '') || (editsRepoRelFamHerMayCedula.getValue() != '' && editsRepoRelFamHerMayNombre.getValue() != '' && editsRepoRelFamHerMayApellido.getValue() != '')) {
			this.coreUpdate();
		}					
		else { 
			ResuBusqueda.setObjectExtFnc(editsRepoRelFamHerMayCedula, editsRepoRelFamHerMayNombre, editsRepoRelFamHerMayApellido, this.windowName + ".buscar()");
			Tool.getGridData('MantObject', 'getMantPersTodas', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsRepoRelFamHerMayCedula, editsRepoRelFamHerMayCedula, editsRepoRelFamHerMayNombre, editsRepoRelFamHerMayNombre, editsRepoRelFamHerMayApellido, editsRepoRelFamHerMayApellido);
		}
	},

	limpiarFind : function(ix) {
		editsRepoRelFamHerMayCedula.hideId = -1;
		
  		switch (ix) {
		case 1: 
			editsRepoRelFamHerMayNombre.setValue("");
			editsRepoRelFamHerMayApellido.setValue("");  		
			break;
		case 2: 
			editsRepoRelFamHerMayCedula.setValue("");
			editsRepoRelFamHerMayApellido.setValue("");  		
			break;
		default:
			editsRepoRelFamHerMayCedula.setValue("");
		editsRepoRelFamHerMayNombre.setValue("");
			break;
		} 
  	},

    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(pcbRepoRelFamHerMaySuborg);
	  		Tool.rstPwrCmb(pcbRepoRelFamHerMayCarrera);
	  		Tool.rstPwrCmb(pcbRepoRelFamHerMayPeriodo);
			Tool.rstPwrCmb(pcbRepoRelFamHerMayPosicion);
	    	if (pcbRepoRelFamHerMayOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoRelFamHerMayor, pcbRepoRelFamHerMaySuborg, 1, 2, pcbRepoRelFamHerMayOrg);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbRepoRelFamHerMayCarrera);
	  		Tool.rstPwrCmb(pcbRepoRelFamHerMayPeriodo);
			Tool.rstPwrCmb(pcbRepoRelFamHerMayPosicion);
	    	if (pcbRepoRelFamHerMaySuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoRelFamHerMayor, pcbRepoRelFamHerMayCarrera, -1, 3, pcbRepoRelFamHerMaySuborg);
		}
		else if (element == 'carr') {
      		Tool.rstPwrCmb(pcbRepoRelFamHerMayPosicion);
      		Tool.rstPwrCmb(pcbRepoRelFamHerMaySeccion);
	    	if (pcbRepoRelFamHerMayCarrera.getOption() != "") {
		  		Tool.rstPwrCmb(pcbRepoRelFamHerMayPeriodo);
	    		Tool.getPowerComboDataFnc(this.windowName + '.autoSet()', 'MantObject', 'getPeriodoXNivelAcad', dialogsRepoRelFamHerMayor, pcbRepoRelFamHerMayPeriodo, 0, 1, pcbRepoRelFamHerMayCarrera.setModeReturnGetText(5));
	    	}	    		
	    	else {
	      		editsRepoRelFamHerMayCedula.clear();
	      		editsRepoRelFamHerMayNombre.clear();
	      		editsRepoRelFamHerMayApellido.clear();
	    	}
		}
	    else if (element == 'per') {
	    	if (pcbRepoRelFamHerMayCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsRepoRelFamHerMayor, pcbRepoRelFamHerMayPosicion, 0, 1, pcbRepoRelFamHerMayCarrera.setModeReturnGetText(2));        		
    	} 
    	else if (element == 'pos') {
    		if (pcbRepoRelFamHerMayPosicion.getOption() != "")
    			Tool.getPowerComboData('MantObject', 'getMantProyAulaSeccion', dialogsRepoRelFamHerMayor, pcbRepoRelFamHerMaySeccion, 0, 1, pcbRepoRelFamHerMayCarrera, pcbRepoRelFamHerMayPeriodo, pcbRepoRelFamHerMayPosicion);        		
	    	else
	    		Tool.rstPwrCmb(pcbRepoRelFamHerMaySeccion);
    	}  
	},
	
	autoSet : function(element) {
		pcbRepoRelFamHerMayPeriodo.setSelectedIndex(1);
		this.resetElements('per');
	},
	
	reporte : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');	
		rep.setWidthReport(1670);
        rep.setPositionIcon(1250,15);
        //rep.setNoRepeatHead();
        //rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','bold');
        rep.addBar(0,0,1294,48,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 20, 'ORGANIZACION:         '+pcbRepoRelFamHerMayOrg.getOption(),false);
		rep.addText(20, 38, 'SUBORGANIZACION: '+pcbRepoRelFamHerMaySuborg.getOption(),false);
		rep.addText(480, 38, 'CARRERA:  '+pcbRepoRelFamHerMayCarrera.getOption(),false);
		rep.addText(480, 20, 'PERIODO:   '+pcbRepoRelFamHerMayPeriodo.getOption(),false);		
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'courier','bold');
		rep.addText(790, 32, 'RELACION DE FAMILIAS',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);		
		rep.addTable('TablaRepoAluPorSeccion',['Nº','Hermano Mayor','Hermano','Hermano','Hermano','Hermano','Representante','Firma'],644,52);
		rep.setTotalRowTable(34);
		rep.setHeightRow(20);
        rep.setSizeColumnArray([30,284,160,160,160,160,200,146]);
        rep.setAlignData(['right','left','left','left','left','left','left','left']); 
        rep.addJsonData('TablaRepoAluPorSeccion','getListadoHerMayor',[0,1,2,3,4,5,6,7]);		
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        //rep.setFontProperties(rep.getRGBAObj(255,255,255,1),12,'courier','bold');
        //rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	coreUpdate: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (pcbRepoRelFamHerMayOrg.valid(dialogsRepoRelFamHerMayor))
			if (pcbRepoRelFamHerMaySuborg.valid(dialogsRepoRelFamHerMayor))
				if (pcbRepoRelFamHerMayPeriodo.valid(dialogsRepoRelFamHerMayor)) {
					rlx.add('reg', pcbRepoRelFamHerMayPeriodo);
					rlx.add('reg', pcbRepoRelFamHerMayCarrera.setModeReturnGetText(2));
					rlx.add('reg', pcbRepoRelFamHerMayPosicion);
					rlx.add('reg', pcbRepoRelFamHerMaySeccion);
					rlx.addInt('reg', editsRepoRelFamHerMayCedula.hideId, true);
					Tool.cnnSrv('ReportObject','getListadoHerMayor', this.windowName + '.reporte()', rlx);
				}
    }
}