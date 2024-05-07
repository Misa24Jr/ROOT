var dialogsVeriRecaudos = new Object();
var editsVeriRecCi = new Object();
var editsVeriRecNombre = new Object();
var editsVeriRecApellido = new Object();
var selectListVeriRecaudos = new Object();
var imgButtonsVeriRecModificar = new Object();
var imgButtonsVeriRecLimpiar = new Object();
var imgButtonsVeriRecBuscar = new Object();
var imgButtonsVeriRecSalir = new Object();
var mwdialogsVeriRecaudos = new Object();// minWindow

var VeriRecaudos = {
    windowName: 'VeriRecaudos',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsVeriRecaudos.isByClean()) 
            this.limpiar();
        dialogsVeriRecaudos.show();
    },
    
    hide: function(){
        dialogsVeriRecaudos.hide();
    },
    
    createMWs: function(){
        mwdialogsVeriRecaudos = desktop.addMinWindow('V.Recuados','dialogsVeriRecaudos.show()','dialogsVeriRecaudos.hide()','dialogsVeriRecaudos.hide()');
        dialogsVeriRecaudos.setMinWindowEvent('mwdialogsVeriRecaudos.hide()','mwdialogsVeriRecaudos.disable()','mwdialogsVeriRecaudos.show()');
    },

	dialogsVeriRecaudos_Init : function(){
		dialogsVeriRecaudos.setMinimizeXY(0,0);
        dialogsVeriRecaudos.setCenterScreen();
        dialogsVeriRecaudos.addSpace(0,0,20);
        dialogsVeriRecaudos.addLn(1,1,1);
		dialogsVeriRecaudos.setHeightCell(1,1,10);
        dialogsVeriRecaudos.addObjToDialog(editsVeriRecCi,2,1,24);
        editsVeriRecCi.setSizeEdit(100);
        dialogsVeriRecaudos.addObjToDialog(editsVeriRecNombre,2,1,24);
        editsVeriRecNombre.setSizeEdit(270);
		editsVeriRecNombre.setMaxLength(20); 
        dialogsVeriRecaudos.addObjToDialog(editsVeriRecApellido,2,1,24);
        editsVeriRecApellido.setSizeEdit(270);
		editsVeriRecApellido.setMaxLength(50); 
		dialogsVeriRecaudos.adjAllMarginObj(2,1,20);
        dialogsVeriRecaudos.addLn(3,1,1);
		dialogsVeriRecaudos.setHeightCell(3,1,8);
		dialogsVeriRecaudos.addObjToDialog(selectListVeriRecaudos, 4, 1);
		selectListVeriRecaudos.setSizeTextTitle(10);
        selectListVeriRecaudos.setFont('verdana','black',12);
		selectListVeriRecaudos.setBgColor('white');
		dialogsVeriRecaudos.addLn(5,1,22);
        dialogsVeriRecaudos.addObjToDialog(imgButtonsVeriRecModificar,6,1);
        dialogsVeriRecaudos.addObjToDialog(imgButtonsVeriRecLimpiar,6,1);
        dialogsVeriRecaudos.addObjToDialog(imgButtonsVeriRecBuscar,6,1);
		dialogsVeriRecaudos.addObjToDialog(imgButtonsVeriRecSalir,6,1); 
        imgButtonsVeriRecModificar.setDimension(90,22);
        imgButtonsVeriRecLimpiar.setDimension(90,22);
        imgButtonsVeriRecBuscar.setDimension(90,22);
		imgButtonsVeriRecSalir.setDimension(90,22);
        dialogsVeriRecaudos.adjAllMarginObj(6,1,28);
        dialogsVeriRecaudos.leftMarginObj(6,1,0,220);
	},
 
	create : function() {
		dialogsVeriRecaudos = dialogs.create('dialogsVeriRecaudos',0,0,902,449,'VERIFICAR RECAUDOS');
		dialogsVeriRecaudos.setAdjY(25);
		editsVeriRecCi = edits.create('editsVeriRecCi','editsVeriRecCi','C.i. (*):',1,40,'normal');
		editsVeriRecCi.setValidInteger();
		editsVeriRecCi.setFieldFind(true);
		editsVeriRecNombre = edits.create('editsVeriRecNombre','editsVeriRecNombre','Nombre (*):',1,70,'normal');
		editsVeriRecNombre.setValidEmpty();
		editsVeriRecNombre.setFieldFind(true);
		editsVeriRecApellido = edits.create('editsVeriRecApellido','editsVeriRecApellido','Apellido (*):',1,70,'normal');
		editsVeriRecApellido.setValidEmpty();
		editsVeriRecApellido.setFieldFind(true);
		selectListVeriRecaudos = selectList.create('selectListVeriRecaudos', 340, 834, 'LISTADO');
		imgButtonsVeriRecModificar = imgButtons.create('imgButtonsVeriRecModificar','Guardar','icono_modificar.png');
		imgButtonsVeriRecModificar.setDisable();
		imgButtonsVeriRecLimpiar = imgButtons.create('imgButtonsVeriRecLimpiar','Limpiar','limpiar.png');
		imgButtonsVeriRecBuscar = imgButtons.create('imgButtonsVeriRecBuscar','Buscar','icono_buscar.png');
		imgButtonsVeriRecSalir = imgButtons.create('imgButtonsVeriRecSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsVeriRecaudos_Init();
		this.createMWs();
	},

  	limpiarFind : function(ix) {
  		editsVeriRecCi.hideId = -1;
  		
  		switch (ix) {
		case 1: 
			editsVeriRecNombre.setValue("");
			editsVeriRecApellido.setValue("");  		
			break;
		case 2: 
			editsVeriRecCi.setValue("");
			editsVeriRecApellido.setValue("");  		
			break;
		default:
			editsVeriRecCi.setValue("");
		editsVeriRecNombre.setValue("");
			break;
		} 
  	},

  	limpiar: function(){
  		editsVeriRecCi.hideId = -1;
		editsVeriRecCi.setValue("");
		editsVeriRecNombre.setValue("");
		editsVeriRecApellido.setValue("");
		selectListVeriRecaudos.deleteAll();
		dialogsVeriRecaudos.setMsg("");
		imgButtonsVeriRecModificar.setDisable();
		dlgWait.hide();
	},

	setEvents: function(){
		editsVeriRecCi.onEnter(this.windowName + ".buscar()");
		editsVeriRecCi.onChange(this.windowName + ".limpiarFind(1)");
		editsVeriRecNombre.onEnter(this.windowName + ".buscar()");
		editsVeriRecNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsVeriRecApellido.onEnter(this.windowName + ".buscar()");
		editsVeriRecApellido.onChange(this.windowName + ".limpiarFind(3)");
		imgButtonsVeriRecModificar.onClick(this.windowName + ".coreUpdate('modificar')");
		imgButtonsVeriRecLimpiar.onClick('VeriRecaudos.limpiar()');
		imgButtonsVeriRecBuscar.onClick('VeriRecaudos.buscar()');
		imgButtonsVeriRecSalir.onClick('dialogsVeriRecaudos.close()');
	},
	
	buscar: function(){
		imgButtonsVeriRecModificar.setDisable();
		if (editsVeriRecCi.getValue() != '' && editsVeriRecNombre.getValue() != '' && editsVeriRecApellido.getValue() != '') {
			imgButtonsVeriRecModificar.setEnable();
			Tool.getSelectListData('MantObject', 'getVeriRecaudos', dialogsVeriRecaudos, selectListVeriRecaudos, 0, 1, 2, editsVeriRecCi);
		}
		else { 
			if (editsVeriRecCi.getValue() != '' || editsVeriRecNombre.getValue() != '' || editsVeriRecApellido.getValue() != '') {
				imgButtonsVeriRecModificar.setDisable();
		        ResuBusqueda.setObjectExtFnc(editsVeriRecCi, editsVeriRecNombre, editsVeriRecApellido, 'VeriRecaudos.buscar()');
				Tool.getGridData('MantObject', 'getMantPersTodas', dialogsVeriRecaudos, gridsResuBusqueda, 'ResuBusqueda', editsVeriRecCi, editsVeriRecCi, editsVeriRecNombre, editsVeriRecNombre, editsVeriRecApellido, editsVeriRecApellido);
			}
			else {
				Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
			}
		}
	},
	
	coreUpdate: function(methodName){
		var rlx = xmlStructs.createRecordList("rlx");
		
		if (editsVeriRecCi.valid(dialogsVeriRecaudos)) 
			if (editsVeriRecNombre.valid(dialogsVeriRecaudos)) 
				if (editsVeriRecApellido.valid(dialogsVeriRecaudos)){ 
					rlx.addInt('reg', editsVeriRecCi.hideId);
					rlx.addInt('reg', selectListVeriRecaudos.getRecordIdSelected());
					Tool.cnnSrv('MantObject', methodName + this.windowName, 'dlgWait.hide()', rlx);
				}
	}
};


