var dialogsRepoExpAlumno = new Object();
var editsRepoExpAluCedula = new Object();
var editsRepoExpAluNombre = new Object();
var editsRepoExpAluApellido = new Object();
var powerComboBoxRepoExpAluOrganizacion = new Object();
var powerComboBoxRepoExpAluSuborganizacion = new Object();
var powerComboBoxRepoExpAluCarrera = new Object();
var imgButtonsRepoExpAluReporte = new Object();
var imgButtonsRepoExpAluLimpiar = new Object();
var imgButtonsRepoExpAluSalir = new Object();
var mwRepoExpAlumno = new Object();// minWindow

var RepoExpAlumno = {
    windowName: 'RepoExpAlumno',
    isCreate: false,
    hideIdMateriaGrid: null,
	
    show: function(){
        if (!this.isCreate) {   
            this.init();
            this.isCreate = true;
        }
        
        if (dialogsRepoExpAlumno.isByClean()) {
        	Tool.rstPwrCmb(powerComboBoxRepoExpAluOrganizacion);
        	Tool.rstPwrCmb(powerComboBoxRepoExpAluSuborganizacion);
        	Tool.rstPwrCmb(powerComboBoxRepoExpAluCarrera);
        	editsRepoExpAluCedula.setValue("");
        	editsRepoExpAluNombre.setValue("");
        	editsRepoExpAluApellido.setValue("");
            Tool.cnnSrv('MantObject', 'getDispProfesorInit', this.windowName + '.loadDataInit()');
        }
        dialogsRepoExpAlumno.show();
    },
    
    loadDataInit: function() {
        Tool.loadPowerComboData(dialogsRepoExpAlumno, powerComboBoxRepoExpAluOrganizacion, 0, 1, json('getData'));
        Tool.getContext(dialogsRepoExpAlumno, powerComboBoxRepoExpAluOrganizacion, powerComboBoxRepoExpAluSuborganizacion, powerComboBoxRepoExpAluCarrera);
        dialogsRepoExpAlumno.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },
    
    hide: function(){
        dialogsRepoExpAlumno.hide();
    },
    createMWs: function(){
        mwRepoExpAlumno = desktop.addMinWindow('R.Exp.Alumno', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoExpAlumno.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsRepoExpAlumno_Init: function(){
        dialogsRepoExpAlumno.setMinimizeXY(0, 0);
        dialogsRepoExpAlumno.setCenterScreen();
        dialogsRepoExpAlumno.addSpace(1, 0, 20);
        dialogsRepoExpAlumno.addLn(1, 1, 1);
		dialogsRepoExpAlumno.setHeightCell(1,1,10);  
        dialogsRepoExpAlumno.addObjToDialog(powerComboBoxRepoExpAluOrganizacion, 2, 1,24);
        dialogsRepoExpAlumno.addObjToDialog(powerComboBoxRepoExpAluSuborganizacion, 2, 1,24);
        dialogsRepoExpAlumno.addObjToDialog(powerComboBoxRepoExpAluCarrera, 2, 1,24);
        dialogsRepoExpAlumno.adjAllMarginObj(2, 1, 10);
        dialogsRepoExpAlumno.addObjToDialog(editsRepoExpAluCedula, 3, 1,24);
        editsRepoExpAluCedula.setSizeEdit(149);
        dialogsRepoExpAlumno.addObjToDialog(editsRepoExpAluNombre, 3, 1,24);
        editsRepoExpAluNombre.setSizeEdit(149);
		editsRepoExpAluNombre.setMaxLength(50);
        dialogsRepoExpAlumno.addObjToDialog(editsRepoExpAluApellido, 3, 1,24);
        editsRepoExpAluApellido.setSizeEdit(149);
		editsRepoExpAluApellido.setMaxLength(50);
        dialogsRepoExpAlumno.adjAllMarginObj(3, 1, 10);
        dialogsRepoExpAlumno.addLn(4, 1, 1);
		dialogsRepoExpAlumno.setHeightCell(4,1,10);  
        dialogsRepoExpAlumno.addObjToDialog(imgButtonsRepoExpAluReporte, 5, 1);
        dialogsRepoExpAlumno.addObjToDialog(imgButtonsRepoExpAluLimpiar, 5, 1);
        dialogsRepoExpAlumno.addObjToDialog(imgButtonsRepoExpAluSalir, 5, 1);
        imgButtonsRepoExpAluReporte.setDimension(90, 22);
        imgButtonsRepoExpAluLimpiar.setDimension(90, 22);
        imgButtonsRepoExpAluSalir.setDimension(90, 22);
        dialogsRepoExpAlumno.adjAllMarginObj(5, 1, 30);
        dialogsRepoExpAlumno.leftMarginObj(5, 1, 0, 218);
    },
	
    create: function(){
        dialogsRepoExpAlumno = dialogs.create('dialogsRepoExpAlumno', 0, 0, 808, 104, 'EXPEDIENTE DEL ALUMNO');
        dialogsRepoExpAlumno.setAdjY(60);
        editsRepoExpAluCedula = edits.create('editsRepoExpAluCedula', 'editsRepoExpAluCedula', 'C.i. (*):', 1,102, 'normal');    
        editsRepoExpAluCedula.setValidInteger();
        editsRepoExpAluCedula.setFieldFind(true);
        editsRepoExpAluNombre = edits.create('editsRepoExpAluNombre', 'editsRepoExpAluNombre', 'Nombre: (*)', 1,123, 'normal');
        editsRepoExpAluNombre.setValidEmpty();
		editsRepoExpAluNombre.setFieldFind(true);
        editsRepoExpAluApellido = edits.create('editsRepoExpAluApellido', 'editsRepoExpAluApellido', 'Apellido: (*)', 1,73, 'normal');
        editsRepoExpAluApellido.setValidEmpty();
		editsRepoExpAluApellido.setFieldFind(true);
        powerComboBoxRepoExpAluOrganizacion = powerComboBox.create('powerComboBoxRepoExpAluOrganizacion', 'powerComboBoxRepoExpAluOrganizacion', 'Organización (+):', 1,102);
        powerComboBoxRepoExpAluOrganizacion.enableReadOnlyEditor();
        powerComboBoxRepoExpAluOrganizacion.addEmptyOption();
        powerComboBoxRepoExpAluOrganizacion.setValidEmpty();
        powerComboBoxRepoExpAluSuborganizacion = powerComboBox.create('powerComboBoxRepoExpAluSuborganizacion', 'powerComboBoxRepoExpAluSuborganizacion', 'Suborganización (^):', 1,123);
        powerComboBoxRepoExpAluSuborganizacion.enableReadOnlyEditor();
        powerComboBoxRepoExpAluSuborganizacion.addEmptyOption();
        powerComboBoxRepoExpAluSuborganizacion.setValidEmpty();
        powerComboBoxRepoExpAluCarrera = powerComboBox.create('powerComboBoxRepoExpAluCarrera', 'powerComboBoxRepoExpAluCarrera', 'Carrera (^):', 1,73);
        powerComboBoxRepoExpAluCarrera.enableReadOnlyEditor();
        powerComboBoxRepoExpAluCarrera.addEmptyOption();
        powerComboBoxRepoExpAluCarrera.setValidEmpty();
        imgButtonsRepoExpAluReporte = imgButtons.create('imgButtonsRepoExpAluReporte', 'Reporte', 'print.png');
        imgButtonsRepoExpAluLimpiar = imgButtons.create('imgButtonsRepoExpAluLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsRepoExpAluSalir = imgButtons.create('imgButtonsRepoExpAluSalir', 'Salir', 'salir.png');
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsRepoExpAlumno_Init();
        this.createMWs();
    },
    
	limpiarFind : function(ix) {
		editsRepoExpAluCedula.hideId = -1;
		
  		switch (ix) {
		case 1: 
			editsRepoExpAluNombre.setValue("");
			editsRepoExpAluApellido.setValue("");  		
			break;
		case 2: 
			editsRepoExpAluCedula.setValue("");
			editsRepoExpAluApellido.setValue("");  		
			break;
		default:
			editsRepoExpAluCedula.setValue("");
		    editsRepoExpAluNombre.setValue("");
			break;
		} 
  	},

	buscar: function() {
		if (editsRepoExpAluCedula.getValue() != '' || editsRepoExpAluNombre.getValue() != '' || editsRepoExpAluApellido.getValue() != '') {
			ResuBusqueda.setObjectExtFnc(editsRepoExpAluCedula, editsRepoExpAluNombre, editsRepoExpAluApellido);
			Tool.getGridData('MantObject', 'getMantPersTodas', dialogsRepoExpAlumno, gridsResuBusqueda, 'ResuBusqueda', editsRepoExpAluCedula, editsRepoExpAluCedula, editsRepoExpAluNombre, editsRepoExpAluNombre, editsRepoExpAluApellido, editsRepoExpAluApellido);
		}
		else {
			Alert.show('Debe ingresar al menos: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
	},
	
    setEvents: function(){
  		editsRepoExpAluCedula.onEnter(this.windowName + ".buscar()");
  		editsRepoExpAluCedula.onChange(this.windowName + ".limpiarFind(1)");
  		editsRepoExpAluNombre.onEnter(this.windowName + ".buscar()");
  		editsRepoExpAluNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsRepoExpAluApellido.onEnter(this.windowName + ".buscar()");
  		editsRepoExpAluApellido.onChange(this.windowName + ".limpiarFind(3)");
		powerComboBoxRepoExpAluOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxRepoExpAluSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		imgButtonsRepoExpAluReporte.onClick(this.windowName + ".reporte()");
		imgButtonsRepoExpAluLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsRepoExpAluSalir.onClick("dialogsRepoExpAlumno.close()");
    },

   resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxRepoExpAluSuborganizacion);
	  		Tool.rstPwrCmb(powerComboBoxRepoExpAluCarrera);
	    	if (powerComboBoxRepoExpAluOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoExpAlumno, powerComboBoxRepoExpAluSuborganizacion, 1, 2, powerComboBoxRepoExpAluOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(powerComboBoxRepoExpAluCarrera);
	    	if (powerComboBoxRepoExpAluSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoExpAlumno, powerComboBoxRepoExpAluCarrera, -1, 3, powerComboBoxRepoExpAluSuborganizacion);
		}
	},
	
	
	limpiar: function(){
		editsRepoExpAluCedula.hideId = -1;
        editsRepoExpAluCedula.setValue("");
        editsRepoExpAluNombre.setValue("");
        editsRepoExpAluApellido.setValue("");
        Tool.rstPwrCmb(powerComboBoxRepoExpAluOrganizacion);
        Tool.rstPwrCmb(powerComboBoxRepoExpAluSuborganizacion);
        Tool.rstPwrCmb(powerComboBoxRepoExpAluCarrera);
        dialogsRepoExpAlumno.setMsg("");
		Tool.cnnSrv('MantObject', 'getDispProfesorInit', this.windowName + '.loadDataInit()');
    },
	
	reporte : function(){
		
		var aData = [['Titulo Bachiller','Notas Certificadas','Certificado de Salud','Licencia de Conducir','Inscripción Militar','Carta de Buena Conducta','Rif','','','','',
					  '','','','','','','','','',''],  	
		
					 ['Entregado','Entregado','Entregado','Pendiente','Entregado','Entregado','Pendiente',]];
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
        rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addLine(0,148,1128,148,rep.getRGBAObj(2,48,68,2),1,false); 
        rep.addHeadTitle('EXPEDIENTE ACADÉMICO DEL ALUMNO',true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        //rep.addBar(0,152,1128,240,rep.getRGBAObj(187,196,238,0.8),false);
        rep.addLine(0,222,1128,222,rep.getRGBAObj(2,48,68,2),1,false); 
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),7,'helvetica','bold','black');
		rep.addText(20, 170, 'C.I.:                  '+editsRepoExpAluCedula.getText(),false);
		rep.addText(270, 170, 'NOMBRE:   '+editsRepoExpAluNombre.getText(),false);
		rep.addText(470, 170, 'APELLIDO:  '+editsRepoExpAluApellido.getText(),false);
		rep.addText(20, 190,'FECHA NAC.:',false);
        rep.addText(270, 190, 'SEXO:',false);
        rep.addText(470, 190, 'EDAD:',false);
        rep.addText(20, 210,'T. FIJO.:',false);
        rep.addText(270, 210, 'T. MOVIL:',false);   
        rep.addText(470, 210, 'EMAIL:',false);
        //rep.addBar(0,252,1128,337,rep.getRGBAObj(187,196,238,0.8),false);
        rep.addLine(0,298,1128,298,rep.getRGBAObj(2,48,68,2),1,false); 
        rep.addText(20, 245,'DIRECCIÓN:',false);
        rep.addText(20, 265, 'MODO DE INGRESO:',false);
        rep.addText(470, 265, 'FECHA DE INGRESO:',false);
        rep.addText(20, 285, 'INSTITUCIÓN PROCEDENCIA:',false);
        //rep.addBar(0,349,1128,439,rep.getRGBAObj(187,196,238,0.8),false);
        rep.addLine(0,374,1128,374,rep.getRGBAObj(2,48,68,2),1,false); 
        rep.addText(20, 320,'ORGANIZACION:          '+powerComboBoxRepoExpAluOrganizacion.getOption(),false);
        rep.addText(20, 340, 'SUBORGANIZACION:   '+powerComboBoxRepoExpAluSuborganizacion.getOption(),false);
        rep.addText(20, 360, 'CARRERA:                   '+powerComboBoxRepoExpAluCarrera.getOption(),false);
        rep.addText(470, 320, 'U.C. CURSADAS:',false);
        rep.addText(470, 340, 'U.C. APROBADAS:',false);
        rep.addText(470, 360, 'U.C. PENDIENTES:',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		//////////////////////////////////////////TABLA DE DATOS///////////////////////////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);		
		rep.addTable('tablaAuditoria',['DOCUMENTO','ESTADO'],400,380);
		rep.setTotalRowTable(15);
		rep.setHeightRow(20); 
		rep.setSizeColumnArray([620,180]);
		rep.setAlignData(['left','center']); 
		rep.addMultiArrayData('tablaAuditoria', aData); rep.addMultiArrayData('tablaAuditoria', aData);
		//////////////////////////////////////////BARRA MENSAJE OBSERVACIONES//////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),7,'helvetica','bold','black');
		rep.addBar(0,854,1140,980,rep.getRGBAObj(210,210,200,0.9),false);
        rep.addText(4, 871,'OBSERVACIONES:',false);
        ///////////////////////////////////////INSERCION DE IMAGEN DEL REPORTE/////////////////////////////////////////////////////////////////////////////////
		rep.addImage(720,152,792,240,'images/pht/'+editsRepoExpAluCedula.getValue()+'.jpg',true);
        //////////////////////////////////////////PIE DE PAGINA////////////////////////////////////////////////////////////////////////////////////////////////
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
        
		if (powerComboBoxRepoExpAluCarrera.valid(dialogsRepoExpAlumno))
			if (powerComboBoxRepoExpAluSuborganizacion.valid(dialogsRepoExpAlumno))
				if (editsRepoExpAluCedula.valid(dialogsRepoExpAlumno))
					if (editsRepoExpAluNombre.valid(dialogsRepoExpAlumno))
						if (editsRepoExpAluApellido.valid(dialogsRepoExpAlumno)) {
							rlx.add('reg', editsRepoExpAluCedula);
							rlx.add('reg', editsRepoExpAluCedula);
							rlx.add('reg', editsRepoExpAluNombre);
							rlx.add('reg', editsRepoExpAluNombre);
							rlx.add('reg', editsRepoExpAluApellido);
							rlx.add('reg', editsRepoExpAluApellido);
							Tool.cnnSrv('MantObject', 'getMantPersTodas', this.windowName + '.reporte()', rlx);
						}
				
    } 
};

