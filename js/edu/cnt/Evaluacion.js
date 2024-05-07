var dialogsEvaluacion = new Object();
var powerComboBoxCargNotNvlAcad = new Object();
var powerComboBoxCargNotLapso = new Object();
var powerComboBoxCargNotPeriodo = new Object();
var pcbCargNotOrg = new Object();
var pcbCargNotSubOrg = new Object();
var pcbCargNotCarrera = new Object();
var powerComboBoxCargNotMateria = new Object();
var powerComboBoxCargNotSeccion = new Object();
var powerComboBoxCargNotDescripcion = new Object();
var editsCargNotTipoEvaluacion = new Object(); 
var editsCargNotPonderacion = new Object();
var editsCargNotFaltaPtjEvaluado = new Object();
var editsCargNotTotEvaluado = new Object();
var editsCargNotNotCarEvaluacion = new Object();
var calendarsCargNotFecha = new Object();
var powerComboBoxCargNotHorInicio = new Object();
var powerComboBoxCargNotHorInicio2 = new Object();
var powerComboBoxCargNotHorFin = new Object();
var powerComboBoxCargNotHorFin2 = new Object();
var imagesEvaluacion = new Object();
var gridsEvaluacion = new Object();
var imgButtonsEvasGuardar = new Object();
var imgButtonsEvasLimpiar = new Object();
var imgButtonsEvasReporte = new Object();
var imgButtonsEvasSalir = new Object();
var mwEvaluacion = new Object();// minWindow
var rowCell = 0;
var tipoEval = 0;//Def 1:Parcial

var Evaluacion = {
	windowName : 'Evaluacion',
	isCreate : false,
	idPlanEval : 0,
	minNota : 1,
	maxNota : 20,
	abrv : [],
	rowGridSetData : 0,
	
	show: function() {
		if (!this.isCreate)	{
			this.init();
			this.isCreate = true;
		}
		if (dialogsEvaluacion.isByClean())
 			this.limpiar();			
		dialogsEvaluacion.show();
	},
	
	hide: function() {
		dialogsEvaluacion.hide();
	},
	
	createMWs: function() {
		mwEvaluacion = desktop.addMinWindow('Evaluación', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsEvaluacion.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	showPeriodo: function() {
		powerComboBoxCargNotLapso.hide();	
		powerComboBoxCargNotPeriodo.show();
	},
	
	showLapso: function() {
		powerComboBoxCargNotLapso.show();	
		powerComboBoxCargNotPeriodo.hide();
		powerComboBoxCargNotLapso.setBGImg(powerComboBox.bgError);
	},	

	dialogsEvaluacion_Init: function() {
		dialogsEvaluacion.setMinimizeXY(0,0);
		dialogsEvaluacion.setCenterScreen();
		dialogsEvaluacion.addSpace(0,0,20);
		dialogsEvaluacion.addLn(1,1,1);
		dialogsEvaluacion.setHeightCell(1,1,17);
	
		var c1 = container.create("c1",'Datos del Curso', 30);
		c1.setDimension(350,505);
		c1.setMarginLeftBarTitle(130);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#1e1e1e');
		c1.addObject(powerComboBoxCargNotNvlAcad, 35,70);
		c1.addObject(powerComboBoxCargNotPeriodo, 35,106);
		c1.addObject(powerComboBoxCargNotLapso, 35,106);
		c1.addObject(pcbCargNotOrg, 35,142);
		c1.addObject(pcbCargNotSubOrg, 35,178);
		c1.addObject(pcbCargNotCarrera, 35,214);
		c1.addObject(powerComboBoxCargNotMateria, 35,250);
		c1.addObject(powerComboBoxCargNotSeccion, 35,286);
		c1.addObject(editsCargNotFaltaPtjEvaluado, 35,322);
		c1.addObject(editsCargNotTotEvaluado, 35,358);
		c1.addObject(powerComboBoxCargNotDescripcion, 35,394);
		c1.addObject(editsCargNotTipoEvaluacion, 35,430);
		c1.addObject(editsCargNotPonderacion, 35,466);
		c1.addObject(editsCargNotNotCarEvaluacion, 35,502);
	
		var c2 = container.create("c2",'Datos de Evaluación del Estudiante', 11);
		c2.setDimension(539,70);
		c2.setMarginLeftBarTitle(209);
		c2.setPropertyMarco('groove',1,'#7e7e7e');
		c2.setFontTitle('verdana', 11, '#1e1e1e');
		c2.addObject(calendarsCargNotFecha.getEditCalendar(), 376,70);
		calendarsCargNotFecha.setWidthEditCalendar(70);
		calendarsCargNotFecha.setCaption('Fecha:',1,43);
		calendarsCargNotFecha.sendToFrom(100);
		c2.addObject(powerComboBoxCargNotHorInicio, 525,70);
		powerComboBoxCargNotHorInicio.setWidthCombo(30);
		c2.addObject(powerComboBoxCargNotHorInicio2, 648,70);
		powerComboBoxCargNotHorInicio2.setWidthCombo(30);
		c2.addObject(powerComboBoxCargNotHorFin, 719,70);
		powerComboBoxCargNotHorFin.setWidthCombo(30);
		c2.addObject(powerComboBoxCargNotHorFin2, 827,70);
		powerComboBoxCargNotHorFin2.setWidthCombo(30);
		c2.addObject(imagesEvaluacion, 889,67);
		imagesEvaluacion.setSize(19,19);
		dialogsEvaluacion.addObjToDialog(c1, 2, 1);
		dialogsEvaluacion.addObjToDialog(c2, 2, 1);

//IMGBUTTONS//
		dialogsEvaluacion.addObject(imgButtonsEvasGuardar,238,565);
		imgButtonsEvasGuardar.setDimension(90,22);
		dialogsEvaluacion.addObject(imgButtonsEvasLimpiar,358, 565);
		imgButtonsEvasLimpiar.setDimension(90,22);
		dialogsEvaluacion.addObject(imgButtonsEvasReporte,478, 565);
		imgButtonsEvasReporte.setDimension(90,22);
		dialogsEvaluacion.addObject(imgButtonsEvasSalir,598, 565);
		imgButtonsEvasSalir.setDimension(90,22);
	
		for(var row=1; row<21; row++) {
			gridsEvaluacion.setEditCell(row,6);
			gridsEvaluacion.setEditCell(row,7);
		}
		dialogsEvaluacion.addObject(gridsEvaluacion.getObject(), 373,115);
		Evaluacion.showPeriodo();
	},
  
	gridsEvaluacion_Init: function() {
		gridsEvaluacion.setFixColRow(false,true);
		gridsEvaluacion.addTitleVectorX(['Fecha','Hr. Ini.','Hr. Fin','Estudiante','Cedula','Nota','deEval','ptjEval','idPers','idPlanEval','idCurso','idPeriodo','ptjNota','deMateria','deTipEval','idNvl','idLapso']);
		gridsEvaluacion.showData(); 
		gridsEvaluacion.setSizeCol(1,70);
		gridsEvaluacion.setSizeCol(2,40);
		gridsEvaluacion.setSizeCol(3,40);   
		gridsEvaluacion.setSizeCol(4,410);
		gridsEvaluacion.setSizeCol(5,86);
		gridsEvaluacion.setSizeCol(6,40);
		gridsEvaluacion.setSizeCol(7,0);
		gridsEvaluacion.setSizeCol(8,0);
		gridsEvaluacion.setSizeCol(9,0);
		gridsEvaluacion.setSizeCol(10,0);
		gridsEvaluacion.setSizeCol(11,0);
		gridsEvaluacion.setSizeCol(12,0);
		gridsEvaluacion.setSizeCol(13,0);
		gridsEvaluacion.setSizeCol(14,0);
		gridsEvaluacion.setSizeCol(15,0);
		gridsEvaluacion.setSizeCol(16,0);
		gridsEvaluacion.setSizeCol(17,0);
		gridsEvaluacion.hideCol(1);
		gridsEvaluacion.hideCol(2);
		gridsEvaluacion.hideCol(3);
		gridsEvaluacion.hideCol(7);
		gridsEvaluacion.hideCol(8);
		gridsEvaluacion.hideCol(9);
		gridsEvaluacion.hideCol(10);
		gridsEvaluacion.hideCol(11);
		gridsEvaluacion.hideCol(12);
		gridsEvaluacion.hideCol(13);
		gridsEvaluacion.hideCol(14);
		gridsEvaluacion.hideCol(15);
		gridsEvaluacion.hideCol(16);
		gridsEvaluacion.hideCol(17);
		gridsEvaluacion.autoSaveEnable();
		gridsEvaluacion.setXMLStruct(xmlStructs);
	},
  
  	callEvalAlumno: function() {
  		if(gridsEvaluacion.getDataCell(4).trim()!='') {	
  			dialogsEvaluacion.setMsg('');  
  			EvalAlumno.show();
  		}
  		else
  			dialogsEvaluacion.setMsg('La fila seleccionada debe contener información del alumno para ver su detalle...');  
  	},
   
  	nextValue: function() {
  		rowCell = gridsEvaluacion.getRowCell() + 1;      
  		if(rowCell >= gridsEvaluacion.getTotalRows()) {          
  			rowCell = gridsEvaluacion.getTotalRows()-1;
  			gridsEvaluacion.nextValue();
  		} 
  		gridsEvaluacion.setFocusCell(rowCell,6);   
  		gridsEvaluacion.selectedRow(rowCell);    
  	},
  
  	isAbr: function(str) {
  		for(var i=0; i<this.abrv.length; i++) {
  			if(this.abrv[i].trim()==str.trim())
  				return true;  
  		}  
  		return false;
  	},
  
  isInicialAbr: function(str) {
	for(var i=0; i<this.abrv.length; i++)
	{	
	  if(this.abrv[i].charAt(0)==str)
	    return true;  
	}  
	return false;  
  },
  
  checkKeyPress: function() {
    rowCell = gridsEvaluacion.getRowCell();  
    var d5 = gridsEvaluacion.getDataCell(5).trim();
    if(d5!='')
    {
      var kp = gridsEvaluacion.getDataCell(6);  
      //gridsEvaluacion.setDataCell(rowCell,6,kp.toUpperCase());
      if(isNaN(kp.trim()))
      {
        if(!Evaluacion.isInicialAbr(kp.charAt(0)))
    	{	
    	  dialogsEvaluacion.setMsg('ERROR: LA ABREVIATURA '+kp+' NO ES VALIDA',true);
    	  gridsEvaluacion.getEdit(rowCell, 6).value='';
    	  gridsEvaluacion.setFocusCell(rowCell,6);  
    	}
        if((!Evaluacion.isAbr(kp)) && (kp.length > 1))
    	{	
    	  dialogsEvaluacion.setMsg('ERROR: LA ABREVIATURA '+kp+' NO ES VALIDA',true);
    	  gridsEvaluacion.getEdit(rowCell, 6).value='';
    	  gridsEvaluacion.setFocusCell(rowCell,6);  
    	}
        if(kp.length > 2)
    	{	
    	  dialogsEvaluacion.setMsg('ERROR: LA NOTA '+kp+' NO ES VALIDA',true);
          gridsEvaluacion.getEdit(rowCell, 6).value='';
    	  gridsEvaluacion.setFocusCell(rowCell,6);  
    	}    	
      }
      else
      {
        var n = parseFloat(kp.trim());   
        if( n < this.minNota || n > this.maxNota)  
        {
    	  //gridsEvaluacion.setDataCell(rowCell,6,'');	
          dialogsEvaluacion.setMsg('ERROR: LA NOTA '+kp+' NO ES VALIDA',true);
          gridsEvaluacion.getEdit(rowCell, 6).value='';
          gridsEvaluacion.setFocusCell(rowCell,6);
        }
        else
          dialogsEvaluacion.setMsg('');
      }
    }
	this.limpiarFeHoIniHoFin();
  },
     
  	setAbr: function() {
  		gridsEvaluacion.setFocusCell(rowCell,6);
  	},
  
	create: function() {
      dialogsEvaluacion = dialogs.create('dialogsEvaluacion',0,0,932,580,'EVALUAR');  
	  dialogsEvaluacion.setAdjY(20);
	  powerComboBoxCargNotNvlAcad = powerComboBox.create('powerComboBoxCargNotNvlAcad','powerComboBoxCargNotNvlAcad','Nivel Academico (+):',1,122);    
	  powerComboBoxCargNotNvlAcad.setWidthCombo(177);  5
	  powerComboBoxCargNotNvlAcad.addEmptyOption();
	  powerComboBoxCargNotNvlAcad.setValidEmpty();
	  powerComboBoxCargNotNvlAcad.enableReadOnlyEditor();
	  powerComboBoxCargNotNvlAcad.enableOnChangeToEmptyOption();
	  powerComboBoxCargNotPeriodo = powerComboBox.create('powerComboBoxCargNotPeriodo','powerComboBoxCargNotPeriodo','Periodo (^):',1,122);    
	  powerComboBoxCargNotPeriodo.setWidthCombo(177);  
      powerComboBoxCargNotPeriodo.addEmptyOption();
      powerComboBoxCargNotPeriodo.setValidEmpty();
      powerComboBoxCargNotPeriodo.enableReadOnlyEditor();
      powerComboBoxCargNotPeriodo.enableOnChangeToEmptyOption();
      powerComboBoxCargNotLapso = powerComboBox.create('powerComboBoxCargNotLapso','powerComboBoxCargNotLapso','Lapso (^):',1,122);
      powerComboBoxCargNotLapso.setWidthCombo(177);
  	  powerComboBoxCargNotLapso.setValidEmpty();
  	  powerComboBoxCargNotLapso.enableReadOnlyEditor();
  	  powerComboBoxCargNotLapso.addEmptyOption();
  	  powerComboBoxCargNotLapso.enableOnChangeToEmptyOption();
  	  powerComboBoxCargNotLapso.setFieldFind(true);
	  pcbCargNotOrg = powerComboBox.create('pcbCargNotOrg','pcbCargNotOrg','Organización (+):',1,122);    
	  pcbCargNotOrg.setWidthCombo(177);  
      pcbCargNotOrg.addEmptyOption();
      pcbCargNotOrg.setValidEmpty();
      pcbCargNotOrg.enableReadOnlyEditor();
      pcbCargNotOrg.enableOnChangeToEmptyOption();
	  pcbCargNotSubOrg = powerComboBox.create('pcbCargNotSubOrg','pcbCargNotSubOrg','Suborganización (^):',1,122); 
	  pcbCargNotSubOrg.setWidthCombo(177);       
      pcbCargNotSubOrg.addEmptyOption();
      pcbCargNotSubOrg.setValidEmpty();
      pcbCargNotSubOrg.enableReadOnlyEditor();
      pcbCargNotSubOrg.enableOnChangeToEmptyOption();
	  pcbCargNotCarrera = powerComboBox.create('pcbCargNotCarrera','pcbCargNotCarrera','Carrera (^):',1,122); 
	  pcbCargNotCarrera.setWidthCombo(177);         
      pcbCargNotCarrera.addEmptyOption();
      pcbCargNotCarrera.setValidEmpty();
      pcbCargNotCarrera.enableReadOnlyEditor();
      pcbCargNotCarrera.enableOnChangeToEmptyOption();
	  powerComboBoxCargNotMateria = powerComboBox.create('powerComboBoxCargNotMateria','powerComboBoxCargNotMateria','Materia (^):',1,122); 
	  powerComboBoxCargNotMateria.setWidthCombo(177);       
      powerComboBoxCargNotMateria.addEmptyOption();
      powerComboBoxCargNotMateria.setValidEmpty();
      powerComboBoxCargNotMateria.enableReadOnlyEditor();
      powerComboBoxCargNotMateria.enableOnChangeToEmptyOption();
      powerComboBoxCargNotMateria.setDataType('string');
	  powerComboBoxCargNotSeccion = powerComboBox.create('powerComboBoxCargNotSeccion','powerComboBoxCargNotSeccion','Sección (^):',1,122);
	  powerComboBoxCargNotSeccion.setWidthCombo(177);        
      powerComboBoxCargNotSeccion.addEmptyOption();
      powerComboBoxCargNotSeccion.setValidEmpty();
      powerComboBoxCargNotSeccion.enableReadOnlyEditor();
      powerComboBoxCargNotSeccion.enableOnChangeToEmptyOption();
	  powerComboBoxCargNotDescripcion = powerComboBox.create('powerComboBoxCargNotDescripcion','powerComboBoxCargNotDescripcion','Contenido / Tema:',1,122);
	  powerComboBoxCargNotDescripcion.setWidthCombo(177); 
      powerComboBoxCargNotDescripcion.setValidEmpty();
      powerComboBoxCargNotDescripcion.enableReadOnlyEditor();
      powerComboBoxCargNotDescripcion.addEmptyOption();
      powerComboBoxCargNotDescripcion.enableOnChangeToEmptyOption();
	  editsCargNotPonderacion = edits.create('editsCargNotPonderacion','editsCargNotPonderacion','Ponderación de la Evaluación:',1,285,'normal');      
      editsCargNotPonderacion.setValidEmpty(); 
	  editsCargNotPonderacion.setValidInteger(); 
	  editsCargNotFaltaPtjEvaluado = edits.create('editsCargNotFaltaPtjEvaluado','editsCargNotFaltaPtjEvaluado','Falta por Evaluar en la Planificación:',1,285,'normal');      
	  editsCargNotFaltaPtjEvaluado.setValidEmpty();  
	  editsCargNotFaltaPtjEvaluado.setValidInteger(); 
	  editsCargNotTotEvaluado = edits.create('editsCargNotTotEvaluado','editsCargNotTotEvaluado','Evaluaciones Planificadas Sin Nota:',1,285,'normal');      
      editsCargNotTotEvaluado.setValidEmpty();  
	  editsCargNotTotEvaluado.setValidInteger(); 
	  editsCargNotTipoEvaluacion = edits.create('editsCargNotTipoEvaluacion','editsCargNotTipoEvaluacion','Forma de Evaluar:',1,122,'normal');      
      editsCargNotTipoEvaluacion.setValidEmpty();  
	  editsCargNotTipoEvaluacion.setValidInteger(); 
	  editsCargNotTipoEvaluacion.setSizeEdit(198);
	  editsCargNotTipoEvaluacion.readOnly(true);
	  editsCargNotNotCarEvaluacion = edits.create('editsCargNotNotCarEvaluacion','editsCargNotNotCarEvaluacion','Estudiante Sin Notas en la Evaluación:',1,285,'normal');      
      editsCargNotNotCarEvaluacion.setValidEmpty();  
	  editsCargNotNotCarEvaluacion.setValidInteger(); 
	  editsCargNotNotCarEvaluacion.setSizeEdit(35);
	  editsCargNotNotCarEvaluacion.readOnly(true);	
	  editsCargNotPonderacion.setSizeEdit(35);
	  editsCargNotPonderacion.readOnly(true);
	  editsCargNotFaltaPtjEvaluado.setSizeEdit(35);
	  editsCargNotFaltaPtjEvaluado.readOnly(true);
	  editsCargNotTotEvaluado.setSizeEdit(35);
	  editsCargNotTotEvaluado.readOnly(true);
      calendarsCargNotFecha = calendars.create('calendarsCargNotFecha');      
      calendarsCargNotFecha.setValidEmpty();
      powerComboBoxCargNotHorInicio = powerComboBox.create('powerComboBoxCargNotHorInicio','powerComboBoxCargNotHorInicio','Hora Inicio:',1,70);
	  powerComboBoxCargNotHorInicio.setWidthCombo(177); 
      powerComboBoxCargNotHorInicio.setValidEmpty();
      powerComboBoxCargNotHorInicio.enableReadOnlyEditor();
      powerComboBoxCargNotHorInicio.addEmptyOption();
      powerComboBoxCargNotHorInicio.enableOnChangeToEmptyOption();
      powerComboBoxCargNotHorInicio2 = powerComboBox.create('powerComboBoxCargNotHorInicio2','powerComboBoxCargNotHorInicio2',':',1,6);
	  powerComboBoxCargNotHorInicio2.setWidthCombo(177); 
      powerComboBoxCargNotHorInicio2.setValidEmpty();
      powerComboBoxCargNotHorInicio2.enableReadOnlyEditor();
      powerComboBoxCargNotHorInicio2.addEmptyOption();
      powerComboBoxCargNotHorInicio2.enableOnChangeToEmptyOption();
      powerComboBoxCargNotHorFin = powerComboBox.create('powerComboBoxCargNotHorFin','powerComboBoxCargNotHorFin','Hora Fin:',1,55);
	  powerComboBoxCargNotHorFin.setWidthCombo(177); 
      powerComboBoxCargNotHorFin.setValidEmpty();
      powerComboBoxCargNotHorFin.enableReadOnlyEditor();
      powerComboBoxCargNotHorFin.addEmptyOption();
      powerComboBoxCargNotHorFin.enableOnChangeToEmptyOption();
      powerComboBoxCargNotHorFin2 = powerComboBox.create('powerComboBoxCargNotHorFin2','powerComboBoxCargNotHorFin2',':',1,6);
	  powerComboBoxCargNotHorFin2.setWidthCombo(177); 
      powerComboBoxCargNotHorFin2.setValidEmpty();
      powerComboBoxCargNotHorFin2.enableReadOnlyEditor();
      powerComboBoxCargNotHorFin2.addEmptyOption();
      powerComboBoxCargNotHorFin2.enableOnChangeToEmptyOption();
      imagesEvaluacion = images.create('imagesEvaluacion','imagesEvaluacion','images/curve_1.png');
      hint.create();
	  hint.addToHintWithPos(imagesEvaluacion,"Actualizar Datos",dialogsEvaluacion.x1+815,dialogsEvaluacion.y1+52);
	  xFunct = function(){
		  hint.setPosition(imagesEvaluacion, dialogsEvaluacion.x1+815, dialogsEvaluacion.y1+52);
		};
		hint.onMouseOver('xFunct()');
      gridsEvaluacion = grids.create('gridsEvaluacion',20,17);
      imgButtonsEvasGuardar = imgButtons.create('imgButtonsEvasGuardar','Guardar.','ok.png');
      imgButtonsEvasLimpiar = imgButtons.create('imgButtonsEvasLimpiar','Limpiar','limpiar.png');
      imgButtonsEvasReporte = imgButtons.create('imgButtonsEvasReporte','Reporte','print.png');
      imgButtonsEvasSalir = imgButtons.create('imgButtonsEvasSalir','Salir','salir.png');
	},

	precargarComboBox: function() {
		//CARGA LAS HORAS
		for(var i=6; i<24; i++) {
			powerComboBoxCargNotHorInicio.addOptionAndSimpleValue(null,(i<10)?'0'+i:i,(i<10)?'0'+i:i);
			powerComboBoxCargNotHorFin.addOptionAndSimpleValue(null,(i<10)?'0'+i:i,(i<10)?'0'+i:i);
		} 
	  	//CARGA LOS MINUTOS
		for(var i=0; i<60; i++) {
			powerComboBoxCargNotHorInicio2.addOptionAndSimpleValue(null,(i<10)?'0'+i:i,(i<10)?'0'+i:i);
			powerComboBoxCargNotHorFin2.addOptionAndSimpleValue(null,(i<10)?'0'+i:i,(i<10)?'0'+i:i);
		}
		powerComboBoxCargNotHorInicio.setSizeHeight(105);
		powerComboBoxCargNotHorFin.setSizeHeight(105);
		powerComboBoxCargNotHorInicio2.setSizeHeight(105);
		powerComboBoxCargNotHorFin2.setSizeHeight(105);
	}, 

	init: function() {
  		this.create();
  		this.setEvents();
  		this.gridsEvaluacion_Init();
  		this.dialogsEvaluacion_Init();
		this.precargarComboBox();
  		this.createMWs();
  	},

	setEvents: function() {
		imagesEvaluacion.onClick(this.windowName + ".setData('img')");
		powerComboBoxCargNotNvlAcad.onChange(this.windowName + ".resetElements('nvl')");
		powerComboBoxCargNotLapso.onChange(this.windowName + ".resetElements('lap')");
		powerComboBoxCargNotPeriodo.onChange(this.windowName + ".resetElements('per')"); 
		pcbCargNotOrg.onChange(this.windowName + ".resetElements('org')");
		pcbCargNotSubOrg.onChange(this.windowName + ".resetElements('suborg')");
		pcbCargNotCarrera.onChange(this.windowName + ".resetElements('carr')");
		powerComboBoxCargNotMateria.onChange(this.windowName + ".resetElements('mat')");
		powerComboBoxCargNotSeccion.onChange(this.windowName + ".resetElements('sec')");
		powerComboBoxCargNotDescripcion.onChange(this.windowName + ".resetElements('tip')");
		gridsEvaluacion.onClickCells(this.windowName + ".setData('grid')");
		gridsEvaluacion.onEnter('Evaluacion.nextValue()');
		//AQUI LOS EVENTOS DEL GRID PARA LA CELDA DE NOTAS
		for(var i=1; i<gridsEvaluacion.getTotalRows(); i++)	{ 
		  gridsEvaluacion.onKeyUpCell(i, 6, 'Evaluacion.checkKeyPress()');
		  for(var j=1; j<gridsEvaluacion.getTotalCols(); j++)
		    gridsEvaluacion.onDblClickCell(i, j,"Evaluacion.callEvalAlumno()");
		}
	    imgButtonsEvasGuardar.onClick(this.windowName+".coreUpdate('guardar')");
	  	imgButtonsEvasLimpiar.onClick(this.windowName + ".limpiar()");
	  	imgButtonsEvasReporte.onClick(this.windowName + ".reporte()");
	  	imgButtonsEvasSalir.onClick("dialogsEvaluacion.close();");
    },

    loadDataPeriodo: function() {
		Tool.loadPowerComboData(dialogsEvaluacion, powerComboBoxCargNotDescripcion, 0, 1, json('getCargaNotasPlanEvaluacion'));

		editsCargNotFaltaPtjEvaluado.setValue(json('getCargaNotasPlanEvaluacion').data[4][0] + ' %');
    	if (parseInt(editsCargNotFaltaPtjEvaluado.getValue()) > 0)
    		editsCargNotFaltaPtjEvaluado.setBGImgEdit(edits.bgError);
    	else
    		editsCargNotFaltaPtjEvaluado.setBGImgEdit(edits.bgDisable);
		
		editsCargNotTotEvaluado.setValue(json('getCargaNotasPlanEvaluacion').data[2][0] + ' %');

		if (powerComboBoxCargNotLapso.getOption() == "")
			Tool.getGridData('MantObject', 'getCargaNotasDefinitiva', dialogsEvaluacion, gridsEvaluacion, false, powerComboBoxCargNotSeccion);
		else
			Tool.getGridData('MantObject', 'getNotasCursoLapso', dialogsEvaluacion, gridsEvaluacion, false, powerComboBoxCargNotSeccion, powerComboBoxCargNotLapso, powerComboBoxCargNotSeccion);
    },

    loadDataAlumno: function() {
    	editsCargNotTipoEvaluacion.setValue(json('getCargaNotasAlumno').data[14][0]);
    	editsCargNotPonderacion.setValue(json('getCargaNotasAlumno').data[7][0] + ' %');
    	editsCargNotNotCarEvaluacion.setValue(json('getCargaNotasAlumno').data[12][0] + ' %');
		Tool.loadGridData(dialogsEvaluacion, gridsEvaluacion, false, json('getCargaNotasAlumno'));
    },

    loadDataOrgLapso: function() {
        var rlx = xmlStructs.createRecordList("rlx");

        Tool.loadPowerComboData(dialogsEvaluacion, pcbCargNotOrg, 0, 1, json('getCargaNotasOrganizacion'));
		Tool.loadPowerComboData(dialogsEvaluacion, powerComboBoxCargNotLapso, 0, 1, json('getCargaNotasLapso'));
  		if (json('getCargaNotasLapso').data[0].length == 1) {
  			powerComboBoxCargNotLapso.setSelectedIndex(1); 
  		}
  		if (json('getCargaNotasOrganizacion').data[0].length == 1) {
  			pcbCargNotOrg.setSelectedIndex(1); 
  			rlx.add('reg', powerComboBoxCargNotPeriodo);
  			rlx.add('reg', pcbCargNotOrg);
  			Tool.cnnSrv('MantObject', 'getCargaNotasSubOrganizacion', this.windowName + '.loadDataSubOrg()', rlx);
  		}
    },
    
    loadDataSubOrg: function() {
        var rlx = xmlStructs.createRecordList("rlx");

        Tool.loadPowerComboData(dialogsEvaluacion, pcbCargNotSubOrg, 0, 1, json('getCargaNotasSubOrganizacion'));
  		if (json('getCargaNotasSubOrganizacion').data[0].length == 1) {
  			pcbCargNotSubOrg.setSelectedIndex(1); 
  			rlx.add('reg', powerComboBoxCargNotPeriodo);
  			rlx.add('reg', pcbCargNotSubOrg);
  			Tool.cnnSrv('MantObject', 'getCargaNotasCarrera', this.windowName + '.loadDataCarre()', rlx);
  		}
    },
    
    loadDataCarre: function() {
        Tool.loadPowerComboData(dialogsEvaluacion, pcbCargNotCarrera, 0, 1, json('getCargaNotasCarrera'));
  		if (json('getCargaNotasCarrera').data[0].length == 1) {
  			pcbCargNotCarrera.setSelectedIndex(1); 
    		Tool.getPowerComboData('MantObject', 'getCargaNotasMateria', dialogsEvaluacion, powerComboBoxCargNotMateria, -1, 1, powerComboBoxCargNotPeriodo, pcbCargNotCarrera);    	
  		}
    },
    
    resetElements: function(element) {
        var rlx = xmlStructs.createRecordList("rlx");

        editsCargNotTipoEvaluacion.setValue("");   		
  		editsCargNotPonderacion.setValue("");
  		editsCargNotNotCarEvaluacion.setValue("");
  		calendarsCargNotFecha.clear();
  		powerComboBoxCargNotHorInicio.setSelectedIndex(0);
  		powerComboBoxCargNotHorInicio2.setSelectedIndex(0);
  		powerComboBoxCargNotHorFin.setSelectedIndex(0);
  		powerComboBoxCargNotHorFin2.setSelectedIndex(0);
  		gridsEvaluacion.clean();  

  		if (element == 'nvl') {
  			this.showPeriodo();
  			Tool.rstPwrCmb(powerComboBoxCargNotPeriodo);
			Tool.rstPwrCmb(pcbCargNotOrg);
			Tool.rstPwrCmb(pcbCargNotSubOrg);
	  		Tool.rstPwrCmb(pcbCargNotCarrera);
	  		Tool.rstPwrCmb(powerComboBoxCargNotMateria);
	  		Tool.rstPwrCmb(powerComboBoxCargNotSeccion);
	  		Tool.rstPwrCmb(powerComboBoxCargNotDescripcion);	
	  		editsCargNotFaltaPtjEvaluado.setValue("");
	  		editsCargNotTotEvaluado.setValue("");
	    	if (powerComboBoxCargNotNvlAcad.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getCargaNotasPeriodo', dialogsEvaluacion, powerComboBoxCargNotPeriodo, 0, 1, powerComboBoxCargNotNvlAcad);
		}
		else if (element == 'per') {
			Tool.rstPwrCmb(pcbCargNotOrg);
			Tool.rstPwrCmb(pcbCargNotSubOrg);
	  		Tool.rstPwrCmb(pcbCargNotCarrera);
	  		Tool.rstPwrCmb(powerComboBoxCargNotMateria);
	  		Tool.rstPwrCmb(powerComboBoxCargNotSeccion);
	  		Tool.rstPwrCmb(powerComboBoxCargNotDescripcion);	
	  		editsCargNotFaltaPtjEvaluado.setValue("");
	  		editsCargNotTotEvaluado.setValue("");
	    	if (powerComboBoxCargNotPeriodo.getOption() != "") {
		    	switch(parseInt(powerComboBoxCargNotNvlAcad.getText(),10)) {
		    		case 1 : { this.showLapso(); break; }
		    		case 2 : { this.showPeriodo(); break; }
		    		case 3 : { this.showPeriodo(); break; }
		    	}
	    		rlx.add('reg', powerComboBoxCargNotPeriodo);
	        	Tool.cnnSrv('MantObject', 'getCargaNotasOrganizacion', this.windowName + '.loadDataOrgLapso()', rlx);
	    	}
		}
		else if (element == 'org') {
			Tool.rstPwrCmb(pcbCargNotSubOrg);
	  		Tool.rstPwrCmb(pcbCargNotCarrera);
	  		Tool.rstPwrCmb(powerComboBoxCargNotMateria);
	  		Tool.rstPwrCmb(powerComboBoxCargNotSeccion);
	  		Tool.rstPwrCmb(powerComboBoxCargNotDescripcion);	
	  		editsCargNotFaltaPtjEvaluado.setValue("");
	  		editsCargNotTotEvaluado.setValue("");
	    	if (pcbCargNotOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getCargaNotasSubOrganizacion', dialogsEvaluacion, pcbCargNotSubOrg, 0, 1, powerComboBoxCargNotPeriodo, pcbCargNotOrg);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbCargNotCarrera);
	  		Tool.rstPwrCmb(powerComboBoxCargNotMateria);
	  		Tool.rstPwrCmb(powerComboBoxCargNotSeccion);
	  		Tool.rstPwrCmb(powerComboBoxCargNotDescripcion);	
	  		editsCargNotFaltaPtjEvaluado.setValue("");
	  		editsCargNotTotEvaluado.setValue("");
	    	if (pcbCargNotSubOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getCargaNotasCarrera', dialogsEvaluacion, pcbCargNotCarrera, 0, 1, powerComboBoxCargNotPeriodo, pcbCargNotSubOrg);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(powerComboBoxCargNotMateria);
	  		Tool.rstPwrCmb(powerComboBoxCargNotSeccion);
	  		Tool.rstPwrCmb(powerComboBoxCargNotDescripcion);	
	  		editsCargNotFaltaPtjEvaluado.setValue("");
	  		editsCargNotTotEvaluado.setValue("");
	    	if (pcbCargNotCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getCargaNotasMateria', dialogsEvaluacion, powerComboBoxCargNotMateria, -1, 1, powerComboBoxCargNotPeriodo, pcbCargNotCarrera);    	
		}
		else if (element == 'mat') {
	  		Tool.rstPwrCmb(powerComboBoxCargNotSeccion);
	  		Tool.rstPwrCmb(powerComboBoxCargNotDescripcion);	
	  		editsCargNotFaltaPtjEvaluado.setValue("");
	  		editsCargNotTotEvaluado.setValue("");
	    	if (powerComboBoxCargNotMateria.getOption() != "") {
	    		if (powerComboBoxCargNotLapso.isVisible())
	    			if (!powerComboBoxCargNotLapso.valid(dialogsEvaluacion)) {
	    				powerComboBoxCargNotMateria.setSelectedIndex(0); 
	    				return 0;
	    			}
	    		Tool.getPowerComboData('MantObject', 'getCargaNotasSeccion', dialogsEvaluacion, powerComboBoxCargNotSeccion, 0, 1, powerComboBoxCargNotPeriodo, powerComboBoxCargNotMateria.setModeReturnGetText(0));
	    	}	    		
		}
		else if (element == 'sec') {
			tipoEval=0;
		    gridsEvaluacion.setSizeCol(4,410);
			gridsEvaluacion.hideCol(1);
			gridsEvaluacion.hideCol(2);
			gridsEvaluacion.hideCol(3);
			gridsEvaluacion.setTitleColumn(6, 'DEF.');
			gridsEvaluacion.setReadOnlyCol(6);
	  		Tool.rstPwrCmb(powerComboBoxCargNotDescripcion);
	  		editsCargNotFaltaPtjEvaluado.setValue("");
	  		editsCargNotTotEvaluado.setValue("");
	    	if (powerComboBoxCargNotSeccion.getOption() != "") {
	    		rlx.add('reg', powerComboBoxCargNotSeccion);
	    		rlx.add('reg', powerComboBoxCargNotLapso);
	    		rlx.add('reg', powerComboBoxCargNotLapso);
	    		rlx.add('reg', powerComboBoxCargNotSeccion);
	    		rlx.add('reg', powerComboBoxCargNotLapso);
	    		rlx.add('reg', powerComboBoxCargNotLapso);
	    		rlx.add('reg', powerComboBoxCargNotSeccion);
	    		rlx.add('reg', powerComboBoxCargNotLapso);
	    		rlx.add('reg', powerComboBoxCargNotLapso);
	    		rlx.add('reg', powerComboBoxCargNotSeccion);
	    		rlx.add('reg', powerComboBoxCargNotLapso);
	    		rlx.add('reg', powerComboBoxCargNotLapso);
	    		Tool.cnnSrv('MantObject', 'getCargaNotasPlanEvaluacion', this.windowName + '.loadDataPeriodo()', rlx);
	    		imgButtonsEvasReporte.setEnable();	
	    	}
		}
		else if (element == 'tip') {
			tipoEval=1;
	    	if (powerComboBoxCargNotDescripcion.getOption() != "") {
	    		rlx.add('reg', powerComboBoxCargNotSeccion);
	    		rlx.add('reg', powerComboBoxCargNotDescripcion);
	    		rlx.add('reg', powerComboBoxCargNotLapso);
	    		rlx.add('reg', powerComboBoxCargNotLapso);
	    		rlx.add('reg', powerComboBoxCargNotSeccion);
	    		rlx.add('reg', powerComboBoxCargNotDescripcion);
	    		rlx.add('reg', powerComboBoxCargNotLapso);
	    		rlx.add('reg', powerComboBoxCargNotLapso);
	    		rlx.add('reg', powerComboBoxCargNotSeccion);
	    		rlx.add('reg', powerComboBoxCargNotDescripcion);
	    		rlx.add('reg', powerComboBoxCargNotLapso);
	    		rlx.add('reg', powerComboBoxCargNotLapso);
	    		Tool.cnnSrv('MantObject', 'getCargaNotasAlumno', this.windowName + '.loadDataAlumno()', rlx);
	    		
	    		gridsEvaluacion.setTitleColumn(6, 'Nota');
	    		gridsEvaluacion.setEditCol(6);
				gridsEvaluacion.setSizeCol(4,273);
				gridsEvaluacion.showCol(1);		
				gridsEvaluacion.showCol(2);
				gridsEvaluacion.showCol(3);	    
	    	}
		}
		else if (element == 'lap') {
			if (powerComboBoxCargNotSeccion.getOption() != "")
				this.resetElements('sec');			
		}
	},

	limpiarFeHoIniHoFin: function() { 
  		calendarsCargNotFecha.clear();
		calendarsCargNotFecha.hide();
		powerComboBoxCargNotHorInicio.setSelectedIndex(0);
		powerComboBoxCargNotHorInicio2.setSelectedIndex(0);
		powerComboBoxCargNotHorFin.setSelectedIndex(0);
		powerComboBoxCargNotHorFin2.setSelectedIndex(0);
	},
	
    setData: function(src) {
		if (gridsEvaluacion.getDataCell(1) != "") {
			if (src == "grid") {
				this.rowGridSetData = gridsEvaluacion.getRowCell();
				calendarsCargNotFecha.setFechaToEdit(gridsEvaluacion.getDataCell(1));
				powerComboBoxCargNotHorInicio.findOption(gridsEvaluacion.getDataCell(2).substring(0,2));
				powerComboBoxCargNotHorInicio2.findOption(gridsEvaluacion.getDataCell(2).substring(3,5));
				powerComboBoxCargNotHorFin.findOption(gridsEvaluacion.getDataCell(3).substring(0,2));
				powerComboBoxCargNotHorFin2.findOption(gridsEvaluacion.getDataCell(3).substring(3,5));
			}
			else {
				gridsEvaluacion.setDataCell(this.rowGridSetData, 1, calendarsCargNotFecha.getFechaFromEdit());
				gridsEvaluacion.setDataCell(this.rowGridSetData, 2, powerComboBoxCargNotHorInicio.getText() + ':' + powerComboBoxCargNotHorInicio2.getText());
				gridsEvaluacion.setDataCell(this.rowGridSetData, 3, powerComboBoxCargNotHorFin.getText() + ':' + powerComboBoxCargNotHorFin2.getText());
				this.limpiarFeHoIniHoFin();
			}
		}
	},

    limpiar: function() {
		Tool.rstPwrCmb(powerComboBoxCargNotNvlAcad);
		this.showPeriodo();
  		Tool.rstPwrCmb(powerComboBoxCargNotPeriodo);
		Tool.rstPwrCmb(pcbCargNotOrg);
		Tool.rstPwrCmb(pcbCargNotSubOrg);
  		Tool.rstPwrCmb(pcbCargNotCarrera);
  		Tool.rstPwrCmb(powerComboBoxCargNotMateria);
  		Tool.rstPwrCmb(powerComboBoxCargNotSeccion);
  		Tool.rstPwrCmb(powerComboBoxCargNotDescripcion);
  		editsCargNotFaltaPtjEvaluado.setValue("");
  		editsCargNotTotEvaluado.setValue("");
  		editsCargNotPonderacion.setValue("");
  		editsCargNotNotCarEvaluacion.setValue("");
  		editsCargNotTipoEvaluacion.setValue("");
  		calendarsCargNotFecha.clear();
  		calendarsCargNotFecha.hide();
  		powerComboBoxCargNotHorInicio.setSelectedIndex(0);
  		powerComboBoxCargNotHorInicio2.setSelectedIndex(0);
  		powerComboBoxCargNotHorFin.setSelectedIndex(0);
  		powerComboBoxCargNotHorFin2.setSelectedIndex(0);
  		gridsEvaluacion.clean();
  		dialogsEvaluacion.setMsg("");	 	
  		imgButtonsEvasReporte.setDisable();		
		Tool.cnnSrv('MantObject', 'getCargaNotasInicial', this.windowName + '.loadDataInicial()');
	},

	loadDataInicial: function() {
		this.minNota = json('getCargaNotasParametro').data[1][0];
		this.maxNota = json('getCargaNotasParametro').data[2][0];
		this.abrv = json('getCargaNotasEdoEval').data[0];
		Tool.loadPowerComboData(dialogsEvaluacion, powerComboBoxCargNotNvlAcad, 0, 1, json('getCargaNotasNivelAcademico'));
  		if (json('getCargaNotasNivelAcademico').data[0].length == 1) {
  			powerComboBoxCargNotNvlAcad.setSelectedIndex(1); 
	    	if (powerComboBoxCargNotNvlAcad.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getCargaNotasPeriodo', dialogsEvaluacion, powerComboBoxCargNotPeriodo, 0, 1, powerComboBoxCargNotNvlAcad);
  		}
    },

	limpiarCoreUpdate: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
        rlx.add('reg', powerComboBoxCargNotSeccion);
		rlx.add('reg', powerComboBoxCargNotDescripcion);
		rlx.add('reg', powerComboBoxCargNotLapso);
		Tool.cnnSrv('MantObject', 'getResultadoGuardarNotas', this.windowName + '.loadDataResultado()', rlx);
  		dlgWait.hide();
  	},
	
  	loadDataResultado: function() {
		editsCargNotTotEvaluado.setValue(json('getCargaNotasPlanEvaluacion').data[4][0] + ' %');
		editsCargNotTotEvaluado.setValue(json('getCargaNotasPlanEvaluacion').data[2][0] + ' %');
		editsCargNotNotCarEvaluacion.setValue(json('getPtjNotaCargada').data[0][0] + ' %');
		Tool.cnnSrvLessWaitMsg('MsjObject', 'enviarCalificacion', 'dlgWait.hide()', gridsEvaluacion.getXMLStruct("rlxListaEval", [1,2,3,6]));
  		gridsEvaluacion.clean();  
		Tool.loadGridData(dialogsEvaluacion, gridsEvaluacion, false, json('getCargaNotasAlumno'));    
		dialogsEvaluacion.setMsg('Cantidad de notas cargadas: ' + json('getCantAlumnoConSinNota').data[0][0].bold() + ', faltan: ' + json('getCantAlumnoConSinNota').data[1][0].bold());		
  	},
  	
	coreUpdate: function(methodName) {
		if (powerComboBoxCargNotLapso.isVisible())
			if (!powerComboBoxCargNotLapso.valid(dialogsEvaluacion))
				return 0;
		if (powerComboBoxCargNotDescripcion.valid(dialogsEvaluacion)) {
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()', gridsEvaluacion.getXMLStruct("rlxListaEval", [1,2,3,6]));
		}
		else
			Alert.show('Debe elegir una sección y contenido.', 'SISTEMA', Alert.TYPE_WARNING);
	},
  	
    getJsonReporte: function() {
    	if (powerComboBoxCargNotLapso.getOption() == "")
    		return 'getCargaNotasDefinitiva';
    	else
    		return 'getNotasCursoLapso';
    },
    
  	reporte: function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		var arrNotas=new Array();
		var tAPL=0;
        var tAP=0;
        var fecha='';
		var arrData = [[],[],[]];
		
		if(tipoEval==0)
		{
		  arrNotas = json(this.getJsonReporte()).data[5];
		  fecha = json(this.getJsonReporte()).data[0][0];
		  for(var i=0; i<arrNotas.length; i++){
			if(parseFloat(arrNotas[i]) < parseFloat(json('getCargaNotasParametro').data[0][0]))
			  tAPL++
			else
			  tAP++
		  };		  
		  arrData[0]=json(this.getJsonReporte()).data[4];//ci
		  arrData[1]=json(this.getJsonReporte()).data[3];//alumno
		  arrData[2]=json(this.getJsonReporte()).data[5];//nota
		}
		else
		{
		  arrNotas = json('getCargaNotasAlumno').data[5];
		  fecha = json('getCargaNotasAlumno').data[0][0]
		  for(var i=0; i<arrNotas.length; i++){
			if(parseFloat(arrNotas[i]) < parseFloat(json('getCargaNotasParametro').data[0][0]))
			  tAPL++
			else
			  tAP++
		  };
		  arrData[0]=json('getCargaNotasAlumno').data[4];//ci
		  arrData[1]=json('getCargaNotasAlumno').data[3];//alumno
		  arrData[2]=json('getCargaNotasAlumno').data[5];//nota	
		}
		rep = new Report('portrait');
        rep.setPositionIcon(756,2);
        ///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),13,'helvetica','normal');
		rep.addBar(0,0,1128,30,rep.getRGBAObj(210,200,200,0.9),false);
		rep.addText(310, 22, 'EVALUACION   PARCIAL',false);
        ///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,33,1128,85,rep.getRGBAObj(187,196,238,0.8),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9.0,'helvetica','normal','black');
		rep.addText(20, 48,'ORGANIZACIÓN: '+pcbCargNotOrg.getOption(),false);
		rep.addText(20, 64,'SUB-ORG.:            '+pcbCargNotSubOrg.getOption(),false);
		rep.addText(20, 81,'CARRERA:            '+pcbCargNotCarrera.getOption(),false);
		rep.addText(380, 48, 'SECCIÓN:      '+powerComboBoxCargNotSeccion.getOption(),false);
		rep.addText(540, 48, 'FECHA: '+fecha,false);
		rep.addText(380, 64, 'MATERIA:       '+powerComboBoxCargNotMateria.getOption(),false);
		rep.addText(380, 81, 'PERIODO:  '+powerComboBoxCargNotPeriodo.getOption(),false);
		rep.addBar(0,89,1128,122,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8.0,'helvetica','normal','black');
		if(tipoEval==0)
		  rep.addText(20, 100, 'TIPO DE EVALUACIÓN: DEFINITIVA',false)
		else
		  rep.addText(20, 100, 'TIPO DE EVALUACIÓN: '+powerComboBoxCargNotDescripcion.getOption(),false);
		if(tipoEval==0)
		  rep.addText(350, 100, 'TOTAL EVALUADO:  100%',false);
		else
		  rep.addText(20, 118, 'PONDERACIÓN: '+editsCargNotPonderacion.getText(),false);
		
		rep.addText(310, 118, 'TOTAL APROBADOS: '+tAP,false);
		rep.addText(570, 118, 'TOTAL APLAZADOS: '+tAPL,false);
		//////////////////////////////////////////TABLA DE DATOS///////////////////////////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
		rep.addTable('tablaEvalauciones',['Ci','Estudiante',gridsEvaluacion.getTitleColumn(6)],396,126);
        rep.setSizeColumnArray([80,640,80]);
        rep.setAlignData(['center','left','center']);
        rep.addMultiArrayData('tablaEvalauciones', arrData);
        rep.setTotalRowTable(33);
		rep.setHeightRow(21);
        //////////////////////////////////////////PIE DE PAGINA////////////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
        rep.render();
		rep.previewHTML();
	}
};