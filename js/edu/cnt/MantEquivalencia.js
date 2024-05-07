var dialogsMantEquivalencia = new Object();
var edistMantEquAluCi = new Object();
var edistMantEquAluNombre = new Object();
var edistMantEquAluApellido = new Object();
var edistMantEquProCi = new Object();
var edistMantEquProNombre = new Object();
var edistMantEquProApellido = new Object();
var edistMantEquMatEquivaler = new Object();
var edistMantEquCodMateria = new Object();
var pcbMantEquInsProcedencia = new Object();
var pcbMantEquPensum = new Object();
var pcbMantEquMatEquivaler = new Object();
var pcbMantEquTipEquivalencia = new Object();
var pcbMantEquEstEquivalencia = new Object();
var pcbMantEquPeriodo = new Object();
var calendarsMantEquivalencia = new Object();
var edistMantEquNota = new Object();
var memoMantEquObservaciones = new Object();
var gridsMantEquivalencia = new Object();
var imgButtonsMantEstAdmAluAgregar = new Object();
var imgButtonsMantEstAdmAluModificar = new Object();
var imgButtonsMantEstAdmAluEliminar = new Object();
var imgButtonsMantEstAdmAluLimpiar = new Object();
var imgButtonsMantEstAdmAluBuscar = new Object();
var imgButtonsMantEstAdmAluReporte = new Object();
var imgButtonsModiEvaSalir = new Object();
var mwMantEquivalencia = new Object();// minWindow
var MantEquivalencia = {   
	windowName : 'MantEquivalencia',
	isCreate : false,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantEquivalencia.isByClean())
			this.limpiar('lmp');			
		dialogsMantEquivalencia.show();
	},
	
	hide : function(){
		dialogsMantEquivalencia.hide();
	},
	
	createMWs : function(){
		mwMantEquivalencia = desktop.addMinWindow('M.Equivalencia', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsMantEquivalencia.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantEquivalencia_Init : function(){
        dialogsMantEquivalencia.setMinimizeXY(0,0);
        dialogsMantEquivalencia.setCenterScreen();
        dialogsMantEquivalencia.addSpace(0,0,24);
        dialogsMantEquivalencia.addLn(1,1,1);
        dialogsMantEquivalencia.setHeightCell(1,1,17);         
		var c1 = container.create("c1",'Datos del Alumno',2);
		c1.setDimension(823,50);
		c1.setMarginLeftBarTitle(20);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#000000');
		c1.addObject(edistMantEquAluCi,  35,58);
		edistMantEquAluCi.setSizeEdit(149);
		c1.addObject(edistMantEquAluNombre,  309,58);
		edistMantEquAluNombre.setSizeEdit(149);
		c1.addObject(edistMantEquAluApellido, 618,58);
		edistMantEquAluApellido.setSizeEdit(149);	
		dialogsMantEquivalencia.addObjToDialog(c1, 2, 1);
        dialogsMantEquivalencia.addLn(3,1,1);
        dialogsMantEquivalencia.setHeightCell(3,1,15);        
        var c2 = container.create("c2",'Datos del Profesor Evaluador',2);
		c2.setDimension(823,50);
		c2.setMarginLeftBarTitle(20);
		c2.setPropertyMarco('groove',1,'#7e7e7e');
		c2.setFontTitle('verdana', 11, '#000000');		
		c2.addObject(edistMantEquProCi, 35,125);
		edistMantEquProCi.setSizeEdit(149);
		edistMantEquProCi.setMaxLength(2); 
		c2.addObject(edistMantEquProNombre, 309,125);
		edistMantEquProNombre.setSizeEdit(149);
		edistMantEquProNombre.setMaxLength(2); 
		c2.addObject(edistMantEquProApellido, 618,125);
		edistMantEquProApellido.setSizeEdit(149);
		edistMantEquProApellido.setMaxLength(2); 		
		dialogsMantEquivalencia.addObjToDialog(c2, 4, 1);
        dialogsMantEquivalencia.addLn(5,1,1);
        dialogsMantEquivalencia.setHeightCell(5,1,15);         
        var c3 = container.create("c3",'Datos Institucionales Pertinentes',3);
		c3.setDimension(823,120);
		c3.setMarginLeftBarTitle(20);
		c3.setPropertyMarco('groove',1,'#7e7e7e');
		c3.setFontTitle('verdana', 11, '#000000');
		c3.addObject(edistMantEquMatEquivaler, 35,192);
		edistMantEquMatEquivaler.setSizeEdit(149);
		c3.addObject(edistMantEquCodMateria, 309,192);
		edistMantEquCodMateria.setSizeEdit(149);		
		c3.addObject(pcbMantEquInsProcedencia, 618,192);
		c3.addObject(pcbMantEquPensum, 35,216);		
		c3.addObject(pcbMantEquMatEquivaler, 309,216);
		c3.addObject(pcbMantEquTipEquivalencia, 618,216);		
		c3.addObject(pcbMantEquEstEquivalencia, 35,240);	
		c3.addObject(pcbMantEquPeriodo, 309,240);
		c3.addObject(calendarsMantEquivalencia.getEditCalendar(),618,240);		
		c3.addObject(edistMantEquNota, 35,264);
		edistMantEquNota.setSizeEdit(149);
		c3.addObject(memoMantEquObservaciones, 308,264);
		memoMantEquObservaciones.vAlignCaption('middle');
		memoMantEquObservaciones.setDimension(407, 18);
		dialogsMantEquivalencia.addObjToDialog(c3, 6, 1);
		dialogsMantEquivalencia.addLn(7,1,1);
        dialogsMantEquivalencia.setHeightCell(7,1,14); 
		dialogsMantEquivalencia.addObjToDialog(gridsMantEquivalencia.getObject(),10,1);
		//IMGBUTTONS//        
		dialogsMantEquivalencia.addObjToDialog(imgButtonsMantEstAdmAluAgregar,12,1,39);
        imgButtonsMantEstAdmAluAgregar.setDimension(90,22);
        dialogsMantEquivalencia.addObjToDialog(imgButtonsMantEstAdmAluModificar,12,1,39);
        imgButtonsMantEstAdmAluModificar.setDimension(90,22);
        dialogsMantEquivalencia.addObjToDialog(imgButtonsMantEstAdmAluEliminar,12,1,39);
        imgButtonsMantEstAdmAluEliminar.setDimension(90,22);
		dialogsMantEquivalencia.addObjToDialog(imgButtonsMantEstAdmAluLimpiar,12,1,39);
        imgButtonsMantEstAdmAluLimpiar.setDimension(90,22);
		dialogsMantEquivalencia.addObjToDialog(imgButtonsMantEstAdmAluReporte,12,1,39); 
		imgButtonsMantEstAdmAluReporte.setDimension(90,22);
		dialogsMantEquivalencia.addObjToDialog(imgButtonsMantEstAdmAluBuscar,12,1,39); 
		imgButtonsMantEstAdmAluBuscar.setDimension(90,22);		
        dialogsMantEquivalencia.addObjToDialog(imgButtonsModiEvaSalir,12,1,39);
        imgButtonsModiEvaSalir.setDimension(90,22);
        dialogsMantEquivalencia.adjAllMarginObj(12,1,20);
        dialogsMantEquivalencia.leftMarginObj(12,1,0,32);		
    },
	
	gridsMantEquivalencia_Init : function() {
        gridsMantEquivalencia.setFixColRow(false,true);
        gridsMantEquivalencia.addTitleVectorX(['Id_persona','Id_fecha','Id_instproced','id_pensum','id_carrera','id_profesor','id_codmatequiva','id_observaciones','id_equivalencia','Materia Externa','Materia Equivalente','Pensum','Periodo','Tipo Equiv.','Estdo Equiv.','Institución']);
        gridsMantEquivalencia.showData();        
        gridsMantEquivalencia.setSizeCol(1,0);
        gridsMantEquivalencia.setSizeCol(2,0);
        gridsMantEquivalencia.setSizeCol(3,0);
        gridsMantEquivalencia.setSizeCol(4,0);
        gridsMantEquivalencia.setSizeCol(5,0);
        gridsMantEquivalencia.setSizeCol(6,0);
        gridsMantEquivalencia.setSizeCol(7,0);
        gridsMantEquivalencia.setSizeCol(8,0);
        gridsMantEquivalencia.setSizeCol(9,0);
        gridsMantEquivalencia.setSizeCol(10,149);
        gridsMantEquivalencia.setSizeCol(11,149);
        gridsMantEquivalencia.setSizeCol(12,100);
        gridsMantEquivalencia.setSizeCol(13,100);
        gridsMantEquivalencia.setSizeCol(14,100);
		gridsMantEquivalencia.setSizeCol(15,100);
		gridsMantEquivalencia.setSizeCol(16,119);		
		gridsMantEquivalencia.hideCol(1);
        gridsMantEquivalencia.hideCol(2);
        gridsMantEquivalencia.hideCol(3);
        gridsMantEquivalencia.hideCol(4);
        gridsMantEquivalencia.hideCol(5);
        gridsMantEquivalencia.hideCol(6);
        gridsMantEquivalencia.hideCol(7);
        gridsMantEquivalencia.hideCol(8);
        gridsMantEquivalencia.hideCol(9);
  },
  
	create : function(){
		dialogsMantEquivalencia = dialogs.create('dialogsMantEquivalencia',0,0,873,570,'EQUIVALENCIA');    
		dialogsMantEquivalencia.setAdjY(30);
		edistMantEquAluCi = edits.create('edistMantEquAluCi','edistMantEquAluCi','C.i. (*):',1,83,'normal');      
		edistMantEquAluCi.setValidEmpty();
		edistMantEquAluCi.setFieldFind(true);
		edistMantEquAluNombre = edits.create('edistMantEquAluNombre','edistMantEquAluNombre','Nombre (*):',1,117,'normal');      
		edistMantEquAluNombre.setValidEmpty();
		edistMantEquAluNombre.setFieldFind(true);
		edistMantEquAluApellido = edits.create('edistMantEquAluApellido','edistMantEquAluApellido','Apellido (*):',1,68,'normal');      
		edistMantEquAluApellido.setValidEmpty();
		edistMantEquAluApellido.setFieldFind(true);		
		edistMantEquProCi = edits.create('edistMantEquProCi','edistMantEquProCi','C.i. (*):',1,83,'normal');      
		edistMantEquProCi.setValidEmpty();
		edistMantEquProCi.setFieldFind(true);
		edistMantEquProNombre = edits.create('edistMantEquProNombre','edistMantEquProNombre','Nombre (*):',1,117,'normal');      
		edistMantEquProNombre.setValidEmpty();
		edistMantEquProNombre.setFieldFind(true);
		edistMantEquProApellido = edits.create('edistMantEquProApellido','edistMantEquProApellido','Apellido (*):',1,68,'normal');      
		edistMantEquProApellido.setValidEmpty();
		edistMantEquProApellido.setFieldFind(true);		
		edistMantEquMatEquivaler = edits.create('edistMantEquMatEquivaler','edistMantEquMatEquivaler','Materia Ext.:',1,83,'normal');      
		edistMantEquMatEquivaler.setValidEmpty();
		edistMantEquMatEquivaler.setFieldFind(true);
		edistMantEquCodMateria = edits.create('edistMantEquCodMateria','edistMantEquCodMateria','Código Materia Ext.:',1,117,'normal');      
		edistMantEquCodMateria.setValidEmpty();
		edistMantEquCodMateria.setFieldFind(true);		
		pcbMantEquInsProcedencia = powerComboBox.create('pcbMantEquInsProcedencia','pcbMantEquInsProcedencia','Institución:',1,68,'normal');      
		pcbMantEquInsProcedencia.addEmptyOption();
		pcbMantEquInsProcedencia.setValidEmpty();
		pcbMantEquInsProcedencia.enableReadOnlyEditor();		
		pcbMantEquPensum = powerComboBox.create('pcbMantEquPensum','pcbMantEquPensum','Pensum (*):',1,83); 
		pcbMantEquPensum.addEmptyOption();
		pcbMantEquPensum.setValidEmpty();
		pcbMantEquPensum.enableReadOnlyEditor();		
		pcbMantEquMatEquivaler = powerComboBox.create('pcbMantEquMatEquivaler','pcbMantEquMatEquivaler','Materia Equiv (*):',1,117); 
		pcbMantEquMatEquivaler.addEmptyOption();
		pcbMantEquMatEquivaler.setValidEmpty();
		pcbMantEquMatEquivaler.enableReadOnlyEditor();
		pcbMantEquTipEquivalencia = powerComboBox.create('pcbMantEquTipEquivalencia','pcbMantEquTipEquivalencia','Tipo Equiv.:',1,68); 
		pcbMantEquTipEquivalencia.addEmptyOption();
		pcbMantEquTipEquivalencia.setValidEmpty();
		pcbMantEquTipEquivalencia.enableReadOnlyEditor();
		pcbMantEquEstEquivalencia = powerComboBox.create('pcbMantEquEstEquivalencia','pcbMantEquEstEquivalencia','Estado Equiv.:',1,83); 
		pcbMantEquEstEquivalencia.addEmptyOption();
		pcbMantEquEstEquivalencia.setValidEmpty();
		pcbMantEquEstEquivalencia.enableReadOnlyEditor();				
		pcbMantEquPeriodo = powerComboBox.create('pcbMantEquPeriodo','pcbMantEquPeriodo','Periodo:',1,117); 
		pcbMantEquPeriodo.addEmptyOption();
		pcbMantEquPeriodo.setValidEmpty();
		pcbMantEquPeriodo.enableReadOnlyEditor();		
		calendarsMantEquivalencia = calendars.create('calendarsMantEquivalencia');
  		calendarsMantEquivalencia.setDataType('date');
  		calendarsMantEquivalencia.setValidEmpty();
        calendarsMantEquivalencia.setWidthEditCalendar(126);
        calendarsMantEquivalencia.setCaption('Fecha:',1,68);
        calendarsMantEquivalencia.sendToFrom(100); 
		edistMantEquNota = edits.create('edistMantEquNota','edistMantEquNota','Nota:',1,83,'normal');      
		edistMantEquNota.setValidEmpty();
		edistMantEquNota.setFieldFind(true);
		memoMantEquObservaciones = memo.create('memoMantEquObservaciones','Observaciones:', 1, 1, 115);
        memoMantEquObservaciones.setValidEmpty();
        memoMantEquObservaciones.setMaxLength(4000);		
		gridsMantEquivalencia = grids.create('gridsMantEquivalencia',10,16);
		imgButtonsMantEstAdmAluAgregar = imgButtons.create('imgButtonsMantEstAdmAluAgregar','Agregar','ok.png');
		imgButtonsMantEstAdmAluModificar = imgButtons.create('imgButtonsMantEstAdmAluModificar','Modificar','icono_modificar.png');
		imgButtonsMantEstAdmAluModificar.setDisable();
		imgButtonsMantEstAdmAluEliminar = imgButtons.create('imgButtonsMantEstAdmAluEliminar','Eliminar','eliminar.png');
		imgButtonsMantEstAdmAluEliminar.setDisable();
		imgButtonsMantEstAdmAluLimpiar = imgButtons.create('imgButtonsMantEstAdmAluLimpiar','Limpiar','limpiar.png');
		imgButtonsMantEstAdmAluBuscar = imgButtons.create('imgButtonsMantEstAdmAluBuscar','Buscar','icono_buscar.png');
		imgButtonsMantEstAdmAluReporte = imgButtons.create('imgButtonsMantEstAdmAluReporte','Reporte','print.png');
		imgButtonsModiEvaSalir = imgButtons.create('imgButtonsModiEvaSalir','Salir','salir.png');
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsMantEquivalencia_Init();
		this.gridsMantEquivalencia_Init();
		this.createMWs();
	},
  
  	limpiarFind : function(ix) {
  		edistMantEquAluCi.hideId = -1;
  		
  		switch (ix) {
		case 1: 
	  		edistMantEquAluNombre.setValue("");
	  		edistMantEquAluApellido.setValue("");  		
			break;
		case 2: 
	  		edistMantEquAluCi.setValue("");
	  		edistMantEquAluApellido.setValue("");  		
			break;
		default:
	  		edistMantEquAluCi.setValue("");
  			edistMantEquAluNombre.setValue("");
			break;
		} 
  	},
  	
  	limpiar : function(tipo) {
  		edistMantEquAluCi.hideId = -1;
  		edistMantEquAluCi.setValue("");
  		edistMantEquAluNombre.setValue("");
  		edistMantEquAluApellido.setValue("");		
		edistMantEquProCi.setValue("");
  		edistMantEquProNombre.setValue("");
  		edistMantEquProApellido.setValue("");
		edistMantEquMatEquivaler.setValue("");
		edistMantEquCodMateria.setValue("");
		edistMantEquNota.setValue("");
		calendarsMantEquivalencia.clear();
		memoMantEquObservaciones.setText("");		
  		dialogsMantEquivalencia.setMsg("");
  		imgButtonsMantEstAdmAluAgregar.setEnable();
  		imgButtonsMantEstAdmAluModificar.setDisable();
  		imgButtonsMantEstAdmAluEliminar.setDisable();
  		/*
  		if (tipo == "lmp")
  		    Tool.cnnSrv('MantObject', 'getMantOrganizacion', this.windowName + '.loadDataInit()');
  		else
  	  		dlgWait.hide();
  	  	*/
	},
	/*
	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsMantEquivalencia, pcbModiEvaOrg, 0, 1, json('getData'));
		Tool.getContext(dialogsMantEquivalencia, pcbModiEvaOrg, pcbModiEvaSubOrg, pcbMantEquTipEquivalencia, this.windowName + ".resetElements('carr')");
	},

  	buscar : function() {
  		customGridMantEquivalencia.clean();
  		imgButtonsMantEstAdmAluAgregar.setEnable();
  		imgButtonsMantEstAdmAluModificar.setDisable();
  		imgButtonsMantEstAdmAluEliminar.setDisable();
  		imgButtonsModiEvaReporte.setDisable();
		if (edistMantEquAluCi.getValue() != '' && edistMantEquAluNombre.getValue() != '' && edistMantEquAluApellido.getValue() != '') {
			this.getMantEquivalencia();
		}
		else if (edistMantEquAluCi.getValue() != '' || edistMantEquAluNombre.getValue() != '' || edistMantEquAluApellido.getValue() != '') {
	  		imgButtonsMantEstAdmAluAgregar.setDisable();
			hideIdCedula = edistMantEquAluCi;
        	hideDeNombre = edistMantEquAluNombre;
        	hideDeApellido = edistMantEquAluApellido;	
			Tool.getGridData('MantObject', 'getMantPersProf', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', edistMantEquAluCi, edistMantEquAluCi, edistMantEquAluNombre, edistMantEquAluNombre, edistMantEquAluApellido, edistMantEquAluApellido);
		}
		else {
			Alert.show('Debe ingresar al menos: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},  
	*/
    setEvents : function() {
		edistMantEquAluCi.onEnter(this.windowName + ".buscar()");
		edistMantEquAluCi.onChange(this.windowName + ".limpiarFind(1)");
		edistMantEquAluNombre.onEnter(this.windowName + ".buscar()");
		edistMantEquAluNombre.onChange(this.windowName + ".limpiarFind(2)");
		edistMantEquAluApellido.onEnter(this.windowName + ".buscar()");
		edistMantEquAluApellido.onChange(this.windowName + ".limpiarFind(3)");
		pcbMantEquTipEquivalencia.onChange(this.windowName + ".resetElements('carr')");
		gridsMantEquivalencia.onClickCells(this.windowName + ".setData()");
		imgButtonsMantEstAdmAluAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
		imgButtonsMantEstAdmAluModificar.onClick(this.windowName + ".coreUpdate('modificar')");
		imgButtonsMantEstAdmAluEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
		imgButtonsMantEstAdmAluLimpiar.onClick(this.windowName + ".limpiar('lmp')");
		imgButtonsMantEstAdmAluBuscar.onClick(this.windowName + ".buscar()");
		imgButtonsModiEvaSalir.onClick('dialogsMantEquivalencia.close()');
    },  
	
    
    setData: function(){
		var rlx = xmlStructs.createRecordList("rlx");

		if (customGridMantEquivalencia.getDataCell(1) != "") {
        	editsMantCedIdentidad.setValue(gridsMantPersona.getDataCell(1));
            editsMantNombre.setValue(gridsMantPersona.getDataCell(2));
            editsMantApellido.setValue(gridsMantPersona.getDataCell(3));
            this.hideIdPeriodo = customGridMantEquivalencia.getDataCell(4);
            powerComboBoxMantNacionalidad.findOption(gridsMantPersona.getDataCell(6));
            powerComboBoxMantPerEstCivil.findOption(gridsMantPersona.getDataCell(7));            
            editsMantPerEmail1.setValue(gridsMantPersona.getDataCell(8));
            editsMantPerEmail2.setValue(gridsMantPersona.getDataCell(9));
            powerComboBoxMantPerGruSanguineo.findOption(gridsMantPersona.getDataCell(10));
            powerComboBoxMantPerStatus.findOption(gridsMantPersona.getDataCell(11));
            powerComboBoxMantPerSexo.findOption(gridsMantPersona.getDataCell(12));
            editsMantTelCelular.setValue(gridsMantPersona.getDataCell(13));
            calendarsMantPersona.setFechaToEdit(gridsMantPersona.getDataCell(15));
            powerComboBoxMantPerProfesion.findOption(gridsMantPersona.getDataCell(18));
            editsMantPerRif.setValue(gridsMantPersona.getDataCell(19));
            editsMantPerDireccion.setValue(gridsMantPersona.getDataCell(20));
            editsMantPerConEmergencia.setValue(gridsMantPersona.getDataCell(21));
            imagesMantPersona.setSource('images/pht/' + gridsMantPersona.getDataCell(1) + '.jpg');
            imgButtonsMantPerAgregar.setDisable();
            imgButtonsMantPerModificar.setEnable();
            imgButtonsMantPerEliminar.setEnable();
			imgButtonsMantPerReporte.setEnable();
            rptIndividual = true;
            
            powerComboBoxMantPerPais.findOption(gridsMantPersona.getDataCell(14));
			rlx.addInt('reg', gridsMantPersona.getDataCell(14));
			rlx.addInt('reg', gridsMantPersona.getDataCell(14));
			rlx.addInt('reg', gridsMantPersona.getDataCell(16));
			rlx.addInt('reg', gridsMantPersona.getDataCell(16));
			Tool.cnnSrv('MantObject', 'getMantPersonaUbic', this.windowName + '.loadUbic()', rlx);
        }
    },
	
	coreUpdate: function(methodName) {
		if (edistMantEquAluCi.valid(dialogsMantEquivalencia)) 
			if (edistMantEquAluNombre.valid(dialogsMantEquivalencia))
				if (edistMantEquAluApellido) {
					Tool.cnnSrv("MantObject", methodName + this.windowName, this.windowName + ".limpiar('core')", customGridMantEquivalencia.getDataColumn(4));
				}
	},
   
};