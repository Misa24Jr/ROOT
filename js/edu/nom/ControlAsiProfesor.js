var dialogsControlAsiProfesor = new Object();
var editsControlAsiProCi = new Object();
var editsControlAsiProNombre = new Object();
var editsControlAsiProApellido = new Object();
var editsControlAsiProHorTrabajadas = new Object();
var editsControlAsiProHorNoTrabajadas = new Object();
var calendarsControlAsiProFecRegistro = new Object();
var memoControlAsiProfesor = new Object();
var gridsControlAsiProfesor = new Object();
var imgButtonsControlAsiProfesorAgregar = new Object();
var imgButtonsControlAsiProfesorModificar = new Object();
var imgButtonsControlAsiProfesorEliminar = new Object();
var imgButtonsControlAsiProfesorLimpiar = new Object();
var imgButtonsControlAsiProfesorBuscar = new Object();
var imgButtonsControlAsiProfesorSalir = new Object();
var mwControlAsiProfesor  = new Object();// minWindow
var ControlAsiProfesor  = {
	windowName : 'ControlAsiProfesor',
	isCreate : false,
	
	show : function() 
	{
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsControlAsiProfesor.isByClean())
 			this.limpiar();			
		dialogsControlAsiProfesor.show();
	},
	hide : function() {
		dialogsControlAsiProfesor.hide();
	},
	createMWs : function() {
		mwControlAsiProfesor = desktop.addMinWindow('C.A.Profesor','ControlAsiProfesor.show()','ControlAsiProfesor.hide()','ControlAsiProfesor.hide()');	
		dialogsControlAsiProfesor.setMinWindowEvent('mwControlAsiProfesor.hide()','mwControlAsiProfesor.disable()','mwControlAsiProfesor.show()');
	},
  	dialogsControlAsiProfesor_Init : function(){
        dialogsControlAsiProfesor.setMinimizeXY(0,0);
        dialogsControlAsiProfesor.setCenterScreen();
        dialogsControlAsiProfesor.addSpace(1,0,20);
        dialogsControlAsiProfesor.addLn(1,1,1);
		dialogsControlAsiProfesor.setHeightCell(1,1,10);
        dialogsControlAsiProfesor.addObjToDialog(editsControlAsiProCi,2,1,24);
        editsControlAsiProCi.setSizeEdit(149);
		dialogsControlAsiProfesor.addObjToDialog(editsControlAsiProNombre,2,1,24);
        editsControlAsiProNombre.setSizeEdit(149);
		editsControlAsiProNombre.setMaxLength(50); 
		dialogsControlAsiProfesor.addObjToDialog(editsControlAsiProApellido,2,1,24);
        editsControlAsiProApellido.setSizeEdit(149);
		editsControlAsiProApellido.setMaxLength(50); 
		dialogsControlAsiProfesor.adjAllMarginObj(2,1,20);
        dialogsControlAsiProfesor.addObjToDialog(editsControlAsiProHorTrabajadas,3,1,24);
        editsControlAsiProHorTrabajadas.setSizeEdit(149);
        dialogsControlAsiProfesor.addObjToDialog(editsControlAsiProHorNoTrabajadas,3,1,24);
        editsControlAsiProHorNoTrabajadas.setSizeEdit(149);
        dialogsControlAsiProfesor.addObjToDialog(calendarsControlAsiProFecRegistro.getEditCalendar(),3,1);
        calendarsControlAsiProFecRegistro.setWidthEditCalendar(127);
        calendarsControlAsiProFecRegistro.setCaption('Fecha del Registro:',1,113,24);
		dialogsControlAsiProfesor.adjAllMarginObj(3,1,20);
		dialogsControlAsiProfesor.addLn(4,1,1);
		dialogsControlAsiProfesor.setHeightCell(4,1,4);
        dialogsControlAsiProfesor.addObjToDialog(memoControlAsiProfesor,5,1);
		memoControlAsiProfesor.vAlignCaption('middle');
        memoControlAsiProfesor.setDimension(726,40);
		memoControlAsiProfesor.setMaxLength(50); 
        dialogsControlAsiProfesor.addLn(6,1,1);
		dialogsControlAsiProfesor.setHeightCell(6,1,6);
        dialogsControlAsiProfesor.addObjToDialog(gridsControlAsiProfesor.getObject(),7,1);
        dialogsControlAsiProfesor.addLn(8,1,1);
		dialogsControlAsiProfesor.setHeightCell(8,1,12);
        dialogsControlAsiProfesor.addObjToDialog(imgButtonsControlAsiProfesorAgregar,9,1);
        dialogsControlAsiProfesor.addObjToDialog(imgButtonsControlAsiProfesorModificar,9,1);
        dialogsControlAsiProfesor.addObjToDialog(imgButtonsControlAsiProfesorEliminar,9,1);
        dialogsControlAsiProfesor.addObjToDialog(imgButtonsControlAsiProfesorLimpiar,9,1);
        dialogsControlAsiProfesor.addObjToDialog(imgButtonsControlAsiProfesorBuscar,9,1);
        dialogsControlAsiProfesor.addObjToDialog(imgButtonsControlAsiProfesorSalir,9,1);
        imgButtonsControlAsiProfesorAgregar.setDimension(90,22);
        imgButtonsControlAsiProfesorModificar.setDimension(90,22);
        imgButtonsControlAsiProfesorEliminar.setDimension(90,22);
        imgButtonsControlAsiProfesorLimpiar.setDimension(90,22);
        imgButtonsControlAsiProfesorBuscar.setDimension(90,22);
        imgButtonsControlAsiProfesorSalir.setDimension(90,22);
        dialogsControlAsiProfesor.adjAllMarginObj(9,1,20);
        dialogsControlAsiProfesor.leftMarginObj(9,1,0,93);
  },
  gridsControlAsiProfesor_Init : function(){
        gridsControlAsiProfesor.setFixColRow(false,true);
        gridsControlAsiProfesor.addTitleVectorX(['CI.','Nombre','Apellido','Horas Trabajadas','Horas no Trabajadas','Fecha del Registro','Observaciones']);
        gridsControlAsiProfesor.showData();
        gridsControlAsiProfesor.setSizeCol(1,105);
        gridsControlAsiProfesor.setSizeCol(2,200);
        gridsControlAsiProfesor.setSizeCol(3,200);
        gridsControlAsiProfesor.setSizeCol(4,162);
        gridsControlAsiProfesor.setSizeCol(5,162);
        gridsControlAsiProfesor.setSizeCol(6,5);
        gridsControlAsiProfesor.setSizeCol(7,5);
        gridsControlAsiProfesor.hideCol(6);
        gridsControlAsiProfesor.hideCol(7);
  },

  create : function(){
      dialogsControlAsiProfesor = dialogs.create('dialogsControlAsiProfesor',0,0,876,401,'CONTROL DE ASISTENCIA DEL PROFESOR');
      editsControlAsiProCi = edits.create('editsControlAsiProCi','editsControlAsiProCi','CI. (*):',1,107,'normal');
      editsControlAsiProCi.setValidInteger();
      editsControlAsiProCi.setValidEmpty();
      editsControlAsiProNombre = edits.create('editsControlAsiProNombre','editsControlAsiProNombre','Nombre (*):',1,126,'normal');
      editsControlAsiProNombre.setValidEmpty();
      editsControlAsiProApellido = edits.create('editsControlAsiProApellido','editsControlAsiProApellido','Apellido (*):',1,113,'normal');
      editsControlAsiProApellido.setValidEmpty();
      editsControlAsiProHorTrabajadas = edits.create('editsControlAsiProHorTrabajadas','editsControlAsiProHorTrabajadas','Horas Trabajadas:',1,107,'normal');
      editsControlAsiProHorTrabajadas.setValidEmpty();
      editsControlAsiProHorNoTrabajadas = edits.create('editsControlAsiProHorNoTrabajadas','editsControlAsiProHorNoTrabajadas','Horas no Trabajadas:',1,126,'normal');
      editsControlAsiProHorNoTrabajadas.setValidEmpty();
      calendarsControlAsiProFecRegistro = calendars.create('calendarsControlAsiProFecRegistro');
      calendarsControlAsiProFecRegistro.setValidEmpty();
      memoControlAsiProfesor = memo.create('memoControlAsiProfesor','Observaciones:',1,1,105);
      memoControlAsiProfesor.setValidEmpty();     
      gridsControlAsiProfesor = grids.create('gridsControlAsiProfesor',10,7);
      imgButtonsControlAsiProfesorAgregar = imgButtons.create('imgButtonsControlAsiProfesorAgregar','Agregar','ok.png');
      imgButtonsControlAsiProfesorModificar = imgButtons.create('imgButtonsControlAsiProfesorModificar','Modificar','icono_modificar.png');
      imgButtonsControlAsiProfesorModificar.setDisable(); 
      imgButtonsControlAsiProfesorEliminar = imgButtons.create('imgButtonsControlAsiProfesorEliminar','Eliminar','eliminar.jpg');
      imgButtonsControlAsiProfesorEliminar.setDisable();
      imgButtonsControlAsiProfesorLimpiar = imgButtons.create('imgButtonsControlAsiProfesorLimpiar','Limpiar','limpiar.png');
      imgButtonsControlAsiProfesorBuscar = imgButtons.create('imgButtonsControlAsiProfesorBuscar','Buscar','icono_buscar.png');
      imgButtonsControlAsiProfesorSalir = imgButtons.create('imgButtonsControlAsiProfesorSalir','Salir','salir.png');
  },

  init : function(){
    this.create();
    this.setEvents();
  	this.dialogsControlAsiProfesor_Init();
  	this.gridsControlAsiProfesor_Init();
	this.createMWs(); 
  },

  	limpiar : function(){
  		editsControlAsiProCi.setValue("");
  		editsControlAsiProNombre.setValue("");
  		editsControlAsiProApellido.setValue(""); 
  		editsControlAsiProHorTrabajadas.setValue("");
  		editsControlAsiProHorNoTrabajadas.setValue("");
  		calendarsControlAsiProFecRegistro.clear(); 		
  		gridsControlAsiProfesor.clean();
  		dialogsControlAsiProfesor.setMsg("");
		editsControlAsiProCi.readOnly(false);
        imgButtonsControlAsiProfesorAgregar.setEnable();
        imgButtonsControlAsiProfesorModificar.setDisable();
        imgButtonsControlAsiProfesorEliminar.setDisable();
  	},
  	
  	buscar : function(){
  		alert('mantCarBuscar en construccion');
  },	
  setData : function(){
		if (gridsControlAsiProfesor.getDataCell(1) != ""){
			editsControlAsiProCi.readOnly(true);
			editsControlAsiProCi.setValue(gridsControlAsiProfesor.getDataCell(1));
            editsControlAsiProNombre.setValue(gridsControlAsiProfesor.getDataCell(2));
            editsControlAsiProApellido.setValue(gridsControlAsiProfesor.getDataCell(3));
			editsControlAsiProHorTrabajadas.setValue(gridsControlAsiProfesor.getDataCell(4));
			editsControlAsiProHorNoTrabajadas.setValue(gridsControlAsiProfesor.getDataCell(5));
			calendarsControlAsiProFecRegistro.findOption(gridsControlAsiProfesor.getDataCell(6));
		}
	},
  
  setEvents : function(){
  	gridsControlAsiProfesor.onClickCells(this.windowName+".setData()")
  	imgButtonsControlAsiProfesorAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
  	imgButtonsControlAsiProfesorModificar.onClick(this.windowName + ".coreUpdate('agregar')");
  	imgButtonsControlAsiProfesorEliminar.onClick(this.windowName + ".coreUpdate('agregar')");
  	imgButtonsControlAsiProfesorLimpiar.onClick('ControlAsiProfesor.limpiar()');
  	imgButtonsControlAsiProfesorBuscar.onClick('ControlAsiProfesor.buscar()');
  	imgButtonsControlAsiProfesorSalir.onClick('dialogsControlAsiProfesor.close()');
  },
  
coreUpdate: function(methodName){
        var procesar = false;
        var rlx = xmlStructs.createRecordList("rlx");
        
        if (methodName == 'eliminar') {
            if (editsControlAsiProCi.valid(dialogsControlAsiProfesor)) {
                rlx.add('reg', editsControlAsiProCi);
                procesar = true;
            }
        }
        else {
            if (editsControlAsiProCi.valid(dialogsControlAsiProfesor)) 
                if (editsControlAsiProNombre.valid(dialogsControlAsiProfesor)) 
                    if (editsControlAsiProApellido.valid(dialogsControlAsiProfesor)) 
                        if (editsControlAsiProHorTrabajadas.valid(dialogsControlAsiProfesor))
							if (editsControlAsiProHorNoTrabajadas.valid(dialogsControlAsiProfesor))
								if (calendarsControlAsiProFecRegistro.valid(dialogsControlAsiProfesor)){
									rlx.add('reg', editsControlAsiProNombre);
                            		rlx.add('reg', editsControlAsiProApellido);
                            		rlx.add('reg', editsControlAsiProHorTrabajadas);
                            		rlx.add('reg', editsControlAsiProHorNoTrabajadas);
									rlx.add('reg', calendarsControlAsiProFecRegistro);
                            		rlx.add('reg', editsControlAsiProCi);
                            		procesar = true;
                       			 }
        }
        if (procesar) {            
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiarCoreUpdate()', rlx);
        }
    }
}
