var dialogsRepoFichAlumno = new Object();
var powerComboBoxCarnAluCarrera = new Object();
var editsRepoFichAlumnoCedula = new Object();
var editsRepoFichAlumnoNombre = new Object();
var editsRepoFichAlumnoApellido = new Object();
var powerComboBoxRepoFichTipoFormato = new Object();
var imgButtonsRepoFichAlumnoBuscar = new Object();
var imgButtonsRepoFichAlumnoLimpiar = new Object();
var imgButtonsRepoFichAlumnoSalir = new Object();
var modFchAlu = new ModeloFichaAlumno();
var mwRepoFichAlumno = new Object();// minWindow

var RepoFichAlumno = {
    windowName : 'RepoFichAlumno',
    isCreate: false,
	idPeriodo: 0,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoFichAlumno.isByClean())
			this.limpiar();			
		dialogsRepoFichAlumno.show();
	},
	
    hide: function(){
        dialogsRepoFichAlumno.hide();
    },
    createMWs: function(){
    	mwRepoFichAlumno = desktop.addMinWindow('Ficha Alumno', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoFichAlumno.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsRepoFichAlumno_Init : function(){
        dialogsRepoFichAlumno.setMinimizeXY(0,0);
        dialogsRepoFichAlumno.setCenterScreen();
        dialogsRepoFichAlumno.addSpace(0,0,20);
        dialogsRepoFichAlumno.addLn(1,1,1);
		dialogsRepoFichAlumno.setHeightCell(1,1,13);
		dialogsRepoFichAlumno.addObjToDialog(editsRepoFichAlumnoCedula,2,1,24);
		editsRepoFichAlumnoCedula.setSizeEdit(149);
		dialogsRepoFichAlumno.addObjToDialog(editsRepoFichAlumnoNombre,2,1,24);
		editsRepoFichAlumnoNombre.setSizeEdit(149);
		dialogsRepoFichAlumno.addObjToDialog(editsRepoFichAlumnoApellido,2,1,24);
		editsRepoFichAlumnoApellido.setSizeEdit(149);
		dialogsRepoFichAlumno.adjAllMarginObj(2,1,15);
		dialogsRepoFichAlumno.addObjToDialog(powerComboBoxCarnAluCarrera,3,1,24);
		powerComboBoxCarnAluCarrera.setWidthCombo(364);
        dialogsRepoFichAlumno.addLn(5,1,1);
		dialogsRepoFichAlumno.setHeightCell(5,1,10);
		dialogsRepoFichAlumno.addObject(powerComboBoxRepoFichTipoFormato, 476, 65);
        powerComboBoxRepoFichTipoFormato.addOptionAndSimpleValue(null,'Ficha Vertical','fichaVertical');
        powerComboBoxRepoFichTipoFormato.addOptionAndSimpleValue(null,'Ficha Horizontal','fichaHorizontal');
        powerComboBoxRepoFichTipoFormato.addOptionAndSimpleValue(null,'Ficha En Blanco','fichaBlanco');
        dialogsRepoFichAlumno.addObjToDialog(imgButtonsRepoFichAlumnoBuscar,6,1);
        dialogsRepoFichAlumno.addObjToDialog(imgButtonsRepoFichAlumnoLimpiar,6,1);
        dialogsRepoFichAlumno.addObjToDialog(imgButtonsRepoFichAlumnoSalir,6,1);
        dialogsRepoFichAlumno.adjAllMarginObj(6,1,25);
        dialogsRepoFichAlumno.leftMarginObj(6,1,0,175); 
    },

    create : function(){
    	dialogsRepoFichAlumno = dialogs.create('dialogsRepoFichAlumno',0,0,716,105,'FICHA DEL ESTUDIANTE');
    	dialogsRepoFichAlumno.setAdjY(80);
    	editsRepoFichAlumnoCedula = edits.create('editsRepoFichAlumnoCedula','editsRepoFichAlumnoCedula','C.i. (*):',1,55,'normal');
    	editsRepoFichAlumnoCedula.setValidInteger();
      	editsRepoFichAlumnoCedula.setFieldFind(true);
      	editsRepoFichAlumnoNombre = edits.create('editsRepoFichAlumnoNombre','editsRepoFichAlumnoNombre','Nombre (*):',1,71,'normal');
      	editsRepoFichAlumnoNombre.setValidEmpty();
      	editsRepoFichAlumnoNombre.setFieldFind(true);
      	editsRepoFichAlumnoApellido = edits.create('editsRepoFichAlumnoApellido','editsRepoFichAlumnoApellido','Apellido (*):',1,70,'normal');
      	editsRepoFichAlumnoApellido.setValidEmpty();
      	editsRepoFichAlumnoApellido.setFieldFind(true);
      	powerComboBoxCarnAluCarrera = powerComboBox.create('powerComboBoxCarnAluCarrera','powerComboBoxCarnAluCarrera','Carrera:',1,55);
    	powerComboBoxCarnAluCarrera.enableReadOnlyEditor();
    	powerComboBoxCarnAluCarrera.addEmptyOption();
    	powerComboBoxCarnAluCarrera.setValidEmpty();
    	powerComboBoxRepoFichTipoFormato = powerComboBox.create('powerComboBoxRepoFichTipoFormato','powerComboBoxRepoFichTipoFormato','Tipo Ficha:',1,70);
        powerComboBoxRepoFichTipoFormato.setValidEmpty();
        powerComboBoxRepoFichTipoFormato.enableReadOnlyEditor();
        powerComboBoxRepoFichTipoFormato.addEmptyOption();
      	imgButtonsRepoFichAlumnoBuscar = imgButtons.create('imgButtonsRepoFichAlumnoBuscar','Buscar','icono_buscar.png');
      	imgButtonsRepoFichAlumnoLimpiar = imgButtons.create('imgButtonsRepoFichAlumnoLimpiar','Limpiar','limpiar.png');
      	imgButtonsRepoFichAlumnoSalir = imgButtons.create('imgButtonsRepoFichAlumnoSalir','Salir','salir.png');
    	imgButtonsRepoFichAlumnoBuscar.setDimension(90,22);
    	imgButtonsRepoFichAlumnoLimpiar.setDimension(90,22);
    	imgButtonsRepoFichAlumnoSalir.setDimension(90,22);
      	this.isCreate=true;
	},

	init : function(){
		this.create();
		this.setEvents(); 
		this.dialogsRepoFichAlumno_Init();
		this.createMWs();
	},
	
	limpiarFind : function(ix) {
		editsRepoFichAlumnoCedula.hideId = -1;
		
  		switch (ix) {
		case 1: 
			editsRepoFichAlumnoNombre.setValue("");
			editsRepoFichAlumnoApellido.setValue("");  		
			break;
		case 2: 
			editsRepoFichAlumnoCedula.setValue("");
			editsRepoFichAlumnoApellido.setValue("");  		
			break;
		default:
			editsRepoFichAlumnoCedula.setValue("");
		    editsRepoFichAlumnoNombre.setValue("");
			break;
		} 
  		Tool.rstPwrCmb(powerComboBoxCarnAluCarrera);
  	},

   	loadDataCarrInscrip : function() {
  		Tool.loadPowerComboData(dialogsRepoFichAlumno, powerComboBoxCarnAluCarrera, 0, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			powerComboBoxCarnAluCarrera.setSelectedIndex(1); 
  		}
   	},

   	buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");

    	if (editsRepoFichAlumnoCedula.getValue() != '' && editsRepoFichAlumnoNombre.getValue() != '' && editsRepoFichAlumnoApellido.getValue() != '') {
			if (powerComboBoxCarnAluCarrera.setModeReturnGetText(0).getText() == "" || powerComboBoxCarnAluCarrera.setModeReturnGetText(0).getText() == "-1") {
		  		Tool.rstPwrCmb(powerComboBoxCarnAluCarrera);
		  		rlx.add('reg', editsRepoFichAlumnoCedula);
	    		Tool.cnnSrv('MantObject', 'getCarrera', this.windowName + '.loadDataCarrInscrip()', rlx);
			}
		}
		else if (editsRepoFichAlumnoCedula.getValue() != '' || editsRepoFichAlumnoNombre.getValue() != '' || editsRepoFichAlumnoApellido.getValue() != '') {
	  		Tool.rstPwrCmb(powerComboBoxCarnAluCarrera);
        	ResuBusqueda.setObjectExtFnc(editsRepoFichAlumnoCedula, editsRepoFichAlumnoNombre, editsRepoFichAlumnoApellido, 'RepoFichAlumno.buscar()');
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsRepoFichAlumnoCedula, editsRepoFichAlumnoCedula, editsRepoFichAlumnoNombre, editsRepoFichAlumnoNombre, editsRepoFichAlumnoApellido, editsRepoFichAlumnoApellido);
		}
		else {
			Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},
	
   	loadDataCarrInscrip : function() {
  		Tool.loadPowerComboData(dialogsRepoFichAlumno, powerComboBoxCarnAluCarrera, 0, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			powerComboBoxCarnAluCarrera.setSelectedIndex(1); 
  		}
   	},

   	loadDataPers : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		editsRepoFichAlumnoCedula.readOnly(true);
  	    editsRepoFichAlumnoNombre.readOnly(true);
  	    editsRepoFichAlumnoApellido.readOnly(true);
  	    editsRepoFichAlumnoCedula.onEnter("");
  		editsRepoFichAlumnoCedula.onChange("");
  		editsRepoFichAlumnoNombre.onEnter("");
  		editsRepoFichAlumnoNombre.onChange("");
  		editsRepoFichAlumnoApellido.onEnter("");
  		editsRepoFichAlumnoApellido.onChange("");
    	if (json('getPermiso').data[0] != 'ACTIVO') {
  			editsRepoFichAlumnoCedula.setValue(json('getDatoPersona').data[0]);
  	  		editsRepoFichAlumnoNombre.setValue(json('getDatoPersona').data[1]);
  	  		editsRepoFichAlumnoApellido.setValue(json('getDatoPersona').data[2]);
  	  		editsRepoFichAlumnoCedula.hideId = json('getDatoPersona').data[3];
  	  		rlx.add('reg', editsRepoFichAlumnoCedula);
  			Tool.cnnSrv('MantObject', 'getCarrera', this.windowName + '.loadDataCarrInscrip()', rlx);
  		}
    	else {
  	    	editsRepoFichAlumnoCedula.readOnly(false);
  	    	editsRepoFichAlumnoNombre.readOnly(false);
  	    	editsRepoFichAlumnoApellido.readOnly(false);
  		  	editsRepoFichAlumnoCedula.onEnter(this.windowName + ".buscar()");
  		  	editsRepoFichAlumnoCedula.onChange(this.windowName + ".limpiarFind(1)");
  		  	editsRepoFichAlumnoNombre.onEnter(this.windowName + ".buscar()");
  		  	editsRepoFichAlumnoNombre.onChange(this.windowName + ".limpiarFind(2)");
  		  	editsRepoFichAlumnoApellido.onEnter(this.windowName + ".buscar()");
  		  	editsRepoFichAlumnoApellido.onChange(this.windowName + ".limpiarFind(3)");
    	}
        dialogsRepoFichAlumno.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    limpiar : function() {
    	editsRepoFichAlumnoCedula.hideId = -1;
  		editsRepoFichAlumnoCedula.setValue(""); 
  		editsRepoFichAlumnoNombre.setValue(""); 
  		editsRepoFichAlumnoApellido.setValue(""); 
  		Tool.rstPwrCmb(powerComboBoxCarnAluCarrera);
  		
  		powerComboBoxRepoFichTipoFormato.setSelectedIndex(0);
  		
  		dialogsRepoFichAlumno.setMsg("");
		Tool.cnnSrv('InscripObject', 'getCargarPersona', this.windowName + '.loadDataPers()');
	},

	setEvents: function(){
		editsRepoFichAlumnoCedula.onEnter(this.windowName + ".buscar()");
  		editsRepoFichAlumnoCedula.onChange(this.windowName + ".limpiarFind(1)");
  		editsRepoFichAlumnoCedula.onClick(this.windowName + ".limpiarFind(1)");
  		editsRepoFichAlumnoNombre.onEnter(this.windowName + ".buscar()");
  		editsRepoFichAlumnoNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsRepoFichAlumnoNombre.onClick(this.windowName + ".limpiarFind(2)");
  		editsRepoFichAlumnoApellido.onEnter(this.windowName + ".buscar()");
  		editsRepoFichAlumnoApellido.onChange(this.windowName + ".limpiarFind(3)");
  		editsRepoFichAlumnoApellido.onClick(this.windowName + ".limpiarFind(3)");
  		powerComboBoxRepoFichTipoFormato.onChange(this.windowName + ".reporteFicBlanco()");
    	imgButtonsRepoFichAlumnoBuscar.onClick(this.windowName + ".buscar()");
    	imgButtonsRepoFichAlumnoLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsRepoFichAlumnoSalir.onClick('dialogsRepoFichAlumno.close()');
    },
	
	reporteFicBlanco : function() {
		if(powerComboBoxRepoFichTipoFormato.getText()=='fichaBlanco')
			modFchAlu.reporteBlanco();
		else 
			this.coreUpdate(); 
	},
	
	reporte : function() {
		if(powerComboBoxRepoFichTipoFormato.getText()=='fichaVertical')
			modFchAlu.reporteFicVertical();	
		else if(powerComboBoxRepoFichTipoFormato.getText()=='fichaHorizontal')
			modFchAlu.reporteFicHorizontal();
		
		powerComboBoxRepoFichTipoFormato.setSelectedIndex(0);
	},
	
	limpiar : function() {
	    editsRepoFichAlumnoCedula.setValue("");
        editsRepoFichAlumnoNombre.setValue("");
        editsRepoFichAlumnoApellido.setValue("");
		Tool.rstPwrCmb(powerComboBoxCarnAluCarrera);
        powerComboBoxRepoFichTipoFormato.setSelectedIndex(0);
        dialogsRepoFichAlumno.setMsg("");
	},
	
	coreUpdate: function(){
        var rlx = xmlStructs.createRecordList("rlx");
		if (powerComboBoxCarnAluCarrera.valid(dialogsRepoFichAlumno))
				if (editsRepoFichAlumnoCedula.valid(dialogsRepoFichAlumno))
					if (editsRepoFichAlumnoNombre.valid(dialogsRepoFichAlumno))
						if (editsRepoFichAlumnoApellido.valid(dialogsRepoFichAlumno)) 
							if (powerComboBoxRepoFichTipoFormato.valid(dialogsRepoFichAlumno)){
								rlx.addInt('reg', editsRepoFichAlumnoCedula.hideId);
								rlx.add('reg', powerComboBoxCarnAluCarrera);
								rlx.addInt('reg', editsRepoFichAlumnoCedula.hideId);
								rlx.add('reg', powerComboBoxCarnAluCarrera);
								Tool.cnnSrv('ReportObject', 'getFicha', this.windowName + '.reporte()', rlx);
							}
    }
};
