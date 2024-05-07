var dialogsRepoPensum = new Object();
var powerComboBoxRepoPensOrganizacion = new Object();
var powerComboBoxRepoPensSuborganizacion = new Object();
var powerComboBoxRepoPensCarrera = new Object();
var powerComboBoxRepoPensum = new Object();
var imgButtonsRepoPensReporte = new Object();
var imgButtonsRepoPensSalir = new Object();
var mw_RepoHojaEvaAlumno = new Object();//minWindow
var rl = new Object();

var RepoPensum = {   
    windowName: 'RepoPensum',
    isCreate: false,
    
    show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsRepoPensum.isByClean())
			this.limpiar();			
		dialogsRepoPensum.show();
	},
	
	hide : function(){
		dialogsRepoPensum.hide();
	},
	
    createMWs: function(){
        mwRepoPensum = desktop.addMinWindow('R.Pensum', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoPensum.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

  dialogsRepoPensum_Init : function(){
        dialogsRepoPensum.setMinimizeXY(0,0);
        dialogsRepoPensum.setCenterScreen();
        dialogsRepoPensum.addSpace(0,0,20);
        dialogsRepoPensum.addLn(1,1,1);
		dialogsRepoPensum.setHeightCell(1,1,10);
        dialogsRepoPensum.addObjToDialog(powerComboBoxRepoPensOrganizacion,2,1,24);
        dialogsRepoPensum.addObjToDialog(powerComboBoxRepoPensSuborganizacion,2,1,24);
        dialogsRepoPensum.addObjToDialog(powerComboBoxRepoPensCarrera,2,1,24);
        dialogsRepoPensum.adjAllMarginObj(2,1,10);
        dialogsRepoPensum.addObjToDialog(powerComboBoxRepoPensum,3,1,24);
        powerComboBoxRepoPensum.setWidthCombo(642);
        dialogsRepoPensum.adjAllMarginObj(3,1,10);
        dialogsRepoPensum.addLn(5,1,1);
		dialogsRepoPensum.setHeightCell(5,1,9);
        dialogsRepoPensum.addObjToDialog(imgButtonsRepoPensReporte,6,1);
    	imgButtonsRepoPensReporte.setDimension(90,22);
        dialogsRepoPensum.addObjToDialog(imgButtonsRepoPensSalir,6,1);
    	imgButtonsRepoPensSalir.setDimension(90,22);
        dialogsRepoPensum.adjAllMarginObj(6,1,30);
        dialogsRepoPensum.leftMarginObj(6,1,0,282);
  },
 
  create : function(){
      dialogsRepoPensum = dialogs.create('dialogsRepoPensum',0,0,805,102,'REPORTE PENSUM');
	  dialogsRepoPensum.setAdjY(76);
      powerComboBoxRepoPensOrganizacion = powerComboBox.create('powerComboBoxRepoPensOrganizacion','powerComboBoxRepoPensOrganizacion','Organización (+):',1,103);
	  powerComboBoxRepoPensOrganizacion.enableReadOnlyEditor();
      powerComboBoxRepoPensOrganizacion.addEmptyOption();
      powerComboBoxRepoPensOrganizacion.setValidEmpty();
	  powerComboBoxRepoPensSuborganizacion = powerComboBox.create('powerComboBoxRepoPensSuborganizacion','powerComboBoxRepoPensSuborganizacion','Suborganización (^):',1,123);
	  powerComboBoxRepoPensSuborganizacion.enableReadOnlyEditor();
      powerComboBoxRepoPensSuborganizacion.addEmptyOption();
      powerComboBoxRepoPensSuborganizacion.setValidEmpty();
	  powerComboBoxRepoPensCarrera = powerComboBox.create('powerComboBoxRepoPensCarrera','powerComboBoxRepoPensCarrera','Carrera (^):',1,71);
	  powerComboBoxRepoPensCarrera.enableReadOnlyEditor();
      powerComboBoxRepoPensCarrera.addEmptyOption();
      powerComboBoxRepoPensCarrera.setValidEmpty();
	  powerComboBoxRepoPensum = powerComboBox.create('powerComboBoxRepoPensum', 'powerComboBoxRepoPensum', 'Pensum:', 1,103);
      powerComboBoxRepoPensum.enableReadOnlyEditor();
      powerComboBoxRepoPensum.addEmptyOption();
      powerComboBoxRepoPensum.setValidEmpty();
      imgButtonsRepoPensReporte = imgButtons.create('imgButtonsRepoPensReporte','Reporte','print.png');
      imgButtonsRepoPensSalir = imgButtons.create('imgButtonsRepoPensSalir','Salir','salir.png');
  },

  init : function(){
    this.create();
    this.setEvents();
  	this.dialogsRepoPensum_Init();
  	this.createMWs();
  },
  
 limpiarCoreUpdate : function() {
  		dialogsRepoPensum.setMsg("");
		this.resetElements('bus');
	},
	
  	limpiar : function() {
  		Tool.rstPwrCmb(powerComboBoxRepoPensOrganizacion);
  		Tool.rstPwrCmb(powerComboBoxRepoPensSuborganizacion);
  		Tool.rstPwrCmb(powerComboBoxRepoPensCarrera);
  		dialogsRepoPensum.setMsg("");
		Tool.cnnSrv('MantObject', 'getMantPrelacionInit', this.windowName + '.loadDataInit()');
  	},
  	
    loadDataInit: function() {
        Tool.loadPowerComboData(dialogsRepoPensum, powerComboBoxRepoPensOrganizacion, 0, 1, json('getData'));
        Tool.getContext(dialogsRepoPensum, powerComboBoxRepoPensOrganizacion, powerComboBoxRepoPensSuborganizacion, powerComboBoxRepoPensCarrera, "RepoPensum.getPensumActivo()");
        dialogsRepoPensum.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },
      	
    getPensumActivo: function() {
    	Tool.getPowerComboData('MantObject', 'getMantPensum', dialogsRepoPensum, powerComboBoxRepoPensum, 5, 0, powerComboBoxRepoPensCarrera.setModeReturnGetText(2), new MiniDataSet(-1, 'string', true), new MiniDataSet(-1, 'string', true));
    },
  	
    resetElements : function(element) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (element == 'org') {
	    	Tool.rstPwrCmb(powerComboBoxRepoPensSuborganizacion);
			Tool.rstPwrCmb(powerComboBoxRepoPensCarrera);
			Tool.rstPwrCmb(powerComboBoxRepoPensum);
			Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoPensum, powerComboBoxRepoPensSuborganizacion, 1, 2, powerComboBoxRepoPensOrganizacion);
		}
		else if (element == 'suborg') {
			Tool.rstPwrCmb(powerComboBoxRepoPensCarrera);
			Tool.rstPwrCmb(powerComboBoxRepoPensum);
			Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoPensum, powerComboBoxRepoPensCarrera, -1, 3, powerComboBoxRepoPensSuborganizacion);		
		}
		else if (element == 'carr') {
			Tool.rstPwrCmb(powerComboBoxRepoPensum);
	    	this.getPensumActivo();
	    }
	},
		
    setEvents : function() {
    	imgButtonsRepoPensReporte.onClick(this.windowName + ".coreUpdate()");
	  	imgButtonsRepoPensSalir.onClick('dialogsRepoPensum.close()');
	  	powerComboBoxRepoPensOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxRepoPensSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");   
		powerComboBoxRepoPensCarrera.onChange(this.windowName + ".resetElements('carr')");
    },
    
	reporte : function(){
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
        rep.setHeadImage(imgEduca.banner,true);
        //rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14,'helvetica','normal');
		rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,0.9),true);
        rep.addHeadTitle('PENSUM',true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,145,1128,220,rep.getRGBAObj(187,196,238,0.8),true);
		rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),9,'helvetica','normal');
		rep.addText(20, 164,'ORGANIZACION:          '+powerComboBoxRepoPensOrganizacion.getOption(),true);
        rep.addText(20, 179, 'SUBORGANIZACION:  '+powerComboBoxRepoPensSuborganizacion.getOption(),true);
        rep.addText(20, 194, 'CARRERA:                     '+powerComboBoxRepoPensCarrera.getOption(),true);
		rep.addText(20, 209, 'PENSUM:                       '+powerComboBoxRepoPensum.getOption(),true);
		//////////////////////////////////////////TABLA DE DATOS///////////////////////////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
		rep.addTable('tablaMPensum',['Posición','Cod. Materia','Materia','U.C.','Cod. Mat. Prelante'],404,223);
		rep.setSizeColumnArray([105,100,350,60,195]);
		rep.setAlignData(['left','center','left','center','center']);
		rep.addJsonData('tablaMPensum','getMateriaPensum',[0,1,2,3,4]); 
		rep.setTotalRowTable(31);
		rep.setHeightRow(21);
		///////////////////////////////////////BARRA////MENSAJE//////////////////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,899,1140,972,rep.getRGBAObj(210,210,200,0.9),true);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.6),8.5,'courier','bold');
        rep.addText(20, 940,'La educación es el arma más poderosa que puedes usar para cambiar el mundo (Mandela).',true);
        //////////////////////////////////////////PIE DE PAGINA////////////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
    
    coreUpdate: function(){
        var rlx = xmlStructs.createRecordList("rlx");
		if (powerComboBoxRepoPensCarrera.valid(dialogsRepoPensum))
			if (powerComboBoxRepoPensum.valid(dialogsRepoPensum)){
							rlx.add('reg', powerComboBoxRepoPensum);
							Tool.cnnSrv('ReportObject', 'getMateriaPensum', this.windowName + '.reporte()', rlx);
						}
    }
	
}

