var jsObjListFuncInit = new Array();
function include(nomarch)
{
  Include.load(nomarch);
}

function setCallBack(func)
{
  Include.setCallBack(func);
}

function exeShow(path,nameLibrary)
{
  jsObjListFuncInit[jsObjListFuncInit.length] = new Function(nameLibrary+'.init()');	
  Include.exeShow(path,nameLibrary);
}

function exeInit()
{
  for(var i=0; i<jsObjList.length; i++)
  {
    jsObjListFuncInit[i]();
  }	
}

function exe(path, nameLibrary, nameMethod)
{
  Include.exe(path, nameLibrary, nameMethod);
}
var Include = 
{	
   script : new Array(),	
   names : new Array(),
   callBack : new Function(''),
   totalInclude : 0,
   load : function(file)
   {
   	 var ele = document.getElementById(file);
	 if (ele == undefined) 
	 {
	   this.totalInclude++;  
	   Include.names[Include.names.length]=file;	 
	   var p = Include.script.length;	
	   Include.script[p-1] = document.createElement("script");
	   Include.script[p-1].setAttribute("src", file+'.js');
	   Include.script[p-1].setAttribute("type", "text/javascript");
	   Include.script[p-1].setAttribute("id", file); 
	   Include.script[p-1].setAttribute("language", 'JavaScript');
	   document.getElementsByTagName("head")[0].appendChild(Include.script[p-1]);	 
	   if(!document.all)
	   {	 
	     Include.script[p-1].onload = function()
	     {
	   	   Include.totalInclude--;
	   	   if(Include.totalInclude == 0)
	  	     setTimeout('Include.callBack()',200);
	     }
	   }
	   else
	   {
	     if(Include.script[p-1].onreadystatechange== undefined)
	     {	 
		   Include.script[p-1].onreadystatechange = function() 
	       {
			 Include.totalInclude--;
	         if(Include.totalInclude == 0)
	         {
	         	setTimeout('Include.callBack()',150);
	         }
	  	       	
	       }
	     }
	   }
	   return true;
     }
	 else
	   return false;	 
   },
   exeShow : function(path, nameLibrary)
   {	 
	  Include.setCallBack(nameLibrary+'.show()');	
	  if(!Include.load(path+nameLibrary))
	  {
	  	var f = new Function(nameLibrary+'.show()');
        f();
	  }
   },
	
   setCallBack : function(func)
   {
	  this.callBack = new Function(func);	
   }
}
