var dialogsAdmImgPdf = new Object();
var pcbAdmImgOrg = new Object();
var pcbAdmSlaImagen = new Object();
var pcbAdmImgLogImagen = new Object();
var imagesAdmImgSlaPdf = new Object();
var imagesAdmImgSlaImagen = new Object();		
var imagesAdmImgLogBanImagen = new Object();
var pcbAdmPubDoc = new Object();
var imagesAdmPubDoc = new Object();
var imgButtonsAdmImgPdfSalir = new Object();
var mwAdmImgPdf = new Object();// minWindow

var AdmImgPdf = {
	windowName : 'AdmImgPdf',
	isCreate : false,
	idProfesion : 0,
	
   	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsAdmImgPdf.isByClean())
 			this.limpiar();			
		dialogsAdmImgPdf.show();
	},
	
	hide : function() {
		dialogsAdmImgPdf.hide();
	},
	
	createMWs : function() {
        mwAdmImgPdf = desktop.addMinWindow('Adm. Public.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsAdmImgPdf.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsAdmImgPdf_Init : function() {
        dialogsAdmImgPdf.setMinimizeXY(0,0);
        dialogsAdmImgPdf.setCenterScreen();
        dialogsAdmImgPdf.addSpace(0,0,20);
        dialogsAdmImgPdf.addLn(1,1,1);
		dialogsAdmImgPdf.setHeightCell(1,1,46);  
		dialogsAdmImgPdf.addObject(pcbAdmImgOrg,30,37);
		pcbAdmImgOrg.setWidthCombo(200);		  
		var c1 = container.create("c1",'Diapositiva', 3);		
		c1.setDimension(462,102);
		c1.setMarginLeftBarTitle(20);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#1e1e1e');		
		c1.addObject(pcbAdmSlaImagen,30,112);		

		pcbAdmSlaImagen.addOptionAndSimpleValue(null, 'Foto 01', 'imagen_1');
        pcbAdmSlaImagen.addOptionAndSimpleValue(null, 'Foto 02', 'imagen_2');
        pcbAdmSlaImagen.addOptionAndSimpleValue(null, 'Foto 03', 'imagen_3');
        pcbAdmSlaImagen.addOptionAndSimpleValue(null, 'Foto 04', 'imagen_4');
        pcbAdmSlaImagen.addOptionAndSimpleValue(null, 'Foto 05', 'imagen_5');
        pcbAdmSlaImagen.addOptionAndSimpleValue(null, 'Foto 06', 'imagen_6');
        pcbAdmSlaImagen.addOptionAndSimpleValue(null, 'Foto 07', 'imagen_7');
        pcbAdmSlaImagen.addOptionAndSimpleValue(null, 'Foto 08', 'imagen_8');		
		pcbAdmSlaImagen.addOptionAndSimpleValue(null, 'Foto 09', 'imagen_9');
        pcbAdmSlaImagen.addOptionAndSimpleValue(null, 'Foto 10', 'imagen_10');
        pcbAdmSlaImagen.addOptionAndSimpleValue(null, 'Foto 11', 'imagen_11');
        pcbAdmSlaImagen.addOptionAndSimpleValue(null, 'Foto 12', 'imagen_12');			
		imagesAdmImgSlaPdf.setSize(20,17);		
		c1.addObject(imagesAdmImgSlaPdf,357,111);
		c1.addObject(imagesAdmImgSlaImagen,392,74);
		imagesAdmImgSlaImagen.setSize(96,80);		
		dialogsAdmImgPdf.addObjToDialog(c1, 2, 1);		
		dialogsAdmImgPdf.addLn(3,1,1);
		dialogsAdmImgPdf.setHeightCell(3,1,17);		
		var c2 = container.create("c2",'Logo/Membrete', 2);			
		c2.setDimension(462,102);
		c2.setMarginLeftBarTitle(20);
		c2.setPropertyMarco('groove',1,'#7e7e7e');
		c2.setFontTitle('verdana', 11, '#1e1e1e');
		c2.addObject(pcbAdmImgLogImagen,30,235);	
		c2.addObject(imagesAdmImgLogBanImagen,392,195);
		c2.addObject(pcbAdmPubDoc,30,310);
		c2.addObject(imagesAdmPubDoc,357,309);
		dialogsAdmImgPdf.addObjToDialog(c2, 4, 1);		
        dialogsAdmImgPdf.addObject(imgButtonsAdmImgPdfSalir,215,340);         	
	},
	
	create : function() {
		dialogsAdmImgPdf = dialogs.create('dialogsAdmImgPdf',0,0,502,350,'ADMINISTRADOR PUBLICIDAD');
		dialogsAdmImgPdf.setAdjY(50);		
		dialogsAdmImgPdf.style.zIndex = '10000';		
		pcbAdmImgOrg = powerComboBox.create('pcbAdmImgOrg','pcbAdmImgOrg','Organización (*):',1,101);
		pcbAdmImgOrg.setValidEmpty();
		pcbAdmImgOrg.addEmptyOption();
		pcbAdmImgOrg.enableReadOnlyEditor();
		pcbAdmImgOrg.enableOnChangeToEmptyOption();
		pcbAdmSlaImagen = powerComboBox.create('pcbAdmSlaImagen','pcbAdmSlaImagen','Imagen (*):',1,101);
		pcbAdmSlaImagen.setValidEmpty();
		pcbAdmSlaImagen.addEmptyOption();
		pcbAdmSlaImagen.enableReadOnlyEditor();	
		pcbAdmSlaImagen.enableOnChangeToEmptyOption();
		pcbAdmSlaImagen.setWidthCombo(200);		
		imagesAdmImgSlaPdf = images.create('imagesAdmImgSlaPdf','imagesAdmImgSlaPdf','images/pdf_2.png');
		imagesAdmImgSlaImagen = images.create('imagesAdmImgSlaImagen','imagesAdmImgSlaImagen','images/pht/anonymous.png');
		imagesAdmImgLogBanImagen = images.create('imagesAdmImgLogBanImagen','imagesAdmImgLogBanImagen','images/pht/anonymous.png');
		imagesAdmImgLogBanImagen.setSize(96,80);		
		/////////////CREAR HINT//////////////////////////////////////////////////////////////////////////////////////////////////		
		hint.create();
		hint.addToHintWithPos(imagesAdmImgSlaPdf,"Buscar Documento",imagesAdmImgSlaPdf.x1+267,imagesAdmImgSlaPdf.y1+83);		
		xFunct = function(){hint.setPosition(imagesAdmImgSlaPdf, dialogsAdmImgPdf.x1+267, dialogsAdmImgPdf.y1+83);};
		hint.onMouseOver('xFunct()');				
		/////////////CREAR HINT//////////////////////////////////////////////////////////////////////////////////////////////////		
		pcbAdmImgLogImagen = powerComboBox.create('pcbAdmImgLogImagen','pcbAdmImgLogImagen','Imagen (*):',1,101);
		pcbAdmImgLogImagen.setValidEmpty();
		pcbAdmImgLogImagen.addEmptyOption();
		pcbAdmImgLogImagen.enableReadOnlyEditor();
		pcbAdmImgLogImagen.enableOnChangeToEmptyOption();
		pcbAdmImgLogImagen.setWidthCombo(200);	
		imgButtonsAdmImgPdfSalir = imgButtons.create('imgButtonsAdmImgPdfSalir','Salir','salir.png');
		imgButtonsAdmImgPdfSalir.setDimension(90,22);   		
		pcbAdmPubDoc = powerComboBox.create('pcbAdmPubDoc','pcbAdmPubDoc','Documento (*):',1,101);
		pcbAdmPubDoc.setValidEmpty();
		pcbAdmPubDoc.addEmptyOption();
		pcbAdmPubDoc.enableReadOnlyEditor();	
		pcbAdmPubDoc.setWidthCombo(200);		
		imagesAdmPubDoc = images.create('imagesAdmPubDoc','imagesAdmPubDoc','images/pdf_2.png');
		imagesAdmPubDoc.setSize(20,17);	
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsAdmImgPdf_Init();		
		this.createMWs();
	},

  	limpiar : function() { 
  		imagesAdmImgSlaPdf.getObject().refresh = true;
  		imagesAdmImgSlaImagen.getObject().refresh = true;
  		imagesAdmImgLogBanImagen.getObject().refresh = true;
  		imagesAdmPubDoc.getObject().refresh = true;
  		pcbAdmSlaImagen.setSizeHeight(200);
		pcbAdmImgLogImagen.setSizeHeight(200);  
		pcbAdmImgOrg.clear();
		imagesAdmImgSlaImagen.setSource('images/pht/anonymous.png');
		imagesAdmImgLogBanImagen.setSource('images/pht/anonymous.png');
  		dialogsAdmImgPdf.setMsg(""); 
		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");	
  	},

	loadDataInit: function() {
	    Tool.loadPowerComboData(dialogsAdmImgPdf, pcbAdmImgOrg, 0, 1, json('getData'));
  		if (json('getData').data[0].length == 1) {
			pcbAdmImgOrg.setSelectedIndex(1);
			this.setDataOrg();
  		}
		dlgWait.hide();	
	},

	getIdProcess : function(incPcs) {
		var pcs = pcbAdmSlaImagen.getText();
		return parseInt(pcs.substring(pcs.lastIndexOf("_") + 1, pcs.length)) + parseInt(incPcs);
	},
	
  	setEvents : function() {
  		pcbAdmImgOrg.onChange(this.windowName + ".setDataOrg()");
		pcbAdmSlaImagen.onChange(this.windowName + ".setDataSlider()");
		pcbAdmImgLogImagen.onChange(this.windowName + ".setDataLogBan()");
		imagesAdmImgSlaImagen.onClick(this.windowName + ".copyImgSlider()");
		imagesAdmImgSlaPdf.onClick(this.windowName + ".copyPdfDiapositiva()");
		imagesAdmImgLogBanImagen.onClick(this.windowName + ".copyImgLogBan()");
		imagesAdmPubDoc.onClick(this.windowName + ".copyPdfLogoMembrete()");
  		imgButtonsAdmImgPdfSalir.onClick("dialogsAdmImgPdf.close()");
  	},

  	loadFileOnlyPortal: function() {
  		pcbAdmPubDoc.addOptionAndSimpleValue(null, 'Calendario', 'calendario_insiemp.pdf');
  		pcbAdmPubDoc.addOptionAndSimpleValue(null, 'Servicio', 'servicio_insiemp.pdf');
  		pcbAdmPubDoc.addOptionAndSimpleValue(null, 'Presupuesto', 'presupuesto_insiemp.pdf');
  		pcbAdmImgLogImagen.addOptionAndSimpleValue(null, 'Publicidad Pagina Fija (JPG)', 'bienvenido.jpg');
  	},

  	setDataOrg: function() {
  	    imagesAdmImgSlaImagen.getObject().onerror = function() {imagesAdmImgSlaImagen.setSource('images/pht/anonymous.png')};
  	    imagesAdmImgLogBanImagen.getObject().onerror = function() {imagesAdmImgLogBanImagen.setSource('images/pht/anonymous.png')};
  		if (pcbAdmImgOrg.getOption() == '')
  			pcbAdmImgOrg.setSelectedIndex(1);
  		
  		pcbAdmSlaImagen.setSelectedIndex(0);
  		pcbAdmPubDoc.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbAdmImgLogImagen);
  		Tool.rstPwrCmb(pcbAdmPubDoc);
  		//if (pcbAdmImgOrg.getOption() == 'PORTAL') {
  		//	this.loadFileOnlyPortal();
  		//	pcbAdmImgLogImagen.setSelectedIndex(1);
  		//	this.setDataLogBan();
  		//}
  		if (pcbAdmImgOrg.getOption() != '') {
  	        pcbAdmImgLogImagen.addOptionAndSimpleValue(null, 'Membrete Cartas (JPG)', 'banner.jpg');        
//PORTAL SHOW
//  	        if (json('portal').data[0][0] == 'OFF')
  	  			this.loadFileOnlyPortal();
  	        //pcbAdmImgLogImagen.addOptionAndSimpleValue(null, 'Escudo (PNG)', 'escudo.png');
  			pcbAdmImgLogImagen.addOptionAndSimpleValue(null, 'Emblema (GIF)', 'logo.gif');
			pcbAdmImgLogImagen.addOptionAndSimpleValue(null, 'Membrete Carnet (PNG)', 'logo_carnet.png');
			pcbAdmImgLogImagen.addOptionAndSimpleValue(null, 'Logo Ministerio (JPG)', 'logo_ministerio.jpg');
			pcbAdmImgLogImagen.addOptionAndSimpleValue(null, 'Logo Boletin Basica (JPG)','portada_boletin.jpg');           			
  			pcbAdmImgLogImagen.addOptionAndSimpleValue(null, 'Diseño Carnet Personal (PNG)', 'logo_carnet_personal.png'); 	        
  			pcbAdmImgLogImagen.addOptionAndSimpleValue(null, 'Logo Escudo de Venezuela (PNG)', 'escudo_venezuela.png');	
  	       	//pcbAdmImgLogImagen.addOptionAndSimpleValue(null, 'Logo Ministerio Educación (PNG)', 'logo_ministerio_educacion.png');	
  		}
  			
  	},

  	setDataSlider: function() {
		var folderName = '/';
		
		//if (json('portal').data[0][0] == 'ON' && pcbAdmImgOrg.getOption() != 'PORTAL')
		//	folderName = '/' + pcbAdmImgOrg.getOption() + '/';
    	imagesAdmImgSlaImagen.getObject().onerror = function() {imagesAdmImgSlaImagen.setSource('images/pht/anonymous.png')};
    	imagesAdmImgSlaImagen.setSource('images/slider' + folderName + pcbAdmSlaImagen.getText() + '.jpg');
	},

	setDataLogBan: function() {
		var fileName = '';
		
		if (pcbAdmImgLogImagen.getText() == 'bienvenido.jpg')
			fileName = pcbAdmImgLogImagen.getText();
		else {
			 if (pcbAdmImgOrg.valid(dialogsAdmImgPdf))
				 fileName = pcbAdmImgOrg.getOption() + '_' + pcbAdmImgLogImagen.getText();
			 else
				 pcbAdmImgLogImagen.setSelectedIndex(0);
		}
    	imagesAdmImgLogBanImagen.getObject().onerror = function() {imagesAdmImgLogBanImagen.setSource('images/pht/anonymous.png')};
    	imagesAdmImgLogBanImagen.setSource('images/logo/' + fileName);
	},

	getFolderNameSend: function(pcs) {
		//if (json('portal').data[0][0] == 'ON' && pcbAdmImgOrg.getOption() != 'PORTAL')
		//	return pcbAdmImgOrg.getOption() + '\\';
		//else
			if (pcs == 28)
				return pcbAdmPubDoc.getText();
			else
				return '';
	},

	copyImgSlider: function() {
		if (pcbAdmImgOrg.valid(dialogsAdmImgPdf))
			if (pcbAdmSlaImagen.valid(dialogsAdmImgPdf)) {
				if (imagesAdmImgSlaImagen.getObject().refresh) {
					if (pcbAdmSlaImagen.getOption() != '') {
						AdjuArchivos.sizeFile(10024 * 10024 * 12);
						AdjuArchivos.filter('.jpg');
						AdjuArchivos.process(this.getIdProcess(0));
						AdjuArchivos.parameter(this.getFolderNameSend());
						AdjuArchivos.show();
						imagesAdmImgSlaImagen.getObject().refresh = false;
						imagesAdmImgSlaImagen.setSource('images/pht/refresh.png');
					}
				}
				else {
					imagesAdmImgSlaImagen.getObject().refresh = true;
					this.setDataSlider();
				}
			}
	},

	copyPdfDiapositiva: function() {
		if (pcbAdmImgOrg.valid(dialogsAdmImgPdf))
			if (pcbAdmSlaImagen.valid(dialogsAdmImgPdf))
				this.copyPdf(this.getIdProcess(12));
	},
	
	copyPdfLogoMembrete: function() {
		if (pcbAdmImgOrg.valid(dialogsAdmImgPdf))
			if (pcbAdmPubDoc.valid(dialogsAdmImgPdf))
				this.copyPdf(28);
	},

	copyPdf: function(pcs) {
		if ((pcbAdmSlaImagen.getOption() != '' && pcs > 12 && pcs < 25) || (pcbAdmPubDoc.getOption() != '' && pcs == 28)) {
			AdjuArchivos.sizeFile(10024 * 10024 * 12);
			AdjuArchivos.filter('.pdf');
			AdjuArchivos.process(pcs);
			AdjuArchivos.parameter(this.getFolderNameSend(pcs));
			AdjuArchivos.show();
		}
	},

	getFileNameSend: function() {
		if (pcbAdmImgLogImagen.getText() == 'bienvenido.jpg')
			return '';
		else 
			//if (json('portal').data[0][0] == 'ON' && pcbAdmImgOrg.getOption() != 'PORTAL')
				return pcbAdmImgOrg.getOption() + '_';
			//else
				//return '';
	},

	copyImgLogBan: function() {
		var str = pcbAdmImgLogImagen.getText();

		if (pcbAdmImgOrg.valid(dialogsAdmImgPdf))
			if (pcbAdmImgLogImagen.valid(dialogsAdmImgPdf)) {
				if (imagesAdmImgLogBanImagen.getObject().refresh) {
					if (pcbAdmImgLogImagen.getOption() != '') {
						AdjuArchivos.sizeFile(10024 * 10024 * 12);
						AdjuArchivos.filter(str.substring(str.length-4, str.length));
						AdjuArchivos.process(27);
						AdjuArchivos.parameter(this.getFileNameSend() + pcbAdmImgLogImagen.getText());
						AdjuArchivos.show();
						imagesAdmImgLogBanImagen.getObject().refresh = false;
						imagesAdmImgLogBanImagen.setSource('images/pht/refresh.png');
					}
				}
				else {
					imagesAdmImgLogBanImagen.getObject().refresh = true;
					this.setDataLogBan();
				}
		}
	}
};
