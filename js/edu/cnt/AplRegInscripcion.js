var dialogsAplRegInscripcion = new Object();
var tabsAplRegInscripcion = new Object();
//TAB ALUMNO
var editsAplRegInsCi = new Object();
var editsAplRegInsNombre = new Object();
var editsAplRegInsApellido = new Object();
var powerComboBoxAplRegInsCarrera = new Object();
var powerComboBoxAplRegInsEdoPeriodo = new Object();
var editsAplRegInsPeriodo = new Object();
var powerComboBoxAplRegInsRegla = new Object();
var powerComboBoxAplRegInsPermitir = new Object();
var gridsAplRegInsAlumnos = new Object();
var imgButtonsAplRegInsAgregar = new Object();
var imgButtonsAplRegInsModificar = new Object();
var imgButtonsAplRegInsEliminar = new Object();
var imgButtonsAplRegInsBuscar = new Object();
var imgButtonsAplRegInsLimpiar = new Object();
var imgButtonsAplRegInsSalir = new Object();
//TAB CARRERA
var pcbAplRegInsCarOrg = new Object();
var pcbAplRegInsCarSuborg = new Object();
var pcbAplRegInsCarCarrera = new Object();
var pcbAplRegInsCarEdoPeriodo = new Object();
var editsAplRegInsCarPeriodo = new Object();
var powerComboBoxAplRegInsCarRegla = new Object();
var powerComboBoxAplRegInsCarPermitir = new Object();
var gridsAplRegInsCarrera = new Object();
var imgButtonsAplRegInsCarAgregar = new Object();
var imgButtonsAplRegInsCarModificar = new Object();
var imgButtonsAplRegInsCarEliminar = new Object();
var imgButtonsAplRegInsCarBuscar = new Object();
var imgButtonsAplRegInsCarLimpiar = new Object();
var imgButtonsAplRegInsCarSalir = new Object();
//TAB REPITIENTE
var powerComboBoxAplRegRepNPerAnteriores = new Object();
var editsAplRegRepMatAplazadas = new Object();
var powerComboBoxAplRegRepNvlAca = new Object();
var powerComboBoxAplRegRepEdoPeriodo = new Object();
var editsAplRegRepPeriodo = new Object();
var gridsAplRegRepitientes = new Object();
var imgButtonsAplRegRepAgregar = new Object();
var imgButtonsAplRegRepEliminar = new Object();
var imgButtonsAplRegRepLimpiar = new Object();
var imgButtonsAplRegRepReporte = new Object();
var imgButtonsAplRegRepBuscar = new Object();
var imgButtonsAplRegRepSalir = new Object();
//TAB PROMEDIO
var editsAplRegProProEstablecisdos = new Object();
var powerComboBoxAplRegProProNvlAca = new Object();
var powerComboBoxAplRegProProEdoPeriodo = new Object();
var editsAplRegProProPeriodo = new Object();
var gridsAplRegProEstablecidos = new Object();
var imgButtonsAplRegProEstAgregar= new Object();
var imgButtonsAplRegProEstEliminar= new Object();
var imgButtonsAplRegProEstLimpiar= new Object();
var imgButtonsAplRegProEstReporte = new Object();
var imgButtonsAplRegProEstBuscar = new Object();
var imgButtonsAplRegProEstSalir = new Object();
var mwAplRegInscripcion = new Object();// minWindow

var AplRegInscripcion = {
    windowName: 'AplRegInscripcion',
    isCreate : false,
    idPeriodo : 0,
    booCleanFind : false, 
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
            Tool.cnnSrv('MantObject', 'getAplRegInscripcionInit', this.windowName + '.loadDataInit()');
        }
        if (dialogsAplRegInscripcion.isByClean()) {
            this.limpiarAl();
            this.limpiarCa();
            this.limpiarRe();
            this.limpiarPr();        
        }
        dialogsAplRegInscripcion.show();
    },
    hide: function(){
        dialogsAplRegInscripcion.hide();
    },
    createMWs: function(){
        mwAplRegInscripcion = desktop.addMinWindow('A.R.Inscripcion', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsAplRegInscripcion.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    dialogsAplRegInscripcion_Init: function(){
		dialogsAplRegInscripcion.show();
		dialogsAplRegInscripcion.setMinimizeXY(0, 0);
        dialogsAplRegInscripcion.setCenterScreen();
        dialogsAplRegInscripcion.addSpace(0, 0, 20);
        dialogsAplRegInscripcion.addLn(1, 1, 1);
		dialogsAplRegInscripcion.setHeightCell(1,1,10); 
        dialogsAplRegInscripcion.addObjToDialog(tabsAplRegInscripcion, 2, 1);
    },
    
    tabsAplRegInscripcion_Init: function(){
        tabsAplRegInscripcion.selectTab(3);
		tabsAplRegInscripcion.selectTab(2);
		tabsAplRegInscripcion.selectTab(1);
        tabsAplRegInscripcion.showPanel(0);
        tabsAplRegInscripcion.setSizeText(12);
        tabsAplRegInscripcion.setFontFamily('Tw Cen MT Condensed Extra Bold');
        tabsAplRegInscripcion.setBorderWidthPanel(0);
        ///////////////////////////////////PANEL ALUMNOS///////////////////////////////////////////////    
        var c = container.create("c1");
        c.setObject(editsAplRegInsCi, 0, 7, 0, 0);
        editsAplRegInsCi.setSizeEdit(149);
        c.setObject(editsAplRegInsNombre, 40, 7, 0, 0);
        editsAplRegInsNombre.setSizeEdit(149);
        editsAplRegInsNombre.setMaxLength(50);
        c.setObject(editsAplRegInsApellido, 40, 7, 0, 0);
        editsAplRegInsApellido.setSizeEdit(149);
        editsAplRegInsApellido.setMaxLength(50);
        tabsAplRegInscripcion.addObjToGridPanel(0, c, 2, 1);
        var c2 = container.create("c2");
		c2.setObject(powerComboBoxAplRegInsCarrera, 0, 7, 0, 0);
		c2.setObject(powerComboBoxAplRegInsEdoPeriodo, 40, 7, 0, 0);
        c2.setObject(editsAplRegInsPeriodo, 40, 7, 0, 0);
        editsAplRegInsPeriodo.setSizeEdit(149);
        tabsAplRegInscripcion.addObjToGridPanel(0, c2, 3, 1);
        var c20 = container.create("c20");
        c20.setObject(powerComboBoxAplRegInsRegla, 0, 7, 0, 0);
		c20.setObject(powerComboBoxAplRegInsPermitir, 40, 7, 0, 0);
        tabsAplRegInscripcion.addObjToGridPanel(0, c20, 3, 1);
        var c4 = container.create("c4");
        c4.setObject(gridsAplRegInsAlumnos.getObject(), 0, 10, 0, 0);
        tabsAplRegInscripcion.addObjToGridPanel(0, c4, 6, 1);
        var c5 = container.create("c5");
        c5.setObject(imgButtonsAplRegInsAgregar.getObject(), 80, 10, 0, 0);
        c5.setObject(imgButtonsAplRegInsModificar.getObject(), 20, 10, 0, 0);
        c5.setObject(imgButtonsAplRegInsEliminar.getObject(), 20, 10, 0, 0);
        c5.setObject(imgButtonsAplRegInsLimpiar.getObject(), 20, 10, 0, 0);
        c5.setObject(imgButtonsAplRegInsBuscar.getObject(), 20, 10, 0, 0);
        c5.setObject(imgButtonsAplRegInsSalir.getObject(), 20, 10, 0, 0);
        tabsAplRegInscripcion.addObjToGridPanel(0, c5, 7, 1);
        imgButtonsAplRegInsAgregar.setDimension(90, 22);
        imgButtonsAplRegInsModificar.setDimension(90, 22);
        imgButtonsAplRegInsEliminar.setDimension(90, 22);
        imgButtonsAplRegInsBuscar.setDimension(90, 22);
        imgButtonsAplRegInsLimpiar.setDimension(90, 22);
        imgButtonsAplRegInsSalir.setDimension(90, 22);
        ////////////////////////////////////////PANEL CARRERA////////////////////////////////////////////        
        var c6 = container.create("c6");
        c6.setObject(pcbAplRegInsCarOrg, 0, 7, 0, 0);
        c6.setObject(pcbAplRegInsCarSuborg, 22, 7, 0, 0);
        c6.setObject(pcbAplRegInsCarCarrera, 22, 7, 0, 0);
        tabsAplRegInscripcion.addObjToGridPanel(1, c6, 2, 1);
        var c7 = container.create("c7");
		c7.setObject(pcbAplRegInsCarEdoPeriodo, 0, 7, 0, 0);
        c7.setObject(editsAplRegInsCarPeriodo, 22, 7, 0, 0);
        editsAplRegInsCarPeriodo.setSizeEdit(149);
        tabsAplRegInscripcion.addObjToGridPanel(1, c7, 3, 1);
        var c8 = container.create("c8");
        c8.setObject(powerComboBoxAplRegInsCarRegla, 0, 8, 0, 0);
		c8.setObject(powerComboBoxAplRegInsCarPermitir, 22, 8, 0, 0);
        tabsAplRegInscripcion.addObjToGridPanel(1, c8, 3, 1);
        var c9 = container.create("c9");
        c9.setObject(gridsAplRegInsCarrera.getObject(), 0, 9, 0, 0);
        tabsAplRegInscripcion.addObjToGridPanel(1, c9, 6, 1);
        var c10 = container.create("c10");
        c10.setObject(imgButtonsAplRegInsCarAgregar.getObject(), 80, 10, 0, 0);
        c10.setObject(imgButtonsAplRegInsCarModificar.getObject(), 20, 10, 0, 0);
        c10.setObject(imgButtonsAplRegInsCarEliminar.getObject(), 20, 10, 0, 0);
        c10.setObject(imgButtonsAplRegInsCarLimpiar.getObject(), 20, 10, 0, 0);
        c10.setObject(imgButtonsAplRegInsCarBuscar.getObject(), 20, 10, 0, 0);
        c10.setObject(imgButtonsAplRegInsCarSalir.getObject(), 20, 10, 0, 0);
        tabsAplRegInscripcion.addObjToGridPanel(1, c10, 7, 1);
        imgButtonsAplRegInsCarAgregar.setDimension(90, 22);
        imgButtonsAplRegInsCarModificar.setDimension(90, 22);
        imgButtonsAplRegInsCarEliminar.setDimension(90, 22);
        imgButtonsAplRegInsCarBuscar.setDimension(90, 22);
        imgButtonsAplRegInsCarLimpiar.setDimension(90, 22);
        imgButtonsAplRegInsCarSalir.setDimension(90, 22);
		////////////////////////////////////////PANEL REGLAMENTO DE REPITIENTES////////////////////////////////////////////        
        var c11 = container.create("c11");
        c11.setObject(powerComboBoxAplRegRepNPerAnteriores, 0, 10, 0, 0);
        powerComboBoxAplRegRepNPerAnteriores.setWidthCombo(20);
		powerComboBoxAplRegRepNPerAnteriores.addOptionAndSimpleValue(null, '1', '1');
        powerComboBoxAplRegRepNPerAnteriores.addOptionAndSimpleValue(null, '2', '2');  
		powerComboBoxAplRegRepNPerAnteriores.addOptionAndSimpleValue(null, '3', '3');
        powerComboBoxAplRegRepNPerAnteriores.addOptionAndSimpleValue(null, '4', '6');  
		powerComboBoxAplRegRepNPerAnteriores.addOptionAndSimpleValue(null, '5', '5');
        c11.setObject(editsAplRegRepMatAplazadas, 118, 10, 0, 0);
		editsAplRegRepMatAplazadas.setSizeEdit(25);
        tabsAplRegInscripcion.addObjToGridPanel(2, c11, 2, 1);
        var c12 = container.create("c12");
        c12.setObject(powerComboBoxAplRegRepNvlAca, 0, 7, 0, 0);
        c12.setObject(powerComboBoxAplRegRepEdoPeriodo, 10, 7, 0, 0);
        c12.setObject(editsAplRegRepPeriodo, 16, 7, 0, 0);
        editsAplRegRepPeriodo.setSizeEdit(149);
        tabsAplRegInscripcion.addObjToGridPanel(2, c12, 3, 1);
        var c13 = container.create("c13");
		c13.setObject(gridsAplRegRepitientes.getObject(), 0, 12, 0, 0);
        tabsAplRegInscripcion.addObjToGridPanel(2, c13, 4, 1);
        var c14 = container.create("c14");
        c14.setObject(imgButtonsAplRegRepAgregar.getObject(), 80, 10, 0, 0);
        c14.setObject(imgButtonsAplRegRepEliminar.getObject(), 20, 10, 0, 0);
        c14.setObject(imgButtonsAplRegRepLimpiar.getObject(), 20, 10, 0, 0);
        c14.setObject(imgButtonsAplRegRepReporte.getObject(), 20, 10, 0, 0);
        c14.setObject(imgButtonsAplRegRepBuscar.getObject(), 20, 10, 0, 0);
        c14.setObject(imgButtonsAplRegRepSalir.getObject(), 20, 10, 0, 0);
        tabsAplRegInscripcion.addObjToGridPanel(2, c14, 5, 1);
        imgButtonsAplRegRepAgregar.setDimension(90, 22);
        imgButtonsAplRegRepEliminar.setDimension(90, 22);
        imgButtonsAplRegRepLimpiar.setDimension(90, 22);
		imgButtonsAplRegRepReporte.setDimension(90, 22);
        imgButtonsAplRegRepBuscar.setDimension(90, 22);
        imgButtonsAplRegRepSalir.setDimension(90, 22);
		////////////////////////////////////////PANEL REGLAMENTO DE PROMEDIOS////////////////////////////////////////////        
		var c15 = container.create("c15");
        c15.setObject(editsAplRegProProEstablecisdos, 0, 10, 0, 0);
		editsAplRegProProEstablecisdos.setSizeEdit(20);
        tabsAplRegInscripcion.addObjToGridPanel(3, c15, 2, 1);
		var c16 = container.create("c16");
        c16.setObject(powerComboBoxAplRegProProNvlAca, 0, 7, 0, 0);
        c16.setObject(powerComboBoxAplRegProProEdoPeriodo, 10, 7, 0, 0);
        c16.setObject(editsAplRegProProPeriodo, 16, 7, 0, 0);
		editsAplRegProProPeriodo.setSizeEdit(149);
        tabsAplRegInscripcion.addObjToGridPanel(3, c16, 3, 1);
		var c17 = container.create("c17");
		c17.setObject(gridsAplRegProEstablecidos.getObject(), 0, 12, 0, 0);
        tabsAplRegInscripcion.addObjToGridPanel(3, c17, 4, 1);
		var c18 = container.create("c18");
        c18.setObject(imgButtonsAplRegProEstAgregar.getObject(), 80, 10, 0, 0);
        c18.setObject(imgButtonsAplRegProEstEliminar.getObject(), 20, 10, 0, 0);
        c18.setObject(imgButtonsAplRegProEstLimpiar.getObject(), 20, 10, 0, 0);
        c18.setObject(imgButtonsAplRegProEstReporte.getObject(), 20, 10, 0, 0);
        c18.setObject(imgButtonsAplRegProEstBuscar.getObject(), 20, 10, 0, 0);
        c18.setObject(imgButtonsAplRegProEstSalir.getObject(), 20, 10, 0, 0);
        tabsAplRegInscripcion.addObjToGridPanel(3, c18, 5, 1);
        imgButtonsAplRegProEstAgregar.setDimension(90, 22);
		imgButtonsAplRegProEstEliminar.setDimension(90, 22);
		imgButtonsAplRegProEstLimpiar.setDimension(90, 22);
        imgButtonsAplRegProEstReporte.setDimension(90, 22);
        imgButtonsAplRegProEstBuscar.setDimension(90, 22);
        imgButtonsAplRegProEstSalir.setDimension(90, 22);
        //READ ONLY EDITS
        editsAplRegInsPeriodo.readOnly(true);
        editsAplRegInsCarPeriodo.readOnly(true);
        editsAplRegProProPeriodo.readOnly(true);
        editsAplRegRepPeriodo.readOnly(true);
    },
	
    gridsAplRegInsAlumnos_Init: function(){
        gridsAplRegInsAlumnos.setFixColRow(false, true);
        gridsAplRegInsAlumnos.addTitleVectorX(['Cedula', 'Alumno', 'Periodo', 'Regla', 'Permitir','idRegla']);
        gridsAplRegInsAlumnos.showData();
        gridsAplRegInsAlumnos.setSizeCol(1, 100);
        gridsAplRegInsAlumnos.setSizeCol(2, 230);
        gridsAplRegInsAlumnos.setSizeCol(3, 158);
        gridsAplRegInsAlumnos.setSizeCol(4, 250);
        gridsAplRegInsAlumnos.setSizeCol(5, 60);
        gridsAplRegInsAlumnos.setSizeCol(6, 0);
        gridsAplRegInsAlumnos.hideCol(6);
    },
	
    gridsAplRegInsCarrera_Init: function(){
        gridsAplRegInsCarrera.setFixColRow(false, true);
        gridsAplRegInsCarrera.addTitleVectorX(['Suborganización','Carrera','Periodo','Regla', 'Permitir','idRegla','idSuborg','idCarr']);
        gridsAplRegInsCarrera.showData();
        gridsAplRegInsCarrera.setSizeCol(1, 180);
        gridsAplRegInsCarrera.setSizeCol(2, 230);
        gridsAplRegInsCarrera.setSizeCol(3, 140);
        gridsAplRegInsCarrera.setSizeCol(4, 188);
        gridsAplRegInsCarrera.setSizeCol(5, 60);
        gridsAplRegInsCarrera.setSizeCol(6, 0);
        gridsAplRegInsCarrera.setSizeCol(7,	0);
        gridsAplRegInsCarrera.setSizeCol(8, 0);
        gridsAplRegInsCarrera.hideCol(6);
        gridsAplRegInsCarrera.hideCol(7);
        gridsAplRegInsCarrera.hideCol(8);
    },
	
	gridsAplRegRepitientes_Init: function(){
        gridsAplRegRepitientes.setFixColRow(false, true);
        gridsAplRegRepitientes.addTitleVectorX(['Periodo','Cedula','Nombre','Apellido','Carrera']);
        gridsAplRegRepitientes.showData();
        gridsAplRegRepitientes.setSizeCol(1, 100);
        gridsAplRegRepitientes.setSizeCol(2, 100);
        gridsAplRegRepitientes.setSizeCol(3, 170);
        gridsAplRegRepitientes.setSizeCol(4, 170);
        gridsAplRegRepitientes.setSizeCol(5, 258);
	},
	
	gridsAplRegProEstablecidos_Init: function(){
        gridsAplRegProEstablecidos.setFixColRow(false, true);
        gridsAplRegProEstablecidos.addTitleVectorX(['Cedula','Nombre','Apellido','Carrera','Promedio']);
        gridsAplRegProEstablecidos.showData();
        gridsAplRegProEstablecidos.setSizeCol(1, 100);
        gridsAplRegProEstablecidos.setSizeCol(2, 100);
        gridsAplRegProEstablecidos.setSizeCol(3, 170);
        gridsAplRegProEstablecidos.setSizeCol(4, 170);
        gridsAplRegProEstablecidos.setSizeCol(5, 258);
	},
	
    create: function(){
        dialogsAplRegInscripcion = dialogs.create('dialogsAplRegInscripcion', 0, 0, 846, 409, 'ASIGNAR REGLA DE INSCRIPCIÓN');
        dialogsAplRegInscripcion.setAdjY(20);
        tabsAplRegInscripcion = tabs.create('tabsAplRegInscripcion', 816, 360, ['ALUMNO', 'CARRERA','REPITIENTE','PROMEDIO']);
////////////////////////////////PANEL ALUMNOS////////////////////////////////////// //////////////////////////
        editsAplRegInsCi = edits.create('editsAplRegInsCi', 'editsAplRegInsCi', 'C.i. (*):', 1,90, 'normal');
        editsAplRegInsCi.setFieldFind(true);
        editsAplRegInsCi.setValidInteger();
        editsAplRegInsNombre = edits.create('editsAplRegInsNombre', 'editsAplRegInsNombre', 'Nombre (*):', 1,115, 'normal');
        editsAplRegInsNombre.setValidEmpty();
        editsAplRegInsNombre.setFieldFind(true);
        editsAplRegInsApellido = edits.create('editsAplRegInsApellido', 'editsAplRegInsApellido', 'Apellido (*):', 1,70, 'nromal');
        editsAplRegInsApellido.setValidEmpty();
        editsAplRegInsApellido.setFieldFind(true);
        powerComboBoxAplRegInsCarrera = powerComboBox.create('powerComboBoxAplRegInsCarrera', 'powerComboBoxAplRegInsCarrera', 'Carrera (+):', 1,90);
        powerComboBoxAplRegInsCarrera.setValidEmpty();
        powerComboBoxAplRegInsCarrera.enableReadOnlyEditor();
        powerComboBoxAplRegInsCarrera.addEmptyOption();
        powerComboBoxAplRegInsEdoPeriodo = powerComboBox.create('powerComboBoxAplRegInsEdoPeriodo', 'powerComboBoxAplRegInsEdoPeriodo', 'Estado Periodo (^):', 1,115);
        powerComboBoxAplRegInsEdoPeriodo.setValidEmpty();
        powerComboBoxAplRegInsEdoPeriodo.enableReadOnlyEditor();
        powerComboBoxAplRegInsEdoPeriodo.addEmptyOption();
        editsAplRegInsPeriodo = edits.create('editsAplRegInsPeriodo','editsAplRegInsPeriodo','Periodo:',1,70,'normal');
        editsAplRegInsPeriodo.setValidEmpty();
        powerComboBoxAplRegInsRegla = powerComboBox.create('powerComboBoxAplRegInsRegla', 'powerComboBoxAplRegInsRegla', 'Regla (*):', 2,89);
        powerComboBoxAplRegInsRegla.setValidEmpty();
        powerComboBoxAplRegInsRegla.enableReadOnlyEditor();
        powerComboBoxAplRegInsRegla.addEmptyOption();
        powerComboBoxAplRegInsRegla.setFieldFind(true);
        powerComboBoxAplRegInsPermitir = powerComboBox.create('powerComboBoxAplRegInsPermitir', 'powerComboBoxAplRegInsPermitir', 'Permitir (*):', 2,114);
        powerComboBoxAplRegInsPermitir.setValidEmpty();
        powerComboBoxAplRegInsPermitir.enableReadOnlyEditor();
        powerComboBoxAplRegInsPermitir.addEmptyOption();
        powerComboBoxAplRegInsPermitir.setWidthCombo(20);
        powerComboBoxAplRegInsPermitir.addOptionAndSimpleValue(null, 'SI', 'SI');
        powerComboBoxAplRegInsPermitir.addOptionAndSimpleValue(null, 'NO', 'NO');
        powerComboBoxAplRegInsPermitir.setFieldFind(true);
        powerComboBoxAplRegInsPermitir.setDataType('string');
        gridsAplRegInsAlumnos = grids.create('gridsAplRegInsAlumnos', 10, 6);
        imgButtonsAplRegInsAgregar = imgButtons.create('imgButtonsAplRegInsAgregar', 'Agregar', 'ok.png');
        imgButtonsAplRegInsModificar = imgButtons.create('imgButtonsAplRegInsModificar', 'Modificar', 'icono_modificar.png');
        imgButtonsAplRegInsModificar.setDisable();
        imgButtonsAplRegInsEliminar = imgButtons.create('imgButtonsAplRegInsEliminar', 'Eliminar', 'eliminar.png');
        imgButtonsAplRegInsEliminar.setDisable();
        imgButtonsAplRegInsBuscar = imgButtons.create('imgButtonsAplRegInsBuscar', 'Buscar', 'icono_buscar.png');
        imgButtonsAplRegInsLimpiar = imgButtons.create('imgButtonsAplRegInsLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsAplRegInsSalir = imgButtons.create('imgButtonsAplRegInsSalir', 'Salir', 'salir.png');
///////////////////////////////////////////PANEL CARRERA////////////////////////////////////////////////////////
        pcbAplRegInsCarOrg = powerComboBox.create('pcbAplRegInsCarOrg', 'pcbAplRegInsCarOrg', 'Organización (+):', 2,112);
        pcbAplRegInsCarOrg.setValidEmpty();
        pcbAplRegInsCarOrg.enableReadOnlyEditor();
        pcbAplRegInsCarOrg.addEmptyOption();
        pcbAplRegInsCarSuborg = powerComboBox.create('pcbAplRegInsCarSuborg', 'pcbAplRegInsCarSuborg', 'Suborganización (^):', 2,122);
        pcbAplRegInsCarSuborg.setValidEmpty();
        pcbAplRegInsCarSuborg.setFieldFind(true);
        pcbAplRegInsCarSuborg.enableReadOnlyEditor();
        pcbAplRegInsCarSuborg.addEmptyOption();
        pcbAplRegInsCarCarrera = powerComboBox.create('pcbAplRegInsCarCarrera', 'pcbAplRegInsCarCarrera', 'Carrera (^):', 2,73);
        pcbAplRegInsCarCarrera.setValidEmpty();
        pcbAplRegInsCarCarrera.setFieldFind(true);
        pcbAplRegInsCarCarrera.enableReadOnlyEditor();
        pcbAplRegInsCarCarrera.addEmptyOption();
        pcbAplRegInsCarEdoPeriodo = powerComboBox.create('pcbAplRegInsCarEdoPeriodo', 'pcbAplRegInsCarEdoPeriodo', 'Estado Periodo (+):', 2,112);
        pcbAplRegInsCarEdoPeriodo.setValidEmpty();
        pcbAplRegInsCarEdoPeriodo.enableReadOnlyEditor();
        pcbAplRegInsCarEdoPeriodo.addEmptyOption();
        editsAplRegInsCarPeriodo = edits.create('editsAplRegInsCarPeriodo','editsAplRegInsCarPeriodo','Periodo (^):',1,122,'normal');
        editsAplRegInsCarPeriodo.setValidEmpty();
        
        powerComboBoxAplRegInsCarRegla = powerComboBox.create('powerComboBoxAplRegInsCarRegla', 'powerComboBoxAplRegInsCarRegla', 'Regla (*):', 2,112);
        powerComboBoxAplRegInsCarRegla.setValidEmpty();
        powerComboBoxAplRegInsCarRegla.enableReadOnlyEditor();
        powerComboBoxAplRegInsCarRegla.addEmptyOption();
        powerComboBoxAplRegInsCarRegla.setFieldFind(true);
        powerComboBoxAplRegInsCarPermitir = powerComboBox.create('powerComboBoxAplRegInsCarPermitir', 'powerComboBoxAplRegInsCarPermitir', 'Permitir (*):', 2,120);
        powerComboBoxAplRegInsCarPermitir.setValidEmpty();
        powerComboBoxAplRegInsCarPermitir.enableReadOnlyEditor();
        powerComboBoxAplRegInsCarPermitir.addEmptyOption();
        powerComboBoxAplRegInsCarPermitir.setWidthCombo(20);
        powerComboBoxAplRegInsCarPermitir.addOptionAndSimpleValue(null, 'SI', 'SI');
        powerComboBoxAplRegInsCarPermitir.addOptionAndSimpleValue(null, 'NO', 'NO');  
        powerComboBoxAplRegInsCarPermitir.setFieldFind(true);
        powerComboBoxAplRegInsCarPermitir.setDataType('string');
		gridsAplRegInsCarrera = grids.create('gridsAplRegInsCarrera', 10, 8);
		imgButtonsAplRegInsCarAgregar = imgButtons.create('imgButtonsAplRegInsCarAgregar', 'Agregar', 'ok.png');
        imgButtonsAplRegInsCarModificar = imgButtons.create('imgButtonsAplRegInsCarModificar', 'Modificar', 'icono_modificar.png');
        imgButtonsAplRegInsCarModificar.setDisable();
        imgButtonsAplRegInsCarEliminar = imgButtons.create('imgButtonsAplRegInsCarEliminar', 'Eliminar', 'eliminar.png');
        imgButtonsAplRegInsCarEliminar.setDisable();
        imgButtonsAplRegInsCarLimpiar = imgButtons.create('imgButtonsAplRegInsCarLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsAplRegInsCarBuscar = imgButtons.create('imgButtonsAplRegInsCarBuscar', 'Buscar', 'icono_buscar.png');
        imgButtonsAplRegInsCarSalir = imgButtons.create('imgButtonsAplRegInsCarSalir', 'Salir', 'salir.png');
////////////////////////////////REGLAMENTO REPITIENTES////////////////////////////////////// //////////////////////////
        powerComboBoxAplRegRepNPerAnteriores = powerComboBox.create('powerComboBoxAplRegRepNPerAnteriores', 'powerComboBoxAplRegRepNPerAnteriores', 'Nº Periodos Anteriores:', 1,140);
        powerComboBoxAplRegRepNPerAnteriores.setValidEmpty();
        powerComboBoxAplRegRepNPerAnteriores.addEmptyOption();
        editsAplRegRepMatAplazadas = edits.create('editsAplRegRepMatAplazadas', 'editsAplRegRepMatAplazadas', 'Materias Aplazadas %:', 1,134, 'normal');
        editsAplRegRepMatAplazadas.setValidEmpty();
        powerComboBoxAplRegRepNvlAca = powerComboBox.create('powerComboBoxAplRegRepNvlAca', 'powerComboBoxAplRegRepNvlAca', 'Nivel Académico (+):', 2,139);
        powerComboBoxAplRegRepNvlAca.setValidEmpty();
        powerComboBoxAplRegRepNvlAca.enableReadOnlyEditor();
        powerComboBoxAplRegRepNvlAca.addEmptyOption();
        powerComboBoxAplRegRepEdoPeriodo = powerComboBox.create('powerComboBoxAplRegRepEdoPeriodo', 'powerComboBoxAplRegRepEdoPeriodo', 'Estado Periodo (^):', 2,134);
        powerComboBoxAplRegRepEdoPeriodo.setValidEmpty();
        powerComboBoxAplRegRepEdoPeriodo.enableReadOnlyEditor();
        powerComboBoxAplRegRepEdoPeriodo.addEmptyOption();
        editsAplRegRepPeriodo = edits.create('editsAplRegRepPeriodo','editsAplRegRepPeriodo','Periodo:',1,53,'normal');
        editsAplRegRepPeriodo.setValidEmpty();
        
        gridsAplRegRepitientes = grids.create('gridsAplRegRepitientes', 11, 5);
        imgButtonsAplRegRepAgregar = imgButtons.create('imgButtonsAplRegRepAgregar', 'Agregar', 'ok.png');
        imgButtonsAplRegRepEliminar = imgButtons.create('imgButtonsAplRegRepEliminar', 'Eliminar', 'eliminar.png');
        imgButtonsAplRegRepEliminar.setDisable();
        imgButtonsAplRegRepLimpiar = imgButtons.create('imgButtonsAplRegRepLimpiar', 'Limpiar', 'limpiar.png');
		imgButtonsAplRegRepReporte = imgButtons.create('imgButtonsAplRegRepReporte', 'Reporte', 'print.png');
        imgButtonsAplRegRepBuscar = imgButtons.create('imgButtonsAplRegRepBuscar', 'Buscar', 'icono_buscar.png');
        imgButtonsAplRegRepSalir = imgButtons.create('imgButtonsAplRegRepSalir', 'Salir', 'salir.png');
////////////////////////////////REGLAMENTO DE PROMEDIOS////////////////////////////////////// //////////////////////////
        editsAplRegProProEstablecisdos = edits.create('editsAplRegProProEstablecisdos', 'editsAplRegProProEstablecisdos', 'Promedio Establecido:', 1,140, 'normal');
        editsAplRegProProEstablecisdos.setValidEmpty();
        powerComboBoxAplRegProProNvlAca = powerComboBox.create('powerComboBoxAplRegProProNvlAca', 'powerComboBoxAplRegProProNvlAca', 'Nivel Académico (+):', 2,139);
        powerComboBoxAplRegProProNvlAca.setValidEmpty();
        powerComboBoxAplRegProProNvlAca.enableReadOnlyEditor();
        powerComboBoxAplRegProProNvlAca.addEmptyOption();
        powerComboBoxAplRegProProEdoPeriodo = powerComboBox.create('powerComboBoxAplRegProProEdoPeriodo', 'powerComboBoxAplRegProProEdoPeriodo', 'Estado Periodo (^):', 2,134);
        powerComboBoxAplRegProProEdoPeriodo.setValidEmpty();
        powerComboBoxAplRegProProEdoPeriodo.enableReadOnlyEditor();
        powerComboBoxAplRegProProEdoPeriodo.addEmptyOption();
        editsAplRegProProPeriodo = edits.create('editsAplRegProProPerPeriodo','editsAplRegProProPerPeriodo','Periodo:',1,53,'normal');
        editsAplRegProProPeriodo.setValidEmpty();
        gridsAplRegProEstablecidos = grids.create('gridsAplRegProEstablecidos', 11, 5);
        imgButtonsAplRegProEstAgregar = imgButtons.create('imgButtonsAplRegProEstAgregar', 'Agregar', 'ok.png');
        imgButtonsAplRegProEstEliminar = imgButtons.create('imgButtonsAplRegProEstEliminar', 'Eliminar', 'eliminar.png');
        imgButtonsAplRegProEstEliminar.setDisable();
        imgButtonsAplRegProEstLimpiar = imgButtons.create('imgButtonsAplRegProEstLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsAplRegProEstBuscar = imgButtons.create('imgButtonsAplRegProEstBuscar', 'Buscar', 'icono_buscar.png');
		imgButtonsAplRegProEstReporte = imgButtons.create('imgButtonsAplRegProEstReporte', 'Reporte', 'print.png');
        imgButtonsAplRegProEstSalir = imgButtons.create('imgButtonsAplRegProEstSalir', 'Salir', 'salir.png');
    },

    init: function(){
        this.create();
        this.setEvents();
        this.dialogsAplRegInscripcion_Init();
        this.tabsAplRegInscripcion_Init();
        this.gridsAplRegInsAlumnos_Init();
        this.gridsAplRegInsCarrera_Init();
		this.gridsAplRegRepitientes_Init();
		this.gridsAplRegProEstablecidos_Init();
        this.createMWs(); 
    },
    
    resetElements : function(element) {
        var rlx = xmlStructs.createRecordList("rlx");

        if (element == 'carralum') {
			powerComboBoxAplRegInsEdoPeriodo.setSelectedIndex(0);
            editsAplRegInsPeriodo.setValue("");
            powerComboBoxAplRegInsPermitir.setSelectedIndex(0);
            powerComboBoxAplRegInsRegla.setSelectedIndex(0);
        	gridsAplRegInsAlumnos.clean();
        	imgButtonsAplRegInsAgregar.setEnable();
        	imgButtonsAplRegInsModificar.setDisable();
        	imgButtonsAplRegInsEliminar.setDisable();
		}
		else if (element == 'perAlumno') {
			if (powerComboBoxAplRegInsCarrera.valid(dialogsAplRegInscripcion)) {
	            editsAplRegInsPeriodo.setValue("");
	            powerComboBoxAplRegInsPermitir.setSelectedIndex(0);
	            powerComboBoxAplRegInsRegla.setSelectedIndex(0);
	        	gridsAplRegInsAlumnos.clean();
	        	imgButtonsAplRegInsAgregar.setEnable();
	        	imgButtonsAplRegInsModificar.setDisable();
	        	imgButtonsAplRegInsEliminar.setDisable();
	            rlx.add('reg', powerComboBoxAplRegInsEdoPeriodo);
	    		rlx.add('reg', powerComboBoxAplRegInsCarrera.setModeReturnGetText(2));		
	        	Tool.cnnSrv('MantObject', 'getPeriodo', this.windowName + '.loadDataPerAl()', rlx);
			}
        	else
        		powerComboBoxAplRegInsEdoPeriodo.setSelectedIndex(0);
    	}
		else if (element == 'org') {
			Tool.rstPwrCmb(pcbAplRegInsCarSuborg);
			Tool.rstPwrCmb(pcbAplRegInsCarCarrera);
	        pcbAplRegInsCarEdoPeriodo.setSelectedIndex(0);
	        editsAplRegInsCarPeriodo.setValue("");
	        powerComboBoxAplRegInsCarRegla.setSelectedIndex(0);
	        powerComboBoxAplRegInsCarPermitir.setSelectedIndex(0);
	        gridsAplRegInsCarrera.clean();
	        imgButtonsAplRegInsCarAgregar.setEnable();
	        imgButtonsAplRegInsCarModificar.setDisable();
	        imgButtonsAplRegInsCarEliminar.setDisable();
			Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsAplRegInscripcion, pcbAplRegInsCarSuborg, 1, 2, pcbAplRegInsCarOrg);		
		}
		else if (element == 'suborg') {
			Tool.rstPwrCmb(pcbAplRegInsCarCarrera);
	        pcbAplRegInsCarEdoPeriodo.setSelectedIndex(0);
	        editsAplRegInsCarPeriodo.setValue("");
	        powerComboBoxAplRegInsCarRegla.setSelectedIndex(0);
	        powerComboBoxAplRegInsCarPermitir.setSelectedIndex(0);
	        gridsAplRegInsCarrera.clean();
	        imgButtonsAplRegInsCarAgregar.setEnable();
	        imgButtonsAplRegInsCarModificar.setDisable();
	        imgButtonsAplRegInsCarEliminar.setDisable();
			Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsAplRegInscripcion, pcbAplRegInsCarCarrera, -1, 3, pcbAplRegInsCarSuborg);		
		}
		else if (element == 'carrcarr') {
	        pcbAplRegInsCarEdoPeriodo.setSelectedIndex(0);
	        editsAplRegInsCarPeriodo.setValue("");
	        powerComboBoxAplRegInsCarRegla.setSelectedIndex(0);
	        powerComboBoxAplRegInsCarPermitir.setSelectedIndex(0);
	        gridsAplRegInsCarrera.clean();
	        imgButtonsAplRegInsCarAgregar.setEnable();
	        imgButtonsAplRegInsCarModificar.setDisable();
	        imgButtonsAplRegInsCarEliminar.setDisable();
		}
		else if (element == 'perCarrera') {
            editsAplRegInsCarPeriodo.setValue("");
            powerComboBoxAplRegInsCarRegla.enable();
	        powerComboBoxAplRegInsCarRegla.setSelectedIndex(0);
	        powerComboBoxAplRegInsCarPermitir.setSelectedIndex(0);
            gridsAplRegInsCarrera.clean();
            imgButtonsAplRegInsCarAgregar.setEnable();
            imgButtonsAplRegInsCarModificar.setDisable();
            imgButtonsAplRegInsCarEliminar.setDisable();
			if (pcbAplRegInsCarCarrera.getOption() != "") {
	            rlx.add('reg', pcbAplRegInsCarEdoPeriodo);
	    		rlx.add('reg', pcbAplRegInsCarCarrera.setModeReturnGetText(5));		
		        Tool.cnnSrv('MantObject', 'getPeriodo', this.windowName + '.loadDataPerCa()', rlx);
			}
    	}
		else if (element == 'repnvl') {
			powerComboBoxAplRegRepEdoPeriodo.setSelectedIndex(0);
			editsAplRegRepPeriodo.setValue("");
		}
		else if (element == 'repper') {
        	editsAplRegRepPeriodo.setValue("");
            if (powerComboBoxAplRegRepNvlAca.valid(dialogsAplRegInscripcion)) {
                gridsAplRegRepitientes.clean();
                imgButtonsAplRegRepAgregar.setEnable();
                imgButtonsAplRegRepEliminar.setDisable();
                rlx.add('reg', powerComboBoxAplRegRepEdoPeriodo);
        		rlx.add('reg', powerComboBoxAplRegRepNvlAca);		
            	Tool.cnnSrv('MantObject', 'getPeriodo', this.windowName + '.loadDataPerRe()', rlx);
            }
            else 
            	powerComboBoxAplRegRepEdoPeriodo.setSelectedIndex(0);
    	}
		else if (element == 'pronvl') {
			powerComboBoxAplRegProProEdoPeriodo.setSelectedIndex(0);
			editsAplRegProProPeriodo.setValue("");
		}
		else if (element == 'proper') {
        	editsAplRegProProPeriodo.setValue("");
            if (powerComboBoxAplRegProProNvlAca.valid(dialogsAplRegInscripcion)) {
            	gridsAplRegProEstablecidos.clean();
            	imgButtonsAplRegProEstAgregar.setEnable();
            	imgButtonsAplRegProEstEliminar.setDisable();
            	rlx.add('reg', powerComboBoxAplRegProProEdoPeriodo);
            	rlx.add('reg', powerComboBoxAplRegProProNvlAca);		
            	Tool.cnnSrv('MantObject', 'getPeriodo', this.windowName + '.loadDataPerPr()', rlx);
            }
            else
            	powerComboBoxAplRegProProEdoPeriodo.setSelectedIndex(0);
    	}
	},

    loadDataPerAl: function() {
    	this.idPeriodo = json('getPeriodo').data[0];
    	Tool.loadEditData(dialogsAplRegInscripcion, editsAplRegInsPeriodo, 1, json('getPeriodo'));   	
    },
    
    loadDataPerCa: function() {
    	this.idPeriodo = json('getPeriodo').data[0];
    	Tool.loadEditData(dialogsAplRegInscripcion, editsAplRegInsCarPeriodo, 1, json('getPeriodo'));   	
    },

    loadDataPerRe: function() {
    	this.idPeriodo = json('getPeriodo').data[0];
    	Tool.loadEditData(dialogsAplRegInscripcion, editsAplRegRepPeriodo, 1, json('getPeriodo'));   	
    },

    loadDataPerPr: function() {
    	this.idPeriodo = json('getPeriodo').data[0];
    	Tool.loadEditData(dialogsAplRegInscripcion, editsAplRegProProPeriodo, 1, json('getPeriodo'));   	
    },

    setEvents: function() {
//ALUMNO    	
        editsAplRegInsCi.onEnter(this.windowName + ".buscarAl()");
        editsAplRegInsCi.onChange(this.windowName + ".limpiarFind(1)");
        editsAplRegInsNombre.onEnter(this.windowName + ".buscarAl()");
        editsAplRegInsNombre.onChange(this.windowName + ".limpiarFind(2)");
        editsAplRegInsApellido.onEnter(this.windowName + ".buscarAl()");
        editsAplRegInsApellido.onChange(this.windowName + ".limpiarFind(3)");
        powerComboBoxAplRegInsCarrera.onChange(this.windowName + ".resetElements('carralum')");
        powerComboBoxAplRegInsEdoPeriodo.onChange(this.windowName + ".resetElements('perAlumno')");
        gridsAplRegInsAlumnos.onClickCells(this.windowName + ".setDataAl()");
        imgButtonsAplRegInsAgregar.onClick(this.windowName + ".coreUpdateAl('agregar')");
        imgButtonsAplRegInsModificar.onClick(this.windowName + ".coreUpdateAl('modificar')");
        imgButtonsAplRegInsEliminar.onClick(this.windowName + ".coreUpdateAl('eliminar')");
        imgButtonsAplRegInsBuscar.onClick(this.windowName + ".buscarAl()");
        imgButtonsAplRegInsLimpiar.onClick(this.windowName + ".limpiarAl()");
        imgButtonsAplRegInsSalir.onClick("dialogsAplRegInscripcion.close()");
//CARRERA
        pcbAplRegInsCarOrg.onChange(this.windowName + ".resetElements('org')");
        pcbAplRegInsCarSuborg.onChange(this.windowName + ".resetElements('suborg')");
        pcbAplRegInsCarCarrera.onChange(this.windowName + ".resetElements('carrcarr')");
        pcbAplRegInsCarEdoPeriodo.onChange(this.windowName + ".resetElements('perCarrera')");
        gridsAplRegInsCarrera.onClickCells(this.windowName + ".setDataCa()");
        imgButtonsAplRegInsCarAgregar.onClick(this.windowName + ".coreUpdateCa('agregar')");
        imgButtonsAplRegInsCarModificar.onClick(this.windowName + ".coreUpdateCa('modificar')");
        imgButtonsAplRegInsCarEliminar.onClick(this.windowName + ".coreUpdateCa('eliminar')");
        imgButtonsAplRegInsCarBuscar.onClick(this.windowName + ".buscarCa()");
        imgButtonsAplRegInsCarLimpiar.onClick(this.windowName + ".limpiarCa()");
        imgButtonsAplRegInsCarSalir.onClick('dialogsAplRegInscripcion.close()');
//REPITIENTE   
        powerComboBoxAplRegRepNvlAca.onChange(this.windowName + ".resetElements('repnvl')");
        powerComboBoxAplRegRepEdoPeriodo.onChange(this.windowName + ".resetElements('repper')");
        gridsAplRegRepitientes.onClickCells(this.windowName + ".setDataRe()");
        imgButtonsAplRegRepAgregar.onClick(this.windowName + ".coreUpdateRe('agregar')");
        imgButtonsAplRegRepEliminar.onClick(this.windowName + ".coreUpdateRe('eliminar')");
        imgButtonsAplRegRepLimpiar.onClick(this.windowName + ".limpiarRe()");
        imgButtonsAplRegRepReporte.onClick(this.windowName + ".reporteRe()");
        imgButtonsAplRegRepBuscar.onClick(this.windowName + ".buscarAl()");
        imgButtonsAplRegRepSalir.onClick('dialogsAplRegInscripcion.close()');
//PROMEDIO        
        editsAplRegProProEstablecisdos.onChange(this.windowName + ".validPr()");
        powerComboBoxAplRegProProNvlAca.onChange(this.windowName + ".resetElements('pronvl')");
        powerComboBoxAplRegProProEdoPeriodo.onChange(this.windowName + ".resetElements('proper')");
        gridsAplRegProEstablecidos.onClickCells(this.windowName + ".setDataPr()");
        imgButtonsAplRegProEstAgregar.onClick(this.windowName + ".coreUpdatePr('agregar')");
        imgButtonsAplRegProEstEliminar.onClick(this.windowName + ".coreUpdatePr('eliminar')");
        imgButtonsAplRegProEstLimpiar.onClick(this.windowName + ".limpiarPr()");
        imgButtonsAplRegProEstReporte.onClick(this.windowName + ".reportePr()");
        imgButtonsAplRegProEstBuscar.onClick(this.windowName + ".buscarPr()");
        imgButtonsAplRegProEstSalir.onClick('dialogsAplRegInscripcion.close()');
    },

    validPr : function() {
    	if (parseInt(editsAplRegProProEstablecisdos.getValue()) > parseInt(json('getMantRegNotaMax').data[0])) {
    		editsAplRegProProEstablecisdos.setValue("");
    		Alert.show('Debe ingresar un promedio no mayor a (' + json('getMantRegNotaMax').data[0] + ')pto.', 'SISTEMA', Alert.TYPE_INFO);
    	}
    },
    
    loadDataInit : function() {
		Tool.loadPowerComboData(dialogsAplRegInscripcion, pcbAplRegInsCarOrg, 0, 1, json('getData'));
		Tool.loadPowerComboData(dialogsAplRegInscripcion, powerComboBoxAplRegInsEdoPeriodo, 0, 1, json('getMantEstPeriodo'));
		Tool.loadPowerComboData(dialogsAplRegInscripcion, pcbAplRegInsCarEdoPeriodo, 0, 1, json('getMantEstPeriodo'));
		Tool.loadPowerComboData(dialogsAplRegInscripcion, powerComboBoxAplRegRepNvlAca, 0, 1, json('getMantNivAcademico'));
		Tool.loadPowerComboData(dialogsAplRegInscripcion, powerComboBoxAplRegRepEdoPeriodo, 0, 1, json('getMantEstPeriodo'));
		Tool.loadPowerComboData(dialogsAplRegInscripcion, powerComboBoxAplRegProProNvlAca, 0, 1, json('getMantNivAcademico'));
		Tool.loadPowerComboData(dialogsAplRegInscripcion, powerComboBoxAplRegProProEdoPeriodo, 0, 1, json('getMantEstPeriodo'));
		Tool.getContext(dialogsAplRegInscripcion, pcbAplRegInsCarOrg, pcbAplRegInsCarSuborg, pcbAplRegInsCarCarrera);
		Tool.loadPowerComboData(dialogsAplRegInscripcion, powerComboBoxAplRegInsRegla, 0, 1, json('getMantRegInscrip'));
		Tool.loadPowerComboData(dialogsAplRegInscripcion, powerComboBoxAplRegInsCarRegla, 0, 1, json('getMantRegInscripCarrera'));
    },
    
    limpiarAl: function(){
    	editsAplRegInsCi.hideId = -1;
        editsAplRegInsCi.setValue("");
        editsAplRegInsNombre.setValue("");
        editsAplRegInsApellido.setValue("");
        Tool.rstPwrCmb(powerComboBoxAplRegInsCarrera);
        powerComboBoxAplRegInsEdoPeriodo.setSelectedIndex(0);
        editsAplRegInsPeriodo.setValue("");
        powerComboBoxAplRegInsRegla.setSelectedIndex(0);
        powerComboBoxAplRegInsRegla.enable();
        powerComboBoxAplRegInsPermitir.setSelectedIndex(0);
        gridsAplRegInsAlumnos.clean();
        dialogsAplRegInscripcion.setMsg("");
        imgButtonsAplRegInsAgregar.setEnable();
        imgButtonsAplRegInsModificar.setDisable();
        imgButtonsAplRegInsEliminar.setDisable();
    },
    
    limpiarCa: function(){
        pcbAplRegInsCarOrg.setSelectedIndex(0);
        pcbAplRegInsCarSuborg.setSelectedIndex(0);
        pcbAplRegInsCarCarrera.setSelectedIndex(0);
        powerComboBoxAplRegInsCarRegla.setSelectedIndex(0);
        powerComboBoxAplRegInsCarRegla.enable();
        powerComboBoxAplRegInsCarPermitir.setSelectedIndex(0);
        pcbAplRegInsCarEdoPeriodo.setSelectedIndex(0);
        editsAplRegInsCarPeriodo.setValue("");
        gridsAplRegInsCarrera.clean();
        dialogsAplRegInscripcion.setMsg("");
        imgButtonsAplRegInsCarAgregar.setEnable();
        imgButtonsAplRegInsCarModificar.setDisable();
        imgButtonsAplRegInsCarEliminar.setDisable();
    },
    
    limpiarRe : function(){
    	powerComboBoxAplRegRepNPerAnteriores.setSelectedIndex(0);
    	editsAplRegRepMatAplazadas.setValue("");
    	powerComboBoxAplRegRepNvlAca.setSelectedIndex(0);
    	powerComboBoxAplRegRepEdoPeriodo.setSelectedIndex(0);
    	editsAplRegRepPeriodo.setValue("");
    	gridsAplRegRepitientes.clean();
        dialogsAplRegInscripcion.setMsg("");
    	imgButtonsAplRegRepAgregar.setEnable();
    	imgButtonsAplRegRepEliminar.setDisable();
    },
    
    limpiarPr : function(){
    	editsAplRegProProEstablecisdos.setValue("");
    	powerComboBoxAplRegProProNvlAca.setSelectedIndex(0);
    	powerComboBoxAplRegProProEdoPeriodo.setSelectedIndex(0);
    	editsAplRegProProPeriodo.setValue("");
    	gridsAplRegProEstablecidos.clean();
        dialogsAplRegInscripcion.setMsg("");
    	imgButtonsAplRegProEstAgregar.setEnable();
    	imgButtonsAplRegProEstEliminar.setDisable();
    },
    
    limpiarCoreUpdateAl: function(methodName){
        powerComboBoxAplRegInsPermitir.setSelectedIndex(0);
        powerComboBoxAplRegInsRegla.setSelectedIndex(0);
        dialogsAplRegInscripcion.setMsg("");
        powerComboBoxAplRegInsRegla.enable();
        imgButtonsAplRegInsAgregar.setEnable();
        imgButtonsAplRegInsModificar.setDisable();
        imgButtonsAplRegInsEliminar.setDisable();
        if (methodName == "eliminar" && gridsAplRegInsAlumnos.getTotalRecord() == 1) { 
            gridsAplRegInsAlumnos.clean();
        	dlgWait.hide();
        }
        else
        	this.buscarAl();
    },
    
    limpiarCoreUpdateCa: function(methodName){
    	powerComboBoxAplRegInsCarPermitir.setSelectedIndex(0);
    	powerComboBoxAplRegInsCarRegla.setSelectedIndex(0);
        dialogsAplRegInscripcion.setMsg("");
        powerComboBoxAplRegInsCarRegla.enable();
        imgButtonsAplRegInsCarAgregar.setEnable();
        imgButtonsAplRegInsCarModificar.setDisable();
        imgButtonsAplRegInsCarEliminar.setDisable();
        if (methodName == "eliminar" && gridsAplRegInsCarrera.getTotalRecord() == 1) { 
        	gridsAplRegInsCarrera.clean();
        	dlgWait.hide();
        }
        else
        	this.buscarCa();
    },

    limpiarCoreUpdatePr: function(){
    	
    },
    
    limpiarCoreUpdateRe: function(){
    	
    },

    limpiarFind: function(ix){
    	editsAplRegInsCi.hideId = -1;
    	
        if (this.booCleanFind) {
	    	powerComboBoxAplRegInsCarrera.setSelectedIndex(0);
	        powerComboBoxAplRegInsEdoPeriodo.setSelectedIndex(0);
	        editsAplRegInsPeriodo.setValue("");
	        powerComboBoxAplRegInsPermitir.setSelectedIndex(0);
	        powerComboBoxAplRegInsRegla.setSelectedIndex(0);
	    	gridsAplRegInsAlumnos.clean();
	    	imgButtonsAplRegInsAgregar.setEnable();
	    	imgButtonsAplRegInsModificar.setDisable();
	    	imgButtonsAplRegInsEliminar.setDisable();
	    	this.booCleanFind = false;
        }
        
        switch (ix) {
            case 1:
                editsAplRegInsNombre.setValue("");
                editsAplRegInsApellido.setValue("");
                break;
            case 2:
                editsAplRegInsCi.setValue("");
                editsAplRegInsApellido.setValue("");
                editsAplRegInsNombre.setFocus();
                break;
            default:
                editsAplRegInsCi.setValue("");
                editsAplRegInsNombre.setValue("");
                break;
        }
    },

   	loadDataCarreraAl : function() {
  		Tool.loadPowerComboData(dialogsAplRegInscripcion, powerComboBoxAplRegInsCarrera, -1, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			powerComboBoxAplRegInsCarrera.setSelectedIndex(1); 
  		}
   	},
    
	buscarAl: function() {
		var rlx = xmlStructs.createRecordList("rlx");
		
        powerComboBoxAplRegInsRegla.enable();
		imgButtonsAplRegInsAgregar.setEnable();
		imgButtonsAplRegInsModificar.setDisable();
		imgButtonsAplRegInsEliminar.setDisable();	
		gridsAplRegInsAlumnos.clean();
		if ((editsAplRegInsCi.getValue() != '' && editsAplRegInsNombre.getValue() != '' && editsAplRegInsApellido.getValue() != '')) {
			if (powerComboBoxAplRegInsCarrera.getText() == "" || powerComboBoxAplRegInsCarrera.getText() == "-1") {
				rlx.add('reg', editsAplRegInsCi);
				Tool.cnnSrv('MantObject', 'getCarrera', this.windowName + '.loadDataCarreraAl()', rlx);
			}
			else {
				if (powerComboBoxAplRegInsEdoPeriodo.valid(dialogsAplRegInscripcion))
					Tool.getGridData('MantObject', 'getAplRegInsAlumno', dialogsAplRegInscripcion, gridsAplRegInsAlumnos, false, new MiniDataSet(editsAplRegInsCi.hideId, 'int', false), powerComboBoxAplRegInsRegla, powerComboBoxAplRegInsRegla, new MiniDataSet(this.idPeriodo, 'int', false), powerComboBoxAplRegInsPermitir, powerComboBoxAplRegInsPermitir);
			}
		}
		else if (editsAplRegInsCi.getValue() != '' || editsAplRegInsNombre.getValue() != '' || editsAplRegInsApellido.getValue() != '') {
			this.booCleanFind = true;
        	ResuBusqueda.setObjectExtFnc(editsAplRegInsCi, editsAplRegInsNombre, editsAplRegInsApellido, this.windowName + ".buscarAl()");
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsAplRegInsCi, editsAplRegInsCi, editsAplRegInsNombre, editsAplRegInsNombre, editsAplRegInsApellido, editsAplRegInsApellido);
		}
		else {
			Alert.show('Debe ingresar al menos: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
	},
    
    buscarCa: function(){
    	gridsAplRegInsCarrera.clean();
    	powerComboBoxAplRegInsCarRegla.enable();
        imgButtonsAplRegInsCarAgregar.setEnable();
		imgButtonsAplRegInsCarModificar.setDisable();
		imgButtonsAplRegInsCarEliminar.setDisable();	
        if (pcbAplRegInsCarOrg.valid(dialogsAplRegInscripcion))
        	if (pcbAplRegInsCarEdoPeriodo.valid(dialogsAplRegInscripcion))
        		Tool.getGridData('MantObject', 'getAplRegInsCarrera', dialogsAplRegInscripcion, gridsAplRegInsCarrera, false, pcbAplRegInsCarOrg, pcbAplRegInsCarSuborg, pcbAplRegInsCarSuborg, pcbAplRegInsCarCarrera.setModeReturnGetText(2), pcbAplRegInsCarCarrera.setModeReturnGetText(2), powerComboBoxAplRegInsCarRegla, powerComboBoxAplRegInsCarRegla, pcbAplRegInsCarEdoPeriodo, powerComboBoxAplRegInsCarPermitir, powerComboBoxAplRegInsCarPermitir);
    },
    
    buscarRe: function(){
    	
    },

    buscarPr: function(){
    	
    },
    
    setDataAl: function(){
        if (gridsAplRegInsAlumnos.getDataCell(1) != "") {
            powerComboBoxAplRegInsPermitir.findOption(gridsAplRegInsAlumnos.getDataCell(5));
            powerComboBoxAplRegInsRegla.findOption(gridsAplRegInsAlumnos.getDataCell(6));
            powerComboBoxAplRegInsRegla.disable();
            imgButtonsAplRegInsAgregar.setDisable();
            imgButtonsAplRegInsModificar.setEnable();
            imgButtonsAplRegInsEliminar.setEnable();
        }
    },

    setDataCa: function(){
        if (gridsAplRegInsCarrera.getDataCell(1) != "") {
    		var rlx = xmlStructs.createRecordList("rlx");

    		pcbAplRegInsCarSuborg.findOption(gridsAplRegInsCarrera.getDataCell(7));
            powerComboBoxAplRegInsCarPermitir.findOption(gridsAplRegInsCarrera.getDataCell(5));
            powerComboBoxAplRegInsCarRegla.findOption(gridsAplRegInsCarrera.getDataCell(6));
            powerComboBoxAplRegInsCarRegla.disable();
            imgButtonsAplRegInsCarAgregar.setDisable();
            imgButtonsAplRegInsCarModificar.setEnable();
            imgButtonsAplRegInsCarEliminar.setEnable();
            rlx.add('reg', pcbAplRegInsCarSuborg);
            rlx.add('reg', pcbAplRegInsCarEdoPeriodo);
	        Tool.cnnSrv('MantObject', 'getAplRegInsCarPer', this.windowName + '.loadDataCarPer()', rlx);
        }
    },

    loadDataCarPer: function(){
  		Tool.loadPowerComboData(dialogsAplRegInscripcion, pcbAplRegInsCarCarrera, -1, 3, json('getMantenimientodeCarrera'));
  		pcbAplRegInsCarCarrera.findOption(gridsAplRegInsCarrera.getDataCell(8), 2);
  		this.idPeriodo = json('getPeriodo').data[0];
    	Tool.loadEditData(dialogsAplRegInscripcion, editsAplRegInsCarPeriodo, 1, json('getPeriodo'));   
    },
    
    setDataRe: function(){
    	
    },
    
    setDataPr: function(){
    	
    },
    
    coreUpdateAl: function(methodName){
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsAplRegInsCi.valid(dialogsAplRegInscripcion))
    		if (editsAplRegInsNombre.valid(dialogsAplRegInscripcion))
    			if (editsAplRegInsApellido.valid(dialogsAplRegInscripcion))
    				if (powerComboBoxAplRegInsCarrera.valid(dialogsAplRegInscripcion))
    					if (powerComboBoxAplRegInsEdoPeriodo.valid(dialogsAplRegInscripcion))
    						if (editsAplRegInsPeriodo.valid(dialogsAplRegInscripcion))
    							if (powerComboBoxAplRegInsRegla.valid(dialogsAplRegInscripcion))
    								if (powerComboBoxAplRegInsPermitir.valid(dialogsAplRegInscripcion)) {
										if (methodName != "eliminar") {
											rlx.add('reg',powerComboBoxAplRegInsPermitir);
	    									rlx.addInt('reg',editsAplRegInsCi.hideId);
											rlx.addInt('reg',this.idPeriodo);
											rlx.add('reg',powerComboBoxAplRegInsRegla);
										}
										else {
	    									rlx.addInt('reg',editsAplRegInsCi.hideId);
											rlx.addInt('reg',this.idPeriodo);
											rlx.add('reg',powerComboBoxAplRegInsRegla);
										}
    									Tool.cnnSrv("MantObject", methodName + "ReglaAlumno", this.windowName + ".limpiarCoreUpdateAl('" + methodName + "')", rlx);
    								}
    },

    coreUpdateCa: function(methodName){
        var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == "eliminar") {
			if (pcbAplRegInsCarEdoPeriodo.valid(dialogsAplRegInscripcion))
				if (editsAplRegInsCarPeriodo.valid(dialogsAplRegInscripcion))
					if (powerComboBoxAplRegInsCarRegla.valid(dialogsAplRegInscripcion)) {
						rlx.add('reg',pcbAplRegInsCarOrg);
						rlx.add('reg',pcbAplRegInsCarSuborg);
						rlx.add('reg',pcbAplRegInsCarSuborg);
						rlx.add('reg',pcbAplRegInsCarCarrera.setModeReturnGetText(2));
						rlx.add('reg',pcbAplRegInsCarCarrera.setModeReturnGetText(2));
						rlx.add('reg',pcbAplRegInsCarEdoPeriodo);
						rlx.add('reg',powerComboBoxAplRegInsCarRegla);
						procesar = true;
					}
		}
		else {
			if (pcbAplRegInsCarOrg.valid(dialogsAplRegInscripcion))
				if (pcbAplRegInsCarEdoPeriodo.valid(dialogsAplRegInscripcion))
					if (powerComboBoxAplRegInsCarRegla.valid(dialogsAplRegInscripcion))
						if (powerComboBoxAplRegInsCarPermitir.valid(dialogsAplRegInscripcion)) {
							if (methodName == "agregar") {
								rlx.add('reg',powerComboBoxAplRegInsCarPermitir);
								rlx.add('reg',powerComboBoxAplRegInsCarRegla);
								rlx.add('reg',pcbAplRegInsCarOrg);
								rlx.add('reg',pcbAplRegInsCarSuborg);
								rlx.add('reg',pcbAplRegInsCarSuborg);
								rlx.add('reg',pcbAplRegInsCarCarrera.setModeReturnGetText(2));
								rlx.add('reg',pcbAplRegInsCarCarrera.setModeReturnGetText(2));
								rlx.add('reg',pcbAplRegInsCarEdoPeriodo);
							}
							else {
								rlx.add('reg',powerComboBoxAplRegInsCarPermitir);
								rlx.add('reg',pcbAplRegInsCarOrg);
								rlx.add('reg',pcbAplRegInsCarSuborg);
								rlx.add('reg',pcbAplRegInsCarSuborg);
								rlx.add('reg',pcbAplRegInsCarCarrera.setModeReturnGetText(2));
								rlx.add('reg',pcbAplRegInsCarCarrera.setModeReturnGetText(2));
								rlx.add('reg',pcbAplRegInsCarEdoPeriodo);
								rlx.add('reg',powerComboBoxAplRegInsCarRegla);
							}
							procesar = true;
						}
		}
		if (procesar) { 
			Tool.cnnSrv("MantObject", methodName + "ReglaCarrera", this.windowName + ".limpiarCoreUpdateCa('" + methodName + "')", rlx);
        }
    },

    coreUpdateRe: function(methodName){
    	
    },

    coreUpdatePr: function(methodName){
    	
    }
};
