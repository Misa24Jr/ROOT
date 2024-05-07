include('js/edu/pla/ProcDispProf');
var dialogsDispProfesor = new Object();
var editsDispProCi = new Object();
var editsDispProNombre = new Object();
var editsDispProApellido = new Object();
var pcbDispProTipoHorario = new Object();
var pcbDispProPeriodo = new Object();
var pcbDispProOrg = new Object();
var tablesDispProfesor = new Object();
var imgButtonsDispProAgregar = new Object();
var imgButtonsDispProModificar = new Object();
var imgButtonsDispProEliminar = new Object();
var imgButtonsDispProLimpiar = new Object();
var imgButtonsDispProBuscar = new Object();
var imgButtonsDispProReporte = new Object();
var imgButtonsDispProSalir = new Object();
var mwDispProfesor = new Object();// minWindow

var DispProfesor = {
	windowName : 'DispProfesor',
	isCreate : false,
	hideIdPeriodo : 0,
	
	show : function() {
		if (!this.isCreate)	{
			this.init();
			this.isCreate = true;
		}
		if (dialogsDispProfesor.isByClean())
			this.limpiar();		
		dialogsDispProfesor.show();
	},

	hide : function() {
		dialogsDispProfesor.hide();
	},
	
	createMWs : function() {
        mwDispProfesor = desktop.addMinWindow('D.Profesor', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsDispProfesor.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsDispProfesor_Init : function() {
        dialogsDispProfesor.setMinimizeXY(0,0);
        dialogsDispProfesor.setCenterScreen();
        dialogsDispProfesor.addSpace(0,0,20);
        dialogsDispProfesor.addLn(1,1,1);
		dialogsDispProfesor.setHeightCell(1,1,0);
		dialogsDispProfesor.addObjToDialog(pcbDispProOrg,2,1,24);		
		dialogsDispProfesor.addObjToDialog(pcbDispProTipoHorario,2,1,24);               
        dialogsDispProfesor.addObjToDialog(pcbDispProPeriodo,2,1,24);
        dialogsDispProfesor.adjAllMarginObj(2,1,11); 
		dialogsDispProfesor.addObjToDialog(editsDispProCi,4,1,24);
		dialogsDispProfesor.addObjToDialog(editsDispProNombre,4,1,24);
		dialogsDispProfesor.addObjToDialog(editsDispProApellido,4,1,24);
        dialogsDispProfesor.adjAllMarginObj(4,1,11); 
		dialogsDispProfesor.addLn(5,1,1); 
		dialogsDispProfesor.setHeightCell(5,1,62);
        tablesDispProfesor.addRowsCols(ProcDispProf.maxRow,8);        
        tablesDispProfesor.addDinamicTextToHead(['HORAS','LUN','MAR','MIE','JUE','VIE','SAB','DOM']);
        tablesDispProfesor.setWidthCell(1,0,112);
        tablesDispProfesor.setObjAttrib(attrib, ambiente);
        for(var i=1; i<8; i++){
        	tablesDispProfesor.setWidthCell(1,i,94);
        }
        for(var i=0; i<8; i++){
        	tablesDispProfesor.textAlignCell(0,i,'center');
        	tablesDispProfesor.rows[0].cells[i].style.borderStyle ='none';
        	tablesDispProfesor.rows[0].cells[i].style.borderWidth ='0px'; 
        	tablesDispProfesor.rows[0].cells[i].style.backgroundColor = attrib.Color.bgBarraTitle[ambiente];
        }              
        for(i=1; i<ProcDispProf.maxRow + 1; i++){
        	tablesDispProfesor.setHeightRow(i,20);
        	tablesDispProfesor.setFontCell(i,0,'verdana',12,'black');
        	tablesDispProfesor.textAlignCell(i,0,'center');
        	for(var j=0; j<8; j++){
        		tablesDispProfesor.rows[i].cells[j].style.borderStyle ='none';
        		tablesDispProfesor.rows[i].cells[j].style.borderWidth ='0px'; 
          	} 
        }
		dialogsDispProfesor.addObjToDialog(tablesDispProfesor, 6, 1);
        dialogsDispProfesor.addObject(imgButtonsDispProAgregar,20,80);
        dialogsDispProfesor.addObject(imgButtonsDispProModificar,135,80);
        dialogsDispProfesor.addObject(imgButtonsDispProEliminar,250,80);
        dialogsDispProfesor.addObject(imgButtonsDispProLimpiar,365,80);
        dialogsDispProfesor.addObject(imgButtonsDispProReporte,480,80);        
        dialogsDispProfesor.addObject(imgButtonsDispProBuscar,595,80);  
        dialogsDispProfesor.addObject(imgButtonsDispProSalir,710,80);
        
        tablesDispProfesor.setAttribute("border","0");
        tablesDispProfesor.setAttribute("cellPadding","0");
        tablesDispProfesor.setAttribute("cellSpacing","1px");   
        tablesDispProfesor.style.borderStyle ='none';
        tablesDispProfesor.style.borderWidth ='0px';
        tablesDispProfesor.style.backgroundColor ='#aeaeae';
	},
    
	create : function() {					  		
		dialogsDispProfesor = dialogs.create('dialogsDispProfesor',0,0,820,89,'DISPONIBILIDAD DEL PROFESOR');
		dialogsDispProfesor.setAdjY(180);
		editsDispProCi = edits.create('editsDispProCi','editsDispProCi','C.I. (*):',1,112,'normal');
		editsDispProCi.setValidInteger();
		editsDispProCi.setFieldFind(true);
		editsDispProNombre = edits.create('editsDispProNombre','editsDispProNombre','Nombre (*):',1,122,'normal');
		editsDispProNombre.setValidEmpty();
		editsDispProNombre.setFieldFind(true);
		editsDispProApellido = edits.create('editsDispProApellido','editsDispProApellido','Apellido (*):',1,83,'normal');
		editsDispProApellido.setValidEmpty();
		editsDispProApellido.setFieldFind(true);
		editsDispProCi.setSizeEdit(149);
		editsDispProNombre.setSizeEdit(149); 
		editsDispProNombre.setMaxLength(50); 
        editsDispProApellido.setSizeEdit(149);
		editsDispProApellido.setMaxLength(50);       
		pcbDispProOrg = powerComboBox.create('pcbDispProOrg','pcbDispProOrg','Organización (+):',1,112);
		pcbDispProOrg.setValidEmpty();
		pcbDispProOrg.addEmptyOption();
		pcbDispProOrg.enableReadOnlyEditor();
		pcbDispProTipoHorario = powerComboBox.create('pcbDispProTipoHorario','pcbDispProTipoHorario','Tipo de Horario (^):',1,122);
		pcbDispProTipoHorario.setValidEmpty();
		pcbDispProTipoHorario.addEmptyOption();
		pcbDispProTipoHorario.enableReadOnlyEditor();
		pcbDispProPeriodo = powerComboBox.create('pcbDispProPeriodo','pcbDispProPeriodo','Periodo (+):',1,83);
		pcbDispProPeriodo.setValidEmpty();
		pcbDispProPeriodo.addEmptyOption();
		pcbDispProPeriodo.enableReadOnlyEditor();
		tablesDispProfesor = tables.create('tablesDispProfesor');
		tablesDispProfesor.createHead();
		imgButtonsDispProAgregar = imgButtons.create('imgButtonsDispProAgregar','Agregar','ok.png');
		imgButtonsDispProModificar = imgButtons.create('imgButtonsDispProModificar','Modificar','icono_modificar.png');
		imgButtonsDispProEliminar = imgButtons.create('imgButtonsDispProEliminar','Eliminar','eliminar.png');
		imgButtonsDispProLimpiar = imgButtons.create('imgButtonsDispProLimpiar','Limpiar','limpiar.png');
		imgButtonsDispProBuscar = imgButtons.create('imgButtonsDispProBuscar','Buscar','icono_buscar.png');
		imgButtonsDispProReporte = imgButtons.create('imgButtonsDispProReporte','Reporte','print.png');      
		imgButtonsDispProSalir = imgButtons.create('imgButtonsDispProSalir','Salir','salir.png');
        imgButtonsDispProAgregar.setDimension(90,22);
        imgButtonsDispProModificar.setDimension(90,22);
        imgButtonsDispProEliminar.setDimension(90,22);
        imgButtonsDispProLimpiar.setDimension(90,22);
        imgButtonsDispProBuscar.setDimension(90,22);
        imgButtonsDispProReporte.setDimension(90,22);        
        imgButtonsDispProSalir.setDimension(90,22);
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsDispProfesor_Init();
		this.createMWs();
	},

	offBtn : function() {
		if (ProcDispProf.getCount() > 0 && !imgButtonsDispProAgregar.enable) {
			imgButtonsDispProModificar.setEnable();
			imgButtonsDispProEliminar.setEnable();
			imgButtonsDispProReporte.setDisable();	
		}
	},
  
  	limpiarFind : function(ix) {
  		editsDispProCi.hideId = -1;
  		
  		switch (ix) {
		case 1: 
	  		editsDispProNombre.setValue("");
	  		editsDispProApellido.setValue("");  		
			break;
		case 2: 
	  		editsDispProCi.setValue("");
	  		editsDispProApellido.setValue("");  		
			break;
		default:
	  		editsDispProCi.setValue("");
  			editsDispProNombre.setValue("");
			break;
		} 
  	},

  	limpiar : function() {
  		ProcDispProf.clearHorario();
  		ProcDispProf.clearData();
  		editsDispProCi.hideId = -1;
  		editsDispProCi.clear();
  		editsDispProNombre.clear();
  		editsDispProApellido.clear();  
		Tool.rstPwrCmb(pcbDispProTipoHorario);		
		Tool.rstPwrCmb(pcbDispProPeriodo);		
  		Tool.rstPwrCmb(pcbDispProOrg);
  		dialogsDispProfesor.setMsg("");
  		imgButtonsDispProAgregar.setDisable();
  		imgButtonsDispProModificar.setDisable();
  		imgButtonsDispProEliminar.setDisable();
  		imgButtonsDispProReporte.setDisable();	
		Tool.cnnSrv('MantObject', 'getDispProfesorInit', this.windowName + '.loadDataInit()');
  	},
  	
    loadDataInit: function() {
        Tool.loadPowerComboData(dialogsDispProfesor, pcbDispProOrg, 0, 1, json('getData'));
        Tool.loadPowerComboData(dialogsDispProfesor, pcbDispProPeriodo, 0, 1, json('getMantPeriodoActivoPlan'));
    	Tool.getContext(dialogsDispProfesor, pcbDispProOrg, null, null, this.windowName + '.loadHorarioXOrg()');
        dialogsDispProfesor.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    loadHorarioXOrg : function() {
    	var rlx = xmlStructs.createRecordList("rlx");

  		editsDispProCi.hideId = -1;
  		editsDispProCi.clear();
  		editsDispProNombre.clear();
  		editsDispProApellido.clear();  
  		imgButtonsDispProAgregar.setDisable();
  		imgButtonsDispProModificar.setDisable();
  		imgButtonsDispProEliminar.setDisable();
  		imgButtonsDispProReporte.setDisable();	
    	Tool.rstPwrCmb(pcbDispProTipoHorario);
  		ProcDispProf.clearHorario();
  		ProcDispProf.clearData();
    	rlx.add('reg', pcbDispProOrg); 
        Tool.cnnSrv('CrearCursoObject', 'getMantSuborganizacion', this.windowName + '.loadDataTipoHorario()', rlx);
    },
    
    loadDataTipoHorario : function() {
    	Tool.loadPowerComboData(dialogsDispProfesor, pcbDispProTipoHorario, 0, 1, json('getTipoHorarioXOrg'));
    	pcbDispProTipoHorario.setSelectedIndex(1);
    	this.getHorario();
    },    
    
    buscar : function() {
  		ProcDispProf.clearData();
  		imgButtonsDispProModificar.setDisable();
  		imgButtonsDispProEliminar.setDisable();	
  		imgButtonsDispProReporte.setDisable();	
		if (pcbDispProOrg.valid(dialogsDispProfesor)) 
			if (pcbDispProTipoHorario.valid(dialogsDispProfesor)) 
				if (pcbDispProPeriodo.valid(dialogsDispProfesor)) 
					if (editsDispProCi.getValue() != '' && editsDispProNombre.getValue() != '' && editsDispProApellido.getValue() != '') {
						this.getDispProf();
					}
					else 
						if (pcbDispProOrg.valid(dialogsDispProfesor)) 
							if (pcbDispProTipoHorario.valid(dialogsDispProfesor)) 
								if (pcbDispProPeriodo.valid(dialogsDispProfesor)) 
									if (editsDispProCi.getValue() != '' || editsDispProNombre.getValue() != '' || editsDispProApellido.getValue() != '') {
									  	imgButtonsDispProAgregar.setDisable();
								        ResuBusqueda.setObjectExtFnc(editsDispProCi, editsDispProNombre, editsDispProApellido, 'DispProfesor.buscar()');
										Tool.getGridData('MantObject', 'getMantPersProf', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsDispProCi, editsDispProCi, editsDispProNombre, editsDispProNombre, editsDispProApellido, editsDispProApellido);
									}
									else {
										Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
									}
   	},

    getDispProf: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		rlx.add('reg',editsDispProCi);
		rlx.add('reg',pcbDispProTipoHorario);
		rlx.add('reg',pcbDispProPeriodo);
		imgButtonsDispProAgregar.setEnable();
		Tool.cnnSrv('MantObject', 'getDispProfesor', this.windowName + '.loadDispProf()', rlx);
    },
  
    loadDispProf: function() {
  		imgButtonsDispProAgregar.setDisable();
  		imgButtonsDispProEliminar.setEnable();	
  		imgButtonsDispProReporte.setEnable();	
		ProcDispProf.setData(json('getDispProfesor').data);
    	dialogsDispProfesor.setMsg(xmlHttpReq.objStsResponse.shortInfo);
    	dlgWait.hide();
    },
   	
    setHorario : function() {
  		imgButtonsDispProAgregar.setDisable();
  		imgButtonsDispProModificar.setDisable();
  		imgButtonsDispProEliminar.setDisable();
  		imgButtonsDispProReporte.setDisable();	
  		ProcDispProf.clearData();
  		imgButtonsDispProAgregar.setDisable();
  		imgButtonsDispProModificar.setDisable();
  		imgButtonsDispProEliminar.setDisable();
  		imgButtonsDispProReporte.setDisable();	
  		this.getHorario();		
  	},
	
	setEvents : function() {
	  	pcbDispProOrg.onChange(this.windowName + '.loadHorarioXOrg()');
		pcbDispProTipoHorario.onChange(this.windowName + ".setHorario()");
	  	editsDispProCi.onEnter(this.windowName + ".buscar()");
	  	editsDispProCi.onChange(this.windowName + ".limpiarFind(1)");
	  	editsDispProCi.onClick(this.windowName + ".limpiarFind(1)");
	  	editsDispProNombre.onEnter(this.windowName + ".buscar()");
	  	editsDispProNombre.onChange(this.windowName + ".limpiarFind(2)");
	  	editsDispProNombre.onClick(this.windowName + ".limpiarFind(2)");
	  	editsDispProApellido.onEnter(this.windowName + ".buscar()");
	  	editsDispProApellido.onChange(this.windowName + ".limpiarFind(3)");
	  	editsDispProApellido.onClick(this.windowName + ".limpiarFind(3)");
		ProcDispProf.onClick('DispProfesor.offBtn()');
	    imgButtonsDispProAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsDispProModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsDispProEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
	  	imgButtonsDispProLimpiar.onClick('DispProfesor.limpiar()');
	  	imgButtonsDispProBuscar.onClick('DispProfesor.buscar()');
	  	imgButtonsDispProReporte.onClick('DispProfesor.reporte()');
	  	imgButtonsDispProSalir.onClick('dialogsDispProfesor.close()');	 
    },
   
    getHorario: function() {
    	var rlx = xmlStructs.createRecordList("rlx");
    	
    	ProcDispProf.clearHorario();
    	ProcDispProf.clearData();
		rlx.add('reg',pcbDispProTipoHorario);
		Tool.cnnSrv('MantObject', 'getHorario', this.windowName + '.loadHorario()', rlx);
	},
  
	loadHorario: function() {
		ProcDispProf.init(tablesDispProfesor, json('getHorario').data);
		dialogsDispProfesor.setMsg(xmlHttpReq.objStsResponse.shortInfo);
		pcbDispProPeriodo.setSelectedIndex(1);
		dlgWait.hide();
		if (editsDispProCi.getValue() != '' && editsDispProNombre.getValue() != '' && editsDispProApellido.getValue() != '')
			this.buscar();
	},

	limpiarCoreUpdate : function() {
  		ProcDispProf.clearData();
		imgButtonsDispProAgregar.setDisable();
  		imgButtonsDispProModificar.setDisable();
  		imgButtonsDispProEliminar.setDisable();	
  		imgButtonsDispProReporte.setEnable();	
  		dialogsDispProfesor.setMsg("");
  		dlgWait.hide();
  		this.getDispProf();
  	},

  	coreUpdate: function(methodName) {
		if (pcbDispProTipoHorario.valid(dialogsDispProfesor)) 
			if (pcbDispProOrg.valid(dialogsDispProfesor)) 
				if (editsDispProCi.valid(dialogsDispProfesor)) 
					if (ProcDispProf.getCount() > 0) {
						if (ProcDispProf.countBusy() == 0 || methodName != 'eliminar') {
							Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()', ProcDispProf);
						}
						else {
							Alert.show('Imposible eliminar el horario, el profesor presenta carga academica.', 'SISTEMA', Alert.TYPE_WARNING);
						}
					}
					else {
						Alert.show('Debe ingresar un horario de disponibilidad.', 'SISTEMA', Alert.TYPE_WARNING);
					}
	},
	
	reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
		rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),15,'courier','bold');
		rep.addBar(0,100,1140,140,rep.getRGBAObj(210,210,200,0.9),false);
        rep.addHeadTitle('DISPONIBILIDAD DEL PROFESOR',true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),9,'courier','bold');
        rep.addBar(0,152,1128,220,rep.getRGBAObj(187,196,238,0.8),false);
        rep.addLine(0,146,1128,146,rep.getRGBAObj(210,210,210,1),1,false);
        rep.addLine(0,226,1128,226,rep.getRGBAObj(210,210,210,1),1,false); 
		rep.addText(20, 190,'CEDULA:',false);
        rep.addText(80, 190,editsDispProCi.getValue(),false);
		rep.addText(200, 190, 'NOMBRE:',false);
		rep.addText(260, 190,editsDispProNombre.getValue(),false);
		rep.addText(420, 190, 'APELLIDO:',false);
		rep.addText(495, 190,editsDispProApellido.getValue(),false);
		//////////////////////////////////////////GENERACION DE TABLA///////////////////////////////////////////////////////////////////////////////////////////
        rep.addDispProf(4,235);
		//////////////////////////////////////////BARRA MENSAJE FINAL REPORTE///////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),15,'courier','bold');
		rep.addBar(0,960,1140,1010,rep.getRGBAObj(210,210,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),7.5,'courier','bold');
        rep.addText(20, 986,'Nota: Solo para uso exclusivo del personal académico de la institución, acarrea sanciones administrativas en otras manos',false);
		///////////////////////////////////////INSERCION DE IMAGEN DEL REPORTE/////////////////////////////////////////////////////////////////////////////////
		rep.addImage(720,153,792,220,'images/pht/'+editsDispProCi.getValue()+'.jpg',true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	}
};
