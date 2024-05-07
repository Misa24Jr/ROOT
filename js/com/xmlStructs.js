/*@author JUBERT PEREZ*/
/*@object xmlStructs*/
/*@version 1.0*/
/*@date 11/04/2006*/
/*@description Objeto creado para manejar estructuras de datos basadas en xml.*/
/*@comment Con este objeto se podr?n crear Variables, registros, listas de variables y listas de registros.*/
var xmlStructs =
{
  /*@property totalVar : total de variables*/
  totalVar : 0,	
  /*@property varContent : contenedor de variables*/
  varContent : new Array,
  /*@property recordContent : contenedor de registros*/
  recordContent : new Array,
  /*@property varListContent : lista de variables*/
  varListContent : new Array,
  /*@property recordListContent : Contenedor de listas del tipo registro*/
  recordListContent : new Array,
  /*@property TYPE_PARAM_VAR : constante para definir el tipo de variable "var"*/
  TYPE_PARAM_VAR : "var",
  /*@property TYPE_PARAM_RECORD :constante para definir el tipo de parametro "registro"*/
  TYPE_PARAM_RECORD : "record",
  /*@property TYPE_PARAM_VARLIST : Constante para definir una lista de variables*/
  TYPE_PARAM_VARLIST : "varList",
  /*@property TYPE_PARAM_RECORDLIST : Constante que representa el tipo lista de registros*/
  TYPE_PARAM_RECORDLIST : "recordList",
  /*@property XMLHEAD : Constante que representa la cabecera de un archivo XML*/
  XMLHEAD : '<?xml version = "1.0" encoding = "ISO-8859-1"?>',
  /*@property xmlDoc : arreglo para contenido XML*/
  xmlDoc : new Array(),
  nameComponent : 'xmlStructs', 
   
  createXMLDoc : function(id)
  {
  	xmlStructs.xmlDoc[id] = new Object();
    xmlStructs.xmlDoc[id].head = xmlStructs.XMLHEAD;
    xmlStructs.xmlDoc[id].regsTagIni = '<regs>';
    xmlStructs.xmlDoc[id].regsTagEnd = '</regs>';
    xmlStructs.xmlDoc[id].regTagIni = '    <reg>';
    xmlStructs.xmlDoc[id].regTagEnd = '    </reg>';
    xmlStructs.xmlDoc[id].reg = new Array();
    xmlStructs.xmlDoc[id].newTag = new Array();
    xmlStructs.xmlDoc[id].document ='';
    xmlStructs.xmlDoc[id].addNewTag = function(tagName)
    {
      xmlStructs.xmlDoc[id].newTag[xmlDoc[id].newTag.length]=tagName;	
    }
    xmlStructs.xmlDoc[id].addTagArray = function(tagArr)
    {
      xmlStructs.xmlDoc[id].newTag = tagArr;	
    }
    xmlStructs.xmlDoc[id].getTagArray = function()
    {
      return xmlStructs.xmlDoc[id].newTag;	
    }
    xmlStructs.xmlDoc[id].createNewReg = function()
    {	
      xmlStructs.xmlDoc[id].reg[xmlStructs.xmlDoc[id].reg.length]=new Array();	
    }
    xmlStructs.xmlDoc[id].addDataReg = function(nroReg, tagName, dataTag)
    {
      //xmlStructs.xmlDoc[id].reg[nroReg][tagName] = '        <'+tagName+'>'+dataTag+'</'+tagName+'>\n';
    	xmlStructs.xmlDoc[id].reg[nroReg][tagName] = '<'+tagName+'>'+dataTag+'</'+tagName+'>';
    }
    xmlStructs.xmlDoc[id].getXML = function()
    {
      //xmlStructs.xmlDoc[id].document = xmlStructs.XMLHEAD+'\n';
      xmlStructs.xmlDoc[id].document = xmlStructs.XMLHEAD;
      //xmlStructs.xmlDoc[id].document += xmlStructs.xmlDoc[id].regsTagIni+'\n';
      xmlStructs.xmlDoc[id].document += xmlStructs.xmlDoc[id].regsTagIni;
      for(var i=0; i<xmlStructs.xmlDoc[id].reg.length; i++)
      {
      	//xmlStructs.xmlDoc[id].document += xmlStructs.xmlDoc[id].regTagIni+'\n';
      	xmlStructs.xmlDoc[id].document += xmlStructs.xmlDoc[id].regTagIni;
      	var t = xmlStructs.xmlDoc[id].newTag.length;
      	
      	for (var j=0; j<t; j++)
      	{
      	  var tag = xmlStructs.xmlDoc[id].newTag[j];	
      	  xmlStructs.xmlDoc[id].document += xmlStructs.xmlDoc[id].reg[i][tag];	
      	}
      	//xmlStructs.xmlDoc[id].document += xmlStructs.xmlDoc[id].regTagEnd+'\n';
      	xmlStructs.xmlDoc[id].document += xmlStructs.xmlDoc[id].regTagEnd;
      }
      //xmlStructs.xmlDoc[id].document += xmlStructs.xmlDoc[id].regsTagEnd+'\n';	
      xmlStructs.xmlDoc[id].document += xmlStructs.xmlDoc[id].regsTagEnd;	
      return xmlStructs.xmlDoc[id].document;
    }
    return xmlStructs.xmlDoc[id];	 
  },
  
  /*@method add(recordList, record, type, value)*/
  /*@descriptionMethod AÃ±ade una variable al record y el record a la  estructura de registro*/
  /*@return void*/
  /*@param id : es el identificador del objeto
  record: es el registro
  type: es el tipo del valor a incluir
  value: es el valor de la variable*/
  add : function(recordList, record, type, value)
  {
  	var tam = this.varContent.length;
  	xmlStructs.createVar('var'+tam, 'var'+tam, type, value);	
  	xmlStructs.addFieldToRecord(record.recordName, xmlStructs.getVar('var'+tam));
  	xmlStructs.addRecordToList(recordList.nameRecordList,xmlStructs.getRecord(record.recordName));
  },
  /*@method addFieldToRecord (id,field)*/
  /*@descriptionMethod Anade un campo a la estructura de registro*/
  /*@return void*/
  /*@param id : es el identificador del objeto
  field: es el campo a incluir*/
  addFieldToRecord : function(id,field)
  {
    this.recordContent[id].fields[this.recordContent[id].fields.length] = field;
  },
  /*@method addVarToList (id,value)*/
  /*@descriptionMethod adiciona una variable a la lista de variables*/
  /*@return void*/
  /*@param id : es el identificador del objeto
  value : es la variable a incluir*/
  addVarToList : function(id,value)
  {
    this.varListContent[id].values[this.varListContent[id].values.length] = value;
  },
  /*@method addRecordToList (id,record)*/
  /*@descriptionMethod adiciona un registro a la lista de registros*/
  /*@return void*/
  /*@param id : es el identificador del objeto
  record : es el registro a incluir*/
  addRecordToList : function(id,record)
  {
    this.recordListContent[id].values[this.recordListContent[id].values.length] = record;
  },
  /*@method createVar (id,name,type,value)*/
  /*@descriptionMethod crea una nueva variable*/
  /*@return retorna el contenedor de la variable con su valor en xml*/
  /*@param id       : es el identificador del objeto
  name (string) : es el nombre de la variable
  type (string) : es el tipo de la variable
  value (string): es el valor de la variable*/
  createVar : function(id,name,type,value)
  {
    var vn = "<var_name>"+name+"</var_name>";
    var vt = "<var_type>"+type+"</var_type>";
    var vv = "<value>" + encodeURIComponent(value) + "</value>";
    xmlStructs.totalVar = xmlStructs.totalVar + 1;
    xmlStructs.varContent[id] = "<var>"+vn+vt+vv+"</var>";
    xmlStructs.varContent[id].clase = this.TYPE_PARAM_VAR;
    return xmlStructs.varContent[id];
  },
  /*@method filterSpecialChar (strValue)*/
  /*@descriptionMethod filtra los caracteres especial que causa error en la estructura xml*/
  /*@return cadena con los caracteres codificadas que evitan problemas en la estructura xml*/
  /*@param strValue : es la cadena de caracteres a revisar*/
  filterSpecialChar : function(strValue) {
	  var strFiltro = "&<\'\n´`¿¡¨çÑÁÉÍÓÚñáéíóúº°¬·ªÃãÂâ !?#$%()*+-./#0123456789:;,=>@aeiouABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_abcdefghijklmnopqrstuvwxyz{}~\"";
	  var strOut = "";
	  var strValue = "" + strValue;
	  
	  for (var i = 0; i < strValue.length; i++)
		  if (strFiltro.indexOf(strValue.charAt(i)) > -1)
			  strOut = strOut + strValue.charAt(i);

	  strOut = strOut.replace(/&/gi,'&amp;');
	  strOut = strOut.replace(/</gi,'&lt;');
	  strOut = strOut.replace(/\\/gi,'&#92;&#92;');
	  strOut = strOut.replace(/'/gi,'&#180;');
	  strOut = strOut.replace(/´/gi,'&#180;');
	  strOut = strOut.replace(/`/gi,'&#180;');
	  strOut = strOut.replace(/¿/gi,'&#191;');
	  strOut = strOut.replace(/¡/gi,'&#161;');
	  strOut = strOut.replace(/¨/gi,'&#168;');
	  strOut = strOut.replace(/ç/gi,'&#199;');
	  strOut = strOut.replace(/Ñ/g,'&#209;');
	  strOut = strOut.replace(/Á/g,'&#193;');
	  strOut = strOut.replace(/É/g,'&#201;');
	  strOut = strOut.replace(/Í/g,'&#205;');
	  strOut = strOut.replace(/Ó/g,'&#211;');
	  strOut = strOut.replace(/Ú/g,'&#218;');
	  strOut = strOut.replace(/ñ/g,'&#241;');
	  strOut = strOut.replace(/á/g,'&#225;');
	  strOut = strOut.replace(/é/g,'&#233;');
	  strOut = strOut.replace(/í/g,'&#237;');
	  strOut = strOut.replace(/ó/g,'&#243;');
	  strOut = strOut.replace(/ú/g,'&#250;');
	  strOut = strOut.replace(/º/g,'&#186;');
	  strOut = strOut.replace(/°/g,'&#176;');
	  strOut = strOut.replace(/¬/g,'&#172;');
	  strOut = strOut.replace(/·/g,'&#183;');
	  strOut = strOut.replace(/ª/g,'&#170;');
	  strOut = strOut.replace(/Ã/g,'&#195;');
	  strOut = strOut.replace(/ã/g,'&#227;');
	  strOut = strOut.replace(/Â/g,'&#194;');
	  strOut = strOut.replace(/â/g,'&#226;');
	  return strOut;
  },
  /*@method createRecordList (id)*/
  /*@descriptionMethod crea un registro para datos*/
  /*@return (Object) el contenedor del recordList, la propiedad values es el Array de valores para el id dado*/
  /*@param id : es el identificador del objeto*/
  createRecordList : function(id)
  {
    this.recordListContent[id] = new Object();
    this.recordListContent[id].clase = this.TYPE_PARAM_RECORDLIST;
    this.recordListContent[id].values = new Array;
    this.recordListContent[id].nameRecordList = id;
    this.recordListContent[id].includeRecords = new Array();
    this.recordListContent[id].getRecordList = function()
    {
      var totRec = this.includeRecords.length;
      var i=0;
      for(i=0; i<totRec; i++)
      {
      	xmlStructs.addRecordToList(this.nameRecordList,xmlStructs.getRecord(this.includeRecords[i]));
      }	
      return xmlStructs.getRecordList(this.nameRecordList);
    };
    
    this.recordListContent[id].addStr = function(idRecord, strData, fieldFind)
    {
      var o = new Object();
      o.dataType = 'string';
      //o.getText = function (){return xmlStructs.filterSpecialChar(strData);};
      o.getText = function (){return strData;};
	  o.getFieldFind = function (){return fieldFind;};
      this.add(idRecord, o);	
    };
    
    this.recordListContent[id].addInt = function(idRecord, strData, fieldFind)
    {
      var o = new Object();
      o.dataType = 'int';
      o.getText = function (){return strData;};
	  o.getFieldFind = function (){return fieldFind;};
      this.add(idRecord, o);	
    };
    
    this.recordListContent[id].addFloat = function(idRecord, strData, fieldFind)
    {
      var o = new Object();
      o.dataType = 'float';
      o.getText = function (){return strData;};
	  o.getFieldFind = function (){return fieldFind;};
      this.add(idRecord, o);	
    };
    
    this.recordListContent[id].add = function(idRecord, objectData, wildcardLeft, wildcardRight)
    {
	  var arg = xmlStructs.recordListContent[id].add.arguments.length;	
	  
	  if(arg == 2)
	  {	  		
	    wildcardLeft='';
		wildcardRight='';
	  }
	  	  
      var totRec = this.includeRecords.length;
      var flagRecord = false;
      var i=0;
      for(i=0; i<totRec; i++)
      {
      	if (this.includeRecords[i]==idRecord)
      	{	
      	  flagRecord = true;
      	  break;	
      	}  
      }		
      var tam = xmlStructs.totalVar;
	  var value = xmlStructs.filterSpecialChar(objectData.getText());
	  if (!objectData.getFieldFind()) {
		  if (value == -1) 
			  value = '';
	  }
	  else {
		  if (value == '')
			  value = -1;
	  }
  	  xmlStructs.createVar('var'+tam, 'var'+tam, objectData.dataType, wildcardLeft + value + wildcardRight); 	  
   	  if (!flagRecord)
  	  {
  	  	this.includeRecords[totRec]=idRecord;
  	  	xmlStructs.createRecord(idRecord, idRecord);
  	  	xmlStructs.addFieldToRecord(idRecord, xmlStructs.getVar('var'+tam));
  	    //xmlStructs.addRecordToList(this.nameRecordList,xmlStructs.getRecord(idRecord));
  	  } 
  	  else
  	  {
  	  	var v = xmlStructs.getVar('var'+tam);
  	  	xmlStructs.addFieldToRecord(idRecord, v);
  	  }
    };
    return this.recordListContent[id];
  },
  /*@method createRecord (id,name)*/
  /*@descriptionMethod crea un registro de datos*/
  /*@return (Object) el contenedor del record, la propiedad fields es el Array de campos para el id dado*/
  /*@param id : es el identificador del objeto
  name : es el nombre del registro*/
  createRecord : function(id,name)
  {
    this.recordContent[id] = new Object();
    this.recordContent[id].recordName = name;
    this.recordContent[id].fields = new Array;
    this.recordContent[id].clase = this.TYPE_PARAM_RECORD;
    return this.recordContent[id];
  },
  /*@method createVarList (id)*/
  /*@descriptionMethod crea una lista de variables*/
  /*@return (Object) el contenedor del varList, la propiedad values es el Array de valores para el id dado*/
  /*@param id : es el identificador del objeto*/
  createVarList : function(id,type)
  {
    this.varListContent[id] = new Object();
    this.varListContent[id].values = new Array;
    this.varListContent[id].type = type;
    this.varListContent[id].clase = this.TYPE_PARAM_VARLIST;
    return this.varListContent[id]
  },
  /*@method deleteVar (id)*/
  /*@descriptionMethod borra una variable del contenedor de variables*/
  /*@return void*/
  /*@param id : es el identificador del objeto*/
  deleteVar : function(id)
  {
    this.varContent[id].splice(id,1);
  },
  /*@method deleteRecord (id)*/
  /*@descriptionMethod borra un registro del contenedor de registros*/
  /*@return void*/
  /*@param id : es el identificador del objeto*/
  deleteRecord : function(id)
  {
    this.recordContent.splice(id,1);
  },
  /*@method deleteVarList (id)*/
  /*@descriptionMethod borra una variable del contenedor de variables*/
  /*@return void*/
  /*@param id : es el identificador del objeto*/
  deleteVarList : function(id)
  {
    this.varListContent.splice(id,1);
  },
  /*@method deleteRecordList (id)*/
  /*@descriptionMethod borra un registro del contenedor de registros*/
  /*@return void*/
  /*@param id : es el identificador del objeto*/
  deleteRecordList : function(id)
  {
    this.recordListContent.splice(id,1);
  },
  /*@method getRecordList (id)*/
  /*@descriptionMethod obtiene una estructura xml con los registros de la lista*/
  /*@return void*/
  /*@param id : es el identificador del objeto*/
  getRecordList : function(id)
  { 
    var rl = "<recordList_name>"; 
    rl += this.recordListContent[id].nameRecordList;
    rl +="</recordList_name>"; 
    rl += "<recordList>";
    for(i=0; i<this.recordListContent[id].values.length; i++)
    {
      rl += this.recordListContent[id].values[i];
    }
    rl += "</recordList>";
    return rl;
  },
  /*@method getVarList (id)*/
  /*@descriptionMethod obtiene una estructura xml con las variables de la lista*/
  /*@return void*/
  /*@param es el identificador del objeto*/
  getVarList : function(id)
  {
    var v = "<varList_type>";
    v+= this.varListContent[id].type;
    v+= "</varList_type>";
    v+= "<varList>";
    for(i=0; i<this.varListContent[id].values.length; i++)
    {
      v += this.varListContent[id].values[i];
    }
    v += "</varList>";
    return v;
  },
  /*@method getRecord (id)*/
  /*@descriptionMethod obtiene una estructura xml con el registro*/
  /*@return void*/
  /*@param es el identificador del objeto*/
  getRecord : function(id)
  {
    var r = "<record>";
    r+="<record_name>";
    r+=this.recordContent[id].recordName
    r+="</record_name>";
    r+="<fileds>";
    for(i=0; i<this.recordContent[id].fields.length; i++)
    {
      r+=this.recordContent[id].fields[i];
    }
    r+="</fileds>";
    r+="</record>";
    return r;
  },
  getVar : function(id)
  {
    return this.varContent[id];
  },
  /*@method parser*/
  /*@descriptionMethod Objeto creado para realizar las b?squedas en las estructuras de datos xml de este objeto*/
  /*@return (object)  devuelve el objeto parser*/
  /*@param no posee*/
  parser :
  {
    tagStr : "",
    itemIndex : 0,
    tagOpen: new Array,
    posOpen: new Array,
    tagClose : new Array,
    posClose : new Array,
    /*@property content  : es un objeto incluido dentro del objeto parser (parser.content) el cual maneja la navegaci?n dentro del contenido XML especificado*/
    content  : new Object(),
    addOpenTag : function(tag)
    {
      this.tagOpen[this.tagOpen.length] = tag;
      this.posOpen[this.posOpen.length] = this.itemIndex;
    },
    addCloseTag : function(tag)
    {
      this.tagClose[this.tagClose.length] = tag;
      this.posClose[this.posClose.length] = this.itemIndex - (tag.length+3);
    },
    clear : function()
    {
      xmlStructs.parser.tagOpen.length = 0;
      xmlStructs.parser.tagClose.length = 0;
      xmlStructs.parser.posOpen.length = 0;
      xmlStructs.parser.posClose.length = 0;
    },
    /*@method parser.getContent (tag)*/
    /*@descriptionMethod este m?todo obtiene el contenido que encierra el tag pasado por par?metro*/
    /*@return  (object) objeto para navegar en el contenido del tag*/
    /*@param tag : es el nombre del tag a inspeccionar(string)*/
    getContent : function(tag)
    {
      xmlStructs.parser.content.data = new Array;
      xmlStructs.parser.content.itemIndex = 0;
      var initOpen = new Array;
      var endClose = new Array;
      for(i=0; i<xmlStructs.parser.tagOpen.length; i++)
      {
        if(xmlStructs.parser.tagOpen[i] == tag)
        {
          initOpen[initOpen.length] = xmlStructs.parser.posOpen[i];
        }
        if(xmlStructs.parser.tagClose[i] == tag)
        {
          endClose[endClose.length] = xmlStructs.parser.posClose[i];
        }
      }
      for(i=0; i<initOpen.length; i++)
      {
        xmlStructs.parser.content.data[i] = xmlStructs.parser.tagStr.substring(initOpen[i],endClose[i]);
      }
      /*@method xmlStructs.parser.content.getFirst()*/
      /*@descriptionMethod obtiene el primer elemento dentro del tag*/
      /*@return void*/
      /*@param (string) el contenido del primer elemento del tag*/
      xmlStructs.parser.content.getFirst = function()
      {
        xmlStructs.parser.content.itemIndex = 0;
        return xmlStructs.parser.content.data[0];
      }
      /*@method xmlStructs.parser.content.setFirst ()*/
      /*@descriptionMethod se ubica en el primer elemento dentro del tag*/
      /*@return void*/
      /*@param no posee*/
      xmlStructs.parser.content.setFirst = function()
      {
        xmlStructs.parser.content.itemIndex = 0;
      }
      /*@method xmlStructs.parser.content.hasNext()*/
      /*@descriptionMethod especifica si existe m?s contenido a inspeccionar dentro del tag*/
      /*@return boolean*/
      /*@param no posee*/
      xmlStructs.parser.content.hasNext = function()
      {
        xmlStructs.parser.content.itemIndex++;
        if(xmlStructs.parser.content.itemIndex > xmlStructs.parser.content.data.length-1)
        {
          xmlStructs.parser.content.itemIndex = xmlStructs.parser.content.data.length-1;
          return false;
        }
        else
        {
          return true;
        }
      }
      /*@method xmlStructs.parser.content.get()*/
      /*@descriptionMethod obtiene el contenido dentro del tag especificando*/
      /*@return string (es el contenido)*/
      /*@param no posee*/
      xmlStructs.parser.content.get = function()
      {
        return xmlStructs.parser.content.data[xmlStructs.parser.content.itemIndex];
      }
      /*@method xmlStructs.parser.content.getLast()*/
      /*@descriptionMethod obtiene el contenido dentro del ?ltimo tag*/
      /*@return string (es el contenido)*/
      /*@param no posee*/
      xmlStructs.parser.content.getLast = function()
      {
        xmlStructs.parser.content.itemIndex = xmlStructs.parser.content.data.length-1;
        return xmlStructs.parser.content.data[xmlStructs.parser.content.data.length-1];
      }
      xmlStructs.parser.content.count = xmlStructs.parser.content.data.length;
      /*@method xmlStructs.parser.content.getNext()*/
      /*@descriptionMethod obtiene el contenido dentro del pr?ximo tag*/
      /*@return string (es el contenido)*/
      /*@param no posee*/
      xmlStructs.parser.content.getNext = function()
      {
        xmlStructs.parser.content.itemIndex++;
        if(xmlStructs.parser.content.itemIndex > xmlStructs.parser.content.data.length-1)
        {
          xmlStructs.parser.content.itemIndex = xmlStructs.parser.content.data.length-1;
          return "";
        }
        else
        {
          return xmlStructs.parser.content.data[xmlStructs.parser.content.itemIndex];
        }
      }
      /*@method xmlStructs.parser.content.getPrior()*/
      /*@descriptionMethod obtiene el contenido dentro del anterior tag*/
      /*@return string (es el contenido)*/
      /*@param no posee*/
      xmlStructs.parser.content.getPrior = function()
      {
        xmlStructs.parser.content.itemIndex--;
        if(xmlStructs.parser.content.itemIndex < 0)
        {
          xmlStructs.parser.content.itemIndex = 0;
          return "";
        }
        else
        {
          return xmlStructs.parser.content.data[xmlStructs.parser.content.itemIndex];
        }
      }
      return xmlStructs.parser.content;
    },
    getNewTag : function(pos)
    {
      var tag = "";
      var car = "";
      for(iq=pos; iq<this.tagStr.length; iq++)
      {
        car = this.tagStr.charAt(iq);
        if((car!="<")&&(car!="/")&&(car!=">"))
        tag += car;
        this.itemIndex=iq+1;
        if(car==">")
        return tag;
      }
      return tag;
    },
    isNewTag : function(pos)
    {
      if((this.tagStr.charAt(pos)=="<")&&(this.tagStr.charAt(pos+1)!="/"))
      return true;
      else
      return false;
    },
    isFinalTag : function(pos)
    {
      if((this.tagStr.charAt(pos)=="<")&&(this.tagStr.charAt(pos+1)=="/"))
      return true;
      else
      return false;
    },
    setTagStr : function(tagStr)
    {
      this.tagStr = tagStr;
    },
    /*@method parse.parsing (tagStr)*/
    /*@descriptionMethod realiza la inspecci?n del xml para su posterior navegacion*/
    /*@return string (es el contenido)*/
    /*@param no posee*/
    parsing : function(tagStr)
    {
      this.clear();
      this.setTagStr(tagStr);
      for(var pi=0; pi<this.tagStr.length; pi++)
      {
        if(this.isNewTag(pi))
        {
          var tag = this.getNewTag(pi);
          this.addOpenTag(tag);
        }
        if(this.isFinalTag(pi))
        {
          var tag = this.getNewTag(pi);
          this.addCloseTag(tag);
        }
      }
    }
  }
}
/*@observations No se incluyen los m?todos y propiedades internas de este objeto.*/


