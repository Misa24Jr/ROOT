var structBarIcon = {
	height : 45,
	width : 45,	
	inc : 40,
	hideText : true,
	titles : ['EXCEL','PDF','HTML','TEXTO'],
	images : ['images/logo_excel-2.png','images/logo_pdf-2.png','images/logo_html-2.png','images/logo_txt-1.png'],
	functs : ["Reporte.getReport('X')","Reporte.getReport('P')","Reporte.getReport('H')","Reporte.getReport('C')"],
	sts : [true,true,true,true],
	idDlg :'dialogsReporte',
	showTitles : true
};

var dialogsReporte = new Object();

var Reporte = {
	isCreate : false,
	serverObjName : '',
	serverMethodName : '', 
	paramTitle : '',
	paramFind : '',
	paramRptXML : '',
	
	setExceFuncts : function(arrExe){
	  structBarIcon.functs = arrExe;
	  for(var i=0; i<arrExe.length; i++)
	    structBarIcon.functs[i]+='; dialogsReporte.close();';  
	},	
	
	dialogsReporte_Init : function(){
		dialogsReporte.setMinimizeXY(0, 0);
		dialogsReporte.setCenterScreen();
		dialogsReporte.setEnableMinimize(false);
		ibReporte.addStructIcons(structBarIcon);
		dialogsReporte.addObjToDialog(ibReporte, 2, 1);
		ibReporte.setFont('verdana', 10, 'white');
		iconBar.colorTextSelected = 'black';
	},

	create : function() {
		dialogsReporte = dialogs.create('dialogsReporte', 0, 0, 360, 86,'FORMATO DEL REPORTE');
		ibReporte = iconBar.create('ibReporte');
		this.setAttributes();
		this.setEvents();
		this.dialogsReporte_Init();
		this.isCreate = true;
	},

	init : function(serverObjName, serverMethodName, paramTitle, paramFind, paramRptXML) {
		Tool.getTimestamp();
		if (!this.isCreate) {
			this.create();
		} 
		this.serverObjName = serverObjName;
		this.serverMethodName = serverMethodName;
		this.paramTitle = paramTitle;
		this.paramFind = paramFind;
		this.paramRptXML = paramRptXML;
		dialogsReporte.showModal();
	},

	setAttributes : function() {
		dialogsReporte.setObjAttrib(attrib, ambiente);
		ibReporte.setObjAttrib(attrib, ambiente);
	},

	setEvents : function() {
	},

	getReport: function(frmReport) {
		if (frmReport == 'C') {
			ReporteCSV.init(this.serverObjName, this.serverMethodName, this.paramTitle, this.paramFind, this.paramRptXML);
		}
		else {
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
		    xmlHttpReq.clearParams();
		}
	}
};
