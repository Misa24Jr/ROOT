var dialogsRepoHorAlumno = new Object();
var powerComboBoxRepoHorAluCarrera = new Object();
var editsRepoHorAluCedula = new Object();
var editsRepoHorAluNombre = new Object();
var editsRepoHorAluApellido = new Object();
var powerComboBoxRepoHorAluPeriodo = new Object();
var imgButtonsRepoHorAluReporte = new Object();
var imgButtonsRepoHorAluSalir = new Object();
var mw_RepoHorAlumno = new Object();// minWindow
       
var RepoHorAlumno = {
    windowName : 'RepoHorAlumno',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoHorAlumno.isByClean())
			this.limpiar();			
		dialogsRepoHorAlumno.show();
	},
	
    hide: function(){
        dialogsRepoHorAlumno.hide();
    },
    
    createMWs: function(){
        mwRepoHorAlumno = desktop.addMinWindow('R.H.Alumno', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoHorAlumno.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsRepoHorAlumno_Init : function(){
        dialogsRepoHorAlumno.setMinimizeXY(0,0);
        dialogsRepoHorAlumno.setCenterScreen();
        dialogsRepoHorAlumno.addSpace(0,0,20);          
        dialogsRepoHorAlumno.addLn(1,1,1);
		dialogsRepoHorAlumno.setHeightCell(1,1,13);		
		dialogsRepoHorAlumno.addObject(editsRepoHorAluCedula,25,40);		
		editsRepoHorAluCedula.setSizeEdit(200);
		dialogsRepoHorAlumno.addObject(editsRepoHorAluNombre,25,75);		
		editsRepoHorAluNombre.setSizeEdit(200);
		dialogsRepoHorAlumno.addObject(editsRepoHorAluApellido,25,110);		
		editsRepoHorAluApellido.setSizeEdit(200);		
		dialogsRepoHorAlumno.addObject(powerComboBoxRepoHorAluCarrera,25,145);		
		powerComboBoxRepoHorAluCarrera.setWidthCombo(190);
		dialogsRepoHorAlumno.addObject(powerComboBoxRepoHorAluPeriodo,25,180);		
		powerComboBoxRepoHorAluPeriodo.setWidthCombo(190);		
        dialogsRepoHorAlumno.addObject(imgButtonsRepoHorAluReporte,25,225);
        imgButtonsRepoHorAluReporte.setDimension(122,22);
		dialogsRepoHorAlumno.addObject(imgButtonsRepoHorAluSalir,184,225);
        imgButtonsRepoHorAluSalir.setDimension(122,22);      
    },

    create : function(){
    	dialogsRepoHorAlumno = dialogs.create('dialogsRepoHorAlumno',0,0,333,240,'HORARIO DEL ALUMNO');
    	dialogsRepoHorAlumno.setAdjY(70);
    	editsRepoHorAluCedula = edits.create('editsRepoHorAluCedula','editsRepoHorAluCedula','C.i. (*):',1,80,'normal');
    	editsRepoHorAluCedula.setValidInteger();
      	editsRepoHorAluCedula.setFieldFind(true);
      	editsRepoHorAluNombre = edits.create('editsRepoHorAluNombre','editsRepoHorAluNombre','Nombre (*):',1,80,'normal');
      	editsRepoHorAluNombre.setValidEmpty();
      	editsRepoHorAluNombre.setFieldFind(true);
      	editsRepoHorAluApellido = edits.create('editsRepoHorAluApellido','editsRepoHorAluApellido','Apellido (*):',1,80,'normal');
      	editsRepoHorAluApellido.setValidEmpty();
      	editsRepoHorAluApellido.setFieldFind(true);
      	powerComboBoxRepoHorAluCarrera = powerComboBox.create('powerComboBoxRepoHorAluCarrera','powerComboBoxRepoHorAluCarrera','Carrera:',1,76);
    	powerComboBoxRepoHorAluCarrera.enableReadOnlyEditor();
    	powerComboBoxRepoHorAluCarrera.addEmptyOption();
    	powerComboBoxRepoHorAluCarrera.setValidEmpty();
    	powerComboBoxRepoHorAluPeriodo = powerComboBox.create('powerComboBoxRepoHorAluPeriodo','powerComboBoxRepoHorAluPeriodo','Periodo:',1,76);
    	powerComboBoxRepoHorAluPeriodo.enableReadOnlyEditor();
      	powerComboBoxRepoHorAluPeriodo.addEmptyOption();
      	powerComboBoxRepoHorAluPeriodo.setValidEmpty();
      	imgButtonsRepoHorAluReporte = imgButtons.create('imgButtonsRepoHorAluReporte','Reporte','print.png');
      	imgButtonsRepoHorAluSalir = imgButtons.create('imgButtonsRepoHorAluSalir','Salir','salir.png');
      	this.isCreate=true;
	},

	init : function(){
		this.create();
		this.setEvents(); 
		this.dialogsRepoHorAlumno_Init();
		this.createMWs();
	},
	
	limpiarFind : function(ix) {
		editsRepoHorAluCedula.hideId = -1;
		
  		switch (ix) {
		case 1: 
			editsRepoHorAluNombre.setValue("");
			editsRepoHorAluApellido.setValue("");  		
			break;
		case 2: 
			editsRepoHorAluCedula.setValue("");
			editsRepoHorAluApellido.setValue("");  		
			break;
		default:
			editsRepoHorAluCedula.setValue("");
		    editsRepoHorAluNombre.setValue("");
			break;
		} 
  		Tool.rstPwrCmb(powerComboBoxRepoHorAluCarrera);
  		powerComboBoxRepoHorAluPeriodo.setSelectedIndex(0);
  	},

   	loadDataCarrInscrip : function() {
  		Tool.loadPowerComboData(dialogsRepoHorAlumno, powerComboBoxRepoHorAluCarrera, -1, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			powerComboBoxRepoHorAluCarrera.setSelectedIndex(1); 
  			this.buscarPeriodo(); 
  		}
   	},

   	buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");

    	if (editsRepoHorAluCedula.getValue() != '' && editsRepoHorAluNombre.getValue() != '' && editsRepoHorAluApellido.getValue() != '') {
			if (powerComboBoxRepoHorAluCarrera.setModeReturnGetText(0).getText() == "" || powerComboBoxRepoHorAluCarrera.setModeReturnGetText(0).getText() == "-1") {
		  		Tool.rstPwrCmb(powerComboBoxRepoHorAluCarrera);
		  		powerComboBoxRepoHorAluPeriodo.setSelectedIndex(0);
		  		rlx.add('reg', editsRepoHorAluCedula);
	    		Tool.cnnSrv('MantObject', 'getCarrera', this.windowName + '.loadDataCarrInscrip()', rlx);
			}
			else {
	  			this.buscarPeriodo(); 
			}
		}
		else if (editsRepoHorAluCedula.getValue() != '' || editsRepoHorAluNombre.getValue() != '' || editsRepoHorAluApellido.getValue() != '') {
	  		Tool.rstPwrCmb(powerComboBoxRepoHorAluCarrera);
	  		powerComboBoxRepoHorAluPeriodo.setSelectedIndex(0);
        	ResuBusqueda.setObjectExtFnc(editsRepoHorAluCedula, editsRepoHorAluNombre, editsRepoHorAluApellido, 'RepoHorAlumno.buscar()');
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsRepoHorAluCedula, editsRepoHorAluCedula, editsRepoHorAluNombre, editsRepoHorAluNombre, editsRepoHorAluApellido, editsRepoHorAluApellido);
		}
		else {
			Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},
	
	autoFindHorario : function() {
		powerComboBoxRepoHorAluPeriodo.setSelectedIndex(1);
		this.coreUpdate();
	},
	
    buscarPeriodo : function(element) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (powerComboBoxRepoHorAluCarrera.getOption() != "") {
			Tool.getPowerComboDataFnc(this.windowName + '.autoFindHorario()', 'MantObject', 'getPeriodoXNivelAcad', dialogsRepoHorAlumno, powerComboBoxRepoHorAluPeriodo, 0, 1, powerComboBoxRepoHorAluCarrera.setModeReturnGetText(2));
		}
	},
	
   	loadDataCarrInscrip : function() {
  		Tool.loadPowerComboData(dialogsRepoHorAlumno, powerComboBoxRepoHorAluCarrera, -1, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			powerComboBoxRepoHorAluCarrera.setSelectedIndex(1); 
  			this.buscarPeriodo(); 
  		}
   	},

   	loadDataPers : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		editsRepoHorAluCedula.readOnly(true);
  	    editsRepoHorAluNombre.readOnly(true);
  	    editsRepoHorAluApellido.readOnly(true);
  	    editsRepoHorAluCedula.onEnter("");
  		editsRepoHorAluCedula.onChange("");
  		editsRepoHorAluNombre.onEnter("");
  		editsRepoHorAluNombre.onChange("");
  		editsRepoHorAluApellido.onEnter("");
  		editsRepoHorAluApellido.onChange("");
    	if (json('getPermiso').data[0] != 'ACTIVO') {
  			editsRepoHorAluCedula.setValue(json('getDatoPersona').data[0]);
  	  		editsRepoHorAluNombre.setValue(json('getDatoPersona').data[1]);
  	  		editsRepoHorAluApellido.setValue(json('getDatoPersona').data[2]);
  	  		editsRepoHorAluCedula.hideId = json('getDatoPersona').data[3];
  	  		rlx.add('reg', editsRepoHorAluCedula);
  			Tool.cnnSrv('MantObject', 'getCarrera', this.windowName + '.loadDataCarrInscrip()', rlx);
  		}
    	else {
  	    	editsRepoHorAluCedula.readOnly(false);
  	    	editsRepoHorAluNombre.readOnly(false);
  	    	editsRepoHorAluApellido.readOnly(false);
  		  	editsRepoHorAluCedula.onEnter(this.windowName + ".buscar()");
  		  	editsRepoHorAluCedula.onChange(this.windowName + ".limpiarFind(1)");
  		  	editsRepoHorAluNombre.onEnter(this.windowName + ".buscar()");
  		  	editsRepoHorAluNombre.onChange(this.windowName + ".limpiarFind(2)");
  		  	editsRepoHorAluApellido.onEnter(this.windowName + ".buscar()");
  		  	editsRepoHorAluApellido.onChange(this.windowName + ".limpiarFind(3)");
    	}
        dialogsRepoHorAlumno.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    limpiar : function() {
    	editsRepoHorAluCedula.hideId = -1;
  		editsRepoHorAluCedula.setValue(""); 
  		editsRepoHorAluNombre.setValue(""); 
  		editsRepoHorAluApellido.setValue(""); 
  		Tool.rstPwrCmb(powerComboBoxRepoHorAluCarrera);
  		Tool.rstPwrCmb(powerComboBoxRepoHorAluPeriodo);
  		dialogsRepoHorAlumno.setMsg("");
		Tool.cnnSrv('InscripObject', 'getCargarPersona', this.windowName + '.loadDataPers()');
	},

	setEvents: function() {
		editsRepoHorAluCedula.onEnter(this.windowName + ".buscar()");
  		editsRepoHorAluCedula.onChange(this.windowName + ".limpiarFind(1)");
  		editsRepoHorAluCedula.onClick(this.windowName + ".limpiarFind(1)");
  		editsRepoHorAluNombre.onEnter(this.windowName + ".buscar()");
  		editsRepoHorAluNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsRepoHorAluNombre.onClick(this.windowName + ".limpiarFind(2)");
  		editsRepoHorAluApellido.onEnter(this.windowName + ".buscar()");
  		editsRepoHorAluApellido.onChange(this.windowName + ".limpiarFind(3)");
  		editsRepoHorAluApellido.onClick(this.windowName + ".limpiarFind(3)");
    	imgButtonsRepoHorAluReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsRepoHorAluSalir.onClick('dialogsRepoHorAlumno.close()');
		powerComboBoxRepoHorAluCarrera.onChange(this.windowName + ".buscarPeriodo()");
    },
	
	reporte : function() {
		var ji = json("getHorarioAlumno");
		var ji2 = json("getHorarioXTipo");	
		var h = new Horario({});
		var arrObject = [ { data: powerComboBoxRepoHorAluPeriodo.getOption(), title: "PERIODO: ", x: 2, y: 2 }, 
						  { data: powerComboBoxRepoHorAluCarrera.getOption(), title: "CARRERA: ", x: 220, y: 2 },
						  { data: editsRepoHorAluCedula.getText(), title: "CEDULA: ", x: 2, y: 20 },
						  { data: (editsRepoHorAluNombre.getText() + ' ' + editsRepoHorAluApellido.getText()), title: "NOMBRE: ", x: 226, y: 20 }
		];
		h.setDataHeadWithObject(arrObject);	
		h.setJson(ji,ji2);
		h.show();
	},
	
	coreUpdate: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (powerComboBoxRepoHorAluCarrera.valid(dialogsRepoHorAlumno))
			if (powerComboBoxRepoHorAluPeriodo.valid(dialogsRepoHorAlumno))
				if (editsRepoHorAluCedula.valid(dialogsRepoHorAlumno))
					if (editsRepoHorAluNombre.valid(dialogsRepoHorAlumno))
						if (editsRepoHorAluApellido.valid(dialogsRepoHorAlumno)) {
							rlx.addInt('reg', editsRepoHorAluCedula.hideId);
							rlx.add('reg', powerComboBoxRepoHorAluPeriodo);
							rlx.add('reg', powerComboBoxRepoHorAluCarrera.setModeReturnGetText(0));
							Tool.cnnSrv('ReportObject', 'getHorarioAlumno', this.windowName + '.reporte()', rlx);
						}
    }
};
