var dialogsProsAlumno = new Object();
var editsProsAluCedula = new Object();
var editsProsAluNombre = new Object();
var editsProsAluApellido = new Object();
var powerComboBoxProsAluOrganizacion = new Object();
var powerComboBoxProsAluSuborganizacion = new Object();
var powerComboBoxProsAluCarrera = new Object();
var gridsProsAlumno = new Object();
var imgButtonsProsAluReporte = new Object();
var imgButtonsProsAluLimpiar = new Object();
var imgButtonsProsAluSalir = new Object();
var mwProsAlumno = new Object();// minWindow

var ProsAlumno = {
    windowName: 'ProsAlumno',
    isCreate: false,
    hideIdMateriaGrid: null,
	
    show: function(){
        if (!this.isCreate) {   
            this.init();
            this.isCreate = true;
        }
        
        if (dialogsProsAlumno.isByClean()) {
        	Tool.rstPwrCmb(powerComboBoxProsAluOrganizacion);
        	Tool.rstPwrCmb(powerComboBoxProsAluSuborganizacion);
        	Tool.rstPwrCmb(powerComboBoxProsAluCarrera);
        	editsProsAluCedula.setValue("");
        	editsProsAluNombre.setValue("");
        	editsProsAluApellido.setValue("");
            Tool.cnnSrv('MantObject', 'getDispProfesorInit', this.windowName + '.loadDataInit()');
        }
        dialogsProsAlumno.show();
    },
    
    loadDataInit: function() {
        Tool.loadPowerComboData(dialogsProsAlumno, powerComboBoxProsAluOrganizacion, 0, 1, json('getData'));
        Tool.getContext(dialogsProsAlumno, powerComboBoxProsAluOrganizacion, powerComboBoxProsAluSuborganizacion, powerComboBoxProsAluCarrera);
        dialogsProsAlumno.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },
    
    hide: function(){
        dialogsProsAlumno.hide();
    },
    createMWs: function(){
        mwProsAlumno = desktop.addMinWindow('P.Alumno', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsProsAlumno.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsProsAlumno_Init: function(){
        dialogsProsAlumno.setMinimizeXY(0, 0);
        dialogsProsAlumno.setCenterScreen();
        dialogsProsAlumno.addSpace(1, 0, 20);
        dialogsProsAlumno.addLn(1, 1, 1);
		dialogsProsAlumno.setHeightCell(1,1,10);  
        dialogsProsAlumno.addObjToDialog(powerComboBoxProsAluOrganizacion, 2, 1,24);
        dialogsProsAlumno.addObjToDialog(powerComboBoxProsAluSuborganizacion, 2, 1,24);
        dialogsProsAlumno.addObjToDialog(powerComboBoxProsAluCarrera, 2, 1,24);
        dialogsProsAlumno.adjAllMarginObj(2, 1, 10);
        dialogsProsAlumno.addObjToDialog(editsProsAluCedula, 3, 1,24);
        editsProsAluCedula.setSizeEdit(149);
        dialogsProsAlumno.addObjToDialog(editsProsAluNombre, 3, 1,24);
        editsProsAluNombre.setSizeEdit(149);
		editsProsAluNombre.setMaxLength(50);
        dialogsProsAlumno.addObjToDialog(editsProsAluApellido, 3, 1,24);
        editsProsAluApellido.setSizeEdit(149);
		editsProsAluApellido.setMaxLength(50);
        dialogsProsAlumno.adjAllMarginObj(3, 1, 10);
        dialogsProsAlumno.addLn(4, 1, 1);
		dialogsProsAlumno.setHeightCell(4,1,7);  
		
		dialogsProsAlumno.addObjToDialog(gridsProsAlumno.getObject(),5,1);
		dialogsProsAlumno.addLn(6, 1, 1);
		dialogsProsAlumno.setHeightCell(6,1,7);  		
        dialogsProsAlumno.addObjToDialog(imgButtonsProsAluReporte, 7, 1);
        dialogsProsAlumno.addObjToDialog(imgButtonsProsAluLimpiar, 7, 1);
        dialogsProsAlumno.addObjToDialog(imgButtonsProsAluSalir, 7, 1);
        imgButtonsProsAluReporte.setDimension(90, 22);
        imgButtonsProsAluLimpiar.setDimension(90, 22);
        imgButtonsProsAluSalir.setDimension(90, 22);
        dialogsProsAlumno.adjAllMarginObj(7, 1, 30);
        dialogsProsAlumno.leftMarginObj(7, 1, 0, 218);
    },
	
	gridsProsAlumno_Init : function() {
        gridsProsAlumno.setFixColRow(false,true);
        gridsProsAlumno.addTitleVectorX(['Id','Código','Materia','Periodo','Nota']);
        gridsProsAlumno.showData();
        gridsProsAlumno.setSizeCol(1,0);
        gridsProsAlumno.setSizeCol(2,150);
		gridsProsAlumno.setSizeCol(3,392);
        gridsProsAlumno.setSizeCol(4,180);
		gridsProsAlumno.setSizeCol(5,40);
        gridsProsAlumno.hideCol(1);
      },
	
    create: function(){
        dialogsProsAlumno = dialogs.create('dialogsProsAlumno', 0, 0, 808, 346, 'PROSECUCIÓN DEL ALUMNO');
        dialogsProsAlumno.setAdjY(60);
        editsProsAluCedula = edits.create('editsProsAluCedula', 'editsProsAluCedula', 'C.i. (*):', 1,102, 'normal');    
        editsProsAluCedula.setValidInteger();
        editsProsAluCedula.setFieldFind(true);
        editsProsAluNombre = edits.create('editsProsAluNombre', 'editsProsAluNombre', 'Nombre: (*)', 1,123, 'normal');
        editsProsAluNombre.setValidEmpty();
		editsProsAluNombre.setFieldFind(true);
        editsProsAluApellido = edits.create('editsProsAluApellido', 'editsProsAluApellido', 'Apellido: (*)', 1,73, 'normal');
        editsProsAluApellido.setValidEmpty();
		editsProsAluApellido.setFieldFind(true);
        powerComboBoxProsAluOrganizacion = powerComboBox.create('powerComboBoxProsAluOrganizacion', 'powerComboBoxProsAluOrganizacion', 'Organización (+):', 1,102);
        powerComboBoxProsAluOrganizacion.enableReadOnlyEditor();
        powerComboBoxProsAluOrganizacion.addEmptyOption();
        powerComboBoxProsAluOrganizacion.setValidEmpty();
        powerComboBoxProsAluSuborganizacion = powerComboBox.create('powerComboBoxProsAluSuborganizacion', 'powerComboBoxProsAluSuborganizacion', 'Suborganización (^):', 1,123);
        powerComboBoxProsAluSuborganizacion.enableReadOnlyEditor();
        powerComboBoxProsAluSuborganizacion.addEmptyOption();
        powerComboBoxProsAluSuborganizacion.setValidEmpty();
        powerComboBoxProsAluCarrera = powerComboBox.create('powerComboBoxProsAluCarrera', 'powerComboBoxProsAluCarrera', 'Carrera (^):', 1,73);
        powerComboBoxProsAluCarrera.enableReadOnlyEditor();
        powerComboBoxProsAluCarrera.addEmptyOption();
        powerComboBoxProsAluCarrera.setValidEmpty();
		gridsProsAlumno = grids.create('gridsProsAlumno',10,5);
        imgButtonsProsAluReporte = imgButtons.create('imgButtonsProsAluReporte', 'Reporte', 'print.png');
        imgButtonsProsAluLimpiar = imgButtons.create('imgButtonsProsAluLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsProsAluSalir = imgButtons.create('imgButtonsProsAluSalir', 'Salir', 'salir.png');
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsProsAlumno_Init();
		this.gridsProsAlumno_Init();
        this.createMWs();
    },
    
	limpiarFind : function(ix) {
		editsProsAluCedula.hideId = -1;
		
  		switch (ix) {
		case 1: 
			editsProsAluNombre.setValue("");
			editsProsAluApellido.setValue("");  		
			break;
		case 2: 
			editsProsAluCedula.setValue("");
			editsProsAluApellido.setValue("");  		
			break;
		default:
			editsProsAluCedula.setValue("");
		    editsProsAluNombre.setValue("");
			break;
		} 
  	},

	buscar: function() {
		if (editsProsAluCedula.getValue() != '' || editsProsAluNombre.getValue() != '' || editsProsAluApellido.getValue() != '') {
			ResuBusqueda.setObjectExtFnc(editsProsAluCedula, editsProsAluNombre, editsProsAluApellido);
			Tool.getGridData('MantObject', 'getMantPersTodas', dialogsProsAlumno, gridsResuBusqueda, 'ResuBusqueda', editsProsAluCedula, editsProsAluCedula, editsProsAluNombre, editsProsAluNombre, editsProsAluApellido, editsProsAluApellido);
		}
		else {
			Alert.show('Debe ingresar al menos: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
	},
	
    setEvents: function(){
  		editsProsAluCedula.onEnter(this.windowName + ".buscar()");
  		editsProsAluCedula.onChange(this.windowName + ".limpiarFind(1)");
  		editsProsAluNombre.onEnter(this.windowName + ".buscar()");
  		editsProsAluNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsProsAluApellido.onEnter(this.windowName + ".buscar()");
  		editsProsAluApellido.onChange(this.windowName + ".limpiarFind(3)");
		powerComboBoxProsAluOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxProsAluSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		imgButtonsProsAluReporte.onClick(this.windowName + ".coreUpdate()");
		imgButtonsProsAluLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsProsAluSalir.onClick("dialogsProsAlumno.close()");
    },

   resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxProsAluSuborganizacion);
	  		Tool.rstPwrCmb(powerComboBoxProsAluCarrera);
	    	if (powerComboBoxProsAluOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsProsAlumno, powerComboBoxProsAluSuborganizacion, 1, 2, powerComboBoxProsAluOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(powerComboBoxProsAluCarrera);
	    	if (powerComboBoxProsAluSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsProsAlumno, powerComboBoxProsAluCarrera, -1, 3, powerComboBoxProsAluSuborganizacion);
		}
	},
	
	
	limpiar: function(){
		editsProsAluCedula.hideId = -1;
        editsProsAluCedula.setValue("");
        editsProsAluNombre.setValue("");
        editsProsAluApellido.setValue("");
        Tool.rstPwrCmb(powerComboBoxProsAluOrganizacion);
        Tool.rstPwrCmb(powerComboBoxProsAluSuborganizacion);
        Tool.rstPwrCmb(powerComboBoxProsAluCarrera);
		gridsProsAlumno.clean();
        dialogsProsAlumno.setMsg("");
		Tool.cnnSrv('MantObject', 'getDispProfesorInit', this.windowName + '.loadDataInit()');
    },
	
	reporte : function(){
		var aData = json('getProsecucionAlumno').data;
		
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		
		rep = new Report('portrait');
        rep.setPositionIcon(756,110);        
        rep.setHeadImage(imgEduca.banner,true);		
        rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,0.9),false);        
        rep.addHeadTitle('PROSECUCIÓN DEL ALUMNO',true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        //rep.addBar(0,152,1128,240,rep.getRGBAObj(187,196,238,0.8),false);
        rep.addLine(0,148,1128,148,rep.getRGBAObj(2,48,68,2),1,false); 
		rep.addLine(0,210,1128,210,rep.getRGBAObj(2,48,68,2),1,false); 
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),7,'helvetica','bold','black');        
        rep.addText(20, 165,'ORGANIZACION:          '+powerComboBoxProsAluOrganizacion.getOption(),false);rep.addText(20, 165,'ORGANIZACION:          '+powerComboBoxProsAluOrganizacion.getOption(),false);
        rep.addText(20, 182, 'SUBORGANIZACION:   '+powerComboBoxProsAluSuborganizacion.getOption(),false);rep.addText(20, 182, 'SUBORGANIZACION:   '+powerComboBoxProsAluSuborganizacion.getOption(),false);
        rep.addText(20, 199, 'CARRERA:                   '+powerComboBoxProsAluCarrera.getOption(),false);rep.addText(20, 199, 'CARRERA:                   '+powerComboBoxProsAluCarrera.getOption(),false);
		rep.addText(410, 165, 'C.I.:            '+editsProsAluCedula.getText(),false);rep.addText(410, 165, 'C.I.:            '+editsProsAluCedula.getText(),false);
		rep.addText(410, 182, 'NOMBRE:    '+editsProsAluNombre.getText(),false);rep.addText(410, 182, 'NOMBRE:    '+editsProsAluNombre.getText(),false);
		rep.addText(410, 199, 'APELLIDO:  '+editsProsAluApellido.getText(),false);rep.addText(410, 199, 'APELLIDO:  '+editsProsAluApellido.getText(),false); 		
		//////////////////////////////////////////TABLA DE DATOS///////////////////////////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);		
		rep.addTable('tablaAuditoria',['PERIODO','CODIGO','MATERIA','NOTA'],400,215);
		rep.setTotalRowTable(40);
		rep.setHeightRow(18); 
		rep.setSizeColumnArray([108,120,500,70]);
		rep.setAlignData(['center','left','left','center']); 
		rep.addMultiArrayData('tablaAuditoria', aData); rep.addMultiArrayData('tablaAuditoria', aData);		   
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
		var aux = '';
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (powerComboBoxProsAluCarrera.valid(dialogsProsAlumno))
			if (powerComboBoxProsAluSuborganizacion.valid(dialogsProsAlumno))
				if (editsProsAluCedula.valid(dialogsProsAlumno))
					if (editsProsAluNombre.valid(dialogsProsAlumno))
						if (editsProsAluApellido.valid(dialogsProsAlumno)) {
							aux = editsProsAluCedula.getValue();
							powerComboBoxProsAluCarrera.setModeReturnGetText(2);
							editsProsAluCedula.setValue(json('getMantPersTodas').data[3][0]);
							rlx.add('reg', editsProsAluCedula);
							rlx.add('reg', powerComboBoxProsAluCarrera);
							rlx.add('reg', editsProsAluCedula);
							rlx.add('reg', powerComboBoxProsAluCarrera);
							Tool.cnnSrv('ReportObject', 'getProsecucionAlumno', this.windowName + '.reporte()', rlx);
							editsProsAluCedula.setValue(aux);
						}
				
    } 
    
};

