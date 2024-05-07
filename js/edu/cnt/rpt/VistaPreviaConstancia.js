var dialogVistaPreviaConstancia = {};
var mwVistapreviaConstancia = {};// minWindow
var richEditVistapreviaConstancia = {};//RichEdit

var VistapreviaConstancia = {
	windowName : 'VistapreviaConstancia',
	isCreate : false,
	noPlantilla : '',

	show: function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		dialogVistaPreviaConstancia.show();
		richEditVistapreviaConstancia.show();
	},
	
	hide: function(){
		dialogVistaPreviaConstancia.hide();
	},
	
	close: function(){
		dialogVistaPreviaConstancia.close();
	},
	
	createMWs: function(){
    	mwVistapreviaConstancia = desktop.addMinWindow('VistapreviaConstancia', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
    	dialogVistaPreviaConstancia.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogVistaPreviaConstancia_Init : function() {
		dialogVistaPreviaConstancia.setMinimizeXY(0,0);
		dialogVistaPreviaConstancia.setCenterScreen();
	},

	create : function() {
		dialogVistaPreviaConstancia = dialogs.create('dialogVistaPreviaConstancia',0,0,1068,522,'VISTA PREVIA - CONSTANCIA');
    	dialogVistaPreviaConstancia.setAdjY(60);
    	richEditVistapreviaConstancia = new RichEdit({
    		x:20, 
    		y:30, 
    		width:1024, 
    		height:370, 
    		id:'re_vistaPrevConstancia',
    		//leftPortrait:10, 
    		//topPortrait:10, 
    		//relWidth:3.5, 
    		//marginTop:20,
    		objectContainer:dialogVistaPreviaConstancia.getObject().divBody
    	});
	},

	init : function() {
		this.create();
		this.dialogVistaPreviaConstancia_Init();  
		this.createMWs();
	}
};