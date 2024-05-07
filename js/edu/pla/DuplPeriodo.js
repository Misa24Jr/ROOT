var dialogsDuplPeriodo = new Object();
var editsDuplPeriodo = new Object();
var imgButtonsDuplPerDuplicar = new Object();
var imgButtonsDuplPerSalir = new Object();
var idPeriodoDuplPeriodo = 0;


var DuplPeriodo = {
	windowName : 'DuplPeriodo', 
	isCreate : false,
	fnc : new Function(''),
	nvlAcademic : 0,

	setExtFnc: function(fnc) {
		this.fnc = new Function(fnc);
	},
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		dialogsDuplPeriodo.setMsg("");		
        dialogsDuplPeriodo.showModal();
        this.getPer();
	},
	
	dialogsDuplPeriodo_Init : function() {
        dialogsDuplPeriodo.setMinimizeXY(0,0);
        dialogsDuplPeriodo.setCenterScreen();
		dialogsDuplPeriodo.setEnableMinimize(false);
        dialogsDuplPeriodo.addSpace(0,0,20);
        dialogsDuplPeriodo.addLn(1,1,1);
        dialogsDuplPeriodo.addObjToDialog(editsDuplPeriodo,2,1);
        editsDuplPeriodo.setSizeEdit(145);
        dialogsDuplPeriodo.addLn(5,1,1);
        dialogsDuplPeriodo.addObjToDialog(imgButtonsDuplPerDuplicar,6,1);
        dialogsDuplPeriodo.addObjToDialog(imgButtonsDuplPerSalir,6,1);
        imgButtonsDuplPerDuplicar.setDimension(90,22);
        imgButtonsDuplPerSalir.setDimension(90,22);
        dialogsDuplPeriodo.adjAllMarginObj(6,1,20);
        dialogsDuplPeriodo.leftMarginObj(6,1,0,36);
	},

	create : function() {
		dialogsDuplPeriodo = dialogs.create('dialogsDuplPeriodo',0,0,303,90,'DUPLICAR PARA NUEVO PERIODO');
		editsDuplPeriodo = edits.create('editsDuplPeriodo','editsDuplPeriodo','Duplicar al Periodo:',1,120,'normal');
		editsDuplPeriodo.setValidEmpty();
		editsDuplPeriodo.readOnly(true);
        imgButtonsDuplPerDuplicar = imgButtons.create('imgButtonsDuplPerDuplicar','Duplicar','duplicar_periodo_1.png');
        imgButtonsDuplPerSalir = imgButtons.create('imgButtonsDuplPerSalir','Salir','salir.png');
	},

	init : function() {
		this.create();
    	this.setEvents();
    	this.dialogsDuplPeriodo_Init();
	},

    setEvents : function(){
    	imgButtonsDuplPerDuplicar.onClick('DuplPeriodo.duplicar()');
    	imgButtonsDuplPerSalir.onClick('dialogsDuplPeriodo.close()');	  	 	
    },

    getPer : function(){
        var rlx = xmlStructs.createRecordList("rlx");

        editsDuplPeriodo.setValue("");
        rlx.addInt('reg', 3);
		rlx.addInt('reg', this.nvlAcademic);		
    	Tool.cnnSrv('MantObject', 'getPeriodo', this.windowName + '.loadDataPer()', rlx);
	},
	
    loadDataPer: function() {
    	idPeriodoDuplPeriodo = json('getPeriodo').data[0];
    	Tool.loadEditData(dialogsDuplPeriodo, editsDuplPeriodo, 1, json('getPeriodo'));   	
    },

    duplicar : function (){
		if (editsDuplPeriodo.valid(dialogsDuplPeriodo)) {
			this.fnc();
			dialogsDuplPeriodo.close();
		}
    },
	
    setNvlAcademic : function(nvlAcademic){
    	this.nvlAcademic = nvlAcademic;
    }    
};
	