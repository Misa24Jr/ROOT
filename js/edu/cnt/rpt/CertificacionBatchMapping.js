function CertificacionBatchMapping(options){
	var j1          = options.j1;
    var j2          = options.j2;
    var j3          = options.j3;
    var j4          = options.j4;
    var j5          = options.j5;
    var jn          = options.jn;
    var jl          = options.jl;
    var mat1        = [];
    var mat2        = [];
    var mat3        = [];
    var not1        = [];
    var not2        = [];
    var not3        = [];
    var te1         = [];
    var te2         = [];
    var te3         = [];
    var mes1        = [];
    var mes2        = [];
    var mes3        = [];
    var ano1        = [];
    var ano2        = [];
    var ano3        = [];
    var plantel1    = [];
    var plantel2    = [];
    var plantel3    = [];
    var calfLetras1 = [];
    var calfLetras2 = [];
    var calfLetras3 = [];
    var calfLetras  = ['Cero Uno','Cero Dos','Cero Tres', 'Cero Cuatro','Cero Cinco','Cero Seis','Cero Siete','Cero Ocho','Cero Nueve',
    'Diez','Once','Doce','Trece','Catorce','Quince','Dieciseis','Diecisiete','Dieciocho', 'Diecinueve', 'Veinte'];

	var setCalif = function(value, calfLet){
		value = value+'';
		if(value.toUpperCase()==='P')
     	   	calfLet[calfLet.length]='PENDIENTE';
        else if (value.toUpperCase()==='C')
     	   	calfLet[calfLet.length]='CURSADA'
        else if (value.toUpperCase()==='AP')
     	   	calfLet[calfLet.length]='Aprobada por convenio Andrés Bello'
        else
        	calfLet[calfLet.length] = calfLetras[parseInt(value,10)-1];
	}
	
    if(jn.data[12].length > 0) {
       for(var i=0; i<jn.data[12].length; i++) {
         if(jn.data[12][i].toUpperCase()==='PRIMERO') {
            mat1[mat1.length] = jn.data[1][i];
            te1[te1.length]   = jn.data[3][i];
            not1[not1.length] = jn.data[2][i];
            mes1[mes1.length] = jn.data[4][i];
            ano1[ano1.length] = jn.data[5][i];
            plantel1.push(jn.data[6][i]);
            setCalif(jn.data[2][i], calfLetras1);
            //calfLetras1[calfLetras1.length] = calfLetras[jn.data[2][i]-1];
          }
          if(jn.data[12][i].toUpperCase()==='SEGUNDO') {
            mat2[mat2.length] = jn.data[1][i];
            te2[te2.length]   = jn.data[3][i];
            not2[not2.length] = jn.data[2][i];
            mes2[mes2.length] = jn.data[4][i];
            ano2[ano2.length] = jn.data[5][i];
            plantel2.push(jn.data[6][i]);
            setCalif(jn.data[2][i], calfLetras2);
            //calfLetras2[calfLetras2.length] = calfLetras[jn.data[2][i]-1];
          }
          if(jn.data[12][i].toUpperCase()==='TERCERO') {
            mat3[mat3.length] = jn.data[1][i];
            te3[te3.length]   = jn.data[3][i];
            not3[not3.length] = jn.data[2][i];
            mes3[mes3.length] = jn.data[4][i];
            ano3[ano3.length] = jn.data[5][i];
            plantel3.push(jn.data[6][i]);
            setCalif(jn.data[2][i], calfLetras3);
            //calfLetras3[calfLetras3.length] = calfLetras[jn.data[2][i]-1];
          }
       }
    }
    
    if(mat1.length < 7){
    	mat1.push('***');
      te1.push('**');
      not1.push('**');
      mes1.push('**');
      ano1.push('**');
      plantel1.push('*');
      calfLetras1.push('***')
    }
    if(mat2.length < 7){
    	mat2.push('***');
      te2.push('**');
      not2.push('**');
      mes2.push('**');
      ano2.push('**');
      plantel2.push('*');
      calfLetras2.push('***')
    }
    
    if(mat3.length < 8){
    	mat3.push('***');
      te3.push('**');
      not3.push('**');
      mes3.push('**');
      ano3.push('**');
      plantel3.push('*');
      calfLetras3.push('***')
    }
    
    var ti = j4.data[0].length;
    for(var i=ti; i<5; i++){
      j4.data[0][i]='';     //nu_orden
      j4.data[1][i]='***';  //de_institucion
      j4.data[2][i]='***';  //de_localidad
      j4.data[3][i]='**';   //co_ef
      j4.data[4][i]='';     //id_plantel
      j4.data[5][i]='';     //id_institucion
    }
    
    var lt1 = ['*','*','*'];
    var lt2 = ['*','*','*'];
    var grp = ['*','*','*'];
    for (var i=0; i< jl.data[0].length; i++){
    	switch(jl.data[0][i]+''){
    		case '1' : {
    			if(jl.data[1][i].toUpperCase().charAt(0)==='O'){
    				lt1[0] = jl.data[3][i];
    			}
    			else{
    				lt2[0] = jl.data[3][i];
    				grp[0] = jl.data[2][i];
    			}
    			
    			break;
    		}
    		case '2' : {
    			if(jl.data[1][i].toUpperCase().charAt(0)==='O'){
    				lt1[1] = jl.data[3][i];
    			}
    			else{
    				lt2[1] = jl.data[3][i];
    				grp[1] = jl.data[2][i];
    			}
    			break;
    		}
    		case '3' : {
    			if(jl.data[1][i].toUpperCase().charAt(0)==='O'){
    				lt1[2] = jl.data[3][i];
    			}
    			else{
    				lt2[2] = jl.data[3][i];
    				grp[2] = jl.data[2][i];
    			}
    			break;
    		}
    	}
    }

    var jData =  {
    ///////////PARTE I    
	    plan:j1.data[0][0],
	    cod:j1.data[1][0],
	    lugar_fecha:j2.data[5][0] + ', ' + j2.data[10][0],
	    ///////////PARTE: II
	    codigo: j2.data[0][0],
	    nombreP: j2.data[1][0],
	    dir:j2.data[3][0],
	    tel:j2.data[4][0],
	    munic:j2.data[11][0],
	    entFed:j2.data[6][0],
	    zEdu:j2.data[7][0],
	    ///////////PARTE III
	    cedIde:j3.data[0][0],
	    fecNac:j3.data[1][0],
	    ape:j3.data[2][0],
	    nom:j3.data[3][0],
	    lugNac:j3.data[4][0],
	    pais:j3.data[6][0],
	    est:j3.data[5][0],
	    muni:j3.data[7][0],
	    ///////////PARTE IV
	    //I
	    nomP1:j4.data[1][0],
	    loc1:j4.data[2][0],
	    ef1:j4.data[3][0],
	    //II
	    nomP2:j4.data[1][1],
	    loc2:j4.data[2][1],
	    ef2:j4.data[3][1],
	    //III
	    nomP3:j4.data[1][2],
	    loc3:j4.data[2][2],
	    ef3:j4.data[3][2],
	    //IV
	    nomP4:j4.data[1][3],
	    loc4:j4.data[2][3],
	    ef4:j4.data[3][3],
	    //V
	    nomP5:j4.data[1][4],
	    loc5:j4.data[2][4],
	    ef5:j4.data[3][4],
	    ////////////PARTE V
	    //Data Table 1-5 Año
	    materias1: mat1,
	    calificacion1: not1,
	    calLet1: calfLetras1,
	    TE1: te1,
	    mes1: mes1,
	    ano1: ano1,
	    pl1: plantel1,

	    materias2: mat2,
	    calificacion2: not2,
	    calLet2: calfLetras2,
	    TE2: te2,
	    mes2: mes2,
	    ano2: ano2,
	    pl2: plantel2,

	    materias3: mat3,
	    calificacion3: not3,
	    calLet3: calfLetras3,
	    TE3: te3,
	    mes3: mes3,
	    ano3: ano3,
	    pl3: plantel3,

	    lit1: lt1,
	    lit2: lt2,
	    gru: grp,
	    obs: j1.data[3][0],
	    //obse:j1.data[4][0],
	    //////////////Parte VI
	    nomJef: j5.data[8][0],
	    cedJef: j5.data[9][0]
  	}
  	var c = new CertificacionBatch();
  	c.setData(jData);
  	c.init();
}