var dialogsMantCreMateria = new Object();
var pcbMantCreMatOrg = new Object();
var pcbMantCreMatSuborg = new Object();
var pcbMantCreMatPeriodo = new Object();
var imagesManCreMateria = new Object();
var pcbMantCreMatCarrera = new Object();
var pcbMantCreMatMateria = new Object();
var editsMantCreMatHorCreditos = new Object();
var editsMantCreMatUniCreditos = new Object();
var gridsMantCreMateria = new Object();
var imgButtonsMantCreMatAgregar = new Object();
var imgButtonsMantCreMatModificar = new Object();
var imgButtonsMantCreMatEliminar = new Object();
var imgButtonsMantCreMatLimpiar = new Object();
var imgButtonsMantCreMatBuscar = new Object();
var imgButtonsMantCreMatSalir = new Object();
var mwMantCreMateria = new Object();// minWindow

var MantCreMateria = {
	windowName: 'MantCreMateria',
	isCreate: false,
	
	show: function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantCreMateria.isByClean())
			this.limpiar();			
		dialogsMantCreMateria.show();
	},
	
	hide: function() {
		dialogsMantCreMateria.hide();
	},
	
	createMWs: function() {
       	mwMantCreMateria = desktop.addMinWindow('M.C.Materia', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
       	dialogsMantCreMateria.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantCreMateria_Init: function() {
		dialogsMantCreMateria.setMinimizeXY(0,0);
		dialogsMantCreMateria.setCenterScreen();
		dialogsMantCreMateria.addSpace(0,0,20);
		dialogsMantCreMateria.addLn(1,1,1); 
		dialogsMantCreMateria.setHeightCell(1,1,10);         
		dialogsMantCreMateria.addObjToDialog(pcbMantCreMatOrg, 2, 1,24);
		dialogsMantCreMateria.addObjToDialog(pcbMantCreMatSuborg, 2, 1,24);
		dialogsMantCreMateria.addObjToDialog(pcbMantCreMatCarrera, 2, 1,24);
        dialogsMantCreMateria.adjAllMarginObj(2, 1, 20);
		dialogsMantCreMateria.addObjToDialog(pcbMantCreMatPeriodo, 3, 1,24);
		dialogsMantCreMateria.addObjToDialog(imagesManCreMateria, 3, 1,24);
		imagesManCreMateria.setSize(17,17);
        dialogsMantCreMateria.adjAllMarginObj(3, 1,20);
		dialogsMantCreMateria.addObjToDialog(pcbMantCreMatMateria, 4, 1,24);
		pcbMantCreMatMateria.setWidthCombo(422);
		pcbMantCreMatMateria.setFieldFind(true);
		dialogsMantCreMateria.addObjToDialog(editsMantCreMatHorCreditos, 4, 1,24);
		editsMantCreMatHorCreditos.setSizeEdit(20);
		editsMantCreMatHorCreditos.setMaxLength(8);
		dialogsMantCreMateria.addObjToDialog(editsMantCreMatUniCreditos, 4, 1,24);
		editsMantCreMatUniCreditos.setSizeEdit(20);
        dialogsMantCreMateria.adjAllMarginObj(4, 1, 20);
		dialogsMantCreMateria.addLn(5,1,1);
		dialogsMantCreMateria.setHeightCell(5,1,10);
		dialogsMantCreMateria.addObjToDialog(gridsMantCreMateria.getObject(),6,1);
		dialogsMantCreMateria.addLn(7,1,1);
		dialogsMantCreMateria.setHeightCell(7,1,12);
		dialogsMantCreMateria.addObjToDialog(imgButtonsMantCreMatAgregar,8,1);
		dialogsMantCreMateria.addObjToDialog(imgButtonsMantCreMatModificar,8,1);
		dialogsMantCreMateria.addObjToDialog(imgButtonsMantCreMatEliminar,8,1);
		dialogsMantCreMateria.addObjToDialog(imgButtonsMantCreMatLimpiar,8,1);
		dialogsMantCreMateria.addObjToDialog(imgButtonsMantCreMatBuscar,8,1);
		dialogsMantCreMateria.addObjToDialog(imgButtonsMantCreMatSalir,8,1);       
		imgButtonsMantCreMatAgregar.setDimension(90,22);
		imgButtonsMantCreMatModificar.setDimension(90,22);
		imgButtonsMantCreMatEliminar.setDimension(90,22);
		imgButtonsMantCreMatLimpiar.setDimension(90,22);
		imgButtonsMantCreMatBuscar.setDimension(90,22);
		imgButtonsMantCreMatSalir.setDimension(90,22);
		dialogsMantCreMateria.adjAllMarginObj(8,1,20);
		dialogsMantCreMateria.leftMarginObj(8,1,0,78);   
	},     
        
	gridsMantCreMateria_Init: function() {
		gridsMantCreMateria.setFixColRow(false,true);
        gridsMantCreMateria.addTitleVectorX(['Id Materia','Id Periodo','Carrera','Materia','Periodo','Hr. Semanal','Hr. Credito']);
        gridsMantCreMateria.showData();        
        gridsMantCreMateria.setSizeCol(1,0);
        gridsMantCreMateria.setSizeCol(2,0);
        gridsMantCreMateria.setSizeCol(3,216);
        gridsMantCreMateria.setSizeCol(4,342);
        gridsMantCreMateria.setSizeCol(5,101);
        gridsMantCreMateria.setSizeCol(6,70);
        gridsMantCreMateria.setSizeCol(7,70);
        gridsMantCreMateria.hideCol(1);
        gridsMantCreMateria.hideCol(2);      
	},

	create: function() {
		dialogsMantCreMateria = dialogs.create('dialogsMantCreMateria',0,0,847,475,'MANTENIMIENTO HORAS SEMANAL/CREDITO DE LA MATERIA');
		dialogsMantCreMateria.setAdjY(20); 
		pcbMantCreMatOrg = powerComboBox.create('pcbMantCreMatOrg','pcbMantCreMatOrg','Organización (+):',1,118);
		pcbMantCreMatOrg.setValidEmpty();
		pcbMantCreMatOrg.addEmptyOption();
		pcbMantCreMatOrg.enableReadOnlyEditor(); 
		pcbMantCreMatSuborg = powerComboBox.create('pcbMantCreMatSuborg','pcbMantCreMatSuborg','Suborganización (^):',1,124);
		pcbMantCreMatSuborg.setValidEmpty();
		pcbMantCreMatSuborg.addEmptyOption();
		pcbMantCreMatSuborg.enableReadOnlyEditor(); 
		pcbMantCreMatCarrera = powerComboBox.create('pcbMantCreMatCarrera','pcbMantCreMatCarrera','Carrera (^):',1,74);
		pcbMantCreMatCarrera.setValidEmpty();
		pcbMantCreMatCarrera.addEmptyOption();
		pcbMantCreMatCarrera.enableReadOnlyEditor(); 
		pcbMantCreMatMateria = powerComboBox.create('pcbMantCreMatMateria','pcbMantCreMatMateria','Materia (^):',1,118);
		pcbMantCreMatMateria.setValidEmpty();
		pcbMantCreMatMateria.addEmptyOption();
		pcbMantCreMatMateria.enableReadOnlyEditor();
		pcbMantCreMatMateria.setDataType('string');
		pcbMantCreMatPeriodo = powerComboBox.create('pcbMantCreMatPeriodo','pcbMantCreMatPeriodo','Periodo (^):',1,118);
		pcbMantCreMatPeriodo.setValidEmpty();
		pcbMantCreMatPeriodo.addEmptyOption();
		pcbMantCreMatPeriodo.enableReadOnlyEditor(); 
		editsMantCreMatHorCreditos = edits.create('editsMantCreMatHorCreditos','editsMantCreMatHorCreditos','HS.:',1,28,'normal');
		editsMantCreMatHorCreditos.setValidInteger();
		editsMantCreMatUniCreditos = edits.create('editsMantCreMatUniCreditos','editsMantCreMatUniCreditos','HC.:',1,28,'normal');
		editsMantCreMatUniCreditos.setValidInteger();
		editsMantCreMatUniCreditos.setValidEmpty();
		/////////////CREAR HINT//////////////////////////////////////////////////////////////////////////////////////////////////
		imagesManCreMateria = images.create('imagesManCreMateria','imagesManCreMateria','images/duplicar_periodo_1.png');
		hint.create();
		hint.addToHintWithPos(imagesManCreMateria,"Duplicar para Nuevo Periodo",imagesManCreMateria.x1+500,imagesManCreMateria.y1+44);
		//hint.addToHintWithPos(editsMantCreMatHorCreditos,"Hora Semanal de una Materia",editsMantCreMatHorCreditos.x1+457,10);
		//hint.addToHintWithPos(editsMantCreMatUniCreditos,"Hora Credito de una Materia",editsMantCreMatUniCreditos.x1+535,10);
		xFunct = function(){
		hint.setPosition(imagesManCreMateria, dialogsMantCreMateria.x1+328, dialogsMantCreMateria.y1+60);
		//hint.setPosition(editsMantCreMatHorCreditos, dialogsMantCreMateria.x1+460, dialogsMantCreMateria.y1+87);
		//hint.setPosition(editsMantCreMatUniCreditos, dialogsMantCreMateria.x1+514, dialogsMantCreMateria.y1+87);
		};
		hint.onMouseOver('xFunct()');
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
		gridsMantCreMateria = grids.create('gridsMantCreMateria',15,7);
		imgButtonsMantCreMatAgregar = imgButtons.create('imgButtonsMantCreMatAgregar','Agregar','ok.png');
		imgButtonsMantCreMatModificar = imgButtons.create('imgButtonsMantCreMatModificar','Modificar','icono_modificar.png');
		imgButtonsMantCreMatModificar.setDisable();
		imgButtonsMantCreMatEliminar = imgButtons.create('imgButtonsMantCreMatEliminar','Eliminar','eliminar.png');
		imgButtonsMantCreMatEliminar.setDisable();
		imgButtonsMantCreMatLimpiar = imgButtons.create('imgButtonsMantCreMatLimpiar','Limpiar','limpiar.png');
		imgButtonsMantCreMatBuscar = imgButtons.create('imgButtonsMantCreMatBuscar','Buscar','icono_buscar.png');
		imgButtonsMantCreMatSalir = imgButtons.create('imgButtonsMantCreMatSalir','Salir','salir.png');       
	},

	init: function() {
		this.create();
		this.setEvents();
		this.gridsMantCreMateria_Init();
		this.dialogsMantCreMateria_Init();
		this.createMWs();
	},

	limpiar: function() {
		Tool.rstPwrCmb(pcbMantCreMatOrg);
		Tool.rstPwrCmb(pcbMantCreMatSuborg);
		Tool.rstPwrCmb(pcbMantCreMatCarrera);
		Tool.rstPwrCmb(pcbMantCreMatPeriodo);
		Tool.rstPwrCmb(pcbMantCreMatMateria);
		editsMantCreMatHorCreditos.setValue("");
  		editsMantCreMatUniCreditos.setValue("");
  		gridsMantCreMateria.clean();
  		dialogsMantCreMateria.setMsg("");
		imgButtonsMantCreMatAgregar.setEnable();
		imgButtonsMantCreMatModificar.setDisable();
		imgButtonsMantCreMatEliminar.setDisable();
		Tool.cnnSrv('MantObject', 'getMantCreMateriaInit', this.windowName + '.loadInit()');
  	},
  	
  	loadInit: function() {
        Tool.loadPowerComboData(dialogsMantCreMateria, pcbMantCreMatOrg, 0, 1, json('getData'));
		Tool.getContext(dialogsMantCreMateria, pcbMantCreMatOrg, pcbMantCreMatSuborg, pcbMantCreMatCarrera, "MantCreMateria.resetElements('carr')");
    },
    
  	buscar: function() {
  		if (pcbMantCreMatOrg.valid(dialogsMantCreMateria))
  	  		if (pcbMantCreMatSuborg.valid(dialogsMantCreMateria))
  	  			if (pcbMantCreMatCarrera.valid(dialogsMantCreMateria))
	  	    		if (pcbMantCreMatPeriodo.valid(dialogsMantCreMateria)) {
  	    		  		gridsMantCreMateria.clean();  		
  	    		  		dialogsMantCreMateria.setMsg("");
  	    				Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantCreMateria, gridsMantCreMateria, false, pcbMantCreMatPeriodo, pcbMantCreMatMateria, pcbMantCreMatMateria, pcbMantCreMatCarrera.setModeReturnGetText(2));
  	    			}
  	},
  	
  	setData: function() {
		if (gridsMantCreMateria.getDataCell(1) != ""){
			pcbMantCreMatMateria.findOption(gridsMantCreMateria.getDataCell(1));
			editsMantCreMatHorCreditos.setValue(gridsMantCreMateria.getDataCell(6));
			editsMantCreMatUniCreditos.setValue(gridsMantCreMateria.getDataCell(7));     
			imgButtonsMantCreMatAgregar.setDisable();
			imgButtonsMantCreMatModificar.setEnable();
			imgButtonsMantCreMatEliminar.setEnable();
        }  
  	},	
  	 	
    resetElements: function(element) {
        var rlx = xmlStructs.createRecordList("rlx");

        if (element == 'org') {
    		Tool.rstPwrCmb(pcbMantCreMatSuborg);
    		Tool.rstPwrCmb(pcbMantCreMatCarrera);
			Tool.rstPwrCmb(pcbMantCreMatMateria);
			Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsMantCreMateria, pcbMantCreMatSuborg, 1, 2, pcbMantCreMatOrg);		
		}
		else if (element == 'suborg') {
			Tool.rstPwrCmb(pcbMantCreMatCarrera);
			Tool.rstPwrCmb(pcbMantCreMatMateria);
			Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsMantCreMateria, pcbMantCreMatCarrera, -1, 3, pcbMantCreMatSuborg);		
		}
    	else if (element == 'carr') {
    		rlx.add('reg', pcbMantCreMatCarrera.setModeReturnGetText(5));		
        	Tool.cnnSrv('MantObject', 'getPeriodoXNivelAcad', this.windowName + '.loadDataPeriodoMateria()', rlx);
    	}
  		gridsMantCreMateria.clean();  		
		imgButtonsMantCreMatAgregar.setEnable();
		imgButtonsMantCreMatModificar.setDisable();
		imgButtonsMantCreMatEliminar.setDisable();
	},

	loadDataPeriodoMateria: function() {
		Tool.loadPowerComboData(dialogsMantCreMateria, pcbMantCreMatPeriodo, 0, 1, json('getPeriodoXNivelAcad'));
		Tool.getPowerComboData('MantObject', 'getMantMateria', dialogsMantCreMateria, pcbMantCreMatMateria, 0, 1, pcbMantCreMatCarrera.setModeReturnGetText(2));
	},
	
    setEvents: function() {
  		gridsMantCreMateria.onClickCells(this.windowName + ".setData()");
    	pcbMantCreMatOrg.onChange(this.windowName + ".resetElements('org')");
  		pcbMantCreMatSuborg.onChange(this.windowName + ".resetElements('suborg')");
  		pcbMantCreMatCarrera.onChange(this.windowName + ".resetElements('carr')");
  		pcbMantCreMatMateria.onChange(this.windowName + ".resetElements('')");
  		pcbMantCreMatPeriodo.onChange(this.windowName + ".resetElements('per')");
    	
    	editsMantCreMatHorCreditos.onEnter('editsMantCreMatUniCreditos.setFocus()');
    	editsMantCreMatUniCreditos.onEnter('MantCreMateria.coreUpdate("agregar")');
  		
  		imgButtonsMantCreMatAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantCreMatModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantCreMatEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
  		imgButtonsMantCreMatLimpiar.onClick('MantCreMateria.limpiar()');
  		imgButtonsMantCreMatBuscar.onClick('MantCreMateria.buscar()');
  		imgButtonsMantCreMatSalir.onClick('dialogsMantCreMateria.close()'); 
		imagesManCreMateria.onClick(this.windowName + ".callDuplicar()");
    },
     		
	callDuplicar: function() {
		if (pcbMantCreMatPeriodo.valid(dialogsMantCreMateria)) {
			pcbMantCreMatCarrera.setModeReturnGetText(5);
			DuplPeriodo.setNvlAcademic(pcbMantCreMatCarrera.getText());
			DuplPeriodo.setExtFnc('MantCreMateria.duplicar()');
			DuplPeriodo.show();
		}
	},   
    
	duplicar: function() {
        var rlx = xmlStructs.createRecordList("rlx");

        rlx.addInt('reg', idPeriodoDuplPeriodo);
		rlx.add('reg', pcbMantCreMatPeriodo);
		Tool.cnnSrv('MantObject', 'duplicarPeriodoHrUndCrdMat', this.windowName + '.limpiar()', rlx);
	},
	
	limpiarCoreUpdate: function() {
		pcbMantCreMatMateria.setSelectedIndex(0);
		editsMantCreMatHorCreditos.setValue("");
  		editsMantCreMatUniCreditos.setValue("");  		
  		gridsMantCreMateria.clean();  		
  		dialogsMantCreMateria.setMsg("");
		imgButtonsMantCreMatAgregar.setEnable();
		imgButtonsMantCreMatModificar.setDisable();
		imgButtonsMantCreMatEliminar.setDisable();	
		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantCreMateria, gridsMantCreMateria, false, pcbMantCreMatPeriodo, pcbMantCreMatMateria, pcbMantCreMatMateria, pcbMantCreMatCarrera.setModeReturnGetText(2));
  	},

	coreUpdate: function(methodName) {
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == 'eliminar') {
			if (pcbMantCreMatOrg.valid(dialogsMantCreMateria)) {
				rlx.add('reg',pcbMantCreMatPeriodo);
				rlx.add('reg',pcbMantCreMatMateria);
				procesar = true;
			}
		}
		else {
	  		if (pcbMantCreMatOrg.valid(dialogsMantCreMateria))		
  				if (pcbMantCreMatSuborg.valid(dialogsMantCreMateria))
  					if (pcbMantCreMatCarrera.valid(dialogsMantCreMateria))
  						if (pcbMantCreMatMateria.valid(dialogsMantCreMateria))
							if (editsMantCreMatHorCreditos.valid(dialogsMantCreMateria)) 
								if (editsMantCreMatUniCreditos.valid(dialogsMantCreMateria))
									if (pcbMantCreMatPeriodo.valid(dialogsMantCreMateria))	{
										rlx.add('reg',editsMantCreMatHorCreditos);
										rlx.add('reg',editsMantCreMatUniCreditos);
										rlx.add('reg',pcbMantCreMatPeriodo);
										rlx.add('reg',pcbMantCreMatMateria);
										procesar = true;		
									}
		}
		if (procesar) {
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()', rlx);
        }
	}
};