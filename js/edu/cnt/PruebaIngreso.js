var dialogsPruebaIngreso = new Object();
var calendarsPruebaIngFecPrueba = new Object();
var memoPruebaIngDesPrueba = new Object();
var powerComboBoxPruebaIngPeriodo = new Object();
var powerComboBoxPruebaIngTipPrueba = new Object();
var powerComboBoxPruebaIngHorPrueba = new Object();
var powerComboBoxPruebaIngHorPrueba0 = new Object();
var gridsPruebaIngreso = new Object();
var imgButtonsPruebaIngAgregar = new Object();
var imgButtonsPruebaIngModificar = new Object();
var imgButtonsPruebaIngEliminar = new Object();
var imgButtonsPruebaIngLimpiar = new Object();
var imgButtonsPruebaIngBusacar = new Object();
var imgButtonsPruebaIngSalir = new Object();
var mwPruebaIngreso  = new Object();// minWindow
var PruebaIngreso = {
	windowName : 'PruebaIngreso',
	isCreate : false,
	
	show : function() 
	{
		if (!this.isCreate)
		{
			this.init();
			this.isCreate = true;
		}
		if (dialogsPruebaIngreso.isByClean())
 			this.limpiar();			
		dialogsPruebaIngreso.show();
	},
	hide : function() 
	{
		dialogsPruebaIngreso.hide();
	},
	createMWs : function() 
	{
      mwPruebaIngreso = desktop.addMinWindow('P. Ingreso', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
      dialogsPruebaIngreso.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
dialogsPruebaIngreso_Init : function(){
		dialogsPruebaIngreso.show();
        dialogsPruebaIngreso.setMinimizeXY(0,0);
        dialogsPruebaIngreso.setCenterScreen();
        dialogsPruebaIngreso.addSpace(0,0,20);
        dialogsPruebaIngreso.addLn(1,1,1);
		dialogsPruebaIngreso.setHeightCell(1,1,10);
		dialogsPruebaIngreso.addObjToDialog(powerComboBoxPruebaIngTipPrueba,2,1,24);
        dialogsPruebaIngreso.addObjToDialog(calendarsPruebaIngFecPrueba.getEditCalendar(),2,1,24);
        calendarsPruebaIngFecPrueba.setWidthEditCalendar(126);
        calendarsPruebaIngFecPrueba.setCaption('Fecha de la Prueba:',3,118);
        calendarsPruebaIngFecPrueba.sendToFrom(100);
        dialogsPruebaIngreso.adjAllMarginObj(2,1,20);        
        var PruebaIngContainer = container.create("PruebaIngContainer");        
        PruebaIngContainer.setObject(powerComboBoxPruebaIngHorPrueba,20,0,0,0);
        PruebaIngContainer.setObject(powerComboBoxPruebaIngHorPrueba0,0,0,0,0);
        powerComboBoxPruebaIngHorPrueba.setWidthCombo(35);
        powerComboBoxPruebaIngHorPrueba0.setWidthCombo(35);
        dialogsPruebaIngreso.addObjToDialog(PruebaIngContainer,2,1);        
        dialogsPruebaIngreso.addObjToDialog(powerComboBoxPruebaIngPeriodo,3,1,24);
        dialogsPruebaIngreso.adjAllMarginObj(3,1,2);
        dialogsPruebaIngreso.addObjToDialog(memoPruebaIngDesPrueba,4,1,54);
		memoPruebaIngDesPrueba.vAlignCaption('middle');
        memoPruebaIngDesPrueba.setDimension(684,40);
		memoPruebaIngDesPrueba.setMaxLength(150);         
		dialogsPruebaIngreso.addLn(5,1,1);
		dialogsPruebaIngreso.setHeightCell(5,1,2);
        dialogsPruebaIngreso.addObjToDialog(gridsPruebaIngreso.getObject(),6,1);
        dialogsPruebaIngreso.addLn(7,1,1);
		dialogsPruebaIngreso.setHeightCell(7,1,12);
        dialogsPruebaIngreso.addObjToDialog(imgButtonsPruebaIngAgregar,8,1);
        dialogsPruebaIngreso.addObjToDialog(imgButtonsPruebaIngModificar,8,1);
        dialogsPruebaIngreso.addObjToDialog(imgButtonsPruebaIngEliminar,8,1);
        dialogsPruebaIngreso.addObjToDialog(imgButtonsPruebaIngLimpiar,8,1);
        dialogsPruebaIngreso.addObjToDialog(imgButtonsPruebaIngBuscar,8,1);
        dialogsPruebaIngreso.addObjToDialog(imgButtonsPruebaIngSalir,8,1);
        imgButtonsPruebaIngAgregar.setDimension(90,22);
        imgButtonsPruebaIngModificar.setDimension(90,22);
        imgButtonsPruebaIngEliminar.setDimension(90,22);
        imgButtonsPruebaIngLimpiar.setDimension(90,22);
        imgButtonsPruebaIngBuscar.setDimension(90,22);
        imgButtonsPruebaIngSalir.setDimension(90,22);
        dialogsPruebaIngreso.adjAllMarginObj(8,1,20);
        dialogsPruebaIngreso.leftMarginObj(8,1,0,97);
  },
  
  gridsPruebaIngreso_Init : function(){
        gridsPruebaIngreso.setFixColRow(false,true);
        gridsPruebaIngreso.addTitleVectorX(['Descripción Prueba','Tipo de Prueba','Periodo','F. Prueba','H. Prueba']);
        gridsPruebaIngreso.showData();        
        gridsPruebaIngreso.setSizeCol(1,307);
        gridsPruebaIngreso.setSizeCol(2,186);
        gridsPruebaIngreso.setSizeCol(3,140);
        gridsPruebaIngreso.setSizeCol(4,100);
        gridsPruebaIngreso.setSizeCol(5,100);
  },

  create : function(){
      dialogsPruebaIngreso = dialogs.create('dialogsPruebaIngreso',0,0,881,403,'PRUEBA DE INGRESO');
	  dialogsPruebaIngreso.setAdjY(20);
      calendarsPruebaIngFecPrueba = calendars.create('calendarsPruebaIngFecPrueba:');
      calendarsPruebaIngFecPrueba.setValidEmpty();   
      memoPruebaIngDesPrueba = memo.create('memoPruebaIngDesPrueba','Descripción de la Prueba:',1,1,151);
      memoPruebaIngDesPrueba.setValidEmpty();
      powerComboBoxPruebaIngPeriodo = powerComboBox.create('powerComboBoxPruebaIngPeriodo','powerComboBoxPruebaIngPeriodo','Periodo:',1,153);
      powerComboBoxPruebaIngPeriodo.enableReadOnlyEditor();
      powerComboBoxPruebaIngPeriodo.setValidEmpty();
      powerComboBoxPruebaIngPeriodo.addEmptyOption();
      powerComboBoxPruebaIngTipPrueba = powerComboBox.create('powerComboBoxPruebaIngTipPrueba','powerComboBoxPruebaIngTipPrueba','Tipo de Prueba:',1,153);
      powerComboBoxPruebaIngTipPrueba.enableReadOnlyEditor();
      powerComboBoxPruebaIngTipPrueba.setValidEmpty();
      powerComboBoxPruebaIngTipPrueba.addEmptyOption();
      powerComboBoxPruebaIngHorPrueba = powerComboBox.create('powerComboBoxPruebaIngHorPrueba','powerComboBoxPruebaIngHorPrueba','Hora de la Prueba:',1,110);
      powerComboBoxPruebaIngHorPrueba.enableReadOnlyEditor();
      powerComboBoxPruebaIngHorPrueba.setValidEmpty();
      powerComboBoxPruebaIngHorPrueba.addEmptyOption();
      powerComboBoxPruebaIngHorPrueba0 = powerComboBox.create('powerComboBoxPruebaIngHorPrueba0','powerComboBoxPruebaIngHorPrueba0',':',1,0);
      powerComboBoxPruebaIngHorPrueba0.enableReadOnlyEditor();
      powerComboBoxPruebaIngHorPrueba0.setValidEmpty();
      powerComboBoxPruebaIngHorPrueba0.addEmptyOption();
      gridsPruebaIngreso = grids.create('gridsPruebaIngreso',10,5);
      imgButtonsPruebaIngAgregar = imgButtons.create('imgButtonsPruebaIngAgregar','Agregar','ok.png');
      imgButtonsPruebaIngModificar = imgButtons.create('imgButtonsPruebaIngModificar','Modificar','icono_modificar.png');
      imgButtonsPruebaIngModificar.setDisable();
      imgButtonsPruebaIngEliminar = imgButtons.create('imgButtonsPruebaIngEliminar','Eliminar','eliminar.jpg');
      imgButtonsPruebaIngEliminar.setDisable();
      imgButtonsPruebaIngLimpiar = imgButtons.create('imgButtonsPruebaIngLimpiar','Limpiar','limpiar.png');
      imgButtonsPruebaIngBuscar = imgButtons.create('imgButtonsPruebaIngBuscar','Buscar','icono_buscar.png');
      imgButtonsPruebaIngSalir = imgButtons.create('imgButtonsPruebaIngSalir','Salir','salir.png');
  },

  init : function(){
    this.create();
    this.setEvents();
    this.dialogsPruebaIngreso_Init();
    this.gridsPruebaIngreso_Init();
    this.cargarhorasComboBox();
    this.createMWs();
  },

   	limpiar : function(){
  		calendarsPruebaIngFecPrueba.clear(); 
  		memoPruebaIngDesPrueba.setText('');
  		powerComboBoxPruebaIngPeriodo.setSelectedIndex(0);
  		powerComboBoxPruebaIngTipPrueba.setSelectedIndex(0);
  		powerComboBoxPruebaIngHorPrueba.setSelectedIndex(0);
  		powerComboBoxPruebaIngHorPrueba0.setSelectedIndex(0);
  		gridsPruebaIngreso.clean();
  		dialogsPruebaIngreso.setMsg("");
		imgButtonsPruebaIngAgregar.setEnable();
		imgButtonsPruebaIngModificar.setDisable();
		imgButtonsPruebaIngEliminar.setDisable();	
		Tool.getGridData('MantObject', 'get'+this.windowName, dialogsPruebaIngreso, gridsPruebaIngreso, false); 		    		
  	},
  	
  	buscar : function()
  	{
  		alert('PruebaIngreso en construccion');
    },	
    setData : function(){
		if (gridsPruebaIngreso.getDataCell(1) != ""){
		editsPruebaIngId.setValue(gridsPruebaIngreso.getDataCell(1));
        calendarsPruebaIngFecPrueba.findOption(gridsPruebaIngreso.getDataCell(2));
        memoPruebaIngDesPrueba.findOption(gridsPruebaIngreso.getDataCell(3));
        powerComboBoxPruebaIngPeriodo.findOption(gridsPruebaIngreso.getDataCell(4));
        powerComboBoxPruebaIngTipPrueba.findOption(gridsPruebaIngreso.getDataCell(5));
        powerComboBoxPruebaIngHorPrueba.findOption(gridsPruebaIngreso.getDataCell(6));
        powerComboBoxPruebaIngHorPrueba0.findOption(gridsPruebaIngreso.getDataCell(7));
        imgButtonsPruebaIngAgregar.setDisable();
		imgButtonsPruebaIngModificar.setEnable();
		imgButtonsPruebaIngEliminar.setEnable();
        }			
	},
   
  setEvents : function(){
    imgButtonsPruebaIngAgregar.onClick(this.windowName+".coreUpdate('agregar')");
	imgButtonsPruebaIngModificar.onClick(this.windowName+".coreUpdate('modificar')");
	imgButtonsPruebaIngEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
  	imgButtonsPruebaIngLimpiar.onClick('PruebaIngreso.limpiar()');
  	imgButtonsPruebaIngBuscar.onClick('PruebaIngreso.buscar()');
  	imgButtonsPruebaIngSalir.onClick('dialogsPruebaIngreso.close()');
 },
  
  cargarhorasComboBox : function(){
	//CARGA LAS HORAS
  	for(var i=0; i<24; i++) {
  		powerComboBoxPruebaIngHorPrueba.addOptionAndSimpleValue(null,(i<10)?'0'+i:i,(i<10)?'0'+i:i);
  	  	} 
  	for(var i=0; i<60; i++) {
  		powerComboBoxPruebaIngHorPrueba0.addOptionAndSimpleValue(null,(i<10)?'0'+i:i,(i<10)?'0'+i:i);
  		}
  	//CARGA LOS MINUTOS
  },
  
  coreUpdate : function(methodName){
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");

		if (methodName == 'eliminar') 
		{
			if (editsMantSubCodigo.valid(dialogsPruebaIngreso))
			{
			rlx.add('reg', editsMantSubCodigo);
			procesar = true;
			}
		}
		else 
			{
	  		if (editsPruebaIngId.valid(dialogsPruebaIngreso))		
  				if (calendarsPruebaIngFecPrueba.valid(dialogsPruebaIngreso))
  					if (powerComboBoxPruebaIngHorPrueba.valid(dialogsPruebaIngreso))
  						if (powerComboBoxPruebaIngHorPrueba0.valid(dialogsPruebaIngreso))		
  							if (powerComboBoxPruebaIngPeriodo.valid(dialogsPruebaIngreso))
  								if (powerComboBoxPruebaIngTipPrueba.valid(dialogsPruebaIngreso))
  									if (memoPruebaIngDesPrueba.valid(dialogsPruebaIngreso))
					{ 					
					rlx.add('reg',calendarsPruebaIngFecPrueba);
					rlx.add('reg',powerComboBoxPruebaIngHorPrueba);
					rlx.add('reg',powerComboBoxPruebaIngHorPrueba0);
					rlx.add('reg',powerComboBoxPruebaIngPeriodo);
					rlx.add('reg',powerComboBoxPruebaIngTipPrueba);
					rlx.add('reg',memoPruebaIngDesPrueba);
					rlx.add('reg',editsPruebaIngId);					
					procesar = true;		
					} 
			}
		if (procesar){            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
        }
	}
}
