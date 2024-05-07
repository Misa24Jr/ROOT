var dialogsRepoInfoAlumno = {};
var editsRepoInfoCedula = {};
var editsRepoInfoNombre = {};
var editsRepoInfoApellido = {};
var imgButtonsRepoInfoBuscar = {};
var imgButtonsRepoInfoSalir = {};
var mwRepoInfoAlumno = {};// minWindow

var RepoInfoAlumno = {
    windowName : 'RepoInfoAlumno',
    isCreate: false,
	idPeriodo: 0,
	deUsuario: '',
	dePosicion: '',
	deSeccion: '',
	deNivel: '',
    
    show: function() {
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoInfoAlumno.isByClean())
			this.limpiar();			
		dialogsRepoInfoAlumno.show();
	},
	
    hide: function() {
        dialogsRepoInfoAlumno.hide();
    },
    createMWs: function() {
    	mwRepoInfoAlumno = desktop.addMinWindow('Info', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoInfoAlumno.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsRepoInfoAlumno_Init : function() {
        dialogsRepoInfoAlumno.setMinimizeXY(0,0);
        dialogsRepoInfoAlumno.setCenterScreen();
        dialogsRepoInfoAlumno.addSpace(0,0,20);
        dialogsRepoInfoAlumno.addLn(1,1,1);
		dialogsRepoInfoAlumno.setHeightCell(1,1,13);
		dialogsRepoInfoAlumno.addObjToDialog(editsRepoInfoCedula,2,1,24);
		dialogsRepoInfoAlumno.addObjToDialog(editsRepoInfoNombre,3,1,24);
		dialogsRepoInfoAlumno.addObjToDialog(editsRepoInfoApellido,4,1,24);
		dialogsRepoInfoAlumno.addLn(5,1,1);
		dialogsRepoInfoAlumno.setHeightCell(5,1,20);
		dialogsRepoInfoAlumno.addObjToDialog(imgButtonsRepoInfoBuscar,6,1);
        dialogsRepoInfoAlumno.addObjToDialog(imgButtonsRepoInfoSalir,6,1);
        dialogsRepoInfoAlumno.adjAllMarginObj(6,1,30);
        dialogsRepoInfoAlumno.leftMarginObj(6,1,0,25); 
    },

    create : function() {
    	dialogsRepoInfoAlumno = dialogs.create('dialogsRepoInfoAlumno',0,0,303,128,'INFORMACIÓN');
    	dialogsRepoInfoAlumno.setAdjY(80);
    	editsRepoInfoCedula = edits.create('editsRepoInfoCedula','editsRepoInfoCedula','C.i. (*):',1,72,'normal');
    	editsRepoInfoCedula.setValidInteger();
      	editsRepoInfoCedula.setFieldFind(true);
		editsRepoInfoCedula.setSizeEdit(190);
      	editsRepoInfoNombre = edits.create('editsRepoInfoNombre','editsRepoInfoNombre','Nombre (*):',1,72,'normal');
      	editsRepoInfoNombre.setValidEmpty();
      	editsRepoInfoNombre.setFieldFind(true);
		editsRepoInfoNombre.setSizeEdit(190);
      	editsRepoInfoApellido = edits.create('editsRepoInfoApellido','editsRepoInfoApellido','Apellido (*):',1,72,'normal');
      	editsRepoInfoApellido.setValidEmpty();
      	editsRepoInfoApellido.setFieldFind(true);
		editsRepoInfoApellido.setSizeEdit(190);
    	imgButtonsRepoInfoBuscar = imgButtons.create('imgButtonsRepoInfoBuscar','Buscar','icono_buscar.png');
      	imgButtonsRepoInfoSalir = imgButtons.create('imgButtonsRepoInfoSalir','Salir','salir.png');
    	imgButtonsRepoInfoBuscar.setDimension(90,22);
    	imgButtonsRepoInfoSalir.setDimension(90,22);
      	this.isCreate=true;
	},

	init : function() {
		this.create();
		this.setEvents(); 
		this.dialogsRepoInfoAlumno_Init();
		this.createMWs();
	},
	
	limpiarFind : function(ix) {
		editsRepoInfoCedula.hideId = -1;
		
  		switch (ix) {
		case 1: 
			editsRepoInfoNombre.setValue("");
			editsRepoInfoApellido.setValue("");  		
			break;
		case 2: 
			editsRepoInfoCedula.setValue("");
			editsRepoInfoApellido.setValue("");  		
			break;
		default:
			editsRepoInfoCedula.setValue("");
		    editsRepoInfoNombre.setValue("");
			break;
		} 
  	},

   	buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");

    	if (editsRepoInfoCedula.getValue() != '' && editsRepoInfoNombre.getValue() != '' && editsRepoInfoApellido.getValue() != '') {
	  		this.coreUpdate();
		}
		else if (editsRepoInfoCedula.getValue() != '' || editsRepoInfoNombre.getValue() != '' || editsRepoInfoApellido.getValue() != '') {
        	ResuBusqueda.setObjectExtFnc(editsRepoInfoCedula, editsRepoInfoNombre, editsRepoInfoApellido, 'RepoInfoAlumno.buscar()');
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsRepoInfoCedula, editsRepoInfoCedula, editsRepoInfoNombre, editsRepoInfoNombre, editsRepoInfoApellido, editsRepoInfoApellido);
		}
		else {
			Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},
	
    limpiar : function() {
    	editsRepoInfoCedula.hideId = -1;
  		editsRepoInfoCedula.setValue(""); 
  		editsRepoInfoNombre.setValue(""); 
  		editsRepoInfoApellido.setValue(""); 
  		dialogsRepoInfoAlumno.setMsg("");
	},

	setEvents: function() {
		editsRepoInfoCedula.onEnter(this.windowName + ".buscar()");
  		editsRepoInfoCedula.onChange(this.windowName + ".limpiarFind(1)");
  		editsRepoInfoCedula.onClick(this.windowName + ".limpiarFind(1)");
  		editsRepoInfoNombre.onEnter(this.windowName + ".buscar()");
  		editsRepoInfoNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsRepoInfoNombre.onClick(this.windowName + ".limpiarFind(2)");
  		editsRepoInfoApellido.onEnter(this.windowName + ".buscar()");
  		editsRepoInfoApellido.onChange(this.windowName + ".limpiarFind(3)");
  		editsRepoInfoApellido.onClick(this.windowName + ".limpiarFind(3)");
  		imgButtonsRepoInfoBuscar.onClick(this.windowName + ".buscar()");
        imgButtonsRepoInfoSalir.onClick('dialogsRepoInfoAlumno.close()');
    },
	
	visualizar: function() {  
		rep = new Report('portrait');
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),10,'courier','bold');
		rep.addText(270, 40, 'REPÚBLICA BOLIVARIANA DE VENEZUELA',false);
		rep.addText(222, 55, 'MINISTERIO DEL PODER POPULAR PARA LA EDUCACIÓN',false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),13,'courier','bold');
		rep.addText(253, 75, json('getInfoFicha').data[21][0],false);
        rep.setNoRepeatHead();
		rep.setPositionIcon(650,40);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),14,'helvetica','normal');
		
		var d = json('getInfoFicha').data;
		var idxRep = d[0].length - 1;
		var idxMadre=-1;
		var idxPadre=-1;

		if (json('getInfoCarrera').data[0].length == 1) {
  			deUsuario = json('getInfoCarrera').data[2][0];
  			deNivel = json('getInfoCarrera').data[3][0];
  			dePosicion = json('getInfoCarrera').data[4][0];
  			deSeccion = json('getInfoCarrera').data[5][0];
  			dePeriodo = json('getInfoCarrera').data[1][0]
  		}

		for(var i = 0; i<d[0].length-1; i++) {
			if(d[15][i]==1)
				idxMadre = i;
			if(d[15][i]==2)
				idxPadre= i;
		}
		//////////////////////IMAGEN//DE//FOTOGRAFIA//DEL//ALUMNO///
		rep.addImage(0,05,80,90,'images/pht/'+ d[3][0]+'.jpg',true);
		rep.addLine(2,11,2,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(79,11,79,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(2,11,79,11,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(2,89,79,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		///////////////////IMAGEN//DE//FOTOGRAFIA//DEL//REPRESENTANTE/
		rep.addImage(714,05,791,90,'images/pht/'+ d[9][0]+'.jpg',true);
		rep.addLine(715,11,715,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(715,11,790,11,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(790,11,790,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(715,89,790,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		/////////////////////////////////////////////////////////////
		rep.addLine(0,99,0,414,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(792,99,792,414,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,99,792,99,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(287,99,287,205,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(600,99,600,344,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,134,792,134,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(218,134,218,169,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,169,792,169,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,204,792,204,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,239,792,239,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(287,240,287,377,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(385,240,385,344,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,274,792,274,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,309,792,309,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,344,792,344,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,378,792,378,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,414,792,414,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,450,792,450,rep.getRGBAObj(0,0,0,0),1,false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),10,'helvetica','normal'); 
		rep.addText(10, 121, 'Nombres: '+d[1][0],false);
		rep.addText(296, 121, 'Apellidos: '+d[2][0],false);
		rep.addText(608, 121, 'Cedula: '+d[3][0],false);
		rep.addText(10, 155, 'Fecha Nacimiento: '+d[4][0],false);
		rep.addText(228, 155, 'Edad: '+d[5][0],false);
		rep.addText(296, 155, 'Lugar: '+d[7][0],false);
		rep.addText(608, 155, 'Periodo: '+dePeriodo,false);
		rep.addText(10, 225, 'Plantel de Procedencia: '+d[8][0],false);
		rep.addText(10, 194, 'Usuario: '+deUsuario,false);
		rep.addText(296, 194, 'Posición: '+dePosicion,false);
		rep.addText(608, 194, 'Seccón: '+deSeccion,false);
		rep.addText(608, 225, 'Nivel: '+deNivel,false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),8,'helvetica','normal'); 
		if(idxMadre ==-1) {
		  rep.addText(10, 259, 'Madre: ',false);
		  rep.addText(296, 259, 'C.i.: ',false);
		  rep.addText(393, 259, 'Profesión: ',false);
		  rep.addText(608, 259, 'Tlf.: ',false);
		}
		else {
		  rep.addText(10, 259, 'Madre: '+d[10][idxMadre]+ ' ' +d[11][idxMadre],false);
		  rep.addText(296, 259, 'C.i.: '+d[9][idxMadre],false);
		  rep.addText(393, 259, 'Profesión: '+d[13][idxMadre],false);
		  rep.addText(608, 259, 'Tlf.: '+d[14][idxMadre],false);
		}
		
		if(idxPadre ==-1) {
			rep.addText(10, 294, 'Padre: ',false);
			rep.addText(296, 294, 'C.i.: ',false);
			rep.addText(393, 294, 'Profesión: ',false);
			rep.addText(608, 294, 'Tlf.: ',false);
		}
		else {
			rep.addText(10, 294, 'Padre: '+d[10][idxPadre]+ ' ' +d[11][idxPadre],false);
			rep.addText(296, 294, 'C.i.: '+d[9][idxPadre],false);
			rep.addText(393, 294, 'Profesión: '+d[13][idxPadre],false);
			rep.addText(608, 294, 'Tlf.: '+d[14][idxPadre],false);
		}
		rep.addText(10, 329, 'Represente: '+d[10][idxRep]+' '+d[11][idxRep],false);
		rep.addText(296, 329, 'C.i.: '+d[9][idxRep],false);
		rep.addText(393, 329, 'Profesión: '+d[13][idxRep],false);
		rep.addText(608, 329, 'Tlf.: '+d[14][idxRep],false);
		rep.addText(10, 364, 'Parentesco: '+d[20][idxRep],false);
		rep.addText(294, 364, 'Email: '+d[19][idxRep],false);
		rep.addText(10, 400, 'Dirección: '+d[18][idxRep],false);
		rep.addText(10, 436, 'CONTACTO EMERGENCIA: '+d[22][idxRep],false);
		//////////////////////////////////////////////////////////////////////////////////////////
		//********************************************* FIN GENERACION DEL REPORTE ***************
		rep.render();
		setTimeout(rep.previewHTML,100);
	},
	
	coreUpdate: function() {
        var rlx = xmlStructs.createRecordList("rlx");

        if (editsRepoInfoCedula.valid(dialogsRepoInfoAlumno))
			if (editsRepoInfoNombre.valid(dialogsRepoInfoAlumno))
				if (editsRepoInfoApellido.valid(dialogsRepoInfoAlumno)) { 
					rlx.addInt('reg', editsRepoInfoCedula.hideId);
					rlx.addInt('reg', editsRepoInfoCedula.hideId);
					Tool.cnnSrv('ReportObject', 'getInformacion', this.windowName + '.visualizar()', rlx);
				}
    }
};

