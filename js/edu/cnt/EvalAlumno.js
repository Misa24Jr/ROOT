var dialogsEvalAlumno = {};
var editsEvalAluCi = {};
var editsEvalAlumno = {};
var calendarsEvalAlumno = {};
var powerComboBoxEvalAluHorInicio = {};
var powerComboBoxEvalAluHorInicio2 = {};
var powerComboBoxEvalAluHorFin = {};
var powerComboBoxEvalAluHorFin2 = {};
var imagesEvalAlumno = {};
var gridsEvalAlumno = {};
var powerComboBoxEvalAluDefinitiva = {};
var imgButtonsEvalAluGuardar = {};
var imgButtonsEvalAluReporte = {};
var imgButtonsEvalAluSalir = {};
var gridsEvalAluCorregir = {};
var memoEvaAluComentario = {};
var imgButtonsEvaAluGuardar = {};
var mwEvalAlumno  = {};// minWindow
var rowCell2 = 0;

var EvalAlumno = {
	windowName: 'EvalAlumno',
	idPersona : 0,
	isCreate: false,
	rowGridSetData : 0,
	idPlanEval : 0,
	deMateria : '',
	deContenido : '',
	idTareaRecibir : 0,

	show: function(){
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		dialogsEvalAlumno.show();
		editsEvalAluCi.setValue(gridsEvaluacion.getDataCell(5));
        editsEvalAlumno.setValue(gridsEvaluacion.getDataCell(4));
        gridsEvalAlumno.clean();
        memoEvaAluComentario.clear();
        gridsEvalAluCorregir.clean();
        EvalAlumno.loadDataTipoEvalAlu();
	},
	
	hide: function(){
		dialogsEvalAlumno.hide();
	},
 	
	dialogsEvalAlumno_Init: function(){
		dialogsEvalAlumno.setMinimizeXY(0, 0);
		dialogsEvalAlumno.setCenterScreen();
		dialogsEvalAlumno.setEnableMinimize(false);
		dialogsEvalAlumno.addSpace(0, 0, 20);
		dialogsEvalAlumno.addLn(1,1,1);
		dialogsEvalAlumno.setHeightCell(1,1,10);
		dialogsEvalAlumno.addObjToDialog(editsEvalAluCi,2,1,24);
        editsEvalAluCi.setSizeEdit(149);
        editsEvalAluCi.readOnly(true);
		dialogsEvalAlumno.addObjToDialog(editsEvalAlumno,2,1,24);
        editsEvalAlumno.setSizeEdit(362);
        editsEvalAlumno.readOnly(true);
		dialogsEvalAlumno.adjAllMarginObj(2,1,15);
		var c2 = container.create("c2");
	    c2.addObject(calendarsEvalAlumno.getEditCalendar(), 20,64);
	    calendarsEvalAlumno.setWidthEditCalendar(126);
        calendarsEvalAlumno.setCaption('Fecha:',1,43);
        calendarsEvalAlumno.sendToFrom(100);
        c2.addObject(powerComboBoxEvalAluHorInicio, 227,64);
        powerComboBoxEvalAluHorInicio.setWidthCombo(30);
	    c2.addObject(powerComboBoxEvalAluHorInicio2, 351,64);
	    powerComboBoxEvalAluHorInicio2.setWidthCombo(30);
        c2.addObject(powerComboBoxEvalAluHorFin, 471,64);
        powerComboBoxEvalAluHorFin.setWidthCombo(30);
	    c2.addObject(powerComboBoxEvalAluHorFin2, 580,64);
        powerComboBoxEvalAluHorFin2.setWidthCombo(30);
        c2.addObject(imagesEvalAlumno, 640,62);
        imagesEvalAlumno.setSize(19,19);
	    dialogsEvalAlumno.addObjToDialog(c2, 3, 1);
		dialogsEvalAlumno.addLn(4,1,1);
		dialogsEvalAlumno.setHeightCell(4,1,36);
		dialogsEvalAlumno.addObjToDialog(gridsEvalAlumno.getObject(),5, 1);
		dialogsEvalAlumno.addLn(6,1,1);
		dialogsEvalAlumno.setHeightCell(6,1,15);
		dialogsEvalAlumno.addObjToDialog(imgButtonsEvalAluGuardar, 7, 1);
		dialogsEvalAlumno.addObjToDialog(imgButtonsEvalAluReporte, 7, 1);
		dialogsEvalAlumno.addObjToDialog(imgButtonsEvalAluSalir, 7, 1);
        dialogsEvalAlumno.adjAllMarginObj(7,1,25);
        dialogsEvalAlumno.leftMarginObj(7,1,0,159);     
		var c1 = container.create("c1","ACTIVIDAD ENVIADA POR EL ESTUDIANTE", 1);		
		c1.setDimension(654,208);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 14, '#1e1e1e');
		c1.addObject(memoEvaAluComentario,22,30);
		c1.addObject(imgButtonsEvaAluGuardar,540,32);
		dialogsEvalAlumno.addObject(c1, 12, 394);
		dialogsEvalAlumno.addObject(gridsEvalAluCorregir,13,460);
	},
	
	gridsEvalAluCorregir_Init : function(totalRows) {
		gridsEvalAluCorregir = customGrid.create('gridsEvalAluCorregir','&nbsp;&nbsp;DOBLE CLIC PARA DESCARGAR ARCHIVO Y/O GUARDAR COMENTARIO',115,650,22,totalRows);
		gridsEvalAluCorregir.loadColumnTypeStruct(null, [customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
														customGrid.TYPE_COLUMN_EDIT,
														customGrid.TYPE_COLUMN_EDIT],
														[380,170,75,0,0]);
		gridsEvalAluCorregir.addTitleVectorX(['Archivo','Comentario','F. Enviado','recibido','id']);
		gridsEvalAluCorregir.setSelectedLnMode(0);
//		gridsEvalAluCorregir.addObjToTitle(0, gridsEvalAluCorregir.createTitleObj(0,'input','checkbox'));
//		gridsEvalAluCorregir.activeCheckOnOff(0);
		gridsEvalAluCorregir.hideCol(3); 
		gridsEvalAluCorregir.hideCol(4); 
//		gridsEvalAluCorregir.hideBarTitle();
		gridsEvalAluCorregir.alignBarTitle('left');
		gridsEvalAluCorregir.hideBarControl();
		for (var i=0; i<5; i++)
			gridsEvalAluCorregir.setReadOnlyCol(i, true);
	},
	
	gridsEvalAlumno_Init : function() {
        gridsEvalAlumno.setFixColRow(false,true);
        gridsEvalAlumno.addTitleVectorX(['Fecha','Hora Inicio','Hora Fin','Contenido / Tema','materia','Nota','cedula','porcentaje','id_persona','id_plan_evaluacion','idcurso','idperiodo','vacio','vacio','nvl','idLapso']);
        gridsEvalAlumno.showData();        
        gridsEvalAlumno.setSizeCol(1,80);
        gridsEvalAlumno.setSizeCol(2,80);
        gridsEvalAlumno.setSizeCol(3,80);
        gridsEvalAlumno.setSizeCol(4,334);
        gridsEvalAlumno.setSizeCol(5,0);
        gridsEvalAlumno.setEditCol(6);
        gridsEvalAlumno.setSizeCol(6,60);
        gridsEvalAlumno.setSizeCol(7,0);
        gridsEvalAlumno.setSizeCol(8,0);
        gridsEvalAlumno.setSizeCol(9,0);
        gridsEvalAlumno.setSizeCol(10,0);
        gridsEvalAlumno.setSizeCol(11,0);
        gridsEvalAlumno.setSizeCol(12,0);
        gridsEvalAlumno.setSizeCol(13,0);
        gridsEvalAlumno.setSizeCol(14,0);
        gridsEvalAlumno.setSizeCol(15,0);
        gridsEvalAlumno.setSizeCol(16,0);
        gridsEvalAlumno.hideCol(5);
        gridsEvalAlumno.hideCol(7);
        gridsEvalAlumno.hideCol(8);
        gridsEvalAlumno.hideCol(9);//id_persona
        gridsEvalAlumno.hideCol(10);//id_plan_evaluacion
        gridsEvalAlumno.hideCol(11);//curso
        gridsEvalAlumno.hideCol(12);//periodo
        gridsEvalAlumno.hideCol(13);//vacio
        gridsEvalAlumno.hideCol(14);//vacio
        gridsEvalAlumno.hideCol(15);//nivel academico
        gridsEvalAlumno.hideCol(16);//lapso
        gridsEvalAlumno.autoSaveEnable();
        gridsEvalAlumno.setXMLStruct(xmlStructs);
        for(var i=1; i<gridsEvalAlumno.getTotalRows(); i++)
	    {
	      //AQUI LOS EVENTOS DEL GRID PARA LA CELDA DE NOTAS
	      gridsEvalAlumno.onKeyUpCell(i, 6, 'EvalAlumno.checkKeyPress()');
	    }
	},
	
    nextValue : function()
    {
      rowCell2 = gridsEvalAlumno.getRowCell() + 1;  
      if(rowCell2 >= gridsEvalAlumno.getTotalRows())
      {          
        rowCell2 = gridsEvalAlumno.getTotalRows()-1;
        gridsEvalAlumno.nextValue();
      }  
      gridsEvalAlumno.setFocusCell(rowCell2,6);   
      gridsEvalAlumno.selectedRow(rowCell2);
    },
	
	setAbr : function()
    {
      gridsEvalAlumno.setFocusCell(rowCell2,6);
    },
	
	isAbr : function(str)
    {
      for(var i=0; i<Evaluacion.abrv.length; i++)
      {
        if(Evaluacion.abrv[i].trim()==str.trim())
          return true;  
      }  
      return false;
    },
    
    isInicialAbr : function(str)
    {
	  for(var i=0; i<Evaluacion.abrv.length; i++)
	  {	
	    if(Evaluacion.abrv[i].charAt(0)==str)
	      return true;  
	  }  
	  return false;  
    },
    
    cleanCell : function()
    {
      //popupEval2.hide();  
      rowCell2 = gridsEvalAlumno.getRowCell();
      gridsEvalAlumno.setDataCell(rowCell2,6,''); 
      gridsEvalAlumno.setFocusCell(rowCell2,6);  
    },
	
	checkKeyPress : function()
    {
      rowCell2 = gridsEvalAlumno.getRowCell();  
      var d5 = gridsEvalAlumno.getDataCell(4).trim();
      if(d5!='')
      {
        var kp = gridsEvalAlumno.getDataCell(6);  
        if(isNaN(kp.trim()))
        {
          if(!EvalAlumno.isInicialAbr(kp.charAt(0)))
          {
          	dialogsEvalAlumno.setMsg('ERROR: LA ABREVIATURA '+kp+' NO ES VALIDA',true);
    	  	gridsEvaluacion.getEdit(rowCell2, 6).value='';
    	  	gridsEvaluacion.setFocusCell(rowCell2,6);            
    	  	gridsEvalAlumno.getEdit(rowCell2, 6).value='';
            gridsEvalAlumno.setFocusCell(rowCell2,6);
          }   
          if((!EvalAlumno.isAbr(kp)) && (kp.length > 1))
    	  {	
    	    dialogsEvalAlumno.setMsg('ERROR: LA ABREVIATURA '+kp+' NO ES VALIDA',true);
    	  	gridsEvalAlumno.getEdit(rowCell2, 6).value='';	 
    	    gridsEvalAlumno.setFocusCell(rowCell2,6);  
    	  }
          if(kp.length > 2)
    	  {	
    	    dialogsEvalAlumno.setMsg('ERROR: LA NOTA '+kp+' NO ES VALIDA',true);
            gridsEvalAlumno.getEdit(rowCell2, 6).value=''; 
    	    gridsEvalAlumno.setFocusCell(rowCell2,6);  
    	  } 
        }
        else
        {
          var n = parseFloat(kp.trim());   
          if( n < Evaluacion.minNota || n > Evaluacion.maxNota)  
          {
            dialogsEvalAlumno.setMsg('ERROR: LA NOTA '+kp+' NO ES VALIDA',true);
          	gridsEvalAlumno.getEdit(rowCell2, 6).value='';
            gridsEvalAlumno.setFocusCell(rowCell2,6);
          }
        }
      }
  	this.limpiarFeHoIniHoFin();
    },
	
    create : function(){
    	/////////////////////////////////////////////////INFORMACION GENERAL/////////////////////////////////////////////////
    	dialogsEvalAlumno = dialogs.create('dialogsEvalAlumno',0,0,680,580,'EVALUACION DEL ESTUDIANTE');
    	dialogsEvalAlumno.showModal();
    	dialogsEvalAlumno.style.zIndex = '100000';
    	dialogsEvalAlumno.setStaticOrder(true); 
		dialogsEvalAlumno.setAdjY(20);
		editsEvalAluCi = edits.create('editsEvalAluCi','editsEvalAluCi','C.i.:',1,43,'normal');
    	editsEvalAluCi.setValidEmpty();
		editsEvalAluCi.setFieldFind(true); 
		editsEvalAlumno = edits.create('editsEvalAlumno','editsEvalAlumno','Estudiante:',1,69,'normal');
    	editsEvalAlumno.setValidEmpty();
		editsEvalAlumno.setFieldFind(true);
		calendarsEvalAlumno = calendars.create('calendarsEvalAlumno');      
    	calendarsEvalAlumno.setValidEmpty();
    	powerComboBoxEvalAluHorInicio = powerComboBox.create('powerComboBoxEvalAluHorInicio','powerComboBoxEvalAluHorInicio','Hora Inicio:',1,70);
		powerComboBoxEvalAluHorInicio.setWidthCombo(177); 
    	powerComboBoxEvalAluHorInicio.setValidEmpty();
    	powerComboBoxEvalAluHorInicio.enableReadOnlyEditor();
    	powerComboBoxEvalAluHorInicio.addEmptyOption();
    	powerComboBoxEvalAluHorInicio.enableOnChangeToEmptyOption();
    	powerComboBoxEvalAluHorInicio2 = powerComboBox.create('powerComboBoxEvalAluHorInicio2','powerComboBoxEvalAluHorInicio2',':',1,6);
		powerComboBoxEvalAluHorInicio2.setWidthCombo(177); 
    	powerComboBoxEvalAluHorInicio2.setValidEmpty();
    	powerComboBoxEvalAluHorInicio2.enableReadOnlyEditor();
    	powerComboBoxEvalAluHorInicio2.addEmptyOption();
    	powerComboBoxEvalAluHorInicio2.enableOnChangeToEmptyOption();
    	powerComboBoxEvalAluHorFin = powerComboBox.create('powerComboBoxEvalAluHorFin','powerComboBoxEvalAluHorFin','Hora Fin:',1,55);
		powerComboBoxEvalAluHorFin.setWidthCombo(177); 
    	powerComboBoxEvalAluHorFin.setValidEmpty();
    	powerComboBoxEvalAluHorFin.enableReadOnlyEditor();
    	powerComboBoxEvalAluHorFin.addEmptyOption();
    	powerComboBoxEvalAluHorFin.enableOnChangeToEmptyOption();
    	powerComboBoxEvalAluHorFin2 = powerComboBox.create('powerComboBoxEvalAluHorFin2','powerComboBoxEvalAluHorFin2',':',1,6);
		powerComboBoxEvalAluHorFin2.setWidthCombo(177); 
    	powerComboBoxEvalAluHorFin2.setValidEmpty();
    	powerComboBoxEvalAluHorFin2.enableReadOnlyEditor();
    	powerComboBoxEvalAluHorFin2.addEmptyOption();
    	powerComboBoxEvalAluHorFin2.enableOnChangeToEmptyOption();
		powerComboBoxEvalAluDefinitiva = powerComboBox.create('powerComboBoxEvalAluDefinitiva','powerComboBoxEvalAluDefinitiva','Estado Periodo:',1,100);
    	powerComboBoxEvalAluDefinitiva.setValidEmpty();
    	powerComboBoxEvalAluDefinitiva.enableReadOnlyEditor();
    	powerComboBoxEvalAluDefinitiva.addEmptyOption();
    	imagesEvalAlumno = images.create('imagesEvalAlumno','imagesEvalAlumno','images/curve_1.png');
    	hint.create();
		hint.addToHintWithPos(imagesEvalAlumno,"Actualizar Datos",dialogsEvalAlumno.x1+568,dialogsEvalAlumno.y1+22);
		xFunct = function(){
			hint.setPosition(imagesEvalAlumno, dialogsEvalAlumno.x1+568, dialogsEvalAlumno.y1+22);
		};
		hint.onMouseOver('xFunct()');
    	gridsEvalAlumno = grids.create('gridsEvalAlumno',10,16);
		imgButtonsEvalAluGuardar = imgButtons.create('imgButtonsEvalAluGuardar','Guardar.','ok.png');
		imgButtonsEvalAluReporte = imgButtons.create('imgButtonsEvalAluReporte','Reporte','print.png');
    	imgButtonsEvalAluSalir = imgButtons.create('imgButtonsEvalAluSalir','Salir','salir.png');
        imgButtonsEvalAluGuardar.setDimension(90,22);
        imgButtonsEvalAluReporte.setDimension(90,22);
        imgButtonsEvalAluSalir.setDimension(90,22); 
	  	this.gridsEvalAluCorregir_Init(4);
    	memoEvaAluComentario = memo.create('memoEvaAluComentario', 'Comentario (Opcional) :', 1, 1, 82);
		memoEvaAluComentario.setValidEmpty();		
		memoEvaAluComentario.setDimension(422, 25);
		memoEvaAluComentario.setMaxLength(250);
		imgButtonsEvaAluGuardar = imgButtons.create('imgButtonsEvaAluGuardar','Guardar.','ok.png');				
        imgButtonsEvaAluGuardar.setDimension(90,22);
    },  
  
	precargarComboBox : function() {
		//CARGA LAS HORAS
		for(var i=6; i<24; i++) {
			powerComboBoxEvalAluHorInicio.addOptionAndSimpleValue(null,(i<10)?'0'+i:i,(i<10)?'0'+i:i);
			powerComboBoxEvalAluHorFin.addOptionAndSimpleValue(null,(i<10)?'0'+i:i,(i<10)?'0'+i:i);
		} 
	  	//CARGA LOS MINUTOS
		for(var i=0; i<60; i++) {
			powerComboBoxEvalAluHorInicio2.addOptionAndSimpleValue(null,(i<10)?'0'+i:i,(i<10)?'0'+i:i);
			powerComboBoxEvalAluHorFin2.addOptionAndSimpleValue(null,(i<10)?'0'+i:i,(i<10)?'0'+i:i);
		}
		powerComboBoxEvalAluHorInicio.setSizeHeight(105);
		powerComboBoxEvalAluHorFin.setSizeHeight(105);
		powerComboBoxEvalAluHorInicio2.setSizeHeight(105);
		powerComboBoxEvalAluHorFin2.setSizeHeight(105);
	}, 

	init : function(){
  		this.create();
  		this.setEvents();
  		this.dialogsEvalAlumno_Init();
  		this.gridsEvalAlumno_Init();
		this.precargarComboBox();
  	},

  	setEvents : function() {
  		imagesEvalAlumno.onClick(this.windowName + ".setData('img')");
  		gridsEvalAlumno.onEnter('EvalAlumno.nextValue()');
  		gridsEvalAlumno.onClickCells(this.windowName + ".setData('grid')");	  
  		imgButtonsEvalAluGuardar.onClick('EvalAlumno.coreUpdate(); dialogsEvalAlumno.close()');
  		imgButtonsEvalAluReporte.onClick(this.windowName + ".reporte()");
  		imgButtonsEvalAluSalir.onClick('dialogsEvalAlumno.close()');
  		imgButtonsEvaAluGuardar.onClick(this.windowName + ".coreUpdateTarea('modificar')");
		gridsEvalAluCorregir.onClickCells(this.windowName + ".setTareaUp()");
		gridsEvalAluCorregir.onDblClickCells(this.windowName + ".getTareaUp()");	  
  	},

  	getTareaUp : function() {gridsEvalAluCorregir
  		var rlx = xmlStructs.createRecordList("rlx");
  	
		if (gridsEvalAluCorregir.getDataCell(gridsEvalAluCorregir.getActualRow(), 0) != "") {
			window.open("tarea_recibir/" + gridsEvalAluCorregir.getDataCell(gridsEvalAluCorregir.getActualRow(), 0),'_blank','left=10,top=80,Height=1,width=600,toolbar=no,location=no,status=no,menubar=no,resizable=yes,scrollbars=yes');
			rlx.addInt('reg',this.idTareaRecibir);
			Tool.cnnSrvLessWaitMsg("MantObject", "setFechaTareaRecibir", "dlgWait.hide()", rlx);
		}
	},
	
  	setTareaUp : function() {gridsEvalAluCorregir
		if (gridsEvalAluCorregir.getDataCell(gridsEvalAluCorregir.getActualRow(), 0) != "") {
			memoEvaAluComentario.clear();
			memoEvaAluComentario.setValue(gridsEvalAluCorregir.getDataCell(gridsEvalAluCorregir.getActualRow(), 1));
			this.idTareaRecibir = gridsEvalAluCorregir.getDataCell(gridsEvalAluCorregir.getActualRow(), 4);
		}
	},

	loadDataCustomGridUp: function() {
    	var jsn = json('getTareaRecibir');

    	if (jsn.data[0].length > 0) {
        	this.gridsEvalAluCorregir_Init(jsn.data[0].length);
    		dialogsEvalAlumno.addObject(gridsEvalAluCorregir,13,460);
        	this.setEvents();
        	gridsEvalAluCorregir.clean();
        	gridsEvalAluCorregir.setTextBarTitle(this.deMateria + ': ' + this.deContenido);
        	Tool.loadGridData(dialogsEvalAlumno, gridsEvalAluCorregir, false, jsn);
    	}
    },
    
    callDataCustomGridUp: function(idPlan) {
    	var rlx = xmlStructs.createRecordList("rlx");
    	
    	gridsEvalAluCorregir.clean();
    	this.gridsEvalAluCorregir_Init(4);
		dialogsEvalAlumno.addObject(gridsEvalAluCorregir,13,460);
    	gridsEvalAluCorregir.setTextBarTitle(this.deMateria + ': ' + this.deContenido);
    	rlx.addInt('reg', idPlan);
    	rlx.addInt('reg', this.idPersona);
    	Tool.cnnSrv("MantObject", "getTareaRecibir", this.windowName + ".loadDataCustomGridUp()", rlx);
    },
    
	setData : function(src) {
		this.idPlanEval = 0;
		if (gridsEvalAlumno.getDataCell(1) != "") {
			if (src == "grid") {
				this.rowGridSetData = gridsEvalAlumno.getRowCell();
				calendarsEvalAlumno.setFechaToEdit(gridsEvalAlumno.getDataCell(1));
				powerComboBoxEvalAluHorInicio.findOption(gridsEvalAlumno.getDataCell(2).substring(0,2));
				powerComboBoxEvalAluHorInicio2.findOption(gridsEvalAlumno.getDataCell(2).substring(3,5));
				powerComboBoxEvalAluHorFin.findOption(gridsEvalAlumno.getDataCell(3).substring(0,2));
				powerComboBoxEvalAluHorFin2.findOption(gridsEvalAlumno.getDataCell(3).substring(3,5));
	    		this.deMateria = '&nbsp;&nbsp;' + gridsEvalAlumno.getDataCell(5);
	    		this.deContenido = '&nbsp;&nbsp;' + gridsEvalAlumno.getDataCell(4);
	    		gridsEvalAluCorregir.setTextBarTitle(this.deMateria + ': ' + this.deContenido);
				this.idPlanEval = gridsEvalAlumno.getDataCell(10);
				
				if (gridsEvalAlumno.getColCell() != 6) {
					this.callDataCustomGridUp(this.idPlanEval);
				}
			}
			else {
				gridsEvalAlumno.setDataCell(this.rowGridSetData, 1, calendarsEvalAlumno.getFechaFromEdit());
				gridsEvalAlumno.setDataCell(this.rowGridSetData, 2, powerComboBoxEvalAluHorInicio.getText() + ':' + powerComboBoxEvalAluHorInicio2.getText());
				gridsEvalAlumno.setDataCell(this.rowGridSetData, 3, powerComboBoxEvalAluHorFin.getText() + ':' + powerComboBoxEvalAluHorFin2.getText());
				this.limpiarFeHoIniHoFin();
			}
		}
	},
	
	limpiarFeHoIniHoFin: function() { 
		calendarsEvalAlumno.clear();
		calendarsEvalAlumno.hide();
		powerComboBoxEvalAluHorInicio.setSelectedIndex(0);
		powerComboBoxEvalAluHorInicio2.setSelectedIndex(0);
		powerComboBoxEvalAluHorFin.setSelectedIndex(0);
		powerComboBoxEvalAluHorFin2.setSelectedIndex(0);
	},
	
	loadDataTipoEvalAlu : function() {
		this.idPersona = parseInt(gridsEvaluacion.getDataCell(9), 10);
		if (powerComboBoxCargNotSeccion.valid(dialogsEvaluacion) && this.idPersona) {
			Tool.getGridData('ReportObject', 'getNotasCursoAlumno', dialogsEvalAlumno, gridsEvalAlumno, false, powerComboBoxCargNotSeccion, new MiniDataSet(this.idPersona, 'int', false), powerComboBoxCargNotLapso, powerComboBoxCargNotLapso); 		    		
		}
	},    

	refreshGrid : function() {
        var rlx = xmlStructs.createRecordList("rlx");

        if (gridsEvaluacion.getTitleColumn(6) == 'Nota') { 
	        rlx.add('reg', powerComboBoxCargNotSeccion);
			rlx.add('reg', powerComboBoxCargNotDescripcion);
    		rlx.add('reg', powerComboBoxCargNotLapso);
			Tool.cnnSrv('MantObject', 'getResultadoGuardarNotas', this.windowName + '.refreshGridEval()', rlx);
		}
		else {
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
	    		Tool.cnnSrv('MantObject', 'getCargaNotasPlanEvaluacion', this.windowName + '.refreshGridEval()', rlx);
	    	}
		} 
	},
	
	refreshGridEval : function() {
  		gridsEvaluacion.clean();  
		
  		if (gridsEvaluacion.getTitleColumn(6) == 'Nota') {
  			editsCargNotTotEvaluado.setValue(json('getCargaNotasPlanEvaluacion').data[2][0] + ' %');
  			editsCargNotNotCarEvaluacion.setValue(json('getPtjNotaCargada').data[0][0] + ' %');
  			Tool.loadGridData(dialogsEvaluacion, gridsEvaluacion, false, json('getCargaNotasAlumno'));    
  			dialogsEvaluacion.setMsg('Cantidad de notas cargadas: ' + json('getCantAlumnoConSinNota').data[0][0].bold() + ', faltan: ' + json('getCantAlumnoConSinNota').data[1][0].bold());		
  			Tool.cnnSrvLessWaitMsg('MsjObject', 'enviarCalificacionAlumno', 'dlgWait.hide()', gridsEvalAlumno.getXMLStruct('rlxListaEval', [1,2,3,6]));
		}
  		else {
  			editsCargNotTotEvaluado.setValue(json('getCargaNotasPlanEvaluacion').data[2][0] + ' %');

  			if (powerComboBoxCargNotLapso.getOption() == "")		
  	  			Tool.getGridData("MantObject", "getCargaNotasDefinitiva", dialogsEvaluacion, gridsEvaluacion, "Tool.cnnSrvLessWaitMsg('MsjObject', 'enviarCalificacionAlumno', 'dlgWait.hide()', gridsEvalAlumno.getXMLStruct('rlxListaEval', [1,2,3,6]))", powerComboBoxCargNotSeccion); 		    		
  			else
  				Tool.getGridData('MantObject', 'getNotasCursoLapso', dialogsEvaluacion, gridsEvaluacion, "Tool.cnnSrvLessWaitMsg('MsjObject', 'enviarCalificacionAlumno', 'dlgWait.hide()', gridsEvalAlumno.getXMLStruct('rlxListaEval', [1,2,3,6]))", powerComboBoxCargNotSeccion, powerComboBoxCargNotLapso, powerComboBoxCargNotSeccion);
  		}
	},    
	
	coreUpdate : function() {
		dialogsEvalAlumno.setMsg('Enviando actualización...');	
		Tool.cnnSrv('MantObject', 'guardarEvaluacion', this.windowName + '.refreshGrid()', gridsEvalAlumno.getXMLStruct("rlxListaEval", [1,2,3,6]));	
	},
	
	reporte : function(){
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,2);
        ///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),13,'helvetica','normal');
		//rep.addBar(0,0,1128,30,rep.getRGBAObj(210,200,200,0.9),false);
		rep.addText(274, 22, 'CALIFICACION DEL ESTUDIANTE POR CURSO',false);
        ///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        //rep.addBar(0,33,1128,103,rep.getRGBAObj(187,196,238,0.8),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9.0,'helvetica','normal','black');
		rep.addText(20, 48,'ORGANIZACIÓN: '+pcbCargNotOrg.getOption(),false);
		rep.addText(20, 64,'SUB-ORG.:            '+pcbCargNotSubOrg.getOption(),false);
		rep.addText(20, 81,'CARRERA:            '+pcbCargNotCarrera.getOption(),false);
		rep.addText(380, 48, 'SECCIÓN:      '+powerComboBoxCargNotSeccion.getOption(),false);
		rep.addText(380, 64, 'MATERIA:       '+powerComboBoxCargNotMateria.getOption(),false);
		rep.addText(380, 81, 'PERIODO:  '+powerComboBoxCargNotPeriodo.getOption(),false);
		rep.addText(20, 98,'CEDULA:               '+editsEvalAluCi.getText(),false);
        rep.addText(380, 98, 'ALUMNO:    '+editsEvalAlumno.getText(),false);
		//////////////////////////////////////////TABLA DE DATOS///////////////////////////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
  		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 9);	
		rep.addTable('tablaNAC',['Fecha','Hora Inicio','Hora Fin','Tipo de Evaluaci\F3n','PTO.'],400,106);
		rep.setSizeColumnArray([120,100,100,400,80]);
		rep.setAlignData(['center','center','center','left','center']);
		rep.addJsonData('tablaNAC','getNotasCursoAlumno',[0,1,2,3,5]);
		rep.setTotalRowTable(28);
		rep.setHeightRow(26);
        //////////////////////////////////////////PIE DE PAGINA////////////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
 		rep.previewHTML();
	},
	
    limpiarCoreUpdateTarea: function() {
    	this.idTareaRecibir = 0;
    	dialogsEvalAlumno.setMsg("");
    	memoEvaAluComentario.clear();
    	this.callDataCustomGridUp(this.idPlanEval);
    },
    
    coreUpdateTarea : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

        if (memoEvaAluComentario.valid(dialogsEvalAlumno)) {
			if (this.idTareaRecibir > 0 && methodName == 'modificar' && memoEvaAluComentario.valid(dialogsEvalAlumno)) {
				rlx.add('reg',memoEvaAluComentario);
				rlx.addInt('reg',this.idTareaRecibir);
				Tool.cnnSrv("MantObject", methodName + "TareaRecibir", this.windowName + ".limpiarCoreUpdateTarea()", rlx);
			}
			else {
				this.idTareaRecibir = 0;
				memoEvaAluComentario.clear();
				Alert.show('SELECCIONE UNA ACTIVIDAD Y AGREGUE UN COMENTARIO', 'SISTEMA', Alert.TYPE_INFO);
			}
		}
    }
};	
