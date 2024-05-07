var ModeloFichaAlumno = function() {
	this.reporteFicVertical = function() {    
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),10,'courier','bold');
		rep.addText(270, 40, 'REPÚBLICA BOLIVARIANA DE VENEZUELA',false);
		rep.addText(222, 55, 'MINISTERIO DEL PODER POPULAR PARA LA EDUCACIÓN',false);
		rep.addText(294, 70, json('getFicha').data[21][0],false);
        //rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();
		rep.setPositionIcon(650,40);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),14,'helvetica','normal');
		////////////////////////////////////////////////////FRENTE/////////////////////////////////////////////////////////////////////////////////////////
		/*
		 * 
		 * 
		 'id_persona','de_nombre','de_apellido','nu_cedula','fe_nacimiento','edad','de_edo_region','de_ciudad','de_institucion','nu_cedula','de_nombre',
			'de_apellido','de_parentesco','de_profesion','nu_telefono_cell','id_parentesco','id_persona','es_titular'],
		 data : [
           ['1496','1496','1496'],															[0][0]id_persona	
           ['ALEXABETH GERARDINE','ALEXABETH GERARDINE','ALEXABETH GERARDINE'],				[1][0]nombre alumno
           ['ARAUJO MORALES','ARAUJO MORALES','ARAUJO MORALES'],							[2][0]de_apellido alumno
           ['10312867584','10312867584','10312867584'],										[3][0]nu_cedula alumno
           ['2003-06-18','2003-06-18','2003-06-18'],										[4][0]fe_nacimiento alumno
           ['12.0','12.0','12.0'],															[5][0]edad alumno
           ['Zulia','Zulia','Zulia'],														[6][0]de_edo_region alumno
           ['San Francisco','San Francisco','San Francisco'],								[7][0]de_ciudad alumno
           ['Nuevo Ingreso','Nuevo Ingreso','Nuevo Ingreso'],								[8][0]de_institucion alumno
           ['12867584','11390184','12867584'],												[9][0]nu_cedula Madre - [9][1]padre - [9][2]representante
           ['BLANCA DEL CARMEN','ALEX','BLANCA DEL CARMEN'],								[10][0]de_nombre Madre - [10][1]padre - [10][2]representante
           ['MORALES SALAS','ARAUJO','MORALES SALAS'],										[11][0]de_apellido Madre - [11][1]padre - [11][2]representante
           ['MADRE','PADRE','MADRE'],														[12][0]de_parentesco Madre - [12][1]padre - [12][2]representante
           ['Licenciado en Educacion Integral','Obrero','Licenciado en Educacion Integral'],[13][0]de_profesion Madre - [13][1]padre - [13][2]representante
           ['+58','+58','+58'],																[14][0]nu_telefono_cell Madre - [14][1]padre - [14][2]representante	
           ['1','2','1'],																	[15][0]id_parentesco Madre - [15][1]padre - [15][2]representante
           ['33','4524','33'],																[16][0]id_persona  Madre - [16][1]padre - [16][2]representante
           ['SI','NO','SI']																	[17][0]es_titular Madre - [17][1]padre - [17][2]representante
         ]
}
		 */
		
		
		/*
		
	    if(d[0].length=2)
	    	//solo madre y representante
	    else
	    	//madre - padre y representante
		*/
		var d = json('getFicha').data;
		var idxRep = d[0].length - 1;
		var idxMadre=-1;
		var idxPadre=-1;
		for(var i = 0; i<d[0].length-1; i++){
			if(d[15][i]==1)
				idxMadre = i;
			if(d[15][i]==2)
				idxPadre= i;
		}
		////////////////////IMAGEN//DE//FOTOGRAFIA//DEL//ALUMNO/////////////////////////
		rep.addImage(0,05,80,90,'images/pht/'+ d[3][0]+'.jpg',true);
		rep.addLine(2,11,2,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(79,11,79,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(2,11,79,11,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(2,89,79,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		///////////////////IMAGEN//DE//FOTOGRAFIA//DEL//REPRESENTANTE/////////////////////////
		rep.addImage(714,05,791,90,'images/pht/'+ d[9][idxRep]+'.jpg',true);
		rep.addLine(715,11,715,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(715,11,790,11,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(790,11,790,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(715,89,790,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		////////////////////////////////////////////////////////////////////////////////
		rep.addLine(0,99,0,1009,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(792,99,792,1009,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,99,792,99,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(290,99,290,133,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(580,99,580,133,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,134,792,134,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(230,134,230,169,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(340,134,340,169,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(640,134,640,169,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,169,792,169,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,204,792,204,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,239,792,239,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(280,204,280,309,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(385,204,385,344,rep.getRGBAObj(0,0,0,0),1,false);/////////////////
		rep.addLine(635,204,635,309,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,274,792,274,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,309,792,309,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,344,792,344,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,379,792,379,rep.getRGBAObj(0,0,0,0),1,false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),10,'helvetica','normal'); 
		rep.addText(10, 121, 'Nombres: '+d[1][0],false);
		rep.addText(300, 121, 'Apellidos: '+d[2][0],false);
		rep.addText(590, 121, 'Cedula: '+d[3][0],false);
		rep.addText(10, 155, 'Fecha Nacimiento: '+d[4][0],false);
		rep.addText(238, 155, 'Edad: '+d[5][0],false);
		rep.addText(348, 155, 'Lugar: '+d[7][0],false);
		rep.addText(648, 155, 'E. F.: '+d[6][0],false);
		rep.addText(10, 189, 'Plantel de Procedencia: '+d[8][0],false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),7,'helvetica','normal'); 
		if(idxMadre ==-1){
		  rep.addText(10, 225, 'Madre: ',false);
		  rep.addText(289, 225, 'C.i.: ',false);
		  rep.addText(393, 225, 'Profesión: ',false);
		  rep.addText(641, 225, 'Tlf.: ',false);
		}
		else{
		  rep.addText(10, 225, 'Madre: '+d[10][idxMadre]+ ' ' +d[11][idxMadre],false);
		  rep.addText(289, 225, 'C.i.: '+d[9][idxMadre],false);
		  rep.addText(393, 225, 'Profesión: '+d[13][idxMadre],false);
		  rep.addText(641, 225, 'Tlf.: '+d[14][idxMadre],false);
		}
		
		if(idxPadre ==-1){
			rep.addText(10, 259, 'Padre: ',false);
			rep.addText(289, 259, 'C.i.: ',false);
			rep.addText(393, 259, 'Profesión: ',false);
			rep.addText(641, 259, 'Tlf.: ',false);
		}
		else{
			rep.addText(10, 259, 'Padre: '+d[10][idxPadre]+ ' ' +d[11][idxPadre],false);
			rep.addText(289, 259, 'C.i.: '+d[9][idxPadre],false);
			rep.addText(393, 259, 'Profesión: '+d[13][idxPadre],false);
			rep.addText(641, 259, 'Tlf.: '+d[14][idxPadre],false);
		}
		rep.addText(10, 294, 'Represente: '+d[10][idxRep]+' '+d[11][idxRep],false);
		rep.addText(289, 294, 'C.i.: '+d[9][idxRep],false);
		rep.addText(393, 294, 'Profesión: '+d[13][idxRep],false);
		rep.addText(641, 294, 'Tlf.: '+d[14][idxRep],false);
		rep.addText(10, 328, 'Parentesco: '+d[20][idxRep],false);
		rep.addText(393, 328, 'Email: '+d[19][idxRep],false);
		rep.addText(10, 364, 'Dirección: '+d[18][0],false);
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),12,'courier','bold');
		rep.addBar(1,383,790,404,rep.getRGBAObj(210,200,200,0.9),false);
		rep.addText(365, 398, 'RECAUDOS',false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),10,'helvetica','normal'); 
		rep.addLine(0,408,792,408,rep.getRGBAObj(0,0,0,0),1,false);		
		rep.addLine(0,430,792,430,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,452,792,452,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,474,792,474,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,496,792,496,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,518,792,518,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,540,792,540,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,562,792,562,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(340,408,340,562,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(360,408,360,562,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(770,408,770,562,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addText(10, 422, 'Certificado de Promoción',false);
		rep.addText(370, 422, 'Copia de la Cedula del Representante',false);
		rep.addText(10, 444, 'Notas Certificadas',false);
		rep.addText(370, 444, 'Foto del Representante',false);
		rep.addText(10, 466, 'Foto del Estudiante',false);
		rep.addText(370, 466, 'Copia de Cedula del Padre',false);
		rep.addText(10, 488, 'Partida de Nacimiento Original',false);
		rep.addText(370, 488, 'Copia de Cedula de la Madre',false);
		rep.addText(10, 510, 'Copia de Cedula del Estudiante',false);
		rep.addText(370, 510, 'Certificado de bautismo',false);
		rep.addText(10, 532, 'Cardiovascular Vigente',false);
		rep.addText(370, 532, 'Cartón de vacunas',false);
		rep.addText(10, 554, 'Certificado de Conducta',false);
		rep.addText(370, 554, 'Constancia de trabajo del representante',false);
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),12,'courier','bold');
		rep.addBar(1,566,790,586,rep.getRGBAObj(210,200,200,0.9),false);
		rep.addText(350, 581, 'PROSECUSION',false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),10,'helvetica','normal'); 
		rep.addLine(0,590,792,590,rep.getRGBAObj(0,0,0,0),1,false);		
		rep.addLine(0,630,792,630,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,650,792,650,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,670,792,670,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,690,792,690,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,710,792,710,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,730,792,730,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,750,792,750,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,770,792,770,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,790,792,790,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(85,590,85,790,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(340,590,340,790,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(400,590,400,790,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(460,590,460,790,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(640,590,640,790,rep.getRGBAObj(0,0,0,0),1,false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),7,'helvetica','normal'); 
		rep.addText(10, 615, 'AÑO ESCOLAR',false);
		rep.addText(192, 615, 'CONDICIÓN',false);
		rep.addText(351, 615, 'GRADO',false);
		rep.addText(408, 615, 'SECCIÓN',false);
		rep.addText(517, 615, 'FUNCIONARIO',false);
		rep.addText(650, 615, 'FIRMA DEL REPRESENTANTE',false);
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),12,'courier','bold');
		rep.addBar(1,794,790,815,rep.getRGBAObj(210,200,200,0.9),false);
		rep.addText(343, 807, 'OBSERVACIONES',false);
		rep.addLine(0,819,792,819,rep.getRGBAObj(0,0,0,0),1,false);		
		rep.addLine(0,859,792,859,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,889,792,889,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,919,792,919,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,949,792,949,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,979,792,979,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,1009,792,1009,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(85,819,85,1009,rep.getRGBAObj(0,0,0,0),1,false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),7,'helvetica','normal'); 	
		rep.addText(10, 840, 'AÑO ESCOLAR',false);
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	};
	
	this.reporteFicHorizontal = function() {    
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
    	rep.setPositionIcon(960,42);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),44,'courier','bold');
		rep.addText(184,65, 'FICHA DE INSCRIPCIÓN',false);
        rep.setNoRepeatHead();
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),7,'helvetica','normal');
		rep.addText(18, 52, 'Estudiante',false);
		rep.addText(1037, 52, 'Representante',false);
		////////////////////////////////////////////////////FRENTE/////////////////////////////////////////////////////////////////////////////////////////
		var d = json('getFicha').data;
		var idxRep = d[0].length - 1;
		var idxMadre=-1;
		var idxPadre=-1;
		for(var i = 0; i<d[0].length-1; i++){
			if(d[15][i]==1)
				idxMadre = i;
			if(d[15][i]==2)
				idxPadre= i;
		}
		////////////////////IMAGEN//DE//FOTOGRAFIA//DEL//ALUMNO/////////////////////////
		rep.addImage(0,05,82,90,'images/pht/'+ d[3][0]+'.jpg',true);
		rep.addLine(2,11,2,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(79,11,79,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(2,11,79,11,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(2,89,79,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		////////////////////IMAGEN//DE//FOTOGRAFIA//DEL//REPRESENTANTE/////////////////////////
		rep.addImage(1028,05,1108,90,'images/pht/'+ d[9][idxRep]+'.jpg',true);
		rep.addLine(1030,11,1030,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(1107,10,1107,90,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(1030,11,1107,11,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(1030,90,1107,90,rep.getRGBAObj(0,0,0,0),0.4,false);
		////////////////////////////////////////////////////////////////////////////////
		rep.addLine(0,99,1110,99,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(370,99,370,133,rep.getRGBAObj(0,0,0,0),1,false); //I
		rep.addLine(750,99,750,133,rep.getRGBAObj(0,0,0,0),1,false); //I 
		rep.addLine(370,134,370,169,rep.getRGBAObj(0,0,0,0),1,false); //I
		rep.addLine(750,134,750,169,rep.getRGBAObj(0,0,0,0),1,false); //I
		rep.addLine(860,204,860,309,rep.getRGBAObj(0,0,0,0),1,false); //I 
		rep.addLine(0,134,1110,134,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(230,134,230,169,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,169,1110,169,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,204,1110,204,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,239,1110,239,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(280,204,280,309,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(385,204,385,344,rep.getRGBAObj(0,0,0,0),1,false);/////////////////
		rep.addLine(635,204,635,309,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,274,1110,274,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,309,1110,309,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,344,1110,344,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,379,1110,379,rep.getRGBAObj(0,0,0,0),1,false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),10,'helvetica','normal'); 
		rep.addText(10, 121, 'Apellidos: '+d[2][0],false);
		rep.addText(380, 121, 'Nombres: '+d[1][0],false);
		rep.addText(760, 121, 'Cedula: '+d[3][0],false);
		rep.addText(10, 155, 'Fecha Nacimiento: '+d[4][0],false);
		rep.addText(238, 155, 'Edad: '+d[5][0],false);
		rep.addText(380, 155, 'Lugar: '+d[7][0],false);
		rep.addText(760, 155, 'E. F.: '+d[6][0],false);
		rep.addText(10, 189, 'Plantel de Procedencia: '+d[8][0],false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),8,'helvetica','normal'); 
		if(idxMadre ==-1){
		  rep.addText(10, 225, 'Madre: ',false);
		  rep.addText(289, 225, 'C.i.: ',false);
		  rep.addText(393, 225, 'Profesión: ',false);
		  rep.addText(641, 225, 'Tlf.: ',false);
		}
		else{
		  rep.addText(10, 225, 'Madre: '+d[10][idxMadre]+ ' ' +d[11][idxMadre],false);
		  rep.addText(289, 225, 'C.i.: '+d[9][idxMadre],false);
		  rep.addText(393, 225, 'Profesión: '+d[13][idxMadre],false);
		  rep.addText(641, 225, 'Tlf.: '+d[14][idxMadre],false);
		}
		
		if(idxPadre ==-1){
			rep.addText(10, 259, 'Padre: ',false);
			rep.addText(289, 259, 'C.i.: ',false);
			rep.addText(393, 259, 'Profesión: ',false);
			rep.addText(641, 259, 'Tlf.: ',false);
		}
		else{
			rep.addText(10, 259, 'Padre: '+d[10][idxPadre]+ ' ' +d[11][idxPadre],false);
			rep.addText(289, 259, 'C.i.: '+d[9][idxPadre],false);
			rep.addText(393, 259, 'Profesión: '+d[13][idxPadre],false);
			rep.addText(641, 259, 'Tlf.: '+d[14][idxPadre],false);
		}
		rep.addText(10, 294, 'Represente: '+d[10][idxRep]+' '+d[11][idxRep],false);
		rep.addText(289, 294, 'C.i.: '+d[9][idxRep],false);
		rep.addText(393, 294, 'Profesión: '+d[13][idxRep],false);
		rep.addText(641, 294, 'Tlf.: '+d[14][idxRep],false);
		rep.addText(10, 328, 'Parentesco: '+d[20][idxRep],false);
		rep.addText(393, 328, 'Email: '+d[19][idxRep],false);
		rep.addText(10, 364, 'Dirección: '+d[18][0],false);
		rep.addText(870, 225, 'Vive con el alumno:  Si       No   ',false);
		rep.addText(870, 259, 'Vive con el alumno:  Si       No   ',false);
		rep.addText(870, 294, 'Vive con el alumno:  Si       No   ',false);
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),12,'courier','bold');
		rep.addBar(0,383,1110,404,rep.getRGBAObj(210,200,200,0.9),false);
		rep.addText(460, 398, 'CAMBIO DE REPRESENTANTE',false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),9,'helvetica','normal'); 
		//rep.addLine(0,99,1110,99,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addText(34, 424, 'REPRESENTANTE A PARTIR DEL PERIODO ESCOLAR',false);
		rep.addText(436, 424, 'NOMBRE DEL REPRESENTANTE',false);
		rep.addText(700, 424, 'CÉDULA',false);
		rep.addText(896, 424, 'PARENTESCO',false);
		rep.addLine(0,408,1110,408,rep.getRGBAObj(0,0,0,0),1,false);		
		rep.addLine(0,430,1110,430,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,452,1110,452,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,474,1110,474,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,496,1110,496,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,518,1110,518,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(380,408,380,519,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(683,408,683,519,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(770,408,770,519,rep.getRGBAObj(0,0,0,0),1,false);
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),12,'courier','bold');
		rep.addBar(1,522,1110,556,rep.getRGBAObj(210,200,200,0.9),false);
		rep.addText(490, 544, 'PROSECUSION',false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),10,'helvetica','normal'); 
		rep.addLine(0,560,1110,560,rep.getRGBAObj(0,0,0,0),1,false);		
		rep.addLine(0,600,1110,600,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,620,1110,620,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,640,1110,640,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,660,1110,660,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,680,1110,680,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,700,1110,700,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,720,1110,720,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,740,1110,740,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,760,1110,760,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,780,1110,780,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(100,560,100,780,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(240,560,240,780,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(335,560,335,780,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(495,560,495,780,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(730,560,730,780,rep.getRGBAObj(0,0,0,0),1,false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),10,'helvetica','normal'); 
		rep.addText(12, 584, 'Año Escolar',false);
		rep.addText(120, 584, 'Fecha Inscripción',false);
		rep.addText(267, 584, 'Bauche',false);
		rep.addText(380, 584, 'Grado / Año ',false);
		rep.addText(540, 584, 'Firma del Representante',false);
		rep.addText(850, 584, 'Maestra de Aula / Guia',false);
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	};
	
	this.reporteBlanco = function() {    
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),10,'courier','bold');
		rep.addText(270, 40, 'REPÚBLICA BOLIVARIANA DE VENEZUELA',false);
		rep.addText(222, 55, 'MINISTERIO DEL PODER POPULAR PARA LA EDUCACIÓN',false);
		rep.addText(294, 70, 'FICHA DE INSCRIPCIÓN',false);
        //rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();
		rep.setPositionIcon(650,40);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),14,'helvetica','normal');
		////////////////////IMAGEN//DE//FOTOGRAFIA//DEL//ALUMNO/////////////////////////
		//rep.addImage(0,10,80,90,'images/pht/'+ d[3][0]+'.jpg',true);
		rep.addLine(2,11,2,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(79,11,79,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(2,11,79,11,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(2,89,79,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		////////////////////IMAGEN//DE//FOTOGRAFIA//DEL//REPRESENTANTE/////////////////////////
		//rep.addImage(714,05,791,90,'images/pht/'+ d[9][0]+'.jpg',true);
		rep.addLine(715,11,715,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(715,11,790,11,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(790,11,790,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		rep.addLine(715,89,790,89,rep.getRGBAObj(0,0,0,0),0.4,false);
		/////////////////////////////////////////////////////////////////////////////////	
		rep.addLine(0,99,0,1009,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(792,99,792,1009,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,99,792,99,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(290,99,290,133,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(580,99,580,133,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,134,792,134,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(230,134,230,169,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(340,134,340,169,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(640,134,640,169,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,169,792,169,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,204,792,204,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,239,792,239,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(280,204,280,309,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(385,204,385,344,rep.getRGBAObj(0,0,0,0),1,false);/////////////////
		rep.addLine(635,204,635,309,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,274,792,274,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,309,792,309,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,344,792,344,rep.getRGBAObj(0,0,0,0),1,false); 
		rep.addLine(0,379,792,379,rep.getRGBAObj(0,0,0,0),1,false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),10,'helvetica','normal'); 
		rep.addText(10, 121, 'Nombres: ',false);
		rep.addText(300, 121, 'Apellidos: ',false);
		rep.addText(590, 121, 'Cedula: ',false);
		rep.addText(10, 155, 'Fecha Nacimiento: ',false);
		rep.addText(238, 155, 'Edad: ',false);
		rep.addText(348, 155, 'Lugar: ',false);
		rep.addText(648, 155, 'E. F.: ',false);
		rep.addText(10, 189, 'Plantel de Procedencia: ',false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),10,'helvetica','normal'); 
		rep.addText(10, 225, 'Madre: ',false);
		rep.addText(289, 225, 'C.i.: ',false);
		rep.addText(393, 225, 'Profesión: ',false);
		rep.addText(641, 225, 'Tlf.: ',false);
		rep.addText(10, 225, 'Madre: ',false);
		rep.addText(289, 225, 'C.i.: ',false);
		rep.addText(393, 225, 'Profesión: ',false);
		rep.addText(641, 225, 'Tlf.: ',false);
		rep.addText(10, 259, 'Padre: ',false);
		rep.addText(289, 259, 'C.i.: ',false);
		rep.addText(393, 259, 'Profesión: ',false);
		rep.addText(641, 259, 'Tlf.: ',false);
		rep.addText(10, 259, 'Padre: ',false);
		rep.addText(289, 259, 'C.i.: ',false);
		rep.addText(393, 259, 'Profesión: ',false);
		rep.addText(641, 259, 'Tlf.: ',false);
		rep.addText(10, 294, 'Represente: ',false);
		rep.addText(289, 294, 'C.i.: ',false);
		rep.addText(393, 294, 'Profesión: ',false);
		rep.addText(641, 294, 'Tlf.: ',false);
		rep.addText(10, 328, 'Parentesco: ',false);
		rep.addText(393, 328, 'Email: ',false);
		rep.addText(10, 364, 'Dirección: ',false);
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),12,'courier','bold');
		rep.addBar(1,383,790,404,rep.getRGBAObj(210,200,200,0.9),false);
		rep.addText(365, 398, 'RECAUDOS',false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),10,'helvetica','normal'); 
		rep.addLine(0,408,792,408,rep.getRGBAObj(0,0,0,0),1,false);		
		rep.addLine(0,430,792,430,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,452,792,452,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,474,792,474,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,496,792,496,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,518,792,518,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,540,792,540,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,562,792,562,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(340,408,340,562,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(360,408,360,562,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(770,408,770,562,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addText(10, 422, 'Certificado de Promoción',false);
		rep.addText(370, 422, 'Copia de la Cedula del Representante',false);
		rep.addText(10, 444, 'Notas Certificadas',false);
		rep.addText(370, 444, 'Foto del Representante',false);
		rep.addText(10, 466, 'Foto del Estudiante',false);
		rep.addText(370, 466, 'Copia de Cedula del Padre',false);
		rep.addText(10, 488, 'Partida de Nacimiento Original',false);
		rep.addText(370, 488, 'Copia de Cedula de la Madre',false);
		rep.addText(10, 510, 'Copia de Cedula del Estudiante',false);
		rep.addText(370, 510, 'Certificado de bautismo',false);
		rep.addText(10, 532, 'Cardiovascular Vigente',false);
		rep.addText(370, 532, 'Cartón de vacunas',false);
		rep.addText(10, 554, 'Certificado de Conducta',false);
		rep.addText(370, 554, 'Constancia de trabajo del representante',false);
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),12,'courier','bold');
		rep.addBar(1,566,790,586,rep.getRGBAObj(210,200,200,0.9),false);
		rep.addText(350, 581, 'PROSECUSION',false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),10,'helvetica','normal'); 
		rep.addLine(0,590,792,590,rep.getRGBAObj(0,0,0,0),1,false);		
		rep.addLine(0,630,792,630,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,650,792,650,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,670,792,670,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,690,792,690,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,710,792,710,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,730,792,730,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,750,792,750,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,770,792,770,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,790,792,790,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(85,590,85,790,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(340,590,340,790,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(400,590,400,790,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(460,590,460,790,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(640,590,640,790,rep.getRGBAObj(0,0,0,0),1,false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),7,'helvetica','normal'); 
		rep.addText(10, 615, 'AÑO ESCOLAR',false);
		rep.addText(192, 615, 'CONDICIÓN',false);
		rep.addText(351, 615, 'GRADO',false);
		rep.addText(408, 615, 'SECCIÓN',false);
		rep.addText(517, 615, 'FUNCIONARIO',false);
		rep.addText(650, 615, 'FIRMA DEL REPRESENTANTE',false);
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),12,'courier','bold');
		rep.addBar(1,794,790,815,rep.getRGBAObj(210,200,200,0.9),false);
		rep.addText(343, 807, 'OBSERVACIONES',false);
		rep.addLine(0,819,792,819,rep.getRGBAObj(0,0,0,0),1,false);		
		rep.addLine(0,859,792,859,rep.getRGBAObj(0,0,0,0),1,false);
		rep.addLine(0,889,792,889,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,919,792,919,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,949,792,949,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,979,792,979,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(0,1009,792,1009,rep.getRGBAObj(0,0,0,0),1,false);	
		rep.addLine(85,819,85,1009,rep.getRGBAObj(0,0,0,0),1,false);
		rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),7,'helvetica','normal'); 	
		rep.addText(10, 840, 'AÑO ESCOLAR',false);
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	};
};
