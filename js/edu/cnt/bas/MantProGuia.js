var dialogsMantProGuia = new Object();
var editsMantProGuiCi = new Object();
var editsMantProGuiNombre = new Object();
var editsMantProGuiApellido = new Object();
var pcbMantProGuiOrg = new Object();
var pcbMantProGuiSuborg = new Object();
var pcbMantProGuiCarrera = new Object();
var pcbMantProGuiPeriodo = new Object();
var pcbMantProGuiPosicion = new Object();
var pcbMantProGuiSeccion = new Object();
var gridsMantProGuia = new Object();
var imgButtonsMantProGuiAgregar = new Object();
var imgButtonsMantProGuiModificar = new Object();
var imgButtonsMantProGuiEliminar = new Object();
var imgButtonsMantProGuiLimpiar = new Object();
var imgButtonsMantProGuiReporte = new Object();
var imgButtonsMantProGuiBuscar = new Object();
var imgButtonsMantProGuiSalir = new Object();
var mw_MantProGuia = new Object();//minWindow

var MantProGuia = {
    windowName: 'MantProGuia',
    isCreate: false,
	hideIdGuia: 0,
    
    show : function(){  
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
			this.limpiar('lmp');			
		dialogsMantProGuia.show();
	},
	
	hide : function(){
		dialogsMantProGuia.hide();
	},
	
    createMWs: function(){
        mwMantProGuia = desktop.addMinWindow('M.A.P.Guia', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantProGuia.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsMantProGuia_Init : function(){
        dialogsMantProGuia.setMinimizeXY(0,0);
        dialogsMantProGuia.setCenterScreen();
        dialogsMantProGuia.addSpace(0,0,20);
        dialogsMantProGuia.addLn(1,1,1);
		dialogsMantProGuia.setHeightCell(1,1,10);
		dialogsMantProGuia.addObjToDialog(pcbMantProGuiOrg,2,1,24);
        dialogsMantProGuia.addObjToDialog(pcbMantProGuiSuborg,2,1,24);
        dialogsMantProGuia.addObjToDialog(pcbMantProGuiCarrera,2,1,24);
        dialogsMantProGuia.adjAllMarginObj(2,1,5);
        dialogsMantProGuia.addObjToDialog(pcbMantProGuiPeriodo,3,1,24);
        dialogsMantProGuia.addObjToDialog(pcbMantProGuiPosicion,3,1,24);
        dialogsMantProGuia.addObjToDialog(pcbMantProGuiSeccion,3,1,24);
        dialogsMantProGuia.adjAllMarginObj(3,1,5);
        dialogsMantProGuia.addObjToDialog(editsMantProGuiCi,4,1,24);
        dialogsMantProGuia.addObjToDialog(editsMantProGuiNombre,4,1,24);
        dialogsMantProGuia.addObjToDialog(editsMantProGuiApellido,4,1,24);
        dialogsMantProGuia.adjAllMarginObj(4,1,5); 
        dialogsMantProGuia.addLn(5,1,1);
		dialogsMantProGuia.setHeightCell(5,1,9);
        dialogsMantProGuia.addObjToDialog(gridsMantProGuia.getObject(),6,1);
        dialogsMantProGuia.addLn(7,1,1);
		dialogsMantProGuia.setHeightCell(7,1,9);
		dialogsMantProGuia.addObjToDialog(imgButtonsMantProGuiAgregar,8,1);
		dialogsMantProGuia.addObjToDialog(imgButtonsMantProGuiModificar,8,1);
    	dialogsMantProGuia.addObjToDialog(imgButtonsMantProGuiEliminar,8,1);
    	dialogsMantProGuia.addObjToDialog(imgButtonsMantProGuiLimpiar,8,1);
        dialogsMantProGuia.addObjToDialog(imgButtonsMantProGuiReporte,8,1);
        dialogsMantProGuia.addObjToDialog(imgButtonsMantProGuiBuscar,8,1);
        dialogsMantProGuia.addObjToDialog(imgButtonsMantProGuiSalir,8,1);
        dialogsMantProGuia.adjAllMarginObj(8,1,16);
        dialogsMantProGuia.leftMarginObj(8,1,0,10);
    },

    gridsMantProGuia_Init: function(){
        gridsMantProGuia.setFixColRow(false, true);
        gridsMantProGuia.addTitleVectorX(['Cédula','Nombre','Apellido','Posición','Sección','idGuia','idPos','idSec','idPers']);
        gridsMantProGuia.showData();
        gridsMantProGuia.setSizeCol(1, 90);
        gridsMantProGuia.setSizeCol(2, 200);
        gridsMantProGuia.setSizeCol(3, 200);
        gridsMantProGuia.setSizeCol(4, 180);
        gridsMantProGuia.setSizeCol(5, 81);        
        gridsMantProGuia.setSizeCol(6, 0);
        gridsMantProGuia.setSizeCol(7, 0);
        gridsMantProGuia.setSizeCol(8, 0);
        gridsMantProGuia.setSizeCol(9, 0);
        gridsMantProGuia.hideCol(6);
        gridsMantProGuia.hideCol(7);
        gridsMantProGuia.hideCol(8);
        gridsMantProGuia.hideCol(9);
    }, 	

    create : function() {
    	dialogsMantProGuia = dialogs.create('dialogsMantProGuia',0,0,797,565,'ASIGNAR PROFESOR GUIA');
    	dialogsMantProGuia.setAdjY(65);
    	editsMantProGuiCi = edits.create('editsMantProGuiCi', 'editsMantProGuiCi', 'C.i. (*):', 1,103, 'normal');    
    	editsMantProGuiCi.setValidInteger();
    	editsMantProGuiCi.setFieldFind(true);
		editsMantProGuiCi.setSizeEdit(149);
		editsMantProGuiCi.setMaxLength(50); 
    	editsMantProGuiNombre = edits.create('editsMantProGuiNombre', 'editsMantProGuiNombre', 'Nombre: (*)', 1,123, 'normal');
    	editsMantProGuiNombre.setValidEmpty();
    	editsMantProGuiNombre.setFieldFind(true);
        editsMantProGuiNombre.setSizeEdit(149);
    	editsMantProGuiApellido = edits.create('editsMantProGuiApellido', 'editsMantProGuiApellido', 'Apellido: (*)', 1,71, 'normal');
    	editsMantProGuiApellido.setValidEmpty();
    	editsMantProGuiApellido.setFieldFind(true);
        editsMantProGuiApellido.setSizeEdit(149);
    	pcbMantProGuiOrg = powerComboBox.create('pcbMantProGuiOrg','pcbMantProGuiOrg','Organización (+):',1,103);
    	pcbMantProGuiOrg.enableReadOnlyEditor();
    	pcbMantProGuiOrg.addEmptyOption();
    	pcbMantProGuiOrg.setValidEmpty();
    	pcbMantProGuiSuborg = powerComboBox.create('pcbMantProGuiSuborg','pcbMantProGuiSuborg','Suborganización (^):',1,123);
    	pcbMantProGuiSuborg.enableReadOnlyEditor();
    	pcbMantProGuiSuborg.addEmptyOption();
    	pcbMantProGuiSuborg.setValidEmpty();
    	pcbMantProGuiCarrera = powerComboBox.create('pcbMantProGuiCarrera','pcbMantProGuiCarrera','Carrera (^):',1,71);
    	pcbMantProGuiCarrera.enableReadOnlyEditor();
    	pcbMantProGuiCarrera.addEmptyOption();
    	pcbMantProGuiCarrera.setValidEmpty();
    	pcbMantProGuiPeriodo = powerComboBox.create('pcbMantProGuiPeriodo','pcbMantProGuiPeriodo','Periodo (^):',1,103);
    	pcbMantProGuiPeriodo.enableReadOnlyEditor();
    	pcbMantProGuiPeriodo.addEmptyOption();
    	pcbMantProGuiPeriodo.setValidEmpty();
    	pcbMantProGuiPosicion = powerComboBox.create('pcbMantProGuiPosicion','pcbMantProGuiPosicion','Posición (*):',1,123);
    	pcbMantProGuiPosicion.enableReadOnlyEditor();
    	pcbMantProGuiPosicion.addEmptyOption();
    	pcbMantProGuiPosicion.setValidEmpty();
    	pcbMantProGuiPosicion.setFieldFind(true);
    	pcbMantProGuiSeccion = powerComboBox.create('pcbMantProGuiSeccion','pcbMantProGuiSeccion','Sección (*):',1,71);
    	pcbMantProGuiSeccion.enableReadOnlyEditor();
    	pcbMantProGuiSeccion.addEmptyOption();
    	pcbMantProGuiSeccion.setValidEmpty();
    	pcbMantProGuiSeccion.setFieldFind(true);
    	pcbMantProGuiSeccion.setDataType("string");
    	gridsMantProGuia = grids.create('gridsMantProGuia', 20, 9);
    	imgButtonsMantProGuiAgregar = imgButtons.create('imgButtonsMantProGuiAgregar','Agregar','ok.png');
    	imgButtonsMantProGuiModificar = imgButtons.create('imgButtonsMantProGuiModificar','Modificar','icono_modificar.png');
    	imgButtonsMantProGuiEliminar = imgButtons.create('imgButtonsMantProGuiEliminar','Eliminar','eliminar.jpg');
    	imgButtonsMantProGuiLimpiar = imgButtons.create('imgButtonsMantProGuiLimpiar','Limpiar','limpiar.png');
    	imgButtonsMantProGuiReporte = imgButtons.create('imgButtonsMantProGuiReporte','Reporte','print.png');
    	imgButtonsMantProGuiBuscar = imgButtons.create('imgButtonsMantProGuiBuscar','Buscar','icono_buscar.png');
    	imgButtonsMantProGuiSalir = imgButtons.create('imgButtonsMantProGuiSalir','Salir','salir.png');
    	imgButtonsMantProGuiAgregar.setDimension(90,22);
    	imgButtonsMantProGuiModificar.setDimension(90,22);
    	imgButtonsMantProGuiEliminar.setDimension(90,22);
    	imgButtonsMantProGuiLimpiar.setDimension(90,22);
    	imgButtonsMantProGuiReporte.setDimension(90,22);
    	imgButtonsMantProGuiBuscar.setDimension(90,22);
    	imgButtonsMantProGuiSalir.setDimension(90,22);
    },

    init : function(){
    	this.create();
    	this.setEvents();
    	this.gridsMantProGuia_Init();
    	this.dialogsMantProGuia_Init();
    	this.createMWs();
    },

    buscar : function() {
		if ((editsMantProGuiCi.getValue() != '' && editsMantProGuiNombre.getValue() != '' && editsMantProGuiApellido.getValue() != '') || (editsMantProGuiCi.getValue() == '' && editsMantProGuiNombre.getValue() == '' && editsMantProGuiApellido.getValue() == '')) {
			if (pcbMantProGuiOrg.valid(dialogsMantProGuia)) 
				if (pcbMantProGuiSuborg.valid(dialogsMantProGuia)) 
					if (pcbMantProGuiCarrera.valid(dialogsMantProGuia)) 
						if (pcbMantProGuiPeriodo.valid(dialogsMantProGuia)) 
							Tool.getGridData('MantObject', 'getMantProGuia', dialogsMantProGuia, gridsMantProGuia, 'imgButtonsMantProGuiReporte.setEnable()', pcbMantProGuiPeriodo, pcbMantProGuiCarrera.setModeReturnGetText(2), pcbMantProGuiPosicion, pcbMantProGuiPosicion, pcbMantProGuiSeccion, pcbMantProGuiSeccion, new MiniDataSet(editsMantProGuiCi.hideId, 'int', true), new MiniDataSet(editsMantProGuiCi.hideId, 'int', true));	    		
		}
		else {
			if (editsMantProGuiCi.getValue() != '' || editsMantProGuiNombre.getValue() != '' || editsMantProGuiApellido.getValue() != '') {
				ResuBusqueda.setObjectExtFnc(editsMantProGuiCi, editsMantProGuiNombre, editsMantProGuiApellido, 'MantProGuia.buscar()');
				Tool.getGridData('MantObject', 'getMantPersProf', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsMantProGuiCi, editsMantProGuiCi, editsMantProGuiNombre, editsMantProGuiNombre, editsMantProGuiApellido, editsMantProGuiApellido);
			}
		}
    },

    limpiarFind : function(ix) {
    	this.hideIdGuia = 0;
    	editsMantProGuiCi.hideId = -1;
    	gridsMantProGuia.clean();
        imgButtonsMantProGuiAgregar.setEnable();
		imgButtonsMantProGuiModificar.setDisable();
		imgButtonsMantProGuiEliminar.setDisable();
		imgButtonsMantProGuiReporte.setDisable();		
    	this.hideIdGuia = 0;
    	
  		switch (ix) {
		case 1: 
			editsMantProGuiNombre.setValue("");
			editsMantProGuiApellido.setValue("");  		
			break;
		case 2: 
			editsMantProGuiCi.setValue("");
			editsMantProGuiApellido.setValue("");  		
			break;
		default:
			editsMantProGuiCi.setValue("");
		    editsMantProGuiNombre.setValue("");
			break;
		} 
  	},
	
  	setData : function() {
        var rlx = xmlStructs.createRecordList("rlx");
  		
		if (gridsMantProGuia.getDataCell(1) != "") {
			pcbMantProGuiPosicion.findOption(gridsMantProGuia.getDataCell(7));
			editsMantProGuiCi.setValue(gridsMantProGuia.getDataCell(1));
			editsMantProGuiCi.hideId = gridsMantProGuia.getDataCell(9);
			editsMantProGuiNombre.setValue(gridsMantProGuia.getDataCell(2));
			editsMantProGuiApellido.setValue(gridsMantProGuia.getDataCell(3));
			this.hideIdGuia = gridsMantProGuia.getDataCell(6);
	        imgButtonsMantProGuiAgregar.setDisable();
			imgButtonsMantProGuiModificar.setEnable();
			imgButtonsMantProGuiEliminar.setEnable();
			rlx.add('reg', pcbMantProGuiCarrera);
			rlx.add('reg', pcbMantProGuiPeriodo);
			rlx.add('reg', pcbMantProGuiPosicion);
  		    Tool.cnnSrv("MantObject", "getMantProyAulaSeccion", this.windowName + ".loadSeccion()", rlx);
        }
	},

	loadSeccion: function() {
		Tool.loadPowerComboData(dialogsMantProGuia, pcbMantProGuiSeccion, 0, 1, json('getSeccionPosicion'));
		pcbMantProGuiSeccion.findOption(gridsMantProGuia.getDataCell(8));
	},
	
	setEvents: function() {
		pcbMantProGuiOrg.onChange(this.windowName + ".resetElements('org')");
		pcbMantProGuiSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbMantProGuiCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbMantProGuiPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbMantProGuiPosicion.onChange(this.windowName + ".resetElements('pos')");
        editsMantProGuiCi.onEnter(this.windowName + ".buscar()");
		editsMantProGuiNombre.onEnter(this.windowName + ".buscar()");
		editsMantProGuiApellido.onEnter(this.windowName + ".buscar()");
		editsMantProGuiCi.onChange(this.windowName + ".limpiarFind(1)");
		editsMantProGuiNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsMantProGuiApellido.onChange(this.windowName + ".limpiarFind(3)");
		gridsMantProGuia.onClickCells(this.windowName + ".setData()");
		imgButtonsMantProGuiAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantProGuiModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantProGuiEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
		imgButtonsMantProGuiLimpiar.onClick(this.windowName+".limpiar('')");
		imgButtonsMantProGuiReporte.onClick(this.windowName + ".reporte()");
    	imgButtonsMantProGuiBuscar.onClick(this.windowName + ".buscar()");
        imgButtonsMantProGuiSalir.onClick('dialogsMantProGuia.close()');
    },
    
    resetElements : function(element) {
    	gridsMantProGuia.clean();
    	imgButtonsMantProGuiReporte.setDisable();
    	
		if (element == 'org') {
			Tool.rstPwrCmb(pcbMantProGuiSuborg);
	  		Tool.rstPwrCmb(pcbMantProGuiCarrera);
	  		Tool.rstPwrCmb(pcbMantProGuiPeriodo);
			Tool.rstPwrCmb(pcbMantProGuiPosicion);
	  		Tool.rstPwrCmb(pcbMantProGuiSeccion);
	    	if (pcbMantProGuiOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsMantProGuia, pcbMantProGuiSuborg, 1, 2, pcbMantProGuiOrg);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbMantProGuiCarrera);
	  		Tool.rstPwrCmb(pcbMantProGuiPeriodo);
			Tool.rstPwrCmb(pcbMantProGuiPosicion);
	  		Tool.rstPwrCmb(pcbMantProGuiSeccion);
	    	if (pcbMantProGuiSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsMantProGuia, pcbMantProGuiCarrera, -1, 3, pcbMantProGuiSuborg);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbMantProGuiPeriodo);
			Tool.rstPwrCmb(pcbMantProGuiPosicion);
	  		Tool.rstPwrCmb(pcbMantProGuiSeccion);
	    	if (pcbMantProGuiCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsMantProGuia, pcbMantProGuiPeriodo, 0, 1, pcbMantProGuiCarrera.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
	  		Tool.rstPwrCmb(pcbMantProGuiSeccion);
	    	Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsMantProGuia, pcbMantProGuiPosicion, 0, 1, pcbMantProGuiCarrera.setModeReturnGetText(2));        		
    	} 
    	else if (element == 'pos') {
    		Tool.getPowerComboData('MantObject', 'getMantProyAulaSeccion', dialogsMantProGuia, pcbMantProGuiSeccion, 0, 1, pcbMantProGuiCarrera, pcbMantProGuiPeriodo, pcbMantProGuiPosicion);        		
    	}  
	},
	
    limpiar: function(tipo) {
    	this.hideIdGuia = 0;
    	editsMantProGuiCi.hideId = -1;
  		pcbMantProGuiOrg.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbMantProGuiSuborg);
  		Tool.rstPwrCmb(pcbMantProGuiCarrera);
  		Tool.rstPwrCmb(pcbMantProGuiPeriodo);
  		Tool.rstPwrCmb(pcbMantProGuiPosicion);
  		Tool.rstPwrCmb(pcbMantProGuiSeccion);
  		editsMantProGuiCi.setValue("");
  		editsMantProGuiNombre.setValue("");
  		editsMantProGuiApellido.setValue("");  		
  		dialogsMantProGuia.setMsg("");
  		gridsMantProGuia.clean();   
        imgButtonsMantProGuiAgregar.setEnable();
		imgButtonsMantProGuiModificar.setDisable();
		imgButtonsMantProGuiEliminar.setDisable();
		imgButtonsMantProGuiReporte.setDisable();
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},
	
	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsMantProGuia, pcbMantProGuiOrg, 0, 1, json('getData'));
		Tool.getContext(dialogsMantProGuia, pcbMantProGuiOrg, pcbMantProGuiSuborg, pcbMantProGuiCarrera, this.windowName + ".resetElements('carr')");
	},
    
	limpiarCoreUpdate: function() {
    	this.hideIdGuia = 0;
    	editsMantProGuiCi.hideId = -1;
  		pcbMantProGuiPosicion.setSelectedIndex(0);
  		pcbMantProGuiSeccion.setSelectedIndex(0);
  		editsMantProGuiCi.setValue("");
  		editsMantProGuiNombre.setValue("");
  		editsMantProGuiApellido.setValue("");  		
    	gridsMantProGuia.clean();    	
        imgButtonsMantProGuiAgregar.setEnable();
		imgButtonsMantProGuiModificar.setDisable();
		imgButtonsMantProGuiEliminar.setDisable();
		imgButtonsMantProGuiReporte.setDisable();		
  		dialogsMantProGuia.setMsg("");		
		Tool.getGridData('MantObject', 'getMantProGuia', dialogsMantProGuia, gridsMantProGuia, 'imgButtonsMantProGuiReporte.setEnable()', pcbMantProGuiPeriodo, pcbMantProGuiCarrera.setModeReturnGetText(2), pcbMantProGuiPosicion, pcbMantProGuiPosicion, pcbMantProGuiSeccion, pcbMantProGuiSeccion, new MiniDataSet(editsMantProGuiCi.hideId, 'int', true), new MiniDataSet(editsMantProGuiCi.hideId, 'int', true));	    		
	},
	
	reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
   	   	rep.setPositionIcon(756,4);
   	   	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,0,1128,35,rep.getRGBAObj(210,200,200,0.9),false);
		rep.addText(324, 23,'ASIGNAR PROFESOR GUIA',false);
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),9,'helvetica','normal');
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,38,1128,79,rep.getRGBAObj(187,196,238,0.8),false);
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),9,'helvetica','normal');
		rep.addText(20, 65, 'Organizacion: '+pcbMantProGuiOrg.getOption(),false);
        rep.addText(200, 65,'Suborganización: '+pcbMantProGuiSuborg.getOption(),false);
        rep.addText(500, 65,'Carrera: '+pcbMantProGuiCarrera.getOption(),false);
        //************************ TABLE ***************************
        rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 9, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);		
		rep.addTable('tablaRepoAsiProGuia',['Cedula','Nombre','Apellido','Posición','Sección'],397,83);
		rep.setTotalRowTable(49);
		rep.setHeightRow(18);
        rep.setSizeColumnArray([120,219,219,160,80]);
        rep.setAlignData(['center','left','left','left','center']); 
        rep.addJsonData('tablaRepoAsiProGuia','getMantProGuia',[0,1,2,3,4]);
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
        
		if (pcbMantProGuiOrg.valid(dialogsMantProGuia)) 
			if (pcbMantProGuiSuborg.valid(dialogsMantProGuia)) 
				if (pcbMantProGuiCarrera.valid(dialogsMantProGuia)) 
					if (pcbMantProGuiPeriodo.valid(dialogsMantProGuia))
						if (pcbMantProGuiPosicion.valid(dialogsMantProGuia))
							if (pcbMantProGuiSeccion.valid(dialogsMantProGuia)) 
								if (editsMantProGuiCi.valid(dialogsMantProGuia)) 
									if (editsMantProGuiNombre.valid(dialogsMantProGuia)) 
										if (editsMantProGuiApellido.valid(dialogsMantProGuia)) {
											if (methodName != 'eliminar') { 
												rlx.addInt('reg',editsMantProGuiCi.hideId);
												rlx.add('reg',pcbMantProGuiPeriodo);
												rlx.add('reg',pcbMantProGuiCarrera.setModeReturnGetText(2));
												rlx.add('reg',pcbMantProGuiPosicion);
												rlx.add('reg',pcbMantProGuiSeccion);
											}
											if (methodName != 'agregar')
												rlx.addInt('reg',this.hideIdGuia);
												Tool.cnnSrv("MantObject", methodName + this.windowName, this.windowName + ".limpiarCoreUpdate()", rlx);
										}
    }
};