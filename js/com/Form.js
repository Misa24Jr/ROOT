function Form() {
	var form = document.createElement("form");
	var action = "despachador";
	var enctype = "multipart/Form-data";
	var method = "post";
	var name = "Form";
	var formWin = {};
	
	this.winSend = function(){
		formWin =  window.open('','_blank','width=520, height=230, resizable=no, scrollbars=no, status=no');
		formWin.document.write("Enviando...");
		formWin.document.body.appendChild(form);
		form.submit();		
	};
	
	this.closeWin = function(){
		formWin.document.close();
		formWin.close();
	};
	
	this.getSizeFile = function(inputFile){
		return inputFile.files[0].size;
	};
	
	
	this.addToBody = function() {
		document.body.appendChild(form);
	};
	
	function refreshCnf() {
		form.action = action;
		form.enctype = enctype;
		form.method = method;
		form.name = name;	
	};
	
	this.submit = function() {
		form.submit();
	};
	
	this.setName = function(nm) {
		name = nm;
		refreshCnf();
	};
	
	this.setAction = function(act) {
		action = act;
		refreshCnf();
	};
	
	this.setEncType = function(et) {
		enctype = et;
		refreshCnf();
	};
	
	this.setMethod = function(met) {
		method = met;
		refreshCnf();
	};
	
	this.addObject = function(obj) {
		form.appendChild(obj);
	};
	refreshCnf();
};
