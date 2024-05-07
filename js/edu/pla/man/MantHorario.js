var dialogsMantHorario = new Object();
var pcbMantHorOrg = new Object();
var pcbMantHorTurno = new Object();
var pcbMantHorTipHor = new Object();
var pcbMantHorHorInicio = new Object();
var pcbMantHorHorInicio2 = new Object();
var pcbMantHorHorFin = new Object();
var pcbMantHorHorFin2 = new Object();
var editsMantHorOrden = new Object();
var gridsMantHorario = new Object();
var imgButtonsMantHorAgregar = new Object();
var imgButtonsMantHorModificar = new Object();
var imgButtonsMantHorEliminar = new Object();
var imgButtonsMantHorLimpiar = new Object();
var imgButtonsMantHorSalir = new Object();
var mwMantHorario = new Object();//minWindow

var MantHorario = {
    windowName: 'MantHorario',
    isCreate: false,
    idHorario : 0,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsMantHorario.isByClean()) 
            this.limpiar();
        dialogsMantHorario.show();
    },
    
    hide: function(){
        dialogsMantHorario.hide();
    },
    
    createMWs: function(){
        mwMantHorario = desktop.addMinWindow('M. Horario', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantHorario.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsMantHorario_Init: function(){
    	dialogsMantHorario.setMinimizeXY(0, 0);
        dialogsMantHorario.setCenterScreen();
        dialogsMantHorario.addSpace(0, 0, 20);
        dialogsMantHorario.addLn(1, 1, 1);
		dialogsMantHorario.setHeightCell(1,1,10); 
		var c0 = container.create("c0");
		c0.setObject(pcbMantHorOrg,0,1,1,6);
		dialogsMantHorario.addObjToDialog(c0,2,1);
		var c2 = container.create("c2");
        c2.setObject(pcbMantHorTipHor,0,1,1,0);
		c2.setObject(pcbMantHorTurno,35,1,1,0);
		dialogsMantHorario.addObjToDialog(c2,3,1);
		dialogsMantHorario.setHeightCell(3,1,20); 
		var c1 = container.create("c1");
        c1.setObject(pcbMantHorHorInicio,0,1,1,0);
		c1.setObject(pcbMantHorHorInicio2,1,1,0,0);
		c1.setObject(pcbMantHorHorFin,64,1,0,0);
		c1.setObject(pcbMantHorHorFin2,1,1,0,0);
		c1.setObject(editsMantHorOrden,10,1,0,0);
		dialogsMantHorario.addObjToDialog(c1,4,1);
		dialogsMantHorario.setHeightCell(4,1,30);
		dialogsMantHorario.adjAllMarginObj(4, 1, 20);
        dialogsMantHorario.addLn(5, 1, 1);
		dialogsMantHorario.setHeightCell(5,1,10);
        dialogsMantHorario.addObjToDialog(gridsMantHorario.getObject(), 6, 1);
        dialogsMantHorario.addLn(7, 1, 1);
		dialogsMantHorario.setHeightCell(7,1,7);
        dialogsMantHorario.addObjToDialog(imgButtonsMantHorAgregar, 8, 1);
        dialogsMantHorario.addObjToDialog(imgButtonsMantHorModificar, 8, 1);
        dialogsMantHorario.addObjToDialog(imgButtonsMantHorEliminar, 8, 1);
        dialogsMantHorario.addObjToDialog(imgButtonsMantHorLimpiar, 8, 1);
        dialogsMantHorario.addObjToDialog(imgButtonsMantHorSalir, 8, 1);
        dialogsMantHorario.adjAllMarginObj(8, 1, 15);
        dialogsMantHorario.leftMarginObj(8, 1, 0, 35);
    },
    
    gridsMantHorario_Init: function(){
        gridsMantHorario.setFixColRow(false, true);
        gridsMantHorario.addTitleVectorX(['Código Horario', 'Id Tipo Horario', 'Tipo de Horario', 'Id Turno', 'Turno', 'Hora Inicio', 'Hora Fin', 'Orden']);
        gridsMantHorario.showData();
        gridsMantHorario.setSizeCol(1, 0);
        gridsMantHorario.setSizeCol(2, 0);
        gridsMantHorario.setSizeCol(3, 227);
        gridsMantHorario.setSizeCol(4, 1);
        gridsMantHorario.setSizeCol(5, 144);
        gridsMantHorario.setSizeCol(6, 83);
        gridsMantHorario.setSizeCol(7, 83);
        gridsMantHorario.setSizeCol(8, 50);
        gridsMantHorario.hideCol(1);
        gridsMantHorario.hideCol(2);
        gridsMantHorario.hideCol(4);
    },
    
    create: function(){
        dialogsMantHorario = dialogs.create('dialogsMantHorario', 0, 0, 634, 585, 'MANTENIMIENTO DE HORARIO');
		dialogsMantHorario.setAdjY(28);
        pcbMantHorOrg = powerComboBox.create('pcbMantHorOrg', 'pcbMantHorOrg', 'Organización (+):', 1,119);
        pcbMantHorOrg.setValidEmpty();
        pcbMantHorOrg.addEmptyOption();
        pcbMantHorOrg.enableReadOnlyEditor();
		pcbMantHorOrg.setWidthCombo(89);
        pcbMantHorTipHor = powerComboBox.create('pcbMantHorTipHor', 'pcbMantHorTipHor', 'Tipo de Horario (+):', 1,119);
        pcbMantHorTipHor.setValidEmpty();
        pcbMantHorTipHor.addEmptyOption();
        pcbMantHorTipHor.enableReadOnlyEditor();
        pcbMantHorTipHor.setWidthCombo(250);
        pcbMantHorHorInicio = powerComboBox.create('pcbMantHorHorInicio', 'pcbMantHorHorInicio', 'Hora Inicio (hh:mm):', 1,119);
        pcbMantHorHorInicio.setValidEmpty();
        pcbMantHorHorInicio.addEmptyOption();
        pcbMantHorHorInicio.enableReadOnlyEditor();
        pcbMantHorHorInicio.setWidthCombo(30);
        pcbMantHorHorInicio2 = powerComboBox.create('pcbMantHorHorInicio2', 'pcbMantHorHorInicio2', ':', 1,5);
        pcbMantHorHorInicio2.setValidEmpty();
        pcbMantHorHorInicio2.addEmptyOption();
        pcbMantHorHorInicio2.enableReadOnlyEditor();
        pcbMantHorHorInicio2.setWidthCombo(30);
        pcbMantHorHorFin = powerComboBox.create('pcbMantHorHorFin', 'pcbMantHorHorFin', 'Hora Fin (hh:mm):', 1,105);
        pcbMantHorHorFin.setValidEmpty();
        pcbMantHorHorFin.addEmptyOption();
        pcbMantHorHorFin.enableReadOnlyEditor();
        pcbMantHorHorFin.setWidthCombo(30);
        pcbMantHorHorFin2 = powerComboBox.create('pcbMantHorHorFin2', 'pcbMantHorHorFin2', ':', 1,6);
        pcbMantHorHorFin2.setValidEmpty();
        pcbMantHorHorFin2.addEmptyOption();
        pcbMantHorHorFin2.enableReadOnlyEditor();
        pcbMantHorHorFin2.setWidthCombo(30);
        pcbMantHorTurno = powerComboBox.create('pcbMantHorTurno', 'pcbMantHorTurno', 'Turno :', 1,50);
        pcbMantHorTurno.setValidEmpty();
        pcbMantHorTurno.addEmptyOption();
        pcbMantHorTurno.enableReadOnlyEditor();
        pcbMantHorTurno.setWidthCombo(105);
        editsMantHorOrden = edits.create('editsMantHorOrden','editsMantHorOrden','Orden :',1,50,'normal');
        editsMantHorOrden.setValidInteger();
        editsMantHorOrden.setSizeEdit(22);
        gridsMantHorario = grids.create('gridsMantHorario', 21, 8);
        imgButtonsMantHorAgregar = imgButtons.create('imgButtonsMantHorAgregar', 'Agregar', 'ok.png');
        imgButtonsMantHorModificar = imgButtons.create('imgButtonsMantHorModificar', 'Modificar', 'icono_modificar.png');
        imgButtonsMantHorModificar.setDisable();
        imgButtonsMantHorEliminar = imgButtons.create('imgButtonsMantHorEliminar', 'Eliminar', 'eliminar.jpg');
        imgButtonsMantHorEliminar.setDisable();
        imgButtonsMantHorLimpiar = imgButtons.create('imgButtonsMantHorLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsMantHorSalir = imgButtons.create('imgButtonsMantHorSalir', 'Salir', 'salir.png');
        imgButtonsMantHorAgregar.setDimension(90, 22);
        imgButtonsMantHorModificar.setDimension(90, 22);
        imgButtonsMantHorEliminar.setDimension(90, 22);
        imgButtonsMantHorLimpiar.setDimension(90, 22);
        imgButtonsMantHorAgregar.setDimension(90, 22);
        imgButtonsMantHorSalir.setDimension(90, 22);
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsMantHorario_Init();
        this.gridsMantHorario_Init();
        this.precargarComboBox();
        this.createMWs();
    },
    
    precargarComboBox: function(){
//CARGA LA NUMERACION PARA LOS DIFERENTES HORARIOS
        for (var i = 1; i < 11; i++) 
//CARGA LAS HORAS
            for (var i = 0; i < 24; i++) {
                pcbMantHorHorInicio.addOptionAndSimpleValue(null, (i < 10) ? '0' + i : i, (i < 10) ? '0' + i : i);
                pcbMantHorHorFin.addOptionAndSimpleValue(null, (i < 10) ? '0' + i : i, (i < 10) ? '0' + i : i);
            }
//CARGA LOS MINUTOS
        for (var i = 0; i < 60; i++) {
            pcbMantHorHorInicio2.addOptionAndSimpleValue(null, (i < 10) ? '0' + i : i, (i < 10) ? '0' + i : i);
            pcbMantHorHorFin2.addOptionAndSimpleValue(null, (i < 10) ? '0' + i : i, (i < 10) ? '0' + i : i);
        }
        pcbMantHorHorInicio.setSizeHeight(350);
        pcbMantHorHorFin.setSizeHeight(350);
        pcbMantHorHorInicio2.setSizeHeight(350);
        pcbMantHorHorFin2.setSizeHeight(350);
    },

    incremOrden: function() {
    	var num = json('getHorario').data[0].length + 1;
    	editsMantHorOrden.setValue(num);
		pcbMantHorHorInicio.setFocus();
    },
    
    limpiar: function(methodName){
        if (methodName == "agregar" || methodName == "modificar" || methodName == "eliminar") {  
	    	if (methodName == "eliminar" && gridsMantHorario.getTotalRecord() == 1) {  
		        gridsMantHorario.clean();
	        	dlgWait.hide();
	    	}
	    	else
	        	Tool.getGridData('MantObject', 'getMantHorario', dialogsMantHorario, gridsMantHorario, this.windowName + '.incremOrden()', pcbMantHorTipHor);
        }
        
        else { 
	        pcbMantHorOrg.setSelectedIndex(0);
	        pcbMantHorTurno.setSelectedIndex(0);
	        pcbMantHorHorInicio.setSelectedIndex(0);
	        pcbMantHorHorInicio2.setSelectedIndex(0);
	        pcbMantHorHorFin.setSelectedIndex(0);
	        pcbMantHorHorFin2.setSelectedIndex(0);
	        editsMantHorOrden.clear();
	        gridsMantHorario.clean();
    		Tool.cnnSrv('MantObject', 'getHorarioInit', this.windowName + '.loadInit()');
        }
        dialogsMantHorario.setMsg("");
        imgButtonsMantHorAgregar.setEnable();
        imgButtonsMantHorModificar.setDisable();
        imgButtonsMantHorEliminar.setDisable();
    },

	loadInit: function(){
		Tool.loadPowerComboData(dialogsMantHorario, pcbMantHorOrg, 0, 1, json('getHorarioOrg'));
		Tool.loadPowerComboData(dialogsMantHorario, pcbMantHorTurno, 0, 1, json('getMantTurnos'));
		pcbMantHorOrg.setSelectedIndex(1);
		this.loadHorario('org');
    },
    
    setData: function(){
        if (gridsMantHorario.getDataCell(3) != "") {
        	this.idHorario = gridsMantHorario.getDataCell(1); 
            pcbMantHorOrg.findOption(gridsMantHorario.getDataCell(2));
            pcbMantHorTurno.findOption(gridsMantHorario.getDataCell(4));
            pcbMantHorHorInicio.findOption(gridsMantHorario.getDataCell(6).substring(0,2));
            pcbMantHorHorInicio2.findOption(gridsMantHorario.getDataCell(6).substring(3,5));
            pcbMantHorHorFin.findOption(gridsMantHorario.getDataCell(7).substring(0,2));
            pcbMantHorHorFin2.findOption(gridsMantHorario.getDataCell(7).substring(3,5));
            editsMantHorOrden.setValue(gridsMantHorario.getDataCell(8));
            imgButtonsMantHorAgregar.setDisable();
            imgButtonsMantHorModificar.setEnable();
            imgButtonsMantHorEliminar.setEnable();
        }
    },
    
    loadHorario: function(element) {
        pcbMantHorTurno.setSelectedIndex(0);
        pcbMantHorHorInicio.setSelectedIndex(0);
        pcbMantHorHorInicio2.setSelectedIndex(0);
        pcbMantHorHorFin.setSelectedIndex(0);
        pcbMantHorHorFin2.setSelectedIndex(0);
        editsMantHorOrden.clear();
        gridsMantHorario.clean();
        dialogsMantHorario.setMsg("");
    	imgButtonsMantHorAgregar.setEnable();
    	imgButtonsMantHorModificar.setDisable();
    	imgButtonsMantHorEliminar.setDisable();
    	editsMantHorOrden.setValue(1);
    	if (element == 'org')
			Tool.getPowerComboData('MantObject', 'getTipoHorarioXOrg', dialogsMantHorario, pcbMantHorTipHor, 0, 1, pcbMantHorOrg);
    	else
    		Tool.getGridData('MantObject', 'getMantHorario', dialogsMantHorario, gridsMantHorario, this.windowName + '.incremOrden()', pcbMantHorTipHor);
    },
    
	setEvents: function(){
    	pcbMantHorOrg.onChange(this.windowName + ".loadHorario('org')");
    	pcbMantHorTipHor.onChange(this.windowName + ".loadHorario('tip')");
    	pcbMantHorHorFin2.onEnter(this.windowName + ".coreUpdate('agregar')");
    	gridsMantHorario.onClickCells(this.windowName + ".setData()");
        imgButtonsMantHorAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
        imgButtonsMantHorModificar.onClick(this.windowName + ".coreUpdate('modificar')");
        imgButtonsMantHorEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
        imgButtonsMantHorLimpiar.onClick('MantHorario.limpiar()');
        imgButtonsMantHorSalir.onClick('dialogsMantHorario.close()');
    },
    
    coreUpdate: function(methodName){
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (pcbMantHorOrg.valid(dialogsMantHorario)) 
            if (pcbMantHorTurno.valid(dialogsMantHorario)) 
                if (pcbMantHorHorInicio.valid(dialogsMantHorario)) 
                    if (pcbMantHorHorInicio2.valid(dialogsMantHorario)) 
                        if (pcbMantHorHorFin.valid(dialogsMantHorario)) 
                            if (pcbMantHorHorFin2.valid(dialogsMantHorario)) {
                                if (methodName == 'eliminar') 
                                    rlx.addInt('reg', this.idHorario);
	                            else {
	                                rlx.add('reg', pcbMantHorTipHor);
	                                rlx.add('reg', pcbMantHorTurno);
	                            	rlx.addStr('reg', pcbMantHorHorInicio.getOption() + ':' + pcbMantHorHorInicio2.getOption());
	                            	rlx.addStr('reg', pcbMantHorHorFin.getOption() + ':' + pcbMantHorHorFin2.getOption());
	                                rlx.add('reg', editsMantHorOrden);
						            if (methodName == 'modificar') 
						                rlx.addInt('reg', this.idHorario);
	                            }
                                if (methodName == 'agregar' && gridsMantHorario.getDataStructObj().data[0].length > 40) {
                                	imgButtonsMantHorAgregar.setDisable();
                                	Alert.show('ATENCION: Solo puede agregar 40 horas', 'SISTEMA', Alert.TYPE_INFO);
                                }
                                else
                                	Tool.cnnSrv("MantObject", methodName + this.windowName, this.windowName + ".limpiar('" + methodName + "')", rlx);
                            }
    }
};
