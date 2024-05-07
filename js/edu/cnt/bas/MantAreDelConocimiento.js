var dialogsMantAreDelConocimiento = new Object();
var pcbAreDelConOrganizacion = new Object();
var pcbAreDelConSuborganizacion = new Object();
var pcbAreDelConCarrera = new Object();
var pcbAreDelConPosicion = new Object();
var pcbAreDelConMateria = new Object();
var pcbAreDelConComponente = new Object();
var pcbAreDelConContenido = new Object();
var memoMantAreDelConIndicador = new Object();
var gridsMantAreDelConCodDescripcion = new Object();
var imgButtonsMantAreDelConAgregar = new Object();
var imgButtonsMantAreDelConModificar = new Object();
var imgButtonsMantAreDelConEliminar = new Object();
var imgButtonsMantAreDelConLimpiar = new Object();
var imgButtonsMantAreDelConBuscar = new Object();
var imgButtonsMantAreDelConSalir = new Object();
var mwMantAreDelConocimiento = new Object();// minWindow

var MantAreDelConocimiento = {
	windowName : 'MantAreDelConocimiento',
	isCreate : false,
	idMatComCon : 0,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantAreDelConocimiento.isByClean())
 			this.limpiar();			
		dialogsMantAreDelConocimiento.show();
	},
	
	hide : function(){
		dialogsMantAreDelConocimiento.hide();
	},
	
	createMWs : function(){
        	mwMantAreDelConocimiento = desktop.addMinWindow('Áreas del Conocimiento', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantAreDelConocimiento.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantAreDelConocimiento_Init : function(){
        dialogsMantAreDelConocimiento.setMinimizeXY(0,0);
        dialogsMantAreDelConocimiento.setCenterScreen();
        dialogsMantAreDelConocimiento.addSpace(0,0,20);
        dialogsMantAreDelConocimiento.addLn(1,1,1);
		dialogsMantAreDelConocimiento.setHeightCell(1,1,10);  
		dialogsMantAreDelConocimiento.addObjToDialog(pcbAreDelConOrganizacion,2,1,24);
		dialogsMantAreDelConocimiento.addObjToDialog(pcbAreDelConSuborganizacion,2,1,24);
		dialogsMantAreDelConocimiento.addObjToDialog(pcbAreDelConCarrera,2,1,24);
		dialogsMantAreDelConocimiento.adjAllMarginObj(2,1,18);
		dialogsMantAreDelConocimiento.addObjToDialog(pcbAreDelConPosicion,3,1,24);
		dialogsMantAreDelConocimiento.addObjToDialog(pcbAreDelConMateria,3,1,24);
		pcbAreDelConMateria.setWidthCombo(366);
		dialogsMantAreDelConocimiento.adjAllMarginObj(3,1,18);
		dialogsMantAreDelConocimiento.addObjToDialog(pcbAreDelConComponente,5,1,24);
		pcbAreDelConComponente.setWidthCombo(656);
		dialogsMantAreDelConocimiento.addObjToDialog(pcbAreDelConContenido,6,1,24);
		pcbAreDelConContenido.setWidthCombo(656);
		dialogsMantAreDelConocimiento.addLn(7,1,1);
		dialogsMantAreDelConocimiento.setHeightCell(7,1,62);
		dialogsMantAreDelConocimiento.addObject(memoMantAreDelConIndicador,20,134);
		memoMantAreDelConIndicador.vAlignCaption('middle');
		memoMantAreDelConIndicador.setDimension(675, 50);
		memoMantAreDelConIndicador.setMaxLength(5000); 
        dialogsMantAreDelConocimiento.addLn(8,1,1);
		dialogsMantAreDelConocimiento.setHeightCell(8,1,6);  
        dialogsMantAreDelConocimiento.addObjToDialog(gridsMantAreDelConCodDescripcion.getObject(),9,1);
        dialogsMantAreDelConocimiento.addLn(10,1,1);
		dialogsMantAreDelConocimiento.setHeightCell(10,1,10);  
        dialogsMantAreDelConocimiento.addObjToDialog(imgButtonsMantAreDelConAgregar,11,1);
        dialogsMantAreDelConocimiento.addObjToDialog(imgButtonsMantAreDelConModificar,11,1);
        dialogsMantAreDelConocimiento.addObjToDialog(imgButtonsMantAreDelConEliminar,11,1);
        dialogsMantAreDelConocimiento.addObjToDialog(imgButtonsMantAreDelConLimpiar,11,1);
        dialogsMantAreDelConocimiento.addObjToDialog(imgButtonsMantAreDelConBuscar,11,1);
        dialogsMantAreDelConocimiento.addObjToDialog(imgButtonsMantAreDelConSalir,11,1); 
        imgButtonsMantAreDelConAgregar.setDimension(90,22);
        imgButtonsMantAreDelConModificar.setDimension(90,22);
        imgButtonsMantAreDelConEliminar.setDimension(90,22);
        imgButtonsMantAreDelConLimpiar.setDimension(90,22);
        imgButtonsMantAreDelConBuscar.setDimension(90,22);
        imgButtonsMantAreDelConSalir.setDimension(90,22);
        dialogsMantAreDelConocimiento.adjAllMarginObj(11,1,18);
        dialogsMantAreDelConocimiento.leftMarginObj(11,1,0,70);
	},
		
	gridsMantAreDelConCodDescripcion_Init : function(){
        gridsMantAreDelConCodDescripcion.setFixColRow(false,true);
        gridsMantAreDelConCodDescripcion.addTitleVectorX(['Componente','Contenido','Indicador','idMateCompCont','idCont','id_compot']);
        gridsMantAreDelConCodDescripcion.showData(); 
        gridsMantAreDelConCodDescripcion.setSizeCol(1,138);       
        gridsMantAreDelConCodDescripcion.setSizeCol(2,501);
        gridsMantAreDelConCodDescripcion.setSizeCol(3,138);
        gridsMantAreDelConCodDescripcion.setSizeCol(4,0);
        gridsMantAreDelConCodDescripcion.setSizeCol(5,0);
        gridsMantAreDelConCodDescripcion.setSizeCol(6,0);
        gridsMantAreDelConCodDescripcion.hideCol(4);
        gridsMantAreDelConCodDescripcion.hideCol(5);
        gridsMantAreDelConCodDescripcion.hideCol(6);
	},

	create : function(){
		dialogsMantAreDelConocimiento = dialogs.create('dialogsMantAreDelConocimiento',0,0,820,592,'ÁREAS DEL CONOCIMIENTO');
		dialogsMantAreDelConocimiento.setAdjY(40);
		pcbAreDelConOrganizacion = powerComboBox.create('pcbAreDelConOrganizacion','pcbAreDelConOrganizacion','Organización (+):',1,103);
      	pcbAreDelConOrganizacion.setValidEmpty();
      	pcbAreDelConOrganizacion.enableReadOnlyEditor();
      	pcbAreDelConOrganizacion.addEmptyOption();
      	pcbAreDelConSuborganizacion = powerComboBox.create('pcbAreDelConSuborganizacion','pcbAreDelConSuborganizacion','Suborganización (^):',1,122);
      	pcbAreDelConSuborganizacion.setValidEmpty();
      	pcbAreDelConSuborganizacion.enableReadOnlyEditor();
      	pcbAreDelConSuborganizacion.addEmptyOption();
		pcbAreDelConCarrera = powerComboBox.create('pcbAreDelConCarrera','pcbAreDelConCarrera','Carrera (^):',1,70);
      	pcbAreDelConCarrera.setValidEmpty();
      	pcbAreDelConCarrera.enableReadOnlyEditor();
      	pcbAreDelConCarrera.addEmptyOption();
		pcbAreDelConPosicion = powerComboBox.create('pcbAreDelConPosicion','pcbAreDelConPosicion','Posición (^):',1,103);
      	pcbAreDelConPosicion.setValidEmpty();
      	pcbAreDelConPosicion.enableReadOnlyEditor();
      	pcbAreDelConPosicion.addEmptyOption();
      	pcbAreDelConMateria = powerComboBox.create('pcbAreDelConMateria','pcbAreDelConMateria','Materia (^):',1,122);
      	pcbAreDelConMateria.setValidEmpty();
      	pcbAreDelConMateria.enableReadOnlyEditor();
      	pcbAreDelConMateria.addEmptyOption();
      	pcbAreDelConMateria.setDataType('string');
      	pcbAreDelConComponente = powerComboBox.create('pcbAreDelConComponente','pcbAreDelConComponente','Componente (*):',1,103);
      	pcbAreDelConComponente.setValidEmpty();
      	pcbAreDelConComponente.enableReadOnlyEditor();
      	pcbAreDelConComponente.addEmptyOption();
      	pcbAreDelConComponente.setFieldFind(true);
      	pcbAreDelConContenido = powerComboBox.create('pcbAreDelConContenido','pcbAreDelConContenido','Contenido:',1,103);
      	pcbAreDelConContenido.setValidEmpty();
      	pcbAreDelConContenido.enableReadOnlyEditor();
      	pcbAreDelConContenido.addEmptyOption();
      	memoMantAreDelConIndicador = memo.create('memoMantAreDelConIndicador','Indicador:',1,0,102);
		memoMantAreDelConIndicador.setValidEmpty(); 
		gridsMantAreDelConCodDescripcion = grids.create('gridsMantAreDelConCodDescripcion',17,6);
		imgButtonsMantAreDelConAgregar = imgButtons.create('imgButtonsMantAreDelConAgregar','Agregar','ok.png');
		imgButtonsMantAreDelConModificar = imgButtons.create('imgButtonsMantAreDelConModificar','Modificar','icono_modificar.png');
		imgButtonsMantAreDelConModificar.setDisable();
		imgButtonsMantAreDelConEliminar = imgButtons.create('imgButtonsMantAreDelConEliminar','Eliminar','eliminar.png');
      	imgButtonsMantAreDelConEliminar.setDisable();
      	imgButtonsMantAreDelConLimpiar = imgButtons.create('imgButtonsMantAreDelConLimpiar','Limpiar','limpiar.png');
      	imgButtonsMantAreDelConBuscar = imgButtons.create('imgButtonsMantAreDelConBuscar','Buscar','icono_buscar.png');
      	imgButtonsMantAreDelConSalir = imgButtons.create('imgButtonsMantAreDelConSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMantAreDelConocimiento_Init();
		this.gridsMantAreDelConCodDescripcion_Init();
		this.createMWs();		
	},

  	limpiar : function(){
  		Tool.rstPwrCmb(pcbAreDelConOrganizacion);
  		Tool.rstPwrCmb(pcbAreDelConSuborganizacion);
  		Tool.rstPwrCmb(pcbAreDelConCarrera);
  		Tool.rstPwrCmb(pcbAreDelConPosicion);
  		Tool.rstPwrCmb(pcbAreDelConMateria);
  		Tool.rstPwrCmb(pcbAreDelConComponente);
  		Tool.rstPwrCmb(pcbAreDelConContenido);
  		memoMantAreDelConIndicador.setText("");
  		gridsMantAreDelConCodDescripcion.clean();
		imgButtonsMantAreDelConAgregar.setEnable();
		imgButtonsMantAreDelConModificar.setDisable();
		imgButtonsMantAreDelConEliminar.setDisable();	
  		dialogsMantAreDelConocimiento.setMsg("");
		Tool.cnnSrv('MantObject', 'getMantAreDelConocimientoInit', this.windowName + '.loadDataInit()');
    },
    
	loadDataInit: function() {
    	Tool.loadPowerComboData(dialogsMantAreDelConocimiento, pcbAreDelConOrganizacion, 0, 1, json('getData'));
    	Tool.loadPowerComboData(dialogsMantAreDelConocimiento, pcbAreDelConComponente, 0, 1,  json('getMantBasComponentes'));
    	Tool.loadPowerComboData(dialogsMantAreDelConocimiento, pcbAreDelConContenido, 0, 1,  json('getMantBasContenidos'));
    	Tool.getContext(dialogsMantAreDelConocimiento, pcbAreDelConOrganizacion, pcbAreDelConSuborganizacion, pcbAreDelConCarrera, "Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsMantAreDelConocimiento, pcbAreDelConPosicion, 0, 1, pcbAreDelConCarrera.setModeReturnGetText(2))");
    },
  	
  	setData : function(){
		if (gridsMantAreDelConCodDescripcion.getDataCell(1) != ""){
			this.idMatComCon = gridsMantAreDelConCodDescripcion.getDataCell(4)
			pcbAreDelConComponente.findOption(gridsMantAreDelConCodDescripcion.getDataCell(6));
			pcbAreDelConContenido.findOption(gridsMantAreDelConCodDescripcion.getDataCell(5));			
			memoMantAreDelConIndicador.setText(gridsMantAreDelConCodDescripcion.getDataCell(3));
			imgButtonsMantAreDelConAgregar.setDisable();
			imgButtonsMantAreDelConModificar.setEnable();
			imgButtonsMantAreDelConEliminar.setEnable();
        }     			
	},

    resetElements : function(element) {
		memoMantAreDelConIndicador.setText("");
		gridsMantAreDelConCodDescripcion.clean();
		imgButtonsMantAreDelConAgregar.setEnable();
		imgButtonsMantAreDelConModificar.setDisable();
		imgButtonsMantAreDelConEliminar.setDisable();	
		if (element == 'org') {
			Tool.rstPwrCmb(pcbAreDelConCarrera);
			Tool.rstPwrCmb(pcbAreDelConPosicion);
			Tool.rstPwrCmb(pcbAreDelConMateria);
	    	pcbAreDelConComponente.setSelectedIndex(0);
	    	pcbAreDelConContenido.setSelectedIndex(0);
			Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsMantAreDelConocimiento, pcbAreDelConSuborganizacion, 1, 2, pcbAreDelConOrganizacion);		
		}
		else if (element == 'sub') {
			Tool.rstPwrCmb(pcbAreDelConPosicion);
			Tool.rstPwrCmb(pcbAreDelConMateria);
	    	pcbAreDelConComponente.setSelectedIndex(0);
	    	pcbAreDelConContenido.setSelectedIndex(0);
			Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsMantAreDelConocimiento, pcbAreDelConCarrera, -1, 3, pcbAreDelConSuborganizacion);		
		}
		else if (element == 'car') {
			Tool.rstPwrCmb(pcbAreDelConMateria);
	    	pcbAreDelConComponente.setSelectedIndex(0);
	    	pcbAreDelConContenido.setSelectedIndex(0);
			Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsMantAreDelConocimiento, pcbAreDelConPosicion, 0, 1, pcbAreDelConCarrera.setModeReturnGetText(2));		
		}
		else if (element == 'pos') {
	    	pcbAreDelConComponente.setSelectedIndex(0);
	    	pcbAreDelConContenido.setSelectedIndex(0);
	    	Tool.getPowerComboData('MantObject', 'getMantPensumMateria', dialogsMantAreDelConocimiento, pcbAreDelConMateria, 0, 1, pcbAreDelConCarrera.setModeReturnGetText(2), pcbAreDelConPosicion);        		
		}
	},

	setEvents : function(){
		pcbAreDelConOrganizacion.onChange(this.windowName + ".resetElements('org')");
		pcbAreDelConSuborganizacion.onChange(this.windowName + ".resetElements('sub')");
		pcbAreDelConCarrera.onChange(this.windowName + ".resetElements('car')");
		pcbAreDelConPosicion.onChange(this.windowName + ".resetElements('pos')");
		pcbAreDelConMateria.onChange(this.windowName + ".reset()");
		pcbAreDelConComponente.onChange(this.windowName + ".resetElements('com')");
		pcbAreDelConContenido.onEnter(this.windowName + ".coreUpdate('agregar')");
		pcbAreDelConContenido.onChange(this.windowName + ".resetElements('')");
		gridsMantAreDelConCodDescripcion.onClickCells(this.windowName+".setData()");
	    imgButtonsMantAreDelConAgregar.onClick(this.windowName+".coreUpdate('agregar')");
		imgButtonsMantAreDelConModificar.onClick(this.windowName+".coreUpdate('modificar')");
		imgButtonsMantAreDelConEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
	  	imgButtonsMantAreDelConBuscar.onClick(this.windowName+".buscar()");
	  	imgButtonsMantAreDelConLimpiar.onClick(this.windowName+".limpiar()");
	  	imgButtonsMantAreDelConSalir.onClick('dialogsMantAreDelConocimiento.close()');	  	 	
    },
	
	reset : function(){
  		pcbAreDelConComponente.setSelectedIndex(0);
		pcbAreDelConContenido.setSelectedIndex(0);
  		memoMantAreDelConIndicador.setText("");
  		gridsMantAreDelConCodDescripcion.clean();
	},	
	    
    buscar : function(){
		if (pcbAreDelConMateria.valid(dialogsMantAreDelConocimiento)) {
			gridsMantAreDelConCodDescripcion.clean(); 
			Tool.getGridData("MantObject", "get"+this.windowName, dialogsMantAreDelConocimiento, gridsMantAreDelConCodDescripcion, false, pcbAreDelConMateria, pcbAreDelConComponente, pcbAreDelConComponente);
		}
    },
    
	limpiarCoreUpdate : function(methodName){
		memoMantAreDelConIndicador.setText("");
		imgButtonsMantAreDelConAgregar.setEnable();
		imgButtonsMantAreDelConModificar.setDisable();
		imgButtonsMantAreDelConEliminar.setDisable();	
  		dialogsMantAreDelConocimiento.setMsg("");

        if (methodName == "eliminar" && gridsMantAreDelConCodDescripcion.getTotalRecord() == 1) { 
        	gridsMantAreDelConCodDescripcion.clean();
        	dlgWait.hide();
        }
        else
  			Tool.getGridData("MantObject", "get"+this.windowName, dialogsMantAreDelConocimiento, gridsMantAreDelConCodDescripcion, false, pcbAreDelConMateria, pcbAreDelConComponente, pcbAreDelConComponente); 		    		
	},
	
	coreUpdate : function(methodName){
		var rlx = xmlStructs.createRecordList("rlx");
		
		if (pcbAreDelConMateria.valid(dialogsMantAreDelConocimiento))
			if (pcbAreDelConComponente.valid(dialogsMantAreDelConocimiento))
				if (pcbAreDelConContenido.valid(dialogsMantAreDelConocimiento)) {
					if (methodName == 'eliminar') 
						rlx.addInt('reg', this.idMatComCon);
					else {
						rlx.add('reg', pcbAreDelConMateria);
						rlx.add('reg', pcbAreDelConComponente);
						rlx.add('reg', pcbAreDelConContenido);
						rlx.add('reg', memoMantAreDelConIndicador);			
						if (methodName == 'modificar') rlx.addInt('reg', this.idMatComCon);
					}
					Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
				}
	}
};