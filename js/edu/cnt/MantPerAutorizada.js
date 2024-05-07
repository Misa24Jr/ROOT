var dialogsMantPerAutorizada = new Object();
var labelsMantPerAutAlumno = new Object();
var editsMantPerAutCi = new Object();
var editsMantPerAutNombre = new Object();
var editsMantPerAutApellido = new Object();
var labelsMantPerAutRepresentante = new Object();
var editsMantPerAutCiRep = new Object();
var editsMantPerAutNombreRep = new Object();
var editsMantPerAutApellidoRep = new Object();
var pcbMatPerAutParentesco = new Object();
var pcbMatPerAutAutMensaje = new Object();
var pcbMatPerAutRepTitular = new Object();
var gridsMantPerAutorizada = new Object();
var imgButtonsMantPerAutAgregar = new Object();
var imgButtonsMantPerAutModificar = new Object();
var imgButtonsMantPerAutEliminar = new Object();
var imgButtonsMantPerAutLimpiar = new Object();
var imgButtonsMantPerAutBuscar = new Object();
var imgButtonsMantPerAutSalir = new Object();
var mwdialogsMantPerAutorizada = new Object();// minWindow

var MantPerAutorizada = {
	windowName: 'MantPerAutorizada',
	isCreate: false,
	
	show: function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantPerAutorizada.isByClean()) 
			this.limpiar();
		dialogsMantPerAutorizada.show();
	},
	
	hide: function() {
		dialogsMantPerAutorizada.hide();
	},
	
	createMWs: function() {
		mwMantPerAutorizada = desktop.addMinWindow('Rel.Est.Rep', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsMantPerAutorizada.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},
	
	dialogsMantPerAutorizada_Init: function() {
		dialogsMantPerAutorizada.setMinimizeXY(0, 0);
		dialogsMantPerAutorizada.setCenterScreen();
		dialogsMantPerAutorizada.addSpace(0, 0, 20);
		var c1 = container.create("c1",'Estudiante',1);
		c1.setDimension(789,52);
		c1.setMarginLeftBarTitle(359);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 12, '#1e1e1e');
		c1.setObject(editsMantPerAutCi, 12, 4, 7, 12,0);
		editsMantPerAutCi.setSizeEdit(148);
		c1.setObject(editsMantPerAutNombre, 20, 4, 7, 12,0);
		editsMantPerAutNombre.setSizeEdit(148);
		editsMantPerAutNombre.setMaxLength(50); 
		c1.setObject(editsMantPerAutApellido, 20, 4, 7, 12,0);
		editsMantPerAutApellido.setSizeEdit(148);
		editsMantPerAutApellido.setMaxLength(50); 
		dialogsMantPerAutorizada.addObjToDialog(c1, 2, 1,80);
		var c2 = container.create("c2",'Relación Persona',2);
		c2.setDimension(789,86);
		c2.setMarginLeftBarTitle(330);
		c2.setPropertyMarco('groove',1,'#7e7e7e');
		c2.setFontTitle('verdana', 12, '#1e1e1e');
		c2.setObject(editsMantPerAutCiRep, 12, 4, 7, 12,0);
		editsMantPerAutCiRep.setSizeEdit(148);
		c2.setObject(editsMantPerAutNombreRep, 20, 4, 7, 12,0);
		editsMantPerAutNombreRep.setSizeEdit(148);
		editsMantPerAutNombreRep.setMaxLength(50); 
		c2.setObject(editsMantPerAutApellidoRep, 20, 4, 7, 12,0);
		editsMantPerAutApellidoRep.setSizeEdit(148);
		editsMantPerAutApellidoRep.setMaxLength(50); 
		c2.setObject(pcbMatPerAutParentesco, 12, 4, 7, 12,1);
		pcbMatPerAutParentesco.setWidthCombo(126);
		c2.setObject(pcbMatPerAutAutMensaje, 20, 4, 7, 12,1);
		pcbMatPerAutAutMensaje.setWidthCombo(126);
		pcbMatPerAutAutMensaje.addOptionAndSimpleValue(null, 'SI', 'SI');
        pcbMatPerAutAutMensaje.addOptionAndSimpleValue(null, 'NO', 'NO');
        c2.setObject(pcbMatPerAutRepTitular, 20, 4, 7, 12,1);
		pcbMatPerAutRepTitular.setWidthCombo(126);
		pcbMatPerAutRepTitular.addOptionAndSimpleValue(null, 'SI', 'SI');
        pcbMatPerAutRepTitular.addOptionAndSimpleValue(null, 'NO', 'NO');
		dialogsMantPerAutorizada.addObjToDialog(c2, 3, 1);
		dialogsMantPerAutorizada.addLn(4, 1, 1);
		dialogsMantPerAutorizada.setHeightCell(4,1,10);
		dialogsMantPerAutorizada.addObjToDialog(gridsMantPerAutorizada.getObject(), 5, 1);
		dialogsMantPerAutorizada.addLn(6, 1, 1);
		dialogsMantPerAutorizada.setHeightCell(6,1,12);
		dialogsMantPerAutorizada.addObjToDialog(imgButtonsMantPerAutAgregar, 7, 1,1);
		dialogsMantPerAutorizada.addObjToDialog(imgButtonsMantPerAutModificar, 7, 1);
		dialogsMantPerAutorizada.addObjToDialog(imgButtonsMantPerAutEliminar, 7, 1);
		dialogsMantPerAutorizada.addObjToDialog(imgButtonsMantPerAutLimpiar, 7, 1);
		dialogsMantPerAutorizada.addObjToDialog(imgButtonsMantPerAutBuscar, 7, 1);
		dialogsMantPerAutorizada.addObjToDialog(imgButtonsMantPerAutSalir, 7, 1);
		imgButtonsMantPerAutAgregar.setDimension(90, 22);
		imgButtonsMantPerAutModificar.setDimension(90, 22);
		imgButtonsMantPerAutEliminar.setDimension(90, 22);
		imgButtonsMantPerAutLimpiar.setDimension(90, 22);
		imgButtonsMantPerAutBuscar.setDimension(90, 22);
		imgButtonsMantPerAutSalir.setDimension(90, 22);
		dialogsMantPerAutorizada.adjAllMarginObj(7, 1, 20);
		dialogsMantPerAutorizada.leftMarginObj(7, 1, 0, 70);
	},
	
	gridsMantPerAutorizada_Init: function() {
		gridsMantPerAutorizada.setFixColRow(false, true);
		gridsMantPerAutorizada.addTitleVectorX(['C.i.: Estudiante', 'Nombre Estudiante', 'Apellido Estudiante', 'C.i.: Persona ', 'Nombre Persona', 'Apellido Persona','Parentesco','Msj','idParentesco','idAlumno', 'idRepresentante','REP.']);
		gridsMantPerAutorizada.showData();
		gridsMantPerAutorizada.setSizeCol(1, 70);
		gridsMantPerAutorizada.setSizeCol(2, 125);
		gridsMantPerAutorizada.setSizeCol(3, 125);
		gridsMantPerAutorizada.setSizeCol(4, 70);
		gridsMantPerAutorizada.setSizeCol(5, 125);
		gridsMantPerAutorizada.setSizeCol(6, 125);
		gridsMantPerAutorizada.setSizeCol(7, 80);
		gridsMantPerAutorizada.setSizeCol(8, 30);
		gridsMantPerAutorizada.setSizeCol(9, 0);
		gridsMantPerAutorizada.setSizeCol(10, 0);
		gridsMantPerAutorizada.setSizeCol(11, 0);
		gridsMantPerAutorizada.setSizeCol(12, 30);
		gridsMantPerAutorizada.hideCol(9);
		gridsMantPerAutorizada.hideCol(10);
		gridsMantPerAutorizada.hideCol(11);
	},
	
	create: function() {
		dialogsMantPerAutorizada = dialogs.create('dialogsMantPerAutorizada', 0, 0, 832,492, 'RELACIÓN ESTUDIANTE REPRESENTANTE');
		dialogsMantPerAutorizada.setAdjY(20);
		labelsMantPerAutAlumno = labels.create('labelsMantPerAutAlumno', 'Estudiante:');
		editsMantPerAutCi = edits.create('editsMantPerAutCi', 'editsMantPerAutCi', 'C.i. (*):', 1,77, 'normal');
		editsMantPerAutCi.setValidInteger();
		editsMantPerAutCi.setFieldFind(true);
		editsMantPerAutNombre = edits.create('editsMantPerAutNombre', 'editsMantPerAutNombre', 'Nombre (*):', 1,115, 'normal');
		editsMantPerAutNombre.setValidEmpty();
		editsMantPerAutNombre.setFieldFind(true);
		editsMantPerAutApellido = edits.create('editsMantPerAutApellido', 'editsMantPerAutApellido', 'Apellido (*):', 1,72, 'normal');
		editsMantPerAutApellido.setValidEmpty();
		editsMantPerAutApellido.setFieldFind(true);
		labelsMantPerAutRepresentante = labels.create('labelsMantPerAutRepresentante', 'Representante:');
		editsMantPerAutCiRep = edits.create('editsMantPerAutCiRep', 'editsMantPerAutCiRep', 'C.i. (*):', 1,77, 'normal');
		editsMantPerAutCiRep.setValidInteger();
		editsMantPerAutCiRep.setFieldFind(true);
		editsMantPerAutNombreRep = edits.create('editsMantPerAutNombreRep', 'editsMantPerAutNombreRep', 'Nombre (*):', 1,115, 'normal');
		editsMantPerAutNombreRep.setValidEmpty();
		editsMantPerAutNombreRep.setFieldFind(true);
		editsMantPerAutApellidoRep = edits.create('editsMantPerAutApellidoRep', 'editsMantPerAutApellidoRep', 'Apellido (*):', 1,72, 'normal');
		editsMantPerAutApellidoRep.setValidEmpty();
		editsMantPerAutApellidoRep.setFieldFind(true);
		pcbMatPerAutParentesco = powerComboBox.create('pcbMatPerAutParentesco','pcbMatPerAutParentesco','Parentesco:',1,77);
        pcbMatPerAutParentesco.setValidEmpty();
      	pcbMatPerAutParentesco.enableReadOnlyEditor();
      	pcbMatPerAutParentesco.addEmptyOption();
		pcbMatPerAutAutMensaje = powerComboBox.create('pcbMatPerAutAutMensaje','pcbMatPerAutAutMensaje','Enviar Mensaje:',1,115);
        pcbMatPerAutAutMensaje.setValidEmpty();
      	pcbMatPerAutAutMensaje.enableReadOnlyEditor();
      	pcbMatPerAutAutMensaje.addEmptyOption();
      	pcbMatPerAutAutMensaje.setDataType('string');
      	pcbMatPerAutRepTitular = powerComboBox.create('pcbMatPerAutRepTitular','pcbMatPerAutRepTitular','Representa:',1,72);
        pcbMatPerAutRepTitular.setValidEmpty();
      	pcbMatPerAutRepTitular.enableReadOnlyEditor();
      	pcbMatPerAutRepTitular.addEmptyOption();
      	pcbMatPerAutRepTitular.setDataType('string');
		gridsMantPerAutorizada = grids.create('gridsMantPerAutorizada', 10, 12);
		imgButtonsMantPerAutAgregar = imgButtons.create('imgButtonsMantPerAutAgregar', 'Agregar', 'ok.png');
		imgButtonsMantPerAutModificar = imgButtons.create('imgButtonsMantPerAutModificar', 'Modificar', 'icono_modificar.png');
		imgButtonsMantPerAutModificar.setDisable();
		imgButtonsMantPerAutEliminar = imgButtons.create('imgButtonsMantPerAutEliminar', 'Eliminar', 'eliminar.png');
		imgButtonsMantPerAutEliminar.setDisable();
		imgButtonsMantPerAutLimpiar = imgButtons.create('imgButtonsMantPerAutLimpiar', 'Limpiar', 'limpiar.png');
		imgButtonsMantPerAutBuscar = imgButtons.create('imgButtonsMantPerAutBuscar', 'Buscar', 'icono_buscar.png');
		imgButtonsMantPerAutSalir = imgButtons.create('imgButtonsMantPerAutSalir', 'Salir', 'salir.png');
	},

	init: function() {
		this.create();
		this.setEvents();
		this.dialogsMantPerAutorizada_Init();
		this.gridsMantPerAutorizada_Init();
		this.createMWs();
	},
	
	limpiarFind : function(ix) {
		imgButtonsMantPerAutAgregar.setEnable();
  		imgButtonsMantPerAutModificar.setDisable();
		imgButtonsMantPerAutEliminar.setDisable();

		if (ix == 1 || ix == 2 || ix == 3)
			editsMantPerAutCi.hideId = -1;
		else
			editsMantPerAutCiRep.hideId = -1;

		switch (ix) {
			case 1: 
				editsMantPerAutNombre.setValue("");
				editsMantPerAutApellido.setValue("");
				break;
			case 2: 
				editsMantPerAutCi.setValue("");
				editsMantPerAutApellido.setValue("");  		
				break;
			case 3:
				editsMantPerAutCi.setValue("");
		  		editsMantPerAutNombre.setValue("");
				break;
			case 4: 
				editsMantPerAutNombreRep.setValue("");
				editsMantPerAutApellidoRep.setValue("");  		
				break;
			case 5: 
				editsMantPerAutCiRep.setValue("");
				editsMantPerAutApellidoRep.setValue("");  		
				break;
			case 6:
				editsMantPerAutCiRep.setValue("");
				editsMantPerAutNombreRep.setValue("");
				break;
			} 
  	},

  	limpiar: function() {
  		editsMantPerAutCi.hideId = -1;
  		editsMantPerAutCiRep.hideId = -1;
		editsMantPerAutCi.setValue("");
		editsMantPerAutNombre.setValue("");
		editsMantPerAutApellido.setValue("");
		editsMantPerAutCiRep.setValue("");
		editsMantPerAutNombreRep.setValue("");
		editsMantPerAutApellidoRep.setValue("");
		pcbMatPerAutAutMensaje.setSelectedIndex(0);
		pcbMatPerAutRepTitular.setSelectedIndex(0);
		gridsMantPerAutorizada.clean();
		dialogsMantPerAutorizada.setMsg("");
		imgButtonsMantPerAutAgregar.setEnable();
  		imgButtonsMantPerAutModificar.setDisable();
		imgButtonsMantPerAutEliminar.setDisable();
		Tool.getPowerComboData('MantObject', 'getParentesco', dialogsMantPerAutorizada, pcbMatPerAutParentesco, 0, 1);		
		pcbMatPerAutAutMensaje.setSelectedIndex(2);
		pcbMatPerAutRepTitular.setSelectedIndex(1);
	},
	
	setData: function() {
		if (gridsMantPerAutorizada.getDataCell(1) != "") {
			editsMantPerAutCi.setValue(gridsMantPerAutorizada.getDataCell(1));
			editsMantPerAutNombre.setValue(gridsMantPerAutorizada.getDataCell(2));
			editsMantPerAutApellido.setValue(gridsMantPerAutorizada.getDataCell(3));
			editsMantPerAutCiRep.setValue(gridsMantPerAutorizada.getDataCell(4));
			editsMantPerAutNombreRep.setValue(gridsMantPerAutorizada.getDataCell(5));
			editsMantPerAutApellidoRep.setValue(gridsMantPerAutorizada.getDataCell(6));
			pcbMatPerAutParentesco.findOption(gridsMantPerAutorizada.getDataCell(9));
			pcbMatPerAutAutMensaje.findOption(gridsMantPerAutorizada.getDataCell(8));
			pcbMatPerAutRepTitular.findOption(gridsMantPerAutorizada.getDataCell(12));
			editsMantPerAutCi.hideId = gridsMantPerAutorizada.getDataCell(10);
			editsMantPerAutCiRep.hideId = gridsMantPerAutorizada.getDataCell(11);
			imgButtonsMantPerAutAgregar.setDisable();
			imgButtonsMantPerAutModificar.setEnable();
			imgButtonsMantPerAutEliminar.setEnable();
		}
	},
	
	setEvents: function() {
		editsMantPerAutCi.onEnter(this.windowName + ".buscar('alu')");
		editsMantPerAutCi.onChange(this.windowName + ".limpiarFind(1)");
		editsMantPerAutNombre.onEnter(this.windowName + ".buscar('alu')");
		editsMantPerAutNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsMantPerAutApellido.onEnter(this.windowName + ".buscar('alu')");
		editsMantPerAutApellido.onChange(this.windowName + ".limpiarFind(3)");
		editsMantPerAutCiRep.onEnter(this.windowName + ".buscar('rep')");
		editsMantPerAutCiRep.onChange(this.windowName + ".limpiarFind(4)");
		editsMantPerAutNombreRep.onEnter(this.windowName + ".buscar('rep')");
		editsMantPerAutNombreRep.onChange(this.windowName + ".limpiarFind(5)");
		editsMantPerAutApellidoRep.onEnter(this.windowName + ".buscar('rep')");
		editsMantPerAutApellidoRep.onChange(this.windowName + ".limpiarFind(6)");
		gridsMantPerAutorizada.onClickCells(this.windowName + ".setData()");
		imgButtonsMantPerAutAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
		imgButtonsMantPerAutModificar.onClick(this.windowName + ".coreUpdate('modificar')");
		imgButtonsMantPerAutEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
		imgButtonsMantPerAutLimpiar.onClick(this.windowName + ".limpiar()");
		imgButtonsMantPerAutBuscar.onClick(this.windowName + ".buscar()");
		imgButtonsMantPerAutSalir.onClick("dialogsMantPerAutorizada.close()");
	},
	
 	buscar: function(origen) {
 		gridsMantPerAutorizada.clean(); 
		if (origen == 'alu' && editsMantPerAutCi.getValue() != '' && editsMantPerAutNombre.getValue() != '' && editsMantPerAutApellido.getValue() != '') {
			Tool.getGridData('MantObject', 'get' + this.windowName, dialogsMantPerAutorizada, gridsMantPerAutorizada, false, editsMantPerAutCi, editsMantPerAutCi, editsMantPerAutCiRep, editsMantPerAutCiRep);
		}
		else if (origen == 'alu' && (editsMantPerAutCi.getValue() != '' || editsMantPerAutNombre.getValue() != '' || editsMantPerAutApellido.getValue() != '')) {
        	ResuBusqueda.setObjectExtFnc(editsMantPerAutCi, editsMantPerAutNombre, editsMantPerAutApellido, this.windowName + ".buscar('alu')");
			Tool.getGridData('MantObject', 'getMantPersTodas', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsMantPerAutCi, editsMantPerAutCi, editsMantPerAutNombre, editsMantPerAutNombre, editsMantPerAutApellido, editsMantPerAutApellido);
		}
		else if (origen == 'rep' && editsMantPerAutCiRep.getValue() != '' && editsMantPerAutNombreRep.getValue() != '' && editsMantPerAutApellidoRep.getValue() != '') {
			Tool.getGridData('MantObject', 'get' + this.windowName, dialogsMantPerAutorizada, gridsMantPerAutorizada, false, editsMantPerAutCi, editsMantPerAutCi, editsMantPerAutCiRep, editsMantPerAutCiRep);
		}
		else if (origen == 'rep' && (editsMantPerAutCiRep.getValue() != '' || editsMantPerAutNombreRep.getValue() != '' || editsMantPerAutApellidoRep.getValue() != '')) {
        	ResuBusqueda.setObjectExtFnc(editsMantPerAutCiRep, editsMantPerAutNombreRep, editsMantPerAutApellidoRep, this.windowName + ".buscar('rep')");
			Tool.getGridData('MantObject', 'getMantPersTodas', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsMantPerAutCiRep, editsMantPerAutCiRep, editsMantPerAutNombreRep, editsMantPerAutNombreRep, editsMantPerAutApellidoRep, editsMantPerAutApellidoRep);
		}
		else {
			if ((editsMantPerAutCi.getValue() != '' && editsMantPerAutNombre.getValue() != '' && editsMantPerAutApellido.getValue() != '') || (editsMantPerAutCiRep.getValue() != '' && editsMantPerAutNombreRep.getValue() != '' && editsMantPerAutApellidoRep.getValue() != '')) 
				Tool.getGridData('MantObject', 'get' + this.windowName, dialogsMantPerAutorizada, gridsMantPerAutorizada, false, editsMantPerAutCi, editsMantPerAutCi, editsMantPerAutCiRep, editsMantPerAutCiRep);
			else
				Alert.show('Debe buscar por Estudiante o Representante.', 'SISTEMA', Alert.TYPE_INFO);
		}
	},

  	limpiarCoreUpdate : function() {
  		editsMantPerAutCiRep.hideId = -1;
  		editsMantPerAutCiRep.setValue("");
		editsMantPerAutNombreRep.setValue("");
		editsMantPerAutApellidoRep.setValue("");
		pcbMatPerAutParentesco.setSelectedIndex(0);
		pcbMatPerAutAutMensaje.setSelectedIndex(2);
		pcbMatPerAutRepTitular.setSelectedIndex(2);
  		gridsMantPerAutorizada.clean();  		
  		dialogsMantPerAutorizada.setMsg("");	 		
  		imgButtonsMantPerAutAgregar.setEnable();
  		imgButtonsMantPerAutModificar.setDisable();
  		imgButtonsMantPerAutEliminar.setDisable();
		Tool.getGridData('MantObject', 'get' + this.windowName, dialogsMantPerAutorizada, gridsMantPerAutorizada, false, editsMantPerAutCi, editsMantPerAutCi, editsMantPerAutCiRep, editsMantPerAutCiRep);
	},

	coreUpdate: function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");
		
		if (editsMantPerAutCi.valid(dialogsMantPerAutorizada)) 
			if (editsMantPerAutNombre.valid(dialogsMantPerAutorizada)) 
				if (editsMantPerAutApellido.valid(dialogsMantPerAutorizada)) 
					if (editsMantPerAutCiRep.valid(dialogsMantPerAutorizada)) 
						if (editsMantPerAutNombreRep.valid(dialogsMantPerAutorizada)) 
							if (editsMantPerAutApellidoRep.valid(dialogsMantPerAutorizada)) 
								if (pcbMatPerAutParentesco.valid(dialogsMantPerAutorizada))
									if (pcbMatPerAutAutMensaje.valid(dialogsMantPerAutorizada)) 
										if (pcbMatPerAutRepTitular.valid(dialogsMantPerAutorizada)) {
											if (methodName != 'eliminar') {
			                                	rlx.add('reg', pcbMatPerAutParentesco);
			                                	rlx.add('reg', pcbMatPerAutAutMensaje);
			                                	rlx.add('reg', pcbMatPerAutRepTitular);
			                                }						
											rlx.addInt('reg', editsMantPerAutCi.hideId);
			                                rlx.addInt('reg', editsMantPerAutCiRep.hideId);
			                    			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()', rlx);
										}
	}
};
