var colorMsgScroll = '#000055';
var ProcCrearCurso =
{
  /*
  inicio 						: 0
  profDisp 						: 1 	PROF  DISP.................................OK									
  cursoNuevo 					: 2		CURSO NUEVO SIN AULA.......................OK
  cursoAsig						: 3		CURSO ASIGNADO.............................
  cursoSelec					: 4		CURSO SELECCIONADO.........................OK
  cursoNuevoProfDisp			: 5		CURSO NUEVO Y PROF. DISP...................OK
  cursoAsigProfDisp				: 6		CURSO ASIGNADO Y PROF DISP.................
  cursoSelecProfDisp 			: 7		CURSO SELECCIONADO Y PROF. DISP............OK
  cursoAsigCursoSelec			: 8		CURSO ASIGNADO Y SELECCIONADO..............
  cursoAsigCursoSelecProfDisp	: 9		CURSO ASIGNADO, SELECCIONADO Y PROF. DISP..
  aulaDisponible				: 10	AULA  DISP.................................
  cursoNuevoAulaDisp			: 11	CURSO NUEVO Y AULA DISP....................
  cursoSelecAulaDisp			: 12	CURSO SELECCIONADO Y AULA DISP.............
  cursoAsigAulaDisp				: 13 	CURSO ASIGNADO Y AULA DISP.................
  cursoAsigSelecAulaDisp		: 14 	CURSO ASIGNADO, SELECCIONADO Y AULA DISP...
  cursoAsigSelecAulaAsig		: 15 	CURSO SELECCIONADO Y AULA ASIGNADA...
  cursoAsigSelecAulaElim		: 16 	CURSO SELECCIONADO Y AULA ELIMINADA...
  */	
  tObj : new Object(),	
  horario : new Array(),
  actRow : 0,
  actCol : 0,
  maxRow : 40,
  pathImg : 'images/',
  widthSizeImg : '26px',
  heightSizeImg : '18px',
  newCourse : false,
  hrProfCurso : 0,
  dias : ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO'],
  //************** IMAGENES DE ESTADO ****************
  imgInicio : 'transpIcon.png',
  imgProfEnable : 'profesorEnable.png',
  imgCursoNuevo : 'cursoNuevo.png',	
  imgCursoNuevoBloqueado : 'cursoNuevoBloqueado.png',	
  imgCursoAsignado : 'salonEnable.png',
  imgCursoSel  : 'aulaSelected.png',
  imgCursoNuevoProfdisp : 'cursoNuevo_profesorDisponible.png',
  imgCursoAsigProfDisp : 'cursoAsignado_profesorDisponible.png',
  imgCursoSelecProfDisp : 'cursoSeleccionado_profesorDisponible.png',
  imgCursoAsigCursoSelec : 'aulaSelected.png',
  imgCursoAsigCursoSelecProfDisp : 'cursoSeleccionado_profesorDisponible.png',
  imgAulaDisp : 'aulaDisp.png',
  imgAulaDispCursoNuevo : 'aulaDispCursoNuevo.png',
  imgAulaDispCursoSelec : 'aulaDispCursoSelec.png',
  imgAulaDispCursoAsig : 'aulaDispCursoAsig.png',
  imgCursoAsigSelecAulaAsig : 'aulaAsigCursoAsig.png',
  imgAulaEliminada : 'aulaEliminada.png',
  disp_Prof : [[],[],[],[],[],[],[],[]],
  data : [[],[],[],[],[],[],[],[]],
  isInit : false,
  totalProfDisp : false,
  idCursoCambiaHorario : -1,
  hrsLoadedProf : 0,
  
  optCombos : 
  {
  	horario 	: '',
  	stsCurs		: '',
  	stsPeriodo 	: '',
  	periodo		: '',
  	org			: '',
  	subOrg		: '',
  	carrera		: '',
  	posicion	: '',
  	materia		: '',
  	seccion		: '',
  	cupoMin		: '',
  	cupoMax 	: '',
  	prof		: '',
  	bloque		: '',
  	aula		: ''
  },
  
  valCombos : 
  {
  	horario 	: '',
  	stsCurs		: '',
  	stsPeriodo 	: '',
  	periodo		: '',
  	org			: '',
  	subOrg		: '',
  	carrera		: '',
  	posicion	: '',
  	materia		: '',
  	seccion		: '',
  	cupoMin		: '',
  	cupoMax 	: '',
  	prof		: '',
  	bloque		: '',
  	aula		: '',
  	hc			: '',
  	carreraOrg  : ''
  },		
  
  regData : 
  {
  	aula 			: '',
  	prof 			: '',
  	materia			: '',
  	seccion 		: '',
  	hc 				: '',
  	idHorario		: '',
  	idAula			: '',
  	idCurso 		: '',			
  	idMateria		: '',
  	idPersona		: '',
  	idPeriodo		: '',
  	idEstadoCurso	: '',
  	idEstadoPeriodo	: '',
  	idSeccion		: '',
  	cupoMin			: '',
  	cupoMax			: '',
  	diaSemana		: '',
  	idCarrera		: '',
  	idCarreraOrg	: ''
  },
  
  clearRegData : function()
  {
  	ProcCrearCurso.regData.aula = '';
  	ProcCrearCurso.regData.prof = '';
  	ProcCrearCurso.regData.materia = '';
  	ProcCrearCurso.regData.seccion = '';
  	ProcCrearCurso.regData.hc = '';
  	ProcCrearCurso.regData.idHorario = '';
  	ProcCrearCurso.regData.idAula = '';
  	ProcCrearCurso.regData.idCurso = '';			
  	ProcCrearCurso.regData.idMateria = '';
  	ProcCrearCurso.regData.idPersona = '';
  	ProcCrearCurso.regData.idPeriodo = '';
  	ProcCrearCurso.regData.idEstadoCurso = '';
  	ProcCrearCurso.regData.idEstadoPeriodo = '';
  	ProcCrearCurso.regData.idSeccion = '';
  	ProcCrearCurso.regData.cupoMin = '';
  	ProcCrearCurso.regData.cupoMax = '';
  	ProcCrearCurso.regData.idCarrera = '';
  	ProcCrearCurso.regData.idCarreraOrg = '';
  	//VALORES DE LOS COMBOS
  	ProcCrearCurso.valCombos.horario 	= '',
  	ProcCrearCurso.valCombos.stsCurs	= '';
  	ProcCrearCurso.valCombos.stsPeriodo = '';
  	ProcCrearCurso.valCombos.periodo	= '';
  	ProcCrearCurso.valCombos.org		= '';
  	ProcCrearCurso.valCombos.subOrg		= '';
  	ProcCrearCurso.valCombos.carrera	= '';
  	ProcCrearCurso.valCombos.posicion	= '';
  	ProcCrearCurso.valCombos.materia	= '';
  	ProcCrearCurso.valCombos.seccion	= '';
  	ProcCrearCurso.valCombos.cupoMin	= '';
  	ProcCrearCurso.valCombos.cupoMax 	= '';
  	ProcCrearCurso.valCombos.prof		= '';
  	ProcCrearCurso.valCombos.bloque		= '';
  	ProcCrearCurso.valCombos.aula		= '';
  	ProcCrearCurso.valCombos.hc			= '';
  	ProcCrearCurso.valCombos.carreraOrg = '';
	//OPCIONESDE LOS COMBOS
  	ProcCrearCurso.optCombos.horario 	= '',
  	ProcCrearCurso.optCombos.stsCurs	= '';
  	ProcCrearCurso.optCombos.stsPeriodo = '';
  	ProcCrearCurso.optCombos.periodo	= '';
  	ProcCrearCurso.optCombos.org		= '';
  	ProcCrearCurso.optCombos.subOrg		= '';
  	ProcCrearCurso.optCombos.carrera	= '';
  	ProcCrearCurso.optCombos.posicion	= '';
  	ProcCrearCurso.optCombos.materia	= '';
  	ProcCrearCurso.optCombos.seccion	= '';
  	ProcCrearCurso.optCombos.cupoMin	= '';
  	ProcCrearCurso.optCombos.cupoMax 	= '';
  	ProcCrearCurso.optCombos.prof		= '';
  	ProcCrearCurso.optCombos.bloque		= '';
  	ProcCrearCurso.optCombos.aula		= '';
  },
    
  loadRegData : function()
  {
  	ProcCrearCurso.regData.aula 			= ProcCrearCurso.optCombos.aula;
  	ProcCrearCurso.regData.prof 			= ProcCrearCurso.optCombos.prof; 	
  	ProcCrearCurso.regData.materia			= ProcCrearCurso.optCombos.materia;
  	ProcCrearCurso.regData.seccion 			= ProcCrearCurso.optCombos.seccion;
  	ProcCrearCurso.regData.posicion			= ProcCrearCurso.valCombos.posicion;
  	ProcCrearCurso.regData.hc 				= ProcCrearCurso.valCombos.hc;
  	ProcCrearCurso.regData.idCarrera		= ProcCrearCurso.valCombos.carrera;
  	ProcCrearCurso.regData.idCarreraOrg		= ProcCrearCurso.valCombos.carreraOrg;
  	ProcCrearCurso.regData.idAula			= ProcCrearCurso.valCombos.aula;
  	ProcCrearCurso.regData.idEstadoPeriodo	= ProcCrearCurso.valCombos.stsPeriodo;		
  	ProcCrearCurso.regData.idMateria		= ProcCrearCurso.valCombos.materia;
  	ProcCrearCurso.regData.idPersona		= ProcCrearCurso.valCombos.prof;
  	ProcCrearCurso.regData.idPeriodo		= ProcCrearCurso.valCombos.periodo;
  	ProcCrearCurso.regData.idEstadoCurso	= ProcCrearCurso.valCombos.stsCurs;
  	ProcCrearCurso.regData.idSeccion		= ProcCrearCurso.valCombos.seccion;
  	ProcCrearCurso.regData.cupoMin			= ProcCrearCurso.optCombos.cupoMin;
  	ProcCrearCurso.regData.cupoMax			= ProcCrearCurso.optCombos.cupoMax;  	
  },  
  CursoNuevo : 
  {
  	hcCursoNuevo : new Array(),
  	count : 0,
  	create : function(materia, seccion, hc)
  	{
  	  if(this.hcCursoNuevo[materia]==null)	
  	  {
  	  	this.hcCursoNuevo[materia] = new Object();
  	    this.hcCursoNuevo[materia].seccion = new Array();
  	    this.count++;
  	  }
  	  this.hcCursoNuevo[materia].seccion[seccion] = new Object();
  	  this.hcCursoNuevo[materia].seccion[seccion].hcAsignadas=1;  
  	  this.hcCursoNuevo[materia].seccion[seccion].HC = hc;
  	  this.hcCursoNuevo[materia].seccion[seccion].fila = new Array;	  
  	  this.hcCursoNuevo[materia].seccion[seccion].col = new Array;
  	  ProcCrearCurso.hrsLoadedProf=0;
  	},
  	addPositionTable : function(materia, seccion, f, c)
  	{
  		var tf = this.hcCursoNuevo[materia].seccion[seccion].fila.length;
  		var tc = this.hcCursoNuevo[materia].seccion[seccion].col.length;
  		this.hcCursoNuevo[materia].seccion[seccion].fila[tf]=f;
  		this.hcCursoNuevo[materia].seccion[seccion].col[tc]=c;
  	},
  	getArrayRowPosition : function(materia, seccion) 
  	{
	  return this.hcCursoNuevo[materia].seccion[seccion].fila;	
	},
	getArrayColPosition : function(materia, seccion) 
  	{
	  return this.hcCursoNuevo[materia].seccion[seccion].col;	
	},
  	courseExist : function(materia, seccion)
  	{
  	  if(this.hcCursoNuevo[materia]==null)
  	    return false;
  	  else	
  	    if(this.hcCursoNuevo[materia].seccion[seccion]==null)
  	      return false;
  	    else
  	      return true;
  	},
  	remove : function(materia, seccion)
  	{
  	  this.hcCursoNuevo[materia].seccion[seccion]=null;
  	},
  	removeAll : function()
  	{
  	  this.hcCursoNuevo = null;	
  	  this.hcCursoNuevo = new Array();
  	  this.count=0;
  	},
  	addHC : function(materia, seccion)
  	{
  	  if(this.courseExist(materia, seccion))
  	  {
  	  	if(this.hcCursoNuevo[materia].seccion[seccion].hcAsignadas < this.hcCursoNuevo[materia].seccion[seccion].HC)
  	  	{
  	  	  this.hcCursoNuevo[materia].seccion[seccion].hcAsignadas+=1;
  	  	  ProcCrearCurso.hrsLoadedProf++;
  	  	  return true;	
  	  	}  
  	  	else
  	  	{
  	  		return false;
  	  	}
  	  }	  	    
  	  else
  	  {
  	  	this.create(materia, seccion);
  	  	return true;
  	  }
  	},
  	delHC : function(materia, seccion)
  	{
  	  this.hcCursoNuevo[materia].seccion[seccion].hcAsignadas-=1; 
  	  ProcCrearCurso.hrsLoadedProf++;
  	  if(this.hcCursoNuevo[materia].seccion[seccion].hcAsignadas == 0)
  	    this.remove(materia, seccion); 	
  	},
  	getHC : function(materia, seccion)
  	{
  	  if(this.courseExist(materia, seccion))	
  	    return this.hcCursoNuevo[materia].seccion[seccion].hcAsignadas;
  	  else
  	    return 0;	
  	},
  	isHCReady : function(materia, seccion)
  	{
  		var thcm = this.hcCursoNuevo[materia].seccion[seccion].HC;
  		var thca =this.hcCursoNuevo[materia].seccion[seccion].hcAsignadas;
  		if((parseInt(thcm,10) - parseInt(thca,10)) > 0)
  		{
  			return false;
  		}
  		else
  		{
  			return true;
  		}
  	},
  	getThisCourse : function(materia, seccion)
  	{
  	  return this.hcCursoNuevo[materia].seccion[seccion];	
  	}
  },
  
  isEmptyAula : function()
  {
    if(this.regData.idAula=='')
      return true;
   	if(this.regData.idAula==null)
      return true;
    if(this.regData.idAula=='null')
      return true;  
    return false;
  },
  
  //CARGA LA DATA DE CURSOS
  loadData : function(dataSt)
  {
  	//SE REMUEVEN TODOS LOS CURSOS NUEVOS CREADOS 	
  	this.CursoNuevo.removeAll();	
  	//SE LIMPIA LA INFORMACION DE TODOS LOS CURSOS QUE HAY EN LA TABLA 
  	this.clearData();
  	if(dataSt[0].length > 0)
  	{
	  this.getDataCombo();	
	  //SE RECORREN LAS FILAS DE LAS ESTRUCTURAS
	  for(var f=0; f<dataSt[0].length; f++)
	  {
		if(dataSt[5][f]!='0')
	    {
	  	  this.regData.aula 			= dataSt[0][f];
  		  this.regData.prof 			= dataSt[1][f];
  		  this.regData.materia		= dataSt[2][f];
  		  this.regData.posicion		= this.valCombos.posicion;
  		  this.regData.seccion 		= dataSt[3][f];
  		  this.regData.hc 			= dataSt[4][f];
  		  this.regData.idHorario		= dataSt[5][f];
  		  this.regData.idAula			= dataSt[6][f];
  		  this.regData.idCurso 		= dataSt[7][f];			
  		  this.regData.idMateria		= dataSt[8][f];
  		  this.regData.idPersona		= dataSt[9][f];
  		  this.regData.idPeriodo		= dataSt[10][f];
	  	  this.regData.idEstadoCurso	= dataSt[11][f];
	  	  this.regData.idEstadoPeriodo= dataSt[12][f];
	  	  this.regData.idSeccion		= dataSt[13][f];
	  	  this.regData.cupoMin		= dataSt[14][f];
	  	  this.regData.cupoMax		= dataSt[15][f];
	  	  this.regData.diaSemana		= dataSt[16][f];
	  	  this.regData.idCarreraOrg	= dataSt[17][f];
	  	  this.regData.idCarrera		= this.valCombos.carrera
	  	  //SE CARGA LA DATA EN LA ESTRUCTURA INTERNA Y EN LA POSICION INDICADA POR DIA_SEMANA Y ID_HORARIO
	  	  var col = dataSt[16][f];
	  	  var fila = this.getRowByIdHorario(dataSt[5][f]);
	  	  //LLAMADA A LOS METODOS QUE CARGAN EL REGISTRO Y EL ESTADO DE LA CELDA
	  	  this.data[col][fila].estado.setDataCurso(this.regData);
	  	  if(this.isEmptyAula())
	  	    this.data[col][fila].estado.setSts(this.data[col][fila].estado.cursoNuevo)
	  	  else
	  	    this.data[col][fila].estado.setSts(this.data[col][fila].estado.cursoAsig);
	  	  if(this.CursoNuevo.courseExist(this.regData.materia,this.regData.seccion))
	  	  {
	  	    this.CursoNuevo.addHC(this.regData.materia,this.regData.seccion)	
	  	  }
	  	  else
	  	  {
	  	    this.CursoNuevo.create(this.regData.materia, this.regData.seccion,this.regData.hc);	
	  	    ProcCrearCurso.hrsLoadedProf++;
	  	  }
	  	  ProcCrearCurso.CursoNuevo.addPositionTable(this.regData.materia,this.regData.seccion,fila,col);
	    }
	  }
	}
	ProcCrearCurso.setStsComboAula(false);
  },

  clearData : function()
  {
	ProcCrearCurso.hrsLoadedProf = 0;
  	if(this.isInit)
  	  for (var c=0; c < this.tObj.rows[0].cells.length; c++) 
	  {
	    for (var f=0; f < this.tObj.rows.length; f++)
	    {
	  	  this.data[c][f].estado.clearDataCurso();
	    }
	  } 
	this.clearRegData();  
  },
  
  clearHorario : function()
  {
    if(this.isInit)
      for (var i=0; i < this.tObj.rows.length-1;i++)
	  { 
	    this.tObj.rows[i+1].cells[0].innerHTML='';
	  }
  },
  
  cleanHorarioTable : function()
  {
    for (var i=1; i < this.tObj.rows.length;i++)
      for (var j=1; j<this.tObj.rows[0].cells.length; j++)	
    	this.tObj.rows[i].cells[j].innerHTML='';
  },
  
  //INICIALIZA LAS CELDAS CON IMAGENES TRANSPARENTES
  initImg : function(c,f)
  {
  	if(!this.data[c][f].estado.isLoadedImg) 
  	{
  	  this.tObj.setHAlignCell('middle',f,c);
	  this.tObj.addObjToCell(f,c,this.data[c][f].estado.img);
	  this.data[c][f].estado.isLoadedImg=true;
  	}
  },
  
  //ACTUALIZA LA IMAGEN EN UNA CELDA ESPECIFICA
  setImg : function(c, f, img)
  {	
  	if((f>0) && (c>0))
  	{
  	  this.tObj.removeObjInCell(f,c,this.data[c][f].estado.img);
	  this.data[c][f].estado.img.src = this.pathImg+img;
	  this.tObj.setHAlignCell('middle',f,c);
	  this.tObj.addObjToCell(f,c,this.data[c][f].estado.img);
  	} 
  },
  //LIMPIA TODAS LAS IMAGENES CARGANDO SOLO IMAGENES TRANSPARENTES
  cleanImages : function()
  {
  	for (var c=0; c < this.tObj.rows[0].cells.length; c++) 
	{
	  for (var f=0; f < this.tObj.rows.length; f++)
	  {
	  	this.setImg(c,f,this.imgInicio);
	  }
	}   
  },
 
  init : function(tableObj, horario, tablaInf)
  {
  	this.setTables(tableObj, tablaInf);
  	this.setHorario(horario);
  	if(!this.isInit)
  	  this.initDataCurso();
  	this.setEventCells();
  	this.showInf(1,1);
  	this.isInit=true;
  },
  
  stopScroll : function()
  {
    dialogsCrearCurso.disableScrollMsg();  
  },
  
  showInf : function(c,f)
  {
  	this.tInf.addTextToCell(1,0,'Dia');
  	this.tInf.addTextToCell(2,0,'Hora');
  	this.tInf.addTextToCell(3,0,'Profesor');
  	this.tInf.addTextToCell(4,0,'Materia');
  	this.tInf.addTextToCell(5,0,'Seccion');
  	this.tInf.addTextToCell(6,0,'Aula');  
  	this.tInf.addTextToCell(1,1,this.dias[c-1]);  	
  	this.tInf.addTextToCell(2,1,this.getDescripHorarioByRow(f-1));
  	this.tInf.addTextToCell(3,1,this.data[c][f].estado.regDataCurso.prof);
  	this.tInf.addTextToCell(4,1,this.data[c][f].estado.regDataCurso.materia);
  	this.tInf.addTextToCell(5,1,this.data[c][f].estado.regDataCurso.seccion);
  	if(this.data[c][f].estado.regDataCurso.aula==null || this.data[c][f].estado.regDataCurso.aula=='null')
  	  this.tInf.addTextToCell(6,1,'')
  	else		
  	  this.tInf.addTextToCell(6,1,this.data[c][f].estado.regDataCurso.aula);
  },
  
  SelectedCourses : function()
  {
  	for (var c=0; c < this.tObj.rows[0].cells.length; c++) 
	{
      for (var f=0; f < this.tObj.rows.length; f++)
	  {
	  	if(ProcCrearCurso.data[c][f].estado.getSts()==4)
	  	  return true
	  }
	}
	return false;
  },
  
  changeSts : function(stsAct, stsSig)
  {
  	for (var c=0; c < this.tObj.rows[0].cells.length; c++) 
	{
      for (var f=0; f < this.tObj.rows.length; f++)
	  {
	  	if(ProcCrearCurso.data[c][f].estado.getSts()==stsAct)
	    {
	  	  if(stsAct==4 && stsSig==2)
	  	  {
	  		if(ProcCrearCurso.data[c][f].estado.getAula()=='')
	  		  ProcCrearCurso.data[c][f].estado.setSts(stsSig)
	  		else
	  			ProcCrearCurso.data[c][f].estado.setSts(3);	
	  	  }
	  	  else
	  		ProcCrearCurso.data[c][f].estado.setSts(stsSig);  
	    }
	  }
	}
  },
  
  getIdCursoFromCell : function()
  {
  	return ProcCrearCurso.data[ProcCrearCurso.actCol][ProcCrearCurso.actRow].estado.getIdCurso();
  },
  
 //******************** INICIALIZACION DEL OBJETO QUE CONTIENE LA DATA DE CADA CELDA *********************
  initDataCurso : function()
  {
  	for (var c=0; c < this.tObj.rows[0].cells.length; c++) 
	{
		  for (var f=0; f < this.tObj.rows.length; f++) 
		  {
		  	this.data[c][f] = new Object();
		  	this.data[c][f].estado =
  			{
  				inicio 						: 0,
  				profDisp 					: 1,
  				cursoNuevo 					: 2,
  				cursoAsig					: 3,
  				cursoSelec					: 4,
  				cursoNuevoProfDisp			: 5,
  				cursoAsigProfDisp			: 6,
  				cursoSelecProfDisp 			: 7,
  				cursoAsigCursoSelec			: 8,
  				cursoAsigCursoSelecProfDisp	: 9,
  				aulaDisponible				: 10,  
  				cursoNuevoAulaDisp			: 11,
  				cursoSelecAulaDisp			: 12,
  				cursoAsigAulaDisp			: 13,
  				cursoAsigSelecAulaDisp		: 14, 
  				cursoAsigSelecAulaAsig		: 15, 			
  				aulaEliminada				: 16,
  				actual						: 0,
  				fila : 0,
  				col : 0,
  				isLoadedImg : false,
  				isSelected : false,
  				isNewCourse : false,
  				imgName : '',
  				img : new Object(),
  				regDataCurso : 
  				{
  					aula 			: '',
  					prof 			: '',
  					materia			: '',
  					seccion 		: '',
  					posicion		: '',
  					hc 				: '',
  					idHorario		: '',
  					idCarrera		: '',
  					idCarreraOrg	: '',
  					diaSemana		: c,
  					idAula			: '',
  					idCurso 		: '',			
  					idMateria		: '',
  					idPersona		: '',
  					idPeriodo		: '',
  					idEstadoCurso	: '',
  					idSeccion		: '',
  					cupoMin			: '',
  					cupoMax			: '',
  					hora			: '',
  				},
  				
  				setDataCurso : function(stData) 
  				{
  					this.setAula(stData.aula);
  					this.setProf(stData.prof);
  					this.setPosicion(stData.posicion);
  					this.setMateria(stData.materia);
  					this.setSeccion(stData.seccion);
  					this.setHc(stData.hc);
  					this.setIdHorario(stData.idHorario);
  					this.setDiaSemana(stData.diaSemana);
  					this.setIdAula(stData.idAula);
  					this.setIdCurso(stData.idCurso);
  					this.setIdMateria(stData.idMateria);
  					this.setIdPersona(stData.idPersona);
  					this.setIdPeriodo(stData.idPeriodo);
  					this.setIdEstadoCurso(stData.idEstadoCurso);
  					this.setIdSeccion(stData.idSeccion);
  					this.setCupoMin(stData.cupoMin);
  					this.setCupoMax(stData.cupoMax); 
  					this.setIdCarrera(stData.idCarrera);
  					this.setIdCarreraOrg(stData.idCarreraOrg);				  
  				},
  				
  				clearDataCurso : function() 
  				{
  					this.setAula('');
  					this.setProf('');
  					this.setPosicion('');
  					this.setMateria('');
  					this.setSeccion('');
  					this.setHc('');
  					this.setIdHorario('');
  					this.setDiaSemana('');
  					this.setIdAula('');
  					this.setIdCurso('');
  					this.setIdMateria('');
  					this.setIdPersona('');
  					this.setIdPeriodo('');
  					this.setIdEstadoCurso('');
  					this.setIdSeccion('');
  					this.setCupoMin('');
  					this.setCupoMax(''); 	
  					this.setSts(this.inicio);			  
  					this.setIdCarrera('');
  					this.setIdCarreraOrg('');
  				},
  				getIdEstadoCurso : function()
  				{
  				  return this.regDataCurso.idEstadoCurso;
  				},
  				getPosicion : function()
  				{
  				  return this.regDataCurso.posicion;
  				},
  				getIdCarrera : function()
  				{
  				  return this.regDataCurso.idCarrera;
  				},
  				getIdCarreraOrg : function()
  				{
  				  return this.regDataCurso.idCarreraOrg;
  				},
				getProf : function()
  				{
  				  return this.regDataCurso.prof;	
  				},
  				getSeccion : function()
  				{
  				  return this.regDataCurso.seccion;	
  				},
  				getIdSeccion : function() 
  				{
				  return this.regDataCurso.idSeccion;
				},
				
  				getIdPersona : function()
				{
				  return this.regDataCurso.idPersona;
				},
				getIdMateria : function()
  				{
  				  return this.regDataCurso.idMateria;	
  				},
  				getMateria : function()
  				{
  				  return this.regDataCurso.Materia;	
  				},
  				getCupoMax : function() 
  				{
  					return this.regDataCurso.cupoMax;
  				},
  				getIdCurso : function()
  				{
  					if(this.regDataCurso.idCurso==null || this.regDataCurso.idCurso=='null')
  					  return ''
  					else
  					  return this.regDataCurso.idCurso;
  				},
  				getCupoMin : function() 
  				{
  					return this.regDataCurso.cupoMin;
  				},
  				getAula : function()
  				{
  				  if (this.regDataCurso.aula== null || this.regDataCurso.aula=='null')
  				    return ''
  				  else	
  				    return this.regDataCurso.aula;	
  				},
  				getIdAula : function() 
  				{
  				  if (this.regDataCurso.idAula== null || this.regDataCurso.idAula=='null')
  				    return ''
  				  else	
				    return this.regDataCurso.idAula;	
				},
				
  				setIdCarrera : function(carrera)
  				{
  				  this.regDataCurso.idCarrera=carrera;
  				},
  				
  				setPosicion : function(posicion)
  				{
  				  this.regDataCurso.posicion=posicion;
  				},
  				
  				setIdCarreraOrg : function(carreraOrg)
  				{
  				  this.regDataCurso.idCarreraOrg=carreraOrg;
  				},
  				
  				setAula : function(aula)
  				{
  				  this.regDataCurso.aula = aula;	
  				},
  				
  				setProf : function(prof)
  				{
  				  this.regDataCurso.prof = prof;	
  				},
  				
  				setMateria : function(materia)
  				{
  				  this.regDataCurso.materia = materia;	
  				},
  				
  				setSeccion : function(seccion)
  				{
  				  this.regDataCurso.seccion = seccion;	
  				},
  				
  				setHc : function(hc)
  				{
  					this.regDataCurso.hc=hc;
  				},
  				
  				setIdHorario : function(idHorario) 
  				{
					this.regDataCurso.idHorario = idHorario;	
				},
				
				setDiaSemana : function(diaSemana) 
  				{
					this.regDataCurso.diaSemana = diaSemana;	
				},
				
				setIdAula : function(idAula) 
  				{
				  	this.regDataCurso.idAula = idAula;	
				},
				
				setIdCurso : function(idCurso)
  				{
  					this.regDataCurso.idCurso = idCurso;
  				},
  				
  				setIdMateria : function(idMateria)
  				{
  					this.regDataCurso.idMateria = idMateria;
  				},
  				
  				setIdPersona : function(idPersona)
				{
					this.regDataCurso.idPersona = idPersona;
				}, 
				
				setIdPeriodo : function(idPeriodo)
  				{
  					this.regDataCurso.idPeriodo = idPeriodo;	
  				},
  				
  				setIdEstadoCurso : function(idEstadoCurso) 
  				{
					this.regDataCurso.idEstadoCurso = idEstadoCurso;	
				},
				
				setIdSeccion : function(idSeccion) 
  				{
					this.regDataCurso.idSeccion = idSeccion;
				},
				
  				setCupoMax : function(cupoMax) 
  				{
  					this.regDataCurso.cupoMax = cupoMax;
  				},
  				
  				setCupoMin : function(cupoMin) 
  				{
  					this.regDataCurso.cupoMin = cupoMin;
  				},
  				
  				init : function(c,f)
  				{		
  					this.fila =f;
  					this.col=c;
  					this.img = document.createElement('img');
  					this.img.src=ProcCrearCurso.pathImg+ProcCrearCurso.imgInicio;
  					this.img.style.width = ProcCrearCurso.widthSizeImg;
		  			this.img.style.height = ProcCrearCurso.heightSizeImg;
		  			this.imgName = ProcCrearCurso.imgInicio;
		  			if(f>0 && c>0)
		  			  ProcCrearCurso.initImg(c,f);
  				},
  				
  				getSts : function()
  				{
  	  				return this.actual;
  				},
  				
  				next : function()
  				{  	  					
  					if (this.actual + 1 <= 9)
  	    				this.setSts(this.actual + 1);
  	  				return this.actual; 
  				},
  				
  				prior : function()
  				{
	  				if((this.actual - 1) >= 0)	
	  				{
	  				  this.setSts(this.actual - 1);
	  				}
  	  				return this.actual;  
  				},
  				
  				first : function()
  				{
  	  				this.setSts(0);
  	  				return this.actual;
  				},
  					
  				last : function()
  				{
  	  				this.setSts(9);
  	  				return this.actual;
  				},
  				
  				setFlagSelected : function()
  				{
	  			  this.isSelected = true;
  				},
  				
  				delFlagSelected : function()
  				{
	  			  this.isSelected = false;
  				},
  				
  				//*************************** CHEQUEO PARA CAMBIO DE ESTADO *****************************
  				setSts : function(newSts)
  				{
	  				switch(newSts)
	  				{
	  					case 0 : //imgInicio
	  					{
	  				  		this.imgName = ProcCrearCurso.imgInicio;
	  				  		this.delFlagSelected();
	  				  		this.actual = newSts;
	  				  		ProcCrearCurso.setMsg('');
	  				  		break;	
	  					}
	  					case 1 : //imgProfEnable
	  					{
	  				  		this.imgName = ProcCrearCurso.imgProfEnable;
	  				  		this.delFlagSelected();
	  				  		this.actual = newSts;	
	  				  		ProcCrearCurso.setMsg('Profesor disponible...');
	  				  		break;	
	  					}
	  					case 2 : //imgCursoNuevo
	  					{
	  						if(this.regDataCurso.idCarrera == this.regDataCurso.idCarreraOrg)
	  				   		  this.imgName = ProcCrearCurso.imgCursoNuevo;
	  				   		else
	  				   		  this.imgName = ProcCrearCurso.imgCursoNuevoBloqueado;
	  				   		this.delFlagSelected();
	  				   		this.actual = newSts;
	  				   		ProcCrearCurso.setMsg('Curso Nuevo con Aula ...');
	  				   		break;	
	  					}
	  					case 3 : //imgCursoAsignado
	  					{
	  				  		this.imgName = ProcCrearCurso.imgCursoAsignado;	
	  				  		this.delFlagSelected();
	  				  		this.actual = newSts;
	  				  		ProcCrearCurso.setMsg('Curso Asignado sin Aula...');
	  				  		break;	
	  					}
	  					case 4 : //imgCursoSel
	  					{
	  				  		this.setFlagSelected();
	  				  		this.imgName = ProcCrearCurso.imgCursoSel;		
	  				  		this.actual = newSts;
	  				  		ProcCrearCurso.setMsg('Curso seleccionado');
	  				  		break;	
	  					}
	  					case 5 : //imgCursoNuevoProfDisp
	  					{
	  				  		this.imgName = ProcCrearCurso.imgCursoNuevoProfdisp;
	  				  		this.delFlagSelected();	
	  				   		this.isNewCourse = true;
	  				  		this.actual = newSts;
	  				  		ProcCrearCurso.setMsg('Curso Nuevo y Profesor disponible...');
	  				  		break;	
	  					}
	  					case 6 : //imgCursoAsigProfDisp
	  					{
	  				  		this.imgName = ProcCrearCurso.imgCursoAsigProfDisp;	
	  				  		this.delFlagSelected();
	  				  		this.actual = newSts;
	  				  		ProcCrearCurso.setMsg('Curso Asignado y profesor disponible...');
	  				  		break;	
	  					}
	  					case 7 : //imgCursoSelecProfDisp
	  					{
	  						if((this.isSelected) || (this.actual==4) || (this.actual==6))
	  						{
	  				  		  this.imgName = ProcCrearCurso.imgCursoSelecProfDisp;	
	  				  		  this.actual = newSts;
	  				  		  ProcCrearCurso.setMsg('Curso seleccionado y profesor disponible');
	  				  		}
	  				  		else
	  				  		  ProcCrearCurso.setMsgErr('INVALIDO, No puede seleccionar mas de un curso a la vez.');
	  				  		break;	
	  					}
	  					case 8 : //imgCursoAsigCursoSelec
	  					{
	  				  		if((this.isSelected) || (this.actual==3))
	  						{
	  				  		  this.imgName = ProcCrearCurso.imgCursoAsigCursoSelec;
	  				  		  this.actual = newSts;
	  				  		  ProcCrearCurso.setMsg('Curso asignado y seleccionado');
	  				  		}
	  				  		else
	  				  		  ProcCrearCurso.setMsgErr('INVALIDO, No puede seleccionar mas de un curso a la vez.');	
	  				  		break;	
	  					}	
	  					case 9 : //imgCursoAsigCursoSelecProfDisp
	  					{
	  						if((this.isSelected) || (this.actual==6))
	  						{
	  				  		  this.imgName = ProcCrearCurso.imgCursoAsigCursoSelecProfDisp;	
	  				  		  this.actual = newSts;
	  				  		  ProcCrearCurso.setMsg('Curso asignado, seleccionado y profesor disponible.');
	  				  		}
	  				  		else
	  				  		  ProcCrearCurso.setMsgErr('INVALIDO, No puede seleccionar mas de un curso a la vez.');
	  				  		break;	
	  					}
	  					case 10 : //aulaDisponible
	  					{
	  					  this.imgName = ProcCrearCurso.imgAulaDisp;	
	  				  	  this.actual = newSts;
	  				  	  ProcCrearCurso.setMsg('Aula disponible');
	  				  	  break;	
	  					}
	  					case 11 : //cursoNuevoAulaDisp
	  					{
	  					  this.imgName = ProcCrearCurso.imgAulaDispCursoNuevo;	
	  				  	  this.actual = newSts;
	  				  	  ProcCrearCurso.setMsg('Curso Nuevo con Aula disponible');	
	  				  	  break;
	  					}
	  					case 12 : //cursoSelecAulaDisp
	  					{
	  					  this.imgName = ProcCrearCurso.imgAulaDispCursoSelec;	
	  				  	  this.actual = newSts;
	  				  	  ProcCrearCurso.setMsg('Curso Seleccionado con Aula disponible');	
	  				  	  break;
	  					}
	  					case 13 : //cursoAsigAulaDisp
	  					{
	  					  this.imgName = ProcCrearCurso.imgAulaDispCursoAsig;	
	  				  	  this.actual = newSts;
	  				  	  ProcCrearCurso.setMsg('Curso Asignado con Aula disponible');	
	  				  	  break;
	  					}
	  					case 14 : //cursoAsigSelecAulaDisp
	  					{
	  					  this.imgName = ProcCrearCurso.imgAulaDispCursoSelec;	
	  				  	  this.actual = newSts;
	  				  	  ProcCrearCurso.setMsg('Curso Asignado con Aula disponible');	
	  				  	  break;
	  					}
	  					case 15 : //cursoAsigSelecAulaDisp
	  					{
	  					  this.imgName = ProcCrearCurso.imgCursoAsigSelecAulaAsig;	
	  				  	  this.actual = newSts;
	  				  	  ProcCrearCurso.setMsg('Curso Seleccionado con Aula Asignada');	
	  				  	  break;
	  					}
	  					case 16 : //aulaEliminada
	  					{
	  					  this.imgName = ProcCrearCurso.imgAulaEliminada;	
	  				  	  this.actual = newSts;
	  				  	  ProcCrearCurso.setMsg('Curso Seleccionado con Aula Eliminada');	
	  				  	  break;
	  					}
	  				}
	  				ProcCrearCurso.setImg(this.col,this.fila,this.imgName);
	  				return this.actual;	
  				}								
  			};//fin del objeto estado
  			this.data[c][f].estado.init(c,f);
		  }//fin for de filas
		}//fin for de columnas
  },
  
  setEventCell : function(row,col)
  {
  	  //RATON SOBRE UNA CELDA
	  this.tObj.rows[row].cells[col].onmouseover = function(e)
	  {
	  	ProcCrearCurso.tObj.setBgColorCell(row,col,'#d0d0ff');
	  	ProcCrearCurso.tObj.style.cursor = 'pointer';
	  	ProcCrearCurso.showInf(col,row);
	  	var s = ProcCrearCurso.data[col][row].estado.getSts(); 
		switch(s)
		{
			case 0 : {//INICIO
				        ProcCrearCurso.setMsg('');
			        	break;
			     	 }
			case 1 : {//PROF DISPONIBLE
						ProcCrearCurso.setMsg('Profesor disponible');
						break;
				 	 }
			case 2 : {//CURSO NUEVO
						ProcCrearCurso.setMsg('Curso Nuevo Sin Aula');
						break;
				 	 }
			case 3 : {//CURSO ASIGNADO
						ProcCrearCurso.setMsg('Curso Creado Con Aula');
			        	break;
				 	 }
			case 4 : {//CURSO SELECCIONADO
						ProcCrearCurso.setMsg('Curso seleccionado');
						break;
				 	 }
			case 5 : {//CURSO NUEVO Y PROF DISPONIBLE
				        var mat = ProcCrearCurso.data[col][row].estado.regDataCurso.materia;
				        var sec = ProcCrearCurso.data[col][row].estado.regDataCurso.seccion;
				        var hc = ProcCrearCurso.data[col][row].estado.regDataCurso.hc;
				        var cn = ProcCrearCurso.CursoNuevo.getThisCourse(mat,sec);
				        ProcCrearCurso.setMsg('CURSO NUEVO Y PROF. DISPONIBLE 	- 	HORAS CREDITO DE LA MATERIA : '+
				        hc + '   -   HORAS CREDITO ASIGNADAS : ' + ProcCrearCurso.CursoNuevo.getHC(mat,sec));
						break;
				 	 }
			case 6 : {//CURSO ASIGNADO Y PROF DISPONIBLE
						ProcCrearCurso.setMsg('Curso asignado y profesor disponible');
						break;
				 	 }
			case 7 : {//CURSO SELECCIONADO Y PROF DISPONIBLE
						ProcCrearCurso.setMsg('Curso seleccionado y profesor disponible');
						break;
				 	 }
			case 8 : {//CURSO ASIGNADO Y CURSO SELECCIONADO
						ProcCrearCurso.setMsg('Curso asignado y curso seleccionado');
						break;
				 	 }
			case 9 : {//CURSO ASIGNADO, CURSO SELECCIONADO Y PROF DISPONIBLE
						ProcCrearCurso.setMsg('Curso asignado, curso seleccionado y profesor disponible');
						break;
				 	 }
			case 10 :{//AULA DISPONIBLE
						ProcCrearCurso.setMsg('El aula está disponible en este horario para cualquier curso...');
						break;
				 	 }
			case 12 :{//AULA DISPONIBLE AL CURSO SELECCIONADO
						ProcCrearCurso.setMsg('El aula está disponible para el curso seleccionado, el cual no tiene aula asignada...');
						break;
				 	 }
			case 13 :{//AULA DISPONIBLE al curso asignado
						ProcCrearCurso.setMsg('El aula está disponible para este curso asignado, el cual ya tiene aula...');
						break;
				 	 }	  		
					 
		}
	  };
	  //RATON SALIENDO DE UNA CELDA
	  this.tObj.rows[row].cells[col].onmouseout = function(e)
	  {
	  	var ecolor = ProcCrearCurso.tObj.evenRowColor;
	  	var ocolor = ProcCrearCurso.tObj.oddRowColor;
	  	if(row % 2 == 0)
	  	  ProcCrearCurso.tObj.setBgColorCell(row,col,ocolor);
	  	else  	  	
	  	  ProcCrearCurso.tObj.setBgColorCell(row,col,ecolor);
	  	ProcCrearCurso.tObj.style.cursor = 'default';	  	
	  	ProcCrearCurso.setMsg('');
	  };	
	  //CLICK EN UNA CELDA
	  this.tObj.rows[row].cells[col].onclick = function(e)
	  {
	  	ProcCrearCurso.procClickEvent(e,row,col);
	  };
  },
  //COLOCA UN MENSAJES DE ERROR EN LA BARRA DEL DIALOGO
  setMsgErr : function(msg)
  {
	dialogsCrearCurso.setColorTextMsg('red');  
	//dialogsCrearCurso.enableScrollMsg(100, false, 'verdana', 10, colorMsgScroll);
	//dialogsCrearCurso.onScrollMsgComplete('ProcCrearCurso.stopScroll()' ,1);
	dialogsCrearCurso.setMsg(msg);
  },
  
  //COLOCA UN MENSAJE EN LA BARRA DEL DIALOGO
  setMsg : function(msg)
  {
    dialogsCrearCurso.setColorTextMsg(attrib.Color.textDialogBarraTitle[ambiente]);
	//dialogsCrearCurso.enableScrollMsg(100, false, 'verdana', 10, colorMsgScroll);
	//dialogsCrearCurso.onScrollMsgComplete('ProcCrearCurso.stopScroll()' ,1);  
  	dialogsCrearCurso.setMsg(msg);
  },
  
  setStsComboAula : function(sts)
  {
  	if(!sts)
  	{
  		pcbCrearCurTipAula.disable();
  		pcbCrearCurTipAula.setSelectedIndex(0);
  		pcbCrearCurBloque.disable();
  		pcbCrearCurBloque.setSelectedIndex(0);
  		pcbCrearCurAula.disable();
  		pcbCrearCurAula.setSelectedIndex(0);
  	}
  	else
  	{
  		pcbCrearCurTipAula.enable();
  		pcbCrearCurBloque.enable();
  		pcbCrearCurAula.enable();
  	}
	pcbCrearCurTipAula.enableReadOnlyEditor();
  	pcbCrearCurBloque.enableReadOnlyEditor();
  	pcbCrearCurAula.enableReadOnlyEditor();
  },
  
  validMatAndLoad : function()
  {
	if(this.valCombos.carreraOrg!=this.valCombos.carrera)
	{
	    Alert.show('No puede planificar materias de otra carrera','SISTEMA',Alert.TYPE_INFO);		
	}
	else
	{
	  ProcCrearCurso.delDisponibilidad();
	  ProcCrearCurso.changeSts(12, 4);
	  ProcCrearCurso.changeSts(4, 2);
	  ProcCrearCurso.changeSts(7, 2);	
	  ProcCrearCurso.changeSts(5, 0);
	  var fs = ProcCrearCurso.CursoNuevo.getArrayRowPosition(ProcCrearCurso.regData.materia,
		 	                                       ProcCrearCurso.regData.seccion);
	  var cs = ProcCrearCurso.CursoNuevo.getArrayColPosition(ProcCrearCurso.regData.materia,
		 	                                       ProcCrearCurso.regData.seccion);
	  for(var i=0; i<fs.length; i++)
	  {
	  	//SE CAMBIA EL ESTADO A CURSO SELECCIONADO EN TODOS LOS HORARIOS
	      ProcCrearCurso.data[cs[i]][fs[i]].estado.setSts(4);			
	  }
	  //imgButtonsCrearCurAgregar.setDisable();
	  imgButtonsCrearCurEliminar.setEnable();	
	  imgButtonsCrearCurModificar.setEnable();			
	  ProcCrearCurso.setStsComboAula(true);	  
	} 
  },

  clickCursoNuevo : function(row, col)
  {
	//CURSO NUEVO (YA SALVADO EN BD)
	//LOS CURSOS NUEVOS SE COLOCAN COMO TAL
	var idm = ProcCrearCurso.data[col][row].estado.getIdMateria();
	var idp = ProcCrearCurso.data[col][row].estado.getIdPersona();
	var ids = ProcCrearCurso.data[col][row].estado.getIdSeccion();
	pcbCrearCurMateria.findOption(idm);
	CrearCurso.getLoadDataProfBloqInit(idp,false);//aqui se llama a ProcCrearCurso.validMatAndLoad()
	//pcbCrearCurSeccion.findOption(ids);
	pcbCrearCurSeccion.valid(dialogsCrearCurso);
	pcbCrearCurMateria.valid(dialogsCrearCurso);
	//ProcCrearCurso.getDataCombo();
	editsCrearCurCupMinimo.setValue(ProcCrearCurso.data[col][row].estado.getCupoMin());
	editsCrearCurCupMaximo.setValue(ProcCrearCurso.data[col][row].estado.getCupoMax());
  },
  
  setCambiaHr : function()
  {
	imgButtonsCrearCurAgregar.setEnable();
    imgButtonsCrearCurAgregar.setCaption('Cambiar Hr.'); 
    imgButtonsCrearCurAgregar.setStsValue(1);
  },
  
  setAgregar : function()
  {
	imgButtonsCrearCurAgregar.setDisable();
    imgButtonsCrearCurAgregar.setCaption('Agregar'); 
    imgButtonsCrearCurAgregar.setStsValue(0);
  },
   
  //*************************** FUNCION PARA CHEQUEO DE ONCLICK EN UNA CELDA *****************************
  procClickEvent : function(e,row,col)
  {	
  	ProcCrearCurso.actRow = row;
  	ProcCrearCurso.actCol = col;
  	//SE OBTIENE EL ESTADO DE LA CELDA
  	var s = ProcCrearCurso.data[col][row].estado.getSts(); 
  	//para el estado del curso
  	//1:activo  -  2: bloqueado  - 3:cerrado 
  	var idstsCurso = ProcCrearCurso.data[col][row].estado.getIdEstadoCurso();
    if(idstsCurso!='')
    {
      pcbCrearCurEstado.findOption(idstsCurso);
    }  
	switch(s)
	{
		case 0 : {//INICIO
			        this.setMsgErr('INVALIDO, Debe colocar un profesor para asignar un nuevo curso.');
			        break;
			     }
		case 1 : {//PROF DISPONIBLE
			        ProcCrearCurso.getDataCombo();
			        if(this.SelectedCourses()) {
			        	Alert.show('No puede crear cursos nuevos si hay cursos seleccionados','SISTEMA',Alert.TYPE_INFO);	
			        }
			        else {
			          if(this.valCombos.carreraOrg!=this.valCombos.carrera) {
			        	  Alert.show('No puede planificar materias de otra carrera','SISTEMA',Alert.TYPE_INFO);	
			          }  
			          else {
			        	  if(ProcCrearCurso.validDataCombo1()) {
			        		  //SI EL CURSO NO EXISTE	
			        		  if(!ProcCrearCurso.CursoNuevo.courseExist(ProcCrearCurso.regData.materia, ProcCrearCurso.regData.seccion)) {
			        			  //SE CREA EL CURSO NUEVO SI NO EXISTE
			        			  ProcCrearCurso.CursoNuevo.create(ProcCrearCurso.regData.materia, ProcCrearCurso.regData.seccion, ProcCrearCurso.regData.hc);	
			        			  //SE CAMBIA EL ESTADO A CURSO NUEVO
			        			  ProcCrearCurso.data[col][row].estado.setSts(5);     
			        			  //SE CARGA LA DATA EN LA CELDA
			        			  ProcCrearCurso.regData.idHorario = ProcCrearCurso.getIdHorarioByRow(row-1);//carga idHorario
			        			  ProcCrearCurso.regData.diaSemana = col;//carga dia de la semana
			        			  ProcCrearCurso.data[col][row].estado.setDataCurso(ProcCrearCurso.regData);//carga la celda
			        			  //SE GUARDA LA POSICION EN LA TABLA
			        			  ProcCrearCurso.CursoNuevo.addPositionTable(ProcCrearCurso.regData.materia, ProcCrearCurso.regData.seccion,row,col); 
			        			  ProcCrearCurso.hrsLoadedProf++;
			        		  }
			        		  //SI EL CURSO EXISTE
			        		  else {
			        			  //SE ANEXA LA HORA AL CURSO EXISTENTE
			        			  if (ProcCrearCurso.CursoNuevo.addHC(ProcCrearCurso.regData.materia, ProcCrearCurso.regData.seccion)) {
			        				  //SE CAMBIA EL ESTADO A CURSO NUEVO
			        				  ProcCrearCurso.data[col][row].estado.setSts(5);
			        				  //SE CARGA LA DATA EN LA CELDA
			        				  ProcCrearCurso.regData.idHorario = ProcCrearCurso.getIdHorarioByRow(row-1);//carga idHorario
			        				  ProcCrearCurso.regData.diaSemana = col;//carga dia de la semana
			        				  ProcCrearCurso.data[col][row].estado.setDataCurso(ProcCrearCurso.regData);//carga la celda
			        				  //SE GUARDA LA POSICION EN LA TABLA
			        				  ProcCrearCurso.CursoNuevo.addPositionTable(ProcCrearCurso.regData.materia, ProcCrearCurso.regData.seccion,row,col); 
			        			  }
			        			  else {
			        				  Alert.show('No puede asignar mas Horas Credito a este curso, su carga esta completa...','SISTEMA',Alert.TYPE_INFO);	
			        			  }
			        		  }
			        		  if(pcbCrearCurMateria.setModeReturnGetText(5).getText() == 'SI' || ProcCrearCurso.CursoNuevo.isHCReady(ProcCrearCurso.regData.materia, ProcCrearCurso.regData.seccion)) {//chequeo de HC asignadas o SI LA MATERIA TIENE HORARIO EXTENDIDO
			        			  imgButtonsCrearCurAgregar.setEnable();
			        		  }
			        		  else { 
			        			  imgButtonsCrearCurAgregar.setDisable();
			        		  }
			        	  }
			          }
			        }
			        break;
				}
		case 2 :
		case 3 : {  //CURSO NUEVO Y CURSO ASIGNADO
					ProcCrearCurso.delAulaDisp();
			        ProcCrearCurso.clickCursoNuevo(row, col);		
			        this.setCambiaHr();
			        ProcCrearCurso.idCursoCambiaHorario = ProcCrearCurso.getIdCursoFromCell();
					break;
				 }
		case 4 : {//CURSO SELECCIONADO
					var fs = ProcCrearCurso.CursoNuevo.getArrayRowPosition(ProcCrearCurso.regData.materia,
					  	                                       ProcCrearCurso.regData.seccion);
			        var cs = ProcCrearCurso.CursoNuevo.getArrayColPosition(ProcCrearCurso.regData.materia,
					  	                                       ProcCrearCurso.regData.seccion);					  
					for(var i=0; i<fs.length; i++)
					{
					  //SE CAMBIA EL ESTADO AL ANTERIOR
					  if(ProcCrearCurso.data[cs[i]][fs[i]].estado.getAula()=='')
					    ProcCrearCurso.data[cs[i]][fs[i]].estado.setSts(2);
					  else
						ProcCrearCurso.data[cs[i]][fs[i]].estado.setSts(3);  
					}
			        ProcCrearCurso.setAgregar();
			        ProcCrearCurso.setStsComboAula(false);
					imgButtonsCrearCurEliminar.setDisable();	
					imgButtonsCrearCurModificar.setDisable();
					break;
				 }
		case 5 : {//CURSO NUEVO Y PROF DISPONIBLE
			          if(ProcCrearCurso.data[col][row].estado.getIdCurso()!='')
			          {
			        	ProcCrearCurso.clickCursoNuevo(row,col);    
			          }
			          else
			          {
			            var mat = ProcCrearCurso.data[col][row].estado.regDataCurso.materia;
				        var sec = ProcCrearCurso.data[col][row].estado.regDataCurso.seccion;
			            ProcCrearCurso.CursoNuevo.delHC(mat,sec);	
			            //SE CAMBIA EL ESTADO A PROFESOR DISPONIBLE
					    ProcCrearCurso.data[col][row].estado.setSts(1);
					    //SE DESHABILITA EL BOTON AGREGAR
					    imgButtonsCrearCurAgregar.setDisable();
					  }
	 				  break;
				 }
		case 7 : {//CURSO SELECCIONADO Y PROF DISPONIBLE
					ProcCrearCurso.changeSts(7, 4);
					ProcCrearCurso.changeSts(4, 2);
					ProcCrearCurso.setStsComboAula(true);
					imgButtonsCrearCurModificar.setDisable();	
					imgButtonsCrearCurEliminar.setDisable();
					break;
				 }
		case 8 : {//CURSO ASIGNADO Y CURSO SELECCIONADO
					break;
				 }
		case 9 : {//CURSO ASIGNADO, CURSO SELECCIONADO Y PROF DISPONIBLE
					break;
				 }
		case 12 :{//CURSO NUEVO SELECCIONADO CON AULA DISPONIBLE
			        ProcCrearCurso.getDataCombo();
					ProcCrearCurso.data[col][row].estado.setSts(15);
					imgButtonsCrearCurModificar.setEnable();
					break;
				 }
		case 14 :{//CURSO ASIGNADO SELECCIONADO CON AULA DISPONIBLE
	        		ProcCrearCurso.getDataCombo();
	        		ProcCrearCurso.data[col][row].estado.setSts(15);
	        		break;
		 		}
		case 15 :{//CURSO SELECCIONADO CON AULA ASIGNADA
					var idAula = pcbCrearCurAula.getText();
					if(ProcCrearCurso.data[col][row].estado.getIdAula()==idAula)
					{ 
					  //ProcCrearCurso.data[col][row].estado.setAula('');
					  //ProcCrearCurso.data[col][row].estado.setIdAula('');
					  ProcCrearCurso.data[col][row].estado.setSts(16);
					}
					else
					  ProcCrearCurso.data[col][row].estado.setSts(12);
					break;
				 }
		case 16 :{//CURSO CON AULA ELIMINADA
				   	ProcCrearCurso.data[col][row].estado.setSts(15);
				 }
	}
  },
  
  getRecordListCursoNuevo : function()
  {
  	var rlx = xmlStructs.createRecordList("rlx");
  	
  	for (var c=0; c < this.tObj.rows[0].cells.length; c++) 
	{
	  for (var f=0; f < this.tObj.rows.length; f++) 
	  {
	  	var sts = ProcCrearCurso.data[c][f].estado.getSts()
	  	/*
	  	sts = 5 	Curso Nuevo y Prof 
	  	sts = 4 	Curso Seleccionado (ya tiene profesor)
	  	sts = 7	    Curso Seleccionado y Profesor disponible
	  	sts = 12    Aula Disponible para curso seleccionado
	  	sts = 15	Curso Seleccionado y aula asignada (ya tiene Profesor)
	  	sts = 16    CURSO SELECCIONADO Y AULA ELIMINADA
	  	*/
	  	if(sts == 5 || sts == 4 || sts == 15 || sts == 7 || sts==16 || sts==12)
	  	{
	  	  rlx.addInt('reg'+f+','+c, ProcCrearCurso.data[c][f].estado.regDataCurso.idHorario); 	
	  	  rlx.addInt('reg'+f+','+c, ProcCrearCurso.data[c][f].estado.regDataCurso.diaSemana);
	  	  rlx.add('reg'+f+','+c, new MiniDataSet(ProcCrearCurso.data[c][f].estado.regDataCurso.idMateria, 'string', false));
	  	  if(sts==7)
	  		rlx.add('reg'+f+','+c, pcbCrearCurProfesor);  
	  	  else
	  		  rlx.addInt('reg'+f+','+c, ProcCrearCurso.data[c][f].estado.regDataCurso.idPersona);
	  	  rlx.addInt('reg'+f+','+c, ProcCrearCurso.data[c][f].estado.regDataCurso.idPeriodo);
	  	  rlx.add('reg'+f+','+c, pcbCrearCurEstado);
	  	  rlx.add('reg'+f+','+c, new MiniDataSet(ProcCrearCurso.data[c][f].estado.regDataCurso.idSeccion, 'string', false));
	  	  rlx.add('reg'+f+','+c, editsCrearCurCupMinimo);
	  	  rlx.add('reg'+f+','+c, editsCrearCurCupMaximo);
	  	  if(sts==15)
	  		rlx.add('reg'+f+','+c, pcbCrearCurAula);//id_aula
	  	  else 
	  		if(sts==16)
	  		  rlx.addStr('reg'+f+','+c, '');
	  	    else
	  		  rlx.add('reg'+f+','+c, new MiniDataSet(ProcCrearCurso.data[c][f].estado.getIdAula(), 'string', false));
	  	  
	  	  rlx.addInt('reg'+f+','+c, ProcCrearCurso.data[c][f].estado.getIdCurso());
	  	  rlx.add('reg'+f+','+c, pcbCrearCurCarrera.setModeReturnGetText(2));
	  	  rlx.add('reg'+f+','+c, pcbCrearCurPosMateria);
	  	  rlx.addInt('reg'+f+','+c, ProcCrearCurso.data[c][f].estado.regDataCurso.idCarrera);
	  	  rlx.addInt('reg'+f+','+c, ProcCrearCurso.data[c][f].estado.regDataCurso.posicion);
	  	  rlx.addInt('reg'+f+','+c, pcbCrearCurTipoHorario.getText());//id de tipo horario
	  	  rlx.add('reg'+f+','+c, pcbCrearCurCarrera.setModeReturnGetText(5));//id de nivel académico
	  	  rlx.addInt('reg'+f+','+c, this.idCursoCambiaHorario);//idCursoCambiaHorario
	  	}
	  }
	}  
	return rlx;
  },
  
  setAulaDispRowCol : function(row, col)
  {
  	  var sts = ProcCrearCurso.data[col][row].estado.getSts();
  	  switch(sts)
  	  {
  	  	case 0 : {//INICIO
  	  		        ProcCrearCurso.data[col][row].estado.setSts(10);//AULA DISP.
  					break;		  			
  	  			 }
  	  	case 1 : {//PROFESOR DISPONIBLE
  	  				ProcCrearCurso.data[col][row].estado.setSts(10);//AULA DISP.
  					break;
  	  			 }
  	  	case 2 : {//CURSO NUEVO
  	  				if(ProcCrearCurso.data[col][row].estado.getIdCarrera() == ProcCrearCurso.data[col][row].estado.getIdCarreraOrg())
  	  				  ProcCrearCurso.data[col][row].estado.setSts(11);//CURSO NUEVO Y AULA DISP
  					break;
  	  			 }
  	  	case 3 : {//CURSO ASIGNADO
  	  				ProcCrearCurso.data[col][row].estado.setSts(13);//CURSO ASIGNADO Y AULA DISP
  					break;
  	  			 }
  	  	case 4 : {//CURSO SELECCIONADO
  	  				ProcCrearCurso.data[col][row].estado.setSts(12);//CURSO SELEC Y AULA DISP.
  					break;
  	  			 }
  	    case 5 : {//CURSO NUEVO Y PROF. DISPONIBLE
  	    			ProcCrearCurso.data[col][row].estado.setSts(11);//CURSO NUEVO Y AULA DISP
  	    		    break;
  	    		 }
   	    case 6 : {//CURSO ASIGNADO Y PROF. DISPONIBLE
   	    			ProcCrearCurso.data[col][row].estado.setSts(13);//CURSO ASIGNADO Y AULA DISP
  	    		    break;
  	    		 }
   	    case 7 : {//CURSO SELECCIONADO Y PROF. DISPONIBLE
   	    			ProcCrearCurso.data[col][row].estado.setSts(12);//CURSO SELEC Y AULA DISP
  	    		    break;
  	    		 }
  	  	case 8 : {//CURSO ASIGNADO Y CURSO SELECCIONADO
  	  				ProcCrearCurso.data[col][row].estado.setSts(14);//CURSO ASIGNADO, SELECCIONADO Y AULA DISP
  					break;
  	  			 }
  	    case 9 : {//CURSO ASIGNADO, CURSO SELECCIONADO Y PROF. DISPONIBLE
  	    			ProcCrearCurso.data[col][row].estado.setSts(14);//CURSO ASIGNADO, SELECCIONADO Y AULA DISP
  	    		    break;
  	    		 }
  	  } 	
  },
  
  delAulaDispRowCol : function(row,col)
  {
  	var sts = ProcCrearCurso.data[col][row].estado.getSts();
  	switch(sts)
  	{
  	  case 10 : {//AULA DISP.
  	 	          ProcCrearCurso.data[col][row].estado.setSts(0);//INICIO
  		  	  	  break;		  			
  	  		    }
   	  case 11 : {//CURSO NUEVO Y AULA DISP
   	  			  ProcCrearCurso.data[col][row].estado.setSts(2);//CURSO NUEVO.
  				  break;		  			
    		    }
  	  case 12 : {//CURSO SELEC Y AULA DISP.
  		  		  ProcCrearCurso.data[col][row].estado.setSts(4);//CURSO SELEC
				  break;
  			    }
  	  case 13 : {//CURSO ASIGNADO Y AULA DISP
  				  ProcCrearCurso.data[col][row].estado.setSts(3);//CURSO ASIGNADO
				  break;
  			    }
  	  case 14 : {//CURSO ASIGNADO, SELECCIONADO Y AULA DISP
  				  ProcCrearCurso.data[col][row].estado.setSts(8);//CURSO ASIGNADO Y SELEC
				  break;
  			    }
  	  case 15 : {//CURSO ASIGNADO, SELECCIONADO Y AULA DISP
  		  		  ProcCrearCurso.data[col][row].estado.setSts(14);//CURSO ASIGNADO Y SELEC
		          break;
	    		}
    }
  },
  
  setAulaDisp : function(dataSt)
  {
  	this.delAulaDisp();  	
  	
  	for (var col=0; col < this.tObj.rows[0].cells.length; col++) 
	{
	  for (var row=0; row < this.tObj.rows.length; row++) 
	  {
	  	if(row <= ProcCrearCurso.horario.length)
	  	  this.setAulaDispRowCol(row, col)	
 	  }
 	}
 	
 	//AHORA SE DESHABILITAN LAS AULAS NO DISPONIBLES 	
 	if(dataSt!=null)
 	{
 	  for(var i=0; i<dataSt[0].length; i++)
  	  {	
  	    //SE OBTIENE LA FILA Y LA COLUMNA
  	    var row = this.getRowByIdHorario(dataSt[0][i]);
  	    var col = dataSt[1][i];
	    this.delAulaDispRowCol(row,col);	
	    var idAula = pcbCrearCurAula.getText();
		if(ProcCrearCurso.data[col][row].estado.getIdAula()==idAula)
	    {
		  if(ProcCrearCurso.data[col][row].estado.getSts()==14)	
	        ProcCrearCurso.data[col][row].estado.setSts(15);	      
	    }	
      }	
 	}
  },
  
  delAulaDisp : function()
  {
  	this.delDisponibilidad();
  	for (var col=0; col < this.tObj.rows[0].cells.length; col++) 
	{
	  for (var row=0; row < this.tObj.rows.length; row++) 
	  {	
  		this.delAulaDispRowCol(row,col);
  	  } 	
  	}
  },
  
  getTotalDisp : function()
  {
	return ProcCrearCurso.totalProfDisp;  
  },
  
  setDisponibilidad : function(dataSt)
  {
  	this.delDisponibilidad();
  	ProcCrearCurso.hrProfCurso=0;
  	//SE OBTIENE EL NOMBRE DEL PROFESOR DEL COMBO
  	var prof = pcbCrearCurProfesor.getOption(pcbCrearCurProfesor.getItemIndex());
  	for(var i=0; i<dataSt[1].length; i++)
  	{	
  	  //SE OBTIENE LA FILA Y LA COLUMNA
  	  var row = this.getRowByIdHorario(dataSt[1][i]);
  	  var col = dataSt[3][i];
  	  ProcCrearCurso.disp_Prof[col][row]=true;
  	  //SE OBTIENE EL ESTADO DE LA CELDA
  	  var sts = ProcCrearCurso.data[col][row].estado.getSts();
  	  switch(sts)
  	  {
  	  	case 0 : {//INICIO
  	  			    //SE ASIGNA EL PROFESOR A LA ESTRUCTURA DE LA CELDA	
  	  				ProcCrearCurso.data[col][row].estado.setProf(prof);  	  
  					ProcCrearCurso.data[col][row].estado.next();
  					ProcCrearCurso.totalProfDisp++;
  					break;		  			
  	  			 }	 
  	  	case 2 : {//CURSO NUEVO
  	  				if(ProcCrearCurso.data[col][row].estado.getIdCarrera() == ProcCrearCurso.data[col][row].estado.getIdCarreraOrg())
  	  				{
  	  					ProcCrearCurso.data[col][row].estado.setSts(5);
  	  				ProcCrearCurso.totalProfDisp++;
  	  				}
  	  				break;
  	  			 }
  	  	case 3 : {//CURSO ASIGNADO
  	  				ProcCrearCurso.data[col][row].estado.setSts(6);
  	  				ProcCrearCurso.totalProfDisp++;
  					break;
  	  			 }
  	  	case 4 : {//CURSO SELECCIONADO
  	  				ProcCrearCurso.data[col][row].estado.setSts(7);
  	  				ProcCrearCurso.hrProfCurso++;
  	  				var thc = ProcCrearCurso.CursoNuevo.getHC(ProcCrearCurso.regData.materia, 
					   									      ProcCrearCurso.regData.seccion);
					
  	  				ProcCrearCurso.totalProfDisp++;
  	  				break;
  	  			 }
  	    case 5 : {//CURSO NUEVO Y PROF. DISPONIBLE
  	    			//SE ASIGNA EL PROFESOR A LA ESTRUCTURA DE LA CELDA	
  	  				ProcCrearCurso.data[col][row].estado.setProf(prof);
  	  				ProcCrearCurso.totalProfDisp++;
  	    		 }
		case 15 : {//CURSO SELECCIONADO Y AULA ASIGNADA
					ProcCrearCurso.data[col][row].estado.setSts(7);
  	  				ProcCrearCurso.data[col][row].estado.setProf(prof);
  	  				ProcCrearCurso.totalProfDisp++;
  	    		 }
		case 12 : {//CURSO SELECCIONADO CON AULA DISPONIBLE
					ProcCrearCurso.data[col][row].estado.setSts(7);
  	  				ProcCrearCurso.data[col][row].estado.setProf(prof);
  	  				ProcCrearCurso.totalProfDisp++;
  	    		 }
  	  } 	
  	}
  	if(thc == ProcCrearCurso.hrProfCurso)
	  imgButtonsCrearCurModificar.setEnable();
	else
	  imgButtonsCrearCurModificar.setDisable();
  },
  
  delDisponibilidad : function()
  {
	ProcCrearCurso.totalProfDisp=0;
  	ProcCrearCurso.hrProfCurso=0;
  	for (var c=0; c < this.tObj.rows[0].cells.length; c++) 
	{
	  for (var f=0; f < this.tObj.rows.length; f++) 
	  {
	  	ProcCrearCurso.disp_Prof[c][f]=false;
	  	//SE ELIMINA EL PROFESOR A LA ESTRUCTURA DE LA CELDA	 
	  	var sts = ProcCrearCurso.data[c][f].estado.getSts();
	  	switch(sts)
  	    {
  	  	case 1 : {//PROF DISPONIBLE
  					ProcCrearCurso.data[c][f].estado.prior();
  					//ProcCrearCurso.data[c][f].estado.setProf('');
  					break;		  			
  	  			 }
  	  	case 5 : {//CURSO NUEVO Y PROF DISPONIBLE 
  	  				ProcCrearCurso.CursoNuevo.delHC(ProcCrearCurso.regData.materia, ProcCrearCurso.regData.seccion);
  					ProcCrearCurso.data[c][f].estado.setSts(0);
  					break;
  	  			 }
  	  	case 6 : {//CURSO ASIGNADO Y PROF DISPONIBLE
  	  				ProcCrearCurso.data[c][f].estado.setSts(3);
  					break;
  	  			 }
  	  	case 7 : {//CURSO SELECCIONADO Y PROF DISPONIBLE
  	  				ProcCrearCurso.data[c][f].estado.setSts(4);
  	  				imgButtonsCrearCurModificar.setDisable();
  					break;
  	  			 }
  	  	case 9 : {//CURSO ASIGNADO, CURSO SELECCIONADO Y PROF DISPONIBLE
  	  				//ProcCrearCurso.data[c][f].estado.setSts(8);
  					break;
  	  			 }
		case 15: {//CURSO ASIGNADO, CURSO SELECCIONADO Y PROF DISPONIBLE
  	  				ProcCrearCurso.data[c][f].estado.setSts(12);
					break;
  	  			 }
		case 16: {//CURSO SELECCIONADO Y AULA ELIMINADA
  	  				ProcCrearCurso.data[c][f].estado.setSts(12);
					break;
  	  			 }		  
  	    } 
	  }
	}
  },
	
  setEventCells : function()
  {	
	  for(var i=1; i<this.maxRow+1; i++)
	  {
	  	for(var j=1; j<8; j++)
	  	{	
	  	  this.setEventCell(i,j);	
	  	}
	  }	
  },	
  
  setHorario : function(stHr)
  {
	var i=0;
	for (i=0; i < stHr[0].length;i++)
	{ 
	  this.horario[i] = new Object();	
	  this.horario[i].descrip =	stHr[1][i];//se cargan las descripciones de horario
	  this.horario[i].hr = stHr[0][i];//se cargan los ids de horario
	  this.tObj.addTextToCell(i+1,0,this.horario[i].descrip);
	}
  },
  
  validDataCombo1 : function()
  {
  	if (
		  pcbCrearCurPeriodo.valid(dialogsCrearCurso)	        		&&	
	      pcbCurOrg.valid(dialogsCrearCurso)			&&
          pcbCrearCurSubOrg.valid(dialogsCrearCurso)	&&
          pcbCrearCurCarrera.valid(dialogsCrearCurso)			&&
		  pcbCrearCurPosMateria.valid(dialogsCrearCurso)		&&
		  pcbCrearCurMateria.valid(dialogsCrearCurso)			&&
          pcbCrearCurSeccion.valid(dialogsCrearCurso)			&&
          pcbCrearCurProfesor.valid(dialogsCrearCurso)		&&
          pcbCrearCurEstado.valid(dialogsCrearCurso)			
       )
	{
	   	return true
	}
	else
	  return false;
  },
  
  validDataCombo2 : function()
  {
  	if (
  		  editsCrearCurCupMaximo.valid(dialogsCrearCurso)				&&
          editsCrearCurCupMinimo.valid(dialogsCrearCurso)				&&
          pcbCrearCurPeriodo.valid(dialogsCrearCurso)	         		&&
          pcbCrearCurTipAula.valid(dialogsCrearCurso)			&&
		  pcbCrearCurBloque.valid(dialogsCrearCurso)			&&
          pcbCrearCurAula.valid(dialogsCrearCurso)			&&
	      pcbCurOrg.valid(dialogsCrearCurso)			&&
          pcbCrearCurSubOrg.valid(dialogsCrearCurso)	&&
          pcbCrearCurCarrera.valid(dialogsCrearCurso)			&&
		  pcbCrearCurPosMateria.valid(dialogsCrearCurso)		&&
		  pcbCrearCurMateria.valid(dialogsCrearCurso)			&&
          pcbCrearCurSeccion.valid(dialogsCrearCurso)			&&
          pcbCrearCurProfesor.valid(dialogsCrearCurso)		&&
          pcbCrearCurEstado.valid(dialogsCrearCurso)			
       )
	{
	   	return true;
	}
	else
	  return false;
  },

  getDataCombo : function()
  {  	
  	//LLENADO DE REGISTRO DE VALORES DE LOS COMBOS
  	this.valCombos.org = pcbCurOrg.getText();
	this.valCombos.stsCurs = pcbCrearCurEstado.getText();
	if(pcbCrearCurBloque.getText()!=null)
	  this.valCombos.bloque = pcbCrearCurBloque.getText(); 
	else
	  this.valCombos.bloque = '';
	this.valCombos.periodo = pcbCrearCurPeriodo.getText();
//	this.valCombos.stsPeriodo = pcbCrearCurEstPeriodo.getText(); 
	
	pcbCrearCurMateria.setModeReturnGetText(-1);
	var arrM = pcbCrearCurMateria.getText();
	pcbCrearCurMateria.setModeReturnGetText(0);
	this.valCombos.materia = arrM[0];//id_materia
	this.valCombos.carreraOrg = arrM[2];//id_carrera a la cual pertenece	
	if(pcbCrearCurAula.getText()!=null)
	  this.valCombos.aula = pcbCrearCurAula.getText();
	else
	  this.valCombos.aula = '';
	this.valCombos.prof = pcbCrearCurProfesor.getText();
	this.valCombos.subOrg = pcbCrearCurSubOrg.getText(); 
	pcbCrearCurCarrera.setModeReturnGetText(2);
	this.valCombos.carrera = pcbCrearCurCarrera.getText(); 
	this.valCombos.posicion = pcbCrearCurPosMateria.getText(); 
	this.valCombos.seccion = pcbCrearCurSeccion.getText(); 
//	this.valCombos.horario = pcbCrearCurHorario; 
	this.valCombos.cupoMax = editsCrearCurCupMaximo.getText(); 
	this.valCombos.cupoMin = editsCrearCurCupMinimo.getText(); 
	this.valCombos.hc = arrM[1];//numero de horas credito de la materia
	//LLENADO DE REGISTRO DE OPCIONES DE LOS COMBOS
	this.optCombos.org = pcbCurOrg.getOption(pcbCurOrg.getItemIndex());
	this.optCombos.stsCurs = pcbCrearCurEstado.getOption(pcbCrearCurEstado.getItemIndex());
	this.optCombos.bloque = pcbCrearCurBloque.getOption(pcbCrearCurBloque.getItemIndex()); 
//	this.optCombos.periodo =editsCrearCurPeriodo.getValue();
//	this.optCombos.stsPeriodo = pcbCrearCurEstPeriodo.getOption(pcbCrearCurEstPeriodo.getItemIndex()); 
	this.optCombos.materia = pcbCrearCurMateria.getOption(pcbCrearCurMateria.getItemIndex());
	this.optCombos.aula = pcbCrearCurAula.getOption(pcbCrearCurAula.getItemIndex()); 
	this.optCombos.prof = pcbCrearCurProfesor.getOption(pcbCrearCurProfesor.getItemIndex());
	this.optCombos.subOrg = pcbCrearCurSubOrg.getOption(pcbCrearCurSubOrg.getItemIndex()); 
	this.optCombos.carrera = pcbCrearCurCarrera.getOption(pcbCrearCurCarrera.getItemIndex()); 
	this.optCombos.posicion = pcbCrearCurPosMateria.getOption(pcbCrearCurPosMateria.getItemIndex()); 
	this.optCombos.seccion = pcbCrearCurSeccion.getOption(pcbCrearCurSeccion.getItemIndex()); 
//	this.optCombos.horario = pcbCrearCurHorario.getOption(pcbCrearCurHorario.getItemIndex()); 
	this.optCombos.cupoMax = editsCrearCurCupMaximo.getValue(); 
	this.optCombos.cupoMin = editsCrearCurCupMinimo.getValue();
	ProcCrearCurso.loadRegData();
  },
  
  getDescripHorarioByRow : function(row)
  {
    if (row < this.horario.length)  
  	  return this.horario[row].descrip;
  },
  
  getDescripHorarioById : function(idHorario)
  {
  	var r = this.getRowByIdHorario(idHorario);
  	if(r!=-1)
  	  var d = this.getDescripHorarioByRow(r);
  	else
  	  return '';  
  	return d;
  },
  
  getIdHorarioByRow : function(row)
  {
  	return this.horario[row].hr;
  },
  
  getRowByIdHorario : function(idHorario)
  {
  	for(var i=0; i<this.horario.length; i++)
  	{
  		if(this.horario[i].hr==idHorario)
  		  return i+1;
  	}
  	return -1;
  },
  
  setTables : function(tableObject, tableInfo)
  {
	  this.tObj = tableObject;	
	  this.tInf = tableInfo;	
  }
};
