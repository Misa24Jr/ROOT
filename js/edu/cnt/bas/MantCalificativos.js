var dialogsMantCalificativos = {};
var editsMantCalCodigo = {};
var memoMantCalDescripcion = {};
var editsMantCalLeyenda = {};
var pcbMantCalEstado = {};
var gridsMantCalDescripcion = {};
var imgButtonsMantCalAgregar = {};
var imgButtonsMantCalModificar = {};
var imgButtonsMantCalEliminar = {};
var imgButtonsMantCalLimpiar = {};
var imgButtonsMantCalReporte = {};
var imgButtonsMantCalBuscar = {};
var imgButtonsMantCalSalir = {};
var mwMantCalificativos = {};// minWindow

var MantCalificativos = {
	windowName : 'MantCalificativos',
	isCreate : false,
	idContenido : 0,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantCalificativos.isByClean())
 			this.limpiar();			
		dialogsMantCalificativos.showModal();
	},
	
	hide : function() {
		dialogsMantCalificativos.hide();
	},
	
	createMWs : function() {
        mwMantCalificativos = desktop.addMinWindow('M.Calificativos', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantCalificativos.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantCalificativos_Init : function() {
        dialogsMantCalificativos.setMinimizeXY(0,0);
        dialogsMantCalificativos.setCenterScreen();
        dialogsMantCalificativos.addSpace(0,0,20);
        dialogsMantCalificativos.addLn(1,1,1);
		dialogsMantCalificativos.setHeightCell(1,1,44); 		
		dialogsMantCalificativos.addObject(editsMantCalCodigo,25,38);
		dialogsMantCalificativos.addObject(editsMantCalLeyenda,460,38);
		dialogsMantCalificativos.addObject(pcbMantCalEstado,726,38);
		dialogsMantCalificativos.addObjToDialog(memoMantCalDescripcion,4,1);
		dialogsMantCalificativos.setHeightCell(4,1,20);  
		dialogsMantCalificativos.addObjToDialog(gridsMantCalDescripcion.getObject(),5,1);
		dialogsMantCalificativos.setHeightCell(5,1,100);  
        dialogsMantCalificativos.addLn(6,1,1);
		dialogsMantCalificativos.setHeightCell(6,1,10); 		
        dialogsMantCalificativos.addObjToDialog(imgButtonsMantCalAgregar,7,1);
        dialogsMantCalificativos.addObjToDialog(imgButtonsMantCalModificar,7,1);
        dialogsMantCalificativos.addObjToDialog(imgButtonsMantCalEliminar,7,1);
        dialogsMantCalificativos.addObjToDialog(imgButtonsMantCalLimpiar,7,1);
		dialogsMantCalificativos.addObjToDialog(imgButtonsMantCalReporte,7,1);
		dialogsMantCalificativos.addObjToDialog(imgButtonsMantCalBuscar,7,1);
        dialogsMantCalificativos.addObjToDialog(imgButtonsMantCalSalir,7,1); 
        dialogsMantCalificativos.adjAllMarginObj(7,1,18);
        dialogsMantCalificativos.leftMarginObj(7,1,0,54);		
	},

	gridsMantCalDescripcion_Init : function() {
        gridsMantCalDescripcion.setFixColRow(false,true);
        gridsMantCalDescripcion.addTitleVectorX(['Nº','Código','Descripción','Leyenda','Edo. Leyenda']);
        gridsMantCalDescripcion.showData();        
        gridsMantCalDescripcion.setSizeCol(1,50);       
		gridsMantCalDescripcion.setSizeCol(2,100);
		gridsMantCalDescripcion.setSizeCol(3,304);
		gridsMantCalDescripcion.setSizeCol(4,300);
		gridsMantCalDescripcion.setSizeCol(5,99);
	},

	create : function() {
		dialogsMantCalificativos = dialogs.create('dialogsMantCalificativos',0,0,899,574,'MANTENIMIENTO CÓDIGO DEL CALIFICATIVO');
		dialogsMantCalificativos.setAdjY(35);			
		editsMantCalCodigo = edits.create('editsMantCalCodigo','editsMantCalCodigo','Código (*): ',1,78,'normal');
		editsMantCalCodigo.setValidEmpty();
		editsMantCalCodigo.setMaxLength(3);
		editsMantCalCodigo.setFieldFind(true);
		editsMantCalCodigo.setSizeEdit(35);	
		memoMantCalDescripcion = memo.create('memoMantCalDescripcion','Descripción (*):',1,0,78);
        memoMantCalDescripcion.setValidEmpty();
		memoMantCalDescripcion.setMaxLength(500);
        memoMantCalDescripcion.setFieldFind(true);
		memoMantCalDescripcion.setDimension(775, 35);
		memoMantCalDescripcion.vAlignCaption('middle');
		editsMantCalLeyenda = edits.create('editsMantCalLeyenda','editsMantCalLeyenda','Leyenda : ',1,70,'normal');
		editsMantCalLeyenda.setValidEmpty();
		editsMantCalLeyenda.setMaxLength(50);
		editsMantCalLeyenda.setSizeEdit(180);		
        pcbMantCalEstado = powerComboBox.create('pcbMantCalEstado', 'pcbMantCalEstado', 'Estado :', 1,70);
        pcbMantCalEstado.setWidthCombo(60);
        pcbMantCalEstado.enableReadOnlyEditor();
        pcbMantCalEstado.addEmptyOption();
        pcbMantCalEstado.setValidEmpty();
        pcbMantCalEstado.setDataType('string');
        pcbMantCalEstado.addOptionAndSimpleValue(null, 'ACTIVO', 'ACTIVO');
        pcbMantCalEstado.addOptionAndSimpleValue(null, 'INACTIVO', 'INACTIVO');
		gridsMantCalDescripcion = grids.create('gridsMantCalDescripcion',21,5);
		imgButtonsMantCalAgregar = imgButtons.create('imgButtonsMantCalAgregar','Agregar','ok.png');
		imgButtonsMantCalModificar = imgButtons.create('imgButtonsMantCalModificar','Modificar','icono_modificar.png');
		imgButtonsMantCalModificar.setDisable();
		imgButtonsMantCalEliminar = imgButtons.create('imgButtonsMantCalEliminar','Eliminar','eliminar.png');
      	imgButtonsMantCalEliminar.setDisable();
      	imgButtonsMantCalLimpiar = imgButtons.create('imgButtonsMantCalLimpiar','Limpiar','limpiar.png');
      	imgButtonsMantCalReporte = imgButtons.create('imgButtonsMantCalReporte','Reporte','print.png');
		imgButtonsMantCalBuscar = imgButtons.create('imgButtonsMantCalBuscar','Buscar','icono_buscar.png');		
      	imgButtonsMantCalSalir = imgButtons.create('imgButtonsMantCalSalir','Salir','salir.png');
        imgButtonsMantCalAgregar.setDimension(90,22);
        imgButtonsMantCalModificar.setDimension(90,22);
        imgButtonsMantCalEliminar.setDimension(90,22);
        imgButtonsMantCalLimpiar.setDimension(90,22);
        imgButtonsMantCalReporte.setDimension(90,22); 
		imgButtonsMantCalBuscar.setDimension(90,22);
        imgButtonsMantCalSalir.setDimension(90,22);
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsMantCalificativos_Init();
		this.gridsMantCalDescripcion_Init();
		this.createMWs();		
	},

  	limpiar : function() {
		editsMantCalCodigo.readOnly(false);
		editsMantCalCodigo.clear();  		
		memoMantCalDescripcion.clear();
		editsMantCalLeyenda.clear();
		pcbMantCalEstado.setSelectedIndex(2);
		gridsMantCalDescripcion.clean();
		imgButtonsMantCalAgregar.setEnable();
		imgButtonsMantCalModificar.setDisable();
		imgButtonsMantCalEliminar.setDisable();	
    	imgButtonsMantCalReporte.setDisable();
  		dialogsMantCalificativos.setMsg("");
		this.buscar();
  	},
  	
  	setData : function() {
		if (gridsMantCalDescripcion.getDataCell(1) != "") {
			editsMantCalCodigo.readOnly(true);
			editsMantCalCodigo.setValue(gridsMantCalDescripcion.getDataCell(2));
			memoMantCalDescripcion.setValue(gridsMantCalDescripcion.getDataCell(3));
			editsMantCalLeyenda.setValue(gridsMantCalDescripcion.getDataCell(4));
			pcbMantCalEstado.findOption(gridsMantCalDescripcion.getDataCell(5));
	        imgButtonsMantCalAgregar.setDisable();
			imgButtonsMantCalModificar.setEnable();
			imgButtonsMantCalEliminar.setEnable();
        }     			
	},
  	
	setDataCodigoIndicador : function() {
		try {
    		if (gridsMantCalDescripcion.getDataCell(1) != "") {
				lgEvaluacion.setCodigoIndObs(gridsMantCalDescripcion.getDataCell(2));
				dialogsMantCalificativos.close();
			}
		}
    	catch(err) {
			console.log(err);
    	}
	},

  	setEvents : function() {
  		editsMantCalCodigo.onEnter(this.windowName + ".buscar()");
  		gridsMantCalDescripcion.onClickCells(this.windowName+".setData()");
  		gridsMantCalDescripcion.onDblClickCells(this.windowName+".setDataCodigoIndicador()");
	    imgButtonsMantCalAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantCalModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantCalEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
		imgButtonsMantCalReporte.onClick(this.windowName+".reporte()");
		imgButtonsMantCalBuscar.onClick(this.windowName+".buscar()");
	  	imgButtonsMantCalLimpiar.onClick(this.windowName+".limpiar()");
	  	imgButtonsMantCalSalir.onClick('dialogsMantCalificativos.close()');	  	 	
    },
    
    buscar : function() {
    	editsMantCalCodigo.readOnly(false);
    	imgButtonsMantCalAgregar.setEnable();
    	imgButtonsMantCalModificar.setDisable();
    	imgButtonsMantCalEliminar.setDisable();
    	imgButtonsMantCalReporte.setDisable();
    	gridsMantCalDescripcion.clean();
    	Tool.getGridData("MantObject", "getCalificativoCodificado", dialogsMantCalificativos, gridsMantCalDescripcion, imgButtonsMantCalReporte.setEnable(), editsMantCalCodigo, editsMantCalCodigo, memoMantCalDescripcion, memoMantCalDescripcion); 		    		
    },
    
    reporte : function() {
		rep = new Report('portrait');
    	rep.setPositionIcon(1090,44);
    	rep.setNoRepeatHead();
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'bold helvetica',0, 0, 0, 8, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'bold helvetica', 3);
		rep.addTable('TablaRepoBoletinCodigo',['Nº','Código','Descripción'],560  ,120);
		rep.setTotalRowTable(20);
		rep.setHeightRow(20);
        rep.setSizeColumnArray([20,70,500]);
        rep.setAlignData(['left','center','left']); 
        rep.addJsonData('TablaRepoBoletinCodigo','getMantCalificativos',[0,1,2]);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		rep.renderToExcel();
    },

    limpiarCoreUpdate : function() {
    	editsMantCalCodigo.clear();
    	memoMantCalDescripcion.clear();
    	editsMantCalLeyenda.clear();
    	this.buscar();
    },
    	
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMantCalCodigo.valid(dialogsMantCalificativos))
			if (memoMantCalDescripcion.valid(dialogsMantCalificativos))
				if (pcbMantCalEstado.valid(dialogsMantCalificativos)) {
					if (methodName != 'eliminar') {
						rlx.add('reg', memoMantCalDescripcion);
						rlx.add('reg', pcbMantCalEstado);
						rlx.add('reg', editsMantCalLeyenda);
					}
					rlx.add('reg', editsMantCalCodigo);
					Tool.cnnSrv('MantObject', methodName + 'CalificativoCodificado', this.windowName + '.limpiarCoreUpdate()', rlx);
				} 
	}
};