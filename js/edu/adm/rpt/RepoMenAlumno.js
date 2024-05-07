var dialogsRepoMenAlumno = new Object();
var pcbMenAluOrg = new Object();
var pcbMenAluSuborg = new Object();
var pcbMenAluCarrera = new Object();
var pcbMenAluPeriodo = new Object();
var pcbMenAluPosicion = new Object();
var pcbMenAluSeccion = new Object();
var pcbMenAluMensualidad = new Object();
var editMenAluCi = new Object();
var editMenAluNombre = new Object();
var editMenAluApellido = new Object();
var imgButtonsRepoMenAluReporte = new Object();
var imgButtonsRepoMenAluLimpiar = new Object();
var imgButtonsRepoMenAluSalir = new Object();
var mwRepoMenAlumno = new Object();//minWindow
var rl = new Object();

var RepoMenAlumno = {
    windowName: 'RepoMenAlumno',
    isCreate: false,
    
    show : function(){  
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
        if (dialogsRepoMenAlumno.isByClean())
  			Tool.cnnSrv('InscripObject', 'getCargarPersona', this.windowName + '.loadDataPers()');  			
		dialogsRepoMenAlumno.show();
	},
	
	hide : function() {
		dialogsRepoMenAlumno.hide();
	},
	
    createMWs: function() {
        mwRepoMenAlumno = desktop.addMinWindow('L. Repres.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoMenAlumno.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRepoMenAlumno_Init : function() {
        dialogsRepoMenAlumno.setMinimizeXY(0,0);
        dialogsRepoMenAlumno.setCenterScreen();
        dialogsRepoMenAlumno.addSpace(0,0,20);
        dialogsRepoMenAlumno.addLn(1,1,1);
		dialogsRepoMenAlumno.setHeightCell(1,1,10);
        dialogsRepoMenAlumno.addObject(pcbMenAluOrg,20,40);
        dialogsRepoMenAlumno.addObject(pcbMenAluSuborg,20,75);
        dialogsRepoMenAlumno.addObject(pcbMenAluCarrera,20,110);
        dialogsRepoMenAlumno.addObject(pcbMenAluPeriodo,20,145);
        dialogsRepoMenAlumno.addObject(pcbMenAluPosicion,20,180);
        dialogsRepoMenAlumno.addObject(pcbMenAluSeccion,20,215);
        dialogsRepoMenAlumno.addObject(pcbMenAluMensualidad,20,250);
        dialogsRepoMenAlumno.addObject(editMenAluCi,20,285);
        dialogsRepoMenAlumno.addObject(editMenAluNombre,20,320);
        dialogsRepoMenAlumno.addObject(editMenAluApellido,20,355);
        dialogsRepoMenAlumno.addObject(imgButtonsRepoMenAluReporte,20,390);
        dialogsRepoMenAlumno.addObject(imgButtonsRepoMenAluLimpiar,140,390);
        dialogsRepoMenAlumno.addObject(imgButtonsRepoMenAluSalir,260,390);
    },

    create: function() {
    	dialogsRepoMenAlumno = dialogs.create('dialogsRepoMenAlumno',0,0,372,405,'MENSUALIDAD DEL ESTUDIANTE');
    	dialogsRepoMenAlumno.setAdjY(70);
    	pcbMenAluOrg = powerComboBox.create('pcbMenAluOrg','pcbMenAluOrg','Organización (+):',1,103);
    	pcbMenAluOrg.enableReadOnlyEditor();
    	pcbMenAluOrg.addEmptyOption();
    	pcbMenAluOrg.setValidEmpty();
    	pcbMenAluOrg.setWidthCombo(210);
    	pcbMenAluSuborg = powerComboBox.create('pcbMenAluSuborg','pcbMenAluSuborg','Suborganización (^):',1,103);
    	pcbMenAluSuborg.enableReadOnlyEditor();
    	pcbMenAluSuborg.addEmptyOption();
    	pcbMenAluSuborg.setValidEmpty();
    	pcbMenAluSuborg.setWidthCombo(210);
    	pcbMenAluCarrera = powerComboBox.create('pcbMenAluCarrera','pcbMenAluCarrera','Carrera (^):',1,103);
    	pcbMenAluCarrera.enableReadOnlyEditor();
    	pcbMenAluCarrera.addEmptyOption();
    	pcbMenAluCarrera.setValidEmpty();
    	pcbMenAluCarrera.setFieldFind(true);
    	pcbMenAluCarrera.setWidthCombo(210);
    	pcbMenAluPeriodo = powerComboBox.create('pcbMenAluPeriodo','pcbMenAluPeriodo','Periodo(+):',1,103);
    	pcbMenAluPeriodo.enableReadOnlyEditor();
    	pcbMenAluPeriodo.addEmptyOption();
    	pcbMenAluPeriodo.setValidEmpty();
    	pcbMenAluPeriodo.setWidthCombo(210);
    	pcbMenAluPosicion = powerComboBox.create('pcbMenAluPosicion','pcbMenAluPosicion','Posición(+):',1,103);
    	pcbMenAluPosicion.enableReadOnlyEditor();
    	pcbMenAluPosicion.addEmptyOption();
    	pcbMenAluPosicion.setValidEmpty();
    	pcbMenAluPosicion.setFieldFind(true);
    	pcbMenAluPosicion.setWidthCombo(210);
    	pcbMenAluSeccion = powerComboBox.create('pcbMenAluSeccion','pcbMenAluSeccion','Sección(+):',1,103);
    	pcbMenAluSeccion.enableReadOnlyEditor();
    	pcbMenAluSeccion.addEmptyOption();
    	pcbMenAluSeccion.setValidEmpty();
    	pcbMenAluSeccion.setDataType("string");
    	pcbMenAluSeccion.setFieldFind(true);
    	pcbMenAluSeccion.setWidthCombo(210);
    	pcbMenAluMensualidad = powerComboBox.create('pcbMenAluMensualidad','pcbMenAluMensualidad','Mensualidad :',1,103);
    	pcbMenAluMensualidad.enableReadOnlyEditor();
    	pcbMenAluMensualidad.addEmptyOption();
    	pcbMenAluMensualidad.setValidEmpty();
    	pcbMenAluMensualidad.setWidthCombo(210);
    	pcbMenAluMensualidad.setFieldFind(true);
    	pcbMenAluMensualidad.setWidthCombo(210);
		editMenAluCi = edits.create('editMenAluCi','editMenAluCi','C.i. (*):',1,107,'normal');
		editMenAluCi.setValidInteger();
		editMenAluCi.setFieldFind(true);
        editMenAluCi.setSizeEdit(149);
		editMenAluCi.setMaxLength(50); 
		editMenAluNombre = edits.create('editMenAluNombre','editMenAluNombre','Nombre (*):', 1, 107, 'normal');
		editMenAluNombre.setValidEmpty();
		editMenAluNombre.setFieldFind(true);
        editMenAluNombre.setSizeEdit(149);
		editMenAluNombre.setMaxLength(50); 
		editMenAluApellido = edits.create('editMenAluApellido','editMenAluApellido','Apellido (*):',1,107,'normal');
		editMenAluApellido.setValidEmpty();
		editMenAluApellido.setFieldFind(true);
        editMenAluApellido.setSizeEdit(149);
		editMenAluApellido.setMaxLength(50); 
    	imgButtonsRepoMenAluReporte = imgButtons.create('imgButtonsRepoMenAluReporte','Imprimir','print.png');
    	imgButtonsRepoMenAluLimpiar = imgButtons.create('imgButtonsRepoMenAluLimpiar','Limpiar','limpiar.png');
    	imgButtonsRepoMenAluSalir = imgButtons.create('imgButtonsRepoMenAluSalir','Salir','salir.png');
    	imgButtonsRepoMenAluReporte.setDimension(90,22);
    	imgButtonsRepoMenAluLimpiar.setDimension(90,22);
    	imgButtonsRepoMenAluSalir.setDimension(90,22);
  	},

  	init : function() {
  		this.create();
  		this.setEvents();
  		this.dialogsRepoMenAlumno_Init();
  		this.createMWs();
  	},

    loadDataPers : function() {
  		pcbMenAluPosicion.disable();
  		pcbMenAluSeccion.disable();
    	editMenAluCi.readOnly(true);
  	    editMenAluNombre.readOnly(true);
  	    editMenAluApellido.readOnly(true);
  	    editMenAluCi.onEnter("");
  		editMenAluCi.onChange("");
  		editMenAluNombre.onEnter("");
  		editMenAluNombre.onChange("");
  		editMenAluApellido.onEnter("");
  		editMenAluApellido.onChange("");
  		imgButtonsRepoMenAluLimpiar.setDisable();
    	if (json('getPermiso').data[0] != 'ACTIVO') {
  			editMenAluCi.setValue(json('getDatoPersona').data[0]);
  	  		editMenAluNombre.setValue(json('getDatoPersona').data[1]);
  	  		editMenAluApellido.setValue(json('getDatoPersona').data[2]);
  	  		editMenAluCi.hideId = json('getDatoPersona').data[3];
  		}
    	else {
      		pcbMenAluPosicion.enable();
      		pcbMenAluSeccion.enable();
  	    	editMenAluCi.readOnly(false);
  	    	editMenAluNombre.readOnly(false);
  	    	editMenAluApellido.readOnly(false);
  		  	editMenAluCi.onEnter(this.windowName + ".buscar()");
  		  	editMenAluCi.onChange(this.windowName + ".limpiarFind(1)");
  		  	editMenAluNombre.onEnter(this.windowName + ".buscar()");
  		  	editMenAluNombre.onChange(this.windowName + ".limpiarFind(2)");
  		  	editMenAluApellido.onEnter(this.windowName + ".buscar()");
  		  	editMenAluApellido.onChange(this.windowName + ".limpiarFind(3)");
  		  	imgButtonsRepoMenAluLimpiar.setEnable();
    	}
    	Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
		dialogsRepoMenAlumno.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },
  	
  	limpiarFind : function(ix) {
  		editMenAluCi.hideId = -1;
  		pcbMenAluPosicion.setSelectedIndex(0);
  		pcbMenAluSeccion.setSelectedIndex(0);
  		
  		switch (ix) {
		case 1: 
			editMenAluNombre.clear();
			editMenAluApellido.clear(); 		
			break;
		case 2: 
			editMenAluCi.clear();
			editMenAluApellido.clear(); 		
			break;
		default:
			editMenAluCi.clear();
			editMenAluNombre.clear();
			break;
		} 
  	},

  	limpiar : function(tipo) {
  		pcbMenAluOrg.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbMenAluSuborg);
  		Tool.rstPwrCmb(pcbMenAluCarrera);
  		Tool.rstPwrCmb(pcbMenAluPeriodo);
  		Tool.rstPwrCmb(pcbMenAluPosicion);
  		Tool.rstPwrCmb(pcbMenAluSeccion);
  		pcbMenAluMensualidad.setSelectedIndex(0);
  		editMenAluCi.hideId = -1;
  		editMenAluCi.clear();
  		editMenAluNombre.clear();
  		editMenAluApellido.clear();
  		dialogsRepoMenAlumno.setMsg("");
  		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoMenAlumno, pcbMenAluOrg, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoMenAlumno, pcbMenAluOrg, pcbMenAluSuborg, pcbMenAluCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function() {
		pcbMenAluOrg.onChange(this.windowName + ".resetElements('org')");
		pcbMenAluSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbMenAluCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbMenAluPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbMenAluPosicion.onChange(this.windowName + ".resetElements('pos')");
		pcbMenAluSeccion.onChange(this.windowName + ".resetElements('sec')");
		editMenAluCi.onEnter(this.windowName + ".buscar()");
		editMenAluCi.onChange(this.windowName + ".limpiarFind(1)");
		editMenAluCi.onClick(this.windowName + ".limpiarFind(1)");
		editMenAluNombre.onEnter(this.windowName + ".buscar()");
		editMenAluNombre.onChange(this.windowName + ".limpiarFind(2)");
		editMenAluNombre.onClick(this.windowName + ".limpiarFind(2)");
		editMenAluApellido.onEnter(this.windowName + ".buscar()");
		editMenAluApellido.onChange(this.windowName + ".limpiarFind(3)");
		editMenAluApellido.onClick(this.windowName + ".limpiarFind(3)");
    	imgButtonsRepoMenAluReporte.onClick(this.windowName + ".coreUpdate()");
    	imgButtonsRepoMenAluLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsRepoMenAluSalir.onClick('dialogsRepoMenAlumno.close()');
    },
    
	buscar : function() {
		if (editMenAluCi.getValue() != '' || editMenAluNombre.getValue() != '' || editMenAluApellido.getValue() != '') {
			ResuBusqueda.setObjectExtFnc(editMenAluCi, editMenAluNombre, editMenAluApellido, this.windowName + ".coreUpdate()");
			Tool.getGridData('MantObject', 'getMantPersTodas', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editMenAluCi, editMenAluCi, editMenAluNombre, editMenAluNombre, editMenAluApellido, editMenAluApellido);
		}
	},

	resetElements : function(element) {
        var rlx = xmlStructs.createRecordList("rlx");

        if (element == 'org') {
			Tool.rstPwrCmb(pcbMenAluSuborg);
	  		Tool.rstPwrCmb(pcbMenAluCarrera);
	  		Tool.rstPwrCmb(pcbMenAluPeriodo);
			Tool.rstPwrCmb(pcbMenAluPosicion);
			Tool.rstPwrCmb(pcbMenAluSeccion);
	    	if (pcbMenAluOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoMenAlumno, pcbMenAluSuborg, 1, 2, pcbMenAluOrg);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbMenAluCarrera);
	  		Tool.rstPwrCmb(pcbMenAluPeriodo);
			Tool.rstPwrCmb(pcbMenAluPosicion);
			Tool.rstPwrCmb(pcbMenAluSeccion);
	    	if (pcbMenAluSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoMenAlumno, pcbMenAluCarrera, -1, 3, pcbMenAluSuborg);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbMenAluPeriodo);
			Tool.rstPwrCmb(pcbMenAluPosicion);
			Tool.rstPwrCmb(pcbMenAluSeccion);
	    	if (pcbMenAluCarrera.getOption() != "") {
				rlx.add('reg', pcbMenAluCarrera.setModeReturnGetText(5));
				Tool.cnnSrv('MantObject', 'getPeriodoXNivelAcad', this.windowName + '.loadDataMensualidad()', rlx);
	    	}
		}
	    else if (element == 'per') {
			Tool.rstPwrCmb(pcbMenAluSeccion);
	    	if (pcbMenAluCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsRepoMenAlumno, pcbMenAluPosicion, 0, 1, pcbMenAluCarrera.setModeReturnGetText(2));        		
    	} 
    	else if (element == 'pos') {
      		editMenAluCi.clear();
      		editMenAluNombre.clear();
      		editMenAluApellido.clear();
      		Tool.getPowerComboData('MantObject', 'getMantProyAulaSeccion', dialogsRepoMenAlumno, pcbMenAluSeccion, 0, 1, pcbMenAluCarrera, pcbMenAluPeriodo, pcbMenAluPosicion);        		
    	}  
    	else if (element == 'sec') {
      		editMenAluCi.clear();
      		editMenAluNombre.clear();
      		editMenAluApellido.clear();
    	}  
	},
	
    loadDataMensualidad: function() {
		Tool.loadPowerComboData(dialogsRepoMenAlumno, pcbMenAluPeriodo, 0, 1, json('getPeriodoXNivelAcad'));
		pcbMenAluPeriodo.setSelectedIndex(1);
		Tool.cnnSrv("ReportObject", "getConceptoFinanciado", this.windowName + ".loadConceptoFinanciado()");
    },

    loadConceptoFinanciado: function() {
		Tool.loadPowerComboData(dialogsRepoMenAlumno, pcbMenAluMensualidad, 0, 1, json('getConceptoFinanciado'));
		if (json('getPermiso').data[0] == 'ACTIVO') 
			this.resetElements('per');
		else
			this.coreUpdate();
    },
    
    reporte : function(tpRpt) {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
        rep.setTotalRowTable(28);
		if (json('getPermiso').data[0] != 'ACTIVO') {
			rep.setPageSize(300);
	        rep.setTotalRowTable(10);
		} 
    	rep.setPositionIcon(1090,10);
    	//rep.setHeadImage(imgEduca.banner,false);
    	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'courier','bold');
        rep.addBar(0,0,1128,42,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 18, 'ORGANIZACION: '+pcbMenAluOrg.getOption(),false);
		rep.addText(250, 18, 'SUBORGANIZACION: '+pcbMenAluSuborg.getOption(),false);
		rep.addText(700, 18, 'CARRERA: '+pcbMenAluCarrera.getOption(),false);
		rep.addText(20, 34, 'PERIODO:      '+pcbMenAluPeriodo.getOption(),false);
		rep.addText(250, 34, 'POSICION       : '+pcbMenAluPosicion.getOption(),false);
		rep.addText(700, 34, 'SECCIÓN: '+pcbMenAluSeccion.getOption(),false);
		rep.addBar(0,45,1128,66,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'courier','bold');
		rep.addText(460, 60, 'MENSUALIDADES DEL ESTUDIANTE',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'bold helvetica',0, 0, 0, 8, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
        rep.setTableCellProperties(1, 'bold helvetica', 8);
        rep.addTable('tablaRepoLisAluMensualidad',['Nº', 'C.I.', 'APELLIDOS.', 'NOMBRES', 'ULT. PAGO', 'SEP.', 'OCT.', 'NOV.', 'DIC.', 'ENE.', 'FEB.', 'MAR.', 'ABR.', 'MAY.', 'JUN.', 'JUL.', 'AGO.'],563,72);
		rep.setHeightRow(20);
		rep.setSizeColumnArray([25,78,154,154,63,55,55,55,55,55,55,55,55,55,55,55,55]);
		rep.setAlignData(['right','right','left','left','right','center','center','center','center','center','center','center','center','center','center','center','center']);
		rep.addJsonData('tablaRepoLisAluMensualidad', 'getMensualidad' + tpRpt,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		//rep.addFooterBar(rep.getRGBAObj(0,0,0,0.1), false);
        rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
    	//rep.previewHTML();
	},		
	
	coreUpdate: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        var tpRpt = "";
        
        if (editMenAluCi.getValue() != '' && editMenAluNombre.getValue() != '' && editMenAluApellido.getValue() != '') {
        	tpRpt = "Repr";
			pcbMenAluPosicion.setSelectedIndex(0);
			pcbMenAluSeccion.setSelectedIndex(0);
        }
		if (pcbMenAluOrg.valid(dialogsRepoMenAlumno))
			if (pcbMenAluSuborg.valid(dialogsRepoMenAlumno))
				if (pcbMenAluCarrera.valid(dialogsRepoMenAlumno))
					if (pcbMenAluPeriodo.valid(dialogsRepoMenAlumno))
						if (tpRpt == "Repr" || pcbMenAluPosicion.valid(dialogsRepoMenAlumno))
							if (tpRpt == "Repr" || pcbMenAluSeccion.valid(dialogsRepoMenAlumno)) {
								rlx.add('reg', pcbMenAluPeriodo);
								rlx.add('reg', pcbMenAluCarrera.setModeReturnGetText(2));
								rlx.add('reg', pcbMenAluPosicion);
								rlx.add('reg', pcbMenAluSeccion);
								rlx.add('reg', pcbMenAluMensualidad);
								rlx.addInt('reg', editMenAluCi.hideId);
								rlx.addStr('reg', tpRpt);
								Tool.cnnSrv("ReportObject","getMensualidad", this.windowName + ".reporte('" + tpRpt + "')", rlx);
							}
	}
};