function Certificacion(){
	var rep = new Report('portrait',798,1500);
	var black = rep.getRGBAObj(0,0,0,0);
	var data = {};

	function parteI(){
		rep.addImage(4,1,340,90,imgEduca.logo_ministerio,true);
		rep.setFontProperties(black,13,'helvetica','bold');
		rep.addText(112, 9, 'CERTIFICACIÓN DE CALIFICACIONES EMG',false, true);
		rep.addLine(112,10.3,206,10.3,black,0.5,false, true);	
		rep.setFontProperties(black,10,'helvetica','bold');
		rep.addText(90, 14.5, 'I. Plan de Estudio: '+data.plan + ' Código: '+data.cod,false,true);
		rep.setFontProperties(black,10,'helvetica','bold');
		rep.addLine(120,15.3,206,15.3,black,0.8,false,true);														//linea -
	  	
		rep.setFontProperties(black,9.5,'helvetica','bold');
		rep.addText(90, 19.5, 'Lugar y Fecha de Expedición: '+' '+data.lugar_fecha,false,true);
		rep.addLine(132,20.3,206,20.3,black,0.5,false, true);														//linea plan de estudio
	};
	
	function parteII(){
	  	 rep.setFontProperties(black,9.5,'helvetica','bold');
	  	 rep.addText(4, 26.5, 'II. Datos del Plantel o Zona Educativa que Emite la Certificación:',false,true);
	    rep.addText(4, 30.5, 'Código: '+' '+data.codigo,false,true);
	    rep.addLine(17,31,42,31,black,0.5,false,true);																//linea cod. plantel
	    rep.addText(43.5, 30.5, 'Nombre: '+' '+data.nombreP,false,true);
	    rep.addLine(57,31,206,31,black,0.5,false,true);															//linea nombre
	    rep.addText(4, 35, 'Dirección: '+' '+data.dir,false,true);
	    rep.addLine(19.5,35.3,140,35.3,black,0.5,false,true);													//linea direccion
	    rep.addText(140, 35, 'Teléfono:'+' '+data.tel,false,true);
	    rep.addLine(155,35.3,206,35.3,black,0.5,false,true);														//linea telf
	    rep.addText(4, 39, 'Municipio:'+' '+data.munic,false,true);
	    rep.addLine(20,39.5,90,39.5,black,0.5,false,true);														//linea municipio
	    rep.addText(90.5, 39, 'Entidad Federal:'+' '+data.entFed,false,true);
	    rep.addLine(115,39.5,140,39.5,black,0.5,false,true);														//linea Ent. Federal
	    rep.addText(140, 39, 'Zona Educativa:'+' '+data.zEdu,false,true);
	    rep.addLine(164.5,39.5,206,39.5,black,0.5,false,true);													//linea Zona Educativa
	};
	
	function parteIII(){
	  	rep.setFontProperties(black,9.5,'helvetica','bold');
	  	rep.addText(4, 43, 'III. Datos de Identificación del Estudiante:',false,true);
	  	rep.addText(4, 46.5, 'Cédula de Identidad: '+' '+data.cedIde,false,true);    
	  	rep.addLine(35,47,120,47,black,0.5,false,true);																//linea de cedula

	    rep.addText(121, 46.5, 'Fecha de Nacimiento: '+' '+data.fecNac,false,true);
	    rep.addLine(154,47,206,47,black,0.5,false,true);															//linea fecha nac.

	    rep.addText(4, 51, 'Apellidos: '+' '+data.ape,false,true);
		 rep.addLine(19.5,51.5,105,51.5,black,0.5,false,true);//linea apellidos

		 rep.addText(106, 51, 'Nombres: '+' '+data.nom,false,true);
		 rep.addLine(120,51.5,206,51.5,black,0.5,false,true);//linea nombres

		 rep.addText(4, 55.5, 'Lugar de Nacimiento: ',false,true);
		 //rep.addText(4, 55.5, 'Lugar de Nacimiento: '+' '+data.lugNac,false,true);
		 //rep.addLine(36.5,56,75,56,black,0.5,false,true);//linea lugar nac.

		 rep.addText(38, 55.5, 'País: '+' '+data.pais,false,true);

		 rep.addText(106, 55.5, 'Estado: '+' '+data.est,false,true);

		 rep.addText(150, 55.5, 'Municipio: '+' '+data.muni,false,true);
	};
	
	function parteIV(){
	
	  	rep.setFontProperties(black,9.5,'helvetica','bold');
	  	rep.addText(4, 59.5, 'IV. Planteles donde Cursó Estudios:',false,true);
	 	rep.addAbsTable(105.5, 56.5, [5.5,45,45,5.5], 4, 5.5, false, true);
	  	rep.addAbsTable(4, 60.5, [5.5,45,45,5.5], 3, 6, false, true);
	  	rep.setFontProperties(black,8.5,'helvetica','bold');
	  	rep.addText(5.5, 64.5, 'N°',false,true); 
	  	rep.addText(5.5, 70.5, '1',false,true);
	  	rep.addText(5.5, 76.5, '2',false,true);	  	
	  	rep.addText(15, 64.5, 'Nombre del Plantel',false,true);
	  	rep.addText(70, 64.5, 'Localidad',false,true);
	  	rep.addText(99.8, 64.5, 'E.F.',false,true);
	  	rep.addText(107.3, 60.5, 'N°',false,true); 
	  	rep.addText(107.3, 65.5, '3',false,true);
	  	rep.addText(107.3, 71, '4',false,true);
	  	rep.addText(107.3, 77, '5',false,true);
	  	rep.addText(115, 60.5, 'Nombre del Plantel',false,true);
	  	rep.addText(170, 60.5, 'Localidad',false,true);
	  	rep.addText(201.5, 60.5, 'E.F.',false,true);
	  	
	  	
	  	rep.setFontProperties(black,7,'helvetica','bold');
	  	rep.addText(10,71.5,data.nomP1.substr(0,39),false,true);
	  	rep.addText(10, 77.5,data.nomP2,false,true);
	  	rep.addText(55,71.5,data.loc1,false,true);
	  	rep.addText(55, 77.5,data.loc2,false,true);
	  	rep.addText(99.7,71.5,data.ef1,false,true);
	  	rep.addText(99.7, 77.5,data.ef2,false,true);
	  	rep.addText(111.5,66.5,data.nomP3,false,true);
	 	rep.addText(111.5,72.5,data.nomP4,false,true);
	 	rep.addText(111.5,78.5,data.nomP5,false,true);
	  	rep.addText(156.5,66.5,data.loc3,false,true);
	  	rep.addText(156.5,72.5,data.loc4,false,true);
	  	rep.addText(156.5,78.5,data.loc5,false,true);
	  	rep.addText(201.5,66.5,data.ef3,false,true);
	  	rep.addText(201.5,72.5,data.ef4,false,true);
	  	rep.addText(201.5,78.5,data.ef5,false,true);
	  	rep.setFontProperties(black,8.5,'helvetica','bold');
	  	
	};
	
	function tablaMaterias(){		
	//1 Año		
		rep.addAbsTable(4, 84, [40.5], 1, 8, false, true); 							// areas de formaciÓn
		rep.addAbsTable(44.5, 84, [31.5], 1, 4, false, true);    					// calificacion
	 	rep.addAbsTable(44.5, 88, [6, 25.5], 1, 4, false, true); 			// asignatura/n°/letras 
		rep.addAbsTable(81, 84, [16], 1, 8, false, true); 							// fecha
	  	rep.addAbsTable(76, 84, [5], 1, 8, false, true);  							// T.E
	  	rep.addAbsTable(81, 88, [8,8], 1, 4, false, true); 						// Mes ano
	  	rep.addAbsTable(97, 84, [8], 1, 8, false, true); 							// plantel
	
	 //2 Año
	  	rep.addAbsTable(105.5, 84, [40.5], 1, 8, false, true); 					// areas de formaciÓn
		rep.addAbsTable(146, 84, [31.5], 1, 4, false, true);    					// calificacion
	  	rep.addAbsTable(146, 88, [6, 25.5], 1, 4, false, true);  			// asignatura/n°/letras 
		rep.addAbsTable(182.5, 84, [16], 1, 4, false, true); 						// fecha
	  	rep.addAbsTable(177.5, 84, [5], 1, 8, false, true); 						// T.E
	  	rep.addAbsTable(182.5, 88, [8,8], 1, 4, false, true); 					// Mes ano
	  	rep.addAbsTable(198.5, 84, [8], 1, 8, false, true); 						// plantel
	
	//3 Año
		rep.addAbsTable(4, 138, [40.5], 1, 8, false, true); 							// areas de formaciÓn
      rep.addAbsTable(44.5, 138, [31.5], 1, 4, false, true);    					// calificacion
      rep.addAbsTable(44.5, 142, [6, 25.5], 1, 4, false, true); 			// asignatura/n°/letras 
      rep.addAbsTable(81, 138, [16], 1, 8, false, true); 							// fecha
      rep.addAbsTable(76, 138, [5], 1, 8, false, true);  							// T.E
      rep.addAbsTable(81, 142, [8,8], 1, 4, false, true); 						// Mes ano
      rep.addAbsTable(97, 138, [8], 1, 8, false, true);

	//4 Año
      rep.addAbsTable(105.5, 138, [40.5], 1, 8, false, true); 							// areas de formaciÓn
      rep.addAbsTable(146, 138, [31.5], 1, 4, false, true);    					// calificacion
      rep.addAbsTable(146, 142, [6, 25.5], 1, 4, false, true); 			// asignatura/n°/letras 
      rep.addAbsTable(182.5, 138, [16], 1, 8, false, true); 							// fecha
      rep.addAbsTable(177.5, 138, [5], 1, 8, false, true);  							// T.E
      rep.addAbsTable(182.5, 142, [8,8], 1, 4, false, true); 						// Mes ano
      rep.addAbsTable(198.5, 138, [8], 1, 8, false, true);
               
	 //tablas base 1 y 2 ano
	  	rep.addAbsTable(4, 92, [40.5, 6, 25.5, 5, 8, 8, 8], 7, 6, false, true);
	  	rep.addAbsTable(105.5, 92, [40.5, 6, 25.5, 5, 8, 8, 8], 7, 6, false, true);
	
	 //tablas base 3 y 4 ano
	  	rep.addAbsTable(4, 146, [40.5, 6, 25.5, 5, 8, 8, 8], 9, 6, false, true);
	  	rep.addAbsTable(105.5, 146, [40.5, 6, 25.5, 5, 8, 8, 8], 9, 6, false, true);
	
	 //Titulos de las tablas
	 //1 año 	
	  	rep.setFontProperties(black,7.5,'helvetica','bold');
	  	rep.addText(18,88,' ÁREAS DE \nFORMACIÓN:',false,true);
	  	rep.addText(50, 87, 'CALIFICACIÓN',false,true);
	  	rep.addText(76.3, 89, 'T-E',false,true);
	  	rep.addText(85, 87, 'FECHA',false,true);
	  	rep.setFontProperties(black,5,'helvetica','bold');
	  	rep.addRotateText(102, 91.5, 'PLANTEL',90);
	  	rep.setFontProperties(black,7.5,'helvetica','bold');
	  	rep.addText(82.5, 91 , 'Mes',false,true);
	  	rep.addText(90.5, 91 , 'Año',false,true);
	  	rep.addText(46, 91 , 'N°',false,true);
	  	rep.addText(60.5, 91 , 'LETRAS',false,true);
	
	 //2 año
	  	rep.setFontProperties(black,7.5,'helvetica','bold');
	  	rep.addText(120,88,' ÁREAS DE \nFORMACIÓN:',false,true);
	  	rep.addText(151.5, 87, 'CALIFICACIÓN',false,true);
	  	rep.addText(177.8, 89, 'T-E',false,true);
	  	rep.addText(186.5, 87, 'FECHA',false,true);
		rep.setFontProperties(black,5,'helvetica','bold');
	  	rep.addRotateText(203.5, 91.5, 'PLANTEL',90);
		rep.setFontProperties(black,7.5,'helvetica','bold');
	  	rep.addText(184, 91 , 'Mes',false,true);
	  	rep.addText(192, 91 , 'Año',false,true);
	  	rep.addText(147.5, 91 , 'N°',false,true);
	  	rep.addText(160.5, 91 , 'LETRAS',false,true);

	//3 año
      rep.setFontProperties(black,7.5,'helvetica','bold');
      rep.addText(18,142,' ÁREAS DE \nFORMACIÓN:',false,true);
      rep.addText(50.5, 141, 'CALIFICACIÓN',false,true);
      rep.addText(76.3, 143, 'T-E',false,true);
      rep.addText(85, 141, 'FECHA',false,true);
		rep.setFontProperties(black,5,'helvetica','bold');
      rep.addRotateText(102, 145.5, 'PLANTEL',90);
		rep.setFontProperties(black,7.5,'helvetica','bold');
      rep.addText(82.5,145, 'Mes',false,true);
      rep.addText(90.5,145, 'Año',false,true);
      rep.addText(46,145, 'N°',false,true);
      rep.addText(60.5,145, 'LETRAS',false,true);
   
   //4 año
      rep.setFontProperties(black,7.5,'helvetica','bold');
      rep.addText(120,142,' ÁREAS DE \nFORMACIÓN:',false,true);
      rep.addText(151.5, 141, 'CALIFICACIÓN',false,true);
      rep.addText(177.8, 143, 'T-E',false,true);
      rep.addText(186.5, 141, 'FECHA',false,true);
      rep.setFontProperties(black,5,'helvetica','bold');
		rep.addRotateText(203.5, 145.5, 'PLANTEL',90);
		rep.setFontProperties(black,7.5,'helvetica','bold');
      rep.addText(184,145, 'Mes',false,true);
      rep.addText(192,145, 'Año',false,true);
      rep.addText(147.5,145, 'N°',false,true);
      rep.addText(160.5,145, 'LETRAS',false,true);		
	
	//TITULOS DE anoS
		rep.setFontProperties(black,9.5,'helvetica','bold');
	  	rep.addText(4, 81, 'V. Plan de Estudio:',false,true);
	  	rep.addText(50,83,'PRIMER AÑO',false,true);
	  	rep.addText(150,83,'SEGUNDO AÑO',false,true);
	  	rep.addText(50,137,'TERCER AÑO',false,true);
	  	rep.addText(150,137,'CUARTO AÑO',false,true);
	  	rep.addText(50,203.5, 'QUINTO AÑO',false,true);
	  	rep.addText(143,203.5,'ÁREAS DE FORMACIÓN',false,true);
	};
	
	function parteV(){
		function writeMat(x,y,datMat){
			var dataMat = datMat;
			var long = 0; 
			var ln1 = "";
			var ln2 = "";
			var arr = [];
			
			for(var i = 0; i < dataMat.length; i++){
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
					rep.addText(x+5, y + 0.5, ln1,false,true);
					rep.addText(x+5, y + 2.6, ln2,false,true);
				}else{
					rep.addText(x+5, y+2, ln1,false,true);
				}
				y += 6;
			}	
		}
	  	
	 	rep.setFontProperties(black,7,'helvetica','bold');
	  	//primer Año
	  	if(data.materias1.length > 0){
	  		writeMat(0,94,data.materias1); 
	  		var y = 95.5;
	  		writeMat(45.7,93.7,data.calLet1);
	  		for(var i = 0; i < data.materias1.length; i++){
		  		//rep.addText(5, y, data.materias1[i]+'',false,true);
		  		rep.addText(46, y, data.calificacion1[i]+'',false,true);
		  		//rep.addText(51.5, y, data.calLet1[i]+'',false,true);
		  		rep.addText(77.5, y, data.TE1[i]+'',false,true);
		  		rep.addText(83.5, y, data.mes1[i]+'',false,true);
		  		rep.addText(90.5, y, data.ano1[i]+'',false,true);
		  		rep.addText(100.5, y, data.pl1[i]+'',false,true);
		  		y = y + 6;
	  		};
	  	};
	  	//segundo Año
	  	if(data.materias2.length > 0){
	  		writeMat(101,94,data.materias2);
	  		var y = 95.5;
	  		writeMat(147.3,93.7,data.calLet2);
	  		for(var i = 0; i < data.materias2.length; i++){
		  		//rep.addText(105.5, y, data.materias2[i]+'',false,true);
		  		rep.addText(148, y, data.calificacion2[i]+'',false,true);
		  		//rep.addText(153.5, y, data.calLet2[i]+'',false,true);
		  		rep.addText(179.5, y, data.TE2[i]+'',false,true);
		  		rep.addText(185.5, y, data.mes2[i]+'',false,true);
		  		rep.addText(192, y, data.ano2[i]+'',false,true);
		  		rep.addText(202, y, data.pl2[i]+'',false,true);
		  		y = y + 6;
	  		};
	  	};
	  	//tercer Año	  
	  	if(data.materias3.length > 0){
		  	writeMat(0,148,data.materias3);
		  	var y = 150;
	        writeMat(45.7,147.9,data.calLet3);
		  	for(var i = 0; i < data.materias3.length; i++){
		  		//rep.addText(5, y, data.materias3[i]+'',false,true);
	         rep.addText(46, y, data.calificacion3[i]+'',false,true);
	         //rep.addText(51.5, y, data.calLet3[i]+'',false,true);
	         rep.addText(77.5, y, data.TE3[i]+'',false,true);
	         rep.addText(83.5, y, data.mes3[i]+'',false,true);
	         rep.addText(90.5, y, data.ano3[i]+'',false,true);
	         rep.addText(100.5, y, data.pl3[i]+'',false,true);
		  		y = y + 6;
		  	};
	  	};
	  	//cuarto Año	  	
	  	if(data.materias4.length > 0){
	  		writeMat(101,148,data.materias4);
	  		var y = 150;
	        writeMat(147.4,147.9,data.calLet4);
	  		for(var i = 0; i < data.materias4.length; i++){
		  		//rep.addText(105.5, y, data.materias4[i]+'',false,true);
	         rep.addText(147.4, y, data.calificacion4[i]+'',false,true);
	         //rep.addText(153.5, y, data.calLet4[i]+'',false,true);
	         rep.addText(179.5, y, data.TE4[i]+'',false,true);
	         rep.addText(185.5, y, data.mes4[i]+'',false,true);
	         rep.addText(192, y, data.ano4[i]+'',false,true);
	         rep.addText(202, y, data.pl4[i]+'',false,true);
	         y = y + 6;
	  		};
	  	};
	  	//quinto Año		
		if(data.materias5.length > 0){
	  		writeMat(0,214,data.materias5);
	  		var y=216;
	        writeMat(45.8,214,data.calLet5);
			for(var i = 0; i < data.materias5.length; i++){	  		
	         rep.addText(46, y, data.calificacion5[i]+'',false,true);
	         //rep.addText(51.5, y, data.calLet5[i]+'',false,true);
	         rep.addText(77.5, y, data.TE5[i]+'',false,true);
	         rep.addText(83.5, y, data.mes5[i]+'',false,true);
	         rep.addText(90.5, y, data.ano5[i]+'',false,true);
	         rep.addText(100.5, y, data.pl5[i]+'',false,true);
		  		y = y + 6;
	  		};
		};	  	
	  	//literales
	  	y = 212;
	  	for(var i = 0; i < data.lit.length; i++){
	  		if(data.lit[i].length === 1)
          rep.addText(177.5, y, data.lit[i],false,true);
        if(data.lit[i].length > 1){
          rep.setFontProperties(black,8,'helvetica','bold');
          rep.addText(170.5, y, data.lit[i],false,true);          
         }
	  		y = y + 5.7;
      };
	  
	  //grupos
      y =244.5;
      function writeGrup(x,y,datGrup){
			var dataMat = datGrup;
			var long = 0; 
			var ln1 = "";
			var ln2 = "";
			var arr = [];
			
			for(var i = 0; i < dataMat.length; i++){
				ln2 = "";
				ln1 = "";
				var fSts = false;
				long = dataMat[i].length;
				if (long <= 20){
					ln1 = dataMat[i];
				}else{
					arr = dataMat[i].split(" ");
					for(var j = 0; j < arr.length; j++ ){
						if (ln1.length + arr[j].length < 20 && fSts===false){
							ln1 += arr[j] + " ";
						}else{
							ln2 += arr[j] + " ";
							fSts=true;
						}
					}
				}	
				rep.setFontProperties(black, 6, 'helvetica', 'bold');
				if (ln2.length > 0){
					rep.addText(x+5, y - 1.3, ln1,false,true);
					rep.addText(x+5, y + 1.3, ln2,false,true);					
				}else{
					rep.addText(x+5, y, ln1,false,true);
				}
				y += 6.3;
			}	
		}      
      	
      	writeGrup(148, y, data.gru);
      	/*
	  	for(var i = 0; i < data.lit.length; i++){
	  	 	rep.addText(154, y, data.gru[i],false,true);
         	y = y + 6.3;
      	};
      	*/
      	rep.setFontProperties(black, 8, 'helvetica', 'bold');
      //literal tabla 2
      for(var i = 0; i < data.lit.length; i++){
    	 if(data.litGru[i].length > 1) 
    		 rep.addText(191, y, data.litGru[i],false,true);
    	 else
    		 rep.addText(191.5, y, data.litGru[i],false,true);
    	 y = y + 6.3;
      };
      
	  	tablaMaterias(86.5);
	  	tablaMaterias(145);
	 
	 //5ano encabezado
	   rep.addAbsTable(4,204, [40.5], 1, 8, false, true); 						// areas de formaciÓn
		rep.addAbsTable(44.5,204, [31.5], 1, 4, false, true);    				// calificacion
	  	rep.addAbsTable(44.5,208,[6, 25.5], 1, 4, false, true); 					//asignatura/n°/letras 
	  	rep.addAbsTable(76,204,[5], 1, 8, false, true); 							//T.E
		rep.addAbsTable(81,204, [16], 1, 4, false, true); 							//fecha
	  	rep.addAbsTable(97,204,[8], 1, 8, false, true); 							//plantel
	  	rep.addAbsTable(81,208,[8,8], 1, 4, false, true); 							//Mes ano
	 
	 // tabla 5ano
	  	rep.addAbsTable(4,212, [40.5, 6, 25.5, 5, 8, 8, 8], 10, 6, false, true);
	 
	 //HEADER 5ano
	  	rep.setFontProperties(black,7.5,'helvetica','bold');
	  	rep.addText(18.5,208,' ÁREAS DE \nFORMACIÓN:',false,true);
	  	rep.addText(50,207, 'CALIFICACIÓN',false,true);
	  	rep.addText(76.4,208.8, 'T-E',false,true);
	  	rep.addText(85,207, 'FECHA',false,true);
		rep.setFontProperties(black,5,'helvetica','bold');
	  	rep.addRotateText(102,211.5, 'PLANTEL',90);
	  	rep.addRotateText(102,211.5, 'PLANTEL',90);
		rep.setFontProperties(black,7.5,'helvetica','bold');
	  	rep.addText(82.5,211, 'Mes',false,true);
	  	rep.addText(90.5,211, 'Año',false,true);
	  	rep.addText(46,211, 'N°',false,true);
	  	rep.addText(60.5,211, 'LETRAS',false,true);
	 
	 // areas de formacion TABLAS
	  	rep.addAbsTable(105.5,204, [40.5,6,54.5], 1, 4, false, true);
	  	rep.addAbsTable(105.5,208, [40.5], 1, 28.5, false, true);
	  	rep.addAbsTable(146,208, [6,54.5], 5, 5.7, false, true);
	  	
	 //2da tabla
	  	rep.addAbsTable(105.5,236.5, [40.5,6,27.25,27.25], 1, 4, false, true);
	  	rep.addAbsTable(105.5,240.5, [40.5], 1, 31.5, false, true);
	  	rep.addAbsTable(146,240.5, [6,27.25,27.25], 5, 6.3, false, true);
	 
	 // texto
	   rep.setFontProperties(black,7.5,'helvetica','bold');
	 
	 //HEAD
	 
	 //TEXTO AREA DE FORMACION
	  	rep.addText(111.5, 207,'ÁREAS DE FORMACIÓN',false,true);
	  	rep.addText(115.5,220, 'ORIENTACIÓN Y\n CONVIVENCIA',false,true);
	  	rep.addText(174, 207, 'LITERAL',false,true);
	  	rep.addText(146.3, 207, 'AÑO',false,true);
	  	var y = 212;
	  	for(var i = 1; i <= 5; i++ ){
	  		rep.addText(147.8, y,i + '°',false,true);
	  		y = y + 5.7;	
	  	}
	  		 
	 //TEXTO TABLA 2
	  	rep.addText(111.5, 239.5,'ÁREAS DE FORMACIÓN',false,true);
	  	rep.addText(109,250, 'PARTICIPACIÓN \nEN GRUPOS DE CREACIÓN \nRECREACIÓN Y PRODUCCIÓN',false,true);
	  	rep.addText(160, 239.5, 'GRUPOS',false,true);
	  	rep.addText(187.5, 239.5, 'LITERAL',false,true);
	  	rep.addText(146.3, 239.5, 'AÑO',false,true);
	  	var y = 245;
      for(var i = 1; i <= 5; i++ ){
          rep.addText(147.8, y,i + '°',false,true);
          y = y + 6.3;	
      }
	};
	
	function parteVI(){
		rep.setFontProperties(black,9.5,'helvetica','bold');
		rep.addText(5,275.5,'VI. Observaciones:',false,true);
		
	    function writeObs(x,y,datObs){
			var f = false;
			var long = datObs.length; 
			var ln1 = "";
			var ln2 = "";
		  	var arr = datObs.split(" ");
			if (long < 100){
				ln1 = datObs;
			}
			else{
				for(var j = 0; j < arr.length; j++ ){
					if (ln1.length + arr[j].length < 100 ){
							if(!f)
								ln1 += arr[j] + " ";
							else
								ln2 += arr[j] + " ";
					}
					else{
						f=true;
						ln2 += arr[j] + " ";
					}
				}
			}
	      	if (ln2.length > 0){
	    	  	rep.addText(x, y, ln1, false, true);
	    	  	rep.addText(x - 28, y + 4, ln2, false, true);
	      	}
	      	else{
	    	  	rep.addText(x, y, ln1,false,true);
	      	}
	    }		
	    rep.addAbsTable(4,272,[202.5],2,4,false,true);
	    writeObs(33.5,275.5,data.obse)
	};
	
	function parteVII(){
		rep.setFontProperties(black,9.0,'helvetica','bold');
		rep.addAbsTable(4,280,[101],1,4,false,true);
	  	rep.addText(5,283.5,'VII. Plantel',false,true);
  	   rep.addText(23,287.5,'Director(a)',false,true);
      rep.addText(5,291,'Apellidos y Nombres:',false,true);
      rep.addText(5,299.5,'Cédula de Identidad:',false,true);
      rep.addText(5,307.5,'Firma:',false,true);
		rep.addAbsTable(4,284,[50.5],7,4,false,true);
		rep.addAbsTable(54.5,284,[50.5],1,28,false,true)
      rep.addText(64.5,298,'SELLO DEL PLANTEL',false,true);		
	  	rep.setFontProperties(black,8,'helvetica','bold');
      rep.addText(5,311,'Para efectos de su Validez Nacional',false,true);
	  	rep.setFontProperties(black,6.5,'helvetica','bold');
	  	
	  	rep.addText(5,295.5,data.nomJef,false,true);
	  	rep.addText(5,303.5,data.cedJef,false,true);
	};
	
	function parteVIII(){
		rep.setFontProperties(black,9.5,'helvetica','bold');
		rep.addAbsTable(105.5,280,[101],1,4,false,true);
	  	rep.addText(106.5,283.5,'VIII. Zona Educativa',false,true);
		rep.addAbsTable(105.5,284,[50.5],7,4,false,true);
		rep.addAbsTable(156,284,[50.5],1,28,false,true);
		rep.setFontProperties(black,9.0,'helvetica','bold');
	  	rep.addText(125,287.5,'Director(a)',false,true);
	  	rep.addText(106.5,291,'Apellidos y Nombres:',false,true);
	  	rep.addText(106.5,299.5,'Cédula de Identidad:',false,true);
	  	rep.addText(106.5,307.5,'Firma:',false,true);
	  	rep.addText(158,298,'SELLO DE LA ZONA EDUCATIVA',false,true);
		rep.setFontProperties(black,8,'helvetica','bold');
	  	rep.addText(106.5,311,'Para efectos de su Validez Internacional',false,true);
	  	
	};


	this.setData = function(dat){
		for(var attrname in dat)  { data[attrname] = dat[attrname] };
	}
	
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
	}
}
