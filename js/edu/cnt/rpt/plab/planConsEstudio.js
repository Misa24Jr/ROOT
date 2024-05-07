var planConsEstudio = {
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
        rep.addText(260, 280,'CONSTANCIA DE ESTUDIOS',false);
        //////////////////////////////////////////BARRA/TEXTO////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),11.0,'helvetica','normal');
		rep.addBar(0,400,1140,620,rep.getRGBAObj(210,210,200,0.4),false);
        rep.addText(70, 455,'Por medio de la presente se hace constar que el alumno (a): ',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),11.5,'verdana','bold');
        rep.addText(465, 455,''+editsReptGenIniBasNombre.getText()+" "+editsReptGenIniBasApellido.getText(),false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),11.0,'helvetica','normal');
        rep.addText(50, 485,'portador (a) de la cédula de identidad numero:',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'verdana','bold');
        rep.addText(352, 485,'V-'+editsReptGenIniBasCi.getText(),false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),11.0,'helvetica','normal');
        rep.addText(446, 485,', de nacionalidad: '+json('getMantPersTodas').data[5][0],false);
        rep.addText(649, 485,'y  cursa  por',false);
        rep.addText(50, 515,'esta institución estudios en: ',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'verdana','bold');
        rep.addText(236, 515,''+json('getMantenimientodeCarrera').data[7][0],false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),11.0,'helvetica','normal');
        rep.addText(70, 545,'Por lo que  expido la  presente para los fines donde haya lugar y del interesado,  la misma no es valida',false);
        rep.addText(50, 575,'sin el sello y firma.',false);
        //////////////////////////////////////////BARRA/OBSERVACIONES////////////////////////////////////////////////////////////////////////////////////////
        rep.addBar(0,650,1128,720,rep.getRGBAObj(187,196,238,0.4),false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10.0,'helvetica','normal');
        rep.addText(30, 680,'Observaciones: ',false);
        
        var str = memoReptGenIniBasica.getText();
          if(str.length >  0)
            rep.addText(120, 680,str.substr(0,106),false);
          else
          {	 
            rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10.5,'helvetica','normal');
            rep.addText(120,680,'Ninguna',false);   
          }; 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),14.0,'helvetica','normal');
        rep.addText(120, 810,'ATENTAMENTE',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8.0,'helvetica','normal');
        rep.addText(310, 880,'________________________________',false);
        rep.addText(590, 838,'L.S.',false);
        rep.addText(375, 895,'EL DIRECTOR',false);
        ///////////////////////////////////////INSERCION DE FECHA/////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'verdana','bold');
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

