var dlgReimprimirRecibo = new Object();
var pcbReciImpNivAcademico = new Object(); 
var pcbReciImpPeriodo = new Object(); 	
var editsRepoReImprIdDoc = new Object();
var editReimprimirReciboCi = new Object();
var editReimprimirReciboNombre = new Object();
var editReimprimirReciboApellido = new Object();
var gridsReciboImprimir = new Object();
var pcbReciImpTipDocumento = new Object();
var imgButtonsReciboImprimirReImpr = new Object();
var imgButtonsReciboImprimirBuscar = new Object();
var imgButtonsReciboImprimirLimpiar = new Object();
var imgButtonsReciboImprimirAnular = new Object();
var imgButtonsReciboImprimirSalir = new Object();
var mwRepoReimprimirRecibo = new Object();// minWindow

var RepoReimprimirRecibo = {
    windowName : 'RepoReimprimirRecibo',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dlgReimprimirRecibo.isByClean()) {
        	pcbReciImpNivAcademico.setSelectedIndex(0); 		
			pcbReciImpPeriodo.setSelectedIndex(0); 		
			pcbReciImpTipDocumento.setSelectedIndex(0); 		
			editsRepoReImprIdDoc.clear();
			editReimprimirReciboCi.clear();
  			editReimprimirReciboNombre.clear();
  			editReimprimirReciboApellido.clear();
  			Tool.cnnSrv('InscripObject', 'getCargarPersona', this.windowName + '.loadDataPers()');  			
		}
        dlgReimprimirRecibo.show();
    },
    
	hide : function() {
		dlgReimprimirRecibo.hide();
	},
	
	createMWs : function() {
		mwRepoReimprimirRecibo  = desktop.addMinWindow('R.R/F.Pago', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dlgReimprimirRecibo .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dlgReimprimirRecibo_Init : function() {
        dlgReimprimirRecibo.setMinimizeXY(0,0);
        dlgReimprimirRecibo.setCenterScreen();
        dlgReimprimirRecibo.addSpace(0,0,20);  
        dlgReimprimirRecibo.addObjToDialog(pcbReciImpNivAcademico,2,1,34);
        dlgReimprimirRecibo.addObjToDialog(pcbReciImpPeriodo,2,1,34);
        dlgReimprimirRecibo.addObjToDialog(editsRepoReImprIdDoc,2,1,34);
        dlgReimprimirRecibo.adjAllMarginObj(2,1,42);
        dlgReimprimirRecibo.leftMarginObj(2,1,0,50);
        dlgReimprimirRecibo.addObjToDialog(editReimprimirReciboCi,3,1,1);
        dlgReimprimirRecibo.addObjToDialog(editReimprimirReciboNombre,3,1,1);
        dlgReimprimirRecibo.addObjToDialog(editReimprimirReciboApellido,3,1,1);
        dlgReimprimirRecibo.adjAllMarginObj(3,1,42);
        dlgReimprimirRecibo.leftMarginObj(3,1,0,50);
        dlgReimprimirRecibo.addLn(4,1,1);
		dlgReimprimirRecibo.setHeightCell(4,1,10);
        dlgReimprimirRecibo.addObjToDialog(gridsReciboImprimir.getObject(),5,1,1);
        dlgReimprimirRecibo.addLn(6,1,1);
		dlgReimprimirRecibo.setHeightCell(6,1,9);
        dlgReimprimirRecibo.addObjToDialog(pcbReciImpTipDocumento.getObject(),7,1,1);
        dlgReimprimirRecibo.leftMarginObj(7,1,0,356);
        dlgReimprimirRecibo.addLn(8,1,1);
		dlgReimprimirRecibo.setHeightCell(8,1,9);
		dlgReimprimirRecibo.addObjToDialog(imgButtonsReciboImprimirReImpr,9,1,1);
		dlgReimprimirRecibo.addObjToDialog(imgButtonsReciboImprimirBuscar,9,1,1);
        dlgReimprimirRecibo.addObjToDialog(imgButtonsReciboImprimirLimpiar,9,1,1);
        dlgReimprimirRecibo.addObjToDialog(imgButtonsReciboImprimirAnular,9,1,1);
        dlgReimprimirRecibo.addObjToDialog(imgButtonsReciboImprimirSalir,9,1,1);
        dlgReimprimirRecibo.adjAllMarginObj(9,1,25);
        dlgReimprimirRecibo.leftMarginObj(9,1,0,190);
	},
  
	gridsReciboImprimir_Init : function()  {
        gridsReciboImprimir.setFixColRow(false,true);
        gridsReciboImprimir.addTitleVectorX(['Cedula','Nombre','Apellido','Documento Nº','Monto','Fecha','Estado','Documento','Observaciones','idTipoDoc']);
        gridsReciboImprimir.showData();  
        gridsReciboImprimir.setSizeCol(1,80);
        gridsReciboImprimir.setSizeCol(2,120);
        gridsReciboImprimir.setSizeCol(3,120);
        gridsReciboImprimir.setSizeCol(4,120);      
        gridsReciboImprimir.setSizeCol(5,100);
        gridsReciboImprimir.setSizeCol(6,90); 
        gridsReciboImprimir.setSizeCol(7,80);        
        gridsReciboImprimir.setSizeCol(8,80);        
        gridsReciboImprimir.setSizeCol(9,150);        
        gridsReciboImprimir.setSizeCol(10,0);        
        gridsReciboImprimir.hideCol(10);
	}, 	  	
	
	create : function() {
		dlgReimprimirRecibo = dialogs.create('dlgReimprimirRecibo',0,0,990,562,'REIMPRIMIR RECIBO / FACTURA');
		dlgReimprimirRecibo.setAdjY(20);
		pcbReciImpNivAcademico = powerComboBox.create('pcbReciImpNivAcademico', 'pcbReciImpNivAcademico', 'Nivel Academico (+):', 1,137);
		pcbReciImpNivAcademico.setWidthCombo(120);
		pcbReciImpNivAcademico.enableReadOnlyEditor();
		pcbReciImpNivAcademico.addEmptyOption();
		pcbReciImpNivAcademico.setValidEmpty();
		pcbReciImpPeriodo = powerComboBox.create('pcbReciImpPeriodo', 'pcbReciImpPeriodo', 'Periodo (+):', 1,80);
		pcbReciImpPeriodo.setWidthCombo(120);
		pcbReciImpPeriodo.enableReadOnlyEditor();
		pcbReciImpPeriodo.addEmptyOption();
		pcbReciImpPeriodo.setValidEmpty();
		editsRepoReImprIdDoc = edits.create('editsRepoReImprIdDoc','editsRepoReImprIdDoc','Documento Nº (*):',1,122,'normal');
		editsRepoReImprIdDoc.setSizeEdit(141);
		editsRepoReImprIdDoc.setValidInteger();
		editsRepoReImprIdDoc.setFieldFind(true);
		editReimprimirReciboCi = edits.create('editReimprimirReciboCi','editReimprimirReciboCi','C.i. (*):',1,137,'normal');
		editReimprimirReciboCi.setValidInteger();
		editReimprimirReciboCi.setFieldFind(true);
        editReimprimirReciboCi.setSizeEdit(141);
		editReimprimirReciboCi.setMaxLength(50); 
		editReimprimirReciboNombre = edits.create('editReimprimirReciboNombre','editReimprimirReciboNombre','Nombre (*):', 1, 79, 'normal');
		editReimprimirReciboNombre.setValidEmpty();
		editReimprimirReciboNombre.setFieldFind(true);
        editReimprimirReciboNombre.setSizeEdit(141);
		editReimprimirReciboNombre.setMaxLength(50); 
		editReimprimirReciboApellido = edits.create('editReimprimirReciboApellido','editReimprimirReciboApellido','Apellido (*):',1,123,'normal');
		editReimprimirReciboApellido.setValidEmpty();
		editReimprimirReciboApellido.setFieldFind(true);
        editReimprimirReciboApellido.setSizeEdit(141);
		editReimprimirReciboApellido.setMaxLength(50); 
		gridsReciboImprimir = grids.create('gridsReciboImprimir',20,10);
		pcbReciImpTipDocumento = powerComboBox.create('pcbReciImpTipDocumento', 'pcbReciImpTipDocumento', 'Tipo Documento (+):', 1,124);
		pcbReciImpTipDocumento.setWidthCombo(95);
		pcbReciImpTipDocumento.enableReadOnlyEditor();
		pcbReciImpTipDocumento.addEmptyOption();
		pcbReciImpTipDocumento.setValidEmpty();
		pcbReciImpTipDocumento.addOptionAndSimpleValue(null, 'Recibo', 0);
		pcbReciImpTipDocumento.addOptionAndSimpleValue(null, 'Recibo + Rubro', 1);
		pcbReciImpTipDocumento.addOptionAndSimpleValue(null, 'Factura', 2);
		pcbReciImpTipDocumento.addOptionAndSimpleValue(null, 'Factura + Rubro', 4);
		pcbReciImpTipDocumento.addOptionAndSimpleValue(null, 'Factura HCSA', 7);
		pcbReciImpTipDocumento.addOptionAndSimpleValue(null, 'Factura C', 5);
		pcbReciImpTipDocumento.addOptionAndSimpleValue(null, 'Factura M', 6);
		pcbReciImpTipDocumento.addOptionAndSimpleValue(null, 'Factura 1/4', 3);
		imgButtonsReciboImprimirReImpr = imgButtons.create('imgButtonsReciboImprimirReImpr','Reimprimir','print.png');
		imgButtonsReciboImprimirBuscar = imgButtons.create('imgButtonsReciboImprimirBuscar','Buscar','icono_buscar.png');
		imgButtonsReciboImprimirLimpiar = imgButtons.create('imgButtonsReciboImprimirLimpiar','Limpiar','limpiar.png');
  		imgButtonsReciboImprimirAnular = imgButtons.create('imgButtonsReciboImprimirAnular','Anular','ok.png');
		imgButtonsReciboImprimirSalir = imgButtons.create('imgButtonsReciboImprimirSalir','Salir','salir.png');
      	imgButtonsReciboImprimirReImpr.setDimension(90,22);
        imgButtonsReciboImprimirBuscar.setDimension(90,22);
        imgButtonsReciboImprimirLimpiar.setDimension(90,22);
		imgButtonsReciboImprimirAnular.setDimension(90,22);
        imgButtonsReciboImprimirSalir.setDimension(90,22);
	},

  	init : function() { 
  		this.create();
  		this.dlgReimprimirRecibo_Init();
  		this.gridsReciboImprimir_Init();
  		this.createMWs(); 
  		this.setEvents();
  	},

    loadDataPers : function() {
    	editsRepoReImprIdDoc.readOnly(true);
    	editReimprimirReciboCi.readOnly(true);
  	    editReimprimirReciboNombre.readOnly(true);
  	    editReimprimirReciboApellido.readOnly(true);
  	    editReimprimirReciboCi.onEnter("");
  		editReimprimirReciboCi.onChange("");
  		editReimprimirReciboNombre.onEnter("");
  		editReimprimirReciboNombre.onChange("");
  		editReimprimirReciboApellido.onEnter("");
  		editReimprimirReciboApellido.onChange("");
    	if (json('getPermiso').data[0] != 'ACTIVO') {
  			editReimprimirReciboCi.setValue(json('getDatoPersona').data[0]);
  	  		editReimprimirReciboNombre.setValue(json('getDatoPersona').data[1]);
  	  		editReimprimirReciboApellido.setValue(json('getDatoPersona').data[2]);
  	  		editReimprimirReciboCi.hideId = json('getDatoPersona').data[3];
  		}
    	else {
    		editsRepoReImprIdDoc.readOnly(false);
  	    	editReimprimirReciboCi.readOnly(false);
  	    	editReimprimirReciboNombre.readOnly(false);
  	    	editReimprimirReciboApellido.readOnly(false);
  		  	editReimprimirReciboCi.onEnter(this.windowName + ".buscar()");
  		  	editReimprimirReciboCi.onChange(this.windowName + ".limpiarFind(1)");
  		  	editReimprimirReciboNombre.onEnter(this.windowName + ".buscar()");
  		  	editReimprimirReciboNombre.onChange(this.windowName + ".limpiarFind(2)");
  		  	editReimprimirReciboApellido.onEnter(this.windowName + ".buscar()");
  		  	editReimprimirReciboApellido.onChange(this.windowName + ".limpiarFind(3)");
    	}
		Tool.cnnSrv('MantObject', 'getMantNivAcademico', this.windowName + '.loadDataInit()');
        dlgReimprimirRecibo.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

	loadDataInit: function() {
		Tool.loadPowerComboData(dlgReimprimirRecibo, pcbReciImpNivAcademico, 0, 1, json('getMantNivAcademico'));
		pcbReciImpNivAcademico.setSelectedIndex(1);
		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dlgReimprimirRecibo, pcbReciImpPeriodo, 0, 1, pcbReciImpNivAcademico);
		this.limpiar();
	},

  	limpiarFind : function(ix) {
  		editReimprimirReciboCi.hideId = -1;
  		editsRepoReImprIdDoc.clear();

  		switch (ix) {
		case 1: 
			editReimprimirReciboNombre.clear();
			editReimprimirReciboApellido.clear(); 		
			break;
		case 2: 
			editReimprimirReciboCi.clear();
			editReimprimirReciboApellido.clear(); 		
			break;
		default:
			editReimprimirReciboCi.clear();
			editReimprimirReciboNombre.clear();
			break;
		} 
  	},

  	setDoc: function() {
  		if(gridsReciboImprimir.getDataCell(7) != 'ANULADO' && json('getPermiso').data[0] == 'ACTIVO')
  			imgButtonsReciboImprimirAnular.setEnable();
  		else
  			imgButtonsReciboImprimirAnular.setDisable();

  		editsRepoReImprIdDoc.setValue(gridsReciboImprimir.getDataCell(4));
  		editsRepoReImprIdDoc.hideStateDoc = gridsReciboImprimir.getDataCell(7); 
  		
  		if(gridsReciboImprimir.getDataCell(10) == 1)
  			pcbReciImpTipDocumento.findOption(0);
  		else
  			pcbReciImpTipDocumento.findOption(gridsReciboImprimir.getDataCell(10));
  	},
  	
  	resetElements: function() {
  		gridsReciboImprimir.clean();
  		imgButtonsReciboImprimirAnular.setDisable();
  		editsRepoReImprIdDoc.clear();
  		editsRepoReImprIdDoc.hideStateDoc = ''; 
  	},
  	
  	setEvents : function() {
  		pcbReciImpNivAcademico.onChange(this.windowName + ".limpiar()");
  		pcbReciImpPeriodo.onChange(this.windowName + ".resetElements()");
 		editsRepoReImprIdDoc.onEnter(this.windowName + ".buscar()");
  		editReimprimirReciboCi.onEnter(this.windowName + ".buscar()");
  		editReimprimirReciboCi.onChange(this.windowName + ".limpiarFind(1)");
  		editReimprimirReciboCi.onClick(this.windowName + ".limpiarFind(1)");
  		editReimprimirReciboNombre.onEnter(this.windowName + ".buscar()");
  		editReimprimirReciboNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editReimprimirReciboNombre.onClick(this.windowName + ".limpiarFind(2)");
  		editReimprimirReciboApellido.onEnter(this.windowName + ".buscar()");
  		editReimprimirReciboApellido.onChange(this.windowName + ".limpiarFind(3)");
  		editReimprimirReciboApellido.onClick(this.windowName + ".limpiarFind(3)");
  		gridsReciboImprimir.onClickCells(this.windowName + ".setDoc()");
  		imgButtonsReciboImprimirReImpr.onClick(this.windowName + ".coreUpdate()");
  		imgButtonsReciboImprimirBuscar.onClick(this.windowName + ".buscar()");
  		imgButtonsReciboImprimirLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsReciboImprimirAnular.onClick(this.windowName + ".showWinAnular()");
  		imgButtonsReciboImprimirSalir.onClick("dlgReimprimirRecibo.close()");
 	},

 	showWinAnular : function(){
 		exeShow("js/edu/adm/","AnulDocPago");
 		setTimeout(function(){
 			AnulDocPago.flgReimprimirRecibo = true;
 			editsAnulDocPagIdDocumento.setValue(editsRepoReImprIdDoc.getValue());
 			AnulDocPago.buscar();
 		}, 500);
  	},
 	
 	
  	limpiar : function(){
  		var rlx = xmlStructs.createRecordList("rlx");
  		
		Tool.rstPwrCmb(pcbReciImpPeriodo);
		if (pcbReciImpNivAcademico.getOption() != "") {
			rlx.add('reg', pcbReciImpNivAcademico);
	        Tool.cnnSrv('MantObject', 'getPeriodoXNivelAcad', this.windowName + '.loadDataPeriodo()', rlx);
		} 
		pcbReciImpTipDocumento.setSelectedIndex(0);
		editsRepoReImprIdDoc.clear();
		editsRepoReImprIdDoc.hideStateDoc = '';

		if (json('getPermiso').data[0] == 'ACTIVO') {
			editReimprimirReciboCi.hideId = -1;
			editReimprimirReciboCi.clear();
			editReimprimirReciboNombre.clear();
			editReimprimirReciboApellido.clear();
		}
		gridsReciboImprimir.clean();
		imgButtonsReciboImprimirAnular.setDisable();
    },
	
    loadDataPeriodo: function() {
		Tool.loadPowerComboData(dlgReimprimirRecibo, pcbReciImpPeriodo, 0, 1, json('getPeriodoXNivelAcad'));
		pcbReciImpPeriodo.setSelectedIndex(1);
		if (json('getPermiso').data[0] != 'ACTIVO')
			this.buscar();
	},

	buscar : function() {
 		gridsReciboImprimir.clean();
 		imgButtonsReciboImprimirAnular.setDisable();
		if (pcbReciImpNivAcademico.valid(dlgReimprimirRecibo))
			if (pcbReciImpPeriodo.valid(dlgReimprimirRecibo)) {
				if ((editReimprimirReciboCi.getValue() == '' && editReimprimirReciboNombre.getValue() == '' && editReimprimirReciboApellido.getValue() == '') || (editReimprimirReciboCi.getValue() != '' && editReimprimirReciboNombre.getValue() != '' && editReimprimirReciboApellido.getValue() != '')) {
					if (editsRepoReImprIdDoc.getValue() == '' && editReimprimirReciboCi.getValue() == '' && editReimprimirReciboNombre.getValue() == '' && editReimprimirReciboApellido.getValue() == '')
						Alert.show('Debe ingresar alguno de estos datos: Nº Documento / C.i. / Nombre / Apellido', 'SISTEMA', Alert.TYPE_INFO);
//					if (editsRepoReImprIdDoc.valid(dlgReimprimirRecibo) || editReimprimirReciboCi.valid(dlgReimprimirRecibo) || editReimprimirReciboNombre.valid(dlgReimprimirRecibo) || editReimprimirReciboApellido.valid(dlgReimprimirRecibo))
					else	
						Tool.getGridData('ReportObject', 'getDocumentoPago', dlgReimprimirRecibo, gridsReciboImprimir, new Function('Tool.loadGridData(dlgReimprimirRecibo, gridsReciboImprimir, false, json("getDocumentoPago"))'), 
							pcbReciImpPeriodo, editsRepoReImprIdDoc, editsRepoReImprIdDoc, 
							new MiniDataSet(editReimprimirReciboCi.hideId, 'int', true), 
							new MiniDataSet(editReimprimirReciboCi.hideId, 'int', true), 
							new MiniDataSet(editReimprimirReciboCi.hideId, 'int', true),
							new MiniDataSet(editReimprimirReciboCi.hideId, 'int', true)
						);
				}
				else {
					ResuBusqueda.setObjectExtFnc(editReimprimirReciboCi, editReimprimirReciboNombre, editReimprimirReciboApellido, this.windowName + ".buscar()");
					Tool.getGridData('MantObject', 'getMantPersTodas', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editReimprimirReciboCi, editReimprimirReciboCi, editReimprimirReciboNombre, editReimprimirReciboNombre, editReimprimirReciboApellido, editReimprimirReciboApellido);
				}
			}
	},
	
	reporte : function() {
		var doc = new Documento();
		
		doc.setTopMargin(20);
		doc.addJsonGen(json('getDataGeneral'));
		doc.addJsonFormaPago(json('getDataFormaPago'));
		doc.addJsonEstudiante(json('getDataEstudiante'));
		
		if (pcbReciImpTipDocumento.getText() == 1 || pcbReciImpTipDocumento.getText() == 3)
			doc.addJsonConcepto(json('getDataConcepto'));
		else
			doc.addJsonConcepto(json('getDataConceptoSinRubro'));
			
		if (editsRepoReImprIdDoc.hideStateDoc == "ANULADO")
			doc.setDocType('ANULADO');
		else {
			if (pcbReciImpTipDocumento.getText() == 0 || pcbReciImpTipDocumento.getText() == 1)
				doc.setDocType('RECIBO');
			else if (pcbReciImpTipDocumento.getText() == 3)
				doc.setDocType('FACTURA 1/4');
			else if (pcbReciImpTipDocumento.getText() == 4)
				doc.setDocType('FACTURA P');
			else if (pcbReciImpTipDocumento.getText() == 5)
				doc.setDocType('FACTURA C');
			else if (pcbReciImpTipDocumento.getText() == 6)
				doc.setDocType('FACTURA M');
			else if (pcbReciImpTipDocumento.getText() == 7)
				doc.setDocType('FACTURA HCSA');
			else	
				doc.setDocType('FACTURA');
		}
		doc.createDoc();
  	},

  	coreUpdate : function(methodName) {
        var rlx = xmlStructs.createRecordList("rlx");
		if (editsRepoReImprIdDoc.valid(dlgReimprimirRecibo))
			if (pcbReciImpTipDocumento.valid(dlgReimprimirRecibo)) {
				rlx.add('reg', editsRepoReImprIdDoc);
				rlx.add('reg', pcbReciImpTipDocumento);
				Tool.cnnSrv('ReportObject', 'getDetalleDocPago', this.windowName + '.reporte()', rlx);
			}
  	}
};
