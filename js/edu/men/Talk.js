var xmlhttp = null;
var xmlhttpMSG = null;
var audio = new Audio();

var Talk = 
{
  chat : null,
  sts : 0,
  show : function() 
  {
    if(Talk.sts==0||Talk.sts==3)
    {	 
      audio.loadAudioFile('audio/openChat.mp3');
      audio.play();
      if(this.chat == null)
    	this.chat = new Chat();  
  	  this.chat.show(); 
  	  if(Talk.sts!=3)
  	    this.chat.connectNow('/educa/chat',json('dataOrg').data[11][0]);
  	  Talk.sts = 1;
    }  
  }
};

Chat = function()
{
  var chatAttr = new ChatAttrib();	
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
  
  var STS_CLOSE = 0;
  var STS_CREATE = 1;
  var STS_SHOW = 2;
  var STS_MIN = 3;
  var timePing = 5000; 
  
  var trama = '';
  var url = '';
  var msg_ = '';
  var user_ = '';
  var addressee_ ='';
  var typeTrama = -1;
  var separator = '-';
  var stsDlg = STS_CREATE;
  var objMsg = new Object();
  var onConnFunct = new Function('');
  var onCloseFunct = new Function('');
  var onMsgFunct = new Function('');
  var onSendFunct = new Function('');
  var onErrorFunct = new Function('');
  this.TYPE_CONNECTION = 0;
  this.TYPE_MSG = 1;
  this.TYPE_CLOSE = 2;
  this.TYPE_GETMSG = 3;
  var wDlg = 320;
  var zIndex = 1000000;
  var hDlg = 400;
  var posX = document.documentElement.clientWidth / 2 - wDlg / 2;
  var posY = window.innerHeight / 2 - hDlg / 2;  
  var dlg = new CanvasBuilder(null, wDlg, hDlg);
  var ctx = dlg.getCanvasContext();
  dlg.addToBody(); 
  var pc = dlg.getPanelCanvas();
  var mouseX = 0;
  var mouseY = 0;
  var diffX = 0;
  var diffY = 0;
  var isMouseDown = false;
  var divTitle = document.createElement('div');
  var msgQueue = new Array();
  var isDisconnect = false;
  
  //********************************************** PROPIEDADES DEL DIALOGO ************************************************
  chatAttr.setEnviroment(ambiente);
  var colorBarDlg = chatAttr.getColorBarDlg();   
  var colorDlg = chatAttr.getColorDlg();
  var colorTextTitle = chatAttr.getColorTextTitle();
  var sizeFontTitle = chatAttr.getSizeFontTitle();
  var fontFamilyTitle = chatAttr.getFontFamilyTitle();
  var colorButton = chatAttr.getColorButton();
  var colorCaptionButton = chatAttr.getColorCaptionButton();
  var colorButtonDown = chatAttr.getColorButtonDown();
  var colorButtonOver = chatAttr.getColorButtonOver();
  var sizeFontButton = chatAttr.getSizeFontButton();
  var familyFontButton = chatAttr.getFamilyFontButton();
  var colorCaptions = chatAttr.getColorCaptions();
  var sizeCaption = chatAttr.getSizeCaption();
  var sizeStsMsg = chatAttr.getSizeStsMsg();
  var fontFamilyCaption = chatAttr.getFontFamilyCaption();
  var colorMsgStsError = chatAttr.getColorMsgStsError();
  var colorBorderButtonSend = chatAttr.getcolorBorderButtonSend();
  var colorTextMsg = chatAttr.getcolorTextMsg();
  var familyTextMsg = chatAttr.getFamilyTextMsg();
  var sizeTextMsg = chatAttr.getSizeTextMsg();
  var bgColorEdit = chatAttr.getBgColorEdit();
  var interval = null;
  var reconex = false;
  pc.style.position = 'absolute';
  pc.style.display = 'none';
  //COLOR DE FONDO DE BARRA DE TITULO Y MENSAJE
  pc.style.backgroundColor = colorBarDlg;
  pc.style.borderRadius = '1em';//BORDES REDONDO PARA EL DIALOGO  
  
  playSound = function(soundFile)
  {  
    audio.loadAudioFile('audio/'+soundFile);
    audio.play();  
  };    
  
  stopSound = function()
  {
    audio.stop();  
  };
  
  normalize = function(strValue) 
  {
	  var strOut = "" + strValue;
	  strOut = strOut.replace(/&/gi,'&amp;');
	  strOut = strOut.replace(/</gi,'&lt;');
	  strOut = strOut.replace(/\\/gi,'&#92;&#92;');
	  strOut = strOut.replace(/'/gi,'´');
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
	  strOut = strOut.replace(/º/g,'&#176;');
	  return strOut;
  };
  
  var getMouseXY = function(e)
  {
    var IE = document.all?true:false;
    if (IE)
    {
      mouseX = event.clientX ;
      mouseY = event.clientY ;
    }
    else
    {
      mouseX = e.screenX;
      mouseY = e.screenY;
    };
  };
  
  var setFocus = function()
  {
	pc.style.zIndex = zIndex;  
	editMsg.focus();
  };
  
  pc.onmousedown = function(e)
  {
	setFocus();  
  };
  
  divTitle.onmouseup = function(e)
  {
	setFocus();  
  };
  
  divTitle.onmousedown = function(e)
  {
	getMouseXY(e);  
	pc.style.zIndex = zIndex;
	isMouseDown = true;
	diffX = mouseX - posX;
	diffY = posY - mouseY;	  
	document.onmousemove = function(e)
	{
	  getMouseXY(e);
	  if(isMouseDown)
	  {
		var dx = mouseX - posX;
		var dy = posY - mouseY;
	    var newPosX = posX + dx - diffX;
	    var newPosY = posY - dy + diffY;
		setPosition(newPosX, newPosY);  
	  }
	};
	
	document.onmouseup = function(e)
	{
	  isMouseDown = false; 
	};
	setFocus();
  };
  
  pc.onmouseover = function(e)
  {  
	this.style.cursor = 'pointer';	
  };
  
  var outText = function(txt, x, y, color, size, family) 
  {
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.font = 'bold '+size+'px '+family;
	ctx.textAlign ='left';
	ctx.fillText(txt,x,y);
	ctx.closePath();  
  };
  
  var paintDlg = function()
  {
	ctx.clearRect(0,0,wDlg,hDlg);  
    //COLOR DE FONDO DEL DIALOGO
    ctx.beginPath();
    ctx.fillStyle = colorDlg;
    ctx.fillRect(0,20,wDlg,hDlg-40);
    ctx.closePath();
    //TITULO
    ctx.beginPath();
    ctx.fillStyle = colorTextTitle;
    ctx.font = 'bold '+sizeFontTitle+'px '+fontFamilyTitle;
    ctx.textAlign ='center';
    ctx.fillText('CHAT EDUCA',wDlg/2,14);
    ctx.closePath();
    //ETIQUETAS
    outText('Destinatario :',10,250,colorCaptions,sizeCaption,fontFamilyCaption);
    outText('Mensaje :',10,300,colorCaptions,sizeCaption,fontFamilyCaption);
  };
  paintDlg();
  //**********************************************************************************************************************
  
  //************************************************* METODOS PRIVADOS ***************************************************
  var addObj = function(obj,x,y)
  {
    pc.appendChild(obj);
    obj.style.position = 'absolute';
    obj.style.left=x+'px';
    obj.style.top=y+'px';    
  };
  
  var setDimObj = function(obj,w,h)
  {
	obj.style.width = w + 'px';  
	obj.style.height = h + 'px';
  };
    
  var setStsMsg = function(txt,color)
  { 	 
	 paintDlg(); 
	 ctx.beginPath();
	 if(color)
	   ctx.fillStyle = color;
	 else
       ctx.fillStyle = colorTextTitle;
	 ctx.font = 'bold '+sizeStsMsg+'px '+fontFamilyTitle;
	 ctx.textAlign ='left';
	 ctx.fillText(txt,10,392);
	 ctx.closePath(); 
  };
  
  var appendObj = function()
  {
	addObj(bandeja,10,28);
	addObj(editDest,10,260);
	addObj(editMsg,10,310); 
	addObj(buttonSend,wDlg-60,330); 
	addObj(divTitle,0,0);
  };
   
  //**********************************************************************************************************************
  
  //********************************************** OBJETOS DEL DIALOGO ***************************************************
  var bandeja = document.createElement('textArea');
  var editMsg = document.createElement('textArea');
  var editDest = document.createElement("input");
  var buttonSend = document.createElement('div');
  var buttonClose = document.createElement('div');
  var buttonMin = document.createElement('div');
  
  bandeja.style.color = colorTextMsg;
  bandeja.style.fontSize = sizeTextMsg + 'px';
  bandeja.style.fontFamily = familyTextMsg;
  bandeja.style.backgroundColor = bgColorEdit;
  
  editMsg.style.color = colorTextMsg;
  editMsg.style.fontSize = sizeTextMsg + 'px';
  editMsg.style.fontFamily = familyTextMsg;
  editMsg.style.backgroundColor = bgColorEdit;
 
  editDest.style.color = colorTextMsg;
  editDest.style.fontSize = sizeTextMsg + 'px';
  editDest.style.fontFamily = familyTextMsg;
  editDest.style.backgroundColor = bgColorEdit;
 
  bandeja.readOnly = true;
  
  //DIMENSIONAMIENTO
  setDimObj(bandeja,wDlg-22,hDlg/2);
  setDimObj(editMsg,wDlg-80,60);  
  setDimObj(editDest,wDlg-22,20);
  setDimObj(buttonSend,46,26);
  setDimObj(buttonClose,14,14);
  setDimObj(buttonMin,14,14);
  setDimObj(divTitle,wDlg,20);
  
  divTitle.style.backgroundColor = "rgba(0,0,0,0)";
  divTitle.style.borderTopLeftRadius = "1em";
  divTitle.style.borderTopRightRadius = "1em";
  divTitle.style.lineHeight =  '14px';  
  divTitle.appendChild(buttonMin);
  divTitle.appendChild(buttonClose);
  
  buttonSend.style.lineHeight='25px';
  buttonSend.style.vAlign = 'middle';
  buttonSend.style.borderRadius = '1em';
  buttonSend.style.backgroundColor = colorButton;
  buttonSend.style.borderWidth = '1px';
  buttonSend.style.borderStyle = 'solid';
  buttonSend.style.borderColor = colorBorderButtonSend;
  buttonSend.innerHTML = 'Enviar';
  buttonSend.align = 'center';
  buttonSend.style.fontFamily = familyFontButton;
  buttonSend.style.fontSize = sizeFontButton+'px';
  buttonSend.style.color = colorCaptionButton;
  
  buttonClose.style.position = 'absolute';
  buttonClose.style.left = (wDlg-20) + 'px';
  buttonClose.style.top = 3 + 'px'; 
  buttonClose.innerHTML = 'x';
  buttonClose.align = 'center';
  buttonClose.style.lineHeight='12px';
  //buttonClose.style.lineWidth='14px';
  buttonClose.style.vAlign = 'middle';
  //buttonClose.style.hAlign = 'middle';
  buttonClose.style.borderRadius = '1em';
  buttonClose.style.backgroundColor = colorButton;
  buttonClose.style.borderWidth = '1px';
  buttonClose.style.borderStyle = 'solid';
  buttonClose.style.borderColor = colorButton;
  buttonClose.style.fontFamily = familyFontButton;
  buttonClose.style.fontSize = sizeFontButton+'px';
  buttonClose.style.color = colorCaptionButton;
  
  buttonMin.style.position = 'absolute';
  buttonMin.style.left = (wDlg-37) + 'px';
  buttonMin.style.top = 3 + 'px'; 
  buttonMin.innerHTML = '-';
  buttonMin.align = 'center';
  buttonMin.style.lineHeight='12px';
  buttonMin.style.vAlign = 'middle';
  buttonMin.style.borderRadius = '1em';
  buttonMin.style.backgroundColor = colorButton;
  buttonMin.style.borderWidth = '1px';
  buttonMin.style.borderStyle = 'solid';
  buttonMin.style.borderColor = colorButton;
  buttonMin.style.fontFamily = familyFontButton;
  buttonMin.style.fontSize = sizeFontButton+'px';
  buttonMin.style.color = colorCaptionButton;
  
    
  //****************************************************** EVENTOS *******************************************************
  var connectingReceived = function()
  {
	reconex=false;  
	setStsMsg(objMsg.msg);
	onConnFunct();  
	if(objMsg.msg=='EL USUARIO YA EXISTE')
	{
	  setStsMsg("DESCONECTANDO SESION EN OTRO EQUIPO...");	
	  disconnect();
	  reconex=true;
	}
  };
  
  var showMessageReceived = function(us, ms)
  { 
	if(us==user_)	
	  bandeja.value += us + '> ' + ms + '\n';
	else
	  bandeja.value += us + '>>>>>>>>>> ' + ms + '\n';	
	bandeja.scrollTop=9999;  
  };
  
  var convertSpecialCode = function(code, car, cad)
  {
	var ms ='';	
	for(var i=0; i<cad.length; i++)
	{
	  var c3 = '';  
	  if(i <= cad.length-3)  
	    c3 = cad.charAt(i)+cad.charAt(i+1)+cad.charAt(i+2);
	  if(c3!=code)
	  {	
	    ms += cad.charAt(i);
	  }
	  else  
	  {
	    ms+=car; 	
	    if(i <= cad.length-3)
	      i=i+2;
	  };
    };  
    return ms;
  };
  
  var onMsgReceived = function()
  {
	onMsgFunct();
	if(objMsg.user!=user_)
    {	  	
	  var cadRcv  = ['|_*','*|#','$|*','?#*','|$?','#|*'];
	  var carConv = ['-',  '%',  '\\', '€',  '+',  '&'];
	  var str=[objMsg.msg];
	  for(var i=0; i<cadRcv.length; i++)
		str[i+1] = convertSpecialCode(cadRcv[i], carConv[i], str[i]);    
	  showMessageReceived(objMsg.user, str[cadRcv.length]);
	  playSound('receiveChat.mp3');
    }
	setStsMsg('MENSAJE RECIBIDO DE '+objMsg.user+' ...');
  };
  
  var onErrorReceived = function()
  {  
	setStsMsg('AVISO: '+objMsg.msg,colorMsgStsError);	
	onErrorFunct();
  };
  
  var onSendReceived = function()
  {
	onSendFunct();
	if(objMsg.user!=undefined)
	  setStsMsg('Enviando mensaje a '+objMsg.user);
  };
  
  var onCloseReceived = function()
  {
    if(!reconex)
	{
	  stsDlg = STS_CLOSE;
	  Talk.sts=0;
	  onCloseFunct();  
	  setStsMsg("");
	  wait();
	  if(isDisconnect)
	   hideDlg();
	}
    else
    {	
      wait();		
      reconecting();
    }
    reconex=false;
  };
  
  var sleep = function(millis)
  {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
  };
  
  var reconecting = function()
  {   
	sleep(5*timePing); 
    isDisconnect = false;
    pc.style.left = posX + 'px';    
	pc.style.top  = posY + 'px';  
	pc.style.display = 'block';
	stsDlg = STS_SHOW;
    var posQ = msgQueue.length;  
    msgQueue[posQ] = new Object();
    msgQueue[posQ].msg = "conn";  
    msgQueue[posQ].addressee = "";
    msgQueue[posQ].typeTrama = 0;
    msgQueue[posQ].user = user_;
    msgQueue[posQ].url = URL;
    notify();
    editDest.focus();
    setStsMsg('CONECTADO...');
  };
  
  var wait = function()
  {
	clearInterval(interval);
    interval=-1;  
  };
  
  var notify = function()
  {
	interval = setInterval(send, timePing); 
  };
  
  var setTimeInterval = function(time)
  {
	clearInterval(interval);
	timePing = time; 
	notify();
  };
  
  var disconnect = function()
  {
	isDisconnect = true; 
    stsDlg = STS_CLOSE;
  	Talk.sts=0;
  	var posQ = msgQueue.length;  
	msgQueue[posQ] = new Object();
	msgQueue[posQ].typeTrama = 2;
  	send();
  	wait();
  };
  
//EVENTOS EN EL BOTON CERRAR
  buttonClose.onmousedown = function(e)
  {
	buttonClose.style.backgroundColor = colorButtonDown;  
	setStsMsg('Cerrando...');
	stsDlg = STS_CLOSE;
	Talk.sts=0;
  };
  
  buttonMin.onmousedown = function(e)
  {
	buttonMin.style.backgroundColor = colorButtonDown;  
	setStsMsg('Minimizando...');
	stsDlg = STS_MIN;
	Talk.sts=3;
  };
  
  buttonMin.onmouseup = function(e)
  { 
	buttonMin.style.backgroundColor = colorButton;  
	hideDlg();
  };
  
  buttonClose.onmouseup = function(e)
  {
	disconnect();  
	buttonClose.style.backgroundColor = colorButton;  
	hideDlg();
  };
  
  buttonClose.onmouseover = function(e)
  {
	buttonClose.style.cursor= 'pointer';  
	buttonClose.style.backgroundColor = colorButtonOver;
  };
  
  buttonMin.onmouseover = function(e)
  {
	buttonMin.style.cursor= 'pointer';  
	buttonMin.style.backgroundColor = colorButtonOver;
  };
  
  buttonMin.onmouseout = function(e)
  {
	buttonMin.style.cursor= 'default';  
	buttonMin.style.backgroundColor  = colorButton;
  };
  
  buttonClose.onmouseout = function(e)
  {
	buttonClose.style.cursor= 'default';  
	buttonClose.style.backgroundColor  = colorButton;
  };
  
  editMsg.onkeyup = function(e)
  {
    if(!e)
	{
	  if(window.event)
	  {
	  	e=window.event;
	  }
    }
    if(typeof(e.keyCode)=='number')
    {
	  e = e.keyCode;//IE
	}
	else
	{
	  if(typeof(e.which)=='number')
	  {
	   	e=e.which;//NS
	  } 
	  else
	  {
	  	e=e.charCode;//NS - MOZ
	  }
	}
	var key = e;
	switch (key)
	{
	  case 13 : 
	  {
	    if(editDest.value=='' || editMsg.value=='')
	      setStsMsg('AVISO: DEBE COLOCAR DESTINATARIO Y MENSAJE A ENVIAR.',colorMsgStsError);
	    else
	    {	 
	      msg_ = editMsg.value;
	      var dest = editDest.value.split(",");
	      showMessageReceived(user_, msg_);
	      for(var i=0; i<dest.length; i++)
	      {
	 	    if(dest[i]!=user_)
		    {
		      var posQ = msgQueue.length;  
		      msgQueue[posQ] = new Object();
	  	      msgQueue[posQ].msg = replaceControlChar(msg_);
		      msgQueue[posQ].addressee = dest[i];
		      msgQueue[posQ].typeTrama = 1;
		      msgQueue[posQ].user = user_;
	          setStsMsg('PREPARANDO MENSAJE PARA '+dest[i]+'...');
		    }
		    else
		    {
		      setStsMsg('NO PUEDE ENVIARSE MENSAJES A SI MISMO...');
		    }
	      }
	    } 	
	    editMsg.value='';
	  }
	  case 27 : {break;}
	  default : {break;}
	};	
  };
  // EVENTOS EN EL BOTON ENVIAR
  buttonSend.onmousedown = function(e)
  {
	if(editDest.value=='' || editMsg.value=='')
	  setStsMsg('AVISO: DEBE COLOCAR DESTINATARIO Y MENSAJE A ENVIAR.',colorMsgStsError);
	else
	{	
	  buttonSend.style.backgroundColor = colorButtonDown;  	  
	  msg_ = editMsg.value;
	  var dest = editDest.value.split(",");
	  showMessageReceived(user_, msg_);
	  for(var i=0; i<dest.length; i++)
	  {
		if(dest[i]!=user_)
		{
		  var posQ = msgQueue.length;  
		  msgQueue[posQ] = new Object();
	  	  msgQueue[posQ].msg = replaceControlChar(msg_);
		  msgQueue[posQ].addressee = dest[i];
		  msgQueue[posQ].typeTrama = 1;
		  msgQueue[posQ].user = user_;
	      setStsMsg('PREPARANDO MENSAJE PARA '+dest[i]+'...');
		}
		else
		{
		  setStsMsg('NO PUEDE ENVIARSE MENSAJES A SI MISMO...');
		}
	  }
	}
  };
  
  
  
  buttonSend.onmouseup = function(e)
  {
	buttonSend.style.backgroundColor = colorButton;  
	editMsg.value='';	
	
  };
  
  buttonSend.onmouseover = function(e)
  {
	buttonSend.style.cursor= 'pointer';  
	buttonSend.style.backgroundColor = colorButtonOver;
  };
  
  buttonSend.onmouseout = function(e)
  {
	buttonSend.style.cursor= 'default';  
	buttonSend.style.backgroundColor  = colorButton;
  };
   
  //**********************************************************************************************************************   
  
  //******************************************* INSERCION DE OBJETOS AL DIALOGO ******************************************
  appendObj();
  setStsMsg('CONECTANDO...');
  //**********************************************************************************************************************
  
  this.show = function()
  {
	pc.style.left = posX + 'px';    
	pc.style.top  = posY + 'px';  
	pc.style.display = 'block';
	stsDlg = STS_SHOW;
	setStsMsg('CONECTANDO...');
  };
  
  var setPosition = function(x,y)
  {
	posX = x;
	posY = y;
	pc.style.left = posX + 'px';    
	pc.style.top  = posY + 'px';  
	pc.style.display = 'block';
	stsDlg = STS_SHOW;
  };
  
  this.getSTS = function()
  {
	return stsDlg;  
  };
  
  var hideDlg = function()
  {
	pc.style.display = 'none';  
  };
  
  this.onConnected = function(funct)
  {
    onConnFunct = new Function(funct);  
  };
  
  this.connectNow = function(URL,userConn)
  {    
	interval=null;  
	user_ = userConn;
	url = URL;
	isDisconnect = false;
	var posQ = msgQueue.length;  
	msgQueue[posQ] = new Object();
	msgQueue[posQ].msg = "conn";  
	msgQueue[posQ].addressee = "";
	msgQueue[posQ].typeTrama = 0;
	msgQueue[posQ].user = userConn;
	msgQueue[posQ].url = URL;
	notify();
	editDest.focus();
  };
    
  this.onClose = function(funct)
  {
    onCloseFunct = new Function(funct);
  };  
  
  this.onMessage = function(funct)
  {
     onMsgFunct = new Function(funct); 
  };
  
  this.onSend = function(funct)
  {
    onSendFunct = new Function(funct);   
  };
  
  this.onError = function(funct)
  {
    onErrorFunct = new Function(funct);  
  };
    
  this.setTrama = function(type, user, addressee, msgUser)
  {
    switch(type)
    {
       case 0 : { trama = 'trama = ' + user + separator + 'cnn';  break; }
       case 1 : { trama = 'trama = ' + user + separator + 'msg'+ separator + msgUser + separator + addressee; break; }
       case 2 : { trama = 'trama = ' + user + separator + 'dcn'; break; }  
       case 3 : { trama = 'trama = ' + user + separator + 'get'; break; }
    };  
    return trama;    
  };
  
  var buildTrama = function()
  { 
	switch(typeTrama)
    {
       case 0 : { trama = 'trama=' + user_ + separator + 'cnn';  break; }
       case 1 : { trama = 'trama=' + user_ + separator + 'msg'+ separator + msg_ + separator + addressee_; break; }
       case 2 : { trama = 'trama=' + user_ + separator + 'dcn'; break; }
       case 3 : { trama = 'trama=' + user_ + separator + 'get'; break; }
    };
    return trama;   
  };
  
  this.setUser = function(u)
  {
    user_= u;  
  };
  
  this.setAddressee = function(adr)
  {
    addressee_ = adr;  
  };
  
  this.setMsg = function(message)
  {
    msg_ = message;  
  };
  
  this.setTypeTrama = function(tt)
  {
    typeTrama = tt;    
  };
  
  this.setURL = function(URL)
  {
    url = URL;
  };
  
  this.setSeparator = function(newSeparator)
  {
    separator = newSeparator;  
  };
  
  this.getJSON = function()
  {
    return objMsg;  
  };
  
  var xmlhttpChange = function()
  {
    try 
    {      	
      if (xmlhttp.readyState == 4) 
      {
        if (xmlhttp.status == 200) 
        {
          objMsg = JSON.parse(xmlhttp.responseText);
          if(objMsg.type == 'event')
          {
             if(objMsg.msg == 'onClose')
               onCloseReceived();
             if(objMsg.msg == 'onSend')
               onSendReceived();
          }
          if(objMsg.type=='conn')
        	connectingReceived();  
          if(objMsg.type=='error')
        	onErrorReceived();
          if(objMsg.type=='msg')
        	onMsgReceived();
        }
        else
        {
          setStsMsg("ESTATUS: "+xmlhttp.status+" - AVISO: "+sts[xmlhttp.status], colorMsgStsError);
          wait();
        }
      }
      else
      {
    	if(xmlhttp.readyState == 0)  
    	{	
    	  setStsMsg("ESTADO: "+stsRdy[xmlhttp.readyState], colorMsgStsError);
    	  wait();
    	}  
      }
    } 
    catch (e) 
    {
      setStsMsg("AVISO: " + e, colorMsgStsError);
      disconnect(); 
    }
  };  
   
  this.sendMsg = function()
  {
	send();  
  };
  
  var replaceControlChar = function(str)
  {
	var cdn = '';  
	for(var i=0; i< str.length; i++)
	{
		switch(str[i])
		{
		  case '\\' : {cdn+='$|*';  break;};
		  case '+'  : {cdn+='|$?';  break;};
		  case '-'  : {cdn+='|_*';  break;};
		  case '&'  : {cdn+='#|*';  break;};
		  case '%'  : {cdn+='*|#';  break;};
		  case '"'  : {cdn+='\'\'';  break;};
		  case '€'  : {cdn+='?#*';  break;};
		  default   : {cdn+=str[i]; break;};
		}
	}
	return cdn;
  };
  
  var send = function()
  { 
	try 
	{	
	  var tm = 0;	
	  if(msgQueue.length > 0)	
	  { 
		setFocus();  
		addressee_ = msgQueue[0].addressee;	 
		msg_ = msgQueue[0].msg;
		typeTrama = msgQueue[0].typeTrama;
		msgQueue.splice(0,1);//se remueve el mensaje
		if(!isDisconnect)
		  setTimeInterval(1000); 
	  }  	 
	  else
	  {
		tm=1;  
		typeTrama = 3;		 
		if(isDisconnect)
		  wait();
		else
		  setTimeInterval(5000);
	  }
	  buildTrama();
	  if (window.XMLHttpRequest) 
	  {
	    xmlhttp = new XMLHttpRequest();
	    xmlhttp.onreadystatechange = xmlhttpChange;
	    xmlhttp.open('POST', url, true);
	    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	  }
	  else 
	  {
	    if (window.ActiveXObject) 
	    {
	      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	      if (xmlHttpReq.xmlhttp) 
	      {
	        xmlhttp.onreadystatechange = xmlhttpChange;
	        xmlhttp.open('POST', url, true);
	        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	      };
        };
	  };
	  xmlhttp.send(trama);
	  if(tm==0)
	  {
		if(addressee_!=undefined)  
	      setStsMsg("MENSAJE ENVIADO A " +addressee_);
	  }
	} 
	catch (e) 
	{
	  alert("ERROR AL TRATAR DE CREAR EL OBJETO DE CONEXION : " + e);
	};  
  };
};

