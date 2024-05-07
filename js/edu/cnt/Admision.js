//******************** ALUMNO **********************
var dialogsAdmision 		= new Object();
var containerAdmision1		= new Object();					
var containerAdmision2		= new Object();
var containerAdmision3		= new Object();
var containerAdmision4		= new Object();
var editsAdmisionCedula 	= new Object();
var editsAdmisionNombre 	= new Object();
var editsAdmisionApellido 	= new Object();
var pbcAdmisionRaza 		= new Object();
var calendarAdmisionFechaNac= new Object();
var pbcAdmisionSexo 		= new Object();
var pbcAdmisionPais 		= new Object();
var pbcAdmisionRegion 		= new Object();
var pbcAdmisionCiudad 		= new Object();
var editsAdmisionEmergencia = new Object();
var pcbAdmisionMunicipio 	= new Object();
var pcbAdmisionParroquia 	= new Object();
var editsAdmisionRepreDireccion	= new Object();
var pcbAdmisionProcedencia 	= new Object();
var pcbAdmisionCarrera 		= new Object();
var pbcAdmisionPosicion 	= new Object();
var pcbAdmisionPeriodo 		= new Object();
var editsAdmisionRepreObserv	= new Object();
var imagesAdmisionAlumno        = new Object();
//******************** MADRE **********************
var editsAdmisionCedulaMadre 	= new Object();
var editsAdmisionNombreMadre 	= new Object();
var editsAdmisionApellidoMadre 	= new Object();
var pbcAdmisionProfesionMadre 	= new Object();
var editsAdmisionTelfMadre 		= new Object();
var imagesAdmisionMadre         = new Object();
//******************** PADRE **********************
var editsAdmisionCedulaPadre 	= new Object();
var editsAdmisionNombrePadre 	= new Object();
var editsAdmisionApellidoPadre 	= new Object();
var pbcAdmisionProfesionPadre 	= new Object();
var editsAdmisionTelfPadre 		= new Object();
var imagesAdmisionPadre         = new Object();
//**************** REPRESENTANTE ******************
var pbcAdmisionParentescoRepre 	= new Object();
var pbcAdmisionProfesionRepre 	= new Object();
var pbcAdmisionSexoRepre 		= new Object();
var editsAdmisionCedulaRepre	= new Object();
var editsAdmisionNombreRepre	= new Object();
var editsAdmisionApellidoRepre	= new Object();
var editsAdmisionTelfHabRepre	= new Object();
var editsAdmisionTelfCelRepre	= new Object();
var editsAdmisionEmailRepre		= new Object();
var imagesAdmisionRepre = new Object();
//*************************************************
var imgButtonsAdmisionGuardar = new Object();
var imgButtonsAdmisionLimpiar = new Object();
var imgButtonsAdmisionVerFicha = new Object();
var imgButtonsAdmisionBuscar = {};
var imgButtonsAdmisionSalir = new Object();
var mwAdmision = new Object();// minWindow
var modFchAlu = new ModeloFichaAlumno();

//****************** ESTRUCTURAS DE MENU PARA EL DIALOGO *******************
var MenuDlgAdmision = {
    idPanelMenu : 0,
	level : 0,
    captions : ['Mantenimiento'],
    functs : [''],
	subMenues : [1],
    icons : [''], 
    enableOption : [true]	
};
	  	
var SubMenuAdmision = {	
	idPanelMenu : 1,
	level : 1,
    captions : ['Persona','Relación Estudiante Representante','Ingreso de Estudiante','Institución de Procedencia','Profesión','Periodo','Inscripción'],
    functs : ['exeShow("js/edu/adm/","MantPersona")','exeShow("js/edu/cnt/","MantPerAutorizada")','exeShow("js/edu/cnt/","IngresoAlumno")','exeShow("js/edu/cnt/","MantInsProcedencia")','exeShow("js/edu/adm/","MantProfesion")','exeShow("js/edu/pla/man/","MantPeriodo")','exeShow("js/edu/ins/","InscAlumnos")'],
    subMenues : [0,0,0,0,0,0,0,0,0],
    icons : ['images/persona_1.png','images/per_autorizada.png','images/ingresoalumno_1.png','images/tipoinstitucion_1.png','images/profesion_1.png','images/periodo_1.png','images/inscripcion_1.png'], 
    enableOption : [true,true,true,true,true,true,true],	
	parentMenu : MenuDlgAdmision,
	parentOpc : 0
};

var Admision = {
	windowName : 'Admision',
	isCreate : false,
	
	show: function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsAdmision.isByClean())
 			this.limpiar('all');			
		dialogsAdmision.show();
	},
	
	hide: function() {
		dialogsAdmision.hide();
	},
	
	createMWs: function() {
		mwAdmision = desktop.addMinWindow('Admisión', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsAdmision.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsAdmision_Init: function() {
		dialogsAdmision.setMenu(MenuDlgAdmision);
		dialogsAdmision.setSubMenu(SubMenuAdmision);
        dialogsAdmision.setMinimizeXY(0,0);
		dialogsAdmision.setCenterScreen();
		dialogsAdmision.addSpace(1,0,40);		        
        dialogsAdmision.addObject(containerAdmision1,20,60);
        dialogsAdmision.addObject(containerAdmision2,20,268);
        dialogsAdmision.addObject(containerAdmision3,20,364);
        dialogsAdmision.addObject(containerAdmision4,20,460);        
        containerAdmision4.setFontTitle('verdana', 12, '#7e7e7e');
        containerAdmision3.setFontTitle('verdana', 12, '#7e7e7e');
        containerAdmision2.setFontTitle('verdana', 12, '#7e7e7e');
        containerAdmision1.setFontTitle('verdana', 12, '#7e7e7e');  
        dialogsAdmision.addObject(editsAdmisionCedula,35,69);
        dialogsAdmision.addObject(editsAdmisionNombre,280,69);
        dialogsAdmision.addObject(editsAdmisionApellido,522,69);        
        dialogsAdmision.addObject(pbcAdmisionRaza,35,92);
        dialogsAdmision.addObject(calendarAdmisionFechaNac,280,92);
        dialogsAdmision.addObject(pbcAdmisionSexo,522,92);        
        dialogsAdmision.addObject(pbcAdmisionPais,35, 115);
        dialogsAdmision.addObject(pbcAdmisionRegion,280, 115);
        dialogsAdmision.addObject(pcbAdmisionMunicipio,522, 115);		
        dialogsAdmision.addObject(pbcAdmisionCiudad,35,138);
        dialogsAdmision.addObject(pcbAdmisionParroquia,280,138);
		dialogsAdmision.addObject(imagesAdmisionAlumno,760, 64);
		imagesAdmisionAlumno.setSize(74,62);	        
        dialogsAdmision.addObject(editsAdmisionEmergencia,522,138);
		dialogsAdmision.addObject(editsAdmisionRepreDireccion,35, 161);
        dialogsAdmision.addObject(pcbAdmisionProcedencia,35,184);
        dialogsAdmision.addObject(pcbAdmisionCarrera,35, 207);
        dialogsAdmision.addObject(pbcAdmisionPosicion,280, 207);
        dialogsAdmision.addObject(pcbAdmisionPeriodo,522, 207);
		dialogsAdmision.addObject(editsAdmisionRepreObserv,35, 230);
        //MADRE        
        dialogsAdmision.addObject(editsAdmisionCedulaMadre,35, 279);
        dialogsAdmision.addObject(editsAdmisionNombreMadre,280, 279);
        dialogsAdmision.addObject(editsAdmisionApellidoMadre,522, 279);
        dialogsAdmision.addObject(pbcAdmisionProfesionMadre,35, 323);
        dialogsAdmision.addObject(editsAdmisionTelfMadre,522, 323);
		dialogsAdmision.addObject(imagesAdmisionMadre,760, 274);
		imagesAdmisionMadre.setSize(74,62);
		//PADRE
        dialogsAdmision.addObject(editsAdmisionCedulaPadre,35, 374);
        dialogsAdmision.addObject(editsAdmisionNombrePadre,280, 374);
        dialogsAdmision.addObject(editsAdmisionApellidoPadre,522,374);
        dialogsAdmision.addObject(pbcAdmisionProfesionPadre,35, 419);
        dialogsAdmision.addObject(editsAdmisionTelfPadre,522, 419);
		dialogsAdmision.addObject(imagesAdmisionPadre,760, 369);
		imagesAdmisionPadre.setSize(74,62);        
        //REPRESENTANTE
        dialogsAdmision.addObject(pbcAdmisionParentescoRepre,35, 470);
        dialogsAdmision.addObject(pbcAdmisionProfesionRepre,280, 470);
        dialogsAdmision.addObject(pbcAdmisionSexoRepre,522, 470);
		dialogsAdmision.addObject(editsAdmisionCedulaRepre,35, 492);
        dialogsAdmision.addObject(editsAdmisionNombreRepre,280, 492);
        dialogsAdmision.addObject(editsAdmisionApellidoRepre,522, 492);		
        dialogsAdmision.addObject(editsAdmisionTelfHabRepre,35, 515);
        dialogsAdmision.addObject(editsAdmisionTelfCelRepre,280, 515);
        dialogsAdmision.addObject(editsAdmisionEmailRepre,522, 515);
		dialogsAdmision.addObject(imagesAdmisionRepre,760, 465);
		imagesAdmisionRepre.setSize(74,62);
		//BOTONES
        dialogsAdmision.addObject(imgButtonsAdmisionGuardar,129, 551);
        dialogsAdmision.addObject(imgButtonsAdmisionLimpiar,255, 551);
		dialogsAdmision.addObject(imgButtonsAdmisionVerFicha,379, 551);
		dialogsAdmision.addObject(imgButtonsAdmisionBuscar,502,551);
		dialogsAdmision.addObject(imgButtonsAdmisionSalir,625, 551);
		calendarAdmisionFechaNac.sendToFrom(100);		
	},

  	create: function() {
  		dialogsAdmision = dialogs.create('dialogsAdmision',0,0,854,534,'ADMISIÓN DE ESTUDIANTE');
		dialogsAdmision.setAdjY(60);
		calendarAdmisionFechaNac = calendars.create("calendarAdmisionFechaNac");
        calendarAdmisionFechaNac.setValidEmpty();
        calendarAdmisionFechaNac.setCaption('Fecha Nac.:',1,79);
        calendarAdmisionFechaNac.setWidthEditCalendar(127);

  		editsAdmisionCedula = edits.create('editsAdmisionCedula','editsAdmisionCedula','C.i. (*):',1,82,'normal');
  		editsAdmisionCedula.setValidInteger();
  		editsAdmisionCedula.setFieldFind(true);
        editsAdmisionCedula.setSizeEdit(149);
        
  		editsAdmisionNombre = edits.create('editsAdmisionNombre','editsAdmisionNombre','Nombre (*):',1,79,'normal');
  		editsAdmisionNombre.setValidEmpty();
  		editsAdmisionNombre.setFieldFind(true);
        editsAdmisionNombre.setSizeEdit(149);
        editsAdmisionNombre.setMaxLength(50);
        
  		editsAdmisionApellido = edits.create('editsAdmisionApellido','editsAdmisionApellido','Apellido (*):',1,78,'normal');
  		editsAdmisionApellido.setValidEmpty();
  		editsAdmisionApellido.setFieldFind(true);
        editsAdmisionApellido.setSizeEdit(149);
        editsAdmisionApellido.setMaxLength(50);
        
        editsAdmisionEmergencia = edits.create('editsAdmisionEmergencia','editsAdmisionEmergencia','Emergencia :',1,78,'normal');
        editsAdmisionEmergencia.setValidEmpty();
        editsAdmisionEmergencia.setSizeEdit(149);
        editsAdmisionEmergencia.setMaxLength(150);
        
        pbcAdmisionRaza = powerComboBox.create('pbcAdmisionRaza','pbcAdmisionRaza','Indígena :',1,82);
		pbcAdmisionRaza.enableReadOnlyEditor();
        pbcAdmisionRaza.addEmptyOption();
        pbcAdmisionRaza.setValidEmpty();
        pbcAdmisionRaza.setDataType('string');
		pbcAdmisionRaza.addOptionAndSimpleValue(null, 'NO', 'NO');
        pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Wayúu', 'Wayúu');
        pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Añu', 'Añu');
        pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Yukpa', 'Yukpa');
        pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Japreria', 'Japreria');
        pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Barí', 'Barí');
        pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Piapoko', 'Piapoko');
        pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Pemón', 'Pemón');
        pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Kariña', 'Kariña');
		pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Panare', 'Panare');
        pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Chaima', 'Chaima');
        pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Maquiritare', 'Maquiritare');
        pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Akawayo', 'Akawayo');
		pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Yabarana', 'Yabarana');
        pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Mapoyo', 'Mapoyo');
        pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Waike', 'Waike');
        pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Yanomami', 'Yanomami');
		pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Wanikua', 'Wanikua');
        pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Waraos', 'Waraos');
		pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Waikerí', 'Waikerí');
		pbcAdmisionRaza.addOptionAndSimpleValue(null, 'Wottuja-Piaroa', 'Wottuja-Piaroa');
        
        pbcAdmisionSexo = powerComboBox.create('pbcAdmisionSexo','pbcAdmisionSexo','Sexo :',1,78);
        pbcAdmisionSexo.setDataType('string');
		pbcAdmisionSexo.enableReadOnlyEditor();
        pbcAdmisionSexo.addEmptyOption();
        pbcAdmisionSexo.setValidEmpty();
        pbcAdmisionSexo.addOptionAndSimpleValue(null, 'Femenino', 'Femenino');
        pbcAdmisionSexo.addOptionAndSimpleValue(null, 'Masculino', 'Masculino');
        pbcAdmisionPais = powerComboBox.create('pbcAdmisionPais','pbcAdmisionPais','País :',1,82);
        pbcAdmisionPais.enableReadOnlyEditor();
        pbcAdmisionPais.addEmptyOption();
        pbcAdmisionPais.setValidEmpty();
        pbcAdmisionPais.enableOnChangeToEmptyOption();
        pbcAdmisionRegion = powerComboBox.create('pbcAdmisionRegion','pbcAdmisionRegion','Región :',1,79);
        pbcAdmisionRegion.enableReadOnlyEditor();
        pbcAdmisionRegion.addEmptyOption();
        pbcAdmisionRegion.setValidEmpty();
        pbcAdmisionRegion.enableOnChangeToEmptyOption();
        pbcAdmisionCiudad = powerComboBox.create('pbcAdmisionCiudad','pbcAdmisionCiudad','Ciudad :',1,82);
        pbcAdmisionCiudad.enableReadOnlyEditor();
        pbcAdmisionCiudad.addEmptyOption();
        pbcAdmisionCiudad.setValidEmpty();
        pcbAdmisionMunicipio = powerComboBox.create('pcbAdmisionMunicipio','pcbAdmisionMunicipio','Municipio :',1,78);
        pcbAdmisionMunicipio.addEmptyOption();
        pcbAdmisionMunicipio.setValidEmpty();
        pcbAdmisionParroquia = powerComboBox.create('pcbAdmisionParroquia','pcbAdmisionParroquia','Parroquia :',1,79);
        pcbAdmisionParroquia.addEmptyOption();
        pcbAdmisionParroquia.setValidEmpty();
		imagesAdmisionAlumno = images.create('imagesAdmisionAlumno','imagesAdmisionAlumno','images/pht/anonymous.png');		
        
        pcbAdmisionProcedencia = powerComboBox.create('pcbAdmisionProcedencia','pcbAdmisionProcedencia','Procedencia :',1,82);
        pcbAdmisionProcedencia.setWidthCombo(611);
        pcbAdmisionProcedencia.enableReadOnlyEditor();
        pcbAdmisionProcedencia.addEmptyOption();
        pcbAdmisionProcedencia.setValidEmpty();
        pcbAdmisionCarrera = powerComboBox.create('pcbAdmisionCarrera','pcbAdmisionCarrera','Carrera :',1,82);
        pcbAdmisionCarrera.enableReadOnlyEditor();
        pcbAdmisionCarrera.addEmptyOption();
        pcbAdmisionCarrera.setValidEmpty();
        pcbAdmisionCarrera.enableOnChangeToEmptyOption();
        pbcAdmisionPosicion = powerComboBox.create('pbcAdmisionPosicion','pbcAdmisionPosicion','Posición :',1,79);                
        pbcAdmisionPosicion.enableReadOnlyEditor();
        pbcAdmisionPosicion.addEmptyOption();
        pbcAdmisionPosicion.setValidEmpty();
        pcbAdmisionPeriodo = powerComboBox.create('pcbAdmisionPeriodo','pcbAdmisionPeriodo','Periodo :',1,78);
        pcbAdmisionPeriodo.enableReadOnlyEditor();
        pcbAdmisionPeriodo.addEmptyOption();
        pcbAdmisionPeriodo.setValidEmpty();
                
        editsAdmisionCedulaMadre = edits.create('editsAdmisionCedulaMadre','editsAdmisionCedulaMadre','C.i. (*):',1,82,'normal');
		editsAdmisionCedulaMadre.setSizeEdit(149);
		editsAdmisionCedulaMadre.setValidInteger();
		editsAdmisionCedulaMadre.setFieldFind(true);
		editsAdmisionNombreMadre = edits.create('editsAdmisionNombreMadre','editsAdmisionNombreMadre','Nombre (*):',1,79,'normal');
		editsAdmisionNombreMadre.setSizeEdit(149);
		editsAdmisionNombreMadre.setFieldFind(true);
		editsAdmisionNombreMadre.setMaxLength(50);
		editsAdmisionApellidoMadre = edits.create('editsAdmisionApellidoMadre','editsAdmisionApellidoMadre','Apellido (*):',1,78,'normal');
		editsAdmisionApellidoMadre.setSizeEdit(149);
		editsAdmisionApellidoMadre.setFieldFind(true);
		editsAdmisionApellidoMadre.setMaxLength(50);
		pbcAdmisionProfesionMadre = powerComboBox.create('pbcAdmisionProfesionMadre','pbcAdmisionProfesionMadre','Profesión :',1,82);
		pbcAdmisionProfesionMadre.setWidthCombo(370);
		pbcAdmisionProfesionMadre.enableReadOnlyEditor();
		pbcAdmisionProfesionMadre.addEmptyOption();
		pbcAdmisionProfesionMadre.setValidEmpty();
		editsAdmisionTelfMadre = edits.create('editsAdmisionTelfMadre','editsAdmisionTelfMadre','Telf. Celular :',1,78,'normal');
  		editsAdmisionTelfMadre.setSizeEdit(149);
  		editsAdmisionTelfMadre.setMaxLength(20); 
  		editsAdmisionTelfMadre.setValidEmpty();
  		editsAdmisionTelfMadre.setMaskPhone();
		imagesAdmisionMadre = images.create('imagesAdmisionMadre','imagesAdmisionMadre','images/pht/anonymous.png');		
  		
  		editsAdmisionCedulaPadre = edits.create('editsAdmisionCedulaPadre','editsAdmisionCedulaPadre','C.i. (*):',1,82,'normal');
		editsAdmisionCedulaPadre.setSizeEdit(149);
		editsAdmisionCedulaPadre.setValidInteger();
		editsAdmisionCedulaPadre.setFieldFind(true);
		editsAdmisionNombrePadre = edits.create('editsAdmisionNombrePadre','editsAdmisionNombrePadre','Nombre (*):',1,79,'normal');
		editsAdmisionNombrePadre.setSizeEdit(149);
		editsAdmisionNombrePadre.setFieldFind(true);
		editsAdmisionNombrePadre.setMaxLength(50);
		editsAdmisionApellidoPadre = edits.create('editsAdmisionApellidoPadre','editsAdmisionApellidoPadre','Apellido (*):',1,78,'normal');
		editsAdmisionApellidoPadre.setSizeEdit(149);
		editsAdmisionApellidoPadre.setFieldFind(true);
		editsAdmisionApellidoPadre.setMaxLength(50);
		pbcAdmisionProfesionPadre = powerComboBox.create('pbcAdmisionProfesionPadre','pbcAdmisionProfesionPadre','Profesión :',1,82);
		pbcAdmisionProfesionPadre.setWidthCombo(370);
		pbcAdmisionProfesionPadre.enableReadOnlyEditor();
		pbcAdmisionProfesionPadre.addEmptyOption();
		pbcAdmisionProfesionPadre.setValidEmpty();
		editsAdmisionTelfPadre = edits.create('editsAdmisionTelfPadre','editsAdmisionTelfPadre','Telf. Celular :',1,78,'normal');
  		editsAdmisionTelfPadre.setSizeEdit(149);
  		editsAdmisionTelfPadre.setMaxLength(20); 
  		editsAdmisionTelfPadre.setValidEmpty();
  		editsAdmisionTelfPadre.setMaskPhone();
		imagesAdmisionPadre = images.create('imagesAdmisionPadre','imagesAdmisionPadre','images/pht/anonymous.png');			

  		pbcAdmisionParentescoRepre = powerComboBox.create('pbcAdmisionParentescoRepre','pbcAdmisionParentescoRepre','Parentesco :',1,82);
  		pbcAdmisionParentescoRepre.enableReadOnlyEditor();
  		pbcAdmisionParentescoRepre.addEmptyOption();
  		pbcAdmisionParentescoRepre.setValidEmpty();
  		pbcAdmisionProfesionRepre = powerComboBox.create('pbcAdmisionProfesionRepre','pbcAdmisionProfesionRepre','Profesión :',1,79);
  		pbcAdmisionProfesionRepre.enableReadOnlyEditor();
  		pbcAdmisionProfesionRepre.addEmptyOption();
  		pbcAdmisionProfesionRepre.setValidEmpty();
		pbcAdmisionSexoRepre = powerComboBox.create('pbcAdmisionSexoRepre','pbcAdmisionSexoRepre','Sexo :',1,78);
		pbcAdmisionSexoRepre.setDataType('string');
		pbcAdmisionSexoRepre.enableReadOnlyEditor();
		pbcAdmisionSexoRepre.addEmptyOption();
		pbcAdmisionSexoRepre.setValidEmpty();
		pbcAdmisionSexoRepre.addOptionAndSimpleValue(null, 'Femenino', 'Femenino');
		pbcAdmisionSexoRepre.addOptionAndSimpleValue(null, 'Masculino', 'Masculino');
		editsAdmisionCedulaRepre = edits.create('editsAdmisionCedulaRepre','editsAdmisionCedulaRepre','C.i. (*):',1,82,'normal');
		editsAdmisionCedulaRepre.setSizeEdit(149);
		editsAdmisionCedulaRepre.setValidInteger();
		editsAdmisionCedulaRepre.setFieldFind(true);
		editsAdmisionNombreRepre = edits.create('editsAdmisionNombreRepre','editsAdmisionNombreRepre','Nombre (*):',1,79,'normal');
		editsAdmisionNombreRepre.setSizeEdit(149);
		editsAdmisionNombreRepre.setFieldFind(true);
		editsAdmisionNombreRepre.setMaxLength(50);
		editsAdmisionApellidoRepre = edits.create('editsAdmisionApellidoRepre','editsAdmisionApellidoRepre','Apellido (*):',1,78,'normal');
		editsAdmisionApellidoRepre.setSizeEdit(149);
		editsAdmisionApellidoRepre.setFieldFind(true);
		editsAdmisionApellidoRepre.setMaxLength(50);
		editsAdmisionTelfHabRepre = edits.create('editsAdmisionTelfHabRepre','editsAdmisionTelfHabRepre','Telf. Hab :',1,82,'normal');
		editsAdmisionTelfHabRepre.setSizeEdit(149);
		editsAdmisionTelfHabRepre.setMaxLength(20); 
		editsAdmisionTelfCelRepre = edits.create('editsAdmisionTelfCelRepre','editsAdmisionTelfCelRepre','Telf. Celular :',1,79,'normal');
		editsAdmisionTelfCelRepre.setSizeEdit(149);
		editsAdmisionTelfCelRepre.setMaxLength(20); 
		editsAdmisionTelfCelRepre.setValidEmpty();
		editsAdmisionTelfCelRepre.setMaskPhone();
		editsAdmisionEmailRepre	= edits.create('editsAdmisionEmailRepre','editsAdmisionEmailRepre','Email :',1,78,'normal');
		editsAdmisionEmailRepre.setSizeEdit(149);
		editsAdmisionEmailRepre.setMaxLength(50); 
		editsAdmisionRepreDireccion	= edits.create('editsAdmisionRepreDireccion','editsAdmisionRepreDireccion','Dirección :',1,82,'normal');
		editsAdmisionRepreDireccion.setSizeEdit(632);
		editsAdmisionRepreDireccion.setMaxLength(150);
		editsAdmisionRepreObserv = edits.create('editsAdmisionRepreObserv','editsAdmisionRepreObserv','Observación :',1,82,'normal');
		editsAdmisionRepreObserv.setSizeEdit(632);
		editsAdmisionRepreObserv.setMaxLength(100);
		imagesAdmisionRepre = images.create('imagesAdmisionRepre','imagesAdmisionRepre','images/pht/anonymous.png');		
		
		containerAdmision1 = container.create("containerAdmision1",'Estudiante',4);
        containerAdmision1.setDimension(813,195);
        containerAdmision2 = container.create("containerAdmision2",'Madre',4);
        containerAdmision2.setDimension(813,82);
        containerAdmision3 = container.create("containerAdmision3",'Padre',4);
        containerAdmision3.setDimension(813,82);
        containerAdmision4 = container.create("containerAdmision4",'Representante',4);
        containerAdmision4.setDimension(813,82);

  		imgButtonsAdmisionGuardar = imgButtons.create('imgButtonsAdmisionGuardar','Guardar.','ok.png');
  		imgButtonsAdmisionLimpiar = imgButtons.create('imgButtonsAdmisionLimpiar','Limpiar','limpiar.png');
		imgButtonsAdmisionVerFicha = imgButtons.create('imgButtonsAdmisionVerFicha','Ver Ficha','print.png');
      	imgButtonsAdmisionBuscar = imgButtons.create('imgButtonsAdmisionBuscar','Buscar','icono_buscar.png');
		imgButtonsAdmisionSalir = imgButtons.create('imgButtonsAdmisionSalir','Salir','salir.png');
        imgButtonsAdmisionGuardar.setDimension(98,22);
        imgButtonsAdmisionLimpiar.setDimension(98,22);
        imgButtonsAdmisionVerFicha.setDimension(98,22);
		imgButtonsAdmisionBuscar.setDimension(98, 22);
		imgButtonsAdmisionSalir.setDimension(98,22);
  	},

  	init: function() {
  		this.create();
  		this.setEvents();
  		this.dialogsAdmision_Init();
  		this.createMWs();
  	},
  	
  	limpiar: function(flag) {
  		if (flag == 'all') {
	  		imagesAdmisionAlumno.getObject().refresh = true;
	  		imagesAdmisionMadre.getObject().refresh = true;
	  		imagesAdmisionPadre.getObject().refresh = true;
	  		imagesAdmisionRepre.getObject().refresh = true;
	  		editsAdmisionCedula.clear();
			editsAdmisionCedula.flagFind = true;
	  		editsAdmisionCedula.hideId = -1;
	  		editsAdmisionNombre.clear();
	  		editsAdmisionApellido.clear();
	  		pbcAdmisionRaza.setSelectedIndex(1);
	  		calendarAdmisionFechaNac.clear();
	  		pbcAdmisionSexo.setSelectedIndex(0);
	  		Tool.rstPwrCmb(pbcAdmisionPais);
	  		Tool.rstPwrCmb(pbcAdmisionRegion);
	  		Tool.rstPwrCmb(pbcAdmisionCiudad);
	  		pcbAdmisionMunicipio.clear();
	  		pcbAdmisionParroquia.clear();
	  		editsAdmisionEmergencia.clear();
	  		editsAdmisionRepreDireccion.clear();
	  		Tool.rstPwrCmb(pcbAdmisionProcedencia);
	  		pcbAdmisionProcedencia.hideId = -1;
	  		Tool.rstPwrCmb(pcbAdmisionCarrera);
	  		Tool.rstPwrCmb(pbcAdmisionPosicion);
	  		Tool.rstPwrCmb(pcbAdmisionPeriodo);
	  		editsAdmisionRepreObserv.clear();
	  		editsAdmisionCedulaMadre.clear();
	  		editsAdmisionCedulaMadre.hideId = -1;
	  		editsAdmisionCedulaMadre.tlfhab = "";
	  		editsAdmisionCedulaMadre.email = "";
	  		editsAdmisionNombreMadre.clear();
	  		editsAdmisionApellidoMadre.clear();
	  		pbcAdmisionProfesionMadre.setSelectedIndex(0);
	  		editsAdmisionTelfMadre.delMaskPhone();
	  		editsAdmisionCedulaPadre.clear();
	  		editsAdmisionCedulaPadre.hideId = -1;
	  		editsAdmisionCedulaPadre.tlfhab = "";
	  		editsAdmisionCedulaPadre.email = "";
	  		editsAdmisionNombrePadre.clear();
	  		editsAdmisionApellidoPadre.clear();
	  		pbcAdmisionProfesionPadre.setSelectedIndex(0);
	  		editsAdmisionTelfPadre.delMaskPhone();
	  		pbcAdmisionParentescoRepre.setSelectedIndex(0);
	  		pbcAdmisionProfesionRepre.setSelectedIndex(0);
	  		pbcAdmisionSexoRepre.setSelectedIndex(0);
	  		editsAdmisionCedulaRepre.clear();
	  		editsAdmisionCedulaRepre.hideId = -1;
	  		editsAdmisionNombreRepre.clear();
	  		editsAdmisionApellidoRepre.clear();
	  		editsAdmisionTelfHabRepre.clear();
	  		editsAdmisionTelfCelRepre.delMaskPhone();
	  		editsAdmisionEmailRepre.clear();		
			imagesAdmisionAlumno.setSource('images/pht/anonymous.png');
			imagesAdmisionMadre.setSource('images/pht/anonymous.png');
			imagesAdmisionPadre.setSource('images/pht/anonymous.png');
			imagesAdmisionRepre.setSource('images/pht/anonymous.png');		
	  		dialogsAdmision.setMsg("");
	  		Tool.cnnSrv('MantObject', 'getAdmisionInit', this.windowName + '.loadDataInit()');
  		}
  		else 
  			this.buscarAlumno();
  	},
  	
    loadDataInit: function() {
		Tool.loadPowerComboData(dialogsAdmision, pbcAdmisionPais, 0, 1, json('getMantPais'));
		Tool.loadPowerComboData(dialogsAdmision, pcbAdmisionMunicipio, 0, 0, json('getMcpio'));
		Tool.loadPowerComboData(dialogsAdmision, pcbAdmisionParroquia, 0, 0, json('getParroq'));
		Tool.loadPowerComboData(dialogsAdmision, pcbAdmisionProcedencia, 5, 0, json('getMantInsProcedencia'));
  		Tool.loadPowerComboData(dialogsAdmision, pcbAdmisionCarrera, 0, 1, json('getCarrera'));
  		Tool.loadPowerComboData(dialogsAdmision, pcbAdmisionPeriodo, 0, 1, json('getMantPeriodoActivoPlan'));
		Tool.loadPowerComboData(dialogsAdmision, pbcAdmisionProfesionMadre, 0, 1, json('getMantProfesion'));
		Tool.loadPowerComboData(dialogsAdmision, pbcAdmisionProfesionPadre, 0, 1, json('getMantProfesion'));
		Tool.loadPowerComboData(dialogsAdmision, pbcAdmisionProfesionRepre, 0, 1, json('getMantProfesion'));
		Tool.loadPowerComboData(dialogsAdmision, pbcAdmisionParentescoRepre, 0, 1, json('getParentesco'));
		dialogsAdmision.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    loadDataAlumno: function() {
  		editsAdmisionCedula.setValue(json('getAlumnoAdmision').data[0][0]);
  		editsAdmisionNombre.setValue(json('getAlumnoAdmision').data[1][0]);
  		editsAdmisionApellido.setValue(json('getAlumnoAdmision').data[2][0]);
  		pbcAdmisionRaza.findOption(json('getAlumnoAdmision').data[3][0]);
  		calendarAdmisionFechaNac.setFechaToEdit(json('getAlumnoAdmision').data[4][0]);
  		pbcAdmisionSexo.findOption(json('getAlumnoAdmision').data[5][0]);
  		pbcAdmisionPais.findOption(json('getAlumnoAdmision').data[6][0]);
		Tool.loadPowerComboData(dialogsAdmision, pbcAdmisionRegion, 0, 1, json('getRegionAsoPais'));
		Tool.loadPowerComboData(dialogsAdmision, pbcAdmisionCiudad, 0, 1, json('getCiudadAsoRegionPais'));
  		pbcAdmisionRegion.findOption(json('getAlumnoAdmision').data[7][0]);
  		pbcAdmisionCiudad.findOption(json('getAlumnoAdmision').data[8][0]);
  		pcbAdmisionMunicipio.setSelectedOption(json('getAlumnoAdmision').data[43][0]);
  		pcbAdmisionParroquia.setSelectedOption(json('getAlumnoAdmision').data[44][0]);
  		
  		editsAdmisionEmergencia.setValue(json('getAlumnoAdmision').data[9][0]);
  		editsAdmisionRepreDireccion.setValue(json('getAlumnoAdmision').data[10][0]);
  		pcbAdmisionProcedencia.findOption(json('getAlumnoAdmision').data[11][0]);
  		pcbAdmisionProcedencia.hideId = json('getAlumnoAdmision').data[42][0];
  		pcbAdmisionCarrera.findOption(json('getAlumnoAdmision').data[12][0]);
		Tool.loadPowerComboData(dialogsAdmision, pbcAdmisionPosicion, 0, 1, json('getMantPensumPosicion'));
  		pbcAdmisionPosicion.findOption(json('getAlumnoAdmision').data[13][0]);
  		pcbAdmisionPeriodo.findOption(json('getAlumnoAdmision').data[14][0]);
  		editsAdmisionRepreObserv.setValue(json('getAlumnoAdmision').data[15][0]);
  		imagesAdmisionAlumno.getObject().onerror = function() {imagesAdmisionAlumno.setSource('images/pht/anonymous.png')};
  		imagesAdmisionAlumno.setSource('images/pht/' + editsAdmisionCedula.getValue() + '.jpg');
  		
  		editsAdmisionCedulaMadre.hideId = json('getAlumnoAdmision').data[16][0];
  		editsAdmisionCedulaMadre.setValue(json('getAlumnoAdmision').data[17][0]);
  		editsAdmisionNombreMadre.setValue(json('getAlumnoAdmision').data[18][0]);
  		editsAdmisionApellidoMadre.setValue(json('getAlumnoAdmision').data[19][0]);
  		pbcAdmisionProfesionMadre.findOption(json('getAlumnoAdmision').data[20][0]);
  		editsAdmisionTelfMadre.setValue(json('getAlumnoAdmision').data[21][0]);
		editsAdmisionCedulaMadre.tlfhab = json('getAlumnoAdmision').data[38][0];
		editsAdmisionCedulaMadre.email = json('getAlumnoAdmision').data[39][0];
		imagesAdmisionMadre.getObject().onerror = function() {imagesAdmisionMadre.setSource('images/pht/anonymous.png')};
		imagesAdmisionMadre.setSource('images/pht/' + editsAdmisionCedulaMadre.getValue() + '.jpg');
  		
  		editsAdmisionCedulaPadre.hideId = json('getAlumnoAdmision').data[22][0];
  		editsAdmisionCedulaPadre.setValue(json('getAlumnoAdmision').data[23][0]);
  		editsAdmisionNombrePadre.setValue(json('getAlumnoAdmision').data[24][0]);
  		editsAdmisionApellidoPadre.setValue(json('getAlumnoAdmision').data[25][0]);
  		pbcAdmisionProfesionPadre.findOption(json('getAlumnoAdmision').data[26][0]);
  		editsAdmisionTelfPadre.setValue(json('getAlumnoAdmision').data[27][0]);
		editsAdmisionCedulaPadre.tlfhab = json('getAlumnoAdmision').data[40][0];
		editsAdmisionCedulaPadre.email = json('getAlumnoAdmision').data[41][0];
		imagesAdmisionPadre.getObject().onerror = function() {imagesAdmisionPadre.setSource('images/pht/anonymous.png')};
		imagesAdmisionPadre.setSource('images/pht/' + editsAdmisionCedulaPadre.getValue() + '.jpg');
  		
  		pbcAdmisionParentescoRepre.findOption(json('getAlumnoAdmision').data[28][0]);
  		pbcAdmisionProfesionRepre.findOption(json('getAlumnoAdmision').data[29][0]);
  		pbcAdmisionSexoRepre.findOption(json('getAlumnoAdmision').data[30][0]);
  		editsAdmisionCedulaRepre.hideId = json('getAlumnoAdmision').data[31][0];
  		editsAdmisionCedulaRepre.setValue(json('getAlumnoAdmision').data[32][0]);
  		editsAdmisionNombreRepre.setValue(json('getAlumnoAdmision').data[33][0]);
  		editsAdmisionApellidoRepre.setValue(json('getAlumnoAdmision').data[34][0]);
  		editsAdmisionTelfHabRepre.setValue(json('getAlumnoAdmision').data[35][0]);
  		editsAdmisionTelfCelRepre.setValue(json('getAlumnoAdmision').data[36][0]);
  		editsAdmisionEmailRepre.setValue(json('getAlumnoAdmision').data[37][0]);
  		imagesAdmisionRepre.getObject().onerror = function() {imagesAdmisionRepre.setSource('images/pht/anonymous.png')};
  		imagesAdmisionRepre.setSource('images/pht/' + editsAdmisionCedulaRepre.getValue() + '.jpg');
    },
    
    activeFlagAlumno: function() {
    	if (editsAdmisionCedula.hideId == -1)
    		editsAdmisionCedula.flagFind = true;    	
    },
    
	findByCedulaAlumno: function() {
		if (editsAdmisionCedula.getValue() == "" || editsAdmisionCedula.valid(dialogsAdmision)) {
			if (editsAdmisionCedula.getValue() != '' && editsAdmisionCedula.flagFind) {
				this.buscarAlumno();
			}
		}
    	else
    		editsAdmisionCedula.clear();
	},
	
    buscarAlumno: function() {
        var rlx = xmlStructs.createRecordList("rlx");
    	
        imagesAdmisionAlumno.getObject().refresh = true;
        if (editsAdmisionCedula.hideId != -1 && editsAdmisionCedula.getValue() != '') {
			if (editsAdmisionNombre.getValue() != '' && editsAdmisionApellido.getValue() != '') {
				editsAdmisionCedula.flagFind = false;
				rlx.addInt('reg', editsAdmisionCedula.hideId);
				Tool.cnnSrv('MantObject', 'getAlumnoAdmision', this.windowName + '.loadDataAlumno()', rlx);
			}
			else
				editsAdmisionCedula.hideId = -1;
		}
		else {
			editsAdmisionCedula.hideId = -1;
			ResuBusqueda.setObjectExtFnc(editsAdmisionCedula, editsAdmisionNombre, editsAdmisionApellido, this.windowName + ".buscarAlumno()");			
			Tool.getGridData('MantObject', 'getAdmisionPersTodas', dialogsAdmision, gridsResuBusqueda, 'ResuBusqueda', editsAdmisionCedula, editsAdmisionCedula, editsAdmisionNombre, editsAdmisionNombre, editsAdmisionApellido, editsAdmisionApellido);
		}
   	},  

   	loadDataMadre: function() {
   		if (json('getMantPersTodas').data.length > 4) {
   			pbcAdmisionProfesionMadre.findOption(json('getMantPersTodas').data[16][0]);
   			editsAdmisionTelfMadre.setValue(json('getMantPersTodas').data[11][0]);
   		}
   	},
   	
	buscarMadre: function(src) {
		var fnd = false;
		
		if (src == 'C') { 
			if (editsAdmisionCedulaMadre.valid(dialogsAdmision)) {
				editsAdmisionNombreMadre.clear();
				editsAdmisionApellidoMadre.clear();
				fnd = true;
			}
		}
		else if (src == 'N') { 
			if (editsAdmisionNombreMadre.valid(dialogsAdmision)) {
				editsAdmisionCedulaMadre.clear();
				editsAdmisionApellidoMadre.clear();
				fnd = true;
			} 
		}
		else if (src == 'A') { 
			if (editsAdmisionApellidoMadre.valid(dialogsAdmision)) {
				editsAdmisionCedulaMadre.clear();
				editsAdmisionNombreMadre.clear();
				fnd = true;
			}
		}
		if (fnd) {
			imagesAdmisionMadre.getObject().refresh = true;
			editsAdmisionCedulaMadre.hideId = -1;
			ResuBusqueda.setObjectExtFnc(editsAdmisionCedulaMadre, editsAdmisionNombreMadre, editsAdmisionApellidoMadre, this.windowName + ".loadDataMadre()");
			Tool.getGridData('MantObject', 'getAdmisionPersTodas', dialogsAdmision, gridsResuBusqueda, 'ResuBusqueda', editsAdmisionCedulaMadre, editsAdmisionCedulaMadre, editsAdmisionNombreMadre, editsAdmisionNombreMadre, editsAdmisionApellidoMadre, editsAdmisionApellidoMadre);
		}
   	},  

   	loadDataPadre: function() {
   		if (json('getMantPersTodas').data.length > 4) {
   			pbcAdmisionProfesionPadre.findOption(json('getMantPersTodas').data[16][0]);
   			editsAdmisionTelfPadre.setValue(json('getMantPersTodas').data[11][0]);
   		}
   	},

    buscarPadre: function(src) {
		var fnd = false;
		
		if (src == 'C') { 
			if (editsAdmisionCedulaPadre.valid(dialogsAdmision)) { 
				editsAdmisionNombrePadre.clear();
				editsAdmisionApellidoPadre.clear();
				fnd = true;
			}
		}
		else if (src == 'N') { 
			if (editsAdmisionNombrePadre.valid(dialogsAdmision)) {
				editsAdmisionCedulaPadre.clear();
				editsAdmisionApellidoPadre.clear();
				fnd = true;
			} 
		}
		else if (src == 'A') { 
			if (editsAdmisionApellidoPadre.valid(dialogsAdmision)) {
				editsAdmisionCedulaPadre.clear();
				editsAdmisionNombrePadre.clear();
				fnd = true;
			}
		}
		if (fnd) {
			imagesAdmisionPadre.getObject().refresh = true;
			editsAdmisionCedulaPadre.hideId = -1;
			ResuBusqueda.setObjectExtFnc(editsAdmisionCedulaPadre, editsAdmisionNombrePadre, editsAdmisionApellidoPadre, this.windowName + ".loadDataPadre()");
			Tool.getGridData('MantObject', 'getAdmisionPersTodas', dialogsAdmision, gridsResuBusqueda, 'ResuBusqueda', editsAdmisionCedulaPadre, editsAdmisionCedulaPadre, editsAdmisionNombrePadre, editsAdmisionNombrePadre, editsAdmisionApellidoPadre, editsAdmisionApellidoPadre);
		}
   	},  

   	loadDataRepre: function() {
   		if (json('getMantPersTodas').data.length > 4) {
   			pbcAdmisionProfesionRepre.findOption(json('getMantPersTodas').data[16][0]);
   			editsAdmisionTelfCelRepre.setValue(json('getMantPersTodas').data[11][0]);
   			editsAdmisionTelfHabRepre.setValue(json('getMantPersTodas').data[4][0]);
   			editsAdmisionEmailRepre.setValue(json('getMantPersTodas').data[7][0]);
   		}
   	},

   	buscarRepre: function(src) {
		var fnd = false;
		
		if (src == 'C') { 
			if (editsAdmisionCedulaRepre.valid(dialogsAdmision)) {
				editsAdmisionNombreRepre.clear();
				editsAdmisionApellidoRepre.clear();
				fnd = true;
			}
		}
		else if (src == 'N') { 
			if (editsAdmisionNombreRepre.valid(dialogsAdmision)) {
				editsAdmisionCedulaRepre.clear();
				editsAdmisionApellidoRepre.clear();
				fnd = true;
			} 
		}
		else if (src == 'A') { 
			if (editsAdmisionApellidoRepre.valid(dialogsAdmision)) {
				editsAdmisionCedulaRepre.clear();
				editsAdmisionNombreRepre.clear();
				fnd = true;
			}
		}
		if (fnd) {
	   		imagesAdmisionRepre.getObject().refresh = true;
	  		editsAdmisionCedulaRepre.hideId = -1;
			ResuBusqueda.setObjectExtFnc(editsAdmisionCedulaRepre, editsAdmisionNombreRepre, editsAdmisionApellidoRepre, this.windowName + ".loadDataRepre()");
			Tool.getGridData('MantObject', 'getAdmisionPersTodas', dialogsAdmision, gridsResuBusqueda, 'ResuBusqueda', editsAdmisionCedulaRepre, editsAdmisionCedulaRepre, editsAdmisionNombreRepre, editsAdmisionNombreRepre, editsAdmisionApellidoRepre, editsAdmisionApellidoRepre);
		}
   	},  

   	setMask: function(){
		editsAdmisionTelfMadre.setMaskPhone(json('getDiscInter').data[0]);
		editsAdmisionTelfPadre.setMaskPhone(json('getDiscInter').data[0]);
		editsAdmisionTelfCelRepre.setMaskPhone(json('getDiscInter').data[0]);	
	},

    resetElements: function(element) {
    	if (element == 'pais') {
    		Tool.rstPwrCmb(pbcAdmisionRegion);
    		Tool.rstPwrCmb(pbcAdmisionCiudad);
    		pcbAdmisionMunicipio.setSelectedIndex(0);
    		pcbAdmisionParroquia.setSelectedIndex(0);
    		if (pbcAdmisionPais.getOption() != "")
    			Tool.getPowerComboData('MantObject', 'getRegionAsoPais', dialogsAdmision, pbcAdmisionRegion, 0, 1, pbcAdmisionPais);		}
		else if (element == 'region') {
    		Tool.rstPwrCmb(pbcAdmisionCiudad);
    		pcbAdmisionMunicipio.setSelectedIndex(0);
    		pcbAdmisionParroquia.setSelectedIndex(0);
    		if (pbcAdmisionRegion.getOption() != "")
    			Tool.getPowerComboData('MantObject', 'getCiudadAsoRegionPais', dialogsAdmision, pbcAdmisionCiudad, 0, 1, pbcAdmisionPais, pbcAdmisionRegion);
    	}
		else if (element == 'carr') {
			Tool.rstPwrCmb(pbcAdmisionPosicion);
	    	if (pcbAdmisionCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsAdmision, pbcAdmisionPosicion, 0, 1, pcbAdmisionCarrera);
		}
	},

	setParentesco: function(flgClear) {
		if (pbcAdmisionParentescoRepre.getText() == 1) {
        	if (editsAdmisionCedulaMadre.valid(dialogsAdmision)) 
            	if (editsAdmisionNombreMadre.valid(dialogsAdmision)) 
                	if (editsAdmisionApellidoMadre.valid(dialogsAdmision)) 
                    	if (pbcAdmisionProfesionMadre.valid(dialogsAdmision)) {
                    		editsAdmisionCedulaRepre.hideId = editsAdmisionCedulaMadre.hideId;
                    		pbcAdmisionProfesionRepre.findOption(pbcAdmisionProfesionMadre.getText());
                    		pbcAdmisionSexoRepre.setSelectedIndex(1);
                    		editsAdmisionCedulaRepre.setValue(editsAdmisionCedulaMadre.getValue());
                    		editsAdmisionNombreRepre.setValue(editsAdmisionNombreMadre.getValue());
                    		editsAdmisionApellidoRepre.setValue(editsAdmisionApellidoMadre.getValue());
                    		editsAdmisionTelfHabRepre.setValue(editsAdmisionCedulaMadre.tlfhab);
                    		editsAdmisionTelfCelRepre.setValue(editsAdmisionTelfMadre.getValue());
                    		editsAdmisionEmailRepre.setValue(editsAdmisionCedulaMadre.email);
                    	}
		}
		else if (pbcAdmisionParentescoRepre.getText() == 2) {
        	if (editsAdmisionCedulaPadre.valid(dialogsAdmision)) 
            	if (editsAdmisionNombrePadre.valid(dialogsAdmision)) 
                	if (editsAdmisionApellidoPadre.valid(dialogsAdmision)) 
                    	if (pbcAdmisionProfesionPadre.valid(dialogsAdmision)) {
                    		editsAdmisionCedulaRepre.hideId = editsAdmisionCedulaPadre.hideId;
                    		pbcAdmisionProfesionRepre.findOption(pbcAdmisionProfesionPadre.getText());
                    		pbcAdmisionSexoRepre.setSelectedIndex(2);
                    		editsAdmisionCedulaRepre.setValue(editsAdmisionCedulaPadre.getValue());
                    		editsAdmisionNombreRepre.setValue(editsAdmisionNombrePadre.getValue());
                    		editsAdmisionApellidoRepre.setValue(editsAdmisionApellidoPadre.getValue());
                    		editsAdmisionTelfHabRepre.setValue(editsAdmisionCedulaPadre.tlfhab);
                    		editsAdmisionTelfCelRepre.setValue(editsAdmisionTelfPadre.getValue());
                    		editsAdmisionEmailRepre.setValue(editsAdmisionCedulaPadre.email);
                    	}
		}
		else if (flgClear) {
			pbcAdmisionProfesionRepre.setSelectedIndex(0);
			pbcAdmisionSexoRepre.setSelectedIndex(0);
			editsAdmisionCedulaRepre.hideId = -1;
			editsAdmisionCedulaRepre.clear();
    		editsAdmisionNombreRepre.clear();
    		editsAdmisionApellidoRepre.clear();
    		editsAdmisionTelfHabRepre.clear();
    		editsAdmisionTelfCelRepre.clear();
    		editsAdmisionEmailRepre.clear();
		}
	},
	
	setEvents: function() {
		editsAdmisionCedula.onChange(this.windowName + ".activeFlagAlumno()");
		editsAdmisionCedula.onBlur(this.windowName + ".findByCedulaAlumno()")
		editsAdmisionCedula.onEnter("editsAdmisionNombre.setFocus()");
  		editsAdmisionNombre.onEnter(this.windowName + ".buscarAlumno()");
  		editsAdmisionApellido.onEnter(this.windowName + ".buscarAlumno()");
		pbcAdmisionPais.onChange(this.windowName + ".resetElements('pais')");
		pbcAdmisionRegion.onChange(this.windowName + ".resetElements('region')");
		pcbAdmisionCarrera.onChange(this.windowName + ".resetElements('carr')");
		imagesAdmisionAlumno.onClick(this.windowName + ".copyPhotoAlumno()");
		
		editsAdmisionCedulaMadre.onBlur("if (editsAdmisionCedulaMadre.getValue() != '') " + this.windowName + ".setParentesco(false)");
		editsAdmisionCedulaMadre.onEnter(this.windowName + ".buscarMadre('C')");
		editsAdmisionNombreMadre.onBlur("if (editsAdmisionNombreMadre.getValue() != '') " + this.windowName + ".setParentesco(false)");
		editsAdmisionNombreMadre.onEnter(this.windowName + ".buscarMadre('N')");
		editsAdmisionApellidoMadre.onBlur("if (editsAdmisionApellidoMadre.getValue() != '') " + this.windowName + ".setParentesco(false)");
		editsAdmisionApellidoMadre.onEnter(this.windowName + ".buscarMadre('A')");
		pbcAdmisionProfesionMadre.onChange(this.windowName + ".setParentesco(false)");
		editsAdmisionTelfMadre.onBlur("if (editsAdmisionTelfMadre.getValue() != '') " + this.windowName + ".setParentesco(false)");
		editsAdmisionTelfMadre.onFocus(this.windowName +".setMask()")
		imagesAdmisionMadre.onClick(this.windowName + ".copyPhotoMadre()");

		editsAdmisionCedulaPadre.onBlur("if (editsAdmisionCedulaPadre.getValue() != '') " + this.windowName + ".setParentesco(false)");
		editsAdmisionCedulaPadre.onEnter(this.windowName + ".buscarPadre('C')");
		editsAdmisionNombrePadre.onBlur("if (editsAdmisionNombrePadre.getValue() != '') " + this.windowName + ".setParentesco(false)");
  		editsAdmisionNombrePadre.onEnter(this.windowName + ".buscarPadre('N')");
		editsAdmisionApellidoPadre.onBlur("if (editsAdmisionApellidoPadre.getValue() != '') " + this.windowName + ".setParentesco(false)");
  		editsAdmisionApellidoPadre.onEnter(this.windowName + ".buscarPadre('A')");	
		pbcAdmisionProfesionPadre.onChange(this.windowName + ".setParentesco(false)");
		editsAdmisionTelfPadre.onBlur("if (editsAdmisionTelfPadre.getValue() != '') " + this.windowName + ".setParentesco(false)");
  		editsAdmisionTelfPadre.onFocus(this.windowName +".setMask()")
		imagesAdmisionPadre.onClick(this.windowName + ".copyPhotoPadre()");

		pbcAdmisionParentescoRepre.onChange(this.windowName + ".setParentesco(true)");
		editsAdmisionCedulaRepre.onEnter(this.windowName + ".buscarRepre('C')");
  		editsAdmisionNombreRepre.onEnter(this.windowName + ".buscarRepre('N')");
  		editsAdmisionApellidoRepre.onEnter(this.windowName + ".buscarRepre('A')");
		editsAdmisionTelfCelRepre.onFocus(this.windowName +".setMask()")
		imagesAdmisionRepre.onClick(this.windowName + ".copyPhotoRepre()");	

		imgButtonsAdmisionGuardar.onClick(this.windowName+".coreUpdate('guardar')");
		imgButtonsAdmisionLimpiar.onClick(this.windowName+".limpiar('all')");
		imgButtonsAdmisionVerFicha.onClick(this.windowName+".getFicha()");
    	imgButtonsAdmisionBuscar.onClick(this.windowName + ".buscarAlumno()");
		imgButtonsAdmisionSalir.onClick("dialogsAdmision.close()");
	},

	copyPhotoAlumno : function() {
		if (editsAdmisionCedula.valid(dialogsAdmision))
			if (editsAdmisionNombre.valid(dialogsAdmision))
				if (editsAdmisionApellido.valid(dialogsAdmision)) {
					if (imagesAdmisionAlumno.getObject().refresh) {
						AdjuArchivos.sizeFile = 1024 * 1024 / 2;//512Kb
						AdjuArchivos.filter('.jpg');
						AdjuArchivos.process(25);
						AdjuArchivos.parameter(editsAdmisionCedula.getValue() + '.jpg');
						AdjuArchivos.show();
						imagesAdmisionAlumno.getObject().refresh = false;
						imagesAdmisionAlumno.setSource('images/pht/refresh.png');
					}
					else {
						imagesAdmisionAlumno.getObject().refresh = true;
						imagesAdmisionAlumno.getObject().onerror = function() {imagesAdmisionAlumno.setSource('images/pht/anonymous.png')};
						imagesAdmisionAlumno.setSource('images/pht/' + editsAdmisionCedula.getValue() + '.jpg');
					}
				}
	},
    
	copyPhotoMadre : function() {
		if (editsAdmisionCedulaMadre.valid(dialogsAdmision))
			if (editsAdmisionNombreMadre.valid(dialogsAdmision))
				if (editsAdmisionApellidoMadre.valid(dialogsAdmision)) {
					if (imagesAdmisionMadre.getObject().refresh) {
						AdjuArchivos.sizeFile = 1024 * 1024 / 2;//512Kb
						AdjuArchivos.filter('.jpg');
						AdjuArchivos.process(25);
						AdjuArchivos.parameter(editsAdmisionCedulaMadre.getValue() + '.jpg');
						AdjuArchivos.show();
						imagesAdmisionMadre.getObject().refresh = false;
						imagesAdmisionMadre.setSource('images/pht/refresh.png');
					}
					else {
						imagesAdmisionMadre.getObject().refresh = true;
						imagesAdmisionMadre.getObject().onerror = function() {imagesAdmisionMadre.setSource('images/pht/anonymous.png')};
						imagesAdmisionMadre.setSource('images/pht/' + editsAdmisionCedulaMadre.getValue() + '.jpg');
					}
				}
	},

	copyPhotoPadre : function() {
		if (editsAdmisionCedulaPadre.valid(dialogsAdmision))
			if (editsAdmisionNombrePadre.valid(dialogsAdmision))
				if (editsAdmisionApellidoPadre.valid(dialogsAdmision)) {
					if (imagesAdmisionPadre.getObject().refresh) {
						AdjuArchivos.sizeFile = 1024 * 1024 / 2;//512Kb
						AdjuArchivos.filter('.jpg');
						AdjuArchivos.process(25);
						AdjuArchivos.parameter(editsAdmisionCedulaPadre.getValue() + '.jpg');
						AdjuArchivos.show();
						imagesAdmisionPadre.getObject().refresh = false;
						imagesAdmisionPadre.setSource('images/pht/refresh.png');
					}
					else {
						imagesAdmisionPadre.getObject().refresh = true;
						imagesAdmisionPadre.getObject().onerror = function() {imagesAdmisionPadre.setSource('images/pht/anonymous.png')};
						imagesAdmisionPadre.setSource('images/pht/' + editsAdmisionCedulaPadre.getValue() + '.jpg');
					}
				}
	},

	copyPhotoRepre : function() {
		if (editsAdmisionCedulaRepre.valid(dialogsAdmision))
			if (editsAdmisionNombreRepre.valid(dialogsAdmision))
				if (editsAdmisionApellidoRepre.valid(dialogsAdmision)) {
					if (imagesAdmisionRepre.getObject().refresh) {
						AdjuArchivos.sizeFile = 1024 * 1024 / 2;//512Kb
						AdjuArchivos.filter('.jpg');
						AdjuArchivos.process(25);
						AdjuArchivos.parameter(editsAdmisionCedulaRepre.getValue() + '.jpg');
						AdjuArchivos.show();
						imagesAdmisionRepre.getObject().refresh = false;
						imagesAdmisionRepre.setSource('images/pht/refresh.png');
					}
					else {
						imagesAdmisionRepre.getObject().refresh = true;
						imagesAdmisionRepre.getObject().onerror = function() {imagesAdmisionRepre.setSource('images/pht/anonymous.png')};
						imagesAdmisionRepre.setSource('images/pht/' + editsAdmisionCedulaRepre.getValue() + '.jpg');
					}
				}
	},

	reporteFicha : function() {
		if(json('orientacionFicha').data[0][0] == 'V')
			modFchAlu.reporteFicVertical();
		else 
			modFchAlu.reporteFicHorizontal();
    },

	getFicha: function() {
        var rlx = xmlStructs.createRecordList("rlx");

        if (this.valideCoreUpdate()) {
        	rlx.addInt('reg', editsAdmisionCedula.hideId);
        	rlx.add('reg', pcbAdmisionCarrera);
        	rlx.addInt('reg', editsAdmisionCedula.hideId);
        	rlx.add('reg', pcbAdmisionCarrera);
        	Tool.cnnSrv('ReportObject', 'getFicha', this.windowName + '.reporteFicha()', rlx);
        }
    },
  	
  	valideCoreUpdate: function() {
    	if (editsAdmisionCedula.valid(dialogsAdmision)) 
        	if (editsAdmisionNombre.valid(dialogsAdmision)) 
            	if (editsAdmisionApellido.valid(dialogsAdmision)) 
                	if (pbcAdmisionRaza.valid(dialogsAdmision)) 
                    	if (calendarAdmisionFechaNac.valid(dialogsAdmision)) 
                        	if (pbcAdmisionSexo.valid(dialogsAdmision)) 
                            	if (pbcAdmisionPais.valid(dialogsAdmision)) 
                                	if (pbcAdmisionRegion.valid(dialogsAdmision))
                                		if(pbcAdmisionCiudad.valid(dialogsAdmision))
	                                    	if (pcbAdmisionCarrera.valid(dialogsAdmision)) 
	                                        	if (editsAdmisionEmergencia.valid(dialogsAdmision)) 
	                                            	if (editsAdmisionRepreDireccion.valid(dialogsAdmision))
	                                            		if (pcbAdmisionProcedencia.valid(dialogsAdmision)) 
	                                            			if (pcbAdmisionCarrera.valid(dialogsAdmision)) 
	                                            				if (pbcAdmisionPosicion.valid(dialogsAdmision)) 
	                                            					if (pcbAdmisionPeriodo.valid(dialogsAdmision)) 
	                        											if (pbcAdmisionParentescoRepre.valid(dialogsAdmision)) 
	                        												if (pbcAdmisionProfesionRepre.valid(dialogsAdmision)) 
	                        													if (pbcAdmisionSexoRepre.valid(dialogsAdmision)) 
	                        														if (editsAdmisionCedulaRepre.valid(dialogsAdmision)) 
	                        															if (editsAdmisionNombreRepre.valid(dialogsAdmision)) 
	                        																if (editsAdmisionApellidoRepre.valid(dialogsAdmision)) 
	                        																	if (editsAdmisionTelfCelRepre.valid(dialogsAdmision)) 
	                                                                                        		return true;
	                                                                                        	else
	                                                                                        		return false;
  	},
  	
  	coreUpdate: function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (this.valideCoreUpdate()) {
			rlx.addInt('reg', editsAdmisionCedula.hideId, true);
			rlx.add('reg', editsAdmisionCedula);
			rlx.add('reg', editsAdmisionNombre);
			rlx.add('reg', editsAdmisionApellido);
			rlx.add('reg', pbcAdmisionRaza);
			rlx.add('reg', calendarAdmisionFechaNac);
			rlx.add('reg', pbcAdmisionSexo);
			rlx.add('reg', pbcAdmisionPais);
			rlx.add('reg', pbcAdmisionRegion);
			rlx.add('reg', pbcAdmisionCiudad);
			rlx.add('reg', editsAdmisionEmergencia);
			rlx.add('reg', editsAdmisionRepreDireccion);
  	  		
  	  		rlx.add('reg', pcbAdmisionProcedencia);
  	  		rlx.add('reg', pcbAdmisionCarrera);
  	  		rlx.add('reg', pbcAdmisionPosicion);
  	  		rlx.add('reg', pcbAdmisionPeriodo);
  	  		rlx.add('reg', editsAdmisionRepreObserv);
  	  		
  	  		rlx.addInt('reg', editsAdmisionCedulaMadre.hideId, true);
  	  		rlx.add('reg', editsAdmisionCedulaMadre);
  	  		rlx.add('reg', editsAdmisionNombreMadre);
  	  		rlx.add('reg', editsAdmisionApellidoMadre);
  	  		rlx.add('reg', pbcAdmisionProfesionMadre);
  	  		rlx.add('reg', editsAdmisionTelfMadre);
  	  		
  	  		rlx.addInt('reg', editsAdmisionCedulaPadre.hideId, true);
  	  		rlx.add('reg', editsAdmisionCedulaPadre);
  	  		rlx.add('reg', editsAdmisionNombrePadre);
  	  		rlx.add('reg', editsAdmisionApellidoPadre);
  	  		rlx.add('reg', pbcAdmisionProfesionPadre);
  	  		rlx.add('reg', editsAdmisionTelfPadre);
  	  		
  	  		rlx.add('reg', pbcAdmisionParentescoRepre);
  	  		rlx.add('reg', pbcAdmisionProfesionRepre);
  	  		rlx.add('reg', pbcAdmisionSexoRepre);
  	  		rlx.addInt('reg', editsAdmisionCedulaRepre.hideId, true);
  	  		rlx.add('reg', editsAdmisionCedulaRepre);
  	  		rlx.add('reg', editsAdmisionNombreRepre);
  	  		rlx.add('reg', editsAdmisionApellidoRepre);
  	  		rlx.add('reg', editsAdmisionTelfHabRepre);
  	  		rlx.add('reg', editsAdmisionTelfCelRepre);
  	  		rlx.add('reg', editsAdmisionEmailRepre);
  	  		rlx.addStr('reg', json('getNacionalidad').data[0][0]);
  	  		rlx.addStr('reg', pbcAdmisionPais.getOption());
  	  		rlx.addInt('reg', pcbAdmisionProcedencia.hideId, true);
			rlx.addStr('reg', pcbAdmisionMunicipio.getOption());
			rlx.addStr('reg', pcbAdmisionParroquia.getOption());
			
  	  		Tool.cnnSrv("MantObject", "guardarAdmision", this.windowName + ".limpiar('core')", rlx);
  		}
	}
};