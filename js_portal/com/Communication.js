var CONTENT_TYPE_JSON = 'application/json';
var CONTENT_TYPE_MULTIPART = 'multipart/form-data boundary=aA40';
var CONTENT_TYPE_TEXT_PLAIN = 'text/plain';
var CONTENT_TYPE_TEXT_HTML = 'text/html';
var CONTENT_TYPE_IMAGE = 'image/[png, jpeg, gif]';
var CONTENT_TYPE_AUDIO_MPEG = 'audio/mpeg';
var CONTENT_TYPE_AUDIO_OGG = 'audio/ogg';
var CONTENT_TYPE_AUDIO = 'audio/*';
var CONTENT_TYPE_AUDIO_WAV = 'audio/wav';
var CONTENT_TYPE_VIDEO = 'video/mp4';
var CONTENT_TYPE_APP_OCTEC_STREAM = 'application/octec-stream';
var CONTENT_TYPE_PDF = 'application/pdf';

flex.Communication = class {
    constructor(options) {
        window.msg = new flex.MessageBox({
            id: '_messageBox_flex',
            centerScreen: true,
            width: 350,
            height: 120,
            message: '',
            type: 'info',
            title: 'Mensaje del Sistema',
            zIndex: 1000,
            _built: () => {
                msg.addToBody();
                msg.hide();
            }
        });
        this.inputFile = document.createElement('input');
        this.inputFile.type = 'file';
        this.inputFile.name = 'flex_i_file';
        var that = this;
        this.data = new Map();
        this.formData = new FormData();
        this.objProperties = {
            url: 'http://localhost',
            urlUpload: 'http://localhost/upload',
            method: 'post',
            mode: 'cors',
            contentType: null,
            cache: 'no-cache',
            credentials: "same-origin",
            referrerPolicy: 'no-referrer'
        }
        for (var attrname in options) { this.objProperties[attrname] = options[attrname] };
    }

    send(prop, callBackFunction) {
        var that = this;
        for (var attrname in prop) { that.objProperties[attrname] = prop[attrname] };
        if (that.objProperties.contentType != null) {
            that.objProperties.headers = { 'Content-Type': that.objProperties.contentType };
            fetch(that.objProperties.url, {
                    method: that.objProperties.method,
                    mode: that.objProperties.mode,
                    headers: that.objProperties.headers,
                    body: that.objProperties.body,
                    cache: that.objProperties.cache,
                    credentials: that.objProperties.credentials,
                    referrerPolicy: that.objProperties.referrerPolicy
                })
                .then(r => { return r.text(); })
                .then(datos => {
                    let d = JSON.parse(datos);
                    //PROCESAMIENTO DE RESPUESTA, LLAMADA A FUNCION CALL-BACK CON LOS DATOS
                    if (d.sts) {
                        callBackFunction(d);
                    }
                    //PROCESAMIENTO DE ERRORES EN LA RESPUESTA A LA SOLICITUD
                    else {
                        msg.setMesage({ message: d.msg, type: 'error' });
                    }
                });
        } else {
            fetch(that.objProperties.url, {
                    method: that.objProperties.method,
                    mode: that.objProperties.mode,
                    body: that.objProperties.body,
                    cache: that.objProperties.cache,
                    credentials: that.objProperties.credentials,
                    referrerPolicy: that.objProperties.referrerPolicy
                })
                .then(r => { return r.text(); })
                .then(datos => {
                    let d = JSON.parse(datos);
                    //PROCESAMIENTO DE RESPUESTA, LLAMADA A FUNCION CALL-BACK CON LOS DATOS
                    if (d.sts) {
                        callBackFunction(d);
                    }
                    //PROCESAMIENTO DE ERRORES EN LA RESPUESTA A LA SOLICITUD
                    else {
                        msg.setMesage({ message: d.msg, type: 'error' });
                    }
                })
        }
        return this;
    }

    getFormData() {
        return this.formData;
    }

    clearFormData() {
        for (var key of this.formData.keys()) {
            this.formData.delete(key);
        };
        return this;
    }

    addToFormData(key, value) {
        this.formData.append(key, value);
        return this;
    }

    getInputFileName() {
        return this.inputFile.name;
    }

    showInputFile(objElement, onLoadedFile) {
        var defaults = {
            element: null,
            position: 'absolute',
            bgText: 'rgba(0,0,0,0)',
            x: 0,
            y: 0
        }
        for (var attrname in objElement) { defaults[attrname] = objElement[attrname] };
        objElement.element.appendChild(this.inputFile);
        this.inputFile.onloadedfile = onLoadedFile;
        this.inputFile.style.position = defaults.position;
        this.inputFile.style.left = defaults.x + 'px';
        this.inputFile.style.top = defaults.y + 'px';
        this.inputFile.style.backgroundColor = defaults.bgText;
        //this.inputFile.style.display = 'none';

        return this;
    }

    uploadFile(container, callBack, sts) {
        var defaults = {
            element: null,
            position: 'absolute',
            x: 0,
            y: 0,
            clearFormData: false,
            typeFile: ''
        }
        var that = this;
        var ret = null;
        var url_old = that.objProperties.url;
        var content_Type_old = that.objProperties.contentType;
        if (sts)
            this.clearFormData();
        this.showInputFile(container, () => {
            that.addToFormData(that.getInputFileName(), that.getFile())
            that.send({
                url: that.objProperties.urlUpload,
                contentType: null,
                body: that.getFormData()
            }, (dat) => {
                callBack(dat);
                that.objProperties.url = url_old;
                that.objProperties.contentType = content_Type_old;
            });
        });
    }

    sendFile() {
        if (this.inputFile.files[0] != null && this.inputFile.files[0] != undefined)
            this.inputFile.onloadedfile();
        else
            console.log("ERROR: No se ha cargado archivo para enviar..!")
        return this;
    }

    getFile() {
        return this.inputFile.files[0];
    }

    clearParams() {
        this.data.clear();
        return this;
    }

    getJson() {
        let obj = {};
        this.data.forEach(function(value, key) {
            obj[key] = value
        });
        return obj;
    }

    getStrJson() {
        return JSON.stringify(this.getJson());
    }

    addParam(name, value) {
        if (typeof name === 'object') {

            for (var attrname in name) {
                this.data.set(attrname, name[attrname]);
            };
        } else {
            this.data.set(name, value);
        }
        return this;
    }
}