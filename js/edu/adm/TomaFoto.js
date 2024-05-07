var dialogsTomaFoto = new Object();
var imagesTomaFoto = new Object();
var editsTomaFotCedula = new Object();
var editsTomaFotNombre = new Object();
var editsTomaFotApellido = new Object();
var imgBtnFotBuscar = new Object();
var mw_TomaFoto = new Object();// minWindow
       
var TomaFoto = {
    windowName : 'TomaFoto',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsTomaFoto.isByClean())
			this.limpiar();			
		dialogsTomaFoto.show();
	},
	
    hide: function(){
        dialogsTomaFoto.hide();
    },
    createMWs: function(){
        mwTomaFoto = desktop.addMinWindow('Foto', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsTomaFoto.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsTomaFoto_Init : function(){
        dialogsTomaFoto.setMinimizeXY(0,0);
        dialogsTomaFoto.setCenterScreen();
        dialogsTomaFoto.addSpace(0,0,20);
        dialogsTomaFoto.addLn(1,1,1);
		dialogsTomaFoto.setHeightCell(1,1,13);		
		dialogsTomaFoto.addObject(imagesTomaFoto,10,30);
		dialogsTomaFoto.addObject(editsTomaFotCedula,10,234);
		dialogsTomaFoto.addObject(editsTomaFotNombre,10,264);
		dialogsTomaFoto.addObject(editsTomaFotApellido,10,294);
		dialogsTomaFoto.addObject(imgBtnFotBuscar,45,324);
    },

    create : function(){
    	dialogsTomaFoto = dialogs.create('dialogsTomaFoto',0,0,220,315,'FOTO');
		dialogsTomaFoto.setEnableMinimize(false);
    	dialogsTomaFoto.setAdjY(80);
		imagesTomaFoto = images.create('imagesTomaFoto','imagesTomaFoto','images/pht/anonymous.png');
		imagesTomaFoto.setSize(200,199);
    	editsTomaFotCedula = edits.create('editsTomaFotCedula','editsTomaFotCedula','C.i. (*):',1,72,'normal');
		editsTomaFotCedula.setSizeEdit(125);
    	editsTomaFotCedula.setValidInteger();
      	editsTomaFotCedula.setFieldFind(true);
      	editsTomaFotNombre = edits.create('editsTomaFotNombre','editsTomaFotNombre','Nombre (*):',1,72,'normal');
		editsTomaFotNombre.setSizeEdit(125);
      	editsTomaFotNombre.setValidEmpty();
      	editsTomaFotNombre.setFieldFind(true);
      	editsTomaFotApellido = edits.create('editsTomaFotApellido','editsTomaFotApellido','Apellido (*):',1,72,'normal');
		editsTomaFotApellido.setSizeEdit(125);		
      	editsTomaFotApellido.setValidEmpty();
      	editsTomaFotApellido.setFieldFind(true);   	
      	imgBtnFotBuscar = imgButtons.create('imgBtnFotBuscar','Buscar','icono_buscar.png');
		imgBtnFotBuscar.setDimension(130,22);
  		imgBtnFotBuscar.onClick(this.windowName + ".buscar()");
      	this.isCreate=true;
	},

	init : function(){
		this.create();
		this.setEvents(); 
		this.dialogsTomaFoto_Init();
		this.createMWs();
	},
	
	setEvents: function() {
		editsTomaFotCedula.onEnter(this.windowName + ".buscar()");
		editsTomaFotCedula.onChange(this.windowName + ".limpiarFind(1)");
		editsTomaFotCedula.onClick(this.windowName + ".limpiarFind(1)");
  		editsTomaFotNombre.onEnter(this.windowName + ".buscar()");
  		editsTomaFotNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsTomaFotNombre.onClick(this.windowName + ".limpiarFind(2)");
  		editsTomaFotApellido.onEnter(this.windowName + ".buscar()");
  		editsTomaFotApellido.onChange(this.windowName + ".limpiarFind(3)");
  		editsTomaFotApellido.onClick(this.windowName + ".limpiarFind(3)");
  		imagesTomaFoto.onClick(this.windowName + ".copyPhoto()");
	},

	limpiarFind : function(ix) {
		editsTomaFotCedula.hideId = -1;
  		switch (ix) {
		case 1: 
			editsTomaFotNombre.setValue("");
			editsTomaFotApellido.setValue("");  		
			break;
		case 2: 
			editsTomaFotCedula.setValue("");
			editsTomaFotApellido.setValue("");  		
			break;
		default:
			editsTomaFotCedula.setValue("");
		    editsTomaFotNombre.setValue("");
			break;
		} 
  	},
	
	limpiar : function() {
		imagesTomaFoto.getObject().refresh = true;
    	editsTomaFotCedula.hideId = -1;
  		editsTomaFotCedula.setValue(""); 
  		editsTomaFotNombre.setValue(""); 
  		editsTomaFotApellido.setValue(""); 
  		imagesTomaFoto.setSource('images/pht/anonymous.png');
  		dialogsTomaFoto.setMsg("");
	},

	buscar: function() {
		imagesTomaFoto.getObject().refresh = true;
		if (editsTomaFotCedula.getValue() != '' || editsTomaFotNombre.getValue() != '' || editsTomaFotApellido.getValue() != '') {
			ResuBusqueda.setObjectExtFnc(editsTomaFotCedula, editsTomaFotNombre, editsTomaFotApellido, this.windowName + ".getPhoto()");
			Tool.getGridData('MantObject', 'getMantPersTodas', dialogsTomaFoto, gridsResuBusqueda, 'ResuBusqueda', editsTomaFotCedula, editsTomaFotCedula, editsTomaFotNombre, editsTomaFotNombre, editsTomaFotApellido, editsTomaFotApellido);
		}
		else {
			Alert.show('Debe ingresar al menos: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
	},
	
	getPhoto : function() {
		if (editsTomaFotCedula.valid(dialogsTomaFoto))
			if (editsTomaFotNombre.valid(dialogsTomaFoto))
				if (editsTomaFotApellido.valid(dialogsTomaFoto)) {
					imagesTomaFoto.getObject().onerror = function() {imagesTomaFoto.setSource('images/pht/anonymous.png')};
					imagesTomaFoto.setSource('images/pht/' + editsTomaFotCedula.getValue() + '.jpg');
				}
	},
	
	copyPhoto : function() {
		if (editsTomaFotCedula.valid(dialogsTomaFoto))
			if (editsTomaFotNombre.valid(dialogsTomaFoto))
				if (editsTomaFotApellido.valid(dialogsTomaFoto)) {
					if (imagesTomaFoto.getObject().refresh) {
						AdjuArchivos.sizeFile = 1024 * 1024 / 2;//512Kb
						AdjuArchivos.filter('.jpg');
						AdjuArchivos.process(25);
						AdjuArchivos.parameter(editsTomaFotCedula.getValue() + '.jpg');
						AdjuArchivos.show();
						imagesTomaFoto.getObject().refresh = false;
						imagesTomaFoto.setSource('images/pht/refresh.png');
					}
					else {
						imagesTomaFoto.getObject().refresh = true;
						imagesTomaFoto.getObject().onerror = function() {imagesTomaFoto.setSource('images/pht/anonymous.png')};
						imagesTomaFoto.setSource('images/pht/' + editsTomaFotCedula.getValue() + '.jpg');
					}
				}
	}
};