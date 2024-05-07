var dialogsTransferencias  	= {};
var pcbTranBancoOrigen		= {};
var pcbTranBanco           	= {};
var editsTranReferencia    	= {};
var calendarTranFecPago    	= {};
var editsTranMonto         	= {};
var editsTranCedula        	= {};
var editsTranNombre        	= {};
var memoTranComentario		= {};
var gridsTransferencias    	= {};
var imgButtonsTranGuardar  	= {};
var imgButtonsTranCopiar  	= {};
var imgButtonsTranLimpiar  	= {};
var imgButtonsTranEliminar	= {};
var imgButtonsTranSalir		= {};
var mwTransferencias		= {};// minWindow

var Transferencias = {
	windowName : 'Transferencias',
	isCreate : false,
	idTraidTransns: -1,
	
	show : function() {
		if (!this.isCreate) {
		  this.init();
		  this.isCreate = true;
		}

		if (dialogsTransferencias.isByClean())
 			this.limpiar();			
		dialogsTransferencias.show();
	},
	
	hide : function() {
		dialogsTransferencias.hide();
	},
	
	createMWs : function() {
        mwTransferencias  = desktop.addMinWindow('Transf. Bco.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsTransferencias .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsTransferencias_Init : function() {
        dialogsTransferencias.setMinimizeXY(0,0);
        dialogsTransferencias.setCenterScreen();		
		dialogsTransferencias.addObject(pcbTranBancoOrigen,20,38);
		dialogsTransferencias.addObject(pcbTranBanco,245,38);
		dialogsTransferencias.addObject(calendarTranFecPago,20,63);
		dialogsTransferencias.addObject(editsTranReferencia, 245,63);		
		dialogsTransferencias.addObject(editsTranMonto,462,63);
		dialogsTransferencias.addObject(editsTranCedula,20,88);
		dialogsTransferencias.addObject(editsTranNombre, 245,88);		
		dialogsTransferencias.addObject(gridsTransferencias.getObject(),20,145);					
		dialogsTransferencias.addObject(memoTranComentario, 20,113);		
		dialogsTransferencias.addObject(imgButtonsTranGuardar,55,400);	
		dialogsTransferencias.addObject(imgButtonsTranCopiar,187,400);
		dialogsTransferencias.addObject(imgButtonsTranEliminar,319,400);		
        dialogsTransferencias.addObject(imgButtonsTranSalir,451,400);        
	},
	gridsTransferencias_Init : function() {
        gridsTransferencias.setFixColRow(false,true);
        gridsTransferencias.addTitleVectorX(['Banco','Fecha / Pago','Referencia','Monto','Estado','ceTitula','noTitular','coment','idCtaBco','idEdoTransf','moReal','idtransf','bcoOrigen']);
        gridsTransferencias.showData();
        gridsTransferencias.setReadOnlyToAll();
        gridsTransferencias.setSizeCol(1,200);
		gridsTransferencias.setSizeCol(2,90);
		gridsTransferencias.setSizeCol(3,90);
		gridsTransferencias.setSizeCol(4,103);
		gridsTransferencias.setSizeCol(5,92);        
		gridsTransferencias.setSizeCol(6,0);        
		gridsTransferencias.setSizeCol(7,0);        
		gridsTransferencias.setSizeCol(8,0);        
		gridsTransferencias.setSizeCol(9,0);
		gridsTransferencias.setSizeCol(10,0);
		gridsTransferencias.setSizeCol(11,0);
		gridsTransferencias.setSizeCol(12,0);
		gridsTransferencias.setSizeCol(13,0);
        gridsTransferencias.hideCol(6);
        gridsTransferencias.hideCol(7);
        gridsTransferencias.hideCol(8);
        gridsTransferencias.hideCol(9);
        gridsTransferencias.hideCol(10);
        gridsTransferencias.hideCol(11);
        gridsTransferencias.hideCol(12);
        gridsTransferencias.hideCol(13);
	},
	
	create : function() {
		dialogsTransferencias = dialogs.create('dialogsTransferencias',0,0,620,412,'TRANSFERENCIAS BANCO');
		dialogsTransferencias.setAdjY(37);		
		pcbTranBancoOrigen = powerComboBox.create('pcbTranBancoOrigen', 'pcbTranBancoOrigen', 'Banco Origen :', 1,125);
		pcbTranBancoOrigen.setWidthCombo(71);
		pcbTranBancoOrigen.enableReadOnlyEditor();
		pcbTranBancoOrigen.addEmptyOption();
		pcbTranBancoOrigen.setValidEmpty();			
		pcbTranBanco = powerComboBox.create('pcbTranBanco', 'pcbTranBanco', 'Banco Destino :', 1,100);
		pcbTranBanco.setWidthCombo(234);
		pcbTranBanco.enableReadOnlyEditor();
		pcbTranBanco.addEmptyOption();
		pcbTranBanco.setValidEmpty();			
		editsTranReferencia = edits.create('editsTranReferencia','editsTranReferencia','Referencia :',1,100,'normal');
		editsTranReferencia.setValidEmpty();		
		editsTranReferencia.setSizeEdit(105);
		editsTranReferencia.setMaxLength(15);		
		calendarTranFecPago = calendars.create('calendarTranFecPago');      
	    calendarTranFecPago.setWidthEditCalendar(70);
        calendarTranFecPago.setCaption('Fecha de Pago :',1,125);
        calendarTranFecPago.sendToFrom(100);
        calendarTranFecPago.setValidEmpty();		
		editsTranMonto = edits.create('editsTranMonto','editsTranMonto','Monto :',1,48,'normal');
		editsTranMonto.setValidReal();		
		editsTranMonto.setSizeEdit(90);
		editsTranMonto.setMaxLength(15);		
		editsTranCedula = edits.create('editsTranCedula','editsTranCedula','Cédula / Rif. Titular :',1,125,'normal');
		editsTranCedula.setValidEmpty();		
		editsTranCedula.setSizeEdit(91);
		editsTranCedula.setMaxLength(20);	
		editsTranNombre = edits.create('editsTranNombre','editsTranNombre','Nombre Titular :',1,100,'normal');
		editsTranNombre.setValidEmpty();		
		editsTranNombre.setSizeEdit(255);
		editsTranNombre.setMaxLength(20);
		gridsTransferencias = grids.create('gridsTransferencias',10,13);		
		memoTranComentario = memo.create('memoTranComentario', 'Comentario :', 1, 1, 123);
		memoTranComentario.setValidEmpty();		
		memoTranComentario.setDimension(455, 25);
		memoTranComentario.setMaxLength(250);
		imgButtonsTranGuardar = imgButtons.create('imgButtonsTranGuardar','Guardar.','ok.png');				
		imgButtonsTranCopiar = imgButtons.create('imgButtonsTranCopiar','Copiar Imagen','adjuntar.png');				
		imgButtonsTranEliminar = imgButtons.create('imgButtonsTranEliminar','Eliminar','eliminar.jpg');				
		imgButtonsTranSalir = imgButtons.create('imgButtonsTranSalir','Salir','salir.png');		
        imgButtonsTranGuardar.setDimension(110,22);
        imgButtonsTranCopiar.setDimension(110,22);
        imgButtonsTranEliminar.setDimension(110,22);
        imgButtonsTranSalir.setDimension(110,22);
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsTransferencias_Init();
		this.gridsTransferencias_Init();
		this.createMWs(); 
	},
	
  	getTrans : function() {
		if (gridsTransferencias.getDataCell(1) != "") {
			new OpenWin().getFile("transf/" + gridsTransferencias.getDataCell(9) + "_" + gridsTransferencias.getDataCell(3) + ".jpg");
		}
	},

  	copyDoc : function() {
		if (pcbTranBancoOrigen.valid(dialogsTransferencias))
			if (pcbTranBanco.valid(dialogsTransferencias))
	    		if (calendarTranFecPago.valid(dialogsTransferencias))
	        		if (editsTranReferencia.valid(dialogsTransferencias))
	            		if (editsTranMonto.valid(dialogsTransferencias))
	                		if (editsTranCedula.valid(dialogsTransferencias))
	                    		if (editsTranNombre.valid(dialogsTransferencias)) {
									AdjuArchivos.sizeFile(1024 * 1024 * 2);//2Mb
									AdjuArchivos.filter('.jpg');
									AdjuArchivos.process(30);
									AdjuArchivos.parameter(pcbTranBanco.getText() + "_" + editsTranReferencia.getText() + '.jpg');
									AdjuArchivos.setExtFnc(this.windowName + ".coreUpdate('guardar')");
									AdjuArchivos.setCountBtn(1);
									AdjuArchivos.show();
	                    		}
	},
	
	setEvents : function() {
		pcbTranBancoOrigen.onChange(this.windowName + ".loadCtaBco(-1)");
		gridsTransferencias.onClickCells(this.windowName + ".setData()");
		gridsTransferencias.onDblClickCells(this.windowName + ".getTrans()");
    	imgButtonsTranGuardar.onClick(this.windowName + ".coreUpdate('guardar')");
    	imgButtonsTranCopiar.onClick(this.windowName + ".copyDoc()");
    	imgButtonsTranEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");				
  		imgButtonsTranSalir.onClick('dialogsTransferencias.close()');
  	},

  	loadCtaBco : function(idCtaBco) {
		Tool.getPowerComboDataFnc(this.windowName + '.autoBcoDst(' + idCtaBco + ')', 'MantObject', 'getBancoDestino', dialogsTransferencias, pcbTranBanco, 0, 1, pcbTranBancoOrigen);
  	},
  	
  	autoBcoDst : function(idCtaBco) {
  		if (idCtaBco > 0)
  			pcbTranBanco.findOption(idCtaBco);
  		else if (json('getBancoDestino').data[0].length == 1)
  			pcbTranBanco.setSelectedIndex(1);
  	},
  	
  	limpiar : function() {
  		this.idTrans = -1;
  		AdjuArchivos.clearFileName();
		pcbTranBancoOrigen.clear();
		pcbTranBanco.clear();
		calendarTranFecPago.clear();
		editsTranReferencia.readOnly(false);
		editsTranReferencia.clear();
		editsTranMonto.clear();
  		editsTranCedula.clear();
		editsTranNombre.clear();
		memoTranComentario.clear();
		gridsTransferencias.clean();
  		dialogsTransferencias.setMsg("");
  		imgButtonsTranEliminar.setDisable();
		Tool.getPowerComboDataFnc(this.windowName + '.loadTransEstudiante()', 'MantObject', 'getBancoOrigen', dialogsTransferencias, pcbTranBancoOrigen, 0, 1);
	},
	
	loadTransEstudiante : function() {
		Tool.getGridData('MantObject', 'getTransEstudiante', dialogsTransferencias, gridsTransferencias, false);
	},
	
  	setData : function() {
  		if (gridsTransferencias.getDataCell(1) != "") {
  			editsTranReferencia.readOnly(true);
  			editsTranCedula.setValue(gridsTransferencias.getDataCell(6));
  	        editsTranNombre.setValue(gridsTransferencias.getDataCell(7));
  	        memoTranComentario.setValue(gridsTransferencias.getDataCell(8));
  			if (gridsTransferencias.getDataCell(10) == 1) {
  				this.idTrans = gridsTransferencias.getDataCell(12);
  				pcbTranBancoOrigen.findOption(gridsTransferencias.getDataCell(13));
  				calendarTranFecPago.setFechaToEdit(gridsTransferencias.getDataCell(2));
  				editsTranReferencia.setValue(gridsTransferencias.getDataCell(3));
  	            editsTranMonto.setValue(parseFloat(gridsTransferencias.getDataCell(11)).toFixed(2));
  	            imgButtonsTranEliminar.setEnable();
  				this.loadCtaBco(gridsTransferencias.getDataCell(9));
  			}
  			else {
  				editsTranReferencia.readOnly(false);
  				editsTranCedula.clear();
  	        	editsTranNombre.clear();
  	        	memoTranComentario.clear();
  				Alert.show('Solo puede seleccionar transferencias en estado PENDIENTE', 'SISTEMA', Alert.TYPE_INFO);
  			}
		}     			
	},
	
	limpiarCoreUpdate : function() {
		this.idTrans = -1;
		AdjuArchivos.clearFileName();
		calendarTranFecPago.clear();
		editsTranReferencia.readOnly(false);
		editsTranReferencia.clear();
		editsTranMonto.clear();
  		editsTranCedula.clear();
		editsTranNombre.clear();
		memoTranComentario.clear();
        imgButtonsTranEliminar.setDisable();
   		gridsTransferencias.clean();
   		this.loadTransEstudiante();
	},
	
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbTranBancoOrigen.valid(dialogsTransferencias))
			if (pcbTranBanco.valid(dialogsTransferencias))
	    		if (calendarTranFecPago.valid(dialogsTransferencias))
	        		if (editsTranReferencia.valid(dialogsTransferencias))
	            		if (editsTranMonto.valid(dialogsTransferencias))
	                		if (editsTranCedula.valid(dialogsTransferencias))
	                    		if (editsTranNombre.valid(dialogsTransferencias)) {
									if (methodName == 'eliminar') {
										rlx.addInt('reg', this.idTrans);
										rlx.add('reg', pcbTranBanco);
										rlx.add('reg', editsTranReferencia);
									}
									else {
										if (this.idTrans == -1) {
											rlx.add('reg', pcbTranBanco);
											rlx.add('reg', calendarTranFecPago);
											rlx.add('reg', editsTranReferencia);
											rlx.add('reg', editsTranMonto);
											rlx.add('reg', editsTranCedula);
											rlx.add('reg', editsTranNombre);
											rlx.add('reg', memoTranComentario);
										}
										else {
											methodName = 'modificar';
											rlx.add('reg', pcbTranBanco);
											rlx.add('reg', calendarTranFecPago);
											rlx.add('reg', editsTranReferencia);
											rlx.add('reg', editsTranMonto);
											rlx.add('reg', editsTranCedula);
											rlx.add('reg', editsTranNombre);
											rlx.add('reg', memoTranComentario);
											rlx.addInt('reg', this.idTrans);
										}
									}
									Tool.cnnSrv('MantObject', methodName + 'TransEstudiante', this.windowName + ".limpiarCoreUpdate()", rlx);
								}
	}
};