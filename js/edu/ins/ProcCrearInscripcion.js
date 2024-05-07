var ProcCrearInscripcion =
{
  /* ************************ ESTADOS *************************
  inicio 													: 0
  Materia seleccionada para inscribir 						: 1 										
  Materia inscrita (salvada en BD)							: 2
  Choque de horario entre curso a  inscribir y el inscrito	: 3
  Materia seleccionada para eliminar 						: 4
  * ***********************************************************/	
  INIT : 0,
  SEL_INSCRIBIR : 1,
  MATERIA_INSCRITA : 2, 
  CHOQUE : 3,
  SEL_ELIMINAR : 4,
  isSelected : false,
  dias : ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO'],
  
  //************** IMAGENES DE ESTADO ****************
  imgInicio 		: 'transpIcon.png',					//transparencia
  imgMatSelec 		: 'cursoNuevo.png',					//puerta verde
  imgMatInscrita	: 'salonEnable.png',				//puerta marron
  imgChoque 		: 'cursoNuevo_CursoAsignado.png',	//puerta marron y verde	
  imgEliminar 		: 'aulaSelected.png',				//puerta naranja
  data : [[],[],[],[],[],[],[]],
  solap : new Array(),//PARA CURSOS CON CHOQUE DE HORARIO
  imgBuffer : [[],[],[],[],[],[],[]],//buffer de imagenes
  horario : new Array(),
  pathImg : 'images/',
  widthSizeImg : '20px',
  heightSizeImg : '14px',
  horario : new Array(),
  panelChoque : new Object(),
  tMat : new Object(),
  maxRows : 40,
  
  setButtons : function(activeArr)
  {  	
  	for(var i=0; i<activeArr.length; i++)
  	{
  		switch(activeArr[i])
  		{
  		  case 0 : { buttonsArray[i].setDisable(); break;}	
  		  case 1 : { buttonsArray[i].setEnable();  break;}
  		}  
  		  
  	}
  },
  
  getRow : function(horario)
  {
  	for (var c=0; c < tablesInscAlumnos.rows[0].cells.length-1; c++) 
	{
	  for (var f=0; f < tablesInscAlumnos.rows.length-1; f++) 
	  {
	  	if(this.data[c][f].horario==horario)
	  	{
	  	  return f;		
	  	}
	  }
	}
	return -1;
  },
  
  getTotalHc : function(materia, seccion)
  {
  	var total=0;
  	for (var c=0; c < tablesInscAlumnos.rows[0].cells.length-1; c++) 
	{
	  for (var f=0; f < tablesInscAlumnos.rows.length-1; f++) 
	  {
	  	if(this.data[c][f].materia==materia && this.data[c][f].seccion==seccion)
	  	{
	  	  total++;	
	  	}
	  }
	}
	return total;
  },
  
  getCount : function()
  {
	var total=0;
	for (var c=0; c < tablesInscAlumnos.rows[0].cells.length-1; c++) 
	{
	  for (var f=0; f < tablesInscAlumnos.rows.length-1; f++) 
	  {
	  	if(this.data[c][f].sts!=0)
	  	{
	  	  total++;	
	  	}
	  }
	}
	return total;
  },
  
  setHorario : function(stHr)
  {
	var i=0;
	for (i=0; i < stHr[0].length;i++)
	{ 
	  this.horario[i] = new Object();	
	  this.horario[i].descrip =	stHr[1][i];//se cargan las descripciones de horario
	  this.horario[i].hr = stHr[0][i];//se cargan los ids de horario
	  tablesInscAlumnos.addTextToCell(i+1,0,this.horario[i].descrip);
	}
  },
  
  getCountHorario : function()
  {
	return this.horario.length;  
  },
  
  clearHorario : function()
  {
    if(this.isInit)
      for (var i=0; i < this.tObj.rows.length-1;i++)
	  { 
	    tablesInscAlumnos.rows[i+1].cells[0].innerHTML='';
	  }
  },
  
  getDescripHorarioByRow : function(row)
  {
  	return this.horario[row].descrip;
  },
  
  getDescripHorarioById : function(idHorario)
  {
  	var r = this.getRowByIdHorario(idHorario);
  	if(r!=-1)
  	  var d = this.getDescripHorarioByRow(r);
  	else
  	  return '';  
  	return d;
  },
  
  getIdHorarioByRow : function(row)
  {
  	return this.horario[row].hr;
  },
  
  getRowByIdHorario : function(idHorario)
  {
  	for(var i=0; i<this.horario.length; i++)
  	{
  		if(this.horario[i].hr==idHorario)
  		  return i+1;
  	}
  	return -1;
  },
  
  showMatInsc : function()
  {
  	var idx=0;
  	this.tMat.deleteAllRows();
  	this.tMat.createHead();
  	for(var i=0; i<this.tMat.list.length; i++)
  	{
  	  	idx = this.tMat.rows.length;
  	  	this.tMat.addRowAndData([idx,this.tMat.list[i]]);
  	 	this.tMat.setWidthCell(idx, 0, 16);	
      this.tMat.setWidthCell(idx, 1, 180);
      this.tMat.textAlignCell(idx, 0, 'center');
      this.tMat.textAlignCell(idx, 1, 'left');
      this.tMat.setFontCell(idx,0,'verdana',8,'#5e5e5e');
      this.tMat.setFontCell(idx,1,'verdana',8,'#5e5e5e');  
      this.tMat.setHeightRow(idx, 14);	
  	}
  		this.tMat.addDinamicTextToHead(['No.'.bold(), 'MATERIA'.bold()]);
  		this.tMat.setFontCell(0,0,'verdana',9,'#ffffff');
    	this.tMat.setFontCell(0,1,'verdana',9,'#ffffff');
    	this.tMat.textAlignCell(0, 0, 'center');
    	this.tMat.textAlignCell(0, 1, 'center');
    	tabInf.setHeightCellPanel(0,0,1,5);
    	if(idx > 0)
      	ProcCrearInscripcion.setEventsTablaMat();
  },
  
  clearTextSelectedMat : function()
  {
  	for(var i=1; i<this.tMat.rows.length; i++)
  	{
  	  ProcCrearInscripcion.tMat.setFontCell(i,0,'verdana',8,'#5e5e5e');
  	  ProcCrearInscripcion.tMat.setFontCell(i,1,'verdana',8,'#5e5e5e');	
  	}
  },
  
  getSeccion : function(materia)
  {
  	for (var c=0; c < tablesInscAlumnos.rows[0].cells.length-1; c++)
	{
	  for (var f=0; f < tablesInscAlumnos.rows.length-1; f++) 
	  {
	  	if(this.data[c][f].materia==materia)
	  	  return this.data[c][f].seccion;
	  }
	}
	return null;
  },
  
  setEventsTablaMat : function()
  {
  	
  	for(var i=1; i<this.tMat.rows.length; i++)
  	{
  	  this.tMat.rows[i].f = i;
  	  this.tMat.rows[i].cells[1].f = i;
  	  this.tMat.rows[i].materia = this.tMat.list[i-1];	
  	  this.tMat.rows[i].cells[1].materia = this.tMat.list[i-1];
  	  this.tMat.rows[i].onmouseover = function(e)
  	  {
  	  	if(!ProcCrearInscripcion.tMat.selected )
  	  	{
  	      var materia = this.materia;
  	      dialogsInscAlumnos.setMsg("Para eliminar haga click sobre la materia seleccionada ..!");
  	      var seccion = ProcCrearInscripcion.getSeccion(materia);
  	  	  	ProcCrearInscripcion.tMat.setFontCell(this.f,0,'verdana',8,'#101000');
  	  	  	ProcCrearInscripcion.tMat.setFontCell(this.f,1,'verdana',8,'#101000');
  	  	  	if(seccion!=null)
  	      {
	  	  	    ProcCrearInscripcion.cleanSelected();
		  	    ProcCrearInscripcion.cleanSolapSelected();
		  	    ProcCrearInscripcion.setStsSinHrAnt();	
		  	    var objH = ProcCrearInscripcion.getObjHorarios(materia, seccion);
		  	  	 if (pcbInscMateria.setModeReturnGetText(3).getText()==='SI' && objH.materia===pcbInscMateria.getValue() && materia === pcbInscMateria.getValue()){
		  		 	  dialogsInscAlumnos.setMsg('NOTA: '+materia+' sin horario seleccionado..!', true);
	  	  	  	 }
	  	  	  	 else{
	  	  	  		while(objH.next())
		  	    	{
		  	      	ProcCrearInscripcion.setStatus(objH.getCol(),objH.getRow(),4);	
		  	    	}
		  	    }
	  	  	}
	  	  	else // materia sin horario
	  	  	{
	  	  		if(ProcCrearInscripcion.tMat.sinHr.isTrue)
	  	  		{
	  	  	   	pcbInscAluMatSinHorario.setSelectedIndex(ProcCrearInscripcion.tMat.sinHr.itemOpc);	
 			   	var op = pcbInscAluMatSinHorario.getOption(ProcCrearInscripcion.tMat.sinHr.itemOpc);	
 	           	ProcCrearInscripcion.setStsSinHr(4);
 	        	}	
	  	  	}
	  	  	ProcCrearInscripcion.setButtons([0,1,1,1,0,1]);
	  	  	ProcCrearInscripcion.panelChoque.hide();	  	  	  
         ProcCrearInscripcion.showSelSolapPanel(materia,seccion);
  	    }	
  	  }
  	  this.tMat.rows[i].onmouseout = function(e)
  	  {
  	  	if(!ProcCrearInscripcion.tMat.selected )
  	  	{
  	  	  ProcCrearInscripcion.cleanSelected();
	  	  ProcCrearInscripcion.cleanSolapSelected();
	  	  ProcCrearInscripcion.setStsSinHrAnt();	
	  	  ProcCrearInscripcion.setButtons([0,0,1,1,0,1]);
	  	  ProcCrearInscripcion.panelChoque.hide();
  	  	  ProcCrearInscripcion.tMat.setFontCell(this.f,0,'verdana',8,'#5e5e5e');
  	  	  ProcCrearInscripcion.tMat.setFontCell(this.f,1,'verdana',8,'#5e5e5e');
  	    }
  	  }
  	  this.tMat.rows[i].cells[1].onmousedown = function(e)
  	  {
  	  	ProcCrearInscripcion.clearTextSelectedMat();
  	  	if(ProcCrearInscripcion.tMat.selected)
  	  	{
  	  	  ProcCrearInscripcion.tMat.selected = false;
  	  	  ProcCrearInscripcion.cleanSelected();
	  	  ProcCrearInscripcion.cleanSolapSelected();
	  	  ProcCrearInscripcion.setStsSinHrAnt();	
	  	  ProcCrearInscripcion.setButtons([0,0,1,1,0,1]);
	  	  ProcCrearInscripcion.panelChoque.hide();
	  	  dialogsInscAlumnos.setMsg("Deselecciono : ("+this.materia+") ..!");  	
	  	}
  	  	else
  	  	{
  	  	  ProcCrearInscripcion.tMat.setFontCell(this.f,0,'verdana',8,'#f0a000');
  	  	  ProcCrearInscripcion.tMat.setFontCell(this.f,1,'verdana',8,'#f0a000');
  	  	  ProcCrearInscripcion.tMat.selected = true;
  	  	dialogsInscAlumnos.setMsg("Selecciono : ("+this.materia+") para eliminar..!");
  	  	}
  	  }
  	}
  },
  
  clearMatInsc : function()
  {
  	var l = this.tMat.list.length;
  	this.tMat.list.splice(0,l);
  	this.tMat.nameList = null;
  	this.tMat.nameList = new Array();
  	this.tMat.selected = false;
  	ProcCrearInscripcion.clearTextSelectedMat();
  	ProcCrearInscripcion.tMat.selected = false;
  	ProcCrearInscripcion.cleanSelected();
	ProcCrearInscripcion.cleanSolapSelected();	
	ProcCrearInscripcion.panelChoque.hide();
  },
  
  clearMatInscByName : function(materia)
  {
  	var l = this.tMat.list.length;
  	for(var i=0; i<l; i++)
  	{
  		if(this.tMat.list[i] == materia)
  		{
  		  this.tMat.list.splice(i,1);
  		  break;
  		}
  	}
  	this.showMatInsc();
  },
  
  cleanAllSelected : function()
  {
  	ProcCrearInscripcion.cleanSelected();
	ProcCrearInscripcion.cleanSolapSelected();	
	ProcCrearInscripcion.panelChoque.hide();
  },
  
  addMatInsc : function(mat, posCombo)
  {
  	if(this.tMat.nameList[mat]==null || this.tMat.nameList[mat]==undefined)
  	{
  	  this.tMat.sinHr.isTrue = false;	
  	  var pos = this.tMat.list.length;
  	  this.tMat.list[pos] = mat;
  	  this.tMat.nameList[mat]=mat;
  	  if(posCombo !=null && posCombo!=undefined)
  	  {
  	  	this.tMat.sinHr.itemOpc = posCombo;
  	  	this.tMat.sinHr.isTrue = true;
  	  } 
  	}
  },
	  
  init : function()
  {
  	dialogsInscAlumnos.onClickMinimizeDialog('ProcCrearInscripcion.cleanAllSelected()',false);
  	dialogsInscAlumnos.onClickCloseDialog('ProcCrearInscripcion.cleanAllSelected()');
  	dialogsInscAlumnos.onHideDialog('ProcCrearInscripcion.cleanAllSelected()');
  	this.tMat = tables.create('tMat');
  	this.tMat.selected = false;
	this.tMat.list = new Array();
	this.tMat.nameList = new Array();
	this.tMat.sinHr = new Object();
	this.tMat.createHead();   
	this.tMat.addDinamicTextToHead(['No.', 'MATERIA']);
    
    this.tMat.setFontCell(0,0,'verdana',9,'#ffffff');
    this.tMat.setFontCell(0,1,'verdana',9,'#ffffff');
    this.tMat.textAlignCell(0, 0, 'center');
    this.tMat.textAlignCell(0, 1, 'center');
    tabInf.addObjToGridPanel(1,this.tMat,1,1);
    tabInf.setHeightCellPanel(0,0,1,5);
    tabInf.setWidthCell(1,0,0,5);
    
  	this.panelChoque = Panel.create('panelChoque',150,100);
  	ProcCrearInscripcion.panelChoque.idSel =-1;
  	this.panelChoque.addToBody();
  	this.panelChoque.setFill(185,185,250,0.6);
  	this.panelChoque.setRadius(10,10,10,10);
  	this.panelChoque.setAbsoluteMode();
  	this.panelChoque.style.zIndex = 200000;
  	ProcCrearInscripcion.panelChoque.stsSel = false;
	ProcCrearInscripcion.panelChoque.alignText('center');
	ProcCrearInscripcion.panelChoque.setFont('9px verdana','#000000');
	ProcCrearInscripcion.panelChoque.setText(ProcCrearInscripcion.panelChoque.width/2 , 12,'Choque de Horario');
  	this.panelChoque.hide();
  	tablesInscAlumnos.setAttribute('border','0');
  	tablesInscAlumnos.setAttribute('cellSpacing','1px');
  	tablesInscAlumnos.setAttribute('cellPadding','0');
  	tablesInscAlumnos.style.borderStyle = 'none';
  	tablesInscAlumnos.style.borderWidth = '0px';
  	tablesInscAlumnos.style.backgroundColor = '#aeaeae';
  	
  	for(var i=0; i<tablesInscAlumnos.rows.length; i++)
  	{
  	  for(var j=0; j<tablesInscAlumnos.rows[i].cells.length; j++)
  	  {
  	  	tablesInscAlumnos.rows[i].cells[j].style.borderStyle = 'none';
  	  	if(i!=0)
  	  	{
  	  	  tablesInscAlumnos.rows[i].cells[j].style.backgroundColor = '#f0f0fa';	
  	  	}
  	  	else
  	  	{
  	  	  tablesInscAlumnos.rows[i].cells[j].style.backgroundColor = attrib.Color.bgBarraTitle[ambiente];
  	  	}
  	  }	
      tablesInscAlumnos.rows[i].cells[0].onmouseover = function(e)
  	  {
  	
  	  	if(!ProcCrearInscripcion.panelChoque.stsSel)
  	  	  ProcCrearInscripcion.panelChoque.hide();
  	  }
  	}
  	for(var i=0; i<tablesInscAlumnos.rows[0].cells.length; i++)
  	{
  	  tablesInscAlumnos.rows[0].cells[i].onmouseover = function(e)
  	  {
  	  	if(!ProcCrearInscripcion.panelChoque.stsSel)
  	  	  ProcCrearInscripcion.panelChoque.hide();
  	  }
  	}
  	pcbInscAluMatSinHorario.mats = new Array();
  	for (var c=0; c < tablesInscAlumnos.rows[0].cells.length-1; c++) 
	{
	  for (var f=0; f < tablesInscAlumnos.rows.length-1; f++) 
	  {
	  	this.data[c][f] = new Object();
	  	this.data[c][f].sts = 0;
	  	//estructura de datos
	  	this.data[c][f].materia='';
	  	this.data[c][f].seccion='';
	  	this.data[c][f].profesor='';
	  	this.data[c][f].cupoMax='';
	  	this.data[c][f].cupoMin='';
	  	this.data[c][f].inscritos='';
	  	this.data[c][f].bloque='';
	  	this.data[c][f].aula='';
	  	this.data[c][f].hc=0;
	  	this.data[c][f].idCurso='';
	  	this.data[c][f].idPersona='';	  	
	  	this.data[c][f].sts = 0;	  
	  	this.data[c][f].stsAnt = 0;
	  	this.data[c][f].dia = -1;	
	  	this.data[c][f].stsDescrip = 'inicio';
	  	this.data[c][f].horario = -1;
	  	this.data[c][f].posicion	= 	'';
	  	this.data[c][f].modoExt	= 	false;
	  	this.data[c][f].idMateria	= 	'';	  	
	  	//creacion de estructura para imagenes en cada celda
		this.data[c][f].img = document.createElement('img');
  		this.data[c][f].img.src=this.pathImg+this.imgInicio;
  		this.data[c][f].img.style.width = this.widthSizeImg;
		this.data[c][f].img.style.height = this.heightSizeImg;
		this.data[c][f].img.imgName = this.imgInicio;
		
		//se crea el buffer para las imagenes
		this.imgBuffer[c][f] = document.createElement('img');
		this.imgBuffer[c][f].src=this.pathImg+this.imgInicio;
  		this.imgBuffer[c][f].style.width = this.widthSizeImg;
		this.imgBuffer[c][f].style.height = this.heightSizeImg;
		this.imgBuffer[c][f].imgName = this.imgInicio;
		//Se cargan las imagenes en las celdas de la tabla
		tablesInscAlumnos.addObjToCell(f+1,c+1,this.data[c][f].img );
		tablesInscAlumnos.rows[f+1].cells[c+1].align='center';
	  }
	}
	divSinHorario.sts = 0;
	this.setEventCell();
  },
  
  clearData : function()
  {
  	this.clearMatInsc();
  	ProcCrearInscripcion.cleanSolapSelected();
  	ProcCrearInscripcion.panelChoque.hide();
  	for (var c=0; c < tablesInscAlumnos.rows[0].cells.length-1; c++)
	{
	  for (var f=0; f < tablesInscAlumnos.rows.length-1; f++) 
	  {
	  	this.data[c][f].sts = 0;
	  	this.data[c][f].stsAnt = 0;
	  	//estructura de datos
	  	this.data[c][f].materia		=	'';
	  	this.data[c][f].seccion		=	'';
	  	this.data[c][f].profesor	=	'';
	  	this.data[c][f].cupoMax		=	'';
	  	this.data[c][f].cupoMin		=	'';
	  	this.data[c][f].inscritos	=	'';
	  	this.data[c][f].bloque		=	'';
	  	this.data[c][f].aula		=	'';
	  	this.data[c][f].hc			=	'';
	  	this.data[c][f].idCurso		=	'';
	  	this.data[c][f].idPersona	=	'';	  	
	  	this.data[c][f].horario 	= 	-1;
	  	this.data[c][f].dia 		= 	-1;
	  	this.data[c][f].posicion	= 	'';
	  	this.data[c][f].modoExt	= 	false;
	  	this.data[c][f].idMateria	= 	'';
	  	//inicializa el estatus de la celda y actualiza imagen
		this.setStatus(c,f,0);
	  }
	}
	this.clearComboSinHorario();
	this.setStsSinHr(0);
	//actualiza los cambios en la tabla
	this.solap.splice(0,this.solap.length);
	this.show();
  },
    
  setSelectedBgCell : function(row, col)
  {
  	tablesInscAlumnos.setBgColorCell(row, col,'#d0d0ff');
  },
  
  setNormalBgCell : function(row, col)
  {
    var ecolor = tablesInscAlumnos.evenRowColor;
	var ocolor = tablesInscAlumnos.oddRowColor;
	if(row % 2 == 0)
	  tablesInscAlumnos.setBgColorCell(row,col,ocolor);
	else  	  	
	  tablesInscAlumnos.setBgColorCell(row,col,ecolor);
	tablesInscAlumnos.style.cursor = 'default';	
  },
  
  setPositionPanel : function(f,c)
  {
  	var at = tablesInscAlumnos.rows[0].cells[0].offsetWidth;//Ancho primera fila
	var ac = tablesInscAlumnos.rows[1].cells[1].offsetWidth;//ancho de una celda
	var af = tablesInscAlumnos.rows[1].cells[1].offsetHeight;//Altura de una celda
	var pw = parseInt(dialogsInscAlumnos.offsetLeft,10) + 270 + parseInt(at,10) + parseInt(c,10)*parseInt(ac,10); 
	var ph = parseInt(dialogsInscAlumnos.offsetTop,10) + 105 + parseInt(af,10)*parseInt(f,10); 
	ProcCrearInscripcion.panelChoque.setPosition(pw,ph);
  },
  
  showSelSolapPanel : function(materia,seccion)
  {
  	var sc = ProcCrearInscripcion.isSolapCurso(materia,seccion);
  	if(sc!=null)//Hay materia con choque	
	{ 
	  ProcCrearInscripcion.panelChoque.stsSel = true;
	  var ao = ProcCrearInscripcion.panelChoque.getArrayObj();
	  	  	  	
	  if(ProcCrearInscripcion.panelChoque.getTotalObj() > 0)
		ProcCrearInscripcion.panelChoque.delAllObj();
      //ProcCrearInscripcion.clearInf();
	  var arrIdxSlp = ProcCrearInscripcion.getSolapIndexArray(sc.c, sc.f);
	  for(var i=0; i<arrIdxSlp.length; i++)
	  { 
	    if(ProcCrearInscripcion.solap[arrIdxSlp[i]].img.materia==sc.materia && ProcCrearInscripcion.solap[arrIdxSlp[i]].img.seccion == sc.seccion)
	    {
	   	  ProcCrearInscripcion.solap[arrIdxSlp[i]].img.src = ProcCrearInscripcion.pathImg + ProcCrearInscripcion.imgEliminar;
		     ProcCrearInscripcion.solap[arrIdxSlp[i]].img.sts = 4; 
	    }	 
 	    ProcCrearInscripcion.panelChoque.addObj(ProcCrearInscripcion.solap[arrIdxSlp[i]].img,10+i*25, 20);
	  }
	  ProcCrearInscripcion.setPositionPanel(sc.f,sc.c);
	  ProcCrearInscripcion.panelChoque.show();
	}
  },  
  
  setEventCell : function()
  {
  	for (var c=0; c < tablesInscAlumnos.rows[0].cells.length-1; c++) 
	{
	  for (var f=0; f < tablesInscAlumnos.rows.length-1; f++) 
	  {
	  	tablesInscAlumnos.rows[f+1].cells[c+1].row = f+1;
	  	tablesInscAlumnos.rows[f+1].cells[c+1].col = c+1;
	  	tablesInscAlumnos.rows[f+1].cells[c+1].onclick = function(e)
	  	{		
	  	  var sts =	ProcCrearInscripcion.data[this.col-1][this.row-1].sts;
	  	  var materia = ProcCrearInscripcion.data[this.col-1][this.row-1].materia;
	  	  var seccion = ProcCrearInscripcion.data[this.col-1][this.row-1].seccion;
	  	  tablesInscAlumnos.style.cursor = 'pointer';
	  	  switch(sts)
	  	  {
	  	  	case 1 : //materia seleccionada (verde)
	  	  	{	  	  	  	
	  	  	  var objH = ProcCrearInscripcion.getObjHorarios(materia, seccion);
	  	  	  
	  	  	  if (pcbInscMateria.setModeReturnGetText(3).getText()==='SI' && objH.materia===pcbInscMateria.getValue()){
	  	  		 objH.next();
	  	  		 var ts = ProcCrearInscripcion.getTotalSts(4);	  	  		 
	  	  		 if(ts < objH.hc){
	  	  		 	ProcCrearInscripcion.setStatus(this.col-1,this.row-1,4);
	  	  		 	if(ts + 1 === parseInt(objH.hc,10)){
	  	  		 		dialogsInscAlumnos.setMsg('NOTA: Ya completo las horas para la materia, pulse agregar para inscribirlas..!', true);
	  	  		 		ProcCrearInscripcion.setButtons([1,0,1,1,0,1]);
	  	  		 		ProcCrearInscripcion.panelChoque.hide();
	  	  		 	}
	  	  		 	else{
	  	  		 	  dialogsInscAlumnos.setMsg('NOTA: Aun no ha completo las horas totales a inscribir de la materia, debe incluir las horas faltantes..!');
	  	  		 	}
	  	  		 }
	  	  		 else
	  	  		 	dialogsInscAlumnos.setMsg('NOTA: Ya completo las horas para la materia, pulse agregar para inscribirlas..!', true);
	  	  	  }
	  	  	  else{
	  	  		  ProcCrearInscripcion.clearTextSelectedMat();
	  			  ProcCrearInscripcion.tMat.selected = false;	
		  	  	  ProcCrearInscripcion.cleanSelected();
		  	  	  ProcCrearInscripcion.cleanSolapSelected();
		  	  	  ProcCrearInscripcion.setStsSinHrAnt();
		  	  	  while(objH.next())
		  	  	  {	  
		  	  	    ProcCrearInscripcion.setStatus(objH.getCol(),objH.getRow(),4);	
		  	  	  }
		  	  	  ProcCrearInscripcion.setButtons([1,0,1,1,0,1]);
		  	  	  ProcCrearInscripcion.panelChoque.hide();	  	  	  
	           ProcCrearInscripcion.showSelSolapPanel(materia,seccion);
	           dialogsInscAlumnos.setMsg("Ha seleccionado el curso: ("+materia+")  seccion: ("+seccion+ ") para inscribirlo...");
		  	  }
           break;
	  	  	}
	  	  	case 2 ://materia inscrita (marron)
	  	  	{
	  	     ProcCrearInscripcion.clearTextSelectedMat();
  			  ProcCrearInscripcion.tMat.selected = false;		
	  	  	  ProcCrearInscripcion.cleanSelected();	
	  	  	  ProcCrearInscripcion.cleanSolapSelected();
	  	  	  ProcCrearInscripcion.setStsSinHrAnt();
	  	  	  var objH = ProcCrearInscripcion.getObjHorarios(materia, seccion);
	  	  	  while(objH.next())
	  	  	  {
	  	  	    ProcCrearInscripcion.setStatus(objH.getCol(),objH.getRow(),4);	
	  	  	  }
	  	  	  ProcCrearInscripcion.setButtons([0,1,1,1,0,1]);
	  	  	  ProcCrearInscripcion.panelChoque.hide();
	  	  	  //ProcCrearInscripcion.showSelSolapPanel(materia,seccion);
	  	  	  dialogsInscAlumnos.setMsg("Ha seleccionado el curso: ("+materia+")  seccion: ("+seccion+ ") para eliminarlo...");
	  	  	  InscAlumnos.eliminarTodo = false;
	  	  	  break;
	  	  	}
	  	  	case 3 ://choque de materia (2 puertas)
	  	  	{
	  	  	  break;
	  	  	}
	  	  	case 4 ://materia seleccionada para eliminar (naranja)
	  	  	{
	  	  	  ProcCrearInscripcion.clearTextSelectedMat();
  			  ProcCrearInscripcion.tMat.selected = false;	
	  	  	  ProcCrearInscripcion.cleanSolapSelected();	
	  	  	  ProcCrearInscripcion.panelChoque.hide();
	  	  	  ProcCrearInscripcion.setStsSinHrAnt();	
	  	  	  ProcCrearInscripcion.cleanSelected();
	  	  	  ProcCrearInscripcion.setButtons([0,1,1,1,1,1]);
	  	  	  dialogsInscAlumnos.setMsg("se ha deseleccionado el curso..!");
	  	  	  InscAlumnos.eliminarTodo = true;
	  	  	  break;
	  	  	}
	  	  }
	  	}
	  	tablesInscAlumnos.rows[f+1].cells[c+1].onmouseover = function(e)
	  	{
	  	  tabInf.showPanel(0);	
	  	  ProcCrearInscripcion.clearTextSelectedMat();
  		  ProcCrearInscripcion.tMat.selected = false;
	  	  ProcCrearInscripcion.setSelectedBgCell(this.row, this.col);
	  	  //******************** PARA CHOQUE DE HORARIO ***********************
	  	  if(!ProcCrearInscripcion.panelChoque.stsSel)
	  	  {
	  	    if(ProcCrearInscripcion.data[this.col-1][this.row-1].sts == 3)
		    {
	  	      dialogsInscAlumnos.setMsg("verifique las materias con choque colocandose encima de cada icono en el panel emergente de choque de horario..."); 	
		      ProcCrearInscripcion.clearTextSelectedMat();
		  	  //CHOQUE DE HORARIO
		  	  if(ProcCrearInscripcion.panelChoque.getTotalObj() > 0)
		  	    ProcCrearInscripcion.panelChoque.delAllObj();
    		  ProcCrearInscripcion.clearInf();
			  var arrIdxSlp = ProcCrearInscripcion.getSolapIndexArray(this.col-1, this.row-1);
			  for(var i=0; i<arrIdxSlp.length; i++)
			  {
 	             ProcCrearInscripcion.panelChoque.addObj(ProcCrearInscripcion.solap[arrIdxSlp[i]].img,10+i*25, 20);
			  }
			  ProcCrearInscripcion.setPositionPanel(this.row-1,this.col-1);
			  ProcCrearInscripcion.panelChoque.show();
		    }
		    else
		    {
		    	var sts =	ProcCrearInscripcion.data[this.col-1][this.row-1].sts;
		    	switch(sts)
			  	{
			  	  case 1 : {dialogsInscAlumnos.setMsg("Materia nueva para inscribir, vea el detalle en 'Detalle de Curso'"); break;}  
			  	  case 2 : {dialogsInscAlumnos.setMsg("Materia inscrita, vea el detalle en 'Detalle de Curso'"); break;}
			  	  case 4 : {dialogsInscAlumnos.setMsg("Vea el detalle de la materia  en 'Detalle de Curso'"); break;}
			  	}
		  	  ProcCrearInscripcion.showInf(this.col-1, this.row-1);
		  	  if(!ProcCrearInscripcion.panelChoque.stsSel)
			    ProcCrearInscripcion.panelChoque.hide();
		    }
		  }
	  	  //*******************************************************************
	  	}
	  	tablesInscAlumnos.rows[f+1].cells[c+1].onmouseout = function(e)
	  	{	
	  	  dialogsInscAlumnos.setMsg("");	
	  	  tablesInscAlumnos.rows[this.row].cells[this.col].style.backgroundColor = '#f0f0fa';	
	  	  //ProcCrearInscripcion.setNormalBgCell(this.row55, this.col);	
	  	}	  	
	  }
	}
	divSinHorario.onclick = function(e)
	{
	  ProcCrearInscripcion.cleanSelected();	
	  ProcCrearInscripcion.cleanSolapSelected();
	  ProcCrearInscripcion.panelChoque.hide();
	  switch(divSinHorario.sts)
	  {
	  	case 1 : //materia seleccionada (verde)
	  	{	
	  	  dialogsInscAlumnos.setMsg("Selecciono un curso sin horario para inscribirlo...");	
	  	  ProcCrearInscripcion.setStsSinHr(4);		  	  	
	  	  ProcCrearInscripcion.setButtons([1,2,1,1,1,1]);
	  	  break;
	  	}
	  	case 2 ://materia inscrita (marron)
	  	{
	  	  dialogsInscAlumnos.setMsg("Selecciono un curso sin horario para eliminarlo...");	
	  	  ProcCrearInscripcion.setStsSinHr(4);
	  	  ProcCrearInscripcion.setButtons([0,1,1,1,1,1]);
	  	  break;
	  	}
	  	case 4 ://materia seleccionada (naranja)
	  	{
	  	  dialogsInscAlumnos.setMsg("Deselecciono el curso sin horario...");	
	  	  ProcCrearInscripcion.setStsSinHrAnt();	
	  	  ProcCrearInscripcion.setButtons([0,0,1,1,1,1]);
	  	  break;
	  	}
	  } 
	}
  },

  //Carga la imagen al buffer para ser actualizada por show()
  loadImgToBuffer : function(c,f,img)
  {
  	this.imgBuffer[c][f].src = this.pathImg + img;
  },
  
  setImgSinHr : function(img)
  {
  	divSinHorario.img.src = this.pathImg+img;
  },
  
  setStsSinHrAnt : function()
  {
  	if(pcbInscAluMatSinHorario.getTotalOptions() > 0)
  	{
  	  var op = pcbInscAluMatSinHorario.getOption(pcbInscAluMatSinHorario.getItemIndex());
  	  var sa =	pcbInscAluMatSinHorario.mats[op].stsAnt;
  	  if(sa==undefined)
  	    sa = pcbInscAluMatSinHorario.mats[op].sts;
  	  ProcCrearInscripcion.setStsSinHr(sa);
  	}
  },
   
  setStsSinHr : function(sts)
  {
  	divSinHorario.sts = sts;
  	if(pcbInscAluMatSinHorario.getTotalOptions() > 0)
  	{
  	  var op = pcbInscAluMatSinHorario.getOption(pcbInscAluMatSinHorario.getItemIndex());	
      if(pcbInscAluMatSinHorario.mats[op].sts != 4)
  	    pcbInscAluMatSinHorario.mats[op].stsAnt = pcbInscAluMatSinHorario.mats[op].sts;
  	  pcbInscAluMatSinHorario.mats[op].sts = sts;
      switch(sts)
      {
  	    case 0 : 
        {
    	  this.setImgSinHr(this.imgInicio);//transparente
  		  break;
  	    }
  	    case 1 : 
  	    {
  		  this.setImgSinHr(this.imgMatSelec);//verde
  		  break;
  	    }
  	    case 2 : 
  	    {
  		  this.setImgSinHr(this.imgMatInscrita);//marron
  		  break;
  	    }
  	    case 4 : 
  	    {
  		  this.setImgSinHr(this.imgEliminar);//naranja
  		  break;
  	    }
  	  }
  	}
  	else  
  	{
  	  divSinHorario.sts = 0;
  	  this.setImgSinHr(this.imgInicio);//transparente
  	}  
  },
  
  cleanSelected : function()
  {
  	for (var c=0; c < tablesInscAlumnos.rows[0].cells.length-1; c++) 
	{
	  for (var f=0; f < tablesInscAlumnos.rows.length-1; f++) 
	  {
	  	if(this.getSts(c,f)==4)
	  	  this.setStatus(c,f,this.getStsAnt(c,f));
	  }
	}	
  },
  
  clearNewCurso : function()
  {
  	var mat ='';
  	//SE CHEQUEA LOS CURSOS CON HORARIO
  	for (var c=0; c < tablesInscAlumnos.rows[0].cells.length-1; c++) 
	{
	  for (var f=0; f < tablesInscAlumnos.rows.length-1; f++) 
	  {
	  	if(this.getSts(c,f)==1)
	  	{
	  	  mat = this.data[c][f].materia;
	  	  this.clearMatInscByName(mat);
	      this.data[c][f].materia		= 	'';
  	  	  this.data[c][f].seccion		= 	'';
  	      this.data[c][f].profesor		=	'';
  	      this.data[c][f].cupoMax		=	'';
  	      this.data[c][f].cupoMin		=	'';
  	      this.data[c][f].inscritos		=	'';
  	      this.data[c][f].bloque		=	'';
  	      this.data[c][f].aula			=	'';
  	      this.data[c][f].hc			=	'';
  	      this.data[c][f].idCurso		=	'';
  	      this.data[c][f].idPersona		=	'';//Para materias que ya inscribio  		  	
  	      this.data[c][f].horario 		= 	'';
  	      this.data[c][f].dia 			= 	'';
  	      this.data[c][f].posicion		= 	'';
	      this.data[c][f].modoExt	= 	false;
	      this.data[c][f].idMateria		= 	'';
	      this.setStatus(c,f,0);
	  	}
	  }
	}
	//SE CHEQUEAN CURSOS NUEVOS EN LOS CURSOS SIN HORARIO
	var t = pcbInscAluMatSinHorario.getTotalOptions();
  	for(var i=0; i<t; i++)
  	{
  	  var op = pcbInscAluMatSinHorario.getOption(i);
  	  if(op !='' && op!=null && op!=undefined)
  	  {	
  	  	//Si el curso sin horario es nuevo se eliminara
        if(pcbInscAluMatSinHorario.mats[op].sts == 1)
        {
          this.clearMatInscByName(pcbInscAluMatSinHorario.mats[op].materia);	
      	  this.setImgSinHr(this.imgInicio);//transparente
      	  divSinHorario.sts = 0;
      	  pcbInscAluMatSinHorario.mats.splice(op,1);
      	  pcbInscAluMatSinHorario.deleteOption(i);
        }
      }	  
  	}
  	if(t>1)//Si el combo tenia mas de una opcion se colocara la primera
  	{
  	  pcbInscAluMatSinHorario.setSelectedIndex(0);
  	  var op = pcbInscAluMatSinHorario.getOption(0);
  	  ProcCrearInscripcion.setStsSinHr(pcbInscAluMatSinHorario.mats[op].sts);
  	}
  	//SE ELIMINAN DEL PANEL Y DE LA ESTRUCTURA DE SOLAPAMIENTO
	ProcCrearInscripcion.cleanSolapSelected();
	ProcCrearInscripcion.panelChoque.hide();
	ProcCrearInscripcion.delSolapCurso();
  },
  
  getSts : function(c,f)  
  {
    return this.data[c][f].sts;	
  },
  
  getStsAnt : function(c,f)
  {
  	return this.data[c][f].stsAnt;
  },
  
  getTotalSts : function(stsVal){
  		var total = 0;
    	for (var c=0; c < tablesInscAlumnos.rows[0].cells.length-1; c++) {
	  		for (var f=0; f < tablesInscAlumnos.rows.length-1; f++) 
  	  			if(this.data[c][f].sts === stsVal)
  	  				total++;
  	  	}
  	  	return total;
  },
  
  setStatus : function(c,f,sts)
  {
  	switch(sts)
  	{
  		case 0 : 
  		{
  			this.data[c][f].stsDescrip = 'inicio';
  			this.data[c][f].sts = 0;
  			this.data[c][f].stsAnt = 0;
  			this.loadImgToBuffer(c,f,this.imgInicio);
  			break;
  		}
  		case 1 : 
  		{
  			this.data[c][f].stsDescrip = 'Materia seleccionada para inscribir';
  			this.data[c][f].stsAnt = this.data[c][f].sts;
  			this.data[c][f].sts = 1;
  			this.loadImgToBuffer(c,f,this.imgMatSelec);
  			break;
  		}
  		case 2 : 
  		{
  			this.data[c][f].stsDescrip = 'Materia inscrita (salvada)';
  			this.data[c][f].stsAnt = this.data[c][f].sts;
  			this.data[c][f].sts = 2;
  			this.loadImgToBuffer(c,f,this.imgMatInscrita);
  			break;
  		}
  		case 3 : 
  		{
  			this.data[c][f].stsDescrip = 'Choque de horario entre curso a  inscribir y el inscrito';
  			this.data[c][f].stsAnt = this.data[c][f].sts;
  			this.data[c][f].sts = 3;
  			this.loadImgToBuffer(c,f,this.imgChoque);
  			break;
  		}
  		case 4 : 
  		{
  			if(this.data[c][f].sts!=3)
  			{
  			  this.data[c][f].stsDescrip = 'Materia seleccionada para eliminar';
  			  this.data[c][f].stsAnt = this.data[c][f].sts;
  			  this.data[c][f].sts = 4;
  			  this.loadImgToBuffer(c,f,this.imgEliminar);
  			}
  			break;
  		}
  	}
  },
  
  isSolap : function(stData, idx)
  {
  	var horario = stData[1][idx];
	var dia = stData[2][idx];
  	for (var c=0; c < tablesInscAlumnos.rows[0].cells.length-1; c++) 
	{
	  for (var f=0; f < tablesInscAlumnos.rows.length-1; f++) 
	  {
	  	if(this.data[c][f].horario==horario && this.data[c][f].dia==dia)
	  	{
		  if(!this.solapExist(c,f,this.data[c][f].materia, this.data[c][f].seccion))	
		     this.addSolap(c,f,this.data[c][f].sts);
		  if(parseInt(stData[0][idx], 10) != 0)
		  {
		    if(!this.solapExist(c,f,stData[4][idx], stData[8][idx]))
		      this.addSolap(c, f, 2, stData, idx);
		  }    
		  else
		  {
		    if(!this.solapExist(c,f,stData[4][idx], stData[8][idx]))
		   	  this.addSolap(c, f, 1, stData, idx);
		  }
	  	  return true;		
	  	}
	  }
	}
	return false;
  },
  
  setCurso : function(c,f,stData,idxSt,sts)
  {  	
  	  this.data[c][f].materia			= 	stData[13][idxSt];
  	  this.data[c][f].seccion			= 	stData[8][idxSt];
  	  this.data[c][f].profesor			=	stData[5][idxSt];
  	  this.data[c][f].cupoMax			=	stData[10][idxSt];
  	  this.data[c][f].cupoMin			=	stData[9][idxSt];
  	  this.data[c][f].inscritos		=	stData[6][idxSt];
  	  this.data[c][f].bloque			=	stData[11][idxSt];
  	  this.data[c][f].aula				=	stData[12][idxSt];
  	  this.data[c][f].hc					=	stData[7][idxSt];
  	  this.data[c][f].idCurso			=	stData[3][idxSt];
  	  this.data[c][f].idPersona		=	stData[0][idxSt];//Para materias que ya inscribio  		  	
  	  this.data[c][f].horario 			= 	stData[1][idxSt];
  	  this.data[c][f].dia 				= 	stData[2][idxSt];
  	  this.data[c][f].posicion			= 	stData[14][idxSt];
	  this.data[c][f].modoExt		= 	stData[15][idxSt];
	  this.data[c][f].idMateria	   = 	stData[4][idxSt];
	  this.setStatus(c,f,sts);
  	  this.addMatInsc(this.data[c][f].materia);
  },
  
  addSolap : function(c, f, sts, stData, idxSt)
  {
  	var p = this.solap.length;
  	var mat ='';
  	var sec ='';
  	this.solap[p] = new Object();
  	this.solap[p] = new Object();
  	this.solap[p].c = c;
  	this.solap[p].f = f;
    
    //New Solap
  	if(stData !=null && stData!='undefined')
  	{
  	  mat = stData[13][idxSt];	
  	  sec = stData[8][idxSt];
  	  this.solap[p].materia		= 	stData[13][idxSt];
  	  this.solap[p].seccion		= 	stData[8][idxSt];
  	  this.solap[p].profesor	=	stData[5][idxSt];
  	  this.solap[p].cupoMax		=	stData[10][idxSt];
  	  this.solap[p].cupoMin		=	stData[9][idxSt];
  	  this.solap[p].inscritos	=	stData[6][idxSt];
  	  this.solap[p].bloque		=	stData[11][idxSt];
  	  this.solap[p].aula			=	stData[12][idxSt];
  	  this.solap[p].hc			=	stData[7][idxSt];
  	  this.solap[p].idCurso		=	stData[3][idxSt];
  	  this.solap[p].idPersona	=	stData[0][idxSt];//Para materias que ya inscribio  		  	
  	  this.solap[p].horario 	= 	stData[1][idxSt];
  	  this.solap[p].dia 			= 	stData[2][idxSt];
  	  this.solap[p].posicion	= 	stData[14][idxSt];
	  this.solap[p].modoExt		=  stData[15][idxSt];	
	  this.solap[p].idMateria	= 	stData[4][idxSt];
	  this.solap[p].base			=  true;	
  	}
  	else
  	{
  	  // Solap	
  	  mat = this.data[c][f].materia;
  	  sec = this.data[c][f].seccion;
  	  this.solap[p].materia		= 	this.data[c][f].materia;
  	  this.solap[p].seccion		= 	this.data[c][f].seccion;
  	  this.solap[p].profesor	=	this.data[c][f].profesor;
  	  this.solap[p].cupoMax		=	this.data[c][f].cupoMax;
  	  this.solap[p].cupoMin		=	this.data[c][f].cupoMin;
  	  this.solap[p].inscritos	=	this.data[c][f].inscritos;
  	  this.solap[p].bloque		=	this.data[c][f].bloque;
  	  this.solap[p].aula			=	this.data[c][f].aula;
  	  this.solap[p].hc			=	this.data[c][f].hc;
  	  this.solap[p].idCurso		=	this.data[c][f].idCurso;
  	  this.solap[p].idPersona	=	this.data[c][f].idPersona;//Para materias que ya inscribio  		  	
  	  this.solap[p].horario 	= 	this.data[c][f].horario;
  	  this.solap[p].dia 			= 	this.data[c][f].dia;
  	  this.solap[p].posicion	= 	this.data[c][f].posicion;
	  this.solap[p].modoExt		= 	this.data[c][f].modoExt;
	  this.solap[p].idMateria	= 	this.data[c][f].idMateria;
	  this.solap[p].base			=   false;
	}
	//Parte Comun
	this.solap[p].sts = sts;
	this.solap[p].stsAnt = sts;
	this.solap[p].img = document.createElement('img');
	this.solap[p].img.idx = p;
	this.solap[p].img.id = p;
	this.solap[p].img.row = f;
	this.solap[p].img.col = c;
	this.solap[p].img.sts = sts;
	this.solap[p].img.stsAnt = sts;	
	this.solap[p].img.materia = mat;
	this.solap[p].img.seccion = sec;
	switch (sts)
	{
	  case 1 : 
	  {
	    this.solap[p].img.src = this.pathImg + this.imgMatSelec;
	    break;
	  }
	  case 2:
	  {
	    this.solap[p].img.src = this.pathImg + this.imgMatInscrita;
	    break;
	  }
	}
	
	this.solap[p].img.onmouseover = function(e)
	{
	  this.style.cursor = 'pointer';	
	  ProcCrearInscripcion.showInfSolap(this.idx);
	  switch (ProcCrearInscripcion.solap[p].img.sts)
	  {
	    case 1 :{dialogsInscAlumnos.setMsg("Curso nuevo, para inscribirlo, vea el detalle en la etiqueta 'Detalle Curso'..!");break}
	    case 2 :{dialogsInscAlumnos.setMsg("Curso Inscrito, vea la informacion del curso en 'Detalle Curso'..!");break}
	    case 4 :{dialogsInscAlumnos.setMsg("Curso seleccionado para eliminar, vea la informacion del curso en 'Detalle Curso'..!");break}
	  }
	    
	}
	
	this.solap[p].img.onclick = function(e)
	{
		var materia = ProcCrearInscripcion.solap[this.id].materia;
	  	var seccion = ProcCrearInscripcion.solap[this.id].seccion;
	  	switch(this.sts)
	  	{
	  	  case 1 : //materia seleccionada (verde)
	  	  {
	  	  	ProcCrearInscripcion.cleanSolapSelected();
	  	  	ProcCrearInscripcion.panelChoque.stsSel = true;
	  	  	
	  	  	ProcCrearInscripcion.panelChoque.idSel = ProcCrearInscripcion.solap[this.id].idCurso;
	  	    this.src = ProcCrearInscripcion.pathImg + ProcCrearInscripcion.imgEliminar;	
	  	    this.sts = 4; 
	  	    ProcCrearInscripcion.cleanSelected();
	  	    ProcCrearInscripcion.setStsSinHrAnt();	
	  	    var objH = ProcCrearInscripcion.getObjHorarios(materia, seccion);
	  	    if (pcbInscMateria.setModeReturnGetText(3).getText()==='SI' && objH.materia===pcbInscMateria.getValue()){
	  	  		   //ProcCrearInscripcion.panelChoque.hide();
	  	  		   ProcCrearInscripcion.cleanSolapSelected();
	  	  			ProcCrearInscripcion.panelChoque.stsSel = false;
	  	  			ProcCrearInscripcion.panelChoque.idSel = -1;
	  	  			ProcCrearInscripcion.setStsSinHrAnt();	
	  	  			ProcCrearInscripcion.cleanSelected();
	  	  		   dialogsInscAlumnos.setMsg("No puede insribir esta materia con choque..!", true);
	  	  	 }
	  	    else{
	  	    		while(objH.next())
	  	    		{
	  	      		ProcCrearInscripcion.setStatus(objH.getCol(),objH.getRow(),4);	
	  	    		}
	  	    		ProcCrearInscripcion.setButtons([1,0,1,1,0,1]);
	  	    		dialogsInscAlumnos.setMsg("Ha seleccionado el curso : ("+materia+") - seccion ("+seccion+") para inscribirlo, el curso presenta un choque de horario..!");
	  	    }
	  	    break;
	  	  }
	  	  case 2 ://materia inscrita (marron)
	  	  {
	  	  	ProcCrearInscripcion.panelChoque.idSel = ProcCrearInscripcion.solap[this.id].idCurso;
	  	  	ProcCrearInscripcion.cleanSolapSelected();
	  	  	ProcCrearInscripcion.panelChoque.stsSel = true;
	  	  	this.sts = 4;
	  	    this.src = ProcCrearInscripcion.pathImg + ProcCrearInscripcion.imgEliminar;	
	  	    ProcCrearInscripcion.cleanSelected();	
	  	    ProcCrearInscripcion.setStsSinHrAnt();
	  	    var objH = ProcCrearInscripcion.getObjHorarios(materia, seccion);
	  	    while(objH.next())
	  	    {
	  	      ProcCrearInscripcion.setStatus(objH.getCol(),objH.getRow(),4);	
	  	    }
	  	    ProcCrearInscripcion.setButtons([0,1,1,1,0,1]);
	  	    dialogsInscAlumnos.setMsg("Ha seleccionado el curso : ("+materia+") - seccion ("+seccion+") para eliminarlo, el curso presenta choque de horario..!");
	  	    InscAlumnos.eliminarTodo = false;
	  	    break;
	  	  }
	  	  case 4 ://materia seleccionada para eliminar (naranja)
	  	  {	  	    
	  	  	ProcCrearInscripcion.cleanSolapSelected();
	  	  	ProcCrearInscripcion.panelChoque.stsSel = false;
	  	  	ProcCrearInscripcion.panelChoque.idSel = -1;
	  	  	ProcCrearInscripcion.setStsSinHrAnt();	
	  	  	ProcCrearInscripcion.cleanSelected();
	  	  	ProcCrearInscripcion.setButtons([0,0,1,1,1,1]);	
	  	  	dialogsInscAlumnos.setMsg("Ha deseleccionado el curso ("+materia+") seccion ("+seccion+"), el curso presenta choque de horario..!");
	  	  	InscAlumnos.eliminarTodo = true;
	  	  }  
		}	
	  }
  },
  
  cleanSolapSelected : function()
  {
  	ProcCrearInscripcion.panelChoque.stsSel = false;
  	var p = this.solap.length;
  	for(var i=0; i<p; i++)
  	{
  	  this.solap[i].img.sts = this.solap[i].img.stsAnt;
  	  switch(this.solap[i].img.stsAnt)
	  {
	    case 1 : 
	    {
	      this.solap[i].img.src = ProcCrearInscripcion.pathImg + ProcCrearInscripcion.imgMatSelec; 
	      break;
	    }
	    case 2 : 
	    {
	      this.solap[i].img.src = ProcCrearInscripcion.pathImg + ProcCrearInscripcion.imgMatInscrita; 
	      break;
	    }
	  }	
  	}
  },
  
  solapExist : function(c,f,materia,seccion)
  {
  	var p = this.solap.length;
  	for(var i=0; i<p; i++)
  	{
  	  if(this.solap[i].c == c && this.solap[i].f == f && this.solap[i].materia == materia && this.solap[i].seccion == seccion)
  	  {
  	  	return true;
  	  }	
  	}	
	return false;
  },
  
  isSolapCurso : function(materia, seccion)
  {
  	var p = this.solap.length;
  	for(var i=0; i<p; i++)
  	{
  	  if(this.solap[i].materia == materia && this.solap[i].seccion == seccion)
  	  {
  	  	return this.solap[i];
  	  }	
  	}
	return null;
  },
  
  getIdxCursoBase : function(arrIdx)
  {
  	for(var i=0; i<arrIdx.length; i++)
  	{
  	  if (this.solap[arrIdx[i]].sts == 2)
  	    return arrIdx[i];
  	}
  	return -1;
  },
  
  delSolapCurso : function()
  {
  	var p = this.solap.length;
  	for(var j=0; j<p; j++)
  	{
  	  if(this.solap[j].sts==1)
  	  {	
  	  	
  	    //Se obtiene la fila y columna donde ocurre el solapamiento
  	    var ps = this.getSolapPoints(this.solap[j].materia);
  	    var arrIdx = null;
  	    if(ps!=null)
        {
          var c = ps.c;
          var f = ps.f;	
  	      //Se obtienen los indices de los cursos solapados	
  	      arrIdx = this.getSolapIndexArray(c,f);
  	      var idBase = this.getIdxCursoBase(arrIdx);
  	      if(arrIdx.length == 2)
  	      {
  	      	this.data[c][f].materia		= 	this.solap[idBase].materia;
  	  		this.data[c][f].seccion		= 	this.solap[idBase].seccion;
  	  		this.data[c][f].profesor	=	this.solap[idBase].profesor;
  	  		this.data[c][f].cupoMax		=	this.solap[idBase].cupoMax;
  	  		this.data[c][f].cupoMin		=	this.solap[idBase].cupoMin;
  	  		this.data[c][f].inscritos	=	this.solap[idBase].inscritos;
  	  		this.data[c][f].bloque		=	this.solap[idBase].bloque;
  	  		this.data[c][f].aula			=	this.solap[idBase].aula;
  	  		this.data[c][f].hc			=	this.solap[idBase].hc;
  	  		this.data[c][f].idCurso		=	this.solap[idBase].idCurso;
  	  		this.data[c][f].idPersona	=	this.solap[idBase].idPersona;//Para materias que ya inscribio  		  	
  	  		this.data[c][f].horario 	= 	this.solap[idBase].horario;
  	  		this.data[c][f].dia 			= 	this.solap[idBase].dia;
  	  		this.data[c][f].posicion	= 	this.solap[idBase].posicion;
	  		this.data[c][f].modoExt		= 	this.solap[idBase].modoExt;
	  		this.data[c][f].idMateria	= 	this.solap[idBase].idMateria;
	  		this.data[c][f].base			=   true;
	  		this.setStatus(c,f,2);
  	      } 
  	    }
  	    this.solap.splice(j,1);
  	  	j--;
  	  	p--;
  	  }
  	}
  },
  
  
  getSolapPoints : function(materia)
  {
  	var p = this.solap.length;
  	var ObjPoint = null;
  	for(var i=0; i<p; i++)
  	{
  	  if(this.solap[i].materia == materia)
  	  {
  	  	ObjPoint = new Object();
  	  	ObjPoint.c = this.solap[i].c;
  	  	ObjPoint.f = this.solap[i].f;
  	  	ObjPoint.materia = materia;
  	  	return ObjPoint;
  	  }	
  	}
  	return null;
  },
  
  getSolapIndexArray : function(c,f)
  {

  	var arrIndex = new Array();
  	var p = this.solap.length;
  	for(var i=0; i<p; i++)
  	{
  	  if(this.solap[i].c == c && this.solap[i].f == f)
  	  {
  	  	arrIndex[arrIndex.length] = i;
  	  }	
  	}
  	return arrIndex;
  },
  
  showInfSolap : function(idx)
  {	  	  
	editsInscAlumnosProfesor.setFont('calibri',10,'black');  
	editsInscAlumnosSeccion.setFont('calibri',10,'black');
	editsInscAlumnosHc.setFont('calibri',10,'black');
	editsInscAlumnosCupMax.setFont('calibri',10,'black');  
	editsInscCupMin.setFont('calibri',10,'black');
	editsInscAluTotInscritos.setFont('calibri',10,'black');
	editsInscMateria.setFont('calibri',10,'black');
	editsInscBloque.setFont('calibri',10,'black');  
	editsInscAula.setFont('calibri',10,'black');
	editsInscPosicion.setFont('calibri',10,'black');		

    editsInscAlumnosProfesor.setValue(this.solap[idx].profesor);
	editsInscAlumnosSeccion.setValue(this.solap[idx].seccion);
	editsInscAlumnosHc.setValue(this.solap[idx].hc);
	editsInscAlumnosCupMax.setValue(this.solap[idx].cupoMax);
	editsInscCupMin.setValue(this.solap[idx].cupoMin);
	editsInscAluTotInscritos.setValue(this.solap[idx].inscritos);
	editsInscMateria.setValue(this.solap[idx].materia);
	editsInscBloque.setValue(this.solap[idx].bloque);
	editsInscAula.setValue(this.solap[idx].aula);
	editsInscPosicion.setValue(this.solap[idx].posicion);
  },
    
  clearComboSinHorario : function()
  {
  	pcbInscAluMatSinHorario.deleteAll();
  },
  
  //Carga de la data
  loadData : function(stData)
  {
	  	var idx = new Array(); //posiciones en la estructura de los cursos seleccionados
		var m = '';
		var s = '';
		var c = -1;
		var f = -1;
		var flag = false;  
		var stsC = new Array();
    	this.clearComboSinHorario();	
	
    	for(var i=0; i<stData[0].length; i++)
		{
			if(pcbInscMateria.setModeReturnGetText(3).getText()==='SI' && stData[13][i]===pcbInscMateria.getValue())			
				stData[15][i] = true;
			else
				stData[15][i] = false;
	  		if(stData[1][i]!='0')//MATERIAS CON HORARIO
	  		{	
			    if(stData[0][i]!='0')//MATERIA YA INSCRITA (tiene id de alumno)
			    {
			  	  c = stData[2][i]-1;
			  	  f = this.getRowByIdHorario(stData[1][i])-1;
			  	  if(ProcCrearInscripcion.isSolap(stData,i))
			  	    this.setCurso(c,f,stData,i,3);
			  	  else
			  	    this.setCurso(c,f,stData,i,2);
			    }
			    else//MATERIAS A INSCRIBIR CON HORARIO (No inscritas)
			    {
			  	  idx[idx.length] = i; 	//posicion en la estructura del curso seleccionado
			  	  m = stData[13][i];	//materia
			  	  s = stData[8][i];		//seccion
			  	  flag=true;
			    }
	  		}
	  		else//CARGA DE MATERIAS SIN HORARIO
	  		{
			  	idx[idx.length] = i; //posicion en la estructura del curso seleccionado	
			  	flag=true;
			  	//MATERIA SIN HORARIO - NUEVA (no tiene alumno asignado)
			  	if(stData[0][i]=='0')
			  	{
			  	  m = stData[13][i];	//materia
			  	  s = stData[8][i];		//seccion 
			  	  stsC[stsC.length] = 1;//materia no inscrita (nueva)
			  	}
			  	else//MATERIA SIN HORARIO CON ALUMNO ASIGNADO "YA INSCRITA"
			  	{
			  	  stsC[stsC.length] = 2;//materia inscrita
			  	}
			}
		}
		if(flag)//INICIO DE CARGA PARA MATERIAS NUEVAS CON O SIN HORARIO
		{
		  var o = new Object();
		  for(var i=0; i<idx.length; i++)
		  {
		  	if(parseInt(stData[1][idx[i]],10)!=0)//CARGA DE MATERIA CON HORARIO
		  	{
		  	  //Se obtiene el objeto de horario
		  	  o = this.getObjHorarios(m, s);
		  	  //Si no ha asignado todas las horas o es materia con horario extendido
	  		  if ((o.total < stData[7][idx[i]]) || (pcbInscMateria.setModeReturnGetText(3).getText()==='SI' && stData[13][i]===pcbInscMateria.getValue()))
	  		  {
		  	    c = stData[2][idx[i]]-1;
		  	    f = this.getRowByIdHorario(stData[1][idx[i]])-1;	
		  	    if(ProcCrearInscripcion.isSolap(stData,idx[i]))
		  	      this.setCurso(c,f,stData,idx[i],3)
		  	    else
		  	      this.setCurso(c,f,stData,idx[i],1);
	  		  }
	 	    }
	 	    else
	 	    {
	 	      //CARGA DE MATERIAS SIN HORARIO NUEVAS
	 	      var res = false;
	 	      for(var w=0; w<pcbInscAluMatSinHorario.getTotalOptions(); w++)
	 	      {
	 	      	//SE CHEQUEA SI LA MATERIA YA ESTA DENTRO DEL COMBO PARA IGNORARLA
	 	      	if(pcbInscAluMatSinHorario.getOption(w)==stData[13][idx[i]])
	 	      	{
	 	      	  res=true;
	 	      	  break;	
	 	      	}
	 	      }
	 	      if(!res) //HAY UNA NUEVA MATERIA SIN HORARIO
	 	      {
	 	      	pcbInscAluMatSinHorario.mats[stData[13][idx[i]]] 				= new Object();
	 	      	pcbInscAluMatSinHorario.mats[stData[13][idx[i]]].idCurso 	= stData[3][idx[i]];
	 	      	pcbInscAluMatSinHorario.mats[stData[13][idx[i]]].modoExt 	= false
	 	      	pcbInscAluMatSinHorario.mats[stData[13][idx[i]]].profesor 	= stData[5][idx[i]];
	 	      	pcbInscAluMatSinHorario.mats[stData[13][idx[i]]].seccion  	= stData[8][idx[i]];
	 	      	pcbInscAluMatSinHorario.mats[stData[13][idx[i]]].hc 			= stData[7][idx[i]];
	 	      	pcbInscAluMatSinHorario.mats[stData[13][idx[i]]].cupoMax 	= stData[10][idx[i]];
	 	      	pcbInscAluMatSinHorario.mats[stData[13][idx[i]]].cupoMin 	= stData[9][idx[i]];
	 	      	pcbInscAluMatSinHorario.mats[stData[13][idx[i]]].inscritos 	= stData[6][idx[i]];
	 	      	pcbInscAluMatSinHorario.mats[stData[13][idx[i]]].materia 	= stData[13][idx[i]];
	 	      	pcbInscAluMatSinHorario.mats[stData[13][idx[i]]].bloque 		= stData[11][idx[i]];
	 	      	pcbInscAluMatSinHorario.mats[stData[13][idx[i]]].aula 		= stData[12][idx[i]];
	 	      	pcbInscAluMatSinHorario.mats[stData[13][idx[i]]].posicion 	= stData[14][idx[i]];
	 	      	pcbInscAluMatSinHorario.mats[stData[13][idx[i]]].idMateria 	= stData[4][idx[i]];
	 	      	pcbInscAluMatSinHorario.mats[stData[13][idx[i]]].sts 			= stsC[i];
	 	      	pcbInscAluMatSinHorario.mats[stData[13][idx[i]]].stsAnt 		= stsC[i];
	 	      	pcbInscAluMatSinHorario.addOptionAndSimpleValue(null, stData[13][idx[i]], stData[4][idx[i]]); 
	 	        	ProcCrearInscripcion.addMatInsc(stData[13][idx[i]],pcbInscAluMatSinHorario.getTotalOptions()-1);
	 	        	pcbInscAluMatSinHorario.fonMouseOver = function(e)
	 	        	{
	 	          	if(pcbInscAluMatSinHorario.input.value!='')
	 	          	{	
	 	            	var op = pcbInscAluMatSinHorario.getOption(pcbInscAluMatSinHorario.getItemIndex());	
	 	            	editsInscAlumnosProfesor.setValue(pcbInscAluMatSinHorario.mats[op].profesor);//profesor
						   editsInscAlumnosSeccion.setValue(pcbInscAluMatSinHorario.mats[op].seccion);//seccion
						   editsInscAlumnosHc.setValue(pcbInscAluMatSinHorario.mats[op].hc);//hc
						   editsInscAlumnosCupMax.setValue(pcbInscAluMatSinHorario.mats[op].cupoMax);//cupoMax
						   editsInscCupMin.setValue(pcbInscAluMatSinHorario.mats[op].cupoMin);//cupoMin
						   editsInscAluTotInscritos.setValue(pcbInscAluMatSinHorario.mats[op].inscritos);//inscritos
						   editsInscMateria.setValue(pcbInscAluMatSinHorario.mats[op].materia);//materia
						   editsInscBloque.setValue('- - - - -');//bloque
						   editsInscAula.setValue('- - - - -');//aula
						   editsInscPosicion.setValue(pcbInscAluMatSinHorario.mats[op].posicion);//posicion
						   dialogsInscAlumnos.setMsg("Vea el detalle de la materia en 'Detalle Curso'..!");
				  		}
	 	        }
	 	        pcbInscAluMatSinHorario.onMouseOver('pcbInscAluMatSinHorario.fonMouseOver()');
	 	        divSinHorario.onmouseover = new Function('pcbInscAluMatSinHorario.fonMouseOver()');
	 	        pcbInscAluMatSinHorario.fonChange = function(e)
	 	        {	
	 	           var op = pcbInscAluMatSinHorario.getOption(pcbInscAluMatSinHorario.getItemIndex());	
	 	           editsInscAlumnosProfesor.setValue(pcbInscAluMatSinHorario.mats[op].profesor);//profesor
					  editsInscAlumnosSeccion.setValue(pcbInscAluMatSinHorario.mats[op].seccion);//seccion
					  editsInscAlumnosHc.setValue(pcbInscAluMatSinHorario.mats[op].hc);//hc
					  editsInscAlumnosCupMax.setValue(pcbInscAluMatSinHorario.mats[op].cupoMax);//cupoMax
					  editsInscCupMin.setValue(pcbInscAluMatSinHorario.mats[op].cupoMin);//cupoMin
					  editsInscAluTotInscritos.setValue(pcbInscAluMatSinHorario.mats[op].inscritos);//inscritos
					  editsInscMateria.setValue(pcbInscAluMatSinHorario.mats[op].materia);//materia
					  editsInscBloque.setValue('- - - - -');//bloque
					  editsInscAula.setValue('- - - - -');//aula
					  editsInscPosicion.setValue(pcbInscAluMatSinHorario.mats[op].posicion);//posicion
					  pcbInscAluMatSinHorario.mats[op].stsAnt = pcbInscAluMatSinHorario.mats[op].sts;
					  ProcCrearInscripcion.setStsSinHr(pcbInscAluMatSinHorario.mats[op].sts);	
	 	        }
	 	        pcbInscAluMatSinHorario.onChange('pcbInscAluMatSinHorario.fonChange()');
	 	         	        
	 	      }
	 	      pcbInscAluMatSinHorario.setSelectedIndex(0);
	 		   ProcCrearInscripcion.setStsSinHr(stsC[pcbInscAluMatSinHorario.getItemIndex()]);
	 	    }
		  }
		}
    	this.show();
    	this.showMatInsc();
  },
  
  getDataReport : function()
  {
    //Objeto para el reporte
    var Or =
    {  
      horas      : [],  
      titulos    : ['Alumno', 'Carrera', 'Periodo' ],
      desTitulos : [editsInscAlumnosNombre.getValue()+' '+editsInscAlumnosApellido.getValue(),
                    pcbInscAlumnosCarrera.getOption(),'...'],
      filaData   : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//24 horas
      hMateria   : [[],[],[],[],[],[],[]],
      hSecciones : [[],[],[],[],[],[],[]],
      hProfesores: [[],[],[],[],[],[],[]],
      hAulas     : [[],[],[],[],[],[],[]],
      hCodigos   : [[],[],[],[],[],[],[]]               
    }
    //Busqueda de la inf.
    for (var c=0; c < tablesInscAlumnos.rows[0].cells.length-1; c++) 
    {
      for (var f=0; f < tablesInscAlumnos.rows.length-1; f++) 
      {
        if(this.data[c][f].sts == 2)//Materia Inscrita
        {
          if(!Or.filaData[f])  
            Or.horas[Or.horas.length] = this.horario[f].descrip;
          Or.filaData[f]       = 1;
          Or.hMateria[c][f]    = this.data[c][f].materia;
          Or.hSecciones[c][f]  = this.data[c][f].seccion;
          Or.hProfesores[c][f] = this.data[c][f].profesor;
          Or.hAulas[c][f]      = this.data[c][f].aula; 
          Or.hCodigos[c][f]    = this.data[c][f].idMateria; 
        }
        else
        {
          Or.hMateria[c][f]    = '';
          Or.hSecciones[c][f]  = '';
          Or.hProfesores[c][f] = '';
          Or.hAulas[c][f]      = ''; 
          Or.hCodigos[c][f]    = '';  
        }  
      }
    }
    return Or;//Retorna el Objetos con los datos del horario del alumno      
  },
  
  getRecordListInscripcionNueva : function() {
	  	var rlx = xmlStructs.createRecordList("rlx");
	  	var fx = false;	  	
	  	for (var c=0; c < tablesInscAlumnos.rows[0].cells.length-1; c++){
			for (var f=0; f < tablesInscAlumnos.rows.length-1; f++){
				if(this.data[c][f].sts == 4 && this.data[c][f].stsAnt == 1){ //4:seleccionado para eliminar 1:seleccionado para inscribir
					fx=true;	
				  	rlx.addInt('reg'+f+','+c, this.data[c][f].idCurso);
				  	rlx.addInt('reg'+f+','+c, editsInscAlumnosCi.hideId);
				  	rlx.add('reg'+f+','+c, pcbInscAlumnosCarrera.setModeReturnGetText(0));
				  	rlx.add('reg'+f+','+c, pcbInscAlumnosPosicion);
				  	rlx.add('reg'+f+','+c, pcbInscAlumnosCarrera.setModeReturnGetText(3));
				  	if(this.data[c][f].modoExt){
				  		rlx.addInt('reg'+f+','+c, this.data[c][f].horario);
				  		rlx.addInt('reg'+f+','+c, this.data[c][f].dia);	
				  	}
				  	else{
				  		rlx.addInt('reg'+f+','+c, 0);
				  		rlx.addInt('reg'+f+','+c, 0);	
				  	}
				  	rlx.add('reg'+f+','+c, pcbInscAlumnosPeriodo);
			  	}
			  	else 
			  	{ //CHEQUEO DEL SOLAPAMIENTO 
			  		var sc = ProcCrearInscripcion.isSolapCurso(this.data[c][f].materia, this.data[c][f].seccion);
			  	   if(sc!=null){ //Hay materia con choque	
						if(sc.stsAnt == 1 && !this.data[c][f].modoExt){//Seleccionadas y no son extendidas
							fx=true;	
				  	  		rlx.addInt('reg'+f+','+c, sc.idCurso);
				  	  		rlx.addInt('reg'+f+','+c, editsInscAlumnosCi.hideId);
				  		  	rlx.add('reg'+f+','+c, pcbInscAlumnosCarrera.setModeReturnGetText(0));
				  		  	rlx.add('reg'+f+','+c, pcbInscAlumnosPosicion);
				  		  	rlx.add('reg'+f+','+c, pcbInscAlumnosCarrera.setModeReturnGetText(3));
				  		  	rlx.addInt('reg'+f+','+c, 0);
				  			rlx.addInt('reg'+f+','+c, 0);
				  		  	rlx.add('reg'+f+','+c, pcbInscAlumnosPeriodo);
						}
					}
				} 
			}
		}	
		if(!fx){
	  		for(var w=0; w<pcbInscAluMatSinHorario.getTotalOptions(); w++) {
	 	  		var op = pcbInscAluMatSinHorario.getOption(w);
	 	    	if(pcbInscAluMatSinHorario.mats[op].sts == 4 && pcbInscAluMatSinHorario.mats[op].stsAnt == 1) {
	 	    		rlx.addInt('reg'+w, pcbInscAluMatSinHorario.mats[op].idCurso);
		  	  		rlx.addInt('reg'+w, editsInscAlumnosCi.hideId);
		  	  		rlx.add('reg'+w, pcbInscAlumnosCarrera.setModeReturnGetText(0));
		  	  		rlx.add('reg'+w, pcbInscAlumnosPosicion);
		  	  		rlx.add('reg'+w, pcbInscAlumnosCarrera.setModeReturnGetText(3));
		  	  		rlx.addInt('reg'+w, 0);
			  		rlx.addInt('reg'+w, 0);
		  	  		rlx.add('reg'+w, pcbInscAlumnosPeriodo);
	 	    	}
 	  		}
 	  	}
	  	return rlx;
  },
  
  getIdCursoEliminar : function()
  {
  	var fx = false;
  	var idCursoEliminar = -1;
  	if(!ProcCrearInscripcion.panelChoque.stsSel)
  	{
	  for (var c=0; c < tablesInscAlumnos.rows[0].cells.length-1; c++) 
	  {
	    for (var f=0; f < tablesInscAlumnos.rows.length-1; f++) 
	    {	  	
	  	  if(this.data[c][f].sts == 4 && this.data[c][f].stsAnt == 2)
	  	  {
	  	    fx=true;	
	  	    idCursoEliminar = this.data[c][f].idCurso;
	      }
	    }
	  }  
	
  	  if(!fx)
	    for(var w=0; w<pcbInscAluMatSinHorario.getTotalOptions(); w++)
 	    {
 	  	  var op = pcbInscAluMatSinHorario.getOption(w);
 	      if(pcbInscAluMatSinHorario.mats[op].sts == 4 && pcbInscAluMatSinHorario.mats[op].stsAnt == 2)
 	      {
 	        idCursoEliminar = pcbInscAluMatSinHorario.mats[op].idCurso; 	    
 	      }
 	    }
 	}
 	else
 	{
 	  idCursoEliminar = ProcCrearInscripcion.panelChoque.idSel;	
 	  ProcCrearInscripcion.cleanSolapSelected();
  	  ProcCrearInscripcion.panelChoque.hide();
 	}
	return idCursoEliminar;
  },
  
  getObjHorarios : function(materia, seccion)
  {
  	var h = 
  	{
  		horarios : new Array(),
  		rows : new Array(),
  		cols : new Array(),
  		materia : '',
  		seccion : '',
  		total : 0,
  		itemIndex : -1,
  		hc : 0,
  		
  		getRow : function(index)
  		{
  		  if(index==null || index==undefined)
  		    index = this.itemIndex;	
  		  return h.rows[index];	
  		},
  		
  		getCol : function(index)
  		{
  		  if(index==null || index==undefined)
  		    index = this.itemIndex;
  		  return h.cols[index];	
  		},
  		
  		getHorario : function(index)
  		{
  		  if(index==null || index==undefined)
  		    index = this.itemIndex;	
  		  return this.horarios[index];	
  		},
  		
  		first : function()
  		{
  		  this.itemIndex=0;
  		  return h;	
  		},
  		
  		next : function()
  		{
  		  this.itemIndex++;
  		  if (this.itemIndex > this.total-1)
  		    return false
  		  else
  		    return true;	
  		},
  		
  		prior : function()
  		{
  		  this.itemIndex--;
  		  if (this.itemIndex < 0)
  		    return false
  		  else
  		    return true;	
  		},
  		
  		last : function()
  		{
  		  this.itemIndex = this.total-1;
  		  return h;	
  		}
  	}
  	for (var c=0; c < tablesInscAlumnos.rows[0].cells.length-1; c++) 
	{
	  for (var f=0; f < tablesInscAlumnos.rows.length-1; f++) 
	  {
	  	if(ProcCrearInscripcion.data[c][f].materia==materia && ProcCrearInscripcion.data[c][f].seccion==seccion)
	  	{
	  	  h.horarios[h.horarios.length] = ProcCrearInscripcion.data[c][f].horario;	
	  	  h.hc = ProcCrearInscripcion.data[c][f].hc;
	  	  h.rows[h.rows.length] = f;
	  	  h.cols[h.cols.length] = c;
	  	  h.materia = materia;
	  	  h.seccion = seccion;
	  	  h.total++;	
	  	}
	  }
	}
	return h;
  },
  
  //muestra la infomacion de un curso en los editores
  showInf : function(c,f)
  {	  
	  
	editsInscAlumnosProfesor.setFont('calibri',10,'black');  
	editsInscAlumnosSeccion.setFont('calibri',10,'black');
	editsInscAlumnosHc.setFont('calibri',10,'black');
	editsInscAlumnosCupMax.setFont('calibri',10,'black');  
	editsInscCupMin.setFont('calibri',10,'black');
	editsInscAluTotInscritos.setFont('calibri',10,'black');
	editsInscMateria.setFont('calibri',10,'black');
	editsInscBloque.setFont('calibri',10,'black');  
	editsInscAula.setFont('calibri',10,'black');
	editsInscPosicion.setFont('calibri',10,'black');		

    editsInscAlumnosProfesor.setValue(this.data[c][f].profesor);
	editsInscAlumnosSeccion.setValue(this.data[c][f].seccion);
	editsInscAlumnosHc.setValue(this.data[c][f].hc);
	editsInscAlumnosCupMax.setValue(this.data[c][f].cupoMax);
	editsInscCupMin.setValue(this.data[c][f].cupoMin);
	editsInscAluTotInscritos.setValue(this.data[c][f].inscritos);
	editsInscMateria.setValue(this.data[c][f].materia);
	editsInscBloque.setValue(this.data[c][f].bloque);
	editsInscAula.setValue(this.data[c][f].aula);
	editsInscPosicion.setValue(this.data[c][f].posicion);
  },
  
  clearInf : function()
  {
  	editsInscAlumnosProfesor.setValue('');
	editsInscAlumnosSeccion.setValue('');
	editsInscAlumnosHc.setValue('');
	editsInscAlumnosCupMax.setValue('');
	editsInscCupMin.setValue('');
	editsInscAluTotInscritos.setValue('');
	editsInscMateria.setValue('');
	editsInscBloque.setValue('');
	editsInscAula.setValue('');
	editsInscPosicion.setValue('');
  },
    
  //Muestra las imagenes del buffer en la tabla
  show : function()
  {
  	for (var c=0; c < tablesInscAlumnos.rows[0].cells.length-1; c++) 
	{
	  for (var f=0; f < tablesInscAlumnos.rows.length-1; f++) 
	  {	
	  	//Se remueve la imagen actual
  		tablesInscAlumnos.removeObjInCell(f+1,c+1,this.data[c][f].img);
		tablesInscAlumnos.setHAlignCell('middle',f+1,c+1);
		//se actualiza la data de la celda con la data del buffer
		this.data[c][f].img = this.imgBuffer[c][f];
		//se aniade la nueva imagen a la tabla
		tablesInscAlumnos.addObjToCell(f+1,c+1,this.data[c][f].img);
		this.data[c][f].img.imgName = this.imgBuffer[c][f].imgName;
  	  }
  	}
  }
};
