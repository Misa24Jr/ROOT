function CertificacionBatch(){
   var displace = 20.3;
	var rep = new Report('portrait',798,1500);
	var black = rep.getRGBAObj(0,0,0,0);
	var data = {};
	
	function writeMat(x,y,datMat, max){ //Write Mat
		var dataMat = datMat;
		var long = 0;
		var ln1 = "";
		var ln2 = "";
		var arr = [];
		for(var i = 0; i < dataMat.length; i++){
			if(i<max){
				ln2 = "";
				ln1 = "";
				var fSts = false;
				long = dataMat[i].length;
				if (long <= 28){
					ln1 = dataMat[i];
				}else{
					arr = dataMat[i].split(" ");
					for(var j = 0; j < arr.length; j++ ){
						if (ln1.length + arr[j].length < 28 && fSts===false){
							ln1 += arr[j] + " ";
						}else{
							ln2 += arr[j] + " ";
							fSts=true;
						}
					}
				}
				
				if (ln2.length > 0){
					rep.addText(x+5, y + 0.5 + displace, ln1,false,true);
					rep.addText(x+5, y + 2.6 + displace, ln2,false,true);
				}else{
					rep.addText(x+5, y+2 + displace, ln1,false,true);
				}
				y += 6;
			}
		}
	}
	function parteI(){
		rep.addImage(4,1 + displace, 340, 90, imgEduca.logo_ministerio, true);
		rep.setFontProperties(black,13,'helvetica','bold');
		rep.addText(112, 9 + displace, 'CERTIFICACIÓN DE CALIFICACIONES',false, true);
		rep.addLine(112,10.3 + displace,195,10.3 + displace,black,0.5,false, true);
		rep.setFontProperties(black,10,'helvetica','bold');
		rep.addText(90, 14.5 + displace, 'I. Plan de Estudio: '+data.plan,false,true);
		rep.addText(180, 14.5 + displace, 'Código: '+data.cod,false,true);
		rep.setFontProperties(black,10,'helvetica','bold');//linea -
		rep.setFontProperties(black,9.5,'helvetica','bold');
		rep.addText(90, 19.5 + displace, 'Lugar y Fecha de Expedición: '+' '+data.lugar_fecha,false,true);
		rep.addLine(133,20.3 + displace,206,20.3 + displace,black,0.5,false, true);														//linea plan de estudio
	}

	function parteII(){
		rep.setFontProperties(black,9.5,'helvetica','bold');
		rep.addText(4, 26.5 + displace, 'II. Datos del Plantel o Zona Educativa que Emite la Certificación:',false,true);
		rep.addText(4, 30.5 + displace, 'Código: ',false,true);
		rep.addLine(25,31 + displace,47.5,31 + displace,black,0.5,false,true);																//linea cod. plantel
		rep.addText(50, 30.5 + displace, 'Nombre: ',false,true);
		rep.addLine(65,31 + displace,206,31 + displace,black,0.5,false,true);															//linea nombre
		rep.addText(4, 35 + displace, 'Dirección: ',false,true);
		rep.addLine(25,35.3 + displace,140,35.3 + displace,black,0.5,false,true);													//linea direccion
		rep.addText(140, 35 + displace, 'Teléfono:',false,true);
		rep.addLine(155,35.3 + displace,206,35.3 + displace,black,0.5,false,true);														//linea telf
		rep.addText(4, 39 + displace, 'Municipio:',false,true);
		rep.addLine(25,39.5 + displace,69.5,39.5 + displace,black,0.5,false,true);														//linea municipio
		rep.addText(73, 39 + displace, 'Entidad Federal:',false,true);
		rep.addLine(98,39.5 + displace,130,39.5 + displace,black,0.5,false,true);														//linea Ent. Federal
		rep.addText(140, 39 + displace, 'Zona Educativa:',false,true);
    rep.addLine(164.5,39.5 + displace,206,39.5 + displace,black,0.5,false,true);												//linea Zona Educativa
    
    //****************************** Data *****************************************
		rep.addText(27, 30.5 + displace,  data.codigo,false,true);
		rep.addText(66, 30.5 + displace,  data.nombreP,false,true);
		rep.addText(27, 35 + displace,    data.dir,false,true);
		rep.addText(155, 35 + displace,   data.tel,false,true);
		rep.addText(27, 39 + displace,    data.munic,false,true);
		rep.addText(99, 39 + displace,    data.entFed,false,true);
		rep.addText(165, 39 + displace,   data.zEdu,false,true);   
	}

	function parteIII(){
		
		rep.setFontProperties(black,9.5,'helvetica','bold');
		rep.addText(4, 43 + displace, 'III. Datos de Identificación del Estudiante:',false,true);
		rep.addText(4, 46.5 + displace, 'Cédula de Identidad: ',false,true);
		rep.addLine(35,47 + displace,69,47 + displace,black,0.5,false,true);																    //linea de cedula
		rep.addText(70, 46.5 + displace, 'Fecha de Nacimiento: ',false,true);
		rep.addLine(102,47 + displace,206,47 + displace,black,0.5,false,true);															    //linea fecha nac.
		rep.addText(4, 51 + displace, 'Apellidos: ',false,true);
	  	rep.addLine(19,51.5 + displace,105,51.5 + displace,black,0.5,false,true);													      //linea apellidos
	  	rep.addText(106, 51 + displace,'Nombres: ',false,true);
	  	rep.addLine(120,51.5 + displace,206,51.5 + displace,black,0.5,false,true);														//linea nombres
	  	rep.addText(4, 55.5 + displace,'Lugar de Nacimiento: ',false,true);
		rep.addLine(36.5,56 + displace,75,56 + displace,black,0.5,false,true);															    //linea lugar nac.
		rep.addText(76, 55.5 + displace,'País: ',false,true);
		rep.addLine(84,56 + displace,105,56 + displace,black,0.5,false,true);															      //linea Pais
    	rep.addText(106, 55.5 + displace,'Estado: ',false,true);
		rep.addLine(118,56 + displace,150,56 + displace,black,0.5,false,true);															      //linea Estado
    	rep.addText(151, 55.5 + displace,'Municipio: ',false,true);
		rep.addLine(167.5,56 + displace,206,56 + displace,black,0.5,false,true);															      //linea Municipio
    
    //****************************** Data *****************************************
		rep.addText(37,  46.5 + displace, data.cedIde,false,true);
		rep.addText(104, 46.5 + displace, data.fecNac,false,true);
		rep.addText(20,  51 + displace,   data.ape,   false,true);
	  	rep.addText(122, 51 + displace,   data.nom,   false,true);
	  	rep.addText(38,  55.5 + displace, data.lugNac,false,true);
		rep.addText(84,  55.5 + displace, data.pais,  false,true);
		rep.addText(119, 55.5 + displace, data.est,   false,true);
		rep.addText(168, 55.5 + displace, data.muni,  false,true);
	}

	function parteIV(){
		rep.setFontProperties(black,9.5,'helvetica','bold');
		rep.addText(4, 59.5 + displace, 'IV. Planteles donde Cursó Estudios:',false,true);
		rep.addAbsTable(4, 62 + displace, [5.5,45,42,8.5], 3, 5.5, false, true);
		rep.setFontProperties(black,8.5,'helvetica','bold');
		rep.addText(5.5, 66.5 + displace, 'N°',false,true);
		rep.addText(5.5, 71.5 + displace, '1',false,true);
		rep.addText(5.5, 77.5 + displace, '2',false,true);
		rep.addText(15, 66.5 + displace, 'Nombre del Plantel',false,true);
		rep.addText(70, 66.5 + displace, 'Localidad',false,true);
    	rep.addText(98, 66.5 + displace, 'E.F.',false,true);
    
    //*************************** Table 2 ***************************
    	rep.addAbsTable(105.5, 56.5 + displace, [5.5,45,42,8.5], 4, 5.5, false, true);
		rep.addText(107.3, 60.5 + displace, 'N°',false,true);
		rep.addText(107.3, 66.5 + displace, '3',false,true);
		rep.addText(107.3, 72 + displace, '4',false,true);
		rep.addText(107.3, 77 + displace, '5',false,true);
		rep.addText(115, 60.5 + displace, 'Nombre del Plantel',false,true);
		rep.addText(170, 60.5 + displace, 'Localidad',false,true);
		rep.addText(200, 60.5 + displace, 'E.F.',false,true);

		//****************************** Data *****************************************
		rep.setFontProperties(black,6.4,'helvetica','bold');
		rep.addText(10,72 + displace,data.nomP1.substr(0,39),false,true);
		rep.addText(10, 77.5 + displace,data.nomP2,false,true);
		rep.addText(55,72 + displace,data.loc1,false,true);
		rep.addText(55, 78 + displace,data.loc2,false,true);
		rep.addText(99,72 + displace,data.ef1,false,true);
		rep.addText(99, 78 + displace,data.ef2,false,true);
		rep.addText(111.5,66.5 + displace,data.nomP3,false,true);
	  	rep.addText(111.5,72.5 + displace,data.nomP4,false,true);
	  	rep.addText(111.5,78 + displace,data.nomP5,false,true);
		rep.addText(156.5,66.5 + displace,data.loc3,false,true);
		rep.addText(156.5,72.5 + displace,data.loc4,false,true);
		rep.addText(156.5,78 + displace,data.loc5,false,true);
		rep.addText(201.5,66.5 + displace,data.ef3,false,true);
		rep.addText(201.5,72.5 + displace,data.ef4,false,true);
		rep.addText(201.5,78.5 + displace,data.ef5,false,true);
		rep.setFontProperties(black,8.5,'helvetica','bold');
	}

	function tablaMaterias(){
	//1 Año
	 rep.addAbsTable(4, 84 + displace, [40.5], 1, 8,        false, true); 							// areas de formaciÓn
	 rep.addAbsTable(44.5, 84 + displace, [31.5], 1, 4,     false, true);    					  // calificacion
	 rep.addAbsTable(44.5, 88 + displace, [6, 25.5], 1, 4,  false, true); 		        	// asignatura/n°/letras
	 rep.addAbsTable(81, 84 + displace, [16], 1, 8,         false, true); 							// fecha
	 rep.addAbsTable(76, 84 + displace, [5], 1, 8,          false, true);  							// T.E
	 rep.addAbsTable(81, 88 + displace, [8,8], 1, 4,        false, true); 					  	// Mes ano
	 rep.addAbsTable(97, 84 + displace, [8], 1, 8,          false, true); 							// plantel

	//2 Año
	 rep.addAbsTable(4, 138 + displace, [40.5], 1, 8,       false, true); 							// areas de formaciÓn
    rep.addAbsTable(44.5, 138 + displace, [31.5], 1, 4,    false, true);    				  	// calificacion
    rep.addAbsTable(44.5, 142 + displace, [6, 25.5], 1, 4, false, true); 			        // asignatura/n°/letras
    rep.addAbsTable(81, 138 + displace, [16], 1, 8,        false, true); 							// fecha
    rep.addAbsTable(76, 138 + displace, [5], 1, 8,         false, true);  							// T.E
    rep.addAbsTable(81, 142 + displace, [8,8], 1, 4,       false, true); 						  // Mes ano
    rep.addAbsTable(97, 138 + displace, [8], 1, 8,         false, true);
 
   //3 Año
    rep.addAbsTable(4,192.5 + displace, [40.5], 1, 8,      false, true); 					  	// areas de formaciÓn
    rep.addAbsTable(44.5,192.5 + displace, [31.5], 1, 4,   false, true);    				    // calificacion
    rep.addAbsTable(44.5,196.5 + displace,[6, 25.5], 1, 4, false, true); 					    //asignatura/n°/letras
    rep.addAbsTable(76,192.5 + displace,[5], 1, 8,         false, true); 							//T.E
    rep.addAbsTable(81,192.5 + displace, [16], 1, 4,       false, true); 							//fecha
    rep.addAbsTable(97,192.5 + displace,[8], 1, 8,         false, true); 							//plantel
    rep.addAbsTable(81,196.5 + displace,[8,8], 1, 4,       false, true); 							//Mes ano

 

	//tablas base 1, 2 y 3 AÑO
	 rep.addAbsTable(4, 92 + displace, [40.5, 6, 25.5, 5, 8, 8, 8], 7, 6, false, true);
    rep.addAbsTable(4, 146 + displace, [40.5, 6, 25.5, 5, 8, 8, 8], 7, 6, false, true);
    rep.addAbsTable(4,200.5 + displace, [40.5, 6, 25.5, 5, 8, 8, 8], 8, 6, false, true);
	}

	function parteV(){
    rep.addText(4, 81 + displace, 'V. Plan de Estudio:',false,true);
    //Titulos de las tablas
	 //1 año
		rep.setFontProperties(black,7.5,'helvetica','bold');
		rep.addText(18,88 + displace,' ÁREAS DE \nFORMACIÓN:',false,true);
		rep.addText(50, 87 + displace, 'CALIFICACIÓN',false,true);
		rep.addText(76.3, 89 + displace, 'T-E',false,true);
		rep.addText(85, 87 + displace, 'FECHA',false,true);
		rep.setFontProperties(black,5,'helvetica','bold');
		rep.addRotateText(102, 91.5 + displace, 'PLANTEL',90);
		rep.setFontProperties(black,7.5,'helvetica','bold');
		rep.addText(82.5, 91 + displace , 'Mes',false,true);
		rep.addText(90.5, 91 + displace , 'Año',false,true);
		rep.addText(46, 91 + displace , 'N°',false,true);
		rep.addText(58.5, 91 + displace , 'LETRAS',false,true);

	//2 año
		rep.setFontProperties(black,7.5,'helvetica','bold');
		rep.addText(18,142 + displace,' ÁREAS DE \nFORMACIÓN:',false,true);
		rep.addText(50.5, 141 + displace, 'CALIFICACIÓN',false,true);
		rep.addText(76.3, 143 + displace, 'T-E',false,true);
		rep.addText(85, 141 + displace, 'FECHA',false,true);
		rep.setFontProperties(black,5,'helvetica','bold');
    	rep.addRotateText(102, 145.5 + displace, 'PLANTEL',90);
		rep.setFontProperties(black,7.5,'helvetica','bold');
    	rep.addText(82.5,145 + displace, 'Mes',false,true);
    	rep.addText(90.5,145 + displace, 'Año',false,true);
    	rep.addText(46,145 + displace, 'N°',false,true);
    	rep.addText(58.5,145 + displace, 'LETRAS',false,true);


	//TITULOS DE AÑOS
		rep.setFontProperties(black,9.5,'helvetica','bold');
		rep.addText(50,83 + displace,'PRIMER AÑO',false,true);
		rep.addText(50,137 + displace,'SEGUNDO AÑO',false,true);
		rep.addText(50,191.5 + displace,'TERCER AÑO',false,true);
    	rep.addText(40,252 + displace,'ÁREAS DE FORMACIÓN',false,true);
       	
	 	rep.setFontProperties(black,7,'helvetica','bold');

  //****************************** Data *****************************************	 
		//primer Año
	  if(data.materias1.length > 0){
		  	writeMat(0,94,data.materias1, 7);
		  	var y = 95.5;
		  	var flgUnaVez = true;
		  	for(var i = 0; i < data.materias1.length; i++){
		  		if(i < 7){
			  		rep.addText(46, y + displace, data.calificacion1[i]+'',false,true);
			 		rep.addText(51.5, y + displace, data.calLet1[i]+'',false,true);
			 		rep.addText(77.5, y + displace, data.TE1[i]+'',false,true);
			 		rep.addText(83.5, y + displace, data.mes1[i]+'',false,true);
			 		rep.addText(90.5, y + displace, data.ano1[i]+'',false,true);
			 		rep.addText(100.5, y + displace, data.pl1[i]+'',false,true);
			 		y = y + 6;
			 		if (flgUnaVez) {
						flgUnaVez = false;
						rep.addText(100.5, 262 + displace, data.pl1[i]+'',false,true);
						rep.addText(100.5, 283 + displace, data.pl1[i]+'',false,true);
			 		}
		 		}
	  		}
	  }
	  //segundo Año
	  if(data.materias2.length > 0){
		 	writeMat(0, 148, data.materias2, 7);
		 	var y = 150;
		  	var flgUnaVez = true;
		 	for(var i = 0; i < data.materias2.length; i++){
		 		if(i < 7){
		      	rep.addText(46, y + displace, data.calificacion2[i]+'',false,true);
		        	rep.addText(51.5, y + displace, data.calLet2[i]+'',false,true);
		        	rep.addText(77.5, y + displace, data.TE2[i]+'',false,true);
		        	rep.addText(83.5, y + displace, data.mes2[i]+'',false,true);
		        	rep.addText(90.5, y + displace, data.ano2[i]+'',false,true);
		        	rep.addText(100.5, y + displace, data.pl2[i]+'',false,true);
			 	  	y = y + 6;
			 		if (flgUnaVez) {
						flgUnaVez = false;
						rep.addText(100.5, 267 + displace, data.pl2[i]+'',false,true);
						rep.addText(100.5, 288 + displace, data.pl2[i]+'',false,true);
			 		}
			 	}
		 	}
	  }
	 
	  //Tercer Año
		if(data.materias3.length > 0){
	  		writeMat(0,202,data.materias3, 8);
	  		var y=204;
		  	var flgUnaVez = true;
			for(var i = 0; i < data.materias3.length; i++){
		      if(i < 8){
			      rep.addText(46, y + displace, data.calificacion3[i]+'',false,true);
			      rep.addText(51.5, y + displace, data.calLet3[i]+'',false,true);
			      rep.addText(77.5, y + displace, data.TE3[i]+'',false,true);
			      rep.addText(83.5, y + displace, data.mes3[i]+'',false,true);
			      rep.addText(90.5, y + displace, data.ano3[i]+'',false,true);
			      rep.addText(100.5, y + displace, data.pl3[i]+'',false,true);
				  	y = y + 6;
			 		if (flgUnaVez) {
						flgUnaVez = false;
						rep.addText(100.5, 272 + displace, data.pl3[i]+'',false,true);
						rep.addText(100.5, 293 + displace, data.pl3[i]+'',false,true);
			 		}
			  	}
	  		}
		}
	  
	  tablaMaterias(86.5);
	  tablaMaterias(145);

	 //HEADER 3Año
	  rep.setFontProperties(black,7.5,'helvetica','bold');
	  rep.addText(18.5,196 + displace,' ÁREAS DE \nFORMACIÓN:',false,true);
	  rep.addText(50,195.5 + displace, 'CALIFICACIÓN',false,true);
	  rep.addText(76.3,198 + displace, 'T-E',false,true);
	  rep.addText(85,195.5 + displace, 'FECHA',false,true);
	  rep.setFontProperties(black,5,'helvetica','bold');
	  rep.addRotateText(102,200 + displace, 'PLANTEL',90);
	  rep.setFontProperties(black,7.5,'helvetica','bold');
	  rep.addText(82.5,199.5 + displace, 'Mes',false,true);
	  rep.addText(90.5,199.5 + displace, 'Año',false,true);
	  rep.addText(46,199.5 + displace, 'N°',false,true);
	  rep.addText(58.5,199.5 + displace, 'LETRAS',false,true);

	 // areas de formacion TABLAS
	  rep.addAbsTable(4,253 + displace,    [30,6,57], 1, 6, false, true);
	  rep.addAbsTable(4,259 + displace,    [30], 1, 15, false, true);
	  rep.addAbsTable(34,259 + displace,   [6,57,8], 3, 5, false, true);
	  rep.addAbsTable(97,248.5 + displace, [8], 1, 10.5, false, true);

	 //2da tabla
	  rep.addAbsTable(4, 274 + displace,   [30,6,30.5,26.5,8], 1, 6,    false, true);
	  rep.addAbsTable(4,280 + displace,    [30],               1, 15,   false, true);
	  rep.addAbsTable(34,280 + displace,   [6,30.5,26.5,8],    3, 5,    false, true);
	  
		
	 // texto
	  rep.setFontProperties(black,7.5,'helvetica','bold');

	 //HEAD

	 //TEXTO AREA DE FORMACION
	  rep.addText(11, 255.5 + displace,'  ÁREAS DE\nFORMACIÓN',false,true);
	  rep.addText(34.5, 257 + displace, 'Año',false,true);
	  rep.addText(62, 257 + displace, 'LITERAL',false,true);
	  rep.setFontProperties(black,6,'helvetica','bold');		
	  rep.addRotateText(102, 258 + displace, 'PLANTEL',90);
	  rep.setFontProperties(black,9,'helvetica','bold');
	  rep.addText(6, 265.5 + displace,'ORIENTACIÓN Y \n  CONVIVENCIA',false,true);
	  rep.setFontProperties(black,7.8,'helvetica','bold');
		
		//****************************** Data *****************************************
	  var y = 262.5;
	  for(var i = 1; i <= 3; i++ ){
	  		rep.addText(36, y + displace,i + '°',false,true);
	  		y = y + 5;
	  }
		//literales
		y = 262;
		for(var i = 0; i < data.lit1.length; i++){
			if (data.lit1[i].length > 2)
				rep.addText(60, y + displace, data.lit1[i].toUpperCase(),false,true);
			else
				rep.addText(65, y + displace, data.lit1[i].toUpperCase(),false,true);
			y = y + 5;
		}
		//literal tabla 2
		y = 284;
		for(var i = 0; i < data.lit2.length; i++){
			if (data.lit2[i].length > 2)
				rep.addText(77, y + displace, data.lit2[i].toUpperCase(),false,true);
			else
				rep.addText(82, y + displace, data.lit2[i].toUpperCase(),false,true);
			y = y + 5;
		}
	
	  //grupos
	  y =284;
	  
	  
	  for(var i = 0; i < data.gru.length; i++){
		  var ln1 = '';
		  var ln2 = '';
		  var arrx = data.gru[i].split(' ');
		  var flag=true;
		  for(var j=0; j<arrx.length; j++){
			  if(ln1.length + arrx[j].length < 17 && flag)  
				  ln1+=arrx[j]+' '
			  else{
				  ln2+=arrx[j]+' '
				  flag=false;
			  }
		  }
		  if(ln2.length===0)
			  rep.addText(40.5, y + displace, data.gru[i].toUpperCase(),false,true);
		  else{
			  rep.addText(40.5, y - 1.8 + displace, ln1.toUpperCase(),false,true);
			  rep.addText(40.5, y + 0.8 + displace, ln2.toUpperCase(),false,true);
		  }
		  y = y + 5;
     }

	  //TEXTO TABLA 2
	  rep.addText(11.5, 276.5 + displace,'  ÁREAS DE\nFORMACIÓN',false,true);
	  rep.addText(6.5,283 + displace,'PARTICIPACIÓN EN \n       GRUPOS DE\n        CREACIÓN \n    RECREACIÓN Y\n      PRODUCCIÓN',false,true);
	  rep.addText(50, 278 + displace,'GRUPOS',false,true);
	  rep.addText(78, 278 + displace,'LITERAL',false,true);
	  rep.addText(34.5, 278 + displace,'Año',false,true);
		
	  var y = 283.5;
     for(var i = 1; i <= 3; i++ ){
       rep.addText(36, y + displace,i + '°',false,true);
       y = y + 5;
     }
	}

	function parteVI(){
	 	rep.setFontProperties(black,9.5,'helvetica','bold');
		rep.addText(106,83 + displace,'VI.Plantel',false,true);		
		rep.addAbsTable(105.5,84 + displace,  [50.5],1,4,  false,true);
		rep.addAbsTable(105.5,88 + displace,  [50.5],1,4, false,true);
		rep.addAbsTable(105.5,92 + displace,  [50.5],1,18,  false,true);
  		rep.addText(123,87 + displace,'Director(a)',false,true);
		rep.addText(115,91 + displace,'Apellidos y Nombres:',false,true);
		rep.addAbsTable(105.5,110 + displace,  [50.5],1,6,  false,true);		
		rep.addText(116,114 + displace,'Cédula de Identidad:',false,true);
		rep.addAbsTable(105.5,116 + displace,  [50.5],1,6,  false,true);		
		rep.addAbsTable(105.5,122 + displace,  [50.5],1,36,  false,true);		
		rep.addAbsTable(105.5,158 + displace,  [50.5],1,6,  false,true);				
		rep.addText(127,162 + displace,'Firma:',false,true);
		rep.addAbsTable(105.5,164 + displace,  [50.5],1,24,  false,true);		
      rep.addText(112,175 + displace,'Para efectos de su Validez\n             Nacional',false,true);		
		rep.addAbsTable(156,84 + displace,  [50.5],1,104,  false,true);
		rep.addText(165,135 + displace,'SELLO DEL PLANTEL',false,true);
		
		//****************************** Data *****************************************
		rep.setFontProperties(black,8.5,'helvetica','normal');
		rep.addText(106,100.5 + displace,data.nomJef,false,true);
		rep.addText(106,120 + displace,data.cedJef,false,true);

	}

	function parteVII(){
		rep.setFontProperties(black,9.5,'helvetica','bold');
		rep.addText(106,195.5 + displace,'VII.ZONA EDUCATIVA',false,true);		
		rep.addAbsTable(105.5,192.5 + displace,  [50.5],1,4,  false,true);
		rep.addAbsTable(105.5,196.5 + displace,  [50.5],1,4, false,true);
		rep.addAbsTable(105.5,200.5 + displace,  [50.5],1,18,  false,true);
  		rep.addText(115,199.5 + displace,'Apellidos y Nombres:',false,true);
		rep.addAbsTable(105.5,218.5 + displace,  [50.5],1,6,  false,true);		
		rep.addText(116,222.5 + displace,'Cédula de Identidad:',false,true);
		rep.addAbsTable(105.5,224.5 + displace,  [50.5],1,6,  false,true);		
		rep.addAbsTable(105.5,230.5 + displace,  [50.5],1,36,  false,true);		
		rep.addAbsTable(105.5,266.5 + displace,  [50.5],1,6,  false,true);				
		rep.addText(127,270.5 + displace,'Firma:',false,true);
		rep.addAbsTable(105.5,272.5 + displace,  [50.5],1,22.5,  false,true);		
    	rep.addText(111,283 + displace,'Para efectos de su Validez\n             Internacional',false,true);		
		rep.addAbsTable(156,192.5 + displace,  [50.5],1,102.5,  false,true);
    	rep.addText(166,244 + displace,'SELLO DE LA ZONA',false,true);
    	rep.addText(172,247 + displace,'EDUCATIVA',false,true);
	}
	function parteVIII(){
		rep.setFontProperties(black,9.5,'helvetica','bold');
	   rep.addText(5,298 + displace,'VIII. Observaciones:',false,true);
		rep.addAbsTable(4,299 + displace,[202.5],1,4,false,true);
		rep.addAbsTable(4,295 + displace,[202.5],1,4,false,true);
		
	//****************************** Data *****************************************
		var ln1 = '';
		var ln2 = '';
		var mp = 128;
		var f = false;
		var arr = data.obs.split(' ');
		
		for(var i=0; i<arr.length; i++){
			if(ln1.length + arr[i].length < mp && !f){
				ln1+=arr[i]+' ';
			}
			else{
				ln2+=arr[i]+' ';
				f=true;
			}
		} 
		rep.setFontProperties(black,9,'helvetica','normal');
		rep.addText(35.5, 298 + displace, ln1, false, true);
		rep.addText(5, 302 + displace, ln2, false, true);
		
	}
	
	this.setData = function(dat){
		for(var attrname in dat){data[attrname] = dat[attrname];}
	};

	this.init = function(){
		rep.setPDFFormat('custom','mm', [343, 210]);
		rep.setHeadImage("",false);
		rep.setNoRepeatHead();
		rep.setPositionIcon(770,0);
 		parteI();
		parteII();
		parteIII();
   	parteIV();
		parteV();
		parteVI();
		parteVII();
		parteVIII();	
		rep.render();
		setTimeout(rep.printPDF,1000);
	};
}
