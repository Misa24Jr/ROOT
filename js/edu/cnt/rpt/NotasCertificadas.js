function NotasCertificadas(){
  
  var rep = new Object();
  var black = '';
  var arrLetras = ['CERO CERO','CERO UNO','CERO DOS','CERO TRES','CERO CUATRO','CERO CINCO','CERO SEIS','CERO SIETE','CERO OCHO','CERO NUEVE',
  'DIEZ','ONCE','DOCE','TRECE','CATORCE','QUINCE','DIECISEIS','DIECISIETE','DIECIOCHO','DIECINUEVE','VEINTE'];
   
  this.createRep = function(){
  	rep.render();
	setTimeout(rep.printPDF,6000);
  };
   
  this.setDataParteI = function(plan, codPlan){
  	rep.setFontProperties(black,9,'helvetica','normal');
  	rep.addText(134, 18, plan,false,true);
  	rep.addText(150, 22, codPlan,false,true);
  };
  
  this.setDataParteII = function(mencion, codPlantel, nombre, dttoesc, dir, telf, munic, entFed, zonaEdu){
  	 rep.setFontProperties(black,9,'helvetica','normal');
  	 rep.addText(122, 26.5, mencion,false,true);
	 rep.addText(23, 30.5, codPlantel,false,true);
    rep.addText(57, 30.5, nombre,false,true);
    rep.addText(190, 30.5, dttoesc,false,true);
    rep.addText(19.5, 35, dir,false,true);
	 rep.addText(155, 35, telf,false,true);
    rep.addText(20, 39, munic,false,true);
    rep.addText(110, 39, entFed,false,true);
    rep.addText(164, 39, zonaEdu,false,true);
  };
  
  this.setDataParteIII = function(ci, fechaNac, ape, nom, lugarNac, EntFed){
  	rep.setFontProperties(black,9,'helvetica','normal');
  	rep.addText(35, 46.5, ci,false,true);
  	rep.addText(154, 46.5, fechaNac,false,true);
  	rep.addText(20, 51, ape,false,true);
  	rep.addText(122, 51, nom,false,true);
  	rep.addText(37, 55.5, lugarNac,false,true);
  	rep.addText(140, 55.5, EntFed,false,true);
  };
  
  this.setDataParteIV = function(arrPlantel,arrLocalidad, arrEntFed){
  	rep.setFontProperties(black,7,'helvetica','normal');
  	//PLANTEL
  	rep.addText(10.5, 67.5, arrPlantel[0],false,true);
  	rep.addText(10.5, 71.5, arrPlantel[1],false,true);
  	rep.addText(111.5, 63.5, arrPlantel[2],false,true);
  	rep.addText(111.5, 67.5, arrPlantel[3],false,true);
  	rep.addText(111.5, 71.5, arrPlantel[4],false,true);
  	//LOCALIDAD
  	rep.addText(55.5, 67.5, arrLocalidad[0],false,true);
  	rep.addText(55.5, 71.5, arrLocalidad[1],false,true);
  	rep.addText(156.5, 63.5, arrLocalidad[2],false,true);
  	rep.addText(156.5, 67.5, arrLocalidad[3],false,true);
  	rep.addText(156.5, 71.5, arrLocalidad[4],false,true);
  	//ENT. FEDERAL
  	rep.addText(100.5, 67.5, arrEntFed[0],false,true);
  	rep.addText(100.5, 71.5, arrEntFed[1],false,true);
  	rep.addText(201.5, 63.5, arrEntFed[2],false,true);
  	rep.addText(201.5, 67.5, arrEntFed[3],false,true);
  	rep.addText(201.5, 71.5, arrEntFed[4],false,true);
  };
  
  this.setDataParteV = function(pos, grado, arrAsignaturas, arrCalificacion, arrTE, arrMes, arrAnio, arrNPlantel){
  rep.setFontProperties(black,6.8,'helvetica','normal');
  rep.addText(24, 80 + pos*68, grado+'',false,true);		
  	
  for(var t=0; t<arrAsignaturas.length; t++) {
     if(t < 15){  	   
	  	  	rep.addText(4.5, 88 + t*4+pos*68, arrAsignaturas[t]+'',false,true);  	  
			rep.addText(58, 88 + t*4+pos*68, arrCalificacion[t]+'',false,true);
			if(arrCalificacion[t].toUpperCase()==='P') {
				rep.addText(66, 88 + t*4+pos*68, 'PENDIENTE',false,true);
			}
			else if(arrCalificacion[t].toUpperCase()==='C') {
				rep.addText(66, 88 + t*4+pos*68, 'CURSADA',false,true);
			}
			else {
				if(isNaN(parseInt(arrCalificacion[t],10))) {
					rep.addText(66, 88 + t*4+pos*68, arrCalificacion[t]+'',false,true);
				}
				else{					
					rep.addText(66, 88 + t*4+pos*68, arrLetras[parseInt(arrCalificacion[t],10)],false,true);
				}	
			}
			rep.addText(109, 88 + t*4+pos*68, arrTE[t]+'',false,true);
	  	  	rep.addText(115, 88 + t*4+pos*68, arrMes[t]+'',false,true);
	  	  	rep.addText(122.5, 88 + t*4+pos*68, arrAnio[t]+'',false,true);
	  	  	rep.addText(136, 88 + t*4+pos*68, arrNPlantel[t]+'',false,true);
	  	  	if(arrAsignaturas[t].trim()===''){
	  			rep.addText(29, 	88 	+ t*4+pos*68, '***',false,true);  	  
				rep.addText(58, 	88 	+ t*4+pos*68, '***',false,true);
				rep.addText(86, 	88 	+ t*4+pos*68, '***',false,true);
				rep.addText(108, 	88 	+ t*4+pos*68, '***',false,true);
	  	  		rep.addText(115, 	88 	+ t*4+pos*68, '***',false,true);
	  	  		rep.addText(124, 	88 	+ t*4+pos*68, '***',false,true);
	  	  		rep.addText(135, 	88 	+ t*4+pos*68, '***',false,true);
	  	  		break;
	  	  	}
  	  	}
  	 }
  };
  
  this.setDataParteVI = function(director, ci){
  	rep.setFontProperties(black,8.5,'helvetica','normal');
  	rep.addText(145, 92, director,false,true);
  	rep.addText(145, 102, ci, false, true);
  };
  
  this.setDataParteVII = function(director, ci){
  	rep.setFontProperties(black,8.5,'helvetica','normal');
  	rep.addText(145, 195, director,false,true);
  	rep.addText(145, 205, ci, false, true);
  };
  
  function formatZero(v){
  	if(parseInt(v,10) < 10){
  		return "0"+v;
  	}
  	else
  	  return v;
  };
   
  this.setDataParteVIII = function(arrGrado, arrMateria, arrHoras){
  	rep.setFontProperties(black,8.5,'helvetica','normal');
  	for(var t=0; t<arrGrado.length; t++){
      if(t < 5){
        rep.addText(6, 288.5+t*4, arrGrado[t]+'',false,true);
        rep.addText(10, 288.5+t*4, arrMateria[t]+'',false,true);
        rep.addText(97.5, 288.5+t*4, formatZero(arrHoras[t])+'',false,true);
      }
      else{
      	rep.addText(107, 288.5+(t-5)*4, arrGrado[t]+'',false,true);
        rep.addText(111, 288.5+(t-5)*4, arrMateria[t]+'',false,true);
        rep.addText(198.5, 288.5+(t-5)*4, formatZero(arrHoras[t])+'',false,true);
      }
    }
    if(arrGrado.length < 10){
    	for(var t=arrGrado.length; t<10; t++){
      		if(t < 5){
        		rep.addText(6, 288+t*4,	'**',false,true);
        		rep.addText(10, 288+t*4,'						 ***',false,true);
        		rep.addText(97.5, 288+t*4,'**',false,true);
      		}
      		else{
      			rep.addText(107, 288.5+(t-5)*4,  '**',false,true);
        		rep.addText(111, 288.5+(t-5)*4,  '						 ***',false,true);
        		rep.addText(198.5, 288.5+(t-5)*4,'**',false,true);
      		}
    	}	
    }
  };
  
  this.setDataParteIX = function(obs){
	//rep.addParagraph(35, 309, obs, 80, 20, true);
	//this.addText = function(x1,y1,text,mode, pdfCoord, pdfX1, pdfY1, align)
	//this.addParagraph = function(x1, y1, paragraph, longLn, sizeLn, mode)
	let token = obs.split(" ");
	let ln1 = '';
	let ln2 = '';
	let ln3 = '';
	let ln4 = '';
	let ln5 = '';
	let ln6 = '';
	let f1 = false;
	let f2 = false;
	let f3 = false;
	let f4 = false;
	let f5 = false;
	for(let i=0; i<token.length; i++){
		if(ln1.length + token[i].length < 100 && !f1){
			ln1 += token[i].toUpperCase()+' ';
		}
		else{
			f1 = true;
			if(ln2.length + token[i].length < 115 && !f2){
				ln2 += token[i].toUpperCase()+' '; 
			}
			else{
				f2 = true;
				if(ln3.length + token[i].length < 115 && !f3){
					ln3 += token[i].toUpperCase()+' '; 
				}
				else{
					f3 = true;
					if(ln4.length + token[i].length < 115 && !f4){
						ln4 += token[i].toUpperCase()+' '; 
					}
					else{
						f4 = true;
						if(ln5.length + token[i].length < 115 && !f5){
							ln5 += token[i].toUpperCase()+' '; 
						}
						else{
							f5 = true;
							ln6 += token[i].toUpperCase()+' '; 
						}
					}	
				}
			}
		}
	}
	rep.addText(35, 309, ln1,false,true);
	rep.addText(6, 312, ln2,false,true);
	rep.addText(6, 315, ln3,false,true);
	rep.addText(6, 318, ln4,false,true);
	rep.addText(6, 321, ln5,false,true);
	rep.addText(6, 324, ln6,false,true);
  };
  
  this.setDataParteX = function(data){
  	rep.addText(51, 328, data,false,true);
  };
   
  function parteI(){
    //PARTE-I//////////////////////////////////////////////////////////////////////////////////////
	rep.addImage(4,9,356,55,imgEduca.logo_ministerio,true,true);
	rep.setFontProperties(black,13,'helvetica','bold');
	rep.addText(112, 9, 'CERTIFICACIÓN DE CALIFICACIONES',false, true);
	rep.setFontProperties(black,11,'helvetica','bold');
	rep.addLine(112,10,191,10,black,0.8,false,true);//linea -
	rep.addText(122, 14, 'Código del Formato:RR-DEA-03-03',false,true);
	
	rep.setFontProperties(black,9.5,'helvetica','bold');
	rep.addText(106, 18, 'I. Plan de Estudio:',false,true);
	rep.addLine(133,18.3,206,18.3,black,0.5,false, true);//linea plan de estudio
	rep.addText(108, 22, 'Código del Plan de Estudio:',false,true);
	rep.addLine(149,22.5,206,22.5,black,0.5,false,true);//linea codigo del plan de estudio
	////////////////////////////////////////////////////////////////////////////////////////////	
  };
  
  function parteII(){
  	rep.setFontProperties(black,9.5,'helvetica','bold');
  	rep.addText(4, 26.5, 'II. Datos del Plantel o Zona Educativa que emite la Certificación:',false,true);
  	rep.addText(108, 26.5, 'Mención:',false,true);
		rep.addLine(120,26.7,206,26.7,black,0.5,false,true);//linea mencion
		rep.addText(4, 30.5, 'Cod. Plantel:',false,true);
    rep.addLine(23,31,42,31,black,0.5,false,true);//linea cod. plantel
    rep.addText(43.5, 30.5, 'Nombre:',false,true);
    rep.addLine(56,31,175,31,black,0.5,false,true);//linea nombre
    rep.addText(175.5, 30.5, 'Dtto.esc.:',false,true);
    rep.addLine(189.5,31,206,31,black,0.5,false,true);//linea dtto esc.
    rep.addText(4, 35, 'Dirección:',false,true);
		rep.addLine(18.5,35.3,140,35.3,black,0.5,false,true);//linea direccion
		rep.addText(140, 35, 'Teléfono:',false,true);
    rep.addLine(154,35.3,206,35.3,black,0.5,false,true);//linea telf
    rep.addText(4, 39, 'Municipio:',false,true);
    rep.addLine(19,39.5,90,39.5,black,0.5,false,true);//linea municipio
    rep.addText(90.5, 39, 'Ent. Federal:',false,true);
    rep.addLine(109,39.5,140,39.5,black,0.5,false,true);//linea Ent. Federal
    rep.addText(140, 39, 'Zona Educativa:',false,true);
    rep.addLine(163.5,39.5,206,39.5,black,0.5,false,true);//linea Zona Educativa
  };
  
  function parteIII(){
  	rep.setFontProperties(black,9.5,'helvetica','bold');
  	rep.addText(4, 43, 'III. Datos de Identificación del(a) Estudiante:',false,true);
  	rep.addText(4, 46.5, 'Cédula de Identidad:',false,true);    
  	rep.addLine(34,47,120,47,black,0.5,false,true);//linea de cedula
    rep.addText(120, 46.5, 'Fecha de Nacimiento:',false,true);
    rep.addLine(152,47,206,47,black,0.5,false,true);//linea fecha nac.
    rep.addText(4, 51, 'Apellidos:',false,true);
	rep.addLine(18.5,51.5,105,51.5,black,0.5,false,true);//linea apellidos
	rep.addText(106, 51, 'Nombres:',false,true);
	rep.addLine(120,51.5,206,51.5,black,0.5,false,true);//linea nombres
	rep.addText(4, 55.5, 'Lugar de Nacimiento:',false,true);
    rep.addLine(35.5,56,110,56,black,0.5,false,true);//linea lugar nac.
    rep.addText(111, 55.5, 'Ent.Federal o País:',false,true);
    rep.addLine(139,56,206,56,black,0.5,false, true);//linea Ent. Fed. o pais 
  };
   
  
  function parteIV(){
  	rep.setFontProperties(black,9.5,'helvetica','bold');
  	rep.addText(4, 59.5, 'IV. Planteles donde cursó estos estudios:',false,true);
  	rep.addAbsTable(105, 56.5, [5.5,45,45,5.5], 4, 4, false, true);
  	rep.addAbsTable(4, 60.5, [5.5,45,45,5.5], 3, 4, false, true);
  	rep.setFontProperties(black,8.5,'helvetica','bold');
  	rep.addText(5.5, 63.5, 'Nº',false,true); 
  	rep.addText(5.5, 67.5, '1',false,true);
  	rep.addText(5.5, 71.5, '2',false,true);
  	rep.addText(10, 63.5, 'Nombre del Plantel',false,true);
  	rep.addText(56, 63.5, 'Localidad',false,true);
  	rep.addText(99.8, 63.5, 'E.F.',false,true);
  	rep.addText(106.3, 59.5, 'Nº',false,true); 
  	rep.addText(106.3, 63.5, '3',false,true);
  	rep.addText(106.3, 67.5, '4',false,true);
  	rep.addText(106.3, 71.5, '5',false,true);
  	rep.addText(111, 59.5, 'Nombre del Plantel',false,true);
  	rep.addText(157, 59.5, 'Localidad',false,true);
  	rep.addText(200.5, 59.5, 'E.F.',false,true);
  };
  
  function tablaMaterias(y){
  	rep.addAbsTable(4, y, [50.5, 53], 1, 4, false, true);
  	rep.addAbsTable(4, y + 4, [50.5, 11, 42], 1, 4, false, true);
  	rep.addAbsTable(107.5, y, [5], 1, 8, false, true);
  	rep.addAbsTable(112.5, y, [18], 1, 4, false, true);
  	rep.addAbsTable(112.5, y+4, [8,10], 1, 4, false, true);
  	rep.addAbsTable(130.5, y, [12], 1, 8, false, true);
  	for(var t=0; t < 15; t++){
  	  rep.addAbsTable(4, y + 8 + 4*t, [50.5, 11, 42, 5, 8, 10, 12], 1, 4, false, true);
  	}
  	rep.setFontProperties(black,8.5,'helvetica','bold');
  	rep.addText(5.5, y+3, 'Año o Grado:',false,true);
  	rep.addText(73, y+3, 'Calificación',false,true);
  	rep.addText(108, y+7, 'T-E',false,true);
  	rep.addText(117.5, y+3, 'Fecha',false,true);
  	rep.addText(132, y+3, 'Plantel',false,true);
  	rep.addText(136, y+7, 'Nº',false,true);
  	rep.addText(114, y+7, 'Mes',false,true);
  	rep.addText(122.5, y+7, 'Año',false,true);
  	rep.addText(21, y+7, 'Asignaturas',false,true);
  	rep.addText(56.5, y+7, 'En Nº',false,true);
  	rep.addText(80.5, y+7, 'En Letras',false,true);
  }
  
  function parteV(){
  	rep.setFontProperties(black,9.5,'helvetica','bold');
  	rep.addText(4, 76, 'V. Pensum de estudios:',false,true);
  	tablaMaterias(77);
  	tablaMaterias(145);
  	tablaMaterias(213);
  };  	
  
  function tablaPlantelVI(y,tit,x){
  	rep.setFontProperties(black,9.5,'helvetica','bold');
  	rep.addAbsTable(144, y, [62], 1, 4, false, true);
  	rep.addAbsTable(144, y+4, [62], 1, 8, false, true);
  	rep.addAbsTable(144, y+12, [62], 1, 8, false, true);
  	rep.addAbsTable(144, y+20, [62], 1, 4, false, true);
  	rep.addAbsTable(144, y+24, [62], 1, 4, false, true);
  	rep.addAbsTable(144, y+28, [62], 1, 4, false, true);
  	rep.addAbsTable(144, y+32, [62], 1, 8, false, true);
  	rep.addAbsTable(144, y+40, [62], 1, 51, false, true);
  	rep.addAbsTable(144, y+91, [62], 1, 12, false, true);
  	rep.addText(x, y+3, tit,false,true);
  	rep.setFontProperties(black,8.5,'helvetica','bold');
  	rep.addText(145, y+9, 'Apellidos y Nombres del Director(a):',false,true);
  	rep.addText(145, y+23, 'Número de C.I.:',false,true);
  	rep.addText(145, y+31, 'Firma:',false,true);
  	rep.addText(167, y+65, 'SELLO DEL',false,true);
  	rep.addText(168.5, y+69, 'PLANTEL',false,true);
  	rep.addText(157, y+96, 'Para efectos de su validez',false,true);
  	rep.addText(164, y+100, 'a nivel estadal.',false,true);
  };
  
  function tablaPlantelVII(y,tit,x){
	  	rep.setFontProperties(black,9.5,'helvetica','bold');
	  	rep.addAbsTable(144, y, [62], 1, 4, false, true);
	  	rep.addAbsTable(144, y+4, [62], 1, 8, false, true);
	  	rep.addAbsTable(144, y+12, [62], 1, 8, false, true);
	  	rep.addAbsTable(144, y+20, [62], 1, 4, false, true);
	  	rep.addAbsTable(144, y+24, [62], 1, 4, false, true);
	  	rep.addAbsTable(144, y+28, [62], 1, 4, false, true);
	  	rep.addAbsTable(144, y+32, [62], 1, 8, false, true);
	  	rep.addAbsTable(144, y+40, [62], 1, 51, false, true);
	  	rep.addAbsTable(144, y+91, [62], 1, 12, false, true);
	  	rep.addText(x, y+3, tit,false,true);
	  	rep.setFontProperties(black,8.5,'helvetica','bold');
	  	rep.addText(145, y+9, 'Apellidos y Nombres del Director(a):',false,true);
	  	rep.addText(145, y+23, 'Número de C.I.:',false,true);
	  	rep.addText(145, y+31, 'Firma:',false,true);
	  	rep.addText(167, y+65, 'SELLO DE LA',false,true);
	  	rep.addText(164, y+69, 'ZONA EDUCATIVA',false,true);
	  	rep.addText(152.5, y+94, 'Para efectos de  su  validez a nivel',false,true);
	  	rep.addText(151.5, y+97, 'nacional e internacional y cuando se',false,true);
	  	rep.addText(150.5, y+100, 'trate de estudios libres o equivalentes',false,true);
	  	rep.addText(166, y+102.5, 'sin escolaridad',false,true);
  };

  function parteVIyVII(){
  	rep.setFontProperties(black,9.5,'helvetica','bold');
  	tablaPlantelVI(75, 'VI. Plantel',167.5);
  	tablaPlantelVII(178, 'VII. ZONA EDUCATIVA',144.5);
  };
  
  function parteVIII(){
  	rep.setFontProperties(black,9.5,'helvetica','bold');
  	rep.addText(4, 284.5, 'VIII. Programas Aprobados en Educación para el Trabajo:GRADO / NOMBRE / HORAS ESTUDIANTE SEMANAL',false,true);
    rep.addAbsTable(4, 285.5, [5, 84, 12, 5, 84, 12], 5, 4, false, true);
  };
  
  function parteIX(){
  	rep.setFontProperties(black,9.5,'helvetica','bold');
  	rep.addText(4, 309, 'IX. Observaciones:',false,true);
  	rep.addLine(32,309.5,206,309.5,black,0.5,false,true);
  	rep.addLine(4,312.5,206,312.5,black,0.5,false,true);
  	rep.addLine(4,315.5,206,315.5,black,0.5,false,true);
  	rep.addLine(4,318.5,206,318.5,black,0.5,false,true);
  	rep.addLine(4,321.5,206,321.5,black,0.5,false,true);
  	rep.addLine(4,324.5,206,324.5,black,0.5,false,true);
  };
  
  function parteX(){
  	rep.setFontProperties(black,9.5,'helvetica','bold');
  	rep.addText(4, 328, 'X. Lugar y fecha de expedición',false,true);
  	rep.addLine(50,328.5,206,328.5,black,0.5,false,true);
  	rep.addText(4, 332, 'Timbre Fiscal:',false,true);
  	rep.setFontProperties(black,7,'helvetica','normal');
  	rep.addText(26, 332, 'Este documento no tiene validez si no se le colocan en la parte posterior timbres fiscales por Bs. 30% de la U.T.',false,true);
  };
  	
    this.initReport = function(){
	  	rep = new Report('portrait',798,1500);	
	  	rep.setPDFFormat('custom','mm', [343, 210]);
	  	black = rep.getRGBAObj(0,0,0,0);	
		rep.setHeadImage("",false);
		rep.setNoRepeatHead();
		rep.setPositionIcon(770,0);
	    parteI();
	    parteII();
	    parteIII();
	    parteIV();
	    parteV();
	    parteVIyVII();
	    parteVIII();
	    parteIX();
	    parteX();
  }
}
