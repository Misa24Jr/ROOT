var json = function(name)
{  
  var jd = xmlHttpReq.json(name);
  if(typeof jd !='undefined' && jd!=null) 
    return jd
  else
    alert('El JSON "'+name+'"  no existe o no se pudo cargar..!');
  return null;
}

  var stsRdy = ['No Inicializado','Cargando','Cargado','Interactuando','Completado'];   
  var sts = new Array();
  sts[100] = 'Continue';
  sts[101] = 'Switching protocols';
  sts[200] = 'OK';
  sts[201] = 'Created';
  sts[202] = 'Accepted';
  sts[203] = 'Non-Authoritative Information';
  sts[204] = 'No Content';
  sts[205] = 'Reset Content';
  sts[206] = 'Partial Content';
  sts[300] = 'Multiple Choices';
  sts[301] = 'Moved Permanently';
  sts[302] = 'Found';
  sts[303] = 'See Other';
  sts[304] = 'Not Modified';
  sts[305] = 'Use Proxy';
  sts[307] = 'Temporary Redirect';
  sts[400] = 'Bad Request';
  sts[401] = 'Unauthorized';
  sts[402] = 'Payment Required';
  sts[403] = 'Forbidden';
  sts[404] = 'Not Found';
  sts[405] = 'Method Not Allowed';
  sts[406] = 'Not Acceptable';
  sts[407] = 'Proxy Authentication Required';
  sts[408] = 'Request Timeout';
  sts[409] = 'Conflict';
  sts[410] = 'Gone';
  sts[411] = 'Length Required';
  sts[412] = 'Precondition Failed';
  sts[413] = 'Request Entity Too Large';
  sts[414] = 'Request-URI Too Long';
  sts[415] = 'Unsupported Media Type';
  sts[416] = 'Requested Range Not Suitable';
  sts[417] = 'Expectation Failed';
  sts[500] = 'Internal Server Error';
  sts[501] = 'Not Implemented';
  sts[502] = 'Bad Gateway';
  sts[503] = 'Service Unavailable';
  sts[504] = 'Gateway Timeout';
  sts[505] = 'HTTP Version Not Supported';

var xmlHttpReq = {
    countAddParam: 0,
    url: "",
    params: "",
    htmlMethod: "POST",
    serverObjectName: "",
    serverMethodName: "",
    paramSrc: "",
    paramRptXML: "",
    response: "",
    xmlhttp: new Object(),
    stsCmd: 0,
    CORBA_OBJ: 0,
    NEW_PAGE: 1,
    NEW_URL: 2,
    UTF8: 'UTF-8',
    UTF16: 'UTF-16',
    WINDOWS1252: 'windows-1252',
    page: "",
    tablaASCII: "ISO-8859-1",
    RPTXML: "TYPE_RPT_XML",
    AsynchMode: true,
    activeErrDlg: false,
    tableDgl: new Object(),
    objResponse: new Object(),
    objStsResponse : new Object(),
    jsonList: new Array(),
    onReceivedFunction: new Function(''),
    onReceivedErrFunction: new Function(''),
    nameComponent : 'xmlHttpReq', 
    
    getNav : function(){
    	var sBrowser, sUsrAg = navigator.userAgent;
		if(sUsrAg.indexOf("Chrome") > -1) {
    		sBrowser = "chrome";
		} else if (sUsrAg.indexOf("Safari") > -1) {
    		sBrowser = "safari";
		} else if (sUsrAg.indexOf("Opera") > -1) {
    		sBrowser = "opera";
		} else if (sUsrAg.indexOf("Firefox") > -1) {
    		sBrowser = "mozilla Firefox";
		} else if (sUsrAg.indexOf("MSIE") > -1) {
    		sBrowser = "explorer";
		}
		return sBrowser;
   },
   
    addParam: function(type, param){
        this.params += "<parameter>";
        this.params += "<param_type>";
        this.params += type;
        this.params += "</param_type>";
        this.params += "<param_value>";
        this.params += param;
        this.params += "</param_value>";
        this.params += "</parameter>";
    },
    addParamSrc : function(p)
    {
      this.paramSrc=p;
    },
    addParamRptXML : function(p)
    {
      this.paramRptXML=p;
      this.addParamValue("var", "String", this.RPTXML);
    },
    addParamValue: function(type, typeData, value, nameVar){
        this.params += "<parameter>";
        this.params += "<param_type>";
        this.params += type;
        this.params += "</param_type>";
        this.params += "<param_value>";
        
        if (xmlHttpReq.addParamValue.arguments.length == 3) {
            var vn = "<var_name>var" + this.countAddParam + "</var_name>";
        }
        else {
            var vn = "<var_name>var" + nameVar + "</var_name>";
        }
        var vt = "<var_type>" + typeData + "</var_type>";
        var vv = "<value>" + value + "</value>";
        
        this.params += "<var>" + vn + vt + vv + "</var>";
        this.params += "</param_value>";
        this.params += "</parameter>";
        this.countAddParam++;
    },
    addPrmValue: function(type, typeData, value){
        value = this.xmlEscape(value);
        this.params += "<parameter>";
        this.params += "<param_type>";
        this.params += type;
        this.params += "</param_type>";
        this.params += "<param_value>";
        
        var vn = "<var_name>var" + this.countAddParam + "</var_name>";
        var vt = "<var_type>" + typeData + "</var_type>";
        var vv = "<value>" + value + "</value>";
        
        this.params += "<var>" + vn + vt + vv + "</var>";
        this.params += "</param_value>";
        this.params += "</parameter>";
        this.countAddParam++;
    },
    clearParams: function(){
        this.params = "";
        this.paramRptXML = "";
        this.paramSrc = "";
    },
    clearResponse: function(){
        this.response = "";
    },
    getParams: function(){
        var p = "";

        if (this.getNav() == "chrome") {
        	this.tablaASCII = 'UTF-8';
        }
        else {
        	this.tablaASCII = 'ISO-8859-1';
        }
        p += "<?xml version='1.0' encoding='" + this.tablaASCII + "'?> ";
        p += "<parameters>";
        p += this.params;
        p += "</parameters>";
        return p;
    },
    getResponse: function(){
        return xmlHttpReq.response;
    },
    setTablaASCII: function(tablaASCII){
        xmlHttpReq.tablaASCII = tablaASCII;
    },
    setURL: function(u){
        xmlHttpReq.url = u;
    },
    getStsCmd : function(){
        return xmlHttpReq.stsCmd;
    },
    setPage: function(p){
        xmlHttpReq.page = p;
    },
    setHTMLMethod: function(m){
        xmlHttpReq.htmlMethod = m;
    },
    setServerObjName: function(son){
        xmlHttpReq.serverObjectName = son;
    },
    setServerMethodName: function(smn){
        xmlHttpReq.serverMethodName = smn;
    },
    getSendValue : function(){
    	return "serverObjectName=" + xmlHttpReq.serverObjectName + 
        "&serverMethodName=" + xmlHttpReq.serverMethodName +
        "&parameters=" + xmlHttpReq.getParams() +
        "&rptXML=" + xmlHttpReq.paramRptXML +
        "&paramSrc=" + xmlHttpReq.paramSrc;
    },
    send: function(value){
        try {
        	xmlHttpReq.stsCmd=1;
            if (xmlHttpReq.send.arguments.length == 0) {
                value = this.getSendValue();
            }
            if (window.XMLHttpRequest) {
                xmlHttpReq.xmlhttp = new XMLHttpRequest();
                xmlHttpReq.xmlhttp.onreadystatechange = xmlHttpReq.xmlhttpChange;
                xmlHttpReq.xmlhttp.open(xmlHttpReq.htmlMethod, xmlHttpReq.url, this.AsynchMode);
                xmlHttpReq.xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xmlHttpReq.xmlhttp.send(value);
            }
            else {
                if (window.ActiveXObject) {
                    xmlHttpReq.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                    if (xmlHttpReq.xmlhttp) {
                        xmlHttpReq.xmlhttp.onreadystatechange = xmlHttpReq.xmlhttpChange;
                        xmlHttpReq.xmlhttp.open(xmlHttpReq.htmlMethod, xmlHttpReq.url, this.AsynchMode);
                        xmlHttpReq.xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                        xmlHttpReq.xmlhttp.send(value);
                    }
                }
            }
        } 
        catch (e) {
            alert("ERROR de envio : " + e);
        }
    },
    setAsynchMode: function(){
        this.AsynchMode = true;
    },
    setSynchMode: function(){
        this.AsynchMode = false;
    },
    setOnReceivedFunction: function(funct){
        xmlHttpReq.onReceivedFunction = new Function(funct);
    },
    setOnReceivedErrFunction: function(funct){
        xmlHttpReq.onReceivedErrFunction = new Function(funct);
    },
    showDlgErr: function(){
        if (!xmlHttpReq.activeErrDlg) {
            DlgErr.create();
            DlgErr.setObjAttrib(attrib, 1);
            DlgErr.init();
        }
        if (xmlHttpReq.objResponse != null) 
            DlgErr.setObjResponse(xmlHttpReq.objResponse);
        DlgErr.show();
    },
    json : function(name) 
    {
       return xmlHttpReq.jsonList[name];
    },
    xmlhttpChange: function()
    {
      try {
        	xmlHttpReq.stsCmd=2;
            if (xmlHttpReq.xmlhttp.readyState == 4) 
            {
                if (xmlHttpReq.xmlhttp.status == 200) 
                {
                    xmlHttpReq.response = xmlHttpReq.xmlhttp.responseText;
                    eval(xmlHttpReq.response);
                    dlgWait.hide();
                    Tool.setTimestamp(stsResponse.timestamp);
                    if (stsResponse.sts) 
                    {
                    	xmlHttpReq.objStsResponse = stsResponse;
                        xmlHttpReq.objResponse = stsResponse.response;
                        for(var i=0; i<xmlHttpReq.objResponse.length; i++) 
                        {
                          xmlHttpReq.jsonList[stsResponse.listName[i]] = xmlHttpReq.objResponse[i];
                        }
                        xmlHttpReq.onReceivedFunction();
                    }
                    else 
                    {
                    	if (stsResponse.objectName == 'login') {
							Alert.show(stsResponse.longInfo, 'SEGURIDAD', Alert.TYPE_INFO, "location.replace('/')");
						}
                    	else if (stsResponse.objectName == 'warning') {
							Alert.show(stsResponse.longInfo, 'SISTEMA', Alert.TYPE_WARNING);
						}
                    	else if (stsResponse.objectName == 'permission') {
							Alert.show(stsResponse.longInfo, 'SEGURIDAD', Alert.TYPE_WARNING);
						}
                    	else if (stsResponse.objectName == 'info') {
							Alert.show(stsResponse.longInfo, 'SISTEMA', Alert.TYPE_INFO);
						}
                    	else if (stsResponse.objectName == 'password') {
                    		MantCamClave.show();
						}
                    	else if (stsResponse.objectName == 'link') {
							Alert.show('Pulse ACEPTAR para descargar.', 'SEGURIDAD', Alert.TYPE_INFO, 'new OpenWin().getFile("' + stsResponse.longInfo + '")');
						}
						else {
							xmlHttpReq.objResponse = stsResponse;
							xmlHttpReq.onReceivedErrFunction();
							xmlHttpReq.showDlgErr();
						}
					}
                }
                else 
                {
                  dlgWait.hide();
                  Alert.show("COMMUNICATION ERROR ("+xmlHttpReq.xmlhttp.status+"): "+sts[xmlHttpReq.xmlhttp.status], 'SISTEMA', Alert.TYPE_ERROR);
                }
            }
        } 
        catch (e) 
        {
          dlgWait.hide();
          Alert.show("ATENCION: <br>Permita ventanas Emergentes al Navegador<br>" + "ACTIVELO".bold() + " en la esquina superior derecha, luego reintente...  <br>Detalle Técnico: " + e, 'SISTEMA', Alert.TYPE_ERROR);
        }
    },
    executeResponse: function(){
        eval(xmlHttpReq.response);
    },
    RFC: function(msg)
    {
    	if (msg) 
    	{
    		dlgWait.showCenter(msg, true);
    	}
        xmlHttpReq.clearResponse();
        xmlHttpReq.setURL("/despachador");
        xmlHttpReq.send();
        xmlHttpReq.clearParams();
    }
};

