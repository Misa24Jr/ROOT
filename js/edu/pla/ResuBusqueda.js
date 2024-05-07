var dialogsResuBusqueda = new Object();
var gridsResuBusqueda = new Object();
var hideIdCedula = new Object();
var hideDeNombre = new Object();
var hideDeApellido = new Object();

var ResuBusqueda = {
    windowName: 'ResuBusqueda',
    isCreate: false,
	fnc : new Function(''),

	setObjectExtFnc: function(objCi, objNombre, objApellido, fnc) {
		hideIdCedula = objCi;
		hideDeNombre = objNombre;
		hideDeApellido = objApellido;	
		this.setExtFnc(fnc);
	},
	
	setExtFnc: function(fnc) {
		this.fnc = new Function(fnc);
	},
	
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        dialogsResuBusqueda.setMsg("");			
        gridsResuBusqueda.clean();
        dialogsResuBusqueda.showModal();
    },	

    dialogsResuBusqueda_Init: function(){
        dialogsResuBusqueda.setMinimizeXY(0, 0);
        dialogsResuBusqueda.setCenterScreen();
        dialogsResuBusqueda.setEnableMinimize(false);
        dialogsResuBusqueda.addObjToDialog(gridsResuBusqueda.getObject(), 2, 1);
    },
	
    gridsResuBusqueda_Init: function(){
        gridsResuBusqueda.setFixColRow(false, true);
        gridsResuBusqueda.addTitleVectorX(['Cedula', 'Nombre', 'Apellido', 'idPersona']);
        gridsResuBusqueda.showData();
        gridsResuBusqueda.setSizeCol(1, 89);
        gridsResuBusqueda.setSizeCol(2, 195);
        gridsResuBusqueda.setSizeCol(3, 195);
        gridsResuBusqueda.setSizeCol(4, 0);
        gridsResuBusqueda.hideCol(4);
    },
    
    create: function(){
        dialogsResuBusqueda = dialogs.create('dialogsResuBusqueda', 0, 0, 480, 345, 'RESULTADO DE LA BUSQUEDA');
		dialogsResuBusqueda.style.zIndex = '100000';
  		dialogsResuBusqueda.setStaticOrder(true); 
        gridsResuBusqueda = grids.create('gridsResuBusqueda', 15, 4);
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsResuBusqueda_Init();
        this.gridsResuBusqueda_Init();
    },
    
    setData: function(){
        if (gridsResuBusqueda.getDataCell(1) != "") {
        	hideIdCedula.hideId = gridsResuBusqueda.getDataCell(4);
            hideIdCedula.setValue(gridsResuBusqueda.getDataCell(1));
			hideDeNombre.setValue(gridsResuBusqueda.getDataCell(2));
            hideDeApellido.setValue(gridsResuBusqueda.getDataCell(3));
            this.fnc();
			dialogsResuBusqueda.close();
        }
    },

    setEvents: function(){
    	gridsResuBusqueda.onClickCells(this.windowName + ".setData()");
//    	gridsResuBusqueda.onEnter(this.windowName + ".setData()");
    	gridsResuBusqueda.onEscape("dialogsResuBusqueda.close()");
    }
};
