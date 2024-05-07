flex.Select = class extends flex.VisualComponent{
    constructor(options) {
        super(options, 'Select');
        var that = this;
        this.select = document.createElement('select');
        this.elements = [this.select];
        this.names = ['Select'];
        this.hasCssClass = true;
        this.isShow = true;
        this.setProperties(options);
    }//FIN DEL CONSTRUCTOR
    
    refreshProperties(prop) {
        // *************** PROPIEDADES DEL CSS ******************
		prop.that = this;
		flex.propertyManager.refreshProperties(prop);
        let classObj=flex.controller.getObjClass(prop);
        if(classObj){for (var attrname in classObj) { this.objProperties[attrname] = classObj[attrname] };}
		// ******************************************************

        //************************** CARGA OBJETO DE PROPIEDADES DE ESTILO *************************
        this.select.innerHTML = '';
        for (var attrname in prop) { this.objProperties[attrname] = prop[attrname] };                
        this.options = this.objProperties;
        if ('disable' in prop){
            this.objProperties.disable = prop.disable;
        }
        this.select.opts = [];
        this.select.values = this.objProperties.values;
        this.select.opts.length = 0;
        for (var i = 0; i < this.objProperties.options.length; i++) {
            this.select.opts[i] = document.createElement('option');
            this.select.opts[i].text = this.objProperties.options[i];
            this.select.add(this.select.opts[i]);
            if (i + 1 > this.objProperties.values.length)
                this.objProperties.values[i] = '';
        }      
        this.select.disabled = this.objProperties.disabled;
        return this;
    }

    getObject() {return this;}
    getValues() {return this.objProperties.values;}
    clean() {this.select.value = '';return this;}
    getOptions() {return this.objProperties.options;}
    showOption(index) {this.select.value = this.objProperties.options[index];return this;}
    getItemIndex() {return this.select.selectedIndex;}
    size() {return this.objProperties.options.length;}
    setFocus(){this.select.focus();return this;}

    getValue(index) {
        if (index!=undefined && index!=null)
            return this.objProperties.values[index];
        else
            return this.objProperties.values[0];
    }

    setValue(index, value) {
        this.objProperties.values[index] = value;
        this.setProperties(this.objProperties);
        return this;
    }

    removeOption(index) {
        if (index) {
            this.select.remove(index)
            this.select.opts.splice(index, 1);
            this.objProperties.values.splice(index, 1);
            this.objProperties.options.splice(index, 1);
        } else {
            this.select.remove(0);
            this.select.opts.splice(0, 1);
            this.objProperties.values.splice(0, 1);
            this.objProperties.options.splice(0, 1);
        }
        return this;
    }

    clear() {
        let tot = this.select.opts.length;
        for (var i = 0; i < tot; i++) {
            this.clean();
            this.removeOption(0);
        }
        return this;
    }

    getOption(index) {
        if (index >= 0) {
            return this.objProperties.options[index];
        } else {
            return this.select.value;
        }
    }

    setOption(index, option) {
        this.objProperties.options[index] = option;
        this.refreshProperties(this.objProperties);
        return this;
    }

    addOption(opt, value) {
        this.objProperties.options.push(opt);
        if (value != undefined && value != null)
            this.objProperties.values.push(value);
        else
            this.objProperties.values.push('');
        this.refreshProperties(this.objProperties);        
        return this;
    }
}