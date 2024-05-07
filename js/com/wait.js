var wait =
{
  BGCOLOR : "#aaaaaa",
  IMG : "images/wait.gif",
  BORDERSTYLE : "outset",
  BORDERSIZE : "1", 
  objects: new Array,
  ids : new Array,  
  bgImgPath :"images/bg/",
  imgModal :"shadow-c.png",
addPropertyMethod : function(id)
{
  wait.objects[id].addToBody  =  function()
  {
    wait.addToBody(id);
  }
  
  wait.objects[id].bringToFrom = function()
  {
    wait.bringToFrom(id);
  }
  
  wait.objects[id].getObject  =  function()
  {
    return wait.getObject(id);
  }
  wait.objects[id].hide  =  function()
  {
    wait.hide(id);
  }
  wait.objects[id].setAbsolutePosition  =  function()
  {
    wait.setAbsolutePosition(id);
  }
  wait.objects[id].setCenterScreen = function()
  {
  	wait.setCenterScreen(id);
  }	
  wait.objects[id].setBackGroundColor  =  function( bgColor)
  {
    wait.setBackGroundColor(id, bgColor);
  }
  wait.objects[id].setBorderSize  =  function( borderSize)
  {
    wait.setBorderSize(id, borderSize);
  }
  wait.objects[id].setBorderStyle  =  function( borderStyle)
  {
    wait.setBorderStyle(id, borderStyle);
  }
  wait.objects[id].setDimension  =  function(w,h)
  {
    wait.setDimension(id,w,h);
  }
  wait.objects[id].setFont = function(fontFamily, fontSize, fontColor)
  {
  	wait.setFont(id, fontFamily, fontSize, fontColor);
  }
  wait.objects[id].setObjAttrib  =  function( objAttr, env)
  {
    wait.setObjAttrib(id, objAttr, env);
  }
  wait.objects[id].setObjAttribToAll  =  function( objAttrib, env)
  {
    wait.setObjAttribToAll(objAttrib,env);
  }
  wait.objects[id].setPosition  =  function(x,y)
  {
    wait.setPosition(id,x,y);
  }
  wait.objects[id].setRelativePosition  =  function()
  {
    wait.setRelativePosition(id);
  }
  wait.objects[id].show  =  function(msg, autoSizeWidth)
  {
    wait.show(id,msg, autoSizeWidth);
  }
  wait.objects[id].showCenter  =  function(msg, autoSizeWidth)
  {
    wait.showCenter(id, msg, autoSizeWidth);
  }
  wait.objects[id].setLoadBGImg = function(activeLoad)
  {
	wait.setLoadBGImg(id, activeLoad);
  }
  wait.objects[id].setLoadBGImgAll = function(activeLoad)
  {
	wait.setLoadBGImgAll(activeLoad);
  }
  wait.objects[id].setBgBodyImg = function(bgImg)
  {
  	wait.setBgBodyImg(id, bgImg);
  }
  wait.objects[id].setModal = function()
  {
  	wait.setModal(id);
  }
  wait.objects[id].delModal = function()
  {
  	wait.delModal(id);
  }
  wait.objects[id].enableModal = function()
  {
  	wait.enableModal(id);
  }
  wait.objects[id].disableModal = function()
  {
  	wait.disableModal(id);
  }
},
  addToBody : function(id)
  {
    document.body.appendChild(this.objects[id]);
  },
  
  bringToFrom : function(id)
  {
    this.objects[id].style.zIndex = 10000000;
  },
  create : function(id)
  {
  	this.objects[id] = document.createElement("div");
  	this.objects[id].isModal = true;
  	this.objects[id].divModal = document.createElement("div");
  	this.objects[id].divModal.style.backgroundImage = 'url('+this.bgImgPath + this.imgModal+')';
  	this.objects[id].divModal.style.width = '0px';
    this.objects[id].divModal.style.height = '0px';
  	document.body.appendChild(this.objects[id].divModal);
  	this.objects[id].nameComponent = 'wait';
	this.ids[this.ids.length] = id;
	this.objects[id].id = id;
	this.objects[id].loadBGImg = false;
	this.objects[id].zIndex = 100;
	this.image = document.createElement("img");
	this.image.src = this.IMG;
	this.objects[id].table = document.createElement("table");
	this.objects[id].table.setAttribute('border',0);
	this.objects[id].table.insertRow(0);	  
	this.objects[id].table.rows[0].insertCell(0);
	this.objects[id].table.rows[0].insertCell(1);	
	this.objects[id].dimHight=25;
	this.objects[id].dimWidth=400;
	this.setDimension(id,this.objects[id].dimWidth,this.objects[id].dimHight);
	this.objects[id].appendChild(this.objects[id].table);
	this.objects[id].table.rows[0].cells[1].appendChild(this.image);
	this.addToBody(id);
	this.setBorderSize(id,1);
	this.setBorderStyle(id,"outset");
	this.setFont(id,"verdana",12,"black");
	this.hide(id);
	this.addPropertyMethod(id);
	this.objects[id].style.borderRadius='1em';
	return this.objects[id];
  },
  enableModal : function(id)
  {
  	this.objects[id].isModal = true;
  },
  disableModal : function(id)
  {
  	this.objects[id].isModal = false;
  	this.delModal(id);
  },
  getObject : function(id)
  {
    return this.objects[id];
  },
  hide : function(id)
  {
    this.objects[id].style.display = "none";
	this.delModal(id);
  },
  setAbsolutePosition : function(id)
  {
  	this.objects[id].style.position = "absolute";
  },
  setBackGroundColor : function(id, bgColor)
  {
    this.objects[id].style.backgroundColor = bgColor;
  },
  setBorderSize : function(id, borderSize)
  {
    this.objects[id].style.borderWidth = borderSize + "px";
  },
  setBorderStyle : function(id, borderStyle)
  {
    this.objects[id].style.borderStyle = borderStyle;
  },
  setObjAttrib : function(id, objAttr, env)
  {
    this.objects[id].loadBGImg = objAttr.getLoadBGImg();
    this.setBorderStyle(id,objAttr.Border.styleHead[env]);
    this.setBorderSize(id,objAttr.Size.borderPanel[env]);
    this.setBackGroundColor(id,objAttr.Color.bgDialogBarraTitle[env]);
    this.setFont(id,objAttr.Font.head[env], objAttr.Size.dialogTitle[env],objAttr.Color.textWait[env]);
    if(this.objects[id].loadBGImg)
    {	
      this.setBgBodyImg(id, objAttr.BgImg.bgPanel[env]);
    }
  },
  
  setObjAttribToAll : function(objAttrib,env)
  {
    for(i=0;i<this.ids.length;i++)
    {
      this.setObjAttrib(this.ids[i],attrib,env);
    }	
  },  
  setPosition : function(id,x,y)
  {
  	this.setAbsolutePosition(id);
	this.objects[id].style.left = x+"px";
    this.objects[id].style.top = y+"px";
  },
  setCenterScreen : function(id)
  {
  	var x = document.documentElement.clientWidth/2 - this.objects[id].dimWidth/2;
    var y = document.documentElement.clientHeight/2 - this.objects[id].dimHight/2;
  	this.setPosition(id,x,y);
  },
  setRelativePosition : function(id)
  {
  	this.objects[id].style.position = "relative";
  },
  setFont : function(id, fontFamily, fontSize, fontColor)
  {
  	this.objects[id].table.rows[0].cells[0].style.fontFamily = fontFamily;
	this.objects[id].table.rows[0].cells[0].style.color = fontColor;
	this.objects[id].table.rows[0].cells[0].style.fontSize = fontSize+"px";
  },
  setDimension : function(id,w,h)
  {
  	this.objects[id].dimHight=h;
	this.objects[id].dimWidth=w;
	this.objects[id].style.width = w+"px";
	this.image.style.height = (h+10)+"px";
	this.image.style.width = (h+10)+"px";
	this.objects[id].table.style.height = h+"px";
	this.objects[id].table.style.width = w+"px";
  },
  show : function(id, msg, autoSizeWidth)
  {
  	if(autoSizeWidth)
	{
		this.setDimension(id,(msg.length*8),this.objects[id].dimHight);
	}
  	this.objects[id].table.rows[0].cells[0].innerHTML = msg;
	this.objects[id].table.rows[0].cells[0].style.textAlign = "center";
    this.objects[id].style.display = "block";
    if(this.objects[id].isModal)
	  this.setModal(id);
  },
  showCenter : function(id, msg, autoSizeWidth)
  {
  	if(autoSizeWidth)
	{
		this.setDimension(id,(msg.length*8),this.objects[id].dimHight);
	}
  	this.objects[id].table.rows[0].cells[0].innerHTML = msg;
	this.objects[id].table.rows[0].cells[0].style.textAlign = "center";
    this.objects[id].style.display = "block";
	this.setCenterScreen(id);
	if(this.objects[id].isModal)
	  this.setModal(id);
	
  },
  setModal : function(id)
  {  	
    this.objects[id].divModal.style.zIndex=1000000;
    this.objects[id].divModal.style.position = "absolute";
    this.objects[id].divModal.style.display = "block";
    this.objects[id].divModal.style.top = '0px';
    this.objects[id].divModal.style.left = '0px';
    var x = document.documentElement.clientWidth;
    var y = document.documentElement.clientHeight;
    this.objects[id].divModal.style.width = x + 'px';
    this.objects[id].divModal.style.height = y + 'px';
  },
  delModal : function(id)
  {
    this.objects[id].divModal.style.display = "none";
    this.objects[id].divModal.style.top = '0px';
    this.objects[id].divModal.style.left = '0px';
    this.objects[id].divModal.style.width = '0px';
    this.objects[id].divModal.style.height = '0px';
  },
  setBgBodyImg : function(id, bgImg)
  {
    this.objects[id].style.backgroundImage="url("+this.bgImgPath+bgImg+")";
  },	
  setLoadBGImg : function(id, activeLoad)
  {
  	this.objects[id].loadBGImg = activeLoad;
  },
  setLoadBGImgAll : function(activeLoad)
  {
  	for(i=0;i<this.ids.length;i++)
    {
      this.setLoadBGImg(this.ids[i],activeLoad);
    }
  }  
}