var DefxLapsoPdf = class{
	constructor(options) {
		var that = this;
		this.rep = new Report('landscape');	
  		this.black = this.rep.getRGBAObj(0,0,0,0);			
		this.rep.setNoRepeatHead();
		this.widthNoteCell = [];
		this.objProperties = {
			x : 2,
			y : 20,
			heightCell : 5.5,
			widthCellStudents : 50,
			widthCellTot : 7.20,
			totalRow : 24,
			paperWidth : 215,
      	fontFamily : 'verdana',
      	fontSizeHeadData : 9,
      	fontSizeStudent : 8,
      	fontSizeTitle : 14,
      	fontSizeHead : 12,
      	fontSizeData :12,
      	sizeStudent : 29.5,
      	colspan : 0.9, 
      	paper : 'oficio', //carta
      	widthCell : 5.72,//3.68,
      	totalMatxPage : 12,
      	paperHeight : 280,//extra oficio: 355 // oficio: 348// carta: 280
      	
      	widthCell_ : -1,//3.68,
      	totalMatxPage_ : -1,
      	paperHeight_ : -1,//extra oficio: 355 // oficio: 348// carta: 280
      	
      	materias : [],
      	evaCell : 4,
      	pageNumber : 1,
      	totalPages : 1,
      	jsonMat	: null,
      	jsonData : null,
      	objHead : {
        					  title:'',
        					  institucion: '',
					        grado : '',
						     periodo : '',
						     seccion : '',       
						     lapso : ''     
    		},
    		showPage : true 
      }
		this.setProperties(options);
		if(this.objProperties.jsonData.data[0].length > this.objProperties.totalRow)
			this.objProperties.totalPages = 2;
		if(this.objProperties.jsonData.data[0].length > this.objProperties.totalRow*2)
			this.objProperties.totalPages = 3;
		
		if(this.objProperties.jsonMat.data[1].length > this.objProperties.totalMatxPage*2){
			this.objProperties.totalPages = this.objProperties.totalPages*3;
		}
		else if(this.objProperties.jsonMat.data[1].length > this.objProperties.totalMatxPage){
			this.objProperties.totalPages = this.objProperties.totalPages*2;
		}
		
		//this.setProperties(this.objProperties);	
		this.Mapp = new MappingDefLap(this.objProperties, this, this.objProperties.objHead);
	}
	
	setProperties(prop){
	   for(var attrname in prop) { this.objProperties[attrname] = prop[attrname]};
	   if(this.objProperties.evaCell===4 && this.objProperties.paper==='carta'){	this.objProperties.paperHeight = 280; this.objProperties.totalMatxPage = 9; this.objProperties.widthCell = 5.72}
		if(this.objProperties.evaCell===4 && this.objProperties.paper==='oficio'){	this.objProperties.paperHeight = 348;}
		if(this.objProperties.paper==='extraoficio'){this.objProperties.paperHeight = 355;}
		if(this.objProperties.evaCell===3 && this.objProperties.paper==='oficio'){this.objProperties.paperHeight = 348; this.objProperties.totalMatxPage = 12; this.objProperties.widthCell = 7.56;}
		if(this.objProperties.evaCell===3 && this.objProperties.paper==='carta'){this.objProperties.paperHeight = 280; this.objProperties.totalMatxPage = 9; this.objProperties.widthCell = 7.56;}		
		
		if(this.objProperties.widthCell_!== -1)
			this.objProperties.widthCell = this.objProperties.widthCell_;
		if(this.objProperties.totalMatxPage_!== -1)
      	this.objProperties.totalMatxPage = this.objProperties.totalMatxPage_;
      if(this.objProperties.paperHeight_ != -1) 
      	this.objProperties.paperHeight = this.objProperties.paperHeight_;
      if(this.objProperties.jsonMat.data[1].length < this.objProperties.totalMatxPage)		
			this.objProperties.totalMatxPage = this.objProperties.jsonMat.data[1].length;
		this.rep.setPDFFormat('custom','mm', [this.objProperties.paperWidth, this.objProperties.paperHeight]);
	}
	
	setTotalRows(tRows){
		this.objProperties.totalRow = tRows;
		return this;
	}
	
	setY(newY){
		this.objProperties.y = newY;
		return this;
	}
	
	setTotalMatxPage(tm){
		this.objProperties.totalMatxPage = tm;
		return this;
	}
	
	formatCero(number){
		if(number==='' || isNaN(number))
			return number;
		number = parseInt(number,10);
		var v = '';
		if(number<10)
			v='0'+number;
		else
			v=''+number;		
		return v;
	}
	
	setItem(i){
		this.rep.setFontProperties(this.black,this.objProperties.fontSizeData,this.objProperties.fontFamily,'normal');
		var v = this.formatCero(i);
		this.rep.addText(this.objProperties.x+0.5, this.objProperties.y + this.objProperties.colspan + this.objProperties.heightCell*11/4 + (this.objProperties.colspan + this.objProperties.heightCell)*(i-1), v, false, true);
		return this;
	}
	
	setCustomItem(item, pos){
		this.rep.setFontProperties(this.black,this.objProperties.fontSizeData,this.objProperties.fontFamily,'normal');
		var v = this.formatCero(item);
		this.rep.addText(this.objProperties.x+0.5, this.objProperties.y + this.objProperties.colspan + this.objProperties.heightCell*11/4 + (this.objProperties.colspan + this.objProperties.heightCell)*(pos-1), v, false, true);
		return this;
	}
	
	setStudent(row, std){
		this.rep.setFontProperties(this.black,this.objProperties.fontSizeStudent,this.objProperties.fontFamily,'normal');
		this.rep.addText( this.objProperties.x + 0.5 + this.objProperties.widthCell, 
								this.objProperties.y + this.objProperties.colspan + this.objProperties.heightCell*11/4 + (this.objProperties.colspan + this.objProperties.heightCell)*(row-1), 
								std.substr(0,this.objProperties.sizeStudent), false, true);
		return this;
	}
	
	setPromedio(row, p){
		this.rep.setFontProperties(this.black,this.objProperties.fontSizeData,this.objProperties.fontFamily,'normal');
		this.rep.addText( this.objProperties.x + 1.5 + this.objProperties.widthCell + this.objProperties.widthCellStudents, 
								this.objProperties.y + this.objProperties.colspan + this.objProperties.heightCell*11/4 + (this.objProperties.colspan + this.objProperties.heightCell)*(row-1), 
								this.formatCero(p)+'', false, true);
		return this;
	}
	
	setTMA(row, tma){
		if(tma==='0')
			tma='';
		this.rep.setFontProperties(this.black,this.objProperties.fontSizeData,this.objProperties.fontFamily,'normal');
		this.rep.addText( this.objProperties.x + 1.5 + this.objProperties.widthCell + this.objProperties.widthCellStudents + this.objProperties.widthCellTot, 
								this.objProperties.y + this.objProperties.colspan + this.objProperties.heightCell*11/4 + (this.objProperties.colspan + this.objProperties.heightCell)*(row-1), 
								tma+'', false, true);
		return this;
	}
	
	setRowNotas(row, notas, lessMargin){	
	this.rep.setFontProperties(this.black,this.objProperties.fontSizeData,this.objProperties.fontFamily,'normal');
		for(var i = 0; i < notas.length; i++){
			var xi=0;
			if(isNaN(notas[i]))
				xi=-1.5;
			if(lessMargin)
				this.rep.addText( this.objProperties.x + 0.7 + xi + this.objProperties.widthCell*i, 
				    			this.objProperties.y + this.objProperties.colspan + this.objProperties.heightCell*11/4 + (this.objProperties.colspan + this.objProperties.heightCell)*(row-1), 
								this.formatCero(notas[i])+'', false, true);
			else				
				this.rep.addText( this.objProperties.x + 0.7 + xi + this.objProperties.widthCell + this.objProperties.widthCellStudents + this.objProperties.widthCellTot*2 + this.objProperties.widthCell*i, 
								this.objProperties.y + this.objProperties.colspan + this.objProperties.heightCell*11/4 + (this.objProperties.colspan + this.objProperties.heightCell)*(row-1), 
								this.formatCero(notas[i])+'', false, true);
		}
		return this;
	}
	
	setTotalInscrip(t, lessMargin){
		this.setTotal(0, t, lessMargin);
		return this;
	}
	
	setTotalAplazados(t, lessMargin){
		this.setTotal(1, t, lessMargin);
		return this;
	}
	
	setTotalAprobados(t, lessMargin){
		this.setTotal(2, t, lessMargin);
		return this;
	}
	
	showPagination(){
		this.rep.setFontProperties(this.black,this.objProperties.fontSizeHead,this.objProperties.fontFamily,'normal');
		this.rep.addText(this.objProperties.paperHeight - 20, 10 , 'pag '+ this.objProperties.pageNumber +'/' +this.objProperties.totalPages, false, true);
		return this;
	}	
	
	setTotal(p, t, lessMargin){
		this.rep.setFontProperties(this.black,this.objProperties.fontSizeData,this.objProperties.fontFamily,'normal');
		var px = this.objProperties.widthCell*2.5 + this.objProperties.x + this.objProperties.widthCellStudents + this.objProperties.widthCellTot*2;
		if(lessMargin)
			px = this.objProperties.x;
		var py = this.objProperties.y + this.objProperties.colspan*this.objProperties.totalRow + this.objProperties.heightCell*11/4 + 0.5 + (this.objProperties.heightCell)*(this.objProperties.totalRow + p) + this.objProperties.heightCell;
		for(var i = 0; i < this.objProperties.totalMatxPage; i++)
			this.rep.addText(px + i*this.objProperties.widthCell*this.objProperties.evaCell + 1, py, t[i]+'', false, true);
		return this;
	}
	
	extractArrNotas(arr){
		return arr.slice(4,this.objProperties.totalMatxPage*this.objProperties.evaCell + 4);
	}
	
	setFullDataRow(rowData){
		this.rep.setFontProperties(this.black,this.objProperties.fontSizeData,this.objProperties.fontFamily,'normal');
		this.setItem(rowData[0]);
		this.setStudent(rowData[0], rowData[1]);
		this.setTMA(rowData[0], rowData[3]);
		this.setPromedio(rowData[0], rowData[2]);
		this.setRowNotas(rowData[0], this.extractArrNotas(rowData));		
		return this;
	}
	
	newPage(){
		this.rep.addPage();
		this.objProperties.pageNumber++; 
		return this;
	}
	
	drawHead(objHead){
		this.rep.setFontProperties(this.black,this.objProperties.fontSizeTitle,this.objProperties.fontFamily,'bold');
		if(this.objProperties.paper==='carta')
			this.rep.addText(126, 6, objHead.title,false, true);
		else
			this.rep.addText(160, 6, objHead.title,false, true);
		this.rep.setFontProperties(this.black,this.objProperties.fontSizeHead,this.objProperties.fontFamily,'normal');
		this.rep.addText(this.objProperties.x, 12, 'INSTITUCIÓN : '+objHead.institucion,false, true);
		this.rep.addText(this.objProperties.x, 17, 'GRADO : '+objHead.grado,false, true);
		this.rep.addText(130, 12, 'PERIODO : '+objHead.periodo,false, true);
		this.rep.addText(130, 17, 'SECCION : '+objHead.seccion,false, true);
		if(objHead.lapso!='')
			this.rep.addText(this.objProperties.paperHeight - 90, 12, 'LAPSO : '+objHead.lapso,false, true);
		this.rep.setFontProperties(this.black,9,this.objProperties.fontFamily,'bold');
		this.rep.addText(this.objProperties.paperHeight - 90, 15.5, 'TMA: Total Materias Aplazadas',false, true);
		this.rep.addText(this.objProperties.paperHeight - 90, 19, 'PRO: Promedio',false, true);
		return this;		
	}
	
	drawMaterias(row, m, marginLess){
		var arrW = [];
		var px = this.objProperties.x + this.objProperties.widthCell + this.objProperties.widthCellStudents + this.objProperties.widthCellTot*2;
		if(marginLess)
			px = this.objProperties.x;
		var py = this.objProperties.y + this.objProperties.heightCell*7/4 + (this.objProperties.colspan + this.objProperties.heightCell)*row + this.objProperties.colspan*11/4; 
		this.rep.setFontProperties(this.black,this.objProperties.fontSizeHeadData,this.objProperties.fontFamily,'normal');
		for(var i=0; i<this.objProperties.materias.length; i++){
			if(i < this.objProperties.totalMatxPage){
				arrW[i] = this.objProperties.widthCell*this.objProperties.evaCell;
				this.rep.addText(px + i*arrW[i] + 1, py + this.objProperties.heightCell*3/4, m[i],false, true);	
			}
		}
		this.rep.addAbsTable(px, py, arrW, 1, this.objProperties.heightCell, false, true);
		return this;
	}
	
	loadMaterias(mat, lessMargin){
		var arrW = [];
		var c=0;
		this.rep.setFontProperties(this.black,this.objProperties.fontSizeHeadData,this.objProperties.fontFamily,'normal');
		var px = this.objProperties.x + this.objProperties.widthCell + this.objProperties.widthCellStudents + this.objProperties.widthCellTot*2;
		if(lessMargin)
			px = this.objProperties.x;
		for(var i=0; i<mat.length; i++){
			this.objProperties.materias[i] = mat[i];
			if(i < this.objProperties.totalMatxPage){
				arrW[i] = this.objProperties.widthCell*this.objProperties.evaCell;
				this.rep.addText(px + i*arrW[i] + 1, this.objProperties.y + this.objProperties.heightCell*3/4, mat[i]+'',false, true);	
			}
		}
		return this;
	}
	
	drawSubTitles(sa){
		var px = this.objProperties.x + this.objProperties.widthCell + this.objProperties.widthCellStudents + this.objProperties.widthCellTot*2;
		var px1 = this.objProperties.x + this.objProperties.widthCell + this.objProperties.widthCellStudents;
		var px2 = px1 + this.objProperties.widthCellTot*2;
		var arrW = [];
		var c=0;
		var w = [];
		var letra = '';
		if(this.objProperties.fontSizeHeadData >= this.objProperties.fontSizeData)
			this.objProperties.fontSizeHeadData = this.objProperties.fontSizeData - 2;
		this.rep.setFontProperties(this.black,this.objProperties.fontSizeHeadData,this.objProperties.fontFamily,'bold');
		for(var i=0; i<this.objProperties.totalMatxPage; i++){
			arrW[i] = this.objProperties.widthCell*this.objProperties.evaCell;	
			for(var j=0; j<this.objProperties.evaCell; j++){
				w[c] = this.objProperties.widthCell;
				if(this.objProperties.evaCell===4){
					if(j<3)
				 		letra = (j+1) + 'L';
					else
						letra = 'DF';	
				}
				else{
					switch(j){
						case 0 :{letra = 'NP'; break;}
						case 1 :{letra = 'PA'; break;}
						case 2 :{letra = 'DF'; break;}
					}
				}				
				this.widthNoteCell[c] = this.objProperties.widthCell;
				if(sa)
					this.rep.addText(1 + this.objProperties.widthCellTot*2 + this.objProperties.widthCell + c*this.objProperties.widthCell + this.objProperties.widthCellStudents + this.objProperties.x, this.objProperties.y + this.objProperties.heightCell*7/4, letra,false, true);
				else
					this.rep.addText(1 + this.objProperties.x + c*this.objProperties.widthCell, this.objProperties.y + this.objProperties.heightCell*7/4, letra,false, true);
				c++;
			}
		}
		if(sa){
			this.rep.addAbsTable(this.objProperties.x, this.objProperties.y + this.objProperties.heightCell, [this.objProperties.widthCell,this.objProperties.widthCellStudents], 1, this.objProperties.heightCell, false, true);
			this.rep.addAbsTable(px1, this.objProperties.y + this.objProperties.heightCell, [this.objProperties.widthCellTot, this.objProperties.widthCellTot], 1, this.objProperties.heightCell, false, true);	
			this.rep.addText(0.5 + this.objProperties.x + 1, this.objProperties.y + this.objProperties.heightCell*7/4, 'N°',false, true);
			this.rep.addText(0.5 + this.objProperties.widthCell + this.objProperties.x + 1, this.objProperties.y + this.objProperties.heightCell*7/4, 'ESTUDIANTES',false, true);
			this.rep.addText(0.5 + this.objProperties.widthCell + this.objProperties.widthCellStudents + this.objProperties.x, this.objProperties.y + this.objProperties.heightCell*7/4, 'PRO',false, true);
			this.rep.addText(0.5 + this.objProperties.widthCellTot + this.objProperties.widthCell + this.objProperties.widthCellStudents + this.objProperties.x, this.objProperties.y + this.objProperties.heightCell*7/4, 'TMA',false, true);
			this.rep.addAbsTable(px2, this.objProperties.y + this.objProperties.heightCell, w, 1, this.objProperties.heightCell, false, true);
			this.rep.addAbsTable(px, this.objProperties.y, arrW , 1, this.objProperties.heightCell, false, true);	
		}
		else{
			this.rep.addAbsTable(this.objProperties.x, this.objProperties.y + this.objProperties.heightCell, w, 1, this.objProperties.heightCell, false, true);
			this.rep.addAbsTable(this.objProperties.x, this.objProperties.y, arrW , 1, this.objProperties.heightCell, false, true);	
		}
		
		return this;
	}
	
	drawTotals(sa){
		var px = this.objProperties.x + this.objProperties.widthCell + this.objProperties.widthCellStudents + this.objProperties.widthCellTot*2;
		var px1 = this.objProperties.x + this.objProperties.widthCell + this.objProperties.widthCellStudents;
		var arrW = [];
		var c=0;
		var incY = (this.objProperties.heightCell + this.objProperties.colspan)*this.objProperties.totalRow + this.objProperties.colspan + this.objProperties.heightCell;
		for(var i=0; i<this.objProperties.totalMatxPage; i++)	
			arrW[i] = this.objProperties.widthCell*this.objProperties.evaCell;
		
		for(var i=0; i<3; i++){
			if(sa){
				this.rep.addAbsTable(this.objProperties.x, this.objProperties.y + this.objProperties.heightCell+incY + this.objProperties.heightCell*(i+1), [this.objProperties.widthCell+this.objProperties.widthCellStudents+this.objProperties.widthCellTot*2], 1, this.objProperties.heightCell, false, true);				
				this.rep.setFontProperties(this.black,this.objProperties.fontSizeHeadData,this.objProperties.fontFamily,'bold');
				this.rep.addText(this.objProperties.x + 48, this.objProperties.y + this.objProperties.heightCell+incY + this.objProperties.heightCell - 1, 'TOTALES:',false, true);		
				switch(i){
					case 0 :{	
						this.rep.addText(this.objProperties.x + 48, this.objProperties.y + this.objProperties.heightCell+incY + this.objProperties.heightCell*(i+1.7), 'INSCRITOS:',false, true);
						break;
					}
					case 1 :{	
						this.rep.addText(this.objProperties.x + 48, this.objProperties.y + this.objProperties.heightCell+incY + this.objProperties.heightCell*(i+1.7), 'APLAZADOS:',false, true);
						break;
					}
					case 2 :{	
						this.rep.addText(this.objProperties.x + 48, this.objProperties.y + this.objProperties.heightCell+incY + this.objProperties.heightCell*(i+1.7), 'APROBADOS:',false, true);
						break;
					}
				}
				this.rep.addAbsTable(px, this.objProperties.y + this.objProperties.heightCell+incY + this.objProperties.heightCell*(i+1), arrW , 1, this.objProperties.heightCell, false, true);	
			}
			else
				this.rep.addAbsTable(this.objProperties.x, this.objProperties.y + this.objProperties.heightCell+incY + this.objProperties.heightCell*(i+1), arrW , 1, this.objProperties.heightCell, false, true);	
		}
		return this;
	}
	
	drawDataRow(){
		this.rep.setFontProperties(this.black,this.objProperties.fontSizeData,this.objProperties.fontFamily,'normal');
		var px1 = this.objProperties.x;// + this.objProperties.widthCell + this.objProperties.widthCellStudents;
		var py = this.objProperties.y + this.objProperties.heightCell;
		var arr = [];//this.widthNoteCell.slice(0,this.objProperties.totalMatxPage*this.objProperties.evaCell);		
		var rc = [];
		for(var i=0; i < this.objProperties.totalMatxPage; i++)
			rc[i] = this.objProperties.widthCell*this.objProperties.evaCell;
			
		for(var i=0; i<this.objProperties.totalMatxPage*this.objProperties.evaCell; i++)
			arr[i] = this.objProperties.widthCell;
		for(var i = 1; i<=this.objProperties.totalRow; i++){
			this.rep.addAbsTable(px1, py+(i*this.objProperties.heightCell)+ this.objProperties.colspan*i, arr, 1, this.objProperties.heightCell, false, true);		
			this.rep.addAbsTable(px1-0.3, py+(i*this.objProperties.heightCell)+ this.objProperties.colspan*i, rc, 1, this.objProperties.heightCell, false, true);		
			this.rep.addAbsTable(px1-0.2, py+(i*this.objProperties.heightCell)+ this.objProperties.colspan*i, rc, 1, this.objProperties.heightCell, false, true);		
			this.rep.addAbsTable(px1-0.1, py+(i*this.objProperties.heightCell)+ this.objProperties.colspan*i, rc, 1, this.objProperties.heightCell, false, true);		
			this.rep.addAbsTable(px1+0.1, py+(i*this.objProperties.heightCell)+ this.objProperties.colspan*i, rc, 1, this.objProperties.heightCell, false, true);
			this.rep.addAbsTable(px1+0.2, py+(i*this.objProperties.heightCell)+ this.objProperties.colspan*i, rc, 1, this.objProperties.heightCell, false, true);		
			this.rep.addAbsTable(px1+0.3, py+(i*this.objProperties.heightCell)+ this.objProperties.colspan*i, rc, 1, this.objProperties.heightCell, false, true);
		}
		return this;
	}
	
	drawRows(){
		this.rep.setFontProperties(this.black,this.objProperties.fontSizeData,this.objProperties.fontFamily,'normal');
		var px1 = this.objProperties.x + this.objProperties.widthCell + this.objProperties.widthCellStudents;
		var px2 = px1 + this.objProperties.widthCellTot*2;
		var py = this.objProperties.y + this.objProperties.heightCell;
		var ln = +this.objProperties.colspan;
		var arr = this.widthNoteCell.slice(0,this.objProperties.totalMatxPage*this.objProperties.evaCell);		
		var rc = [];
		for(var i=0; i < this.objProperties.totalMatxPage; i++)
			rc[i] = this.objProperties.widthCell*this.objProperties.evaCell;
		for(var i = 1; i<=this.objProperties.totalRow; i++){
			this.rep.addAbsTable(this.objProperties.x, py+(i*this.objProperties.heightCell) + ln*i, [this.objProperties.widthCell,this.objProperties.widthCellStudents], 1, this.objProperties.heightCell, false, true);
			this.rep.addAbsTable(px1, py+(i*this.objProperties.heightCell) + ln*i, [this.objProperties.widthCellTot, this.objProperties.widthCellTot], 1, this.objProperties.heightCell, false, true);
			this.rep.addAbsTable(px2, py+(i*this.objProperties.heightCell) + ln*i, arr, 1, this.objProperties.heightCell, false, true);
			this.rep.addAbsTable(px2-0.3, py+(i*this.objProperties.heightCell) + ln*i, rc, 1, this.objProperties.heightCell, false, true);
			this.rep.addAbsTable(px2-0.2, py+(i*this.objProperties.heightCell) + ln*i, rc, 1, this.objProperties.heightCell, false, true);		
			this.rep.addAbsTable(px2-0.1, py+(i*this.objProperties.heightCell) + ln*i, rc, 1, this.objProperties.heightCell, false, true);
			this.rep.addAbsTable(px2+0.1, py+(i*this.objProperties.heightCell) + ln*i, rc, 1, this.objProperties.heightCell, false, true);
			this.rep.addAbsTable(px2+0.2, py+(i*this.objProperties.heightCell) + ln*i, rc, 1, this.objProperties.heightCell, false, true);
			this.rep.addAbsTable(px2+0.3, py+(i*this.objProperties.heightCell) + ln*i, rc, 1, this.objProperties.heightCell, false, true);
		}
		return this;
	}
	
	render(){
		this.rep.render();
		setTimeout(this.rep.printPDF,1000);
	}
}