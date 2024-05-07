var dialogsActiMenProgramados = new Object();
var tabsActiMenPro = new Object();
var pcbActiMenProOrg = new Object();
var pcbActiMenProSuborg = new Object();
var pcbActiMenProCarrera = new Object();
var gridsActMenMenProgramado = new Object();
var editsActiMenProTotSms = new Object();
var editsActiMenProCi = new Object();
var editsActiMenProNombre = new Object();
var editsActiMenProApellido = new Object();
var editsActiMenProSmsDisponibles = new Object();
var editsActiMenProSmsUtilizados = new Object();
var imgButtonsActiMenProActivar = new Object();
var imgButtonsActiMenProEliminar = new Object();
var imgButtonsActiMenProLimpiar = new Object();
var imgButtonsActiMenProBuscar = new Object();
var imgButtonsActiMenProSalir = new Object();
var mwActiMenProgramados  = new Object();// minWindow

var ActiMenProgramados = {
	windowName: 'ActiMenProgramados',
	isCreate: false,
	hideIdControlSms : 0,
	
	show: function(){
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsActiMenProgramados.isByClean()) 
			this.limpiar();
		dialogsActiMenProgramados.show();
	},
	
	hide: function(){
		dialogsActiMenProgramados.hide();
	},
	
	createMWs: function(){
		mwActiMenProgramados = desktop.addMinWindow('A. M. Programados', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsActiMenProgramados.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},
	
	dialogsActiMenProgramados_Init: function(){
		dialogsActiMenProgramados.setMinimizeXY(0, 0);
		dialogsActiMenProgramados.setCenterScreen();
		dialogsActiMenProgramados.addSpace(0, 0, 20);
		dialogsActiMenProgramados.addLn(0, 1, 1);
		dialogsActiMenProgramados.setHeightCell(0, 1, 15);
		dialogsActiMenProgramados.addObjToDialog(tabsActiMenPro, 1, 1, 24);
		dialogsActiMenProgramados.addLn(2, 1, 1);
		dialogsActiMenProgramados.setHeightCell(2, 1, 68);
		dialogsActiMenProgramados.addObjToDialog(imgButtonsActiMenProActivar, 3, 1);
		dialogsActiMenProgramados.addObjToDialog(imgButtonsActiMenProEliminar, 3, 1);
		dialogsActiMenProgramados.addObjToDialog(imgButtonsActiMenProLimpiar, 3, 1);
		dialogsActiMenProgramados.addObjToDialog(imgButtonsActiMenProBuscar, 3, 1);
		dialogsActiMenProgramados.addObjToDialog(imgButtonsActiMenProSalir, 3, 1);
        dialogsActiMenProgramados.adjAllMarginObj(3, 1, 25);
        dialogsActiMenProgramados.leftMarginObj(3, 1, 0, 115); 
	},
		
//PANEL//GRUPAL//
	tabsActiMenPro_Init: function(){
		tabsActiMenPro.showPanel(0); 
		tabsActiMenPro.setSizeText(11);
		tabsActiMenPro.setFontFamily('Tw Cen MT Condensed Extra Bold');
		tabsActiMenPro.setBorderWidthPanel(0);
		tabsActiMenPro.addLnToGridPanel(0, 10);
		var c1 = container.create("c1",'Selección de Grupo de Usuario', 120);
		c1.setDimension(789,55);
		c1.setMarginLeftBarTitle(340);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#1e1e1e');
		c1.addObject(pcbActiMenProOrg, 35,100);
		c1.addObject(pcbActiMenProSuborg, 270,100);
		c1.addObject(pcbActiMenProCarrera, 575,100);
	    c1.addObject(gridsActMenMenProgramado.getObject(),19,150);	
		tabsActiMenPro.addObjToGridPanel(0, c1, 2, 1);
		var c3 = container.create("c3");
		c3.addObject(editsActiMenProTotSms, 651,358);
		tabsActiMenPro.addObjToGridPanel(0, c3, 4, 1);
		//PANEL//USUARIO//
		tabsActiMenPro.addLnToGridPanel(1, 80);
		var c4 = container.create("c4",'Datos del Usuario', 120);
		c4.setDimension(790,130);
		c4.setMarginLeftBarTitle(348);
		c4.setPropertyMarco('groove',1,'#7e7e7e');
		c4.setFontTitle('verdana', 11, '#1e1e1e');
		c4.addObject(editsActiMenProCi, 35,185);
		c4.addObject(editsActiMenProNombre, 303,185);
		c4.addObject(editsActiMenProApellido, 577,185);
		c4.addObject(editsActiMenProSmsUtilizados, 35,235);
		c4.addObject(editsActiMenProSmsDisponibles, 303,235);
		tabsActiMenPro.addObjToGridPanel(1, c4, 2, 1);
	},

	gridsActMenMenProgramado_Init : function() {
		gridsActMenMenProgramado.setFixColRow(false,true);
        gridsActMenMenProgramado.addTitleVectorX(['Suborganización','Carrera','Periodo','Subtotal SMS','totalSms','idSuborg','idCarrera']);
        gridsActMenMenProgramado.showData();        
        gridsActMenMenProgramado.setSizeCol(1,273);
        gridsActMenMenProgramado.setSizeCol(2,273);
        gridsActMenMenProgramado.setSizeCol(3,150);
        gridsActMenMenProgramado.setSizeCol(4,90);
        gridsActMenMenProgramado.setSizeCol(5,0);
        gridsActMenMenProgramado.setSizeCol(6,0);
        gridsActMenMenProgramado.setSizeCol(7,0);
        gridsActMenMenProgramado.hideCol(5); 
        gridsActMenMenProgramado.hideCol(6); 
        gridsActMenMenProgramado.hideCol(7); 
	},	
	  
	create : function(){
		dialogsActiMenProgramados = dialogs.create('dialogsActiMenProgramados',0,0,831,390,'ACTIVAR MENSAJERIA');   
		dialogsActiMenProgramados.setAdjY(20);
		////////////////////////////////////////////////////////COMPONENTE TABS/////////////////////////////////////////////////////////////////////////////////////////
		tabsActiMenPro = tabs.create('tabsActiMenPro',812,240,['GRUPAL','USUARIO']); 
		//////////////////////////////////////////////////////INFORMACIÓN GRUPAL////////////////////////////////////////////////////////////////////////////////////////
		pcbActiMenProOrg = powerComboBox.create('pcbActiMenProOrg','pcbActiMenProOrg','Organización (+):',1,104);
		pcbActiMenProOrg.setValidEmpty();
		pcbActiMenProOrg.enableReadOnlyEditor();
		pcbActiMenProOrg.addEmptyOption();
		pcbActiMenProOrg.enableOnChangeToEmptyOption();
		pcbActiMenProOrg.setWidthCombo(77);
		pcbActiMenProSuborg = powerComboBox.create('pcbActiMenProSuborg','pcbActiMenProSuborg','Suborganización (^):',1,125);
		pcbActiMenProSuborg.setValidEmpty();
		pcbActiMenProSuborg.enableReadOnlyEditor();
		pcbActiMenProSuborg.addEmptyOption();
		pcbActiMenProSuborg.setFieldFind(true);
		pcbActiMenProSuborg.enableOnChangeToEmptyOption();
		pcbActiMenProCarrera = powerComboBox.create('pcbActiMenProCarrera','pcbActiMenProCarrera','Carrera (^):',1,70);
		pcbActiMenProCarrera.setValidEmpty();
		pcbActiMenProCarrera.enableReadOnlyEditor();
		pcbActiMenProCarrera.addEmptyOption();
		pcbActiMenProCarrera.setFieldFind(true);
		gridsActMenMenProgramado = grids.create('gridsActMenMenProgramado',8,7);
		editsActiMenProTotSms = edits.create('editsActiMenProTotSms','editsActiMenProTotSms','Total SMS:',1,70,'normal');
		editsActiMenProTotSms.setValidEmpty();
		editsActiMenProTotSms.readOnly(true);
		editsActiMenProTotSms.setSizeEdit(89);
		////////////////////////////////////////////////////////CONFIGURACION//USUARIO///////////////////////////////////////////////////////////////////
		editsActiMenProCi = edits.create('editsActiMenProCi','editsActiMenProCi','C.i. (*):',1,86,'normal');
		editsActiMenProCi.setValidInteger();
		editsActiMenProCi.setFieldFind(true); 
		editsActiMenProNombre = edits.create('editsActiMenProNombre','editsActiMenProNombre','Nombre (*):',1,101,'normal');
		editsActiMenProNombre.setValidEmpty();
		editsActiMenProNombre.setFieldFind(true);
		editsActiMenProApellido = edits.create('editsActiMenProApellido','editsActiMenProApellido','Apellido (*):',1,70,'normal');
		editsActiMenProApellido.setValidEmpty();
		editsActiMenProApellido.setFieldFind(true);
		editsActiMenProSmsUtilizados = edits.create('editsActiMenProSmsUtilizados','editsActiMenProSmsUtilizados','SMS Utilizado:',1,86,'normal');
		editsActiMenProSmsUtilizados.setValidEmpty();
		editsActiMenProSmsDisponibles = edits.create('editsActiMenProSmsDisponibles','editsActiMenProSmsDisponibles','SMS Disponible:',1,101,'normal');
		editsActiMenProSmsDisponibles.setValidEmpty();
		editsActiMenProCi.setSizeEdit(149);
		editsActiMenProCi.setMaxLength(50);
		editsActiMenProNombre.setSizeEdit(149);
		editsActiMenProNombre.setMaxLength(50);
		editsActiMenProApellido.setSizeEdit(149);
		editsActiMenProApellido.setMaxLength(50);
		editsActiMenProSmsUtilizados.readOnly(true);
		editsActiMenProSmsUtilizados.setSizeEdit(149);
		editsActiMenProSmsUtilizados.setMaxLength(50);
		editsActiMenProSmsDisponibles.readOnly(true);
		editsActiMenProSmsDisponibles.setSizeEdit(149);
		editsActiMenProSmsDisponibles.setMaxLength(50);
		imgButtonsActiMenProActivar = imgButtons.create('imgButtonsActiMenProActivar','Activar','ok.png');
		imgButtonsActiMenProEliminar = imgButtons.create('imgButtonsActiMenProEliminar','Eliminar','eliminar.png');
		imgButtonsActiMenProLimpiar = imgButtons.create('imgButtonsActiMenProLimpiar','Limpiar','limpiar.png');
		imgButtonsActiMenProBuscar = imgButtons.create('imgButtonsActiMenProBuscar','Buscar','icono_buscar.png');
		imgButtonsActiMenProSalir = imgButtons.create('imgButtonsActiMenProSalir','Salir','salir.png');
		imgButtonsActiMenProEliminar.setDisable();
        imgButtonsActiMenProActivar.setDimension(90,22);
        imgButtonsActiMenProEliminar.setDimension(90,22);
        imgButtonsActiMenProLimpiar.setDimension(90,22);
        imgButtonsActiMenProBuscar.setDimension(90,22);
        imgButtonsActiMenProSalir.setDimension(90,22); 
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsActiMenProgramados_Init();
		this.tabsActiMenPro_Init();
		this.gridsActMenMenProgramado_Init();
		this.createMWs(); 
	},
 
  	limpiarFind : function(ix) {
  		editsActiMenProCi.hideId = -1;
  		editsActiMenProSmsUtilizados.setValue("");
  		editsActiMenProSmsDisponibles.setValue("");
		imgButtonsActiMenProActivar.setDisable();
		imgButtonsActiMenProEliminar.setDisable();
		
  		switch (ix) {
		case 1: 
			editsActiMenProNombre.setValue("");
			editsActiMenProApellido.setValue("");  		
			break;
		case 2: 
			editsActiMenProCi.setValue("");
	  		editsActiMenProApellido.setValue("");  		
			break;
		default:
			editsActiMenProCi.setValue("");
			editsActiMenProNombre.setValue("");
			break;
		} 
  	},

  	resetElements : function(element) {
    	gridsActMenMenProgramado.clean();
    	editsActiMenProTotSms.setValue("");
		imgButtonsActiMenProEliminar.setDisable();
  		if (element == 'org') {
  			imgButtonsActiMenProActivar.setEnable();
			Tool.rstPwrCmb(pcbActiMenProSuborg);
			Tool.rstPwrCmb(pcbActiMenProCarrera);
			if (pcbActiMenProOrg.getOption() != "")
				Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsActiMenProgramados, pcbActiMenProSuborg, 1, 2, pcbActiMenProOrg);
		}
		else if (element == 'sub') {
			Tool.rstPwrCmb(pcbActiMenProCarrera);
			if (pcbActiMenProSuborg.getOption() != "")
				Tool.getPowerComboData('MantObject', 'getMantCarreraTodo', dialogsActiMenProgramados, pcbActiMenProCarrera, 2, 3, pcbActiMenProSuborg);			
		}
	},
	
	setData : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (gridsActMenMenProgramado.getDataCell(1) != "") {
	    	imgButtonsActiMenProActivar.setDisable();
			imgButtonsActiMenProEliminar.setEnable();
			pcbActiMenProSuborg.findOption(gridsActMenMenProgramado.getDataCell(6));
			rlx.add('reg', pcbActiMenProSuborg);
			Tool.cnnSrv('MantObject', 'getMantCarreraTodo', this.windowName + '.loadInit()', rlx);
        }     			
	},

	loadInit: function(){
		Tool.loadPowerComboData(dialogsActiMenProgramados, pcbActiMenProCarrera, 2, 3, json('getMantCarrera'));
		pcbActiMenProCarrera.findOption(gridsActMenMenProgramado.getDataCell(7));
	},

	activeButtonGrupal: function() {
		imgButtonsActiMenProActivar.setDisable();
		imgButtonsActiMenProEliminar.setEnable();
		editsActiMenProTotSms.setValue(json('getMsjPrgGrupal').data[4][0]);
	},
	
	buscar: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (tabsActiMenPro.getActualTab() == 0) {
			if (pcbActiMenProOrg.valid(dialogsActiMenProgramados)) {
        		Tool.getGridData('MsjObject', 'getActiMenProgramados', dialogsActiMenProgramados, gridsActMenMenProgramado, 'ActiMenProgramados.activeButtonGrupal()', pcbActiMenProOrg, pcbActiMenProSuborg, pcbActiMenProSuborg, pcbActiMenProCarrera, pcbActiMenProCarrera, pcbActiMenProOrg, pcbActiMenProSuborg, pcbActiMenProSuborg, pcbActiMenProCarrera, pcbActiMenProCarrera);
			}
    	}
		else {
			if ((editsActiMenProCi.getValue() != '' && editsActiMenProNombre.getValue() != '' && editsActiMenProApellido.getValue() != '')) {
				rlx.addInt('reg', editsActiMenProCi.hideId);
				Tool.cnnSrv('MsjObject', 'getResumeSMS', this.windowName + ".loadDataResumeSMS()", rlx);
			}
			else if (editsActiMenProCi.getValue() != '' || editsActiMenProNombre.getValue() != '' || editsActiMenProApellido.getValue() != '') {
				this.booCleanFind = true;
	        	ResuBusqueda.setObjectExtFnc(editsActiMenProCi, editsActiMenProNombre, editsActiMenProApellido, this.windowName + ".buscar()");
				Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsActiMenProCi, editsActiMenProCi, editsActiMenProNombre, editsActiMenProNombre, editsActiMenProApellido, editsActiMenProApellido);
			}
			else 
				Alert.show('Para buscar ingrese: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
	},
	
	loadDataResumeSMS: function() {
		if (json('getResumeSMS').data[0] == 0 && json('getResumeSMS').data[1] == 0) {
			editsActiMenProSmsUtilizados.setValue("");
			editsActiMenProSmsDisponibles.setValue("");
			imgButtonsActiMenProActivar.setEnable();
			imgButtonsActiMenProEliminar.setDisable();
		}
		else {
			this.hideIdControlSms = json('getResumeSMS').data[2];
			editsActiMenProSmsUtilizados.setValue(json('getResumeSMS').data[0]);
			editsActiMenProSmsDisponibles.setValue(json('getResumeSMS').data[1]);
			imgButtonsActiMenProActivar.setEnable();
			imgButtonsActiMenProEliminar.setEnable();
		}
	},
	
	setEvents: function() {
    	pcbActiMenProOrg.onChange(this.windowName + ".resetElements('org')");
    	pcbActiMenProSuborg.onChange(this.windowName + ".resetElements('sub')");
    	gridsActMenMenProgramado.onClickCells(this.windowName + ".setData()");

    	editsActiMenProCi.onEnter(this.windowName + ".buscar()");
    	editsActiMenProCi.onChange(this.windowName + ".limpiarFind(1)");
    	editsActiMenProCi.onClick(this.windowName + ".limpiarFind(1)");
    	editsActiMenProNombre.onEnter(this.windowName + ".buscar()");
    	editsActiMenProNombre.onChange(this.windowName + ".limpiarFind(2)");
    	editsActiMenProNombre.onClick(this.windowName + ".limpiarFind(2)");
    	editsActiMenProApellido.onEnter(this.windowName + ".buscar()");
    	editsActiMenProApellido.onChange(this.windowName + ".limpiarFind(3)");
    	editsActiMenProApellido.onClick(this.windowName + ".limpiarFind(3)");
    	
    	imgButtonsActiMenProActivar.onClick(this.windowName+".coreUpdate('activar')");
	    imgButtonsActiMenProEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
	    imgButtonsActiMenProLimpiar.onClick(this.windowName+".limpiar()");
	    imgButtonsActiMenProBuscar.onClick(this.windowName+".buscar()");
    	imgButtonsActiMenProSalir.onClick('dialogsActiMenProgramados.close()');	  	 	
    },
    
    limpiar: function(methodName) {
    	editsActiMenProCi.hideId = -1;
    	if (tabsActiMenPro.getActualTab() == 0) {
	    	if (methodName == "eliminar") {
	    		if (gridsActMenMenProgramado.getTotalRecord() == 1 || pcbActiMenProSuborg.getOption() == "") {
		    		pcbActiMenProSuborg.setSelectedIndex(0);
		    		Tool.rstPwrCmb(pcbActiMenProCarrera);
	    	    	editsActiMenProTotSms.setValue("");
	    			gridsActMenMenProgramado.clean();
		        	dlgWait.hide();
	    		}
	    		else {
		    		pcbActiMenProSuborg.setSelectedIndex(0);
		    		Tool.rstPwrCmb(pcbActiMenProCarrera);
		    		editsActiMenProTotSms.setValue("");
	    			this.buscar();
	    		}
	        }
	        else if (methodName == 'activar') { 
	        	this.buscar();
	        }	        	
        	else { 
    			Tool.getPowerComboData('MsjObject', 'getMantOrganizacion', dialogsActiMenProgramados, pcbActiMenProOrg, 0, 1);
    	    	Tool.rstPwrCmb(pcbActiMenProSuborg);
    	    	Tool.rstPwrCmb(pcbActiMenProCarrera);
    	    	gridsActMenMenProgramado.clean();
    	    	editsActiMenProTotSms.setValue("");
    	    }
	    	imgButtonsActiMenProActivar.setEnable();
			imgButtonsActiMenProEliminar.setDisable();
	    }
    	else {
    		if (methodName == 'activar') 
    			this.buscar();
    		else {
		    	editsActiMenProCi.setValue("");
		    	editsActiMenProNombre.setValue("");
		    	editsActiMenProApellido.setValue("");
		    	editsActiMenProSmsUtilizados.setValue("");
		    	editsActiMenProSmsDisponibles.setValue("");
				imgButtonsActiMenProActivar.setDisable();
				imgButtonsActiMenProEliminar.setDisable();
    		}
    	}
    	dialogsActiMenProgramados.setMsg("");
    },

    coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (tabsActiMenPro.getActualTab() == 0) {
			if (pcbActiMenProOrg.valid(dialogsActiMenProgramados)) {
				rlx.add('reg', pcbActiMenProOrg);
				rlx.add('reg', pcbActiMenProSuborg);
				rlx.add('reg', pcbActiMenProSuborg);
				rlx.add('reg', pcbActiMenProCarrera);
				rlx.add('reg', pcbActiMenProCarrera);
				Tool.cnnSrv('MsjObject', methodName + 'ActiMenProgGrupal', this.windowName + ".limpiar('" + methodName + "')", rlx);
			}
		}
		else {
			if (editsActiMenProCi.valid(dialogsActiMenProgramados)) 
				if (editsActiMenProNombre.valid(dialogsActiMenProgramados)) 
					if (editsActiMenProApellido.valid(dialogsActiMenProgramados)) { 
						if (methodName == 'activar') 
							rlx.addInt('reg', editsActiMenProCi.hideId);
						else 
							rlx.addInt('reg', this.hideIdControlSms);
						Tool.cnnSrv('MsjObject', methodName + 'ActiMenProgUsuario', this.windowName + ".limpiar('" + methodName + "')", rlx);
					}
		}
	}
};	
	