function ResumenFinalBasica(){  
  var rep = new Object();
  var black = '';
   
  this.createRep = function(){
  	rep.render();
	setTimeout(rep.printPDF,1000);
  };
   
  this.setDataParteI = function(plan, cod, anioEsc, mesAnio){
  	rep.setFontProperties(black,9.5,'helvetica','normal');
  	rep.addText(134, 20, plan,false,true);
  	rep.addText(194, 20, cod,false,true);
		rep.addText(125, 23, anioEsc,false,true);
		rep.addText(185.3, 23, mesAnio,false,true);
  };
  
  this.setDataParteII = function(codPlantel, nombre, dttoesc, dir, telf, munic, entFed, zonaEdu, director, ciDir){
		rep.setFontProperties(black,9.5,'helvetica','normal');
  	rep.addText(23, 28.3, codPlantel,false,true);
	  rep.addText(57, 28.3, nombre,false,true);
    rep.addText(190, 28.3, dttoesc,false,true);
    rep.addText(19.5, 32, dir,false,true);
		rep.addText(184, 32, telf,false,true);
    rep.addText(20, 35.5, munic,false,true);
    rep.addText(110, 35.5, entFed,false,true);
    rep.addText(164, 35.5, zonaEdu,false,true);
		rep.addText(21, 39, director,false,true);
		rep.addText(146, 39, ciDir,false,true);
  };
  
  this.setDataParteIII = function(nv, secc, nes, nep){
  	rep.setFontProperties(black,9.5,'helvetica','normal');
  	rep.addText(26, 47, nv,false,true);
  	rep.addText(54, 47, secc,false,true);
  	rep.addText(125, 47, nes,false,true);
  	rep.addText(196, 47, nep,false,true);
  };
  
  this.setDataParteIV = function(arrCi, arrLN, arrEF, arrSexo, arrDia, arrMes, arrAnio, arrA, arrB, arrC, arrD, arrE, arrF, arrApe, arrNombres, docenteGuia, ciDocenteGuia, tipoEval){
  	rep.setFontProperties(black,8.5,'helvetica','normal');
  	var ta =0;
		var tb =0;
		var tc =0;
		var td =0;
		var te =0;
		var tp =0;
		var totLn = 0;
		for(var t=0; t<arrCi.length; t++){
  	  rep.addText(10.5, 69 + t*(4), arrCi[t]+'',false,true);
  	  rep.addText(50, 69 + t*(4), arrLN[t]+'',false,true);	
  	  rep.addText(120, 69 + t*(4), arrEF[t]+'',false,true);
  	  rep.addText(129, 69 + t*(4), arrSexo[t]+'',false,true);
  	  rep.addText(138, 69 + t*(4), arrDia[t]+'',false,true);
  	  rep.addText(145, 69 + t*(4), arrMes[t]+'',false,true);
  	  rep.addText(151.5, 69 + t*(4), arrAnio[t]+'',false,true);
  	  rep.addText(161, 69 + t*(4), arrA[t]+'',false,true);
  	  rep.addText(169, 69 + t*(4), arrB[t]+'',false,true);
  	  rep.addText(177, 69 + t*(4), arrC[t]+'',false,true);
  	  rep.addText(185, 69 + t*(4), arrD[t]+'',false,true);
  	  rep.addText(193, 69 + t*(4), arrE[t]+'',false,true);
  	  rep.addText(201, 69 + t*(4), arrF[t]+'',false,true);//para la P
  	  rep.addText(11, 161+ t*(4), arrApe[t]+'',false,true);
  	  rep.addText(109, 161+ t*(4), arrNombres[t]+'',false,true);
			if(arrA[t].trim().toUpperCase()==='X') 
				ta++;
			else
				rep.addText(161.5, 69 + t*(4), '*',false,true);
			if(arrB[t].trim().toUpperCase()==='X') 
				tb++;
			else
				rep.addText(169.5, 69 + t*(4), '*',false,true);
			if(arrC[t].trim().toUpperCase()==='X') 
				tc++;
			else
				rep.addText(177.5, 69 + t*(4), '*',false,true);
			if(arrD[t].trim().toUpperCase()==='X') 
				td++;
			else
				rep.addText(185.5, 69 + t*(4), '*',false,true);
			if(arrE[t].trim().toUpperCase()==='X') 
				te++;
			else
				rep.addText(193.5, 69 + t*(4), '*',false,true);	
			if(arrF[t].trim().toUpperCase()==='X') 
				tp++;
			else
				rep.addText(201.5, 69 + t*(4), '*',false,true);
			totLn++;
		}
		
		if(totLn<20){
			for(var t=totLn; t<20; t++){
				rep.addText(28, 69 + t*(4), '***',false,true);
				rep.addText(83, 69 + t*(4), '***',false,true);	
				rep.addText(122, 69 + t*(4), '***',false,true);
				rep.addText(131, 69 + t*(4), '***',false,true);
				rep.addText(139, 69 + t*(4), '***',false,true);
				rep.addText(146, 69 + t*(4), '***',false,true);
				rep.addText(153, 69 + t*(4), '***',false,true);
				rep.addText(160, 69 + t*(4), '***',false,true);
				rep.addText(168, 69 + t*(4), '***',false,true);
				rep.addText(176, 69 + t*(4), '***',false,true);
				rep.addText(184, 69 + t*(4), '***',false,true);
				rep.addText(192, 69 + t*(4), '***',false,true);
				rep.addText(200, 69 + t*(4), '***',false,true);//para la P
				rep.addText(55.5, 161+ t*(4), '***',false,true);
				rep.addText(159, 161+ t*(4), '***',false,true);
			}
		}

		if(ta < 10) ta='0'+ta;
  	if(tb < 10) tb='0'+tb;
		if(tc < 10) tc='0'+tc;
		if(td < 10) td='0'+td;
		if(te < 10) te='0'+te;
		if(tp < 10) tp='0'+tp;
		rep.addText(5, 245, docenteGuia+'',false,true);
  	rep.addText(129, 243, ciDocenteGuia+'',false,true);
		rep.addText(184, 52, tipoEval+'',false,true);
		rep.addText(160, 151, ta+'', false, true);
		rep.addText(168, 151, tb+'', false, true);
		rep.addText(176, 151, tc+'', false, true);
		rep.addText(184, 151, td+'', false, true);
		rep.addText(192, 151, te+'', false, true);
		rep.addText(200, 151, tp+'', false, true);
  };
  
  this.setDataParteV = function(obs){
     rep.addJustParagraph(32, 250, obs, 175, 3, [0],false, true);
  };
  
  this.setDataParteVI = function(fecha, director, ci){
    rep.setFontProperties(black,8.5,'helvetica','normal');
  	rep.addText(40, 264, fecha,false,true);
  	rep.addText(5.5, 285, director,false,true);
  	rep.addText(5.5, 297,ci,false,true);
  };
     
  
  //PARTE-I//////////////////////////////////////////////////////////////////////////////////////
	function parteI(){
		rep.addImage(4,9,356,55,imgEduca.logo_ministerio,true,true);
		rep.setFontProperties(black,13,'helvetica','bold');
		rep.addText(112, 9, 'RESUMEN DE LA EVALUACIÓN FINAL',false, true);
		rep.setFontProperties(black,11,'helvetica','bold');
		rep.addLine(112,10,191,10,black,0.8,false,true);//linea -		
		rep.addText(132, 13.5, 'EDUCACION PRIMARIA',false,true);
		rep.addText(122, 16.5, 'Código del Formato:RR-DEA-06-04',false,true);	
		rep.setFontProperties(black,9.5,'helvetica','bold');
		rep.addText(106, 20, 'I. Plan de Estudio:',false,true);
		rep.addLine(133,20.3,184,20.3,black,0.5,false, true);//linea plan de estudio
		rep.addText(185, 20, 'COD:',false,true);
		rep.addLine(193,20.3,206,20.3,black,0.5,false,true);//linea codigo del plan de estudio
		rep.addText(106, 23, 'Año escolar:',false,true);
		rep.addLine(125,23.3,145,23.3,black,0.5,false,true);
		rep.addText(145, 23, 'Mes y año de la evaluación:',false,true);
		rep.addLine(185,23.3,206,23.3,black,0.5,false,true);
  }
	////////////////////////////////////////////////////////////////////////////////////////////	
  
  function parteII(){		
  	rep.setFontProperties(black,9.5,'helvetica','bold');
  	rep.addText(4, 25, 'II. Datos del Plantel:',false,true);  	
		rep.addText(4, 28.5, 'Cód. Plantel:',false,true);
		rep.addLine(23,28.5,42,28.5,black,0.5,false,true);//linea cod. plantel
    rep.addText(44, 28.5, 'Nombre:',false,true);
		rep.addLine(56.5,28.5,175,28.5,black,0.5,false,true);//linea nombre
		rep.addText(175.5, 28.5, 'Dtto.esc.:',false,true);
    rep.addLine(189.5,28.5,206,28.5,black,0.5,false,true);//linea dtto esc.
    rep.addText(4, 32, 'Dirección:',false,true);
		rep.addLine(18.5,32.3,170,32.3,black,0.5,false,true);//linea direccion
		rep.addText(170, 32.5, 'Teléfono:',false,true);
    rep.addLine(183,32.5,206,32.5,black,0.5,false,true);//linea telf
    rep.addText(4, 35.5, 'Municipio:',false,true);
    rep.addLine(19,36,90,36,black,0.5,false,true);//linea municipio
    rep.addText(90.5, 36.5, 'Ent. Federal:',false,true);
    rep.addLine(109,36,140,36,black,0.5,false,true);//linea Ent. Federal
    rep.addText(140, 35.5, 'Zona Educativa:',false,true);
    rep.addLine(163.5,36,206,36,black,0.5,false,true);//linea Zona Educativa
		rep.addText(4, 39, 'Director(a):',false,true);
		rep.addLine(20,39.5,140,39.5,black,0.5,false,true);//linea director
		rep.addText(140, 39, 'C.I.:',false,true);
		rep.addLine(145,39.5,206,39.5,black,0.5,false,true);//linea director		
	}
  
  function parteIII(){
  	rep.setFontProperties(black,9.5,'helvetica','bold');
  	rep.addText(4, 43.5, 'III. Identificación del Curso:',false,true);
  	rep.addText(4, 47, 'Nivel o Grado:',false,true);    
  	rep.addLine(25,47.5,39,47.5,black,0.5,false,true);//linea de nivel o grado
    rep.addText(40, 47, 'Sección:',false,true);
    rep.addLine(53,47.5,67,47.5,black,0.5,false,true);//linea seccion
    rep.addText(68, 47, 'Número de Estudiantes de la Sección:',false,true);
		rep.addLine(124,47.5,136,47.5,black,0.5,false,true);//linea numero de estudiantes seccion
		rep.addText(137, 47, 'Número de Estudiantes en esta Página:',false,true);
		rep.addLine(195,47.5,206,47.5,black,0.5,false,true);//linea numero de estudiantes pagina
  }
  
  
  function parteIV(){
		rep.setFontProperties(black,9.5,'helvetica','normal');
		rep.addText(96, 52, 'ESTUDIANTIL',false,true);
  	rep.setFontProperties(black,9.5,'helvetica','bold');
  	rep.addText(4, 52, 'IV. Resumen Final de Rendimiento:',false,true);
		rep.addText(154, 52, 'Tipo de Evaluación:',false,true);
		rep.addLine(183.5,52.5,206,52.5,black,0.5,false,true);//linea Tipo de evaluacion
  	rep.addAbsTable(4, 54, [6,39,70,9,9,21,48], 1, 12, false, true);
  	rep.addAbsTable(137, 62, [7,7,7,8,8,8,8,8,8], 1, 4, false, true);
  	rep.addAbsTable(4, 66, [6,39,70,9,9,7,7,7,8,8,8,8,8,8], 20, 4, false, true);
  	rep.addAbsTable(4, 146, [154,8,8,8,8,8,8], 1, 8, false, true);
  	rep.addAbsTable(4, 154, [6,98,98], 21, 4, false, true);
  	rep.addAbsTable(4, 238, [104,60,38], 1, 8, false, true);
  	rep.setFontProperties(black,8.5,'helvetica','bold');
  	rep.addText(5.5, 61, 'Nº',false,true); 
  	rep.addText(16, 57, 'Cédula de Identidad',false,true);
  	rep.addText(28, 61, 'o',false,true);
  	rep.addText(19, 65, 'Cédula Escolar',false,true);
  	rep.addText(70, 61, 'Lugar de Nacimiento',false,true);
  	rep.addText(121, 61, 'E.F.',false,true);
  	rep.addText(129, 61, 'Sexo',false,true);
  	rep.addText(141, 57, 'Fecha de',false,true);
  	rep.addText(140, 61, 'Nacimiento',false,true);
  	rep.addText(162.5, 59, 'Resultados de la Evaluación',false,true);
  	rep.addText(138.5, 65, 'Día',false,true);
  	rep.addText(145, 65, 'Mes',false,true);
  	rep.addText(152, 65, 'Año',false,true);
  	rep.addText(161, 65, 'A',false,true);
  	rep.addText(169, 65, 'B',false,true);
  	rep.addText(177, 65, 'C',false,true);
  	rep.addText(185, 65, 'D',false,true);
  	rep.addText(193, 65, 'E',false,true);
  	rep.addText(201, 65, 'P',false,true);
  	rep.addText(5.5, 157, 'Nº',false,true); 
  	rep.addText(52, 157, 'Apellidos',false,true); 
  	rep.addText(151, 157, 'Nombres',false,true); 
  	rep.addText(30, 241, 'Apellidos y Nombres del Docente Guía',false,true); 
  	rep.addText(109, 243, 'Número de C.I.',false,true); 
  	rep.addText(169, 243, 'Firma',false,true);
		rep.addText(130, 151, 'TOTALES',false,true);
  	for(t=0; t<20; t++){
  	  if((t+1)<10){
  	    rep.addText(5.5, 69+t*4, '0'+(t+1),false,true);
  	    rep.addText(5.5, 161+t*4, '0'+(t+1),false,true);
  	  }
  	  else{
  	    rep.addText(5.5, 69+t*4, (t+1)+'',false,true);
  	    rep.addText(5.5, 161+t*4, (t+1)+'',false,true);
  	  }
  	}
  }
  
  function parteV(){
  	rep.setFontProperties(black,9.5,'helvetica','bold');
  	rep.addText(5, 250, 'V. Observaciones:',false,true);
  	rep.addLine(32,250.5,206,250.5,black,0.5,false,true);
  	rep.addLine(4,253.5,206,253.5,black,0.5,false,true);
  	rep.addLine(4,256.5,206,256.5,black,0.5,false,true);
  }
  
  function parteVI(x){
  	rep.setFontProperties(black,9.5,'helvetica','bold');
  	rep.addText(5, 264, 'VI. Fecha de Remisión:',false,true);
  	rep.addText(107, 264, 'VII. Fecha de Recepción:',false,true);
  	rep.addText(21, 275, 'Director(a)',false,true);
  	rep.addText(107, 275, 'Funcionario(a) Receptor(a)',false,true);
  	rep.addText(5, 279, 'Apellidos y Nombres:',false,true);
  	rep.addText(107, 279, 'Apellidos y Nombres:',false,true);
  	rep.addText(5, 291, 'Número de C.I.:',false,true);
  	rep.addText(107, 291, 'Número de C.I.:',false,true);
  	rep.addText(5, 303, 'Firma:',false,true);
  	rep.addText(107, 303, 'Firma:',false,true);
  	rep.addText(67, 294, 'SELLO DEL PLANTEL',false,true);
  	rep.addText(171, 292, 'SELLO DE LA ZONA',false,true);
  	rep.addText(177, 296, 'EDUCATIVA',false,true);
  	rep.addAbsTable(x+4, 260, [100], 1, 12, false, true);
  	rep.addAbsTable(x+4, 272, [60], 2, 4, false, true);
  	rep.addAbsTable(x+4, 280, [60], 1, 8, false, true);
  	rep.addAbsTable(x+4, 288, [60], 1, 4, false, true);
  	rep.addAbsTable(x+4, 292, [60], 1, 8, false, true);
  	rep.addAbsTable(x+4, 300, [60], 1, 4, false, true);
  	rep.addAbsTable(x+4, 304, [60], 1, 8, false, true);
  	rep.addAbsTable(x+64,272, [40], 1, 40, false, true);
  }
    
  function initReport(){
  	rep = new Report('portrait',798,1500);	
  	black = rep.getRGBAObj(0,0,0,0);	
		rep.setPDFFormat('custom','mm', [343, 210]);
		rep.setHeadImage("",false);
		rep.setNoRepeatHead();	
		rep.setPositionIcon(770,0);
    parteI();
    parteII();
    parteIII();
    parteIV();
    parteV();
    parteVI(0);
    parteVI(102);
  }
  initReport();
}
