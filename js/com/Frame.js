var Frame = function(w)
{
	var gradientPanel = ['rgb(30,30,80)','rgb(70,90,120)','rgb(100,150,210)'];
	var fr = new PanelBuilder(null,w,parseInt(screen.height,10)-251);
    fr.addToBody();
    fr.setAbsoluteMode();
    fr.setPosition(parseInt(screen.width,10)-w,130);
    fr.setFillGradient(0,0,200,300,gradientPanel);
    fr.setRadius(0,0,0,0);
  	fr.show();
	var index=0;
	var fade=0;
  	var arrImg = ['blanco.png','cartelera.png','curso_excepcional_1.png'];
  	var img = new Image();
  	var ctx = fr.getCanvasBuilder().getCanvasContext();
	var randomImg=function()
	{	
	  if(index >= arrImg.length)
	    index=0;		  
	  img.src='images/'+arrImg[index]; 
	  img.onload=function(e)
	  {
	  	ctx.clearRect(40,40,w-80,parseInt(screen.height,10)-321);
	  	fr.setFillGradient(0,0,200,300,gradientPanel);
	  	ctx.drawImage(img,40,40, w-80, parseInt(screen.height,10)-321);
	  };
	  index++; 	
	};  	    
	randomImg();
  	var interval = setInterval(randomImg,3000);
};
