var dialogsMantAsoMatPensum = new Object();
var editsMantAsoMatPenOrden = new Object();
var pcbMantAsoMatPenOrg = new Object();
var pcbMantAsoMatPenSuborg = new Object();
var pcbMantAsoMatPenCarrera = new Object();
var editsMantAsoMatPenPensum = new Object();
var pcbMantAsoMatPenSuborg1 = new Object();
var pcbMantAsoMatPenCarrera1 = new Object();
var pcbMantAsoMatPenMateria1 = new Object();
var pcbMantAsoMatPenPosicion = new Object();
var checboxMantAsoMatPenOcuImprimir = new Object();
var gridsMantAsoMatPensum = new Object();
var imgButtonsMantAsoMatPensumAgregar = new Object();
var imgButtonsMantAsoMatPensumModificar = new Object();
var imgButtonsMantAsoMatPensumEliminar = new Object();
var imgButtonsMantAsoMatPensumBuscar = new Object();
var imgButtonsMantAsoMatPensumLimpiar = new Object();
var imgButtonsMantAsoMatPensumReporte = new Object();
var imgButtonsMantAsoMatPensumSalir = new Object();
var mwMantAsoMatPensum = new Object();// minWindow
var editsMantAsoMatPenCalET = new Object();
var editsMantAsoMatPenColET = new Object();

var MantAsoMatPensum = {
	windowName : 'MantAsoMatPensum',
	isCreate : false,
	idPensum : 0,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantAsoMatPensum.isByClean())
 			this.limpiar();			
		dialogsMantAsoMatPensum.show();
	},
	
	hide : function() {
		dialogsMantAsoMatPensum.hide();
	},
	
	createMWs : function() {
        mwMantAsoMatPensum = desktop.addMinWindow('A. M. Pensum', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantAsoMatPensum.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},

	dialogsMantAsoMatPensum_Init : function() {
        dialogsMantAsoMatPensum.setMinimizeXY(0,0);
        dialogsMantAsoMatPensum.setCenterScreen();
        dialogsMantAsoMatPensum.addSpace(0,0,20);
        dialogsMantAsoMatPensum.addLn(1,1,1);
		dialogsMantAsoMatPensum.setHeightCell(1,1,10);  
		var c0 = container.create("c0");
		c0.setObject(pcbMantAsoMatPenOrg, 12, 0, 0, 15);
        dialogsMantAsoMatPensum.addObjToDialog(c0, 2, 1);
		var c1 = container.create("c1",'Seleccionar Pensum',1);
		c1.setDimension(792,55);
		c1.setMarginLeftBarTitle(345);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#7e7e7e');
		c1.setObject(pcbMantAsoMatPenSuborg, 12, 4, 7, 12,0);
		c1.setObject(pcbMantAsoMatPenCarrera, 12, 4, 7, 12,0);
		c1.setObject(editsMantAsoMatPenPensum, 12, 4, 7, 12,0);
		editsMantAsoMatPenPensum.setSizeEdit(149);
		//editsMantAsoMatPenPensum.readOnly(true);
		dialogsMantAsoMatPensum.addObjToDialog(c1, 3, 1);
		dialogsMantAsoMatPensum.addLn(4,1,1);
		var c2 = container.create("c2",'Seleccionar Materia a Incluir',1);
		c2.setDimension(792,55);
		c2.setMarginLeftBarTitle(315);
		c2.setPropertyMarco('groove',1,'#7e7e7e');
		c2.setFontTitle('verdana', 11, '#7e7e7e');
		c2.setObject(pcbMantAsoMatPenSuborg1, 12, 4, 7, 12,0);
		c2.setObject(pcbMantAsoMatPenCarrera1, 12, 4, 7, 12,0);
		c2.setObject(pcbMantAsoMatPenPosicion, 12, 4, 7, 12,0);
		dialogsMantAsoMatPensum.addObjToDialog(c2, 5, 1);
		var c3 = container.create("c3");
		c3.setObject(pcbMantAsoMatPenMateria1, 12, 14, 7, 0);
		pcbMantAsoMatPenMateria1.setWidthCombo(371);
		c3.setObject(editsMantAsoMatPenOrden, 12, 14, 7, 0);
		c3.setObject(checboxMantAsoMatPenOcuImprimir, 11, 14, 7, 0);
		editsMantAsoMatPenOrden.setSizeEdit(20);
        editsMantAsoMatPenOrden.setMaxLength(3);
		dialogsMantAsoMatPensum.addObjToDialog(c3, 6, 1);
		dialogsMantAsoMatPensum.addLn(8,1,1);
		dialogsMantAsoMatPensum.setHeightCell(8,1,40);  
		dialogsMantAsoMatPensum.addObjToDialog(gridsMantAsoMatPensum.getObject(),9,1);
        dialogsMantAsoMatPensum.addLn(10,1,1);
		dialogsMantAsoMatPensum.setHeightCell(10,1,12);  
        dialogsMantAsoMatPensum.addObjToDialog(imgButtonsMantAsoMatPensumAgregar,11,1);
        dialogsMantAsoMatPensum.addObjToDialog(imgButtonsMantAsoMatPensumModificar,11,1);
        dialogsMantAsoMatPensum.addObjToDialog(imgButtonsMantAsoMatPensumEliminar,11,1);        
        dialogsMantAsoMatPensum.addObjToDialog(imgButtonsMantAsoMatPensumLimpiar,11,1);
        dialogsMantAsoMatPensum.addObjToDialog(imgButtonsMantAsoMatPensumReporte,11,1);
	    dialogsMantAsoMatPensum.addObjToDialog(imgButtonsMantAsoMatPensumBuscar,11,1);	
        dialogsMantAsoMatPensum.addObjToDialog(imgButtonsMantAsoMatPensumSalir,11,1);
        imgButtonsMantAsoMatPensumAgregar.setDimension(90,22);
        imgButtonsMantAsoMatPensumModificar.setDimension(90,22);
        imgButtonsMantAsoMatPensumEliminar.setDimension(90,22);
        imgButtonsMantAsoMatPensumBuscar.setDimension(90,22);
        imgButtonsMantAsoMatPensumLimpiar.setDimension(90,22);
        imgButtonsMantAsoMatPensumReporte.setDimension(90,22);
        imgButtonsMantAsoMatPensumSalir.setDimension(90,22);
        dialogsMantAsoMatPensum.adjAllMarginObj(11,1,15);
        dialogsMantAsoMatPensum.leftMarginObj(11,1,0,30);
        dialogsMantAsoMatPensum.addObject(editsMantAsoMatPenCalET,570,240);
        dialogsMantAsoMatPensum.addObject(editsMantAsoMatPenColET,694,240);
        editsMantAsoMatPenCalET.setSizeEdit(20);
        editsMantAsoMatPenColET.setSizeEdit(20);
        editsMantAsoMatPenCalET.setMaxLength(3);
        editsMantAsoMatPenColET.setMaxLength(3);
	},
  
	gridsMantAsoMatPensum_Init : function() {
        gridsMantAsoMatPensum.setFixColRow(false,true);
        gridsMantAsoMatPensum.addTitleVectorX(['id_pensum','id_materia','id_posicion','id_carrera','Pensum','Materia','Posición','Orden','Orden Cal ET','Orden Col ET','suborg','hidePrint']);
        gridsMantAsoMatPensum.showData();
        gridsMantAsoMatPensum.setSizeCol(1,0);
        gridsMantAsoMatPensum.setSizeCol(2,0);
        gridsMantAsoMatPensum.setSizeCol(3,0);
        gridsMantAsoMatPensum.setSizeCol(4,0);
        gridsMantAsoMatPensum.setSizeCol(5,0);
        gridsMantAsoMatPensum.setSizeCol(6,398);
        gridsMantAsoMatPensum.setSizeCol(7,150);
        gridsMantAsoMatPensum.setSizeCol(8,80);
        gridsMantAsoMatPensum.setSizeCol(9,80);
        gridsMantAsoMatPensum.setSizeCol(10,80);
        gridsMantAsoMatPensum.setSizeCol(11,0);
        gridsMantAsoMatPensum.setSizeCol(12,0);
        gridsMantAsoMatPensum.hideCol(1);
        gridsMantAsoMatPensum.hideCol(2);
        gridsMantAsoMatPensum.hideCol(3);
        gridsMantAsoMatPensum.hideCol(4);
        gridsMantAsoMatPensum.hideCol(5);
        gridsMantAsoMatPensum.hideCol(11);
        gridsMantAsoMatPensum.hideCol(12);
	},

  	create : function() {
  		dialogsMantAsoMatPensum = dialogs.create('dialogsMantAsoMatPensum',0,0,834,649,'ASIGNAR MATERIA A PENSUM');
  		dialogsMantAsoMatPensum.setAdjY(20);
  		pcbMantAsoMatPenOrg = powerComboBox.create('pcbMantAsoMatPenOrg','pcbMantAsoMatPenOrg','Organización (+):',1,125);
  		pcbMantAsoMatPenOrg.setValidEmpty();
  		pcbMantAsoMatPenOrg.addEmptyOption();
  		pcbMantAsoMatPenOrg.enableReadOnlyEditor();
  		pcbMantAsoMatPenSuborg = powerComboBox.create('pcbMantAsoMatPenSuborg','pcbMantAsoMatPenSuborg','Suborganización (^):',1,125);
  		pcbMantAsoMatPenSuborg.setValidEmpty();
  		pcbMantAsoMatPenSuborg.addEmptyOption();
  		pcbMantAsoMatPenSuborg.enableReadOnlyEditor();
  		pcbMantAsoMatPenCarrera = powerComboBox.create('pcbMantAsoMatPenCarrera','pcbMantAsoMatPenCarrera','Carrera (^):',1,74);
  		pcbMantAsoMatPenCarrera.setValidEmpty();
  		pcbMantAsoMatPenCarrera.addEmptyOption();
  		pcbMantAsoMatPenCarrera.enableReadOnlyEditor();
  		editsMantAsoMatPenPensum = edits.create('editsMantAsoMatPenPensum','editsMantAsoMatPenPensum','Pensum :',1,78,'normal');
  		editsMantAsoMatPenPensum.setValidEmpty();
  		editsMantAsoMatPenPensum.readOnly(true);
  		pcbMantAsoMatPenSuborg1 = powerComboBox.create('pcbMantAsoMatPenSuborg1','pcbMantAsoMatPenSuborg1','Suborganización (^):',1,125);
  		pcbMantAsoMatPenSuborg1.setValidEmpty();
  		pcbMantAsoMatPenSuborg1.addEmptyOption();
  		pcbMantAsoMatPenSuborg1.enableReadOnlyEditor();
  		pcbMantAsoMatPenCarrera1 = powerComboBox.create('pcbMantAsoMatPenCarrera1','pcbMantAsoMatPenCarrera1','Carrera (^):',1,74);
  		pcbMantAsoMatPenCarrera1.setValidEmpty();
  		pcbMantAsoMatPenCarrera1.addEmptyOption();
  		pcbMantAsoMatPenCarrera1.enableReadOnlyEditor();
  		pcbMantAsoMatPenMateria1 = powerComboBox.create('pcbMantAsoMatPenMateria1','pcbMantAsoMatPenMateria1','Materia (^):',1,126);
  		pcbMantAsoMatPenMateria1.setValidEmpty();
  		pcbMantAsoMatPenMateria1.addEmptyOption();
  		pcbMantAsoMatPenMateria1.enableReadOnlyEditor();
  		pcbMantAsoMatPenMateria1.setDataType('string');
  		pcbMantAsoMatPenMateria1.setFieldFind(true);
  		editsMantAsoMatPenOrden = edits.create('editsMantAsoMatPenOrden','editsMantAsoMatPenOrden','Orden:',1,85,'normal');
  		editsMantAsoMatPenOrden.setValidInteger();
  		checboxMantAsoMatPenOcuImprimir = checkBox.create('checboxMantAsoMatPenOcuImprimir','Ocultar al Boletin',false);
  		pcbMantAsoMatPenPosicion = powerComboBox.create('pcbMantAsoMatPenPosicion','pcbMantAsoMatPenPosicion','Posición (*):',1,78);
  		pcbMantAsoMatPenPosicion.setValidEmpty();
  		pcbMantAsoMatPenPosicion.addEmptyOption();
  		pcbMantAsoMatPenPosicion.enableReadOnlyEditor();
  		pcbMantAsoMatPenPosicion.setFieldFind(true);
  		hint.create();
  		hint.setObjAttrib(attrib,ambiente); 
  		hint.addToHintWithRefreshPos(pcbMantAsoMatPenPosicion,dialogsMantAsoMatPensum,"Posición de la Materia en la Carrera",dialogsMantAsoMatPensum.x1+627,dialogsMantAsoMatPensum.y1+148,true);
  		gridsMantAsoMatPensum = grids.create('gridsMantAsoMatPensum',16,12);
  		imgButtonsMantAsoMatPensumAgregar = imgButtons.create('imgButtonsMantAsoMatPensumAgregar','Agregar','ok.png');
  		imgButtonsMantAsoMatPensumModificar = imgButtons.create('imgButtonsMantAsoMatPensumModificar','Modificar','icono_modificar.png');
  		imgButtonsMantAsoMatPensumModificar.setDisable();
  		imgButtonsMantAsoMatPensumEliminar = imgButtons.create('imgButtonsMantAsoMatPensumEliminar','Eliminar','eliminar.jpg');
  		imgButtonsMantAsoMatPensumEliminar.setDisable();
  		imgButtonsMantAsoMatPensumBuscar = imgButtons.create('imgButtonsMantAsoMatPensumBuscar','Buscar','icono_buscar.png');
  		imgButtonsMantAsoMatPensumLimpiar = imgButtons.create('imgButtonsMantAsoMatPensumLimpiar','Limpiar','limpiar.png');
  		imgButtonsMantAsoMatPensumReporte = imgButtons.create('imgButtonsMantAsoMatPensumReporte','Reporte','print.png');
  		imgButtonsMantAsoMatPensumSalir = imgButtons.create('imgButtonsMantAsoMatPensumSalir','Salir','salir.png');
  		editsMantAsoMatPenCalET = edits.create('editsMantAsoMatPenCalET','editsMantAsoMatPenCalET','Orden Cal ET:',1,85,'normal');
  		editsMantAsoMatPenCalET.setValidInteger();
  		editsMantAsoMatPenColET = edits.create('editsMantAsoMatPenColET','editsMantAsoMatPenColET','Orden Col ET:',1,85,'normal');
  		editsMantAsoMatPenColET.setValidInteger();
  	},

  	init : function() {
  		this.create();
  		this.setEvents();
  		this.dialogsMantAsoMatPensum_Init();  
  		this.gridsMantAsoMatPensum_Init();
  		this.createMWs();
  	},

	validarBuscar: function() {
  		if (pcbMantAsoMatPenOrg.valid(dialogsMantAsoMatPensum))
  			if (pcbMantAsoMatPenSuborg.valid(dialogsMantAsoMatPensum))
  				if (pcbMantAsoMatPenCarrera.valid(dialogsMantAsoMatPensum))
  					if (editsMantAsoMatPenPensum.valid(dialogsMantAsoMatPensum))
	            		return true;
  					else
  						return false;
	},
	
	buscar: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (this.validarBuscar()) {
			gridsMantAsoMatPensum.clean();
			rlx.add('reg', new MiniDataSet(this.idPensum, 'int', false));
			rlx.add('reg', pcbMantAsoMatPenMateria1);
			rlx.add('reg', pcbMantAsoMatPenMateria1);
			rlx.add('reg', pcbMantAsoMatPenPosicion);
			rlx.add('reg', pcbMantAsoMatPenPosicion);
			imgButtonsMantAsoMatPensumReporte.setEnable(); 
			Tool.cnnSrv('MantObject', 'getMantAsiMatAlPensum', this.windowName + '.loadGridPensum()', rlx);
		}
    },
    
    loadGridPensum: function() {
    	Tool.loadGridData(dialogsMantAsoMatPensum, gridsMantAsoMatPensum, false, json('getMantAsiMatAlPensum'));    
    	if (pcbMantAsoMatPenCarrera1.getOption() != ''){
    		Tool.getPowerComboData('MantObject', 'getMantMateriaSinEstado', dialogsMantAsoMatPensum, pcbMantAsoMatPenMateria1, 0, 1, pcbMantAsoMatPenCarrera1);    	
    	}
    },
   
	limpiarCoreUpdate : function() {
		pcbMantAsoMatPenMateria1.setSelectedIndex(0);
		editsMantAsoMatPenOrden.setValue("");
		editsMantAsoMatPenCalET.setValue("");
		editsMantAsoMatPenColET.setValue("0");
		gridsMantAsoMatPensum.clean();
		dialogsMantAsoMatPensum.setMsg("");
		imgButtonsMantAsoMatPensumAgregar.setEnable();
		imgButtonsMantAsoMatPensumModificar.setDisable();
		imgButtonsMantAsoMatPensumEliminar.setDisable();
		checboxMantAsoMatPenOcuImprimir.setChecked("false");
		this.buscar();
	},

	limpiar : function() {
		Tool.rstPwrCmb(pcbMantAsoMatPenOrg);
		Tool.rstPwrCmb(pcbMantAsoMatPenSuborg);
		Tool.rstPwrCmb(pcbMantAsoMatPenCarrera);
		editsMantAsoMatPenPensum.setValue("");
		Tool.rstPwrCmb(pcbMantAsoMatPenSuborg1);
		Tool.rstPwrCmb(pcbMantAsoMatPenCarrera1);
		Tool.rstPwrCmb(pcbMantAsoMatPenMateria1);
		Tool.rstPwrCmb(pcbMantAsoMatPenPosicion);
		editsMantAsoMatPenOrden.setValue("");
		editsMantAsoMatPenCalET.setValue("");
		editsMantAsoMatPenColET.setValue("0");
		gridsMantAsoMatPensum.clean();
		dialogsMantAsoMatPensum.setMsg("");
		checboxMantAsoMatPenOcuImprimir.setChecked("false");
		imgButtonsMantAsoMatPensumAgregar.setEnable();
		imgButtonsMantAsoMatPensumModificar.setDisable();
		imgButtonsMantAsoMatPensumEliminar.setDisable();
		imgButtonsMantAsoMatPensumReporte.setDisable();
		Tool.cnnSrv('MantObject', 'getMantAsiMatAlPensumOrgPosInit', this.windowName + '.loadOrgPosInit()');
	},

	loadOrgPosInit: function() {
		Tool.loadPowerComboData(dialogsMantAsoMatPensum, pcbMantAsoMatPenOrg, 0, 1, json('getData'));
		Tool.loadPowerComboData(dialogsMantAsoMatPensum, pcbMantAsoMatPenPosicion, 0, 1, json('getMantPosDLMateria'));
		Tool.getContext(dialogsMantAsoMatPensum, pcbMantAsoMatPenOrg, pcbMantAsoMatPenSuborg, pcbMantAsoMatPenCarrera, this.windowName + '.loadSubOrgInit()');
	},

	loadSubOrgInit: function() {
		Tool.loadPowerComboData(dialogsMantAsoMatPensum, pcbMantAsoMatPenSuborg1, 1, 2, json('getMantSuborganizacion'));
		this.getPensumActivo();
	},

    getPensumActivo: function() {
    	var rlx = xmlStructs.createRecordList("rlx");
    	
    	rlx.add('reg',pcbMantAsoMatPenCarrera.setModeReturnGetText(2));
    	Tool.cnnSrv('MantObject', 'getAsociarPensumActivo', this.windowName + '.loadDataPensumActivo()', rlx);
    },
    
    loadDataPensumActivo: function() {
    	this.idPensum = json('getAsociarPensumActivo').data[0][0];
    	editsMantAsoMatPenPensum.setValue(json('getAsociarPensumActivo').data[1][0]);
    	gridsMantAsoMatPensum.clean();
    },

	setData : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (gridsMantAsoMatPensum.getDataCell(1) != "") {
			pcbMantAsoMatPenPosicion.findOption(gridsMantAsoMatPensum.getDataCell(3));
			editsMantAsoMatPenOrden.setValue(gridsMantAsoMatPensum.getDataCell(8));
			editsMantAsoMatPenCalET.setValue(gridsMantAsoMatPensum.getDataCell(9));
			editsMantAsoMatPenColET.setValue(gridsMantAsoMatPensum.getDataCell(10));
			checboxMantAsoMatPenOcuImprimir.setChecked(gridsMantAsoMatPensum.getDataCell(12));
			imgButtonsMantAsoMatPensumAgregar.setDisable();
			imgButtonsMantAsoMatPensumModificar.setEnable();
			imgButtonsMantAsoMatPensumEliminar.setEnable(); 
			rlx.add('reg', pcbMantAsoMatPenOrg);
			rlx.addInt('reg', gridsMantAsoMatPensum.getDataCell(11));
			rlx.addInt('reg', gridsMantAsoMatPensum.getDataCell(4));
			rlx.addStr('reg', gridsMantAsoMatPensum.getDataCell(2));
			Tool.cnnSrv('MantObject', 'getMatPensumSuborgCarMat', this.windowName + '.loadInit()', rlx);
        }     			
	},
	
	loadInit: function() {
		Tool.loadPowerComboData(dialogsMantAsoMatPensum, pcbMantAsoMatPenSuborg1, 1, 2, json('getMantSuborganizacion'));
		Tool.loadPowerComboData(dialogsMantAsoMatPensum, pcbMantAsoMatPenCarrera1, 2, 3, json('getMantenimientodeCarrera'));
		Tool.loadPowerComboData(dialogsMantAsoMatPensum, pcbMantAsoMatPenMateria1, 0, 1, json('getMantMateriaSinEstado'));
    	pcbMantAsoMatPenSuborg1.findOption(gridsMantAsoMatPensum.getDataCell(9));
    	pcbMantAsoMatPenCarrera1.findOption(gridsMantAsoMatPensum.getDataCell(4));
		pcbMantAsoMatPenMateria1.findOption(gridsMantAsoMatPensum.getDataCell(2));
	},

	getSubOrg : function() {
        var rlx = xmlStructs.createRecordList("rlx");

		rlx.add('reg', pcbMantAsoMatPenOrg);             
        Tool.cnnSrv('MantObject', 'getMantSuborganizacion', this.windowName + '.loadSubOrg()', rlx);
	},

	loadSubOrg : function() {
		Tool.loadPowerComboData(dialogsMantAsoMatPensum, pcbMantAsoMatPenSuborg, 1, 2, json('getMantSuborganizacion'));
		Tool.loadPowerComboData(dialogsMantAsoMatPensum, pcbMantAsoMatPenSuborg1, 1, 2, json('getMantSuborganizacion'));
	},
	
	resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(pcbMantAsoMatPenSuborg);
			Tool.rstPwrCmb(pcbMantAsoMatPenCarrera);
			editsMantAsoMatPenPensum.setValue("");
			Tool.rstPwrCmb(pcbMantAsoMatPenSuborg1);
			Tool.rstPwrCmb(pcbMantAsoMatPenCarrera1);
			Tool.rstPwrCmb(pcbMantAsoMatPenMateria1);
			pcbMantAsoMatPenPosicion.setSelectedIndex(0);
			editsMantAsoMatPenOrden.setValue("");
			editsMantAsoMatPenCalET.setValue("");
			editsMantAsoMatPenColET.setValue("0");
			gridsMantAsoMatPensum.clean();
			this.getSubOrg();			
		}
		else if (element == 'suborg') {
			editsMantAsoMatPenPensum.setValue("");
			gridsMantAsoMatPensum.clean();
			Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsMantAsoMatPensum, pcbMantAsoMatPenCarrera, -1, 3, pcbMantAsoMatPenSuborg);		
		}
		else if (element == 'suborg1') {
			Tool.rstPwrCmb(pcbMantAsoMatPenMateria1);
			Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsMantAsoMatPensum, pcbMantAsoMatPenCarrera1, 2, 3, pcbMantAsoMatPenSuborg1);			
		}
		else if (element == 'carr') {
			this.getPensumActivo();
		}
		else if (element == 'carr1') {
			Tool.getPowerComboData('MantObject', 'getMantMateriaSinEstado', dialogsMantAsoMatPensum, pcbMantAsoMatPenMateria1, 0, 1, pcbMantAsoMatPenCarrera1)
		}
		
		imgButtonsMantAsoMatPensumAgregar.setEnable();
		imgButtonsMantAsoMatPensumModificar.setDisable();
		imgButtonsMantAsoMatPensumEliminar.setDisable();
	},

	setEvents : function() {
		gridsMantAsoMatPensum.onClickCells(this.windowName + ".setData()");		
		imgButtonsMantAsoMatPensumAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
  	  	imgButtonsMantAsoMatPensumModificar.onClick(this.windowName + ".coreUpdate('modificar')");
  	  	imgButtonsMantAsoMatPensumEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
  	  	imgButtonsMantAsoMatPensumBuscar.onClick('MantAsoMatPensum.buscar()');
  	  	imgButtonsMantAsoMatPensumLimpiar.onClick('MantAsoMatPensum.limpiar()');
  	  	imgButtonsMantAsoMatPensumReporte.onClick('MantAsoMatPensum.reporte()');
  	  	imgButtonsMantAsoMatPensumSalir.onClick('dialogsMantAsoMatPensum.close()');
  	  	pcbMantAsoMatPenOrg.onChange(this.windowName + ".resetElements('org')");
  	  	pcbMantAsoMatPenSuborg.onChange(this.windowName + ".resetElements('suborg')");
  	  	pcbMantAsoMatPenCarrera.onChange(this.windowName + ".resetElements('carr')");  	  	  
  	  	pcbMantAsoMatPenSuborg1.onChange(this.windowName + ".resetElements('suborg1')");
  	  	pcbMantAsoMatPenCarrera1.onChange(this.windowName + ".resetElements('carr1')");	  	 	
  	  	pcbMantAsoMatPenMateria1.onChange(this.windowName + ".resetElements('')");
  	  	editsMantAsoMatPenOrden.onBlur("editsMantAsoMatPenCalET.setValue(editsMantAsoMatPenOrden.getValue())");
	},    
	
	coreUpdate : function(methodName) {
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == 'eliminar') {
	  		if (editsMantAsoMatPenPensum.valid(dialogsMantAsoMatPensum))
				if (pcbMantAsoMatPenSuborg1.valid(dialogsMantAsoMatPensum)) {
					rlx.addInt('reg',this.idPensum);
					rlx.add('reg',pcbMantAsoMatPenMateria1);
					procesar = true;
				}
		}										
		else {
	  		if (pcbMantAsoMatPenOrg.valid(dialogsMantAsoMatPensum))
	  			if (pcbMantAsoMatPenSuborg.valid(dialogsMantAsoMatPensum))
	  				if (pcbMantAsoMatPenCarrera.valid(dialogsMantAsoMatPensum))
	  					if (editsMantAsoMatPenPensum.valid(dialogsMantAsoMatPensum))
							if (editsMantAsoMatPenOrden.valid(dialogsMantAsoMatPensum))  					
								if (pcbMantAsoMatPenPosicion.valid(dialogsMantAsoMatPensum)) 
									if (pcbMantAsoMatPenSuborg1.valid(dialogsMantAsoMatPensum))
										if (pcbMantAsoMatPenCarrera1.valid(dialogsMantAsoMatPensum))
											if (pcbMantAsoMatPenMateria1.valid(dialogsMantAsoMatPensum))
												if (editsMantAsoMatPenCalET.valid(dialogsMantAsoMatPensum))
													if (editsMantAsoMatPenColET.valid(dialogsMantAsoMatPensum)) {
														rlx.add('reg',pcbMantAsoMatPenPosicion);
														rlx.add('reg',editsMantAsoMatPenOrden);
														rlx.add('reg',checboxMantAsoMatPenOcuImprimir);
														rlx.add('reg',editsMantAsoMatPenCalET);
														rlx.add('reg',editsMantAsoMatPenColET);											
														rlx.addInt('reg',this.idPensum);
														rlx.add('reg',pcbMantAsoMatPenMateria1);
														procesar = true;
													}
		}
		if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + 'MantAsiMatAlPensum', this.windowName + '.limpiarCoreUpdate()', rlx);
        }
    },
    
    reporte : function() {
		///////////////////////////////////////ARREGLO DE DATA/////////////////////////////////////////////////////////////////////////////////////////	    
    	var jd = json('getMantAsiMatAlPensum');
    	var data = new Array();
    	data[0] = jd.data[4];
    	data[1] = jd.data[5];
    	data[2] = jd.data[6];
    	data[3] = jd.data[7];
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
        rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addHeadTitle('MATERIAS ASIGNADAS AL PENSUM',true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),8,'courier','bold');
        rep.addBar(0,152,1128,220,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addLine(0,146,1128,146,rep.getRGBAObj(210,210,210,1),1,false);
        rep.addLine(0,226,1128,226,rep.getRGBAObj(210,210,210,1),1,false); 
		rep.addText(20, 180,'CARRERA:',false);
        rep.addText(80, 180,pcbMantAsoMatPenCarrera.getValue(),false);
		rep.addText(20, 200, 'PENSUM:',false);
		rep.addText(80, 200,editsMantAsoMatPenPensum.getValue(),false);
		//////////////////////////////////////////TABLA DE DATOS////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
        rep.setTableRowProperties(20, 180, 180, 180, 'bold helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'bold helvetica', 8);
        rep.addTable('tablaRepAsiMatPensum',['PENSUM','MATERIA','POSICIÓN','ORDEN'],397,240);
        rep.setTotalRowTable(34);
		rep.setHeightRow(21);
        rep.setSizeColumnArray([200,366,140,90]);
        rep.setAlignData(['left','left','left','center']);
        rep.addMultiArrayData('tablaRepAsiMatPensum', data);
		rep.addMultiArrayData('tablaRepAsiMatPensum', data);
        //////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	}
};