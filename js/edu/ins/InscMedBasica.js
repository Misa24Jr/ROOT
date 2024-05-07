var dialogsInscMedBasica = new Object();
var editsInscMedBasCi = new Object();
var editsInscMedBasNombre = new Object();
var editsInscMedBasApellido = new Object();
var pcbInscMedBasCarrera = new Object();
var editsInscMedBasPosicion = new Object();
var editsInscMedBasSeccion = new Object();
var imgButtonsInscMedBasInscribir = new Object();
var imgButtonsInscMedBasImpConstancia = new Object();
var imgButtonsInscMedBasImpHorario = new Object();
var imgButtonsInscMedBasicaSalir = new Object();
var modFchAlu = new ModeloFichaAlumno();
var mwInscMedBasica = new Object();// minWindow

var InscMedBasica = {
	windowName : 'InscMedBasica',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate)	{
			this.init();
			this.isCreate = true;
		}
		if (dialogsInscMedBasica.isByClean())
 			this.limpiar();		
		dialogsInscMedBasica.show();
	},
	
	hide : function() {
		dialogsInscMedBasica.hide();
	},
	
	createMWs : function() {
        mwInscMedBasica = desktop.addMinWindow('Inscribir', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsInscMedBasica.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsInscMedBasica_Init : function() {
        dialogsInscMedBasica.setCenterScreen();
        dialogsInscMedBasica.addSpace(0,0,20);
		
		
		dialogsInscMedBasica.addLn(1,1,1);
		dialogsInscMedBasica.setHeightCell(1,1,10);		
		dialogsInscMedBasica.addObject(editsInscMedBasCi,25,40);		
		editsInscMedBasCi.setSizeEdit(200);
		dialogsInscMedBasica.addObject(editsInscMedBasNombre,25,75);		
		editsInscMedBasNombre.setSizeEdit(200);
		dialogsInscMedBasica.addObject(editsInscMedBasApellido,25,110);		
		editsInscMedBasApellido.setSizeEdit(200);		
		dialogsInscMedBasica.addObject(pcbInscMedBasCarrera,25,145);		
		pcbInscMedBasCarrera.setWidthCombo(190);
		dialogsInscMedBasica.addObject(editsInscMedBasPosicion,25,180);		
		editsInscMedBasPosicion.setSizeEdit(200);		
		dialogsInscMedBasica.addObject(editsInscMedBasSeccion,25,215);		
		editsInscMedBasSeccion.setSizeEdit(200);		
		
		
		dialogsInscMedBasica.addObject(imgButtonsInscMedBasInscribir,25,250);
        dialogsInscMedBasica.addObject(imgButtonsInscMedBasicaSalir,180,250);
		dialogsInscMedBasica.addObject(imgButtonsInscMedBasImpConstancia,25,285);
        dialogsInscMedBasica.addObject(imgButtonsInscMedBasImpHorario,180,285);
	},	
    
	create : function() {		
	  dialogsInscMedBasica = dialogs.create('dialogsInscMedBasica',0,0,333,300,'INSCRIBIR');
	  dialogsInscMedBasica.setAdjY(25);
	  editsInscMedBasCi = edits.create('editsInscMedBasCi','editsInscMedBasCi','C.i. (*):',1,80);
      editsInscMedBasCi.setValidInteger();
      editsInscMedBasCi.setFieldFind(true);
      editsInscMedBasCi.setSizeEdit(149);
      editsInscMedBasNombre = edits.create('editsInscMedBasNombre','editsInscMedBasNombre','Nombre (*):',1,80);
      editsInscMedBasNombre.setValidEmpty();
      editsInscMedBasNombre.setFieldFind(true);
      editsInscMedBasNombre.setSizeEdit(149); 
      editsInscMedBasNombre.setMaxLength(50); 
      editsInscMedBasApellido = edits.create('editsInscMedBasApellido','editsInscMedBasApellido','Apellido (*):',1,80);
      editsInscMedBasApellido.setValidEmpty();
      editsInscMedBasApellido.setFieldFind(true);
      editsInscMedBasApellido.setSizeEdit(149);
      editsInscMedBasApellido.setMaxLength(50); 
	  pcbInscMedBasCarrera = powerComboBox.create('pcbInscMedBasCarrera','pcbInscMedBasCarrera','Carrera (*):',1,76);
      pcbInscMedBasCarrera.setValidEmpty();
      pcbInscMedBasCarrera.addEmptyOption();
      pcbInscMedBasCarrera.enableReadOnlyEditor();
      editsInscMedBasPosicion = edits.create('editsInscMedBasPosicion','editsInscMedBasPosicion','Posición:',1,80);
      editsInscMedBasPosicion.setValidEmpty();
      editsInscMedBasPosicion.readOnly(true);
      editsInscMedBasPosicion.setSizeEdit(149);
      editsInscMedBasSeccion = edits.create('editsInscMedBasSeccion','editsInscMedBasSeccion','Sección:',1,80);
      editsInscMedBasSeccion.setValidEmpty();
      editsInscMedBasSeccion.readOnly(true);
      editsInscMedBasSeccion.setSizeEdit(149);
      imgButtonsInscMedBasInscribir = imgButtons.create('imgButtonsInscMedBasInscribir','Inscribir','ok.png');
      imgButtonsInscMedBasImpConstancia = imgButtons.create('imgButtonsInscMedBasImpConstancia','Ver Constancia','print.png');
      imgButtonsInscMedBasImpHorario = imgButtons.create('imgButtonsInscMedBasImpHorario','Ver Horario','print.png');
      imgButtonsInscMedBasicaSalir = imgButtons.create('imgButtonsInscMedBasicaSalir','Salir','salir.png');
      imgButtonsInscMedBasImpConstancia.setDisable();
      imgButtonsInscMedBasImpHorario.setDisable();
      imgButtonsInscMedBasInscribir.setDimension(130,22);
      imgButtonsInscMedBasImpConstancia.setDimension(130,22);     
      imgButtonsInscMedBasImpHorario.setDimension(130,22);
      imgButtonsInscMedBasicaSalir.setDimension(130,22);
	},

	init : function() {
	    this.create();
	    this.setEvents();
	    this.dialogsInscMedBasica_Init();
		this.createMWs();
	},
  
	unlockButton: function(lck) {
		if (lck) {
    		imgButtonsInscMedBasInscribir.setDisable();
    		imgButtonsInscMedBasImpConstancia.setEnable();
    		imgButtonsInscMedBasImpHorario.setEnable();
    		if (pcbInscMedBasCarrera.setModeReturnGetText(9).getText() == '') {
	    		if (json('docInscripcion').data[0][0] == 'ON') {
	    			Alert.show('Pulse ACEPTAR para continuar con el registro de inscripción.', 'INSCRIPCIÓN', Alert.TYPE_INFO, '');
					exeShow("js/edu/ins/","Contacto");
				}
	    		else if (json('docInscripcion').data[0][0] != 'OFF') {
	    			Alert.show('Pulse ACEPTAR para descargar la información.', 'INSCRIPCIÓN', Alert.TYPE_INFO, 'new OpenWin().getFile("help/'+json('docInscripcion').data[0][0]+'.pdf")');
				}
				else {
	    			Alert.show('LA INSCRIPCIÓN HA SIDO REGISTRADA', 'INSCRIPCIÓN', Alert.TYPE_INFO, '');
				}
			}
		}
		else {
    		imgButtonsInscMedBasInscribir.setEnable();
    		imgButtonsInscMedBasImpConstancia.setDisable();
    		imgButtonsInscMedBasImpHorario.setDisable();
		}
	},
	
	validaInscripcion: function() {
    	if (pcbInscMedBasCarrera.setModeReturnGetText(9).getText().length > 0) {
    		this.unlockButton(true);
    		dialogsInscMedBasica.setMsg('ALUMNO INSCRITO EL DIA: ' + pcbInscMedBasCarrera.setModeReturnGetText(9).getText());
    	}
    	else {
  			editsInscMedBasPosicion.setValue(pcbInscMedBasCarrera.setModeReturnGetText(2).getText());
			editsInscMedBasSeccion.setValue(pcbInscMedBasCarrera.setModeReturnGetText(3).getText());
    	}
	},
	
    setEvents : function() {
		pcbInscMedBasCarrera.onChange(this.windowName+".validaInscripcion()");
	    imgButtonsInscMedBasInscribir.onClick(this.windowName+".coreUpdate()");
	  	imgButtonsInscMedBasImpConstancia.onClick(this.windowName+".getConstancia()");
		imgButtonsInscMedBasImpHorario.onClick(this.windowName+".getHorario()");
	  	imgButtonsInscMedBasicaSalir.onClick("dialogsInscMedBasica.close()");	 
    },
	
  	limpiarFind : function(ix) {
  		editsInscMedBasCi.hideId = -1;
  		Tool.rstPwrCmb(pcbInscMedBasCarrera);		
  		editsInscMedBasPosicion.clear();
  		editsInscMedBasSeccion.clear();
  		dialogsInscMedBasica.setMsg("");
		this.unlockButton(false);
  		
  		switch (ix) {
		case 1: 
	  		editsInscMedBasNombre.setValue("");
	  		editsInscMedBasApellido.setValue("");  		
			break;
		case 2: 
	  		editsInscMedBasCi.setValue("");
	  		editsInscMedBasApellido.setValue("");  		
			break;
		default:
	  		editsInscMedBasCi.setValue("");
  			editsInscMedBasNombre.setValue("");
			break;
		}
  		Tool.rstPwrCmb(pcbInscMedBasCarrera);		
  	},

  	limpiar : function() {
  		editsInscMedBasCi.hideId = -1;
		editsInscMedBasCi.setValue("");
  		editsInscMedBasNombre.setValue("");
  		editsInscMedBasApellido.setValue("");  
  		Tool.rstPwrCmb(pcbInscMedBasCarrera);		
  		editsInscMedBasPosicion.clear();
  		editsInscMedBasSeccion.clear();
		this.unlockButton(false);
  		dialogsInscMedBasica.setMsg("");
		Tool.cnnSrv('InscripObject', 'getCargarPersona', this.windowName + '.loadDataPers()');
  	},
  	
   	loadDataCarrInscrip : function() {
  		Tool.loadPowerComboData(dialogsInscMedBasica, pcbInscMedBasCarrera, -1, 1, json('getCarreraPosSec'));
  		if (json('getCarreraPosSec').data[0].length == 1) {
  			pcbInscMedBasCarrera.setSelectedIndex(1);
  			editsInscMedBasPosicion.setValue(json('getCarreraPosSec').data[2]);
  			editsInscMedBasSeccion.setValue(json('getCarreraPosSec').data[3]);
  			this.validaInscripcion();
  		}
   	},
   	
    loadDataPers : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		editsInscMedBasCi.readOnly(true);
  	    editsInscMedBasNombre.readOnly(true);
  	    editsInscMedBasApellido.readOnly(true);
  	    editsInscMedBasCi.onEnter("");
  		editsInscMedBasCi.onChange("");
  		editsInscMedBasNombre.onEnter("");
  		editsInscMedBasNombre.onChange("");
  		editsInscMedBasApellido.onEnter("");
  		editsInscMedBasApellido.onChange("");
    	if (json('getPermiso').data[0] != 'ACTIVO') {
  			editsInscMedBasCi.setValue(json('getDatoPersona').data[0]);
  	  		editsInscMedBasNombre.setValue(json('getDatoPersona').data[1]);
  	  		editsInscMedBasApellido.setValue(json('getDatoPersona').data[2]);
  	  		editsInscMedBasCi.hideId = json('getDatoPersona').data[3];
  	  		rlx.add('reg', editsInscMedBasCi);
  			Tool.cnnSrv('InscripObject', 'getCarreraPosSec', this.windowName + '.loadDataCarrInscrip()', rlx);
  		}
    	else {
  	    	editsInscMedBasCi.readOnly(false);
  	    	editsInscMedBasNombre.readOnly(false);
  	    	editsInscMedBasApellido.readOnly(false);
  		  	editsInscMedBasCi.onEnter(this.windowName + ".buscar()");
  		  	editsInscMedBasCi.onChange(this.windowName + ".limpiarFind(1)");
  		  	editsInscMedBasCi.onClick(this.windowName + ".limpiarFind(1)");
  		  	editsInscMedBasNombre.onEnter(this.windowName + ".buscar()");
  		  	editsInscMedBasNombre.onChange(this.windowName + ".limpiarFind(2)");
  		  	editsInscMedBasNombre.onClick(this.windowName + ".limpiarFind(2)");
  		  	editsInscMedBasApellido.onEnter(this.windowName + ".buscar()");
  		  	editsInscMedBasApellido.onChange(this.windowName + ".limpiarFind(3)");
  		  	editsInscMedBasApellido.onClick(this.windowName + ".limpiarFind(3)");
    	}
        dialogsInscMedBasica.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },
    
    buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");

    	if (editsInscMedBasCi.getValue() != '' && editsInscMedBasNombre.getValue() != '' && editsInscMedBasApellido.getValue() != '') {
			if (pcbInscMedBasCarrera.setModeReturnGetText(0).getText() == "" || pcbInscMedBasCarrera.setModeReturnGetText(0).getText() == "-1") {
		  		editsInscMedBasPosicion.clear();
		  		editsInscMedBasSeccion.clear();
		  		rlx.add('reg', editsInscMedBasCi);
	    		Tool.cnnSrv('InscripObject', 'getCarreraPosSec', this.windowName + '.loadDataCarrInscrip()', rlx);
			}
			else {
				this.validaInscripcion()
			}
		}
		else if (editsInscMedBasCi.getValue() != '' || editsInscMedBasNombre.getValue() != '' || editsInscMedBasApellido.getValue() != '') {
	  		editsInscMedBasPosicion.clear();
	  		editsInscMedBasSeccion.clear();
        	ResuBusqueda.setObjectExtFnc(editsInscMedBasCi, editsInscMedBasNombre, editsInscMedBasApellido, 'InscMedBasica.buscar()');
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsInscMedBasCi, editsInscMedBasCi, editsInscMedBasNombre, editsInscMedBasNombre, editsInscMedBasApellido, editsInscMedBasApellido);
		}
		else {
			Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
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

		rlx.addInt('reg', editsInscMedBasCi.hideId);
		rlx.add('reg', pcbInscMedBasCarrera.setModeReturnGetText(0));
		rlx.addInt('reg', editsInscMedBasCi.hideId);
		rlx.add('reg', pcbInscMedBasCarrera.setModeReturnGetText(0));
		Tool.cnnSrv('ReportObject', 'getFicha', this.windowName + '.reporteFicha()', rlx);
    },

	reporteHorario : function(ced, nom, ape, per, car) {
		var ji = json("getHorarioAlumno");
		var ji2 = json("getHorarioXTipo");	
		var h = new Horario({});
		var arrObject = [ { data: per, title: "PERIODO: ", x: 2, y: 2 }, 
						  { data: car, title: "CARRERA: ", x: 220, y: 2 },
						  { data: ced, title: "CEDULA: ", x: 2, y: 20 },
						  { data: (nom + ' ' + ape), title: "NOMBRE: ", x: 226, y: 20 }
		];
		h.setDataHeadWithObject(arrObject);	
		h.setJson(ji,ji2);
		h.show();
	},
	
	getHorario: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
		rlx.addInt('reg', editsInscMedBasCi.hideId);
		rlx.add('reg', pcbInscMedBasCarrera.setModeReturnGetText(4));
		rlx.add('reg', pcbInscMedBasCarrera.setModeReturnGetText(0));
		Tool.cnnSrv('ReportObject', 'getHorarioAlumno', this.windowName + '.reporteHorario(editsInscMedBasCi.getText(), editsInscMedBasNombre.getText(), editsInscMedBasApellido.getText(), pcbInscMedBasCarrera.setModeReturnGetText(7).getText(), pcbInscMedBasCarrera.getOption())', rlx);
    },

    reporteConstancia: function() {
		var j = json('getConstanciasPorAlumno');
		var fecha 			= j.data[15][0];
		var arrDate 		= fecha.split('-');
	  	var nivelest    	= j.data[22][0];
	  	var direcp      	= j.data[21][0];
	  	var telfp       	= j.data[20][0];
		var email       	= j.data[19][0];
		var nuCeDirector	= j.data[16][0];
		var director 		= j.data[14][0];
		var alumnoA			= j.data[2][0];
		var alumnoN			= j.data[1][0]; 
		var ciAlumno		= j.data[0][0];
		var ciudadAlu		= j.data[5][0];
		var estadoAlu		= j.data[6][0];
		var fe_nac			= j.data[3][0];
		var periodo			= j.data[9][0];
		var grado			= j.data[39][0];
		var grd_Ano     	= j.data[27][0];
		var ciudadInst  	= j.data[13][0];
		var anio				= arrDate[0];
		var mes				= arrDate[1];
		var dia				= arrDate[2];	
		var nvlacad			= j.data[28][0];
		var pasaporte		= j.data[31][0];
		var subSys   		= j.data[28][0];//1:inicia - 2:primaria - 3:bachillerato
		var book = new Book({x:10, y:20,title:'INSCRIPCIÓN', bodyWidth:672, bodyHeight:160});
		book.addToBody().hide();
		var sheets = [];
		
		function mapping(n){
			fecha 			= j.data[15][n];
		  	arrDate 			= fecha.split('-');
		  	litAlumno  		= j.data[26][n];
		  	cedDocente  	= j.data[25][n];
		  	nomDocente  	= j.data[24][n];
	    	nivelest    	= j.data[22][n];
	    	direcp      	= j.data[21][n];
	    	telfp       	= j.data[20][n];
	    	email       	= j.data[19][n];
		  	nuCeDirector	= j.data[16][n];
		  	director 		= j.data[14][n];
		  	instituto 		= j.data[10][n];
	    	alumnoA			= j.data[2][n];
		  	alumnoN			= j.data[1][n]; 
	    	ciAlumno			= j.data[0][n];
		  	ciudadAlu		= j.data[5][n];
		  	estadoAlu		= j.data[6][n];
		  	fe_nac			= j.data[3][n];
		  	periodo			= j.data[9][n];
		  	grado				= j.data[39][n];
		  	grd_Ano     	= j.data[27][n];
		  	ciudadInst  	= j.data[13][n];
		  	nvlacad			= j.data[28][n];
		  	subSys   		= j.data[28][n];//1:inicia - 2:primaria - 3:bachillerato
		  	anio				= arrDate[0];
		  	mes				= arrDate[1];
		  	dia				= arrDate[2];
		  	pasaporte		= j.data[31][n];
		}
		function cabecera(n){
		  sheets[n].addImage({x:60, y:10, w:672, h:100, path:imgEduca.banner});			
		  sheets[n].addText({text:'CONSTANCIA DE INSCRIPCIÓN', textAlign:'center', fontSize:20, fontWeight:'bold', y:30, x:60, width:672});
	  }
			
	  function contenido(n){
	  		var v ='';
			
	  		v='Cédula:'
		  	sheets[n].addText({
		  	text:'Quien suscribe, Director (a) '+director+', portador (a) de la cédula de identidad Nro. '+
			 	nuCeDirector+', hace constar que el (la) estudiante:',
				y:60,
				textAlign:'justify',
				fontSize:17,
				x:60,
				width:672,
				height:17,
				lineHeight:17
		  });
		  sheets[n].addText({
		  		text:alumnoN+' '+alumnoA,
		  		textAlign:'center',
		  		fontSize:17,
		  		y:87,
		  		x:60,
		  		width : 672,
		  		height:17,
				lineHeight:17
		  });
		  if(nvlacad === '1')
          	sheets[n].addText({text:'Titular de la cédula de identidad número: '+ciAlumno+', nacido (a) en la ciudad de '+ciudadAlu+' del Estado '+estadoAlu+' el '+
          	fe_nac+ ', se encuentra inscrito en el periodo escolar '+periodo+', en la '+grd_Ano+' de '+grado+' de '+nivelest, fontSize:17, textAlign:'justify',
          	width:672, y:100,x:60, height:17, lineHeight:17});//primaria bachillerato
        else
          	sheets[n].addText({text:'Titular de la cédula de identidad número: '+ciAlumno+', nacido (a) en la ciudad de '+ciudadAlu+' del Estado '+estadoAlu+' el '+
          	fe_nac+ ', se encuentra inscrito en el periodo escolar '+periodo+', en el '+grado+' '+grd_Ano+' de '+nivelest, fontSize:17, textAlign:'justify',
          	width:672, y:100,x:60, height:17, lineHeight:17});//inicial	
		  
		  sheets[n].addText({
			    text:'Constancia que se expide a petición de la parte interesada.',
			    textAlign:'justify',
			    fontSize:17,
			    y:140,
			    x:60,
			    width:672,
			    height:17,
			    lineHeight:17
		  });
		  sheets[n].addText({text:ciudadInst+', '+ dia + '-' + mes + '-' + anio,fontSize:20, textAlign:'justify', y:150, x:60, width:672, height:17, lineHeight:17});		  
	  	}
	  	
	  	function piePag(n){
      	sheets[n].addText({text:'__________________________________', textAlign:'center',fontSize:17, y:180, x:60, width:672, height:17, lineHeight:17});
		  	sheets[n].addText({text:director,                             textAlign:'center',fontSize:17, y:185, x:60, width:672, height:17, lineHeight:17});
		  	sheets[n].addText({text:'C.I.: ' + nuCeDirector,              textAlign:'center',fontSize:17, y:190, x:60, width:672, height:17, lineHeight:17});
		  	sheets[n].addText({text:'Director (a) del plantel',           textAlign:'center',fontSize:17, y:195, x:60, width:672, height:17, lineHeight:17});
	    	sheets[n].addText({text:'Direccón: '+direcp,                  textAlign:'center',fontSize:16, y:200, x:60, width:672, height:16, lineHeight:16});
	    	sheets[n].addText({text:'Telf.: '+telfp+',Email: '+email,     textAlign:'center',fontSize:16, y:205, x:60, width:672, height:16, lineHeight:16});            
	  	}
	  	for(var i=0; i<j.data[0].length; i++){
		  	sheets[i]=book.createSheet();
		  	mapping(i);	
		  	cabecera(i);
		  	contenido(i);	
		  	piePag(i);	
	  	}
	  	book.print();		    	
    },
    
   	getConstancia: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
	    rlx.addInt('reg', 1);
		rlx.add('reg', pcbInscMedBasCarrera.setModeReturnGetText(0));
		rlx.add('reg', editsInscMedBasCi);
		rlx.add('reg', editsInscMedBasCi);
		rlx.add('reg', pcbInscMedBasCarrera.setModeReturnGetText(4));
		rlx.add('reg', pcbInscMedBasCarrera.setModeReturnGetText(5));
		rlx.add('reg', pcbInscMedBasCarrera.setModeReturnGetText(5));
		rlx.add('reg', pcbInscMedBasCarrera.setModeReturnGetText(6));
		rlx.add('reg', pcbInscMedBasCarrera.setModeReturnGetText(6));
  		Tool.cnnSrv('ReportObject', 'getConstanciasPorAlumno', this.windowName + '.reporteConstancia()', rlx);
   	},
   	
	limpiarCoreUpdate : function() {
		this.unlockButton(true);
		dialogsInscMedBasica.setMsg("");
  	},

  	coreUpdate : function() {
		var rlx = xmlStructs.createRecordList("rlx");

    	if (editsInscMedBasCi.valid(dialogsInscMedBasica)) 
            if (editsInscMedBasNombre.valid(dialogsInscMedBasica)) 
                if (editsInscMedBasApellido.valid(dialogsInscMedBasica)) 
					if (pcbInscMedBasCarrera.valid(dialogsInscMedBasica))
						if (editsInscMedBasPosicion.valid(dialogsInscMedBasica))
                   			if (editsInscMedBasSeccion.valid(dialogsInscMedBasica)) {
                   				rlx.addInt('reg', editsInscMedBasCi.hideId);
                   				rlx.add('reg', pcbInscMedBasCarrera.setModeReturnGetText(0));
                   				rlx.add('reg', pcbInscMedBasCarrera.setModeReturnGetText(4));
                   				rlx.add('reg', pcbInscMedBasCarrera.setModeReturnGetText(5));
                   				rlx.addStr('reg', pcbInscMedBasCarrera.setModeReturnGetText(6).getText());
                   				Tool.cnnSrv('InscripObject', 'inscribir', this.windowName + '.limpiarCoreUpdate()', rlx);
                   			}
	}
};
