var dialogsMantLapso = new Object();
var pcbMantLapNivAcademico = new Object();
var pcbMantLapPeriodo = new Object();
var pcbMantLapLapso = new Object();
var calendarsMantLapHorInicio = new Object();
var calendarsMantLapHorFin = new Object();
var pcbMantLapEstado = new Object();
var labelsMantLapRecomendaciones = new Object();
var memoRecomendaciones = new Object();
var gridsMantLapso = new Object();
var imgButtonsMantLapsoAgregar = new Object();
var imgButtonsMantLapsoModificar = new Object();
var imgButtonsMantLapsoEliminar = new Object();
var imgButtonsMantLapsoLimpiar = new Object();
var imgButtonsMantLapsoSalir = new Object();
var mwdialogsMantLapso = new Object();// minWindow
var memoRecomendaciones = new Object();

var MantLapso = {
    windowName: 'MantLapso',
    isCreate: false,
    idPeriodo: 0,
    idLapso: 0,
    
    show: function() {
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsMantLapso.isByClean()) 
            this.limpiar();
        dialogsMantLapso.show();
    },
    
    hide: function() {
        dialogsMantLapso.hide();
    },
    
    createMWs: function() {
        mwdialogsMantLapso = desktop.addMinWindow('M.Periodo','dialogsMantLapso.show()','dialogsMantLapso.hide()','dialogsMantLapso.hide()');
        dialogsMantLapso.setMinWindowEvent('mwdialogsMantLapso.hide()','mwdialogsMantLapso.disable()','mwdialogsMantLapso.show()');
    },
    
    dialogsMantLapso_Init: function() {
        dialogsMantLapso.setMinimizeXY(0, 0);
        dialogsMantLapso.setCenterScreen();
        dialogsMantLapso.addObject(pcbMantLapNivAcademico,20,38);
        dialogsMantLapso.addObject(pcbMantLapPeriodo,320,38);
        dialogsMantLapso.addObject(pcbMantLapLapso,570,38);
        dialogsMantLapso.addObject(calendarsMantLapHorInicio.getEditCalendar(),20,68);
        dialogsMantLapso.addObject(calendarsMantLapHorFin.getEditCalendar(),320,68);
        dialogsMantLapso.addObject(pcbMantLapEstado,570,68);
		dialogsMantLapso.addObject(labelsMantLapRecomendaciones,20,97);
		labelsMantLapRecomendaciones.setFont('arial','12');
		dialogsMantLapso.addObject(memoRecomendaciones,21,115);
        dialogsMantLapso.addObject(gridsMantLapso.getObject(),20,166);
        dialogsMantLapso.addObject(imgButtonsMantLapsoAgregar,120,420);
        dialogsMantLapso.addObject(imgButtonsMantLapsoModificar,235,420);
        dialogsMantLapso.addObject(imgButtonsMantLapsoEliminar,350,420);
        dialogsMantLapso.addObject(imgButtonsMantLapsoLimpiar,465,420);
        dialogsMantLapso.addObject(imgButtonsMantLapsoSalir,580,420);
    },
	
    gridsMantLapso_Init: function() {
    	gridsMantLapso.setFixColRow(false, true);
    	gridsMantLapso.addTitleVectorX(['Lapso','Fecha Inicio','Fecha Fin','idlapso','Estado','idLapUni','deLapBoletin']);
    	gridsMantLapso.showData();
		gridsMantLapso.setSizeCol(1, 200);
    	gridsMantLapso.setSizeCol(2, 220);
    	gridsMantLapso.setSizeCol(3, 220);
    	gridsMantLapso.setSizeCol(4, 0);
    	gridsMantLapso.setSizeCol(5, 108);
    	gridsMantLapso.setSizeCol(6, 0);
    	gridsMantLapso.setSizeCol(7, 0);
		gridsMantLapso.hideCol(4);
		gridsMantLapso.hideCol(6);
		gridsMantLapso.hideCol(7);
    },
    
    create: function() {
        dialogsMantLapso = dialogs.create('dialogsMantLapso', 0, 0, 792, 433, 'LAPSO');
        pcbMantLapNivAcademico = powerComboBox.create('pcbMantLapNivAcademico','pcbMantLapNivAcademico','Nivel Académico (+):',1,125);
      	pcbMantLapNivAcademico.setValidEmpty();
      	pcbMantLapNivAcademico.enableReadOnlyEditor();
      	pcbMantLapNivAcademico.addEmptyOption();
        pcbMantLapPeriodo = powerComboBox.create('pcbMantLapPeriodo','pcbMantLapPeriodo','Periodo (^):',1,76);
      	pcbMantLapPeriodo.setValidEmpty();
      	pcbMantLapPeriodo.enableReadOnlyEditor();
      	pcbMantLapPeriodo.addEmptyOption();
      	pcbMantLapLapso = powerComboBox.create('pcbMantLapLapso','pcbMantLapLapso','Lapso:',1,50);
      	pcbMantLapLapso.setValidEmpty();
      	pcbMantLapLapso.enableReadOnlyEditor();
      	pcbMantLapLapso.addEmptyOption();
        calendarsMantLapHorInicio = calendars.create('calendarsMantLapHorInicio');
		calendarsMantLapHorInicio.setCaption('Fecha Inicio:', 1,125);
		calendarsMantLapHorInicio.setWidthEditCalendar(127);
		calendarsMantLapHorInicio.sendToFrom(100);
        calendarsMantLapHorInicio.setValidEmpty(); 
        calendarsMantLapHorFin = calendars.create('calendarsMantLapHorFin');
		calendarsMantLapHorFin.setCaption('Fecha Fin:', 1,76);
		calendarsMantLapHorFin.setWidthEditCalendar(126);
		calendarsMantLapHorFin.sendToFrom(100);
        calendarsMantLapHorFin.setValidEmpty(); 
        calendarsMantLapHorInicio.setValidGreaterThan(calendarsMantLapHorFin);
        pcbMantLapEstado = powerComboBox.create('pcbMantLapEstado','pcbMantLapEstado','Estado:',1,50);
        pcbMantLapEstado.setValidEmpty();
        pcbMantLapEstado.enableReadOnlyEditor();
        pcbMantLapEstado.addEmptyOption();
        pcbMantLapEstado.setDataType('string');
        pcbMantLapEstado.addOptionAndSimpleValue(null, 'ACTIVO', 'ACTIVO');
        pcbMantLapEstado.addOptionAndSimpleValue(null, 'INACTIVO', 'INACTIVO');
		labelsMantLapRecomendaciones = labels.create('labelsMantLapRecomendaciones','Recomendación Institucional del Boletin:',1); 
		//labelsMantLapRecomendaciones.setUnderlineText();
		memoRecomendaciones = memo.create('memoRecomendaciones','',0,0,0);
		memoRecomendaciones.setMaxLength(250);
        memoRecomendaciones.setDimension(748, 40);
        memoRecomendaciones.style.zIndex=1000;
        gridsMantLapso = grids.create('gridsMantLapso ',10,7);
        imgButtonsMantLapsoAgregar = imgButtons.create('imgButtonsMantLapsoAgregar', 'Agregar', 'ok.png');
        imgButtonsMantLapsoModificar = imgButtons.create('imgButtonsMantLapsoModificar', 'Modificar', 'icono_modificar.png');
        imgButtonsMantLapsoModificar.setDisable();
        imgButtonsMantLapsoEliminar = imgButtons.create('imgButtonsMantLapsoEliminar', 'Eliminar', 'eliminar.png');
        imgButtonsMantLapsoEliminar.setDisable();
        imgButtonsMantLapsoLimpiar = imgButtons.create('imgButtonsMantLapsoLimpiar', 'Limpiar', 'limpiar.png');
		imgButtonsMantLapsoSalir = imgButtons.create('imgButtonsMantLapsoSalir', 'Salir', 'salir.png');
        imgButtonsMantLapsoAgregar.setDimension(90, 22);
        imgButtonsMantLapsoModificar.setDimension(90, 22);
        imgButtonsMantLapsoEliminar.setDimension(90, 22);
        imgButtonsMantLapsoLimpiar.setDimension(90, 22);
		imgButtonsMantLapsoSalir.setDimension(90, 22);
    },
    
    init: function() {
        this.create();
        this.setEvents();
        this.dialogsMantLapso_Init();
        this.gridsMantLapso_Init();
        this.createMWs();
    },
    
    limpiar: function() {
        dialogsMantLapso.setMsg("");
    	pcbMantLapNivAcademico.setSelectedIndex(0);
    	pcbMantLapPeriodo.setSelectedIndex(0);
    	pcbMantLapLapso.setSelectedIndex(0);
    	calendarsMantLapHorInicio.clear();
    	calendarsMantLapHorFin.clear();
    	pcbMantLapEstado.setSelectedIndex(0);
    	memoRecomendaciones.setText("");
    	gridsMantLapso.clean();
        imgButtonsMantLapsoAgregar.setEnable();
        imgButtonsMantLapsoModificar.setDisable();
        imgButtonsMantLapsoEliminar.setDisable();
  		Tool.cnnSrv("MantObject", "getMantNivAcademico", this.windowName + ".loadDataInit()");
    },
    
	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsMantLapso, pcbMantLapNivAcademico,0,1, json('getMantNivAcademico'));
		Tool.loadPowerComboData(dialogsMantLapso, pcbMantLapLapso, 0, 1, json('getLapsoUnico'));
	},

	setData: function() {
        if (gridsMantLapso.getDataCell(1) != "") {
        	this.idLapso = gridsMantLapso.getDataCell(4);
        	pcbMantLapLapso.findOption(gridsMantLapso.getDataCell(6));
        	calendarsMantLapHorInicio.setFechaToEdit(gridsMantLapso.getDataCell(2));
        	calendarsMantLapHorFin.setFechaToEdit(gridsMantLapso.getDataCell(3));
        	pcbMantLapEstado.findOption(gridsMantLapso.getDataCell(5));
        	memoRecomendaciones.setText(gridsMantLapso.getDataCell(7));
			imgButtonsMantLapsoAgregar.setDisable();
            imgButtonsMantLapsoModificar.setEnable();
            imgButtonsMantLapsoEliminar.setEnable();
        }
    },

    resetElements : function(element) {
		var rlx = xmlStructs.createRecordList("rlx");

		memoRecomendaciones.setText("");
		if (element == 'nvl') {
			Tool.rstPwrCmb(pcbMantLapPeriodo);
			pcbMantLapLapso.setSelectedIndex(0);
			calendarsMantLapHorInicio.clear();
			calendarsMantLapHorFin.clear();
	    	pcbMantLapEstado.setSelectedIndex(0);
			gridsMantLapso.clean();
	    	if (pcbMantLapNivAcademico.getOption() != "") 
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsMantLapso, pcbMantLapPeriodo, 0, 1, pcbMantLapNivAcademico);
		}
		else if (element == 'edo') {
			pcbMantLapLapso.setSelectedIndex(0);
			calendarsMantLapHorInicio.clear();
			calendarsMantLapHorFin.clear();
	    	pcbMantLapEstado.setSelectedIndex(0);
			gridsMantLapso.clean();
			Tool.getGridData("MantObject", "get"+this.windowName, dialogsMantLapso, gridsMantLapso, false, pcbMantLapPeriodo); 		    		
		}
		imgButtonsMantLapsoAgregar.setEnable();
		imgButtonsMantLapsoModificar.setDisable();
		imgButtonsMantLapsoEliminar.setDisable();	
	},

    setEvents: function(){
    	pcbMantLapNivAcademico.onChange(this.windowName + ".resetElements('nvl')");
    	pcbMantLapPeriodo.onChange(this.windowName + ".resetElements('edo')");
    	gridsMantLapso.onClickCells(this.windowName + ".setData()");
        imgButtonsMantLapsoAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
        imgButtonsMantLapsoModificar.onClick(this.windowName + ".coreUpdate('modificar')");
        imgButtonsMantLapsoEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
        imgButtonsMantLapsoLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsMantLapsoSalir.onClick("dialogsMantLapso.close()");
    },
    
	limpiarCoreUpdate : function(methodName){
        dialogsMantLapso.setMsg("");
        pcbMantLapLapso.setSelectedIndex(0);
    	calendarsMantLapHorInicio.clear();
    	calendarsMantLapHorFin.clear();
    	pcbMantLapEstado.setSelectedIndex(0);
        imgButtonsMantLapsoAgregar.setEnable();
        imgButtonsMantLapsoModificar.setDisable();
        imgButtonsMantLapsoEliminar.setDisable();

        if (methodName == "eliminar" && gridsMantLapso.getTotalRecord() == 1) { 
        	gridsMantLapso.clean();
        	dlgWait.hide();
        }
        else
    		Tool.getGridData("MantObject", "get"+this.windowName, dialogsMantLapso, gridsMantLapso, false, pcbMantLapPeriodo); 		    		
	},

	coreUpdate: function(methodName) {
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (pcbMantLapNivAcademico.valid(dialogsMantLapso)) 
            if (pcbMantLapPeriodo.valid(dialogsMantLapso)) 
                if (pcbMantLapLapso.valid(dialogsMantLapso)) 
                    if (calendarsMantLapHorInicio.valid(dialogsMantLapso)) 
                        if (calendarsMantLapHorFin.valid(dialogsMantLapso))
                            if (pcbMantLapEstado.valid(dialogsMantLapso)) {
	                        	if (methodName == 'agregar' || methodName == 'modificar') {
	                        		rlx.add('reg', pcbMantLapPeriodo);
	                        		rlx.add('reg', pcbMantLapLapso);
	                                rlx.add('reg', calendarsMantLapHorInicio);
	                                rlx.add('reg', calendarsMantLapHorFin);
	                                rlx.add('reg', pcbMantLapEstado);
	                                rlx.add('reg', memoRecomendaciones);
	                        	}
	                        	if (methodName != 'agregar') 
	                            	rlx.addInt('reg', this.idLapso);
	                            Tool.cnnSrv("MantObject", methodName + this.windowName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
	                        }
    }
}
