var dialogsRepoHorAula = new Object(); 
var powerComboBoxRepoHorEstPeriodo = new Object();
var powerComboBoxRepoHorAulPeriodo = new Object(); 
var powerComboBoxRepoHorBloque = new Object();
var powerComboBoxRepoHorAulAula = new Object();
var imgButtonsReptHorAulReporte = new Object();
var imgButtonsReptHorAulSalir = new Object();
var mw_RepoHorAula = new Object();// minWindow
var rl = new Object();

var RepoHorAula = {
    windowName: 'RepoHorAula',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoHorAula.isByClean()) {
        	powerComboBoxRepoHorEstPeriodo.setSelectedIndex(0); 		
			powerComboBoxRepoHorAulPeriodo.setSelectedIndex(0); 		
  			powerComboBoxRepoHorBloque.setSelectedIndex(0); 		
  			powerComboBoxRepoHorAulAula.setSelectedIndex(0); 		
			Tool.cnnSrv('ReportObject', 'getHorarioAulaInit', this.windowName + '.loadDataResultado()');	
		}    
        dialogsRepoHorAula.show();
    },

    hide: function(){
        dialogsRepoHorAula.hide();
    },
    createMWs: function(){
        mwRepoHorAula = desktop.addMinWindow('R.H. Aula', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoHorAula.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

  	dialogsRepoHorAula_Init : function(){
        dialogsRepoHorAula.setMinimizeXY(0,0);
        dialogsRepoHorAula.setCenterScreen();
        dialogsRepoHorAula.addSpace(0,0,20);
        dialogsRepoHorAula.addLn(1,1,1);
		dialogsRepoHorAula.setHeightCell(1,1,10);
		dialogsRepoHorAula.addObjToDialog(powerComboBoxRepoHorEstPeriodo,2,1,24);
		dialogsRepoHorAula.addObjToDialog(powerComboBoxRepoHorAulPeriodo,2,1,24);
		dialogsRepoHorAula.adjAllMarginObj(2,1,20);
        dialogsRepoHorAula.addObjToDialog(powerComboBoxRepoHorBloque,3,1,24);
        dialogsRepoHorAula.addObjToDialog(powerComboBoxRepoHorAulAula,3,1,24);
		dialogsRepoHorAula.adjAllMarginObj(3,1,20);
        dialogsRepoHorAula.addLn(4,1,1);
		dialogsRepoHorAula.setHeightCell(4,1,8);
        dialogsRepoHorAula.addObjToDialog(imgButtonsReptHorAulReporte,5,1);
    	imgButtonsReptHorAulReporte.setDimension(90,22);
        dialogsRepoHorAula.addObjToDialog(imgButtonsReptHorAulSalir,5,1);
    	imgButtonsReptHorAulSalir.setDimension(90,22);
        dialogsRepoHorAula.adjAllMarginObj(5,1,20);
        dialogsRepoHorAula.leftMarginObj(5,1,0,133);
  	},
 
 	 create : function(){
		dialogsRepoHorAula = dialogs.create('dialogsRepoHorAula',0,0,510,100,'HORARIO DEL AULA');
		dialogsRepoHorAula.setAdjY(65);
		powerComboBoxRepoHorEstPeriodo = powerComboBox.create('powerComboBoxRepoHorEstPeriodo','powerComboBoxRepoHorEstPeriodo','Estado Periodo:',1,97);
		powerComboBoxRepoHorEstPeriodo.enableReadOnlyEditor();
		powerComboBoxRepoHorEstPeriodo.addEmptyOption();
		powerComboBoxRepoHorEstPeriodo.setValidEmpty();
		powerComboBoxRepoHorBloque = powerComboBox.create('powerComboBoxRepoHorBloque','powerComboBoxRepoHorBloque','Bloque:',1,97);
		powerComboBoxRepoHorBloque.enableReadOnlyEditor();
		powerComboBoxRepoHorBloque.addEmptyOption();
		powerComboBoxRepoHorBloque.setValidEmpty();
		powerComboBoxRepoHorBloque.setDataType('string');
		powerComboBoxRepoHorAulPeriodo = powerComboBox.create('powerComboBoxRepoHorAulPeriodo','powerComboBoxRepoHorAulPeriodo','Periodo:',1,55);
		powerComboBoxRepoHorAulPeriodo.enableReadOnlyEditor();
		powerComboBoxRepoHorAulPeriodo.addEmptyOption();
		powerComboBoxRepoHorAulPeriodo.setValidEmpty();
		powerComboBoxRepoHorAulAula = powerComboBox.create('powerComboBoxRepoHorAulAula','powerComboBoxRepoHorAulAula','Aula:',1,55);
		powerComboBoxRepoHorAulAula.enableReadOnlyEditor();
		powerComboBoxRepoHorAulAula.addEmptyOption();
		powerComboBoxRepoHorAulAula.setValidEmpty();
		powerComboBoxRepoHorAulAula.setDataType('string');
		imgButtonsReptHorAulReporte = imgButtons.create('imgButtonsReptHorAulReporte','Reporte','print.png');
		imgButtonsReptHorAulSalir = imgButtons.create('imgButtonsReptHorAulSalir','Salir','salir.png');
  	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsRepoHorAula_Init();
		this.createMWs();
	},
 
 	 setEvents: function(){
		powerComboBoxRepoHorEstPeriodo.onChange(this.windowName + ".resetElements('edo')");
		powerComboBoxRepoHorBloque.onChange(this.windowName + ".resetElements('blo')");
		imgButtonsReptHorAulReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsReptHorAulSalir.onClick('dialogsRepoHorAula.close()');
 	},
        
 	 resetElements : function(element) {
		if (element == 'edo') {
			Tool.rstPwrCmb(powerComboBoxRepoHorAulPeriodo);
	    	if (powerComboBoxRepoHorEstPeriodo.getOption() != "")
	    		Tool.getPowerComboData('ReportObject', 'getPeriodoXEdoPeriodo', dialogsRepoHorAula, powerComboBoxRepoHorAulPeriodo, 0, 1, powerComboBoxRepoHorEstPeriodo);
		}
		else if (element == 'blo') {
			Tool.rstPwrCmb(powerComboBoxRepoHorAulAula);
	    	if (powerComboBoxRepoHorBloque.getOption() != "")
	    		Tool.getPowerComboData('ReportObject', 'getMantAulaXBloque', dialogsRepoHorAula, powerComboBoxRepoHorAulAula, 0, 0, powerComboBoxRepoHorBloque);
		}
  	},      

	loadDataResultado : function() {
		Tool.loadPowerComboData(dialogsRepoHorAula, powerComboBoxRepoHorEstPeriodo, 0, 1, json('getMantEstPeriodo'));
		Tool.loadPowerComboData(dialogsRepoHorAula, powerComboBoxRepoHorBloque, 0, 1, json('getMantBloque'));
  	},

  	reporte : function() {

		var jaux = json("getHorarioAula");
        var ji = json("getHorarioAula");
		var ji2 = json("getHorarioXTipo");
		for(var p = 0; p < ji.data[0].length; p++) {
			var aux = jaux.data[0][p];
			ji.data[0][p] = jaux.data[2][p];
			ji.data[2][p] = jaux.data[1][p];
			ji.data[1][p] = jaux.data[3][p];
			ji.data[3][p] = aux;
            ji.data[7][p] = jaux.data[4][p] + ' ' + jaux.data[5][p];
            ji.data[4][p] = jaux.data[6][p];
		}
		var h = new Horario({ prof: true, materia: true, seccion: true, sunday: true, saturday: true});
		var arrObject = [ { data: powerComboBoxRepoHorEstPeriodo.getOption(), title: "ESTADO: ", x: 2, y: 2 },
						  { data: powerComboBoxRepoHorBloque.getOption(), title: "BLOQUE: ", x: 264, y: 2 },
						  { data: powerComboBoxRepoHorAulPeriodo.getOption(), title: "PERIODO: ", x: 2, y: 20 },
						  { data: powerComboBoxRepoHorAulAula.getOption(), title: "AULA: ", x: 288, y: 20 }
		];
		h.setDataHeadWithObject(arrObject);
		h.setJson(ji,ji2);
		h.show();
	},
	
	coreUpdate: function(){
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (powerComboBoxRepoHorEstPeriodo.valid(dialogsRepoHorAula))
		    if (powerComboBoxRepoHorAulPeriodo.valid(dialogsRepoHorAula))
			    if (powerComboBoxRepoHorBloque.valid(dialogsRepoHorAula))
				    if (powerComboBoxRepoHorAulAula.valid(dialogsRepoHorAula)){
				    	rlx.add('reg', powerComboBoxRepoHorAulAula);
						rlx.add('reg', powerComboBoxRepoHorAulPeriodo);
		        	 	Tool.cnnSrv('ReportObject', 'getHorarioAula', this.windowName + '.reporte()', rlx);
	           	        }
    }
}