var planCitaRepresentante = {
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
		rep.addText(20, 300, 'Alumno: '+editsReptGenIniBasNombre.getValue()+'  '+editsReptGenIniBasApellido.getValue(),false);
		rep.addText(400, 300, 'Cedula: '+editsReptGenIniBasCi.getValue(),false);
		//////////////////////////////////////////BARRA/MENSAJE/RESUMEN//////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),15.0,'helvetica','normal');
		rep.addBar(0,360,1140,420,rep.getRGBAObj(210,210,200,0.7),false);
		rep.addText(280, 398,'CITA AL RPRESENTANTE',false);
        //////////////////////////////////////////BARRA/TEXTO////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),11.0,'helvetica','normal');
		rep.addBar(0,460,1140,640,rep.getRGBAObj(210,210,200,0.4),false);
        rep.addText(60, 515,'Por medio de la presente hacemos de su conocimiento, que requerimos de su presencia en la sede de la institu- a las 9:00 am:',false);
        //rep.addText(320, 224,powerComboBoxRepoPAOSSemBloque.getValue(),false);
        rep.addText(30, 550,'tución a las 9:00 am, del día:',false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),13.2,'helvetica','normal');
        var str = memoReptGenIniBasica.getText();
        if(str.length > 0)
          rep.addText(220, 550,str.substr(0,10),false);
        else 
          rep.addText(220, 550,Tool.getDate(),false);
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),11.0,'helvetica','normal');
        rep.addText(319, 550,'a fin de tratar asunto o tema relacionado con su representado, razón por',false);
        rep.addText(30, 585,'la cual requerimos su puntual asistencia a la hora y fecha fijada ',false);
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        rep.setFontProperties(rep.getRGBAObj(20,20,20,0.9),14.0,'helvetica','normal');
        rep.addText(120, 720,'ATENTAMENTE',false);
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8.0,'helvetica','normal');
        rep.addText(310, 880,'________________________________',false);
        rep.addText(590, 838,'L.S.',false);
        rep.addText(375, 895,'EL DIRECTOR',false);
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

