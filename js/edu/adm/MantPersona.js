var dialogsMantPersona = new Object();
var tablesMantPersona = new Object();
var editsMantCedIdentidad = new Object();
var editsMantNombre = new Object();
var editsMantApellido = new Object();
var powerComboBoxMantNacionalidad = new Object();
var powerComboBoxMantEstCivil = new Object();
var powerComboBoxMantPerSexo = new Object();
var powerComboBoxMantPerEstCivil = new Object();
var powerComboBoxMantPerGruSanguineo = new Object();
var powerComboBoxMantPerStatus = new Object();
var editsMantPerTelHabitacion = new Object();
var editsMantPerEmail1 = new Object();
var powerComboBoxMantPerIndigena = new Object();
var powerComboBoxMantPerPais = new Object();
var powerComboBoxMantPerRegion = new Object();
var powerComboBoxMantPerCiudad = new Object();
var powerComboBoxMantPerProfesion = new Object();
var powerComboBoxMantPerTipPersona = new Object();
var imagesMantPersona = new Object();
var editsMantPerRif = new Object();
var imgButtonsMantPerAgregar = new Object();
var imgButtonsMantPerModificar = new Object();
var imgButtonsMantPerEliminar = new Object();
var imgButtonsMantPerLimpiar = new Object();
var imgButtonsMantPerBuscar = new Object();
var imgButtonsMantPerListado = new Object();
var imgButtonsMantPerFicha = new Object();
var imgButtonsMantPerSalir = new Object();
var editsMatPerRif = new Object();
var editsMantTelCelular = new Object();
var editsMantDireccion1 = new Object();
var editsMantPerConEmergencia = new Object();
var gridsMantPersona = new Object();
var calendarsMantPersona = new Object();
var mwMantPersona = new Object();// minWindow
var editsMantPerPasaporte = new Object();
var pcMantPerMunicipio = new Object();
var pcMantPerParroquia = new Object();

//****************** ESTRUCTURAS DE MENU PARA EL DIALOGO *******************
var MenuDlgPersona = {
		idPanelMenu : 0,
		level : 0,
		captions : ['Mantenimiento'],
		functs : [''],
		subMenues : [1],
		icons : [''], 
		enableOption : [true]	
};

var SubMenuPersona = {	
		idPanelMenu : 1,
		level : 1,
		captions : ['Ubicación Geografica','Grupo','Cargo'],
		functs : ['','exeShow("js/edu/adm/","MantTipPersona")','exeShow("js/edu/adm/","MantProfesion")'],
		subMenues : [2,0,0],
		icons : ['images/ubicacionGeografica_1.png','images/profesion_1.png','images/tipopersona_1.png'], 
		enableOption : [true,true,true],	
		parentMenu : MenuDlgPersona,
		parentOpc : 0
};

var SubMenuUbiGeo = {	
		idPanelMenu : 2,
		level : 2,
		captions : ['País','Región','Ciudad','Asociar Ubicación'],
		functs : ['exeShow("js/edu/pla/man/","MantPais")','exeShow("js/edu/pla/man/","MantRegion")','exeShow("js/edu/pla/man/","MantCiudad")','exeShow("js/edu/pla/man/","MantAsoUbicacion")'],
		subMenues : [0,0,0,0],
		icons : ['images/pais_1.png','images/region_1.png','images/ciudad_1.png','images/asociarUbicacion_1.png'], 
		enableOption : [true,true,true,true],	
		parentMenu : SubMenuPersona,
		parentOpc : 0
};

var MantPersona = {
    windowName: 'MantPersona',
    isCreate: false,
    rptIndividual : false,
    
    show: function() {
        if (!this.isCreate) {
          this.init();
          this.isCreate = true;  
        }
        if (dialogsMantPersona.isByClean())
            this.limpiar();
        dialogsMantPersona.show();
    },
    
    hide: function() {
        dialogsMantPersona.hide();
    },
    
    createMWs: function() {
        mwMantPersona = desktop.addMinWindow('M. Persona', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantPersona.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
	
    edits_init: function() {
    	editsMantPerTelHabitacion.setSizeEdit(149);
		editsMantPerTelHabitacion.setMaxLength(20); 
      editsMantPerTelHabitacion.setValidEmpty();
      editsMantPerEmail1.setSizeEdit(149);
		editsMantPerEmail1.setMaxLength(50); 
      editsMantPerEmail1.setValidEmpty();
      editsMantPerRif.setSizeEdit(149);
		editsMantPerRif.setMaxLength(12); 
      editsMantPerRif.setValidEmpty();
        
      editsMantPerPasaporte.setSizeEdit(149);
		editsMantPerPasaporte.setMaxLength(12); 
      editsMantPerPasaporte.setValidEmpty();
        
      editsMantPerDireccion.setSizeEdit(317);
		editsMantPerDireccion.setMaxLength(150);
      editsMantPerDireccion.setValidEmpty();
      editsMantPerConEmergencia.setSizeEdit(317);
		editsMantPerConEmergencia.setMaxLength(150);
      editsMantPerConEmergencia.setValidEmpty();
      editsMantTelCelular.setMaskPhone();
      editsMantTelCelular.setSizeEdit(149);
		editsMantTelCelular.setMaxLength(20); 
      editsMantTelCelular.setValidEmpty();
    },
    
    powerCombo_init: function() {
        powerComboBoxMantPerGruSanguineo.enableReadOnlyEditor();
        powerComboBoxMantPerGruSanguineo.setDataType('string');
        powerComboBoxMantPerGruSanguineo.addEmptyOption();
        powerComboBoxMantPerGruSanguineo.setValidEmpty();
        powerComboBoxMantPerGruSanguineo.addOptionAndSimpleValue(null, 'A+', 'A+');
        powerComboBoxMantPerGruSanguineo.addOptionAndSimpleValue(null, 'A-', 'A-');
        powerComboBoxMantPerGruSanguineo.addOptionAndSimpleValue(null, 'B+', 'B+');
        powerComboBoxMantPerGruSanguineo.addOptionAndSimpleValue(null, 'B-', 'B-');
        powerComboBoxMantPerGruSanguineo.addOptionAndSimpleValue(null, 'O+', 'O+');
        powerComboBoxMantPerGruSanguineo.addOptionAndSimpleValue(null, 'O-', 'O-');
        powerComboBoxMantPerGruSanguineo.addOptionAndSimpleValue(null, 'AB+', 'AB+');
        powerComboBoxMantPerGruSanguineo.addOptionAndSimpleValue(null, 'AB-', 'AB-');
        powerComboBoxMantPerStatus.enableReadOnlyEditor();
        powerComboBoxMantPerStatus.addEmptyOption();
        powerComboBoxMantPerStatus.setValidEmpty();
        powerComboBoxMantPerStatus.setFieldFind(true);
        powerComboBoxMantPerPais.enableReadOnlyEditor();
        powerComboBoxMantPerPais.addEmptyOption();
        powerComboBoxMantPerPais.setValidEmpty();
        powerComboBoxMantPerRegion.enableReadOnlyEditor();
        powerComboBoxMantPerRegion.addEmptyOption();
        powerComboBoxMantPerRegion.setValidEmpty();
        powerComboBoxMantPerCiudad.enableReadOnlyEditor();
        powerComboBoxMantPerCiudad.addEmptyOption();
        powerComboBoxMantPerCiudad.setValidEmpty();
		powerComboBoxMantPerTipPersona.enableReadOnlyEditor();
        powerComboBoxMantPerTipPersona.addEmptyOption();
        powerComboBoxMantPerTipPersona.setValidEmpty();
        powerComboBoxMantPerTipPersona.setFieldFind(true);
        powerComboBoxMantPerTipPersona.setDataType('string');
        pcMantPerMunicipio.addEmptyOption();
        pcMantPerMunicipio.setValidEmpty();
        pcMantPerParroquia.addEmptyOption();
        pcMantPerParroquia.setValidEmpty();
    },
    
    imgButton_init: function() {
        	imgButtonsMantPerAgregar.setDimension(90, 22);
        	imgButtonsMantPerModificar.setDimension(90, 22);
        	imgButtonsMantPerEliminar.setDimension(90, 22);
        	imgButtonsMantPerLimpiar.setDimension(90, 22);
        	imgButtonsMantPerBuscar.setDimension(90, 22);
        	imgButtonsMantPerListado.setDimension(90, 22);
			imgButtonsMantPerFicha.setDimension(90, 22);
        	imgButtonsMantPerSalir.setDimension(90, 22);
    },
	
    dialogsMantPersona_Init: function() {
        //INSERCION DE OBJETOS AL DIALOGO
    		dialogsMantPersona.setMenu(MenuDlgPersona);
	    	dialogsMantPersona.setSubMenu(SubMenuPersona);
	    	dialogsMantPersona.setSubMenu(SubMenuUbiGeo);
        	dialogsMantPersona.setMinimizeXY(0, 0);
        	dialogsMantPersona.setCenterScreen();
        	dialogsMantPersona.addSpace(0, 0, 20);
			editsMantCedIdentidad.setSizeEdit(149);
			editsMantCedIdentidad.setMaxLength(15); 
        	editsMantCedIdentidad.setValidInteger();
			editsMantCedIdentidad.setFieldFind(true);
      	editsMantNombre.setSizeEdit(149);
			editsMantNombre.setMaxLength(50); 
        	editsMantNombre.setValidEmpty();
			editsMantNombre.setFieldFind(true);
      	editsMantApellido.setSizeEdit(149);
			editsMantApellido.setMaxLength(50); 
         editsMantApellido.setValidEmpty();
			editsMantApellido.setFieldFind(true);
			powerComboBoxMantNacionalidad.addEmptyOption();
	      powerComboBoxMantNacionalidad.setDataType('string');
	      powerComboBoxMantNacionalidad.enableReadOnlyEditor();
	      powerComboBoxMantNacionalidad.setValidEmpty();
	   	powerComboBoxMantPerEstCivil.enableReadOnlyEditor();
	      powerComboBoxMantPerEstCivil.setDataType('string');
	      powerComboBoxMantPerEstCivil.addEmptyOption();
	      powerComboBoxMantPerEstCivil.setValidEmpty();
	      powerComboBoxMantPerEstCivil.addOptionAndSimpleValue(null, 'Soltero (a)', 'Soltero (a)');
	      powerComboBoxMantPerEstCivil.addOptionAndSimpleValue(null, 'Casado (a)', 'Casado (a)');
	      powerComboBoxMantPerEstCivil.addOptionAndSimpleValue(null, 'Divorciado (a)', 'Divorciado (a)');
	      powerComboBoxMantPerEstCivil.addOptionAndSimpleValue(null, 'Viudo (a)', 'Viudo (a)');
	      powerComboBoxMantPerEstCivil.addOptionAndSimpleValue(null, 'Concubinato', 'Concubinato');
			powerComboBoxMantPerProfesion.enableReadOnlyEditor();
        	powerComboBoxMantPerProfesion.addEmptyOption();
        	powerComboBoxMantPerProfesion.setValidEmpty();
        	pcMantPerMunicipio.addEmptyOption();
        	pcMantPerMunicipio.setValidEmpty();
			powerComboBoxMantPerSexo.setDataType('string');
         powerComboBoxMantPerSexo.enableReadOnlyEditor();
         powerComboBoxMantPerSexo.addEmptyOption();
         powerComboBoxMantPerSexo.setValidEmpty();
         powerComboBoxMantPerSexo.addOptionAndSimpleValue(null, 'Femenino', 'Femenino');
         powerComboBoxMantPerSexo.addOptionAndSimpleValue(null, 'Masculino', 'Masculino');
			calendarsMantPersona.setWidthEditCalendar(127);
			calendarsMantPersona.setCaption('Fecha Nac.:', 1,80);
        	calendarsMantPersona.sendToFrom(100);
        	imagesMantPersona.setSize(164,147);
			dialogsMantPersona.addObject(imagesMantPersona, 750, 50);  
			powerComboBoxMantPerIndigena.enableReadOnlyEditor();
        	powerComboBoxMantPerIndigena.addEmptyOption();
        	powerComboBoxMantPerIndigena.setValidEmpty();
        	powerComboBoxMantPerIndigena.setDataType('string');
			powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'NO', 'NO');
        	powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Wayúu', 'Wayúu');
        	powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Añu', 'Añu');
        	powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Yukpa', 'Yukpa');
        	powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Japreria', 'Japreria');
        	powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Barí', 'Barí');
        	powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Piapoko', 'Piapoko');
        	powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Pemón', 'Pemón');
        	powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Kariña', 'Kariña');
			powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Panare', 'Panare');
         powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Chaima', 'Chaima');
         powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Maquiritare', 'Maquiritare');
         powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Akawayo', 'Akawayo');
			powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Yabarana', 'Yabarana');
	      powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Mapoyo', 'Mapoyo');
	      powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Waike', 'Waike');
	      powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Yanomami', 'Yanomami');
			powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Wanikua', 'Wanikua');
        	powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Waraos', 'Waraos');
			powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Waikerí', 'Waikerí');
			powerComboBoxMantPerIndigena.addOptionAndSimpleValue(null, 'Wottuja-Piaroa', 'Wottuja-Piaroa');
			
			//INSERCION DE OBJETOS
			dialogsMantPersona.addObject(imagesMantPersona, 750, 50);  
			dialogsMantPersona.addObject(editsMantCedIdentidad, 20, 60);
			dialogsMantPersona.addObject(editsMantNombre, 252, 60);  
			dialogsMantPersona.addObject(editsMantApellido, 500, 60);  
			dialogsMantPersona.addObject(powerComboBoxMantPerTipPersona, 20, 85);
			dialogsMantPersona.addObject(powerComboBoxMantNacionalidad, 252, 85);
			dialogsMantPersona.addObject(powerComboBoxMantPerEstCivil, 500, 85);
			dialogsMantPersona.addObject(powerComboBoxMantPerProfesion, 20, 110);
			dialogsMantPersona.addObject(powerComboBoxMantPerSexo, 252, 110);
			dialogsMantPersona.addObject(calendarsMantPersona.getEditCalendar(), 500, 110);
			dialogsMantPersona.addObject(editsMantPerRif, 20, 135);
			dialogsMantPersona.addObject(powerComboBoxMantPerGruSanguineo, 252, 135);
			dialogsMantPersona.addObject(powerComboBoxMantPerStatus, 500, 135);
			dialogsMantPersona.addObject(editsMantPerPasaporte, 20, 160);
			dialogsMantPersona.addObject(powerComboBoxMantPerPais, 252, 160);
			dialogsMantPersona.addObject(powerComboBoxMantPerRegion, 500, 160);
			dialogsMantPersona.addObject(pcMantPerMunicipio, 20, 185);
			dialogsMantPersona.addObject(powerComboBoxMantPerCiudad, 252, 185);
			dialogsMantPersona.addObject(pcMantPerParroquia, 500, 185);
			dialogsMantPersona.addObject(editsMantPerEmail1, 20, 210);
			dialogsMantPersona.addObject(powerComboBoxMantPerIndigena, 252, 210);
			dialogsMantPersona.addObject(editsMantPerConEmergencia, 500, 210);
			dialogsMantPersona.addObject(editsMantPerTelHabitacion, 20, 235);
			dialogsMantPersona.addObject(editsMantTelCelular, 252, 235);
			dialogsMantPersona.addObject(editsMantPerDireccion, 500, 235);
			dialogsMantPersona.addObject(gridsMantPersona.getObject(), 20, 265);
			dialogsMantPersona.addObject(imgButtonsMantPerAgregar, 20, 490);
			dialogsMantPersona.addObject(imgButtonsMantPerModificar, 132, 490);
			dialogsMantPersona.addObject(imgButtonsMantPerEliminar, 244, 490);
			dialogsMantPersona.addObject(imgButtonsMantPerLimpiar, 356, 490);
			dialogsMantPersona.addObject(imgButtonsMantPerListado, 468, 490);
			dialogsMantPersona.addObject(imgButtonsMantPerFicha, 580, 490);
			dialogsMantPersona.addObject(imgButtonsMantPerBuscar, 692, 490);
			dialogsMantPersona.addObject(imgButtonsMantPerSalir, 804, 490);
        //llamadas a metodos de inicializacion
        this.imgButton_init(); 
	     this.powerCombo_init();
	     this.edits_init();
    },
    
    gridsMantPersona_Init: function() {
        gridsMantPersona.setFixColRow(false, true);
        gridsMantPersona.addTitleVectorX(['C.i.', 'Nombre', 'Apellido', 'Id.', 'Tlf. Habitación', 'Nacionalidad', 'E. Civil', 'Email-1', 'indigena', 'Grupo Sanguineo', 'Estado', 'Sexo', 'Tlf. Celular', 'País', 'F.Nacimiento', 'Region', 'Ciudad', 'Profesión', 'Rif', 'Dirección', 'C. Emergencia', 'passport', 'mcpio', 'parroq']);
        gridsMantPersona.showData();
        gridsMantPersona.setSizeCol(1, 100);
        gridsMantPersona.setSizeCol(2, 130);
        gridsMantPersona.setSizeCol(3, 130);
        gridsMantPersona.setSizeCol(4, 0);
        gridsMantPersona.setSizeCol(5, 100);
        gridsMantPersona.setSizeCol(6, 0);
        gridsMantPersona.setSizeCol(7, 0);
        gridsMantPersona.setSizeCol(8, 0);
        gridsMantPersona.setSizeCol(9, 0);
        gridsMantPersona.setSizeCol(10, 0);
        gridsMantPersona.setSizeCol(11, 0);
        gridsMantPersona.setSizeCol(12, 0);
        gridsMantPersona.setSizeCol(13, 100);
        gridsMantPersona.setSizeCol(14, 0);
        gridsMantPersona.setSizeCol(15, 0);
        gridsMantPersona.setSizeCol(16, 0);
        gridsMantPersona.setSizeCol(17, 0);
        gridsMantPersona.setSizeCol(18, 0);
        gridsMantPersona.setSizeCol(19, 0);
        gridsMantPersona.setSizeCol(20, 311);
        gridsMantPersona.setSizeCol(21, 0);
        gridsMantPersona.setSizeCol(22, 0);
        gridsMantPersona.setSizeCol(23, 0);
        gridsMantPersona.setSizeCol(24, 0);
        gridsMantPersona.hideCol(4);
        gridsMantPersona.hideCol(6);
        gridsMantPersona.hideCol(7);
        gridsMantPersona.hideCol(8);
        gridsMantPersona.hideCol(9);
        gridsMantPersona.hideCol(10);
        gridsMantPersona.hideCol(11);
        gridsMantPersona.hideCol(12);
        gridsMantPersona.hideCol(14);
        gridsMantPersona.hideCol(15);
        gridsMantPersona.hideCol(16);
        gridsMantPersona.hideCol(17);
        gridsMantPersona.hideCol(18);
        gridsMantPersona.hideCol(19);
        gridsMantPersona.hideCol(21);
        gridsMantPersona.hideCol(22);
        gridsMantPersona.hideCol(23);
        gridsMantPersona.hideCol(24);
    },
    
    create: function() {
		//HINTS
		  hint.create();
		  hint.setObjAttrib(attrib,ambiente);

        //DIALOGO
        dialogsMantPersona = dialogs.create('dialogsMantPersona', 0, 0, 919, 482, 'MANTENIMIENTO DE PERSONA');
		  dialogsMantPersona.setAdjY(40);
        //EDITORES
        editsMantApellido = edits.create('editsMantApellido', 'editsMantApellido', 'Apellido (*):', 1,80,'normal');
        editsMantNombre = edits.create('editsMantNombre', 'editsMantNombre', 'Nombre (*):', 1,85, 'normal');
        editsMantCedIdentidad = edits.create('editsMantCedIdentidad', 'editsMantCedIdentidad', 'C.i. (*):', 1,70, 'normal');
        editsMantPerTelHabitacion = edits.create('editsMantPerTelHabitacion', 'editsMantPerTelHabitacion', 'Tlf. Hab.:', 1,70, 'normal');
        editsMantPerEmail1 = edits.create('editsMantPerEmail1', 'editsMantPerEmail1', 'Email:', 1,70, 'normal');
        editsMantPerPasaporte = edits.create('editsMantPerPasaporte', 'editsMantPerPasaporte', 'Pasaporte:', 1,70,'normal');              
        
        editsMantPerRif = edits.create('editsMantPerRif', 'editsMantPerRif', 'Rif.:', 1,70, 'normal');
        
        editsMantTelCelular = edits.create('editsMantTelCelular', 'editsMantTelCelular', 'Tlf. Celular (*):', 1,85, 'mormal');
        editsMantTelCelular.setFieldFind(true);
        editsMantPerDireccion = edits.create('editsMantPerDireccion', 'editsMantPerDireccion', 'Dirección:', 1,80, 'normal');
        editsMantPerConEmergencia = edits.create('editsMantPerConEmergencia', 'editsMantPerConEmergencia', 'Emergencia:', 1,80, 'normal');
        //POWERCOMBO      
        powerComboBoxMantNacionalidad = powerComboBox.create('powerComboBoxMantNacionalidad', 'powerComboBoxMantNacionalidad', 'Nacionalidad:', 1,85);
        powerComboBoxMantPerEstCivil = powerComboBox.create('powerComboBoxMantPerEstCivil', 'powerComboBoxMantPerEstCivil', 'Estado Civil:', 1,80);
        powerComboBoxMantPerSexo = powerComboBox.create('powerComboBoxMantPerSexo', 'powerComboBoxMantPerSexo', 'Sexo:', 1,85);
        powerComboBoxMantPerGruSanguineo = powerComboBox.create('powerComboBoxMantPerGruSanguineo', 'powerComboBoxMantPerGruSanguineo', 'G. Sanguineo:', 1,85);
        powerComboBoxMantPerStatus = powerComboBox.create('powerComboBoxMantPerStatus', 'powerComboBoxMantPerStatus', 'Estado (*):', 1,80);
        powerComboBoxMantPerPais = powerComboBox.create('powerComboBoxMantPerPais', 'powerComboBoxMantPerPais', 'Pais (+):', 1,85);
        powerComboBoxMantPerRegion = powerComboBox.create('powerComboBoxMantPerRegion', 'powerComboBoxMantPerRegion', 'Región (^):', 1,80);
        powerComboBoxMantPerCiudad = powerComboBox.create('powerComboBoxMantPerCiudad', 'powerComboBoxMantPerCiudad', 'Ciudad:', 1,85);
        powerComboBoxMantPerProfesion = powerComboBox.create('powerComboBoxMantPerProfesion', 'powerComboBoxMantPerProfesion', 'Cargo:', 1,70);
		  powerComboBoxMantPerIndigena = powerComboBox.create('powerComboBoxMantPerIndigena', 'powerComboBoxMantPerIndigena', 'Indigena:', 1,85); 
		  powerComboBoxMantPerTipPersona = powerComboBox.create('powerComboBoxMantPerTipPersona', 'powerComboBoxMantPerTipPersona', 'Grupo (*):', 1,70);
		  powerComboBoxMantPerTipPersona.setTypeObjOpt('input', 'checkbox');
		  powerComboBoxMantPerTipPersona.setFirstRowCheckMode(2);
		  pcMantPerMunicipio = powerComboBox.create('pcMantPerMunicipio', 'pcMantPerMunicipio', 'Municipio:', 1,70);
		  pcMantPerParroquia = powerComboBox.create('pcMantPerParroquia', 'pcMantPerParroquia', 'Parroquia:', 1,80);
		//IMAGES
		  imagesMantPersona = images.create('imagesMantPersona','imagesMantPersona','images/pht/anonymous.png');
        //IMGBUTTONS
        imgButtonsMantPerAgregar = imgButtons.create('imgButtonsMantPerAgregar', 'Agregar', 'ok.png');
        imgButtonsMantPerModificar = imgButtons.create('imgButtonsMantPerModificar', 'Modificar', 'icono_modificar.png');
        imgButtonsMantPerModificar.setDisable();
        imgButtonsMantPerEliminar = imgButtons.create('imgButtonsMantPerEliminar', 'Eliminar', 'eliminar.jpg');
        imgButtonsMantPerEliminar.setDisable();
        imgButtonsMantPerLimpiar = imgButtons.create('imgButtonsMantPerLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsMantPerBuscar = imgButtons.create('imgButtonsMantPerBuscar', 'Buscar', 'icono_buscar.png');
        imgButtonsMantPerListado = imgButtons.create('imgButtonsMantPerListado', 'Ver Listado', 'print.png');
        imgButtonsMantPerFicha = imgButtons.create('imgButtonsMantPerFicha', 'Ver Datos', 'print.png');
		  imgButtonsMantPerSalir = imgButtons.create('imgButtonsMantPerSalir', 'Salir', 'salir.png');
        //GRIDS
        gridsMantPersona = grids.create('gridsMantPersona', 8, 24);
        //CALENDARS
        calendarsMantPersona = calendars.create('calendarsMantPersona');
        calendarsMantPersona.setValidEmpty();
		//////////////////////////////////////////////////////
		  hint.addToHintWithRefreshPos(powerComboBoxMantPerTipPersona,dialogsMantPersona,"Elija el Tipo de Persona",23,69,true);
		  hint.addToHintWithRefreshPos(powerComboBoxMantPerGruSanguineo,dialogsMantPersona,"Elija el Grupo Sanguineo",264,118,true);
		  //hint.addToHintWithRefreshPos(editsMantPerConEmergencia,dialogsMantPersona,"Escriba el Contacto de Emergencia",562,164,true);
		  //hint.addToHintWithRefreshPos(editsMantPerTelHabitacion,dialogsMantPersona,"Escriba el Telefono de Habitación",69,188,true);
		  //hint.addToHintWithRefreshPos(editsMantTelCelular,dialogsMantPersona,"Escriba el Telefono Celular",309,188,true);
		  //hint.addToHintWithRefreshPos(editsMantPerRif,dialogsMantPersona,"Escriba el Registro de Información Fiscal (Rif)",41,117,true);
		  hint.addToHintWithRefreshPos(calendarsMantPersona,dialogsMantPersona,"Elija la Fecha de Nacimiento",518,92,true);
    },
    
    init: function() {
        this.create();
        this.setEvents();
        this.dialogsMantPersona_Init();
        this.gridsMantPersona_Init();
        this.createMWs();
    },
    
    resetElements : function(element) {
    	if (element == 'pais') {
    		Tool.rstPwrCmb(powerComboBoxMantPerRegion);
    		Tool.rstPwrCmb(powerComboBoxMantPerCiudad);
		}
		else if (element == 'region') {
    		Tool.rstPwrCmb(powerComboBoxMantPerCiudad);
		}
	},
    
    limpiar: function() {
    	imagesMantPersona.getObject().refresh = true;
    	editsMantCedIdentidad.hideId = -1;
        editsMantCedIdentidad.setValue("");        
        editsMantNombre.setValue("");
        editsMantApellido.setValue("");
        powerComboBoxMantPerTipPersona.clearChecks();
		powerComboBoxMantPerTipPersona.setSelectedIndex(0);
        editsMantPerTelHabitacion.setValue("");
        powerComboBoxMantNacionalidad.clear();
        powerComboBoxMantNacionalidad.addOptionAndSimpleValue(null, 'Extranjera', 'Extranjera');        
        powerComboBoxMantPerEstCivil.setSelectedIndex(0);
        powerComboBoxMantPerStatus.setSelectedIndex(0);        
        editsMantPerEmail1.setValue("");
        powerComboBoxMantPerIndigena.setSelectedIndex(1);   
        powerComboBoxMantPerGruSanguineo.setSelectedIndex(0);
        calendarsMantPersona.clear();
        editsMantPerRif.setValue("");
        editsMantPerPasaporte.clear();
        powerComboBoxMantPerSexo.setSelectedIndex(0);
        powerComboBoxMantPerPais.setSelectedIndex(0);        
        powerComboBoxMantPerRegion.setSelectedIndex(0);
        powerComboBoxMantPerCiudad.setSelectedIndex(0);
        powerComboBoxMantPerProfesion.setSelectedIndex(0);
        editsMantPerDireccion.setValue("");
        editsMantPerConEmergencia.setValue("");
        gridsMantPersona.clean();
		imagesMantPersona.setSource('images/pht/anonymous.png');
        dialogsMantPersona.setMsg("");
        imgButtonsMantPerAgregar.setEnable();
        imgButtonsMantPerModificar.setDisable();
        imgButtonsMantPerEliminar.setDisable();
		imgButtonsMantPerListado.setDisable();
		imgButtonsMantPerFicha.setDisable();
		Tool.cnnSrv('MantObject', 'getMantPersonaInit', this.windowName + '.loadDataInit()');
		rptIndividual = false;
		editsMantTelCelular.delMaskPhone();
	},
    
	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsMantPersona, powerComboBoxMantPerStatus, 0, 1, json('getMantEstPersona'));
		Tool.loadPowerComboData(dialogsMantPersona, powerComboBoxMantPerPais, 0, 1, json('getMantPais'));
		Tool.loadPowerComboData(dialogsMantPersona, powerComboBoxMantPerProfesion, 0, 1, json('getMantProfesion'));
		powerComboBoxMantPerProfesion.setSizeHeight(300);
		Tool.loadPowerComboData(dialogsMantPersona, powerComboBoxMantPerTipPersona, 0, 1, json('getMantTipPersona'));
		powerComboBoxMantPerTipPersona.setSizeHeight(300);
		Tool.loadPowerComboData(dialogsMantPersona, pcMantPerMunicipio, 0, 0, json('getMcpio'));
		Tool.loadPowerComboData(dialogsMantPersona, pcMantPerParroquia, 0, 0, json('getParroq'));
		powerComboBoxMantNacionalidad.clear();
		powerComboBoxMantNacionalidad.addOptionAndSimpleValue(null, 'Extranjera', 'Extranjera');
		powerComboBoxMantNacionalidad.addOptionAndSimpleValue(null, json('getNacionalidad').data[0][0], json('getNacionalidad').data[0][0]);        
        dialogsMantPersona.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },
    	
    limpiarCoreUpdate: function() {
    	//editsMantCedIdentidad.clear();
    	editsMantNombre.clear();
    	editsMantApellido.clear();
        powerComboBoxMantPerTipPersona.clearChecks();
        editsMantPerTelHabitacion.clear();
        powerComboBoxMantNacionalidad.setSelectedIndex(0);
        powerComboBoxMantPerEstCivil.setSelectedIndex(0);
        powerComboBoxMantPerStatus.setSelectedIndex(0);        
        editsMantPerEmail1.clear();
        powerComboBoxMantPerGruSanguineo.setSelectedIndex(0);
        calendarsMantPersona.clear();
        editsMantTelCelular.delMaskPhone();
        editsMantPerRif.clear();
        editsMantPerPasaporte.clear();
        powerComboBoxMantPerSexo.setSelectedIndex(0);
        powerComboBoxMantPerPais.setSelectedIndex(0);        
        powerComboBoxMantPerRegion.setSelectedIndex(0);
        powerComboBoxMantPerCiudad.setSelectedIndex(0);
        powerComboBoxMantPerProfesion.setSelectedIndex(0);
		powerComboBoxMantPerTipPersona.setSelectedIndex(0);  
		pcMantPerMunicipio.setSelectedIndex(0);
		pcMantPerParroquia.setSelectedIndex(0);
        editsMantPerDireccion.clear();
        editsMantPerConEmergencia.clear();
        dialogsMantPersona.setMsg("");
        imgButtonsMantPerAgregar.setEnable();
        imgButtonsMantPerModificar.setDisable();
        imgButtonsMantPerEliminar.setDisable();
		imgButtonsMantPerFicha.setDisable();
		imgButtonsMantPerListado.setDisable();
		rptIndividual = false;
		this.buscar();
    },
    
    setData: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (gridsMantPersona.getDataCell(1) != "") {
        	editsMantCedIdentidad.setValue(gridsMantPersona.getDataCell(1));
            editsMantNombre.setValue(gridsMantPersona.getDataCell(2));
            editsMantApellido.setValue(gridsMantPersona.getDataCell(3));
            editsMantCedIdentidad.hideId = gridsMantPersona.getDataCell(4);
            editsMantPerTelHabitacion.setValue(gridsMantPersona.getDataCell(5));
            powerComboBoxMantNacionalidad.findOption(gridsMantPersona.getDataCell(6));
            powerComboBoxMantPerEstCivil.findOption(gridsMantPersona.getDataCell(7));            
            editsMantPerEmail1.setValue(gridsMantPersona.getDataCell(8));
            powerComboBoxMantPerIndigena.findOption(gridsMantPersona.getDataCell(9));
            powerComboBoxMantPerGruSanguineo.findOption(gridsMantPersona.getDataCell(10));
            powerComboBoxMantPerStatus.findOption(gridsMantPersona.getDataCell(11));
            powerComboBoxMantPerSexo.findOption(gridsMantPersona.getDataCell(12));
            editsMantTelCelular.setValue(gridsMantPersona.getDataCell(13));
            calendarsMantPersona.setFechaToEdit(gridsMantPersona.getDataCell(15));
            powerComboBoxMantPerProfesion.findOption(gridsMantPersona.getDataCell(18));
            editsMantPerRif.setValue(gridsMantPersona.getDataCell(19));
            editsMantPerDireccion.setValue(gridsMantPersona.getDataCell(20));
            editsMantPerConEmergencia.setValue(gridsMantPersona.getDataCell(21));
            editsMantPerPasaporte.setValue(gridsMantPersona.getDataCell(22));
            pcMantPerMunicipio.setSelectedIndex(0);
            pcMantPerMunicipio.setSelectedOption(gridsMantPersona.getDataCell(23));
	        if (pcMantPerMunicipio.getOption() == "") {
	        	pcMantPerMunicipio.addOptionAndSimpleValue(null, gridsMantPersona.getDataCell(23), gridsMantPersona.getDataCell(23));
	        	pcMantPerMunicipio.setSelectedOption(gridsMantPersona.getDataCell(23));
	        }
	        pcMantPerParroquia.setSelectedIndex(0);
	        pcMantPerParroquia.setSelectedOption(gridsMantPersona.getDataCell(24));
	        if (pcMantPerParroquia.getOption() == "") {
	        	pcMantPerParroquia.addOptionAndSimpleValue(null, gridsMantPersona.getDataCell(24), gridsMantPersona.getDataCell(24));
	        	pcMantPerParroquia.setSelectedOption(gridsMantPersona.getDataCell(24));
	        }
	        
            imagesMantPersona.getObject().onerror = function() {imagesMantPersona.setSource('images/pht/anonymous.png')};
            imagesMantPersona.setSource('images/pht/' + gridsMantPersona.getDataCell(1) + '.jpg');
            imgButtonsMantPerAgregar.setDisable();
            imgButtonsMantPerModificar.setEnable();
            imgButtonsMantPerEliminar.setEnable();
			imgButtonsMantPerFicha.setEnable();
            rptIndividual = true;
            
            powerComboBoxMantPerPais.findOption(gridsMantPersona.getDataCell(14));
			rlx.addInt('reg', gridsMantPersona.getDataCell(14));
			rlx.addInt('reg', gridsMantPersona.getDataCell(14));
			rlx.addInt('reg', gridsMantPersona.getDataCell(16));
			rlx.addInt('reg', gridsMantPersona.getDataCell(16));
			Tool.cnnSrv('MantObject', 'getMantPersonaUbic', this.windowName + '.loadUbic()', rlx);
        }
    },
    
    loadUbic: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		Tool.loadPowerComboData(dialogsMantPersona, powerComboBoxMantPerRegion, 0, 1, json('getRegionAsoPais'));
		Tool.loadPowerComboData(dialogsMantPersona, powerComboBoxMantPerCiudad, 5, 2, json('getMantAsoUbicacion'));
        powerComboBoxMantPerRegion.findOption(gridsMantPersona.getDataCell(16));
        powerComboBoxMantPerCiudad.findOption(gridsMantPersona.getDataCell(17));
        
		rlx.addInt('reg', editsMantCedIdentidad.hideId);
		Tool.cnnSrv('MantObject', 'getMantPersonaTipo', this.windowName + '.loadTipoPers()', rlx);
	},

    loadTipoPers: function() {
		powerComboBoxMantPerTipPersona.setCheckEnable(json('getTipoPersPers').data[0]);
		dlgWait.hide();
	},

	buscar: function() {
		//if (editsMantCedIdentidad.getValue() == '' || editsMantCedIdentidad.valid(dialogsMantPersona)) {
    		imagesMantPersona.getObject().refresh = true;
			gridsMantPersona.clean(); 
			Tool.getGridData("MantObject", "get" + this.windowName, dialogsMantPersona, gridsMantPersona, new Function('imgButtonsMantPerFicha.setDisable();imgButtonsMantPerListado.setEnable();'), editsMantCedIdentidad, editsMantCedIdentidad, editsMantNombre, editsMantNombre, editsMantApellido, editsMantApellido, powerComboBoxMantPerStatus, powerComboBoxMantPerStatus, powerComboBoxMantPerTipPersona, powerComboBoxMantPerTipPersona, editsMantTelCelular, editsMantTelCelular);		
		//}
	},
	
	setMask : function(){
		editsMantTelCelular.setMaskPhone(json('getDiscInter').data[0]);	
	},
  	
	setEvents: function() {
  		powerComboBoxMantPerPais.onChange(this.windowName + ".resetElements('pais');Tool.getPowerComboData('MantObject', 'getRegionAsoPais', dialogsMantPersona, powerComboBoxMantPerRegion, 0, 1, powerComboBoxMantPerPais)");
  		powerComboBoxMantPerRegion.onChange(this.windowName + ".resetElements('region');Tool.getPowerComboData('MantObject', 'getCiudadAsoRegionPais', dialogsMantPersona, powerComboBoxMantPerCiudad, 0, 1, powerComboBoxMantPerPais, powerComboBoxMantPerRegion)");
  		editsMantCedIdentidad.onEnter(this.windowName + ".buscar()");
        editsMantNombre.onEnter(this.windowName + ".buscar()");
        editsMantApellido.onEnter(this.windowName + ".buscar()");
        editsMantTelCelular.onEnter(this.windowName + ".buscar()");
        gridsMantPersona.onClickCells(this.windowName + ".setData()");
        gridsMantPersona.onEnter(this.windowName + ".setData()");
        imgButtonsMantPerAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
        imgButtonsMantPerModificar.onClick(this.windowName + ".coreUpdate('modificar')");
        imgButtonsMantPerEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
        imgButtonsMantPerLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsMantPerBuscar.onClick(this.windowName + ".buscar()");
        imgButtonsMantPerListado.onClick(this.windowName + ".getListado()");
		imgButtonsMantPerFicha.onClick(this.windowName + ".reporte()");
        imgButtonsMantPerSalir.onClick("dialogsMantPersona.close()");
        editsMantTelCelular.onFocus(this.windowName +".setMask()")
		imagesMantPersona.onClick(this.windowName + ".copyPhoto()");
    },
    
	copyPhoto: function() {
		if (editsMantCedIdentidad.valid(dialogsMantPersona)) {
			if (imagesMantPersona.getObject().refresh) {
				AdjuArchivos.sizeFile = 1024 * 1024 / 2;//512Kb
				AdjuArchivos.filter('.jpg');
				AdjuArchivos.process(25);
				AdjuArchivos.parameter(editsMantCedIdentidad.getValue() + '.jpg');
				AdjuArchivos.show();
				imagesMantPersona.getObject().refresh = false;
				imagesMantPersona.setSource('images/pht/refresh.png');
			}
			else {
				imagesMantPersona.getObject().refresh = true;
				imagesMantPersona.getObject().onerror = function() {imagesMantPersona.setSource('images/pht/anonymous.png')};
				imagesMantPersona.setSource('images/pht/' + editsMantCedIdentidad.getValue() + '.jpg');
			}
		}
	},

	reporte : function() {
		///////////////////////////////////////ARREGLO DE DESCRIPCION Y DATA//////////////////////////////////////////////////////////////////////////////
		var aData = [['C.I.','Nombre','Apellido','Tipo de Persona','Nacionalidad','Estado Civil','Profesión','Sexo','Fecha de Nacimiento','Rif','Grupo Sanguineo',
					  'Estado','Pais','Región','Ciudad','Email','Indigena','Contacto de Emergencia','Telefono de Habitación','Telefono Movil','Dirección'],  	
		
					 [editsMantCedIdentidad.getValue(),editsMantNombre.getValue(),editsMantApellido.getValue(),powerComboBoxMantPerTipPersona.getValue(),
					  powerComboBoxMantNacionalidad.getValue(),powerComboBoxMantPerEstCivil.getValue(),powerComboBoxMantPerProfesion.getValue(),
					  powerComboBoxMantPerSexo.getValue(),calendarsMantPersona.getValue(),editsMantPerRif.getValue(),powerComboBoxMantPerGruSanguineo.getValue(),
					  powerComboBoxMantPerStatus.getValue(),powerComboBoxMantPerPais.getValue(),powerComboBoxMantPerRegion.getValue(),
					  powerComboBoxMantPerCiudad.getValue(),editsMantPerEmail1.getValue(),powerComboBoxMantPerIndigena.getOption(),editsMantPerConEmergencia.getValue(),
					  editsMantPerTelHabitacion.getValue(),editsMantTelCelular.getValue(),editsMantPerDireccion.getValue()]];
		///////////////////////////////////////PARAMETROS DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);//IMAGEN ICONO DE IMPRESORA/// 
        rep.setHeadImage(imgEduca.banner,true); 
        rep.setNoRepeatHead();
        ///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
        rep.addBar(0,102,1024,142,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addHeadTitle('DATOS PERSONALES',true);
		//************************ TABLE *********************************************
		rep.setTableRowProperties(20, 180, 180, 180, 'bold helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'bold helvetica', 10);		
		rep.addTable('tablaAuditoria',['DATOS','DESCRIPCION'],400,146);
		rep.setTotalRowTable(21);
		rep.setHeightRow(38);
		rep.setSizeColumnArray([180,620]);
		rep.addMultiArrayData('tablaAuditoria', aData);
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),10,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        ///////////////////////////////////////INSERCION DE IMAGEN DEL REPORTE/////////////////////////////////////////////////////////////////////////////
		rep.addImage(584,187,795,379,'images/pht/'+editsMantCedIdentidad.getValue()+'.jpg',true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
        Reporte.create();
        dialogsReporte.showModal();
  	},
	
    getListado : function() {
    	var rlx = xmlStructs.createRecordList("rlx");
		
    	rlx.add('reg', editsMantCedIdentidad);                                                                                
		rlx.add('reg', editsMantCedIdentidad);
		rlx.add('reg', editsMantNombre);
		rlx.add('reg', editsMantNombre);
		rlx.add('reg', editsMantApellido);
		rlx.add('reg', editsMantApellido);
		rlx.add('reg', powerComboBoxMantPerStatus);
		rlx.add('reg', powerComboBoxMantPerStatus);
		rlx.add('reg', powerComboBoxMantPerTipPersona);
		rlx.add('reg', powerComboBoxMantPerTipPersona);
		rlx.add('reg', editsMantTelCelular);
		rlx.add('reg', editsMantTelCelular);
		Tool.cnnSrv('MantObject', 'getMantPersonaListado', this.windowName + '.reporteListado()', rlx);
    },
    
	reporteListado : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
        rep.setPositionIcon(1090,2);
        //rep.setNoRepeatHead();
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'courier','bold');
        rep.addText(430,21,'LISTADO DE PERSONAL',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);
		rep.addTable('TablaRepoHojaEvaAlumno',['Nº','C.i.','Nombre y Apellido','Profesión','Telefono','Email','Dirección'],562,40);
        rep.setTotalRowTable(34);
        rep.setHeightRow(20); 
        rep.setSizeColumnArray([28,90,220,180,130,210,280]);
        rep.setAlignData(['right','right','left','left','right','left','left']);     
        rep.addJsonData('TablaRepoHojaEvaAlumno','getMantPersonaListado',[0,1,2,3,4,5,6]);
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
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
        
        if (methodName == 'eliminar') {
            if (editsMantCedIdentidad.hideId > 0) {
            	rlx.addInt('reg', editsMantCedIdentidad.hideId);
				Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
            }
        }
        else {
        	if (editsMantNombre.valid(dialogsMantPersona)) 
        		if (editsMantApellido.valid(dialogsMantPersona)) 
        			if (powerComboBoxMantPerTipPersona.valid(dialogsMantPersona)) 
        				if (powerComboBoxMantNacionalidad.valid(dialogsMantPersona))                     
        					if (powerComboBoxMantPerEstCivil.valid(dialogsMantPersona))                                     
        						if (powerComboBoxMantPerProfesion.valid(dialogsMantPersona)) 
        							if (powerComboBoxMantPerSexo.valid(dialogsMantPersona)) 
        								if (calendarsMantPersona.valid(dialogsMantPersona)) 
//                                			if (editsMantPerRif.valid(dialogsMantPersona)) 
//                                				if (powerComboBoxMantPerGruSanguineo.valid(dialogsMantPersona)) 
                                					if (powerComboBoxMantPerStatus.valid(dialogsMantPersona)) 
                                						if (powerComboBoxMantPerPais.valid(dialogsMantPersona)) 
                                							if (powerComboBoxMantPerRegion.valid(dialogsMantPersona)) 
                                								if (powerComboBoxMantPerCiudad.valid(dialogsMantPersona))
//                                									if (editsMantPerEmail1.valid(dialogsMantPersona))
																		if (powerComboBoxMantPerIndigena.valid(dialogsMantPersona))
//                                                                      	if (editsMantPerConEmergencia.valid(dialogsMantPersona))
//																		   		if (editsMantPerTelHabitacion.valid(dialogsMantPersona))
//																					if (editsMantTelCelular.valid(dialogsMantPersona)) 
//                                							            				if (editsMantPerDireccion.valid(dialogsMantPersona)) 
                                                                                			if (editsMantCedIdentidad.valid(dialogsMantPersona)) {
                                                                                				rlx.add('reg', editsMantCedIdentidad);                                                       
                                                                                				rlx.add('reg', powerComboBoxMantPerStatus);
                                                                                				rlx.add('reg', powerComboBoxMantPerPais);
                                                                                				rlx.add('reg', powerComboBoxMantPerRegion);
                                                                                				rlx.add('reg', powerComboBoxMantPerCiudad);
                                                                                				rlx.add('reg', powerComboBoxMantPerProfesion);
                                                                                				rlx.add('reg', editsMantNombre);
                                                                                				rlx.add('reg', editsMantApellido);
                                                                                				rlx.add('reg', powerComboBoxMantPerSexo);
                                                                                				rlx.add('reg', calendarsMantPersona);
                                                                                				rlx.add('reg', powerComboBoxMantNacionalidad);
                                                                                				rlx.add('reg', powerComboBoxMantPerGruSanguineo);
                                                                                				rlx.add('reg', editsMantPerDireccion);
                                                                                				rlx.add('reg', editsMantPerConEmergencia);
                                                                                				rlx.add('reg', editsMantPerEmail1);
                                                                                				rlx.add('reg', powerComboBoxMantPerIndigena);
                                                                                				rlx.add('reg', editsMantPerRif);
                                                                                				rlx.add('reg', editsMantPerTelHabitacion);
                                                                                				rlx.add('reg', editsMantTelCelular);
                                                                                				rlx.add('reg', powerComboBoxMantPerEstCivil);
                                                                                				rlx.add('reg', powerComboBoxMantPerTipPersona);
                                                                                				rlx.add('reg', editsMantPerPasaporte);
                                                                                				rlx.addStr('reg', pcMantPerMunicipio.getOption());
                                                                                				rlx.addStr('reg', pcMantPerParroquia.getOption());
																		        				if (methodName == 'modificar') {
																		        					rlx.addInt('reg', editsMantCedIdentidad.hideId);
																		        				}
																		        				Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()', rlx);
                                                                                			}
        }
    }
};
