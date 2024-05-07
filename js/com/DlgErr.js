var DlgErr =
{
  dlg : new Object(),	
  aceptar : new Object(),
  wDlg : 395,
  hDlg : 420,
  dlgLabels : new Array,
  dlgObjects : new Array,
  imag : 'bg247.jpg',
  msgTyp : ['Error - SQL','Error - Proceso','Proceso','Proceso SQL'],
  setObjResponse : function(objR)
  { 
   	var idx = parseInt(objR.msgType,10);
   	this.dlgObjects[0].value = DlgErr.msgTyp[objR.msgType];
   	this.dlgObjects[1].value = objR.objectName;
   	this.dlgObjects[2].value = objR.methodName;
   	this.dlgObjects[3].value = objR.params;
   	this.dlgObjects[4].value = objR.detailErr;
   	this.dlgObjects[5].value = objR.detailProccess;
   	this.dlgObjects[6].value = objR.shortInfo;
   	this.dlgObjects[7].value = objR.longInfo;   	
  },  
  clean : function()
  {
  	this.dlgObjects[0].value = '';
   	this.dlgObjects[1].value = '';
   	this.dlgObjects[2].value = '';
   	this.dlgObjects[3].value = '';
   	this.dlgObjects[4].value = '';
   	this.dlgObjects[5].value = '';
   	this.dlgObjects[6].value = '';
   	this.dlgObjects[7].value = '';
  },
  create : function()
  {
	this.nameComponent = 'DlgErr';
	this.dlg = dialogs.create("dlgErr",1,1,this.wDlg,this.hDlg,"INFORMACION");
	this.aceptar = imgButtons.create("DlgErrBtnAceptar",'Cerrar','cancel.png'); 
  },
  setObjAttrib: function(objAttrib, env)
  {
  	this.dlg.setStaticOrder(false); 
  	this.dlg.setObjAttrib(attrib,env);
  	this.aceptar.setObjAttrib(attrib,env);	
  	this.dlg.setBgBarImg(this.imag);
  	this.dlg.buttonClose.style.backgroundImage = 'url(images/bg/' + this.imag + ')';
    this.dlg.buttonMin.style.backgroundImage = 'url(images/bg/' + this.imag + ')';   
    this.dlg.setEnableMinimize(false);
    this.dlg.setEnableResize(false); 
  },
  init : function()
  {
  	var i=0;
  	for(i=0; i<8; i++)
  	{
  	  this.dlgLabels[i] = document.createElement('div');
  	  this.dlgLabels[i].style.fontFamily = 'verdana';
  	  this.dlgLabels[i].style.fontSize = '10px';
  	}
  	var anchoObj = 234;
  	for(i=0; i<8; i++)
  	{
  	  if(i < 3)	
  	  {
  	  	this.dlgObjects[i] = document.createElement('input');
  	  	this.dlgObjects[i].style.width = anchoObj+'px';
  	  }
  	  else
  	  {
  	  	this.dlgObjects[i] = document.createElement('textarea');
  	  	this.dlgObjects[i].style.width = anchoObj+'px';
  	  	this.dlgObjects[i].style.height = '30px';
  	  }
  	    
  	  this.dlgObjects[i].style.borderWidth = '0px';
  	  this.dlgObjects[i].style.fontFamily = 'verdana';
  	  this.dlgObjects[i].style.fontSize = '11px';
  	}
  	
  	this.dlg.setMinimizeXY(0,560);
	this.dlg.setCenterScreen();
	this.dlg.addLn(0,0,1);
	this.dlg.addSpace(0,0,20);
	this.aceptar.onClick("DlgErr.hide()");
	var c = parseInt((this.wDlg/2)-55,10);
    
    this.dlgLabels[0].innerHTML ='Tipo de Mensaje: ';
    this.dlgLabels[1].innerHTML ='Nombre del Objeto: ';
    this.dlgLabels[2].innerHTML ='Nombre del Metodo: ';
    this.dlgLabels[3].innerHTML ='Parametros: ';
    this.dlgLabels[4].innerHTML ='Detalle del Error: ';
    this.dlgLabels[5].innerHTML ='Detalle del Proceso: ';
    this.dlgLabels[6].innerHTML ='Informacion Corta: ';
    this.dlgLabels[7].innerHTML ='Informacion Larga: ';
    for(i=1; i<9; i++)
  	{
      this.dlg.addObjToDialog(this.dlgLabels[i-1],i,1);
      this.dlg.addObjToDialog(this.dlgObjects[i-1],i,1);
    }
    this.dlg.addLn(9,0,1);
    this.dlg.addObjToDialog(this.aceptar,10,1);
    
    this.dlg.leftMarginObj(1, 1, 1, 24);
    this.dlg.leftMarginObj(2, 1, 1, 11);
    this.dlg.leftMarginObj(3, 1, 1, 7);
    this.dlg.leftMarginObj(4, 1, 1, 52);
    this.dlg.leftMarginObj(5, 1, 1, 27);
    this.dlg.leftMarginObj(6, 1, 1, 9);
    this.dlg.leftMarginObj(7, 1, 1, 15);
    this.dlg.leftMarginObj(8, 1, 1, 14);    
    this.dlg.leftMarginObj(10, 1, 0, c);
    
    for(i=1; i<9; i++)
  	{
  	  if(i < 4)	
  	  {
  	  	this.dlg.setHeightCell(i,1,10);
  	  }
  	  else
  	  {
  	  	this.dlg.setHeightCell(i,0,50);
  	  	this.dlg.setHeightCell(i,1,46);
  	  }
  	}
  	this.dlg.setHeightCell(9,0,25);
  },
  show : function()
  {
  	this.dlg.showModal();
  },
  hide : function()
  {
  	this.dlg.hide();
  }
}
