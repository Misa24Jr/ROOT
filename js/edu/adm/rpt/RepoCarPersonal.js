var dialogsRepoCarPersonal = {};
var editsCarnProfesorCedula = {};
var editsCarnProfesorNombre = {};
var editsCarnProfesorApellido = {};
var editsCarnProfesorCargo = {};
var imgButtonsCarnProfesorBuscar = {};
var imgButtonsCarnProfesorReporte = {};
var imgButtonsCarnProfesorSalir = {};
var mwRepoCarPersonal = {};// minWindow
       
var RepoCarPersonal = {
    windowName : 'RepoCarPersonal',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoCarPersonal.isByClean())
			this.limpiar();			
		dialogsRepoCarPersonal.show();
	},
	
    hide: function(){
        dialogsRepoCarPersonal.hide();
    },
    createMWs: function(){
        mwRepoCarPersonal = desktop.addMinWindow('CARNET', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoCarPersonal.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsRepoCarPersonal_Init : function(){
        dialogsRepoCarPersonal.setMinimizeXY(0,0);
        dialogsRepoCarPersonal.setCenterScreen();
        dialogsRepoCarPersonal.addLn(1,1,1);
		dialogsRepoCarPersonal.setHeightCell(1,1,13);		
		dialogsRepoCarPersonal.addObject(editsCarnProfesorCedula,25,40);		
		editsCarnProfesorCedula.setSizeEdit(200);
		dialogsRepoCarPersonal.addObject(editsCarnProfesorNombre,25,75);		
		editsCarnProfesorNombre.setSizeEdit(200);
		dialogsRepoCarPersonal.addObject(editsCarnProfesorApellido,25,110);		
		editsCarnProfesorApellido.setSizeEdit(200);		
		dialogsRepoCarPersonal.addObject(editsCarnProfesorCargo,25,145);		
		editsCarnProfesorCargo.setSizeEdit(200);		
        dialogsRepoCarPersonal.addObject(imgButtonsCarnProfesorBuscar,105,180);
        imgButtonsCarnProfesorBuscar.setDimension(122,22);
        dialogsRepoCarPersonal.addObject(imgButtonsCarnProfesorReporte,25,215);
        imgButtonsCarnProfesorReporte.setDimension(122,22);
		dialogsRepoCarPersonal.addObject(imgButtonsCarnProfesorSalir,184,215);
        imgButtonsCarnProfesorSalir.setDimension(122,22);   
    },

    create : function(){
    	dialogsRepoCarPersonal = dialogs.create('dialogsRepoCarPersonal',0,0,333,220,'CARNET DEL PERSONAL');
    	dialogsRepoCarPersonal.setAdjY(80);
    	editsCarnProfesorCedula = edits.create('editsCarnProfesorCedula','editsCarnProfesorCedula','C.i. *:',1,71,'normal');
    	editsCarnProfesorCedula.setValidInteger();
      	editsCarnProfesorCedula.setFieldFind(true);
      	editsCarnProfesorNombre = edits.create('editsCarnProfesorNombre','editsCarnProfesorNombre','Nombre *:',1,71,'normal');
      	editsCarnProfesorNombre.setValidEmpty();
      	editsCarnProfesorNombre.setFieldFind(true);
      	editsCarnProfesorApellido = edits.create('editsCarnProfesorApellido','editsCarnProfesorApellido','Apellido *:',1,71,'normal');
      	editsCarnProfesorApellido.setValidEmpty();
      	editsCarnProfesorApellido.setFieldFind(true);
      	editsCarnProfesorCargo = edits.create('editsCarnProfesorCargo','editsCarnProfesorCargo','Cargo :',1,71,'normal');
    	editsCarnProfesorCargo.setValidEmpty();
    	editsCarnProfesorCargo.setFieldFind(true);
      	imgButtonsCarnProfesorBuscar = imgButtons.create('imgButtonsCarnProfesorBuscar','Buscar','print.png');
      	imgButtonsCarnProfesorReporte = imgButtons.create('imgButtonsCarnProfesorReporte','Imprimir','print.png');
      	imgButtonsCarnProfesorSalir = imgButtons.create('imgButtonsCarnProfesorSalir','Salir','salir.png');
      	this.isCreate=true;
	},

	init : function(){
		this.create();
		this.setEvents(); 
		this.dialogsRepoCarPersonal_Init();
		this.createMWs();
	},
	
	limpiarFind : function(ix) {
		editsCarnProfesorCedula.hideId = -1;
		
  		switch (ix) {
		case 1: 
			editsCarnProfesorNombre.setValue("");
			editsCarnProfesorApellido.setValue("");  		
			break;
		case 2: 
			editsCarnProfesorCedula.setValue("");
			editsCarnProfesorApellido.setValue("");  		
			break;
		default:
			editsCarnProfesorCedula.setValue("");
		    editsCarnProfesorNombre.setValue("");
			break;
		} 
  		editsCarnProfesorCargo.clear();
  	},
	
	buscar: function() {
		if (editsCarnProfesorCedula.getValue() != '' || editsCarnProfesorNombre.getValue() != '' || editsCarnProfesorApellido.getValue() != '') {
			ResuBusqueda.setObjectExtFnc(editsCarnProfesorCedula, editsCarnProfesorNombre, editsCarnProfesorApellido);
			Tool.getGridData('MantObject', 'getMantPersTodas', dialogsRepoCarPersonal, gridsResuBusqueda, 'ResuBusqueda', editsCarnProfesorCedula, editsCarnProfesorCedula, editsCarnProfesorNombre, editsCarnProfesorNombre, editsCarnProfesorApellido, editsCarnProfesorApellido);
		}
		else {
			Alert.show('Debe ingresar al menos: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
	},
	
   	loadDataPers : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		editsCarnProfesorCedula.readOnly(true);
  	    editsCarnProfesorNombre.readOnly(true);
  	    editsCarnProfesorApellido.readOnly(true);
  	    editsCarnProfesorCedula.onEnter("");
  		editsCarnProfesorCedula.onChange("");
  		editsCarnProfesorNombre.onEnter("");
  		editsCarnProfesorNombre.onChange("");
  		editsCarnProfesorApellido.onEnter("");
  		editsCarnProfesorApellido.onChange("");
    	if (json('getPermiso').data[0] != 'ACTIVO') {
  			editsCarnProfesorCedula.setValue(json('getDatoPersona').data[0]);
  	  		editsCarnProfesorNombre.setValue(json('getDatoPersona').data[1]);
  	  		editsCarnProfesorApellido.setValue(json('getDatoPersona').data[2]);
  	  		editsCarnProfesorCedula.hideId = json('getDatoPersona').data[3];
  	  		rlx.add('reg', editsCarnProfesorCedula);
  		}
    	else {
  	    	editsCarnProfesorCedula.readOnly(false);
  	    	editsCarnProfesorNombre.readOnly(false);
  	    	editsCarnProfesorApellido.readOnly(false);
  		  	editsCarnProfesorCedula.onEnter(this.windowName + ".buscar()");
  		  	editsCarnProfesorCedula.onChange(this.windowName + ".limpiarFind(1)");
  		  	editsCarnProfesorNombre.onEnter(this.windowName + ".buscar()");
  		  	editsCarnProfesorNombre.onChange(this.windowName + ".limpiarFind(2)");
  		  	editsCarnProfesorApellido.onEnter(this.windowName + ".buscar()");
  		  	editsCarnProfesorApellido.onChange(this.windowName + ".limpiarFind(3)");
    	}
        dialogsRepoCarPersonal.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    limpiar : function() {
    	editsCarnProfesorCedula.hideId = -1;
  		editsCarnProfesorCedula.setValue(""); 
  		editsCarnProfesorNombre.setValue(""); 
  		editsCarnProfesorApellido.setValue(""); 
  		editsCarnProfesorCargo.clear();
  		dialogsRepoCarPersonal.setMsg("");
	},

	setEvents: function(){
		editsCarnProfesorCedula.onEnter(this.windowName + ".buscar()");
  		//editsCarnProfesorCedula.onChange(this.windowName + ".limpiarFind(1)");
  		editsCarnProfesorCedula.onClick(this.windowName + ".limpiarFind(1)");
  		editsCarnProfesorNombre.onEnter(this.windowName + ".buscar()");
		//editsCarnProfesorNombre.onChange(this.windowName + ".limpiarFind(2)");
		//editsCarnProfesorNombre.onClick(this.windowName + ".limpiarFind(2)");
  		editsCarnProfesorApellido.onEnter(this.windowName + ".buscar()");
		//editsCarnProfesorApellido.onChange(this.windowName + ".limpiarFind(3)");
		//editsCarnProfesorApellido.onClick(this.windowName + ".limpiarFind(3)");
		editsCarnProfesorCargo.onEnter(this.windowName + ".reporte()");
		imgButtonsCarnProfesorBuscar.onClick(this.windowName + ".buscar()");
		imgButtonsCarnProfesorReporte.onClick(this.windowName + ".reporte()");
    	imgButtonsCarnProfesorSalir.onClick('dialogsRepoCarPersonal.close()');
	},

    reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
        if (editsCarnProfesorCedula.valid(dialogsRepoCarPersonal))
			if (editsCarnProfesorNombre.valid(dialogsRepoCarPersonal))
				if (editsCarnProfesorApellido.valid(dialogsRepoCarPersonal))
					if (editsCarnProfesorCargo.valid(dialogsRepoCarPersonal)) {
							rep = new Report('portrait');					       
							/*
							let bc = new Barcode('myBarCode1');
							let imgCodeBar = bc.setBarCode({
								code: editsCarnProfesorCedula.getValue(), 
								format:'CODE39',
								displayValue : false
							}).getImageCode({
								id : 'myCode1',
								style:{
									position : 'absolute'
								}
							});
							*/
							rep.setPageSize(600);
							rep.setWidthReport(600);							
							rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),10,'helvetica','normal');
							rep.setPositionIcon(320,70);
							rep.addImage(0,5,285,326,imgEduca.logo_carnetpersonal,false);							
							rep.addImage(150,170,275,325,'images/pht/'+editsCarnProfesorCedula.getValue()+'.jpg',true);								
							//imgCodeBar.style.zIndex = 100000;
							//rep.addImage(30, 410, 259, 470, imgCodeBar.src, false);
							rep.addBar(0,328,285,368,rep.getRGBAObj(0,0,95,0.9),false);
							rep.addBar(0,368,285,408,rep.getRGBAObj(0,0,95,0.7),false);							
							rep.setFontProperties(rep.getRGBAObj(250,250,250,0.0),11,'arial','normal');
							rep.addText(4, 346,''+editsCarnProfesorNombre.getText()+ ' ' +editsCarnProfesorApellido.getText(),false);
							rep.setFontProperties(rep.getRGBAObj(250,250,250,0.0),12,'arial','normal');
							rep.addText(4, 364, 'C.I.: '+editsCarnProfesorCedula.getText(),false);
							//rep.addText(4, 364, 'C.I.: '+editsCarnProfesorCedula.getText(),false);
							rep.addText(4, 392,''+editsCarnProfesorCargo.getText(),false);
							rep.addText(4, 392,''+editsCarnProfesorCargo.getText(),false);
							rep.addText(4, 392,''+editsCarnProfesorCargo.getText(),false);
							rep.render();                
            				setTimeout(rep.previewHTML,700);
						}
	}
};
