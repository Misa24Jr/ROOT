var ambienteMantenimientoConNomina = 1;
var dialogsMantenimientoConNomina = new Object();
var editsMantenimientoConNomId = new Object();
var powerComboBoxMantenimientoConNomConcepto = new Object();
var powerComboBoxMantenimientoConNomSubOrganizacion = new Object();
var powerComboBoxMantenimientoConNomCarrera = new Object();
var powerComboBoxMantenimientoConNomCargo = new Object();
var powerComboBoxMantenimientoConNomVariable = new Object();
var powerComboBoxMantenimientoConNomEmpleado = new Object();
var powerComboBoxMantenimientoConNomTipConcepto = new Object();
var powerComboBoxMantenimientoConNomFrecuencia = new Object();
var imgButtonsMantenimientoConNomAgrVariable = new Object();
var gridsMantenimientoConNomina = new Object();
var memoMantenimientoConNomFormula = new Object();
var imgButtonsMantenimientoConNomAgregar = new Object();
var imgButtonsMantenimientoConNomModificar = new Object();
var imgButtonsMantenimientoConNomEliminar = new Object();
var imgButtonsMantenimientoConNomBuscar = new Object();
var imgButtonsMantenimientoConNomSalir = new Object();
var calendarsMantenimientoConNominaDesde = new Object();
var calendarsMantenimientoConNominaHasta = new Object();
var mwMantenimientoConNomina  = new Object();// minWindow
var MantenimientoConNomina = {
	windowName : 'MantenimientoConNomina',
	isCreate : false,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantenimientoConNomina.isByClean())
 			this.limpiar();			
		dialogsMantenimientoConNomina.show();
	},
	hide : function(){
		dialogsMantenimientoConNomina.hide();
	},
	createMWs : function(){
      mwMantenimientoConNomina = desktop.addMinWindow('M. Concepto Nomina', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
      dialogsMantenimientoConNomina.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
  dialogsMantenimientoConNomina_Init : function(){
        dialogsMantenimientoConNomina.setMinimizeXY(0,0);
        dialogsMantenimientoConNomina.setCenterScreen();
        dialogsMantenimientoConNomina.addSpace(1,0,20);
        dialogsMantenimientoConNomina.addLn(1,1,1);
		dialogsMantenimientoConNomina.setHeightCell(1,1,10);
        dialogsMantenimientoConNomina.addObjToDialog(editsMantenimientoConNomId,2,1,24);
        editsMantenimientoConNomId.setSizeEdit(149);
        dialogsMantenimientoConNomina.addObjToDialog(powerComboBoxMantenimientoConNomSubOrganizacion,2,1,24);
        powerComboBoxMantenimientoConNomSubOrganizacion.enableReadOnlyEditor();
        dialogsMantenimientoConNomina.addObjToDialog(powerComboBoxMantenimientoConNomCarrera,2,1,24);
        powerComboBoxMantenimientoConNomCarrera.enableReadOnlyEditor();
        dialogsMantenimientoConNomina.adjAllMarginObj(2,1,17);
        dialogsMantenimientoConNomina.addObjToDialog(powerComboBoxMantenimientoConNomTipConcepto,3,1,24);
        powerComboBoxMantenimientoConNomTipConcepto.addOptionAndSimpleValue(null,'DEDUCCIONES','DEDUCCIONES');
        powerComboBoxMantenimientoConNomTipConcepto.addOptionAndSimpleValue(null,'ASIGNACIONES','ASIGNACIONES');
        powerComboBoxMantenimientoConNomTipConcepto.enableReadOnlyEditor();
        dialogsMantenimientoConNomina.addObjToDialog(powerComboBoxMantenimientoConNomVariable,3,1,24);
        powerComboBoxMantenimientoConNomVariable.enableReadOnlyEditor();
        dialogsMantenimientoConNomina.addObjToDialog(powerComboBoxMantenimientoConNomCargo,3,1,24);
        powerComboBoxMantenimientoConNomCargo.enableReadOnlyEditor();
        dialogsMantenimientoConNomina.adjAllMarginObj(3,1,17);
        dialogsMantenimientoConNomina.addObjToDialog(powerComboBoxMantenimientoConNomFrecuencia,4,1,24);
        powerComboBoxMantenimientoConNomFrecuencia.addOptionAndSimpleValue(null,'RANGO','RANGO');
        powerComboBoxMantenimientoConNomFrecuencia.addOptionAndSimpleValue(null,'UNA VEZ','UNA VEZ');
        powerComboBoxMantenimientoConNomFrecuencia.addOptionAndSimpleValue(null,'PERMANENTE','PERMANENTE');
        powerComboBoxMantenimientoConNomFrecuencia.enableReadOnlyEditor();
        dialogsMantenimientoConNomina.addObjToDialog(calendarsMantenimientoConNominaDesde.getEditCalendar(),4,1);
        calendarsMantenimientoConNominaDesde.setWidthEditCalendar(127);   
        calendarsMantenimientoConNominaDesde.setCaption('Desde:',1,114);
        calendarsMantenimientoConNominaDesde.sendToFrom(100);
        dialogsMantenimientoConNomina.addObjToDialog(calendarsMantenimientoConNominaHasta.getEditCalendar(),4,1);
        calendarsMantenimientoConNominaHasta.setWidthEditCalendar(127);
        calendarsMantenimientoConNominaHasta.setCaption('Hasta:',1,76);
        calendarsMantenimientoConNominaHasta.sendToFrom(100);
        dialogsMantenimientoConNomina.adjAllMarginObj(4,1,17);
		dialogsMantenimientoConNomina.addObjToDialog(powerComboBoxMantenimientoConNomConcepto,5,1,24);
        powerComboBoxMantenimientoConNomConcepto.enableReadOnlyEditor();
		dialogsMantenimientoConNomina.addObjToDialog(powerComboBoxMantenimientoConNomEmpleado,5,1,24);
        powerComboBoxMantenimientoConNomEmpleado.enableReadOnlyEditor();
		dialogsMantenimientoConNomina.adjAllMarginObj(5,1,17);
		dialogsMantenimientoConNomina.addLn(6,1,1);
		dialogsMantenimientoConNomina.setHeightCell(6,1,6);
        dialogsMantenimientoConNomina.addObjToDialog(memoMantenimientoConNomFormula,7,1,21);
		memoMantenimientoConNomFormula.vAlignCaption('middle');
        memoMantenimientoConNomFormula.setDimension(737,40);
        dialogsMantenimientoConNomina.addLn(8,1,1);
		dialogsMantenimientoConNomina.setHeightCell(8,1,10);
        dialogsMantenimientoConNomina.addObjToDialog(gridsMantenimientoConNomina.getObject(),9,1);
        dialogsMantenimientoConNomina.addLn(10,1,1);
		dialogsMantenimientoConNomina.setHeightCell(10,1,12);
        dialogsMantenimientoConNomina.addObjToDialog(imgButtonsMantenimientoConNomAgregar,11,1);
        dialogsMantenimientoConNomina.addObjToDialog(imgButtonsMantenimientoConNomModificar,11,1);
        dialogsMantenimientoConNomina.addObjToDialog(imgButtonsMantenimientoConNomEliminar,11,1);
        dialogsMantenimientoConNomina.addObjToDialog(imgButtonsMantenimientoConNomAgrVariable,11,1);
        dialogsMantenimientoConNomina.addObjToDialog(imgButtonsMantenimientoConNomLimpiar,11,1);
        dialogsMantenimientoConNomina.addObjToDialog(imgButtonsMantenimientoConNomBuscar,11,1);
        dialogsMantenimientoConNomina.addObjToDialog(imgButtonsMantenimientoConNomSalir,11,1);
        imgButtonsMantenimientoConNomAgregar.setDimension(90,22);
        imgButtonsMantenimientoConNomModificar.setDimension(90,22);
        imgButtonsMantenimientoConNomEliminar.setDimension(90,22);
        imgButtonsMantenimientoConNomAgrVariable.setDimension(130,22);
        imgButtonsMantenimientoConNomLimpiar.setDimension(90,22);
        imgButtonsMantenimientoConNomBuscar.setDimension(90,22);
        imgButtonsMantenimientoConNomSalir.setDimension(90,22);
        dialogsMantenimientoConNomina.adjAllMarginObj(11,1,15);
        dialogsMantenimientoConNomina.leftMarginObj(11,1,0,23);
  },
  
  gridsMantenimientoConNomina_Init : function(){
        gridsMantenimientoConNomina.setFixColRow(false,true);
        gridsMantenimientoConNomina.addTitleVectorX(['Id','Concepto','Tipo de Concepto','Frecuencia','Formula','Sub-Organizacion','Carrera','Cargo','Empleado','Desde','Hasta','Memo']);
        gridsMantenimientoConNomina.showData();
        gridsMantenimientoConNomina.setSizeCol(1,5);
        gridsMantenimientoConNomina.setSizeCol(2,173);
        gridsMantenimientoConNomina.setSizeCol(3,160);
        gridsMantenimientoConNomina.setSizeCol(4,5);
        gridsMantenimientoConNomina.setSizeCol(5,130);
        gridsMantenimientoConNomina.setSizeCol(6,5);
        gridsMantenimientoConNomina.setSizeCol(7,5);
        gridsMantenimientoConNomina.setSizeCol(8,148);
        gridsMantenimientoConNomina.setSizeCol(9,148);
        gridsMantenimientoConNomina.setSizeCol(10,90);
        gridsMantenimientoConNomina.setSizeCol(11,90);
        gridsMantenimientoConNomina.setSizeCol(12,5);
        gridsMantenimientoConNomina.hideCol(1);
        gridsMantenimientoConNomina.hideCol(4);
        gridsMantenimientoConNomina.hideCol(6);
        gridsMantenimientoConNomina.hideCol(7);
        gridsMantenimientoConNomina.hideCol(5);
        //gridsMantenimientoConNomina.hideCol(11);
        gridsMantenimientoConNomina.hideCol(12);
  },

  create : function(){
      dialogsMantenimientoConNomina = dialogs.create('dialogsMantenimientoConNomina',0,0,857,419,'MANTENIMIENTO CONCEPTO PARA LA NOMINA');
      editsMantenimientoConNomId = edits.create('editsMantenimientoConNomId','editsMantenimientoConNomId','Código:',1,78,'normal');
      editsMantenimientoConNomId.setValidInteger();
      editsMantenimientoConNomId.setValidEmpty();
      powerComboBoxMantenimientoConNomConcepto = powerComboBox.create('powerComboBoxMantenimientoConNomConcepto','powerComboBoxMantenimientoConNomConcepto','Concepto:',1,78);
      powerComboBoxMantenimientoConNomConcepto.enableReadOnlyEditor();
      powerComboBoxMantenimientoConNomConcepto.addEmptyOption();
      powerComboBoxMantenimientoConNomConcepto.setValidEmpty();
      powerComboBoxMantenimientoConNomTipConcepto = powerComboBox.create('powerComboBoxMantenimientoConNomTipConcepto','powerComboBoxMantenimientoConNomTipConcepto','T. Concepto:',1,78);
      powerComboBoxMantenimientoConNomTipConcepto.enableReadOnlyEditor();
      powerComboBoxMantenimientoConNomTipConcepto.addEmptyOption();
      powerComboBoxMantenimientoConNomTipConcepto.setValidEmpty();
      powerComboBoxMantenimientoConNomFrecuencia = powerComboBox.create('powerComboBoxMantenimientoConNomFrecuencia','powerComboBoxMantenimientoConNomFrecuencia','Frecuencia:',1,78);
      powerComboBoxMantenimientoConNomFrecuencia.enableReadOnlyEditor();
      powerComboBoxMantenimientoConNomFrecuencia.addEmptyOption();
      powerComboBoxMantenimientoConNomFrecuencia.setValidEmpty();
      powerComboBoxMantenimientoConNomSubOrganizacion = powerComboBox.create('powerComboBoxMantenimientoConNomSubOrganizacion','powerComboBoxMantenimientoConNomSubOrganizacion','Sub-Organizacion:',1,114);
      powerComboBoxMantenimientoConNomSubOrganizacion.enableReadOnlyEditor();
      powerComboBoxMantenimientoConNomSubOrganizacion.addEmptyOption();
      powerComboBoxMantenimientoConNomSubOrganizacion.setValidEmpty();
      powerComboBoxMantenimientoConNomCarrera = powerComboBox.create('powerComboBoxMantenimientoConNomCarrera','powerComboBoxMantenimientoConNomCarrera','Carrera (*):',1,76);
      powerComboBoxMantenimientoConNomCarrera.enableReadOnlyEditor();
      powerComboBoxMantenimientoConNomCarrera.addEmptyOption();
      powerComboBoxMantenimientoConNomCarrera.setValidEmpty();
      powerComboBoxMantenimientoConNomCargo = powerComboBox.create('powerComboBoxMantenimientoConNomCargo','powerComboBoxMantenimientoConNomCargo','Cargo (*):',1,76);
      powerComboBoxMantenimientoConNomCargo.enableReadOnlyEditor();
      powerComboBoxMantenimientoConNomCargo.addEmptyOption();
      powerComboBoxMantenimientoConNomCargo.setValidEmpty();
      powerComboBoxMantenimientoConNomEmpleado = powerComboBox.create('powerComboBoxMantenimientoConNomEmpleado','powerComboBoxMantenimientoConNomEmpleado','Empleado (*):',1,114);
      powerComboBoxMantenimientoConNomEmpleado.enableReadOnlyEditor();
      powerComboBoxMantenimientoConNomEmpleado.addEmptyOption();
      powerComboBoxMantenimientoConNomEmpleado.setValidEmpty();
      powerComboBoxMantenimientoConNomVariable = powerComboBox.create('powerComboBoxMantenimientoConNomVariable','powerComboBoxMantenimientoConNomVariable','Variable:',1,114);
      powerComboBoxMantenimientoConNomVariable.enableReadOnlyEditor();
      powerComboBoxMantenimientoConNomVariable.addEmptyOption();
      powerComboBoxMantenimientoConNomVariable.setValidEmpty();
      memoMantenimientoConNomFormula = memo.create('memoMantenimientoConNomFormula','Formula:',1,1,75);
      memoMantenimientoConNomFormula.setValidEmpty();
      calendarsMantenimientoConNominaDesde = calendars.create('calendarsMantenimientoConNominaDesde');
      calendarsMantenimientoConNominaHasta = calendars.create('calendarsMantenimientoConNominaHasta');
      gridsMantenimientoConNomina = grids.create('gridsMantenimientoConNomina',8,12);
      imgButtonsMantenimientoConNomAgregar = imgButtons.create('imgButtonsMantenimientoConNomAgregar','Agregar','ok.png');
      imgButtonsMantenimientoConNomModificar = imgButtons.create('imgButtonsMantenimientoConNomModificar','Modificar','icono_modificar.png');
      imgButtonsMantenimientoConNomModificar.setDisable();
      imgButtonsMantenimientoConNomEliminar = imgButtons.create('imgButtonsMantenimientoConNomEliminar','Eliminar','eliminar.jpg');
      imgButtonsMantenimientoConNomEliminar.setDisable();
      imgButtonsMantenimientoConNomAgrVariable = imgButtons.create('imgButtonsMantenimientoConNomAgrVariable','Agregar Variable','FLECHA_ABAJO.png');
      imgButtonsMantenimientoConNomLimpiar = imgButtons.create('imgButtonsMantenimientoConNomLimpiar','Limpiar','limpiar.png');
      imgButtonsMantenimientoConNomBuscar = imgButtons.create('imgButtonsMantenimientoConNomBuscar','Buscar','icono_buscar.png');
      imgButtonsMantenimientoConNomSalir = imgButtons.create('imgButtonsMantenimientoConNomSalir','Salir','salir.png');      
  },

  init : function(){
    this.create();
    this.setEvents();
  	this.dialogsMantenimientoConNomina_Init();
  	this.gridsMantenimientoConNomina_Init();
	this.createMWs(); 
  },

  	limpiar : function(){
  		editsMantenimientoConNomId.setValue("");
  		powerComboBoxMantenimientoConNomConcepto.setSelectedIndex(0);
  		powerComboBoxMantenimientoConNomTipConcepto.setSelectedIndex(0);
  		powerComboBoxMantenimientoConNomFrecuencia.setSelectedIndex(0);
  		powerComboBoxMantenimientoConNomSubOrganizacion.setSelectedIndex(0);
  		powerComboBoxMantenimientoConNomCarrera.setSelectedIndex(0);
  		powerComboBoxMantenimientoConNomCargo.setSelectedIndex(0);
  		powerComboBoxMantenimientoConNomEmpleado.setSelectedIndex(0);
  		powerComboBoxMantenimientoConNomVariable.setSelectedIndex(0);
  		calendarsMantenimientoConNominaDesde.clear(); 
	    calendarsMantenimientoConNominaHasta.clear();
  		memoMantenimientoConNomFormula.setText('');
  		gridsMantenimientoConNomina.clean();
  		dialogsMantenimientoConNomina.setMsg("");
		editsMantenimientoConNomId.readOnly(false);
        imgButtonsMantenimientoConNomAgregar.setEnable();
        imgButtonsMantenimientoConNomModificar.setDisable();
        imgButtonsMantenimientoConNomEliminar.setDisable();
        //Tool.getGridData('MantObject', 'get'+this.windowName, dialogsMantenimientoConNomina, gridsMantenimientoConNomina, false);	 		    		
  	},
  	
  	buscar : function(){
  		alert('MantenimientoConNomina en construccion');
  },	
  setData : function(){
		if (gridsMantenimientoConNomina.getDataCell(1) != ""){
			editsMantenimientoConNomId.readOnly(true);
			editsMantenimientoConNomId.setValue(gridsMantenimientoConNomina.getDataCell(1));
            powerComboBoxMantenimientoConNomConcepto.findOption(gridsMantenimientoConNomina.getDataCell(2));
            powerComboBoxMantenimientoConNomTipConcepto.findOption(gridsMantenimientoConNomina.getDataCell(3));
            powerComboBoxMantenimientoConNomFrecuencia.findOption(gridsMantenimientoConNomina.getDataCell(4));
            powerComboBoxMantenimientoConNomSubOrganizacion.findOption(gridsMantenimientoConNomina.getDataCell(5));
            powerComboBoxMantenimientoConNomCarrera.findOption(gridsMantenimientoConNomina.getDataCell(6));
            powerComboBoxMantenimientoConNomCargo.findOption(gridsMantenimientoConNomina.getDataCell(7));
            powerComboBoxMantenimientoConNomEmpleado.findOption(gridsMantenimientoConNomina.getDataCell(8));
            powerComboBoxMantenimientoConNomVariable.findOption(gridsMantenimientoConNomina.getDataCell(9));
            calendarsMantenimientoConNominaDesde.findOption(gridsMantenimientoConNomina.getDataCell(10));
	        calendarsMantenimientoConNominaHasta.findOption(gridsMantenimientoConNomina.getDataCell(11));            
            memoMantenimientoConNomFormula.findOption(gridsMantenimientoConNomina.getDataCell(12));
            imgButtonsMantenimientoConNomAgregar.setDisable();
            imgButtonsMantenimientoConNomModificar.setEnable();
            imgButtonsMantenimientoConNomEliminar.setEnable();			
		}
	},
   
  setEvents : function(){
  	gridsMantenimientoConNomina.onClickCells(this.windowName+".setData()");
    imgButtonsMantenimientoConNomAgregar.onClick("MantBloque.coreUpdate('agregar')");
  	imgButtonsMantenimientoConNomModificar.onClick("MantBloque.coreUpdate('modificar')");
  	imgButtonsMantenimientoConNomEliminar.onClick("MantBloque.coreUpdate('eliminar')");
  	imgButtonsMantenimientoConNomAgrVariable.onClick('MantenimientoConNomina.agrVariable()');
  	imgButtonsMantenimientoConNomLimpiar.onClick('MantenimientoConNomina.limpiar()');
  	imgButtonsMantenimientoConNomBuscar.onClick('MantenimientoConNomina.buscar()');
  	imgButtonsMantenimientoConNomSalir.onClick('dialogsMantenimientoConNomina.close()');	  	 	
  },
  
  coreUpdate: function(methodName){
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        if (methodName == 'eliminar'){
            if (editsMantenimientoConNomId.valid(dialogsMantenimientoConNomina)) {
                rlx.add('reg', editsMantenimientoConNomId);
                procesar = true;
            }
        }
        else {
            if (editsMantenimientoConNomId.valid(dialogsMantenimientoConNomina)) 
                if (powerComboBoxMantenimientoConNomConcepto.valid(dialogsMantenimientoConNomina)) 
                    if (powerComboBoxMantenimientoConNomTipConcepto.valid(dialogsMantenimientoConNomina))
                        if (powerComboBoxMantenimientoConNomFrecuencia.valid(dialogsMantenimientoConNomina)) 
                			if (powerComboBoxMantenimientoConNomSubOrganizacion.valid(dialogsMantenimientoConNomina)) 
                    			if (powerComboBoxMantenimientoConNomCarrera.valid(dialogsMantenimientoConNomina))
									if (powerComboBoxMantenimientoConNomCargo.valid(dialogsMantenimientoConNomina)) 
                						if (powerComboBoxMantenimientoConNomEmpleado.valid(dialogsMantenimientoConNomina)) 
                    						if (powerComboBoxMantenimientoConNomVariable.valid(dialogsMantenimientoConNomina))
												if (calendarsMantenimientoConNominaDesde.valid(dialogsMantenimientoConNomina)) 
                									if (calendarsMantenimientoConNominaHasta.valid(dialogsMantenimientoConNomina)) 
                    									if (memoMantenimientoConNomFormula.valid(dialogsMantenimientoConNomina)){
															rlx.add('reg', powerComboBoxMantenimientoConNomConcepto);
                       										rlx.add('reg', powerComboBoxMantenimientoConNomTipConcepto);
                        									rlx.add('reg', powerComboBoxMantenimientoConNomFrecuencia);
															rlx.add('reg', powerComboBoxMantenimientoConNomSubOrganizacion);
                        									rlx.add('reg', powerComboBoxMantenimientoConNomCarrera);
                        									rlx.add('reg', powerComboBoxMantenimientoConNomCargo);
															rlx.add('reg', powerComboBoxMantenimientoConNomEmpleado);
                        									rlx.add('reg', powerComboBoxMantenimientoConNomVariable);
                        									rlx.add('reg', calendarsMantenimientoConNominaDesde);
															rlx.add('reg', calendarsMantenimientoConNominaHasta);
                        									rlx.add('reg', memoMantenimientoConNomFormula);
                        									rlx.add('reg', editsMantenimientoConNomId);
                       	 									procesar = true;
                    										}
       		}
        if (procesar){            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
    }
}