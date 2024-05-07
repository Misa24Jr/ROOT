var dialogsRepoLisProBloque = new Object();
var powerComboBoxReptLisProBloNivAcademico = new Object();
var powerComboBoxReptLisProBloEstPeriodo = new Object();
var powerComboBoxReptLisProBloBloque = new Object();
var calendarsReptLisProBloDiario = new Object();
var imgButtonsReptLisProBloProcesar = new Object();
var imgButtonsReptLisProBloSalir = new Object();
var mw_RepoLisProBloque = new Object();//minWindow

var RepoLisProBloque = {
    windowName: 'RepoLisProBloque',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoLisProBloque.isByClean()) {
        	calendarsReptLisProBloDiario.clear();
            Tool.cnnSrv('MantObject', 'getAsistenciaProfBloqueInit', this.windowName + '.loadInit()');
		}
        dialogsRepoLisProBloque.show();
    },
	
	loadInit: function(){
		Tool.loadPowerComboData(dialogsRepoLisProBloque, powerComboBoxReptLisProBloNivAcademico, 0, 1, json('getMantNivAcademico'));
		Tool.loadPowerComboData(dialogsRepoLisProBloque, powerComboBoxReptLisProBloEstPeriodo, 0, 1, json('getMantEstPeriodo'));
		Tool.loadPowerComboData(dialogsRepoLisProBloque, powerComboBoxReptLisProBloBloque, 0, 1, json('getMantBloque'));
		powerComboBoxReptLisProBloNivAcademico.setSelectedIndex(1);
    },
    
    
    hide: function(){
        dialogsRepoLisProBloque.hide();
    },
    
    createMWs: function(){
        mwRepoLisProBloque = desktop.addMinWindow('L.A.P.Bloque', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoLisProBloque.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
	
    dialogsRepoLisProBloque_Init : function(){
        dialogsRepoLisProBloque.setMinimizeXY(0,0);
        dialogsRepoLisProBloque.setCenterScreen();
        dialogsRepoLisProBloque.addSpace(0,0,20);
        dialogsRepoLisProBloque.addLn(1,1,1);
		dialogsRepoLisProBloque.setHeightCell(1,1,10);
        dialogsRepoLisProBloque.addObjToDialog(powerComboBoxReptLisProBloNivAcademico,2,1,24);
        dialogsRepoLisProBloque.addObjToDialog(powerComboBoxReptLisProBloEstPeriodo,2,1,24);
        dialogsRepoLisProBloque.adjAllMarginObj(2,1,20);
        dialogsRepoLisProBloque.addObjToDialog(powerComboBoxReptLisProBloBloque,3,1,24);
        dialogsRepoLisProBloque.addObjToDialog(calendarsReptLisProBloDiario.getEditCalendar(),3,1,24);
		calendarsReptLisProBloDiario.setWidthEditCalendar(127);
		calendarsReptLisProBloDiario.setCaption('Diario:', 1,101);
        calendarsReptLisProBloDiario.sendToFrom(100);
        dialogsRepoLisProBloque.adjAllMarginObj(3,1,20);
        dialogsRepoLisProBloque.addLn(4,1,1);
		dialogsRepoLisProBloque.setHeightCell(4,1,10);
        dialogsRepoLisProBloque.addObjToDialog(imgButtonsReptLisProBloProcesar,5,1);
    	imgButtonsReptLisProBloProcesar.setDimension(90,22);
        dialogsRepoLisProBloque.addObjToDialog(imgButtonsReptLisProBloSalir,5,1);
    	imgButtonsReptLisProBloSalir.setDimension(90,22);
        dialogsRepoLisProBloque.adjAllMarginObj(5,1,30);
        dialogsRepoLisProBloque.leftMarginObj(5,1,0,159);
	},
 
	create : function(){
		dialogsRepoLisProBloque = dialogs.create('dialogsRepoLisProBloque',0,0,570,104,'LISTADO ASISTENCIA DE PROFESORES POR BLOQUE');
		dialogsRepoLisProBloque.setAdjY(90);
		powerComboBoxReptLisProBloNivAcademico = powerComboBox.create('powerComboBoxReptLisProBloNivAcademico','powerComboBoxReptLisProBloNivAcademico','Nivel Académico:',1,107);
		powerComboBoxReptLisProBloNivAcademico.enableReadOnlyEditor();
		powerComboBoxReptLisProBloNivAcademico.addEmptyOption();
		powerComboBoxReptLisProBloNivAcademico.setValidEmpty();
		powerComboBoxReptLisProBloBloque = powerComboBox.create('powerComboBoxReptLisProBloBloque','powerComboBoxReptLisProBloBloque','Bloque:',1,107);
		powerComboBoxReptLisProBloBloque.enableReadOnlyEditor();
		powerComboBoxReptLisProBloBloque.addEmptyOption();
		powerComboBoxReptLisProBloBloque.setValidEmpty();
		powerComboBoxReptLisProBloBloque.setDataType('string');
		powerComboBoxReptLisProBloEstPeriodo = powerComboBox.create('powerComboBoxReptLisProBloEstPeriodo','powerComboBoxReptLisProBloEstPeriodo','Estado Periodo:',1,101);
		powerComboBoxReptLisProBloEstPeriodo.enableReadOnlyEditor();
		powerComboBoxReptLisProBloEstPeriodo.addEmptyOption();
		powerComboBoxReptLisProBloEstPeriodo.setValidEmpty();
		calendarsReptLisProBloDiario = calendars.create('calendarsReptLisProBloDiario');
        calendarsReptLisProBloDiario.setValidEmpty();
		imgButtonsReptLisProBloProcesar = imgButtons.create('imgButtonsReptLisProBloProcesar','Reporte','print.png');
		imgButtonsReptLisProBloSalir = imgButtons.create('imgButtonsReptLisProBloSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
  		this.dialogsRepoLisProBloque_Init();
  		this.createMWs();
	},

    setEvents: function(){
        imgButtonsReptLisProBloProcesar.onClick(this.windowName + ".coreUpdate()");
        imgButtonsReptLisProBloSalir.onClick("dialogsRepoLisProBloque.close()");
    },
	
	reporte : function(){
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
        rep.setPositionIcon(1090,0);   
        //rep.setNoRepeatHead();
        //rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,0,1128,36,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addText(325, 23, 'LISTADO DE ASISTENCIA DE PROFESORES POR BLOQUE',false);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','normal');
        rep.addBar(0,42,1128,88,rep.getRGBAObj(187,196,238,0.5),false);
        rep.addLine(0,40,1128,40,rep.getRGBAObj(210,210,210,1),1,false);
        rep.addLine(0,90,1128,90,rep.getRGBAObj(210,210,210,1),1,false); 
		rep.addText(20, 72,'NIVEL ACADÉMICO:  '+powerComboBoxReptLisProBloNivAcademico.getValue(),false);
		rep.addText(315, 72, 'PERIODO:  '+powerComboBoxReptLisProBloEstPeriodo.getValue(),false);
		rep.addText(550, 72, 'BLOQUE:  '+powerComboBoxReptLisProBloBloque.getValue(),false);
		rep.addText(760, 72, 'DIA:  '+calendarsReptLisProBloDiario.getWeekDay(),false);
        rep.addText(890, 72, 'FECHA:  '+calendarsReptLisProBloDiario.getValue(),false);
		//////////////////////////////////////////TABLA DE DATOS///////////////////////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
        rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 7);		
        rep.addTable('tablaProBloque',['C.i.','Profesor','Inicio','Fin','Materia','Sección','Aula','Suborganización','Firma'],575,99);
        rep.setTotalRowTable(35);
		rep.setHeightRow(18);
        rep.setSizeColumnArray([80,225,65,65,280,70,70,150,150]);
        rep.addJsonData('tablaProBloque','getAsistenciaProfBloque');		
        rep.setAlignData(['center','left','center','center','left','center','center','left','left']);
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
		if (powerComboBoxReptLisProBloNivAcademico.valid(dialogsRepoLisProBloque)) 
			if (powerComboBoxReptLisProBloEstPeriodo.valid(dialogsRepoLisProBloque)) 
				if (powerComboBoxReptLisProBloBloque.valid(dialogsRepoLisProBloque)) 
					if (calendarsReptLisProBloDiario.valid(dialogsRepoLisProBloque)) {
						rlx.add('reg', powerComboBoxReptLisProBloEstPeriodo);
						rlx.add('reg', powerComboBoxReptLisProBloNivAcademico);
						rlx.add('reg', powerComboBoxReptLisProBloBloque);
						rlx.addStr('reg', calendarsReptLisProBloDiario.getWeekDay());
						Tool.cnnSrv('MantObject', 'getAsistenciaProfBloque', this.windowName + '.reporte()', rlx);
					}
    }
};