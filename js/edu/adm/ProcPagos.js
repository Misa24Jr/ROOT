var ProcPagos = function(){
	var totalMora = 0;
	var totalPago = 0;
	var totalDescuento = 0;
	var divisa = 1;
	var date = new Date();
	var year = date.getFullYear();
	var meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
	var fechasVencimiento = new Array();
	var eMora = new Object();
	var eDesc = new Object();
	var ePago = new Object();
	var eDivisa = new Object();
	this.ADD_MORA = 0;
	this.DEC_MORA = 1;
	this.REMOVE_MORA = 2;
	this.ADD_PAGO = 0;
	this.DEC_PAGO = 1;
	this.REMOVE_PAGO = 2;
	
	var updateTotales = function(){
	  eMora.setValue(new Number(totalMora).toFixed(2));
	  eDesc.setValue(new Number(totalDescuento).toFixed(2));
	  ePago.setValue(new Number(totalPago + totalMora).toFixed(2));	
	  eDivisa.setValue(new Number((totalPago + totalMora) / divisa).toFixed(2));	
	};
	
	this.setDivisa = function(divi){
		divisa = divi;
	};
	
	this.getDivisa = function(){
		return divisa;
	};

	//Limpia los totales y obtiene el anio actual
	this.clean = function(){
	  totalDescuento = 0;
	  totalMora = 0;	
	  totalPago = 0;
	  year = date.getFullYear();
	};
	
	this.setEdits = function(eTotalMora, eTotalDescuento, eTotalPago, eTotalDivisa){
		eMora = eTotalMora;
		eDesc = eTotalDescuento;
		ePago = eTotalPago;
		eDivisa = eTotalDivisa;
		ePago.getEdit().style.textAlign='right';
		eMora.getEdit().style.textAlign='right';
		eDesc.getEdit().style.textAlign='right';
		eDivisa.getEdit().style.textAlign='right';
	};
	
	//Devuelve el mes en formato entero
	this.getIntMonth = function(mes){
		for(var i=0; i<12; i++){
		  if(mes==meses[i])
		    return i;	
		};
		return -1;
	};
	
	//Devuelve el mes en formato String
	this.getStrMonth = function(intMonth){
		for(var i=0; i<12; i++){
		  if(intMonth==i) 
		    return meses[i];	
		};
	};
	
	//actualiza el anio para el calculo de fechas
	this.setYear = function(y){
		year = y;
	};
	
	//Actualizacion de la mora
	this.actualizaMora = function(monto, pct_mora, tipo_trnsacc){
	  switch(tipo_trnsacc){
	    case 0 : {//ADD MORA
	  	  		   totalMora += monto*(pct_mora/100);
	  	  		   break;
	    }
	    case 1 : {//DEC_MORA  
	    	       if(totalMora > 0)
	    		     totalMora -= monto*(pct_mora/100);
	    	       if(totalMora < 0)
	    			   totalMora = 0;
	    		   break;
	    }
	    case 2 : {//REMOVE_MORA
	    	       totalMora -= monto*(pct_mora/100);
	    	       if(totalMora < 0)
	    			   totalMora = 0;
	    	       break;
	    }		  	
	  };
	  updateTotales();
	};
	
	this.getDataGrid = function(){
	  //gridsPagoRecCliente	
	};
	
	//Obtencion del total de la mora
	this.getTotalMora = function(){
	  return totalMora;
	};	
	
	//actualiza total de pago y total de descuento
	this.actualizaTotalesPagos = function(monto, pct_descuento, tipo_trnsacc){
	  switch(tipo_trnsacc){
	    case 0 : {//ADD PAGO
	  	  		   totalPago += monto*(1-pct_descuento/100);
	  	  		   totalDescuento+=monto*(pct_descuento/100);
	    		   break;
	    }
	    case 1 : {//DEC_PAGO
	    	       if(totalPago > 0) 
	    		     totalPago -= monto*(1-pct_descuento/100);
	    		   if(totalDescuento < 0)
	    			   totalDescuento=0;  
	    	       if(totalDescuento > 0)
	    	         totalDescuento-=monto*(pct_descuento/100);
	    	       if(totalPago < 0) 
		    	     totalPago=0; 
	    	       break;
	    }
	    case 2 : {//REMOVE_PAGO
	    	       totalPago -= (monto - monto*(pct_descuento/100));
	    	       totalDescuento-=monto*(pct_descuento/100);
	    	       if(totalPago < 0) 
		    	     totalPago=0;
		    	   if(totalDescuento < 0)
	    			   totalDescuento=0;
	    		   break;
	    }		  	
	  };
	  updateTotales();	
	};
	
	//Obtencion del total del descuento
	this.getTotalDescuento=function(){
	  return totalDescuento;	
	};
	
	//Obtencion del total a pagar
	this.getTotalPago=function(){
	  return totalPago;	
	};
	
	this.calculaFechasVencimiento = function(cantidad_cuotas, dia_de_pago, mes_inicio, separator_fecha){
	  	if (separator_fecha==undefined)
	  	  sep_fecha = '/';
	  	var m = mes_inicio;
	  	var y = year;
	  	var c =0;
	  	for(var i=mes_inicio; i<cantidad_cuotas + mes_inicio; i++){
	  	  if (i>12){
	  	    m = i-12;
	  	    if(y - year == 0)
	  	      y++;	  	  
	      }  
	      else
	        m=i;
	      var dp = dia_de_pago+'';
	      var mes_pago = m+'';
	      if(dia_de_pago.length < 2)
	        dp = '0'+dia_de_pago;
	      if(mes_pago.length < 2)
	        mes_pago = '0'+m;
	      fechasVencimiento[c] = dp + separator_fecha + mes_pago + separator_fecha + y;
	      c++;
	  	}
	  	return fechasVencimiento;
	};
};
