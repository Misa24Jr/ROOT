var dialogsRpetLisPlanificacion = new Object();
var powerComboBoxReptLisPlanOrganizacion = new Object();
var powerComboBoxReptLisPlanSuborganizacion = new Object();
var powerComboBoxReptLisPlanCarrera = new Object();
var powerComboBoxReptLisPlanPeriodo = new Object();
var imgButtonsReptLisPlanProcesar = new Object();
var imgButtonsReptLisPlanSalir = new Object();
var mw_RpetLisPlanificacion = new Object();//minWindow
var rl = new Object();
 
var RpetLisPlanificacion = {
    windowName: 'RpetLisPlanificacion',
    isCreate: false,
    
    show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsRpetLisPlanificacion.isByClean())
			this.limpiar('lmp');			
		dialogsRpetLisPlanificacion.show();
	},
	
	hide : function(){
		dialogsRpetLisPlanificacion.hide();
	},
	
    createMWs: function(){
        mwRpetLisPlanificacion = desktop.addMinWindow('R.L.Planificación', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRpetLisPlanificacion.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

  dialogsRpetLisPlanificacion_Init : function(){
        dialogsRpetLisPlanificacion.setMinimizeXY(0,0);
        dialogsRpetLisPlanificacion.setCenterScreen();
        dialogsRpetLisPlanificacion.addSpace(0,0,20);
        dialogsRpetLisPlanificacion.addLn(1,1,1);
		dialogsRpetLisPlanificacion.setHeightCell(1,1,10);
        dialogsRpetLisPlanificacion.addObjToDialog(powerComboBoxReptLisPlanOrganizacion,2,1,24);
        dialogsRpetLisPlanificacion.addObjToDialog(powerComboBoxReptLisPlanSuborganizacion,2,1,24);
        dialogsRpetLisPlanificacion.addObjToDialog(powerComboBoxReptLisPlanCarrera,2,1,24);
        dialogsRpetLisPlanificacion.adjAllMarginObj(2,1,15);
        dialogsRpetLisPlanificacion.addObjToDialog(powerComboBoxReptLisPlanPeriodo,3,1,24);
        powerComboBoxReptLisPlanPeriodo.setWidthCombo(416);
		dialogsRpetLisPlanificacion.adjAllMarginObj(3,1,10);
        dialogsRpetLisPlanificacion.addLn(4,1,1);
		dialogsRpetLisPlanificacion.setHeightCell(4,1,8);
        dialogsRpetLisPlanificacion.addObjToDialog(imgButtonsReptLisPlanProcesar,5,1);
    	imgButtonsReptLisPlanProcesar.setDimension(90,22);
        dialogsRpetLisPlanificacion.addObjToDialog(imgButtonsReptLisPlanSalir,5,1);
    	imgButtonsReptLisPlanSalir.setDimension(90,22);
        dialogsRpetLisPlanificacion.adjAllMarginObj(5,1,30);
        dialogsRpetLisPlanificacion.leftMarginObj(5,1,0,278);
  },
 
  create : function(){
      dialogsRpetLisPlanificacion = dialogs.create('dialogsRpetLisPlanificacion',0,0,814,100,'LISTADO DE PLANIFICACION');
	  dialogsRpetLisPlanificacion.setAdjY(60);
      powerComboBoxReptLisPlanOrganizacion = powerComboBox.create('powerComboBoxReptLisPlanOrganizacion','powerComboBoxReptLisPlanOrganizacion','Organización (+):',1,102);
	  powerComboBoxReptLisPlanOrganizacion.enableReadOnlyEditor();
      powerComboBoxReptLisPlanOrganizacion.addEmptyOption();
      powerComboBoxReptLisPlanOrganizacion.setValidEmpty();
	  powerComboBoxReptLisPlanSuborganizacion = powerComboBox.create('powerComboBoxReptLisPlanSuborganizacion','powerComboBoxReptLisPlanSuborganizacion','Suborganización (^):',1,123);
	  powerComboBoxReptLisPlanSuborganizacion.enableReadOnlyEditor();
      powerComboBoxReptLisPlanSuborganizacion.addEmptyOption();
      powerComboBoxReptLisPlanSuborganizacion.setValidEmpty();
	  powerComboBoxReptLisPlanCarrera = powerComboBox.create('powerComboBoxReptLisPlanCarrera','powerComboBoxReptLisPlanCarrera','Carrera (^):',1,72);
	  powerComboBoxReptLisPlanCarrera.enableReadOnlyEditor();
      powerComboBoxReptLisPlanCarrera.addEmptyOption();
      powerComboBoxReptLisPlanCarrera.setValidEmpty();
	  powerComboBoxReptLisPlanPeriodo = powerComboBox.create('powerComboBoxReptLisPlanPeriodo','powerComboBoxReptLisPlanPeriodo','Periodo (^):',1,102);
	  powerComboBoxReptLisPlanPeriodo.enableReadOnlyEditor();
      powerComboBoxReptLisPlanPeriodo.addEmptyOption();
      powerComboBoxReptLisPlanPeriodo.setValidEmpty();
      imgButtonsReptLisPlanProcesar = imgButtons.create('imgButtonsReptLisPlanProcesar','Reporte','print.png');
      imgButtonsReptLisPlanSalir = imgButtons.create('imgButtonsReptLisPlanSalir','Salir','salir.png');
  },

  init : function(){
    this.create();
    this.setEvents();
  	this.dialogsRpetLisPlanificacion_Init();
  	this.createMWs();
  },
  
 limpiar : function(tipo) {
  		powerComboBoxReptLisPlanOrganizacion.setSelectedIndex(0);
  		Tool.rstPwrCmb(powerComboBoxReptLisPlanSuborganizacion);
  		Tool.rstPwrCmb(powerComboBoxReptLisPlanCarrera);
  		Tool.rstPwrCmb(powerComboBoxReptLisPlanPeriodo);
  		dialogsRpetLisPlanificacion.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},


	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRpetLisPlanificacion, powerComboBoxReptLisPlanOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsRpetLisPlanificacion, powerComboBoxReptLisPlanOrganizacion, powerComboBoxReptLisPlanSuborganizacion, powerComboBoxReptLisPlanCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function(){
    	imgButtonsReptLisPlanProcesar.onClick(this.windowName + ".coreUpdate()");
        imgButtonsReptLisPlanSalir.onClick('dialogsRpetLisPlanificacion.close()');
		powerComboBoxReptLisPlanOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxReptLisPlanSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		powerComboBoxReptLisPlanCarrera.onChange(this.windowName + ".resetElements('carr')");
    },
    
    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxReptLisPlanSuborganizacion);
	  		Tool.rstPwrCmb(powerComboBoxReptLisPlanCarrera);
	  		Tool.rstPwrCmb(powerComboBoxReptLisPlanPeriodo);
	    	if (powerComboBoxReptLisPlanOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRpetLisPlanificacion, powerComboBoxReptLisPlanSuborganizacion, 1, 2, powerComboBoxReptLisPlanOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(powerComboBoxReptLisPlanCarrera);
	  		Tool.rstPwrCmb(powerComboBoxReptLisPlanPeriodo);
	    	if (powerComboBoxReptLisPlanSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRpetLisPlanificacion, powerComboBoxReptLisPlanCarrera, -1, 3, powerComboBoxReptLisPlanSuborganizacion);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(powerComboBoxReptLisPlanPeriodo);
	    	if (powerComboBoxReptLisPlanCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRpetLisPlanificacion, powerComboBoxReptLisPlanPeriodo, 0, 1, powerComboBoxReptLisPlanCarrera.setModeReturnGetText(5));
		}
	},
	
	reporte : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
        rep.setPositionIcon(1090,6);   
        //rep.setNoRepeatHead();
        //rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,0,1128,36,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addText(425, 23, 'LISTADO DE PLANIFICACION',false);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','normal');
        rep.addBar(0,42,1128,88,rep.getRGBAObj(187,196,238,0.5),false);
        rep.addLine(0,40,1128,40,rep.getRGBAObj(210,210,210,1),1,false);
        rep.addLine(0,90,1128,90,rep.getRGBAObj(210,210,210,1),1,false); 
		rep.addText(20, 60,'ORGANIZACION:  '+powerComboBoxReptLisPlanOrganizacion.getOption(),false);
		rep.addText(20, 81, 'SUBORGANIZACION:  '+powerComboBoxReptLisPlanSuborganizacion.getOption(),false);
		rep.addText(550, 60, 'ESCUELA:  '+powerComboBoxReptLisPlanCarrera.getOption(),false);
		rep.addText(550, 81, 'PERIODO:  '+powerComboBoxReptLisPlanPeriodo.getOption(),false);
		//************************ TABLE ENCABEZADO******************************************************************************************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);		
		rep.addTable('TablaRepoLisPlanificacion',['Código','Estado','Materia','Pos','Cupo','Hc','Sección','C.i.','Nombre','Apellido','Día','H-Inicio','H-Fin'],560,94);
        rep.setTotalRowTable(35);
		rep.setHeightRow(18);
        rep.setSizeColumnArray([80,80,210,50,60,40,80,80,135,135,50,70,70]);
        rep.setAlignData(['center','left','left','center','center','center','center','center','left','left','center','center','center']); 
        rep.addJsonData('TablaRepoLisPlanificacion','getRepoListPlanificacion',[0,12,1,2,3,4,5,6,7,8,9,10,11]);  		
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	coreUpdate: function()
	{
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        if (powerComboBoxReptLisPlanOrganizacion.valid(dialogsRpetLisPlanificacion))
           if (powerComboBoxReptLisPlanSuborganizacion.valid(dialogsRpetLisPlanificacion))
           	  if (powerComboBoxReptLisPlanCarrera.valid(dialogsRpetLisPlanificacion))
           	      if (powerComboBoxReptLisPlanPeriodo.valid(dialogsRpetLisPlanificacion))
           	      {
		           	rlx.add('reg', powerComboBoxReptLisPlanPeriodo);
	                rlx.add('reg', powerComboBoxReptLisPlanCarrera.setModeReturnGetText(2));
					Tool.cnnSrv('ReportObject', 'getRepoListPlanificacion', this.windowName + '.reporte()', rlx);
        		 }
    }	
}







