function isVenc(f){
  if(f==undefined || f==null || f=='null' || f.trim()=='')
	return false;
  var today = calendarPagoDocfecha.getFechaFromEdit();//Tool.getDate();
  fecha1 = new Date(parseInt(today.substring(6, 10)), parseInt(today.substring(3, 5)), parseInt(today.substring(0, 3)));
  fecha2 = new Date(parseInt(f.substring(6, 10)), parseInt(f.substring(3, 5)), parseInt(f.substring(0, 3)));
  var diff = fecha1 - fecha2;
  if (diff < 0) 
  	return false; //NO vencida
  else 
  	return true; //vencida
};

function isProntoPago(f){
  if(isVenc(f))
    return false;
  else
    return true;  	
};
  		
var Documento = function(){
	    //DATA DEL RECIBO
	    var moneda='';
	    var nu_recibo='';
	    var institucion = '';
	    var co_plantel = '';
	    var fecha='';
	    var rif='';
	    var telf='';
	    var dir='';
	    var cli='';
	    var ci='';
	    var telfCli = '';
	    var typeDoc = 'RECIBO';
	    var id_doc = '';
	    var topMargin = 20;
	    var rep = new Report('portrait');
	    var arrCols    = [260,80,340,70];
	    var arrSubCols = [140,60,60];
	    var arrCols2 = [arrCols[1],arrCols[2],arrCols[3]];
	    var totalRows = 10;
	    var maxRows = 46;
	    var heightHeadTable = 20;
	    var heightCellsTable = 16;
	    var idxFP = 0;
	    var idxConcept=0;
	    var total=0;
	    var cancelado=0;
	    var tMora = 0;
	    var tDesc = 0;
	    var sTotal = 0;
	    var sFavor = 0;
	    var emisor = '';
	    var estudiante = '';
	    var cellClient = '';
	    var addressClient = '';
      var salFavorClient = '';
	    //var resta = 0;
		var obs="";
		var nu_factura='';
		var dataFactura14 ={
				arrEstudiantes : [],
				arrConceptos : [],
				arrMontos : []	
			}			
	    var jfp = {
	    	data :[[],[],[]],
	    	records : new Array()
	    };
	    
	    var jc = {
	    	data : [[],[],[]],
	    	records : new Array()
	    };

	    this.addJsonEstudiante = function(jstd) {
				dataFactura14.arrEstudiantes = jstd.data[0];
	    	for(var f=0; f<jstd.data[0].length; f++) {
	    		estudiante += jstd.data[0][f] + '. ';
	        };
	    };

	    this.addJsonFormaPago = function(jpw){
	      jfp.data = jpw.data;
	      for(var f=0; f<jpw.data[0].length; f++) {
	        jfp.records[f] = new Array();	        
	        for(var c=0; c<jpw.data.length; c++) {
	      	  jfp.records[f][c]=jfp.data[c][f];
	        };
	      };	      
	    };
	    
	    this.addJsonConcepto = function(jcon){
	      jc.data = jcon.data;
				dataFactura14.arrConceptos = jcon.data[1];
				dataFactura14.arrMontos = jcon.data[2];
	      for(var f=0; f<jcon.data[0].length; f++) {
	      	jc.records[f] = new Array();
	        for(var c=0; c<jcon.data.length; c++) {
	          jc.records[f][c] = jcon.data[c][f];	
	        }
	      }
	      if(jcon.data[0].length > totalRows)
	        totalRows = jcon.data[0].length;
          if(totalRows > maxRows)
            totalRows = maxRows;
	    };
	    
	    this.addJsonGen = function(jg){
	      nu_recibo 	= jg.data[0][0];
	      institucion 	= jg.data[1][0];
	      co_plantel 	= jg.data[2][0];
	      fecha			= jg.data[3][0];
	      rif			= jg.data[4][0];
	      telf			= jg.data[5][0];
	      dir			= jg.data[6][0];
	      cli			= jg.data[7][0];
	      ci  			= jg.data[8][0];
	      telfCli 		= jg.data[9][0];
	      cancelado		= jg.data[10][0];
	      emisor 		= jg.data[11][0];
	      obs 			= jg.data[12][0];
	      id_doc 		= jg.data[13][0];
		  sFavor	    = jg.data[14][0];
		  nu_factura	= jg.data[15][0];
		  cellClient 	= jg.data[16][0];
		  addressClient = jg.data[17][0];
	    };
	    
	    this.setDocType=function(docType){
	      typeDoc = docType;
	    };
	    
	    this.setTopMargin = function(tm){
	      topMargin = tm;
	    };
	    
	    this.setTotalRows = function(tr){
	      totalRows = tr;	
	    };
	    
	    var addTables = function(x,y){
	      rep.addAbsTable(x, y, arrCols, 1, heightHeadTable, false);
	      rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','bold','black');
	      rep.addText(x+74,y+14 ,'FORMAS DE PAGO',false);
	      rep.addText(x+4+arrCols[0] + (arrCols[1]/2) - rep.measureText('C.I.'),y+14 ,'C.I.',false);
	      rep.addText(x+30+arrCols[0]+arrCols[1] + (arrCols[2]/2 - rep.measureText('CONCEPTOS')) ,y+14 ,'CONCEPTOS',false);
	      rep.addText(x+5+arrCols[0]+arrCols[1]+arrCols[2],y+14 ,'MONTO '+moneda,false);
	      //rep.addText(x+18+arrCols[0]+arrCols[1]+arrCols[2]+arrCols[3],y+14 ,'MONTO '+moneda,false);
	      rep.addAbsTable(x, y+heightHeadTable, arrSubCols , 1, heightHeadTable, false);
	      rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','normal','black');
	      rep.addText(x+40,y+34 ,'DESCRIPCION',false);
	      rep.addText(x+8+arrSubCols[0],y+34 ,'FECHA',false);
	      rep.addText(x+3+arrSubCols[0]+arrSubCols[1],y+34 ,'MONTO '+moneda,false);
	      //TABLAS DE DATOS
	      rep.addAbsTable(x, y+heightHeadTable*2, arrSubCols , 1, heightCellsTable*totalRows, false);
	      rep.addAbsTable(x+arrCols[0], y+heightHeadTable, arrCols2, 1, heightCellsTable*totalRows+heightHeadTable, false);
	    };
	    
	    var addPayWay = function(arrData){
	      rep.addText(22+arrSubCols[0], topMargin+100+34+heightCellsTable*(1 +idxFP), arrData[1],false);
	      rep.addText(arrSubCols[2] - rep.measureText(arrData[2]) + 16 + arrSubCols[0]+arrSubCols[1], topMargin+100+34+heightCellsTable*(1 +idxFP), arrData[2],false);
	      
	      if(arrData[0] != 'SALDO A FAVOR'){
	    	  total += parseFloat(arrData[2]);
	      }
	      
	      var arrSplit = arrData[0].split(" ");
	      var filas = new Array();
	      var idx=0;
	      var t2 = parseInt(arrSubCols[0], 10);
	      var t1=0;
	      filas[idx]='';
	      for(var i=0; i<arrSplit.length; i++){
	        t1 += parseInt(rep.measureText(filas[idx]),10);
	        if( t1 >= t2) {  
	          idx++;
	          filas[idx]='';
	          t1=0;
	        };
	        filas[idx]+=arrSplit[i] + " ";
	      };  	
	      
	      for(var i=0; i<filas.length; i++){
	        rep.addText(22, topMargin+100+34+heightCellsTable*(1 + idxFP), filas[i],false);
	        idxFP++;	
	      }
	    };
	    
	    var addConcept = function(arrConcept){
	      tDesc += parseFloat(parseFloat(arrConcept[2]) * parseFloat(arrConcept[3]/100));
	      tMora += parseFloat(parseFloat(arrConcept[2]) * parseFloat(arrConcept[4]/100));
	      sTotal += parseFloat(parseFloat(arrConcept[2]));
	      rep.addText(24+arrCols[0], topMargin+100+34+heightCellsTable*(idxConcept), arrConcept[0], false);
	      rep.addText(arrCols[3] - rep.measureText(''+parseFloat(arrConcept[2]).toFixed(2)) + 16 + arrCols[0]+arrCols[1]+arrCols[2], topMargin+100+34+heightCellsTable*(idxConcept), ''+parseFloat(arrConcept[2]).toFixed(2), false);
	      var arrSplit = arrConcept[1].split(" ");
	      var filas = new Array();
	      var idx=0;
	      var t2 = parseInt(arrCols[2], 10);
	      var t1=0;
	      filas[idx]='';
	      for(var i=0; i<arrSplit.length; i++){
	      	filas[idx]+=arrSplit[i] + " ";
	        t1 += parseInt(rep.measureText(filas[idx]),10);
	        if( t1 >= 1494) {  
	          idx++;
	          filas[idx]='';
	          t1=0;
	        };
	      }; 	      
	      for(var i=0; i<filas.length; i++){
	        rep.addText(24+arrCols[0]+arrCols[1], topMargin+100+34+heightCellsTable*(idxConcept), filas[i], false);
	        idxConcept++;
	      }
	    };
      
      
      /////////////////////////////FACTURA//MURIALDO///////////////////////////////////////////////////////////////
      function facturaMurialdo(){
        if(typeDoc.trim().toUpperCase()=='FACTURA M'){
          if(json('getTopMargin'))
            topMargin = parseInt(json('getTopMargin').data[0][0], 10);
          else
            topMargin = 64;
        }
				rep.setPositionIcon(756,20);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),12,'helvetica','bold','black');
				if(typeDoc.toUpperCase()!='FACTURA M')
					rep.addText(20, topMargin,'CONTRIBUYENTE FORMAL',false);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),14,'helvetica','bold','black');
				if(typeDoc.toUpperCase()==='RECIBO')
					rep.addText(525, topMargin, typeDoc+' Nº: '+nu_recibo,false);  
				if(typeDoc.toUpperCase()=='ANULADO')
					rep.addText(525, topMargin, typeDoc,false);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),10,'helvetica','bold','black');
				if(typeDoc.toUpperCase()!='FACTURA M')
					rep.addText(20, topMargin+20,institucion,false);
				if(typeDoc.toUpperCase()!='FACTURA M')
					rep.addText(525, topMargin+20,'FECHA: '+fecha,false);
				else{
					if (nu_factura != 'OFF')
						rep.addText(20, topMargin+60,'FACTURA Nº : '+nu_factura,false);
					else
						rep.addText(20, topMargin+60,'',false);
					
					rep.addText(200, topMargin+60,'FECHA: '+fecha+'  Doc. Nº : '+id_doc,false);
				}
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','normal','black');
				if(typeDoc.toUpperCase()!='FACTURA M')
					rep.addText(20, topMargin+40,'Cod. Plantel: '+co_plantel+ '  -  RIF: '+rif + '  	Telf: '+telf,false);
				if(typeDoc.toUpperCase()!='FACTURA M')
					rep.addText(20, topMargin+55,'DIRECCION: '+dir,false);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),7,'helvetica','normal','black');
				if(typeDoc.toUpperCase()=='RECIBO')
					rep.addText(660, topMargin+58,'Documento Nº : '+id_doc,false);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','normal','black');
				rep.addLine(20, topMargin+65,500,topMargin+65,rep.getRGBAObj(0,0,0,1),1,false);
				rep.addText(20, topMargin+75,'NOMBRE O RAZÓN SOCIAL: '+cli, false);
				rep.addText(20, topMargin+86,'C.I/Rif: '+ci+'     Telf: '+telfCli,false);
				addTables(20,topMargin+100);	
				var nextPage = false;
				var idxRecord = 0;
				if(jfp.records.length > 0)
					for(var i=0; i<jfp.records.length; i++){	
						addPayWay(jfp.records[i]);
					}
				if(jc.records.length > 0){
					for(var i=0; i<jc.records.length; i++){
						if(i < maxRows){  	
							if(jc.records[idxRecord]!=undefined){
								var valor = parseInt(rep.measureText(jc.records[idxRecord][1]),10)/parseInt(arrCols[2], 10) + idxConcept;	
								if( valor < maxRows  ){		  	        
									addConcept(jc.records[i]);
								}  
								else{
									nextPage = true;
									idxRecord = i;
									break;
								}
							}  
						}
						else {
							nextPage = true;
							idxRecord = i;
							break;
						}
					}
				}  
				while(nextPage) {
					nextPage= false;
					rep.addPage();
					idxConcept=0;
					addTables(20,topMargin+100);
					var tp = jc.records.length-idxRecord;
					for(var i=0; i<tp; i++){
						if(i < maxRows ){  
							if(jc.records[idxRecord]!=undefined)	
								if(parseInt(rep.measureText(jc.records[idxRecord][1]),10)/parseInt(arrCols[2], 10) + idxConcept < maxRows  ){
									addConcept(jc.records[idxRecord]);
									idxRecord++;
								}
								else {
									nextPage = true;
									break;
								}
						}
						else {
							nextPage = true;
							break;
						}
					}
				}
				//resta = parseFloat(sTotal) + parseFloat(tMora) - parseFloat(tDesc) - parseFloat(cancelado);
				//if (resta < 0 ) resta = 0;
				
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','normal','black');
				rep.addText(20,3*heightHeadTable+topMargin+37 ,'Saldo a Favor : '+parseFloat(sFavor).toFixed(2),false);
				//rep.addTextJustRight(755,3*heightHeadTable+topMargin+34 ,'De los conceptos pagados usted Resta '+moneda.substring(0,2)+' : '+parseFloat(resta).toFixed(2),false);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),9,'helvetica','bold','black');  
				rep.addTextJustRight(685,3*heightHeadTable+heightCellsTable*totalRows+topMargin+100 ,'SUB TOTAL '+moneda.substring(0,2)+': ',false);
				rep.addTextJustRight(685,3*heightHeadTable+heightCellsTable*totalRows+topMargin+120 ,'TOTAL PAGADO '+moneda.substring(0,2)+': ',false);
				rep.addTextJustRight(765,3*heightHeadTable+heightCellsTable*totalRows+topMargin+100 ,''+sTotal.toFixed(2),false);
				rep.addTextJustRight(765,3*heightHeadTable+heightCellsTable*totalRows+topMargin+120 ,''+parseFloat(total).toFixed(2),false);
				rep.addText(220,3*heightHeadTable+heightCellsTable*totalRows+topMargin+100 ,'TOTAL MORA '+moneda.substring(0,2)+': '+tMora.toFixed(2),false);
				rep.addText(400,3*heightHeadTable+heightCellsTable*totalRows+topMargin+100 ,'TOTAL DESCUENTO '+moneda.substring(0,2)+': '+tDesc.toFixed(2),false);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','bold','black');
				rep.addText(20,3*heightHeadTable+heightCellsTable*totalRows+topMargin+120 ,'EMITIDO POR : ',false);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','normal','black');
				rep.addText(120,3*heightHeadTable+heightCellsTable*totalRows+topMargin+120 ,emisor,false);	
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','bold','black');
				rep.addText(20,3*heightHeadTable+heightCellsTable*totalRows+topMargin+132 ,'ESTUDIANTE : ',false);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),7,'helvetica','normal','black');
				rep.addText(120,3*heightHeadTable+heightCellsTable*totalRows+topMargin+132 ,estudiante,false);						
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','bold','black');
				rep.addText(20,3*heightHeadTable+heightCellsTable*totalRows+topMargin+144 ,'OBSERVACIONES : ',false);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','normal','black');
				rep.addText(120,3*heightHeadTable+heightCellsTable*totalRows+topMargin+144 ,obs,false);						
				var mid = 560;
				//if(3*heightHeadTable+heightCellsTable*totalRows+topMargin+115+5 < mid)
					//rep.addLine(0, mid, 790, mid, rep.getRGBAObj(0,0,0,0.2), 1, false);
				rep.render();
				if(typeDoc.toUpperCase()=='FACTURA')
					rep.printPDF();
				else 
					rep.previewHTML(); 
      }
      
      function facturaGen(){
        if(typeDoc.trim().toUpperCase()=='FACTURA'){
					if(json('getTopMargin'))
						topMargin = parseInt(json('getTopMargin').data[0][0], 10);
					else
						topMargin = 64;
				}
				rep.setPositionIcon(756,20);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),12,'helvetica','bold','black');
				if(typeDoc.toUpperCase()!='FACTURA')
					rep.addText(20, topMargin,'CONTRIBUYENTE FORMAL',false);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),14,'helvetica','bold','black');
				if(typeDoc.toUpperCase()==='RECIBO')
					rep.addText(525, topMargin, typeDoc+' Nº: '+nu_recibo,false);  
				if(typeDoc.toUpperCase()=='ANULADO')
					rep.addText(525, topMargin, typeDoc,false);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),10,'helvetica','bold','black');
				if(typeDoc.toUpperCase()!='FACTURA')
					rep.addText(20, topMargin+20,institucion,false);
				if(typeDoc.toUpperCase()!='FACTURA')
					rep.addText(525, topMargin+20,'FECHA: '+fecha,false);
				else{
					if (nu_factura != 'OFF')
						rep.addText(20, topMargin+60,'FACTURA Nº : '+nu_factura,false);
					else
						rep.addText(20, topMargin+60,'',false);
					
					rep.addText(532, topMargin+60,'FECHA: '+fecha+'  Doc. Nº : '+id_doc,false);
				}
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','normal','black');
				if(typeDoc.toUpperCase()!='FACTURA')
					rep.addText(20, topMargin+40,'Cod. Plantel: '+co_plantel+ '  -  RIF: '+rif + '  	Telf: '+telf,false);
				if(typeDoc.toUpperCase()!='FACTURA')
					rep.addText(20, topMargin+55,'DIRECCION: '+dir,false);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),7,'helvetica','normal','black');
				if(typeDoc.toUpperCase()=='RECIBO')
					rep.addText(660, topMargin+58,'Documento Nº : '+id_doc,false);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','normal','black');
				rep.addLine(20, topMargin+65,775,topMargin+65,rep.getRGBAObj(0,0,0,1),1,false);
				rep.addText(20, topMargin+75,'NOMBRE O RAZÓN SOCIAL: '+cli, false);
				rep.addText(20, topMargin+86,'C.I/Rif: '+ci+'     Telf: '+telfCli,false);
				addTables(20,topMargin+100);	
				var nextPage = false;
				var idxRecord = 0;
				if(jfp.records.length > 0)
					for(var i=0; i<jfp.records.length; i++){	
						addPayWay(jfp.records[i]);
					}
				if(jc.records.length > 0){
					for(var i=0; i<jc.records.length; i++){
						if(i < maxRows){  	
							if(jc.records[idxRecord]!=undefined){
								var valor = parseInt(rep.measureText(jc.records[idxRecord][1]),10)/parseInt(arrCols[2], 10) + idxConcept;	
								if( valor < maxRows  ){		  	        
									addConcept(jc.records[i]);
								}  
								else{
									nextPage = true;
									idxRecord = i;
									break;
								}
							}  
						}
						else {
							nextPage = true;
							idxRecord = i;
							break;
						}
					}
				}  
				while(nextPage) {
					nextPage= false;
					rep.addPage();
					idxConcept=0;
					addTables(20,topMargin+100);
					var tp = jc.records.length-idxRecord;
					for(var i=0; i<tp; i++){
						if(i < maxRows ){  
							if(jc.records[idxRecord]!=undefined)	
								if(parseInt(rep.measureText(jc.records[idxRecord][1]),10)/parseInt(arrCols[2], 10) + idxConcept < maxRows  ){
									addConcept(jc.records[idxRecord]);
									idxRecord++;
								}
								else {
									nextPage = true;
									break;
								}
						}
						else {
							nextPage = true;
							break;
						}
					}
				}
				//resta = parseFloat(sTotal) + parseFloat(tMora) - parseFloat(tDesc) - parseFloat(cancelado);
				//if (resta < 0 ) resta = 0;
				
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','normal','black');
				rep.addText(20,3*heightHeadTable+topMargin+37 ,'Saldo a Favor : '+parseFloat(sFavor).toFixed(2),false);
				//rep.addTextJustRight(755,3*heightHeadTable+topMargin+34 ,'De los conceptos pagados usted Resta '+moneda.substring(0,2)+' : '+parseFloat(resta).toFixed(2),false);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),9,'helvetica','bold','black');  
				rep.addTextJustRight(685,3*heightHeadTable+heightCellsTable*totalRows+topMargin+100 ,'SUB TOTAL '+moneda.substring(0,2)+': ',false);
				rep.addTextJustRight(685,3*heightHeadTable+heightCellsTable*totalRows+topMargin+120 ,'TOTAL PAGADO '+moneda.substring(0,2)+': ',false);
				rep.addTextJustRight(765,3*heightHeadTable+heightCellsTable*totalRows+topMargin+100 ,''+sTotal.toFixed(2),false);
				rep.addTextJustRight(765,3*heightHeadTable+heightCellsTable*totalRows+topMargin+120 ,''+parseFloat(total).toFixed(2),false);
				rep.addText(220,3*heightHeadTable+heightCellsTable*totalRows+topMargin+100 ,'TOTAL MORA '+moneda.substring(0,2)+': '+tMora.toFixed(2),false);
				rep.addText(400,3*heightHeadTable+heightCellsTable*totalRows+topMargin+100 ,'TOTAL DESCUENTO '+moneda.substring(0,2)+': '+tDesc.toFixed(2),false);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','bold','black');
				rep.addText(20,3*heightHeadTable+heightCellsTable*totalRows+topMargin+120 ,'EMITIDO POR : ',false);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','normal','black');
				rep.addText(120,3*heightHeadTable+heightCellsTable*totalRows+topMargin+120 ,emisor,false);	
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','bold','black');
				rep.addText(20,3*heightHeadTable+heightCellsTable*totalRows+topMargin+135 ,'ESTUDIANTE : ',false);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),7,'helvetica','normal','black');
				rep.addText(120,3*heightHeadTable+heightCellsTable*totalRows+topMargin+135 ,estudiante,false);						
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','bold','black');
				rep.addText(20,3*heightHeadTable+heightCellsTable*totalRows+topMargin+150 ,'OBSERVACIONES : ',false);
				rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','normal','black');
				rep.addText(120,3*heightHeadTable+heightCellsTable*totalRows+topMargin+150 ,obs,false);						
				var mid = 560;
				//if(3*heightHeadTable+heightCellsTable*totalRows+topMargin+115+5 < mid)
					//rep.addLine(0, mid, 790, mid, rep.getRGBAObj(0,0,0,0.2), 1, false);
				rep.render();
				if(typeDoc.toUpperCase()=='FACTURA')
					rep.printPDF();
				else 
					rep.previewHTML();   
      }
      
///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		function factura14(){
	       //DATA DEL RECIBO
	       	 if(json('getTopMargin'))
				 	topMargin = parseInt(json('getTopMargin').data[0][0], 10);
				 else
				 	topMargin = 64;
				 rep.setPositionIcon(756,20);
				 rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),9,'helvetica','bold','black');		
				 
				 if (nu_factura != 'OFF')
				 	rep.addText(249, topMargin+132,'FACTURA Nº : '+nu_factura,false);
				 else
					rep.addText(249, topMargin+132,'',false);
				 
				 rep.setFontProperties(rep.getRGBAObj(0,0,0,0.5),7,'helvetica','bold','black');	
				 rep.addText(249, topMargin+142,'CONTRIBUYENTE FORMAL ',false);
				 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////				 
				 rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),9,'helvetica','bold','black');				 
				 rep.addText(16, topMargin+165,'Fecha: '+fecha,false);
				 rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),7,'helvetica','bold','black');		
				 rep.addText(16, topMargin+175,'NOMBRE Ó RAZÓN SOCIAL: '+cli,false);
				 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				 rep.addText(16, topMargin+195,'CED/RIF: '+ci,false);
				 rep.addText(16, topMargin+205,'TELÉFONO: '+cellClient ,false);
				 rep.addText(16, topMargin+215,'DIRECCIÓN: '+addressClient.substring(0, 57),false);
				 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				 rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),10,'helvetica','bold','black');		
				 if(parseFloat(sFavor).toFixed(2) > 0)
				 	rep.addText(16, topMargin+235, 'La cantidad de '+moneda.substring(0,2)+'. '+cancelado + '  ---  S.F. : '+moneda.substring(0,2)+'. '+parseFloat(sFavor).toFixed(2), false);
				 else
				 	rep.addText(16, topMargin+235, 'La cantidad de '+moneda.substring(0,2)+' '+cancelado, false);
				 rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),9,'helvetica','bold','black');
				 rep.addText(16, topMargin+255,'ALUMNOS',false);
				 rep.addText(145, topMargin+255,'CONCEPTOS',false);
				 rep.addText(280, topMargin+255,'MONTO',false);
				 rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),7,'helvetica','bold','black');
				 rep.addText(16, topMargin+259,'____________________________________________________________________________',false);
				 
				 var cont = 0;
				 var tot = 0;
				 var lnSpace = 8;
				 var tle = 1;
				 var tamMax = dataFactura14.arrEstudiantes.length;
				 const sizeLn = 25;
				 for(var i=0; i<dataFactura14.arrMontos.length; i++){
						if(i < tamMax){
							tle = dataFactura14.arrEstudiantes[i].length/sizeLn;
							if(dataFactura14.arrEstudiantes[i].length % sizeLn !== 0)
								tle++;
						}
						if(tle < 1) tle=1;
						
						let tlc = dataFactura14.arrConceptos[i].length/sizeLn;
						if((dataFactura14.arrConceptos[i].length % sizeLn) !== 0)
							tlc++;
						
						let tl = 0;
						if(tle > tlc)	tl = tle;	else tl = tlc;
						
						for(var ce=0; ce<tle; ce++){
							if(i < tamMax)
							  rep.addText(16, topMargin+271+cont*lnSpace+ce*lnSpace, dataFactura14.arrEstudiantes[i].substr(ce*sizeLn, ce*sizeLn + sizeLn)+'',false);
						}
						for(var cc=0; cc<tlc; cc++){
							rep.addText(146, topMargin+271+cont*lnSpace+cc*lnSpace, dataFactura14.arrConceptos[i].substr(cc*sizeLn, cc*sizeLn  + sizeLn)+'',false);	
						}
						rep.addText(280, topMargin+271+cont*lnSpace, dataFactura14.arrMontos[i]+'',false);
						cont = cont + tl;
						tot+=parseFloat(dataFactura14.arrMontos[i]);
				 }	 
				 
				 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				 rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),10,'helvetica','bold','black');			
				 rep.addText(240, topMargin+505,'Total '+moneda.substring(0,2)+'. '+tot.toFixed(2) ,false);
				 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				 rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),7,'helvetica','bold','black');	
				 rep.addText(16, topMargin+510,'____________________________________________________________________________',false);				 		
				 rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','bold','black');	
				 rep.addText(16, topMargin+522,'Emitido Por: '+emisor ,false);
				 rep.render();
				 rep.printPDF();
	   	}
	   	
	   	function facturaCagigal(){			
			let j_getDataGeneral = json('getDataGeneral');            
            //var j_getDataFormaPago = json('getDataFormaPago');
            let j_getDataEstudiante = json('getDataEstudiante');             
            let j_getMoneda = json('getMoneda');
            let j_getDataConceptoSinRubro = json('getDataConceptoSinRubro');
            let topMargin = 0;
            let moneda = j_getMoneda.data[0][0];
            if(json('getTopMargin')) topMargin = parseInt(json('getTopMargin').data[0][0], 10);
			let book = new Book({x:20, y:20,title:'FACTURA CAGIGAL', bodyWidth:800, bodyHeight:600});
            book.addToBody();               
            let s1 = book.createSheet();         
            
            s1.addImage({x:13, y:topMargin+45, w:50, h:50, path:'images/logo/CAGIGAL_logo_factura.png',position:'absolute'});
            s1.addText({
                x:245, 
                y:topMargin+55, 
                text:'FACTURA:',                 
                width:52,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',
                gap:7
            });
            
            s1.addText({
                x:302, 
                y:topMargin+55,                 
                text: j_getDataGeneral.data[0][0], 
                width:64,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',
                gap:6
            });
            s1.addImage({x:427, y:topMargin+45, w:50, h:50, path:'images/logo/CAGIGAL_logo_factura.png',position:'absolute'});
            s1.addText({
                x:646, 
                y:topMargin+55, 
                text:'FACTURA:',                 
                width:52,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',
                gap:7
            });
            
            s1.addText({
                x:702, 
                y:topMargin+55,                 
                text: j_getDataGeneral.data[0][0], 
                width:64,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',
                gap:6
            });
            s1.addText({
                x:244, 
                y:topMargin+100, 
                text:'FECHA:',                 
                width:60,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',
                gap:7
            });         
            
            s1.addText({
                x:287, 
                y:topMargin+100,                 
                text: j_getDataGeneral.data[3][0], 
                width:55,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',
                gap:6
            });
            
            s1.addText({
                x:647, 
                y:topMargin+100, 
                text:'FECHA:',                 
                width:60,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',
                gap:7
            });     
             
            s1.addText({
                x:689, 
                y:topMargin+100,                 
                text: j_getDataGeneral.data[3][0], 
                width:55,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',
                gap:6
            }); 
            ////////////////////////////////////////////CUADRO      
            s1.rectangle({x1:22, y1:117, x2:367, y2:182,position:'absolute', borderColor: 'black', r1:8, r2:8, r3:8, r4:8});            
            s1.addText({
                x:26, 
                y:topMargin+125, 
                text:'RECIBIMOS DE :',                 
                width:270,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:5
            });     
             
            s1.addText({
                x:102, 
                y:topMargin+125,                 
                text: j_getDataGeneral.data[7][0], 
                width:255,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:5
            }); 
            
            s1.addText({
                x:26, 
                y:topMargin+143, 
                text:'CED/RIF. :',                 
                width:50,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',
                //gap:5
            });     
            
            s1.addText({
                x:77, 
                y:topMargin+143,                 
                text: j_getDataGeneral.data[8][0], 
                width:80,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:5
            });
            
            s1.addText({
                x:185, 
                y:topMargin+143, 
                text:'TELF. :',                 
                width:30,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',
                //gap:5
            });
            
            s1.addText({
                x:221, 
                y:topMargin+143,                 
                text: j_getDataGeneral.data[16][0], 
                width:90,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:5
            }); 
            
            s1.addText({
                x:26, 
                y:topMargin+160, 
                text:'DIRECCIÓN :',                 
                width:59,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:5
            });
            
            let drn = j_getDataGeneral.data[17][0].split(' ');
            let dir1 = '';
            let dir2 = '';
            let f=false;
            
            for(let ct=0; ct<drn.length; ct++){
                if(dir1.length + drn[ct].length < 44 && !f){dir1+=drn[ct]+' ';}
                else{f=true; dir2 += drn[ct]+' ';}
            }
                        
            s1.addText({
                x:87, 
                y:topMargin+160,                 
                text: dir1, 
                width:270,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:5
            });  
            
            s1.addText({
                x:87, 
                y:topMargin+170,                 
                text: dir2, 
                width:270,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:5
            });
            
            s1.rectangle({x1:422, y1:117, x2:767, y2:182,position:'absolute', borderColor: 'black', r1:8, r2:8, r3:8, r4:8});             
            s1.addText({
                x:427, 
                y:topMargin+125, 
                text:'RECIBIMOS DE :',                 
                width:74,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:5
            });     
            
            s1.addText({
                x:503, 
                y:topMargin+125,                 
                text: j_getDataGeneral.data[7][0], 
                width:260,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:5
            }); 
            
            s1.addText({
                x:427, 
                y:topMargin+143, 
                text:'CED/RIF. :',                 
                width:49,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',
                //gap:5
            });     
            
            s1.addText({
                x:479, 
                y:topMargin+143,                 
                text: j_getDataGeneral.data[8][0], 
                width:69,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:5
            });
            
            s1.addText({
                x:590, 
                y:topMargin+143, 
                text:'TELF. :',                 
                width:35,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',
                //gap:5
            });
            
            s1.addText({
                x:626, 
                y:topMargin+143,                 
                text: j_getDataGeneral.data[16][0], 
                fontFamily :'verdana',
                width:55,
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:5
            }); 
            
            s1.addText({
                x:427, 
                y:topMargin+160, 
                text:'DIRECCIÓN :',                 
                width:59,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:5
            });
            
            s1.addText({
                x:484, 
                y:topMargin+160,                 
                text: dir1, 
                width:280,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:5
            });
            
            s1.addText({
                x:482, 
                y:topMargin+170,                 
                text: dir2, 
                width:280,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:5
            });
                             
            //////////////////////////////TABLAS////////////////////////////            
            var ced = [];
            var des = [];  
            var mo = [];
            var tot = j_getDataConceptoSinRubro.data [0].length; 
                for(let i = 0; i < tot; i++) {
                    if(i<11)
                        ced.push(j_getDataConceptoSinRubro.data [0][i]);
                        //esp.push( );
                        des.push(j_getDataConceptoSinRubro.data [1][i]);              
                        mo.push(j_getDataConceptoSinRubro.data [2][i]);
                }                   
            
            s1.addTable({
                x : 24,
                y : topMargin+187,
                fontColorTitles : 'black',
                fontSizeData : 9,
                lineColor : 'rgba(0,0,0,0.0)',
                alignColumns:['left','left','right'],
                titles : [],
                bgCellTitles : 'rgba(100,100,100,0)',
                bgCellColumns : ['white','white','white'],
                alignTitles:['left','center','center'],
                fontSizeTitles : 11,
                columnTitles : ['Estudiantes','Conceptos','Monto '+moneda],
                widthColumns : [5,200,62], 
                rows : 10,
                heightRow  : 19,
                data : [ced,des,mo],
                dataRowIndexIni : 0,
                dataRowIndexEnd : 9,
                position:'absolute'
            });
            
            //s1.hLine({x1:23, y:topMargin+415, x2:364,position:'absolute'});
            s1.bar({x:23, y:topMargin+425, height:1, width:336, backgroundColor:'rgba(0,0,0,1)'});
            s1.addText({
                x:30, 
                y:topMargin+427, 
                text:'Contribuyente Formal :',                 
                width:140,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:6
            });
            
            s1.addText({
                x:226, 
                y:topMargin+427, 
                text:'Total '+moneda+':',                 
                width:55,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:6
            });
            s1.hLine({x1:23, y:topMargin+441, x2:359,position:'absolute'});            
            
            s1.addText({
                x:268, 
                y:topMargin+427,                 
                text: j_getDataGeneral.data[10][0],
                width:86,
                fontSize : 11,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'right', 
                position:'absolute',
                gap:0
            });
            
            //////////////////////////////TABLAS///IZQUIERDA////INDENTIFICACION//DEL//PAGO///////////////          
            var cedAlum = [];           
            var tot = j_getDataEstudiante.data [0].length; 
                for(let i = 0; i < tot; i++) {
                    if(i<5)
                        cedAlum.push(j_getDataEstudiante.data [0][i]);                        
                }                
            s1.addTable({
                x : 22,
                y : topMargin+413,
                fontColorTitles : 'black',
                fontSizeData : 9,
                lineColor : 'rgba(0,0,0,0.0)',
                alignColumns:['left'],
                titles : [],
                bgCellTitles : 'rgba(100,100,100,0)',
                bgCellColumns : ['white'],
                alignTitles:['left'],                
                widthColumns : [255,], 
                rows : 4,
                heightRow  : 12,
                data : [cedAlum],                
                dataRowIndexIni : 0,
                dataRowIndexEnd : 8,
                position:'absolute'                
            });               
            
            //////////////////////////////TABLA//DERECHA//////
            var ced = [];
            var des = [];  
            var mo = [];
            var tot = j_getDataConceptoSinRubro.data [0].length; 
                for(let i = 0; i < tot; i++) {
                    if(i<11)
                        ced.push(j_getDataConceptoSinRubro.data [0][i]);
                        //esp.push( );
                        des.push(j_getDataConceptoSinRubro.data [1][i]);              
                        mo.push(j_getDataConceptoSinRubro.data [2][i]);
                }  
            
            s1.addTable({
                x : 424,
                y : topMargin+187,
                fontColorTitles : 'black',
                fontSizeData : 9,
                lineColor : 'rgba(0,0,0,0.0)',
                alignColumns:['left','left','right'],
                titles : [],
                bgCellTitles : 'rgba(100,100,100,0)',
                bgCellColumns : ['white','white','white'],
                alignTitles:['left','center','center'],
                fontSizeTitles : 11,
                columnTitles : ['Estudiantes','Conceptos','Monto '+moneda],                
                widthColumns : [5,200,62], 
                rows : 10,
                heightRow  : 19,
                data : [ced,des,mo],
                dataRowIndexIni : 0,
                dataRowIndexEnd : 9,
                position:'absolute'
            });
            
            s1.hLine({x1:423, y:topMargin+425, x2:768,position:'absolute'});   
            
            s1.addText({
                x:435, 
                y:topMargin+427, 
                text:'Contribuyente Formal :',                 
                width:140,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:6
            });
            
            s1.addText({
                x:630, 
                y:topMargin+427, 
                text:'Total '+moneda+':',                 
                width:56,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:6
            });
            
            s1.hLine({x1:423, y:topMargin+441, x2:768,position:'absolute'});
            
            s1.addText({
                x:668, 
                y:topMargin+427,                 
                text: j_getDataGeneral.data[10][0],
                width:86,
                fontSize : 11,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'right', 
                position:'absolute',
                gap:0
            });         
            
            //////////////////////////////TABLAS///DERECHA///IDENTIFICACION///DEL///PAGO            
            var cedAlum = [];           
            var tot = j_getDataEstudiante.data [0].length; 
            for(let i = 0; i < tot; i++) {
                if(i<5)
                    cedAlum.push(j_getDataEstudiante.data [0][i]);                        
            }                
            s1.addTable({
                x : 422,
                y : topMargin+413,
                fontColorTitles : 'black',
                fontSizeData : 9,
                lineColor : 'rgba(0,0,0,0.0)',
                alignColumns:['left'],
                titles : [],
                bgCellTitles : 'rgba(100,100,100,0)',
                bgCellColumns : ['white'],
                alignTitles:['left'],                
                widthColumns : [255], 
                rows : 4,
                heightRow  : 12,
                data : [cedAlum],                
                dataRowIndexIni : 0,
                dataRowIndexEnd : 8,
                position:'absolute'                
            });               
            book.showFirst();
            book.setDimension(820,600);            
	   	}
			
	function facturaPilar(){
			/////////////////////////////////////////// JSON /////////////////////////////////////////////
	  var j_getDataGeneral = json('getDataGeneral');            
      var j_getDataFormaPago = json('getDataFormaPago');
      var j_getDataEstudiante = json('getDataEstudiante');             
      var j_getMoneda = json('getMoneda');
      var j_getTopMargin = json('getTopMargin');
      var j_getDataConceptoSinRubro = json('getDataConceptoSinRubro');                        

      ///////////////////////////////////////// INICIO /////////////////////////////////////////////
      if(json('getTopMargin'))
          topMargin = parseInt(json('getTopMargin').data[0][0], 10)-2;
			else
          topMargin = -2;            
      var book = new Book({x:20, y:20,title:'FACTURA PILAR', bodyWidth:800, bodyHeight:600});
      book.addToBody();               
      var s1 = book.createSheet();
      let f = j_getDataGeneral.data[3][0].split("-");
      let fecDia = f[0];
      let fecMes = f[1];
      let fecanio = f[2];
            
      s1.addText({
          x:608, 
          y:50+topMargin, 
          text: fecDia,  
          width:20,
          fontSize : 18,
          //backgroundColor:'lightGray',
          fontWeight : 'bold',
          textAlign:'center', 
          position:'absolute',
          gap:9
      });
      
      s1.addText({
          x:668, 
          y:50+topMargin, 
          text: fecMes, 
          width:20,
          fontSize : 18,
          //backgroundColor:'lightGray',
          fontWeight : 'bold',
          textAlign:'center', 
          position:'absolute',
          gap:9
      });
      
      s1.addText({
          x:722, 
          y:50+topMargin, 
          text: fecanio,  
          width:37,
          fontSize : 18,                
          fontWeight : 'bold',
          //backgroundColor:'lightGray', 
          textAlign:'center', 
          position:'absolute',
          gap:9
      });
            
			s1.addText({
          x:156, 
          y:132+topMargin, 
          //text:'CHACIN VALVUENA HEBERTO',
          text: j_getDataGeneral.data[7][0], 
          width:603,
          fontSize : 12,                
          fontWeight : 'bold',
          //backgroundColor:'lightGray', 
          textAlign:'left', 
          position:'absolute',
          
      });
          
      s1.addText({
          x:126, 
          y:155+topMargin, 
          //text:'CIUDAD DE LA FARIA EDIF. URAMA',
          text: j_getDataGeneral.data[17][0], 
          width:632,
          //fontFamily :'verdana',
          fontSize : 12,                
          fontWeight : 'bold',
          //backgroundColor:'lightGray', 
          textAlign:'left', 
          position:'absolute',
          
      });
      
      s1.addText({
          x:76, 
          y:176+topMargin, 
          //text:'Rif',
          text: j_getDataGeneral.data[8][0], 
          width:100,
          fontSize : 12,                
          fontWeight : 'bold',
          //backgroundColor:'lightGray', 
          textAlign:'center', 
          position:'absolute',
          gap:8
      });
      
      s1.addText({
          x:312, 
          y:176+topMargin, 
          //text:'0261-7196540',
          text: j_getDataGeneral.data[16][0], 
          width:130,
          fontSize : 12,                
          fontWeight : 'bold',
          //backgroundColor:'lightGray', 
          textAlign:'center', 
          position:'absolute',
          gap:8
      });     
      
      ///////////////////////REFRENCIA SALDO A FAVOR///////////////////           
      s1.addText({
          x:540, 
          y:176+topMargin,                
          text:'Nº DOC S/F : ',              
          width:75,
          fontSize : 12,                
          fontWeight : 'bold',
          //backgroundColor:'lightGray', 
          textAlign:'left', 
          position:'absolute',                
      });
      
      s1.addText({
          x:616, 
          y:176+topMargin,                       
          text: j_getDataGeneral.data[18][0],
          //text:'256879', 
          width:45,
          fontSize : 12,                
          fontWeight : 'bold',
          //backgroundColor:'lightGray', 
          textAlign:'left', 
          position:'absolute',
          
      });
      
      var cant = [];
      var esp  = [];
      var ced  = [];
      var des  = [];  
      var mo   = [];
      var tot_1 = j_getDataConceptoSinRubro.data [0].length; 
      for(let i = 0; i < tot_1; i++) {
          if(i<9){
              ced.push(j_getDataConceptoSinRubro.data [0][i]);
              esp.push(' ');
              des.push(j_getDataConceptoSinRubro.data [1][i]);                        
              cant.push(1);
              mo.push(j_getDataConceptoSinRubro.data [2][i]);
          }      
      }
      
      //PARA CALCULO DEL MONTO SUB TOTAL A PAGAR
      var sumaTotal = 0;
      mo.forEach(valor=>{
          sumaTotal+=parseFloat(valor);
      });
          
      s1.addTable({
          x : 28,
          y : 192+topMargin,
          fontColorTitles : 'black',
          lineColor : 'rgba(0,0,0,0.0)',
          alignColumns:['center','left','left','left','right'],
          titles : [],
          bgCellTitles : 'rgba(100,100,100,0)',
          bgCellColumns : ['white','white','white','white','white'],                
          widthColumns : [58,95,10,408,149], 
          rows : 9,
          heightRow  : 18,
          data : [cant,ced,esp,des,mo],
          dataRowIndexIni : 0,
          dataRowIndexEnd : 8,
          position:'absolute'
      });
                  
      /////DENOMINACION S/F ///////////////////////////////////////////////////////////////////////////            
       s1.addText({
          x:539, 
          y:411+topMargin, 
          text:'S/F',                
          width:22,
          fontFamily :'arial',
          fontSize : 12,                
          fontWeight : 'bold',
          //backgroundColor:'lightGray', 
          textAlign:'center', 
          position:'absolute',                
      });
      //////////////////////RECTANGULO NEGRO/////////////////              
      s1.addText({
          x:559, 
          y:408+topMargin,                                
          width:32,
          fontFamily :'arial',
          fontSize : 4,                
          fontWeight : 'bold',
          backgroundColor:'Black', 
          textAlign:'center', 
          position:'absolute',                
      });      
       
      //////////////////DATO DE SALDO A FAVOR////////////////// 
      s1.addText({
          x:610, 
          y:409+topMargin,                 
          text: parseFloat(j_getDataGeneral.data[14][0]).toFixed(2)+'',               
          width:40,
          fontFamily :'arial',
          fontSize : 10,                
          fontWeight : 'bold',
          //backgroundColor:'lightGray', 
          textAlign:'center', 
          position:'absolute',                
      });  
                  
      ///////////////////DATO BASE IMPONIBLE///////////////////////////
      s1.addText({
          x:672, 
          y:391+topMargin,                 
          text:  sumaTotal.toFixed(2),
          width:86,
          fontSize : 12,                
          fontWeight : 'bold',
          //backgroundColor:'lightGray', 
          textAlign:'right', 
          position:'absolute',                
      });
      ////////////////////////DATO BASE IMPONIBLE///////////////////////      
      s1.addText({
          x:672, 
          y:483+topMargin,                 
          text:  sumaTotal.toFixed(2),
          width:86,
          fontSize : 12,                

          fontWeight : 'bold',
          //backgroundColor:'lightGray', 
          textAlign:'right', 
          position:'absolute',                
      });               
                  
      //////////////FORMAS Y TIPOS DE PAGOS//////////////////////////////////     
      s1.addText({
          x:49, 
          y:401.5+topMargin, 
          text:'FORMA DE PAGO',               
          width:110,
          fontFamily :'verdana',
          fontSize : 8,                
          //fontWeight : 'bold',
          //backgroundColor:'lightGray', 
          textAlign:'center', 
          position:'absolute',                
      });
      
      ////////////REFERENCIA //////////////////////          

      s1.addText({
          x:318, 
          y:401.5+topMargin, 
          text:'REFERENCIA',                 
          width:60,
          fontFamily :'verdana',
          fontSize : 8,                
          //fontWeight : 'bold',
          textAlign:'center', 
          position:'absolute',                     
      });
     
      ////////////FECHA ///////////////////////////                


      s1.addText({
          x:409, 
          y:401.5+topMargin, 
          text:'FECHA',                
          width:60,
          fontFamily :'verdana',
          fontSize : 8,                
          //fontWeight : 'bold',
          textAlign:'center', 
          position:'absolute',                    

      });
     
      ////////////MONTO/////////////////////////          
      s1.addText({
          x:472, 
          y:401.5+topMargin, 
          text:'MONTO',                 
          width:60,
          fontFamily :'verdana',
          fontSize : 8,                
          //fontWeight : 'bold',
          textAlign:'center', 
          position:'absolute',               
      });        
      
      ///////////////////////////////////////////////////TABLA/IDENTIFICACION/FORMA/DE/PAGO
      var forPago = [[''],[''],[''],['']];                     
      var tot = j_getDataFormaPago.data [0].length;
      for(let i = 0; i < tot; i++) {
          if(i<4){
              if(i===0) forPago[0][0] = (j_getDataFormaPago.data [0][i]);                    
              if(i===0) forPago[1][0] = (j_getDataFormaPago.data [3][i]);                    
              if(i===0) forPago[2][0] = (j_getDataFormaPago.data [1][i]);                    
              if(i===0) forPago[3][0] = (j_getDataFormaPago.data [2][i]);                             
              ///////////////////////////////////////////////////////////
              if(i===1) forPago[0][1] = (j_getDataFormaPago.data [0][i]);                    
              if(i===1) forPago[1][1] = (j_getDataFormaPago.data [3][i]);                    
              if(i===1) forPago[2][1] = (j_getDataFormaPago.data [1][i]);                    
              if(i===1) forPago[3][1] = (j_getDataFormaPago.data [2][i]);                     
              ///////////////////////////////////////////////////////////
              if(i===2) forPago[0][2] = (j_getDataFormaPago.data [0][i]);                    
              if(i===2) forPago[1][2] = (j_getDataFormaPago.data [3][i]);                    
              if(i===2) forPago[2][2] = (j_getDataFormaPago.data [1][i]);                    
              if(i===2) forPago[3][2] = (j_getDataFormaPago.data [2][i]);                                                
          }
      }
                  
      s1.addTable({
          x : 27,
          y : 376+topMargin,
          fontColorTitles : 'black',
          fontSizeData : 7,
          fontFamilyData : 'arial',
          lineColor : 'rgba(0,0,0,0)',               
          alignColumns:['left','right','center','left'],
          titles : ['','','',''],
          bgCellTitles : 'rgba(100,100,100,0)',
          bgCellColumns : ['white','white','white','white'],
          columnTitles : ['','','',''],
          widthColumns : [260,88,110,80], 
          rows :3,
          heightRow  : 10,
          data : forPago,
          dataRowIndexIni : 0,
          dataRowIndexEnd : 2,
          position:'absolute'
      });          
                 
      /////////////////////////////////TABLA/IDENTIFICACION/ALUMNO/PAGO///////////////////////////////
      var cedAlum = [[''],[''],[''],['']];                     
      var tot = j_getDataEstudiante.data [0].length;
      for(let i = 0; i < tot; i++) {
          if(i<4){
              if(i===0) cedAlum[0][0] = (j_getDataEstudiante.data [0][i]);
              if(i===1) cedAlum[1][0] = (j_getDataEstudiante.data [0][i]);
              ////////////////////////////////////////////////////////////
              if(i===2) cedAlum[0][1] = (j_getDataEstudiante.data [0][i]);
              if(i===3) cedAlum[1][1] = (j_getDataEstudiante.data [0][i]);                                       
          }
      }
                  
      s1.addTable({
          x : 27,
          y : 412+topMargin,
          fontColorTitles : 'black',
          fontSizeData : 7,
          fontFamilyData : 'arial',
          lineColor : 'rgba(0,0,0,0)',
          alignColumns:['left','left'],
          titles : ['',''],
          bgCellTitles : 'rgba(100,100,100,0)',
          bgCellColumns : ['white','white'],
          columnTitles : ['',''],
          widthColumns : [250,250], 
          rows : 2,
          heightRow  : 10,
          data : cedAlum,
          dataRowIndexIni : 0,
          dataRowIndexEnd : 2,
          position:'absolute'
      });                          
      book.showFirst();
      book.setDimension(820,600);
	}
  
	/////////////////////////////////////////////////////////////////FACTURA//MADRE-RAFOLS-PILAR//////////////////////////////////////////////	
	function facturaMadreRafolsPilar() {
			let j_getDataGeneral = json('getDataGeneral');            
            let j_getDataFormaPago = json('getDataFormaPago');
            let j_getDataEstudiante = json('getDataEstudiante');             
            let j_getMoneda = json('getMoneda');
            let j_getDataConceptoSinRubro = json('getDataConceptoSinRubro');
            let topMargin = 0;
            let moneda = j_getMoneda.data[0][0];
            if(json('getTopMargin')) topMargin = parseInt(json('getTopMargin').data[0][0], 10);
			let book = new Book({x:20, y:20,title:'FACTURA', bodyWidth:800, bodyHeight:600});
            book.addToBody();               
            let s1 = book.createSheet();         
            
            s1.addText({
                x:30, 
                y:123+topMargin,
                text:'FACTURA:',                 
                width:52,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',
                gap:7
            });
            
            s1.addText({
                x:85, 
                y:123+topMargin,         
                text: j_getDataGeneral.data[0][0], 
                width:64,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',
                gap:6
            });
           
            s1.addText({
                x:431, 
                y:123+topMargin,
                text:'FACTURA:',                 
                width:52,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',
                gap:7
            });
            
            s1.addText({
                x:488, 
                y:123+topMargin,            
                text: j_getDataGeneral.data[0][0], 
                width:64,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',
                gap:6
            });
            s1.addText({
                x:255, 
                y:123+topMargin, 
                text:'FECHA:',                 
                width:60,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',
                gap:7
            });         
            
            s1.addText({
                x:296, 
                y:123+topMargin,                 
                text: j_getDataGeneral.data[3][0], 
                width:55,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',
                gap:6
            });
            
            s1.addText({
                x:639, 
                y:123+topMargin,
                text:'FECHA:',                 
                width:60,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',
                gap:7
            });     
             
            s1.addText({
                x:684, 
                y:123+topMargin,                
                text: j_getDataGeneral.data[3][0], 
                width:55,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',
                gap:6
            });
            
            ////////////////////////////////////////////CUADRO/////////////////////////////////////////////////////////////////////////////////    
            s1.rectangle({x1:22, y1:138+topMargin, x2:367, y2:212+topMargin,position:'absolute', borderColor: 'black', r1:8, r2:8, r3:8, r4:8});            
            s1.addText({
                x:26,
                y:145+topMargin,               
                text:'RECIBIMOS DE :',                 
                width:270,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',                
            });     
             
            s1.addText({
                x:102, 
                y:145+topMargin,               
                text: j_getDataGeneral.data[7][0], 
                width:255,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:5
            }); 
            
            s1.addText({
                x:26, 
                y:157+topMargin, 
                text:'CED/RIF. :',                 
                width:50,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',                
            });     
            
            s1.addText({
                x:77, 
                y:157+topMargin,                 
                text: j_getDataGeneral.data[8][0], 
                width:80,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',                
            });
            
            s1.addText({
                x:185, 
                y:157+topMargin, 
                text:'TELF. :',                 
                width:30,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',                
            });
            
            s1.addText({
                x:221, 
                y:157+topMargin,                
                text: j_getDataGeneral.data[16][0], 
                width:90,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:5
            }); 
            
            s1.addText({
                x:26, 
                y:170+topMargin,  
                text:'DIRECCION :',                 
                width:59,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',
                //gap:5
            });
            
            s1.addText({
                x:87, 
                y:170+topMargin,                 
                text: j_getDataGeneral.data[17][0], 
                width:270,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
            });
              
            s1.addText({
                x:26, 
                y:195.5+topMargin,  
                text:'N° DOC. S/F :',                 
                width:65,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',
            });   
                            
            s1.addText({
                x:94,
                y:195.5+topMargin,                  
                text: j_getDataGeneral.data[18][0], 
                width:50,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
           });
           
           s1.addText({
                x:240,                 
                y:195.5+topMargin,  
                text:'MONTO S/F:',                
                width:60,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',                
            });
                        
            s1.addText({
                x:297,                 
                y:195.5+topMargin,  
                text: j_getDataGeneral.data[14][0],               
                width:40,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',                
            });                
            
            s1.rectangle({x1:422, y1:138+topMargin, x2:767, y2:212+topMargin,position:'absolute', borderColor: 'black', r1:8, r2:8, r3:8, r4:8});             
            s1.addText({
                x:427, 
                y:145+topMargin,  
                text:'RECIBIMOS DE :',                 
                width:74,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',                
            });     
            
            s1.addText({
                x:503, 
                y:145+topMargin,             
                text: j_getDataGeneral.data[7][0], 
                width:260,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:5
            }); 
            
            s1.addText({
                x:427, 
                y:157+topMargin,
                text:'CED/RIF. :',                 
                width:49,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',
                //gap:5
            });     
            
            s1.addText({
                x:479, 
                y:157+topMargin,               
                text: j_getDataGeneral.data[8][0], 
                width:69,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:5
            });
            
            s1.addText({
                x:590, 
                y:157+topMargin,
                text:'TELF. :',                 
                width:35,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',
                gap:5
            });
            
            s1.addText({
                x:626, 
                y:157+topMargin,               
                text: j_getDataGeneral.data[16][0], 
                fontFamily :'verdana',
                width:55,
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
            }); 
            
            s1.addText({
                x:427, 
                y:170+topMargin,
                text:'DIRECCION :',                 
                width:60,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',                
            });
            
            s1.addText({
                x:488,
                y:170+topMargin,       
                text: j_getDataGeneral.data[17][0], 
                width:280,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
            });
            
            s1.addText({
                x:428, 
                y:195.5+topMargin,
                text:'N° DOC. S/F :',                 
                width:65,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',
            });   
                            
            s1.addText({
                x:495,
                y:195.5+topMargin,              
                text: j_getDataGeneral.data[18][0], 
                width:50,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
           });
           
           s1.addText({
                x:632,                 
                y:195.5+topMargin,
                text:'MONTO S/F:',                
                width:60,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',                
            });
            
            //////////////////DATO DE SALDO A FAVOR dato pendiente de pablo////////////////// 
            s1.addText({
                x:693,                 
                y:195.5+topMargin,
                text: j_getDataGeneral.data[14][0],               
                width:40,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'center', 
                position:'absolute',                
            });       
                 
            /////////////////////////////////TABLA//IZQUIERDA/////////////////////////////////////////////////////////////                    
            var ced = [];
            var des = [];  
            var mo = [];
            var tot = j_getDataConceptoSinRubro.data [0].length; 
                for(let i = 0; i < tot; i++) {
                    if(i<11)
                        ced.push(j_getDataConceptoSinRubro.data [0][i]);
                        //esp.push( );
                        des.push(j_getDataConceptoSinRubro.data [1][i]);              
                        mo.push(j_getDataConceptoSinRubro.data [2][i]);
                }                   
            
            s1.addTable({
                x : 24,
                y:204+topMargin,
                fontColorTitles : 'black',
                fontSizeData : 9,
                lineColor : 'rgba(0,0,0,0)',
                alignColumns:['left','left','right'],
                titles : [],
                bgCellTitles : 'rgba(100,100,100,0)',
                bgCellColumns : ['white','white','white'],
                alignTitles:['left','center','center'],
                fontSizeTitles : 11,
                columnTitles : ['Estudiantes','Conceptos','Monto Bs.'], //////////////////////////////////////////////////aqui
                widthColumns : [5,200,64], 
                rows : 10,
                heightRow  : 12,
                data : [ced,des,mo],
                dataRowIndexIni : 0,
                dataRowIndexEnd : 9,
                position:'absolute'
            }); 
            
            ///////////////////////////////////////////////////TABLA/IDENTIFICACION/FORMA/DE/PAGO
            s1.bar({x:23, y:369+topMargin, height:1, width:336, backgroundColor:'rgba(0,0,0,1)'});
            var forPago = [[''],[''],[''],['']];                     
            var tot = j_getDataFormaPago.data [0].length;
            for(let i = 0; i < tot; i++) {
                if(i<5){
                    if(i===0) forPago[0][0] = (j_getDataFormaPago.data [0][i]);                    
                    if(i===0) forPago[1][0] = (j_getDataFormaPago.data [3][i]);                    
                    if(i===0) forPago[2][0] = (j_getDataFormaPago.data [1][i]);                    
                    if(i===0) forPago[3][0] = (j_getDataFormaPago.data [2][i]);                   
                    if(i===1) forPago[0][1] = (j_getDataFormaPago.data [0][i]);                    
                    if(i===1) forPago[1][1] = (j_getDataFormaPago.data [3][i]);                    
                    if(i===1) forPago[2][1] = (j_getDataFormaPago.data [1][i]);                    
                    if(i===1) forPago[3][1] = (j_getDataFormaPago.data [2][i]);                    
                    if(i===2) forPago[0][2] = (j_getDataFormaPago.data [0][i]);                    
                    if(i===2) forPago[1][2] = (j_getDataFormaPago.data [3][i]);                    
                    if(i===2) forPago[2][2] = (j_getDataFormaPago.data [1][i]);                    
                    if(i===2) forPago[3][2] = (j_getDataFormaPago.data [2][i]);                   
                    if(i===3) forPago[0][3] = (j_getDataFormaPago.data [0][i]);                    
                    if(i===3) forPago[1][3] = (j_getDataFormaPago.data [3][i]);                    
                    if(i===3) forPago[2][3] = (j_getDataFormaPago.data [1][i]);                    
                    if(i===3) forPago[3][3] = (j_getDataFormaPago.data [2][i]);                  
                }
            }
                        
            s1.addTable({
                x : 22,                
                y:334+topMargin,
                fontColorTitles : 'black',
                fontSizeData : 8,
                fontFamilyData : 'arial',
                lineColor : 'rgba(0,0,0,0)',               
                alignColumns:['left','right','center','left'],
                titles : ['','','',''],
                bgCellTitles : 'rgba(100,100,100,0)',
                bgCellColumns : ['white','white','white','white'],
                columnTitles : ['','','',''],
                widthColumns : [180,20,80,80], 
                rows :4,
                heightRow  : 5,
                data : forPago,
                dataRowIndexIni : 0,
                dataRowIndexEnd : 3,
                position:'absolute'
            });    
                       
            s1.bar({x:23, y:415+topMargin, height:1, width:336, backgroundColor:'rgba(0,0,0,1)'});
            s1.addText({
                x:24, 
                y:417+topMargin,
                text:'Contribuyente Formal :',                 
                width:140,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',
                //gap:6
            });
            
            s1.addText({
                x:227,
                y:417+topMargin,
                text:'Total Bs.:',                
                width:55,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'left', 
                position:'absolute',                
            });
            
            s1.hLine({x1:23, y:431+topMargin, x2:359,position:'absolute'});            
            
            s1.addText({
                x:268, 
                y:417+topMargin,                 
                text: j_getDataGeneral.data[10][0],
                width:86,
                fontSize : 11,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'right', 
                position:'absolute',
                gap:0
            });
            
            //////////////////////////////TABLAS///IZQUIERDA////INDENTIFICACION//DEL//PAGO///////////////          
            var cedAlum = [];           
            var tot = j_getDataEstudiante.data [0].length; 
                for(let i = 0; i < tot; i++) {
                    if(i<5)
                        cedAlum.push(j_getDataEstudiante.data [0][i]);                        
                }                
            s1.addTable({
                x : 22,
                y:396+topMargin,
                fontColorTitles : 'black',
                fontSizeData : 9,
                lineColor : 'rgba(0,0,0,0.0)',
                alignColumns:['left'],
                titles : [],
                bgCellTitles : 'rgba(100,100,100,0)',
                bgCellColumns : ['white'],
                alignTitles:['left'],                
                widthColumns : [255,], 
                rows : 4,
                heightRow  : 5,
                data : [cedAlum],                
                dataRowIndexIni : 0,
                dataRowIndexEnd : 8,
                position:'absolute'                
            });               
            
            ////////////////////////////////////////////////////////////TABLAS//DERECHA////////////////////////////////////////////////        
            var ced = [];
            var des = [];  
            var mo = [];
            var tot = j_getDataConceptoSinRubro.data [0].length; 
                for(let i = 0; i < tot; i++) {
                    if(i<11)
                        ced.push(j_getDataConceptoSinRubro.data [0][i]);
                        //esp.push( );
                        des.push(j_getDataConceptoSinRubro.data [1][i]);              
                        mo.push(j_getDataConceptoSinRubro.data [2][i]);
                }  
            
            s1.addTable({
                x : 424,
                y:204+topMargin,
                fontColorTitles : 'black',
                fontSizeData : 9,
                lineColor : 'rgba(0,0,0,0.0)',
                alignColumns:['left','left','right'],
                titles : [],
                bgCellTitles : 'rgba(100,100,100,0)',
                bgCellColumns : ['white','white','white'],
                alignTitles:['left','center','center'],
                fontSizeTitles : 11,
                columnTitles : ['Estudiantes','Conceptos','Monto Bs.'],              
                widthColumns : [5,200,62], 
                rows : 10,
                heightRow  : 12,
                data : [ced,des,mo],
                dataRowIndexIni : 0,
                dataRowIndexEnd : 9,
                position:'absolute'
            });     
            
            s1.hLine({x1:423, y:369+topMargin, x2:768,position:'absolute'});                                    
            s1.addTable({
                x : 422,                
                y:334+topMargin,
                fontColorTitles : 'black',
                fontSizeData : 8,
                fontFamilyData : 'arial',
                lineColor : 'rgba(0,0,0,0)',               
                alignColumns:['left','right','center','left'],
                titles : ['','','',''],
                bgCellTitles : 'rgba(100,100,100,0)',
                bgCellColumns : ['white','white','white','white'],
                columnTitles : ['','','',''],
                widthColumns : [180,20,80,80], 
                rows :4,
                heightRow  : 5,
                data : forPago,
                dataRowIndexIni : 0,
                dataRowIndexEnd : 3,
                position:'absolute'
            });         
            
            s1.hLine({x1:423, y:417+topMargin, x2:768,position:'absolute'});               
            s1.addText({
                x:424, 
                y:417+topMargin,
                text:'Contribuyente Formal :',                 
                width:140,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',                
            });
            
            s1.addText({
                x:627,
                y:417+topMargin,
                text:'Total Bs.:',           
                width:56,
                fontFamily :'verdana',
                fontSize : 10,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',               
            });
            
            s1.hLine({x1:423, y:431+topMargin, x2:768,position:'absolute'});            
            s1.addText({
                x:668, 
                y:417+topMargin,                
                text: j_getDataGeneral.data[10][0],
                width:86,
                fontSize : 11,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'right', 
                position:'absolute',
                gap:0
            });                 
                     
            var cedAlum = [];           
            var tot = j_getDataEstudiante.data [0].length; 
                for(let i = 0; i < tot; i++) {
                    if(i<5)
                        cedAlum.push(j_getDataEstudiante.data [0][i]);                        
                }                
            s1.addTable({
                x : 422,
                y:396+topMargin,
                fontColorTitles : 'black',
                fontSizeData : 9,
                lineColor : 'rgba(0,0,0,0.0)',
                alignColumns:['left'],
                titles : [],
                bgCellTitles : 'rgba(100,100,100,0)',
                bgCellColumns : ['white'],
                alignTitles:['left'],                
                widthColumns : [255,], 
                rows : 4,
                heightRow  : 12,
                data : [cedAlum],                
                dataRowIndexIni : 0,
                dataRowIndexEnd : 8,
                position:'absolute'                
            });
            ////////////////////////OBSERVACIONES/////////////////////////////////////////////////
            s1.hLine({x1:23, y:460+topMargin, x2:359,position:'absolute'});            
            //////OBSERVACIONES//LADO //IZQUIERDO
            s1.addText({
                x:22,
                y:463+topMargin,
                text:'OBS :',           
                width:30,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',               
            });            
                 
            s1.addText({
                x:54, 
                y:463+topMargin,                
                text: j_getDataGeneral.data[12][0],
                width:305,
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',
                gap:0
            });     
            //////OBSERVACIONES//LADO //DERECHO               
            s1.hLine({x1:423, y:460+topMargin, x2:768,position:'absolute'}); 
            s1.addText({
                x:424,
                y:463+topMargin,
                text:'OBS :',           
                width:30,
                fontFamily :'verdana',
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',               
            });            
                 
            s1.addText({
                x:455, 
                y:463+topMargin,                
                text: j_getDataGeneral.data[12][0],
                width:305,
                fontSize : 8,                
                fontWeight : 'bold',
                //backgroundColor:'lightGray', 
                textAlign:'leht', 
                position:'absolute',
                gap:0
            });  
            
            book.showFirst();
            book.setDimension(820,600);
	}		
		
	///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
	this.createDoc = function(){	
		moneda = json('getMoneda').data[0][0];//descripcion moneda
		if(typeDoc.trim().toUpperCase()==='FACTURA C'){
			facturaCagigal();
		}
		else if(typeDoc.trim().toUpperCase()==='FACTURA M'){
			facturaMurialdo();
		}
		else if(typeDoc.trim().toUpperCase()==='FACTURA P'){
			facturaPilar();
		}
		else if(typeDoc.trim().toUpperCase()==='FACTURA 1/4'){
			factura14();
		}
		else if(typeDoc.trim().toUpperCase()==='FACTURA HCSA'){
			facturaMadreRafolsPilar();
		}
		else{
			facturaGen();
		}
	};		
};
