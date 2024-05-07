var dialogsRepoAluPorCarrera = new Object();
var powerComboBoxRepoAluPorCarOrganizacion = new Object();
var powerComboBoxRepoAluPorCarSuborganizacion = new Object();
var powerComboBoxRepoAluPorCarCarrera = new Object();
var powerComboBoxRepoAluPorCarPeriodo = new Object();
var powerComboBoxRepoAluPorCarCarPosicion = new Object();
var imgButtonsRepoAluPorCarReporte = new Object();
var imgButtonsRepoAluPorCarSalir = new Object();
var mw_RepoAluPorCarrera = new Object();//minWindow
var rl = new Object();

var RepoAluPorCarrera = {
    windowName: 'RepoAluPorCarrera',
    isCreate: false,
    
    show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
			this.limpiar('lmp');			
		dialogsRepoAluPorCarrera.show();
	},
	
	hide : function(){
		dialogsRepoAluPorCarrera.hide();
	},
	
    createMWs: function(){
        mwRepoAluPorCarrera = desktop.addMinWindow('R.L.A.Curso', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoAluPorCarrera.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

  dialogsRepoAluPorCarrera_Init : function(){
        dialogsRepoAluPorCarrera.setMinimizeXY(0,0);
        dialogsRepoAluPorCarrera.setCenterScreen();
        dialogsRepoAluPorCarrera.addSpace(0,0,20);
        dialogsRepoAluPorCarrera.addLn(1,1,1);
		dialogsRepoAluPorCarrera.setHeightCell(1,1,10);
        dialogsRepoAluPorCarrera.addObjToDialog(powerComboBoxRepoAluPorCarOrganizacion,2,1,24);
        dialogsRepoAluPorCarrera.addObjToDialog(powerComboBoxRepoAluPorCarSuborganizacion,2,1,24);
        dialogsRepoAluPorCarrera.addObjToDialog(powerComboBoxRepoAluPorCarCarrera,2,1,24);
        dialogsRepoAluPorCarrera.adjAllMarginObj(2,1,15);
        dialogsRepoAluPorCarrera.addObjToDialog(powerComboBoxRepoAluPorCarPeriodo,3,1,24);
        powerComboBoxRepoAluPorCarPeriodo.setWidthCombo(416);
        dialogsRepoAluPorCarrera.addObjToDialog(powerComboBoxRepoAluPorCarCarPosicion,3,1,24);
        dialogsRepoAluPorCarrera.adjAllMarginObj(3,1,15);
        dialogsRepoAluPorCarrera.addLn(5,1,1);
		dialogsRepoAluPorCarrera.setHeightCell(5,1,9);
        dialogsRepoAluPorCarrera.addObjToDialog(imgButtonsRepoAluPorCarReporte,6,1);
    	imgButtonsRepoAluPorCarReporte.setDimension(90,22);
        dialogsRepoAluPorCarrera.addObjToDialog(imgButtonsRepoAluPorCarSalir,6,1);
    	imgButtonsRepoAluPorCarSalir.setDimension(90,22);
        dialogsRepoAluPorCarrera.adjAllMarginObj(6,1,30);
        dialogsRepoAluPorCarrera.leftMarginObj(6,1,0,282);
  },
 
  create : function(){
      dialogsRepoAluPorCarrera = dialogs.create('dialogsRepoAluPorCarrera',0,0,816,102,'ALUMNOS POR CARRERA');
	  dialogsRepoAluPorCarrera.setAdjY(146);
      powerComboBoxRepoAluPorCarOrganizacion = powerComboBox.create('powerComboBoxRepoAluPorCarOrganizacion','powerComboBoxRepoAluPorCarOrganizacion','Organización (+):',1,103);
	  powerComboBoxRepoAluPorCarOrganizacion.enableReadOnlyEditor();
      powerComboBoxRepoAluPorCarOrganizacion.addEmptyOption();
      powerComboBoxRepoAluPorCarOrganizacion.setValidEmpty();
	  powerComboBoxRepoAluPorCarSuborganizacion = powerComboBox.create('powerComboBoxRepoAluPorCarSuborganizacion','powerComboBoxRepoAluPorCarSuborganizacion','Suborganización (^):',1,123);
	  powerComboBoxRepoAluPorCarSuborganizacion.enableReadOnlyEditor();
      powerComboBoxRepoAluPorCarSuborganizacion.addEmptyOption();
      powerComboBoxRepoAluPorCarSuborganizacion.setValidEmpty();
	  powerComboBoxRepoAluPorCarCarrera = powerComboBox.create('powerComboBoxRepoAluPorCarCarrera','powerComboBoxRepoAluPorCarCarrera','Carrera (^):',1,71);
	  powerComboBoxRepoAluPorCarCarrera.enableReadOnlyEditor();
      powerComboBoxRepoAluPorCarCarrera.addEmptyOption();
      powerComboBoxRepoAluPorCarCarrera.setValidEmpty();
	  powerComboBoxRepoAluPorCarPeriodo = powerComboBox.create('powerComboBoxRepoAluPorCarPeriodo','powerComboBoxRepoAluPorCarPeriodo','Periodo:',1,103);
	  powerComboBoxRepoAluPorCarPeriodo.enableReadOnlyEditor();
      powerComboBoxRepoAluPorCarPeriodo.addEmptyOption();
      powerComboBoxRepoAluPorCarPeriodo.setValidEmpty();
      powerComboBoxRepoAluPorCarCarPosicion = powerComboBox.create('powerComboBoxRepoAluPorCarCarPosicion','powerComboBoxRepoAluPorCarCarPosicion','Posición:',1,71);
	  powerComboBoxRepoAluPorCarCarPosicion.enableReadOnlyEditor();
      powerComboBoxRepoAluPorCarCarPosicion.addEmptyOption();
      powerComboBoxRepoAluPorCarCarPosicion.setValidEmpty();
      imgButtonsRepoAluPorCarReporte = imgButtons.create('imgButtonsRepoAluPorCarReporte','Reporte','print.png');
      imgButtonsRepoAluPorCarSalir = imgButtons.create('imgButtonsRepoAluPorCarSalir','Salir','salir.png');
  },

  init : function(){
    this.create();
    this.setEvents();
  	this.dialogsRepoAluPorCarrera_Init();
  	this.createMWs();
  },
  
 limpiar : function(tipo) {
  		powerComboBoxRepoAluPorCarOrganizacion.setSelectedIndex(0);
  		Tool.rstPwrCmb(powerComboBoxRepoAluPorCarSuborganizacion);
  		Tool.rstPwrCmb(powerComboBoxRepoAluPorCarCarrera);
  		Tool.rstPwrCmb(powerComboBoxRepoAluPorCarPeriodo);
  		dialogsRepoAluPorCarrera.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},


	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoAluPorCarrera, powerComboBoxRepoAluPorCarOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoAluPorCarrera, powerComboBoxRepoAluPorCarOrganizacion, powerComboBoxRepoAluPorCarSuborganizacion, powerComboBoxRepoAluPorCarCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function(){
    	imgButtonsRepoAluPorCarReporte.onClick(this.windowName + ".reporte()");
        imgButtonsRepoAluPorCarSalir.onClick('dialogsRepoAluPorCarrera.close()');
		powerComboBoxRepoAluPorCarOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxRepoAluPorCarSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		powerComboBoxRepoAluPorCarCarrera.onChange(this.windowName + ".resetElements('carr')");
		powerComboBoxRepoAluPorCarPeriodo.onChange(this.windowName + ".resetElements('per')");
		powerComboBoxRepoAluPorCarCarPosicion.onChange(this.windowName + ".resetElements('pos')");
    },
    
    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxRepoAluPorCarSuborganizacion);
	  		Tool.rstPwrCmb(powerComboBoxRepoAluPorCarCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoAluPorCarPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoAluPorCarCarPosicion);
	    	if (powerComboBoxRepoAluPorCarOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoAluPorCarrera, powerComboBoxRepoAluPorCarSuborganizacion, 1, 2, powerComboBoxRepoAluPorCarOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(powerComboBoxRepoAluPorCarCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoAluPorCarPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoAluPorCarCarPosicion);
	    	if (powerComboBoxRepoAluPorCarSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoAluPorCarrera, powerComboBoxRepoAluPorCarCarrera, -1, 3, powerComboBoxRepoAluPorCarSuborganizacion);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(powerComboBoxRepoAluPorCarPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoAluPorCarCarPosicion);
	    	if (powerComboBoxRepoAluPorCarCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoAluPorCarrera, powerComboBoxRepoAluPorCarPeriodo, 0, 1, powerComboBoxRepoAluPorCarCarrera.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
          Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsRepoAluPorCarrera, powerComboBoxRepoAluPorCarCarPosicion, 0, 1, powerComboBoxRepoAluPorCarCarrera.setModeReturnGetText(2));        		
    	} 
	},
	
	reporte : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
        rep.setNoRepeatHead();
        rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addHeadTitle('ALUMNOS POR CARRERA',true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','normal');
        rep.addBar(0,152,1128,214,rep.getRGBAObj(187,196,238,0.8),false);
        rep.addLine(0,146,1128,146,rep.getRGBAObj(210,210,210,1),1,false);
        rep.addLine(0,220,1128,220,rep.getRGBAObj(210,210,210,1),1,false); 
		rep.addText(20, 170, 'ORGANIZACION:        '+powerComboBoxRepoAluPorCarOrganizacion.getOption(),false);
		rep.addText(20, 187, 'SUBORGANIZACION: '+powerComboBoxRepoAluPorCarSuborganizacion.getOption(),false);
		rep.addText(20, 205, 'CARRERA:                  '+powerComboBoxRepoAluPorCarCarrera.getOption(),false);
		rep.addText(530, 187, 'PERIODO:   '+powerComboBoxRepoAluPorCarPeriodo.getOption(),false);
		rep.addText(530, 205, 'POSICION:  '+powerComboBoxRepoAluPorCarCarPosicion.getOption(),false);
		//************************ TABLE ***************************
		rep.addTable('TablaRepoAluPorCarrera',['Ci.','Nombre','Apellido','Telefono','email'],396,219);
        rep.setSizeColumnArray([100,230,230,70,160]);
        rep.setAlignData(['center','left','left','center','left']); 
        /*
        rep.addJsonData('TablaRepoAluPorCarrera','getRepoListAlumnoCurso',[0,1,2]); 
        rep.setTotalRowTable(29);
        rep.setHeightRow(25); 
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        */
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	coreUpdate: function(){
        var rlx = xmlStructs.createRecordList("rlx");
		if (powerComboBoxRepoAluPorCarPeriodo.valid(dialogsRepoAluPorCarrera))
			if (powerComboBoxRepoAluPorCarCarPosicion.valid(dialogsRepoAluPorCarrera))
							rlx.add('reg', powerComboBoxRepoAluPorCarCarPosicion);{
							Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte()', rlx);
						}
    }
	
}







