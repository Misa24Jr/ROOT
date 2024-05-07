var dialogsCtxOrg = new Object();
var pcbCtxOrgOrg = new Object();
var pcbCtxOrgSub = new Object();
var pcbCtxOrgCarrera = new Object();
var imgButtonsCtxOrgConfigurar = new Object();
var imgButtonsCtxOrgSalir = new Object();
var mwCtxOrg = new Object();// minWindow

var CtxOrg = {
	windowName : 'CtxOrg',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate)	{
			this.init();
			this.isCreate = true;
		}
		this.limpiar();			
		dialogsCtxOrg.show();
	},
	
	hide : function() {
		dialogsCtxOrg.hide();
	},
	
	dialogsCtxOrg_Init : function() {
  		dialogsCtxOrg.setMinimizeXY(0,0);
        dialogsCtxOrg.setCenterScreen();
		dialogsCtxOrg.setEnableMinimize(false);
        dialogsCtxOrg.addSpace(0,0,20);
        dialogsCtxOrg.addLn(1,1,1);
		dialogsCtxOrg.setHeightCell(1,1,10);
        dialogsCtxOrg.addObjToDialog(pcbCtxOrgOrg,2,1,24);
		pcbCtxOrgOrg.setWidthCombo(285);
		dialogsCtxOrg.addObjToDialog(pcbCtxOrgSub,3,1,24);
		pcbCtxOrgSub.setWidthCombo(285);
		dialogsCtxOrg.addObjToDialog(pcbCtxOrgCarrera,4,1,24);
		pcbCtxOrgCarrera.setWidthCombo(285);   
        dialogsCtxOrg.addLn(5,1,1);
		dialogsCtxOrg.setHeightCell(5,1,10);
        dialogsCtxOrg.addObjToDialog(imgButtonsCtxOrgConfigurar,6,1);
        dialogsCtxOrg.addObjToDialog(imgButtonsCtxOrgSalir,6,1);
        imgButtonsCtxOrgConfigurar.setDimension(90,22);
        imgButtonsCtxOrgSalir.setDimension(90,22);
        dialogsCtxOrg.adjAllMarginObj(6,1,30);
        dialogsCtxOrg.leftMarginObj(6,1,0,100);
	},

  	create : function() {
  		dialogsCtxOrg = dialogs.create('dialogsCtxOrg',0,0,453,127,'CONTEXTO DE ORGANIZACIÓN');
		dialogsCtxOrg.setAdjY(50);
  		pcbCtxOrgOrg = powerComboBox.create('pcbCtxOrgOrg','pcbCtxOrgOrg','Organización:',3,105);
  		pcbCtxOrgOrg.enableOnChangeToEmptyOption();
  		pcbCtxOrgSub = powerComboBox.create('pcbCtxOrgSub','pcbCtxOrgSub','Suborganización:',3,105);
  		pcbCtxOrgSub.enableOnChangeToEmptyOption();
  		pcbCtxOrgCarrera = powerComboBox.create('pcbCtxOrgCarrera','pcbCtxOrgCarrera','Carrera:',3,105);
      	imgButtonsCtxOrgConfigurar = imgButtons.create('imgButtonsCtxOrgConfigurar','Guardar.','ok.png');
      	imgButtonsCtxOrgSalir = imgButtons.create('imgButtonsCtxOrgSalir','Salir','salir.png');
		pcbCtxOrgOrg.setWidthBoxContainer(335);
		pcbCtxOrgSub.setWidthBoxContainer(335);
		pcbCtxOrgCarrera.setWidthBoxContainer(335);
  	},

  	init : function(){
	    this.create();
	    this.setEvents();
	    this.dialogsCtxOrg_Init();
  	},

  	limpiar : function(){
  		Tool.rstPwrCmb(pcbCtxOrgOrg);
  		Tool.rstPwrCmb(pcbCtxOrgSub);
  		Tool.rstPwrCmb(pcbCtxOrgCarrera);
  		dialogsCtxOrg.setMsg("");
  		Tool.cnnSrv('MantObject', 'get'+this.windowName, this.windowName + '.loadDataInit()');
    },

    loadDataInit: function() {
    	Tool.loadPowerComboData(dialogsCtxOrg, pcbCtxOrgOrg, 0, 1, json('getData'));
  		pcbCtxOrgOrg.setSelectedIndex(0);
        if (json('getCtxOrg').data[0] > 0) {
            pcbCtxOrgOrg.findOption(json('getCtxOrg').data[0]);
        	Tool.loadPowerComboData(dialogsCtxOrg, pcbCtxOrgSub, 1, 2, json('getMantSuborganizacion'));
            if (json('getCtxOrg').data[1] > 0) {
        		pcbCtxOrgSub.findOption(json('getCtxOrg').data[1]);
            	Tool.loadPowerComboData(dialogsCtxOrg, pcbCtxOrgCarrera, 2, 3, json('getMantenimientodeCarrera'));
                if (json('getCtxOrg').data[2] > 0) {
                	pcbCtxOrgCarrera.findOption(json('getCtxOrg').data[2]);
                }
            }
        }
        dialogsCtxOrg.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    setEvents : function() {
  		pcbCtxOrgOrg.onChange(this.windowName + ".resetElements('org')");
  		pcbCtxOrgSub.onChange(this.windowName + ".resetElements('sub')");
  		imgButtonsCtxOrgConfigurar.onClick(this.windowName+".coreUpdate('configurar')");
  		imgButtonsCtxOrgSalir.onClick('dialogsCtxOrg.close()');	  	 	
    },
    
    resetElements : function(element) {
    	dialogsCtxOrg.setMsg("");
    	if (element == 'org') {
    		Tool.rstPwrCmb(pcbCtxOrgSub);
    		Tool.rstPwrCmb(pcbCtxOrgCarrera);
			if (pcbCtxOrgOrg.getOption() != "")
				Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsCtxOrg, pcbCtxOrgSub, 1, 2, pcbCtxOrgOrg);
    	}
		else if (element == 'sub') {
    		Tool.rstPwrCmb(pcbCtxOrgCarrera);
			if (pcbCtxOrgSub.getOption() != "")
				Tool.getPowerComboData('MantObject', 'getMantCarreraCtxOrg', dialogsCtxOrg, pcbCtxOrgCarrera, 2, 3, pcbCtxOrgSub);		
    	}
	},

	coreUpdate : function(methodName){
		var rlx = xmlStructs.createRecordList("rlx");

		rlx.add('reg',pcbCtxOrgOrg);
		rlx.add('reg',pcbCtxOrgSub);					
		rlx.add('reg',pcbCtxOrgCarrera);
		Tool.cnnSrv('MantObject', 'modificar' + this.windowName, 'dialogsCtxOrg.close()', rlx);
	}
};
