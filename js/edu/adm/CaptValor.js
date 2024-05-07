var dialogsCaptValor = new Object();
var editsCaptValIngMonto = new Object();
var imgButtonsCaptValAceptar = new Object();
var imgButtonsCaptValCancelar = new Object(); 
var mwCaptValor = new Object();// minWindow

var CaptValor = {
    windowName: 'CaptValor',
    isCreate: false,
    indexCmb: 0,
	
    show: function() {
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsCaptValor.isByClean()) {
      		editsCaptValIngMonto.setValue("");
      		dialogsCaptValor.setMsg("");
        }
        dialogsCaptValor.showModal();
    },
    
    hide: function() {
        dialogsCaptValor.hide();
    },
    
    createMWs: function() {
        mwCaptValor = desktop.addMinWindow('Entrada', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsCaptValor.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsCaptValor_Init: function() {
        dialogsCaptValor.setMinimizeXY(0, 0);
        dialogsCaptValor.setCenterScreen();    
        dialogsCaptValor.addSpace(1, 0, 20);
        dialogsCaptValor.addLn(1, 1, 1);
		dialogsCaptValor.setHeightCell(1,1,18); 
		dialogsCaptValor.addObject(editsCaptValIngMonto, 20, 35);
		dialogsCaptValor.addObject(imgButtonsCaptValAceptar, 62, 63);
        dialogsCaptValor.addObject(imgButtonsCaptValCancelar, 124, 63);
    },
    
    create: function() {
        dialogsCaptValor = dialogs.create('dialogsCaptValor', 0, 0, 230, 73, 'CONCEPTO');
        dialogsCaptValor.setAdjY(40);
        dialogsCaptValor.setEnableMinimize(false);
        editsCaptValIngMonto = edits.create('editsCaptValIngMonto', 'editsCaptValIngMonto', 'Ingrese Monto:', 1,90, 'normal');    
        editsCaptValIngMonto.setValidInteger();
		editsCaptValIngMonto.setSizeEdit(100);
		editsCaptValIngMonto.setMaxLength(12);
        imgButtonsCaptValAceptar = imgButtons.create('imgButtonsCaptValAceptar', 'Si', 'pulgararriba_1.png');
        imgButtonsCaptValCancelar = imgButtons.create('imgButtonsCaptValCancelar', 'No', 'pulgarabajo_1.png');
        imgButtonsCaptValAceptar.setDimension(40, 22);
        imgButtonsCaptValCancelar.setDimension(40, 22);
    },
    
    init: function() {
        this.create();
        this.setEvents();
        this.dialogsCaptValor_Init();
        this.createMWs();
    },
    
    setEvents: function() {
        editsCaptValIngMonto.onEnter(this.windowName + ".capturar()");
    	imgButtonsCaptValAceptar.onClick(this.windowName + ".capturar()");
        imgButtonsCaptValCancelar.onClick("dialogsCaptValor.close();");
    },

    setIndex: function(ix) {
    	this.indexCmb = ix;
    },
    
    capturar: function() {
    	dialogsCaptValor.close();
		Pagos.facturar(
			editsPagoCi.getText(),
			pcbPagoRecConcepto.getOptionChecked().fields[this.indexCmb], 
			0.0, 
			parseFloat(editsCaptValIngMonto.getValue(),10),
			'', 
			'', 
			'', 
			0, 
			pcbPagoPeriodo.setModeReturnGetText(0).getText(), 
			0.0, 
			0.0, 
			'', 
			pcbPagoRecConcepto.getOptionChecked().arrValues[this.indexCmb][0],
			editsPagoCi.hideId,
			pcbPagoCarrera.setModeReturnGetText(0).getText(),
			pcbPagoRecConcepto.getOptionChecked().arrValues[this.indexCmb][9],
			pcbPagoRecConcepto.getOptionChecked().arrValues[this.indexCmb][10],
			false);
    }
};

