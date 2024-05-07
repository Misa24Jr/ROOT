var dialogsRepoArqCaja = new Object();
var pcbRepoArqCajOrg = new Object();
var editsRepoArqCajUsuCajero = new Object();
var calendarRepoArqCajDesde = new Object();
var calendarRepoArqCajHasta = new Object();
var editsRepoArqCajCedula = new Object();
var editsRepoArqCajNombre = new Object();
var editsRepoArqCajApellido = new Object();
var imgButtonsRepoArqCajLimpiar = new Object();
var imgButtonsRepoArqCajReporte = new Object();
var imgButtonsRepoArqCajSalir = new Object();
var mwRepoArqCaja = new Object();// minWindow

var RepoArqCaja = {
    windowName : 'RepoArqCaja',
    isCreate: false,
    
    show: function() {
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        
        if (dialogsRepoArqCaja.isByClean())
			this.limpiar();			
		dialogsRepoArqCaja.show();
	},
	
    hide: function() {
        dialogsRepoArqCaja.hide();
    },
    
    createMWs: function() {
    	mwRepoArqCaja = desktop.addMinWindow('R.A.Caja', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoArqCaja.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsRepoArqCaja_Init : function() {
        dialogsRepoArqCaja.setMinimizeXY(0,0);
        dialogsRepoArqCaja.setCenterScreen();
        dialogsRepoArqCaja.addSpace(0,0,20);
        dialogsRepoArqCaja.addLn(1,1,1);
		dialogsRepoArqCaja.setHeightCell(1,1,13);
		dialogsRepoArqCaja.addObjToDialog(pcbRepoArqCajOrg,2,1,24);
		dialogsRepoArqCaja.adjAllMarginObj(2,1,10);
		dialogsRepoArqCaja.addObjToDialog(calendarRepoArqCajDesde.getEditCalendar(),3,1,24);
    	dialogsRepoArqCaja.addObjToDialog(calendarRepoArqCajHasta.getEditCalendar(),3,1,24);
    	dialogsRepoArqCaja.addObjToDialog(editsRepoArqCajUsuCajero,3,1,24);
    	dialogsRepoArqCaja.adjAllMarginObj(3,1,10);
		dialogsRepoArqCaja.addObjToDialog(editsRepoArqCajCedula,4,1,24);
		dialogsRepoArqCaja.addObjToDialog(editsRepoArqCajNombre,4,1,24);
		dialogsRepoArqCaja.addObjToDialog(editsRepoArqCajApellido,4,1,24);
		dialogsRepoArqCaja.adjAllMarginObj(4,1,10);
        dialogsRepoArqCaja.addLn(5,1,1);
		dialogsRepoArqCaja.setHeightCell(5,1,8);
		dialogsRepoArqCaja.addObjToDialog(imgButtonsRepoArqCajLimpiar,6,1);
		dialogsRepoArqCaja.addObjToDialog(imgButtonsRepoArqCajReporte,6,1);
        dialogsRepoArqCaja.addObjToDialog(imgButtonsRepoArqCajSalir,6,1);
        dialogsRepoArqCaja.adjAllMarginObj(6,1,30);
        dialogsRepoArqCaja.leftMarginObj(6,1,0,228); 
    },
  
    create : function() {
    	dialogsRepoArqCaja = dialogs.create('dialogsRepoArqCaja',0,0,837,126,'ARQUEO DE CAJA');
    	dialogsRepoArqCaja.setAdjY(70);
    	pcbRepoArqCajOrg = powerComboBox.create('pcbRepoArqCajOrg','pcbRepoArqCajOrg','Organización (+):',1,122);
    	pcbRepoArqCajOrg.enableReadOnlyEditor();
    	pcbRepoArqCajOrg.addEmptyOption();
    	pcbRepoArqCajOrg.setValidEmpty();
    	calendarRepoArqCajDesde = calendars.create('calendarRepoArqCajDesde');      
    	calendarRepoArqCajDesde.setCaption('Fecha Desde (+):',1,122);
      	calendarRepoArqCajDesde.setValidEmpty();
		calendarRepoArqCajDesde.setWidthEditCalendar(127);
    	calendarRepoArqCajDesde.sendToFrom(100);
      	calendarRepoArqCajHasta = calendars.create('calendarRepoArqCajHasta');      
    	calendarRepoArqCajHasta.setCaption('Fecha Hasta (+):',1,97);
      	calendarRepoArqCajHasta.setValidEmpty();
		calendarRepoArqCajHasta.setWidthEditCalendar(127);
    	calendarRepoArqCajHasta.sendToFrom(100);
    	editsRepoArqCajUsuCajero = edits.create('editsRepoArqCajUsuCajero','editsRepoArqCajUsuCajero','Usuario Cajero (*):',1,109,'normal');
    	editsRepoArqCajUsuCajero.setValidEmpty();
      	editsRepoArqCajUsuCajero.setFieldFind(true);
		editsRepoArqCajUsuCajero.setSizeEdit(149);
    	editsRepoArqCajCedula = edits.create('editsRepoArqCajCedula','editsRepoArqCajCedula','C.i. (*):',1,122,'normal');
    	editsRepoArqCajCedula.setValidInteger();
      	editsRepoArqCajCedula.setFieldFind(true);
		editsRepoArqCajCedula.setSizeEdit(149);
      	editsRepoArqCajNombre = edits.create('editsRepoArqCajNombre','editsRepoArqCajNombre','Nombre (*):',1,97,'normal');
      	editsRepoArqCajNombre.setValidEmpty();
      	editsRepoArqCajNombre.setFieldFind(true);
      	editsRepoArqCajNombre.setSizeEdit(149); 
      	editsRepoArqCajApellido = edits.create('editsRepoArqCajApellido','editsRepoArqCajApellido','Apellido (*):',1,109,'normal');
      	editsRepoArqCajApellido.setValidEmpty();
      	editsRepoArqCajApellido.setFieldFind(true);
      	editsRepoArqCajApellido.setSizeEdit(149);
      	imgButtonsRepoArqCajLimpiar = imgButtons.create('imgButtonsRepoArqCajLimpiar','Limpiar','limpiar.png');
      	imgButtonsRepoArqCajReporte = imgButtons.create('imgButtonsRepoArqCajReporte','Reporte','print.png');
      	imgButtonsRepoArqCajSalir = imgButtons.create('imgButtonsRepoArqCajSalir','Salir','salir.png');
      	imgButtonsRepoArqCajLimpiar.setDimension(90,22);
      	imgButtonsRepoArqCajReporte.setDimension(90,22);
      	imgButtonsRepoArqCajSalir.setDimension(90,22);
	},

	init : function() {
		this.create();
		this.setEvents(); 
		this.dialogsRepoArqCaja_Init();
		this.createMWs();
	},
	
	limpiarFind : function(ix) {
		editsRepoArqCajCedula.hideId = -1;

  		switch (ix) {
		case 1: 
			editsRepoArqCajNombre.setValue("");
			editsRepoArqCajApellido.setValue("");  		
			break;
		case 2: 
			editsRepoArqCajCedula.setValue("");
			editsRepoArqCajApellido.setValue("");  		
			break;
		default:
			editsRepoArqCajCedula.setValue("");
		    editsRepoArqCajNombre.setValue("");
			break;
		} 
  	},

	buscar: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsRepoArqCajCedula.getValue() != '' && editsRepoArqCajNombre.getValue() != '' && editsRepoArqCajApellido.getValue() != '') {
			rlx.add('reg', editsRepoArqCajCedula);
			rlx.addStr('reg', '-1',true);
			rlx.addStr('reg', '-1',true);
			rlx.addStr('reg', '-1',true);
			rlx.addStr('reg', '-1',true);
			rlx.addStr('reg', '-1',true);
			rlx.addStr('reg', '-1',true);
			Tool.cnnSrv('SecurityObject', 'getUsuario', this.windowName + '.loadDataUsuario()', rlx); 
			//this.coreUpdate();
		}
		else {
			if (editsRepoArqCajCedula.getValue() != '' || editsRepoArqCajNombre.getValue() != '' || editsRepoArqCajApellido.getValue() != '') {
				ResuBusqueda.setObjectExtFnc(editsRepoArqCajCedula, editsRepoArqCajNombre, editsRepoArqCajApellido, 'RepoArqCaja.buscar()');
				Tool.getGridData('MantObject', 'getMantPersTodas', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsRepoArqCajCedula, editsRepoArqCajCedula, editsRepoArqCajNombre, editsRepoArqCajNombre, editsRepoArqCajApellido, editsRepoArqCajApellido);
			}
			else 
				Alert.show('Debe ingresar al menos: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
	},
	
	loadDataUsuario: function() {
		editsRepoArqCajUsuCajero.setValue(json('getUsuario').data[3][0]);
	},
	
	limpiar : function() {
		editsRepoArqCajCedula.hideId = -1;
		editsRepoArqCajCedula.setValue(""); 
  		editsRepoArqCajNombre.setValue(""); 
  		editsRepoArqCajApellido.setValue(""); 
  		editsRepoArqCajUsuCajero.setValue(""); 
  		calendarRepoArqCajDesde.clear();
  		calendarRepoArqCajHasta.clear();
  		dialogsRepoArqCaja.setMsg("");
	    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoArqCaja, pcbRepoArqCajOrg, 0, 1, json('getData'));
		pcbRepoArqCajOrg.setSelectedIndex(1);
	},
  	
	setEvents: function() {
		editsRepoArqCajCedula.onEnter(this.windowName + ".buscar()");
  		editsRepoArqCajCedula.onChange(this.windowName + ".limpiarFind(1)");
  		editsRepoArqCajNombre.onEnter(this.windowName + ".buscar()");
  		editsRepoArqCajNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsRepoArqCajApellido.onEnter(this.windowName + ".buscar()");
  		editsRepoArqCajApellido.onChange(this.windowName + ".limpiarFind(3)");
  		imgButtonsRepoArqCajLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsRepoArqCajReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsRepoArqCajSalir.onClick('dialogsRepoArqCaja.close()');
    },
	
	reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
   	   	rep.setPositionIcon(756,4);
   	   	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,0,1128,35,rep.getRGBAObj(210,200,200,0.9),false);
		rep.addText(324, 23,'ARQUEO DE CAJA',false);
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),9,'helvetica','normal');
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,38,1128,79,rep.getRGBAObj(187,196,238,0.8),false);
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),9,'helvetica','normal');
		rep.addText(20, 65, 'ORGANIZACION: '+pcbRepoArqCajOrg.getOption(),false);
        rep.addText(300, 65,'FECHA DESDE: '+calendarRepoArqCajDesde.getText(),false);
        rep.addText(520, 65,'FECHA HASTA: '+calendarRepoArqCajHasta.getText(),false);
        //************************ TABLE ***************************
        rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 9, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 10);		
		rep.addTable('tablaRepoArqCaja',['Usuario','Cantidad','Forma de Pago','Monto Ingresado'],397,83);
		rep.setTotalRowTable(45);
		rep.setHeightRow(20);
        rep.setSizeColumnArray([158,100,420,120]);
        rep.setAlignData(['left','right','left','right']); 
        rep.addJsonData('tablaRepoArqCaja','getArqueoCaja',[0,1,2,3]);
		////////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	coreUpdate: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbRepoArqCajOrg.valid(dialogsRepoArqCaja)) 
			if (calendarRepoArqCajDesde.valid(dialogsRepoArqCaja))
				if (calendarRepoArqCajHasta.valid(dialogsRepoArqCaja)) {
					rlx.add('reg', pcbRepoArqCajOrg);
					rlx.add('reg', calendarRepoArqCajDesde);
					rlx.add('reg', calendarRepoArqCajHasta);
					rlx.add('reg', editsRepoArqCajUsuCajero);
					rlx.add('reg', editsRepoArqCajUsuCajero);
					Tool.cnnSrv('ReportObject', 'getArqueoCaja', this.windowName + '.reporte()', rlx); 
				}
	}
};