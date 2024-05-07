var dialogsMantOrganizacion = new Object();
var editsMantOrgSiglas = new Object();
var editsMantOrgDescripcion = new Object();
var editsMantOrgRif = new Object();
var editsMantTipOrganizacion = new Object();
var editsMantOrgTelefono = new Object();
var editsMantOrgDireccion = new Object();
var editsMantOrgPais = new Object();
var editsMantOrgRegion = new Object();
var editsMantOrgCiudad = new Object();
var editsMantOrgEmail = new Object();
var editsMantOrgOtrCodigo = new Object();
var editsMantOrgCodOrg = new Object();
var editsMantOrgJefe = new Object();
var editsMantOrgJefCedula = new Object();
var editsMantOrgAdministrador = new Object();
var editsMantOrgAdmCedula = new Object();
var editsMantOrgZonaEdu = new Object();
var editsMantOrgDttoEsc = new Object();
var editsMantOrgMcpio = new Object();
var editsMantOrgParroquia = new Object();
var gridsMantOrganizacion = new Object();
var imgButtonsMantOrganizacionAgregar = new Object();
var imgButtonsMantOrganizacionModificar = new Object();
var imgButtonsMantOrganizacionEliminar = new Object();
var imgButtonsMantOrganizacionLimpiar = new Object();
var imgButtonsMantOrganizacionSalir= new Object();
var mw_MantOrganizacion = new Object();// minWindow

var MantOrganizacion = {
	windowName : 'MantOrganizacion',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
	    if (dialogsMantOrganizacion.getSTS()!= dialogs.STS_SHOW) 
			this.limpiar();
		dialogsMantOrganizacion.show();
	},
	
	hide : function() {
	  dialogsMantOrganizacion.hide();
	},
	
	createMWs : function() {
		mw_MantOrganizacion = desktop.addMinWindow('Organizacion','MantOrganizacion.show()','MantOrganizacion.hide()','MantOrganizacion.hide()');	
		dialogsMantOrganizacion.setMinWindowEvent('mw_MantOrganizacion.hide()','mw_MantOrganizacion.disable()','mw_MantOrganizacion.show()');
	},
		  
  	dialogsMantOrganizacion_Init : function() {
  		dialogsMantOrganizacion.setCenterScreen();
  		dialogsMantOrganizacion.addSpace(0,0,20);
  		dialogsMantOrganizacion.addLn(1,1,1);
  		dialogsMantOrganizacion.setHeightCell(1,1,10);
  		dialogsMantOrganizacion.addObjToDialog(editsMantOrgSiglas,2,1,24);
  		dialogsMantOrganizacion.addObjToDialog(editsMantOrgDescripcion,2,1,24);
  		dialogsMantOrganizacion.adjAllMarginObj(2,1,36);
  		dialogsMantOrganizacion.addObjToDialog(editsMantOrgRif,3,1,24);
  		dialogsMantOrganizacion.addObjToDialog(editsMantTipOrganizacion,3,1,24);
  		dialogsMantOrganizacion.adjAllMarginObj(3,1,36);
  		dialogsMantOrganizacion.addObjToDialog(editsMantOrgTelefono,4,1,24);
  		dialogsMantOrganizacion.addObjToDialog(editsMantOrgDireccion,4,1,24);
  		dialogsMantOrganizacion.adjAllMarginObj(4,1,36);
  		dialogsMantOrganizacion.addObjToDialog(editsMantOrgCodOrg,5,1,24);
  		dialogsMantOrganizacion.addObjToDialog(editsMantOrgDttoEsc,5,1,24);
  		dialogsMantOrganizacion.addObjToDialog(editsMantOrgZonaEdu,5,1,24);
  		dialogsMantOrganizacion.adjAllMarginObj(5,1,36);
  		dialogsMantOrganizacion.addObjToDialog(editsMantOrgPais,6,1,24);
  		dialogsMantOrganizacion.addObjToDialog(editsMantOrgEmail,6,1,24);
		dialogsMantOrganizacion.addObjToDialog(editsMantOrgOtrCodigo,6,1,24);
		dialogsMantOrganizacion.adjAllMarginObj(6,1,36);
		dialogsMantOrganizacion.addObjToDialog(editsMantOrgRegion,7,1,24);
  		dialogsMantOrganizacion.addObject(editsMantOrgMcpio, 20,182); 
  		dialogsMantOrganizacion.addObject(editsMantOrgCiudad,20,207); 
  		dialogsMantOrganizacion.addObject(editsMantOrgParroquia,20,232); 
  		dialogsMantOrganizacion.addObjToDialog(editsMantOrgJefe,7,1,24);
  		dialogsMantOrganizacion.addObject(editsMantOrgJefCedula,675,158);
  		dialogsMantOrganizacion.adjAllMarginObj(7,1,36);
  		dialogsMantOrganizacion.addObject(editsMantOrgAdministrador,335,182);
  		dialogsMantOrganizacion.addObject(editsMantOrgAdmCedula, 675,182);
  		dialogsMantOrganizacion.addObject(gridsMantOrganizacion.getObject(),20,260);		
  		dialogsMantOrganizacion.addObject(imgButtonsMantOrganizacionAgregar,120,400);
  		dialogsMantOrganizacion.addObject(imgButtonsMantOrganizacionModificar,240,400);
  		dialogsMantOrganizacion.addObject(imgButtonsMantOrganizacionEliminar,360,400);
  		dialogsMantOrganizacion.addObject(imgButtonsMantOrganizacionLimpiar,480,400);
  		dialogsMantOrganizacion.addObject(imgButtonsMantOrganizacionSalir,600,400);
	}, 
	
	gridsMantOrganizacion_Init : function(){ 
		gridsMantOrganizacion.setFixColRow(false,true);
		gridsMantOrganizacion.addTitleVectorX( ['Siglas','Descripción','Rif','Tipo Organización','Telefono','Dirección','dePais','deRegion','Codigo Organización','Email','deCiudad','jefe','nuCed','admin','nuCedadm','id','zonaEduc','dttoEsc','otroCod','mcpio','parroq']);
		gridsMantOrganizacion.showData();
		gridsMantOrganizacion.setSizeCol(1, 70);
		gridsMantOrganizacion.setSizeCol(2, 325);
		gridsMantOrganizacion.setSizeCol(3, 0);
		gridsMantOrganizacion.setSizeCol(4, 202);
		gridsMantOrganizacion.setSizeCol(5, 0);
		gridsMantOrganizacion.setSizeCol(6, 0);
		gridsMantOrganizacion.setSizeCol(7, 0);
		gridsMantOrganizacion.setSizeCol(8, 0);
		gridsMantOrganizacion.setSizeCol(9, 0);
		gridsMantOrganizacion.setSizeCol(10, 170);
		gridsMantOrganizacion.setSizeCol(11, 0);
		gridsMantOrganizacion.setSizeCol(12, 0);
		gridsMantOrganizacion.setSizeCol(13, 0);
		gridsMantOrganizacion.setSizeCol(14, 0);
		gridsMantOrganizacion.setSizeCol(15, 0);
		gridsMantOrganizacion.setSizeCol(16, 0);
		gridsMantOrganizacion.setSizeCol(17, 0);
		gridsMantOrganizacion.setSizeCol(18, 0);
		gridsMantOrganizacion.setSizeCol(19, 0);
		gridsMantOrganizacion.setSizeCol(20, 0);
		gridsMantOrganizacion.setSizeCol(21, 0);
		gridsMantOrganizacion.hideCol(3);
		gridsMantOrganizacion.hideCol(5);
		gridsMantOrganizacion.hideCol(6);
		gridsMantOrganizacion.hideCol(7);
		gridsMantOrganizacion.hideCol(8);
		gridsMantOrganizacion.hideCol(9);
		gridsMantOrganizacion.hideCol(11);
		gridsMantOrganizacion.hideCol(12);
		gridsMantOrganizacion.hideCol(13);
		gridsMantOrganizacion.hideCol(14);
		gridsMantOrganizacion.hideCol(15);
		gridsMantOrganizacion.hideCol(16);
		gridsMantOrganizacion.hideCol(17);
		gridsMantOrganizacion.hideCol(18);
		gridsMantOrganizacion.hideCol(19);
		gridsMantOrganizacion.hideCol(20);
		gridsMantOrganizacion.hideCol(21);
	},
	
	create : function(){
		dialogsMantOrganizacion = dialogs.create("dialogsMantOrganizacion",0,0,812,410,"ORGANIZACIÓN");
		dialogsMantOrganizacion.setAdjY(20);	
		editsMantOrgSiglas = edits.create("editsMantOrgSiglas","editsMantOrgSiglas","Siglas:",1,124); 
		editsMantOrgSiglas.setValidEmpty();
  		editsMantOrgSiglas.setSizeEdit(154);
  		editsMantOrgSiglas.setMaxLength(6); 
		editsMantOrgDescripcion = edits.create("editsMantOrgDescripcion","editsMantOrgDescripcion","Descripción:",1,128); 	  
		editsMantOrgDescripcion.setValidEmpty();
		editsMantOrgDescripcion.setSizeEdit(328);
		editsMantTipOrganizacion = edits.create("editsMantTipOrganizacion","editsMantTipOrganizacion","Tipo de Organización:",1,128); 	  
		editsMantTipOrganizacion.setValidEmpty();
  		editsMantTipOrganizacion.setSizeEdit(328);
		editsMantOrgRif = edits.create("editsMantOrgRif","editsMantOrgRif","Rif:",1,124); 	  
		editsMantOrgRif.setValidEmpty();
		editsMantOrgRif.setSizeEdit(154);
		editsMantOrgTelefono = edits.create("editsMantOrgTelefono","editsMantOrgTelefono","Teléfono:",1,124); 	  
		editsMantOrgTelefono.setValidEmpty();
  		editsMantOrgTelefono.setSizeEdit(154);
		editsMantOrgDireccion = edits.create("editsMantOrgDireccion","editsMantOrgDireccion","Dirección:",1,128); 	  
		editsMantOrgDireccion.setValidEmpty();
  		editsMantOrgDireccion.setSizeEdit(328);
		editsMantOrgPais = edits.create("editsMantOrgPais","editsMantOrgPais","País:",1,124); 	  
		editsMantOrgPais.setValidEmpty();
  		editsMantOrgPais.setSizeEdit(154);
		editsMantOrgRegion = edits.create("editsMantOrgRegion","editsMantOrgRegion","Edo./Ent. Federal:",1,124); 	  
		editsMantOrgRegion.setValidEmpty();
  		editsMantOrgRegion.setSizeEdit(154);
		editsMantOrgCiudad = edits.create("editsMantOrgCiudad","editsMantOrgCiudad","Ciudad:",1,124); 	  
		editsMantOrgCiudad.setValidEmpty();
  		editsMantOrgCiudad.setSizeEdit(154);
		editsMantOrgEmail = edits.create("editsMantOrgEmail","editsMantOrgEmail","Email:",1,128); 	  
		editsMantOrgEmail.setValidEmpty();
  		editsMantOrgEmail.setSizeEdit(112);	
		editsMantOrgOtrCodigo = edits.create("editsMantOrgOtrCodigo","editsMantOrgOtrCodigo","Otro Cod.:",1,75); 	  
		editsMantOrgOtrCodigo.setValidEmpty();
  		editsMantOrgOtrCodigo.setSizeEdit(104);	
		editsMantOrgCodOrg = edits.create("editsMantOrgCodOrg","editsMantOrgCodOrg","Cod. Organización:",1,124); 	  
		editsMantOrgCodOrg.setValidEmpty();
  		editsMantOrgCodOrg.setSizeEdit(154); 
		editsMantOrgJefe = edits.create("editsMantOrgJefe","editsMantOrgJefe","Director(a):",1,128);
		editsMantOrgJefe.setValidEmpty();
  		editsMantOrgJefe.setSizeEdit(200);  	
		editsMantOrgJefCedula = edits.create("editsMantOrgJefCedula","editsMantOrgJefCedula","C.i. :",1,46);
		editsMantOrgJefCedula.setValidEmpty();
  		editsMantOrgJefCedula.setSizeEdit(70);  
  		editsMantOrgJefCedula.setMaxLength(10); 
		editsMantOrgAdministrador = edits.create("editsMantOrgAdministrador","editsMantOrgAdministrador","Administrador(a):",1,128);
		editsMantOrgAdministrador.setValidEmpty();
  		editsMantOrgAdministrador.setSizeEdit(200); 
		editsMantOrgAdmCedula = edits.create("editsMantOrgAdmCedula","editsMantOrgAdmCedula","C.i. :",1,46);
		editsMantOrgAdmCedula.setValidEmpty();
  		editsMantOrgAdmCedula.setSizeEdit(70);  
  		editsMantOrgAdmCedula.setMaxLength(10); 
		editsMantOrgZonaEdu = edits.create("editsMantOrgZonaEdu","editsMantOrgZonaEdu","Zona Educ.:",1,75);
		editsMantOrgZonaEdu.setValidEmpty();		
  		editsMantOrgZonaEdu.setSizeEdit(104);
  		editsMantOrgZonaEdu.setMaxLength(5);
		editsMantOrgDttoEsc = edits.create("editsMantOrgDttoEsc","editsMantOrgDttoEsc","Dtto. Escolar:",1,128);
		editsMantOrgDttoEsc.setValidInteger();		
  		editsMantOrgDttoEsc.setSizeEdit(112);	
  		editsMantOrgDttoEsc.setMaxLength(5); 
  		editsMantOrgParroquia = edits.create("editsMantOrgParroquia","editsMantOrgParroquia","Parroquia:",1,124);
  		editsMantOrgParroquia.setValidEmpty();		
  		editsMantOrgParroquia.setSizeEdit(154);	
  		editsMantOrgParroquia.setMaxLength(50); 
  		editsMantOrgMcpio = edits.create("editsMantOrgMcpio","editsMantOrgMcpio","Municipio:",1,124);
  		editsMantOrgMcpio.setValidEmpty();		
  		editsMantOrgMcpio.setSizeEdit(154);	
  		editsMantOrgMcpio.setMaxLength(50); 
  		gridsMantOrganizacion = grids.create("gridsMantOrganizacion", 4, 21);
		imgButtonsMantOrganizacionAgregar = imgButtons.create("imgButtonsMantOrganizacionAgregar",'Agregar','ok.png');
		imgButtonsMantOrganizacionModificar = imgButtons.create("imgButtonsMantOrganizacionModificar",'Modificar','icono_modificar.png');
		imgButtonsMantOrganizacionEliminar = imgButtons.create("imgButtonsMantOrganizacionEliminar",'Eliminar','eliminar.png');
		imgButtonsMantOrganizacionLimpiar = imgButtons.create("imgButtonsMantOrganizacionLimpiar",'Limpiar','limpiar.png');
		imgButtonsMantOrganizacionSalir = imgButtons.create("imgButtonsMantOrganizacionSalir",'Salir','salir.png');
  		imgButtonsMantOrganizacionAgregar.setDimension(90,21);
  		imgButtonsMantOrganizacionModificar.setDimension(90,21);
  		imgButtonsMantOrganizacionEliminar.setDimension(90,21); 
  		imgButtonsMantOrganizacionLimpiar.setDimension(90,21);
  		imgButtonsMantOrganizacionSalir.setDimension(90,21);
	},

	init : function(){
		this.create();
		this.events();		
		this.dialogsMantOrganizacion_Init();
		this.gridsMantOrganizacion_Init();  
		this.createMWs();
	},
	
	events : function(){
		editsMantOrgSiglas.onEnter("editsMantOrgDescripcion.setFocus()");	
		gridsMantOrganizacion.onClickCells(this.windowName+".setData()");
	  	imgButtonsMantOrganizacionAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantOrganizacionModificar.onClick(this.windowName+".coreUpdate('modificar')");
	  	imgButtonsMantOrganizacionEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
	  	imgButtonsMantOrganizacionLimpiar.onClick(this.windowName+".limpiar()");
	  	imgButtonsMantOrganizacionSalir.onClick("dialogsMantOrganizacion.close()");
	},
  	
	setData : function(){
		if (gridsMantOrganizacion.getDataCell(1) != "") {
			editsMantOrgSiglas.setValue(gridsMantOrganizacion.getDataCell(1));
			editsMantOrgDescripcion.setValue(gridsMantOrganizacion.getDataCell(2));
			editsMantOrgRif.setValue(gridsMantOrganizacion.getDataCell(3));
			editsMantTipOrganizacion.setValue(gridsMantOrganizacion.getDataCell(4));
			editsMantOrgTelefono.setValue(gridsMantOrganizacion.getDataCell(5));
			editsMantOrgDireccion.setValue(gridsMantOrganizacion.getDataCell(6));
			editsMantOrgPais.setValue(gridsMantOrganizacion.getDataCell(7));
			editsMantOrgRegion.setValue(gridsMantOrganizacion.getDataCell(8));
			editsMantOrgCiudad.setValue(gridsMantOrganizacion.getDataCell(11));
			editsMantOrgEmail.setValue(gridsMantOrganizacion.getDataCell(10));
			editsMantOrgCodOrg.setValue(gridsMantOrganizacion.getDataCell(9));
			editsMantOrgJefe.setValue(gridsMantOrganizacion.getDataCell(12));
			editsMantOrgJefCedula.setValue(gridsMantOrganizacion.getDataCell(13));
			editsMantOrgAdministrador.setValue(gridsMantOrganizacion.getDataCell(14));
			editsMantOrgAdmCedula.setValue(gridsMantOrganizacion.getDataCell(15));
			editsMantOrgZonaEdu.setValue(gridsMantOrganizacion.getDataCell(17));
			editsMantOrgDttoEsc.setValue(gridsMantOrganizacion.getDataCell(18));
			editsMantOrgSiglas.hideId = gridsMantOrganizacion.getDataCell(16);
			editsMantOrgOtrCodigo.setValue(gridsMantOrganizacion.getDataCell(19));
			editsMantOrgMcpio.setValue(gridsMantOrganizacion.getDataCell(20));
			editsMantOrgParroquia.setValue(gridsMantOrganizacion.getDataCell(21));
			imgButtonsMantOrganizacionAgregar.setDisable();
			imgButtonsMantOrganizacionModificar.setEnable();
			imgButtonsMantOrganizacionEliminar.setEnable();
		} 
	},
	
	limpiar : function(){
		editsMantOrgSiglas.hideId = -1;
	    editsMantOrgSiglas.setValue("");
	    editsMantOrgDescripcion.setValue("");
		editsMantOrgRif.setValue("");
		editsMantTipOrganizacion.setValue("");
		editsMantOrgTelefono.setValue("");
		editsMantOrgDireccion.setValue("");
		editsMantOrgPais.setValue("");
		editsMantOrgRegion.setValue("");
		editsMantOrgCiudad.setValue("");
		editsMantOrgEmail.setValue("");
		editsMantOrgCodOrg.setValue("");
		editsMantOrgJefe.setValue("");
		editsMantOrgJefCedula.setValue("");
		editsMantOrgAdministrador.setValue("");
		editsMantOrgAdmCedula.setValue("");
		editsMantOrgZonaEdu.clear();
		editsMantOrgDttoEsc.clear();
		editsMantOrgOtrCodigo.clear();
		editsMantOrgParroquia.clear();
		editsMantOrgMcpio.clear();
		gridsMantOrganizacion.clean();
	    imgButtonsMantOrganizacionAgregar.setEnable();
	    imgButtonsMantOrganizacionModificar.setDisable();
	    imgButtonsMantOrganizacionEliminar.setDisable();
		dialogsMantOrganizacion.setMsg("");
	    Tool.getGridData('MantObject', 'getMantAllOrg', dialogsMantOrganizacion, gridsMantOrganizacion, false);
	},

	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if(editsMantOrgSiglas.valid(dialogsMantOrganizacion))
			if(editsMantOrgDescripcion.valid(dialogsMantOrganizacion)) {
				if (methodName != 'eliminar') {
					rlx.add('reg',editsMantOrgSiglas);
					rlx.add('reg',editsMantOrgDescripcion);
					rlx.add('reg',editsMantOrgRif);
					rlx.add('reg',editsMantTipOrganizacion);
					rlx.add('reg',editsMantOrgTelefono);
					rlx.add('reg',editsMantOrgDireccion);
					rlx.add('reg',editsMantOrgPais);
					rlx.add('reg',editsMantOrgRegion);
					rlx.add('reg',editsMantOrgCiudad);
					rlx.add('reg',editsMantOrgEmail);
					rlx.add('reg',editsMantOrgCodOrg);
					rlx.add('reg',editsMantOrgJefe);
					rlx.add('reg',editsMantOrgJefCedula);
					rlx.add('reg',editsMantOrgAdministrador);
					rlx.add('reg',editsMantOrgAdmCedula);
					rlx.add('reg',editsMantOrgZonaEdu);
					rlx.add('reg',editsMantOrgDttoEsc);
					rlx.add('reg',editsMantOrgOtrCodigo);
					rlx.add('reg',editsMantOrgMcpio);
					rlx.add('reg',editsMantOrgParroquia);
        		}
				if (methodName != 'agregar') 
					rlx.addInt('reg',editsMantOrgSiglas.hideId);
				Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
			}
	}
};