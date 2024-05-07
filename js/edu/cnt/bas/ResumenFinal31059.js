function ResumenFinal31059(j1, j2, j3, j4, jn){
	var rep = new Report('portrait',798,1500);
	var black = rep.getRGBAObj(0,0,0,0);
	var data = {};
	var ti = [];
	var no_prof = [];
	var constante_I = 'IN';
	
	function toTwoLines(txt, size){
		let a = txt.split(' ');
		let lns = ['',''];
		let acu = 0;
		for(let i=0; i<a.length; i++){
			acu+= a[i].length;
			if(acu > size){
				lns[1]+=a[i]+' ';
			}
			else{
				lns[0]+=a[i]+' ';
			}
		}
		return lns;
	}

	function parteI(){
		rep.addImage(15,1,354,89,imgEduca.logo_ministerio,true);
		rep.setFontProperties(black,12,'helvetica','bold');
		rep.addText(106, 8, 'RESUMEN FINAL DEL RENDIMIENTO ESTUDIANTIL ',false, true);
		rep.addLine(106,9.3,205,9.3,black,0.5,false, true);
		rep.setFontProperties(black,10,'helvetica','bold');
		rep.addText(140, 13.5, 'Código del Formato: ' + data.codFormato,false,true);
		rep.addText(95, 18.5, 'I. Año Escolar: '+data.anio_escolar,false,true);
		rep.setFontProperties(black,9.2,'helvetica','bold');
		rep.addLine(119,19.3,200,19.3,black,0.5,false, true);
		rep.addText(94, 22.5, 'Tipo de Evaluación: '+data.tipo_eval,false,true);
		rep.addLine(123,23.3,155,23.3,black,0.5,false, true);
		rep.addText(157, 22.5, 'Mes y Año: '+data.mes_anio,false,true);
		rep.addLine(174.5,23.3,200,23.3,black,0.5,false, true);
	};

	function parteII(){
  	   rep.setFontProperties(black,9.5,'helvetica','bold');
	   rep.addText(4, 25.5, 'II. Datos del Plantel:',false,true);
	   rep.addText(4, 29.5, 'Código del plantel: '+' '+data.codigo,false,true);
	   rep.addLine(34,30,54,30,black,0.5,false,true);															//linea cod. plantel
	   rep.addText(60, 29.5, 'Nombre: '+' '+data.nombreP,false,true);
	   rep.addLine(75,30,205,30,black,0.5,false,true);															//linea nombre
	   rep.addText(4, 33, 'Dirección: '+' '+data.dir,false,true);
	   rep.addLine(21,33.3,140,33.3,black,0.5,false,true);													//linea direccion
	   rep.addText(140, 33, 'Teléfono:'+' '+data.tel,false,true);
	   rep.addLine(155,33.3,205,33.3,black,0.5,false,true);													//linea telf
	   rep.addText(4, 37, 'Municipio:'+'  '+data.munic,false,true);
	   rep.addLine(21,37.5,86,37.5,black,0.5,false,true);														//linea municipio
	   rep.addText(86.5, 37, 'Entidad Federal:'+' '+data.entFed,false,true);
	   rep.addLine(110,37.5,140,37.5,black,0.5,false,true);													//linea Ent. Federal
	   rep.addText(140, 37, 'Zona Educativa:'+' '+data.zEdu,false,true);
	   rep.addLine(164.5,37.5,205,37.5,black,0.5,false,true);
	   rep.addText(4, 41, 'Director(a):'+' '+data.director,false,true);
	   rep.addLine(21,41.5,140,41.5,black,0.5,false,true);													//linea Director
	   rep.addText(140, 41, 'Cédula de Identidad:'+' '+data.ced_jefe,false,true);
	   rep.addLine(171,41.5,205,41.5,black,0.5,false,true);												   //linea Cédula de Identidad
	};

	function parteIII(){
   	rep.setFontProperties(black,9,'helvetica','bold');
   	rep.addText(5, 45.5, 'III. Identificación del Estudiante:',false,true);
		rep.setFontProperties(black,8,'helvetica','bold');
		rep.addAbsTable(4,42, [113], 1, 4, false, true);
	/////////////////////////////////////Tabla n°, ced, ap, nom, lugNac, Ef, sexo, fecNac/////////////////////////////
		rep.addAbsTable(4,46, [7,16,26,26,17,4,4], 1, 18, false, true);
		rep.addAbsTable(104,46,[13],1,8,false,true);

	/////////////////////////////////////Tabla Dia, Mes, Año//////////////////////////////////////////////////////////
		rep.addAbsTable(104,54,[3.6,3.6,5.8],1,10,false,true);

	/////////////////////////////////////Tabla Data n°, ced, ap, nom, lugNac, Ef, sexo, fecNac////////////////////////
		rep.addAbsTable(4,64,[7,16,26,26,17,4,4],35,4,false,true);
    	var y = 67;
		for(var i = 1; i <= 35; i++){
			if (i < 10) {
        		rep.setFontProperties(black,8,'helvetica','bold');
				rep.addText(6, y, '0'+ i ,false,true);
			}else{
        		rep.setFontProperties(black,8,'helvetica','bold');
				rep.addText(5, y, ' '+ i ,false,true);
			}
			y = y + 4;
		}
		var y = 67;
	/*Data Alumnos*/
		var add = 0;
		if(data.totalEst[data.page] < 35)
			add=1;
	   for(var i=data.page*35; i<data.totalEst[data.page]+data.page*35+add; i++){
		   rep.setFontProperties(black,6.2,'helvetica','bold');
		   rep.addText(11.5, y, data.ced_ide[i],false,true);
		   //rep.setFontProperties(black,6.5,'helvetica','bold');
		   if(data.ape[i].length > 20){
			   rep.setFontProperties(black,4.8,'helvetica','bold');
			   rep.addText(27.2, y, data.ape[i].substr(0,29),false,true);
		   }
		   else{
			   rep.setFontProperties(black,6.2,'helvetica','bold');
			   rep.addText(27.2, y, data.ape[i].substr(0,22),false,true);
		   }
		   
		   if(data.nombres[i].length > 20){
			   rep.setFontProperties(black,4.8,'helvetica','bold');
			   rep.addText(53.2, y, data.nombres[i].substr(0,29),false,true);
		   }
		   else{
			   rep.setFontProperties(black,6.2,'helvetica','bold');
			   rep.addText(53.2, y, data.nombres[i].substr(0,22),false,true);
		   }
		   
		   rep.setFontProperties(black,6.2,'helvetica','bold');
		   //************************ LUGAR DE NACIMIENTO *********************
		   var nac = data.lugarNac[i].split(' ');
		   var lnac1 = '';
		   var lnac2 = '';
      	   for(var w=0; w<nac.length; w++){
      		 if(nac[w].length + lnac1.length <= 13)
      			 lnac1 += nac[w] + ' ';
      		 else
      			 lnac2 += nac[w] + ' ';
      	   }
      	   if(lnac2.length > 0){
      		 rep.addText(79.2, y - 1.3, lnac1.substr(0,13),false,true);
      		 rep.addText(79.2, y + 0.7, lnac2.substr(0,13),false,true);
      	   }
      	   else{
      		 rep.addText(79.2, y, lnac1,false,true);
      	   }
      	   //*****************************************************************
	       //rep.addText(79.2, y, data.lugarNac[i].substr(0,13),false,true);
	       //rep.setFontProperties(black,6.5,'helvetica','bold');
	       rep.addText(96.5, y, data.EF[i],false,true);
	       rep.addText(101.2, y, data.sexo[i],false,true);
	       //rep.setFontProperties(black,6.5,'helvetica','bold');
	       rep.addText(104.7, y, data.Dia[i],false,true);
	       rep.addText(108.3, y, data.Mes[i],false,true);
	       rep.addText(111.8, y, data.Ano[i],false,true);
	       y = y + 4;
      }

	/////////////////////////////////////Tabla Data Dia, Mes, Año/////////////////////////////////////////////////////
		rep.addAbsTable(104,64,[3.6,3.6,5.8],35,4,false,true);

	//////////////////////////////////////Titulo de Tabla nro, ced, ap, nom, lugNac, Ef, sexo, fecNac//////////////////
		rep.setFontProperties(black,8.5,'helvetica','bold');
		rep.addText(6.5, 58, 'N°',false,true);
	  	rep.addText(12.5, 56, 'Cédula de \nIdentidad',false,true);
	  	rep.addText(32.5, 56, 'Apellidos',false,true);
	  	rep.addText(59.5, 56, 'Nombres',false,true);
	  	rep.addText(80, 56, ' Lugar  de\nNacimiento',false,true);
	  	rep.setFontProperties(black,7,'helvetica','bold');
	  	rep.addText(96.5, 58, 'EF',false,true);
	  	rep.addRotateText(102.7, 61, 'SEXO', 90, false, true);
	  	rep.addText(104.5, 50, ' Fecha de\nNacimiento',false,true);
	  	rep.addRotateText(106.5, 61, 'DÍA', 90, false, true);
	  	rep.addRotateText(110.5, 61, 'MES', 90, false,true);
	  	rep.addRotateText(115, 61, 'AÑO', 90, false,true);

	////////////////////////////Total Areas de Formación///////////////////////////////////////////////////////////////
		rep.setFontProperties(black,9.5,'helvetica','bold');
		rep.addAbsTable(4,204,[45],1,20,false,true);
		rep.addText(5, 214, 'Total de Áreas de Formación',false,true);
		rep.addAbsTable(49,204,[68],5,4,false,true);
		rep.addText(79, 207, 'Inscritos',false,true);
		rep.addText(75, 211, 'Inasistentes',false,true);
		rep.addText(77, 215, 'Aprobados',false,true);
		rep.addText(75, 219, 'No Aprobados',false,true);
		rep.addText(75, 223, 'No Cursantes',false,true);
	};

	function parteIV(){
		var totalMaterias = 12
		if( data.anioCursado.toUpperCase()==='PRIMERO' || data.anioCursado.toUpperCase()==='PRIMER AÑO' ||
			data.anioCursado.toUpperCase()==='SEGUNDO' || data.anioCursado.toUpperCase()==='SEGUNDO AÑO')
			var totalMaterias = 9;
		if(data.anioCursado.toUpperCase()==='TERCERO' || data.anioCursado.toUpperCase()==='TERCER AÑO')
			var totalMaterias = 10;
		if(data.anioCursado.toUpperCase()==='CUARTO' || data.anioCursado.toUpperCase()==='CUARTO AÑO')
			var totalMaterias = 11;
		rep.setFontProperties(black,9.5,'helvetica','bold');
	   	rep.addText(118, 45.5, 'IV. Resumen Final del Rendimiento:',false,true);
		rep.addAbsTable(117,42, [88], 1, 4, false, true);
	
	/////////////////////////////////////Áreas de Formación///////////////////////////////////////////////////////////
		if(totalMaterias===9){
			rep.setFontProperties(black,9.5,'helvetica','bold');
			rep.addText(122, 50.5, 'ÁREAS DE FORMACIÓN',false,true);
			rep.addText(130, 55.5, 'ÁREA COMÚN',false,true);
			rep.setFontProperties(black,5.9,'helvetica','bold');
			rep.addText(170.3, 50, 'PARTICIPACIÓN EN GRUPOS DE\nCREACIÓN, RECREACIÓN\nY PRODUCCIÓN',false,true);
			rep.addAbsTable(117,56,[6,6,6,6,6,6,6,6,6],42,4,false,true);
			rep.addAbsTable(171,56,[34],1,8,false,true);
			rep.addAbsTable(171,64,[34],40,4,false,true);
			//tabla para areas de formacion - area comun
			rep.addAbsTable(117, 46, [48], 2, 5, false, true);
			//tabla para participacion en grupos de creacion, recreacion y procuccion
			rep.addAbsTable(165, 46, [40], 1, 10, false,true);			
			rep.setFontProperties(black,7,'helvetica','bold');
	  		var x = 118;
			
		}

		if(totalMaterias===10){
			rep.setFontProperties(black,9.5,'helvetica','bold');
			rep.addText(128, 50.5, 'ÁREAS DE FORMACIÓN',false,true);
			rep.addText(136, 55.5, 'ÁREA COMÚN',false,true);
			rep.setFontProperties(black,5.9,'helvetica','bold');
			rep.addText(173.3, 50, 'PARTICIPACIÓN EN GRUPOS DE\nCREACIÓN, RECREACIÓN\nY PRODUCCIÓN',false,true);
			rep.addAbsTable(117,56,[6,6,6,6,6,6,6,6,6,6],42,4,false,true);
			rep.addAbsTable(171,56,[34],1,8,false,true);//Grupo cuadro
			rep.addAbsTable(171,64,[34],40,4,false,true);// Grupo celdas
			//tabla para areas de formacion - area comun
			rep.addAbsTable(117, 46, [54], 2, 5, false, true);
			//tabla para participacion en grupos de creacion, recreacion y procuccion
			rep.addAbsTable(171, 46, [34], 1, 10, false,true);			
			rep.setFontProperties(black,7,'helvetica','bold');
	  		var x = 118;			
		}

		if(totalMaterias===11){	
			rep.setFontProperties(black,9.5,'helvetica','bold');
			rep.addText(128, 50.5, 'ÁREAS DE FORMACIÓN',false,true);
			rep.addText(136, 55.5, 'ÁREA COMÚN',false,true);
			rep.setFontProperties(black,5.9,'helvetica','bold');
			rep.addText(178, 50, 'PARTICIPACIÓN EN GRUPOS\nDE CREACIÓN, RECREACIÓN\nY PRODUCCIÓN',false,true);
			rep.addAbsTable(117,56,[6,6,6,6,6,6,6,6,6,6,6],42,4,false,true);
			rep.addAbsTable(171,56,[34],1,8,false,true);//Grupo cuadro
			rep.addAbsTable(171,64,[34],40,4,false,true);// Grupo celdas
			//tabla para areas de formacion - area comun
			rep.addAbsTable(117, 46, [60], 2, 5, false, true);
			//tabla para participacion en grupos de creacion, recreacion y procuccion
			rep.addAbsTable(177, 46, [28], 1, 10, false,true);			
			rep.setFontProperties(black,7,'helvetica','bold');
	  		var x = 118;
		}

		if(totalMaterias===12){	
			rep.setFontProperties(black,9.5,'helvetica','bold');
			rep.addText(128, 50.5, 'ÁREAS DE FORMACIÓN',false,true);
			rep.addText(136, 55.5, 'ÁREA COMÚN',false,true);
			rep.setFontProperties(black,5.9,'helvetica','bold');
			rep.addText(183.3, 48, 'PARTICIPACIÓN EN \nGRUPOS DE CREACIÓN,\nRECREACIÓN y\nPRODUCCIÓN',false,true);
			rep.addAbsTable(117,46, [66], 2, 5, false, true);
			rep.addAbsTable(183,46,[22],1,10,false,true);			
			rep.addAbsTable(117,56,[6,6,6,6,6,6,6,6,6,6,6,6],42,4,false,true);
			rep.addAbsTable(189,56,[16],1,8,false,true);
			rep.addAbsTable(189,64,[16],40,4,false,true);
			rep.setFontProperties(black,7,'helvetica','bold');
	  		var x = 118;
		}
		
		for(var i = 1; i <= totalMaterias; i++){
			if (i < 10)
				rep.addText(x + 1, 59,''+ i ,false,true);
			else
				rep.addText(x, 59,''+ i ,false,true);
			x+=6;
		}
		/*
			rep.addText(128, 50.5, 'ÁREAS DE FORMACIÓN',false,true);
			rep.addText(136, 55.5, 'ÁREA COMÚN',false,true);
			rep.addText(183.3, 48, 'PARTICIPACIÓN EN \nGRUPOS DE CREACIÓN,\nRECREACIÓN y\nPRODUCCIÓN',false,true);

			//rep.addAbsTable(117,46, [66], 2, 5, false, true);
			//rep.addAbsTable(183,46,[22],1,10,false,true);
			
			rep.addAbsTable(117,56,[6,6,6,6,6,6,6,6,6,6,6,6],42,4,false,true);
			rep.addAbsTable(189,56,[16],1,8,false,true);
			rep.addAbsTable(189,64,[16],40,4,false,true);
			rep.setFontProperties(black,7,'helvetica','bold');
	  		var x = 118;
			for(var i = 1; i <= 12; i++){
				if (i < 10)
					rep.addText(x + 1, 59,''+ i ,false,true);
				else
					rep.addText(x, 59,''+ i ,false,true);
				x+=6;
			}
		*/

		/*Data Abreviatura Materias*/
		var x = 118;
		var xx = 0.03;
		var total_inscritos 	= [];
		var total_inasistentes 	= [];
		var total_aprobados		= [];
		var total_no_aprobados	= [];
		var total_no_cursantes	= [];
		var nota_min_aprobacion = 9.5;

		
		var notas = [data.nota1, data.nota2, data.nota3, data.nota4, data.nota5, data.nota6, data.nota7, data.nota8, data.nota9, data.nota10, data.nota11, data.nota12];
		
		function upDateTotal(col, fil) {
			if(notas[col][fil].toUpperCase()==='NC') total_no_cursantes[col]++;
			if(notas[col][fil]!='*' && notas[col][fil]!='NC') total_inscritos[col]++;
         	if(notas[col][fil].toUpperCase()==='I') total_inasistentes[col]++;
        
			if(!isNaN(notas[col][fil])) {
				if(notas[col][fil].trim() == 'A' || parseFloat(notas[col][fil]) >= parseFloat(nota_min_aprobacion)) {
					total_aprobados[col]++;
				}	
				else {
					total_no_aprobados[col]++;				
				}
			}
			else {
				if(notas[col][fil].trim() == 'A' || notas[col][fil].trim() == 'B' || notas[col][fil].trim() == 'C' || notas[col][fil].trim() == 'D') {
					total_aprobados[col]++;
				}
				else if (notas[col][fil].trim() == 'P') {
					total_no_aprobados[col]++;				
				}
			}
		}
		
		function setDataGrupo(j, pos){
			rep.setFontProperties(black,4,'helvetica','bold');
			var ln1 = '';
			var ln2 = '';
			var tk = data.grup[j].split(' ');
			var flg = true;
			var adjx = 0;//4to y 5to año
			var totLet = 12//4to y 5to año
			if(totalMaterias===9){//1ro y 2do año
				adjx = 16.8;
				totLet = 24;
			}
			if(totalMaterias===10){//3er año
				adjx = 10.8;
				totLet = 20;
			}

			if(totalMaterias===11){//4to año
				adjx = 5.8;
				totLet = 16;
			}
			
			if(data.grup[j].length < totLet){
				rep.addText(189-adjx, 66.5+pos*4, '' + data.grup[j],false,true);
			}
			else{
				for(var c=0; c<tk.length; c++){
					if((ln1.length + tk[c].length < 12) && flg)
						ln1+=tk[c]+' ';
					else{
						ln2+=tk[c]+' ';
						flg=false;
					}
				} 			
				rep.addText(189-adjx, 65.7+pos*4, '' + ln1.substr(0,12),false,true);
	         rep.addText(189-adjx, 67.5+pos*4, '' + ln2.substr(0,17),false,true);
		  }
		  if(pos===0) {
	      	rep.setFontProperties(black,6.8,'helvetica','bold');
			rep.addText(193-adjx/2, 61, 'GRUPO',false,true);
			}
	      rep.setFontProperties(black,6.8,'helvetica','bold');
		}
		
		var add = 0;
		if(data.totalEst[data.page] < 35)
			add=1;		
		//var lx = data.datAbrMat.length;
		/*
		if(lx > 12)
		  lx=12;
		*/
		var lx=totalMaterias;
		for(var i = 0; i < lx; i++){//COLUMNAS
			total_inscritos[i]	 = 0;
			total_inasistentes[i] = 0;
			total_aprobados[i]	 = 0;
			total_no_aprobados[i] = 0;
			total_no_cursantes[i] = 0;
			
			if (data.datAbrMat[i][0].length > 2){
				rep.setFontProperties(black,6.8,'helvetica','bold');
				rep.addText(x-0.5, 63, '' + data.datAbrMat[i][0].substr(0,3),false,true);
			}				
			else{	
         		rep.setFontProperties(black,6.8,'helvetica','bold');
         		rep.addText(x, 63, '' + data.datAbrMat[i][0].substr(0,3),false,true);           
         	}
         	var jj=0;
         
         	for(var j=data.page*35; j<data.totalEst[data.page]+data.page*35+add; j++){//FILAS
         	
         	upDateTotal(i,j);
         	switch(i){
         		case 0 :{
         			setDataGrupo(j,jj);
         			if(data.nota1[j].toUpperCase()==='I')
         				rep.addText(x+i*xx-0.5, 67+jj*4, constante_I ,false,true);
         			else
         				rep.addText(x+i*xx-0.5, 67+jj*4, '' + data.nota1[j],false,true);
         			break;
         		}
         		case 1 :{
         			if(data.nota2[j].toUpperCase()==='I')
         				rep.addText(x+i*xx-0.5, 67+jj*4, constante_I ,false,true);
         			else
         				rep.addText(x+i*xx-0.5, 67+jj*4, '' + data.nota2[j],false,true);		
         			break;
         		}
         		case 2 :{
         			if(data.nota3[j].toUpperCase()==='I')
         				rep.addText(x+i*xx-0.5, 67+jj*4, constante_I ,false,true);
         			else
         				rep.addText(x+i*xx-0.5, 67+jj*4, '' + data.nota3[j],false,true);		
         			break;
         		}
         		case 3 :{
         			if(data.nota4[j].toUpperCase()==='I')
         				rep.addText(x+i*xx-0.5, 67+jj*4, constante_I ,false,true);
         			else
         				rep.addText(x+i*xx-0.5, 67+jj*4, '' + data.nota4[j],false,true);		
         			break;
         		}
         		case 4 :{
         			if(data.nota5[j].toUpperCase()==='I')
         				rep.addText(x+i*xx-0.5, 67+jj*4, constante_I ,false,true);
         			else
         				rep.addText(x+i*xx-0.5, 67+jj*4, '' + data.nota5[j],false,true);		
         			break;
         		}
         		case 5 :{
         			if(data.nota6[j].toUpperCase()==='I')
         				rep.addText(x+i*xx-0.5, 67+jj*4, constante_I ,false,true);
         			else
         				rep.addText(x+i*xx-0.5, 67+jj*4, '' + data.nota6[j],false,true);		
         			break;
         		}
         		case 6 :{
         			if(data.nota7[j].toUpperCase()==='I')
         				rep.addText(x+i*xx-0.5, 67+jj*4, constante_I ,false,true);
         			else
         				rep.addText(x+i*xx-0.5, 67+jj*4, '' + data.nota7[j],false,true);		
         			break;
         		}
         		case 7 :{
         			if(data.nota8[j].toUpperCase()==='I')
         				rep.addText(x+i*xx-0.5, 67+jj*4, constante_I ,false,true);
         			else
         				rep.addText(x+i*xx-0.5, 67+jj*4, '' + data.nota8[j],false,true);		
         			break;
         		}
         		case 8 :{
         			if(data.nota9[j].toUpperCase()==='I')
         				rep.addText(x+i*xx-0.5, 67+jj*4, constante_I ,false,true);
         			else
         				rep.addText(x+i*xx-0.5, 67+jj*4, '' + data.nota9[j],false,true);		
         			break;
         		}
         		case 9 :{
         			if(data.nota10[j].toUpperCase()==='I')
         				rep.addText(x+i*xx-0.5, 67+jj*4, constante_I ,false,true);
         			else
         				rep.addText(x+i*xx-0.5, 67+jj*4, '' + data.nota10[j],false,true);		
         			break;
         		}
         		case 10 :{
         			if(data.nota11[j].toUpperCase()==='I')
         				rep.addText(x+i*xx-0.5, 67+jj*4, constante_I ,false,true);
         			else
         				rep.addText(x+i*xx-0.5, 67+jj*4, '' + data.nota11[j],false,true);		
         			break;
         		}
         		case 11 :{
         			if(data.nota12[j].toUpperCase()==='I')
         				rep.addText(x+i*xx-0.5, 67+jj*4, constante_I ,false,true);
         			else
         				rep.addText(x+i*xx-0.5, 67+jj*4, '' + data.nota12[j],false,true);		
         			break;
         		}
         	}
         	jj++;
         }
         x+=6;                                       
      }
		
	
		for(var i = 0; i < lx; i++){//TOTALES
			no_prof[i] = '*';
			ti[i] = total_inscritos[i];
			rep.addText(118.5+i*6, 207, '' + total_inscritos[i],false,true);
			rep.addText(118.5+i*6, 211, '' + total_inasistentes[i],false,true);
			rep.addText(118.5+i*6, 215, '' + total_aprobados[i],false,true);
			rep.addText(118.5+i*6, 219, '' + total_no_aprobados[i],false,true);
			rep.addText(118.5+i*6, 223, '' + total_no_cursantes[i],false,true);
		}
	};

	function parteV(){
		rep.setFontProperties(black,8,'helvetica','bold');
	   rep.addText(5, 227, 'V. Profesores por Áreas:',false,true);
	 	rep.addAbsTable(4,224,[45],1,4,false,true);
	 	rep.addAbsTable(4,228,[6,39],1,4,false,true);
	 	rep.addText(13, 231.5, 'Áreas de Formación',false,true);
	 	rep.addText(5, 231.5, 'N°',false,true);
	 	rep.addAbsTable(4,232,[6,6,33,34,34,30],12,4,false,true);
		rep.addText(50, 229, 'Apellidos y Nombres',false,true);
		rep.addText(84, 229, 'Cédula de Identidad',false,true);
		rep.addText(128, 229, 'Firma',false,true);
		rep.addAbsTable(49,224,[34,34,30],1,8,false,true);

		y = 235;
		for (var i = 1; i <= 12; i++) {
			if (i < 10) {
				rep.addText(6, y, i + ' ', false,true); /////n°
			}else {
				rep.addText(5, y, i + ' ', false,true); /////n°
			}
			y = y + 4;
		}
		y = 235;
		var lx = data.datAbrMat.length;
		if(lx > 12)
			lx =12;
		rep.setFontProperties(black,6.5,'helvetica','bold');
		for (var i = 0; i < lx; i++) {
         rep.addText(11, y, data.datAbrMat[i][0].substr(0,3) + ' ', false,true);//////////Iniciales de areas de formacion
         y = y + 4;
      }
      y = 235;
      
      for (var i = 0; i < lx; i++) {
    	  
    	let lns = toTwoLines(data.datMat[i], 26);
    	  
      	if(data.datMat[i].length > 26){
      		rep.setFontProperties(black,6,'helvetica','bold');
      		//rep.addText(17, y, data.datMat[i].substr(0,26) + ' ', false,true);//////////areas de formacion (MATERIAS)
      		if(lns[1].length > 26) rep.setFontProperties(black,5,'helvetica','bold');
      		rep.addText(17, y-1.3, lns[0] + ' ', false,true);
      		rep.addText(17, y+0.5, lns[1] + ' ', false,true);
      	}
      	else{
      		rep.setFontProperties(black,6,'helvetica','bold');
      		rep.addText(17, y, data.datMat[i].substr(0,26) + ' ', false,true);//////////areas de formacion (MATERIAS)
      	}
      	
      	
      	
      	
      	if(data.nomProf[i].length > 26){
      		rep.setFontProperties(black,5.2,'helvetica','bold');
      		if(ti[i]===0 && (pcbGeneCerCalCodFormato.getValue()==='MATERIA PENDIENTE' || pcbGeneCerCalCodFormato.getValue()==='REVISION'))
      			rep.addText(49.8, y, no_prof[i] + ' ', false,true);////// * para Nombre Profesor
      		else
            	rep.addText(49.8, y, data.nomProf[i].substr(0,33) + ' ', false,true);//////Nombre Profesor
      	}else{
      		rep.setFontProperties(black,6.2,'helvetica','bold');
            if(ti[i]===0 && (pcbGeneCerCalCodFormato.getValue()==='MATERIA PENDIENTE' || pcbGeneCerCalCodFormato.getValue()==='REVISION'))
      			rep.addText(49.8, y, no_prof[i] + ' ', false,true);//////* para Nombre Profesor
			else
            	rep.addText(49.8, y, data.nomProf[i].substr(0,26) + ' ', false,true);//////Nombre Profesor
      	}
         rep.setFontProperties(black,6.5,'helvetica','bold');
         if(ti[i]===0 && (pcbGeneCerCalCodFormato.getValue()==='MATERIA PENDIENTE' || pcbGeneCerCalCodFormato.getValue()==='REVISION'))
      		rep.addText(85, y, no_prof[i] + ' ', false,true);//////* para cedula
			else	
         	rep.addText(85, y, data.cedProf[i] + ' ', false,true);///Cedula Profesor
         y = y + 4;
      }
	};

	function parteVI(){
		rep.setFontProperties(black,9,'helvetica','bold');
		rep.addText(150, 227, 'VI. Identificación del Curso:',false,true);
	   rep.addText(148, 231, 'PLAN DE ESTUDIO:',false,true);
	   rep.setFontProperties(black,8,'helvetica','normal');
		rep.addText(148, 235, ''+data.plan,false,true);
		rep.setFontProperties(black,9,'helvetica','bold');
		rep.addText(148, 239, 'CÓDIGO:',false,true);
		rep.setFontProperties(black,8,'helvetica','normal');
		rep.addText(148, 243, ''+data.cod,false,true);
		rep.setFontProperties(black,9,'helvetica','bold');
		rep.addText(148, 247, 'AÑO CURSADO',false,true);
		rep.setFontProperties(black,8,'helvetica','normal');
		rep.addText(148, 251, ''+data.anioCursado,false,true);
		rep.setFontProperties(black,9,'helvetica','bold');
		rep.addText(148, 255, 'SECCIÓN',false,true);
		rep.setFontProperties(black,8,'helvetica','normal');
		if(pcbGeneCerCalCodFormato.getValue()==='MATERIA PENDIENTE')
			rep.addText(148, 259, '*',false,true);
		else
			rep.addText(148, 259, ''+data.seccion,false,true);
		rep.setFontProperties(black,9,'helvetica','bold');
		rep.addAbsTable(147,224, [58], 9, 4, false, true);
		rep.setFontProperties(black,7,'helvetica','bold');
		rep.addText(151, 268, 'N° DE ESTUDIANTES\n     POR SECCIÓN',false,true);
		rep.addText(188, 266, 'N° DE',false,true);
		rep.addText(181, 268, 'ESTUDIANTES EN\n    ESTA PÁGINA',false,true);
		rep.addAbsTable(147,260, [31,27], 1, 16, false, true);
		rep.addAbsTable(147,276, [31,27], 1, 4, false, true);
		rep.addText(148, 279, ''+data.est_seccion,false,true);
		rep.addText(179, 279, ''+data.totalEst[data.page],false,true);
		rep.setFontProperties(black,8,'helvetica','bold');
	};
	
	function parteVII(){
		rep.addAbsTable(4,280, [201], 2, 4, false, true);
		rep.setFontProperties(black,7,'helvetica','normal');
		var tks = data.obse.split(' ');
		var l1 = '';
		var l2 = '';
		var flag = true;
		if(data.obse.length <= 174){
			l1= data.obse;
		}
		else{
			for(var k=0; k<tks.length; k++){
				if((l1.length + tks[k].length <= 174) && flag)
					l1 += tks[k] + ' ';
				else{
					l2 += tks[k] + ' ';
					flag=false;
				}
			}
		}
		rep.addText(30, 283.5, l1,false,true);
      rep.addText(5, 287.5, l2,false,true);
		rep.setFontProperties(black,8,'helvetica','bold');
		rep.addText(5, 283.5, 'VII. Observaciones: ',false,true);
	};

	function parteVIII(){
		rep.addAbsTable(4,288, [50], 7, 4, false, true);
		rep.addText(5, 291.5, 'VIII. Fecha de Remisión: ' + data.fecha_remision,false,true);
		rep.addText(20, 295.5, 'Director(a) '	,false,true);
		rep.addText(5, 299.5, 'Apellidos y Nombres: '	,false,true);
		if(data.director.length > 36)
			rep.setFontProperties(black,7.3,'helvetica','bold');
		rep.addText(5, 303.5, ''+data.director,false,true);
		rep.setFontProperties(black,8,'helvetica','bold');
		rep.addText(5, 307.5, 'Cédula de Identidad: '	,false,true);
		rep.addText(5, 311.5, ''+data.ced_jefe,false,true);
		rep.addText(5, 315.5, 'Firma: '	,false,true);
		rep.addAbsTable(54,288, [50],1, 28, false, true);
		rep.addText(65, 303.5, 'SELLO DEL PLANTEL '	,false,true);
	};

	function parteIX(){
		rep.addAbsTable(104,288, [50], 7, 4, false, true);
		rep.addText(105, 291.5, 'IX. Fecha de Recepción: '	,false,true);
		rep.addText(115, 295.5, 'Funcionario Receptor'	,false,true);
		rep.addText(105, 299.5, 'Apellidos y Nombres: '	,false,true);
		rep.addText(105, 303.5, ''	,false,true);
		rep.addText(105, 307.5, 'Cédula de Identidad: '	,false,true);
		rep.addText(105, 311.5, '',false,true);
		rep.addText(105, 315.5, 'Firma: '	,false,true);
		rep.addAbsTable(154,288, [51],1, 28, false, true);
		rep.addText(167, 300.5, 'SELLO DE LA ZONA\n        EDUCATIVA'	,false,true);
	};

	this.setData= function(dat){
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
		parteIX()
		rep.render();
		setTimeout(rep.printPDF,1000);
		return this;
	}
}
