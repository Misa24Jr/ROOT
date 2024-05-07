var Thread =
{
  objects : new Array,
  ids : new Array,
  create : function(id, fileName, callBackFunction)
  {
  	if(typeof(Worker)!=="undefined")
    {
      this.objects[id] = new Object();	
      if(typeof(this.objects[id].worker)=="undefined")
      {
      	this.objects[id].fileName = fileName;
      	this.objects[id].eventData = '';
      	if(callBackFunction == "undefined")
      	  this.objects[id].callBackFunct = new Function('')
      	else
      	  this.objects[id].callBackFunct = new Function(callBackFunction);
      	this.ids[this.ids.length]=id;
      	this.objects[id].worker = new Worker(this.objects[id].fileName);
      	this.objects[id].worker.onmessage = function (event) 
        {
      	  Thread.objects[id].eventData = event.data;
      	  Thread.objects[id].callBackFunct();
        }
      }
    }
    else
    {
      Thread.objects[id].eventData = "El browser no soporta Web Workers...";
    }
    return this.objects[id];
  },
  setCallBack : function(id, func)
  {
  	this.objects[id].callBackFunct = new Function(func);
  },
  stop : function(id)
  {
  	this.objects[id].worker.terminate();
  }
}

