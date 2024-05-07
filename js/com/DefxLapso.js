function DefxLapso(){
  var rep = new Report('landscape');	
  var xMat = 280;
  var pageSize = 25;
  var itemPage = 0;
  
  var dataHead = {
  	banner 	:'',
  	org 	:'',
  	periodo	:'',
  	posicion:'',
  	dir		:'',
  	seccion	:'',
  	titulo	:''
  };		
  
  var dataNotas = {
  	alumnos 	: [],
  	idAlumno	: [],
  	materias	: [],
  	minNotaAprob : 10,
  	
  	addAlumno : function(nameAlumno){
  	  var id_alumno = dataNotas.alumnos.length;
  	  dataNotas.alumnos[id_alumno] = new Object();
  	  dataNotas.alumnos[id_alumno].nameAlumno = nameAlumno;
      dataNotas.alumnos[id_alumno].materias = [];
      dataNotas.alumnos[id_alumno].idMaterias = [];
      dataNotas.alumnos[id_alumno].promedio = 0;
      dataNotas.alumnos[id_alumno].ept = 0;
      dataNotas.alumnos[id_alumno].tma = 0;
      dataNotas.idAlumno[nameAlumno] = id_alumno;	
  	},
  	
  	cleanAlumnos : function(){
  	  dataNotas.alumnos.length = 0;
  	},
  	
  	getIdAlumno : function(nameAlumno){
  	  return dataNotas.idMateria[nameAlumno];	
  	},
  	
  	getAlumno : function(id_alumno){
  	  return dataNotas.alumnos[id_Alumno].nameAlumno;	
  	},
  	
  	getIdMateria : function(id_alumno, nameMateria){
  	  return dataNotas.alumnos[id_alumno].idMaterias[nameMateria];	
  	},
  	
  	getNameMateria : function(id_alumno, id_mat){
  	  return dataNotas.alumnos[id_alumno].materias[id_mat].materia;
  	},
  	
  	addMateria : function(id_alumno, nameMateria){
  	  var id_mat = dataNotas.alumnos[id_alumno].materias.length;	
  	  dataNotas.alumnos[id_alumno].materias[id_mat] = new Object();
  	  dataNotas.alumnos[id_alumno].materias[id_mat].materia = nameMateria;
  	  dataNotas.alumnos[id_alumno].materias[id_mat].notas = []; //lapso = 3 => def.
  	  dataNotas.alumnos[id_alumno].idMaterias[nameMateria] = id_mat;
  	},
  	
  	addNota : function(id_alumno, name_materia, nota, lapso){
  	  var id_mat = dataNotas.getIdMateria(id_alumno, name_materia);
  	  dataNotas.alumnos[id_alumno].materias[id_mat].notas[lapso] = nota;
  	},
  	
  	addNotaEPT : function(id_alumno, nota){
  	  dataNotas.alumnos[id_alumno].ept = nota;
  	},
  	
  	addTMA : function(id_alumno, tma){
  	  dataNotas.alumnos[id_alumno].tma = tma;
  	},
  	
  	calcularDef : function(){
  	  for(var j = 0; j<dataNotas.alumnos.length; j++){
  	    for(var i=0; i<dataNotas.alumnos[j].materias.length; i++){
  		  dataNotas.alumnos[j].materias[i].notas[3] = parseFloat((dataNotas.alumnos[j].materias[i].notas[0] + 
  		 											  dataNotas.alumnos[j].materias[i].notas[1] + 
  		 											  dataNotas.alumnos[j].materias[i].notas[2])/3).toFixed(2);	
  		  if(dataNotas.alumnos[j].materias[i].notas[3] < dataNotas.minNotaAprob)
  	        dataNotas.alumnos[j].tma++;
  		  dataNotas.alumnos[j].promedio += parseFloat(dataNotas.alumnos[j].materias[i].notas[3] / dataNotas.alumnos[j].materias.length);	
  	    };
  	  }
  	}
  };
  
  this.setAlumnos = function(arrayAlumnos){
  	dataNotas.cleanAlumnos();	
  	for(var i=0; i<arrayAlumnos.length; i++){
  	  dataNotas.addAlumno(arrayAlumnos[i]);	
  	};
  };
  
  this.setMaterias = function(arrMaterias, maxLength){
  	for(var i=0; i<arrMaterias.length; i++){
  	  dataNotas.materias[i] = arrMaterias[i].substring(0, maxLength);
  	}; 	
  };
  
  this.addMateria = function(id_alumno, nameMateria){
  	dataNotas.addMateria(id_alumno, nameMateria);
  };
  
  this.addNotas = function(id_alumno, name_materia, arrayNotas){
  	for(var i=0; i<arrayNotas.length; i++){
  	  dataNotas.addNota(id_alumno, name_materia, arrayNotas[i], i);
  	}
  };
  
  this.addNotasEPT = function(arrayNotas){
  	for(var i=0; i<arrayNotas.length; i++)
  	  dataNotas.addNotaEPT(i, arrayNotas[i]);
  };
    
  this.setBanner = function(value){
  	dataHead.banner = value;
  };
  
  this.setOrganizacion = function(value){
  	dataHead.org = value;
  };
  
  this.setPeriodo = function(value){
  	dataHead.periodo = value;
  };
    
  this.setPosicion = function(value){
  	dataHead.posicion = value;
  };
  
  this.setDireccion = function(value){
  	dataHead.dir = value;
  };
  
  this.setSeccion = function(value){
  	dataHead.seccion = value;
  };
  
  this.setTitulo = function(value){
  	dataHead.titulo = value;
  };
  
  function createRowMateria(){
  	
  	var arrMat = new Array();
  	for(var i=0; i<dataNotas.materias.length; i++){
  	  arrMat[i]=60;
  	}
  	rep.addAbsTable(xMat, 200, arrMat, 1, 20, false);
  	for(var i=0; i<dataNotas.materias.length; i++){
  	  rep.addText(xMat + i*60 +2, 215, dataNotas.materias[i], false);
  	}
  };
  
  function createRowTitle(){
  	var arr = [20, xMat - 20];
  	for(var i=0; i<dataNotas.materias.length; i++){
  	  arr[i+2]=60;
  	}
    rep.addAbsTable(0, 220, arr, 1, 20, false); 
    rep.addText(2 , 235,'Nro' , false);	
    rep.addText(120 , 235,'ALUMNOS' , false);
    var a = [15,15,15,15];
    for(var i=0; i<dataNotas.materias.length; i++){
      rep.addAbsTable(xMat + i*60, 220, a, 1, 20, false);
	  rep.addText(xMat + i*60 + 1, 235,'1L', false);	      
	  rep.addText(xMat + i*60 + 16, 235,'2L', false);
      rep.addText(xMat + i*60 + 31, 235,'3L', false);
      rep.addText(xMat + i*60 + 46, 235,'DF', false);
    }
    rep.addAbsTable(xMat + dataNotas.materias.length*60, 220, [22,22,22], 1, 20, false);
    rep.addText(xMat + dataNotas.materias.length*60 + 1, 235,'EPT', false);	      
	rep.addText(xMat + dataNotas.materias.length*60 + 23, 235,'TMA', false);
    rep.addText(xMat + dataNotas.materias.length*60 + 45, 235,'PRO', false);
  };
  
  function addRowTable(fila){
  	var arr = [20, xMat - 20];
  	for(var i=0; i<dataNotas.materias.length; i++){
  	  arr[i+2]=60;
  	}
  	arr[dataNotas.materias.length+2] = 22;
  	arr[dataNotas.materias.length+3] = 22;
  	arr[dataNotas.materias.length+4] = 22;
  	rep.addAbsTable(0, 240 + (fila - pageSize*itemPage)*20, arr, 1, 20, false);
  	if(fila + 1 < 10){
  	  rep.addText(4, 254 + (fila - pageSize*itemPage)*20,"0"+(fila+1), false);
  	}
  	else{
  	  rep.addText(4, 254 + (fila - pageSize*itemPage)*20,""+(fila+1), false);
  	};
  	rep.addText(24 , 254 + (fila - pageSize*itemPage)*20,dataNotas.alumnos[fila].nameAlumno, false);

  	for(var i=0; i < dataNotas.materias.length; i++)
  	{ 
  	  rep.addAbsTable(xMat + i*60, 240 + (fila - pageSize*itemPage)*20, [15,15,15,15], 1, 20, false);
  	  if(i < dataNotas.alumnos[fila].materias.length){
  	  	if(dataNotas.alumnos[fila].materias[i].notas[0] < dataNotas.minNotaAprob)
  	      rep.addText(xMat + i*60 + 2 , 254 + (fila - pageSize*itemPage)*20, "0"+dataNotas.alumnos[fila].materias[i].notas[0], false);
  	    else
  	      rep.addText(xMat + i*60 + 2 , 254 + (fila - pageSize*itemPage)*20, dataNotas.alumnos[fila].materias[i].notas[0], false);
  	    if(dataNotas.alumnos[fila].materias[i].notas[1] < dataNotas.minNotaAprob)
  	      rep.addText(xMat + i*60 + 17 , 254 + (fila - pageSize*itemPage)*20, "0"+dataNotas.alumnos[fila].materias[i].notas[1], false);
  	    else
  	      rep.addText(xMat + i*60 + 17 , 254 + (fila - pageSize*itemPage)*20, dataNotas.alumnos[fila].materias[i].notas[1], false);
  	    if(dataNotas.alumnos[fila].materias[i].notas[2] < dataNotas.minNotaAprob)
  	      rep.addText(xMat + i*60 + 32 , 254 + (fila - pageSize*itemPage)*20, "0"+dataNotas.alumnos[fila].materias[i].notas[2], false);
  	    else
  	      rep.addText(xMat + i*60 + 32 , 254 + (fila - pageSize*itemPage)*20, dataNotas.alumnos[fila].materias[i].notas[2], false);
  	    if(dataNotas.alumnos[fila].materias[i].notas[3] < dataNotas.minNotaAprob)
  	      rep.addText(xMat + i*60 + 47 , 254 + (fila - pageSize*itemPage)*20, "0"+Math.round(dataNotas.alumnos[fila].materias[i].notas[3]), false);
  	    else
  	      rep.addText(xMat + i*60 + 47 , 254 + (fila - pageSize*itemPage)*20, Math.round(dataNotas.alumnos[fila].materias[i].notas[3]), false);  
  	  }
  	}
  	if(dataNotas.alumnos[fila].ept != ''){
  	  if(dataNotas.alumnos[fila].ept < dataNotas.minNotaAprob)
  	    rep.addText(xMat + i*60 + 4, 254 + (fila - pageSize*itemPage)*20, "0"+Math.round(dataNotas.alumnos[fila].ept), false);
  	  else
  	    rep.addText(xMat + i*60 + 4, 254 + (fila - pageSize*itemPage)*20, Math.round(dataNotas.alumnos[fila].ept), false);
  	};
  	rep.addText(xMat + i*60 + 26, 254 + (fila - pageSize*itemPage)*20, Math.round(dataNotas.alumnos[fila].tma), false); 
  	rep.addText(xMat + i*60 + 46, 254 + (fila - pageSize*itemPage)*20, Math.round(dataNotas.alumnos[fila].promedio), false);  
  };
  
  this.createReport = function(){
    rep.setPositionIcon(1050,30);
	rep.setNoRepeatHead();
	rep.setHeadImage(dataHead.banner,true);
	rep.setFontProperties(rep.getRGBAObj(0,0,0,1),12,'helvetica','bold');
	rep.addHeadTitle('NOTAS FINALES',false);
	rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','bold');
	rep.addBar(0,100,1140,133,rep.getRGBAObj(220,220,220,0.3),false);
	rep.addBar(0,133,1140,190,rep.getRGBAObj(210,210,210,0.3),false);
	rep.addText(10, 155, 'INSTITUCION :',false);                
	rep.addText(450, 155, 'PERIODO :',false);
    rep.addText(750, 155, 'DIRECCION :',false);
    rep.addText(10, 175, 'GRADO :',false);
    rep.addText(450, 175, 'SECCION :',false);
    rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','normal');
	rep.addText(90, 155, dataHead.org,false);
	rep.addText(510, 155, dataHead.periodo,false);
	rep.addText(820, 155, dataHead.dir,false);
	rep.addText(60, 175, dataHead.posicion,false);
	rep.addText(510, 175, dataHead.seccion,false);
	rep.setFontProperties(rep.getRGBAObj(0,0,0,1),8,'helvetica','normal');
	dataNotas.calcularDef();
	createRowMateria();
	createRowTitle();
	for(var i=0; i<dataNotas.alumnos.length; i++){
	  if(i == pageSize || i==2*pageSize || i==3*pageSize){
	    itemPage++;
	    rep.addPage();
	    createRowMateria();
		createRowTitle();
	  }
	  addRowTable(i);
	}
	rep.render();
	setTimeout(rep.previewHTML,1000);		
  };
}; 