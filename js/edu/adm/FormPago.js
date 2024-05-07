var dialogsFormPago = new Object();
var editsFormPagMonPagar = new Object();
var editsFormPagMonSalFavor = new Object();
var editsFormPagResta = new Object();
var pcbFormPagForPago = new Object();
var pcbFormPagBanOrigen = new Object();
var pcbFormPagBanDestino = new Object();
var editsFormPagMonto = new Object();
var editsFormPagReferencia = new Object();
var calendarFormPagfecha = new Object();
var imagesFormPagAnaPago = new Object();
var gridsFormPago = new Object();
var labelsFormPagObservaciones = new Object();
var memoFormPagObservaciones = new Object();
var pcbFormPagTipDocumento = new Object();
var imgButtonsFormPagPagar = new Object();
var imgButtonsFormPagLimpiar = new Object();
var imgButtonsFormPagSalir = new Object();
var mwFormPago = new Object();// minWindow
var issaf = false; 

var FormPago = {
	windowName : 'FormPago',
	isCreate : false,	
	show : function() {
		if (!this.isCreate) {
		  this.init();
		  this.isCreate = true;
		}

		if (dialogsFormPago.isByClean())
 			this.limpiar();			
		dialogsFormPago.showModal();
	},
	
	hide : function() {
		dialogsFormPago.hide();
	},
	
	createMWs : function() {
        	mwFormPago  = desktop.addMinWindow('Forma Pago', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsFormPago .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsFormPago_Init : function() {
        dialogsFormPago.setMinimizeXY(0,0);
        dialogsFormPago.setCenterScreen();
        dialogsFormPago.addSpace(0,0,20);
        dialogsFormPago.addLn(1,1,1);
		dialogsFormPago.setHeightCell(1,1,14);
		dialogsFormPago.addObject(editsFormPagMonPagar,20,41);
		editsFormPagMonPagar.setSizeEdit(121);
		editsFormPagMonPagar.setMaxLength(8);
		dialogsFormPago.addObject(editsFormPagMonSalFavor,260,41);
		editsFormPagMonSalFavor.setSizeEdit(80);
		editsFormPagMonSalFavor.setMaxLength(8);
		dialogsFormPago.addObject(editsFormPagResta,451,41);
		editsFormPagResta.setSizeEdit(80);
		editsFormPagResta.setMaxLength(8);
		dialogsFormPago.addObject(pcbFormPagForPago,20,65);
		dialogsFormPago.addObject(pcbFormPagBanOrigen,260,65);
		pcbFormPagBanOrigen.setWidthCombo(207);
		dialogsFormPago.addObject(pcbFormPagBanDestino, 260, 89);
		pcbFormPagBanDestino.setWidthCombo(207);
		dialogsFormPago.addObject(editsFormPagReferencia,20,89);
		editsFormPagReferencia.setSizeEdit(121);
		editsFormPagReferencia.setMaxLength(20);
		dialogsFormPago.addObject(calendarFormPagfecha.getEditCalendar(), 20,113);
		dialogsFormPago.addObject(editsFormPagMonto,260,113);
		editsFormPagMonto.setSizeEdit(76);
		editsFormPagResta.setMaxLength(8);
		dialogsFormPago.addObject(imagesFormPagAnaPago, 426, 111);
		imagesFormPagAnaPago.setSize(19,19);
		dialogsFormPago.addObject(gridsFormPago.getObject(),20,138);
		dialogsFormPago.addObject(pcbFormPagTipDocumento,20,273);
		dialogsFormPago.addObject(labelsFormPagObservaciones,272,275);
		labelsFormPagObservaciones.setFont('arial','12','Black');
		dialogsFormPago.addObject(memoFormPagObservaciones, 363,273);
		dialogsFormPago.addObject(imgButtonsFormPagPagar, 87, 301);
		dialogsFormPago.addObject(imgButtonsFormPagLimpiar, 239, 301);
		dialogsFormPago.addObject(imgButtonsFormPagSalir, 390, 301);
	},
 
	gridsFormPago_Init : function() {
        gridsFormPago.setFixColRow(false,true);
        gridsFormPago.addTitleVectorX(['Nº','Forma de Pago','Banco','Referencia','Monto','idBanco','idFrmPago','bcoDestino','feRef','idBcoDes','feRefSrv']);
        gridsFormPago.showData();        
        gridsFormPago.setSizeCol(1,16);
        gridsFormPago.setSizeCol(2,127);
        gridsFormPago.setSizeCol(3,190);
        gridsFormPago.setSizeCol(4,120);
        gridsFormPago.setSizeCol(5,100);
        gridsFormPago.setSizeCol(6,0);
        gridsFormPago.setSizeCol(7,0);
        gridsFormPago.setSizeCol(8,0);
        gridsFormPago.setSizeCol(9,0);
        gridsFormPago.setSizeCol(10,0);
        gridsFormPago.setSizeCol(11,0);
        gridsFormPago.hideCol(6);
        gridsFormPago.hideCol(7);
        gridsFormPago.hideCol(8);
        gridsFormPago.hideCol(9);
        gridsFormPago.hideCol(10);
        gridsFormPago.hideCol(11);
	}, 	
  	
	create : function() {
		dialogsFormPago = dialogs.create('dialogsFormPago',0,0,598,310,'FORMA DE PAGO');
		dialogsFormPago.setAdjY(20);
		dialogsFormPago.setEnableMinimize(false);
		editsFormPagMonPagar = edits.create('editsFormPagMonPagar','editsFormPagMonPagar','Total a Pagar:',1,108,'normal');
		editsFormPagMonPagar.setValidEmpty();
		editsFormPagMonPagar.readOnly(true);
		editsFormPagMonPagar.setValidReal();
		editsFormPagMonSalFavor = edits.create('editsFormPagMonSalFavor','editsFormPagMonSalFavor','Saldo a Favor:',1,90,'normal');
		editsFormPagMonSalFavor.setValidEmpty();
		editsFormPagMonSalFavor.readOnly(true);
		editsFormPagMonSalFavor.setValidReal();
		editsFormPagResta = edits.create('editsFormPagResta','editsFormPagResta','Resta:',1,47,'normal');
		editsFormPagResta.setValidEmpty();
		editsFormPagResta.readOnly(true);
		editsFormPagResta.setValidReal();
		pcbFormPagForPago = powerComboBox.create('pcbFormPagForPago', 'pcbFormPagForPago', 'Forma de Pago:', 1,108);
		pcbFormPagForPago.setWidthCombo(100);
		pcbFormPagForPago.enableReadOnlyEditor();
		pcbFormPagForPago.addEmptyOption();
		pcbFormPagForPago.setValidEmpty();
		calendarFormPagfecha = calendars.create('calendarFormPagfecha');      
	    calendarFormPagfecha.setWidthEditCalendar(98);
        calendarFormPagfecha.setCaption('Fecha Referencia:',1,108);
        calendarFormPagfecha.sendToFrom(100);
        calendarFormPagfecha.setValidEmpty();
		pcbFormPagBanOrigen = powerComboBox.create('pcbFormPagBanOrigen', 'pcbFormPagBanOrigen', 'Banco Origen:', 1,90);
		pcbFormPagBanOrigen.enableReadOnlyEditor();
		pcbFormPagBanOrigen.addEmptyOption();
		pcbFormPagBanOrigen.setValidEmpty();
		editsFormPagMonto = edits.create('editsFormPagMonto','editsFormPagMonto','Monto:',1,90,'normal');
		editsFormPagMonto.setValidReal();
		editsFormPagReferencia = edits.create('editsFormPagReferencia','editsFormPagReferencia','Referencia:',1,108,'normal');
		editsFormPagReferencia.setValidEmpty();
		pcbFormPagBanDestino = powerComboBox.create('pcbFormPagBanDestino', 'pcbFormPagBanDestino', 'Banco Destino:', 1,90);
		pcbFormPagBanDestino.setWidthCombo(192);
		pcbFormPagBanDestino.enableReadOnlyEditor();
		pcbFormPagBanDestino.addEmptyOption();
		pcbFormPagBanDestino.setValidEmpty();
		imagesFormPagAnaPago = images.create('imagesFormPagAnaPago','imagesFormPagAnaPago','images/curve_1.png');
		hint.create();
		hint.setObjAttrib(attrib,ambiente);	
		hint.addToHintWithRefreshPos(imagesFormPagAnaPago, dialogsFormPago,"Incluir forma de pago",336,94,false,true);
		gridsFormPago = grids.create('gridsFormPago',4,11);
		labelsFormPagObservaciones = labels.create('labelsFormPagObservaciones','Observaciones:',1);
		memoFormPagObservaciones = memo.create('memoFormPagObservaciones', '', 1, 1, 0);
		memoFormPagObservaciones.setDimension(214, 15);
		memoFormPagObservaciones.setMaxLength(110);
		memoFormPagObservaciones.setValidEmpty();
		pcbFormPagTipDocumento = powerComboBox.create('pcbFormPagTipDocumento', 'pcbFormPagTipDocumento', 'Tipo Documento:', 1,118);
		pcbFormPagTipDocumento.setWidthCombo(100);
		pcbFormPagTipDocumento.enableReadOnlyEditor();
		pcbFormPagTipDocumento.addEmptyOption();
		pcbFormPagTipDocumento.setValidEmpty();
		imgButtonsFormPagPagar = imgButtons.create('imgButtonsFormPagPagar','Pagar / Abonar','abonos_2.png');
		imgButtonsFormPagLimpiar = imgButtons.create('imgButtonsFormPagLimpiar','Limpiar','limpiar.png');
		imgButtonsFormPagSalir = imgButtons.create('imgButtonsFormPagSalir','Salir','salir.png');
		imgButtonsFormPagPagar.setDimension(120,22);
		imgButtonsFormPagLimpiar.setDimension(120,22);
		imgButtonsFormPagSalir.setDimension(120,22);
	},

	init : function() { 
		this.create();
		this.setEvents();
		this.dialogsFormPago_Init();
		this.gridsFormPago_Init();
		this.createMWs(); 
	},

  	limpiar : function() {
		var rlx = xmlStructs.createRecordList("rlx");
        issaf=false;
  		editsFormPagMonPagar.setValue("");
        editsFormPagMonSalFavor.setValue("");
    	editsFormPagResta.setValue("");
  		pcbFormPagForPago.setSelectedIndex(0);
    	pcbFormPagBanOrigen.setSelectedIndex(0);
        editsFormPagReferencia.setValue("");
        pcbFormPagBanDestino.setSelectedIndex(0);
        calendarFormPagfecha.clear();
        editsFormPagMonto.setValue("");
        gridsFormPago.clean();
        memoFormPagObservaciones.setText("");
  		dialogsFormPago.setMsg("");
  		rlx.addInt('reg', editsPagoCi.hideId);
  		Tool.cnnSrv("MantObject", "getBancoFormaPago", this.windowName + ".loadDataCombo()", rlx);
  	},
  	
  	loadDataCombo : function() {
  		Tool.loadPowerComboData(dialogsFormPago, pcbFormPagBanOrigen, 0, 1, json('getBancoOrigen'));
  		Tool.loadPowerComboData(dialogsFormPago, pcbFormPagBanDestino, 0, 1, json('getCtaBancaria'));
  		Tool.loadPowerComboData(dialogsFormPago, pcbFormPagForPago, 0, 1, json('getFormaPago'));
  		Tool.loadPowerComboData(dialogsFormPago, pcbFormPagTipDocumento, 0, 1, json('getTipoDocumento'));
  		editsFormPagMonSalFavor.setValue(parseFloat(json('getSaldoPositivo').data[0][0]).toFixed(2)*procPagos.getDivisa());
          
		editsFormPagMonPagar.setValue(parseFloat(editsPagoRecTotPagar.getValue()).toFixed(2));
		editsFormPagResta.setValue(parseFloat(editsFormPagMonPagar.getValue()).toFixed(2));
		editsFormPagMonto.setValue(parseFloat(editsFormPagResta.getValue()).toFixed(2));
		if(Number.isNaN(parseFloat(editsFormPagMonSalFavor.getValue())))
			editsFormPagMonSalFavor.setValue('0');
		editsFormPagMonSalFavor.setValue(parseFloat(editsFormPagMonSalFavor.getValue()).toFixed(2));
        pcbFormPagTipDocumento.setSelectedIndex(1);
		pcbFormPagForPago.setFocus();
  	},
  	
	blockBcoRef : function() {
		if(issaf){ 
			if(Number.isNaN(parseFloat(editsFormPagMonSalFavor.getValue())))
				editsFormPagMonSalFavor.setValue('0');
			editsFormPagMonSalFavor.setValue(parseFloat(editsFormPagMonto.getValue()).toFixed(2));
			editsFormPagMonto.clear();
			editsFormPagMonto.readOnly(false);
			editsFormPagMonto.setFocus();
			issaf=false;
		}		
		editsFormPagMonto.readOnly(false);
		if (pcbFormPagForPago.getOption() == "PAGO x INTERCAMBIO" || pcbFormPagForPago.getOption() == "DESC x NOMINA" || pcbFormPagForPago.getOption() == "EFECTIVO" || pcbFormPagForPago.getOption() == "EFECTIVO_D") {
			pcbFormPagBanOrigen.setSelectedIndex(0);
			pcbFormPagBanOrigen.hide();
			pcbFormPagBanDestino.setSelectedIndex(0);
			pcbFormPagBanDestino.disable();
			calendarFormPagfecha.setDisable();
			editsFormPagReferencia.setValue("");
			editsFormPagReferencia.readOnly(true);
			editsFormPagMonto.setFocus();
		}
		else if (pcbFormPagForPago.getOption() == "DEPOSITO") {
			pcbFormPagBanOrigen.setSelectedIndex(0);
			pcbFormPagBanOrigen.hide();
			editsFormPagReferencia.readOnly(false);
			pcbFormPagBanDestino.enable();
			calendarFormPagfecha.setEnable();
		}
		else if (pcbFormPagForPago.getOption() == "SALDO A FAVOR") {
		   if(parseFloat(editsFormPagMonSalFavor.getValue())==0){
		   	 Alert.show('No posee saldo a favor para pagar.', 'SISTEMA', Alert.TYPE_INFO);
		   	 editsFormPagMonto.clear();
		   }
		   else{
		   	 pcbFormPagBanOrigen.setSelectedIndex(0);
			 pcbFormPagBanOrigen.hide();
			 pcbFormPagBanDestino.setSelectedIndex(0);
			 pcbFormPagBanDestino.disable();
			 calendarFormPagfecha.setDisable();
			 editsFormPagReferencia.setValue("");
			 editsFormPagReferencia.readOnly(true);
		     editsFormPagMonto.setValue(parseFloat(editsFormPagMonSalFavor.getValue()).toFixed(2));
		     editsFormPagMonSalFavor.clear();
		     editsFormPagMonto.readOnly(true);
		     editsFormPagMonto.setFocus();
		   }
		   issaf=true;
		}
		else{
			pcbFormPagBanOrigen.show();
			editsFormPagReferencia.readOnly(false);
			pcbFormPagBanDestino.enable();
			calendarFormPagfecha.setEnable();
			issaf=false;
		}
	},
	
	calcAddFrmPago : function() {
		editsFormPagResta.setValue((parseFloat(editsFormPagResta.getValue()) - parseFloat(editsFormPagMonto.getValue())).toFixed(2));
		gridsFormPago.addData([gridsFormPago.getTotalRecord()+1, 
		                       pcbFormPagForPago.getOption(), 
		                       pcbFormPagBanOrigen.getOption(), 
		                       editsFormPagReferencia.getValue(), 
		                       editsFormPagMonto.getValue(), 
		                       pcbFormPagBanOrigen.getText(), 
		                       pcbFormPagForPago.getText(), 
		                       pcbFormPagBanDestino.getOption(), 
		                       calendarFormPagfecha.getFechaFromEdit(), 
		                       pcbFormPagBanDestino.getText(), 
		                       calendarFormPagfecha.getText()]);
		pcbFormPagForPago.setSelectedIndex(0);
		pcbFormPagBanOrigen.setSelectedIndex(0);
        pcbFormPagBanDestino.setSelectedIndex(0);
        calendarFormPagfecha.clear();
		editsFormPagReferencia.setValue("");
		editsFormPagMonto.setValue("");
	},
	
	incluirFrmPago : function() {
		issaf=false;
		if (parseFloat(editsFormPagMonto.getValue()) < 0.0)
			Alert.show('El monto ingresado debe ser mayor o igual a cero.', 'SISTEMA', Alert.TYPE_INFO);
		else if ((pcbFormPagForPago.getOption() == "PAGO x INTERCAMBIO" || pcbFormPagForPago.getOption() == "DESC x NOMINA" || pcbFormPagForPago.getOption() == "EFECTIVO INS" || pcbFormPagForPago.getOption() == "EFECTIVO MEN" || pcbFormPagForPago.getOption() == "EFECTIVO SIS" || pcbFormPagForPago.getOption() == "EFECTIVO" || pcbFormPagForPago.getOption() == "SALDO A FAVOR" || pcbFormPagForPago.getOption() == "EFECTIVO_D") && editsFormPagMonto.valid(dialogsFormPago)) {
			this.calcAddFrmPago();
		}
		else
			if (pcbFormPagForPago.valid(dialogsFormPago))
				if (pcbFormPagForPago.getOption() == "DEPOSITO" || pcbFormPagBanOrigen.valid(dialogsFormPago))
					if (editsFormPagReferencia.valid(dialogsFormPago))
						if (pcbFormPagBanDestino.valid(dialogsFormPago))
							if (calendarFormPagfecha.valid(dialogsFormPago))
								if (editsFormPagMonto.valid(dialogsFormPago))
									this.calcAddFrmPago();
	},
	
	setData : function() {	
		if(gridsFormPago.getDataCell(1) != '') {	
			pcbFormPagForPago.setSelectedOption(gridsFormPago.getDataCell(2));
			pcbFormPagBanOrigen.setSelectedOption(gridsFormPago.getDataCell(3));
			pcbFormPagBanDestino.setSelectedOption(gridsFormPago.getDataCell(8));
			calendarFormPagfecha.setFechaToEdit(gridsFormPago.getDataCell(9));
			editsFormPagReferencia.setValue(gridsFormPago.getDataCell(4));
			editsFormPagMonto.setValue(gridsFormPago.getDataCell(5));
			
			FormPago.blockBcoRef();		
			if(gridsFormPago.getDataCell(2)=="SALDO A FAVOR") {
			  if(Number.isNaN(parseFloat(editsFormPagMonSalFavor.getValue())))
				 editsFormPagMonSalFavor.setValue('0');
			  editsFormPagMonSalFavor.setValue(parseFloat(gridsFormPago.getDataCell(5)).toFixed(2));
			  editsFormPagMonto.clear();
			  pcbFormPagForPago.setSelectedIndex(0);
			  editsFormPagMonto.readOnly(false);
			  editsFormPagResta.setValue((parseFloat(editsFormPagResta.getValue()) + parseFloat(editsFormPagMonSalFavor.getValue())).toFixed(2));
			}
			else {
				editsFormPagResta.setValue((parseFloat(editsFormPagResta.getValue()) + parseFloat(editsFormPagMonto.getValue())).toFixed(2));
			}
			gridsFormPago.cleanRow();
			for(var i = 1; i <= gridsFormPago.getTotalRecord(); i++) {  
				gridsFormPago.setDataCell(i,1,i);  
	  		}
	  		issaf=false;
		}
	},
	
	setEvents : function() {
  		pcbFormPagForPago.onChange(this.windowName + ".blockBcoRef()");
  		pcbFormPagForPago.onEnter("pcbFormPagBanOrigen.setFocus()");
  		pcbFormPagBanOrigen.onEnter("editsFormPagMonto.setFocus()");
  		editsFormPagMonto.onEnter(this.windowName + ".incluirFrmPago()");
  		imagesFormPagAnaPago.onClick(this.windowName + ".incluirFrmPago()");
  		gridsFormPago.onClickCells(this.windowName + ".setData()");
  		imgButtonsFormPagPagar.onClick(this.windowName + ".coreUpdate('pagar')");
  		imgButtonsFormPagLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsFormPagSalir.onClick('dialogsFormPago.close()');
   	},
	
	reporte : function() {
        var rlx = xmlStructs.createRecordList("rlx");
		var doc = new Documento();

		if (Pagos.pagoRepsActive) {
//CIERRE PAGO x REPRESENTANTE
			dialogsPagoReps.setMsg("");
	  		editsReprCedula.setValue("");
	  		editsReprNombre.setValue("");
	  		editsReprApellido.setValue("");
	  		gridsPagoReps.clean();
		}
//LIMPIA PAGOS
        pcbPagoRecConcepto.setSelectedIndex(0);
    	pcbPagoRecConcepto.clearChecks();
    	pcbPagoRecConceptoFzble.setSelectedIndex(0);
  		editsPagoCi.setValue("");
  		editsPagoNombre.setValue("");
  		editsPagoApellido.setValue("");
  		Tool.rstPwrCmb(pcbPagoCarrera);
  		Tool.rstPwrCmb(pcbPagoPeriodo);
  		gridsPagoDatAlumno.clean();
  		editsPagoCliCi.setValue("");
  		editsPagoCliNombre.setValue("");
  		editsPagoCliApellido.setValue(""); 
  		editsPagoCliTelefono.setValue("");
  		editsPagoCliDireccion.setValue("");
  		gridsPagoRecCliente.clean();
  		editsPagoRecTotMora.setValue("");
  		editsPagoRecTotDescuento.setValue("");
  		editsPagoRecTotPagar.clear();
  		editsPagoRecTotDivisa.clear();
  		imgButtonsPagoFacturar.setDisable();
  		procPagos.clean();  		
//CIERRA FORMA DE PAGO
  		editsFormPagMonPagar.setValue("");
        editsFormPagMonSalFavor.setValue("");
    	editsFormPagResta.setValue("");
  		pcbFormPagForPago.setSelectedIndex(0);
    	pcbFormPagBanOrigen.setSelectedIndex(0);
        editsFormPagReferencia.setValue("");
        pcbFormPagBanDestino.setSelectedIndex(0);
        calendarFormPagfecha.clear();
        editsFormPagMonto.setValue("");
        gridsFormPago.clean();
        memoFormPagObservaciones.setText("");
		dialogsFormPago.close();
//GENERA RECIBO / FACTURA
		doc.setTopMargin(20);
		doc.addJsonGen(json('getDataGeneral'));
		doc.addJsonFormaPago(json('getDataFormaPago'));
		doc.addJsonEstudiante(json('getDataEstudiante'));
		var td = pcbFormPagTipDocumento.getText();
		switch(td){
			case '1' :{
				doc.addJsonConcepto(json('getDataConcepto'));
				doc.setDocType('RECIBO');
				break;
			}
			case '2' :{
				doc.addJsonConcepto(json('getDataConceptoSinRubro'));
				doc.setDocType('FACTURA');
				break;	
			}
			case '3' :{
				doc.addJsonConcepto(json('getDataConceptoSinRubro'));
				doc.setDocType('FACTURA 1/4');
				break;	
			}
			case '4' :{
				doc.addJsonConcepto(json('getDataConceptoSinRubro'));
				doc.setDocType('FACTURA P');
				break;	
			}
			case '5' :{
				doc.addJsonConcepto(json('getDataConceptoSinRubro'));
				doc.setDocType('FACTURA C');
				break;	
			}
			case '6' :{
				doc.addJsonConcepto(json('getDataConceptoSinRubro'));
				doc.setDocType('FACTURA M');
				break;	
			}
			case '7' :{//FACTURA COLEGIO MADRERAFOLS Y PILAR
				doc.addJsonConcepto(json('getDataConceptoSinRubro'));
				doc.setDocType('FACTURA HCSA');
				break;	
			}
		}
		doc.createDoc();
//ENVIA MENSAJE PAGO RECIBIDO
		rlx.addInt('reg', editsPagoCi.hideId);
		rlx.addStr('reg', json('getDataGeneral').data[7][0]);
		rlx.addStr('reg', json('getDataGeneral').data[10][0]);
		rlx.addStr('reg', json('getMoneda').data[0][0]);
		rlx.addStr('reg', Tool.getTimestamp());
		Tool.cnnSrvLessWaitMsg('MsjObject', 'enviarPagoRecibido', 'dlgWait.hide()', rlx);
  	},

	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");
        var j = 0;
	    var monto_gridPago = 0;
	    var isMora = false;
	    var montos = new Array();
	    var m=0;
	    
		for (var i = 0; i < gridsFormPago.getTotalRecord(); i++) 
			monto_gridPago += parseFloat(gridsFormPago.getDataRowStruct(i)[4]).toFixed(2);
	    for (var i = 0; i < gridsPagoRecCliente.getTotalRecord(); i++) {
			m += parseFloat(gridsPagoRecCliente.getDataRowStruct(i)[4]).toFixed(2);
			if ((monto_gridPago - (m - parseFloat(procPagos.getTotalDescuento()).toFixed(2))) < 0 && ((i+1) > 1)) {
				Alert.show('No puede abonar a '+ gridsPagoRecCliente.getTotalRecord() + ' conceptos con el monto suministrado, verifique...', 'SISTEMA', Alert.TYPE_INFO);
  				FormPago.limpiar();
  				return;
  			}
  			if (isVenc(gridsPagoRecCliente.getDataRowStruct(i)[9]) && parseFloat(gridsPagoRecCliente.getDataRowStruct(ii)[5]) > 0)
    			isMora=true;
		}
	    	      
	    if (monto_gridPago < parseFloat(editsFormPagMonPagar.getValue()).toFixed(2)) {
		  //ES ABONO
			if(isMora){//TIENE MORA
				Alert.show('No puede abonar a una cuota con mora, debe pagar completo', 'SISTEMA', Alert.TYPE_INFO);
				dialogsFormPago.close();
				Pagos.limpiar();
				return;
			}  
	    }  
        if (gridsFormPago.getTotalRecord() > 0) {
        	if (pcbFormPagTipDocumento.valid(dialogsFormPago)) {
				for (var i = 0; i < gridsFormPago.getTotalRecord(); i++) {
					for (var ii = 0; ii < gridsPagoRecCliente.getTotalRecord(); ii++) {
						rlx.addStr('reg'+j, gridsFormPago.getDataRowStruct(i)[0]);//itemFrmPag
						rlx.addStr('reg'+j, gridsFormPago.getDataRowStruct(i)[3]);//nuReferencia
						rlx.addInt('reg'+j, gridsFormPago.getDataRowStruct(i)[5]);//idBanco
						rlx.addFloat('reg'+j, gridsFormPago.getDataRowStruct(i)[4]);//moFormaPago
						rlx.addInt('reg'+j, gridsFormPago.getDataRowStruct(i)[6]);//idFormaPago
						rlx.addInt('reg'+j, gridsFormPago.getDataRowStruct(i)[9]);//idCtaBanca
						rlx.addStr('reg'+j, gridsFormPago.getDataRowStruct(i)[10]);//feRefSrv

				  		rlx.add('reg'+j, editsPagoCliCi);//cedula
						rlx.add('reg'+j, editsPagoCliNombre);//nombre
						rlx.add('reg'+j, editsPagoCliApellido);//apellido
						rlx.add('reg'+j, editsPagoCliTelefono);//telefono
						rlx.add('reg'+j, editsPagoCliDireccion);//direccion
 
						rlx.addFloat('reg'+j, Math.abs(parseFloat(editsFormPagMonPagar.getValue()).toFixed(2)));//moPagar
						rlx.add('reg'+j, memoFormPagObservaciones);//observacion
						rlx.add('reg'+j, pcbFormPagTipDocumento);//tiDocumento
						rlx.addFloat('reg'+j, parseFloat(editsFormPagMonSalFavor.getValue()).toFixed(2));//saldo a favor

						rlx.addFloat('reg'+j, gridsPagoRecCliente.getDataRowStruct(ii)[0]);//itemDetDoc
						rlx.addFloat('reg'+j, gridsPagoRecCliente.getDataRowStruct(ii)[4]);//moDetalle
						
						if(monto_gridPago < parseFloat(editsFormPagMonPagar.getValue()).toFixed(2)){
						  //ES ABONO
						  if(isMora){
						  	Alert.show('No puede abonar a una cuota con mora, debe pagar completo', 'SISTEMA', Alert.TYPE_INFO);
						  	dialogsFormPago.close();
						  	Pagos.limpiar();
						  	return;
						  }
						  if(parseFloat(gridsPagoRecCliente.getDataRowStruct(ii)[8])==0){
						  	//ES 1er. PAGO						  	
						  	if(isVenc(gridsPagoRecCliente.getDataRowStruct(i)[9]) && parseFloat(gridsPagoRecCliente.getDataRowStruct(ii)[5]) > 0){
						  	  //TIENE MORA	
						      rlx.addFloat('reg'+j, gridsPagoRecCliente.getDataRowStruct(ii)[5]);//poMora		
						      rlx.addFloat('reg'+j, '0');//poDesc' = 0				      
						    }
						    else{
						      //NO TIENE MORA	
						      rlx.addFloat('reg'+j, '0');//poMora' = 0
						      rlx.addFloat('reg'+j, '0');//poDesc' = 0	
						    }
						  }
						  else{
						  	//NO ES PRIMER ABONO
						    rlx.addFloat('reg'+j, '0');//poMora' = 0
						    rlx.addFloat('reg'+j, '0');//poDesc' = 0
						  }   	
						}
						else{
						  //NO ES ABONO
						  if(isProntoPago(gridsPagoRecCliente.getDataRowStruct(ii)[9])){
						  	//ES PRONTO PAGO
						  	rlx.addFloat('reg'+j, '0');//poMora' = 0
						  	rlx.addFloat('reg'+j, gridsPagoRecCliente.getDataRowStruct(ii)[6]);//poDescuento
						  }
						  else{
						  	//NO ES PRONTO PAGO
						    if(isVenc(gridsPagoRecCliente.getDataRowStruct(ii)[9]) && parseFloat(gridsPagoRecCliente.getDataRowStruct(ii)[8])==0){
						      //TIENE MORA
						      rlx.addFloat('reg'+j, gridsPagoRecCliente.getDataRowStruct(ii)[5]);//poMora
						      rlx.addFloat('reg'+j, '0');//poDesc' = 0
						    }
						    else{
						      //NO TIENE MORA Y NO ES PRONTO PAGO
						      rlx.addFloat('reg'+j, '0');//poMora' = 0
						      rlx.addFloat('reg'+j, '0');//poDesc' = 0	
						    }
						  }  
						}						  
						rlx.addInt('reg'+j, gridsPagoRecCliente.getDataRowStruct(ii)[7]);//idConcepto
						rlx.addInt('reg'+j, gridsPagoRecCliente.getDataRowStruct(ii)[10]);//idPeriodo
						rlx.addInt('reg'+j, gridsPagoRecCliente.getDataRowStruct(ii)[12]);//idCuotaCredito
						rlx.addStr('reg'+j, gridsPagoRecCliente.getDataRowStruct(ii)[13]);//tiDato
						rlx.addInt('reg'+j, gridsPagoRecCliente.getDataRowStruct(ii)[14]);//idPersAlumno
						rlx.addInt('reg'+j, gridsPagoRecCliente.getDataRowStruct(ii)[15]);//idCarrera
						rlx.addInt('reg'+j, gridsPagoRecCliente.getDataRowStruct(ii)[16]);//esCondInsc
						rlx.addInt('reg'+j, gridsPagoRecCliente.getDataRowStruct(ii)[17]);//esRubro
						rlx.addInt('reg'+j, editsPagoCi.hideId);//idPersSaldoFavor
						rlx.add('reg'+j, calendarPagoDocfecha);//fePagoDocumento
						rlx.addFloat('reg'+j, procPagos.getDivisa());//moDivisa
						j++;
					}
				}
				Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.reporte()', rlx);
			}
        }
        else 
			Alert.show('Debe ingresar una forma de pago.', 'SISTEMA', Alert.TYPE_INFO);
	}	
};