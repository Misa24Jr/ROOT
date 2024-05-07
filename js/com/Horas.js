var Horas = class{    
    constructor(options){
        this.map = new Map();
        this.mapSinHr = new Map();
        this.tableSinHorario = document.createElement('table');
        this.idHr = [];
        var getTable = function(){
            let table = document.createElement('table');
            table.setAttribute("border","0");
            table.setAttribute("cellPadding","0");
            table.setAttribute("cellSpacing","0");
            table.style.position = "relative";
            table.style.left = "0px";
            table.style.top = "0px";        
            table.style.borderWidth ="0px";
            table.style.backgroundColor = "rgba(255,255,255,0)";
            table.style.borderColor = "rgba(0,0,0,0)";
            return table;
        }
        this.horas = document.createElement('div');
        this.tables = [getTable(),getTable(),getTable(),getTable(),getTable(),getTable(),getTable()];
        this.tableH = getTable();
        for(let r=0; r<2; r++){
            this.tableH.insertRow(r);
            for(let i=0; i<7; i++)
                this.tableH.rows[r].insertCell(i);
        }
        this.isShow = true;
        this.objProperties = {
            name : 'Horas',
            id : '',
            x : 0,
            y : 0,
            hrxTipo : null,
            hrxAlumno : null,
            width : 640,
            height : 340,
            days : ['LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO','DOMINGO'],
            backgroundColor : 'rgba(240,240,240,1)',
            borderStyle : 'solid',
            borderColor : 'rgba(0,0,0,0.2)',
            borderWidth : 'thin',
            color : 'rgba(0,0,0,1)',
            fontFamily : 'verdana',
            fontSize : 10,
            fontStyle : 'normal',
            fontWeight : 'bold',
            zoom : 0
        }        
        this.setProperties(options);
    }

    setProperties(prop){
        this.horas.innerHTML='';
        for(var attrname in prop) { this.objProperties[attrname] = prop[attrname]};        
        this.horas.style.position = 'absolute';
        this.horas.style.left = this.objProperties.x + 'px';
        this.horas.style.top = this.objProperties.y + 'px';
        this.horas.style.width = this.objProperties.width + 'px';
        this.horas.style.height = this.objProperties.height + 'px';
        this.horas.style.borderWidth = this.objProperties.borderWidth;
        this.horas.style.borderColor = this.objProperties.borderColor;
        this.horas.style.borderStyle = this.objProperties.borderStyle;
        this.horas.style.backgroundColor = this.objProperties.backgroundColor;
        this.horas.style.color = this.objProperties.color;
        this.horas.style.fontFamily = this.objProperties.fontFamily;
        this.horas.style.fontSize = this.objProperties.fontSize+'px';
        this.horas.style.fontStyle = this.objProperties.fontStyle;
        this.horas.style.fontWeight = this.objProperties.fontWeight;
        this.horas.style.overflow = 'auto';
        
        for(var i=0; i<this.objProperties.days.length; i++){     
            this.tableH.rows[0].cells[i].style.width=(this.objProperties.width/this.objProperties.days.length)+'px';
            this.tableH.rows[0].cells[i].style.height=this.objProperties.height*0.1+'px';
            this.tableH.rows[0].cells[i].style.lineHeight=this.objProperties.height*0.1+'px';
            this.tableH.rows[0].cells[i].style.fontSize=this.objProperties.fontSize+'px';
            this.tableH.rows[0].cells[i].style.fontWeight=this.objProperties.fontWeight;
            this.tableH.rows[0].cells[i].style.textAlign='center';
            this.tableH.rows[0].cells[i].innerHTML = this.objProperties.days[i];
            this.tableH.rows[1].cells[i].appendChild(this.tables[i]);
            this.tableH.rows[1].cells[i].align = 'center';
            this.tableH.rows[1].cells[i].vAlign = 'top';
        }  
        this.horas.appendChild(this.tableH);
        return this;
    }

    getBox(prop){
        var c = document.createElement('div');
        var objProp = {            
            position : 'relative',
            left : '0px',
            top : '0px',
            width : this.objProperties.width/this.objProperties.days.length,
            backgroundColor : 'rgba(0,0,0,0)',
            fontFamily : this.objProperties.fontFamily,
            fontSize : this.objProperties.fontSize + 'px',
            fontWeight : this.objProperties.fontWeight,
            color : this.objProperties.color,
            textAlign : 'center',
            borderStyle : 'none',
            borderColor : 'rgba(0,0,0,0)',
            borderWidth : 'none',
            innerHTML : ''        
        }
        for(var attrname in prop) { objProp[attrname] = prop[attrname]};
        c.style.position = objProp.position;
        c.style.width = objProp.width;
        c.style.height = objProp.height;
        c.style.lineHeight = objProp.lineHeight;
        c.style.backgroundColor = objProp.backgroundColor;
        c.style.fontFamily = objProp.fontFamily;
        c.style.fontSize = objProp.fontSize;
        c.style.fontWeight = objProp.fontWeight;
        c.style.color = objProp.color;
        c.style.textAlign = objProp.textAlign;
        c.style.left = objProp.left;
        c.style.top = objProp.top;
        c.style.borderStyle = objProp.borderStyle;
        c.style.borderColor = objProp.borderColor;
        c.style.borderWidth = objProp.borderWidth;
        c.innerHTML = objProp.innerHTML; 
        c.idHr = prop.idHr;
        c.left = prop.left;
        c.top = prop.top;
        c.cod = prop.cod;
        c.mat = prop.mat;
        c.secc = prop.secc;
        c.aula = prop.aula;
        c.prof = prop.prof;
        c.hrs = prop.hrs;
        c.hc = prop.hc;
        c.aux = prop.aux;
        c.dia = prop.dia;
        c.objProp = prop;
        return c;    
    }
    
    getRowByIdHr(idHr){
        for(var i=0; i<this.objProperties.hrxTipo.data[0].length; i++){
            if(parseInt(idHr,10)===parseInt(this.objProperties.hrxTipo.data[0][i], 10))
  		        return i;
  	    }
  	    return -1;
    }

    getHoraByIdhr(idHr){
        for(var i=0; i<this.objProperties.hrxTipo.data[0].length; i++){
            if(this.objProperties.hrxTipo.data[0][i]===idHr)
                return this.objProperties.hrxTipo.data[1][i];
        }
        return null;
    }

    getIdHrByHora(hr){
        for(var i=0; i<this.objProperties.hrxTipo.data[0].length; i++){
            if(this.objProperties.hrxTipo.data[1][i]===hr)
                return this.objProperties.hrxTipo.data[0][i];
        }
        return null;
    }

    mappingData(mapping){
        for(var i=0; i<this.objProperties.hrxAlumno.data[0].length; i++){
            var idHrx = this.objProperties.hrxAlumno.data[mapping.idHr][i];
            this.addBlock({
                idHr : this.objProperties.hrxAlumno.data[mapping.idHr][i], 
                dia : this.objProperties.hrxAlumno.data[mapping.dia][i], 
                cod : this.objProperties.hrxAlumno.data[mapping.cod][i], 
                mat : this.objProperties.hrxAlumno.data[mapping.mat][i], 
                secc : this.objProperties.hrxAlumno.data[mapping.secc][i], 
                prof : this.objProperties.hrxAlumno.data[mapping.prof][i], 
                aula : this.objProperties.hrxAlumno.data[mapping.aula][i], 
                hrs : this.objProperties.hrxTipo.data[1][this.getRowByIdHr(idHrx)],
                hc : this.objProperties.hrxAlumno.data[mapping.hc][i]
            })
        }
        return this;
    }

    showSinHorario(){
        if(this.mapSinHr.size > 0){
            this.tableSinHorario.innerHTML = '';
            this.tableSinHorario.id = 'tableSinHorario';
            this.tableSinHorario.setAttribute("border","1px");
            this.tableSinHorario.setAttribute("cellPadding","0px");
            this.tableSinHorario.setAttribute("cellSpacing","0px");
            this.tableSinHorario.style.position = "relative";
            this.tableSinHorario.style.top = '0px';
            this.tableSinHorario.style.left = "0px";
            this.tableSinHorario.style.overflow = 'auto';
            this.tableSinHorario.style.width = (this.objProperties.width-40)+'px';        
            this.tableSinHorario.align = 'center';
            this.tableSinHorario.vAlign = 'top';
            this.tableSinHorario.style.borderWidth ="thin";
            this.tableSinHorario.style.backgroundColor = "rgba(255,255,255,0)";
            this.tableSinHorario.style.borderColor = "rgba(100,100,100,0.1)";
            this.tableSinHorario.insertRow(0);
            this.tableSinHorario.insertRow(1);
            this.tableSinHorario.rows[0].insertCell(0);
            
            this.tableSinHorario.rows[0].cells[0].style.backgroundColor = "rgba(255,255,0,0.1)";
            this.tableSinHorario.rows[0].cells[0].innerHTML = 'Materias sin Horario';
            this.tableSinHorario.rows[0].cells[0].style.textAlign = 'center';
            this.tableSinHorario.rows[0].cells[0].style.fontSize = '12px';
            this.tableSinHorario.rows[0].cells[0].style.fontWeight = 'bold';
            var i=0;
            for (let [k, v] of this.mapSinHr) {
                this.tableSinHorario.rows[1].insertCell(i);
                this.tableSinHorario.rows[1].cells[i].style.backgroundColor = "rgba(255,255,255,0)";
                this.tableSinHorario.rows[1].cells[i].style.width = (this.objProperties.width/this.objProperties.days.length) + 'px';
                v.style.width = (this.objProperties.width/this.objProperties.days.length) + 'px';
                v.style.position = 'relative';
                v.hrs = '';
                this.paintBlock(v);
                this.tableSinHorario.rows[1].cells[i].appendChild(v);
                i++;  
            }
            this.horas.appendChild(this.tableSinHorario);
        }
    }

    showBlocks(){
        for (let [k, v] of this.map) {        
            let dia = parseInt(v.dia, 10) - 1;
            let r = this.tables[dia].rows.length;
            this.tables[dia].insertRow(r);
            this.tables[dia].rows[r].insertCell(0);
            this.paintBlock(v);
            this.tables[dia].rows[r].cells[0].appendChild(v);
            this.tables[dia].rows[r].cells[0].prop = v.objProp;
        }        
        this.showSinHorario();
        return this;
    }
    
    clean(){
    	for (let [k, v] of this.map){
    		this.deleteBlock(v.objProp);
    	}
    	for (let [k, v] of this.mapSinHr)
    		this.deleteBlock(v.objProp);   
    }
    
    getTotalHC(){
    	let m = new Map()
    	let t = 0;
    	for (let [k, v] of this.map){
    		m.set(v.cod, v);
    	}
    	for (let [k, v] of this.mapSinHr){
    		m.set(v.cod, v);
    	}
    	for (let [k, v] of m){
    		t+=parseInt(v.hc,10);
    	}
    	return t;
    }
    
    deleteBlock(prop){
        var row = this.getRowByIdHr(prop.idHr);
        var dia = 0;
        if(row>-1) {
            dia = parseInt(prop.dia, 10) - 1;
            //prop.dia = dia;
        }
        if(row > -1){
	        var ch = this.checkChoque(this.map.get(prop.cod + prop.aula + prop.secc + dia)) 
	        if(ch.sts){	        	
	        	ch.blq1.style.backgroundColor = 'rgba(200,200,20,0.1)';
	        	ch.blq2.style.backgroundColor = 'rgba(200,200,20,0.1)';
	        	ch.blq1.style.color = this.objProperties.color;
	        	ch.blq2.style.color = this.objProperties.color;
	        }
        }
        var v = null;
        if(row===-1){
            v = this.mapSinHr.get(prop.cod + prop.aula + prop.secc);
            if(v){
            	v.innerHTML = '';
                this.mapSinHr.delete(prop.cod + prop.aula + prop.secc);
                this.tableSinHorario.innerHTML = '';              
                var clave1 = prop.cod + prop.aula + prop.secc;
                let r = this.tables[dia].rows.length-1;
                for(let rr=0; rr<=r; rr++){
                	let p = this.tables[dia].rows[rr].cells[0].prop;
                	let clave2 = p.cod + p.aula + p.secc;
                	if(clave1===clave2){
                		this.tables[dia].rows[rr].cells[0].removeChild(v);
                		break;
                	}
                }	
            }
        }    
        else{
            v = this.map.get(prop.cod + prop.aula + prop.secc + dia);    
            if(v){    
            	v.innerHTML = '';
            	this.map.delete(prop.cod + prop.aula + prop.secc + dia);               
                
                //var clave1 = v.cod + v.aula + v.secc + v.dia;    
                for(let f=0; f<7; f++){
                	let r = this.tables[f].rows.length;
	                for(let rr=0; rr<r; rr++){
	                	//let p = this.tables[dia].rows[rr].cells[0].prop;
	                	//let clave2 = p.cod + p.aula + p.secc + p.dia;
	                	//if(clave1===clave2){
	                		this.tables[f].deleteRow(0);
	                		//break;
	                	//}
	                }
                }
                /*
                var cont =0
                for (let [k, v] of this.map) {        
                    let dia = parseInt(v.dia, 10)-1;
                    console.log(this.tables[dia].rows[cont].cells[0]);
                    cont++;
                }
                */
            }
        }
        this.showBlocks();
        return this;
    }
    
    findBlock(prop){
    	var dia = 0;
    	var row = this.getRowByIdHr(prop.idHr);
        if(row>-1) {
            dia = parseInt(prop.dia, 10) - 1;
            var m = this.map.get(prop.cod + prop.aula + prop.secc + dia);
            if(m)
            	return  m
            else
            	return null;
        }
        else{
        	var m = this.mapSinHr.get(prop.cod + prop.aula + prop.secc);
            if(m)
            	return  m
            else
            	return null;        	
        }      
    }
    
    checkChoque(blq){
    	for (let [k, v] of this.map) {     
    		if(v.hrs && blq.hrs){
	    		var hinit1 = parseFloat(v.hrs.substr(0,2) + '.' + v.hrs.substr(3,2));
	            var hfin1 = parseFloat(v.hrs.substr(8,2) + '.' + v.hrs.substr(11,2));
	            if(hinit1 < 7 ){hinit1+=12};
	            if(hfin1 < 7 ){hfin1+=12};	            
	            var hinit2 = parseFloat(blq.hrs.substr(0,2) + '.'  + blq.hrs.substr(3,2));
	            var hfin2 = parseFloat(blq.hrs.substr(8,2) + '.'  + blq.hrs.substr(11,2));
	            if(hinit2 < 7 ){hinit2+=12}
	            if(hfin2 < 7 ){hfin2+=12}
	            if(blq.cod != v.cod && blq.dia === v.dia)
	            	if(hinit2 === hinit1 || hfin2 === hfin1 || (hinit2 > hinit1 && hinit2 < hfin1) || (hfin2 > hinit1 && hfin2 < hfin1) || (hinit2 < hinit1 && hfin2 > hinit1))
	            		return {sts: true, choque : v.hrs + ' => ' + blq.hrs, mats : v.mat + ' => ' +blq.mat, blq1 : blq, blq2 : v};
    		}
    	}
    	return {sts:false};
    }
    
    addBlock(prop){  
        var row = this.getRowByIdHr(prop.idHr);
        var dia = 0;
        if(row>-1) {
            dia = parseInt(prop.dia, 10) - 1;
            //prop.dia = dia;
        }   
        var b = this.getBlock(prop);
        var ch = this.checkChoque(b);        
        if(ch.sts){
        	ch.blq1.style.backgroundColor = 'red';
        	ch.blq2.style.backgroundColor = 'red';
        	ch.blq1.style.color = 'white';
        	ch.blq2.style.color = 'white';
        }
        if(row===-1)
            this.mapSinHr.set(prop.cod + prop.aula + prop.secc, b);
        else{
            var ds = this.map.get(prop.cod + prop.aula + prop.secc + dia);            
            if(!ds){   
                this.map.set(prop.cod + prop.aula + prop.secc + dia, b);
            }
            else{                
                var hi1 = parseFloat(ds.hrs.substr(0,2) + '.' + ds.hrs.substr(3,2));
                var hf1 = parseFloat(ds.hrs.substr(8,2) + '.' + ds.hrs.substr(11,2));
                var hi2 = parseFloat(prop.hrs.substr(0,2) + '.'  + prop.hrs.substr(3,2));
                var hf2 = parseFloat(prop.hrs.substr(8,2) + '.'  + prop.hrs.substr(11,2));                
                if(hi1 < 7 ){hi1+=12}
                if(hi2 < 7 ){hi2+=12}
                if(hf1 < 7 ){hf1+=12}
                if(hf2 < 7 ){hf2+=12}
                var hInit = '';
                var hFin = '';
                if(hi1 > hi2)
                    hInit = prop.hrs.substr(0,2)+':'+prop.hrs.substr(3,2);
                else
                    hInit = ds.hrs.substr(0,2)+':'+ds.hrs.substr(3,2); 
                if(hf2 > hf1)
                    hFin = prop.hrs.substr(8,2)+':'+prop.hrs.substr(11,2);
                else
                    hFin = ds.hrs.substr(8,2)+':'+ds.hrs.substr(11,2);
                ds.hrs = hInit+' - '+hFin;
                    
                if(ch.sts){
                	ds.style.backgroundColor = 'red';
                	ds.style.color = 'white';
                }
            }
        } 
        return this;
    }

    paintBlock(objProp){        
        var linea = '';
        if(objProp.cod!='')
            linea = objProp.cod;
        if(objProp.mat!='')
            linea = objProp.cod+'<br>'+objProp.mat;
        if(objProp.secc!='')
            linea = objProp.cod+'<br>'+objProp.mat+'<br>'+objProp.secc;
        if(objProp.aula!='')
            linea = objProp.cod+'<br>'+objProp.mat+'<br>"'+objProp.secc+'"<br>'+objProp.aula;
        if(objProp.prof!='')
            linea = objProp.cod+'<br>'+objProp.mat+'<br>"'+objProp.secc+'"<br>'+objProp.aula+'<br>'+objProp.prof;
        if(objProp.hrs!='')
            linea = objProp.cod+'<br>'+objProp.mat+'<br>"'+objProp.secc+'"<br>'+objProp.aula+'<br>'+objProp.prof+'<br>'+objProp.hrs;
        if(objProp.hc!='')
            linea = objProp.cod+'<br>'+objProp.mat+'<br>"'+objProp.secc+'"<br>'+objProp.aula+'<br>'+objProp.prof+'<br>'+objProp.hrs+'<br>'+objProp.hc+"HC";
        if(objProp.aux!='')
            linea = objProp.cod+'<br>'+objProp.mat+'<br>"'+objProp.secc+'"<br>'+objProp.aula+'<br>'+objProp.prof+'<br>'+objProp.hrs+'<br>'+objProp.hc+'HC<br>'+objProp.aux;        
        objProp.innerHTML = linea;
    }

    getBlock(prop){        
        var objProp={
            id : '',
            height : 'none',
            lineHeight : (10+this.objProperties.zoom)+'px',
            backgroundColor : 'rgba(200,200,20,0.1)',
            borderStyle : 'solid',
            borderColor : 'rgba(0,0,0,0.1)',
            borderWidth : 'thin',
            fontSize : (8+this.objProperties.zoom)+'px',
            fontWeight : 'normal',
            textAlign : 'center',
            dia : -1,
            idHr : -1,
            left : '0px',
            top : '0px',
            cod : '',
            mat : '',
            secc : '',
            aula : '',
            prof : '',
            hrs : '',
            hc : '',
            aux : '',
            innerHTML : ''
        }
        for(var attrname in prop) { objProp[attrname] = prop[attrname]};
        var p = this.getBox(objProp);
        return p
    }

    zoomBlock(value){
        this.objProperties.zoom = value;
        for (let [k, v] of this.map){
            v.style.lineHeight = (10+this.objProperties.zoom)+'px';
            v.style.fontSize = (8+this.objProperties.zoom)+'px';
        }
        for (let [k, v] of this.mapSinHr){
            v.style.lineHeight = (10+this.objProperties.zoom)+'px';
            v.style.fontSize = (8+this.objProperties.zoom)+'px';
        }
        return this;
    }

    getListBlocks(){
        var list = [];
        for(let item of this.map){
            list.push(item[1])
        }
        return list;
    }

    getListSinHorario(){
        var list = [];
        for(let item of this.mapSinHr){
            list.push(item[1])
        }
        return list;
    }

    getObjectPanel(){
        return this.horas;
    }
    
	show(){
		this.horas.style.display = 'block';
        this.isShow = true;
        return this;
    }

	hide(){
		this.horas.style.display = 'none';
		this.isShow = false;
		return this;
    }
    
    setDimension(w, h){
		this.objProperties.width = w;
		this.objProperties.height = h;
		this.horas.style.width = this.objProperties.width + 'px';
        this.horas.style.height = this.objProperties.height + 'px';
		return this;
	}
    
    setPosition(x, y){
    	this.horas.style.position = 'absolute';
		this.objProperties.x = x;
		this.objProperties.y = y;
		this.horas.style.left = this.objProperties.x + 'px';
        this.horas.style.top = this.objProperties.y + 'px';
		return this;
	}
	
	addToBody(){ 
		document.body.appendChild(this.horas);
		return this; 
	}
}