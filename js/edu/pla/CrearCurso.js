var dialogsCrearCurso = new Object();
var pcbCurOrg = new Object();
var pcbCrearCurEstado = new Object();
var pcbCrearCurBloque = new Object();
var pcbCrearCurTipoHorario = new Object();
var pcbCrearCurPeriodo = new Object();
var pcbCrearCurMateria = new Object();
var pcbCrearCurAula = new Object();
var pcbCrearCurSeccion = new Object();
var pcbCrearCurProfesor = new Object();
var pcbCrearCurTipAula = new Object();
var pcbCrearCurSubOrg = new Object();
var pcbCrearCurCarrera = new Object();
var pcbCrearCurPosMateria = new Object();
var editsCrearCurCupMinimo = new Object();
var editsCrearCurCupMaximo = new Object();
var tablesCreCurHorario = new Object();
var editsCrearCurCupMaximo = new Object();
var tablesCreCurInformacion = new Object();
var imagesCreaCurSeccion = new Object();
var imagesCreaCurAula = new Object();
var imagesCreaCurProfesor = new Object();
var imagesCrearCurMateria = new Object();
var imgButtonsCrearCurAgregar = new Object();
var imgButtonsCrearCurModificar = new Object();
var imgButtonsCrearCurEliminar = new Object();
var imgButtonsCrearCurLimpiar = new Object();
var imgButtonsCrearCurReporte = new Object();
var imgButtonsCrearCurSalir = new Object();
var mwCrearCurso = new Object();//minWindow1
var xFunct = new Function('');

//****************** ESTRUCTURAS DE MENU PARA EL DIALOGO *******************
	var MenuDlgCrearCurso =
	{
	    idPanelMenu : 0,
		level : 0,
	    captions : ['Mantenimiento',' Profesor','  Ayuda'],
	    functs : ['','',''],
		subMenues : [1,2,3],
	    icons : ['','',''], 
	    enableOption : [true,true,true]	
    };
	  	
	var SubMenuCrearCurso1 =
	{	
		idPanelMenu : 1,
		level : 1,
	    captions : ['Horario','Aula','Asignar Aula a Carrera','Materia','Asignar Tipo de Aula a Materia','Unidad / Hora Credito de Materia','Duplicar Periodo'],
	    functs : ['exeShow("js/edu/pla/man/","MantHorario")','exeShow("js/edu/pla/man/","MantAula")','exeShow("js/edu/pla/man/","AsinAulas")','exeShow("js/edu/pla/man/","MantMateria")','exeShow("js/edu/pla/man/","MantAsigTipAulMateria")','exeShow("js/edu/pla/man/","MantCreMateria")','CrearCurso.callDuplicar()'],
	    subMenues : [0,0,0,0,0,0,0],
	    icons : ['images/horario_1.png','images/aulaSelected.png','images/aula_2.png','images/materia_1.png','images/materia_5.png','images/horascredito_1.png','images/duplicar_periodo_1.png'], 
	    enableOption : [true,true,true,true,true,true,true],	
		parentMenu : MenuDlgCrearCurso,
		parentOpc : 0
	};
	
	var SubMenuCrearCurso2 =
	{	
		idPanelMenu : 2,
		level : 1,
	    captions : ['Persona','Disponibilidad Profesor','Materia Dictada Por Profesor'],
	    functs : ['exeShow("js/edu/adm/","MantPersona")','exeShow("js/edu/pla/","DispProfesor")','exeShow("js/edu/pla/man/","MantMatDictada")'],
	    subMenues : [0,0,0],
	    icons : ['images/persona_1.png','images/profesorEnable.png','images/materiadictada_1.png'], 
	    enableOption : [true,true,true],	
		parentMenu : MenuDlgCrearCurso,
		parentOpc : 1
	};
	
	var SubMenuCrearCurso3 =
	{	
		idPanelMenu : 3,
		level : 1,
	    captions : ['Disponibilidad del Aula','Profesor Disponible','Curso Nuevo Sin Aula','Curso Nuevo y Profesor Disponible',
	    'Curso Seleccionado','Curso Seleccionado y Profesor Disponible','Aula Disponible Para Curso Seleccionado',
	    'Aula Disponible Para el Curso Nuevo','Aula Disponible en el Horario',
	    'Aula Disponible Para el Curso Creado','Curso Creado Con Aula','Curso Seleccionado con Aula Asignada',
	    'Curso Creado y Profesor Disponible','Curso Nuevo Bloqueado (En Proceso)','Aula Eliminada',
	    'Celda Vacia no Selecionable'],
	    functs : ['exeShow("js/edu/pla/","DispVisAula")','','','','','','','','','','','','','','',''],
	    subMenues : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	    icons : ['images/dispvisaula.png','images/profesorEnable.png','images/cursoNuevo.png','images/cursoNuevo_profesorDisponible.png','images/aulaSelected.png','images/cursoSeleccionado_profesorDisponible.png','images/aulaDispCursoSelec.png','images/aulaDispCursoNuevo.png','images/aulaDisp.png','images/aulaDispCursoAsig.png','images/salonEnable.png','images/aulaAsigCursoAsig.png','images/cursoAsignado_profesorDisponible.png','images/cursoNuevoBloqueado.png','images/aulaEliminada.png','images/celda_blanco.png'], 
	    enableOption : [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],	
		parentMenu : MenuDlgCrearCurso,
		parentOpc : 2
	};
	
var CrearCurso = {
	windowName : 'CrearCurso',
	isCreate : false,
	idCurso : 0,
	
	show : function() {
	  if (!this.isCreate) {
		this.init();
		this.isCreate = true;
	  }
	  if (dialogsCrearCurso.isByClean())
 		this.limpiar();			
	  dialogsCrearCurso.show();
	},
	
	hide : function() {
		dialogsCrearCurso.hide();
	},
	
	createMWs : function() {
        	mwCrearCurso = desktop.addMinWindow('C. Curso', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsCrearCurso.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},
    
    dialogsCrearCurso_Init: function(){
    	dialogsCrearCurso.setMenu(MenuDlgCrearCurso);
	    dialogsCrearCurso.setSubMenu(SubMenuCrearCurso1);
	  	dialogsCrearCurso.setSubMenu(SubMenuCrearCurso2);
		dialogsCrearCurso.setSubMenu(SubMenuCrearCurso3);
        dialogsCrearCurso.setMinimizeXY(0, 0);
        dialogsCrearCurso.setCenterScreen();
        dialogsCrearCurso.addSpace(1, 0, 15);       
        pcbCurOrg.setWidthCombo(254);
        pcbCrearCurTipoHorario.setWidthCombo(254);
        pcbCrearCurSubOrg.setWidthCombo(254);
        pcbCrearCurCarrera.setWidthCombo(254);
		pcbCrearCurPosMateria.setWidthCombo(254);
        pcbCrearCurSeccion.setWidthCombo(235);
        pcbCrearCurProfesor.setWidthCombo(235);
		pcbCrearCurTipAula.setWidthCombo(235);
        pcbCrearCurMateria.setWidthCombo(235);
        pcbCrearCurPeriodo.setWidthCombo(254);
        pcbCrearCurBloque.setWidthCombo(70);
        pcbCrearCurAula.setWidthCombo(70);
		pcbCrearCurEstado.setWidthCombo(254);
        
        var CreaCurso6 = container.create("CreaCurso6");
        CreaCurso6.setDimension(400,17);
        CreaCurso6.setObject(editsCrearCurCupMinimo, 0,0,0,0);
		editsCrearCurCupMinimo.setSizeEdit(30); 
		editsCrearCurCupMinimo.setMaxLength(2); 
        CreaCurso6.setObject(editsCrearCurCupMaximo, 3,0,0,0);
		editsCrearCurCupMaximo.setSizeEdit(30); 
		editsCrearCurCupMaximo.setMaxLength(2);  

		var CreaCurso7 = container.create("CreaCurso7");
		CreaCurso7.setDimension(400,17);
		CreaCurso7.setObject(pcbCrearCurSeccion, 0,0,0,0);
		CreaCurso7.setObject(imagesCreaCurSeccion, 1, 0, 0, 0);
		imagesCreaCurSeccion.setSize(17,17);
        
		var CreaCurso8 = container.create("CreaCurso8");
		CreaCurso8.setDimension(400,17);
		CreaCurso8.setObject(pcbCrearCurBloque, 0,3,10,0);
        CreaCurso8.setObject(pcbCrearCurAula, 11,3,0,0);
		CreaCurso8.setObject(imagesCreaCurAula, 1, 4, 0, 0);
		imagesCreaCurAula.setSize(17,17);
		
		var CreaCurso10 = container.create("CreaCurso10");
		CreaCurso10.setDimension(400,17);
        CreaCurso10.setObject(pcbCrearCurTipoHorario, 0,0,0,0);
		        		
		var CreaCurso11 = container.create("CreaCurso11");
		CreaCurso11.setDimension(400,17);
        CreaCurso11.setObject(pcbCrearCurProfesor, 0,0,0,0);
		CreaCurso11.setObject(imagesCreaCurProfesor, 1, 0, 0, 0);
		imagesCreaCurProfesor.setSize(17,17);
        
		var CreaCurso12 = container.create("CreaCurso12");
        CreaCurso12.setDimension(395,262);
        CreaCurso12.setObject(tablesCreCurInformacion, 0, 1, 0, 0);
        CreaCurso12.vAlignRow(0, 'middle');
        CreaCurso12.setPropertyMarco('groove', 1, '#aeaeae'); 
		
		var CreaCurso13 = container.create("CreaCurso13");
		CreaCurso13.setDimension(400,17);
        CreaCurso13.setObject(pcbCrearCurTipAula, 0,1,0,0);

        var CreaCurso14 = container.create("CreaCurso14");
        CreaCurso14.setObject(pcbCrearCurMateria, 0,0,0,0);
		CreaCurso14.setObject(imagesCreaCurMateria, 1, 0, 0, 0);
		
        
		tablesCreCurInformacion.setObjAttrib(attrib, ambiente);
        tablesCreCurInformacion.addRowsCols(6, 2);
        tablesCreCurInformacion.addDinamicTextToHead(['Ítem','Detalle']);
        tablesCreCurInformacion.rows[0].cells[0].style.backgroundColor = attrib.Color.bgBarraTitle[ambiente]; 
        tablesCreCurInformacion.rows[0].cells[1].style.backgroundColor = attrib.Color.bgBarraTitle[ambiente]; 
        tablesCreCurInformacion.setWidthCell(1, 0, 94);
        tablesCreCurInformacion.textAlignCell(0, 0, 'center');
		for (var i = 1; i < 2; i++){
            tablesCreCurInformacion.setWidthCell(1, i, 320);
            tablesCreCurInformacion.textAlignCell(0, i, 'center');
        }  
		tablesCreCurInformacion.rows[0].cells[0].style.borderStyle = 'none'; 
        tablesCreCurInformacion.rows[0].cells[1].style.borderStyle = 'none';
        tablesCreCurInformacion.rows[0].cells[0].style.borderWidth = '0px';
        tablesCreCurInformacion.rows[0].cells[1].style.borderWidth = '0px';
        for (var i = 1; i < 7; i++){
            tablesCreCurInformacion.setHeightRow(i, 34);
            tablesCreCurInformacion.setFontCell(i,0,'verdana',10,'black');
            tablesCreCurInformacion.textAlignCell(i, 0, 'left');
            tablesCreCurInformacion.setFontCell(i,1,'verdana',10,'black');
            tablesCreCurInformacion.textAlignCell(i, 1, 'left');
            for(var j=0; j<2; j++){
              tablesCreCurInformacion.rows[i].cells[j].style.borderStyle = 'none';  
              tablesCreCurInformacion.rows[i].cells[j].style.borderWidth = '1px';
              tablesCreCurInformacion.rows[i].cells[j].style.borderColor = '#fefefe';	
            }
        }
        tablesCreCurInformacion.setHeightRow(0, 24);
        tablesCreCurInformacion.setAttribute('border','0');
        tablesCreCurInformacion.setAttribute('cellPadding','0');
        tablesCreCurInformacion.setAttribute('cellSpacing','1px');
        //tablesCreCurInformacion.style.backgroundColor = '#fefefe';
        tablesCreCurInformacion.style.borderColor = '#fefefe';
        tablesCreCurInformacion.style.borderStyle ='none';
        tablesCreCurInformacion.style.borderWidth ='1px';
   
        var tbcreacurso = tables.create('tablaContcreacurso');
        tbcreacurso.addRows(14);
        tbcreacurso.addCols(0,1);
        tbcreacurso.addCols(1,1);          
        tbcreacurso.addCols(2,1);
        tbcreacurso.addCols(3,1);   
        tbcreacurso.addCols(4,1);
        tbcreacurso.addCols(5,1);
        tbcreacurso.addCols(6,1); 
        tbcreacurso.addCols(7,1);
        tbcreacurso.addCols(8,1);
        tbcreacurso.addCols(9,1);
        tbcreacurso.addCols(10,1);                                      
        tbcreacurso.addCols(11,1);                                      
        tbcreacurso.addCols(12,1);
		tbcreacurso.addCols(13,1);  
        tbcreacurso.addObjToCell(0,0,pcbCrearCurEstado);
        tbcreacurso.addObjToCell(1,0,pcbCurOrg);         
        tbcreacurso.addObjToCell(2,0,pcbCrearCurSubOrg);
        tbcreacurso.addObjToCell(3,0,pcbCrearCurCarrera);               
        tbcreacurso.addObjToCell(4,0,CreaCurso10); 
		tbcreacurso.addObjToCell(5,0,pcbCrearCurPeriodo); 
        tbcreacurso.addObjToCell(6,0,pcbCrearCurPosMateria);   
        tbcreacurso.addObjToCell(7,0,CreaCurso7);
        tbcreacurso.addObjToCell(8,0,CreaCurso14);
        tbcreacurso.addObjToCell(9,0,CreaCurso11);
        tbcreacurso.addObjToCell(10,0,CreaCurso6);
        tbcreacurso.addObjToCell(11,0,CreaCurso13);
		tbcreacurso.addObjToCell(12,0,CreaCurso8);
        tbcreacurso.addObjToCell(13,0,CreaCurso12);
		
        for (var i = 0; i < 11; i++)
          tbcreacurso.setHeightRow(i, 30.5);
        tbcreacurso.setHeightRow(13, 280);
        dialogsCrearCurso.addObjToDialog(tbcreacurso,7,1,465);           
        //dialogsCrearCurso.showGrid(true);
		
        var CreaCurso1 = container.create("CreaCurso1");
        CreaCurso1.setObject(tablesCreCurHorario, 5, 4, 0, 0);
        tablesCreCurHorario.addRowsCols(ProcCrearCurso.maxRow, 8);
        tablesCreCurHorario.addDinamicTextToHead(['HORA', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM']);
        tablesCreCurHorario.setWidthCell(1, 0, 95);
        tablesCreCurHorario.textAlignCell(0, 0, 'center');
        for(var i=0; i<8; i++)
          tablesCreCurHorario.rows[0].cells[i].style.backgroundColor = attrib.Color.bgBarraTitle[ambiente]; 
        for (var i = 1; i < 8; i++){
        	  tablesCreCurHorario.setWidthCell(1, i, 50);
              tablesCreCurHorario.textAlignCell(0, i, 'center');	
        }        
        for (var i = 0; i < ProcCrearCurso.maxRow + 1; i++){
            if(i > 0)
            {
              tablesCreCurHorario.setHeightRow(i, 20);
              tablesCreCurHorario.setFontCell(i,0,'verdana',12,'black');
              tablesCreCurHorario.textAlignCell(i, 0, 'center');	
            }
            
            for(var j=0; j<8; j++)
        	{
        	  tablesCreCurHorario.rows[i].cells[j].style.borderStyle = 'none';
        	  tablesCreCurHorario.rows[i].cells[j].style.borderWidth = '0px';
        	}
        }
		tablesCreCurHorario.setAttribute('border','0');
        tablesCreCurHorario.setAttribute('cellPadding','0');
        tablesCreCurHorario.setAttribute('cellSpacing','1px');
        tablesCreCurHorario.style.backgroundColor = '#aeaeae';
        tablesCreCurHorario.style.borderStyle ='none';
        tablesCreCurHorario.style.borderWidth ='0px';
        
        dialogsCrearCurso.addObjToDialog(CreaCurso1, 7, 1,465); 
		dialogsCrearCurso.adjAllMarginObj(7, 1, 0);
        dialogsCrearCurso.addLn(1, 1, 1); 
        dialogsCrearCurso.setHeightCell(1,1,5);       
        dialogsCrearCurso.addLn(8,1,1);      
        dialogsCrearCurso.setHeightCell(8,1,1);
        dialogsCrearCurso.addLn(10,1,1);      
        dialogsCrearCurso.setHeightCell(10,1,1);
        //dialogsCrearCurso.addObjToDialog(imgButtonsCrearCurAgregar, 9, 1);
        //dialogsCrearCurso.addObjToDialog(imgButtonsCrearCurModificar, 9, 1);
        //dialogsCrearCurso.addObjToDialog(imgButtonsCrearCurEliminar, 9, 1);
        //dialogsCrearCurso.addObjToDialog(imgButtonsCrearCurLimpiar, 9, 1);
        //dialogsCrearCurso.addObjToDialog(imgButtonsCrearCurSalir, 9, 1);
        
        dialogsCrearCurso.addObject(imgButtonsCrearCurAgregar, 280, 25);
        dialogsCrearCurso.addObject(imgButtonsCrearCurModificar, 385, 25);
        dialogsCrearCurso.addObject(imgButtonsCrearCurEliminar, 490, 25);
        dialogsCrearCurso.addObject(imgButtonsCrearCurLimpiar, 595, 25);
        dialogsCrearCurso.addObject(imgButtonsCrearCurReporte, 700, 25);
        dialogsCrearCurso.addObject(imgButtonsCrearCurSalir, 805, 25);
        
        imgButtonsCrearCurAgregar.setDimension(90, 20);
        imgButtonsCrearCurModificar.setDimension(90, 20);
        imgButtonsCrearCurEliminar.setDimension(90, 20);
        imgButtonsCrearCurLimpiar.setDimension(90, 20);
        imgButtonsCrearCurReporte.setDimension(90, 20);
        imgButtonsCrearCurSalir.setDimension(90, 20);
        //dialogsCrearCurso.adjAllMarginObj(9, 1, 30);
        //dialogsCrearCurso.leftMarginObj(9, 1, 0, 155);

        //ATRIBUTO DE TABLAS DESPUES DE CREADAS LAS FILAS
        tablesCreCurHorario.setObjAttrib(attrib, ambiente);
    },
    
    create: function() {
        dialogsCrearCurso = dialogs.create('dialogsCrearCurso', 0, 0, 914, 865, 'CREAR CURSO');
        dialogsCrearCurso.setAdjY(40);
        pcbCurOrg = powerComboBox.create('pcbCurOrg', 'pcbCurOrg', 'Organización (+):',1,122);
        pcbCurOrg.setValidEmpty();
        pcbCurOrg.addEmptyOption();
        pcbCurOrg.enableReadOnlyEditor();        
        pcbCrearCurSubOrg = powerComboBox.create('pcbCrearCurSubOrg', 'pcbCrearCurSubOrg', 'Suborganización (^):', 1,122);
        pcbCrearCurSubOrg.setValidEmpty();
        pcbCrearCurSubOrg.addEmptyOption();
        pcbCrearCurSubOrg.enableReadOnlyEditor();
        pcbCrearCurCarrera = powerComboBox.create('pcbCrearCurCarrera', 'pcbCrearCurCarrera', 'Carrera (^):', 1,122);
        pcbCrearCurCarrera.setValidEmpty();
        pcbCrearCurCarrera.addEmptyOption();
        pcbCrearCurCarrera.enableReadOnlyEditor();
        pcbCrearCurMateria = powerComboBox.create('pcbCrearCurMateria', 'pcbCrearCurMateria', 'Materia (^):', 1,122);
        pcbCrearCurMateria.setValidEmpty();
        pcbCrearCurMateria.addEmptyOption();
        pcbCrearCurMateria.enableReadOnlyEditor();
        pcbCrearCurMateria.setDataType('string');
        pcbCrearCurMateria.setFieldFind(true);
        pcbCrearCurSeccion = powerComboBox.create('pcbCrearCurSeccion', 'pcbCrearCurSeccion', 'Sección (*):', 1,122);
        pcbCrearCurSeccion.setValidEmpty();
        pcbCrearCurSeccion.addEmptyOption();
        pcbCrearCurSeccion.enableReadOnlyEditor();
        pcbCrearCurSeccion.setDataType('string');
        pcbCrearCurSeccion.setFieldFind(true);
        pcbCrearCurBloque = powerComboBox.create('pcbCrearCurBloque', 'pcbCrearCurBloque', 'Bloque (+):', 1,122);
        pcbCrearCurBloque.setValidEmpty();
        pcbCrearCurBloque.addEmptyOption();
        pcbCrearCurBloque.setDataType('string');
        pcbCrearCurBloque.enableReadOnlyEditor();
        pcbCrearCurAula = powerComboBox.create('pcbCrearCurAula', 'pcbCrearCurAula', 'Aula (^):', 1,52);
        pcbCrearCurAula.setValidEmpty();
        pcbCrearCurAula.addEmptyOption();
        pcbCrearCurAula.enableReadOnlyEditor();
        pcbCrearCurAula.setDataType('string');
        pcbCrearCurAula.setFieldFind(true);
		pcbCrearCurPeriodo = powerComboBox.create('pcbCrearCurPeriodo', 'pcbCrearCurPeriodo', 'Periodo (^):', 1,122);
        pcbCrearCurPeriodo.setValidEmpty();
        pcbCrearCurPeriodo.addEmptyOption();
        pcbCrearCurPeriodo.enableReadOnlyEditor();
		pcbCrearCurTipoHorario = powerComboBox.create('pcbCrearCurTipoHorario', 'pcbCrearCurTipoHorario', 'Tipo de Horario (^):', 1,122);
		pcbCrearCurTipoHorario.setValidEmpty();
		pcbCrearCurTipoHorario.addEmptyOption();
		pcbCrearCurTipoHorario.enableReadOnlyEditor();
		pcbCrearCurProfesor = powerComboBox.create('pcbCrearCurProfesor', 'pcbCrearCurProfesor', 'Profesor (*):', 1,122);
        pcbCrearCurProfesor.setValidEmpty();
        pcbCrearCurProfesor.addEmptyOption();
        pcbCrearCurProfesor.enableReadOnlyEditor();
        pcbCrearCurProfesor.setFieldFind(true);
		pcbCrearCurTipAula = powerComboBox.create('pcbCrearCurTipAula', 'pcbCrearCurTipAula', 'Tipo de Aula (*):', 1,122);
        pcbCrearCurTipAula.setValidEmpty();
        pcbCrearCurTipAula.addEmptyOption();
        pcbCrearCurTipAula.enableReadOnlyEditor();
        pcbCrearCurTipAula.setFieldFind(true);
        pcbCrearCurEstado = powerComboBox.create('pcbCrearCurEstado', 'pcbCrearCurEstado', 'Estado Curso:', 1,122);
        pcbCrearCurEstado.setValidEmpty();
        pcbCrearCurEstado.addEmptyOption();
        pcbCrearCurEstado.enableReadOnlyEditor();
		pcbCrearCurPosMateria = powerComboBox.create('pcbCrearCurPosMateria', 'pcbCrearCurPosMateria', 'Posición (^):', 1,122);
        pcbCrearCurPosMateria.setValidEmpty();
        pcbCrearCurPosMateria.addEmptyOption();
        pcbCrearCurPosMateria.enableReadOnlyEditor();
        pcbCrearCurPosMateria.setFieldFind(true);
        editsCrearCurCupMaximo = edits.create('editsCrearCurCupMaximo', 'editsCrearCurCupMaximo', 'Cupo Maximo:', 1,90);
        editsCrearCurCupMaximo.setValidInteger();
        editsCrearCurCupMinimo = edits.create('editsCrearCurCupMinimo', 'editsCrearCurCupMinimo', 'Cupo Minimo:', 1,122);
        editsCrearCurCupMinimo.setValidInteger();     
        editsCrearCurCupMinimo.setValidLessThan(editsCrearCurCupMaximo);
		editsCrearCurCupMaximo.setValidGreaterThan(editsCrearCurCupMinimo);
        tablesCreCurHorario = tables.create('tablesCreCurHorario');
        tablesCreCurHorario.createHead();            
		tablesCreCurInformacion = tables.create('tablesCreCurInformacion');
		tablesCreCurInformacion.createHead();
		imagesCreaCurSeccion = images.create('imagesCreaCurSeccion','imagesCreaCurSeccion','images/relojCreCurso_1.png');
		imagesCreaCurAula = images.create('imagesCreaCurAula','imagesCreaCurAula','images/relojCreCurso_1.png');
		imagesCreaCurProfesor = images.create('imagesCreaCurProfesor','imagesCreaCurProfesor','images/relojCreCurso_1.png');
		imagesCreaCurMateria = images.create('imagesCreaCurMateria','imagesCreaCurMateria','images/relojCreCurso_1.png');
		imagesCreaCurMateria.setSize(17,17);
		hint.create();
		hint.addToHintWithPos(imagesCreaCurSeccion,"Ver Disponibilidad de la Sección",dialogsCrearCurso.x1+414,dialogsCrearCurso.y1+264);
		hint.addToHintWithPos(imagesCreaCurMateria,"Ver Disponibilidad de la Materia",dialogsCrearCurso.x1+414,dialogsCrearCurso.y1+277);
		hint.addToHintWithPos(imagesCreaCurProfesor,"Ver Disponibilidad del Profesor",dialogsCrearCurso.x1+414,dialogsCrearCurso.y1+287);
		hint.addToHintWithPos(imagesCreaCurAula,"Ver Disponibilidad del Aula",dialogsCrearCurso.x1+414,dialogsCrearCurso.y1+333);
		xFunct = function(){
		  hint.setPosition(imagesCreaCurSeccion, dialogsCrearCurso.x1+414, dialogsCrearCurso.y1+220);
		  hint.setPosition(imagesCreaCurMateria, dialogsCrearCurso.x1+414, dialogsCrearCurso.y1+242);
		  hint.setPosition(imagesCreaCurProfesor, dialogsCrearCurso.x1+414, dialogsCrearCurso.y1+264);
		  hint.setPosition(imagesCreaCurAula, dialogsCrearCurso.x1+414, dialogsCrearCurso.y1+334);	
		};
		
		hint.onMouseOver('xFunct()');
		
		imgButtonsCrearCurAgregar = imgButtons.create('imgButtonsCrearCurAgregar', 'Agregar', 'ok.png');
        imgButtonsCrearCurModificar = imgButtons.create('imgButtonsCrearCurModificar', 'Modificar', 'icono_modificar.png');
        imgButtonsCrearCurModificar.setDisable();
        imgButtonsCrearCurEliminar = imgButtons.create('imgButtonsCrearCurEliminar', 'Eliminar', 'eliminar.jpg');
        imgButtonsCrearCurEliminar.setDisable();
        imgButtonsCrearCurLimpiar = imgButtons.create('imgButtonsCrearCurLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsCrearCurReporte = imgButtons.create('imgButtonsCrearCurReporte', 'Reporte', 'print.png');
        imgButtonsCrearCurSalir = imgButtons.create('imgButtonsCrearCurSalir', 'Salir', 'salir.png');   		   
    },
    
    init: function() {
        this.create();
        this.setEvents();
        this.dialogsCrearCurso_Init();
        this.createMWs();
    },
    
    cambiar: function() {
    	ProcCrearCurso.changeImg(ProcCrearCurso.imgProfDisable, ProcCrearCurso.fila, ProcCrearCurso.col);
    },
    
    loadDataOrgHr: function() {
		Tool.loadPowerComboData(dialogsCrearCurso, pcbCrearCurSubOrg, 1, 2, json('getMantSuborganizacion'));
		Tool.loadPowerComboData(dialogsCrearCurso, pcbCrearCurTipoHorario, 0, 1, json('getTipoHorarioXOrg'));
    	Tool.loadPowerComboData(dialogsCrearCurso, pcbCrearCurPeriodo, 0, 1,  json('getMantPeriodoActivoPlan'));
		dialogsCrearCurso.setMsg(xmlHttpReq.objStsResponse.shortInfo);
		dlgWait.hide();
    },
    
    resetElements: function(element) {
		var rlx = xmlStructs.createRecordList("rlx");
		ProcCrearCurso.clearData();
		ProcCrearCurso.CursoNuevo.removeAll();

		if (element == 'org') {
			Tool.rstPwrCmb(pcbCrearCurCarrera);
			Tool.rstPwrCmb(pcbCrearCurPosMateria);
			Tool.rstPwrCmb(pcbCrearCurMateria);
	    	Tool.rstPwrCmb(pcbCrearCurProfesor);
	    	Tool.rstPwrCmb(pcbCrearCurTipAula);
	    	Tool.rstPwrCmb(pcbCrearCurBloque);
	    	Tool.rstPwrCmb(pcbCrearCurAula);
	    	Tool.rstPwrCmb(pcbCrearCurPeriodo);
			Tool.rstPwrCmb(pcbCrearCurTipoHorario);
	  		ProcCrearCurso.clearHorario();
	    	rlx.add('reg', pcbCurOrg); 
	        Tool.cnnSrv('CrearCursoObject', 'getMantSuborganizacion', this.windowName + '.loadDataOrgHr()', rlx);
		}
		else if (element == 'suborg') {
			Tool.rstPwrCmb(pcbCrearCurPosMateria);
			Tool.rstPwrCmb(pcbCrearCurMateria);
	    	Tool.rstPwrCmb(pcbCrearCurProfesor);
	    	Tool.rstPwrCmb(pcbCrearCurTipAula);
	        Tool.rstPwrCmb(pcbCrearCurBloque);
			Tool.rstPwrCmb(pcbCrearCurAula);
			Tool.rstPwrCmb(pcbCrearCurPeriodo);
			Tool.getPowerComboData('CrearCursoObject', 'getMantenimientodeCarrera', dialogsCrearCurso, pcbCrearCurCarrera, -1, 3, pcbCrearCurSubOrg);		
		}
		else if (element == 'carr') {
			Tool.rstPwrCmb(pcbCrearCurPosMateria);
			Tool.rstPwrCmb(pcbCrearCurMateria);
	    	Tool.rstPwrCmb(pcbCrearCurProfesor);
	    	Tool.rstPwrCmb(pcbCrearCurTipAula);
	        Tool.rstPwrCmb(pcbCrearCurBloque);
			Tool.rstPwrCmb(pcbCrearCurAula);
			Tool.getPowerComboData('CrearCursoObject', 'getPeriodoNvlAcad', dialogsCrearCurso, pcbCrearCurPeriodo, 0, 1, pcbCrearCurCarrera.setModeReturnGetText(5));		
		}
		else if (element == 'tiphor') {
			Tool.rstPwrCmb(pcbCrearCurPosMateria);
			Tool.rstPwrCmb(pcbCrearCurMateria);
			pcbCrearCurSeccion.setSelectedIndex(0);
	    	Tool.rstPwrCmb(pcbCrearCurProfesor);
	    	Tool.rstPwrCmb(pcbCrearCurTipAula);
	    	Tool.rstPwrCmb(pcbCrearCurBloque);
	    	Tool.rstPwrCmb(pcbCrearCurAula);
	  		ProcCrearCurso.clearHorario();
			this.getHorario();			
		}
		else if (element == 'pos') {
        	if (pcbCrearCurPeriodo.valid(dialogsCrearCurso)) {
        		if (pcbCrearCurPeriodo.valid(dialogsCrearCurso)) {
        	    	pcbCrearCurProfesor.clear();
        	    	pcbCrearCurTipAula.clear();
        	        pcbCrearCurBloque.clear();
        	    	pcbCrearCurAula.clear();
        	    	Tool.getPowerComboDataFnc('pcbCrearCurMateria.setSizeHeight(350)', 'CrearCursoObject', 'getMantPensumMateria', dialogsCrearCurso, pcbCrearCurMateria, -1, 1, pcbCrearCurCarrera.setModeReturnGetText(2), pcbCrearCurPosMateria, pcbCrearCurPeriodo);        		
        	    } 
        		else
        			pcbCrearCurPosMateria.setSelectedIndex(0);
    	    } 
    		else
    			pcbCrearCurPosMateria.setSelectedIndex(0);
		}
		else if (element == 'per') {
	    	if (pcbCrearCurCarrera.valid(dialogsCrearCurso)) 
    			Tool.getPowerComboData('CrearCursoObject', 'getMantPensumPosicion', dialogsCrearCurso, pcbCrearCurPosMateria, 0, 1, pcbCrearCurCarrera.setModeReturnGetText(2));
	    	else
				Tool.rstPwrCmb(pcbCrearCurPeriodo);
		}
		imgButtonsCrearCurAgregar.setCaption('Agregar');
		imgButtonsCrearCurModificar.setCaption('Modificar');
		imgButtonsCrearCurModificar.setStsValue(0);
		imgButtonsCrearCurAgregar.setDisable();
		imgButtonsCrearCurModificar.setDisable();
		imgButtonsCrearCurEliminar.setDisable();
	},

    clickAgregar: function() {
    	if (imgButtonsCrearCurAgregar.getCaption() == 'Agregar') {
    			this.coreUpdate('agregar');	
    			imgButtonsCrearCurModificar.setCaption('Modificar');
    			imgButtonsCrearCurModificar.setStsValue(0);
    	}
    	else if (imgButtonsCrearCurAgregar.getCaption() == 'Aceptar') {
    		this.coreUpdate('cambiarHorario');
    	} 
    	else {
    		ProcCrearCurso.clearData();
          	ProcCrearCurso.CursoNuevo.removeAll();
            if (pcbCrearCurProfesor.getOption() != '')
            	this.getDispProf();
            pcbCrearCurTipAula.disable();        		
  			imgButtonsCrearCurAgregar.setCaption('Aceptar');
  			imgButtonsCrearCurAgregar.setDisable();
  			imgButtonsCrearCurModificar.setCaption('Cancelar');
    		imgButtonsCrearCurModificar.setStsValue(1);
    		imgButtonsCrearCurModificar.setEnable();
    		imgButtonsCrearCurEliminar.setDisable();
		}
    },
    
    clickModificar : function() {
    	switch(imgButtonsCrearCurModificar.getStsValue()) {
          	case 0: { 
          		this.coreUpdate('modificar');	
          		break;
          	}
          	case 1: {
          		this.limpiarCoreUpdate();
          		break;
          	}      
    	}
    },
	
	setEvents: function() {
		imagesCreaCurSeccion.onClick(this.windowName + ".buscar()");
		imagesCreaCurMateria.onClick(this.windowName + ".getLoadDataProfBloqInit(0,true)");     
		imagesCreaCurProfesor.onClick(this.windowName + ".getDispProf()");
		imagesCreaCurAula.onClick(this.windowName + ".getDispAula()");
        imgButtonsCrearCurAgregar.onClick(this.windowName+".clickAgregar()");
		imgButtonsCrearCurModificar.onClick(this.windowName+".clickModificar()");
	  	imgButtonsCrearCurEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
        imgButtonsCrearCurLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsCrearCurReporte.onClick(this.windowName + ".coreReporte()");
        imgButtonsCrearCurSalir.onClick("dialogsCrearCurso.close()");
        pcbCurOrg.onChange(this.windowName + ".resetElements('org')");
        pcbCrearCurTipoHorario.onChange(this.windowName + ".resetElements('tiphor')");
		pcbCrearCurSubOrg.onChange(this.windowName + ".resetElements('suborg')");
		pcbCrearCurCarrera.onChange(this.windowName + ".resetElements('carr')");
	  	pcbCrearCurPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbCrearCurPosMateria.onChange(this.windowName + ".resetElements('pos')");	  	 	
		pcbCrearCurMateria.onChange(this.windowName + ".getLoadDataProfBloqInit(0,true)");
	  	pcbCrearCurSeccion.onChange(this.windowName + ".buscar()");
	  	pcbCrearCurProfesor.onChange(this.windowName + ".getDispProf()");
    	pcbCrearCurTipAula.onChange("imgButtonsCrearCurAgregar.setDisable(); Tool.getPowerComboData('CrearCursoObject', 'getBloque', dialogsCrearCurso, pcbCrearCurBloque, 0, 1, pcbCrearCurPeriodo, pcbCrearCurCarrera.setModeReturnGetText(2), pcbCrearCurMateria.setModeReturnGetText(0), pcbCrearCurTipAula)");
		pcbCrearCurBloque.onChange("Tool.getPowerComboData('CrearCursoObject', 'getMantAula', dialogsCrearCurso, pcbCrearCurAula, 0, 0, pcbCrearCurPeriodo, pcbCrearCurCarrera.setModeReturnGetText(2), pcbCrearCurMateria.setModeReturnGetText(0), pcbCrearCurBloque)");
	  	pcbCrearCurAula.onChange(this.windowName + ".getDispAula()");
	  	dialogsCrearCurso.onClickCloseDialog('dialogsDispVisAula.close()');
	},
	
	callDuplicar: function() {
		if (pcbCrearCurPeriodo.valid(dialogsCrearCurso)) {
			pcbCrearCurCarrera.setModeReturnGetText(5);
			DuplPeriodo.setNvlAcademic(pcbCrearCurCarrera.getText());
			DuplPeriodo.setExtFnc('CrearCurso.duplicar()');
			DuplPeriodo.show();
		}
	},   
    
	duplicar: function() {
        var rlx = xmlStructs.createRecordList("rlx");

        rlx.addInt('reg', idPeriodoDuplPeriodo);
		rlx.add('reg', pcbCrearCurPeriodo);
		Tool.cnnSrv('CrearCursoObject', 'duplicarPeriodoCrearCurso', this.windowName + '.limpiar()', rlx);
	},
	
    getDispAula: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (pcbCrearCurAula.valid(dialogsCrearCurso)) {
			rlx.add('reg',pcbCrearCurPeriodo);
			rlx.add('reg',pcbCrearCurAula);
			rlx.add('reg',pcbCrearCurTipoHorario);
			Tool.cnnSrv('CrearCursoObject', 'getDispAula', this.windowName + '.loadDispAula()', rlx);
		}
    },

    loadDispAula: function() {
    	ProcCrearCurso.setAulaDisp(json('getDispAula').data);
		dialogsCrearCurso.setMsg(xmlHttpReq.objStsResponse.shortInfo);
    	dlgWait.hide();
    },
	
    buscar: function() {
		var rlx = xmlStructs.createRecordList("rlx");
		
		this.idCurso = 0;
		imgButtonsCrearCurAgregar.setCaption('Agregar');
		imgButtonsCrearCurModificar.setCaption('Modificar');
		imgButtonsCrearCurModificar.setStsValue(0);
		imgButtonsCrearCurAgregar.setDisable();
		imgButtonsCrearCurModificar.setDisable();
		imgButtonsCrearCurEliminar.setDisable();
		if (pcbCrearCurPosMateria.valid(dialogsCrearCurso))
			if (pcbCrearCurPeriodo.valid(dialogsCrearCurso))
       			if (pcbCrearCurPeriodo.valid(dialogsCrearCurso))
       				if (pcbCrearCurSeccion.valid(dialogsCrearCurso)) {
						rlx.add('reg',pcbCrearCurTipoHorario);
						rlx.add('reg',pcbCrearCurCarrera.setModeReturnGetText(2));
						rlx.add('reg',pcbCrearCurPeriodo);
						rlx.add('reg',pcbCrearCurMateria.setModeReturnGetText(0));
						rlx.add('reg',pcbCrearCurMateria.setModeReturnGetText(0));
						rlx.add('reg',pcbCrearCurSeccion);
						rlx.add('reg',pcbCrearCurSeccion);
						rlx.add('reg',pcbCrearCurPosMateria);
						rlx.add('reg',pcbCrearCurPosMateria);
						rlx.addInt('reg',-1, true);
						rlx.addInt('reg',-1, true);
						rlx.addStr('reg','-1', true);
						rlx.addStr('reg','-1', true);
						Tool.cnnSrv('CrearCursoObject', 'getCurso', this.windowName + '.loadBuscar()', rlx);
	       			}
    },
    
    loadBuscar: function() {
		dialogsCrearCurso.setMsg("Curso encontrado.");
    	ProcCrearCurso.loadData(json('getCurso').data);
    	
    	if (json('getCurso').data[0].length == 0) {
    		dialogsCrearCurso.setMsg(xmlHttpReq.objStsResponse.shortInfo);
			pcbCrearCurProfesor.setSelectedIndex(0);
    		imgButtonsCrearCurAgregar.setEnable();
    	} 
    	else {
    		dialogsCrearCurso.setMsg("Curso encontrado.");
    		this.idCurso = json('getCurso').data[7][0];
    		editsCrearCurCupMinimo.setValue(json('getCurso').data[14][0]);
    		editsCrearCurCupMaximo.setValue(json('getCurso').data[15][0]);
    		pcbCrearCurProfesor.findOption(json('getCurso').data[9][0]);
    		imgButtonsCrearCurAgregar.setDisable();
    		if (ProcCrearCurso.hrsLoadedProf == 0) {
    			imgButtonsCrearCurModificar.setEnable();
            	imgButtonsCrearCurEliminar.setEnable();
    		}
    	}
    	dlgWait.hide();
    },
    
	getLoadDataProfBloqInit: function(idp,findCourse) {
		var rlx = xmlStructs.createRecordList("rlx");

        if (findCourse) {
    		ProcCrearCurso.clearData();
    		ProcCrearCurso.CursoNuevo.removeAll();
        }
		Tool.rstPwrCmb(pcbCrearCurProfesor);
		Tool.rstPwrCmb(pcbCrearCurBloque);
		Tool.rstPwrCmb(pcbCrearCurAula);
        if (pcbCrearCurEstado.valid(dialogsCrearCurso)) {
    		ProcCrearCurso.delDisponibilidad();
        	if (pcbCrearCurPeriodo.valid(dialogsCrearCurso))
        		if (pcbCrearCurPeriodo.valid(dialogsCrearCurso))  
        			if (pcbCrearCurMateria.valid(dialogsCrearCurso)) {
        				rlx.add('reg',pcbCrearCurPeriodo);	
						rlx.add('reg',pcbCrearCurCarrera.setModeReturnGetText(2));	
						rlx.add('reg',pcbCrearCurMateria.setModeReturnGetText(0));	
						Tool.cnnSrv('CrearCursoObject', 'getProfesorTipoAula', this.windowName + '.loadDataProfBloqInit(' + idp + ', '+findCourse+')', rlx);
        			}
        			else
        				CrearCurso.buscar();
        }
        else {
        	pcbCrearCurMateria.setSelectedIndex(0);
        }
        ProcCrearCurso.setStsComboAula(false); //Deshabilita bloque y aula
		imgButtonsCrearCurAgregar.setCaption('Agregar');
		imgButtonsCrearCurModificar.setCaption('Modificar');
		imgButtonsCrearCurModificar.setStsValue(0);
		imgButtonsCrearCurAgregar.setDisable();
		imgButtonsCrearCurModificar.setDisable();
		imgButtonsCrearCurEliminar.setDisable();
	},
    
    loadDataProfBloqInit: function(idp, findCourse) {
		Tool.loadPowerComboData(dialogsCrearCurso, pcbCrearCurProfesor, 0, 1, json('getProfesor'));
        if (idp != 0) {
        	pcbCrearCurProfesor.findOption(idp);
        	ProcCrearCurso.getDataCombo();
        	ProcCrearCurso.validMatAndLoad();
        } 
		Tool.loadPowerComboData(dialogsCrearCurso, pcbCrearCurTipAula, 0, 1, json('getTipoAula'));
        if(findCourse)
        	CrearCurso.buscar();
    },

    getDispProf: function() {
		var rlx = xmlStructs.createRecordList("rlx");
		
		ProcCrearCurso.delDisponibilidad();
		if (pcbCrearCurProfesor.valid(dialogsCrearCurso)) {
			ProcCrearCurso.delAulaDisp();
			rlx.add('reg',pcbCrearCurProfesor);
			rlx.add('reg',pcbCrearCurTipoHorario);
			rlx.add('reg',pcbCrearCurPeriodo);
			Tool.cnnSrv('CrearCursoObject', 'getDispProfesor', this.windowName + '.loadDispProf()', rlx);
		}
    },
  
    loadDispProf: function() {
    	ProcCrearCurso.setDisponibilidad(json('getDispProfesor').data);
		dialogsCrearCurso.setMsg(xmlHttpReq.objStsResponse.shortInfo);
    	dlgWait.hide();
    	//if (ProcCrearCurso.idCursoCambiaHorario != -1)
    		imgButtonsCrearCurModificar.setEnable();
    },
    
    getHorario: function() {
    	var rlx = xmlStructs.createRecordList("rlx");
    	
    	if (pcbCurOrg.valid(dialogsCrearCurso)) {
        	ProcCrearCurso.clearHorario();
        	ProcCrearCurso.clearData();
    		rlx.add('reg',pcbCrearCurTipoHorario);	
    		Tool.cnnSrv('CrearCursoObject', 'getHorario', this.windowName + '.loadHorario()', rlx);
    	}
	},

	loadHorario: function() {
		ProcCrearCurso.init(tablesCreCurHorario, json('getHorario').data, tablesCreCurInformacion);
		dialogsCrearCurso.setMsg(xmlHttpReq.objStsResponse.shortInfo);
		dlgWait.hide();
		Tool.getPowerComboDataFnc(this.windowName + '.posicionPeriodo()','CrearCursoObject', 'getPeriodoNvlAcad', dialogsCrearCurso, pcbCrearCurPeriodo, 0, 1, pcbCrearCurCarrera.setModeReturnGetText(5));		
	},
	
	posicionPeriodo: function() {
		if(json('getPeriodoNvlAcad').data[0].length > 0) {
			pcbCrearCurPeriodo.setSelectedIndex(1);
			this.resetElements('per');	
		}
	},

	limpiar: function() {
		ProcCrearCurso.idCursoCambiaHorario = -1;
  		ProcCrearCurso.clearHorario();
  		ProcCrearCurso.clearData();
		ProcCrearCurso.CursoNuevo.removeAll();
    	Tool.rstPwrCmb(pcbCurOrg);
    	Tool.rstPwrCmb(pcbCrearCurSubOrg);
    	Tool.rstPwrCmb(pcbCrearCurCarrera);
    	Tool.rstPwrCmb(pcbCrearCurTipoHorario);
		Tool.rstPwrCmb(pcbCrearCurPosMateria);
    	Tool.rstPwrCmb(pcbCrearCurMateria);
    	Tool.rstPwrCmb(pcbCrearCurSeccion);
    	Tool.rstPwrCmb(pcbCrearCurAula);
		Tool.rstPwrCmb(pcbCrearCurPeriodo);
    	Tool.rstPwrCmb(pcbCrearCurProfesor);
    	Tool.rstPwrCmb(pcbCrearCurEstado);
        Tool.rstPwrCmb(pcbCrearCurBloque);
		Tool.rstPwrCmb(pcbCrearCurPeriodo);
		pcbCrearCurTipAula.enable();        		
        editsCrearCurCupMaximo.clear();
        editsCrearCurCupMinimo.clear();
        dialogsCrearCurso.setMsg("");
		imgButtonsCrearCurAgregar.setDisable();
		imgButtonsCrearCurModificar.setDisable();
		imgButtonsCrearCurEliminar.setDisable();
		imgButtonsCrearCurAgregar.setCaption('Agregar');
		imgButtonsCrearCurModificar.setCaption('Modificar');
		imgButtonsCrearCurModificar.setStsValue(0);
		Tool.cnnSrv('CrearCursoObject', 'getCrearCursoInit', this.windowName + '.loadDataInit()');
    },
    
	loadDataInit: function() {
    	Tool.loadPowerComboData(dialogsCrearCurso, pcbCurOrg, 0, 1, json('getData'));
    	Tool.loadPowerComboData(dialogsCrearCurso, pcbCrearCurEstado, 0, 1,  json('getMantEstCurso'));
    	if (pcbCrearCurEstado.getTotalOptions() > 1) pcbCrearCurEstado.setSelectedIndex(1);
    	Tool.loadPowerComboData(dialogsCrearCurso, pcbCrearCurSeccion, 0, 1,  json('getMantSeccion'));
    	Tool.getContext(dialogsCrearCurso, pcbCurOrg, pcbCrearCurSubOrg, pcbCrearCurCarrera, this.windowName + '.loadHorarioXOrg()');
    },

    loadHorarioXOrg : function() {
    	var rlx = xmlStructs.createRecordList("rlx");

    	pcbCrearCurTipoHorario.clear();
  		ProcCrearCurso.clearHorario();
    	rlx.add('reg', pcbCurOrg); 
        Tool.cnnSrv('CrearCursoObject', 'getMantSuborganizacion', this.windowName + '.loadDataTipoHorario()', rlx);
    },
    
    loadDataTipoHorario : function() {
    	Tool.loadPowerComboData(dialogsCrearCurso, pcbCrearCurTipoHorario, 0, 1, json('getTipoHorarioXOrg'));
    	pcbCrearCurTipoHorario.setSelectedIndex(1);
    	this.getHorario();
    },
    
	limpiarCoreUpdate: function() {
		ProcCrearCurso.idCursoCambiaHorario = -1;
  		ProcCrearCurso.clearData();
		ProcCrearCurso.CursoNuevo.removeAll();
    	pcbCrearCurMateria.setSelectedIndex(0);
    	pcbCrearCurEstado.setSelectedIndex(1);
		pcbCrearCurTipAula.enable();     		  		
        //editsCrearCurCupMaximo.clear();
        //editsCrearCurCupMinimo.clear();             
    	Tool.rstPwrCmb(pcbCrearCurProfesor);
        Tool.rstPwrCmb(pcbCrearCurBloque);
    	Tool.rstPwrCmb(pcbCrearCurAula);
        dialogsCrearCurso.setMsg("");
		imgButtonsCrearCurAgregar.setCaption('Agregar');
		imgButtonsCrearCurModificar.setCaption('Modificar');
		imgButtonsCrearCurModificar.setStsValue(0);
		imgButtonsCrearCurAgregar.setDisable();
		imgButtonsCrearCurModificar.setDisable();
		imgButtonsCrearCurEliminar.setDisable();
		this.buscar();
        dlgWait.hide();
	},

    validateCoreUpdate : function() {
    	var rsp = false;    	
    	if (pcbCurOrg.valid(dialogsCrearCurso)) 
            if (pcbCrearCurSubOrg.valid(dialogsCrearCurso)) 
                if (pcbCrearCurCarrera.valid(dialogsCrearCurso)) 
					if (pcbCrearCurPosMateria.valid(dialogsCrearCurso))
						if (pcbCrearCurMateria.valid(dialogsCrearCurso))
							if (pcbCrearCurPeriodo.valid(dialogsCrearCurso))
                       			if (pcbCrearCurPeriodo.valid(dialogsCrearCurso))
                       				if (pcbCrearCurSeccion.valid(dialogsCrearCurso)) 
			    						if (editsCrearCurCupMinimo.valid(dialogsCrearCurso))                                                     
				  							if (editsCrearCurCupMaximo.valid(dialogsCrearCurso)) 
                                   				if (pcbCrearCurEstado.valid(dialogsCrearCurso)) 
                                   					if (pcbCrearCurProfesor.valid(dialogsCrearCurso))
                                   					   if(CrearCurso.validMaxMin())
                                   						   rsp = true;
    	return rsp;
    },
    
    validMaxMin : function()
    {
      var capMax = parseInt(editsCrearCurCupMaximo.getValue());
	  var capMin = parseInt(editsCrearCurCupMinimo.getValue());	
      //Chequea que el cupo mínimo no sea mayor al cupo máximo	 
	  if(capMin > capMax)
	  {
		ProcCrearCurso.setMsgErr('El cupo mínimo no puede ser mayor que el cupo máximo');
		return false;	
	  }
	  else
		return true;	
    },
    
    validCupoMax : function()
    {
      var capAula = parseInt(json('getCapAula').data[0][0]);
	  var capMax = parseInt(editsCrearCurCupMaximo.getValue());
	  if(capAula != undefined && capAula != NaN) 
	  {
		if(capMax != undefined && capMax != NaN) 
		{
		   //Chequea que el Cupo Max no exceda la capacidad max del salon	
		   if (capAula < capMax) 
		   {
			 ProcCrearCurso.setMsgErr('El cupo máximo no coincide con la capacidad máxima del aula');
			 return false;	
		   }  
		   else
			 return true;
		}
		else 
		{
		  ProcCrearCurso.setMsgErr('La capacidad máxima del aula no está definida, debe colocar un valor');
		  return false;
		}
	  }
	  else 
	  {
	    ProcCrearCurso.setMsgErr('No se tiene información sobre la capacidad del aula, verifique en la interfaz de aula y actualice la capacidad..!');
	    return false;	
	  }
    },
    
	reporte : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
        rep.setPositionIcon(1090,6);   
        //rep.setNoRepeatHead();
        //rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,0,1128,36,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addText(425, 23, 'CURSOS PLANIFICADOS',false);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','normal');
        rep.addBar(0,42,1128,88,rep.getRGBAObj(187,196,238,0.5),false);
        rep.addLine(0,40,1128,40,rep.getRGBAObj(210,210,210,1),1,false);
        rep.addLine(0,90,1128,90,rep.getRGBAObj(210,210,210,1),1,false); 
		rep.addText(20, 60,'ORGANIZACION:  '+pcbCurOrg.getOption(),false);
		rep.addText(20, 81, 'CARRERA:  '+pcbCrearCurCarrera.getOption(),false);
		rep.addText(550, 60, 'SUBORGANIZACION:  '+pcbCrearCurSubOrg.getOption(),false);
		rep.addText(550, 81, 'PERIODO:  '+pcbCrearCurPeriodo.getOption(),false);
		//************************ TABLE ENCABEZADO******************************************************************************************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);		
		rep.addTable('TablaRepoLisPlanificacion',['Nº','Posicion','Materia','Sección','Profesor','Estado','Cupo Min','Cupo Max','Inscritos'],560,94);
        rep.setTotalRowTable(35);
		rep.setHeightRow(18);
        rep.setSizeColumnArray([30,75,380,65,255,80,85,85,75]);
        rep.setAlignData(['center','center','left','center','left','center','center','center','right']); 
        rep.addJsonData('TablaRepoLisPlanificacion','getReporteCrearCurso',[0,1,2,3,4,5,6,7,8]);  		
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	coreReporte: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (pcbCrearCurCarrera.valid(dialogsCrearCurso))
        	if (pcbCrearCurPeriodo.valid(dialogsCrearCurso)) {
           	  	rlx.add('reg', pcbCrearCurPeriodo);
           	  	rlx.add('reg', pcbCrearCurCarrera.setModeReturnGetText(2));
           	  	rlx.add('reg', pcbCrearCurPosMateria);
           	  	rlx.add('reg', pcbCrearCurPosMateria);
           	  	rlx.add('reg', pcbCrearCurSeccion);
           	  	rlx.add('reg', pcbCrearCurSeccion);
           	  	rlx.add('reg', pcbCrearCurPeriodo);
           	  	rlx.add('reg', pcbCrearCurCarrera.setModeReturnGetText(2));
           	  	rlx.add('reg', pcbCrearCurPosMateria);
           	  	rlx.add('reg', pcbCrearCurPosMateria);
           	  	rlx.add('reg', pcbCrearCurSeccion);
           	  	rlx.add('reg', pcbCrearCurSeccion);
           	  	Tool.cnnSrv('CrearCursoObject', 'getReporteCrearCurso', this.windowName + '.reporte()', rlx);
        	}
    },	
    
    coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (this.validateCoreUpdate()) { 
			if (ProcCrearCurso.hrsLoadedProf > 0) 
				if (methodName == 'eliminar') {
					rlx.addInt('reg', ProcCrearCurso.getIdCursoFromCell());
					Tool.cnnSrv('CrearCursoObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()', rlx);
				}
				else 
					Tool.cnnSrv('CrearCursoObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()', ProcCrearCurso.getRecordListCursoNuevo());
			else {
				if (methodName == 'eliminar') 
					rlx.addInt('reg', this.idCurso);
				else if (methodName == 'modificar') {
					if (pcbCrearCurAula.getOption() == '') {
						rlx.add('reg', pcbCrearCurProfesor);
						rlx.add('reg', pcbCrearCurEstado);
						rlx.add('reg', editsCrearCurCupMinimo);
						rlx.add('reg', editsCrearCurCupMaximo);
						rlx.addInt('reg', this.idCurso);
					}
					else {
   					    if (CrearCurso.validCupoMax()) {
   							rlx.add('reg', pcbCrearCurProfesor);
   					    	rlx.add('reg', pcbCrearCurEstado);
   					    	rlx.add('reg', editsCrearCurCupMinimo);
   					    	rlx.add('reg', editsCrearCurCupMaximo);
   					    	rlx.addInt('reg', this.idCurso);
   					    }
					}
				}
				else { 
					rlx.add('reg', pcbCrearCurMateria.setModeReturnGetText(0));
					rlx.add('reg', pcbCrearCurProfesor);
					rlx.add('reg', pcbCrearCurPeriodo);
					rlx.add('reg', pcbCrearCurEstado);
					rlx.add('reg', pcbCrearCurSeccion);
					rlx.add('reg', editsCrearCurCupMinimo);
					rlx.add('reg', editsCrearCurCupMaximo);
				}
				Tool.cnnSrv('CrearCursoObject', methodName + this.windowName + 'SH', this.windowName + '.limpiarCoreUpdate()', rlx);
			}
	    }
	}
};
