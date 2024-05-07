var planComuRepresentante = {
    show: function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
        rep.setHeadImage(imgEduca.banner,true);
        rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,106,1128,214,rep.getRGBAObj(158,201,216,0.5),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','normal');
        rep.addText(310, 140,'REPUBLICA BOLIVARIANA DE VENEZUELA',false);
        rep.addText(264, 168,'MINISTERIO DEL PODER POPULAR PARA LA EDUCACIÓN',false);
        rep.addText(242, 196,'COMPLEJO EDUCATIVO COLEGIO NSTRA. SRA. DE GUADALUPE ',false);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,220,1128,330,rep.getRGBAObj(187,196,238,0.8),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),13.5,'helvetica','normal');
		rep.addText(20, 300, 'Nombre: '+editsReptGenIniBasNombre.getValue(),false);
		rep.addText(280, 300, 'Apellido: '+editsReptGenIniBasApellido.getValue(),false);
		//////////////////////////////////////////BARRA/MENSAJE/RESUMEN//////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),15.0,'helvetica','normal');
		rep.addBar(0,360,1140,420,rep.getRGBAObj(210,210,200,0.7),false);
        rep.addText(320, 398,'COMUNICACIÓN',false);
        //////////////////////////////////////////BARRA/TEXTO////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),11.0,'helvetica','normal');
		rep.addBar(0,460,1140,730,rep.getRGBAObj(210,210,200,0.4),false);
        
        var str = memoReptGenIniBasica.getText();
          if(str.length >  0)
            rep.addText(60, 500,str.substr(0,106),false);
          else
          {	 
            rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),16.0,'helvetica','normal');
            rep.addText(255,590,'COMUNICACIÓN EN BLANCO',false);   
          }; 
          if(str.length >=106)
            rep.addText(30, 540,str.substr(106,114),false);
          if(str.length >=220)
             rep.addText(30, 580, str.substr(220,114),false);
          if(str.length >=334)
             rep.addText(30, 620, str.substr(334,114),false);
          if(str.length >=448)
             rep.addText(30, 660, str.substr(448,114),false);
          if(str.length >=562)
             rep.addText(30, 700, str.substr(562,114),false);
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),14.0,'helvetica','normal');
        rep.addText(120, 770,'ATENTAMENTE',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8.0,'helvetica','normal');
        rep.addText(310, 880,'________________________________',false);
        rep.addText(590, 838,'L.S.',false);
        rep.addText(375, 895,'EL DIRECTOR',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12.0,'helvetica','normal');
        ///////////////////////////////////////INSERCION DE FECHA/////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),13.2,'helvetica','normal');
        rep.addText(20, 960,'MARACAIBO, '+Tool.getTimestamp(),false);
        ///////////////////////////////////////INSERCION DE IMAGEN DEL REPORTE/////////////////////////////////////////////////////////////////////////////////
		rep.addImage(700,220,792,330,'images/pht/'+editsReptGenIniBasCi.getValue()+'.jpg',true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();    
    }
};

