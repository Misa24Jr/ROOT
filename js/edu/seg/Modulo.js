include('js/com/iconBar');
include('js/com/Horario');
include('js/com/Excel');
include('js/com/AcordeonAttrib');
include('js/com/Acordeon');
include('js/com/CanvasFactory');
include('js/com/CanvasBuilder');
include('js/com/Form');
include('js/com/Printer');
include('js/com/Report');
include('js/com/Chart');
include('js/com/Graph');
include('js/com/tinymce/tinymce.min');
include('js/com/RichEdit');
include('js/com/ReportBuilder');
include('js/com/Audio');
include('js/com/PanelButton');
include('js/com/StringBuffer');
include('js/com/Panel');
include('js/com/panels');
include('js/com/imgButtons');
include('js/com/edits');
include('js/com/selects');
include('js/com/attrib');
include('js/com/wait');
include('js/com/dialogs');
include('js/com/labels');
include('js/com/xmlStructs');
include('js/com/xmlHttpReq');
include('js/com/Tool');
include('js/com/powerComboBox');
include('js/com/grids');
include('js/com/images');
include('js/com/desktop');
include('js/com/Alert');
include('js/com/calendars');
include('js/com/confirmDlg');
include('js/com/DlgErr');
include('js/com/checkBox');
include('js/com/hint');
include('js/com/memo');
include('js/com/tables');
include('js/com/treeviews');
include('js/com/Reporte');
include('js/com/ReporteCSV');
include('js/com/tabs');
include('js/com/popupmenu');

include('js/com/buttons');
include('js/com/container');
include('js/com/customGrid');
include('js/com/exchangeList');
include('js/com/gridpanels');
include('js/com/iconBar');
include('js/com/menues');
include('js/com/radio');
include('js/com/selectList');
include('js/com/SinglePanel');
include('js/com/validar');
include('js/com/checkBox');
include('js/com/JsonProcess');
include('js/com/ListGrid');
include('js/com/PanelBuilder');
include('js/com/Book');
include('js/com/Sheet');
include('js/com/Collapser');
include('js/com/ContainerCollapser');

include('js/edu/cnt/rpt/NotasCertificadas');
include('js/edu/cnt/rpt/ResumenFinalInicial');
include('js/edu/cnt/rpt/Certificacion');
include('js/edu/cnt/rpt/ResumenFinal31059');
include('js/edu/cnt/rpt/ResumenFinal31059Mapping');
include('js/edu/cnt/rpt/CertificacionBatch');
include('js/edu/cnt/rpt/CertificacionBatchMapping');
include('js/edu/seg/Modulo');
include('js/edu/seg/MantCamClave');
include('js/edu/seg/MantReiClave');
include('js/edu/seg/Property');
include('js/edu/men/ChatAttrib');
include('js/edu/men/AdjuArchivos');
include('js/edu/adm/Documento');
include('js/edu/cnt/rpt/RegistroTitulo');
include('js/edu/cnt/rpt/RegTituloMapping');
include('js/edu/cnt/rpt/Vistaprevia');
include('js/edu/cnt/rpt/DefxLapsoPdf');
include('js/edu/cnt/rpt/MappingDefLap');
include('js/edu/cnt/rpt/VistaPreviaConstancia');


var dialogsModulo      = new Object();
var labelsOrganizacion = new Object();
var pcbOrg             = new Object();
var labelsModulo       = new Object();
var pcbModulo          = new Object();
var imgButtonsModulo   = new Object();

var Modulo = { 	 
	windowName: "Modulo",
	isCreate : false,
	isImport : false,
	
	show : function(){
		dialogs.closeAll();
		if (!this.isCreate)	{
			this.init();
			this.isCreate = true;
		}
		this.loadOrg();
		dialogsModulo.show();
	},
	
	dialogsModulo_Init: function() {
		dialogsModulo.show();
        dialogsModulo.setCenterScreen();
		dialogsModulo.setEnableMinimize(false);
		dialogsModulo.addObject(labelsOrg, 85, 70);
		dialogsModulo.addObject(pcbOrg, 85, 90);
		
		dialogsModulo.addObject(labelsModulo, 85, 120);
		dialogsModulo.addObject(pcbModulo, 85, 140);
		dialogsModulo.addObject(imgButtonsModulo, 103, 200);
	},
	
	create: function() {
        dialogsModulo = dialogs.create('dialogsModulo', 0, 0, 320, 240, 'MODULO');
		dialogsModulo.setIconDlg('images/logo/', 'EDUCA_logo.gif');
		
		
		labelsOrg = labels.create('labelsOrg','Organización',1);
		labelsOrg.setFont('arial black','12','Black');		
		
		pcbOrg = selects.create('pcbOrg', 'pcbOrg', '', 0);
		pcbOrg.setWidth(170);
		labelsModulo = labels.create('labelsModulo','Modulo',1);
		labelsModulo.setFont('arial black','12','Black');
		
		pcbModulo = selects.create('pcbModulo', 'pcbModulo', '', 0);
		pcbModulo.setWidth(170);
		imgButtonsModulo = imgButtons.create('imgButtonsModulo', 'ENTRAR', '11curve_1.png');
		imgButtonsModulo.setDimension(130, 35);
	},
	
	init: function() {
		this.create();
		this.setEvents();
		this.dialogsModulo_Init();
	},
	
	loadOrg: function() {
		pcbOrg.deleteAll();
		if (xmlHttpReq.response != null) {
			 pcbOrg.addArrOption(json('dataOrg').data[1], json('dataOrg').data[0]);
			 setTimeout(function(){Modulo.getMod();}, 200);
		}
	},

    getMod: function() {
	xmlHttpReq.addParamValue(xmlStructs.TYPE_PARAM_VAR, 'int', pcbOrg.getSelect().value);
        Tool.cnnSrv('SecurityObject', 'getModuloUsuario', this.windowName + '.loadMod()');
    },

    loadMod: function() {
    	var mod = xmlHttpReq.json('dataUsrMod');
    	
    	pcbModulo.deleteAll();
        if (xmlHttpReq.response != null) {
            pcbModulo.addArrOption(mod.data[1], mod.data[0]);
        }
        dlgWait.hide();
        imgButtonsModulo.setFocus();
		if (mod.data[1].length == 1) {
			Modulo.importar()
		}
    },
	
    returnWin: function() {
		if (!this.isImport) { 
			attrib.setActualEnv(1);
			Tool.cnnSrv('index', '', 'dlgWait.hide()');
			location.replace('index.html');
		}
    },
    
	setEvents : function() {
		pcbOrg.onChange("Modulo.getMod()");
		imgButtonsModulo.onClick("Modulo.importar()");
		dialogsModulo.onClickCloseDialog("Modulo.returnWin()");
	},

	importar : function() {

        if (!this.isImport)	{		 
			include('js/edu/ins/ProcCrearInscripcion');
			include('js/edu/pla/ProcCrearCurso');
			include('js/edu/pla/ProcDispProf');
			include('js/edu/pla/ResuBusqueda');
			include('js/edu/pla/DuplPeriodo');
			include('js/edu/seg/CtxOrg');
			include('js/edu/cnt/EvalAlumno');
			include('js/edu/adm/ProcPagos');
			include('js/edu/adm/CalcMontos');
			include('js/edu/adm/FormPago');
			include('js/edu/adm/PagoReps');
			include('js/edu/adm/CaptValor');
			include('js/edu/cnt/rpt/RepoProyAprendizaje');
			include('js/edu/cnt/rpt/ModeloFichaAlumno');	
			setCallBack('Modulo.getMenu()');
			this.isImport = true;
		}
		else {
			this.getMenu();
		}
	},

	getMenu: function() {
		dialogsModulo.hide();
		xmlHttpReq.addParamValue(xmlStructs.TYPE_PARAM_VAR, 'int', pcbModulo.getSelect().value);
		xmlHttpReq.addParamValue(xmlStructs.TYPE_PARAM_VAR, 'int', pcbOrg.getSelect().value);
		xmlHttpReq.addParamValue(xmlStructs.TYPE_PARAM_VAR, 'string', pcbOrg.getOption());
		Tool.cnnSrv('SecurityObject', 'getMenuDesktop', this.windowName + '.loadMenu()');
	},

	loadMenu: function() {
		var mn = xmlHttpReq.objResponse[0];

		//CARGA DE IMAGENES EN VARIABLES GLOBALES
		dialogs.setIconAllDlg('images/logo/', pcbOrg.getOption() + '_logo.gif');
		dialogs.setTransparencyBgImg('images/logo/' + pcbOrg.getOption() + '_fondo.png');
		imgEduca.banner = 'images/logo/' + pcbOrg.getOption() + '_banner.jpg';
		imgEduca.bienvenido = 'images/logo/' + pcbOrg.getOption() + '_bienvenido.jpg';
		imgEduca.logo = 'images/logo/' + pcbOrg.getOption() + '_logo.gif';
		imgEduca.escudo = 'images/logo/' + pcbOrg.getOption() + '_escudo.png';
		imgEduca.portada_boletin = 'images/logo/' + pcbOrg.getOption() + '_portada_boletin.jpg';		
		//imgEduca.logo_ministerio_educacion = 'images/logo/' + pcbOrg.getOption() + '_logo_ministerio_educacion.png';
		imgEduca.escudo_venezuela = 'images/logo/' + pcbOrg.getOption() + '_escudo_venezuela.png';
        imgEduca.logo_carnet = 'images/logo/' + pcbOrg.getOption() + '_logo_carnet.png';
		imgEduca.logo_ministerio = 'images/logo/' + pcbOrg.getOption() + '_logo_ministerio.jpg';
		imgEduca.logo_carnetpersonal = 'images/logo/' + pcbOrg.getOption() + '_logo_carnet_personal.png';
         
		dlgWait.hide();
		ResuBusqueda.init(); 
		DuplPeriodo.init();
		mn.init();
		 
		Tool.cnnSrv('SecurityObject', 'getTutorial', 'dlgWait.hide()');
	}
};