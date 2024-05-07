var ProcDispProf =
{
	tObj : new Object(),
	dataCount : 0,
	maxRow : 40,
	pathImg : 'images/',
	imgProfDisable : 'transpIcon.png',
	imgProfEnable : 'profesorEnable.png',
	imgProfBusy : 'profesorDisable.png',
	fila : 0,
	col :0,
	data     : [[],[],[],[],[],[],[],[]],
	hr : Array(),
	ids : new Array,
	fnc : new Function(''),
	isInit : false,
	totalBusy : 0,
	
	GenData : 
    {
      idPeriodo : '',
      idPersona : ''
    },
	
	getRow : function()
	{
		return this.fila;
	},
	
	getCol : function()
	{
		return this.col;
	},
	
	init : function(tableObject, horario)
	{
		
		this.hr = horario;
		for(i=0; i<this.hr[0].length; i++)
		{
		  this.ids[this.hr[0][i]] = i;	
		}  
		if(!this.isInit) 
		  this.setTableObj(tableObject);		
		for (var j=0; j < this.tObj.rows[0].cells.length-1; j++) 
		{
		  for (var i=0; i < this.tObj.rows.length-1; i++) 
		  {
		  	this.data[j][i] = new Object();
		  	this.data[j][i].img = document.createElement('img');
		  	this.data[j][i].img.style.width ='24px';
		  	this.data[j][i].img.style.height ='14px';
		  	this.data[j][i].fila=i+1;
		  	this.data[j][i].columna=j+1;	
		  	this.data[j][i].sts=false;
		  	
		  	this.data[j][i].idHorario = '';	
	  		this.data[j][i].profBusy = '';
	  		this.data[j][i].carrera = '';
	  		this.data[j][i].posicion = '';
	  		this.data[j][i].materia = '';
	  		this.data[j][i].seccion = '';
			
			this.tObj.rows[i+1].cells[j+1].innerHTML='';
		  	this.setImg(this.imgProfDisable,i+1,j+1);
		  } 
		}
		this.setHorario(horario[1]);
		if(!this.isInit)
		{
		  this.setEventCells();	
		  this.setOnClick();
		}  
		this.isInit=true;
	},
	
	setDispCell : function(f,c){
		if(f <= ProcDispProf.hr[0].length ){
			if (ProcDispProf.data[c - 1][f - 1].sts){
				if (ProcDispProf.data[c - 1][f - 1].profBusy == '' || ProcDispProf.data[c - 1][f - 1].profBusy == null || ProcDispProf.data[c - 1][f - 1].profBusy == 'null') {
					ProcDispProf.data[c - 1][f - 1].sts = false;
					ProcDispProf.changeImg(ProcDispProf.imgProfDisable, f, c);
					ProcDispProf.dataCount--;
				}
			} 
			else{
				ProcDispProf.data[c - 1][f - 1].sts = true;
				ProcDispProf.changeImg(ProcDispProf.imgProfEnable, f, c);
				ProcDispProf.dataCount++;
			}
			ProcDispProf.fnc();
	   }	   
	},
	

	setOnClick : function(){	
		var i = 0;
		var j = 0;		
		for ( var i = 1; i < this.tObj.rows.length; i++) {
			for ( var j = 1; j < this.tObj.rows[i].cells.length; j++) {
				ProcDispProf.tObj.rows[i].cells[j].f = i;
				ProcDispProf.tObj.rows[i].cells[j].c = j;
				ProcDispProf.tObj.rows[i].cells[j].onclick = function(e) {
				  if(this.f <= ProcDispProf.hr[0].length ) {
					if (ProcDispProf.data[this.c - 1][this.f - 1].sts) {
						if (ProcDispProf.data[this.c - 1][this.f - 1].profBusy == '' || ProcDispProf.data[this.c - 1][this.f - 1].profBusy == null || ProcDispProf.data[this.c - 1][this.f - 1].profBusy == 'null') {
							ProcDispProf.data[this.c - 1][this.f - 1].sts = false;
							ProcDispProf.changeImg(ProcDispProf.imgProfDisable, this.f, this.c);
							ProcDispProf.dataCount--;
						}
					} 
					else {
						ProcDispProf.data[this.c - 1][this.f - 1].sts = true;
						ProcDispProf.changeImg(ProcDispProf.imgProfEnable, this.f, this.c);
						ProcDispProf.dataCount++;
					}
					ProcDispProf.fnc();
				  }
			    }
			}
		}
		
		this.tObj.rows[0].cells[0].onclick = function(e){
			for ( var i = 1; i < ProcDispProf.tObj.rows.length; i++) 
				for ( var j = 1; j < ProcDispProf.tObj.rows[i].cells.length; j++)
					ProcDispProf.setDispCell(i,j);				
		}
		
		for ( var j = 1; j < ProcDispProf.tObj.rows[0].cells.length; j++){
			this.tObj.rows[0].cells[j].j = j;
			this.tObj.rows[0].cells[j].onclick = function(e){
				for ( var i = 1; i < ProcDispProf.tObj.rows.length; i++){
					ProcDispProf.setDispCell(i,this.j);	
				}
								
			}
		}
		
		for ( var i = 1; i < ProcDispProf.tObj.rows.length; i++){
			this.tObj.rows[i].cells[0].i = i;
			this.tObj.rows[i].cells[0].onclick = function(e){
				for ( var j = 1; j < ProcDispProf.tObj.rows[0].cells.length; j++)
					ProcDispProf.setDispCell(this.i,j);				
			}	
		}
	},
	
	onClick : function(fnc) {
		ProcDispProf.fnc = new Function(fnc);
	},
	
	clearData : function()
    {
	  this.dataCount=0;	
      this.GenData.idPeriodo = '';
	  this.GenData.idPersona = '';	
      for (j=0; j<this.data.length-1; j++)	
	  {	
	  	for (i=0; i<this.data[0].length; i++)
	    {
	      if(this.data[j][i].sts)
	      {
	      	this.data[j][i].sts = false;
	  	  	this.data[j][i].idHorario = '';
	  	  	this.data[j][i].profBusy = '';
	  	  	this.data[j][i].carrera = '';
	  		this.data[j][i].posicion = '';
	  		this.data[j][i].materia = '';
	  		this.data[j][i].seccion = '';
	  	  	this.changeImg(this.imgProfDisable, i+1, j+1);
	      }	
	    }
	  }
    },
	
	clearHorario : function()
    {
      if(this.isInit)	
        for (var i=0; i < this.tObj.rows.length-1;i++)
	    { 
	  	  this.tObj.rows[i+1].cells[0].innerHTML='';
	    }
    },
    
	setData : function(dataSt)
	{	
	  this.GenData.idPersona = dataSt[0][0];
	  this.GenData.idPeriodo = dataSt[2][0];
	  var f=0;
	  this.dataCount=0;
	  for(f=0; f<dataSt[1].length; f++)
	  {	
	  	this.data[dataSt[3][f]-1][this.ids[dataSt[1][f]]].sts = true;
	  	this.data[dataSt[3][f]-1][this.ids[dataSt[1][f]]].idHorario = dataSt[1][f];	
	  	this.data[dataSt[3][f]-1][this.ids[dataSt[1][f]]].profBusy = dataSt[5][f];
	  	this.data[dataSt[3][f]-1][this.ids[dataSt[1][f]]].carrera = dataSt[8][f];
	  	this.data[dataSt[3][f]-1][this.ids[dataSt[1][f]]].posicion = dataSt[9][f];
	  	this.data[dataSt[3][f]-1][this.ids[dataSt[1][f]]].materia = dataSt[4][f];
	  	this.data[dataSt[3][f]-1][this.ids[dataSt[1][f]]].seccion = dataSt[10][f];	
	  	this.dataCount++;
	  }
	  this.setDisponibilidad();
	},
	
	getCount : function()
	{
	  return this.dataCount;
	},
	
	
	setEventCell : function(row, col)
	{
	  this.tObj.rows[row].cells[col].onmouseover = function(e)
	  {
	  	ProcDispProf.tObj.setBgColorCell(row,col,'#d0d0ff');
	  	ProcDispProf.fila = row;
	  	ProcDispProf.col = col;	
	  	ProcDispProf.tObj.style.cursor = 'pointer';
	  	if(ProcDispProf.data[col-1][row-1].carrera.length > 1)
	  	  dialogsDispProfesor.setMsg('  CARRERA: '+ProcDispProf.data[col-1][row-1].carrera.toUpperCase()+ '.   /   .'+
	  	  'POSICION: '+ProcDispProf.data[col-1][row-1].posicion.toUpperCase()+ '.   /   .'+
	  	  'SECCION: '+ProcDispProf.data[col-1][row-1].seccion.toUpperCase()+'.   /   .'+
	  	  'MATERIA: '+ProcDispProf.data[col-1][row-1].materia.toUpperCase()+'  ');
	  	else
	  	  dialogsDispProfesor.setMsg('');
	  }
	  this.tObj.rows[row].cells[col].onmouseout = function(e)
	  {
	    var ecolor = ProcDispProf.tObj.evenRowColor;
	  	var ocolor = ProcDispProf.tObj.oddRowColor;
	  	if(row % 2 == 0)
	  	  ProcDispProf.tObj.setBgColorCell(row,col,ocolor)
	  	else  	  	
	  	  ProcDispProf.tObj.setBgColorCell(row,col,ecolor)
	  	ProcDispProf.tObj.style.cursor = 'default';	  	
	  }	
	},
	
	setEventCells : function()
	{	
	  for(i=0; i<this.maxRow; i++)
	  {
	  	for(j=1; j<8; j++)
	  	{	
	  	  this.setEventCell(i+1,j);	
	  	}
	  }
	},
	
	setDisponibilidad : function() {
	    this.totalBusy=0;
		for (j = 0; j < this.data.length - 1; j++) {
			for (i = 0; i < this.data[0].length; i++) {
				if (this.data[j][i].sts) {
					if (this.data[j][i].profBusy == '' || this.data[j][i].profBusy == null || this.data[j][i].profBusy == 'null')
						this.changeImg(this.imgProfEnable, i + 1, j + 1);
					else {
					  this.totalBusy++;  
					  this.changeImg(this.imgProfBusy, i + 1, j + 1);
					}
				}
				else
				  this.changeImg(this.imgProfDisable, i + 1, j + 1);
			}
		}
	},
	
	countBusy : function()
	{
	  return this.totalBusy;    
	},
	
	isBlocked : function()
	{
	  var sts = false;	
	  for (j = 0; j < this.data.length - 1; j++) 
	  {
		for (i = 0; i < this.data[0].length; i++) 
		{
			if (this.data[j][i].sts)
			{
				if (this.data[j][i].profBusy == '' || this.data[j][i].profBusy == null || this.data[j][i].profBusy == 'null')
				{
				  sts = true;	
				}
			}	
		}
	  }
	  return sts;
	},
	
	setImg : function(img,row,col)
	{
	  this.data[col-1][row-1].img.src = this.pathImg+img;
	  this.tObj.setHAlignCell('middle',row,col);
	  this.tObj.addObjToCell(row,col,this.data[col-1][row-1].img);
	},
	
	changeImg : function(img, row, col)
	{	
	  this.tObj.removeObjInCell(row,col,this.data[col-1][row-1].img);
	  this.setImg(img,row,col);		  		  
	},
	
	setHorario : function(h)
	{	
	  for (var i=0; i < h.length;i++)
	  { 
	  	this.tObj.addTextToCell(i+1,0,h[i]);
	  }
	},
	
	setTableObj : function(tableObject)
	{
	  this.tObj = tableObject;	
	},
	
	getRecordList : function()
	{
	  var i=0;
	  var j=0;
	  var rlx = xmlStructs.createRecordList("rlx");
	  
	  for (j=0; j < this.data.length; j++) 
	  {	  	 
		 for (i=0; i< this.data[j].length; i++) 
		 {	
		   if(ProcDispProf.data[j][i].sts)
		   {
			 rlx.addInt('reg'+i+','+j, editsDispProCi.hideId);			//idPersona
			 rlx.addInt('reg'+i+','+j, this.hr[0][i]); 					//idHorario
			 rlx.addInt('reg'+i+','+j, pcbDispProPeriodo.getText());	//idPeriodo
			 rlx.addInt('reg'+i+','+j, j+1); 							//dia de la semana
			 rlx.addInt('reg'+i+','+j, pcbDispProTipoHorario.getText());//idTipoHorario
		   }
	  	 }
	  }
	  return rlx.getRecordList();
	},
	getXML : function() {
		var i = 0;
		var j = 1;
		var xd = xmlStructs.createXMLDoc('DispProf');
		var a = [ 'hr', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab', 'dom' ];
		xd.addTagArray(a);
		var tot = this.data[j].length;

		for (i = 0; i < tot; i++) // filas
		{
			xd.createNewReg();
			xd.addDataReg(i, a[0], this.hr[1][i]);
			for (j = 0; j < this.data.length - 1; j++) // columnas
			{
				if (ProcDispProf.data[j][i].sts) {
					if (ProcDispProf.data[j][i].profBusy == '' || ProcDispProf.data[j][i].profBusy == null  || ProcDispProf.data[j][i].profBusy == 'null') {
						xd.addDataReg(i, a[j + 1], '1');
					}
					else {
						xd.addDataReg(i, a[j + 1], '2');
					}
				}
				else {
					xd.addDataReg(i, a[j + 1], '0');
				}
			}
		}
		return xd.getXML();
	}
};
