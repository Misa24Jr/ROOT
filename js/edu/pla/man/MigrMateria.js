var dialogsMigrMateria = new Object();
var pcbMigrMatOrg = new Object();
var pcbMigrMatSuborg = new Object();
var pbcMigrMatCarrera = new Object();
var pcbMigrMatPeriodo = new Object();
var pcbMigrMatPosicion = new Object();
var pcbMigrMatOrigen = new Object();
var pcbMigrMatDestino = new Object();
var imgButtonsMigrMatGuardar = new Object();
var imgButtonsMigrMatLimpiar = new Object();
var imgButtonsMigrMatSalir = new Object();
var mwMigrMateria = new Object();// minWindow

var MigrMateria = {
    windowName: 'MigrMateria',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsMigrMateria.isByClean()) 
            this.limpiar();
        dialogsMigrMateria.show();
    },
    
    hide: function() {
        dialogsMigrMateria.hide();
    },
    
    createMWs: function() {
        mwMigrMateria = desktop.addMinWindow('Migrar Materia', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMigrMateria.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsMigrMateria_Init: function() {
        dialogsMigrMateria.setMinimizeXY(0, 0);
        dialogsMigrMateria.setCenterScreen();
        dialogsMigrMateria.addSpace(0, 0, 20);	
		var c2 = container.create("c2");
		c2.addObject(pcbMigrMatOrg, 20, 40);
		c2.addObject(pcbMigrMatSuborg, 345, 40);
		c2.addObject(pbcMigrMatCarrera, 631, 40);		
		dialogsMigrMateria.addObjToDialog(c2, 2, 1);
		var c3 = container.create("c3");
		c3.addObject(pcbMigrMatPeriodo, 20, 64);
		c3.addObject(pcbMigrMatPosicion, 345, 64);
		c3.addObject(pcbMigrMatOrigen, 20, 88);
		c3.addObject(pcbMigrMatDestino, 20, 112);		
		dialogsMigrMateria.addObjToDialog(c3, 2, 1);		
		dialogsMigrMateria.addLn(3, 1, 1);
		dialogsMigrMateria.setHeightCell(3,1,116);		
        dialogsMigrMateria.addObjToDialog(imgButtonsMigrMatGuardar, 4, 1);              
        dialogsMigrMateria.addObjToDialog(imgButtonsMigrMatLimpiar, 4, 1);        
        dialogsMigrMateria.addObjToDialog(imgButtonsMigrMatSalir, 4, 1);
        imgButtonsMigrMatGuardar.setDimension(90, 22);       
        imgButtonsMigrMatLimpiar.setDimension(90, 22);
        imgButtonsMigrMatSalir.setDimension(90, 22);
        dialogsMigrMateria.adjAllMarginObj(4, 1, 20);
        dialogsMigrMateria.leftMarginObj(4, 1, 0, 257);		
	},
    
   	create: function() {
        dialogsMigrMateria = dialogs.create('dialogsMigrMateria', 0, 0, 870, 150, 'MIGRAR MATERIA');
		dialogsMigrMateria.setAdjY(60);		
        pcbMigrMatOrg = powerComboBox.create('pcbMigrMatOrg', 'pcbMigrMatOrg', 'Organización (+):', 1,157);
        pcbMigrMatOrg.setValidEmpty();
        pcbMigrMatOrg.addEmptyOption();
        pcbMigrMatOrg.enableReadOnlyEditor();
        pcbMigrMatOrg.enableOnChangeToEmptyOption();        
        pcbMigrMatSuborg = powerComboBox.create('pcbMigrMatSuborg', 'pcbMigrMatSuborg', 'Suborganización (*):', 1,119);
        pcbMigrMatSuborg.setValidEmpty();
        pcbMigrMatSuborg.addEmptyOption();
        pcbMigrMatSuborg.enableReadOnlyEditor();
        pcbMigrMatSuborg.setFieldFind(true);
        pcbMigrMatSuborg.enableOnChangeToEmptyOption();        
        pbcMigrMatCarrera = powerComboBox.create('pbcMigrMatCarrera', 'pbcMigrMatCarrera', 'Carrera (*):', 1,70);
        pbcMigrMatCarrera.setValidEmpty();
        pbcMigrMatCarrera.addEmptyOption();
        pbcMigrMatCarrera.enableReadOnlyEditor();
        pbcMigrMatCarrera.setFieldFind(true);
        pbcMigrMatCarrera.enableOnChangeToEmptyOption();		
		pcbMigrMatPeriodo = powerComboBox.create('pcbMigrMatPeriodo', 'pcbMigrMatPeriodo', 'Periodo (+):', 1,157);
        pcbMigrMatPeriodo.setValidEmpty();
        pcbMigrMatPeriodo.addEmptyOption();
        pcbMigrMatPeriodo.enableReadOnlyEditor();
        pcbMigrMatPeriodo.setFieldFind(true);		
		pcbMigrMatPosicion = powerComboBox.create('pcbMigrMatPosicion','pcbMigrMatPosicion','Posición (*):',1,119);
		pcbMigrMatPosicion.setValidEmpty();
		pcbMigrMatPosicion.enableReadOnlyEditor();
		pcbMigrMatPosicion.addEmptyOption();
		pcbMigrMatPosicion.setFieldFind(true);
		pcbMigrMatPosicion.enableOnChangeToEmptyOption();        
        pcbMigrMatOrigen = powerComboBox.create('pcbMigrMatOrigen', 'pcbMigrMatOrigen', 'Materia Origen (*):', 1,157);
		pcbMigrMatOrigen.setDataType('string');
        pcbMigrMatOrigen.setValidEmpty();
        pcbMigrMatOrigen.addEmptyOption();
        pcbMigrMatOrigen.enableReadOnlyEditor();
        pcbMigrMatOrigen.setFieldFind(true);
        pcbMigrMatOrigen.setWidthCombo(652);        
		pcbMigrMatDestino = powerComboBox.create('pcbMigrMatDestino', 'pcbMigrMatDestino', 'Materia Destino (*):', 1,157);
		pcbMigrMatDestino.setDataType('string');
        pcbMigrMatDestino.setValidEmpty();
        pcbMigrMatDestino.addEmptyOption();
        pcbMigrMatDestino.enableReadOnlyEditor();
        pcbMigrMatDestino.setFieldFind(true);
        pcbMigrMatDestino.setWidthCombo(652);				
		imgButtonsMigrMatGuardar = imgButtons.create('imgButtonsMigrMatGuardar', 'Guardar', 'ok.png');		
        imgButtonsMigrMatLimpiar = imgButtons.create('imgButtonsMigrMatLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsMigrMatSalir = imgButtons.create('imgButtonsMigrMatSalir', 'Salir', 'salir.png');
    },
    
    init: function() {
        this.create();
        this.setEvents();
        this.dialogsMigrMateria_Init();       
        this.createMWs();
    },
    
  	resetElements : function(element) {
  		var rlx = xmlStructs.createRecordList("rlx");

  		if (element == 'org') {
			Tool.rstPwrCmb(pcbMigrMatSuborg);
			Tool.rstPwrCmb(pbcMigrMatCarrera);
			Tool.rstPwrCmb(pcbMigrMatPosicion);
			Tool.rstPwrCmb(pcbMigrMatOrigen);
			if (pcbMigrMatOrg.getOption() != '')
				Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsMigrMateria, pcbMigrMatSuborg, 1, 2, pcbMigrMatOrg);
		}
		else if (element == 'sub') {
			Tool.rstPwrCmb(pbcMigrMatCarrera);
			Tool.rstPwrCmb(pcbMigrMatPosicion);
			Tool.rstPwrCmb(pcbMigrMatOrigen);
			if (pcbMigrMatSuborg.getOption() != '')
				Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsMigrMateria, pbcMigrMatCarrera, -1, 3, pcbMigrMatSuborg);
		}
		else if (element == 'car') {
			Tool.rstPwrCmb(pcbMigrMatOrigen);
			if (pbcMigrMatCarrera.getOption() != '') {
				rlx.add('reg', pbcMigrMatCarrera.setModeReturnGetText(2));
				Tool.cnnSrv('MantObject', 'getMantPensumPosicion', this.windowName + '.loadDataPosicion()', rlx);
			}
		}
		else if (element == 'pos') {
			Tool.rstPwrCmb(pcbMigrMatOrigen);
			Tool.rstPwrCmb(pcbMigrMatDestino);
			if (pcbMigrMatPosicion.getOption() != '') {
				rlx.add('reg', pcbMigrMatPeriodo);
				rlx.add('reg', pbcMigrMatCarrera.setModeReturnGetText(2));
				rlx.add('reg', pcbMigrMatPosicion);
				Tool.cnnSrv('MantObject', 'getMigrMateriaCurso', this.windowName + '.loadDataMateria()', rlx);
			}
		}
	},

  	loadDataMateria: function() {
  		Tool.loadPowerComboData(dialogsMigrMateria, pcbMigrMatOrigen, 0, 1, json('getMigrMateriaCurso'));
		pcbMigrMatOrigen.setSizeHeight(300);
  		Tool.loadPowerComboData(dialogsMigrMateria, pcbMigrMatDestino, 0, 1, json('getMateria'));
  		pcbMigrMatDestino.setSizeHeight(300);
  	},
  	
  	loadDataPosicion: function() {
  		var rlx = xmlStructs.createRecordList("rlx");
  		Tool.loadPowerComboData(dialogsMigrMateria, pcbMigrMatPosicion, 0, 1, json('getMantPensumPosicion'));
  		rlx.add('reg', pbcMigrMatCarrera.setModeReturnGetText(5));
  		Tool.cnnSrv('MantObject', 'getPeriodoXNivelAcad', this.windowName + '.loadDataPeriodo()', rlx);
  	},
  	
  	loadDataPeriodo: function() {
  		Tool.loadPowerComboData(dialogsMigrMateria, pcbMigrMatPeriodo, 0, 1, json('getPeriodoXNivelAcad'));
  		pcbMigrMatPeriodo.setSelectedIndex(1);
  	},
  	
	setEvents: function() {		
		pcbMigrMatOrg.onChange(this.windowName + ".resetElements('org')");
		pcbMigrMatSuborg.onChange(this.windowName + ".resetElements('sub')");
		pbcMigrMatCarrera.onChange(this.windowName + ".resetElements('car')");
		pcbMigrMatPosicion.onChange(this.windowName + ".resetElements('pos')");		
		imgButtonsMigrMatGuardar.onClick(this.windowName + ".coreUpdate()");
        imgButtonsMigrMatLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsMigrMatSalir.onClick("dialogsMigrMateria.close()");
    },	

  	limpiar: function() {  		
        pcbMigrMatOrg.setSelectedIndex(0);
        pcbMigrMatSuborg.setSelectedIndex(0);
        pbcMigrMatCarrera.setSelectedIndex(0);
        pcbMigrMatPeriodo.setSelectedIndex(0);
		Tool.rstPwrCmb(pcbMigrMatPosicion);
		Tool.rstPwrCmb(pcbMigrMatOrigen);
		Tool.rstPwrCmb(pcbMigrMatDestino);
        dialogsMigrMateria.setMsg("");
		Tool.cnnSrv('MsjObject', 'getMantEnvMenInit', this.windowName + '.loadInit()');
    },
    
	loadInit: function() {
		Tool.loadPowerComboData(dialogsMigrMateria, pcbMigrMatOrg, 0, 1, json('getData'));		
		Tool.getContext(dialogsMigrMateria, pcbMigrMatOrg, pcbMigrMatSuborg, pbcMigrMatCarrera, this.windowName + ".resetElements('car')");
	},
	
  	limpiarCoreUpdate: function() {  		
  		pcbMigrMatOrigen.setSelectedIndex(0);
  		pcbMigrMatDestino.setSelectedIndex(0);		
		Tool.getPowerComboDataFnc('pcbMigrMatOrigen.setSizeHeight(300)','MantObject', 'getMigrMateriaCurso', dialogsMigrMateria, pcbMigrMatOrigen, 0, 1, pcbMigrMatPeriodo, pbcMigrMatCarrera.setModeReturnGetText(2), pcbMigrMatPosicion);
  	},

    coreUpdate : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbMigrMatOrg.valid(dialogsMigrMateria))
			if (pcbMigrMatSuborg.valid(dialogsMigrMateria))
				if (pbcMigrMatCarrera.valid(dialogsMigrMateria))
					if (pcbMigrMatPeriodo.valid(dialogsMigrMateria))
						if (pcbMigrMatPosicion.valid(dialogsMigrMateria))
							if (pcbMigrMatOrigen.valid(dialogsMigrMateria))
								if (pcbMigrMatDestino.valid(dialogsMigrMateria)) {
									rlx.add('reg', pcbMigrMatOrigen);
									rlx.add('reg', pcbMigrMatDestino);
									rlx.add('reg', pcbMigrMatPeriodo);
									Tool.cnnSrv('MantObject', 'guardarMateriaMigrada', this.windowName + '.limpiarCoreUpdate()', rlx);
								} 
	}
};
