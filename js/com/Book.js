function Book(options){  
    var book = this;
    var itemPage = 0;
    var t = document.createElement('table');
    var pages = [];
    var d = document.createElement('div');
    var imgPrinter = document.createElement('img');
    var imgCancel = document.createElement('img');
    var imgCopy = document.createElement('img');
    var editPage =document.createElement('input');
    var totalPage = 0;
    var arrowLeft = document.createElement('input');
    var arrowRight = document.createElement('input');
    var divLabel2 = document.createElement('div');
    var divPanel = document.createElement('div');
    var mouseX=0;
    var mouseY=0;
    var isClick=false; 
    var coordX=0;
    var coordY=0;
    var mx = 0;
    var my = 0;

    function mergeJson_(defaults, userDefined){
        var returnObj = {};
        for(var attrname in defaults) { returnObj [attrname] = defaults [attrname] };
            for(var attrname in userDefined) { returnObj [attrname] = userDefined [attrname];}
        return returnObj;
    }

    function getMouseXY_(e){
	    var IE = document.all ? true : false;
	    if (IE){
	      mouseX = event.clientX;
	      mouseY = event.clientY;
	    }
	    else {
	      mouseX = e.pageX;
	      mouseY = e.pageY;
	    }	    
  	}

    book.defaults = {
        id : '',
        x : 0, 
        y : 0,
        sheetFormat : '', //letter, office, A3, A4, ...
        title : 'REPORTE',
        alignTitle : 'center',
        fontFamilyTitle : 'verdana',
        fontSizeTitle : 16,
        fontColorTitle : 'black',
        fontStyleTitle : 'normal',
        fontWeigthTitle : 'bold',
        titleHeight : 30, 
        bgTitle  : 'rgba(0,0,0,0)',
        footerHeight : 30, 
        bodyWidth : 800,
        bodyHeight : 600,
        borderColor : 'rgba(0,0,0,0.12)',
        borderWidth : 'thin',
        bgPanel : 'rgba(255,255,255,0.9)',
		widthShadow: 10,
		heightShadow: 10,
		blurringShadow:10,
		boxShadowColor: 'rgba(180,180,180,0.8)',
        zIndex	: 1000000000000,
        overflow : 'auto'
    };

    var v = (options)? mergeJson_(book.defaults, options) : book.defaults;

    function setEditPage_(value){
        editPage.value = value;    
    }

    function setTotalPage_(){
        divLabel2.innerHTML = ('de &nbsp &nbsp'+totalPage);
    }

    function printAll_(){
        return new Promise(function(resolve, reject){
        	var p = ';'
        	if(v.sheetFormat===''){
        			p = '<html><head><style type="text/css">  @media print{div{height:1} '+
            	 '@page{margin : 0; border : 0;}'+
                '.saltoDePagina{display:block; page-break-before:always;}}</style></head><body>\n';
        		}
            else{
            	p = '<html><head><style type="text/css">  @media print{div{height:1} '+
            	 '@page{margin : 0; border : 0; size:'+v.sheetFormat+';}'+
                '.saltoDePagina{display:block; page-break-before:always;}}</style></head><body>\n';
            }
            
            var pags = '';
            for(var i=0; i<pages.length; i++){
                if(i > 0){
                    pags+='<div class="saltoDePagina"></div>\n';
                }
                pags+='<div height=100% id=\'d'+i+'\'  style = "position : relative;">\n'+pages[i].getContent()+'\n</div>\n';
            }            
    		p+=pags+'</body></html>';

            var ventimp = window.open('','_blank','width=640, height=480 resizable=yes,scrollbars=yes,status=no');
            ventimp.document.write(p);      
            for(var i=0; i<pages.length; i++){
                ventimp.document.getElementById('d'+i).style.zoom='100%';        
            }
            ventimp.document.close();
            ventimp.onload = function(){
                ventimp.print();
                ventimp.close();
                resolve('ok');
            };
            ventimp.onerror=function(){
                reject('Hubo un error');
            };
        });        
    }

    function print_(){
        printAll_().then(function(msg){
            console.log(msg);
        }, 
        function(msg){
            console.log(msg);
        });
    }

    function priorPage_(){
        showSheet_(itemPage-1);
    }

    function nextPage_(){
        showSheet_(itemPage+1);
    }

    function init_(){
        coordX = v.x;
        coordY = v.y;
        arrowLeft.type = 'button';
        arrowRight.type = 'button';
        arrowLeft.style.position = 'absolute';
        arrowLeft.style.left = '10px';//'10px';
        arrowLeft.style.top = '0px'//(v.bodyHeight/2) + 'px';
        arrowLeft.style.width = '25px';
        arrowLeft.style.height = '30px';
        arrowLeft.style.borderWidth = '0px';
        arrowLeft.style.background = v.bgTitle;
        arrowLeft.style.fontSize = '20px';
        arrowLeft.value = '<';
        arrowLeft.style.color = 'rgba(100,100,100,0.8)';
        arrowLeft.onmouseover = function(e){
            this.style.cursor='pointer';
            this.style.color = 'rgba(0,0,0,1)';
        };

        arrowLeft.onmouseout = function(e){
            this.style.cursor='default';
            this.style.color = 'rgba(100,100,100,0.8)';
        };

        arrowLeft.onclick = priorPage_;
        arrowRight.style.position = 'absolute';
        arrowRight.style.left = '155px'//(v.bodyWidth - 90)+'px';
        arrowRight.style.top = '0%'//(v.bodyHeight/2) + 'px';
        arrowRight.style.width = '25px';
        arrowRight.style.height = '30px';
        arrowRight.style.borderWidth = '0px';
        arrowRight.style.background = v.bgTitle;
        arrowRight.style.fontSize = '20px';
        arrowRight.value = '>';
        arrowRight.style.color = 'rgba(100,100,100,0.8)';
        arrowRight.onmouseover = function(e){
            this.style.color = 'rgba(0,0,0,1)';
            this.style.cursor='pointer';
        };

        arrowRight.onmouseout = function(e){
            this.style.color = 'rgba(100,100,100,0.8)';
            this.style.cursor='default';
        };

        arrowRight.onclick = nextPage_;
        
        imgPrinter.src = 'images/print.png';
        imgPrinter.style.position = 'absolute';
        imgPrinter.style.left = (v.bodyWidth - 65) + 'px';//(v.bodyWidth-100)+'px';
        imgPrinter.style.top = '2px';
        imgPrinter.style.width = '22px';
        imgPrinter.style.height = '22px';
        imgPrinter.onmouseover = function(e){this.style.cursor='pointer';};
        imgPrinter.onmouseout = function(e){this.style.cursor='default';};
        imgPrinter.onclick = print_;

        imgCancel.src = 'images/cancelar.png';
        imgCancel.style.position = 'absolute';
        imgCancel.style.left = (v.bodyWidth - 30) + 'px';//(v.bodyWidth-60)+'px';
        imgCancel.style.top = '2px';
        imgCancel.style.width = '20px';
        imgCancel.style.height = '20px';
        imgCancel.onmouseover = function(e){this.style.cursor='pointer';};
        imgCancel.onmouseout = function(e){this.style.cursor='default';};
        imgCancel.onclick = function(e){d.style.display = 'none';};

        imgCopy.src = 'images/copy.png';
        imgCopy.style.position = 'absolute';
        imgCopy.style.left = (v.bodyWidth - 100) + 'px';//(v.bodyWidth-60)+'px';
        imgCopy.style.top = '2px';
        imgCopy.style.width = '20px';
        imgCopy.style.height = '20px';
        imgCopy.onmouseover = function(e){this.style.cursor='pointer';};
        imgCopy.onmouseout = function(e){this.style.cursor='default';};
        imgCopy.onclick = function(e){
            showFirst_();
            var ps = document.createElement('div');
            var ventimp = window.open('','_blank','');
            for(var i=0; i<pages.length; i++){
                ps.appendChild(pages[i].getPanel());
                nextPage_();
                let av = pages[i].getAvailHeight();
                if (av < 0) av=av*(-1);
                let d = document.createElement('div');
                d.style.position = 'relative';
                d.style.width = '10px';
                d.style.height = (av+50)+'px';
                ps.appendChild(d);                
            }
            ventimp.document.write(ps.innerHTML);
            showFirst_();
        };

        d.style.position = 'absolute';
        d.style.left = v.x + 'px';
        d.style.top = v.y + 'px';
        d.style.backgroundColor = v.bgPanel;
        d.style.width = (20 + v.bodyWidth) + 'px';
        d.style.height = (v.bodyHeight + v.footerHeight +v.titleHeight) + 'px';
        d.style.borderColor = v.borderColor;
        d.style.borderStyle = 'ridge';
        d.style.borderWidth = v.borderWidth+'px';
        d.style.overflow = v.overflow;
        d.style.resize = 'both';         
        
        setShadow_(v.widthShadow, v.heightShadow, v.blurringShadow, v.boxShadowColor);        
        t.setAttribute("border","0");
        t.setAttribute("cellPadding","0");
        t.setAttribute("cellSpacing","0");
        t.insertRow(0);
        t.insertRow(1);
        t.insertRow(2);
        t.rows[0].insertCell(0);
        t.rows[1].insertCell(0);
        t.rows[2].insertCell(0);
        t.style.borderWidth = '0px';
        t.rows[0].cells[0].style.width = v.bodyWidth+'px';
        t.rows[0].cells[0].innerHTML = v.title;
        t.rows[0].cells[0].style.position = 'fixed';
        t.rows[0].cells[0].style.height = v.titleHeight + 'px';
        t.rows[0].cells[0].style.lineHeight = v.titleHeight + 'px';
        t.rows[0].cells[0].style.fontFamily = v.fontFamilyTitle;
        t.rows[0].cells[0].style.fontSize = v.fontSizeTitle + 'px';
        t.rows[0].cells[0].style.color = v.fontColorTitle;
        t.rows[0].cells[0].style.fontStyle = v.fontStyleTitle;
        t.rows[0].cells[0].style.fontWeight = v.fontWeigthTitle;
        t.rows[0].cells[0].style.textAlign = v.alignTitle;        
        t.rows[0].cells[0].style.backgroundColor = 'rgba(0,0,0,0)';
        t.rows[1].cells[0].style.height = v.bodyHeight + 'px';
        t.rows[1].cells[0].style.width = (v.bodyWidth) + 'px';
        t.rows[2].cells[0].style.height = v.footerHeight + 'px';
        //t.rows[2].cells[0].style.backgroundColor = v.bgTitle;
        t.rows[2].cells[0].style.width = v.bodyWidth+'px';
        //t.rows[2].cells[0].align = 'center';

        editPage.style.width = '30px';
        editPage.style.borderWidth = '0px';    
        editPage.style.position = 'absolute';
        editPage.style.textAlign = 'center';  
        editPage.style.fontWeight = 'normal';
        editPage.style.left = '72px';
        editPage.style.top = '6px';
        editPage.style.fontSize = '12px';
        editPage.style.fontFamily = 'verdana';
        editPage.style.backgroundColor = 'rgba(0,0,0,0)';
        editPage.onkeyup = function(){
        		if(!isNaN(editPage.value)){
        			showSheet_(parseInt(editPage.value,10)-1);
        		}
        		else{
        			showSheet_(itemPage);
        		}
        }

        var divLabel1 = document.createElement('div');
        divLabel1.style.position = 'absolute';
        divLabel1.style.width = '50px';
        divLabel1.style.fontFamily = 'verdana';
        divLabel1.style.fontSize = '12px';
        divLabel1.style.height = (v.footerHeight/2)+'px';
        divLabel1.style.backgroundColor = 'rgba(0,0,0,0)';
        divLabel1.innerHTML = 'Pag.';
        divLabel1.style.left = '42px';
        divLabel1.style.top = '6px';

        divLabel2.style.position = 'absolute';
        divLabel2.style.width = '50px';
        divLabel2.style.fontFamily = 'verdana';
        divLabel2.style.fontSize = '12px';
        divLabel2.style.height = (v.footerHeight/2)+'px';
        divLabel2.style.backgroundColor = 'rgba(0,0,0,0)';
        //divLabel2.innerHTML = ('de '+totalPage).bold();
        setTotalPage_();
        divLabel2.style.left = '106px';
        divLabel2.style.top = '6px';
        
        var divTitle = document.createElement('div');
        divTitle.style.position = 'sticky';
        divTitle.style.width = (v.bodyWidth)+'px';
        divTitle.style.fontFamily = 'verdana';
        divTitle.style.backgroundColor = v.bgTitle;
        divTitle.style.fontSize = '12px';
        divTitle.style.height = (v.titleHeight)+'px';
        divTitle.style.left = '0px';
        divTitle.style.top = '0px';
        divTitle.style.zIndex = v.zIndex + 1;        
        
        divPanel.style.position = 'absolute';
        divPanel.style.width = (v.bodyWidth)+'px';
        divPanel.style.backgroundColor = 'rgba(255,255,255,0)';
        divPanel.style.left = '0px';
        divPanel.style.top = v.titleHeight+'px';
        t.rows[1].cells[0].appendChild(divPanel);

        divTitle.appendChild(imgPrinter);
        divTitle.appendChild(imgCancel);
        divTitle.appendChild(imgCopy);
        divTitle.appendChild(divLabel1);
        divTitle.appendChild(divLabel2);
        divTitle.appendChild(editPage);
        divTitle.appendChild(arrowLeft);
        divTitle.appendChild(arrowRight);

        d.appendChild(divTitle);
        d.appendChild(t);       
        
        d.style.zIndex = v.zIndex;

        divTitle.onmouseover = function(e){
            this.style.cursor = 'pointer';
            document.onmousemove = function(e){
                if(isClick){
                    getMouseXY_(e);
                    var diffx = mouseX - mx;
                    var diffy = mouseY - my;
                    coordX = v.x + diffx;
                    coordY = v.y + diffy;
                    setPosition_(coordX, coordY);
                }
            }
            document.onmouseup = function(e){
                //this.style.cursor = 'default';
                isClick=false;
            }
        }
        
        d.onmouseup = function(e){
            this.style.cursor = 'default';
            isClick=false;
        }

        divTitle.onmousedown = function(e){
            getMouseXY_(e);
            mx=mouseX;
            my=mouseY;
            v.x = coordX;
            v.y = coordY;
            isClick=true;                     
        }

        divTitle.onmouseup = function(e){
            isClick=false;            
        }        
    }

    function setPosition_(x,y){
        d.style.left = x + 'px';
        d.style.top = y + 'px';
    }
    
    function getPosition(){
    	return{
    		x : coordX,
    		y : coordY
    	}
    }
    
    function showSheet_(it){/*
        if(it < pages.length && it > -1){
            if(t.rows[1].cells[0].firstChild){
                t.rows[1].cells[0].removeChild(pages[itemPage].getPanel());
            }
            pages[it].show();    
            pages[it].getPanel().style.position = 'relative';
            t.rows[1].cells[0].appendChild(pages[it].getPanel());
            itemPage=it;    
            setEditPage_(it+1);    
        }*/
    	if(it < pages.length && it > -1){
            if(divPanel.firstChild){
            	divPanel.removeChild(pages[itemPage].getPanel());
            }
            pages[it].show();    
            pages[it].getPanel().style.position = 'relative';
            divPanel.appendChild(pages[it].getPanel());
            itemPage=it;    
            setEditPage_(it+1);
        }
    	
    }

    function setDimension_(w, h){
        v.bodyWidth = w;
        v.bodyHeight = h; 
        d.style.width = w + 'px';
        d.style.height = h + 'px';
    }
    
    function showFirst_(){
        showSheet_(0);
    }
    
    function setShadow_(ws, hs, bs, sc){
      v.widthShadow=ws;
      v.heightShadow=hs;
      v.boxShadowColor = sc;
      v.blurringShadow = bs;
      d.style.boxShadow = v.widthShadow + 'px '+ v.heightShadow + 'px ' + v.blurringShadow + 'px ' + v.boxShadowColor;
    }
    
    this.print = function(){
    	 print_();
    	 return this;
    }
    
    this.getDimension = function(){
    	 return {
    	 	width : v.bodyWidth,
    	 	height : v.bodyHeight
    	 }
    }
    
    this.setShadow = function(ws, hs, bs, sc){
    	  setShadow_(ws, hs, bs, sc);
    	  return this;
    }   

    this.setDimension = function(w, h){
        setDimension_(w,h);
        return this;
    }

    this.showFirst = function(){
        showFirst_();    
        return this;
    } 

    this.showNext = function(){
        nextPage_();
        return this;
    }

    this.showPrior = function(){
        priorPage_();
        return this;
    }

    this.showSheet = function(){
        showSheet_(itemPage);
        return this;
    }

    this.addToBody = function(){
        document.body.appendChild(d);
        return this;
    }

    this.show = function(){
        d.style.display = 'block';
        d.style.zIndex = v.zIndex;
        return this;
    }

    this.hide = function(){
        d.style.display = 'none';
        return this;
    }

    this.getSheet = function(idx){
        return pages[idx];
    }

    this.getActualSheet = function(){
        return pages[itemPage];
    }

    this.createSheet = function(orientation){
        if(!orientation)
            orientation='portrait';
        var ip = pages.length;
        pages[ip] = new Sheet(orientation);
        totalPage++;
        setTotalPage_();
        return pages[ip];
    }

    this.getPanel = function(){
        return d;    
    }
    
    this.setCenterScreen = function(){
    	var x = (screen.width/2 - v.bodyWidth/2);
        var y = window.innerHeight/2 - (v.bodyHeight + v.footerHeight +v.titleHeight)/2;
        d.style.left = x + 'px';
        d.style.top = y + 'px';
        v.x = x;
        v.y= y;
        coordX=v.x;
    	coordY= v.y;
        return this;
    }
    
    init_();
}