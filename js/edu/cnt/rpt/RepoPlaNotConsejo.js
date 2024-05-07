var dialogsRepoPlaNotConsejo = new Object();
var pcbRepoHojaEvaAlumnoTamPapel = new Object();
var pcbRepoHojaEvaAlumnoOrganizacion = new Object();
var pcbRepoHojaEvaAlumnoSuborganizacion = new Object();
var pcbRepoHojaEvaAlumnoCarrera = new Object();
var pcbRepoHojaEvaAlumnoPeriodo = new Object();
var pcbRepoHojaEvaAlumnoLapso = new Object();
var pcbRepoHojaEvaAlumnoPosicion = new Object();
var pcbRepoHojaEvaAlumnoMateria = new Object();
var pcbRepoHojaEvaAlumnoSeccion = new Object();
var editsRepoPlaNotConsejoFSize = {};
var editsRepoPlaNotConsejoWCell = {};
var editsRepoPlaNotConsejoCMat = {};
var imgButtonsRepoPlaNotConPorLapso = new Object();
var imgButtonsRepoPlaNotConPorCurso = new Object();
var imgButtonsRepoHojaEvaAlumnoSalir = new Object();
var mwRepoPlaNotConsejo = new Object();//minWindow

var RepoPlaNotConsejo = {   
    windowName: 'RepoPlaNotConsejo',
    isCreate: false,
    
    show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsRepoPlaNotConsejo.isByClean())
			this.limpiar('lmp');			
		dialogsRepoPlaNotConsejo.show();
	},
	
	hide : function() {
		dialogsRepoPlaNotConsejo.hide();
	},
	
    createMWs: function() {
    	mwRepoPlaNotConsejo = desktop.addMinWindow('Planilla Nota', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoPlaNotConsejo.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

	dialogsRepoPlaNotConsejo_Init : function() {
		dialogsRepoPlaNotConsejo.setMinimizeXY(0,0);
        dialogsRepoPlaNotConsejo.setCenterScreen();
        dialogsRepoPlaNotConsejo.addSpace(0,0,20);
        dialogsRepoPlaNotConsejo.addLn(1,1,1);
        dialogsRepoPlaNotConsejo.setHeightCell(1,1,10);
        dialogsRepoPlaNotConsejo.addObjToDialog(pcbRepoHojaEvaAlumnoOrganizacion,2,1,24);
        dialogsRepoPlaNotConsejo.addObjToDialog(pcbRepoHojaEvaAlumnoSuborganizacion,2,1,24);
        dialogsRepoPlaNotConsejo.addObjToDialog(pcbRepoHojaEvaAlumnoCarrera,2,1,24);
        dialogsRepoPlaNotConsejo.adjAllMarginObj(2,1,10);
        dialogsRepoPlaNotConsejo.addObjToDialog(pcbRepoHojaEvaAlumnoPeriodo,3,1,24);
        dialogsRepoPlaNotConsejo.addObjToDialog(pcbRepoHojaEvaAlumnoPosicion,3,1,24);
        dialogsRepoPlaNotConsejo.addObjToDialog(pcbRepoHojaEvaAlumnoLapso,3,1,24);
        dialogsRepoPlaNotConsejo.adjAllMarginObj(3,1,10);
        dialogsRepoPlaNotConsejo.addObjToDialog(pcbRepoHojaEvaAlumnoMateria,4,1,24);
        dialogsRepoPlaNotConsejo.addObjToDialog(pcbRepoHojaEvaAlumnoSeccion,4,1,24);
        dialogsRepoPlaNotConsejo.adjAllMarginObj(4,1,10);
        dialogsRepoPlaNotConsejo.addLn(5,1,1);
        dialogsRepoPlaNotConsejo.setHeightCell(5,1,35);
		dialogsRepoPlaNotConsejo.addObject(pcbRepoHojaEvaAlumnoTamPapel, 20, 110);
		dialogsRepoPlaNotConsejo.addObject(editsRepoPlaNotConsejoFSize, 282, 110);
		dialogsRepoPlaNotConsejo.addObject(editsRepoPlaNotConsejoWCell, 282, 135);
		dialogsRepoPlaNotConsejo.addObject(editsRepoPlaNotConsejoCMat, 282, 160);
		dialogsRepoPlaNotConsejo.setHeightCell(5,1,85);
	    dialogsRepoPlaNotConsejo.addObjToDialog(imgButtonsRepoPlaNotConPorLapso,6,1);
        dialogsRepoPlaNotConsejo.addObjToDialog(imgButtonsRepoPlaNotConPorCurso,6,1);
        dialogsRepoPlaNotConsejo.addObjToDialog(imgButtonsRepoHojaEvaAlumnoSalir,6,1);
        dialogsRepoPlaNotConsejo.adjAllMarginObj(6,1,30);
        dialogsRepoPlaNotConsejo.leftMarginObj(6,1,0,190);
	},
 
	create : function() {
		dialogsRepoPlaNotConsejo = dialogs.create('dialogsRepoPlaNotConsejo',0,0,810,200,'PLANILLA DE NOTAS');
		dialogsRepoPlaNotConsejo.setAdjY(80);

		pcbRepoHojaEvaAlumnoOrganizacion = powerComboBox.create('pcbRepoHojaEvaAlumnoOrganizacion','pcbRepoHojaEvaAlumnoOrganizacion','Organización (+):',1,103);
		pcbRepoHojaEvaAlumnoOrganizacion.enableReadOnlyEditor();
		pcbRepoHojaEvaAlumnoOrganizacion.addEmptyOption();
		pcbRepoHojaEvaAlumnoOrganizacion.setValidEmpty();
				
		pcbRepoHojaEvaAlumnoTamPapel = powerComboBox.create('pcbRepoHojaEvaAlumnoTamPapel','pcbRepoHojaEvaAlumnoTamPapel','Tamaño Papel:',1,103);
		pcbRepoHojaEvaAlumnoTamPapel.enableReadOnlyEditor();
		pcbRepoHojaEvaAlumnoTamPapel.addEmptyOption();
		pcbRepoHojaEvaAlumnoTamPapel.setValidEmpty();
		pcbRepoHojaEvaAlumnoTamPapel.addOptionAndSimpleValue(null, 'OFICIO', 'OFICIO');
		pcbRepoHojaEvaAlumnoTamPapel.addOptionAndSimpleValue(null, 'CARTA', 'CARTA');
		pcbRepoHojaEvaAlumnoTamPapel.setSelectedIndex(1);
		
		pcbRepoHojaEvaAlumnoSuborganizacion = powerComboBox.create('pcbRepoHojaEvaAlumnoSuborganizacion','pcbRepoHojaEvaAlumnoSuborganizacion','Suborganización (^):',1,123);
		pcbRepoHojaEvaAlumnoSuborganizacion.enableReadOnlyEditor();
		pcbRepoHojaEvaAlumnoSuborganizacion.addEmptyOption();
		pcbRepoHojaEvaAlumnoSuborganizacion.setValidEmpty();
		pcbRepoHojaEvaAlumnoCarrera = powerComboBox.create('pcbRepoHojaEvaAlumnoCarrera','pcbRepoHojaEvaAlumnoCarrera','Carrera (^):',1,76);
		pcbRepoHojaEvaAlumnoCarrera.enableReadOnlyEditor();
		pcbRepoHojaEvaAlumnoCarrera.addEmptyOption();
		pcbRepoHojaEvaAlumnoCarrera.setValidEmpty();
		pcbRepoHojaEvaAlumnoPeriodo = powerComboBox.create('pcbRepoHojaEvaAlumnoPeriodo','pcbRepoHojaEvaAlumnoPeriodo','Periodo (^):',1,103);
		pcbRepoHojaEvaAlumnoPeriodo.enableReadOnlyEditor();
		pcbRepoHojaEvaAlumnoPeriodo.addEmptyOption();
		pcbRepoHojaEvaAlumnoPeriodo.setValidEmpty();
		pcbRepoHojaEvaAlumnoLapso = powerComboBox.create('pcbRepoHojaEvaAlumnoLapso','pcbRepoHojaEvaAlumnoLapso','Lapso (^):',1,76);
		pcbRepoHojaEvaAlumnoLapso.enableReadOnlyEditor();
		pcbRepoHojaEvaAlumnoLapso.addEmptyOption();
		pcbRepoHojaEvaAlumnoLapso.setValidEmpty();
		pcbRepoHojaEvaAlumnoPosicion = powerComboBox.create('pcbRepoHojaEvaAlumnoPosicion','pcbRepoHojaEvaAlumnoPosicion','Posición (^):',1,123);
		pcbRepoHojaEvaAlumnoPosicion.enableReadOnlyEditor();
		pcbRepoHojaEvaAlumnoPosicion.addEmptyOption();
		pcbRepoHojaEvaAlumnoPosicion.setValidEmpty();
		pcbRepoHojaEvaAlumnoMateria = powerComboBox.create('pcbRepoHojaEvaAlumnoMateria','pcbRepoHojaEvaAlumnoMateria','Materia (^):',1,103);
		pcbRepoHojaEvaAlumnoMateria.enableReadOnlyEditor();
		pcbRepoHojaEvaAlumnoMateria.addEmptyOption();
		pcbRepoHojaEvaAlumnoMateria.setValidEmpty();
		pcbRepoHojaEvaAlumnoMateria.setDataType('string');
		pcbRepoHojaEvaAlumnoMateria.enableOnChangeToEmptyOption();
        pcbRepoHojaEvaAlumnoMateria.setWidthCombo(411);
		pcbRepoHojaEvaAlumnoSeccion = powerComboBox.create('pcbRepoHojaEvaAlumnoSeccion','pcbRepoHojaEvaAlumnoSeccion','Sección (^):',1,76);
		pcbRepoHojaEvaAlumnoSeccion.enableReadOnlyEditor();
		pcbRepoHojaEvaAlumnoSeccion.addEmptyOption();	
		pcbRepoHojaEvaAlumnoSeccion.setValidEmpty();
		editsRepoPlaNotConsejoFSize = edits.create('editsRepoPlaNotConsejoFSize','editsRepoPlaNotConsejoFSize','Tamaño Número:',1,124,'normal');
		editsRepoPlaNotConsejoFSize.setValidReal();
		editsRepoPlaNotConsejoFSize.setSizeEdit(40);
		editsRepoPlaNotConsejoWCell = edits.create('editsRepoPlaNotConsejoWCell','editsRepoPlaNotConsejoWCell','Ancho Columna:',1,124,'normal');
		editsRepoPlaNotConsejoWCell.setValidEmpty();
		editsRepoPlaNotConsejoWCell.setSizeEdit(40);
		editsRepoPlaNotConsejoCMat = edits.create('editsRepoPlaNotConsejoCMat','editsRepoPlaNotConsejoCMat','Cantidad Materia:',1,124,'normal');
		editsRepoPlaNotConsejoCMat.setValidInteger();
		editsRepoPlaNotConsejoCMat.setSizeEdit(40);
		imgButtonsRepoPlaNotConPorLapso = imgButtons.create('imgButtonsRepoPlaNotConPorLapso','Por Lapso','print.png');
		imgButtonsRepoPlaNotConPorCurso = imgButtons.create('imgButtonsRepoPlaNotConPorCurso','Por Materia','print.png');
		imgButtonsRepoHojaEvaAlumnoSalir = imgButtons.create('imgButtonsRepoHojaEvaAlumnoSalir','Salir','salir.png');
    	imgButtonsRepoPlaNotConPorLapso.setDimension(110,22);
    	imgButtonsRepoPlaNotConPorCurso.setDimension(110,22);
    	imgButtonsRepoHojaEvaAlumnoSalir.setDimension(110,22);
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsRepoPlaNotConsejo_Init();
		this.createMWs();
	},
  
  	limpiar : function(tipo) {
  		pcbRepoHojaEvaAlumnoOrganizacion.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoSuborganizacion);
  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoCarrera);
  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoPeriodo);
  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoLapso);
  		dialogsRepoPlaNotConsejo.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoPlaNotConsejo, pcbRepoHojaEvaAlumnoOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoPlaNotConsejo, pcbRepoHojaEvaAlumnoOrganizacion, pcbRepoHojaEvaAlumnoSuborganizacion, pcbRepoHojaEvaAlumnoCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setDefaultDimension: function(swPeriodo) {
		var arreglo;

		if (pcbRepoHojaEvaAlumnoTamPapel.getOption() == 'OFICIO')
	    	arreglo = json('getSizePapelOficio').data[0][0].split('|');
		else
	    	arreglo = json('getSizePapelCarta').data[0][0].split('|');

		editsRepoPlaNotConsejoFSize.setValue(arreglo[0]);
  		editsRepoPlaNotConsejoWCell.setValue(arreglo[1]);
  		editsRepoPlaNotConsejoCMat.setValue(arreglo[2]);
  		
  		if (swPeriodo) {
  			Tool.loadPowerComboData(dialogsRepoPlaNotConsejo, pcbRepoHojaEvaAlumnoPeriodo, 0, 1, json('getPeriodoXNivelAcad'));
  			pcbRepoHojaEvaAlumnoPeriodo.setSelectedIndex(1);
  			this.resetElements('per');
  		}
	},
	
	setEvents: function() {
		pcbRepoHojaEvaAlumnoOrganizacion.onChange(this.windowName + ".resetElements('org')");
		pcbRepoHojaEvaAlumnoSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		pcbRepoHojaEvaAlumnoCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbRepoHojaEvaAlumnoPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbRepoHojaEvaAlumnoPosicion.onChange(this.windowName + ".resetElements('pos')");
		pcbRepoHojaEvaAlumnoMateria.onChange(this.windowName + ".resetElements('mat')");
		pcbRepoHojaEvaAlumnoTamPapel.onChange(this.windowName + ".setDefaultDimension(false)");
		imgButtonsRepoPlaNotConPorLapso.onClick(this.windowName + ".coreUpdate('lapso')");
    	imgButtonsRepoPlaNotConPorCurso.onClick(this.windowName + ".coreUpdate('curso')");
        imgButtonsRepoHojaEvaAlumnoSalir.onClick('dialogsRepoPlaNotConsejo.close()');
    },
    
    resetElements: function(element) {
    	var rlx = xmlStructs.createRecordList("rlx");

    	if (element == 'org') {
			Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoSuborganizacion);
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoCarrera);
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoPeriodo);
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoLapso);
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoMateria);
			Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoPosicion);
			Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoSeccion);
	    	if (pcbRepoHojaEvaAlumnoOrganizacion.getOption() !== "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoPlaNotConsejo, pcbRepoHojaEvaAlumnoSuborganizacion, 1, 2, pcbRepoHojaEvaAlumnoOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoCarrera);
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoPeriodo);
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoLapso);
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoMateria);
			Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoPosicion);
			Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoSeccion);
	    	if (pcbRepoHojaEvaAlumnoSuborganizacion.getOption() !== "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoPlaNotConsejo, pcbRepoHojaEvaAlumnoCarrera, -1, 3, pcbRepoHojaEvaAlumnoSuborganizacion);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoPeriodo);
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoLapso);
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoMateria);
			Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoPosicion);
			Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoSeccion);
	    	if (pcbRepoHojaEvaAlumnoCarrera.getOption() !== "") {
		  		rlx.add('reg', pcbRepoHojaEvaAlumnoCarrera.setModeReturnGetText(5));
	    		Tool.cnnSrv("MantObject", "getPeriodoXNivelAcad", this.windowName + ".setDefaultDimension(true)", rlx);
	    	}
		}
	    else if (element == 'per') {
			Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoSeccion);
	  		Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoMateria);
	  		rlx.add('reg', pcbRepoHojaEvaAlumnoPeriodo);
	  		rlx.add('reg', pcbRepoHojaEvaAlumnoCarrera.setModeReturnGetText(2));
    		Tool.cnnSrv("ReportObject", "getPosicionPlanifProf", this.windowName + ".loadDataPosicionLapso()", rlx);
    	} 
    	else if (element == 'pos') {
			Tool.rstPwrCmb(pcbRepoHojaEvaAlumnoSeccion);
	  		rlx.add('reg', pcbRepoHojaEvaAlumnoPeriodo);
	  		rlx.add('reg', pcbRepoHojaEvaAlumnoCarrera.setModeReturnGetText(2));
	  		rlx.add('reg', pcbRepoHojaEvaAlumnoPosicion);
    		Tool.cnnSrv("ReportObject", "getMateriaPlanifProf", this.windowName + ".loadDataMateriaPosicion()", rlx);
    	} 
    	else if (element == 'mat') {
    		if (pcbRepoHojaEvaAlumnoMateria.getOption() === "")
    			this.resetElements('pos');
    		else
    			Tool.getPowerComboData('ReportObject', 'getSeccionPlanifProf', dialogsRepoPlaNotConsejo, pcbRepoHojaEvaAlumnoSeccion, -1, 1, pcbRepoHojaEvaAlumnoPeriodo, pcbRepoHojaEvaAlumnoCarrera.setModeReturnGetText(2), pcbRepoHojaEvaAlumnoPosicion, pcbRepoHojaEvaAlumnoMateria);
    	}
	},

	loadDataMateriaPosicion: function() {
  		Tool.loadPowerComboData(dialogsRepoPlaNotConsejo, pcbRepoHojaEvaAlumnoMateria, 0, 1, json('getMateriaPlanifProf'));
  		Tool.loadPowerComboData(dialogsRepoPlaNotConsejo, pcbRepoHojaEvaAlumnoSeccion, 0, 1, json('getSeccionPosicion'));
	},
	
	loadDataPosicionLapso: function() {
  		Tool.loadPowerComboData(dialogsRepoPlaNotConsejo, pcbRepoHojaEvaAlumnoPosicion, 0, 1, json('getPosicionPlanifProf'));
  		Tool.loadPowerComboData(dialogsRepoPlaNotConsejo, pcbRepoHojaEvaAlumnoLapso, 3, 0, json('getMantLapso'));
	},
	
	//********************************************************* NOTAS POR CURSO **************************************************************
	reporteXCurso: function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		var item=-1;
		var stData = {
				fields :['Nº','C.i.','Estudiante','%','%','%','%','%','%','%','%','%','%','%','%','%','%','%','%','DEF.'],
				data : [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
		}; 
        
		function renderData(){
			var j = json('getPlanillaNotaConsejo').data;
            var pos = 3;
			var posDef = 0;
			for (i=0; i<j[0].length; i++){
				if(i>0  && j[0][i]==j[0][i-1]){//ASIGNAR NOTA AL MISMO ALUMNO
				  pos++;			
				  stData.fields[pos]=j[3][i]+"%";//ptj	
				  if(j[2][i]!==null && j[2][i]!==undefined){
					stData.data[pos][item] = (j[4][i]=='NT')? j[2][i] : j[4][i];//nota
					if(j[4][i].trim() === "NT" && j[2][i]!=="null" && j[2][i]!==undefined){
                        stData.data[stData.data.length-1][posDef]+=parseFloat(j[2][i])*parseFloat(j[3][i]/100);
					}
                    else
                      if(j[4][i]=="NP" || j[4][i]=="I") {
                    	  stData.data[stData.data.length-1][posDef]+=parseFloat(j[3][i]/100);
                      }
				  }
				  else
				  {
					stData.data[pos][stData.data[pos].length]="";  
				  }
				}
				else{//NUEVO ALUMNO
				  if(item > 0)
					stData.data[stData.data.length-1][item]=stData.data[stData.data.length-1][item];  
				  item++;	
				  pos=3;	
				  posDef = item;
				  stData.fields[pos]=j[3][i]+"%";//ptj				  
				  stData.data[0][item]=(item+1)+"";//nro
				  stData.data[1][item]=j[0][i];//ci
				  stData.data[2][item]=j[1][i];//alumno
				  stData.data[3][item] = ((j[4][i]=='NT')? j[2][i] : j[4][i]);//nota			
				  stData.data[4][item]="";
				  stData.data[5][item]="";
				  stData.data[6][item]="";
				  stData.data[7][item]="";
				  stData.data[8][item]="";
				  stData.data[9][item]="";
				  stData.data[10][item]="";
				  stData.data[11][item]="";
				  stData.data[12][item]="";
				  stData.data[13][item]="";
				  stData.data[14][item]="";
				  stData.data[15][item]="";				  
				  stData.data[16][item]="";
				  stData.data[17][item]="";
				  stData.data[18][item]="";
				  stData.data[19][item]="";
				  if(j[2][i].trim() !== "" && j[2][i]!=="null" && j[2][i]!==undefined){
                    if(j[4][i]=="NP" || j[4][i]=="I"){
                      stData.data[stData.data.length-1][item] = (parseFloat(j[3][i]/100));
                    }
                    else {
				      stData.data[stData.data.length-1][item] = (parseFloat(j[2][i])*parseFloat(j[3][i]/100));//DEFINITIVA
                    }
				  }
				  else{
                      stData.data[stData.data.length-1][item]="";
				  }
				  
				}
			}
			//REDONDEO AL SUPERIOR MAS CERCANO			
			for(var i=0; i<stData.data[stData.data.length-1].length; i++) {
                stData.data[stData.data.length-1][i] = Math.round(RepoPlaNotConsejo.roundToTwo(stData.data[stData.data.length-1][i]));//REDONDEO 
                if(stData.data[stData.data.length-1][i]!==undefined && stData.data[stData.data.length-1][i] < 10 ){
                    if(stData.data[stData.data.length-1][i] > 0)	
                      stData.data[stData.data.length-1][i]="0"+stData.data[stData.data.length-1][i];//AJUSTA CERO A LA IZQ
                    else
                      if(stData.data[stData.data.length-1][i]===0)
                        stData.data[stData.data.length-1][i]="01";
                }
                var empt = true;
                if(stData.data[stData.data.length-1][i] >= 10)
                	stData.data[stData.data.length-1][i]=stData.data[stData.data.length-1][i]+'';

                for(var c=3; c<19; c++){//recorro las notas
                    if(stData.data[c][i]!==""){
                      empt=false;
                    }
                    else{
                      if(stData.fields[c].trim()!=='%')//verifico que la nota vacia tenga evaluacion con porcentaje asignado
                    	stData.data[stData.data.length-1][i]="";//se coloca vacia la definitiva por evaluacion una vacia
                    }
                }
                if(empt){
                  stData.data[stData.data.length-1][i]="";
                }
			}
		}
		rep = new Report('portrait');
		rep.setPageSize(1110);
		rep.setWidthReport(845);
        rep.setPositionIcon(756,4);
        ///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,0,1128,34,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'courier','bold');
        rep.addText(242,21,'PLANILLA DE NOTAS DEL ESTUDIANTE',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','bold');
        rep.addBar(0,38,1128,97,rep.getRGBAObj(187,196,238,0.4),false);
		rep.addText(20, 54, 'ORGANIZACION:        '+pcbRepoHojaEvaAlumnoOrganizacion.getOption(),false);
		rep.addText(20, 72, 'SUBORGANIZACION: '+pcbRepoHojaEvaAlumnoSuborganizacion.getOption(),false);
		rep.addText(20, 90, 'CARRERA:                   '+pcbRepoHojaEvaAlumnoCarrera.getOption(),false);
		rep.addText(220, 54, 'PERIODO:  '+pcbRepoHojaEvaAlumnoPeriodo.getOption(),false);
		rep.addText(355, 54, 'POSICION: '+pcbRepoHojaEvaAlumnoPosicion.getOption(),false);
		rep.addText(315, 90, 'MATERIA:  '+pcbRepoHojaEvaAlumnoMateria.getOption(),false);
		rep.addText(505, 54, 'SECCION: '+pcbRepoHojaEvaAlumnoSeccion.getOption(),false);
		rep.addText(650, 54, 'LAPSO: '+pcbRepoHojaEvaAlumnoLapso.getOption(),false);
		rep.addText(505, 72, 'PROF.: '+json('getMantPersProfCurso').data[0],false);
		//************************ TABLE ***************************
		renderData();
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 7, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 9);
		rep.addTable('TablaRepoConsejo',stData.fields,420,95); 
        rep.setTotalRowTable(44);
        rep.setHeightRow(21); 
        rep.setSizeColumnArray([25,80,310,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,36]);
        rep.setAlignData(['right','center','left','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center','center']);         
        rep.addJsonToTable('TablaRepoConsejo',stData,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]); 
        rep.addJsonToTable('TablaRepoConsejo',stData,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]); 
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        //rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        //rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		setTimeout(rep.previewHTML,1000);
		//Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	//Reporte.create();
    	//dialogsReporte.showModal();
	},
	
	
	roundToTwo: function(num) {    
	    return +(Math.round(num + "e+2")  + "e-2");
	},
	
	//***************************************** NOTAS POR LAPSO (TODAS LAS ASIGNATURAS) ******************************************
	reporteXLapso: function() {	
		var op=pcbRepoHojaEvaAlumnoTamPapel.getOption().toLowerCase();		
		if(op===''){op='oficio';};
		new DefxLapsoPdf({
        paper: op, 
        evaCell : 3,
        jsonMat : json('getPlanillaNotaConsejoLapsoTotal'),
        jsonData : json('getPlanillaNotaConsejoLapso'),
        fontSizeData : parseFloat(editsRepoPlaNotConsejoFSize.getValue()),
        widthCell_ : parseFloat(editsRepoPlaNotConsejoWCell.getValue()),  
        totalMatxPage_ : parseInt(editsRepoPlaNotConsejoCMat.getValue(),10),
        objHead : {
            	title:'NOTAS FINALES',
            	institucion: pcbRepoHojaEvaAlumnoSuborganizacion.getOption(),
            	grado : pcbRepoHojaEvaAlumnoCarrera.getOption(),
            	periodo : pcbRepoHojaEvaAlumnoPeriodo.getOption(),
            	seccion : pcbRepoHojaEvaAlumnoPosicion.getOption() + ' ' + pcbRepoHojaEvaAlumnoSeccion.getOption(),       
            	lapso : pcbRepoHojaEvaAlumnoLapso.getOption()    
        	}
		});
	},	 

	coreUpdate: function(typeReport) {
        var rlx = xmlStructs.createRecordList("rlx");  
        
		if (pcbRepoHojaEvaAlumnoPeriodo.valid(dialogsRepoPlaNotConsejo))
			if (pcbRepoHojaEvaAlumnoPosicion.valid(dialogsRepoPlaNotConsejo))
				if (pcbRepoHojaEvaAlumnoLapso.valid(dialogsRepoPlaNotConsejo))
					if ((typeReport == "lapso") || pcbRepoHojaEvaAlumnoMateria.valid(dialogsRepoPlaNotConsejo))
						if (editsRepoPlaNotConsejoFSize.valid(dialogsRepoPlaNotConsejo))
							if (editsRepoPlaNotConsejoWCell.valid(dialogsRepoPlaNotConsejo))
								if (editsRepoPlaNotConsejoCMat.valid(dialogsRepoPlaNotConsejo))
									if (pcbRepoHojaEvaAlumnoSeccion.valid(dialogsRepoPlaNotConsejo)) {
										if (typeReport == "lapso") {
											pcbRepoHojaEvaAlumnoSeccion.setDataType('string');
											rlx.add('reg', pcbRepoHojaEvaAlumnoCarrera.setModeReturnGetText(2));
											rlx.add('reg', pcbRepoHojaEvaAlumnoLapso);
											rlx.add('reg', pcbRepoHojaEvaAlumnoPosicion);
											if (pcbRepoHojaEvaAlumnoMateria.getOption() == "")
												rlx.add('reg', pcbRepoHojaEvaAlumnoSeccion);
											else
												rlx.add('reg', pcbRepoHojaEvaAlumnoSeccion.setModeReturnGetText(2));
											Tool.cnnSrv('ReportObject', 'getPlanillaNotaConsejoLapso', this.windowName + '.reporteXLapso()', rlx);
										}
										else {
								    		pcbRepoHojaEvaAlumnoSeccion.setDataType('int');
											rlx.add('reg', pcbRepoHojaEvaAlumnoSeccion.setModeReturnGetText(0));
											rlx.add('reg', pcbRepoHojaEvaAlumnoLapso);
											Tool.cnnSrv('ReportObject', 'getPlanillaNotaConsejo', this.windowName + '.reporteXCurso()', rlx);
										}
									}
	}
};