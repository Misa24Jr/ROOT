var dialogoProperty = new Object();
var imgButtonPropertyGuardar = new Object();
var imgButtonPropertySalir = new Object();
var pwComboProperty = new Object();
var mwProperty = new Object();// minWindow
var gridProperty = new Object();

var Property = {
    windowName: 'Property',
    isCreate: false,

    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogoProperty.isByClean()) 
            this.limpiar('lmp');
        dialogoProperty.show();
    },
    
    hide: function(){
        dialogoProperty.hide();
    },
    
    createMWs: function(){
        mwProperty = desktop.addMinWindow('Property', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogoProperty.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
	
    dialogoProperty_Init: function(){
        dialogoProperty.setMinimizeXY(0, 0);
        dialogoProperty.setCenterScreen();    
        dialogoProperty.addObject(pwComboProperty, 22, 40);
        dialogoProperty.addObject(gridProperty.getObject(), 20, 80);
		dialogoProperty.addObject(imgButtonPropertyGuardar, 290, 40);
        dialogoProperty.addObject(imgButtonPropertySalir, 400, 40);
        pwComboProperty.addOptionAndSimpleValue(null, "BOLETIN", "pdf");
        pwComboProperty.addOptionAndSimpleValue(null, "RUTA DE ARCHIVOS", "ruta");
        pwComboProperty.addOptionAndSimpleValue(null, "MODEM GSM", "gsm");
        pwComboProperty.addOptionAndSimpleValue(null, "EMAIL", "mail");
    },
    
    initGrid : function(){
    	gridProperty.setFixColRow(false,true);
	  	gridProperty.addTitleVectorX(["Propiedad","Valor","file"]);
	  	gridProperty.showData();
	    gridProperty.setSizeCol(1, 327);
	  	gridProperty.setSizeCol(2, 830);	
	  	gridProperty.setSizeCol(3, 0);	
	  	gridProperty.hideCol(3);
	  	gridProperty.setXMLStruct(xmlStructs);
	  	gridProperty.setEditCol(2);
	  	gridProperty.autoSaveEnable();
    },
	
    create: function() {
        dialogoProperty = dialogs.create('dialogoProperty', 0, 0, 1200, 515, 'PROPIEDADES');
        dialogoProperty.setAdjY(60);
        pwComboProperty = powerComboBox.create('pwComboProperty','pwComboProperty','Archivo :',1,80); 	  	
	  	pwComboProperty.setWidthCombo(150);       
      	pwComboProperty.addEmptyOption();
      	pwComboProperty.setValidEmpty();
      	pwComboProperty.enableReadOnlyEditor();
      	pwComboProperty.enableOnChangeToEmptyOption();
      	pwComboProperty.setDataType('string');
        gridProperty = grids.create("gridProperty",22,3);
        imgButtonPropertyGuardar = imgButtons.create('imgButtonPropertyGuardar', 'Guardar', 'ok.png');
        imgButtonPropertySalir = imgButtons.create('imgButtonPropertySalir', 'Salir', 'salir.png');
        imgButtonPropertyGuardar.setDimension(90, 22);
        imgButtonPropertySalir.setDimension(90, 22);
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.initGrid();
        this.dialogoProperty_Init();
        this.createMWs();
    },
    
    limpiar : function(tipo) {
    	gridProperty.clean();
  		dialogoProperty.setMsg("");
  		dlgWait.hide();
	},

    setEvents: function() {
        pwComboProperty.onChange(this.windowName + ".loadGrid()");
    	imgButtonPropertyGuardar.onClick(this.windowName + ".coreUpdate()");
        imgButtonPropertySalir.onClick("dialogoProperty.close()");
    },
    
    loadGrid : function() {
    	gridProperty.clean();
		Tool.getGridData('SecurityObject', 'getInfoProperties', dialogoProperty, gridProperty, false, pwComboProperty);	
    },
    
    coreUpdate: function() {
    	if(gridProperty.getDataStructObj().data[0].length > 0) {
    		Tool.cnnSrv('SecurityObject', 'setInfoProperties', this.windowName + '.loadGrid()', gridProperty.getXMLStruct("rlxListaEval"));	
    	}
    }
};