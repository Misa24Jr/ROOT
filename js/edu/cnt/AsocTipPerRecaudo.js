var dialogsAsocTipPerRecaudo = new Object();
var powerComboBoxAsocTipRecTipPersona = new Object();
var powerComboBoxAsocTipRecRecaudo = new Object();
var gridsAsocTipPerRecaudo = new Object();
var imgButtonsAsocTipPerRecAgregar = new Object();
var imgButtonsAsocTipPerRecEliminar = new Object();
var imgButtonsAsocTipPerRecLimpiar = new Object();
var imgButtonsAsocTipPerRecBuscar = new Object();
var imgButtonsAsocTipPerRecReporte = new Object();
var imgButtonsAsocTipPerRecSalir = new Object();
var mwdialogsAsocTipPerRecaudo = new Object();// minWindow

var AsocTipPerRecaudo = {
    windowName: 'AsocTipPerRecaudo',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsAsocTipPerRecaudo.isByClean()) 
            this.limpiar();
        dialogsAsocTipPerRecaudo.show();
    },
    
    hide: function(){
        dialogsAsocTipPerRecaudo.hide();
    },
    
    createMWs: function(){
        mwdialogsAsocTipPerRecaudo = desktop.addMinWindow('A.T.P.Recaudo','dialogsAsocTipPerRecaudo.show()','dialogsAsocTipPerRecaudo.hide()','dialogsAsocTipPerRecaudo.hide()');
        dialogsAsocTipPerRecaudo.setMinWindowEvent('mwdialogsAsocTipPerRecaudo.hide()','mwdialogsAsocTipPerRecaudo.disable()','mwdialogsAsocTipPerRecaudo.show()');
    },

    dialogsAsocTipPerRecaudo_Init : function(){
        dialogsAsocTipPerRecaudo.setMinimizeXY(0,0);
        dialogsAsocTipPerRecaudo.setCenterScreen();
        dialogsAsocTipPerRecaudo.addSpace(0,0,20);
        dialogsAsocTipPerRecaudo.addLn(1,1,1);
		dialogsAsocTipPerRecaudo.setHeightCell(1,1,10); 
        dialogsAsocTipPerRecaudo.addObjToDialog(powerComboBoxAsocTipRecTipPersona,2,1,24);
        dialogsAsocTipPerRecaudo.addObjToDialog(powerComboBoxAsocTipRecRecaudo,2,1,24);
		powerComboBoxAsocTipRecTipPersona.setWidthCombo(170);
		powerComboBoxAsocTipRecTipPersona.setFieldFind(true);
		powerComboBoxAsocTipRecRecaudo.setWidthCombo(336);
		powerComboBoxAsocTipRecRecaudo.setFieldFind(true);
		dialogsAsocTipPerRecaudo.adjAllMarginObj(2,1,20);
        dialogsAsocTipPerRecaudo.addLn(3,1,1);
		dialogsAsocTipPerRecaudo.setHeightCell(3,1,10);
        dialogsAsocTipPerRecaudo.addObjToDialog(gridsAsocTipPerRecaudo.getObject(),4,1);
		dialogsAsocTipPerRecaudo.addLn(5,1,1);
		dialogsAsocTipPerRecaudo.setHeightCell(5,1,12);
        dialogsAsocTipPerRecaudo.addObjToDialog(imgButtonsAsocTipPerRecAgregar,6,1);
        dialogsAsocTipPerRecaudo.addObjToDialog(imgButtonsAsocTipPerRecEliminar,6,1);
        dialogsAsocTipPerRecaudo.addObjToDialog(imgButtonsAsocTipPerRecLimpiar,6,1);
        dialogsAsocTipPerRecaudo.addObjToDialog(imgButtonsAsocTipPerRecBuscar,6,1);
		dialogsAsocTipPerRecaudo.addObjToDialog(imgButtonsAsocTipPerRecReporte,6,1);
		dialogsAsocTipPerRecaudo.addObjToDialog(imgButtonsAsocTipPerRecSalir,6,1); 
        imgButtonsAsocTipPerRecAgregar.setDimension(90,22);
        imgButtonsAsocTipPerRecEliminar.setDimension(90,22);
        imgButtonsAsocTipPerRecLimpiar.setDimension(90,22);
		imgButtonsAsocTipPerRecBuscar.setDimension(90,22);
        imgButtonsAsocTipPerRecReporte.setDimension(90,22);
		imgButtonsAsocTipPerRecSalir.setDimension(90,22);
        dialogsAsocTipPerRecaudo.adjAllMarginObj(6,1,15);
        dialogsAsocTipPerRecaudo.leftMarginObj(6,1,0,70);
    },
  
    gridsAsocTipPerRecaudo_Init : function(){
	    gridsAsocTipPerRecaudo.setFixColRow(false,true);
	    gridsAsocTipPerRecaudo.addTitleVectorX(['Tipo de Persona','Recaudo','idpersona','idrecaudo']);
	    gridsAsocTipPerRecaudo.showData();
	    gridsAsocTipPerRecaudo.setSizeCol(1,250);
	    gridsAsocTipPerRecaudo.setSizeCol(2,510);
	    gridsAsocTipPerRecaudo.setSizeCol(3,0);
	    gridsAsocTipPerRecaudo.setSizeCol(4,0);
	    gridsAsocTipPerRecaudo.hideCol(3);
	    gridsAsocTipPerRecaudo.hideCol(4);
    },

    create : function(){
    	dialogsAsocTipPerRecaudo = dialogs.create('dialogsAsocTipPerRecaudo',0,0,804,427,'ASIGNAR RECAUDO A TIPO DE PERSONA');
    	powerComboBoxAsocTipRecTipPersona = powerComboBox.create('powerComboBoxAsocTipRecTipPersona','powerComboBoxAsocTipRecTipPersona','Tipo de Persona (*):',1,118);
		powerComboBoxAsocTipRecTipPersona.enableReadOnlyEditor();
		powerComboBoxAsocTipRecTipPersona.addEmptyOption();
		powerComboBoxAsocTipRecTipPersona.setValidEmpty();
		powerComboBoxAsocTipRecRecaudo = powerComboBox.create('powerComboBoxAsocTipRecRecaudo','powerComboBoxAsocTipRecRecaudo','Recaudo (*):',1,75);
	    powerComboBoxAsocTipRecRecaudo.enableReadOnlyEditor();
	    powerComboBoxAsocTipRecRecaudo.addEmptyOption();
		powerComboBoxAsocTipRecRecaudo.setValidEmpty();
		gridsAsocTipPerRecaudo = grids.create('gridsAsocTipPerRecaudo',15,4);
		imgButtonsAsocTipPerRecAgregar = imgButtons.create('imgButtonsAsocTipPerRecAgregar','Agregar','ok.png');
		imgButtonsAsocTipPerRecEliminar = imgButtons.create('imgButtonsAsocTipPerRecEliminar','Eliminar','eliminar.png');
		imgButtonsAsocTipPerRecEliminar.setDisable();
		imgButtonsAsocTipPerRecLimpiar = imgButtons.create('imgButtonsAsocTipPerRecLimpiar','Limpiar','limpiar.png');
		imgButtonsAsocTipPerRecBuscar = imgButtons.create('imgButtonsMasntUsuBuscar','Buscar','icono_buscar.png');
		imgButtonsAsocTipPerRecReporte = imgButtons.create('imgButtonsAsocTipPerRecReporte','Reporte','print.png');
		imgButtonsAsocTipPerRecSalir = imgButtons.create('imgButtonsAsocTipPerRecSalir','Salir','salir.png');
    },

    init : function(){
    	this.create();
    	this.setEvents();
    	this.dialogsAsocTipPerRecaudo_Init();
    	this.gridsAsocTipPerRecaudo_Init();
    	this.createMWs();
    },

    limpiarCoreUpdate : function() {
  		powerComboBoxAsocTipRecRecaudo.setSelectedIndex(0); 	
  		gridsAsocTipPerRecaudo.clean();
  		dialogsAsocTipPerRecaudo.setMsg("");
		imgButtonsAsocTipPerRecAgregar.setEnable();
		dlgWait.hide();
		this.buscar();
    },
  
    limpiar : function(){
  		powerComboBoxAsocTipRecRecaudo.setSelectedIndex(0); 	
  		gridsAsocTipPerRecaudo.clean();
  		dialogsAsocTipPerRecaudo.setMsg("");
		imgButtonsAsocTipPerRecAgregar.setEnable();
		imgButtonsAsocTipPerRecReporte.setDisable();
		imgButtonsAsocTipPerRecEliminar.setDisable();	
		imgButtonsAsocTipPerRecEliminar.setDisable();
		Tool.cnnSrv('MantObject', 'getAsocTipPerRecaudoInit', this.windowName + '.loadInit()');
  	},
	 
  	loadInit: function(){
  		Tool.loadPowerComboData(dialogsAsocTipPerRecaudo, powerComboBoxAsocTipRecTipPersona, 0, 1, json('getMantTipPersona'));
  		Tool.loadPowerComboData(dialogsAsocTipPerRecaudo, powerComboBoxAsocTipRecRecaudo, 0, 1, json('getRecaudosAlu'));
  	},
  	  
    setData : function(){
		if (gridsAsocTipPerRecaudo.getDataCell(1) != ""){
			powerComboBoxAsocTipRecTipPersona.findOption(gridsAsocTipPerRecaudo.getDataCell(3));
			powerComboBoxAsocTipRecRecaudo.findOption(gridsAsocTipPerRecaudo.getDataCell(4));
			imgButtonsAsocTipPerRecAgregar.setDisable();
			imgButtonsAsocTipPerRecEliminar.setEnable();
		}
	},

	setEvents : function(){
		powerComboBoxAsocTipRecTipPersona.onChange("imgButtonsAsocTipPerRecAgregar.setEnable();imgButtonsAsocTipPerRecEliminar.setDisable();");
		powerComboBoxAsocTipRecRecaudo.onChange("imgButtonsAsocTipPerRecAgregar.setEnable();imgButtonsAsocTipPerRecEliminar.setDisable();");
		gridsAsocTipPerRecaudo.onClickCells(this.windowName+".setData()");
		imgButtonsAsocTipPerRecAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsAsocTipPerRecEliminar.onClick(this.windowName+".coreUpdate('eliminar')"); 	
		imgButtonsAsocTipPerRecBuscar.onClick(this.windowName+".buscar()"); 	
		imgButtonsAsocTipPerRecLimpiar.onClick('AsocTipPerRecaudo.limpiar()');  	
		imgButtonsAsocTipPerRecReporte.onClick('AsocTipPerRecaudo.reporte()');  	
		imgButtonsAsocTipPerRecSalir.onClick('dialogsAsocTipPerRecaudo.close()');	  	 	
	},
  
	buscar : function(){
		gridsAsocTipPerRecaudo.clean(); 
		Tool.getGridData("MantObject", "get" + this.windowName, dialogsAsocTipPerRecaudo, gridsAsocTipPerRecaudo, 'imgButtonsAsocTipPerRecReporte.setEnable()', powerComboBoxAsocTipRecTipPersona, powerComboBoxAsocTipRecTipPersona, powerComboBoxAsocTipRecRecaudo, powerComboBoxAsocTipRecRecaudo);
	},
	
	coreUpdate : function(methodName){
		var rlx = xmlStructs.createRecordList("rlx");

  		if (powerComboBoxAsocTipRecTipPersona.valid(dialogsAsocTipPerRecaudo))
			if (powerComboBoxAsocTipRecRecaudo.valid(dialogsAsocTipPerRecaudo)){ 					
				rlx.add('reg',powerComboBoxAsocTipRecTipPersona);
				rlx.add('reg',powerComboBoxAsocTipRecRecaudo);
				Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()', rlx);
			} 
	},
	
  	reporte : function() {
        ///////////////////////////////////////ARREGLO DE DATA/////////////////////////////////////////////////////////////////////////////////////////	
        var jd = json('getAsocTipPerRecaudo');
    	var data = new Array();
    	data[0] = jd.data[0];
    	data[1] = jd.data[1];
        ///////////////////////////////////////PARAMETROS DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
        rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();
        ///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
        rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addHeadTitle('LISTADO DE RECAUDOS ASOCIADOS A LOS TIPOS DE PERSONAS',true);
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),8,'courier','bold');
        //************************ TABLE ***************************
        rep.addTable('tablaRepRecTipPersona',['TIPO DE PERSONA','RECAUDOS'],398,145);
        rep.setSizeColumnArray([207,590]);
        rep.addMultiArrayData('tablaRepRecTipPersona', data);
        rep.setAlignData(['left','left']);
        rep.setTotalRowTable(25);
        rep.setHeightRow(32);
        ///////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),10,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
        rep.render();
        Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
        Reporte.create();
        dialogsReporte.showModal();
    },
};
