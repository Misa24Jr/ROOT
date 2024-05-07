var dialogsCargNotExcepcional = new Object();
var editsCargNotExcCedula = new Object();
var editsCargNotExcNombre = new Object();
var editsCargNotExcApellido = new Object();
var editsCargNotExcCarrera = new Object();
var editsCargNotExcPosicion = new Object();
var editsCargNotExcSeccion = new Object();
var pcbCargNotExcPeriodo = new Object();
var pcbCargNotExcLapso = new Object();
var pcbCargNotExcMateria = new Object(); 
var editsCargNotExcNota = new Object();
var editsCargNotExcPunAdicional = new Object();
var editsCargNotExcInasistencia = new Object();
var gridsCargNotExcepcional = new Object();
var imgButtonsCargNotExcAgregar = new Object();
var imgButtonsCargNotExcModificar = new Object();
var imgButtonsCargNotExcEliminar = new Object();
var imgButtonsCargNotExcLimpiar = new Object();
var imgButtonsCargNotExcBuscar = new Object();
var imgButtonsCargNotExcSalir = new Object();
var mw_CargNotExcepcional = new Object();// minWindow
       
var CargNotExcepcional = {
    windowName : 'CargNotExcepcional',
    isCreate: false,
    idRsmLps: 0,
    
    show: function() {
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsCargNotExcepcional.isByClean())
			this.limpiar();			
		dialogsCargNotExcepcional.show();
	},
	
    hide: function() {
        dialogsCargNotExcepcional.hide();
    },
    
    createMWs: function() {
        mwCargNotExcepcional = desktop.addMinWindow('Nota Excep', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsCargNotExcepcional.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsCargNotExcepcional_Init : function() {
        dialogsCargNotExcepcional.setMinimizeXY(0,0);
        dialogsCargNotExcepcional.setCenterScreen();
        dialogsCargNotExcepcional.addSpace(0,0,20);
        dialogsCargNotExcepcional.addLn(1,1,1);
		dialogsCargNotExcepcional.setHeightCell(1,1,13);
		dialogsCargNotExcepcional.addObjToDialog(editsCargNotExcCedula,2,1,24);
		dialogsCargNotExcepcional.addObjToDialog(editsCargNotExcNombre,2,1,24);
		dialogsCargNotExcepcional.addObjToDialog(editsCargNotExcApellido,2,1,24);
		dialogsCargNotExcepcional.adjAllMarginObj(2,1,15);
		dialogsCargNotExcepcional.addObjToDialog(pcbCargNotExcPeriodo,3,1,24);
		dialogsCargNotExcepcional.addObjToDialog(pcbCargNotExcLapso,3,1,24);
		dialogsCargNotExcepcional.adjAllMarginObj(3,1,15);
		dialogsCargNotExcepcional.addObjToDialog(editsCargNotExcCarrera,4,1,24);
		dialogsCargNotExcepcional.addObjToDialog(editsCargNotExcPosicion,4,1,24);
		dialogsCargNotExcepcional.addObjToDialog(editsCargNotExcSeccion,4,1,24);
		dialogsCargNotExcepcional.adjAllMarginObj(4,1,15);
		dialogsCargNotExcepcional.addObjToDialog(pcbCargNotExcMateria,5,1,24);
		dialogsCargNotExcepcional.addObject(editsCargNotExcNota,548,112);
		dialogsCargNotExcepcional.addObject(editsCargNotExcPunAdicional,620,112);
		dialogsCargNotExcepcional.addObject(editsCargNotExcInasistencia,692,112);
		dialogsCargNotExcepcional.addObjToDialog(gridsCargNotExcepcional.getObject(),6,1,24);
        dialogsCargNotExcepcional.addLn(7,1,1);
		dialogsCargNotExcepcional.setHeightCell(7,1,17);
		dialogsCargNotExcepcional.addObjToDialog(imgButtonsCargNotExcAgregar,8,1);
        dialogsCargNotExcepcional.addObjToDialog(imgButtonsCargNotExcModificar,8,1);
		dialogsCargNotExcepcional.addObjToDialog(imgButtonsCargNotExcEliminar,8,1);
        dialogsCargNotExcepcional.addObjToDialog(imgButtonsCargNotExcLimpiar,8,1);
		dialogsCargNotExcepcional.addObjToDialog(imgButtonsCargNotExcBuscar,8,1);
        dialogsCargNotExcepcional.addObjToDialog(imgButtonsCargNotExcSalir,8,1);
        dialogsCargNotExcepcional.adjAllMarginObj(8,1,20);
        dialogsCargNotExcepcional.leftMarginObj(8,1,0,49); 
    },
    
    gridsCargNotExcepcional_Init : function() {
        gridsCargNotExcepcional.setFixColRow(false,true);
        gridsCargNotExcepcional.addTitleVectorX(['Materia','Lapso','Nota','Punto +','Ausente','idLapso','idCurso','idRsmlps']);
        gridsCargNotExcepcional.showData();
        gridsCargNotExcepcional.setSizeCol(1,404);
        gridsCargNotExcepcional.setSizeCol(2,100);
        gridsCargNotExcepcional.setSizeCol(3,80);
        gridsCargNotExcepcional.setSizeCol(4,80);
        gridsCargNotExcepcional.setSizeCol(5,80);
        gridsCargNotExcepcional.setSizeCol(6,0);
        gridsCargNotExcepcional.setSizeCol(7,0);
        gridsCargNotExcepcional.setSizeCol(8,0);
        gridsCargNotExcepcional.hideCol(6);
        gridsCargNotExcepcional.hideCol(7);
        gridsCargNotExcepcional.hideCol(8);
    },

    create : function() {
    	dialogsCargNotExcepcional = dialogs.create('dialogsCargNotExcepcional',0,0,790,502,'CARGA DE NOTA POR LAPSO');
    	dialogsCargNotExcepcional.setAdjY(80);
    	editsCargNotExcCedula = edits.create('editsCargNotExcCedula','editsCargNotExcCedula','C.i. (*):',1,94,'normal');
    	editsCargNotExcCedula.setValidInteger();
      	editsCargNotExcCedula.setFieldFind(true);
      	editsCargNotExcNombre = edits.create('editsCargNotExcNombre','editsCargNotExcNombre','Nombre (*):',1,102,'normal');
      	editsCargNotExcNombre.setValidEmpty();
      	editsCargNotExcNombre.setFieldFind(true);
      	editsCargNotExcApellido = edits.create('editsCargNotExcApellido','editsCargNotExcApellido','Apellido (*):',1,76,'normal');
      	editsCargNotExcApellido.setValidEmpty();
      	editsCargNotExcApellido.setFieldFind(true);
      	editsCargNotExcCarrera = edits.create('editsCargNotExcCarrera','editsCargNotExcCarrera','Carrera:',1,94,'normal');
      	editsCargNotExcCarrera.setValidEmpty();
      	editsCargNotExcCarrera.readOnly(true);
      	editsCargNotExcPosicion = edits.create('editsCargNotExcPosicion','editsCargNotExcPosicion','Posición:',1,102,'normal');
    	editsCargNotExcPosicion.setValidInteger();
      	editsCargNotExcPosicion.readOnly(true);
      	editsCargNotExcSeccion = edits.create('editsCargNotExcSeccion','editsCargNotExcSeccion','Sección:',1,76,'normal');
      	editsCargNotExcSeccion.setValidEmpty();
      	editsCargNotExcSeccion.readOnly(true);
      	pcbCargNotExcPeriodo = powerComboBox.create('pcbCargNotExcPeriodo','pcbCargNotExcPeriodo','Periodo (+):',1,94);
      	pcbCargNotExcPeriodo.enableReadOnlyEditor();
      	pcbCargNotExcPeriodo.addEmptyOption();
      	pcbCargNotExcPeriodo.setValidEmpty();
      	pcbCargNotExcLapso = powerComboBox.create('pcbCargNotExcLapso','pcbCargNotExcLapso','Lapso (^):',1,102);
    	pcbCargNotExcLapso.enableReadOnlyEditor();
    	pcbCargNotExcLapso.addEmptyOption();
    	pcbCargNotExcLapso.setValidEmpty();
    	pcbCargNotExcLapso.setFieldFind(true);
    	pcbCargNotExcMateria = powerComboBox.create('pcbCargNotExcMateria','pcbCargNotExcMateria','Materia (^):',1,94);
    	pcbCargNotExcMateria.setWidthCombo(395);
    	pcbCargNotExcMateria.enableReadOnlyEditor();
    	pcbCargNotExcMateria.addEmptyOption();
    	pcbCargNotExcMateria.setValidEmpty();
		editsCargNotExcNota = edits.create('editsCargNotExcNota','editsCargNotExcNota','Nota:',1,37,'normal');
    	editsCargNotExcNota.setValidInteger();
      	editsCargNotExcPunAdicional = edits.create('editsCargNotExcPunAdicional','editsCargNotExcPunAdicional','Pto. + :',1,47,'normal');
      	editsCargNotExcPunAdicional.setValidInteger();
      	editsCargNotExcInasistencia = edits.create('editsCargNotExcInasistencia','editsCargNotExcInasistencia','Ausente:',1,57,'normal');
      	editsCargNotExcInasistencia.setValidInteger();
    	gridsCargNotExcepcional = grids.create('gridsCargNotExcepcional',15,8);
      	imgButtonsCargNotExcAgregar = imgButtons.create('imgButtonsCargNotExcAgregar','Agregar','ok.png');
      	imgButtonsCargNotExcModificar = imgButtons.create('imgButtonsCargNotExcModificar','Modificar','icono_modificar.png');
      	imgButtonsCargNotExcEliminar = imgButtons.create('imgButtonsCargNotExcEliminar','Eliminar','eliminar.png');
      	imgButtonsCargNotExcLimpiar = imgButtons.create('imgButtonsCargNotExcLimpiar','Limpiar','limpiar.png');      	
      	imgButtonsCargNotExcBuscar = imgButtons.create('imgButtonsCargNotExcBuscar','Buscar','icono_buscar.png');
      	imgButtonsCargNotExcSalir = imgButtons.create('imgButtonsCargNotExcSalir','Salir','salir.png');
		editsCargNotExcCedula.setSizeEdit(149);
		editsCargNotExcNombre.setSizeEdit(149);
		editsCargNotExcApellido.setSizeEdit(149);
		editsCargNotExcCarrera.setSizeEdit(149);
		editsCargNotExcPosicion.setSizeEdit(149);
		editsCargNotExcSeccion.setSizeEdit(50);
		editsCargNotExcNota.setSizeEdit(20);
		editsCargNotExcNota.setMaxLength(2);
		editsCargNotExcPunAdicional.setSizeEdit(20);
		editsCargNotExcPunAdicional.setMaxLength(2);
		editsCargNotExcInasistencia.setSizeEdit(20);
		editsCargNotExcInasistencia.setMaxLength(2);
    	imgButtonsCargNotExcAgregar.setDimension(90,22);
    	imgButtonsCargNotExcModificar.setDimension(90,22);
    	imgButtonsCargNotExcEliminar.setDimension(90,22);
    	imgButtonsCargNotExcLimpiar.setDimension(90,22);
    	imgButtonsCargNotExcBuscar.setDimension(90,22);
    	imgButtonsCargNotExcSalir.setDimension(90,22);
	},

	init : function() {
		this.create();
		this.setEvents(); 
		this.dialogsCargNotExcepcional_Init();
		this.gridsCargNotExcepcional_Init();
		this.createMWs();
	},
	
    limpiar : function() {
		this.idRsmLps = 0;
    	editsCargNotExcCedula.hideId = -1;
  		editsCargNotExcCedula.setValue("");
  		editsCargNotExcNombre.setValue("");
  		editsCargNotExcApellido.setValue("");
  		editsCargNotExcCarrera.setValue("");
  		editsCargNotExcPosicion.setValue("");
  		editsCargNotExcSeccion.setValue("");
  		pcbCargNotExcPeriodo.clear();
  		pcbCargNotExcLapso.clear();
  		pcbCargNotExcMateria.clear();
  		editsCargNotExcNota.setValue("");
  		editsCargNotExcPunAdicional.setValue("0");
  		editsCargNotExcInasistencia.setValue("0");
    	gridsCargNotExcepcional.clean();
		imgButtonsCargNotExcAgregar.setEnable();
		imgButtonsCargNotExcModificar.setDisable();
		imgButtonsCargNotExcEliminar.setDisable();
  		dialogsCargNotExcepcional.setMsg("");
    	dlgWait.hide();
    	Tool.cnnSrv('MantObject', 'getPlanEvaluacionesInit', this.windowName + '.loadDataPeriodo()');
	},

   	loadDataPeriodo : function() {
  		Tool.loadPowerComboData(dialogsCargNotExcepcional, pcbCargNotExcPeriodo, 0, 1, json('getMantPeriodoActivoPlan'));
  		pcbCargNotExcPeriodo.setSelectedIndex(1);
  		Tool.getPowerComboData('MantObject', 'getMantLapso', dialogsCargNotExcepcional, pcbCargNotExcLapso, 3, 0, pcbCargNotExcPeriodo);
   	},
	
	limpiarFind : function(ix) {
		editsCargNotExcCedula.hideId = -1;
  		editsCargNotExcCarrera.setValue("");
  		editsCargNotExcPosicion.setValue("");
  		editsCargNotExcSeccion.setValue("");
  		editsCargNotExcNota.setValue("");
  		editsCargNotExcPunAdicional.setValue("");
  		editsCargNotExcInasistencia.setValue("");
    	gridsCargNotExcepcional.clean();
		
  		switch (ix) {
		case 1: 
			editsCargNotExcNombre.setValue("");
			editsCargNotExcApellido.setValue("");  		
			break;
		case 2: 
			editsCargNotExcCedula.setValue("");
			editsCargNotExcApellido.setValue("");  		
			break;
		default:
			editsCargNotExcCedula.setValue("");
		    editsCargNotExcNombre.setValue("");
			break;
		} 
  	},

   	buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");

  		editsCargNotExcPunAdicional.setValue("0");
  		editsCargNotExcInasistencia.setValue("0");
    	if (editsCargNotExcCedula.getValue() != '' && editsCargNotExcNombre.getValue() != '' && editsCargNotExcApellido.getValue() != '') {
    		if (pcbCargNotExcPeriodo.valid(dialogsCargNotExcepcional)) {
    			rlx.add('reg', pcbCargNotExcPeriodo);
    			rlx.addInt('reg', editsCargNotExcCedula.hideId);
    			rlx.add('reg', pcbCargNotExcLapso);
    			rlx.add('reg', pcbCargNotExcLapso);
	    		Tool.cnnSrv('MantObject', 'getCargNotExcepcional', this.windowName + '.loadData()', rlx);
    		}
		}
		else if (editsCargNotExcCedula.getValue() != '' || editsCargNotExcNombre.getValue() != '' || editsCargNotExcApellido.getValue() != '') {
        	ResuBusqueda.setObjectExtFnc(editsCargNotExcCedula, editsCargNotExcNombre, editsCargNotExcApellido, 'CargNotExcepcional.buscar()');
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsCargNotExcCedula, editsCargNotExcCedula, editsCargNotExcNombre, editsCargNotExcNombre, editsCargNotExcApellido, editsCargNotExcApellido);
		}
		else {
			Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},
	
   	loadData : function() {
  		Tool.loadPowerComboData(dialogsCargNotExcepcional, pcbCargNotExcMateria, 0, 1, json('getMateriaNotaExcep'));
  		Tool.loadGridData(dialogsCargNotExcepcional, gridsCargNotExcepcional, false, json('getCargNotExcepcional'));    
  		editsCargNotExcCarrera.setValue(json('getMateriaNotaExcep').data[2][0]);
  		editsCargNotExcPosicion.setValue(json('getMateriaNotaExcep').data[3][0]);
  		editsCargNotExcSeccion.setValue(json('getMateriaNotaExcep').data[4][0]);
   	},

	setEvents: function() {
		editsCargNotExcCedula.onClick(this.windowName+".limpiarFind(1)");
		editsCargNotExcCedula.onEnter(this.windowName + ".buscar()");
  		editsCargNotExcCedula.onChange(this.windowName + ".limpiarFind(1)");
  		editsCargNotExcNombre.onClick(this.windowName+".limpiarFind(2)");
  		editsCargNotExcNombre.onEnter(this.windowName + ".buscar()");
  		editsCargNotExcNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsCargNotExcApellido.onClick(this.windowName+".limpiarFind(3)");
  		editsCargNotExcApellido.onEnter(this.windowName + ".buscar()");
  		editsCargNotExcApellido.onChange(this.windowName + ".limpiarFind(3)");
  		editsCargNotExcNota.onEnter(this.windowName + ".process()");
  		pcbCargNotExcPeriodo.onChange("Tool.getPowerComboData('MantObject', 'getMantLapso', dialogsCargNotExcepcional, pcbCargNotExcLapso, 3, 0, pcbCargNotExcPeriodo)");
  		gridsCargNotExcepcional.onClickCells(this.windowName+".setData()");
  		gridsCargNotExcepcional.onEnter(this.windowName+".setData()");
  		imgButtonsCargNotExcAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsCargNotExcModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsCargNotExcEliminar.onClick(this.windowName+".coreUpdate('eliminar')"); 	
		imgButtonsCargNotExcLimpiar.onClick(this.windowName+".limpiar()");
		imgButtonsCargNotExcBuscar.onClick(this.windowName + ".buscar()");
		imgButtonsCargNotExcSalir.onClick("dialogsCargNotExcepcional.close()");
    },

    process : function() {
    	if (imgButtonsCargNotExcAgregar.isEnabled())
    		this.coreUpdate('agregar')
    	else
    		this.coreUpdate('modificar')
    },
    
    setData : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (gridsCargNotExcepcional.getDataCell(1) != "") {
			pcbCargNotExcMateria.findOption(gridsCargNotExcepcional.getDataCell(7));

			if (gridsCargNotExcepcional.getDataCell(2) != "") {
				imgButtonsCargNotExcAgregar.setDisable();
				imgButtonsCargNotExcModificar.setEnable();
				imgButtonsCargNotExcEliminar.setEnable();     
				pcbCargNotExcLapso.findOption(gridsCargNotExcepcional.getDataCell(6));
				editsCargNotExcNota.setValue(parseInt(gridsCargNotExcepcional.getDataCell(3)));
				editsCargNotExcPunAdicional.setValue(parseInt(gridsCargNotExcepcional.getDataCell(4)));
				editsCargNotExcInasistencia.setValue(parseInt(gridsCargNotExcepcional.getDataCell(5)));
				this.idRsmLps = gridsCargNotExcepcional.getDataCell(8);
	        }
			else {
				editsCargNotExcNota.setValue("");
				editsCargNotExcPunAdicional.setValue("0");
				editsCargNotExcInasistencia.setValue("0");
				imgButtonsCargNotExcAgregar.setEnable();
				imgButtonsCargNotExcModificar.setDisable();
				imgButtonsCargNotExcEliminar.setDisable();     
			}
			editsCargNotExcNota.setFocus();
		}
	},

	limpiarCoreUpdate : function(methodName) {
		if (methodName == "eliminar" && gridsCargNotExcepcional.getTotalRecord() == 1) {
    		this.limpiar();
    	}  		
    	else {
    		this.idRsmLps = 0;
    		dialogsCargNotExcepcional.setMsg("");
      		editsCargNotExcNota.setValue("");
      		editsCargNotExcPunAdicional.setValue("0");
      		editsCargNotExcInasistencia.setValue("0");
      		pcbCargNotExcMateria.setSelectedIndex(0);
    		imgButtonsCargNotExcAgregar.setEnable();
    		imgButtonsCargNotExcModificar.setDisable();
    		imgButtonsCargNotExcEliminar.setDisable();
      		gridsCargNotExcepcional.clean();
    	    Tool.getGridData('MantObject', 'getCargNotExcepcional', dialogsCargNotExcepcional, gridsCargNotExcepcional, 'gridsCargNotExcepcional.setFocus()', pcbCargNotExcPeriodo, new MiniDataSet(editsCargNotExcCedula.hideId, 'int', false), pcbCargNotExcLapso, pcbCargNotExcLapso);
    	}
  	},
  	
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");
		
  		if (editsCargNotExcCedula.valid(dialogsCargNotExcepcional))
			if (editsCargNotExcNombre.valid(dialogsCargNotExcepcional))  					
				if (editsCargNotExcApellido.valid(dialogsCargNotExcepcional))
					if (pcbCargNotExcPeriodo.valid(dialogsCargNotExcepcional))
						if (pcbCargNotExcLapso.valid(dialogsCargNotExcepcional))
							if (pcbCargNotExcMateria.valid(dialogsCargNotExcepcional))
								if (editsCargNotExcNota.valid(dialogsCargNotExcepcional)) {
									if (editsCargNotExcPunAdicional.getValue() == '') editsCargNotExcPunAdicional.setValue("0");
									if (editsCargNotExcInasistencia.getValue() == '') editsCargNotExcInasistencia.setValue("0");
	
									if (parseInt(editsCargNotExcNota.getValue()) < 1 || parseInt(editsCargNotExcNota.getValue()) > 20) {
										Alert.show('La nota ingresada debe ser mayor a: 0 y menor igual a: 20', 'SISTEMA', Alert.TYPE_INFO);
									}
									else if (parseInt(editsCargNotExcPunAdicional.getValue()) < 0 || parseInt(editsCargNotExcPunAdicional.getValue()) > 20) {
										Alert.show('El punto adicional ingresado debe ser mayor a: 0 y menor igual a: 20', 'SISTEMA', Alert.TYPE_INFO);
									}
									else if (parseInt(editsCargNotExcNota.getValue()) + parseInt(editsCargNotExcPunAdicional.getValue()) > 20) {
										Alert.show('La suma de la nota + punto adicional, debe ser menor a: 21', 'SISTEMA', Alert.TYPE_INFO);
									}
									else {
										if (methodName == 'eliminar')
											rlx.addInt('reg', this.idRsmLps);
										else if (methodName == 'agregar') {
											rlx.add('reg', pcbCargNotExcLapso);
											rlx.addInt('reg', editsCargNotExcCedula.hideId);
											rlx.add('reg', pcbCargNotExcMateria);
											rlx.add('reg', editsCargNotExcNota);
											rlx.add('reg', editsCargNotExcPunAdicional);
											rlx.add('reg', editsCargNotExcInasistencia);
											rlx.add('reg', pcbCargNotExcPeriodo);
										}
										else if (methodName == 'modificar') {
											rlx.add('reg', editsCargNotExcNota);
											rlx.add('reg', editsCargNotExcPunAdicional);
											rlx.add('reg', editsCargNotExcInasistencia);
										 	rlx.addInt('reg', this.idRsmLps);
											rlx.addInt('reg', editsCargNotExcCedula.hideId);
											rlx.add('reg', pcbCargNotExcMateria);
											rlx.add('reg', pcbCargNotExcPeriodo);
										}
					  					Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
									}
								}
	}
};
