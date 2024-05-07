//******************** ALUMNO **********************
var dialogsAdmision 			= new Object();
var containerAdmision1			= new Object();					
var containerAdmision2			= new Object();
var containerAdmision3			= new Object();
var containerAdmision4			= new Object();
var pbcAdmisionNacEstud 		= new Object();
var editsAdmisionCedula 		= new Object();
var editsAdmisionNombre 		= new Object();
var editsAdmisionApellido 		= new Object();
var pbcAdmisionRaza 			= new Object();
var calendarAdmisionFechaNac	= new Object();
var pbcAdmisionSexo 			= new Object();
var pbcAdmisionPais 			= new Object();
var pbcAdmisionRegion 			= new Object();
var pbcAdmisionCiudad 			= new Object();
var editsAdmisionEmergencia 	= new Object();
var editsAdmisionRepreDireccion	= new Object();
var pcbAdmisionProcedencia 		= new Object();
var pcbAdmisionCarrera 			= new Object();
var pbcAdmisionPosicion 		= new Object();
var pcbAdmisionPeriodo 			= new Object();
var editsAdmisionRepreObserv	= new Object();
//******************** MADRE **********************
var pbcAdmisionNacMadre         = new Object();
var editsAdmisionCedulaMadre 	= new Object();
var editsAdmisionNombreMadre 	= new Object();
var editsAdmisionApellidoMadre 	= new Object();
var pbcAdmisionProfesionMadre 	= new Object();
var editsAdmisionTelfMadre 		= new Object();
//******************** PADRE **********************
var pbcAdmisionNacPadre 	    = new Object();
var editsAdmisionCedulaPadre 	= new Object();
var editsAdmisionNombrePadre 	= new Object();
var editsAdmisionApellidoPadre 	= new Object();
var pbcAdmisionProfesionPadre 	= new Object();
var editsAdmisionTelfPadre 		= new Object();
//**************** REPRESENTANTE ******************
var pbcAdmisionParentescoRepre 	= new Object();
var pbcAdmisionProfesionRepre 	= new Object();
var pbcAdmisionSexoRepre 		= new Object();
var pbcAdmisionNacRepre 		= new Object();
var editsAdmisionCedulaRepre	= new Object();
var editsAdmisionNombreRepre	= new Object();
var editsAdmisionApellidoRepre	= new Object();
var editsAdmisionTelfHabRepre	= new Object();
var editsAdmisionTelfCelRepre	= new Object();
var editsAdmisionEmailRepre		= new Object();
//*************************************************
var imgButtonsAdmisionGuardar 	= new Object();
var imgButtonsAdmisionGuia		= new Object();
var imgButtonsAdmisionLimpiar 	= new Object();
var imgButtonsAdmisionSalir 	= new Object();

var AdmisionCaptcha = {
	windowName : 'AdmisionCaptcha',
	isCreate : false,
	idPersEstud : -9,
	idCarrEstud : -9,
	
	show: function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsAdmision.isByClean())
 			this.limpiar('nac');			
		dialogsAdmision.show();
	},
	
	hide: function() {
		dialogsAdmision.hide();
	},

	dialogsAdmision_Init: function() {
        dialogsAdmision.setMinimizeXY(0,0);
		dialogsAdmision.setCenterScreen();
		dialogsAdmision.addSpace(1,0,40);		        
        dialogsAdmision.addObject(containerAdmision1,20,35);
        dialogsAdmision.addObject(containerAdmision2,20,243);
        dialogsAdmision.addObject(containerAdmision3,20,339);
        dialogsAdmision.addObject(containerAdmision4,20,435);        
        containerAdmision4.setFontTitle('verdana', 12, '#7e7e7e');
        containerAdmision3.setFontTitle('verdana', 12, '#7e7e7e');
        containerAdmision2.setFontTitle('verdana', 12, '#7e7e7e');
        containerAdmision1.setFontTitle('verdana', 12, '#7e7e7e');		
		dialogsAdmision.addObject(pbcAdmisionNacEstud,35,44);	
        dialogsAdmision.addObject(editsAdmisionCedula,158,44);		
        dialogsAdmision.addObject(editsAdmisionNombre,280,44);
        dialogsAdmision.addObject(editsAdmisionApellido,522,44);        
        dialogsAdmision.addObject(pbcAdmisionRaza,35,67);
        dialogsAdmision.addObject(calendarAdmisionFechaNac,280,67);
        dialogsAdmision.addObject(pbcAdmisionSexo,522,67);        
        dialogsAdmision.addObject(pbcAdmisionPais,35, 90);
        dialogsAdmision.addObject(pbcAdmisionRegion,280, 90);
        dialogsAdmision.addObject(pbcAdmisionCiudad,522, 90);		
        dialogsAdmision.addObject(editsAdmisionEmergencia,35,113);
		dialogsAdmision.addObject(editsAdmisionRepreDireccion,35, 136);
        dialogsAdmision.addObject(pcbAdmisionProcedencia,35,159);
        dialogsAdmision.addObject(pcbAdmisionCarrera,35, 182);
        dialogsAdmision.addObject(pbcAdmisionPosicion,280, 182);
        dialogsAdmision.addObject(pcbAdmisionPeriodo,522, 182);
		dialogsAdmision.addObject(editsAdmisionRepreObserv,35, 205);
        //MADRE
		dialogsAdmision.addObject(pbcAdmisionNacMadre,35, 254);
        dialogsAdmision.addObject(editsAdmisionCedulaMadre,158, 254);
        dialogsAdmision.addObject(editsAdmisionNombreMadre,280, 254);
        dialogsAdmision.addObject(editsAdmisionApellidoMadre,522, 254);
        dialogsAdmision.addObject(pbcAdmisionProfesionMadre,35, 298);
        dialogsAdmision.addObject(editsAdmisionTelfMadre,522, 298);
		//PADRE
		dialogsAdmision.addObject(pbcAdmisionNacPadre,35, 349);
        dialogsAdmision.addObject(editsAdmisionCedulaPadre,158, 349);
        dialogsAdmision.addObject(editsAdmisionNombrePadre,280, 349);
        dialogsAdmision.addObject(editsAdmisionApellidoPadre,522,349);
        dialogsAdmision.addObject(pbcAdmisionProfesionPadre,35, 394);
        dialogsAdmision.addObject(editsAdmisionTelfPadre,522, 394);
        //REPRESENTANTE
        dialogsAdmision.addObject(pbcAdmisionParentescoRepre,35, 445);
        dialogsAdmision.addObject(pbcAdmisionProfesionRepre,280, 445);
        dialogsAdmision.addObject(pbcAdmisionSexoRepre,522, 445);		
		dialogsAdmision.addObject(pbcAdmisionNacRepre,35,467);
		dialogsAdmision.addObject(editsAdmisionCedulaRepre,158, 467);
        dialogsAdmision.addObject(editsAdmisionNombreRepre,280, 467);
        dialogsAdmision.addObject(editsAdmisionApellidoRepre,522, 467);		
        //dialogsAdmision.addObject(editsAdmisionTelfHabRepre,35, 490);
        dialogsAdmision.addObject(editsAdmisionTelfCelRepre,35, 490);
        dialogsAdmision.addObject(editsAdmisionEmailRepre,280, 490);
		//BOTONES
        dialogsAdmision.addObject(imgButtonsAdmisionGuardar,170, 527);
        dialogsAdmision.addObject(imgButtonsAdmisionGuia,276, 527);
        dialogsAdmision.addObject(imgButtonsAdmisionLimpiar,413, 527);
		dialogsAdmision.addObject(imgButtonsAdmisionSalir,520, 527);
		calendarAdmisionFechaNac.sendToFrom(100);		
	},

  	create: function() {
  		dialogsAdmision = dialogs.create('dialogsAdmision',0,0,786,534,'ADMISIÓN - ESTUDIANTE');
		dialogsAdmision.setAdjY(35);
		dialogsAdmision.setIconDlg('images/logo/', 'EDUCA_logo.gif');
		calendarAdmisionFechaNac = calendars.create("calendarAdmisionFechaNac");
        calendarAdmisionFechaNac.setValidEmpty();
        calendarAdmisionFechaNac.setCaption('Fecha Nac.:',1,79);
        calendarAdmisionFechaNac.setWidthEditCalendar(127);
        pbcAdmisionNacEstud = selects.create('pbcAdmisionNacEstud', 'pbcAdmisionNacEstud', 'C.I. :', 81);
        pbcAdmisionNacEstud.setWidth(41);
        pbcAdmisionNacEstud.setValidEmpty();		
  		editsAdmisionCedula = edits.create('editsAdmisionCedula','editsAdmisionCedula','',1,1,'normal');
  		editsAdmisionCedula.setValidInteger();
        editsAdmisionCedula.setSizeEdit(108);		        
  		editsAdmisionNombre = edits.create('editsAdmisionNombre','editsAdmisionNombre','Nombres :',1,79,'normal');
  		editsAdmisionNombre.setValidEmpty();
        editsAdmisionNombre.setSizeEdit(149);        
  		editsAdmisionApellido = edits.create('editsAdmisionApellido','editsAdmisionApellido','Apellidos :',1,78,'normal');
  		editsAdmisionApellido.setValidEmpty();
        editsAdmisionApellido.setSizeEdit(149);        
        editsAdmisionEmergencia = edits.create('editsAdmisionEmergencia','editsAdmisionEmergencia','Emergencia :',1,82,'normal');
        editsAdmisionEmergencia.setValidEmpty();
        editsAdmisionEmergencia.setSizeEdit(632);        
        pbcAdmisionRaza = selects.create('pbcAdmisionRaza', 'pbcAdmisionRaza', 'Indígena :', 81);
        pbcAdmisionRaza.setValidEmpty();
        pbcAdmisionRaza.setWidth(152);
        pbcAdmisionSexo = selects.create('pbcAdmisionSexo', 'pbcAdmisionSexo', 'Sexo :', 77);
        pbcAdmisionSexo.setValidEmpty();
        pbcAdmisionSexo.setWidth(151);
        pbcAdmisionPais = selects.create('pbcAdmisionPais', 'pbcAdmisionPais', 'País :', 81);
        pbcAdmisionPais.setValidEmpty();
        pbcAdmisionPais.setWidth(152);
        pbcAdmisionPais.setDataType('int');
        pbcAdmisionRegion = selects.create('pbcAdmisionRegion', 'pbcAdmisionRegion', 'Región :', 78);
        pbcAdmisionRegion.setValidEmpty();
        pbcAdmisionRegion.setWidth(151);
        pbcAdmisionRegion.setDataType('int');
        pbcAdmisionCiudad = selects.create('pbcAdmisionCiudad', 'pbcAdmisionCiudad', 'Ciudad :', 77);
        pbcAdmisionCiudad.setValidEmpty();
        pbcAdmisionCiudad.setWidth(151);
        pbcAdmisionCiudad.setDataType('int');
		pcbAdmisionProcedencia = selects.create('pcbAdmisionProcedencia', 'pcbAdmisionProcedencia', 'Procedencia:', 81);
		pcbAdmisionProcedencia.setWidth(634);
		pcbAdmisionCarrera = selects.create('pcbAdmisionCarrera', 'pcbAdmisionCarrera', 'Carrera :', 81);
		pcbAdmisionCarrera.setWidth(150);
        pcbAdmisionCarrera.setValidEmpty();
        pcbAdmisionCarrera.setDataType('int');
        pbcAdmisionPosicion = selects.create('pbcAdmisionPosicion', 'pbcAdmisionPosicion', 'Posición :', 78);
        pbcAdmisionPosicion.setWidth(151);
        pbcAdmisionPosicion.setValidEmpty();
        pcbAdmisionPeriodo = selects.create('pcbAdmisionPeriodo', 'pcbAdmisionPeriodo', 'Periodo :', 77);
        pcbAdmisionPeriodo.setWidth(151);
        pcbAdmisionPeriodo.setValidEmpty();
        pbcAdmisionNacMadre = selects.create('pbcAdmisionNacMadre', 'pbcAdmisionNacMadre', 'C.I. :', 81);
        pbcAdmisionNacMadre.setWidth(41);
        pbcAdmisionNacMadre.setValidEmpty();	
        editsAdmisionCedulaMadre = edits.create('editsAdmisionCedulaMadre','editsAdmisionCedulaMadre','',1,1,'normal');
		editsAdmisionCedulaMadre.setSizeEdit(108);
		editsAdmisionCedulaMadre.setValidInteger();
		editsAdmisionCedulaMadre.setFieldFind(true);				
		editsAdmisionNombreMadre = edits.create('editsAdmisionNombreMadre','editsAdmisionNombreMadre','Nombres :',1,79,'normal');
		editsAdmisionNombreMadre.setSizeEdit(149);
		editsAdmisionNombreMadre.setFieldFind(true);
		editsAdmisionApellidoMadre = edits.create('editsAdmisionApellidoMadre','editsAdmisionApellidoMadre','Apellidos :',1,78,'normal');
		editsAdmisionApellidoMadre.setSizeEdit(149);
		editsAdmisionApellidoMadre.setFieldFind(true);
		pbcAdmisionProfesionMadre = selects.create('pbcAdmisionProfesionMadre', 'pbcAdmisionProfesionMadre', 'Profesión:', 81);
		pbcAdmisionProfesionMadre.setWidth(393);
		editsAdmisionTelfMadre = edits.create('editsAdmisionTelfMadre','editsAdmisionTelfMadre','Telf. Celular :',1,78,'normal');
  		editsAdmisionTelfMadre.setSizeEdit(149);
  		editsAdmisionTelfMadre.setMaxLength(20); 
  		editsAdmisionTelfMadre.setValidEmpty();
  		editsAdmisionTelfMadre.setMaskPhone();
		pbcAdmisionNacPadre = selects.create('pbcAdmisionNacPadre', 'pbcAdmisionNacPadre', 'C.I. :', 81);
		pbcAdmisionNacPadre.setWidth(41);
		pbcAdmisionNacPadre.setValidEmpty();	
  		editsAdmisionCedulaPadre = edits.create('editsAdmisionCedulaPadre','editsAdmisionCedulaPadre','',1,1,'normal');
		editsAdmisionCedulaPadre.setSizeEdit(108);
		editsAdmisionCedulaPadre.setValidInteger();
		editsAdmisionCedulaPadre.setFieldFind(true);
		editsAdmisionNombrePadre = edits.create('editsAdmisionNombrePadre','editsAdmisionNombrePadre','Nombres :',1,79,'normal');
		editsAdmisionNombrePadre.setSizeEdit(149);
		editsAdmisionNombrePadre.setFieldFind(true);
		editsAdmisionApellidoPadre = edits.create('editsAdmisionApellidoPadre','editsAdmisionApellidoPadre','Apellidos :',1,78,'normal');
		editsAdmisionApellidoPadre.setSizeEdit(149);
		editsAdmisionApellidoPadre.setFieldFind(true);
		pbcAdmisionProfesionPadre = selects.create('pbcAdmisionProfesionPadre', 'pbcAdmisionProfesionPadre', 'Profesión:', 81);
		pbcAdmisionProfesionPadre.setWidth(393);
		editsAdmisionTelfPadre = edits.create('editsAdmisionTelfPadre','editsAdmisionTelfPadre','Telf. Celular :',1,78,'normal');
  		editsAdmisionTelfPadre.setSizeEdit(149);
  		editsAdmisionTelfPadre.setMaxLength(20); 
  		editsAdmisionTelfPadre.setValidEmpty();
  		editsAdmisionTelfPadre.setMaskPhone();
  		pbcAdmisionParentescoRepre = selects.create('pbcAdmisionParentescoRepre', 'pbcAdmisionParentescoRepre', 'Parentesco :', 81);
  		pbcAdmisionParentescoRepre.setValidEmpty();
  		pbcAdmisionParentescoRepre.setWidth(151);
  		pbcAdmisionProfesionRepre = selects.create('pbcAdmisionProfesionRepre', 'pbcAdmisionProfesionRepre', 'Profesión :', 78);
  		pbcAdmisionProfesionRepre.setWidth(151);
  		pbcAdmisionSexoRepre = selects.create('pbcAdmisionSexoRepre', 'pbcAdmisionSexoRepre', 'Sexo :', 77);
        pbcAdmisionSexoRepre.setValidEmpty();
        pbcAdmisionSexoRepre.setWidth(151);
		pbcAdmisionNacRepre = selects.create('pbcAdmisionNacRepre', 'pbcAdmisionNacRepre', 'C.I. :', 81);
		pbcAdmisionNacRepre.setWidth(41);
		pbcAdmisionNacRepre.setValidEmpty();
		editsAdmisionCedulaRepre = edits.create('editsAdmisionCedulaRepre','editsAdmisionCedulaRepre','',1,1,'normal');
		editsAdmisionCedulaRepre.setSizeEdit(107);
		editsAdmisionCedulaRepre.setValidInteger();
		editsAdmisionNombreRepre = edits.create('editsAdmisionNombreRepre','editsAdmisionNombreRepre','Nombres :',1,79,'normal');
		editsAdmisionNombreRepre.setSizeEdit(149);
		editsAdmisionApellidoRepre = edits.create('editsAdmisionApellidoRepre','editsAdmisionApellidoRepre','Apellidos :',1,78,'normal');
		editsAdmisionApellidoRepre.setSizeEdit(149);
		editsAdmisionTelfHabRepre = edits.create('editsAdmisionTelfHabRepre','editsAdmisionTelfHabRepre','Telf. Hab :',1,82,'normal');
		editsAdmisionTelfHabRepre.setSizeEdit(149);
		editsAdmisionTelfCelRepre = edits.create('editsAdmisionTelfCelRepre','editsAdmisionTelfCelRepre','#Celular :',1,82,'normal');
		editsAdmisionTelfCelRepre.setSizeEdit(149);
		editsAdmisionTelfCelRepre.setMaxLength(20); 
		editsAdmisionTelfCelRepre.setValidEmpty();
		editsAdmisionTelfCelRepre.setMaskPhone();
		editsAdmisionEmailRepre	= edits.create('editsAdmisionEmailRepre','editsAdmisionEmailRepre','Email / Correo :',1,100,'normal');
		editsAdmisionEmailRepre.setSizeEdit(369);
		editsAdmisionEmailRepre.setValidEmpty();
		editsAdmisionRepreDireccion	= edits.create('editsAdmisionRepreDireccion','editsAdmisionRepreDireccion','Dirección :',1,82,'normal');
		editsAdmisionRepreDireccion.setSizeEdit(632);
		editsAdmisionRepreDireccion.setValidEmpty();
		editsAdmisionRepreObserv = edits.create('editsAdmisionRepreObserv','editsAdmisionRepreObserv','Observación / Discapacidad / Tratamiento Médico :',1,324,'normal');
		editsAdmisionRepreObserv.setSizeEdit(390);
		
		containerAdmision1 = container.create("containerAdmision1",'ESTUDIANTE',4);
        containerAdmision1.setDimension(745,195);
        containerAdmision2 = container.create("containerAdmision2",'MADRE',4);
        containerAdmision2.setDimension(745,82);
        containerAdmision3 = container.create("containerAdmision3",'PADRE',4);
        containerAdmision3.setDimension(745,82);
        containerAdmision4 = container.create("containerAdmision4",'REPRESENTANTE',4);
        containerAdmision4.setDimension(745,82);

  		imgButtonsAdmisionGuardar = imgButtons.create('imgButtonsAdmisionGuardar','Guardar.','ok.png');
  		imgButtonsAdmisionGuia = imgButtons.create('imgButtonsAdmisionGuia','Descargar Guia','adjuntar.png');
  		imgButtonsAdmisionLimpiar = imgButtons.create('imgButtonsAdmisionLimpiar','Limpiar','limpiar.png');
		imgButtonsAdmisionSalir = imgButtons.create('imgButtonsAdmisionSalir','Salir','salir.png');
        imgButtonsAdmisionGuardar.setDimension(90,22);
        imgButtonsAdmisionGuia.setDimension(120,22);
        imgButtonsAdmisionLimpiar.setDimension(90,22);
		imgButtonsAdmisionSalir.setDimension(90,22);
  	},

  	init: function() {
  		this.create();
  		this.setEvents();
  		this.dialogsAdmision_Init();
  	},
  	
  	limpiar: function(flag) {
		if (flag == 'core') {
  			Alert.show('RECIBIRAS UN CORREO CON LA GUIA DE LA INSTITUCIÓN. TAMBIEN PUEDES BAJARLA EN LA OPCIÓN DESCARGAR GUIA', 'ADMISIÓN FINALIZADA', Alert.TYPE_INFO, "new OpenWin().getFile('boletin/info_institucion.pdf');location.replace('/demo_educa')");
  		}
  		else {
  			idPersEstud = -9;
  			idCarrEstud = -9;
  		}
  		editsAdmisionCedula.clear();
  		editsAdmisionCedula.hideId = -1;
  		editsAdmisionNombre.clear();
  		editsAdmisionApellido.clear();
  		pbcAdmisionRaza.clear();
		pbcAdmisionRaza.addOption('NO', 'NO');
        pbcAdmisionRaza.addOption('Wayúu', 'Wayúu');
        pbcAdmisionRaza.addOption('Añu', 'Añu');
        pbcAdmisionRaza.addOption('Yukpa', 'Yukpa');
        pbcAdmisionRaza.addOption('Japreria', 'Japreria');
        pbcAdmisionRaza.addOption('Barí', 'Barí');
        pbcAdmisionRaza.addOption('Piapoko', 'Piapoko');
        pbcAdmisionRaza.addOption('Pemón', 'Pemón');
        pbcAdmisionRaza.addOption('Kariña', 'Kariña');
		pbcAdmisionRaza.addOption('Panare', 'Panare');
        pbcAdmisionRaza.addOption('Chaima', 'Chaima');
        pbcAdmisionRaza.addOption('Maquiritare', 'Maquiritare');
        pbcAdmisionRaza.addOption('Akawayo', 'Akawayo');
		pbcAdmisionRaza.addOption('Yabarana', 'Yabarana');
        pbcAdmisionRaza.addOption('Mapoyo', 'Mapoyo');
        pbcAdmisionRaza.addOption('Waike', 'Waike');
        pbcAdmisionRaza.addOption('Yanomami', 'Yanomami');
		pbcAdmisionRaza.addOption('Wanikua', 'Wanikua');
        pbcAdmisionRaza.addOption('Waraos', 'Waraos');
		pbcAdmisionRaza.addOption('Waikerí', 'Waikerí');
		pbcAdmisionRaza.addOption('Wottuja-Piaroa', 'Wottuja-Piaroa');
  		calendarAdmisionFechaNac.clear();
  		pbcAdmisionSexo.clear();
  		pbcAdmisionSexo.addOption('', '-1');
        pbcAdmisionSexo.addOption('Femenino', 'Femenino');
        pbcAdmisionSexo.addOption('Masculino', 'Masculino');
  		pbcAdmisionPais.clear();
  		pbcAdmisionRegion.clear();
  		pbcAdmisionCiudad.clear();
  		editsAdmisionEmergencia.setValue("LLAMAR A (#Celular / Nombre): ");
  		editsAdmisionRepreDireccion.clear();
  		pcbAdmisionProcedencia.deleteAll();
  		pcbAdmisionProcedencia.hideId = -1;
  		pcbAdmisionCarrera.clear();
  		pbcAdmisionPosicion.clear();
  		pcbAdmisionPeriodo.clear();
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
  		editsAdmisionTelfPadre.delMaskPhone();
  		pbcAdmisionSexoRepre.clear();
  		pbcAdmisionSexoRepre.addOption('', '-1');
  		pbcAdmisionSexoRepre.addOption('Femenino', 'Femenino');
  		pbcAdmisionSexoRepre.addOption('Masculino', 'Masculino');
  		editsAdmisionCedulaRepre.clear();
  		editsAdmisionCedulaRepre.hideId = -1;
  		editsAdmisionNombreRepre.clear();
  		editsAdmisionApellidoRepre.clear();
  		editsAdmisionTelfHabRepre.clear();
  		editsAdmisionTelfCelRepre.delMaskPhone();
  		editsAdmisionEmailRepre.clear();		
  		dialogsAdmision.setMsg("");
  		Tool.cnnSrv("info", "dia", this.windowName + ".loadDataInit('" + flag + "')");
  	},
  	
    loadDataInit: function(flag) {
    	var nac = json('getNacionalidad').data[0][0].substring(0, 1);
    	
    	pbcAdmisionPais.addOption('', '-1');
    	pbcAdmisionPais.addArrOption(json('getMantPais').data[1], json('getMantPais').data[0]);
    	pcbAdmisionPeriodo.addArrOption(json('getPeriodoNvlAcad').data[1], json('getPeriodoNvlAcad').data[0]);
		pcbAdmisionProcedencia.addArrOption(json('getMantInsProcedencia').data[0], json('getMantInsProcedencia').data[5]);
  		pcbAdmisionCarrera.addOption('', '-1');
  		pcbAdmisionCarrera.addArrOption(json('getCarrera').data[1], json('getCarrera').data[0]);
  		pbcAdmisionProfesionMadre.clear();
		pbcAdmisionProfesionMadre.addArrOption(json('getMantProfesion').data[1], json('getMantProfesion').data[0]);
  		pbcAdmisionProfesionPadre.clear();
		pbcAdmisionProfesionPadre.addArrOption(json('getMantProfesion').data[1], json('getMantProfesion').data[0]);
  		pbcAdmisionProfesionRepre.clear();
		pbcAdmisionProfesionRepre.addArrOption(json('getMantProfesion').data[1], json('getMantProfesion').data[0]);
  		pbcAdmisionParentescoRepre.clear();
  		pbcAdmisionParentescoRepre.addOption('', '-1');
		pbcAdmisionParentescoRepre.addArrOption(json('getParentesco').data[1], json('getParentesco').data[0]);

		if (flag == 'nac') {
			pbcAdmisionNacEstud.addOption(nac, nac);
			pbcAdmisionNacEstud.addOption('E', 'Extranjera');
			pbcAdmisionNacMadre.addOption(nac, nac);
			pbcAdmisionNacMadre.addOption('E', 'Extranjera');
			pbcAdmisionNacPadre.addOption(nac, nac);
			pbcAdmisionNacPadre.addOption('E', 'Extranjera');
			pbcAdmisionNacRepre.addOption(nac, nac);
			pbcAdmisionNacRepre.addOption('E', 'Extranjera');
		}
		
		if (json('getPeriodoNvlAcad').data[0].length == 0) {
			Alert.show('PROXIMO PERIODO SERA PUBLICADO EN LAS REDES SOCIALES', 'CERRADO PROCESO DE ADMISIÓN', Alert.TYPE_INFO);
		}
		
		dialogsAdmision.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

   	setMask: function(){
		editsAdmisionTelfMadre.setMaskPhone(json('getDiscInter').data[0]);
		editsAdmisionTelfPadre.setMaskPhone(json('getDiscInter').data[0]);
		editsAdmisionTelfCelRepre.setMaskPhone(json('getDiscInter').data[0]);	
	},

    resetElements: function(element) {
    	var rlx = xmlStructs.createRecordList("rlx");
    	
    	if (element == 'pais') {
    		pbcAdmisionRegion.clear();
    		pbcAdmisionCiudad.clear();
    		if (pbcAdmisionPais.getOption() != "") {
    			rlx.add('reg', pbcAdmisionPais);
    			Tool.cnnSrv('info', 'region', 'pbcAdmisionRegion.addOption("", "-1");pbcAdmisionRegion.addArrOption(json("getRegionAsoPais").data[1], json("getRegionAsoPais").data[0]);', rlx);
    		}
    	}
		else if (element == 'region') {
    		pbcAdmisionCiudad.clear();
    		if (pbcAdmisionRegion.getOption() != "") {
    			rlx.add('reg', pbcAdmisionPais);
    			rlx.add('reg', pbcAdmisionRegion);
    			Tool.cnnSrv('info', 'ciudad', 'pbcAdmisionCiudad.addArrOption(json("getCiudadAsoRegionPais").data[1], json("getCiudadAsoRegionPais").data[0])', rlx);
    		}
    	}
		else if (element == 'carrera') {
    		if (pcbAdmisionCarrera.getOption() != "") {
    			rlx.add('reg', pcbAdmisionCarrera);
    			Tool.cnnSrv('info', 'carrera', this.windowName + '.loadPosicion()', rlx);
    		}
    	}
	},

	loadPosicion: function() {
		pbcAdmisionPosicion.clear();
		pbcAdmisionPosicion.addOption('', '-1');
		pbcAdmisionPosicion.addArrOption(json("getMantPensumPosicion").data[1], json("getMantPensumPosicion").data[0]);
		if (json("getMantPensumPosicion").data[0].length == 1)
			pcbAdmisionCarrera.setSelectedIndex(1);
	},

	setParentesco: function() {
		if (pbcAdmisionParentescoRepre.getText() == 0) {
        	if (editsAdmisionCedula.valid(dialogsAdmision)) 
            	if (editsAdmisionNombre.valid(dialogsAdmision)) 
                	if (editsAdmisionApellido.valid(dialogsAdmision)) {
                    	editsAdmisionCedulaRepre.hideId = editsAdmisionCedula.hideId;
                    	pbcAdmisionProfesionRepre.findOption(91);
                    	pbcAdmisionSexoRepre.findOption(pbcAdmisionSexo.getOption());
                    	editsAdmisionCedulaRepre.setValue(editsAdmisionCedula.getValue());
                    	editsAdmisionNombreRepre.setValue(editsAdmisionNombre.getValue());
                    	editsAdmisionApellidoRepre.setValue(editsAdmisionApellido.getValue());
                    }
		}
		else if (pbcAdmisionParentescoRepre.getText() == 1) {
        	if (editsAdmisionCedulaMadre.valid(dialogsAdmision)) 
            	if (editsAdmisionNombreMadre.valid(dialogsAdmision)) 
                	if (editsAdmisionApellidoMadre.valid(dialogsAdmision)) {
                		editsAdmisionCedulaRepre.hideId = editsAdmisionCedulaMadre.hideId;
                		pbcAdmisionProfesionRepre.findOption(pbcAdmisionProfesionMadre.getText());
                		pbcAdmisionSexoRepre.setSelectedIndex(1);
                		editsAdmisionCedulaRepre.setValue(editsAdmisionCedulaMadre.getValue());
                		editsAdmisionNombreRepre.setValue(editsAdmisionNombreMadre.getValue());
                		editsAdmisionApellidoRepre.setValue(editsAdmisionApellidoMadre.getValue());
                		editsAdmisionTelfHabRepre.setValue(editsAdmisionCedulaMadre.tlfhab);
                		editsAdmisionTelfCelRepre.clear();
                		editsAdmisionEmailRepre.clear();
                	}
		}
		else if (pbcAdmisionParentescoRepre.getText() == 2) {
        	if (editsAdmisionCedulaPadre.valid(dialogsAdmision)) 
            	if (editsAdmisionNombrePadre.valid(dialogsAdmision)) 
                	if (editsAdmisionApellidoPadre.valid(dialogsAdmision)) {
                		editsAdmisionCedulaRepre.hideId = editsAdmisionCedulaPadre.hideId;
                		pbcAdmisionProfesionRepre.findOption(pbcAdmisionProfesionPadre.getText());
                		pbcAdmisionSexoRepre.setSelectedIndex(2);
                		editsAdmisionCedulaRepre.setValue(editsAdmisionCedulaPadre.getValue());
                		editsAdmisionNombreRepre.setValue(editsAdmisionNombrePadre.getValue());
                		editsAdmisionApellidoRepre.setValue(editsAdmisionApellidoPadre.getValue());
                		editsAdmisionTelfHabRepre.setValue(editsAdmisionCedulaPadre.tlfhab);
                		editsAdmisionTelfCelRepre.clear();
                		editsAdmisionEmailRepre.clear();
                	}
		}
		else {
			pbcAdmisionSexoRepre.setSelectedIndex(0);
    		editsAdmisionCedulaRepre.clear();
    		editsAdmisionNombreRepre.clear();
    		editsAdmisionApellidoRepre.clear();
    		editsAdmisionTelfHabRepre.clear();
    		editsAdmisionTelfCelRepre.clear();
    		editsAdmisionEmailRepre.clear();
		}
	},
	
	setEvents: function() {
		dialogsAdmision.onClickCloseDialog("location.replace('index.html')");
		editsAdmisionCedula.onEnter("editsAdmisionNombre.setFocus()");
		pbcAdmisionPais.onChange(this.windowName + ".resetElements('pais')");
		pbcAdmisionRegion.onChange(this.windowName + ".resetElements('region')");
		pcbAdmisionCarrera.onChange(this.windowName + ".resetElements('carrera')");
		
		editsAdmisionCedulaMadre.onEnter("editsAdmisionNombreMadre.setFocus()");
		editsAdmisionTelfMadre.onFocus(this.windowName +".setMask()")

		editsAdmisionCedulaPadre.onEnter("editsAdmisionNombrePadre.setFocus()");
		editsAdmisionTelfPadre.onFocus(this.windowName +".setMask()")

		pbcAdmisionParentescoRepre.onChange(this.windowName + ".setParentesco()");
		editsAdmisionCedulaRepre.onEnter("editsAdmisionNombreRepre.setFocus()");
		editsAdmisionTelfCelRepre.onFocus(this.windowName +".setMask()")

		imgButtonsAdmisionGuardar.onClick(this.windowName+".coreUpdate('guardar')");
		imgButtonsAdmisionGuia.onClick("new OpenWin().getFile('boletin/info_institucion.pdf')");
		imgButtonsAdmisionLimpiar.onClick(this.windowName+".limpiar('all')");
		imgButtonsAdmisionSalir.onClick("location.replace('index.html')");
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
                                    	if (editsAdmisionRepreDireccion.valid(dialogsAdmision))
                                    		if (pcbAdmisionCarrera.valid(dialogsAdmision)) 
                                				if (pbcAdmisionPosicion.valid(dialogsAdmision)) 
                                					if (pcbAdmisionPeriodo.valid(dialogsAdmision)) 
            											if (pbcAdmisionParentescoRepre.valid(dialogsAdmision)) 
        													if (pbcAdmisionSexoRepre.valid(dialogsAdmision)) 
        														if (editsAdmisionCedulaRepre.valid(dialogsAdmision)) 
        															if (editsAdmisionNombreRepre.valid(dialogsAdmision)) 
        																if (editsAdmisionApellidoRepre.valid(dialogsAdmision)) 
        																	if (editsAdmisionTelfCelRepre.valid(dialogsAdmision)) 
																				if (editsAdmisionEmailRepre.valid(dialogsAdmision)) 
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
  	  		rlx.add('reg', pbcAdmisionNacEstud);
  	  		rlx.addStr('reg', pbcAdmisionPais.getOption());
  	  		rlx.addInt('reg', pcbAdmisionProcedencia.hideId, true);
  	  		rlx.add('reg', pbcAdmisionNacMadre);
  	  		rlx.add('reg', pbcAdmisionNacPadre);
  	  		rlx.add('reg', pbcAdmisionNacRepre);
  	  		Tool.cnnSrv("info", "guardar", this.windowName + ".limpiar('core')", rlx);
  		}
	}
};