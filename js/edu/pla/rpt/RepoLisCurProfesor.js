var dialogsRepoLisCurProfesor = new Object();
var powerComboBoxRepoLisCurProNivAcademico = new Object();
var powerComboBoxRepoLisCurPeriodo = new Object();
var editsRepoLisCurCiProf = new Object();
var editsRepoLisCurNomProf = new Object();
var editsRepoLisCurApeProf = new Object();
var imgButtonsRepoLisCurProReporte = new Object();
var imgButtonsRepoLisCurProSalir = new Object();
var mw_RepoLisCurProfesor = new Object();//minWindow
var rl = new Object();

var RepoLisCurProfesor = {
    windowName: 'RepoLisCurProfesor',
    isCreate: false,
    
    show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsRepoLisCurProfesor.isByClean()) {
			powerComboBoxRepoLisCurProNivAcademico.setSelectedIndex(0); 		
			powerComboBoxRepoLisCurPeriodo.setSelectedIndex(0); 		
  			editsRepoLisCurCiProf.setValue(""); 
  			editsRepoLisCurNomProf.setValue(""); 
  			editsRepoLisCurApeProf.setValue(""); 
			Tool.getPowerComboData('MantObject', 'getMantNivAcademico', dialogsRepoLisCurProfesor , powerComboBoxRepoLisCurProNivAcademico, 0, 1);		
		}
		dialogsRepoLisCurProfesor.show();
	},
	
	hide : function(){
		dialogsRepoLisCurProfesor.hide();
	},
	
    createMWs: function(){
        mwRepoLisCurProfesor = desktop.addMinWindow('R.L.C.Profesor', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoLisCurProfesor.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

  dialogsRepoLisCurProfesor_Init : function(){
        dialogsRepoLisCurProfesor.setMinimizeXY(0,0);
        dialogsRepoLisCurProfesor.setCenterScreen();
        dialogsRepoLisCurProfesor.addSpace(0,0,20);
        dialogsRepoLisCurProfesor.addLn(1,1,1);
		dialogsRepoLisCurProfesor.setHeightCell(1,1,10);
		dialogsRepoLisCurProfesor.addObjToDialog(powerComboBoxRepoLisCurProNivAcademico,2,1,24);
        dialogsRepoLisCurProfesor.addObjToDialog(powerComboBoxRepoLisCurPeriodo,2,1,24);
        dialogsRepoLisCurProfesor.adjAllMarginObj(2,1,15);
        dialogsRepoLisCurProfesor.addObjToDialog(editsRepoLisCurCiProf,3,1,24);
        editsRepoLisCurCiProf.setSizeEdit(149);
        dialogsRepoLisCurProfesor.addObjToDialog(editsRepoLisCurNomProf,3,1,24);
		editsRepoLisCurNomProf.setSizeEdit(149);
		dialogsRepoLisCurProfesor.addObjToDialog(editsRepoLisCurApeProf,3,1,24);
		editsRepoLisCurApeProf.setSizeEdit(149);
		dialogsRepoLisCurProfesor.adjAllMarginObj(3,1,15);
        dialogsRepoLisCurProfesor.addLn(4,1,1);
		dialogsRepoLisCurProfesor.setHeightCell(4,1,11);
        dialogsRepoLisCurProfesor.addObjToDialog(imgButtonsRepoLisCurProReporte,5,1);
    	imgButtonsRepoLisCurProReporte.setDimension(90,22);
        dialogsRepoLisCurProfesor.addObjToDialog(imgButtonsRepoLisCurProSalir,5,1);
    	imgButtonsRepoLisCurProSalir.setDimension(90,22);
        dialogsRepoLisCurProfesor.adjAllMarginObj(5,1,30);
        dialogsRepoLisCurProfesor.leftMarginObj(5,1,0,255);
  },
 
  create : function(){
      dialogsRepoLisCurProfesor = dialogs.create('dialogsRepoLisCurProfesor',0,0,764,104,'LISTADO DE CURSOS POR PROFESOR');
	  dialogsRepoLisCurProfesor.setAdjY(100);
      powerComboBoxRepoLisCurProNivAcademico = powerComboBox.create('powerComboBoxRepoLisCurProNivAcademico','powerComboBoxRepoLisCurProNivAcademico','Nivel Académico:',1,103);
	  powerComboBoxRepoLisCurProNivAcademico.enableReadOnlyEditor();
      powerComboBoxRepoLisCurProNivAcademico.addEmptyOption();
      powerComboBoxRepoLisCurProNivAcademico.setValidEmpty();
	  powerComboBoxRepoLisCurPeriodo = powerComboBox.create('powerComboBoxRepoLisCurPeriodo','powerComboBoxRepoLisCurPeriodo','Periodo:',1,70);
	  powerComboBoxRepoLisCurPeriodo.enableReadOnlyEditor();
      powerComboBoxRepoLisCurPeriodo.addEmptyOption();
      powerComboBoxRepoLisCurPeriodo.setValidEmpty();
      editsRepoLisCurCiProf = edits.create('editsRepoLisCurCiProf','editsRepoLisCurCiProf','Ci. (*):',1,103);
      editsRepoLisCurCiProf.setValidInteger();
      editsRepoLisCurCiProf.setValidEmpty();
      editsRepoLisCurCiProf.setFieldFind(true);
      editsRepoLisCurNomProf = edits.create('editsRepoLisCurNomProf','editsRepoLisCurNomProf','Nombre (*):',1,70);
      editsRepoLisCurNomProf.setValidEmpty();
      editsRepoLisCurNomProf.setFieldFind(true);
      editsRepoLisCurApeProf = edits.create('editsRepoLisCurApeProf','editsRepoLisCurApeProf','Apellido (*):',1,72);
      editsRepoLisCurApeProf.setValidEmpty();
      editsRepoLisCurApeProf.setFieldFind(true);
      imgButtonsRepoLisCurProReporte = imgButtons.create('imgButtonsRepoLisCurProReporte','Reporte','print.png');
      imgButtonsRepoLisCurProSalir = imgButtons.create('imgButtonsRepoLisCurProSalir','Salir','salir.png');
  },

  init : function(){
    this.create();
    this.setEvents();
  	this.dialogsRepoLisCurProfesor_Init();
  	this.createMWs();
  },
  
 resetElements : function(element){
		if (powerComboBoxRepoLisCurProNivAcademico.getOption() != "") 
			Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoLisCurProfesor, powerComboBoxRepoLisCurPeriodo, 0, 1, powerComboBoxRepoLisCurProNivAcademico);
		else
			Tool.rstPwrCmb(powerComboBoxRepoLisCurPeriodo);
    },
	
  	limpiarFind : function(ix) {
  		editsRepoLisCurCiProf.hideId = -1;
  		
  		switch (ix) {
		case 1: 
			editsRepoLisCurNomProf.setValue("");
			editsRepoLisCurApeProf.setValue("");  		
			break;
		case 2: 
			editsRepoLisCurCiProf.setValue("");
			editsRepoLisCurApeProf.setValue("");  		
			break;
		default:
			editsRepoLisCurCiProf.setValue("");
		editsRepoLisCurNomProf.setValue("");
			break;
		} 
  	},

	buscar: function() {
		if (editsRepoLisCurCiProf.getValue() != '' || editsRepoLisCurNomProf.getValue() != '' || editsRepoLisCurApeProf.getValue() != '') {
        	ResuBusqueda.setObjectExtFnc(editsRepoLisCurCiProf, editsRepoLisCurNomProf, editsRepoLisCurApeProf);
			Tool.getGridData('MantObject', 'getMantPersProf', dialogsRepoLisCurProfesor, gridsResuBusqueda, 'ResuBusqueda', editsRepoLisCurCiProf, editsRepoLisCurCiProf, editsRepoLisCurNomProf, editsRepoLisCurNomProf, editsRepoLisCurApeProf, editsRepoLisCurApeProf);
		}
		else {
			Alert.show('Debe ingresar al menos: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
	},
  	
  	setEvents: function(){
  		editsRepoLisCurCiProf.onEnter(this.windowName + ".buscar()");
  		editsRepoLisCurCiProf.onChange(this.windowName + ".limpiarFind(1)");
  		editsRepoLisCurNomProf.onEnter(this.windowName + ".buscar()");
  		editsRepoLisCurNomProf.onChange(this.windowName + ".limpiarFind(2)");
  		editsRepoLisCurApeProf.onEnter(this.windowName + ".buscar()");
  		editsRepoLisCurApeProf.onChange(this.windowName + ".limpiarFind(3)");
		powerComboBoxRepoLisCurProNivAcademico.onChange(this.windowName + ".resetElements()");
		imgButtonsRepoLisCurProReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsRepoLisCurProSalir.onClick("dialogsRepoLisCurProfesor.close()");
    },
	
	reporte : function(){
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
        rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addHeadTitle('LISTADO DE CURSOS POR PROFESOR',true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),8,'courier','bold');
        rep.addBar(0,152,1128,202,rep.getRGBAObj(187,196,238,0.8),false);
        rep.addLine(0,146,1128,146,rep.getRGBAObj(210,210,210,1),1,false);
        rep.addLine(0,226,1128,226,rep.getRGBAObj(210,210,210,1),1,false); 
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','normal');
		rep.addText(20, 190,'C.I.: '+editsRepoLisCurCiProf.getText(),false);
		rep.addText(260, 190, 'NOMBRE: '+editsRepoLisCurNomProf.getText(),false);
		rep.addText(530, 190, 'APELLIDO: '+editsRepoLisCurApeProf.getText(),false);
		rep.addText(860, 190, 'PERIODO: '+powerComboBoxRepoLisCurPeriodo.getOption(),false); 
        //************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 11);
		rep.addTable('TablaRepoLisCurProefesor',['Código','Materia','Seccion','Horas/Creditos'],396,207);
        rep.setSizeColumnArray([80,420,150,150]);
        rep.setAlignData(['center','left','center','center']); 
        rep.addJsonData('TablaRepoLisCurProefesor','getRepoListCursoProf',[0,1,2,3]);		
        rep.setTotalRowTable(35);
		rep.setHeightRow(22);
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
	    ///////////////////////////////////////INSERCION DE IMAGEN DEL REPORTE/////////////////////////////////////////////////////////////////////////////
		rep.addImage(1060,153,1124,219,'images/pht/'+editsRepoLisCurCiProf.getValue()+'.jpg',true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	coreUpdate: function(methodName){
        var rlx = xmlStructs.createRecordList("rlx");
		if (powerComboBoxRepoLisCurProNivAcademico.valid(dialogsRepoLisCurProfesor))
			if (powerComboBoxRepoLisCurPeriodo.valid(dialogsRepoLisCurProfesor))
				if (editsRepoLisCurCiProf.valid(dialogsRepoLisCurProfesor))
					if (editsRepoLisCurNomProf.valid(dialogsRepoLisCurProfesor))
						if (editsRepoLisCurApeProf.valid(dialogsRepoLisCurProfesor)) {
							rlx.addInt('reg', editsRepoLisCurCiProf.hideId);
							rlx.add('reg', powerComboBoxRepoLisCurPeriodo);
							Tool.cnnSrv('ReportObject', 'getRepoListCursoProf', this.windowName + '.reporte()', rlx);
						}
    }
}	
	