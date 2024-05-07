var dialogsEgreAlumno = new Object();
var pcbEgreAluOrg = new Object();
var pcbEgreAluSuborg = new Object();
var pcbEgreAluCarrera = new Object();
var pcbEgreAluPeriodo1 = new Object();
var editsEgreAluCedula = new Object();
var editsEgreAluNombre = new Object();
var editsEgreAluApellido = new Object();
var pcbEgreAluPeriodo2 = new Object();
var calendarsEgreAluFecha = new Object();
var memoEgreAluObservaciones = new Object();
var pcbEgreAluModIngreso = new Object();
var pcbEgreAluPeriodo2 = new Object();
var pcbEgreAluInstitucion = new Object();
var customGridEgreAlumno = new Object();
var imgButtonsEgreAluAgregar = new Object();
var imgButtonsEgreAluModificar = new Object();
var imgButtonsEgreAluEliminar = new Object();
var imgButtonsEgreAluLimpiar = new Object();
var imgButtonsEgreAluBuscar = new Object();
var imgButtonsEgreAluSalir = new Object();
var mwEgresoAlumno = new Object();// minWindow
var pcbTipoEgreso= new Object();
var pcbIgresoAlumno= new Object();

var dataStruct = 
{
  offsetPage: 0,
  pageSize  : 12,
  itemPage  : 0,
  fields    : ['SELECCION','CI','NOMBRES','APELLIDOS','PERIODO','CARRERA','TIPO DE EGRESO','FECHA DE EGRESO'],
  data      :  [
  				[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
				["11012515325","11012515325","11012515325","11012515325","11012515325","11012515325","11012515325","11012515325","11012515325","11012515325","11012515325","Area2","Area3","area4","area5","area6","area7","area8","area9","area10"],
			    ["JUAN PALOTE","JOSEFINA CHIQUINQUIRA","ALEJANDRO EDUARDO","MAXIMILIANO ALEJANDRO","ALEJANDRO EDUARDO","JOSEFINA CHIQUINQUIRA","JOSEFINA CHIQUINQUIRA","JOSEFINA CHIQUINQUIRA","desc9","desc10","desc1","descr2","desc3","desc4","desc5","desc6","descr7","desc8","desc9","desc10"],
				["FERNANDEZ GONZALEZ","HERNANDEZ CASTILLO","BERMUDEZ BERRUETA","NIETO TORO","PALENCIA COMODOR","FERNANDEEZ GONZALEZ","FERNANDEEZ GONZALEZ","FERNANDEEZ GONZALEZ","desc9","desc10","desc1","descr2","desc3","desc4","desc5","desc6","descr7","desc8","desc9","desc10"],
				["2015-2016","2015-2016","2015-2016","2015-2016","2015-2016","2015-2016","2015-2016",false,false,false,false,false,false,false,false,false,false,false,false,false],
				["SECTO GRADO","QUINTO GRADO","CUARTO GRADO","TERCER GRADO","SEGUNDO GRADO","PRIMER GRADO","PRIMER AÑO",false,false,false,false,false,false,false,false,false,false,false,false,false],
				["REGULAR","RETIRADO","DESERTO","GRADO","REGULAR","RETIRADO","DESERTO","GRADO","REGULAR","RETIRADO","DESERTO","GRADO",false,false,false,false,false,false,false,false],
			    ["24-05-2016","24-05-2016","24-05-2016","24-05-2016","24-05-2016","24-05-2016","24-05-2016","24-05-2016","24-05-2016","24-05-2016",false,false,false,false,false,false,false,false,false,false],
			   ]
};

var EgresoAlumno = {
	windowName : 'EgresoAlumno',
	isCreate : false,
	idIngreso : 0,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsEgreAlumno.isByClean())
 			this.limpiar();			
		dialogsEgreAlumno.show();
	},
	
	hide : function() {
		dialogsEgreAlumno.hide();
	},
	
	createMWs : function() {
		mwEgresoAlumno = desktop.addMinWindow('Egreso Alumnos', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsEgreAlumno.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsEgreAlumno_Init : function() {
        dialogsEgreAlumno.setMinimizeXY(0,0);
        dialogsEgreAlumno.setCenterScreen();
        dialogsEgreAlumno.addSpace(1,0,20);
        dialogsEgreAlumno.addLn(1,1,1);
		dialogsEgreAlumno.setHeightCell(1,1,15);
		var c1 = container.create("c1",'Datos del Ingreso',2);
		c1.setDimension(907,70);
		c1.setMarginLeftBarTitle(396);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#000000');
		c1.setObject(pcbEgreAluOrg, 11, 0, 6, 0,0);
		c1.setObject(pcbEgreAluSuborg, 63, 0, 6, 0,0);
		c1.setObject(pcbEgreAluCarrera, 50, 0, 6, 0,0);
		c1.setObject(pcbEgreAluPeriodo1, 11, 7, 0, 0,1);
		c1.setObject(pcbIgresoAlumno, 63, 7, 0, 0, 1);
		dialogsEgreAlumno.addObjToDialog(c1, 2, 1);
		dialogsEgreAlumno.addLn(3,1,1);
		dialogsEgreAlumno.setHeightCell(3,1,10);
		var c2 = container.create("c2",'Datos del Alumno',2);
		c2.setDimension(907,45);
		c2.setMarginLeftBarTitle(396);
		c2.setPropertyMarco('groove',1,'#7e7e7e');
		c2.setFontTitle('verdana', 11, '#000000');
		c2.setObject(editsEgreAluCedula, 11, 0, 6, 0);
		editsEgreAluCedula.setSizeEdit(149);
		c2.setObject(editsEgreAluNombre, 63, 0, 6, 0);
		editsEgreAluNombre.setSizeEdit(149);
		c2.setObject(editsEgreAluApellido, 50, 0, 6, 0);
		editsEgreAluApellido.setSizeEdit(149);
		dialogsEgreAlumno.addObjToDialog(c2, 4, 1);
		dialogsEgreAlumno.addLn(5,1,1);
		dialogsEgreAlumno.setHeightCell(5,1,10);
		var c3 = container.create("c3",'Datos del Egreso',4);
		c3.setDimension(907,141);
		c3.setMarginLeftBarTitle(396);
		c3.setPropertyMarco('groove',1,'#7e7e7e');
		c3.setFontTitle('verdana', 11, '#000000');
		c3.setObject(pcbEgreAluPeriodo2, 11, 0, 0, 0, 0);
		c3.setObject(pcbTipoEgreso, 11, 6, 0, 0, 1);
		c3.setObject(calendarsEgreAluFecha.getEditCalendar(), 11, 6, 0, 0, 2);
        calendarsEgreAluFecha.setWidthEditCalendar(127);
        calendarsEgreAluFecha.setCaption('Fecha:',1,112);
        calendarsEgreAluFecha.sendToFrom(100);
		c3.addObject(memoEgreAluObservaciones, 33, 262);
		memoEgreAluObservaciones.vAlignCaption('middle');
		memoEgreAluObservaciones.setDimension(766, 40);
		dialogsEgreAlumno.addObjToDialog(c3, 6, 1);
		dialogsEgreAlumno.addLn(7,1,1);
		dialogsEgreAlumno.setHeightCell(7,1,10);
		c1.addObject(customGridEgreAlumno, 19, 330);
		customGridEgreAlumno.loadColumnTypeStruct(null, [ customGrid.TYPE_COLUMN_CHECK, customGrid.TYPE_COLUMN_EDIT, customGrid.TYPE_COLUMN_EDIT,
		customGrid.TYPE_COLUMN_EDIT, customGrid.TYPE_COLUMN_EDIT,customGrid.TYPE_COLUMN_EDIT,customGrid.TYPE_COLUMN_EDIT,customGrid.TYPE_COLUMN_EDIT], [70,90,165,165,80,119,100,90]);
		customGridEgreAlumno.addTitleVectorX(['SELECCIÓN','C.I.','NOMBRE','APELLIDO','PERIODO','CARRERA','TIPO DE EGRESO','F. EGRESO']);
		customGridEgreAlumno.loadDataStruct(dataStruct);
		//customGridEgreAlumno.setSizeCol(0, 17);
		//customGridEgreAlumno.groupRadioByRow([2,3,4],'Group');
		//customGridEgreAlumno.setSelectedLnMode(0);
		dialogsEgreAlumno.addLn(8,1,1);
		dialogsEgreAlumno.setHeightCell(8,1,252);
        dialogsEgreAlumno.addObjToDialog(imgButtonsEgreAluAgregar,10,1);
        dialogsEgreAlumno.addObjToDialog(imgButtonsEgreAluModificar,10,1);
        dialogsEgreAlumno.addObjToDialog(imgButtonsEgreAluEliminar,10,1);
        dialogsEgreAlumno.addObjToDialog(imgButtonsEgreAluLimpiar,10,1);
        dialogsEgreAlumno.addObjToDialog(imgButtonsEgreAluBuscar,10,1);
        dialogsEgreAlumno.addObjToDialog(imgButtonsEgreAluSalir,10,1);
        dialogsEgreAlumno.adjAllMarginObj(10,1,30);
        dialogsEgreAlumno.leftMarginObj(10,1,0,58);
	},
	
	create : function() {
  		dialogsEgreAlumno = dialogs.create('dialogsEgreAlumno',0,0,949,592,'EGRESO DEL ALUMNO');
		dialogsEgreAlumno.setAdjY(25);
  		editsEgreAluCedula = edits.create('editsEgreAluCedula','editsEgreAluCedula','C.i. (*):',1,112,'normal');
  		pcbEgreAluOrg = powerComboBox.create('pcbEgreAluOrg','pcbEgreAluOrg','Organización (+):',1,112);
  		pcbEgreAluOrg.setValidEmpty();
  		pcbEgreAluOrg.enableReadOnlyEditor();
  		pcbEgreAluOrg.addEmptyOption();
  		pcbEgreAluSuborg = powerComboBox.create('pcbEgreAluSuborg','pcbEgreAluSuborg','Suborganización (^):',1,122);
  		pcbEgreAluSuborg.setValidEmpty();
  		pcbEgreAluSuborg.enableReadOnlyEditor();
  		pcbEgreAluSuborg.addEmptyOption();
  		pcbEgreAluCarrera = powerComboBox.create('pcbEgreAluCarrera','pcbEgreAluCarrera','Carrera (^):',1,71);
  		pcbEgreAluCarrera.setValidEmpty();
  		pcbEgreAluCarrera.enableReadOnlyEditor();
  		pcbEgreAluCarrera.addEmptyOption();
  		pcbEgreAluPeriodo1 = powerComboBox.create('pcbEgreAluPeriodo1','pcbEgreAluPeriodo1','Periodo (*):',1,112);
  		pcbEgreAluPeriodo1.enableReadOnlyEditor();
  		pcbEgreAluPeriodo1.addEmptyOption();
  		pcbEgreAluPeriodo1.setValidEmpty();
  		editsEgreAluCedula.setValidEmpty();
  		editsEgreAluCedula.setValidInteger();
  		editsEgreAluCedula.setFieldFind(true);
        editsEgreAluCedula.setSizeEdit(149);
  		editsEgreAluNombre = edits.create('editsEgreAluNombre','editsEgreAluNombre','Nombre (*):',1,122,'normal');
  		editsEgreAluNombre.setValidEmpty();
  		editsEgreAluNombre.setFieldFind(true);
        editsEgreAluNombre.setSizeEdit(149);
		editsEgreAluNombre.setMaxLength(50); 
  		editsEgreAluApellido = edits.create('editsEgreAluApellido','editsEgreAluApellido','Apellido (*):',1,71,'normal');
  		editsEgreAluApellido.setValidEmpty();
  		editsEgreAluApellido.setFieldFind(true);
        editsEgreAluApellido.setSizeEdit(149);
		editsEgreAluApellido.setMaxLength(50); 
  		pcbEgreAluPeriodo2 = powerComboBox.create('pcbEgreAluPeriodo2','pcbEgreAluPeriodo2','Periodo (+):',1,112);
  		pcbEgreAluPeriodo2.setValidEmpty();
  		pcbEgreAluPeriodo2.enableReadOnlyEditor();
  		pcbEgreAluPeriodo2.addEmptyOption();  
  		calendarsEgreAluFecha = calendars.create('calendarsEgreAluFecha');
		calendarsEgreAluFecha.setValidEmpty();
  		memoEgreAluObservaciones = memo.create('memoEgreAluObservaciones', 'Observación:', 1,0,110);
		memoEgreAluObservaciones.setValidEmpty();
		memoEgreAluObservaciones.setMaxLength(2000);
  		customGridEgreAlumno = customGrid.create('cg1','ALUMNOS',194,912, 20,12);
		imgButtonsEgreAluAgregar = imgButtons.create('imgButtonsEgreAluAgregar','Agregar','ok.png');
  		imgButtonsEgreAluModificar = imgButtons.create('imgButtonsEgreAluModificar','Modificar','icono_modificar.png');
  		imgButtonsEgreAluModificar.setDisable();
  		imgButtonsEgreAluEliminar = imgButtons.create('imgButtonsEgreAluEliminar','Eliminar','eliminar.jpg');
  		imgButtonsEgreAluEliminar.setDisable();
  		imgButtonsEgreAluLimpiar = imgButtons.create('imgButtonsEgreAluLimpiar','Limpiar','limpiar.png');
  		imgButtonsEgreAluBuscar = imgButtons.create('imgButtonsEgreAluBuscar','Buscar','icono_buscar.png');
  		imgButtonsEgreAluSalir = imgButtons.create('imgButtonsEgreAluSalir','Salir','salir.png');
        imgButtonsEgreAluAgregar.setDimension(90,22);
        imgButtonsEgreAluModificar.setDimension(90,22);
        imgButtonsEgreAluEliminar.setDimension(90,22);
        imgButtonsEgreAluLimpiar.setDimension(90,22);
        imgButtonsEgreAluBuscar.setDimension(90,22);
        imgButtonsEgreAluSalir.setDimension(90,22);
        pcbTipoEgreso = powerComboBox.create('pcbTipoEgreso','pcbTipoEgreso','Tipo de Egreso (+):',1,112);
        pcbTipoEgreso.setValidEmpty();
        pcbTipoEgreso.enableReadOnlyEditor();
        pcbIgresoAlumno = powerComboBox.create('pcbIgresoAlumno','pcbIgresoAlumno','Ingreso:',1,122);
        pcbIgresoAlumno.setValidEmpty();
        pcbIgresoAlumno.enableReadOnlyEditor();
  	},

  	init : function() {
  		this.create();
  		this.setEvents();
  		this.dialogsEgreAlumno_Init();
  		this.createMWs();
  	},
  	  	
	setEvents : function(){
		imgButtonsEgreAluAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsEgreAluModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsEgreAluEliminar.onClick(this.windowName+".coreUpdate('eliminar')"); 	
		imgButtonsEgreAluLimpiar.onClick('EgresoAlumno.limpiar()');
		imgButtonsEgreAluBuscar.onClick('EgresoAlumno.buscar()');
		imgButtonsEgreAluSalir.onClick('dialogsEgreAlumno.close()');
		editsEgreAluCedula.onEnter(this.windowName + ".buscar()");
		editsEgreAluCedula.onChange(this.windowName + ".limpiarFind(1)");
		editsEgreAluNombre.onEnter(this.windowName + ".buscar()");
		editsEgreAluNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsEgreAluApellido.onEnter(this.windowName + ".buscar()");
		editsEgreAluApellido.onChange(this.windowName + ".limpiarFind(3)");
		pcbEgreAluOrg.onChange(this.windowName + ".resetElements('org')");
		pcbEgreAluSuborg.onChange(this.windowName + ".resetElements('sub')");
		pcbEgreAluCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbEgreAluPeriodo1.onChange("Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsEgreAlumno, pcbEgreAluPeriodo2, 0, 1, pcbEgreAluCarrera.setModeReturnGetText(5))");
	},  
	
	resetElements : function(element) {
        var rlx = xmlStructs.createRecordList("rlx");

        if (element == 'org') {
			Tool.rstPwrCmb(pcbEgreAluSuborg);
	  		Tool.rstPwrCmb(pcbEgreAluCarrera);
	  		Tool.rstPwrCmb(pcbEgreAluPeriodo1);
	    	if (pcbEgreAluOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsEgreAlumno, pcbEgreAluSuborg, 1, 2, pcbEgreAluOrg);
		}
		else if (element == 'sub') {
	  		Tool.rstPwrCmb(pcbEgreAluCarrera);
	  		Tool.rstPwrCmb(pcbEgreAluPeriodo1);
	    	if (pcbEgreAluSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsEgreAlumno, pcbEgreAluCarrera, -1, 3, pcbEgreAluSuborg);
		}
		
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbEgreAluPeriodo1);
	    	if (pcbEgreAluCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsEgreAlumno, pcbEgreAluPeriodo1, 0, 1, pcbEgreAluCarrera.setModeReturnGetText(5));
		}
	},
	
  	limpiar : function() {
  		editsEgreAluCedula.hideId = -1;
		this.idIngreso = 0;
  		pcbEgreAluOrg.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbEgreAluSuborg);
  		Tool.rstPwrCmb(pcbEgreAluCarrera);
  		Tool.rstPwrCmb(pcbEgreAluPeriodo1);
  		Tool.rstPwrCmb(pcbEgreAluPeriodo2);
  		editsEgreAluCedula.setValue("");
  		editsEgreAluNombre.setValue("");
  		editsEgreAluApellido.setValue("");
  		calendarsEgreAluFecha.clear();
  		memoEgreAluObservaciones.setText('');
  		dialogsEgreAlumno.setMsg("");
		imgButtonsEgreAluAgregar.setEnable();
		imgButtonsEgreAluModificar.setDisable();
		imgButtonsEgreAluEliminar.setDisable();	
		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  	},
  	
  	loadTipoEgreso : function(){
  	  Tool.loadPowerComboData(dialogsEgreAlumno, pcbTipoEgreso, 0, 1, json('getData'));	
  	  dlgWait.hide();
  	},
  	
    loadDataInit: function() {
		Tool.loadPowerComboData(dialogsEgreAlumno, pcbEgreAluOrg, 0, 1, json('getData'));
    	Tool.getContext(dialogsEgreAlumno, pcbEgreAluOrg, pcbEgreAluSuborg, pcbEgreAluCarrera, this.windowName + ".resetElements('carr')");
    	dialogsEgreAlumno.setMsg(xmlHttpReq.objStsResponse.shortInfo);
    	dlgWait.hide();
    	Tool.cnnSrv('MantObject', 'getTipoEgreso', this.windowName + ".loadTipoEgreso()");
    },
	
	limpiarFind : function(ix) {
  		editsEgreAluCedula.hideId = -1;
		this.idIngreso = 0;
  		
  		switch (ix) {
		case 1: 
	  		editsEgreAluNombre.setValue("");
	  		editsEgreAluApellido.setValue("");  		
			break;
		case 2: 
	  		editsEgreAluCedula.setValue("");
	  		editsEgreAluApellido.setValue("");  		
			break;
		default:
	  		editsEgreAluCedula.setValue("");
  			editsEgreAluNombre.setValue("");
			break;
		} 
  	},
  	
    buscar : function() {
  		dialogsEgreAlumno.setMsg("");
		imgButtonsEgreAluAgregar.setEnable();
		imgButtonsEgreAluModificar.setDisable();
		imgButtonsEgreAluEliminar.setDisable();	
		if (editsEgreAluCedula.getValue() != '' && editsEgreAluNombre.getValue() != '' && editsEgreAluApellido.getValue() != '') {
		}
		else if (editsEgreAluCedula.getValue() != '' || editsEgreAluNombre.getValue() != '' || editsEgreAluApellido.getValue() != '') {
	  		imgButtonsEgreAluAgregar.setDisable();
        	ResuBusqueda.setObjectExtFnc(editsEgreAluCedula, editsEgreAluNombre, editsEgreAluApellido, 'EgresoAlumno.buscar()');
			Tool.getGridData('MantObject', 'getAlumno', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsEgreAluCedula, editsEgreAluCedula, editsEgreAluNombre, editsEgreAluNombre, editsEgreAluApellido, editsEgreAluApellido);
		}
		else {
			Alert.show('Ingrese: C.i., Nombre, Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},  
  	
    coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");
			if (pcbEgreAluOrg.valid(dialogsEgreAlumno))
				if (pcbEgreAluSuborg.valid(dialogsEgreAlumno))
					if (pcbEgreAluCarrera.valid(dialogsEgreAlumno)) 
						if (pcbEgreAluPeriodo1.valid(dialogsEgreAlumno)) 
						    if (editsEgreAluCedula.valid(dialogsEgreAlumno))
								if (editsEgreAluNombre.valid(dialogsEgreAlumno))  					
									if (editsEgreAluApellido.valid(dialogsEgreAlumno))  
										if (pcbEgreAluPeriodo2.valid(dialogsEgreAlumno))
											if (calendarsEgreAluFecha.valid(dialogsEgreAlumno)) 
												if (memoEgreAluObservaciones.valid(dialogsEgreAlumno)) {
													if (methodName != 'eliminar') {
													rlx.add('reg', pcbEgreAluModIngreso);
													//rlx.add('reg', editsDescripcionIngreso);
													rlx.add('reg', pcbEgreAluInstitucion);
													if (methodName == 'agregar') {
														rlx.addInt('reg', editsEgreAluCedula.hideId);
														rlx.add('reg', pcbEgreAluCarrera.setModeReturnGetText(2));
													}
													rlx.add('reg', pcbEgreAluPeriodo1);
													rlx.add('reg', pcbEgreAluPeriodo2);
												}
												else {
													rlx.addInt('reg', editsEgreAluCedula.hideId);
													rlx.add('reg', pcbEgreAluCarrera.setModeReturnGetText(2));
													rlx.addInt('reg', this.idIngreso);
												}
							  					Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
											}
	}

}