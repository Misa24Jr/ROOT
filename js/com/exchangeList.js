var exchangeList =
{
   objects : new Array,
   ids : new Array,   
  //bgImgPath :"images/bg/",
  RET_ALL_RIGHT :0,
  RET_ALL_LEFT :1,
  RET_ALL_SEL_RIGHT :2,
  RET_ALL_SEL_LEFT :3,
  
addPropertyMethod : function(id)
{
  exchangeList.objects[id].setFieldFind = function(fieldFind)
  {
	exchangeList.setFieldFind(id,fieldFind);
  } 
  exchangeList.objects[id].getFieldFind = function()
  {
     return exchangeList.getFieldFind(id);
  } 
  exchangeList.objects[id].addToBody  =  function()
  {
    exchangeList.addToBody(id);
  }
  exchangeList.objects[id].allSelectedLeft  =  function(sts)
  {
    exchangeList.allSelectedLeft(id,sts);
  }
  exchangeList.objects[id].allSelectedRight  =  function(sts)
  {
    exchangeList.allSelectedRight(id,sts);
  }
  exchangeList.objects[id].addLnsLeft  =  function(textArr)
  {
    exchangeList.addLnsLeft(id,textArr);
  }
  exchangeList.objects[id].addLnsRight  =  function(textArr)
  {
    exchangeList.addLnsRight(id,textArr);
  }
  exchangeList.objects[id].addLnLeft  =  function(text)
  {
    exchangeList.addLnLeft(id,text);
  }
  exchangeList.objects[id].addLnRight  =  function(text)
  {
    exchangeList.addLnRight(id,text);
  }
  exchangeList.objects[id].delLnLeft  =  function(ln)
  {
    exchangeList.delLnLeft(id,ln);
  }
  exchangeList.objects[id].delSelectedLnLeft  =  function()
  {
    exchangeList.delSelectedLnLeft(id);
  }
  exchangeList.objects[id].delLnRight  =  function(ln)
  {
    exchangeList.delLnRight(id,ln);
  }
  exchangeList.objects[id].delSelectedLnRight  =  function()
  {
    exchangeList.delSelectedLnRight(id);
  }
  exchangeList.objects[id].getSelectedLeft  =  function()
  {
    return exchangeList.getSelectedLeft(id);
  }
  exchangeList.objects[id].getSelectedRight  =  function()
  {
    return exchangeList.getSelectedRight(id);
  }
  exchangeList.objects[id].getAllLeft  =  function()
  {
    return exchangeList.getAllLeft(id);
  }
  exchangeList.objects[id].getAllRight  =  function()
  {
    return exchangeList.getAllRight(id);
  }
  exchangeList.objects[id].hide  =  function()
  {
    exchangeList.hide(id);
  }
  exchangeList.objects[id].show  =  function()
  {
    exchangeList.show(id);
  }
  exchangeList.objects[id].setBgColorBarTitle  =  function(color)
  {
    exchangeList.setBgColorBarTitle(id,color);
  }
  exchangeList.objects[id].setBgColor  =  function(color)
  {
    exchangeList.setBgColor(id,color);
  }
  exchangeList.objects[id].setColorButtons  =  function(color)
  {
    exchangeList.setColorButtons(id,color);
  }
  exchangeList.objects[id].setColorTextButtons  =  function(color)
  {
    exchangeList.setColorTextButtons(id,color);
  }
  exchangeList.objects[id].setFontTitle  =  function(fontFamily,fontSize,fontColor)
  {
    exchangeList.setFontTitle(id,fontFamily,fontSize,fontColor);
  } 
  exchangeList.objects[id].setFontBody = function(fontFamily,fontSize,fontColor)
  {
    exchangeList.setFontBody(id,fontFamily,fontSize,fontColor);
  }
  exchangeList.objects[id].setFontSubTitle  =  function(fontFamily,fontSize,fontColor)
  {
    exchangeList.setFontSubTitle(id,fontFamily,fontSize,fontColor);
  }  
  exchangeList.objects[id].setBorderColor  =  function(color)
  {
    exchangeList.setBorderColor(id,color);
  }
  exchangeList.objects[id].setBorderStyleBarraTitle  =  function(bs)
  {
    exchangeList.setBorderStyleBarraTitle(id,bs);
  }
  exchangeList.objects[id].setBorderSize  =  function(size)
  {
    exchangeList.setBorderSize(id,size);
  }
  exchangeList.objects[id].setObjAttrib  =  function(objAttr,env)
  {
    exchangeList.setObjAttrib(id,objAttr,env);
  }
  exchangeList.objects[id].setObjAttribToAll  =  function(objAttr,env)
  {
    exchangeList.setObjAttribToAll(objAttrib,env);
  }
  exchangeList.objects[id].setBgBarImg = function(barImg)
  {
  	exchangeList.setBgBarImg(id, barImg) 
  } 
  exchangeList.objects[id].setBgSubTitleBarImg = function(barImg)
  {
  	exchangeList.setBgSubTitleBarImg(id, barImg) 
  }   
  exchangeList.objects[id].setLoadBGImg = function(activeLoad)
  {
	exchangeList.setLoadBGImg(id, activeLoad);
  }
  exchangeList.objects[id].setLoadBGImgAll = function(activeLoad)
  {
	exchangeList.setLoadBGImgAll(activeLoad);
  }
  exchangeList.objects[id].setBgBodyImg = function(bgImg)
  {
  	exchangeList.setBgBodyImg(id, bgImg);
  }
  exchangeList.objects[id].addDataStructLeft = function(dataStruct)
  {
  	exchangeList.addDataStructLeft(id, dataStruct);
  }
  exchangeList.objects[id].addDataStructRight = function(dataStruct)
  {
  	exchangeList.addDataStructRight(id, dataStruct);
  }
  exchangeList.objects[id].getRightValues = function()
  { 
  	return exchangeList.getRightValues(id);
  }
  exchangeList.objects[id].getLeftValues = function()
  { 
  	return exchangeList.getLeftValues(id);
  }
  exchangeList.objects[id].getSelectedLeftValues =  function()
  {
    return exchangeList.getSelectedLeftValues(id);
  }
  exchangeList.objects[id].getSelectedRightValues =  function()
  {
    return exchangeList.getSelectedRightValues(id);
  }
  exchangeList.objects[id].setSeparator = function(separator)
  {
  	exchangeList.setSeparator(id, separator);
  } 
  exchangeList.objects[id].setGetTextReturn = function(returnType)
  {
  	exchangeList.setGetTextReturn(id, returnType);
  }
  exchangeList.objects[id].getText  =  function()
  {
    return exchangeList.getText(id);
  }
},
   addToBody : function(id)
   {
     document.body.appendChild(this.objects[id]);
   },
   allSelectedLeft : function(id,sts)
   {
     for(j=0; j<this.objects[id].tableData1.rows.length;j++)
     {
       this.objects[id].checksLeft[j].checked = sts;
     }
   },
   allSelectedRight : function(id,sts)
   {
     for(j=0; j<this.objects[id].tableData2.rows.length;j++)
     {
       this.objects[id].checksRight[j].checked = sts;
     }
   },
   
   addLnsLeft : function(id,textArr)
   {
	 for(i=0; i<textArr.length; i++)
     {
       this.addLnLeft(id,textArr[i]);	
     }     
   },
   
   addLnsRight : function(id,textArr)
   {
     for(i=0; i<textArr.length; i++)
     {		
       this.addLnRight(id,textArr[i]);     
     }
   },
   
   addLnLeft : function(id,text)
   {
     var row = this.objects[id].tableData1.rows.length;
     this.objects[id].checksLeft[row] = document.createElement("input");
     this.objects[id].checksLeft[row].type="checkbox";
     this.objects[id].checksLeft[row].name="checkboxLeft"+row;
     this.objects[id].tableData1.insertRow(row);
     this.objects[id].tableData1.rows[row].insertCell(0);
     this.objects[id].tableData1.rows[row].insertCell(1);
     this.objects[id].tableData1.rows[row].cells[0].appendChild(this.objects[id].checksLeft[row]);
     this.objects[id].tableData1.rows[row].cells[1].appendChild(document.createTextNode(text));
   },
   
   addLnRight : function(id,text)
   {
     var row = this.objects[id].tableData2.rows.length;
     this.objects[id].checksRight[row] = document.createElement("input");
     this.objects[id].checksRight[row].type="checkbox";
     this.objects[id].checksRight[row].name="checkboxRight"+row;
     this.objects[id].tableData2.insertRow(row);
     this.objects[id].tableData2.rows[row].insertCell(0);
     this.objects[id].tableData2.rows[row].insertCell(1);
     this.objects[id].tableData2.rows[row].cells[0].appendChild(this.objects[id].checksRight[row]);
     this.objects[id].tableData2.rows[row].cells[1].appendChild(document.createTextNode(text));
   },

   addDataStructLeft : function(id,dataStruct)
   {
   	 this.objects[id].dataStruct.arrOpt = dataStruct.arrOpt;
   	 this.objects[id].dataStruct.arrVal = dataStruct.arrVal;
   	 this.objects[id].dataStruct.setValues();
   	 this.addLnsLeft(id,this.objects[id].dataStruct.arrOpt);
   },
   addDataStructRight : function(id,dataStruct)
   {
   	 this.objects[id].dataStruct.arrOpt = dataStruct.arrOpt;
   	 this.objects[id].dataStruct.arrVal = dataStruct.arrVal;
   	 this.objects[id].dataStruct.setValues();
   	 this.addLnsRight(id,this.objects[id].dataStruct.arrOpt);
   },
   
   create : function(id,width,height,title,subTitleLeft,subTitleRight)
   {
     this.objects[id] = document.createElement("div");
     this.objects[id].style.width = width + 'px';
     this.objects[id].style.height = height + 'px';
     this.objects[id].nameComponent = 'exchangeList';
     this.objects[id].ambiente = attrib.getActualEnv();
     this.ids[this.ids.length] = id;
     this.objects[id].dataStruct =
     {
     	arrOpt : new Array(),
     	arrVal : new Array(),
     	arrVal2 : new Array(),
     	setValues : function()
     	{
     		var i=0;
     		for(i=0; i<this.arrOpt.length; i++)
     		{
     			var o = this.arrOpt[i];
     			this.arrVal2[o] = this.arrVal[i];
     		}
     	},
     	getVal : function(option)
     	{
     		return this.arrVal2[option];
     	}
     }
	   this.objects[id].fieldFind = false;
     this.objects[id].separator = ','; 
     this.objects[id].returnTypeGetText = this.RET_ALL_RIGHT;
	   this.objects[id].loadBGImg = true;
	   this.objects[id].id = id;
     this.objects[id].tableContainer = document.createElement("table");
     this.objects[id].tableHeadTitle = document.createElement("table");
     this.objects[id].tableData = document.createElement("table");
     this.objects[id].tableData1 = document.createElement("table");
     this.objects[id].divTableData1 = document.createElement("div");
     this.objects[id].tableData2 = document.createElement("table");
     this.objects[id].divTableData2 = document.createElement("div");
     this.objects[id].checksLeft = new Array;
     this.objects[id].checksRight = new Array;
     this.objects[id].stsCheck = 0;
     this.objects[id].tableContainer.insertRow(0);
     this.objects[id].tableContainer.insertRow(1);
     this.objects[id].tableContainer.rows[0].insertCell(0);
     this.objects[id].tableContainer.rows[1].insertCell(0);
     this.objects[id].tableContainer.setAttribute("border","1");
     this.objects[id].tableContainer.setAttribute("cellPadding","0");
     this.objects[id].tableContainer.setAttribute("cellSpacing","0");
     this.objects[id].tableHeadTitle.insertRow(0);
     this.objects[id].tableHeadTitle.rows[0].insertCell(0);
     this.objects[id].tableHeadTitle.rows[0].cells[0].style.height = '17px';
     this.objects[id].tableHeadTitle.rows[0].cells[0].style.lineHeight = '17px';
	   this.objects[id].tableHeadTitle.setAttribute("border","0");
     this.objects[id].tableHeadTitle.setAttribute("cellPadding","0");
     this.objects[id].tableHeadTitle.setAttribute("cellSpacing","0");
     this.objects[id].tableData.setAttribute("border","0");
     this.objects[id].tableData.setAttribute("cellPadding","0");
     this.objects[id].tableData.setAttribute("cellSpacing","0");
     this.objects[id].tableData.insertRow(0);
     this.objects[id].tableData.insertRow(1);
     this.objects[id].tableData.rows[0].insertCell(0);
     this.objects[id].tableData.rows[0].insertCell(1);
     this.objects[id].tableData.rows[0].insertCell(2);
     this.objects[id].tableData.rows[0].insertCell(3);
     this.objects[id].tableData.rows[0].insertCell(4);
     exchangeList.objects[id].checkLeft = document.createElement('input');
     exchangeList.objects[id].checkLeft.type = 'checkbox';
     exchangeList.objects[id].checkLeft.onclick = function(e)
     {
     	if (exchangeList.objects[id].checkLeft.checked)
     	{
          exchangeList.allSelectedLeft(id,true);
        }
        else
        {
          exchangeList.allSelectedLeft(id,false);
        }
     }
     exchangeList.objects[id].checkRight = document.createElement('input');
     exchangeList.objects[id].checkRight.type = 'checkbox';
     exchangeList.objects[id].checkRight.onclick = function(e)
     {
     	if (exchangeList.objects[id].checkRight.checked)
     	{
     	  exchangeList.allSelectedRight(id,true);  
        }
        else
        {
          exchangeList.allSelectedRight(id,false);  
        }
     }
     this.objects[id].tableData.rows[0].cells[0].appendChild(exchangeList.objects[id].checkLeft);
     this.objects[id].tableData.rows[0].cells[1].innerHTML = subTitleLeft;
     this.objects[id].tableData.rows[0].cells[3].appendChild(exchangeList.objects[id].checkRight);
     this.objects[id].tableData.rows[0].cells[4].innerHTML = subTitleRight;
     this.objects[id].tableData.rows[0].cells[0].align = 'left';
     this.objects[id].tableData.rows[0].cells[1].align = 'center';
     this.objects[id].tableData.rows[0].cells[3].align = 'left';
     this.objects[id].tableData.rows[0].cells[4].align = 'center';
     this.objects[id].tableData.rows[1].insertCell(0);
     this.objects[id].tableData.rows[1].insertCell(1);
     this.objects[id].tableData.rows[1].insertCell(2);
     this.objects[id].tableData.rows[1].insertCell(3);
     this.objects[id].tableData.rows[1].insertCell(4);
     this.objects[id].tableData1.setAttribute("border","0");
     this.objects[id].tableData1.setAttribute("cellPadding","0");
     this.objects[id].tableData1.setAttribute("cellSpacing","0");
     this.objects[id].tableData2.setAttribute("border","0");
     this.objects[id].tableData2.setAttribute("cellPadding","0");
     this.objects[id].tableData2.setAttribute("cellSpacing","0");
     this.objects[id].tableContainer.rows[0].cells[0].appendChild(this.objects[id].tableHeadTitle);
     this.objects[id].divTableData1.appendChild(this.objects[id].tableData1);
     this.objects[id].divTableData2.appendChild(this.objects[id].tableData2);
     this.objects[id].tableData.rows[1].cells[1].appendChild(this.objects[id].divTableData1);
     this.objects[id].tableData.rows[1].cells[4].appendChild(this.objects[id].divTableData2);
     this.objects[id].tableContainer.rows[1].cells[0].appendChild(this.objects[id].tableData);
     this.objects[id].appendChild(this.objects[id].tableContainer);
     this.objects[id].tablaBotones = document.createElement('table');
     this.objects[id].tablaBotones.setAttribute("border","0");
     this.objects[id].tablaBotones.setAttribute("cellPadding","0");
     this.objects[id].tablaBotones.setAttribute("cellSpacing","0");
     this.objects[id].tablaBotones.insertRow(0);
     this.objects[id].tablaBotones.insertRow(1);
     this.objects[id].tablaBotones.rows[0].insertCell(0);
     this.objects[id].tablaBotones.rows[1].insertCell(0);
     this.objects[id].divTablaBotones = document.createElement('div');
     this.objects[id].allCheckSelected = document.createElement("input");
     this.objects[id].allCheckSelected.type="button";
     this.objects[id].allCheckSelected.value=" > ";
     this.objects[id].allCheckSelected.style.width = '30px';
     this.objects[id].allCheckSelected.style.height = '30px';
     this.objects[id].allCheckSelected.onclick = function()
     { 
       exchangeList.addLnsRight(id,exchangeList.getSelectedLeft(id));
       exchangeList.delSelectedLnLeft(id);
       exchangeList.objects[id].checkRight.checked = false;
       exchangeList.objects[id].checkLeft.checked = false;
     }
     
     this.objects[id].noCheckSelected = document.createElement("input");
     this.objects[id].noCheckSelected.type="button";
     this.objects[id].noCheckSelected.value=" < ";
     this.objects[id].noCheckSelected.style.width = '30px';
     this.objects[id].noCheckSelected.style.height = '30px';
     this.objects[id].noCheckSelected.onclick = function()
     {
       exchangeList.addLnsLeft(id,exchangeList.getSelectedRight(id));
       exchangeList.delSelectedLnRight(id);
       exchangeList.objects[id].checkLeft.checked = false;
       exchangeList.objects[id].checkRight.checked = false;
     } 
     var h = height - 20;
     this.objects[id].divTableData1.style.height = h+'px';
     this.objects[id].divTableData2.style.height = h+'px';
     this.objects[id].tablaBotones.style.height = h+'px';
     this.objects[id].divTableData1.style.overflowY = "auto";
     this.objects[id].divTableData1.style.overflowX = "hidden";
     this.objects[id].divTableData2.style.overflowY = "auto";
     this.objects[id].divTableData2.style.overflowX = "hidden";
     this.objects[id].tableHeadTitle.rows[0].cells[0].appendChild(document.createTextNode(title));
     this.objects[id].tableHeadTitle.rows[0].cells[0].setAttribute("align","center");
     this.objects[id].tablaBotones.rows[0].cells[0].appendChild(this.objects[id].allCheckSelected);
     this.objects[id].tablaBotones.rows[1].cells[0].appendChild(this.objects[id].noCheckSelected);
     this.objects[id].divTablaBotones.appendChild(this.objects[id].tablaBotones);
     this.objects[id].tableData.rows[1].cells[2].appendChild(this.objects[id].divTablaBotones);
	   this.objects[id].tableData.rows[0].style.height = '20px'; 
	   var x1 = parseInt(width/2-5);
	   var x2 = parseInt(width/2-5); 
	   var x = x1+x2+90; 
     this.objects[id].tableData1.style.width = x1+"px";
     this.objects[id].tableData2.style.width = x2+"px"; 
     this.objects[id].tableHeadTitle.style.width = x + "px"; 
     //this.objects[id].style.width = width+"px"; 
     this.objects[id].style.height = height+"px";
     this.objects[id].tableData.style.height = height+"px";
     this.setBgColorBarTitle(id,"#f7f7f7"); 
     this.setBgColor(id,"#ffffff"); 
     this.setFontTitle(id,"verdana",12,"black");
	 this.addPropertyMethod(id);
	 if(attrib)
       this.setObjAttrib(id,attrib,attrib.getActualEnv());
	 return this.objects[id];
   },
   delLnLeft : function(id,ln)
   {
     if((ln>=0) && (ln<=this.objects[id].tableData1.rows.length))
     { 
       for(i=ln; i<this.objects[id].tableData1.rows.length-1;i++)
       {
         var aux=this.objects[id].checksLeft[i+1].checked;
         this.objects[id].tableData1.rows[i].cells[1].innerHTML = this.objects[id].tableData1.rows[i+1].cells[1].innerHTML;
         this.objects[id].checksLeft[i].checked = aux;
       }
       var l = this.objects[id].tableData1.rows.length;
       this.objects[id].tableData1.rows[l-1].cells[0].innerHTML="";
       this.objects[id].tableData1.rows[l-1].cells[1].innerHTML="";
       this.objects[id].tableData1.deleteRow(l-1);
	   
     }  
   },
   delSelectedLnLeft : function(id)
   {
   	 if(this.objects[id].checksLeft.length > 0)
	 {
		if(this.objects[id].tableData1.rows.length > 0)
		{	
          for(j=0; j<this.objects[id].tableData1.rows.length;j++)
          { 	
            if(this.objects[id].checksLeft[j].checked)
            {
				this.delLnLeft(id,j);
		        j=-1;
            }
          }
		  j = this.objects[id].checksLeft.length;
		  if(j>0)
		  {
            if(this.objects[id].checksLeft[j-1].checked)
            {
              this.delLnLeft(id,j);
            }
		  }
		}
	 }
   },
   delLnRight : function(id,ln)
   {
     if((ln>=0) && (ln<=this.objects[id].tableData2.rows.length))
     { 
       for(i=ln; i<this.objects[id].tableData2.rows.length-1;i++)
       {
         var aux=this.objects[id].checksRight[i+1].checked;
         this.objects[id].tableData2.rows[i].cells[1].innerHTML = this.objects[id].tableData2.rows[i+1].cells[1].innerHTML;
         this.objects[id].checksRight[i].checked = aux;
       }
       var l = this.objects[id].tableData2.rows.length;
       this.objects[id].tableData2.rows[l-1].cells[0].innerHTML="";
       this.objects[id].tableData2.rows[l-1].cells[1].innerHTML="";
       this.objects[id].tableData2.deleteRow(l-1);
     }  
   },
   delSelectedLnRight : function(id)
   {
   	 if(this.objects[id].checksRight.length > 0)
   	 {  
	    if(this.objects[id].tableData2.rows.length > 0)
		{
          for(j=0; j<this.objects[id].tableData2.rows.length;j++)
          {
            if(this.objects[id].checksRight[j].checked)
            {
              this.delLnRight(id,j);
              j=-1;
            }
          }
		  j = this.objects[id].checksRight.length;
		  if(j>0)
		  {
            if(this.objects[id].checksRight[j-1].checked)
            {
              this.delLnRight(id,j);
            }
		  }	
		}
	 }   
   },
   getSelectedLeft : function(id)
   {
     var arr = new Array;
     for(j=0; j<this.objects[id].tableData1.rows.length;j++)
     {
       if(this.objects[id].checksLeft[j].checked)
       {
         arr[arr.length] = this.objects[id].tableData1.rows[j].cells[1].innerHTML;
       }
     }
     return arr;
   },
   getSelectedLeftValues : function(id)
   {
     var arr = new Array;
     for(j=0; j<this.objects[id].tableData1.rows.length;j++)
     {
       if(this.objects[id].checksLeft[j].checked)
       {
       	 var op = this.objects[id].tableData1.rows[j].cells[1].innerHTML;
         arr[arr.length] = this.objects[id].dataStruct.getVal(op);
       }
     }
     return arr;
   },
   getSelectedRightValues : function(id)
   {
     var arr = new Array;
     for(j=0; j<this.objects[id].tableData2.rows.length;j++)
     {
       if(this.objects[id].checksRight[j].checked)
       {
       	 var op = this.objects[id].tableData2.rows[j].cells[1].innerHTML;
         arr[arr.length] = this.objects[id].dataStruct.getVal(op);
       }
     }
     return arr;
   },
   getSelectedRight : function(id)
   {
     var arr = new Array;
     for(j=0; j<this.objects[id].tableData2.rows.length;j++)
     {
       if(this.objects[id].checksRight[j].checked)
       {
         arr[arr.length] = this.objects[id].tableData2.rows[j].cells[1].innerHTML;
       }
     }
     return arr;
   },
   getAllLeft : function(id)
   {
     var arr = new Array;
     for(j=0; j<this.objects[id].tableData1.rows.length;j++)
     {
       arr[arr.length] = this.objects[id].tableData1.rows[j].cells[1].innerHTML;
     }
     return arr;
   },
   getAllRight : function(id)
   {
     var arr = new Array;
     for(j=0; j<this.objects[id].tableData2.rows.length;j++)
     {
       arr[arr.length] = this.objects[id].tableData2.rows[j].cells[1].innerHTML;
     }
     return arr;
   },
   getRightValues : function(id)
   {
     var arr = new Array;
     for(j=0; j<this.objects[id].tableData2.rows.length;j++)
     {
       var op = this.objects[id].tableData2.rows[j].cells[1].innerHTML;
       arr[arr.length] = this.objects[id].dataStruct.getVal(op);
     }
     return arr;
   },
   getText : function(id)
   {
   	 var str = '';
   	 var arrData = new Object();
   	 switch (this.objects[id].returnTypeGetText)
   	 {
   	  	case this.RET_ALL_RIGHT : {arrData = this.getRightValues(id); break;} 
   	  	case this.RET_ALL_LEFT : {arrData = this.getLeftValues(id); break;}
   	  	case this.RET_ALL_SEL_RIGHT : {arrData = this.getSelectedRightValues(id); break;}
   	  	case this.RET_ALL_SEL_LEFT : {arrData = this.getSelectedLeftValues(id); break;}
   	 }
      
     for(j=0; j<arrData.length;j++)
     {
       if (j==0)
       {
       	 str = arrData[j];
       } 	 
       else
       {
       	 str += this.objects[id].separator+arrData[j];
       }
     }
     return str;
   },
   getLeftValues : function(id)
   {
     var arr = new Array;
     	
     for(j=0; j<this.objects[id].tableData1.rows.length;j++)
     {
       var op = this.objects[id].tableData1.rows[j].cells[1].innerHTML;
       arr[arr.length] = this.objects[id].dataStruct.getVal(op);
     }
     return arr;
   },
   getObject : function(id)
   {
   	  return this.objects[id];
   },
   hide : function(id)
   {
     this.objects[id].style.display = 'none';
   },
   setGetTextReturn : function(id, returnType)
   {
   	  switch (returnType)
   	  {
   	  	case this.RET_ALL_RIGHT : {this.objects[id].returnTypeGetText = this.ET_ALL_RIGHT; break;}
   	  	case this.RET_ALL_LEFT : {this.objects[id].returnTypeGetText = this.RET_ALL_LEFT; break;}
   	  	case this.RET_ALL_SEL_RIGHT : {this.objects[id].returnTypeGetText = this.RET_ALL_SEL_RIGHT; break;}
   	  	case this.RET_ALL_SEL_LEFT : {this.objects[id].returnTypeGetText = this.RET_ALL_SEL_LEFT; break;}
   	  }
   },
   show : function(id)
   {
     this.objects[id].style.display = 'block';
   },
   setBgColorBarTitle : function(id,color)
   {
     this.objects[id].tableHeadTitle.style.backgroundColor = color;
     this.objects[id].tableContainer.rows[0].cells[0].style.backgroundColor = color;
   },
   setBgColor : function(id,color)
   {
     this.objects[id].tableContainer.rows[1].cells[0].style.backgroundColor = color;
   },
   setColorButtons : function(id,color)
   {
     this.objects[id].noCheckSelected.style.backgroundColor = color;
     this.objects[id].allCheckSelected.style.backgroundColor = color;
   },
   setColorTextButtons : function(id,color)
   {
     this.objects[id].noCheckSelected.style.color  = color;
     this.objects[id].allCheckSelected.style.color = color;
   },
   setFontTitle : function(id,fontFamily,fontSize,fontColor)
   {
     this.objects[id].tableContainer.rows[0].cells[0].style.fontFamily = fontFamily;
     this.objects[id].tableContainer.rows[0].cells[0].style.fontSize = fontSize+"px";
     this.objects[id].tableContainer.rows[0].cells[0].style.color = fontColor;
   },
   setFontBody : function(id,fontFamily,fontSize,fontColor)
   {
     this.objects[id].tableData.style.fontFamily = fontFamily;
     this.objects[id].tableData.style.fontSize = fontSize+"px";
     this.objects[id].tableData.style.color = fontColor;
   },
   setFontSubTitle : function(id,fontFamily,fontSize,fontColor)
   {
     this.objects[id].tableData.rows[0].cells[1].style.fontFamily = fontFamily;
     this.objects[id].tableData.rows[0].cells[1].style.fontSize = fontSize+"px";
     this.objects[id].tableData.rows[0].cells[1].style.color = fontColor;
     this.objects[id].tableData.rows[0].cells[4].style.fontFamily = fontFamily;
     this.objects[id].tableData.rows[0].cells[4].style.fontSize = fontSize+"px";
     this.objects[id].tableData.rows[0].cells[4].style.color = fontColor;
   },
   setBorderColor : function(id,color)
   {
     this.objects[id].tableContainer.style.borderColor = color;
     this.objects[id].tableHeadTitle.style.borderColor = color;
     this.objects[id].tableData.style.borderColor = color;
     this.objects[id].tableData.style.borderColor = color;
     this.objects[id].tableData.rows[1].cells[0].style.borderColor = color;
     this.objects[id].tableData.rows[1].cells[2].style.borderColor = color;
   },
   setBorderStyleBarraTitle : function(id,bs)
   {
     this.objects[id].tableHeadTitle.style.borderStyle = bs;
   },
   setBorderSize : function(id,size)
   {
     this.objects[id].tableHeadTitle.style.borderWidth = size+"px";
     this.objects[id].tableContainer.style.borderWidth = size+"px";
     this.objects[id].tableData.style.borderWidth = size+"px";
   },
   setObjAttrib : function(id,objAttr,env)
   {
   	 this.objects[id].loadBGImg = objAttr.getLoadBGImg();
     this.setBgColor(id,objAttr.Color.bgSelectedList[env]);
     this.setBgColorBarTitle(id,objAttr.Color.bgBarraTitle[env]);
     this.setColorButtons(id,objAttr.Color.bgBarraTitleButtons[env]);
	   this.setColorTextButtons(id,objAttr.Color.textCaption[env]);
     this.setFontTitle(id,objAttr.Font.head[env],objAttr.Size.textCaption[env],objAttr.Color.textHeadTitle[env]);
     this.setFontSubTitle(id,objAttr.Font.head[env],objAttr.Size.textCaption[env],objAttr.Color.textCaption[env]);
     this.setBorderColor(id,objAttr.Color.borderSelectList[env]); 
     this.setBorderStyleBarraTitle(id,objAttr.Border.styleHead[env]);
     this.setBorderSize(id,objAttr.Size.border[env]);
     this.setFontBody(id,objAttr.Font.editor[env],objAttr.Size.editFont[env],objAttr.Color.textEditor[env]);
 	 if(this.objects[id].loadBGImg)
	 {	
	   this.setBgBarImg(id, objAttr.BgImg.barTitle[env]); 
	   this.setBgSubTitleBarImg(id, objAttr.BgImg.bgEdit[env]); 
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
  setBgBarImg : function(id, barImg) 
  {
  	this.objects[id].tableHeadTitle.rows[0].cells[0].style.backgroundImage="url("+this.bgImgPath+barImg+")";
  },
  setSeparator : function(id, separator) 
  {
  	this.objects[id].separator = separator;
  },
  setBgSubTitleBarImg : function(id, barImg) 
  {
  	this.objects[id].tableData.rows[0].cells[0].style.backgroundImage="url("+this.bgImgPath+barImg+")";
  	this.objects[id].tableData.rows[0].cells[1].style.backgroundImage="url("+this.bgImgPath+barImg+")";
  	this.objects[id].tableData.rows[0].cells[2].style.backgroundImage="url("+this.bgImgPath+barImg+")";
  	this.objects[id].tableData.rows[0].cells[3].style.backgroundImage="url("+this.bgImgPath+barImg+")";
  	this.objects[id].tableData.rows[0].cells[4].style.backgroundImage="url("+this.bgImgPath+barImg+")";
  },
  setBgBodyImg : function(id, bgImg)
  {
    this.objects[id].tableData.rows[1].cells[0].style.backgroundImage="url("+this.bgImgPath+bgImg+")";
    this.objects[id].tableData.rows[1].cells[1].style.backgroundImage="url("+this.bgImgPath+bgImg+")";
	this.objects[id].tableData.rows[1].cells[2].style.backgroundImage="url("+this.bgImgPath+bgImg+")";
    this.objects[id].tableData.rows[1].cells[3].style.backgroundImage="url("+this.bgImgPath+bgImg+")";
	this.objects[id].tableData.rows[1].cells[4].style.backgroundImage="url("+this.bgImgPath+bgImg+")";
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
  },
  getFieldFind : function(id)
  {
	  return this.objects[id].fieldFind;
  },
  setFieldFind : function(id, fieldFind)
  {
	  this.objects[id].fieldFind = fieldFind;
  }
};


