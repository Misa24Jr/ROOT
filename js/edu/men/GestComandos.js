var dialogsGestComandos = new Object();
var pcbGestComLugar = new Object();
var pcbGestComComando = new Object();
var editsGestComTelefono = new Object();
var editsGestComCedula = new Object();
var editsGestComNombre = new Object();
var editsGestComApellido = new Object();
var labelsGestComandos = new Object();
var memoGestComandos = new Object();
var imgButtonsGestComEnvTexto = new Object();
var imgButtonsGestComSalir = new Object();
var mw_GestComandos = new Object();// minWindow

var GestComandos = {
    windowName : 'GestComandos',
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
        if (dialogsGestComandos.isByClean())
			this.limpiar();			
		dialogsGestComandos.show();
	},
	
    hide: function() {
        dialogsGestComandos.hide();
    },
    createMWs: function() {
    	mwGestComandos = desktop.addMinWindow('Ficha Alumno', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsGestComandos.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsGestComandos_Init : function() {
        dialogsGestComandos.setMinimizeXY(0,0);
        dialogsGestComandos.setCenterScreen();
        dialogsGestComandos.addSpace(0,0,20);
        dialogsGestComandos.addLn(1,1,1);
		dialogsGestComandos.setHeightCell(1,1,12);		
		dialogsGestComandos.addObjToDialog(pcbGestComLugar,2,1,24);
		pcbGestComLugar.setWidthCombo(363);
		dialogsGestComandos.addObjToDialog(pcbGestComComando,2,1,24);
		pcbGestComComando.setWidthCombo(129);		
		dialogsGestComandos.adjAllMarginObj(2,1,15);		
		dialogsGestComandos.addObjToDialog(editsGestComCedula,3,1,24);
		editsGestComCedula.setSizeEdit(149);
		dialogsGestComandos.addObjToDialog(editsGestComNombre,3,1,24);
		editsGestComNombre.setSizeEdit(149);
		dialogsGestComandos.addObjToDialog(editsGestComApellido,3,1,24);
		editsGestComApellido.setSizeEdit(149);
		dialogsGestComandos.adjAllMarginObj(3,1,15);		
		dialogsGestComandos.addObjToDialog(editsGestComTelefono,4,1,24);
		editsGestComTelefono.setSizeEdit(149);		
		dialogsGestComandos.addLn(5,1,1);
		dialogsGestComandos.setHeightCell(5,1,12);		
		dialogsGestComandos.addObjToDialog(labelsGestComandos,6,1,16);
		labelsGestComandos.setFont('arial black','12','Black');
		dialogsGestComandos.addObjToDialog(memoGestComandos,7,1,24);
		memoGestComandos.style.zIndex = 1000;		
		dialogsGestComandos.addLn(8,1,1);
		dialogsGestComandos.setHeightCell(8,1,8);
		dialogsGestComandos.addObjToDialog(imgButtonsGestComEnvTexto,9,1);
    	imgButtonsGestComEnvTexto.setDimension(120,22);
        dialogsGestComandos.addObjToDialog(imgButtonsGestComSalir,9,1);
    	imgButtonsGestComSalir.setDimension(120,22);
        dialogsGestComandos.adjAllMarginObj(9,1,30);
        dialogsGestComandos.leftMarginObj(9,1,0,210); 
    },

    create : function() {
    	dialogsGestComandos = dialogs.create('dialogsGestComandos',0,0,718,259,'GESTIÓN DE COMANDOS');
    	dialogsGestComandos.setAdjY(60);		
		pcbGestComLugar = powerComboBox.create('pcbGestComLugar','pcbGestComLugar','Lugar:',1,55);
		pcbGestComLugar.setValidEmpty();
		pcbGestComLugar.enableReadOnlyEditor();
		pcbGestComLugar.addEmptyOption();
		pcbGestComLugar.enableOnChangeToEmptyOption();
		pcbGestComComando = powerComboBox.create('pcbGestComComando','pcbGestComComando','Comando:',1,70);
		pcbGestComComando.setValidEmpty();
		pcbGestComComando.enableReadOnlyEditor();
		pcbGestComComando.addEmptyOption();
		pcbGestComComando.setFieldFind(true);
		pcbGestComComando.enableOnChangeToEmptyOption();			
    	editsGestComCedula = edits.create('editsGestComCedula','editsGestComCedula','C.i. (*):',1,55,'normal');
    	editsGestComCedula.setValidInteger();
      	editsGestComCedula.setFieldFind(true);
      	editsGestComNombre = edits.create('editsGestComNombre','editsGestComNombre','Nombre (*):',1,71,'normal');
      	editsGestComNombre.setValidEmpty();
      	editsGestComNombre.setFieldFind(true);
      	editsGestComApellido = edits.create('editsGestComApellido','editsGestComApellido','Apellido (*):',1,70,'normal');
      	editsGestComApellido.setValidEmpty();
      	editsGestComApellido.setFieldFind(true);		
		editsGestComTelefono = edits.create('editsGestComTelefono','editsGestComTelefono','Telefono:',1,55,'normal');
    	editsGestComTelefono.setValidInteger();
      	editsGestComTelefono.setFieldFind(true);		
		labelsGestComandos = labels.create('labelsGestComandos','Monitor:',1);			
		memoGestComandos = memo.create('memoGestComandos','', 1, 0, 0);
		memoGestComandos.vAlignCaption('middle');
		memoGestComandos.setDimension(672, 100);
		memoGestComandos.setMaxLength(300);
		memoGestComandos.setValidEmpty(); 		
    	imgButtonsGestComEnvTexto = imgButtons.create('imgButtonsGestComEnvTexto', 'Enviar Sms', 'enviar_sms.png');
      	imgButtonsGestComSalir = imgButtons.create('imgButtonsGestComSalir','Salir','salir.png');
      	this.isCreate=true;
	},

	init : function() {
		this.create();
		this.setEvents(); 
		this.dialogsGestComandos_Init();
		this.createMWs();
	},
	
	limpiarFind : function(ix) {
		editsGestComCedula.hideId = -1;
		
  		switch (ix) {
		case 1: 
			editsGestComNombre.setValue("");
			editsGestComApellido.setValue("");  		
			break;
		case 2: 
			editsGestComCedula.setValue("");
			editsGestComApellido.setValue("");  		
			break;
		default:
			editsGestComCedula.setValue("");
		    editsGestComNombre.setValue("");
			break;
		} 
  	},

   	buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");

    	if (editsGestComCedula.getValue() != '' && editsGestComNombre.getValue() != '' && editsGestComApellido.getValue() != '') {
	  		this.coreUpdate();
		}
		else if (editsGestComCedula.getValue() != '' || editsGestComNombre.getValue() != '' || editsGestComApellido.getValue() != '') {
        	ResuBusqueda.setObjectExtFnc(editsGestComCedula, editsGestComNombre, editsGestComApellido, 'GestComandos.buscar()');
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsGestComCedula, editsGestComCedula, editsGestComNombre, editsGestComNombre, editsGestComApellido, editsGestComApellido);
		}
		else {
			Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},
	
    limpiar : function() {
    	editsGestComCedula.hideId = -1;
  		editsGestComCedula.setValue(""); 
  		editsGestComNombre.setValue(""); 
  		editsGestComApellido.setValue(""); 
  		dialogsGestComandos.setMsg("");
	},

	setEvents: function() {
		editsGestComCedula.onEnter(this.windowName + ".buscar()");
  		editsGestComCedula.onChange(this.windowName + ".limpiarFind(1)");
  		editsGestComNombre.onEnter(this.windowName + ".buscar()");
  		editsGestComNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsGestComApellido.onEnter(this.windowName + ".buscar()");
  		editsGestComApellido.onChange(this.windowName + ".limpiarFind(3)");
  		imgButtonsGestComEnvTexto.onClick(this.windowName + ".buscar()");
        imgButtonsGestComSalir.onClick('dialogsGestComandos.close()');
    },
	
	
	coreUpdate: function() {
        var rlx = xmlStructs.createRecordList("rlx");

        if (editsGestComCedula.valid(dialogsGestComandos))
			if (editsGestComNombre.valid(dialogsGestComandos))
				if (editsGestComApellido.valid(dialogsGestComandos)) { 
					rlx.addInt('reg', editsGestComCedula.hideId);
					rlx.addInt('reg', editsGestComCedula.hideId);
					//Tool.cnnSrv('ReportObject', 'getInformacion', this.windowName + '.visualizar()', rlx);
				}
    }
};

