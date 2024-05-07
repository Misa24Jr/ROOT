window.levelOpacityDisable = 0.9; 
var attrib = {
	OTONO: 0,
	EDUCA: 1,
	PRIMAVERA: 2,
	INVIERNO: 3,
	VERANO: 4,
	NAVIDAD: 5,
	ZULIANIDAD: 6,
	ABSTRACTO: 7,
	INSTITUCIONAL: 8,
	AERO: 9,
 loadBGImg: true,
 ACTUAL_ENV : 1,    
 ACTUAL_ICON_DLG : '',
	
 reloadAttrib : function(obj)
	{
		 if(obj.ambiente===undefined) obj.ambiente = -1;
	  if(obj.ambiente != this.ACTUAL_ENV)
  	  {
						 console.log(obj.id, this.ACTUAL_ENV)
  	    obj.ambiente= this.ACTUAL_ENV;
  	    if (obj.nameComponent=='edits')
  	      obj.div.setObjAttrib(attrib,this.ACTUAL_ENV);
  	    else
  	      if(obj.nameComponent=='calendars')
  	        obj.divTablaEdit.setObjAttrib(attrib,this.ACTUAL_ENV)
  	      else{
  	        obj.setObjAttrib(attrib,this.ACTUAL_ENV);
         }
  	    if (obj.nameComponent == 'dialogs') 
  	    {	      	
  	      obj.divIcon.img.src = 'images/logo/'+this.ACTUAL_ICON_DLG;
  	    }	 
  	  }	
	},
	
	reloadAllAttrib : function(obj, env)
	{
	  this.setActualEnv(env);
	  for(var i = 0; i<obj.ids.length; i++)
	  {
	    this.reloadAttrib(obj.objects[obj.ids[i]]);	
	  }
	},
	
 setActualEnv : function(env)
 {
    this.ACTUAL_ENV = env;
 },
  
 getActualEnv : function()
 {
     return this.ACTUAL_ENV;
 },  
	
	setLoadBGImg: function(activeLoad){
		this.loadBGImg = activeLoad;
	},
	
 getLoadBGImg: function()
	{
		return this.loadBGImg;
	},

 BgImg :
 {
    barTitle : ['selva01.png','lluvia03.jpg','fucsia01.png','metal01.png','verano01.jpg','navida01.png','religion01.jpg','metal100.png','bg207.jpg','bg207.jpg'], 
    barMenuDlg : ['selva02.jpg','lluvia03.jpg','fucsia01.png','metal10.png','verano02.jpg','navida03.jpg','religion02.jpg','silver04.jpg','bg207.jpg','bg207.jpg'],
    bgPanel : ['selva03.jpg','lluvia03.jpg','fucsia02.jpg','metal03.png','verano10.jpg','navida10.png','religion03.jpg','silver06.jpg','bg211.jpg','bg211.jpg'],
    bgPanelMenuDlg : ['selva10.png','lluvia03.jpg','fucsia08.png','metal10.png','verano01.jpg','navida10.png','religion04.jpg','silver09.jpg','bg211.jpg','bg211.jpg'],////
    transparecyBgImg : ['shadow-c.png','shadow-c.png','shadow-c.png','shadow-c.png','shadow-c.png','shadow-c.png','shadow-c.png','shadow-c.png','shadow-c.png','shadow-c.png'],
    bgSelected : ['selva01.png','lluvia04.jpg','fucsia01.png','metal01.png','verano11.jpg','navida03.jpg','religion01.jpg','metal100.png','bg212.jpg','bg212.jpg'],//barra grid 
    bgEdit : ['selva05.jpg','lluvia05.jpg','fucsia05.png','metal05.png','verano05.jpg','navida05.jpg','religion05.jpg','silver07.jpg','bg212.jpg','bg212.jpg'],
	   bgPanelCombo : ['selva05.jpg','lluvia05.jpg','fucsia02.jpg','metal05.png','verano05.jpg','navida05.jpg','religion05.jpg','silver07.jpg','bg212.jpg','bg212.jpg'],
    bgError : ['bgerror.jpg','bgerror.jpg','bgerror.jpg','bgerror.jpg','bgerror.jpg','bgerror.jpg','bgerror.jpg','bgerror.jpg','bgerror.jpg','bgerror.jpg'],
    bgRadio : ['selva03.jpg','lluvia03.jpg','fucsia02.jpg','metal03.png','verano03.jpg','navida03.jpg','religion03.jpg','bg08.jpg','bg212.jpg','bg212.jpg'],////////////////////////////
    imgCheckOn : ['okcheck.png','okcheck.png','okcheck.png','okcheck.png','okcheck.png','okcheck.png','okcheck.png','okcheck.png','okcheck.png','okcheck.png'],
    imgCheckOff : ['transpIcon.png','transpIcon.png','transpIcon.png','transpIcon.png','transpIcon.png','transpIcon.png','transpIcon.png','transpIcon.png','transpIcon.png','transpIcon.png'],
    imgRadioOn : ['radioOn_1.png','radioOn_1.png','radioOn_1.png','radioOn_1.png','radioOn_1.png','radioOn_1.png','radioOn_1.png','radioOn_1.png','radioOn_1.png','radioOn_1.png'],
    imgRadioOff : ['radioOff_1.png','radioOff_1.png','radioOff_1.png','radioOff_1.png','radioOff_1.png','radioOff_1.png','radioOff_1.png','radioOff_1.png','radioOff_1.png','radioOff_1.png'],    
    bgButton : ['selva07.png','lluvia07.png','fucsia07.png','metal07.png','verano07.png','navida07.png','religion07.png','silver07.jpg','bg212.jpg','bg212.jpg'],
    bgButtonDisable : ['selva08.png','lluvia08.png','fucsia01.jpg','metal08.png','verano08.png','navida08.png','religion08.png','silver09.png','selva04.jpg','selva04.jpg'],
    botonCloseImgPathDlg : ['selva01.png','lluvia01.png','fucsia01.png','metal01.png','verano01.jpg','navida01.png','religion02.jpg','b-inicio.jpg','bg207.jpg','taskbuttons-panel-bg.gif'],
    botonMinImgPathDlg : ['selva01.png','lluvia01.png','fucsia01.png','b-metal01.png','verano01.jpg','navida01.png','religion02.jpg','b-inicio.jpg','bg207.jpg','taskbuttons-panel-bg.gif'],
    botonMaxImgPathDlg : ['selva01.png','lluvia01.png','fucsia01.png','b-metal01.jpg','verano01.jpg','navida01.jpg','religion01.jpg','bg207.jpg','bg207.jpg','taskbuttons-panel-bg.gif'],
    deskWallPaper : ['EducaFondoSelva.jpg','EducaFondoEduc@.jpg','EducaFondoFucsia.jpg','EducaFondoMetal.jpg','EducaFondoVerano.jpg','EducaNvide.jpg','EducaFondoReligion.jpg','EducaFondoSilver.jpg','desktop3.jpg','../images/desk.jpg'],
    initButtonWallPaper : ['b-inicio.jpg','b-inicio.jpg','b-inicio.jpg','b-inicio.jpg','b-inicio.jpg','b-inicio.jpg','b-inicio.jpg','b-inicio.jpg','b-inicio.jpg','b-inicio.jpg'],
    initButtonIcon : ['logo_org.gif','logo_org.gif','logo_org.gif','logo_org.gif','logo_org.gif','logo_org.gif','logo_org.gif','logo_org.gif','logo_org.gif','logo_org.gif'],
    deskImgMinWindow : ['leaf.gif','leaf.gif','leaf.gif','leaf.gif','leaf.gif','leaf.gif','leaf.gif','leaf.gif','leaf.gif','leaf.gif'],
    deskImgArrow : ['YL_MENU.GIF','YL_MENU.GIF','YL_MENU.GIF','YL_MENU.GIF','YL_MENU.GIF','YL_MENU.GIF','YL_MENU.GIF','YL_MENU.GIF','YL_MENU.GIF','YL_MENU.GIF'],
    deskMinWindowClose : ['close.gif','close.gif','close.gif','close.gif','close.gif','close.gif','close.gif','close.gif','close.gif','close.gif'],
    deskImgBarSelected : ['selva01.png','lluvia09.jpg','fucsia01.png','metal01.png','verano10.jpg','navida03.jpg','religion01.jpg','silver10.jpg','bg201.jpg','bg201.jpg'],
    taskBarWallPaper : ['taskbar-start-panel-bg.gif','taskbar-start-panel-bg.gif','taskbar-start-panel-bg.gif','taskbar-start-panel-bg.gif','taskbar-start-panel-bg.gif','taskbar-start-panel-bg.gif','taskbar-start-panel-bg.gif','taskbar-start-panel-bg.gif','taskbar-start-panel-bg.gif','taskbar-start-panel-bg.gif'],
    deskImgSeparetor : ['taskbar-split-h.gif','taskbar-split-h.gif','taskbar-split-h.gif','taskbar-split-h.gif','taskbar-split-h.gif','taskbar-split-h.gif','taskbar-split-h.gif','taskbar-split-h.gif','taskbar-split-h.gif','taskbar-split-h.gif'],
    deskImgPanel : ['selva10.png','lluvia10.png','fucsia08.png','metal10.png','verano01.jpg','navida10.png','religion04.jpg','silver09.jpg','bg171.jpg','top-bottomw.png'],
   	tabLeftOn : ['selvatabLeftOn.gif','lluviatabLeftOn.gif','metaltabLeftOn.gif','metaltabLeftOn.gif','veranotabLeftOn.gif','navidatabLeftOn.gif','veranotabLeftOn.gif','silvertabLeftOn.gif','tabLeft.gif','tabLeft.gif'],
    tabCenterOn : ['selvatabCenterOn.gif','lluviatabCenterOn.gif','metaltabCenterOn.gif','metaltabCenterOn.gif','veranotabCenterOn.gif','navidatabCenterOn.gif','veranotabCenterOn.gif','silvertabCenterOn.gif','tabCenter.gif','tabCenter.gif'],
    tabRightOn : ['selvatabRightOn.gif','lluviatabRightOn.gif','metaltabRightOn.gif','metaltabRightOn.gif','veranotabRightOn.gif','navidatabRightOn.gif','veranotabRightOn.gif','silvertabRightOn.gif','tabRight.gif','tabRight.gif'],
    tabLeftOff : ['selvatabLeftOff.gif','lluviatabLeftOff.gif','metalatabLeftOff.gif','metalatabLeftOff.gif','veranotabLeftOff.gif','navidatabLeftOff.gif','veranotabLeftOff.gif','silveratabLeftOff.gif','tabLeftOff.gif','tabLeftOff.gif'],
    tabCenterOff : ['selvatabCenterOff.gif','lluviatabCenterOff.gif','metaltabCenterOff.gif','metaltabCenterOff.gif','veranotabCenterOff.gif','navidatabCenterOff.gif','veranotabCenterOff.gif','silvertabCenterOff.gif','tabCenterOff.gif','tabCenterOff.gif'],
    tabRightOff : ['selvatabRightOff.gif','lluviatabRightOff .gif','metaltabRightOff .gif','metaltabRightOff.gif','veranotabRightOff.gif','navidatabRightOff.gif','veranotabRightOff.gif','silvertabRightOff .gif','tabRightOff.gif','tabRightOff.gif'],
    gridEvenRow : ['selva03.jpg','lluvia11.jpg','fucsia05.png','selva03.jpg','selva03.jpg','selva03.jpg','religion07.jpg','selva03.jpg','selva03.jpg','selva03.jpg'],
    gridOddRow : ['selva07.png','lluvia05.jpg','fucsia08.png','selva03.jpg','selva03.jpg','selva03.jpg','religion07.jpg','selva03.jpg','selva03.jpg','selva03.jpg'],
    imgDivModal : ['shadow-c.png','shadow-c.png','shadow-c.png','shadow-c.png','shadow-c.png','shadow-c.png','shadow-c.png','shadow-c.png','shadow-c.png','shadow-c.png'],
    iconCalendar : ['calendario.png','calendario.png','calendario.png','calendario.png','calendario.png','calendario.png','calendario.png','calendario.png','calendario.png','calendario.png'],
    imgButtonPowerCombo : ['selvaarrowDown.jpg','lluviaarrowDown.jpg','fucsiaarrowDown.jpg','metalarrowDown.jpg','veranoarrowDown.jpg','navidaarrowDown.jpg','veranoarrowDown.jpg','silverarrowDown.jpg','arrowDown.jpg','arrowDown.jpg']
 },

 Border : 
 {
    styleHead : ['outset','outset','outset','outset','outset','outset','outset','outset','outset','outset'],
    styleCell : ['outset','outset','outset','outset','outset','outset','outset','outset','outset','outset'],
    styleRow : ['outset','outset','outset','outset','outset','outset','outset','outset','outset','outset'],
    styleCheck : ['inset','inset','inset','inset','inset','inset','inset','inset','inset','inset'],
    styleRadio : ['inset','inset','inset','inset','inset','inset','inset','inset','inset','inset'],
    styleButton : ['outset','outset','outset','outset','outset','outset','outset','outset','outset','outset'],
    styleEditor : ['ridge','ridge','ridge','ridge','ridge','ridge','ridge','ridge','ridge','ridge'],
    styleMarcoEditor : ['ridge','ridge','ridge','ridge','ridge','ridge','ridge','ridge','ridge','ridge'],
    styleSelect : ['ridge','ridge','ridge','ridge','ridge','ridge','ridge','ridge','ridge','ridge'],
    styleHint : ['ridge','ridge','ridge','ridge','ridge','ridge','ridge','ridge','ridge','ridge'],
    stylePanel : ['outset','outset','outset','outset','outset','outset','outset','outset','outset','outset'],
    borderStyleTabPanel : ['groove','groove','groove','groove','groove','groove','groove','groove','groove','groove'],
    styleMemo : ['inset','inset','inset','inset','inset','inset','inset','inset','inset','inset'],
    styleGauge : ['inset','inset','inset','inset','inset','inset','inset','inset','inset','inset'],
    borderDisplay : ['outset','outset','outset','outset','outset','outset','outset','outset','outset','outset'],
    borderPopupMenu : ['outset','outset','outset','outset','outset','outset','outset','outset','outset','outset'],
    borderIconBar : ['outset','outset','outset','outset','outset','outset','outset','outset','outset','outset'],
    borderStyleLayout : ['outset','outset','outset','outset','outset','outset','outset','outset','outset','outset'],
    borderStyleBodyDialog : ['outset','outset','outset','outset','outset','outset','outset','outset','outset','outset'],
    deskFontMinWinfontWeight : ['bold','bold','bold','bold','bold','bold','bold','bold','bold','bold'],
    deskpropertyPanelborderStyle : ['outset','outset','outset','outset','outset','outset','outset','outset','outset','outset'],
    propertyPanelFontWeight : ['normal','normal','normal','normal','normal','normal','normal','normal','normal','normal'],
    deskFWeightPropertyDate : ['bold','bold','bold','bold','bold','bold','bold','bold','bold','bold']
 },

 Color : 
 {
    tabsColorText : ['#333333','#171CB4','#000000','#766C53','#770000','#4a004a','#000000','#000000','#000000','#000000'],
    tabsColorTextSelected : ['#ffffff','#ffffff','#FFFFFF','#ffffdf','#f8f7e6','#fdfaff','#ffffff','#ffffff','#FFFFFF','#FFFFFF'],
    borderTabs : ['#1a4c1b','#0022aa','#000000','#442200','#700000','#4a004a','#c40000','#FF7400','#000000','#000000'],
    barSelected : ['#337733','#3399ff','#eeeeee','#ffcc00','#ffaa10','#e494e0','#000000','#FF7400','#3E9DC1','#3E9DC1'],
    bgTabsPanel : ['#a0aaa0','#f3feff','#f5f5f5','#ffffef','#faf9e8','#fdfaff','#fcf4f6','#FF7400','#CEDBEF','#CEDBEF'],
    tabsDisable : ['#d7ffd7','#7e7e7e','#ffffff','#ffcc00','#ffaa10','#e494e0','#ffdbdb','#ffaadd','#84AEDE','#84AEDE'],
    tabsEnable : ['#1a4c1b','#000060','#000000','#553000','#850000','#600060','#ce0000','#ffcccc','#316994','#316994'],
    textHint : ['#ffffff','#000000','#000000','#FFFFFF','#ffffff','#000000','#ffffff','#000000','#000000','#000000'],
    bgHint : ['#003628','#ffffdd','#A6F952','#928E98','#572D01','#DFDFE1','#000000','#FF7400','#000000','#000000'],
    textTitle : ['#ffffff','#000000','#ffffff','#FFFFFF','#ffffff','#ffffff','#000000','#ffffff','#FFFFFF','#FFFFFF'],
    textMenuDisable : ['#ffffff','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#9C9A9C','#9C9A9C'],
    textMenuSel : ['#ffffff','#ffffff','#FFFFFF','#ffffff','#000000','#ffffff','#000000','#ffffff','#316994','#316994'],///////HHHHHHHH
    textMenu : ['#000000','#000000','#FFFFFF','#ffffff','#ffffff','#000000','#ffffff','#000000','#FFFFFF','#FFFFFF'],
				textWait : ['#000000','#000000','#000000','#ffffff','#ffffff','#000000','#ffffff','#000000','#FFFFFF','#FFFFFF'],
    textSubMenu : ['#eeeeee','#000000','#000000','#000000','#000000','#000000','#ffdbdb','#000000','#000000','#000000'],
    bgMenuSel : ['#ffffff','#aadeff','#ffffff','#ffffdf','#f8f7f6','#fdfaff','#fcf4f6','#ffffff','#316994','#316994'],
    bgMenu : ['#446644','#000040','#1c1c1c','#442200','#700000','#4a004a','#c40000','#000000','#DEE7F7','#DEE7F7'],
    textSelected : ['#000000','#ffffff','#ffffff','#ffffff','#000000','#ffffff','#000000','#ffffff','#FFFFFF','#FFFFFF'],///**************
    bgCells : ['#000000','#000010','#000000','#000000','#000000','#000000','#ffffff','#000000','#FFFFFF','#FFFFFF'],
    textBarIcon : ['#ffffff','#171CB4','#FFFFFF','#ffffff','#ffffff','#ffffff','#F8C11C','#000000','#FFFFFF','#FFFFFF'], ///color texto iconos
    textBarIconDisable : ['#e7e7e7','#000000','#FFFFFF','#000000','#000000','#000000','#a7a7a7','#e7e7e7','#FFFFFF','#FFFFFF'],
    textBarIconSelected : ['#ffff00','#000000','#FFFFFF','#000000','#000000','#000000','#000000','#ffff00','#FFFFFF','#FFFFFF'],
    bgEditor : ['#aadeff','#aadeff','#b2b2b2','#ffefad','#000000','#000000','#f6aac3','#aadeff','#FFFFFF','#FFFFFF'],
    bgEditorMarco : ['','','','','','','','','',], 
    bgSelect : ['#ffffff','#ffffff','#eeeeee','#ffffdf','#ffffff','#fdfaff','#fcf4f6','#ffeeee','#FFFFFF','#FFFFFF'],
    bgPanel : ['#f5fff5','#f3feff','#eeeeee','#ffffef','#fefeea','#fdfaff','#FFFFFF','#ffeeee','#CEDBEF','000000'],
    borderPanel : ['#003628','#000040','#1c1c1c','#442200','#700000','#4a004a','#c40000','#ff0066','#CEDBEF','#CEDBEF'],
    textCaption : ['#003628','#000000','#1c1c1c','#442200','#000000','#000000','#000000','#000000','#000000','#000000'],
    bgMemo : ['#f0fff0','#f0f0ff','#f0f0ff','#f0f0ff','#f0f0ff','#f0f0ff','#000000','#000000','#FFFFFF','#FFFFFF'],
    borderEditor : ['#000000','#7e7e7e','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000'],
    borderSelect : ['#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#CEDBEF','#CEDBEF'],
    borderMemo : ['#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#CEDBEF','#CEDBEF'],
    borderCheck : ['#003628','#000040','#1c1c1c','#442200','#700000','#4a004a','#c40000','#003628','#000000','#000000'],
    bgCheck : ['#f5fff5','#aadeff','#eeeeee','#ffffdf','#f8f7e6','#fdfaff','#fcf4f6','#f5fff5','#000000','#000000'],
    borderRadio : ['#003628','#000000','#1c1c1c','#442200','#700000','#4a004a','#c40000','#003628','#000000','#000000'],
    bgRadio : ['#f5fff5','000000','#eeeeee','#ffffdf','#f8f7e6','#fdfaff','#fcf4f6','#f5fff5','#000000','#000000'],
    borderButton : ['#003628','#000040','#1c1c1c','#442200','#700000','#4a004a','#000000','#003628','#000000','#000000'],
    textButton : ['#000000','#000040','#1c1c1c','#442200','#700000','#000000','#000000','#000000','#000000','#000000'],
    button : ['#d7ffd7','#aadeff','#eeeeee','#ffffdf','#f8f7e6','#fdfaff','#fcf4f6','#ffdbdb','#000000','#000000'],
    textEditor : ['#000000','#000000','#000000','#442200','#000000','#000000','#000000','#000000','#000000','#000000'],
    textEditorCaption : ['#003628','#000000','#333333','#664422','#000000','#000000','#000000','#000000','#000000','#000000'],
    textSelect : ['#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000'],
    textSelectedRadio : ['#008800','#699b10','#aaaa00','#aaaa00','#aaaa00','#aaaa00','#aaaa00','#aaaa00','#aaaa00','#aaaa00'],
    memoEditor : ['#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000'],
    buttonScroll : ['#003628','#000040','#1c1c1c','#442200','#700000','#4a004a','#c40000','#ff0066','#CBDBEA','#CBDBEA'],
    bgScroll : ['#f5fff5','#f3feff','#eeeeee','#ffffef','#fefeea','#fdfaff','#fcf4fd','#ffdbdb','#95B2C3','#95B2C3'],/////*****
    bgSelectedList : ['#f5fff5','#f3feff','#eeeeee','#ffffef','#fefeea','#fdfaff','#fcf4fd','#ffeeee','#000000','#000000'],
    bgBarraTitleButtons : ['#d7ffd7','#efefef','#b8b8b8','#ffffdf','#f8f7e6','#e2c5ff','#fcf4fb','#ffdbdb','#000000','#000000'],
    textHeadTitle : ['#ffffff','#ffffff','#000000','#442200','#700000','#4a004a','#c40000','#FFFFFF','#ffffff','#ffffff'],
    borderSelectList : ['#003628','#000040','#1c1c1c','#442200','#700000','#e494e0','#c40000','#ff0066','#000000','#000000'],
    selectedCell : ['#fafafa','#000033','#000000','#000000','#000000','#000000','#000000','#000000','#FFCF31','#FFCF31'],
    selectedRow : ['#7ee080','#3399ff','#7179a9','#ffcc00','#ffaa10','#e494e0','#ffdbdb','#ffaadd','#000000','#000000'],
    label : ['#005f00','#000000','#000000','#442200','#700000','#e494e0','#c40000','#000000','#000000','#000000'],    
    calendarCells : ['#f9fff9','#f3feff','#eeeeee','#ffffef','#fefeea','#fdfaff','#eeeeee','#ffeeee','#DEE7F7','#DEE7F7'],
    calendarTextDay : ['#0A0909','#aadeff','#000000','#000000','#f8f7c6','#ffffff','#ffffff','#000000','#FFFFFF','#FFFFFF'],
    calendarCellDay : ['#CEA368','#000060','#BCC5D2','#928E98','#93693F','#C33525','#000000','#FF6F00','#316994','#316994'],
    calendarText : ['#000020','#000020','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000'],
    calendarTextSelected : ['0A0909','#aadeff','#000000','#000000','#ffffff','#fdfaff','#ffffff','#ffdbdb','#FFFFFF','#FFFFFF'],
    calendarTextIcon : ['#0A0909','#000000','#000000','#000000','#000000','#000000','#000000','#ffffff','#FFFFFF','#FFFFFF'],
    calendarTextTitleIcon : ['#FCFCFC','#ffffff','#000000','#ffffff','#ffffff','#ffffff','#FFFFFF','#000000','#FFFFFF','#FFFFFF'],
    calendarBgColorIcon : ['#ffffff','#ffffff','#eeeeee','#ffffff','#ffffff','ffffff','#eeeeee','#000000','#FFFFFF','#FFFFFF'],
    calendarBgTitleIcon : ['#520509','#111199','#BCC5D2','#000000','#93693f','#C33525','#93693f','#FF6F00','#FFFFFF','#FFFFFF'],
    calendarCellSelected : ['#CEA368','#000060','#BCC5D2','#928E98','#93693f','#C33525','#000000','#FF6F00','#316994','#316994'],    
    labelSelected : ['#0000ff','#00ff00','#ff0000','#ffff00','#ffffff','#ffffff','#000000','#ff0000','#000000','#000000'],
    textGaugeInSide : ['#001500','#000015','#000000','#442200','#700000','#4a004a','#c40000','#ffdbdb','#000000','#000000'],
    textGaugeOutSide : ['#7ee080','#3399ff','#eeeeee','#ffcc00','#ffaa10','#e494e0','#ffdbdb','#ff0066','#000000','#000000'],
    bgGauge : ['#003628','#000040','#1c1c1c','#442200','#700000','#4a004a','#c40000','#ffdbdb','#000000','#000000'],
    indicatorGauge : ['#004525','#000060','#303030','#553000','#850000','#600060','#ce0000','#ffe4e4','#000000','#000000'],
    valueGauge : ['#7ee080','#3399ff','#eeeeee','#ffcc00','#ffaa10','#e494e0','#ffdbdb','#ff0066','#000000','#000000'],
    bgDisplay : ['#003628','#000040','#1c1c1c','#442200','#700000','#4a004a','#c40000','#ffdbdb','#000000','#000000'],
    onDisplay : ['#7ee080','#3399ff','#eeeeee','#ffcc00','#ffaa10','#e494e0','#ffdbdb','#ff0066','#000000','#000000'],
    offDisplay : ['#004525','#000060','#303030','#553000','#850000','#600060','#ce0000','#ffe4e4','#000000','#000000'],
    bgPopupMenu : ['#003628','#000040','#1c1c1c','#442200','#700000','#4a004a','#c40000','#ffdbdb','#000000','#000000'],    
    bgSelected : ['#337733','#3399ff','#eeeeee','#ffcc00','#ffaa10','#e494e0','#ffffff','#ff0066','#9ECEE0','#9ECEE0'],
    bgDiselected : ['#003300','#000040','#1c1c1c','#442200','#700000','#4a004a','#c40000','#000000','#F0F0F0','#F0F0F0'],    
    pmTextDiselected : ['#7ee080','#3399ff','#eeeeee','#ffcc00','#ffaa10','#e494e0','#ffdbdb','#ff0066','#000000','#000000'],
    pmTextSelected : ['#003628','#000040','#1c1c1c','#442200','#700000','#4a004a','#c40000','#ffdbdb','#000000','#000000'],
    bgIconBar : ['#7ee080','#3399ff','#000000','#ffcc00','#ffaa10','#e494e0','#c40000','#ffdbdb','#000000','#000000'],
    border : ['#003628','#000040','#1c1c1c','#442200','#700000','#4a004a','#c40000','#000000','#000000','#000000'],
    bgHeadCells : ['#003628','#8DACC4','#000000','#442200','#700000','#4a004a','#c40000','#000000','#000000','#000000'],
    bgControlSizeLayout : ['#115511','#aadeff','#b8b8b8','#ffffdf','#f8f7e6','#e2c5ff','#fcf4f6','#ffeeee','#000000','#000000'],
    bgControlSizeCenter : ['#eeffee','#aadeff','#b8b8b8','#ffffdf','#f8f7e6','#e2c5ff','#fcf4f6','#ffeeee','#000000','#000000'],
    bgBarraTitle : ['#7D532C','#a0b0ca','#45473E','#928E98','#572D01','#1C5510','#fcf4fb','#6A6464','#316994','#316994'],     
    textCells : ['#003628','#000040','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000'],
    textRow : ['#7ee080','#3399ff','#f5f5f5','#F8060A','#ffaa10','#e494e0','#000000','#000000','#000000','#000000'],//////////////////
    textHead : ['#FFFFFF','#000000','#ffffff','#ffffff','#ffffff','#ffffff','#000000','#ffffff','#000000','#000000'],    
    evenRow : ['#ffffff','#ffffff','#f7f0ed','#f9fff9','#f8f7e6','#FAEBD2','#fcf4f6','#DFFFFF','#FBFEFF','#FBFEFF'],////////////////
    oddRow : ['#ffffff','#ffffff','#F4E7E3','#f1fff1','#fefeea','#DEF4EF','#fcf4fd','#ffffff','#EFFBFF','#EFFBFF'],
    bgLayout : ['#909990','#000055','#000000','#000000','#000000','#000000','#000000','#000000','#F3F4F9','#F3F4F9'],
    fontColorBottonControlDlg : ['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff'],
    bgDialogBarraTitle : ['#446644','#99cdee','#b8b8b8','#ffffff','#ffffff','#e2c5ff','#000000','#FFFFFF','#316994','#316994'],
    textDialogBarraTitle : ['#FFFFFF','#000000','#ffffff','#ffffff','#ffffff','#ffffff','#000000','#FFFFFF','#FFFFFF','white'],
    deskFontMinWincolor : ['#FFFFFF','#171CB4','#000000','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','black'],
    deskPropertyPanelfontColor : ['black','#171CB4','#000000','#ffffff','#FFFFFF','#000000','#FFFFFF','#000000','#FFFFFF','black'],
    propertyPanelFontColorSelected : ['black','white','white','white','black','white','white','white','yellow','yellow'], ///color panel letra
    deskFColorPropertyDate : ['white','#171CB4','black','white','white','white','white','white','white','white'], //color panel letra
    propertyPanelfontColorDisable : ['rgba(70,70,70,0.05)','rgba(70,70,70,0.5)','rgba(70,70,70,0.5)','rgba(70,70,70,0.5)','rgba(70,70,70,0.5)','rgba(70,70,70,0.5)','rgba(70,70,70,0.5)','rgba(07,07,07,0.5)','rgba(70,70,70,0.5)','rgba(70,70,70,0.5)']
 },

 Size :   
 {
    headFont : ['12','12','12','12','12','12','12','12','12','12'],
    heightControlButtonsDlg : ['17','17','17','17','17','17','17','17','17','17'],
    widthControlButtonsDlg : ['17','17','17','17','17','17','17','17','17','17'],
    dialogTitle : ['11','13','13','11','11','11','11','11','11','11'],
    panelWidth : ['400','400','400','400','400','400','400','400','400','400'],
    panelHeight : ['200','200','200','200','200','200','200','200','200','200'],
    tabsText : ['12','12','12','12','12','12','12','12','12','12'],
    textCaption : ['12','12','12','12','12','12','12','12','12','12'],
    textHint : ['11','14','14','11','11','11','11','11','11','11'],
    cellFont : ['12','12','12','12','12','12','12','12','12','12'],
    labelFont : ['12','12','12','12','12','12','12','12','12','12'],
    editFont : ['12','12','12','12','12','12','12','12','12','12'],
    menu : ['11','12','12','11','11','11','11','11','12','11'],
    editFontCaption : ['12','10','12','12','12','12','12','12','12','12'],
    selectFont : ['12','12','12','12','12','12','12','12','12','12'],
    memoFont : ['12','12','12','12','12','12','12','12','12','12'],
    buttonFont : ['12','12','12','12','12','12','12','12','12','12'],
    editLength : ['100','100','100','100','100','100','100','100','100','100'],
    memoLength : ['35','35','35','35','35','35','35','35','35','35'],
    memoRows : ['4','4','4','4','4','4','4','4','4','4'],
    selectedFont : ['12','12','12','12','12','12','12','12','12','12'],
    border : ['1','1','1','1','1','1','1','1','1','1'],
    borderSelect : ['1','1','1','1','1','1','1','1','1','1'],
    borderCheck : ['1','1','1','1','1','1','1','1','1','1'],
    borderMemo : ['1','1','1','1','1','1','1','1','1','1'],
    borderEdit : ['0','0','0','0','0','0','0','0','0','0'],
    borderPanel : ['1','1','1','1','1','1','1','1','1','1'],
    borderPanelTab : ['0','0','0','0','0','0','0','0','0','0'],
    borderRadio : ['1','1','1','1','1','1','1','1','1','1'],
    borderButton : ['1','1','1','1','1','1','1','1','1','1'],
    borderTreeview : ['1','1','1','1','1','1','1','1','1','1'],
    captionFont : ['1','1','1','1','1','1','1','1','1','1'],
    PMFontSelected : ['10','10','10','10','10','10','10','10','10','10'],
    PMFontDiselected : ['10','10','10','10','10','10','10','10','10','10'],
    borderSizeIconBar : ['0','0','0','0','0','0','0','0','0','0'],
    cellPadding : ['1','1','1','1','1','1','1','1','1','1'],
    cellSpacing : ['1','1','1','1','1','1','1','1','1','1'],
    titleBar : ['20','20','20','20','20','20','20','20','20','20'],
    widthImgButtonDesk : [102,102,102,102,102,102,102,102,102,102],
    heightImgButtonDesk : [22,22,22,22,22,22,22,22,22,22],
    deskBarHeight : [32,32,28,32,32,32,32,32,32,32],
    deskFontMinWinfontSize : [10,11,11,10,10,10,10,10,10,10],
    deskPropertyPanelFontSize : [12,12,12,12,12,12,12,12,12,12],
    propertyPanelBorderWidth : [3,3,3,3,3,3,3,3,3,3],
    propertyPanelIconSize : [25,25,25,25,25,25,25,25,25,25],
    propertyPanelHeightCell : [30,30,30,30,30,30,30,30,30,30],
    deskFSizePropertyDate : [9,10,13,9,9,9,9,9,9,9]
 },

 Font : 
 {
    head : ['helvetica','arial','arial','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica'],
    fontFamilyBottonControlDlg : ['arial','verdana','arial','arial','arial','arial','arial','arial','arial','arial'],
    imgButton : ['arial','verdana','arial','arial','arial','arial','arial','arial','arial','arial'],
    cells : ['helvetica','verdana','arial','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica'],
    editor : ['helvetica','verdana','arial','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica'],
    editorCaption : ['helvetica','verdana','arial','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica'],
    select : ['helvetica','verdana','arial','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica'],
    selectList : ['helvetica','verdana','arial','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica'],
    memo : ['helvetica','verdana','arial','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica'],
    menu : ['helvetica','verdana','arial','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica'],
    tabs : ['aharoni','verdana','arial','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica'],
    selectedCell : ['helvetica','verdana','arial','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica'],
    label : ['helvetica','verdana','arial','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica'],
    button : ['helvetica','verdana','arial','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica'],
    radio : ['helvetica','verdana','arial','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica'],
    check : ['helvetica','verdana','arial','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica'],        
    pmFamilySelected : ['aharoni','verdana','arial','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica'],
    pmFamilyDiselected : ['helvetica','verdana','arial','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica'],
    deskFontMinWinfamily : ['arial','verdana','arial','arial','arial','arial','arial','arial','arial','arial'],
    deskpropertyPanelfontFamily : ['arial','verdana','arial','arial','arial','arial','arial','arial','arial','arial'],
    deskFFmlyPropertyDate : ['arial','verdana','arial','arial','arial','arial','arial','arial','arial','arial'],
    
    styleSelected : ['normal','bold','normal','normal','normal','normal','normal','normal','normal','normal'],
    styleDiselected : ['normal','bold','normal','normal','normal','normal','normal','normal','normal','normal'],
    selectedRow : ['helvetica','bold','arial','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica','helvetica'],
    styleCells : ['normal','bold','normal','normal','normal','normal','normal','normal','normal','normal'],
    styleLabel : ['normal','bold','normal','normal','normal','normal','normal','normal','normal','normal'],
    styleTab : ['normal','bold','normal','normal','normal','normal','normal','normal','normal','normal'],
    styleEditor : ['normal','bold','normal','normal','normal','normal','normal','normal','normal','normal'],
    styleEditorCaption : ['normal','bold','normal','normal','normal','normal','normal','normal','normal','normal'],
    styleSelect : ['normal','bold','normal','normal','normal','normal','normal','normal','normal','normal'],
    styleMemo : ['normal','bold','normal','normal','normal','normal','normal','normal','normal','normal'],
    styleButton : ['normal','bold','normal','normal','normal','normal','normal','normal','normal','normal'],
    styleHead : ['normal','bold','normal','normal','normal','normal','normal','normal','normal','normal'],
    weightHead : ['bold','bold','bold','bold','bold','bold','bold','bold','bold','bold'],
    weightCells : ['normal','bold','normal','normal','normal','normal','normal','normal','normal','normal'],
    weightButton : ['normal','bold','normal','normal','normal','normal','normal','normal','normal','normal'],
    weightLabel : ['normal','bold','normal','normal','normal','normal','normal','normal','normal','normal'],
    weightEditor : ['bold','bold','bold','bold','bold','bold','bold','bold','bold','bold'],
    weightEditorCaption : ['bold','bold','bold','bold','bold','bold','bold','bold','bold','bold'],
    weightSelect : ['bold','bold','bold','bold','bold','bold','bold','bold','bold','bold'],
    weightMemo : ['normal','bold','normal','normal','normal','normal','normal','normal','normal','normal']
 }
};

