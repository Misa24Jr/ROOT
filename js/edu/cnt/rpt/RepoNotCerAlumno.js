var dialogsRepoNotCerAlumno = new Object();
var powerComboBoxCarnAluCarrera = new Object();
var editsCarnAluCedula = new Object();
var editsCarnAluNombre = new Object();
var editsCarnAluApellido = new Object();
var imgButtonsCarnAluReporte = new Object();
var imgButtonsCarnAluSalir = new Object();
var mw_RepoNotCerAlumno = new Object();// minWindow
       
var RepoNotCerAlumno = {
    windowName : 'RepoNotCerAlumno',
    isCreate: false,
	idPeriodo: 0,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoNotCerAlumno.isByClean())
			this.limpiar();			
		dialogsRepoNotCerAlumno.show();
	},
	
    hide: function(){
        dialogsRepoNotCerAlumno.hide();
    },
    createMWs: function(){
        mwRepoNotCerAlumno = desktop.addMinWindow('N.C.Alumno', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoNotCerAlumno.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsRepoNotCerAlumno_Init : function(){
        dialogsRepoNotCerAlumno.setMinimizeXY(0,0);
        dialogsRepoNotCerAlumno.setCenterScreen();
        dialogsRepoNotCerAlumno.addSpace(0,0,20);
        dialogsRepoNotCerAlumno.addLn(1,1,1);
		dialogsRepoNotCerAlumno.setHeightCell(1,1,13);
		dialogsRepoNotCerAlumno.addObjToDialog(editsCarnAluCedula,2,1,24);
		editsCarnAluCedula.setSizeEdit(149);
		dialogsRepoNotCerAlumno.addObjToDialog(editsCarnAluNombre,2,1,24);
		editsCarnAluNombre.setSizeEdit(149);
		dialogsRepoNotCerAlumno.addObjToDialog(editsCarnAluApellido,2,1,24);
		editsCarnAluApellido.setSizeEdit(149);
		dialogsRepoNotCerAlumno.adjAllMarginObj(2,1,15);
		dialogsRepoNotCerAlumno.addObjToDialog(powerComboBoxCarnAluCarrera,3,1,24);
		powerComboBoxCarnAluCarrera.setWidthCombo(364);
        dialogsRepoNotCerAlumno.addLn(5,1,1);
		dialogsRepoNotCerAlumno.setHeightCell(5,1,10);
		dialogsRepoNotCerAlumno.addObjToDialog(imgButtonsCarnAluReporte,6,1);
    	imgButtonsCarnAluReporte.setDimension(90,22);
        dialogsRepoNotCerAlumno.addObjToDialog(imgButtonsCarnAluSalir,6,1);
    	imgButtonsCarnAluSalir.setDimension(90,22);
        dialogsRepoNotCerAlumno.adjAllMarginObj(6,1,30);
        dialogsRepoNotCerAlumno.leftMarginObj(6,1,0,230); 
    },

    create : function(){
    	dialogsRepoNotCerAlumno = dialogs.create('dialogsRepoNotCerAlumno',0,0,716,105,'FICHA DEL ALUMNO');
    	dialogsRepoNotCerAlumno.setAdjY(80);
    	editsCarnAluCedula = edits.create('editsCarnAluCedula','editsCarnAluCedula','C.i. (*):',1,55,'normal');
    	editsCarnAluCedula.setValidInteger();
      	editsCarnAluCedula.setFieldFind(true);
      	editsCarnAluNombre = edits.create('editsCarnAluNombre','editsCarnAluNombre','Nombre (*):',1,71,'normal');
      	editsCarnAluNombre.setValidEmpty();
      	editsCarnAluNombre.setFieldFind(true);
      	editsCarnAluApellido = edits.create('editsCarnAluApellido','editsCarnAluApellido','Apellido (*):',1,71,'normal');
      	editsCarnAluApellido.setValidEmpty();
      	editsCarnAluApellido.setFieldFind(true);
      	powerComboBoxCarnAluCarrera = powerComboBox.create('powerComboBoxCarnAluCarrera','powerComboBoxCarnAluCarrera','Carrera:',1,55);
    	powerComboBoxCarnAluCarrera.enableReadOnlyEditor();
    	powerComboBoxCarnAluCarrera.addEmptyOption();
    	powerComboBoxCarnAluCarrera.setValidEmpty();
      	imgButtonsCarnAluReporte = imgButtons.create('imgButtonsCarnAluReporte','Reporte','print.png');
      	imgButtonsCarnAluSalir = imgButtons.create('imgButtonsCarnAluSalir','Salir','salir.png');
      	this.isCreate=true;
	},

	init : function(){
		this.create();
		this.setEvents(); 
		this.dialogsRepoNotCerAlumno_Init();
		this.createMWs();
	},
	
	limpiarFind : function(ix) {
		editsCarnAluCedula.hideId = -1;
		
  		switch (ix) {
		case 1: 
			editsCarnAluNombre.setValue("");
			editsCarnAluApellido.setValue("");  		
			break;
		case 2: 
			editsCarnAluCedula.setValue("");
			editsCarnAluApellido.setValue("");  		
			break;
		default:
			editsCarnAluCedula.setValue("");
		    editsCarnAluNombre.setValue("");
			break;
		} 
  		Tool.rstPwrCmb(powerComboBoxCarnAluCarrera);
  	},

   	loadDataCarrInscrip : function() {
  		Tool.loadPowerComboData(dialogsRepoNotCerAlumno, powerComboBoxCarnAluCarrera, 0, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			powerComboBoxCarnAluCarrera.setSelectedIndex(1); 
  		}
   	},

   	buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");

    	if (editsCarnAluCedula.getValue() != '' && editsCarnAluNombre.getValue() != '' && editsCarnAluApellido.getValue() != '') {
			if (powerComboBoxCarnAluCarrera.setModeReturnGetText(0).getText() == "" || powerComboBoxCarnAluCarrera.setModeReturnGetText(0).getText() == "-1") {
		  		Tool.rstPwrCmb(powerComboBoxCarnAluCarrera);
		  		rlx.add('reg', editsCarnAluCedula);
	    		Tool.cnnSrv('MantObject', 'getCarrera', this.windowName + '.loadDataCarrInscrip()', rlx);
			}
		}
		else if (editsCarnAluCedula.getValue() != '' || editsCarnAluNombre.getValue() != '' || editsCarnAluApellido.getValue() != '') {
	  		Tool.rstPwrCmb(powerComboBoxCarnAluCarrera);
        	ResuBusqueda.setObjectExtFnc(editsCarnAluCedula, editsCarnAluNombre, editsCarnAluApellido, 'RepoNotCerAlumno.buscar()');
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsCarnAluCedula, editsCarnAluCedula, editsCarnAluNombre, editsCarnAluNombre, editsCarnAluApellido, editsCarnAluApellido);
		}
		else {
			Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},
	
   	loadDataCarrInscrip : function() {
  		Tool.loadPowerComboData(dialogsRepoNotCerAlumno, powerComboBoxCarnAluCarrera, 0, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			powerComboBoxCarnAluCarrera.setSelectedIndex(1); 
  		}
   	},

   	loadDataPers : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		editsCarnAluCedula.readOnly(true);
  	    editsCarnAluNombre.readOnly(true);
  	    editsCarnAluApellido.readOnly(true);
  	    editsCarnAluCedula.onEnter("");
  		editsCarnAluCedula.onChange("");
  		editsCarnAluNombre.onEnter("");
  		editsCarnAluNombre.onChange("");
  		editsCarnAluApellido.onEnter("");
  		editsCarnAluApellido.onChange("");
    	if (json('getPermiso').data[0] != 'ACTIVO') {
  			editsCarnAluCedula.setValue(json('getDatoPersona').data[0]);
  	  		editsCarnAluNombre.setValue(json('getDatoPersona').data[1]);
  	  		editsCarnAluApellido.setValue(json('getDatoPersona').data[2]);
  	  		editsCarnAluCedula.hideId= json('getDatoPersona').data[3];
  	  		rlx.add('reg', editsCarnAluCedula);
  			Tool.cnnSrv('MantObject', 'getCarrera', this.windowName + '.loadDataCarrInscrip()', rlx);
  		}
    	else {
  	    	editsCarnAluCedula.readOnly(false);
  	    	editsCarnAluNombre.readOnly(false);
  	    	editsCarnAluApellido.readOnly(false);
  		  	editsCarnAluCedula.onEnter(this.windowName + ".buscar()");
  		  	editsCarnAluCedula.onChange(this.windowName + ".limpiarFind(1)");
  		  	editsCarnAluNombre.onEnter(this.windowName + ".buscar()");
  		  	editsCarnAluNombre.onChange(this.windowName + ".limpiarFind(2)");
  		  	editsCarnAluApellido.onEnter(this.windowName + ".buscar()");
  		  	editsCarnAluApellido.onChange(this.windowName + ".limpiarFind(3)");
    	}
        dialogsRepoNotCerAlumno.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    limpiar : function() {
    	editsCarnAluCedula.hideId = -1;
  		editsCarnAluCedula.setValue(""); 
  		editsCarnAluNombre.setValue(""); 
  		editsCarnAluApellido.setValue(""); 
  		Tool.rstPwrCmb(powerComboBoxCarnAluCarrera);
  		dialogsRepoNotCerAlumno.setMsg("");
		Tool.cnnSrv('InscripObject', 'getCargarPersona', this.windowName + '.loadDataPers()');
	},

	setEvents: function(){
		editsCarnAluCedula.onEnter(this.windowName + ".buscar()");
  		editsCarnAluCedula.onChange(this.windowName + ".limpiarFind(1)");
  		editsCarnAluNombre.onEnter(this.windowName + ".buscar()");
  		editsCarnAluNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsCarnAluApellido.onEnter(this.windowName + ".buscar()");
  		editsCarnAluApellido.onChange(this.windowName + ".limpiarFind(3)");
    	imgButtonsCarnAluReporte.onClick(this.windowName + ".reporte()");
    	//imgButtonsCarnAluReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsCarnAluSalir.onClick('dialogsRepoNotCerAlumno.close()');
    },
	
	reporte : function(){    
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait',798,1500);
		rep.setPDFFormat('custom','mm', [343, 210]);
		rep.setNoRepeatHead();
		rep.setPositionIcon(770,0);
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.addImage(50,50,384,89,imgEduca.logo_ministerio,true);
		//PARTE-I//////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),13,'helvetica','normal');
		rep.addText(422, 40, 'CERTIFICACIÓN DE CALIFICACIONES',false);
		rep.addLine(422,50,746,50,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addText(436, 68, 'Código del Formato:RR-DEa-03-03',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),8,'helvetica','normal');
		rep.addText(404, 80, 'I. Plan de Estudio:',false);
		rep.addLine(486,84,786,84,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addText(408, 93, 'Código del Plan de Estudio:',false);
		rep.addLine(550,98,786,98,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		//PARTE-II//////////////////////////////////////////////////////////////////////////////////////
        rep.addText(50, 106, 'II. Datos del Plantel o Zona Educativa que emite la Certificación:',false);
        rep.addText(410, 106, 'Mención:',false);
        rep.addLine(49,111,786,111,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(55, 119, 'Cód.Planel:',false);
        rep.addLine(106,124,200,124,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(204, 119, 'Nombre:',false);
        rep.addLine(242,124,702,124,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(704, 119, 'Dtto.esc.:',false);
        rep.addLine(746,124,786,124,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(55, 135, 'Dirección:',false);
        rep.addLine(102,137,618,137,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(620, 135, 'Teléfono:',false);
        rep.addLine(664,137,786,137,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(55, 149, 'Municipio:',false);
        rep.addLine(106,152,340,152,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(342, 149, 'Ent. Federal:',false);
        rep.addLine(406,152,554,152,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(555, 149, 'Zona Educativa:',false);
        rep.addLine(635,152,786,152,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        //PARTE-III////////////////////////////////////////////////////////////////////////////////////////
        rep.addText(50, 166, 'III. Datos de Identificación del(a) Estudiante',false);
        rep.addText(55, 179, 'Cédula de Identidad:',false);
        rep.addLine(146,182,552,182,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(556, 179, 'Fecha de Nacimiento:',false);
        rep.addLine(653,182,786,182,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(55, 192, 'Apellidos:',false);
		rep.addLine(97,196,407,196,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addText(410, 192, 'Nombre:',false);
		rep.addLine(447,196,786,196,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(55, 205, 'Lugar de Nacimiento:',false);
        rep.addLine(149,209,478,209,rep.getRGBAObj(0,0,0,0),1,false);//linea -
        rep.addText(479, 205, 'Ent.Federal o País:',false);
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
		rep.addText(69,240, 'Nombre del Plantel',false);
		rep.addText(252,240, 'Localidad',false);
		rep.addText(380,240, 'E.F.',false);
		rep.addText(54,254, '1',false);
		rep.addText(54,273, '2',false);
		rep.addText(403,222, 'Nº',false);
		rep.addText(420,222, 'Nombre del Plantel',false);
		rep.addText(620,222, 'Localidad',false);
		rep.addText(767,222, 'E.F.',false);
		rep.addText(406,240, '3',false);
		rep.addText(406,254, '4',false);
		rep.addText(406,273, '5',false);
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
		rep.addText(252,324, 'En Nº',false);
		rep.addText(339,324, 'En letras',false);
		rep.addText(442,324, 'T-E',false);
		rep.addText(469,324, 'Mes',false);
		rep.addText(513,324, 'Año',false);
		rep.addText(570,324, 'Nº',false);
		rep.addSimpleTablePDF(13,131.5,rep.getRGBAObj(0,0,0,1),101.6,17,3.8,false);//linea E 
		rep.addLine(250,580,250,862,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(280,595,280,861,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addSimpleTablePDF(114.5,131.5,rep.getRGBAObj(0,0,0,1),43,1,7.6,false);//linea T 
		rep.addLine(463,595,548,595,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addLine(460,485,460,862,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(497,595,497,861,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addLine(550,485,550,862,rep.getRGBAObj(0,0,0,0),1,false);//linea I
		rep.addSimpleTablePDF(114.5,139.1,rep.getRGBAObj(0,0,0,1),43,15,3.8,false);//linea E 
		rep.addText(55,591, 'Año o Grado:',false);
		rep.addText(321,591, 'Calificación',false);
		rep.addText(493,591, 'Fecha',false);
		rep.addText(562,591, 'Plantel',false);
		rep.addText(130,607, 'Asignaturas',false);
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
		rep.addText(55,874, 'Año o Grado:',false);
		rep.addText(321,874, 'Calificación',false);
		rep.addText(493,875, 'Fecha',false);
		rep.addText(562,875, 'Plantel',false);
		rep.addText(130,892, 'Asignaturas',false);
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
		rep.addText(606,375, 'Número de C.I.:',false);
		rep.addText(606,406, 'Firma:',false);
		rep.addText(666,552, 'SELLO DEL',false);
		rep.addText(672,572, 'PLANTEL',false);
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
		rep.addText(606,791, 'Número de C.I.:',false);
		rep.addText(606,824, 'Firma:',false);
		rep.addText(662,975, 'SELLO DE LA',false);
		rep.addText(650,995, 'ZONA EDUCATIVA',false);
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
		//PARTE-IX//////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.addText(50,1260, 'IX. Observaciones:',false);
		rep.addLine(135,1268,785,1268,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addLine(50,1285,785,1285,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addLine(50,16302,785,1302,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addLine(50,1319,785,1319,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addLine(50,1336,785,1336,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addLine(50,1353,785,1353,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		//PARTE-X//////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.addText(50,1365, 'X. Lugar y Fecha de Expedición:',false);
		rep.addLine(194,1369,785,1369,rep.getRGBAObj(0,0,0,0),1,false);//linea -
		rep.addText(50,1384, 'Timbre Fiscal: ',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0),7,'helvetica','normal');
		rep.addText(115,1386, 'Este Documento no tiene valídez si no se le colocan en la parte posterior timbres fiscales por Bs. 30% de la U.T.',false);
		//rep.addText(0,1450, 'AAAAAAAAAAAAAAAAAAAAAAAA**********MEDIDA PAGINA OFICIO****************AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',false);		
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		rep.printPDF();
	},
	
	coreUpdate: function(methodName){
        var rlx = xmlStructs.createRecordList("rlx");
		if (powerComboBoxCarnAluCarrera.valid(dialogsRepoNotCerAlumno))
				if (editsCarnAluCedula.valid(dialogsRepoNotCerAlumno))
					if (editsCarnAluNombre.valid(dialogsRepoNotCerAlumno))
						if (editsCarnAluApellido.valid(dialogsRepoNotCerAlumno)) {
							rlx.addInt('reg', editsCarnAluCedula.hideId);
							rlx.add('reg', powerComboBoxCarnAluCarrera);
							rlx.addInt('reg', editsCarnAluCedula.hideId);
							rlx.add('reg', powerComboBoxCarnAluCarrera);
							//Tool.cnnSrv('ReportObject', 'getFicha', this.windowName + '.reporte()', rlx);
						}
    }
};
