function HashTable(ObjExtend)
{
  if(ObjExtend)
    HashTable_.prototype = ObjExtend;
  return new HashTable_();	
}
function HashTable_()
{	
  var objects = new Array;
  var keys = new Array();    
  this.add = function(key, object)
  {
  	objects[key] = object; 
  	keys[keys.length] = key;
  }
  this.get = function(key)
  {
    return objects[key];
  }
  this.size = function()
  {
  	return keys.length;
  }
  this.remove = function(key)
  {
  	objects[key] = null;
  	keys.splice(keys.indexOf(key),1);
  }
  this.removeAll = function()
  {
  	objects = null;
  	keys.splice(0);
  }
  this.setObject = function(key, newObject)
  {
  	objects[key] = newObject; 
  }
  this.setKey = function(oldKey, newKey)
  {
  	objects[newKey] = objects[oldKey];
  	objects[oldKey] = null;
  	keys[keys.indexOf(oldKey)] = newKey;
  }
  this.setArrayData = function(arrKey, arrObj)
  {
  	for(var i=0; i<arrKey.length; i++)
  	{
  	  this.add(arrKey[i], arrObj[i]);	
  	}
  }
  this.getArrayObjects = function()
  {
  	var arr = new Array();
  	for(var i=0; i<keys.length; i++)
  	{
  	  arr[i] = objects[keys[i]];	
  	}
  	return arr;
  }
  this.getArrayKeys = function()
  {
  	return keys;
  }
}
