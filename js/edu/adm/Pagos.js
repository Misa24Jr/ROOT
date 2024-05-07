var dialogsPagos = new Object();
var editsPagoCi = new Object();
var editsPagoNombre = new Object();
var editsPagoApellido = new Object(); 
var pcbPagoCarrera = new Object();
var pcbPagoPeriodo = new Object();
var gridsPagoDatAlumno = new Object();
var editsPagoCliCi = new Object();
var imgButtonsPagoCliCopiar = new Object();
var editsPagoCliNombre = new Object();
var editsPagoCliApellido = new Object(); 
var editsPagoCliTelefono = new Object();
var editsPagoCliDireccion = new Object();
var pcbPagoRecConcepto = new Object();
var pcbPagoRecConceptoFzble = new Object();
var imagesPagoRecIncluir = new Object();
var gridsPagoRecCliente = new Object();
var calendarPagoDocfecha = new Object();
var editsPagoRecTotMora = new Object();
var editsPagoRecTotDescuento = new Object();
var editsPagoRecTotDivisa = new Object();
var editsPagoRecTotPagar = new Object();
var imgButtonsPagoFacturar = new Object();
var imgButtonsPagoLimpiar = new Object();
var imgButtonsPagoBuscar = new Object();
var imgButtonsPagoReps = new Object();
var imgButtonsPagoSalir = new Object();
var mwPagos = new Object();// minWindow
var procPagos = new ProcPagos();

var Pagos = {
	windowName : 'Pagos',
	isCreate : false,
	actRowCli : 1,
	pagoRepsActive : false,
	calcMontoActive : false,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsPagos.isByClean())
 			this.limpiar();			
		dialogsPagos.show();
	},
	
	hide : function() {
		dialogsPagos.hide();
	},
	
	createMWs : function() {
		mwPagos  = desktop.addMinWindow('Facturar', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsPagos .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsPagos_Init : function() {
        dialogsPagos.setMinimizeXY(0,0);
        dialogsPagos.setCenterScreen();
        dialogsPagos.addSpace(0,0,20);
        dialogsPagos.addLn(1,1,1);
		dialogsPagos.setHeightCell(1,1,20);
		var c1 = container.create("c1",'Datos del Estudiante', 2);
		c1.setDimension(824,240);
		c1.setMarginLeftBarTitle(20);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#1e1e1e');
		c1.addObject(editsPagoCi, 41, 60);
		c1.addObject(editsPagoNombre, 309, 60);
		c1.addObject(editsPagoApellido, 575, 60);
		c1.addObject(pcbPagoCarrera, 41, 85);
		c1.addObject(pcbPagoPeriodo, 575, 85);
		c1.addObject(gridsPagoDatAlumno.getObject(), 40,109);
      	dialogsPagos.addObjToDialog(c1, 2, 1);
      	dialogsPagos.addLn(3, 1, 1);
		dialogsPagos.setHeightCell(3,1,12);

      	var c2 = container.create("c2",'Datos de la Factura', 2);
		c2.setDimension(824,306);
		c2.setMarginLeftBarTitle(20);
		c2.setPropertyMarco('groove',1,'#7e7e7e');
		c2.setFontTitle('verdana', 11, '#1e1e1e');
		c2.addObject(editsPagoCliCi, 41, 314);
		c2.addObject(imgButtonsPagoCliCopiar, 264, 314);
        imgButtonsPagoCliCopiar.setDimension(16,17);
        c2.addObject(editsPagoCliNombre, 300, 314);
		c2.addObject(editsPagoCliApellido, 575, 314);
		c2.addObject(editsPagoCliTelefono, 41, 338);
		editsPagoCliTelefono.setSizeEdit(149);
		c2.addObject(editsPagoCliDireccion, 300, 338);
		editsPagoCliDireccion.setSizeEdit(426);
		c2.addObject(pcbPagoRecConcepto, 41, 362);
		c2.addObject(imagesPagoRecIncluir, 548,360);
		c2.addObject(pcbPagoRecConceptoFzble, 575,362);
		c2.addObject(gridsPagoRecCliente.getObject(), 40,388);
		c2.addObject(calendarPagoDocfecha, 41, 570);
		c2.addObject(editsPagoRecTotMora, 217, 570);
        editsPagoRecTotMora.setSizeEdit(100);
        c2.addObject(editsPagoRecTotDescuento, 368, 570);
        editsPagoRecTotDescuento.setSizeEdit(100);
        c2.addObject(editsPagoRecTotDivisa, 554, 570);
        editsPagoRecTotDivisa.setSizeEdit(100);
       	c2.addObject(editsPagoRecTotPagar, 683, 570);
        editsPagoRecTotPagar.setSizeEdit(100);
      	dialogsPagos.addObjToDialog(c2, 4, 1);
      	dialogsPagos.addLn(5, 1, 1);
		dialogsPagos.setHeightCell(5,1,10); 
      	dialogsPagos.addObjToDialog(imgButtonsPagoFacturar,6,1);
      	imgButtonsPagoFacturar.setDimension(130,22);
        dialogsPagos.addObjToDialog(imgButtonsPagoLimpiar,6,1);
        imgButtonsPagoLimpiar.setDimension(130,22);
        dialogsPagos.addObjToDialog(imgButtonsPagoBuscar,6,1);
        imgButtonsPagoBuscar.setDimension(130,22);
        dialogsPagos.addObjToDialog(imgButtonsPagoReps,6,1);
        imgButtonsPagoReps.setDimension(130,22);
        dialogsPagos.addObjToDialog(imgButtonsPagoSalir,6,1);
        imgButtonsPagoSalir.setDimension(130,22);  
      	dialogsPagos.adjAllMarginObj(6,1,25);
        dialogsPagos.leftMarginObj(6,1,0,35);
        procPagos.setEdits(editsPagoRecTotMora, editsPagoRecTotDescuento, editsPagoRecTotPagar, editsPagoRecTotDivisa);
	},

	gridsPagoDatAlumno_Init : function()  {
        gridsPagoDatAlumno.setFixColRow(false,true);
        gridsPagoDatAlumno.addTitleVectorX(['Cedula','Concepto (Deuda)','Abono','Monto','Mes','F. Vencimiento','Periodo','idCuota/idCredito',
                                            'idPeriodo','poMora','poDescuento','tiDato','idConcepto','idPersAlumno','idCarrera','esCondInsc']);
        gridsPagoDatAlumno.showData();  
        gridsPagoDatAlumno.setSizeCol(1,110);      
        gridsPagoDatAlumno.setSizeCol(2,208);
        gridsPagoDatAlumno.setSizeCol(3,70);
        gridsPagoDatAlumno.setSizeCol(4,70);
        gridsPagoDatAlumno.setSizeCol(5,90);
        gridsPagoDatAlumno.setSizeCol(6,90);
        gridsPagoDatAlumno.setSizeCol(7,140);
        gridsPagoDatAlumno.setSizeCol(8,0);
        gridsPagoDatAlumno.setSizeCol(9,0);
        gridsPagoDatAlumno.setSizeCol(10,0);
        gridsPagoDatAlumno.setSizeCol(11,0);
        gridsPagoDatAlumno.setSizeCol(12,0);
        gridsPagoDatAlumno.setSizeCol(13,0);
        gridsPagoDatAlumno.setSizeCol(14,0);
        gridsPagoDatAlumno.setSizeCol(15,0);
        gridsPagoDatAlumno.setSizeCol(16,0);
        gridsPagoDatAlumno.hideCol(8);
        gridsPagoDatAlumno.hideCol(9);
        gridsPagoDatAlumno.hideCol(10);
        gridsPagoDatAlumno.hideCol(11);
        gridsPagoDatAlumno.hideCol(12);
        gridsPagoDatAlumno.hideCol(13);
        gridsPagoDatAlumno.hideCol(14);
        gridsPagoDatAlumno.hideCol(15);
        gridsPagoDatAlumno.hideCol(16);
        gridsPagoDatAlumno.sortEnable();
	},
  	
	gridsPagoRecCliente_Init : function()  {
        gridsPagoRecCliente.setFixColRow(false,true);
        gridsPagoRecCliente.addTitleVectorX(['Nº','Cedula','Concepto a Cobrar','Mes','Monto','poMora','poDescuento','idConcepto',
        'abono','Fecha Vencimiento','idPeriodo','periodo','idCuota/idCredito','tiDato','idPersAlumno','idCarrera','esCondInsc','idRubro']);
        gridsPagoRecCliente.showData();        
        gridsPagoRecCliente.setSizeCol(1,50);//nro.
        gridsPagoRecCliente.setSizeCol(2,110);//cedula
        gridsPagoRecCliente.setSizeCol(3,408);//concepto
        gridsPagoRecCliente.setSizeCol(4,110);//mes
        gridsPagoRecCliente.setSizeCol(5,100);//monto
        gridsPagoRecCliente.setSizeCol(6,0);//porcentaje mora
        gridsPagoRecCliente.setSizeCol(7,0);//porcentaje desc.
        gridsPagoRecCliente.setSizeCol(8,0);//id concepto
        gridsPagoRecCliente.setSizeCol(9,0);//abono
        gridsPagoRecCliente.setSizeCol(10,0);//fecha venc.
        gridsPagoRecCliente.setSizeCol(11,0);//idperiodo
        gridsPagoRecCliente.setSizeCol(12,0);//nombre periodo
        gridsPagoRecCliente.setSizeCol(13,0);//id cuota o credito
        gridsPagoRecCliente.setSizeCol(14,0);//indica si es cuota o credito
        gridsPagoRecCliente.setSizeCol(15,0);//id persona alumno
        gridsPagoRecCliente.setSizeCol(16,0);//id carrera
        gridsPagoRecCliente.setSizeCol(17,0);//condiciona inscripcion
        gridsPagoRecCliente.setSizeCol(18,0);//id rubro
        gridsPagoRecCliente.hideCol(6);
        gridsPagoRecCliente.hideCol(7);
        gridsPagoRecCliente.hideCol(8);
        gridsPagoRecCliente.hideCol(9);
        gridsPagoRecCliente.hideCol(10);
        gridsPagoRecCliente.hideCol(11);
        gridsPagoRecCliente.hideCol(12);
        gridsPagoRecCliente.hideCol(13);
        gridsPagoRecCliente.hideCol(14);
        gridsPagoRecCliente.hideCol(15);
        gridsPagoRecCliente.hideCol(16);
        gridsPagoRecCliente.hideCol(17);
        gridsPagoRecCliente.hideCol(18);
	}, 	 	
  
	create : function() {
		dialogsPagos = dialogs.create('dialogsPagos',0,0,865,624,'FACTURAR');
		dialogsPagos.setAdjY(20);
		editsPagoCi = edits.create('editsPagoCi','editsPagoCi','C.i. (*):',1,68,'normal');
		editsPagoCi.setValidInteger();
		editsPagoCi.setFieldFind(true);
		editsPagoCi.setSizeEdit(150);
		editsPagoNombre = edits.create('editsPagoNombre','editsPagoNombre','Nombre (*):',1,100,'normal');
		editsPagoNombre.setValidEmpty();
		editsPagoNombre.setFieldFind(true);
		editsPagoNombre.setSizeEdit(150);
		editsPagoApellido = edits.create('editsPagoApellido','editsPagoApellido','Apellido (*):',1,100,'normal');
		editsPagoApellido.setValidEmpty();
		editsPagoApellido.setFieldFind(true);
		editsPagoApellido.setSizeEdit(150);
		pcbPagoCarrera = powerComboBox.create('pcbPagoCarrera', 'pcbPagoCarrera', 'Carrera (*):', 1,68);
		pcbPagoCarrera.setWidthCombo(428);
		pcbPagoCarrera.enableReadOnlyEditor();
		pcbPagoCarrera.addEmptyOption();
		pcbPagoCarrera.setValidEmpty();
		pcbPagoPeriodo = powerComboBox.create('pcbPagoPeriodo', 'pcbPagoPeriodo', 'Periodo (*):', 1,100);
//		pcbPagoPeriodo.setWidthCombo(160);
		pcbPagoPeriodo.enableReadOnlyEditor();
		pcbPagoPeriodo.addEmptyOption();
		pcbPagoPeriodo.setValidEmpty();
		gridsPagoDatAlumno = grids.create('gridsPagoDatAlumno',6,16);
		editsPagoCliCi = edits.create('editsPagoCliCi','editsPagoCliCi','C.i./Rif. (*):',1,68,'normal');
		editsPagoCliCi.setValidEmpty();
		editsPagoCliCi.setFieldFind(true);
		editsPagoCliCi.setSizeEdit(149);
		imgButtonsPagoCliCopiar = imgButtons.create('imgButtonsPagoCliCopiar','','copy_1.png');
		editsPagoCliNombre = edits.create('editsPagoCliNombre','editsPagoCliNombre','Nombre (*):',1,98,'normal');
		editsPagoCliNombre.setValidEmpty();
		editsPagoCliNombre.setFieldFind(true);
		editsPagoCliNombre.setSizeEdit(149);
		editsPagoCliApellido = edits.create('editsPagoCliApellido','editsPagoCliApellido','Apellido (*):',1,100,'normal');
		editsPagoCliApellido.setValidEmpty();
		editsPagoCliApellido.setFieldFind(true);
		editsPagoCliApellido.setSizeEdit(149);
		editsPagoCliTelefono = edits.create('editsPagoCliTelefono','editsPagoCliTelefono','Teléfono:',1,68,'normal');
		editsPagoCliTelefono.setValidEmpty();
		editsPagoCliDireccion = edits.create('editsPagoCliDireccion','editsPagoCliDireccion','Dirección:',1,98,'normal');
		editsPagoCliDireccion.setValidEmpty(); 
		pcbPagoRecConcepto = powerComboBox.create('pcbPagoRecConcepto', 'pcbPagoRecConcepto', 'Concepto:', 1,68);
		pcbPagoRecConcepto.enableReadOnlyEditor();
		pcbPagoRecConcepto.addEmptyOption();
		pcbPagoRecConcepto.setValidEmpty();
		pcbPagoRecConcepto.setTypeObjOpt('input', 'checkbox');
		pcbPagoRecConcepto.setFirstRowCheckMode(2);		
		pcbPagoRecConcepto.setWidthCombo(416);
		pcbPagoRecConceptoFzble = powerComboBox.create('pcbPagoRecConceptoFzble', 'pcbPagoRecConceptoFzble', 'Concepto Cuota:', 1,99);
		pcbPagoRecConceptoFzble.enableReadOnlyEditor();
		pcbPagoRecConceptoFzble.addEmptyOption();
		pcbPagoRecConceptoFzble.setValidEmpty();
		pcbPagoRecConceptoFzble.setFieldFind(true);
		imagesPagoRecIncluir = images.create('imagesPagoRecIncluir','imagesPagoRecIncluir','images/curve_1.png');
		imagesPagoRecIncluir.setSize(19,19);
		gridsPagoRecCliente = grids.create('gridsPagoRecCliente',6,18);
		calendarPagoDocfecha = calendars.create('calendarPagoDocfecha');      
		calendarPagoDocfecha.setValidEmpty();
		calendarPagoDocfecha.setCaption('Fecha Pago:',1,78);
		calendarPagoDocfecha.setWidthEditCalendar(65);
		calendarPagoDocfecha.sendToFrom(100);
		editsPagoRecTotMora = edits.create('editsPagoRecTotMora','editsPagoRecTotMora','Mora:',1,40,'normal');
		editsPagoRecTotMora.setValidEmpty();
		editsPagoRecTotMora.readOnly(true);
		editsPagoRecTotDescuento = edits.create('editsPagoRecTotDescuento','editsPagoRecTotDescuento','Descuento:',1,74,'normal');
		editsPagoRecTotDescuento.setValidEmpty();
		editsPagoRecTotDescuento.readOnly(true);
		editsPagoRecTotDivisa = edits.create('editsPagoRecTotDivisa','editsPagoRecTotDivisa','$:',1,19,'normal');
		editsPagoRecTotDivisa.setValidEmpty();
		editsPagoRecTotDivisa.readOnly(true);
		editsPagoRecTotPagar = edits.create('editsPagoRecTotPagar','editsPagoRecTotPagar','Total:',1,40,'normal');
		editsPagoRecTotPagar.setValidEmpty();
		editsPagoRecTotPagar.readOnly(true);
		hint.create();
		hint.setObjAttrib(attrib,ambiente);	
		hint.addToHintWithRefreshPos(imgButtonsPagoCliCopiar, dialogsPagos,"Copiar datos del Estudiante",165,298,false,true);
		hint.addToHintWithRefreshPos(imagesPagoRecIncluir, dialogsPagos,"Incluir concepto",485,346,false,true);
      	imgButtonsPagoFacturar = imgButtons.create('imgButtonsPagoFacturar','Forma de Pago','modopago_1.png');
      	imgButtonsPagoLimpiar = imgButtons.create('imgButtonsPagoLimpiar','Limpiar','limpiar.png');
      	imgButtonsPagoBuscar = imgButtons.create('imgButtonsPagoBuscar','Buscar','icono_buscar.png');
      	imgButtonsPagoReps = imgButtons.create('imgButtonsPagoReps','Representante','perfil_1.png');
      	imgButtonsPagoSalir = imgButtons.create('imgButtonsPagoSalir','Salir','salir.png');
	},

  	init : function() { 
  		this.create();
  		this.dialogsPagos_Init();
  		this.gridsPagoDatAlumno_Init();
  		this.gridsPagoRecCliente_Init();
  		this.createMWs(); 
  		this.setEvents();
  	},

  	limpiarFindCliente : function() {
  		editsPagoCliNombre.setValue("");
  		editsPagoCliApellido.setValue(""); 
  		editsPagoCliTelefono.setValue("");
  		editsPagoCliDireccion.setValue("");
  		dialogsPagos.setMsg("");
  	},
  	
	limpiarFindAlumno : function(ix) {
		//procPagos.clean();
		editsPagoCi.hideId = -1;
  		if (this.pagoRepsActive) 
  		  dialogsPagoReps.close(); 
		//gridsPagoRecCliente.clean();
		gridsPagoDatAlumno.clean();
		pcbPagoCarrera.clear();
  		pcbPagoPeriodo.clear();
		editsPagoCliCi.clear();
  		editsPagoCliNombre.clear();
  		editsPagoCliApellido.clear();
  		editsPagoCliTelefono.clear();
  		editsPagoCliTelefono.setMaskPhone(json('getDiscInter').data[0]);
  		editsPagoCliDireccion.clear();
  		/*editsPagoRecTotMora.clear();
  		editsPagoRecTotDescuento.clear();
  		editsPagoRecTotPagar.clear();
  		editsPagoRecTotDivisa.clear();*/
  		pcbPagoRecConcepto.clear();
  		pcbPagoRecConceptoFzble.clear();
  		dialogsPagos.setMsg("");

  		switch (ix) {
		case 1: 
			editsPagoNombre.setValue("");
			editsPagoApellido.setValue("");  		
			break;
		case 2: 
			editsPagoCi.setValue("");
			editsPagoApellido.setValue("");  		
			break;
		default:
			editsPagoCi.setValue("");
			editsPagoNombre.setValue("");
			break;
		} 
  	},
  	
  	copiarCliente : function() {
  		editsPagoCliCi.setValue(editsPagoCi.getValue());
  		this.buscar();
  	},

  	callWinCalcMonto : function() {
		if (editsPagoCi.valid(dialogsPagos))
			if (editsPagoNombre.valid(dialogsPagos))
				if (editsPagoApellido.valid(dialogsPagos))
					if (pcbPagoCarrera.valid(dialogsPagos))
						if (pcbPagoPeriodo.valid(dialogsPagos)) {
  							if (pcbPagoRecConceptoFzble.valid(dialogsPagos)) 
  								CalcMontos.show();
						}
						else {
							pcbPagoRecConceptoFzble.setSelectedIndex(0);
						}
	}, 
	
  	setData : function() {
		if (gridsPagoDatAlumno.getDataCell(1) != "") {
			this.facturar(gridsPagoDatAlumno.getDataCell(1),
	  					  gridsPagoDatAlumno.getDataCell(2),
	  					  gridsPagoDatAlumno.getDataCell(3),
	  					  (procPagos.getDivisa() * (parseFloat(gridsPagoDatAlumno.getDataCell(4),10)-parseFloat(gridsPagoDatAlumno.getDataCell(3),10))).toFixed(2),
	  					  gridsPagoDatAlumno.getDataCell(5),
	  					  gridsPagoDatAlumno.getDataCell(6),
	  					  gridsPagoDatAlumno.getDataCell(7),
	  					  gridsPagoDatAlumno.getDataCell(8),
	  					  gridsPagoDatAlumno.getDataCell(9),
	  					  gridsPagoDatAlumno.getDataCell(10),
	  					  gridsPagoDatAlumno.getDataCell(11),
	  					  gridsPagoDatAlumno.getDataCell(12),
	  					  gridsPagoDatAlumno.getDataCell(13),
	  					  gridsPagoDatAlumno.getDataCell(14),
	  					  gridsPagoDatAlumno.getDataCell(15),
	  					  gridsPagoDatAlumno.getDataCell(16),
	  					  "NO",
	  					  false);
	  		gridsPagoDatAlumno.cleanRow();
	  		editsPagoCliCi.setFocus();
	  	}
	},

	facturar : function(cedAlumno, concep, abono, monto, feEmi, feVenc, periodo, idCuot_idCred, idPer, poMora, poDesc, tiDato, idConcep, 
		                idPersAlumno, idCarrera, esCondInsc, idRubro, stspp) {                	
  		
  		var item = gridsPagoRecCliente.getTotalRecord() + 1;
  		//ACTUALIZACION DE TOTALES
  		if(!stspp){
  		  if(isProntoPago(feVenc) && parseFloat(abono)==0){
  		    procPagos.actualizaTotalesPagos(monto, poDesc, procPagos.ADD_PAGO);//descuento por pronto pago a credito
  		    dialogsPagos.setMsg('El item '+item+' tiene descuento por pronto pago');
  		  }
  		  else{
  		    procPagos.actualizaTotalesPagos(monto, 0, procPagos.ADD_PAGO);//no tiene pronto pago
  		    dialogsPagos.setMsg('El item '+item+' no tiene descuento por pronto pago');
  		    poDesc=0;
  		  }
  		  if(isVenc(feVenc) && parseFloat(abono)==0){
  		    procPagos.actualizaMora(monto, poMora, procPagos.ADD_MORA);
  		    dialogsPagos.setMsg('El item '+item+' posee atraso de pago');
  		  }  
  		}
  		else{
  		  procPagos.actualizaTotalesPagos(monto, poDesc, procPagos.ADD_PAGO);//descuento por pronto pago de contado
  		  dialogsPagos.setMsg('tiene descuento por pronto pago');
  	   	}
  	   	gridsPagoRecCliente.addData([item,
  		                             cedAlumno,
  		                             concep, 
  		                             feEmi, 
  		                             ''+parseFloat(monto).toFixed(2), 
  		                             poMora, 
  		                             poDesc, 
  		                             idConcep, 
  		                             abono, 
  		                             feVenc, 
  		                             idPer, 
  		                             periodo, 
  		                             idCuot_idCred, 
  		                             tiDato, 
  		                             idPersAlumno,
  		                             idCarrera,
  		                             esCondInsc,
  		                             idRubro]);
  		imgButtonsPagoFacturar.setEnable();
  	},
  	
  	//Al hacer click en el grid de conceptos
  	setDataEdits : function() {
  		this.actRowCli = gridsPagoRecCliente.getRowCell();
  		gridsPagoRecCliente.selectedRow(this.actRowCli);
  		if(gridsPagoRecCliente.getDataCell(14) != "") {
  			gridsPagoDatAlumno.addData([gridsPagoRecCliente.getDataCell(2),
  			                            gridsPagoRecCliente.getDataCell(3),
  			                            gridsPagoRecCliente.getDataCell(9),
  			                            (parseFloat(gridsPagoRecCliente.getDataCell(5),10)+parseFloat(gridsPagoRecCliente.getDataCell(9),10)).toFixed(2) / procPagos.getDivisa(),
  			                            gridsPagoRecCliente.getDataCell(4),
  			                            gridsPagoRecCliente.getDataCell(10), 
  			                            gridsPagoRecCliente.getDataCell(12), 
  			                            gridsPagoRecCliente.getDataCell(13), 
  			                            gridsPagoRecCliente.getDataCell(11), 
  			                            gridsPagoRecCliente.getDataCell(6), 
  			                            gridsPagoRecCliente.getDataCell(7), 
  			                            gridsPagoRecCliente.getDataCell(14), 
  			                            gridsPagoRecCliente.getDataCell(8),
  			                            gridsPagoRecCliente.getDataCell(15),
  			                            gridsPagoRecCliente.getDataCell(16)]); 
  		} 
  		this.eliminaConceptoGrid();
  	},
  	
  	eliminaConceptoGrid : function() {
  		procPagos.actualizaTotalesPagos(gridsPagoRecCliente.getDataCell(5), gridsPagoRecCliente.getDataCell(7), procPagos.REMOVE_PAGO); 
  		procPagos.actualizaMora(gridsPagoRecCliente.getDataCell(5), gridsPagoRecCliente.getDataCell(6), procPagos.DEC_MORA);
  		gridsPagoRecCliente.cleanRow();
  		gridsPagoRecCliente.firstPage();
  		for(var i=1; i<=gridsPagoRecCliente.getTotalRecord(); i++) {  
  			gridsPagoRecCliente.setDataCell(i,1,i);  
  		}
  		if (gridsPagoRecCliente.getTotalRecord() == 0) {
  			imgButtonsPagoFacturar.setDisable();
  			procPagos.clean();
  	   }
  	},

  	incluirConcepto : function() {
  		if (pcbPagoPeriodo.valid(dialogsPagos))
  			if (editsPagoCi.valid(dialogsPagos))
  				if (pcbPagoRecConcepto.valid(dialogsPagos)) {
  					for(var i = 0; i < pcbPagoRecConcepto.getOptionChecked().fields.length; i++) {
  						if (pcbPagoRecConcepto.getOptionChecked().arrValues[i][11] == "NO") {
  							this.facturar(
  								//cedAlumno 
  								editsPagoCi.getText(),
  								//concep
  								pcbPagoRecConcepto.getOptionChecked().fields[i], 
  								//abono
  								0.0, 
  								//monto
  								parseFloat(pcbPagoRecConcepto.getOptionChecked().arrValues[i][5],10) * procPagos.getDivisa(),
  								//feEmi
  								'', 
  								//feVenc
  								'', 
  								//periodo
  								'', 
  								//idCuot_idCred
  								0, 
  								//idPer
  								pcbPagoPeriodo.setModeReturnGetText(0).getText(), 
  								//poMora
  								0.0, 
  								//poDesc 
  								0.0, 
  								//tiDato
  								'',
  								//idConcep  
  								pcbPagoRecConcepto.getOptionChecked().arrValues[i][0],
  								//idPersAlumno
  								editsPagoCi.hideId,
  								//idCarrera 
  								pcbPagoCarrera.setModeReturnGetText(0).getText(),
  								//esCondInsc
  								pcbPagoRecConcepto.getOptionChecked().arrValues[i][9],
								//idRubro
								pcbPagoRecConcepto.getOptionChecked().arrValues[i][10],
								//stspp
								false);
  						}
  						else {
  							CaptValor.show();
  							CaptValor.setIndex(i);
  						}
  					}
  				}  			
  	},
  	
  	closeWinsPagos : function() {
  		if (this.pagoRepsActive) dialogsPagoReps.close(); 
  	  	dialogsPagos.close();
  		this.pagoRepsActive = false;
  	},

  	setEvents : function() {
  		editsPagoCi.onEnter(this.windowName + ".buscar()");
  		editsPagoCi.onChange(this.windowName + ".limpiarFindAlumno(1)");
  		editsPagoCi.onClick(this.windowName + ".limpiarFindAlumno(1)");
  		editsPagoNombre.onEnter(this.windowName + ".buscar()");
  		editsPagoNombre.onChange(this.windowName + ".limpiarFindAlumno(2)");
  		editsPagoNombre.onClick(this.windowName + ".limpiarFindAlumno(2)");
  		editsPagoApellido.onEnter(this.windowName + ".buscar()");
  		editsPagoApellido.onChange(this.windowName + ".limpiarFindAlumno(3)");
  		editsPagoApellido.onClick(this.windowName + ".limpiarFindAlumno(3)");
  		pcbPagoCarrera.onChange(this.windowName + ".getDataGridCuota()");
  		pcbPagoPeriodo.onChange(this.windowName + ".getDataConceptoSinPago()");
  		gridsPagoDatAlumno.onClickCells(this.windowName + ".setData()");
  		//gridsPagoDatAlumno.onEnter(this.windowName + ".setData()");
  		editsPagoCliCi.onEnter(this.windowName + ".buscar()");
  		editsPagoCliCi.onChange(this.windowName + ".limpiarFindCliente()");
  		editsPagoCliNombre.onEnter(this.windowName + ".buscar()");
  		editsPagoCliApellido.onEnter(this.windowName + ".buscar()");
  		pcbPagoRecConceptoFzble.onChange(this.windowName + ".callWinCalcMonto()");
  		imgButtonsPagoCliCopiar.onClick(this.windowName + ".copiarCliente()");
  		imagesPagoRecIncluir.onClick(this.windowName + ".incluirConcepto()");
  		gridsPagoRecCliente.onClickCells(this.windowName + ".setDataEdits()");
  		imgButtonsPagoFacturar.onClick(this.windowName + ".callWinFormaPago()");
  		imgButtonsPagoLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsPagoBuscar.onClick(this.windowName + ".buscar()");
  		imgButtonsPagoReps.onClick("PagoReps.show()");
  		imgButtonsPagoSalir.onClick(this.windowName + ".closeWinsPagos()");
  		dialogsPagos.onClickCloseDialog(this.windowName + ".closeWinsPagos()");
  	},

  	callWinFormaPago : function() {
		if (editsPagoCliCi.valid(dialogsPagos))
			if (editsPagoCliNombre.valid(dialogsPagos))
				if (editsPagoCliApellido.valid(dialogsPagos))
					if (editsPagoCliTelefono.valid(dialogsPagos))
						if (editsPagoCliDireccion.valid(dialogsPagos)) {
							FormPago.show();
						}
  	},

	loadDataInit: function() {
		calendarPagoDocfecha.setDisable();
    	if (json('getPermiso').data[0] == 'ACTIVO')
    		calendarPagoDocfecha.setEnable();
    		
		editsPagoCliTelefono.setMaskPhone(json('getDiscInter').data[0]);
        procPagos.setDivisa(json('getDivisa').data[0]);
		dialogsPagos.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
        editsPagoCi.setFocus();
    },

  	limpiar : function(callSrv) {
  		editsPagoCi.hideId = -1;
  		Tool.rstPwrCmb(pcbPagoRecConcepto);
  		Tool.rstPwrCmb(pcbPagoRecConceptoFzble);
  		editsPagoCi.clear();
  		editsPagoNombre.clear();
  		editsPagoApellido.clear();
  		Tool.rstPwrCmb(pcbPagoCarrera);
  		Tool.rstPwrCmb(pcbPagoPeriodo);
  		gridsPagoDatAlumno.clean();
  		//if (!this.pagoRepsActive) {
  			procPagos.clean();
  		//}
  		editsPagoCliCi.clear();
  		editsPagoCliNombre.clear();
  		editsPagoCliApellido.clear();
  		editsPagoCliTelefono.clear();
  		editsPagoCliDireccion.clear();
  		gridsPagoRecCliente.clean();
		calendarPagoDocfecha.clear();
		calendarPagoDocfecha.setFechaToEdit(Tool.getDate());
  		editsPagoRecTotMora.clear();
  		editsPagoRecTotDescuento.clear();
  		editsPagoRecTotPagar.clear();
  		editsPagoRecTotDivisa.clear();
  		//imgButtonsPagoFacturar.setDisable();
  		dialogsPagos.setMsg("");
  		if (!callSrv || callSrv == undefined) {
  			Tool.cnnSrv('MantObject', 'getPagosConcepto', this.windowName + '.loadDataInit()');
  		}
  	},

  	getDataGridCuota : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		rlx.addInt('reg', editsPagoCi.hideId);
		rlx.add('reg', pcbPagoRecConceptoFzble.setModeReturnGetText(0));
		rlx.add('reg', pcbPagoRecConceptoFzble.setModeReturnGetText(0));
		rlx.add('reg', pcbPagoCarrera.setModeReturnGetText(2));
  		Tool.cnnSrv("MantObject", "getCreditoCuotaAlumno", this.windowName + ".loadDataGridCuota()", rlx);
  	},
  	
  	loadDataGridCuota : function() {
  		Tool.loadGridData(dialogsPagos, gridsPagoDatAlumno, false, json('getCreditoCuotaAlumno'));    
  		//if (!this.pagoRepsActive) gridsPagoRecCliente.clean();
  		/*
  		if (!this.pagoRepsActive && !this.calcMontoActive) {
  	  		editsPagoRecTotMora.clear();
  	  		editsPagoRecTotDescuento.clear();
  			editsPagoRecTotPagar.clear();
  			editsPagoRecTotDivisa.clear();
  			//procPagos.clean();
  		}
		*/
  		Tool.loadPowerComboData(dialogsPagos, pcbPagoPeriodo, -1, 1, json('getPeriodoVigente'));
  		//if (json('getPeriodoVigente').data[0].length == 1) {
  			pcbPagoPeriodo.setSelectedIndex(1);
  			this.getDataConceptoSinPago();
  		//}
  	},
  	
  	getDataConceptoSinPago : function() {
		var rlx = xmlStructs.createRecordList("rlx");

  		Tool.rstPwrCmb(pcbPagoRecConcepto);
  		Tool.rstPwrCmb(pcbPagoRecConceptoFzble);
		if (pcbPagoPeriodo.valid(dialogsPagos)) {
  			procPagos.setYear(pcbPagoPeriodo.setModeReturnGetText(2).getText().substr(0,4));
	  		rlx.addInt('reg', editsPagoCi.hideId);
	  		rlx.add('reg', pcbPagoCarrera.setModeReturnGetText(0));
	  		rlx.add('reg', pcbPagoPeriodo.setModeReturnGetText(0));
	  		Tool.cnnSrv("MantObject", "getConceptoSinPago", this.windowName + ".loadDataConceptoSinPago()", rlx);
		}
  	},
  	
  	loadDataConceptoSinPago : function() {
		Tool.loadPowerComboData(dialogsPagos, pcbPagoRecConcepto, -1, 1, json('getPagosConcepto'));
  		Tool.loadPowerComboData(dialogsPagos, pcbPagoRecConceptoFzble, -1, 1, json('getPagosConceptoFzble'));
  		editsPagoCliCi.setValue(json("getInfoRepresentante").data[0][0]);
  		editsPagoCliNombre.setValue(json("getInfoRepresentante").data[1][0]);
  		editsPagoCliApellido.setValue(json("getInfoRepresentante").data[2][0]); 
  		editsPagoCliTelefono.setValue(json("getInfoRepresentante").data[3][0]);
  		editsPagoCliDireccion.setValue(json("getInfoRepresentante").data[4][0]);
  	},
  	
  	getDatoCliente : function() {
		var rlx = xmlStructs.createRecordList("rlx");
		rlx.add('reg', editsPagoCliCi);
		rlx.add('reg', editsPagoCliCi);
		rlx.add('reg', editsPagoCliCi);
		rlx.add('reg', editsPagoCliNombre);
		rlx.add('reg', editsPagoCliNombre);
		rlx.add('reg', editsPagoCliApellido);
		rlx.add('reg', editsPagoCliApellido);
  		Tool.cnnSrv('MantObject', 'getDatoCliente', this.windowName + '.loadDatoCliente()', rlx);
  	},
  	
  	loadDatoCliente : function() {
  		editsPagoCliCi.setValue(json("getDatoCliente").data[0][0]);
  		editsPagoCliNombre.setValue(json("getDatoCliente").data[1][0]);
  		editsPagoCliApellido.setValue(json("getDatoCliente").data[2][0]); 
  		editsPagoCliTelefono.setValue(json("getDatoCliente").data[3][0]);
  		editsPagoCliDireccion.setValue(json("getDatoCliente").data[4][0]);
  		imgButtonsPagoFacturar.setFocus();
  	},

  	getCarrera : function() {
		var rlx = xmlStructs.createRecordList("rlx");
  		
		rlx.addInt('reg', editsPagoCi.hideId);
		Tool.cnnSrv('MantObject', 'getCarreraAlumno', this.windowName + '.loadDataCarrera()', rlx);
  	},

  	loadDataCarrera : function() {
		Tool.loadPowerComboData(dialogsPagos, pcbPagoCarrera, -1, 1, json('getCarreraAlumno'));
		pcbPagoCarrera.setSelectedIndex(1); 
  		this.getDataGridCuota();
  	},

  	buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsPagoCi.getValue() != '' && editsPagoNombre.getValue() != '' && editsPagoApellido.getValue() != '') {
			if (pcbPagoCarrera.valid(dialogsPagos)) 
				//if (editsPagoCliCi.valid(dialogsPagos)) 
					this.getDatoCliente();
		}
		else if (editsPagoCi.getValue() != '' || editsPagoNombre.getValue() != '' || editsPagoApellido.getValue() != '') {
        	ResuBusqueda.setObjectExtFnc(editsPagoCi, editsPagoNombre, editsPagoApellido, "Pagos.getCarrera()");
			Tool.getGridData('MantObject', 'getCreaBoletinAlumno', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsPagoCi, editsPagoCi, editsPagoNombre, editsPagoNombre, editsPagoApellido, editsPagoApellido);
		}
		else {
			Alert.show('Ingrese datos del Estudiante: C.i., Nombre, Apellido', 'SISTEMA', Alert.TYPE_INFO);
			editsPagoCi.valid(dialogsPagos);
			editsPagoNombre.valid(dialogsPagos);
			editsPagoApellido.valid(dialogsPagos); 
		}
   	}
};