var rep = new Object();
var counterData=0; 
var totalAct=0;

var RepoProyAprendizaje = {
    windowName: 'RepoProyAprendizaje',
         
    reporte1 : function() {
	///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
    var jg = json('getInfoReporteProyecto');    
    rep = new Report('landscape');
    rep.setPositionIcon(1090,108);
    rep.setHeadImage(imgEduca.banner,true);
    //rep.setNoRepeatHead();
	//////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
	rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'helvetica','normal');
	rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,1),false);
    rep.addHeadTitle('PROYECTO DE APRENDIZAJE',false);
	rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),7.8,'helvetica','normal');
	///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
    rep.addBar(0,145,1128,216,rep.getRGBAObj(187,196,238,1),false);
	rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),7.8,'helvetica','normal');
	rep.addText(20, 164,'PROYECTO:  '+jg.data[5][0],false);
    rep.addText(20, 184, 'FECHA DE INICIO:  '+jg.data[6][0],false);
    rep.addText(220, 184, 'FECHA FINALIZACIÓN:  '+jg.data[7][0],false);
	rep.addText(420, 184, 'PERIODO:  '+jg.data[1][0],false);
	rep.addText(640, 184, 'LAPSO:  '+jg.data[2][0],false);
	rep.addText(780, 184, 'GRADO:  '+jg.data[3][0],false);
	rep.addText(930, 184, 'SECCIÓN:  '+jg.data[4][0],false);   
	rep.addText(20, 204, 'DOCENTE DE AULA:  '+jg.data[0][0],false);
	
	rep.addBar(0,220,1128,258,rep.getRGBAObj(210,200,200,1),false);
	rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'helvetica','normal');
    rep.addText(470, 245,'DIAGNOSTICO',false);
    
    rep.setFontProperties(rep.getRGBAObj(0,0,0,1),12,'helvetica','bold');
    rep.addText(25, 280,'POTENCIALIDADES:',false);
    rep.setFontProperties(rep.getRGBAObj(0,0,0,1),10,'helvetica','normal');
    rep.addParagraph(25, 300, jg.data[9][0],820,20,false);
    
    rep.setFontProperties(rep.getRGBAObj(0,0,0,1),12,'helvetica','bold');
    rep.addText(25, rep.getActY(40),'NECESIDADES:',false);
    rep.setFontProperties(rep.getRGBAObj(0,0,0,01),10,'helvetica','normal');
    rep.addParagraph(25, rep.getActY(20), jg.data[10][0],820,20,false);
    
    rep.setFontProperties(rep.getRGBAObj(0,0,0,1),12,'helvetica','bold');
    rep.addText(25, rep.getActY(40),'INTERESES:',false);
    rep.setFontProperties(rep.getRGBAObj(0,0,0,1),10,'helvetica','normal');
    rep.addParagraph(25, rep.getActY(20), jg.data[11][0],820,20,false);
    
    rep.setFontProperties(rep.getRGBAObj(0,0,0,1),12,'helvetica','bold');
    rep.addText(25, rep.getActY(40),'JUSTIFICACION:',false);
    rep.setFontProperties(rep.getRGBAObj(0,0,0,1),10,'helvetica','normal');
    rep.addParagraph(25, rep.getActY(20), jg.data[8][0],820,20,false);
    
    //*************************************** FIN 1ra PARTE DEL REPORTE ****************************************
    rep.addPage();    
    this.reporte2();
  },
	
  reporte2 : function(){  
  	//********************************* AREAS - COMPONENTES - CONTENIDOS ***************************************  	
    var ja = json('getMantProyAulaArea');
    var ta = ja.data[0].length;//total de areas	
    //dat[0] --> areas data[1] ->componentes data[2]-->contenidos
    
    var prArea = function (index){
      //****************************** AREAS DE APRENDIZAJE***********************************	
      rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','bold');
      rep.addText(25, 120,'AREA(S):',false);//TITULO
      rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','normal');
      rep.addParagraph(25, 140, ja.data[0][index], 820, 20, false);//ESCRIBE EL VALOR DEL AREA
    };  
     
    var prComponente = function(index){
       //********************************* COMPONENTES *****************************************           
       rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','bold');
       rep.addText(25, rep.getNewY(40),'COMPONENTE(S):',false);//TITULO DEL COMPONENTE
       rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','normal');
       rep.addParagraph(25, rep.getNewY(20), '  .- '+ja.data[1][index], 820, 20, false);//DATA DEL COMPONENTE
    };
    var prContenido = function(index, tit){
       //*********************************  CONTENIDOS  *****************************************           
       rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','bold');
       if(tit)
         rep.addText(25, rep.getNewY(40),'CONTENIDOS:',false);//TITULO DEL CONTENIDO
       rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','normal');
       rep.addParagraph(25, rep.getNewY(20), '  .- '+ja.data[2][index], 820, 20, false);//DATA DEL CONTENIDO; 
    };
    //****************************** LOGICA DE MANEJO PARA JSON *********************************
  	if(ta > 0) {
  	  prArea(0);
  	  prComponente(0);
  	  prContenido(0,true);	
  	  for(var a=1; a<ta; a++){
  	    if(ja.data[0][a-1]==ja.data[0][a]){
  	      if(ja.data[1][a-1]==ja.data[1][a]){
       		prContenido(a,false);  	      	
  	      }
  	      else{
  	      	prComponente(a);
  	      	prContenido(a, true);
  	      }
  	    }
  	    else{
  	      rep.addPage();
  	      prArea(a);
  	  	  prComponente(a);
  	  	  prContenido(a, true);
  	    }  
      }
    }
    else
      rep.addText(25, 80,'AREA(S): NO EXISTEN AREAS CARGADAS',false);
    rep.addPage();  
    this.reporte3();
    //****************************** FIN 2ra PARTE DEL REPORTE *********************************
  },
	
  reporte3 : function(){
	//***************************************** PROYECTO - AREAS ***********************************************
	var ja = json('getInfoRepoProyArea');
    var ta = ja.data[0].length;//total de areas
    var da = new Array();
    var tam = 0;
    function dataArray(){
      this.contenido = new Array();
      this.indicadores = new Array();
	}
	
	function prHead(index){
	  //rep.addBar(0,25,1128,63,rep.getRGBAObj(210,200,200,0.9),false);
	  rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14,'helvetica','bold');
      rep.addText(10, 130,'PROYECTO : ',false);
      rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','normal'); 
      rep.addText(130, 130,json('getInfoReporteProyecto').data[5][0],false);
      rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','bold');
      rep.addText(10, 150, 'AREA:',false);
      rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','normal');
      rep.addText(130, 150, ja.data[0][index], false);
    }
    //SE CREA LA TABLA CON COLUMNAS BASADA EN LOS DATOS DE LOS ARREGLOS LLENADOS 
    function addFrame(){	
      var jt = rep.getJasonTableFrame(	
      ['Contenidos Contextuales','Recursos','Intencionalidades','Ejes Integradores','Técnicas','Indicadores'],
      [200,180,145,145,170,260],
      [
            da[tam].contenido, //contenido
    	    json('getInfoRepoProyAreaRecu').data[0],//recurso
    	    json('getInfoRepoProyCur').data[1],//intencionalidad
    	    json('getInfoRepoProyEje').data[1],//ejes
    	    json('getInfoRepoProyIns').data[1],//tecnicas
    	    da[tam].indicadores//indicadores      
      ],
      30);
      rep.addTableFrame(10,155,jt,rep.getRGBAObj(0,0,0,1));
    }
    prHead(0);
    //******************************* LOGICA DE MANEJO PARA JSON ***********************************
    if(ta > 0) {	
      da[0] = new dataArray();
      da[tam].contenido[0]=ja.data[1][0];
  	  da[tam].indicadores[0]=ja.data[2][0];
  	  if(ta==1)
  	    addFrame();
  	  else
  	    for(var a=1; a<ta; a++){    	 
  	      if(ja.data[0][a-1]==ja.data[0][a]){	
  		    da[tam].contenido[da[tam].contenido.length]=ja.data[1][a];
  	        da[tam].indicadores[da[tam].indicadores.length]=ja.data[2][a];
  	        if(a==ta-1)
  	          addFrame();
  	      }
  	      else{
  	        addFrame(); 
  	        rep.addPage();
  	        prHead(a);
  	        tam = da.length;
  	        da[tam] = new dataArray();
  	        da[tam].contenido[0]=ja.data[1][a];
  	  	    da[tam].indicadores[0]=ja.data[2][a];
  	      }   
        }
    }
    else
      rep.addText(25, 80,'AREA(S): NO EXISTEN AREAS CARGADAS',false);
    //*********************************************************************************************
    rep.addPage();     
	this.reporte4();
    //********************************************* FIN 3ra PARTE DEL REPORTE ***********************************************  	
  },	
	
  reporte4 : function(){
  	//********************************************** PROYECTO ACTIVIDADES ***************************************************
  	var ja = json('getInfoRepoProyAreaActi');
    var ta = ja.data[0].length;//total de areas
    var da = new Array();
    var tam = 0;
    function dataArray(){
      this.contenido = new Array();
      this.recurso = new Array();
      this.indicadores = new Array();
	}
	
	function prHead(index){
	  //rep.addBar(0,25,1128,63,rep.getRGBAObj(210,200,200,0.9),false);
	  rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14,'helvetica','bold');
      rep.addText(10, 130,'PROYECTO :',false);
      rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','normal'); 
      rep.addText(130, 130,json('getInfoReporteProyecto').data[5][0],false);
      rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','bold');
      rep.addText(10, 150, 'ACTIVIDAD:',false);
      rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),10,'helvetica','normal');
      rep.addText(130, 150, ja.data[0][index], false);
    }
    //SE CREA LA TABLA CON COLUMNAS BASADA EN LOS DATOS DE LOS ARREGLOS LLENADOS     
    function addFrame(){
    	
      function checkNull(arr){
        for(var i=0; i<arr.length; i++)
        if(arr[i]==null)
          arr[i]="";      	
      }	
 	  
 	  checkNull(da[tam].contenido);
 	  checkNull(da[tam].recurso);
 	  checkNull(da[tam].indicadores);
 	  	   	
      var jt = rep.getJasonTableFrame(	
      ['Contenidos Contextuales','Recursos','Intencionalidades','Ejes Integradores','Técnicas','Indicadores'],
      [200,180,145,145,170,260],
      [
            da[tam].contenido, //contenido
    	    da[tam].recurso,//recurso
    	    json('getInfoRepoProyCur').data[1],//intencionalidad
    	    json('getInfoRepoProyEje').data[1],//ejes
    	    json('getInfoRepoProyIns').data[1],//tecnicas
    	    da[tam].indicadores//indicadores      
      ],
      30);
      rep.addTableFrame(10,155,jt,rep.getRGBAObj(0,0,0,1));
    }
    prHead(0);
    //******************************* LOGICA DE MANEJO PARA JSON ***********************************
    if(ta > 0) {	
      da[0] = new dataArray();
      da[tam].contenido[0]=ja.data[1][0];
      da[tam].recurso[0]=ja.data[2][0];
  	  da[tam].indicadores[0]=ja.data[3][0];
  	  if(ta==1)
  	    addFrame();
  	  for(var a=1; a<ta; a++){    	 
  	    if(ja.data[0][a-1]==ja.data[0][a]){	
  	      if(ja.data[1][a-1]==ja.data[1][a]){
  	        if(ja.data[2][a-1]==ja.data[2][a]){
  	          if(ja.data[3][a-1]==ja.data[3][a]){  	          	
  	          }
  	          else {
  	        	da[tam].indicadores[da[tam].indicadores.length]=ja.data[3][a];
  	          }	
  	        }
  	        else{
  	          da[tam].recurso[da[tam].recurso.length]=ja.data[2][a];
  	          //da[tam].indicadores[da[tam].indicadores.length]=ja.data[3][a];
  	        }
  	      }  
  	      else{
  	      	da[tam].contenido[da[tam].contenido.length]=ja.data[1][a];
  	      	da[tam].recurso[da[tam].recurso.length]=ja.data[2][a];
  	        da[tam].indicadores[da[tam].indicadores.length]=ja.data[3][a];  
  	      }
  	      if(a==ta-1)
  	        addFrame();  	    
  	    }
  	    else{
  	      addFrame(); 
  	      rep.addPage();
  	      prHead(a);
  	      tam = da.length;
  	      da[tam] = new dataArray();
  	      da[tam].contenido[0]=ja.data[1][a];
  	  	  da[tam].recurso[0]=ja.data[2][a];
  	  	  da[tam].indicadores[0]=ja.data[3][a];
  	  	  if(a==ta-1)
  	        addFrame();
  	    }  
      }
    }
    else
      rep.addText(25, 80,'ACTIVIDAD: NO EXISTE ACTIVIDAD CARGADA',false);   
	this.reporte5();
  },
  
  reporte5 : function(){
	  rep.render(function(){
		  Alert.show('El informe del proyecto fue generado, pulse ACEPTAR para continuar...', 'INFORME GENERADO', Alert.TYPE_INFO, 'rep.previewHTML()');	
	  });
  }	
};


