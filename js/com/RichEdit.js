var RichEdit = class{
   constructor(options) {
      var that = this;
      this.isShow = false; 
      
      if(!document.getElementById('container'+options.id)){
	      this.container = document.createElement('div');
	      if(options.objectContainer)
	      	options.objectContainer.appendChild(this.container);	
	      else
	       document.body.appendChild(this.container);
	      
	      //TEXTAREA PARA EL TINYMCE
	      this.t = document.createElement('textarea');
	      if(options.id==='')
	      	options.id = 'textAreaToTinymce';      
	      this.t.id = options.id;
	      this.container.id = 'container'+options.id;
	      this.container.appendChild(this.t);	
      }
      
      this.labDesc = [];      
      var w = 996;
      var h = 600;
      if(options.width)
         w = options.width;
      if(options.height)
         h = options.height;
      this.configObject = {
         mode : 'exact',
         elements : options.id,
         //selector: '#'+options.id,
         inline_boundaries: false,
         plugin: 'a_tinymce_plugin',
         a_plugin_option: true,
         theme : 'advance',//modern
         width : w,
         height : h,
         //resize : 'both',
         resize : false,
         title: 'plantilla',
         autosave_ask_before_unload: false,
         powerpaste_allow_local_images: true,
         language : 'es',
         paste_enable_default_filters : false,
         paste_data_images: true,
         paste_word_valid_elements: "b,strong,i,em,h1,h2,table,tr,td,u,p,ol,ul,li,a[href]",
         fix_list_elements : true,
         paste_convert_word_fake_lists: true,
         paste_retain_style_properties: "all",
         paste_remove_spans: true,
         paste_remove_styles: true,
         paste_auto_cleanup_on_paste: true,
         protect: [
            /\<\/?(if|endif)\>/g,  // Protect <if> & </endif>
            /\<xsl\:[^>]+\>/g,  // Protect <xsl:...>
            /<\?php.*?\?>/g  // Protect php code
         ],          
         //menu : {edit: {title: 'Edit', items: 'cut, copy, paste'}},
         //menubar : false,         
         plugins: ["advlist autolink lists link image charmap print preview anchor", "print preview", "pagebreak",
        "searchreplace visualblocks code fullscreen","insertdatetime media table contextmenu paste imagetools wordcount"],
         toolbar: "pagebreak | insertfile a11ycheck undo redo | styleselect | bold italic underline | strikethrough | subscript | superscript | print | cut copy paste | charmap | template codesample | alignleft aligncenter alignright alignjustify | bullist numlist indent outdent | link image | insertdatetime | styleselect formatselect fontselect fontsizeselect | hoja ",
         font_formats: 'Arial=arial,sans-serif; Impact=impact; Georgia=georgia; Book Antiqua=book antiqua; Times New Roman=times new roman; Verdana=verdana; Terminal=terminal; Helvetica=helvetica; Courier New="courier new"; Courier="courier"; MonoSpace = "monospace";',
         fontsize_formats: '1px 2px 3px 4px 5px 6px 7px 8px 10px 11px 12px 14px 16px 18px 20px 22px 24px 30px 36px 42px 54px 60px 66px 72px 78px 84px',
         theme: 'modern',
         branding: false,
         pagebreak_separator: "<!-- page break -->",
         pagebreak_split_block: true,
         style_formats : [
            {title : 'Interlineado  0px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '0px'}},
            {title : 'Interlineado  1px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '1px'}},
            {title : 'Interlineado  2px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '2px'}},
            {title : 'Interlineado  3px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '3px'}},
            {title : 'Interlineado  4px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '4px'}},
            {title : 'Interlineado  5px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '5px'}},
            {title : 'Interlineado  6px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '6px'}},
            {title : 'Interlineado  7px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '7px'}},
            {title : 'Interlineado  8px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '8px'}},
            {title : 'Interlineado  9px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '8px'}},
            {title : 'Interlineado 10px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '10px'}},
            {title : 'Interlineado 12px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '12px'}},            
            {title : 'Interlineado 14px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '14px'}},
            {title : 'Interlineado 16px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '16px'}},
            {title : 'Interlineado 18px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '18px'}},
            {title : 'Interlineado 20px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '20px'}},
            {title : 'Interlineado 22px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '22px'}},
            {title : 'Interlineado 24px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '24px'}},
            {title : 'Interlineado 26px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '26px'}},
            {title : 'Interlineado 28px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '28px'}},
            {title : 'Interlineado 30px', selector : 'p,div,h1,h2,h3,h4,h5,h6', styles: {lineHeight: '30px'}}
         ],          
         
         content_style: "@media print{@page{margin : 0; border : 0} body{margin-Left: 40px; margin-top: 40px; margin-right: 40px; padding: 0}",
         setup: function(editor) {
         
            editor.on('click', function (e) { that.objProperties.onClick(e); });
            editor.on('focus', function (e) { that.objProperties.onFocus(e); });
            editor.on('blur', function (e)  { that.objProperties.onBlur(e);  });
            editor.on('SetContent', function (e) { that.objProperties.onSetContent(); });
            editor.on('GetContent', function (e) { that.objProperties.onGetContent();});
            editor.on('Change', function (e) { that.objProperties.onChange(); });
            editor.on('Remove', function (e) { that.objProperties.onRemove(); });
            editor.on('keydown', function(event) {
               if (event.keyCode === 9) { // tab pressed
                  if (event.shiftKey) { editor.execCommand('Outdent'); }
                  else { editor.execCommand('Indent'); }
                  event.preventDefault();
                  return false;
               }
            });
         
            editor.on('init', function (e) {
               tinyMCE.activeEditor.getBody().style.marginLeft = that.objProperties.marginLeft+'px';
               tinyMCE.activeEditor.getBody().style.marginRight = that.objProperties.marginRight+'px';
               tinyMCE.activeEditor.getBody().style.marginTop = that.objProperties.marginTop+'px';
               that.objProperties.width = w;
               that.objProperties.height = h;
               if(that.objProperties.orientation.toUpperCase()==='PORTRAIT')
                  that.setOrientation('PORTRAIT');
               else
                  that.setOrientation('LANDSCAPE');
            });
         
            editor.addButton('hoja', {
               text: 'Página',
               title: 'Configuración de la página', 
               icon: true,
               type : 'menubutton',
               menu : [
                  {text:'Orientación Vertical', onclick: function () {
                        that.setOrientation('portrait');
                     }
                  },
                  {text:'Orientación Horizontal', onclick: function () {
                        that.setOrientation('landscape');
                     }
                  },
                  
                  {text:'Márgenes predefinidos', onclick: function () {
                        that.setDefaultsMargins();
                     }
                  },
                  
                  {text:'Márgenes Personalizados', onclick: function () {
                     var c = tinyMCE.activeEditor.getBody();
                     editor.windowManager.open({
                        title: 'MÁRGENES - ( Números Enteros )',
                        body: [
                           {type: 'textbox', name: 'marginLeft', label: 'Margen Izquierdo:', value : that.objProperties.marginLeft},
                           {type: 'textbox', name: 'marginRight', label: 'Margen Derecho:', value : that.objProperties.marginRight},
                           {type: 'textbox', name: 'marginTop', label: 'Margen Superior:', value : that.objProperties.marginTop}
                        ],
                        onsubmit: function(e) {
                           if(!isNaN(e.data.marginLeft)){
                              c.style.marginLeft = e.data.marginLeft+'px';
                              that.objProperties.marginLeft = e.data.marginLeft;
                           }
                           if(!isNaN(e.data.marginRight)){
                              c.style.marginRight = e.data.marginRight+'px';
                              that.objProperties.marginRight = e.data.marginRight;
                           }
                           if(!isNaN(e.data.marginTop)){
                              c.style.marginTop = e.data.marginTop+'px';
                              that.objProperties.marginTop = e.data.marginTop;
                           }
                              
                        }
                     });
                     return false;
                  }
               }]
               
            });
         }
      };
      
      this.objProperties = {
         x                       : 0,
         id								: 'textAreaToTinymce',
         y                       : 0,
         width                   : 996,
         height                  : 600,
         borderWidth             : 'thin',      
         orientation             : 'portrait',  
         borderColor             : 'rgba(0,0,0,0.3)',
         borderStyle             : 'outset',
         borderTopLeftRadius     : '0.5em',
         borderTopRightRadius    : '0.5em',
         borderBottomLeftRadius  : '0.5em',
         borderBottomRightRadius : '0.5em',  
         relWidth                : 3.5,      
         leftPortrait            : 74,
         topPortrait             : 10,
         leftLandscape           : 4,
         topLandscape            : 10, 
         marginLeft              : 40,
         marginTop               : 40,
         marginRight             : 40,
         showShadow              : true,
         heightShadow            : 4,
         widthShadow             : 4,
         blurringShadow          : 15,
         boxShadowColor          : 'rgba(170,170,170,0.8)',
         onClick                 : ()=>{},
         onDblClick              : ()=>{},
         onSetContent            : ()=>{},
         onGetContent            : ()=>{},
         onChange                : ()=>{},
         onRemove                : ()=>{},
         onBlur                  : ()=>{},
         onFocus                 : ()=>{}
      }
      
      this.setProperties(options);
      tinymce.init(this.configObject);   
      this.hide(); 
   }  
   
   setProperties(prop){
      for(var attrname in prop) { this.objProperties[attrname] = prop[attrname]}; 
      //this.container.innerHTML = '';
      this.container.style.display = 'block';
      this.container.style.position = 'absolute';
      this.container.style.width = 'auto';
      this.container.style.height = 'auto';
      this.container.style.left = this.objProperties.x +'px';
      this.container.style.top = this.objProperties.y +'px';
      this.container.style.borderWidth = this.objProperties.borderWidth;
      this.container.style.borderColor = this.objProperties.borderColor;
      this.container.style.borderStyle = this.objProperties.borderStyle;
      this.container.style.borderTopLeftRadius = this.objProperties.borderTopLeftRadius;
      this.container.style.borderTopRightRadius = this.objProperties.borderTopRightRadius;
      this.container.style.borderBottomLeftRadius = this.objProperties.borderBottomLeftRadius;
      this.container.style.borderBottomRightRadius = this.objProperties.borderBottomRightRadius;
      if(this.objProperties.showShadow)
         this.setShadow();
      return this;
   }
   
   getObject(){
      return this.container;
   }
   
   setShadow(){
      this.container.style.boxShadow = this.objProperties.widthShadow + 'px ' + 
      this.objProperties.heightShadow + 'px ' + 
      this.objProperties.blurringShadow + 'px ' + 
      this.objProperties.boxShadowColor;
      return this;
   }
   
   show(){
      this.container.style.display = 'block';
      this.isShow = true;
      return this;
   }
   
   hide(){
      this.container.style.display = 'none';
      this.isShow = false;
      return this;
   }
   
   setPosition(x,y){
      this.objProperties.x = x;
      this.objProperties.y = y;
      this.container.style.left = this.objProperties.x + 'px';
      this.container.style.top = this.objProperties.y + 'px';
      return this;
   }
   
   addToBody(){ 
      document.body.appendChild(this.container);
      return this; 
   }
   
   setDefaultsMargins(){
      tinyMCE.activeEditor.getBody().style.marginLeft = '40px';
      tinyMCE.activeEditor.getBody().style.marginRight = '40px';
      tinyMCE.activeEditor.getBody().style.marginTop = '40px';
      this.objProperties.marginLeft = 40;
      this.objProperties.marginRight = 40;
      this.objProperties.marginTop = 40;
      return this;
   }
   
   setMarginTop(m){
      this.objProperties.marginTop = m;
      tinyMCE.activeEditor.getBody().style.marginTop = m+'px';
      return this;
   }
   
   setMarginRight(m){
      this.objProperties.marginRight = m;
      tinyMCE.activeEditor.getBody().style.marginRight = m+'px';
      return this;
   }
   
   setMarginLeft(m){
      this.objProperties.marginLeft = m;
      tinyMCE.activeEditor.getBody().style.marginLeft = m+'px';
      return this;
   }
   
   getMarginLeft(){
      return this.objProperties.marginLeft;
   }
   
   getMarginTop(){
      return this.objProperties.marginTop;
   }
   
   getMarginRight(){
      return this.objProperties.marginRight;
   }
   
   getOrientation(){
      return this.objProperties.orientation;
   }
   
   setOrientation(orientation){
      this.objProperties.orientation = orientation;
      var cx = 0;
      var cy = 0;
      if(orientation.toUpperCase()==='PORTRAIT'){
         cx = this.objProperties.leftPortrait;
         cy = this.objProperties.topPortrait; 
      }
      else{
         cx = this.objProperties.leftLandscape;
         cy = this.objProperties.topLandscape;
      }
      tinyMCE.activeEditor.getContainer().style.backgroundColor = 'rgba(0,0,0,0.1)';
      tinyMCE.activeEditor.getContentAreaContainer().style.height = this.objProperties.height+'px';
      tinyMCE.activeEditor.getContentAreaContainer().style.backgroundColor = 'rgba(0,0,0,0.1)';
      tinyMCE.activeEditor.getContentAreaContainer().firstChild.style.backgroundColor = 'rgba(200,200,200,1)';
      tinyMCE.activeEditor.getContentAreaContainer().firstChild.style.width = this.objProperties.width-cx*this.objProperties.relWidth + 'px';
      tinyMCE.activeEditor.getContentAreaContainer().firstChild.style.height = this.objProperties.height-cy*2 + 'px';
      tinyMCE.activeEditor.getContentAreaContainer().firstChild.style.position = 'relative';
      tinyMCE.activeEditor.getContentAreaContainer().firstChild.style.left = this.objProperties.relWidth*cx/2 +'px';
      tinyMCE.activeEditor.getContentAreaContainer().firstChild.style.top = cy+'px';
      return this;
   }
   
   print(){
   	tinymce.activeEditor.getWin().print();
   	return this;
   }
   
   getText(){
      return tinyMCE.activeEditor.getContent();
   }
   
   replaceAll(text, busca, reemplaza){
	   while (text.toString().indexOf(busca) != -1) 
		   text = text.toString().replace(busca, reemplaza);
	   return text;
   }

   setText(html){
	   tinyMCE.activeEditor.setContent(this.replaceAll(html,'/n','\n'));
	   return this;
   }
   
   setDimension(w, h){
      this.objProperties.width = w;
      this.objProperties.height = h;
      tinyMCE.activeEditor.theme.resizeTo(w, h);
      return this;
   }
   
   clear(){
      tinyMCE.activeEditor.setContent('');
      return this;
   }
   
   addText_(html){
      tinymce.activeEditor.execCommand('mceInsertContent', false, html);
      return this;
   }
   
   addPageBreak(){
      this.addText('<br><p><DIV style="page-break-after:always"/></p><br>');  
      return this;
   }
   
   addImage_(fullPath){
      this.addText('<img src='+fullPath+'>');
      return this;
   }
   
   addLabel(txt){
      this.addText('^'+txt+'^'); 
      return this;
   }
  
   replaceLabel(label, value, txt){
      txt = txt.replace(label, value);
      return txt;
   }
   
   replaceAllLabels(text){
      var txt = text;
      var lbs = this.getObjLabel(txt).labels;
      for(var i=0; i<lbs.length; i++){
        txt=this.replaceLabel(lbs[i],this.getLabelDescription()[lbs[i]],txt)
      }
      txt=this.cleanMarkLabels(txt);
      return txt;
   }
  
   cleanMarkLabels(text){
      var txt = text;
      for(var i=0; i<txt.length; i++)
         txt = txt.replace('^', '');
      return txt;
   }
   
   cleanLabelDescription(){
      this.labDesc.length = 0;
      return;
   }
   
   addLabelDescription(lab, desc){
      this.labDesc[lab]=desc;
      return;
   }
   
   getLabelDescription(){
      return this.labDesc;
   }
  
   getObjLabel(txt){
      var t =[];
      var pi = [];
      var pf = [];
      var copy = false;
      var pos=0;
      t[pos]='';
      for(var i=0; i<txt.length; i++){
         if(txt.charAt(i)==='^' && !copy){
            copy = true;
            pi.push(i)
         }        
         else if(txt.charAt(i)==='^' && copy){
            copy = false;
            pf.push(i);
            if(i+1 < txt.length){
               pos++;
               t[pos]='';  
            }
         }
         else{
            if(copy)
               t[pos]+=txt.charAt(i);
         }
      }
      
      var flag=false;
      var etq = [];     
      for(var i=0; i<t.length; i++){
         etq[i]='';
         for(var j=0; j<t[i].length; j++){
            if(t[i].charAt(j)==='<')
               flag=true;
            else if(t[i].charAt(j)==='>')
               flag=false;
            else if(!flag)
               etq[i]+=t[i].charAt(j);
         }
      }
      
      if(etq[etq.length-1]==='undefined' || etq[etq.length-1]===''){
         etq.splice(etq.length-1, 1);
      }
      return {
         xi : pi,
         xf : pf,
         labels : etq
      }
   }
   
   addText(options){
      if(typeof options === 'string'){
         this.addText_(options);
         return this;
      }        
      var v = {
         position : 'relative',
         textDecoration : 'none',
         fontFamily : 'arial',
         fontColor : 'black',
         fontSize : 12,
         fontStyle : 'normal',
         fontWeight : 'normal',
         width : 'auto',
         height : 'auto',
         lineHeight : 14,
         textAlign : 'justify',
         backgroundColor : 'rgba (255, 255, 255, 0)',
         borderStyle : 'none',
         zIndex : 0,
         x : 0,
         y : 0,
         text : ''
      };
      for(var attrname in options) { v[attrname] = options[attrname]}; 
      
      var container = document.createElement('div');        
      var p = document.createElement('p');
      p.innerHTML = v.text;
      p.style.backgroundColor = v.backgroundColor;
      p.style.color = v.fontColor;
      p.style.fontSize = v.fontSize + 'px';
      p.style.fontStyle = v.fontStyle;
      p.style.left = v.x + 'px';
      p.style.top = v.y + 'px';
      p.style.textAlign = v.textAlign;
      p.style.borderStyle = v.borderStyle;
      p.style.height = v.height + 'px';
      p.style.width = v.width + 'px';
      p.style.lineHeight = v.lineHeight + 'px';
      p.style.zIndex = v.zIndex;
      p.style.position = v.position;
      p.style.fontWeight = v.fontWeight;
      p.style.textDecoration = v.textDecoration;
      container.appendChild(p);
      tinymce.activeEditor.execCommand('mceInsertContent', false, container.innerHTML);
      return this;
    }
    
    addBar(options){
      var v = {
         position : 'relative',
         width : 400,
         height : 30,
         backgroundColor : 'rgba(0, 0, 0, 1)',
         borderStyle : 'none',
         zIndex : 0,
         display : 'block',
         x : 0,
         y : 0,
         r1 : 0,
         r2 : 0,
         r3 : 0,
         r4 : 0
      };
      for(var attrname in options) { v[attrname] = options[attrname]}; 
      var container = document.createElement('div');
      var barra = document.createElement('div');        
      barra.style.width = v.width+'px';
      barra.style.height = v.height+'px';
      barra.style.backgroundColor = v.backgroundColor;
      barra.style.borderStyle = v.borderStyle;
      barra.style.left = v.x+'px';
      barra.style.top = v.y+'px';
      barra.style.borderBottomLeftRadius = v.r3  +'px';
      barra.style.borderBottomRightRadius = v.r4  +'px';
      barra.style.borderTopLeftRadius = v.r1  +'px';
      barra.style.borderTopRightRadius = v.r2  +'px';     
      barra.style.zIndex = v.zIndex;
      barra.style.position = v.position;
      barra.style.display = v.display;
      container.appendChild(barra);
      tinymce.activeEditor.execCommand('mceInsertContent', false, container.innerHTML);
      return this;   
   }  
   
   addRectangle(options){
      var v = {
         position : 'relative',
         backgroundColor : 'rgba(255, 255, 255, 0)',
         borderStyle : 'solid',
         borderWidth :'thin',
         borderColor :'rgba(0,0,0,0.4)',
         text: '',
         zIndex : 0,
         x1 : 0,
         y1 : 0,
         x2 : 0,
         y2 : 0,
         r1 : 0,
         r2 : 0,
         r3 : 0,
         r4 : 0,
         display:'block',
         fontFamily : 'verdana',
         fontSize : 12,
         fontColor : 'black',
         fontWeight : 'bold',
         textAlign : 'center',
         lineHeight : 12
     };
     for(var attrname in options) { v[attrname] = options[attrname]}; 
     var container = document.createElement('div');
     var rect = document.createElement('div');
     rect.innerHTML = v.text;
     rect.style.lineHeight = v.lineHeight + 'px';
     rect.style.fontFamily = v.fontFamily;
     rect.style.fontSize = v.fontSize + 'px';
     rect.style.color = v.fontColor;
     rect.style.textAlign = v.textAlign;
     rect.style.fontWeight = v.fontWeight;
     rect.style.width = (v.x2-v.x1)+'px';
     rect.style.height = (v.y2-v.y1)+'px';
     rect.style.backgroundColor = v.backgroundColor;
     rect.style.borderStyle = v.borderStyle;
     rect.style.borderWidth = v.borderWidth;
     rect.style.borderColor = v.borderColor;
     rect.style.left = v.x1+'px';
     rect.style.top = v.y1+'px';
     rect.style.borderBottomLeftRadius = v.r3  +'px';
     rect.style.borderBottomRightRadius = v.r4  +'px';
     rect.style.borderTopLeftRadius = v.r1  +'px';
     rect.style.borderTopRightRadius = v.r2  +'px'; 
     rect.style.zIndex = v.zIndex;     
     rect.style.position = v.position;
     rect.style.display = v.display;
     container.appendChild(rect);
     tinymce.activeEditor.execCommand('mceInsertContent', false, container.innerHTML);
     return this;
    }
    
    addImage(options){
      if(typeof options === 'string'){
         this.addImage_(options);
         return this;
      }
      var v = {
         position : 'relative',
         zIndex : 0,
         x : 0, 
         y : 0, 
         width : 100, 
         height : 100,
         src : 'images/aceptar.png'
      };
      for(var attrname in options) { v[attrname] = options[attrname]}; 
      var container = document.createElement('div');
      var img = document.createElement('img');
      img.src=v.src;
      img.style.position = v.position;
      img.style.left = v.x + 'px';
      img.style.top = v.y + 'px';
      img.style.width = v.width + 'px';
      img.style.height = v.height + 'px';
      img.style.zIndex=v.zIndex;
      container.appendChild(img);
      tinymce.activeEditor.execCommand('mceInsertContent', false, container.innerHTML);
      return this;
   };
   
   addTable(options){
      var v = {
         x : 0, 
         y : 0, 
         id : 'myTable', 
         position : 'relative',
         zIndex : 0,
         alignTitles : 'center',
         fontColorTitles : 'rgbs(0,0,0,1)',
         fontSizeTitles : 14,
         fontFamilyTitles : 'arial',
         fontStyleTitles : 'normal',
         fontWeigthTitles : 'bold',            
         fontColorData : 'rgba(0,0,0,1)',
         fontSizeData : 12,
         fontFamilyData : 'arial',
         fontStyleData : 'normal',
         border : 1,
         borderWidth : 'thin',
         borderColapse : 'collapse',
         borderSpacing : 0,
         borderStyle : 'groove',
         cellPadding : 0,
         cellspacing : 0,
         lineColor : 'rgba(0,0,0,1)',
         bgCellTitles : 'rgba(255,255,255,1)',
         bgCellColumns : 'rgba(255,255,255,1)',
         columnTitles : [],
         widthColumns : [], 
         alignColumns : [],
         mergeCells : [],
         rows : 1,
         heightRow  : [],
         data : [],
         dataRowIndexIni : 0,
         dataRowIndexEnd : 1
     };
     
     for(var attrname in options) { v[attrname] = options[attrname]}; 
     var container = document.createElement('div');
    
     if(v.heightRow.length === 0){
         for(var i=0; i<=v.data[0].length; i++)
            v.heightRow[i]=30;   
     }
         
     if(typeof v.heightRow === 'number'){
        var n = v.heightRow;
        v.heightRow = [];
        for(var i=0; i<=v.data[0].length; i++)
            v.heightRow[i]=n;    
     }
     
     var t = document.createElement("table");
     t.id = v.id;
     t.setAttribute("border",v.border+"");
     t.setAttribute("cellPadding",v.cellPadding+"");
     t.setAttribute("cellSpacing",v.cellspacing+"");
     t.style.paddingLeft = '0px';
     t.style.paddingRight = '0px';
     t.style.paddingTop = '0px';
     t.style.paddingBottom = '0px';
     t.style.position = v.position;
     t.style.left = v.x+'px';
     t.style.top = v.y+'px';
     t.style.borderColor = v.lineColor;
     t.style.borderWidth = v.borderWidth;
     t.style.borderStyle = v.borderStyle;
     t.style.zIndex = v.zIndex;
     t.style.borderSpacing = v.borderSpacing+'px';
     var wt = 0;
     var ht = 0;
     for(var i=0; i<v.widthColumns.length; i++)
         wt+=v.widthColumns[i];
     for(var i=0; i<v.rows.length; i++)
         ht+=v.heightRow[i];
     t.style.width = wt+'px';
     
     var rowCount = v.dataRowIndexIni;
     var cellNumber = 1;
     for(var row=0; row<v.rows + 1; row++){
         t.insertRow(row);
         for(var cell=0; cell<v.widthColumns.length; cell++){
             t.rows[row].insertCell(cell);
             t.rows[row].cells[cell].style.borderStyle = v.borderStyle;
             t.rows[row].cells[cell].style.width = v.widthColumns[cell]+'px';
             t.rows[row].cells[cell].style.height = v.heightRow[row]+'px';
             t.rows[row].cells[cell].style.borderWidth = v.borderWidth;
             t.rows[row].cells[cell].style.borderCollapse = v.borderCollapse;
             t.rows[row].cells[cell].style.border = v.border+""; 
             t.rows[row].cells[cell].style.borderSpacing = v.borderSpacing+'px';
             t.rows[row].cells[cell].style.paddingLeft = '0px';
             t.rows[row].cells[cell].style.paddingRight = '0px';
             t.rows[row].cells[cell].style.paddingTop = '0px';
             t.rows[row].cells[cell].style.paddingBottom = '0px';

             //t.rows[row].cells[cell].style.padding = v.cellPadding+'px';
             if(row===0){
                 t.rows[row].cells[cell].style.backgroundColor = v.bgCellTitles;
                 t.rows[row].cells[cell].align = v.alignTitles;
                 t.rows[row].cells[cell].style.color = v.fontColorTitles;
                 t.rows[row].cells[cell].style.fontSize = v.fontSizeTitles+'px';
                 t.rows[row].cells[cell].style.fontFamily = v.fontFamilyTitles;
                 t.rows[row].cells[cell].style.fontStyle = v.fontStyleTitles;
                 t.rows[row].cells[cell].style.fontWeight = v.fontWeigthTitles;
                
                 if(v.columnTitles.length > cell)
                     t.rows[row].cells[cell].innerHTML = v.columnTitles[cell];
             }
             else{
                 t.rows[row].cells[cell].style.backgroundColor = v.bgCellColumns;
                 t.rows[row].cells[cell].style.fontColor = v.fontColorData;
                 t.rows[row].cells[cell].style.fontSize = v.fontSizeData+'px';
                 t.rows[row].cells[cell].style.fontFamily = v.fontFamilyData;
                 t.rows[row].cells[cell].style.fontStyle = v.fontStyleData;
                 if(v.alignColumns.length > 0)
                     t.rows[row].cells[cell].align = v.alignColumns[cell];
                 if(row - 1 >=v.dataRowIndexIni && row - 1 <=v.dataRowIndexEnd){
                     if(v.data.length > cell){
                         if(v.data[cell].length > rowCount - 1){
                             if(rowCount < v.rows){
                               t.rows[cellNumber].cells[cell].innerHTML = v.data[cell][rowCount];                                  
                             }
                             if(cell===v.widthColumns.length - 1){
                                 rowCount++;
                                 cellNumber++;
                             }
                         }
                     }
                 }
             }
         }
     }
    /*
     
     for(var c=0; c<v.mergeCells.length; c++){
         if(v.mergeCells[c].type==='colspan'){
            t.rows[v.mergeCells[c].row].cells[v.mergeCells[c].col].colSpan = v.mergeCells[c].value;      
            //for(var i = c+1; i<(c+1)+v.mergeCells[c].value; i++)
               //t.rows[v.mergeCells[c].row].deleteCell(i);
         }              
         if(v.mergeCells[c].type==='rowspan'){
            t.rows[v.mergeCells[c].row].cells[v.mergeCells[c].col].rowSpan = v.mergeCells[c].value;
            //for(var i = c; i<(c)+v.mergeCells[c].value; i++)
               //t.rows[v.mergeCells[c].row+1].deleteCell(i);
         }              
     }
     */
     container.appendChild(t);
     tinymce.activeEditor.execCommand('mceInsertContent', false, container.innerHTML);
     return this;
    }
}