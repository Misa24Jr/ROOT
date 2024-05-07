var dialogsRepoSolPago = {};
var editsRepoSolPagCi = {};
var editsRepoSolPagNombre = {};
var editsRepoSolPagApellido = {};
var pcbRepoSolPagCarrera = {};
var pcbRepoSolPagPeriodo = {};
var pcbRepoSolPagPlantilla = {};
var imgButtonsRepoSolPagReporte = {};
var imgButtonsRepoSolPagLimpiar = {};
var imgButtonsRepoSolPagSalir = {}; 
var mwRepoSolPago = {};// minWindow

var RepoSolPago = {
    windowName: 'RepoSolPago',
    isCreate: false,
	
    show: function() {
        if (!this.isCreate) {
			VistapreviaConstancia.show();
			VistapreviaConstancia.close();
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoSolPago.isByClean()) 
            this.limpiar();
        dialogsRepoSolPago.show();
    },
    
    hide: function() {
        dialogsRepoSolPago.hide();
    },
    
    createMWs: function() {
        mwRepoSolPago = desktop.addMinWindow('R.S.Pago', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoSolPago.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsRepoSolPago_Init: function() {
        dialogsRepoSolPago.setMinimizeXY(0, 0);
        dialogsRepoSolPago.setCenterScreen();    
        dialogsRepoSolPago.addSpace(1, 0, 20);
        dialogsRepoSolPago.addLn(1, 1, 1);
		dialogsRepoSolPago.setHeightCell(1,1,18); 
		dialogsRepoSolPago.addObject(editsRepoSolPagCi, 20, 35);
		dialogsRepoSolPago.addObject(editsRepoSolPagNombre, 236, 35);
		dialogsRepoSolPago.addObject(editsRepoSolPagApellido, 486, 35);
		dialogsRepoSolPago.addObject(pcbRepoSolPagCarrera, 20,60); 
		dialogsRepoSolPago.addObject(pcbRepoSolPagPeriodo, 236, 60);
		dialogsRepoSolPago.addObject(pcbRepoSolPagPlantilla,20,85);
		dialogsRepoSolPago.addObject(imgButtonsRepoSolPagReporte, 198, 116);
        dialogsRepoSolPago.addObject(imgButtonsRepoSolPagLimpiar, 318, 116);
        dialogsRepoSolPago.addObject(imgButtonsRepoSolPagSalir, 438, 116);
		editsRepoSolPagCi.setSizeEdit(149);
		editsRepoSolPagNombre.setSizeEdit(149);
		editsRepoSolPagNombre.setMaxLength(50); 
		editsRepoSolPagApellido.setSizeEdit(149);
		editsRepoSolPagApellido.setMaxLength(50);
        imgButtonsRepoSolPagReporte.setDimension(90, 22);
        imgButtonsRepoSolPagLimpiar.setDimension(90, 22);
        imgButtonsRepoSolPagSalir.setDimension(90, 22);
    },
    
    create: function() {
        dialogsRepoSolPago = dialogs.create('dialogsRepoSolPago', 0, 0, 730, 128, 'SOLVENCIA DE PAGO');
        dialogsRepoSolPago.setAdjY(40);
        editsRepoSolPagCi = edits.create('editsRepoSolPagCi', 'editsRepoSolPagCi', 'C.i. (*):', 1,55, 'normal');    
        editsRepoSolPagCi.setValidInteger();
        editsRepoSolPagCi.setFieldFind(true);
        editsRepoSolPagNombre = edits.create('editsRepoSolPagNombre', 'editsRepoSolPagNombre', 'Nombre (*):', 1,90, 'normal');
        editsRepoSolPagNombre.setValidEmpty();
		editsRepoSolPagNombre.setFieldFind(true);
        editsRepoSolPagApellido = edits.create('editsRepoSolPagApellido', 'editsRepoSolPagApellido', 'Apellido (*):', 1,75, 'normal');
        editsRepoSolPagApellido.setValidEmpty();
		editsRepoSolPagApellido.setFieldFind(true);
        pcbRepoSolPagCarrera = powerComboBox.create('pcbRepoSolPagCarrera','pcbRepoSolPagCarrera','Carrera:',1,55);
        pcbRepoSolPagCarrera.setValidEmpty();
        pcbRepoSolPagCarrera.enableReadOnlyEditor();
        pcbRepoSolPagCarrera.addEmptyOption();
        pcbRepoSolPagPeriodo = powerComboBox.create('pcbRepoSolPagPeriodo','pcbRepoSolPagPeriodo','Periodo (*):',1,90);
        pcbRepoSolPagPeriodo.setValidEmpty();
        pcbRepoSolPagPeriodo.enableReadOnlyEditor();
        pcbRepoSolPagPeriodo.addEmptyOption();
    	pcbRepoSolPagPlantilla = powerComboBox.create('pcbRepoSolPagPlantilla','pcbRepoSolPagPlantilla','Formato:',1,55);
    	pcbRepoSolPagPlantilla.enableReadOnlyEditor();
    	pcbRepoSolPagPlantilla.addEmptyOption();
    	pcbRepoSolPagPlantilla.setValidEmpty();
    	pcbRepoSolPagPlantilla.setWidthCombo(614);
        imgButtonsRepoSolPagReporte = imgButtons.create('imgButtonsRepoSolPagReporte', 'Reporte', 'print.png');
        imgButtonsRepoSolPagLimpiar = imgButtons.create('imgButtonsRepoSolPagLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsRepoSolPagSalir = imgButtons.create('imgButtonsRepoSolPagSalir', 'Salir', 'salir.png');
    },
    
    init: function() {
        this.create();
        this.setEvents();
        this.dialogsRepoSolPago_Init();
        this.createMWs();
    },
    
    setEvents: function() {
        editsRepoSolPagCi.onEnter(this.windowName + ".buscar()");
		editsRepoSolPagNombre.onEnter(this.windowName + ".buscar()");
		editsRepoSolPagApellido.onEnter(this.windowName + ".buscar()");
		editsRepoSolPagCi.onChange(this.windowName + ".limpiarFind(1)");
		editsRepoSolPagNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsRepoSolPagApellido.onChange(this.windowName + ".limpiarFind(3)");
		pcbRepoSolPagCarrera.onChange("Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoSolPago, pcbRepoSolPagPeriodo, 0, 1, pcbRepoSolPagCarrera.setModeReturnGetText(2))");
		pcbRepoSolPagPeriodo.onChange("imgButtonsRepoSolPagReporte.setEnable()");
    	imgButtonsRepoSolPagReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsRepoSolPagLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsRepoSolPagSalir.onClick("dialogsRepoSolPago.close();");
    },
    
    limpiarFind : function(ix) {
    	editsRepoSolPagCi.hideId = -1;
    	
  		switch (ix) {
		case 1: 
			editsRepoSolPagNombre.setValue("");
			editsRepoSolPagApellido.setValue("");  		
			break;
		case 2: 
			editsRepoSolPagCi.setValue("");
			editsRepoSolPagApellido.setValue("");  		
			break;
		default:
			editsRepoSolPagCi.setValue("");
		    editsRepoSolPagNombre.setValue("");
			break;
		} 
  	},

	limpiar : function() {
		editsRepoSolPagCi.hideId = -1;
  		editsRepoSolPagCi.setValue("");
  		editsRepoSolPagNombre.setValue("");
  		editsRepoSolPagApellido.setValue("");
  		dialogsRepoSolPago.setMsg("");
  		pcbRepoSolPagCarrera.setSelectedIndex(0);
  		pcbRepoSolPagPeriodo.setSelectedIndex(0);
		imgButtonsRepoSolPagReporte.setDisable();
  	},  
  	
  	loadComboCarrera : function() {
  		var rlx = xmlStructs.createRecordList("rlx");
  		
		rlx.add('reg', editsRepoSolPagCi);
  		Tool.cnnSrv('MantObject', 'getCarrera', this.windowName + '.loadDataCarr()', rlx);  		
  	},
  	
  	loadDataCarr : function() {
  		Tool.loadPowerComboData(dialogsRepoSolPago, pcbRepoSolPagCarrera, -1, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			pcbRepoSolPagCarrera.setSelectedIndex(1); 
  			imgButtonsRepoSolPagReporte.setEnable();
  			Tool.getPowerComboDataFnc(this.windowName + '.loadPeriodoPlantilla()','MantObject', 'getPeriodoXNivelAcad', dialogsRepoSolPago, pcbRepoSolPagPeriodo, 0, 1, pcbRepoSolPagCarrera.setModeReturnGetText(2));
  		}
   	},
  		 
   	loadPeriodoPlantilla: function() {
   		pcbRepoSolPagPeriodo.setSelectedIndex(1);
        Tool.getPowerComboDataFnc('pcbRepoSolPagPlantilla.setSelectedIndex(1)', 'ReportObject', 'getPlantillaConstancia', dialogsRepoSolPago, pcbRepoSolPagPlantilla, -1, 1, new MiniDataSet('5', 'str', false));        		
   	},
   	
  	buscar: function() {
		if (editsRepoSolPagCi.getValue() != '' || editsRepoSolPagNombre.getValue() != '' || editsRepoSolPagApellido.getValue() != '') {
			ResuBusqueda.setObjectExtFnc(editsRepoSolPagCi, editsRepoSolPagNombre, editsRepoSolPagApellido, this.windowName + ".loadComboCarrera()");
			Tool.getGridData('MantObject', 'getMantPersTodas', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsRepoSolPagCi, editsRepoSolPagCi, editsRepoSolPagNombre, editsRepoSolPagNombre, editsRepoSolPagApellido, editsRepoSolPagApellido);
		}
		else {
			Alert.show('Debe ingresar al menos: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
		imgButtonsRepoSolPagReporte.setDisable();
	},
	
	reporte : async function() {
		var txt = '';	
		
		async function prt(j, pos, tot) {
			return await new Promise( (resolve, reject)=> {
				try {
					richEditVistapreviaConstancia.cleanLabelDescription();
					richEditVistapreviaConstancia.setText(pcbRepoSolPagPlantilla.setModeReturnGetText(2).getText());			
					//ETIQUETAS DE LA BD
					for(var i=0; i<j.fields.length; i++){
						richEditVistapreviaConstancia.addLabelDescription(j.fields[i], j.data[i][0]);
					};
					richEditVistapreviaConstancia.setText(richEditVistapreviaConstancia.replaceAllLabels(richEditVistapreviaConstancia.getText()));					
					if(pos < tot && pos > 0){
						richEditVistapreviaConstancia.addPageBreak();
					}
					var txt = richEditVistapreviaConstancia.getText();
					resolve({sts:true, position : pos, total: tot, content : txt});
				}
				catch(e){
					reject(e);
				}	
			});
		}
		prt(json('getConstanciasPorAlumno', 0, 1), false);
		//margenes y tipo de papel
		richEditVistapreviaConstancia.setOrientation(pcbRepoSolPagPlantilla.setModeReturnGetText(3).getText());
		richEditVistapreviaConstancia.setMarginTop(pcbRepoSolPagPlantilla.setModeReturnGetText(4).getText());
		richEditVistapreviaConstancia.setMarginLeft(pcbRepoSolPagPlantilla.setModeReturnGetText(5).getText());
		richEditVistapreviaConstancia.setMarginRight(pcbRepoSolPagPlantilla.setModeReturnGetText(6).getText());	
		setTimeout( ()=>{
			richEditVistapreviaConstancia.print();
			VistapreviaConstancia.close();
		}, 1000);
    },
   
    coreUpdate: function() {
    	VistapreviaConstancia.show();
    	var rlx = xmlStructs.createRecordList("rlx");

    	VistapreviaConstancia.close();
    	if (pcbRepoSolPagCarrera.valid(dialogsRepoSolPago))	{
    		rlx.add('reg', pcbRepoSolPagPlantilla.setModeReturnGetText(7));
			rlx.add('reg', pcbRepoSolPagCarrera.setModeReturnGetText(0));
			rlx.add('reg', editsRepoSolPagCi);
			rlx.add('reg', pcbRepoSolPagPeriodo);
			rlx.add('reg', pcbRepoSolPagPeriodo);
			rlx.addInt('reg', -1,true);
			rlx.addStr('reg', '-1',true);
			rlx.addStr('reg', '-1',true);
			Tool.cnnSrv('ReportObject', 'getConstanciasPorAlumno', this.windowName + '.reporte()', rlx);
    	}    	
	}
};

