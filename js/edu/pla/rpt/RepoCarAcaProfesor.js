var dialogsRepoCarAcaProfesor = new Object();
var powerComboBoxRepoCarAcaNvlAcad = new Object();
var powerComboBoxRepoCarAcaPeriodo = new Object();
var editsRepoCarAcaProCedula = new Object();
var editsRepoCarAcaProNombre = new Object();
var editsRepoCarAcaProApellido = new Object();
var imgButtonsRepoCarAcaReporte = new Object();
var imgButtonsRepoCarAcaSalir = new Object();
var mw_RepoCarAcaProfesor = new Object();// minWindow

var RepoCarAcaProfesor = {
    windowName : 'RepoCarAcaProfesor',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoCarAcaProfesor.isByClean()) {
        	powerComboBoxRepoCarAcaNvlAcad.setSelectedIndex(0); 		
			powerComboBoxRepoCarAcaPeriodo.setSelectedIndex(0); 		
  			editsRepoCarAcaProCedula.setValue(""); 
  			editsRepoCarAcaProNombre.setValue(""); 
  			editsRepoCarAcaProApellido.setValue(""); 
			Tool.getPowerComboData('MantObject', 'getMantNivAcademico', dialogsRepoCarAcaProfesor , powerComboBoxRepoCarAcaNvlAcad, 0, 1);		
		    }
        dialogsRepoCarAcaProfesor.show();
    },
	
    hide: function(){
        dialogsRepoCarAcaProfesor.hide();
    },
    
    createMWs: function(){
        mwRepoCarAcaProfesor = desktop.addMinWindow('R.C.A.Profesor', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoCarAcaProfesor.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsRepoCarAcaProfesor_Init : function(){
        dialogsRepoCarAcaProfesor.setMinimizeXY(0,0);
        dialogsRepoCarAcaProfesor.setCenterScreen();
        dialogsRepoCarAcaProfesor.addSpace(0,0,20);
        dialogsRepoCarAcaProfesor.addLn(1,1,1);
		dialogsRepoCarAcaProfesor.setHeightCell(1,1,13);
		dialogsRepoCarAcaProfesor.addObjToDialog(powerComboBoxRepoCarAcaNvlAcad,2,1,24);
		dialogsRepoCarAcaProfesor.addObjToDialog(powerComboBoxRepoCarAcaPeriodo,2,1,24);
		powerComboBoxRepoCarAcaPeriodo.setWidthCombo(364);
		dialogsRepoCarAcaProfesor.adjAllMarginObj(2,1,15);
		dialogsRepoCarAcaProfesor.addObjToDialog(editsRepoCarAcaProCedula,3,1,24);
		editsRepoCarAcaProCedula.setSizeEdit(149);
		dialogsRepoCarAcaProfesor.addObjToDialog(editsRepoCarAcaProNombre,3,1,24);
		editsRepoCarAcaProNombre.setSizeEdit(149);
		dialogsRepoCarAcaProfesor.addObjToDialog(editsRepoCarAcaProApellido,3,1,24);
		editsRepoCarAcaProApellido.setSizeEdit(149);
		dialogsRepoCarAcaProfesor.adjAllMarginObj(3,1,15);
        dialogsRepoCarAcaProfesor.addLn(5,1,1);
		dialogsRepoCarAcaProfesor.setHeightCell(5,1,10);
		dialogsRepoCarAcaProfesor.addObjToDialog(imgButtonsRepoCarAcaReporte,6,1);
    	imgButtonsRepoCarAcaReporte.setDimension(90,22);
        dialogsRepoCarAcaProfesor.addObjToDialog(imgButtonsRepoCarAcaSalir,6,1);
    	imgButtonsRepoCarAcaSalir.setDimension(90,22);
        dialogsRepoCarAcaProfesor.adjAllMarginObj(6,1,30);
        dialogsRepoCarAcaProfesor.leftMarginObj(6,1,0,258); 
    },
  
    create : function(){
    	dialogsRepoCarAcaProfesor = dialogs.create('dialogsRepoCarAcaProfesor',0,0,766,106,'REPORTE CARGA ACADÉMICA DE UN PROFESOR');
    	dialogsRepoCarAcaProfesor.setAdjY(80);
    	powerComboBoxRepoCarAcaNvlAcad = powerComboBox.create('powerComboBoxRepoCarAcaNvlAcad','powerComboBoxRepoCarAcaNvlAcad','Nivel Academico:',1,105);
    	powerComboBoxRepoCarAcaNvlAcad.enableReadOnlyEditor();
    	powerComboBoxRepoCarAcaNvlAcad.addEmptyOption();
    	powerComboBoxRepoCarAcaNvlAcad.setValidEmpty();
    	powerComboBoxRepoCarAcaNvlAcad.enableOnChangeToEmptyOption();
    	powerComboBoxRepoCarAcaPeriodo = powerComboBox.create('powerComboBoxRepoCarAcaPeriodo','powerComboBoxRepoCarAcaPeriodo','Periodo:',1,71);
    	powerComboBoxRepoCarAcaPeriodo.enableReadOnlyEditor();
    	powerComboBoxRepoCarAcaPeriodo.addEmptyOption();
    	powerComboBoxRepoCarAcaPeriodo.setValidEmpty();
    	editsRepoCarAcaProCedula = edits.create('editsRepoCarAcaProCedula','editsRepoCarAcaProCedula','C.i. (*):',1,105,'normal');
    	editsRepoCarAcaProCedula.setValidInteger();
      	editsRepoCarAcaProCedula.setFieldFind(true);
      	editsRepoCarAcaProNombre = edits.create('editsRepoCarAcaProNombre','editsRepoCarAcaProNombre','Nombre (*):',1,71,'normal');
      	editsRepoCarAcaProNombre.setValidEmpty();
      	editsRepoCarAcaProNombre.setFieldFind(true);
      	editsRepoCarAcaProApellido = edits.create('editsRepoCarAcaProApellido','editsRepoCarAcaProApellido','Apellido (*):',1,71,'normal');
      	editsRepoCarAcaProApellido.setValidEmpty();
      	editsRepoCarAcaProApellido.setFieldFind(true);
      	imgButtonsRepoCarAcaReporte = imgButtons.create('imgButtonsRepoCarAcaReporte','Reporte','print.png');
      	imgButtonsRepoCarAcaSalir = imgButtons.create('imgButtonsRepoCarAcaSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents(); 
		this.dialogsRepoCarAcaProfesor_Init();
		this.createMWs();
	},
	
    resetElements : function(element){
		if (powerComboBoxRepoCarAcaNvlAcad.getOption() != "") 
			Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoCarAcaProfesor, powerComboBoxRepoCarAcaPeriodo, 0, 1, powerComboBoxRepoCarAcaNvlAcad);
		else
			Tool.rstPwrCmb(powerComboBoxRepoCarAcaPeriodo);
    },
	
  	limpiarFind : function(ix) {
  		editsRepoCarAcaProCedula.hideId = -1;
  		
  		switch (ix) {
		case 1: 
			editsRepoCarAcaProNombre.setValue("");
			editsRepoCarAcaProApellido.setValue("");  		
			break;
		case 2: 
			editsRepoCarAcaProCedula.setValue("");
			editsRepoCarAcaProApellido.setValue("");  		
			break;
		default:
			editsRepoCarAcaProCedula.setValue("");
		editsRepoCarAcaProNombre.setValue("");
			break;
		} 
  	},

	buscar: function() {
		if (editsRepoCarAcaProCedula.getValue() != '' || editsRepoCarAcaProNombre.getValue() != '' || editsRepoCarAcaProApellido.getValue() != '') {
        	ResuBusqueda.setObjectExtFnc(editsRepoCarAcaProCedula, editsRepoCarAcaProNombre, editsRepoCarAcaProApellido);
			Tool.getGridData('MantObject', 'getMantPersProf', dialogsRepoCarAcaProfesor, gridsResuBusqueda, 'ResuBusqueda', editsRepoCarAcaProCedula, editsRepoCarAcaProCedula, editsRepoCarAcaProNombre, editsRepoCarAcaProNombre, editsRepoCarAcaProApellido, editsRepoCarAcaProApellido);
		}
		else {
			Alert.show('Debe ingresar al menos: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
	},
  	
  	setEvents: function(){
  		editsRepoCarAcaProCedula.onEnter(this.windowName + ".buscar()");
  		editsRepoCarAcaProCedula.onChange(this.windowName + ".limpiarFind(1)");
  		editsRepoCarAcaProNombre.onEnter(this.windowName + ".buscar()");
  		editsRepoCarAcaProNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsRepoCarAcaProApellido.onEnter(this.windowName + ".buscar()");
  		editsRepoCarAcaProApellido.onChange(this.windowName + ".limpiarFind(3)");
		powerComboBoxRepoCarAcaNvlAcad.onChange(this.windowName + ".resetElements()");
		imgButtonsRepoCarAcaReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsRepoCarAcaSalir.onClick("dialogsRepoCarAcaProfesor.close()");
    },
	
	reporte : function(){
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
        rep.setPositionIcon(1090,0);
        //rep.setHeadImage(imgEduca.banner,true);
        //rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,0,1128,36,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addText(425, 23, 'CARGA ACADÉMICA DE UN PROFESOR',false);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,42,1128,88,rep.getRGBAObj(187,196,238,0.5),false);
        rep.addLine(0,40,1128,40,rep.getRGBAObj(210,210,210,1),1,false);
        rep.addLine(0,90,1128,90,rep.getRGBAObj(210,210,210,1),1,false); 
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','normal');
		rep.addText(20, 70,'PERIODO:  '+powerComboBoxRepoCarAcaPeriodo.getOption(),false);
		rep.addText(420, 70, 'C.I.:  '+editsRepoCarAcaProCedula.getValue(),false);
		rep.addText(620, 70, 'PROFESOR:  '+editsRepoCarAcaProNombre.getText()+" "+editsRepoCarAcaProApellido.getText(),false);
        //************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);		
		rep.addTable('TablaRepoCarAcaProefesor',['Codigo','Materia','Sección','H.C.','Organización','Suborganización','Carrera'],560,95);
        rep.setTotalRowTable(32);
		rep.setHeightRow(20);
        rep.setSizeColumnArray([80,360,60,50,100,240,240]);
        rep.setAlignData(['center','left','center','center','center','left','left']); 
        rep.addJsonData('TablaRepoCarAcaProefesor','getCargaAcadProf',[0,1,2,3,4,5,6]);		
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        ///////////////////////////////////////INSERCION DE IMAGEN DEL REPORTE/////////////////////////////////////////////////////////////////////////////
		rep.addImage(1060,153,1124,219,'images/pht/'+editsRepoCarAcaProCedula.getValue()+'.jpg',true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	coreUpdate: function(methodName){
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (powerComboBoxRepoCarAcaNvlAcad.valid(dialogsRepoCarAcaProfesor))
			if (powerComboBoxRepoCarAcaPeriodo.valid(dialogsRepoCarAcaProfesor))
				if (editsRepoCarAcaProCedula.valid(dialogsRepoCarAcaProfesor))
					if (editsRepoCarAcaProNombre.valid(dialogsRepoCarAcaProfesor))
						if (editsRepoCarAcaProApellido.valid(dialogsRepoCarAcaProfesor)) {
							rlx.addInt('reg', editsRepoCarAcaProCedula.hideId);
							rlx.add('reg', powerComboBoxRepoCarAcaPeriodo);
							Tool.cnnSrv('ReportObject', 'getCargaAcadProf', this.windowName + '.reporte()', rlx);
						}
    }
};