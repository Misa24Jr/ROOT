var dialogsAdjuArchivos = new Object();
var iFile = document.createElement("input");
	iFile.type = "file";
	iFile.name="archivo";
var imgButtonsAdjuArcCopiar = new Object();
var imgButtonsAdjuArcEliminar = new Object();
var mwAdjuArchivos = new Object();// minWindow
var forma = new Form();

var AdjuArchivos = {
	windowName : 'AdjuArchivos',
	isCreate : false,
	proceso : '',
	parametro : '',
	fileName : '.',
	sizeArchivo : '5242880',//512Kb
	fnc : new Function(''),
	countBtn : 2,
	sizeFileReaded : 0,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsAdjuArchivos.isByClean())  
 			this.limpiar();			

		if (this.countBtn == 1) {
			imgButtonsAdjuArcEliminar.hide();
			imgButtonsAdjuArcCopiar.setPositionXY(130,68);
		}
		else {
			imgButtonsAdjuArcEliminar.show();
			imgButtonsAdjuArcCopiar.setPositionXY(79,68);
	        imgButtonsAdjuArcEliminar.setPositionXY(184,68);
		}
		this.countBtn = 2;
		dialogsAdjuArchivos.show();
	},
	
	hide : function() {
		dialogsAdjuArchivos.hide();
	},
	
	createMWs : function() {
        mwAdjuArchivos = desktop.addMinWindow('Adjuntar', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsAdjuArchivos.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsAdjuArchivos_Init : function() {
        dialogsAdjuArchivos.setMinimizeXY(0,0);
        dialogsAdjuArchivos.setCenterScreen();
        dialogsAdjuArchivos.addSpace(0,0,20);
        dialogsAdjuArchivos.addLn(1,1,1);
		dialogsAdjuArchivos.setHeightCell(1,1,12);        
		dialogsAdjuArchivos.addObjToDialog(iFile,2,1);		  	
		dialogsAdjuArchivos.addObject(imgButtonsAdjuArcCopiar,79,68);
		dialogsAdjuArchivos.addObject(imgButtonsAdjuArcEliminar,184,68);
	},
	
	create : function() {
		dialogsAdjuArchivos = dialogs.create('dialogsAdjuArchivos',0,0,345,77,'ARCHIVO');
		dialogsAdjuArchivos.setEnableMinimize(false);
		dialogsAdjuArchivos.setAdjY(50);		
		dialogsAdjuArchivos.showModal();
		dialogsAdjuArchivos.style.zIndex = '10000';
		imgButtonsAdjuArcCopiar = imgButtons.create('imgButtonsAdjuArcCopiar','Copiar','copy_1.png');
        imgButtonsAdjuArcCopiar.setDimension(84,22);
        imgButtonsAdjuArcEliminar = imgButtons.create('imgButtonsAdjuArcEliminar','Borrar','cancel.png');
        imgButtonsAdjuArcEliminar.setDimension(84,22);
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsAdjuArchivos_Init();		
		this.createMWs();		
	},

	sizeFile : function(sz) {
		this.sizeArchivo = sz;
	},
	
	process : function(proc) {
		this.proceso = proc;
	},
	
	parameter : function(param) {
		this.parametro = param;
	},
	
	filter : function(vFilter) {
		iFile.accept = vFilter;//image/png, .jpeg, .jpg, image/gif
	},
	
	limpiar : function() {
  		dialogsAdjuArchivos.setMsg("");
  	},

  	setEvents : function() {
  		imgButtonsAdjuArcCopiar.onClick(this.windowName + ".coreUpdate('copiar')");
  		imgButtonsAdjuArcEliminar.onClick(this.windowName + ".coreUpdate('borrar')");
    },
	
    filterSpecialChar : function(strValue) {
    	var strOut = "" + strValue;
    	strOut = strOut.replace(/&/gi,'_');
    	strOut = strOut.replace(/</gi,'_');
    	strOut = strOut.replace(/\\/gi,'_');
    	strOut = strOut.replace(/'/gi,'_');
  	  	strOut = strOut.replace(/´/gi,'_');
  	  	strOut = strOut.replace(/`/gi,'_');
  	  	strOut = strOut.replace(/¿/gi,'_');
  	  	strOut = strOut.replace(/¡/gi,'_');
  	  	strOut = strOut.replace(/¨/gi,'_');
  	  	strOut = strOut.replace(/ç/gi,'_');
  	  	strOut = strOut.replace(/Ñ/g,'_');
  	  	strOut = strOut.replace(/Á/g,'_');
  	  	strOut = strOut.replace(/É/g,'_');
  	  	strOut = strOut.replace(/Í/g,'_');
  	  	strOut = strOut.replace(/Ó/g,'_');
  	  	strOut = strOut.replace(/Ú/g,'_');
  	  	strOut = strOut.replace(/ñ/g,'_');
  	  	strOut = strOut.replace(/á/g,'_');
  	  	strOut = strOut.replace(/é/g,'_');
  	  	strOut = strOut.replace(/í/g,'_');
  	  	strOut = strOut.replace(/ó/g,'_');
  	  	strOut = strOut.replace(/ú/g,'_');
  	  	strOut = strOut.replace(/º/g,'_');
  	  	strOut = strOut.replace(/°/g,'_');
  	  	strOut = strOut.replace(/¬/g,'_');
  	  	strOut = strOut.replace(/·/g,'_');
  	  	strOut = strOut.replace(/ª/g,'_');
  	  	strOut = strOut.replace(/Ã/g,'_');
  	  	strOut = strOut.replace(/ã/g,'_');
  	  	strOut = strOut.replace(/Â/g,'_');
  	  	strOut = strOut.replace(/â/g,'_');
  	  	return strOut;
    },
    
    coreUpdate : function(action) {
		var flName = iFile.value;
		
		if (action == 'copiar') {
			flName = flName.substring(flName.lastIndexOf("\\") + 1, flName.length);
			this.fileName = this.filterSpecialChar(flName);
		}
		else
			this.fileName = 'anonymous' + iFile.accept;
			
    	if (this.fileName != '')
			Tool.cnnSrvUpFile(this.proceso, this.fileName, this.windowName + ".copiar('" + action + "')", this.parametro);
		else
			dialogsAdjuArchivos.setMsg("Debe seleccionar un archivo.");
    },

    getFileName : function() {
		return this.fileName;
    },

    clearFileName : function() {
		this.fileName = '.';
    },

	setExtFnc: function(fnc) {
		this.fnc = new Function(fnc);
	},

	setCountBtn: function(countBtn) {
		this.countBtn = countBtn;
	},
	
	getSizeFileReaded: function(countBtn) {
		return this.sizeFileReaded;
	},
	
    copiar : function(action) {
    	if (action == 'copiar') {
    		this.sizeFileReaded = forma.getSizeFile(iFile);
	    	if(forma.getSizeFile(iFile) < (this.sizeArchivo)) {
	    		dialogsAdjuArchivos.setMsg("");
				forma.addObject(dialogsAdjuArchivos);		
				dialogsAdjuArchivos.close();
				forma.winSend("Enviando archivo...");
				setTimeout(function(){forma.closeWin();},25000);
				document.body.appendChild(dialogsAdjuArchivos);
				iFile.type='';
				iFile.type='File';
				this.fnc();
			}
			else {
				dialogsAdjuArchivos.setMsg("DEBE COPIAR UN ARCHIVO NO MAYOR A " + this.sizeArchivo / 1024 + "KB.", true);
			}
    	}
    	else {
    		dialogsAdjuArchivos.setMsg("");
			forma.addObject(dialogsAdjuArchivos);		
			dialogsAdjuArchivos.close();
			forma.winSend("Borrando archivo...");
			setTimeout(function(){forma.closeWin();},25000);
			document.body.appendChild(dialogsAdjuArchivos);
			iFile.type='';
			iFile.type='File';
			this.fnc();
    	}
	}
}
