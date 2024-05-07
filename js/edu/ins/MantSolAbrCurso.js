var dialogsMantSolAbrCurso = new Object();
var editsMantSolAbrCurCedula = new Object();
var editsMantMatDicNombre = new Object();
var editsMantSolAbrCurApellido = new Object();
var powerComboBoxMantSolAbrCurCarrera = new Object();
var powerComboBoxMantSolAbrCurMateria = new Object();
var imgButtonsMantSolAbrCurSolicitar = new Object();
var imgButtonsMantSolAbrCurLimpiar = new Object();
var imgButtonsMantSolAbrCurSalir = new Object();
var mwMantSolAbrCurso = new Object();// minWindow

var MantSolAbrCurso = {
    windowName: 'MantSolAbrCurso',
    isCreate: false,
	
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsMantSolAbrCurso.isByClean()) 
            this.limpiar();
        dialogsMantSolAbrCurso.show();
    },
    
    hide: function(){
        dialogsMantSolAbrCurso.hide();
    },
    
    createMWs: function(){
        mwMantSolAbrCurso = desktop.addMinWindow('S.A.Curso', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantSolAbrCurso.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsMantSolAbrCurso_Init: function(){
        dialogsMantSolAbrCurso.setMinimizeXY(0, 0);
        dialogsMantSolAbrCurso.setCenterScreen();
        dialogsMantSolAbrCurso.addSpace(1, 0, 20);
        dialogsMantSolAbrCurso.addLn(1, 1, 1);
		dialogsMantSolAbrCurso.setHeightCell(1,1,10);  
		dialogsMantSolAbrCurso.addObjToDialog(editsMantSolAbrCurCedula, 2, 1,24);
        editsMantSolAbrCurCedula.setSizeEdit(149);
        dialogsMantSolAbrCurso.addObjToDialog(editsMantSolAbrCurNombre, 2, 1,24);
        editsMantSolAbrCurNombre.setSizeEdit(149);
		editsMantSolAbrCurNombre.setMaxLength(50);
        dialogsMantSolAbrCurso.addObjToDialog(editsMantSolAbrCurApellido, 2, 1,24);
        editsMantSolAbrCurApellido.setSizeEdit(149);
		editsMantSolAbrCurApellido.setMaxLength(50);
        dialogsMantSolAbrCurso.adjAllMarginObj(2, 1, 10);
        dialogsMantSolAbrCurso.addObjToDialog(powerComboBoxMantSolAbrCurCarrera, 3, 1,24);
        powerComboBoxMantSolAbrCurCarrera.setWidthCombo(564);
        dialogsMantSolAbrCurso.adjAllMarginObj(3, 1, 10);
        dialogsMantSolAbrCurso.addObjToDialog(powerComboBoxMantSolAbrCurMateria, 4, 1,24);
		powerComboBoxMantSolAbrCurMateria.setWidthCombo(564);
        dialogsMantSolAbrCurso.addLn(5, 1, 1);
		dialogsMantSolAbrCurso.setHeightCell(5,1,10);  
        dialogsMantSolAbrCurso.addObjToDialog(imgButtonsMantSolAbrCurSolicitar, 8, 1);
        dialogsMantSolAbrCurso.addObjToDialog(imgButtonsMantSolAbrCurLimpiar, 8, 1);
        dialogsMantSolAbrCurso.addObjToDialog(imgButtonsMantSolAbrCurSalir, 8, 1);
        imgButtonsMantSolAbrCurSolicitar.setDimension(90, 22);
        imgButtonsMantSolAbrCurLimpiar.setDimension(90, 22);
        imgButtonsMantSolAbrCurSalir.setDimension(90, 22);
        dialogsMantSolAbrCurso.adjAllMarginObj(8, 1, 30);
        dialogsMantSolAbrCurso.leftMarginObj(8, 1, 0, 163);
        editsMantSolAbrCurCedula.readOnly(true);
		editsMantSolAbrCurNombre.readOnly(true);
		editsMantSolAbrCurApellido.readOnly(true);
    },
	
    create: function(){
        dialogsMantSolAbrCurso = dialogs.create('dialogsMantSolAbrCurso', 0, 0, 700, 127, 'SOLICITAR ABRIR UN CURSO');
        dialogsMantSolAbrCurso.setAdjY(60);
        editsMantSolAbrCurCedula = edits.create('editsMantSolAbrCurCedula', 'editsMantSolAbrCurCedula', 'C.i. :', 1,73, 'normal');//    
        editsMantSolAbrCurCedula.setValidInteger();
        editsMantSolAbrCurCedula.setFieldFind(true);
        editsMantSolAbrCurNombre = edits.create('editsMantSolAbrCurNombre', 'editsMantSolAbrCurNombre', 'Nombre:', 1,58, 'normal');
        editsMantSolAbrCurNombre.setValidEmpty();
		editsMantSolAbrCurNombre.setFieldFind(true);
        editsMantSolAbrCurApellido = edits.create('editsMantSolAbrCurApellido', 'editsMantSolAbrCurApellido', 'Apellido:', 1,58, 'normal');
        editsMantSolAbrCurApellido.setValidEmpty();
		editsMantSolAbrCurApellido.setFieldFind(true);
        powerComboBoxMantSolAbrCurCarrera = powerComboBox.create('powerComboBoxMantSolAbrCurCarrera', 'powerComboBoxMantSolAbrCurCarrera', 'Carrera (^):', 1,73);
        powerComboBoxMantSolAbrCurCarrera.enableReadOnlyEditor();
        powerComboBoxMantSolAbrCurCarrera.addEmptyOption();
        powerComboBoxMantSolAbrCurCarrera.setValidEmpty();
        powerComboBoxMantSolAbrCurCarrera.enableOnChangeToEmptyOption();
        powerComboBoxMantSolAbrCurMateria = powerComboBox.create('powerComboBoxMantSolAbrCurMateria', 'powerComboBoxMantSolAbrCurMateria', 'Materia (^):', 1,73);
        powerComboBoxMantSolAbrCurMateria.enableReadOnlyEditor();
        powerComboBoxMantSolAbrCurMateria.addEmptyOption();
        powerComboBoxMantSolAbrCurMateria.setValidEmpty();
		powerComboBoxMantSolAbrCurMateria.setDataType('string');
		powerComboBoxMantSolAbrCurMateria.setFieldFind(true);
        imgButtonsMantSolAbrCurSolicitar = imgButtons.create('imgButtonsMantSolAbrCurSolicitar', 'Solicitar', 'ok.png');
        imgButtonsMantSolAbrCurLimpiar = imgButtons.create('imgButtonsMantSolAbrCurLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsMantSolAbrCurSalir = imgButtons.create('imgButtonsMantSolAbrCurSalir', 'Salir', 'salir.png');
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsMantSolAbrCurso_Init();
        this.createMWs();
    },
    
    setEvents: function(){
        imgButtonsMantSolAbrCurSolicitar.onClick(this.windowName + ".coreUpdate('agregar')");
        imgButtonsMantSolAbrCurLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsMantSolAbrCurSalir.onClick("dialogsMantSolAbrCurso.close();");
		powerComboBoxMantSolAbrCurCarrera.onChange(this.windowName + ".resetElements('carr')");
    },

    resetElements : function(element) {
		if (element == 'carr') {
			Tool.rstPwrCmb(powerComboBoxMantSolAbrCurMateria);
			if (powerComboBoxMantSolAbrCurCarrera.getOption() != "") {
				Tool.getPowerComboData('InscripObject', 'getMateriaPorCarrera', dialogsMantSolAbrCurso , powerComboBoxMantSolAbrCurMateria, 0, 1, powerComboBoxMantSolAbrCurCarrera.setModeReturnGetText(0));		
			} 
		}
	},

	limpiar: function(){
        editsMantSolAbrCurCedula.setValue("");
        editsMantSolAbrCurNombre.setValue("");
        editsMantSolAbrCurApellido.setValue("");
        Tool.rstPwrCmb(powerComboBoxMantSolAbrCurCarrera);
        Tool.rstPwrCmb(powerComboBoxMantSolAbrCurMateria);
        dialogsMantSolAbrCurso.setMsg("");
		Tool.cnnSrv('InscripObject', 'getCargarPersona', this.windowName + '.loadDataPers()');
    },

    loadDataPers : function() {
		var rlx = xmlStructs.createRecordList("rlx");

    	if (json('getPermiso').data[0][0] != 'ACTIVO') {
    		editsMantSolAbrCurCedula.setValue(json('getDatoPersona').data[0]);
    		editsMantSolAbrCurNombre.setValue(json('getDatoPersona').data[1]);
    		editsMantSolAbrCurApellido.setValue(json('getDatoPersona').data[2]);
    		editsMantSolAbrCurCedula.hideId = json('getDatoPersona').data[3];
  	  		rlx.add('reg', editsMantSolAbrCurCedula);
  			Tool.cnnSrv('InscripObject', 'getCarrera', this.windowName + '.loadDataCarrera()', rlx);
  		}
    	dialogsMantSolAbrCurso.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    loadDataCarrera : function() {
  		Tool.loadPowerComboData(dialogsMantSolAbrCurso, powerComboBoxMantSolAbrCurCarrera, -1, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			powerComboBoxMantSolAbrCurCarrera.setSelectedIndex(1); 
    		this.resetElements('carr');
  		}
   	},
    
	limpiarCoreUpdate : function() {
		powerComboBoxMantSolAbrCurMateria.setSelectedIndex(0);
		dialogsMantSolAbrCurso.setMsg("");
		Alert.show("Solicitud ingresada satisfactoriamente.", 'SISTEMA', Alert.TYPE_INFO);
	},

    coreUpdate: function(methodName) {
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (powerComboBoxMantSolAbrCurCarrera.valid(dialogsMantSolAbrCurso)) 
			if (powerComboBoxMantSolAbrCurMateria.valid(dialogsMantSolAbrCurso)) {
				rlx.addInt('reg', editsMantSolAbrCurCedula.hideId);//persona
				rlx.add('reg', powerComboBoxMantSolAbrCurCarrera.setModeReturnGetText(3));//periodo
                rlx.add('reg', powerComboBoxMantSolAbrCurCarrera.setModeReturnGetText(0));//carrera
                rlx.add('reg', powerComboBoxMantSolAbrCurMateria);//materia
				Tool.cnnSrv("InscripObject", methodName + this.windowName, this.windowName + ".limpiarCoreUpdate()", rlx);
			}
    }
};

