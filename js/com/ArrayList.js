function ArrayList (ObjExtend)
{
  if(ObjExtend)
    ArrayList_.prototype = ObjExtend;
  return new ArrayList_();   
}

function ArrayList_()
{
  var list = new Array();
  var itemIndex = -1;
 
  this.add = function(object)
  {
  	itemIndex = list.length
  	list[itemIndex] = object;
  }
  
  this.get = function(index)
  {
  	return list[index];
  }	
  
  this.remove = function(index)
  {
  	list.splice(list.indexOf(index),1);
  }
  
  this.size = function()
  {
  	return list.length;
  }
  
  this.first = function()
  {
  	itemIndex = 0;
  	return list[itemIndex];
  }
  
  this.next = function()
  {
  	itemIndex++;
  	if(itemIndex >= this.size)
  	  return null
  	else
  	  return list[itemIndex];
  }
  
  this.prior = function()
  {
  	itemIndex--;
  	if(itemIndex < 0)
  	  return null
  	else
  	  return list[itemIndex];
  }
  
  this.last = function()
  {
  	itemIndex = this.size - 1;
  	return list[itemIndex];
  }
  
  this.hasNext = function()
  {
  	if(itemIndex + 1 >= this.size)
  	  return false
  	else
  	  return true
  }
  
  this.hasPrior = function()
  {
  	if(itemIndex - 1 < 0)
  	  return false
  	else
  	  return true
  }
  
  this.getItemIndex = function()
  {
  	return itemIndex;
  }
}
