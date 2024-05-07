function Horario(options){
    var horario = this;
    var divContainer = document.createElement('div');
    var tableH = document.createElement('table');  
    var arrBlocks = [[],[],[],[],[],[],[]];
    var block;
    var printer = new Printer();
    var matSinHr = [];
    
    horario.attrib = {

        "prof" : true,
        "seccion" : true,
        "materia" : true,
        "saturday" : true,
        "sunday" : true,
        "prof_sin_horario" : true,
        "caption_prof_sin_horario": 'PROF:',

		"fontColorBlock" 	: 'rgba(0,0,0,1)',
		"fontFamilyBlock" 	: 'verdana',
		"fontStyleBlock" 	: 'normal',
        "fontSizeBlock" 	: 10,

        "fontColorDataHead"	: 'rgba(0,0,0,1)',
		"fontFamilyDataHead": 'verdana',
		"fontStyleDataHead" : 'normal',
        "fontSizeDataHead" 	: 16,

        "fontColorTitle" 	: 'rgba(0,0,0,1)',
        "fontFamilyTitle" 	: 'verdana',
        "fontStyleTitle" 	: 'normal',
        "fontSizeTitle" 	: 12,
        "bgBlock"           : 'rgba(255,255,255,1)',
        "bgBarTitle"        : "rgba(0,0,0,0.2)",
        "colorLnTable"      : 'rgba(0,0,0,0.3)',
        "x"                 : 0,
        "y"                 : 0,
        "heightBlock"       : 100,
        "widthBlock"        : 122,
        "heightBarTitle"    : 30,
        "days"              : ['LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO','DOMINGO'],
        "textChoque"        : "CH"
    };

    function mergeJson(defaults, userDefined){
		var returnObj = {};
		for (var attrname in defaults) {
			returnObj[attrname] = defaults[attrname];
		}
		for (var attrname in userDefined) {
			returnObj[attrname] = userDefined[attrname];
		}
		return returnObj;
	}
    
	var attribObj = (options)? mergeJson(horario.attrib, options) : horario.attrib;

    function setPropertiesDivContainer_(){
        divContainer.style.position = 'absolute';
        divContainer.style.display = 'block';
        divContainer.style.borderStyle = 'groove';
        divContainer.style.backgroundColor = 'rgba(250, 255, 255, 0)';
        divContainer.style.borderWidth = '0px';
        divContainer.appendChild(tableH);
    }

    function setPropertiesTableH_(){
        tableH.setAttribute("border","0px");
        tableH.setAttribute("cellPadding","0px");
        tableH.setAttribute("cellSpacing","0px");
        tableH.style.position = "absolute";
        tableH.style.left = "0px";
        tableH.style.top = "52px";        
        tableH.style.borderWidth ="0px";
        tableH.style.backgroundColor = "rgba(255,255,255,0)";
        tableH.style.borderColor = attribObj.colorLnTable;
    }

    function addDays_(){
        tableH.insertRow(0);
        for(var i=0; i<attribObj.days.length; i++){
            tableH.rows[0].insertCell(i);
            tableH.rows[0].cells[i].innerHTML = attribObj.days[i];
            tableH.rows[0].cells[i].style.textAlign = 'center';
            tableH.rows[0].cells[i].style.fontColor = attribObj.fontColorTitle;
            tableH.rows[0].cells[i].style.fontFamily = attribObj.fontFamilyTitle;
            tableH.rows[0].cells[i].style.fontSize = attribObj.fontSizeTitle + 'px';
            tableH.rows[0].cells[i].style.fontStyle = attribObj.fontStyleTitle;
            tableH.rows[0].cells[i].style.backgroundColor = attribObj.bgBarTitle;
            tableH.rows[0].cells[i].style.borderStyle = 'solid';
            tableH.rows[0].cells[i].style.borderWidth = '1px';
            tableH.rows[0].cells[i].style.width = attribObj.widthBlock + 'px';
            tableH.rows[0].cells[i].style.height = attribObj.heightBarTitle + 'px';
        }
    }
    
    function setDataBlock_(block, materia, seccion, prof, hora, aula){
        block.innerHTML ='<br>'+materia+'<br>"'+seccion+'"<br>'+prof+'<br>'+hora+'<br>'+aula+'<br>';
        if(!attribObj.prof && !attribObj.seccion && !attribObj.materia) {
            block.innerHTML ='<br>'+hora+'<br>'+aula+'<br>';
        }
        if(!attribObj.prof && !attribObj.seccion && attribObj.materia) {
             block.innerHTML ='<br>'+materia+'<br>'+hora+'<br>'+aula+'<br>';
        }
        if(!attribObj.prof && attribObj.seccion && !attribObj.materia) {
            block.innerHTML ='<br>"'+seccion+'"<br>'+hora+'<br>'+aula+'<br>';
        }
        if(!attribObj.prof && attribObj.seccion && attribObj.materia) {
            block.innerHTML ='<br>'+materia+'<br>"'+seccion+'"<br>'+hora+'<br>'+aula+'<br>';
        }
        if(attribObj.prof && !attribObj.seccion && !attribObj.materia) {
            block.innerHTML ='<br>'+prof+'<br>'+hora+'<br>'+aula+'<br>';
        }
        if(attribObj.prof && !attribObj.seccion && attribObj.materia) {
            block.innerHTML ='<br>'+materia+'<br>'+prof+'<br>'+hora+'<br>'+aula+'<br>';
        }
        if(attribObj.prof && attribObj.seccion && !attribObj.materia) {
            block.innerHTML ='<br>"'+seccion+'"<br>'+prof+'<br>'+hora+'<br>'+aula+'<br>';
        }
    }

    function getBlock_(materia, seccion, prof, hora, aula){
        var b = document.createElement('div');
        setDataBlock_(b, materia, seccion, prof, hora, aula);
        b.style.display = 'block';
        b.style.position = 'relative';
        b.style.width = attribObj.widthBlock + 'px';
        //b.style.height = attribObj.heightBlock + 'px';
        b.style.backgroundColor = attribObj.bgBlock;
        b.style.borderWidth = '1px';
        b.style.borderStyle = 'groove';
        b.style.fontColor = attribObj.fontColorBlock;
        b.style.fontFamily = attribObj.fontFamilyBlock;
        b.style.fontSize = attribObj.fontSizeBlock + 'px';
        b.style.fontStyle = attribObj.fontStyleBlock;
        b.style.textAlign = 'center';
        return b;    
    }

    function setCollision_(f,c){
        if(!arrBlocks[c][f].choque){
            var dc = document.createElement('div');
            dc.style.display = 'block';
            dc.style.position = 'absolute';
            dc.style.left = '1px';
            dc.style.top = '0px';
            dc.style.width = '20px';
            dc.style.height = '20px';
            dc.style.backgroundColor = "rgba(255,255,255,0)";
            dc.style.borderWidth = '0px';
            dc.style.borderStyle = 'groove';
            dc.style.fontColor = attribObj.fontColorBlock;
            dc.style.fontFamily = attribObj.fontFamilyBlock;
            dc.style.fontSize = attribObj.fontSizeBlock + 'px';
            dc.style.fontStyle = attribObj.fontStyleBlock;
            dc.style.textAlign = 'left';
            dc.innerHTML = attribObj.textChoque.bold();
            arrBlocks[c][f].appendChild(dc);
            //arrBlocks[c][f].innerHTML+=attribObj.textChoque.bold();
            arrBlocks[c][f].choque=true;
        }
    }

    function isCollision_(b1, b2){
        if(b1.idHr === b2.idHr){ return true; }
        var h11 = parseInt(b1.hr1.substr(0,2),10);
        var h12 = parseInt(b1.hr2.substr(0,2),10);
        var h21 = parseInt(b2.hr1.substr(0,2),10);
        var h22 = parseInt(b2.hr2.substr(0,2),10);
        if(h11 < 7) h11+=12;
        if(h12 < 7) h12+=12;
        if(h21 < 7) h21+=12;
        if(h22 < 7) h22+=12;        
        if(h11 <  h22 && h11 > h21) { return true; }
        if(h11 > h21 && h12 <= h22){ return true; }
        if(h11 <  h21 && h12 >  h21){ return true; }
        return false;
    }

    function checkCollision_(){
        for(var c = 0; c < arrBlocks.length; c++){
            for(var f = 0; f < arrBlocks[c].length - 1; f++){
                if(isCollision_(arrBlocks[c][f], arrBlocks[c][f+1])){
                    setCollision_(f,c);
                    setCollision_(f+1,c);
                }
            }
        }
    }

    function orderBlocks_(){
        for(var c = 0; c < arrBlocks.length; c++){
            for(var f1 = 0; f1 < arrBlocks[c].length; f1++){
                for(var f2 = 0; f2 < arrBlocks[c].length - 1; f2++){
                    if(arrBlocks[c][f1].idHr < arrBlocks[c][f2].idHr){
                        var aux = arrBlocks[c][f1];
                        arrBlocks[c][f1] = arrBlocks[c][f2];
                        arrBlocks[c][f2] = aux;
                    }
                }    
            }
        }
    }

    function addBlock_(dia, mat, sec, prof, hr1, hr2, aula, idHr) {
        block = getBlock_(mat, sec, prof, hr1+'-'+hr2, aula);
        block.dia = dia;
        block.hr1 = hr1;
        block.hr2 = hr2;
        block.mat = mat;
        block.aula = aula;
        block.prof = prof;
        block.sec = sec;
        block.idHr = idHr;
        block.sts = true;
        block.choque = false;     
        arrBlocks[dia].push(block);
    }

    function addBlockFull_(dia, mat, sec, prof, hr, aula, idHr) {
        block = getBlock_(mat, sec, prof, hr, aula, idHr);
        block.dia = dia;
        var arrhr = hr.split("-");
        block.hr1 = arrhr[0].trim();
        block.hr2 = arrhr[1].trim();
        block.mat = mat;
        block.aula = aula;
        block.prof = prof;
        block.sec = sec;
        block.idHr = idHr;
        block.sts = true;
        block.choque = false;     
        arrBlocks[dia].push(block);
    }

    function isProf(prof) {
        if(!prof) {
            attribObj.heightBlock -= 20;
        }
    }
    
    function isSeccion(seccion) {
        if(!seccion) {
            attribObj.heightBlock -= 20;
        }
    }
    
    function isMateria(materia) {
        if(!materia) {
            attribObj.heightBlock -= 20;
        }
    }

    function isSaturday(saturday) {
        if(!saturday) {
            var index = attribObj.days.indexOf("SABADO");
            attribObj.days.splice(index,1);
        }
    }

    function isSunday(sunday) {
        if(!sunday) {
            var index = attribObj.days.indexOf("DOMINGO");
            attribObj.days.splice(index,1);
        }
    }
    
    function fusionBlocks_(){
        for(var c = 0; c < arrBlocks.length; c++){
            for(var f = 0; f < arrBlocks[c].length; f++){
                for(var f1 = 0; f1 < arrBlocks[c].length - 1; f1++){
                    if(arrBlocks[c][f1].mat === arrBlocks[c][f1+1].mat && arrBlocks[c][f1].aula === arrBlocks[c][f1+1].aula && arrBlocks[c][f1].sec === arrBlocks[c][f1+1].sec){
                        arrBlocks[c][f1].hr2 = arrBlocks[c][f1+1].hr2;
                        setDataBlock_(arrBlocks[c][f1], arrBlocks[c][f1].mat, arrBlocks[c][f1].sec, arrBlocks[c][f1].prof,
                                      arrBlocks[c][f1].hr1+'-'+arrBlocks[c][f1].hr2, arrBlocks[c][f1].aula);
                        arrBlocks[c].splice([f1+1],1);
                    }
                }
            }
        }
        checkCollision_();
    }

    this.setJson = function(j1,j2){
        j1.data[8] = [];
        for(var x = 0; x < j1.data[3].length; x++) {
            for(var y = 0; y < j2.data[0].length; y++) {
                if(j1.data[3][x] == j2.data[0][y]) {
                    j1.data[8][x] = j2.data[1][y];
                }
            }
        }
        
        for(var i=0; i < j1.data[0].length; i++) {
            if(j1.data[8][i]!=undefined && j1.data[8][i]!=null && j1.data[8][i]!='' && j1.data[8][i]!=0 && j1.data[8][i]!='0')
                addBlockFull_(j1.data[2][i]-1, j1.data[0][i], j1.data[1][i], j1.data[7][i], j1.data[8][i], j1.data[4][i], j1.data[3][i]);
            else{
                if(attribObj.prof_sin_horario)
                    matSinHr[matSinHr.length] = j1.data[0][i] + ' - SEC:'.bold() + j1.data[1][i] + ' - '+attribObj.caption_prof_sin_horario.bold()+ j1.data[7][i];    
                else  
                    matSinHr[matSinHr.length] = j1.data[0][i] + ' - SEC:'.bold() + j1.data[1][i];    
            }
        }
    };

    this.setDataHead = function(carrera, periodo, ci, nombre, apellido){
        var d = document.createElement('div');
        d.style.display = 'block';
        d.style.position = 'absolute';
        d.style.width = '800px';
        d.style.height = '40px';
        d.style.left = '10px';
        d.style.top =  '10px';
        d.style.backgroundColor = "rgba(0,0,0,0)";
        d.style.borderWidth = '0px';        
        d.style.fontColor = attribObj.fontColorDataHead;
        d.style.fontFamily = attribObj.fontFamilyDataHead;
        d.style.fontSize = attribObj.fontSizeDataHead + 'px';
        d.style.fontStyle = attribObj.fontStyleDataHead;
        d.innerHTML = " Periodo: "+periodo+"&nbsp;&nbsp;&nbsp;&nbsp;Carrera: "+ carrera+"<br>"+" Cedula : "+ci+" &nbsp;&nbsp;&nbsp;&nbsp;Nombre: "+nombre+"  "+apellido;
        d.style.textAlign = 'left';
        divContainer.appendChild(d);
    };

    this.setDataHeadWithObject = function(arrObject){
        var d = document.createElement('div');
        d.style.display = 'block';
        d.style.position = 'absolute';
        d.style.width = '900px';
        d.style.height = '40px';
        d.style.left = '10px';
        d.style.top =  '10px';
        d.style.backgroundColor = "rgba(0,0,0,0)";
        d.style.borderWidth = '0px';        
        d.style.fontColor = attribObj.fontColorDataHead;
        d.style.fontFamily = attribObj.fontFamilyDataHead;
        d.style.fontSize = attribObj.fontSizeDataHead + 'px';
        d.style.fontStyle = attribObj.fontStyleDataHead;
        d.style.textAlign = 'left';
        if(arrObject.length > 4) {
            d.style.height = '60px';
            tableH.style.top = "72px";   
        }

        if(arrObject.length >= 6) {
            d.style.height = '80px';
            tableH.style.top = "92px";   
        }
        
        for(var p = 0; p < arrObject.length; p++) {
            var divaux = document.createElement('div');
            divaux.innerHTML = arrObject[p].title + arrObject[p].data.bold();
            divaux.style.display = 'block';
            divaux.style.position = 'absolute';
            divaux.style.left = arrObject[p].x + 'px';
            divaux.style.top =  arrObject[p].y + 'px';
            d.appendChild(divaux);
        }
        divContainer.appendChild(d);
    };

    this.addBlock = function(dia, mat, sec, prof, hr1, hr2, aula){
    	addBlock_(dia, mat, sec, prof, hr1, hr2, aula);
    };
    
    this.addBlockFull = function(dia, mat, sec, prof, hr, aula){
        addBlockFull_(dia, mat, sec, prof, hr, aula);
    };
    
    this.show = function() {
        function  getDiv(){
            var dm = document.createElement('div');
            dm.style.position  = 'absolute';
            dm.style.backgroundColor = 'rgba(0,0,0,0)';
            dm.style.color = 'black';
            dm.style.fontSize = '12px';
            dm.style.fontFamily = 'verdana';
            dm.style.width ='100%';
            dm.align = 'justify';
            return dm;    
        }

        orderBlocks_();
        fusionBlocks_();
        var h = [];
        var th = attribObj.heightBarTitle*3; 
        for(var c = 0; c < arrBlocks.length; c++)
            for(var f = 0; f < arrBlocks[c].length; f++){h[f]=attribObj.heightBlock;};  
        for(var c = 0; c < arrBlocks.length; c++){
            for(var f = 0; f < arrBlocks[c].length; f++){                
                if(tableH.rows.length - 1 <= f){
                    tableH.insertRow(f+1);
                    for(var col=0; col < 7; col++){ tableH.rows[f+1].insertCell(col); };
                    tableH.rows[f+1].cells[c].appendChild(arrBlocks[c][f]);
                    //tableH.rows[f+1].cells[c].style.height = attribObj.heightBlock + 'px';
                }
                else{
                    tableH.rows[f+1].cells[c].appendChild(arrBlocks[c][f]);
                    //tableH.rows[f+1].cells[c].style.height = attribObj.heightBlock + 'px';
                }
                document.body.appendChild(divContainer);
                if(arrBlocks[c][f].clientHeight > h[f]){
                    h[f] = arrBlocks[c][f].clientHeight;
                }
                if(h[f])
                    th+=h[f];
                document.body.removeChild(divContainer);
            }
        }
        for(var c = 0; c < arrBlocks.length; c++){
            for(var f = 0; f < arrBlocks[c].length; f++){
                arrBlocks[c][f].style.height=h[f]+'px';
                
            }
        }
        if(matSinHr.length > 0){
            var d = getDiv();
            d.innerHTML = 'MATERIAS SIN HORARIO:'.bold();
            d.style.top = th + 'px';
            th+=20;
            divContainer.appendChild(d);
            for(var i=0; i<matSinHr.length; i++){
                var dm = getDiv();
                dm.innerHTML = matSinHr[i];
                dm.style.top = th + 'px';
                divContainer.appendChild(dm);
                th+=20;
            }
        }
        printer.previewWidthButton(divContainer.innerHTML, 840, 600,770);
    }

    this.addToBody = function(){
        document.body.appendChild(divContainer);
    }

    this.print = function() {
        var myWindow = window.open("", "myWindow", "width=900,height=600");
        myWindow.document.write(divContainer.innerHTML);
        myWindow.print();
        myWindow.close();
    }

    this.addButton = function() {
        var button = document.createElement('input');
        button.type = 'button';
        button.value = 'imprimir';
        button.onclick = function () {
            horario.print();
        }
        document.body.appendChild(button);
    }
    
    isProf(attribObj.prof);
    isSeccion(attribObj.seccion);
    isMateria(attribObj.materia);
    isSaturday(attribObj.saturday);
    isSunday(attribObj.sunday);
    setPropertiesTableH_();
    setPropertiesDivContainer_();
    addDays_();
}