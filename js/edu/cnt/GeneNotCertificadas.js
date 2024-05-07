var dialogsGeneNotCertificadas = new Object();
var tabsGeneNotCertificadas = new Object();
//TAB/ DATOS-I-II-III-IV///////////////////////////////////
var editsGeneNotCerPlaEstudio = new Object();
var editsGeneNotCerCodPlaEstudio = new Object();
var editsGeneNotCerMencion = new Object();
var editsGeneNotCerCodPlantel = new Object();
var editsGeneNotCerCodNombre = new Object();
var editsGeneNotCerCodDttEscolar = new Object();
var editsGeneNotCerDireccion = new Object();
var editsGeneNotCerTelefono = new Object(); 
var editsGeneNotCerMunicipio = new Object();
var editsGeneNotCerEntFederal = new Object();
var editsGeneNotCerZonEducativa = new Object();
var editsGeneNotCerCedEstudiante = new Object();
var editsGeneNotCerFecNacimiento = new Object();
var editsGeneNotCerEstApellido = new Object();
var editsGeneNotCerEstNombre = new Object();
var editsGeneNotCerLugNacimiento = new Object();
var editsGeneNotCerEntFedPais = new Object();
var gridsGeneNotCerAlumnos1 = new Object();
//TAB/DATOS-V-VI-VII////////////////////////////////////
var editsGeneNotCerNomDirPlantel = new Object();
var editsGeneNotCerCedDirPlantel = new Object();
var editsGeneNotCerNomFunZonEducativa = new Object();
var editsGeneNotCerCedFunZonEducativa = new Object();
var gridsGeneNotCerAñoGrado = new Object();
//TAB/DATOS-VIII-IX-X-/////////////////////////////////
var gridsGeneNotCerGraAprEduParTrabajo = new Object();
var memoGeneNotCerObservaciones = new Object();
var editsGeneNotCerLugFecExpedicion = new Object();
var imgButtonsGeneNotCerReporte = new Object();
var imgButtonsGeneNotCerSalir = new Object();
var mwGeneNotCertificadas = new Object();// minWindow

var GeneNotCertificadas = {
    windowName: 'GeneNotCertificadas',
    isCreate : false,
    idPeriodo : 0,
    booCleanFind : false, 
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
            //Tool.cnnSrv('MantObject', 'getGeneNotCertificadasInit', this.windowName + '.loadDataInit()');
        }
        if (dialogsGeneNotCertificadas.isByClean()) {
            this.limpiarAl();
            this.limpiarCa();
            this.limpiarRe();
            this.limpiarPr();        
        }
        dialogsGeneNotCertificadas.show();
    },
    hide: function(){
        dialogsGeneNotCertificadas.hide();
    },
    createMWs: function(){
        mwGeneNotCertificadas = desktop.addMinWindow('A.R.Inscripcion', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsGeneNotCertificadas.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsGeneNotCertificadas_Init: function(){
		dialogsGeneNotCertificadas.show();
		dialogsGeneNotCertificadas.setMinimizeXY(0, 0);
        dialogsGeneNotCertificadas.setCenterScreen();
        dialogsGeneNotCertificadas.addSpace(0, 0, 20);
        dialogsGeneNotCertificadas.addLn(1, 1, 1);
		dialogsGeneNotCertificadas.setHeightCell(1,1,10); 
        dialogsGeneNotCertificadas.addObjToDialog(tabsGeneNotCertificadas, 2, 1);
    },
    
    tabsGeneNotCertificadas_Init: function(){
        tabsGeneNotCertificadas.showPanel(0);
        tabsGeneNotCertificadas.setSizeText(12);
        tabsGeneNotCertificadas.setFontFamily('Tw Cen MT Condensed Extra Bold');
        tabsGeneNotCertificadas.setBorderWidthPanel(0);
        /////////TABS-I-II-III-IV/////////////////////////////////////////////    
        tabsGeneNotCertificadas.addLnToGridPanel(0,10)
        var c1 = container.create("c1",'Plan de Estudio', 10);
        c1.setDimension(830,45);
		c1.setMarginLeftBarTitle(340);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#1e1e1e');
        c1.setObject(editsGeneNotCerPlaEstudio, 7, 0, 0, 0);
        c1.setObject(editsGeneNotCerCodPlaEstudio, 20, 0, 0, 0);
        c1.setObject(editsGeneNotCerMencion, 20, 0, 0, 0);
        editsGeneNotCerCodPlaEstudio.setSizeEdit(149);
        editsGeneNotCerPlaEstudio.setSizeEdit(149);
        editsGeneNotCerMencion.setSizeEdit(149);
        editsGeneNotCerPlaEstudio.setMaxLength(40);
        editsGeneNotCerCodPlaEstudio.setMaxLength(20);
        editsGeneNotCerMencion.setMaxLength(40);
        tabsGeneNotCertificadas.addObjToGridPanel(0, c1, 1, 1);
        tabsGeneNotCertificadas.addLnToGridPanel(0,130)
        var c2 = container.create("c2",'Datos del Plantel', 10);
        c2.setDimension(830,97);
		c2.setMarginLeftBarTitle(340);
		c2.setPropertyMarco('groove',1,'#7e7e7e');
		c2.setFontTitle('verdana', 11, '#1e1e1e');
		c2.setObject(editsGeneNotCerCodPlantel, 7, 0, 0, 0);
		c2.setObject(editsGeneNotCerCodNombre, 20, 0, 0, 0);
		c2.setObject(editsGeneNotCerCodDttEscolar, 20, 0, 0, 0);
        c2.addObject(editsGeneNotCerDireccion, 28, 177);
		c2.addObject(editsGeneNotCerTelefono, 615, 177);
		c2.addObject(editsGeneNotCerMunicipio, 28, 203);
		c2.addObject(editsGeneNotCerEntFederal, 308, 203);
		c2.addObject(editsGeneNotCerZonEducativa, 615, 203);
        editsGeneNotCerCodPlantel.setSizeEdit(149);
        editsGeneNotCerCodNombre.setSizeEdit(149);
        editsGeneNotCerCodDttEscolar.setSizeEdit(149);
        editsGeneNotCerDireccion.setSizeEdit(456);
        editsGeneNotCerTelefono.setSizeEdit(149);
        editsGeneNotCerMunicipio.setSizeEdit(149);
        editsGeneNotCerEntFederal.setSizeEdit(149);
        editsGeneNotCerZonEducativa.setSizeEdit(149);
        editsGeneNotCerCodPlantel.setMaxLength(40);
        editsGeneNotCerCodNombre.setMaxLength(50);
        editsGeneNotCerCodDttEscolar.setMaxLength(8);
        editsGeneNotCerDireccion.setMaxLength(50);
        editsGeneNotCerTelefono.setMaxLength(20);
        editsGeneNotCerMunicipio.setMaxLength(15);
        editsGeneNotCerEntFederal.setMaxLength(20);
        editsGeneNotCerZonEducativa.setMaxLength(20)
        tabsGeneNotCertificadas.addObjToGridPanel(0, c2, 2, 1);
        tabsGeneNotCertificadas.addLnToGridPanel(0,77)
        var c3 = container.create("c3",'Datos del Estudiante', 10);
        c3.setDimension(830,75);
		c3.setMarginLeftBarTitle(340);
		c3.setPropertyMarco('groove',1,'#7e7e7e');
		c3.setFontTitle('verdana', 11, '#1e1e1e');
		c3.addObject(editsGeneNotCerCedEstudiante, 28, 268);
		c3.addObject(editsGeneNotCerFecNacimiento, 308, 268);
		c3.addObject(editsGeneNotCerEstApellido, 615, 268);
        c3.addObject(editsGeneNotCerEstNombre, 28, 294);
		c3.addObject(editsGeneNotCerLugNacimiento, 308, 294);
		c3.addObject(editsGeneNotCerEntFedPais, 615, 294);
        editsGeneNotCerCedEstudiante.setSizeEdit(149);
        editsGeneNotCerFecNacimiento.setSizeEdit(149);
        editsGeneNotCerEstApellido.setSizeEdit(149);
        editsGeneNotCerEstNombre.setSizeEdit(149);
        editsGeneNotCerLugNacimiento.setSizeEdit(149);
        editsGeneNotCerEntFedPais.setSizeEdit(149);
        editsGeneNotCerCedEstudiante.setMaxLength(20);
        editsGeneNotCerFecNacimiento.setMaxLength(15);
        editsGeneNotCerEstApellido.setMaxLength(30);
        editsGeneNotCerEstNombre.setMaxLength(30);
        editsGeneNotCerLugNacimiento.setMaxLength(30);
        editsGeneNotCerEntFedPais.setMaxLength(15);
        tabsGeneNotCertificadas.addObjToGridPanel(0, c3, 3, 1);
        var c4 = container.create("c7"); 
        c4.setObject(gridsGeneNotCerAlumnos1.getObject(), 0, 13, 0, 0);
        tabsGeneNotCertificadas.addObjToGridPanel(0, c4, 8, 1);
        /////////TABS-V-VI-VII-///////////////////////////////////////////// 
        tabsGeneNotCertificadas.addLnToGridPanel(1,10)
        var c8 = container.create("c8");
        c8.setObject(editsGeneNotCerNomDirPlantel, 0, 7, 0, 0);
        c8.setObject(editsGeneNotCerCedDirPlantel, 20, 7, 0, 0);
        c8.setObject(editsGeneNotCerNomFunZonEducativa, 20, 7, 0, 0);
        editsGeneNotCerNomDirPlantel.setSizeEdit(149);
        editsGeneNotCerCedDirPlantel.setSizeEdit(149);
        editsGeneNotCerNomFunZonEducativa.setSizeEdit(149);
        editsGeneNotCerNomDirPlantel.setMaxLength(25);
        editsGeneNotCerCedDirPlantel.setMaxLength(15);
        editsGeneNotCerNomFunZonEducativa.setMaxLength(25);
        tabsGeneNotCertificadas.addObjToGridPanel(1, c8, 1, 1); 
        var c9 = container.create("c9");
        c9.setObject(editsGeneNotCerCedFunZonEducativa, 0, 7, 0, 0);
		editsGeneNotCerCedFunZonEducativa.setSizeEdit(149);
		editsGeneNotCerCedFunZonEducativa.setMaxLength(15);
        tabsGeneNotCertificadas.addObjToGridPanel(1, c9, 2, 1);
        var c10 = container.create("c10");
        c10.setObject(gridsGeneNotCerAñoGrado.getObject(), 0, 15, 0, 0);
        tabsGeneNotCertificadas.addObjToGridPanel(1, c10, 3, 1);
        ////TABS///-VIII-IX-X-////////////////////////////////////////////
        var c11 = container.create("c11");
        c11.setObject(gridsGeneNotCerGraAprEduParTrabajo.getObject(), 0, 15, 0, 0);
        tabsGeneNotCertificadas.addObjToGridPanel(2, c11, 1, 1);
        var c12 = container.create("c12");
        c12.setObject(memoGeneNotCerObservaciones, 2, 15, 0, 0);
        memoGeneNotCerObservaciones.vAlignCaption('middle');
		memoGeneNotCerObservaciones.setDimension(655, 170);
		memoGeneNotCerObservaciones.setMaxLength(990);
		tabsGeneNotCertificadas.addObjToGridPanel(2, c12, 2, 1);
		var c13 = container.create("c13");
		c13.setObject(editsGeneNotCerLugFecExpedicion, 2, 15, 0, 0);
		editsGeneNotCerLugFecExpedicion.setSizeEdit(657);
		editsGeneNotCerLugFecExpedicion.setMaxLength(50);
        tabsGeneNotCertificadas.addObjToGridPanel(2, c13, 2, 1);
        var c14 = container.create("c14");
        c14.setObject(imgButtonsGeneNotCerReporte.getObject(), 302, 15, 0, 0);
        c14.setObject(imgButtonsGeneNotCerSalir.getObject(), 42, 15, 0, 0);
        imgButtonsGeneNotCerReporte.setDimension(90, 22);
        imgButtonsGeneNotCerSalir.setDimension(90, 22);
        tabsGeneNotCertificadas.addObjToGridPanel(2, c14, 3, 1);
    },
	
    gridsGeneNotCerAlumnos1_Init: function(){
        gridsGeneNotCerAlumnos1.setFixColRow(false, true);
        gridsGeneNotCerAlumnos1.addTitleVectorX(['Nombre del Plantel','Localidad', 'E. F.']);
        gridsGeneNotCerAlumnos1.showData();
        gridsGeneNotCerAlumnos1.setSizeCol(1, 527);
        gridsGeneNotCerAlumnos1.setSizeCol(2, 250);
        gridsGeneNotCerAlumnos1.setSizeCol(3, 50);
        gridsGeneNotCerAlumnos1.setEditModeToAll();
    },
		
    gridsGeneNotCerAñoGrado_Init: function(){
        gridsGeneNotCerAñoGrado.setFixColRow(false, true);
        gridsGeneNotCerAñoGrado.addTitleVectorX(['Asignatura','En Nº','En Letras','T-E','Mes','Año','Plantel Nº']);
        gridsGeneNotCerAñoGrado.showData();
        gridsGeneNotCerAñoGrado.setSizeCol(1, 417);
        gridsGeneNotCerAñoGrado.setSizeCol(2, 40);
        gridsGeneNotCerAñoGrado.setSizeCol(3, 200);
        gridsGeneNotCerAñoGrado.setSizeCol(4, 25);
        gridsGeneNotCerAñoGrado.setSizeCol(5, 35);
        gridsGeneNotCerAñoGrado.setSizeCol(6, 45);
        gridsGeneNotCerAñoGrado.setSizeCol(7, 60);
        gridsGeneNotCerAñoGrado.setEditModeToAll();        
        var st = {
          type      : 'E',
          offsetPage: 0,
          pageSize  : 15,
          itemPage  : 0,
          fields    : ['Asignatura','En Nº','En Letras','T-E','MES','Año','Plantel Nº'],
          data 	  : [
                     ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
          			 ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
          			 ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
          			 ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
          			 ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
          			 ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
          			 ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']
          			]
      }
      gridsGeneNotCerAñoGrado.loadDataStruct(st);
      gridsGeneNotCerAñoGrado.autoSaveEnable();
    },
	
	gridsGeneNotCerGraAprEduParTrabajo_Init: function(){
        gridsGeneNotCerGraAprEduParTrabajo.setFixColRow(false, true);
        gridsGeneNotCerGraAprEduParTrabajo.addTitleVectorX(['Campo-1','Campo-2','Campo-3','Campo-4','Campo-5','Campo-6']);
        gridsGeneNotCerGraAprEduParTrabajo.showData();
        gridsGeneNotCerGraAprEduParTrabajo.setSizeCol(1, 61);
        gridsGeneNotCerGraAprEduParTrabajo.setSizeCol(2, 288);
        gridsGeneNotCerGraAprEduParTrabajo.setSizeCol(3, 61);
        gridsGeneNotCerGraAprEduParTrabajo.setSizeCol(4, 62);
        gridsGeneNotCerGraAprEduParTrabajo.setSizeCol(5, 288);
        gridsGeneNotCerGraAprEduParTrabajo.setSizeCol(6, 62);
        gridsGeneNotCerGraAprEduParTrabajo.setEditModeToAll();
	},
	
    create: function(){
        dialogsGeneNotCertificadas = dialogs.create('dialogsGeneNotCertificadas', 0, 0, 871, 480, 'GENERADOR DE NOTAS CERTIFICADAS');
        dialogsGeneNotCertificadas.setAdjY(20);
        tabsGeneNotCertificadas = tabs.create('tabsGeneNotCertificadas', 840, 460, ['DATOS-I-II-III-IV', 'DATOS-V-VI-VII','DATOS-VIII-IX-X']);
		////////////////////////////////-I-II-III-IV-/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        editsGeneNotCerPlaEstudio = edits.create('editsGeneNotCerPlaEstudio', 'editsGeneNotCerPlaEstudio', 'Plan de Estudio:', 1,110, 'normal');
        editsGeneNotCerPlaEstudio.setValidEmpty();
        editsGeneNotCerPlaEstudio.setFieldFind(true);
        editsGeneNotCerCodPlaEstudio = edits.create('editsGeneNotCerCodPlaEstudio', 'editsGeneNotCerCodPlaEstudio', 'Código Plan de Estudio:', 1,137, 'normal');
        editsGeneNotCerCodPlaEstudio.setValidEmpty();
        editsGeneNotCerCodPlaEstudio.setFieldFind(true);
        editsGeneNotCerMencion = edits.create('editsGeneNotCerMencion', 'editsGeneNotCerMencion', 'Mención:', 1,77, 'nromal');
        editsGeneNotCerMencion.setValidEmpty();
        editsGeneNotCerMencion.setFieldFind(true);
        editsGeneNotCerCodPlantel = edits.create('editsGeneNotCerCodPlantel', 'editsGeneNotCerCodPlantel', 'Codigo del Plantel:', 1,110,'normal');
        editsGeneNotCerCodPlantel.setValidEmpty();
        editsGeneNotCerCodNombre = edits.create('editsGeneNotCerCodNombre', 'editsGeneNotCerCodNombre', 'Nombre del Plantel:', 1,137, 'normal');
        editsGeneNotCerCodNombre.setValidEmpty();
        editsGeneNotCerCodDttEscolar = edits.create('editsGeneNotCerCodDttEscolar', 'editsGeneNotCerCodDttEscolar', 'Dtto Escolar:', 1,77, 'normal');
        editsGeneNotCerCodDttEscolar.setValidEmpty();
        editsGeneNotCerDireccion = edits.create('editsGeneNotCerDireccion', 'editsGeneNotCerDireccion', 'Dirección:', 1,110, 'normal');
        editsGeneNotCerDireccion.setValidEmpty();
        editsGeneNotCerTelefono = edits.create('editsGeneNotCerTelefono', 'editsGeneNotCerTelefono', 'Telefono:', 1,77,'normal');
        editsGeneNotCerTelefono.setValidEmpty();
        editsGeneNotCerMunicipio = edits.create('editsGeneNotCerMunicipio', 'editsGeneNotCerMunicipio', 'Municipio:', 1,110,'normal');
        editsGeneNotCerMunicipio.setValidEmpty();
        editsGeneNotCerEntFederal = edits.create('editsGeneNotCerEntFederal', 'editsGeneNotCerEntFederal', 'Ent. Federal:', 1,137,'normal');
        editsGeneNotCerEntFederal.setValidEmpty();
        editsGeneNotCerZonEducativa = edits.create('editsGeneNotCerZonEducativa', 'editsGeneNotCerZonEducativa', 'Z. Educativa:', 1,77,'normal');
        editsGeneNotCerZonEducativa.setValidEmpty();
        editsGeneNotCerCedEstudiante = edits.create('editsGeneNotCerCedEstudiante','editsGeneNotCerCedEstudiante','Cedula Estudiante:',1,110,'normal');
        editsGeneNotCerCedEstudiante.setValidEmpty();
        editsGeneNotCerFecNacimiento = edits.create('editsGeneNotCerFecNacimiento', 'editsGeneNotCerFecNacimiento', 'Fecha Nacimiento:', 1,137,'normal');
        editsGeneNotCerFecNacimiento.setValidEmpty();
        editsGeneNotCerEstApellido = edits.create('editsGeneNotCerEstApellido', 'editsGeneNotCerEstApellido', 'Apellido:', 1,77,'normal');
        editsGeneNotCerEstApellido.setValidEmpty();
        editsGeneNotCerEstNombre = edits.create('editsGeneNotCerEstNombre', 'editsGeneNotCerEstNombre', 'Nombre:', 1,110,'normal');
        editsGeneNotCerEstNombre.setValidEmpty();
        editsGeneNotCerLugNacimiento = edits.create('editsGeneNotCerLugNacimiento', 'editsGeneNotCerLugNacimiento', 'Lugar Nacimiento:', 1,137, 'normal');
        editsGeneNotCerLugNacimiento.setValidEmpty();
        editsGeneNotCerEntFedPais = edits.create('editsGeneNotCerEntFedPais', 'editsGeneNotCerEntFedPais', 'Ent.Fed.País:', 1,77,'normal');
        editsGeneNotCerEntFedPais.setValidEmpty();
        gridsGeneNotCerAlumnos1 = grids.create('gridsGeneNotCerAlumnos1', 5, 3);
		////////////////////////////////-V-VI-VII-////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		editsGeneNotCerNomDirPlantel = edits.create('editsGeneNotCerNomDirPlantel','editsGeneNotCerNomDirPlantel','Nombre Director:',1,110,'normal');
        editsGeneNotCerNomDirPlantel.setValidEmpty();
		editsGeneNotCerCedDirPlantel = edits.create('editsGeneNotCerCedDirPlantel', 'editsGeneNotCerCedDirPlantel', 'Cedula Director:', 1,137, 'normal');
        editsGeneNotCerCedDirPlantel.setValidEmpty();
		editsGeneNotCerNomFunZonEducativa = edits.create('editsGeneNotCerNomFunZonEducativa','editsGeneNotCerNomFunZonEducativa','Funcionario Z.E.:',1,94,'normal');
        editsGeneNotCerNomFunZonEducativa.setValidEmpty();
		editsGeneNotCerCedFunZonEducativa = edits.create('editsGeneNotCerCedFunZonEducativa','editsGeneNotCerCedFunZonEducativa','Cedula F.Z.E.:',1,110,'normal');
        editsGeneNotCerCedFunZonEducativa.setValidEmpty();
		gridsGeneNotCerAñoGrado = grids.create('gridsGeneNotCerAñoGrado', 15, 7);
		////////////////////////////////-VIII-IX-X-////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		gridsGeneNotCerGraAprEduParTrabajo = grids.create('gridsGeneNotCerGraAprEduParTrabajo', 5, 6);
		memoGeneNotCerObservaciones = memo.create('memoGeneNotCerObservaciones','Observaciones:',1,0,169);
		memoGeneNotCerObservaciones.setValidEmpty();
		editsGeneNotCerLugFecExpedicion = edits.create('editsGeneNotCerLugFecExpedicion','editsGeneNotCerLugFecExpedicion','Lugar y Fecha de Expedicion:',1,170,'normal');
        editsGeneNotCerLugFecExpedicion.setValidEmpty();
		imgButtonsGeneNotCerReporte = imgButtons.create('imgButtonsGeneNotCerReporte', 'Reporte', 'print.png');
        imgButtonsGeneNotCerSalir = imgButtons.create('imgButtonsGeneNotCerSalir', 'Salir', 'salir.png');
    },

    init: function(){
        this.create();
        this.setEvents();
        this.dialogsGeneNotCertificadas_Init();
        this.tabsGeneNotCertificadas_Init();
        this.gridsGeneNotCerAlumnos1_Init();
        this.gridsGeneNotCerAñoGrado_Init();
		this.gridsGeneNotCerGraAprEduParTrabajo_Init();
        this.createMWs(); 
    },
    
    setEvents: function() {
    	//imgButtonsGeneNotCerReporte.onClick(this.windowName + ".reporte()");
        imgButtonsGeneNotCerReporte.onClick(this.windowName + ".validar()");
        imgButtonsGeneNotCerSalir.onClick('dialogsGeneNotCertificadas.close()');
    }, 
    
    validar: function(methodName){
		if (editsGeneNotCerPlaEstudio.valid(dialogsGeneNotCertificadas))
			if (editsGeneNotCerCodPlaEstudio.valid(dialogsGeneNotCertificadas))
				if (editsGeneNotCerMencion.valid(dialogsGeneNotCertificadas))
					if (editsGeneNotCerCodPlantel.valid(dialogsGeneNotCertificadas))
						if (editsGeneNotCerCodNombre.valid(dialogsGeneNotCertificadas))
							if (editsGeneNotCerCodDttEscolar.valid(dialogsGeneNotCertificadas))
								if (editsGeneNotCerDireccion.valid(dialogsGeneNotCertificadas))
									if (editsGeneNotCerTelefono.valid(dialogsGeneNotCertificadas))
										if (editsGeneNotCerMunicipio.valid(dialogsGeneNotCertificadas))
											if (editsGeneNotCerEntFederal.valid(dialogsGeneNotCertificadas))
												if (editsGeneNotCerZonEducativa.valid(dialogsGeneNotCertificadas))
													if (editsGeneNotCerCedEstudiante.valid(dialogsGeneNotCertificadas))
														if (editsGeneNotCerFecNacimiento.valid(dialogsGeneNotCertificadas))
															if (editsGeneNotCerEstApellido.valid(dialogsGeneNotCertificadas))
																if (editsGeneNotCerEstNombre.valid(dialogsGeneNotCertificadas))
																	if (editsGeneNotCerLugNacimiento.valid(dialogsGeneNotCertificadas))
																		if (editsGeneNotCerEntFedPais.valid(dialogsGeneNotCertificadas))
																			if (editsGeneNotCerNomDirPlantel.valid(dialogsGeneNotCertificadas))
																				if (editsGeneNotCerCedDirPlantel.valid(dialogsGeneNotCertificadas))
																					if (editsGeneNotCerNomFunZonEducativa.valid(dialogsGeneNotCertificadas))
																						if (editsGeneNotCerCedFunZonEducativa.valid(dialogsGeneNotCertificadas))
																							if (memoGeneNotCerObservaciones.valid(dialogsGeneNotCertificadas))
																								if (editsGeneNotCerLugFecExpedicion.valid(dialogsGeneNotCertificadas))
																									this.reporte();
   },
    
    reporte : function(){  
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait',798,1500);
		rep.setPDFFormat('custom','mm', [343, 210]);
		rep.setNoRepeatHead();
		rep.setPositionIcon(770,0);
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.addImage(50,20,384,75,imgEduca.logo_ministerio,true);
		//PARTE-I//////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),13,'helvetica','normal');
		rep.addText(422, 40, 'CERTIFICACIÓN DE CALIFICACIONES',false);
		rep.addLine(422,50,722,50,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addText(445, 68, 'Código del Formato:RR-DEa-03-03',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),8,'helvetica','normal');
		rep.addText(404, 80, 'I. Plan de Estudio:                     '+editsGeneNotCerPlaEstudio.getValue(),false);
		rep.addLine(486,84,786,84,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addText(408, 93, 'Código del Plan de Estudio:                                   '+editsGeneNotCerCodPlaEstudio.getValue(),false);
		rep.addLine(550,98,786,98,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		//PARTE-II//////////////////////////////////////////////////////////////////////////////////////
        rep.addText(50, 106, 'II. Datos del Plantel o Zona Educativa que emite la Certificación:',false);
        rep.addText(410, 106, 'Mención:                                     '+editsGeneNotCerMencion.getValue(),false);
        rep.addLine(49,111,786,111,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(55, 119, 'Cód.Planel: '+editsGeneNotCerCodPlantel.getValue(),false);
        rep.addLine(106,124,200,124,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(204, 119, 'Nombre: '+editsGeneNotCerCodNombre.getValue(),false);
        rep.addLine(242,124,702,124,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(704, 119, 'Dtto.esc.:     '+editsGeneNotCerCodDttEscolar .getValue(),false);
        rep.addLine(746,124,786,124,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(55, 135, 'Dirección: '+editsGeneNotCerDireccion.getValue(),false);
        rep.addLine(102,137,618,137,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(620, 135, 'Teléfono: '+editsGeneNotCerTelefono.getValue(),false);
        rep.addLine(664,137,786,137,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(55, 148, 'Municipio: '+editsGeneNotCerMunicipio.getValue(),false);
        rep.addLine(100,153,340,153,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(342, 148, 'Ent. Federal: '+editsGeneNotCerEntFederal.getValue(),false);
        rep.addLine(400,153,554,153,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(555, 148, 'Zona Educativa: '+editsGeneNotCerZonEducativa.getValue(),false);
        rep.addLine(628,153,786,153,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        //PARTE-III////////////////////////////////////////////////////////////////////////////////////////
        rep.addText(50, 166, 'III. Datos de Identificación del(a) Estudiante',false);
        rep.addText(55, 179, 'Cédula de Identidad:                                    '+editsGeneNotCerCedEstudiante.getValue(),false);
        rep.addLine(146,182,552,182,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(556, 179, 'Fecha de Nacimiento:       '+editsGeneNotCerFecNacimiento.getValue(),false);
        rep.addLine(653,182,786,182,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(55, 192, 'Apellidos: '+editsGeneNotCerEstApellido.getValue(),false);
		rep.addLine(97,196,407,196,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addText(410, 192, 'Nombre: '+editsGeneNotCerEstNombre.getValue(),false);
		rep.addLine(447,196,786,196,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(55, 205, 'Lugar de Nacimiento: '+editsGeneNotCerLugNacimiento.getValue(),false);
        rep.addLine(149,209,478,209,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(479, 205, 'Ent.Federal o País: '+editsGeneNotCerEntFedPais.getValue(),false);
        rep.addLine(565,209,786,209,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		//PARTE-IV/////////////////////////////////////////////////////////////////////////////////////////
		rep.addText(50, 219, 'IV. Planteles donde cursó estos estudios:',false);
		rep.addSimpleTablePDF(105,47.3,rep.getRGBAObj(0,0,0,1),100.9,1,3.8,false);//linea E 
		rep.addSimpleTablePDF(13,51.1,rep.getRGBAObj(0,0,0,1),92,3,3.8,false);//linea E 
		rep.addSimpleTablePDF(105,51.1,rep.getRGBAObj(0,0,0,1),100.9,3,3.8,false);//linea E 
		rep.addLine(65,228,65,279,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(250,228,250,279,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(378,228,378,279,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(402,228,402,279,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(416,211,416,279,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(619,211,619,279,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(762,211,762,279,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),8,'helvetica','normal');
		rep.addText(54,240, 'Nº',false);
		rep.addText(69,240,'Nombre del Plantel',false);
		rep.addText(252,240, 'Localidad',false);
		rep.addText(380,240, 'E.F.',false);
		rep.addText(54,254,'1   '+gridsGeneNotCerAlumnos1.getEdit(1,1).value,false);
		rep.addText(253,254, gridsGeneNotCerAlumnos1.getEdit(1,2).value,false);
		rep.addText(381,254, gridsGeneNotCerAlumnos1.getEdit(1,3).value,false);
		rep.addText(54,273,'2   '+gridsGeneNotCerAlumnos1.getEdit(2,1).value,false);
		rep.addText(253,273, gridsGeneNotCerAlumnos1.getEdit(2,2).value,false);
		rep.addText(381,273, gridsGeneNotCerAlumnos1.getEdit(2,3).value,false);
		rep.addText(403,222, 'Nº',false);
		rep.addText(420,222, 'Nombre del Plantel',false);
		rep.addText(620,222, 'Localidad',false);
		rep.addText(767,222, 'E.F.',false);
		rep.addText(406,240, '3   '+gridsGeneNotCerAlumnos1.getEdit(3,1).value,false);
		rep.addText(621,240, gridsGeneNotCerAlumnos1.getEdit(3,2).value,false);
		rep.addText(766,240, gridsGeneNotCerAlumnos1.getEdit(3,3).value,false);
		rep.addText(406,254, '4   '+gridsGeneNotCerAlumnos1.getEdit(4,1).value,false);
		rep.addText(621,254, gridsGeneNotCerAlumnos1.getEdit(4,2).value,false);
		rep.addText(766,254, gridsGeneNotCerAlumnos1.getEdit(4,3).value,false);
		rep.addText(406,273, '5   '+gridsGeneNotCerAlumnos1.getEdit(5,1).value,false);
		rep.addText(621,273, gridsGeneNotCerAlumnos1.getEdit(5,2).value,false);
		rep.addText(766,273, gridsGeneNotCerAlumnos1.getEdit(5,3).value,false);
		//PARTE-V/////////////////////////////////////////////////////////////////////////////////////////////
		rep.addText(50, 293, 'V. Pensum de Estudios:',false);
		rep.addSimpleTablePDF(13,66.8,rep.getRGBAObj(0,0,0,1),101.6,17,3.8,false);//linea E 
		rep.addLine(250,296,250,580,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(280,314,280,580,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addSimpleTablePDF(114.5,66.8,rep.getRGBAObj(0,0,0,1),43,1,7.6,false);//linea T 
		rep.addLine(463,314,548,314,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addLine(460,297,460,580,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(497,314,497,580,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(550,297,550,580,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addSimpleTablePDF(114.5,74.4,rep.getRGBAObj(0,0,0,1),43,15,3.8,false);//linea E 
		rep.addText(55,310, 'Año o Grado:',false);
		rep.addText(333,310, 'Calificación',false);
		rep.addText(493,310, 'Fecha',false);
		rep.addText(562,310, 'Plantel',false);
		rep.addText(130,324, 'Asignaturas',false);
		//PRIMERA//PAGINA////////////////////////////////////////////////////////
		gridsGeneNotCerAñoGrado.firstPage();
		rep.addText(56,341, gridsGeneNotCerAñoGrado.getEdit(1,1).value,false);
		rep.addText(56,358, gridsGeneNotCerAñoGrado.getEdit(2,1).value,false);
		rep.addText(56,376, gridsGeneNotCerAñoGrado.getEdit(3,1).value,false);
		rep.addText(56,390, gridsGeneNotCerAñoGrado.getEdit(4,1).value,false);
		rep.addText(56,409, gridsGeneNotCerAñoGrado.getEdit(5,1).value,false);
		rep.addText(56,424, gridsGeneNotCerAñoGrado.getEdit(6,1).value,false);
		rep.addText(56,441, gridsGeneNotCerAñoGrado.getEdit(7,1).value,false);
		rep.addText(56,455, gridsGeneNotCerAñoGrado.getEdit(8,1).value,false);
		rep.addText(56,473, gridsGeneNotCerAñoGrado.getEdit(9,1).value,false);
		rep.addText(56,490, gridsGeneNotCerAñoGrado.getEdit(10,1).value,false);
		rep.addText(56,507, gridsGeneNotCerAñoGrado.getEdit(11,1).value,false);
		rep.addText(56,524, gridsGeneNotCerAñoGrado.getEdit(12,1).value,false);
		rep.addText(56,541, gridsGeneNotCerAñoGrado.getEdit(13,1).value,false);
		rep.addText(56,558, gridsGeneNotCerAñoGrado.getEdit(14,1).value,false);
		rep.addText(56,575, gridsGeneNotCerAñoGrado.getEdit(15,1).value,false);
		rep.addText(252,324, 'En Nº',false);
		rep.addText(259,341, gridsGeneNotCerAñoGrado.getEdit(1,2).value,false);
		rep.addText(259,358, gridsGeneNotCerAñoGrado.getEdit(2,2).value,false);
		rep.addText(259,376, gridsGeneNotCerAñoGrado.getEdit(3,2).value,false);
		rep.addText(259,390, gridsGeneNotCerAñoGrado.getEdit(4,2).value,false);
		rep.addText(259,409, gridsGeneNotCerAñoGrado.getEdit(5,2).value,false);
		rep.addText(259,424, gridsGeneNotCerAñoGrado.getEdit(6,2).value,false);
		rep.addText(259,441, gridsGeneNotCerAñoGrado.getEdit(7,2).value,false);
		rep.addText(259,455, gridsGeneNotCerAñoGrado.getEdit(8,2).value,false);
		rep.addText(259,473, gridsGeneNotCerAñoGrado.getEdit(9,2).value,false);
		rep.addText(259,490, gridsGeneNotCerAñoGrado.getEdit(10,2).value,false);
		rep.addText(259,507, gridsGeneNotCerAñoGrado.getEdit(11,2).value,false);
		rep.addText(259,524, gridsGeneNotCerAñoGrado.getEdit(12,2).value,false);
		rep.addText(259,541, gridsGeneNotCerAñoGrado.getEdit(13,2).value,false);
		rep.addText(259,558, gridsGeneNotCerAñoGrado.getEdit(14,2).value,false);
		rep.addText(259,575, gridsGeneNotCerAñoGrado.getEdit(15,2).value,false);
		rep.addText(339,324, 'En letras',false);
		rep.addText(283,341, gridsGeneNotCerAñoGrado.getEdit(1,3).value,false);
		rep.addText(283,358, gridsGeneNotCerAñoGrado.getEdit(2,3).value,false);
		rep.addText(283,376, gridsGeneNotCerAñoGrado.getEdit(3,3).value,false);
		rep.addText(283,390, gridsGeneNotCerAñoGrado.getEdit(4,3).value,false);
		rep.addText(283,409, gridsGeneNotCerAñoGrado.getEdit(5,3).value,false);
		rep.addText(283,424, gridsGeneNotCerAñoGrado.getEdit(6,3).value,false);
		rep.addText(283,441, gridsGeneNotCerAñoGrado.getEdit(7,3).value,false);
		rep.addText(283,455, gridsGeneNotCerAñoGrado.getEdit(8,3).value,false);
		rep.addText(283,473, gridsGeneNotCerAñoGrado.getEdit(9,3).value,false);
		rep.addText(283,490, gridsGeneNotCerAñoGrado.getEdit(10,3).value,false);
		rep.addText(283,507, gridsGeneNotCerAñoGrado.getEdit(11,3).value,false);
		rep.addText(283,524, gridsGeneNotCerAñoGrado.getEdit(12,3).value,false);
		rep.addText(283,541, gridsGeneNotCerAñoGrado.getEdit(13,3).value,false);
		rep.addText(283,558, gridsGeneNotCerAñoGrado.getEdit(14,3).value,false);
		rep.addText(283,575, gridsGeneNotCerAñoGrado.getEdit(15,3).value,false);
		rep.addText(442,324, 'T-E',false);
		rep.addText(446,341, gridsGeneNotCerAñoGrado.getEdit(1,4).value,false);
		rep.addText(446,358, gridsGeneNotCerAñoGrado.getEdit(2,4).value,false);
		rep.addText(446,376, gridsGeneNotCerAñoGrado.getEdit(3,4).value,false);
		rep.addText(446,390, gridsGeneNotCerAñoGrado.getEdit(4,4).value,false);
		rep.addText(446,409, gridsGeneNotCerAñoGrado.getEdit(5,4).value,false);
		rep.addText(446,424, gridsGeneNotCerAñoGrado.getEdit(6,4).value,false);
		rep.addText(446,441, gridsGeneNotCerAñoGrado.getEdit(7,4).value,false);
		rep.addText(446,455, gridsGeneNotCerAñoGrado.getEdit(8,4).value,false);
		rep.addText(446,473, gridsGeneNotCerAñoGrado.getEdit(9,4).value,false);
		rep.addText(446,490, gridsGeneNotCerAñoGrado.getEdit(10,4).value,false);
		rep.addText(446,507, gridsGeneNotCerAñoGrado.getEdit(11,4).value,false);
		rep.addText(446,524, gridsGeneNotCerAñoGrado.getEdit(12,4).value,false);
		rep.addText(446,541, gridsGeneNotCerAñoGrado.getEdit(13,4).value,false);
		rep.addText(446,558, gridsGeneNotCerAñoGrado.getEdit(14,4).value,false);
		rep.addText(446,575, gridsGeneNotCerAñoGrado.getEdit(15,4).value,false);
		rep.addText(469,324, 'Mes',false);
		rep.addText(474,341, gridsGeneNotCerAñoGrado.getEdit(1,5).value,false);
		rep.addText(474,358, gridsGeneNotCerAñoGrado.getEdit(2,5).value,false);
		rep.addText(474,376, gridsGeneNotCerAñoGrado.getEdit(3,5).value,false);
		rep.addText(474,390, gridsGeneNotCerAñoGrado.getEdit(4,5).value,false);
		rep.addText(474,409, gridsGeneNotCerAñoGrado.getEdit(5,5).value,false);
		rep.addText(474,424, gridsGeneNotCerAñoGrado.getEdit(6,5).value,false);
		rep.addText(474,441, gridsGeneNotCerAñoGrado.getEdit(7,5).value,false);
		rep.addText(474,455, gridsGeneNotCerAñoGrado.getEdit(8,5).value,false);
		rep.addText(474,473, gridsGeneNotCerAñoGrado.getEdit(9,5).value,false);
		rep.addText(474,490, gridsGeneNotCerAñoGrado.getEdit(10,5).value,false);
		rep.addText(474,507, gridsGeneNotCerAñoGrado.getEdit(11,5).value,false);
		rep.addText(474,524, gridsGeneNotCerAñoGrado.getEdit(12,5).value,false);
		rep.addText(474,541, gridsGeneNotCerAñoGrado.getEdit(13,5).value,false);
		rep.addText(474,558, gridsGeneNotCerAñoGrado.getEdit(14,5).value,false);
		rep.addText(474,575, gridsGeneNotCerAñoGrado.getEdit(15,5).value,false);
		rep.addText(513,324, 'Año',false);
		rep.addText(512,341, gridsGeneNotCerAñoGrado.getEdit(1,6).value,false);
		rep.addText(512,358, gridsGeneNotCerAñoGrado.getEdit(2,6).value,false);
		rep.addText(512,376, gridsGeneNotCerAñoGrado.getEdit(3,6).value,false);
		rep.addText(512,390, gridsGeneNotCerAñoGrado.getEdit(4,6).value,false);
		rep.addText(512,409, gridsGeneNotCerAñoGrado.getEdit(5,6).value,false);
		rep.addText(512,424, gridsGeneNotCerAñoGrado.getEdit(6,6).value,false);
		rep.addText(512,441, gridsGeneNotCerAñoGrado.getEdit(7,6).value,false);
		rep.addText(512,455, gridsGeneNotCerAñoGrado.getEdit(8,6).value,false);
		rep.addText(512,473, gridsGeneNotCerAñoGrado.getEdit(9,6).value,false);
		rep.addText(512,490, gridsGeneNotCerAñoGrado.getEdit(10,6).value,false);
		rep.addText(512,507, gridsGeneNotCerAñoGrado.getEdit(11,6).value,false);
		rep.addText(512,524, gridsGeneNotCerAñoGrado.getEdit(12,6).value,false);
		rep.addText(512,541, gridsGeneNotCerAñoGrado.getEdit(13,6).value,false);
		rep.addText(512,558, gridsGeneNotCerAñoGrado.getEdit(14,6).value,false);
		rep.addText(512,575, gridsGeneNotCerAñoGrado.getEdit(15,6).value,false);
		rep.addText(570,324, 'Nº',false);
		rep.addText(572,341, gridsGeneNotCerAñoGrado.getEdit(1,7).value,false);
		rep.addText(572,358, gridsGeneNotCerAñoGrado.getEdit(2,7).value,false);
		rep.addText(572,376, gridsGeneNotCerAñoGrado.getEdit(3,7).value,false);
		rep.addText(572,390, gridsGeneNotCerAñoGrado.getEdit(4,7).value,false);
		rep.addText(572,409, gridsGeneNotCerAñoGrado.getEdit(5,7).value,false);
		rep.addText(572,424, gridsGeneNotCerAñoGrado.getEdit(6,7).value,false);
		rep.addText(572,441, gridsGeneNotCerAñoGrado.getEdit(7,7).value,false);
		rep.addText(572,455, gridsGeneNotCerAñoGrado.getEdit(8,7).value,false);
		rep.addText(572,473, gridsGeneNotCerAñoGrado.getEdit(9,7).value,false);
		rep.addText(572,490, gridsGeneNotCerAñoGrado.getEdit(10,7).value,false);
		rep.addText(572,507, gridsGeneNotCerAñoGrado.getEdit(11,7).value,false);
		rep.addText(572,524, gridsGeneNotCerAñoGrado.getEdit(12,7).value,false);
		rep.addText(572,541, gridsGeneNotCerAñoGrado.getEdit(13,7).value,false);
		rep.addText(572,558, gridsGeneNotCerAñoGrado.getEdit(14,7).value,false);
		rep.addText(572,575, gridsGeneNotCerAñoGrado.getEdit(15,7).value,false);
		rep.addSimpleTablePDF(13,131.5,rep.getRGBAObj(0,0,0,1),101.6,17,3.8,false);//linea E 
		rep.addLine(250,580,250,862,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(280,595,280,861,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addSimpleTablePDF(114.5,131.5,rep.getRGBAObj(0,0,0,1),43,1,7.6,false);//linea T 
		rep.addLine(463,595,548,595,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addLine(460,485,460,862,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(497,595,497,861,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(550,485,550,862,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addSimpleTablePDF(114.5,139.1,rep.getRGBAObj(0,0,0,1),43,15,3.8,false);//linea E 
		//SEGUNDA//PAGINA/////////////////////////////////////////////////////////
		rep.addText(55,591, 'Año o Grado:',false);
		rep.addText(321,591, 'Calificación',false);
		rep.addText(493,591, 'Fecha',false);
		rep.addText(562,591, 'Plantel',false);
		rep.addText(130,607, 'Asignaturas',false);
		gridsGeneNotCerAñoGrado.nextPage();
		rep.addText(56,621, gridsGeneNotCerAñoGrado.getEdit(1,1).value,false);
		rep.addText(56,640, gridsGeneNotCerAñoGrado.getEdit(2,1).value,false);
		rep.addText(56,655, gridsGeneNotCerAñoGrado.getEdit(3,1).value,false);
		rep.addText(56,672, gridsGeneNotCerAñoGrado.getEdit(4,1).value,false);
		rep.addText(56,689, gridsGeneNotCerAñoGrado.getEdit(5,1).value,false);
		rep.addText(56,706, gridsGeneNotCerAñoGrado.getEdit(6,1).value,false);
		rep.addText(56,722, gridsGeneNotCerAñoGrado.getEdit(7,1).value,false);
		rep.addText(56,740, gridsGeneNotCerAñoGrado.getEdit(8,1).value,false);
		rep.addText(56,757, gridsGeneNotCerAñoGrado.getEdit(9,1).value,false);
		rep.addText(56,774, gridsGeneNotCerAñoGrado.getEdit(10,1).value,false);
		rep.addText(56,791, gridsGeneNotCerAñoGrado.getEdit(11,1).value,false);
		rep.addText(56,808, gridsGeneNotCerAñoGrado.getEdit(12,1).value,false);
		rep.addText(56,825, gridsGeneNotCerAñoGrado.getEdit(13,1).value,false);
		rep.addText(56,842, gridsGeneNotCerAñoGrado.getEdit(14,1).value,false);
		rep.addText(56,857, gridsGeneNotCerAñoGrado.getEdit(15,1).value,false);
		rep.addText(252,324, 'En Nº',false);
		rep.addText(259,621, gridsGeneNotCerAñoGrado.getEdit(1,2).value,false);
		rep.addText(259,640, gridsGeneNotCerAñoGrado.getEdit(2,2).value,false);
		rep.addText(259,655, gridsGeneNotCerAñoGrado.getEdit(3,2).value,false);
		rep.addText(259,672, gridsGeneNotCerAñoGrado.getEdit(4,2).value,false);
		rep.addText(259,689, gridsGeneNotCerAñoGrado.getEdit(5,2).value,false);
		rep.addText(259,706, gridsGeneNotCerAñoGrado.getEdit(6,2).value,false);
		rep.addText(259,723, gridsGeneNotCerAñoGrado.getEdit(7,2).value,false);
		rep.addText(259,740, gridsGeneNotCerAñoGrado.getEdit(8,2).value,false);
		rep.addText(259,757, gridsGeneNotCerAñoGrado.getEdit(9,2).value,false);
		rep.addText(259,774, gridsGeneNotCerAñoGrado.getEdit(10,2).value,false);
		rep.addText(259,791, gridsGeneNotCerAñoGrado.getEdit(11,2).value,false);
		rep.addText(259,808, gridsGeneNotCerAñoGrado.getEdit(12,2).value,false);
		rep.addText(259,825, gridsGeneNotCerAñoGrado.getEdit(13,2).value,false);
		rep.addText(259,842, gridsGeneNotCerAñoGrado.getEdit(14,2).value,false);
		rep.addText(259,859, gridsGeneNotCerAñoGrado.getEdit(15,2).value,false);
		rep.addText(339,324, 'En letras',false);
		rep.addText(283,621, gridsGeneNotCerAñoGrado.getEdit(1,3).value,false);
		rep.addText(283,640, gridsGeneNotCerAñoGrado.getEdit(2,3).value,false);
		rep.addText(283,655, gridsGeneNotCerAñoGrado.getEdit(3,3).value,false);
		rep.addText(283,672, gridsGeneNotCerAñoGrado.getEdit(4,3).value,false);
		rep.addText(283,689, gridsGeneNotCerAñoGrado.getEdit(5,3).value,false);
		rep.addText(283,706, gridsGeneNotCerAñoGrado.getEdit(6,3).value,false);
		rep.addText(283,723, gridsGeneNotCerAñoGrado.getEdit(7,3).value,false);
		rep.addText(283,740, gridsGeneNotCerAñoGrado.getEdit(8,3).value,false);
		rep.addText(283,757, gridsGeneNotCerAñoGrado.getEdit(9,3).value,false);
		rep.addText(283,774, gridsGeneNotCerAñoGrado.getEdit(10,3).value,false);
		rep.addText(283,791, gridsGeneNotCerAñoGrado.getEdit(11,3).value,false);
		rep.addText(283,808, gridsGeneNotCerAñoGrado.getEdit(12,3).value,false);
		rep.addText(283,825, gridsGeneNotCerAñoGrado.getEdit(13,3).value,false);
		rep.addText(283,842, gridsGeneNotCerAñoGrado.getEdit(14,3).value,false);
		rep.addText(283,859, gridsGeneNotCerAñoGrado.getEdit(15,3).value,false);
		rep.addText(442,324, 'T-E',false);
		rep.addText(446,621, gridsGeneNotCerAñoGrado.getEdit(1,4).value,false);
		rep.addText(446,640, gridsGeneNotCerAñoGrado.getEdit(2,4).value,false);
		rep.addText(446,655, gridsGeneNotCerAñoGrado.getEdit(3,4).value,false);
		rep.addText(446,672, gridsGeneNotCerAñoGrado.getEdit(4,4).value,false);
		rep.addText(446,689, gridsGeneNotCerAñoGrado.getEdit(5,4).value,false);
		rep.addText(446,706, gridsGeneNotCerAñoGrado.getEdit(6,4).value,false);
		rep.addText(446,723, gridsGeneNotCerAñoGrado.getEdit(7,4).value,false);
		rep.addText(446,740, gridsGeneNotCerAñoGrado.getEdit(8,4).value,false);
		rep.addText(446,757, gridsGeneNotCerAñoGrado.getEdit(9,4).value,false);
		rep.addText(446,774, gridsGeneNotCerAñoGrado.getEdit(10,4).value,false);
		rep.addText(446,791, gridsGeneNotCerAñoGrado.getEdit(11,4).value,false);
		rep.addText(446,808, gridsGeneNotCerAñoGrado.getEdit(12,4).value,false);
		rep.addText(446,825, gridsGeneNotCerAñoGrado.getEdit(13,4).value,false);
		rep.addText(446,842, gridsGeneNotCerAñoGrado.getEdit(14,4).value,false);
		rep.addText(446,859, gridsGeneNotCerAñoGrado.getEdit(15,4).value,false);
		rep.addText(469,324, 'Mes',false);
		rep.addText(474,621, gridsGeneNotCerAñoGrado.getEdit(1,5).value,false);
		rep.addText(474,640, gridsGeneNotCerAñoGrado.getEdit(2,5).value,false);
		rep.addText(474,655, gridsGeneNotCerAñoGrado.getEdit(3,5).value,false);
		rep.addText(474,672, gridsGeneNotCerAñoGrado.getEdit(4,5).value,false);
		rep.addText(474,689, gridsGeneNotCerAñoGrado.getEdit(5,5).value,false);
		rep.addText(474,706, gridsGeneNotCerAñoGrado.getEdit(6,5).value,false);
		rep.addText(474,723, gridsGeneNotCerAñoGrado.getEdit(7,5).value,false);
		rep.addText(474,740, gridsGeneNotCerAñoGrado.getEdit(8,5).value,false);
		rep.addText(474,757, gridsGeneNotCerAñoGrado.getEdit(9,5).value,false);
		rep.addText(474,774, gridsGeneNotCerAñoGrado.getEdit(10,5).value,false);
		rep.addText(474,791, gridsGeneNotCerAñoGrado.getEdit(11,5).value,false);
		rep.addText(474,808, gridsGeneNotCerAñoGrado.getEdit(12,5).value,false);
		rep.addText(474,825, gridsGeneNotCerAñoGrado.getEdit(13,5).value,false);
		rep.addText(474,842, gridsGeneNotCerAñoGrado.getEdit(14,5).value,false);
		rep.addText(474,859, gridsGeneNotCerAñoGrado.getEdit(15,5).value,false);
		rep.addText(513,324, 'Año',false);
		rep.addText(512,621, gridsGeneNotCerAñoGrado.getEdit(1,6).value,false);
		rep.addText(512,640, gridsGeneNotCerAñoGrado.getEdit(2,6).value,false);
		rep.addText(512,655, gridsGeneNotCerAñoGrado.getEdit(3,6).value,false);
		rep.addText(512,672, gridsGeneNotCerAñoGrado.getEdit(4,6).value,false);
		rep.addText(512,689, gridsGeneNotCerAñoGrado.getEdit(5,6).value,false);
		rep.addText(512,706, gridsGeneNotCerAñoGrado.getEdit(6,6).value,false);
		rep.addText(512,723, gridsGeneNotCerAñoGrado.getEdit(7,6).value,false);
		rep.addText(512,740, gridsGeneNotCerAñoGrado.getEdit(8,6).value,false);
		rep.addText(512,757, gridsGeneNotCerAñoGrado.getEdit(9,6).value,false);
		rep.addText(512,774, gridsGeneNotCerAñoGrado.getEdit(10,6).value,false);
		rep.addText(512,791, gridsGeneNotCerAñoGrado.getEdit(11,6).value,false);
		rep.addText(512,808, gridsGeneNotCerAñoGrado.getEdit(12,6).value,false);
		rep.addText(512,825, gridsGeneNotCerAñoGrado.getEdit(13,6).value,false);
		rep.addText(512,842, gridsGeneNotCerAñoGrado.getEdit(14,6).value,false);
		rep.addText(512,859, gridsGeneNotCerAñoGrado.getEdit(15,6).value,false);
		rep.addText(570,324, 'Nº',false);
		rep.addText(572,621, gridsGeneNotCerAñoGrado.getEdit(1,7).value,false);
		rep.addText(572,640, gridsGeneNotCerAñoGrado.getEdit(2,7).value,false);
		rep.addText(572,655, gridsGeneNotCerAñoGrado.getEdit(3,7).value,false);
		rep.addText(572,672, gridsGeneNotCerAñoGrado.getEdit(4,7).value,false);
		rep.addText(572,689, gridsGeneNotCerAñoGrado.getEdit(5,7).value,false);
		rep.addText(572,706, gridsGeneNotCerAñoGrado.getEdit(6,7).value,false);
		rep.addText(572,723, gridsGeneNotCerAñoGrado.getEdit(7,7).value,false);
		rep.addText(572,740, gridsGeneNotCerAñoGrado.getEdit(8,7).value,false);
		rep.addText(572,757, gridsGeneNotCerAñoGrado.getEdit(9,7).value,false);
		rep.addText(572,774, gridsGeneNotCerAñoGrado.getEdit(10,7).value,false);
		rep.addText(572,791, gridsGeneNotCerAñoGrado.getEdit(11,7).value,false);
		rep.addText(572,808, gridsGeneNotCerAñoGrado.getEdit(12,7).value,false);
		rep.addText(572,825, gridsGeneNotCerAñoGrado.getEdit(13,7).value,false);
		rep.addText(572,842, gridsGeneNotCerAñoGrado.getEdit(14,7).value,false);
		rep.addText(572,859, gridsGeneNotCerAñoGrado.getEdit(15,7).value,false);
		rep.addText(252,607, 'En Nº',false);
		rep.addText(339,607, 'En letras',false);
		rep.addText(442,607, 'T-E',false);
		rep.addText(469,607, 'Mes',false);
		rep.addText(513,607, 'Año',false);
		rep.addText(570,607, 'Nº',false);
		rep.addSimpleTablePDF(13,196.2,rep.getRGBAObj(0,0,0,1),101.6,17,3.8,false);//linea E 
		rep.addLine(250,862,250,1145,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(280,880,280,1145,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addSimpleTablePDF(114.5,196.2,rep.getRGBAObj(0,0,0,1),43,1,7.6,false);//linea T 
		rep.addLine(463,880,548,880,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addLine(460,862,460,1145,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(497,880,497,1145,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(550,862,550,1145,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addSimpleTablePDF(114.5,203.8,rep.getRGBAObj(0,0,0,1),43,15,3.8,false);//linea E 
		//TERCERA//PAGINA////////////////////////////////////////////////////////////////////
		rep.addText(55,874, 'Año o Grado:',false);
		rep.addText(321,874, 'Calificación',false);
		rep.addText(493,875, 'Fecha',false);
		rep.addText(562,875, 'Plantel',false);
		rep.addText(130,892, 'Asignaturas',false);
		gridsGeneNotCerAñoGrado.nextPage();
		rep.addText(56,906, gridsGeneNotCerAñoGrado.getEdit(1,1).value,false);
		rep.addText(56,923, gridsGeneNotCerAñoGrado.getEdit(2,1).value,false);
		rep.addText(56,940, gridsGeneNotCerAñoGrado.getEdit(3,1).value,false);
		rep.addText(56,957, gridsGeneNotCerAñoGrado.getEdit(4,1).value,false);
		rep.addText(56,975, gridsGeneNotCerAñoGrado.getEdit(5,1).value,false);
		rep.addText(56,992, gridsGeneNotCerAñoGrado.getEdit(6,1).value,false);
		rep.addText(56,1007, gridsGeneNotCerAñoGrado.getEdit(7,1).value,false);
		rep.addText(56,1023, gridsGeneNotCerAñoGrado.getEdit(8,1).value,false);
		rep.addText(56,1040, gridsGeneNotCerAñoGrado.getEdit(9,1).value,false);
		rep.addText(56,1058, gridsGeneNotCerAñoGrado.getEdit(10,1).value,false);
		rep.addText(56,1075, gridsGeneNotCerAñoGrado.getEdit(11,1).value,false);
		rep.addText(56,1089, gridsGeneNotCerAñoGrado.getEdit(12,1).value,false);
		rep.addText(56,1106, gridsGeneNotCerAñoGrado.getEdit(13,1).value,false);
		rep.addText(56,1123, gridsGeneNotCerAñoGrado.getEdit(14,1).value,false);
		rep.addText(56,1141, gridsGeneNotCerAñoGrado.getEdit(15,1).value,false);
		rep.addText(252,324, 'En Nº',false);
		rep.addText(259,906, gridsGeneNotCerAñoGrado.getEdit(1,2).value,false);
		rep.addText(259,923, gridsGeneNotCerAñoGrado.getEdit(2,2).value,false);
		rep.addText(259,940, gridsGeneNotCerAñoGrado.getEdit(3,2).value,false);
		rep.addText(259,957, gridsGeneNotCerAñoGrado.getEdit(4,2).value,false);
		rep.addText(259,975, gridsGeneNotCerAñoGrado.getEdit(5,2).value,false);
		rep.addText(259,992, gridsGeneNotCerAñoGrado.getEdit(6,2).value,false);
		rep.addText(259,1007, gridsGeneNotCerAñoGrado.getEdit(7,2).value,false);
		rep.addText(259,1023, gridsGeneNotCerAñoGrado.getEdit(8,2).value,false);
		rep.addText(259,1040, gridsGeneNotCerAñoGrado.getEdit(9,2).value,false);
		rep.addText(259,1058, gridsGeneNotCerAñoGrado.getEdit(10,2).value,false);
		rep.addText(259,1075, gridsGeneNotCerAñoGrado.getEdit(11,2).value,false);
		rep.addText(259,1089, gridsGeneNotCerAñoGrado.getEdit(12,2).value,false);
		rep.addText(259,1106, gridsGeneNotCerAñoGrado.getEdit(13,2).value,false);
		rep.addText(259,1123, gridsGeneNotCerAñoGrado.getEdit(14,2).value,false);
		rep.addText(259,1141, gridsGeneNotCerAñoGrado.getEdit(15,2).value,false);
		rep.addText(339,324, 'En letras',false);
		rep.addText(283,906, gridsGeneNotCerAñoGrado.getEdit(1,3).value,false);
		rep.addText(283,923, gridsGeneNotCerAñoGrado.getEdit(2,3).value,false);
		rep.addText(283,940, gridsGeneNotCerAñoGrado.getEdit(3,3).value,false);
		rep.addText(283,957, gridsGeneNotCerAñoGrado.getEdit(4,3).value,false);
		rep.addText(283,975, gridsGeneNotCerAñoGrado.getEdit(5,3).value,false);
		rep.addText(283,992, gridsGeneNotCerAñoGrado.getEdit(6,3).value,false);
		rep.addText(283,1007, gridsGeneNotCerAñoGrado.getEdit(7,3).value,false);
		rep.addText(283,1023, gridsGeneNotCerAñoGrado.getEdit(8,3).value,false);
		rep.addText(283,1040, gridsGeneNotCerAñoGrado.getEdit(9,3).value,false);
		rep.addText(283,1058, gridsGeneNotCerAñoGrado.getEdit(10,3).value,false);
		rep.addText(283,1075, gridsGeneNotCerAñoGrado.getEdit(11,3).value,false);
		rep.addText(283,1089, gridsGeneNotCerAñoGrado.getEdit(12,3).value,false);
		rep.addText(283,1106, gridsGeneNotCerAñoGrado.getEdit(13,3).value,false);
		rep.addText(283,1123, gridsGeneNotCerAñoGrado.getEdit(14,3).value,false);
		rep.addText(283,1141, gridsGeneNotCerAñoGrado.getEdit(15,3).value,false);
		rep.addText(442,324, 'T-E',false);
		rep.addText(446,906, gridsGeneNotCerAñoGrado.getEdit(1,4).value,false);
		rep.addText(446,923, gridsGeneNotCerAñoGrado.getEdit(2,4).value,false);
		rep.addText(446,940, gridsGeneNotCerAñoGrado.getEdit(3,4).value,false);
		rep.addText(446,957, gridsGeneNotCerAñoGrado.getEdit(4,4).value,false);
		rep.addText(446,975, gridsGeneNotCerAñoGrado.getEdit(5,4).value,false);
		rep.addText(446,992, gridsGeneNotCerAñoGrado.getEdit(6,4).value,false);
		rep.addText(446,1007, gridsGeneNotCerAñoGrado.getEdit(7,4).value,false);
		rep.addText(446,1023, gridsGeneNotCerAñoGrado.getEdit(8,4).value,false);
		rep.addText(446,1040, gridsGeneNotCerAñoGrado.getEdit(9,4).value,false);
		rep.addText(446,1058, gridsGeneNotCerAñoGrado.getEdit(10,4).value,false);
		rep.addText(446,1075, gridsGeneNotCerAñoGrado.getEdit(11,4).value,false);
		rep.addText(446,1089, gridsGeneNotCerAñoGrado.getEdit(12,4).value,false);
		rep.addText(446,1106, gridsGeneNotCerAñoGrado.getEdit(13,4).value,false);
		rep.addText(446,1123, gridsGeneNotCerAñoGrado.getEdit(14,4).value,false);
		rep.addText(446,1141, gridsGeneNotCerAñoGrado.getEdit(15,4).value,false);
		rep.addText(469,324, 'Mes',false);
		rep.addText(474,906, gridsGeneNotCerAñoGrado.getEdit(1,5).value,false);
		rep.addText(474,923, gridsGeneNotCerAñoGrado.getEdit(2,5).value,false);
		rep.addText(474,940, gridsGeneNotCerAñoGrado.getEdit(3,5).value,false);
		rep.addText(474,957, gridsGeneNotCerAñoGrado.getEdit(4,5).value,false);
		rep.addText(474,975, gridsGeneNotCerAñoGrado.getEdit(5,5).value,false);
		rep.addText(474,992, gridsGeneNotCerAñoGrado.getEdit(6,5).value,false);
		rep.addText(474,1007, gridsGeneNotCerAñoGrado.getEdit(7,5).value,false);
		rep.addText(474,1023, gridsGeneNotCerAñoGrado.getEdit(8,5).value,false);
		rep.addText(474,1040, gridsGeneNotCerAñoGrado.getEdit(9,5).value,false);
		rep.addText(474,1058, gridsGeneNotCerAñoGrado.getEdit(10,5).value,false);
		rep.addText(474,1075, gridsGeneNotCerAñoGrado.getEdit(11,5).value,false);
		rep.addText(474,1089, gridsGeneNotCerAñoGrado.getEdit(12,5).value,false);
		rep.addText(474,1106, gridsGeneNotCerAñoGrado.getEdit(13,5).value,false);
		rep.addText(474,1123, gridsGeneNotCerAñoGrado.getEdit(14,5).value,false);
		rep.addText(474,1141, gridsGeneNotCerAñoGrado.getEdit(15,5).value,false);
		rep.addText(513,324, 'Año',false);
		rep.addText(512,906, gridsGeneNotCerAñoGrado.getEdit(1,6).value,false);
		rep.addText(512,923, gridsGeneNotCerAñoGrado.getEdit(2,6).value,false);
		rep.addText(512,940, gridsGeneNotCerAñoGrado.getEdit(3,6).value,false);
		rep.addText(512,957, gridsGeneNotCerAñoGrado.getEdit(4,6).value,false);
		rep.addText(512,975, gridsGeneNotCerAñoGrado.getEdit(5,6).value,false);
		rep.addText(512,992, gridsGeneNotCerAñoGrado.getEdit(6,6).value,false);
		rep.addText(512,1007, gridsGeneNotCerAñoGrado.getEdit(7,6).value,false);
		rep.addText(512,1023, gridsGeneNotCerAñoGrado.getEdit(8,6).value,false);
		rep.addText(512,1040, gridsGeneNotCerAñoGrado.getEdit(9,6).value,false);
		rep.addText(512,1058, gridsGeneNotCerAñoGrado.getEdit(10,6).value,false);
		rep.addText(512,1075, gridsGeneNotCerAñoGrado.getEdit(11,6).value,false);
		rep.addText(512,1089, gridsGeneNotCerAñoGrado.getEdit(12,6).value,false);
		rep.addText(512,1106, gridsGeneNotCerAñoGrado.getEdit(13,6).value,false);
		rep.addText(512,1123, gridsGeneNotCerAñoGrado.getEdit(14,6).value,false);
		rep.addText(512,1141, gridsGeneNotCerAñoGrado.getEdit(15,6).value,false);
		rep.addText(570,324, 'Nº',false);
		rep.addText(572,906, gridsGeneNotCerAñoGrado.getEdit(1,7).value,false);
		rep.addText(572,923, gridsGeneNotCerAñoGrado.getEdit(2,7).value,false);
		rep.addText(572,940, gridsGeneNotCerAñoGrado.getEdit(3,7).value,false);
		rep.addText(572,957, gridsGeneNotCerAñoGrado.getEdit(4,7).value,false);
		rep.addText(572,975, gridsGeneNotCerAñoGrado.getEdit(5,7).value,false);
		rep.addText(572,992, gridsGeneNotCerAñoGrado.getEdit(6,7).value,false);
		rep.addText(572,1007, gridsGeneNotCerAñoGrado.getEdit(7,7).value,false);
		rep.addText(572,1023, gridsGeneNotCerAñoGrado.getEdit(8,7).value,false);
		rep.addText(572,1040, gridsGeneNotCerAñoGrado.getEdit(9,7).value,false);
		rep.addText(572,1058, gridsGeneNotCerAñoGrado.getEdit(10,7).value,false);
		rep.addText(572,1075, gridsGeneNotCerAñoGrado.getEdit(11,7).value,false);
		rep.addText(572,1089, gridsGeneNotCerAñoGrado.getEdit(12,7).value,false);
		rep.addText(572,1106, gridsGeneNotCerAñoGrado.getEdit(13,7).value,false);
		rep.addText(572,1123, gridsGeneNotCerAñoGrado.getEdit(14,7).value,false);
		rep.addText(572,1141, gridsGeneNotCerAñoGrado.getEdit(15,7).value,false);
		rep.addText(252,892, 'En Nº',false);
		rep.addText(339,892, 'En letras',false);
		rep.addText(442,892, 'T-E',false);
		rep.addText(469,892, 'Mes',false);
		rep.addText(513,892, 'Año',false);
		rep.addText(570,892, 'Nº',false);
		//PARTE-VI///////////////////////////////////////////////////////////////////////////////////////////////////
		rep.addRectanglePDF(158.1,63.1,205.77,66.8,rep.getRGBAObj(0,0,0,1),false);
		rep.addRectanglePDF(158.1,66.7,205.77,74.3,rep.getRGBAObj(0,0,0,1),false);
		rep.addRectanglePDF(158.1,74.3,205.77,82,rep.getRGBAObj(0,0,0,1),false);
		rep.addRectanglePDF(158.1,82,205.77,85.6,rep.getRGBAObj(0,0,0,1),false);
		rep.addRectanglePDF(158.1,85.6,205.77,89.6,rep.getRGBAObj(0,0,0,1),false);
		rep.addRectanglePDF(158.1,89.6,205.77,93.3,rep.getRGBAObj(0,0,0,1),false);
		rep.addRectanglePDF(158.1,93.3,205.77,101,rep.getRGBAObj(0,0,0,1),false);
		rep.addRectanglePDF(158.1,101,205.77,146.7,rep.getRGBAObj(0,0,0,1),false);
		rep.addRectanglePDF(158.1,146.7,205.77,158.1,rep.getRGBAObj(0,0,0,1),false);
		rep.addText(666,293, 'VI. Plantel',false);
		rep.addText(606,308, 'Apellido y Nombre del',false);
		rep.addText(606,323, 'Director(a):',false);
		rep.addText(606,350,editsGeneNotCerNomDirPlantel.getValue(),false);
		rep.addText(606,375, 'Número de C.I.:',false);
		rep.addText(670,390,editsGeneNotCerCedDirPlantel.getValue(),false);
		rep.addText(606,406, 'Firma:',false);
		rep.addText(666,552, 'SELLO DEL',false);
		rep.addText(673,572, 'PLANTEL',false);
		rep.addText(636,662, 'Para efectos de su validez',false);
		rep.addText(664,680, 'a nivel estadal.',false);
		//PARTE-VII///////////////////////////////////////////////////////////////////////////////////////////////////
		rep.addRectanglePDF(158.1,158.1,205.77,162,rep.getRGBAObj(0,0,0,1),false);
		rep.addRectanglePDF(158.1,162,205.77,169.6,rep.getRGBAObj(0,0,0,1),false);
		rep.addRectanglePDF(158.1,169.6,205.77,177.1,rep.getRGBAObj(0,0,0,1),false);
		rep.addRectanglePDF(158.1,177.1,205.77,181,rep.getRGBAObj(0,0,0,1),false);
		rep.addRectanglePDF(158.1,181,205.77,184.7,rep.getRGBAObj(0,0,0,1),false);
		rep.addRectanglePDF(158.1,184.7,205.77,188.5,rep.getRGBAObj(0,0,0,1),false);
		rep.addRectanglePDF(158.1,188.6,205.77,196.2,rep.getRGBAObj(0,0,0,1),false);
		rep.addRectanglePDF(158.1,196.2,205.77,245.8,rep.getRGBAObj(0,0,0,1),false);
		rep.addRectanglePDF(158.1,245.8,205.77,260.9,rep.getRGBAObj(0,0,0,1),false);
		rep.addText(606,706, 'VII. ZONA EDUCATIVA',false);
		rep.addText(606,725, 'Apellido y Nombre del',false);
		rep.addText(606,739, 'Director(a):',false);
		rep.addText(606,766,editsGeneNotCerNomFunZonEducativa.getValue(),false);
		rep.addText(606,791, 'Número de C.I.:',false);
		rep.addText(670,807,editsGeneNotCerCedFunZonEducativa.getValue(),false);
		rep.addText(606,824, 'Firma:',false);
		rep.addText(662,975, 'SELLO DE LA',false);
		rep.addText(650,992, 'ZONA EDUCATIVA',false);
		rep.addText(619,1096, 'Para efectos de su validez a nivel',false);
		rep.addText(611,1107, 'nacional e internacional y cuando se',false);
		rep.addText(609,1122, 'trate de estudios libres o equivalentes',false);		
		rep.addText(659,1134, 'sin escolaridad',false);	
		//PARTE-VIII////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.addText(50,1158, 'VIII. Programas Aprobados en Educación para el trabajo: GRADO / NOMBRE / HORAS ESTUDIANTE SEMANAL',false);
		rep.addSimpleTablePDF(13,265,rep.getRGBAObj(0,0,0,1),192.9,5,3.8,false);//linea E 
		rep.addLine(70,1167,70,1250,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(375,1167,375,1250,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(405,1167,405,1250,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(424,1167,424,1250,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(754,1167,754,1250,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addText(55,1174, gridsGeneNotCerGraAprEduParTrabajo.getEdit(1,1).value,false);
		rep.addText(74,1174, gridsGeneNotCerGraAprEduParTrabajo.getEdit(1,2).value,false);
		rep.addText(379,1174, gridsGeneNotCerGraAprEduParTrabajo.getEdit(1,3).value,false);
		rep.addText(55,1192, gridsGeneNotCerGraAprEduParTrabajo.getEdit(2,1).value,false);
		rep.addText(74,1192, gridsGeneNotCerGraAprEduParTrabajo.getEdit(2,2).value,false);
		rep.addText(379,1192, gridsGeneNotCerGraAprEduParTrabajo.getEdit(2,3).value,false);
		rep.addText(55,1210, gridsGeneNotCerGraAprEduParTrabajo.getEdit(3,1).value,false);
		rep.addText(74,1210, gridsGeneNotCerGraAprEduParTrabajo.getEdit(3,2).value,false);
		rep.addText(379,1210, gridsGeneNotCerGraAprEduParTrabajo.getEdit(3,3).value,false);
		rep.addText(55,1224, gridsGeneNotCerGraAprEduParTrabajo.getEdit(4,1).value,false);
		rep.addText(74,1224, gridsGeneNotCerGraAprEduParTrabajo.getEdit(4,2).value,false);
		rep.addText(379,1224, gridsGeneNotCerGraAprEduParTrabajo.getEdit(4,3).value,false);
		rep.addText(55,1241, gridsGeneNotCerGraAprEduParTrabajo.getEdit(5,1).value,false);
		rep.addText(74,1241, gridsGeneNotCerGraAprEduParTrabajo.getEdit(5,2).value,false);
		rep.addText(379,1241, gridsGeneNotCerGraAprEduParTrabajo.getEdit(5,3).value,false);
		rep.addText(410,1174, gridsGeneNotCerGraAprEduParTrabajo.getEdit(1,4).value,false);
		rep.addText(426,1174, gridsGeneNotCerGraAprEduParTrabajo.getEdit(1,5).value,false);
		rep.addText(759,1174, gridsGeneNotCerGraAprEduParTrabajo.getEdit(1,6).value,false);
		rep.addText(410,1192, gridsGeneNotCerGraAprEduParTrabajo.getEdit(2,4).value,false);
		rep.addText(426,1192, gridsGeneNotCerGraAprEduParTrabajo.getEdit(2,5).value,false);
		rep.addText(759,1192, gridsGeneNotCerGraAprEduParTrabajo.getEdit(2,6).value,false);
		rep.addText(410,1210, gridsGeneNotCerGraAprEduParTrabajo.getEdit(3,4).value,false);
		rep.addText(426,1210, gridsGeneNotCerGraAprEduParTrabajo.getEdit(3,5).value,false);
		rep.addText(759,1210, gridsGeneNotCerGraAprEduParTrabajo.getEdit(3,6).value,false);
		rep.addText(410,1224, gridsGeneNotCerGraAprEduParTrabajo.getEdit(4,4).value,false);
		rep.addText(426,1224, gridsGeneNotCerGraAprEduParTrabajo.getEdit(4,5).value,false);
		rep.addText(759,1224, gridsGeneNotCerGraAprEduParTrabajo.getEdit(4,6).value,false);
		rep.addText(410,1241, gridsGeneNotCerGraAprEduParTrabajo.getEdit(5,4).value,false);
		rep.addText(426,1241, gridsGeneNotCerGraAprEduParTrabajo.getEdit(5,5).value,false);
		rep.addText(759,1241, gridsGeneNotCerGraAprEduParTrabajo.getEdit(5,6).value,false);
		//PARTE-IX//////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.addText(50,1258, 'IX. Observaciones:',false);
		rep.addParagraph(52, 1270, memoGeneNotCerObservaciones.getText(),794,18,false);
		rep.addLine(50,1278,785,1278,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addLine(50,1295,785,1295,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addLine(50,16312,785,1312,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addLine(50,1329,785,1329,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addLine(50,1346,785,1346,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addLine(50,1363,785,1363,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		//PARTE-X//////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.addText(50,1375, 'X. Lugar y Fecha de Expedición:  '+editsGeneNotCerLugFecExpedicion.getValue(),false);
		rep.addLine(194,1379,785,1379,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addText(50,1390, 'Timbre Fiscal: ',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),7,'helvetica','normal');
		rep.addText(115,1390, 'Este Documento no tiene valídez si no se le colocan en la parte posterior timbres fiscales por Bs. 30% de la U.T.',false);
		//rep.addText(0,1450, 'AAAAAAAAAAAAAAAAAAAAAAAA**********MEDIDA PAGINA OFICIO****************AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',false);		
		//******************************************  N*** FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		rep.printPDF();
	},
}

