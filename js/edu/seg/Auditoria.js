var dialogsAuditoria = new Object();
var editsAudiUsuario = new Object();
var editsAudiIdQuery = new Object();
var calendarsAudiFeDesdeReg = new Object();
var calendarsAudiFeHastaReg = new Object();
var memoAudiParametro = new Object();
var gridsAuditoria = new Object();
var imgButtonsAudiLimpiar = new Object();
var imgButtonsAudiReporte = new Object();
var imgButtonsAudiBuscar = new Object();
var imgButtonsAudiSalir = new Object();
var mwAuditoria = new Object();// minWindow

var Auditoria = {
	windowName : 'Auditoria',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsAuditoria.isByClean())
 			this.limpiar();			
		dialogsAuditoria.show();
	},
	
	hide : function() {
		dialogsAuditoria.hide();
	},
	
	createMWs : function() {
      mwAuditoria = desktop.addMinWindow('Auditoria', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
      dialogsAuditoria.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},

	create : function() {
		dialogsAuditoria = dialogs.create('dialogsAuditoria', 0, 0, 867, 574, 'AUDITORIA DEL SISTEMA');
		editsAudiUsuario = edits.create('editsAudiUsuario', 'editsAudiUsuario', 'Usuario (*):', 1,71, 'normal');
		editsAudiUsuario.setFieldFind(true);
		editsAudiUsuario.setSizeEdit(148);
		editsAudiUsuario.setMaxLength(15); 
		editsAudiIdQuery = edits.create('editsAudiIdQuery', 'editsAudiIdQuery', 'Transacción (*):', 1,98, 'normal');
		editsAudiIdQuery.setFieldFind(true);
		editsAudiIdQuery.setSizeEdit(148);
		calendarsAudiFeDesdeReg = calendars.create('calendarsAudiFeDesdeReg');
		calendarsAudiFeDesdeReg.setValidEmpty();
		calendarsAudiFeDesdeReg.setWidthEditCalendar(75);
		calendarsAudiFeDesdeReg.setCaption('F. Desde (*):',3,73);
		calendarsAudiFeDesdeReg.sendToFrom(100);
		calendarsAudiFeHastaReg = calendars.create('calendarsAudiFeHastaReg');
		calendarsAudiFeHastaReg.setValidEmpty();
		calendarsAudiFeHastaReg.setWidthEditCalendar(75);
		calendarsAudiFeHastaReg.setCaption('F. Hasta (*):', 3,71);
		calendarsAudiFeHastaReg.sendToFrom(100);
		calendarsAudiFeDesdeReg.setValidRange(calendarsAudiFeHastaReg, 720);
		memoAudiParametro = memo.create('memoAudiParametro','',1,0,1);
		memoAudiParametro.setValidEmpty();
		memoAudiParametro.setFieldFind(true);
		gridsAuditoria = grids.create('gridsAuditoria', 20, 4);
		imgButtonsAudiLimpiar = imgButtons.create('imgButtonsAudiLimpiar', 'Limpiar', 'limpiar.png');
		imgButtonsAudiReporte = imgButtons.create('imgButtonsAudiReporte', 'Reporte', 'print.png');
		imgButtonsAudiBuscar = imgButtons.create('imgButtonsAudiBuscar', 'Buscar', 'icono_buscar.png');
		imgButtonsAudiSalir = imgButtons.create('imgButtonsAudiSalir', 'Salir', 'salir.png');
		imgButtonsAudiLimpiar.setDimension(90, 22);
		imgButtonsAudiReporte.setDimension(90, 22);
		imgButtonsAudiBuscar.setDimension(90, 22);
		imgButtonsAudiSalir.setDimension(90, 22);
		imgButtonsAudiReporte.setDisable();
	},

	dialogsAuditoria_Init : function() {
		dialogsAuditoria.setMinimizeXY(0,0);
	    dialogsAuditoria.setCenterScreen();
	    dialogsAuditoria.addSpace(0,0,20);
	    dialogsAuditoria.addLn(1, 1, 1);
		dialogsAuditoria.setHeightCell(1,1,10);
		dialogsAuditoria.addObjToDialog(calendarsAudiFeDesdeReg.getEditCalendar(), 2, 1,24);
		dialogsAuditoria.addObjToDialog(calendarsAudiFeHastaReg.getEditCalendar(), 2, 1,24);
		dialogsAuditoria.addObjToDialog(editsAudiIdQuery,2,1);
		dialogsAuditoria.addObjToDialog(editsAudiUsuario,2,1);
		dialogsAuditoria.adjAllMarginObj(2, 1, 5);		
		dialogsAuditoria.addLn(3, 1, 1);
		dialogsAuditoria.setHeightCell(3,1,62);
		dialogsAuditoria.addObject(memoAudiParametro,20,65);
		memoAudiParametro.setDimension(821, 40);
		memoAudiParametro.setMaxLength(5000);
		dialogsAuditoria.addObjToDialog(gridsAuditoria.getObject(), 4, 1);
		dialogsAuditoria.addLn(6, 1, 1);
		dialogsAuditoria.setHeightCell(6,1,10);
		dialogsAuditoria.addObjToDialog(imgButtonsAudiLimpiar, 7, 1);
		dialogsAuditoria.addObjToDialog(imgButtonsAudiReporte, 7, 1);
		dialogsAuditoria.addObjToDialog(imgButtonsAudiBuscar, 7, 1);
		dialogsAuditoria.addObjToDialog(imgButtonsAudiSalir, 7, 1);
		dialogsAuditoria.adjAllMarginObj(7, 1, 20);
		dialogsAuditoria.leftMarginObj(7, 1, 0, 201);
	},

	gridsAuditoria_Init : function() {
		gridsAuditoria.setFixColRow(false, true);
		gridsAuditoria.addTitleVectorX(['Usuario', 'Transacción', 'Parametro', 'Fecha']);
		gridsAuditoria.showData();
		gridsAuditoria.setSizeCol(1, 120);
		gridsAuditoria.setSizeCol(2, 200);
		gridsAuditoria.setSizeCol(3, 361);
		gridsAuditoria.setSizeCol(4, 140);
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsAuditoria_Init();
		this.gridsAuditoria_Init();
		this.createMWs();
	},

	setEvents : function() {
		gridsAuditoria.onClickCells(this.windowName+".setData()");
		imgButtonsAudiLimpiar.onClick('Auditoria.limpiar()');
		imgButtonsAudiReporte.onClick('Auditoria.reporte()');
		imgButtonsAudiBuscar.onClick('Auditoria.buscar()');
		imgButtonsAudiSalir.onClick('dialogsAuditoria.close()');
		editsAudiUsuario.onEnter(this.windowName + ".buscar()");
		editsAudiIdQuery.onEnter(this.windowName + ".buscar()");
	},
	
	setData : function() {
		if (gridsAuditoria.getDataCell(1) != "") {
			memoAudiParametro.setValue(gridsAuditoria.getDataCell(3));
		}     			
	},
	  
	limpiar : function() {
		editsAudiUsuario.setValue("");
		editsAudiIdQuery.setValue("");
		calendarsAudiFeDesdeReg.clear();
		calendarsAudiFeHastaReg.clear();
		calendarsAudiFeDesdeReg.setFechaToEdit(Tool.getDate());
		calendarsAudiFeHastaReg.setFechaToEdit(Tool.getDate());
		memoAudiParametro.setText("");
		gridsAuditoria.clean();
		dialogsAuditoria.setMsg("");
		imgButtonsAudiReporte.setDisable();
	},
	
	getParameter : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		rlx.add('reg',editsAudiUsuario);
		rlx.add('reg',editsAudiIdQuery);
		rlx.add('reg',calendarsAudiFeDesdeReg);
		rlx.add('reg',calendarsAudiFeHastaReg);
		return rlx;
	},  

	buscar : function() {
		if (calendarsAudiFeDesdeReg.valid(dialogsAuditoria) && calendarsAudiFeHastaReg.valid(dialogsAuditoria)) { 
			imgButtonsAudiReporte.setDisable();
			gridsAuditoria.clean();
			Tool.getGridData('SecurityObject', 'getAuditoria', dialogsAuditoria, gridsAuditoria, new Function('imgButtonsAudiReporte.setEnable()'), editsAudiUsuario, editsAudiUsuario, editsAudiIdQuery, editsAudiIdQuery, calendarsAudiFeDesdeReg, calendarsAudiFeHastaReg, memoAudiParametro, memoAudiParametro);
		}
	},

  	reporte : function() {

        ///////////////////////////////////////ARREGLO DE DATA/////////////////////////////////////////////////////////////////////////////////////////
        var user = editsAudiUsuario.getText();
        var transaccion = editsAudiIdQuery.getText();
        var desde = calendarsAudiFeDesdeReg.getFechaFromEdit();
        var hasta = calendarsAudiFeHastaReg.getFechaFromEdit();
       ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	
		rep = new Report('landscape');
        rep.setPositionIcon(1090,0);
        //rep.setNoRepeatHead();
        //rep.setHeadImage(imgEduca.banner,true);
        ///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,0,1128,36,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addText(425, 23, 'REPORTE DE AUDITORIA',false);
        ///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,44,1128,76,rep.getRGBAObj(187,196,238,0.4),false);
        rep.addLine(0,40,1128,40,rep.getRGBAObj(210,210,210,1),1,false);
        rep.addLine(0,80,1128,80,rep.getRGBAObj(210,210,210,1),1,false); 
        rep.addText(20,  67, 'DESDE: '+desde,false);
        rep.addText(350, 67, 'HASTA: '+hasta,false);
        //************************ TABLE ***************************
        rep.setTableRowProperties(20, 180, 180, 180, 'bold helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'bold helvetica', 8);		
        rep.setTotalRowTable(33);
		rep.setHeightRow(19);
        rep.addTable('tablaAuditoria',['USUARIO','TRANSACCIÓN','PARAMETRO','FECHA'],564,95);
        rep.setSizeColumnArray([120,229,629,153]);
        rep.addJsonData('tablaAuditoria','getAuditoria');
        rep.setAlignData(['left','left','left','center']);
        rep.setTotalRowTable(35);
		rep.setHeightRow(19);
        ///////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),10,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
        rep.render();
        Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
        Reporte.create();
        dialogsReporte.showModal();
  	}
};
