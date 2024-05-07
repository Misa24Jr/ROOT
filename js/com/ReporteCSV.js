var dialogsReporteCSV = new Object();
var editsReporteCSVSeparador = new Object();
var imgButtonsReporteCSVAceptar = new Object();

var ReporteCSV = {
	isCreate : false,
	sep : new Object(),
	serverObjName : '',
	serverMethodName : '', 
	paramTitle : '',
	paramFind : '',
	paramRptXML : '',
	
	dialogsReporteCSV_Init : function() {
		dialogsReporteCSV.setMinimizeXY(0, 0);
		dialogsReporteCSV.setCenterScreen();
		dialogsReporteCSV.setEnableMinimize(false);
		dialogsReporteCSV.addSpace(0, 0, 20);
		dialogsReporteCSV.addLn(1, 1, 1);
		dialogsReporteCSV.addObjToDialog(editsReporteCSVSeparador, 2, 1);
		editsReporteCSVSeparador.setSizeEdit(2);
		dialogsReporteCSV.leftMarginObj(2, 1, 0, 69);
		dialogsReporteCSV.addLn(3, 1, 1);
		dialogsReporteCSV.addObjToDialog(imgButtonsReporteCSVAceptar, 4, 1);
		imgButtonsReporteCSVAceptar.setDimension(90, 22);
		dialogsReporteCSV.adjAllMarginObj(4, 1, 20);
		dialogsReporteCSV.leftMarginObj(4, 1, 0, 82);
	},
	create : function() {
		dialogsReporteCSV = dialogs.create('dialogsReporteCSV', 0, 0, 300, 103, 'ELIJA UN SEPARADOR');
		editsReporteCSVSeparador = edits.create('editsReporteCSVSeparador', 'editsReporteCSVSeparador', 'Separador:', 75, 'normal');
		imgButtonsReporteCSVAceptar = imgButtons.create('imgButtonsReporteCSVAceptar', 'Aceptar', 'aceptar.png');
		this.setAttributes();
		this.setEvents();
		this.dialogsReporteCSV_Init();
		this.isCreate = true;
	},

	init : function(serverObjName, serverMethodName, paramTitle, paramFind, paramRptXML) {
		if (!this.isCreate) {
			this.create();
		} 
		editsReporteCSVSeparador.setValue("");
		this.serverObjName = serverObjName;
		this.serverMethodName = serverMethodName;
		this.paramTitle = paramTitle;
		this.paramFind = paramFind;
		this.paramRptXML = paramRptXML;
		dialogsReporteCSV.showModal();
	},

	setAttributes : function() {
		dialogsReporteCSV.setObjAttrib(attrib, ambiente);
		editsReporteCSVSeparador.setObjAttrib(attrib, ambiente);
		imgButtonsReporteCSVAceptar.setObjAttrib(attrib, ambiente);
	},

    chequearSeparador : function() {
	    	this.sep = editsReporteCSVSeparador.getValue();
			if (this.sep.length == 0)
				this.sep = ",";
    },

	setEvents : function() {
		imgButtonsReporteCSVAceptar.onClick("ReporteCSV.getReport('C')");
	},

	getReport: function(frmReport) {
		this.chequearSeparador();
        xmlHttpReq.setServerObjName(this.serverObjName);
        xmlHttpReq.setServerMethodName(this.serverMethodName);
		xmlHttpReq.addParam(xmlStructs.TYPE_PARAM_RECORDLIST, this.paramTitle.getRecordList());
		xmlHttpReq.addParam(xmlStructs.TYPE_PARAM_RECORDLIST, this.paramFind.getRecordList());
        xmlHttpReq.addParamRptXML(this.paramRptXML);
        xmlHttpReq.addParamSrc("window.open");
	    xmlHttpReq.addParamValue(xmlStructs.TYPE_PARAM_VAR, 'char', frmReport);
	    xmlHttpReq.addParamValue(xmlStructs.TYPE_PARAM_VAR, 'String', ',');
	    xmlHttpReq.clearResponse();
	    window.open('/educa/despachador?' + xmlHttpReq.getSendValue(), '_blank', 'left=20,top=100,width=1000,toolbar=no,location=no,status=no,menubar=yes,resizable=no,scrollbars=yes');
	    dialogsReporteCSV.close();
	    xmlHttpReq.clearParams();
  	}
};
