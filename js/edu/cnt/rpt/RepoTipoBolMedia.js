var dialogsRepoTipoBolMedia = new Object();
var powerComboBoxRepoTipoBolMedia = new Object();
var imgButtonsRepoTipoBolMedia = new Object();
var RepoTipoBolMedia = {
    windowName: 'RepoTipoBolMedia',
    isCreate: false,
	
    show: function(){
        if (!this.isCreate) {
            this.init();
        }
        if (dialogsRepoTipoBolMedia.isByClean()) 
            this.limpiar();
        dialogsRepoTipoBolMedia.showModal();
    },
    
    dialogsRepoTipoBolMedia_Init: function(){
        dialogsRepoTipoBolMedia.setMinimizeXY(0, 0);
        dialogsRepoTipoBolMedia.setEnableMinimize(false);
        dialogsRepoTipoBolMedia.setCenterScreen();    
        dialogsRepoTipoBolMedia.addSpace(1, 0, 20);
        dialogsRepoTipoBolMedia.addLn(1, 1, 1);
		dialogsRepoTipoBolMedia.setHeightCell(1,1,18);  
		var c1 = container.create("c1",'Datos Generales', 2);
		c1.setDimension(350,74);
		c1.setMarginLeftBarTitle(133);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#1e1e1e');
		c1.addObject(powerComboBoxRepoTipoBolMedia, 35,70);
		powerComboBoxRepoTipoBolMedia.setWidthCombo(168);
		powerComboBoxRepoTipoBolMedia.addOptionAndSimpleValue(null,'Boletín Estilo Carta','1');
        powerComboBoxRepoTipoBolMedia.addOptionAndSimpleValue(null,'Boletín Estilo Diptico','2');
        powerComboBoxRepoTipoBolMedia.addOptionAndSimpleValue(null,'Boletín-III-Construcción','3');
		powerComboBoxRepoTipoBolMedia.addOptionAndSimpleValue(null,'Boletín-IV-Construcción','4');
		powerComboBoxRepoTipoBolMedia.addOptionAndSimpleValue(null,'Boletín-V-Construcción','5');
		dialogsRepoTipoBolMedia.addObjToDialog(c1, 2, 1);
		dialogsRepoTipoBolMedia.addLn(3, 1, 1);
		dialogsRepoTipoBolMedia.setHeightCell(3,1,13);
        dialogsRepoTipoBolMedia.addObjToDialog(imgButtonsRepoTipoBolMedia, 4, 1);
        imgButtonsRepoTipoBolMedia.setDimension(90, 22);
        dialogsRepoTipoBolMedia.leftMarginObj(4, 1, 0, 131);
    },
    
    mensajesDlg : function()
    {
      var txt = powerComboBoxRepoTipoBolMedia.getText();
      switch(parseInt(txt,10))
      {
      	 case 1 :{RepoTipoBolMedia.reporte1(); break;}
      	 case 2 :{RepoTipoBolMedia.reporte2(); break;}
      	 case 3 :{alert('Aqui se llama al tipo Boletín 3'); break;}
      	 case 4 :{alert('Aqui se llama al tipo Boletín 4'); break;}
      	 case 5 :{alert('Aqui se llama al tipo Boletín 5'); break;}
      };
    },
    
    create: function(){
        dialogsRepoTipoBolMedia = dialogs.create('dialogsRepoTipoBolMedia', 0, 0, 392, 143, 'BOLETINES');
        dialogsRepoTipoBolMedia.setAdjY(40);
        powerComboBoxRepoTipoBolMedia = powerComboBox.create('powerComboBoxRepoTipoBolMedia','powerComboBoxRepoTipoBolMedia','Seleccione el Boletín:',1,130);
        powerComboBoxRepoTipoBolMedia.setValidEmpty();
        powerComboBoxRepoTipoBolMedia.enableReadOnlyEditor();
        powerComboBoxRepoTipoBolMedia.addEmptyOption();
        imgButtonsRepoTipoBolMedia = imgButtons.create('imgButtonsRepoTipoBolMedia', 'Salir', 'salir.png');
        this.isCreate=true;
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsRepoTipoBolMedia_Init();
    },
    
    showFile : function()
    {	
      window.open('help/'+powerComboBoxRepoTipoBolMedia.getText(),'_blank');
    },
    
    setEvents: function(){
        imgButtonsRepoTipoBolMedia.onClick("dialogsRepoTipoBolMedia.close();");
        powerComboBoxRepoTipoBolMedia.onChange(this.windowName + ".mensajesDlg()");
        
    },

	limpiar : function() {
  		dialogsRepoTipoBolMedia.setMsg("");
  		powerComboBoxRepoTipoBolMedia.setSelectedIndex(0);
  	},
  
  reporte1 : function() {
  		var aData1 = [['Castellano','Ingles','Matematica','Ciencias Sociales','Ciencias Naturales','Dibujo Tecnico','Educacion Fisica','Quimica'],  	
  					 ['1','2','3','4','5','6','7','8'],
  					 ['1','2','3','4','5','6','7','8'],
  					 ['1','2','3','4','5','6','7','8'],
  					 ['1','2','3','4','5','6','7','8'],	
  					 ['1','2','3','4','5','6','7','8'],
  					 ['1','2','3','4','5','6','7','8'],
  					 ['1','2','3','4','5','6','7','8'],
			 		 ['14','15','20','17','10','11','18','16']];
			 		 
		var aData2 = [['I-Momento','II-Momento','III-Momento','IV-Momento'],  	
  					 ['Castellano','Ingles'],
  					 ['15','2']];	 		 
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
        //rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),11.0 ,'helvetica','normal');
		rep.addBar(0,100,1128,142,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addText(209, 127,'BOLETÍN INFORMATIVO EDUCACIÓN MEDIA GENERAL',false);
        rep.addBar(0,148,1128,198,rep.getRGBAObj(158,201,216,0.5),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','normal');
        rep.addText(296, 162,'REPÚBLICA BOLIVARIANA DE VENEZUELA',false);
        rep.addText(262, 178,'MINISTERIO DEL PODER POPULAR PARA LA EDUCACIÓN',false);
        rep.addText(315, 194,'U.E.P.ARQ. DON CECILIO ACOSTA'/*+json('getLapso').data[6][0]*/,false);  
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,203,1128,287,rep.getRGBAObj(187,196,238,0.8),false);
		rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),8.0,'helvetica','normal');
		rep.addText(8, 220,'ORGANIZACIÓN:        '/*+json('getLapso').data[6][0]*/,false);       
		rep.addText(8, 235, 'GRADO:                  '/*+json('getLapso').data[8][0]*/,false);  
		rep.addText(8, 250, 'CARRERA:     '/*+pcbCreaBolLapso.getOption()*/,false);    
		rep.addText(8, 265, 'ESTUDIANTE:  '/*+editsCreaBolFecInicio.getText()*/,false);
		rep.addText(8, 280, 'DOCENTE GUIA:    '/*+json('getLapso').data[4][0]*/,false);  
		rep.addText(380, 220, 'LAPSO:  '/*+json('getLapso').data[10][0]*/,false);  
		rep.addText(380, 235, 'SECCIÓN:    '/*+editsCreaBolNombre.getText()+" "+editsCreaBolApellido.getText()*/,false);
		rep.addText(380, 250, 'REPRESENTANTE:  '/*+json('getLapso').data[11][0]*/,false);   
		rep.addText(380, 265, 'PERIODO:  '/*+json('getLapso').data[5][0]*/,false);   
		rep.addText(380, 280, 'LUGAR:  '/*+json('getLapso').data[5][0]*/,false);   
		//rep.addImage(728,298,800,370,'images/pht/'+editsCreaBolCi.getValue()+'.jpg',false); 
		//////////////////////////////////////////TABLA/ASIGNACION/MATERIAS/NOTAS////////////////////////////////////////////////////////////////////////////////
		//************************ TABLE1 ***************************
        rep.setTableRowProperties(20, 280, 280, 280, 'bold helvetica',0, 0, 0, 8, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'bold helvetica', 10);
		rep.addTable('tablaAuditoria',['Asignatura','Inast.','Nota .P','Punto A.','Nota F.','I Lapso','II Lapso','III Lapso','Defitiva'],399,287);
		rep.setTotalRowTable(14);
		rep.setHeightRow(20);
        rep.setSizeColumnArray([318,60,60,60,60,60,60,60,60]);
        rep.setAlignData(['left','center','center','center','center','center','center','center','center']);
        rep.addMultiArrayData('tablaAuditoria', aData1);
        //////////////////////////////////////////TABLA/MATERIA/PENDIENTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10.0,'helvetica','normal');
		rep.addBar(0,570,1140,596,rep.getRGBAObj(187,196,238,0.8),false);
        rep.addText(330, 589,'MATERIAS PENDIENTES',false);
        rep.addAbsTableRGB(1, 599, [318,118,118,118,118], 2, 23, rep.getRGBAObj(0,0,0,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9.0,'helvetica','normal');
		rep.addText(135, 616, 'Asignatura'/*+json('getLapso').data[5][0]*/,false);   
		rep.addText(339, 616, '1er. Momento'/*+json('getLapso').data[5][0]*/,false);   
		rep.addText(457, 616, '2do. Momento'/*+json('getLapso').data[5][0]*/,false);   
		rep.addText(579, 616, '3er. Momento'/*+json('getLapso').data[5][0]*/,false);   
        rep.addText(694, 616, '4to. Momento'/*+json('getLapso').data[5][0]*/,false);   
        //////////////////////////////////////////BARRA/MENSAJE/OBSERVACIONES//PROFESOR//GUIA/////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8.0,'helvetica','normal');
        rep.addText(20, 850,'OBSERVACIONES DEL PROFESOR GUIA:',false);
        rep.addText(20, 867,'_____________________________________________________________________________________________________________________________',false);
        rep.addText(20, 890,'_____________________________________________________________________________________________________________________________',false);
        //////////////////////////////////////////BARRA/MENSAJE/RECOMENDACION//INSTITUCIONAL//////////////////////////////////////////////////////////////////////////
        rep.addText(20, 917,'RECOMENDACIÓN INSTITUCIONAL:',false);
        rep.addText(20, 935, '*******'/*+json('getLapso').data[5][0]*/,false);  
        //////////////////////////////////////////LINEAS/PARA/FIRMAS///////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8.0,'helvetica','normal');
        rep.addText(14, 1005,'___________________________',false);
        rep.addText(70, 1020,'DOCENTE',false);
        rep.addText(310, 1005,'___________________________',false);
        rep.addText(352, 1020,'REPRESENTANTE',false);
        rep.addText(600, 1005,'___________________________',false);
        rep.addText(656, 1020,'DIRECTOR',false);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		rep.previewHTML();
   },
  
  reporte2 : function(){
  	
  	    var barChartData = {
		    fields : ["Matematica","fisica","quimica","biologia","Educ. Art","Dibujo","Deporte"],
		    data   : [[14,15,12,15,14,12,11],[13,09,15,16,13,12,20]]
		}
  	
  		var aDataa = [['1','2','3','4','5','6','7','8'],['Castellano','Ingles','Matematica','Ciencias Sociales','Ciencias Naturales','Dibujo Tecnico','Educacion Fisica','Quimica'],  	
					 ['14','15','20','17','10','11','18','16']];
  	
  	    /////*********************************************************************HOJA/EXTERNA/DERECHA**********************************************************************    
		rep = new Report('landscape',1200,790);
        rep.setPositionIcon(1100,158);
        rep.addImage(606,0,1134,148,imgEduca.banner,false);
        rep.setNoRepeatHead();
        rep.addBar(606,154,1134,250,rep.getRGBAObj(158,201,216,0.5),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14,'helvetica','normal');
        rep.addText(617, 208,'BOLETÍN INFORMATIVO EDUCACIÓN MEDIA GENERAL',false);
        //rep.addImage(606,290,1134,780,imgEduca.logo, false);
        //////********************************************************************HOJA/EXTERNA/IZQUIERDA**************************************************************************
        //////////////////////////////////////////BARRA/MENSAJE/OBSERVACIONES/REPRESENTANTE//////////////////////////////////////////////////////////////////////////////////
		//rep.addImage(0,0,490,300,imgEduca.publicidad_boletin,false);
        //////////////////////////////////////////LINEAS/PARA/FIRMAS///////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8.0,'helvetica','normal');
        rep.addText(40, 380,'___________________________',false);
        rep.addText(96, 395,'DOCENTE',false);
        rep.addText(270, 380,'___________________________',false);
        rep.addText(330, 395,'DIRECTOR',false);
        //rep.addImage(0,460,490,780,imgEduca.obs_representante,false);
		////***************************************************************HOJA/INTERNA/DERECHA******************************************************************************
        ///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////
        rep.addBar(606,800,1134,866,rep.getRGBAObj(158,201,216,0.5),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','normal');
        rep.addText(765, 828,'REPÚBLICA BOLIVARIANA DE VENEZUELA',false);
        rep.addText(732, 849,'MINISTERIO DEL PODER POPULAR PARA LA EDUCACIÓN',false);
        rep.addBar(606,870,1134,940,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),14.0,'helvetica','normal');
		rep.addText(740, 910,'BOLETIN INFORMATIVO',false);
		//rep.addImage(1060,870,1134,940,'images/pht/'+editsCreaBolCi.getValue()+'.jpg',false);
		///////////////////////////////////////INFORMACION/INSTITUCION/ALUMNO/////////////////////////////////////////////////////////////////////////////////		
		rep.addBar(606,944,1134,1040,rep.getRGBAObj(187,196,238,0.8),false);
		rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),8.0,'helvetica','normal');
		rep.addText(626, 966,'ORGANIZACIÓN:        '/*+json('getLapso').data[6][0]*/,false);       
        rep.addText(626, 981, 'SUBORGANIZACIÓN: '/*+json('getLapso').data[7][0]*/,false);  
		rep.addText(626, 996, 'CARRERA:                  '/*+json('getLapso').data[8][0]*/,false);  
		rep.addText(626, 1011, 'CURSO:                      '/*+json('getLapso').data[9][0]*/,false); 
		rep.addText(626, 1026, 'SECCIÓN:                    '/*+json('getLapso').data[10][0]*/,false);  
		rep.addText(950, 966,'PERIODO:          '/*+json('getLapso').data[4][0]*/,false);  
		rep.addText(950, 981,'LAPSO:            '/*+pcbCreaBolLapso.getOption()*/,false);    
		rep.addText(950, 996, 'FECHA INICIO:  '/*+editsCreaBolFecInicio.getText()*/,false);
		rep.addText(950, 1011, 'FECHA FIN:      '/*+editsCreaBolFecFin.getText()*/,false);
		rep.addBar(606,1044,1134,1140,rep.getRGBAObj(187,196,238,0.8),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8.0,'helvetica','normal');
		rep.addText(626, 1070, 'ALUMNO:   '/*+editsCreaBolNombre.getText()+" "+editsCreaBolApellido.getText()*/,false);
		rep.addText(626, 1090, 'REPRESENTANTE:  '/*+json('getLapso').data[11][0]*/,false);   
		rep.addText(626, 1110, 'DOCENTE:  '/*+json('getLapso').data[5][0]*/,false);   
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10.0,'helvetica','normal');
        //////////////////////////////////////////BARRA/MENSAJE/OBSERVACIONES//////////////////////////////////////////////////////////////////////////////////
		rep.addBar(606,1144,1134,1169,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),14.0,'helvetica','normal');
        rep.addText(715, 1164,'OBSERVACIONES DEL DOCENTE:',false);
        rep.addBar(606,1173,1134,1377,rep.getRGBAObj(210,210,200,0.4),false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),8.0,'helvetica','normal');
        //rep.addParagraph(626, 1183, memoCreaBolObservaciones.getText(),100,15,false);
        /////****************************************************************HOJA/INTERNA/IZAQUIERDA************************************************************************************
        ///////////////////////////////////BARRA/MENSAJE/RESUMEN//////////////////////////////////////////////////////////////////////////////////
		rep.addBar(0,800,490,870,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),14.0,'helvetica','normal');
		rep.addText(190, 842,'RESUMEN',false);
		rep.addBar(0,874,490,1570,rep.getRGBAObj(210,210,200,0.4),false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),8.0,'helvetica','normal');
        //rep.addParagraph(20, 880, memoCreaBolObservaciones.getText(),88,15,false);
        //////////////////////////////////////////TABLA/ASIGNACION/MATERIAS/NOTAS////////////////////////////////////////////////////////////////////////////////
		rep.addTable('tablaAuditoriaa',['Nº','ASIGNATURAS','NOTA'],196,1000);
		rep.setSizeColumnArray([30,300,60]);
		rep.addMultiArrayData('tablaAuditoriaa', aDataa);
		rep.setAlignData(['center','left','center']);
		rep.setTotalRowTable(21);
		rep.setHeightRow(18);
        //////////////////////////////////////////GENERADOR//REPORTE/////////////////////////////////////////////////////////////////////////////////
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
};


