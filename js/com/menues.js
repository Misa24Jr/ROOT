var menues=
{
addPropertyMethod : function(id)
{
  menues.objects[id].addToBody  =  function()
  {
    menues.addToBody(id);
  }
  menues.objects[id].addStructMenu  =  function(stMenu)
  {
    menues.addStructMenu(id,stMenu);
  }
  menues.objects[id].addMenuOption  =  function(item,sts,optionNum)
  {
    menues.addMenuOption(id,item,sts,optionNum);
  }
  menues.objects[id].allNormalMenu  =  function()
  {
    menues.allNormalMenu(id);
  }
  menues.objects[id].addStructSubMenu  =  function(stSubMenu)
  {
    menues.addStructSubMenu(id,stSubMenu);
  }
  menues.objects[id].barMenuPaint  =  function()
  {
    menues.barMenuPaint(id);
  }
  menues.objects[id].captureClick =  function()
  {
    menues.captureClick(id);
  }
  menues.objects[id].createMenuBar  =  function(widthBar)
  {
    menues.createMenuBar(id,widthBar);
  }
  menues.objects[id].compare  =  function(x,y)
  {
    menues.compare(x,y);
  }
  menues.objects[id].getObject  =  function()
  {
    return menues.getObject(id);
  }
  menues.objects[id].getMajorLong  =  function(obj)
  {
    return menues.getMajorLong(obj);
  }
  menues.objects[id].getKeyCode  =  function(key)
  {
    return menues.getKeyCode(key);
  }
  menues.objects[id].disableOptionMenu = function(itemOpc)
  {
  	menues.disableOptionMenu(id,itemOpc);
  }
  menues.objects[id].disableOptionSubMenu = function(itemOpc,itemMenuExt)
  {
  	menues.disableOptionSubMenu(id,itemOpc,itemMenuExt);
  }
  menues.objects[id].enableOptionSubMenu = function(itemOpc,itemMenuExt)
  {
  	menues.enableOptionSubMenu(id,itemOpc,itemMenuExt);
  }
  menues.objects[id].enableOptionMenu = function(itemOpc)
  {
    menues.enableOptionMenu(id,itemOpc);	
  }
  menues.objects[id].hideSubMenu  =  function(itemOpc)
  {
    return menues.hideSubMenu(id,itemOpc);
  }
  menues.objects[id].hideAllSubMenu  =  function()
  {
    return menues.hideAllSubMenu(id);
  }
  menues.objects[id].loadPropertyBarMenu  =  function(x,y,borderStyle,fontSize,FontFamily,height,width,bgColor,colorText,colorTextSel,bgColorTextSel,colorTextDisable,borderWidth)
  {
    menues.loadPropertyBarMenu(id,x,y,borderStyle,fontSize,FontFamily,height,width,bgColor,colorText,colorTextSel,bgColorTextSel,colorTextDisable,borderWidth);
  }
  menues.objects[id].loadPropertyColorBarMenu  =  function(bgColor,colorText,colorTextSel,bgColorTextSel,colorTextDisable,colorTextSubmenu)
  {
    menues.loadPropertyColorBarMenu(id,bgColor,colorText,colorTextSel,bgColorTextSel,colorTextDisable, colorTextSubmenu);
  }
  menues.objects[id].loadPropertyBorderBarMenu  =  function(borderStyle,borderWidth)
  {
    menues.loadPropertyBorderBarMenu(id,borderStyle,borderWidth);
  }
  menues.objects[id].loadCoordBarMenu  =  function(x,y)
  {
    menues.loadCoordBarMenu(id,x,y);
  }
  menues.objects[id].loadPropertySizeBarMenu  =  function(height,width,borderWidth)
  {
    menues.loadPropertySizeBarMenu(id,height,width,borderWidth);
  }
  menues.objects[id].loadPropertyFontBarMenu  =  function(fontSize,FontFamily)
  {
    menues.loadPropertyFontBarMenu(id,fontSize,FontFamily);
  }
  menues.objects[id].menuSelected  =  function(menuNum)
  {
    menues.menuSelected(id,menuNum);
  }
  menues.objects[id].menuNormal  =  function(menuNum)
  {
    menues.menuNormal(id,menuNum);
  }
  menues.objects[id].setFont  =  function(fontFamily)
  {
    menues.setFont(id,fontFamily);
  }
  menues.objects[id].setBgColors  =  function(bgColor,barSelect)
  {
    menues.setBgColors(id,bgColor,barSelect);
  }
  menues.objects[id].setColorFonts  =  function(colorText, colorTextsel, colorTextSubmenu)
  {
    menues.setColorFonts(id, colorText, colorTextsel, colorTextSubmenu);
  }
  menues.objects[id].setPanelProperties  =  function(itemOpc)
  {
    menues.setPanelProperties(id,itemOpc);
  }
  menues.objects[id].subMenuSelected  =  function(menuOpc,row)
  {
    menues.subMenuSelected(id,menuOpc,row);
  }
  menues.objects[id].subMenuNormal  =  function(menuOpc,row)
  {
    menues.subMenuNormal(id,menuOpc,row);
  }
  menues.objects[id].setObjAttrib  =  function(objAttr, env)
  {
    menues.setObjAttrib(id,objAttr, env);
  }
  menues.objects[id].setObjAttribToAll  =  function(objAttrib, env)
  {
    menues.setObjAttribToAll(objAttrib,env);
  }
  menues.objects[id].showSubMenu  =  function(itemOpc)
  {
    menues.showSubMenu(id,itemOpc);
  }
  menues.objects[id].setBgBarImg = function(barImg)
  {
  	menues.setBgBarImg(id, barImg) 
  } 
  menues.objects[id].setLoadBGImg = function(activeLoad)
  {
	menues.setLoadBGImg(id, activeLoad);
  }
  menues.objects[id].setLoadBGImgAll = function(activeLoad)
  {
	menues.setLoadBGImgAll(activeLoad);
  }
  menues.objects[id].setBgBodyImg = function(bgImg)
  {
  	menues.setBgBodyImg(id, bgImg);
  }
  menues.objects[id].setImgs = function(imgMenuBar, imgPanel, imgSelect)
  {
  	menues.setImgs(id, imgMenuBar, imgPanel, imgSelect);
  }
  menues.objects[id].hideSubMenuFromLevel = function(actLevel)
  {
  	menues.hideSubMenuFromLevel(id, actLevel);
  }
},
  addToBody : function(id)
  {
    document.body.appendChild(this.objects[id]);
  },
  addStructMenu : function(id,stMenu)
  {
  	var sts = this.objects[id].enableVisible;
    this.objects[id].menu.charAccess = new Array;
    this.objects[id].menu.x = new Array;
    this.objects[id].menu.y = this.objects[id].y;
	var cism = 0;
    for(ism=0; ism<stMenu.items.length; ism++)
    {  
	  this.objects[id].menu.items[this.objects[id].menu.items.length] = stMenu.items[ism];
	  this.objects[id].menu.sts[this.objects[id].menu.sts.length] = stMenu.sts[ism];
      if(cism == 0)
         this.objects[id].menu.x[cism] = this.objects[id].x;
      else
	  {
	  	
	    var lo = this.objects[id].columnsMenu.rows[0].cells[cism-1].style.width;
		var lo2 = this.objects[id].columnsMenu.rows[0].cells[cism-1].offsetWidth;
		var num = 0;
		for(i=0; i<lo.length-2; i++)
		{
		  num+=lo.charAt(i);
		}	
		var pos = parseInt(num,10)+7;
		this.objects[id].menu.x[cism] = this.objects[id].menu.x[cism-1] + pos;
		
      }
	  this.addMenuOption(id,this.objects[id].menu.items[cism],this.objects[id].menu.sts[cism],cism);	
	  cism++; 
	}	 
  },
  addMenuOption : function(id,item,sts,optionNum)
  {
    this.objects[id].subMenuPanel[this.objects[id].subMenuPanel.length] = item;
    var flagBold = false;
    var cell = this.objects[id].columnsMenu.rows[0].cells.length;
    var longFont = parseInt(""+(this.objects[id].barFontSize/2),10);
    this.objects[id].columnsMenu.rows[0].insertCell(cell);
    this.objects[id].columnsMenu.rows[0].cells[cell].style.width = (item.length-1)*longFont+4+"px";
    for(j=0; j<item.length; j++)
    {
      if(item.charAt(j)!="$")
      {
        if(!flagBold)
        this.objects[id].columnsMenu.rows[0].cells[cell].innerHTML += item.charAt(j);
        else
        {
          this.objects[id].columnsMenu.rows[0].cells[cell].innerHTML += item.charAt(j).bold();
          this.objects[id].menu.charAccess[optionNum] = item.charAt(j);
        }
        flagBold = false;
      }
      else
      {
        flagBold=true;
      }
    }
    if(!sts)
    {
      this.objects[id].columnsMenu.rows[0].cells[cell].style.color= this.objects[id].barColorTextDisable;
	  if(!this.objects[id].enableVisible)
	  {
		this.objects[id].columnsMenu.rows[0].cells[cell].innerHTML="".bold();	
		this.objects[id].columnsMenu.rows[0].cells[cell].style.width = "0px"  ;	
	  }
    }
    this.objects[id].menu.itemIndex=cell;
    var itemMenu = menues.objects[id].menu.items[cell];
    this.objects[id].columnsMenu.rows[0].cells[cell].onmouseover = function()
    {
   	  menues.hideAllSubMenu(id);
  	  if(menues.objects[id].menu.sts[cell])
	  {
          menues.objects[id].menu.typeAccess = 0;
          menues.menuSelected(id,cell);
          if(menues.objects[id].menu.menuClick)
          {
            menues.showSubMenu(id,itemMenu);
          }
	   }
    }
    this.objects[id].columnsMenu.rows[0].cells[cell].onmouseout  = function()
    {
      menues.objects[id].menu.typeAccess = 0;
      menues.allNormalMenu(id);
    }
    this.objects[id].columnsMenu.rows[0].cells[cell].onmousedown = function()
    {
	  if(menues.objects[id].menu.sts[cell])
	  {
        menues.objects[id].menu.typeAccess = 0;
        menues.objects[id].clear=false;
        if(menues.objects[id].menu.menuClick)
        {
          menues.objects[id].menu.menuClick=false;
          menues.hideAllSubMenu(id);
        }
        else
        {
          menues.objects[id].menu.menuClick=true;
          menues.showSubMenu(id,itemMenu);
        }
	  }
    }
  },
  allNormalMenu : function(id)
  {
    for(i=0; i<this.objects[id].columnsMenu.rows[0].cells.length; i++)
    {
      this.menuNormal(id,i);
    }
  },
  addStructSubMenu : function(id,stSubMenu)
  {
	  var item ="";	
      item = stSubMenu.st.items[stSubMenu.itemOpc];	  
      this.objects[id].subMenu[item] = stSubMenu;
      this.objects[id].subMenu[item].panel = document.createElement("DIV");
      this.objects[id].subMenu[item].panel.style.position = "absolute";
      this.objects[id].subMenu[item].panel.tabla = document.createElement("table");
      this.objects[id].subMenu[item].panel.tabla.setAttribute('border','0px');
      this.objects[id].subMenu[item].panel.tabla.setAttribute('cellSpacing','2px');
      this.objects[id].subMenu[item].panel.tabla.setAttribute('cellPadding','2px');
      this.objects[id].subMenu[item].panel.appendChild(this.objects[id].subMenu[item].panel.tabla);
      var posLargo = this.getMajorLong(stSubMenu);
      var opcLarga = stSubMenu.items[posLargo].length;
      this.objects[id].subMenu[item].w = opcLarga*this.objects[id].widthAdjSubMenu;
      if(stSubMenu.level==1)
      {
        this.objects[id].subMenu[item].x = this.objects[id].menu.x[stSubMenu.itemOpc];
        this.objects[id].subMenu[item].y = this.objects[id].menu.y + this.objects[id].barHeight+6;
      }
      else
      {
        var d = stSubMenu.itemOpc;
        this.objects[id].subMenu[item].y = this.objects[id].subMenu[item].st.y + this.objects[id].barHeight*d;
        this.objects[id].subMenu[item].x = this.objects[id].subMenu[item].st.x + this.objects[id].subMenu[item].st.w+2;
      }
      this.setPanelProperties(id,item);
      for(ias=0; ias < stSubMenu.items.length; ias++)
      {
        this.objects[id].subMenu[item].panel.tabla.insertRow(ias);
        this.objects[id].subMenu[item].panel.tabla.rows[ias].insertCell(0);
        this.objects[id].subMenu[item].panel.tabla.rows[ias].cells[0].style.width = this.objects[id].subMenu[item].w+"px";
        this.objects[id].subMenu[item].panel.tabla.rows[ias].cells[0].innerHTML = stSubMenu.items[ias];
        this.objects[id].subMenu[item].panel.tabla.rows[ias].cells[0].active = false;
		var ssm = stSubMenu.sts[ias];
        if(!ssm)
        {
          this.objects[id].subMenu[item].panel.tabla.rows[ias].cells[0].style.color = this.objects[id].barColorTextDisable;
		  if(!this.objects[id].enableVisible)
		  {
		    this.objects[id].subMenu[item].panel.tabla.rows[ias].cells[0].innerHTML = "";
		    this.objects[id].subMenu[item].panel.tabla.rows[ias].cells[0].style.height= "0px";
		    this.objects[id].subMenu[item].panel.tabla.rows[ias].cells[0].style.width = "0px";
			this.objects[id].subMenu[item].panel.tabla.rows[ias].cells[0].style.fontSize = "0px";
		  }
        }
          var objCell = this.objects[id].subMenu[item].panel.tabla.rows[ias].cells[0];
          objCell.onmouseover = new Function("var v = "+ssm+"; if(v) { menues.subMenuSelected('"+id+"','"+item+"',"+ias+")}");
          objCell.onmouseout = new Function("var v = "+ssm+"; if(v) { menues.subMenuNormal('"+id+"','"+item+"',"+ias+")}");
          objCell.active = false;
          if(stSubMenu.subMenu[ias])
          {
            this.objects[id].subMenu[item].panel.tabla.rows[ias].cells[0].innerHTML+= ">>";
            this.objects[id].subMenuPanel[this.objects[id].subMenuPanel.length] = stSubMenu.items[ias];
          }
          else
          {
            this.objects[id].subMenu[item].panel.tabla.rows[ias].cells[0].onmousedown = new Function("var v = "+
			ssm+"; if(v) {menues.hideAllSubMenu('"+id+"'); "+stSubMenu.functs[ias]+"}");
		  }
      }
      document.body.appendChild(this.objects[id].subMenu[item].panel);
  },
  barMenuPaint : function(id)
  {
    this.objects[id].style.position = "absolute";
    this.objects[id].style.left = this.objects[id].x+"px";
    this.objects[id].style.top  = this.objects[id].y+"px";
    this.objects[id].menuBar.style.display='block';
    this.objects[id].menuBar.style.borderStyle = this.objects[id].barBorderStyle;
    this.objects[id].menuBar.style.fontSize = this.objects[id].barFontSize+"px";
    this.objects[id].menuBar.style.fontFamily = this.objects[id].barFontFamily;
    this.objects[id].menuBar.style.height = this.objects[id].barHeight+"px";
    this.objects[id].menuBar.style.width = this.objects[id].barWidth+"px";
    this.objects[id].menuBar.style.backgroundColor = this.objects[id].barColor;
    this.objects[id].menuBar.style.color = this.objects[id].barColorText;
    this.objects[id].menuBar.style.borderWidth = this.objects[id].barBorderWidth+"px";
    this.objects[id].rows[0].cells[0].style.height = this.objects[id].barHeight+10+"px";
  },
  captureClick: function(id)
  {
    document.onclick = function()
    {
      if(menues.objects[id].clear)
      {
        menues.hideAllSubMenu(id);
      }
      menues.objects[id].clear=true;
    }
  },
  createMenuBar : function(id,widthBar)
  {  
    this.objects[id].menuBar = document.createElement("DIV");
    this.objects[id].columnsMenu = document.createElement("TABLE");
    this.objects[id].columnsMenu.setAttribute('border','0px');
    this.objects[id].columnsMenu.setAttribute('cellSpacing','2px');
    this.objects[id].columnsMenu.setAttribute('cellPadding','2px');
    this.objects[id].columnsMenu.insertRow(0);
    this.objects[id].menuBar.appendChild(this.objects[id].columnsMenu);
    this.objects[id].rows[0].cells[0].appendChild(this.objects[id].menuBar);
    if(attrib)
      this.setObjAttrib(id,attrib,attrib.getActualEnv());
  },
  create : function(id,widthBar,x,y,height,visible,adjWidthSM)
  {
    this.objects[id] = document.createElement("TABLE");
    this.objects[id].nameComponent = 'menues';
	this.objects[id].enableVisible = visible;
	this.objects[id].widthAdjSubMenu = adjWidthSM;
	this.objects[id].loadBGImg = false;
	this.objects[id].imgSelect = "";
	this.objects[id].imgBarMenu = "";
	this.objects[id].imgPanel =  "";
	this.ids[this.ids.length] = id;
    this.objects[id].setAttribute('border','0px');
    this.objects[id].setAttribute('cellSpacing','0px');
    this.objects[id].setAttribute('cellPadding','0px');
    this.objects[id].insertRow(0);
    this.objects[id].rows[0].insertCell(0);
    this.objects[id].id=id;
    this.objects[id].popUp = new Array;	     		
    this.objects[id].menu = new Object();	     	
    this.objects[id].subMenu = new Array;	     	
    menues.objects[id].clear = false;		     	
    this.objects[id].menu.items = new Array;	   
    this.objects[id].menu.letterAccess = new Array; 
    this.objects[id].menu.sts = new Array;         
    this.objects[id].subMenuPanel = new Array;      
    this.objects[id].menu.subMenu = new Array;	    
    this.objects[id].menu.borderWidthCell = 0;      
    this.objects[id].menu.itemIndex = 0;            
    this.objects[id].menu.charAccess = new Array;   
    this.objects[id].subMenuActive = "";	     	
    this.objects[id].menu.menuClick = false;	    
    this.objects[id].menu.idSelected = "";          
    this.createMenuBar(id,widthBar);		     	
    this.objects[id].menu.typeAccess = 0;	     	
    this.loadPropertyBarMenu(id,x,y,"outset",12,"helvetica",height,widthBar,"#cccccc","black","white","blue","#777777",1);
    this.barMenuPaint(id);
    this.captureClick(id);
	this.addPropertyMethod(id);
	return this.objects[id];
  },
  compare : function(x,y)
  {
    if(x < y)
    return -1;
    else
    if(x===y)
    return 0;
    else
    return 1;
  },
  disableOptionMenu : function(id,itemOpc)
  {
  	this.objects[id].menu.sts[itemOpc]=false;
	this.allNormalMenu(id);
	this.objects[id].columnsMenu.rows[0].cells[itemOpc].style.color= this.objects[id].barColorTextDisable;
  },
  disableOptionSubMenu : function(id,itemOpc,itemMenuExt)
  {
  	mn.getObject().subMenu[itemMenuExt].sts[itemOpc]=false;
	this.objects[id].subMenu[itemMenuExt].panel.tabla.rows[itemOpc].cells[0].onmousedown = new Function("menues.hideAllSubMenu('"+id+"');");
    var objCell = this.objects[id].subMenu[itemMenuExt].panel.tabla.rows[itemOpc].cells[0];
	objCell.onmouseover = new Function("");
    objCell.onmouseout = new Function("");
    objCell.active = false;
	menues.subMenuNormal(id,itemMenuExt,itemOpc);
	this.objects[id].subMenu[itemMenuExt].panel.tabla.rows[itemOpc].cells[0].style.color = this.objects[id].barColorTextDisable;
  },
  enableOptionMenu : function(id,itemOpc)
  {
  	if(this.objects[id].enableVisible)
	{
  	  this.objects[id].menu.sts[itemOpc]=true;
	  this.allNormalMenu(id);
	}
  },
  enableOptionSubMenu : function(id,itemOpc,itemMenuExt)
  {
  	if(this.objects[id].enableVisible)
	{
	  mn.getObject().subMenu[itemMenuExt].sts[itemOpc]=true;
	  mn.getObject().subMenu[itemMenuExt].panel.tabla.rows[itemOpc].cells[0].innerHTML = mn.getObject().subMenu[itemMenuExt].items[itemOpc];
	  this.objects[id].subMenu[itemMenuExt].panel.tabla.rows[itemOpc].cells[0].onmousedown = new Function("menues.hideAllSubMenu('"+id+"'); "+menues.objects[id].subMenu[itemMenuExt].functs[itemOpc]);
	  var objCell = this.objects[id].subMenu[itemMenuExt].panel.tabla.rows[itemOpc].cells[0];
      objCell.onmouseover = new Function("menues.subMenuSelected('"+id+"','"+itemMenuExt+"',"+itemOpc+")");
      objCell.onmouseout = new Function("menues.subMenuNormal('"+id+"','"+itemMenuExt+"',"+itemOpc+")");
      objCell.active = false;
	  menues.subMenuNormal(id,itemMenuExt,itemOpc);
	}
  },
  getObject : function(id)
  {
    return this.objects[id];
  },
  getMajorLong : function(obj)
  {
    var arr = obj.items;
    var aux = new Array;
    var pos = new Array;
    for(mj=0; mj < arr.length; mj++)
    {
      aux[mj]=arr[mj].length;
      pos[arr[mj].length]=mj;
    }
    aux.sort(this.compare);
    return pos[aux[aux.length-1]];
  },
  getKeyCode : function(key)
  {
    var IE = document.all?true:false;
    if(IE)
    {
      this.keyPress = event.keyCode;
    }
    else
    {
      this.keyPress = key.which;
    }
    return this.keyPress;
  },
  hideSubMenu : function(id,itemOpc)
  {
    this.objects[id].subMenu[itemOpc].panel.style.display = "none";
  },
  hideAllSubMenu : function(id)
  {
    for(osm=0; osm < this.objects[id].subMenuPanel.length; osm++)
    {
	  this.hideSubMenu(id,this.objects[id].subMenuPanel[osm]);
    }
  },
  hideSubMenuFromLevel : function(id,actLevel)
  {
    for(osm=0; osm < this.objects[id].subMenuPanel.length; osm++)
    {	
	  if (this.objects[id].subMenu[this.objects[id].subMenuPanel[osm]].level > actLevel) 
	  {
	  	this.hideSubMenu(id, this.objects[id].subMenuPanel[osm]);
	  }	
    }
  },
  loadPropertyBarMenu : function(id,x,y,borderStyle,fontSize,FontFamily,height,width,bgColor,colorText,colorTextSel,bgColorTextSel,colorTextDisable,borderWidth)
  {
    this.objects[id].y = y;
    this.objects[id].x = x;
    this.objects[id].barBorderStyle = borderStyle;
    this.objects[id].barFontSize = fontSize;
    this.objects[id].barFontFamily = FontFamily;
    this.objects[id].barHeight = height;
    this.objects[id].barWidth = width;
    this.objects[id].barColor = bgColor;
    this.objects[id].barColorText = colorText;
    this.objects[id].barcolorTextSelected = colorTextSel;
    this.objects[id].barBgcolorTextSelected = bgColorTextSel;
    this.objects[id].barColorTextDisable = colorTextDisable;
    this.objects[id].barBorderWidth = borderWidth;
  },
  loadPropertyColorBarMenu : function(id,bgColor,colorText,colorTextSel,bgColorTextSel,colorTextDisable,colorTextSubmenu)
  {
    this.objects[id].barColor = bgColor;
    this.objects[id].barColorText = colorText;
    this.objects[id].barcolorTextSelected = colorTextSel;
    this.objects[id].barBgcolorTextSelected = bgColorTextSel;
    this.objects[id].barColorTextDisable = colorTextDisable;
	this.objects[id].colorTextSubmenu = colorTextSubmenu;
  },
  loadPropertyBorderBarMenu : function(id,borderStyle,borderWidth)
  {
    this.objects[id].barBorderStyle = borderStyle;
    this.objects[id].barBorderWidth = borderWidth;
  },
  loadCoordBarMenu : function(id,x,y)
  {
    this.objects[id].x=x;
    this.objects[id].y=y;
  },
  loadPropertySizeBarMenu : function(id,height,width,borderWidth)
  {
    this.objects[id].barHeight = height;
    this.objects[id].barWidth = width;
    this.objects[id].barBorderWidth = borderWidth;
  },
  loadPropertyFontBarMenu : function(id,fontSize,FontFamily)
  {
    this.objects[id].barFontSize = fontSize;
    this.objects[id].barFontFamily = FontFamily;
  },
  menuSelected : function (id,menuNum)
  {
    this.objects[id].menu.idSelected = this.objects[id].menu.items[menuNum];
    this.objects[id].menu.itemIndex = menuNum;
    this.allNormalMenu(id);
    this.objects[id].columnsMenu.rows[0].cells[menuNum].style.color = this.objects[id].barcolorTextSelected;
    this.objects[id].columnsMenu.rows[0].cells[menuNum].style.background = this.objects[id].barBgcolorTextSelected;
	if (this.objects[id].loadBGImg) 
	{
		this.objects[id].columnsMenu.rows[0].cells[menuNum].style.backgroundImage = "url(" + this.bgImgPath + this.objects[id].imgSelect + ")";
	}  
  },
  menuNormal : function (id,menuNum)
  {
  	if(this.objects[id].menu.sts[menuNum])
	{      
	  if (this.objects[id].loadBGImg) 
	  {
		this.objects[id].columnsMenu.rows[0].cells[menuNum].style.backgroundImage = "url(" + this.bgImgPath + this.objects[id].imgBarMenu + ")";
	  }
	  else
	  {
        this.objects[id].columnsMenu.rows[0].cells[menuNum].style.background = this.objects[id].barColor;
	  }
	  this.objects[id].columnsMenu.rows[0].cells[menuNum].style.color = this.objects[id].barColorText;
	}
  },
  setFont : function(id,fontFamily)
  {
    this.objects[id].barFontFamily = fontFamily;
    this.barMenuPaint(id);
    for(i=0; i<this.objects[id].subMenuPanel.length; i++)
    {
      this.objects[id].subMenu[this.objects[id].subMenuPanel[i]].panel.style.fontFamily = this.objects[id].barFontFamily;
    }
  },
  setBgColors : function(id,bgColor,barSelect)
  {
    this.objects[id].barBgcolorTextSelected=barSelect;
    this.objects[id].barColor = bgColor;
    this.barMenuPaint(id);
    for(i=0; i<this.objects[id].subMenuPanel.length; i++)
    {
      this.objects[id].subMenu[this.objects[id].subMenuPanel[i]].panel.style.backgroundColor = this.objects[id].barColor;
      this.objects[id].subMenu[this.objects[id].subMenuPanel[i]].panel.tabla.style.backgroundColor =  this.objects[id].barColor;
      this.objects[id].subMenu[this.objects[id].subMenuPanel[i]].panel.tabla.setAttribute('borderColor',bgColor);
    }
  },
  setColorFonts : function(id,colorText, colorTextsel, colorTextSubmenu)
  {
    this.objects[id].barcolorTextSelected = colorTextsel;
    this.objects[id].barColorText = colorText;
	this.objects[id].colorTextSubmenu = colorTextSubmenu;
    this.barMenuPaint(id);
    for(i=0; i<this.objects[id].subMenuPanel.length; i++)
    {
      this.objects[id].subMenu[this.objects[id].subMenuPanel[i]].panel.style.color = colorTextSubmenu;
      for(j=0; j<this.objects[id].subMenu[this.objects[id].subMenuPanel[i]].sts.length; j++)
      {
        if(!this.objects[id].subMenu[this.objects[id].subMenuPanel[i]].sts[j])
        {
          this.objects[id].subMenu[this.objects[id].subMenuPanel[i]].panel.tabla.rows[j].cells[0].style.color = this.objects[id].barColorTextDisable;
        }
      }
    }
  },
  setPanelProperties : function(id,itemOpc)
  {
    this.objects[id].subMenu[itemOpc].panel.style.fontSize 	   = this.objects[id].barFontSize+"px";
    this.objects[id].subMenu[itemOpc].panel.style.backgroundColor = this.objects[id].barColor;
    this.objects[id].subMenu[itemOpc].panel.style.fontFamily 	   = this.objects[id].barFontFamily;
    this.objects[id].subMenu[itemOpc].panel.style.borderStyle 	   = this.objects[id].barBorderStyle;
    this.objects[id].subMenu[itemOpc].panel.style.borderWidth 	   = this.objects[id].barBorderWidth+"px";
    this.objects[id].subMenu[itemOpc].panel.style.display	   = "none";
    this.objects[id].subMenu[itemOpc].panel.style.width	   = this.objects[id].subMenu[itemOpc].w+"px";
    this.objects[id].subMenu[itemOpc].panel.style.top	   	   = this.objects[id].subMenu[itemOpc].y+"px";
    this.objects[id].subMenu[itemOpc].panel.style.left		   = this.objects[id].subMenu[itemOpc].x+"px";
  },
  subMenuSelected : function (id,menuOpc,row)
  {
  	var level = this.objects[id].subMenu[menuOpc].level;
	this.hideSubMenuFromLevel(id,level);
	
    this.objects[id].subMenuActive = menuOpc;
    for(iz=0; iz < menues.objects[id].subMenu[menuOpc].panel.tabla.rows.length; iz++)
    {
      if(menues.objects[id].subMenu[menuOpc].sts[iz])
        menues.subMenuNormal(id,menuOpc,iz);
    }
    this.objects[id].subMenu[menuOpc].panel.tabla.rows[row].cells[0].style.backgroundColor = menues.objects[id].barBgcolorTextSelected;
    this.objects[id].subMenu[menuOpc].panel.tabla.rows[row].cells[0].style.color = menues.objects[id].barcolorTextSelected;
    this.objects[id].subMenu[menuOpc].panel.tabla.rows[row].cells[0].active = true;
    for(r=0; r<this.objects[id].subMenu[menuOpc].items.length; r++)
    {
      if(this.objects[id].subMenu[menuOpc].subMenu[r])
      {
		var opc = this.objects[id].subMenu[menuOpc].items[r];
        this.hideSubMenu(id,opc);
      }
    }
    if(this.objects[id].subMenu[menuOpc].subMenu[row])
    {
      this.objects[id].subMenu[menuOpc].panel.tabla.rows[row].cells[0].active = true;
      this.showSubMenu(id,this.objects[id].subMenu[menuOpc].items[row]);
      this.objects[id].subMenu[menuOpc].panel.tabla.rows[row].cells[0].active = true;
    }
	if (this.objects[id].loadBGImg) 
	{
	  this.objects[id].subMenu[menuOpc].panel.tabla.rows[row].cells[0].style.backgroundImage = "url(" + this.bgImgPath + this.objects[id].imgSelect + ")";
	}  
  },
  subMenuNormal : function (id,menuOpc,row)
  {
    this.objects[id].subMenu[menuOpc].panel.tabla.rows[row].cells[0].style.backgroundColor = this.objects[id].barColor;
    this.objects[id].subMenu[menuOpc].panel.tabla.rows[row].cells[0].style.color =  this.objects[id].colorTextSubmenu;
    this.objects[id].subMenu[menuOpc].panel.tabla.rows[row].cells[0].active = false;
	if (this.objects[id].loadBGImg) 
	{
	  this.objects[id].subMenu[menuOpc].panel.tabla.rows[row].cells[0].style.backgroundImage = "url(" + this.bgImgPath + this.objects[id].imgPanel + ")";	
	}
  },
  setObjAttrib : function(id,objAttr, env)
  {
	this.objects[id].loadBGImg = objAttr.getLoadBGImg();
	
    this.objects[id].barColorTextDisable = objAttr.Color.textMenuDisable[env];
    this.setFont(id,objAttr.Font.menu[env]);
    this.setBgColors(id,objAttr.Color.bgMenu[env],objAttr.Color.bgMenuSel[env]);
    this.setColorFonts(id,objAttr.Color.textMenu[env],objAttr.Color.textMenuSel[env],objAttr.Color.textSubMenu[env]);
	this.loadPropertyFontBarMenu(id, objAttr.Size.menu[env],objAttr.Font.menu[env]);
	this.barMenuPaint(id);
	var osm = 0;
	for(osm=0; osm < this.objects[id].subMenuPanel.length; osm++)
    {	
	  this.setPanelProperties(id,this.objects[id].subMenuPanel[osm]);	
    }	
	if(this.objects[id].loadBGImg)
	{	
	  this.setBgBarImg(id, objAttr.BgImg.barTitle[env]); 
	  this.setBgBodyImg(id, objAttr.BgImg.bgPanel[env]);
	  this.setImgs(id, objAttr.BgImg.barTitle[env], objAttr.BgImg.bgPanel[env], objAttr.BgImg.bgSelected[env]);
	}
  },
  setObjAttribToAll : function(objAttrib,env)
  {
    for(i=0;i<this.ids.length;i++)
    {
      this.setObjAttrib(this.ids[i],attrib,env);
    }	
},  
  showSubMenu : function(id,itemOpc)
  {
    this.objects[id].subMenu[itemOpc].panel.style.display = "block";
  },
  setImgs : function(id, imgMenuBar, imgPanel, imgSelect)
  {
  	this.objects[id].imgBarMenu = imgMenuBar;
	this.objects[id].imgPanel =  imgPanel;
  	this.objects[id].imgSelect = imgSelect;
  },
  setBgBarImg : function(id, barImg) 
  {
  	this.objects[id].menuBar.style.backgroundImage="url("+this.bgImgPath+barImg+")"; 
  },
  setBgBodyImg : function(id, bgImg)
  {
    for(i=0; i<this.objects[id].subMenuPanel.length; i++)
    {
      this.objects[id].subMenu[this.objects[id].subMenuPanel[i]].panel.style.backgroundImage="url("+this.bgImgPath+bgImg+")";
	  this.objects[id].subMenu[this.objects[id].subMenuPanel[i]].panel.tabla.style.backgroundImage="url("+this.bgImgPath+bgImg+")";
    }
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