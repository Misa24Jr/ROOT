function Barcode(){
	var barcode = this;
  	var img = document.createElement("img");
  	var isInBody = false;
  	img.id = "barcodeImg";
  	
  	function mergeJson(defaults,userDefined){
		var returnObj = {};
		for (var attrname in defaults) { returnObj[attrname] = defaults[attrname]; }
	  		for (var attrname in userDefined) { returnObj[attrname] = userDefined[attrname];}
		return returnObj;
  	}
  	
  	function addToBody(){
  		if(!isInBody){
  			document.body.appendChild(img);
  			isInBody=true;	
  		}
  		
  	}
  
  	this.setBarCode = function(options){
  			addToBody();
  			barcode.setBarCode.defaults = {
  				//CODE128 (B ó C)- EAN13 - UPC-A - CODE39 - ITF14
  				format:"EAN13",
			  	displayValue:true,
			  	fontSize:18,
			  	lineColor: "rgba(0,0,0,1)",
			  	width: 2,
  				height: 50,
  				textPosition : 'bottom',
  				background : 'rgba(255,255,255,1)',
  				textAlign : 'center',
  				textMargin : 2,
			  	x : 0,
			  	y : 0,
			  	code : '123456789012'
  			};
  			var v = (options)? mergeJson(barcode.setBarCode.defaults,options) : barcode.setBarCode.defaults;
  			img.style.position ='absolute';
  			img.style.left = v.x+'px';
  			img.style.top = v.y+'px';
			JsBarcode("#barcodeImg", v.code, v);
  	};
	
	this.getImageCode = function(){
		return img;
	};
  	
  	this.setPosition= function(x,y){
  		img.style.position ='absolute';
  		img.style.left = x+'px';
  		img.style.top = y+'px';
  	};
  
  	this.show = function(){
    	img.style.display = 'bock';
  	};
  	
  	this.hide = function(){
    	img.style.display = 'none';
  	};
}