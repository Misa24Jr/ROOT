var totalInclude = 0;
window.flex={
    pathComponent : 'js_portal/com/',
    pathCss : 'js_portal/css/',
    varCss : {},
    reqComp : {},
    include : {},
    propertyManager : {},
    controller : {},
    doc : {},
    init : ()=>{console.log('Funcion flex.init no definida..!')},
    comm : {}
};

    Include = class {
    constructor(options) {
        var that = this;
        this.id = 'Include';
        this.script = new Map();
    }

    async load(fileName) {
        return await this.require(fileName);
    }

    requireAll(options, sts) {
        var that = this;
        return new Promise((resolve, reject)=> {
            if (options) {
                for (let i = 0; i < options.objects.length; i++) {
                    if(sts){
                        that.load(options.objects[i]).then((value) => {                            
                            if (value === 0){
                                resolve(totalInclude);
                            }
                        });
                    }
                    else{
                       if(flex.propertyManager.compExists(options.objects[i])){
                            that.load(options.objects[i]).then((value) => {                            
                                if (value === 0){
                                    resolve(totalInclude);
                                }
                            });
                       }
                       else{
                            console.log('Clase no cargada:'+options.objects[i]);
                       }
                    }
                }
            } 
            else
                resolve(true);
        });
    }

    require(file) {
        if (file) {
            var that = this;
            return new Promise(function(resolve, reject) {
                    if (!document.getElementById(file)) {
                        totalInclude++;
                        that.script.set(file, document.createElement("script"));
                        var element = that.script.get(file);
                        element.setAttribute("src", file + '.js');
                        element.setAttribute("type", "text/javascript");
                        element.setAttribute("id", file);
                        element.setAttribute("language", 'JavaScript');
                        document.getElementsByTagName("head")[0].appendChild(element);
                        element.onload = function() {
                            totalInclude--;
                            if (totalInclude == 0) {
                                resolve(totalInclude);
                            }
                        }
                    } else {
                        resolve(totalInclude);
                    }
                });
        }
    }
} // END CLASS INCLUDE

//INSTANCIAS GLOBALES
flex.include = new Include();
var require = (path, clase, cbf) => {
    if (typeof path === 'object') {
        flex.include.require(path.path + path.clase).then(() => {
            var inst = eval("new " + path.clase + "()");
            inst.built = () => {
                path.callBack(inst);
            }
        })
    } else {
        flex.include.require(path + clase).then(() => {
            var inst = eval("new " + clase + "()");
            inst.built = () => {
                cbf(inst);
            }
        })
    }
}

flex.include.id = 'Include';
flex.include.name = 'Include';
flex.include.requireAll({ objects: [flex.pathComponent+'RequiredComponents',
                               flex.pathComponent+'VisualComponent',
                               flex.pathComponent+'PropertyManager', 
                               flex.pathComponent+'Controller', 
                               flex.pathComponent+'Document',
                               flex.pathComponent+'Communication'] }, true).then((sts) => {
    flex.controller = new flex.Controller();
    flex.doc = new flex.Document();
    flex.propertyManager = new flex.PropertyManager();
    flex.propertyManager.id = 'PropertyManager_';
    flex.controller.onLoad([], (sts) => {
        window.onload = ()=>{
            flex.comm = new flex.Communication();
            if (typeof flex.init === 'function') {
                flex.init();
            } else {
                console.log('ALERTA: La funcion init() no fue definida..!');
        }}
    });
});

