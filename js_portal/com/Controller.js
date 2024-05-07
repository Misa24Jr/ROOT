var TYPE_STRING = 0;
var TYPE_INT = 1;
var TYPE_FLOAT = 2;
var TYPE_SELECT = 3;
var TYPE_RADIO = 4;
var TYPE_CHECK = 5;
var TYPE_TIME = 6;
var TYPE_DATE = 7;
var TYPE_PANEL = 8;

flex.Controller = class {
    constructor() {
        var that = this;
        this.mapCss = new Map();
        this._actValue = 0;
        this._maxValue = 0;
        this._callBackBuilder = () => {};
        this.loadedComponents = false;
        this.propertyObj = new Map();
        this.objects = new Map();
        this.detailClass = [];
        if (flex.propertyManager)
            this.addObject(flex.propertyManager);
        if (flex.include)
            this.addObject(flex.include);
    }

    resolution(pctX, pctY) {
        if (pctX && pctY) {
            return {
                width: document.body.clientWidth * pctX,
                height: document.body.clientHeight * pctY
            }
        } 
        else
            return {
                width: document.body.clientWidth,
                height: document.body.clientHeight
            }
    }

    isMobile() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }

    onLoad(files, extF) {
        var that = this;
        flex.propertyManager.load(files).then((sts)=>{
            that.loadedComponents = true;
            that.loadCssScripts();
            if (extF) {                        
                extF(sts);
            }
        });
        return this;
    }

    loadCssScripts(){
        return new Promise(async (rv, rj)=>{
            try{
                for(let i=0; i<flex.propertyManager._variablesCss.length; i++){                    
                    await flex.controller.createCSS(flex.varCss[flex.propertyManager._variablesCss[i]]);
                }                
                rv(true);
            }
            catch(e){
                console.log(e);
                rj(false);
            }
        });
    }

    setEnviroment(env) {
        flex.propertyManager.setActualEnv(env);
        return this;
    }

    addPropetyObj(prop) {
        this.propertyObj.set(prop.id, prop);
        return this;
    }

    getBoolean(value) {
        switch (value) {
            case true:
            case "true":
            case 1:
            case "1":
            case "on":
            case "yes":
                return true;
            default:
                return false;
        }
    }

    getHTMLElement(opt) {
        let def = {
            id: '',
            name: 'input',
            type: 'checkbox',
            backgroundColor: 'rgba(0,0,0,0)',
            color: 'black',
            position: 'absolute',
            x: 0,
            y: 0,
            width: 14,
            height: 14,
            borderWidth: 'thin',
            onClick: (ev) => {},
            onDblClick: (ev) => {},
            onMouseUp: (ev) => {},
            onMouseDown: (ev) => {},
            onMouseOver: (ev) => {},
            onMouseOut: (ev) => {},
            onMouseMove: (ev) => {},
            onKeyPress: (ev) => {},
            onKeyUp: (ev) => {},
            onKeyDown: (ev) => {}
        }
        for (var attrname in opt) { def[attrname] = opt[attrname] };
        let e = document.createElement(def.name);
        e.onclick = (ev) => { def.onClick(ev) }
        e.ondblclick = (ev) => { def.onDblClick(ev) }
        e.onmouseup = (ev) => { def.onMouseUp(ev) }
        e.onmousedown = (ev) => { def.onMouseDown(ev) }
        e.onmouseover = (ev) => { def.onMouseOver(ev) }
        e.onmouseout = (ev) => { def.onMouseOut(ev) }
        e.onmousemove = (ev) => { def.onMouseMove(ev) }
        e.onkeypress = (ev) => { def.onKeyPress(ev) }
        e.onkeyup = (ev) => { def.onKeyUp(ev) }
        e.onkeydown = (ev) => { def.onKeyDown(ev) }
        e.type = def.type;
        e.style.backgroundColor = def.backgroundColor;
        e.style.color = def.color;
        e.style.position = def.position;
        e.style.backgroundColor = def.backgroundColor;
        e.style.left = def.x + 'px';
        e.style.top = def.y + 'px';
        e.style.width = def.width + 'px';
        e.style.height = def.height + 'px';
        e.style.lineHeight = def.height + 'px';
        e.style.borderWidth = def.borderWidth;
        return e;
    }

    setCss(component, env, callBackFunct) {
        try {
            if (!env) {
                env = flex.propertyManager.actualEnv;
            }
            for(let i=0; i<component.elements.length; i++){   
                flex.controller.CSS({
                    method:'add',
                    element:component.elements[i],
                    className:component.names[i]+'_css'+env
                });
            }
            callBackFunct(true);            
        } catch (e) {
            if(properetyManeger){
                console.log('Alerta: El PropertyManager no se encuentra instanciado..!')
            }
            else{
                console.log(e);
            }
        }
    }

    replaceCSS(scriptCSS){
        let sty = document.getElementById('generalCssFlex');
        let oldScript = sty.innerHTML;
        var sheetParent = sty.parentNode;
        sheetParent.removeChild (sty);
        sty = document.createElement('style');
        sty.id = 'generalCssFlex';
        sty.innerHTML = scriptCSS;
        document.head.appendChild(sty);  
        return this;
    }

    createCSS(scriptCSS){
        let sty = document.getElementById('generalCssFlex');
        if(sty===null){
            sty = document.createElement('style');
            sty.id = 'generalCssFlex';
            sty.innerHTML = scriptCSS;
            document.head.appendChild(sty);    
        }
        else{
            let newScript = sty.innerHTML + scriptCSS;
            var sheetParent = sty.parentNode;
            sheetParent.removeChild (sty);
            sty = document.createElement('style');
            sty.id = 'generalCssFlex';
            sty.innerHTML = newScript;
            document.head.appendChild(sty);    
        }
        return this;
    }

    parseCSSText(cssText) {
        var cssTxt = cssText.replace(/\/\*(.|\s)*?\*\//g, " ").replace(/\s+/g, " ");
        var style = {}, [,ruleName,rule] = cssTxt.match(/ ?(.*?) ?{([^}]*)}/)||[,,cssTxt];
        var cssToJs = s => s.replace(/['"]+\w/g, match => match.slice(-1));
        var properties = rule.split(";").map(o => o.split(":").map(x => x && x.trim()));
        for (var [property, value] of properties) {
            if(value!=undefined)
                style[cssToJs(property)] = value;
        }
        return {cssText, ruleName, style};
    }

    getObjClass(prop, idxEle){
        let classObj=undefined;
        if(Array.isArray(prop.cssClass)){
            return undefined;
        }
        else{
            if(prop.cssClass){
                if(typeof prop.cssClass==='string'){
                    classObj = flex.controller.parseCSSText(prop.cssClass).style;
                    let obj = {};
                    let c=0;
                    for(let attr in classObj){
                        c++;
                        let newAttr='';
                        let arr = attr.split('-');
                        for(let i=0; i<arr.length; i++){
                            if(i===0)
                                newAttr+=arr[i];
                            else{
                                newAttr+=(arr[i].charAt(0)).toUpperCase()+arr[i].substr(1,arr[i].length);
                            }                        
                        }
                        obj[newAttr]=this.removePx(classObj[attr]);
                    }
                    classObj=obj;
                }
                else{
                    if(typeof prop.cssClass==='object'){
                        if(Array.isArray(prop.cssClass)){
                            if(idxEle)                        
                                classObj= prop.cssClass[idxEle];
                            else
                                classObj= prop.cssClass[0];
                        }
                        else
                            classObj= prop.cssClass;
                    }
                    else
                        return undefined;
                }
                for(let attr in classObj){
                    if(classObj[attr].length > 2){
                        if(classObj[attr].substr(classObj[attr].length-2)==='px'){
                            let a = classObj[attr].split('px');
                            if(a.length === 2) classObj[attr] =  parseInt(flex.controller.removePx(classObj[attr]),10);
                        }
                    }
                }
                return classObj;
            }
            else
                return undefined;
        }
    }

    CSS(objCSS){
        if(objCSS.method === 'add')
            objCSS.element.classList.add(objCSS.className);
        if(objCSS.method === 'toggle')
            objCSS.element.classList.toggle(objCSS.className);
        if(objCSS.method === 'remove')
            objCSS.element.classList.remove(objCSS.className);
        if(objCSS.method === 'replace')
            objCSS.element.classList.add(objCSS.className,objCSS.newClassName);
        if(objCSS.method === 'contains')
            return objCSS.element.classList.contains(objCCSS.className);
        return this;
    }

    toggleCss(element, styleSheet){
        element.classList.toggle(styleSheet);
        return this;
    }

    removeCss(element, styleSheet){
        element.classList.remove(styleSheet);
        return this;
    }

    setParamsBuilt(maxValue, callBack) {
        this._maxValue = maxValue;
        this._callBackBuilder = callBack;
    }

    cleanParamsBuilt() {
        this._maxValue = 0;
        this._actValue = 0;
        this._callBackBuilder = () => {};
    }

    removePx(txt) {
        txt = '' + txt;
        if (txt.charAt(txt.length - 1) === 'x' && txt.charAt(txt.length - 2) === 'p')
            return txt.substr(0, txt.length - 2);
        else
            return txt;
    }

    getDetailClass(objName) {
        return this.detailClass[objName];
    }

    notifyBuilt(obj) {
        obj.notify = true;
        this._actValue++;
        this.detailClass[obj.name].notified++;
        this.detailClass[obj.name].difference = this.detailClass[obj.name].created - this.detailClass[obj.name].notified;
        if (this._actValue === this._maxValue) {
            this.cleanParamsBuilt();
            this._callBackBuilder();
            for (var inst of this.objects.values()) {
                if (inst.id === obj.id)
                    inst.notify = obj.notify;
                if (typeof inst.allBuilt === 'function' && inst.notified === false) {
                    if (!inst.notified && inst.notify) {
                        inst.allBuilt(inst);
                        inst.notified = true;
                    }
                }
            }
        }
    }

    setCssElement(element, name, env, callBackFunction) {
        flex.propertyManager.loadCssFiles().then((sts) => {
            if (sts != undefined) {
                element.className = name + '_css' + env;
                if (callBackFunction)
                    callBackFunction();
            }
        });
    }

    setAllCss(env) {
        if (env)
            flex.propertyManager.setActualEnv(env);
        for (var [clave, component] of this.objects) {
            if (component.objProperties.type === 'visual') {
                this.setCss(component);
            }
        }
    }

    addObject(obj, id) {
        if (id !== undefined && id !== '' && id !== null) {
            if (!this.objects.get(id)) {
                if (id)
                    obj.id = id;
                obj.notified = false;
                obj.notify = false;
                this.objects.set(obj.id, obj);
                if (this.detailClass[obj.name] === undefined) {
                    this.detailClass[obj.name] = {
                        created: 1,
                        notified: 0,
                        difference: 1,
                        class: obj.name,
                        instances: [obj],
                        ids: [obj.id]
                    }
                } else {
                    this.detailClass[obj.name].created++;
                    this.detailClass[obj.name].instances.push(obj);
                    this.detailClass[obj.name].ids.push(obj.id);
                }
                this._maxValue++;
            }
        }
        return this;
    }

    getPropertyObj(id) {
        return this.propertyObj.get(id);
    }

    getObject(id) {
        try {
            let obj = this.objects.get(id);
            return obj
        } catch (e) {
            return null;
        }
    }
}