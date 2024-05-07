var msgBox =
{
	objWidth: 300,
	objHeight: 250,
	fontSize: 14,
	fontFamily: "segoe ui",
	fontColor: "black",
	bgColor: "gray",
	titleBgColor: "black",
	titleFontSize: "larger",
	titleFontFamily: "segoe ui",
	titleFontColor: "white",
	imageUrl: "images/Imagenes_Varias/wi0063-48.gif",
	modal: new Object(),
	obj: new Object(),
	table: new Object,
	tableBody: new Object(),
	buttonOk: new Object(),
	buttonCancel: new Object(),
	title: new Object(),
	image: new Object(),
	response: false,
	nameComponent : 'msgBox',
	create: function()
	{
		table = document.createElement("table");
		table.setAttribute ("cellPadding", "0");
		table.setAttribute ("cellSpacing", "0");
		table.setAttribute ("border", "0");
		table.insertRow (0);
		table.insertRow (1);
		table.insertRow (2);
		table.rows[0].insertCell(0);
		table.rows[1].insertCell(0);
		table.rows[2].insertCell(0);
		table.rows[0].cells[0].style.padding = "5px 5px 5px 5px";
		table.rows[0].cells[0].align = "center";
		table.rows[1].cells[0].style.padding = "5px 5px 5px 5px";
		table.rows[1].cells[0].align = "center";
		table.rows[2].cells[0].style.padding = "5px 5px 5px 5px";
		table.rows[2].cells[0].align = "center";
		title = document.createElement ("div")
		table.rows[0].cells[0].appendChild (title);
		tableBody = document.createElement("table");
		tableBody.setAttribute ("cellPadding", "0");
		tableBody.setAttribute ("cellSpacing", "0");
		tableBody.setAttribute ("border", "0");
		tableBody.insertRow (0);
		tableBody.rows[0].insertCell(0);
		tableBody.rows[0].insertCell(0);
		table.rows[1].cells[0].appendChild (tableBody);
		image = document.createElement ("img")
		tableBody.rows[0].cells[0].appendChild (image);
		buttonOk = document.createElement ("input");
		buttonOk.type = "button";
		buttonOk.value = "Aceptar";
		buttonOk.onclick = new Function ('msgBox.getResponseOk()');
		table.rows[2].cells[0].appendChild (buttonOk);
		buttonCancel = document.createElement ("input");
		buttonCancel.type = "button";
		buttonCancel.value = "Cancelar";
		buttonCancel.onclick = new Function ('msgBox.getResponseCancel()');
		table.rows[2].cells[0].appendChild (buttonCancel);
		obj = document.createElement("div");
		obj.style.position = "absolute";
		obj.style.zIndex = 100;
		obj.appendChild (table);
		modal = document.createElement("div");
		modal.style.position = "absolute";
		modal.style.zIndex = 50;
		modal.style.left = 0;
		modal.style.top = 0;
		modal.style.width = window.innerWidth + "px";
		modal.style.height = window.innerHeight + "px";
		modal.style.background = "url(images/difuso.png)";
	},
	addToBody: function ()
	{
		document.body.appendChild (modal);
		document.body.appendChild (obj);
	},
	setBgColor: function (bgColor)
	{
		obj.style.backgroundColor = bgColor;
	},
	setFont: function (fontSize, fontFamily, fontColor)
	{
		table.style.fontSize = fontSize + "px";
		table.style.fontFamily = fontFamily;
		table.style.color = fontColor;
		buttonOk.style.fontSize = fontSize + "px";
		buttonOk.style.fontFamily = fontFamily;
		buttonOk.style.color = fontColor;
		buttonCancel.style.fontSize = fontSize + "px";
		buttonCancel.style.fontFamily = fontFamily;
		buttonCancel.style.color = fontColor;
	},
	setTitleBgColor: function (bgColor)
	{
		title.style.backgroundColor = bgColor;
	},
	setTitleFont: function  (fontSize, fontFamily, fontColor)
	{
		title.style.fontSize = fontSize;
		title.style.color = fontColor;
	},
	setTitle: function (titleText)
	{
		title.innerHTML = titleText;
	},
	setMessage: function (msg)
	{
		tableBody.rows[0].cells[1].innerHTML = "<p>" + msg + "</p>";
	},
	getResponseOk: function ()
	{
		response = true;
		obj.style.display = "none";
		modal.style.display = "none";
	},
	getResponseCancel: function ()
	{
		response = false;
		obj.style.display = "none";
		modal.style.display = "none";
	},
	setPosition: function (x, y)
	{
		obj.style.left = x + "px";
		obj.style.top = y + "px";
	},
	setPositionCenter: function ()
	{
		var x = ((window.innerWidth / 2) - (this.objWidth / 2));
		var y = ((window.innerHeight / 2) - (this.objHeight / 2));
		this.setPosition (x, y);
	},
	setSize: function (width, height)
	{
		obj.style.width = width + "px";
		obj.style.height = height + "px";
	},
	setImage: function (imagePath)
	{
		image.src = imagePath;
	},
	show: function (titleText, msgText)
	{
		this.create ();
		this.setFont (this.fontSize, this.fontFamily, this.fontColor);
		this.setBgColor (this.bgColor);
		this.setMessage (msgText);
		this.setTitleBgColor (this.titleBgColor);
		this.setTitleFont (this.titleFontSize, this.titleFontFamily, this.titleFontColor);
		this.setTitle (titleText);
		this.setSize (this.objWidth, this.objHeight);
		this.setPositionCenter ();
		this.setImage (this.imageUrl);
		this.addToBody ();
	}
}
