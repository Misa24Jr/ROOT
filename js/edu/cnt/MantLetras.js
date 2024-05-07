var dialogsMantLetras = new Object();
var editMantLetra = new Object();
var powerComboRangoIni = new Object();
var powerComboRangoFin = new Object();
var memoMantletra = new Object();
var gridsMantLetra = new Object();
var imgButtonsMantLetrasAgregar = new Object();
var imgButtonManLetraModificar = new Object();
var imgButtonManLetraEliminar = new Object();
var imgButtonManLetraLimpiar = new Object();
var imgButtonManLetraSalir = new Object();
var mwMantLetras = new Object();// minWindow

var MantLetras = {
    windowName: 'MantLetras',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsMantLetras.isByClean()) 
            this.limpiar();
        dialogsMantLetras.show();
    },
    hide: function() {
        dialogsMantLetras.hide();
    },
    createMWs: function() {
        mwMantLetras = desktop.addMinWindow('M.Literal', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantLetras.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    dialogsMantLetras_Init: function() {
        dialogsMantLetras.setMinimizeXY(0, 0);
        dialogsMantLetras.setCenterScreen();
        dialogsMantLetras.addSpace(0, 0, 20);
        dialogsMantLetras.addLn(1, 1, 1);
        dialogsMantLetras.setHeightCell(1,1,10);       
        dialogsMantLetras.addObject(editMantLetra, 15, 30);
        dialogsMantLetras.addObject(memoMantletra, 15, 60);
        dialogsMantLetras.addObject(powerComboRangoIni, 265, 30);
        dialogsMantLetras.addObject(powerComboRangoFin, 547, 30);
        dialogsMantLetras.addObject(gridsMantLetra.getObject(), 15, 115);
        dialogsMantLetras.addObject(imgButtonsMantLetrasgregar, 15, 335);
        dialogsMantLetras.addObject(imgButtonManLetraModificar, 155, 335);
        dialogsMantLetras.addObject(imgButtonManLetraEliminar, 295, 335);
        dialogsMantLetras.addObject(imgButtonManLetraLimpiar, 435, 335);
        dialogsMantLetras.addObject(imgButtonManLetraSalir, 575, 335);
    },
    
    gridsMantLetra_Init: function() {
        gridsMantLetra.setFixColRow(false, true);
        gridsMantLetra.addTitleVectorX(['Letra', 'Nº Mayor', 'Nº Menor', 'Descripción']);
        gridsMantLetra.showData();
	  	gridsMantLetra.setReadOnlyToAll();
	  	gridsMantLetra.wheelEnable();
	  	gridsMantLetra.sortEnable();
        gridsMantLetra.setSizeCol(1, 80);
        gridsMantLetra.setSizeCol(2, 80);
        gridsMantLetra.setSizeCol(3, 80);    
        gridsMantLetra.setSizeCol(4, 408);
    },
    
    create: function() {
        dialogsMantLetras = dialogs.create('dialogsMantLetras', 0, 0, 685, 348, 'LITERAL DE EVALUACION');
		dialogsMantLetras.setAdjY(20);
        editMantLetra = edits.create('editMantLetra', 'MantAulCodAula', 'Literal:', 1,102, 'normal');
        editMantLetra.setValidEmpty();
        editMantLetra.setSizeEdit(20);
        editMantLetra.setMaxLength(2); 
        powerComboRangoIni = powerComboBox.create('powerComboRangoIni', 'powerComboRangoIni', 'Nº Mayor:', 1,80);
        powerComboRangoIni.setValidEmpty();
        powerComboRangoIni.addEmptyOption();
        powerComboRangoIni.enableReadOnlyEditor();
        powerComboRangoIni.setFieldFind(true);
        powerComboRangoIni.setWidthCombo(20);
        powerComboRangoFin = powerComboBox.create('powerComboRangoFin', 'powerComboRangoFin', 'Nº Menor:', 1,80);
        powerComboRangoFin.setValidEmpty();
        powerComboRangoFin.addEmptyOption();
        powerComboRangoFin.enableReadOnlyEditor();
        powerComboRangoFin.setFieldFind(true);
        powerComboRangoFin.setWidthCombo(20);
		for(var i=20; i>0; i--) {
			powerComboRangoIni.addOptionAndSimpleValue(null,i,i);
			powerComboRangoFin.addOptionAndSimpleValue(null,i,i);
		}
        memoMantletra = memo.create("memoMantletra","Descripcion :",1,0,101);
        memoMantletra.setDimension(550,35);
        memoMantletra.setValidEmpty();
        gridsMantLetra = grids.create('gridsMantLetra', 8, 4);
        imgButtonsMantLetrasgregar = imgButtons.create("imgButtonsMantLetrasgregar", 'Agregar', 'ok.png');
        imgButtonManLetraModificar = imgButtons.create("imgButtonManLetraModificar", 'Modificar', 'icono_modificar.png');
        imgButtonManLetraModificar.setDisable();
        imgButtonManLetraEliminar = imgButtons.create("imgButtonManLetraEliminar", 'Eliminar', 'eliminar.png');
        imgButtonManLetraEliminar.setDisable();
        imgButtonManLetraLimpiar = imgButtons.create("imgButtonManLetraLimpiar",'Limpiar','limpiar.png');
        imgButtonManLetraSalir = imgButtons.create("imgButtonManLetraSalir", 'Salir', 'salir.png');
        imgButtonsMantLetrasgregar.setDimension(90, 22);
        imgButtonManLetraModificar.setDimension(90, 22);
        imgButtonManLetraEliminar.setDimension(90, 22);
        imgButtonManLetraLimpiar.setDimension(90, 22);
        imgButtonManLetraSalir.setDimension(90, 22);
    },
    
    init: function() {
        this.create();
        this.setEvents();
        this.dialogsMantLetras_Init();
        this.gridsMantLetra_Init();
        this.createMWs();
    },
    
    setData: function() {
        if (gridsMantLetra.getDataCell(1) != "") {
            editMantLetra.readOnly(true);
            editMantLetra.setValue(gridsMantLetra.getDataCell(1));
            powerComboRangoIni.findOption(gridsMantLetra.getDataCell(2));
            powerComboRangoFin.findOption(gridsMantLetra.getDataCell(3));
            memoMantletra.setText(gridsMantLetra.getDataCell(4));
            imgButtonsMantLetrasgregar.setDisable();
            imgButtonManLetraModificar.setEnable();
            imgButtonManLetraEliminar.setEnable();
        }
        
    },
    
    setEvents: function() {
        gridsMantLetra.onClickCells(this.windowName + ".setData()");
        imgButtonsMantLetrasgregar.onClick("MantLetras.coreUpdate('agregar')");
        imgButtonManLetraModificar.onClick("MantLetras.coreUpdate('modificar')");
        imgButtonManLetraEliminar.onClick("MantLetras.coreUpdate('eliminar')");
        imgButtonManLetraLimpiar.onClick("MantLetras.limpiar()");
        imgButtonManLetraSalir.onClick('dialogsMantLetras.close()');
    },
    
    limpiar: function() {
        editMantLetra.readOnly(false);
		editMantLetra.clear();
        powerComboRangoIni.setSelectedIndex(0);
        powerComboRangoFin.setSelectedIndex(0);
        memoMantletra.setText("");
        gridsMantLetra.clean();
        dialogsMantLetras.setMsg("");
        imgButtonsMantLetrasgregar.setEnable();
        imgButtonManLetraModificar.setDisable();
        imgButtonManLetraEliminar.setDisable();
		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantLetras, gridsMantLetra, false); 		    		
    },

	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editMantLetra.valid(dialogsMantLetras))
			if (powerComboRangoIni.valid(dialogsMantLetras))
				if (powerComboRangoFin.valid(dialogsMantLetras))
					if (memoMantletra.valid(dialogsMantLetras)) {
						if (methodName != 'eliminar') {
			            	rlx.add('reg', powerComboRangoIni);
		            		rlx.add('reg', powerComboRangoFin);
			                rlx.add('reg', memoMantletra);
			            	rlx.add('reg', editMantLetra);
						}
						else
			            	rlx.add('reg', editMantLetra);
						Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
					} 
	}
};