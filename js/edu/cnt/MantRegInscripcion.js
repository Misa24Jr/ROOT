var dialogsMantRegInscripcion = new Object();
var editsMantRegInsDescripcion = new Object();
var editsMantRegInsAbrev = new Object();
var powerComboBoxMantRegInsTipRegla = new Object();
var powerComboBoxMantRegInsEstado = new Object();
var gridsMantRegInsIdDesTipRegEst = new Object();
var imgButtonsMantRegInsModificar = new Object();
var imgButtonsMantRegInsLimpiar = new Object();
var imgButtonsMantRegInsSalir = new Object();
var mwMantRegInscripcion  = new Object();// minWindow

var MantRegInscripcion = {
	windowName : 'MantRegInscripcion',
	isCreate : false,
	hideIdRegla : 0,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantRegInscripcion.isByClean())
 			this.limpiar();			
		dialogsMantRegInscripcion.show();
	},
	
	hide : function() {
		dialogsMantRegInscripcion.hide();
	},
	
	createMWs : function() {
        	mwMantRegInscripcion = desktop.addMinWindow('M.R.Inscripcion', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantRegInscripcion.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantRegInscripcion_Init : function() {
        dialogsMantRegInscripcion.setMinimizeXY(0,0);
        dialogsMantRegInscripcion.setCenterScreen();
        dialogsMantRegInscripcion.addSpace(0,0,20);
        dialogsMantRegInscripcion.addLn(1,1,1);
		dialogsMantRegInscripcion.setHeightCell(1,1,10);
        dialogsMantRegInscripcion.addObjToDialog(powerComboBoxMantRegInsTipRegla,2,1,24);
        powerComboBoxMantRegInsTipRegla.addOptionAndSimpleValue(null,'PERSONA','PERSONA');
        powerComboBoxMantRegInsTipRegla.addOptionAndSimpleValue(null,'CARRERA','CARRERA');
        dialogsMantRegInscripcion.addObjToDialog(powerComboBoxMantRegInsEstado,2,1,24);
        powerComboBoxMantRegInsEstado.addOptionAndSimpleValue(null,'ACTIVO','ACTIVO');
        powerComboBoxMantRegInsEstado.addOptionAndSimpleValue(null,'INACTIVO','INACTIVO');
        powerComboBoxMantRegInsEstado.addOptionAndSimpleValue(null,'AUTOMATICO','AUTOMATICO');
		dialogsMantRegInscripcion.addObjToDialog(editsMantRegInsDescripcion,3,1,24);
		editsMantRegInsDescripcion.setSizeEdit(371);
		dialogsMantRegInscripcion.addObjToDialog(editsMantRegInsAbrev,3,1,24);
		editsMantRegInsAbrev.setSizeEdit(20);
        dialogsMantRegInscripcion.adjAllMarginObj(3,1,20);
        dialogsMantRegInscripcion.adjAllMarginObj(2,1,20);
		dialogsMantRegInscripcion.addLn(4,1,1);
		dialogsMantRegInscripcion.setHeightCell(4,1,10);       
        dialogsMantRegInscripcion.addObjToDialog(gridsMantRegInsIdDesTipRegEst.getObject(),6,1);
        dialogsMantRegInscripcion.addLn(7,1,1);
		dialogsMantRegInscripcion.setHeightCell(7,1,12);
        dialogsMantRegInscripcion.addObjToDialog(imgButtonsMantRegInsModificar,8,1);
        dialogsMantRegInscripcion.addObjToDialog(imgButtonsMantRegInsLimpiar,8,1);
        dialogsMantRegInscripcion.addObjToDialog(imgButtonsMantRegInsSalir,8,1);
        imgButtonsMantRegInsModificar.setDimension(90,22);
        imgButtonsMantRegInsLimpiar.setDimension(90,22);
        imgButtonsMantRegInsSalir.setDimension(90,22);
        dialogsMantRegInscripcion.adjAllMarginObj(8,1,20);
        dialogsMantRegInscripcion.leftMarginObj(8,1,0,135);
	},
  
	gridsMantRegInsIdDesTipRegEst_Init : function() {
        gridsMantRegInsIdDesTipRegEst.setFixColRow(false,true);
        gridsMantRegInsIdDesTipRegEst.addTitleVectorX(['Descripción','Abr.','Tipo de Regla','Estado','id']);
        gridsMantRegInsIdDesTipRegEst.showData();        
        gridsMantRegInsIdDesTipRegEst.setSizeCol(1,268);
        gridsMantRegInsIdDesTipRegEst.setSizeCol(2,30);
        gridsMantRegInsIdDesTipRegEst.setSizeCol(3,180);
        gridsMantRegInsIdDesTipRegEst.setSizeCol(4,100);
        gridsMantRegInsIdDesTipRegEst.setSizeCol(5,100);
        gridsMantRegInsIdDesTipRegEst.hideCol(5);
	},

	create : function() {
		dialogsMantRegInscripcion = dialogs.create('dialogsMantRegInscripcion',0,0,625,357,'CONFIGURAR REGLA DE INSCRIPCIÓN');
		editsMantRegInsDescripcion = edits.create('editsMantRegInsDescripcion','editsMantRegInsDescripcion','Descripción:',1,85,'normal');
		editsMantRegInsDescripcion.setValidEmpty();
		editsMantRegInsDescripcion.readOnly(true);
		editsMantRegInsAbrev = edits.create('editsMantRegInsAbrev','editsMantRegInsAbrev','Abreviatura:',1,85,'normal');
		editsMantRegInsAbrev.setValidEmpty();
		editsMantRegInsAbrev.readOnly(true);
		powerComboBoxMantRegInsTipRegla = powerComboBox.create('powerComboBoxMantRegInsTipRegla','powerComboBoxMantRegInsTipRegla','Tipo de Regla:',1,85);
		powerComboBoxMantRegInsTipRegla.setValidEmpty();
		powerComboBoxMantRegInsTipRegla.addEmptyOption();
//		powerComboBoxMantRegInsTipRegla.enableReadOnlyEditor();
		powerComboBoxMantRegInsTipRegla.disable();
		powerComboBoxMantRegInsEstado = powerComboBox.create('powerComboBoxMantRegInsEstado','powerComboBoxMantRegInsEstado','Estado:',1,52);      
		powerComboBoxMantRegInsEstado.setValidEmpty();
		powerComboBoxMantRegInsEstado.addEmptyOption();
		powerComboBoxMantRegInsEstado.enableReadOnlyEditor();
		powerComboBoxMantRegInsEstado.setDataType('string');
		gridsMantRegInsIdDesTipRegEst = grids.create('gridsMantRegInsIdDesTipRegEst',10,5);
		imgButtonsMantRegInsModificar = imgButtons.create('imgButtonsMantRegInsModificar','Modificar','icono_modificar.png');
		imgButtonsMantRegInsModificar.setDisable();
		imgButtonsMantRegInsLimpiar = imgButtons.create('imgButtonsMantRegIsLimpiar','Limpiar','limpiar.png');
		imgButtonsMantRegInsSalir = imgButtons.create('imgButtonsMantRegInsSalir','Salir','salir.png');
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsMantRegInscripcion_Init();
		this.gridsMantRegInsIdDesTipRegEst_Init();
		this.createMWs();
	},

  	limpiar : function() {
  		powerComboBoxMantRegInsTipRegla.setSelectedIndex(0);
  		editsMantRegInsDescripcion.setValue("");
  		editsMantRegInsAbrev.setValue("");
  		powerComboBoxMantRegInsEstado.setSelectedIndex(0);  		 		
  		gridsMantRegInsIdDesTipRegEst.clean();
  		dialogsMantRegInscripcion.setMsg("");
  		imgButtonsMantRegInsModificar.setDisable();
  		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantRegInscripcion, gridsMantRegInsIdDesTipRegEst, false);		    		
  	},
	
  	setData : function() {
		if (gridsMantRegInsIdDesTipRegEst.getDataCell(1) != "") {
			powerComboBoxMantRegInsTipRegla.findOption(gridsMantRegInsIdDesTipRegEst.getDataCell(3));
			powerComboBoxMantRegInsEstado.findOption(gridsMantRegInsIdDesTipRegEst.getDataCell(4));
            editsMantRegInsDescripcion.setValue(gridsMantRegInsIdDesTipRegEst.getDataCell(1));
            editsMantRegInsAbrev.setValue(gridsMantRegInsIdDesTipRegEst.getDataCell(2));
            this.hideIdRegla = gridsMantRegInsIdDesTipRegEst.getDataCell(5);
			imgButtonsMantRegInsModificar.setEnable();
        }   
	},
	
	validarEstado : function() {
		if (powerComboBoxMantRegInsEstado.getOption() == "AUTOMATICO" && powerComboBoxMantRegInsTipRegla.getOption() == "PERSONA"){
			powerComboBoxMantRegInsEstado.setSelectedIndex(0);
			Alert.show('El estado AUTOMATICO solo aplica al tipo de regla CARRERA.', 'SISTEMA', Alert.TYPE_INFO);
		}
	},
	
  	setEvents : function() {
  		powerComboBoxMantRegInsEstado.onChange(this.windowName + ".validarEstado()");
  		gridsMantRegInsIdDesTipRegEst.onClickCells(this.windowName+".setData()");
  		imgButtonsMantRegInsModificar.onClick(this.windowName+".coreUpdate('modificar')");
  		imgButtonsMantRegInsLimpiar.onClick('MantRegInscripcion.limpiar()');
  		imgButtonsMantRegInsSalir.onClick('dialogsMantRegInscripcion.close()');	  	 	
    },    
	
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (powerComboBoxMantRegInsTipRegla.valid(dialogsMantRegInscripcion))
			if (powerComboBoxMantRegInsEstado.valid(dialogsMantRegInscripcion))  					
				if (editsMantRegInsDescripcion.valid(dialogsMantRegInscripcion))
					if (editsMantRegInsAbrev.valid(dialogsMantRegInscripcion)) {
						rlx.add('reg',powerComboBoxMantRegInsEstado);
						rlx.addInt('reg',this.hideIdRegla);
						Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
					}
	}
};