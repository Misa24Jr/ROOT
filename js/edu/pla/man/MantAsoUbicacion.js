var dialogsMantAsoUbicacion = new Object();
var powerComboBoxMantAsoUbiPais = new Object();
var powerComboBoxMantAsoUbiRegion = new Object();
var powerComboBoxMantAsoUbiCiudad = new Object();
var gridsMantAsoUbicacion = new Object();
var imgButtonsMantAsoUbiAgregar = new Object();
var imgButtonsMantAsoUbiModificar = new Object();
var imgButtonsMantAsoUbiEliminar = new Object();
var imgButtonsMantAsoUbiLimpiar = new Object();
var imgButtonsMantAsoUbiSalir = new Object();
var mwdialogsMantAsoUbicacion = new Object();// minWindow

var MantAsoUbicacion = {
	windowName : 'MantAsoUbicacion',
	isCreate : false,
	hideIdPais : 0,
	hideIdRegion : 0,
	hideIdCiudad : 0,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantAsoUbicacion.isByClean())
 			this.limpiar();			
		dialogsMantAsoUbicacion.show();
	},
	
	hide : function(){
		dialogsMantAsoUbicacion.hide();
	},
	
	createMWs : function(){
        	mwMantAsoUbicacion = desktop.addMinWindow('M.A.Ubicacion', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantAsoUbicacion.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantAsoUbicacion_Init : function(){
        dialogsMantAsoUbicacion.setMinimizeXY(0,0);
        dialogsMantAsoUbicacion.setCenterScreen();
        dialogsMantAsoUbicacion.addSpace(0,0,20);
        dialogsMantAsoUbicacion.addLn(1,1,1);
		dialogsMantAsoUbicacion.setHeightCell(1,1,10);  
        dialogsMantAsoUbicacion.addObjToDialog(powerComboBoxMantAsoUbiPais,2,1,24);
        powerComboBoxMantAsoUbiPais.setWidthCombo(310);
        dialogsMantAsoUbicacion.addObjToDialog(powerComboBoxMantAsoUbiRegion,3,1,24);
        powerComboBoxMantAsoUbiRegion.setWidthCombo(310);
        dialogsMantAsoUbicacion.addObjToDialog(powerComboBoxMantAsoUbiCiudad,4,1,24);
        powerComboBoxMantAsoUbiCiudad.setWidthCombo(310);
        dialogsMantAsoUbicacion.addLn(5,1,1);
		dialogsMantAsoUbicacion.setHeightCell(5,1,10);  
        dialogsMantAsoUbicacion.addObjToDialog(gridsMantAsoUbicacion.getObject(),6,1);
        dialogsMantAsoUbicacion.addLn(7,1,1);
		dialogsMantAsoUbicacion.setHeightCell(7,1,12);  
        dialogsMantAsoUbicacion.addObjToDialog(imgButtonsMantAsoUbiAgregar,8,1);
        dialogsMantAsoUbicacion.addObjToDialog(imgButtonsMantAsoUbiModificar,8,1);
        dialogsMantAsoUbicacion.addObjToDialog(imgButtonsMantAsoUbiEliminar,8,1);
        dialogsMantAsoUbicacion.addObjToDialog(imgButtonsMantAsoUbiLimpiar,8,1);
        dialogsMantAsoUbicacion.addObjToDialog(imgButtonsMantAsoUbiSalir,8,1);
        imgButtonsMantAsoUbiAgregar.setDimension(90,22);
        imgButtonsMantAsoUbiModificar.setDimension(90,22);
        imgButtonsMantAsoUbiEliminar.setDimension(90,22);
        imgButtonsMantAsoUbiLimpiar.setDimension(90,22);
        imgButtonsMantAsoUbiSalir.setDimension(90,22);
        dialogsMantAsoUbicacion.adjAllMarginObj(8,1,20);
        dialogsMantAsoUbicacion.leftMarginObj(8,1,0,34);
	},
	
	gridsMantAsoUbicacion_Init : function(){
        gridsMantAsoUbicacion.setFixColRow(false,true);
        gridsMantAsoUbicacion.addTitleVectorX(['País','Región','Ciudad','Id.pais','Id.region','Id.ciudad']);
        gridsMantAsoUbicacion.showData();
        gridsMantAsoUbicacion.setSizeCol(1,200);
        gridsMantAsoUbicacion.setSizeCol(2,200);
        gridsMantAsoUbicacion.setSizeCol(3,200);
        gridsMantAsoUbicacion.setSizeCol(4,5);
        gridsMantAsoUbicacion.setSizeCol(5,5);
        gridsMantAsoUbicacion.setSizeCol(6,5);
        gridsMantAsoUbicacion.hideCol(4);
        gridsMantAsoUbicacion.hideCol(5);
        gridsMantAsoUbicacion.hideCol(6);
	},

	create : function(){
		dialogsMantAsoUbicacion = dialogs.create('dialogsMantAsoUbicacion',0,0,647,382,'MANTENIMIENTO ASOCIAR UBICACIÓN');
		dialogsMantAsoUbicacion.setAdjY(20);
		powerComboBoxMantAsoUbiPais = powerComboBox.create('powerComboBoxMantAsoUbiPais','powerComboBoxMantAsoUbiPais','País (*):',1,68);
		powerComboBoxMantAsoUbiPais.setValidEmpty();
		powerComboBoxMantAsoUbiPais.enableReadOnlyEditor();
		powerComboBoxMantAsoUbiPais.addEmptyOption();
		powerComboBoxMantAsoUbiPais.setFieldFind(true);
		powerComboBoxMantAsoUbiRegion = powerComboBox.create('powerComboBoxMantAsoUbiRegion','powerComboBoxMantAsoUbiRegion','Región (*):',1,68);
		powerComboBoxMantAsoUbiRegion.setValidEmpty();
		powerComboBoxMantAsoUbiRegion.enableReadOnlyEditor();
      	powerComboBoxMantAsoUbiRegion.addEmptyOption();
      	powerComboBoxMantAsoUbiRegion.setFieldFind(true);
      	powerComboBoxMantAsoUbiCiudad = powerComboBox.create('powerComboBoxMantAsoUbiCiudad','powerComboBoxMantAsoUbiCiudad','Ciudad:',1,68);
      	powerComboBoxMantAsoUbiCiudad.setValidEmpty();
      	powerComboBoxMantAsoUbiCiudad.enableReadOnlyEditor();
      	powerComboBoxMantAsoUbiCiudad.addEmptyOption();
      	gridsMantAsoUbicacion = grids.create('gridsMantAsoUbicacion',10,6);
      	imgButtonsMantAsoUbiAgregar = imgButtons.create('imgButtonsMantAsoUbiAgregar','Agregar','ok.png');
      	imgButtonsMantAsoUbiModificar = imgButtons.create('imgButtonsMantAsoUbiModificar','Modificar','icono_modificar.png');
      	imgButtonsMantAsoUbiModificar.setDisable();
      	imgButtonsMantAsoUbiEliminar = imgButtons.create('imgButtonsMantAsoUbiEliminar','Eliminar','eliminar.jpg');
      	imgButtonsMantAsoUbiEliminar.setDisable();
      	imgButtonsMantAsoUbiLimpiar = imgButtons.create('imgButtonsMantAsoUbiLimpiar','Limpiar','limpiar.png');
      	imgButtonsMantAsoUbiSalir = imgButtons.create('imgButtonsMantAsoUbiSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMantAsoUbicacion_Init();
		this.gridsMantAsoUbicacion_Init();
		this.createMWs();
	},

	limpiar : function(){
  		powerComboBoxMantAsoUbiPais.setSelectedIndex(0); 	
  		powerComboBoxMantAsoUbiRegion.setSelectedIndex(0);  		
  		powerComboBoxMantAsoUbiCiudad.setSelectedIndex(0);  		
  		gridsMantAsoUbicacion.clean();
  		dialogsMantAsoUbicacion.setMsg(""); 			
		imgButtonsMantAsoUbiAgregar.setEnable();
		imgButtonsMantAsoUbiModificar.setDisable();
		imgButtonsMantAsoUbiEliminar.setDisable();
		Tool.cnnSrv('MantObject', 'getMantAsoUbicacionInit', this.windowName + '.loadInit()');
  	},  
  
	loadInit: function() {
		Tool.loadPowerComboData(dialogsMantAsoUbicacion, powerComboBoxMantAsoUbiPais, 0, 1, json('getMantPais'));
		Tool.loadPowerComboData(dialogsMantAsoUbicacion, powerComboBoxMantAsoUbiRegion, 2, 1, json('getMantRegion'));
		Tool.loadPowerComboData(dialogsMantAsoUbicacion, powerComboBoxMantAsoUbiCiudad, 0, 1, json('getMantCiudad'));
		Tool.loadGridData(dialogsMantAsoUbicacion, gridsMantAsoUbicacion, false, json('getMantAsoUbicacion'));
	},  

	limpiarCoreUpdate: function(){
    	powerComboBoxMantAsoUbiCiudad.setSelectedIndex(0); ;
    	this.buscar();
    },
  	
    buscar: function(){
    	gridsMantAsoUbicacion.clean();
    	dialogsMantAsoUbicacion.setMsg("");
		imgButtonsMantAsoUbiAgregar.setEnable();
		imgButtonsMantAsoUbiModificar.setDisable();
		imgButtonsMantAsoUbiEliminar.setDisable();
		Tool.getGridData('MantObject', 'getMantAsoUbicacion', dialogsMantAsoUbicacion, gridsMantAsoUbicacion, false, powerComboBoxMantAsoUbiPais, powerComboBoxMantAsoUbiPais, powerComboBoxMantAsoUbiRegion, powerComboBoxMantAsoUbiRegion);
    },
    
	setData : function(){
		if (gridsMantAsoUbicacion.getDataCell(1) != ""){	
            powerComboBoxMantAsoUbiPais.findOption(gridsMantAsoUbicacion.getDataCell(4));
            powerComboBoxMantAsoUbiRegion.findOption(gridsMantAsoUbicacion.getDataCell(5)); 
            powerComboBoxMantAsoUbiCiudad.findOption(gridsMantAsoUbicacion.getDataCell(6));
			imgButtonsMantAsoUbiAgregar.setDisable();
			imgButtonsMantAsoUbiModificar.setEnable();
			imgButtonsMantAsoUbiEliminar.setEnable();
			this.hideIdPais = gridsMantAsoUbicacion.getDataCell(4);
			this.hideIdRegion = gridsMantAsoUbicacion.getDataCell(5);
			this.hideIdCiudad = gridsMantAsoUbicacion.getDataCell(6);
		}
	},
	
	setEvents : function() {
	  	powerComboBoxMantAsoUbiPais.onChange(this.windowName+".buscar()");
	  	powerComboBoxMantAsoUbiRegion.onChange(this.windowName+".buscar()");
		gridsMantAsoUbicacion.onClickCells(this.windowName + ".setData()");
	  	imgButtonsMantAsoUbiAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantAsoUbiModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantAsoUbiEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
	  	imgButtonsMantAsoUbiLimpiar.onClick(this.windowName+".limpiar()");  	
	  	imgButtonsMantAsoUbiSalir.onClick("dialogsMantAsoUbicacion.close()");
	},
	
	coreUpdate : function(methodName){
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

  		if (powerComboBoxMantAsoUbiPais.valid(dialogsMantAsoUbicacion)) 
			if (powerComboBoxMantAsoUbiRegion.valid(dialogsMantAsoUbicacion)) 
				if (powerComboBoxMantAsoUbiCiudad.valid(dialogsMantAsoUbicacion)){
					rlx.add('reg', powerComboBoxMantAsoUbiPais);
					rlx.add('reg', powerComboBoxMantAsoUbiRegion);
					rlx.add('reg', powerComboBoxMantAsoUbiCiudad);
					if (methodName == 'modificar') {
						rlx.addInt('reg', this.hideIdPais);
						rlx.addInt('reg', this.hideIdRegion);
						rlx.addInt('reg', this.hideIdCiudad);
					}
					procesar = true;
				} 
		if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()', rlx);
        }
	}
};