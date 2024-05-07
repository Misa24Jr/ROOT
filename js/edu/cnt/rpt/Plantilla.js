var dialogsPlantilla = {};
var pcbOrgPlantilla = {};
var pcbTipoPlantilla = {};
var pcbNombrePlantilla = {};
var pcbTipoPersonaPlantilla = {};
var pcbEtiquetaPlantillaProp = {};
var editsEtiquetaPlantillaOrden = {};
var pcbEtiquetaPlantillaDato = {};
var pcbEtiquetaPlantillaImg = {};
var imgButtonGuardarPlantilla = {};
var imgButtonLimpiarPlantilla = {};
var imgButtonEliminarPlantilla = {};
var imgButtonSalirPlantilla = {};
var mwGeneMasBolMedia = {};// minWindow
var imgEliminarDatoPro = {};
var imgAgregarDatoPro = {};
var richEditPlantilla = {};//RichEdit

var Plantilla = {
	windowName : 'Plantilla',
	isCreate : false,
	noPlantilla : '',

	show: function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
			this.limpiar();			
		dialogsPlantilla.show();
		richEditPlantilla.show();
	},
	
	hide: function(){
		dialogsPlantilla.hide();
	},
	
	createMWs: function(){
    	mwPlantilla = desktop.addMinWindow('Plantilla', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
    	dialogsPlantilla.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsPlantilla_Init : function() {
		dialogsPlantilla.setMinimizeXY(0,0);
		dialogsPlantilla.setCenterScreen();
		dialogsPlantilla.addObject(pcbOrgPlantilla,20, 40);
		dialogsPlantilla.addObject(pcbTipoPlantilla,267, 40);
		dialogsPlantilla.addObject(pcbNombrePlantilla, 475, 40);
		dialogsPlantilla.addObject(pcbTipoPersonaPlantilla, 20, 65);
		dialogsPlantilla.addObject(pcbEtiquetaPlantillaProp, 20, 90);
		dialogsPlantilla.addObject(editsEtiquetaPlantillaOrden, 17, 90);
		dialogsPlantilla.addObject(pcbEtiquetaPlantillaImg, 475, 65);
		dialogsPlantilla.addObject(pcbEtiquetaPlantillaDato, 475, 90);
		dialogsPlantilla.addObject(imgEliminarDatoPro, 425, 92);
		dialogsPlantilla.addObject(imgAgregarDatoPro, 445, 92);
		dialogsPlantilla.addObject(imgButtonGuardarPlantilla, 301, 632);
		dialogsPlantilla.addObject(imgButtonEliminarPlantilla, 423, 632);	
		dialogsPlantilla.addObject(imgButtonLimpiarPlantilla, 545, 632);
		dialogsPlantilla.addObject(imgButtonSalirPlantilla, 667, 632);
	},

	create : function() {
		dialogsPlantilla = dialogs.create('dialogsPlantilla',0,0,1068,642,'DISEÑADOR DE PLANTILLA');
    	dialogsPlantilla.setAdjY(60);

    	richEditPlantilla = new RichEdit({x:20, y:115, width:1024, height:370, id:'re_Plantilla', objectContainer:dialogsPlantilla.getObject().divBody});
    	
    	pcbOrgPlantilla = powerComboBox.create('pcbOrgPlantilla','pcbOrgPlantilla','Organización:',1,102);
    	pcbOrgPlantilla.setValidEmpty();
		pcbOrgPlantilla.setWidthCombo(100);		  
		pcbOrgPlantilla.addEmptyOption();
		pcbOrgPlantilla.enableReadOnlyEditor();

		pcbTipoPlantilla = powerComboBox.create('pcbTipoPlantilla','pcbTipoPlantilla','Tipo:',1,40);
		pcbTipoPlantilla.setValidEmpty();
		pcbTipoPlantilla.setWidthCombo(90);		  
		pcbTipoPlantilla.addEmptyOption();
		pcbTipoPlantilla.enableReadOnlyEditor();

		pcbNombrePlantilla = powerComboBox.create('pcbNombrePlantilla','pcbNombrePlantilla','Nombre Plantilla:',1,112);
    	pcbNombrePlantilla.setValidEmpty();
    	pcbNombrePlantilla.setWidthCombo(438);
    	pcbNombrePlantilla.addEmptyOption();
    	pcbNombrePlantilla.enableOnChangeToEmptyOption();
    	pcbNombrePlantilla.setSizeHeight(500);

    	pcbTipoPersonaPlantilla = powerComboBox.create('pcbTipoPersonaPlantilla','pcbTipoPersonaPlantilla','Tipo Persona:',1,102);
    	pcbTipoPersonaPlantilla.setValidEmpty();
    	pcbTipoPersonaPlantilla.setWidthCombo(275);
    	pcbTipoPersonaPlantilla.addEmptyOption();
    	pcbTipoPersonaPlantilla.enableReadOnlyEditor();
    	pcbTipoPersonaPlantilla.setDataType('string');
    	pcbTipoPersonaPlantilla.setTypeObjOpt('input', 'checkbox');
    	pcbTipoPersonaPlantilla.setFirstRowCheckMode(2);

    	pcbEtiquetaPlantillaProp = powerComboBox.create('pcbEtiquetaPlantillaProp','pcbEtiquetaPlantillaProp','Etiqueta Propia:',1,122);
    	pcbEtiquetaPlantillaProp.setValidEmpty();
    	pcbEtiquetaPlantillaProp.addEmptyOption();
    	pcbEtiquetaPlantillaProp.setWidthCombo(255);

		editsEtiquetaPlantillaOrden = edits.create('editsEtiquetaPlantillaOrden','editsEtiquetaPlantillaOrden','',1,105,'normal');
		editsEtiquetaPlantillaOrden.setValidInteger();
		editsEtiquetaPlantillaOrden.setSizeEdit(19);
		editsEtiquetaPlantillaOrden.setMaxLength(2);			

    	pcbEtiquetaPlantillaImg = powerComboBox.create('pcbEtiquetaPlantillaImg','pcbEtiquetaPlantillaImg','Etiqueta Imagen:',1,112);
    	pcbEtiquetaPlantillaImg.setValidEmpty();
    	pcbEtiquetaPlantillaImg.addEmptyOption();
    	pcbEtiquetaPlantillaImg.setWidthCombo(438);

    	pcbEtiquetaPlantillaDato = powerComboBox.create('pcbEtiquetaPlantillaDato','pcbEtiquetaPlantillaDato','Etiqueta Dato:',1,112);
    	pcbEtiquetaPlantillaDato.setValidEmpty();
    	pcbEtiquetaPlantillaDato.addEmptyOption();
    	pcbEtiquetaPlantillaDato.setWidthCombo(438);
	   
    	imgEliminarDatoPro = images.create("imgEliminarDatoPro",'eliminar','images/eliminar.png');
    	imgEliminarDatoPro.setSize(16,16);
    	imgEliminarDatoPro.setButtonModel();
    	imgAgregarDatoPro = images.create("imgAgregarDatoPro",'imgAgregarDatoPro','images/curve_1.png');
    	imgAgregarDatoPro.setSize(16,16);
    	imgAgregarDatoPro.setButtonModel();

    	imgButtonGuardarPlantilla = imgButtons.create('imgButtonGuardarPlantilla','Guardar.','ok.png');
    	imgButtonEliminarPlantilla = imgButtons.create('imgButtonEliminarPlantilla','Eliminar','eliminar.png');
    	imgButtonSalirPlantilla = imgButtons.create('imgButtonSalirPlantilla','Salir','salir.png');
    	imgButtonLimpiarPlantilla = imgButtons.create('imgButtonLimpiarPlantilla', 'Limpiar', 'limpiar.png');
    	imgButtonGuardarPlantilla.setDimension(100,22);
    	imgButtonLimpiarPlantilla.setDimension(100,22);
    	imgButtonEliminarPlantilla.setDimension(100,22);
    	imgButtonSalirPlantilla.setDimension(100,22);
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsPlantilla_Init();  
		this.createMWs();
	},

	limpiar: function() {
		noPlantilla = '';
		pcbOrgPlantilla.clear();
		pcbTipoPlantilla.clear();
		pcbNombrePlantilla.clear();
		pcbNombrePlantilla.setSizeHeight(500);
		pcbTipoPersonaPlantilla.clear();
		pcbEtiquetaPlantillaProp.clear();
		pcbEtiquetaPlantillaProp.setSizeHeight(500);
		editsEtiquetaPlantillaOrden.setValue('1');
		pcbEtiquetaPlantillaImg.clear();
		pcbEtiquetaPlantillaDato.clear();
		richEditPlantilla.clear();
		imgButtonEliminarPlantilla.setDisable();
		dialogsPlantilla.setMsg("");
		Tool.cnnSrv('ReportObject', 'getPlantillaInit', this.windowName + '.loadDataInit()');
	},
	
	loadDataInit: function() {
	    Tool.loadPowerComboData(dialogsPlantilla, pcbOrgPlantilla, 0, 1, json('getData'));
	    pcbOrgPlantilla.setSelectedIndex(1);
	    pcbTipoPlantilla.addOptionAndSimpleValue(null, 'CONSTANCIA', 1);
	    pcbTipoPlantilla.addOptionAndSimpleValue(null, 'CULMINACION', 4);
	    pcbTipoPlantilla.addOptionAndSimpleValue(null, 'EGRESO', 3);
	    pcbTipoPlantilla.addOptionAndSimpleValue(null, 'INGRESO', 6);
	    pcbTipoPlantilla.addOptionAndSimpleValue(null, 'SOLVENCIA', 5);
	    pcbTipoPlantilla.addOptionAndSimpleValue(null, 'EVALUACION', 7);
	    pcbTipoPlantilla.addOptionAndSimpleValue(null, 'NOTAS CERTIFICADAS', 8);
	    pcbTipoPlantilla.addOptionAndSimpleValue(null, 'TITULO', 2);
	    Tool.loadPowerComboData(dialogsPlantilla, pcbTipoPersonaPlantilla, 0, 1, json('getMantTipPersona'));
		pcbTipoPersonaPlantilla.setSizeHeight(500);
		Tool.loadPowerComboField(dialogsPlantilla, pcbEtiquetaPlantillaDato, -9, 0, json('getEtiquetaDato'));
		pcbEtiquetaPlantillaDato.setSizeHeight(500);
		pcbEtiquetaPlantillaImg.addOptionAndSimpleValue(null, 'IMAGEN_EMBLEMA', 'images/logo/' + pcbOrgPlantilla.getOption() + '_logo.gif');
		pcbEtiquetaPlantillaImg.addOptionAndSimpleValue(null, 'IMAGEN_LOGO_COLEGIO','images/logo/' + pcbOrgPlantilla.getOption() + '_portada_boletin.jpg');           			
		pcbEtiquetaPlantillaImg.addOptionAndSimpleValue(null, 'IMAGEN_MEMBRETE_CARTAS', 'images/logo/' + pcbOrgPlantilla.getOption() + '_banner.jpg');        
		pcbEtiquetaPlantillaImg.addOptionAndSimpleValue(null, 'IMAGEN_LOGO_MINISTERIO', 'images/logo/' + pcbOrgPlantilla.getOption() + '_logo_ministerio.jpg');
		pcbEtiquetaPlantillaImg.addOptionAndSimpleValue(null, 'IMAGEN_ESCUDO_VENEZUELA', 'images/logo/' + pcbOrgPlantilla.getOption() + '_escudo_venezuela.png');	
		pcbEtiquetaPlantillaImg.addOptionAndSimpleValue(null, 'IMAGEN_CARNET_PERSONAL', 'images/logo/' + pcbOrgPlantilla.getOption() + '_logo_carnet_personal.png'); 	        
		pcbEtiquetaPlantillaImg.addOptionAndSimpleValue(null, 'IMAGEN_CARNET_ESTUDIANTE', 'images/logo/' + pcbOrgPlantilla.getOption() + '_logo_carnet.png');
		pcbEtiquetaPlantillaImg.addOptionAndSimpleValue(null, 'IMAGEN_ENCABEZADO_FICHA', 'images/logo/' + pcbOrgPlantilla.getOption() + '_encabezado_ficha.jpg');
		this.loadPlantilla();
	},
	
	loadPlantilla: function() {
		if (pcbTipoPlantilla.getText() == -1) pcbTipoPlantilla.setSelectedIndex(1);
		pcbEtiquetaPlantillaProp.clear();
		pcbEtiquetaPlantillaImg.setSelectedIndex(0);
		pcbEtiquetaPlantillaDato.setSelectedIndex(0);
		pcbTipoPersonaPlantilla.setSelectedIndex(0);
		pcbTipoPersonaPlantilla.clearChecks();
		richEditPlantilla.clear();
		noPlantilla = pcbNombrePlantilla.getOption();
		Tool.getPowerComboDataFnc(this.windowName + ".autoGetTipoPersEtiqueta()", "ReportObject", "getPlantilla", dialogsPlantilla, pcbNombrePlantilla, -1, 1, pcbOrgPlantilla, pcbTipoPlantilla);
	},
	
	autoGetTipoPersEtiqueta: function() {
		pcbNombrePlantilla.setSizeHeight(500);
		if (noPlantilla != '') {
			pcbNombrePlantilla.setSelectedOption(noPlantilla);
			this.getTipoPersEtiqueta();
		}
	},
	
	getTipoPersEtiqueta: function() {
		var rlx = xmlStructs.createRecordList("rlx");
		
		if (pcbNombrePlantilla.getText() > -1) {
			richEditPlantilla.setText(pcbNombrePlantilla.setModeReturnGetText(2).getText());
			richEditPlantilla.setOrientation(pcbNombrePlantilla.setModeReturnGetText(3).getText());
			richEditPlantilla.setMarginTop(pcbNombrePlantilla.setModeReturnGetText(4).getText());
			richEditPlantilla.setMarginLeft(pcbNombrePlantilla.setModeReturnGetText(5).getText());
			richEditPlantilla.setMarginRight(pcbNombrePlantilla.setModeReturnGetText(6).getText());
			imgButtonEliminarPlantilla.setEnable();
			pcbTipoPersonaPlantilla.clearChecks();
			rlx.add('reg', pcbNombrePlantilla.setModeReturnGetText(0));
			Tool.cnnSrv('ReportObject', 'getTipoPersEtiqPlantilla', this.windowName + '.loadDataTipoPersEtiqueta()', rlx);
		}
		else {
			pcbEtiquetaPlantillaProp.clear();
			pcbEtiquetaPlantillaImg.setSelectedIndex(0);
			pcbEtiquetaPlantillaDato.setSelectedIndex(0);
			pcbTipoPersonaPlantilla.setSelectedIndex(0);
			pcbTipoPersonaPlantilla.clearChecks();
			richEditPlantilla.clear();
			imgButtonEliminarPlantilla.setDisable();
		}
	},
	
	incremOrden: function() {
    	var num = json('getEtiqueta').data[0].length + 1;
    	editsEtiquetaPlantillaOrden.setValue(num);
    },

	loadDataTipoPersEtiqueta: function() {
		pcbTipoPersonaPlantilla.setCheckEnable(json('getTipoPersonaPlantilla').data[0]);
		Tool.loadPowerComboData(dialogsPlantilla, pcbEtiquetaPlantillaProp, -1, 1, json('getEtiqueta'));
		pcbEtiquetaPlantillaProp.setSizeHeight(500);
		this.incremOrden();
	},
	
	loadTipoPlantilla: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		pcbNombrePlantilla.clear();
		pcbEtiquetaPlantillaProp.clear();
		pcbEtiquetaPlantillaImg.setSelectedIndex(0);
		pcbEtiquetaPlantillaDato.clear();
		pcbTipoPersonaPlantilla.setSelectedIndex(0);
		pcbTipoPersonaPlantilla.clearChecks();
		richEditPlantilla.clear();
		imgButtonEliminarPlantilla.setDisable();
		rlx.add('reg', pcbOrgPlantilla);
		rlx.add('reg', pcbTipoPlantilla);
		Tool.cnnSrv('ReportObject', 'getTipoPlantilla', this.windowName + '.loadPlantillaEtiquetaDato()', rlx);
	},
	
	loadPlantillaEtiquetaDato: function() {
		Tool.loadPowerComboData(dialogsPlantilla, pcbNombrePlantilla, -1, 1, json('getPlantilla'));
		pcbNombrePlantilla.setSizeHeight(500);
		Tool.loadPowerComboField(dialogsPlantilla, pcbEtiquetaPlantillaDato, -9, 0, json('getEtiquetaDato'));
		pcbEtiquetaPlantillaDato.setSizeHeight(500);
	},
	
	loadOrden: function() {
		editsEtiquetaPlantillaOrden.setValue(pcbEtiquetaPlantillaProp.setModeReturnGetText(4).getText());
	},

	setEvents: function() {
		pcbOrgPlantilla.onChange(this.windowName + ".loadPlantilla()");
		pcbTipoPlantilla.onChange(this.windowName + ".loadTipoPlantilla()");
		pcbNombrePlantilla.onChange(this.windowName + ".getTipoPersEtiqueta()");
		pcbEtiquetaPlantillaProp.onChange(this.windowName + ".loadOrden()");
		pcbEtiquetaPlantillaDato.onChange(this.windowName + ".setEtiqueta('dat')");
		pcbEtiquetaPlantillaImg.onChange(this.windowName + ".setEtiqueta('img')");
		imgAgregarDatoPro.onClick(this.windowName + ".setEtiqueta('pro')");
		imgEliminarDatoPro.onClick(this.windowName + ".coreUpdateEtiqueta('eliminar')");
		imgButtonGuardarPlantilla.onClick(this.windowName + ".coreUpdatePlantilla('guardar')");
		imgButtonEliminarPlantilla.onClick(this.windowName + ".coreUpdatePlantilla('eliminar')");
		imgButtonLimpiarPlantilla.onClick(this.windowName + ".limpiar()");
		imgButtonSalirPlantilla.onClick('dialogsPlantilla.close()');
	},
    
	setEtiqueta: function(tipo) {
		if (tipo == 'dat') {
			if (pcbEtiquetaPlantillaDato.valid(dialogsPlantilla)) {
				richEditPlantilla.addLabel(pcbEtiquetaPlantillaDato.getOption());
				pcbEtiquetaPlantillaDato.setSelectedIndex(0);
			}
		}
		else if (tipo == 'pro') {
			if (pcbNombrePlantilla.getText() > -1) {
				if (pcbEtiquetaPlantillaProp.valid(dialogsPlantilla)) {
					richEditPlantilla.addLabel(pcbEtiquetaPlantillaProp.getOption());
					this.coreUpdateEtiqueta('guardar');
				}
			}
			else
				Alert.show('Primero debe crear una Plantilla y luego la Etiqueta.', 'PLANTILLA', Alert.TYPE_INFO);
		}
		else {
			if (pcbEtiquetaPlantillaImg.valid(dialogsPlantilla)) {
				richEditPlantilla.addImage(pcbEtiquetaPlantillaImg.getText());
				pcbEtiquetaPlantillaImg.setSelectedIndex(0);
			}
		}
	},

	coreUpdateEtiqueta: function(methodName) {
        var rlx = xmlStructs.createRecordList("rlx");

		if (pcbOrgPlantilla.valid(dialogsPlantilla))
			if (pcbNombrePlantilla.valid(dialogsPlantilla)) 
				if (pcbEtiquetaPlantillaProp.valid(dialogsPlantilla)) {
	            	if (methodName == 'guardar') {
	                    rlx.add('reg', pcbNombrePlantilla.setModeReturnGetText(0));
	                    rlx.addStr('reg', pcbEtiquetaPlantillaProp.getOption());
	                    rlx.add('reg', editsEtiquetaPlantillaOrden);
	                    methodName = 'modificar';
	            	} 
	
					if (methodName == 'eliminar' || pcbEtiquetaPlantillaProp.setModeReturnGetText(0).getText() > 0) 
	                    rlx.add('reg', pcbEtiquetaPlantillaProp.setModeReturnGetText(0));
					else
	                    methodName = 'agregar';
	
	    			Tool.cnnSrv("ReportObject", methodName + "Etiqueta", this.windowName + ".reloadEtiqueta()", rlx);
				} 
  	},
  	
  	reloadEtiqueta: function() {
		Tool.getPowerComboDataFnc(this.windowName + '.incremOrden()', 'ReportObject', 'getEtiqueta', dialogsPlantilla, pcbEtiquetaPlantillaProp, -1, 1, pcbNombrePlantilla.setModeReturnGetText(0), new MiniDataSet(-9, 'int', false))
	},
  	
	coreUpdatePlantilla: function(methodName) {
        var rlx = xmlStructs.createRecordList("rlx");

		if (pcbOrgPlantilla.valid(dialogsPlantilla))
			if (pcbNombrePlantilla.valid(dialogsPlantilla)) 
				if (pcbTipoPersonaPlantilla.valid(dialogsPlantilla)) {
	            	if (methodName == 'guardar') {
	                    rlx.addStr('reg', pcbNombrePlantilla.getOption());
	                    rlx.addStr('reg', richEditPlantilla.getText());
	                    rlx.add('reg', pcbOrgPlantilla);
	                    rlx.add('reg', pcbTipoPersonaPlantilla);
	                    rlx.add('reg', pcbTipoPlantilla);
	                    rlx.addStr('reg', richEditPlantilla.getOrientation());
	                    rlx.addInt('reg', richEditPlantilla.getMarginTop());
	                    rlx.addInt('reg', richEditPlantilla.getMarginLeft());
	                    rlx.addInt('reg', richEditPlantilla.getMarginRight());
	                    methodName = 'modificar';
	            	} 
	
					if (methodName == 'eliminar' || pcbNombrePlantilla.setModeReturnGetText(0).getText() > 0) 
	                    rlx.add('reg', pcbNombrePlantilla.setModeReturnGetText(0));
					else
	                    methodName = 'agregar';
	
	    			Tool.cnnSrv("ReportObject", methodName + "Plantilla", this.windowName + ".loadPlantilla()", rlx);
				} 
  	}
};