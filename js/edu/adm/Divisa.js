var dialogsDivisa = {};
var editsDivisaMonto = {};
var imgButtonsDivisaGuardar = {};
var mwDivisa = new Object();// minWindow
       
var Divisa = {
    windowName : 'Divisa',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsDivisa.isByClean())
			this.limpiar();			
		dialogsDivisa.show();
	},
	
    hide: function(){
        dialogsDivisa.hide();
    },
    
    createMWs: function(){
        mwDivisa = desktop.addMinWindow('Divisa', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsDivisa.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsDivisa_Init : function(){
        dialogsDivisa.setMinimizeXY(0,0);
        dialogsDivisa.setCenterScreen();
        dialogsDivisa.addSpace(0,0,20);
        dialogsDivisa.addLn(1,1,1);
		dialogsDivisa.setHeightCell(1,1,13);		
		dialogsDivisa.addObject(editsDivisaMonto,15,44);
		dialogsDivisa.addObject(imgButtonsDivisaGuardar,73,80);
    },

    create : function(){
		//HINTS
		hint.create();
		hint.setObjAttrib(attrib,ambiente);
    	dialogsDivisa = dialogs.create('dialogsDivisa',0,0,230,95,'ACTUALIZAR DIVISA');
		dialogsDivisa.setEnableMinimize(false);
    	dialogsDivisa.setAdjY(80);
      	editsDivisaMonto = edits.create('editsDivisaMonto','editsDivisaMonto','Precio ($):',1,70,'normal');
		editsDivisaMonto.setSizeEdit(128);
      	editsDivisaMonto.setValidEmpty();
      	editsDivisaMonto.setMaxLength(20);
      	editsDivisaMonto.setFont("tahoma",16,"black");
      	editsDivisaMonto.getEdit().style.textAlign='right';
      	hint.addToHintWithRefreshPos(editsDivisaMonto, dialogsDivisa,"SEPARE DECIMALES CON PUNTO",34,28,false,true);
      	imgButtonsDivisaGuardar = imgButtons.create('imgButtonsDivisaGuardar', 'Guardar.', 'ok.png');
      	imgButtonsDivisaGuardar.setDimension(90, 22);
	},

	init : function() {
		this.create();
		this.setEvents(); 
		this.dialogsDivisa_Init();
		this.createMWs();
	},

	setEvents: function() {
		editsDivisaMonto.onBlur("Tool.frmMilDec(editsDivisaMonto, true)");
		editsDivisaMonto.onKeyUp("Tool.frmMilDec(editsDivisaMonto, false)");
		editsDivisaMonto.onEnter(this.windowName + ".coreUpdate()");
		imgButtonsDivisaGuardar.onClick(this.windowName + ".coreUpdate()");
	},

	limpiar : function() {
  		editsDivisaMonto.clear(); 
  		dialogsDivisa.setMsg("");
  		Tool.cnnSrv('MantObject', 'getDivisa', this.windowName + '.loadDataInit()');
	},
    
	loadDataInit: function() {
  		editsDivisaMonto.setValue(json('getDivisa').data[0][0]);
  		Tool.frmMilDec(editsDivisaMonto, true);
  		dialogsDivisa.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },
    	
	responseCoreUpdate : function() {
	    dialogsDivisa.close();
	},
	
	coreUpdate: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsDivisaMonto.valid(dialogsDivisa)) {
			rlx.addStr('reg', editsDivisaMonto.getText().replace(/,/g,''));
			rlx.addInt('reg', 28);
			Tool.cnnSrv("MantObject", "modificarMantParametros", this.windowName + ".responseCoreUpdate()", rlx);
		}
	}
};