var dialogsRpetLisProCarrera = new Object();
var powerComboBoxReptLisProOrganizacion = new Object();
var powerComboBoxReptLisProSuborganizacion = new Object();
var powerComboBoxReptLisProCarrera = new Object();
var imgButtonsReptLisProCarProcesar = new Object();
var imgButtonsReptLisProCarSalir = new Object();
var mw_RpetLisProCarrera = new Object();//minWindow

var RpetLisProCarrera = {
    windowName: 'RpetLisProCarrera',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRpetLisProCarrera.isByClean()) 
            Tool.cnnSrv('MantObject', 'getMantOrganizacion', this.windowName + '.loadDataInit()');
        	dialogsRpetLisProCarrera.show();
    },
    
	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRpetLisProCarrera, powerComboBoxReptLisProOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsRpetLisProCarrera, powerComboBoxReptLisProOrganizacion, powerComboBoxReptLisProSuborganizacion, powerComboBoxReptLisProCarrera);
    },

    hide: function(){
        dialogsRpetLisProCarrera.hide();
    },
    
    createMWs: function(){
        mwRpetLisProCarrera = desktop.addMinWindow('L.Prof.Carrera', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRpetLisProCarrera.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRpetLisProCarrera_Init : function(){
        dialogsRpetLisProCarrera.setMinimizeXY(0,0);
        dialogsRpetLisProCarrera.setCenterScreen();
        dialogsRpetLisProCarrera.addSpace(0,0,20);
        dialogsRpetLisProCarrera.addLn(1,1,1);
		dialogsRpetLisProCarrera.setHeightCell(1,1,10);
        dialogsRpetLisProCarrera.addObjToDialog(powerComboBoxReptLisProOrganizacion,2,1,24);
        dialogsRpetLisProCarrera.addObjToDialog(powerComboBoxReptLisProSuborganizacion,2,1,24);
        dialogsRpetLisProCarrera.addObjToDialog(powerComboBoxReptLisProCarrera,2,1,24);
        dialogsRpetLisProCarrera.adjAllMarginObj(2,1,20);
        dialogsRpetLisProCarrera.addObjToDialog(powerComboBoxReptLisProCarrera,3,1,24);
        dialogsRpetLisProCarrera.adjAllMarginObj(3,1,20);
        dialogsRpetLisProCarrera.addLn(4,1,1);
		dialogsRpetLisProCarrera.setHeightCell(4,1,10);
        dialogsRpetLisProCarrera.addObjToDialog(imgButtonsReptLisProCarProcesar,5,1);
    	imgButtonsReptLisProCarProcesar.setDimension(90,22);
        dialogsRpetLisProCarrera.addObjToDialog(imgButtonsReptLisProCarSalir,5,1);
    	imgButtonsReptLisProCarSalir.setDimension(90,22);
        dialogsRpetLisProCarrera.adjAllMarginObj(5,1,30);
        dialogsRpetLisProCarrera.leftMarginObj(5,1,0,165);
	},
 
	create : function(){
		dialogsRpetLisProCarrera = dialogs.create('dialogsRpetLisProCarrera',0,0,590,104,'REPORTE DE PROFESOR POR CARRERA');
		dialogsRpetLisProCarrera.setAdjY(100);
		powerComboBoxReptLisProOrganizacion = powerComboBox.create('powerComboBoxReptLisProOrganizacion','powerComboBoxReptLisProOrganizacion','Organización (+):',1,105);
		powerComboBoxReptLisProOrganizacion.enableReadOnlyEditor();
		powerComboBoxReptLisProOrganizacion.addEmptyOption();
		powerComboBoxReptLisProOrganizacion.setValidEmpty();
		powerComboBoxReptLisProOrganizacion.enableOnChangeToEmptyOption();
		powerComboBoxReptLisProSuborganizacion = powerComboBox.create('powerComboBoxReptLisProSuborganizacion','powerComboBoxReptLisProSuborganizacion','Suborganización (^):',1,126);
		powerComboBoxReptLisProSuborganizacion.enableReadOnlyEditor();
		powerComboBoxReptLisProSuborganizacion.addEmptyOption();
		powerComboBoxReptLisProSuborganizacion.setValidEmpty();
		powerComboBoxReptLisProSuborganizacion.setFieldFind(true);
		powerComboBoxReptLisProSuborganizacion.enableOnChangeToEmptyOption();
		powerComboBoxReptLisProCarrera = powerComboBox.create('powerComboBoxReptLisProCarrera','powerComboBoxReptLisProCarrera','Carrera (^):',1,105);
		powerComboBoxReptLisProCarrera.enableReadOnlyEditor();
		powerComboBoxReptLisProCarrera.addEmptyOption();
		powerComboBoxReptLisProCarrera.setValidEmpty();
		powerComboBoxReptLisProCarrera.setFieldFind(true);
		imgButtonsReptLisProCarProcesar = imgButtons.create('imgButtonsReptLisProCarProcesar','Reporte','print.png');
		imgButtonsReptLisProCarSalir = imgButtons.create('imgButtonsReptLisProCarSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
  		this.dialogsRpetLisProCarrera_Init();
  		this.createMWs();
	},

    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxReptLisProSuborganizacion);
			Tool.rstPwrCmb(powerComboBoxReptLisProCarrera);
			if (powerComboBoxReptLisProOrganizacion.getOption() != "")
				Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRpetLisProCarrera, powerComboBoxReptLisProSuborganizacion, 1, 2, powerComboBoxReptLisProOrganizacion);
		}
		else if (element == 'suborg') {
			Tool.rstPwrCmb(powerComboBoxReptLisProCarrera);
			if (powerComboBoxReptLisProSuborganizacion.getOption() != "")
				Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRpetLisProCarrera, powerComboBoxReptLisProCarrera, -1, 3, powerComboBoxReptLisProSuborganizacion);		
		}
    },
    
    setEvents: function(){
        imgButtonsReptLisProCarProcesar.onClick(this.windowName + ".coreUpdate()");
        imgButtonsReptLisProCarSalir.onClick("dialogsRpetLisProCarrera.close()");
		powerComboBoxReptLisProOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxReptLisProSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
    },
	
	reporte : function(){
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,0);
        //rep.setNoRepeatHead();
        //rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1128,38,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),13,'helvetica','');
		rep.addText(230, 25, 'LISTADO DE PROFESOR POR CARRERA',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','');
        //rep.addBar(0,0,1128,78,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 60, 'ORGANIZACION:         '+powerComboBoxReptLisProOrganizacion.getOption(),false);
		rep.addText(20, 80, 'SUBORGANIZACION: '+powerComboBoxReptLisProSuborganizacion.getOption(),false);
		rep.addText(20, 100, 'CARRERA:                   '+powerComboBoxReptLisProCarrera.getOption(),false);
		//////////////////////////////////////////TABLA DE DATOS///////////////////////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
        rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 9);		
        rep.addTable('tablaProfCarrera',['C.i.','Nombre','Apellido'],397,114);
        rep.setTotalRowTable(35);
		rep.setHeightRow(24);
        rep.setSizeColumnArray([120,341,341]);
        rep.setAlignData(['center','left','left']);
        rep.addJsonData('tablaProfCarrera','getProfesorCarrera',[0,1,2]);		
        //////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
    	
	},
	
	coreUpdate: function(methodName){
        var rlx = xmlStructs.createRecordList("rlx");
		if (powerComboBoxReptLisProOrganizacion.valid(dialogsRpetLisProCarrera)) {
			rlx.add('reg', powerComboBoxReptLisProOrganizacion);
			rlx.add('reg', powerComboBoxReptLisProSuborganizacion);
			rlx.add('reg', powerComboBoxReptLisProSuborganizacion);
			rlx.add('reg', powerComboBoxReptLisProCarrera.setModeReturnGetText(2));
			rlx.add('reg', powerComboBoxReptLisProCarrera.setModeReturnGetText(2));
			Tool.cnnSrv('MantObject', 'getProfesorCarrera', this.windowName + '.reporte()', rlx);
		}
    }
    
};