var dialogsInstProAprendizaje = new Object();
var powerComboBoxInsProAprendizaje = new Object();
var imgButtonsInstProAprBuscar = new Object();
var imgButtonsReptGenIniBasSalir = new Object();
var mwInstProAprendizaje = new Object();// minWindow

var InstProAprendizaje = {
    windowName: 'InstProAprendizaje',
    isCreate: false,
	
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsInstProAprendizaje.isByClean()) 
            this.limpiar();
        dialogsInstProAprendizaje.show();
    },
    
    hide: function(){
        dialogsInstProAprendizaje.hide();
    },
    
    createMWs: function(){
        mwInstProAprendizaje = desktop.addMinWindow('Instructivos', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsInstProAprendizaje.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsInstProAprendizaje_Init: function(){
        dialogsInstProAprendizaje.setMinimizeXY(0, 0);
        dialogsInstProAprendizaje.setCenterScreen();    
        dialogsInstProAprendizaje.addSpace(1, 0, 20);
        dialogsInstProAprendizaje.addLn(1, 1, 1);
		dialogsInstProAprendizaje.setHeightCell(1,1,18);  
		var c1 = container.create("c1",'Datos Generales', 2);
		c1.setDimension(744,78);
		c1.setMarginLeftBarTitle(324);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#1e1e1e');
		c1.addObject(powerComboBoxInsProAprendizaje, 35,70);
		powerComboBoxInsProAprendizaje.setWidthCombo(593);
		powerComboBoxInsProAprendizaje.addOptionAndSimpleValue(null,'Guia para elaboración de Proyecto de Aprendizaje en Educ@','guia_crear_proyecto_aprendizaje_docentes_primarias_educ@.pdf');
		powerComboBoxInsProAprendizaje.addOptionAndSimpleValue(null,'Guia para elaborar Boletines en Educ@','guia_crear_boletin_docentes_primarias_educ@.pdf');
		//powerComboBoxInsProAprendizaje.addOptionAndSimpleValue(null,'Calendario Escolar DCA-2015-2016','Calendario_Escolar_Dca15_16.pdf');
		//powerComboBoxInsProAprendizaje.addOptionAndSimpleValue(null,'Tips de Proyectos de Aprendizaje','mubsistema.pdf');
        powerComboBoxInsProAprendizaje.addOptionAndSimpleValue(null,'Modelo Proyecto de Aprendizaje','modelo_proyecto_aprendizaje.pdf');
        powerComboBoxInsProAprendizaje.addOptionAndSimpleValue(null,'Currículo del Subsistema de Educación Primaria Bolivariana','Zubsistema.pdf');
		dialogsInstProAprendizaje.addObjToDialog(c1, 2, 1);
		dialogsInstProAprendizaje.addLn(3, 1, 1);
		dialogsInstProAprendizaje.setHeightCell(3,1,12);
        dialogsInstProAprendizaje.addObjToDialog(imgButtonsInstProAprBuscar, 4, 1);
        dialogsInstProAprendizaje.addObjToDialog(imgButtonsReptGenIniBasSalir, 4, 1);
        imgButtonsInstProAprBuscar.setDimension(90, 22);
        imgButtonsReptGenIniBasSalir.setDimension(90, 22);
        dialogsInstProAprendizaje.adjAllMarginObj(4, 1, 30);
        dialogsInstProAprendizaje.leftMarginObj(4, 1, 0, 266);
    },
    
    mensajesDlg : function()
    {
      var txt = powerComboBoxInsProAprendizaje.getText();
      if(txt=='Calendario_Escolar_Dca15_16.pdf');	
      if(txt=='Proyecto_Situacion_de_Aprendizaje.pdf');
      if(txt=='modelo_proyecto_aprendizaje.pdf');
      if(txt=='curriculo_bolivariano_basica.pdf');
      if(txt=='Subsistema.pdf');
      imgButtonsInstProAprBuscar.setEnable();
    },
    
    create: function(){
        dialogsInstProAprendizaje = dialogs.create('dialogsInstProAprendizaje', 0, 0, 785, 143, 'INSTRUCTIVO PROYECTOS DE APRENDIZAJE Y AYUDAS');
        dialogsInstProAprendizaje.setAdjY(60);
        powerComboBoxInsProAprendizaje = powerComboBox.create('powerComboBoxInsProAprendizaje','powerComboBoxInsProAprendizaje','Tipo de Reporte:',1,99);
        powerComboBoxInsProAprendizaje.setValidEmpty();
        powerComboBoxInsProAprendizaje.enableReadOnlyEditor();
        powerComboBoxInsProAprendizaje.addEmptyOption();
		memoInstProAprendizaje = memo.create('memoCreaBolResumen','',1,0,0);
        memoInstProAprendizaje.setValidEmpty(); 
        imgButtonsInstProAprBuscar = imgButtons.create('imgButtonsInstProAprBuscar', 'Buscar', 'icono_buscar.png');
        imgButtonsReptGenIniBasSalir = imgButtons.create('imgButtonsReptGenIniBasSalir', 'Salir', 'salir.png');
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsInstProAprendizaje_Init();
        this.createMWs();
    },
    
    showFile : function()
    {	
      window.open('help/'+powerComboBoxInsProAprendizaje.getText(),'_blank');
      imgButtonsInstProAprBuscar.setEnable(); 
    },
    
    setEvents: function(){
    	imgButtonsInstProAprBuscar.onClick(this.windowName +'.showFile()');
        imgButtonsReptGenIniBasSalir.onClick("dialogsInstProAprendizaje.close();");
        powerComboBoxInsProAprendizaje.onChange(this.windowName + ".mensajesDlg()");
        
    },

	limpiar : function() {
  		dialogsInstProAprendizaje.setMsg("");
  		powerComboBoxInsProAprendizaje.setSelectedIndex(0);
		imgButtonsInstProAprBuscar.setDisable();
  	}
};

