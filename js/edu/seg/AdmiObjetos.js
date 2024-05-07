var dialogsAdmiObjetos = new Object();
var editsAdmiPaquete = new Object();
var editsAdmi = new Object();
var editsAdmiObjPaquete = new Object();
var editsAdmiObjNomJar = new Object();
var editsAdmiObjRuta = new Object();
var editsAdmiObjInterface = new Object();
var editsAdmiObjClaImpl = new Object();
var editsAdmiObjId = new Object();
var gridsAdmiObjetos  = new Object();
var imgButtonsAdmiObjBajObjetos  = new Object();
var imgButtonsAdmiObjSubObjetos  = new Object();
var imgButtonsAdmiObjActObjetos  = new Object();
var imgButtonsAdmiObjReiSerWeb  = new Object();
var imgButtonsAdmiObjSalir  = new Object();

var AdmiObjetos = {

  dialogsAdmiObjetos_Init : function(){
      dialogsAdmiObjetos.setMinimizeXY(0,0);
      dialogsAdmiObjetos.setCenterScreen();
      dialogsAdmiObjetos.addSpace(0,0,20);
      dialogsAdmiObjetos.addLn(1,1,1);
      dialogsAdmiObjetos.addObjToDialog(editsAdmiObjPaquete,2,1);
	  editsAdmiObjPaquete.setSizeEdit(20);
      dialogsAdmiObjetos.addObjToDialog(editsAdmiObjNomJar,2,1);
	  editsAdmiObjNomJar.setSizeEdit(20);
      dialogsAdmiObjetos.addObjToDialog(editsAdmiObjRuta,2,1);
	  editsAdmiObjRuta.setSizeEdit(20);
	  dialogsAdmiObjetos.adjAllMarginObj(2,1,30);
      dialogsAdmiObjetos.addObjToDialog(editsAdmiObjInterface,3,1);
	  editsAdmiObjInterface.setSizeEdit(20);
      dialogsAdmiObjetos.addObjToDialog(editsAdmiObjClaImpl,3,1);
	  editsAdmiObjClaImpl.setSizeEdit(20);
      dialogsAdmiObjetos.addObjToDialog(editsAdmiObjId,3,1);
	  editsAdmiObjId.setSizeEdit(20);
	  dialogsAdmiObjetos.adjAllMarginObj(3,1,30);
	  dialogsAdmiObjetos.addLn(4,1,1);
	  dialogsAdmiObjetos.addObjToDialog(gridsAdmiObjetos.getObject(),5,1);
	  dialogsAdmiObjetos.addLn(6,1,1);
	  dialogsAdmiObjetos.addObjToDialog(imgButtonsAdmiObjBajObjetos,7,1);
	  dialogsAdmiObjetos.addObjToDialog(imgButtonsAdmiObjSubObjetos,7,1);
	  dialogsAdmiObjetos.addObjToDialog(imgButtonsAdmiObjActObjetos,7,1);
	  dialogsAdmiObjetos.addObjToDialog(imgButtonsAdmiObjReiSerWeb,7,1);
	  dialogsAdmiObjetos.addObjToDialog(imgButtonsAdmiObjSalir,7,1);
	  imgButtonsAdmiObjBajObjetos.setDimension(125,22);
	  imgButtonsAdmiObjSubObjetos.setDimension(125,22);
	  imgButtonsAdmiObjActObjetos.setDimension(125,22);
	  imgButtonsAdmiObjReiSerWeb.setDimension(125,22);
	  imgButtonsAdmiObjSalir.setDimension(125,22);
	  dialogsAdmiObjetos.adjAllMarginObj(7,1,20);
	  dialogsAdmiObjetos.leftMarginObj(7,1,0,52); 
  },

  create : function(){
      dialogsAdmiObjetos = dialogs.create('dialogsAdmiObjetos',0,0,854,436,'ADMINISTRACION DE OBJETOS');
      editsAdmiObjPaquete = edits.create('editsAdmiObjPaquete','editsAdmiObjPaquete','Paquete:',57,'normal');
      editsAdmiObjNomJar = edits.create('editsAdmiObjNomJar','editsAdmiObjNomJar','Nombre Jar:',73,'normal');
      editsAdmiObjRuta = edits.create('editsAdmiObjRuta','editsAdmiObjRuta','Ruta:',32,'normal');
      editsAdmiObjInterface = edits.create('editsAdmiObjInterface','editsAdmiObjInterface','Interface:',57,'normal');
      editsAdmiObjClaImpl = edits.create('editsAdmiObjClaImpl','editsAdmiObjClaImpl','Sirviente:',73,'normal');
      editsAdmiObjId = edits.create('editsAdmiObjId','editsAdmiObjId','Id:',32,'normal');
	  gridsAdmiObjetos = grids.create('gridsAdmiObjetos',10, 7);
	  imgButtonsAdmiObjBajObjetos = imgButtons.create('cimgButtonsAdmiObjBajObjetos','Bajar Objetos','Gnome-Go-Bottom-32.png');
	  imgButtonsAdmiObjSubObjetos = imgButtons.create('imgButtonsAdmiObjSubObjetos','Subir Objetos','Gnome-Go-Top-32.png');
	  imgButtonsAdmiObjActObjetos = imgButtons.create('imgButtonsAdmiObjActObjetos','Actualizar Objeto','act.jpg');
	  imgButtonsAdmiObjReiSerWeb = imgButtons.create('imgButtonsAdmiObjReiSerWeb','Reiniciar S. Web','reiniciars2.png');
	  imgButtonsAdmiObjSalir = imgButtons.create('imgButtonsAdmiObjSalir','Salir','salir.png');		
  },
  
  gridsAdmiObjetos: function(){
		gridsAdmiObjetos.setFixColRow(false, true);
		gridsAdmiObjetos.addTitleVectorX(['Paquete','Nombre Jar','Ruta','Interface','Sirviente','Id','Desempeno']);
		gridsAdmiObjetos.showData();
		gridsAdmiObjetos.setSizeCol(1,100);
		gridsAdmiObjetos.setSizeCol(2,100);
		gridsAdmiObjetos.setSizeCol(3,220);
		gridsAdmiObjetos.setSizeCol(4,120);
		gridsAdmiObjetos.setSizeCol(5,120);
		gridsAdmiObjetos.setSizeCol(6,50);
		gridsAdmiObjetos.setSizeCol(7,90);
	},

  init : function(){
      this.create();
      this.setEvents();
      this.dialogsAdmiObjetos_Init();
	  this.gridsAdmiObjetos();		
  },

  setEvents : function(){
    imgButtonsAdmiObjBajObjetos.onClick('AdmiObjetos.bajObjetos()');
  	imgButtonsAdmiObjSubObjetos.onClick('AdmiObjetos.subObjetos()');
  	imgButtonsAdmiObjActObjetos.onClick('AdmiObjetos.actObjetos()');
  	imgButtonsAdmiObjReiSerWeb.onClick('AdmiObjetos.reiSerWeb()');
  	imgButtonsAdmiObjSalir.onClick('dialogsAdmiObjetos.close()');	  	 	
  }

};
