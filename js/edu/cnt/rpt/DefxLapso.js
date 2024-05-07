function DefxLapso(){
  var pageWidth 		= 1900;//ancho del reporte1448
  var adjw 				= 21;//ajuste de ancho de las columnas
  var anchoTextoAlumno 	= 25;//ancho nombre alumno30
  var sizeFont 			= 10;//Tamanio de la letra9
  
  var rep = new Report('landscape',pageWidth);  
  var xMat = 280;
  var pageSize = 25;
  var itemPage = 0;
  var ca = 0;
  var totalLapso = 0;
  var mat = '';
  var ultimoLapso=false;
  
  var arrays = {
  	alumnos  		: new Array(),
  	ci 		 		: new Array(),
  	idci            : new Array(),
  	materias 		: new Array(),
  	calcPromedio    : new Array(),
  	idMaterias 		: new Array(),
  	materiasAlumno 	: new Array(),
  	notas 			: new Array(new Array(new Array())),
  	ept             : new Array(),
  	eptMateria      : new Array()
  };
  
  var dataHead = {
  	banner 	:'',
  	org 	:'',
  	periodo	:'',
  	posicion:'',
  	dir		:'',
  	seccion	:'',
  	titulo	:''
  };	
    
  this.procArrays = function(js){
  	var idAlumnoAct = 0;
  	var idMateriaAct = 0;
  	var lapso = 0;
  	var lapsoAnt = 0;
  	
  	function addNewAlumno(){
      //PRIMER ALUMNO		
  	  if(arrays.alumnos.length==0){
  	  	idAlumnoAct = arrays.alumnos.length;
  	  	arrays.alumnos[idAlumnoAct] = js.data[1][i]+' '+js.data[2][i];
  	  	arrays.ci[idAlumnoAct] = js.data[0][i];
  	  	arrays.idci[idAlumnoAct] = i;
  	  	return true;
  	  }
  	  else{
  	    //MISMO ALUMNO
  	    if(arrays.ci[idAlumnoAct] == js.data[0][i]){ 
  	      return false;
  	    }
  	    //ALUMNO NUEVO
  	    else{
  	  	  idAlumnoAct++;
  	  	  arrays.alumnos[idAlumnoAct] = js.data[1][i]+' '+js.data[2][i];
  	  	  arrays.ci[idAlumnoAct] = js.data[0][i];
  	  	  arrays.idci[idAlumnoAct] = i;
  	  	  idMateriaAct=0;
  	  	  return true;
  	    }  	
  	  }     	  
  	};
  	
  	function addMaterias(){	
  	  if(arrays.materias.length==0 && js.data[6][i].toUpperCase().trim()=='NO'){  	
  	    arrays.materias[arrays.materias.length] = js.data[3][i]; 
  	    arrays.calcPromedio[0] = js.data[7][i];
  	    arrays.idMaterias[js.data[3][i]] = 0;
  	  }
  	  else{
  	  	var sts=false;
  	  	for(var j=0; j<arrays.materias.length; j++)
      	  if(arrays.materias[j] == js.data[3][i]){
      	    sts=true;
      	    arrays.calcPromedio[j] = js.data[7][i];//CALCULA PROMEDIO O NO
      	    break;
      	  }
      	  if(!sts  &&  js.data[6][i].toUpperCase().trim()=='NO'){
      	  	var idm = arrays.materias.length;
      	    arrays.materias[idm] = js.data[3][i];//MATERIAS  
      	    arrays.calcPromedio[idm] = js.data[7][i];//CALCULA PROMEDIO O NO
      	    arrays.idMaterias[js.data[3][i]] = idm; 
      	  }
  	  }	 		
  	}
  	
  	function addMatAlumno(idx){	
  	  var sts=false;
  	  idMateriaAct = arrays.idMaterias[js.data[3][idx]];
  	  for(var w=0; w < arrays.materiasAlumno[idAlumnoAct].length; w++)
  	  {  	  	
  	    if(arrays.materiasAlumno[idAlumnoAct][w]===js.data[3][i]){
  	      sts = true;
  	    }
  	  }
  	  if(arrays.materiasAlumno[idAlumnoAct].length==0 && js.data[6][i].toUpperCase().trim()=='NO'){
  	  	arrays.materiasAlumno[idAlumnoAct][idMateriaAct] = js.data[3][i];//MATERIAS DEL ALUMNO;
  	  }
  	  else{
  	    if(!sts && js.data[6][i].toUpperCase().trim()=='NO' ){  	      
	      arrays.materiasAlumno[idAlumnoAct][idMateriaAct] = js.data[3][i];//MATERIAS DEL ALUMNO;
	    }
	  } 
  	}
  	
  	function getTotales(){
  	  var ta = 0;
  	  var tm = 0;
  	  var idAnt = 0;
  	  var matAnt=new Array();
  	  for(var ix=0; ix<js.data[0].length; ix++){
  	  	if(ix==0 && js.data[6][ix].toUpperCase().trim()=='NO'){
  	  	  ta++;
  	  	  tm++;  
  	  	  matAnt[ix] = js.data[3][ix];
  	  	}  
  	  	else  
  	      if(js.data[0][ix-1] != js.data[0][ix]){
  	        ta++;
  	      }
  	      else{
  	      	if(parseInt(js.data[4][ix], 10) - 1 == 0 && js.data[6][ix].toUpperCase().trim()=='NO'){
  	      	  var f=false;
  	      	  for(var x=0; x<tm; x++)
  	      	    if(matAnt[x]==js.data[3][ix])
  	      	      f=true;
  	      	  if(!f){   
  	      	    matAnt[x]=js.data[3][ix];
  	      	    tm++;
  	      	  }
  	      	}
  	      } 
  	  }
  	  var t = { a : ta, m : tm};
  	  return t;
  	}
  	
  	
  	function addNotasAlumnoMateria(idx){
  	  if(js.data[6][idx].toUpperCase().trim()=='NO')	
  	    arrays.notas[idAlumnoAct][idMateriaAct][lapso] = js.data[5][idx];
  	  else{
  	    //MATERIAS EPT
  	    arrays.eptMateria[idAlumnoAct][arrays.eptMateria[idAlumnoAct].length] = js.data[5][idx];
  	  }
  	}
  	
  	function createStNotas(){
  	  var a = getTotales().a;	
  	  var m = getTotales().m;
  	  for(var ix = 0; ix < a; ix++){
  	    arrays.notas[ix] = new Array();
  	    arrays.calcPromedio[ix] = new Array();
  	    arrays.eptMateria[ix] = new Array();
  	    arrays.materiasAlumno[ix] = new Array();
  	    for(var iy = 0; iy < m; iy++){
  	      arrays.notas[ix][iy] = ['','',''];
  	    }
  	  }  	  
  	}
  	
  	createStNotas();
  	var tmat = getTotales().m;
  	for(var i=0; i<js.data[0].length; i++){
  	  lapso = parseInt(js.data[4][i], 10) - 1;
  	  totalLapso = lapso;
  	  addNewAlumno();
  	  addMaterias();
  	  addMatAlumno(i);
  	  addNotasAlumnoMateria(i);	  
  	}
  };
  
  this.getArrays = function(){
  	return arrays;
  };
  
  var dataNotas = {
  	alumnos 	: [],
  	idAlumno	: [],
  	materias	: [],
  	minNotaAprob : 9.5,
  	maxNotaAprob : 20,
  	
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
  	
  	getTotalMateriaAlumno : function(id_alumno){
  	  var total = 0;	
  	  for(w = 0; w < dataNotas.alumnos[id_alumno].materias.length; w++){
  	    if(dataNotas.alumnos[id_alumno].materias[w] || dataNotas.alumnos[id_alumno].materias[w].materia.trim()!='') 
  	      total++;
  	  }
  	  return total;
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
      var totMat = 0;	
      for(var j = 0; j<dataNotas.alumnos.length; j++){
        totMat = 0;
        for(var i=0; i<dataNotas.getTotalMateriaAlumno(j); i++){
          if(!isNaN(parseFloat(dataNotas.alumnos[j].materias[i].notas[0])) && parseFloat(dataNotas.alumnos[j].materias[i].notas[0]) != undefined &&
       	    !isNaN(parseFloat(dataNotas.alumnos[j].materias[i].notas[1])) && parseFloat(dataNotas.alumnos[j].materias[i].notas[1]) != undefined &&
    	    !isNaN(parseFloat(dataNotas.alumnos[j].materias[i].notas[0]))  && parseFloat(dataNotas.alumnos[j].materias[i].notas[2]) != undefined){ 	
  		    dataNotas.alumnos[j].materias[i].notas[3] = Math.round((parseFloat(dataNotas.alumnos[j].materias[i].notas[0]) + 
  		    parseFloat(dataNotas.alumnos[j].materias[i].notas[1]) + parseFloat(dataNotas.alumnos[j].materias[i].notas[2]))/3);				  
  	      if(parseFloat(dataNotas.alumnos[j].materias[i].notas[3]) < dataNotas.minNotaAprob &&
						 !isNaN(dataNotas.alumnos[j].materias[i].notas[3]) && parseFloat(dataNotas.alumnos[j].materias[i].notas[3]) > 0)
  	          dataNotas.alumnos[j].tma++;
  	      	if(arrays.calcPromedio[i]=='SI'){
  		      dataNotas.alumnos[j].promedio += parseFloat(dataNotas.alumnos[j].materias[i].notas[3]); /// parseFloat(dataNotas.alumnos[j].materias.length);
  		      totMat++;	
  		    }
  	      }
  	    }
  	    dataNotas.alumnos[j].promedio = dataNotas.alumnos[j].promedio/totMat;
  	    
  	    if(isNaN(dataNotas.alumnos[j].promedio) || dataNotas.alumnos[j].promedio==undefined)
  	    	dataNotas.alumnos[j].promedio='';
  	  }
    }
  };
  
  function addNotasEPT(){
  	for(var i=0; i<arrays.ept.length; i++){
  	  dataNotas.addNotaEPT(i, arrays.ept[i]);
  	}
  };
  
  this.calcularDefEpt = function(){
  	//definitivas EPT
  	for(var j = 0; j<dataNotas.alumnos.length; j++){
  	  arrays.ept[j]='';
  	  var tot = 0;
  	  if(totalLapso==2){
  	  	for(var w=0; w < arrays.eptMateria[j].length; w++){
  	    	tot +=parseFloat(arrays.eptMateria[j][w])/arrays.eptMateria[j].length;
  	  		if(tot > 0)
  	  			arrays.ept[j]=tot;   		
      	};
      	if(arrays.ept[j] < dataNotas.minNotaAprob && !isNaN(arrays.ept[j]) && arrays.ept[j]!==''){
        	dataNotas.alumnos[j].tma++;
      	}  
  	  }	
    };
    addNotasEPT();
  };
  
  this.setAlumnos = function(arrayAlumnos){
  	dataNotas.cleanAlumnos();	
  	for(var i=0; i<arrayAlumnos.length; i++){
  	  dataNotas.addAlumno(arrayAlumnos[i].substring(0,anchoTextoAlumno));	
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
  	  arrMat[i] = 60 + adjw;
  	}
  	rep.addAbsTable(xMat, 200, arrMat, 1, 20, false);
  	for(var i=0; i<dataNotas.materias.length; i++){
  	  rep.addText(xMat + i*(60 + adjw)+2, 215, dataNotas.materias[i], false);
  	}
  };
  
  function createRowTitle(){
  	var arr = [22, xMat - 22];
  	for(var i=0; i<dataNotas.materias.length; i++){
  	  arr[i+2]=60+adjw;
  	}
    rep.addAbsTable(0, 220, arr, 1, 20, false); 
    rep.addText(2 , 235,'N' , false);	
    rep.addText(120 , 235,'ALUMNOS' , false);
    
    var icx = adjw/4;
    var a = [15+icx, 15+icx, 15+icx, 15+icx];
    
    for(var i=0; i<dataNotas.materias.length; i++){
      rep.addAbsTable(xMat + i*(60 + adjw), 220, a, 1, 20, false);	  
	  rep.addText(xMat + i*(60 + adjw) + 1, 235,'1L', false);	      
	  rep.addText(xMat + i*(60 + adjw) + 16+icx, 235,'2L', false);
      rep.addText(xMat + i*(60 + adjw) + 31+2*icx, 235,'3L', false);
      rep.addText(xMat + i*(60 + adjw) + 46+3*icx, 235,'DF', false);
    }
    
    rep.addAbsTable(xMat + dataNotas.materias.length*(60 + adjw), 220, [22+adjw,22+adjw,22+adjw], 1, 20, false);
    rep.addText(xMat + dataNotas.materias.length*(60 + adjw) + 1 +  adjw/2, 235,'EPT', false);	      
	rep.addText(xMat + dataNotas.materias.length*(60 + adjw) + 23+2*adjw/2 + icx, 235,'TMA', false);
    rep.addText(xMat + dataNotas.materias.length*(60 + adjw) + 45+4*adjw/2 + 2*icx, 235,'PRO', false);
    
  };
  
  function addRowTable(fila){
  	var arr = [22, xMat - 22];
  	var icx = adjw/4;
  	for(var i=0; i<dataNotas.materias.length; i++){
  	  arr[i+2]=60 + adjw;
  	}
  	
  	arr[dataNotas.materias.length+2] = 22 + adjw;
  	arr[dataNotas.materias.length+3] = 22 + adjw;
  	arr[dataNotas.materias.length+4] = 22 + adjw;
  	rep.addAbsTable(0, 240 + (fila - pageSize*itemPage)*20, arr, 1, 20, false);
  	
  	if(fila + 1 < 10){
  	  rep.addText(4, 254 + (fila - pageSize*itemPage)*20,"0"+(fila+1), false);
  	}
  	else{
  	  rep.addText(4, 254 + (fila - pageSize*itemPage)*20,""+(fila+1), false);
  	};
  	
  	rep.addText(24 , 254 + (fila - pageSize*itemPage)*20,dataNotas.alumnos[fila].nameAlumno, false);

  	for(var i=0; i < dataNotas.materias.length; i++){ 
  	  rep.addAbsTable(xMat + i*(60 + adjw), 240 + (fila - pageSize*itemPage)*20, [15+icx,15+icx,15+icx,15+icx], 1, 20, false);
  	  
  	  if(i < dataNotas.alumnos[fila].materias.length){
  	  	//PRIMER LAPSO
  	  	if(dataNotas.alumnos[fila].materias[i].notas[0]!=0)
  	  	  if(dataNotas.alumnos[fila].materias[i].notas[0] < dataNotas.minNotaAprob)
  	        rep.addText(xMat + i*(60 + adjw) + 2 , 254 + (fila - pageSize*itemPage)*20, "0"+Math.round(dataNotas.alumnos[fila].materias[i].notas[0]), false);
  	      else
  	        rep.addText(xMat + i*(60 + adjw) + 2 , 254 + (fila - pageSize*itemPage)*20, Math.round(dataNotas.alumnos[fila].materias[i].notas[0]), false);
  	    
  	    //SEGUNDO LAPSO
  	    if(dataNotas.alumnos[fila].materias[i].notas[1]!=0)
  	      if(dataNotas.alumnos[fila].materias[i].notas[1] < dataNotas.minNotaAprob)
  	        rep.addText(xMat + i*(60 + adjw) + 17 + icx, 254 + (fila - pageSize*itemPage)*20, "0"+Math.round(dataNotas.alumnos[fila].materias[i].notas[1]), false);
  	      else
  	        rep.addText(xMat + i*(60 + adjw) + 17 + icx, 254 + (fila - pageSize*itemPage)*20, Math.round(dataNotas.alumnos[fila].materias[i].notas[1]), false);
  	    
  	    //TERCER LAPSO  	    
  	    if(dataNotas.alumnos[fila].materias[i].notas[2]!=0)
  	      if(dataNotas.alumnos[fila].materias[i].notas[2] < dataNotas.minNotaAprob){
  	        rep.addText(xMat + i*(60 + adjw) + 32 + 2*icx , 254 + (fila - pageSize*itemPage)*20, "0"+Math.round(dataNotas.alumnos[fila].materias[i].notas[2]), false);
  	      }
  	      else{
  	        rep.addText(xMat + i*(60 + adjw)  + 32 + 2*icx, 254 + (fila - pageSize*itemPage)*20, Math.round(dataNotas.alumnos[fila].materias[i].notas[2]), false);
          }
  	    
  	    //DEF DE LAPSO
        
        if(dataNotas.alumnos[fila].materias[i].notas[3]!=0)
          if(!isNaN(dataNotas.alumnos[fila].materias[i].notas[3])){ 
  	        if(dataNotas.alumnos[fila].materias[i].notas[3] < dataNotas.minNotaAprob)
  	          rep.addText(xMat + i*(60 + adjw) + 47 + 3*icx, 254 + (fila - pageSize*itemPage)*20, "0"+Math.round(dataNotas.alumnos[fila].materias[i].notas[3]), false);
  	        else
  	          rep.addText(xMat + i*(60 + adjw) + 47 + 3*icx, 254 + (fila - pageSize*itemPage)*20, Math.round(dataNotas.alumnos[fila].materias[i].notas[3]), false);  
  	      }
  	    }
  	  	//NOTAS EPT DE CADA MATERIA
  	    if (i === dataNotas.alumnos[fila].materias.length){
  	    	var px=0;
  	    	var defLapsoEpt=0;
  	    	var totEpt = arrays.eptMateria[fila+1].length;
  	    	if(totEpt > 0){
  	    		for(var mept=0; mept<totEpt; mept++){
  	    			var nept = Math.round(arrays.eptMateria[fila+1][mept]);
  	    			if (nept < dataNotas.minNotaAprob)
  	    				nept = "0"+nept;
  	    			if(mept % 3 === 0 && mept > 0){
  	    				defLapsoEpt = Math.round((Math.round(arrays.eptMateria[fila+1][mept-1]) +  
  	    						  			 Math.round(arrays.eptMateria[fila+1][mept-2]) + 
  	    						  			 Math.round(arrays.eptMateria[fila+1][mept-3]))/3);
  	    				if(defLapsoEpt < dataNotas.minNotaAprob)
  	    					defLapsoEpt = "0"+defLapsoEpt;
  	    				rep.addText(xMat + i*(60 + adjw) + 2 + mept*(icx + 15) + px*(icx + 15), 254 + (fila - pageSize*itemPage)*20, defLapsoEpt, false);
  	    				px++;
  	    			}
  	    			rep.addText(xMat + i*(60 + adjw) + 2 + mept*(icx + 15) + px*(icx + 15), 254 + (fila - pageSize*itemPage)*20, nept, false);
  	    		}
  	    		if(px > 0){
  	    			defLapsoEpt = Math.round((Math.round(arrays.eptMateria[fila+1][totEpt-1]) +  
  	    					  Math.round(arrays.eptMateria[fila+1][totEpt-2]) + 
  	    					  Math.round(arrays.eptMateria[fila+1][totEpt-3]))/3);
  	    			if(defLapsoEpt < dataNotas.minNotaAprob)
  	    				defLapsoEpt = "0"+defLapsoEpt;
  	    			rep.addText(xMat + i*(60 + adjw) + 2 + totEpt*(icx + 15) + px*(icx + 15), 254 + (fila - pageSize*itemPage)*20, defLapsoEpt, false);
  	    		}
  	    	}
  	    }	
  	}
  	
	if(dataNotas.alumnos[fila].ept != '' && !isNaN(dataNotas.alumnos[fila].ept)){
  	  if(dataNotas.alumnos[fila].ept < dataNotas.minNotaAprob)
  	    rep.addText(xMat + i*(60 + adjw) + 4 + 2*icx, 254 + (fila - pageSize*itemPage)*20, "0"+Math.round(dataNotas.alumnos[fila].ept), false);
  	  else
  	    rep.addText(xMat + i*(60 + adjw) + 4 + 2*icx, 254 + (fila - pageSize*itemPage)*20, Math.round(dataNotas.alumnos[fila].ept), false);
  	};
  	
  	if(Math.round(dataNotas.alumnos[fila].tma)<10)
  	   rep.addText(xMat + i*(60 + adjw) + 26 + adjw + 2*icx, 254 + (fila - pageSize*itemPage)*20, "0"+Math.round(dataNotas.alumnos[fila].tma), false); 
  	else
  	   rep.addText(xMat + i*(60 + adjw) + 26 + adjw + 2*icx, 254 + (fila - pageSize*itemPage)*20, Math.round(dataNotas.alumnos[fila].tma), false);
  	
  	if(isNaN(dataNotas.alumnos[fila].promedio) || dataNotas.alumnos[fila].promedio==undefined){
  	  rep.addText(xMat + i*(60 + adjw) + 46 + 2*adjw + 3*icx, 254 + (fila - pageSize*itemPage)*20, '', false);
  	}  
  	else{ 	    
  	  if(dataNotas.alumnos[fila].promedio < dataNotas.minNotaAprob){
  	    rep.addText(xMat + i*(60 + adjw) + 46 + 2*adjw + 3*icx, 254 + (fila - pageSize*itemPage)*20, "0"+Math.round(dataNotas.alumnos[fila].promedio), false);
  	  }
  	  else{
  	    rep.addText(xMat + i*(60 + adjw) + 46 + 2*adjw + 3*icx, 254 + (fila - pageSize*itemPage)*20, Math.round(dataNotas.alumnos[fila].promedio), false);  
      }
    } 
     
  };
  
  this.createReport = function(){
    var grow = 200;  
    rep.setPositionIcon(1150,30);
	rep.setNoRepeatHead();
	rep.setHeadImage(dataHead.banner,true);
	rep.setFontProperties(rep.getRGBAObj(0,0,0,1),12,'helvetica','bold');
	rep.addHeadTitle('NOTAS FINALES',false);
	rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','bold');
	rep.addBar(0,100,pageWidth-6,133,rep.getRGBAObj(220,220,220,0.3),false);
	rep.addBar(0,133,pageWidth-6,190,rep.getRGBAObj(210,210,210,0.3),false);
	rep.addText(10, 155, 'INSTITUCION :',false);                
	rep.addText(450, 155, 'PERIODO :',false);
    //rep.addText(750, 155, 'DIRECCION :',false);
    rep.addText(10, 175, 'CARRERA :',false);
    rep.addText(450, 175, 'AÑO / SECCION :',false);
    rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','normal');
	rep.addText(94, 155, dataHead.org,false);
	rep.addText(514, 155, dataHead.periodo,false);
	//rep.addText(820, 155, dataHead.dir,false);
	rep.addText(64, 175, dataHead.posicion,false);
	rep.addText(514, 175, dataHead.seccion,false);
	rep.setFontProperties(rep.getRGBAObj(0,0,0,1),sizeFont,'helvetica','bold');
	dataNotas.calcularDef();
	
	createRowMateria();
	createRowTitle();
	
	for(var i=0; i<dataNotas.alumnos.length - 1; i++)	  
	   dataNotas.alumnos[i] = dataNotas.alumnos[i+1];
	
	for(var i=0; i<dataNotas.alumnos.length - 1; i++){
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