var dialogsMantInsProcedencia = new Object();
var editsMantInsProDescripcion = new Object();
var powerComboBoxMantInsProcedencia = new Object();
var editsMantInsProPerContacto = new Object();
var editsMantInsProTelefono = new Object();
var editsMantInsProDireccion = new Object();
var editsMantInsProEF = new Object();
var editsMantInsProLocalidad = new Object();
var gridsMantInsProcedencia = new Object();
var imgButtonsMantInsProAgregar = new Object();
var imgButtonsMantInsProModificar = new Object();
var imgButtonsMantInsProEliminar = new Object();
var imgButtonsMantInsProLimpiar = new Object();
var imgButtonsMantInsProSalir = new Object();
var mwMantInsProcedencia = new Object();// minWindow
var MantInsProcedencia = {
	windowName : 'MantInsProcedencia',
	isCreate : false,
    hideIdInstitucion: 0,
	
	show : function() {
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantInsProcedencia.isByClean())
 			this.limpiar();			
		dialogsMantInsProcedencia.show();
	},
	hide : function() {
		dialogsMantInsProcedencia.hide();
	},
	createMWs : function() {
      mwMantInsProcedencia = desktop.addMinWindow('M. I. Procedencia', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
      dialogsMantInsProcedencia.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantInsProcedencia_Init : function() {
        dialogsMantInsProcedencia.setMinimizeXY(0,0);
        dialogsMantInsProcedencia.setCenterScreen();
        dialogsMantInsProcedencia.addSpace(1,0,20);
        dialogsMantInsProcedencia.addLn(1,1,1);
		dialogsMantInsProcedencia.setHeightCell(1,1,10); 
        dialogsMantInsProcedencia.addObjToDialog(editsMantInsProDescripcion,2,1,24);
        dialogsMantInsProcedencia.addObjToDialog(powerComboBoxMantInsProcedencia,2,1,24);
		dialogsMantInsProcedencia.addObjToDialog(editsMantInsProPerContacto,2,1,24);
        dialogsMantInsProcedencia.adjAllMarginObj(2,1,23);
		dialogsMantInsProcedencia.addObjToDialog(editsMantInsProTelefono,3,1,24);
		dialogsMantInsProcedencia.addObjToDialog(editsMantInsProDireccion,3,1,24);
		dialogsMantInsProcedencia.adjAllMarginObj(3,1,23);
		dialogsMantInsProcedencia.addObjToDialog(editsMantInsProEF,4,1,24);
		dialogsMantInsProcedencia.addObjToDialog(editsMantInsProLocalidad,4,1,24);
		dialogsMantInsProcedencia.adjAllMarginObj(4,1,152);
        dialogsMantInsProcedencia.addLn(5,1,1);
		dialogsMantInsProcedencia.setHeightCell(5,1,10); 
        dialogsMantInsProcedencia.addObjToDialog(gridsMantInsProcedencia.getObject(),6,1);
        dialogsMantInsProcedencia.addLn(7,1,1);
		dialogsMantInsProcedencia.setHeightCell(7,1,12); 
        dialogsMantInsProcedencia.addObjToDialog(imgButtonsMantInsProAgregar,8,1);
        dialogsMantInsProcedencia.addObjToDialog(imgButtonsMantInsProModificar,8,1);
        dialogsMantInsProcedencia.addObjToDialog(imgButtonsMantInsProEliminar,8,1);
        dialogsMantInsProcedencia.addObjToDialog(imgButtonsMantInsProLimpiar,8,1);
        dialogsMantInsProcedencia.addObjToDialog(imgButtonsMantInsProSalir,8,1);
        dialogsMantInsProcedencia.adjAllMarginObj(8,1,20);
        dialogsMantInsProcedencia.leftMarginObj(8,1,0,132);
	},
	
	gridsMantInsProcedencia_Init : function() {
        gridsMantInsProcedencia.setFixColRow(false,true);
        gridsMantInsProcedencia.addTitleVectorX(['Nombre','Tipo de Institución','Persona Contacto','Teléfono','Dirección','id','ef','loc']);
        gridsMantInsProcedencia.showData();        
        gridsMantInsProcedencia.setSizeCol(1,215);
        gridsMantInsProcedencia.setSizeCol(2,130);
		gridsMantInsProcedencia.setSizeCol(3,130);
        gridsMantInsProcedencia.setSizeCol(4,90);
        gridsMantInsProcedencia.setSizeCol(5,230);
        gridsMantInsProcedencia.setSizeCol(6,0);
        gridsMantInsProcedencia.setSizeCol(7,0);
        gridsMantInsProcedencia.setSizeCol(8,0);
        gridsMantInsProcedencia.hideCol(6);
        gridsMantInsProcedencia.hideCol(7);
        gridsMantInsProcedencia.hideCol(8);
	},

	create : function() {
		dialogsMantInsProcedencia = dialogs.create('dialogsMantInsProcedencia',0,0,842,571,'INSTITUCIÓN DE PROCEDENCIA');
		editsMantInsProDescripcion = edits.create('editsMantInsProDescripcion','editsMantInsProDescripcion','Nombre:',1,77,'normal');
        editsMantInsProDescripcion.setSizeEdit(149);
		editsMantInsProDescripcion.setValidEmpty();
		powerComboBoxMantInsProcedencia = powerComboBox.create('powerComboBoxMantInsProcedencia','powerComboBoxMantInsProcedencia','Tipo de Institución:',1,113);
        powerComboBoxMantInsProcedencia.addOptionAndSimpleValue(null,'PRIVADA','PRIVADA');
        powerComboBoxMantInsProcedencia.addOptionAndSimpleValue(null,'PUBLICA','PUBLICA');
		powerComboBoxMantInsProcedencia.addOptionAndSimpleValue(null,'MIXTA','MIXTA');
		powerComboBoxMantInsProcedencia.enableReadOnlyEditor();
		powerComboBoxMantInsProcedencia.setValidEmpty();
		powerComboBoxMantInsProcedencia.setDataType('string');
		powerComboBoxMantInsProcedencia.addEmptyOption();
		editsMantInsProPerContacto = edits.create('editsMantInsProPerContacto','editsMantInsProPerContacto','Persona Contacto:',1,115,'normal');
        editsMantInsProPerContacto.setSizeEdit(149);
		editsMantInsProPerContacto.setValidEmpty();
		editsMantInsProTelefono = edits.create('editsMantInsProTelefono','editsMantInsProTelefono','Teléfono:',1,77,'normal');
        editsMantInsProTelefono.setSizeEdit(149);
		editsMantInsProTelefono.setValidEmpty();
		editsMantInsProDireccion = edits.create('editsMantInsProDireccion','editsMantInsProDireccion','Dirección:',1,113,'normal');
		editsMantInsProDireccion.setSizeEdit(437);
		editsMantInsProDireccion.setValidEmpty();
		editsMantInsProEF = edits.create('editsMantInsProEF','editsMantInsProEF','Ent. Federal:',1,77,'normal');
		editsMantInsProEF.setSizeEdit(20);
		editsMantInsProEF.setValidEmpty();
		editsMantInsProEF.setMaxLength(2);
		editsMantInsProLocalidad = edits.create('editsMantInsProLocalidad','editsMantInsProLocalidad','Localidad:',1,113,'normal');
		editsMantInsProLocalidad.setSizeEdit(437);
		editsMantInsProLocalidad.setValidEmpty();
		editsMantInsProLocalidad.setMaxLength(50);
		gridsMantInsProcedencia = grids.create('gridsMantInsProcedencia',20,8);
      	imgButtonsMantInsProAgregar = imgButtons.create('imgButtonsMantInsProAgregar','Agregar','ok.png');
      	imgButtonsMantInsProModificar = imgButtons.create('imgButtonsMantInsProModificar','Modificar','icono_modificar.png');
      	imgButtonsMantInsProModificar.setDisable();
      	imgButtonsMantInsProEliminar = imgButtons.create('imgButtonsMantInsProEliminar','Eliminar','eliminar.jpg');
      	imgButtonsMantInsProEliminar.setDisable();
      	imgButtonsMantInsProLimpiar = imgButtons.create('imgButtonsMantInsProLimpiar','Limpiar','limpiar.png');
      	imgButtonsMantInsProSalir = imgButtons.create('imgButtonsMantInsProSalir','Salir','salir.png');
        imgButtonsMantInsProAgregar.setDimension(90,22);
        imgButtonsMantInsProModificar.setDimension(90,22);
        imgButtonsMantInsProEliminar.setDimension(90,22);
        imgButtonsMantInsProLimpiar.setDimension(90,22);
        imgButtonsMantInsProSalir.setDimension(90,22);
	},

  	init : function() {
  		this.create();
  		this.setEvents();
  		this.dialogsMantInsProcedencia_Init();
  		this.gridsMantInsProcedencia_Init();
  		this.createMWs();
  	},

  	limpiar : function() {
  		editsMantInsProDescripcion.clear();
  		powerComboBoxMantInsProcedencia.setSelectedIndex(0); 	
        editsMantInsProPerContacto.clear();
        editsMantInsProTelefono.clear();
        editsMantInsProDireccion.clear();
        editsMantInsProEF.clear();
        editsMantInsProLocalidad.clear();
  		gridsMantInsProcedencia.clean();
  		dialogsMantInsProcedencia.setMsg("");
		imgButtonsMantInsProAgregar.setEnable();
		imgButtonsMantInsProModificar.setDisable();
		imgButtonsMantInsProEliminar.setDisable();	 		    		
        Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantInsProcedencia, gridsMantInsProcedencia, false);
  	},
  	  
    setData : function() {
		if (gridsMantInsProcedencia.getDataCell(1) != "") {
	        editsMantInsProDescripcion.setValue(gridsMantInsProcedencia.getDataCell(1));
	        powerComboBoxMantInsProcedencia.findOption(gridsMantInsProcedencia.getDataCell(2));
	        editsMantInsProPerContacto.setValue(gridsMantInsProcedencia.getDataCell(3));
	        editsMantInsProTelefono.setValue(gridsMantInsProcedencia.getDataCell(4));
	        editsMantInsProDireccion.setValue(gridsMantInsProcedencia.getDataCell(5));
	        this.hideIdInstitucion = gridsMantInsProcedencia.getDataCell(6);
	        editsMantInsProEF.setValue(gridsMantInsProcedencia.getDataCell(7));
	        editsMantInsProLocalidad.setValue(gridsMantInsProcedencia.getDataCell(8));
	        imgButtonsMantInsProAgregar.setDisable();
			imgButtonsMantInsProModificar.setEnable();
			imgButtonsMantInsProEliminar.setEnable();	 		    		
		}		
	},
   
	setEvents : function() {
		gridsMantInsProcedencia.onClickCells(this.windowName + ".setData()");
	    imgButtonsMantInsProAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantInsProModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantInsProEliminar.onClick(this.windowName+".coreUpdate('eliminar')");	
	  	imgButtonsMantInsProLimpiar.onClick('MantInsProcedencia.limpiar()');  	
	  	imgButtonsMantInsProSalir.onClick('dialogsMantInsProcedencia.close()');	  	 	
	},
  
	coreUpdate : function(methodName) {
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == 'eliminar') {
			if (editsMantInsProDescripcion.valid(dialogsMantInsProcedencia)) {
				rlx.addInt('reg', this.hideIdInstitucion);
				procesar = true;
			}
		}
		else {
			if (editsMantInsProDescripcion.valid(dialogsMantInsProcedencia))
				if (powerComboBoxMantInsProcedencia.valid(dialogsMantInsProcedencia))  					
					if (editsMantInsProEF.valid(dialogsMantInsProcedencia))  					
						if (editsMantInsProLocalidad.valid(dialogsMantInsProcedencia)) { 					
							rlx.add('reg',editsMantInsProDescripcion);
							rlx.add('reg',powerComboBoxMantInsProcedencia);
							rlx.add('reg',editsMantInsProPerContacto);
							rlx.add('reg',editsMantInsProTelefono);
							rlx.add('reg',editsMantInsProDireccion);
							rlx.add('reg',editsMantInsProEF);
							rlx.add('reg',editsMantInsProLocalidad);
		                	if (methodName == 'modificar') 
		                        rlx.addInt('reg', this.hideIdInstitucion);
							procesar = true;		
						} 
		}
        if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
	}
};
