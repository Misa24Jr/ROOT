var dialogsInscAlumnos = {};
var editsInscAlumnosCi = {};
var editsInscAlumnosNombre = {};
var editsInscAlumnosApellido = {};
var pcbInscAlumnosPeriodo = {};
var pcbInscAlumnosTipoHorario = {};
var pcbInscAlumnosCarrera = {};
var pcbInscAlumnosPosicion = {};
var pcbInscMateria = {};
var pcbInscAlumnosSeccion = {};
var pcbInscAluMatSinHorario = {};
var editsInscAlumnosProfesor = {};
var editsInscAlumnosSeccion = {};
var editsInscAlumnosHc = {};
var editsInscCupMin = {};
var editsInscAlumnosCupMax = {};
var editsInscAluTotInscritos = {};
var editsInscBloque = {};
var editsInscAula = {};
var editsInscMateria = {};
var editsInscPosicion = {};
var tablesAyuda = {};
var tablesInscAlumnos = {}; 
var imgButtonsInscAlumnosAgregar = {};
var imgButtonsInscAlumnosEliminar = {};
var imgButtonsInscAlumnosLimpiar = {};
var imgButtonsInscAlumnosBuscar = {};
var imgButtonsInscAlumnosReporte = {};
var imgButtonsInscAlumnosSalir = {};
var buttonsArray = new Array();
var mwInsc = {};// minWindow
var divSinHorario = {};
var tabInf = {};

var InscAlumnos = {
	windowName : 'InscAlumnos',
	isCreate : false,
	eliminarTodo : true, 
	flagPlaIns : false,
	
	show : function() {
		if (!this.isCreate)	{
			this.init();
			this.isCreate = true;
		}
		if (dialogsInscAlumnos.isByClean())
 			this.limpiar();		
		dialogsInscAlumnos.show();
	},
	
	hide : function() {
		dialogsInscAlumnos.hide();
	},
	
	createMWs : function() {
        mwInscAlumnos = desktop.addMinWindow('I.Alumnos', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsInscAlumnos.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsInscAlumnos_Init : function() {
        dialogsInscAlumnos.setCenterScreen();
		editsInscAlumnosApellido.setMaxLength(50);   
        editsInscAlumnosApellido.setSizeEdit(149);
		editsInscAlumnosCi.setSizeEdit(149);
		editsInscAlumnosNombre.setSizeEdit(149); 
		editsInscAlumnosNombre.setMaxLength(50); 		
		pcbInscAlumnosPeriodo.setWidthCombo(128);	
		/////////////////////////////////////TABLA DE EDITORES//////////////////////////
		tabInf  = tabs.create('tabInf',224,403,['Detalle Curso','Materias - Inscritas']);
		tabInf.setObjAttrib(attrib,ambiente);
		tabInf.addLnToGridPanel(0,3);
		tabInf.setWidthCell(0,0,0,1);
		tabInf.showPanel(0);
		tabInf.panel[0].style.borderColor = 'rgba(0,0,0,0)';
		tabInf.panel[1].style.borderColor = 'rgba(0,0,0,0)';
		tabInf.addObjToGridPanel(0,editsInscMateria,1,1);
		tabInf.addObjToGridPanel(0,editsInscAlumnosProfesor,2,1);
		tabInf.addObjToGridPanel(0,editsInscAlumnosSeccion,3,1);
		tabInf.addObjToGridPanel(0,editsInscAlumnosHc,4,1);
		tabInf.addObjToGridPanel(0,editsInscPosicion,5,1);
		tabInf.addObjToGridPanel(0,editsInscCupMin,6,1);
		tabInf.addObjToGridPanel(0,editsInscAlumnosCupMax,7,1);
		tabInf.addObjToGridPanel(0,editsInscAluTotInscritos,8,1);
		tabInf.addObjToGridPanel(0,editsInscBloque,9,1);
		tabInf.addObjToGridPanel(0,editsInscAula,10,1);
		
		for(var ix=1; ix < 11; ix++)
		  tabInf.setHeightCellPanel(ix,1,0,38);

		editsInscMateria.setSizeEdit(151);
		editsInscAlumnosProfesor.setSizeEdit(151);
		editsInscAlumnosSeccion.setSizeEdit(151);
		editsInscAlumnosHc.setSizeEdit(24);
		editsInscAluTotInscritos.setSizeEdit(24);
		editsInscPosicion.setSizeEdit(151);		
		editsInscCupMin.setSizeEdit(24);
		editsInscAlumnosCupMax.setSizeEdit(24);
		editsInscBloque.setSizeEdit(151);
		editsInscAula.setSizeEdit(151);
        tablesAyuda.addRowsCols(4,2);        
        tablesAyuda.addDinamicTextToHead(['ICONO','DESCRIPCIÓN']);
        tablesAyuda.setWidthCell(1,0,50);
        for(var i=1; i<2; i++){
          tablesAyuda.setWidthCell(1,i,169);
        }
        for(var i=0; i<2; i++){
          tablesAyuda.textAlignCell(0,i,'left');
        }              
        for(i=1; i<5; i++){
          tablesAyuda.setHeightRow(i,19);
          tablesAyuda.setFontCell(i,0,'verdana',10,'black');
          tablesAyuda.textAlignCell(i,0,'left');
        }                
		//////////////////////////////TABLA DE HORARIO DE MATERIAS///////////////////////
        tablesInscAlumnos.addRowsCols(ProcCrearInscripcion.maxRows,8);        
        tablesInscAlumnos.addDinamicTextToHead(['HORA','LUN','MAR','MIE','JUE','VIE','SAB','DOM']);
        tablesInscAlumnos.setWidthCell(1,0,92);
        for(var i=1; i<8; i++){
          tablesInscAlumnos.setWidthCell(1,i,53);
        }
        for(var i=0; i<8; i++){
          tablesInscAlumnos.textAlignCell(0,i,'center');
        }              
        for(i=1; i<ProcCrearInscripcion.maxRows + 1; i++){
          tablesInscAlumnos.setHeightRow(i,19);
          tablesInscAlumnos.setFontCell(i,0,'verdana',10,'black');
          tablesInscAlumnos.textAlignCell(i,0,'center');
        }

		//IMAGEN DEL COMBO SIN HORARIO
		divSinHorario = document.createElement('div');
		divSinHorario.sts = 0;
		divSinHorario.style.borderStyle = 'none';
		divSinHorario.style.height = '14px';
		divSinHorario.style.lineHeight = '14px';
		divSinHorario.vAlign = 'middle';
		divSinHorario.align = 'center';
		divSinHorario.style.width = '20px';
		divSinHorario.img = document.createElement('img');
		divSinHorario.img.src = 'images/transpIcon.png';
		divSinHorario.style.display = 'block';
		divSinHorario.appendChild(divSinHorario.img);
        
		dialogsInscAlumnos.addObject(pcbInscAluMatSinHorario, 20, 582);
		pcbInscAluMatSinHorario.setWidthCombo(135);
		dialogsInscAlumnos.addObject(divSinHorario, 240, 588);

        dialogsInscAlumnos.addObject(imgButtonsInscAlumnosAgregar,21,110);
        dialogsInscAlumnos.addObject(imgButtonsInscAlumnosEliminar,146,110);
        dialogsInscAlumnos.addObject(imgButtonsInscAlumnosLimpiar,272,110);        
        dialogsInscAlumnos.addObject(imgButtonsInscAlumnosReporte,398,110);        
        dialogsInscAlumnos.addObject(imgButtonsInscAlumnosBuscar,524,110);
        dialogsInscAlumnos.addObject(imgButtonsInscAlumnosSalir,650,110);        
        imgButtonsInscAlumnosAgregar.setDimension(90,22);
        imgButtonsInscAlumnosEliminar.setDimension(90,22);
        imgButtonsInscAlumnosLimpiar.setDimension(90,22);
        imgButtonsInscAlumnosBuscar.setDimension(90,22);
        imgButtonsInscAlumnosReporte.setDimension(90,22);        
        imgButtonsInscAlumnosSalir.setDimension(90,22);
        ////////////////////ATRIBUTO DE TABLAS DESPUES DE CREADAS LAS FILAS////////////////////////////////////
        tablesInscAlumnos.setObjAttrib(attrib, ambiente); 
		tablesAyuda.setObjAttrib(attrib, ambiente);          
		tablesAyuda.setAttributes('border','0px');
		
		for(var idx=0; idx<5; idx++)
		{
		  tablesAyuda.setBorderRow(idx,'none');		
		  tablesAyuda.setAttrRow(idx,'bgColor','');
		  tablesAyuda.setColorTextRow(idx,'black');
		  tablesAyuda.setWidthCell(idx,0,80);
		  tablesAyuda.setWidthCell(idx,1,120);
		  tablesAyuda.textAlignCell(idx,0,'center');
		  if(idx > 0)
		    tablesAyuda.setFontCell(idx,1,'verdana',10,'#666666');
		}
		tablesAyuda.addTextToCell(1,1,'Materia No inscrita');
		tablesAyuda.addTextToCell(2,1,'Materia inscrita');
		tablesAyuda.addTextToCell(3,1,'Choque de horario');
		tablesAyuda.addTextToCell(4,1,'Materia seleccionada');
		
		var img1 = document.createElement('img');
		var img2 = document.createElement('img');
		var img3 = document.createElement('img');
		var img4 = document.createElement('img');
  		
  		img1.style.height='14px';
  		img2.style.height='14px';
  		img3.style.height='14px';
  		img4.style.height='14px';
  		
  		img1.style.width='20px';
  		img2.style.width='20px';
  		img3.style.width='20px';
  		img4.style.width='20px';
  		
  		img1.src = ProcCrearInscripcion.pathImg+ProcCrearInscripcion.imgMatSelec;
  		img2.src = ProcCrearInscripcion.pathImg+ProcCrearInscripcion.imgMatInscrita;
  		img3.src = ProcCrearInscripcion.pathImg+ProcCrearInscripcion.imgChoque;
  		img4.src = ProcCrearInscripcion.pathImg+ProcCrearInscripcion.imgEliminar;
  		
		tablesAyuda.addObjToCell(1,0,img1);
		tablesAyuda.addObjToCell(2,0,img2);
		tablesAyuda.addObjToCell(3,0,img3);
		tablesAyuda.addObjToCell(4,0,img4);
		tablesAyuda.setFontCell(0,0,'verdana',10,'#555555');
		tablesAyuda.setFontCell(0,1,'verdana',10,'#555555');		
		
		dialogsInscAlumnos.addObject(editsInscAlumnosCi,20,36);
		dialogsInscAlumnos.addObject(editsInscAlumnosNombre,268,36);
		dialogsInscAlumnos.addObject(editsInscAlumnosApellido, 514, 36);
		dialogsInscAlumnos.addObject(pcbInscAlumnosCarrera,20,61); 
		dialogsInscAlumnos.addObject(pcbInscAlumnosTipoHorario,268,61);
		dialogsInscAlumnos.addObject(pcbInscAlumnosPeriodo, 514, 61);
		dialogsInscAlumnos.addObject(pcbInscAlumnosPosicion,20,86);       
		dialogsInscAlumnos.addObject(pcbInscMateria,268,86);
		dialogsInscAlumnos.addObject(pcbInscAlumnosSeccion, 596, 86);
		
		dialogsInscAlumnos.addObject(tabInf,20,137);
		dialogsInscAlumnos.addObject(tablesInscAlumnos,265,136);
	},	
    
	create : function() {		
		dialogsInscAlumnos = dialogs.create('dialogsInscAlumnos',0,0,764,935,'INSCRIPCIÓN');
		dialogsInscAlumnos.setAdjY(25);
		editsInscAlumnosCi = edits.create('editsInscAlumnosCi','editsInscAlumnosCi','C.i. (*):',1,82);
		editsInscAlumnosCi.setValidInteger();
		editsInscAlumnosCi.setFieldFind(true);
		editsInscAlumnosNombre = edits.create('editsInscAlumnosNombre','editsInscAlumnosNombre','Nombre (*):',1,82);
		editsInscAlumnosNombre.setValidEmpty();
		editsInscAlumnosNombre.setFieldFind(true);
		editsInscAlumnosApellido = edits.create('editsInscAlumnosApellido','editsInscAlumnosApellido','Apellido (*):',1,82);
		editsInscAlumnosApellido.setValidEmpty();
		editsInscAlumnosApellido.setFieldFind(true);		
		pcbInscAlumnosPeriodo = powerComboBox.create('pcbInscAlumnosPeriodo','pcbInscAlumnosPeriodo','Periodo (*):',1,82);
		pcbInscAlumnosPeriodo.setValidEmpty();
		pcbInscAlumnosPeriodo.addEmptyOption();
		pcbInscAlumnosPeriodo.enableReadOnlyEditor();		
		pcbInscAlumnosTipoHorario = powerComboBox.create('pcbInscAlumnosTipoHorario','pcbInscAlumnosTipoHorario','Horario (*):',1,82);
		pcbInscAlumnosTipoHorario.setValidEmpty();
		pcbInscAlumnosTipoHorario.addEmptyOption();
		pcbInscAlumnosTipoHorario.enableReadOnlyEditor();
		pcbInscAlumnosTipoHorario.setWidthCombo(128);  
		pcbInscAlumnosCarrera = powerComboBox.create('pcbInscAlumnosCarrera','pcbInscAlumnosCarrera','Carrera (*):',1,82);
		pcbInscAlumnosCarrera.setValidEmpty();
		pcbInscAlumnosCarrera.addEmptyOption();
		pcbInscAlumnosCarrera.enableReadOnlyEditor();
		pcbInscAlumnosCarrera.setWidthCombo(128);  
		pcbInscAlumnosPosicion = powerComboBox.create('pcbInscAlumnosPosicion','pcbInscAlumnosPosicion','Posición (*):',1,82);
		pcbInscAlumnosPosicion.setValidEmpty();
		pcbInscAlumnosPosicion.addEmptyOption();
		pcbInscAlumnosPosicion.enableReadOnlyEditor();
	  	pcbInscMateria = powerComboBox.create('pcbInscMateria','pcbInscMateria','Materia (*):',1,82);
	  	pcbInscMateria.setValidEmpty();
	  	pcbInscMateria.addEmptyOption();
	  	pcbInscMateria.enableReadOnlyEditor();
	  	pcbInscMateria.setDataType('string');
	  	pcbInscMateria.enableOnChangeToEmptyOption();
		pcbInscMateria.setWidthCombo(210);			
	  	pcbInscAluMatSinHorario = powerComboBox.create('pcbInscAluMatSinHorario','pcbInscAluMatSinHorario','Materia Sin Horario:',3,65);
	  	pcbInscAluMatSinHorario.setValidEmpty();
	  	pcbInscAluMatSinHorario.addEmptyOption();
	  	pcbInscAluMatSinHorario.enableReadOnlyEditor();
	  	pcbInscAluMatSinHorario.setDataType('string');
	  	pcbInscAlumnosSeccion = powerComboBox.create('pcbInscAlumnosSeccion','pcbInscAlumnosSeccion','Sección (*):',1,72);
	  	pcbInscAlumnosSeccion.setValidEmpty();
	  	pcbInscAlumnosSeccion.addEmptyOption();
	  	pcbInscAlumnosSeccion.enableReadOnlyEditor();
		pcbInscAlumnosSeccion.setWidthCombo(56);		
	  	tablesInscAlumnos = tables.create('tablesInscAlumnos');
	  	tablesInscAlumnos.createHead();
	  	tablesAyuda = tables.create('tablesAyuda');
	  	tablesAyuda.createHead();
	  	editsInscAlumnosProfesor = edits.create('editsInscAlumnosProfesor','editsInscAlumnosProfesor','Profesor:',1,68);
	  	editsInscAlumnosProfesor.setValidEmpty();
	  	editsInscAlumnosSeccion = edits.create('editsInscAlumnosSeccion','editsInscAlumnosSeccion','Sección:',1,68);
	  	editsInscAlumnosSeccion.setValidEmpty();
	  	editsInscAlumnosCupMax = edits.create('editsInscAlumnosCupMax','editsInscAlumnosCupMax','Cupo Max:',1,68);
	  	editsInscAlumnosCupMax.setValidEmpty();
	  	editsInscAlumnosHc = edits.create('editsInscAlumnosHc','editsInscAlumnosHc','H.S.:',1,68);
	  	editsInscAlumnosHc.setValidEmpty();
	  	editsInscCupMin = edits.create('editsInscCupMin','editsInscCupMin','Cupo Min:',1,68);
	  	editsInscCupMin.setValidEmpty();
	  	editsInscAluTotInscritos = edits.create('editsInscAluTotInscritos','editsInscAluTotInscritos','Cupo Disp:',1,68);
	  	editsInscAluTotInscritos.setValidEmpty();
	  	editsInscBloque = edits.create('editsInscBloque','editsInscBloque','Bloque:',1,68);
	  	editsInscBloque.setValidEmpty();
	  	editsInscAula = edits.create('editsInscAula','editsInscAula','Aula:',1,68);
	  	editsInscMateria = edits.create('editsInscMateria','editsInscMateria','Materia:',1,68);
	  	editsInscAula.setValidEmpty();
	  	editsInscPosicion = edits.create('editsInscPosicion','editsInscPosicion','Posición:',1,68);
	  	editsInscPosicion.setValidEmpty();
	  	imgButtonsInscAlumnosAgregar = imgButtons.create('imgButtonsInscAlumnosAgregar','Inscribir','ok.png');
	  	imgButtonsInscAlumnosEliminar = imgButtons.create('imgButtonsInscAlumnosEliminar','Eliminar','eliminar.png');
	  	imgButtonsInscAlumnosLimpiar = imgButtons.create('imgButtonsInscAlumnosLimpiar','Limpiar','limpiar.png');
	  	imgButtonsInscAlumnosBuscar = imgButtons.create('imgButtonsInscAlumnosBuscar','Buscar','icono_buscar.png');
	  	imgButtonsInscAlumnosReporte = imgButtons.create('imgButtonsInscAlumnosReporte','Ver Horario','print.png');      
	  	imgButtonsInscAlumnosSalir = imgButtons.create('imgButtonsInscAlumnosSalir','Salir','salir.png');
	  	buttonsArray = [imgButtonsInscAlumnosAgregar,imgButtonsInscAlumnosEliminar,imgButtonsInscAlumnosLimpiar,imgButtonsInscAlumnosBuscar,imgButtonsInscAlumnosReporte,imgButtonsInscAlumnosSalir];
	},

	init : function() {
	    this.create();
	    this.setEvents();
	    this.dialogsInscAlumnos_Init();
		this.createMWs();
		ProcCrearInscripcion.init();
	},
  
    setEvents : function() {
    	pcbInscAlumnosPeriodo.onChange(this.windowName + ".resetElements('per')");
    	pcbInscAlumnosTipoHorario.onChange(this.windowName + ".resetElements('hr')");
		pcbInscAlumnosCarrera.onChange(this.windowName + ".resetElements('car')");
	  	pcbInscAlumnosPosicion.onChange(this.windowName + ".resetElements('pos')");
	  	pcbInscMateria.onChange(this.windowName + ".resetElements('mat')");
	  	pcbInscAlumnosSeccion.onChange(this.windowName + ".resetElements('sec')");
	    imgButtonsInscAlumnosAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsInscAlumnosEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
	  	imgButtonsInscAlumnosLimpiar.onClick('InscAlumnos.limpiar()');
	  	imgButtonsInscAlumnosReporte.onClick('InscAlumnos.coreUpdateReporte()');
	  	imgButtonsInscAlumnosBuscar.onClick('InscAlumnos.buscar()');
	  	imgButtonsInscAlumnosSalir.onClick('dialogsInscAlumnos.close()');	 
    },
	
	limpiarCoreUpdate : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		this.flagPlaIns = false;
		this.eliminarTodo = true;
		dialogsInscAlumnos.setMsg("");
  		ProcCrearInscripcion.setButtons([0,1,1,1,0,1]);
  		Tool.rstPwrCmb(pcbInscMateria);
  		Tool.rstPwrCmb(pcbInscAlumnosSeccion);
		rlx.add('reg',pcbInscAlumnosCarrera.setModeReturnGetText(0));
		rlx.add('reg',pcbInscAlumnosPosicion);
		rlx.addInt('reg',editsInscAlumnosCi.hideId);
		rlx.add('reg',pcbInscAlumnosSeccion);
		rlx.add('reg',pcbInscAlumnosPeriodo);
		Tool.cnnSrv('InscripObject', 'getMateriaInscrip', this.windowName + '.loadDataCoreUpdate()', rlx);
  	},

    loadDataCoreUpdate : function() {
		ProcCrearInscripcion.setButtons([0,1,1,1,1,1]);
    	ProcCrearInscripcion.clearData();
		ProcCrearInscripcion.clearComboSinHorario();
  		Tool.loadPowerComboData(dialogsInscAlumnos, pcbInscMateria, -1, 1, json('getMateria'));
    	ProcCrearInscripcion.loadData(json('getInscrip').data);
    	pcbInscAlumnosPosicion.setFocus();
        dialogsInscAlumnos.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },
    
  	limpiarFind : function(ix) {
  		editsInscAlumnosCi.hideId = -1;
  		
  		switch (ix) {
		case 1: 
	  		editsInscAlumnosNombre.setValue("");
	  		editsInscAlumnosApellido.setValue("");  		
			break;
		case 2: 
	  		editsInscAlumnosCi.setValue("");
	  		editsInscAlumnosApellido.setValue("");  		
			break;
		default:
	  		editsInscAlumnosCi.setValue("");
  			editsInscAlumnosNombre.setValue("");
			break;
		}

  		ProcCrearInscripcion.clearData();
  		ProcCrearInscripcion.clearHorario();
  		ProcCrearInscripcion.setButtons([0,0,1,1,0,1]);  		
  		Tool.rstPwrCmb(pcbInscAlumnosCarrera);
  		Tool.rstPwrCmb(pcbInscAlumnosTipoHorario);
  		Tool.rstPwrCmb(pcbInscAlumnosPeriodo);
  		Tool.rstPwrCmb(pcbInscAlumnosPosicion);
  		Tool.rstPwrCmb(pcbInscMateria);
  		Tool.rstPwrCmb(pcbInscAlumnosSeccion);
  		Tool.rstPwrCmb(pcbInscAluMatSinHorario);
  		ProcCrearInscripcion.setButtons([0,0,1,1,0,1]);
  	},

  	limpiar : function() {
		this.flagPlaIns = false;
  		editsInscAlumnosCi.hideId = -1;
		editsInscAlumnosCi.setValue("");
  		editsInscAlumnosNombre.setValue("");
  		editsInscAlumnosApellido.setValue("");  
  		editsInscAlumnosProfesor.setValue("");
  		editsInscAluTotInscritos.setValue("");
  		editsInscAlumnosHc.setValue("");
  		editsInscAlumnosSeccion.setValue("");
  		editsInscCupMin.setValue("");
  		editsInscAlumnosCupMax.setValue("");
  		editsInscBloque.setValue("");
  		editsInscAula.setValue("");
  		editsInscMateria.setValue("");
  		editsInscPosicion.setValue("");
		Tool.rstPwrCmb(pcbInscAlumnosPeriodo);
  		Tool.rstPwrCmb(pcbInscAlumnosTipoHorario);		
  		Tool.rstPwrCmb(pcbInscAlumnosCarrera);		
  		Tool.rstPwrCmb(pcbInscAlumnosPosicion);
  		Tool.rstPwrCmb(pcbInscMateria);
  		Tool.rstPwrCmb(pcbInscAlumnosSeccion);
  		Tool.rstPwrCmb(pcbInscAluMatSinHorario);
  		ProcCrearInscripcion.clearData();
  		ProcCrearInscripcion.clearHorario();
  		dialogsInscAlumnos.setMsg("");
  		ProcCrearInscripcion.setButtons([0,0,1,1,0,1]);
		Tool.cnnSrv('InscripObject', 'getCargarPersona', this.windowName + '.loadDataPers()');
  	},
  	
    loadDataPers : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		editsInscAlumnosCi.readOnly(true);
  	    editsInscAlumnosNombre.readOnly(true);
  	    editsInscAlumnosApellido.readOnly(true);
  	    editsInscAlumnosCi.onEnter("");
  		editsInscAlumnosCi.onChange("");
  		editsInscAlumnosNombre.onEnter("");
  		editsInscAlumnosNombre.onChange("");
  		editsInscAlumnosApellido.onEnter("");
  		editsInscAlumnosApellido.onChange("");
    	if (json('getPermiso').data[0] != 'ACTIVO') {
  			editsInscAlumnosCi.setValue(json('getDatoPersona').data[0]);
  	  		editsInscAlumnosNombre.setValue(json('getDatoPersona').data[1]);
  	  		editsInscAlumnosApellido.setValue(json('getDatoPersona').data[2]);
  	  		editsInscAlumnosCi.hideId = json('getDatoPersona').data[3];
  	  		rlx.add('reg', editsInscAlumnosCi);
  			Tool.cnnSrv('InscripObject', 'getCarrera', this.windowName + '.loadDataCarrInscrip()', rlx);
  		}
    	else {
  	    	editsInscAlumnosCi.readOnly(false);
  	    	editsInscAlumnosNombre.readOnly(false);
  	    	editsInscAlumnosApellido.readOnly(false);
  		  	editsInscAlumnosCi.onEnter(this.windowName + ".buscar()");
  		  	editsInscAlumnosCi.onChange(this.windowName + ".limpiarFind(1)");
  		  	editsInscAlumnosCi.onClick(this.windowName + ".limpiarFind(1)");
  		  	editsInscAlumnosNombre.onEnter(this.windowName + ".buscar()");
  		  	editsInscAlumnosNombre.onChange(this.windowName + ".limpiarFind(2)");
  		  	editsInscAlumnosNombre.onClick(this.windowName + ".limpiarFind(2)");
  		  	editsInscAlumnosApellido.onEnter(this.windowName + ".buscar()");
  		  	editsInscAlumnosApellido.onChange(this.windowName + ".limpiarFind(3)");
  		  	editsInscAlumnosApellido.onClick(this.windowName + ".limpiarFind(3)");
    	}
        dialogsInscAlumnos.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    resetElements : function(element) {
		var rlx = xmlStructs.createRecordList("rlx");

		dialogsInscAlumnos.setMsg("");
  		ProcCrearInscripcion.setButtons([0,0,1,1,0,1]);
  		ProcCrearInscripcion.cleanAllSelected();
  		
  		if (element == 'car' || element == 'per') {
			if (pcbInscAlumnosCarrera.valid(dialogsInscAlumnos)) {
	        	ProcCrearInscripcion.clearData();
				if (element == 'car') Tool.rstPwrCmb(pcbInscAlumnosPeriodo);
				Tool.rstPwrCmb(pcbInscAlumnosPosicion);
				Tool.rstPwrCmb(pcbInscMateria);
	    		Tool.rstPwrCmb(pcbInscAlumnosSeccion);
	    		rlx.add('reg',pcbInscAlumnosCarrera.setModeReturnGetText(0));
	    		rlx.add('reg',pcbInscAlumnosPeriodo);
	    		rlx.add('reg',pcbInscAlumnosTipoHorario);
	    		rlx.add('reg',pcbInscAlumnosCarrera.setModeReturnGetText(2));
	    		Tool.cnnSrv('InscripObject', 'getPosicion', this.windowName + '.loadDataPosHora()', rlx);
			}
    	}
		else if (element == 'pos') {
			ProcCrearInscripcion.clearNewCurso();
    		Tool.rstPwrCmb(pcbInscMateria);
    		Tool.rstPwrCmb(pcbInscAlumnosSeccion);
    		rlx.add('reg',pcbInscAlumnosCarrera.setModeReturnGetText(0));
    		rlx.add('reg',pcbInscAlumnosPosicion);
    		rlx.add('reg',pcbInscAlumnosPeriodo);
    		rlx.addInt('reg',editsInscAlumnosCi.hideId);
    		rlx.add('reg',pcbInscAlumnosPeriodo);
    		rlx.addInt('reg',editsInscAlumnosCi.hideId);
    		rlx.add('reg',pcbInscAlumnosPeriodo);
    		Tool.cnnSrv('InscripObject', 'getMateria', this.windowName + '.loadDataMateriaSeccion()', rlx);
		}
		else if (element == 'mat') {
    		Tool.rstPwrCmb(pcbInscAlumnosSeccion);
			if (pcbInscMateria.getOption() != "")
				Tool.getPowerComboDataFnc(this.windowName + '.callPlaIns()','InscripObject', 'getSeccion', dialogsInscAlumnos, pcbInscAlumnosSeccion, -1, 1, pcbInscMateria.setModeReturnGetText(0), pcbInscMateria.setModeReturnGetText(0), new MiniDataSet(editsInscAlumnosCi.hideId, 'int', false), pcbInscAlumnosPeriodo, pcbInscAlumnosPeriodo);
			else {
	        	ProcCrearInscripcion.clearData();
	        	pcbInscAlumnosPosicion.setSelectedIndex(0);
	    		Tool.rstPwrCmb(pcbInscMateria);
	    		Tool.rstPwrCmb(pcbInscAlumnosSeccion);
			}
		}
		else if (element == 'sec') {
		    ProcCrearInscripcion.clearData();
		    if (pcbInscMateria.getOption() == "" && pcbInscAlumnosSeccion.getOption() != "") {
		    	pcbInscAlumnosSeccion.setDataType('string');
		    	ProcCrearInscripcion.setButtons([1,0,1,1,0,1]);
		    	dialogsInscAlumnos.setMsg("Selecciono agregar todas las materias de la sección " + pcbInscAlumnosSeccion.getOption());
		    }
		    else {
		    	pcbInscAlumnosSeccion.setDataType('int');
		    	rlx.add('reg',pcbInscAlumnosPeriodo);
		    	rlx.addInt('reg',editsInscAlumnosCi.hideId);
			    rlx.add('reg',pcbInscAlumnosCarrera.setModeReturnGetText(0));
		    	rlx.add('reg',pcbInscAlumnosPeriodo);
		    	rlx.add('reg',pcbInscAlumnosPeriodo);
		    	rlx.addInt('reg',editsInscAlumnosCi.hideId);
			    rlx.add('reg',pcbInscAlumnosCarrera.setModeReturnGetText(0));
		    	rlx.add('reg',pcbInscAlumnosPeriodo);
		    	rlx.add('reg',pcbInscAlumnosPeriodo);
			    rlx.add('reg',pcbInscAlumnosSeccion.setModeReturnGetText(0));
		    	rlx.add('reg',pcbInscAlumnosCarrera.setModeReturnGetText(0));
		    	rlx.add('reg',pcbInscAlumnosPeriodo);
		    	Tool.cnnSrv('InscripObject', 'getInscrip', this.windowName + '.loadDataInscrip()', rlx);
		    }
		}
		else if (element == 'hr') {
			ProcCrearInscripcion.clearHorario();
			this.resetElements('car');
		}
	},
	
	callPlaIns : function() {
		if (this.flagPlaIns) {
			this.flagPlaIns = false;
			pcbInscAlumnosSeccion.findOption(pcbPreiSeccion2.setModeReturnGetText(0).getText(), 1);
			this.resetElements('sec');
		}
	},
	
	loadDataMateriaSeccion : function() {
  		Tool.loadPowerComboData(dialogsInscAlumnos, pcbInscMateria, -1, 1, json('getMateria'));
  		Tool.loadPowerComboData(dialogsInscAlumnos, pcbInscAlumnosSeccion, 0, 1, json('getSeccionPosicion'));

  		if (this.flagPlaIns) {
  			pcbInscMateria.findOption(pcbPreiMateria2.getText());
  			this.resetElements('mat');
  		}
	},
	
    buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");

    	if (editsInscAlumnosCi.getValue() != '' && editsInscAlumnosNombre.getValue() != '' && editsInscAlumnosApellido.getValue() != '') {
			if (pcbInscAlumnosCarrera.setModeReturnGetText(0).getText() == "" || pcbInscAlumnosCarrera.setModeReturnGetText(0).getText() == "-1") {
		  		Tool.rstPwrCmb(pcbInscAlumnosPosicion);
		  		Tool.rstPwrCmb(pcbInscMateria);
		  		Tool.rstPwrCmb(pcbInscAlumnosSeccion);
		  		ProcCrearInscripcion.clearData();
		  		ProcCrearInscripcion.setButtons([0,0,1,1,0,1]);
		  		rlx.add('reg', editsInscAlumnosCi);
	    		Tool.cnnSrv('InscripObject', 'getCarrera', this.windowName + '.loadDataCarrInscrip()', rlx);
			}
			else {
				if (ProcCrearInscripcion.getCountHorario() > 0)
					this.resetElements('sec');
				else
					this.resetElements('car');
			}
		}
		else if (editsInscAlumnosCi.getValue() != '' || editsInscAlumnosNombre.getValue() != '' || editsInscAlumnosApellido.getValue() != '') {
	  		Tool.rstPwrCmb(pcbInscAlumnosPosicion);
	  		Tool.rstPwrCmb(pcbInscMateria);
	  		Tool.rstPwrCmb(pcbInscAlumnosSeccion);
	  		ProcCrearInscripcion.clearMatInsc();
	  		ProcCrearInscripcion.showMatInsc();
	  		ProcCrearInscripcion.clearData();
	  		ProcCrearInscripcion.setButtons([0,0,1,1,0,1]);
        	ResuBusqueda.setObjectExtFnc(editsInscAlumnosCi, editsInscAlumnosNombre, editsInscAlumnosApellido, 'InscAlumnos.buscar()');
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsInscAlumnosCi, editsInscAlumnosCi, editsInscAlumnosNombre, editsInscAlumnosNombre, editsInscAlumnosApellido, editsInscAlumnosApellido);
		}
		else {
			Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},

   	loadDataCarrInscrip : function() {
   		if (pcbInscAlumnosPeriodo.getOption() == '') {
   	  		Tool.loadPowerComboData(dialogsInscAlumnos, pcbInscAlumnosPeriodo, 0, 1, json('getPeriodoNvlAcad'));
   	  		if (json('getPeriodoNvlAcad').data[0].length == 1) pcbInscAlumnosPeriodo.setSelectedIndex(1);
   		}
   		if (pcbInscAlumnosTipoHorario.getOption() == '') {
   			Tool.loadPowerComboData(dialogsInscAlumnos, pcbInscAlumnosTipoHorario, 0, 1, json('getTipoHorarioXOrg'));
   			pcbInscAlumnosTipoHorario.setSelectedIndex(1);
   		}
   		Tool.loadPowerComboData(dialogsInscAlumnos, pcbInscAlumnosCarrera, -1, 1, json('getCarrera'));
  		if (json('getCarrera').data[0].length == 1) {
  			pcbInscAlumnosCarrera.setSelectedIndex(1); 
  			this.resetElements('car'); 
  		}
   	},
   	
    loadDataPosHora : function() {
    	ProcCrearInscripcion.setHorario(json('getHorario').data);
        Tool.loadPowerComboData(dialogsInscAlumnos, pcbInscAlumnosPosicion, 0, 1, json('getPosicion'));
   		if (pcbInscAlumnosPeriodo.getOption() == '') {
   	  		Tool.loadPowerComboData(dialogsInscAlumnos, pcbInscAlumnosPeriodo, 0, 1, json('getPeriodoNvlAcad'));
   	  		if (json('getPeriodoNvlAcad').data[0].length == 1) pcbInscAlumnosPeriodo.setSelectedIndex(1);
   		}
        this.buscar();
    },
    
    loadDataInscrip : function() {
    	ProcCrearInscripcion.setButtons([0,0,1,1,1,1]);
    	if (json('getInscrip').data[0].length > 0) {
        	ProcCrearInscripcion.setButtons([0,1,1,1,1,1]);
    		ProcCrearInscripcion.loadData(json('getInscrip').data);
    	}
    	pcbInscAlumnosPosicion.setFocus();
        dialogsInscAlumnos.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();

        if (this.flagPlaIns) {
        	pcbInscAlumnosPosicion.findOption(pcbPreiPosicion2.getText());
        	this.resetElements('pos');
        }
    },
    
    validateCoreUpdate : function() {
    	var rsp = false;
    	
    	if (editsInscAlumnosCi.valid(dialogsInscAlumnos)) 
            if (editsInscAlumnosNombre.valid(dialogsInscAlumnos)) 
                if (editsInscAlumnosApellido.valid(dialogsInscAlumnos)) 
					if (pcbInscAlumnosTipoHorario.valid(dialogsInscAlumnos))
						if (pcbInscAlumnosCarrera.valid(dialogsInscAlumnos))
							if (pcbInscAlumnosPosicion.valid(dialogsInscAlumnos))
								if (pcbInscMateria.valid(dialogsInscAlumnos))
	                       			if (pcbInscAlumnosSeccion.valid(dialogsInscAlumnos))
	                       				rsp = true;
    	return rsp;
    },

    coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (this.validateCoreUpdate) { 
			if (methodName == 'eliminar') {
				if (this.eliminarTodo) { 
					rlx.add('reg', pcbInscAlumnosPeriodo);
					rlx.addInt('reg', editsInscAlumnosCi.hideId);
					rlx.addInt('reg', 1);
				}
				else {
					rlx.addInt('reg', ProcCrearInscripcion.getIdCursoEliminar());
					rlx.addInt('reg', editsInscAlumnosCi.hideId);
					rlx.addInt('reg', 0);
				}
				Tool.cnnSrv('InscripObject', 'eliminarInscrip', this.windowName + '.limpiarCoreUpdate()', rlx);
			}
			else {
		    	if (pcbInscMateria.getOption() == "" && pcbInscAlumnosSeccion.getOption() != "") {
		    		rlx.addInt('reg', editsInscAlumnosCi.hideId);
		    		rlx.add('reg', pcbInscAlumnosCarrera.setModeReturnGetText(0));
		    		rlx.add('reg', pcbInscAlumnosPeriodo);
		    		rlx.add('reg', pcbInscAlumnosPosicion);
		    		rlx.add('reg', pcbInscAlumnosSeccion);
		    		Tool.cnnSrv('InscripObject', 'agregarInscripLote', this.windowName + '.limpiarCoreUpdate()', rlx);
		    	}
		    	else 
		    		Tool.cnnSrv('InscripObject', 'agregarInscrip', this.windowName + '.limpiarCoreUpdate()', ProcCrearInscripcion.getRecordListInscripcionNueva());
			} 
		}	
	},
	
	reporte : function() {
		var ji = json("getHorarioAlumno");
		var ji2 = json("getHorarioXTipo");	
		var h = new Horario({ "saturday": true, "sunday": true, "prof": true, fusion_block: true});
		var arrObject = [ { data: pcbInscAlumnosPeriodo.getOption(), title: "PERIODO: ", x: 2, y: 2 }, 
						  { data: pcbInscAlumnosCarrera.getOption(), title: "PROGRAMA: ", x: 220, y: 2 },
						  { data: editsInscAlumnosCi.getText(), title: "CEDULA: ", x: 2, y: 20 },
						  { data: (editsInscAlumnosNombre.getText() + ' ' + editsInscAlumnosApellido.getText()), title: "NOMBRE: ", x: 226, y: 20 }
		];
		h.setDataHeadWithObject(arrObject);	
		h.setJson(ji,ji2);
		h.show();
	},
	
	coreUpdateReporte: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
		rlx.addInt('reg', editsInscAlumnosCi.hideId);
		rlx.add('reg', pcbInscAlumnosPeriodo);
		rlx.add('reg', pcbInscAlumnosCarrera.setModeReturnGetText(0));
		Tool.cnnSrv('ReportObject', 'getHorarioAlumno', this.windowName + '.reporte()', rlx);
    }
};
