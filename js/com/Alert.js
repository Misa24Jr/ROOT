var Alert =
{
  TYPE_WARNING : 0,
  TYPE_ERROR : 1,
  TYPE_INFO	: 2,
  warningImg : 'warning.png',
  errorImg : 'error.png',
  infoImg : 'information.png',
  dlg : new Object(),	
  aceptar : new Object(),
  icon : new Object(),
  sts : false,
  wDlg : 280,
  hDlg : 110,
  extFuct : '',
  imag : 'bg345.jpg',
  title :'ALERTA',
  typeImag :'',
  isCreate : false,
  msg : '',
  divMsg : new Object(),
  isCreate : false,
  nameComponent : 'Alert',
  alertFnc : new Function(),  
  
  setExtFunct : function(funct)
  {
	this.alertFnc = new Function(funct);
  },

  create : function()
  {
    	this.dlg = dialogs.create("AlertDlg",1,1,this.wDlg,this.hDlg,this.title);
    	this.dlg.style.zIndex = '100000';
      	this.dlg.setStaticOrder(true); 
    	this.aceptar = imgButtons.create("AlertDlgBtnAceptar",'Aceptar','aceptar.png');
    	this.isCreate = true;
    	this.divMsg = document.createElement('div');
    	this.icon = document.createElement('div');
    	this.icon.img = document.createElement('img');	
    	this.isCreate=true;
  },
  
  setObjAttrib: function(objAttrib, env)
  {
  	this.dlg.setObjAttrib(attrib,env);
  	this.aceptar.setObjAttrib(attrib,env);
  	this.dlg.setBgBarImg(this.imag);
  	this.dlg.buttonClose.style.backgroundImage = 'url(images/bg/'+this.imag + ')';
    this.dlg.buttonMin.style.backgroundImage = 'url(images/bg/'+this.imag + ')';   
    this.dlg.setEnableMinimize(false);
    this.dlg.setEnableResize(false); 
  },
  init : function()
  {  	  	
	this.divMsg.style.fontFamily = 'verdana';
  	this.divMsg.style.fontSize = '11px';
  	this.divMsg.style.fontWidth = '10px';	
  	this.divMsg.style.height = '25px';
  	this.divMsg.style.lineHeight = '25px';
  	this.divMsg.vAlign = 'middle';
  	this.setObjAttrib(attrib, ambiente);
  	this.dlg.setMinimizeXY(0,0);
	this.dlg.setCenterScreen();
	this.dlg.addObject(this.icon,20,40);
	this.dlg.addObject(this.divMsg,100,(this.hDlg/2-10));

	this.dlg.setIconDlg('images/logo/', 'EDUCA_logo.gif');
	
	this.aceptar.onClick("Alert.hide();");
	this.aceptar.setDimension(80,22);
    this.dlg.addObject(this.aceptar,parseInt(this.wDlg/2,10)-40,this.hDlg-80);
  },
  setMsg : function(msg)
  {
  	this.title = 'SISTEMA';
  	this.create();
  	this.init();
    this.show(msg, 'Mensaje de Alerta', Alert.TYPE_WARNING, '');	
  },
  
  show : function(msg, title, typeImg, extF)
  {
	this.alertFnc = new Function();  
    var hLine = 22;
    var v = msg.split('<br>'); 
    var len = msg.length;
    var tem='';
    for(var j=0; j<v.length; j++)
    {        
      for(var i=0; i<v.length-1; i++)
      {  
        if(v[i+1].length > v[i].length)
        {
          tem = v[i];
          v[i] = v[i+1];
          v[i+1]=tem;
        }
      }
    }
    len=v[0].length;
    var h = this.hDlg+(hLine*v.length);
  	var arg = Alert.show.arguments.length;
  	this.extFuct = extF;
  	this.wDlg = parseInt(len*8,10);
  	if(arg==2 || arg==3 || arg==4)
  	  this.title = title;
  	if(arg==3 || arg==4) 
  	  this.wDlg=this.wDlg+60;
  	if(this.wDlg < 230)
  	  this.wDlg = 230;
  	this.create();  
  	this.init();  
  	if(arg==4)
  	  this.setExtFunct(extF);	  
  	if(arg==3 || arg==4)
  	{	
  	  this.icon.img.style.width = '60px'; 
  	  this.icon.img.style.height = '60px';
  	  
  	  var imagen = '';
  	  this.typeImag = typeImg;
  	  switch(typeImg)
  	  {
  	  	case this.TYPE_WARNING : {
  	  							   imagen =this.warningImg;		
  	  						       break;
  	  						     }
  	  	case this.TYPE_ERROR : {
  	  							 imagen =this.errorImg;		
  	  						     break;
  	  						   }
        case this.TYPE_INFO : {
  	  							 imagen =this.infoImg;		
  	  						     break;
  	  						   }  	 
  	  }
  	  this.icon.img.src='images/'+imagen;
  	  this.icon.appendChild(this.icon.img);
 	}
  	this.divMsg.align = 'left';
  	this.dlg.setBodyHeight(h);
  	this.divMsg.style.height=h+'px';
  	this.msg= msg;
  	this.aceptar.style.top= (h-12)+'px';
  	this.divMsg.innerHTML = this.msg;
  	this.dlg.setPosition(this.dlg.getPositionPoint().x1, this.dlg.getPositionPoint().y1 - (hLine*v.length-1)/2);
  	this.dlg.showModal();
  	this.aceptar.setFocus();
  	
  },
  
  hide : function()
  {
  	this.dlg.hide();
	this.alertFnc();
  }
}
