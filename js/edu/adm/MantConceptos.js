var dialogsMantConceptos = new Object();
var pcbMantConPagCarrera = new Object();
var editsMantConDescripcion = new Object();
var pcbMantConPagUnico = new Object();
var pcbMantConEstConcepto = new Object();
var pbcMantConDonacion = new Object();
var editsMantConMonto = new Object();
var pcbMantConConInscripcion = new Object();
var pbcMantConUC = new Object();
var pbcMantConFinanciable = new Object();
var editsMantConNumCuotas = new Object();
var editsMantConInicial = new Object();
var editsMantConDiaPago = new Object();
var editsMantConPorDecuento = new Object();
var editsMantConPorMora = new Object();
var gridsMantConceptos = new Object();
var imgButtonsMantConAgregar = new Object();
var imgButtonsMantConModificar = new Object();
var imgButtonsMantConEliminar = new Object();
var imgButtonsMantConLimpiar = new Object();
var imgButtonsMantConBuscar = new Object();
var imgButtonsMantConSalir = new Object();
var mwMantConceptos = new Object();// minWindow

var MantConceptos = {
	windowName : 'MantConceptos',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
		  this.init();
		  this.isCreate = true;
		}

		if (dialogsMantConceptos.isByClean())
 			this.limpiar();			
		dialogsMantConceptos.show();
	},
	
	hide : function() {
		dialogsMantConceptos.hide();
	},
	
	createMWs : function() {
        	mwMantConceptos  = desktop.addMinWindow('M.Conceptos', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantConceptos .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsMantConceptos_Init : function() {
        dialogsMantConceptos.setMinimizeXY(0,0);
        dialogsMantConceptos.setCenterScreen();
        dialogsMantConceptos.addSpace(0,0,20);
        dialogsMantConceptos.addLn(1,1,1);
		dialogsMantConceptos.setHeightCell(1,1,35);
		dialogsMantConceptos.addObject(pcbMantConPagCarrera,22,35);
		dialogsMantConceptos.addObject(editsMantConDescripcion,280,35);
		dialogsMantConceptos.addObject(editsMantConMonto,712,35);
        editsMantConMonto.setSizeEdit(65);
		editsMantConMonto.setMaxLength(8);
		dialogsMantConceptos.addObject(pcbMantConPagUnico,185,62);
        pcbMantConPagUnico.setWidthCombo(25);
        pcbMantConPagUnico.addOptionAndSimpleValue(null, 'SI','SI');
        pcbMantConPagUnico.addOptionAndSimpleValue(null, 'NO','NO');
		dialogsMantConceptos.addObject(pcbMantConEstConcepto,22,62);
        pcbMantConEstConcepto.setWidthCombo(55);
		pcbMantConEstConcepto.addOptionAndSimpleValue(null, 'ACTIVO','ACTIVO');
        pcbMantConEstConcepto.addOptionAndSimpleValue(null, 'INACTIVO','INACTIVO');
		dialogsMantConceptos.addObject(pcbMantConConInscripcion,380,62);
        pcbMantConConInscripcion.setWidthCombo(25);
        pcbMantConConInscripcion.addOptionAndSimpleValue(null, 'SI','SI');
        pcbMantConConInscripcion.addOptionAndSimpleValue(null, 'NO','NO');
//        dialogsMantConceptos.addObject(pbcMantConUC,449,62);
		pbcMantConUC.setWidthCombo(25);
        pbcMantConUC.addOptionAndSimpleValue(null, 'NO','NO');
		pbcMantConUC.addOptionAndSimpleValue(null, 'SI','SI');
		dialogsMantConceptos.addObject(pbcMantConFinanciable,587,62);
        pbcMantConFinanciable.setWidthCombo(25);
        pbcMantConFinanciable.addOptionAndSimpleValue(null, 'SI','SI');
        pbcMantConFinanciable.addOptionAndSimpleValue(null, 'NO','NO');
        dialogsMantConceptos.addObject(pbcMantConDonacion,712,62);
        pbcMantConDonacion.setWidthCombo(25);
        pbcMantConDonacion.addOptionAndSimpleValue(null, 'NO','NO');
        pbcMantConDonacion.addOptionAndSimpleValue(null, 'SI','SI');
        dialogsMantConceptos.addLn(3,1,1);
		dialogsMantConceptos.setHeightCell(3,1,36);
		var c1 = container.create("c1",'Detalle del Financiamiento', 2);
		c1.setDimension(798,50);
		c1.setMarginLeftBarTitle(20);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#1e1e1e');
		c1.addObject(editsMantConNumCuotas, 30,111);
		editsMantConNumCuotas.setSizeEdit(40);
		editsMantConNumCuotas.setMaxLength(2);
		editsMantConNumCuotas.readOnly(true);
		c1.addObject(editsMantConDiaPago, 190,111);
		editsMantConDiaPago.setSizeEdit(40);
		editsMantConDiaPago.setMaxLength(2);
		editsMantConDiaPago.readOnly(true);
		c1.addObject(editsMantConInicial, 404,111);
		editsMantConInicial.setSizeEdit(40);
		editsMantConInicial.setMaxLength(8);
		editsMantConInicial.readOnly(true);
		c1.addObject(editsMantConPorDecuento, 549,111);
		editsMantConPorDecuento.setSizeEdit(40);
		editsMantConPorDecuento.setMaxLength(8);
		editsMantConPorDecuento.readOnly(true);
		c1.addObject(editsMantConPorMora, 720,111);
		editsMantConPorMora.setSizeEdit(40);
		editsMantConPorMora.setMaxLength(5);
		editsMantConPorMora.readOnly(true);
		dialogsMantConceptos.addObjToDialog(c1, 5, 1);
		dialogsMantConceptos.addLn(6,1,1);
		dialogsMantConceptos.setHeightCell(6,1,11);
		dialogsMantConceptos.addObjToDialog(gridsMantConceptos.getObject(),7,1);
		dialogsMantConceptos.addLn(8,1,1);
		dialogsMantConceptos.setHeightCell(8,1,12);
        dialogsMantConceptos.addLn(8,1,1);
		dialogsMantConceptos.setHeightCell(8,1,9);
        dialogsMantConceptos.addObjToDialog(imgButtonsMantConAgregar,9,1);
        dialogsMantConceptos.addObjToDialog(imgButtonsMantConModificar,9,1);
        dialogsMantConceptos.addObjToDialog(imgButtonsMantConEliminar,9,1);
        dialogsMantConceptos.addObjToDialog(imgButtonsMantConLimpiar,9,1);
        dialogsMantConceptos.addObjToDialog(imgButtonsMantConBuscar,9,1);
        dialogsMantConceptos.addObjToDialog(imgButtonsMantConSalir,9,1);       
        imgButtonsMantConAgregar.setDimension(90,22);
        imgButtonsMantConModificar.setDimension(90,22);
        imgButtonsMantConEliminar.setDimension(90,22);
        imgButtonsMantConLimpiar.setDimension(90,22);
        imgButtonsMantConBuscar.setDimension(90,22);
        imgButtonsMantConSalir.setDimension(90,22);
        dialogsMantConceptos.adjAllMarginObj(9,1,20);
        dialogsMantConceptos.leftMarginObj(9,1,0,74);
	},

	gridsMantConceptos_Init : function()  {
        gridsMantConceptos.setFixColRow(false,true);
        gridsMantConceptos.addTitleVectorX(['Concepto','Monto','Exige Pago','Financiable','Donación','uc','cuota','poinicial','diapago','idconcepto','podescuento','pomora','pagUnico','Estado','rubro']);
        gridsMantConceptos.showData();        
        gridsMantConceptos.setSizeCol(1,391);
        gridsMantConceptos.setSizeCol(2,85);
        gridsMantConceptos.setSizeCol(3,85);
        gridsMantConceptos.setSizeCol(4,85);
        gridsMantConceptos.setSizeCol(5,85);
        gridsMantConceptos.setSizeCol(6,0);
        gridsMantConceptos.setSizeCol(7,0);
        gridsMantConceptos.setSizeCol(8,0);
        gridsMantConceptos.setSizeCol(9,0);
        gridsMantConceptos.setSizeCol(10,0);
        gridsMantConceptos.setSizeCol(11,0);
        gridsMantConceptos.setSizeCol(12,0);
        gridsMantConceptos.setSizeCol(13,0);
        gridsMantConceptos.setSizeCol(14,62);
        gridsMantConceptos.setSizeCol(15,0);
        gridsMantConceptos.hideCol(6);
        gridsMantConceptos.hideCol(7);
        gridsMantConceptos.hideCol(8);
        gridsMantConceptos.hideCol(9);
        gridsMantConceptos.hideCol(10);
        gridsMantConceptos.hideCol(11);
        gridsMantConceptos.hideCol(12);
        gridsMantConceptos.hideCol(13);
        //gridsMantConceptos.hideCol(14);
        gridsMantConceptos.hideCol(15);
	},

	create : function() {
		dialogsMantConceptos = dialogs.create('dialogsMantConceptos',0,0,839,609,'CONCEPTO DE PAGO');
		dialogsMantConceptos.setAdjY(20);
		pcbMantConPagCarrera = powerComboBox.create('pcbMantConPagCarrera', 'pcbMantConPagCarrera', 'Carrera (*):', 1,76);
		pcbMantConPagCarrera.setTypeObjOpt('input', 'checkbox');
		pcbMantConPagCarrera.setFirstRowCheckMode(2);
		pcbMantConPagCarrera.addEmptyOption();
		pcbMantConPagCarrera.setValidEmpty();
		pcbMantConPagCarrera.setFieldFind(true);
		pcbMantConPagCarrera.enableReadOnlyEditor();
		pcbMantConPagCarrera.setDataType('string');
        pcbMantConPagCarrera.setWidthCombo(154);
		editsMantConDescripcion = edits.create('editsMantConDescripcion','editsMantConDescripcion','Concepto (*):',3,83,'normal');
		editsMantConDescripcion.setValidEmpty();
		editsMantConDescripcion.setFieldFind(true);
		editsMantConDescripcion.hideId = '';
        editsMantConDescripcion.setSizeEdit(340);
		editsMantConDescripcion.setMaxLength(80); 
		editsMantConMonto = edits.create('editsMantConMonto','editsMantConMonto','Monto:',3,41,'normal');
		editsMantConMonto.setValidEmpty();
		editsMantConMonto.setValidReal();	
		pcbMantConPagUnico = powerComboBox.create('pcbMantConPagUnico', 'pcbMantConPagUnico', 'Pago Unico x Periodo:', 1,140);
		pcbMantConPagUnico.enableReadOnlyEditor();
		pcbMantConPagUnico.addEmptyOption();
		pcbMantConPagUnico.setValidEmpty();
		pcbMantConEstConcepto = powerComboBox.create('pcbMantConEstConcepto', 'pcbMantConEstConcepto','Estado:', 1,76);
		pcbMantConEstConcepto.enableReadOnlyEditor();
		pcbMantConEstConcepto.addEmptyOption();
		pcbMantConEstConcepto.setValidEmpty();
		pcbMantConConInscripcion = powerComboBox.create('pcbMantConConInscripcion', 'pcbMantConConInscripcion', 'Exige Pago Inscripción:', 1,146);
		pcbMantConConInscripcion.enableReadOnlyEditor();
		pcbMantConConInscripcion.addEmptyOption();
		pcbMantConConInscripcion.setValidEmpty();
		pbcMantConUC = powerComboBox.create('pbcMantConUC', 'pbcMantConUC','Requiere U.C.:', 1,86);
		pbcMantConUC.enableReadOnlyEditor();
		pbcMantConUC.addEmptyOption();
		pbcMantConUC.setValidEmpty();
		pbcMantConFinanciable = powerComboBox.create('pbcMantConFinanciable', 'pbcMantConFinanciable', 'Financiable:', 1,72);
		pbcMantConFinanciable.enableReadOnlyEditor();
		pbcMantConFinanciable.addEmptyOption();
		pbcMantConFinanciable.setValidEmpty();	
		pbcMantConDonacion = powerComboBox.create('pbcMantConDonacion', 'pbcMantConDonacion', 'Donación:', 1,61);
		pbcMantConDonacion.enableReadOnlyEditor();
		pbcMantConDonacion.addEmptyOption();
		pbcMantConDonacion.setValidEmpty();	
		editsMantConNumCuotas = edits.create('editsMantConNumCuotas','editsMantConNumCuotas','Nº Cuotas:',3,66,'normal');
		editsMantConNumCuotas.setValidEmpty();
		editsMantConNumCuotas.setValidInteger();
		editsMantConDiaPago = edits.create('editsMantConDiaPago','editsMantConDiaPago','Día Vencimiento:',3,116,'normal');
		editsMantConDiaPago.setValidEmpty();
		editsMantConDiaPago.setValidInteger();
		editsMantConInicial = edits.create('editsMantConInicial','editsMantConInicial','% Inicial:',3,55,'normal');
		editsMantConInicial.setValidEmpty();
		editsMantConInicial.setValidReal();
		editsMantConPorDecuento = edits.create('editsMantConPorDecuento','editsMantConPorDecuento','% Descuento:',3,82,'normal');
		editsMantConPorDecuento.setValidEmpty();
		editsMantConPorDecuento.setValidReal();
		editsMantConPorMora = edits.create('editsMantConPorMora','editsMantConPorMora','% Mora:',3,50,'normal');
		editsMantConPorMora.setValidEmpty();
		editsMantConPorMora.setValidReal();
		gridsMantConceptos = grids.create('gridsMantConceptos',20,15);
		imgButtonsMantConAgregar = imgButtons.create('imgButtonsMantConAgregar','Agregar','ok.png');
		imgButtonsMantConModificar = imgButtons.create('imgButtonsMantConModificar','Modificar','icono_modificar.png');
		imgButtonsMantConModificar.setDisable();
		imgButtonsMantConEliminar = imgButtons.create('imgButtonsMantConEliminar','Eliminar','eliminar.jpg');
		imgButtonsMantConEliminar.setDisable();
		imgButtonsMantConLimpiar = imgButtons.create('imgButtonsMantConLimpiar','Limpiar','limpiar.png');
		imgButtonsMantConBuscar = imgButtons.create('imgButtonsMantConBuscar','Buscar','icono_buscar.png');
		imgButtonsMantConSalir = imgButtons.create('imgButtonsMantConSalir','Salir','salir.png');
  	},

  	init : function() {
  		this.create();
  		this.setEvents();
  		this.dialogsMantConceptos_Init();
  		this.gridsMantConceptos_Init();
  		this.createMWs(); 
  	},

  	limpiar : function(methodName) {
  		pcbMantConPagCarrera.clearChecks();
  		pcbMantConPagCarrera.setSelectedIndex(0);
  		editsMantConDescripcion.setValue("");
  		editsMantConMonto.setValue("");
  		editsMantConMonto.readOnly(false);
  		pcbMantConPagUnico.setSelectedIndex(0);
  		pcbMantConEstConcepto.setSelectedIndex(0);
  		pcbMantConConInscripcion.setSelectedIndex(0);
  		pbcMantConUC.setSelectedIndex(1);
  		pbcMantConFinanciable.setSelectedIndex(0);
  		pbcMantConDonacion.setSelectedIndex(1);
  		editsMantConNumCuotas.setValue("");
  		editsMantConNumCuotas.readOnly(true);
  		editsMantConInicial.setValue("0");
  		editsMantConInicial.readOnly(true);
  		editsMantConDiaPago.setValue("6");
  		editsMantConDiaPago.readOnly(true);
  		editsMantConPorDecuento.setValue("0");
  		editsMantConPorDecuento.readOnly(true);
  		editsMantConPorMora.setValue("0");
  		editsMantConPorMora.readOnly(true);
  		dialogsMantConceptos.setMsg("");
		imgButtonsMantConAgregar.setEnable();
		imgButtonsMantConModificar.setDisable();
		imgButtonsMantConEliminar.setDisable();

		if (methodName != null) {
			if (methodName == "eliminar") { 
				editsMantConDescripcion.setValue("");
		  		if(gridsMantConceptos.getTotalRecord() == 1) {
					gridsMantConceptos.clean();
		        	dlgWait.hide();
		  		}
		  		else 
		  			this.buscar();
	        }
	        else 
	  			this.buscar();
	    }
		else {
	  		editsMantConDescripcion.setValue("");
	  		gridsMantConceptos.clean();
	  		Tool.getPowerComboData('MantObject', 'getMantConceptosInit', dialogsMantConceptos, pcbMantConPagCarrera, 0, 1);
		}
		editsMantConDescripcion.hideId = '';
  	},
  	
  	setData : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (gridsMantConceptos.getDataCell(1) != "") {
			editsMantConDescripcion.hideId = gridsMantConceptos.getDataCell(10);
			editsMantConDescripcion.setValue(gridsMantConceptos.getDataCell(1));
			
			if (gridsMantConceptos.getDataCell(15) == 1) {
				editsMantConMonto.readOnly(true);
				dialogsMantConceptos.setMsg("*****CONCEPTO: " + editsMantConDescripcion.getValue() + " esta relacionado con Rubros.*****");
			}
			else {
				editsMantConMonto.readOnly(false);
				dialogsMantConceptos.setMsg("");				
			}
				
	  		editsMantConMonto.setValue(gridsMantConceptos.getDataCell(2));
	  		pcbMantConConInscripcion.findOption(gridsMantConceptos.getDataCell(3));
	  		pbcMantConFinanciable.findOption(gridsMantConceptos.getDataCell(4));
	  		pbcMantConDonacion.findOption(gridsMantConceptos.getDataCell(5));
	  		pbcMantConUC.findOption(gridsMantConceptos.getDataCell(6));
	  		pcbMantConPagUnico.findOption(gridsMantConceptos.getDataCell(13));
	  		pcbMantConEstConcepto.findOption(gridsMantConceptos.getDataCell(14));

	  		if (gridsMantConceptos.getDataCell(4) == "NO") {
	  			editsMantConNumCuotas.setValue("");
	  			editsMantConInicial.setValue("");
	  			editsMantConDiaPago.setValue("");
	  	  		editsMantConPorDecuento.setValue("");
	  	  		editsMantConPorMora.setValue("");
	  			editsMantConNumCuotas.readOnly(true);
	  			editsMantConInicial.readOnly(true);
	  			editsMantConDiaPago.readOnly(true);
	  	  		editsMantConPorDecuento.readOnly(true);
	  	  		editsMantConPorMora.readOnly(true);
	  		}
	  		else {
		  		editsMantConNumCuotas.setValue(gridsMantConceptos.getDataCell(7));
		  		editsMantConInicial.setValue(gridsMantConceptos.getDataCell(8));
		  		editsMantConDiaPago.setValue(gridsMantConceptos.getDataCell(9));
		  		editsMantConPorDecuento.setValue(gridsMantConceptos.getDataCell(11));
		  		editsMantConPorMora.setValue(gridsMantConceptos.getDataCell(12));
		  		editsMantConNumCuotas.readOnly(false);
		  		editsMantConInicial.readOnly(false);
		  		editsMantConDiaPago.readOnly(false);
	  	  		editsMantConPorDecuento.readOnly(false);
	  	  		editsMantConPorMora.readOnly(false);
	  		}
			imgButtonsMantConAgregar.setDisable();
			imgButtonsMantConModificar.setEnable();
			imgButtonsMantConEliminar.setEnable();

			rlx.addInt('reg', editsMantConDescripcion.hideId);
			Tool.cnnSrv('MantObject', 'getMantConceptosCarrera', this.windowName + '.loadConcepCarrera()', rlx);
        }     			
	},
	
	loadConcepCarrera: function() {
		pcbMantConPagCarrera.setCheckEnable(json('getMantConceptosCarrera').data[0]);
		dlgWait.hide();
	},

	habilitaDetalle : function() {
		var f = true
		if (pbcMantConFinanciable.getValue()=='SI') f = false;
		editsMantConNumCuotas.readOnly(f);
		editsMantConDiaPago.readOnly(f);
		editsMantConInicial.readOnly(f);	
		editsMantConPorDecuento.readOnly(f);
  	  	editsMantConPorMora.readOnly(f);
	},
  	
  	setEvents : function() {
  		gridsMantConceptos.onClickCells(this.windowName + ".setData()");
  		editsMantConDescripcion.onEnter(this.windowName + ".buscar()");
  		pbcMantConFinanciable.onChange(this.windowName + ".habilitaDetalle()");
  		imgButtonsMantConAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
		imgButtonsMantConModificar.onClick(this.windowName + ".coreUpdate('modificar')");
		imgButtonsMantConEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
  		imgButtonsMantConLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsMantConBuscar.onClick(this.windowName + ".buscar()");
  		imgButtonsMantConSalir.onClick('dialogsMantConceptos.close()');
  	},
	
    buscar : function() {
  		gridsMantConceptos.clean(); 
  		imgButtonsMantConAgregar.setEnable();
  		imgButtonsMantConModificar.setDisable();
  		imgButtonsMantConEliminar.setDisable();
		Tool.getGridData("MantObject", "get"+this.windowName, dialogsMantConceptos, gridsMantConceptos, false, editsMantConDescripcion, editsMantConDescripcion, pcbMantConPagCarrera, pcbMantConPagCarrera); 		    		
    },

    coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");
		
  		if (pcbMantConPagCarrera.valid(dialogsMantConceptos))
	  		if (editsMantConDescripcion.valid(dialogsMantConceptos))
	  			if (pcbMantConPagUnico.valid(dialogsMantConceptos))
  					if (pcbMantConEstConcepto.valid(dialogsMantConceptos))
  						if (editsMantConMonto.valid(dialogsMantConceptos))
  							if (pcbMantConConInscripcion.valid(dialogsMantConceptos))
  								if (pbcMantConUC.valid(dialogsMantConceptos))
  									if (pbcMantConFinanciable.valid(dialogsMantConceptos))
  										if (pbcMantConDonacion.valid(dialogsMantConceptos))
  											if (pbcMantConFinanciable.getOption() == "NO" || editsMantConNumCuotas.valid(dialogsMantConceptos))
  												if (pbcMantConFinanciable.getOption() == "NO" || editsMantConInicial.valid(dialogsMantConceptos))
  													if (pbcMantConFinanciable.getOption() == "NO" || editsMantConDiaPago.valid(dialogsMantConceptos))  
  		  												if (pbcMantConFinanciable.getOption() == "NO" || editsMantConPorDecuento.valid(dialogsMantConceptos))
  		  													if (pbcMantConFinanciable.getOption() == "NO" || editsMantConPorMora.valid(dialogsMantConceptos)) { 
		  														if (methodName == 'eliminar') 
		  															rlx.addInt('reg', editsMantConDescripcion.hideId);
		  														else {
		  	  														 rlx.add('reg',editsMantConDescripcion);
		  											 				 rlx.add('reg',editsMantConMonto);
		  											 				 rlx.add('reg',pbcMantConFinanciable);
		  											 				 rlx.add('reg',pcbMantConConInscripcion);
		  											 				 rlx.add('reg',pbcMantConUC);
		  	  														 rlx.add('reg',editsMantConNumCuotas);
		  											 			 	 rlx.add('reg',editsMantConInicial);
		  											 				 rlx.add('reg',editsMantConDiaPago);
		  											 				 rlx.add('reg',editsMantConPorDecuento);
		  											 				 rlx.add('reg',editsMantConPorMora);
		  											 				 rlx.add('reg',pcbMantConPagUnico);
		  											 				 rlx.add('reg',pcbMantConEstConcepto);
		  											 				 rlx.add('reg',pbcMantConDonacion);
		  											 				 rlx.add('reg',pcbMantConPagCarrera);
		  														 	 if (methodName == 'modificar') rlx.addInt('reg', editsMantConDescripcion.hideId);
		  															}
		  															Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiar('" + methodName + "')", rlx);
																}
	}
};