var dialogsRepoConsNotas = new Object();
var editsRepoConsNotCedula = new Object();
var editsRepoConsNotNombre = new Object();
var editsRepoConsNotApellido = new Object();
var powerComboBoxRepoConsNotOrganizacion = new Object();
var powerComboBoxRepoConsNotSuborganizacion = new Object();
var powerComboBoxRepoConsNotCarrera = new Object();
var memoRepoConsNotas = new Object();
var imgButtonsRepoConsNotReporte = new Object();
var imgButtonsRepoConsNotLimpiar = new Object();
var imgButtonsRepoConsNotSalir = new Object();
var mwRepoConsNotas = new Object();// minWindow

var RepoConsNotas = {
    windowName: 'RepoConsNotas',
    isCreate: false,
	
    show: function(){
        if (!this.isCreate) {   
            this.init();
            this.isCreate = true;
        }
        
        if (dialogsRepoConsNotas.isByClean()) {
        	Tool.rstPwrCmb(powerComboBoxRepoConsNotOrganizacion);
        	Tool.rstPwrCmb(powerComboBoxRepoConsNotSuborganizacion);
        	Tool.rstPwrCmb(powerComboBoxRepoConsNotCarrera);
        	editsRepoConsNotCedula.setValue("");
        	editsRepoConsNotNombre.setValue("");
        	editsRepoConsNotApellido.setValue("");
        	memoRepoConsNotas.setText("");
            Tool.cnnSrv('MantObject', 'getDispProfesorInit', this.windowName + '.loadDataInit()');
        }
        dialogsRepoConsNotas.show();
    },
    
    loadDataInit: function() {
        Tool.loadPowerComboData(dialogsRepoConsNotas, powerComboBoxRepoConsNotOrganizacion, 0, 1, json('getData'));
        Tool.getContext(dialogsRepoConsNotas, powerComboBoxRepoConsNotOrganizacion, powerComboBoxRepoConsNotSuborganizacion, powerComboBoxRepoConsNotCarrera);
        dialogsRepoConsNotas.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },
        
    hide: function() {
        dialogsRepoConsNotas.hide();
    },
        
    createMWs: function() {
        mwRepoConsNotas = desktop.addMinWindow('C. Notas', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoConsNotas.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsRepoConsNotas_Init: function() {
        dialogsRepoConsNotas.setMinimizeXY(0, 0);
        dialogsRepoConsNotas.setCenterScreen();
        dialogsRepoConsNotas.addSpace(1, 0, 20);
        dialogsRepoConsNotas.addLn(1, 1, 1);
		dialogsRepoConsNotas.setHeightCell(1,1,10); 
		dialogsRepoConsNotas.addObjToDialog(powerComboBoxRepoConsNotOrganizacion, 2, 1,24);
        dialogsRepoConsNotas.addObjToDialog(powerComboBoxRepoConsNotSuborganizacion, 2, 1,24);
        dialogsRepoConsNotas.addObjToDialog(powerComboBoxRepoConsNotCarrera, 2, 1,24);
        dialogsRepoConsNotas.adjAllMarginObj(2, 1, 10);
		dialogsRepoConsNotas.addObjToDialog(editsRepoConsNotCedula, 3, 1,24);
        editsRepoConsNotCedula.setSizeEdit(149);
        dialogsRepoConsNotas.addObjToDialog(editsRepoConsNotNombre, 3, 1,24);
        editsRepoConsNotNombre.setSizeEdit(149);
		editsRepoConsNotNombre.setMaxLength(50);
        dialogsRepoConsNotas.addObjToDialog(editsRepoConsNotApellido, 3, 1,24);
        editsRepoConsNotApellido.setSizeEdit(149);
		editsRepoConsNotApellido.setMaxLength(50);
        dialogsRepoConsNotas.adjAllMarginObj(3, 1, 10);
        dialogsRepoConsNotas.addObjToDialog(memoRepoConsNotas,4,1,54);
        memoRepoConsNotas.setMaxLength(430);
		memoRepoConsNotas.vAlignCaption('middle');
        memoRepoConsNotas.setDimension(663,40);
        dialogsRepoConsNotas.addLn(5, 1, 1);
		dialogsRepoConsNotas.setHeightCell(5,1,10);  
        dialogsRepoConsNotas.addObjToDialog(imgButtonsRepoConsNotReporte, 6, 1);
        dialogsRepoConsNotas.addObjToDialog(imgButtonsRepoConsNotLimpiar, 6, 1);
        dialogsRepoConsNotas.addObjToDialog(imgButtonsRepoConsNotSalir, 6, 1);
        imgButtonsRepoConsNotReporte.setDimension(90, 22);
        imgButtonsRepoConsNotLimpiar.setDimension(90, 22);
        imgButtonsRepoConsNotSalir.setDimension(90, 22);
        dialogsRepoConsNotas.adjAllMarginObj(6, 1, 30);
        dialogsRepoConsNotas.leftMarginObj(6, 1, 0, 218);
    },
	
    create: function() {
        dialogsRepoConsNotas = dialogs.create('dialogsRepoConsNotas', 0, 0, 808, 160, 'CONSTANCIA DE NOTAS');
        dialogsRepoConsNotas.setAdjY(60);
        editsRepoConsNotCedula = edits.create('editsRepoConsNotCedula', 'editsRepoConsNotCedula', 'C.i. (*):', 1,103, 'normal');//    
        editsRepoConsNotCedula.setValidInteger();
        editsRepoConsNotCedula.setFieldFind(true);
        editsRepoConsNotNombre = edits.create('editsRepoConsNotNombre', 'editsRepoConsNotNombre', 'Nombre: (*)', 1,123, 'normal');
        editsRepoConsNotNombre.setValidEmpty();
		editsRepoConsNotNombre.setFieldFind(true);
        editsRepoConsNotApellido = edits.create('editsRepoConsNotApellido', 'editsRepoConsNotApellido', 'Apellido: (*)', 1,73, 'normal');
        editsRepoConsNotApellido.setValidEmpty();
		editsRepoConsNotApellido.setFieldFind(true);
        powerComboBoxRepoConsNotOrganizacion = powerComboBox.create('powerComboBoxRepoConsNotOrganizacion', 'powerComboBoxRepoConsNotOrganizacion', 'Organización (+):', 1,103);
        powerComboBoxRepoConsNotOrganizacion.enableReadOnlyEditor();
        powerComboBoxRepoConsNotOrganizacion.addEmptyOption();
        powerComboBoxRepoConsNotOrganizacion.setValidEmpty();
        powerComboBoxRepoConsNotSuborganizacion = powerComboBox.create('powerComboBoxRepoConsNotSuborganizacion', 'powerComboBoxRepoConsNotSuborganizacion', 'Suborganización (^):', 1,123);
        powerComboBoxRepoConsNotSuborganizacion.enableReadOnlyEditor();
        powerComboBoxRepoConsNotSuborganizacion.addEmptyOption();
        powerComboBoxRepoConsNotSuborganizacion.setValidEmpty();
        powerComboBoxRepoConsNotCarrera = powerComboBox.create('powerComboBoxRepoConsNotCarrera', 'powerComboBoxRepoConsNotCarrera', 'Carrera (^):', 1,73);
        powerComboBoxRepoConsNotCarrera.enableReadOnlyEditor();
        powerComboBoxRepoConsNotCarrera.addEmptyOption();
        powerComboBoxRepoConsNotCarrera.setValidEmpty();
		memoRepoConsNotas = memo.create('memoRepoConsNotas','Observaciones:',1,1,100);
		memoRepoConsNotas.setValidEmpty();
        imgButtonsRepoConsNotReporte = imgButtons.create('imgButtonsRepoConsNotReporte', 'Reporte', 'print.png');
        imgButtonsRepoConsNotLimpiar = imgButtons.create('imgButtonsRepoConsNotLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsRepoConsNotSalir = imgButtons.create('imgButtonsRepoConsNotSalir', 'Salir', 'salir.png');
    },
    
    init: function() {
        this.create();
        this.setEvents();
        this.dialogsRepoConsNotas_Init();
        this.createMWs();
    },
    
	limpiarFind : function(ix) {
		editsRepoConsNotCedula.hideId = -1;
		
  		switch (ix) {
		case 1: 
			editsRepoConsNotNombre.setValue("");
			editsRepoConsNotApellido.setValue("");  		
			break;
		case 2: 
			editsRepoConsNotCedula.setValue("");
			editsRepoConsNotApellido.setValue("");  		
			break;
		default:
			editsRepoConsNotCedula.setValue("");
		    editsRepoConsNotNombre.setValue("");
			break;
		} 
  	},

	buscar: function() {
		if (editsRepoConsNotCedula.getValue() != '' || editsRepoConsNotNombre.getValue() != '' || editsRepoConsNotApellido.getValue() != '') {
        	ResuBusqueda.setObjectExtFnc(editsRepoConsNotCedula, editsRepoConsNotNombre, editsRepoConsNotApellido);
			Tool.getGridData('MantObject', 'getMantPersTodas', dialogsRepoConsNotas, gridsResuBusqueda, 'ResuBusqueda', editsRepoConsNotCedula, editsRepoConsNotCedula, editsRepoConsNotNombre, editsRepoConsNotNombre, editsRepoConsNotApellido, editsRepoConsNotApellido);
		}
		else {
			Alert.show('Debe ingresar al menos: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
	},
	
   setEvents: function() {
  		editsRepoConsNotCedula.onEnter(this.windowName + ".buscar()");
  		editsRepoConsNotCedula.onChange(this.windowName + ".limpiarFind(1)");
  		editsRepoConsNotNombre.onEnter(this.windowName + ".buscar()");
  		editsRepoConsNotNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsRepoConsNotApellido.onEnter(this.windowName + ".buscar()");
  		editsRepoConsNotApellido.onChange(this.windowName + ".limpiarFind(3)");
		powerComboBoxRepoConsNotOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxRepoConsNotSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		imgButtonsRepoConsNotReporte.onClick(this.windowName + ".coreUpdate('reporte')");
		imgButtonsRepoConsNotLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsRepoConsNotSalir.onClick("dialogsRepoConsNotas.close()");
    },

   resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxRepoConsNotSuborganizacion);
	  		Tool.rstPwrCmb(powerComboBoxRepoConsNotCarrera);
	    	if (powerComboBoxRepoConsNotOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoConsNotas, powerComboBoxRepoConsNotSuborganizacion, 1, 2, powerComboBoxRepoConsNotOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(powerComboBoxRepoConsNotCarrera);
	    	if (powerComboBoxRepoConsNotSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoConsNotas, powerComboBoxRepoConsNotCarrera, -1, 3, powerComboBoxRepoConsNotSuborganizacion);
		}
	},

	limpiar: function() {
		editsRepoConsNotCedula.hideId = -1;
        editsRepoConsNotCedula.setValue("");
        editsRepoConsNotNombre.setValue("");
        editsRepoConsNotApellido.setValue("");
        Tool.rstPwrCmb(powerComboBoxRepoConsNotOrganizacion);
        Tool.rstPwrCmb(powerComboBoxRepoConsNotSuborganizacion);
        Tool.rstPwrCmb(powerComboBoxRepoConsNotCarrera);
        dialogsRepoConsNotas.setMsg("");
		Tool.cnnSrv('MantObject', 'getCargarPersona', this.windowName + '.loadDataPers()');
    },

	reporte : function() {
		var arrData = [[],[],[],[],[]];
		arrData[0]=json('getConstanciaNotas').data[1];//codigo_materia
		arrData[1]=json('getConstanciaNotas').data[2];//des_materia
		arrData[2]=json('getConstanciaNotas').data[4];//u.c	
		arrData[3]=json('getConstanciaNotas').data[0];//periodo	
		arrData[4]=json('getConstanciaNotas').data[3];//nota	
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
        rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'helvetica','bold');
		rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addHeadTitle('CONSTANCIA DE NOTAS DEL ALUMNO',true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,145,1128,238,rep.getRGBAObj(187,196,238,0.8),false);
		rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),7.8,'helvetica','bold');
		rep.addText(20, 164, 'ORGANIZACION:          '+powerComboBoxRepoConsNotOrganizacion.getOption(),false);
        rep.addText(20, 184, 'SUBORGANIZACION:   '+powerComboBoxRepoConsNotSuborganizacion.getOption(),false);
        rep.addText(20, 204, 'CARRERA:                    '+powerComboBoxRepoConsNotCarrera.getOption(),false);
        rep.addText(20, 224, 'C.I.:                              '+editsRepoConsNotCedula.getText(),false);
		rep.addText(400, 224,'NOMBRE:   '+editsRepoConsNotNombre.getText()+" "+editsRepoConsNotApellido.getText(),false);
		//////////////////////////////////////////TABLA DE DATOS///////////////////////////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),6,'helvetica','bold');
		rep.addTable('tablaConsNotas',['Código','Materia','U.C.','Periodo','Nota'],395,243);
		rep.setSizeColumnArray([130,400,60,145,60]);
		rep.setAlignData(['center','left','center','center','center']);
		rep.addMultiArrayData('tablaConsNotas', arrData);
		rep.setTotalRowTable(27);
		rep.setHeightRow(20);
		//////////////////////////////////////////BARRA MENSAJE OBSERVACIONES//////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),7,'helvetica','bold','black');
		rep.addBar(0,810,1140,888,rep.getRGBAObj(210,210,200,0.9),false);
        rep.addText(4, 825,'OBSERVACIONES: ',false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),8.0,'helvetica','normal');
        rep.addParagraph(20, 840, memoRepoConsNotas.getText(),720,15,false);
        ///////////////////////////////////////INSERCION DE IMAGEN DEL REPORTE/////////////////////////////////////////////////////////////////////////////////
		rep.addImage(720,145,792,238,'images/pht/'+editsRepoConsNotCedula.getValue()+'.jpg',true);
        //////////////////////////////////////////PIE DE PAGINA////////////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
    coreUpdate: function(methodName) {
    	var rlx = xmlStructs.createRecordList("rlx");
    	if (editsRepoConsNotCedula.valid(dialogsRepoConsNotas)) 
    		if (editsRepoConsNotNombre.valid(dialogsRepoConsNotas)) 
    			if (editsRepoConsNotApellido.valid(dialogsRepoConsNotas)) 
    				if (powerComboBoxRepoConsNotCarrera.valid(dialogsRepoConsNotas)) {
               			rlx.addInt('reg', editsRepoConsNotCedula.hideId);
               			rlx.add('reg', powerComboBoxRepoConsNotCarrera.setModeReturnGetText(2));
			            Tool.cnnSrv('ReportObject', 'getConstanciaNotas', this.windowName + '.reporte()', rlx);	
               		}
    }
};

