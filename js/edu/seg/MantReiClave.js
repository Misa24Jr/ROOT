var dialogsMantReiClave = new Object();
var editsMantReiClaPregunta = new Object();
var editsMantReiClaRespuesta = new Object();
var editsMantReiClaEmail = new Object();
var imgButtonsMantReiClaModificar = new Object();
var imgButtonsMantReiClaSalir= new Object();

var MantReiClave = {
    windowName : 'MantReiClave',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
 		this.limpiar();	
		dialogsMantReiClave.showModal();
	},
	
	hide : function() {
		dialogsMantReiClave.hide();
	},
	
	dialogsMantReiClave_Init: function() {
		dialogsMantReiClave.show();
		dialogsMantReiClave.setMinimizeXY(0, 0);
		dialogsMantReiClave.setCenterScreen();
		dialogsMantReiClave.addSpace(0, 0, 20);
		dialogsMantReiClave.addLn(1, 1, 1);
		dialogsMantReiClave.setHeightCell(1,1,10);
		dialogsMantReiClave.setMsg("");
		dialogsMantReiClave.setEnableMinimize(false);
		dialogsMantReiClave.addObjToDialog(editsMantReiClaPregunta, 2, 1,24);
		editsMantReiClaPregunta.setSizeEdit(230);
		dialogsMantReiClave.addObjToDialog(editsMantReiClaRespuesta, 3, 1,24);
		editsMantReiClaRespuesta.setSizeEdit(230);
		dialogsMantReiClave.addObjToDialog(editsMantReiClaEmail, 4, 1,24);
		editsMantReiClaEmail.setSizeEdit(230);
		dialogsMantReiClave.addLn(5, 1, 1);
		dialogsMantReiClave.setHeightCell(5,1,10);
		dialogsMantReiClave.addObjToDialog(imgButtonsMantReiClaModificar, 6, 1);
		dialogsMantReiClave.addObjToDialog(imgButtonsMantReiClaSalir, 6, 1);
		imgButtonsMantReiClaModificar.setDimension(90, 22);
		imgButtonsMantReiClaSalir.setDimension(90, 22);
		dialogsMantReiClave.adjAllMarginObj(6, 1, 25);
		dialogsMantReiClave.leftMarginObj(6, 1, 0, 71);
	},
	
	create: function() {
		dialogsMantReiClave = dialogs.create("dialogsMantReiClave", 0, 0, 383, 126, "REINICIO DE CLAVE");
		dialogsMantReiClave.setIconDlg('images/logo/', 'EDUCA_logo.gif');
		editsMantReiClaPregunta = edits.create("editsMantReiClaPregunta", "editsMantReiClaPregunta", "Pregunta Secreta:", 1,110);
		editsMantReiClaPregunta.setValidEmpty();
		editsMantReiClaRespuesta = edits.create("editsMantReiClaRespuesta", "editsMantReiClaRespuesta", "Respuesta:", 1,110);
		editsMantReiClaRespuesta.setValidEmpty();
		editsMantReiClaEmail = edits.create("editsMantReiClaEmail", "editsMantReiClaEmail", "Email:", 1,110);
		editsMantReiClaEmail.setValidEmpty();
		imgButtonsMantReiClaModificar = imgButtons.create("imgButtonsMantReiClaModificar", 'Reiniciar', 'email_4.png');
		imgButtonsMantReiClaSalir = imgButtons.create("imgButtonsMantReiClaSalir", 'Salir', 'salir.png');
	},
			
	init: function() {
		this.create();
		this.setEvents();
		this.dialogsMantReiClave_Init();
	},
		
	setEvents : function() {
		imgButtonsMantReiClaModificar.onClick("MantReiClave.coreUpdate()");
		imgButtonsMantReiClaSalir.onClick("dialogsMantReiClave.close()");
	},

	limpiar : function() {
        editsMantReiClaPregunta.setValue("");
	    editsMantReiClaRespuesta.setValue("");
	    editsMantReiClaEmail.setValue("");
		dialogsMantReiClave.setMsg("");
		Tool.getEditData('', 'ask', dialogsMantReiClave, editsMantReiClaPregunta, 0, autenticaEdit1);
	},
	
	limpiarCoreUpdate : function() {
    	autenticaEdit2.setValue("");
	    editsMantReiClaPregunta.setValue("");
	    editsMantReiClaRespuesta.setValue("");
	    editsMantReiClaEmail.setValue("");
	    dialogsMantReiClave.close();
	},
	
    coreUpdate: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
	    if (editsMantReiClaPregunta.valid(dialogsMantReiClave))
	    	if (editsMantReiClaRespuesta.valid(dialogsMantReiClave))
	    		if (editsMantReiClaEmail.valid(dialogsMantReiClave)) {
	    			rlx.add('reg', autenticaEdit1);
	    			rlx.add('reg', editsMantReiClaRespuesta);
	    			rlx.add('reg', editsMantReiClaEmail);
	    		}
		Tool.cnnSrv('', 'olvidoClave', this.windowName + '.limpiarCoreUpdate()', rlx);
    }
};
