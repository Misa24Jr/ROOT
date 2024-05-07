var dialogsCalcMontos = new Object();
var editsCalcMonConcepto = new Object();
var editsCalcMonMonto = new Object();
var editsCalcMonUC = new Object();
var editsCalcMonMonInicial = new Object();
var editsCalcMonPorInicial = new Object();
var editsCalcMonMonFinaciado = new Object();
var pcbCalcMonMesVenc = new Object();
var imagesCalcMonIncluir = new Object();
var editsCalcMonNumCuotas = new Object();
var gridsCalcMontos = new Object();
var imgButtonsCalcMonCredito = new Object();
var imgButtonsCalcMonLimpiar = new Object();
//var imgButtonsCalcMonDeContado = new Object();
var imgButtonsCalcMonSalir = new Object();
var mwCalcMontos = new Object();// minWindow

var CalcMontos = {
	windowName : 'CalcMontos',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}

		if (dialogsCalcMontos.isByClean())
 			this.limpiar();			
		Pagos.calcMontoActive = true;		
		dialogsCalcMontos.showModal();
	},
	
	hide : function() {
		dialogsCalcMontos.hide();
	},
	
	createMWs : function() {
        mwCalcMontos  = desktop.addMinWindow('C.Montos', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsCalcMontos .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsCalcMontos_Init : function() {
        dialogsCalcMontos.setMinimizeXY(0,0);
        dialogsCalcMontos.setCenterScreen();
        dialogsCalcMontos.addObject(editsCalcMonConcepto,20,38);
		dialogsCalcMontos.addObject(editsCalcMonMonto, 423,38);
		dialogsCalcMontos.addObject(editsCalcMonNumCuotas, 20,63);
		dialogsCalcMontos.addObject(editsCalcMonPorInicial, 239,63);
		dialogsCalcMontos.addObject(editsCalcMonMonInicial, 423,63);
		dialogsCalcMontos.addObject(editsCalcMonMonFinaciado, 20,88);
		dialogsCalcMontos.addObject(pcbCalcMonMesVenc, 239,88);
		dialogsCalcMontos.addObject(imagesCalcMonIncluir, 408,86);
		dialogsCalcMontos.addObject(editsCalcMonUC, 423,88);
		dialogsCalcMontos.addObject(gridsCalcMontos.getObject(),20,118);
        dialogsCalcMontos.addObject(imgButtonsCalcMonCredito,140,410);
        dialogsCalcMontos.addObject(imgButtonsCalcMonLimpiar,260,410);
//        dialogsCalcMontos.addObject(imgButtonsCalcMonDeContado,320,410);
        dialogsCalcMontos.addObject(imgButtonsCalcMonSalir,380,410);       
	},
  
	gridsCalcMontos_Init : function()  {
        gridsCalcMontos.setFixColRow(false,true);
        gridsCalcMontos.addTitleVectorX(['Nº Cuota','Monto','Fecha Vencimiento','idPers','idPeriodo','idConc','idCarr','moInic','moCred','poCred']);
        gridsCalcMontos.showData();        
        gridsCalcMontos.setSizeCol(1,160);
        gridsCalcMontos.setSizeCol(2,160);
        gridsCalcMontos.setSizeCol(3,250);
        gridsCalcMontos.setSizeCol(4,0);
        gridsCalcMontos.setSizeCol(5,0);
        gridsCalcMontos.setSizeCol(6,0);
        gridsCalcMontos.setSizeCol(7,0);
        gridsCalcMontos.setSizeCol(8,0);
        gridsCalcMontos.setSizeCol(9,0);
        gridsCalcMontos.setSizeCol(10,0);
        gridsCalcMontos.hideCol(4);
        gridsCalcMontos.hideCol(5);
        gridsCalcMontos.hideCol(6);
        gridsCalcMontos.hideCol(7);
        gridsCalcMontos.hideCol(8);
        gridsCalcMontos.hideCol(9);
        gridsCalcMontos.hideCol(10);
        gridsCalcMontos.setXMLStruct(xmlStructs);
	},

	create : function() {
		dialogsCalcMontos = dialogs.create('dialogsCalcMontos',0,0,616,420,'CALCULAR MONTOS');
		dialogsCalcMontos.setEnableMinimize(false);
		editsCalcMonConcepto = edits.create('editsCalcMonConcepto','editsCalcMonConcepto','Concepto:',3,110,'normal');
		editsCalcMonConcepto.setValidEmpty();
		editsCalcMonConcepto.readOnly(true);
        editsCalcMonConcepto.setSizeEdit(274);
		editsCalcMonConcepto.setMaxLength(150);
		editsCalcMonMonto = edits.create('editsCalcMonMonto','editsCalcMonMonto','Monto:',3,77,'normal');
		editsCalcMonMonto.setValidEmpty();
		editsCalcMonMonto.readOnly(true);
		editsCalcMonMonto.setSizeEdit(92);
		editsCalcMonUC = edits.create('editsCalcMonUC','editsCalcMonUC','Total U.C.:',3,77,'normal');
		editsCalcMonUC.setValidEmpty();
		editsCalcMonUC.setSizeEdit(92);
		editsCalcMonMonInicial = edits.create('editsCalcMonMonInicial','editsCalcMonMonInicial','Monto Inic.:',3,77,'normal');
		editsCalcMonMonInicial.setValidEmpty();
		editsCalcMonMonInicial.readOnly(true);
		editsCalcMonPorInicial = edits.create('editsCalcMonPorInicial','editsCalcMonPorInicial','% Inicial:',3,73,'normal');
		editsCalcMonPorInicial.setValidEmpty();
		editsCalcMonPorInicial.readOnly(true);
		editsCalcMonPorInicial.setSizeEdit(92);
		editsCalcMonMonInicial.setSizeEdit(92);
		editsCalcMonMonFinaciado = edits.create('editsCalcMonMonFinaciado','editsCalcMonMonFinaciado','Monto Financiado:',3,110,'normal');
		editsCalcMonMonFinaciado.setValidEmpty();
		editsCalcMonMonFinaciado.readOnly(true);
		editsCalcMonMonFinaciado.setSizeEdit(92);
		editsCalcMonNumCuotas = edits.create('editsCalcMonNumCuotas','editsCalcMonNumCuotas','Nº Cuota:',3,110,'normal');
		editsCalcMonNumCuotas.setValidEmpty();
		editsCalcMonNumCuotas.readOnly(true);
		editsCalcMonNumCuotas.setSizeEdit(92);
		pcbCalcMonMesVenc = powerComboBox.create('pcbCalcMonMesVenc', 'pcbCalcMonMesVenc', 'Mes Venc.:', 3,73);
	  	pcbCalcMonMesVenc.enableReadOnlyEditor();
	  	pcbCalcMonMesVenc.addEmptyOption();
	  	pcbCalcMonMesVenc.setValidEmpty();
		pcbCalcMonMesVenc.setWidthCombo(71);
        pcbCalcMonMesVenc.setTypeObjOpt('input', 'checkbox');
        pcbCalcMonMesVenc.setFirstRowCheckMode(2);
        imagesCalcMonIncluir = images.create('imagesCalcMonIncluir','imagesCalcMonIncluir','images/curve_1.png');
        imagesCalcMonIncluir.setSize(19,19);
		hint.create();
		hint.setObjAttrib(attrib,ambiente);	
		hint.addToHintWithRefreshPos(imagesCalcMonIncluir, dialogsCalcMontos,"Incluir Mes",370,70,false,true);
		gridsCalcMontos = grids.create('gridsCalcMontos',12,10);
		imgButtonsCalcMonCredito = imgButtons.create('imgButtonsCalcMonCredito','Guardar.','ok.png');
		imgButtonsCalcMonLimpiar = imgButtons.create('imgButtonsCalcMonLimpiar','Limpiar','limpiar.png');
//		imgButtonsCalcMonDeContado = imgButtons.create('imgButtonsCalcMonDeContado','De Contado','dcontado_1.png');
		imgButtonsCalcMonSalir = imgButtons.create('imgButtonsCalcMonSalir','Salir','salir.png');
        imgButtonsCalcMonCredito.setDimension(94,22);
        imgButtonsCalcMonLimpiar.setDimension(94,22);
//        imgButtonsCalcMonDeContado.setDimension(94,22);
        imgButtonsCalcMonSalir.setDimension(94,22);
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsCalcMontos_Init();
		this.gridsCalcMontos_Init();
		this.createMWs(); 
	},

  	limpiar : function() {
  		editsCalcMonConcepto.setValue("");
  		editsCalcMonMonto.setValue("");
  		editsCalcMonNumCuotas.setValue("");
  		editsCalcMonPorInicial.setValue("");
  		editsCalcMonMonInicial.setValue("");
  		editsCalcMonMonFinaciado.setValue("");
  		editsCalcMonUC.setValue("");
  		gridsCalcMontos.clean();
  		imgButtonsCalcMonCredito.setDisable();
  		dialogsCalcMontos.setMsg("");
  		editsCalcMonConcepto.setValue(pcbPagoRecConceptoFzble.setModeReturnGetText(1).getOption());
  		editsCalcMonMonto.setValue(pcbPagoRecConceptoFzble.setModeReturnGetText(6).getText());
  		editsCalcMonNumCuotas.setValue(pcbPagoRecConceptoFzble.setModeReturnGetText(8).getText());
  		editsCalcMonPorInicial.setValue(pcbPagoRecConceptoFzble.setModeReturnGetText(3).getText());

		editsCalcMonMonFinaciado.readOnly(true);
  		if (pcbPagoRecConceptoFzble.setModeReturnGetText(11).getText() == "SI")
  			editsCalcMonMonFinaciado.readOnly(false);
  		
  		if (pcbPagoRecConceptoFzble.setModeReturnGetText(9).getText() == "SI") { //con UC
//  			imgButtonsCalcMonDeContado.setDisable();
  			editsCalcMonUC.show();
  		}
  		else { //sin UC
//  			imgButtonsCalcMonDeContado.setEnable();
  			editsCalcMonUC.hide();
  	  		var m = parseFloat(editsCalcMonMonto.getValue(),10);
  			var mi = m * parseFloat(editsCalcMonPorInicial.getValue(),10)/100;
  			var mf = m - mi;
  			editsCalcMonMonInicial.setValue(mi);	
  			editsCalcMonMonFinaciado.setValue(mf);
  		}
  		Tool.rstPwrCmb(pcbCalcMonMesVenc);
		pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'SEPTIEMBRE','09');
        pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'OCTUBRE','10');
        pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'NOVIEMBRE','11');
        pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'DICIEMBRE','12');
		pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'ENERO','01');
        pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'FEBRERO','02');
		pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'MARZO','03');
        pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'ABRIL','04');
        pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'MAYO','05');
        pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'JUNIO','06');
        pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'JULIO','07');
        pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'AGOSTO','08');
        pcbCalcMonMesVenc.setCheckEnable(['09','10','11','12','01','02','03','04','05','06','07','08']);
  		pcbCalcMonMesVenc.setSelectedIndex(0);
//  		imgButtonsCalcMonDeContado.setDisable();
  	},
  	
  	calcCuotas : function() {
		var dStruct = {
			type      : 'E',
  			offsetPage: 0,
  			pageSize  : 10,
  			itemPage  : 0,
  			fields    : ['Cuota','Monto','Fecha de vencimiento','idPers','idPeriodo','idConc','idCarr','moInic','moCred','poCred'],
  			data 	  : [[],[],[],[],[],[],[],[],[],[]]
		}

		if (pcbCalcMonMesVenc.valid(dialogsCalcMontos) && (editsCalcMonUC.getValue() != "" || !editsCalcMonUC.sts_Show)) {
			if (editsCalcMonMonFinaciado.isReal(editsCalcMonMonFinaciado.getValue())) {
				var cc = parseInt(editsCalcMonNumCuotas.getValue(),10);
	  			var dp = pcbPagoRecConceptoFzble.setModeReturnGetText(2).getText();
	  			var mm = parseInt(pcbCalcMonMesVenc.getArrayValue(pcbCalcMonMesVenc.getItemIndex())[0],10);
	  			mm = (mm != -1)? mm : parseInt(pcbCalcMonMesVenc.getArrayValue(1)[0],10);
	  			var fv = procPagos.calculaFechasVencimiento(12, dp, mm, '-');
	  			var montoCuota = parseFloat(editsCalcMonMonFinaciado.getValue()) / cc; 
		        var ix = 0;
		        for(var i = 0; i < 12; i++) {
			        for(var ii = 1; ii <= 12; ii++) {
			        	if (parseInt(fv[i].substring(3,5),10) == parseInt(pcbCalcMonMesVenc.getArrayValue(ii)[0],10)) {
			  				if (pcbCalcMonMesVenc.getObjFromOption(ii).checked) {
			  					dStruct.data[0][ix] = ix+1;
				  				dStruct.data[1][ix] = new Number(montoCuota);
				  				dStruct.data[2][ix] = fv[i];
				  				dStruct.data[3][ix] = editsPagoCi.hideId;
				  				dStruct.data[4][ix] = pcbPagoPeriodo.setModeReturnGetText(0).getText();
				  				dStruct.data[5][ix] = pcbPagoRecConceptoFzble.setModeReturnGetText(0).getText();
				  				dStruct.data[6][ix] = pcbPagoCarrera.setModeReturnGetText(0).getText();
				  				dStruct.data[7][ix] = editsCalcMonMonInicial.getValue();
				  				dStruct.data[8][ix] = editsCalcMonMonFinaciado.getValue();
				  				dStruct.data[9][ix] = editsCalcMonPorInicial.getValue();
				  				ix++;
			  				}
			  				break;
			        	}
			        }
	  			}
	  			gridsCalcMontos.loadDataStruct(dStruct);
	  			dialogsCalcMontos.setMsg('Cuotas calculadas ok...'); 
	  			imgButtonsCalcMonCredito.setEnable();
	  			imgButtonsCalcMonCredito.setFocus();
	  		}
	  		else {
	  			dialogsCalcMontos.setMsg('ADVERTENCIA: El monto financiado no es un valor real, verifique...'); 
	  			imgButtonsCalcMonCredito.setDisable();
	  		}
		}
		else 
			dialogsCalcMontos.setMsg('Haz Clic sobre el Mes donde comenzara el calculo.');
  	},
  	
  	calcMontosUC : function() {
  		gridsCalcMontos.clean();	
  		if(editsCalcMonUC.isInteger(editsCalcMonUC.getValue())) {
  			if (pcbCalcMonMesVenc.valid(dialogsCalcMontos)) {
  				var m = parseFloat(editsCalcMonMonto.getValue()) * parseInt(editsCalcMonUC.getValue());
  				var mi = m * parseFloat(editsCalcMonPorInicial.getValue())/100;
  				var mf = m - mi;
  				editsCalcMonMonInicial.setValue(new Number(mi));	
  				editsCalcMonMonFinaciado.setValue(new Number(mf));
//  				imgButtonsCalcMonDeContado.setEnable();
  				this.calcCuotas();
  			}
  		}
  		else {
  			dialogsCalcMontos.setMsg('ADVERTENCIA: La cantidad de UC no es un valor entero, verifique...'); 
  			editsCalcMonMonInicial.setValue('');	
  			editsCalcMonMonFinaciado.setValue('');
  			imgButtonsCalcMonCredito.setDisable();
//  			imgButtonsCalcMonDeContado.setDisable();
  		}
  		editsCalcMonUC.setFocus();
  	},
  	/*
	deContado : function() {
		var monto = 0.0;
		
		if (pcbPagoRecConceptoFzble.setModeReturnGetText(9).getText() == "SI") //con UC
			monto = parseFloat(editsCalcMonUC.getValue()) * parseFloat(editsCalcMonMonto.getValue()); 
		else
			monto = editsCalcMonMonto.getValue(); 
		
		Pagos.facturar(editsPagoCi.getText(),
					pcbPagoRecConceptoFzble.setModeReturnGetText(1).getOption(), 
					0.0, 
					monto, 
					"",
					"01-01-9999",
					"",
					0,
					pcbPagoPeriodo.setModeReturnGetText(0).getText(),
					0.0, 
					pcbPagoRecConceptoFzble.setModeReturnGetText(4).getText(), 
					"",
					pcbPagoRecConceptoFzble.setModeReturnGetText(0).getText(),
					editsPagoCi.hideId,
					pcbPagoCarrera.setModeReturnGetText(0).getText(),
					pcbPagoRecConceptoFzble.setModeReturnGetText(10).getText(),
					"NO",true
					);
		
    	pcbPagoRecConceptoFzble.setSelectedIndex(0);
		dialogsCalcMontos.close();
	},
	*/
	setEvents : function() {
		editsCalcMonMonFinaciado.onKeyUp(this.windowName + ".calcCuotas();editsCalcMonMonFinaciado.setFocus();");
		pcbCalcMonMesVenc.onChange(this.windowName + ".calcCuotas()");
		imagesCalcMonIncluir.onClick(this.windowName + ".calcCuotas()");
  		editsCalcMonUC.onKeyUp(this.windowName + ".calcMontosUC()");
		imgButtonsCalcMonCredito.onClick(this.windowName + ".coreUpdate('agregar')");
		imgButtonsCalcMonLimpiar.onClick(this.windowName + ".limpiar()");
//  		imgButtonsCalcMonDeContado.onClick(this.windowName + ".deContado()");
  		imgButtonsCalcMonSalir.onClick(this.windowName + ".closeWinsCalcMontos()");
  	},

  	closeWinsCalcMontos : function() {
  		dialogsCalcMontos.close();
  		Pagos.calcMontoActive = false; 
  	},
  	
  	responseCoreUpdate : function() {
  		pcbPagoRecConceptoFzble.setSelectedIndex(0);
  		Pagos.getDataGridCuota();
		dialogsCalcMontos.close();
		dlgWait.hide();
  	},
  	
	coreUpdate : function(methodName) {
		if (gridsCalcMontos.getTotalRecord() > 0) 
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.responseCoreUpdate()', gridsCalcMontos.getXMLStruct("rlxCredito"));
  	}
};