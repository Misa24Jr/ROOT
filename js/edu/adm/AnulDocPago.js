var dialogsAnulDocPago = new Object();
var editsAnulDocPagIdDocumento = new Object();
var editsAnulDocPagCi = new Object();
var editsAnulDocPagNombre = new Object();
var editsAnulDocPagApellido = new Object();
var editsAnulDocPagEstado = new Object();
var editsAnulDocPagFecha = new Object();
var editsAnulDocPagMonto = new Object();
var editsAnulDocPagTipDocumento = new Object();
var labelsAnulDocPagObservaciones = new Object();
var memoAnulDocPagObservaciones = new Object();
var labelsAnulDocPagoNueObservaciones = new Object();
var memoAnulDocPagNueObservaciones = new Object();
var imgButtonsAnulDocPagAnular = new Object();
var imgButtonsAnulDocPagBuscar = new Object();
var imgButtonsAnulDocPagLimpiar = new Object();
var imgButtonsAnulDocPagSalir = new Object();
var mwAnulDocPago = new Object();// minWindow

var AnulDocPago = {
	windowName : 'AnulDocPago',
	isCreate : false,
	flgReimprimirRecibo : false,
	
	show : function() {
		if (!this.isCreate) {
		  this.init();
		  this.isCreate = true;
		}
		if (dialogsAnulDocPago.isByClean())
 			this.limpiar('');			
 		dialogsAnulDocPago.show();
	},
	
	hide : function() {
		dialogsAnulDocPago.hide();
	},
	
	createMWs : function() {
		mwAnulDocPago  = desktop.addMinWindow('Anular Pago', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsAnulDocPago .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsAnulDocPago_Init : function() {
        dialogsAnulDocPago.setMinimizeXY(0,0);
        dialogsAnulDocPago.setCenterScreen();
        dialogsAnulDocPago.addSpace(0,0,20);
        dialogsAnulDocPago.addLn(1,1,1);
		dialogsAnulDocPago.setHeightCell(1,1,14);
		dialogsAnulDocPago.addObject(editsAnulDocPagIdDocumento,20,41);
		dialogsAnulDocPago.addObject(editsAnulDocPagTipDocumento,285,41);
		dialogsAnulDocPago.addObject(editsAnulDocPagCi,20,65);
		dialogsAnulDocPago.addObject(editsAnulDocPagNombre,285,65);
		dialogsAnulDocPago.addObject(editsAnulDocPagApellido,555,65);
		dialogsAnulDocPago.addObject(editsAnulDocPagMonto,20,89);
		dialogsAnulDocPago.addObject(editsAnulDocPagEstado,285,89);
		dialogsAnulDocPago.addObject(editsAnulDocPagFecha,555,89);
		dialogsAnulDocPago.addObject(labelsAnulDocPagObservaciones,20,120);
		dialogsAnulDocPago.addObject(memoAnulDocPagObservaciones, 19,141);
		memoAnulDocPagObservaciones.style.zIndex = 1000;
		dialogsAnulDocPago.addObject(labelsAnulDocPagNueObservaciones,20,220);
		dialogsAnulDocPago.addObject(memoAnulDocPagNueObservaciones, 19,241);
		memoAnulDocPagNueObservaciones.style.zIndex = 900;
		dialogsAnulDocPago.addObject(imgButtonsAnulDocPagAnular, 180, 320);
		dialogsAnulDocPago.addObject(imgButtonsAnulDocPagBuscar, 290, 320);
		dialogsAnulDocPago.addObject(imgButtonsAnulDocPagLimpiar, 400, 320);
		dialogsAnulDocPago.addObject(imgButtonsAnulDocPagSalir, 510, 320);
	},
  	
  	create : function() {
  		dialogsAnulDocPago = dialogs.create('dialogsAnulDocPago',0,0,780,330,'ANULAR DOCUMENTO DE PAGO');
  		dialogsAnulDocPago.setAdjY(20);
  		editsAnulDocPagIdDocumento = edits.create('editsAnulDocPagIdDocumento','editsAnulDocPagIdDocumento','Documento Nº (*):',1,106,'normal');
		editsAnulDocPagIdDocumento.setSizeEdit(149);
		editsAnulDocPagIdDocumento.setMaxLength(8);
  		editsAnulDocPagIdDocumento.setValidEmpty();
  		editsAnulDocPagIdDocumento.setValidInteger();
  		editsAnulDocPagCi = edits.create('editsAnulDocPagCi','editsAnulDocPagCi','C.i. :',1,106,'normal');
		editsAnulDocPagCi.setSizeEdit(149);
		editsAnulDocPagCi.setMaxLength(8);
  		editsAnulDocPagCi.setValidEmpty();
  		editsAnulDocPagCi.readOnly(true);
  		editsAnulDocPagCi.setValidInteger();
  		editsAnulDocPagNombre = edits.create('editsAnulDocPagNombre','editsAnulDocPagNombre','Nombre :',1,108,'normal');
		editsAnulDocPagNombre.setSizeEdit(149);
		editsAnulDocPagNombre.setMaxLength(8);
  		editsAnulDocPagNombre.setValidEmpty();
  		editsAnulDocPagNombre.readOnly(true);
  		editsAnulDocPagApellido = edits.create('editsAnulDocPagApellido','editsAnulDocPagApellido','Apellido :',1,55,'normal');
		editsAnulDocPagApellido.setSizeEdit(149);
		editsAnulDocPagApellido.setMaxLength(8);
  		editsAnulDocPagApellido.setValidEmpty();
  		editsAnulDocPagApellido.readOnly(true);
  		editsAnulDocPagEstado = edits.create('editsAnulDocPagEstado', 'editsAnulDocPagEstado', 'Estado :', 1,108);
		editsAnulDocPagEstado.setSizeEdit(149);
  		editsAnulDocPagEstado.setValidEmpty();
  		editsAnulDocPagEstado.readOnly(true);
  		editsAnulDocPagFecha = edits.create('editsAnulDocPagFecha','editsAnulDocPagFecha','Fecha :',1,55,'normal');
		editsAnulDocPagFecha.setSizeEdit(149);
  		editsAnulDocPagFecha.setValidEmpty();	
  		editsAnulDocPagFecha.readOnly(true);
  		editsAnulDocPagMonto = edits.create('editsAnulDocPagMonto','editsAnulDocPagMonto','Monto :',1,106,'normal');
		editsAnulDocPagMonto.setSizeEdit(149);
		editsAnulDocPagMonto.setMaxLength(30);
  		editsAnulDocPagMonto.setValidEmpty();
  		editsAnulDocPagMonto.readOnly(true);
  		editsAnulDocPagTipDocumento = edits.create('editsAnulDocPagTipDocumento','editsAnulDocPagTipDocumento','Tipo Documento :',1,108,'normal');
		editsAnulDocPagTipDocumento.setSizeEdit(149);
		editsAnulDocPagTipDocumento.setMaxLength(30);
  		editsAnulDocPagTipDocumento.setValidEmpty();
  		editsAnulDocPagTipDocumento.readOnly(true);
  		labelsAnulDocPagObservaciones = labels.create('labelsAnulDocPagObservaciones','Observaciones :',1);
		labelsAnulDocPagObservaciones.setFont('arial black','12','Black');
  		memoAnulDocPagObservaciones = memo.create('memoAnulDocPagObservaciones', '', 1, 1, 0);
  		memoAnulDocPagObservaciones.setReadOnly();
		memoAnulDocPagObservaciones.setDimension(738, 60);
		memoAnulDocPagObservaciones.setMaxLength(300);
  		memoAnulDocPagObservaciones.setValidEmpty();
  		labelsAnulDocPagNueObservaciones = labels.create('labelsAnulDocPagNueObservaciones','Motivo de la Anulación :',1);
		labelsAnulDocPagNueObservaciones.setFont('arial black','12','Black');
  		memoAnulDocPagNueObservaciones = memo.create('memoAnulDocPagNueObservaciones', '', 1, 1, 0);
		memoAnulDocPagNueObservaciones.setDimension(738, 60);
		memoAnulDocPagNueObservaciones.setMaxLength(150);
  		memoAnulDocPagNueObservaciones.setValidEmpty();
  		imgButtonsAnulDocPagAnular = imgButtons.create('imgButtonsAnulDocPagAnular','Anular','ok.png');
  		imgButtonsAnulDocPagBuscar = imgButtons.create('imgButtonsAnulDocPagBuscar','Buscar','icono_buscar.png');
  		imgButtonsAnulDocPagLimpiar = imgButtons.create('imgButtonsAnulDocPagLimpiar','Limpiar','limpiar.png');
  		imgButtonsAnulDocPagSalir = imgButtons.create('imgButtonsAnulDocPagSalir','Salir','salir.png');
		imgButtonsAnulDocPagAnular.setDimension(90,22);
		imgButtonsAnulDocPagBuscar.setDimension(90,22);
		imgButtonsAnulDocPagLimpiar.setDimension(90,22);
		imgButtonsAnulDocPagSalir.setDimension(90,22);
  	},

  	init : function() { 
  		this.create();
  		this.setEvents();
  		this.dialogsAnulDocPago_Init();
  		this.createMWs(); 
  	},

  	limpiar : function(origen) {
  		editsAnulDocPagIdDocumento.setValue("");
        editsAnulDocPagTipDocumento.setValue("");
  		editsAnulDocPagCi.setValue("");
        editsAnulDocPagNombre.setValue("");
    	editsAnulDocPagApellido.setValue("");
        editsAnulDocPagMonto.setValue("");
    	editsAnulDocPagEstado.setValue("");
        editsAnulDocPagFecha.setValue("");
        memoAnulDocPagObservaciones.setText("");
        memoAnulDocPagNueObservaciones.setText("");
  		dialogsAnulDocPago.setMsg("");
  		
  		if (origen == 'coreupd' && this.flgReimprimirRecibo) {
  			dialogsAnulDocPago.close();
  			editsRepoReImprIdDoc.setValue('');
  			RepoReimprimirRecibo.buscar();
  		}
  	},

  	buscar: function() {
        var rlx = xmlStructs.createRecordList("rlx");

        rlx.add('reg', editsAnulDocPagIdDocumento);
        Tool.cnnSrv("MantObject", "getAnulDocPago", this.windowName + ".loadDataRecibo()", rlx);
  	},

  	loadDataRecibo: function() {
  		Tool.loadEditData(dialogsAnulDocPago, editsAnulDocPagTipDocumento, 0, json('getAnulDocPago'));	
  		Tool.loadEditData(dialogsAnulDocPago, editsAnulDocPagCi, 1, json('getAnulDocPago'));
  		Tool.loadEditData(dialogsAnulDocPago, editsAnulDocPagNombre, 2, json('getAnulDocPago'));	
  		Tool.loadEditData(dialogsAnulDocPago, editsAnulDocPagApellido, 3, json('getAnulDocPago'));	
  		Tool.loadEditData(dialogsAnulDocPago, editsAnulDocPagMonto, 4, json('getAnulDocPago'));
  		Tool.loadEditData(dialogsAnulDocPago, editsAnulDocPagEstado, 5, json('getAnulDocPago'));	
  		Tool.loadEditData(dialogsAnulDocPago, editsAnulDocPagFecha, 6, json('getAnulDocPago'));
  		Tool.loadMemoData(dialogsAnulDocPago, memoAnulDocPagObservaciones, 7, json('getAnulDocPago'));	
  	},

  	setEvents : function() {
  		editsAnulDocPagIdDocumento.onEnter(this.windowName + ".buscar()");
  		imgButtonsAnulDocPagAnular.onClick(this.windowName+".coreUpdate('anular')");
  		imgButtonsAnulDocPagBuscar.onClick(this.windowName+".buscar()");
  		imgButtonsAnulDocPagLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsAnulDocPagSalir.onClick('dialogsAnulDocPago.close()');
   	},
   	
	coreUpdate: function(methodName) {
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (editsAnulDocPagTipDocumento.valid(dialogsAnulDocPago))
			if (editsAnulDocPagCi.valid(dialogsAnulDocPago))
				if (editsAnulDocPagNombre.valid(dialogsAnulDocPago))
					if (editsAnulDocPagApellido.valid(dialogsAnulDocPago))
						if (editsAnulDocPagMonto.valid(dialogsAnulDocPago))
							if (editsAnulDocPagEstado.valid(dialogsAnulDocPago))
								if (editsAnulDocPagFecha.valid(dialogsAnulDocPago)) 
									if (memoAnulDocPagNueObservaciones.valid(dialogsAnulDocPago)) {
										rlx.add('reg', editsAnulDocPagIdDocumento);
										rlx.add('reg', memoAnulDocPagNueObservaciones);
										Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar("coreupd")', rlx);
									}
	} 
};