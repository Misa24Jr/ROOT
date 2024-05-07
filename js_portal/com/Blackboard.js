/**
 * Crea una nueva pizarra
 * @class Blackboard
 * @extends VisualComponent
 * @param {object} options - Objeto de propiedades
 */
 flex.Blackboard = class extends flex.VisualComponent{
  constructor(options){
    super(options, 'Blackboard', false);
    this.blackboard = this.vcContainer;
    this._canvas = new Map();
    this._context = new Map();
    this.actCanvas = null;
    this.actCtx = null;
    this.ctxOptions = {
      lineWidth : this.objProperties.lineWidth || 2,
      fillStyle : this.objProperties.fillStyle || 'black',
      strokeStyle : this.objProperties.strokeStyle || 'black',
      eraserWidth : this.objProperties.eraserWidth || 4,
      unDoData : null,
      reDoData: null
    }
    this.document = new flex.Document();
    for(let i = 0; i < this.objProperties.numberOfCanvas; i++){
      this.document.createLayer(`canvas${i}`,{
        enableCanvas: true,
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        visibility: 'hidden',
        position: 'absolute'
      });
      this.document.getCanvas(`canvas${i}`).classList.add('BlackboardCanvas_css'+this.enviroment, 'BlackboardCanvas'+i+'_css'+this.enviroment);
      this._canvas.set(i, this.document.getCanvas(`canvas${i}`));
      this._context.set(i, this.document.getContext(`canvas${i}`));
      this.blackboard.appendChild(this.getCanvas(i));
    }
    this.mainLoop = this.mainLoop.bind(this);
    this.pointer = {
      click : false,
      move : false,
      pos : {
          x : 0,
          y : 0
      },
      posPrev : {}
    };
    /**
     * @property {object} blackboard - Contenedor HTML principal de la instancia.
     * @property {object} blackboardPanel - Instancia del componente de Flexivity BlackboardPanel.
     * @property {object} userControl - Instancia del componente de Flexivity UserControl.
     * @property {object} canvas - Objeto HTML canvas.
     * @property {object} elements - Array de elementos HTML contenidos por el contenedor principal.
     * @property {object} names - Array de nombres de clases CSS asigandos a los elementos contenidos en el arreglo elements.
     * @property {method} blackboardPanel._allBuilt  -Ejecuta el metodo built cuando todas las instancias de Flexivity que utiliza la clase pizarra hayan terminado de cargar.
     * @property {method} setProperties - ?????
     * @property {boolean} hasCssClass - Si su valor es true, aplica los estilos CSS asignados a los elementos incluidos en el arreglo elements.
     */
    this.blackboardPanel = new flex.BlackboardPanel({
      id: 'blackboardPanel',
      idxElement: 0
    });
    this.userControl = new flex.UserControl({
      id: 'userControl',
      idxElement:0,
      listNames : ['william suarez', 'jose navea ', 'ramon fernandez', 'rafael campos', 'gilberto rosa' ]
    });
    this.canvas = document.createElement('canvas');
    this.blackboardPanel._allBuilt(this.built());
    this.elements = [this.blackboard];
    this.names = ['blackboard'];
    this.hasCssClass = true;
    
    this.setProperties(options);
    requestAnimationFrame(this.mainLoop);
  }

  getCanvasDimension(){
    let {x,y,width,height} = this.getActCanvas().getBoundingClientRect();
    return {x,y,width, height}
  }

  /**
   * @description Retorna el elemento canvas indicado por el id.
   * @param {number} id - Identificador numerico del canvas a mostrar en la pizarra 
   * @returns {object} - Elemento HTML canvas
   */
  getCanvas(id){
    return this._canvas.get(id);
  }

  /**
   * @description Muestra en la pizarra el canvas indicado por su id. oculta el resto de canvas es ocultado. Actualiza la propiedad actCtx al contexto del canvas mostrado
   * @param {number} id - Identificador numerico del canvas a mostrar en la pizarra 
   * @returns {object} -Retorna la instancia de la clase blackboard
   */
  showCanvas(id){
    this._canvas.forEach(canvas =>{
      canvas.style.visibility = this._canvas.get(id) == canvas ? 'visible' : 'hidden';
    });
    this.actCtx = this.getContext(id);
    this.actCanvas = this.getCanvas(id);
    this.updateCtx();
    return this;
  }

  getActCanvas(){
    return this.actCanvas;
  }

  /**
   * @description Retorna el conexto del canvas visible en la pizarra.
   * @returns {CanvasRenderingContext2D} 
   */
  getActCtx(){
    return this.actCtx;
  }

  /**
   * @description Retorna el conexto del canvas indicado por el id.
   * @returns {CanvasRenderingContext2D} 
   */
  getContext(id){
    return this._context.get(id);
  }

  /**
   * @description Inserta en el contenedor principal los componentes blackboardPanel y userControl. Es ejecutado en el constructor a traves del metodo _allBuilt del componente UserControl
   * @returns {object} -Retorna la instancia de la clase blackboard
   */
  built(){
    document.body.style.overflow = 'hidden';
    this.blackboard.appendChild(this.blackboardPanel.getPanel());
    this.blackboard.appendChild(this.userControl.getPanel());
    this.showCanvas(0);
    this.events();
    return this;
  }

  updateCtx(){
    const ctx = this.getActCtx();
    const {lineWidth, strokeStyle, fillStyle, eraserWidth} = this.ctxOptions;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.fillStyle = fillStyle;
    ctx.eraserWidth = eraserWidth;
    return this;
  }

  events(){
    const ctx = this.getActCtx();
    this._canvas.forEach(canvas =>{
      canvas.addEventListener('pointerdown', e=>{
        this.genImageData('unDo');
        this.pointer.click = true;
      });
      canvas.addEventListener('pointerup', e=>{
        this.genImageData('reDo');
        this.pointer.click = false;
      });
      canvas.addEventListener('pointermove', e=>{
        this.pointer.move = true;
        let {x,y,width,height} = this.getCanvasDimension();
        this.pointer.pos.x = (e.clientX - x) / width;
        this.pointer.pos.y = (e.clientY - y) / height;
      });
      canvas.addEventListener('pointerleave', e=>{
        this.pointer.move = false;
        this.pointer.click = false;
      });
    });
    this.blackboardPanel.onClickDrawWidth1(()=>this.setLineWidth(2));
    this.blackboardPanel.onClickDrawWidth2(()=>this.setLineWidth(6));
    this.blackboardPanel.onClickDrawWidth3(()=>this.setLineWidth(10));
    this.blackboardPanel.onClickDrawWidth4(()=>this.setLineWidth(18));
    this.blackboardPanel.onDrawColorChange(()=>this.setColor(this.blackboardPanel.getDrawColor()))
    this.blackboardPanel.onClickEraseWidth1(()=>this.setEraserWidth(4));
    this.blackboardPanel.onClickEraseWidth2(()=>this.setEraserWidth(8));
    this.blackboardPanel.onClickEraseWidth3(()=>this.setEraserWidth(8));
    this.blackboardPanel.onClickEraseWidth4(()=>this.setEraserWidth(16));
    this.blackboardPanel.onClickCleanCanvas(()=>this.clearActCanvas());
    this.blackboardPanel.onClickUndo(()=>this.unDo());
    this.blackboardPanel.onClickRedo(()=>this.reDo());
    this.blackboardPanel.onClickCamera(()=>this.saveCanvas());
  }

  setLineWidth(width){
    this.objProperties.cursorType = 'draw';
    this.ctxOptions.lineWidth = width;
    this.updateCtx();
    return this;
  }

  setColor(color){
    this.ctxOptions.strokeStyle = color;
    this.ctxOptions.fillStyle = color;
    this.updateCtx()
    return this;
  }
  setEraserWidth(width){
    console.log('aqui')
    this.objProperties.cursorType = 'eraser';
    this.ctxOptions.eraserWidth = width;
    this.updateCtx();
  }

  drawLine(){
    const ctx = this.getActCtx();
    // if(this.objProperties.cursorType === 'draw'){
    //  this.updateCtx();
      let {width, height} = this.getCanvasDimension();
    ctx.beginPath();
    ctx.moveTo(this.pointer.posPrev.x * width, this.pointer.posPrev.y * height);
    ctx.lineTo(this.pointer.pos.x * width, this.pointer.pos.y * height);
    ctx.stroke();
    // }
    return this;
  }

  eraser(){
    let {x,y} = this.pointer.pos,
      {width, height} = this.getCanvasDimension(),
      ctx = this.getActCtx(),
      {eraserWidth} = ctx;
      console.log(ctx.eraserWidth)
    ctx.clearRect(x * width, y * height, eraserWidth, eraserWidth);
    return this;
  }

  clearActCanvas(){
    console.log('a')
    let {width, height} = this.getCanvasDimension();
    this.getActCtx().clearRect(0,0, width, height);
    return this;
  }

  mainLoop(){
    if(this.pointer.click && this.pointer.move && this.pointer.posPrev){
      let {cursorType} = this.objProperties;
      if(cursorType === 'draw') this.drawLine();
      if(cursorType === 'eraser') this.eraser();
      this.pointer.move = false;
    }
    this.pointer.posPrev = {
      x : this.pointer.pos.x,
      y : this.pointer.pos.y
    };
    requestAnimationFrame(this.mainLoop);
  }

  genImageData(doType){
    const ctx = this.getActCtx();
    const {width, height} = this.getCanvasDimension();
    doType === 'unDo' ? this.ctxOptions.unDoData = ctx.getImageData(0,0, width, height) : this.ctxOptions.reDoData = ctx.getImageData(0,0,width, height);
    this.updateCtx();
    return this;
  }

  reDo(){
    const ctx = this.getActCtx();
    ctx.putImageData(this.ctxOptions.reDoData,0,0);
    return this;
  }

  unDo(){
    const ctx = this.getActCtx();
    ctx.putImageData(this.ctxOptions.unDoData,0,0);
    return this;
  }

  saveCanvas(){
    let data = this.getActCanvas().toDataURL();
    let link = document.createElement('a');
    link.href = data;
    link.download = 'pizarra';
    link.click();
  }
}