var dialogsMantCamClave = new Object();
var editsMantCamClaActClave = new Object();
var editsMantCamClaNueClave = new Object();
var editsMantCamClaConClave = new Object();
var imgButtonsMantCamClaModificar = new Object();
var imgButtonsMantCamClaSalir= new Object();
var mw_MantCamClave = new Object();// minWindow

var MantCamClave = {
    windowName : 'MantCamClave',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantCamClave.isByClean())
 			this.limpiar();	
		dialogsMantCamClave.showModal();
	},
	
	hide : function() {
		dialogsMantCamClave.hide();
	},
	
	createMWs : function() {
		mwMantCamClave = desktop.addMinWindow('Cambiar Clave', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantCamClave.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantCamClave_Init: function() {
		dialogsMantCamClave.show();
		dialogsMantCamClave.setMinimizeXY(0, 0);
		dialogsMantCamClave.setCenterScreen();
		dialogsMantCamClave.addSpace(0, 0, 20);
		dialogsMantCamClave.addLn(1, 1, 1);
		dialogsMantCamClave.setHeightCell(1,1,10);
		dialogsMantCamClave.setMsg("");
		dialogsMantCamClave.setEnableMinimize(false);
		dialogsMantCamClave.addObjToDialog(editsMantCamClaActClave, 2, 1,24);
		editsMantCamClaActClave.setSizeEdit(178);
		dialogsMantCamClave.addObjToDialog(editsMantCamClaNueClave, 3, 1,24);
		editsMantCamClaNueClave.setSizeEdit(178);
		dialogsMantCamClave.addObjToDialog(editsMantCamClaConClave, 4, 1,24);
		editsMantCamClaConClave.setSizeEdit(178);
		dialogsMantCamClave.addLn(5, 1, 1);
		dialogsMantCamClave.setHeightCell(5,1,10);
		dialogsMantCamClave.addObjToDialog(imgButtonsMantCamClaModificar, 6, 1);
		dialogsMantCamClave.addObjToDialog(imgButtonsMantCamClaSalir, 6, 1);
		imgButtonsMantCamClaModificar.setDimension(90, 22);
		imgButtonsMantCamClaSalir.setDimension(90, 22);
		dialogsMantCamClave.adjAllMarginObj(6, 1, 20);
		dialogsMantCamClave.leftMarginObj(6, 1, 0, 48);
	},
	
	create: function() {
		dialogsMantCamClave = dialogs.create("dialogsMantCamClave", 0, 0, 325, 126, "CAMBIO DE CLAVE");
		editsMantCamClaActClave = edits.create("editsMantCamClaActClave", "editsMantCamClaActClave", "Clave Actual :", 1,105, "password");
		editsMantCamClaActClave.setValidEmpty();
		editsMantCamClaNueClave = edits.create("editsMantCamClaNueClave", "editsMantCamClaNueClave", "Clave Nueva :", 1,105, "password");
		editsMantCamClaNueClave.setValidEmpty();
		editsMantCamClaConClave = edits.create("editsMantCamClaConClave", "editsMantCamClaConClave", "Confirmar Clave :", 1,105, "password");
		editsMantCamClaConClave.setValidEmpty();
		imgButtonsMantCamClaModificar = imgButtons.create("imgButtonsMantCamClaModificar", 'Guardar.', 'ok.png');
		imgButtonsMantCamClaSalir = imgButtons.create("imgButtonsMantCamClaSalir", 'Salir', 'salir.png');
		editsMantCamClaActClave.setWidthBoxContainer(300);
		editsMantCamClaNueClave.setWidthBoxContainer(300);
		editsMantCamClaConClave.setWidthBoxContainer(300);
	},
			
	init: function() {
		this.create();
		this.setEvents();
		this.dialogsMantCamClave_Init();
	},
		
	setEvents : function() {
		imgButtonsMantCamClaModificar.onClick("MantCamClave.coreUpdate()");
		imgButtonsMantCamClaSalir.onClick("dialogsMantCamClave.close()");
	},

	hayNumero: function(s) {
		var cadena = "0123456789";
		
	    for (var i = 0; i < cadena.length; i++) 
	    	for (var j = 0; j < s.value.length; j++) 
	    		if (s.value.substring(j, j + 1) == cadena.substring(i, i + 1)) 
	    			return true;
	    return false;
	},
/*	  
	validarCaracter: function(s)  {
		var cadena = "\"\"\\!#$%/?¡+*}{][¨^&-_°='¿`,;:.~";
		
		s.style.color="#000000";
	    s.style.backgroundColor="#FFFFFF";
	    for (var i = 0; i < cadena.length; i++) 
	    	for (var j = 0; j < s.value.length; j++) 
	    		if (s.value.substring(j, j + 1) == cadena.substring(i, i + 1)) {
	    			dialogoMensajes.init(2, "El campo no debe contener caracteres especiales... por favor verifique");
	    			s.style.color="#FF1111";
	    			s.style.backgroundColor="#FFFF66";
	    			s.focus();
	    			return false;
	    		}
	    return true;
	},
*/	
	hayCaracter: function(s) {
		var cadena = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
		
	    for (var i = 0; i < cadena.length; i++) 
	    	for (var j = 0; j < s.value.length; j++) 
	    		if (s.value.substring(j, j + 1) == cadena.substring(i, i + 1)) 
	    			return true;
	    return false;
	},
	
	validarCambioClave : function() {
		if ((editsMantCamClaNueClave.getValue().length > 7) && (editsMantCamClaConClave.getValue().length > 7)) {
			//if (this.validarCaracter(editsMantCamClaNueClave.getEdit()) && this.validarCaracter(editsMantCamClaConClave.getEdit())) {
				if (this.hayNumero(editsMantCamClaNueClave.getEdit()) && this.hayNumero(editsMantCamClaConClave.getEdit())) {
					if (this.hayCaracter(editsMantCamClaNueClave.getEdit()) && this.hayCaracter(editsMantCamClaConClave.getEdit())) {
						if (editsMantCamClaNueClave.getValue() == editsMantCamClaConClave.getValue()) {
								return true;
						} 
						else {
							dialogsMantCamClave.setMsg("La clave y su confirmación no coinciden", true);
							return false;
						}
					} 
					else {
						dialogsMantCamClave.setMsg("La clave debe tener al menos un caracter alfanumerico.", true);
						return false;
					}
				} 
				else {
					dialogsMantCamClave.setMsg("La clave debe tener al menos un caracter numerico.", true);
					return false;
				}
/*			} 
			else {
				dialogsMantCamClave.setMsg("La clave no puede tener caracteres especiales, solo letras y numeros.", true);
				return false;
			}*/
		} 
		else {
			dialogsMantCamClave.setMsg("La clave debe tener minimo 8 caracteres", true);
			return false;
		}
	},

	limpiar : function() {
	    editsMantCamClaActClave.setValue("");
	    editsMantCamClaNueClave.setValue("");
	    editsMantCamClaConClave.setValue("");
		dialogsMantCamClave.setMsg("");
	},
	
	limpiarCoreUpdate : function() {
	    editsMantCamClaActClave.setValue("");
	    editsMantCamClaConClave.setValue("");
	    editsMantCamClaNueClave.setValue("");
	    dialogsMantCamClave.setMsg(xmlHttpReq.objStsResponse.shortInfo);
	    dlgWait.hide();
	    dialogsMantCamClave.close();
	    Alert.show('Su Clave fue actualizada.', 'SISTEMA', Alert.TYPE_INFO);
	},
	
    coreUpdate: function() {
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        
	    if (editsMantCamClaActClave.valid(dialogsMantCamClave))
	    	if (editsMantCamClaNueClave.valid(dialogsMantCamClave))
	    		if (editsMantCamClaConClave.valid(dialogsMantCamClave))
	    			if (this.validarCambioClave()) {
	    				rlx.add('reg', editsMantCamClaNueClave);
	    				rlx.addStr('reg', login.getUser());
	    				rlx.add('reg', editsMantCamClaActClave);
	    				procesar = true;
	    			}
        if (procesar) {            
			Tool.cnnSrv('SecurityObject', 'cambiarClave', this.windowName + '.limpiarCoreUpdate()', rlx);
        }
    }
};
