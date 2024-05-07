var confirmDlg =
{
  dlg : new Object(),	
  aceptar : new Object(),
  cancelar : new Object(),
  icon : new Object(),
  sts : false,
  wDlg : 400,
  hDlg : 120,
  imag : 'bg345.jpg',
  isCreate : false,
  extFunct : new Function(''),
  msg : '',
  env : 1,
  divMsg : new Object(),
  nameComponent : 'confirmDlg',
  
  create : function()
  {
	this.dlg = dialogs.create("confirmDlg",1,1,this.wDlg,this.hDlg,"CONFIRMAR");
	this.dlg.style.zIndex = '100000';
  	this.dlg.setStaticOrder(true); 
	this.aceptar = imgButtons.create("confirmDlgBtnAceptar",'Si','aceptar.png');
	this.cancelar = imgButtons.create("confirmDlgBtnCancelar",'No','cancel.png'); 
	this.isCreate = true;
	this.divMsg = document.createElement('div');
	this.icon = document.createElement('div');
	this.icon.img = document.createElement('img');
  },
  
  confirm : function(msg, externalFunct, env)
  {
  	if (!this.isCreate)
  	{
  	  this.create();  
  	  this.init();  	  
  	}
  	this.msg=msg;
  	this.divMsg.innerHTML = this.msg;
  	this.env=env;
  	this.extFunct =  new Function(externalFunct);
  	this.showDlg();
  	this.aceptar.setFocus();
  },
  
  setObjAttrib: function(objAttrib, env)
  {
  	this.dlg.setObjAttrib(objAttrib,env);
  	this.aceptar.setObjAttrib(objAttrib,env);
  	this.cancelar.setObjAttrib(objAttrib,env);	
  	this.dlg.setBgBarImg(this.imag);
  	this.dlg.buttonClose.style.backgroundImage = 'url(images/bg/'+this.imag + ')';
    this.dlg.buttonMin.style.backgroundImage = 'url(images/bg/'+this.imag + ')';   
    this.dlg.setEnableMinimize(false);
    this.dlg.setEnableResize(false); 
  },
  
  init : function()
  {  	
  	this.icon.img.style.width = '60px'; 
  	this.icon.img.style.height = '60px';
  	this.icon.img.src='images/warning.png';
  	this.icon.appendChild(this.icon.img);
	this.divMsg.style.fontFamily = 'verdana';
  	this.divMsg.style.fontSize = '11px';	
  	this.divMsg.style.height = '25px';
  	this.setObjAttrib(attrib, this.env);
  	this.dlg.setMinimizeXY(0,560);
	this.dlg.setCenterScreen();
	this.dlg.addLn(0,0,1);
	this.dlg.setHeightCell(0,0,10);
	this.dlg.addObjToDialog(this.icon,1,1);
	this.dlg.addObject(this.divMsg,90,50);
	this.aceptar.onClick("confirmDlg.sts=true; confirmDlg.hide(); confirmDlg.extFunct()");
	this.cancelar.onClick("confirmDlg.sts=false; confirmDlg.hide()");
	this.aceptar.setDimension(70,22);
	this.cancelar.setDimension(70,22);
	var c = parseInt((this.wDlg/2)-75,10);    
    this.dlg.addObjToDialog(this.aceptar,3,1);
    this.dlg.addObjToDialog(this.cancelar,3,1);
    this.dlg.leftMarginObj(1, 1, 0, 20);
    this.dlg.leftMarginObj(3, 1, 0, c);
    this.dlg.leftMarginObj(3, 1, 1, 10);
  },
  showDlg : function()
  {
  	this.dlg.showModal();
  },
  
  hide : function()
  {
  	this.dlg.hide();
  }
}
