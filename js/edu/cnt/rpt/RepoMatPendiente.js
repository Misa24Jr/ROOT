var dialogsRepoMatPendiente = new Object();
var powerComboBoxRepoMatPendienteOrganizacion = new Object();
var powerComboBoxRepoMatPendienteSuborganizacion = new Object();
var powerComboBoxRepoMatPendienteCarrera = new Object();
var powerComboBoxRepoMatPendientePosicion = new Object();
var imgButtonsRepoMatPendienteReporte = new Object();
var imgButtonsRepoMatPendienteSalir = new Object();
var mw_RepoMatPendiente = new Object();//minWindow
var rl = new Object();

var RepoMatPendiente = {
    windowName: 'RepoMatPendiente',
    isCreate: false,
    
    show : function(){  
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
			this.limpiar('lmp');			
		dialogsRepoMatPendiente.show();
	},
	
	hide : function(){
		dialogsRepoMatPendiente.hide();
	},
	
    createMWs: function(){
        mwRepoMatPendiente = desktop.addMinWindow('M.Pendiente', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoMatPendiente.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRepoMatPendiente_Init : function(){
        dialogsRepoMatPendiente.setMinimizeXY(0,0);
        dialogsRepoMatPendiente.setCenterScreen();
        dialogsRepoMatPendiente.addSpace(0,0,20);
        dialogsRepoMatPendiente.addLn(1,1,1);
		dialogsRepoMatPendiente.setHeightCell(1,1,10);
        dialogsRepoMatPendiente.addObjToDialog(powerComboBoxRepoMatPendienteOrganizacion,2,1,24);
        dialogsRepoMatPendiente.addObjToDialog(powerComboBoxRepoMatPendienteSuborganizacion,2,1,24);
        dialogsRepoMatPendiente.addObjToDialog(powerComboBoxRepoMatPendienteCarrera,2,1,24);
        dialogsRepoMatPendiente.adjAllMarginObj(2,1,5);
        dialogsRepoMatPendiente.addObjToDialog(powerComboBoxRepoMatPendientePeriodo,3,1,24);
        dialogsRepoMatPendiente.adjAllMarginObj(3,1,5);   
        dialogsRepoMatPendiente.addLn(5,1,1);
		dialogsRepoMatPendiente.setHeightCell(5,1,9);
        dialogsRepoMatPendiente.addObjToDialog(imgButtonsRepoMatPendienteReporte,6,1);
    	imgButtonsRepoMatPendienteReporte.setDimension(90,22);
        dialogsRepoMatPendiente.addObjToDialog(imgButtonsRepoMatPendienteSalir,6,1);
    	imgButtonsRepoMatPendienteSalir.setDimension(90,22);
        dialogsRepoMatPendiente.adjAllMarginObj(6,1,30);
        dialogsRepoMatPendiente.leftMarginObj(6,1,0,230);  
    },

    create : function(){
    	dialogsRepoMatPendiente = dialogs.create('dialogsRepoMatPendiente',0,0,718,102,'MATERIA PENDIENTE');
    	dialogsRepoMatPendiente.setAdjY(80);
    	powerComboBoxRepoMatPendienteOrganizacion = powerComboBox.create('powerComboBoxRepoMatPendienteOrganizacion','powerComboBoxRepoMatPendienteOrganizacion','Organ. (+):',1,68);
    	powerComboBoxRepoMatPendienteOrganizacion.enableReadOnlyEditor();
    	powerComboBoxRepoMatPendienteOrganizacion.addEmptyOption();
    	powerComboBoxRepoMatPendienteOrganizacion.setValidEmpty();
    	powerComboBoxRepoMatPendienteSuborganizacion = powerComboBox.create('powerComboBoxRepoMatPendienteSuborganizacion','powerComboBoxRepoMatPendienteSuborganizacion','Suborg. (^):',1,80);
    	powerComboBoxRepoMatPendienteSuborganizacion.enableReadOnlyEditor();
    	powerComboBoxRepoMatPendienteSuborganizacion.addEmptyOption();
    	powerComboBoxRepoMatPendienteSuborganizacion.setValidEmpty();
    	powerComboBoxRepoMatPendienteCarrera = powerComboBox.create('powerComboBoxRepoMatPendienteCarrera','powerComboBoxRepoMatPendienteCarrera','Carrera (^):',1,71);
    	powerComboBoxRepoMatPendienteCarrera.enableReadOnlyEditor();
    	powerComboBoxRepoMatPendienteCarrera.addEmptyOption();
    	powerComboBoxRepoMatPendienteCarrera.setValidEmpty();
    	powerComboBoxRepoMatPendienteCarrera.setFieldFind(true);
    	powerComboBoxRepoMatPendientePeriodo = powerComboBox.create('powerComboBoxRepoMatPendientePeriodo','powerComboBoxRepoMatPendientePeriodo','Periodo(+):',1,68);
    	powerComboBoxRepoMatPendientePeriodo.enableReadOnlyEditor();
    	powerComboBoxRepoMatPendientePeriodo.addEmptyOption();
    	powerComboBoxRepoMatPendientePeriodo.setValidEmpty();
    	imgButtonsRepoMatPendienteReporte = imgButtons.create('imgButtonsRepoMatPendienteReporte','Reporte','print.png');
    	imgButtonsRepoMatPendienteSalir = imgButtons.create('imgButtonsRepoMatPendienteSalir','Salir','salir.png');
  	},

  	init : function(){
  		this.create();
  		this.setEvents();
  		this.dialogsRepoMatPendiente_Init();
  		this.createMWs();
  	},
  
  	limpiar : function(tipo) {
  		powerComboBoxRepoMatPendienteOrganizacion.setSelectedIndex(0);
  		Tool.rstPwrCmb(powerComboBoxRepoMatPendienteSuborganizacion);
  		Tool.rstPwrCmb(powerComboBoxRepoMatPendienteCarrera);
  		Tool.rstPwrCmb(powerComboBoxRepoMatPendientePeriodo);
  		dialogsRepoMatPendiente.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoMatPendiente, powerComboBoxRepoMatPendienteOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoMatPendiente, powerComboBoxRepoMatPendienteOrganizacion, powerComboBoxRepoMatPendienteSuborganizacion, powerComboBoxRepoMatPendienteCarrera, this.windowName + ".resetElements('carr')");
	},
    
	setEvents: function(){
    	//imgButtonsRepoMatPendienteReporte.onClick(this.windowName + ".coreUpdate()");
        imgButtonsRepoMatPendienteSalir.onClick('dialogsRepoMatPendiente.close()');
		
		imgButtonsRepoMatPendienteReporte.onClick(this.windowName + ".reporte()");
		
		powerComboBoxRepoMatPendienteOrganizacion.onChange(this.windowName + ".resetElements('org')");
		powerComboBoxRepoMatPendienteSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		powerComboBoxRepoMatPendienteCarrera.onChange(this.windowName + ".resetElements('carr')");
		powerComboBoxRepoMatPendientePeriodo.onChange(this.windowName + ".resetElements('per')");
    },
    
    resetElements : function(element) {
		if (element == 'org') {
			Tool.rstPwrCmb(powerComboBoxRepoMatPendienteSuborganizacion);
	  		Tool.rstPwrCmb(powerComboBoxRepoMatPendienteCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoMatPendientePeriodo);
	    	if (powerComboBoxRepoMatPendienteOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoMatPendiente, powerComboBoxRepoMatPendienteSuborganizacion, 1, 2, powerComboBoxRepoMatPendienteOrganizacion);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(powerComboBoxRepoMatPendienteCarrera);
	  		Tool.rstPwrCmb(powerComboBoxRepoMatPendientePeriodo);
	    	if (powerComboBoxRepoMatPendienteSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoMatPendiente, powerComboBoxRepoMatPendienteCarrera, -1, 3, powerComboBoxRepoMatPendienteSuborganizacion);
		}
		else if (element == 'carr') {
	  		Tool.rstPwrCmb(powerComboBoxRepoMatPendientePeriodo);
	    	if (powerComboBoxRepoMatPendienteCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoMatPendiente, powerComboBoxRepoMatPendientePeriodo, 0, 1, powerComboBoxRepoMatPendienteCarrera.setModeReturnGetText(5));
		}
	},
	
	reporte : function() {
		/*
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
		*/
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
    	rep.setPositionIcon(750,44);
    	//rep.setHeadImage(imgEduca.banner,false);
    	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'courier','bold');
        rep.addBar(0,0,1128,78,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 23, 'ORGANIZACION:    '+powerComboBoxRepoMatPendienteOrganizacion.getOption(),false);
		rep.addText(20, 43, 'SUBORGANIZACION: '+powerComboBoxRepoMatPendienteSuborganizacion.getOption(),false);
		rep.addText(20, 63, 'CARRERA:         '+powerComboBoxRepoMatPendienteCarrera.getOption(),false);
		rep.addText(530, 63, 'PERIODO: '+powerComboBoxRepoMatPendientePeriodo.getOption(),false);
		rep.addBar(0,83,1128,116,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'courier','bold');
		rep.addText(300, 106, 'MATERIA PENDIENTE',false);
		
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 9);
		rep.addTable('TablaRepoMatPendiente',['Nº','C.i.','Estudiante','Mención','Posición','Materia','Profesor Evaluador','I M','II M','III M','IV M','DEF.'],398,120);
		rep.setTotalRowTable(43);
		rep.setHeightRow(20);
        rep.setSizeColumnArray([20,50,98,96,98,92,165,35,35,35,35,35]);
        rep.setAlignData(['center','left','left','center','left','left','left','center','center','center','center','center']); 
        //rep.addJsonData('TablaRepoMatPendiente','getCantAlumnoInscrito',[0,1,2,3]);
		
				
		
		/*
		//************************ TABLE ***************************
		rep.addText(20, 125, '',false);
		yt = rep.getNewY();
		var align = ['center','center','center','center','center','center','center','center'];
		var tit = ['No.', 'C.I.', 'Apellido Rep.', 'Nombre Rep.', 'Nombre Alumno', 'Apellido Alumno', 'Posición', 'Sección'];
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),8,'courier','bold');
		//setRowTable(0,tit,20,align);
		/*
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
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),7,'helvetica','normal');
		yt+=20;
		for(cx=0; cx<container.length; cx++){
		  setRowTable(cx+1,container[cx],container[cx][4],align);
		  yt+=container[cx][4];			
		} 	
		*/
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		//Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	//Reporte.create();
    	//dialogsReporte.showModal();
    	rep.previewHTML();
	},
	/*
	coreUpdate: function() {
		var rlx = xmlStructs.createRecordList("rlx");
        if (powerComboBoxRepoMatPendienteOrganizacion.valid(dialogsRepoMatPendiente))
			if (powerComboBoxRepoMatPendienteSuborganizacion.valid(dialogsRepoMatPendiente))
				if (powerComboBoxRepoMatPendientePeriodo.valid(dialogsRepoMatPendiente)) {
					rlx.add('reg', powerComboBoxRepoMatPendientePeriodo);
					rlx.add('reg', powerComboBoxRepoMatPendienteOrganizacion);
					rlx.add('reg', powerComboBoxRepoMatPendienteCarrera);
					rlx.add('reg', powerComboBoxRepoMatPendienteCarrera);
					rlx.add('reg', powerComboBoxRepoMatPendientePosicion);
					//Tool.cnnSrv('ReportObject','getListadoRepresentante', this.windowName + '.reporte()', rlx);
				}
				
    }
	*/
}
