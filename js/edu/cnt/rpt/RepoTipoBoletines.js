var dialogsRepoTipoBoletines = new Object();
var powerComboBoxRepoTipoBoletines = new Object();
var imgButtonsRepoTipoBoletines = new Object();
var RepoTipoBoletines = {
    windowName: 'RepoTipoBoletines',
    isCreate: false,
	
    show: function(){
        if (!this.isCreate) {
            this.init();
        }
        if (dialogsRepoTipoBoletines.isByClean()) 
            this.limpiar();
        dialogsRepoTipoBoletines.showModal();
    },
    
    dialogsRepoTipoBoletines_Init: function(){
        dialogsRepoTipoBoletines.setMinimizeXY(0, 0);
        dialogsRepoTipoBoletines.setEnableMinimize(false);
        dialogsRepoTipoBoletines.setCenterScreen();    
        dialogsRepoTipoBoletines.addSpace(1, 0, 20);
        dialogsRepoTipoBoletines.addLn(1, 1, 1);
		dialogsRepoTipoBoletines.setHeightCell(1,1,18);  
		var c1 = container.create("c1",'Datos Generales', 2);
		c1.setDimension(360,74);
		c1.setMarginLeftBarTitle(133);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#1e1e1e');
		c1.addObject(powerComboBoxRepoTipoBoletines, 35,70);
		powerComboBoxRepoTipoBoletines.setWidthCombo(178);
		powerComboBoxRepoTipoBoletines.addOptionAndSimpleValue(null,'Boletín Estilo Carta Vertical','1');
        powerComboBoxRepoTipoBoletines.addOptionAndSimpleValue(null,'Boletín Estilo Carta Horizontal','2');
        powerComboBoxRepoTipoBoletines.addOptionAndSimpleValue(null,'Boletín Estilo Diptico','3');
		powerComboBoxRepoTipoBoletines.addOptionAndSimpleValue(null,'Boletín-IV-Construcción','4');
		powerComboBoxRepoTipoBoletines.addOptionAndSimpleValue(null,'Boletín-V-Construcción','5');
		dialogsRepoTipoBoletines.addObjToDialog(c1, 2, 1);
		dialogsRepoTipoBoletines.addLn(3, 1, 1);
		dialogsRepoTipoBoletines.setHeightCell(3,1,13);
        dialogsRepoTipoBoletines.addObjToDialog(imgButtonsRepoTipoBoletines, 4, 1);
        imgButtonsRepoTipoBoletines.setDimension(90, 22);
        dialogsRepoTipoBoletines.leftMarginObj(4, 1, 0, 141);
    },
    
    mensajesDlg : function()
    {
      var txt = powerComboBoxRepoTipoBoletines.getText();
      switch(parseInt(txt,10))
      {
      	 case 1 :{RepoTipoBoletines.reporte1(); break;}
      	 case 2 :{RepoTipoBoletines.reporte2(); break;}
      	 case 3 :{RepoTipoBoletines.reporte3(); break;}
      	 case 4 :{alert('Aqui se llama al tipo Boletín 4'); break;}
      	 case 5 :{alert('Aqui se llama al tipo Boletín 5'); break;}
      };
    },
    
    create: function(){
        dialogsRepoTipoBoletines = dialogs.create('dialogsRepoTipoBoletines', 0, 0, 402, 143, 'BOLETINES');
        dialogsRepoTipoBoletines.setAdjY(40);
        powerComboBoxRepoTipoBoletines = powerComboBox.create('powerComboBoxRepoTipoBoletines','powerComboBoxRepoTipoBoletines','Seleccione el Boletín:',1,130);
        powerComboBoxRepoTipoBoletines.setValidEmpty();
        powerComboBoxRepoTipoBoletines.enableReadOnlyEditor();
        powerComboBoxRepoTipoBoletines.addEmptyOption();
        imgButtonsRepoTipoBoletines = imgButtons.create('imgButtonsRepoTipoBoletines', 'Salir', 'salir.png');
        this.isCreate=true;
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsRepoTipoBoletines_Init();
    },
    
    showFile : function()
    {	
      window.open('help/'+powerComboBoxRepoTipoBoletines.getText(),'_blank');
    },
    
    setEvents: function(){
        imgButtonsRepoTipoBoletines.onClick("dialogsRepoTipoBoletines.close();");
        powerComboBoxRepoTipoBoletines.onChange(this.windowName + ".mensajesDlg()");
        
    },

	limpiar : function() {
  		dialogsRepoTipoBoletines.setMsg("");
  		powerComboBoxRepoTipoBoletines.setSelectedIndex(0);
  	},
  
  reporte1 : function() {
  		////////////////////////////CARGA/VARIABLE/PROYECTOS///////////////////////////////////////////////////////////////////////////////////////////
  		var pa='';
		for (var i = 0; i < json('getProyecto').data[1].length; i++)
			 pa+=(i+1)+') '+json('getProyecto').data[1][i]+'  ';
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
        rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14,'helvetica','normal');
		rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,0.9),false);
        rep.addHeadTitle('BOLETÍN INFORMATIVO',true);
        rep.addBar(0,148,1128,214,rep.getRGBAObj(158,201,216,0.5),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','normal');
        rep.addText(296, 176,'REPÚBLICA BOLIVARIANA DE VENEZUELA',false);
        rep.addText(264, 196,'MINISTERIO DEL PODER POPULAR PARA LA EDUCACIÓN',false);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,220,1128,292,rep.getRGBAObj(187,196,238,0.8),false);
		rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),8.0,'helvetica','normal');
		rep.addText(20, 240,'ORGANIZACIÓN:        '+json('getLapso').data[6][0],false);       
        rep.addText(20, 260, 'SUBORGANIZACIÓN: '+json('getLapso').data[7][0],false);  
		rep.addText(20, 280, 'CARRERA:                  '+json('getLapso').data[8][0],false);  
		rep.addText(380, 240, 'LAPSO:     '+pcbCreaBolLapso.getOption(),false);    
		rep.addText(580, 240, 'FECHA INICIO:  '+editsCreaBolFecInicio.getText(),false);
		rep.addText(380, 260, 'GRADO:    '+json('getLapso').data[9][0],false);    
		rep.addText(580, 260, 'FECHA FIN:      '+editsCreaBolFecFin.getText(),false);
		rep.addText(380, 280, 'SECCIÓN:  '+json('getLapso').data[10][0],false);  
		rep.addText(580, 280, 'PERIODO:         '+json('getLapso').data[4][0],false);  
		rep.addBar(0,298,1128,370,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 315, 'ESTUDIANTE:   '+editsCreaBolNombre.getText()+" "+editsCreaBolApellido.getText(),false);
		rep.addText(380, 315, 'REPRESENTANTE:  '+json('getLapso').data[11][0],false);   
		rep.addText(20, 330, 'DOCENTE:  '+json('getLapso').data[5][0],false);   
		rep.addText(380, 330, 'INASISTENCIAS:     '+editsCreaBolInasistencia.getText(),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8.0,'helvetica','normal');
		rep.addText(20, 345, 'PROYECTO (S) DE APRENDIZAJE: ',false);  
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),7.0,'helvetica','normal'); 
		rep.addText(20, 360, pa,false);   
		rep.addImage(728,298,800,370,'images/pht/'+editsCreaBolCi.getValue()+'.jpg',false); 
		//////////////////////////////////////////BARRA//INDICADORES//////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14.0,'helvetica','normal');
		rep.addBar(0,376,1140,1000,rep.getRGBAObj(210,210,200,0.3),false);
        rep.addText(20, 396,'Indicadores:',false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),8.0,'helvetica','normal');
        rep.addParagraph(21, 420, memoCreaBolIndicadores.getText(),725,20,false);
        //////////////////////////////////////////BARRA/RESUMEN//EVALUATIVO///////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14.0,'helvetica','normal');
		rep.addBar(0,1080,1140,1530,rep.getRGBAObj(210,210,200,0.3),false);
        rep.addText(20, 1100,'Resumen Evaluativo:',false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),8.0,'helvetica','normal');
        rep.addParagraph(21, 1124, memoCreaBolResumen.getText(),725,20,false);
        //////////////////////////////////////////BARRA//OBSERVACIONES//RECOMENDACIONES//REPRESENTANTE//////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14.0,'helvetica','normal');
		rep.addBar(0,1540,1140,1760,rep.getRGBAObj(210,210,200,0.3),false);
        rep.addText(20, 1575,'Observaciones y Recomendaciones al Representante:',false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),8.0,'helvetica','normal');
        rep.addParagraph(21, 1600, memoCreaBolObservaciones.getText(),725,20,false);
        //////////////////////////////////////////LINEAS/PARA/FIRMAS///////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8.0,'helvetica','normal');
        rep.addText(4, 1915,'___________________________',false);
        rep.addText(60, 1930,'DOCENTE',false);
        rep.addText(300, 1915,'___________________________',false);
        rep.addText(342, 1930,'REPRESENTANTE',false);
        rep.addText(600, 1915,'___________________________',false);
        rep.addText(656, 1930,'DIRECTOR',false);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
        rep.render(function(){
								Alert.show('Su carnet fue generado, pulse ACEPTAR para continuar...',
          						'CARNET GENERADO',Alert.TYPE_INFO,'rep.previewHTML()');	
							});
   },
  
   reporte2 : function() {
  		////////////////////////////CARGA/VARIABLE/PROYECTOS///////////////////////////////////////////////////////////////////////////////////////////
  		var pa='';
		for (var i = 0; i < json('getProyecto').data[1].length; i++)
			 pa+=(i+1)+') '+json('getProyecto').data[1][i]+'  ';
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
		rep.setPositionIcon(1090,144);
        //rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.addBar(0,0,1128,131,rep.getRGBAObj(210,200,200,0.9),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','normal');
        rep.addText(456, 40,'REPÚBLICA BOLIVARIANA DE VENEZUELA',false);
        rep.addText(420, 60,'MINISTERIO DEL PODER POPULAR PARA LA EDUCACIÓN',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14,'helvetica','normal');
        rep.addText(320, 90,'BOLETÍN INFORMATIVO SOBRE RESULTADOS DE LAPSO',false); 
		rep.addImage(40,10,150,120,'images/logo/Educa.banner.jpg',false);
		rep.addImage(40,10,150,120,imgEduca.portada_boletin, false);
		rep.addImage(980,10,1120,120,'images/pht/'+editsCreaBolCi.getValue()+'.jpg',false); 
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,140,1128,308,rep.getRGBAObj(206,206,206,0.7),false);
		rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),8.0,'helvetica','normal');
		rep.addText(20, 180,'ORGANIZACIÓN:        '+json('getLapso').data[6][0],false);       
        rep.addText(20, 200, 'SUBORGANIZACIÓN: '+json('getLapso').data[7][0],false);  
		rep.addText(20, 220, 'CARRERA:                  '+json('getLapso').data[8][0],false);  
		rep.addText(20, 240, 'ESTUDIANTE:                    '+editsCreaBolNombre.getText()+" "+editsCreaBolApellido.getText(),false);
		rep.addText(20, 260, 'DOCENTE:                   '+json('getLapso').data[5][0],false);  
		rep.addText(420, 180, 'LAPSO:                  '+pcbCreaBolLapso.getOption(),false);    
		rep.addText(420, 200, 'GRADO:                 '+json('getLapso').data[9][0],false); 
		rep.addText(420, 220, 'SECCIÓN:               '+json('getLapso').data[10][0],false); 
		rep.addText(420, 240, 'REPRESENTANTE: '+json('getLapso').data[11][0],false); 
		rep.addText(420, 260, 'INASISTENCIAS:     '+editsCreaBolInasistencia.getText(),false);
		rep.addText(740, 180, 'FECHA INICIO:  '+editsCreaBolFecInicio.getText(),false);
		rep.addText(740, 200, 'FECHA FIN:      '+editsCreaBolFecFin.getText(),false);
		rep.addText(740, 220, 'PERIODO:         '+json('getLapso').data[4][0],false);  
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9.0,'helvetica','normal'); 
		rep.addText(20, 290, 'PROYECTO (S) DE APRENDIZAJE: ',false); 
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9.0,'helvetica','normal'); 
		rep.addText(220, 290, pa,false);   
		//////////////////////////////////////////INDICADORES//APLICADOS/////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14.0,'helvetica','normal');
        rep.addText(20, 350,'Indicadores:',false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),8.0,'helvetica','normal');
        rep.addParagraph(21, 370, memoCreaBolIndicadores.getText(),1040,20,false);
        ///////////////////////////////////////////RESUMEN//EVALUATIVO///////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14.0,'helvetica','normal');
        rep.addText(20, 845 ,'Resumen Evaluativo:',false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),8.0,'helvetica','normal');
        rep.addParagraph(21, 880, memoCreaBolResumen.getText(),1040,20,false);
        //////////////////////////////////////////OBSERVACIONES//RECOMENDACIONES/////////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14.0,'helvetica','normal');
        rep.addText(20, 1200 ,'Observaciones y Recomendaciones al Representante:',false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),8.0,'helvetica','normal');
        rep.addParagraph(21, 1220, memoCreaBolObservaciones.getText(),1040,20,false);
        //////////////////////////////////////////LINEAS/PARA/FIRMAS///////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8.0,'helvetica','normal');
        rep.addText(150, 1440,'___________________________',false);
        rep.addText(206, 1455,'DOCENTE',false);
        rep.addText(446, 1440,'___________________________',false);
        rep.addText(488, 1455,'REPRESENTANTE',false);
        rep.addText(746, 1440,'___________________________',false);
        rep.addText(808, 1455,'DIRECTOR',false);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render(function(){
								Alert.show('Su carnet fue generado, pulse ACEPTAR para continuar...',
          						'CARNET GENERADO',Alert.TYPE_INFO,'rep.previewHTML()');	
							});
   },
  
  reporte3 : function(){
  		////////////////////////////CARGA/VARIABLE/PROYECTOS///////////////////////////////////////////////////////////////////////////////////////////
  		var pa='';
		for (var i = 0; i < json('getProyecto').data[1].length; i++)
			 pa+= json('getProyecto').data[1][i]+'  ';
  	    /////*********************************************************************HOJA/EXTERNA/DERECHA**********************************************************************    
		rep = new Report('landscape',1240,920);
        rep.setPositionIcon(1200,10);
        rep.setNoRepeatHead();
        ////////////////////////////ANVERSO//LADO//IZQUIERDO///////////////////////////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','bold','black');
        rep.addText(20, 50,'OBSERVACIONES Y RECOMENDACIONES AL REPRESENTANTE:',false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),12.0,'helvetica','normal');
        rep.addParagraph(20, 80, memoCreaBolObservaciones.getText(),400,25,false);
        ///////////////////LINEAS/PARA/FIRMAS//////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8.0,'helvetica','normal');
		rep.addText(286, 840,'L.s.',false);
        rep.addText(80, 860,'___________________________',false);
        rep.addText(136, 875,'DOCENTE',false);
        rep.addText(360, 860,'___________________________',false);
        rep.addText(412, 875,'DIRECTOR',false);
        /////////////////////////////ANVERSO//LADO//DERECHO////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        rep.addLine(0,1,1240,1,rep.getRGBAObj(0,0,0,0),5,false);//linea -
        rep.addLine(0,900,1240,900,rep.getRGBAObj(0,0,0,0),3,false);//linea -
        rep.addLine(0,0,0,900,rep.getRGBAObj(0,0,0,0),5,false);//linea I
        rep.addLine(1240,0,1240,900,rep.getRGBAObj(0,0,0,0),5,false);//linea I
        rep.addLine(620,0,620,900,rep.getRGBAObj(0,0,0,0),3,false);//linea I
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),13,'helvetica','bold','black');
        rep.addText(758, 50,'REPÚBLICA BOLIVARIANA DE VENEZUELA',false);
        rep.addText(700, 75,'MINISTERIO DEL PODER POPULAR PARA LA EDUCACIÓN',false);
        rep.addText(787, 100,''+json('getLapso').data[6][0],false);
        rep.addImage(1120,520,1220,660,'images/pht/'+editsCreaBolCi.getValue()+'.jpg',false); 
        rep.addImage(878,120,990,250,imgEduca.portada_boletin, false);
        rep.addText(700, 280,'INFORME DESCRIPTIVO DEL RENDIMIENTO ESTUDIANTIL',false);
        rep.addText(830, 305, 'AÑO ESCOLAR '+json('getLapso').data[4][0],false);  
        rep.addText(892, 330, ''+pcbCreaBolLapso.getOption(),false);    
        rep.addText(812, 370,'PROYECTO DE APRENDIZAJE',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','bold','black');
        rep.addText(650, 410, pa, false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),11,'helvetica','bold','black');
        rep.addText(650, 510, 'ESTUDIANTE: '+editsCreaBolApellido.getText()+" "+editsCreaBolNombre.getText(),false);
		rep.addText(650, 560, 'GRADO: '+json('getLapso').data[9][0],false); 
		rep.addText(840, 560, 'SECCIÓN: '+json('getLapso').data[10][0],false); 
		rep.addText(650, 610, 'DOCENTE:  '+json('getLapso').data[5][0],false);         
		rep.addText(650, 660, 'REPRESENTANTE: '+json('getLapso').data[11][0],false);    
		rep.addText(825, 780,''+json('getLapso').data[7][0],false);  
		rep.addText(950, 780,'- '+json('getLapso').data[12][0],false);  
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////NUEVA//PAGINA//REVERSO//LADO//IZQUIERDO//ENCABEZADO//////////////////////////////////////////////////////////////////////////
        rep.addLine(0,940,1240,940,rep.getRGBAObj(0,0,0,0),0.5,false);//linea -
        rep.addLine(0,1040,1240,1040,rep.getRGBAObj(0,0,0,0),0.5,false);//linea -
        rep.addLine(0,1820,1240,1820,rep.getRGBAObj(0,0,0,0),0.5,false);//linea -
        rep.addLine(0,20,0,1820,rep.getRGBAObj(0,0,0,0),0.5,false);//linea I
        rep.addLine(1240,20,1240,1820,rep.getRGBAObj(0,0,0,0),0.5,false);//linea I
        rep.addLine(620,120,620,1820,rep.getRGBAObj(0,0,0,0),0.5,false);//linea I
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),11,'helvetica','bold','black');
        rep.addText(10, 994, 'PROYECTO DE APRENDIZAJE:  ',false); 
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14,'helvetica','bold','black');
        rep.addText(235, 994, pa,false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),11,'helvetica','bold','black');
        rep.addText(266, 1090, 'Indicadores:  ',false);  
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),9.0,'helvetica','normal');
        rep.addParagraph(20, 1120, memoCreaBolIndicadores.getText(),490,18,false);			
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),11,'helvetica','bold','black');
        rep.addText(853, 1090, 'Resumen Evaluativo:  ',false); 
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),12,'helvetica','normal');
        rep.addParagraph(650, 1120, memoCreaBolResumen.getText(),390,22,false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','bold','black');
        rep.addText(970, 1800,'INASISTENCIAS ACUMULADAS: '+editsCreaBolInasistencia.getText(),false);
        //////////////////////////////////////////GENERADOR//REPORTE/////////////////////////////////////////////////////////////////////////////////
		rep.render(function(){
								Alert.show('Su boletín fue generado, pulse ACEPTAR para continuar...',
          						'GENERADOR DE BOLETIN',Alert.TYPE_INFO,'rep.previewHTML()');	
							});
	},
  
};



