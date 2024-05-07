var dialogsPagoReps = new Object();
var editsReprCedula = new Object();
var editsReprNombre = new Object();
var editsReprApellido = new Object();
var gridsPagoReps = new Object();
var imgButtonsReprBuscar = new Object();
var imgButtonsReprLimpiar = new Object();
var imgButtonsReprSalir = new Object();
var mwPagoReps = new Object();// minWindow

var PagoReps = {
	windowName : 'PagoReps',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
		  this.init();
		  this.isCreate = true;
		}

		if (dialogsPagoReps.isByClean())
 			this.limpiar();			
  		Pagos.pagoRepsActive = true;
		dialogsPagoReps.show();
	},
	
	hide : function() {
		dialogsPagoReps.hide();
	},
	
	createMWs : function() {
        	mwPagoReps  = desktop.addMinWindow('Representante', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsPagoReps .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsPagoReps_Init : function() {
        dialogsPagoReps.setMinimizeXY(0,0);
        dialogsPagoReps.setCenterScreen();
        dialogsPagoReps.addObject(editsReprCedula,20,38);
		dialogsPagoReps.addObject(editsReprNombre, 212,38);
		dialogsPagoReps.addObject(editsReprApellido, 426,38);
		dialogsPagoReps.addObject(gridsPagoReps.getObject(),20,69);
        dialogsPagoReps.addObject(imgButtonsReprBuscar,140,245);
        dialogsPagoReps.addObject(imgButtonsReprLimpiar,264,245);
        dialogsPagoReps.addObject(imgButtonsReprSalir,389,245);       
        imgButtonsReprBuscar.setDimension(94,22);
        imgButtonsReprLimpiar.setDimension(94,22);
        imgButtonsReprSalir.setDimension(94,22);
	},

	gridsPagoReps_Init : function()  {
        gridsPagoReps.setFixColRow(false,true);
        gridsPagoReps.addTitleVectorX(['Cedula','Nombre','Apellido','idPers','cellRep','diRep']);
        gridsPagoReps.showData();        
        gridsPagoReps.setSizeCol(1,89);
        gridsPagoReps.setSizeCol(2,259);
        gridsPagoReps.setSizeCol(3,259);
        gridsPagoReps.setSizeCol(4,0);
        gridsPagoReps.setSizeCol(5,0);
        gridsPagoReps.setSizeCol(6,0);
        gridsPagoReps.hideCol(4);
        gridsPagoReps.hideCol(5);
        gridsPagoReps.hideCol(6);
	},

	create : function() {
		dialogsPagoReps = dialogs.create('dialogsPagoReps',0,0,652,255,'REPRESENTANTE');
		editsReprCedula = edits.create('editsReprCedula','editsReprCedula','C.i. (*):',3,50,'normal');
		editsReprCedula.setValidInteger();
		editsReprCedula.setFieldFind(true);
        editsReprCedula.setSizeEdit(125);
		editsReprCedula.setMaxLength(150);
		editsReprNombre = edits.create('editsReprNombre','editsReprNombre','Nombre (*):',3,75,'normal');
		editsReprNombre.setValidEmpty();
		editsReprNombre.setFieldFind(true);
		editsReprNombre.setSizeEdit(125);
		editsReprApellido = edits.create('editsReprApellido','editsReprApellido','Apellido (*):',3,75,'normal');
		editsReprApellido.setValidEmpty();
		editsReprApellido.setFieldFind(true);
		editsReprApellido.setSizeEdit(125);
		gridsPagoReps = grids.create('gridsPagoReps',6,6);
		imgButtonsReprBuscar = imgButtons.create('imgButtonsReprBuscar','Buscar','icono_buscar.png');
		imgButtonsReprLimpiar = imgButtons.create('imgButtonsReprLimpiar','Limpiar','limpiar.png');
		imgButtonsReprSalir = imgButtons.create('imgButtonsReprSalir','Salir','salir.png');
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsPagoReps_Init();
		this.gridsPagoReps_Init();
		this.createMWs(); 
	},
  	
	limpiarFind : function(ix) {
		editsReprCedula.hideId = -1;
		gridsPagoReps.clean();
  		dialogsPagos.setMsg("");

  		switch (ix) {
		case 1: 
			editsReprNombre.setValue("");
			editsReprApellido.setValue("");  		
			break;
		case 2: 
			editsReprCedula.setValue("");
			editsReprApellido.setValue("");  		
			break;
		default:
			editsReprCedula.setValue("");
			editsReprNombre.setValue("");
			break;
		} 
  	},

  	limpiar : function() {
  		editsReprCedula.hideId = -1;
  		dialogsPagoReps.setMsg("");
  		editsReprCedula.setValue("");
  		editsReprNombre.setValue("");
  		editsReprApellido.setValue("");
  		gridsPagoReps.clean();
  		procPagos.clean();  		
  		Pagos.limpiar();  		
  	},

  	setData : function() {
  		gridsPagoDatAlumno.clean();
		if (gridsPagoReps.getDataCell(1) != "") {
			editsPagoCi.setValue(gridsPagoReps.getDataCell(1));
        	editsPagoNombre.setValue(gridsPagoReps.getDataCell(2));
        	editsPagoApellido.setValue(gridsPagoReps.getDataCell(3));
        	editsPagoCi.hideId = gridsPagoReps.getDataCell(4).trim();
	  		editsPagoCliCi.setValue(editsReprCedula.getValue());
	  		editsPagoCliNombre.setValue(editsReprNombre.getValue());
	  		editsPagoCliApellido.setValue(editsReprApellido.getValue());
	  		editsPagoCliTelefono.setValue(gridsPagoReps.getDataCell(5));
	  		editsPagoCliDireccion.setValue(gridsPagoReps.getDataCell(6));
	  		dialogsPagos.show();
			Pagos.getCarrera();
	  	}
	},

	setEvents : function() {
		editsReprCedula.onEnter(this.windowName + ".buscar()");
		editsReprCedula.onChange(this.windowName + ".limpiarFind(1)");
		editsReprCedula.onClick(this.windowName + ".limpiarFind(1)");
		editsReprNombre.onEnter(this.windowName + ".buscar()");
		editsReprNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsReprNombre.onClick(this.windowName + ".limpiarFind(2)");
  		editsReprApellido.onEnter(this.windowName + ".buscar()");
  		editsReprApellido.onChange(this.windowName + ".limpiarFind(3)");
  		editsReprApellido.onClick(this.windowName + ".limpiarFind(3)");
  		gridsPagoReps.onClickCells(this.windowName + ".setData()");
  		gridsPagoReps.onEnter(this.windowName + ".setData()");
		imgButtonsReprBuscar.onClick(this.windowName + ".buscar()");
		imgButtonsReprLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsReprSalir.onClick('Pagos.pagoRepsActive = false; dialogsPagoReps.close();');
  		dialogsPagoReps.onClickCloseDialog('Pagos.pagoRepsActive = false');
  	},
  	
 	buscar : function() {
 		gridsPagoReps.clean();
		if (editsReprCedula.getValue() != '' && editsReprNombre.getValue() != '' && editsReprApellido.getValue() != '') {
			procPagos.clean();
			Pagos.limpiar(true);
			Tool.getGridData('MantObject', 'getPagoPorReps', dialogsPagoReps, gridsPagoReps, false, editsReprCedula);
		}
		else if (editsReprCedula.getValue() != '' || editsReprNombre.getValue() != '' || editsReprApellido.getValue() != '') { 
			ResuBusqueda.setObjectExtFnc(editsReprCedula, editsReprNombre, editsReprApellido, this.windowName + ".buscar()");
			Tool.getGridData('MantObject', 'getMantPersTodas', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsReprCedula, editsReprCedula, editsReprNombre, editsReprNombre, editsReprApellido, editsReprApellido);
		}
		else {
			Alert.show('Ingrese datos del Estudiante: C.i., Nombre, Apellido', 'SISTEMA', Alert.TYPE_INFO);
			editsReprCedula.valid(dialogsPagoReps);
			editsReprNombre.valid(dialogsPagoReps);
			editsReprApellido.valid(dialogsPagoReps);
		}
	}
};