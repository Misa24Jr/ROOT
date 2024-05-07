var dialogsSaldAlumnos = new Object();
var powerComboBoxSaldAlumnos = new Object();
var gridsSaldAlumnos = new Object();
var imgButtonsSaldAluCalcular = new Object();
var imgButtonsSaldAluSalir = new Object();
var mwSaldAlumnos = new Object();// minWindow

var SaldAlumnos = {
	windowName : 'SaldAlumnos',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
		  this.init();
		  this.isCreate = true;
		}

		if (dialogsSaldAlumnos.isByClean())
 			this.limpiar();			
		dialogsSaldAlumnos.show();
	},
	hide : function() {
		dialogsSaldAlumnos.hide();
	},
	createMWs : function() {
        	mwSaldAlumnos  = desktop.addMinWindow('S.Estudiante', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsSaldAlumnos .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

  dialogsSaldAlumnos_Init : function() {
        dialogsSaldAlumnos.setMinimizeXY(0,0);
        dialogsSaldAlumnos.setCenterScreen();
        dialogsSaldAlumnos.addSpace(0,0,20);
        dialogsSaldAlumnos.addLn(1,1,1);
		dialogsSaldAlumnos.setHeightCell(1,1,10);
        dialogsSaldAlumnos.addObjToDialog(powerComboBoxSaldAlumnos,2,1,24);
        powerComboBoxSaldAlumnos.setWidthCombo(200);
        dialogsSaldAlumnos.addLn(3,1,1);
		dialogsSaldAlumnos.setHeightCell(3,1,10);
		dialogsSaldAlumnos.addObjToDialog(gridsSaldAlumnos.getObject(),4,1);
        dialogsSaldAlumnos.addLn(5,1,1);
		dialogsSaldAlumnos.setHeightCell(5,1,10);
        dialogsSaldAlumnos.addObjToDialog(imgButtonsSaldAluCalcular,6,1);
        dialogsSaldAlumnos.addObjToDialog(imgButtonsSaldAluSalir,6,1);       
        imgButtonsSaldAluCalcular.setDimension(90,22);
        imgButtonsSaldAluSalir.setDimension(90,22);
        dialogsSaldAlumnos.adjAllMarginObj(6,1,30);
        dialogsSaldAlumnos.leftMarginObj(6,1,0,318);
  },
  
  gridsSaldAlumnos_Init : function()  {
        gridsSaldAlumnos.setFixColRow(false,true);
        gridsSaldAlumnos.addTitleVectorX(['Carrera','Cedula','Nombre','Apellido','Periodo','Fecha','Nº Recibo','Monto']);
        gridsSaldAlumnos.showData();        
        gridsSaldAlumnos.setSizeCol(1,200);
        gridsSaldAlumnos.setSizeCol(2,70);
        gridsSaldAlumnos.setSizeCol(3,110);
        gridsSaldAlumnos.setSizeCol(4,110);
        gridsSaldAlumnos.setSizeCol(5,110);
        gridsSaldAlumnos.setSizeCol(6,80);
        gridsSaldAlumnos.setSizeCol(7,80);
        gridsSaldAlumnos.setSizeCol(8,80);
        //gridsSaldAlumnos.hideCol(1);
  },

  create : function() {
      dialogsSaldAlumnos = dialogs.create('dialogsSaldAlumnos',0,0,890,520,'SALDO DEL ESTUDIANTE');
      dialogsSaldAlumnos.setAdjY(20);
      powerComboBoxSaldAlumnos = powerComboBox.create('powerComboBoxSaldAlumnos', 'powerComboBoxSaldAlumnos', 'Organización (+):', 1,102);
      powerComboBoxSaldAlumnos.setValidEmpty();
      powerComboBoxSaldAlumnos.addEmptyOption();
      powerComboBoxSaldAlumnos.enableReadOnlyEditor();
      gridsSaldAlumnos = grids.create('gridsSaldAlumnos',20,8);
      imgButtonsSaldAluCalcular = imgButtons.create('imgButtonsSaldAluCalcular','Calcular','calcular_1.png');
      imgButtonsSaldAluSalir = imgButtons.create('imgButtonsSaldAluSalir','Salir','salir.png');
  },

  init : function()
  {
  	
    this.create();
    this.setEvents();
    this.dialogsSaldAlumnos_Init();
    this.gridsSaldAlumnos_Init();
	this.createMWs(); 
  },

  	limpiar : function()
  	{
  		gridsSaldAlumnos.clean();
  		dialogsSaldAlumnos.setMsg("");
		imgButtonsSaldAluCalcular.setEnable();
		//Tool.getGridData('MantObject', 'get'+this.windowName, dialogsSaldAlumnos, gridsSaldAlumnos, false); 		    		
  	},
  	
  	setData : function() 
      {
		if (gridsSaldAlumnos.getDataCell(1) != "") 
			{
			
			imgButtonsSaldAluCalcular.setDisable();
            }     			
	},
  	
  	setEvents : function(){
  		gridsSaldAlumnos.onClickCells(this.windowName+".setData()");
		imgButtonsSaldAluCalcular.onClick('SaldAlumnos.construc()');
  		imgButtonsSaldAluSalir.onClick('dialogsSaldAlumnos.close()');
   	   },
   	   
   	construc : function()
  	{
  		alert('Funcion en desarrollo........');
  	},
	
};