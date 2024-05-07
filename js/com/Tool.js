var Tool = {
	nameComponent : 'Tool',
	timestamp : '',
	funct : new Function(''),

	frmMilDec : function(objEdit, booFormat) {
		const numberFormat = new Intl.NumberFormat('en-US');
		var monto = objEdit.getValue().replace(/,/g,'');
		
		if (monto.substring(0,3) == 'NaN') {
			objEdit.clear();
		}
		else {
			if (monto.indexOf('.') == -1 || booFormat) {
				monto = numberFormat.format(monto);
				if (monto.substring(0,3) == 'NaN') {
					objEdit.clear();
				}
				else {
					objEdit.setValue(monto);
				}
			}
		}
	},
	
	burbuja: function(miArray) {
		for(var i=1;i<miArray.length;i++) {
			for(var j=0;j<(miArray.length-i);j++) {
				if(miArray[j]>miArray[j+1])	{
					k=miArray[j+1];
					miArray[j+1]=miArray[j];
					miArray[j]=k;
				}
			}
		}
		return miArray;
	},

	setTimestamp: function(ts){
		this.timestamp = ts;
	},
	
	getTimestamp: function(){
		return this.timestamp;
	},
	
	getDate: function(){
		return this.timestamp.substring(0, 10);
	},

	getContext: function(objDlg, objOrg, objSub, objCrr, funct){
		var oSub = new Object(); 
		var oCrr = new Object();
		if (objSub !== null) {
			oSub = objSub;
			if (objCrr !== null) {
				oCrr = objCrr;
			}
			else {
				oCrr.id = objCrr;
			}
		}
		else {
			oSub.id = objSub;
			oCrr.id = objCrr;
		}
		this.funct = new Function(funct);
		this.cnnSrv("MantObject", "getCtxOrg", "Tool.loadContext(" + objDlg.id + ", " + objOrg.id + ", " + oSub.id + ", " + oCrr.id + ")");
	},
	
    loadContext: function(objDlg, objOrg, objSub, objCrr){
    	try {
    		objOrg.setSelectedIndex(0);
	        if (json('getCtxOrg').data[0] > 0) { 
	        	objOrg.findOption(json('getCtxOrg').data[0]);
            	if (objSub !== null) {
            		Tool.loadPowerComboData(objDlg, objSub, 1, 2, json('getMantSuborganizacion'));
                	objSub.findOption(json('getCtxOrg').data[1]);
            	}
	            if (json('getCtxOrg').data[1] > 0) { 
	            	if (objCrr !== null) {
	            		Tool.loadPowerComboData(objDlg, objCrr, -1, 3, json('getMantenimientodeCarrera'));
		                if (json('getCtxOrg').data[2] > 0) { 
		                	objCrr.findOption(json('getCtxOrg').data[2], 2);
		                }
	            	}
	            }
	        }
	        this.funct();
	        objDlg.setMsg(xmlHttpReq.objStsResponse.shortInfo);
	        dlgWait.hide();
		}
		catch(err) {
			dlgWait.hide();
			Alert.show('Existen problemas durante la carga del Contexto', 'SISTEMA', Alert.TYPE_WARNING);
		}
    },
	
	getPowerComboData: function(){
		var rlx = xmlStructs.createRecordList("rlx");
		var args = Tool.getPowerComboData.arguments;	
		
		this.rstPwrCmb(args[3]);
		if (args.length > 6) {
			if (args[6].valid(args[2])) {
				for (var i = 6; i < args.length; i++) {
					rlx.add('reg', args[i]);
				}
			}
			else {
				rlx.add('reg', args[6]);
			}
		}
		this.cnnSrv(args[0], args[1], "Tool.loadPowerComboData(" + args[2].id + ", " + args[3].id + ", " + args[4] + ", " + args[5] + ", xmlHttpReq.objResponse[0])", rlx);
	},

    loadPowerComboData: function(objDlg, objTo, posKey, posVal, jsonName){
		this.rstPwrCmb(objTo);

		try {
			if (posKey >= 0) {		
				objTo.addSimpleArrOptionValue(null, jsonName.data[posVal], jsonName.data[posKey]);
			}
			else {
				objTo.addDataStruct(jsonName.data, posVal);
			}
	        objDlg.setMsg(xmlHttpReq.objStsResponse.shortInfo);
	        dlgWait.hide();
    	}
    	catch(err) {
    		dlgWait.hide();
			Alert.show('Existen problemas durante la carga del Combo', 'SISTEMA', Alert.TYPE_WARNING);
    	}
    },

    loadPowerComboField: function(objDlg, objTo, posKey, posVal, jsonName){
		objTo.clear();

		try {
			objTo.addSimpleArrOptionValue(null, this.burbuja(jsonName.fields), posKey);
	        objDlg.setMsg(xmlHttpReq.objStsResponse.shortInfo);
	        dlgWait.hide();
    	}
    	catch(err) {
    		dlgWait.hide();
			Alert.show('Existen problemas durante la carga del Combo Field', 'SISTEMA', Alert.TYPE_WARNING);
    	}
    },

    getPowerComboDataFnc: function(){
		var rlx = xmlStructs.createRecordList("rlx");
		var args = Tool.getPowerComboDataFnc.arguments;	
		
		this.rstPwrCmb(args[4]);
		if (args.length > 7) {
			if (args[7].valid(args[3])) {
				for (var i = 7; i < args.length; i++) {
					rlx.add('reg', args[i]);
				}
			}
			else {
				rlx.add('reg', args[7]);
			}
		}
		this.cnnSrv(args[1], args[2], "Tool.loadPowerComboDataFnc(new Function('" + args[0] + "'), " + args[3].id + ", " + args[4].id + ", " + args[5] + ", " + args[6] + ", xmlHttpReq.objResponse[0])", rlx);
	},

    loadPowerComboDataFnc: function(fnc, objDlg, objTo, posKey, posVal, jsonName){
		this.rstPwrCmb(objTo);

		try {
			if (posKey >= 0) {		
				objTo.addSimpleArrOptionValue(null, jsonName.data[posVal], jsonName.data[posKey]);
			}
			else {
				objTo.addDataStruct(jsonName.data, posVal);
			}
	        objDlg.setMsg(xmlHttpReq.objStsResponse.shortInfo);
	        dlgWait.hide();
	        fnc();
    	}
    	catch(err) {
    		dlgWait.hide();
			Alert.show('Existen problemas durante la carga del Combo', 'SISTEMA', Alert.TYPE_WARNING);
    	}
    },

    rstPwrCmb: function(objTo){
		objTo.deleteAll();
        objTo.addEmptyOption();
		objTo.setSelectedIndex(0);
	},

    getSelectDataFnc: function(){
		var rlx = xmlStructs.createRecordList("rlx");
		var args = Tool.getSelectDataFnc.arguments;	
		
		args[4].deleteAll();
		if (args.length > 7) {
			for (var i = 7; i < args.length; i++) {
				rlx.add('reg', args[i]);
			}
		}
		this.cnnSrv(args[1], args[2], "Tool.loadSelectDataFnc(new Function('" + args[0] + "'), " + args[3].id + ", " + args[4].id + ", " + args[5] + ", " + args[6] + ", xmlHttpReq.objResponse[0])", rlx);
	},

    loadSelectDataFnc: function(fnc, objDlg, objTo, posKey, posVal, jsonName){
    	objTo.deleteAll();
    	objTo.addOption('','-1');
    	
		try {
			objTo.addArrOption(jsonName.data[posVal], jsonName.data[posKey]);
	        objDlg.setMsg(xmlHttpReq.objStsResponse.shortInfo);
	        dlgWait.hide();
	        fnc();
    	}
    	catch(err) {
    		dlgWait.hide();
			Alert.show('Existen problemas durante la carga del Select', 'SISTEMA', Alert.TYPE_WARNING);
    	}
    },

	getGridData: function(){
		var rlx = xmlStructs.createRecordList("rlx");
		var args = Tool.getGridData.arguments;	
		
		for (var i = 5; i < args.length; i++) {
			rlx.add('reg', args[i]);
		}
        this.cnnSrv(args[0], args[1], "Tool.loadGridData(" + args[2].id + ", " + args[3].id + ", " + args[4] + ")", rlx);
    },

    loadGridData: function(){
    	try {
			var rs = null;
			var args = Tool.loadGridData.arguments;
	
			if (args.length == 3) {
				rs = xmlHttpReq.objResponse[0];
			}
			else {
				rs = args[3];
			}
			if (typeof(args[2])=='object') {
				if (hideIdCedula.getValue() !== '') {
					hideIdCedula.hideId = rs.data[3][0];
					hideIdCedula.setValue(rs.data[0][0]);
					hideDeNombre.setValue(rs.data[1][0]);
					hideDeApellido.setValue(rs.data[2][0]);
					ResuBusqueda.fnc();
					return 0;
				}
				else 
					args[2].show();
			}
			else if (typeof(args[2])=='function') {
				args[2]();
			}
			args[1].clean();
			args[1].loadDataStruct(rs);
			args[1].setFocus();
	        args[0].setMsg(xmlHttpReq.objStsResponse.shortInfo);
	        dlgWait.hide();
		}
		catch(err) {
			dlgWait.hide();
			Alert.show('Existen problemas durante la carga del Grid', 'SISTEMA', Alert.TYPE_WARNING);
		}
    },

    getListData: function(){
		var rlx = xmlStructs.createRecordList("rlx");
		var args = Tool.getListData.arguments;	
		
		for (var i = 6; i < args.length; i++) {
			rlx.add('reg', args[i]);
		}
        this.cnnSrv(args[0], args[1], "Tool.loadListData(" + args[2].id + ", " + args[3].id + ", " + args[4] + ", " + args[5] + ", xmlHttpReq.objResponse[0])", rlx);
    },
    
    loadListData: function(objDlg, objTo, posKey, posVal, jsonName){
    	try {
    		var xl = {
				arrVal : jsonName.data[posKey],
				arrOpt : jsonName.data[posVal]
			};
	        objTo.allSelectedLeft(true);
	        objTo.delSelectedLnLeft();
	        objTo.addDataStructLeft(xl);
	        objDlg.setMsg(xmlHttpReq.objStsResponse.shortInfo);
	        dlgWait.hide();
		}
		catch(err) {
			dlgWait.hide();
			Alert.show('Existen problemas durante la carga del List', 'SISTEMA', Alert.TYPE_WARNING);
		}
    },

    getMemoData: function(){
		var rlx = xmlStructs.createRecordList("rlx");
		var args = Tool.getMemoData.arguments;	
		
		for (var i = 5; i < args.length; i++) {
			rlx.add('reg', args[i]);
		}
        this.cnnSrv(args[0], args[1], "Tool.loadMemoData(" + args[2].id + ", " + args[3].memo.id + ", " + args[4] + ", xmlHttpReq.objResponse[0])", rlx);
    },

    getMemoDataLessWaitMsg: function(){
		var rlx = xmlStructs.createRecordList("rlx");
		var args = Tool.getMemoDataLessWaitMsg.arguments;	
		
		for (var i = 5; i < args.length; i++) {
			rlx.add('reg', args[i]);
		}
        this.cnnSrvLessWaitMsg(args[0], args[1], "Tool.loadMemoData(" + args[2].id + ", " + args[3].memo.id + ", " + args[4] + ", xmlHttpReq.objResponse[0])", rlx);
    },

    loadMemoData: function(objDlg, objTo, posVal, jsonName){
    	try {
    		objTo.setText(jsonName.data[posVal]);
			objDlg.setMsg(xmlHttpReq.objStsResponse.shortInfo);
	        dlgWait.hide();
		}
		catch(err) {
			dlgWait.hide();
    		objTo.setText("");
			objDlg.setMsg("NO EXISTE INFORMACION.");
		}
    },

    getEditData: function(){
		var rlx = xmlStructs.createRecordList("rlx");
		var args = Tool.getEditData.arguments;	
		
		for (var i = 5; i < args.length; i++) {
			rlx.add('reg', args[i]);
		}
        this.cnnSrv(args[0], args[1], "Tool.loadEditData(" + args[2].id + ", " + args[3].id + ", " + args[4] + ", xmlHttpReq.objResponse[0])", rlx);
    },

    loadEditData: function(objDlg, objTo, posVal, jsonName){
    	try {
    		objTo.setValue(jsonName.data[posVal]);
			objDlg.setMsg(xmlHttpReq.objStsResponse.shortInfo);
	        dlgWait.hide();
		}
		catch(err) {
			dlgWait.hide();
			Alert.show('Existen problemas durante la carga del Editor', 'SISTEMA', Alert.TYPE_WARNING);
		}
    },
    
    getSelectListData: function(){
		var rlx = xmlStructs.createRecordList("rlx");
		var args = Tool.getSelectListData.arguments;	
		
		for (var i = 7; i < args.length; i++) {
			rlx.add('reg', args[i]);
		}
        this.cnnSrv(args[0], args[1], "Tool.loadSelectListData(" + args[2].id + ", " + args[3].id + ", " + args[4] + ", " + args[5] + ", " + args[6] + ", xmlHttpReq.objResponse[0])", rlx);
    },
    
    loadSelectListData: function(objDlg, objTo, posKey, posVal, posChecked, jsonName){
    	try {
    		objTo.deleteAll();
    		objTo.addLns(jsonName.data[posVal], jsonName.data[posKey], jsonName.data[posChecked]);
	        objDlg.setMsg(xmlHttpReq.objStsResponse.shortInfo);
	        dlgWait.hide();
		}
		catch(err) {
			dlgWait.hide();
			Alert.show('Existen problemas durante la carga del List', 'SISTEMA', Alert.TYPE_WARNING);
		}
    },

    cnnSrvUpFile: function(){
		var args = Tool.cnnSrvUpFile.arguments;	

		xmlHttpReq.setOnReceivedFunction(args[2]);
        xmlHttpReq.setServerObjName(args[0]);
        xmlHttpReq.setServerMethodName(args[1]);
        xmlHttpReq.paramRptXML = "upfile";
        xmlHttpReq.paramSrc = args[3];
        xmlHttpReq.RFC("Un momento por favor, procesando solicitud...");
    },

    cnnSrv: function(){
		var args = Tool.cnnSrv.arguments;	

		if (args.length == 4) {
			xmlHttpReq.addParam(xmlStructs.TYPE_PARAM_RECORDLIST, args[3].getRecordList());
		}
		xmlHttpReq.setOnReceivedFunction(args[2]);
        xmlHttpReq.setServerObjName(args[0]);
        xmlHttpReq.setServerMethodName(args[1]);
        xmlHttpReq.RFC("Un momento por favor, procesando solicitud...");
    },
    
    cnnSrvLessWaitMsg: function(){
		var args = Tool.cnnSrvLessWaitMsg.arguments;	

		if (args.length == 4) {
			xmlHttpReq.addParam(xmlStructs.TYPE_PARAM_RECORDLIST, args[3].getRecordList());
		}
		xmlHttpReq.setOnReceivedFunction(args[2]);
        xmlHttpReq.setServerObjName(args[0]);
        xmlHttpReq.setServerMethodName(args[1]);
        xmlHttpReq.RFC("");
    }
};

var MiniDataSet = function(valueOut, dataTypeOut, fieldFindOut){
	var value = valueOut;
	this.dataType = dataTypeOut;
	var fieldFind = fieldFindOut;
	
    this.getText = function(){
    	return value;
    };
    
    this.getFieldFind = function(){
    	return fieldFind;
    };
    
    this.valid = function(){
    	return 'true';
    };
};

var OpenWin = function() {
	this.getFile = function(url) {
		window.open(url, '_blank', 'left=10,top=80,Height=500,width=800,toolbar=no,location=no,status=no,menubar=no,resizable=yes,scrollbars=yes');
	};
};