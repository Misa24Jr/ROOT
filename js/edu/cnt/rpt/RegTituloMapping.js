function RetTituloMapping(j1_, j2_){
	var create = function(ev_, nya_, trp, pag){
		var rgt = new RegistroTitulo(j1_, j2_, ev_, nya_, trp, pag);	
	   var jData =  {
      	page : pag,
      	totalRegPage : trp,

	      /************************* PARTE I *************************/
	      tipo_reg           : j1_.data[22][0],
	      mes_anioEgreso     : j1_.data[1][0]+' '+j1_.data[2][0],
	      lugar_fechaExp     : j1_.data[3][0],

	      /************************* PARTE: II *************************/
	      codigoP            : j1_.data[4][0],
	      nombreP            : j1_.data[5][0],
	      direccionP         : j1_.data[6][0],
	      telefono           : j1_.data[7][0],
	      municipioP         : j1_.data[8][0],
	      entidad_fedeP      : j1_.data[9][0],
	      zona_edu           : j1_.data[10][0],

	      /************************* PARTE III *************************/
	      final              : ev_[0],
	      revision           : ev_[1],
	      mat_pend           : ev_[2],
	      otra               : ev_[3],

	      /************************* Parte IV *************************/
	      nomb_doc           : j1_.data[12][0],
	      codigo             : j1_.data[13][0],

	      /************************* PARTE V *************************/
	      serial_titulo      : j2_.data[0],
	      cedula_ide         : j2_.data[1],
	      nomb_ape           : nya_,
	      ent_federal        : j2_.data[4],
	      municipio          : j2_.data[5],
	      dia                : j2_.data[6],
	      mes                : j2_.data[7],
	      anio               : j2_.data[8],
	      obse               : j2_.data[9],
	      grado              : j2_.data[10][0],
	      seccion            : j2_.data[11][0],

	      /************************* PARTE VI *************************/
	      nomb_dir           : j1_.data[14][0],
	      ci_dir             : j1_.data[15][0],
	      nom_ctrlEst        : j1_.data[16][0],
	      ci_ctrlEst         : j1_.data[17][0],
	      func_min           : j1_.data[18][0],
	      ci_func_min        : j1_.data[19][0],
	      fe_remision		 	 : j1_.data[21][0],

	      /************************* PARTE VII *************************/
	      observaciones : j1_.data[20][0]

	      /************************* PARTE VIII *************************/
    	};
    	rgt.setData(jData);
   	rgt.init();
	};
	
	this.generate = function(){
		var ev= ['','','','']
		switch(j1_.data[11][0].toUpperCase()){
			case 'F' :{ev[0]='X'; break;}
			case 'R' :{ev[1]='X'; break;}
			case 'M' :{ev[2]='X'; break;}
			case 'O' : {ev[3]='X'; break;}
		}	
		
		var totalPages = 1;
		var totalRegPage = [0,0,0,0];
		if(j2_.data[0].length > 25){totalPages++};
		if(j2_.data[0].length > 50){totalPages++};
		if(j2_.data[0].length > 75){totalPages++};

		switch(totalPages) {
			case 1 :{totalRegPage[0] = j2_.data[0].length; break;}
			case 2 :{totalRegPage[0]= 25; totalRegPage[1] = j2_.data[0].length - 25; break;}
			case 3 :{totalRegPage[0]= 25; totalRegPage[1] = 25; totalRegPage[2] = j2_.data[0].length - 50; break;}
			case 4 :{totalRegPage[0]= 25; totalRegPage[1]= 25; totalRegPage[2]= 25; totalRegPage[3] = j2_.data[0].length - 75; break;}
		}
		var nya = [];
		for(var i=0; i<j2_.data[2].length; i++){
			nya[i] = j2_.data[2][i] + ' ' + j2_.data[3][i];
		}
		
		for(var t=0; t<totalPages; t++){
			create(ev, nya, totalRegPage, t);	
		}
			
	}
	return this;	
}