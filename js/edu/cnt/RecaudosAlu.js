var dialogsRecaudosAlu = new Object();
var editsRecaudosAluDescripcion = new Object();
var powerComboBoxRecaudosAluEstado = new Object();
var gridsRecaudosAlu = new Object();
var imgButtonsRecaAluAgregar = new Object();
var imgButtonsRecaAluModificar = new Object();
var imgButtonsRecaAluEliminar = new Object();
var imgButtonsRecaAluLimpiar = new Object();
var imgButtonsRecaAluSalir = new Object();
var mwRecaudosAlu  = new Object();// minWindow

var RecaudosAlu = {
	windowName : 'RecaudosAlu',
	isCreate : false,
	hideIdRecaudo: 0,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsRecaudosAlu.isByClean())
 			this.limpiar();			
		dialogsRecaudosAlu.show();
	},
	hide : function() {
		dialogsRecaudosAlu.hide();
	},
	createMWs : function() {
      mwRecaudosAlu = desktop.addMinWindow('R. Alumnos', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
      dialogsRecaudosAlu.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
  dialogsRecaudosAlu_Init : function() {
        dialogsRecaudosAlu.setMinimizeXY(0,0);
        dialogsRecaudosAlu.setCenterScreen();
        dialogsRecaudosAlu.addSpace(0,0,20);
        dialogsRecaudosAlu.addLn(1,1,1);
		dialogsRecaudosAlu.setHeightCell(1,1,10);
        dialogsRecaudosAlu.addObjToDialog(editsRecaudosAluDescripcion,2,1,24);
        editsRecaudosAluDescripcion.setSizeEdit(385);
		editsRecaudosAluDescripcion.setMaxLength(100); 
        dialogsRecaudosAlu.addObjToDialog(powerComboBoxRecaudosAluEstado,2,1,24);
        powerComboBoxRecaudosAluEstado.addOptionAndSimpleValue(null,'ACTIVO','ACTIVO');
        powerComboBoxRecaudosAluEstado.addOptionAndSimpleValue(null,'INACTIVO','INACTIVO');
        powerComboBoxRecaudosAluEstado.enableReadOnlyEditor();
        powerComboBoxRecaudosAluEstado.setWidthCombo(60);
        dialogsRecaudosAlu.adjAllMarginObj(2,1,27);        
        dialogsRecaudosAlu.addLn(3,1,1);
		dialogsRecaudosAlu.setHeightCell(3,1,10);
        dialogsRecaudosAlu.addObjToDialog(gridsRecaudosAlu.getObject(),4,1);
        dialogsRecaudosAlu.addLn(5,1,1);
		dialogsRecaudosAlu.setHeightCell(5,1,12);
        dialogsRecaudosAlu.addObjToDialog(imgButtonsRecaAluAgregar,6,1);
        dialogsRecaudosAlu.addObjToDialog(imgButtonsRecaAluModificar,6,1);
        dialogsRecaudosAlu.addObjToDialog(imgButtonsRecaAluEliminar,6,1);
        dialogsRecaudosAlu.addObjToDialog(imgButtonsRecaAluLimpiar,6,1);
        dialogsRecaudosAlu.addObjToDialog(imgButtonsRecaAluSalir,6,1);        
        imgButtonsRecaAluAgregar.setDimension(90,22);
        imgButtonsRecaAluModificar.setDimension(90,22);
        imgButtonsRecaAluEliminar.setDimension(90,22);
        imgButtonsRecaAluLimpiar.setDimension(90,22);
        imgButtonsRecaAluSalir.setDimension(90,22);
        dialogsRecaudosAlu.adjAllMarginObj(6,1,20);
        dialogsRecaudosAlu.leftMarginObj(6,1,0,43);
  },
  
  gridsRecaudosAlu_Init : function() {
        gridsRecaudosAlu.setFixColRow(false,true);
        gridsRecaudosAlu.addTitleVectorX(['id','Descripción','Estado']);
        gridsRecaudosAlu.showData();       
        gridsRecaudosAlu.setSizeCol(1,0);
        gridsRecaudosAlu.setSizeCol(2,520);
        gridsRecaudosAlu.setSizeCol(3,100);
        gridsRecaudosAlu.hideCol(1);
  },

  create : function() {
      dialogsRecaudosAlu = dialogs.create('dialogsRecaudosAlu',0,0,665,332,'RECAUDOS DE LA PERSONA');
      editsRecaudosAluDescripcion = edits.create('editsRecaudosAluDescripcion','editsRecaudosAluDescripcion','Descripción:',1,78,'normal');
      editsRecaudosAluDescripcion.setValidEmpty();      
      powerComboBoxRecaudosAluEstado = powerComboBox.create('powerComboBoxRecaudosAluEstado','powerComboBoxRecaudosAluEstado','Estado:',1,50);
      powerComboBoxRecaudosAluEstado.setValidEmpty();
      powerComboBoxRecaudosAluEstado.enableReadOnlyEditor();
      powerComboBoxRecaudosAluEstado.addEmptyOption();
      powerComboBoxRecaudosAluEstado.setDataType('string');
      gridsRecaudosAlu = grids.create('gridsRecaudosAlu',10,3);
      imgButtonsRecaAluAgregar = imgButtons.create('imgButtonsRecaAluAgregar','Agregar','ok.png');
      imgButtonsRecaAluModificar = imgButtons.create('imgButtonsRecaAluModificar','Modificar','icono_modificar.png');
      imgButtonsRecaAluModificar.setDisable();
      imgButtonsRecaAluEliminar = imgButtons.create('imgButtonsRecaAluEliminar','Eliminar','eliminar.jpg');
      imgButtonsRecaAluEliminar.setDisable();
      imgButtonsRecaAluLimpiar = imgButtons.create('imgButtonsRecaAluLimpiar','Limpiar','limpiar.png');
      imgButtonsRecaAluSalir = imgButtons.create('imgButtonsRecaAluSalir','Salir','salir.png');
  },

	  init : function() {
	    this.create();
	    this.setEvents();
	  	this.dialogsRecaudosAlu_Init();
	  	this.gridsRecaudosAlu_Init();
		this.createMWs();
	  },
	
  	limpiar : function(){
  		editsRecaudosAluDescripcion.setValue("");
  		powerComboBoxRecaudosAluEstado.setSelectedIndex(0); 	
  		gridsRecaudosAlu.clean();
  		dialogsRecaudosAlu.setMsg("");
		imgButtonsRecaAluAgregar.setEnable();
		imgButtonsRecaAluModificar.setDisable();
		imgButtonsRecaAluEliminar.setDisable();	
		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsRecaudosAlu, gridsRecaudosAlu, false);
  	},
  	  
    setData : function(){
		if (gridsRecaudosAlu.getDataCell(1) != ""){
	        this.hideIdRecaudo = gridsRecaudosAlu.getDataCell(1);
			editsRecaudosAluDescripcion.setValue(gridsRecaudosAlu.getDataCell(2));			
			powerComboBoxRecaudosAluEstado.findOption(gridsRecaudosAlu.getDataCell(3));
			imgButtonsRecaAluAgregar.setDisable();
			imgButtonsRecaAluModificar.setEnable();
			imgButtonsRecaAluEliminar.setEnable();	
		}
	},
   
  setEvents : function(){
  	gridsRecaudosAlu.onClickCells(this.windowName+".setData()");
    imgButtonsRecaAluAgregar.onClick(this.windowName+".coreUpdate('agregar')");
  	imgButtonsRecaAluModificar.onClick(this.windowName+".coreUpdate('modificar')");
  	imgButtonsRecaAluEliminar.onClick(this.windowName+".coreUpdate('eliminar')"); 	
  	imgButtonsRecaAluLimpiar.onClick(this.windowName+".limpiar()");  	
  	imgButtonsRecaAluSalir.onClick('dialogsRecaudosAlu.close()');	  	 	
  },
  
  coreUpdate : function(methodName) {
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == 'eliminar') {
			if (editsRecaudosAluDescripcion.valid(dialogsRecaudosAlu)) {
				rlx.addInt('reg', this.hideIdRecaudo);
				procesar = true;
			}
		}
		else {
			if (editsRecaudosAluDescripcion.valid(dialogsRecaudosAlu))
  			  	if (powerComboBoxRecaudosAluEstado.valid(dialogsRecaudosAlu)) { 					
  					rlx.add('reg',editsRecaudosAluDescripcion);
  					rlx.add('reg',powerComboBoxRecaudosAluEstado);
  	                if (methodName == 'modificar') 
  	                	rlx.addInt('reg', this.hideIdRecaudo);
  					procesar = true;		
				} 
			}
		if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
	}
};