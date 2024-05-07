var dialogsProcTrans	= {};
var calendarProcTranFecDesde      	= {};
var calendarProcTranFecHasta      	= {};
var pcbProcTranBanco              	= {};
var pcbProcTranEstado             	= {};
var editsProcTraCi                	= {};
var editsProcTraNombre            	= {};
var editsProcTraApellido          	= {}; 
var editsProcTraReferencia        	= {}; 
var calendarProcTranFeBanco        	= {}; 
var editsProcTraMonto	        	= {}; 
var memoProcTraComentario			= {};
var gridsProcTransferencia        	= {};
//var imgButtonsProcTranCopiar		= {};
var imgButtonsProcTranEliminar		= {};
var imgButtonsProcTraRepSum        	= {};
var imgButtonsProcTraRepTx        	= {};
var imgButtonsProcTraLimpiar      	= {};
var imgButtonsProcTraBuscar       	= {};
var imgButtonsProcTranSalir       	= {};
var mwProcTransferencias          	= {};// minWindow
//var btnUpLoad					  	= {};

var ProcTransferencias = {
	windowName : 'ProcTransferencias',
	isCreate : false,
	idTransf : -1,
	feTransf : '',
	
	show : function() {
		if (!this.isCreate) {
		  this.init();
		  this.isCreate = true;
		}

		if (dialogsProcTrans.isByClean())
 			this.limpiar();			
		dialogsProcTrans.show();
	},
	
	hide : function() {
		dialogsProcTrans.hide();
	},
	
	createMWs : function() {
        mwProcTransferencias  = desktop.addMinWindow('Transf.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsProcTrans .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsProcTransferencias_Init : function() {
        dialogsProcTrans.setMinimizeXY(0,0);
        dialogsProcTrans.setCenterScreen();
		dialogsProcTrans.addObject(pcbProcTranBanco,20,38);
		pcbProcTranBanco.setWidthCombo(120);
		dialogsProcTrans.addObject(calendarProcTranFecDesde.getEditCalendar(), 252,38);
		dialogsProcTrans.addObject(calendarProcTranFecHasta.getEditCalendar(), 484,38);
		dialogsProcTrans.addObject(pcbProcTranEstado,713,38);
		pcbProcTranEstado.setWidthCombo(120);		
		dialogsProcTrans.addObject(editsProcTraCi, 20, 63);
		dialogsProcTrans.addObject(editsProcTraNombre, 252, 63);
		dialogsProcTrans.addObject(editsProcTraApellido, 484, 63);
		dialogsProcTrans.addObject(editsProcTraReferencia, 713, 63);
		dialogsProcTrans.addObject(calendarProcTranFeBanco, 713, 88);
		dialogsProcTrans.addObject(editsProcTraMonto, 713, 113);
		dialogsProcTrans.addObject(memoProcTraComentario, 20, 88);
		dialogsProcTrans.addObject(gridsProcTransferencia.getObject(),20, 145);		
        //dialogsProcTrans.addObject(imgButtonsProcTranCopiar,102,522);
        dialogsProcTrans.addObject(imgButtonsProcTraRepSum,120,522);
        dialogsProcTrans.addObject(imgButtonsProcTraRepTx,240,522);
        dialogsProcTrans.addObject(imgButtonsProcTranEliminar,360,522);
		dialogsProcTrans.addObject(imgButtonsProcTraLimpiar,480,522);		
		dialogsProcTrans.addObject(imgButtonsProcTraBuscar,600,522);		
        dialogsProcTrans.addObject(imgButtonsProcTranSalir,720,522);
	},
	
	gridsProcTransferencia_Init : function() {
        gridsProcTransferencia.setFixColRow(false,true);
        gridsProcTransferencia.addTitleVectorX(['C.i.','Banco','Fecha Ingreso','Fecha Pago.','Fecha Banco','Comentario','Referencia','Monto Estudiante','Monto Banco','Estado','Nombre','Apellido','moreal','idtransf','feTransf']);
        gridsProcTransferencia.showData();
        gridsProcTransferencia.setReadOnlyToAll();
        gridsProcTransferencia.setSizeCol(1,70);
        gridsProcTransferencia.setSizeCol(2,145);
        gridsProcTransferencia.setSizeCol(3,65);
		gridsProcTransferencia.setSizeCol(4,65);
        gridsProcTransferencia.setSizeCol(5,65);
        gridsProcTransferencia.setSizeCol(6,100);
		gridsProcTransferencia.setSizeCol(7,100);
        gridsProcTransferencia.setSizeCol(8,100);
        gridsProcTransferencia.setSizeCol(9,100);
        gridsProcTransferencia.setSizeCol(10,80);
        gridsProcTransferencia.setSizeCol(11,80);
        gridsProcTransferencia.setSizeCol(12,80);
        gridsProcTransferencia.setSizeCol(13,0);
        gridsProcTransferencia.setSizeCol(14,0);
        gridsProcTransferencia.setSizeCol(15,0);
        gridsProcTransferencia.hideCol(11);
        gridsProcTransferencia.hideCol(12);
        gridsProcTransferencia.hideCol(13);
        gridsProcTransferencia.hideCol(14);
        gridsProcTransferencia.hideCol(15);
	},	
	
	create : function() {
		dialogsProcTrans = dialogs.create('dialogsProcTrans',0,0,942,535,'TRANSFERENCIAS');
		dialogsProcTrans.setAdjY(30);
		pcbProcTranBanco = powerComboBox.create('pcbProcTranBanco', 'pcbProcTranBanco', 'Banco (*):', 1,80);
		pcbProcTranBanco.enableReadOnlyEditor();
		pcbProcTranBanco.setFieldFind(true);
		pcbProcTranBanco.addEmptyOption();
		pcbProcTranBanco.setValidEmpty();		
		calendarProcTranFecDesde = calendars.create('calendarProcTranFecDesde');      
	    calendarProcTranFecDesde.setWidthEditCalendar(118);
        calendarProcTranFecDesde.setCaption('Desde (*):',1,80);
        calendarProcTranFecDesde.sendToFrom(100);
        calendarProcTranFecDesde.setValidEmpty();
        calendarProcTranFecDesde.setFieldFind(true);
		calendarProcTranFecHasta = calendars.create('calendarProcTranFecHasta');      
	    calendarProcTranFecHasta.setWidthEditCalendar(118);
        calendarProcTranFecHasta.setCaption('Hasta (*):',1,78);
        calendarProcTranFecHasta.sendToFrom(100);
        calendarProcTranFecHasta.setValidEmpty();
        calendarProcTranFecHasta.setFieldFind(true);
		pcbProcTranEstado = powerComboBox.create('pcbProcTranEstado', 'pcbProcTranEstado', 'Estado (*):', 1,68);
		pcbProcTranEstado.enableReadOnlyEditor();
		pcbProcTranEstado.setFieldFind(true);
		pcbProcTranEstado.addEmptyOption();
		pcbProcTranEstado.setValidEmpty();		
		editsProcTraCi = edits.create('editsProcTraCi','editsProcTraCi','C.i. (*):',1,80,'normal');
		editsProcTraCi.setValidInteger();
		editsProcTraCi.setFieldFind(true);
		editsProcTraCi.setSizeEdit(140);
		editsProcTraNombre = edits.create('editsProcTraNombre','editsProcTraNombre','Nombre (*):',1,80,'normal');
		editsProcTraNombre.setValidEmpty();
		editsProcTraNombre.setFieldFind(true);
		editsProcTraNombre.setSizeEdit(140);
		editsProcTraApellido = edits.create('editsProcTraApellido','editsProcTraApellido','Apellido (*):',1,78,'normal');
		editsProcTraApellido.setValidEmpty();
		editsProcTraApellido.setFieldFind(true);
		editsProcTraApellido.setSizeEdit(140);		
		editsProcTraReferencia = edits.create('editsProcTraReferencia','editsProcTraReferencia','Ref. (*):',1,68,'normal');
		editsProcTraReferencia.setValidEmpty();
		editsProcTraReferencia.setFieldFind(true);
		editsProcTraReferencia.setSizeEdit(140);
		calendarProcTranFeBanco = calendars.create('calendarProcTranFeBanco');      
		calendarProcTranFeBanco.setWidthEditCalendar(118);
		calendarProcTranFeBanco.setCaption('Fch. Bco.:',1,68);
		calendarProcTranFeBanco.sendToFrom(100);
		calendarProcTranFeBanco.setValidEmpty();
		editsProcTraMonto = edits.create('editsProcTraMonto','editsProcTraMonto','Monto:',1,68,'normal');
		editsProcTraMonto.setValidReal();
		editsProcTraMonto.setSizeEdit(140);
		memoProcTraComentario = memo.create('memoProcTraComentario', 'Comentario:', 1, 1, 78);
		memoProcTraComentario.setValidEmpty();
		memoProcTraComentario.setDimension(602, 42);
		memoProcTraComentario.setMaxLength(250);
		gridsProcTransferencia = grids.create('gridsProcTransferencia',15,15);			
		//imgButtonsProcTranCopiar = imgButtons.create('imgButtonsProcTranCopiar','Copiar Archivo','adjuntar.png');
		imgButtonsProcTranEliminar = imgButtons.create('imgButtonsProcTranEliminar','Eliminar','eliminar.jpg');
		imgButtonsProcTraLimpiar = imgButtons.create('imgButtonsProcTraLimpiar','Limpiar','limpiar.png');
		imgButtonsProcTraBuscar = imgButtons.create('imgButtonsProcTraBuscar','Buscar','icono_buscar.png');		
		imgButtonsProcTranSalir = imgButtons.create('imgButtonsProcTranSalir','Salir','salir.png');	  
		imgButtonsProcTraRepTx = imgButtons.create('imgButtonsProcTraRepTx','Reporte','reportesolvenciapago_1.png');
		imgButtonsProcTraRepSum = imgButtons.create('imgButtonsProcTraRepSum','Sumario','reportesolvenciapago_1.png');
        //imgButtonsProcTranCopiar.setDimension(130,22);
        imgButtonsProcTranEliminar.setDimension(100,22);		
		imgButtonsProcTraLimpiar.setDimension(100,22);
        imgButtonsProcTraBuscar.setDimension(100,22);		
        imgButtonsProcTranSalir.setDimension(100,22);
        imgButtonsProcTraRepTx.setDimension(100,22);		
        imgButtonsProcTraRepSum.setDimension(100,22);		
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsProcTransferencias_Init();
		this.gridsProcTransferencia_Init();
		this.createMWs(); 
	},
	
  	limpiarFind : function(ix) {
  		this.idTransf = -1;
  		this.feTransf = '';
  		editsProcTraCi.hideId = -1;
  		pcbProcTranBanco.setSelectedIndex(0);
  		calendarProcTranFecDesde.clear();
  		calendarProcTranFecHasta.clear();
		pcbProcTranEstado.setSelectedIndex(0);		
		editsProcTraReferencia.clear();
		calendarProcTranFeBanco.clear();
		editsProcTraMonto.clear();
		memoProcTraComentario.clear();
		this.activeBtnRep(0);
		gridsProcTransferencia.clean();	
		
  		switch (ix) {
		case 1: 
			editsProcTraNombre.clear();
			editsProcTraApellido.clear(); 		
			break;
		case 2: 
			editsProcTraCi.clear();
			editsProcTraApellido.clear(); 		
			break;
		default:
			editsProcTraCi.clear();
			editsProcTraNombre.clear();
			break;
		}
  	},
	
  	getTrans : function() {
		if (pcbProcTranBanco.valid(dialogsProcTrans))
			if (editsProcTraReferencia.valid(dialogsProcTrans)) 
				if (gridsProcTransferencia.getDataCell(1) != "") {
					new OpenWin().getFile("transf/" + pcbProcTranBanco.getText() + "_" + editsProcTraReferencia.getText() + ".jpg");
				}
	},
  	/*
	copyDoc : function() {
		if (pcbProcTranBanco.valid(dialogsProcTrans)) {
			AdjuArchivos.sizeFile(1024 * 1024 * 10);//2Mb
			AdjuArchivos.filter('');
			AdjuArchivos.process(29);
			AdjuArchivos.setExtFnc("imgButtonsProcTranCopiar.setCaption('Procesar Archivo')");
			AdjuArchivos.setCountBtn(1);
			AdjuArchivos.show();
		}
	},
   	*/
	setEvents : function() {
		pcbProcTranBanco.onChange(this.windowName + ".buscar()");
		calendarProcTranFecDesde.onSelectedDay(this.windowName + ".activeBtnRep(0)");
		calendarProcTranFecHasta.onSelectedDay(this.windowName + ".activeBtnRep(0)");
		pcbProcTranEstado.onChange(this.windowName + ".buscar()");
    	editsProcTraCi.onEnter(this.windowName + ".buscar()");
    	editsProcTraCi.onChange(this.windowName + ".limpiarFind(1)");
    	editsProcTraCi.onClick(this.windowName + ".limpiarFind(1)");
    	editsProcTraNombre.onEnter(this.windowName + ".buscar()");
    	editsProcTraNombre.onChange(this.windowName + ".limpiarFind(2)");
    	editsProcTraNombre.onClick(this.windowName + ".limpiarFind(2)");
    	editsProcTraApellido.onEnter(this.windowName + ".buscar()");
    	editsProcTraApellido.onChange(this.windowName + ".limpiarFind(3)");
    	editsProcTraApellido.onClick(this.windowName + ".limpiarFind(3)");
    	editsProcTraReferencia.onEnter(this.windowName + ".buscar()");
    	gridsProcTransferencia.onClickCells(this.windowName + ".setData()");
    	gridsProcTransferencia.onDblClickCells(this.windowName + ".getTrans()");
  		//imgButtonsProcTranCopiar.onClick(this.windowName + ".coreUpdateCopiar()");
  		imgButtonsProcTranEliminar.onClick(this.windowName + ".coreUpdate()");
		imgButtonsProcTraLimpiar.onClick(this.windowName + ".limpiar()");    	
    	imgButtonsProcTraBuscar.onClick(this.windowName + ".buscar()");
  		imgButtonsProcTranSalir.onClick('dialogsProcTrans.close()');
  		imgButtonsProcTraRepTx.onClick(this.windowName + ".reporteTrans()");
  		imgButtonsProcTraRepSum.onClick(this.windowName + ".buscarSum()");
  	},

  	setData : function() {
  		if (gridsProcTransferencia.getDataCell(1) != "") {
  			pcbProcTranBanco.setSelectedOption(gridsProcTransferencia.getDataCell(2));
  			editsProcTraCi.setValue(gridsProcTransferencia.getDataCell(1));
  			editsProcTraNombre.setValue(gridsProcTransferencia.getDataCell(11));
  			editsProcTraApellido.setValue(gridsProcTransferencia.getDataCell(12)); 
  			editsProcTraReferencia.setValue(gridsProcTransferencia.getDataCell(7));
  			memoProcTraComentario.setValue(gridsProcTransferencia.getDataCell(6));
  			calendarProcTranFeBanco.setFechaToEdit(Tool.getDate());
  			editsProcTraMonto.setValue(parseFloat(gridsProcTransferencia.getDataCell(13)).toFixed(2));
  			this.idTransf = gridsProcTransferencia.getDataCell(14);
  	  		this.feTransf = gridsProcTransferencia.getDataCell(15);
  			if (gridsProcTransferencia.getDataCell(10) == "PENDIENTE") {
  	  			imgButtonsProcTranEliminar.setEnable();
  			}
  			else {
  				imgButtonsProcTranEliminar.setDisable();
  				dialogsProcTrans.setMsg("NO PUEDE ELIMINAR TRANSFERENCIAS EN ESTADO PROCESADO");
  			}
		}     			
	},
	
	activeBtnRep : function(cmd) {
		this.idTransf = -1;
		this.feTransf = '';
		if (cmd == 1) {
			imgButtonsProcTraRepTx.setEnable();
		}
		else {
			gridsProcTransferencia.clean();	
			imgButtonsProcTranEliminar.setDisable();
			imgButtonsProcTraRepTx.setDisable();
		}
	},
	
  	buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");
 
    	if (editsProcTraCi.getValue() != '' && editsProcTraNombre.getValue() != '' && editsProcTraApellido.getValue() != '') {
			gridsProcTransferencia.clean();	
    		Tool.getGridData('MantObject', 'getTransArchivo', dialogsProcTrans, gridsProcTransferencia, this.windowName + '.activeBtnRep(1)', new MiniDataSet('rep', 'string', false), calendarProcTranFecDesde, calendarProcTranFecHasta, pcbProcTranBanco, pcbProcTranBanco, pcbProcTranEstado, pcbProcTranEstado, new MiniDataSet(editsProcTraCi.hideId, 'int', true), new MiniDataSet(editsProcTraCi.hideId, 'int', true), editsProcTraReferencia, editsProcTraReferencia);
    	}
    	else if (editsProcTraCi.getValue() != '' || editsProcTraNombre.getValue() != '' || editsProcTraApellido.getValue() != '') {
        	ResuBusqueda.setObjectExtFnc(editsProcTraCi, editsProcTraNombre, editsProcTraApellido, this.windowName + '.buscar()');
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsProcTrans, gridsResuBusqueda, 'ResuBusqueda', editsProcTraCi, editsProcTraCi, editsProcTraNombre, editsProcTraNombre, editsProcTraApellido, editsProcTraApellido);
		}
		else {
			if (editsProcTraReferencia.getValue() != '' || calendarProcTranFecDesde.valid(dialogsProcTrans))
				if (editsProcTraReferencia.getValue() != '' || calendarProcTranFecHasta.valid(dialogsProcTrans)) {
					gridsProcTransferencia.clean();
		    		Tool.getGridData('MantObject', 'getTransArchivo', dialogsProcTrans, gridsProcTransferencia, this.windowName + '.activeBtnRep(1)', new MiniDataSet('rep', 'string', false), calendarProcTranFecDesde, calendarProcTranFecHasta, pcbProcTranBanco, pcbProcTranBanco, pcbProcTranEstado, pcbProcTranEstado, new MiniDataSet(editsProcTraCi.hideId, 'int', true), new MiniDataSet(editsProcTraCi.hideId, 'int', true), editsProcTraReferencia, editsProcTraReferencia);
				}
		}
   	},
   	
  	limpiar : function() {
  		this.idTransf = -1;
		this.feTransf = '';
  		editsProcTraCi.hideId = -1;
  		pcbProcTranBanco.setSelectedIndex(0);
  		calendarProcTranFecDesde.clear();
  		calendarProcTranFecHasta.clear();
		pcbProcTranEstado.setSelectedIndex(0);		
  		editsProcTraCi.clear();
		editsProcTraNombre.clear();
		editsProcTraApellido.clear();
		editsProcTraReferencia.clear();
		memoProcTraComentario.clear();
		calendarProcTranFeBanco.clear();
		editsProcTraMonto.clear();
		gridsProcTransferencia.clean();	
		dialogsProcTrans.setMsg("");
		//imgButtonsProcTranCopiar.setCaption('Copiar Archivo');
		this.activeBtnRep(0);
		Tool.getPowerComboDataFnc(this.windowName + '.loadEdoTrans()', 'MantObject', 'getMantCueBancarias', dialogsProcTrans, pcbProcTranBanco, 5, 2);
	},
	
	loadEdoTrans : function() {
		pcbProcTranBanco.setSizeHeight(280); 
		Tool.getPowerComboData('MantObject', 'getEstadoTrans', dialogsProcTrans, pcbProcTranEstado, 0, 1);
	},
	
	reporteSum : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
		//rep = new Report('landscape');
    	rep.setPositionIcon(686,105);
    	rep.setHeadImage(imgEduca.banner,false);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','bold');
    	rep.addText(300, 115, 'SUMARIO DE TRANSFERENCIAS',false);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','bold');
		rep.addText(220, 140,'FECHA INGRESO    :   '+calendarProcTranFecDesde.getFechaFromEdit() + ' / ' + calendarProcTranFecHasta.getFechaFromEdit(),true);
		rep.addText(480, 140,'ESTADO    :   '+pcbProcTranEstado.getOption(),true);
		//////////////////////////////////////////TABLA DE DATOS///////////////////////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
  		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 9);	
		rep.addTable('tablaProcesarTrans',['BANCO','CUENTA','MES','CANTIDAD','MONTO'],396,150);		
		rep.setTotalRowTable(30);
		rep.setHeightRow(18);
		rep.setSizeColumnArray([230,120,155,85,210]);       
		rep.setAlignData(['left','center','left','right','right']);
		rep.addJsonData('tablaProcesarTrans','getTransSumario',[1,2,3,4,5]); 
        //////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();   	  	
	},

	buscarSum : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (calendarProcTranFecDesde.valid(dialogsProcTrans) && calendarProcTranFecHasta.valid(dialogsProcTrans) && pcbProcTranEstado.valid(dialogsProcTrans)) {
			rlx.addStr('reg', 'sum');
			rlx.add('reg', calendarProcTranFecDesde);
			rlx.add('reg', calendarProcTranFecHasta);
			rlx.add('reg', pcbProcTranEstado);
			Tool.cnnSrv('MantObject', 'getTransArchivo', this.windowName + ".reporteSum()", rlx);
		}
	},
	
	reporteTrans : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		//rep = new Report('portrait');
		rep = new Report('landscape');
    	rep.setPositionIcon(986,105);
    	rep.setHeadImage(imgEduca.banner,false);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','bold');
    	rep.addText(420, 115, 'REPORTE DE TRANSFERENCIAS',false);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','bold');
		rep.addText(450, 140,'FECHA INGRESO    :   '+calendarProcTranFecDesde.getFechaFromEdit() + ' / ' + calendarProcTranFecHasta.getFechaFromEdit(),true);
		//////////////////////////////////////////TABLA DE DATOS///////////////////////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
  		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 9);	
		rep.addTable('tablaProcesarTrans',['C.I.','BANCO','F. INGRESO','F. PAGO','F. BANCO','COMENTARIO','REFERENCIA ','MONTO ESTUDIANTE','MONTO BANCO','ESTADO'],532,150);		
		rep.setTotalRowTable(30);
		rep.setHeightRow(18);
		rep.setSizeColumnArray([80,130,90,90,90,110,110,145,142,90]);       
		rep.setAlignData(['right','left','center','center','center','left','right','right','right','left']);
		rep.addJsonData('tablaProcesarTrans','getTransArchivo',[0,1,2,3,4,5,6,7,8,9]); 
        //////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();   	  	
	},
	
/*
	limpiarCoreUpdateCopiar : function() {
		this.idTransf = -1;
		this.feTransf = '';
		gridsProcTransferencia.clean();
		this.activeBtnRep(1);
		Tool.loadGridData(dialogsProcTrans, gridsProcTransferencia, false, json('getTransArchivo'));
	},

	coreUpdateCopiar : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbProcTranBanco.valid(dialogsProcTrans)) {
			if (imgButtonsProcTranCopiar.getCaption() == 'Procesar Archivo') {
				rlx.add('reg', pcbProcTranBanco);
				rlx.addStr('reg', AdjuArchivos.getFileName());
				rlx.add('reg', calendarProcTranFecDesde);
				rlx.add('reg', calendarProcTranFecHasta);
				AdjuArchivos.clearFileName();
				imgButtonsProcTranCopiar.setCaption('Copiar Archivo');
				Tool.cnnSrv('MantObject', 'procesarArchivo', this.windowName + ".limpiarCoreUpdateCopiar()", rlx);
			}
			else {
				this.copyDoc();
			}
		}
	}
*/
	limpiarCoreUpdate : function() {
		this.idTransf = -1;
		this.feTransf = '';
		pcbProcTranBanco.setSelectedIndex(0);
		pcbProcTranEstado.setSelectedIndex(0);		
		editsProcTraReferencia.clear();
		memoProcTraComentario.clear();
		calendarProcTranFeBanco.clear();
		editsProcTraMonto.clear();
		gridsProcTransferencia.clean();
		this.activeBtnRep(0);
		this.buscar();
	},
	
	coreUpdate : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsProcTraCi.valid(dialogsProcTrans)) 
			if (editsProcTraNombre.valid(dialogsProcTrans)) 
				if (editsProcTraApellido.valid(dialogsProcTrans)) 
					if (editsProcTraReferencia.valid(dialogsProcTrans)) 
						if (calendarProcTranFeBanco.valid(dialogsProcTrans)) 
							if (editsProcTraMonto.valid(dialogsProcTrans)) {
								rlx.addInt('reg', this.idTransf);
								Tool.cnnSrv('MantObject', 'eliminarTransf', this.windowName + ".limpiarCoreUpdate()", rlx);
							}
	}
};