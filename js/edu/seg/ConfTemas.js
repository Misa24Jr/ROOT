var dialogsConfTemas = new Object();
var powerComboBoxConfTemAmbiente = new Object();
var imgButtonsConfTemConfigurar = new Object();
var imgButtonsConfTemSalir = new Object();
var mw_ConfTemas = new Object();// minWindow

var ConfTemas = {
    windowName : 'ConfTemas',
    isCreate: false,
    
    show: function() {
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsConfTemas.isByClean()) {
        	dialogsConfTemas.showModal();
        	powerComboBoxConfTemAmbiente.findOption(ambiente);
        }
    },
	
    hide: function() {
        dialogsConfTemas.hide();
    },
    
    createMWs: function() {
        mwConfTemas = desktop.addMinWindow('C.Temas', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsConfTemas.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsConfTemas_Init : function() {
        dialogsConfTemas.setMinimizeXY(0,0);
        dialogsConfTemas.setCenterScreen();
        dialogsConfTemas.addSpace(0,0,20);
        dialogsConfTemas.addLn(1,1,1);
	dialogsConfTemas.setHeightCell(1,1,13);
	dialogsConfTemas.addObjToDialog(powerComboBoxConfTemAmbiente,2,1,24);
	powerComboBoxConfTemAmbiente.setWidthCombo(190);
	powerComboBoxConfTemAmbiente.addOptionAndSimpleValue(null, 'DIA','1');
	powerComboBoxConfTemAmbiente.addOptionAndSimpleValue(null, 'NOCHE','2');
	//powerComboBoxConfTemAmbiente.addOptionAndSimpleValue(null, 'ESCRITORIO_3','4');
	//powerComboBoxConfTemAmbiente.addOptionAndSimpleValue(null, 'ESCRITORIO_4','0');
	//powerComboBoxConfTemAmbiente.addOptionAndSimpleValue(null, 'ESCRITORIO_5','3');
	//powerComboBoxConfTemAmbiente.addOptionAndSimpleValue(null, 'ESCRITORIO_6','5');
	//powerComboBoxConfTemAmbiente.addOptionAndSimpleValue(null, 'ESCRITORIO_7','6');
	//powerComboBoxConfTemAmbiente.addOptionAndSimpleValue(null, 'ESCRITORIO_8','7');
	//powerComboBoxConfTemAmbiente.addOptionAndSimpleValue(null, 'AERO','9');
	//powerComboBoxConfTemAmbiente.addOptionAndSimpleValue(null, 'INSTITUCIONAL','8');
		
		
        dialogsConfTemas.addLn(3,1,1);
	dialogsConfTemas.setHeightCell(3,1,10);
	dialogsConfTemas.addObjToDialog(imgButtonsConfTemConfigurar,4,1);
    	imgButtonsConfTemConfigurar.setDimension(90,22);
        dialogsConfTemas.addObjToDialog(imgButtonsConfTemSalir,4,1);
    	imgButtonsConfTemSalir.setDimension(90,22);
        dialogsConfTemas.adjAllMarginObj(4,1,20);
        dialogsConfTemas.leftMarginObj(4,1,0,30); 
    },
  
    create : function() {
    	dialogsConfTemas = dialogs.create('dialogsConfTemas',0,0,300,84,'CONFIGURAR TEMAS');
    	dialogsConfTemas.setAdjY(80);
    	powerComboBoxConfTemAmbiente = powerComboBox.create('powerComboBoxConfTemAmbiente','powerComboBoxConfTemAmbiente','Tema:',1,49);
    	powerComboBoxConfTemAmbiente.enableReadOnlyEditor();
    	powerComboBoxConfTemAmbiente.addEmptyOption();
    	powerComboBoxConfTemAmbiente.setValidEmpty();
      	imgButtonsConfTemConfigurar = imgButtons.create('imgButtonsConfTemConfigurar','Guardar.','ok.png');
      	imgButtonsConfTemSalir = imgButtons.create('imgButtonsConfTemSalir','Salir','salir.png');
	},

	init : function() {
		this.create();
		this.setEvents(); 
		this.dialogsConfTemas_Init();
		this.createMWs();
	},
	
	setEvents: function() {
		imgButtonsConfTemConfigurar.onClick("ConfTemas.aplicarCambio()");
        imgButtonsConfTemSalir.onClick("dialogsConfTemas.close()");
    },
	
    aplicarCambio: function() {
		if (powerComboBoxConfTemAmbiente.valid(dialogsConfTemas))
			this.coreUpdate('modificar');
    },
    
	coreUpdate: function() {
		var rlx = xmlStructs.createRecordList("rlx");
		try{
			ambiente = powerComboBoxConfTemAmbiente.getText();
			//attrib.setActualEnv(ambiente);
			attrib.reloadAllAttrib(dialogs, ambiente);
			attrib.reloadAllAttrib(powerComboBox, ambiente);
			attrib.reloadAllAttrib(grids, ambiente);
			//attrib.reloadAllAttrib(edits, ambiente);
			attrib.reloadAllAttrib(calendars, ambiente);
			attrib.reloadAllAttrib(treeviews, ambiente);
			attrib.reloadAllAttrib(exchangeList, ambiente);
			attrib.reloadAllAttrib(labels, ambiente);
			attrib.reloadAllAttrib(customGrid, ambiente);
			if (typeof(window['tablesCreCurInformacion'])!='undefined'){		
			  tablesCreCurInformacion.setObjAttrib(attrib, ambiente);
			  tablesCreCurInformacion.rows[0].cells[0].style.backgroundColor = attrib.Color.bgBarraTitle[ambiente]; 
	          tablesCreCurInformacion.rows[0].cells[1].style.backgroundColor = attrib.Color.bgBarraTitle[ambiente];
			}
	  		if(typeof(window['tablesCreCurHorario'])!='undefined'){
			  tablesCreCurHorario.setObjAttrib(attrib, ambiente);
			  for(var i=0; i<8; i++)
	             tablesCreCurHorario.rows[0].cells[i].style.backgroundColor = attrib.Color.bgBarraTitle[ambiente]; 
	          for(var cx=1; cx < tablesCreCurHorario.rows.length; cx++)
	          {
	          	if(cx % 2)
	          	  tablesCreCurHorario.setAttrRow(cx,'bgColor',attrib.Color.evenRow[ambiente])
	            else
	              tablesCreCurHorario.setAttrRow(cx,'bgColor',attrib.Color.oddRow[ambiente]);
	          }
			}
			if(typeof(window['tablesDispProfesor'])!='undefined')
			  for(var i=0; i<8; i++)
			    tablesDispProfesor.rows[0].cells[i].style.backgroundColor = attrib.Color.bgBarraTitle[ambiente];
		}
		catch(e){
			//no hacer nada
		}
		rlx.add('reg', powerComboBoxConfTemAmbiente);
		Tool.cnnSrv("SecurityObject", "modificarTema", "json('desk').init();dialogsConfTemas.close()", rlx);
	}
};
