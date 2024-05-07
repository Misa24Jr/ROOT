const menuPanels_ = new Map();
flex.PanelMenu = class extends flex.VisualComponent{
    constructor(options){
        super(options, 'PanelMenu', false);
        this.seed = 0,
        this.options = new Map();
        this.panel = this.vcContainer;
        this.elements = [this.panel];
        this.names = ['PanelMenu'];
        this.hasCssClass = true;
        // this.panel = new ToolPanel({
        //     id: 'toolPanel' + this.id,
        //     idxElement : 0,
        //     panelDirection: 'column',
        //     cssClass: {     
        //         width: this.objProperties.width || '200px',
        //         height: this.objProperties.height || 'auto',
        //         padding: '10px',
        //         borderRadius: '5px',
        //         overflow: 'visible',
        //         border: 'solid 1px #757575'
        //     }
        //   });
        menuPanels_.set(this.id, this);
        this.setProperties(options);
    }
    
    // addToBody(){
    //     document.body.appendChild(this.panel.getPanel());
    //     return this;
    // }
    
    addOption(item){
        let {typeIcon, title, child,id, link} = item;
        let section = document.createElement('section');
        let text = document.createElement('span');
        let cb =  new flex.ControlButton({
            id : 'cbItm' + this.id + this.seed,
            typeButton : typeIcon,
            idxElement: 0,
            cssClass: {
                width: '22px',
                height:' 22px',
            },
            _built:()=>{
                section.className = 'PanelMenuOption_css' + this.enviroment;
                text.className = 'PanelMenuText_css' + this.enviroment;
                text.textContent = title;
                section.appendChild(cb.getPanel());
                section.appendChild(text);
                if(child){
                    let cbChild = new flex.ControlButton({
                        id : 'cbChild' + this.id + this.seed,
                        typeButton : 'next',
                        idxElement: 0,
                        cssClass: {
                            width: '22px',
                            height:' 22px',
                        },
                        _built: ()=>{
                            section.appendChild(cbChild.getPanel());
                            let panelChild = menuPanels_.get(child);
                            section.appendChild(panelChild.getPanel());
                        }   
                    });
                }
                section.addEventListener('pointerenter',e=>{
                    if(section.children.length > 3){
                        section.children[3].style.visibility = 'visible';
                        
                    }
                })
                section.addEventListener('pointerleave',e=>{
                    if(section.children.length > 3){
                        section.children[3].style.visibility = 'hidden';
                    }
                })
                section.addEventListener('click', ()=> {
                    // this.hide();
                if(item.onClick) item.onClick();
                if(link) window.location.href = link;
                })
            }
        });
        
        
        this.seed++;
        this.options.set(id,section);
        this.panel.appendChild(section);
        return this;
    }

    getPanel(className){ 
        // let panel = this.panel.getPanel();
        this.panel.className = className ? className : 'PanelMenuOptionChild_css'+this.enviroment; 
        return this.panel;
    }

    deleteOption(id){
        let element = this.options.get(id);
        this.panel.children[0].removeChild(element);
        this.options.delete(id);
    }


    refreshProperties(prop){
		// ********************************** PROPIEDADES DEL CSS ***********************************
	prop.that = this;
		flex.propertyManager.refreshProperties(prop);
		let classObj=flex.controller.getObjClass(prop);
		if(classObj){for (var attrname in classObj) { this.objProperties[attrname] = classObj[attrname] };}
    }
}