var dialogsRepoLisRepGraSeccion = new Object();
var powerComboBoxRepoLisRepGraSecOrganizacion = new Object();
var powerComboBoxRepoLisRepGraSecSuborganizacion = new Object();
var powerComboBoxRepoLisRepGraSecCarrera = new Object();
var powerComboBoxRepoLisRepGraSecPosicion = new Object();
var powerComboBoxRepoLisRepGraSecSeccion = new Object();
var powerComboBoxRepoLisRepGraSecPeriodo = new Object();
var imgButtonsRepoLisRepGraSecReporte = new Object();
var imgButtonsRepoLisRepGraSecReporte2 = new Object();
var imgButtonsRepoLisRepGraSecReporte3 = new Object();
var imgButtonsRepoLisRepGraSecSalir = new Object();
var mw_RepoLisRepGraSeccion = new Object();//minWindow
var rl = new Object();

var RepoLisRepGraSeccion = {
    windowName: 'RepoLisRepGraSeccion',
    isCreate: false,
    
    show : function(){  
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
			this.limpiar('lmp');			
		dialogsRepoLisRepGraSeccion.show();
	},
	
	hide : function(){
		dialogsRepoLisRepGraSeccion.hide();
	},
	
    createMWs: function(){
        mwRepoLisRepGraSeccion = desktop.addMinWindow('L. Repres.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoLisRepGraSeccion.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRepoLisRepGraSeccion_Init : function(){
        dialogsRepoLisRepGraSeccion.setMinimizeXY(0,0);
        dialogsRepoLisRepGraSeccion.setCenterScreen();
        dialogsRepoLisRepGraSeccion.addSpace(0,0,20);
        dialogsRepoLisRepGraSeccion.addLn(1,1,1);
		dialogsRepoLisRepGraSeccion.setHeightCell(1,1,10);
        dialogsRepoLisRepGraSeccion.addObjToDialog(powerComboBoxRepoLisRepGraSecOrganizacion,2,1,24);
        dialogsRepoLisRepGraSeccion.addObjToDialog(powerComboBoxRepoLisRepGraSecSuborganizacion,2,1,24);
        dialogsRepoLisRepGraSeccion.addObjToDialog(powerComboBoxRepoLisRepGraSecCarrera,2,1,24);
        dialogsRepoLisRepGraSeccion.adjAllMarginObj(2,1,5);
        dialogsRepoLisRepGraSeccion.addObjToDialog(powerComboBoxRepoLisRepGraSecPeriodo,3,1,24);
        dialogsRepoLisRepGraSeccion.addObjToDialog(powerComboBoxRepoLisRepGraSecPosicion,3,1,24);
        dialogsRepoLisRepGraSeccion.addObjToDialog(powerComboBoxRepoLisRepGraSecSeccion,3,1,24);
        dialogsRepoLisRepGraSeccion.adjAllMarginObj(3,1,5);   
        dialogsRepoLisRepGraSeccion.addLn(5,1,1);
		dialogsRepoLisRepGraSeccion.setHeightCell(5,1,9);
        dialogsRepoLisRepGraSeccion.addObjToDialog(imgButtonsRepoLisRepGraSecReporte,6,1);
		dialogsRepoLisRepGraSeccion.addObjToDialog(imgButtonsRepoLisRepGraSecReporte2,6,1);
        dialogsRepoLisRepGraSeccion.addObjToDialog(imgButtonsRepoLisRepGraSecReporte3,6,1);
        dialogsRepoLisRepGraSeccion.addObjToDialog(imgButtonsRepoLisRepGraSecSalir,6,1);
		imgButtonsRepoLisRepGraSecReporte.setDimension(140,22);
    	imgButtonsRepoLisRepGraSecReporte2.setDimension(140,22);
    	imgButtonsRepoLisRepGraSecReporte3.setDimension(140,22);        
    	imgButtonsRepoLisRepGraSecSalir.setDimension(140,22);
        dialogsRepoLisRepGraSeccion.adjAllMarginObj(6,1,30);
        dialogsRepoLisRepGraSeccion.leftMarginObj(6,1,0,45);  
    },

    create : function(){
    	dialogsRepoLisRepGraSeccion = dialogs.create('dialogsRepoLisRepGraSeccion',0,0,796,102,'LISTADO DE REPRESENTANTES');
    	dialogsRepoLisRepGraSeccion.setAdjY(70);
    	powerComboBoxRepoLisRepGraSecOrganizacion = powerComboBox.create('powerComboBoxRepoLisRepGraSecOrganizacion','powerComboBoxRepoLisRepGraSecOrganizacion','Organización (+):',1,103);
    	powerComboBoxRepoLisRepGraSecOrganizacion.enableReadOnlyEditor();
    	powerComboBoxRepoLisRepGraSecOrganizacion.addEmptyOption();
    	powerComboBoxRepoLisRepGraSecOrganizacion.setValidEmpty();
    	powerComboBoxRepoLisRepGraSecSuborganizacion = powerComboBox.create('powerComboBoxRepoLisRepGraSecSuborganizacion','powerComboBoxRepoLisRepGraSecSuborganizacion','Suborganización (^):',1,123);
    	powerComboBoxRepoLisRepGraSecSuborganizacion.enableReadOnlyEditor();
    	powerComboBoxRepoLisRepGraSecSuborganizacion.addEmptyOption();
    	powerComboBoxRepoLisRepGraSecSuborganizacion.setValidEmpty();
    	powerComboBoxRepoLisRepGraSecCarrera = powerComboBox.create('powerComboBoxRepoLisRepGraSecCarrera','powerComboBoxRepoLisRepGraSecCarrera','Carrera (^):',1,71);
    	powerComboBoxRepoLisRepGraSecCarrera.enableReadOnlyEditor();
    	powerComboBoxRepoLisRepGraSecCarrera.addEmptyOption();
    	powerComboBoxRepoLisRepGraSecCarrera.setValidEmpty();
    	powerComboBoxRepoLisRepGraSecCarrera.setFieldFind(true);
    	powerComboBoxRepoLisRepGraSecPeriodo = powerComboBox.create('powerComboBoxRepoLisRepGraSecPeriodo','powerComboBoxRepoLisRepGraSecPeriodo','Periodo(+):',1,103);
    	powerComboBoxRepoLisRepGraSecPeriodo.enableReadOnlyEditor();
    	powerComboBoxRepoLisRepGraSecPeriodo.addEmptyOption();
    	powerComboBoxRepoLisRepGraSecPeriodo.setValidEmpty();
    	powerComboBoxRepoLisRepGraSecPosicion = powerComboBox.create('powerComboBoxRepoLisRepGraSecPosicion','powerComboBoxRepoLisRepGraSecPosicion','Posición(+):',1,123);
    	powerComboBoxRepoLisRepGraSecPosicion.enableReadOnlyEditor();
    	powerComboBoxRepoLisRepGraSecPosicion.addEmptyOption();
    	powerComboBoxRepoLisRepGraSecPosicion.setValidEmpty();
    	powerComboBoxRepoLisRepGraSecPosicion.setFieldFind(true);
    	powerComboBoxRepoLisRepGraSecSeccion = powerComboBox.create('powerComboBoxRepoLisRepGraSecSeccion','powerComboBoxRepoLisRepGraSecSeccion','Sección(+):',1,71);
    	powerComboBoxRepoLisRepGraSecSeccion.enableReadOnlyEditor();
    	powerComboBoxRepoLisRepGraSecSeccion.addEmptyOption();
    	powerComboBoxRepoLisRepGraSecSeccion.setValidEmpty();
    	powerComboBoxRepoLisRepGraSecSeccion.setDataType("string");
    	powerComboBoxRepoLisRepGraSecSeccion.setFieldFind(true);
		imgButtonsRepoLisRepGraSecReporte = imgButtons.create('imgButtonsRepoLisRepGraSecReporte','Reporte','print.png');
		imgButtonsRepoLisRepGraSecReporte2 = imgButtons.create('imgButtonsRepoLisRepGraSecReporte2','Reporte Excel','print.png');
        imgButtonsRepoLisRepGraSecReporte3 = imgButtons.create('imgButtonsRepoLisRepGraSecReporte3','Libro Control Mes','print.png');        
    	imgButtonsRepoLisRepGraSecSalir = imgButtons.create('imgButtonsRepoLisRepGraSecSalir','Salir','salir.png');
  	},

  	init : function(){
  		this.create();
  		this.setEvents();
  		this.dialogsRepoLisRepGraSeccion_Init();
  		this.createMWs();
  	},
  
  	limpiar : function(tipo) {
  		powerComboBoxRepoLisRepGraSecOrganizacion.setSelectedIndex(0);
  		Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecSuborganizacion);
  		Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecCarrera);
  		Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecPeriodo);
  		dialogsRepoLisRepGraSeccion.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoLisRepGraSeccion, powerComboBoxRepoLisRepGraSecOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoLisRepGraSeccion, powerComboBoxRepoLisRepGraSecOrganizacion, powerComboBoxRepoLisRepGraSecSuborganizacion, powerComboBoxRepoLisRepGraSecCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function(){
		imgButtonsRepoLisRepGraSecReporte.onClick(this.windowName + ".coreUpdate(0)");
		imgButtonsRepoLisRepGraSecReporte2.onClick(this.windowName + ".coreUpdate(2)");
        imgButtonsRepoLisRepGraSecReporte3.onClick(this.windowName + ".coreUpdate(3)");
        
        
        
        imgButtonsRepoLisRepGraSecSalir.onClick('dialogsRepoLisRepGraSeccion.close()');
		powerComboBoxRepoLisRepGraSecOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxRepoLisRepGraSecSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		powerComboBoxRepoLisRepGraSecCarrera.onChange(this.windowName + ".resetElements('carr')");
		powerComboBoxRepoLisRepGraSecPeriodo.onChange(this.windowName + ".resetElements('per')");
		powerComboBoxRepoLisRepGraSecPosicion.onChange(this.windowName + ".resetElements('pos')");
    },
    
    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecSuborganizacion);
	  		Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecPosicion);
	    	if (powerComboBoxRepoLisRepGraSecOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoLisRepGraSeccion, powerComboBoxRepoLisRepGraSecSuborganizacion, 1, 2, powerComboBoxRepoLisRepGraSecOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecPosicion);
	    	if (powerComboBoxRepoLisRepGraSecSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoLisRepGraSeccion, powerComboBoxRepoLisRepGraSecCarrera, -1, 3, powerComboBoxRepoLisRepGraSecSuborganizacion);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecPosicion);
	    	if (powerComboBoxRepoLisRepGraSecCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoLisRepGraSeccion, powerComboBoxRepoLisRepGraSecPeriodo, 0, 1, powerComboBoxRepoLisRepGraSecCarrera.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
	    	if (powerComboBoxRepoLisRepGraSecCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsRepoLisRepGraSeccion, powerComboBoxRepoLisRepGraSecPosicion, 0, 1, powerComboBoxRepoLisRepGraSecCarrera.setModeReturnGetText(2));        		
    	} 
    	else if (element == 'pos') {
          Tool.getPowerComboData('MantObject', 'getMantProyAulaSeccion', dialogsRepoLisRepGraSeccion, powerComboBoxRepoLisRepGraSecSeccion, 0, 1, powerComboBoxRepoLisRepGraSecCarrera, powerComboBoxRepoLisRepGraSecPeriodo, powerComboBoxRepoLisRepGraSecPosicion);        		
    	}  
	},
	
	reporte : function() {
		var j = json('getListadoRepresentante').data;
		var yt=0;		
		function setRowTable(row, dataArr,height,alignArr){
		  var ps = rep.getPageSize();//tamanio de la pagina
		  if(ps - yt < 50){
		    rep.addPage();
		    yt = 127;	
		  }
		  var sizecols = [25,74,140,140,140,140,65,65];
		  rep.addAbsTable(1, yt, sizecols, 1, height, false);
		  var acu =0;
		  var pos = 0;
		  if(row > 0){
		    for(var i=0; i<4; i++){
		  	  var len = rep.measureText(dataArr[i]);
		  	  if(i>0)
		  	    acu += sizecols[i-1];
		  	  if(alignArr[i]=='center')
		  	    pos=acu+sizecols[i]/2-len/2-2;
		  	  if(alignArr[i]=='left')
		  	    pos=acu+2;		  	  
		  	  rep.addText(1+pos, yt + (height/2), dataArr[i] ,false);
		    };
		    if(dataArr[5].n.length==1){
		  	  rep.addText(1+pos+sizecols[3], yt + (height/2), dataArr[5].n[0] ,false);
		  	  rep.addText(1+pos+sizecols[3]+sizecols[4], yt + (height/2), dataArr[5].a[0] ,false);
		  	  rep.addText(1+pos+sizecols[3]+sizecols[4]+sizecols[5], yt + (height/2), dataArr[5].p[0] ,false);
		  	  rep.addText(1+pos+sizecols[3]+sizecols[4]+sizecols[5]+sizecols[6], yt + (height/2), dataArr[5].s[0] ,false);
		  	}
		  	else{
		  	  for(var tx=0; tx<dataArr[5].n.length; tx++){	
		  	    rep.addText(1+pos+sizecols[3], yt + 10*tx + 20 , dataArr[5].n[tx] ,false);
		  	    rep.addText(1+pos+sizecols[3]+sizecols[4], yt + 10*tx + 20, dataArr[5].a[tx] ,false);
		  	    rep.addText(1+pos+sizecols[3]+sizecols[4]+sizecols[5], yt + 10*tx + 20, dataArr[5].p[tx] ,false);
		  	    rep.addText(1+pos+sizecols[3]+sizecols[4]+sizecols[5]+sizecols[6], yt + 10*tx + 20, dataArr[5].s[tx] ,false);
		  	  }	
		  	}
		  }
		  else{
		  	for(var i=0; i<8; i++){
		  	  var len = rep.measureText(dataArr[i]);
		  	  if(i>0)
		  	    acu += sizecols[i-1];
		  	  if(alignArr[i]=='center')
		  	    pos=acu+sizecols[i]/2-len/2-4;
		  	  if(alignArr[i]=='left')
		  	    pos=acu+2;		  	  
		  	  rep.addText(1+pos, yt + (height/2), dataArr[i] ,false);
		  	}
		  }		  
		};
		
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
    	rep.setPositionIcon(750,44);
    	rep.setHeadImage(imgEduca.banner,false);
    	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'courier','bold');
        rep.addBar(0,0,1128,78,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 20, 'ORGANIZACION:        '+powerComboBoxRepoLisRepGraSecOrganizacion.getOption(),false);
		rep.addText(20, 38, 'SUBORGANIZACION: '+powerComboBoxRepoLisRepGraSecSuborganizacion.getOption(),false);
		rep.addText(20, 56, 'CARRERA:                  '+powerComboBoxRepoLisRepGraSecCarrera.getOption(),false);
		rep.addText(530, 20, 'POSICION:  '+powerComboBoxRepoLisRepGraSecPosicion.getOption(),false);
		rep.addText(530, 38, 'SECCIÓN:    '+powerComboBoxRepoLisRepGraSecSeccion.getOption(),false);
		rep.addText(530, 56, 'PERIODO:   '+powerComboBoxRepoLisRepGraSecPeriodo.getOption(),false);
		rep.addBar(0,83,1128,116,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'courier','bold');
		rep.addText(300, 108, 'LISTADO DE REPRESENTANTES',false);
		//************************ TABLE ***************************
		rep.addText(20, 125, '',false);
		yt = rep.getNewY();
		var align = ['center','center','center','center','center','center','center','center'];
		var tit = ['No.', 'C.I.', 'Apellido Rep.', 'Nombre Rep.', 'Nombre Alumno', 'Apellido Alumno', 'Posición', 'Sección'];
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),8,'courier','bold');
		setRowTable(0,tit,20,align);
		var ci = '';
		
		var container =[];
		for(var row=0; row<j[0].length; row++){			  
		  if(j[0][row]!=ci){
		  	var aux = new Array();
		    aux[0]=container.length+1;//nro.
		    aux[1]=j[0][row];	//cedula
		    aux[2]=j[1][row];	//ape rep
		    aux[3]=j[2][row];	//nom rep 
		    aux[4]=20;			//height
		    aux[5]=new Object();
		    aux[5].n=new Array();
		    aux[5].a=new Array();
		    aux[5].p=new Array();
		    aux[5].s=new Array();
		    aux[5].n[0]=j[3][row];
		    aux[5].a[0]=j[4][row];
		    aux[5].p[0]=j[5][row];
		    aux[5].s[0]=j[6][row];
			container[container.length]=aux;
		  }
		  else{
		  	aux[5].n[aux[5].n.length]=j[3][row];//nombre alu
		  	aux[5].a[aux[5].a.length]=j[4][row];//ape alu
		  	aux[5].p[aux[5].p.length]=j[5][row];//pos alu
		  	aux[5].s[aux[5].s.length]=j[6][row];//secc alu
		    aux[4]+=20;
		  }
		  ci=j[0][row];
		}
		align = ['left','left','left','left','left','left','left','left'];
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),8,'helvetica','normal');
		yt+=20;
		for(cx=0; cx<container.length; cx++){
		  setRowTable(cx+1,container[cx],container[cx][4],align);
		  yt+=container[cx][4];			
		  //console.log(container[cx]);
		} 	
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		//Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	//Reporte.create();
    	//dialogsReporte.showModal();
		rep.previewHTML();
		//rep.renderToExcel();
	},
    
	reporte2 : function() {        
		var j = json('getListadoRepresentante').data;
		var ci = '';
		var container =[];
		for(var row=0; row<j[0].length; row++){			  
		  if(j[0][row]!=ci){
		  	var aux = new Array();
		    aux[0]=container.length+1;//nro.
		    aux[1]=j[0][row];	//cedula
		    aux[2]=j[1][row];	//ape rep
		    aux[3]=j[2][row];	//nom rep 
		    aux[4]=20;			//height
		    aux[5]=new Object();
		    aux[5].n=new Array();
		    aux[5].a=new Array();
		    aux[5].p=new Array();
		    aux[5].s=new Array();
		    aux[5].n[0]=j[3][row];
		    aux[5].a[0]=j[4][row];
		    aux[5].p[0]=j[5][row];
		    aux[5].s[0]=j[6][row];
			container[container.length]=aux;
		  }
		  else{
		  	aux[5].n[aux[5].n.length]=j[3][row];//nombre alu
		  	aux[5].a[aux[5].a.length]=j[4][row];//ape alu
		  	aux[5].p[aux[5].p.length]=j[5][row];//pos alu
		  	aux[5].s[aux[5].s.length]=j[6][row];//secc alu
		    aux[4]+=20;
		  }
		  ci=j[0][row];
		}
		excel = new Excel();  
	  	excel.setTableId('ExcelRepresentantes');
	  	excel.setSheetName('RepresentantesNewSheet');	
		excel.setTitle('Listado de Representantes');
		excel.setAlignColmn(['center','left','left','left','left','left','center','center']);  
		excel.setArrayTitle(['No.','C.I.','Apellido Rep.','Nombre Rep.','Nombre Alumno','Apellido Alumno', 'Posicion','Seccion']);
		excel.setSizeCols([50,150,250,250,250,250,100,100]);
		var stData = [[],[],[],[],[],[],[],[]]; 
		for(cx=0; cx<container.length; cx++){
			stData[0][cx]=container[cx][0];//item
            stData[1][cx]=container[cx][1];//ci
			stData[2][cx]=container[cx][2];//Ape Rep.
			stData[3][cx]=container[cx][3];//Nombre Rep
			stData[4][cx]='';
			stData[5][cx]='';
			stData[6][cx]='';
			stData[7][cx]='';
			for(var z=0; z<container[cx][5].n.length; z++){				
				stData[4][cx]+=container[cx][5].n[z]+' <br> '; 
				stData[5][cx]+=container[cx][5].a[z]+' <br> ';				
				stData[6][cx]+=container[cx][5].p[z]+' <br> ';
            	stData[7][cx]+=container[cx][5].s[z]+' <br> ';
			}			
		} 
		excel.addDataStruct(stData);
        excel.render();		
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
	},   
    
    reporte3 : function() {       
		var j = json('getListadoRepresentante').data;
		var ci = '';
		var container =[];
		for(var row=0; row<j[0].length; row++){			  
		  if(j[0][row]!=ci){
		  	var aux = new Array();
		    aux[0]=container.length+1;//nro.
		    aux[1]=j[0][row];	//cedula
		    aux[2]=j[1][row];	//ape rep
		    aux[3]=j[2][row];	//nom rep 
		    aux[4]=20;			//height
		    aux[5]=new Object();
		    aux[5].n=new Array();
		    aux[5].a=new Array();
		    aux[5].p=new Array();
		    aux[5].s=new Array();
		    aux[5].n[0]=j[3][row];
		    aux[5].a[0]=j[4][row];
		    aux[5].p[0]=j[5][row];
		    aux[5].s[0]=j[6][row];
			container[container.length]=aux;
		  }
		  else{
		  	aux[5].n[aux[5].n.length]=j[3][row];//nombre alu
		  	aux[5].a[aux[5].a.length]=j[4][row];//ape alu
		  	aux[5].p[aux[5].p.length]=j[5][row];//pos alu
		  	aux[5].s[aux[5].s.length]=j[6][row];//secc alu
		    aux[4]+=20;
		  }
		  ci=j[0][row];
		}
		excel = new Excel();  
	  	excel.setTableId('ExcelRepresentantes');
	  	excel.setSheetName('RepresentantesNewSheet');	
		excel.setTitle('LIBRO DE CONTROL MENSUAL');
		excel.setAlignColmn(['center','left','left','left','center',,'center','center','center','center',,'center','center','center','center','center','center','center',,'center']);  
		excel.setArrayTitle(['No.','Apellido Alumno','Nombre Alumno', 'Posicion','Seccion','Septiembre','Octubre','Noviembre','Diciembre','Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto']);
		excel.setSizeCols([50,250,250,100,100,80,80,80,80,80,80,80,80,80,80,80,80]);
		
        var stData = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]; 
		for(cx=0; cx<container.length; cx++){
			stData[0][cx]=container[cx][0];//item
            stData[1][cx]='';//container[cx][1];//ci
			stData[2][cx]='';//container[cx][2];//Ape Rep.
			stData[3][cx]='';//container[cx][3];//Nombre Rep
			stData[4][cx]='';
			stData[5][cx]='';
			stData[6][cx]='';
			stData[7][cx]='';
            stData[8][cx]='';
            stData[9][cx]='';
            stData[10][cx]='';
            stData[11][cx]='';
            stData[12][cx]='';
            stData[13][cx]='';
            stData[14][cx]='';
            stData[15][cx]='';
            stData[16][cx]='';
			for(var z=0; z<container[cx][5].n.length; z++){				
				stData[1][cx]+=container[cx][5].a[z]+' <br> '; 
				stData[2][cx]+=container[cx][5].n[z]+' <br> ';				
				stData[3][cx]+=container[cx][5].p[z]+' <br> ';
            	stData[4][cx]+=container[cx][5].s[z]+' <br> ';
			}			
		} 
		excel.addDataStruct(stData);
        excel.render();		
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
	},    

	coreUpdate: function(val) {
        var rlx = xmlStructs.createRecordList("rlx");
		if (powerComboBoxRepoLisRepGraSecOrganizacion.valid(dialogsRepoLisRepGraSeccion))
			if (powerComboBoxRepoLisRepGraSecSuborganizacion.valid(dialogsRepoLisRepGraSeccion))
				if (powerComboBoxRepoLisRepGraSecPeriodo.valid(dialogsRepoLisRepGraSeccion)) {
					rlx.add('reg', powerComboBoxRepoLisRepGraSecPeriodo);
					rlx.add('reg', powerComboBoxRepoLisRepGraSecOrganizacion);
					rlx.add('reg', powerComboBoxRepoLisRepGraSecCarrera);
					rlx.add('reg', powerComboBoxRepoLisRepGraSecCarrera);
					rlx.add('reg', powerComboBoxRepoLisRepGraSecPosicion);
					rlx.add('reg', powerComboBoxRepoLisRepGraSecPosicion);
					rlx.add('reg', powerComboBoxRepoLisRepGraSecSeccion);
					rlx.add('reg', powerComboBoxRepoLisRepGraSecSeccion);
                    if(val===3) {            
						rlx.addStr('reg', 'libro');
                        Tool.cnnSrv('ReportObject','getListadoRepresentante', this.windowName + '.reporte3()', rlx);
					}
                    else{
						rlx.addStr('reg', 'rep');
                        if(val===2)                    
                            Tool.cnnSrv('ReportObject','getListadoRepresentante', this.windowName + '.reporte2()', rlx);						
                        else
                            Tool.cnnSrv('ReportObject','getListadoRepresentante', this.windowName + '.reporte()', rlx);
                    }
				}
    }
}
