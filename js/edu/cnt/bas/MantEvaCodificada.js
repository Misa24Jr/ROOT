var dialogsMantEvaCodificada = new Object();
var pcbMantEvaCodArea = new Object();
var editsMantEvaCodCodigo = new Object();
var memoMantEvaCodDescripcion = new Object();
var gridsMantEvaCodDescripcion = new Object();
var imgButtonsMantEvaCodAgregar = new Object();
var imgButtonsMantEvaCodModificar = new Object();
var imgButtonsMantEvaCodEliminar = new Object();
var imgButtonsMantEvaCodLimpiar = new Object();
var imgButtonsMantEvaCodReporte = new Object();
var imgButtonsMantEvaCodBuscar = new Object();
var imgButtonsMantEvaCodSalir = new Object();
var mwMantEvaCodificada = new Object();// minWindow

var MantEvaCodificada = {
	windowName : 'MantEvaCodificada',
	isCreate : false,
	
	show : function(){
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantEvaCodificada.isByClean())
 			this.limpiar();			
		dialogsMantEvaCodificada.showModal();
	},
	
	hide : function() {
		dialogsMantEvaCodificada.hide();
	},
	
	createMWs : function() {
        mwMantEvaCodificada = desktop.addMinWindow('Cod.Ind.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantEvaCodificada.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantEvaCodificada_Init : function() {
        dialogsMantEvaCodificada.setMinimizeXY(0,0);
        dialogsMantEvaCodificada.setCenterScreen();
        dialogsMantEvaCodificada.addSpace(0,0,20);
        dialogsMantEvaCodificada.addLn(1,1,1);
		dialogsMantEvaCodificada.setHeightCell(1,1,90); 	
		dialogsMantEvaCodificada.addObject(pcbMantEvaCodArea,20,32);	
		dialogsMantEvaCodificada.addObject(editsMantEvaCodCodigo,20,56);	
		dialogsMantEvaCodificada.addObject(memoMantEvaCodDescripcion,20,80);
        dialogsMantEvaCodificada.addLn(3,1,1);
		dialogsMantEvaCodificada.setHeightCell(3,1,40);         
		dialogsMantEvaCodificada.addObjToDialog(gridsMantEvaCodDescripcion.getObject(),4,1);
        dialogsMantEvaCodificada.addLn(5,1,1);
		dialogsMantEvaCodificada.setHeightCell(5,1,11);  
        dialogsMantEvaCodificada.addObjToDialog(imgButtonsMantEvaCodAgregar,6,1);
        dialogsMantEvaCodificada.addObjToDialog(imgButtonsMantEvaCodModificar,6,1);
        dialogsMantEvaCodificada.addObjToDialog(imgButtonsMantEvaCodEliminar,6,1);
        dialogsMantEvaCodificada.addObjToDialog(imgButtonsMantEvaCodLimpiar,6,1);
        dialogsMantEvaCodificada.addObjToDialog(imgButtonsMantEvaCodReporte,6,1);
        dialogsMantEvaCodificada.addObjToDialog(imgButtonsMantEvaCodBuscar,6,1);
        dialogsMantEvaCodificada.addObjToDialog(imgButtonsMantEvaCodSalir,6,1); 
        dialogsMantEvaCodificada.adjAllMarginObj(6,1,18);
        dialogsMantEvaCodificada.leftMarginObj(6,1,0,55);		
	},

	gridsMantEvaCodDescripcion_Init : function() {
        gridsMantEvaCodDescripcion.setFixColRow(false,true);
        gridsMantEvaCodDescripcion.addTitleVectorX(['Nº','Área','Código','Descripción','idCod']);
        gridsMantEvaCodDescripcion.showData();        
        gridsMantEvaCodDescripcion.setSizeCol(1,50);
        gridsMantEvaCodDescripcion.setSizeCol(2,100);
		gridsMantEvaCodDescripcion.setSizeCol(3,100);
		gridsMantEvaCodDescripcion.setSizeCol(4,600);
		gridsMantEvaCodDescripcion.setSizeCol(5,0);
		gridsMantEvaCodDescripcion.hideCol(5);
	},

	create : function() {
		dialogsMantEvaCodificada = dialogs.create('dialogsMantEvaCodificada',0,0,899,571,'MANTENIMIENTO CÓDIGO DEL INDICADOR');
		dialogsMantEvaCodificada.setAdjY(35);
		pcbMantEvaCodArea = powerComboBox.create('pcbMantEvaCodArea','pcbMantEvaCodArea','Área (+):',1,78);
		pcbMantEvaCodArea.setWidthCombo(755);
		pcbMantEvaCodArea.setValidEmpty();
		pcbMantEvaCodArea.enableReadOnlyEditor();
		pcbMantEvaCodArea.setFieldFind(true);
		pcbMantEvaCodArea.addEmptyOption();
		pcbMantEvaCodArea.setDataType('string');
		editsMantEvaCodCodigo = edits.create('editsMantEvaCodCodigo','editsMantEvaCodCodigo','Código:',1,78,'normal'); 
		editsMantEvaCodCodigo.setValidInteger();
		editsMantEvaCodCodigo.setMaxLength(5);
		editsMantEvaCodCodigo.setFieldFind(true);
		editsMantEvaCodCodigo.setSizeEdit(37);
		memoMantEvaCodDescripcion = memo.create('memoMantEvaCodDescripcion','Descripción:',1,0,78);
		memoMantEvaCodDescripcion.vAlignCaption('middle');
		memoMantEvaCodDescripcion.setDimension(775, 65);
		memoMantEvaCodDescripcion.setMaxLength(2000);
        memoMantEvaCodDescripcion.setValidEmpty();
        memoMantEvaCodDescripcion.setFieldFind(true);
		gridsMantEvaCodDescripcion = grids.create('gridsMantEvaCodDescripcion',18,5);
		imgButtonsMantEvaCodAgregar = imgButtons.create('imgButtonsMantEvaCodAgregar','Agregar','ok.png');
		imgButtonsMantEvaCodModificar = imgButtons.create('imgButtonsMantEvaCodModificar','Modificar','icono_modificar.png');
		imgButtonsMantEvaCodModificar.setDisable();
		imgButtonsMantEvaCodEliminar = imgButtons.create('imgButtonsMantEvaCodEliminar','Eliminar','eliminar.png');
      	imgButtonsMantEvaCodEliminar.setDisable();
      	imgButtonsMantEvaCodLimpiar = imgButtons.create('imgButtonsMantEvaCodLimpiar','Limpiar','limpiar.png');
		imgButtonsMantEvaCodReporte = imgButtons.create('imgButtonsMantEvaCodReporte','Reporte','print.png');
      	imgButtonsMantEvaCodBuscar = imgButtons.create('imgButtonsMantEvaCodBuscar','Buscar','icono_buscar.png');
      	imgButtonsMantEvaCodSalir = imgButtons.create('imgButtonsMantEvaCodSalir','Salir','salir.png');
        imgButtonsMantEvaCodAgregar.setDimension(90,22);
        imgButtonsMantEvaCodModificar.setDimension(90,22);
        imgButtonsMantEvaCodEliminar.setDimension(90,22);
        imgButtonsMantEvaCodLimpiar.setDimension(90,22);
        imgButtonsMantEvaCodReporte.setDimension(90,22);
        imgButtonsMantEvaCodBuscar.setDimension(90,22);
        imgButtonsMantEvaCodSalir.setDimension(90,22);
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsMantEvaCodificada_Init();
		this.gridsMantEvaCodDescripcion_Init();
		this.createMWs();		
	},

  	limpiar : function() {
		this.isCreate = false;
		pcbMantEvaCodArea.setSelectedIndex(0);
		editsMantEvaCodCodigo.readOnly(false);
		editsMantEvaCodCodigo.clear();
  		memoMantEvaCodDescripcion.clear();
    	gridsMantEvaCodDescripcion.clean();
  		imgButtonsMantEvaCodAgregar.setEnable();
		imgButtonsMantEvaCodModificar.setDisable();
		imgButtonsMantEvaCodEliminar.setDisable();	
		imgButtonsMantEvaCodReporte.setDisable();
  		dialogsMantEvaCodificada.setMsg("");
    	Tool.getPowerComboDataFnc(this.windowName + '.initArea()', 'MantObject', 'getIndicadorCodificadoArea', dialogsMantEvaCodificada, pcbMantEvaCodArea, 0, 1);
  	},

	initArea : function() {
		pcbMantEvaCodArea.setSizeHeight(400);
		try {
			pcbMantEvaCodArea.findOption(pcbCreaBolCodArea.getText());
			this.buscar();
		}
    	catch(err) {
			console.log(err);
    	}
	},
  	
  	setData : function() {
		if (gridsMantEvaCodDescripcion.getDataCell(1) != "") {
			editsMantEvaCodCodigo.readOnly(true);
			pcbMantEvaCodArea.findOption(gridsMantEvaCodDescripcion.getDataCell(5));			
			editsMantEvaCodCodigo.setValue(gridsMantEvaCodDescripcion.getDataCell(3));
	        memoMantEvaCodDescripcion.setValue(gridsMantEvaCodDescripcion.getDataCell(4));
	        imgButtonsMantEvaCodAgregar.setDisable();
			imgButtonsMantEvaCodModificar.setEnable();
			imgButtonsMantEvaCodEliminar.setEnable();
        }     			
	},
  	
  	setDataCodigoIndicador : function() {
		try {
    		if (gridsMantEvaCodDescripcion.getDataCell(1) != "") {
				lgEvaluacion.setCodigoIndObs(gridsMantEvaCodDescripcion.getDataCell(3));
				dialogsMantEvaCodificada.close();
			}
		}
    	catch(err) {
			console.log(err);
    	}
	},

  	setEvents : function() {
  		pcbMantEvaCodArea.onChange(this.windowName + ".buscar()");
  		editsMantEvaCodCodigo.onEnter(this.windowName + ".buscar()");
  		gridsMantEvaCodDescripcion.onClickCells(this.windowName+".setData()");
  		gridsMantEvaCodDescripcion.onDblClickCells(this.windowName+".setDataCodigoIndicador()");
	    imgButtonsMantEvaCodAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantEvaCodModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantEvaCodEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
	  	imgButtonsMantEvaCodLimpiar.onClick(this.windowName+".limpiar()");
	  	imgButtonsMantEvaCodReporte.onClick(this.windowName+".reporte()");
	  	imgButtonsMantEvaCodBuscar.onClick(this.windowName+".buscar()");
	  	imgButtonsMantEvaCodSalir.onClick('dialogsMantEvaCodificada.close()');
    },
    
    buscar : function() {
		editsMantEvaCodCodigo.readOnly(false);
		imgButtonsMantEvaCodAgregar.setEnable();
		imgButtonsMantEvaCodModificar.setDisable();
		imgButtonsMantEvaCodEliminar.setDisable();	
		gridsMantEvaCodDescripcion.clean();
    	Tool.getGridData("MantObject", "getIndicadorCodificado", dialogsMantEvaCodificada, gridsMantEvaCodDescripcion, imgButtonsMantEvaCodReporte.setEnable(), editsMantEvaCodCodigo, editsMantEvaCodCodigo, pcbMantEvaCodArea, pcbMantEvaCodArea, memoMantEvaCodDescripcion, memoMantEvaCodDescripcion); 		    		
    },
    
    reporte : function() {
		rep = new Report('portrait');
    	rep.setPositionIcon(1090,44);
    	rep.setNoRepeatHead();
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'bold helvetica',0, 0, 0, 8, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'bold helvetica', 3);
		rep.addTable('TablaRepoBoletinCodigo',['Nº','Área','Código','Descripción'],560  ,120);
		rep.setTotalRowTable(20);
		rep.setHeightRow(20);
        rep.setSizeColumnArray([20,80,70,500]);
        rep.setAlignData(['left','left','center','left']); 
        rep.addJsonData('TablaRepoBoletinCodigo','getIndicador',[0,1,2,3]);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		rep.renderToExcel();
    },

    limpiarCoreUpdate : function() {
    	editsMantEvaCodCodigo.clear();
    	memoMantEvaCodDescripcion.setValue('');
    	this.buscar();
    },
    	
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbMantEvaCodArea.valid(dialogsMantEvaCodificada))
			if (editsMantEvaCodCodigo.valid(dialogsMantEvaCodificada))
				if (memoMantEvaCodDescripcion.valid(dialogsMantEvaCodificada)) {
					if (methodName != 'eliminar') {
						rlx.add('reg', memoMantEvaCodDescripcion);
					}
					rlx.add('reg', editsMantEvaCodCodigo);
					rlx.add('reg', pcbMantEvaCodArea);
					Tool.cnnSrv('MantObject', methodName + 'IndicadorCodificado', this.windowName + '.limpiarCoreUpdate()', rlx);
				} 
	}
};