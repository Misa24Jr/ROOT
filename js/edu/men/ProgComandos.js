var dialogsProgComandos = new Object();
var pcbProgComLugar = new Object();
var pcbProgComComando = new Object();
var pcbBoxProgComInicio = new Object();
var pcbBoxProgComInicio2 = new Object();
var editsProgHorInicioAMPM = new Object();
var pcbBoxProgComFin = new Object();
var pcbBoxProgComFin2 = new Object();
var pcbBoxProgComEstado = new Object();
var pcbBoxProgComDiaSemana = new Object();
var pcbBoxProgComMes = new Object();
var gridsProgComando = new Object();
var imgButtonsProgComAgregar = new Object();
var imgButtonsProgComModificar = new Object();
var imgButtonsProgComEliminar = new Object();
var imgButtonsProgComLimpiar = new Object();
var imgButtonsProgComBuscar = new Object();
var imgButtonsProgComSalir = new Object();
var mw_ProgComandos = new Object();// minWindow

var ProgComandos = {
    windowName : 'ProgComandos',
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
        if (dialogsProgComandos.isByClean())
			//this.limpiar();			
		dialogsProgComandos.show();
	},
	
    hide: function() {
        dialogsProgComandos.hide();
    },
    createMWs: function() {
    	mwProgComandos = desktop.addMinWindow('Ficha Alumno', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsProgComandos.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsProgComandos_Init : function() {
        dialogsProgComandos.setMinimizeXY(0,0);
        dialogsProgComandos.setCenterScreen();
        dialogsProgComandos.addSpace(0,0,20);
        dialogsProgComandos.addLn(1,1,1);
		dialogsProgComandos.setHeightCell(1,1,12);		
		dialogsProgComandos.addObjToDialog(pcbProgComLugar,2,1,24);
		pcbProgComLugar.setWidthCombo(204);
		dialogsProgComandos.addObjToDialog(pcbProgComComando,2,1,24);
		pcbProgComComando.setWidthCombo(204);		
		dialogsProgComandos.adjAllMarginObj(2,1,15);	
		dialogsProgComandos.addObject(pcbBoxProgComInicio,20,69);
        dialogsProgComandos.addObject(pcbBoxProgComInicio2,148,69);
        dialogsProgComandos.addObject(editsProgHorInicioAMPM,207,69);
        dialogsProgComandos.addObject(pcbBoxProgComFin,243,69);
        dialogsProgComandos.addObject(pcbBoxProgComFin2,349,69);
		dialogsProgComandos.addObject(editsProgHorFinAMPM,408,69);
		dialogsProgComandos.addObject(pcbBoxProgComEstado,446,69);
		pcbBoxProgComEstado.addOptionAndSimpleValue(null, 'ACTIVO','ACTIVO');
        pcbBoxProgComEstado.addOptionAndSimpleValue(null, 'INACTIVO','INACTIVO');
		dialogsProgComandos.addObject(pcbBoxProgComDiaSemana,20,98);		
		dialogsProgComandos.addObject(pcbBoxProgComMes,243,98);
		dialogsProgComandos.addObject(gridsProgComando.getObject(),20,127);
		dialogsProgComandos.addLn(3,1,1);
		dialogsProgComandos.setHeightCell(3,1,413);		
		dialogsProgComandos.addObjToDialog(imgButtonsProgComAgregar,7,1);
        dialogsProgComandos.addObjToDialog(imgButtonsProgComModificar,7,1);
        dialogsProgComandos.addObjToDialog(imgButtonsProgComEliminar,7,1);
        dialogsProgComandos.addObjToDialog(imgButtonsProgComLimpiar,7,1);
        dialogsProgComandos.addObjToDialog(imgButtonsProgComBuscar,7,1);
        dialogsProgComandos.addObjToDialog(imgButtonsProgComSalir,7,1);       
        imgButtonsProgComAgregar.setDimension(90,22);
        imgButtonsProgComModificar.setDimension(90,22);
        imgButtonsProgComEliminar.setDimension(90,22);
        imgButtonsProgComLimpiar.setDimension(90,22);
        imgButtonsProgComBuscar.setDimension(90,22);
        imgButtonsProgComSalir.setDimension(90,22);
        dialogsProgComandos.adjAllMarginObj(7,1,12);
        dialogsProgComandos.leftMarginObj(7,1,0,5);
		
    },
	
	gridsProgComando_Init: function() {
        gridsProgComando.setFixColRow(false, true);
        gridsProgComando.addTitleVectorX(['Lugar','Comando','H.Inicio','H. Fin','Estado','Día', 'Mes']);
        gridsProgComando.showData();
        gridsProgComando.setSizeCol(1, 115);
        gridsProgComando.setSizeCol(2, 137);
        gridsProgComando.setSizeCol(3, 70);
        gridsProgComando.setSizeCol(4, 70);
        gridsProgComando.setSizeCol(5, 60);
        gridsProgComando.setSizeCol(6, 81);
        gridsProgComando.setSizeCol(7, 81);
        //gridsProgComando.hideCol(5);
        //gridsProgComando.hideCol(6);
        //gridsProgComando.hideCol(7);
    },
	
    create : function() {
    	dialogsProgComandos = dialogs.create('dialogsProgComandos',0,0,663,484,'PROGRAMACIÓN DE COMANDOS');
    	dialogsProgComandos.setAdjY(60);		
		pcbProgComLugar = powerComboBox.create('pcbProgComLugar','pcbProgComLugar','Lugar:',1,75);
		pcbProgComLugar.setValidEmpty();
		pcbProgComLugar.enableReadOnlyEditor();
		pcbProgComLugar.addEmptyOption();
		pcbProgComLugar.enableOnChangeToEmptyOption();
		pcbProgComComando = powerComboBox.create('pcbProgComComando','pcbProgComComando','Comando (+):',1,80);
		pcbProgComComando.setValidEmpty();
		pcbProgComComando.enableReadOnlyEditor();
		pcbProgComComando.addEmptyOption();
		pcbProgComComando.setFieldFind(true);
		pcbProgComComando.enableOnChangeToEmptyOption();			
		pcbBoxProgComInicio = powerComboBox.create('pcbBoxProgComInicio','pcbBoxProgComInicio','Hora Inicio:',1,75);
  		pcbBoxProgComInicio.setValidEmpty();
  		pcbBoxProgComInicio.enableReadOnlyEditor();
  		pcbBoxProgComInicio.addEmptyOption();
  		pcbBoxProgComInicio2 = powerComboBox.create('pcbBoxProgComInicio2','pcbBoxProgComInicio2',':',1,5);
  		pcbBoxProgComInicio2.setValidEmpty();
  		pcbBoxProgComInicio2.enableReadOnlyEditor();
  		pcbBoxProgComInicio2.addEmptyOption();
        pcbBoxProgComInicio.setWidthCombo(30);
        pcbBoxProgComInicio2.setWidthCombo(30);
  		editsProgHorInicioAMPM = edits.create('editsProgHorInicioAMPM','editsProgHorInicioAMPM','',1,1,'normal');
        editsProgHorInicioAMPM.setSizeEdit(20);
        editsProgHorInicioAMPM.readOnly(true);
  		pcbBoxProgComFin = powerComboBox.create('pcbBoxProgComFin','pcbBoxProgComFin','Hora Fin:',1,53);
  		pcbBoxProgComFin.setValidEmpty();
  		pcbBoxProgComFin.enableReadOnlyEditor();
  		pcbBoxProgComFin.addEmptyOption();
  		pcbBoxProgComFin2 = powerComboBox.create('pcbBoxProgComFin2','pcbBoxProgComFin2',':',1,5);
  		pcbBoxProgComFin2.setValidEmpty();
  		pcbBoxProgComFin2.enableReadOnlyEditor();
  		pcbBoxProgComFin2.addEmptyOption();
        pcbBoxProgComFin.setWidthCombo(30);
        pcbBoxProgComFin2.setWidthCombo(30);
  		editsProgHorFinAMPM = edits.create('editsProgHorFinAMPM','editsProgHorFinAMPM','',1,1,'normal');
        editsProgHorFinAMPM.setSizeEdit(20);
        editsProgHorFinAMPM.readOnly(true);		
		pcbBoxProgComEstado = powerComboBox.create('pcbBoxProgComEstado','pcbBoxProgComEstado','Estado:',1,46);
  		pcbBoxProgComEstado.setValidEmpty();
  		pcbBoxProgComEstado.enableReadOnlyEditor();
  		pcbBoxProgComEstado.addEmptyOption();		
		pcbBoxProgComDiaSemana = powerComboBox.create('pcbBoxProgComDiaSemana','pcbBoxProgComDiaSemana','Día Semana:',1,75);
  		pcbBoxProgComDiaSemana.setValidEmpty();
  		pcbBoxProgComDiaSemana.enableReadOnlyEditor();
  		pcbBoxProgComDiaSemana.addEmptyOption();
		pcbBoxProgComDiaSemana.setWidthCombo(111);
		pcbBoxProgComMes = powerComboBox.create('pcbBoxProgComMes','pcbBoxProgComMes','Mes:',1,53);
  		pcbBoxProgComMes.setValidEmpty();
  		pcbBoxProgComMes.enableReadOnlyEditor();
  		pcbBoxProgComMes.addEmptyOption();
		pcbBoxProgComMes.setWidthCombo(111);		
		gridsProgComando = grids.create('gridsProgComando', 15, 7);		
		imgButtonsProgComAgregar = imgButtons.create('imgButtonsProgComAgregar','Agregar','ok.png');
		imgButtonsProgComModificar = imgButtons.create('imgButtonsProgComModificar','Modificar','icono_modificar.png');
		imgButtonsProgComModificar.setDisable();
		imgButtonsProgComEliminar = imgButtons.create('imgButtonsProgComEliminar','Eliminar','eliminar.jpg');
		imgButtonsProgComEliminar.setDisable();
		imgButtonsProgComLimpiar = imgButtons.create('imgButtonsProgComLimpiar','Limpiar','limpiar.png');
		imgButtonsProgComBuscar = imgButtons.create('imgButtonsProgComBuscar','Buscar','icono_buscar.png');
		imgButtonsProgComSalir = imgButtons.create('imgButtonsProgComSalir','Salir','salir.png');      	
	},

	init : function() {
		this.create();
		//this.setEvents(); 
		this.dialogsProgComandos_Init();
		this.gridsProgComando_Init();
		this.createMWs();
	},
	
	limpiarFind : function(ix) {
		editsProgComCedula.hideId = -1;
		
  		switch (ix) {
		case 1: 
			editsProgComNombre.setValue("");
			editsProgComApellido.setValue("");  		
			break;
		case 2: 
			editsProgComCedula.setValue("");
			editsProgComApellido.setValue("");  		
			break;
		default:
			editsProgComCedula.setValue("");
		    editsProgComNombre.setValue("");
			break;
		} 
  	},

   	buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");

    	if (editsProgComCedula.getValue() != '' && editsProgComNombre.getValue() != '' && editsProgComApellido.getValue() != '') {
	  		this.coreUpdate();
		}
		else if (editsProgComCedula.getValue() != '' || editsProgComNombre.getValue() != '' || editsProgComApellido.getValue() != '') {
        	ResuBusqueda.setObjectExtFnc(editsProgComCedula, editsProgComNombre, editsProgComApellido, 'ProgComandos.buscar()');
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsProgComCedula, editsProgComCedula, editsProgComNombre, editsProgComNombre, editsProgComApellido, editsProgComApellido);
		}
		else {
			Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},
	
    limpiar : function() {
    	editsProgComCedula.hideId = -1;
  		editsProgComCedula.setValue(""); 
  		editsProgComNombre.setValue(""); 
  		editsProgComApellido.setValue(""); 
  		dialogsProgComandos.setMsg("");
	},
	/*
	setEvents: function() {
		editsProgComCedula.onEnter(this.windowName + ".buscar()");
  		editsProgComCedula.onChange(this.windowName + ".limpiarFind(1)");
  		editsProgComNombre.onEnter(this.windowName + ".buscar()");
  		editsProgComNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsProgComApellido.onEnter(this.windowName + ".buscar()");
  		editsProgComApellido.onChange(this.windowName + ".limpiarFind(3)");
  		imgButtonsProgComEnvTexto.onClick(this.windowName + ".buscar()");
        imgButtonsProgComSalir.onClick('dialogsProgComandos.close()');
    },
	*/
	
	coreUpdate: function() {
        var rlx = xmlStructs.createRecordList("rlx");

        if (editsProgComCedula.valid(dialogsProgComandos))
			if (editsProgComNombre.valid(dialogsProgComandos))
				if (editsProgComApellido.valid(dialogsProgComandos)) { 
					rlx.addInt('reg', editsProgComCedula.hideId);
					rlx.addInt('reg', editsProgComCedula.hideId);
					//Tool.cnnSrv('ReportObject', 'getInformacion', this.windowName + '.visualizar()', rlx);
				}
    }
};

