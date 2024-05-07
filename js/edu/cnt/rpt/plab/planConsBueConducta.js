var planConsBueConducta = {
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
        rep.addText(193, 280,'CONSTANCIA DE BUENA CONDUCTA',false);
        //////////////////////////////////////////BARRA/TEXTO////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),11.0,'helvetica','normal');
		rep.addBar(0,380,1140,610,rep.getRGBAObj(210,210,200,0.4),false);
        rep.addText(60, 415,'Por medio de la presente se hace constar que:',false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),14.0,'helvetica','normal');
        rep.addText(234, 450, editsReptGenIniBasNombre.getValue() +'  '+ editsReptGenIniBasApellido.getValue(),false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),11.0,'helvetica','normal');
        rep.addText(30, 485,'es alumno regular del Complejo Educativo Nuestra Señora de Guadalupe, Numero de Plantel: S1916D2313, ubicado',false);
        rep.addText(30, 520,'en la Parroquia Indio Mara de la ciudad de Maracaibo, Sector Santa María, entre avenidas 23 y 24 #125-23, asimismo',false);
        rep.addText(30, 555,'demuestra',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),16.0,'helvetica','normal');
        var str = memoReptGenIniBasica.getText();
        if(str.length > 0)
          rep.addText(108, 555,str.substr(0,15),false);
        else 
          rep.addText(108, 555,'buena conducta',false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),11.0,'helvetica','normal');
        rep.addText(268, 555,'en su comportamiento tanto academico como social con sus compañeros y per',false); 
        rep.addText(30, 590,'sonal academico y directivo. Nota: no es valido este documento sin el sello y la firma.',false);
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),14.0,'helvetica','normal');
        rep.addText(120, 810,'ATENTAMENTE',false);
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

