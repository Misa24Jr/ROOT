function ResumenFinalInicial(){  
  var rep = new Object();
  var black = '';
   
  this.createRep = function(){
  	rep.render();
	setTimeout(rep.printPDF,1000);
  };
   
  this.setDataParteI = function(tipo,ano, mesano){
  	rep.setFontProperties(black,8,'helvetica','bold');
  	if(tipo===0)
  	  rep.addText(166, 20.5, "X",false,true);
	else
		rep.addText(195.3, 20.5, "X",false,true);
	rep.addText(125, 23.5, ano,false,true);
	rep.addText(173, 23.5, mesano,false,true);
  };
  
  this.setDataParteII = function(codPlantel, nombre, dttoesc, dir, telf, munic, entFed, zonaEdu, nombreDir, ciDir){
	rep.setFontProperties(black,9.5,'helvetica','normal');
  	rep.addText(23, 28.3, codPlantel,false,true);
	rep.addText(57, 28.3, nombre,false,true);
    rep.addText(190, 28.3, dttoesc,false,true);
    rep.addText(19.5, 32, dir,false,true);
	rep.addText(155, 32, telf,false,true);
    rep.addText(20, 35.5, munic,false,true);
    rep.addText(110, 35.5, entFed,false,true);
    rep.addText(164, 35.5, zonaEdu,false,true);
	rep.addText(21, 39, nombreDir,false,true);
	rep.addText(146, 39, ciDir,false,true);
  };
  
  this.setDataParteIII = function(secc, nes, nep){
  	rep.setFontProperties(black,9.5,'helvetica','normal');
  	rep.addText(17, 47, secc,false,true);
  	rep.addText(125, 47, nes,false,true);
  	rep.addText(196, 47, nep,false,true);
  };
  
  this.setDataParteIV = function(arrCi, arrLN, arrEF, arrSexo, arrDia, arrMes, arrAnio, arrA, arrB, arrC, arrD, arrE, arrF, arrG, arrApe, arrNombres, docenteGuia, ciDocenteGuia, tipoEval){
  	rep.setFontProperties(black,8.5,'helvetica','normal');
  	for(var t=0; t<arrCi.length; t++){
  	  rep.addText(10.5, 69 + t*(4), arrCi[t],false,true);
  	  rep.addText(50, 69 + t*(4), arrLN[t],false,true);	
  	  rep.addText(120, 69 + t*(4), arrEF[t],false,true);
  	  rep.addText(129, 69 + t*(4), arrSexo[t],false,true);
  	  rep.addText(138, 69 + t*(4), arrDia[t],false,true);
  	  rep.addText(145, 69 + t*(4), arrMes[t],false,true);
  	  rep.addText(151.5, 69 + t*(4), arrAnio[t],false,true);
  	  rep.addText(160.5, 69 + t*(4), arrA[t],false,true);
  	  rep.addText(167.5, 69 + t*(4), arrB[t],false,true);
  	  rep.addText(175, 69 + t*(4), arrC[t],false,true);
  	  rep.addText(181.5, 69 + t*(4), arrD[t],false,true);
  	  rep.addText(189, 69 + t*(4), arrE[t],false,true);
  	  rep.addText(196, 69 + t*(4), arrF[t],false,true);
	  rep.addText(202, 69 + t*(4), arrG[t],false,true);
  	  rep.addText(11, 161+ t*(4), arrApe[t],false,true);
  	  rep.addText(109, 161+ t*(4), arrNombres[t],false,true);
  	}
  	rep.addText(5, 245, docenteGuia,false,true);
  	rep.addText(129, 243, ciDocenteGuia,false,true);
	rep.addText(184, 52, tipoEval,false,true);
  };
  
  this.setDataParteV = function(obs){
     rep.addJustParagraph(32, 250, obs, 175, 3, [0],false, true);
  };
  
  this.setDataParteVI = function(fecha, nombre, ci){
    rep.setFontProperties(black,8.5,'helvetica','normal');
  	rep.addText(40, 264, fecha,false,true);
  	rep.addText(5.5, 285, nombre,false,true);
  	rep.addText(5.5, 297,ci,false,true);
  };
     
  function parteI(){
    //PARTE-I//////////////////////////////////////////////////////////////////////////////////////
		rep.addImage(3,1,370,50,imgEduca.logo_ministerio,true,true);
		rep.setFontProperties(black,13,'helvetica','bold');
		rep.addText(112, 9, 'RESUMEN FINAL DE EVALUACIÓN INICIAL',false, true);
		rep.setFontProperties(black,8,'helvetica','bold');
		rep.addLine(112,10,202,10,black,0.5,false,true);//linea -	
		
		rep.addText(129, 14, '(Maternal y Preescolar) Plan de Estudio 20.000',false,true);
		rep.addText(137, 17, 'Código del Formato:RR-DEA-07-04',false,true);
		
		rep.setFontProperties(black,8,'helvetica','bold');
		rep.addText(114, 20.3, 'I. TIPO DE MATRICULA: CONVENCIONAL ( ) NO CONVENCIONAL ( )',false,true);
		rep.addText(108, 23.3, 'Año Escolar:                   Mes y Año de la evaluación: ' ,false,true);
		rep.addLine(125,24,137,24,black,0.5,false,true);//linea -
		rep.addLine(172,24,198,24,black,0.5,false,true);//linea -	
	////////////////////////////////////////////////////////////////////////////////////////////	
  }
  
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
	rep.addLine(18.5,32.3,140,32.3,black,0.5,false,true);//linea direccion
	rep.addText(140, 32.5, 'Teléfono:',false,true);
    rep.addLine(154,32.3,206,32.3,black,0.5,false,true);//linea telf
    rep.addText(4, 35.5, 'Municipio:',false,true);
    rep.addLine(19,36,90,36,black,0.5,false,true);//linea municipio
    rep.addText(90.5, 36, 'Ent. Federal:',false,true);
    rep.addLine(109,36,140,36,black,0.5,false,true);//linea Ent. Federal
    rep.addText(140, 35.5, 'Zona Educativa:',false,true);
    rep.addLine(163.5,36,206,36,black,0.5,false,true);//linea Zona Educativa
	rep.addText(4, 39, 'Director(a):',false,true);
	rep.addLine(20,39.5,140,39.5,black,0.5,false,true);//linea director
	rep.addText(140, 39, 'C.I.:',false,true);
	rep.addLine(146,40,206,40,black,0.5,false,true);//linea ci
  }
  
  function parteIII(){
	rep.setFontProperties(black,9.5,'helvetica','bold');
  	rep.addText(4, 43.5, 'III. Identificación del Curso:',false,true);
  	rep.addText(4, 47, 'Sección:',false,true);    
  	rep.addLine(16,47.5,67,47.5,black,0.5,false,true);//linea de seccion
    rep.addText(68, 47, 'Número de Estudiantes de la Sección:',false,true);
	rep.addLine(124,47.5,136,47.5,black,0.5,false,true);//linea numero de estudiantes seccion
	rep.addText(137, 47, 'Número de Estudiantes en esta Página:',false,true);
	rep.addLine(195,47.5,206,47.5,black,0.5,false,true);//linea numero de estudiantes pagina
  }
  
  
  function parteIV(){
  	rep.setFontProperties(black,9.5,'helvetica','normal');
	rep.setFontProperties(black,9.5,'helvetica','bold');
	rep.addText(4, 52, 'IV. Matrícula Final:',false,true);
	rep.addText(154, 52, 'Tipo de Evaluación:',false,true);
		
  	rep.addAbsTable(4, 54, [6,39,70,9,9,21,48], 1, 12, false, true);
  	rep.addAbsTable(137, 62, [7,7,7,7,7,7,7,7,7,6], 1, 4, false, true);
  	rep.addAbsTable(4, 66, [6,39,70,9,9,7,7,7,7,7,7,7,7,7,6], 20, 4, false, true);
  	rep.addAbsTable(4, 146, [154,7,7,7,7,7,7,6], 1, 8, false, true);
  	rep.addAbsTable(4, 154, [6,98,98], 21, 4, false, true);
  	rep.addAbsTable(4, 238, [104,60,38], 1, 8, false, true);
	rep.addAbsTable(158, 54, [21,21], 1, 8, false, true);
		
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
  	
	rep.addText(165, 57, 'Edad',false,true);
	rep.addText(163, 60, 'Maternal',false,true);
	rep.addText(186, 57, 'Edad',false,true);
	rep.addText(183, 60, 'Preescolar',false,true);
	rep.addText(200.5, 57, 'Ing.',false,true);
	rep.addText(202, 60, 'P',false,true);
  	rep.addText(138.5, 65, 'Día',false,true);
  	rep.addText(145, 65, 'Mes',false,true);
  	rep.addText(152, 65, 'Año',false,true);
  	
	rep.setFontProperties(black,6.5,'helvetica','bold');
	rep.addText(160, 63.8, '0A.',false,true);
	rep.addText(159, 65.5, '11 M.',false,true);
	rep.addText(167, 63.8, '1A.',false,true);
	rep.addText(166, 65.5, '11 M.',false,true);
	rep.addText(174, 63.8, '2A.',false,true);
	rep.addText(173, 65.5, '11 M.',false,true);
		
	rep.addText(181, 63.8, '3A.',false,true);
	rep.addText(180, 65.5, '11 M.',false,true);
	rep.addText(188, 63.8, '4A.',false,true);
	rep.addText(187, 65.5, '11 M.',false,true);
	rep.addText(195, 63.8, '5A.',false,true);
	rep.addText(194, 65.5, '0+.',false,true);		

	rep.setFontProperties(black,8.5,'helvetica','bold');
	rep.addText(140, 151, 'TOTALES',false,true);
  	rep.addText(5.5, 157, 'Nº',false,true); 
  	rep.addText(52, 157, 'Apellidos',false,true); 
  	rep.addText(151, 157, 'Nombres',false,true); 
  	rep.addText(30, 241, 'Apellidos y Nombres del Docente Guía',false,true); 
  	rep.addText(109, 243, 'Número de C.I.',false,true); 
  	rep.addText(169, 243, 'Firma',false,true); 
  	
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
