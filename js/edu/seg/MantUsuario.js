var dialogsMantUsuario = new Object();
var editsMantUsuCi = new Object();
var editsMantUsuNombre = new Object();
var editsMantUsuApellido = new Object();
var editsMantUsuId = new Object();
var editsMantUsuClave = new Object();
var powerComboBoxMantUsuEstado = new Object();
var editsMantUsuIntFallidos = new Object();
var powerComboBoxMantUsuBloquear = new Object();
var calendarsMantUsuExpClave = new Object();
var calendarsMantUsuExpUsuario = new Object();
var editsMantUsuExpClaveDias = new Object();
var editsMantUsuExpPregunta = new Object();
var editsMantUsuExpRespuesta = new Object();
var gridsMantUsuario = new Object();
var imgButtonsMasntUsuBloUsuarios = new Object();
var imgButtonsMasntUsuDesUsuarios = new Object();
var imgButtonsMasntUsuReiClave = new Object();
var imgButtonsMasntUsuAgregar = new Object();
var imgButtonsMasntUsuModificar = new Object();
var imgButtonsMasntUsuEliminar = new Object();
var imgButtonsMasntUsuBuscar = new Object();
var imgButtonsMasntUsuLimpiar = new Object();
var imgButtonsMasntUsuReporte = new Object();
var imgButtonsMasntUsuSalir = new Object();
var mwMantUsuario = new Object();// minWindow
var editsMantUsuPersId = new Object();

var MantUsuario  = {
	windowName : 'MantUsuario',
	isCreate : false,
	hideMantUsuIdPersona : 0,
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantUsuario  .isByClean())
 			this.limpiar();			
		dialogsMantUsuario  .show();
	},
	hide : function() {
		dialogsMantUsuario  .hide();
	},
	createMWs : function(){
		mwMantUsuario  = desktop.addMinWindow('M.Usuario','MantUsuario  .show()','MantUsuario.hide()','MantUsuario.hide()');	
		dialogsMantUsuario.setMinWindowEvent('mwMantUsuario.hide()','mwMantUsuario.disable()','mwMantUsuario.show()');
	},
	
	dialogsMantUsuario_Init : function(){
        dialogsMantUsuario.setMinimizeXY(0,0);
        dialogsMantUsuario.setCenterScreen();
        dialogsMantUsuario.addSpace(0,0,20);
        dialogsMantUsuario.addLn(1,1,1);
		dialogsMantUsuario.setHeightCell(1,1,10);
		dialogsMantUsuario.addObjToDialog(editsMantUsuCi,2,1,24);
		editsMantUsuCi.setSizeEdit(149);
		editsMantUsuCi.setMaxLength(15); 
		dialogsMantUsuario.addObjToDialog(editsMantUsuNombre,2,1,24);
		editsMantUsuNombre.setSizeEdit(149);
		editsMantUsuNombre.setMaxLength(50); 
		dialogsMantUsuario.addObjToDialog(editsMantUsuApellido,2,1,24);
		editsMantUsuApellido.setSizeEdit(149);
		editsMantUsuApellido.setMaxLength(50); 
		dialogsMantUsuario.adjAllMarginObj(2,1,23);
        dialogsMantUsuario.addObjToDialog(editsMantUsuId,3,1,24);
        editsMantUsuId.setSizeEdit(149);
		editsMantUsuId.setMaxLength(15); 
        dialogsMantUsuario.addObjToDialog(editsMantUsuClave,3,1,24);
        editsMantUsuClave.setSizeEdit(149);
		editsMantUsuClave.setMaxLength(20);
        dialogsMantUsuario.addObjToDialog(powerComboBoxMantUsuEstado,3,1,24);
		powerComboBoxMantUsuEstado.setWidthCombo(129);
		powerComboBoxMantUsuEstado.addOptionAndSimpleValue(null,'ACTIVO','ACTIVO');
        powerComboBoxMantUsuEstado.addOptionAndSimpleValue(null,'INACTIVO','INACTIVO');
        powerComboBoxMantUsuEstado.addOptionAndSimpleValue(null,'REINICIO','REINICIO');
		dialogsMantUsuario.adjAllMarginObj(3,1,23);
        dialogsMantUsuario.addObjToDialog(powerComboBoxMantUsuBloquear,4,1,24);
		powerComboBoxMantUsuBloquear.setWidthCombo(128);
        powerComboBoxMantUsuBloquear.addOptionAndSimpleValue(null,'NO','NO');
		powerComboBoxMantUsuBloquear.addOptionAndSimpleValue(null,'SI','SI');
        dialogsMantUsuario.addObjToDialog(editsMantUsuIntFallidos,4,1,24);
        editsMantUsuIntFallidos.setSizeEdit(149);
		dialogsMantUsuario.addObjToDialog(calendarsMantUsuExpUsuario.getEditCalendar(),4,1);
        calendarsMantUsuExpUsuario.setWidthEditCalendar(127);
        calendarsMantUsuExpUsuario.setCaption('Fecha Exp. Usuario:',1,128,24);
        calendarsMantUsuExpUsuario.sendToFrom(100);
        dialogsMantUsuario.addObject(editsMantUsuPersId, 613, 109);
		dialogsMantUsuario.adjAllMarginObj(4,1,23);
		dialogsMantUsuario.addObjToDialog(calendarsMantUsuExpClave.getEditCalendar(),5,1);
        calendarsMantUsuExpClave.setWidthEditCalendar(127);
        calendarsMantUsuExpClave.setCaption('Fecha Exp. Clave:',1,113,24);
        calendarsMantUsuExpClave.sendToFrom(100);
		dialogsMantUsuario.addObjToDialog(editsMantUsuExpClaveDias,5,1,24);
        editsMantUsuExpClaveDias.setSizeEdit(149);
		dialogsMantUsuario.adjAllMarginObj(5,1,23);
		dialogsMantUsuario.addObjToDialog(editsMantUsuExpPregunta,6,1,24);
        editsMantUsuExpPregunta.setSizeEdit(456);
		dialogsMantUsuario.addObjToDialog(editsMantUsuExpRespuesta,7,1,24);
        editsMantUsuExpRespuesta.setSizeEdit(456);
		dialogsMantUsuario.addLn(8,1,1);
		dialogsMantUsuario.setHeightCell(8,1,6);
		dialogsMantUsuario.addObjToDialog(gridsMantUsuario.getObject(),9,1);
        dialogsMantUsuario.addObjToDialog(imgButtonsMasntUsuBloUsuarios,10,1,38);
        dialogsMantUsuario.addObjToDialog(imgButtonsMasntUsuDesUsuarios,10,1,38);
        dialogsMantUsuario.addObjToDialog(imgButtonsMasntUsuReiClave,10,1,38);
        imgButtonsMasntUsuBloUsuarios.setDimension(230,22);
        imgButtonsMasntUsuDesUsuarios.setDimension(230,22);
        imgButtonsMasntUsuReiClave.setDimension(230,22);
        dialogsMantUsuario.adjAllMarginObj(10,1,18);
		dialogsMantUsuario.leftMarginObj(10,1,0,70);
		dialogsMantUsuario.addLn(11,1,1);
		dialogsMantUsuario.setHeightCell(11,1,4);
        dialogsMantUsuario.addObjToDialog(imgButtonsMasntUsuAgregar,12,1);
        dialogsMantUsuario.addObjToDialog(imgButtonsMasntUsuModificar,12,1);
        dialogsMantUsuario.addObjToDialog(imgButtonsMasntUsuEliminar,12,1);
		dialogsMantUsuario.addObjToDialog(imgButtonsMasntUsuLimpiar,12,1);
        dialogsMantUsuario.addObjToDialog(imgButtonsMasntUsuReporte,12,1);
        dialogsMantUsuario.addObjToDialog(imgButtonsMasntUsuBuscar,12,1);
        dialogsMantUsuario.addObjToDialog(imgButtonsMasntUsuSalir,12,1);
        imgButtonsMasntUsuAgregar.setDimension(90,22);
        imgButtonsMasntUsuModificar.setDimension(90,22);
        imgButtonsMasntUsuEliminar.setDimension(90,22);
        imgButtonsMasntUsuBuscar.setDimension(90,22);
        imgButtonsMasntUsuLimpiar.setDimension(90,22);
        imgButtonsMasntUsuReporte.setDimension(90,22);
        imgButtonsMasntUsuSalir.setDimension(90,22);
        dialogsMantUsuario.adjAllMarginObj(12,1,25);
        dialogsMantUsuario.leftMarginObj(12,1,0,42);
  },	
  
  	gridsMantUsuario_Init : function(){
        gridsMantUsuario.setFixColRow(false,true);
        gridsMantUsuario.addTitleVectorX(['Cedula','Nombre','Apellido','Usuario','Clave','Estado','Nº Intento','intento fallido','Fecha Exp. Usuario','Fecha Exp. Clave','Renovar Clave (Días)','id persona','pregunta','respuesta']);
        gridsMantUsuario.showData();
        gridsMantUsuario.setSizeCol(1,90);
        gridsMantUsuario.setSizeCol(2,0);
        gridsMantUsuario.setSizeCol(3,0);
        gridsMantUsuario.setSizeCol(4,240);
        gridsMantUsuario.setSizeCol(5,0);
        gridsMantUsuario.setSizeCol(6,84);
        gridsMantUsuario.setSizeCol(7,84);
        gridsMantUsuario.setSizeCol(8,0);
        gridsMantUsuario.setSizeCol(9,120);
        gridsMantUsuario.setSizeCol(10,120);
        gridsMantUsuario.setSizeCol(11,125);
        gridsMantUsuario.setSizeCol(12,0);
        gridsMantUsuario.setSizeCol(13,0);
        gridsMantUsuario.setSizeCol(14,0);
		gridsMantUsuario.hideCol(2);
        gridsMantUsuario.hideCol(3);
        gridsMantUsuario.hideCol(5);
        gridsMantUsuario.hideCol(8);
        gridsMantUsuario.hideCol(12);
        gridsMantUsuario.hideCol(13);
        gridsMantUsuario.hideCol(14);
  	},

  	create : function(){
      dialogsMantUsuario = dialogs.create('dialogsMantUsuario',0,0,911,478,'USUARIO');
      dialogsMantUsuario.setAdjY(25);
	  editsMantUsuCi = edits.create('editsMantUsuCi','editsMantUsuCi','C.i. (*):',1,113,'normal');
	  editsMantUsuCi.setValidInteger();
	  editsMantUsuCi.setFieldFind(true);
	  editsMantUsuNombre = edits.create('editsMantUsuNombre','editsMantUsuNombre','Nombre (*):',1,134,'normal');
	  editsMantUsuNombre.setValidEmpty();
	  editsMantUsuNombre.setFieldFind(true);
	  editsMantUsuApellido = edits.create('editsMantUsuApellido','editsMantUsuApellido','Apellido (*):',1,128,'normal');
	  editsMantUsuApellido.setValidEmpty();
	  editsMantUsuApellido.setFieldFind(true);
	  editsMantUsuId = edits.create('editsMantUsuId','editsMantUsuId','Usuario (*):',1,113,'normal');
      editsMantUsuId.setValidEmpty();
      editsMantUsuId.setFieldFind(true);
      editsMantUsuId.oldIdUsr = "";
	  editsMantUsuClave = edits.create('editsMantUsuClave','editsMantUsuClave','Clave:',1,134,'normal');
      editsMantUsuClave.setValidEmpty();
      editsMantUsuClave.setPassEdit();
	  powerComboBoxMantUsuEstado = powerComboBox.create('powerComboBoxMantUsuEstado','powerComboBoxMantUsuEstado','Estado (*):',1,128);
      powerComboBoxMantUsuEstado.setValidEmpty();
	  powerComboBoxMantUsuEstado.enableReadOnlyEditor();
	  powerComboBoxMantUsuEstado.addEmptyOption();
	  powerComboBoxMantUsuEstado.setFieldFind(true);
	  editsMantUsuIntFallidos = edits.create('editsMantUsuIntFallidos','editsMantUsuIntFallidos','Nº Intento Permitido:',1,134,'normal');
      editsMantUsuIntFallidos.setValidInteger();
	  powerComboBoxMantUsuBloquear = powerComboBox.create('powerComboBoxMantUsuBloquear','powerComboBoxMantUsuBloquear','Bloquear (*):',1,113);
      powerComboBoxMantUsuBloquear.setValidEmpty();
	  powerComboBoxMantUsuBloquear.enableReadOnlyEditor();
	  powerComboBoxMantUsuBloquear.addEmptyOption();
	  calendarsMantUsuExpClave = calendars.create('calendarsMantUsuExpClave');
      calendarsMantUsuExpClave.setValidEmpty();
	  calendarsMantUsuExpUsuario = calendars.create('calendarsMantUsuExpUsuario');
      calendarsMantUsuExpUsuario.setValidEmpty();
      editsMantUsuPersId = edits.create('editsMantUsuPersId', 'editsMantUsuPersId', 'ID Persona (*):', 1,128, 'normal');
      editsMantUsuPersId.setValidInteger();
      editsMantUsuPersId.setFieldFind(true);
      editsMantUsuPersId.setSizeEdit(149);
	  editsMantUsuExpClaveDias = edits.create('editsMantUsuExpClaveDias','editsMantUsuExpClaveDias','Renovar Clave (Días):',1,134,'normal');
      editsMantUsuExpClaveDias.setValidInteger();
	  editsMantUsuExpPregunta = edits.create('editsMantUsuExpPregunta','editsMantUsuExpPregunta','Pregunta Secreta:',1,113,'normal');
	  editsMantUsuExpPregunta.setValidEmpty();
	  editsMantUsuExpRespuesta = edits.create('editsMantUsuExpRespuesta','editsMantUsuExpRespuesta','Respuesta:',1,113,'normal');
	  editsMantUsuExpRespuesta.setValidEmpty();
	  gridsMantUsuario = grids.create('gridsMantUsuario',10,14);
      imgButtonsMasntUsuBloUsuarios = imgButtons.create('imgButtonsMasntUsuBloUsuarios','Bloquear Todos los Usuarios','bloquear.gif');
      imgButtonsMasntUsuDesUsuarios = imgButtons.create('imgButtonsMasntUsuDesUsuarios','Desbloquear Todos los Usuarios','desbloquear.gif');
      imgButtonsMasntUsuReiClave = imgButtons.create('imgButtonsMasntUsuReiClave','Reiniciar Clave','reiniciarclave.gif');
      imgButtonsMasntUsuAgregar = imgButtons.create('imgButtonsMasntUsuAgregar','Agregar','ok.png');
      imgButtonsMasntUsuModificar = imgButtons.create('imgButtonsMasntUsuModificar','Modificar','icono_modificar.png');
      imgButtonsMasntUsuEliminar = imgButtons.create('imgButtonsMasntUsuEliminar','Eliminar','eliminar.png');
	  imgButtonsMasntUsuLimpiar = imgButtons.create('imgButtonsMasntUsuLimpiar','Limpiar','limpiar.png');
      imgButtonsMasntUsuBuscar = imgButtons.create('imgButtonsMasntUsuBuscar','Buscar','icono_buscar.png');
      imgButtonsMasntUsuReporte = imgButtons.create('imgButtonsMasntUsuReporte','Reporte','print.png');
      imgButtonsMasntUsuSalir = imgButtons.create('imgButtonsMasntUsuSalir','Salir','salir.png');
  	},

  	init : function(){
  		this.create();
  		this.setEvents();
  		this.dialogsMantUsuario_Init();
  		this.gridsMantUsuario_Init();
  		this.createMWs();
  	},

	limpiarFind : function(ix) {
		editsMantUsuCi.hideId = -1;
		
		switch (ix) {
		case 1: 
			editsMantUsuNombre.setValue("");
			editsMantUsuApellido.setValue("");  		
			break;
		case 2: 
			editsMantUsuCi.setValue("");
			editsMantUsuApellido.setValue("");  		
			break;
		default:
			editsMantUsuCi.setValue("");
			editsMantUsuNombre.setValue("");
			break;
		} 
	},    
  	
  	limpiar: function(){
  		editsMantUsuCi.hideId = -1;
		editsMantUsuCi.setValue("");
		editsMantUsuNombre.setValue("");
		editsMantUsuApellido.setValue("");
		editsMantUsuId.setValue("");
		editsMantUsuId.oldIdUsr = "";
		editsMantUsuClave.setValue("");
		powerComboBoxMantUsuEstado.setSelectedIndex(0);
		powerComboBoxMantUsuBloquear.setSelectedIndex(0);
		editsMantUsuIntFallidos.setValue("");
		calendarsMantUsuExpClave.clear();
		calendarsMantUsuExpUsuario.clear();
		editsMantUsuPersId.clear();
		editsMantUsuPersId.readOnly(false);
        editsMantUsuExpClaveDias.setValue("");
		editsMantUsuExpPregunta.setValue("");
		editsMantUsuExpRespuesta.setValue("");
        gridsMantUsuario.clean();
        dialogsMantUsuario.setMsg("");
        editsMantUsuCi.readOnly(false);
		editsMantUsuNombre.readOnly(false);
		editsMantUsuApellido.readOnly(false);
		this.hideMantUsuIdPersona = 0;
        imgButtonsMasntUsuAgregar.setEnable();
		imgButtonsMasntUsuModificar.setDisable();
		imgButtonsMasntUsuEliminar.setDisable();
		imgButtonsMasntUsuReporte.setDisable();
		dlgWait.hide();
    },
	
	setData: function() {
        if (gridsMantUsuario.getDataCell(1) != "") {
        	editsMantUsuId.oldIdUsr = gridsMantUsuario.getDataCell(4);
        	editsMantUsuCi.readOnly(true);
            editsMantUsuCi.setValue(gridsMantUsuario.getDataCell(1));
            editsMantUsuNombre.readOnly(true);
            editsMantUsuNombre.setValue(gridsMantUsuario.getDataCell(2));
			editsMantUsuApellido.readOnly(true);
			editsMantUsuApellido.setValue(gridsMantUsuario.getDataCell(3));
			editsMantUsuId.setValue(gridsMantUsuario.getDataCell(4));
        	editsMantUsuId.oldIdUsr = gridsMantUsuario.getDataCell(4);
            editsMantUsuClave.setValue(gridsMantUsuario.getDataCell(5));
			powerComboBoxMantUsuEstado.findOption(gridsMantUsuario.getDataCell(6));
			if (parseInt(gridsMantUsuario.getDataCell(7)) < parseInt(gridsMantUsuario.getDataCell(8))) 
				powerComboBoxMantUsuBloquear.setSelectedIndex(2);
			else
				powerComboBoxMantUsuBloquear.setSelectedIndex(1);
			editsMantUsuIntFallidos.setValue(gridsMantUsuario.getDataCell(7));
			calendarsMantUsuExpUsuario.setFechaToEdit(gridsMantUsuario.getDataCell(9));
			calendarsMantUsuExpClave.setFechaToEdit(gridsMantUsuario.getDataCell(10));
			editsMantUsuExpClaveDias.setValue(gridsMantUsuario.getDataCell(11));
			this.hideMantUsuIdPersona = gridsMantUsuario.getDataCell(12);
			editsMantUsuPersId.setValue(gridsMantUsuario.getDataCell(12));
			editsMantUsuPersId.readOnly(true);
			editsMantUsuExpPregunta.setValue(gridsMantUsuario.getDataCell(13));
			editsMantUsuExpRespuesta.setValue(gridsMantUsuario.getDataCell(14));
            imgButtonsMasntUsuAgregar.setDisable();
			imgButtonsMasntUsuModificar.setEnable();
			imgButtonsMasntUsuEliminar.setEnable();
			imgButtonsMasntUsuReporte.setEnable();
        }
    },
    
    setEvents: function(){
    	gridsMantUsuario.onClickCells(this.windowName + ".setData()");
		imgButtonsMasntUsuBloUsuarios.onClick(this.windowName + ".coreUpdate('lock')");
        imgButtonsMasntUsuDesUsuarios.onClick(this.windowName + ".coreUpdate('unlock')");
        imgButtonsMasntUsuReiClave.onClick(this.windowName + ".coreUpdate('reiniciarClave')");
        imgButtonsMasntUsuAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
        imgButtonsMasntUsuModificar.onClick(this.windowName + ".coreUpdate('modificar')");
        imgButtonsMasntUsuEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
        imgButtonsMasntUsuLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsMasntUsuBuscar.onClick(this.windowName + ".buscar()");
		imgButtonsMasntUsuReporte.onClick(this.windowName + ".reporte()");
		imgButtonsMasntUsuSalir.onClick("dialogsMantUsuario.close()");
		editsMantUsuId.onEnter(this.windowName + ".buscar()");
		editsMantUsuCi.onEnter(this.windowName + ".buscar()");
		editsMantUsuCi.onChange(this.windowName + ".limpiarFind(1)");
		editsMantUsuNombre.onEnter(this.windowName + ".buscar()");
		editsMantUsuNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsMantUsuApellido.onEnter(this.windowName + ".buscar()");
		editsMantUsuApellido.onChange(this.windowName + ".limpiarFind(3)");
		editsMantUsuPersId.onEnter(this.windowName + ".buscar()");
    },
    
 	buscar: function() {
		gridsMantUsuario.clean(); 
		if (editsMantUsuId.getValue() != '' || (editsMantUsuCi.getValue() != '' && editsMantUsuNombre.getValue() != '' && editsMantUsuApellido.getValue() != '')) {
			this.hideMantUsuIdPersona = editsMantUsuCi.hideId;
			Tool.getGridData('SecurityObject', 'getUsuario', dialogsMantUsuario, gridsMantUsuario, false, editsMantUsuCi, powerComboBoxMantUsuEstado, editsMantUsuId, powerComboBoxMantUsuBloquear, editsMantUsuPersId);
		}
		else if (editsMantUsuCi.getValue() != '' || editsMantUsuNombre.getValue() != '' || editsMantUsuApellido.getValue() != '') {
        	ResuBusqueda.setObjectExtFnc(editsMantUsuCi, editsMantUsuNombre, editsMantUsuApellido, 'MantUsuario.buscar()');
			Tool.getGridData('SecurityObject', 'getMantPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsMantUsuCi, editsMantUsuCi, editsMantUsuNombre, editsMantUsuNombre, editsMantUsuApellido, editsMantUsuApellido);
		}
		else {
			Tool.getGridData('SecurityObject', 'getUsuario', dialogsMantUsuario, gridsMantUsuario, false, editsMantUsuCi, powerComboBoxMantUsuEstado, editsMantUsuId, powerComboBoxMantUsuBloquear, editsMantUsuPersId);
		}
	},

	coreUpdate: function(methodName){
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (methodName == 'eliminar') {
            if (editsMantUsuId.valid(dialogsMantUsuario)) {
            	rlx.add('reg', editsMantUsuId);
                procesar = true;
            }
        }
        else if (methodName == 'lock') {
        	methodName = "bloquear";
        	rlx.addInt('reg', 1);
            procesar = true;
        }
        else if (methodName == 'unlock') {
        	methodName = "bloquear";
        	rlx.addInt('reg', 0);
            procesar = true;
        }
        else if (methodName == 'reiniciarClave') {
            if (editsMantUsuId.valid(dialogsMantUsuario)) {
            	rlx.add('reg', editsMantUsuId);
                procesar = true;
            }
        }
        else {
            if (editsMantUsuCi.valid(dialogsMantUsuario)) 
                if (editsMantUsuNombre.valid(dialogsMantUsuario)) 
                    if (editsMantUsuApellido.valid(dialogsMantUsuario)) 
                        if (editsMantUsuId.valid(dialogsMantUsuario)) 
                            if (editsMantUsuClave.valid(dialogsMantUsuario)) 
                                if (powerComboBoxMantUsuEstado.valid(dialogsMantUsuario))                                     
                                	if (powerComboBoxMantUsuBloquear.valid(dialogsMantUsuario)) 
                                		if (editsMantUsuIntFallidos.valid(dialogsMantUsuario)) 
                                			if (calendarsMantUsuExpUsuario.valid(dialogsMantUsuario)) 
	                                			if (calendarsMantUsuExpClave.valid(dialogsMantUsuario)) 
	                                				if (editsMantUsuExpClaveDias.valid(dialogsMantUsuario)) 
	                                					if (editsMantUsuExpPregunta.valid(dialogsMantUsuario)) 
	                                						if (editsMantUsuExpRespuesta.valid(dialogsMantUsuario)) {
																rlx.add('reg', editsMantUsuClave);
	                                                    		rlx.add('reg', powerComboBoxMantUsuEstado);
	                                                    		rlx.add('reg', editsMantUsuIntFallidos);
	                                                    		rlx.add('reg', powerComboBoxMantUsuBloquear);
	                                                    		rlx.add('reg', calendarsMantUsuExpUsuario);
	                                                    		rlx.add('reg', calendarsMantUsuExpClave);
	                                                    		rlx.add('reg', editsMantUsuExpClaveDias);
	                                                    		rlx.addInt('reg', this.hideMantUsuIdPersona);
																rlx.add('reg', editsMantUsuExpPregunta);
																rlx.add('reg', editsMantUsuExpRespuesta);
																if (methodName == 'modificar') rlx.addStr('reg', editsMantUsuId.oldIdUsr);
	                                                    		rlx.add('reg', editsMantUsuId);
	                                                    		procesar = true;
	                                                		}
        }
        if (procesar) {            
			Tool.cnnSrv('SecurityObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
	},
  	
  	reporte : function() {
        ///////////////////////////////////////ARREGLO DE DATA/////////////////////////////////////////////////////////////////////////////////////////	
        var jd = json('getUsuario');
    	var data = new Array();
    	data[0] = jd.data[3];
    	data[1] = jd.data[5];
    	data[2] = jd.data[0];
    	data[3] = jd.data[1];
    	data[4] = jd.data[2];
    	data[5] = jd.data[8];
    	data[6] = jd.data[10];
        ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	
        rep = new Report('landscape');
        rep.setPositionIcon(1090,0);
        //rep.setHeadImage(imgEduca.banner,true);
        //rep.setNoRepeatHead();
        ///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,0,1128,36,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addText(425, 23, 'REPORTE DE USUARIOS',false);
        //************************ TABLE ***************************
        rep.setTableRowProperties(20, 180, 180, 180, 'bold helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'bold helvetica', 8);		
        rep.addTable('tablaRepUsuario',['USUARIO','ESTADO','CEDULA','NOMBRE','APELLIDO','F. EXP. USUARIO','RENOVAR CLAVE (DÍAS)'],562,40);
        rep.setTotalRowTable(34);
		rep.setHeightRow(20);
        rep.setSizeColumnArray([111,80,98,228,228,162,229]);
        rep.setAlignData(['center','center','center','left','left','center','center']);
        rep.addMultiArrayData('tablaRepUsuario', data);
        ///////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),10,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
        rep.render();
        Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
        Reporte.create();
        dialogsReporte.showModal();
    },
};
