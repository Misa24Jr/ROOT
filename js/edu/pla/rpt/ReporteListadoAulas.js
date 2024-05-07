var dialogsReporteListadoAulas = new Object();
var powerComboBoxReptLisAulOrganizacion = new Object();
var powerComboBoxReptLisAulSubOrganizacion = new Object();
var powerComboBoxReptLisAulCarrera = new Object();
var powerComboBoxReptLisAulPeriodo = new Object();
var powerComboBoxReptLisAuTipAula = new Object();
var imgButtonsReptLisAulReporte = new Object();
var imgButtonsReptLisAulSalir = new Object();
var mw_ReporteListadoAulas = new Object();// minWindow

var ReporteListadoAulas = {
    windowName : 'ReporteListadoAulas',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsReporteListadoAulas.isByClean()) 
           Tool.cnnSrv('MantObject', 'getMantOrganizacion', this.windowName + '.loadDataInit()');
		   
        dialogsReporteListadoAulas.show();
    },
	
	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsReporteListadoAulas, powerComboBoxReptLisAulOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsReporteListadoAulas, powerComboBoxReptLisAulOrganizacion, powerComboBoxReptLisAulSubOrganizacion, powerComboBoxReptLisAulCarrera);
    },
	
    hide: function(){
        dialogsReporteListadoAulas.hide();
    },
    createMWs: function(){
        mwReporteListadoAulas = desktop.addMinWindow('R.Listado Aula', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsReporteListadoAulas.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

  dialogsReporteListadoAulas_Init : function(){
        dialogsReporteListadoAulas.setMinimizeXY(0,0);
        dialogsReporteListadoAulas.setCenterScreen();
        dialogsReporteListadoAulas.addSpace(0,0,20);
        dialogsReporteListadoAulas.addLn(1,1,1);
		dialogsReporteListadoAulas.setHeightCell(1,1,13);
		dialogsReporteListadoAulas.addObjToDialog(powerComboBoxReptLisAulOrganizacion,2,1,24);
		dialogsReporteListadoAulas.addObjToDialog(powerComboBoxReptLisAulSubOrganizacion,2,1,24);
		dialogsReporteListadoAulas.adjAllMarginObj(2,1,20);
		dialogsReporteListadoAulas.addObjToDialog(powerComboBoxReptLisAulCarrera,3,1,24);
		dialogsReporteListadoAulas.addObjToDialog(powerComboBoxReptLisAulPeriodo,3,1,24);
		dialogsReporteListadoAulas.adjAllMarginObj(3,1,20);
		dialogsReporteListadoAulas.addObjToDialog(powerComboBoxReptLisAuTipAula,4,1,24);
		dialogsReporteListadoAulas.adjAllMarginObj(4,1,20);
        dialogsReporteListadoAulas.addLn(5,1,1);
		dialogsReporteListadoAulas.setHeightCell(5,1,10);
		dialogsReporteListadoAulas.addObjToDialog(imgButtonsReptLisAulReporte,6,1);
    	imgButtonsReptLisAulReporte.setDimension(90,22);
        dialogsReporteListadoAulas.addObjToDialog(imgButtonsReptLisAulSalir,6,1);
    	imgButtonsReptLisAulSalir.setDimension(90,22);
        dialogsReporteListadoAulas.adjAllMarginObj(6,1,30);
        dialogsReporteListadoAulas.leftMarginObj(6,1,0,168); 
        
  },
  
  create : function(){
      dialogsReporteListadoAulas = dialogs.create('dialogsReporteListadoAulas',0,0,587,131,'LISTADO DE AULAS');
      dialogsReporteListadoAulas.setAdjY(142);
	  powerComboBoxReptLisAulOrganizacion = powerComboBox.create('powerComboBoxReptLisAulOrganizacion','powerComboBoxReptLisAulOrganizacion','Organización (+):',1,104);
	  powerComboBoxReptLisAulOrganizacion.enableReadOnlyEditor();
      powerComboBoxReptLisAulOrganizacion.addEmptyOption();
      powerComboBoxReptLisAulOrganizacion.setValidEmpty();
	  powerComboBoxReptLisAulSubOrganizacion = powerComboBox.create('powerComboBoxReptLisAulSubOrganizacion','powerComboBoxReptLisAulSubOrganizacion','Suborganización (^):',1,124);
	  powerComboBoxReptLisAulSubOrganizacion.enableReadOnlyEditor();
      powerComboBoxReptLisAulSubOrganizacion.addEmptyOption();
      powerComboBoxReptLisAulSubOrganizacion.setValidEmpty();
	  powerComboBoxReptLisAulCarrera = powerComboBox.create('powerComboBoxReptLisAulCarrera','powerComboBoxReptLisAulCarrera','Carrera (^):',1,104);
	  powerComboBoxReptLisAulCarrera.enableReadOnlyEditor();
      powerComboBoxReptLisAulCarrera.addEmptyOption();
      powerComboBoxReptLisAulCarrera.setValidEmpty();
	  powerComboBoxReptLisAulPeriodo = powerComboBox.create('powerComboBoxReptLisAulPeriodo','powerComboBoxReptLisAulPeriodo','Periodo (+):',1,124);
	  powerComboBoxReptLisAulPeriodo.enableReadOnlyEditor();
      powerComboBoxReptLisAulPeriodo.addEmptyOption();
      powerComboBoxReptLisAulPeriodo.setValidEmpty();
	  powerComboBoxReptLisAuTipAula = powerComboBox.create('powerComboBoxReptLisAuTipAula','powerComboBoxReptLisAuTipAula','Tipo de Aula (*):',1,104);
	  powerComboBoxReptLisAuTipAula.enableReadOnlyEditor();
      powerComboBoxReptLisAuTipAula.addEmptyOption();
      powerComboBoxReptLisAuTipAula.setValidEmpty();
      imgButtonsReptLisAulReporte = imgButtons.create('imgButtonsReptLisAulReporte','Reporte','print.png');
      imgButtonsReptLisAulSalir = imgButtons.create('imgButtonsReptLisAulSalir','Salir','salir.png');
  },

  init : function(){
    this.create();
    this.setEvents(); 
  	this.dialogsReporteListadoAulas_Init();
  	this.createMWs();
  },
	
  resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxReptLisAulSubOrganizacion);
			Tool.rstPwrCmb(powerComboBoxReptLisAulCarrera);
			if (powerComboBoxReptLisAulOrganizacion.getOption() != "")
				Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsReporteListadoAulas, powerComboBoxReptLisAulSubOrganizacion, 1, 2, powerComboBoxReptLisAulOrganizacion);
		}
		else if (element == 'suborg') {
			Tool.rstPwrCmb(powerComboBoxReptLisAulCarrera);
			if (powerComboBoxReptLisAulSubOrganizacion.getOption() != "")
				Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsReporteListadoAulas, powerComboBoxReptLisAulCarrera, -1, 3, powerComboBoxReptLisAulSubOrganizacion);		
		}
    },
  
	setEvents: function(){
		imgButtonsReptLisAulReporte.onClick('ReporteListadoAulas.reporte()');
		//imgButtonsReptLisAulReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsReptLisAulSalir.onClick("dialogsReporteListadoAulas.close()");
		powerComboBoxReptLisAulOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxReptLisAulSubOrganizacion.onChange(this.windowName + ".resetElements('suborg')");
    },
	
	/*
	limpiar : function(){
  		dialogsReporteListadoAulas.setMsg("");
  	},	
	*/	
	
	reporte : function(){
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
        rep.setPositionIcon(1090,108);
        rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addHeadTitle('LISTADO DE AULAS',true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),8,'courier','bold');
        rep.addBar(0,152,1128,220,rep.getRGBAObj(187,196,238,0.8),false);
        rep.addLine(0,146,1128,146,rep.getRGBAObj(210,210,210,1),1,false);
        rep.addLine(0,226,1128,226,rep.getRGBAObj(210,210,210,1),1,false); 
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),9,'courier','bold');
		rep.addText(20, 165,'ORGANIZACIÓN:',false);//aniade un texto en una posicion especifica con la letra predefinida
        rep.addText(133, 165,powerComboBoxReptLisAulOrganizacion.getOption(),false);
		rep.addText(300, 165, 'SUBORGANIZACIÓN:',false);
		rep.addText(440, 165,powerComboBoxReptLisAulSubOrganizacion.getOption(),false);
		rep.addText(680, 165, 'ESCUELA:',false);
		rep.addText(756, 165,powerComboBoxReptLisAulCarrera.getOption(),false);
		rep.addText(20, 190, 'PERIODO:',false);
		rep.addText(133, 190,powerComboBoxReptLisAulPeriodo.getOption(),false);
		rep.addText(300, 190, 'TIPO DE AULA:',false);
		rep.addText(440, 190,powerComboBoxReptLisAuTipAula.getOption(),false);
				
		/*		
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE////////////////////////////////////////// 
		rep.addText(20, 165,'ORGANIZACIÓN:',false);//aniade un texto en una posicion especifica con la letra predefinida
        rep.addText(133, 165,a,false);
		rep.addText(300, 165, 'SUBORGANIZACIÓN:',false);
		rep.addText(440, 165,b,false);
		rep.addText(680, 165, 'ESCUELA:',false);
		rep.addText(756, 165,d,false);
		rep.addText(20, 195, 'TIPO DE AULA:',false);
		rep.addText(133, 195,e,false);
		rep.addText(300, 195, 'BLOQUE:',false);
		rep.addText(440, 195,f,false);
		rep.addText(680, 195, 'AULA:',false);
		rep.addText(756, 195,g,false);
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //rep.addText(100, 185, 'A continuacion la tabla de datos:',false);
        rep.addLine(0,146,1024,146,rep.getRGBAObj(210,210,210,1),1,false);//añade una linea en coordenadas x1,y1,x2,y2
        rep.addLine(0,206,1024,206,rep.getRGBAObj(210,210,210,1),1,false);
        //************************ TABLE ***************************
        rep.addTable('t1',['Tipo de Aula','Bloque','N°-Aula']);
        rep.setSizeColumnArray([620,170,170]);
        rep.addStructData('t1',stData);//asi se carga la data a traves de una estructura
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		rep.addJsonData('tablaProfCarrera','getProfesorCarrera');
		*/
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
		
	},
	/*
	coreUpdate: function(methodName){
        //var procesar = false
		//var rlx = xmlStructs.createRecordList("rlx");
         
		if (powerComboBoxReptLisAulOrganizacion.valid(dialogsReporteListadoAulas)) {
			//rlx.add('reg', powerComboBoxReptLisAulOrganizacion);
			//rlx.add('reg', powerComboBoxReptLisAulSubOrganizacion);
			//rlx.add('reg', powerComboBoxReptLisProCarrera);
			//rlx.add('reg', powerComboBoxReptLisProCarrera.setModeReturnGetText(2));
			//rlx.add('reg', powerComboBoxReptLisProCarrera.setModeReturnGetText(2));
			Tool.cnnSrv('MantObject', 'getProfesorCarrera', this.windowName + '.reporte()', rlx); 
	
	
	
	coreUpdate: function(methodName){
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");
		
		if (methodName == 'eliminar') {
			if (powerComboBoxReptLisAulOrganizacion.valid(dialogsReporteListadoAulas)) {
				rlx.add('reg', powerComboBoxReptLisAulOrganizacion);
				procesar = true;
			}
		}
		else {
			if (powerComboBoxReptLisAulOrganizacion.valid(dialogsReporteListadoAulas)) 
				if (powerComboBoxReptLisAulSubOrganizacion.valid(dialogsReporteListadoAulas)) 
					if (powerComboBoxReptLisAulPeriodo.valid(dialogsReporteListadoAulas)) 
						if (powerComboBoxReptLisAuTipAula.valid(dialogsReporteListadoAulas)) {
							rlx.add('reg', powerComboBoxReptLisAulSubOrganizacion);
							rlx.add('reg', powerComboBoxReptLisAulPeriodo);
							rlx.add('reg', powerComboBoxReptLisAuTipAula);
							rlx.add('reg', powerComboBoxReptLisAulOrganizacion);
							if (methodName == 'modificar') {
								rlx.add('reg', powerComboBoxMantUniHorCreOrganizacion);
							}
							procesar = true;
						}
		}
		if (procesar) {
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
			
	*	
	
		}
		
	}
	*/
};





