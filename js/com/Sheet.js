var sheetFactor = 0;
function Sheet(orientation){
    var objects = [];
    var pageFactor = sheetFactor;
    var sheet = this;
    var pointerY_ = 0;
    var points = {
            cx : 400,
            cy : 530,
            xMax : 800,
            yMax : 1060
        }
    
    sheetFactor++;
    
    function getPoints_(){
        if(orientation){
            if(orientation==='landscape'){
                points.yMax = 770;
                points.xMax = 1024;
                points.cx = points.xMax/2;
                points.cy = points.yMax;                   
            }
        }        
        return points;
    }

    function setPoints_(p){
        points.yMax = p.yMax;
        points.xMax = p.xMax;
        points.cx = p.cx;
        points.cy = p.cy;
    }
        
    function mergeJson_(defaults, userDefined){
        var returnObj = {};
        for(var attrname in defaults) { returnObj [attrname] = defaults [attrname] };
        for(var attrname in userDefined) { returnObj [attrname] = userDefined [attrname];}
        return returnObj;
    }

    function getPanel_(w, h){
        var panel = document.createElement('div');
        panel.style.position = 'absolute';
        panel.style.paddingLeft = '0px';
        panel.style.paddingRight = '0px';
        panel.style.paddingTop = '0px';
        panel.style.paddingBottom = '0px';
        panel.style.left = '0px';
        panel.style.top = '0px';
        panel.style.width = w;
        panel.style.height = h;
        panel.style.backgroundColor = 'rgba(255,255,255,0)';
        panel.style.display = 'block';
        panel.style.borderStyle = 'none';
        return panel;
    }

    function getDimText_(txt, width, align, lineHeight, fontStyle, fontSize, fontFamily){
        var para = document.createElement('div');
        para.innerHTML = txt;
        para.style.border = '0px';
        para.style.width = width + 'px';
        para.style.borderStyle = 'none';
        para.style.position = 'absolute';
        para.style.marginLeft = '0px';
        para.style.marginTop = '0px';
        para.style.marginRight = '0px';
        para.style.marginBottom = '0px';
        para.style.paddingLeft = '0px';
        para.style.paddingRight = '0px';
        para.style.paddingTop = '0px';
        para.style.paddingBottom = '0px';
        para.style.left = '0px';
        para.style.top = '0px';
        para.style.lineHeight = lineHeight + 'px';
        var fontPara = fontStyle + ' ' + fontSize + 'px ' + fontFamily; 
        para.style.font = fontPara;
        para.style.textAlign = align;
        para.style.paddingLeft = '0px';
        para.style.paddingRight = '0px';
        para.style.paddingTop = '0px';
        para.style.paddingBottom = '0px';
        document.body.appendChild(para);
        var resp = {
            ht : para.clientHeight,
            wt : para.clientWidth
        };
        document.body.removeChild(para);
        return resp;
    }

    var pnl = getPanel_(800, 1024);
    pnl.style.display='none';
    
    function getContent_(){
        return pnl.innerHTML;
    }

    function UpdatePointerY(value){
        pointerY_+=value;
    }

    function putPixel_(options){
        sheet.putPixel.defaults = {
            id : '',
            position : 'relative',
            backgroundColor : 'rgba(0, 0, 0, 1)',
            borderStyle : 'none',
            widthPixel : 1, 
            zIndex : 0,
            x : 0,
            y : 0
        };
        var v = (options)? mergeJson_(sheet.putPixel.defaults, options): sheet.putPixel.defaults;
        var pixel = getPanel_(v.width + 'px', v.height + 'px');      
        if(v.id !=='')
            pixel.id = v.id;
        pixel.style.width = v.widthPixel+'px';
        pixel.style.height = v.widthPixel+'px';
        pixel.style.backgroundColor = v.backgroundColor;
        pixel.style.borderStyle = v.borderStyle;
        pixel.style.borderWidth = '0px';//v.widthPixel;
        pixel.style.left = v.x+'px';
        pixel.style.top = v.y+'px';        
        pixel.style.borderBottomLeftRadius = v.widthPixel  +'px';
        pixel.style.borderBottomRightRadius = v.widthPixel  +'px';
        pixel.style.borderTopLeftRadius = v.widthPixel  +'px';
        pixel.style.borderTopRightRadius = v.widthPixel  +'px';   
        pixel.style.zIndex = v.zIndex,
        pixel.style.position = v.position;   
        if(v.y + v.height > pointerY_)
            UpdatePointerY(v.y + v.height);   
        pnl.appendChild(pixel);
        objects[objects.length]=pixel;
    }
    
    this.putPixel = function(options){
        putPixel_(options);
        return this;
    }

    this.fillCircle = function(options){
        sheet.fillCircle.defaults = {
            color : 'rgba(0, 0, 0, 1)',
            radio : 10,
            x : 10,
            y : 10
        };
        var v = (options)? mergeJson_(sheet.fillCircle.defaults, options): sheet.fillCircle.defaults;
        putPixel_({x:v.x, y:v.y, widthPixel:v.radio, backgroundColor:v.color});
        return this;
    }

    this.line = function(options){
        sheet.line.defaults = {
            color : 'rgba(0, 0, 0, 1)',
            widthPixel : 1,
            zIndex : 0,
            x1 : 10,
            y1 : 10,
            x2 : 100,
            y2 : 100
        };
        var v = (options)? mergeJson_(sheet.line.defaults, options): sheet.line.defaults;
        if(v.x1===v.x2){            
            for(var i=v.y1; i<v.y2; i++){
                putPixel_({x:v.x1, y:i, widthPixel:v.widthPixel, backgroundColor:v.color, zIndex:v.zIndex});
            }
        }
        else{
            var m =  (v.y2 - v.y1) / (v.x2 - v.x1);
            var b = v.y1 - m*v.x1;
            for(var i=v.x1; i<v.x2; i++){
                var y0 = m*i + b; 
                putPixel_({x:i, y:y0, widthPixel:v.widthPixel, backgroundColor:v.color, zIndex:v.zIndex });
                
            }
        }           
        return this;    
    }

    this.hLine = function(options){
        sheet.hLine.defaults = {
        	position : 'relative',
            color : 'rgba(0, 0, 0, 1)',
            height : 1,
            zIndex : 0,
            x1 : 10,
            x2 : 100,
            y : 10,
            r1 : 0,
            r2 : 0,
            r3 : 0,
            r4 : 0
        };
        var v = (options)? mergeJson_(sheet.hLine.defaults, options): sheet.hLine.defaults;
        var wx = v.x2-v.x1;
        var hln = getPanel_(v.wx + 'px', v.height + 'px');
        if(v.id !=='')
            hln.id = v.id;
        hln.style.width = (wx) + 'px';
        hln.style.height = v.height+'px';
        hln.style.backgroundColor = v.color;
        hln.style.borderStyle = 'groove';
        hln.style.borderWidth = '0px';
        hln.style.left = v.x1+'px';
        hln.style.top = v.y+'px';
        hln.style.borderBottomLeftRadius = v.r3  +'px';
        hln.style.borderBottomRightRadius = v.r4  +'px';
        hln.style.borderTopLeftRadius = v.r1  +'px';
        hln.style.borderTopRightRadius = v.r2  +'px';     
        hln.style.zIndex = v.zIndex;
        hln.style.position = v.position;
        if(v.y + v.height > pointerY_)
            UpdatePointerY(v.y + v.height);
        pnl.appendChild(hln);
        var code ="";
        Object.defineProperty(hln,'script',{value:code});
        objects[objects.length]=hln;                       
        return this;
    }

    this.vLine = function(options){
        sheet.vLine.defaults = {
            id : '',
            position : 'relative',
            color : 'rgba(0, 0, 0, 1)',
            width : 1,
            zIndex : 0,
            x : 10,
            y1 : 100,
            y2 : 10,
            r1 : 0,
            r2 : 0,
            r3 : 0,
            r4 : 0
        };
        var v = (options)? mergeJson_(sheet.vLine.defaults, options): sheet.vLine.defaults;
        var hy = v.y2-v.y1;
        var ln = getPanel_(v.width + 'px', v.hy + 'px');
        if(v.id !=='')
            ln.id = v.id;
        ln.style.width = v.width + 'px';
        ln.style.height = hy + 'px';
        ln.style.backgroundColor = v.color;
        ln.style.borderStyle = 'groove';
        ln.style.borderWidth = '0px';
        ln.style.left = v.x+'px';
        ln.style.top = v.y1+'px';
        ln.style.borderBottomLeftRadius = v.r3  +'px';
        ln.style.borderBottomRightRadius = v.r4  +'px';
        ln.style.borderTopLeftRadius = v.r1  +'px';
        ln.style.borderTopRightRadius = v.r2  +'px';     
        ln.style.zIndex = v.zIndex;
        ln.style.position = v.position;
        if(v.y1 + hy > pointerY_)
            UpdatePointerY(v.y1 + hy);
        pnl.appendChild(ln);
        var code ="";
        Object.defineProperty(ln,'script',{value:code});
        objects[objects.length]=ln;                       
        return this;
    }

    this.getDimText = function (txt, width, align, lineHeight, fontStyle, fontSize, fontFamily){
        return getDimText_(txt, width, align, lineHeight, fontStyle, fontSize, fontFamily);
    }
    
    this.setPanelProperties = function(options){
    		sheet.setPanelProperties.defaults = {
    			position : 'absolute',
        		paddingLeft : 0,
        		paddingRight : 0,
        		paddingTop : 0,
        		paddingBottom : 0,
        		left : 0,
        		top : 0,
        		width : points.xMax,
        		height : points.yMax,
        		backgroundColor : 'rgba(255,255,255,0)',
        		display : 'block',
        		borderStyle : 'none',
        		marginLeft : 0,
        		marginTop : 0,
        		marginRight : 0,
        		marginBottom : 0
    		}
    		var v = (options)? mergeJson_(sheet.setPanelProperties.defaults, options): sheet.setPanelProperties.defaults;
        	pnl.style.position = v.position;
        	pnl.style.paddingLeft = v.paddingLeft+'px';
        	pnl.style.paddingRight = v.paddingRight+'px';
        	pnl.style.paddingTop = v.paddingTop+'px';
        	pnl.style.paddingBottom = v.paddingBottom+'px';
        	pnl.style.left = v.left+'px';
        	pnl.style.top = v.top+'px';
        	pnl.style.width = v.width+'px';
        	pnl.style.height = v.height+'px';
        	pnl.style.backgroundColor = v.backgroundColor;
        	pnl.style.display = v.display;
        	pnl.style.borderStyle = v.borderStyle;
        	pnl.style.marginLeft = v.marginLeft+'px';
        	pnl.style.marginTop = v.marginTop+'px';
        	pnl.style.marginRight = v.marginRight+'px';
        	pnl.style.marginBottom = v.marginBottom+'px';
        	return this;
    }

    this.bar = function(options){
        sheet.bar.defaults = {
            id : '',
            position : 'relative',
            width : 400,
            height : 100,
            backgroundColor : 'rgba(250, 250, 250, 1)',
            borderStyle : 'none',
            borderWidth : 0,
            borderColor : 'rgba(0,0,0,1)',
            zIndex : 10,
            x : 0,
            y : 0,
            r1 : 0,
            r2 : 0,
            r3 : 0,
            r4 : 0
        };
        var v = (options)? mergeJson_(sheet.bar.defaults, options): sheet.bar.defaults;
        var barra = getPanel_(v.width + 'px', v.height + 'px'); 
        if(v.id !=='')
            barra.id = v.id;
        barra.style.width = v.width+'px';
        barra.style.height = v.height+'px';
        barra.style.backgroundColor = v.backgroundColor;
        barra.style.borderStyle = v.borderStyle;
        barra.style.left = v.x+'px';
        barra.style.top = v.y+'px';
        if(typeof v.borderWidth === 'string')
            barra.style.borderWidth = v.borderWidth;
        else
            barra.style.borderWidth = v.borderWidth+'px';
        barra.style.borderColor = v.borderColor;
        barra.style.borderBottomLeftRadius = v.r3  +'px';
        barra.style.borderBottomRightRadius = v.r4  +'px';
        barra.style.borderTopLeftRadius = v.r1  +'px';
        barra.style.borderTopRightRadius = v.r2  +'px';     
        barra.style.zIndex = v.zIndex;
        barra.style.position = v.position;
        if(v.y + v.height > pointerY_)
            UpdatePointerY(v.y + v.height);
        pnl.appendChild(barra);
        var code ="";
        Object.defineProperty(barra,'script',{value:code});
        objects[objects.length]=barra;
		  return this;	
    }
    
    this.rectangle = function(options){
        sheet.rectangle.defaults = {
            id : '',
            position : 'relative',
            backgroundColor : 'rgba(255, 255, 255, 0)',
            borderStyle : 'solid',
            borderWidth :'thin',
            borderColor :'rgba(0,0,0,0.3)',
            textDecoration : 'none',
            lineHeight : 14,
            fontFamily : 'arial',
            fontColor : 'black',
            fontSize : 12,
            fontStyle : 'normal',
            fontWeight : 'normal',
            textAlign : 'center',
            zIndex : 0,
            x1 : 0,
            y1 : 0,
            x2 : 0,
            y2 : 0,
            r1 : 0,
            r2 : 0,
            r3 : 0,
            r4 : 0,
            text:''
        };
        var v = (options)? mergeJson_(sheet.rectangle.defaults, options): sheet.rectangle.defaults;
        var rect = getPanel_(v.width + 'px', v.height + 'px');
        rect.innerHTML= v.text;
        if(v.id !=='')
            rect.id = v.id;
        rect.style.textAlign = v.textAlign;
        rect.style.width = (v.x2-v.x1)+'px';
        rect.style.lineHeight = v.lineHeight;
        rect.style.textDecoration = v.textDecoration;
        rect.style.fontFamily = v.fontFamily;
        rect.style.color = v.fontColor;
        rect.style.fontSize = v.fontSize + 'px';
        rect.style.fontWeight = v.fontWeight;
        rect.fontStyle = v.fontStyle;
        rect.style.height = (v.y2-v.y1)+'px';
        rect.style.backgroundColor = v.backgroundColor;
        rect.style.borderStyle = v.borderStyle;
        rect.style.borderWidth = v.borderWidth;
        rect.style.borderColor = v.borderColor;
        rect.style.left = v.x1+'px';
        rect.style.top = v.y1+'px';
        rect.style.borderBottomLeftRadius = v.r3  +'px';
        rect.style.borderBottomRightRadius = v.r4  +'px';
        rect.style.borderTopLeftRadius = v.r1  +'px';
        rect.style.borderTopRightRadius = v.r2  +'px'; 
        rect.style.zIndex = v.zIndex;     
        rect.style.position = v.position;
        if(v.y2  > pointerY_)
            UpdatePointerY(v.y2);
        pnl.appendChild(rect);
        var code ="";
        Object.defineProperty(rect,'script',{value:code});
        objects[objects.length]=rect;
        return this;
    }
    
    this.addText = function(options){
        sheet.addText.defaults = {
            id : '',
        	position : 'relative',
        	textDecoration : 'none',
            fontFamily : 'arial',
            fontColor : 'black',
            fontSize : 12,
            fontStyle : 'normal',
            fontWeight : 'normal',
            width : window.innerWidth,
            height : 14,
            lineHeight : 14,
            textAlign : 'justify',
            backgroundColor : 'rgba(255, 255, 255, 0)',
            borderStyle : 'none',
            zIndex : 0,
            x : 0,
            y : 0,
            text : '',
            gap:0
        };
        var v = (options)? mergeJson_(sheet.addText.defaults, options): sheet.addText.defaults;        
        var container = getPanel_(v.width + 'px', v.height + 'px');
        if(v.gap===0){
            container.innerHTML = v.text;
        }
        else{
            var p = [];
            var xAcum=0;
            for(let i=0; i<v.text.length; i++){
                p[i] = document.createElement('textNode');    
                p[i].innerText = v.text.charAt(i);
                p[i].style.position='absolute';
                p[i].style.left = xAcum+'px';
                p[i].style.top = '0px';
                p[i].style.color = v.fontColor;
                p[i].style.textDecoration = v.textDecoration;
                p[i].style.fontSize = v.fontSize + 'px';
                p[i].style.fontStyle = v.fontStyle;
                p[i].style.fontWeight = v.fontWeight;
                container.appendChild(p[i]);
                xAcum+=v.gap;
            }
        }
        if(v.id !=='')
            container.id = v.id;
        container.style.backgroundColor = v.backgroundColor;
        container.style.color = v.fontColor;
        container.style.textDecoration = v.textDecoration;
        container.style.fontSize = v.fontSize + 'px';
        container.style.fontStyle = v.fontStyle;
        container.style.left = v.x + 'px';
        container.style.top = v.y + 'px';
        if(v.gap === 0)
            container.style.textAlign = v.textAlign;
        container.style.borderStyle = v.borderStyle;
        container.style.height = v.height + 'px';
        container.style.width = v.width + 'px';
        container.style.lineHeight = v.lineHeight + 'px';
        container.style.zIndex = v.zIndex;
        container.style.position = v.position;
        container.style.fontWeight = v.fontWeight;
        container.style.fontFamily = v.fontFamily;
        var hgt = getDimText_(v.text, v.width, v.textAlign, v.lineHeight, v.fontStyle, v.fontSize, v.fontFamily);
        if (v.height === 0){
            container.style.height = hgt.ht + 'px';
        }
        if(v.y + hgt.ht > pointerY_)
            UpdatePointerY(v.y + hgt.ht);
        pnl.appendChild(container);
        var code ="";
        Object.defineProperty(container,'script',{value:code});
        objects[objects.length]=container;
        return this;
    }
    
    this.addImage = function(options){
        sheet.addImage.defaults = {
            id : '',
            position : 'relative',
            zIndex : 0,
            x : 0, 
            y : 0, 
            w : 100, 
            h : 100,
            path : 'images/aceptar.png'
        };
        var v = (options)? mergeJson_(sheet.addImage.defaults,options) : sheet.addImage.defaults;
        var img = document.createElement('img');
        if(v.id !=='')
            img.id = v.id;
        img.src=v.path;
        img.style.position = v.position;
        img.style.left = v.x + 'px';
        img.style.top = v.y + 'px';
        img.style.width = v.w + 'px';
        img.style.height = v.h + 'px';
        img.style.zIndex=v.zIndex;
        if(v.y + v.h > pointerY_)
            pointerY_= v.y + v.h;
        pnl.appendChild(img);
        var code ="";
        Object.defineProperty(img,'script',{value:code});
        objects[objects.length]=img;
        return this;
    };
    
    this.addTable = function(options){
        sheet.addTable.defaults = {
        	id: '',
            x : 0, 
            y : 0, 
            position : 'relative',
            zIndex : 0,
            alignTitles : ['center'],
            fontColorTitles : 'rgbs(0,0,0,1)',
            fontSizeTitles : 14,
            fontFamilyTitles : 'arial',
            fontStyleTitles : 'normal',
            fontWeigthTitles : 'bold',            
            fontColorData : 'rgba(0,0,0,1)',
            fontSizeData : 12,
            fontFamilyData : 'arial',
            fontStyleData : 'normal',
            border : 1,
            borderWidth : 'thin',
            borderColapse : 'collapse',
            borderSpacing : 0,
            borderStyle : 'groove',
            cellPadding : 0,
            cellspacing : 0,
            lineColor : 'rgba(0,0,0,1)',
            bgCellTitles : 'rgba(255,255,255,1)',
            bgCellColumns : 'rgba(255,255,255,1)',
            columnTitles : [],
            widthColumns : [], 
            alignColumns : [],
            rows : 1,
            heightRow  : [],
            heightRowTitles  : 35,
            data : [],
            dataRowIndexIni : 0,
            dataRowIndexEnd : 1
        };
        
        var v = (options)? mergeJson_(sheet.addTable.defaults,options) : sheet.addTable.defaults;
        if(v.heightRow.length === 0)
        	for(var i=0; i<=v.data[0].length; i++)
                v.heightRow[i]=30;
        if(typeof v.heightRow === 'number'){
            var hr = v.heightRow;
            v.heightRow = [];
            for(var i=0; i<=v.data[0].length; i++)
            v.heightRow[i] = hr;            
        }
            
        v.heightRow[0] = v.heightRowTitles;
        var t = document.createElement("table");
        v.table = t;
        if(v.id !=='')
            t.id = v.id;
        t.setAttribute("border",v.border+"");
        t.setAttribute("cellPadding",v.cellPadding+"");
        t.setAttribute("cellSpacing",v.cellspacing+"");
        t.style.paddingLeft = '0px';
        t.style.paddingRight = '0px';
        t.style.paddingTop = '0px';
        t.style.paddingBottom = '0px';
        t.style.position = v.position;
        t.style.left = v.x+'px';
        t.style.top = v.y+'px';
        t.style.borderColor = v.lineColor;
        t.style.borderWidth = v.borderWidth;
        t.style.borderStyle = v.borderStyle;
        t.style.zIndex = v.zIndex;
        t.style.borderSpacing = v.borderSpacing+'px';
        var rowCount = v.dataRowIndexIni;
        var cellNumber = 1;
        for(var row=0; row<v.rows + 1; row++){
            t.insertRow(row);
            for(var cell=0; cell<v.widthColumns.length; cell++){
                t.rows[row].insertCell(cell);
                t.rows[row].cells[cell].style.borderStyle = v.borderStyle;
                t.rows[row].cells[cell].style.width = v.widthColumns[cell]+'px';
                t.rows[row].cells[cell].style.height = v.heightRow[row]+'px';
                t.rows[row].cells[cell].style.borderWidth = v.borderWidth;
                t.rows[row].cells[cell].style.borderCollapse = v.borderCollapse;
                t.rows[row].cells[cell].style.border = v.border+""; 
                t.rows[row].cells[cell].style.borderSpacing = v.borderSpacing+'px';
                t.rows[row].cells[cell].style.paddingLeft = '0px';
                t.rows[row].cells[cell].style.paddingRight = '0px';
                t.rows[row].cells[cell].style.paddingTop = '0px';
                t.rows[row].cells[cell].style.paddingBottom = '0px';

                //t.rows[row].cells[cell].style.padding = v.cellPadding+'px';
                if(row===0){
                    t.rows[row].cells[cell].style.backgroundColor = v.bgCellTitles;
                    t.rows[row].cells[cell].align = v.alignTitles[cell];
                    t.rows[row].cells[cell].style.color = v.fontColorTitles;
                    t.rows[row].cells[cell].style.fontSize = v.fontSizeTitles+'px';
                    t.rows[row].cells[cell].style.fontFamily = v.fontFamilyTitles;
                    t.rows[row].cells[cell].style.fontStyle = v.fontStyleTitles;
                    t.rows[row].cells[cell].style.fontWeight = v.fontWeigthTitles;
                   
                    if(v.columnTitles.length > cell)
                        t.rows[row].cells[cell].innerHTML = v.columnTitles[cell];
                }
                else{
                    t.rows[row].cells[cell].style.backgroundColor = v.bgCellColumns;
                    t.rows[row].cells[cell].style.fontColor = v.fontColorData;
                    t.rows[row].cells[cell].style.fontSize = v.fontSizeData+'px';
                    t.rows[row].cells[cell].style.fontFamily = v.fontFamilyData;
                    t.rows[row].cells[cell].style.fontStyle = v.fontStyleData;
                    if(v.alignColumns.length > 0)
                        t.rows[row].cells[cell].align = v.alignColumns[cell];
                    if(row - 1 >=v.dataRowIndexIni && row - 1 <=v.dataRowIndexEnd){
                        if(v.data.length > cell){
                            if(v.data[cell].length > rowCount - 1){
                                if(rowCount < v.rows){
                                  if(v.data[cell][rowCount]!=undefined)  
                                    t.rows[cellNumber].cells[cell].innerHTML = v.data[cell][rowCount];                                  
                                }
                                if(cell===v.widthColumns.length - 1){
                                    rowCount++;
                                    cellNumber++;
                                }
                            }
                        }
                    }
                }
            }
        }
        var hRow = 0;
        for(var i=0; i<v.heightRow.length; i++)
        		hRow += v.heightRow[i];        
        if(v.y + hRow > pointerY_)
            pointerY_= v.y + hRow;
        pnl.appendChild(t);
        var code="";
        Object.defineProperty(t,'script',{value:code});
        objects[objects.length]=t;
        return this;
    }

    this.getPointerY = function(){
        return pointerY_;
    }

    this.setPointerY = function(y){
        pointerY_ = y;
        return this;
    }

    this.getAvailHeight = function(){
        return (getPoints_().yMax - pointerY_);
    }

    this.show = function () {
        pnl.style.display='block';
        return this;
    }

    this.hide = function () {
        pnl.style.display='none';
        return this;
    }

    this.getContent = function () {
        return getContent_();
    }

    this.getPanel  = function(){
        return pnl;
    }

    this.addToBody = function(){
        document.body.appendChild(pnl);
        return this;
    }

    this.getElement = function(idx){
        return objects[idx];
    }

    this.totalElements = function(){
        return objects.length;
    }  
    
    function print_(){
        return new Promise(function(resolve, reject){
            var p = '<html><head><style type="text/css">-webkit-column-count: 3;-webkit-column-gap: 10px;-webkit-column-fill: auto;-moz-column-count: 3;-moz-column-gap: 10px;-moz-column-fill: auto; @page{margin : 0; border : 0;}</style></head>'+
            '<body><div id ="divgeneral">'+getContent_()+'</div></body></html>';
            var ventimp = window.open('','_blank','width=640, height=480 resizable=yes,scrollbars=yes,status=no');
            ventimp.document.write(p);        
            ventimp.document.getElementById('divgeneral').style.zoom='100%';        
            ventimp.document.close();
            ventimp.onload = function(){
                ventimp.print();
                ventimp.close();
                resolve('ok');
            };
            ventimp.onerror=function(){
                reject('Hubo un error')
            };
        });
    }
    
    function printSheet_(){
        return new Promise(function(resolve, reject){
            var p = '<html><head><style type="text/css">  @media print{'+'@page{margin : 0; border : 0}'+
            '.saltoDePagina{display:block;page-break-before:always;}}</style></head><body>\n'+
            '<div class="saltoDePagina"></div>\n'+'<div id=\'d1\' style = "position : relative;">\n'+
            getContent_()+'\n</div>\n'+'</body></html>';
            var ventimp = window.open('','_blank','width=640, height=480 resizable=yes,scrollbars=yes,status=no');
            ventimp.document.write(p);      
            ventimp.document.getElementById('d1').style.zoom='100%';        
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
    
    this.printSheet = function(){
        printSheet_().then(function(msg){
            console.log(msg);
        }, 
        function(msg){
            console.log(msg);
        });
        return this;
    }

    this.print = function(){
        print_().then(function(msg){
            console.log(msg);
        }, 
        function(msg){
            console.log(msg);
        });
        return this;
    }

    this.getPoints = function(){
        return getPoints_();
    }

    this.setPoints = function(p){
        setPoints_(p);
    }
}