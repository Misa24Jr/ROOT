var dialogsMantSerMensajeria = new Object();
var labelsMantSerMenConSaldo = new Object();
var memoMantSerMenConSaldo = new Object();
var imgButtonsMantConSaldo = new Object();
var imgButtonsMantConSalSalir = new Object();
var editsMantSerMenRatBaudio = new Object();
var editsMantSerMenBitsParada = new Object();
var editsMantSerMenBitsDatos = new Object();
var editsMantSerMenConFlujo = new Object();
var editsMantSerMenParidad = new Object();
var editsMantSerMenPueCom = new Object();
var editsMantSerMenMaxTamCola = new Object();
var editsMantSerMenModControl = new Object();
var editsMantSerMenNomModems = new Object();
var pcbMantSerMenRetTieSegundos = new Object();
var radioMantSerMenIniServidor1 = new Object();
var radioMantSerMenIniServidor2 = new Object();
var editsMantSerMenTotConexion = new Object();
var pcbMantSerMenModem = new Object();
var editsMantSerMenNumProceso = new Object();
var imgButtonsMantSerCreConfiguracion = new Object();
var imgButtonsMantSerMenParProceso = new Object();
var imgButtonsMantSerMenReiServidor = new Object();
var imgButtonsMantSerMenIniManual = new Object();
var imgButtonsMantSerSalir = new Object();
var mwMantSerMensajeria  = new Object();// minWindow

var MantSerMensajeria = {
	windowName: 'MantSerMensajeria',
	isCreate: false,
	hideIdPeriodo : 0,
	
	show: function(){
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantSerMensajeria.isByClean()) 
			//this.limpiar();
		dialogsMantSerMensajeria.show();
	},
	
	hide: function(){
		dialogsMantSerMensajeria.hide();
	},
	
	createMWs: function(){
		mwMantSerMensajeria = desktop.addMinWindow('M.S. Mensajería', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsMantSerMensajeria.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},
	
	dialogsMantSerMensajeria_Init: function(){
		dialogsMantSerMensajeria.setMinimizeXY(0, 0);
		dialogsMantSerMensajeria.setCenterScreen();
		dialogsMantSerMensajeria.addSpace(0, 0, 20);
		dialogsMantSerMensajeria.addLn(1, 1, 1);
		dialogsMantSerMensajeria.setHeightCell(1, 1, 15);
		dialogsMantSerMensajeria.addObjToDialog(tabsMantSerMensajeria, 2, 1);
		dialogsMantSerMensajeria.addLn(3, 1, 1);
		dialogsMantSerMensajeria.setHeightCell(3,1,15);
	},
		
//PANEL//CONSULTA//DE//SALDO//////////////////////////////////////////////////
	tabsMantSerMensajeria_Init: function(){
		tabsMantSerMensajeria.selectTab(2); 
		tabsMantSerMensajeria.selectTab(1); 
		tabsMantSerMensajeria.showPanel(0);
		tabsMantSerMensajeria.setSizeText(11);
		tabsMantSerMensajeria.setFontFamily('Tw Cen MT Condensed Extra Bold');
		tabsMantSerMensajeria.setBorderWidthPanel(0);
		tabsMantSerMensajeria.addLnToGridPanel(0,5);
		var c1 = container.create("c1");
		c1.addObject(labelsMantSerMenConSaldo, 238,85);
		labelsMantSerMenConSaldo.setFont('arial black','12','Black');
		c1.addObject(memoMantSerMenConSaldo, 21,95);
		memoMantSerMenConSaldo.setDimension(547, 273);
		memoMantSerMenConSaldo.style.zIndex = 1000;
		c1.addObject(imgButtonsMantConSaldo,140, 385);
		c1.addObject(imgButtonsMantConSalSalir,305, 385);
        imgButtonsMantConSaldo.setDimension(150,22);
        imgButtonsMantConSalSalir.setDimension(150,22);
        tabsMantSerMensajeria.addObjToGridPanel(0, c1, 1, 1);
//PANEL//CONFIGURACION///////////////////////////////////////////////////////////
		tabsMantSerMensajeria.addLnToGridPanel(1,38);
		var c2 = container.create("c2");
		c2.addObject(editsMantSerMenRatBaudio, 22,85);
		c2.addObject(editsMantSerMenBitsParada, 22,110);
		c2.addObject(editsMantSerMenBitsDatos, 22,135);
		c2.addObject(editsMantSerMenConFlujo, 22,160);
		c2.addObject(editsMantSerMenParidad, 22,185);
		c2.addObject(editsMantSerMenPueCom, 22,210);
		c2.addObject(editsMantSerMenMaxTamCola, 22,235);
		c2.addObject(editsMantSerMenModControl, 22,260);
		c2.addObject(editsMantSerMenNomModems, 22,285);
		c2.addObject(pcbMantSerMenRetTieSegundos, 22,310);
		c2.addObject(radioMantSerMenIniServidor1, 244,310);
		c2.addObject(radioMantSerMenIniServidor2, 320,310);
		c2.addObject(imgButtonsMantSerCreConfiguracion, 45, 346);
		c2.addObject(imgButtonsMantSerMenParProceso, 224, 346);
		c2.addObject(imgButtonsMantSerMenReiServidor,400, 346);
		c2.addObject(imgButtonsMantSerMenIniManual, 140, 385);
		c2.addObject(imgButtonsMantSerSalir,305, 385);
        imgButtonsMantSerCreConfiguracion.setDimension(150,22);
        imgButtonsMantSerMenParProceso.setDimension(150,22);
        imgButtonsMantSerMenReiServidor.setDimension(150,22);
		imgButtonsMantSerMenIniManual.setDimension(150,22);
        imgButtonsMantSerSalir.setDimension(150,22); 
		tabsMantSerMensajeria.addObjToGridPanel(1, c2, 1, 1);
//PANEL//CONTROL///////////////////////////////////////////////////////////
		tabsMantSerMensajeria.addLnToGridPanel(2,35);
		var c3 = container.create("c3");
		c3.setDimension(554,115);
		c3.setPropertyMarco('groove',2,'#7e7e7e');
		c3.addObject(editsMantSerMenTotConexion, 32,135);
		c3.addObject(pcbMantSerMenModem, 32,180);
		c3.addObject(editsMantSerMenNumProceso, 381,180);
		tabsMantSerMensajeria.addObjToGridPanel(2, c3, 2, 1);
	},
		
	create : function(){
		dialogsMantSerMensajeria = dialogs.create('dialogsMantSerMensajeria',0,0,595,398,'SERVICIO DE MENSAJERIA SMS');   
		dialogsMantSerMensajeria.setAdjY(20);
		////////////////////////////////////////////////////////COMPONENTE TABS/////////////////////////////////////////////////////////////////////////////////////////
		tabsMantSerMensajeria = tabs.create('tabsMantSerMensajeria',560,260,['CONSULTA DE SALDO','CONFIGURACIÓN','CONTROL']); 
		//////////////////////////////////////////////////////INFORMACIÓN CONFIGURACIÓN///////////////////////////////////////////////////////////////////////////////////
		labelsMantSerMenConSaldo = labels.create('labelsMantSerMenConSaldo','Consulta de Saldo',1);
        memoMantSerMenConSaldo = memo.create('memoMantSerMenConSaldo', '', 1, 1, 0);
        memoMantSerMenConSaldo.setReadOnly(true);
        memoMantSerMenConSaldo.setValidEmpty();
        memoMantSerMenConSaldo.setMaxLength(4000);
        imgButtonsMantConSaldo = imgButtons.create('imgButtonsMantConSaldo','Consulta de Saldo','saldomsm_01.png');
        imgButtonsMantConSalSalir = imgButtons.create('imgButtonsMantConSalSalir','Salir','salir.png');
        editsMantSerMenRatBaudio = edits.create('editsMantSerMenRatBaudio','editsMantSerMenRatBaudio','Rata de Baudio:',1,152,'normal');
		editsMantSerMenRatBaudio.setValidEmpty();
		editsMantSerMenRatBaudio.setFieldFind(true); 
		editsMantSerMenRatBaudio.setSizeEdit(400);
		editsMantSerMenBitsParada = edits.create('editsMantSerMenBitsParada','editsMantSerMenBitsParada','Bits de Parada:',1,152,'normal');
		editsMantSerMenBitsParada.setValidInteger();
		editsMantSerMenBitsParada.setFieldFind(true);
		editsMantSerMenBitsParada.setSizeEdit(400); 
		editsMantSerMenBitsDatos = edits.create('editsMantSerMenBitsDatos','editsMantSerMenBitsDatos','Bits de Datos:',1,152,'normal');
		editsMantSerMenBitsDatos.setValidEmpty();
		editsMantSerMenBitsDatos.setFieldFind(true);
		editsMantSerMenBitsDatos.setSizeEdit(400); 
		editsMantSerMenConFlujo = edits.create('editsMantSerMenConFlujo','editsMantSerMenConFlujo','Control de Flujo:',1,152,'normal');
		editsMantSerMenConFlujo.setValidEmpty();
		editsMantSerMenConFlujo.setFieldFind(true);
		editsMantSerMenConFlujo.setSizeEdit(400); 
		editsMantSerMenPueCom = edits.create('editsMantSerMenPueCom','editsMantSerMenPueCom','Puertos Com:',1,152,'normal');
		editsMantSerMenPueCom.setValidEmpty();
		editsMantSerMenPueCom.setFieldFind(true);
		editsMantSerMenPueCom.setSizeEdit(400); 
		editsMantSerMenParidad = edits.create('editsMantSerMenParidad','editsMantSerMenParidad','Paridad:',1,152,'normal');
		editsMantSerMenParidad.setValidEmpty();
		editsMantSerMenParidad.setFieldFind(true);
		editsMantSerMenParidad.setSizeEdit(400); 
		editsMantSerMenMaxTamCola = edits.create('editsMantSerMenMaxTamCola','editsMantSerMenMaxTamCola','Max. Tamaño Cola:',1,152);
		editsMantSerMenMaxTamCola.setValidEmpty();
		editsMantSerMenMaxTamCola.setFieldFind(true);
		editsMantSerMenMaxTamCola.setSizeEdit(400);
		editsMantSerMenModControl = edits.create('editsMantSerMenModControl','editsMantSerMenModControl','Modo de Configuración:',1,152);
		editsMantSerMenModControl.setValidEmpty();
		editsMantSerMenModControl.setFieldFind(true);
		editsMantSerMenModControl.setSizeEdit(400);
		editsMantSerMenNomModems = edits.create('editsMantSerMenNomModems','editsMantSerMenNomModems','Nombre de Modems:',1,152);
		editsMantSerMenNomModems.setValidEmpty();
		editsMantSerMenNomModems.setFieldFind(true);
		editsMantSerMenNomModems.setSizeEdit(400);
		pcbMantSerMenRetTieSegundos = powerComboBox.create('pcbMantSerMenRetTieSegundos','pcbMantSerMenRetTieSegundos','Retardo de Tiempo (Seg.):',1,152);
		pcbMantSerMenRetTieSegundos.setValidEmpty();
		pcbMantSerMenRetTieSegundos.addEmptyOption();
		pcbMantSerMenRetTieSegundos.enableReadOnlyEditor();
		pcbMantSerMenRetTieSegundos.setWidthCombo(30);
		radioMantSerMenIniServidor1 = radio.create('radioMantSerMenIniServidor1','Manual',true,'gp1');
		radioMantSerMenIniServidor2 = radio.create('radioMantSerMenIniServidor2','Automatico',false,'gp1');
		/////////////////////////////////////////////////////////////CONTROL///////////////////////////////////////////////////////////////////
		editsMantSerMenTotConexion = edits.create('editsMantSerMenTotConexion','editsMantSerMenTotConexion','Total Conexiónes:',1,106,'normal');
		editsMantSerMenTotConexion.setValidEmpty();
		editsMantSerMenTotConexion.setFieldFind(true); 
		editsMantSerMenTotConexion.setSizeEdit(60);
		pcbMantSerMenModem = powerComboBox.create('pcbMantSerMenModem','pcbMantSerMenModem','Modem:',1,106);
		pcbMantSerMenModem.setValidEmpty();
		pcbMantSerMenModem.enableReadOnlyEditor();
		pcbMantSerMenModem.addEmptyOption();
	    pcbMantSerMenModem.setWidthCombo(140);
	    editsMantSerMenNumProceso = edits.create('editsMantSerMenNumProceso','editsMantSerMenNumProceso','Numero de Proceso:',1,122,'normal');
		editsMantSerMenNumProceso.setValidEmpty();
		editsMantSerMenNumProceso.setFieldFind(true); 
		editsMantSerMenNumProceso.setSizeEdit(60);
		imgButtonsMantSerCreConfiguracion = imgButtons.create('imgButtonsMantSerCreConfiguracion','Crear Configuración','crearconfigu.png');
		imgButtonsMantSerMenParProceso = imgButtons.create('imgButtonsMantSerMenParProceso','Parar Proceso','paraproceso.png');
		imgButtonsMantSerMenReiServidor = imgButtons.create('imgButtonsMantSerMenReiServidor','Reiniciar Servicio','reiniciarservidor.png');
		imgButtonsMantSerMenIniManual = imgButtons.create('imgButtonsMantSerMenIniManual','Inicio Manual','iniciomanual.png');
		imgButtonsMantSerSalir = imgButtons.create('imgButtonsMantSerSalir','Salir','salir.png');
		imgButtonsMantSerCreConfiguracion.setDisable();
		imgButtonsMantSerMenReiServidor.setDisable();
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsMantSerMensajeria_Init();
		this.tabsMantSerMensajeria_Init();
		this.createMWs(); 
		this.precargarSegundos();
	},
 	
	precargarSegundos : function() {
        for (var i = 1; i < 21; i++) 
        	pcbMantSerMenRetTieSegundos.addOptionAndSimpleValue(null, (i < 10) ? '0' + i : i, (i < 10) ? '0' + i : i);
	},
	
    setEvents : function(){
  		imgButtonsMantSerSalir.onClick("dialogsMantSerMensajeria.close()");
	  	imgButtonsMantConSalSalir.onClick("dialogsMantSerMensajeria.close()");	  	 	
    },
	
};	
	
