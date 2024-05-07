var treeviews=
{
  objects : new Array,
  cascadeCheck : true,
  pathImgs : "images",
  timer : new Object(), 
  CONEX : 0,
  FOLDER_CLOSE : 1,
  FOLDER_OPEN : 2,
  LAST_CONEX : 3,
  FINAL_MINUS : 4,
  MORE_MINUS : 5,
  FINAL_PLUS : 6,
  MORE_PLUS : 7,
  VERT_LINE : 8,
  NO_IMG    : 9,
  TYPE_MORE_PLUS_FOLDER  : 0,
  TYPE_LAST_PLUS_FOLDER  : 1,
  TYPE_MORE_MINUS_FOLDER : 2,
  TYPE_LAST_MINUS_FOLDER : 3,
  TYPE_MORE_SIMPLE_TEXT  : 4,
  TYPE_LAST_SIMPLE_TEXT  : 5,
  TYPE_SIMPLE_OBJECT     : 6,
  HTMLElements			  : new Array,
  ids					  : new Array,
  bgImgPath :"images/bg/",  
  imgConex 		: "conex.gif",
  imgFolderClose : "folderClose.gif",
  imgFolderOpen	: "folderOpen.gif",
  imgLastConex	: "lastConex.gif",
  imgFinalMinus	: "finalMinus.gif",
  imgMoreMinus	: "moreMinus.gif",
  imgFinalPlus	: "finalPlus.gif",
  imgMorePlus	: "morePlus.gif",
  imgVertLine	: "vertLine.gif",
  treeId : new Array(),
  treeChildId : new Array(),
  newTreeView : true,
addPropertyMethod : function(id)
{
  treeviews.objects[id].addToBody  =  function()
  {
    treeviews.addToBody(id);
  }
  treeviews.objects[id].addNode  =  function(newId,targetId,type,text,objeto)
  {
  	 if(treeviews.objects[id].addNode.arguments.length == 5)
     {	
       return treeviews.addNode(newId,targetId,type,text,objeto);
	 }
	 else
	 {
	   return treeviews.addNode(newId,targetId,type,text);
	 }
  }
  treeviews.objects[id].addObjectToNode  =  function(idx,obj1,obj2)
  {
  	if(treeviews.objects[id].addObjectToNode.arguments.length==3)
    {
      treeviews.addObjectToNode(idx,obj1,obj2);
	}
	else
	{
	  treeviews.addObjectToNode(idx,obj1);
	}
  }
  treeviews.objects[id].createHTMLElement  =  function(name,type,element,defaultValue)
  {
    return treeviews.createHTMLElement(id,name,type,element,defaultValue);
  }
  treeviews.objects[id].changeImgExpand  =  function(newImgCode,oldImgCode)
  {
    treeviews.changeImgExpand(id,newImgCode,oldImgCode);
  }
  treeviews.objects[id].changeImgFolder  =  function(newImgCode,oldImgCode)
  {
    treeviews.changeImgFolder(id,newImgCode,oldImgCode);
  }
  treeviews.objects[id].exchangeImgExpand  =  function()
  {
    treeviews.exchangeImgExpand(id);
  }
  treeviews.objects[id].getObject  =  function()
  {
    return treeviews.getObject(id);
  }
  treeviews.objects[id].getIntObject  =  function()
  {
    return treeviews.getIntObject(id);
  }
  treeviews.objects[id].getHTMLElementById  =  function(idElement)
  {
    return treeviews.getHTMLElementById(idElement);
  }
  treeviews.objects[id].getText  =  function()
  {
    return treeviews.getText(id);
  }
  treeviews.objects[id].hide  =  function()
  {
    treeviews.hide(id);
  }
  treeviews.objects[id].onOpen  =  function(funct)
  {
    treeviews.onOpen(id,funct);
  }
  treeviews.objects[id].onClose  =  function(funct)
  {
    treeviews.onClose(id,funct);
  }
  treeviews.objects[id].onAnyOpen  =  function(funct)
  {
    treeviews.onAnyOpen(funct);
  }
  treeviews.objects[id].onAnyClose  =  function(funct)
  {
    treeviews.onAnyClose(funct);
  }
  treeviews.objects[id].onClick  =  function(funct)
  {
    treeviews.onClick(id,funct);
  }
  treeviews.objects[id].onMouseOver  =  function(funct)
  {
    treeviews.onMouseOver(id,funct);
  }
  treeviews.objects[id].onMouseMove  =  function(funct)
  {
    treeviews.onMouseMove(id,funct);
  }
  treeviews.objects[id].onMouseDown  =  function(funct)
  {
    treeviews.onMouseDown(id,funct);
  }
  treeviews.objects[id].onMouseUp  =  function(funct)
  {
    treeviews.onMouseUp(id,funct);
  }
  treeviews.objects[id].onMouseOut  =  function(funct)
  {
    treeviews.onMouseOut(id,funct);
  }
  treeviews.objects[id].onKeyPress  =  function(funct)
  {
    treeviews.onKeyPress(id,funct);
  }
  treeviews.objects[id].onKeyDown  =  function(funct)
  {
    treeviews.onKeyDown(id,funct);
  }
  treeviews.objects[id].onKeyUp  =  function(funct)
  {
    treeviews.onKeyUp(id,funct);
  }
  treeviews.objects[id].setEventExpand  =  function()
  {
    treeviews.setEventExpand(id);
  }
  treeviews.objects[id].setBackground  =  function(bgColor,width,height,borderStyle,autoScroll)
  {
    treeviews.setBackground(id,bgColor,width,height,borderStyle,autoScroll);
  }
  treeviews.objects[id].setDimension = function(width, height)
  {
  	treeviews.setDimension(id, width, height);
  }
  treeviews.objects[id].setFont  =  function(fontFamily,size)
  {
    treeviews.setFont(id,fontFamily,size);
  }
  treeviews.objects[id].show  =  function()
  {
    treeviews.show(id);
  }
  treeviews.objects[id].setPathImgs  =  function(path)
  {
    treeviews.setPathImgs(id,path);
  }
  treeviews.objects[id].setObjAttrib  =  function(objAttr,env)
  {
    treeviews.setObjAttrib(id,objAttr,env);
  }
  treeviews.objects[id].setObjAttribToAll  =  function(objAttrib,env)
  {
    treeviews.setObjAttribToAll(objAttrib,env);
  }
  treeviews.objects[id].setPosition  =  function(x,y)
  {
    treeviews.setPosition(id,x,y);
  }
  treeviews.objects[id].setRelativePosition  =  function()
  {
    treeviews.setRelativePosition(id);
  }
  treeviews.objects[id].setLoadBGImg = function(activeLoad)
  {
	treeviews.setLoadBGImg(id, activeLoad);
  }
  treeviews.objects[id].setLoadBGImgAll = function(activeLoad)
  {
	treeviews.setLoadBGImgAll(activeLoad);
  }
  treeviews.objects[id].setBgBodyImg = function(bgImg)
  {
  	treeviews.setBgBodyImg(id, bgImg);
  }
  treeviews.objects[id].destroy = function()
  {
  	treeviews.destroy();
  }
  treeviews.objects[id].setBorderWidth = function(width)
  {
  	treeviews.setBorderWidth(id, width);
  }
  treeviews.objects[id].setImagesOpenClose = function(imageOpen, imageClose)
  {
  	treeviews.setImagesOpenClose(id, imageOpen, imageClose);
  }
  treeviews.objects[id].getNode = function(nodeId)
  {
  	return treeviews.getNode(nodeId);
  }
  treeviews.objects[id].getListNode = function()
  {
  	return treeviews.getListNode();
  }
  treeviews.objects[id].getObjectFromNode = function(nodeId)
  {
  	return treeviews.getObjectFromNode(nodeId);
  }
  treeviews.objects[id].getListSubNode = function(nodeId)
  {
  	return treeviews.getListSubNode(nodeId);
  }
  treeviews.objects[id].activeUpdateCheck = function()
  {
  	treeviews.activeUpdateCheck();
  }
  treeviews.objects[id].getParentNodeId = function(childId)
  {
  	return treeviews.getParentNodeId(childId);
  }
  treeviews.objects[id].cleanCheckNode = function(nodeId)
  {
  	return treeviews.cleanCheckNode(nodeId);
  }
  treeviews.objects[id].setCheckCascadeUpdate = function(sts){
  	treeviews.setCheckCascadeUpdate(sts);
  }
},
  addToBody : function(id)
  {
    document.body.appendChild(this.objects[id].generalDiv);
  },
  addNode : function(newId,targetId,type,text,objeto)
  {
    this.newTreeView = false;
    var pos = this.objects[targetId].tableExpand.rows.length;
    var node = treeviews.create(newId,type,text,objeto); 
    this.newTreeView = true;
    var t = this.treeId[targetId].childs.length;
    this.treeId[targetId].childs[t] = newId;
    this.treeChildId[newId].parent = targetId;
    this.treeChildId[newId].hasParent = true;
    this.objects[targetId].tableExpand.insertRow(pos);
    this.objects[targetId].tableExpand.rows[pos].insertCell(0);
    this.objects[targetId].tableExpand.rows[pos].cells[0].appendChild(this.getIntObject(newId).generalDiv);
    this.objects[targetId].tableExpand.rows[pos].cells[0].intObj = this.getIntObject(newId);
    if(treeviews.addNode.arguments.length == 5)
    {	
      treeviews.addObjectToNode(newId,objeto);
    }
    if(objeto!=null)
      if(objeto.type=='checkbox')
    	treeviews.activeUpdateCheck();
    return node;
  },
  
  getParentNodeId : function(childId)
  {
  	if(this.treeChildId[childId]!=null && this.treeChildId[childId]!=undefined)
  	  return this.treeChildId[childId].parent
  	return null;
  },
  getListSubNode : function(nodeId)
  {
  	
  	var listNode = new Array();
  	var total = this.objects[nodeId].tableExpand.rows.length;
  	for(var pos=0; pos<total; pos++)
  	{
  	  listNode[pos] = this.objects[nodeId].tableExpand.rows[pos].cells[0].intObj;	
  	}
  	return listNode;
  },
  getObjectFromNode : function(nodeId)
  {
  	var obj = this.objects[nodeId].tableFolderText.rows[0].cells[1].firstChild;
  	if(obj!=null)
  	  return this.objects[nodeId].tableFolderText.rows[0].cells[1].firstChild;
  	obj = this.objects[nodeId].tableFolderText.rows[0].cells[0].firstChild;
  	if(obj!=null)
  	  return this.objects[nodeId].tableFolderText.rows[0].cells[0].firstChild
  	else
  	  return null;
  },
  
  cleanCheckNode : function(nodeId){
  	this.getObjectFromNode(nodeId).checked = false;
  },
  
  updateCheckBoxAllSubNodes : function(nodeId)
  {
  	var sts = treeviews.getObjectFromNode(nodeId).checked;
  	var l = treeviews.getListSubNode(nodeId);
  	var t = l.length;
  	var o = new Object();
  	for (var i=0; i<t; i++)
  	{	 
  	  o = treeviews.getObjectFromNode(l[i].id);
  	  if(o!=null)
  	    if(o.type=='checkbox')
          o.checked = sts;
      if (treeviews.treeId[l[i].id].childs.length > 0) 
      {
      	treeviews.updateCheckBoxAllSubNodes(l[i].id);
      };
  	};
  },
  
  getStsObjSubNode : function(nodeId){
  	var l = treeviews.getListSubNode(nodeId);
  	var t = l.length;
  	var o = new Object();
  	for (var i=0; i<t; i++)
  	{	 
  	  o = treeviews.getObjectFromNode(l[i].id);
      treeviews.arrSts[i] = o.checked;
   };
  },
  
  setStsObjSubNode : function(nodeId){
  	treeviews.arrSts.length=0;
  	var l = treeviews.getListSubNode(nodeId);
  	var t = l.length;
  	var o = new Object();
  	for (var i=0; i<t; i++)
  	{	 
  	  o = treeviews.getObjectFromNode(l[i].id);
      o.checked = treeviews.arrSts[i];
   };
  },
  
  updateCheckBoxAllParentNodes : function(nodeId)
  {
	var idParent = treeviews.treeChildId[nodeId].parent;
  	if(treeviews.getObjectFromNode(idParent)!=null)
  	{
  	  if(treeviews.getObjectFromNode(idParent).type=='checkbox')
  	  {	
  	    var l = treeviews.getListSubNode(idParent);
  	    var t = l.length;
  	    var f = false;
  	    for (var i=0; i<t; i++)
  	    {
  	      o = treeviews.getObjectFromNode(l[i].id);
  	      if(o!=null)
  	      {
  	     	if(o.type=='checkbox')
  	    	{
  	  	      if(o.checked == true)
  	  	      {
  	  	        f=true;
  	  	        break;	
  	  	      }
  	  	    }  
  	      }
  	    }
  	    treeviews.getObjectFromNode(idParent).checked = f;
  	  }
  	}
  },
  
  setCheckCascadeUpdate : function(sts)
  {
  	treeviews.cascadeCheck=sts;
  },
  
  activeUpdateCheck : function()
  {
  	for(var i=0; i<this.ids.length; i++ )
  	{
  	  var idx = treeviews.ids[i];
  	  if(treeviews.treeId[idx].childs.length > 0)
  	  {  	  	
  	    if(treeviews.getObjectFromNode(idx).type=='checkbox')
  	    {
          treeviews.getObjectFromNode(idx).idx = idx;  
  	      treeviews.getObjectFromNode(idx).onclick = function(e)
  	      {
  	      	if (treeviews.cascadeCheck){
  	  	      treeviews.updateCheckBoxAllSubNodes(this.idx);
  	  	      treeviews.updateCheckBoxAllParentNodes(this.idx);
  	  	    }
  	      }
  	      treeviews.getObjectFromNode(idx).ondblclick = function(e)
  	      {
  	      	treeviews.setStsObjSubNode(this.idx);
  	  	    treeviews.cleanCheckNode(this.idx);
  	      }
  	    }
  	  }
  	  else
  	  {
  	  	if(treeviews.getObjectFromNode(idx)!=null)
  	  	{
  	  		if(treeviews.getObjectFromNode(idx).type=='checkbox')
  	  		{
  	  		  treeviews.getObjectFromNode(idx).idx = idx; 
  	  		  treeviews.getObjectFromNode(idx).ondblclick = function(e)
  	      	  {
  	  	        treeviews.cleanCheckNode(this.idx);
  	          }	
  	  		  treeviews.getObjectFromNode(idx).onclick = function(e)
  	      	  {
  	      	  	if (treeviews.cascadeCheck){
  	      	  	  var index = this.idx;
  	      	  	  treeviews.updateCheckBoxAllParentNodes(index);
  	      	  	  var tid = treeviews.ids.length;
  				  for(var it=1; it<tid; it++)
  				  {
  				    if(treeviews.treeChildId[index].hasParent)
  				    {
  				  	  treeviews.updateCheckBoxAllParentNodes(index);
  				  	  index = treeviews.treeChildId[index].parent;
  				    }
  				  }
  				}  
  	      	  }
  	  		}
  	  	}
  	  }
  	}
  },
  addObjectToNode : function(id,obj1,obj2)
  {
    this.objects[id].tableFolderText.rows[0].cells[1].appendChild(obj1);
    this.objects[id].tableFolderText.rows[0].cells[1].style.align='center';
    if(this.addObjectToNode.arguments.length==3)
    {
      this.objects[id].tableFolderText.rows[0].cells[2].appendChild(obj2);
      this.objects[id].tableFolderText.rows[0].cells[2].style.align='center';
    }
  },
  createHTMLElement : function(id,name,type,element,defaultValue)
  {
    this.HTMLElements[id] = document.createElement(element);
    this.HTMLElements[id].name = name;
    this.HTMLElements[id].type = type;
    this.HTMLElements[id].value = defaultValue;
    this.HTMLElements[id].id = id;
    return this.HTMLElements[id];
  },
  getNode : function(nodeId)
  {
  	return this.objects[nodeId];
  },
  getListNode : function()
  {
  	var l = new Array();
  	var t = this.ids.length;
  	for(var i=0; i<t; i++)
  	{
  	  l[i] = this.objects[this.ids[i]];
  	}
  	return l;
  },
  setImagesOpenClose : function(id, imageOpen, imageClose)
  {
	this.imgFolderClose = imageClose;
	this.imgFolderOpen  = imageOpen; 
  	this.objects[id].imgs[this.FOLDER_CLOSE].src = this.pathImgs+"/"+imageClose;
	this.objects[id].imgs[this.FOLDER_OPEN].src = this.pathImgs+"/"+imageOpen; 
  },
  create : function(id,type,textObj,objeto)
  {
    this.objects[id] = new Object();
    this.objects[id].ambiente = attrib.getActualEnv();
    this.objects[id].nameComponent = 'treeviews';
    this.objects[id].imgConex 		= this.imgConex;
  	this.objects[id].imgFolderClose = this.imgFolderClose;
  	this.objects[id].imgFolderOpen	= this.imgFolderOpen;
  	this.objects[id].imgLastConex	= this.imgLastConex;
  	this.objects[id].imgFinalMinus	= this.imgFinalMinus;
  	this.objects[id].imgMoreMinus	= this.imgMoreMinus;
  	this.objects[id].imgFinalPlus	= this.imgFinalPlus;
  	this.objects[id].imgMorePlus	= this.imgMorePlus;
  	this.objects[id].imgVertLine	= this.imgVertLine;
	this.objects[id].container = document.createElement('div');
	this.objects[id].container.style.borderRadius='1em';
	this.objects[id].loadBGImg = false;
    var f = false;
    for(var i=0; i<this.ids.length; i++)
    {
    	
    	if(this.ids[i]==id)
    	{
    		f=true;
    		break;
    	}    	
    }
    if(!f)
      this.ids[this.ids.length]=id;
    if (this.treeId[id]==null || this.treeId[id]==undefined)
    {
      this.treeId[id] = new Array();
      this.treeId[id].childs = new Array();	
    }
    this.treeChildId[id] = new Object();
    this.treeChildId[id].parent = '';
    this.treeChildId[id].hasParent = false;
    this.objects[id].tipo=type;
    this.objects[id].id=id;
    this.objects[id].isExpand=false;
    this.objects[id].onOpen=new Function();
    this.objects[id].onClose=new Function();
    this.objects[id].imgs = new Array;
    this.objects[id].table = document.createElement('table');
    this.objects[id].tableFolderText = document.createElement('table');
    this.objects[id].tableExpand = document.createElement('table');
    this.objects[id].table.setAttribute("border","0");
    this.objects[id].table.setAttribute("cellPadding","0");
    this.objects[id].table.setAttribute("cellSpacing","0");
    this.objects[id].table.insertRow(0);
    this.objects[id].table.insertRow(1);
    this.objects[id].table.rows[0].insertCell(0);
    this.objects[id].table.rows[0].insertCell(1);
    this.objects[id].table.rows[1].insertCell(0);
    this.objects[id].table.rows[1].insertCell(1);
    this.objects[id].tableFolderText.setAttribute("border","0");
    this.objects[id].tableFolderText.setAttribute("cellPadding","0");
    this.objects[id].tableFolderText.setAttribute("cellSpacing","0");
    this.objects[id].tableFolderText.insertRow(0);
    this.objects[id].tableFolderText.rows[0].insertCell(0);
    this.objects[id].tableFolderText.rows[0].insertCell(1);
    this.objects[id].tableFolderText.rows[0].insertCell(2);
    this.objects[id].tableExpand.setAttribute("border","0");
    this.objects[id].tableExpand.setAttribute("cellPadding","0");
    this.objects[id].tableExpand.setAttribute("cellSpacing","0");
    this.objects[id].generalDiv = document.createElement('div');
    this.objects[id].generalDiv.style.borderRadius='1em';
    this.objects[id].folderDiv = document.createElement('div');
    this.objects[id].folderDiv.style.borderRadius='1em';
    this.objects[id].expandDiv = document.createElement('div');
    this.objects[id].expandDiv.style.borderRadius='1em';
    this.objects[id].generalDiv.style.display='block';
    this.objects[id].folderDiv.style.display='block';
    switch(type)
    {
      case this.TYPE_MORE_PLUS_FOLDER : {
        this.hide(id);
        break;
      }
      case this.TYPE_LAST_PLUS_FOLDER : {
        this.hide(id);
        break;
      }
      case this.TYPE_MORE_MINUS_FOLDER :{
        this.show(id);
        break;
      }
      case this.TYPE_LAST_MINUS_FOLDER :{
        this.show(id);
        break;
      }
      case this.TYPE_MORE_SIMPLE_TEXT : {
        this.hide(id);
        break;
      }
      case this.TYPE_LAST_SIMPLE_TEXT : {
        this.hide(id);
        break;
      }
      case this.TYPE_SIMPLE_OBJECT :	  {
        this.hide(id);
        break;
      }
    }
    this.objects[id].generalDiv.appendChild(this.objects[id].table);
    this.objects[id].folderDiv.appendChild(this.objects[id].tableFolderText);
    this.objects[id].expandDiv.appendChild(this.objects[id].tableExpand);
	this.objects[id].container.appendChild(this.objects[id].generalDiv);
    for(i=0; i<9; i++)
    {
      this.objects[id].imgs[i] = document.createElement('img');
    }
    this.objects[id].imgs[this.CONEX].src 		= this.pathImgs+"/"+this.objects[id].imgConex;
    this.objects[id].imgs[this.FOLDER_CLOSE].src = this.pathImgs+"/"+this.objects[id].imgFolderClose;
    this.objects[id].imgs[this.FOLDER_OPEN].src = this.pathImgs+"/"+this.objects[id].imgFolderOpen;
    this.objects[id].imgs[this.LAST_CONEX].src 	= this.pathImgs+"/"+this.objects[id].imgLastConex;
    this.objects[id].imgs[this.FINAL_MINUS].src 	= this.pathImgs+"/"+this.objects[id].imgFinalMinus;
    this.objects[id].imgs[this.MORE_MINUS].src 	= this.pathImgs+"/"+this.objects[id].imgMoreMinus;
    this.objects[id].imgs[this.FINAL_PLUS].src 	= this.pathImgs+"/"+this.objects[id].imgFinalPlus;
    this.objects[id].imgs[this.MORE_PLUS].src 	= this.pathImgs+"/"+this.objects[id].imgMorePlus;
    this.objects[id].imgs[this.VERT_LINE].src 	= this.pathImgs+"/"+this.objects[id].imgVertLine;
    switch(type)
    {
      case this.TYPE_MORE_PLUS_FOLDER :
      {
        this.objects[id].tableFolderText.rows[0].cells[0].appendChild(this.objects[id].imgs[this.FOLDER_CLOSE]);
        this.objects[id].tableFolderText.rows[0].cells[2].innerHTML = textObj;
        this.objects[id].tableFolderText.rows[0].cells[0].typeImg=this.FOLDER_CLOSE;
        this.objects[id].table.rows[0].cells[0].appendChild(this.objects[id].imgs[this.MORE_PLUS]);
        treeviews.objects[id].table.rows[0].cells[0].typeImg=this.MORE_PLUS;
        break;
      }
      case this.TYPE_LAST_PLUS_FOLDER  :
      {
        this.objects[id].tableFolderText.rows[0].cells[0].appendChild(this.objects[id].imgs[this.FOLDER_CLOSE]);
        this.objects[id].tableFolderText.rows[0].cells[2].innerHTML = textObj;
        this.objects[id].tableFolderText.rows[0].cells[0].typeImg=this.FOLDER_CLOSE;
        this.objects[id].table.rows[0].cells[0].appendChild(this.objects[id].imgs[this.FINAL_PLUS]);
        treeviews.objects[id].table.rows[0].cells[0].typeImg=this.FINAL_PLUS;
        break;
      }
      case this.TYPE_MORE_MINUS_FOLDER:
      {
        this.objects[id].tableFolderText.rows[0].cells[0].appendChild(this.objects[id].imgs[this.FOLDER_OPEN]);
        this.objects[id].tableFolderText.rows[0].cells[2].innerHTML = textObj;
        this.objects[id].tableFolderText.rows[0].cells[0].typeImg=this.FOLDER_OPEN;
        this.objects[id].table.rows[0].cells[0].appendChild(this.objects[id].imgs[this.MORE_MINUS]);
        treeviews.objects[id].table.rows[0].cells[0].typeImg=this.MORE_MINUS;
        break;
      }
      case this.TYPE_LAST_MINUS_FOLDER :
      {
        this.objects[id].tableFolderText.rows[0].cells[0].appendChild(this.objects[id].imgs[this.FOLDER_OPEN]);
        this.objects[id].tableFolderText.rows[0].cells[2].innerHTML = textObj;
        this.objects[id].tableFolderText.rows[0].cells[0].typeImg=this.FOLDER_OPEN;
        this.objects[id].table.rows[0].cells[0].appendChild(this.objects[id].imgs[this.FINAL_MINUS]);
        treeviews.objects[id].table.rows[0].cells[0].typeImg=this.FINAL_MINUS;
        break;
      }
      case this.TYPE_MORE_SIMPLE_TEXT :
      {
        this.objects[id].tableFolderText.rows[0].cells[2].innerHTML = textObj;
        this.objects[id].tableFolderText.rows[0].cells[0].typeImg = null;
        this.objects[id].table.rows[0].cells[0].appendChild(this.objects[id].imgs[this.CONEX]);
        treeviews.objects[id].table.rows[0].cells[0].typeImg = this.CONEX;
        break;
      }
      case this.TYPE_LAST_SIMPLE_TEXT :
      {
        this.objects[id].tableFolderText.rows[0].cells[2].innerHTML = textObj;
        this.objects[id].tableFolderText.rows[0].cells[0].typeImg=null;
        this.objects[id].table.rows[0].cells[0].appendChild(this.objects[id].imgs[this.LAST_CONEX]);
        treeviews.objects[id].table.rows[0].cells[0].typeImg=this.LAST_CONEX;
        break;
      }
      case this.TYPE_SIMPLE_OBJECT :
      {
        this.objects[id].tableFolderText.rows[0].cells[0].appendChild(textObj);
        if(this.create.arguments.length == 5)
        this.objects[id].tableFolderText.rows[0].cells[1].appendChild(objeto);
        this.objects[id].tableFolderText.rows[0].cells[0].typeImg=this.NO_IMG;
        this.objects[id].table.rows[0].cells[0].appendChild(this.objects[id].imgs[this.LAST_CONEX]);
        treeviews.objects[id].table.rows[0].cells[0].typeImg=this.NO_IMG;
        break;
      }
    }
    this.objects[id].table.rows[1].cells[1].appendChild(this.objects[id].expandDiv);
    this.objects[id].table.rows[0].cells[1].appendChild(this.objects[id].folderDiv);
    this.setEventExpand(id);
	this.addPropertyMethod(id);
	if(this.newTreeView)
	{
	  if(attrib)
        this.setObjAttrib(id,attrib,attrib.getActualEnv());
    }
    return this.objects[id];
  },
  changeImgExpand : function(id,newImgCode,oldImgCode)
  {
    treeviews.objects[id].table.rows[0].cells[0].removeChild(this.objects[id].imgs[oldImgCode]);
    treeviews.objects[id].table.rows[0].cells[0].appendChild(this.objects[id].imgs[newImgCode]);
    treeviews.objects[id].table.rows[0].cells[0].typeImg=newImgCode;
  },
  changeImgFolder : function(id,newImgCode,oldImgCode)
  {
    treeviews.objects[id].tableFolderText.rows[0].cells[0].removeChild(this.objects[id].imgs[oldImgCode]);
    treeviews.objects[id].tableFolderText.rows[0].cells[0].appendChild(this.objects[id].imgs[newImgCode]);
    treeviews.objects[id].tableFolderText.rows[0].cells[0].typeImg=newImgCode;
  },
  destroy : function()
  {
	while(this.objects[this.ids[0]].generalDiv.firstChild)
	{	
      this.objects[this.ids[0]].generalDiv.removeChild(this.objects[this.ids[0]].generalDiv.firstChild);
	} 
  },
  exchangeImgExpand : function(id)
  {
    switch(treeviews.objects[id].table.rows[0].cells[0].typeImg)
    {
      case treeviews.MORE_PLUS :{
        treeviews.changeImgExpand(id,treeviews.MORE_MINUS,treeviews.MORE_PLUS);
        treeviews.changeImgFolder(id,treeviews.FOLDER_OPEN,treeviews.FOLDER_CLOSE);
        treeviews.show(id);
        break;
      }
      case treeviews.FINAL_PLUS :{
        treeviews.changeImgExpand(id,treeviews.FINAL_MINUS,treeviews.FINAL_PLUS);
        treeviews.changeImgFolder(id,treeviews.FOLDER_OPEN,treeviews.FOLDER_CLOSE);
        treeviews.show(id);
        break;
      }
      case treeviews.MORE_MINUS :{
        treeviews.changeImgExpand(id,treeviews.MORE_PLUS,treeviews.MORE_MINUS);
        treeviews.changeImgFolder(id,treeviews.FOLDER_CLOSE,treeviews.FOLDER_OPEN);
        treeviews.hide(id);
        break;
      }
      case treeviews.FINAL_MINUS:{
        treeviews.changeImgExpand(id,treeviews.FINAL_PLUS,treeviews.FINAL_MINUS);
        treeviews.changeImgFolder(id,treeviews.FOLDER_CLOSE,treeviews.FOLDER_OPEN);
        treeviews.hide(id);
        break;
      }
      case treeviews.CONEX : 	   {
        treeviews.hide(id);
        break;
      }
      case treeviews.LAST_CONEX :{
        treeviews.hide(id);
        break;
      }
    }
  },
  getObject : function(id)
  {
    return this.objects[id].generalDiv;
  },
  getIntObject : function(id)
  {
    return this.objects[id];
  },
  getHTMLElementById : function(idElement)
  {
    return this.HTMLElements[idElement];
  },
  getText : function(id)
  {
    return this.objects[id].tableFolderText.rows[0].cells[2].innerHTML;
  },
  hide : function(id)
  {
    this.objects[id].expandDiv.style.display="none";
    this.objects[id].table.rows[0].cells[0].isShow=false;
    this.objects[id].onClose();
  },
  onOpen : function(id,funct)
  {
    this.objects[id].onOpen = new Function(funct);
  },
  onClose : function(id,funct)
  {
    this.objects[id].onClose = new Function(funct);
  },
  onAnyOpen : function(funct)
  {
    var i=0;
    for(i=0;i<this.ids.length;i++)
    {
      this.objects[this.ids[i]].onOpen = new Function(funct);
    }
  },
  onAnyClose : function(funct)
  {
    var i=0;
    for(i=0;i<this.ids.length;i++)
    {
      this.objects[this.ids[i]].onClose = new Function(funct);
    }
  },
  onClick : function(id,funct)
  {
    this.objects[id].generalDiv.onclick=new Function(funct);
  },
  onMouseOver : function(id,funct)
  {
    this.objects[id].generalDiv.onmouseover=new Function(funct);
  },
  onMouseMove : function(id,funct)
  {
    this.objects[id].generalDiv.onmousemove=new Function(funct);
  },
  onMouseDown : function(id,funct)
  {
    this.objects[id].generalDiv.onmousedown=new Function(funct);
  },
  onMouseUp : function(id,funct)
  {
    this.objects[id].generalDiv.onmouseup=new Function(funct);
  },
  onMouseOut : function(id,funct)
  {
    this.objects[id].generalDiv.onmouseout=new Function(funct);
  },
  onKeyPress : function(id,funct)
  {
    this.objects[id].generalDiv.onkeypress=new Function(funct);
  },
  onKeyDown : function(id,funct)
  {
    this.objects[id].generalDiv.onkeydown=new Function(funct);
  },
  onKeyUp : function(id,funct)
  {
    this.objects[id].generalDiv.onkeyup=new Function(funct);
  },
  setEventExpand : function(id)
  {
    this.objects[id].table.rows[0].cells[0].onclick = function(e)
    {
      treeviews.exchangeImgExpand(id);
    }
  },
  setBackground : function(id,bgColor,width,height,borderStyle,autoScroll)
  {
    this.objects[id].generalDiv.style.backgroundColor = bgColor;
    this.objects[id].generalDiv.style.width= width+'px';
    this.objects[id].generalDiv.style.height= height+'px';
    this.objects[id].generalDiv.style.borderStyle= borderStyle;
    if(autoScroll)
    this.objects[id].generalDiv.style.overflow ='auto'
  },
  setBorderWidth : function(id, width)
  {
  	this.objects[id].generalDiv.style.borderWidth = width+'px';
  },
  setDimension : function(id,width,height)
  {
    this.objects[id].generalDiv.style.width= width+'px';
    this.objects[id].generalDiv.style.height= height+'px';
  },
  setFont : function(id,fontFamily,size)
  {
    this.objects[id].generalDiv.style.fontFamily = fontFamily;
    this.objects[id].tableFolderText.style.fontSize =size+'px';
    this.objects[id].generalDiv.style.fontSize = size+'px';
    var t = this.ids.length;
  	for(var i=0; i<t; i++)
  	{
  	  this.objects[this.ids[i]].tableFolderText.style.fontSize = size+'px';
  	}
  },
  show : function(id)
  {
    this.objects[id].expandDiv.style.display="block";
    this.objects[id].table.rows[0].cells[0].isShow=true;
    this.objects[id].onOpen();
  },
  setPathImgs : function(id,path)
  {
    this.pathImgs = path;
  },
  setObjAttrib : function(id,objAttr,env)
  {
	this.objects[id].loadBGImg = objAttr.getLoadBGImg();
    this.setBackground(id,objAttr.Color.bgPanel[env],200,300,objAttr.Border.stylePanel[env],true);
    this.setFont(id,objAttr.Font.label[env],objAttr.Size.labelFont[env]);
	this.setBorderWidth(id, objAttr.Size.borderTreeview[env]);
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
    this.objects[id].generalDiv.style.position='absolute';
    this.objects[id].generalDiv.style.left=x+'px';
    this.objects[id].generalDiv.style.top=y+'px';
  },
  setRelativePosition : function(id)
  {
    this.objects[id].generalDiv.style.position='relative';
  },
  setBgBodyImg : function(id, bgImg)
  {
	this.objects[id].generalDiv.style.backgroundImage="url("+this.bgImgPath+bgImg+")";
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