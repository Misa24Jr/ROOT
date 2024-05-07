var dialogsRepoLisRepGraSecFamilia = new Object();
var powerComboBoxRepoLisRepGraSecFamOrganizacion = new Object();
var powerComboBoxRepoLisRepGraSecFamSuborganizacion = new Object();
var powerComboBoxRepoLisRepGraSecFamCarrera = new Object();
var powerComboBoxRepoLisRepGraSecFamPosicion = new Object();
var powerComboBoxRepoLisRepGraSecFamSeccion = new Object();
var powerComboBoxRepoLisRepGraSecFamPeriodo = new Object();
var imgButtonsRepoLisRepGraSecFamReporte = new Object();
var imgButtonsRepoLisRepGraSecFamSalir = new Object();
var mw_RepoLisRepGraSecFamilia = new Object();//minWindow
var rl = new Object();

var RepoLisRepGraSecFamilia = {
    windowName: 'RepoLisRepGraSecFamilia',
    isCreate: false,
    
    show : function(){  
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
			this.limpiar('lmp');			
		dialogsRepoLisRepGraSecFamilia.show();
	},
	
	hide : function(){
		dialogsRepoLisRepGraSecFamilia.hide();
	},
	
    createMWs: function(){
        mwRepoLisRepGraSecFamilia = desktop.addMinWindow('L. Repres.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoLisRepGraSecFamilia.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRepoLisRepGraSecFamilia_Init : function(){
        dialogsRepoLisRepGraSecFamilia.setMinimizeXY(0,0);
        dialogsRepoLisRepGraSecFamilia.setCenterScreen();
        dialogsRepoLisRepGraSecFamilia.addSpace(0,0,20);
        dialogsRepoLisRepGraSecFamilia.addLn(1,1,1);
		dialogsRepoLisRepGraSecFamilia.setHeightCell(1,1,10);
        dialogsRepoLisRepGraSecFamilia.addObjToDialog(powerComboBoxRepoLisRepGraSecFamOrganizacion,2,1,24);
        dialogsRepoLisRepGraSecFamilia.addObjToDialog(powerComboBoxRepoLisRepGraSecFamSuborganizacion,2,1,24);
        dialogsRepoLisRepGraSecFamilia.addObjToDialog(powerComboBoxRepoLisRepGraSecFamCarrera,2,1,24);
        dialogsRepoLisRepGraSecFamilia.adjAllMarginObj(2,1,5);
        dialogsRepoLisRepGraSecFamilia.addObjToDialog(powerComboBoxRepoLisRepGraSecFamPeriodo,3,1,24);
        dialogsRepoLisRepGraSecFamilia.addObjToDialog(powerComboBoxRepoLisRepGraSecFamPosicion,3,1,24);
        dialogsRepoLisRepGraSecFamilia.addObjToDialog(powerComboBoxRepoLisRepGraSecFamSeccion,3,1,24);
        dialogsRepoLisRepGraSecFamilia.adjAllMarginObj(3,1,5);   
        dialogsRepoLisRepGraSecFamilia.addLn(5,1,1);
		dialogsRepoLisRepGraSecFamilia.setHeightCell(5,1,9);
        dialogsRepoLisRepGraSecFamilia.addObjToDialog(imgButtonsRepoLisRepGraSecFamReporte,6,1);
    	imgButtonsRepoLisRepGraSecFamReporte.setDimension(90,22);
        dialogsRepoLisRepGraSecFamilia.addObjToDialog(imgButtonsRepoLisRepGraSecFamSalir,6,1);
    	imgButtonsRepoLisRepGraSecFamSalir.setDimension(90,22);
        dialogsRepoLisRepGraSecFamilia.adjAllMarginObj(6,1,30);
        dialogsRepoLisRepGraSecFamilia.leftMarginObj(6,1,0,282);  
    },

    create : function(){
    	dialogsRepoLisRepGraSecFamilia = dialogs.create('dialogsRepoLisRepGraSecFamilia',0,0,796,102,'LISTADO DE REPRESENTANTES POR FAMILIA');
    	dialogsRepoLisRepGraSecFamilia.setAdjY(70);
    	powerComboBoxRepoLisRepGraSecFamOrganizacion = powerComboBox.create('powerComboBoxRepoLisRepGraSecFamOrganizacion','powerComboBoxRepoLisRepGraSecFamOrganizacion','Organización (+):',1,103);
    	powerComboBoxRepoLisRepGraSecFamOrganizacion.enableReadOnlyEditor();
    	powerComboBoxRepoLisRepGraSecFamOrganizacion.addEmptyOption();
    	powerComboBoxRepoLisRepGraSecFamOrganizacion.setValidEmpty();
    	powerComboBoxRepoLisRepGraSecFamSuborganizacion = powerComboBox.create('powerComboBoxRepoLisRepGraSecFamSuborganizacion','powerComboBoxRepoLisRepGraSecFamSuborganizacion','Suborganización (^):',1,123);
    	powerComboBoxRepoLisRepGraSecFamSuborganizacion.enableReadOnlyEditor();
    	powerComboBoxRepoLisRepGraSecFamSuborganizacion.addEmptyOption();
    	powerComboBoxRepoLisRepGraSecFamSuborganizacion.setValidEmpty();
    	powerComboBoxRepoLisRepGraSecFamCarrera = powerComboBox.create('powerComboBoxRepoLisRepGraSecFamCarrera','powerComboBoxRepoLisRepGraSecFamCarrera','Carrera (^):',1,71);
    	powerComboBoxRepoLisRepGraSecFamCarrera.enableReadOnlyEditor();
    	powerComboBoxRepoLisRepGraSecFamCarrera.addEmptyOption();
    	powerComboBoxRepoLisRepGraSecFamCarrera.setValidEmpty();
    	powerComboBoxRepoLisRepGraSecFamCarrera.setFieldFind(true);
    	powerComboBoxRepoLisRepGraSecFamPeriodo = powerComboBox.create('powerComboBoxRepoLisRepGraSecFamPeriodo','powerComboBoxRepoLisRepGraSecFamPeriodo','Periodo(+):',1,103);
    	powerComboBoxRepoLisRepGraSecFamPeriodo.enableReadOnlyEditor();
    	powerComboBoxRepoLisRepGraSecFamPeriodo.addEmptyOption();
    	powerComboBoxRepoLisRepGraSecFamPeriodo.setValidEmpty();
    	powerComboBoxRepoLisRepGraSecFamPosicion = powerComboBox.create('powerComboBoxRepoLisRepGraSecFamPosicion','powerComboBoxRepoLisRepGraSecFamPosicion','Posición(+):',1,123);
    	powerComboBoxRepoLisRepGraSecFamPosicion.enableReadOnlyEditor();
    	powerComboBoxRepoLisRepGraSecFamPosicion.addEmptyOption();
    	powerComboBoxRepoLisRepGraSecFamPosicion.setValidEmpty();
    	powerComboBoxRepoLisRepGraSecFamPosicion.setFieldFind(true);
    	powerComboBoxRepoLisRepGraSecFamSeccion = powerComboBox.create('powerComboBoxRepoLisRepGraSecFamSeccion','powerComboBoxRepoLisRepGraSecFamSeccion','Sección(+):',1,71);
    	powerComboBoxRepoLisRepGraSecFamSeccion.enableReadOnlyEditor();
    	powerComboBoxRepoLisRepGraSecFamSeccion.addEmptyOption();
    	powerComboBoxRepoLisRepGraSecFamSeccion.setValidEmpty();
    	powerComboBoxRepoLisRepGraSecFamSeccion.setDataType("string");
    	powerComboBoxRepoLisRepGraSecFamSeccion.setFieldFind(true);
    	imgButtonsRepoLisRepGraSecFamReporte = imgButtons.create('imgButtonsRepoLisRepGraSecFamReporte','Reporte','print.png');
    	imgButtonsRepoLisRepGraSecFamSalir = imgButtons.create('imgButtonsRepoLisRepGraSecFamSalir','Salir','salir.png');
  	},

  	init : function(){
  		this.create();
  		this.setEvents();
  		this.dialogsRepoLisRepGraSecFamilia_Init();
  		this.createMWs();
  	},
  
  	limpiar : function(tipo) {
  		powerComboBoxRepoLisRepGraSecFamOrganizacion.setSelectedIndex(0);
  		Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecFamSuborganizacion);
  		Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecFamCarrera);
  		Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecFamPeriodo);
  		dialogsRepoLisRepGraSecFamilia.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoLisRepGraSecFamilia, powerComboBoxRepoLisRepGraSecFamOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoLisRepGraSecFamilia, powerComboBoxRepoLisRepGraSecFamOrganizacion, powerComboBoxRepoLisRepGraSecFamSuborganizacion, powerComboBoxRepoLisRepGraSecFamCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function(){
    	imgButtonsRepoLisRepGraSecFamReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsRepoLisRepGraSecFamSalir.onClick('dialogsRepoLisRepGraSecFamilia.close()');
		powerComboBoxRepoLisRepGraSecFamOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxRepoLisRepGraSecFamSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		powerComboBoxRepoLisRepGraSecFamCarrera.onChange(this.windowName + ".resetElements('carr')");
		powerComboBoxRepoLisRepGraSecFamPeriodo.onChange(this.windowName + ".resetElements('per')");
		powerComboBoxRepoLisRepGraSecFamPosicion.onChange(this.windowName + ".resetElements('pos')");
    },
    
    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecFamSuborganizacion);
	  		Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecFamCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecFamPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecFamPosicion);
	    	if (powerComboBoxRepoLisRepGraSecFamOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoLisRepGraSecFamilia, powerComboBoxRepoLisRepGraSecFamSuborganizacion, 1, 2, powerComboBoxRepoLisRepGraSecFamOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecFamCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecFamPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecFamPosicion);
	    	if (powerComboBoxRepoLisRepGraSecFamSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoLisRepGraSecFamilia, powerComboBoxRepoLisRepGraSecFamCarrera, -1, 3, powerComboBoxRepoLisRepGraSecFamSuborganizacion);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecFamPeriodo);
			Tool.rstPwrCmb(powerComboBoxRepoLisRepGraSecFamPosicion);
	    	if (powerComboBoxRepoLisRepGraSecFamCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoLisRepGraSecFamilia, powerComboBoxRepoLisRepGraSecFamPeriodo, 0, 1, powerComboBoxRepoLisRepGraSecFamCarrera.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
	    	if (powerComboBoxRepoLisRepGraSecFamCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsRepoLisRepGraSecFamilia, powerComboBoxRepoLisRepGraSecFamPosicion, 0, 1, powerComboBoxRepoLisRepGraSecFamCarrera.setModeReturnGetText(2));        		
    	} 
    	else if (element == 'pos') {
          Tool.getPowerComboData('MantObject', 'getMantProyAulaSeccion', dialogsRepoLisRepGraSecFamilia, powerComboBoxRepoLisRepGraSecFamSeccion, 0, 1, powerComboBoxRepoLisRepGraSecFamCarrera, powerComboBoxRepoLisRepGraSecFamPeriodo, powerComboBoxRepoLisRepGraSecFamPosicion);        		
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
		rep.addText(20, 20, 'ORGANIZACION:        '+powerComboBoxRepoLisRepGraSecFamOrganizacion.getOption(),false);
		rep.addText(20, 38, 'SUBORGANIZACION: '+powerComboBoxRepoLisRepGraSecFamSuborganizacion.getOption(),false);
		rep.addText(20, 56, 'CARRERA:                  '+powerComboBoxRepoLisRepGraSecFamCarrera.getOption(),false);
		rep.addText(530, 20, 'POSICION:  '+powerComboBoxRepoLisRepGraSecFamPosicion.getOption(),false);
		rep.addText(530, 38, 'SECCIÓN:    '+powerComboBoxRepoLisRepGraSecFamSeccion.getOption(),false);
		rep.addText(530, 56, 'PERIODO:   '+powerComboBoxRepoLisRepGraSecFamPeriodo.getOption(),false);
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
		    aux[1]=j[0][row];	//cedula rep
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
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),7,'helvetica','normal');
		yt+=20;
		for(cx=0; cx<container.length; cx++){
		  setRowTable(cx+1,container[cx],container[cx][4],align);
		  yt+=container[cx][4];			
		} 	
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		//Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	//Reporte.create();
    	//dialogsReporte.showModal();
    	rep.previewHTML();
		//rep.renderToExcel();
	},
	
	coreUpdate: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (powerComboBoxRepoLisRepGraSecFamOrganizacion.valid(dialogsRepoLisRepGraSecFamilia))
			if (powerComboBoxRepoLisRepGraSecFamSuborganizacion.valid(dialogsRepoLisRepGraSecFamilia))
				if (powerComboBoxRepoLisRepGraSecFamPeriodo.valid(dialogsRepoLisRepGraSecFamilia)) {
					rlx.add('reg', powerComboBoxRepoLisRepGraSecFamPeriodo);
					rlx.add('reg', powerComboBoxRepoLisRepGraSecFamOrganizacion);
					rlx.add('reg', powerComboBoxRepoLisRepGraSecFamCarrera);
					rlx.add('reg', powerComboBoxRepoLisRepGraSecFamCarrera);
					rlx.add('reg', powerComboBoxRepoLisRepGraSecFamPosicion);
					rlx.add('reg', powerComboBoxRepoLisRepGraSecFamPosicion);
					rlx.add('reg', powerComboBoxRepoLisRepGraSecFamSeccion);
					rlx.add('reg', powerComboBoxRepoLisRepGraSecFamSeccion);
					Tool.cnnSrv('ReportObject','getListadoRepresentante', this.windowName + '.reporte()', rlx);
				}
    }
}
