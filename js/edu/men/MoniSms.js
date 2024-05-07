var dialogsMoniSms = new Object();
var pcbMoniSmsFecha = new Object();
var pcbMoniSmsTipMensaje = new Object();
var editsMoniSmsNCelular = new Object();
var pcbMoniSmsEstado = new Object();
var pcbMoniSmsPrioridad = new Object();
var pcbMoniSmsModo = new Object();
var editsMoniSmsUsuario = new Object();
var labelsMoniSmsContenido = new Object();
var memoMoniSmsContenido = new Object();
var gridsMoniSms = new Object();
var imgButtonsMoniSmsReenviar = new Object();
var imgButtonsMoniSmsGuardar = new Object();
var imgButtonsMoniSmsEliminar = new Object();
var imgButtonsMoniSmsLimpiar = new Object();
var imgButtonsMoniSmsReporte = new Object();
var imgButtonsMoniSmsBuscar = new Object();
var imgButtonsMoniSmsSalir = new Object();
var mwMoniSms = new Object();// minWindow

var MoniSms = {
	windowName : 'MoniSms',
	isCreate : false,
	idMoniSms: 0,
	nuCedula : 0,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMoniSms.isByClean())
 			this.limpiar();			
		dialogsMoniSms.show();
	},
	
	hide : function() {
		dialogsMoniSms.hide();
	},
	
	createMWs : function() {
      mwMoniSms = desktop.addMinWindow('Monitor Msj', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
      dialogsMoniSms.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMoniSms_Init : function() {
		dialogsMoniSms.setMinimizeXY(0,0);
		dialogsMoniSms.setCenterScreen();
		dialogsMoniSms.addSpace(0,0,20);
		dialogsMoniSms.addLn(1,1,1);
		dialogsMoniSms.setHeightCell(1,1,10);
		dialogsMoniSms.addObjToDialog(pcbMoniSmsFecha, 2, 1,24);
		dialogsMoniSms.addObjToDialog(pcbMoniSmsTipMensaje,2,1,24);
		dialogsMoniSms.addObjToDialog(pcbMoniSmsEstado,2,1,24);
		dialogsMoniSms.adjAllMarginObj(2,1,83);
		dialogsMoniSms.addObjToDialog(pcbMoniSmsPrioridad,3,1,24);
		dialogsMoniSms.addObject(pcbMoniSmsModo,158,61);
		dialogsMoniSms.addObject(editsMoniSmsNCelular,335,61);
		dialogsMoniSms.addObject(editsMoniSmsUsuario,679,61);
		dialogsMoniSms.addObject(labelsMoniSmsContenido,20,93);
		dialogsMoniSms.addObject(memoMoniSmsContenido,99,85);
		dialogsMoniSms.addLn(4,1,1);
		dialogsMoniSms.setHeightCell(4,1,46);
		dialogsMoniSms.addObjToDialog(gridsMoniSms.getObject(),5,1);
		dialogsMoniSms.addLn(6,1,1);
		dialogsMoniSms.setHeightCell(6,1,10);
		dialogsMoniSms.addObjToDialog(imgButtonsMoniSmsReenviar,7,1);
		dialogsMoniSms.addObjToDialog(imgButtonsMoniSmsGuardar,7,1);
		dialogsMoniSms.addObjToDialog(imgButtonsMoniSmsEliminar,7,1);
		dialogsMoniSms.addObjToDialog(imgButtonsMoniSmsLimpiar,7,1);		
		dialogsMoniSms.addObjToDialog(imgButtonsMoniSmsReporte,7,1);		
		dialogsMoniSms.addObjToDialog(imgButtonsMoniSmsBuscar,7,1);
		dialogsMoniSms.addObjToDialog(imgButtonsMoniSmsSalir,7,1);
		dialogsMoniSms.adjAllMarginObj(7,1,15);
		dialogsMoniSms.leftMarginObj(7,1,0,77);		
	},
  
	gridsMoniSms_Init : function() {
        gridsMoniSms.setFixColRow(false,true);
        gridsMoniSms.addTitleVectorX(['Nº','Usuario','Contenido','Nº Cell / Mail','Tipo Mensaje','Estado','PRD','Fecha Entrada','idTiMsj','idEdoMsj','idPrdMsj','idCtrlMsj','id','MD','Cedula','idModoMsj','fileMail']);
        gridsMoniSms.showData();
		gridsMoniSms.setSizeCol(1,34);
        gridsMoniSms.setSizeCol(2,61);
        gridsMoniSms.setSizeCol(3,265);
        gridsMoniSms.setSizeCol(4,100);
        gridsMoniSms.setSizeCol(5,84);
        gridsMoniSms.setSizeCol(6,83);
        gridsMoniSms.setSizeCol(7,40);
        gridsMoniSms.setSizeCol(8,90);
        gridsMoniSms.setSizeCol(9,0);
        gridsMoniSms.setSizeCol(10,0);
        gridsMoniSms.setSizeCol(11,0);
        gridsMoniSms.setSizeCol(12,0);
        gridsMoniSms.setSizeCol(13,0);
        gridsMoniSms.setSizeCol(14,39);
        gridsMoniSms.setSizeCol(15,80);
        gridsMoniSms.setSizeCol(16,0);
        gridsMoniSms.setSizeCol(17,0);
        gridsMoniSms.hideCol(9);
        gridsMoniSms.hideCol(10);
        gridsMoniSms.hideCol(11);
        gridsMoniSms.hideCol(12);
        gridsMoniSms.hideCol(13);
        gridsMoniSms.hideCol(16);
        gridsMoniSms.hideCol(17);
	},

	create : function() {
		dialogsMoniSms = dialogs.create('dialogsMoniSms',0,0,928,580,'MONITOR MENSAJE');
		dialogsMoniSms.setAdjY(20);
		pcbMoniSmsFecha = powerComboBox.create('pcbMoniSmsFecha','pcbMoniSmsFecha','Fecha (*):',1,82);
		pcbMoniSmsFecha.setDataType('string');
		pcbMoniSmsFecha.setValidEmpty();
		pcbMoniSmsFecha.enableReadOnlyEditor();
		pcbMoniSmsFecha.addEmptyOption();
		pcbMoniSmsFecha.setFieldFind(true);
		pcbMoniSmsTipMensaje = powerComboBox.create('pcbMoniSmsTipMensaje','pcbMoniSmsTipMensaje','Tipo Mensaje (*):',1,110);		
		pcbMoniSmsTipMensaje.setValidEmpty();
		pcbMoniSmsTipMensaje.enableReadOnlyEditor();
		pcbMoniSmsTipMensaje.addEmptyOption();
		pcbMoniSmsTipMensaje.setFieldFind(true);
		pcbMoniSmsEstado = powerComboBox.create('pcbMoniSmsEstado','pcbMoniSmsEstado','Estado (*):',1,79);
		pcbMoniSmsEstado.setValidEmpty();
		pcbMoniSmsEstado.enableReadOnlyEditor();
		pcbMoniSmsEstado.addEmptyOption();
		pcbMoniSmsEstado.setFieldFind(true);
		pcbMoniSmsEstado.oldId = ''; 
		pcbMoniSmsPrioridad = powerComboBox.create('pcbMoniSmsPrioridad','pcbMoniSmsPrioridad','Prioridad (*):',1,82);
		pcbMoniSmsPrioridad.setValidEmpty();
		pcbMoniSmsPrioridad.enableReadOnlyEditor();
		pcbMoniSmsPrioridad.addEmptyOption();
		pcbMoniSmsPrioridad.setFieldFind(true);
		pcbMoniSmsPrioridad.oldId = '';
		pcbMoniSmsPrioridad.setWidthCombo(32);
		pcbMoniSmsModo = powerComboBox.create('pcbMoniSmsModo','pcbMoniSmsModo','MD(*):',1,40);
		pcbMoniSmsModo.setValidEmpty();
		pcbMoniSmsModo.enableReadOnlyEditor();
		pcbMoniSmsModo.addEmptyOption();
		pcbMoniSmsModo.setFieldFind(true);
		pcbMoniSmsModo.setWidthCombo(32);
		pcbMoniSmsModo.addOptionAndSimpleValue(null, 'SMS', 1);
		pcbMoniSmsModo.addOptionAndSimpleValue(null, 'MAIL', 2);
		editsMoniSmsNCelular = edits.create('editsMoniSmsNCelular','editsMoniSmsNCelular','Nº Cell / Mail (*):',1,110,'normal');   
		editsMoniSmsNCelular.setMaxLength(50);
		editsMoniSmsNCelular.setValidEmpty();
		editsMoniSmsNCelular.setFieldFind(true);
		editsMoniSmsNCelular.setMaskPhone();
		editsMoniSmsNCelular.setSizeEdit(149);
		editsMoniSmsUsuario = edits.create('editsMoniSmsUsuario','editsMoniSmsUsuario','Usuario (*):',1,78,'normal');   
		editsMoniSmsUsuario.setMaxLength(15);
		editsMoniSmsUsuario.setValidEmpty();
		editsMoniSmsUsuario.setFieldFind(true);
		editsMoniSmsUsuario.setSizeEdit(149);		
		labelsMoniSmsContenido = labels.create('labelsMantEnvMenPerContenido','Contenido:',1);
		labelsMoniSmsContenido.setFont('arial black','12','Black');
		memoMoniSmsContenido = memo.create('memoMoniSmsContenido', '', 1, 1, 0);
        memoMoniSmsContenido.setValidEmpty();
		memoMoniSmsContenido.setFieldFind(true);
        memoMoniSmsContenido.setMaxLength(170);
        memoMoniSmsContenido.setDimension(805, 32);		
		gridsMoniSms = grids.create('gridsMoniSms',20,17);
		imgButtonsMoniSmsReenviar = imgButtons.create('imgButtonsMoniSmsReenviar','Reenviar','next.gif');
		imgButtonsMoniSmsGuardar = imgButtons.create('imgButtonsMoniSmsGuardar','Guardar','ok.png');
		imgButtonsMoniSmsEliminar = imgButtons.create('imgButtonsMoniSmsEliminar','Eliminar','eliminar.jpg');
		imgButtonsMoniSmsLimpiar = imgButtons.create('imgButtonsMoniSmsLimpiar','Limpiar','limpiar.png');
		imgButtonsMoniSmsReporte = imgButtons.create('imgButtonsMoniSmsReporte','Reporte','print.png');
		imgButtonsMoniSmsBuscar = imgButtons.create('imgButtonsMoniSmsBuscar','Buscar','icono_buscar.png');
		imgButtonsMoniSmsSalir = imgButtons.create('imgButtonsMoniSmsSalir','Salir','salir.png');
		imgButtonsMoniSmsReenviar.setDimension(90,22);
		imgButtonsMoniSmsGuardar.setDimension(90,22);
		imgButtonsMoniSmsEliminar.setDimension(90,22);
		imgButtonsMoniSmsLimpiar.setDimension(90,22);		
		imgButtonsMoniSmsReporte.setDisable();
    	imgButtonsMoniSmsReporte.setDimension(90,22);		
		imgButtonsMoniSmsBuscar.setDimension(90,22);
		imgButtonsMoniSmsSalir.setDimension(90,22);
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsMoniSms_Init();
		this.gridsMoniSms_Init();
		this.createMWs();
	},

	limpiar : function() {
		this.idMoniSms = 0;
		this.nuCedula = 0;
  		Tool.rstPwrCmb(pcbMoniSmsTipMensaje);
		pcbMoniSmsEstado.oldId = '';
		pcbMoniSmsPrioridad.oldId = '';
		Tool.rstPwrCmb(pcbMoniSmsEstado);
		Tool.rstPwrCmb(pcbMoniSmsPrioridad);
		pcbMoniSmsModo.setSelectedIndex(0);
		editsMoniSmsUsuario.setValue("");
		memoMoniSmsContenido.setText("");
		memoMoniSmsContenido.setEditMode(); 				
		editsMoniSmsUsuario.readOnly(false);		
  		gridsMoniSms.clean();
  		dialogsMoniSms.setMsg("");
  		imgButtonsMoniSmsReenviar.setDisable();
		imgButtonsMoniSmsGuardar.setDisable();
		imgButtonsMoniSmsReporte.setDisable();	
		imgButtonsMoniSmsEliminar.setDisable();	
		editsMoniSmsNCelular.delMaskPhone();
		Tool.cnnSrv('MsjObject', 'getMonitorSmsInit', this.windowName + '.loadInit()');
    },
    
	loadInit: function() {
		Tool.loadPowerComboData(dialogsMoniSms, pcbMoniSmsFecha, 0, 1, json('getFechaMonitor'));
		Tool.loadPowerComboData(dialogsMoniSms, pcbMoniSmsTipMensaje, 0, 1, json('getTipoSms'));
		Tool.loadPowerComboData(dialogsMoniSms, pcbMoniSmsEstado, 0, 1, json('getEstadoSms'));
		Tool.loadPowerComboData(dialogsMoniSms, pcbMoniSmsPrioridad, 0, 1, json('getPrioridadSms'));
	},

	buscar : function() {
		editsMoniSmsUsuario.readOnly(false);		
		gridsMoniSms.clean();
		pcbMoniSmsEstado.oldId = pcbMoniSmsEstado.getText();
		pcbMoniSmsPrioridad.oldId = pcbMoniSmsPrioridad.getText();
		Tool.getGridData('MsjObject', 'getMonitorSms', dialogsMoniSms, gridsMoniSms, new Function('imgButtonsMoniSmsReenviar.setEnable();imgButtonsMoniSmsGuardar.setEnable();imgButtonsMoniSmsEliminar.setEnable();imgButtonsMoniSmsReporte.setEnable();'), pcbMoniSmsFecha, pcbMoniSmsFecha, pcbMoniSmsFecha, pcbMoniSmsFecha, pcbMoniSmsTipMensaje, pcbMoniSmsTipMensaje, editsMoniSmsNCelular, editsMoniSmsNCelular, pcbMoniSmsEstado, pcbMoniSmsEstado, pcbMoniSmsPrioridad, pcbMoniSmsPrioridad, editsMoniSmsUsuario, editsMoniSmsUsuario, memoMoniSmsContenido, memoMoniSmsContenido, pcbMoniSmsModo, pcbMoniSmsModo);		
	},

    setData : function(){
		if (gridsMoniSms.getDataCell(1) != "") {
			editsMoniSmsUsuario.readOnly(true);					
			memoMoniSmsContenido.setReadOnly();
			editsMoniSmsNCelular.setValue(gridsMoniSms.getDataCell(4));
			pcbMoniSmsFecha.findOption(gridsMoniSms.getDataCell(8));			
			pcbMoniSmsTipMensaje.findOption(gridsMoniSms.getDataCell(9));
			pcbMoniSmsEstado.findOption(gridsMoniSms.getDataCell(10));
			pcbMoniSmsPrioridad.findOption(gridsMoniSms.getDataCell(11));
			pcbMoniSmsModo.findOption(gridsMoniSms.getDataCell(16));
			editsMoniSmsUsuario.setValue(gridsMoniSms.getDataCell(2));
			memoMoniSmsContenido.setText(gridsMoniSms.getDataCell(3));			
			this.idMoniSms = gridsMoniSms.getDataCell(13);
			this.nuCedula = gridsMoniSms.getDataCell(15);
		}
	},

	getTrans : function() {
		if (gridsMoniSms.getDataCell(1) != "") {
			if (gridsMoniSms.getDataCell(14) == '++MAIL')
				window.open("boletin/" + gridsMoniSms.getDataCell(17),'_blank','left=10,top=80,Height=1,width=600,toolbar=no,location=no,status=no,menubar=no,resizable=yes,scrollbars=yes');
		}
	},
   
	setMask : function(){
		if (pcbMoniSmsModo.getOption() == "SMS")
			editsMoniSmsNCelular.setMaskPhone(json('getDiscInter').data[0]);	
	},

	setEvents : function() {
		editsMoniSmsNCelular.onEnter(this.windowName + ".buscar()");
		editsMoniSmsUsuario.onEnter(this.windowName + ".buscar()");
		memoMoniSmsContenido.onEnter(this.windowName + ".buscar()");		
		gridsMoniSms.onClickCells(this.windowName + ".setData()");
		gridsMoniSms.onDblClickCells(this.windowName + ".getTrans()");
		imgButtonsMoniSmsReenviar.onClick(this.windowName + ".coreUpdateReenviar('guardarSms')");
		imgButtonsMoniSmsGuardar.onClick(this.windowName + ".coreUpdate('guardarSms')");
		imgButtonsMoniSmsEliminar.onClick(this.windowName + ".coreUpdate('eliminarSms')");
		imgButtonsMoniSmsLimpiar.onClick(this.windowName + ".limpiar()");		
		imgButtonsMoniSmsReporte.onClick(this.windowName + ".reporte()");		
		imgButtonsMoniSmsBuscar.onClick(this.windowName + ".buscar()");
		imgButtonsMoniSmsSalir.onClick('dialogsMoniSms.close()');	
		editsMoniSmsNCelular.onFocus(this.windowName +".setMask();")
	},

	limpiarCoreUpdate : function(methodName) {
		editsMoniSmsNCelular.delMaskPhone();
		pcbMoniSmsEstado.oldId = '';
		pcbMoniSmsPrioridad.oldId = '';
		pcbMoniSmsEstado.setSelectedIndex(0);
		pcbMoniSmsPrioridad.setSelectedIndex(0);
		pcbMoniSmsModo.setSelectedIndex(0);
		editsMoniSmsUsuario.setValue("");		
		editsMoniSmsUsuario.readOnly(false);
		memoMoniSmsContenido.setText("");
		memoMoniSmsContenido.setEditMode();
		imgButtonsMoniSmsReenviar.setDisable();
		imgButtonsMoniSmsGuardar.setDisable();
		imgButtonsMoniSmsReporte.setDisable();	
		imgButtonsMoniSmsEliminar.setDisable();	
		if ((methodName == 'eliminarSms' || methodName == 'eliminarSeleccionSms') && (this.idMoniSms == 0 || gridsMoniSms.getTotalRecord() == 1)) {
			this.idMoniSms = 0;
			this.nuCedula = 0;
			gridsMoniSms.clean();
			dlgWait.hide();
		}			
		else {
			this.idMoniSms = 0;//SE DUPLICO POR COMUNICACION ASINCRONA AL METODO: this.buscar()
			this.nuCedula = 0;
			this.buscar();
		}
	},
		
	reporte : function(){			
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,10);    	
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1128,40,rep.getRGBAObj(187,196,238,0.8),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addText(295, 25, 'INFORMACIÓN MENSAJERÍA',false);				
		//************************ TABLE ***************************		
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 9);		
		rep.addTable('TablaRepoAluPorSeccion',['Nº','Usuario','Fecha Entrada','Nº Cell / Email','Cédula','Tipo Sms','Modo','Estado',],394,44);
		rep.setTotalRowTable(32);
		rep.setHeightRow(28);  		
        rep.setSizeColumnArray([40,92,150,114,90,128,62,122]);			
        rep.setAlignData(['right','left','center','center','center','left','center','left']);			
        rep.addJsonData('TablaRepoAluPorSeccion','getMonitorSms',[0,1,7,3,14,4,13,5]);			
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),12,'helvetica','bold');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);				
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();		
		rep.previewHTML();		
	},
		
	coreUpdateReenviar : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");
		if (this.idMoniSms == 0 || editsMoniSmsNCelular.valid(dialogsMoniSms))
			if (pcbMoniSmsEstado.getText() != 2) {
                pcbMoniSmsEstado.setSelectedOption('PENDIENTE');
                pcbMoniSmsPrioridad.setSelectedOption('MEDIA');
				if (this.idMoniSms == 0) {
					rlx.add('reg', pcbMoniSmsEstado);
	                rlx.add('reg', pcbMoniSmsPrioridad);
					methodName = 'guardarSeleccionSms';

					rlx.add('reg', pcbMoniSmsFecha);
					rlx.add('reg', pcbMoniSmsFecha);
					rlx.add('reg', pcbMoniSmsFecha);
					rlx.add('reg', pcbMoniSmsTipMensaje);
					rlx.add('reg', pcbMoniSmsTipMensaje);
					rlx.addInt('reg', pcbMoniSmsEstado.oldId, true);
					rlx.addInt('reg', pcbMoniSmsEstado.oldId, true);
					rlx.addInt('reg', pcbMoniSmsPrioridad.oldId, true);
					rlx.addInt('reg', pcbMoniSmsPrioridad.oldId, true);
					rlx.add('reg', editsMoniSmsUsuario);
					rlx.add('reg', editsMoniSmsUsuario);
					rlx.add('reg', memoMoniSmsContenido);				
					rlx.add('reg', memoMoniSmsContenido);				
				}
				else {
					rlx.add('reg', editsMoniSmsNCelular);
	                rlx.add('reg', pcbMoniSmsEstado);
	                rlx.add('reg', pcbMoniSmsPrioridad);
	                rlx.addInt('reg', this.nuCedula);
	                rlx.add('reg', pcbMoniSmsModo);
                    rlx.addInt('reg', this.idMoniSms);
				}
				Tool.cnnSrv("MsjObject", methodName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
			}
			else
				Alert.show('Debe elegir un estado diferente a: ' + pcbMoniSmsEstado.getOption(), 'SISTEMA', Alert.TYPE_INFO);						
	},
	
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");
		if (this.idMoniSms == 0 || editsMoniSmsNCelular.valid(dialogsMoniSms))
			if ((this.idMoniSms == 0 && methodName == 'eliminarSms') || pcbMoniSmsEstado.valid(dialogsMoniSms))
				if ((this.idMoniSms == 0 && methodName == 'eliminarSms') || pcbMoniSmsPrioridad.valid(dialogsMoniSms)) 
					if (methodName != 'guardarSms' || pcbMoniSmsEstado.getText() != 2) {
						if (this.idMoniSms == 0) {
							if (methodName == 'guardarSms') {
			                    rlx.add('reg', pcbMoniSmsEstado);
			                    rlx.add('reg', pcbMoniSmsPrioridad);
								methodName = 'guardarSeleccionSms';
							}
							else
								methodName = 'eliminarSeleccionSms';
	
							rlx.add('reg', pcbMoniSmsFecha);
							rlx.add('reg', pcbMoniSmsFecha);
							rlx.add('reg', pcbMoniSmsFecha);
							rlx.add('reg', pcbMoniSmsTipMensaje);
							rlx.add('reg', pcbMoniSmsTipMensaje);
							rlx.addInt('reg', pcbMoniSmsEstado.oldId, true);
							rlx.addInt('reg', pcbMoniSmsEstado.oldId, true);
							rlx.addInt('reg', pcbMoniSmsPrioridad.oldId, true);
							rlx.addInt('reg', pcbMoniSmsPrioridad.oldId, true);
							rlx.add('reg', editsMoniSmsUsuario);
							rlx.add('reg', editsMoniSmsUsuario);
							rlx.add('reg', memoMoniSmsContenido);				
							rlx.add('reg', memoMoniSmsContenido);				
						}
						else {
							if (methodName == 'reenviar') {
			                    rlx.add('reg', editsMoniSmsNCelular);
			                    pcbMoniSmsEstado.setSelectedOption('PENDIENTE');
			                    rlx.add('reg', pcbMoniSmsEstado);
			                    pcbMoniSmsPrioridad.setSelectedOption('MEDIA');
			                    rlx.add('reg', pcbMoniSmsPrioridad);
			                    rlx.addInt('reg', this.nuCedula);
			                    rlx.add('reg', pcbMoniSmsModo);
							}
							else if (methodName == 'guardarSms') { 
			                    rlx.add('reg', editsMoniSmsNCelular);
			                    rlx.add('reg', pcbMoniSmsEstado);
			                    rlx.add('reg', pcbMoniSmsPrioridad);
			                    rlx.addInt('reg', this.nuCedula);
			                    rlx.add('reg', pcbMoniSmsModo);
							}
		                    rlx.addInt('reg', this.idMoniSms);
						}
						Tool.cnnSrv("MsjObject", methodName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
					}
					else
						Alert.show('Debe elegir un estado diferente a: ' + pcbMoniSmsEstado.getOption(), 'SISTEMA', Alert.TYPE_INFO);						
	}
};
