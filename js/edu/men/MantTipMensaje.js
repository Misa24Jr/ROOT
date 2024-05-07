var dialogsMantTipMensaje = new Object();
var pcbMantTipMenAnticipar = new Object();
var pcbMantTipMenModo = new Object();
var pcbMantTipMenEstado = new Object();
var gridsMantTipMensaje = new Object();
var imgButtonsMantTipMenGuardar = new Object();
var imgButtonsMantTipMenLimpiar = new Object();
var imgButtonsMantTipMenSalir = new Object();
var mwMantTipMensaje = new Object();// minWindow

var MantTipMensaje = {
    windowName: 'MantTipMensaje',
    isCreate: false,
    idTipoMensaje : 0,
    
    show: function() {
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsMantTipMensaje.isByClean()) 
            this.limpiar();
        dialogsMantTipMensaje.show();
    },
    
    hide: function() {
        dialogsMantTipMensaje.hide();
    },
    
    createMWs: function() {
        mwMantTipMensaje = desktop.addMinWindow('M.T.Mensaje', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantTipMensaje.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsMantTipMensaje_Init: function() {
        dialogsMantTipMensaje.setMinimizeXY(0, 0);
        dialogsMantTipMensaje.setCenterScreen();
        dialogsMantTipMensaje.addSpace(0, 0, 20);
        dialogsMantTipMensaje.addLn(1, 1, 1);
		dialogsMantTipMensaje.setHeightCell(1,1,10);
		dialogsMantTipMensaje.addObjToDialog(pcbMantTipMenAnticipar, 2, 1,24);
		dialogsMantTipMensaje.addObjToDialog(pcbMantTipMenModo, 2, 1,24);
		dialogsMantTipMensaje.addObjToDialog(pcbMantTipMenEstado, 2, 1,24);
        dialogsMantTipMensaje.leftMarginObj(2, 1, 0, 24);
        pcbMantTipMenEstado.addOptionAndSimpleValue(null, 'ACTIVO', 'ACTIVO');
        pcbMantTipMenEstado.addOptionAndSimpleValue(null, 'INACTIVO', 'INACTIVO');
        dialogsMantTipMensaje.adjAllMarginObj(2, 1, 37);
        dialogsMantTipMensaje.addLn(3, 1, 1);
		dialogsMantTipMensaje.setHeightCell(3,1,10);
		dialogsMantTipMensaje.addObjToDialog(gridsMantTipMensaje.getObject(), 4, 1);
        dialogsMantTipMensaje.addLn(5, 1, 1);
		dialogsMantTipMensaje.setHeightCell(5,1,12);
        dialogsMantTipMensaje.addObjToDialog(imgButtonsMantTipMenGuardar, 6, 1);
        dialogsMantTipMensaje.addObjToDialog(imgButtonsMantTipMenLimpiar, 6, 1);
        dialogsMantTipMensaje.addObjToDialog(imgButtonsMantTipMenSalir, 6, 1);
        imgButtonsMantTipMenGuardar.setDimension(90, 22);
        imgButtonsMantTipMenLimpiar.setDimension(90, 22);
        imgButtonsMantTipMenSalir.setDimension(90, 22);
        dialogsMantTipMensaje.adjAllMarginObj(6, 1, 20);
        dialogsMantTipMensaje.leftMarginObj(6, 1, 0, 187);
    },
	
    gridsMantTipMensaje_Init: function() {
        gridsMantTipMensaje.setFixColRow(false, true);
        gridsMantTipMensaje.addTitleVectorX(['Categoría', 'Tipo de Mensaje', 'Modo', 'Estado', 'dia', 'idmodo', 'idtipo']);
        gridsMantTipMensaje.showData();
        gridsMantTipMensaje.setSizeCol(1, 140);
        gridsMantTipMensaje.setSizeCol(2, 330);
        gridsMantTipMensaje.setSizeCol(3, 148);
        gridsMantTipMensaje.setSizeCol(4, 70);
        gridsMantTipMensaje.setSizeCol(5, 0);
        gridsMantTipMensaje.setSizeCol(6, 0);
        gridsMantTipMensaje.setSizeCol(7, 0);
        gridsMantTipMensaje.hideCol(5);
        gridsMantTipMensaje.hideCol(6);
        gridsMantTipMensaje.hideCol(7);
    },
    
    create: function() {
        dialogsMantTipMensaje = dialogs.create('dialogsMantTipMensaje', 0, 0, 732, 428, 'CONFIGURACION  DE MENSAJES');
		dialogsMantTipMensaje.setAdjY(20);
        pcbMantTipMenAnticipar = powerComboBox.create('pcbMantTipMenAnticipar', 'pcbMantTipMenAnticipar', 'Notificar (Dia):', 1,110);
        pcbMantTipMenAnticipar.setValidEmpty();
        pcbMantTipMenAnticipar.addEmptyOption();
        pcbMantTipMenAnticipar.setWidthCombo(50);
        pcbMantTipMenModo = powerComboBox.create('pcbMantTipMenModo', 'pcbMantTipMenModo', 'Modo:', 1,41);
        pcbMantTipMenModo.setValidEmpty();
        pcbMantTipMenModo.addEmptyOption();
        pcbMantTipMenModo.enableReadOnlyEditor();
        pcbMantTipMenEstado = powerComboBox.create('pcbMantTipMenEstado', 'pcbMantTipMenEstado', 'Estado:', 1,48);
	  	pcbMantTipMenEstado.setDataType('string');
        pcbMantTipMenEstado.setValidEmpty();
        pcbMantTipMenEstado.addEmptyOption();
        pcbMantTipMenEstado.enableReadOnlyEditor();
        gridsMantTipMensaje = grids.create('gridsMantTipMensaje', 15, 7);
        imgButtonsMantTipMenGuardar = imgButtons.create('imgButtonsMantTipMenGuardar', 'Guardar', 'ok.png');
        imgButtonsMantTipMenLimpiar = imgButtons.create('imgButtonsMantTipMenLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsMantTipMenSalir = imgButtons.create('imgButtonsMantTipMenSalir', 'Salir', 'salir.png');
    },
    
    init: function() {
        this.create();
        this.setEvents();
        this.dialogsMantTipMensaje_Init();
        this.gridsMantTipMensaje_Init();
        this.createMWs();
        this.precargarDia();
    },
    
    precargarDia: function() {
        for (var i = 0; i <= 5; i++) {
            pcbMantTipMenAnticipar.addOptionAndSimpleValue(null, (i < 6) ? '0' + i : i, i);
        }
        pcbMantTipMenAnticipar.addOptionAndSimpleValue(null, 30,30);
        pcbMantTipMenAnticipar.addOptionAndSimpleValue(null, 45,45);
        pcbMantTipMenAnticipar.addOptionAndSimpleValue(null, 60,60);
        pcbMantTipMenAnticipar.addOptionAndSimpleValue(null, 75,75);
        pcbMantTipMenAnticipar.addOptionAndSimpleValue(null, 90,90);
        pcbMantTipMenAnticipar.addOptionAndSimpleValue(null, 120,120);
        pcbMantTipMenAnticipar.addOptionAndSimpleValue(null, 150,150);
        pcbMantTipMenAnticipar.addOptionAndSimpleValue(null, 180,180);
	},
    
    limpiar: function(methodName) {
    	pcbMantTipMenAnticipar.setSelectedIndex(0);
    	pcbMantTipMenModo.setSelectedIndex(0);
    	pcbMantTipMenEstado.setSelectedIndex(0);
        gridsMantTipMensaje.clean();
        dialogsMantTipMensaje.setMsg("");
        
		if (methodName == "modificar")  
  			Tool.getGridData("MsjObject", "get"+this.windowName, dialogsMantTipMensaje, gridsMantTipMensaje, false); 		    		
  		else
  			Tool.cnnSrv('MsjObject', 'getMantTipMensajeInit', this.windowName + '.loadDataInit()');
    },
    
	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsMantTipMensaje, pcbMantTipMenModo, 0, 1, json('getModoMensaje'));
		Tool.loadGridData(dialogsMantTipMensaje, gridsMantTipMensaje, false, json('getMantTipMensaje'));    
    },

    setData: function() {
    	if (gridsMantTipMensaje.getDataCell(1) != "") {
    		this.idTipoMensaje = gridsMantTipMensaje.getDataCell(7);
    		pcbMantTipMenAnticipar.findOption(gridsMantTipMensaje.getDataCell(5));
    		pcbMantTipMenModo.findOption(gridsMantTipMensaje.getDataCell(6));
            pcbMantTipMenEstado.findOption(gridsMantTipMensaje.getDataCell(4));
        }
    },
    
    setEvents: function() {
		gridsMantTipMensaje.onClickCells(this.windowName + ".setData()");
        imgButtonsMantTipMenGuardar.onClick(this.windowName + ".coreUpdate('modificar')");
        imgButtonsMantTipMenLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsMantTipMenSalir.onClick('dialogsMantTipMensaje.close()');
    },
    
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbMantTipMenAnticipar.valid(dialogsMantTipMensaje)) 
			if (pcbMantTipMenModo.valid(dialogsMantTipMensaje)) 
				if (pcbMantTipMenEstado.valid(dialogsMantTipMensaje)) {
					rlx.add('reg', pcbMantTipMenEstado);
					rlx.add('reg', pcbMantTipMenAnticipar);
					rlx.add('reg', pcbMantTipMenModo);
					rlx.addInt('reg', this.idTipoMensaje);
					Tool.cnnSrv('MsjObject', methodName + this.windowName, this.windowName + ".limpiar('" + methodName + "')", rlx);
				}
	}
};
