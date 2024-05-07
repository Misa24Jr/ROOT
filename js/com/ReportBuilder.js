function ReportBuilder(o, mu, f){
	//********************************************** PROPIEDADES PRIVADAS *************************************************
	var reportBuilder = this;
	var orientation = 'p';//portrait
	var metricUnit = 'pt';
	var format = 'a4';
	if(o)
	  orientation=o;
	if(mu)
	  metricUnit = mu;
	if(f)
	  format = f;
	var items = [];
	var x = 10;
	var y = 10;
	var mx = 0;
	var my = 0;
	var clickX = 0;
	var clickY = 0;
	var isClick = false;
	var itemPage = 0;
	var isPageClose = false; 
	var wth = 820;
	var hgt = 1223;
	if(orientation==='l'){
	  wth = 1146;
	  hgt = 820;
	}
	var sheet = {
		orientation : orientation,
		width : wth,
		height : hgt,
		metricUnit : metricUnit,
		format : format,
		cteAdj : 3,
		margin : {
		  left : 40,
		  right : 40,
		  top : 40,
		  bottom : 40 
		},
		pxToPtCte : 72/96,
		heightLn : 14,
		indent : 30,
		background : 'rgba(255,255,255,1)',
		imageWidth : 400,	
		imageHeight : 400,
	};
	
	var pointerYPdf = 0;
	var pointerYHtml = 0;
	var actualPage = 0;
	var pages = [];
	var doc ={};
	//CONTAINER
	var container = document.createElement('div');
	//TEXTAREA PARA EL TINYMCE
	var t = document.createElement('textarea');
	var configObject = {
		selector: '#textAreaToTinycem',
		plugin: 'a_tinymce_plugin',
		a_plugin_option: true,
		theme : 'modern',
		margin: '0 0 0 0',
		//a_configuration_option: 400,
		width : sheet.width + 32,
		height : 500,
		resize : 'both',
		title: 'Reporte',
		//menubar: 'file edit view',
		//menu : {edit: {title: 'Edit', items: 'cut, copy, paste'}},
		menubar : false,
		plugins: "print preview",		
		//pagebreak_separator: "<!-- my page break -->",
		//pagebreak_split_block: true,
		//toolbar: 'PDF | print preview media fullpage | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | '+
		//'bullist numlist outdent indent | link image | forecolor backcolor | CLOSE',
		toolbar: 'PDF | EXCEL | print | preview | CLOSE',
		setup: function (editor) {
			editor.addButton('PDF', {
				text: '',
				title: 'Crear PDF', 
				icon: true,
				image:'images/pdf.png',
				onclick: function () {
				  renderToPDF_();
				}
			});
			editor.addButton('CLOSE', {
				text: '',
				title: 'Cerrar', 
				icon: true,
				image:'images/cancel.png',
				onclick: function () {
				   hide_();
				}
			});
			editor.addButton('EXCEL', {
				text: '',
				title: 'Crear EXCEL', 
				icon: true,
				image:'images/excel.png',
				onclick: function () {
				   alert('en construccion');
				}
			});
		},
	};

	//************************************************* METODOS PRIVADOS **************************************************
	
	
	
	function mountPage(){
		pages[actualPage]+='</div><br>';
		t.value+=pages[actualPage];
		pointerYHtml=0;
		isPageClose=true;
	}
	
	function addPage(){
		isPageClose=false;
		actualPage = pages.length;
		pages[actualPage]='<div style = "background-color:rgb(245,245,245); position:relative; width:'+
		sheet.width+'px; height:'+sheet.height+'px;">';
	}
	
	function addHTMLToPage(htm){
		pages[actualPage]+=htm;
	}
		
	function getCanvas(w,h){
	  return new CanvasBuilder(null,w,h).getCanvasObj();	
	}
	
	function getPt(pixels){
		return pixels*sheet.pxToPtCte;
	}
	
	function mergeJson(defaults,userDefined){
		var returnObj = {};
		for (var attrname in defaults) {
			returnObj[attrname] = defaults[attrname];
		}
		for (var attrname in userDefined) {
			returnObj[attrname] = userDefined[attrname];
		}
		return returnObj;
	}
	
	function hide_(){
		container.style.display = 'none';
	}
	
	function show_(){
		container.style.display = 'block';
	}
	
	function getHTML(){	
		return tinyMCE.activeEditor.getContent();	  	
	}
	
	function getMouseXY(e){
		mx = e.clientX;
		my = e.clientY;
	}
	
	function set_Position(){
		container.style.position='absolute';
		container.style.left = x + 'px';
		container.style.top = y + 'px';
	}
		
	function init(){
		addPage();
		container.width = 'auto';
		document.body.appendChild(container);
		t.id = 'textAreaToTinycem';
		container.appendChild(t);
		set_Position();
		tinymce.init(configObject);
		
		container.onmouseover = function(ev){
		  getMouseXY(ev);	
		  if(my < y+50)
		    container.style.cursor = 'pointer';
		  document.onmouseup = function(){
		    isClick = false;
		  };
		  document.onmousemove = function(e){
			if(isClick){
				getMouseXY(e);
				if(my < y+50){
					x += - clickX + mx;
					y += - clickY + my;
					clickX = mx;
					clickY = my;
					set_Position();
				}
				else
				  isClick = false;
			 }
		  };
		};
		
		container.onmouseout = function(){
		  container.style.cursor = 'default';
		};
		
		container.onmousedown = function(e){
			getMouseXY(e);
			clickX = mx;
			clickY = my;
			isClick = true;
		};
		
		container.onmouseup = function(){
			isClick = false;
		};
		hide_();
	}
	
	function measureTextPt(it){
		var d = new jsPDF();
		return d.getStringUnitWidth(items[it].text) * items[it].fontSize;
	}
	
	function measureText(txt, fType, fSize, fFamily){
		var ctx = getCanvas(1,1).getContext('2d');
		ctx.font = fType+' '+fSize+'px '+fFamily;
		return ctx.measureText(txt).width;
	}
	
	function getLnsPdfText(it){
		var para = items[it].text;
		var sl = getPt(items[it].width);
		var tokens = para.split(' ');
		var lines = [''];
		var ln = 0;
		for(var i = 0; i<tokens.length; i++){	
			if(lines[ln].length*(doc.getFontSize() - sheet.cteAdj) > sl) {
				lines[ln]=lines[ln].substring(0,lines[ln].length-1);
				ln++;
				lines[ln]='';
			}
			lines[ln]+=tokens[i]+' ';
		}
		return lines;
	}
	
	function addJustParagraphToPDF(it, text){
		var para = text;
		var sl = getPt(items[it].width - sheet.margin.right/2);
		var hl = getPt(sheet.heightLn);
		var tokens = para.split(' ');
		var lines = [''];
		var ln = 0;
		var x1 = getPt(items[it].x + sheet.margin.left);
		var y1 = pointerYPdf + getPt(sheet.margin.top);
		for(var i = 0; i<tokens.length; i++){	
			if(lines[ln].length*(doc.getFontSize() - sheet.cteAdj) > sl) {
				lines[ln]=lines[ln].substring(0,lines[ln].length-1);
				ln++;
				lines[ln]='';
			}
			lines[ln]+=tokens[i]+' ';
		}		
		for(var i2=0; i2<lines.length - 1; i2++){
			if(items[it].wordBoldArr===null)
				doc.addJustifyText(lines[i2], x1, y1, sl);
			else
				doc.addJustifyText(lines[i2], x1, y1, sl, items[it].wordBoldArr[i2]);
			y1 += hl;
		}
		doc.addJustifyText(lines[lines.length-1],x1, y1, -1, items[it].wordBoldArr[lines.length-1]);
		pointerYPdf += getPt(lines.length*sheet.heightLn);
	}
	
	function addGraphToPdf(it){		
		var v = items[it];
		var ncb = new CanvasBuilder(null,v.width,v.height);
    	var myCtx = ncb.getCanvasContext();
    	var myCanvas = ncb.getCanvasObj();
    	myCtx.fillStyle = 'rgb(255,255,255)';
    	myCtx.fillRect(0,0,v.width,v.height);
    	myCtx.drawImage(v.img, 0, 0, v.width, v.height);
    	
    	var ncbl = new CanvasBuilder(null,v.widthLgd,v.heightLgd);
    	var myCtxl = ncbl.getCanvasContext();
    	var myCanvasl = ncbl.getCanvasObj();
    	myCtxl.fillStyle = 'rgb(255,255,255)';
    	myCtxl.fillRect(0,0,v.width,v.height);
    	myCtxl.drawImage(v.imgLgd, 0, 0, v.widthLgd, v.heightLgd); 
    	
    	var imgData = atob(myCanvas.toDataURL("image/jpeg").slice('data:image/jpeg;base64,'.length));
    	var imgDataLgd = atob(myCanvasl.toDataURL("image/jpeg").slice('data:image/jpeg;base64,'.length));
    	
		var wlgd = 0;
		if(v.arrLegend.length > 0)
		  wlgd = v.widthLgd;		    	
    	if(items[it].align==='left'){
		    doc.addImage(imgData, 'JPEG', getPt(v.x + sheet.margin.left), pointerYPdf + getPt(sheet.margin.top));
		    if(wlgd > 0)
		      doc.addImage(imgDataLgd, 'JPEG', getPt(v.x + sheet.margin.left + v.width ), pointerYPdf + getPt(sheet.margin.top));
		}
		if(items[it].align==='center'){
		  	var posC = getPt(sheet.width/2 - v.width/2 - wlgd/2);
		  	doc.addImage(imgData, 'JPEG', posC, pointerYPdf + getPt(sheet.margin.top));
		  	if(wlgd > 0)
		  	  doc.addImage(imgDataLgd, 'JPEG', posC + getPt(v.width), pointerYPdf + getPt(sheet.margin.top));
		}
		if(items[it].align==='right'){
			var posR = getPt(sheet.width - sheet.margin.right - sheet.margin.left - v.width - wlgd) - 4;
		  	doc.addImage(imgData, 'JPEG', posR, pointerYPdf + getPt(sheet.margin.top));
		  	if(wlgd > 0)
		  	  doc.addImage(imgDataLgd, 'JPEG', posR + getPt(v.width) , pointerYPdf + getPt(sheet.margin.top));
		}		  
		v.imgLoad=true;
		pointerYPdf+=getPt(v.height + sheet.heightLn);		
	}
	
	function addTextToPDF(it){
		setCteAdjPDFFont(items[it].fontSize);
		doc.setFont(items[it].fontFamily);
		doc.setFontType(items[it].fontStyle);
		doc.setFontSize(getPt(items[it].fontSize));
		doc.setTextColor(items[it].red,items[it].green,items[it].blue);
		if(items[it].y != 0){
			pointerYPdf = items[it].y;
		}
		function add(text){
			if(items[it].align==='left'){
				doc.textAlign(text, getPt(items[it].x + sheet.margin.left), pointerYPdf+getPt(sheet.margin.top), items[it].align, items[it].vAlign);
				pointerYPdf += getPt(sheet.heightLn);
			}
			if(items[it].align==='right'){
				doc.textAlign(text, getPt(sheet.width - sheet.margin.right - items[it].fontSize) - 4, pointerYPdf+getPt(sheet.margin.top), items[it].align, items[it].vAlign);
				pointerYPdf += getPt(sheet.heightLn);
			}
			if(items[it].align==='center'){
				doc.textAlign(text, getPt(sheet.width/2), pointerYPdf+getPt(sheet.margin.top), items[it].align, items[it].vAlign);
				pointerYPdf += getPt(sheet.heightLn);
			}
			if(items[it].align==='justify'){
				addJustParagraphToPDF(it, text);
			}
		}
				
		function splitLns(tot, cap, lns){
			var shunkLns = '';
			var pendingLns = '';
			var hasNext = false;
			var arrLnsPend = [];
			for(var i=0; i<tot; i++){
			  if(i < cap && lns[i]!=undefined)
			    shunkLns+=lns[i];
			  else{
			  	if(lns[i]!=undefined){
			      pendingLns+=lns[i];
			      arrLnsPend[arrLnsPend.length] = lns[i];
			    }
			  }
			}
			if(pendingLns.length > 0)
			  hasNext = true;
			return {shunk:shunkLns, pending:pendingLns, more:hasNext, lnsPend : arrLnsPend };
		}
		
		function addNewPage(){
			itemPage++;
			doc.addPage();
		}
		
		function isNewPagePdf(y){
			var top = doc.internal.pageSize.height - (getPt(sheet.margin.top));
			if(y > top){
				var tl = getLnsPdfText(it);
				var capacityLns = parseInt((top - pointerYPdf)/sheet.heightLn);
				//var excesoLns = tl - capacityLns;
				var sl = splitLns(tl.length, capacityLns, tl);
				add(sl.shunk);
				addNewPage();
				pointerYPdf = 0;
				while(sl.more){
					tl = doc.internal.pageSize.height - (parseInt(getPt(sheet.margin.top + sheet.margin.bottom)/sheet.heightLn, 10));
					sl = splitLns(tl, tl, sl.lnsPend);
					add(sl.shunk);
					if(sl.more){
					  addNewPage();
					  pointerYPdf = 0;
					}
				}				
			}
			else
		  		add(items[it].text);	
		}		
		isNewPagePdf(pointerYPdf + items[it].heightText);
	}
	
	function createPDF(){
		doc.output('dataurlnewwindow');	
	}
	
	/*
	function addImageToPDF(it){
		return new Promise(function(resolve, reject) {
			var v = items[it];
			if(v.PDF_Y > 0){
				pointerYPdf=v.PDF_Y;
			}		
			var canvas = getCanvas(v.width, v.height);
			canvas.getContext('2d').fillStyle = 'rgb(255,255,255)';
	    	canvas.getContext('2d').fillRect(0,0,v.width,v.height);
			v.imgLoad = false;
			v.img.onload = function(){
				try{
					canvas.getContext('2d').drawImage(v.img, 0, 0, v.width, v.height);
					var imgData = canvas.toDataURL("image/jpeg");
					if(items[it].align==='left'){
					  doc.addImage(imgData, 'JPEG', getPt(v.x + sheet.margin.left), pointerYPdf + getPt(sheet.margin.top));
					}
					if(items[it].align==='center'){
						var posC = getPt(sheet.width/2 - v.width/2);
						doc.addImage(imgData, 'JPEG', posC, pointerYPdf + getPt(sheet.margin.top));
					}
					if(items[it].align==='right'){
						var posR = getPt(sheet.width - sheet.margin.right - v.width) - 4;
						doc.addImage(imgData, 'JPEG', posR, pointerYPdf + getPt(sheet.margin.top));
					}		  
					v.imgLoad=true;
					pointerYPdf+=getPt(v.height + sheet.heightLn);
					resolve(v.imgLoad);
				}
				catch(exc){
					reject(false);
				}
			}
			v.img.src = v.src;
		});
	}
	*/

	
	function processImg(it){
		return new Promise(function(resolve, reject) {
			var v = items[it];
			try{
				var canvas = getCanvas(v.width, v.height);
				canvas.getContext('2d').fillStyle = 'rgb(255,255,255)';
				canvas.getContext('2d').fillRect(0,0,v.width,v.height);
				v.imgLoad = false;
				v.img.onload = function(){
					try{
						canvas.getContext('2d').drawImage(v.img, 0, 0, v.width, v.height);
						v.imgData = canvas.toDataURL("image/jpeg");
						v.imgLoad=true;
						pointerYPdf+=getPt(v.height + sheet.heightLn);
						resolve(v.imgLoad);
					}
					catch(exc){
						reject(false);
					}
				};
				v.img.src = v.src;
			}
			catch(exc){
				reject(false);
			}
		});
	}
	
	function addImageToPDF(it){
		return new Promise(function(resolve, reject){
			var v = items[it];
			if(v.PDF_Y > 0){
				pointerYPdf=v.PDF_Y;
			}		
			try{
				if(items[it].align==='left'){
					doc.addImage(v.imgData, 'JPEG', getPt(v.x + sheet.margin.left), pointerYPdf + getPt(sheet.margin.top));
				}
				if(items[it].align==='center'){
					var posC = getPt(sheet.width/2 - v.width/2);
					doc.addImage(v.imgData, 'JPEG', posC, pointerYPdf + getPt(sheet.margin.top));
				}
				if(items[it].align==='right'){
					var posR = getPt(sheet.width - sheet.margin.right - v.width) - 4;
					doc.addImage(v.imgData, 'JPEG', posR, pointerYPdf + getPt(sheet.margin.top));
				}		  
				pointerYPdf+=getPt(v.height + sheet.heightLn);
				resolve(v.imgLoad);
			}
			catch(exc){
				reject(false);
			}
		});		
	}
	
	function getTotalImg(){
		var pos = [];
		pos.length=0;
		for(var i=0; i<items.length; i++)
			if(items[i].method==='addImage')
				pos[pos.length]= i;
		return pos;		
	}
		
	function renderToPDF_(){		
		var ti = getTotalImg();
		var gen = false;
		var contador = -1;
		//for(var i=0; i<ti.length; i++){
		function preRender(){	
			contador++;
			if(ti[contador]!=undefined){
				processImg(ti[contador]).then(function(response){	
					if(contador >= ti.length -1  && !gen){
						clearInterval(pre);
						gen=true;					
						var cont=0;
						doc = new jsPDF(sheet.orientation, sheet.metricUnit,sheet.format);
						pointerYPdf=0;					
						function rdPDF(){	
							if(items[cont].method==='addText'){	
								addTextToPDF(cont);
							}
							if(items[cont].method==='addImage'){
								if(!items[cont].rendering){
									addImageToPDF(cont).then(function(response){
										items[cont].rendering=!response;
									});	
								}										  
							}
							if(items[cont].method==='addGraph'){
								if(!items[cont].rendering){
									addGraphToPdf(cont);
									items[cont].rendering=true;
								}										  
							}
							if(items[cont].imgLoad){
								items[cont].rendering=false;
							}
							if(!items[cont].rendering){
								cont++;
							}
							if(cont>=items.length){
								clearInterval(si);
								setTimeout(createPDF,50);
							}
						}
						var si = setInterval(rdPDF,10);
					}
				});
			}
			else{
				alert('Revise que las imagenes del reporte existan en el directorio de imagenes..!');
				clearInterval(pre);
			}
		}	
		var pre = setInterval(preRender,80);
	}
	
	function renderToHTML_(){
		init();
		for(var i=0; i<items.length; i++){
			if(items[i].method==='addText'){
			  	addTextToPanel(i);
			}
			if(items[i].method==='addImage'){
			  	addImageToPanel(i);
			}
			if(items[i].method==='addGraph'){
				addGraphToPanel(i);
			}
			if(items[i].method==='addTable'){
				addTableToPanel(i);
			}
		}
		if(!isPageClose)
		  mountPage();
		
	}
	
	function getHeightText(txt, x, y, w, a, fs, ff, ft, r, g, b){
		var para = document.createElement('div');
		para.innerHTML=txt;
		para.style.lineHeight = sheet.heightLn;
		para.style.textIndent = sheet.indent + 'px';
		para.style.position = 'absolute';
		para.style.marginLeft = sheet.margin.left + 'px';
		para.style.marginTop = sheet.margin.top + 'px';
		para.style.marginRight = sheet.margin.right + 'px';
		para.style.marginBottom = sheet.margin.bottom + 'px';
		//para.style.textJustify = 'inter-word';
		para.style.width = w + 'px';	
		para.style.left = x+'px';
		para.style.top = y+'px';
		para.style.font = ft+' '+fs+'px '+ff;
		para.style.color = 'rgb('+r+', '+g+', '+b+')';
		para.style.textAlign = a;
		document.body.appendChild(para); 
		var ht = para.clientHeight;		
		document.body.removeChild(para);
		
		var pEnt = parseInt(ht/fs,10);
		var pDec = ht/f.size - pEnt;
		if(pDec > 0)
			pEnt++;
		ht=pEnt*sheet.heightLn;		
		return ht;
	}
	
	function setCteAdjPDFFont(fs){
		//sheet.heightLn = fs + 2;
		switch(fs){
			case 7 	: {sheet.cteAdj = 2.55; break;}
			case 8 	: {sheet.cteAdj = 2.72; break;}
			case 9 	: {sheet.cteAdj = 2.80; break;}
			case 10 : {sheet.cteAdj = 3.00; break;}
			case 11 : {sheet.cteAdj = 3.40; break;}
			case 12 : {sheet.cteAdj = 3.90; break;}
			case 13 : {sheet.cteAdj = 4.25; break;}
			case 14 : {sheet.cteAdj = 4.92; break;}
			case 15 : {sheet.cteAdj = 5.30; break;}
			case 16 : {sheet.cteAdj = 5.10; break;}
			case 17 : {sheet.cteAdj = 5.85; break;}
			case 18 : {sheet.cteAdj = 5.95; break;}//ok
			case 19 : {sheet.cteAdj = 6.0230; break;}
			case 20 : {sheet.cteAdj = 6.20; break;}
			default : {sheet.cteAdj = 6.20; break;}//>20	
		}
	}	
	
	function checkPageBreak(h,typ){
		switch (typ){
			case 0 :{  //text	
		  				if((pointerYHtml + h + sheet.margin.top) > (sheet.height - sheet.margin.bottom)){
		    				mountPage();
		    				addPage();
	 	  			   	}
	 	  			   	break;
	 	  	}
	 		case 1 :{//img
	 					if((pointerYHtml + h + sheet.margin.top) > (sheet.height - sheet.margin.bottom)){
		    				mountPage();
		    				addPage();
	 	  			   	}	
	 					break;
	 		}
		}
	}
	
	function addTextToPanel(it){
		var v = items[it];
		var color = "rgba("+v.red+","+v.green+","+v.blue+","+v.transparency+")";
		if(v.y===0)
			v.y = pointerYHtml;
		else{
			pointerYHtml=v.y;
			v.y+=sheet.margin.top;
		}
		var fsi ='';
		var fsf ='';
		
		if(v.fontStyle.toUpperCase()=='BOLD'){
			fsi = '<b>';
			fsf = '</b>';
		}
		if(v.fontStyle.toUpperCase()=='ITALIC'){
			fsi = '<i>';
			fsf = '</i>';
		}
		if(v.fontStyle.toUpperCase()=='BOLDITALIC'){
			fsi = '<i><b>';
			fsf = '</b></i>';
		}
		
		checkPageBreak(v.heightText,0);		  
		
		if(v.align==='left'){
			addHTMLToPage('<p style ="font-size:'+v.fontSize+'px; position:absolute; margin-top:' + sheet.margin.top +
			'px; margin-left:' + sheet.margin.left + 'px; margin-right:' + sheet.margin.right +
			'px; margin-bottom:'+sheet.margin.bottom+'px; left:'+v.x+'px; top:'+pointerYHtml+'px;'+
			'color:'+color+'">'+fsi+v.text+fsf+'</p>');
			pointerYHtml+=sheet.heightLn;
		}
		if(v.align==='right'){
			var posR = sheet.width - sheet.margin.right - sheet.margin.left - 1 - measureText(v.text, v.fontStyle, v.fontSize, v.fontFamily);
			addHTMLToPage('<p style ="font-size:'+v.fontSize+'px; position:absolute; margin-top:' + sheet.margin.top +
			'px; margin-left:' + sheet.margin.left + 'px; margin-right:' + sheet.margin.right +
			'px; margin-bottom:'+sheet.margin.bottom+'px; left:'+posR+'px; top:'+pointerYHtml+'px;'+
			'color:'+color+'">'+fsi+v.text+fsf+'</p>');
			pointerYHtml+=sheet.heightLn;
		}
		if(v.align==='center'){			
			var posC = (sheet.width - sheet.margin.left - sheet.margin.right)/2 - measureText(v.text, v.fontStyle, v.fontSize, v.fontFamily)/2;
			addHTMLToPage('<p style ="font-size:'+v.fontSize+'px; position:absolute; margin-top:' + sheet.margin.top +
			'px; margin-left:' + sheet.margin.left + 'px; margin-right:' + sheet.margin.right +
			'px; margin-bottom:'+sheet.margin.bottom+'px; left:'+posC+'px; top:'+pointerYHtml+'px;'+
			'color:'+color+'">'+fsi+v.text+fsf+'</p>');
			pointerYHtml+=sheet.heightLn;
		}
		if(v.align==='justify'){
			addHTMLToPage('<p align="justify" style = "font-size:'+v.fontSize+'px; position:absolute; margin-top:' +
			sheet.margin.top + 'px; margin-left:' + sheet.margin.left + 'px; margin-right:' + sheet.margin.right +
			'px; margin-bottom:'+sheet.margin.bottom+'px; left:'+v.x+'px; top:'+pointerYHtml+'px;'+
			'color:'+color+'">'+fsi+v.text+fsf+'</p>');			
			pointerYHtml+=v.heightText;
		}				
	}
	
	function addGraphToPanel(it){
		var v = items[it];
		var html='';
		checkPageBreak(v.height, 1);
		var pos = v.x;		
		if(v.arrLegend.length > 0){
		  if(v.align.toUpperCase()==='CENTER')
		  	pos = (sheet.width - v.width - v.widthLgd)/2;
		  if(v.align.toUpperCase()==='RIGHT')
		    pos = sheet.width - sheet.margin.right - v.width - v.widthLgd;
		  html = '<div style = "position:absolute; left:'+pos+'px; top:'+
		  (pointerYHtml+sheet.margin.top)+'px"><img src="'+v.img.src+'"><img src = "'+v.imgLgd.src+'"></div>';
		}
	  	else{     
	  	  if(v.align.toUpperCase()==='CENTER')
		  	pos = (sheet.width - v.width)/2;
		  if(v.align.toUpperCase()==='RIGHT')
		    pos = sheet.width - sheet.margin.right - v.width;	
	  	  html = '<div style = "position:absolute; left:'+pos+'px; top:'+
	  	  (pointerYHtml+sheet.margin.top)+'px"><img src="'+v.img.src+'"></div>';
	  	}
	  	addHTMLToPage(html);
	  	pointerYHtml += v.height + sheet.heightLn;		
	}
	
	function addImageToPanel(it){
		var v = items[it];
		if(v.y===0)
			v.y = pointerYHtml;
		else{
			pointerYHtml=v.y;
			v.y+=v.height;
		}
		checkPageBreak(v.height, 1);
		
		if(v.align==='center'){	
			var posC = (sheet.width - v.width)/2;
			addHTMLToPage('<img src="'+v.src+'" style="position:absolute; left:'+posC+'px; top:'+
			(sheet.margin.top+pointerYHtml)+'px; width:'+v.width+'px; height:'+v.height+'px">');
			pointerYHtml+=v.height;
		}
		if(v.align==='left'|| v.align===''){	
			addHTMLToPage('<img src="'+v.src+'" style="position:absolute; left:'+(v.x+sheet.margin.left)+'px; top:'+
			(sheet.margin.top+pointerYHtml)+'px; width:'+v.width+'px; height:'+v.height+'px">');
			pointerYHtml+=v.height;
		}
		if(v.align==='right'){	
			var posR = sheet.width - sheet.margin.right - v.width;
			addHTMLToPage('<img src="'+v.src+'" style="position:absolute; left:'+posR+'px; top:'+
			(sheet.margin.top+pointerYHtml)+'px; width:'+v.width+'px; height:'+v.height+'px">');
			pointerYHtml+=v.height;
		}	
	}
	
	//*********************************************** METODOS PUBLICOS ****************************************************
	this.getSheet = function(){
		return sheet;
	};
	
	this.clearReport = function(){
		pointerYHTML = 0;
		pointerYPdf = 0;
		items.length = 0;
	};
	
	this.renderToHTML = function(){
    	setTimeout(function(){renderToHTML_(); show_();},600);
	};
	
	this.renderToPDF = function(){
		renderToHTML_();
		setTimeout(renderToPDF_, 100);
	};	
	
	this.setDimension = function(w,h){
		configObject.width = w;
		configObject.height = h;
	};
	
	this.setPosition = function(cx, cy){
		x = cx;
		y = cy;
		set_Position();
	};
	
	this.show = function(){
		show_();
	};
	
	this.hide = function(){
		hide_();
	};
	
	this.addText = function(options){
		reportBuilder.addText.defaults = {
			"method" : 'addText',
			"x" : 0, 
			"y" : 0,
			"text" : '', 
			"align" : 'left',
			"vAlign" : 'middle',
			"heightText":sheet.heightLn,
			"heightLn":sheet.heightLn,
			"wordBoldArr" : [],
			"width" : sheet.width - sheet.margin.left - sheet.margin.right,
			"fontSize" : 12,
			"fontFamily" : 'verdana',
			"fontStyle" : 'normal',
			"red" : 0,
			"green" : 0,
			"blue" : 0,
			"transparency" : 1			
		};
		var v = (options)? mergeJson(reportBuilder.addText.defaults,options) : reportBuilder.addText.defaults;
		sheet.heightLn = v.fontSize+2;
		if(v.heightLn!==sheet.heightLn)
			sheet.heightLn = v.heightLn;
		v.heightText = getHeightText(v.text, v.x, v.y, v.width, v.align, v.fontSize, v.fontFamily, v.fontStyle, v.red, v.green, v.blue);	
		items[items.length] = v;
	};
	
	this.addImage = function(options){
		reportBuilder.addImage.defaults = {
			"method" : 'addImage',
			"x" : 0, 
			"y" : 0,
			"src" : '', 
			"align" : 'left',
			"width" : (sheet.width - sheet.margin.left - sheet.margin.right)/3,
			"height": (sheet.height - sheet.margin.top - sheet.margin.bottom)/4,
			"img" : new Image(),
			"imgLda" : new Image(),
			"imgLoad": false,
			"rendering":false,
			"imgData" : {},
			"PDF_Y" : 0						
		};
		var v = (options)? mergeJson(reportBuilder.addImage.defaults,options) : reportBuilder.addImage.defaults;
		v.PDF_Y = v.y;
		items[items.length] = v;
	}
	
	this.setSheetMargins = function(options){
		reportBuilder.setSheetMargins.defaults = {
			"left" : 40,
			"top" : 40, 
			"right" : 40,
			"bottom" : 40, 						
		};
		var v = (options)? mergeJson(reportBuilder.setSheetMargins.defaults,options) : reportBuilder.setSheetMargins.defaults;
		sheet.margin.left = v.left;
		sheet.margin.top = v.top;
		sheet.margin.right = v.right;
		sheet.margin.bottom = v.bottom;
	}
	
	
	this.addGraph = function(options){
		reportBuilder.addGraph.defaults = {
			"method" : 'addGraph',
			"x" : 0, 
			"y" : 0,
			"src" : '', 
			"align" : 'left',
			"width" : (sheet.width - sheet.margin.left - sheet.margin.right) - 4,
			"widthLgd" : 0,
			"heightLgd":0,
			"height": (sheet.height - sheet.margin.top - sheet.margin.bottom)/4,
			"data": {},
			"typeGraph":'bar',
			"img" : new Image(),
			"imgLgd" : new Image(),
			"imgLoad": false,
			"rendering":false,
			"arrLegend": []
		};
		var v = (options)? mergeJson(reportBuilder.addGraph.defaults,options) : reportBuilder.addGraph.defaults;
		var it = items.length;
		items[it] = v;
		var g = new Graph(v.width,v.height,v.typeGraph);
	  	v.g=g;
	  	if(v.typeGraph.toUpperCase()==='BAR')
		  g.addBarStruct(v.data);
		if(v.typeGraph.toUpperCase()==='PIE')  
		  g.addPieStruct(v.data);
		if(v.typeGraph.toUpperCase()==='RADAR')  
		  g.addRadarStruct(v.data);
		if(v.typeGraph.toUpperCase()==='LINE')  
		  g.addLineStruct(v.data);
		if(v.typeGraph.toUpperCase()==='POLAR')  
		  g.addPolarStruct(v.data);
		if(v.typeGraph.toUpperCase()==='DOUGHNUT')  
		  g.addDoughnutStruct(v.data);
		
		v.widthLgd =  g.getWidthPanelLgd();
		v.heightLgd = g.getHeightPanelLgd();
		function loadGraf(){ 	  
  			v.img.src = g.getCanvasObject().toDataURL("image/jpg", 1.0);
			v.imgLoad=true;  		
  		}   
		  
  		if(v.arrLegend.length > 0){
		  	g.setLegend(v.arrLegend);
		  	g.draw(true,{animation : false, onAnimationComplete : function(){loadGraf();}});
		  	g.showLegend();
		  	v.imgLgd.src  =  g.getCanvasLegend().toDataURL("image/png",1.0);
		}  
		else
	  		g.draw(false,{animation : false, onAnimationComplete : function(){loadGraf();}});  		
	  	v.height = g.getHeightGraph();
	}
	
		function addTableToPanel(i){
		var v = items[i];
		checkPageBreak(v.barTitleHeight, 2);
		var py = sheet.margin.top + pointerYHtml;
		var bufferTable = '<table cellpadding = "'+v.cellpadding+'px" cellspacing="'+v.cellspacing+'px" ';
		var px = v.x + sheet.margin.left;
		var hx = v.barTitleHeight + sheet.margin.top;
		var w = 0;
		for(var ic=0; ic<v.columnWidth.length; ic++)
		  w+=v.columnWidth[ic];
		if(v.align.toUpperCase()==='CENTER')
		   px = sheet.width/2 - w/2;
		  
		bufferTable += 'style = "border:'+v.borderLn+'px '+v.typeBorder+ '; position:absolute; border-color:'+v.borderColor+'; ';
		bufferTable += 'left:'+px+'px; top:'+py+'px;';  
  		bufferTable +='">';		
		bufferTable+='<tr style="background-color:'+v.bgBarTitle+'; color:'+v.colorTextTitle+'; height:'+v.barTitleHeight+'px">';
		
		for(var j=0; j<v.columnWidth.length; j++){
			bufferTable+='<th align="'+v.alignTitle[j]+'" width="'+v.columnWidth[j]+'px" style="font-family:'+v.fontFamilyTitle+
			'; font-size:'+v.fontSizeTitle+'px; font-weight:'+v.fontWeightTitle+'">'
			bufferTable+=v.columnTitles[j];
			bufferTable+='</th>'
		}
		bufferTable+='</tr>';	
		
		function addTR(f){
			bufferTable+='<tr style="background-color:'+bg+'">';	
			//datos de las columnas
			for(var c=0; c<v.data.length; c++){				
				bufferTable+='<td width = "'+v.columnWidth[c]+'" style="color:'+v.colorText+'; text-align:'+v.columnAlign[c]+
				'; font-size:'+v.fontSizeData+'px; height:'+v.heightCell+'px">';
				bufferTable+=v.data[c][f]+'';
				bufferTable+='</td>';
			}
			bufferTable+='</tr>';			
		}
		
		var bg = v.bgRowOdd;
		for(var f=0; f<v.data[0].length; f++){
			if(f % 2 === 0)
			  bg = v.bgRowEven;
			else
			  bg = v.bgRowOdd;
			hx+=v.heightCell;
			if(!checkPageBreak(hx,3)){
				addTR(f);	
			}
			else{
			   bufferTable+='</table>';
			   addHTMLToPage(bufferTable);
			   mountPage();
		       addPage();
		       pointerYHtml=0;
			   py = sheet.margin.top;
			   hx = py;
			   bufferTable = '<table cellpadding = "'+v.cellpadding+'px" cellspacing="'+v.cellspacing+'px" ';
			   bufferTable += 'style = "border:'+v.borderLn+'px '+v.typeBorder+ '; position:absolute; border-color:'+v.borderColor+'; ';
			   bufferTable += 'left:'+px+'px; top:'+py+'px;';  
  			   bufferTable +='">';
  			   addTR(f);	
			}
		}
		
		bufferTable+='</table>';	
		addHTMLToPage(bufferTable);
	}
	
	function rgbaObj(rgbaStr){
		var spl = rgbaStr.split(',');
		return  obj = {
			red 	: parseInt(spl[0].substr(5,spl[0].length),10),
			green 	: parseInt(spl[1],10),
			blue 	: parseInt(spl[2],10),
			t 		: parseInt(spl[3].substr(0, spl[3].length - 1),10)
		}; 
	}
	
	function addTableToPDF(it){
		var v = items[it];
		var totalWidth = 0;
		for(var j=0; j<v.columnWidth.length; j++){
			totalWidth+=parseInt(v.columnWidth[j],10);	
		}		
		var bgt = rgbaObj(v.bgBarTitle);
		var tcl = rgbaObj(v.colorTextTitle);
		var tc = rgbaObj(v.colorText);
		var acuY = getPt(v.PDF_Y)  + pointerYPdf + getPt(sheet.margin.top);
		
		for(var row = 0; row<= v.rows; row++){
			var acuX = getPt(v.x) + getPt(sheet.margin.left);
			if(v.align.trim().toUpperCase()==='CENTER')
				acuX = getPt(sheet.width)/2 - getPt(totalWidth)/2 - 4 + getPt(sheet.margin.top);
			if(v.align.trim().toUpperCase()==='RIGHT')
				acuX = getPt(sheet.width)/2 - getPt(totalWidth) - 4 + getPt(sheet.margin.top);			
			for(var col = 0; col< v.columnTitles.length; col++){
				if(row ===0){
					doc.setFillColor(bgt.red,bgt.green,bgt.blue);
				  	doc.rect(acuX, acuY, getPt(v.columnWidth[col]), getPt(v.barTitleHeight), 'F');
				  	doc.setFont(v.fontFamilyTitle);
				  	doc.setFontSize(parseInt(v.fontSizeTitle,10));
				  	doc.setTextColor(tcl.red,tcl.green,tcl.blue);
				  	
				  	var px = getPt(measureText(v.columnTitles[col], v.fontWeightTitle, v.fontSizeTitle, v.fontFamilyTitle));
				  	if(v.alignTitle[col].trim().toUpperCase()==='CENTER')
				  		doc.text(acuX + getPt(v.columnWidth[col])/2 - px/2, acuY + getPt(v.barTitleHeight/2)+getPt(v.fontSizeTitle/2) , v.columnTitles[col]);
				  	if(v.alignTitle[col].trim().toUpperCase()==='LEFT')
				  		doc.text(acuX, acuY + getPt(v.barTitleHeight/2)+getPt(v.fontSizeTitle/2) , v.columnTitles[col]);	
				  	if(v.alignTitle[col].trim().toUpperCase()==='RIGHT')
				  		doc.text(acuX + getPt(v.columnWidth[col]) - px - 4, acuY + getPt(v.barTitleHeight/2)+getPt(v.fontSizeTitle/2) , v.columnTitles[col]);	
				}
				else{
					doc.setDrawColor(0,0,0);
					doc.setFillColor(255,255,255);
					doc.rect(acuX, acuY, getPt(v.columnWidth[col]), getPt(v.cellHeight),'FD');
					doc.setFont(v.fontFamilyData);
					doc.setTextColor(tc.red,tc.green,tc.blue);
					doc.setFontSize(v.fontSizeData);
				 	if(row <= v.data[col].length){
					 	var px2 = getPt(measureText(v.data[col][row-1]+"", v.fontWeightData, v.fontSizeData, v.fontFamilyData));
					 	if(v.columnAlign[col].trim().toUpperCase()==='CENTER')
					  		doc.text(acuX + getPt(v.columnWidth[col])/2 - px2/2, acuY + getPt(v.cellHeight/2)+getPt(v.fontSizeData/2) , v.data[col][row-1]+"");
					 	if(v.columnAlign[col].trim().toUpperCase()==='LEFT')
					 		doc.text(acuX + 2, acuY + getPt(v.cellHeight/2)+getPt(v.fontSizeData/2) , v.data[col][row-1]+"");
					 	if(v.columnAlign[col].trim().toUpperCase()==='RIGHT')
					  		doc.text(acuX + getPt(v.columnWidth[col]) - px2 - 2, acuY + getPt(v.cellHeight/2)+getPt(v.fontSizeData/2) , v.data[col][row-1]+"");		
				 	}	
				 	
				}
				acuX+=getPt(v.columnWidth[col]);
			}
			if(row ===0)
				acuY+=getPt(v.barTitleHeight);
			else
				acuY+=getPt(v.cellHeight);	
		}		
	}
	
	this.addTable = function(options){
		reportBuilder.addTable.defaults = {
			"method" 			: 'addTable',
			"x" 				: 0, 
			"y" 				: 0,
			"align" 			: 'LEFT',
			"alignTitle" 		: [''],
			"columnWidth" 		: [100],
			"borderBarTitle"	: 0,
			"columnTitles" 		: [''],
			"fontFamilyTitle"	: 'verdana',
			"fontWeightTitle"	: 'bold',
			"fontSizeTitle"		: 12,
			"fontSizeData"		: 10,
			"fontWeightData"	: 'normal',
			"fontFamilyData"	: 'verdana',
			"columnAlign"		: [''],
			"cellHeight"		: sheet.heightLn,
			"cellpadding"		: 0,
			"cellspacing"		: 0,
			"borderRadius"		: [0,0,0,0],
			"rows" 				: 1,
			"colorText" 		: 'rgba(0,0,0,1)',
			"colorTextTitle"	: 'rgba(255,255,255,1)',
			"bgBarTitle" 		: 'rgba(50,90,120,1)',
			"barTitleHeight" 	: 25,
			"bgRowEven"			: 'rgba(155,155,200,0.1)',
			"bgRowOdd"			: 'rgba(180,180,225,0.1)',
			"borderLn"			: 1,
			"typeBorder"		: 'solid',
			"borderColor"		: 'rgba(0,0,0,1)',
			"PDF_Y"				: 0,
			"data"			   	: []
		};
		var v = (options)? mergeJson(reportBuilder.addTable.defaults,options) : reportBuilder.addTable.defaults;
		v.PDF_Y = v.y;
		items[items.length] = v;
	}
}