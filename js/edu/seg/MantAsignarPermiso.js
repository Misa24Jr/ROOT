var dlgMantAsignarPermiso = new Object();
var pcMantAsignarPermisoPfl = new Object();
var pcMantAsignarPermisoMdl = new Object();
var checboxMantAsiPerAutChequeo = new Object();
var tvMantAsignarPermisoPfl = new Object();
var buttonMantAsignarPermisoModificar = new Object();
var buttonMantAsignarPermisoLimpiar = new Object();
var buttonMantAsignarPermisoSalir= new Object();
var mw_MantAsignarPermiso = new Object();// minWindow

var MantAsignarPermiso = {
	tvMantAsignarPermisoPfl_CntChk : 0,
    windowName : 'MantAsignarPermiso',
	isCreate : false,
	dc : new Object(),	  
	panelTreeView : new Object(),
	
	show : function() {
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
	    if (dlgMantAsignarPermiso.getSTS()!= dialogs.STS_SHOW) {
			this.limpiar();
	    }
	    dlgMantAsignarPermiso.show();
	},

	hide : function() {
		dlgMantAsignarPermiso.hide();
	},
	
	createMWs : function() {
		mw_MantAsignarPermiso = desktop.addMinWindow('Asignar Permiso','MantAsignarPermiso.show()','MantAsignarPermiso.hide()','MantAsignarPermiso.hide()');	
		dlgMantAsignarPermiso.setMinWindowEvent('mw_MantAsignarPermiso.hide()','mw_MantAsignarPermiso.disable()','mw_MantAsignarPermiso.show()');
	},

	initTreeview : function() {
	    tvMantAsignarPermisoPfl = treeviews.create("tvMantAsignarPermisoPfl", treeviews.TYPE_LAST_PLUS_FOLDER, "Permisologia");
	    tvMantAsignarPermisoPfl.setImagesOpenClose('iconarbol_2.png','iconarbol_1.png');
	    tvMantAsignarPermisoPfl.setObjAttrib(attrib, ambiente);
		tvMantAsignarPermisoPfl.setDimension(515, 540);
		tvMantAsignarPermisoPfl.setImagesOpenClose('iconarbol_2.png','iconarbol_1.png');
        var tableTreeView = this.getTable(5, 1, "tableTreeView");
        tableTreeView.rows[1].cells[0].appendChild(treeviews.getObject("tvMantAsignarPermisoPfl"));
        this.panelTreeView.addObjToPanel(tableTreeView);
        dlgMantAsignarPermiso.addObjToDialog(this.panelTreeView, 4, 1);
        dlgMantAsignarPermiso.addLn(5, 1, 1);
		dlgMantAsignarPermiso.setHeightCell(5,1,246);
    },
    
    dialogsMantAsignarPermiso_Init : function(){
		dlgMantAsignarPermiso.addObjToDialog(pcMantAsignarPermisoPfl,1,1,24);
		dlgMantAsignarPermiso.addObjToDialog(pcMantAsignarPermisoMdl,2,1,24);
		dlgMantAsignarPermiso.addObject(checboxMantAsiPerAutChequeo, 440, 65);
		dlgMantAsignarPermiso.addObjToDialog(buttonMantAsignarPermisoModificar,6,1);
		dlgMantAsignarPermiso.addObjToDialog(buttonMantAsignarPermisoLimpiar,6,1);
		dlgMantAsignarPermiso.addObjToDialog(buttonMantAsignarPermisoSalir,6,1);
		buttonMantAsignarPermisoModificar.setDimension(90,22);
		buttonMantAsignarPermisoLimpiar.setDimension(90,22);
		buttonMantAsignarPermisoSalir.setDimension(90,22);
		dlgMantAsignarPermiso.adjAllMarginObj(6,1,20);
		dlgMantAsignarPermiso.leftMarginObj(6,1,0,102);
    },

	create : function(){
		dlgMantAsignarPermiso = dialogs.create("dlgMantAsignarPermiso",1,1,564,650,"ASIGNAR PERMISO TRANSACCIONAL (PERFIL, MODULO Y MENU)");
		dlgMantAsignarPermiso.setAdjY(28);
		dlgMantAsignarPermiso.setCenterScreen();
		dlgMantAsignarPermiso.addSpace(0,0,20);
		dlgMantAsignarPermiso.addLn(0,0,1);
		dlgMantAsignarPermiso.setHeightCell(0,0,10);
		checboxMantAsiPerAutChequeo = checkBox.create('checboxMantAsiPerAutChequeo','Auto Chequeo',true);
		buttonMantAsignarPermisoModificar = imgButtons.create("buttonMantAsignarPermisoModificar",'Guardar','ok.png');
		buttonMantAsignarPermisoLimpiar = imgButtons.create("buttonMantAsignarPermisoLimpiar",'Limpiar','limpiar.png');
		buttonMantAsignarPermisoSalir = imgButtons.create("buttonMantAsignarPermisoSalir",'Salir','salir.png');
	},
	
	initPanel : function() {
		this.panelTreeView = SinglePanel.create('panelTreeView');
		this.panelTreeView.setObjAttrib(attrib, ambiente);
		this.panelTreeView.setDimension(440, 310);
		this.panelTreeView.setBorderWidth(0);
		this.panelTreeView.show();
	},
	
	initPowerCombo : function() {
		pcMantAsignarPermisoPfl = powerComboBox.create('pcMantAsignarPermisoPfl','pcMantAsignarPermisoPfl','Perfil (+): ',1,70);
		pcMantAsignarPermisoPfl.enableReadOnlyEditor();
		pcMantAsignarPermisoPfl.setWidthCombo(426);
		pcMantAsignarPermisoPfl.setValidEmpty();
		pcMantAsignarPermisoMdl = powerComboBox.create('pcMantAsignarPermisoMdl','pcMantAsignarPermisoMdl','Modulo (^): ',1,70);
		pcMantAsignarPermisoMdl.enableReadOnlyEditor();
		pcMantAsignarPermisoMdl.setWidthCombo(320);
		pcMantAsignarPermisoMdl.setValidEmpty();
		dlgMantAsignarPermiso.addLn(3, 1, 1);
		dlgMantAsignarPermiso.setHeightCell(3,1,5);
	},
	
	init : function() {
      this.create();
      this.initPanel();
      this.initPowerCombo();
	  this.initTreeview();
	  this.setEvents();
	  this.dialogsMantAsignarPermiso_Init();
	  this.createMWs();
	},
	
	setEvents : function() {
		  pcMantAsignarPermisoPfl.onChange("MantAsignarPermiso.resetElements('per')");
		  pcMantAsignarPermisoMdl.onChange("MantAsignarPermiso.resetElements('mod')");
		  checboxMantAsiPerAutChequeo.onClick("tvMantAsignarPermisoPfl.setCheckCascadeUpdate(checboxMantAsiPerAutChequeo.getChecked())");
		  buttonMantAsignarPermisoModificar.onClick("MantAsignarPermiso.coreUpdate('modificar')");
		  buttonMantAsignarPermisoLimpiar.onClick("MantAsignarPermiso.limpiar()");
		  buttonMantAsignarPermisoSalir.onClick("dlgMantAsignarPermiso.close()");
	},

    resetElements : function(element) {
    	if (element == 'per') {
    		Tool.rstPwrCmb(pcMantAsignarPermisoMdl);
    		this.limpiarTree();
	  		Tool.getPowerComboData('SecurityObject', 'getPerfilModulo', dlgMantAsignarPermiso, pcMantAsignarPermisoMdl, 0, 1, pcMantAsignarPermisoPfl);	  	
	  	}
		else if (element == 'mod') {
			this.limpiarTree();
    		MantAsignarPermiso.getPermisoPerfil();
	  	}
	},

	limpiarTree : function() {
		this.tvMantAsignarPermisoPfl_CntChk = 0;
		tvMantAsignarPermisoPfl.destroy();
		while (this.panelTreeView.firstChild) {
			this.panelTreeView.removeChild(this.panelTreeView.firstChild);
		}
		this.initTreeview();
		dlgMantAsignarPermiso.setMsg("");
	},
	
	limpiar : function() {
		Tool.rstPwrCmb(pcMantAsignarPermisoPfl);
		Tool.rstPwrCmb(pcMantAsignarPermisoMdl);
		this.limpiarTree();
       	Tool.getPowerComboData("SecurityObject", "getPerfilActivo", dlgMantAsignarPermiso, pcMantAsignarPermisoPfl, 0, 1);
	},

	getPermisoPerfil: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		rlx.add('reg',pcMantAsignarPermisoPfl);	
		rlx.add('reg',pcMantAsignarPermisoMdl);	
		Tool.cnnSrv('SecurityObject', 'getPermisoPerfil', this.windowName + '.loadPermisoPerfil()', rlx);
	},
	
	loadPermisoPerfil : function() {
		tvMantAsignarPermisoPfl.exchangeImgExpand();
		dlgMantAsignarPermiso.setMsg(xmlHttpReq.objStsResponse.shortInfo);
		dlgWait.hide();
	},
	
	getTable: function(f, c, id){
        var t = tables.create(id);
        for (var i = 0; i < f; i++) {
            t.insertRow(i);
            for (var j = 0; j < c; j++) 
                t.rows[i].insertCell(j);
        }
        return t;
    },
    
    asignarCheck : function(objTree) {
		for (var k = 0; k < objTree.items.length; k++) {
			check = treeviews.createHTMLElement('tvMantAsignarPermisoPfl_Chk' + this.tvMantAsignarPermisoPfl_CntChk, objTree.items[k], 'checkBox', 'input', '');
			check.idPmsMn = k;
			check.idMn = objTree.dsc;
			check.checked = objTree.pms[k];
			check.tpId = "mn";
			this.tvMantAsignarPermisoPfl_CntChk++;
			if (objTree.lvl == 'LBegin') {
				tvMantAsignarPermisoPfl.addNode(objTree.items[k], tvMantAsignarPermisoPfl.id, treeviews.TYPE_LAST_PLUS_FOLDER, objTree.items[k], check);
			}
			else if (objTree.lvl == 'LEnd' ) {
				check.id = objTree.id[k];
				check.tpId = "tn";
				if ((k < objTree.items.length - 1)) {
					if (objTree.asc[k] == objTree.asc[k + 1]) {
						tvMantAsignarPermisoPfl.addNode(objTree.items[k], objTree.asc[k], treeviews.TYPE_MORE_SIMPLE_TEXT, objTree.items[k], check);
					}
					else {
						tvMantAsignarPermisoPfl.addNode(objTree.items[k], objTree.asc[k], treeviews.TYPE_LAST_SIMPLE_TEXT, objTree.items[k], check);
					}
				}
				else {
					tvMantAsignarPermisoPfl.addNode(objTree.items[k], objTree.asc[k], treeviews.TYPE_LAST_SIMPLE_TEXT, objTree.items[k], check);
				}
			}
			else {
				check.id = objTree.id[k];
				if (objTree.id[k] > 0 || objTree.id[k] < 0) 
					tvMantAsignarPermisoPfl.addNode(objTree.id[k], objTree.asc[k], treeviews.TYPE_LAST_PLUS_FOLDER, objTree.items[k], check);
				else {
					if (objTree.asc[k] == objTree.asc[k + 1]) {
						tvMantAsignarPermisoPfl.addNode(objTree.id[k], objTree.asc[k], treeviews.TYPE_MORE_SIMPLE_TEXT, objTree.items[k]);
					}
					else {
						tvMantAsignarPermisoPfl.addNode(objTree.id[k], objTree.asc[k], treeviews.TYPE_LAST_SIMPLE_TEXT, objTree.items[k]);
					}
				}
			}
		}
	},

	coreUpdate : function(methodName) {
		var procesar = false;
		var rlx = xmlStructs.createRecordList("rlx");
		var id = "", idMn = "", idPmsMn = "";

  		if (pcMantAsignarPermisoPfl.valid(dlgMantAsignarPermiso))
			if (pcMantAsignarPermisoMdl.valid(dlgMantAsignarPermiso)) {
				for (var i = 0; i < this.tvMantAsignarPermisoPfl_CntChk; i++) {
					if (tvMantAsignarPermisoPfl.getHTMLElementById('tvMantAsignarPermisoPfl_Chk' + i).checked) {
						if (tvMantAsignarPermisoPfl.getHTMLElementById('tvMantAsignarPermisoPfl_Chk' + i).tpId == "tn") {
							id = id + tvMantAsignarPermisoPfl.getHTMLElementById('tvMantAsignarPermisoPfl_Chk' + i).id + ",";
						}
						else {
							idMn = idMn + tvMantAsignarPermisoPfl.getHTMLElementById('tvMantAsignarPermisoPfl_Chk' + i).idMn + ",";
							idPmsMn = idPmsMn + tvMantAsignarPermisoPfl.getHTMLElementById('tvMantAsignarPermisoPfl_Chk' + i).idPmsMn + ",";
						}
					}
				}
				rlx.add('reg', pcMantAsignarPermisoPfl);
				rlx.add('reg', pcMantAsignarPermisoMdl);
				rlx.addStr('reg', id);
				rlx.addStr('reg', idMn);
				rlx.addStr('reg', idPmsMn);
				procesar = true;		
			} 
		if (procesar) {            
			Tool.cnnSrv('SecurityObject', 'setPermisoPerfil', this.windowName + '.limpiar()', rlx);
        }
	}
};	
