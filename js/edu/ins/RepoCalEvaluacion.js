var dialogsRepoCalEvaluacion = {};
var pcbCalEvalCarrera = {};
var editsCalEvalCedula = {};
var editsCalEvalNombre = {};
var editsCalEvalApellido = {};
var editsCalEvalPeriodo = {};
var calendarsRepoCalEvaFecDesde = {};
var calendarsRepoCalEvaFecHasta = {};
var gridsCalEvalMatArea = {};
var gridsCalEvalDescargar = {};
var gridsCalEvalCargar = {};
var memoCalEvalComentario = {};
var imgButtonsCalEvalBuscar = {};
var imgButtonsCalEvalImprimir = {};
var imgButtonsCalEvalCopiar = {};
var imgButtonsCalEvalGuardar = {};
var imgButtonsCalEvalEliminar = {};
var imgButtonsCalEvalSalir = {};
var acordSalida = {};
var acordDestino = {};
var acordSuplement = {};
var tableAcordeon                   = {};
var mwRepoCalEvaluacion = {};// minWindow

var RepoCalEvaluacion = {
    windowName : 'RepoCalEvaluacion',
    isCreate: false,
	idPlanEval : 0,
	deMateria : '',
	deContenido : '',
	idTareaRecibir : 0,
	fileName : '',
	limitMaxKb : 0,
	
    show: function() {
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoCalEvaluacion.isByClean())
			this.limpiar();			
		dialogsRepoCalEvaluacion.show();
	},
	
    hide: function() {
        dialogsRepoCalEvaluacion.hide();
    },
    
    createMWs: function() {
        mwRepoCalEvaluacion = desktop.addMinWindow('Cal.Eval.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoCalEvaluacion.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsRepoCalEvaluacion_Init : function() {
        dialogsRepoCalEvaluacion.setMinimizeXY(0,0);
        dialogsRepoCalEvaluacion.setCenterScreen();
        dialogsRepoCalEvaluacion.addSpace(0,0,20);
        dialogsRepoCalEvaluacion.addLn(1,1,1);
		dialogsRepoCalEvaluacion.setHeightCell(1,1,10);
		dialogsRepoCalEvaluacion.addObjToDialog(editsCalEvalCedula,2,1,24);
		dialogsRepoCalEvaluacion.addObjToDialog(editsCalEvalNombre,2,1,24);
		dialogsRepoCalEvaluacion.addObjToDialog(editsCalEvalApellido,2,1,24);
		dialogsRepoCalEvaluacion.setHeightCell(2,1,10);
		dialogsRepoCalEvaluacion.adjAllMarginObj(2,1,15);
		dialogsRepoCalEvaluacion.addObjToDialog(pcbCalEvalCarrera,3,1,24);
		dialogsRepoCalEvaluacion.addObjToDialog(editsCalEvalPeriodo,3,1,24);
		dialogsRepoCalEvaluacion.setHeightCell(3,1,35);
		dialogsRepoCalEvaluacion.adjAllMarginObj(3,1,15);
		dialogsRepoCalEvaluacion.addObjToDialog(calendarsRepoCalEvaFecDesde,4,1,24);
		dialogsRepoCalEvaluacion.addObjToDialog(calendarsRepoCalEvaFecHasta,4,1,24);
		dialogsRepoCalEvaluacion.addObjToDialog(imgButtonsCalEvalBuscar,4,1,24);
		dialogsRepoCalEvaluacion.addObjToDialog(imgButtonsCalEvalImprimir,4,1,24);
		dialogsRepoCalEvaluacion.adjAllMarginObj(4,1,15);
		acordSalida.addObject(gridsCalEvalMatArea,0,0);
		acordSalida.showPanel();
		acordDestino.addObject(gridsCalEvalDescargar,0,0);		
		//acordDestino.showPanel();
		acordSuplement.addObject(memoCalEvalComentario,20,14);		
		acordSuplement.addObject(imgButtonsCalEvalGuardar,445,18);
		acordSuplement.addObject(imgButtonsCalEvalCopiar,145,55);		
		acordSuplement.addObject(imgButtonsCalEvalEliminar,295,55);
		acordSuplement.addObject(imgButtonsCalEvalSalir,445,55);
		acordSuplement.addObject(gridsCalEvalCargar,0,90);
		//acordSuplement.showPanel();
		dialogsRepoCalEvaluacion.addObject(tableAcordeon.getObject(),9,120);
    },

	gridsCalEvalMatArea_Init : function(totalRows) {
		gridsCalEvalMatArea = customGrid.create('gridsCalEvalMatArea','&nbsp;&nbsp;CLIC PARA SELECCIONAR UNA MATERIA / AREA',140,676,22,totalRows);
		gridsCalEvalMatArea.loadColumnTypeStruct(null, [customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
														customGrid.TYPE_COLUMN_EDIT,
														customGrid.TYPE_COLUMN_EDIT],
														[100,250,300,0]);
		gridsCalEvalMatArea.addTitleVectorX(['Fecha Entrega','Materia / Area','Contenido / Tema','idPlanEst']);
		gridsCalEvalMatArea.setSelectedLnMode(0);
//		gridsCalEvalMatArea.addObjToTitle(0, gridsCalEvalMatArea.createTitleObj(0,'input','checkbox'));
//		gridsCalEvalMatArea.activeCheckOnOff(0);
//		gridsCalEvalMatArea.hideBarTitle();
		gridsCalEvalMatArea.alignBarTitle('left');
		gridsCalEvalMatArea.hideBarControl();
		gridsCalEvalMatArea.hideCol(3); 
		for (var i=0; i<4; i++)
			gridsCalEvalMatArea.setReadOnlyCol(i, true);
	},
	
	gridsCalEvalDescargar_Init : function(totalRows) {
		gridsCalEvalDescargar = customGrid.create('gridsCalEvalDescargar','&nbsp;&nbsp;CLIC PARA DESCARGAR GUIA / ACTIVIDAD',114,676,22,totalRows);
		gridsCalEvalDescargar.loadColumnTypeStruct(null, [customGrid.TYPE_COLUMN_EDIT,
															customGrid.TYPE_COLUMN_EDIT,
															customGrid.TYPE_COLUMN_EDIT,
															customGrid.TYPE_COLUMN_EDIT],
															[492,156,0,0]);
		gridsCalEvalDescargar.addTitleVectorX(['Guia / Actividad / Link (Sitio Web)','Comentario','fe','id']);
		gridsCalEvalDescargar.setSelectedLnMode(0);
//		gridsCalEvalDescargar.addObjToTitle(0, gridsCalEvalDescargar.createTitleObj(0,'input','checkbox'));
//		gridsCalEvalDescargar.activeCheckOnOff(0);
//		gridsCalEvalDescargar.hideBarTitle();
		gridsCalEvalDescargar.alignBarTitle('left');
		gridsCalEvalDescargar.hideBarControl();
		gridsCalEvalDescargar.hideCol(2); 
		gridsCalEvalDescargar.hideCol(3); 
		for (var i=0; i<4; i++)
			gridsCalEvalDescargar.setReadOnlyCol(i, true);
	},

	gridsCalEvalCargar_Init : function(totalRows) {
		gridsCalEvalCargar = customGrid.create('gridsCalEvalCargar','&nbsp;&nbsp;DOBLE CLIC PARA DESCARGAR ARCHIVO Y/O GUARDAR COMENTARIO',94,676,22,totalRows);
		gridsCalEvalCargar.loadColumnTypeStruct(null, [customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
														customGrid.TYPE_COLUMN_EDIT,
														customGrid.TYPE_COLUMN_EDIT],
														[346,150,75,75,0]);
		gridsCalEvalCargar.addTitleVectorX(['Archivo','Comentario','F. Enviado','F. Recibido','idEnviarGuia']);
		gridsCalEvalCargar.setSelectedLnMode(0);
//		gridsCalEvalCargar.addObjToTitle(0, gridsCalEvalCargar.createTitleObj(0,'input','checkbox'));
//		gridsCalEvalCargar.activeCheckOnOff(0);
		gridsCalEvalCargar.hideCol(4); 
//		gridsCalEvalCargar.hideBarTitle();
		gridsCalEvalCargar.alignBarTitle('left');
		gridsCalEvalCargar.hideBarControl();
		for (var i=0; i<5; i++)
			gridsCalEvalCargar.setReadOnlyCol(i, true);
	},

	create : function() {
		acordSalida = new Collapser({
            x:0,
            y:0,
            title:'MATERIA / AREA',
            widthLine:258,
            widthTitle : 160,
            position : 'relative',
			heightPanel : 164
        }).show();
		
        acordDestino = new Collapser({
            x:0,
            y:0,
            title:'GUIA / ACTIVIDAD',
            widthLine:258,
            widthTitle : 160,
            position : 'relative',
			heightPanel : 138
        }).show();

		acordSuplement = new Collapser({
            x:0,
            y:0,
            title:'ENVIAR ACTIVIDAD',
            widthLine:258,
            widthTitle : 160,
            position : 'relative',
			heightPanel : 208
		}).show();
		
		tableAcordeon = new ContainerCollapser({
			x:10,
			y:300,
			width : 705,
			height : 225
		})
		.addObject(acordSalida.getObject())
		.addObject(acordDestino.getObject())
		.addObject(acordSuplement.getObject());	

    	dialogsRepoCalEvaluacion = dialogs.create('dialogsRepoCalEvaluacion',0,0,717,325,'CALENDARIO DE EVALUACIÓN');
    	dialogsRepoCalEvaluacion.setAdjY(30);
    	editsCalEvalCedula = edits.create('editsCalEvalCedula','editsCalEvalCedula','C.i. (*):',1,55,'normal');
    	editsCalEvalCedula.setValidInteger();
      	editsCalEvalCedula.setFieldFind(true);
		editsCalEvalCedula.setSizeEdit(149);
      	editsCalEvalNombre = edits.create('editsCalEvalNombre','editsCalEvalNombre','Nombre (*):',1,71,'normal');
      	editsCalEvalNombre.setValidEmpty();
      	editsCalEvalNombre.setFieldFind(true);
		editsCalEvalNombre.setSizeEdit(149);
      	editsCalEvalApellido = edits.create('editsCalEvalApellido','editsCalEvalApellido','Apellido (*):',1,71,'normal');
      	editsCalEvalApellido.setValidEmpty();
      	editsCalEvalApellido.setFieldFind(true);
		editsCalEvalApellido.setSizeEdit(149);
      	pcbCalEvalCarrera = powerComboBox.create('pcbCalEvalCarrera','pcbCalEvalCarrera','Carrera:',1,55);
    	pcbCalEvalCarrera.enableReadOnlyEditor();
    	pcbCalEvalCarrera.addEmptyOption();
    	pcbCalEvalCarrera.setValidEmpty();
		pcbCalEvalCarrera.setWidthCombo(364);
    	editsCalEvalPeriodo = edits.create('editsCalEvalPeriodo','editsCalEvalPeriodo','Periodo:',1,71,'normal');
    	editsCalEvalPeriodo.setValidEmpty();
		editsCalEvalPeriodo.setSizeEdit(149);
    	editsCalEvalPeriodo.setFieldFind(true);
    	editsCalEvalPeriodo.readOnly(true);
    	editsCalEvalPeriodo.idPeriodo = 0;
    	editsCalEvalPeriodo.dePosicion = '';
    	editsCalEvalPeriodo.deSeccion = '';
		calendarsRepoCalEvaFecDesde = calendars.create('calendarsRepoCalEvaFecDesde');      
        calendarsRepoCalEvaFecDesde.setValidEmpty();
		calendarsRepoCalEvaFecDesde.setWidthEditCalendar(127);
        calendarsRepoCalEvaFecDesde.setCaption('Desde:',1,55);
        calendarsRepoCalEvaFecDesde.sendToFrom(100);
        calendarsRepoCalEvaFecHasta = calendars.create('calendarsRepoCalEvaFecHasta');      
        calendarsRepoCalEvaFecHasta.setFieldFind(true);
        calendarsRepoCalEvaFecHasta.setValidEmpty();
		calendarsRepoCalEvaFecHasta.setWidthEditCalendar(127);
        calendarsRepoCalEvaFecHasta.setCaption('Hasta:',1,71);
        calendarsRepoCalEvaFecHasta.sendToFrom(100);
        calendarsRepoCalEvaFecDesde.setValidGreaterThan(calendarsRepoCalEvaFecHasta);
        this.gridsCalEvalMatArea_Init(5);
        this.gridsCalEvalDescargar_Init(4);
        this.gridsCalEvalCargar_Init(3);
		memoCalEvalComentario = memo.create('memoCalEvalComentario', 'Comentario (Opcional) :', 1, 1, 80);
		memoCalEvalComentario.setValidEmpty();		
		memoCalEvalComentario.setDimension(335, 25);
		memoCalEvalComentario.setMaxLength(250);
		imgButtonsCalEvalBuscar = imgButtons.create('imgButtonsCalEvalBuscar','Buscar','icono_buscar.png');
    	imgButtonsCalEvalBuscar.setDimension(90,22);
		imgButtonsCalEvalImprimir = imgButtons.create('imgButtonsCalEvalImprimir','Imprimir','print.png');
		imgButtonsCalEvalImprimir.setDimension(90,22);
		imgButtonsCalEvalCopiar = imgButtons.create('imgButtonsCalEvalCopiar','Copiar Archivo','adjuntar.png');				
		imgButtonsCalEvalGuardar = imgButtons.create('imgButtonsCalEvalGuardar','Guardar.','ok.png');				
		imgButtonsCalEvalEliminar = imgButtons.create('imgButtonsCalEvalEliminar','Borrar Archivo','eliminar.jpg');				
		imgButtonsCalEvalSalir = imgButtons.create('imgButtonsCalEvalSalir','Salir','salir.png');
        imgButtonsCalEvalCopiar.setDimension(110,22);
        imgButtonsCalEvalGuardar.setDimension(110,22);
        imgButtonsCalEvalEliminar.setDimension(110,22);
    	imgButtonsCalEvalSalir.setDimension(110,22);
	},

	init : function() {
		this.create();
		this.setEvents(); 
		this.dialogsRepoCalEvaluacion_Init();
		this.createMWs();
	},
	   
	limpiarFind : function(ix) {
		editsCalEvalCedula.hideId = -1;
		
  		switch (ix) {
		case 1: 
			editsCalEvalNombre.setValue("");
			editsCalEvalApellido.setValue("");  		
			break;
		case 2: 
			editsCalEvalCedula.setValue("");
			editsCalEvalApellido.setValue("");  		
			break;
		default:
			editsCalEvalCedula.setValue("");
		    editsCalEvalNombre.setValue("");
			break;
		} 
  		pcbCalEvalCarrera.clear();
  		editsCalEvalPeriodo.clear();
  	},

   	loadDataCarrInscrip : function() {
  		Tool.loadPowerComboData(dialogsRepoCalEvaluacion, pcbCalEvalCarrera, -1, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			pcbCalEvalCarrera.setSelectedIndex(1); 
  			this.buscarPeriodo(); 
  		}
   	},
	
   	buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");

    	this.idPlanEval = 0;
    	this.idTareaRecibir = 0;
    	this.fileName = '';
		gridsCalEvalMatArea.clean();
		gridsCalEvalDescargar.clean();
		gridsCalEvalDescargar.setTextBarTitle('&nbsp;&nbsp;CLIC PARA DESCARGAR GUIA / ACTIVIDAD');
		gridsCalEvalCargar.setTextBarTitle('&nbsp;&nbsp;DOBLE CLIC PARA DESCARGAR ARCHIVO Y/O GUARDAR COMENTARIO');
		memoCalEvalComentario.clear();
		if (editsCalEvalCedula.getValue() != '' && editsCalEvalNombre.getValue() != '' && editsCalEvalApellido.getValue() != '') {
			if (pcbCalEvalCarrera.setModeReturnGetText(0).getText() == "" || pcbCalEvalCarrera.setModeReturnGetText(0).getText() == "-1") {
		  		pcbCalEvalCarrera.clear();
		  		editsCalEvalPeriodo.clear();
		  		rlx.add('reg', editsCalEvalCedula);
	    		Tool.cnnSrv('MantObject', 'getCarrera', this.windowName + '.loadDataCarrInscrip()', rlx);
			}
			else {
	  			this.buscarPeriodo(); 
			}
		}
		else if (editsCalEvalCedula.getValue() != '' || editsCalEvalNombre.getValue() != '' || editsCalEvalApellido.getValue() != '') {
	  		Tool.rstPwrCmb(pcbCalEvalCarrera);
	  		editsCalEvalPeriodo.setValue("");
        	ResuBusqueda.setObjectExtFnc(editsCalEvalCedula, editsCalEvalNombre, editsCalEvalApellido, 'RepoCalEvaluacion.buscar()');
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsCalEvalCedula, editsCalEvalCedula, editsCalEvalNombre, editsCalEvalNombre, editsCalEvalApellido, editsCalEvalApellido);
		}
		else {
			Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},
	
    buscarPeriodo : function(element) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbCalEvalCarrera.getOption() != "") {
			rlx.addInt('reg', editsCalEvalCedula.hideId);
	    	rlx.add('reg', pcbCalEvalCarrera.setModeReturnGetText(0)); 
	        Tool.cnnSrv('ReportObject', 'getHorarioAlumnoPeriodo', this.windowName + '.loadDataPeriodo()', rlx);
		}
	},
	
	loadDataPeriodo: function() {
		editsCalEvalPeriodo.idPeriodo = json('getHorarioAlumnoPeriodo').data[0][0];
		Tool.loadEditData(dialogsRepoCalEvaluacion, editsCalEvalPeriodo, 1, json('getHorarioAlumnoPeriodo'));
    },
	
   	loadDataCarrInscrip : function() {
  		Tool.loadPowerComboData(dialogsRepoCalEvaluacion, pcbCalEvalCarrera, -1, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			pcbCalEvalCarrera.setSelectedIndex(1); 
  			this.buscarPeriodo(); 
  		}
   	},

   	loadDataPers : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		this.limitMaxKb = json('getParametro').data[0][0];
		editsCalEvalCedula.readOnly(true);
  	    editsCalEvalNombre.readOnly(true);
  	    editsCalEvalApellido.readOnly(true);
  	    editsCalEvalCedula.onEnter("");
  		editsCalEvalCedula.onChange("");
  		editsCalEvalNombre.onEnter("");
  		editsCalEvalNombre.onChange("");
  		editsCalEvalApellido.onEnter("");
  		editsCalEvalApellido.onChange("");
    	if (json('getPermiso').data[0] != 'ACTIVO') {
  			editsCalEvalCedula.setValue(json('getDatoPersona').data[0]);
  	  		editsCalEvalNombre.setValue(json('getDatoPersona').data[1]);
  	  		editsCalEvalApellido.setValue(json('getDatoPersona').data[2]);
  	  		editsCalEvalCedula.hideId = json('getDatoPersona').data[3];
  	  		rlx.add('reg', editsCalEvalCedula);
  			Tool.cnnSrv('MantObject', 'getCarrera', this.windowName + '.loadDataCarrInscrip()', rlx);
  		}
    	else {
  	    	editsCalEvalCedula.readOnly(false);
  	    	editsCalEvalNombre.readOnly(false);
  	    	editsCalEvalApellido.readOnly(false);
  		  	editsCalEvalCedula.onEnter(this.windowName + ".buscar()");
  		  	editsCalEvalCedula.onChange(this.windowName + ".limpiarFind(1)");
  		  	editsCalEvalNombre.onEnter(this.windowName + ".buscar()");
  		  	editsCalEvalNombre.onChange(this.windowName + ".limpiarFind(2)");
  		  	editsCalEvalApellido.onEnter(this.windowName + ".buscar()");
  		  	editsCalEvalApellido.onChange(this.windowName + ".limpiarFind(3)");
    	}
        dialogsRepoCalEvaluacion.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    limpiar : function() {
    	this.idPlanEval = 0;
    	this.idTareaRecibir = 0;
    	this.fileName = '';
		gridsCalEvalDescargar.setTextBarTitle('&nbsp;&nbsp;CLIC PARA DESCARGAR GUIA / ACTIVIDAD');
		gridsCalEvalCargar.setTextBarTitle('&nbsp;&nbsp;DOBLE CLIC PARA DESCARGAR ARCHIVO Y/O GUARDAR COMENTARIO');
    	AdjuArchivos.clearFileName();
    	editsCalEvalCedula.hideId = -1;
  		editsCalEvalCedula.clear();
  		editsCalEvalNombre.clear(); 
  		editsCalEvalApellido.clear();
  		Tool.rstPwrCmb(pcbCalEvalCarrera);
  		editsCalEvalPeriodo.clear();
		calendarsRepoCalEvaFecDesde.clear();
		calendarsRepoCalEvaFecHasta.clear();
		gridsCalEvalMatArea.clean();
		gridsCalEvalDescargar.clean();
		gridsCalEvalCargar.clean();
		memoCalEvalComentario.clear();
  		dialogsRepoCalEvaluacion.setMsg("");
		Tool.cnnSrv('InscripObject', 'getCargarPersona', this.windowName + '.loadDataPers()');
	},

  	getTareaDw : function() {
		if (gridsCalEvalDescargar.getDataCell(gridsCalEvalDescargar.getActualRow(), 0) != "") {
			if (gridsCalEvalDescargar.getDataCell(gridsCalEvalDescargar.getActualRow(), 0).substring(0, 4) != 'http')
				window.open("tarea_enviar/" + gridsCalEvalDescargar.getDataCell(gridsCalEvalDescargar.getActualRow(), 0),'_blank','left=10,top=80,Height=1,width=600,toolbar=no,location=no,status=no,menubar=no,resizable=yes,scrollbars=yes');
			else
				window.open(gridsCalEvalDescargar.getDataCell(gridsCalEvalDescargar.getActualRow(), 0));
		}
	},

  	getTareaUp : function() {
		if (gridsCalEvalCargar.getDataCell(gridsCalEvalCargar.getActualRow(), 0) != "") {
			window.open("tarea_recibir/" + gridsCalEvalCargar.getDataCell(gridsCalEvalCargar.getActualRow(), 0),'_blank','left=10,top=80,Height=1,width=600,toolbar=no,location=no,status=no,menubar=no,resizable=yes,scrollbars=yes');
		}
	},
	
	copyDoc : function() {
        if (editsCalEvalCedula.valid(dialogsRepoCalEvaluacion))
        	if (editsCalEvalNombre.valid(dialogsRepoCalEvaluacion))
        		if (editsCalEvalApellido.valid(dialogsRepoCalEvaluacion))
        			if (pcbCalEvalCarrera.valid(dialogsRepoCalEvaluacion)) 
        				if (editsCalEvalPeriodo.valid(dialogsRepoCalEvaluacion))
        					if (calendarsRepoCalEvaFecDesde.valid(dialogsRepoCalEvaluacion))
        						if (calendarsRepoCalEvaFecHasta.valid(dialogsRepoCalEvaluacion)) {
        							AdjuArchivos.sizeFile(this.limitMaxKb);//Mbytes
									AdjuArchivos.filter('');
									AdjuArchivos.process(33);
									AdjuArchivos.parameter(this.idPlanEval + "_" + editsCalEvalCedula.getValue() + "_");
									AdjuArchivos.setExtFnc(this.windowName + ".coreUpdateTarea('agregar')");
									AdjuArchivos.setCountBtn(1);
									AdjuArchivos.show();
	                    		}
	},
	
	setEvents: function(){
		editsCalEvalCedula.onEnter(this.windowName + ".buscar()");
  		editsCalEvalCedula.onChange(this.windowName + ".limpiarFind(1)");
  		editsCalEvalCedula.onClick(this.windowName + ".limpiarFind(1)");
  		editsCalEvalNombre.onEnter(this.windowName + ".buscar()");
  		editsCalEvalNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsCalEvalNombre.onClick(this.windowName + ".limpiarFind(2)");
  		editsCalEvalApellido.onEnter(this.windowName + ".buscar()");
  		editsCalEvalApellido.onChange(this.windowName + ".limpiarFind(3)");
  		editsCalEvalApellido.onClick(this.windowName + ".limpiarFind(3)");
		pcbCalEvalCarrera.onChange(this.windowName + ".buscarPeriodo()");
		gridsCalEvalMatArea.onClickCells(this.windowName + ".callDataCustomGridDw()");
		gridsCalEvalDescargar.onClickCells(this.windowName + ".getTareaDw()");
  		gridsCalEvalCargar.onDblClickCells(this.windowName + ".getTareaUp()");
  		gridsCalEvalCargar.onClickCells(this.windowName + ".setDataTarea()");
    	imgButtonsCalEvalBuscar.onClick(this.windowName + ".coreUpdate('grid')");
    	imgButtonsCalEvalImprimir.onClick(this.windowName + ".coreUpdate('report')");
    	imgButtonsCalEvalCopiar.onClick(this.windowName + ".copyDoc()");
    	imgButtonsCalEvalGuardar.onClick(this.windowName + ".coreUpdateTarea('modificar')");
    	imgButtonsCalEvalEliminar.onClick(this.windowName + ".coreUpdateTarea('eliminar')");				
        imgButtonsCalEvalSalir.onClick('dialogsRepoCalEvaluacion.close()');
    },
    
  	setDataTarea : function() {
  		memoCalEvalComentario.clear();
		if (gridsCalEvalCargar.getDataCell(gridsCalEvalCargar.getActualRow(), 0) != "") {	
			memoCalEvalComentario.setValue(gridsCalEvalCargar.getDataCell(gridsCalEvalCargar.getActualRow(), 1));
			this.idTareaRecibir = gridsCalEvalCargar.getDataCell(gridsCalEvalCargar.getActualRow(), 4);
			this.fileName = gridsCalEvalCargar.getDataCell(gridsCalEvalCargar.getActualRow(), 0);
	  	}
	},
	
    loadDataCustomGridDw: function() {
    	var jsn = json('getTareaEnviar');

    	if (jsn.data[0].length > 0) {
        	this.gridsCalEvalDescargar_Init(jsn.data[0].length);
        	acordDestino.addObject(gridsCalEvalDescargar,0,0);
        	this.setEvents();
        	gridsCalEvalDescargar.clean();
    		gridsCalEvalDescargar.setTextBarTitle(this.deMateria + ': ' + this.deContenido);
        	Tool.loadGridData(dialogsRepoCalEvaluacion, gridsCalEvalDescargar, false, jsn);
    	}
    	this.callDataCustomGridUp();
    },
    
    callDataCustomGridDw: function() {
    	var rlx = xmlStructs.createRecordList("rlx");
    	
    	gridsCalEvalDescargar.clean();
    	this.gridsCalEvalDescargar_Init(4);
    	acordDestino.addObject(gridsCalEvalDescargar,0,0);
    	if (gridsCalEvalMatArea.getDataCell(gridsCalEvalMatArea.getActualRow(), 0) != "") {
    		this.deMateria = '&nbsp;&nbsp;' + gridsCalEvalMatArea.getDataCell(gridsCalEvalMatArea.getActualRow(), 1);
    		this.deContenido = '&nbsp;&nbsp;' + gridsCalEvalMatArea.getDataCell(gridsCalEvalMatArea.getActualRow(), 2);
    		gridsCalEvalDescargar.setTextBarTitle(this.deMateria + ': ' + this.deContenido);
    		this.idPlanEval = gridsCalEvalMatArea.getDataCell(gridsCalEvalMatArea.getActualRow(), 3);
    		rlx.addInt('reg', this.idPlanEval);
    		Tool.cnnSrv("MantObject", "getTareaEnviar", this.windowName + ".loadDataCustomGridDw()", rlx);
    	}
    },
	
    reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
		rep.setPageSize(950);
		rep.setWidthReport(1250);
		rep.setPositionIcon(1200,4);
       	///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1450,34,rep.getRGBAObj(215,246,236,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),13,'helvetica','bold');
		rep.addText(10, 24, 'ESTUDIANTE: '+editsCalEvalNombre.getText()+' '+editsCalEvalApellido.getText()+'   Cedula: '+editsCalEvalCedula.getText()+'             CALENDARIO DE EVALUACIÓN',false);
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 10, 'rgba(0,0,0,0.9)', 'rgba(0,0,0,0.9)', 2,'bold');
		rep.setTableCellProperties(1, 'helvetica', 10);
		rep.addTable('TablaRepoProbador',['Nº','Fecha/Hora Entrega','Materia / Area','Nivel','SC','Contenido / Tema','Forma de Evaluar','Valor'],621,40);
        rep.setTotalRowTable(30);
        rep.setHeightRow(22); 
        rep.setSizeColumnArray([28,190,244,56,25,450,220,42]);
        rep.setAlignData(['right','left','left','center','center','left','left','cente','left']);     
        rep.addJsonData('TablaRepoProbador','getCalendarioEvaluacion',[0,1,2,3,4,5,6,7,9]);		
		//////////////////////////////////////////PIE DE PAGINA////////////////////////////////////////////////////////////////////////////
        //rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        //rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		setTimeout(rep.previewHTML,100);
		rep.render();		
	}, 	
	
    loadDataCustomGridArea: function() {
    	var jsn = json('getCalendarioEvaluacion');

    	if (jsn.data[0].length > 0) {
        	this.gridsCalEvalMatArea_Init(jsn.data[0].length);
			acordSalida.addObject(gridsCalEvalMatArea,0,0);
        	this.setEvents();
        	gridsCalEvalMatArea.clean();
        	Tool.loadGridData(dialogsRepoCalEvaluacion, gridsCalEvalMatArea, false, jsn);
    	}
    },
    
	coreUpdate: function(callsw) {
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (editsCalEvalCedula.valid(dialogsRepoCalEvaluacion))
        	if (editsCalEvalNombre.valid(dialogsRepoCalEvaluacion))
        		if (editsCalEvalApellido.valid(dialogsRepoCalEvaluacion))
        			if (pcbCalEvalCarrera.valid(dialogsRepoCalEvaluacion)) 
        				if (editsCalEvalPeriodo.valid(dialogsRepoCalEvaluacion))
        					if (calendarsRepoCalEvaFecDesde.valid(dialogsRepoCalEvaluacion))
        						if (calendarsRepoCalEvaFecHasta.valid(dialogsRepoCalEvaluacion)) {
        							rlx.addInt('reg', editsCalEvalPeriodo.idPeriodo);
									rlx.add('reg', pcbCalEvalCarrera.setModeReturnGetText(0));
									rlx.add('reg', calendarsRepoCalEvaFecDesde);
									rlx.add('reg', calendarsRepoCalEvaFecHasta);
									rlx.addInt('reg', editsCalEvalCedula.hideId);
									if (callsw == 'grid') {
										gridsCalEvalMatArea.clean();
								    	this.gridsCalEvalMatArea_Init(5);
										acordSalida.addObject(gridsCalEvalMatArea,0,0);
										Tool.cnnSrv("MantObject","getCalendarioEvaluacion", this.windowName + ".loadDataCustomGridArea()", rlx);
									}
									else {
										Tool.cnnSrv("InscripObject","getCalendarioEvaluacion", this.windowName + ".reporte()", rlx);
									}
								}
	},

    loadDataCustomGridUp: function() {
    	var jsn = json('getTareaRecibir');

    	if (jsn.data[0].length > 0) {
        	this.gridsCalEvalCargar_Init(jsn.data[0].length);
        	acordSuplement.addObject(gridsCalEvalCargar,0,90);
        	this.setEvents();
        	gridsCalEvalCargar.clean();
    		gridsCalEvalCargar.setTextBarTitle(this.deMateria + ': ' + this.deContenido);
        	Tool.loadGridData(dialogsRepoCalEvaluacion, gridsCalEvalCargar, false, jsn);
    	}
    },
    
    callDataCustomGridUp: function() {
    	var rlx = xmlStructs.createRecordList("rlx");
    	
    	gridsCalEvalCargar.clean();
		gridsCalEvalCargar.setTextBarTitle(this.deMateria + ': ' + this.deContenido);
    	this.gridsCalEvalCargar_Init(3);
    	acordSuplement.addObject(gridsCalEvalCargar,0,90);
    	rlx.addInt('reg', this.idPlanEval);
    	rlx.addInt('reg', editsCalEvalCedula.hideId);
    	Tool.cnnSrv("MantObject", "getTareaRecibir", this.windowName + ".loadDataCustomGridUp()", rlx);
    },

    limpiarCoreUpdateTarea: function() {
    	this.idTareaRecibir = 0;
    	this.fileName = '';
    	AdjuArchivos.clearFileName();
    	dialogsRepoCalEvaluacion.setMsg("");
    	memoCalEvalComentario.clear();
    	this.callDataCustomGridUp();
    },
    
    coreUpdateTarea : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");
		var flg = false;

        if (editsCalEvalCedula.valid(dialogsRepoCalEvaluacion))
        	if (editsCalEvalNombre.valid(dialogsRepoCalEvaluacion))
        		if (editsCalEvalApellido.valid(dialogsRepoCalEvaluacion))
        			if (pcbCalEvalCarrera.valid(dialogsRepoCalEvaluacion)) 
        				if (editsCalEvalPeriodo.valid(dialogsRepoCalEvaluacion))
        					if (calendarsRepoCalEvaFecDesde.valid(dialogsRepoCalEvaluacion))
        						if (calendarsRepoCalEvaFecHasta.valid(dialogsRepoCalEvaluacion))
        							if (this.idPlanEval > 0) {
										if (this.idTareaRecibir == 0 && methodName == 'agregar') {
											rlx.addInt('reg',this.idPlanEval);
											rlx.addStr('reg',this.idPlanEval + "_" + editsCalEvalCedula.getValue() + "_" + AdjuArchivos.getFileName());
											rlx.add('reg',memoCalEvalComentario);
											rlx.addFloat('reg',parseInt(AdjuArchivos.getSizeFileReaded())/1024);
											rlx.addInt('reg',editsCalEvalCedula.hideId);
											rlx.addStr('reg',AdjuArchivos.getFileName());
											flg = true;
										}
										else if (this.idTareaRecibir > 0 && methodName == 'modificar' && memoCalEvalComentario.valid(dialogsRepoCalEvaluacion)) {
											rlx.add('reg',memoCalEvalComentario);
											rlx.addInt('reg',this.idTareaRecibir);
											flg = true;
										}
										else if (this.idTareaRecibir > 0 && methodName == 'eliminar') {
											rlx.addStr('reg',this.fileName);
											rlx.addInt('reg',this.idTareaRecibir);
											flg = true;
										}
										else {
											this.idTareaRecibir = 0;
											memoCalEvalComentario.clear();
											Alert.show('COPIE UN ARCHIVO ó AGREGUE UN COMENTARIO', 'SISTEMA', Alert.TYPE_INFO);
										}
										if (flg) Tool.cnnSrv("MantObject", methodName + "TareaRecibir", this.windowName + ".limpiarCoreUpdateTarea()", rlx);
									}
    }
};
