function RegistroTitulo(){
  var rep = new Report('portrait',798,1500);
  var black = rep.getRGBAObj(0,0,0,0);
  var data = {};
  var displace = 18;
  
  function anioCursado(x, y, str) {
    var position = ['PRIMERO','SEGUNDO','TERCERO','CUARTO','QUINTO','SEXTO','SEPTIMO','OCTAVO','NOVENO'];
    var capNum = /(\d+)/g;
    if(position[str.match(capNum) - 1].length < 7)
      rep.addText(167, 251 + displace, position[str.match(capNum) - 1] +' ',false,true);
    else
      rep.addText(165, 251 + displace, position[str.match(capNum) - 1] +' ',false,true);
  }
  
  function writeObs(x,y,datObs){
	    var long = datObs.length;
	    var ln1 = "";
	    var ln2 = "";
	    var flag = true;
	    var arr = datObs.split(" ");
	    for(var i = 0; i < arr.length; i++){
	      if (ln1.length + arr[i].length < 140 && flag)
	        ln1 += arr[i] + ' ';
	      else{
	      	flag= false;
	         ln2 += arr[i] + ' ';
	      }
	    }
    	 rep.addText(x, y + displace, ln1,false,true);
       rep.addText(x - 27, y + 5 + displace, ln2,false,true);
  }
  function parteI(){
    rep.addImage(15, 1 + displace, 354, 70 + displace,imgEduca.logo_ministerio,true);
    rep.setFontProperties(black,13,'helvetica','bold');
    rep.addText(112, 8 + displace, 'HOJA DE REGISTRO TÍTULO ',false, true);
    rep.addLine(112, 9.3 + displace,172,9.3 + displace,black,0.5,false, true);
    rep.setFontProperties(black,9,'helvetica','bold');
    rep.addText(123, 13.5 + displace, 'Código del Formato: EMG' ,false,true);
	 rep.addLine(123,14.8 + displace,164,14.8 + displace,black,0.5,false, true);
    rep.addText(95, 18.5 + displace, 'I. Tipo de Registro: ',false,true);
	 rep.addText(122, 18.5 + displace, data.tipo_reg + ' ',false,true);
	 rep.addLine(122,19 + displace,134,19 + displace,black,0.5,false, true);
    rep.addText(40, 22.5 + displace, 'Mes y Año de Egreso: ' + data.mes_anioEgreso,false,true);
    rep.addLine(71,23.3 + displace,100,23.3 + displace,black,0.5,false, true);
    rep.addText(102, 22.5 + displace, 'Lugar y Fecha de Expedición: ' + data.lugar_fechaExp ,false,true);
    rep.addLine(144.5,23.3 + displace,201,23.3 + displace,black,0.5,false, true);
  };
  function parteII(){
    rep.addText(4, 27.5 + displace, 'II. Datos del Plantel:',false,true);
	 rep.setFontProperties(black,9,'helvetica','normal');
  /***************************** Linea 1 *****************************/
	 rep.addText(4, 33 + displace, 'Código: ' + data.codigoP,false,true);
    rep.addLine(14,33.5 + displace,44,33.5 + displace,black,0.5,false,true);															//linea cod. plantel
    rep.addText(60, 33 + displace, 'Nombre: '+ data.nombreP,false,true);
    rep.addLine(72,33.5 + displace,201,33.5 + displace,black,0.5,false,true);															//linea nombre

  /***************************** Linea 2 *****************************/
    rep.addText(4, 38 + displace, 'Dirección: '+ data.direccionP,false,true);
    rep.addLine(17,38.3 + displace,110,38.3 + displace,black,0.5,false,true);													//linea direccion
  	 rep.addText(125, 38 + displace, 'Teléfono: '+ data.telefono,false,true);
    rep.addLine(137,38.3 + displace,170,38.3 + displace,black,0.5,false,true);													//linea telf

	/***************************** Linea 3 *****************************/
    rep.addText(4, 43 + displace, 'Municipio: '+ data.municipioP,false,true);
    rep.addLine(17,43.5 + displace,44,43.5 + displace,black,0.5,false,true);														//linea municipio
    rep.addText(55, 43 + displace, 'Entidad Federal: '+ data.entidad_fedeP,false,true);
    rep.addLine(77,43.5 + displace,115,43.5 + displace,black,0.5,false,true);													//linea Ent. Federal
    rep.addText(125, 43 + displace, 'Zona Educativa: '+ data.zona_edu,false,true);
    rep.addLine(146,43.5 + displace,175,43.5 + displace,black,0.5,false,true);
  };

  function parteIII(){
    rep.setFontProperties(black,9,'helvetica','bold');
	 rep.addText(4, 48.5 + displace, 'III.Identificación de la Evaluación:',false,true);
    rep.addText(4, 53 + displace, 'Final: ' + data.final,false,true);
    rep.addLine(12,53.5 + displace,44,53.5 + displace,black,0.5,false,true);
    rep.addText(55,53 + displace, 'Revisión: ' + data.revision,false,true);
    rep.addLine(68,53.5 + displace,90,53.5 + displace,black,0.5,false,true);
    rep.addText(100,53 + displace, 'Pendiente: ' + data.mat_pend,false,true);
    rep.addLine(126,53.5 + displace,138,53.5 + displace,black,0.5,false,true);
	 rep.addText(140,53 + displace, 'Otra: ' + data.otra,false,true);
    rep.addLine(146.5,53.5 + displace,180,53.5 + displace,black,0.5,false,true);
  };
	function parteIV(){
    rep.addText(4, 58 + displace, 'IV.Datos del Título que Registra:',false,true);
    rep.addText(4, 63 + displace, 'Nombre del Documento: ' + data.nomb_doc,false,true);
    rep.addLine(40.5,63.5 + displace,55,63.5 + displace,black,0.5,false,true);
    rep.addText(150, 63 + displace, 'Código: ' + data.codigo,false,true);
	 rep.addLine(162,63.5 + displace,170,63.5 + displace,black,0.5,false,true);

	}

  function parteV(){
		function writeMat(x,y,datMat,alumnoIni, alumnoFin){
			var dataMat = datMat;
			var long = 0; 
			var ln1 = "";
			var ln2 = "";
			var arr = [];

			rep.setFontProperties(black,6,'helvetica','normal');
			for(var i = alumnoIni; i < alumnoFin; i++){
				ln2 = "";
				ln1 = "";
				var fSts = false;
				long = dataMat[i].length;
				if (long <= 15){
					ln1 = dataMat[i];
				}else{
					arr = dataMat[i].split(" ");
					for(var j = 0; j < arr.length; j++ ){
						if (ln1.length + arr[j].length < 15 && fSts===false){
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
				y += 5;
			}	
		}

	  
  	rep.addText(4, 68 + displace, 'V.Cantidad de Estudiantes a los cuales se les otorgó el Titulo:',false,true);
  /* Numeración de las Columnas */
    y=88 + displace;
    for(var i = 1; i <= 25; i++){
  	  if(i < 10)
        rep.addText(5, y, '0' + i ,false,true);
      else
        rep.addText(5, y, '' + i ,false,true);
      y+=5;
    }
	 rep.addText(5, 79 + displace, 'N°',false,true);
    rep.addText(12, 77 + displace, 'Serial del\n    Título',false,true);
    rep.addText(31, 77 + displace, 'Cédula de\n Identidad',false,true);
    rep.addText(63, 78 + displace, 'Nombres y Apellidos',false,true);
    rep.setFontProperties(black,7.5,'helvetica','bold');
    rep.addText(109.5, 76 + displace, 'Lugar de Nacimiento',false,true);
    rep.addText(135, 74 + displace, '  Fecha de\nNacimiento',false,true);
    rep.setFontProperties(black,9,'helvetica','bold');
    rep.addText(163, 79 + displace, 'Observaciones',false,true);
    rep.setFontProperties(black,8,'helvetica','bold');
    rep.addText(109.5, 83 + displace, 'EF',false,true);
    rep.addText(117, 83 + displace, 'Municipio',false,true);
	 rep.setFontProperties(black,6,'helvetica','bold');
    rep.addText(135, 82 + displace, 'DIA',false,true);
    rep.addText(139.5, 82 + displace, 'MES',false,true);
    rep.addText(144.5, 82 + displace, 'AÑO',false,true);

    rep.addAbsTable(4,72 + displace, [5,20,20,60], 1, 12, false, true);
    rep.addAbsTable(109,72 + displace, [25], 1, 8, false, true);
    rep.addAbsTable(109,80 + displace, [5,20], 1, 4, false, true);
    rep.addAbsTable(134,72 + displace, [15], 1, 5, false, true);
    rep.addAbsTable(134,77 + displace, [5,5,5], 1, 7, false, true);
    rep.addAbsTable(149,72 + displace, [56], 1, 12, false, true);
    rep.addAbsTable(4,84 + displace, [5,20,20,60,5,20,5,5,5,56], 25, 5, false, true);
	 rep.addAbsTable(4,209 + displace, [105,10,23,63], 1, 5, false, true);
	 rep.setFontProperties(black,7,'helvetica','normal');
    y = 88 + displace;

    writeMat(109.5, 103.5, data.municipio, data.page*25, data.totalRegPage[data.page]+data.page*25);
	 for(var i = data.page*25; i < data.totalRegPage[data.page]+data.page*25; i++){
      /*********************** Data Serial del titulo***********************/
      rep.addText(10, 	 y, '' + data.serial_titulo[i],false,true);
      /*********************** Data Cedula***********************/
     	rep.addText(31,    y, '' + data.cedula_ide[i],false,true);
     	/*********************** Data Nombres y Apellidos ***********************/
      rep.addText(50,    y, '' + data.nomb_ape[i].substr(0,41),false,true);
      /*********************** Data Entidad Federal ***********************/
      rep.addText(110.5, y, '' + data.ent_federal[i],false,true);
      /*********************** Data Municipio ***********************/
      //rep.addText(114.5, y, '' + data.municipio[i],false,true);
      /*********************** Data Dia ***********************/
      rep.addText(135,   y, '' + data.dia[i],false,true);
      /*********************** Data Mes ***********************/
      rep.addText(140, y, '' + data.mes[i],false,true);
      /*********************** Data Año ***********************/
      rep.addText(144, y, '' + data.anio[i],false,true);
      /*********************** Data Observaciones ***********************/
      var l1 = ''; var l2 = ''; var arrObs = data.obse[i].split(' ');  var flg = false;
      for(var k=0; k < arrObs.length; k++){
      	if(l1.length + arrObs[k].length < 54 && flg===false){
      		l1+=arrObs[k]+' ';
      	}
      	else{
      		l2+=arrObs[k]+' ';
      		flg=true;alert
      	}
      		
      }
      
      if(l2==='')
        rep.addText(150, y-0.5 , l1, false,true);
      else{
        rep.addText(150, y-2, l1, false,true);
        rep.addText(150, y, l2, false, true)
      }
    	y+=5;
	 }
	 rep.addText(5, 213 + displace, 'TOTAL DE TITULOS EMITIDOS: '+data.totalRegPage[data.page],false,true);
	 rep.addText(111.5, 213 + displace, '' + 'AÑO:', false,true);
    rep.addText(121.5, 213 + displace, '' + data.grado,false,true);
    rep.addText(143, 213 + displace, 'SECCIÓN: ' + data.seccion,false,true);
  };

  function parteVI(){
	 rep.addAbsTable(4,214 + displace, [201], 1, 5, false, true);
	 rep.setFontProperties(black,9,'helvetica','bold');
	 rep.addText(5,218 + displace, 'VI. Autoridades Educativas:',false,true);
    rep.addAbsTable(4,219 + displace, [201], 1, 5, false, true);
    rep.addText(5, 223 + displace, 'DIRECTOR(A) DEL PLANTEL:',false,true);
    rep.addAbsTable(4,224 + displace, [110,35,56], 1, 5, false, true);
    rep.setFontProperties(black,9,'helvetica','normal');
    rep.addText(5, 228 + displace, 'Apellidos y Nombres: ' + data.nomb_dir,false,true);
    rep.addText(115, 228 + displace, 'C.I: ' + data.ci_dir,false,true);
    rep.addText(150, 228 + displace, 'FIRMA:',false,true);
	 rep.setFontProperties(black,9,'helvetica','bold');
    rep.addAbsTable(4,229 + displace, [201], 1, 5, false, true);
    rep.addText(5, 233 + displace, 'COORDINADORA(A) DE CONTROL DE ESTUDIOS:',false,true);
    rep.addAbsTable(4,234 + displace, [110,35,56], 1, 5, false, true);
	 rep.setFontProperties(black,9,'helvetica','normal');
    rep.addText(5, 238 + displace, 'Apellidos y Nombres: ' + data.nom_ctrlEst,false,true);
    rep.addText(115, 238 + displace, 'C.I: ' + data.ci_ctrlEst,false,true);
    rep.addText(150, 238 + displace, 'FIRMA:',false,true);
	 rep.setFontProperties(black,9,'helvetica','bold');
    rep.addAbsTable(4,239 + displace, [201], 1, 5, false, true);
    rep.addText(5, 243 + displace, 'FUNCIONARIO DESIGNADO POR EL MINISTERIO DEL PODER POPULAR PARA LA EDUCACION:',false,true);
    rep.addAbsTable(4,244 + displace, [110,35,56], 1, 5, false, true);
    rep.setFontProperties(black,9,'helvetica','normal');
    rep.addText(5,   248 + displace, 'Apellidos y Nombres: ' + data.func_min, false,true);
    rep.addText(115, 248 + displace, 'C.I: ' + data.ci_func_min,	false,true);
    rep.addText(150, 248 + displace, 'FIRMA:',								  false,true);
  };

  function parteVII(){
	 rep.setFontProperties(black,9,'helvetica','bold');
    rep.addAbsTable(4,249 + displace, [201], 2, 5, false, true);
    rep.addText(5, 253 + displace, 'VII. Observaciones: ',false,true);
	 rep.setFontProperties(black,8.5,'helvetica','normal');
    writeObs(33,235 + displace,data.observaciones);
    //rep.addLine(32.5,253.5 + displace,202,253.5 + displace,black,0.5,false,true);
  };

  function parteVIII(){
    rep.addAbsTable(4,259 + displace, [50], 7, 5, false, true);
    rep.setFontProperties(black,8,'helvetica','bold');
    rep.addText(5, 263 + displace, 'VIII. Fecha de Remisión: ' + data.fe_remision,false,true);
    rep.setFontProperties(black,8,'helvetica','normal');
    rep.addText(5, 268 + displace, 'Director(a) '	,false,true);
    rep.addText(5, 273 + displace, 'Apellidos y Nombres: '	,false,true);
    rep.setFontProperties(black,5,'helvetica','normal');
    rep.addText(5, 278 + displace, data.nomb_dir+'',false,true);
    rep.setFontProperties(black,8,'helvetica','normal');
    rep.addText(5, 283 + displace, 'Cédula de Identidad: '	,false,true);
    rep.setFontProperties(black,8,'helvetica','normal');
    rep.addText(5, 288 + displace, data.ci_dir + '',false,true);
    rep.setFontProperties(black,8,'helvetica','normal');
    rep.addText(5, 293 + displace, 'Firma: '	,false,true);
    rep.addAbsTable(54,259 + displace, [47.5],1, 43, false, true);
    rep.setFontProperties(black,8,'helvetica','bold');
    rep.addText(65, 279 + displace, 'SELLO DEL PLANTEL'	,false,true);
    rep.addAbsTable(4,294 + displace, [50], 1, 8, false, true);
  };

  function parteIX(){
    rep.addAbsTable(104.5,259 + displace, [50], 7, 5, false, true);
    rep.setFontProperties(black,8,'helvetica','bold');
    rep.addText(106, 263 + displace, 'IX. Fecha de Recepción: '	,false,true);
    rep.setFontProperties(black,8,'helvetica','normal');
    rep.addText(106, 268 + displace, 'Funcionario(a) Receptor'	,false,true);
    rep.addText(106, 273 + displace, 'Apellidos y Nombres: '	,false,true);
    rep.addText(106, 283 + displace, 'Cédula de Identidad: '	,false,true);
    rep.addText(106, 293 + displace, 'Firma: '	,false,true);
    rep.addAbsTable(154.5,259 + displace, [50.5],1, 43, false, true);
    rep.setFontProperties(black,8,'helvetica','bold');
    rep.addText(167, 279 + displace, 'SELLO DE LA ZONA\n       EDUCATIVA '	,false,true);
    rep.addAbsTable(104.5,294 + displace, [50], 1, 8, false, true);

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
  }
}