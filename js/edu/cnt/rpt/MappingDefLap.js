MappingDefLap = class{
	constructor(prop, objDL, objHead){
		this.prop = prop;
		this.totalMat = prop.jsonMat.data[1].length;
		this.totalRow = prop.totalRow;
		this.paper = prop.paper;
		this.totalMatxPage = prop.totalMatxPage;
		this.totalPages = prop.totalPages;		
		this.df = objDL;
		this.objHead = objHead;
		this.mats = prop.jsonMat.data[1];
		this.data = prop.jsonData.data;
		this.totalfields = prop.jsonData.fields.length;
		this.totalStudents = prop.jsonData.data[0].length;
		this.totalStudents1 = this.prop.totalRow;
		this.totalStudents2 = this.prop.totalRow;
		this.totalStudents3 = 0;
		if(this.totalStudents > this.prop.totalRow){
			this.totalStudents1 = this.prop.totalRow;
			if(this.totalStudents - this.totalStudents1 > this.totalRow){
				this.totalStudents2 = this.prop.totalRow;
				this.totalStudents3 = this.totalStudents - this.totalStudents1 - this.totalStudents2;
			}
			else{
				this.totalStudents2 = this.totalStudents - this.totalStudents1;
				this.totalStudents3 = 0;
			}				
		}
		else{
			this.totalStudents1 = this.totalStudents;
			this.totalStudents2 = 0;
			this.totalStudents3 = 0;
		}
		this.init();	
	}
	
	checkOrdenMaterias(){
		for(var i=0; i < this.prop.jsonMat.data[0].length; i++){
			if(parseInt(this.prop.jsonMat.data[0][i],10) > 20)
				return false;
		}
		return true;
	}
	
	drawPage1(){
		if(this.prop.showPage)
			this.df.showPagination();
		this.df.drawSubTitles(true)
		.loadMaterias(this.mats)
		.setTotalRows(this.totalStudents1)
		.drawRows();		
		var regData = [];	
		for(var r=0; r<this.totalStudents1; r++){
			regData[0] = parseInt(this.data[0][r],10);				//item
			regData[1] = this.data[1][r] + ' ' + this.data[2][r];	//apellidos - nombres
			regData[2] = this.data[3][r];									//promedio
			regData[3] = this.data[4][r];									//TMA
			var col = 5;
			for(var i=0; i<this.totalMatxPage; i++){
				for(var c=0; c<this.prop.evaCell; c++){
					var v = parseInt(this.prop.jsonMat.data[0][i],10);
					regData[col-1] = this.data[(v-1)*(this.prop.evaCell)+c+5][r]; 
					col++;	
				}
			}	
			this.df.setFullDataRow(regData);
		}
		
		if(this.totalStudents2===0){
			var tm = this.prop.jsonMat.data[2].length;
			var inscrip = [];
		   var apl = [];
		   var ap = [];
		   for(var i=0; i<tm; i++){
		   	if(i < this.totalMatxPage){
		   		inscrip[i] = this.prop.jsonMat.data[2][i];
		   		apl[i] = this.prop.jsonMat.data[3][i];
		   		ap[i] = this.prop.jsonMat.data[4][i];
		   	}
		   }      	
      	this.df.drawTotals(true)     	
      	.setTotalInscrip(inscrip)	
      	.setTotalAprobados(ap)
	      .setTotalAplazados(apl);      
      }
      
      //Para termiar las columnas en otra pagina
		if(this.prop.jsonMat.data[0].length > this.totalMatxPage){
			var regData2 = [];	
			var tm = this.prop.jsonMat.data[0].length - this.totalMatxPage;

			//this.totalMatxPage = tm;
			if(this.prop.showPage)
				this.df.showPagination();
		   this.df.newPage()
		   .setTotalRows(this.totalStudents1)
	      .setTotalMatxPage(tm)
	      .drawDataRow()
	      .drawSubTitles(false);
	      
	      var mat2 = [];
	      for(var i=this.totalMatxPage; i<this.totalMatxPage + tm; i++) {
	      	mat2[i - this.totalMatxPage] =  this.prop.jsonMat.data[1][i];
	      }	      

	      this.df.loadMaterias(mat2, true);

	      for(var r=0; r<this.totalStudents1; r++){
				var col = 0;				
				for(var i=this.totalMatxPage; i<this.totalMatxPage + tm; i++){
					for(var c=0; c<this.prop.evaCell; c++){
						var v = parseInt(this.prop.jsonMat.data[0][i],10);
						regData2[col] = this.data[(v)*(this.prop.evaCell)+c+1][r]; 
						col++;	
					}
				}
				
				this.df.setRowNotas(r+1, regData2, true);	
			}
			if(this.totalStudents2===0){
				var tm = this.prop.jsonMat.data[2].length;
				var inscrip = [];
			   var apl = [];
			   var ap = [];
			   for(var i=this.totalMatxPage; i<tm; i++){
			   	inscrip[i-this.totalMatxPage] = this.prop.jsonMat.data[2][i];
			   	apl[i-this.totalMatxPage] = this.prop.jsonMat.data[3][i];
			   	ap[i-this.totalMatxPage] = this.prop.jsonMat.data[4][i];
			   }      	
	      	this.df.drawMaterias(this.totalStudents1, this.mats)
	      	.drawTotals(true)     	
	      	.setTotalInscrip(inscrip)	
	      	.setTotalAprobados(ap)
		      .setTotalAplazados(apl);      
      	}
      	
	   }
	}
	
	drawPage2(){
		this.df.newPage()
		if(this.prop.showPage)
			this.df.showPagination();
		this.df.setTotalMatxPage(this.totalMatxPage)
      .setTotalRows(this.totalStudents2)
      .drawRows();  
      if(this.totalStudents3===0)
      	this.df.drawMaterias(this.totalStudents2, this.mats);
      
      var regData = [];		
      var row = 0;
		for(var r=this.totalStudents1; r<this.totalStudents1+this.totalStudents2; r++){
			regData[0] = parseInt(this.data[0][r],10);				//item
			regData[1] = this.data[1][r] + ' ' + this.data[2][r];	//apellidos - nombres
			regData[2] = this.data[3][r];									//promedio
			regData[3] = this.data[4][r];									//TMA
			var col = 5;
			for(var i=0; i<this.totalMatxPage; i++){
				for(var c=0; c<this.prop.evaCell; c++){
					var v = parseInt(this.prop.jsonMat.data[0][i],10);
					regData[col-1] = this.data[(v-1)*(this.prop.evaCell)+c+5][r]; 
					col++;	
				}
			}	
			row++;
			this.df.setCustomItem(row + this.totalStudents1, row)
			.setStudent(row, regData[1])
			.setTMA(row, regData[3])
			.setPromedio(row, regData[2])
			.setRowNotas(row, this.df.extractArrNotas(regData));			
		}
		
		if(this.totalStudents3===0){
			var tm = this.prop.jsonMat.data[2].length;
			var inscrip = [];
		   var apl = [];
		   var ap = [];
		   for(var i=0; i<tm; i++){
		   	if(i < this.totalMatxPage){
		   		inscrip[i] = this.prop.jsonMat.data[2][i];
		   		apl[i] = this.prop.jsonMat.data[3][i];
		   		ap[i] = this.prop.jsonMat.data[4][i];
		   	}
		   }
		   this.df.drawTotals(true)     	
      	.setTotalInscrip(inscrip)	
      	.setTotalAprobados(ap)
	      .setTotalAplazados(apl);      
      }
      
      //Para termiar las columnas en otra pagina
      if(this.prop.jsonMat.data[0].length > this.totalMatxPage){
			var regData2 = [];	
			var tm = this.prop.jsonMat.data[0].length - this.totalMatxPage;
			if(this.prop.showPage)
				this.df.showPagination();
		   this.df.newPage()
		   .setTotalRows(this.totalStudents2)
	      .setTotalMatxPage(tm)
	      .drawDataRow()
	      //.drawSubTitles(false);
	      var mat2 = [];
	      for(var i=this.totalMatxPage; i<this.totalMatxPage + tm; i++) {
	      	mat2[i - this.totalMatxPage] =  this.prop.jsonMat.data[1][i];
	      }
	      //this.df.loadMaterias(mat2);
	      var row = 0;
	      for(var r=this.totalStudents1; r<this.totalStudents1+this.totalStudents2; r++){
				var col = 0;				
				for(var i=this.totalMatxPage; i<this.totalMatxPage + tm; i++){
					for(var c=0; c<this.prop.evaCell; c++){
						var v = parseInt(this.prop.jsonMat.data[0][i],10);
						regData2[col] = this.data[(v)*(this.prop.evaCell)+c+1][r]; 
						col++;	
					}
				}
				row++;
				this.df.setRowNotas(row, regData2, true);	
			}
			if(this.totalStudents3===0){
				var tm = this.prop.jsonMat.data[2].length;
				var inscrip = [];
			   var apl = [];
			   var ap = [];
			   for(var i=this.totalMatxPage; i<tm; i++){
			   	inscrip[i-this.totalMatxPage] = this.prop.jsonMat.data[2][i];
			   	apl[i-this.totalMatxPage] = this.prop.jsonMat.data[3][i];
			   	ap[i-this.totalMatxPage] = this.prop.jsonMat.data[4][i];
			   }      	
	      	this.df.drawTotals(false)  	
	      	.drawMaterias(this.totalStudents2, mat2, true)
	      	.setTotalInscrip(inscrip, true)	
	      	.setTotalAprobados(ap, true)
		      .setTotalAplazados(apl, true);      
      	} 
	   }
	}
	
	drawPage3(){
		this.df.newPage()
		if(this.prop.showPage)
			this.df.showPagination();
		this.df.setTotalMatxPage(this.totalMatxPage)
      .setTotalRows(this.totalStudents3)
      .drawRows()  
      .drawMaterias(this.totalStudents3, this.mats);
   
      var regData = [];		
      var row = 0;
		for(var r = this.totalStudents1 +  this.totalStudents2 ; r < this.totalStudents1 + this.totalStudents2 + this.totalStudents3; r++){
			regData.length=0;
			regData[0] = parseInt(this.data[0][r],10);				//item
			regData[1] = this.data[1][r] + ' ' + this.data[2][r];	//apellidos - nombres
			regData[2] = this.data[3][r];									//promedio
			regData[3] = this.data[4][r];									//TMA
			var col = 5;
			for(var i=0; i<this.totalMatxPage; i++){
				for(var c=0; c<this.prop.evaCell; c++){
					var v = parseInt(this.prop.jsonMat.data[0][i],10);
					//regData[col-1] = this.data[(v-1)*(this.prop.evaCell)+c][r]; 
					regData[col-1] = this.data[(v)*(this.prop.evaCell)+c+1][r]; 
					col++;	
				}
			}	
			row++;
			
			this.df.setCustomItem(row + this.totalStudents1 + this.totalStudents2, row)
			.setStudent(row, regData[1])
			.setTMA(row, regData[3])
			.setPromedio(row, regData[2])
			.setRowNotas(row, this.df.extractArrNotas(regData));
		}
		
		var tm = this.prop.jsonMat.data[2].length;
		var inscrip = [];
		var apl = [];
		var ap = [];
		for(var i=0; i<tm; i++){
		 	if(i < this.totalMatxPage){
		  		inscrip[i] = this.prop.jsonMat.data[2][i];
		  		apl[i] = this.prop.jsonMat.data[3][i];
		  		ap[i] = this.prop.jsonMat.data[4][i];
		  	}
		}
      this.df.drawTotals(true)     	
      .setTotalInscrip(inscrip)	
      .setTotalAprobados(ap)
	   .setTotalAplazados(apl);    
      
      //Para termiar las columnas en otra pagina
      if(this.prop.jsonMat.data[0].length > this.totalMatxPage){
			var regData3 = [];	
			var tm = this.prop.jsonMat.data[0].length - this.totalMatxPage;
			if(this.prop.showPage)
				this.df.showPagination();
		   this.df.newPage()
		   .setTotalRows(this.totalStudents3)
	      .setTotalMatxPage(tm)
	      .drawDataRow()
	      //.drawSubTitles(false);
	      var mat2 = [];
	      for(var i=this.totalMatxPage; i<this.totalMatxPage + tm; i++) {
	      	mat2[i - this.totalMatxPage] =  this.prop.jsonMat.data[1][i];
	      }
	      //this.df.loadMaterias(mat2);
	      var row = 0;
	      for(var r=this.totalStudents2; r<this.totalStudents2+this.totalStudents3; r++){
				var col = 0;				
				for(var i=this.totalMatxPage; i<this.totalMatxPage + tm; i++){
					for(var c=0; c<this.prop.evaCell; c++){
						var v = parseInt(this.prop.jsonMat.data[0][i],10);
						regData3[col] = this.data[(v)*(this.prop.evaCell)+c+1][r]; 
						col++;	
					}
				}
				row++;
				this.df.setRowNotas(row, regData3);	
			}
			var tm = this.prop.jsonMat.data[2].length;
			var inscrip = [];
			var apl = [];
			var ap = [];
			for(var i=this.totalMatxPage; i<tm; i++){
			  	inscrip[i-this.totalMatxPage] = this.prop.jsonMat.data[2][i];
			  	apl[i-this.totalMatxPage] = this.prop.jsonMat.data[3][i];
			  	ap[i-this.totalMatxPage] = this.prop.jsonMat.data[4][i];
			}      	
	      this.df.drawTotals(false)  	
	      .drawMaterias(this.totalStudents1 + this.totalStudents2, mat2)
	      .setTotalInscrip(inscrip)	
	      .setTotalAprobados(ap)
		   .setTotalAplazados(apl);       
	   }
	}
	
	init(){
		if(this.checkOrdenMaterias()){
			this.df.drawHead(this.objHead);
			this.drawPage1();			
			if(this.totalStudents2 > 0)
				this.drawPage2();	
			if(this.totalStudents3 > 0)
				this.drawPage3();		
			this.df.render();		
		}
		else{
			Alert.show('Materias con número de orden incorrecto, verifique en "Asignar Materia a Pensum"','Alerta de configuración',Alert.TYPE_WARNING);
		}
		
	}
}