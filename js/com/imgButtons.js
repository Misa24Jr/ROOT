var imgButtons = 
{
  objects : new Array,
  ids : new Array,  
  iconPath: "images/",  
  bgImgPath: "images/bg/",    
  bgDisable: "bg53.jpg)",  
  bgEnable: "bg152.jpg)",  
  boderSelected : "#ffaa33",  
addPropertyMethod : function(id)
{
  imgButtons.objects[id].addToBody  =  function()
  {
    imgButtons.addToBody(id);
  }
  imgButtons.objects[id].setText  =  function(text,resize)
  {
    imgButtons.setText(id,text,resize);
  }
  imgButtons.objects[id].hide  =  function()
  {
    imgButtons.hide(id);
  }
  imgButtons.objects[id].setBgImage  =  function(img)
  {
    imgButtons.setBgImage(id,img);
  }
  imgButtons.objects[id].getObject  =  function()
  {
    return imgButtons.getObject(id);
  }
  imgButtons.objects[id].show  =  function()
  {
    imgButtons.show(id);
  }
  imgButtons.objects[id].setDimension  =  function(width,height)
  {
    imgButtons.setDimension(id,width,height);
  }
  imgButtons.objects[id].setAbsolutePosition  =  function(x1,y1,x2,y2)
  {
    imgButtons.setAbsolutePosition(id,x1,y1,x2,y2);
  }
  imgButtons.objects[id].setPositionX  =  function(x)
  {
    imgButtons.setPositionX(id,x);
  }
  imgButtons.objects[id].setPositionY  =  function(x)
  {
    imgButtons.setPositionY(id,x);
  }
  imgButtons.objects[id].setPositionXY  =  function(x1,y1)
  {
    imgButtons.setPositionXY(id,x1,y1);
  }
  imgButtons.objects[id].setRelativePosition  =  function()
  {
    imgButtons.setRelativePosition(id);
  }
  imgButtons.objects[id].setBgColor  =  function(bgColor)
  {
    imgButtons.setBgColor(id,bgColor);
  }
  imgButtons.objects[id].setBorderColor  =  function(borderColor)
  {
    //imgButtons.setBorderColor(id,borderColor);
  }
  imgButtons.objects[id].setBorderWidth  =  function(value)
  {
    imgButtons.setBorderWidth(id,value);
  }
  imgButtons.objects[id].setButtonDown  =  function()
  {
    imgButtons.setButtonDown(id);
  }
  imgButtons.objects[id].setButtonUp  =  function()
  {
    imgButtons.setButtonUp(id);
  }
  imgButtons.objects[id].setFont  =  function( family, color, size)
  {
    imgButtons.setFont(id, family, color, size);
  }
  imgButtons.objects[id].setObjAttrib  =  function(objAttr,env)
  {
    imgButtons.setObjAttrib(id,objAttr,env);
  }
  imgButtons.objects[id].setObjAttribToAll  =  function(objAttr,env)
  {
    imgButtons.setObjAttribToAll(objAttr,env);
  }
  imgButtons.objects[id].setMarginCaption = function(l,r)
  {
  	imgButtons.setMarginCaption(id,l,r);
  }
  imgButtons.objects[id].setLoadBGImg = function(activeLoad)
  {
  	imgButtons.setLoadBGImg(id, activeLoad);
  }
  imgButtons.objects[id].onMouseDown = function(funct)
  {
  	imgButtons.onMouseDown(id,funct);
  }
  imgButtons.objects[id].onMouseMove = function(funct)
  {
  	imgButtons.onMouseMove(id,funct);
  }
  imgButtons.objects[id].onClick  =  function(funct)
  {
    imgButtons.onClick(id,funct);
  }
  imgButtons.objects[id].onMouseOut  =  function(funct)
  {
    imgButtons.onMouseOut(id,funct);
  }
  imgButtons.objects[id].onMouseOver  =  function(funct)
  {
    imgButtons.onMouseOver(id,funct);
  }
  imgButtons.objects[id].setDimensionToAll = function(width,height)
  {
  	imgButtons.setDimensionToAll(width,height);
  }
  imgButtons.objects[id].onMouseUp = function(funct)
  {
  	imgButtons.onMouseUp(id,funct);
  }
  imgButtons.objects[id].setBgImg = function(bgImg)
  {
  	imgButtons.setBgImg(id,bgImg);
  }
  imgButtons.objects[id].setEnable = function()
  {
  	imgButtons.setEnable(id);
  }
  imgButtons.objects[id].isEnabled = function()
  {
  	return imgButtons.isEnabled(id);
  }
  imgButtons.objects[id].setDisable = function()
  {
  	imgButtons.setDisable(id);
  }
  imgButtons.objects[id].setRectBorder = function()
  {
  	imgButtons.setRectBorder(id);
  }
  imgButtons.objects[id].setConfirmEnable = function(msg)
  {
  	imgButtons.setConfirmEnable(id, msg)
  }
  imgButtons.objects[id].setConfirmDisable = function()
  {
  	imgButtons.setConfirmDisable(id)
  }
  imgButtons.objects[id].setFocus = function()
  {
  	imgButtons.setFocus(id);
  }
  imgButtons.objects[id].onFocus = function(funct)
  {
  	imgButtons.onFocus(id,funct);
  }
  
  imgButtons.objects[id].setCaption = function(caption)
  {
	imgButtons.setCaption(id, caption);  
  }
  
  imgButtons.objects[id].getCaption = function()
  {
	return imgButtons.getCaption(id);  
  }

  imgButtons.objects[id].setStsValue = function(stsValue)
  {
	imgButtons.setStsValue(id, stsValue);  
  }
  
  imgButtons.objects[id].getStsValue = function()
  {
	return imgButtons.getStsValue(id);  
  }
},
  addToBody : function(id)
  {
    document.body.appendChild(this.objects[id]);
  },
  
  setStsValue : function(id, stsValue){
	this.objects[id].stsValue = stsValue; 
	if(stsValue!=0)
	  imgButtons.objects[id].enableConfirm = false;
	else
	  imgButtons.objects[id].enableConfirm = true;	
  },
  
  getStsValue : function(id){
	return this.objects[id].stsValue;  
  },
  
  setText : function(id,text)
  {
  	this.objects[id].tableContainer.rows[0].cells[1].innerHTML=text;
    this.objects[id].wImgButton = 20 + text.length*8;
	this.setDimension(id,this.objects[id].wImgButton,this.objects[id].hImgButton); 
  },
  setRectBorder : function(id)
  {
  	//this.objects[id].style.borderRadius='0em';
  },
  setConfirmEnable : function(id, msg)
  {
  	if(msg != null)
  	{
  	  imgButtons.objects[id].confirmMsg = msg;
  	}
  	else
  	{	
  	  imgButtons.objects[id].confirmMsg = '¿Desea realizar la opción ' + this.objects[id].caption+'?';	
  	}  
	imgButtons.objects[id].enableConfirm = true;
  },  
  setConfirmDisable : function(id)
  {
	this.objects[id].enableConfirm = false;
  },  
  
  setCaption : function(id, caption)
  {
	  this.objects[id].tableContainer.rows[0].cells[1].innerHTML = caption;  
	  this.objects[id].caption = caption;
  },
  
  getCaption : function(id)
  {
	  return this.objects[id].caption;
  },

  create : function(id,caption, icono)
  {
    this.objects[id] = document.createElement("div");
    this.objects[id].id = id;
    this.objects[id].stsValue = 0;
    this.objects[id].sts_Show = true;
    this.objects[id].nameComponent = 'imgButtons';
    this.objects[id].onFocus = new Function(''); 
    this.objects[id].style.borderWidth='1px';
    this.objects[id].borderColor ='#aeaeae';
    //this.objects[id].style.borderRadius='1em';
	this.objects[id].loadBGImg = false;
	this.objects[id].caption = caption;
	this.objects[id].enable = true;
	this.objects[id].enableConfirm = false;
	this.objects[id].confirmMsg = null;
	if((caption.toUpperCase()=='ELIMINAR') || (caption.toUpperCase()=='MODIFICAR') || (caption.toUpperCase()=='GUARDAR'))
	{
	  this.setConfirmEnable(id,null);
	}    
	this.objects[id].confirmAmbiente = 1;
	this.objects[id].confirmMethod = new Function('');
	this.ids[this.ids.length] = id;
    this.objects[id].tabOrder = this.ids.length;
    this.objects[id].img = document.createElement("img");
	this.objects[id].tableContainer =  document.createElement("table");
	this.objects[id].tableContainer.setAttribute("border", "0");
    this.objects[id].tableContainer.setAttribute("cellPadding", "0");
    this.objects[id].tableContainer.setAttribute("cellSpacing", "0");
	this.objects[id].tableContainer.insertRow(0);
	this.objects[id].tableContainer.rows[0].insertCell(0);
    this.objects[id].tableContainer.rows[0].insertCell(1);
    this.objects[id].tableContainer.rows[0].insertCell(2);
    this.objects[id].tableContainer.rows[0].insertCell(3);
    this.objects[id].tableContainer.rows[0].insertCell(4);
    this.objects[id].icon = document.createElement("div");
    this.objects[id].icon.img = document.createElement("img");
    this.objects[id].tableContainer.rows[0].cells[1].innerHTML = this.objects[id].caption;
	this.objects[id].tableContainer.rows[0].cells[1].align = 'center';
	this.objects[id].align = 'center';
	this.objects[id].icon.align = 'center';
	this.objects[id].icon.style.fontSize='0px';
    //this.objects[id].icon.img.src = this.iconPath+icono;
	//this.objects[id].icon.appendChild(this.objects[id].icon.img);
	//this.objects[id].tableContainer.rows[0].cells[3].appendChild(this.objects[id].icon);
	this.objects[id].appendChild(this.objects[id].tableContainer)	
	this.setMarginCaption(id,10,10);
	this.setButtonUp(id);
    this.objects[id].wImgButton = 20 + caption.length*8;
    this.objects[id].hImgButton = 20;
    this.objects[id].functDown = new Function("");
	this.objects[id].functMouseOut = new Function("");
	this.objects[id].functMouseOver = new Function("");
	this.objects[id].functOnClick = new Function("");
	this.objects[id].input = document.createElement('input');
	this.objects[id].input.type ='button';
	this.objects[id].input.style.width='1px';
	this.objects[id].input.style.height='1px';
	this.objects[id].input.style.borderStyle='none';
	this.objects[id].input.style.fontSize='0px';
	this.objects[id].input.style.position = 'absolute';
	this.objects[id].input.style.left = '-1000px';
	this.objects[id].input.style.top = '-1000px';
    this.objects[id].tableContainer.rows[0].cells[0].appendChild(this.objects[id].input);
    this.objects[id].isSelected = false;
    this.setBorderWidth(id,1);
    this.setFont(id, "arial", "black",12);
    imgButtons.objects[id].onmousedown = function()
    {
	  if (imgButtons.objects[id].enable) 
	  {
	  	//imgButtons.setButtonDown(id);
	  	if(imgButtons.objects[id].enableConfirm)
        {
          confirmDlg.confirm(imgButtons.objects[id].confirmMsg, 
          imgButtons.objects[id].confirmMethod, 
          imgButtons.objects[id].confirmAmbiente);	
        }
        else
	  	  imgButtons.objects[id].functDown();
	  }
    }
    imgButtons.objects[id].onclick = function()
    {
      if (imgButtons.objects[id].enable) 
	  {
	  	//imgButtons.setButtonDown(id);
	  	if(imgButtons.objects[id].enableConfirm)
        {
          confirmDlg.confirm(imgButtons.objects[id].confirmMsg, 
          imgButtons.objects[id].confirmMethod, 
          imgButtons.objects[id].confirmAmbiente);	
        }
        else
	  	  imgButtons.objects[id].functOnClick();  
	  }
    }
    
    imgButtons.objects[id].onmouseout = function()
    {
	  //imgButtons.setButtonUp(id);
	  imgButtons.objects[id].functMouseOut();
	  //imgButtons.setDiselected(id);
    }    
    
    imgButtons.objects[id].onmouseover = function()
    {
	  if (imgButtons.objects[id].enable) 
	  {
	  	imgButtons.objects[id].style.cursor = "pointer";
	  	imgButtons.setFocus(id);
	  	//imgButtons.setSelected(id);
	  	imgButtons.objects[id].functMouseOver();
	  }	
    }
    imgButtons.objects[id].input.onkeydown = function(e)
    {
      var newKey='';	
      if(document.all)
	  {
	    if(window.event)
	    {
	   	  newkey=window.event;
	    }
	  }
	  else
	  {
	    newkey = e.keyCode;
	  }
	  switch(newkey)
	  {
	    case 13 : 
	    {
	      imgButtons.setDiselected(id);	
	      if (imgButtons.objects[id].enable) 
	      {
	  	    imgButtons.setButtonDown(id);
	  	    if(imgButtons.objects[id].enableConfirm)
            {
              confirmDlg.confirm(imgButtons.objects[id].confirmMsg, 
              imgButtons.objects[id].confirmMethod, 
              imgButtons.objects[id].confirmAmbiente);	
            }
            else
	  	      imgButtons.objects[id].functOnClick();
	      }   		
	      break;
	    }
	    case 39 : 
	    {
	    	var to = imgButtons.objects[id].tabOrder;
	    	if(to < imgButtons.ids.length)
	      	{
	          var idx = imgButtons.ids[to];
	    	  imgButtons.setFocus(idx);
	        } 
	      break;
	    }
	    case 37 : 
	    {
	    	var to = imgButtons.objects[id].tabOrder;
	    	if(to > 1)
	      	{
	          var idx = imgButtons.ids[to-2];
	    	  imgButtons.setFocus(idx);
	        } 
	      break;
	    }
	  }
    }
    
    imgButtons.objects[id].input.onfocus = function(e)
    {
      imgButtons.setSelected(id);
      imgButtons.objects[id].isSelected = true;
      imgButtons.objects[id].onFocus();
    }
    
    imgButtons.objects[id].input.onblur = function(e)
    {
      imgButtons.setDiselected(id);
      imgButtons.objects[id].isSelected = false;
    }
    
	this.addPropertyMethod(id);
	if(attrib)
      this.setObjAttrib(id,attrib,attrib.getActualEnv());
	return this.objects[id];
  },
  
  setSelected : function(id)
  {
  	//imgButtons.objects[id].style.borderColor=this.boderSelected;
    //imgButtons.objects[id].style.borderWidth='1px';
  },
  
  setDiselected : function(id)
  {
  	//imgButtons.objects[id].style.borderColor=this.objects[id].borderColor;
    //imgButtons.objects[id].style.borderWidth='1px';
    //imgButtons.objects[id].style.borderStyle='outset';
  },
  setFocus : function(id)
  {
  	this.objects[id].input.focus();
  },
  hide : function(id)
  {
    this.objects[id].style.display='none';
    this.objects[id].sts_Show = false;
  },
  onClick : function(id,funct)
  {
  	this.objects[id].functOnClick = new Function(funct);
  	this.objects[id].confirmMethod = funct;
  },
  onFocus : function(id,funct)
  {
  	this.objects[id].onFocus = new Function(funct);
  },
  onMouseMove : function(id,funct)
  {
    this.objects[id].onmousemove = new Function(funct);
  },
  onMouseOut : function(id,funct)
  {
    this.objects[id].functMouseOut = new Function(funct);
  },
  onMouseDown : function(id,funct)
  {
    this.objects[id].functDown = new Function(funct);
  },
  onMouseUp : function(id,funct)
  {
    this.objects[id].onmouseup = new Function(funct);
  },
  onMouseOver : function(id,funct)
  {
    this.objects[id].functMouseOver = new Function(funct);
  }, 
  setBgImage : function(id,img)
  {
	//this.objects[id].style.backgroundImage= 'url('+this.bgImgPath+img+')';
  },
  getObject : function(id)
  {
    return this.objects[id];
  },
  show : function(id)
  {
    this.objects[id].style.display='block';
    this.objects[id].sts_Show = true;
  },
  setMarginCaption : function(id,l,r)
  {
  	this.objects[id].tableContainer.rows[0].cells[0].width = l+'px';
	this.objects[id].tableContainer.rows[0].cells[2].width = r+'px';
	this.objects[id].tableContainer.rows[0].cells[4].width = l+'px';
  },
  setDimension : function(id,width,height)
  {
    this.objects[id].style.width=width+'px'; 
    this.objects[id].style.height=height+'px';
    this.objects[id].style.lineHeight=height+'px';
    this.objects[id].vAlign='middle';
	this.objects[id].tableContainer.rows[0].cells[0].style.lineHeight= height+'px';
	this.objects[id].tableContainer.rows[0].cells[0].style.height= height+'px';
	this.objects[id].tableContainer.rows[0].cells[0].vAlign = 'middle';
	this.objects[id].tableContainer.rows[0].cells[1].style.width = width+'px';
	this.objects[id].tableContainer.rows[0].cells[1].style.lineHeight= height+'px';
	this.objects[id].tableContainer.rows[0].cells[1].style.height= height+'px';
	this.objects[id].tableContainer.rows[0].cells[1].vAlign = 'middle';
	this.objects[id].tableContainer.rows[0].cells[2].style.lineHeight= height+'px';
	this.objects[id].tableContainer.rows[0].cells[2].style.height= height+'px';
	this.objects[id].tableContainer.rows[0].cells[2].vAlign = 'middle';
	this.objects[id].tableContainer.rows[0].cells[3].style.lineHeight= height+'px';
	this.objects[id].tableContainer.rows[0].cells[3].style.height= height+'px';
	this.objects[id].tableContainer.rows[0].cells[3].vAlign = 'middle';
	this.objects[id].tableContainer.rows[0].cells[4].style.lineHeight= height+'px';
	this.objects[id].tableContainer.rows[0].cells[4].style.height= height+'px';
	this.objects[id].tableContainer.rows[0].cells[4].vAlign = 'middle';
  },
  setDimensionToAll : function(width,height)
  {
  	for (i = 0; i < this.ids.length; i++) 
	{
	  this.setDimension(this.ids[i],width,height);
	}
  },
  setAbsolutePosition : function(id,x1,y1,x2,y2)
  {
    if(this.objects[id].style.position!='absolute')
    {
      this.objects[id].style.position='absolute';
    }
    this.objects[id].style.left=x1+'px'; 
    this.objects[id].style.top=y1+'px';
    this.objects[id].style.width=x2+'px'; 
    this.objects[id].style.height=y2+'px';
  },
  setPositionX : function(id,x)
  {
    if(this.objects[id].style.position!='absolute')
    {
      this.objects[id].style.position='absolute';
    }
    this.objects[id].style.left=this.objects[id].x1+'px';
  },
  setPositionY : function(id,x)
  {
    if(this.objects[id].style.position!='absolute')
    {
      this.objects[id].style.position='absolute';
    }
    this.objects[id].style.top=this.objects[id].y1+'px';
  },
  setPositionXY : function(id,x1,y1)
  {
    if(this.objects[id].style.position!='absolute')
    {
      this.objects[id].style.position='absolute';
    }
    this.objects[id].style.left=x1+'px'; 
    this.objects[id].style.top=y1+'px';
  }, 
  setRelativePosition : function(id)
  {
    this.objects[id].style.position='relative';  
  },
  setBgColor : function(id,bgColor)
  {
    //this.objects[id].style.backgroundColor= bgColor; 
  },
  setBorderColor : function(id,borderColor)
  {
    //this.objects[id].style.borderColor= borderColor; 
  },
  setBorderWidth : function(id,value)
  {
    this.objects[id].style.borderWidth= value+'px'; 
  },
  setButtonDown : function(id)
  {
    //this.objects[id].style.borderStyle="inset";
  },
  setButtonUp : function(id)
  {
    //this.objects[id].style.borderStyle="outset";
  },
  setFont : function(id, family, color, size)
  {
  	var ns = parseInt(size,10) + 6;
	  var iSize = ns - 4;
  	var caption = this.objects[id].tableContainer.rows[0].cells[1].innerHTML;
  	this.objects[id].wImgButton = 30 + caption.length*(size-size/2);
	  //this.objects[id].hImgButton = ns;
	  this.setDimension(id,this.objects[id].wImgButton,this.objects[id].hImgButton);
   	//this.objects[id].style.fontFamily = family;
  	//this.objects[id].style.fontSize = size+"px";
  	//this.objects[id].style.color = color;
  	//this.objects[id].icon.style.width = iSize  + 'px';
  	//this.objects[id].icon.style.height = iSize  + 'px';
  	//this.objects[id].icon.style.lineHeight = iSize  + 'px';
  	//this.objects[id].icon.vAlign = 'middle';
  	//this.objects[id].icon.img.style.width = iSize + 'px';
  	//this.objects[id].icon.img.style.height = iSize + 'px';
  },
  setBgImg : function(id,bgImg)
  {	
    //var bgi = 'url(' + this.bgImgPath + bgImg + ')';
	  //this.objects[id].style.backgroundImage = bgi;
  },
  setEnable : function(id)
  {
  	this.objects[id].enable=true;
	  //this.setBgImg(id,this.bgEnable);
	  this.objects[id].style.opacity = 1;
  },
  
  isEnabled : function(id) {
	  return this.objects[id].enable;
  },
  
  setDisable : function(id)
  {
  	this.objects[id].enable=false;
	  //this.setBgImg(id,this.bgDisable);
	  this.objects[id].style.opacity = 0.5;
  },
  setObjAttrib : function(id,objAttr,env)
  {
  	/*
  	this.objects[id].loadBGImg = objAttr.getLoadBGImg();
    this.setFont(id, objAttr.Font.imgButton[env], objAttr.Color.textCaption[env], objAttr.Size.textCaption[env]);
  	this.setBorderWidth(id,objAttr.Size.borderButton[env]);
  	this.objects[id].confirmAmbiente = env;
  	if (this.objects[id].loadBGImg) 
  	{
  		this.bgEnable  = objAttr.BgImg.bgButton[env];
  		this.bgDisable = objAttr.BgImg.bgButtonDisable[env];
  		if(this.objects[id].enable)
  		{
  		  this.setBgImg(id,this.bgEnable);	
  		} 
  		else
  		{
  		  this.setBgImg(id,this.bgDisable);	
  		}  	
  		this.objects[id].borderColor = objAttr.Color.borderButton[env];
  		this.setBorderColor(id,this.objects[id].borderColor);
	  }
  	else
  	{
  	  this.setBgColor(id,objAttr.Color.bgPanel[env]);
        this.setBorderColor(id,objAttr.Color.borderButton[env]);	
  	}
  	*/
  	this.objects[id].className = this.objects[id].nameComponent + 'Css'+attrib.getActualEnv();
  	this.objects[id].tableContainer.rows[0].cells[1].className = 'imgButtonCaptionCss'+attrib.getActualEnv();
  },
  setObjAttribToAll : function(objAttrib,env)
  {
  /*
    for(i=0;i<this.ids.length;i++)
    {
      this.setObjAttrib(this.ids[i],attrib,env);
    }
    */
  },   
  setLoadBGImg : function(id, activeLoad)
  {
  	//this.objects[id].loadBGImg = activeLoad;
  },
  setLoadBGImgAll : function(activeLoad)
  {
  /*
  	for(i=0;i<this.ids.length;i++)
    {
      //this.setLoadBGImg(this.ids[i],activeLoad);
    }
  */
  }
}