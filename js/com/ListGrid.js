function ListGrid(options){
	var listGrid = this;
    var tableContainer = document.createElement("table");
    var primaryTable = document.createElement("table");
    var controlBar = document.createElement("div");
    var editPage =  document.createElement('input');
    var par1 = document.createElement('div');
    var par2 = document.createElement('div');
    var bPrior = new PanelBuilder(null, 30, 25);
    var bNext = new PanelBuilder(null, 30, 25);
    var fCounter = 0; 
	
    function mergeJson(defaults, userDefined){
		var returnObj = {};
		for (var attrname in defaults) {
			returnObj[attrname] = defaults[attrname];
		}
		for (var attrname in userDefined) {
			returnObj[attrname] = userDefined[attrname];
		}
		return returnObj;
	}

    listGrid.attribList = {
		"fontColorCells" 	    : 'rgba(0,0,0,1)',
		"fontFamilyCells" 	    : 'arial',
		"fontStyleCells" 	    : 'normal',
        "fontSizeCells" 	    : 11,
        "fontColorTitleCells" 	: 'rgba(0,0,0,1)',
        "fontFamilyTitleCells" 	: 'verdana',
        "fontStyleTitleCells" 	: 'normal',
        "fontSizeTitleCells" 	: 12,
        "fontSizeTitleCodCells"	: 10,
        "fontColorList" 	    : 'rgba(0,0,0,1)',
        "fontSizeList" 	        : 10,
        "fontFamilyList" 	    : 'verdana',
        "fontStyleList" 	    : 'normal',
        "bgTitleBar"            : 'rgba(230,230,240,0.9)',
        "bgEvenRow"             : 'rgba(255,255,255,0.9)',
        "bgOddRow"              : 'rgba(255,255,255,0.8)',
        "bgControlBar"          : 'rgba(220,220,220,0.9)',
        "bgSelectedCell"        : 'rgba(220,220,220,0.5)',
        "colorLnTable"          : 'rgba(0,0,0,0.4)',
        "x"                     : 0,
        "y"                     : 0,
        "totalCol"              : 19,
        "heightRow"             : 16,
        "heightRowTitle"        : 26,
        "widthCells"            : 34,
        "widthListCol"          : 300,
        "widthItemCol"          : 28,
        "widthLastCell"         : 28,
        "pageSize"              : 16,
        "itemPage"              : 0,
        "offsetPage"            : 0,
        "list"                  : [],
        "dataHead"              : [],
        "data"                  : [[],[],[]],
        "titleColItem"          : 'Nº',
        "titleColList"          : 'Estudiante',
        "titleCells"            : [],
        "titleLastCell"         : 'INAS',
        "validCellNumber"       : true,
        "separator"             : "#",
        "recordSeparator"       : "_",
        "jumpLn"                : false,
        "setLastCell"           : false,
        "lengthName"			: 45,
        "grantX"                : false,
        "noNumber"              : false,
        "extParamRL"            : [],
        "recordSize"            : 24,
        "fixedCols"             : []
	};

    var dataAlumno = {"name":'', "id":'', "item":''};
    var callBackEstudiante = null;
	var attribObj = (options)? mergeJson(listGrid.attribList, options) : listGrid.attribList;
    if(!attribObj.setLastCell)
        attribObj.totalCol--;
    function clearList_(){
        attribObj.list.length = 0;
    }

    function createControlButons(){
        bPrior.setFill(255,255,255,0);
        bPrior.setRadius(10,10,10,10);
        bPrior.setFont('bold 20px Verdana','black');
        bPrior.setCenterText("<");
        bPrior.setAbsoluteMode();
        bPrior.setPosition(0,0);
        bPrior.show();
        bPrior.getPanel().onmouseover = function(){
           bPrior.clearPanel();
           bPrior.setFont('bold 20px Verdana','rgb(200,200,0');
           bPrior.setCenterText("<");
        };
        bPrior.getPanel().onmouseout = function(){
           bPrior.clearPanel();
           bPrior.setFont('bold 20px Verdana','black');
           bPrior.setCenterText("<");
        };
        bPrior.getPanel().onclick = function(){
            showPrior_();
        };

        bNext.setFill(255,255,255,0);
        bNext.setRadius(10,10,10,10);
        bNext.setFont('bold 20px Verdana','black');
        bNext.setCenterText(">");
        bNext.setAbsoluteMode();
        bNext.setPosition(getWidth() - 30, 0);
        bNext.show();
        bNext.getPanel().onmouseover = function(){
           bNext.clearPanel();
           bNext.setFont('bold 20px Verdana','rgb(200,200,0');
           bNext.setCenterText(">");
        };
        bNext.getPanel().onmouseout = function(){
           bNext.clearPanel();
           bNext.setFont('bold 20px Verdana','black');
           bNext.setCenterText(">");
        };
        bNext.getPanel().onclick = function(){
            showNext_();
        };
    }

    function getTotalPage(){
        var tp = parseFloat(attribObj.list.length/attribObj.pageSize);
        if(tp <= 1)
            return 1;
        if(tp > 1 && tp <= 2)
            return 2;
        if(tp > 2 && tp <= 3)
            return 3;
        if(tp > 3 && tp <= 4)
            return 4;
        if(tp > 4 && tp <= 5)
            return 5;
        if(tp > 5 && tp <= 6)
            return 6;
        if(tp > 6 && tp <= 7)
            return 7;
        if(tp > 7 && tp <= 8)
            return 8;
        if(tp > 8 && tp <= 9)
            return 9;
        if(tp > 9 && tp <= 10)
            return 10;
    }

    function setTotalPage(){
        par2.innerHTML = 'DE  ' +getTotalPage();
    }

    function getWidth(){
        if(attribObj.setLastCell)
            return (attribObj.widthCells * (attribObj.totalCol - 2))+ attribObj.widthListCol + attribObj.widthItemCol + attribObj.widthLastCell;
        else
            return (attribObj.widthCells * (attribObj.totalCol - 1)) + attribObj.widthListCol + attribObj.widthItemCol;
    }

    function createControlBar(){
        controlBar.style.fontFamily = 'verdana';
        controlBar.style.fontSize = '8px';
        controlBar.style.display = 'block';
        controlBar.style.position = 'relative';
        var wcb = getWidth();
        controlBar.style.width = getWidth() + 'px';
        controlBar.style.height = attribObj.heightRowTitle + 'px';
        controlBar.style.backgroundColor = "rgba(0,0,0,0)";
        controlBar.style.borderWidth = '0px';
        controlBar.style.borderColor = attribObj.colorLnTable;
        controlBar.style.borderStyle = 'solid';
        controlBar.style.left = '0px';
        controlBar.style.top = '0px';
        primaryTable.rows[1].cells[0].align = 'center';
        primaryTable.rows[1].cells[0].appendChild(controlBar);
        editPage.style.textAlign='center';
        editPage.style.fontFamily='verdana';
        editPage.style.fontSize='10px';
        editPage.style.width = '20px';
        editPage.style.height = '18px';
        editPage.style.position = 'absolute';
        editPage.style.borderStyle = 'groove';
        editPage.style.left = (wcb/2) + 'px';
        editPage.style.top = (attribObj.heightRowTitle/2 - 12) + 'px';
        editPage.onkeydown = function () {this.value='';};
        editPage.onkeyup = function () {
           if(parseInt(this.value.trim()) > getTotalPage())
                this.value = getTotalPage() - 1;
            if(parseInt(this.value.trim()) < 1)
                this.value = 1;
            if(parseInt(this.value.trim(), 10)===1)
                listGrid.showFirst();
            else
                for(var i = 0; i < parseInt(this.value.trim()-1); i++) {
                    listGrid.showNext();
                }
        };

        par1.style.backgroundColor = 'rgba(0,0,0,0)';
        par1.style.position = 'absolute';
        //par1.style.width = '200px';
        par1.style.height = '18px';
        par1.innerHTML = 'PAGINA';
        par1.style.left = (wcb/2 - 40) + 'px';
        par1.style.top = ((attribObj.heightRowTitle/2) - 9) + 'px';
        par1.style.lineHeight = '18px';
        par1.style.vAlign = 'middle';

        par2.style.backgroundColor = 'rgba(0,0,0,0)';
        par2.style.position = 'absolute';
        //par2.style.width = '200px';
        par2.style.height = '18px';
        par2.style.left = (wcb/2 + 35) + 'px';
        par2.style.top = ((attribObj.heightRowTitle/2) - 9) + 'px';
        par2.style.lineHeight = '18px';
        par2.style.vAlign = 'middle';
        par2.innerHTML = 'DE  0';

        controlBar.appendChild(par1);
        controlBar.appendChild(par2);
        controlBar.appendChild(editPage);
        controlBar.appendChild(bPrior.getPanel());
        controlBar.appendChild(bNext.getPanel());
    }

    function createPrimaryTable(){
        primaryTable.setAttribute("border","0px");
        primaryTable.setAttribute("cellPadding","0px");
        primaryTable.setAttribute("cellSpacing","0px");
        primaryTable.style.borderWidth ="0px";
        primaryTable.style.backgroundColor = 'rgba(255,255,255,0)';
        primaryTable.insertRow(0);
        primaryTable.insertRow(1);
        primaryTable.rows[0].insertCell(0);
        primaryTable.rows[1].insertCell(0);
        primaryTable.style.position = 'absolute';
        primaryTable.style.left = attribObj.x+'px';
        primaryTable.style.top = attribObj.y+'px';
        primaryTable.rows[1].cells[0].style.backgroundColor = attribObj.bgControlBar;
    }

    function isNumber(sn){
        for(var i=0; i<sn.length; i++){
            if(isNaN(sn.charAt(i)))
                return false;
        }
        return true;
    }
    
    function checkDuplicate_(){
    		for(var c=0; c<tableContainer.rows[0].cells.length; c++){
    			for(var cx=0; cx<tableContainer.rows[0].cells.length; cx++){
    				if(c!=cx && tableContainer.rows[0].cells[cx].edit.value.trim()!=''){
    					if(tableContainer.rows[0].cells[cx].edit.value.trim()===tableContainer.rows[0].cells[c].edit.value.trim()){
    						return{sts:true, val:tableContainer.rows[0].cells[cx].edit.value.trim(), col1:cx, col2:c}
    					}
    					else{
    						tableContainer.rows[0].cells[c].edit.style.color='black';
    						tableContainer.rows[0].cells[cx].edit.style.color='black';
    					}
    				}
    			}
    		}
    		return {sts:false};	
    }    

    function createTableData(){
        tableContainer.setAttribute("border","0px");
        tableContainer.setAttribute("cellPadding","0px");
        tableContainer.setAttribute("cellSpacing","1px");
        tableContainer.style.borderWidth ="0px";
        tableContainer.style.width = getWidth() + 'px';
        tableContainer.style.backgroundColor = attribObj.colorLnTable;
        primaryTable.rows[0].cells[0].appendChild(tableContainer);
   
        for(var row=0; row<=attribObj.pageSize; row++){
            tableContainer.insertRow(row);
            for(var col=0; col < attribObj.totalCol; col++){
                tableContainer.rows[row].insertCell(col);
                tableContainer.rows[row].cells[col].edit = document.createElement('input');
                tableContainer.rows[row].cells[col].edit.id = row+','+col;
                tableContainer.rows[row].cells[col].edit.style.borderWidth ="0px";
                tableContainer.rows[row].cells[col].edit.style.borderStyle='none';
                tableContainer.rows[row].cells[col].edit.style.borderColor='rgba(0,0,0,0)';
                tableContainer.rows[row].cells[col].style.height = '0px';
                tableContainer.rows[row].cells[col].style.fontSize = '0px';
                tableContainer.rows[row].cells[col].appendChild(tableContainer.rows[row].cells[col].edit);
                if(row % 2)
                    tableContainer.rows[row].cells[col].edit.style.backgroundColor = attribObj.bgEvenRow;
                else
                    tableContainer.rows[row].cells[col].edit.style.backgroundColor = attribObj.bgOddRow;
                if(col===0){
                    tableContainer.rows[row].cells[col].edit.style.width = attribObj.widthItemCol+'px';
                    tableContainer.rows[row].cells[col].edit.style.height = attribObj.heightRow+'px';
                    tableContainer.rows[row].cells[col].edit.readOnly = true;
                    tableContainer.rows[row].cells[col].edit.style.textAlign = 'center';
                    tableContainer.rows[row].cells[col].edit.style.fontFamily = attribObj.fontFamilyList;
                    tableContainer.rows[row].cells[col].edit.style.fontColor = attribObj.fontColorList;
                    tableContainer.rows[row].cells[col].edit.style.fontSize = attribObj.fontSizeList+'px';
                    tableContainer.rows[row].cells[col].edit.style.fontStyle = attribObj.fontStyleList;
                }
                if(col===1){
                    tableContainer.rows[row].cells[col].edit.row = row;
                    tableContainer.rows[row].cells[col].edit.style.width = attribObj.widthListCol+'px';
                    tableContainer.rows[row].cells[col].edit.style.height = attribObj.heightRow+'px';
                    tableContainer.rows[row].cells[col].edit.readOnly = true;
                    tableContainer.rows[row].cells[col].edit.style.fontFamily = attribObj.fontFamilyList;
                    tableContainer.rows[row].cells[col].edit.style.fontColor = attribObj.fontColorList;
                    tableContainer.rows[row].cells[col].edit.style.fontSize = attribObj.fontSizeList+'px';
                    tableContainer.rows[row].cells[col].edit.style.fontStyle = attribObj.fontStyleList;

                    if(row > 0){
                        tableContainer.rows[row].cells[col].edit.onmouseover = function(){
                            this.style.cursor = 'pointer';
                        }    
                        tableContainer.rows[row].cells[col].edit.onmouseout = function(){
                            this.style.cursor = 'default';
                        }
                        tableContainer.rows[row].cells[col].edit.onclick = function(){
                            var pos = this.row + attribObj.pageSize*attribObj.itemPage;
                            dataAlumno.id = attribObj.fixedCols[pos-1][0];
                            dataAlumno.item = pos;
                            dataAlumno.name = attribObj.data[1][pos];
                            if(typeof callBackEstudiante==='function'){
                                callBackEstudiante();
                            }
                        }
                    }
                }
                if(col > 1){
                    if(attribObj.setLastCell && col===attribObj.totalCol-1)
                        tableContainer.rows[row].cells[col].edit.style.width = attribObj.widthLastCell+'px';
                    else
                        tableContainer.rows[row].cells[col].edit.style.width = attribObj.widthCells+'px';
                    tableContainer.rows[row].cells[col].edit.style.height = attribObj.heightRow+'px';
                    tableContainer.rows[row].cells[col].edit.style.textAlign = 'center';
                    tableContainer.rows[row].cells[col].edit.row = row;
                    tableContainer.rows[row].cells[col].edit.col = col;
                    
                    tableContainer.rows[row].cells[col].edit.onmouseover = function(){
                        this.style.backgroundColor = attribObj.bgSelectedCell;
                        CreaBolCodificado.buscarDescripcion(true, this.value, this.row, this.col, tableContainer.rows[0].cells[this.col].firstChild.value);
                    };

                    tableContainer.rows[row].cells[col].edit.onmouseout = function(){
                        if(this.row===0){
                            this.style.backgroundColor = attribObj.bgTitleBar;
                        }
                        else
                            if(this.row % 2 === 0)
                                this.style.backgroundColor = attribObj.bgOddRow;
                            else
                                this.style.backgroundColor = attribObj.bgEvenRow;
                    };

                    tableContainer.rows[row].cells[col].edit.onclick = function(){
                        if(attribObj.setLastCell && this.row > 0){
                            if(attribObj.data[0].length > 0 && this.col < attribObj.totalCol-1){
                                this.value = 'X';
                                attribObj.data[this.col][this.row + attribObj.pageSize*attribObj.itemPage] = this.value;
                            }
                        }
                    };
                    
                    tableContainer.rows[row].cells[col].edit.ondblclick = function(){
                        if(attribObj.data[0].length > 0){
                            this.value='';
                            attribObj.data[this.col][this.row + attribObj.pageSize*attribObj.itemPage] = this.value;
                        }
                        if(this.row===0){
                            attribObj.dataHead[this.col-2]="";
							CreaBolCodificado.rowHeadIndicador = 0;
							if (tabsCreaBolCodificado.getActualTab() === 0) {
								if (pcbCreaBolCodArea.getOption() != "") {
									CreaBolCodificado.colHeadIndicador = this.col;
									setTimeout(function(){exeShow("js/edu/cnt/bas/","MantEvaCodificada")}, 50);
								}
								else {
									Alert.show('SELECCIONE UN AREA','SISTEMA');
								}
							}
							else {
								CreaBolCodificado.colHeadIndicador = this.col;
								setTimeout(function(){exeShow("js/edu/cnt/bas/","MantCodObservacion")}, 50);
							}
                        }
						else if(this.row > 0){
							if (tabsCreaBolCodificado.getActualTab() === 0) {
								if (pcbCreaBolCodArea.getOption() != "") {
									CreaBolCodificado.rowHeadIndicador = this.row;
									CreaBolCodificado.colHeadIndicador = this.col;
									setTimeout(function(){exeShow("js/edu/cnt/bas/","MantCalificativos")}, 50);
								}
								else {
									Alert.show('SELECCIONE UN AREA','SISTEMA');
								}
							}
                        }
                    };

                    tableContainer.rows[row].cells[col].edit.onblur = function(e){
                        fCounter=0;
                        if(this.row===0){
                            this.style.backgroundColor = attribObj.bgTitleBar;
                            var cd = checkDuplicate_();
                            if(cd.sts){
                            	//tableContainer.rows[0].cells[cd.col1].edit.focus();
                    			tableContainer.rows[0].cells[cd.col1].edit.style.color='red';
                    			tableContainer.rows[0].cells[cd.col2].edit.style.color='red';
                    			Alert.show('Ingreso un codigo repetido, verifique códigos en rojo..!','CODIGO DUPLICADO');
                            }
                        }
                        else
                            if(this.row % 2 === 0)
                                this.style.backgroundColor = attribObj.bgOddRow;
                            else
                                this.style.backgroundColor = attribObj.bgEvenRow;
                    }

                    tableContainer.rows[row].cells[col].edit.onkeydown = function(e){
                        var k = e.keyCode;
                        if(fCounter===0 && k!=40 && k!=38 && k!=37 && k!=39 && k!=13 && k!=34 && k!=33 && k!=8 && k!=32 && 
                            k!=46 && k!=36 && k!=35 && k!=45 && k!=17 && k!=18 && k!=20 && k!=9)
                            this.value='';
                        fCounter++;
                    }

                    tableContainer.rows[row].cells[col].edit.onfocus = function(e){
                        this.style.backgroundColor = attribObj.bgSelectedCell;
                    }

                    tableContainer.rows[row].cells[col].edit.addEventListener("wheel", function f(e){
                        var evt = window.event || e 
                        var delta = evt.detail? evt.detail*(-120) : evt.wheelDelta 
                        if(delta===-120){//abajo         
                            showNext_();                              
                        }
                        if(delta === 120){//arriba
                            showPrior_();                            
                        }
                    });

                    tableContainer.rows[row].cells[col].edit.onkeyup = function(e){
                        var k = e.keyCode; 
                        switch(k){
                            case 40 : {if(this.row < attribObj.pageSize) tableContainer.rows[this.row+1].cells[this.col].edit.focus();
                                if (this.row+1 >= attribObj.pageSize+1){showNext_();tableContainer.rows[1].cells[this.col].edit.focus();}break;}
                            case 38 : {if(this.row > 1) tableContainer.rows[this.row-1].cells[this.col].edit.focus();
                                if (this.row <= 1){showPrior_();tableContainer.rows[tableContainer.rows.length-1].cells[this.col].edit.focus();}break;}
                            
                            case 37 : {if(this.col > 2) tableContainer.rows[this.row].cells[this.col-1].edit.focus();break;}
                            case 39 : {if(this.col < attribObj.totalCol) tableContainer.rows[this.row].cells[this.col+1].edit.focus();break;}
                            case 13 : {if(this.col < attribObj.totalCol && this.row < attribObj.pageSize) tableContainer.rows[this.row+1].cells[2].edit.focus();
                                if (this.row+1 >= attribObj.pageSize+1){showNext_();tableContainer.rows[1].cells[2].edit.focus();}break;}
                            case 34 : {showNext_();tableContainer.rows[1].cells[this.col].edit.focus();break;}
                            case 33 : {showPrior_();tableContainer.rows[tableContainer.rows.length-1].cells[this.col].edit.focus();break;}
                        }   
                        if(attribObj.validCellNumber)
                            if(!isNumber(this.value))
                                if(attribObj.grantX && attribObj.setLastCell)    
                                    this.value = 'X';
                                else
                                    this.value = this.value.toUpperCase();
                        if(attribObj.setLastCell && isNumber(this.value) && this.row > 0)
                            if(k!=40 && k!=38 && k!=37 && k!=39 && k!=13 && k!=34 && k!=33 && k!=8 && k!=32 && k!=46 && k!=36 && k!=35 && 
                               k!=45 && k!=17 && k!=18 && k!=20 && k!=9 && this.col < attribObj.totalCol-1 && attribObj.setLastCell)
                                this.value = 'X';
                        if(this.row + attribObj.pageSize*attribObj.itemPage > attribObj.list.length){
                            this.value='';
                        }
                        else
                            if(attribObj.data[0].length > 0)
                                attribObj.data[this.col][this.row + attribObj.pageSize*attribObj.itemPage] = this.value;  
                        if(this.row===0){
                            attribObj.dataHead[this.col-2] = this.value;
                        }          
                        if(attribObj.data[0].length > 0)
                            updateDataHead_();
                    };
                    if(row > 0){
                        tableContainer.rows[row].cells[col].edit.style.fontColor = attribObj.fontColorCells;
                        tableContainer.rows[row].cells[col].edit.style.fontFamily = attribObj.fontFamilyCells;
                        tableContainer.rows[row].cells[col].edit.style.fontStyle = attribObj.fontStyleCells;
                        tableContainer.rows[row].cells[col].edit.style.fontSize = attribObj.fontSizeCells+'px';
                    }
                }
                if(row === 0){
                    tableContainer.rows[row].cells[col].edit.style.height = attribObj.heightRowTitle+'px';
                    tableContainer.rows[row].cells[col].edit.style.fontColor = attribObj.fontColorTitleCells;
                    tableContainer.rows[row].cells[col].edit.style.fontFamily = attribObj.fontFamilyTitleCells;
                    tableContainer.rows[row].cells[col].edit.style.fontStyle = attribObj.fontStyleTitleCells;
                    tableContainer.rows[row].cells[col].edit.style.fontSize = attribObj.fontSizeTitleCells+'px';
                    tableContainer.rows[row].cells[col].edit.style.backgroundColor = attribObj.bgTitleBar;
                    
                    if(col===0 ){
                        tableContainer.rows[row].cells[col].edit.value = 'Nº';
                        tableContainer.rows[row].cells[col].edit.style.textAlign = 'center';
                    }
                    if(col===1){
                        tableContainer.rows[row].cells[col].edit.value = attribObj.titleColList;
                        tableContainer.rows[row].cells[col].edit.style.textAlign = 'center';
                    }
                    if(col > 1){
                        tableContainer.rows[row].cells[col].edit.style.fontSize = attribObj.fontSizeTitleCodCells + 'px';
                        if(col - 2 < attribObj.titleCells.length){
                            tableContainer.rows[row].cells[col].edit.value = attribObj.titleCells[col - 2];
                            tableContainer.rows[row].cells[col].edit.textAlign = 'center';
                        }
                        /*
                        tableContainer.rows[row].cells[col].edit.onkeyup = function(e){
                    
                        }*/
                    }
                    if(col === attribObj.totalCol - 1){
                        if(attribObj.setLastCell){
                            tableContainer.rows[row].cells[col].edit.value = attribObj.titleLastCell;
                            tableContainer.rows[row].cells[col].edit.readOnly = true;
                            tableContainer.rows[row].cells[col].edit.style.fontSize = attribObj.fontSizeCells+'px';
                            tableContainer.rows[row].cells[col].edit.onkeyup = function(){};
                        }
                    }
                }
            }
        }
    }

    function initData_(){
        for(var f=0; f<attribObj.list.length+1; f++){
            for(var c=0; c<attribObj.totalCol; c++){
                if(c===0){
                    attribObj.data[c][f] = f;
                }
                if(c===1){
                    attribObj.data[c][f+1] = attribObj.list[f];
                }
            }
        }
    }

    function createData_(){
        for(var c=0; c<attribObj.totalCol; c++){
            attribObj.data[c] = [];
            for(var f=0; f<attribObj.list.length+1; f++){
                attribObj.data[c][f] = "";
            }
        }
        initData_();
    }

    function createDataHead(){
        for(var i=0; i < attribObj.totalCol - 3 ; i++)
            attribObj.dataHead[i]='';
    }

    function create(){
        createPrimaryTable();
        createTableData();
        createControlBar();
        createControlButons();
        createDataHead();
    }

    function clearDataHead_(){
        for(var c=2; c<attribObj.totalCol; c++){
            tableContainer.rows[0].cells[c].edit.value = "";
            if(c===attribObj.totalCol-1)
                if(attribObj.setLastCell)
                    tableContainer.rows[0].cells[c].edit.value = attribObj.titleLastCell;

        }
        attribObj.dataHead.length=0;
    }

    function clear_(){
        for(var i=1; i<=attribObj.pageSize; i++){
            tableContainer.rows[i].cells[0].edit.value = '';
            tableContainer.rows[i].cells[1].edit.value = '';
            for(var c=2; c<attribObj.totalCol; c++){
                tableContainer.rows[i].cells[c].edit.value = "";
            }
        }
    }

    function showFirst_(){
        clear_();
        attribObj.itemPage=0;
        attribObj.offsetPage=0;
        editPage.value=1;
        for(var i=0; i<attribObj.list.length; i++){
            if(i < attribObj.pageSize){
                attribObj.offsetPage++;
                tableContainer.rows[attribObj.offsetPage].cells[0].edit.value = attribObj.offsetPage;
                tableContainer.rows[attribObj.offsetPage].cells[1].edit.value = attribObj.list[i];
                for(var c=2; c<attribObj.totalCol; c++){
                    tableContainer.rows[attribObj.offsetPage].cells[c].edit.value = attribObj.data[c][attribObj.offsetPage];
                }
            }
        }
    }

    function showNext_(){
        if(attribObj.itemPage + 1 < getTotalPage()){
            clear_();
            attribObj.itemPage++;
            editPage.value=attribObj.itemPage+1;
            var c =  attribObj.itemPage*attribObj.pageSize;
            attribObj.offsetPage =  0;
            for(var i=c; i<attribObj.list.length; i++){
                if(i < attribObj.pageSize + c){
                    attribObj.offsetPage++;
                    tableContainer.rows[attribObj.offsetPage].cells[0].edit.value = attribObj.offsetPage+c;
                    tableContainer.rows[attribObj.offsetPage].cells[1].edit.value = attribObj.list[i];
                    for(var cx=2; cx<attribObj.totalCol; cx++){
                        tableContainer.rows[attribObj.offsetPage].cells[cx].edit.value = attribObj.data[cx][attribObj.offsetPage+c];
                    }
                }
            }
        }
    }

    function showPrior_(){
        if(attribObj.itemPage > 0){
            clear_();
            attribObj.itemPage--;
            editPage.value=attribObj.itemPage+1;
            var c =  attribObj.itemPage*attribObj.pageSize;
            attribObj.offsetPage =  0;
            for(var i=c; i<attribObj.list.length; i++){
                if(i < attribObj.pageSize + c){
                    attribObj.offsetPage++;
                    tableContainer.rows[attribObj.offsetPage].cells[0].edit.value = attribObj.offsetPage+c;
                    tableContainer.rows[attribObj.offsetPage].cells[1].edit.value = attribObj.list[i];
                    for(var cx=2; cx<attribObj.totalCol; cx++){
                        tableContainer.rows[attribObj.offsetPage].cells[cx].edit.value = attribObj.data[cx][attribObj.offsetPage+c];
                    }
                }
            }
        }
    }

    function showDataHead_(){
        for(var c=0; c < attribObj.dataHead.length; c++){
            if(attribObj.dataHead[c]===null||attribObj.dataHead[c]===undefined)
                attribObj.dataHead[c]='';
            tableContainer.rows[0].cells[c+2].edit.value = attribObj.dataHead[c];
        }
    }

    function updateDataHead_(){
        for(var col = 2; col<attribObj.totalCol - 1; col++){
            attribObj.dataHead[col-2] =  tableContainer.rows[0].cells[col].edit.value;
            attribObj.data[col][0] = attribObj.dataHead[col];
        }
        return attribObj.dataHead;
    }

    function refreshDataHead_(){
        for(var co=0; co < attribObj.dataHead.length; co++ ){
            attribObj.data[co+2][0] = attribObj.dataHead[co];
        }
    }

    function checkBlankLastCell_(){
        for(var f = 1; f<attribObj.list.length+1; f++){
            if(attribObj.data[attribObj.totalCol-1][f]===''){
                attribObj.data[attribObj.totalCol-1][f]='0'; 
            }   
        }
    }

    function getPlainData_(){
        if(attribObj.setLastCell)
            checkBlankLastCell_();
        var plainData='';
        refreshDataHead_();              
        //data adicional
        if(attribObj.extParamRL){
            for(var i=0; i<attribObj.extParamRL.length; i++){
                if(typeof attribObj.extParamRL[i]==='object')
                    plainData += replaceAll(replaceAll(attribObj.extParamRL[i].getText()+'', attribObj.separator, " "),attribObj.recordSeparator, " ") + "" + attribObj.separator;
                else{
                    plainData +=replaceAll(replaceAll(attribObj.extParamRL[i]+'', attribObj.separator, " "), attribObj.recordSeparator, " ") + "" + attribObj.separator;
                }
            }
        }            
        for(var f = 0; f<attribObj.list.length+1; f++){
            for(var c = 0; c<attribObj.totalCol; c++){
                if(c!=0 && c!=1){
                    if(f<attribObj.list.length)        
                        plainData+= attribObj.data[c][f] + "" + attribObj.separator;
                    else{
                        if(c<attribObj.totalCol-1)
                            plainData+= attribObj.data[c][f] + "" + attribObj.separator;
                        else
                            plainData+= attribObj.data[c][f];
                    }
                }
            }
            if(attribObj.jumpLn)
                plainData+='\n';
            //fixed data
            if(f<attribObj.list.length){
                for(var col=0; col<attribObj.fixedCols[0].length; col++){            	
                    plainData+=attribObj.fixedCols[f][col] + "" + attribObj.separator;
                
                }
            }
        }
        return plainData;
    };
    
    this.checkDuplicate = function(){
    		return checkDuplicate_();
    }

    this.onClickStudent = function(extFunct){
        if(typeof extFunct==='string')
            callBackEstudiante = new Function(extFunct);   
        else
            callBackEstudiante = extFunct;
    }

    this.getStudent = function(){
        return dataAlumno;
    }

    this.getObject = function(){
        return primaryTable;
    };

    this.setList = function(arrList){
        attribObj.list = arrList.slice();
        createData_();
        setTotalPage();
    };

    this.setData = function(arrData){
        for(var c=0; c<arrData.length; c++){
            for(f=0; f<arrData[0].length; f++){
                attribObj.data[c+2][f+1]= arrData[c][f];
            }
        }
        showFirst_();
    };

    this.setDataHead = function(dataH){
        attribObj.dataHead = dataH.slice();
        showDataHead_();
    };

	this.setCodigoIndObs = function(codigoIndicador){
		tableContainer.rows[CreaBolCodificado.rowHeadIndicador].cells[CreaBolCodificado.colHeadIndicador].edit.value = codigoIndicador;
        if(attribObj.data[0].length > 0)
			attribObj.data[CreaBolCodificado.colHeadIndicador][CreaBolCodificado.rowHeadIndicador + attribObj.pageSize*attribObj.itemPage] = codigoIndicador;  
		CreaBolCodificado.rowHeadIndicador = -1;
		CreaBolCodificado.colHeadIndicador = -1;
		updateDataHead_();
	}

    this.getDataHead = function(){
        return attribObj.dataHead;
    };

    this.showFirst = function(){
        showFirst_();
    };

    this.showNext = function(){
        showNext_();
    };

    this.showPrior = function(){
        showPrior_();
    };

    this.getCellValue = function(f,c){
        return tableContainer.rows[f].cells[c].edit.value;
    };

    this.setCellValue = function(f,c, val){
        tableContainer.rows[f].cells[c].edit.value = val;
    };

    this.addToBody = function(){
        document.body.appendChild(primaryTable);
    };

    this.setTwoList = function(list1, list2){
        clearList_();
        for(var i=0; i<list1.length; i++){
            attribObj.list[i] = list1[i]+' '+list2[i];
        }
    };

    this.setParamRecordList = function(arrObj){
        attribObj.extParamRL = arrObj.slice();
    };

    this.getRecordList = function(){
        refreshDataHead_();
        var dat = getPlainData_().split(attribObj.separator);
        var totRecord = dat.length/attribObj.recordSize;
        var count=0;
        var recList = ''
        xmlStructs.createRecordList("rlx");
        for(var f=0; f<totRecord; f++){
            var rec='';
            for( var c=0; c<attribObj.recordSize; c++){
                if(c < attribObj.recordSize-1)
                    rec+=dat[count] + "" + attribObj.separator;
                else{
                    if(f < totRecord - 1)
                        rec+=dat[count]+attribObj.recordSeparator;
                    else
                        rec+=dat[count];
                }
                count++;
            }
            recList+=rec;
        }    
        xmlStructs.createVar('var', 'dato', 'string', xmlStructs.filterSpecialChar(recList));
        xmlStructs.createRecord("reg", "reg");
        xmlStructs.addFieldToRecord("reg", xmlStructs.getVar('var'));
        xmlStructs.createRecordList("rlx");
        xmlStructs.addRecordToList("rlx", xmlStructs.getRecord("reg"));
        return xmlStructs.getRecordList('rlx');
    };

    this.getRecordListXML = function(){
        refreshDataHead_();
        var dat = getPlainData_().split(attribObj.separator);
        var totRecord = dat.length/attribObj.recordSize;
        var count=0;
        xmlStructs.createRecordList("rlx");
        for(var f=0; f<totRecord; f++){
            xmlStructs.createRecord("reg", "reg");
            for( var c=0; c<attribObj.recordSize; c++){
                xmlStructs.createVar('var', 'dato'+f+c, 'string', dat[count] );   
                xmlStructs.addFieldToRecord("reg", xmlStructs.getVar('var'));
                count++;
            }
            xmlStructs.addRecordToList("rlx", xmlStructs.getRecord("reg"));
        }      
        return xmlStructs.getRecordList('rlx');
    };

    function escapeRegExp(string){
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
     
    function replaceAll(str, term, replacement) {
      return str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
    }

    this.addFixedCols = function(arrCol){
        attribObj.fixedCols[attribObj.fixedCols.length] = [];
        attribObj.fixedCols[attribObj.fixedCols.length-1] = arrCol.slice();
    }

    this.getPlainData = function(arrObj){
        return getPlainData_(arrObj);
    };

    this.clear = function() {
        clear_();
        clearDataHead_();
    	attribObj.fixedCols = [];
        for(var f=0; f<attribObj.list.length; f++) {
            for(var c=0; c<attribObj.totalCol; c++) {
                attribObj.data[c][f] = '';
            }
        }
    };

    this.getRecordCount = function(){
        var count = 0;
        for(var f=1; f<attribObj.list.length; f++){
            for(var c=2; c<attribObj.totalCol; c++)
                if((attribObj.data[c][f]+'').trim()!='')
                    count++;
        }
        return count;
    };

    this.getTotalStudents = function(){
        return attribObj.list.length;
    };

    this.getTotalCode = function(tipo){//tipo=0 indicadores tipo=1 observaciones
        var total = 0;
        if(tipo===0){
            for(var c=2; c<attribObj.totalCol; c++){
                if((attribObj.data[c][0]+'').trim()!='')
                    total++;
            }
        }
        else{
            for(var c=2; c<attribObj.totalCol-1; c++){
                if((attribObj.data[c][0]+'').trim()!='')
                    total++;
            } 
        }
        return total;
    }

    this.printContent = function(d1, d2, d3, d4, d5, d6, d7, d8, tipo){
        if(d1===undefined) d1='';//institución
        if(d2===undefined) d2='';//periodo
        if(d3===undefined) d3='';//lapso
        if(d4===undefined) d4='';//seccion
        if(d5===undefined) d5='';//lapso
        if(d6===undefined) d6='';//area
        if(d5===undefined) d7='';//docente
        if(d6===undefined) d8='';//proyecto
        var marginTop = 4;
        var hr = 6.5;//heightRow
        function createHeader(){
            r.setFontProperties(r.getRGBAObj(0,0,0,1),12,'Verdana','bold');
            switch(tipo){    
                case 0 : {r.addText(110,marginTop + 8,'HOJA DE EVALUACIÓN DESCRIPTIVA', false,true);break;}  
                case 1 :{
                            r.addText(122,marginTop + 8,'HOJA DE OBSERVACION', false,true);
                            r.setFontProperties(r.getRGBAObj(0,0,0,1),8,'helvetica','bold');
                            r.addText(98+12*attribObj.dataHead.length, marginTop + 34.5,attribObj.titleLastCell, false, true);
                        }  
            }
            r.setFontProperties(r.getRGBAObj(0,0,0,1),10,'helvetica','bold');
            r.addAbsTable(9, marginTop + 10, [139.5,139.5], 1, 20, false,true);
            //parametros
            r.setFontProperties(r.getRGBAObj(0,0,0,1),11,'helvetica','bold');
            r.addText(10,marginTop + 15,d1, false,true);//Institución
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','bold');
            r.addText(10,marginTop + 20,'PERIODO : ', false, true);            
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','normal');
            r.addText(25.5,marginTop + 20,d2, false, true);
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','bold');
            r.addText(106,marginTop + 20,'LAPSO : ', false, true);
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','normal');
            r.addText(118,marginTop + 20, d5, false, true);  
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','bold');
            r.addText(10,marginTop + 24,'GRADO : ', false, true);            
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','normal');
            r.addText(23,marginTop + 24,d3, false, true);  
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','bold');
            r.addText(106,marginTop + 24,'SECCIÓN :', false,true);
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','normal');
            r.addText(121.5,marginTop + 24,d4, false, true);            
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','bold');
            r.addText(10,marginTop + 28,'ÁREA :', false,true);
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','normal');
            r.addText(20.5,marginTop + 28,d6, false, true);

            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','bold');
            r.addText(150,marginTop + 14.5,'DOCENTE :', false,true);   
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','normal');
            r.addText(166.5,marginTop + 14.5,d7, false, true);

            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','bold');
            r.addText(150,marginTop + 21.5,'PROYECTO :', false,true);        
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','normal');     
            r.addText(150,marginTop + 26.5, d8.substr(0,100), false,true);
        }

        function createHeadData(){
            r.addAbsTable(9, marginTop + 30, [8,79,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12], 1, hr, false,true);
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','bold');
            r.addText(11.5,marginTop + 34.5,'Nº', false,true);
            r.addText(46,marginTop + 34.5,'ESTUDIANTE', false,true);
            for(var i=0; i<attribObj.dataHead.length; i++){
                r.addText(99+12*i, marginTop + 34.5,attribObj.dataHead[i]+'', false, true);
            }
        }

        function createBodyTable(){
            for(var i=0; i<25; i++){
                r.addAbsTable(9, marginTop + 36.5 + i*hr, [8,79,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12], 1, hr, false,true);
            }
        }

        function addStudents(ini,fin){
            for(var i=0; i<fin; i++){
                if((i+ini) < 9)
                    r.addText(12, marginTop + 40.5 +i*hr, (i+1+ini)+'' , false,true);
                else
                    r.addText(11, marginTop + 40.5 +i*hr, (i+1+ini)+'' , false,true);
                r.addText(17.5, marginTop + 40.5 +i*hr, attribObj.list[i+ini].substr(0,55) , false,true);
            }
        }

        function addData(ini, fin){
            for(var f = 1; f < fin+1; f++){
                for(var c = 2; c < attribObj.data.length; c++){
                    r.addText(101+12*(c-2), marginTop + 34.5 + f*hr,attribObj.data[c][f+ini]+'', false, true);
                }
            }            
        }

        function proc(ini, fin){
            createHeader();
            createHeadData();
            createBodyTable();
            addStudents(ini, fin);
            addData(ini, fin);
        }

        var r = new Report('landscape');
        r.setNoRepeatHead();
        r.setFontProperties(r.getRGBAObj(0,0,0,1),15,'helvetica','bold');
        var tPag = 1;
        if(attribObj.list.length>25)
            tPag++;
        if(tPag===1){
            proc(0, attribObj.list.length);
        }    
        else{
            proc(0, 25);
            r.addPage();
            proc(25, attribObj.list.length-25);
        }        
        r.render();
        setTimeout(r.printPDF(),1000);
    }; 

    this.print = function(d1, d2, d3, d4, tipo){
        if(d1===undefined) d1='';
        if(d2===undefined) d2='';
        if(d3===undefined) d3='';
        if(d4===undefined) d4='';
        var tr = 45;//totalRow  
        var hr = 6.5;//heightRow  
        var hrData = 5.1;//heightRowData 
        var iniPos = 40;
        var marginTop = 5.5;
        
        function header(){
            r.setFontProperties(r.getRGBAObj(0,0,0,1),12,'Verdana','bold');
            switch(tipo){    
                case 0 : {r.addText(76,marginTop + 8,'HOJA DE EVALUACIÓN DESCRIPTIVA', false,true);break;}  
                case 1 :{
                            r.addText(83,marginTop + 8,'HOJA DE OBSERVACION', false,true);
                            r.setFontProperties(r.getRGBAObj(0,0,0,1),8,'helvetica','bold');
                            r.addText(191,marginTop + 34, attribObj.titleLastCell, false,true);break;
                        }  
            }
            r.setFontProperties(r.getRGBAObj(0,0,0,1),10,'helvetica','bold');
            r.addAbsTable(9, marginTop + 10, [97,96], 1, 20, false,true);
            r.addAbsTable(106, marginTop + 10, [96], 1, 7, false,true);
            r.addAbsTable(9, marginTop + 30, [6,67,12,12,12,12,12,12,12,12,12,12], 1, hr, false,true);
            r.addAbsTable(9, marginTop + 36.5, [6,67,12,12,12,12,12,12,12,12,12,12], tr, hrData, false,true);

            r.setFontProperties(r.getRGBAObj(0,0,0,1),8,'Verdana','bold'); 
            r.addText(10.5,marginTop + 35,'Nº', false,true);
            for(var i=1; i < tr+1; i++){
                if(i < 10)
                    r.addText(10.5,marginTop + (i-1)*hrData+40.3,'0'+(i), false,true);
                else
                    r.addText(10.5,marginTop + (i-1)*hrData+40.3,(i)+'', false,true);
                
            }
            r.setFontProperties(r.getRGBAObj(0,0,0,1),11,'helvetica','bold');
            r.addText(10,marginTop + 15,d1, false,true);
            
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','bold');
            r.addText(10,marginTop + 20,'PERIODO : ', false, true);
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','normal');
            r.addText(27,marginTop + 20,d2, false, true);

            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','bold');
            r.addText(56,marginTop + 20,'LAPSO :     _____________ ', false, true);
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','normal');
            
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','bold');
            r.addText(10,marginTop + 24,'GRADO : ', false, true);            
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','normal');
            r.addText(27,marginTop + 24,d3, false, true);

            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','bold');
            r.addText(56,marginTop + 24,'SECCIÓN :', false,true);
            r.addText(72,marginTop + 24,d4, false, true);
            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','normal');

            r.setFontProperties(r.getRGBAObj(0,0,0,1),9,'helvetica','bold');
            r.addText(10,marginTop + 28,'ÁREA :', false,true);
            r.addText(108,marginTop + 14.5,'DOCENTE :', false,true);   
            r.addText(108,marginTop + 21.5,'PROYECTO :', false,true);             
            r.addText(38,marginTop + 34.5,'ESTUDIANTE', false,true);             
        }

        function addData(){
        	r.setFontProperties(r.getRGBAObj(0,0,0,1),7,'helvetica','bold');
            for(var i=0; i<attribObj.list.length; i++){
                r.addText(16,marginTop + iniPos + hrData*(i), attribObj.list[i].substr(0,attribObj.lengthName), false,true);    
            }
                         
        }       

        var r = new Report('portrait');
        r.setNoRepeatHead();
        r.setFontProperties(r.getRGBAObj(0,0,0,1),15,'helvetica','bold');
        header();
        addData();              
        r.render();
        setTimeout(r.printPDF(),1000);
        
    };
    create();    
}
