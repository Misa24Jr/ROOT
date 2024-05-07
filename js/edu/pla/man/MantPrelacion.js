var dialogsMantPrelacion = new Object();
var powerComboBoxMantPreOrganizacion = new Object();
var powerComboBoxMantPreSuborganizacion = new Object();
var powerComboBoxMantPreCarrera = new Object();
var editsMantPrePensum = new Object();
var powerComboBoxMantPreMatTipPrelacion = new Object();
var powerComboBoxMantPreMatPrelante = new Object();
var powerComboBoxMantPreMatPrelada = new Object();
var editsMatPreNumHoras = new Object();
var gridsMantPrelacionCodDescripcion = new Object();
var imgButtonsMantPrelacionAgregar = new Object();
var imgButtonsMantPrelacionModificar = new Object();
var imgButtonsMantPrelacionEliminar = new Object();
var imgButtonsMantPrelacionLimpiar = new Object();
var imgButtonsMantPrelacionBuscar = new Object();
var imgButtonsMantPrelacionSalir = new Object();
var mwMantPrelacion = new Object();// minWindow

var MantPrelacion = {
	windowName : 'MantPrelacion',
	isCreate : false,
	idPensum : 0,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantPrelacion.isByClean())
 			this.limpiar();			
		dialogsMantPrelacion.show();
	},
	
	hide : function(){
		dialogsMantPrelacion.hide();
	},
	
	createMWs : function(){
        mwMantPrelacion = desktop.addMinWindow('M.Prelacion', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantPrelacion.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantPrelacion_Init : function(){
  	    dialogsMantPrelacion.setMinimizeXY(0,0);
        dialogsMantPrelacion.setCenterScreen();
        dialogsMantPrelacion.addSpace(0,0,20);
        dialogsMantPrelacion.addLn(1,1,1); 
		dialogsMantPrelacion.setHeightCell(1,1,10);               
        dialogsMantPrelacion.addObjToDialog(powerComboBoxMantPreOrganizacion,2,1,24);
        dialogsMantPrelacion.addObjToDialog(powerComboBoxMantPreSuborganizacion,2,1,24);        
        dialogsMantPrelacion.addObjToDialog(powerComboBoxMantPreCarrera,2,1,24);
        dialogsMantPrelacion.adjAllMarginObj(2,1,20);   
        dialogsMantPrelacion.addObjToDialog(editsMantPrePensum,3,1,24);
        editsMantPrePensum.setSizeEdit(149);
        editsMantPrePensum.readOnly(true);
        dialogsMantPrelacion.addObjToDialog(powerComboBoxMantPreMatTipPrelacion,3,1,24);        
        dialogsMantPrelacion.addObjToDialog(editsMatPreNumHoras,3,1,24);  
		editsMatPreNumHoras.setSizeEdit(149);
        editsMatPreNumHoras.setMaxLength(3);            
        dialogsMantPrelacion.adjAllMarginObj(3,1,20);
		dialogsMantPrelacion.addObjToDialog(powerComboBoxMantPreMatPrelante,4,1,24);
		powerComboBoxMantPreMatPrelante.setWidthCombo(703); 
		powerComboBoxMantPreMatPrelante.setFieldFind(true);
        dialogsMantPrelacion.addObjToDialog(powerComboBoxMantPreMatPrelada,5,1,24);    
		powerComboBoxMantPreMatPrelada.setWidthCombo(703); 
		powerComboBoxMantPreMatPrelada.setFieldFind(true);
        dialogsMantPrelacion.addLn(6,1,1);
		dialogsMantPrelacion.setHeightCell(6,1,10);   
        dialogsMantPrelacion.addObjToDialog(gridsMantPrelacionCodDescripcion.getObject(),7,1);
        dialogsMantPrelacion.addLn(8,1,1);
		dialogsMantPrelacion.setHeightCell(8,1,12);  
        dialogsMantPrelacion.addObjToDialog(imgButtonsMantPrelacionAgregar,9,1);
        dialogsMantPrelacion.addObjToDialog(imgButtonsMantPrelacionModificar,9,1);
        dialogsMantPrelacion.addObjToDialog(imgButtonsMantPrelacionEliminar,9,1);
        dialogsMantPrelacion.addObjToDialog(imgButtonsMantPrelacionLimpiar,9,1);
        dialogsMantPrelacion.addObjToDialog(imgButtonsMantPrelacionBuscar,9,1);
        dialogsMantPrelacion.addObjToDialog(imgButtonsMantPrelacionSalir,9,1);
        imgButtonsMantPrelacionAgregar.setDimension(90,22);
        imgButtonsMantPrelacionModificar.setDimension(90,22);
        imgButtonsMantPrelacionModificar.setDisable();
        imgButtonsMantPrelacionEliminar.setDimension(90,22);
        imgButtonsMantPrelacionEliminar.setDisable();
        imgButtonsMantPrelacionBuscar.setDimension(90,22);
        imgButtonsMantPrelacionLimpiar.setDimension(90,22);
        imgButtonsMantPrelacionSalir.setDimension(90,22);
        dialogsMantPrelacion.adjAllMarginObj(9,1,20);
        dialogsMantPrelacion.leftMarginObj(9,1,0,98); 
	},
  
	gridsMantPrelacionCodDescripcion_Init : function(){
		gridsMantPrelacionCodDescripcion.setFixColRow(false,true);
		gridsMantPrelacionCodDescripcion.addTitleVectorX(['Materia Prelante','Materia Prelada','Tipo de Prelación','No. Horas','idtiprelacion','idmatprelante','idmatprelada']);
		gridsMantPrelacionCodDescripcion.showData();        
		gridsMantPrelacionCodDescripcion.setSizeCol(1,335);
		gridsMantPrelacionCodDescripcion.setSizeCol(2,335);
		gridsMantPrelacionCodDescripcion.setSizeCol(3,110);
		gridsMantPrelacionCodDescripcion.setSizeCol(4,60);
		gridsMantPrelacionCodDescripcion.setSizeCol(5,0);
		gridsMantPrelacionCodDescripcion.setSizeCol(6,0);
		gridsMantPrelacionCodDescripcion.setSizeCol(7,0);
		gridsMantPrelacionCodDescripcion.hideCol(5);
		gridsMantPrelacionCodDescripcion.hideCol(6);
		gridsMantPrelacionCodDescripcion.hideCol(7);
	},

	create : function() {
	    dialogsMantPrelacion = dialogs.create('dialogsMantPrelacion',0,0,887,404,'MANTENIMIENTO DE PRELACIÓN');
	    powerComboBoxMantPreOrganizacion = powerComboBox.create('powerComboBoxMantPreOrganizacion','powerComboBoxMantPreOrganizacion','Organización (+):',1,121);
	    powerComboBoxMantPreOrganizacion.setValidEmpty();
	    powerComboBoxMantPreOrganizacion.enableReadOnlyEditor();
	    powerComboBoxMantPreOrganizacion.addEmptyOption();
	    powerComboBoxMantPreSuborganizacion = powerComboBox.create('powerComboBoxMantPreSuborganizacion','powerComboBoxMantPreSuborganizacion','Suborganización (^):',1,124);
	    powerComboBoxMantPreSuborganizacion.setValidEmpty();
	    powerComboBoxMantPreSuborganizacion.enableReadOnlyEditor();
	    powerComboBoxMantPreSuborganizacion.addEmptyOption();
	    powerComboBoxMantPreCarrera = powerComboBox.create('powerComboBoxMantPreCarrera','powerComboBoxMantPreCarrera','Carrera (^):',1,111);           
	    powerComboBoxMantPreCarrera.setValidEmpty();
	    powerComboBoxMantPreCarrera.enableReadOnlyEditor();
	    powerComboBoxMantPreCarrera.addEmptyOption();
	    powerComboBoxMantPreMatPrelante = powerComboBox.create('powerComboBoxMantPreMatPrelante','powerComboBoxMantPreMatPrelante','Materia Prelante (*):',1,121);
	    powerComboBoxMantPreMatPrelante.setValidEmpty();
	    powerComboBoxMantPreMatPrelante.enableReadOnlyEditor();
	    powerComboBoxMantPreMatPrelante.addEmptyOption();
	    powerComboBoxMantPreMatPrelante.setDataType('string');
	    powerComboBoxMantPreMatPrelada = powerComboBox.create('powerComboBoxMantPreMatPrelada','powerComboBoxMantPreMatPrelada','Materia Prelada (*):',1,121);
	    powerComboBoxMantPreMatPrelada.setValidEmpty();
	    powerComboBoxMantPreMatPrelada.enableReadOnlyEditor();
	    powerComboBoxMantPreMatPrelada.addEmptyOption();
	    powerComboBoxMantPreMatPrelada.setDataType('string');
	    editsMatPreNumHoras = edits.create('editsMatPreNumHoras','MatPais_Codigo','Numero de Horas:',1,111);
	    editsMatPreNumHoras.setValidInteger();
	    editsMatPreNumHoras.setValidEmpty();
	    powerComboBoxMantPreMatTipPrelacion = powerComboBox.create('powerComboBoxMantPreMatTipPrelacion','powerComboBoxMantPreMatTipPrelacion','Tipo de Prelación:',1,124);
	    powerComboBoxMantPreMatTipPrelacion.setValidEmpty();
	    powerComboBoxMantPreMatTipPrelacion.enableReadOnlyEditor();
	    powerComboBoxMantPreMatTipPrelacion.addEmptyOption();
	    editsMantPrePensum = edits.create('editsMantAsoMatPenPensum','editsMantAsoMatPenPensum','Pensum :',1,121,'normal');
	    editsMantPrePensum.setValidEmpty();
	    gridsMantPrelacionCodDescripcion = grids.create('gridsMantPrelacionCodDescripcion',10,7);
	    imgButtonsMantPrelacionAgregar = imgButtons.create('imgButtonsMantPrelacionAgregar','Agregar','ok.png');
	    imgButtonsMantPrelacionModificar = imgButtons.create('imgButtonsMantPrelacionModoficar','Modificar','icono_modificar.png');
	    imgButtonsMantPrelacionModificar.setDisable();
	    imgButtonsMantPrelacionEliminar = imgButtons.create('imgButtonsMantPrelacionEliminar','Eliminar','eliminar.png');
	    imgButtonsMantPrelacionEliminar.setDisable();
	    imgButtonsMantPrelacionLimpiar = imgButtons.create('imgButtonsMantPrelacionLimpiar','Limpiar','limpiar.png');
	    imgButtonsMantPrelacionBuscar = imgButtons.create('imgButtonsMantPrelacionBuscar', 'Buscar', 'icono_buscar.png');
	    imgButtonsMantPrelacionSalir = imgButtons.create('imgButtonsMantPrelacionSalir','Salir','salir.png');     
	},

	init : function(){
	    this.create();
	    this.setEvents();
	    this.dialogsMantPrelacion_Init();
	    this.gridsMantPrelacionCodDescripcion_Init();
	    this.createMWs();		
	},

	limpiarCoreUpdate : function(methodName) {
  		powerComboBoxMantPreMatPrelada.setSelectedIndex(0);
  		dialogsMantPrelacion.setMsg("");
		imgButtonsMantPrelacionAgregar.setEnable();
		imgButtonsMantPrelacionModificar.setDisable();
		imgButtonsMantPrelacionEliminar.setDisable();	

		if (powerComboBoxMantPreMatTipPrelacion.getOption() == 'Por Hora'){
			editsMatPreNumHoras.readOnly(false);
		}
		else {
			editsMatPreNumHoras.setValue("");
			editsMatPreNumHoras.readOnly(true);
		}
		if (methodName == "eliminar" && gridsMantPrelacionCodDescripcion.getTotalRecord() == 1) { 
			gridsMantPrelacionCodDescripcion.clean();
        	dlgWait.hide();
        }
        else
    		this.resetElements('bus');
	},
	
  	limpiar : function() {
  		Tool.rstPwrCmb(powerComboBoxMantPreOrganizacion);
  		Tool.rstPwrCmb(powerComboBoxMantPreSuborganizacion);
  		Tool.rstPwrCmb(powerComboBoxMantPreCarrera);
  		Tool.rstPwrCmb(powerComboBoxMantPreMatTipPrelacion);
  		Tool.rstPwrCmb(powerComboBoxMantPreMatPrelante);
  		Tool.rstPwrCmb(powerComboBoxMantPreMatPrelada);
  		editsMantPrePensum.setValue("");  	
  		editsMatPreNumHoras.setValue("");  		
		editsMatPreNumHoras.readOnly(true);
  		gridsMantPrelacionCodDescripcion.clean();
  		dialogsMantPrelacion.setMsg("");
		imgButtonsMantPrelacionAgregar.setEnable();
		imgButtonsMantPrelacionModificar.setDisable();
		imgButtonsMantPrelacionEliminar.setDisable();	
		Tool.cnnSrv('MantObject', 'getMantPrelacionInit', this.windowName + '.loadDataInit()');
  	},
  	
    loadDataInit: function() {
        Tool.loadPowerComboData(dialogsMantPrelacion, powerComboBoxMantPreOrganizacion, 0, 1, json('getData'));
        Tool.loadPowerComboData(dialogsMantPrelacion, powerComboBoxMantPreMatTipPrelacion, 0, 1, json('getMantTipPrelacion'));
        Tool.getContext(dialogsMantPrelacion, powerComboBoxMantPreOrganizacion, powerComboBoxMantPreSuborganizacion, powerComboBoxMantPreCarrera, "MantPrelacion.getPensumActivo()");
        dialogsMantPrelacion.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },
      	
    getPensumActivo: function() {
    	var rlx = xmlStructs.createRecordList("rlx");
    	
    	rlx.add('reg',powerComboBoxMantPreCarrera.setModeReturnGetText(2));
    	Tool.cnnSrv('MantObject', 'getAsociarPensumActivo', this.windowName + '.loadDataPensumActivo()', rlx);
    },
    
    loadDataPensumActivo: function() {
    	this.idPensum = json('getAsociarPensumActivo').data[0];
    	Tool.loadEditData(dialogsMantPrelacion, editsMantPrePensum, 1, json('getAsociarPensumActivo'));   	
    	this.resetElements('pen');
    },
    
  	setData : function() {
		if (gridsMantPrelacionCodDescripcion.getDataCell(1) != "") {
			editsMatPreNumHoras.setValue(gridsMantPrelacionCodDescripcion.getDataCell(4));		
			powerComboBoxMantPreMatTipPrelacion.findOption(gridsMantPrelacionCodDescripcion.getDataCell(5));
			if (powerComboBoxMantPreMatTipPrelacion.getOption() == 'Por Hora'){
				editsMatPreNumHoras.readOnly(false);
			}
			else {
				editsMatPreNumHoras.setValue("");
				editsMatPreNumHoras.readOnly(true);
			}
			powerComboBoxMantPreMatPrelante.findOption(gridsMantPrelacionCodDescripcion.getDataCell(6));
			powerComboBoxMantPreMatPrelada.findOption(gridsMantPrelacionCodDescripcion.getDataCell(7));
			imgButtonsMantPrelacionAgregar.setDisable();
			imgButtonsMantPrelacionModificar.setEnable();
			imgButtonsMantPrelacionEliminar.setEnable();            
        }     			
	},

    resetElements : function(element) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (element == 'org') {
			gridsMantPrelacionCodDescripcion.clean(); 
			imgButtonsMantPrelacionAgregar.setEnable();
			imgButtonsMantPrelacionModificar.setDisable();
			imgButtonsMantPrelacionEliminar.setDisable();	
	    	Tool.rstPwrCmb(powerComboBoxMantPreSuborganizacion);
			Tool.rstPwrCmb(powerComboBoxMantPreCarrera);
			powerComboBoxMantPreMatTipPrelacion.setSelectedIndex(0); 
			editsMantPrePensum.setValue("");
			editsMatPreNumHoras.setValue("");
	        Tool.rstPwrCmb(powerComboBoxMantPreMatPrelante);
	    	Tool.rstPwrCmb(powerComboBoxMantPreMatPrelada);
			Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsMantPrelacion, powerComboBoxMantPreSuborganizacion, 1, 2, powerComboBoxMantPreOrganizacion);
		}
		else if (element == 'suborg') {
			gridsMantPrelacionCodDescripcion.clean(); 
			imgButtonsMantPrelacionAgregar.setEnable();
			imgButtonsMantPrelacionModificar.setDisable();
			imgButtonsMantPrelacionEliminar.setDisable();	
			Tool.rstPwrCmb(powerComboBoxMantPreCarrera);
			editsMantPrePensum.setValue("");
			powerComboBoxMantPreMatTipPrelacion.setSelectedIndex(0); 
			editsMatPreNumHoras.setValue("");
	        Tool.rstPwrCmb(powerComboBoxMantPreMatPrelante);
	    	Tool.rstPwrCmb(powerComboBoxMantPreMatPrelada);
			Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsMantPrelacion, powerComboBoxMantPreCarrera, -1, 3, powerComboBoxMantPreSuborganizacion);		
		}
		else if (element == 'carr') {
			gridsMantPrelacionCodDescripcion.clean(); 
			imgButtonsMantPrelacionAgregar.setEnable();
			imgButtonsMantPrelacionModificar.setDisable();
			imgButtonsMantPrelacionEliminar.setDisable();	
			editsMantPrePensum.setValue("");
			powerComboBoxMantPreMatTipPrelacion.setSelectedIndex(0); 
			editsMatPreNumHoras.setValue("");
	        Tool.rstPwrCmb(powerComboBoxMantPreMatPrelante);
	    	Tool.rstPwrCmb(powerComboBoxMantPreMatPrelada);
	    	this.getPensumActivo();
	    }
		else if (element == 'tip') {
			if (powerComboBoxMantPreMatTipPrelacion.getOption() == 'Por Hora'){
				editsMatPreNumHoras.readOnly(false);
			}
			else {
				editsMatPreNumHoras.setValue("");
				editsMatPreNumHoras.readOnly(true);
			}
	    }
		else if (element == 'pen') {
			gridsMantPrelacionCodDescripcion.clean(); 
			imgButtonsMantPrelacionAgregar.setEnable();
			imgButtonsMantPrelacionModificar.setDisable();
			imgButtonsMantPrelacionEliminar.setDisable();	
	        Tool.rstPwrCmb(powerComboBoxMantPreMatPrelante);
	    	Tool.rstPwrCmb(powerComboBoxMantPreMatPrelada);
	    	rlx.addInt('reg',this.idPensum);
	    	Tool.cnnSrv('MantObject', 'getMantPrelacionMateria', this.windowName + '.loadDataMateria()', rlx);
		}
		else if (element == 'bus') {
			gridsMantPrelacionCodDescripcion.clean(); 
			if (powerComboBoxMantPreCarrera.valid(dialogsMantPrelacion)) {
				Tool.getGridData('MantObject', 'getMantPrelacion', dialogsMantPrelacion, gridsMantPrelacionCodDescripcion, false, new MiniDataSet(this.idPensum, 'int', false), powerComboBoxMantPreMatPrelante, powerComboBoxMantPreMatPrelante, powerComboBoxMantPreMatPrelada, powerComboBoxMantPreMatPrelada);
			}
		}	
		else if (element == 'mat') {
			imgButtonsMantPrelacionAgregar.setEnable();
			imgButtonsMantPrelacionModificar.setDisable();
			imgButtonsMantPrelacionEliminar.setDisable();	
		}
    },
    
    loadDataMateria: function() {
        Tool.loadPowerComboData(dialogsMantPrelacion, powerComboBoxMantPreMatPrelante, 0, 1, json('getMantPrelacionMateria'));
        Tool.loadPowerComboData(dialogsMantPrelacion, powerComboBoxMantPreMatPrelada, 0, 1, json('getMantPrelacionMateria'));
        dialogsMantPrelacion.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },
    
    setEvents : function() {
	    gridsMantPrelacionCodDescripcion.onClickCells(this.windowName+".setData()");
	    imgButtonsMantPrelacionAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantPrelacionModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantPrelacionEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
	  	imgButtonsMantPrelacionLimpiar.onClick(this.windowName+".limpiar()");
	  	imgButtonsMantPrelacionBuscar.onClick(this.windowName + ".resetElements('bus')");
	  	imgButtonsMantPrelacionSalir.onClick('dialogsMantPrelacion.close()');
	  	powerComboBoxMantPreOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxMantPreSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		powerComboBoxMantPreCarrera.onChange(this.windowName + ".resetElements('carr')");
		powerComboBoxMantPreMatTipPrelacion.onChange(this.windowName + ".resetElements('tip')");
		powerComboBoxMantPreMatPrelante.onChange(this.windowName + ".resetElements('mat')");
		powerComboBoxMantPreMatPrelada.onChange(this.windowName + ".resetElements('mat')");
    },
    
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (powerComboBoxMantPreOrganizacion.valid(dialogsMantPrelacion))	
			if (powerComboBoxMantPreSuborganizacion.valid(dialogsMantPrelacion))
  				if (powerComboBoxMantPreCarrera.valid(dialogsMantPrelacion))
  					if (editsMantPrePensum.valid(dialogsMantPrelacion))
  						if (powerComboBoxMantPreMatPrelante.valid(dialogsMantPrelacion))
  				    		if (powerComboBoxMantPreMatTipPrelacion.getOption() == 'Por Hora' || powerComboBoxMantPreMatPrelada.valid(dialogsMantPrelacion))
  				    			if (powerComboBoxMantPreMatTipPrelacion.valid(dialogsMantPrelacion)) {
									if (methodName != 'eliminar') {
										rlx.add('reg',powerComboBoxMantPreMatTipPrelacion);
										rlx.add('reg',editsMatPreNumHoras);
									}
									rlx.addInt('reg',this.idPensum);
									rlx.add('reg',powerComboBoxMantPreMatPrelante);
									rlx.add('reg',powerComboBoxMantPreMatPrelada); 					
									Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
								}
	}
};