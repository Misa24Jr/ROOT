
function ResumenFinal31059Mapping(j1,j2, j3, j4, jn){	
	var cedulaIde =[];
   var apellidos =[];
   var nom =[];
   var lug_nac =[]
   var ef =[];
   var sx =[];
   var dia =[];
   var mes =[];
   var anio =[];
   var not1 =[];
   var not2 =[];
   var not3 =[];
   var not4 =[]
   var not5 =[];
   var not6 =[];
   var not7 =[];
   var not8 =[];
   var not9 =[];
   var not10 =[];
   var not11 =[];
   var not12 =[];
   var grupo = [];
   var totalPag = 1;
   var totalEstPag = [0,0,0];
   var actualPage = 0;

	var init = function(){
		for(var i=0; i<jn.data[0].length; i++){
			cedulaIde.push(jn.data[0][i]);
		   apellidos.push(jn.data[16][i]);
		   nom.push(jn.data[17][i]);
		   lug_nac.push(jn.data[18][i]);
		   ef.push(jn.data[19][i]);
		   sx.push(jn.data[20][i]);
		   dia.push(jn.data[21][i]);
		   mes.push(jn.data[22][i]);
		   anio.push(jn.data[23][i]);
    	}

		/////////////////////////////// Área Común ///////////////////////////////
		for(var i=0; i<jn.data[0].length; i++){
			if (pcbGeneCerCalCodFormato.getValue() == "FINAL") {
				not1.push((jn.data[1][i]!='*')?jn.data[1][i]:'NC');
				not2.push((jn.data[2][i]!='*')?jn.data[2][i]:'NC');
				not3.push((jn.data[3][i]!='*')?jn.data[3][i]:'NC');
				not4.push((jn.data[4][i]!='*')?jn.data[4][i]:'NC');
				not5.push((jn.data[5][i]!='*')?jn.data[5][i]:'NC');
				not6.push((jn.data[6][i]!='*')?jn.data[6][i]:'NC');
				not7.push((jn.data[7][i]!='*')?jn.data[7][i]:'NC');
				not8.push((jn.data[8][i]!='*')?jn.data[8][i]:'NC');
				not9.push((jn.data[9][i]!='*')?jn.data[9][i]:'NC');
				not10.push((jn.data[10][i]!='*')?jn.data[10][i]:'NC');
				not11.push((jn.data[11][i]!='*')?jn.data[11][i]:'NC');
				not12.push((jn.data[12][i]!='*')?jn.data[12][i]:'NC');
				grupo.push((jn.data[32][i]!='*')?jn.data[32][i]:'NC');
			} 
			else {
				not1.push(jn.data[1][i]);
				not2.push(jn.data[2][i]);
				not3.push(jn.data[3][i]);
				not4.push(jn.data[4][i]);
				not5.push(jn.data[5][i]);
				not6.push(jn.data[6][i]);
				not7.push(jn.data[7][i]);
				not8.push(jn.data[8][i]);
				not9.push(jn.data[9][i]);
				not10.push(jn.data[10][i]);
				not11.push(jn.data[11][i]);
				not12.push(jn.data[12][i]);
				grupo.push(jn.data[32][i]);
			}
		}
		
		
		if(jn.data[0].length % 35 !=0){
			cedulaIde.push('***');
			apellidos.push('***');
			nom.push('***');
			lug_nac.push('***');
			ef.push('**');
			sx.push('**');
			dia.push('**');
			mes.push('**');
			anio.push('**');
			not1.push('*');
			not2.push('*');
			not3.push('*');
			not4.push('*');
			not5.push('*');
			not6.push('*');
			not7.push('*');
			not8.push('*');
			not9.push('*');
			not10.push('*');
			not11.push('*');
			not12.push('*');
			grupo.push('***');
		}
		
		while(j2.data.length < 12) j2.data.push(['**']);
		while(j3.data[0].length < 12) {
			j3.data[0].push('**');
			j3.data[1].push('***');
			j3.data[2].push('***');
		}
				
		if (jn.data[1].length > 35){totalPag++}
		if (jn.data[1].length > 70){totalPag++}
		switch(totalPag){
			case 1 : { totalEstPag[0] = jn.data[1].length; break;} 
			case 2 : { totalEstPag[0] = 35; totalEstPag[1] = jn.data[1].length - 35; break;}
			case 3 : { totalEstPag[0] = 35; totalEstPag[1] = 35; totalEstPag[2] = jn.data[1].length - 70; break;}
		}
	}

	
   var update = function(){
      	return jData =  {
		//////////////////////////// PARTE I /////////////////////////////////////
	    	codFormato    : 'EMG',//j1.data[1][0],
			anio_escolar  : j1.data[3][0],
			tipo_eval     : pcbGeneCerCalCodFormato.getValue(),
			mes_anio      : j1.data[4][0],	
			page		  : actualPage,	
			//////////////////////////// PARTE: II ///////////////////////////////////
			codigo        : j1.data[5][0],
			nombreP       : j1.data[6][0],
			dir           : j1.data[8][0],
			tel           : j1.data[9][0],
			munic         : j1.data[10][0],
			entFed        : j1.data[11][0],
			zEdu          : j1.data[11][0],
			director      : j1.data[13][0],
			ced_jefe      : j1.data[14][0],

			///////////////////////////// PARTE III //////////////////////////////////
			ced_ide       : cedulaIde,
			ape           : apellidos,
			nombres       : nom,
			lugarNac      : lug_nac,
			EF            : ef,
			sexo          : sx,
			Dia           : dia,
			Mes           : mes,
			Ano           : anio,
			
			///////////////////////////// Parte IV ///////////////////////////////////
			nota1         : not1, 
			nota2         : not2,
			nota3         : not3, 
			nota4         : not4,
			nota5         : not5,
			nota6         : not6,
			nota7         : not7,
			nota8         : not8,
			nota9         : not9,
			nota10        : not10,
			nota11        : not11,
			nota12        : not12,
			grup          : grupo,
	      
			/////////////////////////////// PARTE V //////////////////////////////////
	    	datAbrMat     : j2.data,
			datMat	      : j3.data[0],
			nomProf       : j3.data[1],
			cedProf       : j3.data[2],
			plan     	  : j1.data[0][0],
			anioCursado	  : pcbGeneCerCalPosicion.setModeReturnGetText(3).getText().toUpperCase(),	
			cod			  : '31059',
			seccion       : pcbGeneCerCalSeccion.getValue(),
			totalEst	  : totalEstPag,
			totalPag	  : totalPag,	
			
			/////////////////////////////// PARTE VI /////////////////////////////////
			obse          :j1.data[16][0],
			est_seccion   :j4.data[0][0],
			//est_pag     :'?',

			/////////////////////////////// PARTE VII ////////////////////////////////
			nomJef		  : j1.data[13][0],
			cedJef		  : j1.data[14][0],
			fecha_remision: j1.data[15][0]
	      
	    }
    }
    
    init();
    for(var p=0; p<totalPag; p++){
		var rf = new ResumenFinal31059(j1, j2, j3, j4, jn);
	 	actualPage = p;
	   	rf.setData(update());
	   	rf.init();
	}
}