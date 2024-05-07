var dialogsConsBiblio  			= {};
var pcbConsBiblioCat           	= {};
var editsConsBiblioAutor   		= {};
var editsConsBiblioTitulo  		= {};
var gridsConsBiblio    			= {};
var imgButtonsConsBiblioBuscar	= {};
var imgButtonsConsBiblioLimpiar = {};
var imgButtonsConsBiblioSalir	= {};
var mwConsultaBiblio			= {};// minWindow

var ConsultaBiblio = {
	windowName : 'ConsultaBiblio',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
		  this.init();
		  this.isCreate = true;
		}

		if (dialogsConsBiblio.isByClean())
 			this.limpiar();			
		dialogsConsBiblio.show();
	},
	
	hide : function() {
		dialogsConsBiblio.hide();
	},
	
	createMWs : function() {
		mwConsultaBiblio = desktop.addMinWindow('Cons. Biblio.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsConsBiblio .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsConsBiblio_Init : function() {
        dialogsConsBiblio.setMinimizeXY(0,0);
        dialogsConsBiblio.setCenterScreen();		
		dialogsConsBiblio.addObject(pcbConsBiblioCat,20,32);
		dialogsConsBiblio.addObject(editsConsBiblioAutor,20,57);
		dialogsConsBiblio.addObject(editsConsBiblioTitulo, 20,82);		
		dialogsConsBiblio.addObject(gridsConsBiblio.getObject(),20,107);
		dialogsConsBiblio.addObject(imgButtonsConsBiblioBuscar,203,547);	
		dialogsConsBiblio.addObject(imgButtonsConsBiblioLimpiar,343,547);		
        dialogsConsBiblio.addObject(imgButtonsConsBiblioSalir,483,547);        
	},
	
	gridsConsBiblio_Init : function() {
        gridsConsBiblio.setFixColRow(false,true);
        gridsConsBiblio.addTitleVectorX(['Categoría','Autor/Editor','Título/Palabra Clave','link','cat']);
        gridsConsBiblio.showData();
        gridsConsBiblio.setReadOnlyToAll();
        gridsConsBiblio.setSizeCol(1,88);
		gridsConsBiblio.setSizeCol(2,200);
		gridsConsBiblio.setSizeCol(3,469);
		gridsConsBiblio.setSizeCol(4,0);
        gridsConsBiblio.hideCol(4);
		gridsConsBiblio.setSizeCol(5,0);
        gridsConsBiblio.hideCol(5);
	},
	
	create : function() {
		dialogsConsBiblio = dialogs.create('dialogsConsBiblio',0,0,801,555,'CONSULTA BIBLIOGRÁFICA');
		dialogsConsBiblio.setAdjY(37);
		pcbConsBiblioCat = powerComboBox.create('pcbConsBiblioCat', 'pcbConsBiblioCat', 'Categoría:', 1,130);
		pcbConsBiblioCat.setWidthCombo(134);
		pcbConsBiblioCat.enableReadOnlyEditor();
		pcbConsBiblioCat.setFieldFind(true);
		pcbConsBiblioCat.addEmptyOption();
		pcbConsBiblioCat.setValidEmpty();
		editsConsBiblioAutor = edits.create('editsConsBiblioAutor','editsConsBiblioAutor','Autor/Editor:',1,130,'normal');
		editsConsBiblioAutor.setValidEmpty();		
		editsConsBiblioAutor.setSizeEdit(465);
		editsConsBiblioAutor.setMaxLength(150);
		editsConsBiblioAutor.setFieldFind(true);
		editsConsBiblioTitulo = edits.create('editsConsBiblioTitulo','editsConsBiblioTitulo','Título/Palabra Clave:',1,130,'normal');
		editsConsBiblioTitulo.setValidEmpty();		
		editsConsBiblioTitulo.setSizeEdit(630);
		editsConsBiblioTitulo.setMaxLength(300);
		editsConsBiblioTitulo.setFieldFind(true);
		gridsConsBiblio = grids.create('gridsConsBiblio',20,5);		
		imgButtonsConsBiblioBuscar = imgButtons.create('imgButtonsConsBiblioBuscar','Buscar','icono_buscar.png');				
		imgButtonsConsBiblioLimpiar = imgButtons.create('imgButtonsConsBiblioLimpiar','Limpiar','limpiar.png');			
		imgButtonsConsBiblioSalir = imgButtons.create('imgButtonsConsBiblioSalir','Salir','salir.png');		
        imgButtonsConsBiblioBuscar.setDimension(110,22);
        imgButtonsConsBiblioLimpiar.setDimension(110,22);
        imgButtonsConsBiblioSalir.setDimension(110,22);
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsConsBiblio_Init();
		this.gridsConsBiblio_Init();
		this.createMWs(); 
	},
	
	setEvents : function() {
		editsConsBiblioAutor.onEnter(this.windowName + ".buscar()");
		editsConsBiblioTitulo.onEnter(this.windowName + ".buscar()");
		gridsConsBiblio.onClickCells(this.windowName + ".getTrans()");
    	imgButtonsConsBiblioBuscar.onClick(this.windowName + ".buscar()");				
    	imgButtonsConsBiblioLimpiar.onClick(this.windowName + ".limpiar()");				
  		imgButtonsConsBiblioSalir.onClick('dialogsConsBiblio.close()');
  	},

	getTrans : function() {
		if (gridsConsBiblio.getDataCell(1) != "") {
			if (gridsConsBiblio.getDataCell(4).substring(0, 4) != 'http')
				window.open("biblio/" + gridsConsBiblio.getDataCell(4),'_blank','left=10,top=80,Height=1,width=600,toolbar=no,location=no,status=no,menubar=no,resizable=yes,scrollbars=yes');
			else
				window.open(gridsConsBiblio.getDataCell(4));
		}
	},
	
  	buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");
 
		if (pcbConsBiblioCat.getOption() != '' || editsConsBiblioAutor.getValue() != '' || editsConsBiblioTitulo.getValue() != '') {
			if (editsConsBiblioAutor.getValue() != '' || editsConsBiblioTitulo.getValue() != '') {
				gridsConsBiblio.clean();	
	    		Tool.getGridData('MsjObject', 'getBibliografia', dialogsConsBiblio, gridsConsBiblio, false, pcbConsBiblioCat, pcbConsBiblioCat, editsConsBiblioAutor, editsConsBiblioAutor, editsConsBiblioTitulo, editsConsBiblioTitulo);
			}
			else {
				editsConsBiblioAutor.valid(dialogsConsBiblio);
				editsConsBiblioTitulo.valid(dialogsConsBiblio);
			}
		}
		else {
			pcbConsBiblioCat.valid(dialogsConsBiblio);
			editsConsBiblioAutor.valid(dialogsConsBiblio);
			editsConsBiblioTitulo.valid(dialogsConsBiblio);
		}
   	},
	
  	limpiar : function() {
		pcbConsBiblioCat.clear();
		editsConsBiblioAutor.clear();
		editsConsBiblioTitulo.clear();
		gridsConsBiblio.clean();
  		dialogsConsBiblio.setMsg("");
		Tool.getPowerComboData('MsjObject', 'getBiblioCategoria', dialogsConsBiblio, pcbConsBiblioCat, 0, 1);
	}
};