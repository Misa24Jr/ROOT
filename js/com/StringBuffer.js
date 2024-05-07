StringBuffer = function()
{
    var string = new Array();
    
    this.append = function(str)
    {
      string[string.length] = str;  
    }
    
    this.appendLn = function(str)
    {
      string[string.length] = str + '\n';  
    }
    
    this.getSize = function()
    {
      return string.length;  
    }
    
    this.toString = function()
    {
       var str = ''; 
       for(var i=0; i<string.length; i++) 
         str+=string[i];
       return str; 
    }
    
    this.clean = function()
    {
      string.length=0;
    }
    
    this.charAt = function(index)
    {
       var s = this.toString();
       return s.charAt(index); 
    }
    
    this.substring = function(start, end)
    {
      var s = this.toString();
      return s.substring(start, end); 
    }
}