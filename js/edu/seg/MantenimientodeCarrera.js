var dialogsMantCarrera = new Object();
var powerComboBoxMantCarOrganizacion = new Object();
var powerComboBoxMantCarSubOrganizacion = new Object();
var editsMantCarNomCarrera = new Object();
var editsMantCarNomDepartamento = new Object();
var powerComboBoxMantCarNivAcademico = new Object();
var editsMantCarTitulo = new Object();
var powerComboBoxMantCarSubSistema = new Object();
var editsMantCarUndPosicion = new Object();
var gridsMantCarrera = new Object();
var imgButtonsMantCarAgregar = new Object();
var imgButtonsMantCarModificar = new Object();
var imgButtonsMantCarEliminar = new Object();
var imgButtonsMantCarLimpiar = new Object();
var imgButtonsMantCarSalir = new Object();
var mwMantenimientoCarrera = new Object();// minWindow

var MantenimientodeCarrera = {
    windowName: 'MantenimientodeCarrera',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsMantCarrera.isByClean()) 
            this.limpiar();
        dialogsMantCarrera.show();
    },
    
    hide: function(){
        dialogsMantCarrera.hide();
    },
    
    createMWs: function(){
        mwMantenimientodeCarrera = desktop.addMinWindow('M.Carrera', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantCarrera.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
	
    dialogsMantCarrera_Init: function(){
        dialogsMantCarrera.setMinimizeXY(0,0);
        dialogsMantCarrera.setCenterScreen(); 
        dialogsMantCarrera.addSpace(0,0,20);
        dialogsMantCarrera.addLn(1,1,1);
		dialogsMantCarrera.setHeightCell(1,1,10);  
        dialogsMantCarrera.addObjToDialog(powerComboBoxMantCarOrganizacion,2,1,24);
        dialogsMantCarrera.addObjToDialog(powerComboBoxMantCarSubOrganizacion,2,1,24);
		dialogsMantCarrera.adjAllMarginObj(2,1,20);
        dialogsMantCarrera.addObjToDialog(editsMantCarNomCarrera,3,1,24);
		dialogsMantCarrera.addObjToDialog(editsMantCarNomDepartamento,3,1,24);
		dialogsMantCarrera.adjAllMarginObj(3,1,20);
		dialogsMantCarrera.addObjToDialog(powerComboBoxMantCarNivAcademico,4,1,24);
		dialogsMantCarrera.addObjToDialog(editsMantCarTitulo,4,1,24);
		dialogsMantCarrera.adjAllMarginObj(4,1,20);
        dialogsMantCarrera.addObjToDialog(powerComboBoxMantCarSubSistema,5,1,24);
		dialogsMantCarrera.addObjToDialog(editsMantCarUndPosicion,5,1,24);
		dialogsMantCarrera.adjAllMarginObj(5,1,20);
		dialogsMantCarrera.addLn(8,1,1);
		dialogsMantCarrera.setHeightCell(8,1,10);  
        dialogsMantCarrera.addObjToDialog(gridsMantCarrera.getObject(),9,1);
        dialogsMantCarrera.addLn(10,1,1);
		dialogsMantCarrera.setHeightCell(10,1,12);  
        dialogsMantCarrera.addObjToDialog(imgButtonsMantCarAgregar,11,1);
        dialogsMantCarrera.addObjToDialog(imgButtonsMantCarModificar,11,1);
        dialogsMantCarrera.addObjToDialog(imgButtonsMantCarEliminar,11,1);
        dialogsMantCarrera.addObjToDialog(imgButtonsMantCarLimpiar,11,1);
        dialogsMantCarrera.addObjToDialog(imgButtonsMantCarSalir,11,1);
        dialogsMantCarrera.adjAllMarginObj(11,1,20);
        dialogsMantCarrera.leftMarginObj(11,1,0,148);
    },
	
    gridsMantCarrera_Init: function(){
        gridsMantCarrera.setFixColRow(false, true);
        gridsMantCarrera.addTitleVectorX(['id_suborg','de_suborg','id_carrera','Nombre de la Carrera','Departamentos','id_nvl_acad','Nivel Academico','titulo','idSubSis','undPos']);
        gridsMantCarrera.showData();
        gridsMantCarrera.setSizeCol(1, 0);
        gridsMantCarrera.setSizeCol(2, 0);
        gridsMantCarrera.setSizeCol(3, 0);
        gridsMantCarrera.setSizeCol(4, 335);
        gridsMantCarrera.setSizeCol(5, 355);
		gridsMantCarrera.setSizeCol(6, 0);
        gridsMantCarrera.setSizeCol(7, 140);
        gridsMantCarrera.setSizeCol(8, 0);
        gridsMantCarrera.setSizeCol(9, 0);
        gridsMantCarrera.setSizeCol(10, 0);
        gridsMantCarrera.hideCol(1);
		gridsMantCarrera.hideCol(2);
		gridsMantCarrera.hideCol(3);
		gridsMantCarrera.hideCol(6);
		gridsMantCarrera.hideCol(8);
		gridsMantCarrera.hideCol(9);
		gridsMantCarrera.hideCol(10);
    },
    
    create: function(){
        dialogsMantCarrera = dialogs.create('dialogsMantCarrera', 0, 0, 875, 406, 'CARRERA');
		dialogsMantCarrera.setAdjY(20);
        powerComboBoxMantCarOrganizacion = powerComboBox.create('powerComboBoxMantCarOrganizacion', 'powerComboBoxMantCarOrganizacion', 'Organización (+):', 1,133);
        powerComboBoxMantCarOrganizacion.setValidEmpty();
        powerComboBoxMantCarOrganizacion.enableReadOnlyEditor();
        powerComboBoxMantCarOrganizacion.addEmptyOption();
		powerComboBoxMantCarOrganizacion.setWidthCombo(250);
        powerComboBoxMantCarSubOrganizacion = powerComboBox.create('powerComboBoxMantCarSubOrganizacion', 'powerComboBoxMantCarSubOrganizacion', 'Suborganización (^):', 1,138);
        powerComboBoxMantCarSubOrganizacion.setValidEmpty();
        powerComboBoxMantCarSubOrganizacion.enableReadOnlyEditor();
        powerComboBoxMantCarSubOrganizacion.addEmptyOption();
        powerComboBoxMantCarSubOrganizacion.setWidthCombo(250);
		editsMantCarNomCarrera = edits.create('editsMantCarNomCarrera', 'editsMantCarNomCarrera', 'Nombre Carrera :', 1,133, 'normal');
        editsMantCarNomCarrera.setValidEmpty();
        editsMantCarNomCarrera.setSizeEdit(271);
		editsMantCarNomCarrera.setMaxLength(50);
		editsMantCarNomDepartamento = edits.create('editsMantCarNomDepartamento', 'editsMantCarNomDepartamento', 'Departamento:', 1,138, 'normal');
        editsMantCarNomDepartamento.setValidEmpty();
		editsMantCarNomDepartamento.setMaxLength(50);
		editsMantCarNomDepartamento.setSizeEdit(271);
		powerComboBoxMantCarNivAcademico = powerComboBox.create('powerComboBoxMantCarNivAcademico', 'powerComboBoxMantCarNivAcademico', 'Nivel Academico:', 1,133);
        powerComboBoxMantCarNivAcademico.setValidEmpty();
        powerComboBoxMantCarNivAcademico.enableReadOnlyEditor();
        powerComboBoxMantCarNivAcademico.addEmptyOption();
        powerComboBoxMantCarNivAcademico.setWidthCombo(250);
		editsMantCarUndPosicion = edits.create('editsMantCarUndPosicion', 'editsMantCarUndPosicion', 'Unidad Posición:', 1,138, 'normal');
        editsMantCarUndPosicion.setValidEmpty();
        editsMantCarUndPosicion.setSizeEdit(271);
		editsMantCarUndPosicion.setMaxLength(50);
		powerComboBoxMantCarSubSistema = powerComboBox.create('powerComboBoxMantCarSubSistema', 'powerComboBoxMantCarSubSistema', 'Subsistema:', 1,133);
        powerComboBoxMantCarSubSistema.setValidEmpty();
        powerComboBoxMantCarSubSistema.enableReadOnlyEditor();
        powerComboBoxMantCarSubSistema.addEmptyOption();
        powerComboBoxMantCarSubSistema.setWidthCombo(250);		
        editsMantCarTitulo = edits.create('editsMantCarTitulo', 'editsMantCarTitulo', 'Titulo :', 1,138, 'normal');
        editsMantCarTitulo.setValidEmpty();
        editsMantCarTitulo.setMaxLength(50);
        editsMantCarTitulo.setSizeEdit(271);
        gridsMantCarrera = grids.create('gridsMantCarrera', 10, 10);
        imgButtonsMantCarAgregar = imgButtons.create('imgButtonsMantCarAgregar', 'Agregar', 'ok.png');
        imgButtonsMantCarModificar = imgButtons.create('imgButtonsMantCarModificar', 'Modificar', 'icono_modificar.png');
        imgButtonsMantCarEliminar = imgButtons.create('imgButtonsMantCarEliminar', 'Eliminar', 'eliminar.jpg');
        imgButtonsMantCarLimpiar = imgButtons.create('imgButtonsMantCarLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsMantCarSalir = imgButtons.create('imgButtonsMantCarSalir', 'Salir', 'salir.png');
        imgButtonsMantCarModificar.setDisable();
        imgButtonsMantCarEliminar.setDisable();
        imgButtonsMantCarAgregar.setDimension(90,22);
        imgButtonsMantCarModificar.setDimension(90,22);
        imgButtonsMantCarEliminar.setDimension(90,22);
        imgButtonsMantCarLimpiar.setDimension(90,22);
        imgButtonsMantCarSalir.setDimension(90,22);
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsMantCarrera_Init();
        this.gridsMantCarrera_Init();
        this.createMWs();
    },
    
    setData: function(){
        if (gridsMantCarrera.getDataCell(1) != "") {
        	editsMantCarNomCarrera.hideId = gridsMantCarrera.getDataCell(3);
            editsMantCarNomCarrera.setValue(gridsMantCarrera.getDataCell(4));
            editsMantCarNomDepartamento.setValue(gridsMantCarrera.getDataCell(5));
            powerComboBoxMantCarNivAcademico.findOption(gridsMantCarrera.getDataCell(6));
            editsMantCarTitulo.setValue(gridsMantCarrera.getDataCell(8));
            powerComboBoxMantCarSubSistema.findOption(gridsMantCarrera.getDataCell(9));
            editsMantCarUndPosicion.setValue(gridsMantCarrera.getDataCell(10));
            imgButtonsMantCarAgregar.setDisable();
            imgButtonsMantCarModificar.setEnable();
            imgButtonsMantCarEliminar.setEnable();
        }
    },
    
    limpiar: function() { 	
    	editsMantCarNomCarrera.hideId = -1;
    	Tool.rstPwrCmb(powerComboBoxMantCarOrganizacion);
    	Tool.rstPwrCmb(powerComboBoxMantCarSubOrganizacion);
    	Tool.rstPwrCmb(powerComboBoxMantCarNivAcademico);
        editsMantCarNomCarrera.clear();
        editsMantCarNomDepartamento.clear();
        editsMantCarTitulo.clear();
		Tool.rstPwrCmb(powerComboBoxMantCarSubSistema);		
        editsMantCarUndPosicion.clear();        
        gridsMantCarrera.clean();
        dialogsMantCarrera.setMsg("");
        imgButtonsMantCarAgregar.setEnable();
        imgButtonsMantCarModificar.setDisable();
        imgButtonsMantCarEliminar.setDisable();
		Tool.cnnSrv('MantObject', 'getMantenimientodeCarreraInit', this.windowName + '.loadInit()');
    },
    
	loadInit: function(){
		Tool.loadPowerComboData(dialogsMantCarrera, powerComboBoxMantCarOrganizacion, 0, 1, json('getData'));
		Tool.loadPowerComboData(dialogsMantCarrera, powerComboBoxMantCarNivAcademico, 0, 1, json('getMantNivAcademico'));
		Tool.loadPowerComboData(dialogsMantCarrera, powerComboBoxMantCarSubSistema, 0, 1, json('getMantCarreraSubSistema'));
    },
	
    limpiarCoreUpdate: function(methodName) { 		
        if (methodName == "eliminar" && gridsMantCarrera.getTotalRecord() == 1) { 
        	this.limpiar();
        }
        else {
        	editsMantCarNomCarrera.hideId = -1;
	        editsMantCarNomCarrera.clear();
	        editsMantCarNomDepartamento.clear();
	        editsMantCarTitulo.clear();
			powerComboBoxMantCarSubSistema.setSelectedIndex(0);		
	        editsMantCarUndPosicion.clear();        
	        gridsMantCarrera.clean();
	        dialogsMantCarrera.setMsg("");
	        imgButtonsMantCarAgregar.setEnable();
	        imgButtonsMantCarModificar.setDisable();
	        imgButtonsMantCarEliminar.setDisable();
			Tool.getGridData('MantObject', 'getMantCarreraTitulo', dialogsMantCarrera, gridsMantCarrera, false, powerComboBoxMantCarSubOrganizacion);
        }
	},

    setEvents: function() {
		editsMantCarNomDepartamento.onEnter("editsMantCarNomCarrera.setFocus()");
    	gridsMantCarrera.onClickCells(this.windowName+".setData()");
        imgButtonsMantCarAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
        imgButtonsMantCarModificar.onClick(this.windowName + ".coreUpdate('modificar')");
        imgButtonsMantCarEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
        imgButtonsMantCarLimpiar.onClick("MantenimientodeCarrera.limpiar()");
        imgButtonsMantCarSalir.onClick("dialogsMantCarrera.close()");
		powerComboBoxMantCarOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxMantCarSubOrganizacion.onChange(this.windowName + ".resetElements('sub')");
    },

    resetElements : function(element) {
        editsMantCarNomCarrera.clear();
        editsMantCarNomDepartamento.clear();
        editsMantCarTitulo.clear();
        gridsMantCarrera.clean();
        dialogsMantCarrera.setMsg("");
		if (element == 'org') {
			Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsMantCarrera, powerComboBoxMantCarSubOrganizacion, 1, 2, powerComboBoxMantCarOrganizacion);			
		}
		else if (element == 'sub') {
    		Tool.getGridData('MantObject', 'getMantCarreraTitulo', dialogsMantCarrera, gridsMantCarrera, false, powerComboBoxMantCarSubOrganizacion);
		}
        imgButtonsMantCarAgregar.setEnable();
        imgButtonsMantCarModificar.setDisable();
        imgButtonsMantCarEliminar.setDisable();
	},
    
    coreUpdate: function(methodName) {
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (methodName == 'eliminar') {
        	if (editsMantCarNomCarrera.hideId != -1) {
                rlx.addInt('reg', editsMantCarNomCarrera.hideId);
                procesar = true;
            }
        }
        else {
        	if (powerComboBoxMantCarNivAcademico.valid(dialogsMantCarrera))
        		if (powerComboBoxMantCarSubOrganizacion.valid(dialogsMantCarrera)) 
					if (editsMantCarNomCarrera.valid(dialogsMantCarrera)) 
            			if (editsMantCarNomDepartamento.valid(dialogsMantCarrera))
                			if (editsMantCarTitulo.valid(dialogsMantCarrera)) {
		            			rlx.add('reg', editsMantCarNomDepartamento);
		                        rlx.add('reg', editsMantCarNomCarrera);
		                        rlx.add('reg', powerComboBoxMantCarSubOrganizacion);
		                        rlx.add('reg', powerComboBoxMantCarNivAcademico);
		                        rlx.add('reg', editsMantCarTitulo);
		                        rlx.add('reg', powerComboBoxMantCarSubSistema);
		                        rlx.add('reg', editsMantCarUndPosicion);
		                        if (methodName == 'modificar') 
		                        	rlx.addInt('reg', editsMantCarNomCarrera.hideId);
		                        procesar = true;
		            		}
        }
        if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
        }
    }
};
