function Slider(dx, dy){
	var cb = new CanvasBuilder(null, dx, dy);
	var ctx = cb.getCanvasContext();
	var panel = cb.getPanelCanvas();//div	
	var imagePath = new Array();
	var events = new Array();
	var item = 0;
	var px = dx;
    var buttonIzq = new CanvasBuilder(null, 40, 40);
    var buttonDer = new CanvasBuilder(null, 40, 40); 
    var velocity = 20;
    var timeDelay = 10;
    var circle1 = document.createElement('div');
    var circle2= document.createElement('div');
    var circle3 = document.createElement('div');
    var indexPage = new Array();
    var itemPage = 0;
    var rotar = new Object();
    var timeRotation = 5;
    var bgColorButton = 'rgba(100,100,100,0.5)';
    var bgColorButtonPage = 'rgba(200,200,200,0.5)';
    var bgButtonSelected = 'rgba(80,80,80,0.5)';
    var images = new Array(); 
    
    cb.getCanvasObj().addEventListener("click", function() {events[item]();}, false);
    cb.getCanvasObj().addEventListener("mouseover", 
    function() {
      if(typeof events[item] == 'function')
   	    panel.style.cursor='pointer';
   	  else
   	    panel.style.cursor='default';
    }, false);
    	
    var setIndex = function(){ 	    	
      circle1.innerHTML =  indexPage[itemPage*3] + 1;
      if(indexPage.length > itemPage*3 + 1)
        circle2.innerHTML =  indexPage[itemPage*3] + 2;
      else
        circle2.innerHTML =  '';
      if(indexPage.length > itemPage*3 + 2)
        circle3.innerHTML =  indexPage[itemPage*3] + 3;
      else
        circle3.innerHTML =  '';
    };
    
    var divSelected = function(n){
    	itemPage = parseInt((n-1)/3,10);
        circle1.style.backgroundColor = bgColorButtonPage;           
        circle1.style.bordeStyle = 'groove';
        circle1.style.cursor='default';
        circle1.style.color = 'black';   

        circle2.style.backgroundColor = bgColorButtonPage;           
        circle2.style.bordeStyle = 'groove';
        circle2.style.cursor='default';
        circle2.style.color = 'black';
        
        circle3.style.backgroundColor = bgColorButtonPage;           
        circle3.style.bordeStyle = 'groove';
        circle3.style.cursor='default';
        circle3.style.color = 'black';
        
        var ds = new Object();

        switch(n-itemPage*3){
            case 1 : {
                       ds = circle1;
                       break;
                     }
            case 2 : {
                       ds = circle2;
                       break;
                    };
            case 3 : {
                       ds = circle3;  
                       break;
                    };
        };
        
        ds.style.backgroundColor = bgButtonSelected;
        ds.style.bordeStyle = 'outset';   
        ds.style.fontSize = '9px';  
        ds.style.color = 'white';
        ds.align ='center';
        ds.style.lineHeight='20px';
        ds.style.vAlign ='middle';      
        ds.style.cursor='pointer';  
        item = n - 1;                
        setIndex();
        showNow();
    };
    
    var initDiv = function(objDiv,x,y, it){
      objDiv.style.position = 'absolute';
      objDiv.style.left = x + 'px';
      objDiv.style.top = y + 'px';
      objDiv.style.width = '20px';
      objDiv.style.height = '20px';
      objDiv.style.borderRadius= '2em';
      objDiv.style.borderBottomLeftRadius = '2em';
      objDiv.style.borderBottomRightRadius = '2em';
      objDiv.style.borderTopLeftRadius= '2em';
      objDiv.style.borderTopRightRadius= '2em';
      objDiv.style.bordeStyle = 'groove';    
      objDiv.style.display = 'block'; 
      objDiv.style.backgroundColor = bgColorButton; 
      objDiv.style.fontSize = '9px';  
      objDiv.align ='center';
      objDiv.style.lineHeight='20px';
      objDiv.style.vAlign ='middle';
      objDiv.it = it;
      objDiv.isClick = false;
      panel.appendChild(objDiv);
      
      objDiv.onmouseover = function(e){
        objDiv.style.cursor='pointer';  
        if(this.it+itemPage*3!=item+1){
          objDiv.style.backgroundColor = bgButtonSelected;
          objDiv.style.color = 'black';
          objDiv.style.bordeStyle = 'outset';   
          objDiv.style.fontSize = '9px';  
          objDiv.align ='center';
          objDiv.style.lineHeight='20px';
          objDiv.style.vAlign ='middle';      
        }
      };
      
      objDiv.onmouseout = function(e){
        objDiv.style.cursor='default';  
        if(this.it+itemPage*3!=item+1){
          objDiv.style.backgroundColor = bgColorButtonPage;	
          objDiv.style.color = 'black';            
          objDiv.style.bordeStyle = 'groove';
        }
        if(objDiv.isClick){
	      rotar = setInterval(showNext,timeRotation*1000);
	      objDiv.isClick = false;
	    }
      };  
      
      objDiv.onclick = function(e){
      	px = dx;
        divSelected(this.it+itemPage*3); 
        clearInterval(rotar);//stopRotation	
        objDiv.isClick = true;
      }; 
    };
    
    var initImg = function(imgObj,x,y,w,h){
	  imgObj.style.position = 'absolute';
      imgObj.style.left = x + 'px';
      imgObj.style.top = y + 'px';
	  imgObj.style.width = w + 'px';
	  imgObj.style.height = h + 'px';
	  imgObj.style.borderStyle = 'none';
	  imgObj.style.borderStyle = 'none';
	  imgObj.style.borderWidth = '0px';	
	};
	
	var showNow = function(){
	  if(item < indexPage.length){	
        if(images[item]==undefined){
          images[item] = document.createElement('img');
          initImg(images[item],0,0,dx,dy);
          images[item].src = imagePath[item];
        }	
        var intervalo = setInterval(function(){
      	  ctx.drawImage(images[item],px,0,dx,dy);
      	  if(px>0){
      	    if(px<=0){
      	      clearInterval(intervalo);	
      	    }
      	    px=px-velocity;
      	  }
      	  else{
      	    if(px==0){
      	      clearInterval(intervalo);	
      	    }
      	    px=px+velocity;
      	  }
      	
        },timeDelay);
      }
    };
    
    buttonDer.getPanelCanvas().onclick = function(e){
      showNext(); 
      clearInterval(rotar);	//stopRotation  
      buttonDer.isClick = true;
    };
    
    buttonIzq.getPanelCanvas().onclick = function(e){
      showPrior();  
      clearInterval(rotar);//stopRotation	
      buttonIzq.isClick = true;
    };
    
    buttonDer.getPanelCanvas().onmouseover = function(e){
      this.style.cursor='pointer';  
      setButton(buttonDer,0,'white');
    };
    
    buttonIzq.getPanelCanvas().onmouseover = function(e){
      var ctx = buttonIzq.getCanvasContext();
      this.style.cursor='pointer';  
      setButton(buttonIzq,1,'white');
    };
    
    buttonDer.getPanelCanvas().onmouseout = function(e){
      this.style.cursor='default';  
      setButton(buttonDer,0,'rgba(255, 255, 255, 0.3)');
      if(buttonDer.isClick){
        rotar = setInterval(showNext,timeRotation*1000);
        buttonDer.isClick = false;
      }
    };
    
    buttonIzq.getPanelCanvas().onmouseout = function(e){
      this.style.cursor='default';  
      var ctx = buttonIzq.getCanvasContext();
      setButton(buttonIzq,1,'rgba(255, 255, 255, 0.3)');
      if(buttonIzq.isClick){
        rotar = setInterval(showNext,timeRotation*1000);
        buttonIzq.isClick = false;
      }
    };
    
    var setButton = function(objB, dir, bg){
      var Objctx   = objB.getCanvasContext();
      Objctx.clearRect(0,0,60,60);
      if(dir==1){
        Objctx.beginPath();
        Objctx.lineWidth=4;
        Objctx.moveTo(37,10);
        Objctx.lineTo(20,25);
        Objctx.lineTo(37,40);
        Objctx.strokeStyle = bg;
        Objctx.stroke();
        Objctx.closePath();    
      }
      else{
        Objctx.beginPath();
        Objctx.lineWidth=4;
        Objctx.moveTo(20,10);
        Objctx.lineTo(37,25);
        Objctx.lineTo(20,40);
        Objctx.strokeStyle = bg;
        Objctx.stroke();
        Objctx.closePath();  
      }; 
    };
    
    var initButton = function(ObjButton, x, y, w, h, dir){
      var Objctx   = ObjButton.getCanvasContext();
      var ObjPanel = ObjButton.getPanelCanvas();
      ObjButton.isClick = false;
      ObjButton.setDimension(w, h);
      ObjPanel.dir = dir;
      ObjPanel.style.position = 'absolute';
      ObjPanel.style.left = x + 'px';
      ObjPanel.style.top = y + 'px';
      ObjPanel.style.backgroundColor = bgColorButton; 
      ObjPanel.style.display = 'block';
      ObjPanel.style.width = w+'px';
      ObjPanel.style.height = h+'px';
      ObjPanel.style.borderRadius= '1em';
      ObjPanel.style.borderBottomLeftRadius = '0.5em';
      ObjPanel.style.borderBottomRightRadius = '0.5em';
      ObjPanel.style.borderTopLeftRadius= '0.5em';
      ObjPanel.style.borderTopRightRadius= '0.5em';    
    
      setButton(ObjButton,dir,'rgba(250, 250, 250, 0.4)');    
      panel.appendChild(ObjPanel);   
    };
    
    
    initButton(buttonIzq, 20, parseInt((dy/2),10) - 30 ,60,50,1);
	initButton(buttonDer, (dx-80), parseInt((dy/2),10) - 30,60,50,2);
	initDiv(circle1, dx/2 - 49, dy - 30, 1);
	initDiv(circle2, dx/2 - 9, dy - 30, 2);
	initDiv(circle3, dx/2 + 31, dy - 30, 3);
	cb.addToBody();
	cb.setBgColor('rgba(0,0,0,0.0)');	
	
	this.setRotation = function(time){	
	  timeRotation = time;	
	  rotar = setInterval(showNext,time*1000);
	};
	
	this.stopRotation = function(){
	  clearInterval(rotar);	
	};
	
	this.setDimension = function(w, h){
	  cb.setDimension(w, h);
	};

    this.setTimeDelay = function(td){
      timeDelay = td;    
    };	
    
	this.setPosition = function(x, y){
	  panel.style.position = 'absolute';
	  panel.style.left = x + 'px';
	  panel.style.top = y + 'px';
	};
	
	this.setBgColor = function(rgbaColor)
    {
      cb.setBgColor(rgbaColor);  
    };
    
    this.removeImg = function(index){
      imagePath.splice(index,1);	
    };
    
    this.addImage = function(imgPath){
      imagePath[imagePath.length] = imgPath;
      indexPage[indexPage.length]=indexPage.length;
      events[events.length] = new Object();
    };
    
    this.setEvents = function(index, funct){
      events[index-1] = new Function(funct);
    };
    
    this.showOne = function(index){
      px = dx;
      item = index;	
      divSelected(item+1);
    };
    
    this.show = function(){
      divSelected(item+1);
    };
    
    this.getPanel = function(){
      return panel;	
    };
    
    var showFirst = function(){
      item=0;	
      divSelected(item+1);
    };
    
    var showNext = function(){
      px = dx;
      item++;
      if(item >= imagePath.length)
        item=0;	
      divSelected(item+1);
    };
    
    var showPrior = function(){
      px = -dx;
      item--;
      if(item < 0)
        item = imagePath.length-1;	
      divSelected(item+1);
    };    
};
