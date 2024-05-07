var dialogsRepoHorProfesor = new Object(); 
var pcbRepHorProOrg = new Object();
var pcbRepHorProSuborg = new Object();
var pcbRepHorProPrograma = new Object(); 
var editsRepoHorProCi = new Object();
var editsRepoHorProNombre = new Object();
var editsRepoHorProApellido = new Object();
var pcbRepoHorProPeriodo = new Object();
var imgButtonsReptHorProReporte = new Object();
var imgButtonsReptHorProSalir = new Object();
var mw_RepoHorProfesor = new Object();// minWindow
var rep = new Object();

var RepoHorProfesor = {
    windowName: 'RepoHorProfesor',
    isCreate: false,
    
    show: function() {
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoHorProfesor.isByClean()) {
        	Tool.rstPwrCmb(pcbRepHorProOrg);
        	Tool.rstPwrCmb(pcbRepHorProSuborg);
        	Tool.rstPwrCmb(pcbRepHorProPrograma);
        	Tool.rstPwrCmb(pcbRepoHorProPeriodo);
        	editsRepoHorProCi.setValue("");
        	editsRepoHorProNombre.setValue("");
        	editsRepoHorProApellido.setValue("");
            Tool.cnnSrv('MantObject', 'getDispProfesorInit', this.windowName + '.loadDataInit()');
        }
        dialogsRepoHorProfesor.show();
    },
            
    loadDataInit: function() {
    	Tool.loadPowerComboData(dialogsRepoHorProfesor, pcbRepHorProOrg, 0, 1, json('getData'));
        Tool.getContext(dialogsRepoHorProfesor, pcbRepHorProOrg, pcbRepHorProSuborg, pcbRepHorProPrograma, this.windowName + '.loadPeriodo()');
        dialogsRepoHorProfesor.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    loadPeriodo: function() {
        Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoHorProfesor, pcbRepoHorProPeriodo, 0, 1, pcbRepHorProPrograma.setModeReturnGetText(5));
    },
    
    hide: function(){
        dialogsRepoHorProfesor.hide();
    },
    
    createMWs: function(){
        mwRepoHorProfesor = desktop.addMinWindow('R.H. Profesor ', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoHorProfesor.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRepoHorProfesor_Init : function(){
        dialogsRepoHorProfesor.setMinimizeXY(0,0);
        dialogsRepoHorProfesor.setCenterScreen();
        dialogsRepoHorProfesor.addSpace(0,0,20);
        dialogsRepoHorProfesor.addLn(1,1,1);
		dialogsRepoHorProfesor.setHeightCell(1,1,10);
		dialogsRepoHorProfesor.addObjToDialog(pcbRepHorProOrg,2,1,24);
        dialogsRepoHorProfesor.addObjToDialog(pcbRepHorProSuborg,2,1,24);
		dialogsRepoHorProfesor.adjAllMarginObj(2,1,15);
        dialogsRepoHorProfesor.addObjToDialog(pcbRepHorProPrograma,3,1,24);
		dialogsRepoHorProfesor.addObjToDialog(pcbRepoHorProPeriodo,3,1,24);
		dialogsRepoHorProfesor.adjAllMarginObj(3,1,15);
		dialogsRepoHorProfesor.addObjToDialog(editsRepoHorProCi,4,1,24);
        dialogsRepoHorProfesor.addObjToDialog(editsRepoHorProNombre,4,1,24);
        dialogsRepoHorProfesor.addObjToDialog(editsRepoHorProApellido,4,1,24);
		dialogsRepoHorProfesor.adjAllMarginObj(4,1,15);
        dialogsRepoHorProfesor.addLn(5,1,1);
		dialogsRepoHorProfesor.setHeightCell(5,1,6);
        dialogsRepoHorProfesor.addObjToDialog(imgButtonsReptHorProReporte,6,1);
        dialogsRepoHorProfesor.addObjToDialog(imgButtonsReptHorProSalir,6,1);
        dialogsRepoHorProfesor.adjAllMarginObj(6,1,30);
        dialogsRepoHorProfesor.leftMarginObj(6,1,0,294);
    },
 
    create : function(){
    	dialogsRepoHorProfesor = dialogs.create('dialogsRepoHorProfesor',0,0,840,120,'HORARIO DEL PROFESOR');
    	dialogsRepoHorProfesor.setAdjY(70);
    	pcbRepHorProOrg = powerComboBox.create('pcbRepHorProOrg','pcbRepHorProOrg','Organización (+):',1,121);
    	pcbRepHorProOrg.enableReadOnlyEditor();
    	pcbRepHorProOrg.addEmptyOption();
    	pcbRepHorProOrg.setValidEmpty();
    	pcbRepHorProSuborg = powerComboBox.create('pcbRepHorProSuborg','pcbRepHorProSuborg','Suborganización (^):',1,122);
    	pcbRepHorProSuborg.enableReadOnlyEditor();
    	pcbRepHorProSuborg.addEmptyOption();
    	pcbRepHorProSuborg.setValidEmpty();
    	pcbRepHorProSuborg.setWidthCombo(377);
    	pcbRepHorProPrograma = powerComboBox.create('pcbRepHorProPrograma','pcbRepHorProPrograma','Carrera (^):',1,121);
    	pcbRepHorProPrograma.enableReadOnlyEditor();
    	pcbRepHorProPrograma.addEmptyOption();
    	pcbRepHorProPrograma.setValidEmpty();
    	pcbRepHorProPrograma.setWidthCombo(415);
    	editsRepoHorProCi = edits.create('editsRepoHorProCi','editsRepoHorProCi','Ci. (*):',1,121);
    	editsRepoHorProCi.setValidEmpty();
    	editsRepoHorProCi.setValidInteger();
    	editsRepoHorProCi.setFieldFind(true);
    	editsRepoHorProCi.setSizeEdit(149);
    	editsRepoHorProNombre = edits.create('editsRepoHorProNombre','editsRepoHorProNombre','Nombre (*):',1,122);
    	editsRepoHorProNombre.setValidEmpty();
    	editsRepoHorProNombre.setFieldFind(true);
    	editsRepoHorProNombre.setSizeEdit(149);
    	editsRepoHorProApellido = edits.create('editsRepoHorProApellido','editsRepoHorProApellido','Apellido (*):',1,84);
    	editsRepoHorProApellido.setValidEmpty();
    	editsRepoHorProApellido.setFieldFind(true);
    	editsRepoHorProApellido.setSizeEdit(149);
    	pcbRepoHorProPeriodo = powerComboBox.create('pcbRepoHorProPeriodo','pcbRepoHorProPeriodo','Periodo (^):',1,84);
    	pcbRepoHorProPeriodo.enableReadOnlyEditor();
    	pcbRepoHorProPeriodo.addEmptyOption();
    	pcbRepoHorProPeriodo.setValidEmpty();
    	imgButtonsReptHorProReporte = imgButtons.create('imgButtonsReptHorProReporte','Reporte','print.png');
    	imgButtonsReptHorProSalir = imgButtons.create('imgButtonsReptHorProSalir','Salir','salir.png');
    	imgButtonsReptHorProReporte.setDimension(90,22);
    	imgButtonsReptHorProSalir.setDimension(90,22);
    },

  	init : function(){
  		this.create();
  		this.setEvents();
  		this.dialogsRepoHorProfesor_Init();
  		this.createMWs();
  	},

  	limpiarFind : function(ix) {
  		editsRepoHorProCi.hideId = -1;
  		
  		switch (ix) {
		case 1: 
			editsRepoHorProNombre.setValue("");
			editsRepoHorProApellido.setValue("");  		
			break;
		case 2: 
			editsRepoHorProCi.setValue("");
			editsRepoHorProApellido.setValue("");  		
			break;
		default:
			editsRepoHorProCi.setValue("");
		editsRepoHorProNombre.setValue("");
			break;
		} 
  	},

	buscar: function() {
		if (editsRepoHorProCi.getValue() != '' || editsRepoHorProNombre.getValue() != '' || editsRepoHorProApellido.getValue() != '') {
        	ResuBusqueda.setObjectExtFnc(editsRepoHorProCi, editsRepoHorProNombre, editsRepoHorProApellido);
        	ResuBusqueda.setExtFnc(this.windowName + ".coreUpdate()");
			Tool.getGridData('MantObject', 'getMantPersProf', dialogsRepoHorProfesor, gridsResuBusqueda, 'ResuBusqueda', editsRepoHorProCi, editsRepoHorProCi, editsRepoHorProNombre, editsRepoHorProNombre, editsRepoHorProApellido, editsRepoHorProApellido);
		}
		else {
			Alert.show('Debe ingresar al menos: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
	},
  	
  	setEvents: function(){
  		editsRepoHorProCi.onEnter(this.windowName + ".buscar()");
  		editsRepoHorProCi.onChange(this.windowName + ".limpiarFind(1)");
  		editsRepoHorProNombre.onEnter(this.windowName + ".buscar()");
  		editsRepoHorProNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsRepoHorProApellido.onEnter(this.windowName + ".buscar()");
  		editsRepoHorProApellido.onChange(this.windowName + ".limpiarFind(3)");
		pcbRepHorProOrg.onChange(this.windowName + ".resetElements('org')");
		pcbRepHorProSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbRepHorProPrograma.onChange(this.windowName + ".resetElements('carr')");
		imgButtonsReptHorProReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsReptHorProSalir.onClick("dialogsRepoHorProfesor.close()");
    },
    
    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(pcbRepHorProSuborg);
	  		Tool.rstPwrCmb(pcbRepHorProPrograma);
	  		Tool.rstPwrCmb(pcbRepoHorProPeriodo);
	    	if (pcbRepHorProOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoHorProfesor, pcbRepHorProSuborg, 1, 2, pcbRepHorProOrg);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbRepHorProPrograma);
	  		Tool.rstPwrCmb(pcbRepoHorProPeriodo);
	    	if (pcbRepHorProSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoHorProfesor, pcbRepHorProPrograma, -1, 3, pcbRepHorProSuborg);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbRepoHorProPeriodo);
	    	if (pcbRepHorProPrograma.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoHorProfesor, pcbRepoHorProPeriodo, 0, 1, pcbRepHorProPrograma.setModeReturnGetText(5));
		}
	},
	
	reporte : function(){
		var jaux = json("getRepoHorarioProfesor");
        var ji = json("getRepoHorarioProfesor");
		var ji2 = json("getHorarioXTipo");
		for(var p = 0; p < ji.data[0].length; p++) {
			var aux = jaux.data[0][p];
			ji.data[0][p] = jaux.data[2][p];
			ji.data[2][p] = jaux.data[1][p];
			ji.data[1][p] = jaux.data[3][p];
			ji.data[3][p] = aux;
            ji.data[7][p] = jaux.data[7][p];
            ji.data[4][p] = jaux.data[4][p];
		}
		var h = new Horario({ heightBlock: 120, prof: false});
		var arrObject = [ { data: pcbRepoHorProPeriodo.getOption(), title: "PERIODO: ", x: 2, y: 2 },
						  { data: editsRepoHorProCi.getText(), title: "C.I.: ", x: 282, y: 2 },
						  { data: (editsRepoHorProNombre.getText()+" "+editsRepoHorProApellido.getText()), title: "NOMBRE: ", x: 7, y: 20 }
		];
		h.setDataHeadWithObject(arrObject);
		h.setJson(ji,ji2);
		h.show();
	},
	
	coreUpdate: function(methodName) {
        var rlx = xmlStructs.createRecordList("rlx");
	  
        if (pcbRepoHorProPeriodo.valid(dialogsRepoHorProfesor))
			if (pcbRepHorProPrograma.valid(dialogsRepoHorProfesor))
				if (editsRepoHorProCi.valid(dialogsRepoHorProfesor))
					if (editsRepoHorProNombre.valid(dialogsRepoHorProfesor))
						if (editsRepoHorProApellido.valid(dialogsRepoHorProfesor)) {
							rlx.add('reg', pcbRepoHorProPeriodo);
							rlx.addInt('reg', editsRepoHorProCi.hideId);
							rlx.add('reg', pcbRepHorProPrograma.setModeReturnGetText(5));
							rlx.add('reg', pcbRepHorProPrograma.setModeReturnGetText(2));
							Tool.cnnSrv('ReportObject', 'getRepoHorarioProfesor', this.windowName + '.reporte()', rlx);
						}
	}
}