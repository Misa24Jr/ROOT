var dialogsRepoPlanInscripcion = new Object();
var powerComboBoxRepoPlaInsNivAcademico = new Object();
var powerComboBoxRepoPlaInsPeriodo = new Object();
var imgButtonsRepoPlaInsReporte = new Object();
var imgButtonsRepoPlaInsSalir = new Object();
var mwRepoPlanInscripcion = new Object();// minWindow

var RepoPlanInscripcion = {
    windowName: 'RepoPlanInscripcion',
    isCreate: false,
	
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
		if (dialogsRepoPlanInscripcion.isByClean()) {
			powerComboBoxRepoPlaInsNivAcademico.setSelectedIndex(0); 		
			powerComboBoxRepoPlaInsPeriodo.setSelectedIndex(0); 		
			Tool.getPowerComboData('MantObject', 'getMantNivAcademico', dialogsRepoPlanInscripcion , powerComboBoxRepoPlaInsNivAcademico, 0, 1);		
		}
		dialogsRepoPlanInscripcion.show();
	},
    
    hide: function(){
        dialogsRepoPlanInscripcion.hide();
    },
    
    createMWs: function(){
        mwRepoPlanInscripcion = desktop.addMinWindow('R.P.Inscripción', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoPlanInscripcion.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsRepoPlanInscripcion_Init: function(){
        dialogsRepoPlanInscripcion.setMinimizeXY(0, 0);
        dialogsRepoPlanInscripcion.setCenterScreen();    
        dialogsRepoPlanInscripcion.addSpace(1, 0, 20);
        dialogsRepoPlanInscripcion.addLn(1, 1, 1);
		dialogsRepoPlanInscripcion.setHeightCell(1,1,10);
		dialogsRepoPlanInscripcion.addObjToDialog(powerComboBoxRepoPlaInsNivAcademico,2, 1,24);  
        dialogsRepoPlanInscripcion.addObjToDialog(powerComboBoxRepoPlaInsPeriodo, 3, 1,24);
        powerComboBoxRepoPlaInsPeriodo.setWidthCombo(370);
        dialogsRepoPlanInscripcion.addLn(4, 1, 1);
		dialogsRepoPlanInscripcion.setHeightCell(4,1,10);  
        dialogsRepoPlanInscripcion.addObjToDialog(imgButtonsRepoPlaInsReporte, 5, 1);
        dialogsRepoPlanInscripcion.addObjToDialog(imgButtonsRepoPlaInsSalir, 5, 1);
        imgButtonsRepoPlaInsReporte.setDimension(90, 22);
        imgButtonsRepoPlaInsSalir.setDimension(90, 22);
        dialogsRepoPlanInscripcion.adjAllMarginObj(5, 1, 20);
        dialogsRepoPlanInscripcion.leftMarginObj(5, 1, 0, 150);
    },
	
    create: function(){
        dialogsRepoPlanInscripcion = dialogs.create('dialogsRepoPlanInscripcion', 0, 0, 550, 102, 'REPORTE PLANIFICACIÓN DE LA INSCRIPCIÓN');
        dialogsRepoPlanInscripcion.setAdjY(60);
        powerComboBoxRepoPlaInsNivAcademico = powerComboBox.create('powerComboBoxRepoPlaInsNivAcademico', 'powerComboBoxRepoPlaInsNivAcademico', 'Nivel Académico (+):', 1,122);
        powerComboBoxRepoPlaInsNivAcademico.enableReadOnlyEditor();
        powerComboBoxRepoPlaInsNivAcademico.addEmptyOption();
        powerComboBoxRepoPlaInsNivAcademico.setValidEmpty();
        powerComboBoxRepoPlaInsPeriodo = powerComboBox.create('powerComboBoxRepoPlaInsPeriodo', 'powerComboBoxRepoPlaInsPeriodo', 'Periodo (^):', 1,122);
        powerComboBoxRepoPlaInsPeriodo.enableReadOnlyEditor();
        powerComboBoxRepoPlaInsPeriodo.addEmptyOption();
        powerComboBoxRepoPlaInsPeriodo.setValidEmpty();
        imgButtonsRepoPlaInsReporte = imgButtons.create('imgButtonsRepoPlaInsReporte', 'Reporte', 'print.png');
        imgButtonsRepoPlaInsSalir = imgButtons.create('imgButtonsRepoPlaInsSalir', 'Salir', 'salir.png');
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsRepoPlanInscripcion_Init();
        this.createMWs();
    },
    
    resetElements : function(element){
		if (powerComboBoxRepoPlaInsNivAcademico.getOption() != "") 
			Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoPlanInscripcion, powerComboBoxRepoPlaInsPeriodo, 0, 1, powerComboBoxRepoPlaInsNivAcademico);
		else
			Tool.rstPwrCmb(powerComboBoxRepoPlaInsPeriodo);
    },
    
    setEvents: function(){
        imgButtonsRepoPlaInsReporte.onClick(this.windowName + ".coreUpdate('reporte')");
        imgButtonsRepoPlaInsSalir.onClick("dialogsRepoPlanInscripcion.close();");
		powerComboBoxRepoPlaInsNivAcademico.onChange(this.windowName + ".resetElements()");
    },
	
	reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
        rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'helvetica','normal');
		rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addHeadTitle('PLANIFICACIÓN DE LA INSCRIPCIÓN',true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),10,'helvetica','normal');
        rep.addBar(0,152,1128,220,rep.getRGBAObj(187,196,238,0.8),false);
        rep.addLine(0,146,1128,146,rep.getRGBAObj(210,210,210,1),1,false);
        rep.addLine(0,226,1128,226,rep.getRGBAObj(210,210,210,1),1,false); 
		rep.addText(20, 190, 'PERIODO:  '+powerComboBoxRepoPlaInsPeriodo.getOption(),false);
		//////////////////////////////////////////TABLA DE DATOS///////////////////////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
        
        rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),6,'helvetica','normal');
		rep.addTable('tablaRepoPlanInscripcion',['Proceso','Organización','Suborganización','Carrera','Fecha Inicio','Fecha Fin'],400,235);
		rep.setTotalRowTable(34);
		rep.setHeightRow(22);
		rep.setSizeColumnArray([100,120,180,180,110,110]);
		rep.setAlignData(['left','left','left','left','center','center']);
		rep.addJsonData('tablaRepoPlanInscripcion','getPlanInscripcion',[0,1,2,3,4,5]); 
        //////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'helvetica','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	    
    coreUpdate: function(methodName) {
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (powerComboBoxRepoPlaInsNivAcademico.valid(dialogsRepoPlanInscripcion))
			if (powerComboBoxRepoPlaInsPeriodo.valid(dialogsRepoPlanInscripcion)){ 
            rlx.add('reg', powerComboBoxRepoPlaInsPeriodo);
			Tool.cnnSrv('ReportObject', 'getPlanInscripcion', this.windowName + '.reporte()', rlx); 
		}
    }
};

