var dialogsRepoResForPago = new Object();
var pcbRepoResForOrg = new Object();
var pcbRepoResForBancaria = new Object();
var pcbRepoResForPago = new Object();
var calendarRepoResForPagDesde = new Object();
var calendarRepoResForPagHasta = new Object();
var imgButtonsRepoResForPagReporte = new Object();
var imgButtonsRepoResForPagSalir = new Object();

var RepoResForPago = {
    windowName: 'RepoResForPago',
    isCreate: false,
	
    show: function(){
        if (!this.isCreate) {   
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoResForPago.isByClean()) 
          this.limpiar();
        dialogsRepoResForPago.show();
    },
            
    hide: function(){
    	dialogsRepoResForPago.hide();
    },
        
    createMWs: function(){
       mwRepoResForPago = desktop.addMinWindow('C.C.Diario.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
       dialogsRepoResForPago.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsRepoResForPago_init: function(){
        dialogsRepoResForPago.setMinimizeXY(0, 0);
        dialogsRepoResForPago.setCenterScreen();
        dialogsRepoResForPago.addSpace(0, 0, 20);
        dialogsRepoResForPago.addLn(1, 1, 1);
		dialogsRepoResForPago.setHeightCell(1,1,10);
        dialogsRepoResForPago.addObject(pcbRepoResForOrg, 20, 32);
        dialogsRepoResForPago.addObject(pcbRepoResForBancaria, 270, 32);
        dialogsRepoResForPago.addObject(pcbRepoResForPago, 538, 32);
        dialogsRepoResForPago.addObject(calendarRepoResForPagDesde.getEditCalendar(), 20, 56);
    	dialogsRepoResForPago.addObject(calendarRepoResForPagHasta.getEditCalendar(), 270, 56);
        dialogsRepoResForPago.addObject(imgButtonsRepoResForPagReporte, 292, 82);
        dialogsRepoResForPago.addObject(imgButtonsRepoResForPagSalir, 420, 82);
    },
    
    create: function(){
    	dialogsRepoResForPago = dialogs.create('dialogsRepoResForPago', 0, 0, 805, 90, 'RESUMEN DE FORMA DE PAGO');
        dialogsRepoResForPago.setAdjY(60);
        pcbRepoResForOrg = powerComboBox.create('pcbRepoResForOrg','pcbRepoResForOrg','Organización (+):',1,101);
    	pcbRepoResForOrg.enableReadOnlyEditor();
    	pcbRepoResForOrg.addEmptyOption();
    	pcbRepoResForOrg.setValidEmpty();
    	pcbRepoResForOrg.enableOnChangeToEmptyOption();
        pcbRepoResForOrg.setWidthCombo(120);
        pcbRepoResForBancaria = powerComboBox.create('pcbRepoResForBancaria','pcbRepoResForBancaria','Cuenta Bancaria (*):',1,118);
        pcbRepoResForBancaria.setFieldFind(true);
        pcbRepoResForBancaria.enableReadOnlyEditor();
		pcbRepoResForBancaria.addEmptyOption();
    	pcbRepoResForBancaria.enableOnChangeToEmptyOption();
        pcbRepoResForBancaria.setWidthCombo(120);
    	pcbRepoResForPago = powerComboBox.create('pcbRepoResForPago','pcbRepoResForPago','Forma de Pago (*):',1,109);
        pcbRepoResForPago.setFieldFind(true);
        pcbRepoResForPago.enableReadOnlyEditor();
		pcbRepoResForPago.addEmptyOption();
    	pcbRepoResForPago.enableOnChangeToEmptyOption();
        pcbRepoResForPago.setWidthCombo(120);
    	calendarRepoResForPagDesde = calendars.create('calendarRepoResForPagDesde');      
    	calendarRepoResForPagDesde.setCaption('Fecha Desde (+):',1,101);
      	calendarRepoResForPagDesde.setValidEmpty();
		calendarRepoResForPagDesde.setWidthEditCalendar(119);
    	calendarRepoResForPagDesde.sendToFrom(100);
      	calendarRepoResForPagHasta = calendars.create('calendarRepoResForPagHasta');      
    	calendarRepoResForPagHasta.setCaption('Fecha Hasta (+):',1,118);
      	calendarRepoResForPagHasta.setValidEmpty();
		calendarRepoResForPagHasta.setWidthEditCalendar(119);
    	calendarRepoResForPagHasta.sendToFrom(100);
      	imgButtonsRepoResForPagReporte = imgButtons.create('imgButtonsRepoResForPagReporte','Reporte','print.png');
      	imgButtonsRepoResForPagSalir = imgButtons.create('imgButtonsRepoResForPagSalir','Salir','salir.png');    		
        imgButtonsRepoResForPagReporte.setDimension(90,22);
        imgButtonsRepoResForPagSalir.setDimension(90,22);
    },
    
    init: function(){
    	this.create();
        this.setEvents();
        this.dialogsRepoResForPago_init();
        this.createMWs();
    },
    	
    setEvents: function(){
    	imgButtonsRepoResForPagSalir.onClick('dialogsRepoResForPago.close()');
    	imgButtonsRepoResForPagReporte.onClick(this.windowName + '.coreUpdate()');
    },
   
    limpiar : function(tipo) {
    	Tool.rstPwrCmb(pcbRepoResForOrg);
  		dialogsRepoResForPago.setMsg("");
  		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
    },
   
    loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoResForPago, pcbRepoResForOrg, 0, 1, json('getData'));		
		Tool.getContext(dialogsRepoResForPago, pcbRepoResForOrg, null, null, "Tool.getPowerComboData('ReportObject', 'getCtaBancaria', dialogsRepoResForPago, pcbRepoResForBancaria, 0, 1)");
		//pcbRepoResForOrg.setSelectedIndex(1);
	},
	
	reporte : function() {
		var j = json('getCierreCaja');
		var tr = j.data[7].length;
		var total = 0;
		for(var i=0; i<j.data[0].length; i++)
			total+=parseFloat(j.data[7][i]);
		j.data[0][tr]=' ';        	
		j.data[1][tr]=' ';
   	   	j.data[2][tr]=' ';        	
   	   	j.data[3][tr]=' ';
   	   	j.data[4][tr]=' ';        	
   	   	j.data[5][tr]=' ';
   	   	j.data[6][tr]='                                   TOTAL :';
   	   	j.data[7][tr]= parseFloat(total).toFixed(2);
   	    
   	   	///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
   	   	rep = new Report('portrait');
   	   	rep.setPositionIcon(756,30);
   	   	rep.setNoRepeatHead();
   	   	//rep.setHeadImage(imgEduca.banner,true);
   	   	///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
   	   	rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','bold');
   	   	rep.addBar(0,0,1128,80,rep.getRGBAObj(187,196,238,0.8),false);
   	   	rep.addText(20, 30, 'ORGANIZACION: '+pcbRepoResForOrg.getOption(),false);
   	   	if(pcbRepoResForBancaria.getOption().trim()!='')
   	    rep.addText(20, 50, 'CUENTA BANCARIA: '+ pcbRepoResForBancaria.getOption(),false);
   	   	rep.addText(280, 65, 'Desde: '+calendarRepoResForPagDesde.getText(),false);
   	   	rep.addText(430, 65, 'Hasta: '+calendarRepoResForPagHasta.getText(),false);
   	   	///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
   	   	rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),15,'courier','bold');
   	   	rep.addBar(0,84,1128,120,rep.getRGBAObj(210,200,200,0.9),false);
   	   	rep.addText(250, 110, 'RESUMEN FORMA DE PAGO',false);
   	   	//************************ TABLE ***************************
   	   	rep.setFontProperties(rep.getRGBAObj(0,0,0,1),10,'helvetica','normal');
   	   	rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)','rgba(180,180,180,0.4)','rgba(180,180,180,0.4)','rgba(180,180,180,0.4)','rgba(180,180,180,0.4)','rgba(180,180,180,0.4)', 2);
   	   	rep.setTableCellProperties(1, 'helvetica', 10);
   	   	rep.addTable('TablaRepoAluPorSeccion',['Fecha','Nº Doc.','Nº Rec.','Referencia','Banco','Cuenta','-----------','Monto'],394,125);
   	   	rep.setTotalRowTable(41);
   	   	rep.setHeightRow(20);
   	   	rep.setSizeColumnArray([80,70,70,100,60,120,180,120]);
   	   	rep.setAlignData(['center','left','left','left','left','left','left','right']);
   	   	rep.addJsonData('TablaRepoAluPorSeccion','getCierreCaja',[0,1,2,3,4,5,6,7]);
   	   	//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
   	   	rep.setFontProperties(rep.getRGBAObj(255,255,255,1),12,'helvetica','bold');
   	   	rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
   	   	//********************************************* FIN GENERACION DEL REPORTE ***********************************************
   	   	rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	coreUpdate: function() {
		var rlx = xmlStructs.createRecordList("rlx");   
   	
		if (pcbRepoResForOrg.valid(dialogsRepoResForPago)) {
			rlx.add('reg', calendarRepoResForPagDesde);
			rlx.add('reg', calendarRepoResForPagHasta);
			rlx.add('reg', pcbRepoResForOrg);
			rlx.add('reg', pcbRepoResForBancaria);
			rlx.add('reg', pcbRepoResForBancaria);
			Tool.cnnSrv('ReportObject', 'getCierreCaja', this.windowName + '.reporte()', rlx);
		}
	}
};