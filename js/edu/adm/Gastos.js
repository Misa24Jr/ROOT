var dialogsGastos = new Object();
var pcbGasOrganizacion = new Object();
var pcbGasSuborganizacion = new Object();
var pcbGasCarrera = new Object();
var pcbGasPeriodo = new Object();
var pcbGasConGastos = new Object();
var calendarGastos = new Object();
var labelsGasDesGasto = new Object();
var memoGasDesGasto = new Object();
var editsGasTelefono = new Object();
var editsGasDireccion = new Object();
var editsGasCi = new Object();
var editsGasNombre = new Object();
var editsGasApellido = new Object();
var editsGasMonto = new Object();
var editsGasNumReferencia = new Object();
var labelsGasDocAdjunto = new Object();
var gridsGastos = new Object();
var imgButtonsGasAgregar = new Object();
var imgButtonsGasModificar = new Object();
var imgButtonsGasEliminar = new Object();
var imgButtonsGasLimpiar = new Object();
var imgButtonsGasBuscar = new Object();
var imgButtonsGasSalir = new Object();
var mw_Gastos = new Object();//minWindow

var Gastos = {   
    windowName: 'Gastos',
    isCreate: false,
    
    show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsGastos.isByClean())
			this.limpiar('lmp');			
		dialogsGastos.show();
	},
	
	hide : function(){
		dialogsGastos.hide();
	},
	
    createMWs: function(){
        mwGastos = desktop.addMinWindow('R.L.A.Curso', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsGastos.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

	dialogsGastos_Init : function(){
        dialogsGastos.setMinimizeXY(0,0);
        dialogsGastos.setCenterScreen();
        dialogsGastos.addSpace(0,0,20);
        dialogsGastos.addLn(1,1,1);
		dialogsGastos.setHeightCell(1,1,10);
        dialogsGastos.addObjToDialog(pcbGasOrganizacion,2,1,24);
        dialogsGastos.addObjToDialog(pcbGasSuborganizacion,2,1,24);
        dialogsGastos.addObjToDialog(pcbGasCarrera,2,1,24);
        dialogsGastos.adjAllMarginObj(2,1,10);
		dialogsGastos.addObjToDialog(pcbGasPeriodo,3,1,24);
        dialogsGastos.addObjToDialog(pcbGasConGastos,3,1,24);
		dialogsGastos.addObjToDialog(calendarGastos.getEditCalendar(),3,1,24);
		dialogsGastos.adjAllMarginObj(3,1,10);
		dialogsGastos.addLn(4,1,1);
		dialogsGastos.setHeightCell(4,1,5);
		dialogsGastos.addObjToDialog(labelsGasDesGasto,5,1,16);
		labelsGasDesGasto.setFont('arial black','12','Black');
		dialogsGastos.addLn(6,1,1);
		dialogsGastos.setHeightCell(6,1,2);
		dialogsGastos.addObjToDialog(memoGasDesGasto,7,1,24);
		memoGasDesGasto.style.zIndex = 1000;
        dialogsGastos.addLn(8,1,1);
		dialogsGastos.setHeightCell(8,1,5);
		dialogsGastos.addObjToDialog(editsGasCi,9,1,24);
		editsGasCi.setSizeEdit(149);
        dialogsGastos.addObjToDialog(editsGasNombre,9,1,24);
		editsGasNombre.setSizeEdit(149);
		dialogsGastos.addObjToDialog(editsGasApellido,9,1,24);
		editsGasApellido.setSizeEdit(149);
		dialogsGastos.adjAllMarginObj(9,1,10);
		dialogsGastos.addObjToDialog(editsGasTelefono,10,1,24);
		editsGasTelefono.setSizeEdit(149);
        dialogsGastos.addObjToDialog(editsGasDireccion,10,1,24);
		editsGasDireccion.setSizeEdit(388);
		dialogsGastos.adjAllMarginObj(10,1,10);
		dialogsGastos.addObjToDialog(editsGasMonto,11,1,24);
		editsGasMonto.setSizeEdit(149);
        dialogsGastos.addObjToDialog(editsGasNumReferencia,11,1,24);
		editsGasNumReferencia.setSizeEdit(149);
		dialogsGastos.addObject(labelsGasDocAdjunto,583,209);
		labelsGasDocAdjunto.setFont('verdana','11','Black');
		dialogsGastos.adjAllMarginObj(11,1,10);
		dialogsGastos.addLn(12,1,1);
		dialogsGastos.setHeightCell(12,1,10);
        dialogsGastos.addObjToDialog(gridsGastos.getObject(),13,1);
        dialogsGastos.addLn(14,1,1);
		dialogsGastos.setHeightCell(14,1,9);		
		dialogsGastos.addObjToDialog(imgButtonsGasAgregar,15,1);
        dialogsGastos.addObjToDialog(imgButtonsGasModificar,15,1);
        dialogsGastos.addObjToDialog(imgButtonsGasEliminar,15,1);
        dialogsGastos.addObjToDialog(imgButtonsGasLimpiar,15,1);
		dialogsGastos.addObjToDialog(imgButtonsGasBuscar,15,1);
        dialogsGastos.addObjToDialog(imgButtonsGasSalir,15,1);       
        imgButtonsGasAgregar.setDimension(90,22);
        imgButtonsGasModificar.setDimension(90,22);
        imgButtonsGasEliminar.setDimension(90,22);
        imgButtonsGasLimpiar.setDimension(90,22);
		imgButtonsGasBuscar.setDimension(90,22);
        imgButtonsGasSalir.setDimension(90,22);
        dialogsGastos.adjAllMarginObj(15,1,18);
        dialogsGastos.leftMarginObj(15,1,0,73);		
	},
	
	gridsGastos_Init : function()  {
        gridsGastos.setFixColRow(false,true);
        gridsGastos.addTitleVectorX(['Fecha','Concepto','Descripción','Ci/Rif','Nombre','Apellido','Monto']);
        gridsGastos.showData();        
        gridsGastos.setSizeCol(1,60);
        gridsGastos.setSizeCol(2,160);
		gridsGastos.setSizeCol(3,220);
        gridsGastos.setSizeCol(4,73);
		gridsGastos.setSizeCol(5,95);
        gridsGastos.setSizeCol(6,95);
		gridsGastos.setSizeCol(7,80);
        //gridsGastos.hideCol(2);
	},
 
	create : function(){
		dialogsGastos = dialogs.create('dialogsGastos',0,0,831,403,'GASTOS');
		dialogsGastos.setAdjY(50);
		pcbGasOrganizacion = powerComboBox.create('pcbGasOrganizacion','pcbGasOrganizacion','Organización (+):',1,103);
		pcbGasOrganizacion.enableReadOnlyEditor();
		pcbGasOrganizacion.addEmptyOption();
		pcbGasOrganizacion.setValidEmpty();
		pcbGasSuborganizacion = powerComboBox.create('pcbGasSuborganizacion','pcbGasSuborganizacion','Suborganización (^):',1,140);
		pcbGasSuborganizacion.enableReadOnlyEditor();
		pcbGasSuborganizacion.addEmptyOption();
		pcbGasSuborganizacion.setValidEmpty();
		pcbGasCarrera = powerComboBox.create('pcbGasCarrera','pcbGasCarrera','Carrera (^):',1,79);
		pcbGasCarrera.enableReadOnlyEditor();
		pcbGasCarrera.addEmptyOption();
		pcbGasCarrera.setValidEmpty();
		pcbGasPeriodo = powerComboBox.create('pcbGasPeriodo','pcbGasPeriodo','Periodo (*):',1,103);
		pcbGasPeriodo.enableReadOnlyEditor();
		pcbGasPeriodo.addEmptyOption();
		pcbGasPeriodo.setValidEmpty();
		pcbGasConGastos = powerComboBox.create('pcbGasConGastos','pcbGasConGastos','Concepto de Gastos (*):',1,140);
		pcbGasConGastos.enableReadOnlyEditor();
		pcbGasConGastos.addEmptyOption();
		pcbGasConGastos.setValidEmpty();			  
	    calendarGastos = calendars.create('calendarAjusCuofec1');      
	    calendarGastos.setWidthEditCalendar(127);
        calendarGastos.setCaption('Fecha:',1,79);
        calendarGastos.sendToFrom(100);
        calendarGastos.setValidEmpty();
		calendarGastos.setFieldFind(true);				
		labelsGasDesGasto = labels.create('labelsGasDesGasto','Descripción del Gasto:',1);	  
		memoGasDesGasto = memo.create('memoGasDesGasto','', 1, 0, 0);
		memoGasDesGasto.vAlignCaption('middle');
		memoGasDesGasto.setDimension(788, 40);
		memoGasDesGasto.setMaxLength(300);
		memoGasDesGasto.setValidEmpty(); 
		gridsGastos = grids.create('gridsGastos',5,7);		
		editsGasTelefono = edits.create('editsGasTelefono', 'editsGasTelefono', 'Telefono:', 1,103, 'normal');
        editsGasTelefono.setValidInteger();
		editsGasTelefono.setFieldFind(true);
        editsGasDireccion = edits.create('editsGasDireccion', 'editsGasDireccion', 'Dirección:', 1,140, 'normal');
        editsGasDireccion.setValidEmpty();
		editsGasDireccion.setFieldFind(true);	
		editsGasCi = edits.create('editsGasCi', 'editsGasCi', 'C.i. (*):', 1,103, 'normal');
        editsGasCi.setValidInteger();
		editsGasCi.setFieldFind(true);
        editsGasNombre = edits.create('editsGasNombre', 'editsGasNombre', 'Nombre (*):', 1,140, 'normal');
        editsGasNombre.setValidEmpty();
		editsGasNombre.setFieldFind(true);
        editsGasApellido = edits.create('editsGasApellido', 'editsGasApellido', 'Apellido (*):', 1,79, 'normal');
        editsGasApellido.setValidEmpty();
		editsGasApellido.setFieldFind(true);		
		editsGasMonto = edits.create('editsGasMonto', 'editsGasMonto', 'Monto:', 1,103, 'normal');
        editsGasMonto.setValidInteger();
		editsGasMonto.setFieldFind(true);        
		editsGasNumReferencia = edits.create('editsGasNumReferencia', 'editsGasNumReferencia', 'Numero Ref:', 1,140, 'normal');
        editsGasNumReferencia.setValidEmpty();
		editsGasNumReferencia.setFieldFind(true);		
        labelsGasDocAdjunto = labels.create('labelsGasDocAdjunto','Doc. Adjunto:',1);		
        pcbGastosMateria = powerComboBox.create('pcbGastosMateria','pcbGastosMateria','Materia (^):',1,103);
	    pcbGastosMateria.enableReadOnlyEditor();
        pcbGastosMateria.addEmptyOption();
        pcbGastosMateria.setValidEmpty();
        pcbGastosMateria.setDataType('string');
        pcbGastosMateria.setFieldFind(true);
        pcbGastosSeccion = powerComboBox.create('pcbGastosSeccion','pcbGastosSeccion','Sección (^):',1,99);
	    pcbGastosSeccion.enableReadOnlyEditor();
        pcbGastosSeccion.addEmptyOption();
        pcbGastosSeccion.setValidEmpty();
        pcbGastosSeccion.setDataType('string');
        pcbGastosSeccion.setFieldFind(true);
        pcbGastosTipFormato = powerComboBox.create('pcbGastosTipFormato','pcbGastosTipFormato','Tipo de Formato:',1,99);
	    pcbGastosTipFormato.enableReadOnlyEditor();
        pcbGastosTipFormato.addEmptyOption();
        pcbGastosTipFormato.setValidEmpty();
        pcbGastosTipFormato.setDataType('string');
        pcbGastosTipFormato.setFieldFind(true);
		imgButtonsGasAgregar = imgButtons.create('imgButtonsGasAgregar','Agregar','ok.png');
		imgButtonsGasModificar = imgButtons.create('imgButtonsGasModificar','Modificar','icono_modificar.png');
		imgButtonsGasEliminar = imgButtons.create('imgButtonsGasEliminar','Eliminar','eliminar.jpg');
		imgButtonsGasLimpiar = imgButtons.create('imgButtonsGasLimpiar','Limpiar','limpiar.png');
		imgButtonsGasBuscar = imgButtons.create('imgButtonsGasBuscar','Buscar','icono_buscar.png');
		imgButtonsGasSalir = imgButtons.create('imgButtonsGasSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsGastos_Init();
		this.gridsGastos_Init();
		this.createMWs();
	},
  
	limpiar : function(tipo) {
  		pcbGasOrganizacion.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbGasSuborganizacion);
  		Tool.rstPwrCmb(pcbGasCarrera);  		
  		dialogsGastos.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},


	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsGastos, pcbGasOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsGastos, pcbGasOrganizacion, pcbGasSuborganizacion, pcbGasCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function(){
    	pcbGasOrganizacion.onChange(this.windowName + ".resetElements('org')");
		pcbGasSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		pcbGasCarrera.onChange(this.windowName + ".resetElements('carr')");		
		pcbGasConGastos.onChange(this.windowName + ".resetElements('gas')");		
    },
    
    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(pcbGasSuborganizacion);
	  		Tool.rstPwrCmb(pcbGasCarrera);
	  		Tool.rstPwrCmb(pcbGasPeriodo);	  		
			Tool.rstPwrCmb(pcbGasConGastos);			
	    	if (pcbGasOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsGastos, pcbGasSuborganizacion, 1, 2, pcbGasOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbGasCarrera);
	  		Tool.rstPwrCmb(pcbGasPeriodo);	  		;
			Tool.rstPwrCmb(pcbGasConGastos);			
	    	if (pcbGasSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsGastos, pcbGasCarrera, -1, 3, pcbGasSuborganizacion);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(pcbGasPeriodo);	  		
			Tool.rstPwrCmb(pcbGasConGastos);	
		}	    
	},
		
	coreUpdate: function(){
        var rlx = xmlStructs.createRecordList("rlx");
        if (pcbGasPeriodo.valid(dialogsGastos))
			if (pcbGasConGastos.valid(dialogsGastos))				
				if (pcbGastosTipFormato.valid(dialogsGastos)){
					rlx.add('reg', pcbGasCarrera.setModeReturnGetText(2));
					rlx.add('reg', pcbGasConGastos);
					rlx.add('reg', pcbGasPeriodo);						
					if (pcbGastosTipFormato.getValue()=="Inicial/Basica/Nuevo")
					Tool.cnnSrv('ReportObject', 'getRepoListAlumnoCurso', this.windowName + '.reporte2()', rlx);
						
					}
	}
}
