var dialogsRepoCieDiaCaja = {};
var calendarRepoCieDiaCajDesde = {};
var calendarRepoCieDiaCajHasta = {};
var pcbRepoCieDiaCajConcepto = {}; 
var pcbRepoCieDiaCajFormaPago = {}; 
var imgButtonsRepoCieDiaCajaReporte = {};
var imgButtonsRepoCieDiaCajaImprimir = {};
var imgButtonsRepoCieDiaCajaSalir = {};
var pcbOrgCierreCaja = {};
var pcbCuentaBancaria = {};
var mwRepoCieDiaCaja = {};// minWindow

var RepoCieDiaCaja = {
    windowName: 'RepoCieDiaCaja',
    isCreate: false,
	
    show: function(){
        if (!this.isCreate) {   
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoCieDiaCaja.isByClean()) 
          this.limpiar();
        dialogsRepoCieDiaCaja.show();
    },
            
    hide: function(){
    	dialogsRepoCieDiaCaja.hide();
    },
        
    createMWs: function(){
       mwRepoCieDiaCaja = desktop.addMinWindow('C.C.Diario.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
       dialogsRepoCieDiaCaja.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsRepoCieDiaCaja_init: function(){
        dialogsRepoCieDiaCaja.setMinimizeXY(0, 0);
        dialogsRepoCieDiaCaja.setCenterScreen();
        dialogsRepoCieDiaCaja.addSpace(0, 0, 20);
        dialogsRepoCieDiaCaja.addLn(1, 1, 1);
		dialogsRepoCieDiaCaja.setHeightCell(1,1,10);
        dialogsRepoCieDiaCaja.addObject(pcbOrgCierreCaja, 10, 35);
        dialogsRepoCieDiaCaja.addObject(calendarRepoCieDiaCajDesde.getEditCalendar(), 10, 65);
    	dialogsRepoCieDiaCaja.addObject(calendarRepoCieDiaCajHasta.getEditCalendar(), 10, 95);
        dialogsRepoCieDiaCaja.addObject(pcbCuentaBancaria, 10, 125);
        dialogsRepoCieDiaCaja.addObject(imgButtonsRepoCieDiaCajaImprimir, 130, 165);
    	dialogsRepoCieDiaCaja.addObject(pcbRepoCieDiaCajConcepto, 10, 195);
    	dialogsRepoCieDiaCaja.addObject(pcbRepoCieDiaCajFormaPago, 10, 225);
        dialogsRepoCieDiaCaja.addObject(imgButtonsRepoCieDiaCajaReporte, 60, 270);
        dialogsRepoCieDiaCaja.addObject(imgButtonsRepoCieDiaCajaSalir, 205, 270);
    },
    
    create: function(){
    	dialogsRepoCieDiaCaja = dialogs.create('dialogsRepoCieDiaCaja', 0, 0, 392, 280, 'CIERRE DE CAJA DIARIO');
        dialogsRepoCieDiaCaja.setAdjY(60);
        pcbOrgCierreCaja = powerComboBox.create('pcbOrgCierreCaja','pcbOrgCierreCaja','Organización (+):',1,106);
    	pcbOrgCierreCaja.enableReadOnlyEditor();
    	pcbOrgCierreCaja.addEmptyOption();
    	pcbOrgCierreCaja.setValidEmpty();
    	pcbOrgCierreCaja.enableOnChangeToEmptyOption();
        pcbOrgCierreCaja.setWidthCombo(120);
        pcbCuentaBancaria = powerComboBox.create('pcbCuentaBancaria','pcbCuentaBancaria','Cuenta Bancaria (*):',1,106);
        pcbCuentaBancaria.setFieldFind(true);
        pcbCuentaBancaria.enableReadOnlyEditor();
		pcbCuentaBancaria.addEmptyOption();
    	pcbCuentaBancaria.enableOnChangeToEmptyOption();
        pcbCuentaBancaria.setWidthCombo(245);
    	calendarRepoCieDiaCajDesde = calendars.create('calendarRepoCieDiaCajDesde');      
    	calendarRepoCieDiaCajDesde.setCaption('Fecha Desde (+):',1,110);
      	calendarRepoCieDiaCajDesde.setValidEmpty();
		calendarRepoCieDiaCajDesde.setWidthEditCalendar(120);
    	calendarRepoCieDiaCajDesde.sendToFrom(100);
      	calendarRepoCieDiaCajHasta = calendars.create('calendarRepoCieDiaCajHasta');      
    	calendarRepoCieDiaCajHasta.setCaption('Fecha Hasta (+):',1,110);
      	calendarRepoCieDiaCajHasta.setValidEmpty();
		calendarRepoCieDiaCajHasta.setWidthEditCalendar(120);
    	calendarRepoCieDiaCajHasta.sendToFrom(100);
    	pcbRepoCieDiaCajConcepto = powerComboBox.create('pcbRepoCieDiaCajConcepto', 'pcbRepoCieDiaCajConcepto', 'Concepto (*):', 1,105);
		pcbRepoCieDiaCajConcepto.enableReadOnlyEditor();
		pcbRepoCieDiaCajConcepto.addEmptyOption();
		pcbRepoCieDiaCajConcepto.setValidEmpty();
		pcbRepoCieDiaCajConcepto.setTypeObjOpt('input', 'checkbox');
		pcbRepoCieDiaCajConcepto.setFirstRowCheckMode(2);
		pcbRepoCieDiaCajConcepto.setWidthCombo(245);
		pcbRepoCieDiaCajConcepto.setFieldFind(true);
    	pcbRepoCieDiaCajFormaPago = powerComboBox.create('pcbRepoCieDiaCajFormaPago', 'pcbRepoCieDiaCajFormaPago', 'Forma de Pago (*):', 1,105);
		pcbRepoCieDiaCajFormaPago.enableReadOnlyEditor();
		pcbRepoCieDiaCajFormaPago.addEmptyOption();
		pcbRepoCieDiaCajFormaPago.setValidEmpty();
		pcbRepoCieDiaCajFormaPago.setTypeObjOpt('input', 'checkbox');
		pcbRepoCieDiaCajFormaPago.setFirstRowCheckMode(2);
		pcbRepoCieDiaCajFormaPago.setWidthCombo(245);
		pcbRepoCieDiaCajFormaPago.setFieldFind(true);
      	imgButtonsRepoCieDiaCajaReporte = imgButtons.create('imgButtonsRepoCieDiaCajaReporte','Descargar EXCEL','print.png');
      	imgButtonsRepoCieDiaCajaImprimir = imgButtons.create('imgButtonsRepoCieDiaCajaImprimir','Imprimir RESUMEN','print.png');
      	imgButtonsRepoCieDiaCajaSalir = imgButtons.create('imgButtonsRepoCieDiaCajaSalir','Salir','salir.png');    		
        imgButtonsRepoCieDiaCajaReporte.setDimension(130,22);
        imgButtonsRepoCieDiaCajaImprimir.setDimension(140,22);
        imgButtonsRepoCieDiaCajaSalir.setDimension(130,22);
    },
    
    init: function(){
    	this.create();
        this.setEvents();
        this.dialogsRepoCieDiaCaja_init();
        this.createMWs();
    },
    	
    setEvents: function(){
    	imgButtonsRepoCieDiaCajaSalir.onClick('dialogsRepoCieDiaCaja.close()');
    	imgButtonsRepoCieDiaCajaReporte.onClick(this.windowName + '.coreUpdate("excel")');
    	imgButtonsRepoCieDiaCajaImprimir.onClick(this.windowName + '.coreUpdate("")');
    },
   
    limpiar : function(tipo) {
    	pcbOrgCierreCaja.clear();
    	pcbCuentaBancaria.clear();
    	calendarRepoCieDiaCajDesde.clear();
		calendarRepoCieDiaCajHasta.clear();
		pcbRepoCieDiaCajConcepto.clear();
		pcbRepoCieDiaCajFormaPago.clear();
  		dialogsRepoCieDiaCaja.setMsg("");
  		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
    },
   
    loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoCieDiaCaja, pcbOrgCierreCaja, 0, 1, json('getData'));		
		Tool.getContext(dialogsRepoCieDiaCaja, pcbOrgCierreCaja, null, null, this.windowName + '.loadDataCtaBco()');
	},
	
	loadDataCtaBco: function() {
		Tool.getPowerComboDataFnc(this.windowName + '.callDataConcepto()', 'ReportObject', 'getCtaBancaria', dialogsRepoCieDiaCaja, pcbCuentaBancaria, 0, 1)		
	},
	
	callDataConcepto: function() {
		Tool.cnnSrv('ReportObject', 'getPagoConceptoInit', this.windowName + '.loadDataConcepto()');	
	},
	
	loadDataConcepto: function() {
		Tool.loadPowerComboData(dialogsRepoCieDiaCaja, pcbRepoCieDiaCajConcepto, 0, 1, json('getConceptos'));
		Tool.loadPowerComboData(dialogsRepoCieDiaCaja, pcbRepoCieDiaCajFormaPago, 0, 1, json('getFormaPago'));
	},
	
	reporte : function(tipoRpt) {
   	   	
   	   	if (tipoRpt == 'excel') {
	   	   	///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
	   	   	rep = new Report('portrait');
	   	   	rep.setPositionIcon(756,30);
	   	   	rep.setNoRepeatHead();
	   	   	//rep.setHeadImage(imgEduca.banner,true);
	   	   	///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
	   	   	rep.setFontProperties(rep.getRGBAObj(0,0,0,1),10,'helvetica','bold');
	   	   	rep.addBar(0,0,1128,80,rep.getRGBAObj(187,196,238,0.8),false);
	   	   	rep.addText(20, 30, 'ORGANIZACION: '+pcbOrgCierreCaja.getOption(),false);
	   	   	if(pcbCuentaBancaria.getOption().trim()!='')
	   	    rep.addText(20, 50, 'CUENTA BANCARIA: '+ pcbCuentaBancaria.getOption(),false);
	   	   	rep.addText(280, 65, 'Desde: '+calendarRepoCieDiaCajDesde.getFechaFromEdit(),false);
	   	   	rep.addText(430, 65, 'Hasta: '+calendarRepoCieDiaCajHasta.getFechaFromEdit(),false);
	   	   	///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
	   	   	rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),11,'courier','bold');
	   	   	rep.addBar(0,84,1128,120,rep.getRGBAObj(210,200,200,0.9),false);
	   	   	rep.addText(320, 110, 'CIERRE DE CAJA DIARIO',false);
	   	   	//************************ TABLE ***************************
	   	   	rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)','rgba(180,180,180,0.4)','rgba(180,180,180,0.4)','rgba(180,180,180,0.4)','rgba(180,180,180,0.4)','rgba(180,180,180,0.4)', 2);
	   	   	rep.setTableCellProperties(1, 'helvetica', 9);
	   	   	rep.addTable('TablaRepoAluPorSeccion',['Fecha','Usuario','Doc: Rec/Fac','Fecha Referencia','Referencia','Banco','Cuenta','Descripción','Monto Forma Pago','Monto Concepto','% Desc','% Mora','Concepto','Mes','Estudiante CI','Estudiante Nombre','Estudiante Apellido','Representante CI','Representante Nombre','Representante Apellido','Periodo','Carrera','Posición','Grado/Año','Sección'],394,125);
	   	   	rep.setTotalRowTable(37);
	   	   	rep.setHeightRow(20);
	   	   	rep.setSizeColumnArray([80,70,120,80,100,60,120,150,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100]);
	   	   	rep.setAlignData(['center','left','left','center','left','left','left','left','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right']);
	   	   	rep.addJsonData('TablaRepoAluPorSeccion','getCierreCaja',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]);
	   	   	//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
	   	   	rep.setFontProperties(rep.getRGBAObj(255,255,255,1),10,'helvetica','bold');
	   	   	rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
	   	   	//********************************************* FIN GENERACION DEL REPORTE ***********************************************
	   	   	rep.render();
   	   		rep.renderToExcel();
   	   	}
		else {
	   	   	///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
	   	   	rep = new Report('portrait');
	   	   	rep.setPositionIcon(756,30);
	   	   	rep.setNoRepeatHead();
	   	   	//rep.setHeadImage(imgEduca.banner,true);
	   	   	///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
	   	   	rep.setFontProperties(rep.getRGBAObj(0,0,0,1),10,'helvetica','bold');
	   	   	rep.addBar(0,0,1128,80,rep.getRGBAObj(187,196,238,0.8),false);
	   	   	rep.addText(20, 30, 'ORGANIZACION: '+pcbOrgCierreCaja.getOption(),false);
	   	   	if(pcbCuentaBancaria.getOption().trim()!='')
	   	    rep.addText(20, 50, 'CUENTA BANCARIA: '+ pcbCuentaBancaria.getOption(),false);
	   	   	rep.addText(280, 65, 'Desde: '+calendarRepoCieDiaCajDesde.getFechaFromEdit(),false);
	   	   	rep.addText(430, 65, 'Hasta: '+calendarRepoCieDiaCajHasta.getFechaFromEdit(),false);
	   	   	///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
	   	   	rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),11,'courier','bold');
	   	   	rep.addBar(0,84,1128,120,rep.getRGBAObj(210,200,200,0.9),false);
	   	   	rep.addText(320, 110, 'CIERRE DE CAJA DIARIO',false);
	   	   	//************************ TABLE ***************************
	   	   	rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)','rgba(180,180,180,0.4)','rgba(180,180,180,0.4)','rgba(180,180,180,0.4)','rgba(180,180,180,0.4)','rgba(180,180,180,0.4)', 2);
	   	   	rep.setTableCellProperties(1, 'helvetica', 9);
	   	   	rep.addTable('TablaRepoAluPorSeccion',['Fecha','Usuario','Doc: Rec/Fac','Referencia','Banco','Cuenta','Descripción','Monto'],394,125);
	   	   	rep.setTotalRowTable(37);
	   	   	rep.setHeightRow(20);
	   	   	rep.setSizeColumnArray([80,70,120,100,60,120,150,100]);
	   	   	rep.setAlignData(['center','left','left','left','left','left','left','right']);
	   	   	rep.addJsonData('TablaRepoAluPorSeccion','getCierreCaja',[0,1,2,3,4,5,6,7]);
	   	   	//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
	   	   	rep.setFontProperties(rep.getRGBAObj(255,255,255,1),10,'helvetica','bold');
	   	   	rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
	   	   	//********************************************* FIN GENERACION DEL REPORTE ***********************************************
	   	   	rep.render();
			Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
	    	Reporte.create();
	    	dialogsReporte.showModal();
		}
	},
	
	coreUpdate: function(tipoRpt) {
		var rlx = xmlStructs.createRecordList("rlx");   
   	
		if (pcbOrgCierreCaja.valid(dialogsRepoCieDiaCaja))
			if (calendarRepoCieDiaCajDesde.valid(dialogsRepoCieDiaCaja))
				if (calendarRepoCieDiaCajHasta.valid(dialogsRepoCieDiaCaja)) {
					rlx.add('reg', calendarRepoCieDiaCajDesde);
					rlx.add('reg', calendarRepoCieDiaCajHasta);
					rlx.add('reg', pcbOrgCierreCaja);
					rlx.add('reg', pcbCuentaBancaria);
					rlx.add('reg', pcbCuentaBancaria);
					rlx.add('reg', calendarRepoCieDiaCajDesde);
					rlx.add('reg', calendarRepoCieDiaCajHasta);
					rlx.add('reg', pcbOrgCierreCaja);
					rlx.add('reg', pcbCuentaBancaria);
					rlx.add('reg', pcbCuentaBancaria);
					rlx.add('reg', calendarRepoCieDiaCajDesde);
					rlx.add('reg', calendarRepoCieDiaCajHasta);
					rlx.add('reg', pcbOrgCierreCaja);
					rlx.add('reg', pcbCuentaBancaria);
					rlx.add('reg', pcbCuentaBancaria);
					rlx.addStr('reg', tipoRpt);
					rlx.add('reg', pcbRepoCieDiaCajConcepto);
					rlx.add('reg', pcbRepoCieDiaCajConcepto);
					rlx.add('reg', pcbRepoCieDiaCajFormaPago);
					rlx.add('reg', pcbRepoCieDiaCajFormaPago);
					Tool.cnnSrv('ReportObject', 'getCierreCaja', this.windowName + '.reporte("'+ tipoRpt +'")', rlx);
				}
	}
};