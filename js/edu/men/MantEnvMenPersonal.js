var dialogsMantEnvMenPersonal = new Object();
var tabsMantEnvMenPersonal = new Object();
var editsMantEnvMenPerCi = new Object();
var editsMantEnvMenPerNombre = new Object();
var editsMantEnvMenPerApellido = new Object();
var pcbMantEnvMenPeriodo = new Object();
var pcbMantEnvMenLapso = new Object();
var pcbMantEnvMenPerGrupo = new Object();
var pcbMantEnvMenPerOrg = new Object();
var pcbMantEnvMenPerSuborg = new Object();
var pbcMantEnvMenPerCarrera = new Object();
var pcbMantEnvMenPerPosicion = new Object();
var calendarsMantEnvMenPerDeuda = new Object();
var pcbMantEnvMenPerMateria = new Object();
var pcbMantEnvMenPerSeccion = new Object();
var exchangeListMantEnvMenPersonal = new Object();
var pcbMantEnvMenPerMenPredefinidos = new Object();
var labelsMantEnvMenPerAsunto = new Object();
var labelsMantEnvMenPerContenido = new Object();
var memoMantEnvMenPerMenConMensaje = new Object();
var imgButtonsMantEnvMenPerAdjuntar = new Object();
var imgButtonsMantEnvMenPerEnviarEmail = new Object();
var imgButtonsMantEnvMenPerEnviarBoletin = new Object();
var imgButtonsMantEnvMenPerEnviarTexto = new Object();
var imgButtonsMantEnvMenPerBuscar = new Object();
var imgButtonsMantEnvMenPerLimpiar = new Object();
var imgButtonsMantEnvMenPerSalir = new Object();
var mwMantEnvMenPersonal = new Object();// minWindow

var MantEnvMenPersonal = {
    windowName: 'MantEnvMenPersonal',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsMantEnvMenPersonal.isByClean()) 
            this.limpiar();
        dialogsMantEnvMenPersonal.show();
    },
    
    hide: function() {
        dialogsMantEnvMenPersonal.hide();
    },
    
    createMWs: function() {
        mwMantEnvMenPersonal = desktop.addMinWindow('Mensaje', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantEnvMenPersonal.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsMantEnvMenPersonal_Init: function() {
        dialogsMantEnvMenPersonal.setMinimizeXY(0, 0);
        dialogsMantEnvMenPersonal.setCenterScreen();
        dialogsMantEnvMenPersonal.addSpace(0, 0, 20);
        dialogsMantEnvMenPersonal.addLn(1, 1, 1);
		dialogsMantEnvMenPersonal.setHeightCell(1,1,14);
		dialogsMantEnvMenPersonal.addObjToDialog(tabsMantEnvMenPersonal, 2, 1,24);
        dialogsMantEnvMenPersonal.addLn(5, 1, 1);
		dialogsMantEnvMenPersonal.setHeightCell(5,1,2);
        dialogsMantEnvMenPersonal.addObjToDialog(exchangeListMantEnvMenPersonal, 6, 1);
		exchangeListMantEnvMenPersonal.setBorderStyleBarraTitle('outset');
		exchangeListMantEnvMenPersonal.setFontTitle('verdana',12,'white');
        dialogsMantEnvMenPersonal.addLn(7, 1, 2);
		dialogsMantEnvMenPersonal.setHeightCell(7,1,30);
		dialogsMantEnvMenPersonal.addObjToDialog(labelsMantEnvMenPerAsunto,8,1,16);
		labelsMantEnvMenPerAsunto.setFont('arial black','12','Black');
		dialogsMantEnvMenPersonal.leftMarginObj(8, 1, 0, 380);
		dialogsMantEnvMenPersonal.addObjToDialog(pcbMantEnvMenPerMenPredefinidos, 9, 1,24);
        pcbMantEnvMenPerMenPredefinidos.setWidthCombo(670);
		dialogsMantEnvMenPersonal.addObject(imgButtonsMantEnvMenPerAdjuntar, 728,453);	
		dialogsMantEnvMenPersonal.addLn(10, 1, 1);
		dialogsMantEnvMenPersonal.setHeightCell(10,1,7);
		dialogsMantEnvMenPersonal.addObjToDialog(labelsMantEnvMenPerContenido,11,1,16);
		labelsMantEnvMenPerContenido.setFont('arial black','12','Black');
		dialogsMantEnvMenPersonal.leftMarginObj(11, 1, 0, 368);
		dialogsMantEnvMenPersonal.addObject(memoMantEnvMenPerMenConMensaje, 20,502);
        memoMantEnvMenPerMenConMensaje.setDimension(804, 70);
        dialogsMantEnvMenPersonal.addLn(13, 1, 1);
		dialogsMantEnvMenPersonal.setHeightCell(13,1,89);
        dialogsMantEnvMenPersonal.addObjToDialog(imgButtonsMantEnvMenPerEnviarTexto, 14, 1);
        dialogsMantEnvMenPersonal.addObjToDialog(imgButtonsMantEnvMenPerEnviarEmail, 14, 1);        
        dialogsMantEnvMenPersonal.addObjToDialog(imgButtonsMantEnvMenPerEnviarBoletin, 14, 1);        
        dialogsMantEnvMenPersonal.addObjToDialog(imgButtonsMantEnvMenPerLimpiar, 14, 1);
        dialogsMantEnvMenPersonal.addObjToDialog(imgButtonsMantEnvMenPerBuscar, 14, 1);	
        dialogsMantEnvMenPersonal.addObjToDialog(imgButtonsMantEnvMenPerSalir, 14, 1);
        imgButtonsMantEnvMenPerAdjuntar.setDimension(100, 22);
		imgButtonsMantEnvMenPerEnviarTexto.setDimension(110, 22);
        imgButtonsMantEnvMenPerEnviarEmail.setDimension(110, 22);
        imgButtonsMantEnvMenPerEnviarBoletin.setDimension(110, 22);
        imgButtonsMantEnvMenPerBuscar.setDimension(110, 22);
        imgButtonsMantEnvMenPerLimpiar.setDimension(110, 22);
        imgButtonsMantEnvMenPerSalir.setDimension(110, 22);
        dialogsMantEnvMenPersonal.adjAllMarginObj(14, 1, 20);
        dialogsMantEnvMenPersonal.leftMarginObj(14, 1, 0, 19);
    },
		
	tabsMantEnvMenPersonal_Init : function() {
		tabsMantEnvMenPersonal.selectTab(0);
		tabsMantEnvMenPersonal.setSizeText(12);
		tabsMantEnvMenPersonal.setFontFamily('Tw Cen MT Condensed Extra Bold');
		tabsMantEnvMenPersonal.setBorderWidthPanel(0);
		//////////////////////////PANEL//ENVIO//POR//ALUMNO////////////////////////////////////////////////////////////////////////////
		tabsMantEnvMenPersonal.addLnToGridPanel(0, 15)
		var c1 = container.create("c1");
		c1.addObject(editsMantEnvMenPerCi, 20, 80);
		editsMantEnvMenPerCi.setSizeEdit(149);
		c1.addObject(editsMantEnvMenPerNombre, 295, 80);
		editsMantEnvMenPerNombre.setSizeEdit(149);
		editsMantEnvMenPerNombre.setMaxLength(50); 
		c1.addObject(editsMantEnvMenPerApellido, 590, 80);
		editsMantEnvMenPerApellido.setSizeEdit(149);
		editsMantEnvMenPerApellido.setMaxLength(50); 
		tabsMantEnvMenPersonal.addObjToGridPanel(0, c1, 1, 1);
		var c2 = container.create("c2");
		c2.addObject(pcbMantEnvMenPerOrg, 20, 105);
		c2.addObject(pcbMantEnvMenPerSuborg, 295, 105);
		c2.addObject(pbcMantEnvMenPerCarrera, 590, 105);
		tabsMantEnvMenPersonal.addObjToGridPanel(0, c2, 1, 1);
		var c3 = container.create("c3");
		c3.addObject(pcbMantEnvMenPeriodo, 20, 130);
		c3.addObject(pcbMantEnvMenPerPosicion, 295, 130);
		c3.addObject(pcbMantEnvMenPerSeccion, 590, 130);
		c3.addObject(calendarsMantEnvMenPerDeuda, 20, 155);
		c3.addObject(pcbMantEnvMenPerMateria, 295, 155);
		c3.addObject(pcbMantEnvMenLapso, 590, 155);
		tabsMantEnvMenPersonal.addObjToGridPanel(0, c3, 1, 1);
		//////////////////////////////TAB//ENVIO//GRUPO/////////////////////////////////////////////////////////////////////////
		var c2 = container.create("c2");
		c2.addObject(pcbMantEnvMenPerGrupo, 20, 130);
		tabsMantEnvMenPersonal.addObjToGridPanel(1, c2, 1, 1);
	},
    
   	create: function() {
        dialogsMantEnvMenPersonal = dialogs.create('dialogsMantEnvMenPersonal', 0, 0, 850, 597, 'ENVIO DE MENSAJE');
		dialogsMantEnvMenPersonal.setAdjY(20);
		tabsMantEnvMenPersonal = tabs.create('tabsMantEnvMenPersonal', 812, 114, ['BUSCAR POR PERSONA','BUSCAR POR GRUPO']);
        pcbMantEnvMenPerOrg = powerComboBox.create('pcbMantEnvMenPerOrg', 'pcbMantEnvMenPerOrg', 'Organización (+):', 1,105);
        pcbMantEnvMenPerOrg.setValidEmpty();
        pcbMantEnvMenPerOrg.addEmptyOption();
        pcbMantEnvMenPerOrg.enableReadOnlyEditor();
        pcbMantEnvMenPerOrg.enableOnChangeToEmptyOption();
        
        pcbMantEnvMenPerSuborg = powerComboBox.create('pcbMantEnvMenPerSuborg', 'pcbMantEnvMenPerSuborg', 'Suborganización (*):', 1,125);
        pcbMantEnvMenPerSuborg.setValidEmpty();
        pcbMantEnvMenPerSuborg.addEmptyOption();
        pcbMantEnvMenPerSuborg.enableReadOnlyEditor();
        pcbMantEnvMenPerSuborg.setFieldFind(true);
        pcbMantEnvMenPerSuborg.enableOnChangeToEmptyOption();
        
        pbcMantEnvMenPerCarrera = powerComboBox.create('pbcMantEnvMenPerCarrera', 'pbcMantEnvMenPerCarrera', 'Carrera (*):', 1,72);
        pbcMantEnvMenPerCarrera.setValidEmpty();
        pbcMantEnvMenPerCarrera.addEmptyOption();
        pbcMantEnvMenPerCarrera.enableReadOnlyEditor();
        pbcMantEnvMenPerCarrera.setFieldFind(true);
        pbcMantEnvMenPerCarrera.enableOnChangeToEmptyOption();
		
		pcbMantEnvMenPerPosicion = powerComboBox.create('pcbMantEnvMenPerPosicion','pcbMantEnvMenPerPosicion','Posición (*):',1,125);
		pcbMantEnvMenPerPosicion.setValidEmpty();
		pcbMantEnvMenPerPosicion.enableReadOnlyEditor();
		pcbMantEnvMenPerPosicion.addEmptyOption();
		pcbMantEnvMenPerPosicion.setFieldFind(true);
		pcbMantEnvMenPerPosicion.enableOnChangeToEmptyOption();
        
        pcbMantEnvMenPerSeccion = powerComboBox.create('pcbMantEnvMenPerSeccion', 'pcbMantEnvMenPerSeccion', 'Sección (*):', 1,72);
		pcbMantEnvMenPerSeccion.setDataType('string');
        pcbMantEnvMenPerSeccion.setValidEmpty();
        pcbMantEnvMenPerSeccion.addEmptyOption();
        pcbMantEnvMenPerSeccion.enableReadOnlyEditor();
        pcbMantEnvMenPerSeccion.setFieldFind(true);
        
    	calendarsMantEnvMenPerDeuda = calendars.create('calendarsMantEnvMenPerDeuda');      
        calendarsMantEnvMenPerDeuda.setValidEmpty();
		calendarsMantEnvMenPerDeuda.setWidthEditCalendar(127);
    	calendarsMantEnvMenPerDeuda.setCaption('Fecha Deuda (*):',1, 105);
    	calendarsMantEnvMenPerDeuda.sendToFrom(100);

        pcbMantEnvMenPerMateria = powerComboBox.create('pcbMantEnvMenPerMateria', 'pcbMantEnvMenPerMateria', 'Materia (*):', 1,125);
		pcbMantEnvMenPerMateria.setDataType('string');
        pcbMantEnvMenPerMateria.setValidEmpty();
        pcbMantEnvMenPerMateria.addEmptyOption();
        pcbMantEnvMenPerMateria.enableReadOnlyEditor();
        pcbMantEnvMenPerMateria.setFieldFind(true);
        
        pcbMantEnvMenPeriodo = powerComboBox.create('pcbMantEnvMenPeriodo', 'pcbMantEnvMenPeriodo', 'Periodo (+):', 1,105);
        pcbMantEnvMenPeriodo.setValidEmpty();
        pcbMantEnvMenPeriodo.addEmptyOption();
        pcbMantEnvMenPeriodo.enableReadOnlyEditor();
        pcbMantEnvMenPeriodo.setFieldFind(true);
        
        pcbMantEnvMenLapso = powerComboBox.create('pcbMantEnvMenLapso', 'pcbMantEnvMenLapso', 'Lapso :', 1,72);
        pcbMantEnvMenLapso.setValidEmpty();
        pcbMantEnvMenLapso.addEmptyOption();
        pcbMantEnvMenLapso.enableReadOnlyEditor();

        editsMantEnvMenPerCi = edits.create('editsMantEnvMenPerCi', 'editsMantEnvMenPerCi', 'C.I. (*):', 1,105, 'normal');
        editsMantEnvMenPerCi.setValidInteger();
		editsMantEnvMenPerCi.setFieldFind(true);
        editsMantEnvMenPerNombre = edits.create('editsMantEnvMenPerNombre', 'editsMantEnvMenPerNombre', 'Nombre (*):', 1,125, 'normal');
        editsMantEnvMenPerNombre.setValidEmpty();
		editsMantEnvMenPerNombre.setFieldFind(true);
        editsMantEnvMenPerApellido = edits.create('editsMantEnvMenPerApellido', 'editsMantEnvMenPerApellido', 'Apellido (*):', 1,72, 'normal');
        editsMantEnvMenPerApellido.setValidEmpty();
		editsMantEnvMenPerApellido.setFieldFind(true);
		pcbMantEnvMenPerGrupo = powerComboBox.create('pcbMantEnvMenPerGrupo', 'pcbMantEnvMenPerGrupo', 'Grupo (+):', 1,70);
        pcbMantEnvMenPerGrupo.setValidEmpty();
        pcbMantEnvMenPerGrupo.addEmptyOption();
        pcbMantEnvMenPerGrupo.enableReadOnlyEditor();
        pcbMantEnvMenPerGrupo.setTypeObjOpt('input', 'checkbox');
        pcbMantEnvMenPerGrupo.setFirstRowCheckMode(2);
		pcbMantEnvMenPerGrupo.setWidthCombo(300);
        exchangeListMantEnvMenPersonal = exchangeList.create('exchangeListMantEnvMenPersonal', 728, 219, 'Selección de Personas', 'Persona', 'Destinatario');
		pcbMantEnvMenPerMenPredefinidos = powerComboBox.create('pcbMantEnvMenPerMenPredefinidos', 'pcbMantEnvMenPerMenPredefinidos', '', 1,0);
        pcbMantEnvMenPerMenPredefinidos.addEmptyOption();
		pcbMantEnvMenPerMenPredefinidos.setFieldFind(true);
		labelsMantEnvMenPerAsunto = labels.create('labelsMantEnvMenPerAsunto','Asunto',1);
		labelsMantEnvMenPerContenido = labels.create('labelsMantEnvMenPerContenido','Contenido',1); 
        memoMantEnvMenPerMenConMensaje = memo.create('memoMantEnvMenPerMenConMensaje', '', 1, 1, 0);
        memoMantEnvMenPerMenConMensaje.setValidEmpty();
        memoMantEnvMenPerMenConMensaje.setMaxLength(4000);		
		imgButtonsMantEnvMenPerAdjuntar = imgButtons.create('imgButtonsMantEnvMenPerAdjuntar', 'Sin Adjunto', 'adjuntar.png');
		imgButtonsMantEnvMenPerEnviarTexto = imgButtons.create('imgButtonsMantEnvMenPerEnviarTexto', 'Enviar Sms', 'enviar_sms.png');
		imgButtonsMantEnvMenPerEnviarEmail = imgButtons.create('imgButtonsMantEnvMenPerEnviarEmail', 'Enviar Email', 'email_4.png');
		imgButtonsMantEnvMenPerEnviarBoletin = imgButtons.create('imgButtonsMantEnvMenPerEnviarBoletin', 'Enviar Boletín', 'email_4.png');
        imgButtonsMantEnvMenPerBuscar = imgButtons.create('imgButtonsMantEnvMenPerBuscar', 'Buscar', 'icono_buscar.png');
        imgButtonsMantEnvMenPerLimpiar = imgButtons.create('imgButtonsMantEnvMenPerLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsMantEnvMenPerSalir = imgButtons.create('imgButtonsMantEnvMenPerSalir', 'Salir', 'salir.png');
    },
    
    init: function() {
        this.create();
        this.setEvents();
        this.dialogsMantEnvMenPersonal_Init();
        this.tabsMantEnvMenPersonal_Init();
        this.createMWs();
    },
    
  	resetElements : function(element) {
  		var rlx = xmlStructs.createRecordList("rlx");

  		if (element == 'org') {
			Tool.rstPwrCmb(pcbMantEnvMenPerSuborg);
			Tool.rstPwrCmb(pbcMantEnvMenPerCarrera);
			Tool.rstPwrCmb(pcbMantEnvMenPerPosicion);
			Tool.rstPwrCmb(pcbMantEnvMenPerSeccion);
			Tool.rstPwrCmb(pcbMantEnvMenPerMateria);
			if (pcbMantEnvMenPerOrg.getOption() != '')
				Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsMantEnvMenPersonal, pcbMantEnvMenPerSuborg, 1, 2, pcbMantEnvMenPerOrg);
		}
		else if (element == 'sub') {
			Tool.rstPwrCmb(pbcMantEnvMenPerCarrera);
			Tool.rstPwrCmb(pcbMantEnvMenPerPosicion);
			Tool.rstPwrCmb(pcbMantEnvMenPerSeccion);
			Tool.rstPwrCmb(pcbMantEnvMenPerMateria);
			if (pcbMantEnvMenPerSuborg.getOption() != '')
				Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsMantEnvMenPersonal, pbcMantEnvMenPerCarrera, -1, 3, pcbMantEnvMenPerSuborg);
		}
		else if (element == 'car') {
			Tool.rstPwrCmb(pcbMantEnvMenPerSeccion);
			Tool.rstPwrCmb(pcbMantEnvMenPerMateria);
			if (pbcMantEnvMenPerCarrera.getOption() != '') {
				rlx.add('reg', pbcMantEnvMenPerCarrera.setModeReturnGetText(2));
				Tool.cnnSrv('MantObject', 'getMantPensumPosicion', this.windowName + '.loadDataPosicion()', rlx);
			}
		}
		else if (element == 'pos') {
			Tool.rstPwrCmb(pcbMantEnvMenPerSeccion);
			Tool.rstPwrCmb(pcbMantEnvMenPerMateria);
			if (pcbMantEnvMenPerPosicion.getOption() != '') {
				rlx.add('reg', pbcMantEnvMenPerCarrera.setModeReturnGetText(2));
				rlx.add('reg', pcbMantEnvMenPerPosicion);
				Tool.cnnSrv('MsjObject', 'getMantEnvMenPersonalSeccion', this.windowName + '.loadDataSeccionMateria()', rlx);
			}
	    }
		else if (element == 'deuda') {
			pcbMantEnvMenPerSuborg.setSelectedIndex(0);
			pbcMantEnvMenPerCarrera.setSelectedIndex(0);
			pcbMantEnvMenPerPosicion.setSelectedIndex(0);
			pcbMantEnvMenPerSeccion.setSelectedIndex(0);
			pcbMantEnvMenPerMateria.setSelectedIndex(0);
			pcbMantEnvMenLapso.setSelectedIndex(0);
		}
		editsMantEnvMenPerCi.setValue("");
		editsMantEnvMenPerNombre.setValue("");
		editsMantEnvMenPerApellido.setValue("");  		
		exchangeListMantEnvMenPersonal.allSelectedLeft(true);
		exchangeListMantEnvMenPersonal.delSelectedLnLeft();
  	},

  	loadDataPosicion: function() {
  		var rlx = xmlStructs.createRecordList("rlx");

  		Tool.loadPowerComboData(dialogsMantEnvMenPersonal, pcbMantEnvMenPerPosicion, 0, 1, json('getMantPensumPosicion'));
  		rlx.add('reg', pbcMantEnvMenPerCarrera.setModeReturnGetText(5));
  		Tool.cnnSrv('MantObject', 'getPeriodoXNivelAcad', this.windowName + '.loadDataPeriodo()', rlx);
  	},
  	
  	loadDataPeriodo: function() {
  		Tool.loadPowerComboData(dialogsMantEnvMenPersonal, pcbMantEnvMenPeriodo, 0, 1, json('getPeriodoXNivelAcad'));
  		pcbMantEnvMenPeriodo.setSelectedIndex(1);
  		Tool.getPowerComboData('MantObject', 'getMantLapso', dialogsMantEnvMenPersonal, pcbMantEnvMenLapso, -1, 0, pcbMantEnvMenPeriodo);
  	},
  	
  	loadDataSeccionMateria: function() {
		Tool.loadPowerComboData(dialogsMantEnvMenPersonal, pcbMantEnvMenPerSeccion, 0, 1, json('getSeccion'));
  		Tool.loadPowerComboData(dialogsMantEnvMenPersonal, pcbMantEnvMenPerMateria, 0, 1, json('getMateria'));
  	},
  	
	setEvents: function() {
		editsMantEnvMenPerCi.onEnter(this.windowName + ".buscar()");
		editsMantEnvMenPerCi.onChange(this.windowName + ".limpiarFind(1)");
		editsMantEnvMenPerNombre.onEnter(this.windowName + ".buscar()");
		editsMantEnvMenPerNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsMantEnvMenPerApellido.onEnter(this.windowName + ".buscar()");
		editsMantEnvMenPerApellido.onChange(this.windowName + ".limpiarFind(3)");
		pcbMantEnvMenPerOrg.onChange(this.windowName + ".resetElements('org')");
		pcbMantEnvMenPerSuborg.onChange(this.windowName + ".resetElements('sub')");
		pbcMantEnvMenPerCarrera.onChange(this.windowName + ".resetElements('car')");
		pcbMantEnvMenPeriodo.onChange("Tool.getPowerComboData('MantObject', 'getMantLapso', dialogsMantEnvMenPersonal, pcbMantEnvMenLapso, -1, 0, pcbMantEnvMenPeriodo)");
		pcbMantEnvMenPerPosicion.onChange(this.windowName + ".resetElements('pos')");
		calendarsMantEnvMenPerDeuda.onSelectedDay(this.windowName + ".resetElements('deuda')");
		pcbMantEnvMenPerMateria.onChange(this.windowName + ".resetElements('mat')");
		pcbMantEnvMenPerSeccion.onChange(this.windowName + ".resetElements('sec')");
		pcbMantEnvMenPerMenPredefinidos.onChange("Tool.getMemoData('MsjObject', 'getMantEnvMenPersonalXId', dialogsMantEnvMenPersonal, memoMantEnvMenPerMenConMensaje, 1, pcbMantEnvMenPerMenPredefinidos)");
		memoMantEnvMenPerMenConMensaje.onKeyUp("MantEnvMenPersonal.memoChange()");
		memoMantEnvMenPerMenConMensaje.onSetText("MantEnvMenPersonal.memoChange()");		
		imgButtonsMantEnvMenPerEnviarTexto.onClick("MantEnvMenPersonal.enviar('SMS')");
        imgButtonsMantEnvMenPerEnviarEmail.onClick("MantEnvMenPersonal.enviar('Email')");
        imgButtonsMantEnvMenPerEnviarBoletin.onClick("MantEnvMenPersonal.enviar('Boletin')");
        imgButtonsMantEnvMenPerBuscar.onClick("MantEnvMenPersonal.buscar()");
        imgButtonsMantEnvMenPerLimpiar.onClick("MantEnvMenPersonal.limpiar()");
        imgButtonsMantEnvMenPerSalir.onClick("dialogsMantEnvMenPersonal.close()");
		imgButtonsMantEnvMenPerAdjuntar.onClick(this.windowName + ".copyDocument()");
    },
    
	copyDocument: function() {
		AdjuArchivos.sizeFile(1024 * 1024 * 2);//2Mb
		AdjuArchivos.filter('');
		AdjuArchivos.process(26);
		AdjuArchivos.setExtFnc("imgButtonsMantEnvMenPerAdjuntar.setCaption('Con Adjunto')");
		AdjuArchivos.setCountBtn(1);
		AdjuArchivos.show();
	},
    
    memoChange: function() {
      if(memoMantEnvMenPerMenConMensaje.getText().length > 153)
    	  imgButtonsMantEnvMenPerEnviarTexto.setDisable();
      else
    	  imgButtonsMantEnvMenPerEnviarTexto.setEnable();            
    },
    
  	limpiarFind : function(ix) {
  		editsMantEnvMenPerCi.hideId = -1;
  		
  		switch (ix) {
		case 1: 
			editsMantEnvMenPerNombre.setValue("");
			editsMantEnvMenPerApellido.setValue("");  		
			break;
		case 2: 
			editsMantEnvMenPerCi.setValue("");
			editsMantEnvMenPerApellido.setValue("");  		
			break;
		default:
			editsMantEnvMenPerCi.setValue("");
			editsMantEnvMenPerNombre.setValue("");
			break;
		} 
  	},

  	limpiar: function() {
  		editsMantEnvMenPerCi.hideId = -1;
  		pcbMantEnvMenPerGrupo.clearChecks();
  		pcbMantEnvMenPerGrupo.setSelectedIndex(0);
        pcbMantEnvMenPerOrg.setSelectedIndex(0);
        pcbMantEnvMenPerSuborg.setSelectedIndex(0);
        pbcMantEnvMenPerCarrera.setSelectedIndex(0);
        pcbMantEnvMenPeriodo.setSelectedIndex(0);
        pcbMantEnvMenLapso.setSelectedIndex(0);
		Tool.rstPwrCmb(pcbMantEnvMenPerPosicion);
		calendarsMantEnvMenPerDeuda.clear();
        pcbMantEnvMenPerMateria.setSelectedIndex(0);
        pcbMantEnvMenPerSeccion.setSelectedIndex(0);
        editsMantEnvMenPerCi.setValue("");
        editsMantEnvMenPerNombre.setValue("");
        editsMantEnvMenPerApellido.setValue("");
		exchangeListMantEnvMenPersonal.allSelectedLeft(true);
		exchangeListMantEnvMenPersonal.delSelectedLnLeft();
		exchangeListMantEnvMenPersonal.allSelectedRight(true);
		exchangeListMantEnvMenPersonal.delSelectedLnRight();
        pcbMantEnvMenPerMenPredefinidos.setSelectedIndex(0);
        memoMantEnvMenPerMenConMensaje.setText("");
        AdjuArchivos.clearFileName();
        imgButtonsMantEnvMenPerAdjuntar.setCaption('Sin Adjunto');
        dialogsMantEnvMenPersonal.setMsg("");
		Tool.cnnSrv('MsjObject', 'getMantEnvMenInit', this.windowName + '.loadInit()');
    },
    
	loadInit: function() {
		Tool.loadPowerComboData(dialogsMantEnvMenPersonal, pcbMantEnvMenPerOrg, 0, 1, json('getData'));
		Tool.loadPowerComboData(dialogsMantEnvMenPersonal, pcbMantEnvMenPerMenPredefinidos, 0, 1, json('getMantMenPredefinido'));
		Tool.loadPowerComboData(dialogsMantEnvMenPersonal, pcbMantEnvMenPerGrupo, 0, 1, json('getGrupoOrg'));
		Tool.getContext(dialogsMantEnvMenPersonal, pcbMantEnvMenPerOrg, pcbMantEnvMenPerSuborg, pbcMantEnvMenPerCarrera, this.windowName + ".resetElements('car')");
	},

    buscar: function() {
    	if (tabsMantEnvMenPersonal.getActualTab() == 0) {
    		if (editsMantEnvMenPerCi.getValue() != '' || editsMantEnvMenPerNombre.getValue() != '' || editsMantEnvMenPerApellido.getValue() != '') {
    			Tool.getListData('MsjObject', 'getMantEnvMenPersonal', dialogsMantEnvMenPersonal, exchangeListMantEnvMenPersonal, 0, 1, editsMantEnvMenPerCi, editsMantEnvMenPerCi, editsMantEnvMenPerNombre, editsMantEnvMenPerNombre, editsMantEnvMenPerApellido, editsMantEnvMenPerApellido);
    		}
    		else { 
    			if (pcbMantEnvMenPerOrg.valid(dialogsMantEnvMenPersonal))
        			if (pcbMantEnvMenPeriodo.valid(dialogsMantEnvMenPersonal))
        				Tool.getListData('MsjObject', 'getMantEnvMenPersonalGrupo', dialogsMantEnvMenPersonal, exchangeListMantEnvMenPersonal, 0, 1, pcbMantEnvMenPeriodo, pcbMantEnvMenPerOrg, pcbMantEnvMenPerSuborg, pcbMantEnvMenPerSuborg, pbcMantEnvMenPerCarrera.setModeReturnGetText(2), pbcMantEnvMenPerCarrera.setModeReturnGetText(2), pcbMantEnvMenPerPosicion, pcbMantEnvMenPerPosicion, pcbMantEnvMenPerSeccion, pcbMantEnvMenPerSeccion, pcbMantEnvMenPerMateria, pcbMantEnvMenPerMateria, calendarsMantEnvMenPerDeuda);			
    		}
    	}
    	else {
    		if (pcbMantEnvMenPerGrupo.valid(dialogsMantEnvMenPersonal))
    			Tool.getListData('MsjObject', 'getPersonaOrg', dialogsMantEnvMenPersonal, exchangeListMantEnvMenPersonal, 0, 1, pcbMantEnvMenPerGrupo);
    	}
    },
    
    enviar: function(msgType) {
        var rlx = xmlStructs.createRecordList("rlx");
    
		if (exchangeListMantEnvMenPersonal.getAllRight() != '') {
			if (memoMantEnvMenPerMenConMensaje.valid(dialogsMantEnvMenPersonal)) {
				if (msgType != 'Boletin' || pcbMantEnvMenLapso.valid(dialogsMantEnvMenPersonal)) {
					rlx.add('reg', exchangeListMantEnvMenPersonal);
					rlx.add('reg', memoMantEnvMenPerMenConMensaje);
					rlx.addStr('reg', pcbMantEnvMenPerMenPredefinidos.getOption(), false);
					rlx.addInt('reg', tabsMantEnvMenPersonal.getActualTab(), false);
					rlx.add('reg', pcbMantEnvMenPeriodo);
					if (msgType == 'Boletin') {
						rlx.add('reg', pcbMantEnvMenLapso.setModeReturnGetText(3));//idLapso
						rlx.add('reg', pcbMantEnvMenLapso.setModeReturnGetText(6));//recomendacion
					}
					else {
						rlx.addStr('reg', AdjuArchivos.getFileName());
					}
					AdjuArchivos.clearFileName();
			        imgButtonsMantEnvMenPerAdjuntar.setCaption('Sin Adjunto');
					Tool.cnnSrv('MsjObject', 'enviarMantEnvMenPersonal' + msgType, this.windowName + '.limpiar()', rlx);
				}
			}
		}
		else {
			Alert.show('Debe seleccionar un destinatario.', 'SISTEMA', Alert.TYPE_INFO);
		}
    }
};
