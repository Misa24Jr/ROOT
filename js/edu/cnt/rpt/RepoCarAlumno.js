var dialogsRepoCarAlumno = new Object();
var powerComboBoxCarnAluCarrera = new Object();
var editsCarnAluCedula = new Object();
var editsCarnAluNombre = new Object();
var editsCarnAluApellido = new Object();
var editsCarnAluPeriodo = new Object();
var imgButtonsCarnAluReporte = new Object();
var imgButtonsCarnAluSalir = new Object();
var mw_RepoCarAlumno = new Object();// minWindow

var RepoCarAlumno = {
    windowName : 'RepoCarAlumno',
    isCreate: false,
    
    show: function() {
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoCarAlumno.isByClean())
			this.limpiar();			
		dialogsRepoCarAlumno.show();
	},
	
    hide: function() {
        dialogsRepoCarAlumno.hide();
    },
    
    createMWs: function() {
        mwRepoCarAlumno = desktop.addMinWindow('Carnet Est.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoCarAlumno.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsRepoCarAlumno_Init : function() {
        dialogsRepoCarAlumno.setMinimizeXY(0,0);
        dialogsRepoCarAlumno.setCenterScreen();
        dialogsRepoCarAlumno.addSpace(0,0,20);
        
        
        dialogsRepoCarAlumno.addLn(1,1,1);
		dialogsRepoCarAlumno.setHeightCell(1,1,13);		
		dialogsRepoCarAlumno.addObject(editsCarnAluCedula,25,40);		
		editsCarnAluCedula.setSizeEdit(200);
		dialogsRepoCarAlumno.addObject(editsCarnAluNombre,25,75);		
		editsCarnAluNombre.setSizeEdit(200);
		dialogsRepoCarAlumno.addObject(editsCarnAluApellido,25,110);		
		editsCarnAluApellido.setSizeEdit(200);		
		dialogsRepoCarAlumno.addObject(powerComboBoxCarnAluCarrera,25,145);		
		powerComboBoxCarnAluCarrera.setWidthCombo(190);
		dialogsRepoCarAlumno.addObject(editsCarnAluPeriodo,25,180);		
		editsCarnAluPeriodo.setSizeEdit(200);		
        dialogsRepoCarAlumno.addObject(imgButtonsCarnAluReporte,25,225);
        imgButtonsCarnAluReporte.setDimension(122,22);
		dialogsRepoCarAlumno.addObject(imgButtonsCarnAluSalir,184,225);
        imgButtonsCarnAluSalir.setDimension(122,22);    
        
        
        
        /*
        
        dialogsRepoCarAlumno.addLn(1,1,1);
		dialogsRepoCarAlumno.setHeightCell(1,1,13);
		dialogsRepoCarAlumno.addObjToDialog(editsCarnAluCedula,2,1,24);
		editsCarnAluCedula.setSizeEdit(149);
		dialogsRepoCarAlumno.addObjToDialog(editsCarnAluNombre,2,1,24);
		editsCarnAluNombre.setSizeEdit(149);
		dialogsRepoCarAlumno.addObjToDialog(editsCarnAluApellido,2,1,24);
		editsCarnAluApellido.setSizeEdit(149);
		dialogsRepoCarAlumno.adjAllMarginObj(2,1,15);
		dialogsRepoCarAlumno.addObjToDialog(powerComboBoxCarnAluCarrera,3,1,24);
		powerComboBoxCarnAluCarrera.setWidthCombo(364);
		dialogsRepoCarAlumno.addObjToDialog(editsCarnAluPeriodo,3,1,24);
		editsCarnAluPeriodo.setSizeEdit(149);
		dialogsRepoCarAlumno.adjAllMarginObj(3,1,15);
        dialogsRepoCarAlumno.addLn(5,1,1);
		dialogsRepoCarAlumno.setHeightCell(5,1,10);
		dialogsRepoCarAlumno.addObjToDialog(imgButtonsCarnAluReporte,6,1);
    	imgButtonsCarnAluReporte.setDimension(90,22);
        dialogsRepoCarAlumno.addObjToDialog(imgButtonsCarnAluSalir,6,1);
    	imgButtonsCarnAluSalir.setDimension(90,22);
        dialogsRepoCarAlumno.adjAllMarginObj(6,1,30);
        dialogsRepoCarAlumno.leftMarginObj(6,1,0,230); */
    },

    create : function() {
    	dialogsRepoCarAlumno = dialogs.create('dialogsRepoCarAlumno',0,0,333,240,'CARNET DEL ESTUDIANTE');
    	dialogsRepoCarAlumno.setAdjY(80);
    	editsCarnAluCedula = edits.create('editsCarnAluCedula','editsCarnAluCedula','C.i. (*):',1,80,'normal');
    	editsCarnAluCedula.setValidInteger();
      	editsCarnAluCedula.setFieldFind(true);
      	editsCarnAluNombre = edits.create('editsCarnAluNombre','editsCarnAluNombre','Nombre (*):',1,80,'normal');
      	editsCarnAluNombre.setValidEmpty();
      	editsCarnAluNombre.setFieldFind(true);
      	editsCarnAluApellido = edits.create('editsCarnAluApellido','editsCarnAluApellido','Apellido (*):',1,80,'normal');
      	editsCarnAluApellido.setValidEmpty();
      	editsCarnAluApellido.setFieldFind(true);
      	powerComboBoxCarnAluCarrera = powerComboBox.create('powerComboBoxCarnAluCarrera','powerComboBoxCarnAluCarrera','Carrera:',1,76);
    	powerComboBoxCarnAluCarrera.enableReadOnlyEditor();
    	powerComboBoxCarnAluCarrera.addEmptyOption();
    	powerComboBoxCarnAluCarrera.setValidEmpty();
    	editsCarnAluPeriodo = edits.create('editsCarnAluPeriodo','editsCarnAluPeriodo','Periodo:',1,80,'normal');
    	editsCarnAluPeriodo.setValidEmpty();
    	editsCarnAluPeriodo.setFieldFind(true);
    	editsCarnAluPeriodo.readOnly(true);
    	editsCarnAluPeriodo.idPeriodo = 0;
    	editsCarnAluPeriodo.dePosicion = '';
    	editsCarnAluPeriodo.deSeccion = '';
      	imgButtonsCarnAluReporte = imgButtons.create('imgButtonsCarnAluReporte','Imprimir','print.png');
      	imgButtonsCarnAluSalir = imgButtons.create('imgButtonsCarnAluSalir','Salir','salir.png');
      	this.isCreate=true;
	},

	init : function() {
		this.create();
		this.setEvents(); 
		this.dialogsRepoCarAlumno_Init();
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
  		editsCarnAluPeriodo.setValue("");
  	},

   	loadDataCarrInscrip : function() {
  		Tool.loadPowerComboData(dialogsRepoCarAlumno, powerComboBoxCarnAluCarrera, -1, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			powerComboBoxCarnAluCarrera.setSelectedIndex(1); 
  			this.buscarPeriodo(); 
  		}
   	},

   	buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");

    	if (editsCarnAluCedula.getValue() != '' && editsCarnAluNombre.getValue() != '' && editsCarnAluApellido.getValue() != '') {
			if (powerComboBoxCarnAluCarrera.setModeReturnGetText(0).getText() == "" || powerComboBoxCarnAluCarrera.setModeReturnGetText(0).getText() == "-1") {
		  		Tool.rstPwrCmb(powerComboBoxCarnAluCarrera);
		  		editsCarnAluPeriodo.setValue("");
		  		rlx.add('reg', editsCarnAluCedula);
	    		Tool.cnnSrv('MantObject', 'getCarrera', this.windowName + '.loadDataCarrInscrip()', rlx);
			}
			else {
	  			this.buscarPeriodo(); 
			}
		}
		else if (editsCarnAluCedula.getValue() != '' || editsCarnAluNombre.getValue() != '' || editsCarnAluApellido.getValue() != '') {
	  		Tool.rstPwrCmb(powerComboBoxCarnAluCarrera);
	  		editsCarnAluPeriodo.setValue("");
        	ResuBusqueda.setObjectExtFnc(editsCarnAluCedula, editsCarnAluNombre, editsCarnAluApellido, 'RepoCarAlumno.buscar()');
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsCarnAluCedula, editsCarnAluCedula, editsCarnAluNombre, editsCarnAluNombre, editsCarnAluApellido, editsCarnAluApellido);
		}
		else {
			Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},
	
    buscarPeriodo : function(element) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (powerComboBoxCarnAluCarrera.getOption() != "") {
			rlx.addInt('reg', editsCarnAluCedula.hideId);
	    	rlx.add('reg', powerComboBoxCarnAluCarrera.setModeReturnGetText(0)); 
	        Tool.cnnSrv('ReportObject', 'getHorarioAlumnoPeriodo', this.windowName + '.loadDataPeriodo()', rlx);
		}
	},
	
	loadDataPeriodo: function() {
		editsCarnAluPeriodo.idPeriodo = json('getHorarioAlumnoPeriodo').data[0][0];
		editsCarnAluPeriodo.dePosicion = json('getHorarioAlumnoPeriodo').data[2][0];
		editsCarnAluPeriodo.deSeccion = json('getHorarioAlumnoPeriodo').data[3][0];
		Tool.loadEditData(dialogsRepoCarAlumno, editsCarnAluPeriodo, 1, json('getHorarioAlumnoPeriodo'));
    },
	
   	loadDataCarrInscrip : function() {
  		Tool.loadPowerComboData(dialogsRepoCarAlumno, powerComboBoxCarnAluCarrera, -1, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			powerComboBoxCarnAluCarrera.setSelectedIndex(1); 
  			this.buscarPeriodo(); 
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
  	  		editsCarnAluCedula.hideId = json('getDatoPersona').data[3];
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
        dialogsRepoCarAlumno.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    limpiar : function() {
    	editsCarnAluCedula.hideId = -1;
  		editsCarnAluCedula.setValue(""); 
  		editsCarnAluNombre.setValue(""); 
  		editsCarnAluApellido.setValue(""); 
  		Tool.rstPwrCmb(powerComboBoxCarnAluCarrera);
  		editsCarnAluPeriodo.setValue("");
  		dialogsRepoCarAlumno.setMsg("");
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
        imgButtonsCarnAluSalir.onClick('dialogsRepoCarAlumno.close()');
		powerComboBoxCarnAluCarrera.onChange(this.windowName + ".buscarPeriodo()");
    },

    reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
        //if (editsCarnAluCedula.valid(dialogsRepoCarAlumno))
			//if (editsCarnAluNombre.valid(dialogsRepoCarAlumno))
				//if (editsCarnAluApellido.valid(dialogsRepoCarAlumno))
					//if (powerComboBoxCarnAluCarrera.valid(dialogsRepoCarAlumno)) 
						/*if (editsCarnAluPeriodo.valid(dialogsRepoCarAlumno))*/ {
					    	
							rep = new Report('landscape');	
							//rep.setWidthReport(1200);
							//rep.setPositionIcon(1250,15);
							
							rep.setPageSize(900);
							rep.setWidthReport(1100);
							
							//rep = new Report('portrait');
					        //rep.setNoRepeatHead();
							rep.addBar(0,95,500,140,rep.getRGBAObj(187,196,238,0.8),false);
							rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),14,'helvetica','normal');
							rep.setPositionIcon(450,105);
							rep.addText(134, 124, 'CARNET DEL ESTUDIANTE',false);
							rep.addText(134, 124, 'CARNET DEL ESTUDIANTE',false);													
							////////////////////////////////////////////////////FRENTE/////////////////////////////////////////////////////////////////////////////////////////
							//rep.addBarGradient(50,220,500,500,rep.getRGBAObj(0,0,200,0.5),rep.getRGBAObj(100,100,200,0.5),rep.getRGBAObj(240,240,240,1),false);
							rep.addImage(440,713,500,760,'images/tijeras_1.png',false);
							rep.addLine(10,223,432,223,rep.getRGBAObj(200,200,200,1),3,false);
							rep.addLine(15,230,428,230,rep.getRGBAObj(4,128,119,1),8,false);
							rep.addLine(28,150,28,750,rep.getRGBAObj(4,128,119,1),8,false);
							rep.addLine(417,150,417,750,rep.getRGBAObj(4,128,119,1),8,false);
							rep.addLine(10,478,430,478,rep.getRGBAObj(4,128,119,1),18,false);
							rep.addLine(22,160,22,750,rep.getRGBAObj(200,200,200,1),3,false);
							rep.addLine(423,160,423,750,rep.getRGBAObj(200,200,200,1),3,false);							
							rep.addImage(32,234,412,288,imgEduca.logo_carnet, false);
							rep.addLine(32,290,415,290,rep.getRGBAObj(1,30,30,1),3,false);  
							rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14,'helvetica','bold','black');
							rep.addText(138, 314, 'E S T U D I A N T E',false);rep.addText(138, 314, 'E S T U D I A N T E',false);
							rep.addLine(138,318,307,318,rep.getRGBAObj(0,0,0,1),1,false);							
							rep.addLine(315,340,395,340,rep.getRGBAObj(0,0,0,1),1,false); 
							rep.addLine(315,440,395,440,rep.getRGBAObj(0,0,0,1),1,false);
							rep.addLine(315,340,315,440,rep.getRGBAObj(0,0,0,1),1,false);
							rep.addLine(395,340,395,440,rep.getRGBAObj(0,0,0,1),1,false);							
							rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','bold','black');
					        rep.addText(36, 340, 'C.I.:                '+editsCarnAluCedula.getText(),false);rep.addText(36, 340, 'C.I.:                '+editsCarnAluCedula.getText(),false);
							rep.addText(36, 360, 'NOMBRES:    '+editsCarnAluNombre.getText(),false);rep.addText(36, 360, 'NOMBRES:    '+editsCarnAluNombre.getText(),false);
							rep.addText(36, 380, 'APELLIDOS:   '+editsCarnAluApellido.getText(),false);rep.addText(36, 380, 'APELLIDOS:   '+editsCarnAluApellido.getText(),false);
							rep.addText(36, 400, 'GRADO/AÑO: '+editsCarnAluPeriodo.dePosicion+' SECCION: '+editsCarnAluPeriodo.deSeccion,false);rep.addText(36, 400, 'GRADO/AÑO: '+editsCarnAluPeriodo.dePosicion+' SECCION: '+editsCarnAluPeriodo.deSeccion,false);
							rep.addText(36, 420, 'PERIODO:      '+editsCarnAluPeriodo.getText(),false);rep.addText(36, 420, 'PERIODO:      '+editsCarnAluPeriodo.getText(),false);
							rep.addText(36, 450, 'SEDE:  ',false);rep.addText(36, 450, 'SEDE:  ',false);
							rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','bold','black');
							rep.addText(90, 450, powerComboBoxCarnAluCarrera.setModeReturnGetText(3).getText(),false);
							rep.addImage(312,338,400,444,'images/pht/'+editsCarnAluCedula.getValue()+'.jpg',true);
							//rep.addImage(287,342,421,440,'images/pht/'+editsCarnAluCedula.getValue()+'.jpg',true);
							//rep.addImage(104,292,486,472,'images/ssss.png', false);
							//rep.addImage(100,484,490,731,'images/ssss_2.png', false);
							////////////////////////////////////////////////////REVERSO////////////////////////////////////////////////////////////////////////////////////////
							rep.addLine(15,728,432,728,rep.getRGBAObj(4,128,119,1),8,false);
							rep.addLine(10,735,445,735,rep.getRGBAObj(200,200,200,2),3,false);
							rep.addImage(34,489,412,722,'images/logo/reverso_carnet.png', false);
							///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
							//********************************************* FIN GENERACION DEL REPORTE ***********************************************
							rep.render();                
            				setTimeout(rep.previewHTML,500);
						}
	}
};
