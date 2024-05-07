var dialogsAdmBiblio			= {};
var pcbAdmBiblioCat				= {};
var editsAdmBiblioAutor			= {};
var editsAdmBiblioTitulo		= {};
var editsAdmBiblioFuente		= {};
var gridsAdmBiblio				= {};
var imgButtonsAdmBiblioGuardar	= {};
var imgButtonsAdmBiblioEliminar	= {};
var imgButtonsAdmBiblioLimpiar	= {};
var imgButtonsAdmBiblioBuscar	= {};
var imgButtonsAdmBiblioSalir	= {};
var imgButtonsAdmBiblioCopiar	= {};
var imgButtonsAdmBiblioReporte	= {};
var imgButtonsAdmBiblioRepSum	= {};
var mwMantCartelera				= {};// minWindow

var MantCartelera = {
	windowName : 'MantCartelera',
	isCreate : false,
	idBiblio : -1,
	
	show : function() {
		if (!this.isCreate) {
		  this.init();
		  this.isCreate = true;
		}

		if (dialogsAdmBiblio.isByClean())
 			this.limpiar();			
		dialogsAdmBiblio.show();
	},
	
	hide : function() {
		dialogsAdmBiblio.hide();
	},
	
	createMWs : function() {
		mwMantCartelera = desktop.addMinWindow('Adm. Biblio.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsAdmBiblio .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsAdmBiblio_Init : function() {
        dialogsAdmBiblio.setMinimizeXY(0,0);
        dialogsAdmBiblio.setCenterScreen();		
		dialogsAdmBiblio.addObject(pcbAdmBiblioCat,20,32);
		dialogsAdmBiblio.addObject(editsAdmBiblioAutor,20,57);
		dialogsAdmBiblio.addObject(editsAdmBiblioTitulo, 20,82);		
		dialogsAdmBiblio.addObject(editsAdmBiblioFuente, 20,107);		
        dialogsAdmBiblio.addObject(imgButtonsAdmBiblioCopiar,670,104);
		dialogsAdmBiblio.addObject(gridsAdmBiblio.getObject(),20,132);
		dialogsAdmBiblio.addObject(imgButtonsAdmBiblioGuardar,105,500);	
		dialogsAdmBiblio.addObject(imgButtonsAdmBiblioEliminar,225,500);	
        dialogsAdmBiblio.addObject(imgButtonsAdmBiblioLimpiar,345,500);	
        dialogsAdmBiblio.addObject(imgButtonsAdmBiblioBuscar,465,500);		
        dialogsAdmBiblio.addObject(imgButtonsAdmBiblioSalir,585,500);
        dialogsAdmBiblio.addObject(imgButtonsAdmBiblioRepSum,285,535);
        dialogsAdmBiblio.addObject(imgButtonsAdmBiblioReporte,405,535);
	},
	
	gridsAdmBiblio_Init : function() {
        gridsAdmBiblio.setFixColRow(false,true);
        gridsAdmBiblio.addTitleVectorX(['Categoría','Autor/Editor','Título/Palabra Clave','Fuente','idCat','idBibio']);
        gridsAdmBiblio.showData();
        gridsAdmBiblio.setReadOnlyToAll();
        gridsAdmBiblio.setSizeCol(1,88);
		gridsAdmBiblio.setSizeCol(2,150);
		gridsAdmBiblio.setSizeCol(3,318);
		gridsAdmBiblio.setSizeCol(4,200);
		gridsAdmBiblio.setSizeCol(5,0);
		gridsAdmBiblio.setSizeCol(6,0);
        gridsAdmBiblio.hideCol(5);
        gridsAdmBiblio.hideCol(6);
	},
	
	create : function() {
		dialogsAdmBiblio = dialogs.create('dialogsAdmBiblio',0,0,801,543,'ADMINISTRADOR BIBLIOGRÁFICO');
		dialogsAdmBiblio.setAdjY(37);
		pcbAdmBiblioCat = powerComboBox.create('pcbAdmBiblioCat', 'pcbAdmBiblioCat', 'Categoría:', 1,130);
		pcbAdmBiblioCat.setWidthCombo(134);
		pcbAdmBiblioCat.enableReadOnlyEditor();
		pcbAdmBiblioCat.setFieldFind(true);
		pcbAdmBiblioCat.addEmptyOption();
		pcbAdmBiblioCat.setValidEmpty();			
		editsAdmBiblioAutor = edits.create('editsAdmBiblioAutor','editsAdmBiblioAutor','Autor/Editor:',1,130,'normal');
		editsAdmBiblioAutor.setValidEmpty();		
		editsAdmBiblioAutor.setSizeEdit(405);
		editsAdmBiblioAutor.setMaxLength(150);
		editsAdmBiblioAutor.setFieldFind(true);
		editsAdmBiblioTitulo = edits.create('editsAdmBiblioTitulo','editsAdmBiblioTitulo','Título/Palabra Clave:',1,130,'normal');
		editsAdmBiblioTitulo.setValidEmpty();		
		editsAdmBiblioTitulo.setSizeEdit(630);
		editsAdmBiblioTitulo.setMaxLength(300);
		editsAdmBiblioTitulo.setFieldFind(true);
		editsAdmBiblioFuente = edits.create('editsAdmBiblioFuente','editsAdmBiblioFuente','Fuente:',1,130,'normal');
		editsAdmBiblioFuente.setValidEmpty();		
		editsAdmBiblioFuente.setSizeEdit(519);
		editsAdmBiblioFuente.setMaxLength(300);
		gridsAdmBiblio = grids.create('gridsAdmBiblio',16,6);		
		imgButtonsAdmBiblioGuardar = imgButtons.create('imgButtonsAdmBiblioGuardar','Guardar.','ok.png');
		imgButtonsAdmBiblioEliminar = imgButtons.create('imgButtonsAdmBiblioEliminar','Eliminar','eliminar.jpg');			
		imgButtonsAdmBiblioLimpiar = imgButtons.create('imgButtonsAdmBiblioLimpiar','Limpiar','limpiar.png');			
		imgButtonsAdmBiblioBuscar = imgButtons.create('imgButtonsAdmBiblioBuscar','Buscar','icono_buscar.png');				
		imgButtonsAdmBiblioSalir = imgButtons.create('imgButtonsAdmBiblioSalir','Salir','salir.png');		
		imgButtonsAdmBiblioCopiar = imgButtons.create('imgButtonsAdmBiblioCopiar','Copiar Archivo','adjuntar.png');				
		imgButtonsAdmBiblioReporte = imgButtons.create('imgButtonsAdmBiblioReporte','Reporte','reportesolvenciapago_1.png');		
		imgButtonsAdmBiblioRepSum = imgButtons.create('imgButtonsAdmBiblioRepSum','Sumario','reportesolvenciapago_1.png');		
		imgButtonsAdmBiblioGuardar.setDimension(110,22);
		imgButtonsAdmBiblioEliminar.setDimension(110,22);
        imgButtonsAdmBiblioLimpiar.setDimension(110,22);
		imgButtonsAdmBiblioBuscar.setDimension(110,22);
        imgButtonsAdmBiblioSalir.setDimension(110,22);
        imgButtonsAdmBiblioCopiar.setDimension(110,22);
        imgButtonsAdmBiblioRepSum.setDimension(110,22);
        imgButtonsAdmBiblioReporte.setDimension(110,22);
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsAdmBiblio_Init();
		this.gridsAdmBiblio_Init();
		this.createMWs(); 
	},
	
  	setData : function() {
  		if (gridsAdmBiblio.getDataCell(1) != "") {
  			pcbAdmBiblioCat.findOption(gridsAdmBiblio.getDataCell(5));
  			editsAdmBiblioAutor.setValue(gridsAdmBiblio.getDataCell(2));
  			editsAdmBiblioTitulo.setValue(gridsAdmBiblio.getDataCell(3));
  			editsAdmBiblioFuente.setValue(gridsAdmBiblio.getDataCell(4));
			this.idBiblio = gridsAdmBiblio.getDataCell(6);
			imgButtonsAdmBiblioEliminar.setEnable();
			if (gridsAdmBiblio.getDataCell(4).substring(0, 4) != 'http')
				editsAdmBiblioFuente.readOnly(true);
			else
				editsAdmBiblioFuente.readOnly(false);
		}     			
	},
	
	setEvents : function() {
		editsAdmBiblioAutor.onEnter(this.windowName + ".buscar()");
		editsAdmBiblioTitulo.onEnter(this.windowName + ".buscar()");
		gridsAdmBiblio.onClickCells(this.windowName + ".setData()");
    	gridsAdmBiblio.onDblClickCells(this.windowName + ".getTrans()");
    	imgButtonsAdmBiblioGuardar.onClick(this.windowName + ".coreUpdate('agregar')");				
    	imgButtonsAdmBiblioEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");				
    	imgButtonsAdmBiblioLimpiar.onClick(this.windowName + ".limpiar()");				
    	imgButtonsAdmBiblioBuscar.onClick(this.windowName + ".buscar()");				
  		imgButtonsAdmBiblioSalir.onClick('dialogsAdmBiblio.close()');
    	imgButtonsAdmBiblioCopiar.onClick(this.windowName + ".copyDoc()");
    	imgButtonsAdmBiblioReporte.onClick(this.windowName + ".reporte()");				
    	imgButtonsAdmBiblioRepSum.onClick(this.windowName + ".coreUpdateSum()");				
  	},

	reporteSum : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
		//rep = new Report('landscape');
    	rep.setPositionIcon(686,105);
    	rep.setHeadImage(imgEduca.banner,false);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','bold');
    	rep.addText(340, 115, 'SUMARIO BIBLIOGRÁFICO',false);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','bold');
		//////////////////////////////////////////TABLA DE DATOS///////////////////////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
  		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 9);	
		rep.addTable('tablaBibliografiaSum',['CATEGORIA','CANTIDAD'],442,150);		
		rep.setTotalRowTable(38);
		rep.setHeightRow(18);
		rep.setSizeColumnArray([200,100]);       
		rep.setAlignData(['left','right']);
		rep.addJsonData('tablaBibliografiaSum','getBiblioSumario',[0,1]); 
        //////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();   	  	
	},

	coreUpdateSum : function() {
		Tool.cnnSrv('MsjObject', 'getBiblioSumario', this.windowName + ".reporteSum()");
	},
  	
	reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
		//rep = new Report('landscape');
    	rep.setPositionIcon(686,105);
    	rep.setHeadImage(imgEduca.banner,false);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','bold');
    	rep.addText(300, 115, 'LISTADO BIBLIOGRÁFICO',false);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','bold');
		//////////////////////////////////////////TABLA DE DATOS///////////////////////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
  		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 9);	
		rep.addTable('tablaBibliografia',['CATEGORIA','AUTOR','TITULO','FUENTE'],396,150);		
		rep.setTotalRowTable(38);
		rep.setHeightRow(18);
		rep.setSizeColumnArray([100,200,290,210]);       
		rep.setAlignData(['center','left','left','left']);
		rep.addJsonData('tablaBibliografia','getBibliografia',[0,1,2,3]); 
        //////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();   	  	
	},
	
	getTrans : function() {
		if (gridsAdmBiblio.getDataCell(1) != "") {
			if (gridsAdmBiblio.getDataCell(4).substring(0, 4) != 'http')
				window.open("biblio/" + gridsAdmBiblio.getDataCell(4),'_blank','left=10,top=80,Height=400,width=600,toolbar=no,location=no,status=no,menubar=no,resizable=yes,scrollbars=yes');
			else
				window.open(gridsAdmBiblio.getDataCell(4));
		}
	},
	
	copyDocEdit : function() {
		editsAdmBiblioFuente.readOnly(true);
		editsAdmBiblioFuente.setValue(AdjuArchivos.getFileName());
		this.coreUpdate('agregar');
	},
	
  	copyDoc : function() {
		if (pcbAdmBiblioCat.valid(dialogsAdmBiblio))
			if (editsAdmBiblioAutor.valid(dialogsAdmBiblio))
				if (editsAdmBiblioTitulo.valid(dialogsAdmBiblio))
					if (this.idBiblio == -1) {
						AdjuArchivos.sizeFile(10024 * 10024 * 20);//20Mb
						AdjuArchivos.filter('');
						AdjuArchivos.process(31);
						AdjuArchivos.setExtFnc(this.windowName + ".copyDocEdit()");
						AdjuArchivos.setCountBtn(1);
						AdjuArchivos.show();
					}
					else
						Alert.show('DEBE ELIMINAR LA BIOGRAFIA PARA CAMBIAR LA FUENTE.', 'SISTEMA', Alert.TYPE_INFO);
	},

  	buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");
 
		if (pcbAdmBiblioCat.getOption() != '' || editsAdmBiblioAutor.getValue() != '' || editsAdmBiblioTitulo.getValue() != '') {
			this.idBiblio = -1;
			imgButtonsAdmBiblioEliminar.setDisable();
			imgButtonsAdmBiblioReporte.setDisable();
			gridsAdmBiblio.clean();	
	    	Tool.getGridData('MsjObject', 'getBibliografia', dialogsAdmBiblio, gridsAdmBiblio, 'imgButtonsAdmBiblioReporte.setEnable()', pcbAdmBiblioCat, pcbAdmBiblioCat, editsAdmBiblioAutor, editsAdmBiblioAutor, editsAdmBiblioTitulo, editsAdmBiblioTitulo);
		}
		else {
			pcbAdmBiblioCat.valid(dialogsAdmBiblio);
			editsAdmBiblioAutor.valid(dialogsAdmBiblio);
			editsAdmBiblioTitulo.valid(dialogsAdmBiblio);
		}
   	},

  	limpiar : function() {
  		this.idBiblio = -1;
  		AdjuArchivos.clearFileName();
		pcbAdmBiblioCat.clear();
		editsAdmBiblioAutor.clear();
		editsAdmBiblioTitulo.clear();
		editsAdmBiblioFuente.clear();
		editsAdmBiblioFuente.readOnly(false);
		gridsAdmBiblio.clean();
  		dialogsAdmBiblio.setMsg("");
		imgButtonsAdmBiblioEliminar.setDisable();
		imgButtonsAdmBiblioReporte.setDisable();
		Tool.getPowerComboData('MsjObject', 'getBiblioCategoria', dialogsAdmBiblio, pcbAdmBiblioCat, 0, 1);
	},
	
	limpiarCoreUpdate : function() {
		this.idBiblio = -1;
		AdjuArchivos.clearFileName();
		editsAdmBiblioTitulo.clear();
		editsAdmBiblioFuente.clear();
		editsAdmBiblioFuente.readOnly(false);
		gridsAdmBiblio.clean();
  		dialogsAdmBiblio.setMsg("");
		imgButtonsAdmBiblioEliminar.setDisable();
		imgButtonsAdmBiblioReporte.setDisable();
		this.buscar();
	},
	
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbAdmBiblioCat.valid(dialogsAdmBiblio))
    		if (editsAdmBiblioAutor.valid(dialogsAdmBiblio))
        		if (editsAdmBiblioTitulo.valid(dialogsAdmBiblio))
            		if (editsAdmBiblioFuente.valid(dialogsAdmBiblio)) {
						if (methodName == 'eliminar') {
							rlx.add('reg', editsAdmBiblioFuente);
							rlx.addInt('reg', this.idBiblio);
						}
						else {
							if (this.idBiblio == -1) {
								rlx.add('reg', pcbAdmBiblioCat);
								rlx.add('reg', editsAdmBiblioAutor);
								rlx.add('reg', editsAdmBiblioTitulo);
								rlx.add('reg', editsAdmBiblioFuente);
							}
							else {
								methodName = 'modificar';
								rlx.add('reg', pcbAdmBiblioCat);
								rlx.add('reg', editsAdmBiblioAutor);
								rlx.add('reg', editsAdmBiblioTitulo);
								rlx.add('reg', editsAdmBiblioFuente);
								rlx.addInt('reg', this.idBiblio);
							}
						}
						Tool.cnnSrv('MsjObject', methodName + 'Bibliografia', this.windowName + ".limpiarCoreUpdate()", rlx);
					}
	}
};