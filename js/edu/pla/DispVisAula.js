var dialogsDispVisAula = new Object();
var pcbDisVisAulBloque = new Object();
var pcbDisVisAulAula = new Object();
var tablesDisVisAulAula = new Object();
var imagesDispVisAula = new Object();
var imgButtonsDispVisAulReporte = new Object();
var imgButtonsDispVisAulSalir = new Object();
var mwDispVisAula = new Object();// minWindow
var imgPuerta = 'images/aulaVisDisp.png';
var imgArr = [[],[],[],[],[],[],[],[]];

var DispVisAula = {
	windowName : 'DispVisAula',
	isCreate : false,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		if (dialogsDispVisAula.isByClean())
		{
	      Tool.rstPwrCmb(pcbDisVisAulAula);		
	      Tool.rstPwrCmb(pcbDisVisAulBloque);
		  Tool.cnnSrv('ReportObject', 'getHorarioAulaInit', this.windowName + '.loadDataResultado()');	
		}
		dialogsDispVisAula.show();
	},
	
	loadDataResultado : function() {
		Tool.loadPowerComboData(dialogsDispVisAula, pcbDisVisAulBloque, 0, 1, json('getMantBloque'));
  	},
	
	hide : function(){
		dialogsDispVisAula.hide();
	},
	
	createMWs : function(){
       	mwDispVisAula = desktop.addMinWindow('D.V.Aula', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
       	dialogsDispVisAula.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsDispVisAula_Init : function(){
        dialogsDispVisAula.setMinimizeXY(0,0);
        dialogsDispVisAula.setCenterScreen();
        dialogsDispVisAula.addSpace(0,0,20);  
        dialogsDispVisAula.addLn(1,1,1);
		dialogsDispVisAula.setHeightCell(1,1,49);  
		
		
        dialogsDispVisAula.addObject(pcbDisVisAulBloque,20,30);
        pcbDisVisAulBloque.setWidthCombo(210);
        dialogsDispVisAula.addObject(pcbDisVisAulAula,20,53);
        pcbDisVisAulAula.setWidthCombo(210);
        dialogsDispVisAula.addObject(imagesDispVisAula,316,53);
        imagesDispVisAula.setSize(17,17);
        
        
        var c1 = container.create("c1");
		c1.setObject(tablesDisVisAulAula, 0, 4, 0, 0, 0);
        tablesDisVisAulAula.addRowsCols(ProcDispProf.maxRow,8);        
        tablesDisVisAulAula.addDinamicTextToHead(['HORAS','L','M','M','J','V','S','D']);
        tablesDisVisAulAula.setWidthCell(1,0,75);
        tablesDisVisAulAula.setObjAttrib(attrib, ambiente);
        for(var i=1; i<8; i++){
        	tablesDisVisAulAula.setWidthCell(1,i,30);
        }
        for(var i=0; i<8; i++){
        	tablesDisVisAulAula.textAlignCell(0,i,'center');
        	tablesDisVisAulAula.rows[0].cells[i].style.borderStyle ='none';
        	tablesDisVisAulAula.rows[0].cells[i].style.borderWidth ='0px'; 
        	tablesDisVisAulAula.rows[0].cells[i].style.backgroundColor = attrib.Color.bgBarraTitle[ambiente];
        }              
        for(i=1; i<ProcDispProf.maxRow+1; i++)
        {
        	tablesDisVisAulAula.setHeightRow(i,18);
        	tablesDisVisAulAula.setFontCell(i,0,'verdana',9,'black');
        	for(var j=0; j<8; j++)
        	{
        		tablesDisVisAulAula.textAlignCell(i,j,'center');
        		tablesDisVisAulAula.rows[i].cells[j].style.borderStyle ='none';
        		tablesDisVisAulAula.rows[i].cells[j].style.borderWidth ='0px'; 
        		if(j<7)
        		{
        		  tablesDisVisAulAula.setFontCell(i,j+1,'verdana',10,'black');
        		}
          	} 
        }
        for(var f=0; f<ProcDispProf.maxRow+1; f++)
		    for(var c=0; c<8; c++)
		    {
		       imgArr[c][f] = document.createElement('img');
	           imgArr[c][f].src= 'images/transpIconAulVis.png';
	           if((f>0) && (c>0))
	             tablesDisVisAulAula.addObjToCell(f,c,imgArr[c][f]);
		    }

        dialogsDispVisAula.addLn(2,1,1);
		dialogsDispVisAula.setHeightCell(2,1,5);
		dialogsDispVisAula.addObjToDialog(imgButtonsDispVisAulReporte,3,1);
        dialogsDispVisAula.addObjToDialog(imgButtonsDispVisAulSalir,3,1); 
        dialogsDispVisAula.adjAllMarginObj(3,1,18);
        dialogsDispVisAula.leftMarginObj(3,1,0,52);
		dialogsDispVisAula.addObjToDialog(c1, 4, 1);
        this.setHorario(json('getHorario').data);
	},
	
	getRowByIdHorario : function(idHorario)
    {
      var hr = json('getHorario').data;	
  	  for(var i=0; i<hr[0].length; i++)
  	  {
  		if(hr[0][i]==idHorario)
  		  return i+1;
  	  }
  	  return -1;
    },
    
	setDispAula : function()
	{		
	  var da = json('getDispAula').data;		
	  for(var f=0; f<ProcDispProf.maxRow+1; f++)
		for(var c=0; c<8; c++)
		{
	      this.cleanImg(c,f);
		}
	  for (var c=0; c < da[0].length; c++)
	  {
	  	var f = this.getRowByIdHorario(da[0][c])
		if(f!=-1)
		  this.setImg(da[1][c],f);
		  tablesDisVisAulAula.addTextToCell(f,da[1][i],'X');
	  }
	},
	
	cleanImg : function(c, f)//Coloca puertas en todos lados
	{
	  if((f>0) && (c>0))
	  {
	    tablesDisVisAulAula.removeObjInCell(f,c,imgArr[c][f]);
		imgArr[c][f].src = imgPuerta;
		tablesDisVisAulAula.setHAlignCell('middle',f,c);
		tablesDisVisAulAula.addObjToCell(f,c,imgArr[c][f]);
	  } 	
	},
	
	setImg : function(c, f)//quita puertas
	{	
	  if((f>0) && (c>0))
	  {
	    tablesDisVisAulAula.removeObjInCell(f,c,imgArr[c][f]);
		imgArr[c][f].src = 'images/transpIconAulVis.png';
		tablesDisVisAulAula.setHAlignCell('middle',f,c);
		tablesDisVisAulAula.addObjToCell(f,c,imgArr[c][f]);
	  } 
	},
	
	getDispoVisAula: function() {
		var rlx = xmlStructs.createRecordList("rlx");
		
		if (pcbCrearCurPeriodo.valid(dialogsDispVisAula))
			if (pcbDisVisAulAula.valid(dialogsDispVisAula)){
				rlx.add('reg',pcbCrearCurPeriodo);
				rlx.add('reg',pcbDisVisAulAula);
				rlx.add('reg',pcbCrearCurTipoHorario);
				Tool.cnnSrv('CrearCursoObject', 'getDispAula', this.windowName + '.setDispAula()', rlx);
			}
    },
	
	setHorario : function(stHr) {
		for (var i=0; i < stHr[0].length;i++)
			tablesDisVisAulAula.addTextToCell(i+1,0,stHr[1][i]);
	},
	
	create : function() {
		dialogsDispVisAula = dialogs.create('dialogsDispVisAula',0,0,351 ,860,'DISPONIBILIDAD DEL AULA');
		pcbDisVisAulBloque = powerComboBox.create('pcbDisVisAulBloque', 'pcbDisVisAulBloque', 'Bloque (*):', 1,65);
        pcbDisVisAulBloque.setValidEmpty();
        pcbDisVisAulBloque.setDataType('string');
        pcbDisVisAulBloque.addEmptyOption();
        pcbDisVisAulBloque.enableReadOnlyEditor();
        pcbDisVisAulBloque.setFieldFind(true);
		pcbDisVisAulAula = powerComboBox.create('pcbDisVisAulAula', 'pcbDisVisAulAula', 'Aula (*):', 1,65);
        pcbDisVisAulAula.setDataType('string');
        pcbDisVisAulAula.setValidEmpty();
        pcbDisVisAulAula.addEmptyOption();
        pcbDisVisAulAula.enableReadOnlyEditor();
        pcbDisVisAulAula.setFieldFind(true);
        imagesDispVisAula = images.create('imagesDispVisAula','imagesDispVisAula','images/relojCreCurso_1.png');
        tablesDisVisAulAula = tables.create('tablesDisVisAulAula');
		tablesDisVisAulAula.createHead();
      	imgButtonsDispVisAulReporte = imgButtons.create('imgButtonsDispVisAulReporte','Ver Horario','print.png');
		imgButtonsDispVisAulReporte.setDimension(90,22);
      	imgButtonsDispVisAulSalir = imgButtons.create('imgButtonsDispVisAulSalir','Salir','salir.png');
        imgButtonsDispVisAulSalir.setDimension(90,22);
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsDispVisAula_Init();
		this.createMWs();		
	},
	
	resetElements : function() {		
	  Tool.rstPwrCmb(pcbDisVisAulAula);
	  if (pcbCrearCurPeriodo.valid(dialogsDispVisAula))
		  if (pcbDisVisAulBloque.getOption() != "")
			  Tool.getPowerComboData('ReportObject', 'getMantAulaXBloque', dialogsDispVisAula, pcbDisVisAulAula, 0, 0, pcbDisVisAulBloque);
    },      

  	
  	setEvents : function(){
  		imagesDispVisAula.onClick(this.windowName + ".getDispoVisAula()"); 
	  	imgButtonsDispVisAulReporte.onClick(this.windowName + ".coreUpdate()");	  
	  	imgButtonsDispVisAulSalir.onClick('dialogsDispVisAula.close()');	  
	  	pcbDisVisAulBloque.onChange(this.windowName + ".resetElements()");	 
	  	pcbDisVisAulAula.onChange(this.windowName + ".getDispoVisAula()");		
    },
    
  	reporte : function() {
		var jaux = json("getHorarioAula");
		var ji = json("getHorarioAula");
		var ji2 = json("getHorarioXTipo");
		for(var p = 0; p < ji.data[0].length; p++) {
			var aux = jaux.data[0][p];
			ji.data[0][p] = jaux.data[2][p];
			ji.data[2][p] = jaux.data[1][p];
			ji.data[1][p] = jaux.data[3][p];
			ji.data[3][p] = aux;
			ji.data[7][p] = jaux.data[4][p] + ' ' + jaux.data[5][p];
			ji.data[4][p] = "";
		}
		var h = new Horario({ materia: true, seccion: true, sunday: true, saturday: true});
		var arrObject = [
							{ data: pcbDisVisAulBloque.getOption(), title: "BLOQUE  : ", x: 2, y: 2 },
							{ data: pcbCrearCurPeriodo.getOption(), title: "PERIODO: ", x: 2, y: 20 },
							{ data: pcbDisVisAulAula.getOption(), title: "AULA: ", x: 300, y: 20 }
						];
		h.setDataHeadWithObject(arrObject);
		h.setJson(ji,ji2);
		h.show();
	},
	
	coreUpdate: function(){
        var rlx = xmlStructs.createRecordList("rlx");
        
	    if (pcbCrearCurPeriodo.valid(dialogsDispVisAula))
		    if (pcbDisVisAulBloque.valid(dialogsDispVisAula))
			    if (pcbDisVisAulAula.valid(dialogsDispVisAula)){
			    	rlx.add('reg', pcbDisVisAulAula);
					rlx.add('reg', pcbCrearCurPeriodo);
	        	 	Tool.cnnSrv('ReportObject', 'getHorarioAula', this.windowName + '.reporte()', rlx);
           	        }
    }
};
