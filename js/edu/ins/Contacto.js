var dialogsContacto = {};
var editsContactoCi = {};
var editsContactoNombre = {};
var editsContactoApellido = {};
var editsContactoEmail = {};
var editsContactoDireccion = {};
var editsContactoCelular = {};
var imgButtonsContactoGuardar = {};
var pcbContactoPlantilla = {};
var gridContacto = {};
var imgButtonsContactoReporte = {};
var imgButtonsContactoLimpiar = {};
var imgButtonsContactoBuscar = {};
var imgButtonsContactoSalir = {}; 
var mw_Contacto = new Object();// minWindow
var foto = {};

var Contacto = {
    windowName : 'Contacto',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
			VistapreviaConstancia.show();
			VistapreviaConstancia.close();
            this.init();
            this.isCreate = true;
        }
        if (dialogsContacto.isByClean())
			this.limpiar();			
		dialogsContacto.show();
	},
	
    hide: function(){
        dialogsContacto.hide();
    },
    createMWs: function(){
        mwContacto = desktop.addMinWindow('Actualizar', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsContacto.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsContacto_Init : function(){
        dialogsContacto.setMinimizeXY(0,0);
        dialogsContacto.setCenterScreen();
        dialogsContacto.addSpace(0,0,20);
        dialogsContacto.addLn(1,1,1);
		dialogsContacto.setHeightCell(1,1,13);
		dialogsContacto.addObject(editsContactoCi,10,34);
		dialogsContacto.addObject(editsContactoNombre,270,34);
		dialogsContacto.addObject(editsContactoApellido,551,34);
		dialogsContacto.addObject(editsContactoCelular,10,64);
		dialogsContacto.addObject(editsContactoEmail,270,64);
		dialogsContacto.addObject(editsContactoDireccion,10,94);
    	dialogsContacto.addObject(pcbContactoPlantilla,10,124);
		dialogsContacto.addObject(gridContacto.getObject(),10,154);
		dialogsContacto.addObject(imgButtonsContactoGuardar,133,565);
		dialogsContacto.addObject(imgButtonsContactoReporte,243,565);
		dialogsContacto.addObject(imgButtonsContactoLimpiar,353,565);
		dialogsContacto.addObject(imgButtonsContactoBuscar,463,565);
		dialogsContacto.addObject(imgButtonsContactoSalir,573,565);
    },

    initGrid : function(){
    	gridContacto.setFixColRow(false,true);
    	gridContacto.addTitleVectorX(["id","¿PREGUNTA?","RESPUESTA","etiqueta","idPers"]);
    	gridContacto.showData();
    	gridContacto.setSizeCol(1, 0);
    	gridContacto.setSizeCol(2, 427);
    	gridContacto.setSizeCol(3, 350);
    	gridContacto.setSizeCol(4, 0);
    	gridContacto.setSizeCol(5, 0);
    	gridContacto.hideCol(1);
    	gridContacto.hideCol(4);
    	gridContacto.hideCol(5);
    	gridContacto.setEditCol(3);
    	gridContacto.setXMLStruct(xmlStructs);
    	gridContacto.autoSaveEnable();
    },

    create : function(){
    	dialogsContacto = dialogs.create('dialogsContacto',0,0,803,580,'ACTUALIZAR CONTACTO');
		dialogsContacto.setEnableMinimize(false);
    	dialogsContacto.setAdjY(80);
    	editsContactoCi = edits.create('editsContactoCi', 'editsContactoCi', 'C.i. (*):', 1,70, 'normal');    
    	editsContactoCi.setValidInteger();
    	editsContactoCi.setFieldFind(true);
		editsContactoCi.setSizeEdit(149);
		editsContactoNombre = edits.create('editsContactoNombre', 'editsContactoNombre', 'Nombre (*):', 1,90, 'normal');
		editsContactoNombre.setValidEmpty();
		editsContactoNombre.setFieldFind(true);
		editsContactoNombre.setSizeEdit(149);
		editsContactoNombre.setMaxLength(50); 
		editsContactoApellido = edits.create('editsContactoApellido', 'editsContactoApellido', 'Apellido (*):', 1,90, 'normal');
		editsContactoApellido.setValidEmpty();
		editsContactoApellido.setFieldFind(true);
		editsContactoApellido.setSizeEdit(149);
		editsContactoApellido.setMaxLength(50);
    	editsContactoEmail = edits.create('editsContactoEmail','editsContactoEmail','Correo (Gmail):',1,90,'normal');
		editsContactoEmail.setSizeEdit(430);
    	editsContactoDireccion = edits.create('editsContactoDireccion','editsContactoDireccion','Dirección:',1,70,'normal');
		editsContactoDireccion.setSizeEdit(710);
    	editsContactoDireccion.setValidEmpty();
      	editsContactoCelular = edits.create('editsContactoCelular','editsContactoCelular','N° Celular:',1,70,'normal');
		editsContactoCelular.setSizeEdit(149);
      	editsContactoCelular.setValidEmpty();
      	editsContactoCelular.setMaskPhone();
      	editsContactoCelular.setMaxLength(20); 
    	pcbContactoPlantilla = powerComboBox.create('pcbContactoPlantilla','pcbContactoPlantilla','Formato:',1,67);
    	pcbContactoPlantilla.enableOnChangeToEmptyOption();
    	pcbContactoPlantilla.enableReadOnlyEditor();
    	pcbContactoPlantilla.addEmptyOption();
    	pcbContactoPlantilla.setValidEmpty();
    	pcbContactoPlantilla.setWidthCombo(348);
		gridContacto = grids.create("gridContacto",18,5);
      	imgButtonsContactoGuardar = imgButtons.create('imgButtonsContactoGuardar', 'Guardar.', 'ok.png');
      	imgButtonsContactoGuardar.setDimension(90, 22);
		imgButtonsContactoReporte = imgButtons.create('imgButtonsContactoReporte', 'Imprimir', 'print.png');
		imgButtonsContactoLimpiar = imgButtons.create('imgButtonsContactoLimpiar', 'Limpiar', 'limpiar.png');
      	imgButtonsContactoBuscar = imgButtons.create('imgButtonsContactoBuscar','Buscar','icono_buscar.png');
		imgButtonsContactoSalir = imgButtons.create('imgButtonsContactoSalir', 'Salir', 'salir.png');
		imgButtonsContactoReporte.setDimension(90, 22);
		imgButtonsContactoLimpiar.setDimension(90, 22);
		imgButtonsContactoBuscar.setDimension(90, 22);
		imgButtonsContactoSalir.setDimension(90, 22);
	},

	init : function() {
		this.create();
		this.setEvents(); 
		this.initGrid();
		this.dialogsContacto_Init();
		this.createMWs();
	},
	
	setMask : function(){
		editsContactoCelular.setMaskPhone(json('getDiscInter').data[0]);	
	},
  	
	loadContacto: function() {
  		editsContactoCelular.setValue(json('getContacto').data[0][0]); 		
  		editsContactoEmail.setValue(json('getContacto').data[1][0]); 
  		editsContactoDireccion.setValue(json('getContacto').data[2][0]); 
  		dialogsContacto.setMsg(xmlHttpReq.objStsResponse.shortInfo);
		Tool.getPowerComboDataFnc(this.windowName + '.loadGrid()', 'ReportObject', 'getPlantillaConstancia', dialogsContacto, pcbContactoPlantilla, -1, 1, new MiniDataSet('6', 'str', false));        		
    },

	findContacto : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		rlx.addInt('reg', editsContactoCi.hideId);
		Tool.cnnSrv('MantObject', 'getContactoInit', this.windowName + '.loadContacto()', rlx);
	},
  	
	loadGrid : function() {
//		if (editsContactoCi.valid(dialogsContacto))
//			if (editsContactoNombre.valid(dialogsContacto)) 
//				if (editsContactoApellido.valid(dialogsContacto)) {
					if (pcbContactoPlantilla.getOption() == '')	pcbContactoPlantilla.setSelectedIndex(1);
			    	gridContacto.clean();
					Tool.getGridData('ReportObject', 'getEtiqueta', dialogsContacto, gridContacto, 'imgButtonsContactoReporte.setEnable()', pcbContactoPlantilla.setModeReturnGetText(0), new MiniDataSet(editsContactoCi.hideId, 'int', false));	
//				}
    },

	setEvents: function() {
		editsContactoCi.onEnter(this.windowName + ".buscar()");
		editsContactoCi.onChange(this.windowName + ".limpiarFind(1)");
		editsContactoCi.onClick(this.windowName + ".limpiarFind(1)");
		editsContactoNombre.onEnter(this.windowName + ".buscar()");
		editsContactoNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsContactoNombre.onClick(this.windowName + ".limpiarFind(2)");
		editsContactoApellido.onEnter(this.windowName + ".buscar()");
		editsContactoApellido.onChange(this.windowName + ".limpiarFind(3)");
		editsContactoApellido.onClick(this.windowName + ".limpiarFind(3)");
		pcbContactoPlantilla.onChange(this.windowName + ".loadGrid()");
		editsContactoCelular.onFocus(this.windowName +".setMask()");
		imgButtonsContactoGuardar.onClick(this.windowName + ".coreUpdate()");
		imgButtonsContactoReporte.onClick(this.windowName + ".coreUpdateImprimir()");        
		imgButtonsContactoLimpiar.onClick(this.windowName + ".limpiar()");
    	imgButtonsContactoBuscar.onClick(this.windowName + ".buscar()");
		imgButtonsContactoSalir.onClick("dialogsContacto.close();");
	},

	limpiar : function() {
		editsContactoCi.hideId = -1;
  		editsContactoCi.clear();
  		editsContactoNombre.clear();
  		editsContactoApellido.clear();
  		editsContactoCelular.clear(); 
  		editsContactoEmail.setValue("@gmail.com"); 
		editsContactoEmail.clear();
  		editsContactoDireccion.clear(); 
		pcbContactoPlantilla.setSelectedIndex(0);
		gridContacto.clean();
		imgButtonsContactoReporte.setDisable();
  		dialogsContacto.setMsg("");
    	Tool.cnnSrv("InscripObject", "getCargarPersona", this.windowName + ".loadDataPers()")	
	},
    
	loadDataPers : function() {
		editsContactoCi.readOnly(true);
  	   	editsContactoNombre.readOnly(true);
  	   	editsContactoApellido.readOnly(true);
  	   	editsContactoCi.onEnter("");
  		editsContactoCi.onChange("");
  		editsContactoNombre.onEnter("");
  		editsContactoNombre.onChange("");
  		editsContactoApellido.onEnter("");
  		editsContactoApellido.onChange("");
    	if (json('getPermiso').data[0] != 'ACTIVO') {
  			editsContactoCi.setValue(json('getDatoPersona').data[0]);
  	  		editsContactoNombre.setValue(json('getDatoPersona').data[1]);
  	  		editsContactoApellido.setValue(json('getDatoPersona').data[2]);
  	  		editsContactoCi.hideId = json('getDatoPersona').data[3];
  	  		this.findContacto();
  		}
    	else {
  	    	editsContactoCi.readOnly(false);
  	    	editsContactoNombre.readOnly(false);
  	    	editsContactoApellido.readOnly(false);
  		  	editsContactoCi.onEnter(this.windowName + ".buscar()");
  		  	editsContactoCi.onChange(this.windowName + ".limpiarFind(1)");
  		  	editsContactoNombre.onEnter(this.windowName + ".buscar()");
  		  	editsContactoNombre.onChange(this.windowName + ".limpiarFind(2)");
  		  	editsContactoApellido.onEnter(this.windowName + ".buscar()");
  		  	editsContactoApellido.onChange(this.windowName + ".limpiarFind(3)");
			Tool.getPowerComboDataFnc(this.windowName + '.loadGrid()', 'ReportObject', 'getPlantillaConstancia', dialogsContacto, pcbContactoPlantilla, -1, 1, new MiniDataSet('6', 'str', false));        		
    	}
        dialogsContacto.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    limpiarFind : function(ix) {
    	editsContactoCi.hideId = -1;
  		switch (ix) {
		case 1: 
			editsContactoNombre.setValue("");
			editsContactoApellido.setValue("");  		
			break;
		case 2: 
			editsContactoCi.setValue("");
			editsContactoApellido.setValue("");  		
			break;
		default:
			editsContactoCi.setValue("");
		    editsContactoNombre.setValue("");
			break;
		} 
  	},

  	buscar: function() {
		if (editsContactoCi.getValue() !== '' || editsContactoNombre.getValue() !== '' || editsContactoApellido.getValue() !== '') {
			ResuBusqueda.setObjectExtFnc(editsContactoCi, editsContactoNombre, editsContactoApellido, this.windowName + ".findContacto()");
			Tool.getGridData('MantObject', 'getMantPersTodas', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsContactoCi, editsContactoCi, editsContactoNombre, editsContactoNombre, editsContactoApellido, editsContactoApellido);
		}
		else {
			Alert.show('Debe ingresar al menos: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
	},

	reporte : async function() {
		var txt = '';	
		
		async function prt(j, pos, tot) {
			return await new Promise( (resolve, reject)=> {
				try {
					richEditVistapreviaConstancia.cleanLabelDescription();
					richEditVistapreviaConstancia.setText(pcbContactoPlantilla.setModeReturnGetText(2).getText());			
					//ETIQUETAS DE LA BD
					for(var i=0; i<j.fields.length; i++){
						richEditVistapreviaConstancia.addLabelDescription(j.fields[i], j.data[i][0]);
					};
					//ETIQUETAS DEL GRID		
					for(var f = 0; f < gridContacto.getDataStructObj().data[0].length; f++){
						if (parseInt(gridContacto.getDataRowStruct(f)[0], 10) != ''){
							richEditVistapreviaConstancia.addLabelDescription(gridContacto.getDataRowStruct(f)[1], gridContacto.getDataRowStruct(f)[2]);
						}
					};
					richEditVistapreviaConstancia.setText(richEditVistapreviaConstancia.replaceAllLabels(richEditVistapreviaConstancia.getText()));					
					if(pos < tot && pos > 0){
						richEditVistapreviaConstancia.addPageBreak();
					}
					var txt = richEditVistapreviaConstancia.getText();
					resolve({sts:true, position : pos, total: tot, content : txt});
				}
				catch(e){
					reject(e);
				}	
			});
		}
		prt(json('getConstanciasPorAlumno', 0, 1), false);
		//margenes y tipo de papel
		richEditVistapreviaConstancia.setOrientation(pcbContactoPlantilla.setModeReturnGetText(3).getText());
		richEditVistapreviaConstancia.setMarginTop(pcbContactoPlantilla.setModeReturnGetText(4).getText());
		richEditVistapreviaConstancia.setMarginLeft(pcbContactoPlantilla.setModeReturnGetText(5).getText());
		richEditVistapreviaConstancia.setMarginRight(pcbContactoPlantilla.setModeReturnGetText(6).getText());	
		setTimeout( ()=>{
			richEditVistapreviaConstancia.print();
			VistapreviaConstancia.close();
		}, 1000);
    },
   
    coreUpdateImprimir: function() {
    	VistapreviaConstancia.show();
    	var rlx = xmlStructs.createRecordList("rlx");

    	VistapreviaConstancia.close();
    	if (pcbContactoPlantilla.valid(dialogsContacto))
//    		if (editsContactoCi.valid(dialogsContacto)) {
				rlx.add('reg', pcbContactoPlantilla.setModeReturnGetText(7));
				rlx.addInt('reg', editsContactoCi.hideId);
				Tool.cnnSrv('ReportObject', 'getConstanciasPorAlumno', this.windowName + '.reporte()', rlx);
//    		}    	
	},
	
	rpsCoreUpdateQuestion : function() {
		Alert.show('Su Información fue actualizada.', 'SISTEMA', Alert.TYPE_INFO);
		this.buscar();
	},
	
	rpsCoreUpdate : function() {
		if(gridContacto.getDataStructObj().data[0].length > 0 && gridContacto.getXMLStruct("rlxListaEval", [3]).includeRecords.length > 0) {
			Tool.cnnSrv('MantObject', 'guardarPregunta', this.windowName + '.rpsCoreUpdateQuestion()', gridContacto.getXMLStruct("rlxListaEval", [3]));	
		}
		else {
			Alert.show('Su Información fue actualizada.', 'SISTEMA', Alert.TYPE_INFO);
		}
	},
	
	coreUpdate: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsContactoCi.valid(dialogsContacto))
			if (editsContactoNombre.valid(dialogsContacto)) 
				if (editsContactoApellido.valid(dialogsContacto)) 
					if (editsContactoCelular.valid(dialogsContacto))
						if (editsContactoDireccion.valid(dialogsContacto)) {
							rlx.add('reg', editsContactoCelular);
							rlx.add('reg', editsContactoEmail);
							rlx.add('reg', editsContactoDireccion);
							rlx.addInt('reg', editsContactoCi.hideId);
							Tool.cnnSrv("MantObject", "guardarContacto", this.windowName + ".rpsCoreUpdate()", rlx);
						}
	}
};