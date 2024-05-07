
function loadCss(file){
  if (!document.getElementById(file))
  {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = file;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = file + '.css';
    link.media = 'all';
    head.appendChild(link);
  }
} 
loadCss('js/css/imgButtonsCss');
loadCss('js/css/dialogsCss');
loadCss('js/css/buttonsCss');
loadCss('js/css/calendarsCss');
loadCss('js/css/memoCss');
loadCss('js/css/editsCss');  
loadCss('js/css/powerComboBoxCss');
loadCss('js/css/selectsCss');