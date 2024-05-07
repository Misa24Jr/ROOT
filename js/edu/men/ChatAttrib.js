var ChatAttrib = function()
{
  var colorBarDlg 			= 	['rgba(97,57,21,0.9)','rgba(150,177,210,0.9)','rgba(66,14,110,0.9)','rgba(26,26,26,0.9)','rgba(83,44,8,0.9)','rgba(34,102,19,0.9)','rgba(0,0,0,0.6)','rgba(0,0,0,0.6)','rgba(0,0,0,0.6)','rgba(0,0,0,0.6)'];
  var colorDlg 				= 	['rgba(224,206,182,0.9)','rgba(219,218,226,0.9)','rgba(255,255,255,0.5)','rgba(230,230,230,0.9)','rgba(230,230,230,0.7)','rgba(244,236,203,0.9)','rgba(255,255,255,0.6)','rgba(255,255,255,0.6)','rgba(255,255,255,0.6)','rgba(255,255,255,0.6)'];
  var colorTextTitle 		= 	['rgba(255,255,255,0.9)','rgba(0,0,0,0.9)','rgba(255,255,255,0.9)','rgba(255,255,255,0.9)','rgba(255,255,255,0.9)','rgba(255,255,255,0.9)','rgba(255,255,255,0.6)','rgba(255,255,255,0.6)','rgba(255,255,255,0.6)','rgba(255,255,255,0.6)'];
  var sizeFontTitle 		= 	[9,9,9,9,9,9,9,9,9,9];
  var fontFamilyTitle 		= 	['Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS'];
  ///////boton/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var colorButton 			= 	['rgba(255,93,0,0.9)','rgba(255,93,0,0.9)','rgba(255,93,0,0.9)','rgba(255,93,0,0.9)','rgba(255,30,0,0.9)','rgba(255,30,0,0.9)','rgba(255,30,0,0.6)','rgba(255,30,0,0.6)','rgba(255,30,0,0.6)','rgba(255,30,0,0.6)'];
  var colorBorderButtonSend =   ['rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)']; 
  var colorCaptionButton 	= 	['rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)'];
  var colorButtonDown 		= 	['rgba(0,0,0,0.7)','rgba(0,0,0,0.7)','rgba(0,0,0,0.7)','rgba(0,0,0,0.7)','rgba(0,0,0,0.7)','rgba(0,0,0,0.7)','rgba(0,0,0,0.7)','rgba(0,255,0,0.7)','rgba(0,255,0,0.7)','rgba(0,255,0,0.7)'];
  var colorButtonOver 		= 	['rgba(12,249,3,0.7)','rgba(12,249,3,0.7)','rgba(12,249,3,0.7)','rgba(12,249,3,0.7)','rgba(12,249,3,0.7)','rgba(12,249,3,0.7)','rgba(12,249,3,0.7)','rgba(12,249,3,0.7)'];
  var sizeFontButton 		= 	[10,10,10,10,10,10,10,10,10,10];
  var familyFontButton 		= 	['Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS'];
  var colorCaptions 		= 	['rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)'];
  var sizeCaption 			= 	[10,10,10,10,10,10,10,10,10,10];
  var sizeStsMsg 			= 	[9,9,9,9,9,9,9,9,9,9];
  var fontFamilyCaption 	= 	['Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS'];
  var colorMsgStsError 		= 	['rgb(255,255,0)','rgb(255,255,0)','rgb(255,255,0)','rgb(255,255,0)','rgb(255,255,0)','rgb(255,255,0)','rgb(255,255,0)','rgb(255,255,0)','rgb(255,255,0)','rgb(255,255,0)'];
  ///////tipo letra del dialogo/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var colorTextMsg          =   ['rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)'];
  var familyTextMsg         =   ['Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS','Comic Sans MS'];
  var sizeTextMsg           =   [12,12,12,12,12,12,12,12,12,12]; 
  var bgColorEdit           =   ['rgba(255,255,255,0.8)','rgba(255,255,255,0.8)','rgba(255,255,255,0.8)','rgba(255,255,255,0.7)','rgba(255,255,255,0.8)','rgba(255,255,255,1)','rgba(255,255,255,1)','rgba(255,255,255,1)','rgba(255,255,255,1)','rgba(255,255,255,1)'];
  var enviroment = 0;
  
  this.setEnviroment = function(env)  		{enviroment = env;};
  this.getColorBarDlg = function()  		{return colorBarDlg[enviroment];};
  this.getColorDlg = function() 			{return colorDlg[enviroment];};
  this.getColorTextTitle = function() 		{return colorTextTitle[enviroment];};
  this.getSizeFontTitle= function() 		{return sizeFontTitle[enviroment];};
  this.getFontFamilyTitle = function()		{return fontFamilyTitle[enviroment];};
  this.getColorButton = function()			{return colorButton[enviroment];};
  this.getColorCaptionButton = function()	{return colorCaptionButton[enviroment];};
  this.getColorButtonDown = function()		{return colorButtonDown[enviroment];};
  this.getColorButtonOver = function()		{return colorButtonOver[enviroment];};
  this.getSizeFontButton = function()		{return sizeFontButton[enviroment];};
  this.getFamilyFontButton = function()		{return familyFontButton[enviroment];};
  this.getColorCaptions = function()		{return colorCaptions[enviroment];};
  this.getSizeCaption = function()			{return sizeCaption[enviroment];};
  this.getSizeStsMsg = function()			{return sizeStsMsg[enviroment];};
  this.getFontFamilyCaption = function()	{return fontFamilyCaption[enviroment];};
  this.getColorMsgStsError = function()		{return colorMsgStsError[enviroment];};
  this.getcolorBorderButtonSend = function(){return colorBorderButtonSend[enviroment];};
  this.getcolorTextMsg = function()         {return colorTextMsg[enviroment];};
  this.getFamilyTextMsg = function()        {return familyTextMsg[enviroment];};
  this.getSizeTextMsg = function()          {return sizeTextMsg[enviroment];};
  this.getBgColorEdit = function()          {return bgColorEdit[enviroment];};  
};