var dialogsMencion = new Object();
var pbcMencionAdiOrg = new Object();
var pbcMencionAdiPuntAdiSuborg = new Object();
var pbcMencionAdiCarrera = new Object();
var pbcMencionAdiPosicion = new Object();
var editsMencionCod = new Object();
var editsMencionDescrip = new Object();
var editsMencionPlanEstudio = new Object();
var gridsMencion = new Object();
var imgButtonsMencionAgregar = new Object();
var imgButtonsMencionModificar = new Object();
var imgButtonsMencionEliminar = new Object();
var imgButtonsMencionLimpiar = new Object();
var imgButtonsMencionBuscar = new Object();
var imgButtonsMencioniSalir = new Object();
var mwMencion = new Object();// minWindow

var Mencion = {
	windowName : 'Mencion',
	isCreate : false,

	show: function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMencion.isByClean())
			this.limpiar();		
		dialogsMencion.show();
	},
	
	hide: function(){
		dialogsMencion.hide();
	},
	
    createMWs: function(){
        mwMencion = desktop.addMinWindow('P.Adicional', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMencion.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsMencion_Init : function() {
        dialogsMencion.setMinimizeXY(0,0);
        dialogsMencion.setCenterScreen();
        dialogsMencion.addSpace(0,0,20);
        dialogsMencion.addLn(1,1,1);
		dialogsMencion.setHeightCell(1,1,15);  
		var c1 = container.create("c1",'Datos Generales',1);
		c1.setDimension(778,98);
		c1.setMarginLeftBarTitle(345);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#7e7e7e');
		c1.addObject(pbcMencionAdiOrg, 30, 55);
		c1.addObject(pbcMencionAdiPuntAdiSuborg, 289, 55);
		c1.addObject(pbcMencionAdiCarrera, 570, 55);
		c1.addObject(pbcMencionAdiPosicion, 30, 80);
		c1.addObject(editsMencionPlanEstudio, 289, 80);
		c1.addObject(editsMencionCod, 30, 105);
		c1.addObject(editsMencionDescrip, 289, 105);
		dialogsMencion.addObjToDialog(c1, 2, 1);
		dialogsMencion.addLn(3,1,1);
		dialogsMencion.addObject(gridsMencion.getObject(), 20, 145);
		dialogsMencion.addObject(imgButtonsMencionAgregar, 90, 491);
        dialogsMencion.addObject(imgButtonsMencionModificar, 200, 491);
        dialogsMencion.addObject(imgButtonsMencionEliminar, 310, 491);
        dialogsMencion.addObject(imgButtonsMencionLimpiar, 420, 491);
        dialogsMencion.addObject(imgButtonsMencionBuscar, 530, 491);
        dialogsMencion.addObject(imgButtonsMencioniSalir, 640, 491);
    },
  
    gridsMencion_Init : function() {
        gridsMencion.setFixColRow(false,true);
        gridsMencion.addTitleVectorX(['Carrera','Posición','Plan de Estudio','Código del Plan','Mención','idMencion','idCarrera','idPosicion']);
        gridsMencion.showData();
        gridsMencion.setSizeCol(1,200);
        gridsMencion.setSizeCol(2,100);
        gridsMencion.setSizeCol(3,224);
        gridsMencion.setSizeCol(4,100);
        gridsMencion.setSizeCol(5,150);
		gridsMencion.setSizeCol(6,0);
        gridsMencion.setSizeCol(7,0);
		gridsMencion.setSizeCol(8,0);
        gridsMencion.hideCol(6);
        gridsMencion.hideCol(7);
        gridsMencion.hideCol(8);
    },

    create : function() {
    	dialogsMencion = dialogs.create('dialogsMencion',0,0,819,502,'MENCION');
    	dialogsMencion.setAdjY(20);
    	pbcMencionAdiOrg = powerComboBox.create('pbcMencionAdiOrg','pbcMencionAdiOrg','Organización (+):',1,105);
    	pbcMencionAdiOrg.setValidEmpty();
    	pbcMencionAdiOrg.addEmptyOption();
    	pbcMencionAdiOrg.enableReadOnlyEditor();
    	pbcMencionAdiPuntAdiSuborg = powerComboBox.create('pbcMencionAdiPuntAdiSuborg','pbcMencionAdiPuntAdiSuborg','Suborganización (^):',1,125);
    	pbcMencionAdiPuntAdiSuborg.setValidEmpty();
    	pbcMencionAdiPuntAdiSuborg.addEmptyOption();
    	pbcMencionAdiPuntAdiSuborg.enableReadOnlyEditor();
    	pbcMencionAdiCarrera = powerComboBox.create('pbcMencionAdiCarrera','pbcMencionAdiCarrera','Carrera (^):',1,69);
    	pbcMencionAdiCarrera.setValidEmpty();
    	pbcMencionAdiCarrera.addEmptyOption();
    	pbcMencionAdiCarrera.enableReadOnlyEditor();
    	pbcMencionAdiCarrera.setFieldFind(true);
    	pbcMencionAdiPosicion = powerComboBox.create('pbcMencionAdiPosicion','pbcMencionAdiPosicion','Posición:',1,105);
    	pbcMencionAdiPosicion.setValidEmpty();
    	pbcMencionAdiPosicion.addEmptyOption();
    	pbcMencionAdiPosicion.enableReadOnlyEditor();
    	pbcMencionAdiPosicion.setFieldFind(true);
    	editsMencionPlanEstudio = edits.create('editsMencionPlanEstudio','editsMencionPlanEstudio','Plan de Estudio:',1,125,'normal');
    	editsMencionPlanEstudio.setValidEmpty();
    	editsMencionPlanEstudio.setSizeEdit(374);
    	editsMencionPlanEstudio.setMaxLength(50);
    	editsMencionCod = edits.create('editsMencionCod','editsMencionCod','Código Plan:',1,105,'normal');
    	editsMencionCod.setValidEmpty();
        editsMencionCod.setSizeEdit(149);
        editsMencionCod.setMaxLength(5);
    	editsMencionDescrip = edits.create('editsMencionDescrip','editsMencionDescrip','Mención:',1,125,'normal');
    	editsMencionDescrip.setValidEmpty();
    	editsMencionDescrip.setSizeEdit(374);
    	editsMencionDescrip.setMaxLength(50);
    	gridsMencion = grids.create('gridsMencion',15,8); 
    	imgButtonsMencionAgregar = imgButtons.create('imgButtonsMencionAgregar','Agregar','ok.png');
    	imgButtonsMencionModificar = imgButtons.create('imgButtonsMencionModificar','Modificar','icono_modificar.png');
     	imgButtonsMencionEliminar = imgButtons.create('imgButtonsMencionEliminar','Eliminar','eliminar.png');
     	imgButtonsMencionLimpiar = imgButtons.create('imgButtonsMencionLimpiar', 'Limpiar', 'limpiar.png');
     	imgButtonsMencionBuscar = imgButtons.create('imgButtonsMencionBuscar', 'Buscar', 'icono_buscar.png');
    	imgButtonsMencioniSalir = imgButtons.create('imgButtonsMencioniSalir','Salir','salir.png');
        imgButtonsMencionAgregar.setDimension(90,22);
        imgButtonsMencionModificar.setDimension(90,22);
        imgButtonsMencionEliminar.setDimension(90,22);
        imgButtonsMencionLimpiar.setDimension(90,22);
        imgButtonsMencionBuscar.setDimension(90,22);
        imgButtonsMencioniSalir.setDimension(90,22);
    },

    init : function() {
    	this.create();
    	this.setEvents();
    	this.dialogsMencion_Init();  
    	this.gridsMencion_Init();
    	this.createMWs();
    },

	limpiar: function() {
  		pbcMencionAdiOrg.setSelectedIndex(0);
	  	Tool.rstPwrCmb(pbcMencionAdiPuntAdiSuborg);
	  	Tool.rstPwrCmb(pbcMencionAdiCarrera);
	  	Tool.rstPwrCmb(pbcMencionAdiPosicion);
	  	editsMencionPlanEstudio.clear();
	  	editsMencionCod.clear();
		editsMencionCod.hideId = -1;
		editsMencionDescrip.clear();
		gridsMencion.clean();
		imgButtonsMencionAgregar.setEnable();
		imgButtonsMencionModificar.setDisable();
		imgButtonsMencionEliminar.setDisable();
  		dialogsMencion.setMsg("");
  		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
	},
	
	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsMencion, pbcMencionAdiOrg, 0, 1, json('getData'));
		Tool.getContext(dialogsMencion, pbcMencionAdiOrg, pbcMencionAdiPuntAdiSuborg, pbcMencionAdiCarrera, this.windowName + ".resetElements('carr')");
	},
	
	setEvents: function() {
		pbcMencionAdiOrg.onChange(this.windowName + ".resetElements('org')");
		pbcMencionAdiPuntAdiSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pbcMencionAdiCarrera.onChange(this.windowName + ".resetElements('carr')");
		pbcMencionAdiPosicion.onChange(this.windowName + ".resetElements('pos')");
		gridsMencion.onClickCells(this.windowName + ".setData()");
		imgButtonsMencionAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
		imgButtonsMencionModificar.onClick(this.windowName + ".coreUpdate('modificar')");
		imgButtonsMencionEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
		imgButtonsMencionLimpiar.onClick(this.windowName + ".limpiar()");
		imgButtonsMencionBuscar.onClick(this.windowName + ".buscar()");
        imgButtonsMencioniSalir.onClick('dialogsMencion.close()');
    },
    
	buscar : function() {
		pbcMencionAdiPosicion.setSelectedIndex(0);
		editsMencionPlanEstudio.clear();
		editsMencionCod.hideId = -1;
	  	editsMencionCod.clear();
		editsMencionDescrip.clear();
		gridsMencion.clean();		
		imgButtonsMencionAgregar.setEnable();
		imgButtonsMencionModificar.setDisable();
		imgButtonsMencionEliminar.setDisable();
		if (pbcMencionAdiOrg.valid(dialogsMencion))
			if (pbcMencionAdiPuntAdiSuborg.valid(dialogsMencion))
				Tool.getGridData('MantObject', 'getMencion', dialogsMencion, gridsMencion, false, pbcMencionAdiCarrera.setModeReturnGetText(2), pbcMencionAdiCarrera.setModeReturnGetText(2));
	},
    
	resetElements: function(element) {
		imgButtonsMencionAgregar.setEnable();
		imgButtonsMencionModificar.setDisable();
		imgButtonsMencionEliminar.setDisable();
		gridsMencion.clean();		
		
		if (element == 'org') {
			Tool.rstPwrCmb(pbcMencionAdiPuntAdiSuborg);
	  		Tool.rstPwrCmb(pbcMencionAdiCarrera);
			Tool.rstPwrCmb(pbcMencionAdiPosicion);
		  	editsMencionCod.clear();
			editsMencionCod.hideId = -1;
			editsMencionDescrip.clear();
	    	if (pbcMencionAdiOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsMencion, pbcMencionAdiPuntAdiSuborg, 1, 2, pbcMencionAdiOrg);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pbcMencionAdiCarrera);
			Tool.rstPwrCmb(pbcMencionAdiPosicion);
		  	editsMencionCod.clear();
			editsMencionCod.hideId = -1;
			editsMencionDescrip.clear();
	    	if (pbcMencionAdiPuntAdiSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsMencion, pbcMencionAdiCarrera, -1, 3, pbcMencionAdiPuntAdiSuborg);
		}
		else if (element == 'carr') {
			Tool.rstPwrCmb(pbcMencionAdiPosicion);
		  	editsMencionCod.clear();
			editsMencionCod.hideId = -1;
			editsMencionDescrip.clear();
	    	if (pbcMencionAdiCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsMencion, pbcMencionAdiPosicion, 0, 1, pbcMencionAdiCarrera.setModeReturnGetText(2));        		
		}
	},
	
  	setData : function() {
  		var rlx = xmlStructs.createRecordList("rlx");
  		
  		if (gridsMencion.getDataCell(1) != "") {
  			editsMencionPlanEstudio.setValue(gridsMencion.getDataCell(3));
  			editsMencionCod.setValue(gridsMencion.getDataCell(4));
  			editsMencionDescrip.setValue(gridsMencion.getDataCell(5));
  			editsMencionCod.hideId = gridsMencion.getDataCell(6);
  			pbcMencionAdiCarrera.findOption(gridsMencion.getDataCell(7),2);
  			imgButtonsMencionAgregar.setDisable();
  			imgButtonsMencionModificar.setEnable();
  			imgButtonsMencionEliminar.setEnable();
			rlx.add('reg', pbcMencionAdiCarrera.setModeReturnGetText(2));
  			Tool.cnnSrv('MantObject', 'getMantPensumPosicion', this.windowName + ".loadPos()", rlx);
  		}
  	},
	
  	loadPos: function() {
  		Tool.loadPowerComboData(dialogsMencion, pbcMencionAdiPosicion, 0, 1, json('getMantPensumPosicion'));  		
  		pbcMencionAdiPosicion.findOption(gridsMencion.getDataCell(8));
  	},
  	
	coreUpdate: function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");
		
		if (pbcMencionAdiOrg.valid(dialogsMencion))
			if (pbcMencionAdiPuntAdiSuborg.valid(dialogsMencion))
				if (pbcMencionAdiCarrera.valid(dialogsMencion))
					if (pbcMencionAdiPosicion.valid(dialogsMencion))
						if (editsMencionCod.valid(dialogsMencion))
							if (editsMencionDescrip.valid(dialogsMencion)) 
								if (editsMencionPlanEstudio.valid(dialogsMencion)) {
									if (methodName == 'eliminar') 
										rlx.addInt('reg', editsMencionCod.hideId);
									else {
										rlx.add('reg', pbcMencionAdiCarrera.setModeReturnGetText(2));
										rlx.add('reg', pbcMencionAdiPosicion);
										rlx.add('reg', editsMencionCod);
										rlx.add('reg', editsMencionDescrip);
										rlx.add('reg', editsMencionPlanEstudio);
									 	if (methodName == 'modificar') rlx.addInt('reg', editsMencionCod.hideId);
									}
									Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".buscar()", rlx);
								}
  	 }
};