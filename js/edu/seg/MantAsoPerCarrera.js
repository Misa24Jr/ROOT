var dialogsMantAsoPerCarrera = new Object();
var powerComboBoxMantAsoPerCarPerfil = new Object();
var powerComboBoxMantAsoPerCarOrganizacion = new Object();
var powerComboBoxMantAsoPerCarSubOrganizacion = new Object();
var powerComboBoxMantAsoPerCarSubCarrera = new Object();
var gridsMantAsoPerCarrera = new Object();
var imgButtonsMantAsoPerfCarAgregar = new Object();
var imgButtonsMantAsoPerfCarEliminar = new Object();
var imgButtonsMantAsoPerfCarLimpiar = new Object();
var imgButtonsMantAsoPerfCarBuscar = new Object();
var imgButtonsMantAsoPerfCarSalir = new Object();
var mwMantAsoPerCarrera = new Object();// minWindow

var MantAsoPerCarrera = {
	windowName : 'MantAsoPerCarrera',
	isCreate : false,
	idPensum : 0,
	
	show : function() 
	{
		if (!this.isCreate)
		{
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantAsoPerCarrera.isByClean())
 			this.limpiar();			
		dialogsMantAsoPerCarrera.show();
	},
	hide : function() 
	{
		dialogsMantAsoPerCarrera.hide();
	},
	createMWs : function() 
	{
        	mwMantAsoPerCarrera = desktop.addMinWindow('M.A.P.Carrera', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantAsoPerCarrera.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
			
	dialogsMantAsoPerCarrera_Init : function()  {
		dialogsMantAsoPerCarrera.setMinimizeXY(0,0);
        dialogsMantAsoPerCarrera.setCenterScreen();
        dialogsMantAsoPerCarrera.addSpace(0,0,20);
        dialogsMantAsoPerCarrera.addLn(1,1,1);
		dialogsMantAsoPerCarrera.setHeightCell(1,1,10);
        dialogsMantAsoPerCarrera.addObjToDialog(powerComboBoxMantAsoPerCarPerfil,2,1,24);
        powerComboBoxMantAsoPerCarPerfil.setWidthCombo(446);
        dialogsMantAsoPerCarrera.addObjToDialog(powerComboBoxMantAsoPerCarOrganizacion,3,1,24);
        powerComboBoxMantAsoPerCarOrganizacion.setWidthCombo(446);
        dialogsMantAsoPerCarrera.addObjToDialog(powerComboBoxMantAsoPerCarSubOrganizacion,4,1,24);
        powerComboBoxMantAsoPerCarSubOrganizacion.setWidthCombo(446);
        dialogsMantAsoPerCarrera.addObjToDialog(powerComboBoxMantAsoPerCarSubCarrera,5,1,24);
        powerComboBoxMantAsoPerCarSubCarrera.setWidthCombo(446);
        dialogsMantAsoPerCarrera.addLn(6,1,1);
		dialogsMantAsoPerCarrera.setHeightCell(6,1,10);
		dialogsMantAsoPerCarrera.addObjToDialog(gridsMantAsoPerCarrera.getObject(),7,1);
        dialogsMantAsoPerCarrera.addLn(8,1,1);
		dialogsMantAsoPerCarrera.setHeightCell(8,1,12);
		dialogsMantAsoPerCarrera.addObjToDialog(imgButtonsMantAsoPerfCarAgregar,9,1);
        dialogsMantAsoPerCarrera.addObjToDialog(imgButtonsMantAsoPerfCarEliminar,9,1);
        dialogsMantAsoPerCarrera.addObjToDialog(imgButtonsMantAsoPerfCarLimpiar,9,1);
        dialogsMantAsoPerCarrera.addObjToDialog(imgButtonsMantAsoPerfCarBuscar,9,1);
        dialogsMantAsoPerCarrera.addObjToDialog(imgButtonsMantAsoPerfCarSalir,9,1);
        imgButtonsMantAsoPerfCarAgregar.setDimension(90,22);
        imgButtonsMantAsoPerfCarEliminar.setDimension(90,22);
        imgButtonsMantAsoPerfCarLimpiar.setDimension(90,22);
        imgButtonsMantAsoPerfCarBuscar.setDimension(90,22);
        imgButtonsMantAsoPerfCarSalir.setDimension(90,22);
        dialogsMantAsoPerCarrera.adjAllMarginObj(9,1,20);
        dialogsMantAsoPerCarrera.leftMarginObj(9,1,0,27);
	},
	
	gridsMantAsoPerCarrera : function()	{
        gridsMantAsoPerCarrera.setFixColRow(false,true);
        gridsMantAsoPerCarrera.addTitleVectorX(['Perfil','Carrera','idperfil','idorg','idsuborg','idcarrera']);
        gridsMantAsoPerCarrera.showData();
        gridsMantAsoPerCarrera.setSizeCol(1,219);
        gridsMantAsoPerCarrera.setSizeCol(2,370);
        gridsMantAsoPerCarrera.setSizeCol(3,0);
        gridsMantAsoPerCarrera.setSizeCol(4,0);
        gridsMantAsoPerCarrera.setSizeCol(5,0);
        gridsMantAsoPerCarrera.setSizeCol(6,0);
		gridsMantAsoPerCarrera.hideCol(3);
		gridsMantAsoPerCarrera.hideCol(4);
		gridsMantAsoPerCarrera.hideCol(5);
		gridsMantAsoPerCarrera.hideCol(6);
	},
  
	create : function() {
		dialogsMantAsoPerCarrera = dialogs.create('dialogsMantAsoPerCarrera',0,0,633,368,'ASIGNAR PERFIL A CARRERA');
		powerComboBoxMantAsoPerCarPerfil = powerComboBox.create('powerComboBoxMantAsoPerCarPerfil','powerComboBoxMantAsoPerCarPerfil','Perfil (*):',1,125);
		powerComboBoxMantAsoPerCarPerfil.setValidEmpty();
		powerComboBoxMantAsoPerCarPerfil.enableReadOnlyEditor();
		powerComboBoxMantAsoPerCarPerfil.addEmptyOption();
		powerComboBoxMantAsoPerCarPerfil.setFieldFind(true);
		powerComboBoxMantAsoPerCarOrganizacion = powerComboBox.create('powerComboBoxMantAsoPerCarOrganizacion','powerComboBoxMantAsoPerCarOrganizacion','Organización (+):',1,125);
		powerComboBoxMantAsoPerCarOrganizacion.setValidEmpty();
		powerComboBoxMantAsoPerCarOrganizacion.enableReadOnlyEditor();
		powerComboBoxMantAsoPerCarOrganizacion.addEmptyOption();
		powerComboBoxMantAsoPerCarOrganizacion.setFieldFind(true);
		powerComboBoxMantAsoPerCarSubOrganizacion = powerComboBox.create('powerComboBoxMantAsoPerCarSubOrganizacion','powerComboBoxMantAsoPerCarSubOrganizacion','Suborganización (^):',1,125);
		powerComboBoxMantAsoPerCarSubOrganizacion.setValidEmpty();
		powerComboBoxMantAsoPerCarSubOrganizacion.enableReadOnlyEditor();
		powerComboBoxMantAsoPerCarSubOrganizacion.addEmptyOption();
		powerComboBoxMantAsoPerCarSubOrganizacion.setFieldFind(true);
		powerComboBoxMantAsoPerCarSubCarrera = powerComboBox.create('powerComboBoxMantAsoPerCarSubCarrera','powerComboBoxMantAsoPerCarSubCarrera','Carrera (^):',1,125);
		powerComboBoxMantAsoPerCarSubCarrera.setValidEmpty();
		powerComboBoxMantAsoPerCarSubCarrera.enableReadOnlyEditor();
		powerComboBoxMantAsoPerCarSubCarrera.addEmptyOption();
		powerComboBoxMantAsoPerCarSubCarrera.setFieldFind(true);
        powerComboBoxMantAsoPerCarPerfil.setSelectedIndex(0);
        powerComboBoxMantAsoPerCarOrganizacion.setSelectedIndex(0);
		powerComboBoxMantAsoPerCarSubOrganizacion.setSelectedIndex(0);
		powerComboBoxMantAsoPerCarSubCarrera.setSelectedIndex(0);
		gridsMantAsoPerCarrera = grids.create('gridsMantAsoPerCarrera',8,6);
		imgButtonsMantAsoPerfCarAgregar = imgButtons.create('imgButtonsMantAsoPerfCarAgregar','Agregar','ok.png');
		imgButtonsMantAsoPerfCarEliminar = imgButtons.create('imgButtonsMantAsoPerfCarEliminar','Eliminar','eliminar.jpg');
		imgButtonsMantAsoPerfCarEliminar.setDisable();
		imgButtonsMantAsoPerfCarLimpiar = imgButtons.create('imgButtonsMantAsoPerfCarLimpiar','Limpiar','limpiar.png');
		imgButtonsMantAsoPerfCarBuscar = imgButtons.create('imgButtonsMantAsoPerfCarBuscar','Buscar','icono_buscar.png');
		imgButtonsMantAsoPerfCarSalir = imgButtons.create('imgButtonsMantAsoPerfCarSalir','Salir','salir.png');
	},

	init : function() {
	    this.create();
	    this.setEvents();
	    this.dialogsMantAsoPerCarrera_Init();
	    this.gridsMantAsoPerCarrera();
	    this.createMWs();
	},

	limpiarCoreUpdate: function(){
		powerComboBoxMantAsoPerCarSubCarrera.setSelectedIndex(0);
        imgButtonsMantAsoPerfCarAgregar.setEnable();
        imgButtonsMantAsoPerfCarEliminar.setDisable();
		this.resetElements('bus');
	},
	
	limpiar: function(){
		Tool.rstPwrCmb(powerComboBoxMantAsoPerCarPerfil);
		Tool.rstPwrCmb(powerComboBoxMantAsoPerCarOrganizacion);
		Tool.rstPwrCmb(powerComboBoxMantAsoPerCarSubOrganizacion);
		Tool.rstPwrCmb(powerComboBoxMantAsoPerCarSubCarrera);
        gridsMantAsoPerCarrera.clean();
        dialogsMantAsoPerCarrera.setMsg("");
        imgButtonsMantAsoPerfCarAgregar.setEnable();
        imgButtonsMantAsoPerfCarEliminar.setDisable();
		Tool.cnnSrv('SecurityObject', 'getMantPerUsuarioInit', this.windowName + '.loadDataInit()');
    },
    
    loadDataInit: function() {
        Tool.loadPowerComboData(dialogsMantAsoPerCarrera, powerComboBoxMantAsoPerCarOrganizacion, 0, 1, json('getData'));
        Tool.loadPowerComboData(dialogsMantAsoPerCarrera, powerComboBoxMantAsoPerCarPerfil, 0, 1, json('getMantPerfil'));
        dialogsMantAsoPerCarrera.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    setData: function() {
        if (gridsMantAsoPerCarrera.getDataCell(1) != ""){
            powerComboBoxMantAsoPerCarPerfil.findOption(gridsMantAsoPerCarrera.getDataCell(3));
            powerComboBoxMantAsoPerCarOrganizacion.findOption(gridsMantAsoPerCarrera.getDataCell(4));
            this.getSubOrg();
            imgButtonsMantAsoPerfCarAgregar.setDisable();
            imgButtonsMantAsoPerfCarEliminar.setEnable();
        }
    },
    
    getSubOrg: function() {
        var rlx = xmlStructs.createRecordList("rlx");

        rlx.add('reg', powerComboBoxMantAsoPerCarOrganizacion);             
		Tool.cnnSrv('SecurityObject', 'getMantSuborganizacion', this.windowName + '.loadDataSubOrg()', rlx);
    },
    
    loadDataSubOrg: function() {
        Tool.loadPowerComboData(dialogsMantAsoPerCarrera, powerComboBoxMantAsoPerCarSubOrganizacion, 1, 2, json('getMantSuborganizacion'));
		powerComboBoxMantAsoPerCarSubOrganizacion.findOption(gridsMantAsoPerCarrera.getDataCell(5));
		this.getCarrera();
    },
    
    getCarrera: function() {
        var rlx = xmlStructs.createRecordList("rlx");

        rlx.add('reg', powerComboBoxMantAsoPerCarSubOrganizacion);             
		Tool.cnnSrv('SecurityObject', 'getMantCarrera', this.windowName + '.loadDataCarrera()', rlx);
    },
    
    loadDataCarrera: function() {
        Tool.loadPowerComboData(dialogsMantAsoPerCarrera, powerComboBoxMantAsoPerCarSubCarrera, -1, 3, json('getMantCarrera'));
        powerComboBoxMantAsoPerCarSubCarrera.findOption(gridsMantAsoPerCarrera.getDataCell(6), 2);
    },

    setEvents: function(){
    	powerComboBoxMantAsoPerCarPerfil.onChange(this.windowName + ".resetElements('per')");
    	powerComboBoxMantAsoPerCarOrganizacion.onChange(this.windowName + ".resetElements('org')");
    	powerComboBoxMantAsoPerCarSubOrganizacion.onChange(this.windowName + ".resetElements('sub')");
    	powerComboBoxMantAsoPerCarSubCarrera.onChange(this.windowName + ".resetElements('')");
    	gridsMantAsoPerCarrera.onClickCells(this.windowName + ".setData()");
        imgButtonsMantAsoPerfCarAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
        imgButtonsMantAsoPerfCarEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
        imgButtonsMantAsoPerfCarLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsMantAsoPerfCarBuscar.onClick(this.windowName + ".resetElements('bus')");
        imgButtonsMantAsoPerfCarSalir.onClick('dialogsMantAsoPerCarrera.close()');
    },
    
    resetElements : function(element) {
    	gridsMantAsoPerCarrera.clean();
        dialogsMantAsoPerCarrera.setMsg("");
    	if (element == 'org') {
    		Tool.rstPwrCmb(powerComboBoxMantAsoPerCarSubCarrera);
    		Tool.rstPwrCmb(powerComboBoxMantAsoPerCarSubOrganizacion);
    		Tool.getPowerComboData('SecurityObject', 'getMantSuborganizacion', dialogsMantAsoPerCarrera, powerComboBoxMantAsoPerCarSubOrganizacion, 1, 2, powerComboBoxMantAsoPerCarOrganizacion);	  	
    	}
		else if (element == 'sub') {
    		Tool.rstPwrCmb(powerComboBoxMantAsoPerCarSubCarrera);
			Tool.getPowerComboData('SecurityObject', 'getMantCarrera', dialogsMantAsoPerCarrera, powerComboBoxMantAsoPerCarSubCarrera, -1, 3, powerComboBoxMantAsoPerCarSubOrganizacion);	  	
		}
		else if (element == 'bus') {
			Tool.getGridData('SecurityObject', 'getMantAsoPerCarrera', dialogsMantAsoPerCarrera, gridsMantAsoPerCarrera, false, powerComboBoxMantAsoPerCarPerfil, powerComboBoxMantAsoPerCarPerfil, powerComboBoxMantAsoPerCarOrganizacion, powerComboBoxMantAsoPerCarOrganizacion, powerComboBoxMantAsoPerCarSubOrganizacion, powerComboBoxMantAsoPerCarSubOrganizacion, powerComboBoxMantAsoPerCarSubCarrera.setModeReturnGetText(2), powerComboBoxMantAsoPerCarSubCarrera.setModeReturnGetText(2));
		}
		else if (element == 'per') {
	        imgButtonsMantAsoPerfCarAgregar.setEnable();
	        imgButtonsMantAsoPerfCarEliminar.setDisable();
		}
	},

	coreUpdate: function(methodName){
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (methodName == 'eliminar') {
            if (powerComboBoxMantAsoPerCarPerfil.valid(dialogsMantAsoPerCarrera)){
                rlx.add('reg', powerComboBoxMantAsoPerCarPerfil);
                rlx.add('reg', powerComboBoxMantAsoPerCarSubCarrera.setModeReturnGetText(2));
                rlx.add('reg', powerComboBoxMantAsoPerCarSubCarrera.setModeReturnGetText(2));
                procesar = true;
            }
        }
        else {
        	if (powerComboBoxMantAsoPerCarPerfil.valid(dialogsMantAsoPerCarrera)) 
        		if (powerComboBoxMantAsoPerCarOrganizacion.valid(dialogsMantAsoPerCarrera)) 
        			if (powerComboBoxMantAsoPerCarSubOrganizacion.valid(dialogsMantAsoPerCarrera)) 
        				if (powerComboBoxMantAsoPerCarSubCarrera.valid(dialogsMantAsoPerCarrera)) {
        					rlx.add('reg', powerComboBoxMantAsoPerCarPerfil);
                            rlx.add('reg', powerComboBoxMantAsoPerCarSubCarrera.setModeReturnGetText(2));
                            procesar = true;
        				}
        }
        if (procesar) {            
			Tool.cnnSrv('SecurityObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()', rlx);
        }
    }
};
