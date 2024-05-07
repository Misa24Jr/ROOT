var validar = 
{
  validarNumericos: function(s)
  {
    var validacion = false;
    if (edits.isInteger(s.value)) 
	  {
       validacion = true;
  	}
	  else
	  {
      alert("Campo debe ser un entero numerico... Por favor verifique");
      s.focus();
      validacion =  false;
    }
	return validacion;
 },
 validarNulos: function(s)
 {
    var validacion = true;
    if(edits.isEmpty(s.value)) 
	  {
      validacion = false;
      alert("Existen campos nulos... Por favor verifique");
      s.focus();
      validacion =  false;
    }
	  return validacion;
 },
  validarNulosCombo: function(s)
 {
    var validacion = true;
    if(s.getSelectedIndex() == -1)
	  {
      validacion = false;
      alert("Existen campos nulos... Por favor verifique");
      s.focus();
      validacion =  false;
    }
	  return validacion;
 },
 validarNulosGrid: function(s)
 {
    var validacion = true;
    if(s.getSelectedRows().length < 1)
    {
      validacion = false;
      alert("debe seleccionar registros a asignar en el grid...por favor rectifique");
      validacion =  false;
    }
    return validacion;
 },
 validarEnteros: function(s)
  {
    alert("entero: "+s.value);
    var validacion = false;
    if (this.validarNumericos(s))
    if (s.value < 2147483648) //Validacion de un campo entero (2 elevado a la 31)
	  {
       validacion = true;
  	}
	  else
	  {
      alert("Campo excede el dominio de un dato entero... Por favor verifique");
      s.focus();
      validacion =  false;
    }
	return validacion;
 },
 validarRangoFecha : function (fec0, fec1)
 { 
    var bRes = false; 
    var diaDesde = fec0.value.substr(0, 2);
    var mesDesde = fec0.value.substr(3, 2); 
    var anoDesde = fec0.value.substr(6, 4); 
    var diaHasta = fec1.value.substr(0, 2); 
    var mesHasta = fec1.value.substr(3, 2); 
    var anoHasta = fec1.value.substr(6, 4); 
    if (anoHasta > anoDesde) 
       bRes = true; 
    else 
    { 
     if (anoHasta == anoDesde)
     { 
      if (mesHasta > mesDesde) 
        bRes = true; 
      else 
      { 
       if (mesHasta == mesDesde) 
        if (diaHasta >= diaDesde) 
        bRes = true; 
      } 
     } 
    }
    if (!bRes)
       alert("La fecha desde debe ser menor o igual a la fecha hasta"); 
    return bRes; 
   },
   rellenarFecha : function(fecha)
   {
    if (fecha.substring(1,2)=="-") 
        fecha="0"+fecha;
    if (fecha.substring(4,5)=="-")
        fecha=fecha.substring(0,3)+"0"+fecha.substring(3,9);
    return fecha;
   },
   ltrim: function(s) 
   {
    return s.replace(/^\s+/, "");
   },
   rtrim :  function(s) 
   {
    return s.replace(/\s+$/, "");
   },
   trim  :   function (s) 
   {
    return this.rtrim(this.ltrim(s));
   }   
}

