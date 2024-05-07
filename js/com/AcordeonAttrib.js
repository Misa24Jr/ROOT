AcordeonAttrib = function()
{
   var colorBar                = ['rgba(100,100,100,0.7)','rgba(20,230,230,0.9)','rgba(100,100,100,0.7)','rgba(100,100,100,0.7)',
                                  'rgba(100,100,100,0.7)','rgba(100,100,100,0.7)','rgba(100,100,100,0.7)',
                                  'rgba(100,100,100,0.7)','rgba(100,100,100,0.7)','rgba(100,100,100,0.7)'];
   var colorText               = ['rgba(0,0,0,1)','rgba(0,0,0,1)','rgba(0,0,0,1)','rgba(0,0,0,1)','rgba(0,0,0,1)','rgba(0,0,0,1)',
                                  'rgba(0,0,0,1)','rgba(0,0,0,1)','rgba(0,0,0,1)','rgba(0,0,0,1)'];
   var bgText                  = ['rgba(255,255,255,1)','rgba(255,255,255,1)','rgba(255,255,255,1)','rgba(255,255,255,1)','rgba(255,255,255,1)',
                                  'rgba(255,255,255,1)','rgba(255,255,255,1)','rgba(255,255,255,1)','rgba(255,255,255,1)','rgba(255,255,255,1)'];
   
   
   
   var colorTriangle           = ['rgba(100,100,100,0.7)','rgba(165,239,0,1)','rgba(100,100,100,0.7)','rgba(100,100,100,0.7)',
                                  'rgba(100,100,100,0.7)','rgba(100,100,100,0.7)','rgba(100,100,100,0.7)','rgba(100,100,100,0.7)',
                                  'rgba(100,100,100,0.7)','rgba(100,100,100,0.7)'];
   var fontCnf                 = ['bold 10px helvetica','bold 10px helvetica','bold 12px helvetica','bold 12px helvetica','bold 12px helvetica',
                                  'bold 12px helvetica','bold 12px helvetica','bold 12px helvetica','bold 12px helvetica','bold 12px helvetica'];
   var colorPanel              = ['rgba(100,50,10,0.8)','rgba(0,0,0,0)','rgba(100,50,10,0.8)','rgba(100,50,10,0.8)','rgba(100,50,10,0.8)',
                                  'rgba(100,50,10,0.8)','rgba(100,50,10,0.8)','rgba(100,50,10,0.8)','rgba(100,50,10,0.8)','rgba(100,50,10,0.8)'];
   var bgBillBoard             = ['rgba(0,0,0,1)','rgba(250,250,250,1)','rgba(0,0,0,1)','rgba(0,0,0,1)','rgba(0,0,0,1)','rgba(0,0,0,1)',
                                  'rgba(0,0,0,1)','rgba(0,0,0,1)','rgba(0,0,0,1)','rgba(0,0,0,1)'];
   var borderColorBillBoard    = ['rgba(40,80,40,1)','rgba(10,180,180,0.6)','rgba(40,80,40,1)','rgba(40,80,40,1)','rgba(40,80,40,1)',
                                  'rgba(40,80,40,1)','rgba(40,80,40,1)','rgba(40,80,40,1)','rgba(40,80,40,1)','rgba(40,80,40,1)'];
   var fontSizeBillBoard       = ['14px','14px','14px','14px','14px','14px','14px','14px','14px','14px'];
   var fontFamilyBillBoard     = ['arial','arial','arial','arial','arial','arial','arial','arial','arial','arial'];
   var fontStyleBillBoard      = ['bold','bold','bold','bold','bold','bold','bold','bold','bold','bold'];
   var textColorBillBoard      = ['white','black','white','white','white','white','white','white','white','white'];
      
   this.getColorBar = function(env){return colorBar[env]};
   this.getColorText = function(env){return colorText[env]};
   this.getBgText = function(env){return bgText[env]};
   this.getColorTriangle = function(env){return colorTriangle[env]};
   this.getFontCnf = function(env){return fontCnf[env]};
   this.getColorPanel = function(env){return colorPanel[env]};
   this.getBgBillBoard = function(env){return bgBillBoard[env]};
   this.getBorderColorBillBoard = function(env){return borderColorBillBoard[env]};
   this.getFontSizeBillBoard = function(env){return fontSizeBillBoard[env]};
   this.getFontFamilyBillBoard = function(env){return fontFamilyBillBoard[env]};
   this.getFontStyleBillBoard = function(env){return fontStyleBillBoard[env]};
   this.getTextColorBillBoard = function(env){return textColorBillBoard[env]};
};
