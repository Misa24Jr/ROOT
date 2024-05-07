  var dialogsMantPerUsuario = new Object();
  var editsMantPerUsuCi = new Object();
  var editsMantPerUsuNombre = new Object();
  var editsMantPerUsuApellido = new Object();
  var editsMantPerUsuId = new Object();
  var powerComboBoxMantPerUsuOrganizacion = new Object();
  var powerComboBoxMantPerUsuPerfil = new Object();
  var gridsMantPerUsuario = new Object();
  var imgButtonsMantPerUsuAgregar = new Object();
  var imgButtonsMantPerUsuModificar = new Object();
  var imgButtonsMantPerUsuEliminar = new Object();
  var imgButtonsMantPerUsuLimpiar = new Object();
  var imgButtonsMantPerUsuBuscar = new Object();
  var imgButtonsMantPerUsuSalir= new Object();
  var mw_MantPerUsuario = new Object();// minWindow
  
  var MantPerUsuario = {
	windowName : 'MantPerUsuario',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantPerUsuario.isByClean())
			this.limpiar();			
		dialogsMantPerUsuario.show();
	},
	
	hide : function() {
		dialogsMantPerUsuario.hide();
	},
	
	createMWs : function() {
        	mwMantPerUsuario = desktop.addMinWindow('M.P.Usuario', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantPerUsuario.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantPerUsuario_Init : function() {
		dialogsMantPerUsuario.setMinimizeXY(0,0);
	  	dialogsMantPerUsuario.setCenterScreen();
	  	dialogsMantPerUsuario.addSpace(0,0,20);
	  	dialogsMantPerUsuario.addLn(1,1,1);
		dialogsMantPerUsuario.setHeightCell(1,1,10);
	  	dialogsMantPerUsuario.addObjToDialog(editsMantPerUsuCi,2,1,24);
		editsMantPerUsuCi.setSizeEdit(195);
	  	dialogsMantPerUsuario.addObjToDialog(editsMantPerUsuNombre,2,1,24);
		editsMantPerUsuNombre.setSizeEdit(195);
	  	dialogsMantPerUsuario.addObjToDialog(editsMantPerUsuApellido,2,1,24);
		editsMantPerUsuApellido.setSizeEdit(195);
	  	dialogsMantPerUsuario.adjAllMarginObj(2,1,10);
	  	dialogsMantPerUsuario.addObjToDialog(editsMantPerUsuId,3,1,24);
		editsMantPerUsuId.setSizeEdit(195);
	  	dialogsMantPerUsuario.addObjToDialog(powerComboBoxMantPerUsuOrganizacion,3,1,24);
	  	dialogsMantPerUsuario.addObjToDialog(powerComboBoxMantPerUsuPerfil,3,1,24);
	  	dialogsMantPerUsuario.adjAllMarginObj(3,1,10);
	  	dialogsMantPerUsuario.addLn(4, 1, 1);
		dialogsMantPerUsuario.setHeightCell(4,1,10);
	  	dialogsMantPerUsuario.addObjToDialog(gridsMantPerUsuario.getObject(), 5, 1);
	  	dialogsMantPerUsuario.addLn(6, 1, 1);
		dialogsMantPerUsuario.setHeightCell(6,1,12);  
	  	dialogsMantPerUsuario.addObjToDialog(imgButtonsMantPerUsuAgregar,7,1);
	  	dialogsMantPerUsuario.addObjToDialog(imgButtonsMantPerUsuModificar,7,1);
	  	dialogsMantPerUsuario.addObjToDialog(imgButtonsMantPerUsuEliminar,7,1);
	  	dialogsMantPerUsuario.addObjToDialog(imgButtonsMantPerUsuLimpiar,7,1);
	  	dialogsMantPerUsuario.addObjToDialog(imgButtonsMantPerUsuBuscar,7,1);
	  	dialogsMantPerUsuario.addObjToDialog(imgButtonsMantPerUsuSalir,7,1);
		imgButtonsMantPerUsuAgregar.setDimension(90,22);
		imgButtonsMantPerUsuModificar.setDimension(90,22);
		imgButtonsMantPerUsuEliminar.setDimension(90,22);
		imgButtonsMantPerUsuLimpiar.setDimension(90,22);
		imgButtonsMantPerUsuBuscar.setDimension(90,22);
		imgButtonsMantPerUsuSalir.setDimension(90,22);
	  	dialogsMantPerUsuario.adjAllMarginObj(7,1,20);
	  	dialogsMantPerUsuario.leftMarginObj(7,1,0,107);
	}, 
	
	gridsMantPerUsuario_Init : function() {
        gridsMantPerUsuario.setFixColRow(false,true);
        gridsMantPerUsuario.addTitleVectorX( ['Organización','Usuario','Perfil','idOrg','idPfl','ced','nom','ape']);
        gridsMantPerUsuario.showData();
		gridsMantPerUsuario.setSizeCol(1,260);
        gridsMantPerUsuario.setSizeCol(2,300);
		gridsMantPerUsuario.setSizeCol(3,293);
        gridsMantPerUsuario.setSizeCol(4,0);
		gridsMantPerUsuario.setSizeCol(5,0);
		gridsMantPerUsuario.setSizeCol(6,0);
		gridsMantPerUsuario.setSizeCol(7,0);
		gridsMantPerUsuario.setSizeCol(8,0);
		gridsMantPerUsuario.hideCol(4);
		gridsMantPerUsuario.hideCol(5);
		gridsMantPerUsuario.hideCol(6);
		gridsMantPerUsuario.hideCol(7);
		gridsMantPerUsuario.hideCol(8);
    },
  
  	create : function() {
  		dialogsMantPerUsuario = dialogs.create("dialogsMantPerUsuario",0,0,898,319,"ASIGNAR PERFIL AL USUARIO");
  		editsMantPerUsuCi = edits.create('editsMantPerUsuCi','editsMantPerUsuCi','C.i. (*):',1,71,'normal');
  		editsMantPerUsuCi.setValidInteger();
	  	editsMantPerUsuCi.setFieldFind(true);
	  	editsMantPerUsuCi.setSizeEdit(20);
	  	editsMantPerUsuCi.setMaxLength(15);
	  	editsMantPerUsuNombre = edits.create('editsMantPerUsuNombre','editsMantPerUsuNombre','Nombre (*):',1,103,'normal');
	  	editsMantPerUsuNombre.setValidEmpty();
	  	editsMantPerUsuNombre.setFieldFind(true);
	  	editsMantPerUsuNombre.setSizeEdit(20);
	  	editsMantPerUsuNombre.setMaxLength(50); 
	  	editsMantPerUsuApellido = edits.create('editsMantPerUsuApellido','editsMantPerUsuApellido','Apellido (*):',1,74,'normal');
	  	editsMantPerUsuApellido.setValidEmpty();
	  	editsMantPerUsuApellido.setFieldFind(true);
	  	editsMantPerUsuApellido.setSizeEdit(20);
	  	editsMantPerUsuApellido.setMaxLength(50); 
	  	editsMantPerUsuId = edits.create('editsMantPerUsuId','editsMantPerUsuId','Usuario (*):',1,71,'normal');
      	editsMantPerUsuId.setValidEmpty();
      	editsMantPerUsuId.setFieldFind(true);
      	editsMantPerUsuId.setSizeEdit(20);
      	editsMantPerUsuId.setMaxLength(11); 
		powerComboBoxMantPerUsuOrganizacion = powerComboBox.create('powerComboBoxMantPerUsuOrganizacion','powerComboBoxMantPerUsuOrganizacion','Organización (*):',1,103);
		powerComboBoxMantPerUsuOrganizacion.setWidthCombo(174);
		powerComboBoxMantPerUsuOrganizacion.enableReadOnlyEditor();
		powerComboBoxMantPerUsuOrganizacion.setValidEmpty();
		powerComboBoxMantPerUsuOrganizacion.setFieldFind(true);
		powerComboBoxMantPerUsuPerfil = powerComboBox.create('powerComboBoxMantPerUsuPerfil','powerComboBoxMantPerUsuPerfil','Perfil (*): ',1,74);
		powerComboBoxMantPerUsuPerfil.setWidthCombo(174);
		powerComboBoxMantPerUsuPerfil.enableReadOnlyEditor();
		powerComboBoxMantPerUsuPerfil.setValidEmpty();
		powerComboBoxMantPerUsuPerfil.setFieldFind(true);
		gridsMantPerUsuario = grids.create('gridsMantPerUsuario',8,8);
		imgButtonsMantPerUsuAgregar = imgButtons.create("imgButtonsMantPerUsuAgregar",'Agregar','ok.png');
		imgButtonsMantPerUsuModificar = imgButtons.create("imgButtonsMantPerUsuModificar",'Modificar','icono_modificar.png');
		imgButtonsMantPerUsuEliminar = imgButtons.create("imgButtonsMantPerUsuEliminar",'Eliminar','eliminar.png');		
		imgButtonsMantPerUsuLimpiar = imgButtons.create("imgButtonsMantPerUsuLimpiar",'Limpiar','limpiar.png');
		imgButtonsMantPerUsuBuscar = imgButtons.create("imgButtonsMantPerUsuBuscar",'Buscar','icono_buscar.png');
		imgButtonsMantPerUsuSalir = imgButtons.create("imgButtonsMantPerUsuSalir",'Salir','salir.png');
	},
		
	init : function() {
    	this.create();
    	this.setEvents();
    	this.dialogsMantPerUsuario_Init();
    	this.gridsMantPerUsuario_Init();
    	this.createMWs();
    },	
  
  	limpiarFind : function(ix) {
  		editsMantPerUsuCi.hideId = -1;
  		editsMantPerUsuId.readOnly(false);
  		editsMantPerUsuId.setValue("");
  		
  		switch (ix) {
		case 1: 
			editsMantPerUsuNombre.setValue("");
	  		editsMantPerUsuApellido.setValue("");  		
			break;
		case 2: 
			editsMantPerUsuCi.setValue("");
	  		editsMantPerUsuApellido.setValue("");  		
			break;
		default:
			editsMantPerUsuCi.setValue("");
			editsMantPerUsuNombre.setValue("");
			break;
		} 
  	},

  	limpiar : function() {
  		editsMantPerUsuCi.hideId = -1;
    	editsMantPerUsuId.readOnly(false);
    	editsMantPerUsuCi.readOnly(false);
    	editsMantPerUsuNombre.readOnly(false);
    	editsMantPerUsuApellido.readOnly(false);
    	powerComboBoxMantPerUsuOrganizacion.enable();
    	powerComboBoxMantPerUsuOrganizacion.enableReadOnlyEditor();
		editsMantPerUsuCi.setValue("");
		editsMantPerUsuNombre.setValue("");
		editsMantPerUsuApellido.setValue("");
		editsMantPerUsuId.setValue("");
	    imgButtonsMantPerUsuAgregar.setEnable();
	    imgButtonsMantPerUsuModificar.setDisable();
	    imgButtonsMantPerUsuEliminar.setDisable();
	    gridsMantPerUsuario.clean();
		dialogsMantPerUsuario.setMsg("");
		Tool.cnnSrv('SecurityObject', 'getMantPerUsuarioInit', this.windowName + '.loadDataInit()');
	},
	
    loadDataInit: function() {
        Tool.loadPowerComboData(dialogsMantPerUsuario, powerComboBoxMantPerUsuOrganizacion, 0, 1, json('getData'));
        Tool.loadPowerComboData(dialogsMantPerUsuario, powerComboBoxMantPerUsuPerfil, 0, 1, json('getMantPerfil'));
        dialogsMantPerUsuario.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },
    
    setData: function() {
        if (gridsMantPerUsuario.getDataCell(1) != "") {
        	editsMantPerUsuId.readOnly(true);
        	editsMantPerUsuCi.readOnly(true);
        	editsMantPerUsuNombre.readOnly(true);
        	editsMantPerUsuApellido.readOnly(true);
        	powerComboBoxMantPerUsuOrganizacion.disable();
        	powerComboBoxMantPerUsuOrganizacion.findOption(gridsMantPerUsuario.getDataCell(4));
			editsMantPerUsuId.setValue(gridsMantPerUsuario.getDataCell(2));
        	powerComboBoxMantPerUsuPerfil.findOption(gridsMantPerUsuario.getDataCell(5));
            editsMantPerUsuCi.setValue(gridsMantPerUsuario.getDataCell(6));
            editsMantPerUsuNombre.setValue(gridsMantPerUsuario.getDataCell(7));
			editsMantPerUsuApellido.setValue(gridsMantPerUsuario.getDataCell(8));
			imgButtonsMantPerUsuAgregar.setDisable();
			imgButtonsMantPerUsuModificar.setEnable();
			imgButtonsMantPerUsuEliminar.setEnable();
        }
    },
	
    setEvents: function() {
		editsMantPerUsuId.onEnter(this.windowName + ".buscar()");
		editsMantPerUsuCi.onEnter(this.windowName + ".buscar()");
		editsMantPerUsuNombre.onEnter(this.windowName + ".buscar()");
		editsMantPerUsuApellido.onEnter(this.windowName + ".buscar()");
		editsMantPerUsuCi.onChange(this.windowName + ".limpiarFind(1)");
		editsMantPerUsuNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsMantPerUsuApellido.onChange(this.windowName + ".limpiarFind(3)");
	  	gridsMantPerUsuario.onClickCells(this.windowName + ".setData()");
    	imgButtonsMantPerUsuAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
    	imgButtonsMantPerUsuModificar.onClick(this.windowName + ".coreUpdate('modificar')");
    	imgButtonsMantPerUsuEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
    	imgButtonsMantPerUsuLimpiar.onClick(this.windowName + ".limpiar()");
    	imgButtonsMantPerUsuBuscar.onClick(this.windowName + ".buscar()");
    	imgButtonsMantPerUsuSalir.onClick("dialogsMantPerUsuario.close()");
    },
    
 	buscar: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		gridsMantPerUsuario.clean(); 
		if (editsMantPerUsuId.getValue() != '' || (editsMantPerUsuCi.getValue() != '' && editsMantPerUsuNombre.getValue() != '' && editsMantPerUsuApellido.getValue() != '')) {
			rlx.add('reg', powerComboBoxMantPerUsuOrganizacion);
			rlx.add('reg', powerComboBoxMantPerUsuOrganizacion);
			rlx.add('reg', editsMantPerUsuId);
			rlx.add('reg', editsMantPerUsuId);
			rlx.add('reg', powerComboBoxMantPerUsuPerfil);
			rlx.add('reg', powerComboBoxMantPerUsuPerfil);
			rlx.add('reg', editsMantPerUsuCi);
			rlx.add('reg', editsMantPerUsuCi);
			Tool.cnnSrv('SecurityObject', 'getMantPerUsuario', this.windowName + '.loadData()', rlx);
		}
		else if (editsMantPerUsuCi.getValue() != '' || editsMantPerUsuNombre.getValue() != '' || editsMantPerUsuApellido.getValue() != '') {
			hideIdCedula = editsMantPerUsuCi;
        	hideDeNombre = editsMantPerUsuNombre;
        	hideDeApellido = editsMantPerUsuApellido;
        	ResuBusqueda.setExtFnc('MantPerUsuario.buscar()');
			Tool.getGridData('SecurityObject', 'getMantPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsMantPerUsuCi, editsMantPerUsuCi, editsMantPerUsuNombre, editsMantPerUsuNombre, editsMantPerUsuApellido, editsMantPerUsuApellido);
		}
		else {
			Tool.getGridData('SecurityObject', 'getMantPerUsuario', dialogsMantPerUsuario, gridsMantPerUsuario, false, powerComboBoxMantPerUsuOrganizacion, powerComboBoxMantPerUsuOrganizacion, editsMantPerUsuId, editsMantPerUsuId, powerComboBoxMantPerUsuPerfil, powerComboBoxMantPerUsuPerfil, editsMantPerUsuCi, editsMantPerUsuCi);
		}
	},

    loadData: function() {
    	editsMantPerUsuId.readOnly(true);
    	editsMantPerUsuId.setValue(json('getMantPerUsuario').data[1][0]);
    	editsMantPerUsuCi.setValue(json('getMantPerUsuario').data[5][0]);
    	editsMantPerUsuNombre.setValue(json('getMantPerUsuario').data[6][0]);
    	editsMantPerUsuApellido.setValue(json('getMantPerUsuario').data[7][0]);
    	if (json('getMantPerUsuario').data[0][0] != 'null') 
    		Tool.loadGridData(dialogsMantPerUsuario, gridsMantPerUsuario, false, json('getMantPerUsuario'));
        dialogsMantPerUsuario.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    coreUpdate: function(methodName) {
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (methodName == 'eliminar') {
        	if (editsMantPerUsuId.valid(dialogsMantPerUsuario)) {
    			rlx.add('reg', powerComboBoxMantPerUsuOrganizacion);
    			rlx.add('reg', editsMantPerUsuId);
    			procesar = true;
        	}
        }
        else {
            if (editsMantPerUsuId.valid(dialogsMantPerUsuario)) 
            	if (powerComboBoxMantPerUsuOrganizacion.valid(dialogsMantPerUsuario)) 
            		if (powerComboBoxMantPerUsuPerfil.valid(dialogsMantPerUsuario)) {
                        rlx.add('reg', powerComboBoxMantPerUsuPerfil);
                        rlx.add('reg', powerComboBoxMantPerUsuOrganizacion);
                        rlx.add('reg', editsMantPerUsuId);
                        procesar = true;
            		}
        }
        if (procesar) {            
			Tool.cnnSrv('SecurityObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
    }
};	