include('js/edu/cnt/rpt/RepoInfoAlumno');
var dialogsRepoLisAluConDeuda = new Object();
var pcbRepoLisAluConDeuOrg = new Object();
var pcbRepoLisAluConDeuSuborg = new Object();
var pcbRepoLisAluConDeuCarrera = new Object();
var pcbRepoLisAluConDeuPeriodo = new Object();
var calendarsRepoLisAluConDeuDesde = new Object();
var calendarsRepoLisAluConDeuHasta = new Object();
var pcbRepoLisAluConDeuConcepto = new Object();
var editsRepoLisAluConDeuCi = new Object();
var editsRepoLisAluConDeuNombre = new Object();
var editsRepoLisAluConDeuApellido = new Object();
var editsRepoLisAluConDeuTotal = new Object();
var imgButtonsRepoLisAluConDeuBloUsuario = new Object();
var gridsRepoLisAluConDeuda = new Object();
var imgButtonsRepoLisAluConDeuReporte = new Object();
var imgButtonsRepoLisAluConDeuEnviarSms = new Object();
var imgButtonsRepoLisAluConDeuEnviarEmail = new Object();
var imgButtonsRepoLisAluConDeuLimpiar = new Object();
var imgButtonsRepoLisAluConDeuBuscar = new Object();
var imgButtonsRepoLisAluConDeuSalir = new Object();
var mwRepoLisAluConDeuda = new Object();// minWindow

var RepoLisAluConDeuda = {
    windowName : 'RepoLisAluConDeuda',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        
        if (dialogsRepoLisAluConDeuda.isByClean())
			this.limpiar();			
		dialogsRepoLisAluConDeuda.show();
	},
	
    hide: function(){
        dialogsRepoLisAluConDeuda.hide();
    },
    
    createMWs: function(){
        mwRepoLisAluConDeuda = desktop.addMinWindow('L.A.C.Deuda', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoLisAluConDeuda.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsRepoLisAluConDeuda_Init : function(){
      dialogsRepoLisAluConDeuda.setMinimizeXY(0,0);
      dialogsRepoLisAluConDeuda.setCenterScreen();
      dialogsRepoLisAluConDeuda.addSpace(0,0,20);
      dialogsRepoLisAluConDeuda.addLn(1,1,1);
		dialogsRepoLisAluConDeuda.setHeightCell(1,1,13);
		dialogsRepoLisAluConDeuda.addObjToDialog(pcbRepoLisAluConDeuOrg,2,1,24);
		dialogsRepoLisAluConDeuda.addObjToDialog(pcbRepoLisAluConDeuSuborg,2,1,24);
		dialogsRepoLisAluConDeuda.addObjToDialog(pcbRepoLisAluConDeuCarrera,2,1,24);
		dialogsRepoLisAluConDeuda.adjAllMarginObj(2,1,20);
		dialogsRepoLisAluConDeuda.addObjToDialog(pcbRepoLisAluConDeuPeriodo,3,1,24);
		dialogsRepoLisAluConDeuda.adjAllMarginObj(3,1,20);
      dialogsRepoLisAluConDeuda.addObjToDialog(calendarsRepoLisAluConDeuDesde.getEditCalendar(),3,1,24);
    	dialogsRepoLisAluConDeuda.addObjToDialog(calendarsRepoLisAluConDeuHasta.getEditCalendar(),3,1,24);
      dialogsRepoLisAluConDeuda.adjAllMarginObj(3,1,20);
      dialogsRepoLisAluConDeuda.addObjToDialog(pcbRepoLisAluConDeuConcepto,4,1,24);
    	dialogsRepoLisAluConDeuda.addLn(5,1,1);
		dialogsRepoLisAluConDeuda.setHeightCell(5 ,1,15); 
    	var c1 = container.create("c1",'Estudiante / Representante:',1);
		c1.setDimension(881,50);
		c1.setMarginLeftBarTitle(115);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#7e7e7e');
		c1.addObject(editsRepoLisAluConDeuCi, 40, 140);
		c1.addObject(editsRepoLisAluConDeuNombre, 313, 140);
		c1.addObject(editsRepoLisAluConDeuApellido, 628, 140);
		dialogsRepoLisAluConDeuda.addObjToDialog(c1, 6, 1);
		dialogsRepoLisAluConDeuda.addObject(gridsRepoLisAluConDeuda.getObject(),20,190);
		dialogsRepoLisAluConDeuda.addLn(7,1,1);
		dialogsRepoLisAluConDeuda.setHeightCell(7,1,356); 
		dialogsRepoLisAluConDeuda.addObjToDialog(editsRepoLisAluConDeuTotal,8,1,1);
		dialogsRepoLisAluConDeuda.leftMarginObj(8, 1, 0, 740);
		dialogsRepoLisAluConDeuda.addObject(imgButtonsRepoLisAluConDeuBloUsuario, 337,533);
		dialogsRepoLisAluConDeuda.addLn(10,1,1);
		dialogsRepoLisAluConDeuda.setHeightCell(10 ,1,18); 
		dialogsRepoLisAluConDeuda.addObjToDialog(imgButtonsRepoLisAluConDeuEnviarSms,11,1);
		dialogsRepoLisAluConDeuda.addObjToDialog(imgButtonsRepoLisAluConDeuEnviarEmail,11,1);
		dialogsRepoLisAluConDeuda.addObjToDialog(imgButtonsRepoLisAluConDeuLimpiar,11,1);
		dialogsRepoLisAluConDeuda.addObjToDialog(imgButtonsRepoLisAluConDeuReporte,11,1);
		dialogsRepoLisAluConDeuda.addObjToDialog(imgButtonsRepoLisAluConDeuBuscar,11,1);
		dialogsRepoLisAluConDeuda.addObjToDialog(imgButtonsRepoLisAluConDeuSalir,11,1);
		dialogsRepoLisAluConDeuda.adjAllMarginObj(11, 1, 28);
		dialogsRepoLisAluConDeuda.leftMarginObj(11, 1, 0, 36);
	}, 	
		
	gridsRepoLisAluConDeuda_Init : function(){
        gridsRepoLisAluConDeuda.setFixColRow(false,true);
        gridsRepoLisAluConDeuda.addTitleVectorX(['Cedula','Apellido','Nombre','Concepto','Mes','Fecha Venc.','Abono','Monto','Deuda']);
        gridsRepoLisAluConDeuda.showData();
        gridsRepoLisAluConDeuda.setSizeCol(1,80);
        gridsRepoLisAluConDeuda.setSizeCol(2,120);
        gridsRepoLisAluConDeuda.setSizeCol(3,120);
        gridsRepoLisAluConDeuda.setSizeCol(4,177);
        gridsRepoLisAluConDeuda.setSizeCol(5,80);
        gridsRepoLisAluConDeuda.setSizeCol(6,80);
        gridsRepoLisAluConDeuda.setSizeCol(7,72);
        gridsRepoLisAluConDeuda.setSizeCol(8,72);
        gridsRepoLisAluConDeuda.setSizeCol(9,72);
   },
		
    create : function(){
    	dialogsRepoLisAluConDeuda = dialogs.create('dialogsRepoLisAluConDeuda',0,0,924,577,'ESTUDIANTE CON DEUDA');
    	dialogsRepoLisAluConDeuda.setAdjY(30);
    	pcbRepoLisAluConDeuOrg = powerComboBox.create('pcbRepoLisAluConDeuOrg','pcbRepoLisAluConDeuOrg','Organización (+):',1,101);
    	pcbRepoLisAluConDeuOrg.enableReadOnlyEditor();
    	pcbRepoLisAluConDeuOrg.addEmptyOption();
    	pcbRepoLisAluConDeuOrg.setValidEmpty();
    	pcbRepoLisAluConDeuOrg.setWidthCombo(150);
    	pcbRepoLisAluConDeuSuborg = powerComboBox.create('pcbRepoLisAluConDeuSuborg','pcbRepoLisAluConDeuSuborg','Suborganización (^):',1,122);
    	pcbRepoLisAluConDeuSuborg.enableReadOnlyEditor();
    	pcbRepoLisAluConDeuSuborg.addEmptyOption();
    	pcbRepoLisAluConDeuSuborg.setValidEmpty();
    	pcbRepoLisAluConDeuSuborg.setWidthCombo(150);
    	pcbRepoLisAluConDeuCarrera = powerComboBox.create('pcbRepoLisAluConDeuCarrera','pcbRepoLisAluConDeuCarrera','Carrera (^):',1,100);
    	pcbRepoLisAluConDeuCarrera.enableReadOnlyEditor();
    	pcbRepoLisAluConDeuCarrera.addEmptyOption();
    	pcbRepoLisAluConDeuCarrera.setValidEmpty();
    	pcbRepoLisAluConDeuCarrera.setWidthCombo(150);
    	pcbRepoLisAluConDeuCarrera.setFieldFind(true);
    	pcbRepoLisAluConDeuCarrera.enableOnChangeToEmptyOption();
    	pcbRepoLisAluConDeuPeriodo = powerComboBox.create('pcbRepoLisAluConDeuPeriodo','pcbRepoLisAluConDeuPeriodo','Periodo (+):',1,101);
    	pcbRepoLisAluConDeuPeriodo.enableReadOnlyEditor();
    	pcbRepoLisAluConDeuPeriodo.addEmptyOption();
    	pcbRepoLisAluConDeuPeriodo.setValidEmpty();
    	pcbRepoLisAluConDeuPeriodo.setWidthCombo(150);
    	pcbRepoLisAluConDeuPeriodo.enableOnChangeToEmptyOption();
    	calendarsRepoLisAluConDeuDesde = calendars.create('calendarsRepoLisAluConDeuDesde');
      calendarsRepoLisAluConDeuDesde.setValidEmpty();
		calendarsRepoLisAluConDeuDesde.setWidthEditCalendar(150);
    	calendarsRepoLisAluConDeuDesde.setCaption('Fecha Desde (*):',1,122);
    	calendarsRepoLisAluConDeuDesde.sendToFrom(100);
    	calendarsRepoLisAluConDeuDesde.setFieldFind(true);
    	calendarsRepoLisAluConDeuHasta = calendars.create('calendarsRepoLisAluConDeuHasta');      
      calendarsRepoLisAluConDeuHasta.setValidEmpty();
		calendarsRepoLisAluConDeuHasta.setWidthEditCalendar(150);
    	calendarsRepoLisAluConDeuHasta.setCaption('Fecha Hasta (*):',1,99);
    	calendarsRepoLisAluConDeuHasta.sendToFrom(100);
    	calendarsRepoLisAluConDeuHasta.setFieldFind(true);
    	pcbRepoLisAluConDeuConcepto = powerComboBox.create('pcbRepoLisAluConDeuConcepto','pcbRepoLisAluConDeuConcepto','Concepto (+):',1,101);
    	pcbRepoLisAluConDeuConcepto.enableReadOnlyEditor();
    	pcbRepoLisAluConDeuConcepto.addEmptyOption();
    	pcbRepoLisAluConDeuConcepto.setValidEmpty();
      pcbRepoLisAluConDeuConcepto.setWidthCombo(464);
      pcbRepoLisAluConDeuConcepto.setFieldFind(true);
      editsRepoLisAluConDeuCi = edits.create('editsRepoLisAluConDeuCi', 'editsRepoLisAluConDeuCi', 'C.i. (*):', 1,81, 'normal');
      editsRepoLisAluConDeuCi.setValidInteger();
      editsRepoLisAluConDeuCi.setFieldFind(true);
		editsRepoLisAluConDeuCi.setSizeEdit(171);
		editsRepoLisAluConDeuCi.setMaxLength(12);
      editsRepoLisAluConDeuNombre = edits.create('editsRepoLisAluConDeuNombre', 'editsRepoLisAluConDeuNombre', 'Nombre (*):', 1,122, 'normal');
      editsRepoLisAluConDeuNombre.setValidEmpty();
      editsRepoLisAluConDeuNombre.setFieldFind(true);
		editsRepoLisAluConDeuNombre.setSizeEdit(172);
		editsRepoLisAluConDeuNombre.setMaxLength(20);
      editsRepoLisAluConDeuApellido = edits.create('editsRepoLisAluConDeuApellido', 'editsRepoLisAluConDeuApellido', 'Apellido (*):', 1,99, 'normal');
      editsRepoLisAluConDeuApellido.setValidEmpty();
      editsRepoLisAluConDeuApellido.setFieldFind(true);
		editsRepoLisAluConDeuApellido.setSizeEdit(172);
		editsRepoLisAluConDeuApellido.setMaxLength(20);
      gridsRepoLisAluConDeuda = grids.create('gridsRepoLisAluConDeuda',15,9);
      editsRepoLisAluConDeuTotal = edits.create('editsRepoLisAluConDeuTotal', 'editsRepoLisAluConDeuTotal', 'Total:', 1,39, 'normal');
      editsRepoLisAluConDeuTotal.setSizeEdit(104);
      editsRepoLisAluConDeuTotal.readOnly(true);
      imgButtonsRepoLisAluConDeuBloUsuario = imgButtons.create('imgButtonsRepoLisAluConDeuBloUsuario','Bloquear Usuarios con Deuda','bloquear.gif');
      imgButtonsRepoLisAluConDeuReporte = imgButtons.create('imgButtonsRepoLisAluConDeuReporte','Reporte','print.png');
      imgButtonsRepoLisAluConDeuEnviarSms = imgButtons.create('imgButtonsRepoLisAluConDeuEnviarSms', 'Enviar Sms', 'enviar_sms.png');
      imgButtonsRepoLisAluConDeuEnviarEmail = imgButtons.create('imgButtonsRepoLisAluConDeuEnviarEmail', 'Enviar Email', 'email_4.png');
      imgButtonsRepoLisAluConDeuLimpiar = imgButtons.create('imgButtonsRepoLisAluConDeuLimpiar', 'Limpiar', 'limpiar.png');
      imgButtonsRepoLisAluConDeuBuscar = imgButtons.create('imgButtonsRepoLisAluConDeuBuscar', 'Buscar', 'icono_buscar.png');
      imgButtonsRepoLisAluConDeuSalir = imgButtons.create('imgButtonsRepoLisAluConDeuSalir','Salir','salir.png');
      imgButtonsRepoLisAluConDeuBloUsuario.setDimension(250,22);
    	imgButtonsRepoLisAluConDeuReporte.setDimension(110,22);
    	imgButtonsRepoLisAluConDeuEnviarSms.setDimension(110,22);
    	imgButtonsRepoLisAluConDeuEnviarEmail.setDimension(110,22);
    	imgButtonsRepoLisAluConDeuLimpiar.setDimension(110,22);
    	imgButtonsRepoLisAluConDeuBuscar.setDimension(110,22);
    	imgButtonsRepoLisAluConDeuSalir.setDimension(110,22);
	},

	init : function(){ 
		this.create();
		this.setEvents(); 
		this.dialogsRepoLisAluConDeuda_Init();
		this.gridsRepoLisAluConDeuda_Init();
		this.createMWs();
	},
	
    resetElements : function(element) {
		gridsRepoLisAluConDeuda.clean();
  		editsRepoLisAluConDeuTotal.setValue("");
  		imgButtonsRepoLisAluConDeuBloUsuario.setDisable();
  		imgButtonsRepoLisAluConDeuReporte.setDisable();
  		imgButtonsRepoLisAluConDeuEnviarSms.setDisable();
  		imgButtonsRepoLisAluConDeuEnviarEmail.setDisable();
    	
		if (element == 'org') {
			Tool.rstPwrCmb(pcbRepoLisAluConDeuSuborg);
	  		Tool.rstPwrCmb(pcbRepoLisAluConDeuCarrera);
	    	if (pcbRepoLisAluConDeuOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoLisAluConDeuda, pcbRepoLisAluConDeuSuborg, 1, 2, pcbRepoLisAluConDeuOrg);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbRepoLisAluConDeuCarrera);
	    	if (pcbRepoLisAluConDeuSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoLisAluConDeuda, pcbRepoLisAluConDeuCarrera, -1, 3, pcbRepoLisAluConDeuSuborg);
		}
		else if (element == 'carr') {
	    	if (pcbRepoLisAluConDeuCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoLisAluConDeuda, pcbRepoLisAluConDeuPeriodo, 0, 1, pcbRepoLisAluConDeuCarrera.setModeReturnGetText(5));
		}
		else if (element == 'carrInit') {
	    	if (pcbRepoLisAluConDeuCarrera.getOption() != "") {
	    		Tool.getPowerComboDataFnc('pcbRepoLisAluConDeuPeriodo.setSelectedIndex(1);calendarsRepoLisAluConDeuHasta.setFechaToEdit(Tool.getDate());', 'MantObject', 'getPeriodoXNivelAcad', dialogsRepoLisAluConDeuda, pcbRepoLisAluConDeuPeriodo, 0, 1, pcbRepoLisAluConDeuCarrera.setModeReturnGetText(5));
	    		pcbRepoLisAluConDeuCarrera.setSelectedIndex(0);
	    	}
		}
	},
	
	limpiarFind : function(ix) {
		editsRepoLisAluConDeuCi.hideId = -1;
		gridsRepoLisAluConDeuda.clean();
  		editsRepoLisAluConDeuTotal.setValue("");
  		imgButtonsRepoLisAluConDeuBloUsuario.setDisable();
  		imgButtonsRepoLisAluConDeuReporte.setDisable();
  		imgButtonsRepoLisAluConDeuEnviarSms.setDisable();
  		imgButtonsRepoLisAluConDeuEnviarEmail.setDisable();
		dialogsRepoLisAluConDeuda.setMsg("");
		
  		switch (ix) {
		case 1: 
			editsRepoLisAluConDeuNombre.setValue("");
			editsRepoLisAluConDeuApellido.setValue("");  		
			break;
		case 2: 
			editsRepoLisAluConDeuCi.setValue("");
			editsRepoLisAluConDeuApellido.setValue("");  		
			break;
		default:
			editsRepoLisAluConDeuCi.setValue("");
			editsRepoLisAluConDeuNombre.setValue("");
			break;
		} 
  	},

  	limpiar : function() {
  		editsRepoLisAluConDeuCi.hideId = -1;
  		pcbRepoLisAluConDeuOrg.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbRepoLisAluConDeuSuborg);
  		Tool.rstPwrCmb(pcbRepoLisAluConDeuCarrera);
  		pcbRepoLisAluConDeuPeriodo.setSelectedIndex(0);
  		calendarsRepoLisAluConDeuDesde.clear();
  		calendarsRepoLisAluConDeuHasta.clear();
  		Tool.rstPwrCmb(pcbRepoLisAluConDeuConcepto);	
  		editsRepoLisAluConDeuCi.setValue("");
  		editsRepoLisAluConDeuNombre.setValue("");
  		editsRepoLisAluConDeuApellido.setValue("");
  		gridsRepoLisAluConDeuda.clean();
  		editsRepoLisAluConDeuTotal.setValue("");
  		imgButtonsRepoLisAluConDeuBloUsuario.setDisable();
  		imgButtonsRepoLisAluConDeuReporte.setDisable();
  		imgButtonsRepoLisAluConDeuEnviarSms.setDisable();
  		imgButtonsRepoLisAluConDeuEnviarEmail.setDisable();
  		dialogsRepoLisAluConDeuda.setMsg("");
  		Tool.cnnSrv("MsjObject", "getRepoLisAluConDeudaInit", this.windowName + ".loadDataInit()");
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoLisAluConDeuda, pcbRepoLisAluConDeuOrg, 0, 1, json('getData'));
		Tool.loadPowerComboData(dialogsRepoLisAluConDeuda, pcbRepoLisAluConDeuConcepto, 0, 1, json('getConceptoFinanciado'));
		Tool.getContext(dialogsRepoLisAluConDeuda, pcbRepoLisAluConDeuOrg, pcbRepoLisAluConDeuSuborg, pcbRepoLisAluConDeuCarrera, this.windowName + ".resetElements('carrInit')");
	},
	
	getInfo: function() {
		if (gridsRepoLisAluConDeuda.getDataCell(1) != "") {
			RepoInfoAlumno.show();
			editsRepoInfoCedula.setValue(gridsRepoLisAluConDeuda.getDataCell(1)); 
			setTimeout(function(){RepoInfoAlumno.buscar()}, 50);
			dialogsRepoInfoAlumno.close();
		}
	},
	
	setEvents: function() {
		pcbRepoLisAluConDeuOrg.onChange(this.windowName + ".resetElements('org')");
		pcbRepoLisAluConDeuSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbRepoLisAluConDeuCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbRepoLisAluConDeuPeriodo.onChange(this.windowName + ".resetElements()");
		calendarsRepoLisAluConDeuDesde.onSelectedDay(this.windowName + ".resetElements()");
		calendarsRepoLisAluConDeuHasta.onSelectedDay(this.windowName + ".resetElements()");
		pcbRepoLisAluConDeuConcepto.onChange(this.windowName + ".resetElements()");
		editsRepoLisAluConDeuCi.onEnter(this.windowName + ".buscar()");
		editsRepoLisAluConDeuCi.onChange(this.windowName + ".limpiarFind(1)");
		editsRepoLisAluConDeuNombre.onEnter(this.windowName + ".buscar()");
		editsRepoLisAluConDeuNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsRepoLisAluConDeuApellido.onEnter(this.windowName + ".buscar()");
		editsRepoLisAluConDeuApellido.onChange(this.windowName + ".limpiarFind(3)");
		gridsRepoLisAluConDeuda.onDblClickCells(this.windowName + ".getInfo()");
		imgButtonsRepoLisAluConDeuBloUsuario.onClick(this.windowName + ".coreUpdate('Lock')");
  		imgButtonsRepoLisAluConDeuReporte.onClick(this.windowName + ".reporte()");
  		imgButtonsRepoLisAluConDeuEnviarSms.onClick(this.windowName + ".coreUpdate('Sms')");
  		imgButtonsRepoLisAluConDeuEnviarEmail.onClick(this.windowName + ".coreUpdate('Email')");
  		imgButtonsRepoLisAluConDeuLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsRepoLisAluConDeuBuscar.onClick(this.windowName + ".buscar()");
        imgButtonsRepoLisAluConDeuSalir.onClick('dialogsRepoLisAluConDeuda.close()');
    },

	getPrmConsulta: function(rlx, vPeri, vCarr, vPers, vFDes, vFHas, vConc) {
		rlx.addInt('reg', vPeri.getText(), true);
		rlx.addInt('reg', vPeri.getText(), true);
		rlx.add('reg', vConc);
		rlx.add('reg', vConc);
		rlx.add('reg', vCarr.setModeReturnGetText(2));
		rlx.add('reg', vCarr.setModeReturnGetText(2));
		rlx.addInt('reg', vPers, true);
		rlx.addInt('reg', vPers, true);
		rlx.addInt('reg', vPers, true);
		rlx.add('reg', vFDes);
		rlx.add('reg', vFHas);
		rlx.add('reg', vFHas);
		rlx.addInt('reg', vPeri.getText(), true);
		rlx.addInt('reg', vPeri.getText(), true);
		rlx.add('reg', vConc);
		rlx.add('reg', vConc);
		rlx.add('reg', vCarr.setModeReturnGetText(2));
		rlx.add('reg', vCarr.setModeReturnGetText(2));
		rlx.addInt('reg', vPers, true);
		rlx.addInt('reg', vPers, true);
		rlx.addInt('reg', vPers, true);
		return rlx;
	},
    
	buscar: function() {
		var rlx = xmlStructs.createRecordList("rlx");
		
		gridsRepoLisAluConDeuda.clean();
  		editsRepoLisAluConDeuTotal.setValue("");
		if (pcbRepoLisAluConDeuOrg.valid(dialogsRepoLisAluConDeuda))
			if (pcbRepoLisAluConDeuSuborg.valid(dialogsRepoLisAluConDeuda))
				if (pcbRepoLisAluConDeuPeriodo.valid(dialogsRepoLisAluConDeuda)) {
					if ((editsRepoLisAluConDeuCi.getValue() == '' && editsRepoLisAluConDeuNombre.getValue() == '' && editsRepoLisAluConDeuApellido.getValue() == '') || (editsRepoLisAluConDeuCi.getValue() != '' && editsRepoLisAluConDeuNombre.getValue() != '' && editsRepoLisAluConDeuApellido.getValue() != '')) {
						rlx = this.getPrmConsulta(rlx, pcbRepoLisAluConDeuPeriodo, pcbRepoLisAluConDeuCarrera, editsRepoLisAluConDeuCi.hideId, calendarsRepoLisAluConDeuDesde, calendarsRepoLisAluConDeuHasta, pcbRepoLisAluConDeuConcepto);
						Tool.cnnSrv('MsjObject', 'getListadoAlumnoDeudaReporte', this.windowName + '.loadDataBuscar()', rlx); 
						imgButtonsRepoLisAluConDeuBloUsuario.setEnable();
						imgButtonsRepoLisAluConDeuReporte.setEnable();
						imgButtonsRepoLisAluConDeuEnviarSms.setEnable();
						imgButtonsRepoLisAluConDeuEnviarEmail.setEnable();
					}
					else {
						ResuBusqueda.setObjectExtFnc(editsRepoLisAluConDeuCi, editsRepoLisAluConDeuNombre, editsRepoLisAluConDeuApellido, this.windowName + ".buscar()");
						Tool.getGridData('MantObject', 'getMantPersTodas', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsRepoLisAluConDeuCi, editsRepoLisAluConDeuCi, editsRepoLisAluConDeuNombre, editsRepoLisAluConDeuNombre, editsRepoLisAluConDeuApellido, editsRepoLisAluConDeuApellido);
					}
				}
	},

	loadDataBuscar: function() {
		Tool.loadGridData(dialogsRepoLisAluConDeuda, gridsRepoLisAluConDeuda, false, json('getListadoAlumnoDeudaReporte'));
		Tool.loadEditData(dialogsRepoLisAluConDeuda, editsRepoLisAluConDeuTotal, 0, json('getListadoAlumnoDeudaTotal'));
	},
	
	reporte: function(){
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
    	rep.setPositionIcon(1090,10);
    	//rep.setHeadImage(imgEduca.banner,false);
    	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),14,'courier','bold');
		rep.addBar(0,2,1128,42,rep.getRGBAObj(210,200,200,0.9),false);
      rep.addText(408, 28,'LISTADO DE ESTUDIANTES CON DEUDA',false);
      rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),9,'helvetica','normal');
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
      rep.addBar(0,45,1128,94,rep.getRGBAObj(187,196,238,0.8),false);
      rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),9,'helvetica','normal');
		rep.addText(20, 66,'ORGANIZACIÓN: '+pcbRepoLisAluConDeuOrg.getOption(),false);
		rep.addText(250, 66,'SUBORG.: '+pcbRepoLisAluConDeuSuborg.getOption(),false);
		rep.addText(600, 66,'CARRERA:         '+pcbRepoLisAluConDeuCarrera.getOption(),false);
		rep.addText(20, 82, 'PERIODO:            '+pcbRepoLisAluConDeuPeriodo.getOption(),false);
		rep.addText(250, 82, 'FECHA DESDE:          '+calendarsRepoLisAluConDeuDesde.getFechaFromEdit(),false);
		rep.addText(600, 82, 'FECHA HASTA:  '+calendarsRepoLisAluConDeuHasta.getFechaFromEdit(),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),13,'helvetica','normal');
		rep.addText(920, 82,'Total Deuda: '+editsRepoLisAluConDeuTotal.getText(),false);
		rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),9,'helvetica','normal');
      //************************ TABLE ***************************
      rep.setTableRowProperties(20, 180, 180, 180, 'bold helvetica',0, 0, 0, 8, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
      rep.setTableCellProperties(1, 'bold helvetica', 8);
      rep.addTable('tablaRepoLisAluConDeuda',['Cedula','Apellido','Nombre','ETAPA','POS','SEC','Concepto','Mes','Fecha Venc.','Abono','Monto','Deuda'],558,104);
      rep.setTotalRowTable(24);
		rep.setHeightRow(25);
		rep.setSizeColumnArray([90,210,210,60,30,30,110,80,70,80,80,80]);
		rep.setAlignData(['center','left','left','left','left','center','left','left','center','right','right','right']);
		rep.addJsonData('tablaRepoLisAluConDeuda', 'getListadoAlumnoDeudaReporte',[0,1,2,9,10,11,3,4,5,6,7,8]);
		////////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
      rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
      rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
      //********************************************* FIN GENERACION DEL REPORTE ***********************************************
      rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.previewHTML()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	coreUpdate: function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");
		
		if (pcbRepoLisAluConDeuOrg.valid(dialogsRepoLisAluConDeuda))
			if (pcbRepoLisAluConDeuSuborg.valid(dialogsRepoLisAluConDeuda))
				if (pcbRepoLisAluConDeuPeriodo.valid(dialogsRepoLisAluConDeuda)) {
					rlx = this.getPrmConsulta(rlx, pcbRepoLisAluConDeuPeriodo, pcbRepoLisAluConDeuCarrera, editsRepoLisAluConDeuCi.hideId, calendarsRepoLisAluConDeuDesde, calendarsRepoLisAluConDeuHasta, pcbRepoLisAluConDeuConcepto);
					Tool.cnnSrv('MsjObject', 'enviarListadoAlumnoDeuda' + methodName, 'dlgWait.hide();', rlx); 
				}
	}
};