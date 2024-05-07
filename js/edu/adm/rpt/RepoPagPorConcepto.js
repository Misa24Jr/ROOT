var dialogsRepoPagPorConcepto = new Object();
var pcbRepoPagPorConceptoOrg = new Object();
var calendarRepoPagPorConDesde = new Object();
var calendarRepoPagPorConHasta = new Object();
var pcbRepoPagPorConcepto = new Object(); 
var pcbRepoPagPorConceptoRubro = new Object(); 
var imgButtonsRepoPagPorConceptoReporte = new Object();
var imgButtonsRepoPagPorConceptoSalir = new Object();
var mwRepoPagPorConcepto = new Object();// minWindow

var RepoPagPorConcepto = {
    windowName : 'RepoPagPorConcepto',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        
        if (dialogsRepoPagPorConcepto.isByClean())
			this.limpiar();			
		dialogsRepoPagPorConcepto.show();
	},
	
    hide: function() {
        dialogsRepoPagPorConcepto.hide();
    },
    
    createMWs: function() {
    	mwRepoPagPorConcepto = desktop.addMinWindow('R.P.P.Concepto', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoPagPorConcepto.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsRepoPagPorConcepto_Init : function() {
        dialogsRepoPagPorConcepto.setMinimizeXY(0,0);
        dialogsRepoPagPorConcepto.setCenterScreen();
        dialogsRepoPagPorConcepto.addSpace(0,0,20);
        dialogsRepoPagPorConcepto.addLn(1,1,1);
		dialogsRepoPagPorConcepto.setHeightCell(1,1,13);
    	dialogsRepoPagPorConcepto.addObjToDialog(pcbRepoPagPorConceptoOrg,2,1,24);
		dialogsRepoPagPorConcepto.adjAllMarginObj(2,1,15);
		dialogsRepoPagPorConcepto.addObjToDialog(calendarRepoPagPorConDesde.getEditCalendar(),3,1,24);
		dialogsRepoPagPorConcepto.addObjToDialog(calendarRepoPagPorConHasta.getEditCalendar(),3,1,24);
		dialogsRepoPagPorConcepto.adjAllMarginObj(3,1,15);
		dialogsRepoPagPorConcepto.addObjToDialog(pcbRepoPagPorConcepto,4,1,24);
		dialogsRepoPagPorConcepto.addObjToDialog(pcbRepoPagPorConceptoRubro,5,1,24);
        dialogsRepoPagPorConcepto.addLn(6,1,1);
		dialogsRepoPagPorConcepto.setHeightCell(6,1,8);
		dialogsRepoPagPorConcepto.addObjToDialog(imgButtonsRepoPagPorConceptoReporte,7,1);
        dialogsRepoPagPorConcepto.addObjToDialog(imgButtonsRepoPagPorConceptoSalir,7,1);
        dialogsRepoPagPorConcepto.adjAllMarginObj(7,1,30);
        dialogsRepoPagPorConcepto.leftMarginObj(7,1,0,149);
    },
  
    create : function() {
    	dialogsRepoPagPorConcepto = dialogs.create('dialogsRepoPagPorConcepto',0,0,556,150,'PAGOS POR CONCEPTO');
    	dialogsRepoPagPorConcepto.setAdjY(80);
    	pcbRepoPagPorConceptoOrg = powerComboBox.create('pcbRepoPagPorConceptoOrg','pcbRepoPagPorConceptoOrg','Organización (+):',1,105);
    	pcbRepoPagPorConceptoOrg.enableReadOnlyEditor();
    	pcbRepoPagPorConceptoOrg.addEmptyOption();
    	pcbRepoPagPorConceptoOrg.setValidEmpty();
    	calendarRepoPagPorConDesde = calendars.create('calendarRepoPagPorConDesde');      
    	calendarRepoPagPorConDesde.setCaption('Fecha Desde (+):',1,105);
      	calendarRepoPagPorConDesde.setValidEmpty();
		calendarRepoPagPorConDesde.setWidthEditCalendar(127);
    	calendarRepoPagPorConDesde.sendToFrom(100);
      	calendarRepoPagPorConHasta = calendars.create('calendarRepoPagPorConHasta');      
    	calendarRepoPagPorConHasta.setCaption('Fecha Hasta (+):',1,105);
      	calendarRepoPagPorConHasta.setValidEmpty();
		calendarRepoPagPorConHasta.setWidthEditCalendar(127);
    	calendarRepoPagPorConHasta.sendToFrom(100);
    	pcbRepoPagPorConcepto = powerComboBox.create('pcbRepoPagPorConcepto', 'pcbRepoPagPorConcepto', 'Concepto (*):', 1,105);
		pcbRepoPagPorConcepto.enableReadOnlyEditor();
		pcbRepoPagPorConcepto.addEmptyOption();
		pcbRepoPagPorConcepto.setValidEmpty();
		pcbRepoPagPorConcepto.setTypeObjOpt('input', 'checkbox');
		pcbRepoPagPorConcepto.setFirstRowCheckMode(2);
		pcbRepoPagPorConcepto.setWidthCombo(398);
		pcbRepoPagPorConcepto.setFieldFind(true);
		pcbRepoPagPorConceptoRubro = powerComboBox.create('pcbRepoPagPorConceptoRubro', 'pcbRepoPagPorConceptoRubro', 'Rubro (*):', 1,105);
		pcbRepoPagPorConceptoRubro.enableReadOnlyEditor();
		pcbRepoPagPorConceptoRubro.addEmptyOption();
		pcbRepoPagPorConceptoRubro.setValidEmpty();
		pcbRepoPagPorConceptoRubro.setTypeObjOpt('input', 'checkbox');
		pcbRepoPagPorConceptoRubro.setFirstRowCheckMode(2);
		pcbRepoPagPorConceptoRubro.setWidthCombo(398);
		pcbRepoPagPorConceptoRubro.setFieldFind(true);
		imgButtonsRepoPagPorConceptoReporte = imgButtons.create('imgButtonsRepoPagPorConceptoReporte','Reporte','print.png');
      	imgButtonsRepoPagPorConceptoSalir = imgButtons.create('imgButtonsRepoPagPorConceptoSalir','Salir','salir.png');
      	imgButtonsRepoPagPorConceptoReporte.setDimension(90,22);
      	imgButtonsRepoPagPorConceptoSalir.setDimension(90,22);
	},

	init : function() {
		this.create();
		this.setEvents(); 
		this.dialogsRepoPagPorConcepto_Init();
		this.createMWs();
	},
	
	limpiar : function() {
		calendarRepoPagPorConDesde.clear();
  		calendarRepoPagPorConHasta.clear();
  		Tool.rstPwrCmb(pcbRepoPagPorConcepto);
  		Tool.rstPwrCmb(pcbRepoPagPorConceptoRubro);
  		dialogsRepoPagPorConcepto.setMsg("");
	    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoPagPorConcepto, pcbRepoPagPorConceptoOrg, 0, 1, json('getData'));
		pcbRepoPagPorConceptoOrg.setSelectedIndex(1);
	    Tool.cnnSrv("ReportObject", "getPagoConceptoInit", this.windowName + ".loadDataConceptoRubro()");
	},

	loadDataConceptoRubro: function() {
		Tool.loadPowerComboData(dialogsRepoPagPorConcepto, pcbRepoPagPorConcepto, 0, 1, json('getConceptos'));
		Tool.loadPowerComboData(dialogsRepoPagPorConcepto, pcbRepoPagPorConceptoRubro, 0, 1, json('getPagoConceptoRubro'));
	},
	
	setEvents: function() {
  		imgButtonsRepoPagPorConceptoReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsRepoPagPorConceptoSalir.onClick('dialogsRepoPagPorConcepto.close()');
    },
	
	reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
   	   	rep.setPositionIcon(756,4);
   	   	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,0,1128,35,rep.getRGBAObj(210,200,200,0.9),false);
		rep.addText(306, 23,'PAGOS POR CONCEPTO',false);
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),9,'helvetica','normal');
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,38,1128,79,rep.getRGBAObj(187,196,238,0.8),false);
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),9,'helvetica','normal');
		rep.addText(20, 65,'ORGANIZACION: '+pcbRepoPagPorConceptoOrg.getOption(),false);
		rep.addText(435, 65,'FECHA DESDE: '+calendarRepoPagPorConDesde.getText(),false);
        rep.addText(625, 65,'FECHA HASTA: '+calendarRepoPagPorConHasta.getText(),false);
        //************************ TABLE ***************************
        rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 9, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);		
		rep.addTable('tablaRepoSalFavAlumno',['Fecha Documento','Documento N°','Concepto','Monto'],397,83);
		rep.setTotalRowTable(35);
		rep.setHeightRow(18);
        rep.setSizeColumnArray([120,95,475,108]);
        rep.setAlignData(['center','right','left','right']); 
        rep.addJsonData('tablaRepoSalFavAlumno','getSumarioPagoConcepto',[0,1,2,3]);
		////////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	coreUpdate: function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");
         
		if (pcbRepoPagPorConceptoOrg.valid(dialogsRepoPagPorConcepto)) 
			if (calendarRepoPagPorConDesde.valid(dialogsRepoPagPorConcepto)) 
				if (calendarRepoPagPorConHasta.valid(dialogsRepoPagPorConcepto)) {
					rlx.add('reg', pcbRepoPagPorConceptoOrg);
					rlx.add('reg', calendarRepoPagPorConDesde);
					rlx.add('reg', calendarRepoPagPorConHasta);
					rlx.add('reg', pcbRepoPagPorConcepto);
					rlx.add('reg', pcbRepoPagPorConceptoRubro);
					Tool.cnnSrv('ReportObject', 'getSumarioPagoConcepto', this.windowName + '.reporte()', rlx); 
				}
	}
};