var dialogsVistaprevia = {};
var mwVistaprevia = {};// minWindow
var richEditVistaprevia = {};//RichEdit

var Vistaprevia = {
	windowName : 'Vistaprevia',
	isCreate : false,
	noPlantilla : '',

	show: function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
			//this.limpiar();			
		dialogsVistaprevia.show();
		richEditVistaprevia.show();
	},
	
	hide: function(){
		dialogsVistaprevia.hide();
	},
	
	close: function(){
		dialogsVistaprevia.close();
	},
	
	createMWs: function(){
    	mwVistaprevia = desktop.addMinWindow('VistaPrevia', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
    	dialogsVistaprevia.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsVistaprevia_Init : function() {
		dialogsVistaprevia.setMinimizeXY(0,0);
		dialogsVistaprevia.setCenterScreen();
		//dialogsVistaprevia.addObject(richEditVistaprevia.getObject(), 20, 28);	
	},

	create : function() {
		dialogsVistaprevia = dialogs.create('dialogsVistaprevia',0,0,1068,522,'VISTA PREVIA');
    	dialogsVistaprevia.setAdjY(60);
    	//richEditVistaprevia = new RichEdit({x:100, y:100, width:1024, height:370, id:'VistaPrevRE'});
    	richEditVistaprevia = new RichEdit({x:20, y:30, width:1024, height:374, id:'re_vistaPrev', objectContainer:dialogsVistaprevia.getObject().divBody});
	},

	init : function() {
		this.create();
		this.dialogsVistaprevia_Init();  
		this.createMWs();
	}
};