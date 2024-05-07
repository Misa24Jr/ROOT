var dialogsMantCodObservacion = new Object();
var editsMantCodObsCodigo = new Object();
var memoMantCodObsDescripcion = new Object();
var gridsMantCodObsDescripcion = new Object();
var imgButtonsMantCodObsAgregar = new Object();
var imgButtonsMantCodObsModificar = new Object();
var imgButtonsMantCodObsEliminar = new Object();
var imgButtonsMantCodObsLimpiar = new Object();
var imgButtonsMantCodObsReporte = new Object();
var imgButtonsMantCodObsBuscar = new Object();
var imgButtonsMantCodObsSalir = new Object();
var mwMantCodObservacion = new Object();// minWindow

var MantCodObservacion = {
	windowName : 'MantCodObservacion',
	isCreate : false,
	idContenido : 0,
	
	show : function(){
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantCodObservacion.isByClean())
 			this.limpiar();			
		dialogsMantCodObservacion.showModal();
	},
	
	hide : function() {
		dialogsMantCodObservacion.hide();
	},
	
	createMWs : function() {
        mwMantCodObservacion = desktop.addMinWindow('M.C.Obsertvación', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantCodObservacion.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantCodObservacion_Init : function() {
        dialogsMantCodObservacion.setMinimizeXY(0,0);
        dialogsMantCodObservacion.setCenterScreen();
        dialogsMantCodObservacion.addSpace(0,0,20);
        dialogsMantCodObservacion.addLn(1,1,1);
		dialogsMantCodObservacion.setHeightCell(1,1,90); 		
		dialogsMantCodObservacion.addObject(editsMantCodObsCodigo,20,38);	
		dialogsMantCodObservacion.addObject(memoMantCodObsDescripcion,20,62);
        dialogsMantCodObservacion.addLn(3,1,1);
		dialogsMantCodObservacion.setHeightCell(3,1,10);         
		dialogsMantCodObservacion.addObjToDialog(gridsMantCodObsDescripcion.getObject(),4,1);
        dialogsMantCodObservacion.addLn(5,1,1);
		dialogsMantCodObservacion.setHeightCell(5,1,9);  
        dialogsMantCodObservacion.addObjToDialog(imgButtonsMantCodObsAgregar,6,1);
        dialogsMantCodObservacion.addObjToDialog(imgButtonsMantCodObsModificar,6,1);
        dialogsMantCodObservacion.addObjToDialog(imgButtonsMantCodObsEliminar,6,1);
        dialogsMantCodObservacion.addObjToDialog(imgButtonsMantCodObsLimpiar,6,1);
        dialogsMantCodObservacion.addObjToDialog(imgButtonsMantCodObsReporte,6,1);
		dialogsMantCodObservacion.addObjToDialog(imgButtonsMantCodObsBuscar,6,1);
        dialogsMantCodObservacion.addObjToDialog(imgButtonsMantCodObsSalir,6,1); 
        dialogsMantCodObservacion.adjAllMarginObj(6,1,18);
        dialogsMantCodObservacion.leftMarginObj(6,1,0,54);		
	},
  
	gridsMantCodObsDescripcion_Init : function() {
        gridsMantCodObsDescripcion.setFixColRow(false,true);
        gridsMantCodObsDescripcion.addTitleVectorX(['Nº','Código','Descripción']);
        gridsMantCodObsDescripcion.showData();        
        gridsMantCodObsDescripcion.setSizeCol(1,50);       
		gridsMantCodObsDescripcion.setSizeCol(2,100);
		gridsMantCodObsDescripcion.setSizeCol(3,704);
	},

	create : function() {
		dialogsMantCodObservacion = dialogs.create('dialogsMantCodObservacion',0,0,899,574,'MANTENIMIENTO CÓDIGO DE OBSERVACIÓN');
		dialogsMantCodObservacion.setAdjY(35);			
		editsMantCodObsCodigo = edits.create('editsMantCodObsCodigo','editsMantCodObsCodigo','Código (*): ',1,95,'normal'); 
		editsMantCodObsCodigo.setValidInteger();
		editsMantCodObsCodigo.setMaxLength(4);
		editsMantCodObsCodigo.setFieldFind(true);
		editsMantCodObsCodigo.setSizeEdit(35);			
		memoMantCodObsDescripcion = memo.create('memoMantCodObsDescripcion','Descripción (*):',1,0,94);
        memoMantCodObsDescripcion.setValidEmpty(); 
		memoMantCodObsDescripcion.vAlignCaption('middle');
		memoMantCodObsDescripcion.setDimension(761, 50);
		memoMantCodObsDescripcion.setMaxLength(2000);
		memoMantCodObsDescripcion.setFieldFind(true);
		gridsMantCodObsDescripcion = grids.create('gridsMantCodObsDescripcion',20,3);
		imgButtonsMantCodObsAgregar = imgButtons.create('imgButtonsMantCodObsAgregar','Agregar','ok.png');
		imgButtonsMantCodObsModificar = imgButtons.create('imgButtonsMantCodObsModificar','Modificar','icono_modificar.png');
		imgButtonsMantCodObsEliminar = imgButtons.create('imgButtonsMantCodObsEliminar','Eliminar','eliminar.png');
      	imgButtonsMantCodObsLimpiar = imgButtons.create('imgButtonsMantCodObsLimpiar','Limpiar','limpiar.png');
      	imgButtonsMantCodObsReporte = imgButtons.create('imgButtonsMantCodObsReporte','Reporte','print.png');
		imgButtonsMantCodObsBuscar = imgButtons.create('imgButtonsMantCodObsBuscar','Buscar','icono_buscar.png');		
      	imgButtonsMantCodObsSalir = imgButtons.create('imgButtonsMantCodObsSalir','Salir','salir.png');
        imgButtonsMantCodObsAgregar.setDimension(90,22);
        imgButtonsMantCodObsModificar.setDimension(90,22);
        imgButtonsMantCodObsEliminar.setDimension(90,22);
        imgButtonsMantCodObsLimpiar.setDimension(90,22);
        imgButtonsMantCodObsReporte.setDimension(90,22);
		imgButtonsMantCodObsBuscar.setDimension(90,22);
        imgButtonsMantCodObsSalir.setDimension(90,22);
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsMantCodObservacion_Init();
		this.gridsMantCodObsDescripcion_Init();
		this.createMWs();		
	},

  	limpiar : function() {
		this.isCreate = false;
  		editsMantCodObsCodigo.readOnly(false);
		editsMantCodObsCodigo.clear();
  		memoMantCodObsDescripcion.setValue("");
  		gridsMantCodObsDescripcion.clean();
		imgButtonsMantCodObsAgregar.setEnable();
		imgButtonsMantCodObsModificar.setDisable();
		imgButtonsMantCodObsEliminar.setDisable();	
		imgButtonsMantCodObsReporte.setDisable();
  		dialogsMantCodObservacion.setMsg("");
		this.buscar();
  	},
  	
  	setData : function() {
		if (gridsMantCodObsDescripcion.getDataCell(1) != ""){
			editsMantCodObsCodigo.readOnly(true);
			editsMantCodObsCodigo.setValue(gridsMantCodObsDescripcion.getDataCell(2));
	        memoMantCodObsDescripcion.setValue(gridsMantCodObsDescripcion.getDataCell(3));
	        imgButtonsMantCodObsAgregar.setDisable();
			imgButtonsMantCodObsModificar.setEnable();
			imgButtonsMantCodObsEliminar.setEnable();
        }     			
	},
  	
  	setDataCodigoObservacion : function() {
		try {
    		if (gridsMantCodObsDescripcion.getDataCell(1) != "") {
				lgObservacion.setCodigoIndObs(gridsMantCodObsDescripcion.getDataCell(2));
				dialogsMantCodObservacion.close();
			}
		}
    	catch(err) {
			console.log(err);
    	}
	},

  	setEvents : function() {
  		editsMantCodObsCodigo.onEnter(this.windowName + ".buscar()");
  		gridsMantCodObsDescripcion.onClickCells(this.windowName+".setData()");
  		gridsMantCodObsDescripcion.onDblClickCells(this.windowName+".setDataCodigoObservacion()");
	    imgButtonsMantCodObsAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantCodObsModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantCodObsEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
		imgButtonsMantCodObsReporte.onClick(this.windowName+".reporte()");
		imgButtonsMantCodObsBuscar.onClick(this.windowName+".buscar()");
	  	imgButtonsMantCodObsLimpiar.onClick(this.windowName+".limpiar()");
	  	imgButtonsMantCodObsSalir.onClick('dialogsMantCodObservacion.close()');	  	 	
    },
    
    buscar : function() {
    	editsMantCodObsCodigo.readOnly(false);
    	imgButtonsMantCodObsAgregar.setEnable();
    	imgButtonsMantCodObsModificar.setDisable();
    	imgButtonsMantCodObsEliminar.setDisable();
    	imgButtonsMantCodObsReporte.setDisable();
    	gridsMantCodObsDescripcion.clean();
    	Tool.getGridData("MantObject", "getObservacionCodificado", dialogsMantCodObservacion, gridsMantCodObsDescripcion, imgButtonsMantCodObsReporte.setEnable(), editsMantCodObsCodigo, editsMantCodObsCodigo, memoMantCodObsDescripcion, memoMantCodObsDescripcion); 		    		
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
        rep.addJsonData('TablaRepoBoletinCodigo','getMantCodObservacion',[0,1,2]);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		rep.renderToExcel();
    },

    limpiarCoreUpdate : function() {
    	editsMantCodObsCodigo.clear();
    	memoMantCodObsDescripcion.setValue('');
    	this.buscar();
    },
    	
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMantCodObsCodigo.valid(dialogsMantCodObservacion))
			if (memoMantCodObsDescripcion.valid(dialogsMantCodObservacion)) {
				if (methodName != 'eliminar') {
					rlx.add('reg', memoMantCodObsDescripcion);
				}
				rlx.add('reg', editsMantCodObsCodigo);
				Tool.cnnSrv('MantObject', methodName + 'ObservacionCodificado', this.windowName + '.limpiarCoreUpdate()', rlx);
			} 
	}
};