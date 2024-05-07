var dialogsRepoLisAluSalFav = new Object();
var editsRepoLisAluSalFavCedula = new Object();
var editsRepoLisAluSalFavNombre = new Object();
var editsRepoLisAluSalFavApellido = new Object();
var pcbRepoLisAluSalFavNivAcademico = new Object();
var pcbRepoLisAluSalFavPeriodo = new Object();
var imgButtonsRepoLisAluSalFavReporte = new Object();
var imgButtonsRepoLisAluSalFavBuscar = new Object();
var imgButtonsRepoLisAluSalFavSalir = new Object();
var mwRepoLisAluSalFav = new Object();// minWindow

var RepoLisAluSalFav = {
    windowName : 'RepoLisAluSalFav',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        
        if (dialogsRepoLisAluSalFav.isByClean())
			this.limpiar();			
		dialogsRepoLisAluSalFav.show();
	},
	
    hide: function(){
        dialogsRepoLisAluSalFav.hide();
    },
    createMWs: function(){
    	mwRepoLisAluSalFav = desktop.addMinWindow('Saldo Estudiante', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoLisAluSalFav.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsRepoLisAluSalFav_Init : function(){
        dialogsRepoLisAluSalFav.setMinimizeXY(0,0);
        dialogsRepoLisAluSalFav.setCenterScreen();
        dialogsRepoLisAluSalFav.addSpace(0,0,20);
        dialogsRepoLisAluSalFav.addLn(1,1,1);
		dialogsRepoLisAluSalFav.setHeightCell(1,1,13);
		dialogsRepoLisAluSalFav.addObjToDialog(pcbRepoLisAluSalFavNivAcademico,2,1,24);
		dialogsRepoLisAluSalFav.addObjToDialog(pcbRepoLisAluSalFavPeriodo,2,1,24);
		dialogsRepoLisAluSalFav.adjAllMarginObj(2,1,15);
		dialogsRepoLisAluSalFav.addObjToDialog(editsRepoLisAluSalFavCedula,3,1,24);
		dialogsRepoLisAluSalFav.addObjToDialog(editsRepoLisAluSalFavNombre,3,1,24);
		dialogsRepoLisAluSalFav.addObjToDialog(editsRepoLisAluSalFavApellido,3,1,24);
		dialogsRepoLisAluSalFav.adjAllMarginObj(3,1,15);
        dialogsRepoLisAluSalFav.addLn(4,1,1);
		dialogsRepoLisAluSalFav.setHeightCell(4,1,8);
		dialogsRepoLisAluSalFav.addObjToDialog(imgButtonsRepoLisAluSalFavReporte,5,1);
		dialogsRepoLisAluSalFav.addObjToDialog(imgButtonsRepoLisAluSalFavBuscar,5,1);
        dialogsRepoLisAluSalFav.addObjToDialog(imgButtonsRepoLisAluSalFavSalir,5,1);
        dialogsRepoLisAluSalFav.adjAllMarginObj(5,1,30);
        dialogsRepoLisAluSalFav.leftMarginObj(5,1,0,220); 
    },
  
    create : function(){
    	dialogsRepoLisAluSalFav = dialogs.create('dialogsRepoLisAluSalFav',0,0,813,106,'SALDO A FAVOR DEL ESTUDIANTE');
    	dialogsRepoLisAluSalFav.setAdjY(80);
    	pcbRepoLisAluSalFavNivAcademico = powerComboBox.create('pcbRepoLisAluSalFavNivAcademico','pcbRepoLisAluSalFavNivAcademico','Nivel Academico (+):',1,122);
    	pcbRepoLisAluSalFavNivAcademico.enableReadOnlyEditor();
    	pcbRepoLisAluSalFavNivAcademico.addEmptyOption();
    	pcbRepoLisAluSalFavNivAcademico.setValidEmpty();
    	pcbRepoLisAluSalFavPeriodo = powerComboBox.create('pcbRepoLisAluSalFavPeriodo','pcbRepoLisAluSalFavPeriodo','Periodo (+):',1,101);
    	pcbRepoLisAluSalFavPeriodo.enableReadOnlyEditor();
    	pcbRepoLisAluSalFavPeriodo.addEmptyOption();
    	pcbRepoLisAluSalFavPeriodo.setValidEmpty();
    	editsRepoLisAluSalFavCedula = edits.create('editsRepoLisAluSalFavCedula','editsRepoLisAluSalFavCedula','C.i. (*):',1,122,'normal');
    	editsRepoLisAluSalFavCedula.setValidInteger();
      	editsRepoLisAluSalFavCedula.setFieldFind(true);
		editsRepoLisAluSalFavCedula.setSizeEdit(149);
      	editsRepoLisAluSalFavNombre = edits.create('editsRepoLisAluSalFavNombre','editsRepoLisAluSalFavNombre','Nombre (*):',1,101,'normal');
      	editsRepoLisAluSalFavNombre.setValidEmpty();
      	editsRepoLisAluSalFavNombre.setFieldFind(true);
      	editsRepoLisAluSalFavNombre.setSizeEdit(149); 
      	editsRepoLisAluSalFavApellido = edits.create('editsRepoLisAluSalFavApellido','editsRepoLisAluSalFavApellido','Apellido (*):',1,71,'normal');
      	editsRepoLisAluSalFavApellido.setValidEmpty();
      	editsRepoLisAluSalFavApellido.setFieldFind(true);
      	editsRepoLisAluSalFavApellido.setSizeEdit(149);
      	imgButtonsRepoLisAluSalFavReporte = imgButtons.create('imgButtonsRepoLisAluSalFavReporte','Reporte','print.png');
      	imgButtonsRepoLisAluSalFavBuscar = imgButtons.create('imgButtonsRepoLisAluSalFavBuscar', 'Buscar', 'icono_buscar.png');
      	imgButtonsRepoLisAluSalFavSalir = imgButtons.create('imgButtonsRepoLisAluSalFavSalir','Salir','salir.png');
      	imgButtonsRepoLisAluSalFavReporte.setDimension(90,22);
      	imgButtonsRepoLisAluSalFavBuscar.setDimension(90,22);
      	imgButtonsRepoLisAluSalFavSalir.setDimension(90,22);
	},

	init : function(){
		this.create();
		this.setEvents(); 
		this.dialogsRepoLisAluSalFav_Init();
		this.createMWs();
	},
	
	limpiarFind : function(ix) {
		editsRepoLisAluSalFavCedula.hideId = -1;

  		switch (ix) {
		case 1: 
			editsRepoLisAluSalFavNombre.setValue("");
			editsRepoLisAluSalFavApellido.setValue("");  		
			break;
		case 2: 
			editsRepoLisAluSalFavCedula.setValue("");
			editsRepoLisAluSalFavApellido.setValue("");  		
			break;
		default:
			editsRepoLisAluSalFavCedula.setValue("");
		    editsRepoLisAluSalFavNombre.setValue("");
			break;
		} 
  	},

	buscar: function() {
		if (editsRepoLisAluSalFavCedula.getValue() != '' || editsRepoLisAluSalFavNombre.getValue() != '' || editsRepoLisAluSalFavApellido.getValue() != '') {
			ResuBusqueda.setObjectExtFnc(editsRepoLisAluSalFavCedula, editsRepoLisAluSalFavNombre, editsRepoLisAluSalFavApellido);
			Tool.getGridData('MantObject', 'getMantPersTodas', dialogsRepoLisAluSalFav, gridsResuBusqueda, 'ResuBusqueda', editsRepoLisAluSalFavCedula, editsRepoLisAluSalFavCedula, editsRepoLisAluSalFavNombre, editsRepoLisAluSalFavNombre, editsRepoLisAluSalFavApellido, editsRepoLisAluSalFavApellido);
		}
		else {
			Alert.show('Debe ingresar al menos: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
	},
	
	limpiar : function() {
		editsRepoLisAluSalFavCedula.hideId = -1;
		editsRepoLisAluSalFavCedula.setValue(""); 
  		editsRepoLisAluSalFavNombre.setValue(""); 
  		editsRepoLisAluSalFavApellido.setValue(""); 
  		Tool.rstPwrCmb(pcbRepoLisAluSalFavPeriodo);
  		dialogsRepoLisAluSalFav.setMsg("");
  		Tool.cnnSrv('MantObject', 'getMantNivAcademico', this.windowName + '.loadDataInit()');	
  	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoLisAluSalFav, pcbRepoLisAluSalFavNivAcademico, 0, 1, json('getMantNivAcademico'));
		pcbRepoLisAluSalFavNivAcademico.setSelectedIndex(1);
		Tool.getPowerComboDataFnc('pcbRepoLisAluSalFavPeriodo.setSelectedIndex(1)','MantObject', 'getPeriodoXNivelAcad', dialogsRepoLisAluSalFav, pcbRepoLisAluSalFavPeriodo, 0, 1, pcbRepoLisAluSalFavNivAcademico);
	},
 
	setEvents: function(){
		pcbRepoLisAluSalFavNivAcademico.onChange("Tool.getPowerComboDataFnc('pcbRepoLisAluSalFavPeriodo.setSelectedIndex(1)','MantObject', 'getPeriodoXNivelAcad', dialogsRepoLisAluSalFav, pcbRepoLisAluSalFavPeriodo, 0, 1, pcbRepoLisAluSalFavNivAcademico)");
		editsRepoLisAluSalFavCedula.onEnter(this.windowName + ".buscar()");
  		editsRepoLisAluSalFavCedula.onChange(this.windowName + ".limpiarFind(1)");
  		editsRepoLisAluSalFavNombre.onEnter(this.windowName + ".buscar()");
  		editsRepoLisAluSalFavNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsRepoLisAluSalFavApellido.onEnter(this.windowName + ".buscar()");
  		editsRepoLisAluSalFavApellido.onChange(this.windowName + ".limpiarFind(3)");
  		imgButtonsRepoLisAluSalFavReporte.onClick(this.windowName + ".coreUpdate()");
  		imgButtonsRepoLisAluSalFavBuscar.onClick(this.windowName + ".buscar()");
        imgButtonsRepoLisAluSalFavSalir.onClick('dialogsRepoLisAluSalFav.close()');
    },
	
	reporte : function(){
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
   	   	rep.setPositionIcon(756,4);
   	   	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		rep.addBar(0,0,1128,35,rep.getRGBAObj(210,200,200,0.9),false);
		rep.addText(262, 23,'SALDO A FAVOR DEL ESTUDIANTE',false);
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),9,'helvetica','normal');
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,38,1128,79,rep.getRGBAObj(187,196,238,0.8),false);
        rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),9,'helvetica','normal');
		rep.addText(20, 65,'NIVEL ACADEMICO: '+pcbRepoLisAluSalFavNivAcademico.getOption(),false);
		rep.addText(300, 65, 'PERIODO: '+pcbRepoLisAluSalFavPeriodo.getOption(),false);
        //************************ TABLE ***************************
        rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 9, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);		
		rep.addTable('tablaRepoSalFavAlumno',['Cedula','Apellidos','Nombres','Nº Documento','Fecha','Monto'],397,83);
		rep.setTotalRowTable(35);
		rep.setHeightRow(18);
        rep.setSizeColumnArray([86,205,205,100,100,102]);
        rep.setAlignData(['right','left','left','center','center','right']); 
        rep.addJsonData('tablaRepoSalFavAlumno','getRepoSaldoFavor',[0,1,2,3,4,5]);
		////////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
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
         
		if (pcbRepoLisAluSalFavPeriodo.valid(dialogsRepoLisAluSalFav)) {
			rlx.add('reg', pcbRepoLisAluSalFavPeriodo);
			rlx.addInt('reg', editsRepoLisAluSalFavCedula.hideId, true);
			rlx.addInt('reg', editsRepoLisAluSalFavCedula.hideId, true);
			rlx.addInt('reg', editsRepoLisAluSalFavCedula.hideId, true);
			Tool.cnnSrv('ReportObject', 'getRepoSaldoFavor', this.windowName + '.reporte()', rlx); 
		}
	}
};