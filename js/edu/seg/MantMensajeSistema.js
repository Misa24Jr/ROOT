var dialogsMatMsjSis = new Object();
var editsMatMsjSisCodigo = new Object();
var editsMatMsjSisDescripcion = new Object();
var gridsMatMsjSis = new Object();
var imgButtonsMatMsjSisAgregar = new Object();
var imgButtonsMatMsjSisModificar = new Object();
var imgButtonsMatMsjSisEliminar = new Object();
var imgButtonsMatMsjSisLimpiar = new Object();
var imgButtonsMatMsjSisSalir = new Object();
var mwMantMensajeSistema = new Object();// minWindow

var MantMensajeSistema = {
	windowName : 'MantMensajeSistema',
	isCreate : false,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMatMsjSis.isByClean())
 			this.limpiar();			
		dialogsMatMsjSis.show();
	},
	
	hide : function(){
		dialogsMatMsjSis.hide();
	},
	
	createMWs : function(){
        	mwMantMensajeSistema = desktop.addMinWindow('Msj. Sist.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMatMsjSis.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMatMsjSis_Init : function(){
        dialogsMatMsjSis.setMinimizeXY(0,0);
        dialogsMatMsjSis.setCenterScreen();
        dialogsMatMsjSis.addSpace(0,0,20);
        dialogsMatMsjSis.addLn(1,1,1);
		dialogsMatMsjSis.setHeightCell(1,1,10);  
        dialogsMatMsjSis.addObjToDialog(editsMatMsjSisCodigo,2,1,24);
        editsMatMsjSisCodigo.setSizeEdit(250);
        editsMatMsjSisCodigo.setMaxLength(100);  
        dialogsMatMsjSis.addObjToDialog(editsMatMsjSisDescripcion,3,1,24);
        editsMatMsjSisDescripcion.setSizeEdit(705);
        editsMatMsjSisDescripcion.setMaxLength(500);       
        dialogsMatMsjSis.addLn(4,1,1);
		dialogsMatMsjSis.setHeightCell(4,1,10);  
        dialogsMatMsjSis.addObjToDialog(gridsMatMsjSis.getObject(),5,1);
        dialogsMatMsjSis.addLn(6,1,1);
		dialogsMatMsjSis.setHeightCell(6,1,12);  
        dialogsMatMsjSis.addObjToDialog(imgButtonsMatMsjSisAgregar,7,1);
        dialogsMatMsjSis.addObjToDialog(imgButtonsMatMsjSisModificar,7,1);
        dialogsMatMsjSis.addObjToDialog(imgButtonsMatMsjSisEliminar,7,1);
        dialogsMatMsjSis.addObjToDialog(imgButtonsMatMsjSisLimpiar,7,1);
        dialogsMatMsjSis.addObjToDialog(imgButtonsMatMsjSisSalir,7,1); 
        imgButtonsMatMsjSisAgregar.setDimension(90,22);
        imgButtonsMatMsjSisModificar.setDimension(90,22);
        imgButtonsMatMsjSisEliminar.setDimension(90,22);
        imgButtonsMatMsjSisLimpiar.setDimension(90,22);
        imgButtonsMatMsjSisSalir.setDimension(90,22);
        dialogsMatMsjSis.adjAllMarginObj(7,1,18);
        dialogsMatMsjSis.leftMarginObj(7,1,0,129);
	},
  
	gridsMatMsjSis_Init : function(){
        gridsMatMsjSis.setFixColRow(false,true);
        gridsMatMsjSis.addTitleVectorX(['Código','Descripción']);
        gridsMatMsjSis.showData();        
        gridsMatMsjSis.setSizeCol(1,250);
        gridsMatMsjSis.setSizeCol(2,535);
	},

	create : function(){
		dialogsMatMsjSis = dialogs.create('dialogsMatMsjSis',0,0,830,358,'MENSAJES DEL SISTEMA');
		editsMatMsjSisCodigo = edits.create('editsMatMsjSisCodigo','MatPais_Codigo','Código:',3,80,'normal');
		editsMatMsjSisCodigo.setValidEmpty();
		editsMatMsjSisDescripcion = edits.create('editsMatMsjSisDescripcion','MatPais_Descripcion','Descripción:',3,80,'normal');
		editsMatMsjSisDescripcion.setValidEmpty();
		gridsMatMsjSis = grids.create('gridsMatMsjSis',10,2);
		imgButtonsMatMsjSisAgregar = imgButtons.create('imgButtonsMatMsjSisAgregar','Agregar','ok.png');
		imgButtonsMatMsjSisModificar = imgButtons.create('imgButtonsMatMsjSisModificar','Modificar','icono_modificar.png');
		imgButtonsMatMsjSisModificar.setDisable();
		imgButtonsMatMsjSisEliminar = imgButtons.create('imgButtonsMatMsjSisEliminar','Eliminar','eliminar.png');
      	imgButtonsMatMsjSisEliminar.setDisable();
      	imgButtonsMatMsjSisLimpiar = imgButtons.create('imgButtonsMatMsjSisLimpiar','Limpiar','limpiar.png');
      	imgButtonsMatMsjSisSalir = imgButtons.create('imgButtonsMatMsjSisSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMatMsjSis_Init();
		this.gridsMatMsjSis_Init();
		this.createMWs();		
	},

  	limpiar : function(){
		editsMatMsjSisCodigo.readOnly(false);	
  		editsMatMsjSisCodigo.setValue("");
  		editsMatMsjSisDescripcion.setValue("");
  		gridsMatMsjSis.clean();
  		dialogsMatMsjSis.setMsg("");
		imgButtonsMatMsjSisAgregar.setEnable();
		imgButtonsMatMsjSisModificar.setDisable();
		imgButtonsMatMsjSisEliminar.setDisable();	
		Tool.getGridData('SecurityObject', 'get'+this.windowName, dialogsMatMsjSis, gridsMatMsjSis, false); 		    		
  	},
  	
  	setData : function(){
		if (gridsMatMsjSis.getDataCell(1) != ""){
			editsMatMsjSisCodigo.readOnly(true);	
			editsMatMsjSisCodigo.setValue(gridsMatMsjSis.getDataCell(1));
	        editsMatMsjSisDescripcion.setValue(gridsMatMsjSis.getDataCell(2));
	        imgButtonsMatMsjSisAgregar.setDisable();
			imgButtonsMatMsjSisModificar.setEnable();
			imgButtonsMatMsjSisEliminar.setEnable();
        }     			
	},
  	
  	setEvents : function(){
  		gridsMatMsjSis.onClickCells(this.windowName+".setData()");
	    imgButtonsMatMsjSisAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMatMsjSisModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMatMsjSisEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
	  	imgButtonsMatMsjSisLimpiar.onClick('MantMensajeSistema.limpiar()');
	  	imgButtonsMatMsjSisSalir.onClick('dialogsMatMsjSis.close()');	  	 	
    },
    
	coreUpdate : function(methodName){
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMatMsjSisCodigo.valid(dialogsMatMsjSis))
			if (editsMatMsjSisDescripcion.valid(dialogsMatMsjSis)){			
				if (methodName != 'eliminar')
					rlx.add('reg',editsMatMsjSisDescripcion);
				rlx.add('reg', editsMatMsjSisCodigo);
				Tool.cnnSrv('SecurityObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
			}
	}
};