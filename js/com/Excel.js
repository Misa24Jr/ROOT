Excel = function()
{
  var sheetName = 'mySheet1'; 
  var titleTable = 'My Table';
  if(tableExcel)
     document.removeChild(tableExcel)
  var tableExcel = document.createElement('table');
  var arrayTitles = new Array();
  var tableExcelSt = new Array();
  tableExcel.id = 'tableId';
  tableExcel.setAttribute("border","0");
  tableExcel.setAttribute("cellPadding","0");
  tableExcel.setAttribute("cellSpacing","1");
  tableExcel.style.display = 'none';
  var tableProperty =
  {
    fontFamilyTitle : 'courier',
    fontColorTitle : 'black',
    fontSizeTitle : 14,
    fontStyleTitle : 'bold',
    
    fontFamilySubTitle : 'courier',
    fontColorSubTitle : 'black',
    fontSizeSubTitle : 12,
    fontStyleSubTitle : 'bold',
    
    fontFamilyCell : 'courier',
    fontColorCell : 'black',
    fontSizeCell : 10,
    fontStyleCell : '',
    
    heightRowTitle : 30,
    heightRowSubTitle : 25,
    heightRowData : 20,
    bgColorTitle : 'rgb(200,200,200)',
    bgColorSubTitle : 'rgb(240,240,255)',
    bgEvenRow : 'rgb(255,255,255)',
    bgOddRow : 'rgb(250,250,250)',
    arrSizes : new Array(),
    arrAlign : new Array(),
    width : 300,
  }
  
  var tableToExcel = 
  (
    function() 
    {
      var uri = 'data:application/vnd.ms-excel;base64,', 
      template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" '+
      'xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta charset="UTF-8">'+
      '<head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>'+
      'workSheet</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>'+
      '</x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
      , base64 = function(s) 
        { 
          return window.btoa(unescape(encodeURIComponent(s))); 
        }
      , format = function(s, c) 
        { 
          return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }); 
        }
      return function(table, name) 
      {
        if (!table.nodeType) table = document.getElementById(table)
        var ctx = 
        {
          worksheet: name || 'Worksheet', table: tableExcel.innerHTML
        }
        window.location.href = uri + base64(format(template, ctx))
      }
    }
  )();
  
  var addRow = function()
  {
    tableExcel.insertRow(tableExcel.rows.length);    
    return tableExcel.rows.length;
  }
  
  var deleteRows = function()
  {
    for(var i=0; i<tableExcel.rows.length; i++)
    {
      tableExcel.deleteRow(tableExcel.rows.length-1);
    } 
  }
  
  var addColData = function(row,data)
  {
    var pos = tableExcel.rows[row].cells.length;  
    tableExcel.rows[row].insertCell(pos);
    tableExcel.rows[row].cells[pos].innerHTML = data; 
    tableExcel.rows[row].cells[pos].align = tableProperty.arrAlign[pos];
    tableExcel.rows[row].cells[pos].style.color = tableProperty.fontColorCell;
    tableExcel.rows[row].cells[pos].style.fontSize = tableProperty.fontSizeCell;
    tableExcel.rows[row].cells[pos].style.fontFamily = tableProperty.fontFamilyCell;
    tableExcel.rows[row].cells[pos].style.fontStyle = tableProperty.fontStyleCell;
    tableExcel.rows[row].cells[pos].style.width = tableProperty.arrSizes[pos]+'px';
    tableExcel.rows[row].style.height = tableProperty.heightRowData + 'px';
    if(row % 2 == 0)
      tableExcel.rows[row].cells[pos].style.backgroundColor = tableProperty.bgEvenRow
    else
      tableExcel.rows[row].cells[pos].style.backgroundColor = tableProperty.bgOddRow;
  }
  
  var setTitle = function()
  {
    var pos = tableExcel.rows[0].cells.length;  
    if(pos==0) 
      tableExcel.rows[0].insertCell(0);
    tableExcel.rows[0].cells[0].innerHTML = titleTable; 
    tableExcel.rows[0].cells[0].align = 'center';
    tableExcel.rows[0].cells[0].style.color = tableProperty.fontColorTitle;
    tableExcel.rows[0].cells[0].style.backgroundColor = tableProperty.bgColorTitle;
    tableExcel.rows[0].cells[0].style.fontSize = tableProperty.fontSizeTitle;
    tableExcel.rows[0].cells[0].style.fontFamily = tableProperty.fontFamilyTitle;
    tableExcel.rows[0].cells[0].style.fontStyle = tableProperty.fontStyleTitle;
    tableExcel.rows[0].style.height = tableProperty.heightRowTitle + 'px';
  }
  
  var setSubTitles = function(arrTitles)
  {
    tableExcel.rows[1].innerHTML='';  
    for(i=1; i<arrTitles.length-1; i++)
      tableExcel.rows[0].insertCell(i);
    tableExcel.rows[0].cells[0].colSpan='3';  
    for(var i=0; i<arrTitles.length; i++) 
    {  
      tableExcel.rows[1].insertCell(i);
      tableExcel.rows[1].cells[i].innerHTML = arrTitles[i]; 
      tableExcel.rows[1].cells[i].align = 'center';
      tableExcel.rows[1].cells[i].style.color = tableProperty.fontColorSubTitle;
      tableExcel.rows[1].cells[i].style.backgroundColor = tableProperty.bgColorSubTitle;
      tableExcel.rows[1].cells[i].style.fontSize = tableProperty.fontSizeSubTitle;
      tableExcel.rows[1].cells[i].style.fontFamily = tableProperty.fontFamilySubTitle;
      tableExcel.rows[1].cells[i].style.fontStyle = tableProperty.fontStyleSubTitle;
      tableExcel.rows[1].cells[i].style.width = tableProperty.arrSizes[i] + 'px';
      tableExcel.rows[1].style.height = tableProperty.heightRowSubTitle + 'px';
    }
  }
  
  var setSizeTable = function()
  {
    var s=0;  
    for(var i=0; i<tableProperty.arrSizes.length; i++)
    {
      s += tableProperty.arrSizes[i];
    }
    tableProperty.width = s;
    tableExcel.style.width = s+'px';       
  }
  this.setSheetName = function(name)
  {
    sheetName = name;  
  };

  this.setTitle = function(title)
  {
    titleTable =  title; 
  }
  
  this.setArrayTitle = function(arrTitles)
  {
    arrayTitles = arrTitles;
  }
  
  this.setAlignColmn = function(arrAlign)
  {
    tableProperty.arrAlign = arrAlign;  
  }
  
  this.addDataStruct = function(st)
  {
    tableExcelSt = st;
  }
  
  this.setSizeCols = function(arraySizes)
  {
    tableProperty.arrSizes = arraySizes;  
    setSizeTable();
  }
  
  this.setTableId = function(idTable)
  {
    tableExcel.id = idTable; 
  }
   
  this.render = function()
  {
    deleteRows();
    addRow();
    setTitle();
    addRow(); 
    setSubTitles(arrayTitles);
    for(var f=0; f<tableExcelSt[0].length; f++)
    {
      var fila = addRow()-1;
      for(var c=0; c<tableExcelSt.length; c++){
        addColData(fila,tableExcelSt[c][f]);
      }
    }
    document.body.appendChild(tableExcel);
    tableToExcel(tableExcel.id, '');
  }
}
