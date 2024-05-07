var dialogsIngresoAlumno = new Object();
var editsIngresoAluCedula = new Object();
var editsIngresoAluNombre = new Object();
var editsIngresoAluApellido = new Object();
var pcbIngresoAluOrg = new Object();
var pcbIngresoAluSuborg = new Object();
var pcbIngresoAluCarrera = new Object();
var pcbIngresoAluModIngreso = new Object();
var pcbIngrAluPeriodo = new Object();
var pcbIngrAluPosicion = new Object();
var pcbIngresoAluInstitucion = new Object();
var editsDescripcionIngreso = new Object();
var calendarIngresoAluFeIngreso	= new Object();
var gridsIngresoAlumno = new Object();
var imgButtonsIngresoAluAgregar = new Object();
var imgButtonsIngresoAluModificar = new Object();
var imgButtonsIngresoAluEliminar = new Object();
var imgButtonsIngresoAluLimpiar = new Object();
var imgButtonsIngresoAluReporte = new Object();
var imgButtonsIngresoAluBuscar = new Object();
var imgButtonsIngresoAluSalir = new Object();
var mwIngresoAlumno = new Object();// minWindow

var IngresoAlumno = {
	windowName : 'IngresoAlumno',
	isCreate : false,
	idIngreso : 0,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsIngresoAlumno.isByClean())
 			this.limpiar();			
		dialogsIngresoAlumno.show();
	},
	
	hide : function() {
		dialogsIngresoAlumno.hide();
	},
	
	createMWs : function() {
		mwIngresoAlumno = desktop.addMinWindow('I. Estudiante', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsIngresoAlumno.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsIngresoAlumno_Init : function() {
        dialogsIngresoAlumno.setMinimizeXY(0,0);
        dialogsIngresoAlumno.setCenterScreen();
        dialogsIngresoAlumno.addSpace(1,0,20);
        dialogsIngresoAlumno.addLn(1,1,1);
		dialogsIngresoAlumno.setHeightCell(1,1,10);
  		dialogsIngresoAlumno.addObjToDialog(editsIngresoAluCedula,2,1,24);
        dialogsIngresoAlumno.addObjToDialog(editsIngresoAluNombre,2,1,24);
        dialogsIngresoAlumno.addObjToDialog(editsIngresoAluApellido,2,1,24);
  		dialogsIngresoAlumno.adjAllMarginObj(2,1,25);
		dialogsIngresoAlumno.addObjToDialog(pcbIngresoAluOrg,3,1,24);
		dialogsIngresoAlumno.addObjToDialog(pcbIngresoAluSuborg,3,1,24);
		dialogsIngresoAlumno.adjAllMarginObj(3,1,25);
		dialogsIngresoAlumno.addObjToDialog(pcbIngresoAluCarrera,4,1,24);
  		dialogsIngresoAlumno.addObjToDialog(pcbIngrAluPeriodo,4,1,24);
  		dialogsIngresoAlumno.addObjToDialog(pcbIngrAluPosicion,4,1,24);
		dialogsIngresoAlumno.adjAllMarginObj(4,1,25);		
        dialogsIngresoAlumno.addObjToDialog(calendarIngresoAluFeIngreso,5,1,24);
        dialogsIngresoAlumno.addObjToDialog(pcbIngresoAluInstitucion,5,1,24);
		dialogsIngresoAlumno.adjAllMarginObj(5,1,25);		
  		dialogsIngresoAlumno.addObjToDialog(pcbIngresoAluModIngreso,6,1,24);
        dialogsIngresoAlumno.addObjToDialog(editsDescripcionIngreso,6,1,24);        
		dialogsIngresoAlumno.adjAllMarginObj(6,1,25);		
        dialogsIngresoAlumno.addLn(7,1,1);
		dialogsIngresoAlumno.setHeightCell(7,1,9);
        dialogsIngresoAlumno.addObjToDialog(gridsIngresoAlumno,8,1,24);
        dialogsIngresoAlumno.addLn(9,1,1);
		dialogsIngresoAlumno.setHeightCell(9,1,9);
        dialogsIngresoAlumno.addObjToDialog(imgButtonsIngresoAluAgregar,10,1);
        dialogsIngresoAlumno.addObjToDialog(imgButtonsIngresoAluModificar,10,1);
        dialogsIngresoAlumno.addObjToDialog(imgButtonsIngresoAluEliminar,10,1);
        dialogsIngresoAlumno.addObjToDialog(imgButtonsIngresoAluLimpiar,10,1);
        dialogsIngresoAlumno.addObjToDialog(imgButtonsIngresoAluReporte,10,1);
        dialogsIngresoAlumno.addObjToDialog(imgButtonsIngresoAluBuscar,10,1);
        dialogsIngresoAlumno.addObjToDialog(imgButtonsIngresoAluSalir,10,1);
        dialogsIngresoAlumno.adjAllMarginObj(10,1,15);
        dialogsIngresoAlumno.leftMarginObj(10,1,0,55);
        calendarIngresoAluFeIngreso.sendToFrom(100);		
	},
	
	gridsIngresoAlumno_Init : function(totalRows) {
		gridsIngresoAlumno = customGrid.create('gridsIngresoAlumno','',405,814,22,totalRows);
		gridsIngresoAlumno.loadColumnTypeStruct(null, [customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT, 
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,																
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT],
																[81,160,160,140,0,100,70,0,0,0,0,0,0,0,0,0,0,0,20]);
		gridsIngresoAlumno.addTitleVectorX(['C.I.','Apellido','Nombre','Carrera','F. Ingreso','Modo Ingreso','F. Egreso','idpers','idmodingreso','id_inst','idorg','idsuborg','idcarr','deingreso','idIngreso','idPeri','idPosi','cell','INS']);
		gridsIngresoAlumno.setSelectedLnMode(0);
		//gridsIngresoAlumno.addObjToTitle(0, gridsIngresoAlumno.createTitleObj(0,'input','checkbox'));
		//gridsIngresoAlumno.activeCheckOnOff(0);
		gridsIngresoAlumno.hideCol(6); 
		gridsIngresoAlumno.hideCol(7); 
		gridsIngresoAlumno.hideCol(8); 
		gridsIngresoAlumno.hideCol(9); 
		gridsIngresoAlumno.hideCol(10); 
		gridsIngresoAlumno.hideCol(11); 
		gridsIngresoAlumno.hideCol(12); 
		gridsIngresoAlumno.hideCol(13); 
		gridsIngresoAlumno.hideCol(14); 
		gridsIngresoAlumno.hideCol(15); 
		gridsIngresoAlumno.hideCol(16); 
		gridsIngresoAlumno.hideCol(17); 
		
		for (var i=1; i<17; i++)
			gridsIngresoAlumno.setReadOnlyCol(i, true);
		gridsIngresoAlumno.hideBarTitle();
		gridsIngresoAlumno.hideBarControl();
	},

  	create : function() {
  		dialogsIngresoAlumno = dialogs.create('dialogsIngresoAlumno',0,0,849,592,'INGRESO DEL ESTUDIANTE');
  		editsIngresoAluCedula = edits.create('editsIngresoAluCedula','editsIngresoAluCedula','C.i. (*):',1,104,'normal');
  		editsIngresoAluCedula.setValidEmpty();
  		editsIngresoAluCedula.setValidInteger();
  		editsIngresoAluCedula.setFieldFind(true);
        editsIngresoAluCedula.setSizeEdit(149);
  		editsIngresoAluNombre = edits.create('editsIngresoAluNombre','editsIngresoAluNombre','Nombre (*):',1,122,'normal');
  		editsIngresoAluNombre.setValidEmpty();
  		editsIngresoAluNombre.setFieldFind(true);
        editsIngresoAluNombre.setSizeEdit(149);
		editsIngresoAluNombre.setMaxLength(50); 
  		editsIngresoAluApellido = edits.create('editsIngresoAluApellido','editsIngresoAluApellido','Apellido (*):',1,83,'normal');
  		editsIngresoAluApellido.setValidEmpty();
  		editsIngresoAluApellido.setFieldFind(true);
        editsIngresoAluApellido.setSizeEdit(149);
		editsIngresoAluApellido.setMaxLength(50); 
  		editsDescripcionIngreso = edits.create('editsDescripcionIngreso','editsDescripcionIngreso','Observación :',1,122,'normal');
  		editsDescripcionIngreso.setValidEmpty();
        editsDescripcionIngreso.setSizeEdit(407);
		editsDescripcionIngreso.setMaxLength(120); 
  		pcbIngresoAluOrg = powerComboBox.create('pcbIngresoAluOrg','pcbIngresoAluOrg','Organización (+):',1,104);
  		pcbIngresoAluOrg.setValidEmpty();
  		pcbIngresoAluOrg.enableReadOnlyEditor();
  		pcbIngresoAluOrg.addEmptyOption();
  		pcbIngresoAluSuborg = powerComboBox.create('pcbIngresoAluSuborg','pcbIngresoAluSuborg','Suborganización (^):',1,122);
  		pcbIngresoAluSuborg.setValidEmpty();
  		pcbIngresoAluSuborg.enableReadOnlyEditor();
  		pcbIngresoAluSuborg.addEmptyOption();
  		pcbIngresoAluSuborg.setFieldFind(true);
  		pcbIngresoAluSuborg.setWidthCombo(386);
  		pcbIngresoAluCarrera = powerComboBox.create('pcbIngresoAluCarrera','pcbIngresoAluCarrera','Carrera (^):',1,104);
  		pcbIngresoAluCarrera.setValidEmpty();
  		pcbIngresoAluCarrera.enableReadOnlyEditor();
  		pcbIngresoAluCarrera.addEmptyOption();
  		pcbIngresoAluCarrera.setFieldFind(true);
  		pcbIngresoAluModIngreso = powerComboBox.create('pcbIngresoAluModIngreso','pcbIngresoAluModIngreso','Modo Ingreso (*):',1,104);
  		pcbIngresoAluModIngreso.setValidEmpty();
  		pcbIngresoAluModIngreso.enableReadOnlyEditor();
  		pcbIngresoAluModIngreso.addEmptyOption(); 
  		pcbIngresoAluModIngreso.setFieldFind(true);
  		pcbIngrAluPeriodo = powerComboBox.create('pcbIngrAluPeriodo','pcbIngrAluPeriodo','Periodo (+):',1,122);
  		pcbIngrAluPeriodo.enableReadOnlyEditor();
  		pcbIngrAluPeriodo.addEmptyOption();
  		pcbIngrAluPeriodo.setValidEmpty();
  		pcbIngrAluPeriodo.setFieldFind(true);
  		pcbIngrAluPosicion = powerComboBox.create('pcbIngrAluPosicion','pcbIngrAluPosicion','Posición (^):',1,83);
  		pcbIngrAluPosicion.setValidEmpty();
  		pcbIngrAluPosicion.enableReadOnlyEditor();
  		pcbIngrAluPosicion.addEmptyOption();  
  		pcbIngresoAluInstitucion = powerComboBox.create('pcbIngresoAluInstitucion','pcbIngresoAluInstitucion','Procedencia:',1,122);
  		pcbIngresoAluInstitucion.setValidEmpty();
  		pcbIngresoAluInstitucion.enableReadOnlyEditor();
  		pcbIngresoAluInstitucion.addEmptyOption();
		pcbIngresoAluInstitucion.setWidthCombo(386);
		calendarIngresoAluFeIngreso = calendars.create("calendarIngresoAluFeIngreso");
        calendarIngresoAluFeIngreso.setValidEmpty();
        calendarIngresoAluFeIngreso.setCaption('Fecha :',1,104);
        calendarIngresoAluFeIngreso.setWidthEditCalendar(127);
        calendarIngresoAluFeIngreso.setDataType('date');
  		this.gridsIngresoAlumno_Init(16);
  		imgButtonsIngresoAluAgregar = imgButtons.create('imgButtonsIngresoAluAgregar','Agregar','ok.png');
  		imgButtonsIngresoAluModificar = imgButtons.create('imgButtonsIngresoAluModificar','Modificar','icono_modificar.png');
  		imgButtonsIngresoAluModificar.setDisable();
  		imgButtonsIngresoAluEliminar = imgButtons.create('imgButtonsIngresoAluEliminar','Eliminar','eliminar.jpg');
  		imgButtonsIngresoAluEliminar.setDisable();
  		imgButtonsIngresoAluLimpiar = imgButtons.create('imgButtonsIngresoAluLimpiar','Limpiar','limpiar.png');
  		imgButtonsIngresoAluReporte = imgButtons.create('imgButtonsIngresoAluReporte','Reporte','print.png');
  		imgButtonsIngresoAluBuscar = imgButtons.create('imgButtonsIngresoAluBuscar','Buscar','icono_buscar.png');
  		imgButtonsIngresoAluSalir = imgButtons.create('imgButtonsIngresoAluSalir','Salir','salir.png');
        imgButtonsIngresoAluAgregar.setDimension(85,22);
        imgButtonsIngresoAluModificar.setDimension(85,22);
        imgButtonsIngresoAluEliminar.setDimension(85,22);
        imgButtonsIngresoAluLimpiar.setDimension(85,22);
        imgButtonsIngresoAluReporte.setDimension(85,22);
        imgButtonsIngresoAluBuscar.setDimension(85,22);
        imgButtonsIngresoAluSalir.setDimension(85,22);
  	},

  	init : function() {
  		this.create();
  		this.setEvents();
  		this.dialogsIngresoAlumno_Init();
  		this.createMWs();
  	},
  	
  	loadPeriodo : function() {
  		pcbIngresoAluCarrera.setSelectedIndex(1);
  		pcbIngrAluPeriodo.clear()
		pcbIngrAluPosicion.clear()
    	if (pcbIngresoAluCarrera.getOption() != "")
    		Tool.getPowerComboDataFnc('pcbIngrAluPeriodo.setSelectedIndex(1);pcbIngresoAluCarrera.setSelectedIndex(0);', 'MantObject', 'getPeriodoXNivelAcad', dialogsIngresoAlumno, pcbIngrAluPeriodo, 0, 1, pcbIngresoAluCarrera.setModeReturnGetText(5));

  	},
  	
	resetElements : function(element) {
		if (element == 'org') {
			pcbIngresoAluSuborg.clear();
			Tool.rstPwrCmb(pcbIngresoAluCarrera);
			Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsIngresoAlumno, pcbIngresoAluSuborg, 1, 2, pcbIngresoAluOrg);		
			imgButtonsIngresoAluAgregar.setEnable();
			imgButtonsIngresoAluModificar.setDisable();
			imgButtonsIngresoAluEliminar.setDisable();
		}
		else if (element == 'sub') {
			pcbIngrAluPeriodo.clear();
			Tool.getPowerComboDataFnc(this.windowName + '.loadPeriodo()', 'MantObject', 'getMantCarreraTodo', dialogsIngresoAlumno, pcbIngresoAluCarrera, -1, 3, pcbIngresoAluSuborg);			
			imgButtonsIngresoAluAgregar.setEnable();
			imgButtonsIngresoAluModificar.setDisable();
			imgButtonsIngresoAluEliminar.setDisable();
		}
		else if (element == 'carr') {
	    	if (pcbIngresoAluCarrera.getOption() == "") {
		  		pcbIngrAluPeriodo.clear()
				pcbIngrAluPosicion.clear()
	    		Tool.getPowerComboDataFnc('pcbIngrAluPeriodo.setSelectedIndex(1);' + this.windowName + '.callPosicion();', 'MantObject', 'getPeriodoXNivelAcad', dialogsIngresoAlumno, pcbIngrAluPeriodo, 0, 1, pcbIngresoAluCarrera.setModeReturnGetText(5));
			}
		}
	},
	
  	limpiarFind : function(ix) {
  		editsIngresoAluCedula.hideId = -1;
		this.idIngreso = 0;
		pcbIngresoAluOrg.setSelectedIndex(0);
  		pcbIngresoAluSuborg.clear();
  		pcbIngresoAluCarrera.clear();
  		pcbIngrAluPeriodo.clear();
  		//imgButtonsIngresoAluReporte.setDisable();	
		
  		switch (ix) {
		case 1: 
	  		editsIngresoAluNombre.setValue("");
	  		editsIngresoAluApellido.setValue("");  		
			break;
		case 2: 
	  		editsIngresoAluCedula.setValue("");
	  		editsIngresoAluApellido.setValue("");  		
			break;
		default:
	  		editsIngresoAluCedula.setValue("");
  			editsIngresoAluNombre.setValue("");
			break;
		} 
  	},
	
  	limpiar : function() {
  		editsIngresoAluCedula.hideId = -1;
		this.idIngreso = 0;
  		pcbIngresoAluModIngreso.setSelectedIndex(0);  		
  		pcbIngresoAluInstitucion.setSelectedIndex(0); 
  		pcbIngresoAluOrg.setSelectedIndex(0);
  		pcbIngresoAluSuborg.clear()
  		pcbIngresoAluCarrera.clear()
  		pcbIngrAluPeriodo.clear()
  		pcbIngrAluPosicion.clear()
  		editsDescripcionIngreso.setValue("");
  		editsIngresoAluCedula.setValue("");
  		editsIngresoAluNombre.setValue("");
  		editsIngresoAluApellido.setValue("");
  		calendarIngresoAluFeIngreso.clear();
  		gridsIngresoAlumno.clean();
  		dialogsIngresoAlumno.setMsg("");
		imgButtonsIngresoAluAgregar.setEnable();
		imgButtonsIngresoAluModificar.setDisable();
		imgButtonsIngresoAluEliminar.setDisable();
		//imgButtonsIngresoAluReporte.setDisable();	
		Tool.cnnSrv('MantObject', 'getIngresoAlumnoInit', this.windowName + '.loadDataInit()');
  	},
  	
    loadDataInit: function() {
    	Tool.loadPowerComboData(dialogsIngresoAlumno, pcbIngresoAluModIngreso, 0, 1, json('getModoIngreso'));
		Tool.loadPowerComboData(dialogsIngresoAlumno, pcbIngresoAluInstitucion, 5, 0, json('getMantInsProcedencia'));
		Tool.loadPowerComboData(dialogsIngresoAlumno, pcbIngresoAluOrg, 0, 1, json('getData'));
    	Tool.getContext(dialogsIngresoAlumno, pcbIngresoAluOrg, pcbIngresoAluSuborg, pcbIngresoAluCarrera, this.windowName + ".resetElements('carr')");
    	dialogsIngresoAlumno.setMsg(xmlHttpReq.objStsResponse.shortInfo);
    	dlgWait.hide();
    },
   
    loadDataCustomGrid: function(retorno) {
    	var jsn = json('getIngresoAlumno');
    	
    	this.gridsIngresoAlumno_Init(jsn.data[0].length);
    	dialogsIngresoAlumno.addObject(gridsIngresoAlumno,20,163);
    	this.setEvents();
    	gridsIngresoAlumno.clean();    		
    	if (retorno == '')
    		Tool.loadGridData(dialogsIngresoAlumno, gridsIngresoAlumno, false, jsn);
    	else
    		Tool.loadGridData(dialogsIngresoAlumno, gridsIngresoAlumno, IngresoAlumno.reporte(), jsn);
    },
    
    callDataCustomGrid: function(retorno) {
    	var rlx = xmlStructs.createRecordList("rlx");
    	
    	rlx.add('reg', editsIngresoAluCedula);
    	rlx.add('reg', editsIngresoAluCedula);
    	rlx.add('reg', pcbIngresoAluSuborg);
    	rlx.add('reg', pcbIngresoAluSuborg);
    	rlx.add('reg', pcbIngresoAluCarrera.setModeReturnGetText(2));
    	rlx.add('reg', pcbIngresoAluCarrera.setModeReturnGetText(2));
    	rlx.add('reg', pcbIngrAluPeriodo);
    	rlx.add('reg', pcbIngrAluPeriodo);
    	rlx.add('reg', pcbIngresoAluModIngreso);
    	rlx.add('reg', pcbIngresoAluModIngreso);
    	Tool.cnnSrv("MantObject", "getIngresoAlumno", this.windowName + ".loadDataCustomGrid('" + retorno + "')", rlx);
    },
    
    buscar : function() {
  		editsDescripcionIngreso.setValue("");
  		gridsIngresoAlumno.clean();
  		dialogsIngresoAlumno.setMsg("");
		imgButtonsIngresoAluAgregar.setEnable();
		imgButtonsIngresoAluModificar.setDisable();
		imgButtonsIngresoAluEliminar.setDisable();
		
		if (editsIngresoAluCedula.getValue() != '' && editsIngresoAluNombre.getValue() != '' && editsIngresoAluApellido.getValue() != '') {
			this.callDataCustomGrid('');
		}
		else if (editsIngresoAluCedula.getValue() != '' || editsIngresoAluNombre.getValue() != '' || editsIngresoAluApellido.getValue() != '') {
	  		imgButtonsIngresoAluAgregar.setDisable();
        	ResuBusqueda.setObjectExtFnc(editsIngresoAluCedula, editsIngresoAluNombre, editsIngresoAluApellido, 'IngresoAlumno.buscar()');
			Tool.getGridData('MantObject', 'getAlumno', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsIngresoAluCedula, editsIngresoAluCedula, editsIngresoAluNombre, editsIngresoAluNombre, editsIngresoAluApellido, editsIngresoAluApellido);
		}
		else if (pcbIngresoAluOrg.valid(dialogsIngresoAlumno) && pcbIngresoAluSuborg.valid(dialogsIngresoAlumno) && pcbIngrAluPeriodo.valid(dialogsIngresoAlumno)) {
			this.callDataCustomGrid('');
		}
   	},  

   	setData : function(){
		var rlx = xmlStructs.createRecordList("rlx");

		if (gridsIngresoAlumno.getDataCell(gridsIngresoAlumno.getActualRow(), 0) != ""){
			imgButtonsIngresoAluAgregar.setDisable();
			imgButtonsIngresoAluModificar.setEnable();
			imgButtonsIngresoAluEliminar.setEnable();         
			editsIngresoAluCedula.setValue(gridsIngresoAlumno.getDataCell(gridsIngresoAlumno.getActualRow(), 0));
			editsIngresoAluNombre.setValue(gridsIngresoAlumno.getDataCell(gridsIngresoAlumno.getActualRow(), 2));
			editsIngresoAluApellido.setValue(gridsIngresoAlumno.getDataCell(gridsIngresoAlumno.getActualRow(), 1));
			calendarIngresoAluFeIngreso.setFechaToEdit(gridsIngresoAlumno.getDataCell(gridsIngresoAlumno.getActualRow(), 4));
			editsIngresoAluCedula.hideId= gridsIngresoAlumno.getDataCell(gridsIngresoAlumno.getActualRow(), 7);
			this.idIngreso = gridsIngresoAlumno.getDataCell(gridsIngresoAlumno.getActualRow(), 14);
			editsDescripcionIngreso.setValue(gridsIngresoAlumno.getDataCell(gridsIngresoAlumno.getActualRow(), 13));
            pcbIngresoAluModIngreso.findOption(gridsIngresoAlumno.getDataCell(gridsIngresoAlumno.getActualRow(), 8));
            pcbIngresoAluInstitucion.findOption(gridsIngresoAlumno.getDataCell(gridsIngresoAlumno.getActualRow(), 9));
            pcbIngresoAluOrg.findOption(gridsIngresoAlumno.getDataCell(gridsIngresoAlumno.getActualRow(), 10));
    		pcbIngrAluPeriodo.findOption(gridsIngresoAlumno.getDataCell(gridsIngresoAlumno.getActualRow(), 15));
    		pcbIngrAluPosicion.findOption(gridsIngresoAlumno.getDataCell(gridsIngresoAlumno.getActualRow(), 16));
			rlx.add('reg', pcbIngresoAluOrg);
			rlx.addInt('reg', gridsIngresoAlumno.getDataCell(gridsIngresoAlumno.getActualRow(), 11));//idsuborg
			Tool.cnnSrv('MantObject', 'getIngresoAlumnoOrg', this.windowName + '.loadInit()', rlx);
        }     			
	},
	
	loadInit: function(){
		var rlx = xmlStructs.createRecordList("rlx");

		Tool.loadPowerComboData(dialogsIngresoAlumno, pcbIngresoAluSuborg, 1, 2, json('getMantSuborganizacion'));
		Tool.loadPowerComboData(dialogsIngresoAlumno, pcbIngresoAluCarrera, -1, 3, json('getMantCarrera'));
		pcbIngresoAluSuborg.findOption(gridsIngresoAlumno.getDataCell(11));
		pcbIngresoAluCarrera.findOption(gridsIngresoAlumno.getDataCell(12),2);
		
		rlx.add('reg', pcbIngresoAluCarrera.setModeReturnGetText(2));
		Tool.cnnSrv('MantObject', 'getMantPensumPosicion', this.windowName + '.loadInitExt()', rlx);
	},
	
	loadInitExt: function() {
		Tool.loadPowerComboData(dialogsIngresoAlumno, pcbIngrAluPosicion, 0, 1, json('getMantPensumPosicion'));
		Tool.getPowerComboDataFnc(this.windowName + '.loadPerPos()','MantObject', 'getPeriodoXNivelAcad', dialogsIngresoAlumno, pcbIngrAluPeriodo, 0, 1, pcbIngresoAluCarrera.setModeReturnGetText(5));
	},
   
	loadPerPos: function() {
		pcbIngrAluPeriodo.findOption(gridsIngresoAlumno.getDataCell(15));
		pcbIngrAluPosicion.findOption(gridsIngresoAlumno.getDataCell(16));
	},
	
	callPosicion: function() {
		Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsIngresoAlumno, pcbIngrAluPosicion, 0, 1, pcbIngresoAluCarrera.setModeReturnGetText(2))
	},
	
	setEvents : function(){
		editsIngresoAluCedula.onEnter(this.windowName + ".buscar()");
		editsIngresoAluCedula.onChange(this.windowName + ".limpiarFind(1)");
		editsIngresoAluCedula.onClick(this.windowName + ".limpiarFind(1)");
		editsIngresoAluNombre.onEnter(this.windowName + ".buscar()");
		editsIngresoAluNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsIngresoAluNombre.onClick(this.windowName + ".limpiarFind(2)");
		editsIngresoAluApellido.onEnter(this.windowName + ".buscar()");
		editsIngresoAluApellido.onChange(this.windowName + ".limpiarFind(3)");
		editsIngresoAluApellido.onClick(this.windowName + ".limpiarFind(3)");
		pcbIngresoAluOrg.onChange(this.windowName + ".resetElements('org')");
		pcbIngresoAluSuborg.onChange(this.windowName + ".resetElements('sub')");
		pcbIngresoAluCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbIngrAluPeriodo.onChange(this.windowName + ".callPosicion()");
		gridsIngresoAlumno.onClickCells(this.windowName+".setData()");
		imgButtonsIngresoAluAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsIngresoAluModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsIngresoAluEliminar.onClick(this.windowName+".coreUpdate('eliminar')"); 	
		imgButtonsIngresoAluLimpiar.onClick('IngresoAlumno.limpiar()');
		imgButtonsIngresoAluReporte.onClick('IngresoAlumno.buscarReporte()');
		imgButtonsIngresoAluBuscar.onClick('IngresoAlumno.buscar()');
		imgButtonsIngresoAluSalir.onClick('dialogsIngresoAlumno.close()');
	},  
	
	buscarReporte : function() {
		if (pcbIngresoAluOrg.valid(dialogsIngresoAlumno) && pcbIngresoAluSuborg.valid(dialogsIngresoAlumno) && pcbIngrAluPeriodo.valid(dialogsIngresoAlumno)) {
			this.callDataCustomGrid('reporte');
		}
	},
	
	reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		//rep = new Report('portrait');
		rep = new Report('landscape');
    	rep.setPositionIcon(1056,110);
    	rep.setHeadImage(imgEduca.banner,false);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
    	rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','bold');
    	rep.addText(450, 173, 'INGRESO DE ESTUDIANTE',false);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','bold');
		rep.addText(20, 210, 'ORGANIZACIÓN :   '+pcbIngresoAluSuborg.getOption(),true);
		rep.addText(500, 210,'PERIODO :   '+pcbIngrAluPeriodo.getOption(),true);
		//////////////////////////////////////////TABLA DE DATOS///////////////////////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
  		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 9);	
		rep.addTable('tablaCuadHonor',['C.I.','APELLIDO','NOMBRE','CARRERA','F. INGRESO','MODO INGRESO','TELÉFONO','INSCRITO'],555,220);
		rep.setTotalRowTable(28);
		rep.setHeightRow(18);
		rep.setSizeColumnArray([110,230,230,195,90,115,96,74]);
		rep.setAlignData(['center','left','left','left','center','left','center','center']);
		rep.addJsonData('tablaCuadHonor','getIngresoAlumno',[0,1,2,3,4,5,17,18]); 
        //////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();    	
	},

	limpiarCoreUpdate : function(methodName) {
		this.idIngreso = 0;
		dialogsIngresoAlumno.setMsg("");
  		imgButtonsIngresoAluAgregar.setEnable();
  		imgButtonsIngresoAluModificar.setDisable();
  		imgButtonsIngresoAluEliminar.setDisable();

  		editsIngresoAluCedula.hideId = -1;
		this.idIngreso = 0;
		pcbIngresoAluOrg.setSelectedIndex(0);
  		pcbIngresoAluSuborg.clear();
  		pcbIngresoAluCarrera.clear();
  		pcbIngrAluPeriodo.clear();
	
  		gridsIngresoAlumno.clean();
  		this.callDataCustomGrid('');
  	},

	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

  		if (editsIngresoAluCedula.valid(dialogsIngresoAlumno))
			if (editsIngresoAluNombre.valid(dialogsIngresoAlumno))  					
				if (editsIngresoAluApellido.valid(dialogsIngresoAlumno))  					
					if (pcbIngresoAluOrg.valid(dialogsIngresoAlumno))
						if (pcbIngresoAluSuborg.valid(dialogsIngresoAlumno))
							if (pcbIngresoAluCarrera.valid(dialogsIngresoAlumno)) 
								if (pcbIngresoAluModIngreso.valid(dialogsIngresoAlumno))
									if (pcbIngresoAluInstitucion.valid(dialogsIngresoAlumno)) 
										if (pcbIngrAluPeriodo.valid(dialogsIngresoAlumno)) 
											if (pcbIngrAluPosicion.valid(dialogsIngresoAlumno)) 
												if (calendarIngresoAluFeIngreso.valid(dialogsIngresoAlumno)) {
													if (methodName != 'eliminar') {
														rlx.add('reg', calendarIngresoAluFeIngreso);
														rlx.add('reg', pcbIngresoAluModIngreso);
														rlx.add('reg', editsDescripcionIngreso);
														rlx.add('reg', pcbIngresoAluInstitucion);
														if (methodName == 'agregar') {
															rlx.addInt('reg', editsIngresoAluCedula.hideId);
														}
														rlx.add('reg', pcbIngresoAluCarrera.setModeReturnGetText(2));
														rlx.add('reg', pcbIngrAluPeriodo);
														rlx.add('reg', pcbIngrAluPosicion);
														if (methodName == 'modificar') {
															rlx.addInt('reg', this.idIngreso);
														}
													}
													else {
														rlx.addInt('reg', editsIngresoAluCedula.hideId);
														rlx.add('reg', pcbIngresoAluCarrera.setModeReturnGetText(2));
														rlx.addInt('reg', this.idIngreso);
													}
								  					Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
												}
	}
};