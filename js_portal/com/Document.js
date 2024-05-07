flex.Document = class {
  constructor() {
    this.doc = document;
    this.elements = new Map;
    this.layers = new Map();
    this.screenWidth = window.screen.width;
    this.screenHeight = window.screen.height;
  }

  addHTML(scriptHTML) { this.doc.body.innerHTML += scriptHTML; return this; }
  addJS(scriptJS) { eval(scriptJS); return this; }
  getLayer(id) { return this.layers.get(id); }
  showLayer(id) { this.getLayer(id).style.display = 'block'; return this; }
  hideLayer(id) { this.getLayer(id).style.display = 'none'; return this; }
  getElement(idElement) { return this.elements.get(idElement) }
  addToBody(idElement) { this.doc.body.appendChild(this.elements.get(idElement)); return this; }
  layerToBody(idLayer) { this.doc.body.appendChild(this.getLayer(idLayer)); return this; }
  addToLayer(idElement, idLayer) { this.getLayer(idLayer).appendChild(this.elements.get(idElement)); return this; }
  getCanvas(idLayer) { let layer = this.getLayer(idLayer); return layer.canvas; }
  getContext(idLayer) { let layer = this.getLayer(idLayer); return layer.ctx; }
  addObjectToLayer(idLayer, obj) { this.getLayer(idLayer).appendChild(obj); return this; }

  addObject(element, cssClass) {
    if (cssClass)
      for (var attrname in cssClass) { element[attrname] = cssClass[attrname] };
    this.doc.body.appendChild(element);
    return this;
  }

  createLayer(id, prop) {
    let def = {
      width: 400,
      height: 400,
      enableCanvas: false
    }
    if (prop)
      for (var attrname in prop) { def[attrname] = prop[attrname] };
    let w = def.width;
    let h = def.height;
    let layer = this.doc.createElement('div');
    layer.id = id;
    if (def.enableCanvas) {
      layer.canvas = this.doc.createElement('canvas');
      layer.imgData = null;

      layer.save = (x, y, w, h) => {
        layer.imgData = layer.ctx.getImageData(x, y, w, h);
        return layer;
      }
      layer.restore = (x, y, idLayer) => {
        if (idLayer) {
          let l = this.getLayer(idLayer);
          layer.ctx.putImageData(l.imgData, x, y);
        } else {
          layer.ctx.putImageData(layer.imgData, x, y);
        }
        return layer;
      }

      layer.getImgData = () => {
        return layer.imgData;
      }

      layer.ctx = layer.canvas.getContext('2d');
      for (var attrname in def) { layer.canvas.style[attrname] = def[attrname] };
      if (typeof def.width === 'string') {
        if (def.width.substr(length - 1, 1) === 'x')
          w = parseFloat(def.width.split('px')[0]);
        if (def.width.substr(length - 1, 1) === '%') {
          let v = parseFloat(def.width.split('%')[0]);
          w = (v / 100) * this.screenWidth;
        }
      }
      if (typeof def.height === 'string') {
        if (def.height.substr(length - 1, 1) === 'x')
          h = parseFloat(def.height.split('px')[0]);
        if (def.height.substr(length - 1, 1) === '%') {
          let v = parseFloat(def.height.split('%')[0]);
          h = (v / 100) * this.screenHeight;
        }
      }
      layer.canvas.width = innerWidth;
      layer.canvas.height = innerHeight;
      //FIGURAS GEOMETRICAS
      layer.ctx.fillRect(0, 0, layer.canvas.width, layer.canvas.height);
      layer.clearCanvas = (prop) => { layer.ctx.clearRect(prop.x, prop.y, prop.width, prop.height); return layer };
      layer.clearCanvas({ x: 0, y: 0, width: w, height: h })
      layer.line = (prop) => {
        var def = {
          x1: 0,
          y1: 0,
          x2: 10,
          y2: 10,
          strokeStyle: 'black',
          lineWidth: 1,
          lineCap: 'butt',
          lineJoin: 'bevel',
          name: 'line'
        };
        for (var attrname in prop) { def[attrname] = prop[attrname] };
        layer.ctx.beginPath()
        layer.ctx.strokeStyle = def.strokeStyle;
        layer.ctx.lineCap = def.lineCap;
        layer.ctx.lineJoin = def.lineJoin;
        layer.ctx.lineWidth = def.lineWidth;
        layer.ctx.moveTo(def.x1, def.y1);
        layer.ctx.lineTo(def.x2, def.y2);
        layer.ctx.stroke();
        layer.ctx.closePath();
        return layer;
      }
      layer.circle = (prop) => {
        var def = {
          x: 100,
          y: 100,
          radio: 50,
          angCom: 0,
          angFin: Math.PI * 2,
          lineWidth: 1,
          borderColor: 'white',
          fillColor: 'black',
          fill: false,
          sen: true,
          name: 'circle'
        };
        for (var attrname in prop) { def[attrname] = prop[attrname] };
        layer.ctx.beginPath();
        layer.ctx.strokeStyle = def.borderColor;
        layer.ctx.fillStyle = def.fillColor;
        layer.ctx.lineWidth = def.lineWidth;
        layer.ctx.arc(def.x, def.y, def.radio, def.angCom, def.angFin, def.sen);
        layer.ctx.stroke();
        if (def.fill) { layer.ctx.fill(); }
        layer.ctx.closePath();
        return layer;
      }

      layer.rectangle = (prop) => {
        var def = {
          x: 0,
          y: 0,
          width: 10,
          height: 10,
          borderColor: 'gray',
          backgroundColor: 'black',
          r1: 0,
          r2: 0,
          r3: 0,
          r4: 0,
          borderWidth: 1,
          fill: false
        };
        for (var attrname in prop) { def[attrname] = prop[attrname] };
        layer.ctx.beginPath();
        layer.ctx.strokeStyle = def.borderColor;
        layer.ctx.lineWidth = def.borderWidth;
        layer.ctx.moveTo(def.r1 + def.x, def.y);
        layer.ctx.lineTo(def.width + def.x - def.r2, def.y);
        layer.ctx.quadraticCurveTo(def.width + def.x, def.y, def.width + def.x, def.r2 + def.y);
        layer.ctx.lineTo(def.width + def.x, def.height - def.r3 + def.y);
        layer.ctx.quadraticCurveTo(def.width + def.x, def.height + def.y, def.width + def.x - def.r3, def.height + def.y);
        layer.ctx.lineTo(def.r4 + def.x, def.height + def.y);
        layer.ctx.quadraticCurveTo(def.x, def.height + def.y, def.x, def.height - def.r4 + def.y);
        layer.ctx.lineTo(def.x, def.r1 + def.y);
        layer.ctx.quadraticCurveTo(def.x, def.y, def.x + def.r1, def.y);
        layer.ctx.stroke();
        if (def.fill) {
          layer.ctx.fillStyle = def.backgroundColor;
          layer.ctx.fill();
        }
        layer.ctx.closePath();
        return layer;
      };

      layer.triangle = (prop) => {
        let def = {
          x: 150,
          y: 150,
          base: 100,
          height: 100,
          borderColor: 'gray',
          backgroundColor: 'black',
          borderWidth: 1,
          fill: false
        };
        for (var attrname in prop) { def[attrname] = prop[attrname] };
        layer.ctx.beginPath();
        layer.ctx.strokeStyle = def.borderColor;
        layer.ctx.fillStyle = def.backgroundColor;
        layer.ctx.lineWidth = def.borderWidth;
        layer.ctx.moveTo(def.x, def.y);
        layer.ctx.lineTo(def.x + def.base / 2, def.y - def.height);
        layer.ctx.lineTo(def.x + def.base, def.y);
        layer.ctx.lineTo(def.x, def.y);
        layer.ctx.lineTo(def.x + def.base / 2, def.y - def.height);
        if (def.fill) { layer.ctx.fill(); }
        layer.ctx.stroke();
        layer.ctx.closePath();
        return layer;
      };

      layer.text = (prop) => {
        let def = {
          x: 0,
          y: 0,
          fontFamily: 'verdana',
          fontSize: 12,
          color: 'black',
          fontWeight: 'normal',
          text: '',
          textAlign: 'left',
          direction: 'ltr' //ltr - rtl - inherit
        };
        for (var attrname in prop) { def[attrname] = prop[attrname] };
        layer.ctx.beginPath();
        layer.ctx.fillStyle = def.color;
        layer.ctx.textAlign = def.textAlign;
        layer.ctx.font = `${def.fontWeight} ${def.fontSize}px ${def.fontFamily}`;
        layer.ctx.direction = def.direction;
        layer.ctx.fillText(def.text, def.x, def.y);
        //layer.ctx.strokeText();
        layer.ctx.closePath();
        return layer;
      }
      layer.appendChild(layer.canvas);
    }

    if (typeof id === 'number') layer.id = parseInt(layer.id, 10);
    this.layers.set(id, layer);
    return this;
  }

  createElement(element, cssClass) {
    let e = this.doc.createElement(element);
    this.elements.set(cssClass._id, e);
    if (cssClass)
      for (var attrname in cssClass) {
        if (attrname.substr(0, 1) === '_')
          e[attrname.substr(1, attrname.length)] = cssClass[attrname];
        else
          e.style[attrname] = cssClass[attrname]
      };
    return this;
  }

  removeCanvas(idLayer) {
    let layer = this.getLayer(idLayer);
    layer.removeChild(layer.canvas);
    layer.canvas = undefined;
    layer.ctx = undefined;
    return this;
  }

  setCss(idElement, className, cssClass) {
    let e = this.elements.get(idElement);
    e.classList.remove(className);
    var cssProp = propertyManager.cssProperties;
    var newCssClass = `.${className}{`;
    for (var attrname in cssClass) { newCssClass += `${cssProp[attrname]}:${cssClass[attrname]};`; };
    newCssClass = newCssClass.substr(0, newCssClass.length - 1) + '}';
    flex.controller.createCSS(`.${className}${newCssClass}`);
    flex.controller.CSS({
      method: 'toggle',
      element: e,
      className: className
    });
    return this;
  }

  setCssToLayer(idLayer, className, cssClass) {
    let e = this.layers.get(idLayer);
    e.classList.remove(className);
    var cssProp = flex.propertyManager.cssProperties;
    var newCssClass = `.${className}{`;
    for (var attrname in cssClass) { newCssClass += `${cssProp[attrname]}:${cssClass[attrname]};`; };
    newCssClass = newCssClass.substr(0, newCssClass.length - 1) + '}';
    flex.controller.createCSS(`.${className}${newCssClass}`);
    flex.controller.CSS({
      method: 'toggle',
      element: e,
      className: className
    });
    return this;
  }

  createGridContainer(objOptions) {
    let { id, addToBody, elements, title } = objOptions;
    let grid = this.createLayer(id);
    flex.controller.createCSS(`
            .${id}{
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 30px 20px;
                align-items: stretch;
                width: 90%;
                height: 100%;
                margin: 20px auto;
            }

            .gridTitle${id}{
                text-align: center;
                text-transform: capitalize;
            }

            @media screen and (min-width: 600px) and (max-width: 800px){
                .${id}{
                    grid-template-columns: repeat(2, 1fr);
                }

                .gridTitle${id}{
                    grid-column-start: 1;
                    grid-column-end: 3;
                }
            }

            @media screen and (min-width: 801px){
                .${id}{
                    grid-template-columns: repeat(3, 1fr);
                }

                .gridTitle${id}{
                    grid-column-start: 1;
                    grid-column-end: 4;
                }
            }
        `);
    flex.controller.CSS({
      method: 'toggle',
      element: grid.getLayer(id),
      className: id
    });
    if (title) {
      let text = document.createElement('h2');
      text.className = 'gridTitle' + id;
      text.textContent = title;
      this.addObjectToLayer(id, text);
    }
    if (elements) {
      elements.forEach(element => {
        this.addObjectToLayer(id, element);
      });
    }
    if (addToBody) this.layerToBody(id);
    return this;
  }

  createSimpleGallery(options){
    const {id,elements, addToBody, title} = options;
    this.createLayer('container'+id);
    this.setCssToLayer('container'+id,'galleryTitle',{
      textAlign: 'center',
      textTransform:'capitalize'
    });
    if(title) {
      const h2 = document.createElement('h2');
      h2.innerText = title;
      this.addObjectToLayer('container'+id,h2);
    }
    const grid = this.createLayer(id);
    this.addObjectToLayer('container'+id,this.getLayer(id));
    flex.controller.createCSS(`
      .${id}{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        grid-gap: 1em;
        margin: 20px 0;
        padding: 0 10px;
      }
      .${id} > article.galleryArticle${id}{
        position: absolute;
      }

      article.galleryArticle${id}:hover p.galleryCaption${id}{
        opacity: 1;
      }

      article.galleryArticle${id}:hover figure.galleryFigure${id} img.galleryImg${id}{
        filter: blur(2px);
      }

      figure.galleryFigure${id}{
        margin: 0;
        line-height: 0;
        overFlow: hidden;
      }

      figure.galleryFigure${id} img{
        filter: blur(0px);
        transition: filter 0.3s ease-in;
      }
      
      img.galleryImg${id}{
        max-width: 100%;
        height: auto
      }

      p.galleryCaption${id}{
        font-size: 1.54em;
        font-weight: bold;
        z-index: 100;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity .5s;
        background: rgba(90,90,70,0.4);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
      }

      @media (hover: none){
        p.galleryCaption${id}{
          opacity: 1;
        }
      
        img.galleryImg${id}{
          filter: blur(2px);
        }
      }

    `);
    flex.controller.CSS({
      method: 'toggle',
      element: grid.getLayer(id),
      className: id
    });

    elements.forEach(element =>{
      const {caption, imgSrc} = element;
      const article = document.createElement('article');
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      article.className = 'galleryArticle'+id;
      figure.className = 'galleryFigure'+id;
      img.className = 'galleryImg'+id;
      img.src = imgSrc;
      if(caption){
        const labelContainer = document.createElement('div'); 
        const label = document.createElement('p');
        label.innerText = caption;
        labelContainer.appendChild(label);
        article.appendChild(labelContainer);
        label.className = 'galleryCaption'+id;
      }
      article.appendChild(figure);
      figure.appendChild(img);
      this.addObjectToLayer(id, article);
      article.style.position = 'relative';
    });

    if(addToBody) this.layerToBody('container'+id)

  }

  createSimpleContainer(options) {
    let { id, elements, addToBody, cssClass } = options
    this
      .createLayer(id)
      .setCssToLayer(
        id,
        id,
        cssClass ? cssClass : {
          maxWidth: '900px',
          position: 'relative',
          margin: 'auto',
          padding: '0',
          backgroundColor: '#FFFFFF'
        });
    if (elements) {
      elements.forEach(element => {
        this.addObjectToLayer(id, element);
      });
    }
    if (addToBody) this.layerToBody(id);
    return this;
  }

  createLayout(option) {
    let { id, type, addToBody, elements, cssClass, title } = option;
    switch (type) {
      case 'simpleColumn':{
        this.createSimpleContainer({
          id,
          addToBody,
          elements,
          cssClass
        });
        break;
      }
      case 'simpleGrid':{
        this.createGridContainer({
          id,
          addToBody,
          elements,
          title
        });
        break;
      }
      case 'simpleGallery':{
        this.createSimpleGallery({
          id, 
          addToBody,
          elements, 
          title
        });
        break;
      }
    }
    return this;
  }
}