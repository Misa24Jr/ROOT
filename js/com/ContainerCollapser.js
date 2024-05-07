var ContainerCollapser = class{
	constructor(options) {
		var that = this;
        this.containerCollapser = document.createElement('table');
		this.divContainerCollapser = document.createElement('div');
		this.divContainerCollapser.appendChild(this.containerCollapser);
        this.id = '';        
        this.objProperties = {
            x : 0,
            y : 0,
			width : 300,
			height : 300,
			overflowX : 'hidden',
            overflowY : 'auto',
            position : 'absolute',
            backgroundColor : 'rgba(0,0,0,0)'
        }
        //ACTUALIZA EL ID
        try{
            if(options)
                if(options.id)
                    this.id=options.id;
        }
        catch(e){
            console.log('ERROR:',e);
        }
		this.setProperties(options);		
	}//********************** End Constructor ************************	
	
	setProperties(prop){
		for(var attrname in prop) {this.objProperties[attrname] = prop[attrname]}; 
        this.containerCollapser.setAttribute("border","0");
	    this.containerCollapser.setAttribute("cellPadding","0");
        this.containerCollapser.setAttribute("cellSpacing","0");
        this.containerCollapser.style.position = 'relative';
        //this.containerCollapser.style.left = '10px';
        //this.containerCollapser.style.top = '10px';
        this.divContainerCollapser.style.display = 'block';
        this.divContainerCollapser.style.position = this.objProperties.position;
		this.divContainerCollapser.style.width = this.objProperties.width+'px';
        this.divContainerCollapser.style.height = '0px';
		this.divContainerCollapser.style.overflowX = this.objProperties.overflowX;
        this.divContainerCollapser.style.overflowY = this.objProperties.overflowY;
        this.divContainerCollapser.style.backgroundColor = this.objProperties.backgroundColor;
        this.divContainerCollapser.style.transition = 'all 0.3s';
        this.setPosition(this.objProperties.x, this.objProperties.y);
        this.divContainerCollapser.style.height = this.objProperties.height+'px';
		return this;
    }
    
    addObject(obj){
        let idx = this.containerCollapser.rows.length;
        this.containerCollapser.insertRow(idx);
        this.containerCollapser.rows[idx].insertCell(0);
        this.containerCollapser.rows[idx].cells[0].appendChild(obj);
        return this;
    }	
	
	getObject(){
		return this.divContainerCollapser;
	}
		
	setPosition(x,y){
        this.objProperties.x = x;
        this.objProperties.y = y;
		this.divContainerCollapser.style.left = this.objProperties.x + 'px';
		this.divContainerCollapser.style.top = this.objProperties.y + 'px';
		return this;
	}
	
	getPosition(){
		return {
			x : this.x,
			y : this.y
		}
	}
	
	addToBody(){ 
		document.body.appendChild(this.divContainerCollapser);
		return this; 
	}	 
}