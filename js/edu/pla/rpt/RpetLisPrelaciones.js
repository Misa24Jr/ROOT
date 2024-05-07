var dialogsRpetLisPrelaciones = new Object();
var powerComboBoxReptLisPreOrganizacion = new Object();
var powerComboBoxReptLisPreSuborganizacion = new Object();
var powerComboBoxReptLisPreCarrera = new Object();
var editsReptLisPrePensum = new Object();
var imgButtonsReptLisPreProcesar = new Object();
var imgButtonsReptLisPreSalir = new Object();
var mw_RpetLisPrelaciones = new Object();//minWindow

var RpetLisPrelaciones = {
    windowName: 'RpetLisPrelaciones',
    isCreate: false,
	idPensum : 0,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRpetLisPrelaciones.isByClean()) {
        	powerComboBoxReptLisPreOrganizacion.setSelectedIndex(0); 		
			powerComboBoxReptLisPreSuborganizacion.setSelectedIndex(0); 		
  			powerComboBoxReptLisPreCarrera.setSelectedIndex(0); 		
  			editsReptLisPrePensum.setValue("");
			Tool.cnnSrv('MantObject', 'getMantOrganizacion', this.windowName + '.loadDataInit()');
		}    
        dialogsRpetLisPrelaciones.show();    
    },
     
    loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRpetLisPrelaciones, powerComboBoxReptLisPreOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsRpetLisPrelaciones, powerComboBoxReptLisPreOrganizacion, powerComboBoxReptLisPreSuborganizacion, powerComboBoxReptLisPreCarrera, "RpetLisPrelaciones.getPensumActivo()");
    },

    getPensumActivo: function() {
    	var rlx = xmlStructs.createRecordList("rlx");
    	
    	rlx.add('reg',powerComboBoxReptLisPreCarrera.setModeReturnGetText(2));
    	Tool.cnnSrv('MantObject', 'getAsociarPensumActivo', this.windowName + '.loadDataPensumActivo()', rlx);
    },
    
    loadDataPensumActivo: function() {
    	this.idPensum = json('getAsociarPensumActivo').data[0];
    	Tool.loadEditData(dialogsRpetLisPrelaciones, editsReptLisPrePensum, 1, json('getAsociarPensumActivo'));   	
    },
    
    hide: function(){
        dialogsRpetLisPrelaciones.hide();
    },
    createMWs: function(){
        mwRpetLisPrelaciones = desktop.addMinWindow('L.Prelaciones', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRpetLisPrelaciones.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

  dialogsRpetLisPrelaciones_Init : function(){
        dialogsRpetLisPrelaciones.setMinimizeXY(0,0);
        dialogsRpetLisPrelaciones.setCenterScreen();
        dialogsRpetLisPrelaciones.addSpace(0,0,20);
        dialogsRpetLisPrelaciones.addLn(1,1,1);
		dialogsRpetLisPrelaciones.setHeightCell(1,1,10);
        dialogsRpetLisPrelaciones.addObjToDialog(powerComboBoxReptLisPreOrganizacion,2,1,24);
        dialogsRpetLisPrelaciones.addObjToDialog(powerComboBoxReptLisPreSuborganizacion,2,1,24);
        dialogsRpetLisPrelaciones.addObjToDialog(powerComboBoxReptLisPreCarrera,3,1,24);
        dialogsRpetLisPrelaciones.adjAllMarginObj(2,1,20);
        dialogsRpetLisPrelaciones.addObjToDialog(editsReptLisPrePensum,3,1,24);
        editsReptLisPrePensum.setSizeEdit(149);
        editsReptLisPrePensum.readOnly(true);
		dialogsRpetLisPrelaciones.adjAllMarginObj(3,1,20);
        dialogsRpetLisPrelaciones.addLn(4,1,1);
		dialogsRpetLisPrelaciones.setHeightCell(4,1,10);
        dialogsRpetLisPrelaciones.addObjToDialog(imgButtonsReptLisPreProcesar,5,1);
    	imgButtonsReptLisPreProcesar.setDimension(90,22);
        dialogsRpetLisPrelaciones.addObjToDialog(imgButtonsReptLisPreSalir,5,1);
    	imgButtonsReptLisPreSalir.setDimension(90,22);
        dialogsRpetLisPrelaciones.adjAllMarginObj(5,1,30);
        dialogsRpetLisPrelaciones.leftMarginObj(5,1,0,165);
  },
 
  create : function() {
      dialogsRpetLisPrelaciones = dialogs.create('dialogsRpetLisPrelaciones',0,0,591,104,'LISTADO PRELACIONES');
	  dialogsRpetLisPrelaciones.setAdjY(110);
      powerComboBoxReptLisPreOrganizacion = powerComboBox.create('powerComboBoxReptLisPreOrganizacion','powerComboBoxReptLisPreOrganizacion','Organización (+):',1,105);
	  powerComboBoxReptLisPreOrganizacion.enableReadOnlyEditor();
      powerComboBoxReptLisPreOrganizacion.addEmptyOption();
      powerComboBoxReptLisPreOrganizacion.setValidEmpty();
	  powerComboBoxReptLisPreSuborganizacion = powerComboBox.create('powerComboBoxReptLisPreSuborganizacion','powerComboBoxReptLisPreSuborganizacion','Suborganización (^):',1,126);
	  powerComboBoxReptLisPreSuborganizacion.enableReadOnlyEditor();
      powerComboBoxReptLisPreSuborganizacion.addEmptyOption();
      powerComboBoxReptLisPreSuborganizacion.setValidEmpty();
	  powerComboBoxReptLisPreCarrera = powerComboBox.create('powerComboBoxReptLisPreCarrera','powerComboBoxReptLisPreCarrera','Carrera (^):',1,105);
	  powerComboBoxReptLisPreCarrera.enableReadOnlyEditor();
      powerComboBoxReptLisPreCarrera.addEmptyOption();
      powerComboBoxReptLisPreCarrera.setValidEmpty();
      editsReptLisPrePensum = edits.create('editsMantAsoMatPenPensum','editsMantAsoMatPenPensum','Pensum :',1,126,'normal');
      editsReptLisPrePensum.setValidEmpty();
      imgButtonsReptLisPreProcesar = imgButtons.create('imgButtonsReptLisPreProcesar','Reporte','print.png');
      imgButtonsReptLisPreSalir = imgButtons.create('imgButtonsReptLisPreSalir','Salir','salir.png');
  },

  init : function(){
    this.create();
    this.setEvents();
  	this.dialogsRpetLisPrelaciones_Init();
  	this.createMWs();
  },

  setEvents: function(){
        imgButtonsReptLisPreProcesar.onClick(this.windowName + ".coreUpdate()");
        imgButtonsReptLisPreSalir.onClick("dialogsRpetLisPrelaciones.close()");
		powerComboBoxReptLisPreOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxReptLisPreSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		powerComboBoxReptLisPreCarrera.onChange(this.windowName + ".resetElements('carr')");
    },
	
	resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxReptLisPreSuborganizacion);
			Tool.rstPwrCmb(powerComboBoxReptLisPreCarrera);
			editsReptLisPrePensum.setValue("");
			if (powerComboBoxReptLisPreOrganizacion.getOption() != "")
				Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRpetLisPrelaciones, powerComboBoxReptLisPreSuborganizacion, 1, 2, powerComboBoxReptLisPreOrganizacion);
		}
		else if (element == 'suborg') {
			Tool.rstPwrCmb(powerComboBoxReptLisPreCarrera);
			editsReptLisPrePensum.setValue("");
			if (powerComboBoxReptLisPreSuborganizacion.getOption() != "")
				Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRpetLisPrelaciones, powerComboBoxReptLisPreCarrera, -1, 3, powerComboBoxReptLisPreSuborganizacion);		
		}
		else if (element == 'carr') {
			editsReptLisPrePensum.setValue("");
			if (powerComboBoxReptLisPreCarrera.getOption() != "")
				this.getPensumActivo();
		}
    },
    
	reporte : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
        rep.setPositionIcon(1090,108);
        rep.setNoRepeatHead();
        rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addHeadTitle('LISTADO DE PRELACIONES',true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','normal');
        rep.addBar(0,152,1128,220,rep.getRGBAObj(187,196,238,0.8),false);
        rep.addLine(0,146,1128,146,rep.getRGBAObj(210,210,210,1),1,false);
        rep.addLine(0,226,1128,226,rep.getRGBAObj(210,210,210,1),1,false); 
		rep.addText(20, 180,'ORGANIZACIÓN:',false);
        rep.addText(125, 180,powerComboBoxReptLisPreOrganizacion.getValue(),false);
		rep.addText(400, 180, 'SUBORGANIZACIÓN:',false);
		rep.addText(532, 180,powerComboBoxReptLisPreSuborganizacion.getValue(),false);
		rep.addText(20, 200, 'ESCUELA:',false);
		rep.addText(125, 200,powerComboBoxReptLisPreCarrera.getValue(),false);
		rep.addText(400, 200, 'PENSUM:',false);
		rep.addText(532, 200,editsReptLisPrePensum.getValue(),false);
		//////////////////////////////////////////TABLA DE DATOS///////////////////////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
        rep.addTable('tablaLisPrelaciones',['Materia Prelante','Materia Prelada','C.M. Prelante','C.M. Prelada','Tipo Prelación','Nº Horas'],560,238);
        rep.setSizeColumnArray([332,332,125,125,125,88]);
        rep.setAlignData(['left','left','center','center','left','center']); 
        rep.addJsonData('tablaLisPrelaciones','getMantPrelacion',[0,1,5,6,2,3]);		
        //////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	coreUpdate: function(methodName){
        var rlx = xmlStructs.createRecordList("rlx");

		if (powerComboBoxReptLisPreOrganizacion.valid(dialogsRpetLisPrelaciones)) {
			rlx.addInt('reg', this.idPensum);
			rlx.add('reg', new MiniDataSet(-1, 'string', true));
			rlx.add('reg', new MiniDataSet(-1, 'string', true));
			rlx.add('reg', new MiniDataSet(-1, 'string', true));
			rlx.add('reg', new MiniDataSet(-1, 'string', true));
			Tool.cnnSrv('MantObject', 'getMantPrelacion', this.windowName + '.reporte()', rlx);
		}
    }
};