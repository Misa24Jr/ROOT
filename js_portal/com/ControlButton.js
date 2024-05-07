flex.ControlButton = class extends flex.VisualComponent{
    constructor(options) {
        super(options, 'ControlButton', false);
        this.hasCssClass = true;
        this.cssLoaded = false;
        var that = this;
        this._allBuilt = (e) => {};
        this.isShow = true;
        this.ns = "http://www.w3.org/2000/svg";
        this.hint = document.createElement('div');
        this.panel = this.vcContainer;//document.createElement('div');
        this.svg = document.createElementNS(this.ns, 'svg');
        this.elements = [this.panel];
        this.names = ['ControlButton'];
        this.name = 'ControlButton';
        this.options = options;

        this.panel.addEventListener('click', e=>{
          if(this.objProperties.rippleEffect) this.createRippleEffect(e, 'center');
        })
        
        this.panel.addEventListener('mouseover', (e) => {
            if (!this.objProperties.disabled) {
                let vb = this.getViewBox();
                // that.repaint(that.objProperties.bgColorOver, that.objProperties.backgroundColor2, that.objProperties.backgroundColor3);
                this.setViewBox(...vb);
                that.objProperties.onMouseOver();
                if (that.objProperties.showHint) {
                    that.showHint();
                }
            }
        },false);

        this.panel.addEventListener('mouseout', (e) => {
            if (!this.objProperties.disabled) {
            let vb = this.getViewBox();
            // that.repaint(that.objProperties.backgroundColor1, that.objProperties.backgroundColor2, that.objProperties.backgroundColor3);
            this.setViewBox(...vb);
            that.objProperties.onMouseOut();
            that.hideHint();
            }
        },false);
        
        this.setProperties(options);
        this.panel.appendChild(this.hint);
        this.panel.appendChild(this.svg);
        /*************************Constructor end *****************/
    }
    allBuilt(e) { this._allBuilt(e) };


    /**
     * 
     * @param {number} angle - gira el controlButton en un entre 0 y angle
     * @returns {object} this
     */
    rotate(angle){
      if(angle) this.panel.style.transform =  `rotate(${(!this.getRotate()) ? angle : 0}deg)`;
      this.panel.setAttribute('rotate',this.panel.getAttribute('rotate') === 'true'? false : true);
      return this;
    }

    /**
     * @method
     * @returns {boolean} 
     * retorna true si el coontenedor tiene activo el atributo rotate 
     */
    getRotate(){
      return this.panel.getAttribute('rotate') === 'true'//this.panel.getAttribute('rotate') === 'true'? false : true;
    }
    loadCssProperties() {
      this.cssLoaded = true;
      this.objProperties.textColor = this.getPropertyValue(this.panel, '--textColor');
      this.objProperties.textSize = parseInt(this.getPropertyValue(this.panel, '--textSize'), 10);
      this.objProperties.textFamily = this.getPropertyValue(this.panel, '--textFamily');
      this.objProperties.textAlign = this.getPropertyValue(this.panel, '--textAlign');
      this.objProperties.textWeight = this.getPropertyValue(this.panel, '--textWeight');
      this.objProperties.x = parseInt(this.getPropertyValue(this.panel, 'left'), 10);
      this.objProperties.y = parseInt(this.getPropertyValue(this.panel, 'top'), 10);
      this.objProperties.charge = parseFloat(this.getPropertyValue(this.panel, '--charge'));
      this.objProperties.width = parseInt(this.getPropertyValue(this.panel, 'width'), 10);
      this.objProperties.height = parseInt(this.getPropertyValue(this.panel, 'height'), 10);
      this.objProperties.lineWidth = parseFloat(this.getPropertyValue(this.panel, 'line-width'));
      this.objProperties.text = this.getPropertyValue(this.panel, '--text');
      this.objProperties.textColor = this.getPropertyValue(this.panel, '--textColor');
      this.objProperties.topMargin = parseInt(this.getPropertyValue(this.panel, '--topMargin'), 10);
      this.objProperties.leftMargin = parseInt(this.getPropertyValue(this.panel, '--leftMargin'), 10);
      this.objProperties.showHint = flex.controller.getBoolean(this.getPropertyValue(this.panel, '--showHint'));
      this.objProperties.hint = this.getPropertyValue(this.panel, '--hint');
      this.objProperties.xHint = parseInt(this.getPropertyValue(this.panel, '--xHint'), 10);
      this.objProperties.yHint = parseInt(this.getPropertyValue(this.panel, '--yHint'), 10);
      this.objProperties.fontFamilyHint = this.getPropertyValue(this.panel, '--fontFamilyHint');
      this.objProperties.fontSizeHint = parseInt(this.getPropertyValue(this.panel, '--fontSizeHint'), 10);
      this.objProperties.positionHint = this.getPropertyValue(this.panel, '--positionHint');
      this.objProperties.separationHint = parseInt(this.getPropertyValue(this.panel, '--separationHint'), 10);
      this.objProperties.colorHint = this.getPropertyValue(this.panel, '--colorHint');
      this.objProperties.bgColorHint = this.getPropertyValue(this.panel, '--bgColorHint');
      this.objProperties.typeButton = this.getPropertyValue(this.panel, '--typeButton');
      this.objProperties.backgroundColor = this.getPropertyValue(this.panel, 'background-color');
      this.objProperties.backgroundColor1 = this.getPropertyValue(this.panel, '--backgroundColor1');
      this.objProperties.backgroundColor2 = this.getPropertyValue(this.panel, '--backgroundColor2');
      this.objProperties.backgroundColor3 = this.getPropertyValue(this.panel, '--backgroundColor3');
      this.objProperties.bgDisable = this.getPropertyValue(this.panel, '--bgDisable');
      this.objProperties.shadowColor = this.getPropertyValue(this.panel, '--shadowColor');
      this.objProperties.bgColorOver = this.getPropertyValue(this.panel, '--bgColorOver');
      this.objProperties.bgColorOver2 = this.getPropertyValue(this.panel, '--bgColorOver2');
      this.objProperties.bgColorOver3 = this.getPropertyValue(this.panel, '--bgColorOver3');
      // this.objProperties.overCursor = this.getPropertyValue(this.panel, '--overCursor');
      // this.objProperties.defaultCursor = this.getPropertyValue(this.panel, '--defaultCursor');
      this.objProperties.position = this.getPropertyValue(this.panel, '--position');
      this.objProperties.disabled = flex.controller.getBoolean(this.getPropertyValue(this.panel, '--disabled'));
      this.objProperties.zIndex = parseInt(this.getPropertyValue(this.panel, '--zIndex'), 10);
      this.objProperties.zIndexHint = parseInt(this.getPropertyValue(this.panel, '--zIndexHint'), 10);
      this.objProperties.filter = this.getPropertyValue(this.panel, '--filter');
      this.objProperties.cbBorderStyle = this.getPropertyValue(this.panel, '--cbBorderStyle');
      this.objProperties.cbBorderWidth = this.getPropertyValue(this.panel, '--cbBorderWidth');
      this.objProperties.cbBorderColor = this.getPropertyValue(this.panel, '--cbBorderColor');
    }
  
    refreshProperties(prop) {
        // *************** PROPIEDADES DEL CSS ******************
	    prop.that = this;
	    flex.propertyManager.refreshProperties(prop);
      let classObj=flex.controller.getObjClass(prop);
      if(classObj){for (var attrname in classObj) { this.objProperties[attrname] = classObj[attrname] };}
		// ******************************************************
      var that = this;
      this.loadCssProperties();
      this.panel.style.zIndex = this.objProperties.zIndex;
      for (var attrname in prop) {
          that.objProperties[attrname] = prop[attrname];
      };
      var sizeText = that.objProperties.hint.length * that.objProperties.fontSizeHint * 0.6;
  
      //HINT PROPERTIES
      if (that.objProperties.positionHint === 'up') {
          that.hint.style.left = that.objProperties.xHint + 'px';
          if (that.objProperties.yHint === 0) {
          that.hint.style.top = -(that.objProperties.fontSizeHint + that.objProperties.separationHint) + 'px';
          } else
          that.hint.style.top = that.objProperties.yHint + 'px';
      }
      if (that.objProperties.positionHint === 'bottom') {
          that.hint.style.left = that.objProperties.xHint + 'px';
          if (that.objProperties.yHint === 0)
          that.hint.style.top = (that.objProperties.height + that.objProperties.separationHint) + 'px';
          else
          that.hint.style.top = that.objProperties.yHint + 'px';
      }
  
      if (that.objProperties.positionHint === 'right') {
          if (that.objProperties.xHint === 0)
          that.hint.style.left = (that.objProperties.width + that.objProperties.separationHint) + 'px';
          else
          that.hint.style.left = that.objProperties.xHint + 'px';
          that.hint.style.top = that.objProperties.yHint + 'px';
      }
  
      if (that.objProperties.positionHint === 'left') {
          if (that.objProperties.xHint === 0)
          that.hint.style.left = -(sizeText + that.objProperties.separationHint) + 'px';
          else
          that.hint.style.left = that.objProperties.xHint + 'px';
          that.hint.style.top = that.objProperties.yHint + 'px';
      };
      //Panel
      this.panel.setAttribute('rotate',false);
      if(this.objProperties.x)
          this.panel.style.left = this.objProperties.x + 'px';
      if(this.objProperties.y)
          this.panel.style.top = this.objProperties.y + 'px';
      if(this.objProperties.position)
          this.panel.style.position = this.objProperties.position;
      // if(this.objProperties.width)
      //     this.panel.style.width = this.objProperties.width + 'px';
      // if(this.objProperties.height)
      //     this.panel.style.height = this.objProperties.height + 'px';
      if(this.objProperties.filter)    
          this.panel.style.filter = that.objProperties.filter;
      if(this.objProperties.cbBorderStyle)
          this.panel.style.borderStyle = this.objProperties.cbBorderStyle;
      if(this.objProperties.cbBorderWidth)
          this.panel.style.borderWidth = this.objProperties.cbBorderWidth + 'px';
      if(this.objProperties.cbBorderColor)    
          this.panel.style.borderColor = this.objProperties.cbBorderColor;
      if(this.objProperties.cursor) this.panel.style.cursor = this.objProperties.cursor;


      this.panel.tabIndex = 0;
      //Hint
      this.hint.innerHTML = that.objProperties.hint;
      this.hint.style.position = 'absolute';
      that.hint.style.zIndex = that.objProperties.zIndexHint;
      that.hint.style.color = that.objProperties.colorHint;
      that.hint.style.borderWidth = '1px';
      that.hint.style.borderStyle = 'groove';
      that.hint.style.height = (that.objProperties.fontSizeHint + 3) + 'px';
      that.hint.style.lineHeight = (that.objProperties.fontSizeHint + 3) + 'px';
      that.hint.style.backgroundColor = that.objProperties.bgColorHint;
      that.hint.style.fontFamily = that.objProperties.fontFamilyHint;
      that.hint.style.fontSize = that.objProperties.fontSizeHint + 'px';
      that.hint.style.width = that.objProperties.hint.length * that.objProperties.fontSizeHint * 0.6 + 'px';
      that.hint.style.textAlign = 'center';
      this.hideHint();
      //SVG
      this.svg.position = 'absolute';
      this.svg.setAttributeNS(null, "viewBox", "0 0  17 16");
      this.svg.setAttributeNS(null, 'width', this.objProperties.width + 'px');
      this.svg.setAttributeNS(null, 'height', this.objProperties.height + 'px');
      this.svg.style.pointerEvents = 'none';
      if (that.objProperties.disabled) {
          that.repaint(that.objProperties.bgDisable, that.objProperties.bgDisable, that.objProperties.bgDisable);
      } else {
          that.repaint(that.objProperties.backgroundColor1, that.objProperties.backgroundColor2, that.objProperties.backgroundColor3)
      }

      if (this.objProperties.hintCaption) this.panel.setAttribute('hint', this.objProperties.hintCaption); 
    }
  
    setHint(hintValue) {
      this.objProperties.hint = hintValue;
      var sizeText = this.objProperties.hint.length * this.objProperties.fontSizeHint * 0.6;
      this.hint.style.width = sizeText + 'px';
      this.hint.innerHTML = this.objProperties.hint;
    }
  
    showHint() {
      this.hint.style.display = 'block';
      return this;
    }
  
    hideHint() {
      this.hint.style.display = 'none';
      return this;
    }
  
    getSvg() {
      return this.svg;
    }
  
    getObjProperties() {
      return this.objProperties;
    }
  
    getNs() {
      return this.ns;
    }
  
    setViewBox(x = 0, y = 0, w = 17, h = 16) {
      this.objProperties.viewBox = `${x}, ${y}, ${w}, ${h}`
      this.svg.setAttributeNS(null, "viewBox", `${this.objProperties.viewBox}`);
      return this;
    }
  
    getViewBox() {
      return this.objProperties.viewBox.split(',').map((value)=>{
        return parseInt(value,10);
      });
    }
  
    setRect(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="none">
        <rect x = "1" y = "2" width="15" height="12" stroke = "${bg}" / >
        </g>
      `;
      return this;
    }
  
    setFirst(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="none">
          <g transform="translate(2.000000, 0.000000)">
            <path d="M3.994,1 C3.994,0.447 3.552,0 3.005,0 L1.026,0 C0.479,0 0.036,0.447 0.036,1 L0.036,15 C0.036,15.553 0.479,16 1.026,16 L3.005,16 C3.552,16 3.994,15.553 3.994,15 L3.994,1 L3.994,1 Z" fill="${bg}"></path>
            <path d="M5.438,9.052 C4.858,8.471 4.858,7.53 5.438,6.948 L11.882,0.506 C12.463,-0.076 13.985,-0.333 13.985,1.506 L13.985,14.494 C13.985,16.395 12.464,16.076 11.882,15.495 L5.438,9.052 L5.438,9.052 Z" fill="${bg}" ></path>
          </g> 
        </g>
      `;
      return this;
    }
  
    setPriorPage(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="${bg}">
          <g transform="translate(1.000000, 1.000000)">
            <path d="M0.446,9.052 C-0.134,8.471 -0.134,7.53 0.446,6.948 L6.89,0.506 C7.471,-0.076 8.993,-0.333 8.993,1.506 L8.993,14.494 C8.993,16.395 7.472,16.076 6.89,15.495 L0.446,9.052 L0.446,9.052 Z" fill="${bg}"></path>
            <path d="M7.446,9.052 C6.866,8.471 6.866,7.53 7.446,6.948 L13.89,0.506 C14.471,-0.076 15.993,-0.333 15.993,1.506 L15.993,14.494 C15.993,16.395 14.472,16.076 13.89,15.495 L7.446,9.052 L7.446,9.052 Z" fill="${bg}"></path>
          </g>
        </g>
        `;
      return this;
    }
  
    setPrior(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="${bg}">
          <path d="M3.446,10.052 C2.866,9.471 2.866,8.53 3.446,7.948 L9.89,1.506 C10.471,0.924 11.993,0.667 11.993,2.506 L11.993,15.494 C11.993,17.395 10.472,17.076 9.89,16.495 L3.446,10.052 L3.446,10.052 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setNext(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="${bg}">
          <path d="M6.113,15.495 C5.531,16.076 4.01,16.395 4.01,14.494 L4.01,1.506 C4.01,-0.333 5.531,-0.076 6.113,0.506 L12.557,6.948 C13.137,7.529 13.137,8.47 12.557,9.052 L6.113,15.495 L6.113,15.495 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setNextPage(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
            <g fill ="${bg}">
              <path d="M9.113,15.495 C8.531,16.076 7.01,16.395 7.01,14.494 L7.01,1.506 C7.01,-0.333 8.531,-0.076 9.113,0.506 L15.557,6.948 C16.137,7.529 16.137,8.47 15.557,9.052 L9.113,15.495 L9.113,15.495 Z"></path>
              <path d="M2.113,15.495 C1.531,16.076 0.01,16.395 0.01,14.494 L0.01,1.506 C0.01,-0.333 1.531,-0.076 2.113,0.506 L8.557,6.948 C9.137,7.529 9.137,8.47 8.557,9.052 L2.113,15.495 L2.113,15.495 Z"></path>
            </g>
        </g>
      `;
      return this;
    }
  
    setLast(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <g transform="translate(1.000000, 0.000000)" fill ="${bg}">
            <path d="M10.002,1 C10.002,0.447 10.444,0 10.991,0 L12.97,0 C13.517,0 13.959,0.447 13.959,1 L13.959,15 C13.959,15.553 13.517,16 12.97,16 L10.991,16 C10.444,16 10.002,15.553 10.002,15 L10.002,1 L10.002,1 Z" ></path>
            <path d="M2.113,15.495 C1.531,16.076 0.01,16.395 0.01,14.494 L0.01,1.506 C0.01,-0.333 1.531,-0.076 2.113,0.506 L8.557,6.948 C9.137,7.529 9.137,8.47 8.557,9.052 L2.113,15.495 L2.113,15.495 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setStop(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="none">
          <path d="M0.00199999998,1 C0.00199999998,0.447 0.446,0 0.995,0 L14.967,0 C15.516,0 15.96,0.447 15.96,1 L15.96,15 C15.96,15.553 15.516,16 14.967,16 L0.995,16 C0.446,16 0.00199999998,15.553 0.00199999998,15 L0.00199999998,1 L0.00199999998,1 Z" fill ="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setOnOff(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
            <g transform="translate(1.000000, 0.000000)" fill ="${bg}">
              <path d="M10.124,1.613 L10.124,3.962 C11.73,4.849 12.756,6.586 12.756,8.54 C12.756,11.394 10.406,13.709 7.508,13.709 C4.612,13.709 2.262,11.395 2.262,8.54 C2.262,6.523 3.274,4.791 4.958,3.939 L4.958,1.611 C2.021,2.586 0.063,5.304 0.063,8.54 C0.063,12.592 3.397,15.875 7.507,15.875 C11.618,15.875 14.953,12.592 14.953,8.54 C14.954,5.363 12.98,2.638 10.124,1.613 L10.124,1.613 Z"></path>
              <path d="M7.46,7.873 C8.238,7.873 8.872,7.393 8.872,6.798 L8.872,1.115 C8.872,0.521 8.238,0.04 7.46,0.04 C6.681,0.04 6.048,0.521 6.048,1.115 L6.048,6.798 C6.048,7.393 6.681,7.873 7.46,7.873 L7.46,7.873 Z"></path>
            </g>
        </g>
      `;
      return this;
    }
  
    setPause(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <g transform="translate(1.000000, 0.000000)" fill ="${bg}">
            <path d="M0.002,1 C0.002,0.447 0.446,0 0.995,0 L4.967,0 C5.516,0 5.96,0.447 5.96,1 L5.96,15 C5.96,15.553 5.516,16 4.967,16 L0.995,16 C0.446,16 0.002,15.553 0.002,15 L0.002,1 L0.002,1 Z"></path>
            <path d="M8.002,1 C8.002,0.447 8.446,0 8.995,0 L12.967,0 C13.516,0 13.96,0.447 13.96,1 L13.96,15 C13.96,15.553 13.516,16 12.967,16 L8.995,16 C8.446,16 8.002,15.553 8.002,15 L8.002,1 L8.002,1 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setExchange(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <path d="M5,9 L13.066,9 L13.066,11.8638731 L16.916,8.0438731 L13.066,4.0308731 L13,7 L5,7 L4.886,4.0308731 L1.03,8.0688731 L4.886,11.9348731 L5,9 Z" fill ="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setArrowRight(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <path d="M6.077,1.162 C6.077,1.387 6.139,1.612 6.273,1.812 L10.429,8.041 L6.232,14.078 C5.873,14.619 6.019,15.348 6.56,15.707 C7.099,16.068 7.831,15.922 8.19,15.382 L12.82,8.694 C13.084,8.3 13.086,7.786 12.822,7.39 L8.233,0.51 C7.873,-0.032 7.141,-0.178 6.601,0.181 C6.26,0.409 6.077,0.782 6.077,1.162 L6.077,1.162 Z" fill ="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setArrowUp(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <path d="M15.812,9.896 C15.587,9.896 15.361,9.834 15.162,9.699 L8.932,5.543 L2.895,9.74 C2.354,10.099 1.625,9.953 1.266,9.412 C0.905,8.873 1.051,8.142 1.592,7.783 L8.28,3.152 C8.673,2.888 9.188,2.888 9.583,3.15 L16.464,7.74 C17.005,8.099 17.152,8.832 16.792,9.371 C16.564,9.713 16.191,9.896 15.812,9.896 L15.812,9.896 Z" fill ="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setArrowDown(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">        
          <path d="M2.16,6.246 C2.385,6.246 2.61,6.308 2.81,6.442 L9.039,10.598 L15.076,6.401 C15.617,6.042 16.346,6.188 16.705,6.729 C17.065,7.268 16.92,8 16.38,8.359 L9.692,12.989 C9.298,13.253 8.784,13.254 8.388,12.991 L1.508,8.402 C0.966,8.042 0.82,7.31 1.179,6.77 C1.407,6.429 1.78,6.246 2.16,6.246 L2.16,6.246 Z" fill ="${bg}"></path>    
        </g>
      `;
      return this;
    }
  
    setArrowLeft(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <path d="M10.978,1.162 C10.978,1.387 10.916,1.612 10.782,1.812 L6.626,8.041 L10.823,14.078 C11.182,14.619 11.036,15.348 10.495,15.707 C9.956,16.068 9.224,15.922 8.865,15.382 L4.235,8.694 C3.971,8.3 3.969,7.786 4.233,7.39 L8.822,0.51 C9.182,-0.032 9.914,-0.178 10.454,0.181 C10.795,0.409 10.978,0.782 10.978,1.162 L10.978,1.162 Z" fill ="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setVerticalExchange(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <path d="M8.021,3.961 L8.021,12 L5.062,12 L8.881,15.991 L12.896,12 L10,12 L10,3.961 L12.896,3.961 L8.857,0.105 L4.991,3.961 L8.021,3.961 Z" fill ="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setDoc(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <g transform="translate(2.000000, 0.000000)" fill ="${bg}">
            <path d="M0,0 L0,16 L13,16 L13,4.02441406 L7,4 L7,0.062 L0,0 Z M11,13 L2,13 L2,12 L11,12 L11,13 L11,13 Z M11,11 L2,11 L2,10 L11,10 L11,11 L11,11 Z M11,7 L11,8 L2,8 L2,7 L11,7 L11,7 Z"></path>
            <path d="M8,0 L8,2.844 L12.752,2.844 L8,0 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setDocPlus(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <g transform="translate(2.000000, 0.000000)" fill ="${bg}">
            <g>
              <path d="M7.927,0.062 L2.073,0.114 L2.052,9.947 L4.021,9.962 L4.021,11.979 L6,11.979 L6,15.062 L4.062,15.062 L4.062,16 L6,16 L7.312,16 L13.969,16 L13.969,6.012 L7.927,6.012 L7.927,0.062 Z"></path>
              <path d="M9,0 L9,4.969 L14,4.969 L9,0 Z"></path>
              <path d="M4.979,13 L2.992,13 L2.992,11 L2.029,11 L2.029,13 L0.021,13 L0.021,13.986 L2.029,13.986 L2.029,15.994 L2.992,15.994 L2.992,13.986 L4.979,13.986 L4.979,13 Z"></path>
            </g>
          </g>
        </g>
      `;
      return this;
    }
  
    setDocRemove(bg) {
      this.svg.innerHTML = `
      <g stroke="none" stroke-width="1" fill ="${bg}">
        <g transform="translate(2.000000, 0.000000)" fill ="${bg}">
          <path d="M13.969,16 L13.969,6.012 L8,6.012 L8,0.062 L2,0 L2,14 L6,13.969 L6,16 L13.969,16 Z"></path>
          <path d="M9,0 L9,4.969 L13.917,4.969 L9,0 Z"></path>
          <path d="M5.02913267e-11,15 L-9.1502443e-08,15.9373779 L4.98986807,15.9373779 L4.98986816,15 L5.02913267e-11,15 Z"></path>
        </g>
      </g>
      `;
      return this;
    }
  
    setDocEdit(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <g fill ="${bg}">
            <path d="M7.016,0.016 L7.016,3.984 L8.279,3.984 L9.932,2.34 L7.016,0.016 Z"></path>
            <path d="M8.979,12.29 C7.468,12.875 5.222,13.757 4.958,13.884 C4.791,13.968 4.594,14.015 4.396,14.015 C3.944,14.015 3.51,13.78 3.237,13.384 C2.972,13.001 2.908,12.525 3.064,12.11 C3.152,11.881 3.99,9.408 4.499,7.902 L4.577,7.671 L7.244,5.017 L5.969,5.017 L5.969,0.012 L0.034,0.012 L0.034,15.97 L11.976,15.97 L11.976,9.426 L9.183,12.212 L8.979,12.29 L8.979,12.29 Z"></path>
            <path d="M14.682,3.91 L13.147,2.396 C12.737,1.988 11.929,1.819 11.54,2.207 L5.485,8.234 C5.485,8.234 4.164,12.147 4.039,12.476 C3.94,12.738 4.27,13.066 4.499,12.951 C4.873,12.765 8.604,11.32 8.604,11.32 L14.675,5.263 C15.065,4.875 15.093,4.317 14.682,3.91 L14.682,3.91 Z M8.021,10.854 L5.454,11.828 L4.993,11.403 L6.218,8.438 L6.959,8.984 L8.017,8.984 L8.021,10.854 L8.021,10.854 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setDocSearch(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <g transform="translate(2.000000, 0.000000)" fill ="${bg}">
            <path d="M8.031,0.031 L8.031,3.969 L11.902,3.969 L8.031,0.031 Z"></path>
            <path d="M4.492,9.021 C3.125,9.021 2.015,10.131 2.015,11.498 C2.015,12.013 2.173,12.491 2.443,12.888 L0.058,15.273 L0.765,15.98 L3.163,13.582 C3.548,13.828 4.001,13.976 4.491,13.976 C5.857,13.976 6.968,12.866 6.968,11.499 C6.968,10.132 5.858,9.021 4.492,9.021 L4.492,9.021 Z M4.516,13.099 C3.646,13.099 2.938,12.391 2.938,11.521 C2.938,10.651 3.646,9.943 4.516,9.943 C5.385,9.943 6.094,10.651 6.094,11.521 C6.094,12.391 5.385,13.099 4.516,13.099 L4.516,13.099 Z"></path>
            <path d="M7,5 L7,0 L0.042,0 L0.042,13.876 L1.101,12.817 C0.941,12.408 0.845,11.966 0.845,11.501 C0.845,9.499 2.468,7.876 4.47,7.876 C6.472,7.876 8.095,9.499 8.095,11.501 C8.095,13.503 6.472,15.126 4.47,15.126 C4.042,15.126 3.638,15.038 3.257,14.903 L2.222,16 L12,16 L12,5 L7,5 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setDocFav(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <g transform="translate(2.000000, 0.000000)" fill ="${bg}">
            <path d="M6,0.058 L0.00800000003,0 L0.00800000003,15.954 L12,15.954 L12,5 L5.97692871,5 C5.96361914,5 6,0.058 6,0.058 Z M7.05236556,9.22261927 L10.108,9.22261927 L7.63684988,11.0294051 L8.57966645,13.953 L6.10851633,12.1451782 L3.63633355,13.953 L4.57915012,11.0294051 L2.108,9.22261927 L5.16363444,9.22261927 L6.10748367,5.953 L7.05236556,9.22261927 L7.05236556,9.22261927 Z"></path>
            <path d="M7.024,0.016 L7.024,3.995 L11.971,3.995 L7.024,0.016 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setDocList(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <g transform="translate(2.000000, 0.000000)" fill ="${bg}">
            <path d="M8.031,0.031 L8.031,3.969 L11.902,3.969 L8.031,0.031 Z"></path>
            <path d="M7,5 L7,0 L0.042,0 L0.042,16 L12,16 L12,5 L7,5 Z M3,8 L2,8 L2,7 L3,7 L3,8 L3,8 Z M3,10 L2,10 L2,9 L3,9 L3,10 L3,10 Z M2.938,12 L1.938,12 L1.938,11 L2.938,11 L2.938,12 L2.938,12 Z M3.958,12 L3.958,11 L8.958,11 L8.958,12 L3.958,12 Z M8.958,10 L3.958,10 L3.958,9 L8.958,9 L8.958,10 L8.958,10 Z M8.958,8 L3.958,8 L3.958,7 L8.958,7 L8.958,8 L8.958,8 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setDocLeft(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <g transform="translate(1.000000, 0.000000)" fill ="${bg}">
            <path d="M9,0 L9,4 L13,4 L9,0 Z"></path>
            <path d="M8,5 L8,0.042 L2.033,0.042 L2.033,11.062 L3,10.258 L3,11.917 L5,12 L5,15.042 L3,15.042 L3,15.979 L12.98,15.979 L12.98,5 L8,5 Z"></path>
            <path d="M1.9,12.004 L1.897,13.004 L3.941,13.004 L3.941,13.979 L1.892,13.979 L1.888,14.958 L0.042,13.506 L1.9,12.004 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setDocRight(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
            <g transform="translate(1.000000, 0.000000)" fill ="${bg}">
              <g transform="translate(2.000000, 0.000000)">
                  <path d="M7,4 L11,4 L7,0 L7,4 Z"></path>
                  <path d="M6,5.042 L6,0.042 L0,0.042 L0,11.445 L3.583,14.583 L1.612,15.979 L11,15.979 L11,5.042 L6,5.042 Z"></path>
              </g>
              <path d="M2.084,13.004 L2.087,14.004 L0.0429999999,14.004 L0.0429999999,14.979 L2.093,14.979 L2.097,15.958 L3.942,14.506 L2.084,13.004 Z"></path>
            </g>
        </g>
      `;
      return this;
    }
  
    setDocUp(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <g transform="translate(1.000000, 0.000000)" fill ="${bg}">
            <path d="M6.984,0 L1.016,0.052 L1.026,9.979 L5.031,15.016 L3,15.016 L3,15.969 L4.031,15.969 L4.031,16 L12.969,16 L12.969,6.012 L6.984,6.012 L6.984,0 Z"></path>
            <path d="M8,0 L8,4.969 L13,4.969 L8,0 Z"></path>
            <path d="M0.016,13.953 L1.009,13.953 L1.009,15.959 L1.975,15.959 L1.975,13.953 L2.953,13.953 L1.531,12.016 L0.016,13.953 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setDocDown(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <g transform="translate(1.000000, 0.000000)" fill ="${bg}">
            <path d="M6.984,0 L1.016,0.052 L1.026,10.979 L3.031,10.969 L3.027,12.953 L5.047,12.953 L3.031,16 L12.969,16 L12.969,6.012 L6.984,6.012 L6.984,0 Z"></path>
            <path d="M8,0 L8,4.969 L13,4.969 L8,0 Z"></path>
            <path d="M3.017,14.059 L1.517,15.943 L0.017,14.059 L1.03,14.059 L1.03,12 L1.984,12 L1.984,14.059 L3.017,14.059 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setDocChecked(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <g fill ="${bg}">
            <path d="M9.024,0.016 L9.024,3.995 L13.971,3.995 L9.024,0.016 Z"></path>
            <path d="M8,5.062 L8,0 L2.008,0 L2.008,12.745 L2.444,13.182 L4.579,11.046 L6.688,13.151 L3.887,15.953 L14,15.953 L14,5 L8,5.062 Z"></path>
            <path d="M4.58,12.46 L2.444,14.596 L1.045,13.196 L0.352,13.889 L2.444,15.981 L5.273,13.152 L4.58,12.46 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setDocRss(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <g transform="translate(2.000000, 0.000000)" fill ="${bg}">
            <path d="M5.958,0.042 L0.02,0.042 L0.02,15.953 L11.979,15.953 L11.979,4.042 L5.958,4.042 L5.958,0.042 L5.958,0.042 Z M1.979,13.062 L1.979,10.757 C3.253,10.757 4.285,11.789 4.285,13.062 L1.979,13.062 L1.979,13.062 Z M5.594,13.062 C5.594,10.992 4.024,9.403 1.98,9.403 L1.98,7.83 C4.698,7.83 7.157,10.31 7.157,13.062 L5.594,13.062 L5.594,13.062 Z M10.079,13.037 L8.517,13.037 C8.517,9.351 5.682,6.454 2.01,6.454 L2.01,4.893 C6.377,4.894 10.079,8.653 10.079,13.037 L10.079,13.037 Z"></path>
            <path d="M7.047,0.036 L7.047,2.989 L11.961,2.989 L7.047,0.036 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setDocCopy(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <g transform="translate(2.000000, 0.000000)" fill ="${bg}">
            <g transform="translate(3.000000, 0.000000)">
              <path d="M5.02081276,0.0619997253 L0.025024413,0.0619997253 L0.025024413,12.9999997 L11.0162356,12.9999997 L11.0162359,2.99108856 L5.02081299,2.99108856 L5.02081276,0.0619997253 Z M1.99676514,10.0960693 L1.99676514,8.937 L9.01641846,9.03331344 L9.01641846,10.0298462 L1.99676514,10.0960693 Z M2.01104737,7.97650142 L2.01104737,7.00561523 L9.03167725,7.00561523 L9.03167725,7.97650142 L2.01104737,7.97650142 Z M9.01647949,6.03051761 L1.96008301,6.03051761 L1.96008301,4.938 L9.01647949,4.938 L9.01647949,6.03051761 Z"></path>
              <path d="M6.06,0.062 L6.06,1.906 L10.812,1.906 L6.06,0.062 Z"></path>
            </g>
            <path d="M0.063,2.062 L0.063,16 L10.9487307,15.9999997 L10.9487307,13.9790034 L1.94458011,13.9790036 L1.94458013,2.062 L0.063,2.062 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setFolder(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <g transform="translate(1.000000, 2.000000)" fill ="${bg}">
            <path d="M7.35,3 L5.788,0.042 L2.021,0.042 L2.021,1.063 L0.023,1.063 L0.023,10.976 L1.043,10.976 L1.045,11.976 L15.947,11.976 L15.968,3 L7.35,3 L7.35,3 Z"></path>
            <path d="M13.964,1.982 L8.354,1.982 L8.024,1.042 L13.964,1.042 L13.964,1.982 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setOpenFolder(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill ="${bg}">
          <path d="M8.03,4.042 L7.228,3.042 L1.015,3.042 L1.015,4.042 L0.00899999996,4.042 L0.00899999996,13 L1.026,13 L1.031,13.984 L14.65,13.963 L15.953,4.041 L8.03,4.041 L8.03,4.042 Z M13.82,13.041 L1.711,13.041 L3.1,4.953 L15.032,4.953 L13.82,13.041 L13.82,13.041 Z" fill ="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setDisk(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g>
            <g transform="translate(3.000000, 3.000000)">
              <rect transform="translate(8.527350, 0.712250) rotate(-45.000000) translate(-8.527350, -0.712250) " x="7.52735959" y="0.212254795" width="2.14597942" height="1.22898821"></rect>
              <rect transform="translate(1.249550, 9.345050) rotate(225.032412) translate(-1.249550, -9.345050) " x="0.749554715" y="8.34505943" width="1.22898841" height="2.14597976"></rect>
              <ellipse cx="5.115" cy="5.141" rx="3.115" ry="3.141"></ellipse>
              <path d="M4.988,3.022 C3.892,3.022 3.009,3.908 3.009,4.999 C3.009,6.091 3.893,6.975 4.988,6.975 C6.079,6.975 6.967,6.091 6.967,4.999 C6.967,3.908 6.079,3.022 4.988,3.022 L4.988,3.022 Z" fill="${bg}"></path>
            </g>
            <path d="M15.958,7.95822586 C15.958,3.51607424 12.385,0 7.979,0 C3.573,0 0,3.51607424 0,7.95822586 C0,12.3993709 3.572,16 7.979,16 C12.543,16 15.958,12.309783 15.958,7.95822586 L15.958,7.95822586 Z M12.261,2.891 L13.13,3.76 L11.612,5.278 L10.743,4.409 L12.261,2.891 L12.261,2.891 Z M3.633,13.193 L2.765,12.324 L4.283,10.806 L5.151,11.675 L3.633,13.193 L3.633,13.193 Z M4.885,7.985 C4.885,6.25 6.28,4.843 8,4.843 C9.719,4.843 11.115,6.249 11.115,7.985 C11.115,9.718 9.719,11.125 8,11.125 C6.279,11.125 4.885,9.719 4.885,7.985 L4.885,7.985 Z" fill="${bg}"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setAlert(bg) {
      this.setViewBox(0,0,512,512);
      this.svg.innerHTML = `
        <g fill="${bg}">
          <path d="M507.494,426.066L282.864,53.537c-5.677-9.415-15.87-15.172-26.865-15.172c-10.995,0-21.188,5.756-26.865,15.172
            L4.506,426.066c-5.842,9.689-6.015,21.774-0.451,31.625c5.564,9.852,16.001,15.944,27.315,15.944h449.259
            c11.314,0,21.751-6.093,27.315-15.944C513.508,447.839,513.336,435.755,507.494,426.066z M256.167,167.227
            c12.901,0,23.817,7.278,23.817,20.178c0,39.363-4.631,95.929-4.631,135.292c0,10.255-11.247,14.554-19.186,14.554
            c-10.584,0-19.516-4.3-19.516-14.554c0-39.363-4.63-95.929-4.63-135.292C232.021,174.505,242.605,167.227,256.167,167.227z
            M256.498,411.018c-14.554,0-25.471-11.908-25.471-25.47c0-13.893,10.916-25.47,25.471-25.47c13.562,0,25.14,11.577,25.14,25.47
            C281.638,399.11,270.06,411.018,256.498,411.018z"/>
        </g>
      `;
      return this;
    }
  
    setFind(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M16,5.954 C16,2.665 13.317,0 10.009,0 C6.698,0 4.016,2.665 4.016,5.954 C4.016,9.241 6.699,11.906 10.009,11.906 C13.317,11.906 16,9.241 16,5.954 L16,5.954 Z M4.934,6.019 C4.934,3.213 7.213,0.943 10.026,0.943 C12.837,0.943 15.114,3.214 15.114,6.019 C15.114,8.823 12.837,11.094 10.026,11.094 C7.213,11.094 4.934,8.822 4.934,6.019 L4.934,6.019 Z"></path>
            <path d="M1.822,15.964 L0,14.142 L4.037,10.104 C4.037,10.104 4.133,10.869 4.617,11.351 C5.099,11.835 5.859,11.927 5.859,11.927 L1.822,15.964 L1.822,15.964 Z"></path>
            <path d="M13.398,5.073 C13.398,5.645 13.838,5.429 13.838,4.634 C13.838,3.264 12.729,2.154 11.359,2.154 C10.562,2.154 10.347,2.593 10.92,2.593 C12.29,2.593 13.398,3.704 13.398,5.073 L13.398,5.073 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setFindText(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g fill="${bg}">
            <rect x="0" y="0" width="13.931" height="0.983"></rect>
            <rect x="0" y="2" width="13.931" height="0.942"></rect>
            <rect x="0" y="14" width="10.958" height="0.951"></rect>
            <g transform="translate(4.000000, 4.000000)">
              <path d="M4.49,0.054 C2.01,0.054 0,2.047 0,4.506 C0,6.965 2.01,8.958 4.49,8.958 C6.97,8.958 8.979,6.965 8.979,4.506 C8.979,2.047 6.971,0.054 4.49,0.054 L4.49,0.054 Z M4.49,8.018 C2.533,8.018 0.947,6.434 0.947,4.479 C0.947,2.525 2.533,0.938 4.49,0.938 C6.446,0.938 8.031,2.525 8.031,4.479 C8.031,6.434 6.446,8.018 4.49,8.018 L4.49,8.018 Z"></path>
              <path d="M11.938,10.611 L10.577,11.972 L7.581,8.976 C7.581,8.976 8.151,8.903 8.512,8.542 C8.873,8.18 8.943,7.614 8.943,7.614 L11.938,10.611 L11.938,10.611 Z"></path>
              <path d="M4.677,2.43 C5.203,2.43 5.006,2.03 4.274,2.03 C3.014,2.03 1.995,3.04 1.995,4.286 C1.995,5.011 2.399,5.207 2.399,4.686 C2.398,3.44 3.418,2.43 4.677,2.43 L4.677,2.43 Z"></path>
            </g>
            <rect x="0" y="4" width="3.973" height="0.962"></rect>
            <rect x="0" y="6" width="3" height="0.973"></rect>
            <rect x="0" y="8" width="2.98" height="0.993"></rect>
            <rect x="0" y="10" width="3.02" height="0.973"></rect>
            <rect x="0" y="12" width="4" height="0.931"></rect>
          </g>
        </g>
      `;
      return this;
    }
  
    setPrint(bg) {
      this.svg.innerHTML = `
      <g stroke="none" stroke-width="1" fill="none">
        <g transform="translate(1.000000, 1.000000)" fill="${bg}">
          <path d="M5,11 L4.99999993,14.9798584 L10.9933471,14.9798584 L10.9933472,11 L5,11 Z"></path>
          <rect x="4" y="0" width="7.948" height="2.96"></rect>
          <path d="M0.041,4.016 L0.041,13.016 L3.95141967,13.016 L3.95141967,10.0096256 L12,10.0096256 L12,13.016 L16.041,13.016 L16.041,4.016 L0.041,4.016 L0.041,4.016 Z M3.01600005,6.02929693 L1.96900005,6.02929693 L1.969,4.953 L3.016,4.953 L3.01600005,6.02929693 Z M5.016,5.969 L3.969,5.969 L3.969,4.969 L5.016,4.969 L5.016,5.969 L5.016,5.969 Z"></path>
        </g>
      </g>
      `;
      return this;
    }
  
    setSave(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(0.968151, 0.000000)" fill="${bg}">
            <path d="M11.993,0.031 L4.035,0.031 L4.035,5.983 L11.993,5.983 L11.993,0.031 L11.993,0.031 Z M11.0318493,5 L9.03184926,5 L9.03184926,1 L11.0318493,1 L11.0318493,5 L11.0318493,5 Z"></path>
            <path d="M14.0196178,0.031 L13.1109039,0.031 L13.1109039,7.10112134 L2.97331513,7.10112134 L2.97331513,0.031 L2.02037174,0.031 C0.91564095,0.031 0.0209999999,0.950085607 0.0209999999,2.08335637 L0.0209999999,12.9776381 C0.0209999999,14.1109088 0.916646164,15.031 2.02037174,15.031 L14.020623,15.031 C15.1263591,15.031 16.021,14.1109088 16.021,12.9776381 L16.021,2.08335637 L14.0196178,0.031 L14.0196178,0.031 Z M12,13 L4,13 L4,12 L12,12 L12,13 L12,13 Z M12,11 L4,11 L4,10 L12,10 L12,11 L12,11 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setEdit(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M16.479,2.536 L14.474,0.546 C13.935,0.00899999997 13.091,-0.019 12.59,0.482 L3.47,9.616 C3.47,9.616 1.158,14.936 1.001,15.366 C0.876,15.706 1.307,16.137 1.605,15.991 C2.085,15.754 7.345,13.471 7.345,13.471 L16.487,4.299 C16.989,3.797 17.018,3.073 16.479,2.536 L16.479,2.536 Z M2.312,13.906 L4.033,10.279 L4.015,10.985 L5.013,10.971 L14.537,1.529 L15.796,2.765 L6.612,11.73 L6.385,12.482 L6.871,12.968 L3.06,14.624 L2.312,13.906 L2.312,13.906 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setEditText(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(0.000000, 1.000000)" fill="${bg}">
            <path d="M15.682,1.91 L14.147,0.396 C13.737,-0.012 12.929,-0.181 12.54,0.207 L6.485,6.234 C6.485,6.234 5.164,10.147 5.039,10.476 C4.94,10.738 5.27,11.066 5.499,10.951 C5.873,10.765 9.604,9.32 9.604,9.32 L15.675,3.263 C16.065,2.875 16.093,2.317 15.682,1.91 L15.682,1.91 Z M9.021,8.854 L6.454,9.828 L5.993,9.403 L7.218,6.438 L7.959,6.984 L9.017,6.984 L9.021,8.854 L9.021,8.854 Z"></path>
            <path d="M12.042,9.345 L12.042,13.042 L0.958,13.042 L0.958,2 L9.141,1.917 L9.953,1.058 L0,1.058 L0,14 L13,14 L12.943,8.578 L12.042,9.345 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setRefresh(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M0.04,7.379 C0.115,3.257 3.392,-0.033 7.344,0.042 C11.261,0.115 14.198,2.971 14.174,7.045 L15.719,7.045 C15.936,7.265 15.936,7.624 15.719,7.844 L13.873,9.86 C13.656,10.082 13.306,10.082 13.088,9.86 L11.363,7.844 C11.145,7.624 11.145,7.265 11.363,7.045 L12.785,7.045 C12.808,3.707 10.526,1.461 7.318,1.401 C4.085,1.339 1.406,4.031 1.343,7.403 C1.281,10.725 3.788,13.48 6.956,13.619 L6.956,14.98 C3.059,14.842 -0.035,11.46 0.04,7.379 L0.04,7.379 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setBlock(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M9.016,0.06 C4.616,0.06 1.047,3.629 1.047,8.029 C1.047,12.429 4.615,15.998 9.016,15.998 C13.418,15.998 16.985,12.429 16.985,8.029 C16.985,3.629 13.418,0.06 9.016,0.06 L9.016,0.06 Z M3.049,8.028 C3.049,4.739 5.726,2.062 9.016,2.062 C10.37,2.062 11.616,2.52 12.618,3.283 L4.271,11.631 C3.508,10.629 3.049,9.381 3.049,8.028 L3.049,8.028 Z M9.016,13.994 C7.731,13.994 6.544,13.583 5.569,12.889 L13.878,4.58 C14.571,5.555 14.982,6.743 14.982,8.028 C14.981,11.317 12.306,13.994 9.016,13.994 L9.016,13.994 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setClose(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M12.566,8 L15.611,4.956 C16.031,4.535 16.031,3.853 15.611,3.434 L12.566,0.389 C12.146,-0.031 11.464,-0.031 11.043,0.389 L7.999,3.433 L4.955,0.389 C4.534,-0.031 3.852,-0.031 3.432,0.389 L0.388,3.434 C-0.034,3.854 -0.034,4.536 0.387,4.956 L3.431,8 L0.387,11.044 C-0.034,11.465 -0.034,12.147 0.388,12.567 L3.432,15.611 C3.852,16.032 4.534,16.032 4.955,15.611 L7.999,12.567 L11.043,15.611 C11.464,16.032 12.146,16.032 12.566,15.611 L15.611,12.567 C16.031,12.146 16.031,11.464 15.611,11.044 L12.566,8 L12.566,8 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setInfo(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(4.000000, 0.000000)" fill="${bg}">
            <ellipse cx="4.486" cy="1.525" rx="1.486" ry="1.525"></ellipse>
            <path d="M4.479,13.325 L5.852,4.703 C5.852,4.703 5.881,4.004 5.216,4.004 C3.715,4.004 -0.074,4.008 -0.074,4.008 C-0.074,4.008 3.905,4.721 3.905,6.067 C3.905,6.067 2.597,11.827 2.597,13.357 C2.597,14.888 3.433,16.001 4.934,16.001 C6.159,16.001 7.272,14.665 7.188,12.718 C5.991,14.554 4.479,14.82 4.479,13.325 L4.479,13.325 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setChecked(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M3.432,6.189 C3.824,5.798 4.455,5.798 4.847,6.189 L6.968,8.31 L13.147,2.131 C13.531,1.747 14.157,1.753 14.548,2.144 L16.67,4.266 C17.06,4.657 17.066,5.284 16.684,5.666 L7.662,14.687 C7.278,15.07 6.651,15.064 6.261,14.673 L1.311,9.723 C0.92,9.333 0.92,8.7 1.311,8.31 L3.432,6.189 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setDelete(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M0.982,5.073 L2.007,15.339 C2.007,15.705 2.314,16 2.691,16 L10.271,16 C10.648,16 10.955,15.705 10.955,15.339 L11.98,5.073 L0.982,5.073 L0.982,5.073 Z M7.033,14.068 L5.961,14.068 L5.961,6.989 L7.033,6.989 L7.033,14.068 L7.033,14.068 Z M9.033,14.068 L7.961,14.068 L8.961,6.989 L10.033,6.989 L9.033,14.068 L9.033,14.068 Z M5.033,14.068 L3.961,14.068 L2.961,6.989 L4.033,6.989 L5.033,14.068 L5.033,14.068 Z"></path>
            <path d="M12.075,2.105 L8.937,2.105 L8.937,0.709 C8.937,0.317 8.481,0 8.081,0 L4.986,0 C4.586,0 4.031,0.225 4.031,0.615 L4.031,2.011 L0.886,2.105 C0.485,2.105 0.159,2.421 0.159,2.813 L0.159,3.968 L12.8,3.968 L12.8,2.813 C12.801,2.422 12.477,2.105 12.075,2.105 L12.075,2.105 Z M4.947,1.44 C4.947,1.128 5.298,0.875 5.73,0.875 L7.294,0.875 C7.726,0.875 8.076,1.129 8.076,1.44 L8.076,2.105 L4.946,2.105 L4.946,1.44 L4.947,1.44 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setDownload(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 1.000000)" fill="${bg}">
            <path d="M14.031,8.016 L14.031,12.016 L2,12.016 L2,8.016 L0,8.016 L0,15 L15.938,15 L15.938,8.016 L14.031,8.016 Z"></path>
            <path d="M8.072,8.947 L10.982,5.071 L8.968,5.05 L8.968,0.065 L7.03,0.065 L7.03,5.05 L5.03,5.05 L8.072,8.947 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setUpload(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 1.000000)" fill="${bg}">
            <path d="M14,8.047 L14,12.047 L2,12.047 L2,8.047 L0,8.047 L0,15 L15.969,15 L15.969,8.047 L14,8.047 Z"></path>
            <path d="M7.997,0 L5,3.963 L7.016,3.984 L7.016,8.969 L8.953,8.969 L8.953,3.984 L10.953,3.984 L7.997,0 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setUser(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 1.000000)" fill="${bg}">
              <path d="M11.564,9.004 C10.717,10.159 7.905,10.454 7.905,10.454 C7.905,10.454 5.029,10.17 4.182,9.028 C0.122,9.028 0,14.933 0,14.933 L15.808,14.933 C15.808,14.934 16.127,9.004 11.564,9.004 L11.564,9.004 Z"></path>
              <path d="M10.818,3.02 C10.818,4.689 9.515,7.877 7.91,7.877 C6.303,7.877 5,4.689 5,3.02 C5,1.353 6.303,0 7.91,0 C9.515,0.001 10.818,1.353 10.818,3.02 L10.818,3.02 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setPeople(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(0.000000, 3.000000)" fill="${bg}">
            <path d="M9.855,7.053 C9.432,7.624 8.021,7.772 8.021,7.772 C8.021,7.772 6.58,7.63 6.156,7.066 C4.121,7.066 3.058,9.989 3.058,9.989 L12.984,9.989 C12.984,9.988 12.146,7.053 9.855,7.053 L9.855,7.053 Z"></path>
            <path d="M9.943,2.918 C9.943,3.977 9.062,6 7.978,6 C6.89,6 6.011,3.977 6.011,2.918 C6.011,1.859 6.89,1 7.978,1 C9.062,1 9.943,1.859 9.943,2.918 L9.943,2.918 Z"></path>
            <path d="M14.104,5.021 C13.733,5.596 12.577,5.902 12.577,5.902 C12.577,5.902 11.222,5.601 10.848,5.035 C10.848,5.035 10.836,5.699 10.271,6.471 C12.071,6.239 12.849,7.974 12.849,7.974 L15.98,7.98 C15.979,7.979 16.119,5.021 14.104,5.021 L14.104,5.021 Z"></path>
            <path d="M13.99,1.533 C13.99,2.381 13.328,3.998 12.511,3.998 C11.691,3.998 11.03,2.381 11.03,1.533 C11.03,0.687 11.693,0 12.511,0 C13.328,0 13.99,0.688 13.99,1.533 L13.99,1.533 Z"></path>
            <path d="M1.918,5.021 C2.296,5.592 3.467,5.896 3.467,5.896 C3.467,5.896 4.84,5.597 5.215,5.035 C5.215,5.035 5.229,5.695 5.801,6.461 C3.977,6.231 3.191,7.953 3.191,7.953 L0.021,7.958 C0.021,7.958 -0.122,5.021 1.918,5.021 L1.918,5.021 Z"></path>
            <path d="M2.002,1.566 C2.002,2.394 2.666,3.977 3.481,3.977 C4.3,3.977 4.961,2.394 4.961,1.566 C4.961,0.737 4.299,0.065 3.481,0.065 C2.664,0.065 2.002,0.737 2.002,1.566 L2.002,1.566 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setMan(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 1.000000)" fill="${bg}">
            <path d="M8.918,12.338 L7.975,13.958 L7.033,12.338 L7.521,9.042 L8.429,9.042 L8.918,12.338 Z"></path>
            <path d="M5.534,14 C3.833,11.746 4.378,8.224 4.21,8 C0.123,7.999 0,14 0,14 L5.534,14 Z"></path>
            <path d="M10.5819092,14 L16,14 C15.999,14 16,7.96850586 12.319458,7.96850586 C12.156458,8.18850586 12.2849092,11.728 10.5819092,14 Z"></path>
            <path d="M8.00799561,7.94122333 C6.38999561,7.94122333 5,4.732 5,3.064 C5,1.394 6.38899561,0.0581054693 8.00799561,0.0581054693 C9.62799561,0.0581054693 11.0015869,1.39500007 11.0015869,3.06400007 C11.0015869,4.73200007 9.62799561,7.94122333 8.00799561,7.94122333 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setWoman(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 2.000000)" fill="${bg}">
            <path d="M11.677,9 C8.834,11.147 10.953,12.424 8.024,12.424 C5.092,12.424 7.42,11.233 4.264,9.026 C-0.644,10.407 0.0375978199,13.90979 0.0375978199,13.90979 L15.9125978,13.90979 C15.9115978,13.90979 16.564,9.989 11.677,9 L11.677,9 Z"></path>
            <path d="M11.574,4.998 L10.999,6.878 L12.883,7 C12.883,7 11.73,6.15 11.574,4.998 L11.574,4.998 Z"></path>
            <path d="M4.394,5.023 L4.932,6.916 L3.045,7 C3.045,7 4.214,6.174 4.394,5.023 L4.394,5.023 Z"></path>
            <path d="M10.929,3.046 C10.929,4.726 9.606,7.941 7.975,7.941 C6.343,7.941 5.021,4.726 5.021,3.046 C5.021,1.363 6.343,0 7.975,0 C9.605,0.001 10.929,1.364 10.929,3.046 L10.929,3.046 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setPersonTalk(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g fill="${bg}">
            <path d="M5.524,12.285 C4.664,12.285 3.509,11.836 2.923,11.099 C0.114,11.099 0.029,15 0.029,15 L10.966,15 C10.967,15 11.186,11.083 8.029,11.083 C7.445,11.828 6.386,12.285 5.524,12.285 Z"></path>
            <path d="M7.938,6.264 C7.938,7.515 6.833,9.907 5.469,9.907 C4.105,9.907 3,7.515 3,6.264 C3,5.015 4.104,4 5.469,4 C6.833,4 7.938,5.015 7.938,6.264 L7.938,6.264 Z"></path>
            <path d="M12.527,0.041 C10.617,0.041 9.066,1.199 9.066,2.631 C9.066,3.937 10.36,5.013 12.037,5.192 L11.051,7.004 L13.807,5.035 C15.084,4.654 15.989,3.722 15.989,2.631 C15.988,1.199 14.439,0.041 12.527,0.041 L12.527,0.041 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setFlag(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <rect x="0" y="0" width="1.99365234" height="15.913"></rect>
            <path d="M3.056,0.52 L3.056,8.095 C3.056,8.095 4.667,6.664 8.244,8 C11.82,9.338 12.549,8.974 13.956,8.742 C13.956,8.742 11.908,7.871 10.734,4.713 C10.734,4.713 13.721,1.958 13.956,0.439 C13.956,0.439 10.256,1.651 8.205,0.68 C6.152,-0.293 3.994,-0.089 3.056,0.52 L3.056,0.52 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setFlag2(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <ellipse cx="5.433" cy="14.98" rx="5.433" ry="0.98"></ellipse>
            <rect x="5" y="0" width="0.956" height="12.959"></rect>
            <path d="M7.031,0.103 C7.031,0.103 8.675,-0.317 11.481,1.564 C14.287,3.446 13.73,5.076 15.584,5.21 C16.582,5.144 15.164,6.378 13.73,5.814 C10.949,4.721 10.13,3.177 7.031,4.604 L7.031,0.103 L7.031,0.103 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setInfo2(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M8.969,0 C4.586,0 1.031,3.553 1.031,7.938 C1.031,12.323 4.586,15.876 8.969,15.876 C13.352,15.876 16.907,12.323 16.907,7.938 C16.907,3.553 13.352,0 8.969,0 L8.969,0 Z M8,3 L10,3 L10,5 L8,5 L8,3 L8,3 Z M10,11.7651642 C10,12.4468559 9.55371901,13 9,13 C8.44719927,13 8,12.4478297 8,11.7651642 L8,7.23483584 C8,6.55411797 8.44719927,6 9,6 C9.55371901,6 10,6.55314413 10,7.23483584 L10,11.7651642 L10,11.7651642 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setMusic(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M7.942,0.751 L6.035,0.042 L6.035,11.139 C5.433,11.089 4.75,11.176 4.111,11.438 C2.517,12.089 1.689,13.655 2.146,14.75 C2.604,15.848 4.175,16.354 5.767,15.703 C6.991,15.203 7.84,14.252 7.951,13.341 L7.943,3.524 C10.57,4.322 12.463,5.197 12.463,7.808 C12.463,8.735 13.983,9.631 13.983,5.996 C13.982,2.904 11.33,1.034 7.942,0.751 L7.942,0.751 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setMusicNote(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M6.021,2.188 L6.021,11.362 C5.46,11.327 4.843,11.414 4.229,11.663 C2.624,12.312 1.696,13.729 2.155,14.825 C2.62,15.924 4.294,16.284 5.898,15.634 C7.131,15.134 7.856,14.184 7.965,13.272 L7.958,4.387 L15.02,3.028 L15.02,9.406 C14.422,9.343 13.746,9.432 13.076,9.703 C11.471,10.353 10.544,11.77 11.004,12.866 C11.467,13.964 13.141,14.325 14.746,13.675 C15.979,13.174 16.836,12.224 16.947,11.313 L16.958,0.00199999998 L6.021,2.188 L6.021,2.188 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setPhoto(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(0.995000, 2.980000)" fill="${bg}">
            <circle cx="7.958" cy="6.958" r="2.958"></circle>
            <path d="M14.666,2.042 L10.953,2.042 L9.937,0.031 L6,0.031 L5,2.042 L1.333,2.042 C0.597,2.042 0,2.639 0,3.375 L0,10.625 C0,11.361 0.597,11.959 1.333,11.959 L14.666,11.959 C15.402,11.959 16,11.361 16,10.625 L16,3.375 C16,2.639 15.402,2.042 14.666,2.042 L14.666,2.042 Z M6.953,0.969 L9.047,0.969 L9.047,2.031 L6.953,2.031 L6.953,0.969 L6.953,0.969 Z M8.002,11.033 C5.764,11.033 3.947,9.221 3.947,6.985 C3.947,4.749 5.763,2.937 8.002,2.937 C10.242,2.937 12.057,4.749 12.057,6.985 C12.057,9.221 10.242,11.033 8.002,11.033 L8.002,11.033 Z M14,4.031 L11.953,4.031 L11.953,2.969 L14,2.969 L14,4.031 L14,4.031 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setSecurity(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g fill="${bg}">
            <rect x="1" y="12" width="3.05" height="1.945"></rect>
            <rect transform="translate(5.627300, 9.562000) rotate(-70.633701) translate(-5.627300, -9.562000) " x="2.62735682" y="9.06200947" width="6.1138842" height="1.25397625"></rect>
            <g transform="translate(2.000000, 0.000000)">
              <path d="M0.595,3.217 L0.109,4.881 C0.109,4.881 -0.185,5.655 0.536,5.895 C1.348,6.143 7.528,7.979 7.528,7.979 L8.919,5.599 L0.595,3.217 L0.595,3.217 Z"></path>
              <path d="M11.709,4.971 C11.814,4.932 13.958,3.771 13.958,3.771 C13.796,3.608 13.701,3.485 13.463,3.416 L2.145,0.101 C1.399,-0.117 0.622,0.302 0.407,1.038 L0.056,2.235 C0.056,2.235 9.764,5.079 10.062,5.121 L9.043,6.919 L11.989,7.944 L12.979,5.022 C12.979,5.021 11.869,5.021 11.709,4.971 L11.709,4.971 L11.709,4.971 Z"></path>
            </g>
            <path d="M1.759,12.179 L1.403,11.65 C3.347,10.452 4.013,7.254 3.993,4.879 L4.651,4.873 C4.672,7.529 3.925,10.844 1.759,12.179 L1.759,12.179 Z"></path>
            <path d="M2.029,12.996 C2.029,14.641 1.121,15.973 0,15.973 L0,10.021 C1.121,10.021 2.029,11.353 2.029,12.996 L2.029,12.996 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setCloseButton(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M13.646,2.371 C10.535,-0.739 5.469,-0.74 2.358,2.371 C-0.753,5.483 -0.752,10.548 2.358,13.66 C5.469,16.77 10.534,16.771 13.646,13.66 C16.758,10.547 16.757,5.483 13.646,2.371 L13.646,2.371 Z M3.587,12.431 C1.148,9.993 1.146,6.028 3.58,3.594 C6.014,1.159 9.979,1.162 12.418,3.6 C14.856,6.038 14.857,10.004 12.424,12.438 C9.988,14.872 6.024,14.869 3.587,12.431 L3.587,12.431 Z"></path>
            <path d="M10.164,11.063 C9.982,11.063 9.845,10.991 9.776,10.922 L8.009,9.157 L6.314,10.852 C6.248,10.918 6.095,10.998 5.891,10.998 C5.738,10.998 5.507,10.952 5.288,10.733 C5.067,10.513 5.018,10.295 5.017,10.153 C5.013,9.965 5.086,9.823 5.157,9.753 L6.881,8.028 L5.201,6.35 C5.049,6.197 4.922,5.723 5.321,5.325 C5.546,5.1 5.767,5.053 5.914,5.053 C6.097,5.053 6.234,5.125 6.301,5.194 L8.009,6.9 L9.705,5.204 C9.773,5.137 9.925,5.058 10.129,5.058 C10.283,5.058 10.514,5.104 10.733,5.324 C11.111,5.703 11.035,6.134 10.864,6.304 L9.138,8.03 L10.875,9.766 C10.942,9.834 11.021,9.986 11.021,10.19 C11.021,10.344 10.976,10.573 10.756,10.792 C10.531,11.016 10.311,11.063 10.164,11.063 L10.164,11.063 L10.164,11.063 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setMaximize(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g fill="${bg}">
            <path d="M10,0.834 L15.083,0.834 L15.083,5.875 L15.917,5.875 L15.917,0 L10,0 L10,0.834 Z"></path>
            <path d="M0.834,5.875 L0.834,0.834 L5.917,0.834 L5.917,0 L0,0 L0,5.875 L0.834,5.875 Z"></path>
            <path d="M15.083,10.125 L15.083,15.166 L10,15.166 L10,16 L15.917,16 L15.917,10.125 L15.083,10.125 Z"></path>
            <path d="M5.917,15.166 L0.834,15.166 L0.834,10.125 L0,10.125 L0,16 L5.917,16 L5.917,15.166 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setMaximize2(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 3.000000)" fill="${bg}">
            <rect x="2" y="2" width="12" height="8"></rect>
            <path d="M2.918,11.938 L0,11.938 L0,9.062 L1,9.062 L1,11.042 L2.918,11.042 L2.918,11.938 Z"></path>
            <path d="M16,11.938 L13.062,11.938 L13.062,11.042 L15,11.042 L15,9.058 L16,9.058 L16,11.938 Z"></path>
            <path d="M16,2.917 L15,2.917 L15,0.967 L13.057,0.967 L13.057,0.021 L16,0.021 L16,2.917 Z"></path>
            <path d="M1,2.938 L0,2.938 L0,0 L2.938,0 L2.938,0.938 L1,0.938 L1,2.938 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setMinimize(bg) {
      this.svg.setAttributeNS(null, "viewBox", "0 0  512 512");
      this.svg.innerHTML = `
        <g fill="${bg}">
          <path d="m103.337 103.337h-103.337v34.446h120.56c9.52 0 17.223-7.703 17.223-17.223v-120.56h-34.446z"/>
          <path d="m378.902 103.337v-103.337h-34.446v120.56c0 9.52 7.703 17.223 17.223 17.223h120.56v-34.446z"/><path d="m344.456 361.679v103.337h34.446v-86.114h103.337v-34.446h-120.56c-9.519 0-17.223 7.704-17.223 17.223z"/>
          <path d="m120.56 344.456h-120.56v34.446h103.337v103.337h34.446v-120.56c0-9.519-7.704-17.223-17.223-17.223z"/>
        </g>
      `;
      return this;
    }
  
    setMinimize2(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 1.000000)" fill="${bg}">
            <g transform="translate(4.000000, 4.000000)">
              <path d="M0.021,0.001 L0.021,5.939 L7.978,5.939 L7.978,0.001 L0.021,0.001 L0.021,0.001 Z M7.042,5.062 L0.958,5.062 L0.958,0.937 L7.042,0.937 L7.042,5.062 L7.042,5.062 Z"></path>
              <rect x="2" y="2" width="3.917" height="1.938"></rect>
            </g>
            <path d="M0,10 L1.387,11.375 L0.002,12.756 L1.226,13.972 L2.613,12.591 L4,13.965 L4,10 L0,10 Z"></path>
            <path d="M14.763,0.04 L13.387,1.399 L12,0.035 L12,3.969 L16,3.969 L14.613,2.604 L15.988,1.246 L14.763,0.04 Z"></path>
            <path d="M14.761,13.971 L15.987,12.756 L14.607,11.381 L16,10 L12,10 L12,13.965 L13.381,12.597 L14.761,13.971 Z"></path>
            <path d="M1.27,0.08 L0.043,1.287 L1.381,2.609 L0,3.969 L4,3.969 L4,0.035 L2.607,1.405 L1.27,0.08 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setButtonPlus(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M8.021,0.114 C3.627,0.114 0.052,3.668 0.052,8.036 C0.052,12.404 3.627,15.958 8.021,15.958 C12.416,15.958 15.99,12.404 15.99,8.036 C15.99,3.668 12.415,0.114 8.021,0.114 L8.021,0.114 Z M8.013,14.07 C4.684,14.07 1.973,11.346 1.973,7.999 C1.973,4.652 4.684,1.928 8.013,1.928 C11.342,1.928 14.052,4.653 14.052,7.999 C14.052,11.347 11.342,14.07 8.013,14.07 L8.013,14.07 Z"></path>
            <path d="M7.996,11.969 C7.342,11.969 7.037,11.532 7.037,11.238 L7.037,8.983 L4.813,8.983 C4.548,8.983 4.031,8.685 4.031,7.997 C4.031,7.343 4.469,7.038 4.763,7.038 L7.034,7.038 L7.034,4.801 C7.034,4.537 7.332,4.019 8.02,4.019 C8.674,4.019 8.979,4.457 8.979,4.751 L8.979,7.036 L11.215,7.036 C11.48,7.036 11.998,7.335 11.998,8.023 C11.998,8.676 11.56,8.981 11.266,8.981 L8.981,8.981 L8.981,11.187 C8.982,11.45 8.685,11.969 7.996,11.969 L7.996,11.969 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setPlus(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M16,6 L12,6 L12,2 C12,1.447 11.553,1 11,1 L7,1 C6.447,1 6,1.447 6,2 L6,6 L2,6 C1.447,6 1,6.447 1,7 L1,11 C1,11.553 1.447,12 2,12 L6,12 L6,16 C6,16.553 6.447,17 7,17 L11,17 C11.553,17 12,16.553 12,16 L12,12 L16,12 C16.553,12 17,11.553 17,11 L17,7 C17,6.447 16.553,6 16,6 L16,6 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setButtonPlus2(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M9.021,0.097 C4.625,0.097 1.063,3.655 1.063,8.04 C1.063,12.428 4.625,15.985 9.021,15.985 C13.416,15.985 16.979,12.427 16.979,8.04 C16.979,3.654 13.415,0.097 9.021,0.097 L9.021,0.097 Z M11.325,9.082 L10.088,9.082 L10.088,10.319 C10.088,11.298 10.147,12.088 9,12.088 C7.856,12.088 7.912,11.298 7.912,10.319 L7.912,9.082 L6.675,9.082 C5.696,9.082 4.906,9.138 4.906,7.994 C4.906,6.848 5.696,6.906 6.675,6.906 L7.912,6.906 L7.912,5.669 C7.912,4.69 7.856,3.9 9,3.9 C10.146,3.9 10.088,4.69 10.088,5.669 L10.088,6.906 L11.325,6.906 C12.304,6.906 13.094,6.847 13.094,7.994 C13.094,9.138 12.304,9.082 11.325,9.082 L11.325,9.082 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setButtonMinus(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g fill="${bg}">
            <path d="M8.021,0.114 C3.627,0.114 0.052,3.668 0.052,8.036 C0.052,12.404 3.627,15.958 8.021,15.958 C12.416,15.958 15.99,12.404 15.99,8.036 C15.99,3.668 12.415,0.114 8.021,0.114 L8.021,0.114 Z M8.013,14.07 C4.684,14.07 1.973,11.346 1.973,7.999 C1.973,4.652 4.684,1.928 8.013,1.928 C11.342,1.928 14.052,4.653 14.052,7.999 C14.052,11.347 11.342,14.07 8.013,14.07 L8.013,14.07 Z"></path>
            <path d="M4.813,8.982 C4.548,8.982 4.031,8.684 4.031,7.996 C4.031,7.342 4.469,7.037 4.763,7.037 L11.216,7.035 C11.481,7.035 11.999,7.334 11.999,8.022 C11.999,8.675 11.561,8.98 11.267,8.98 L4.813,8.982 L4.813,8.982 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setMinus(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M2,12 C1.447,12 1,11.553 1,11 L1,7 C1,6.447 1.447,6 2,6 L16,6 C16.553,6 17,6.447 17,7 L17,11 C17,11.553 16.553,12 16,12 L2,12 L2,12 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setButtonMinus2(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M8.021,1.097 C3.625,1.097 0.063,4.655 0.063,9.04 C0.063,13.428 3.625,16.985 8.021,16.985 C12.416,16.985 15.979,13.427 15.979,9.04 C15.979,4.654 12.415,1.097 8.021,1.097 L8.021,1.097 Z M10.271617,9.9995909 L5.728383,9.9995909 C4.77186126,9.9995909 4,10.0510388 4,9.00003127 C4,7.9471863 4.77186126,8.00047164 5.728383,8.00047164 L10.271617,8.00047164 C11.2281387,8.00047164 12,7.94626758 12,9.00003127 C12,10.0510388 11.2281387,9.9995909 10.271617,9.9995909 L10.271617,9.9995909 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setBatery(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(4.000000, 0.000000)" fill="${bg}">
            <path d="M6.446,3 L2.534,3 C2.279,3 2,3.301 2,3.58 L2,13.482 C2,13.755 2.278,13.979 2.535,13.979 L6.447,13.979 C6.701,13.979 7,13.755 7,13.482 L7,3.58 C7,3.301 6.703,3 6.446,3 L6.446,3 Z"></path>
            <path d="M7.306,1.021 L5.999,1.021 L5.999,0.005 L3,0.005 L3,1.021 L1.77,1.021 C0.834,1.021 0.076,1.787 0.076,2.73 L0.076,14.292 C0.076,15.234 0.835,16.001 1.77,16.001 L7.306,16.001 C8.242,16.001 9,15.234 9,14.292 L9,2.73 C9,1.786 8.241,1.021 7.306,1.021 L7.306,1.021 Z M8,14 C8,14.525 7.506,15 7,15 L2,15 C1.494,15 0.989,14.525 0.989,14 L0.989,3 C0.989,2.477 1.494,2 2,2 L7,2 C7.506,2 8,2.476 8,3 L8,14 L8,14 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setPdf(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(2.000000, 0.000000)" fill="${bg}">
            <path d="M6.964,0 L0.016,0 L0.016,15.958 L11.958,15.958 L11.958,5.033 L6.964,5.033 L6.964,0 L6.964,0 Z M4.047,10.036 L3.029,10.036 L3.029,11.021 L2.031,11.021 L2.031,12.046 L0.969,12.046 L0.969,7.954 L3.03,7.968 L3.03,8.952 L4.048,8.952 L4.048,10.036 L4.047,10.036 Z M8.953,7.953 L11.031,7.953 L11.031,9.031 L10.02,9.031 L10.02,9.953 L11.031,9.953 L11.031,11.014 L10.02,11.014 L10.02,12.032 L8.953,12.032 L8.953,7.953 L8.953,7.953 Z M7.033,7.971 L7.033,8.969 L8.006,8.969 L8.02,11 L7.016,11 L7.016,12.016 L4.969,12.016 L4.969,7.961 L7.033,7.971 L7.033,7.971 Z"></path>
            <path d="M8.025,0.021 L8.025,3.988 L11.979,3.988 L8.025,0.021 Z"></path>
            <rect x="2" y="9" width="0.973" height="0.961"></rect>
            <rect x="6" y="9" width="0.969" height="1.983"></rect>
          </g>
        </g>
      `;
      return this;
    }
  
    setExcel(bg) {
      this.setViewBox(0,0,26,26);
      this.svg.innerHTML = `
        <g>
          <path style="fill:${bg};" d="M25.162,3H16v2.984h3.031v2.031H16V10h3v2h-3v2h3v2h-3v2h3v2h-3v3h9.162
            C25.623,23,26,22.609,26,22.13V3.87C26,3.391,25.623,3,25.162,3z M24,20h-4v-2h4V20z M24,16h-4v-2h4V16z M24,12h-4v-2h4V12z M24,8
            h-4V6h4V8z"/>
          <path style="fill:${bg};" d="M0,2.889v20.223L15,26V0L0,2.889z M9.488,18.08l-1.745-3.299c-0.066-0.123-0.134-0.349-0.205-0.678
            H7.511C7.478,14.258,7.4,14.494,7.277,14.81l-1.751,3.27H2.807l3.228-5.064L3.082,7.951h2.776l1.448,3.037
            c0.113,0.24,0.214,0.525,0.304,0.854h0.028c0.057-0.198,0.163-0.492,0.318-0.883l1.61-3.009h2.542l-3.037,5.022l3.122,5.107
            L9.488,18.08L9.488,18.08z"/>
        </g>
      `;
      return this;
    }
  
    setLock(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M13,4.017 C13,1.802 11.252,0 9.104,0 L7.927,0 C5.779,0 4.031,1.802 4.031,4.017 L4.031,7.33 C3.397,8.222 3.021,9.309 3.021,10.485 C3.021,13.502 5.462,15.945 8.479,15.945 C11.494,15.945 13.937,13.502 13.937,10.485 C13.938,9.362 13.583,8.331 13,7.464 L13,4.017 Z M9.104,2 C10.15,2 11,2.904 11,4.017 L11,5.663 C10.244,5.266 9.393,5.027 8.479,5.027 C7.56,5.027 6.697,5.256 5.937,5.657 L5.937,4.016 C5.938,2.904 6.881,2 7.927,2 L9.104,2 Z M8.479,11.846 C8.842,11.846 9.172,11.699 9.416,11.467 L11.994,10.714 C11.875,12.561 10.355,14.026 8.479,14.026 C6.525,14.026 4.939,12.44 4.939,10.486 C4.939,8.533 6.525,6.95 8.479,6.95 C10.367,6.95 11.898,8.434 12,10.299 L9.427,9.518 C9.182,9.279 8.849,9.13 8.48,9.13 C7.73,9.13 7.122,9.739 7.122,10.486 C7.121,11.235 7.729,11.846 8.479,11.846 L8.479,11.846 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setUnLock(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M12.927,0 C10.779,0 9.031,1.802 9.031,4.017 L9.031,5.679 C8.268,5.272 7.404,5.028 6.479,5.028 C3.462,5.028 1.021,7.473 1.021,10.486 C1.021,13.503 3.462,15.946 6.479,15.946 C9.494,15.946 11.937,13.503 11.937,10.486 C11.937,9.325 11.557,8.263 10.937,7.38 L10.937,4.018 C10.937,2.906 11.88,2.001 12.926,2.001 L13.103,2.001 C14.149,2.001 14.999,2.905 14.999,4.018 L14.999,6.901 L16.999,6.901 L16.999,4.018 C17,1.802 15.252,0 13.104,0 L12.927,0 Z M7.416,11.467 L9.994,10.714 C9.875,12.561 8.355,14.026 6.479,14.026 C4.525,14.026 2.939,12.44 2.939,10.486 C2.939,8.533 4.525,6.95 6.479,6.95 C8.367,6.95 9.898,8.434 10,10.299 L7.427,9.518 C7.182,9.279 6.849,9.13 6.48,9.13 C5.73,9.13 5.122,9.739 5.122,10.486 C5.121,11.235 5.729,11.846 6.479,11.846 C6.842,11.846 7.172,11.699 7.416,11.467 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setReload(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 2.000000)" fill="${bg}">
            <path d="M15.796,6.908 L14.234,5.21 C14.019,4.998 13.672,4.998 13.458,5.21 L11.894,6.908 C11.679,7.122 11.679,7.467 11.894,7.68 L13.188,7.68 C12.702,9.505 11.27,10.976 9.399,11.47 C7.231,12.042 4.913,11.191 3.632,9.351 L2.541,10.102 C3.807,11.921 5.884,12.966 8.039,12.966 C8.604,12.966 9.176,12.894 9.737,12.745 C12.188,12.099 14.04,10.112 14.55,7.68 L15.795,7.68 C16.01,7.467 16.01,7.122 15.796,6.908 L15.796,6.908 Z"></path>
            <path d="M4.475,6.021 C4.69,5.808 4.69,5.462 4.475,5.249 L3.018,5.249 C3.516,3.448 4.936,2.001 6.789,1.511 C8.959,0.938 11.275,1.791 12.555,3.632 L13.647,2.88 C12.049,0.585 9.161,-0.479 6.448,0.235 C4.016,0.878 2.175,2.84 1.648,5.249 L0.196,5.249 C-0.019,5.463 -0.019,5.809 0.196,6.021 L1.834,7.658 C2.048,7.87 2.396,7.87 2.61,7.658 L4.475,6.021 L4.475,6.021 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setRepeat(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M13.986,4.016 L6.939,4.016 L4.935,2.193 C4.684,1.942 4.276,1.942 4.024,2.193 L4.024,4.016 L1.998,4.016 C0.896,4.016 0,4.913 0,6.016 L0,9.985 C0,11.088 0.896,11.985 1.998,11.985 L9.236,11.985 L11.062,13.813 C11.314,14.064 11.723,14.064 11.974,13.813 L11.974,11.985 L13.986,11.985 C15.088,11.985 15.984,11.088 15.984,9.985 L15.984,6.016 C15.984,4.913 15.088,4.016 13.986,4.016 L13.986,4.016 Z M11.062,8.203 L9.15,10.031 L1.984,10.031 L1.984,5.969 L4.024,5.969 L4.024,7.715 C4.277,7.974 4.685,7.974 4.935,7.715 L6.814,5.969 L14.015,5.969 L14.017,10.031 L11.974,10.031 L11.974,8.203 C11.723,7.944 11.314,7.944 11.062,8.203 L11.062,8.203 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setAbacus(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(0.000000, 1.000000)" fill="${bg}">
            <path d="M14.194,13.958 L1.765,13.958 C0.316,13.958 0.036,12.808 0.036,11.394 L0.036,2.607 C0.036,1.193 0.315,0.043 1.765,0.043 L14.194,0.043 C15.642,0.043 15.922,1.193 15.922,2.607 L15.922,11.394 C15.922,12.808 15.643,13.958 14.194,13.958 L14.194,13.958 Z M1.923,1 C1.414,1 1,1.426 1,1.948 L1,12.052 C1,12.574 1.414,13 1.923,13 L14.077,13 C14.586,13 15,12.574 15,12.052 L15,1.948 C15,1.426 14.586,1 14.077,1 L1.923,1 L1.923,1 Z"></path>
            <rect x="3" y="0" width="0.948" height="13.068"></rect>
            <rect x="8" y="0" width="0.948" height="13.068"></rect>
            <rect x="12" y="0" width="0.948" height="13.068"></rect>
            <ellipse cx="3.438" cy="4.976" rx="1.438" ry="0.976"></ellipse>
            <ellipse cx="3.438" cy="7.976" rx="1.438" ry="0.976"></ellipse>
            <ellipse cx="3.438" cy="10.976" rx="1.438" ry="0.976"></ellipse>
            <ellipse cx="8.477" cy="2.976" rx="1.477" ry="0.976"></ellipse>
            <ellipse cx="8.477" cy="5.976" rx="1.477" ry="0.976"></ellipse>
            <ellipse cx="8.477" cy="10.976" rx="1.477" ry="0.976"></ellipse>
            <ellipse cx="12.435" cy="7.977" rx="1.435" ry="0.977"></ellipse>
            <ellipse cx="12.435" cy="10.977" rx="1.435" ry="0.977"></ellipse>
          </g>
        </g>
      `;
      return this;
    }
  
    setCalculator(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M13.58,0 L4.322,0 C3.592,0 3,0.598 3,1.334 L3,14.667 C3,15.404 3.592,16 4.322,16 L13.58,16 C14.309,16 15,15.404 15,14.667 L15,1.334 C15,0.598 14.31,0 13.58,0 L13.58,0 Z M7.021,14 L4.987,14 L4.987,13 L7.021,13 L7.021,14 L7.021,14 Z M7.021,8.021 L4.987,8.021 L4.987,7 L7.021,7 L7.021,8.021 L7.021,8.021 Z M10,14 L7.986,14 L7.986,13 L10,13 L10,14 L10,14 Z M7.021,11 L4.987,11 L4.987,10 L7.021,10 L7.021,11 L7.021,11 Z M10,11 L7.986,11 L7.986,10 L10,10 L10,11 L10,11 Z M10,8 L7.986,8 L7.986,7 L10,7 L10,8 L10,8 Z M13,14 L11,14 L11,9.979 L13,9.979 L13,14 L13,14 Z M13,8.02 L10.986,8.02 L10.986,7 L13,7 L13,8.02 L13,8.02 Z M14.014,6 L4,6 L4,2 L14.014,2 L14.014,6 L14.014,6 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setOperation(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M14.689,0.041 L9.083,0.041 L9.083,6.917 L15.958,6.917 L15.958,1.299 C15.958,0.605 15.391,0.041 14.689,0.041 L14.689,0.041 Z M14.044,4.045 L10.938,4.045 L10.938,2.938 L14.044,2.938 L14.044,4.045 L14.044,4.045 Z"></path>
            <path d="M9,15.958 L14.674,15.958 C15.384,15.958 15.958,15.389 15.958,14.684 L15.958,9.042 L9,9.042 L9,15.958 L9,15.958 Z M10.953,10.969 L14.023,10.969 L14.023,12.031 L10.953,12.031 L10.953,10.969 L10.953,10.969 Z M10.953,12.953 L14,12.953 L14,14.047 L10.953,14.047 L10.953,12.953 L10.953,12.953 Z"></path>
            <path d="M6.898,0.041 L1.326,0.041 C0.638,0.041 0.083,0.605 0.083,1.3 L0.083,6.923 L6.898,6.923 L6.898,0.041 L6.898,0.041 Z M5,4.023 L4.016,4.023 L4.016,5.062 L2.98,5.062 L2.98,4.023 L1.959,4.023 L1.959,2.982 L2.98,2.982 L2.98,1.98 L4.016,1.98 L4.016,2.982 L5,2.982 L5,4.023 L5,4.023 Z"></path>
            <path d="M0.083,14.676 C0.083,15.385 0.645,15.958 1.338,15.958 L6.958,15.958 L6.958,9 L0.083,9 L0.083,14.676 L0.083,14.676 Z M2.443,10.709 L3.489,11.756 L4.537,10.707 L5.269,11.439 L4.221,12.488 L5.282,13.549 L4.547,14.285 L3.485,13.224 L2.463,14.245 L1.731,13.513 L2.752,12.492 L1.707,11.445 L2.443,10.709 L2.443,10.709 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setConfig(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g fill="${bg}">
            <path d="M8,1 L8,2.95568848 L15.9281006,2.95568847 L15.9281006,0.99999999 L8,1 Z"></path>
            <rect x="0" y="1" width="1.97460938" height="1.9753418"></rect>
            <path d="M0,7 L2.21252442e-07,8.9876709 L5.0111084,8.9876709 L5.01110818,7 L0,7 Z"></path>
            <path d="M11,7 L11,8.97875977 L15.9871826,8.97875976 L15.9871826,6.99999999 L11,7 Z"></path>
            <rect x="0" y="13" width="8.01904297" height="1.96240234"></rect>
            <rect x="14" y="13" width="1.99963379" height="1.96069336"></rect>
            <path d="M10.9680001,16.0396729 C12.0548964,16.0396729 12.9755859,15.2177875 12.9755859,14.1590576 C12.9755859,13.1003278 12.0548964,12 10.968,12 C9.88110361,12 9.04431152,12.9611066 9.04431152,14.0198364 C9.04431152,15.0785663 9.88110367,16.0396729 10.9680001,16.0396729 Z"></path>
            <path d="M7.90600002,9.99328613 C8.95865475,9.99328613 10.0087891,8.97572992 10.0087891,7.91700006 C10.0087891,6.85827019 8.95865473,6 7.906,6 C6.85334527,6 6,6.85827013 6,7.917 C6,8.97572987 6.85334529,9.99328613 7.90600002,9.99328613 Z"></path>
            <path d="M5.0559082,3.98095703 C6.11463807,3.98095703 7.02233887,2.97572992 7.02233887,1.91700006 C7.02233887,0.85827019 5.97572987,0 4.917,0 C3.85827013,0 3,0.858270135 3,1.917 C3,2.97572987 3.99717834,3.98095703 5.0559082,3.98095703 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setConfig2(bg) {
      this.svg.innerHTML = `
      <g stroke="none" stroke-width="1" fill="none">
        <g transform="translate(1.000000, 0.000000)" fill="${bg}">
          <path d="M1,0 L0.99999999,5.00708008 L2.95043944,5.00708008 L2.95043945,0 L1,0 Z"></path>
          <path d="M1,11 L0.99999999,15.9581299 L3.00952147,15.9581299 L3.00952148,11 L1,11 Z"></path>
          <path d="M7,14 L6.99999999,15.9759521 L8.96630858,15.9759521 L8.96630859,14 L7,14 Z"></path>
          <path d="M7,0 L6.99999999,8 L9,8 L9,0 L7,0 Z"></path>
          <path d="M13,9 L13,15.9420166 L14.9768066,15.9420166 L14.9768066,9 L13,9 Z"></path>
          <path d="M13,0 L13,2.93310547 L15.0090332,2.93310547 L15.0090332,0 L13,0 Z"></path>
          <path d="M13.9170001,8.0489502 C14.9757299,8.0489502 16.0111084,7.05489644 16.0111084,5.96800005 C16.0111084,4.88110367 14.9757299,4 13.917,4 C12.8582701,4 12,4.88110361 12,5.968 C12,7.05489639 12.8582702,8.0489502 13.9170001,8.0489502 Z"></path>
          <path d="M7.91700006,13.0091553 C8.97572992,13.0091553 9.9576416,11.9586548 9.9576416,10.906 C9.9576416,9.85334529 8.97572987,9 7.917,9 C6.85827013,9 6,9.85334527 6,10.906 C6,11.9586547 6.85827019,13.0091553 7.91700006,13.0091553 Z"></path>
          <path d="M1.91700006,9.98864746 C2.97572992,9.98864746 3.97399902,8.97572992 3.97399902,7.91700006 C3.97399902,6.85827019 2.97572987,6 1.917,6 C0.858270135,6 0,6.85827013 0,7.917 C0,8.97572987 0.85827019,9.98864746 1.91700006,9.98864746 Z"></path>
        </g>
      </g>
      `;
      return this;
    }
  
    setAirplane(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M8.264,10.32 L11.784,15.8 C11.927,15.925 12.106,15.995 12.294,15.999 C12.499,16.001 12.69,15.925 12.825,15.792 C13.214,15.211 12.264,11.476 10.964,7.62 L8.264,10.32 L8.264,10.32 Z"></path>
            <path d="M14.613,0.42 C14.029,-0.166 13.285,-0.105 12.785,0.393 L8.705,4.457 C6.268,3.681 1.859,2.182 0.195,2.182 C-0.0369999999,2.182 -0.139,2.208 -0.174,2.219 C-0.436,2.504 -0.442,2.941 -0.188,3.231 L5.919,7.231 L2.887,10.251 C2.887,10.251 0.548,9.769 0.206,9.724 C-0.271,9.662 -0.821,10.08 0.204,10.603 C1.401,11.212 2.803,11.92 2.803,11.92 C2.803,11.92 3.666,13.599 4.193,14.524 C4.864,15.643 5.258,15.1 5.178,14.524 C5.099,13.95 4.83,12.009 4.83,12.009 L7.714,9.017 L10.543,6.198 L14.569,2.187 C15.07,1.689 15.195,1.004 14.613,0.42 L14.613,0.42 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setAlarmClock(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <g>
              <path d="M13.654,0.659 C12.342,-0.292 10.604,-0.105 9.664,1.042 C10.615,1.358 11.535,1.827 12.393,2.449 C13.25,3.073 13.983,3.807 14.586,4.622 C15.35,3.347 14.965,1.614 13.654,0.659 L13.654,0.659 Z"></path>
              <path d="M2.644,2.427 C3.502,1.811 4.422,1.347 5.374,1.032 C4.433,-0.104 2.694,-0.288 1.383,0.654 C0.072,1.6 -0.314,3.316 0.451,4.579 C1.055,3.773 1.788,3.045 2.644,2.427 L2.644,2.427 Z"></path>
              <path d="M13.924,8.633 C13.924,8.435 13.912,8.24 13.896,8.047 C13.624,4.907 11.198,2.401 8.131,2.081 L8.131,2.081 C7.995,2.065 7.858,2.064 7.719,2.059 C7.637,2.055 7.555,2.045 7.471,2.045 L7.469,2.045 L7.467,2.045 C3.899,2.045 1.008,4.994 1.008,8.633 C1.008,8.662 1.012,8.692 1.013,8.721 C1.035,10.574 1.815,12.235 3.041,13.415 C2.633,13.627 2.348,14.056 2.348,14.558 C2.348,15.267 2.912,15.842 3.608,15.842 C4.274,15.842 4.812,15.315 4.858,14.648 C5.547,14.959 6.298,15.155 7.089,15.202 C7.215,15.21 7.34,15.222 7.467,15.222 C7.612,15.222 7.752,15.209 7.897,15.2 C8.698,15.146 9.458,14.939 10.153,14.614 C10.182,15.298 10.729,15.843 11.406,15.843 C12.102,15.843 12.665,15.268 12.665,14.559 C12.665,14.036 12.36,13.589 11.922,13.388 C13.152,12.19 13.924,10.506 13.924,8.633 L13.924,8.633 Z M7.527,13.314 C4.964,13.314 2.88,11.198 2.88,8.598 C2.88,5.998 4.964,3.884 7.527,3.884 C10.089,3.884 12.174,5.998 12.174,8.598 C12.174,11.198 10.089,13.314 7.527,13.314 L7.527,13.314 Z"></path>
            </g>
            <rect x="7" y="5" width="1" height="4"></rect>
            <rect x="7" y="8" width="3" height="1"></rect>
          </g>
        </g>
      `;
      return this;
    }
  
    setAlignLeft(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 1.000000)" fill="${bg}">
            <path d="M0.043,0.938 C0.043,1.456 0.463,1.876 0.981,1.876 L15.063,1.876 C15.581,1.876 16.001,1.456 16.001,0.938 L16.001,0.938 C16.001,0.42 15.581,0 15.063,0 L0.981,0 C0.463,0 0.043,0.42 0.043,0.938 L0.043,0.938 L0.043,0.938 Z"></path>
            <path d="M0.043,12.938 C0.043,13.456 0.463,13.876 0.981,13.876 L15.063,13.876 C15.581,13.876 16.001,13.456 16.001,12.938 L16.001,12.938 C16.001,12.42 15.581,12 15.063,12 L0.981,12 C0.463,12 0.043,12.42 0.043,12.938 L0.043,12.938 L0.043,12.938 Z"></path>
            <path d="M0.043,6.938 C0.043,7.456 0.463,7.876 0.981,7.876 L11.063,7.876 C11.581,7.876 12.001,7.456 12.001,6.938 L12.001,6.938 C12.001,6.42 11.581,6 11.063,6 L0.981,6 C0.463,6 0.043,6.42 0.043,6.938 L0.043,6.938 L0.043,6.938 Z"></path>
            <path d="M0.043,9.938 C0.043,10.456 0.463,10.876 0.981,10.876 L9.063,10.876 C9.581,10.876 10.001,10.456 10.001,9.938 L10.001,9.938 C10.001,9.42 9.581,9 9.063,9 L0.981,9 C0.463,9 0.043,9.42 0.043,9.938 L0.043,9.938 L0.043,9.938 Z"></path>
            <path d="M0.043,3.938 C0.043,4.456 0.463,4.876 0.981,4.876 L7.063,4.876 C7.581,4.876 8.001,4.456 8.001,3.938 L8.001,3.938 C8.001,3.42 7.581,3 7.063,3 L0.981,3 C0.463,3 0.043,3.42 0.043,3.938 L0.043,3.938 L0.043,3.938 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setAlignCenter(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 1.000000)" fill="${bg}">
            <path d="M16,0.938 C16,1.456 15.58,1.876 15.062,1.876 L0.98,1.876 C0.462,1.876 0.042,1.456 0.042,0.938 L0.042,0.938 C0.042,0.42 0.462,0 0.98,0 L15.062,0 C15.58,0 16,0.42 16,0.938 L16,0.938 L16,0.938 Z"></path>
            <path d="M16,12.938 C16,13.456 15.58,13.876 15.062,13.876 L0.98,13.876 C0.462,13.876 0.042,13.456 0.042,12.938 L0.042,12.938 C0.042,12.42 0.462,12 0.98,12 L15.062,12 C15.58,12 16,12.42 16,12.938 L16,12.938 L16,12.938 Z"></path>
            <path d="M16,6.938 C16,7.456 15.58,7.876 15.062,7.876 L0.98,7.876 C0.462,7.876 0.042,7.456 0.042,6.938 L0.042,6.938 C0.042,6.42 0.462,6 0.98,6 L15.062,6 C15.58,6 16,6.42 16,6.938 L16,6.938 L16,6.938 Z"></path>
            <path d="M13,9.938 C13,10.456 12.58,10.876 12.062,10.876 L3.98,10.876 C3.462,10.876 3.042,10.456 3.042,9.938 L3.042,9.938 C3.042,9.42 3.462,9 3.98,9 L12.062,9 C12.58,9 13,9.42 13,9.938 L13,9.938 L13,9.938 Z"></path>
            <path d="M13,3.938 C13,4.456 12.58,4.876 12.062,4.876 L3.98,4.876 C3.462,4.876 3.042,4.456 3.042,3.938 L3.042,3.938 C3.042,3.42 3.462,3 3.98,3 L12.062,3 C12.58,3 13,3.42 13,3.938 L13,3.938 L13,3.938 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setAlignRight(bg) {
      this.svg.innerHTML = `
      <g stroke="none" stroke-width="1" fill="none">
        <g transform="translate(1.000000, 1.000000)" fill="${bg}">
          <path d="M16,0.938 C16,1.456 15.58,1.876 15.062,1.876 L0.98,1.876 C0.462,1.876 0.042,1.456 0.042,0.938 L0.042,0.938 C0.042,0.42 0.462,0 0.98,0 L15.062,0 C15.58,0 16,0.42 16,0.938 L16,0.938 L16,0.938 Z"></path>
          <path d="M16,12.938 C16,13.456 15.58,13.876 15.062,13.876 L0.98,13.876 C0.462,13.876 0.042,13.456 0.042,12.938 L0.042,12.938 C0.042,12.42 0.462,12 0.98,12 L15.062,12 C15.58,12 16,12.42 16,12.938 L16,12.938 L16,12.938 Z"></path>
          <path d="M16,6.938 C16,7.456 15.58,7.876 15.062,7.876 L4.98,7.876 C4.462,7.876 4.042,7.456 4.042,6.938 L4.042,6.938 C4.042,6.42 4.462,6 4.98,6 L15.062,6 C15.58,6 16,6.42 16,6.938 L16,6.938 L16,6.938 Z"></path>
          <path d="M16,9.938 C16,10.456 15.58,10.876 15.062,10.876 L6.98,10.876 C6.462,10.876 6.042,10.456 6.042,9.938 L6.042,9.938 C6.042,9.42 6.462,9 6.98,9 L15.062,9 C15.58,9 16,9.42 16,9.938 L16,9.938 L16,9.938 Z"></path>
          <path d="M16,3.938 C16,4.456 15.58,4.876 15.062,4.876 L8.98,4.876 C8.462,4.876 8.042,4.456 8.042,3.938 L8.042,3.938 C8.042,3.42 8.462,3 8.98,3 L15.062,3 C15.58,3 16,3.42 16,3.938 L16,3.938 L16,3.938 Z"></path>
        </g>
      </g>
      `;
      return this;
    }
  
    setAmbulance(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(0.000000, 2.000000)" fill="${bg}">
            <g transform="translate(2.000000, 0.000000)">
              <circle cx="1.433" cy="9.433" r="1.433"></circle>
              <ellipse cx="9.451" cy="9.474" rx="1.451" ry="1.474"></ellipse>
              <path d="M8.953,2.047 C8.953,0.925 9.053,0.016 8.009,0.016 C6.964,0.016 7.016,0.925 7.016,2.047 L8.953,2.047 L8.953,2.047 Z"></path>
            </g><path d="M15.338,5.735 C15.338,5.735 12.729,2 11.994,2 L1.392,2 C0.659,2 0.064,2.599 0.064,3.336 L0.064,8.651 C0.064,9.387 0.392,9.987 0.392,9.987 L0.945,9.987 C0.922,9.846 0.902,9.704 0.902,9.556 C0.902,8.118 2.062,6.954 3.504,6.954 C4.938,6.954 6.102,8.118 6.102,9.556 C6.102,9.703 6.082,9.846 6.059,9.987 L8.946,9.987 C8.923,9.846 8.903,9.704 8.903,9.556 C8.903,8.118 10.063,6.954 11.505,6.954 C12.939,6.954 14.103,8.118 14.103,9.556 C14.103,9.703 14.083,9.846 14.06,9.987 L14.654,9.987 C15.388,9.987 15.983,9.387 15.983,8.651 L15.983,7.321 C15.981,6.487 15.338,5.735 15.338,5.735 L15.338,5.735 Z M8.047,5.047 L7.043,5.047 L7.043,6.052 L5.958,6.052 L5.958,5.047 L4.953,5.047 L4.953,3.963 L5.958,3.963 L5.958,2.958 L7.043,2.958 L7.043,3.963 L8.047,3.963 L8.047,5.047 L8.047,5.047 Z M9.918,6.042 L9.918,2.904 L11.285,2.904 C11.921,2.904 12.66,3.935 12.66,3.935 L14.124,6.041 L9.918,6.041 L9.918,6.042 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setAnchor(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M15.469,6.09 L13.043,7.537 L14.374,7.885 C14.365,10.163 12.43,12.098 9.958,12.51 L9.958,5.917 L11.942,5.917 L11.942,5.083 L9.958,5.083 L9.958,3.637 C10.526,3.285 10.918,2.67 10.918,1.944 C10.918,0.835 10.035,0.024 8.947,0.024 C7.859,0.024 7.01,0.871 7.01,1.981 C7.01,2.732 7.406,3.336 7.999,3.671 L7.999,5.083 L6.015,5.083 L6.015,5.917 L8,5.917 L8,12.512 C5.528,12.103 3.694,10.16 3.69,7.873 L4.99,7.539 L2.611,6.08 L1.054,8.55 L2.391,8.206 C2.562,10.966 4.779,13.23 7.695,13.769 C8.552,14.017 8.629,14.614 8.629,14.614 L9.031,15.941 L9.444,14.623 C9.444,14.623 9.615,13.975 10.377,13.769 C13.283,13.23 15.495,10.972 15.673,8.221 L16.972,8.559 L15.469,6.09 L15.469,6.09 Z M8.953,1.001 C9.482,1.001 9.91,1.433 9.91,1.965 C9.91,2.497 9.482,2.928 8.953,2.928 C8.423,2.928 7.995,2.497 7.995,1.965 C7.995,1.433 8.423,1.001 8.953,1.001 L8.953,1.001 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setAndroid(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M3.018,6.062 C3.018,6.062 3.01,10.474 3.01,11.624 C3.01,12.658 3.127,12.88 4.031,12.974 L4.031,15.307 C4.031,15.663 4.468,15.953 5.005,15.953 C5.543,15.953 5.981,15.663 5.981,15.307 L5.981,12.995 C6.438,12.996 7.573,12.998 8.032,12.999 L8.032,15.307 C8.032,15.663 8.47,15.953 9.007,15.953 C9.544,15.953 9.982,15.663 9.982,15.307 L9.982,12.98 C10.908,12.88 10.96,12.609 10.96,11.645 C10.96,10.579 10.961,6.063 10.961,6.063 L3.018,6.063 L3.018,6.062 Z"></path>
            <path d="M12.995,5.03 C12.458,5.03 12.02,5.32 12.02,5.677 L12.025,9.311 C12.025,9.667 12.463,9.957 13,9.957 C13.537,9.957 13.976,9.667 13.976,9.311 L13.971,5.677 C13.971,5.32 13.531,5.03 12.995,5.03 L12.995,5.03 Z"></path>
            <path d="M0.985,5.03 C0.445,5.03 0.005,5.325 0.005,5.691 L0.005,9.333 C0.005,9.698 0.445,9.994 0.985,9.994 C1.528,9.994 1.968,9.698 1.968,9.333 L1.968,5.691 C1.969,5.325 1.528,5.03 0.985,5.03 L0.985,5.03 Z"></path>
            <path d="M8.974,2.187 C8.985,2.175 9,2.169 9.009,2.155 L9.938,0.521 C10.04,0.362 9.979,0.156 9.804,0.064 C9.629,-0.028 9.407,0.026 9.305,0.187 L8.377,1.82 C8.359,1.848 8.352,1.879 8.344,1.909 C7.918,1.763 7.464,1.678 6.987,1.678 C6.505,1.678 6.044,1.764 5.615,1.912 C5.606,1.881 5.6,1.85 5.581,1.82 L4.709,0.168 C4.607,0.007 4.385,-0.047 4.211,0.045 C4.035,0.137 3.975,0.343 4.076,0.502 L4.948,2.155 C4.958,2.171 4.976,2.178 4.99,2.192 C3.933,2.771 3.231,3.79 3.043,4.995 L10.991,4.995 C10.801,3.786 10.033,2.766 8.974,2.187 L8.974,2.187 Z M6.042,4.042 L4.938,4.042 L4.938,2.98 L6.042,2.98 L6.042,4.042 L6.042,4.042 Z M9.042,4.021 L7.98,4.021 L7.98,2.938 L9.042,2.938 L9.042,4.021 L9.042,4.021 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setAntenna(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(2.000000, 0.000000)" fill="${bg}">
            <path d="M8.916,8.877 C6.358,11.436 2.381,11.611 0.039,9.268 L9.308,-0.002 C11.65,2.342 11.477,6.316 8.916,8.877 L8.916,8.877 Z"></path>
            <path d="M2.625,5.958 C1.779,5.113 1.842,3.684 2.762,2.764 C3.682,1.844 5.112,1.784 5.955,2.627 L2.625,5.958 L2.625,5.958 Z"></path>
            <path d="M11.644,15.997 L4.378,15.997 C4.249,15.997 4.129,15.929 4.064,15.817 C3.997,15.707 3.997,15.568 4.06,15.455 L7.75,8.873 C7.815,8.758 7.937,8.687 8.069,8.687 L8.071,8.687 C8.204,8.688 8.327,8.76 8.389,8.876 L11.963,15.458 C12.025,15.571 12.022,15.708 11.957,15.818 C11.893,15.93 11.773,15.997 11.644,15.997 L11.644,15.997 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBack(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M1.307,5.988 L6.616,1.343 C7.027,0.933 7.507,0.864 7.918,1.275 L7.918,4.407 C8.014,4.406 8.098,4.406 8.147,4.406 C13.163,4.406 16.885,7.969 16.885,12.816 C16.885,14.504 16.111,13.889 15.788,13.3 C14.266,10.52 11.591,8.623 8.107,8.623 C8.066,8.623 7.996,8.624 7.917,8.624 L7.917,11.689 C7.506,12.099 6.976,12.05 6.615,11.757 L1.306,7.474 C0.897,7.064 0.897,6.399 1.307,5.988 L1.307,5.988 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setChange(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M1.539,8.001 C2.367,8.001 2.918,7.45 2.918,6.622 L2.914,6.187 C2.914,6.187 2.709,4.954 4.354,4.954 L11.015,5 L11.015,6.759 C11.338,7.081 11.862,7.081 12.185,6.759 L14.758,4.187 C15.08,3.863 15.08,3.339 14.758,3.017 L12.185,0.292 C11.862,-0.03 11.338,-0.03 11.015,0.292 L11.015,2.137 C10.854,2.09 4.562,2.063 4.562,2.063 C0.851,2.063 0.039,4.492 0.039,5.47 L0.039,6.501 C0.039,7.329 0.711,8.001 1.539,8.001 L1.539,8.001 Z"></path>
            <path d="M13.5,8.042 C12.672,8.042 12,8.626 12,9.454 L12.002,10.411 C11.957,10.768 11.357,11.001 10.477,11.001 L3.938,11.001 L3.936,9.442 C3.614,9.12 3.09,9.12 2.766,9.442 L0.194,12.014 C-0.128,12.338 -0.128,12.862 0.194,13.184 L2.766,15.756 C3.09,16.08 3.614,16.08 3.936,15.756 L3.938,13.905 L10.477,13.905 C14.188,13.905 15,11.463 15,10.484 L15,9.453 C15,8.626 14.328,8.042 13.5,8.042 L13.5,8.042 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setRecicle2(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M15.945,9.738 L14.506,9.312 C14.513,9.179 14.523,9.048 14.523,8.916 C14.523,5.386 12.104,2.323 8.771,1.635 L8.51,2.996 C11.219,3.557 13.185,6.045 13.185,8.916 L13.185,8.922 L11.883,8.537 C11.617,8.691 11.521,9.042 11.67,9.318 L12.852,11.525 C13.002,11.801 13.338,11.9 13.606,11.748 L15.733,10.519 C15.999,10.364 16.094,10.016 15.945,9.738 L15.945,9.738 Z"></path>
            <path d="M1.438,8.626 C1.438,6.273 2.764,4.172 4.738,3.186 L5.35,4.844 C5.651,4.982 6.004,4.843 6.138,4.53 L7.209,2.04 C7.341,1.727 7.207,1.361 6.905,1.222 L4.505,0.112 C4.203,-0.029 3.852,0.113 3.717,0.425 L4.258,1.89 C1.778,3.083 0.1,5.695 0.1,8.627 C0.1,9.451 0.235,10.273 0.504,11.07 L1.766,10.613 C1.548,9.962 1.438,9.294 1.438,8.626 L1.438,8.626 Z"></path>
            <path d="M7.713,14.607 C6.667,14.607 5.648,14.344 4.758,13.796 L5.885,12.608 C5.882,12.265 5.614,12.01 5.282,12.013 L2.656,12.013 C2.324,12.015 2.06,12.294 2.063,12.638 L2.081,15.366 C2.084,15.709 2.352,15.984 2.685,15.98 L3.801,14.804 C4.958,15.591 6.314,15.994 7.713,15.994 C9.726,15.994 11.659,15.099 13.018,13.54 L12.026,12.609 C10.92,13.879 9.348,14.607 7.713,14.607 L7.713,14.607 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setForward(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">        
          <path d="M15.584,5.988 L10.344,1.343 C9.94,0.933 9.465,0.864 9.061,1.275 L9.061,4.407 C8.965,4.406 8.883,4.406 8.834,4.406 C3.884,4.406 0.084,7.969 0.084,12.816 C0.084,14.504 0.85,13.889 1.167,13.3 C2.668,10.52 5.434,8.623 8.872,8.623 C8.913,8.623 8.982,8.624 9.06,8.624 L9.06,11.689 C9.464,12.099 9.989,12.05 10.343,11.757 L15.583,7.474 C15.988,7.064 15.988,6.399 15.584,5.988 L15.584,5.988 Z" fill="${bg}"></path>    
        </g>
      `;
      return this;
    }
  
    setFourWay(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M16.844,7.747 L14.782,5.156 C14.567,4.941 14.218,4.941 14.003,5.156 L14.003,7.031 L9.989,7.031 L9.989,2.969 L11.844,2.969 C12.056,2.754 12.056,2.406 11.844,2.189 L9.391,0.188 C9.179,-0.027 8.832,-0.027 8.62,0.188 L6.188,2.189 C5.974,2.406 5.974,2.754 6.188,2.969 L8.01,2.969 L8.01,7.031 L3.985,7.031 L3.985,5.172 C3.769,4.957 3.422,4.957 3.206,5.172 C3.206,5.172 1.012,7.576 1.012,8.07 C1.012,8.498 3.206,10.75 3.206,10.75 C3.422,10.966 3.769,10.966 3.985,10.75 L3.985,8.984 L8.01,8.984 L8.01,13.031 L6.172,13.031 C5.964,13.241 5.964,13.581 6.172,13.791 C6.172,13.791 8.504,15.983 8.998,15.983 C9.428,15.983 11.844,13.791 11.844,13.791 C12.052,13.581 12.052,13.241 11.844,13.031 L9.989,13.031 L9.989,8.984 L14.003,8.984 L14.003,10.796 C14.218,11.011 14.567,11.011 14.782,10.796 L16.844,8.526 C17.059,8.311 17.059,7.962 16.844,7.747 L16.844,7.747 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setFullscreen(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M15.196,0.083 L11.329,0.083 C10.949,0.083 10.641,0.393 10.641,0.773 L12.229,2.367 L10.312,4.284 C10.12,4.476 10.024,4.727 10.024,4.979 C10.024,5.231 10.12,5.482 10.312,5.674 C10.695,6.058 11.318,6.058 11.703,5.674 L13.617,3.759 L15.196,5.344 C15.576,5.344 15.883,5.034 15.883,4.654 L15.883,0.773 C15.883,0.393 15.576,0.083 15.196,0.083 L15.196,0.083 Z"></path>
            <path d="M15.192,10.645 L13.573,12.257 L11.621,10.305 C11.236,9.92 10.614,9.92 10.229,10.305 C9.845,10.689 9.845,11.311 10.229,11.695 L12.18,13.645 L10.62,15.199 C10.62,15.579 10.929,15.886 11.31,15.886 L15.191,15.886 C15.572,15.886 15.881,15.579 15.881,15.199 L15.881,11.333 C15.883,10.951 15.573,10.645 15.192,10.645 L15.192,10.645 Z"></path>
            <path d="M3.758,2.359 L5.342,0.78 C5.342,0.4 5.031,0.093 4.651,0.093 L0.771,0.093 C0.39,0.093 0.081,0.4 0.081,0.78 L0.081,4.646 C0.081,5.027 0.391,5.334 0.771,5.334 L2.366,3.747 L4.335,5.715 C4.527,5.908 4.778,6.004 5.029,6.004 C5.282,6.004 5.532,5.908 5.725,5.715 C6.108,5.332 6.108,4.709 5.725,4.326 L3.758,2.359 L3.758,2.359 Z"></path>
            <path d="M4.951,9.645 L2.361,12.235 L0.767,10.634 C0.388,10.634 0.079,10.944 0.079,11.324 L0.079,15.205 C0.079,15.586 0.388,15.895 0.767,15.895 L4.634,15.895 C5.013,15.895 5.321,15.585 5.321,15.205 L3.75,13.627 L6.342,11.035 C6.727,10.65 6.727,10.029 6.342,9.644 C5.959,9.261 5.336,9.261 4.951,9.645 L4.951,9.645 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setFullscreen2(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M14.988,6.979 C15.547,6.979 16,6.527 16,5.97 L16,1.008 C16,0.45 15.547,-0.000999999989 14.988,-0.000999999989 L10.011,-0.000999999989 C9.452,-0.000999999989 8.999,0.45 8.999,1.008 L10.579,2.583 L8.009,5.153 L5.439,2.583 L7.019,1.008 C7.019,0.45 6.566,-0.000999999989 6.007,-0.000999999989 L1.03,-0.000999999989 C0.471,-0.000999999989 0.0179999999,0.45 0.0179999999,1.008 L0.0179999999,5.97 C0.0179999999,6.527 0.471,6.979 1.03,6.979 L2.62,5.394 L5.194,7.968 L2.598,10.565 L1.028,9 C0.471,9 0.0189999999,9.45 0.0189999999,10.006 L0.0189999999,14.952 C0.0189999999,15.507 0.471,15.958 1.028,15.958 L5.99,15.958 C6.548,15.958 6.999,15.507 6.999,14.952 L5.417,13.375 L8.009,10.783 L10.601,13.375 L9.019,14.952 C9.019,15.507 9.47,15.958 10.028,15.958 L14.99,15.958 C15.547,15.958 15.999,15.507 15.999,14.952 L15.999,10.006 C15.999,9.45 15.547,9 14.99,9 L13.42,10.565 L10.824,7.968 L13.398,5.394 L14.988,6.979 L14.988,6.979 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setMove(bg) {
      this.svg.innerHTML = `
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="${bg}">
          <path d="M7.946,9.976 C9.02074612,9.976 9.98968506,9.08594212 9.98968506,7.98800004 C9.98968506,6.89005795 9.02074612,6 7.946,6 C6.87125388,6 6,6.89005792 6,7.988 C6,9.08594208 6.87125388,9.976 7.946,9.976 Z"></path>
          <path d="M5.21041012,3.98431384 C5.01241012,3.75531384 4.97441016,3.30400003 5.17641016,3.07000003 L7.549,0.136 C7.752,-0.099 8.076,-0.102 8.278,0.131 L10.8147193,3.08200003 C11.0167193,3.31100003 11.0167193,3.75131384 10.8147193,3.98431384 L5.21041012,3.98431384 Z"></path>
          <path d="M10.8208619,12.0411987 C11.0208619,12.2091987 11.0188619,12.561 10.8208619,12.729 L8.314,15.833 C8.111,16 7.789,16 7.589,15.833 L5.22375488,12.729 C5.02375488,12.561 5.02375488,12.2111987 5.22375488,12.0431987 L10.8208619,12.0411987 Z"></path>
          <path d="M12.93,5.268 L15.864,7.574 C16.098,7.784 16.102,8.125 15.87,8.334 L12.922,10.745 C12.694,10.952 12.2675835,10.956 12.0355835,10.745 L12.0355835,5.26200012 C12.0355835,5.26200012 12.697,5.058 12.93,5.268 Z"></path>
          <path d="M4.0128603,10.7889999 C3.7838603,10.9979999 3.325,10.996 3.096,10.789 L0.164,8.33 C-0.066,8.119 -0.066,7.781 0.168,7.57 L3.076,5.213 C3.305,5.006 3.78286035,5.00399993 4.01286035,5.21299993 L4.0128603,10.7889999 Z"></path>
        </g>
      </g>
      `;
      return this;
    }
  
    setExpand(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g fill="${bg}">
            <path d="M6.995,10.852 L5.133,9.008 L2.107,11.988 L0.062,9.972 L0.062,15.875 L6.049,15.875 L3.973,13.828 L6.995,10.852 Z"></path>
            <path d="M9.961,0.00800000003 L12.058,2.095 L9.005,5.128 L10.885,7.008 L13.942,3.97 L15.909,5.966 L15.909,0.00800000003 L9.961,0.00800000003 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setExpand2(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g fill="${bg}">
              <path d="M5.075,6.95 L6.918,5.088 L3.938,2.062 L5.955,0.018 L0.052,0.018 L0.052,6.004 L2.098,3.928 L5.075,6.95 Z"></path>
              <path d="M16.0034788,9.916 L13.832,12.013 L10.799,8.96 L8.918,10.841 L11.957,13.897 L9.961,15.9813842 L16.0034788,15.9813842 L16.0034788,9.916 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setContract(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g fill="${bg}">
            <path d="M14.12,16.003 L16,14.122 L12.962,11.065 L15.018,9 L9,9 L9,15.047 L11.087,12.95 L14.12,16.003 Z"></path>
            <path d="M7,0.969 L4.913,3.065 L1.88,0.013 L0,1.894 L3.038,4.95 L1.042,6.917 L7,6.917 L7,0.969 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setContract2(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <g fill="${bg}">
            <path d="M15.995,1.852 L14.133,0.00800000003 L11.107,2.988 L9.062,0.972 L9.062,6.875 L15.049,6.875 L12.973,4.828 L15.995,1.852 Z"></path>
            <path d="M0.961,9.008 L3.058,11.095 L0.005,14.128 L1.885,16.008 L4.942,12.97 L6.909,14.966 L6.909,9.008 L0.961,9.008 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setExpand3(bg) {
      this.svg.innerHTML = `
      <g stroke="none" stroke-width="1" fill="none">
        <path d="M14.988,0 L10.011,0 C9.452,0 8.999,0.451 8.999,1.009 L10.579,2.584 L2.599,10.565 L1.029,9 C0.472,9 0.02,9.45 0.02,10.006 L0.02,14.952 C0.02,15.507 0.472,15.958 1.029,15.958 L5.991,15.958 C6.549,15.958 7,15.507 7,14.952 L5.418,13.375 L13.398,5.395 L14.988,6.98 C15.547,6.98 16,6.528 16,5.971 L16,1.009 C16,0.451 15.547,0 14.988,0 L14.988,0 Z" fill="${bg}"></path>
      </g>
      `;
      return this;
    }
  
    setExpand4(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none">
          <path d="M1.031,0 L6.008,0 C6.567,0 7.02,0.451 7.02,1.009 L5.44,2.584 L13.42,10.565 L14.99,9 C15.547,9 15.999,9.45 15.999,10.006 L15.999,14.952 C15.999,15.507 15.547,15.958 14.99,15.958 L10.028,15.958 C9.47,15.958 9.019,15.507 9.019,14.952 L10.601,13.375 L2.621,5.395 L1.031,6.98 C0.472,6.98 0.019,6.528 0.019,5.971 L0.019,1.009 C0.02,0.451 0.473,0 1.031,0 L1.031,0 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setUser2(bg) {
      this.setViewBox(0,0,1000,1000);
      this.svg.innerHTML = `
        <g>
          <path d="M643.4,540.1c84.4-49.4,141.2-140.7,141.2-245.5C784.6,137.4,657.2,10,500,10c-157.2,0-284.6,127.4-284.6,284.6c0,104.8,56.8,196.2,141.2,245.5c-174,59.6-299.3,224.2-299.3,418.4c0,17.4,14.1,31.5,31.5,31.5c17.4,0,31.5-14.1,31.5-31.5h0.2C120.5,748.9,290.4,579,500,579c209.6,0,379.5,169.9,379.5,379.5h0.2c0,17.4,14.1,31.5,31.5,31.5c17.4,0,31.5-14.1,31.5-31.5C942.6,764.3,817.4,599.7,643.4,540.1z M500,515.9c-10.1,0-19.9,0.9-29.8,1.5c-108.1-14.9-191.5-108.8-191.5-222.8c0-124.3,99.1-225.1,221.3-225.1c122.2,0,221.3,100.8,221.3,225.1c0,114-83.4,208-191.5,222.8C519.9,516.7,510.1,515.9,500,515.9z"/>
        </g>
      `;
      return this;
    }
  
    setShuffle(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 3.000000)" fill="${bg}">
            <path d="M11.121,2.958 L13.055,2.958 L13.055,3.812 C13.27,4.027 13.618,4.027 13.833,3.812 L15.798,2.46 C16.012,2.245 16.012,1.897 15.798,1.682 L13.833,0.187 C13.618,-0.029 13.27,-0.029 13.055,0.187 L13.055,1.036 L11.09,1.036 C10.895,1.028 9.154,1.004 7.852,2.258 C6.995,3.082 6.56,3.92 6.56,5.361 C6.56,6.234 6.334,6.895 5.891,7.325 C5.194,8 4.12,8.067 4.073,8.066 L0.084,8.066 L0.084,9.964 C0.084,9.964 4.089,9.966 4.146,9.966 C4.597,9.966 6.101,9.876 7.259,8.772 C8.12,7.953 8.556,6.804 8.556,5.361 C8.556,4.488 8.782,4.135 9.228,3.699 C9.93,3.013 11.088,2.962 11.121,2.958 L11.121,2.958 Z"></path>
            <path d="M15.84,8.687 L13.813,7.167 C13.598,6.952 13.25,6.952 13.035,7.167 L13.035,8.081 L10.881,8.081 C10.881,8.081 10.228,8.089 9.601,7.799 L8.692,9.452 C9.656,9.897 10.598,9.932 10.855,9.932 C10.886,9.932 10.91,9.931 10.918,9.931 L13.035,9.931 L13.035,10.832 C13.25,11.047 13.598,11.047 13.813,10.832 L15.84,9.463 C16.054,9.249 16.054,8.901 15.84,8.687 L15.84,8.687 Z"></path>
            <path d="M5.555,3.329 L6.607,1.711 C5.419,1.045 4.162,1.078 4.067,1.081 L0,1.081 L0,2.971 L4.111,2.97 C4.123,2.974 4.889,2.955 5.555,3.329 L5.555,3.329 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setDown(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M8.327,15.886 L13.774,9.946 C13.984,9.712 13.982,9.332 13.772,9.097 L9.931,9.092 L9.931,1.068 C9.931,0.515 9.494,0.068 8.955,0.068 L7.004,0.068 C6.464,0.068 6.028,0.515 6.028,1.068 L6.028,9.088 L2.078,9.083 C1.87,9.314 1.872,9.695 2.082,9.931 L7.567,15.885 C7.78,16.117 8.118,16.119 8.327,15.886 L8.327,15.886 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setLeft(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M0.133,8.367 L6.073,13.713 C6.307,13.924 6.687,13.922 6.922,13.711 L6.927,9.983 L14.951,9.983 C15.504,9.983 15.951,9.544 15.951,9.001 L15.951,7.035 C15.951,6.492 15.504,6.053 14.951,6.053 L6.931,6.053 L6.936,2.243 C6.705,2.034 6.324,2.035 6.088,2.246 L0.134,7.603 C-0.099,7.816 -0.102,8.156 0.133,8.367 L0.133,8.367 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setRight(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M16.818,7.646 L10.878,2.206 C10.644,1.992 10.264,1.993 10.029,2.208 L10.024,6.001 L2,6.001 C1.447,6.001 1,6.448 1,7.001 L1,9.001 C1,9.554 1.447,10.001 2,10.001 L10.019,10.001 L10.013,13.878 C10.245,14.091 10.626,14.09 10.862,13.875 L16.816,8.423 C17.049,8.206 17.052,7.859 16.818,7.646 L16.818,7.646 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setUp(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M8.65,1.158 L3.165,7.098 C2.954,7.332 2.956,7.712 3.167,7.947 L7.035,7.952 L7.035,15.976 C7.035,16.529 7.474,16.976 8.017,16.976 L9.982,16.976 C10.525,16.976 10.964,16.529 10.964,15.976 L10.964,7.956 L14.775,7.961 C14.984,7.73 14.982,7.349 14.771,7.113 L9.414,1.159 C9.201,0.927 8.861,0.925 8.65,1.158 L8.65,1.158 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setRecicle(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 1.000000)" fill="${bg}">
            <path d="M15.8992941,11.815 L13.8738824,8.48 C13.6847059,8.168 13.2931765,8.079 13.0014118,8.281 C12.7077647,8.48 12.6249412,8.896 12.8141176,9.207 L14.2117647,11.564 L11.216,11.564 L11.2169412,10.125 C11.0964706,9.996 10.9072941,9.988 10.7943529,10.108 L8.75388235,11.935 C8.64188235,12.056 8.64847059,12.257 8.76894118,12.386 L10.7924706,13.861 C10.9138824,13.989 11.1030588,13.996 11.2150588,13.875 L11.2150588,12.849 L15.3694118,12.849 C15.6,12.849 15.8127059,12.715 15.9228235,12.499 C16.0329412,12.284 16.0244706,12.021 15.8992941,11.815 L15.8992941,11.815 Z"></path>
            <path d="M4.94305882,11.608 L1.86070588,11.608 L3.54070588,8.856 L4.42352941,9.512 C4.59670588,9.482 4.71341176,9.316 4.68423529,9.142 L4.54870588,6.316 C4.52047059,6.143 4.35670588,6.031 4.18352941,6.062 L1.66870588,6.894 C1.49741176,6.929 1.38164706,7.095 1.41082353,7.266 L2.48188235,8.065 L0.181647059,11.866 C0.0517647059,12.078 0.0432941176,12.349 0.157176471,12.57 C0.271058824,12.794 0.488470588,12.931 0.725647059,12.931 L4.99952941,12.931 C5.35717647,12.931 5.64705882,12.621 5.64705882,12.24 C5.64705882,11.859 5.30164706,11.608 4.94305882,11.608 L4.94305882,11.608 Z"></path>
            <path d="M9.02211765,5.617 L11.4795294,6.459 C11.6376471,6.491 11.7901176,6.372 11.8221176,6.193 L11.9792941,3.477 C12.0094118,3.298 11.9077647,3.129 11.7515294,3.098 L10.8517647,3.748 L8.80282353,0.378 C8.57129412,-0.004 7.97552941,-0.005 7.744,0.379 L5.84,3.512 C5.65082353,3.824 5.73458824,4.238 6.02729412,4.439 C6.32,4.64 6.71058824,4.551 6.89976471,4.239 L8.27388235,1.978 L9.80894118,4.503 L8.79623529,5.235 C8.76329412,5.415 8.864,5.585 9.02211765,5.617 L9.02211765,5.617 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setTwoWay(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M16.763,2.989 L14.203,0.385 C13.909,0.085 13.285,0.085 12.992,0.385 L12.992,2.199 C11.533,2.261 9.891,3.112 9,4.343 C8.107,3.113 6.349,2.261 4.891,2.199 L4.891,0.385 C4.596,0.085 3.973,0.085 3.679,0.385 L1.237,2.989 C0.942,3.288 0.942,3.774 1.237,4.074 L3.679,6.677 C3.973,6.977 4.596,6.977 4.891,6.677 L4.891,4.915 C6.292,5.003 8.047,6.17 8.047,7.604 L8.047,14.937 L9.922,14.937 L9.922,7.604 C9.922,6.169 11.59,5.002 12.992,4.915 L12.992,6.677 C13.285,6.977 13.909,6.977 14.203,6.677 L16.763,4.074 C17.058,3.774 17.058,3.288 16.763,2.989 L16.763,2.989 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setTwoWay2(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M16.807,2.894 L14.049,0.135 C13.789,-0.125 13.366,-0.123 13.105,0.14 L13.095,2.103 L4.383,2.103 C3.645,2.103 3.047,2.702 3.047,3.438 L3.047,12.06 L1.135,12.072 C0.875,12.331 0.879,12.753 1.141,13.015 L3.928,15.801 C4.19,16.065 4.613,16.068 4.871,15.807 L7.629,13.049 C7.889,12.789 7.887,12.293 7.624,12.031 L5.958,12.043 L5.958,5.941 C5.958,5.203 6.23,4.958 6.969,4.958 L13.081,4.958 L13.071,6.629 C13.331,6.888 13.752,6.886 14.013,6.624 L16.802,3.837 C17.064,3.575 17.066,3.152 16.807,2.894 L16.807,2.894 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setDebitCard(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 3.000000)" fill="${bg}">
            <path d="M14.666,0.07 L1.333,0.07 C0.597,0.07 -2.27373675e-13,0.641 -2.27373675e-13,1.347 L-2.27373675e-13,1.986 L16,1.986 L16,1.347 C16,0.642 15.402,0.07 14.666,0.07 L14.666,0.07 Z"></path>
            <path d="M0,8.648 C0,9.379 0.597,9.971 1.333,9.971 L14.666,9.971 C15.402,9.971 16,9.379 16,8.648 L16,4.07 L2.27373675e-13,4.07 L2.27373675e-13,8.648 L0,8.648 Z M6,5.903 L10,5.903 L10,7.028 L6,7.028 L6,5.903 L6,5.903 Z M3.958,7.933 L12,7.933 L12,9.029 L3.958,9.029 L3.958,7.933 L3.958,7.933 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setUserCard(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 1.000000)" fill="${bg}">
            <path d="M7.997,4.883 C7.469,4.883 7.04,4.671 7.04,3.892 L7.04,0.856 C7.04,0.075 7.469,4.54747351e-13 7.997,4.54747351e-13 C8.525,4.54747351e-13 8.953,0.075 8.953,0.856 L8.953,3.892 C8.953,4.671 8.525,4.883 7.997,4.883 L7.997,4.883 Z"></path>
            <path d="M10,3.938 L10.058,4.553 C10.058,5.741 9.13649991,6.04999999 7.99949991,6.04999999 C6.86049991,6.04999999 5.936,5.741 5.936,4.553 L5.936,4 L2.047,3.938 C0.938,3.938 0.041,4.807 0.041,5.938 L0.041,12.938 C0.041,14.07 0.937,14.93 2.047,14.93 L13.955,14.93 C15.06,14.93 15.958,14.012 15.958,12.88 L15.958,6.05 C15.958,4.919 15.061,4 13.955,4 L10,3.938 Z M5.49910501,6.938 C6.32696897,6.938 7,7.62560028 7,8.47364061 C7,9.31984735 6.32696897,10.938 5.49910501,10.938 C4.67124105,10.938 4,9.31893055 4,8.47364061 C4.00089499,7.62560028 4.67213604,6.938 5.49910501,6.938 L5.49910501,6.938 Z M8.98256822,12.938 L2.00166571,12.938 C2.00166571,12.938 1.88188822,10.9507215 3.67372082,10.9507215 C4.04657655,11.5240972 4.56142656,12.0765734 5.5080551,12.0765734 C6.45661553,12.0765734 6.90674706,11.5204625 7.27863685,10.938 C9.29456926,10.9389087 8.98256822,12.938 8.98256822,12.938 L8.98256822,12.938 Z M14,12.896 L10,12.896 L10,11.896 L14,11.896 L14,12.896 L14,12.896 Z M14,10.892 L10,10.892 L10,9.892 L14,9.892 L14,10.892 L14,10.892 Z M14,8.896 L10,8.896 L10,7.896 L14,7.896 L14,8.896 L14,8.896 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBalance(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 1.000000)" fill="${bg}">
            <g>
              <path d="M9.953,13 L5.016,13 L5.016,14.031 L4,14.031 L4,15 L11,15 L11,14.031 L9.953,14.031 L9.953,13 Z"></path>
              <path d="M7.016,3 L7.016,11.953 L7.969,11.953 L7.969,3 L12.5,3 L7.969,1.833 L7.969,0.016 L7.016,0.016 L7.016,1.833 L2.469,3 L7.016,3 Z"></path>
              <path d="M2.492,4.979 L4.392,8.984 L4.958,8.777 L2.733,4.168 C2.68,4.07 2.576,4.008 2.435,4.016 C2.307,4.021 2.196,4.091 2.156,4.191 L0.012,8.8 L0.6,8.962 L2.492,4.979 L2.492,4.979 Z"></path>
              <path d="M12.182,4.195 L10.024,8.814 L10.616,8.976 L12.518,4.986 L14.43,9 L15,8.792 L12.762,4.173 C12.709,4.076 12.602,4.014 12.463,4.022 C12.333,4.025 12.223,4.097 12.182,4.195 L12.182,4.195 Z"></path>
            </g>
            <path d="M14.984,10.031 C14.984,11.092 13.872,11.953 12.5,11.953 C11.128,11.953 10.016,11.092 10.016,10.031 L14.984,10.031 L14.984,10.031 Z"></path>
            <path d="M4.984,10.031 C4.984,11.092 3.872,11.953 2.5,11.953 C1.128,11.953 0.016,11.092 0.016,10.031 L4.984,10.031 L4.984,10.031 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBalloon(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M8.998,13.272 C7.364,13.272 7.16,12.857 7.135,12.775 C7.033,12.423 7.649,11.672 8.131,11.263 L8.104,11.222 C10.254,10.555 11.911,6.689 11.911,4.449 C11.911,1.992 9.921,0 7.469,0 C5.017,0 3.027,1.992 3.027,4.449 C3.027,6.799 4.845,10.935 7.148,11.298 C6.755,11.76 6.361,12.404 6.537,13 C6.734,13.674 7.517,13.988 9,13.988 C9.123,13.988 9.18,14.135 9.068,14.293 C8.736,14.75 7.851,15.284 6.448,15.284 L6.448,16 C8.619,16 9.822,14.831 9.822,14.023 C9.822,13.791 9.73,13.587 9.567,13.451 C9.421,13.333 9.23,13.272 8.998,13.272 L8.998,13.272 Z M4.643,4.648 C4.643,5.336 4.047,5.044 4.047,4.044 C4.047,2.356 5.379,0.986 7.025,0.986 C8.003,0.986 8.294,1.599 7.62,1.599 C5.977,1.6 4.643,2.959 4.643,4.648 L4.643,4.648 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setBandage(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g fill="#555555">
            <path d="M0.927,10.543 C-0.238,11.711 -0.25,13.59 0.902,14.742 L1.256,15.096 C2.407,16.246 4.285,16.235 5.451,15.069 L6.987,13.535 L2.462,9.012 L0.927,10.543 L0.927,10.543 Z"></path>
            <path d="M15.129,1.222 L14.775,0.868 C13.623,-0.283 11.742,-0.27 10.57,0.899 L9.008,2.463 L13.535,6.988 L15.097,5.425 C16.266,4.256 16.279,2.373 15.129,1.222 L15.129,1.222 Z"></path>
            <path d="M3.469,7.969 L8,12.469 L12.562,8.031 L7.974,3.385 L3.469,7.969 L3.469,7.969 Z M8.026,6.026 L6.979,6.026 L6.979,4.979 L8.026,4.979 L8.026,6.026 L8.026,6.026 Z M10.026,8.042 L8.979,8.042 L8.979,6.98 L10.026,6.98 L10.026,8.042 L10.026,8.042 Z M10.011,10.042 L8.98,10.042 L8.98,8.98 L10.011,8.98 L10.011,10.042 L10.011,10.042 Z M8.011,8.042 L6.98,8.042 L6.98,6.98 L8.011,6.98 L8.011,8.042 L8.011,8.042 Z M6.011,8.042 L4.98,8.042 L4.98,6.98 L6.011,6.98 L6.011,8.042 L6.011,8.042 Z M8.026,10.042 L6.979,10.042 L6.979,8.98 L8.026,8.98 L8.026,10.042 L8.026,10.042 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBank(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M15,14 L15,13 L13.998,13 L13.998,12 L13,12 L13,6.032 L12.031,6.032 L12.031,12 L10,12 L10,6.032 L9,6.032 L9,12 L7,12 L7,6.032 L6,6.032 L6,12 L4,12 L4,6.032 L3.01,6.032 L3,12 L2,12 L2,13 L1,13 L1,14 L0,14 L0,15 L16,15 L16,14 L15,14 Z"></path>
            <path d="M2.021,6 L13.979,6 L13.979,5 L14.979,5 L14.979,4 L13.969,4 L8.031,0.094 L2.031,4 L1,4 L1,5 L2.021,5 L2.021,6 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBarcode(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 2.000000)" fill="${bg}">
            <rect x="13" y="0" width="1.953" height="10.914"></rect>
            <rect x="10" y="0" width="1.967" height="10.914"></rect>
            <rect x="8" y="0" width="0.95" height="10.914"></rect>
            <rect x="4" y="0" width="1.972" height="10.914"></rect>
            <rect x="2" y="0" width="0.973" height="10.914"></rect>
            <rect x="0" y="0" width="0.973" height="10.914"></rect>
          </g>
        </g>
      `;
      return this;
    }
  
    setBarrier(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M1.70262471,2 C1.33507483,2 1.036,2.301 1.036,2.673 L1.036,6.167 C1.036,6.378 1.1366986,6.557 1.28573252,6.681 C1.40153591,6.777 1.54251394,6.84 1.70262471,6.84 C1.70262471,6.84 2.00774146,6.859 2.00774146,6.868 L2.00774146,15 L3.01472742,15 L3.01472742,13 L15.0139768,13 L15.0139768,15 L16.0077771,15 L16.0077771,6.86799998 C16.0077771,6.85899998 16.2706005,6.83999998 16.2706005,6.83999998 C16.6391573,6.83999998 16.9382322,6.53899998 16.9382322,6.16699998 L16.9382322,2.67299998 C16.9372252,2.30099998 16.6381504,1.99999998 16.2706005,1.99999998 L1.70262471,2 Z M11.0105585,3 L13,3 L10.9905529,6 L9,6 L11.0105585,3 L11.0105585,3 Z M6.729,3 L8.442,3 L6.713,6 L5,6 L6.729,3 L6.729,3 Z M4.97657104,10 L7.016,10 L6.05338953,12 L4.016,12 L4.97657104,10 L4.97657104,10 Z M8.97657104,10 L11.016,10 L10.0533895,12 L8.016,12 L8.97657104,10 L8.97657104,10 Z M12.976571,10 L15.016,10 L14.0533895,12 L12.016,12 L12.976571,10 L12.976571,10 Z M2.09548167,5.70917355 C2.04092072,5.61545392 2,5.51110629 2,5.39323212 L2,3.60869448 C2,3.27342943 2.26086957,3 2.58226769,3 L4,3 L2.58226769,5.99999424 C2.37425405,6.00096043 2.20034101,5.88018771 2.09548167,5.70917355 L2.09548167,5.70917355 Z M15,7.02447059 L15,9 L3,9 L3,7.02447059 L3,7 L14.042,7 C14.041,7.01035294 15,7.01694118 15,7.02447059 L15,7.02447059 Z M15.357,5.986 L14.047,5.986 L15.809,2.986 C15.975,3.10349842 16.088,3.27595578 16.088,3.47684018 L16.088,5.3482868 C16.088,5.70172963 15.762,5.986 15.357,5.986 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setBaseball(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g fill="${bg}">
            <path d="M3.518,14.562 C4.434,13.746 5.712,13.19 6.863,12.963 C8.597,12.622 9.894,10.984 9.882,9.151 C9.878,8.305 9.534,7.506 8.916,6.9 C8.345,6.36 7.584,6.062 6.776,6.061 L6.623,6.064 C4.815,6.145 3.773,7.072 3.247,9.071 C2.929,10.291 2.214,11.566 1.411,12.471 C1.976,13.292 2.69,14.002 3.518,14.562 L3.518,14.562 Z"></path>
            <path d="M8,0.046 C3.591,0.046 0.0160000001,3.603 0.0160000001,7.989 C0.0160000001,9.197 0.295,10.337 0.78,11.362 C1.325,10.659 1.837,9.722 2.087,8.766 C2.75,6.246 4.217,4.971 6.571,4.867 L6.772,4.862 C7.891,4.862 8.948,5.279 9.749,6.037 C10.602,6.873 11.074,7.975 11.081,9.142 C11.099,11.542 9.386,13.69 7.096,14.138 C6.22,14.312 5.32,14.682 4.632,15.183 C5.657,15.659 6.796,15.932 8.001,15.932 C12.41,15.932 15.985,12.375 15.985,7.989 C15.985,3.603 12.409,0.046 8,0.046 L8,0.046 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBate(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M3.291,15.114 L3.016,14.837 C6.416,10.782 10.014,9.208 12.914,6.673 C15.865,4.094 16.016,3.788 16.364,3.439 C17.186,2.617 17.234,1.334 16.473,0.572 C15.71,-0.191 14.426,-0.143 13.604,0.679 C13.255,1.027 12.949,1.179 10.371,4.129 C7.836,7.03 5.914,10.614 2.186,14.01 L1.91,13.733 C1.774,13.597 1.479,13.673 1.25,13.902 C1.021,14.131 0.945,14.425 1.082,14.562 L2.464,15.943 C2.6,16.08 2.895,16.004 3.124,15.775 C3.352,15.546 3.429,15.251 3.291,15.114 L3.291,15.114 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setBasketball(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g fill="${bg}">
            <path d="M1.831,2.645 C0.334,4.37 -0.236,6.614 0.107,8.739 C1.774,8.36 3.419,8.622 4.634,9.571 L6.694,7.51 L1.831,2.645 L1.831,2.645 Z"></path>
            <path d="M6.207,14.883 C8.349,15.245 10.615,14.679 12.356,13.169 L7.447,8.261 L5.386,10.322 C6.341,11.544 6.6,13.203 6.207,14.883 L6.207,14.883 Z"></path>
            <path d="M0.354,9.804 C0.65,10.735 1.145,11.612 1.814,12.391 L3.836,10.37 C2.898,9.689 1.643,9.515 0.354,9.804 L0.354,9.804 Z"></path>
            <path d="M5.146,14.628 C5.444,13.33 5.27,12.065 4.586,11.12 L2.561,13.145 C3.339,13.823 4.216,14.325 5.146,14.628 L5.146,14.628 Z"></path>
            <path d="M13.148,12.371 C14.634,10.63 15.186,8.37 14.816,6.238 C13.153,6.614 11.512,6.351 10.302,5.404 L8.242,7.465 L13.148,12.371 L13.148,12.371 Z"></path>
            <path d="M8.707,0.175 C6.592,-0.177 4.356,0.377 2.629,1.852 L7.49,6.714 L9.551,4.653 C8.611,3.451 8.344,1.825 8.707,0.175 L8.707,0.175 Z"></path>
            <path d="M14.553,5.176 C14.25,4.257 13.752,3.392 13.082,2.625 L11.102,4.605 C12.033,5.279 13.275,5.455 14.553,5.176 L14.553,5.176 Z"></path>
            <path d="M9.775,0.428 C9.502,1.697 9.681,2.929 10.349,3.854 L12.328,1.876 C11.559,1.214 10.693,0.725 9.775,0.428 L9.775,0.428 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBatteryCharging(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(4.000000, 0.000000)" fill="${bg}">
            <path d="M7.56,1.003 L5.907,1.003 L5.907,0.031 L3,0.031 L3,1.003 L1.4,1.003 C0.634,1.003 0.016,1.523 0.016,2.166 L0.016,14.799 C0.016,15.442 0.634,15.963 1.4,15.963 L7.559,15.963 C8.321,15.963 8.941,15.442 8.941,14.799 L8.941,2.166 C8.941,1.522 8.321,1.003 7.56,1.003 L7.56,1.003 Z M8.031,14.47 C8.031,14.813 7.707,15.09 7.311,15.09 L1.632,15.09 C1.237,15.09 0.913,14.813 0.913,14.47 L0.913,2.529 C0.913,2.186 1.237,1.908 1.632,1.908 L7.311,1.908 C7.707,1.908 8.031,2.186 8.031,2.529 L8.031,14.47 L8.031,14.47 Z"></path>
            <path d="M6,3.006 L2.041,10.689 L4.005,9.42 L3.016,14.004 L6.968,6.183 L4.881,7.5 L6,3.006 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBatteryEmpty(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M12.306,1 L10.999,1 L10.999,0.016 L8,0.016 L8,1 L6.77,1 C5.834,1 5,1.721 5,2.646 L5,14.325 C5,15.249 5.834,16 6.77,16 L12.306,16 C13.242,16 14,15.249 14,14.325 L14,2.646 C14,1.721 13.241,1 12.306,1 L12.306,1 Z M13,14 C13,14.516 12.516,15 12,15 L7,15 C6.485,15 5.989,14.516 5.989,14 L5.989,3 C5.989,2.486 6.485,1.949 7,1.949 L12,1.949 C12.516,1.949 13,2.485 13,3 L13,14 L13,14 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setBatteryHalf(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(5.000000, 0.000000)" fill="${bg}">
            <path d="M2,13.448 C2,13.729 2.272,13.959 2.529,13.959 L6.441,13.959 C6.696,13.959 7,13.73 7,13.448 L7,5.069 L2,8.281 L2,13.448 L2,13.448 Z"></path>
            <path d="M7.252,1 L6,1 L6,0.016 L3.023,0.016 L3.023,1 L1.715,1 C0.779,1 0.021,1.575 0.021,2.5 L0.021,14.325 C0.021,15.249 0.78,16 1.715,16 L7.251,16 C8.187,16 8.945,15.249 8.945,14.325 L8.945,2.5 C8.946,1.575 8.188,1 7.252,1 L7.252,1 Z M8,14 C8,14.516 7.516,15 7,15 L2,15 C1.485,15 1,14.516 1,14 L1,3 C1,2.486 1.485,1.949 2,1.949 L7,1.949 C7.516,1.949 8,2.485 8,3 L8,14 L8,14 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBatteryHalf2(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(5.000000, 0.000000)" fill="${bg}">
            <path d="M2.062,13.472 C2.062,13.741 2.274,13.959 2.533,13.959 L6.469,13.959 C6.727,13.959 6.939,13.74 6.939,13.472 L6.939,8.094 L2.063,10.159 L2.063,13.472 L2.062,13.472 Z"></path>
            <path d="M7.252,1 L6,1 L6,0 L3.023,0 L3.023,1 L1.715,1 C0.779,1 0.021,1.492 0.021,2.417 L0.021,14.542 C0.021,15.466 0.78,16 1.715,16 L7.251,16 C8.187,16 8.999,15.465 8.999,14.542 L8.999,2.417 C9,1.492 8.188,1 7.252,1 L7.252,1 Z M8,14 C8,14.516 7.516,15 7,15 L2,15 C1.485,15 1,14.516 1,14 L1,3 C1,2.486 1.485,2 2,2 L7,2 C7.516,2 8,2.485 8,3 L8,14 L8,14 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBatteryLow(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(5.000000, 0.000000)" fill="${bg}">
            <path d="M2.062,13.508 C2.062,13.756 2.272,13.959 2.529,13.959 L6.441,13.959 C6.696,13.959 7,13.756 7,13.508 L7,11.101 L2.062,13.157 L2.062,13.508 L2.062,13.508 Z"></path>
            <path d="M7.252,1 L6,1 L6,0.016 L3.023,0.016 L3.023,1 L1.715,1 C0.779,1 0.021,1.658 0.021,2.583 L0.021,14.325 C0.021,15.249 0.78,16 1.715,16 L7.251,16 C8.187,16 8.945,15.249 8.945,14.325 L8.945,2.583 C8.946,1.658 8.188,1 7.252,1 L7.252,1 Z M8,14 C8,14.516 7.516,15 7,15 L2,15 C1.485,15 0.936,14.516 0.936,14 L0.936,3 C0.936,2.486 1.486,1.949 2,1.949 L7,1.949 C7.516,1.949 8,2.485 8,3 L8,14 L8,14 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBell(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(2.000000, 0.000000)" fill="${bg}">
            <path d="M8.141,1.318 C8.141,0.607 7.582,0.032 6.893,0.032 C6.204,0.032 5.646,0.607 5.646,1.318 C5.646,1.398 5.655,1.478 5.668,1.555 C3.002,2.594 1,4.772 1,10 L13,10 C13.001,4.771 10.784,2.595 8.117,1.555 C8.132,1.478 8.141,1.398 8.141,1.318 Z"></path>
            <path d="M14,13 L0,13 L0.906,11 L12.812,11 L14,13 Z"></path>
            <path d="M6.961,16 C8.045,16 8.922,15.123 8.922,14.043 L5,14.043 C5,15.123 5.878,16 6.961,16 L6.961,16 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBirthday(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g fill="${bg}">
            <path d="M2.002,13.062 L2.002,14.169 C2.002,15.474 1.895,15.944 3.484,15.944 L12.394,15.944 C13.982,15.944 13.874,15.473 13.874,14.169 L13.874,13.062 L2.002,13.062 L2.002,13.062 Z"></path>
            <rect x="4" y="3" width="0.935" height="3.072"></rect>
            <rect x="7" y="3" width="1" height="2.969"></rect>
            <rect x="11" y="3" width="0.99" height="2.851"></rect>
            <path d="M4.965,0.975 C5.065,1.381 4.907,1.848 4.528,1.89 C4.174,1.93 3.903,1.473 4.175,1.02 C4.454,0.56 4.528,0.06 4.528,0.06 C4.528,0.06 4.848,0.487 4.965,0.975 L4.965,0.975 Z"></path>
            <path d="M7.938,1.021 C8.043,1.447 7.877,1.939 7.469,1.983 C7.088,2.025 6.797,1.544 7.091,1.069 C7.391,0.584 7.469,0.059 7.469,0.059 C7.469,0.059 7.811,0.509 7.938,1.021 L7.938,1.021 Z"></path>
            <path d="M11.974,1.023 C12.086,1.449 11.908,1.939 11.476,1.983 C11.072,2.025 10.762,1.545 11.075,1.07 C11.394,0.587 11.476,0.062 11.476,0.062 C11.476,0.062 11.839,0.512 11.974,1.023 L11.974,1.023 Z"></path>
            <g transform="translate(2.000000, 6.000000)">
              <path d="M1.146,2.437 C1.561,2.437 2.162,2.043 2.339,1.905 C2.344,1.899 3.066,1.221 3.941,1.221 C4.812,1.221 5.564,1.893 5.595,1.922 C5.757,2.062 6.293,2.437 6.769,2.437 C7.331,2.437 7.877,1.932 7.877,1.932 C7.917,1.894 8.664,1.221 9.565,1.221 C10.47,1.221 11.191,1.899 11.221,1.928 C11.382,2.066 11.685,2.269 11.958,2.37 C11.927,1.069 11.329,0.03 9.782,0.03 L2.259,0.03 C0.868,0.03 0.241,0.867 0.105,1.979 C0.33,2.146 0.793,2.437 1.146,2.437 L1.146,2.437 Z"></path>
              <path d="M10.717,3.469 C10.699,3.453 10.16,2.95 9.566,2.95 C8.967,2.95 8.401,3.457 8.394,3.463 C8.368,3.486 7.643,4.163 6.77,4.163 C5.905,4.163 5.129,3.496 5.096,3.467 C4.933,3.321 4.414,2.95 3.942,2.95 C3.38,2.95 2.838,3.453 2.831,3.457 C2.716,3.549 1.899,4.163 1.147,4.163 C0.761,4.163 0.375,4.004 0.077,3.838 L0.077,5.945 L11.966,5.945 L11.966,4.131 C11.355,4.004 10.789,3.53 10.717,3.469 L10.717,3.469 Z"></path>
            </g>
            <rect x="0" y="14" width="15.851" height="1.935"></rect>
          </g>
        </g>
      `;
      return this;
    }
  
    setBlender(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(4.000000, 0.000000)" fill="${bg}">
            <path d="M6.822,12.062 L5.958,12.069 L5.987,11 L3.03,11 L3.02,12.06 L2.118,12.058 C0.928,12.867 0.021,14.192 0.021,15.041 C0.021,16.27 8.95,16.291 8.95,15.041 C8.95,14.588 8.123,12.992 6.822,12.062 L6.822,12.062 Z M5.043,14.062 L3.958,14.062 L3.958,12.958 L5.043,12.958 L5.043,14.062 L5.043,14.062 Z"></path>
            <path d="M7.857,2.023 C7.933,1.511 7.979,1.149 7.979,1.031 C7.979,-0.281 1.062,-0.26 1.062,1.031 C1.062,2.342 2.744,9.932 4.093,9.932 L4.826,9.932 C5.274,9.932 5.718,9.092 6.113,7.927 C9.342,7.514 9.995,4.692 9.999,4.634 L9.999,2.023 L7.857,2.023 L7.857,2.023 Z M6.479,6.979 C6.898,5.676 7.248,4.109 7.462,2.979 L9.02,2.979 L9.021,4.671 C9.012,4.756 8.783,6.562 6.479,6.979 L6.479,6.979 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBloodBag(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(4.000000, 0.000000)" fill="${bg}">
            <path d="M8.958,9.221 L8.958,1.783 C8.958,1.783 9.14,0.052 6.896,0.052 L2.084,0.052 C-0.16,0.052 0.022,1.783 0.022,1.783 L0.022,9.221 C0.022,9.221 -0.124,10.969 1.084,10.969 L3.043,10.969 L3.043,11.917 L4.044,11.917 L4.044,14 L3.043,14 L3.043,15 L4.044,15 L4.044,15.917 L5,15.917 L5,15 L5.938,15 L5.938,14 L5,14 L5,11.917 L6,11.917 L6,10.969 L7.896,10.969 C9.25,10.969 8.958,9.221 8.958,9.221 L8.958,9.221 Z M6.65,10.167 L6,10.167 L6,10 L3.042,10 L3.042,10.167 L2.39,10.167 C0.844,10.167 0.912,8.811 0.912,8.811 L0.912,4.954 L2.969,4.954 L2.969,4.053 L0.912,4.053 L0.912,2.954 L2.953,2.954 L2.953,2.053 L0.965,2.053 C1.069,1.629 1.388,0.917 2.389,0.917 L6.65,0.917 C8,0.917 8.129,2.362 8.129,2.362 L8.129,8.811 C8.13,8.811 8.25,10.167 6.65,10.167 L6.65,10.167 Z"></path>
            <path d="M2.023,8.137 C2.023,8.833 2.726,8.944 2.726,8.944 L6.267,8.944 C6.267,8.944 6.971,8.918 6.971,8.137 L6.971,5.027 L2.023,5.027 L2.023,8.137 L2.023,8.137 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBluetooh(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(3.000000, 0.000000)" fill="${bg}">
            <path d="M5,11.967 L5.969,11.024 L5,10 L5,11.967 Z"></path>
            <path d="M5.03,5.982 L5.969,5.037 L5.03,4.009 L5.03,5.982 Z"></path>
            <path d="M4.506,0 C2.033,0 0.027,1.546 0.027,3.453 L0.027,12.548 C0.027,14.454 2.033,16 4.506,16 C6.978,16 8.983,14.454 8.983,12.548 L8.983,3.453 C8.982,1.546 6.978,0 4.506,0 L4.506,0 Z M7.45190491,11.0110538 L3.93994018,14 L3.93994018,8.81503316 L1.72040302,10.8813559 L1.04604849,10.1326455 L3.13664987,8.06337509 L1,6.09923852 L1.72040302,5.43306313 L3.93994018,7.34512405 L3.93994018,2 L7.5,5.11667895 L4.6378306,8.094817 L7.45190491,11.0110538 L7.45190491,11.0110538 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBoard(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M15,2 L3,2 C1.896,2 1,2.896 1,4 L1,11 C1,12.104 1.896,13 3,13 L15,13 C16.104,13 17,12.104 17,11 L17,4 C17,2.896 16.104,2 15,2 L15,2 Z M5,10 L4,10 L4,7 L3,7 L3,6 L4,6 L5,6 L5,10 L5,10 Z M9,8 L8,8 L8,9 L7,9 L7,8 L6,8 L6,7 L7,7 L7,6 L8,6 L8,7 L9,7 L9,8 L9,8 Z M12,10 L11,10 L11,7 L10,7 L10,6 L11,6 L12,6 L12,10 L12,10 Z M15,9 L13,9 L13,8 L15,8 L15,9 L15,9 Z M15,7 L13,7 L13,6 L15,6 L15,7 L15,7 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setBoat(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M14.9779999,14.8947754 L15.9663088,13.0660401 C11.5941439,13.06604 5.46444796,13.5757852 3.07751483,12.0299073 C0.0275658979,11.5240048 0.0419999999,11.0000001 0.0419999999,11.0000001 C0.0419999999,11.0000001 0.722656254,14.8947754 3.07751474,14.8947754 C6.27148456,14.8947754 14.9779999,14.8947754 14.9779999,14.8947754 Z"></path>
            <path d="M11.0167695,10.9907832 L11.014,2 L15.9125977,10.9907827 L11.0167695,10.9907832 Z"></path>
            <path d="M10.0148926,11.0224609 L10.0148926,-0.0520019531 L5,10.253 L10.0148926,11.0224609 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBolt(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M14.289,0.023 L6.925,0 L2.984,8 L8,8 L3.666,15.916 L14.924,4.941 L10.35,4.941 L14.289,0.023 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setBomb(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M15.427,0.016 C15.334,0.968 14.573,1.271 13.332,1.655 C12.748,1.837 12.127,2.034 11.62,2.375 C10.73,1.902 10.109,2.012 10.109,2.012 L8.808,3.628 C10.087,4.039 11.175,4.845 11.912,5.899 L13.2,4.296 C13.2,4.296 13.295,3.608 12.242,2.783 C12.62,2.583 13.067,2.439 13.529,2.296 C14.664,1.944 15.854,1.464 15.999,9.09494702e-13 L15.427,0.016 L15.427,0.016 Z"></path>
            <path d="M7.857,4.364 C7.261,4.165 6.627,4.052 5.962,4.052 C2.669,4.052 -0.001,6.722 -0.001,10.016 C-0.001,13.31 2.669,15.979 5.962,15.979 C9.256,15.979 11.925,13.31 11.925,10.016 C11.925,8.788 11.554,7.65 10.919,6.701 C10.193,5.616 9.119,4.787 7.857,4.364 L7.857,4.364 Z M6.299,6.077 C3.592,6.077 2.137,7.586 2.137,10.043 L1.031,10.043 C1.031,7.408 3.243,5.233 6.069,4.964 C6.068,4.964 6.457,6.077 6.299,6.077 L6.299,6.077 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBone(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M3.321,13.61 C3.321,13.61 3.383,14.874 3.97,15.462 C4.654,16.145 5.751,16.156 6.422,15.486 C7.376,14.532 7.506,13.213 7.392,12.119 L13.158,6.354 C14.245,6.463 15.562,6.327 16.533,5.356 C17.195,4.694 17.18,3.604 16.499,2.922 C15.91,2.334 14.713,2.345 14.713,2.345 C14.713,2.345 14.675,1.099 14.082,0.506 C13.396,-0.182 12.293,-0.197 11.625,0.473 C10.655,1.443 10.54,2.795 10.667,3.902 L4.939,9.631 C3.848,9.522 2.523,9.657 1.544,10.635 C0.88,11.298 0.893,12.385 1.569,13.062 C2.156,13.646 3.321,13.61 3.321,13.61 L3.321,13.61 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setBook(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.000000, 2.000000)" fill="${bg}">
            <g transform="translate(2.000000, 0.000000)">
              <path d="M5.969,0.74 C2.92,-0.712 1.942,0.326 0,1.523 L0,8.968 C1.941,7.763 3.434,6.999 5.969,8.317 L5.969,0.74 L5.969,0.74 Z"></path>
              <path d="M6.027,0.758 L6.027,8.349 C9.379,6.988 10.062,7.8 11.984,9 L11.984,1.542 C10.062,0.348 9.447,-0.726 6.027,0.758 L6.027,0.758 Z"></path>
            </g>
            <path d="M15.938,11 L0.051,11 L0.051,1.049 L0.953,1.049 L0.953,10.078 L15.031,10.078 L15.031,1.094 L15.938,1.094 L15.938,11 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBook2(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M4.048,13.774 L6.062,15.896 L14.909,13.831 L14.909,1.965 L13.932,1.384 L6.062,3.961 L4.997,2.921 L12.697,0.636 L11.549,0.011 L4.062,2.133 L4.048,13.774 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setBookmark(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M12.6770458,0 L3.3259431,0 C2.59354904,0 2.002,0.604724409 2.002,1.35256693 L2.002,14.6474331 C2.002,15.3952756 2.59455508,16 3.3259431,16 L8.00199745,11.9866457 L12.6760397,16 C13.4084338,16 14.0019949,15.3952756 14.0019949,14.6474331 L14.0019949,1.35256693 C14.004007,0.603716535 13.4094398,0 12.6770458,0 L12.6770458,0 Z M10.4815694,10 L8.01,8.63310123 L5.53843063,10 L6.01050543,7.10444563 L4.01,5.05516872 L6.77370988,4.63310123 L8.01,2 L9.24629012,4.63310123 L12.01,5.05516872 L10.0094946,7.10444563 L10.4815694,10 L10.4815694,10 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setBriefcase(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 1.000000)" fill="${bg}">
            <path d="M5.959,2.079 C5.959,1.46 6.441,0.955 7.031,0.955 L8.869,0.955 C9.459,0.955 10.053,1.46 10.053,2.079 L10.053,2.021 L10.972,2.021 L10.972,1.547 C10.972,0.687 10.494,-0.000999999989 9.514,-0.000999999989 L6.385,-0.000999999989 C5.731,-0.000999999989 5.023,0.729 5.023,1.547 L5.023,2.021 L5.96,2.021 L5.96,2.079 L5.959,2.079 Z"></path>
            <path d="M10.0008546,4.96899991 L10.0008546,5.98099991 L16,5.981 L16,2.016 L-0.0151367204,2.016 L-0.0151367204,5.981 L5.98822031,5.98099991 L5.98822031,4.96899991 L10.0008546,4.96899991 Z"></path>
            <path d="M6.00073251,7.9979248 L6.0007326,7.00299074 L0.0210000915,7.00299072 L0.0209999999,15 L16,15 L16.0000001,7.00299072 L10.0133669,7.00299074 L10.0133668,7.9979248 L6.00073251,7.9979248 Z"></path>
            <path d="M7,6 L7,6.96685791 L8.98907471,6.96685787 L8.98907471,5.99999996 L7,6 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBrightness(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">  
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M8.041,3.001 C5.326,3.001 3.125,5.239 3.125,8 C3.125,10.762 5.326,13 8.041,13 C10.758,13 12.958,10.762 12.958,8 C12.958,5.239 10.758,3.001 8.041,3.001 L8.041,3.001 Z M8.083,11.227 C6.301,11.227 4.856,9.783 4.856,8 C4.856,6.219 6.3,4.774 8.083,4.774 C9.866,4.774 11.31,6.218 11.31,8 C11.31,9.782 9.865,11.227 8.083,11.227 L8.083,11.227 Z"></path>
            <rect x="7" y="0" width="1.958" height="2"></rect>
            <rect x="7" y="14" width="2" height="1.958"></rect>
            <rect x="14" y="7" width="1.958" height="1.958"></rect>
            <rect x="0" y="7" width="1.958" height="2"></rect>
            <rect transform="translate(13.690300, 3.207000) rotate(45.040515) translate(-13.690300, -3.207000) " x="12.6903093" y="2.20700934" width="1.87598248" height="1.87298251"></rect>
            <rect transform="translate(2.466500, 14.128400) rotate(45.024309) translate(-2.466500, -14.128400) " x="1.4665095" y="13.1284095" width="1.87498219" height="1.93298164"></rect>
            <rect transform="translate(13.550300, 14.192200) rotate(45.000000) translate(-13.550300, -14.192200) " x="12.5503096" y="13.1922096" width="1.92798151" height="1.87498202"></rect>
            <rect transform="translate(2.443400, 3.189900) rotate(45.000000) translate(-2.443400, -3.189900) " x="1.44340959" y="2.18990959" width="1.83998235" height="1.87498202"></rect>
          </g>
        </g>
      `;
      return this;
    }
  
    setBrush(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M0.056,8.306 L4.364,4.955 L11.067,11.66 L7.717,15.968 C7.717,15.968 7.761,14.914 6.28,14.531 C4.89,14.172 4.648,12.243 3.437,11.843 C2.226,11.443 2.011,10.601 1.451,9.698 C0.891,8.795 0.056,8.306 0.056,8.306 L0.056,8.306 Z"></path>
            <path d="M12.981,7.83 L11.835,6.684 C13.676,5.081 15.114,3.782 15.372,3.522 C16.167,2.729 16.165,1.444 15.372,0.651 C14.579,-0.143 13.292,-0.143 12.499,0.649 C12.241,0.909 10.94,2.346 9.339,4.189 L8.193,3.043 C7.664,2.514 6.806,2.513 6.277,3.042 L5.32,3.999 L12.024,10.704 L12.982,9.745 C13.51,9.217 13.51,8.358 12.981,7.83 L12.981,7.83 Z M13.246,2.777 C12.863,2.394 12.863,1.775 13.246,1.393 C13.627,1.011 14.246,1.012 14.629,1.394 C15.012,1.777 15.012,2.396 14.629,2.777 C14.247,3.16 13.629,3.16 13.246,2.777 L13.246,2.777 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBrush2(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.000000, 1.000000)" fill="${bg}">
            <path d="M15.172,3.244 C14.715,3.785 10.553,8.014 8.326,9.666 L7.413,8.799 C8.703,6.288 12.154,1.507 12.609,0.967 C13.204,0.263 14.646,-0.248 15.416,0.298 C16.428,1.014 15.766,2.538 15.172,3.244 L15.172,3.244 Z"></path>
            <path d="M6.607,9.702 C6.607,9.702 4.515,9.149 3.259,11.296 C2.004,13.443 0.808,12.708 0.27,12.524 C-0.268,12.34 1.526,14.794 2.363,14.794 C3.181,14.794 6.752,15.969 7.631,11.36 C7.649,11.259 7.703,9.877 6.607,9.702 L6.607,9.702 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBrushPencil(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g fill="${bg}">
            <path d="M15.833,13.042 C15.316,13.221 14.295,13.592 13.121,11.606 C11.947,9.622 10.395,10.083 10.395,10.083 C10.308,10.098 10.234,10.127 10.157,10.153 C8.405,7.658 3.478,2.224 3.044,1.789 C2.421,1.167 1.375,0.583 0.5,1.5 C-0.323,2.362 0.099,3.487 0.722,4.11 C1.16,4.548 6.624,9.5 9.118,11.246 C9.066,11.397 9.042,11.521 9.042,11.583 C9.042,15.229 12.771,15.036 13.542,14.895 C14.917,14.646 16.35,12.865 15.833,13.042 L15.833,13.042 Z"></path>
            <path d="M5.613,10.73 L5.386,11.482 L5.872,11.968 L2.061,13.624 L1.311,12.905 L3.032,9.278 L3.014,9.984 L4.012,9.97 L4.865,9.125 C4.335,8.675 3.807,8.219 3.303,7.778 L2.469,8.613 C2.469,8.613 0.157,13.933 3.29099005e-11,14.363 C-0.125,14.703 0.306,15.134 0.604,14.988 C1.084,14.751 6.344,12.468 6.344,12.468 L7.512,11.296 C7.088,10.967 6.627,10.595 6.151,10.202 L5.613,10.73 L5.613,10.73 Z"></path>
            <path d="M12.147,1.92 L13.406,3.156 L9.176,7.263 C9.554,7.723 9.91,8.165 10.227,8.574 L14.488,4.299 C14.99,3.797 15.018,3.073 14.48,2.536 L12.475,0.546 C11.936,0.00899999997 11.092,-0.019 10.591,0.482 L6.71,4.37 C7.156,4.88 7.619,5.415 8.074,5.951 L12.147,1.92 L12.147,1.92 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setMessage(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g fill="${bg}">
            <path d="M2.701,14.927 L3.752,10.929 L2.299,10.929 C1.059,10.929 0,9.944 0,8.672 L0,2.303 C0,1.033 1.011,0 2.252,0 L13.748,0 C14.989,0 16,1.033 16,2.303 L16,8.672 C16,9.943 15.037,10.929 13.797,10.929 L7.983,10.929 L2.701,14.927 L2.701,14.927 Z M0.959,2.513 L0.959,8.565 C0.959,9.445 1.66200031,10.0168455 2.52500031,10.0168455 L4.82200031,10.0168455 L4.052,12.886 L7.53400031,10.0168455 L13.5140003,10.0168455 C14.3790003,10.0168455 15.082,9.445 15.082,8.565 L15.082,2.513 C15.082,1.634 14.379,0.918 13.514,0.918 L2.525,0.918 C1.662,0.918 0.959,1.634 0.959,2.513 Z"></path>
            <path d="M12.625,8.946 L3.344,8.946 C2.348,8.946 2.049,8.527 2.049,7.562 L2.049,3.468 C2.049,2.505 2.41000021,2.04162598 3.40600021,2.04162598 L12.6250002,2.04162598 C13.6230002,2.04162598 13.939,2.599 13.939,3.561 L13.939,7.531 C13.938,8.496 13.623,8.946 12.625,8.946 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setMessage2(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M8.988,1.002 C4.601,1.002 1.041,3.621 1.041,6.854 C1.041,9.804 4.009,12.237 7.865,12.64 L5.823,15.972 L11.926,12.286 C14.86,11.426 16.938,9.319 16.938,6.853 C16.938,3.621 13.379,1.002 8.988,1.002 L8.988,1.002 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setMessageDot(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M14.1,0 L3.902,0 C2.873,0 2.039,0.795 2.039,2.094 L2.039,7.938 C2.039,9.237 2.873,9.989 3.902,9.989 L9.602,9.989 L8.032,14.969 L12.506,9.989 L14.101,9.989 C15.13,9.989 15.965,9.237 15.965,7.938 L15.965,2.094 C15.964,0.795 15.129,0 14.1,0 L14.1,0 Z M5.02,6.312 C4.301,6.312 3.719,5.722 3.719,4.994 C3.719,4.266 4.301,3.677 5.02,3.677 C5.741,3.677 6.321,4.267 6.321,4.994 C6.32,5.723 5.74,6.312 5.02,6.312 L5.02,6.312 Z M9,6.24 C8.291,6.24 7.719,5.682 7.719,4.994 C7.719,4.306 8.291,3.749 9,3.749 C9.707,3.749 10.281,4.307 10.281,4.994 C10.281,5.683 9.707,6.24 9,6.24 L9,6.24 Z M13,6.24 C12.295,6.24 11.719,5.682 11.719,4.994 C11.719,4.306 12.295,3.749 13,3.749 C13.707,3.749 14.281,4.307 14.281,4.994 C14.281,5.683 13.707,6.24 13,6.24 L13,6.24 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setMessageQuote(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M8.009,0.042 C3.615,0.042 0.052,2.826 0.052,6.263 C0.052,9.399 3.024,11.985 6.884,12.414 L4.768,15.984 L10.951,12.039 C13.888,11.125 15.969,8.885 15.969,6.263 C15.968,2.826 12.403,0.042 8.009,0.042 L8.009,0.042 Z M7.051,7 C7.051,8.333 5.396,9.062 3.967,9.062 L3.967,7.945 C4.688,7.945 5.708,7.591 5.708,7 L3.967,7 L3.967,3.989 L7.051,3.989 L7.051,7 L7.051,7 Z M12.051,7 C12.051,8.333 10.396,9.062 8.967,9.062 L8.967,7.945 C9.688,7.945 10.708,7.591 10.708,7 L8.967,7 L8.967,3.989 L12.051,3.989 L12.051,7 L12.051,7 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setChat(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.000000, 1.000000)" fill="${bg}">
            <path d="M5.939,0 C2.666,0 0.00899999996,1.987 0.00899999996,4.438 C0.00899999996,6.674 2.224,8.52 5.101,8.825 L3.88,11.26 L8.129,8.56 C10.318,7.906 12,6.309 12,4.438 C12,1.988 9.213,0 5.939,0 Z"></path>
            <path d="M15.947,8.89 C15.947,7.766 14.885,6.602 13.658,6.022 C13.314,7.972 11.734,9.767 9.241,10.469 L8.054,11.111 C8.508,11.451 9.064,11.722 9.688,11.899 L13.326,13.87 L12.023,12.094 C14.24,11.869 15.947,10.523 15.947,8.89 L15.947,8.89 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setMessageText(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M8.01,0.078 C3.606,0.078 0.031,2.759 0.031,6.065 C0.031,9.083 3.011,11.573 6.883,11.985 L4.762,15.423 L10.959,11.624 C13.904,10.744 15.99,8.589 15.99,6.065 C15.99,2.759 12.416,0.078 8.01,0.078 L8.01,0.078 Z M10,9 L4,9 L4,8 L10,8 L10,9 L10,9 Z M12,7.046 L4,7.046 L4,6 L12,6 L12,7.046 L12,7.046 Z M12,4.991 L4,4.991 L4,3.991 L12,3.991 L12,4.991 L12,4.991 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setBug(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M16,9.984 L16,9 L14.969,9 L15,6.016 L12.748,6.016 C12.434,5.372 12,4.8 11.467,4.333 L11.028,4 L12.985,4 L12.985,3.969 L12.985,1.985 L13.969,1.985 L13.969,1.016 L12.016,1.016 L12.016,1.032 L12,1.032 L12,3.048 L10.594,3.048 C10.527,2.605 10.291,2.163 9.985,1.833 L9.985,0 L9,0 L9,1.224 C8.689,1.106 8.359,1.021 8,1.021 C7.635,1.021 7.3,1.108 6.984,1.23 L6.984,0 L6,0 L6,1.854 C5.695,2.175 5.486,2.567 5.411,3 L3.984,3 L3.984,1.031 L3.968,1.031 L3.968,1.015 L2.015,1.015 L2.015,1.984 L3,1.984 L3,3.968 L3.984,3.968 L5.013,3.968 L4.533,4.332 C4,4.799 3.566,5.371 3.252,6.015 L1.027,6.015 L1.027,9 L0,9 L0,9.984 L1.984,9.984 L1.984,7 L2.88,7 C2.771,7.423 2.707,7.864 2.707,8.321 C2.707,9.3 2.976,10.215 3.436,11 L1.027,11.026 L1.027,11.042 L1.027,14.042 L0.055,14.042 L0.055,15 L2,15 L2,11.969 L4.194,11.969 C4.935,12.744 5.893,13.309 6.987,13.523 L8,5 L9.029,13.519 C10.109,13.305 11.054,12.748 11.791,11.985 L14,11.985 L14,15 L15.969,15 L15.969,14.016 L14.969,14.016 L14.969,11 L12.563,11 C13.025,10.215 13.292,9.301 13.292,8.321 C13.292,7.864 13.229,7.376 13.12,6.953 L14.016,6.953 L14.016,9.984 L16,9.984 L16,9.984 Z M6,10.959 L5,10.959 L5,9.959 L6,9.959 L6,10.959 L6,10.959 Z M5,7.959 L4,7.959 L4,6.959 L5,6.959 L5,7.959 L5,7.959 Z M12,7.959 L11,7.959 L11,6.959 L12,6.959 L12,7.959 L12,7.959 Z M10,4.959 L9,4.959 L9,3.959 L10,3.959 L10,4.959 L10,4.959 Z M6.938,4.959 L5.938,4.959 L5.938,3.959 L6.938,3.959 L6.938,4.959 L6.938,4.959 Z M11,10.959 L10,10.959 L10,9.959 L11,9.959 L11,10.959 L11,10.959 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setBicycle(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.000000, 2.000000)" fill="${bg}">
            <path d="M2.998,6.023 C1.356,6.023 0.016,7.361 0.016,9.005 C0.016,10.651 1.356,11.988 2.998,11.988 C4.643,11.988 5.981,10.65 5.981,9.005 C5.981,7.361 4.643,6.023 2.998,6.023 L2.998,6.023 Z M2.998,11.047 C1.873,11.047 0.958,10.131 0.958,9.006 C0.958,7.881 1.873,6.966 2.998,6.966 C4.124,6.966 5.039,7.881 5.039,9.006 C5.039,10.131 4.124,11.047 2.998,11.047 L2.998,11.047 Z"></path>
            <path d="M12.985,6.065 C11.365,6.065 10.05,7.389 10.05,9.017 C10.05,10.644 11.364,11.968 12.985,11.968 C14.601,11.968 15.917,10.644 15.917,9.017 C15.917,7.39 14.602,6.065 12.985,6.065 L12.985,6.065 Z M12.949,11.03 C11.83,11.03 10.92,10.121 10.92,9.006 C10.92,7.89 11.83,6.981 12.949,6.981 C14.07,6.981 14.978,7.89 14.978,9.006 C14.979,10.121 14.07,11.03 12.949,11.03 L12.949,11.03 Z"></path>
            <path d="M6.712,7.944 C6.417,7.944 6.177,7.705 6.177,7.41 L5.404,3.906 L4.605,3.906 C4.277,3.906 4.02,3.524 4.02,3.038 C4.02,2.544 4.272,2.171 4.605,2.171 C7.047,2.495 6.969,2.897 6.969,3.031 C6.969,3.526 6.795,3.906 6.461,3.906 L6.431,3.906 L7.114,6.613 L11.579,4.455 L11.286,3.549 C11.226,3.364 11.272,3.161 11.406,3.019 L12.521,0.958 L10.605,0.958 C10.31,0.958 10.071,0.719 10.071,0.425 C10.071,0.13 10.31,-4.54747351e-13 10.605,-4.54747351e-13 L13.455,-4.54747351e-13 C13.669,-4.54747351e-13 13.862,0.018 13.946,0.213 C14.03,0.409 13.99,0.636 13.844,0.79 L12.389,3.486 L12.953,5.578 C13.042,5.858 12.888,6.159 12.608,6.25 C12.548,6.268 12.493,6.275 12.441,6.275 C12.21,6.275 12.001,6.122 11.932,5.903 L11.804,5.57 C11.805,5.57 6.766,7.944 6.712,7.944 L6.712,7.944 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setBuilding(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M13.961,3.031 L12.969,3.031 L12.969,2.034 L11.953,2.034 L11.953,0.031 L11.015,0.031 L11.015,2.034 L10.058,2.034 L10.058,3.031 L9.035,3.031 L9.035,5.031 L8,5.031 L8,16 L14.982,16 L14.982,5.031 L13.961,5.031 L13.961,3.031 L13.961,3.031 Z M11.969,3.969 L12.969,3.969 L12.969,4.969 L11.969,4.969 L11.969,3.969 L11.969,3.969 Z M9.969,3.984 L10.969,3.984 L10.969,4.984 L9.969,4.984 L9.969,3.984 L9.969,3.984 Z M10,13.956 L9,13.956 L9,12.956 L10,12.956 L10,13.956 L10,13.956 Z M10,11.957 L9,11.957 L9,10.957 L10,10.957 L10,11.957 L10,11.957 Z M10,9.958 L9,9.958 L9,8.958 L10,8.958 L10,9.958 L10,9.958 Z M10,8 L9,8 L9,7 L10,7 L10,8 L10,8 Z M12,13.956 L11,13.956 L11,12.956 L12,12.956 L12,13.956 L12,13.956 Z M12,11.957 L11,11.957 L11,10.957 L12,10.957 L12,11.957 L12,11.957 Z M12,9.958 L11,9.958 L11,8.958 L12,8.958 L12,9.958 L12,9.958 Z M12,8 L11,8 L11,7 L12,7 L12,8 L12,8 Z M14,13.956 L13,13.956 L13,12.956 L14,12.956 L14,13.956 L14,13.956 Z M14,11.957 L13,11.957 L13,10.957 L14,10.957 L14,11.957 L14,11.957 Z M14,9.958 L13,9.958 L13,8.958 L14,8.958 L14,9.958 L14,9.958 Z M14,7.949 L13,7.949 L13,6.949 L14,6.949 L14,7.949 L14,7.949 Z"></path>
            <path d="M5.961,3.049 L4.924,3.049 L4.924,2.052 L3.975,2.052 L3.975,0.047 L3.047,0.047 L3.047,2.052 L2.014,2.052 L2.014,3.049 L1.035,3.049 L1.035,5.047 L0,5.047 L0,16 L6.982,16 L6.982,5.047 L5.961,5.047 L5.961,3.049 L5.961,3.049 Z M3.957,3.961 L4.957,3.961 L4.957,4.961 L3.957,4.961 L3.957,3.961 L3.957,3.961 Z M2,3.961 L3,3.961 L3,4.961 L2,4.961 L2,3.961 L2,3.961 Z M2,13.993 L1,13.993 L1,12.993 L2,12.993 L2,13.993 L2,13.993 Z M2,11.989 L1,11.989 L1,10.989 L2,10.989 L2,11.989 L2,11.989 Z M2,9.971 L1,9.971 L1,8.971 L2,8.971 L2,9.971 L2,9.971 Z M2,8 L1,8 L1,7 L2,7 L2,8 L2,8 Z M4,13.969 L3,13.969 L3,12.969 L4,12.969 L4,13.969 L4,13.969 Z M4,11.974 L3,11.974 L3,10.974 L4,10.974 L4,11.974 L4,11.974 Z M4,9.981 L3,9.981 L3,8.981 L4,8.981 L4,9.981 L4,9.981 Z M4,7.975 L3,7.975 L3,6.975 L4,6.975 L4,7.975 L4,7.975 Z M6,13.959 L5,13.959 L5,12.959 L6,12.959 L6,13.959 L6,13.959 Z M6,11.961 L5,11.961 L5,10.961 L6,10.961 L6,11.961 L6,11.961 Z M6,9.963 L5,9.963 L5,8.963 L6,8.963 L6,9.963 L6,9.963 Z M6,7.955 L5,7.955 L5,6.955 L6,6.955 L6,7.955 L6,7.955 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setCheckedList(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.000000, 2.000000)" fill="${bg}">
            <g transform="translate(0.000000, 1.000000)">
              <path d="M3.016,6 L0.0159999999,6 L0.0159999999,3 L3.016,3 L3.016,6 L3.016,6 Z M0.953,5 L1.953,5 L1.953,3.969 L0.953,3.969 L0.953,5 L0.953,5 Z"></path>
              <path d="M2.969,9.986 L0.0159999999,9.986 L0.0159999999,7 L2.969,7 L2.969,9.986 L2.969,9.986 Z M0.954,9 L1.954,9 L1.954,8 L0.954,8 L0.954,9 L0.954,9 Z"></path>
              <rect x="5" y="0" width="10.977" height="0.976"></rect>
              <rect x="5" y="4" width="10.977" height="0.96"></rect>
              <rect x="5" y="8" width="10.977" height="0.914"></rect>
            </g>
            <path d="M1.366,3.295 L0.0209999999,1.939 L0.656,1.304 L1.366,2 L3.402,0 L4.025,0.636 L1.366,3.295 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setList(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.000000, 2.000000)" fill="${bg}">
            <path d="M3.016,7 L0.0159999999,7 L0.0159999999,4 L3.016,4 L3.016,7 L3.016,7 Z M0.953,6 L1.953,6 L1.953,4.969 L0.953,4.969 L0.953,6 L0.953,6 Z"></path>
            <path d="M2.969,10.986 L0.0159999999,10.986 L0.0159999999,8 L2.969,8 L2.969,10.986 L2.969,10.986 Z M0.954,10 L1.954,10 L1.954,9 L0.954,9 L0.954,10 L0.954,10 Z"></path>
            <path d="M3.016,3 L0.0159999999,3 L0.0159999999,0 L3.016,0 L3.016,3 L3.016,3 Z M0.953,2 L1.953,2 L1.953,0.969 L0.953,0.969 L0.953,2 L0.953,2 Z"></path>
            <rect x="5" y="5" width="10.977" height="0.96"></rect>
            <rect x="5" y="1" width="10.977" height="0.96"></rect>
            <rect x="5" y="9" width="10.977" height="0.914"></rect>
          </g>
        </g>
      `;
      return this;
    }
  
    setList2(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 1.000000)" fill="${bg}">
            <rect x="0" y="0" width="2" height="2"></rect>
            <rect x="0" y="5" width="2" height="2"></rect>
            <rect x="0" y="10" width="2" height="2"></rect>
            <rect x="5" y="1" width="11" height="1"></rect>
            <rect x="5" y="6" width="11" height="1"></rect>
            <rect x="5" y="11" width="11" height="1"></rect>
          </g>
        </g>
      `;
      return this;
    }
  
    setBus(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 3.000000)" fill="${bg}">
            <ellipse cx="3.492" cy="8.48" rx="1.492" ry="1.48"></ellipse>
            <circle cx="12.485" cy="8.485" r="1.485"></circle>
            <path d="M14.078,0.024 L6.168,0.024 C4.064,0.024 3.031,0.524 3.031,3.015 C3.031,3.015 2.143,4.008 1.445,4.008 C0.747,4.008 0,4.451 0,4.993 L0,8.124 C0,8.532 0.219,8.852 0.918,8.943 C0.889,8.786 0.869,8.624 0.869,8.458 C0.869,7.02 2.051,5.853 3.506,5.853 C4.961,5.853 6.143,7.02 6.143,8.458 C6.143,8.634 6.124,8.804 6.09,8.97 L9.912,8.972 C9.884,8.817 9.864,8.659 9.864,8.495 C9.864,7.037 11.047,5.852 12.506,5.852 C13.965,5.852 15.147,7.037 15.147,8.495 C15.147,8.659 15.127,8.817 15.098,8.973 L15.985,8.973 L15.985,3.009 C15.984,1.146 15.314,0.024 14.078,0.024 L14.078,0.024 Z M7.016,3.031 L3.918,3.031 C3.918,0.808 4.865,0.981 5.211,0.981 L7.023,0.967 L7.016,3.031 L7.016,3.031 Z M12.043,3.021 L7.969,3.021 L7.969,0.978 L12.043,0.978 L12.043,3.021 L12.043,3.021 Z M12.974,3.021 L12.974,0.978 L14.409,0.978 C15.101,0.978 15.079,3.021 15.079,3.021 L12.974,3.021 L12.974,3.021 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setCircleDown(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g fill="${bg}">
            <path d="M7.984,16 C3.595,16 0.025,12.424 0.025,8.027 C0.025,3.632 3.595,0.056 7.984,0.056 C12.373,0.056 15.943,3.632 15.943,8.027 C15.943,12.424 12.373,16 7.984,16 L7.984,16 Z M7.977,1.904 C4.614,1.904 1.875,4.636 1.875,7.99 C1.875,11.347 4.614,14.08 7.977,14.08 C11.342,14.08 14.079,11.347 14.079,7.99 C14.078,4.636 11.341,1.904 7.977,1.904 L7.977,1.904 Z"></path>
            <path d="M5.047,8.051 L8.031,11.955 L10.947,8.05 L8.944,8.05 L8.944,4.786 C8.944,4.442 8.62,3.996 7.989,3.996 C7.359,3.996 7.013,4.479 7.013,4.822 L7.013,8.051 L5.047,8.051 L5.047,8.051 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setCircleLeft(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M0,8.041 C0,3.652 3.582,0.082 7.985,0.082 C12.386,0.082 15.968,3.652 15.968,8.041 C15.968,12.43 12.386,16 7.985,16 C3.582,16 0,12.43 0,8.041 L0,8.041 Z M14.057,8.041 C14.057,4.708 11.342,1.996 8.006,1.996 C4.669,1.996 1.954,4.708 1.954,8.041 C1.954,11.374 4.67,14.086 8.006,14.086 C11.343,14.086 14.057,11.374 14.057,8.041 L14.057,8.041 Z"></path>
            <path d="M7.975,5.02 L4.071,8.022 L7.976,10.973 L7.976,8.97 L11.116,8.97 C11.461,8.97 11.907,8.646 11.907,8.015 C11.907,7.385 11.424,7.04 11.081,7.04 L7.976,7.04 L7.976,5.02 L7.975,5.02 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setCircleRight(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M15.969,8.041 C15.969,12.43 12.387,16 7.983,16 C3.583,16 0.001,12.43 0.001,8.041 C0.001,3.652 3.583,0.082 7.983,0.082 C12.387,0.082 15.969,3.652 15.969,8.041 L15.969,8.041 Z M1.969,8.041 C1.969,11.346 4.681,14.037 8.014,14.037 C11.347,14.037 14.061,11.346 14.061,8.041 C14.061,4.736 11.348,2.045 8.014,2.045 C4.68,2.045 1.969,4.736 1.969,8.041 L1.969,8.041 Z"></path>
            <path d="M8.057,10.969 L11.961,7.967 L8.056,5.016 L8.056,7.019 L4.793,7.019 C4.447,7.019 4.002,7.343 4.002,7.974 C4.002,8.604 4.485,8.949 4.828,8.949 L8.057,8.949 L8.057,10.969 L8.057,10.969 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setCircleUp(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M7.984,0.057 C12.373,0.057 15.943,3.619 15.943,7.998 C15.943,12.375 12.373,15.937 7.984,15.937 C3.595,15.937 0.025,12.375 0.025,7.998 C0.025,3.619 3.596,0.057 7.984,0.057 L7.984,0.057 Z M7.969,14.083 C11.316,14.083 14.043,11.354 14.043,8 C14.043,4.647 11.316,1.917 7.969,1.917 C4.62,1.917 1.896,4.647 1.896,8 C1.896,11.354 4.62,14.083 7.969,14.083 L7.969,14.083 Z"></path>
            <path d="M10.975,7.906 L7.973,4.002 L5.022,7.907 L7.025,7.907 L7.025,11.171 C7.025,11.515 7.349,11.961 7.98,11.961 C8.61,11.961 8.955,11.478 8.955,11.135 L8.955,7.906 L10.975,7.906 L10.975,7.906 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setTriangleUp(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M17.027,8 C17.027,3.5808656 13.4449707,0 9.027,0 C4.60902928,0 1.027,3.5808656 1.027,8 C1.027,12.4191344 4.60902928,16 9.027,16 C13.4449707,16 17.027,12.4191344 17.027,8 L17.027,8 Z M5.15423141,10 C4.94858953,9.81414406 4.94858953,9.22609194 5.15423141,9.03925264 L8.62117967,4.14012948 C8.827787,3.95329017 9.16183436,3.95329017 9.36651079,4.14012948 L12.8450445,9.03925264 C13.0516518,9.22510858 13.0516518,9.8131607 12.8450445,10 L5.15423141,10 L5.15423141,10 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setCabinCable(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 1.000000)" fill="${bg}">
            <path d="M8.283,6 L8,6 L8,1 L6.024,1 L6.024,6 L5.674,6 C4.203,6 1.013,7.147 1.013,8.563 L1.013,12.991 C1.013,14.406 2.206,15 3.677,15 L10.28,15 C11.752,15 12.943,14.406 12.943,12.991 L12.943,8.563 C12.943,7.147 9.752,6 8.283,6 L8.283,6 Z M4.03,11.046 L1.951,11.046 L1.951,9.343 C1.951,8.958 2.405,8 3.461,8 L4.03,8 L4.03,11.046 L4.03,11.046 Z M9.046,13.332 C9.046,13.702 8.752,14.001 8.39,14.001 L5.602,14.001 C5.241,14.001 4.947,13.702 4.947,13.332 L4.947,8.573 C4.947,8.204 5.241,8 5.602,8 L8.39,8 C8.752,8 9.046,8.204 9.046,8.573 L9.046,13.332 L9.046,13.332 Z M12.041,11.046 L9.94,11.046 L9.94,8 L10.516,8 C11.662,8 12.04,8.972 12.04,9.354 L12.04,11.046 L12.041,11.046 Z"></path>
            <path d="M0.682,3.93 C0.315,3.93 0.016,3.657 0.016,3.318 C0.016,2.979 0.315,2.705 0.682,2.705 C6.257,2.705 11.759,1.72 15.04,0.132 C15.367,-0.026 15.768,0.09 15.939,0.39 C16.11,0.689 15.984,1.06 15.659,1.217 C12.199,2.891 6.46,3.93 0.682,3.93 L0.682,3.93 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setCalendar(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g fill="${bg}">
            <path d="M13,0.031 L13,1 L11,1 L11,0.031 L5,0.031 L5,1 L3,1 L3,0.031 L0,0.031 L0,16 L16,16 L16,0.031 L13,0.031 L13,0.031 Z M14.029,14.008 L1.955,14.008 L1.955,4.938 L14.029,4.938 L14.029,14.008 L14.029,14.008 Z"></path>
            <path d="M6.027,7.957 L5.047,7.957 L5.047,7.016 L6.949,7.016 L6.949,11.954 L6.027,11.954 L6.027,7.957 L6.027,7.957 Z"></path>
            <path d="M10.027,7.957 L9,7.957 L9,7.016 L10.953,7.016 L10.953,11.954 L10.027,11.954 L10.027,7.957 L10.027,7.957 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setCall(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M14.031,11.852 C13.603,11.313 12.908,10.532 12.313,10.458 C11.951,10.413 11.535,10.713 11.125,10.996 C11.045,11.036 10.427,11.404 10.352,11.426 C9.956,11.539 9.111,11.572 8.6,11.106 C8.108,10.656 7.33,9.823 6.702,9.06 C6.102,8.274 5.473,7.329 5.151,6.749 C4.815,6.148 5.057,5.353 5.265,5.003 C5.303,4.94 5.763,4.467 5.866,4.357 L5.881,4.375 C6.262,4.055 6.661,3.73 6.706,3.378 C6.78,2.792 6.181,1.939 5.753,1.399 C5.325,0.858 4.662,-0.089 3.759,0.045 C3.419,0.095 3.126,0.214 2.837,0.385 L2.829,0.376 C2.823,0.38 2.795,0.402 2.781,0.413 C2.772,0.418 2.764,0.421 2.756,0.426 L2.759,0.43 C2.593,0.558 2.119,0.912 2.065,0.96 C1.479,1.481 0.597,2.708 1.279,4.915 C1.785,6.555 2.864,8.481 4.334,10.429 L4.326,10.436 C4.398,10.53 4.472,10.615 4.547,10.706 C4.617,10.799 4.686,10.891 4.758,10.983 L4.768,10.976 C6.328,12.855 7.964,14.357 9.457,15.243 C11.467,16.435 12.896,15.898 13.556,15.471 C13.618,15.43 14.09,15.063 14.25,14.942 L14.254,14.946 C14.26,14.94 14.264,14.932 14.272,14.926 C14.284,14.917 14.31,14.897 14.315,14.893 L14.309,14.885 C14.551,14.651 14.745,14.401 14.879,14.086 C15.23,13.257 14.459,12.393 14.031,11.852 L14.031,11.852 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setCallForward(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M13.252,8.774 L15.764,6.635 C16.079,6.326 16.079,5.828 15.764,5.52 L13.252,3.381 C12.912,3.05 12.061,2.929 12.061,3.333 L12.061,5.094 L8.139,5.094 C7.58,5.094 7.129,5.518 7.129,6.04 C7.129,6.562 7.58,6.986 8.139,6.986 L12.061,6.986 L12.061,8.726 C12.061,9.004 12.879,9.033 13.252,8.774 L13.252,8.774 Z"></path>
            <path d="M13.031,11.852 C12.603,11.313 11.908,10.532 11.313,10.458 C10.951,10.413 10.535,10.713 10.125,10.996 C10.045,11.036 9.427,11.404 9.352,11.426 C8.956,11.539 8.111,11.572 7.6,11.106 C7.108,10.656 6.33,9.823 5.702,9.06 C5.102,8.274 4.473,7.329 4.151,6.749 C3.815,6.148 4.057,5.353 4.265,5.003 C4.303,4.94 4.763,4.467 4.866,4.357 L4.881,4.375 C5.262,4.055 5.661,3.73 5.706,3.378 C5.78,2.792 5.181,1.939 4.753,1.399 C4.325,0.858 3.662,-0.089 2.759,0.045 C2.419,0.095 2.126,0.214 1.837,0.385 L1.829,0.376 C1.823,0.38 1.795,0.402 1.781,0.413 C1.772,0.418 1.764,0.421 1.756,0.426 L1.759,0.43 C1.593,0.558 1.119,0.912 1.065,0.96 C0.479,1.481 -0.403,2.708 0.279,4.915 C0.785,6.555 1.864,8.481 3.334,10.429 L3.326,10.436 C3.398,10.53 3.472,10.615 3.547,10.706 C3.617,10.799 3.686,10.891 3.758,10.983 L3.768,10.976 C5.328,12.855 6.964,14.357 8.457,15.243 C10.467,16.435 11.896,15.898 12.556,15.471 C12.618,15.43 13.09,15.063 13.25,14.942 L13.254,14.946 C13.26,14.94 13.264,14.932 13.272,14.926 C13.284,14.917 13.31,14.897 13.315,14.893 L13.309,14.885 C13.551,14.651 13.745,14.401 13.879,14.086 C14.23,13.257 13.459,12.393 13.031,11.852 L13.031,11.852 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setCallReply(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M9.878,3.259 L7.366,5.398 C7.051,5.707 7.051,6.205 7.366,6.513 L9.878,8.652 C10.217,8.983 11,9.104 11,8.7 L11,6.939 L14.991,6.939 C15.549,6.939 16.002,6.515 16.002,5.993 C16.002,5.471 15.549,5.047 14.991,5.047 L11,5.047 L11,3.307 C11,3.029 10.252,3 9.878,3.259 L9.878,3.259 Z"></path>
            <path d="M13.031,11.852 C12.603,11.313 11.908,10.532 11.313,10.458 C10.951,10.413 10.535,10.713 10.125,10.996 C10.045,11.036 9.427,11.404 9.352,11.426 C8.956,11.539 8.111,11.572 7.6,11.106 C7.108,10.656 6.33,9.823 5.702,9.06 C5.102,8.274 4.473,7.329 4.151,6.749 C3.815,6.148 4.057,5.353 4.265,5.003 C4.303,4.94 4.763,4.467 4.866,4.357 L4.881,4.375 C5.262,4.055 5.661,3.73 5.706,3.378 C5.78,2.792 5.181,1.939 4.753,1.399 C4.325,0.858 3.662,-0.089 2.759,0.045 C2.419,0.095 2.126,0.214 1.837,0.385 L1.829,0.376 C1.823,0.38 1.795,0.402 1.781,0.413 C1.772,0.418 1.764,0.421 1.756,0.426 L1.759,0.43 C1.593,0.558 1.119,0.912 1.065,0.96 C0.479,1.481 -0.403,2.708 0.279,4.915 C0.785,6.555 1.864,8.481 3.334,10.429 L3.326,10.436 C3.398,10.53 3.472,10.615 3.547,10.706 C3.617,10.799 3.686,10.891 3.758,10.983 L3.768,10.976 C5.328,12.855 6.964,14.357 8.457,15.243 C10.467,16.435 11.896,15.898 12.556,15.471 C12.618,15.43 13.09,15.063 13.25,14.942 L13.254,14.946 C13.26,14.94 13.264,14.932 13.272,14.926 C13.284,14.917 13.31,14.897 13.315,14.893 L13.309,14.885 C13.551,14.651 13.745,14.401 13.879,14.086 C14.23,13.257 13.459,12.393 13.031,11.852 L13.031,11.852 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setCamera(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.995000, 2.980000)" fill="${bg}">
            <circle cx="7.958" cy="6.958" r="2.958"></circle>
            <path d="M14.666,2.042 L10.953,2.042 L9.937,0.031 L6,0.031 L5,2.042 L1.333,2.042 C0.597,2.042 0,2.639 0,3.375 L0,10.625 C0,11.361 0.597,11.959 1.333,11.959 L14.666,11.959 C15.402,11.959 16,11.361 16,10.625 L16,3.375 C16,2.639 15.402,2.042 14.666,2.042 L14.666,2.042 Z M6.953,0.969 L9.047,0.969 L9.047,2.031 L6.953,2.031 L6.953,0.969 L6.953,0.969 Z M8.002,11.033 C5.764,11.033 3.947,9.221 3.947,6.985 C3.947,4.749 5.763,2.937 8.002,2.937 C10.242,2.937 12.057,4.749 12.057,6.985 C12.057,9.221 10.242,11.033 8.002,11.033 L8.002,11.033 Z M14,4.031 L11.953,4.031 L11.953,2.969 L14,2.969 L14,4.031 L14,4.031 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setCandy(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(4.000000, 0.000000)" fill="${bg}">
            <path d="M4.484,0.037 C2.99,0.037 1.693,0.823 1.015,1.984 L7.951,1.984 C7.275,0.823 5.977,0.037 4.484,0.037 L4.484,0.037 Z"></path>
            <path d="M8.724,3.021 L0.278,3.021 C0.141,3.021 0.03,3.123 0.03,3.247 L0.03,5.745 C0.03,5.869 0.141,5.97 0.278,5.97 L8.724,5.97 C8.862,5.97 8.972,5.869 8.972,5.745 L8.972,3.247 C8.972,3.123 8.861,3.021 8.724,3.021 L8.724,3.021 Z"></path>
            <path d="M7.982,7.006 L1.009,7.006 C1.593,8.058 2.751,8.808 3.999,9.003 L3.999,15.953 L4.261,15.953 L4.261,15.984 L4.858,15.984 L4.858,15.953 L4.984,15.953 L4.984,9.021 C6.275,8.863 7.377,8.095 7.982,7.006 L7.982,7.006 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setCandyStick(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M11.75,0.468 C11.4,0.318 11.044,0.205 10.682,0.13 C10.293,0.048 9.897,0.00500000001 9.496,0.00900000001 C9.209,0.011 8.928,0.043 8.652,0.089 C8.166,0.172 7.705,0.321 7.28,0.527 C6.416,0.947 5.71,1.607 5.267,2.435 C5.216,2.528 0.146,13.977 0.146,13.977 C-0.172,14.697 0.16,15.537 0.884,15.849 C1.071,15.929 1.265,15.968 1.467,15.966 C2.037,15.962 2.554,15.624 2.782,15.106 L7.751,3.844 C7.974,3.341 8.474,2.997 9.097,2.892 C9.224,2.871 9.353,2.855 9.49,2.855 C9.857,2.851 10.238,2.929 10.593,3.082 C10.857,3.195 11.086,3.345 11.287,3.515 L11.922,4.34 C12.117,4.774 12.152,5.239 11.967,5.658 C11.846,5.933 11.821,6.226 11.873,6.501 C11.956,6.919 12.228,7.29 12.637,7.492 C12.662,7.505 12.682,7.52 12.707,7.531 C13.209,7.748 13.79,7.633 14.201,7.302 C14.369,7.165 14.513,6.994 14.605,6.789 C14.769,6.415 14.869,6.031 14.922,5.643 C15.203,3.576 13.955,1.414 11.75,0.468 L11.75,0.468 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setCar(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 4.000000)">
            <circle fill="${bg}" cx="12.49" cy="6.49" r="1.49"></circle>
            <circle fill="${bg}" cx="3.49" cy="6.49" r="1.49"></circle>
            <g>
              <path d="M6.514,1.607 C6.319,2.141 5.934,3 5.934,3 L9.026,3 L9.026,0.957 L7.544,0.957 C7.264,0.957 6.701,1.088 6.514,1.607 L6.514,1.607 Z" class=""></path>
              <path d="M12.446,0.967 L9.968,0.967 L9.968,3 L14.054,3 L13.57,1.553 C13.57,1.553 13.16,0.967 12.446,0.967 L12.446,0.967 Z" class=""></path>
              <g>
                <path d="M6.514,1.607 C6.319,2.141 5.934,3 5.934,3 L9.026,3 L9.026,0.957 L7.544,0.957 C7.264,0.957 6.701,1.088 6.514,1.607 L6.514,1.607 Z" class=""></path>
                <path d="M12.446,0.967 L9.968,0.967 L9.968,3 L14.054,3 L13.57,1.553 C13.57,1.553 13.16,0.967 12.446,0.967 L12.446,0.967 Z" class=""></path>
                <path d="M16,4.836 C16,4.239 15.922,3.699 15.247,3.312 L14.662,1.338 C14.662,0.947 13.747,2.27373675e-13 12.618,2.27373675e-13 L7.339,2.27373675e-13 C6.21,2.27373675e-13 5.296,1.088 5.296,1.338 L4.432,3 L3.651,3.107 C1.633,3.107 0.583,4.334 0.583,5.515 L0.024,6.984 L1.031,6.984 C0.995,6.817 0.975,6.644 0.975,6.466 C0.975,5.086 2.102,3.968 3.494,3.968 C4.885,3.968 6.012,5.086 6.012,6.466 C6.012,6.644 5.992,6.817 5.956,6.984 L10.03,6.984 C9.994,6.817 9.974,6.644 9.974,6.466 C9.974,5.086 11.101,3.968 12.493,3.968 C13.884,3.968 15.012,5.086 15.012,6.466 C15.012,6.644 14.992,6.817 14.956,6.984 L16,6.984 L16,4.836 L16,4.836 Z M9.025,3 L5.933,3 C5.933,3 6.318,2.142 6.513,1.607 C6.701,1.087 7.264,0.957 7.543,0.957 L9.025,0.957 L9.025,3 L9.025,3 Z M9.969,3 L9.969,0.967 L12.447,0.967 C13.161,0.967 13.571,1.553 13.571,1.553 L14.055,3 L9.969,3 L9.969,3 Z" fill="${bg}"></path>
              </g>
            </g>
          </g>
        </g>
      `;
      return this;
    }
  
    setCashierMachine(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(2.000000, 0.000000)" fill="${bg}">
            <path d="M11.641,4.012 L9.985,4.012 L9.985,2.957 L11.337,2.957 C11.683,2.957 11.962,2.611 11.962,2.186 L11.962,0.772 C11.962,0.345 11.683,0.000999999989 11.337,0.000999999989 L7.646,0.000999999989 C7.3,0.000999999989 7.022,0.346 7.022,0.772 L7.022,2.186 C7.022,2.612 7.3,2.957 7.646,2.957 L9.024,2.957 L9.024,4.012 L2.353,4.012 C1.983,4.012 1.683,4.312 1.683,4.68 L0.0133056865,13.3109996 L0.0133056865,15.9999996 L14.0114746,15.9999996 C14.0114746,15.9999996 14.0114751,13.6789996 14.0114751,13.3109996 L12.312,4.68 C12.312,4.312 12.012,4.012 11.641,4.012 Z M4.016,12.016 L2.985,12.016 L2.985,10.969 L4.016,10.969 L4.016,12.016 L4.016,12.016 Z M2.984,10.016 L2.984,8.969 L4.015,8.969 L4.015,10.016 L2.984,10.016 L2.984,10.016 Z M6.016,12.031 L4.985,12.031 L4.985,10.969 L6.016,10.969 L6.016,12.031 L6.016,12.031 Z M6.016,10 L4.969,10 L4.969,8.984 L6.016,8.984 L6.016,10 L6.016,10 Z M8.016,12.029 L6.969,12.029 L6.969,10.968 L8.016,10.968 L8.016,12.029 L8.016,12.029 Z M6.969,10 L6.969,8.969 L8.016,8.969 L8.016,10 L6.969,10 L6.969,10 Z M8.016,8 L2.985,8 L2.985,6 L8.016,6 L8.016,8 L8.016,8 Z M11,8 L8.982,8 L8.982,6.98 L11,6.98 L11,8 L11,8 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setCastle(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M16,5 L15,5 L15,6 L14,6 L14,5.015 L13,5 L13,9 L11,9 L11,4 C11.549,4 12,3.566 12,3.03 C12,3.03 8.557,0.042 8.008,0.042 L7.992,0.042 C7.444,0.042 4.001,3.03 4.001,3.03 C4.001,3.566 4.494,4 5.042,4 L5.042,9 L2.98,9 L2.98,6 C2.98,6 2.523,6.055 2.001,6.015 L2.001,7 L1.001,7 L1.001,6 L0.000999999931,6 L0.000999999931,14.951 C0.000999999931,15.507 0.49,15.958 1.043,15.958 L7,15.958 C6.999,15.916 7,13.062 7,13.062 C7,11.635 8.041,11.937 8.041,11.937 C8.041,11.937 9.083,11.635 9.083,13.062 C9.083,13.062 9.085,15.916 9.083,15.958 L15,15.958 C15.553,15.958 16,15.471 16,14.871 L16,5 L16,5 Z M1,10 L1,9 L2,9 L2,10 L1,10 L1,10 Z M3,13 L2,13 L2,12 L3,12 L3,13 L3,13 Z M5,13 L4,13 L4,12 L5,12 L5,13 L5,13 Z M9,7 L6.953,7 L6.953,4.935 L9,4.935 L9,7 L9,7 Z M12,13 L11,13 L11,12 L12,12 L12,13 L12,13 Z M14,13 L13,13 L13,12 L14,12 L14,13 L14,13 Z M15,10 L13.979,10 L13.979,9 L15,9 L15,10 L15,10 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setCaterpillar(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.000000, 2.000000)" fill="${bg}">
            <g transform="translate(5.000000, 8.000000)">
              <path d="M8.017,0.012 C6.923,0.012 6.034,0.895 6.034,1.982 C6.034,3.069 6.924,3.952 8.017,3.952 C9.11,3.952 9.998,3.069 9.998,1.982 C9.998,0.895 9.109,0.012 8.017,0.012 L8.017,0.012 Z"></path>
              <path d="M1.984,0.062 C0.894,0.062 0.005,0.927 0.005,1.996 C0.005,3.062 0.894,3.93 1.984,3.93 C3.078,3.93 3.964,3.063 3.964,1.996 C3.965,0.928 3.078,0.062 1.984,0.062 L1.984,0.062 Z"></path>
            </g>
            <path d="M3.276,4.496 C3.276,5.875 1.439,6.992 0,6.992 L0.67,2 C2.109,2 3.276,3.117 3.276,4.496 L3.276,4.496 Z"></path>
            <path d="M6.155,6.625 L1.509,4.82 L1.923,3.459 L6.568,5.264 L6.155,6.625 Z"></path>
            <path d="M15.225,5.9 C15.256,5.767 14.958,5.629 14.958,5.486 L14.958,1.889 C14.958,0.876 14.457,0.053 13.451,0.053 L9.16,0.053 C8.154,0.053 7.336,0.876 7.336,1.889 L6.664,5.486 L6.666,5.5 C5.831,5.74 5.295,6.301 5.295,7.346 C5.295,7.39 5.303,7.429 5.304,7.473 C5.785,7.151 6.364,6.963 6.985,6.963 C8.482,6.963 9.717,8.047 9.956,9.469 C9.983,9.588 10,9.696 10.008,9.781 C10.113,8.215 11.415,6.97 13.019,6.97 C14.246,6.97 15.299,7.701 15.775,8.746 C15.921,8.339 15.948,7.86 15.948,7.345 C15.946,6.68 15.662,6.217 15.225,5.9 L15.225,5.9 Z M11.053,5.062 L8.938,5.062 L8.938,1.355 C8.938,1.067 9.043,0.955 9.172,0.955 L10.817,0.955 C10.947,0.955 11.053,1.067 11.053,1.355 L11.053,5.062 L11.053,5.062 Z M14.018,4.059 L11.959,4.059 L11.959,0.938 L14.018,0.938 L14.018,4.059 L14.018,4.059 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setJustify(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 1.000000)" fill="${bg}">
            <path d="M16,0.938 C16,1.456 15.58,1.876 15.062,1.876 L0.98,1.876 C0.462,1.876 0.042,1.456 0.042,0.938 L0.042,0.938 C0.042,0.42 0.462,0 0.98,0 L15.062,0 C15.58,0 16,0.42 16,0.938 L16,0.938 L16,0.938 Z"></path>
            <path d="M16,3.938 C16,4.456 15.58,4.876 15.062,4.876 L0.98,4.876 C0.462,4.876 0.042,4.456 0.042,3.938 L0.042,3.938 C0.042,3.42 0.462,3 0.98,3 L15.062,3 C15.58,3 16,3.42 16,3.938 L16,3.938 L16,3.938 Z"></path>
            <path d="M16,6.938 C16,7.456 15.58,7.876 15.062,7.876 L0.98,7.876 C0.462,7.876 0.042,7.456 0.042,6.938 L0.042,6.938 C0.042,6.42 0.462,6 0.98,6 L15.062,6 C15.58,6 16,6.42 16,6.938 L16,6.938 L16,6.938 Z"></path>
            <path d="M16,9.938 C16,10.456 15.58,10.876 15.062,10.876 L0.98,10.876 C0.462,10.876 0.042,10.456 0.042,9.938 L0.042,9.938 C0.042,9.42 0.462,9 0.98,9 L15.062,9 C15.58,9 16,9.42 16,9.938 L16,9.938 L16,9.938 Z"></path>
            <path d="M13,12.938 C13,13.456 12.58,13.876 12.062,13.876 L3.98,13.876 C3.462,13.876 3.042,13.456 3.042,12.938 L3.042,12.938 C3.042,12.42 3.462,12 3.98,12 L12.062,12 C12.58,12 13,12.42 13,12.938 L13,12.938 L13,12.938 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setCup(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M11.969,1 L3.082,1 L3.082,2.031 L-0.0078124993,2.0310001 L-0.0078124993,6.8670001 C-0.0078124993,8.7360001 2.078,10.274 4.125,10.434 C4.797,11.154 5.979,11.677 7.031,11.9 L7.031,13.164 C6.025,13.473 4.22800003,14.1989902 4.12500003,14.9899902 L11.0290523,14.9899902 C10.9250523,14.1989902 8.945,13.472 7.937,13.164 L7.937,11.9 C8.993,11.677 10.228,11.154 10.901,10.434 C12.947,10.274 14.941,8.736 14.941,6.867 L14.941,2.031 L11.969,2.031 L11.969,1 Z M0.941000006,2.9473877 L3.01000001,2.9473877 L3.01,7.113 C3.01,7.935 3.222,8.717 3.595,9.421 C2.047,8.928 0.941,7.658 0.941,6.172 L0.941000006,2.9473877 Z M9.0451968,8.028 L7.50083389,7.177 L5.9548032,8.028 L6.25,6.228 L5,4.954 L6.72698466,4.691 L7.50083389,3.055 L8.27301534,4.691 L10,4.954 L8.75083389,6.228 L9.0451968,8.028 L9.0451968,8.028 Z M11.34,9.554 C11.715,8.818 11.93,8.004 11.93,7.143 L11.93,2.97424316 L14.004,2.97424316 L14.004,6.16 C14.004,7.713 12.893,9.039 11.34,9.554 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setGraphicColumn(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.000000, 1.000000)" fill="${bg}">
            <path d="M16,13.031 L0.984,13.031 L0.984,0.016 L0.027,0.016 L0,13.95 L0.027,13.95 L0.027,13.979 L16,13.95 L16,13.031 Z"></path>
            <path d="M4.958,7.021 L2.016,7.021 L2.016,11.985 L4.958,11.985 L4.958,7.021 L4.958,7.021 Z"></path>
            <path d="M9.969,5.047 L7.016,5.047 L7.016,11.969 L9.969,11.969 L9.969,5.047 L9.969,5.047 Z"></path>
            <path d="M14.953,3.031 L12,3.031 L12,11.978 L14.953,11.978 L14.953,3.031 L14.953,3.031 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setGraphic(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M16,14.051 L1.885,14.051 L1.885,0.084 L0.041,0.084 L0,15.875 L0.041,15.875 L0.041,15.916 L16,15.875 L16,14.051 Z"></path>
            <path d="M15.816,2 L12.089,2 C12.017,2 11.96,2.059 11.96,2.129 L13.487,3.662 L10.011,8.125 L7,6 L3.027,11.188 L3.089,12.938 L7.061,8 L10.01,10 L14.37,4.551 L15.813,6 C15.884,6 15.942,5.941 15.942,5.871 L15.942,2.129 C15.945,2.059 15.888,2 15.816,2 L15.816,2 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setGraphicPie(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M8.392,1.049 C8.043,0.998 7.83,1.016 7.467,1.016 C3.372,1.016 0.043,4.35 0.043,8.446 C0.043,12.542 3.372,15.877 7.467,15.877 C11.561,15.877 14.89,12.542 14.89,8.446 C14.89,8.1 14.934,7.848 14.888,7.517 L7.489,8.478 L8.392,1.049 L8.392,1.049 Z"></path>
            <path d="M10.375,0.047 L9.43,6.586 L16.043,5.658 C15.638,2.764 13.314,0.466 10.375,0.047 L10.375,0.047 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setMistletoe(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.000000, 3.000000)" fill="${bg}">
            <circle cx="7.428" cy="9.428" r="1.428"></circle>
            <ellipse cx="11.461" cy="8.493" rx="1.461" ry="1.493"></ellipse>
            <ellipse cx="8.477" cy="5.493" rx="1.477" ry="1.493"></ellipse>
            <path d="M7.079,2.363 C7.005,2.388 6.939,2.451 6.879,2.508 C6.64,2.734 6.343,2.877 6.025,2.951 C5.606,3.051 4.866,2.74 4.503,2.444 C4.005,3.65 2.351,3.891 1.622,2.895 C1.725,3.466 1.771,3.719 1.349,4.121 C0.937,4.512 0.51,4.741 0.01,4.936 C0.178,4.871 0.335,4.82 0.517,4.814 C1.243,4.786 1.999,5.225 2.425,5.816 C2.626,6.097 2.763,6.443 2.732,6.801 C2.727,6.863 2.67,7.011 2.724,7.045 C2.802,7.094 3.001,6.929 3.07,6.898 C3.332,6.781 3.627,6.737 3.909,6.757 C4.351,6.786 4.64,7.064 4.891,7.411 C5.04,7.615 5.244,8.683 5.679,8.261 C5.832,8.112 5.873,7.777 6,7.584 C6.148,7.357 6.374,7.218 6.527,7.015 C6.716,6.765 6.546,6.4 6.431,6.157 C6.348,5.979 6.319,5.792 6.305,5.601 C5.964,5.376 5.116,4.969 3.45,4.982 L3.448,4.982 C3.27,4.982 3.128,4.837 3.126,4.657 C3.124,4.477 3.267,4.328 3.445,4.327 C3.473,4.326 3.501,4.326 3.53,4.326 C4.954,4.326 5.855,4.627 6.374,4.891 C6.421,4.71 6.479,4.531 6.548,4.366 C6.644,4.134 6.823,4.008 7.017,3.878 C7.178,3.769 7.339,3.63 7.3,3.4 C7.239,3.052 7.094,2.725 7.079,2.363 L7.079,2.363 Z"></path><path d="M16.009,0.164 C15.481,0.336 14.989,0.437 14.406,0.412 C13.807,0.385 13.681,0.169 13.398,-0.313 C13.451,0.875 11.964,1.743 10.789,1.173 C10.685,1.62 10.29,2.314 9.89,2.506 C9.586,2.652 9.254,2.734 8.916,2.72 C8.832,2.716 8.739,2.711 8.664,2.741 C8.592,2.768 9.189,3.41 9.298,3.465 C9.625,3.627 9.969,3.652 10.194,3.945 C10.274,4.049 10.352,4.171 10.423,4.295 C10.861,3.684 11.667,2.707 12.906,1.77 C13.051,1.662 13.261,1.681 13.38,1.815 C13.497,1.949 13.476,2.145 13.332,2.254 C11.738,3.458 10.895,4.742 10.682,5.095 C10.708,5.227 10.749,5.353 10.857,5.466 C11.148,5.776 11.528,5.637 11.903,5.741 C12.133,5.804 12.354,5.902 12.556,6.023 C12.744,6.137 12.863,6.327 13.098,6.341 C13.408,6.359 13.637,6.22 13.752,5.956 C13.91,5.601 13.691,5.398 13.672,5.057 C13.651,4.645 13.705,4.258 14.043,3.956 C14.257,3.765 14.522,3.61 14.809,3.531 C14.884,3.51 15.151,3.506 15.181,3.421 C15.203,3.36 15.063,3.289 15.02,3.247 C14.763,3.004 14.65,2.665 14.632,2.331 C14.594,1.63 14.921,0.831 15.523,0.393 C15.673,0.284 15.832,0.222 16.009,0.164 L16.009,0.164 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setChristmassBall(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.000000, 1.000000)" fill="${bg}">
            <path d="M8.346,1.287 C7.309,1.004 6.241,0.969 5.231,1.166 L13.836,9.713 C14.031,8.717 13.999,7.665 13.721,6.641 C13.648,6.372 8.598,1.354 8.346,1.287 L8.346,1.287 Z"></path>
            <path d="M2.178,12.826 C4.31,14.944 7.393,15.486 9.889,14.428 L0.567,5.17 C-0.5,7.647 0.047,10.709 2.178,12.826 L2.178,12.826 Z"></path>
            <path d="M2.033,3.06 C1.762,3.329 1.53,3.62 1.32,3.921 L11.144,13.678 C11.447,13.47 11.742,13.24 12.011,12.972 C12.554,12.432 12.964,11.808 13.264,11.144 L3.874,1.816 C3.203,2.112 2.576,2.52 2.033,3.06 L2.033,3.06 Z M9.958,9.972 L11.043,9.972 L11.043,11.027 L9.958,11.027 L9.958,9.972 L9.958,9.972 Z M7.958,7.964 L9.043,7.964 L9.043,9.062 L7.958,9.062 L7.958,7.964 L7.958,7.964 Z M5.958,5.978 L7.043,5.978 L7.043,7.054 L5.958,7.054 L5.958,5.978 L5.958,5.978 Z M3.958,3.908 L5.043,3.908 L5.043,5.047 L3.958,5.047 L3.958,3.908 L3.958,3.908 Z"></path>
            <path d="M10.043,1.896 L13.785,5.672 L15.336,4.109 L11.592,0.332 L10.043,1.896 Z"></path>
            <path d="M14.127,-0.302 C13.279,-0.302 12.568,0.278 12.344,1.066 L12.942,1.659 C12.94,1.636 12.934,1.615 12.934,1.592 C12.933,0.922 13.469,0.38 14.127,0.381 C14.787,0.381 15.32,0.922 15.32,1.592 C15.32,2.26 14.787,2.802 14.127,2.802 C14.113,2.802 14.102,2.798 14.086,2.797 L14.682,3.39 C15.439,3.149 15.994,2.439 15.994,1.591 C15.994,0.547 15.156,-0.302 14.127,-0.302 L14.127,-0.302 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setChristmassEgg(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(2.000000, 0.000000)" fill="${bg}">
            <path d="M10.764,3.12 C9.707,1.23 7.989,0 6.045,0 C4.139,0 2.446,1.188 1.384,3.021 C2.852,3.602 4.483,3.929 6.201,3.929 C7.82,3.929 9.361,3.64 10.764,3.12 L10.764,3.12 Z"></path>
            <path d="M0.223,10.865 C0.818,14.28 3.198,16 6.045,16 C8.846,16 11.188,14.337 11.832,11.039 C10.143,11.845 8.076,12.428 6.051,12.428 C3.881,12.428 1.995,11.779 0.223,10.865 L0.223,10.865 Z"></path>
            <path d="M2.174,7.791 C2.897,7.791 3.592,7.526 4.08,7.064 L4.23,6.923 L4.38,7.064 C4.866,7.527 5.561,7.791 6.284,7.791 C6.989,7.791 7.647,7.55 8.139,7.113 L8.284,6.983 L8.43,7.113 C8.921,7.55 9.58,7.791 10.285,7.791 C10.896,7.791 11.48,7.599 11.947,7.258 C11.82,6.082 11.506,4.989 11.047,4.035 C9.559,4.613 7.922,4.934 6.202,4.934 C4.381,4.934 2.65,4.571 1.093,3.925 C0.643,4.829 0.329,5.864 0.178,6.978 L0.25,7.048 C0.74,7.521 1.441,7.791 2.174,7.791 L2.174,7.791 Z M10.242,4.814 L11.291,5.708 L10.242,6.602 L9.193,5.708 L10.242,4.814 L10.242,4.814 Z M6.057,5.379 L7.106,6.273 L6.057,7.167 L5.007,6.273 L6.057,5.379 L6.057,5.379 Z M1.857,4.812 L2.906,5.705 L1.857,6.599 L0.808,5.705 L1.857,4.812 L1.857,4.812 Z"></path>
            <path d="M11.982,8.234 C11.484,8.481 10.898,8.708 10.287,8.708 C9.537,8.708 8.836,8.428 8.285,8.072 C7.736,8.427 7.033,8.708 6.285,8.708 C5.519,8.708 4.783,8.409 4.23,8.035 C3.675,8.409 2.938,8.708 2.173,8.708 C1.409,8.708 0.679,8.411 0.128,8.039 C0.095,8.316 0.076,8.598 0.076,8.885 C0.076,9.252 0.108,9.596 0.158,9.928 C1.932,10.717 3.845,11.294 6.05,11.294 C8.114,11.294 10.213,10.773 11.908,10.074 C11.975,9.7 12.012,9.306 12.012,8.885 C12.014,8.664 12.002,8.449 11.982,8.234 L11.982,8.234 Z M3.945,10.3 C3.443,10.3 3.035,10.004 3.035,9.639 C3.035,9.276 3.443,8.979 3.945,8.979 C4.447,8.979 4.855,9.276 4.855,9.639 C4.855,10.004 4.447,10.3 3.945,10.3 L3.945,10.3 Z M8.211,10.32 C7.709,10.32 7.301,10.025 7.301,9.66 C7.301,9.296 7.709,9 8.211,9 C8.714,9 9.122,9.296 9.122,9.66 C9.122,10.025 8.714,10.32 8.211,10.32 L8.211,10.32 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setChristmassHat(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M14.33,0.691 C13.836,0.709 13.285,1.102 12.832,0.85 C10.65,-0.362 6.642,-0.307 5.103,1.813 C4.271,2.959 4.509,4.476 3.73,5.612 C2.669,7.161 0.967,7.938 1.031,10.205 C1.062,11.306 2.564,10.927 3.343,10.923 C4.56,10.916 6.097,10.912 7.314,10.91 C8.455,10.908 9.984,10.906 11.124,10.906 C14.043,10.906 12.63,9.579 12.281,7.838 C12.115,7.001 11.591,5.887 11.293,5.118 C10.927,4.18 9.644,2.078 11.115,1.793 C13.152,1.397 11.318,3.238 14.333,3.97 C15.213,4.183 15.971,3.231 15.971,2.323 C15.971,1.635 15.53,1.004 14.883,0.772 C14.697,0.703 14.513,0.685 14.33,0.691 L14.33,0.691 Z"></path>
            <path d="M13.925,14.669 C13.925,15.389 13.301,15.972 12.535,15.972 L1.422,15.972 C0.656,15.972 0.033,15.389 0.033,14.669 L0.033,13.366 C0.033,12.647 0.656,12.064 1.422,12.064 L12.535,12.064 C13.301,12.064 13.925,12.647 13.925,13.366 L13.925,14.669 L13.925,14.669 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setChristmassTree(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(2.000000, -0.005000)" fill="${bg}">
            <path d="M4.781,3.986 L6.002,3.05 L7.219,3.986 L6.754,2.47 L7.973,1.532 L6.467,1.532 L6.002,0.016 L5.535,1.532 L4.028,1.532 L5.248,2.47 L4.781,3.986 Z"></path>
            <path d="M8.984,11.984 L10.918,12 L8.016,7.969 L10,7.969 L5.985,3.985 L2.031,8.001 L4.062,8.001 L1.015,11.954 L3.031,11.954 L0.015,15.97 L11.992,15.953 L8.984,11.984 L8.984,11.984 Z M4.016,15.016 L2.969,15.016 L2.969,13.954 L4.016,13.954 L4.016,15.016 L4.016,15.016 Z M5.016,11.016 L3.969,11.016 L3.969,9.954 L5.016,9.954 L5.016,11.016 L5.016,11.016 Z M6.031,7.016 L4.969,7.016 L4.969,5.954 L6.031,5.954 L6.031,7.016 L6.031,7.016 Z M6.969,9.953 L8.016,9.953 L8.016,11.015 L6.969,11.015 L6.969,9.953 L6.969,9.953 Z M7.969,15.016 L7.969,13.954 L9.016,13.954 L9.016,15.016 L7.969,15.016 L7.969,15.016 Z"></path>
            <rect x="10" y="8" width="0.969" height="0.984"></rect>
            <rect x="11" y="12" width="0.969" height="0.984"></rect>
            <rect x="0" y="12" width="0.969" height="0.984"></rect>
            <rect x="1" y="8" width="0.969" height="0.984"></rect>
          </g>
        </g>
      `;
      return this;
    }
  
    setCircle(bg) {
      this.setViewBox(0, 0, 18, 18);
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <circle fill="${bg}" cx="9" cy="9" r="8"></circle>
        </g>
      `;
      return this;
    }
  
    setControlPad(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M8,0.032 C3.5810386,0.032 0,3.6152757 0,8.03149701 C0,12.4497303 3.58204451,16.032 8,16.032 C12.4179555,16.032 16,12.4487243 16,8.03149701 C16,3.6152757 12.4179555,0.032 8,0.032 L8,0.032 Z M5,9.85855566 C4.75699765,10.0471481 4.36387803,10.0471481 4.11993745,9.85855566 L2.18154808,8.34521619 C1.93948397,8.15478381 1.93948397,7.84659614 2.18154808,7.65708372 L4.11993745,6.14282429 C4.36387803,5.9523919 4.75699765,5.9523919 5,6.14282429 L5,9.85855566 L5,9.85855566 Z M6.14166616,4.11893033 L7.65578462,2.18226601 C7.84663229,1.93924466 8.15415934,1.93924466 8.34319803,2.18226601 L9.85550751,4.11893033 C10.0481642,4.36288998 10.0481642,4.75791696 9.85550751,5 L6.14257065,5 C5.95262747,4.75791696 5.95262747,4.36288998 6.14166616,4.11893033 L6.14166616,4.11893033 Z M9.85667752,11.8610116 L8.34436254,13.8000359 C8.15143722,14.0426547 7.84421967,14.0426547 7.65495171,13.8000359 L6.14263672,11.8610116 C5.95245443,11.6183928 5.95245443,11.2255815 6.14263672,10.982 L9.85667752,10.982 C10.0477742,11.2246187 10.0477742,11.6183928 9.85667752,11.8610116 L9.85667752,11.8610116 Z M11.8806281,9.85740655 C11.6383592,10.0475311 11.2441916,10.0475311 11,9.85740655 L11,6.14259345 C11.2441916,5.95246885 11.6383592,5.95246885 11.8806281,6.14259345 L13.8168563,7.65620674 C14.0610479,7.84725427 14.0610479,8.15551454 13.8168563,8.3447162 L11.8806281,9.85740655 L11.8806281,9.85740655 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setHelp(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M9,0 C4.582,0 1,3.581 1,8 C1,12.419 4.582,16 9,16 C13.418,16 17,12.419 17,8 C17,3.581 13.418,0 9,0 L9,0 Z M9,14 C8.44769231,14 8,13.5523077 8,13 C8,12.4469231 8.44769231,12 9,12 C9.55230769,12 10,12.4469231 10,13 C10,13.5523077 9.55230769,14 9,14 L9,14 Z M10.647,8.243 C10.174,8.608 9.913,8.809 9.913,9.39 L9.913,10.204 C9.913,10.663 9.507,11.038 9.006,11.038 C8.504,11.038 8.097,10.663 8.097,10.204 L8.097,9.39 C8.097,8.033 8.928,7.392 9.477,6.968 C9.951,6.602 10.211,6.402 10.211,5.822 C10.211,5.168 9.67,4.634 9.006,4.634 C8.341,4.634 7.801,5.167 7.801,5.822 C7.801,6.283 7.393,6.655 6.892,6.655 C6.392,6.655 5.983,6.283 5.983,5.822 C5.983,4.248 7.34,2.968 9.006,2.968 C10.671,2.968 12.027,4.247 12.027,5.822 C12.027,7.178 11.197,7.818 10.647,8.243 L10.647,8.243 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setStar(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M8,0.062 C3.581,0.062 0,3.621 0,8.009 C0,12.399 3.581,15.958 8,15.958 C12.418,15.958 16,12.398 16,8.009 C16,3.621 12.418,0.062 8,0.062 L8,0.062 Z M11.108,12.025 L8.021,9.902 L4.933,12.025 L6.112,8.59 L3.024,6.465 L6.841,6.465 L8.021,3.03 L9.201,6.465 L13.017,6.465 L9.93,8.59 L11.108,12.025 L11.108,12.025 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setTriangleDown(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M1,8.041 C1,12.4602492 4.58156028,16.041 9,16.041 C13.4184397,16.041 17,12.4602492 17,8.041 C17,3.62175082 13.4194529,0.041 9,0.041 C4.58156028,0.0420078105 1,3.62275863 1,8.041 L1,8.041 Z M12.8455856,6 C13.0514715,6.18539059 13.0514715,6.77198542 12.8455856,6.96022817 L9.37888717,11.860244 C9.17204814,12.0465853 8.83938997,12.0465853 8.63255094,11.860244 L5.15441439,6.96022817 C4.94852854,6.77293614 4.94852854,6.18634131 5.15441439,6 L12.8455856,6 L12.8455856,6 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setTriangleLeft(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M9,0 C4.5808656,0 1,3.582 1,8 C1,12.418 4.5808656,16 9,16 C13.4191344,16 17,12.418 17,8 C17,3.582 13.4201468,0 9,0 L9,0 Z M11,11.8457768 C10.8141669,12.0514077 10.2261871,12.0514077 10.0393707,11.8457768 L5.14084969,8.3787435 C4.9530501,8.17311256 4.9530501,7.83932094 5.14084969,7.63369 L10.0393707,4.15422321 C10.2252038,3.94859226 10.8131837,3.94859226 11,4.15422321 L11,11.8457768 L11,11.8457768 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setTriangleRight(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M9,16 C13.4191344,16 17,12.418 17,8 C17,3.582 13.4191344,0 9,0 C4.5808656,0 1,3.582 1,8 C1,12.418 4.5808656,16 9,16 L9,16 Z M7,4.15422321 C7.18603172,3.94859226 7.77465517,3.94859226 7.96068689,4.15422321 L12.8604762,7.6212565 C13.0465079,7.82688744 13.0465079,8.16067906 12.8604762,8.36631 L7.96068689,11.8457768 C7.77465517,12.0514077 7.18603172,12.0514077 7,11.8457768 L7,4.15422321 L7,4.15422321 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setCity(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M0,8 L0,16 L3,16 L3,8 L0,8 L0,8 Z M2,15 L0.979,15 L0.979,12.979 L2,12.979 L2,15 L2,15 Z M2.021,12 L0.98,12 L0.98,9.979 L2.021,9.979 L2.021,12 L2.021,12 Z"></path>
            <path d="M9,5 L9,3 L8,3 L8,0 L7,0 L7,3 L6,3 L6,5 L4,5 L4,16 L11,16 L11,5 L9,5 L9,5 Z M6,15 L5,15 L5,13 L6,13 L6,15 L6,15 Z M6,12.042 L5,12.042 L5,10 L6,10 L6,12.042 L6,12.042 Z M6,9.042 L5,9.042 L5,7 L6,7 L6,9.042 L6,9.042 Z M8,15 L7,15 L7,13 L8,13 L8,15 L8,15 Z M8,12.042 L7,12.042 L7,10 L8,10 L8,12.042 L8,12.042 Z M8,9.042 L7,9.042 L7,7 L8,7 L8,9.042 L8,9.042 Z M10,15 L9,15 L9,13 L10,13 L10,15 L10,15 Z M10,12.042 L9,12.042 L9,10 L10,10 L10,12.042 L10,12.042 Z M10,9.042 L9,9.042 L9,7 L10,7 L10,9.042 L10,9.042 Z"></path>
            <path d="M12,7 L12,16 L16,16 L16,11 L12,7 L12,7 Z M14.031,15.062 L13,15.062 L13,13.968 L14.031,13.968 L14.031,15.062 L14.031,15.062 Z M14.031,13.062 L13,13.062 L13,11.968 L14.031,11.968 L14.031,13.062 L14.031,13.062 Z M14.031,11.062 L13,11.062 L13,9.968 L14.031,9.968 L14.031,11.062 L14.031,11.062 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setClamp(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M6.297,1.938 L11.953,1.938 L11.953,0.042 L6.297,0.042 C5.01,0.042 4,1.048 4,2.335 L4,8.706 C4,9.993 5.01,10.979 6.297,10.979 L9,10.979 L9,14.068 L8.36,14.068 L8.36,14.883 C7.535,15.149 6.97,15.622 6.97,15.999 L11.952,15.999 C11.952,15.623 11.393,15.153 10.577,14.887 L10.577,14.068 L9.937,14.068 L9.937,10.979 L11.936,10.979 L11.936,9.04 L9.937,9.04 L9.937,6.948 C9.971,6.938 9.999,6.927 10.03,6.917 L10.936,6.917 L10.936,6.026 L8.04,6.026 L8.04,6.917 L8.893,6.917 C8.929,6.929 8.959,6.94 8.998,6.951 L8.998,9.04 L6.295,9.04 C6.111,9.04 5.961,8.89 5.961,8.706 L5.961,2.27 C5.963,2.087 6.113,1.938 6.297,1.938 L6.297,1.938 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setClapBoard(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M1.042,7.954 L15.958,4.431 L14.978,0.375 L0.063,3.898 L1.042,7.954 L1.042,7.954 Z M12.55,4.357 L11.102,2.045 L13.112,1.559 L14.561,3.871 L12.55,4.357 L12.55,4.357 Z M9.199,5.167 L7.75,2.855 L9.759,2.37 L11.209,4.682 L9.199,5.167 L9.199,5.167 Z M5.848,5.977 L4.4,3.665 L6.41,3.18 L7.859,5.492 L5.848,5.977 L5.848,5.977 Z M2.498,6.787 L1.049,4.475 L3.058,3.99 L4.507,6.302 L2.498,6.787 L2.498,6.787 Z"></path>
            <path d="M1.021,8.037 L16,8.037 L16,15.987 L1.021,15.987 L1.021,8.037 L1.021,8.037 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setClapBoardPlay(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.000000, 1.000000)" fill="${bg}">
            <path d="M0.979,7.954 L15.895,4.431 L14.915,0.375 L0,3.898 L0.979,7.954 L0.979,7.954 Z M12.487,4.357 L11.039,2.045 L13.049,1.559 L14.498,3.871 L12.487,4.357 L12.487,4.357 Z M9.137,5.167 L7.688,2.855 L9.697,2.37 L11.147,4.682 L9.137,5.167 L9.137,5.167 Z M5.785,5.977 L4.337,3.665 L6.347,3.18 L7.796,5.492 L5.785,5.977 L5.785,5.977 Z M2.436,6.787 L0.987,4.475 L2.996,3.99 L4.445,6.302 L2.436,6.787 L2.436,6.787 Z"></path>
            <path d="M1,8.037 L1,16.037 L16,16.037 L16,8.037 L1,8.037 L1,8.037 Z M7.904,14.167 L7.904,9.917 L11.136,12.086 L7.904,14.167 L7.904,14.167 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setClipboard(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(2.000000, 0.000000)" fill="${bg}">
            <g>
              <path d="M9.002,1.016 L9.002,1.953 L12.016,1.953 L12.016,15.042 L0.971,15.042 L0.971,1.953 L3.953,1.953 L3.953,1.047 L0,1.047 L0,16 L13,16 L13,1.016 L9.002,1.016 Z"></path>
              <path d="M7.95,1.5 C7.95,0.672 7.298,0 6.491,0 C5.683,0 5.031,0.672 5.031,1.5 C5.031,1.676 5.066,1.843 5.121,2 L5.064,2 L5.064,3 L7.937,3 L7.937,2 L7.861,2 C7.915,1.843 7.95,1.676 7.95,1.5 Z M5.969,2.016 L5.969,0.959 L7.016,0.959 L7.016,2.016 L5.969,2.016 Z"></path>
            </g>
            <path d="M9.031,3 L9.031,4.016 L3.969,4.016 L3.969,3 L2.029,3 L2.029,14 L10.98,14 L10.98,3 L9.031,3 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setClock(bg) {
      this.svg.innerHTML = `
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(1.000000, 1.000000)" fill="${bg}">
          <path d="M8.008,15.929 C3.623,15.929 0.058,12.366 0.058,7.987 C0.058,3.606 3.623,0.043 8.008,0.043 C12.392,0.043 15.958,3.606 15.958,7.987 C15.958,12.365 12.392,15.929 8.008,15.929 L8.008,15.929 L8.008,15.929 Z M7.973,1.863 C4.619,1.863 1.889,4.605 1.889,7.974 C1.889,11.343 4.619,14.085 7.973,14.085 C11.328,14.085 14.058,11.343 14.058,7.974 C14.058,4.605 11.328,1.863 7.973,1.863 L7.973,1.863 L7.973,1.863 Z"></path>
          <rect x="7" y="4" width="0.959" height="3.978"></rect>
          <rect x="7" y="8" width="3.938" height="0.979"></rect>
        </g>
      </g>
      `;
      return this;
    }
  
    setClover(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 1.000000)" fill="${bg}">
            <path d="M11.538,6.989136 C10.591,6.989136 8.034875,6.9891358 8.034875,6.9891358 L8.034875,3.4619998 C8.034875,1.5659998 9.655,0.00100000002 11.55,0.00100000002 C13.443,1.94906385e-11 14.979,1.539 14.979,3.436 C14.979,5.333 13.431,6.989136 11.538,6.989136 Z"></path>
            <path d="M6.94824211,7.01376955 C6.94824211,7.01376955 4.41200021,7.01376946 3.42900021,7.01376946 C1.53400021,7.01376946 -0.00100000005,5.333 -0.00100000005,3.435 C-0.00100000005,1.539 1.534,-0.000999999989 3.429,-0.000999999989 C5.323,1.04591891e-11 6.94824211,1.53800011 6.94824211,3.43500011 L6.94824211,7.01376955 Z"></path>
            <path d="M7.01989744,11.5570001 C7.01989744,13.4540001 5.277,14.993 3.409,14.993 C1.541,14.993 0.026,13.455 0.026,11.557 C0.026,9.659 1.516,8.00515126 3.384,8.00515126 C4.34,8.00515126 7.01989744,8.03015137 7.01989744,8.03015137 L7.01989744,11.5570001 Z"></path>
            <path d="M11.547,14.993 C9.66,14.993 8.03407726,13.445 8.03407726,11.547 C8.03407726,10.604 8.05407715,8.00158691 8.05407715,8.00158691 L11.5469999,8.00158691 C13.4329999,8.00158691 14.963,9.659 14.963,11.557 C14.963,13.454 13.433,14.993 11.547,14.993 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setCode(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.000000, 1.000000)" fill="${bg}">
            <path d="M11.74,10.993 C11.918,10.993 12.096,10.928 12.233,10.798 L15.712,7.482 C15.983,7.221 15.983,6.802 15.712,6.543 L12.233,3.225 C11.961,2.966 11.521,2.966 11.249,3.225 C10.978,3.486 10.978,3.906 11.249,4.163 L14.236,7.013 L11.249,9.861 C10.978,10.12 10.978,10.541 11.249,10.799 C11.385,10.928 11.563,10.993 11.74,10.993 L11.74,10.993 Z"></path>
            <path d="M4.301,10.883 C4.121,10.883 3.942,10.821 3.804,10.693 L0.287,7.425 C0.012,7.17 0.012,6.756 0.287,6.502 L3.804,3.234 C4.078,2.978 4.524,2.978 4.799,3.234 C5.072,3.49 5.072,3.903 4.799,4.158 L1.779,6.963 L4.799,9.767 C5.072,10.023 5.072,10.437 4.799,10.693 C4.661,10.82 4.48,10.883 4.301,10.883 L4.301,10.883 Z"></path>
            <path d="M6.685,13.889 C6.928,13.832 7.131,13.64 7.188,13.379 L9.934,0.885 C10.012,0.531 9.793,0.188 9.446,0.117 C9.096,0.047 8.753,0.277 8.676,0.631 L5.93,13.125 C5.852,13.477 6.072,13.82 6.418,13.891 C6.51,13.909 6.601,13.907 6.685,13.889 L6.685,13.889 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setColorPicker(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M15.308,4.434 C16.22,3.523 16.118,1.939 15.079,0.9 C14.038,-0.139 12.455,-0.242 11.545,0.67 L10.364,1.853 L14.128,5.617 L15.308,4.434 L15.308,4.434 Z"></path>
            <path d="M5.468,14.276 L11.615,8.128 L12.387,8.9 L13.971,7.314 L8.662,2.005 L7.077,3.589 L7.85,4.362 L1.702,10.508 L0.02,15.201 L0.774,15.955 L5.468,14.276 L5.468,14.276 Z M8.916,5.428 L10.551,7.064 L4.289,13.324 L1.695,14.284 L2.654,11.688 L8.916,5.428 L8.916,5.428 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setColumnDecrease(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M0,14.977 C0,15.514 0.275,15.951 0.615,15.951 L14.385,15.951 C14.725,15.951 15,15.514 15,14.977 L15,14.977 C15,14.438 14.725,14.001 14.385,14.001 L0.615,14.001 C0.275,14.001 0,14.438 0,14.977 L0,14.977 L0,14.977 Z"></path>
            <path d="M11.053,12.258 C11.053,12.635 11.418,12.944 11.869,12.944 L13.092,12.944 C13.543,12.944 13.907,12.635 13.907,12.258 L13.907,8.818 C13.907,8.44 13.543,8.132 13.092,8.132 L11.869,8.132 C11.418,8.132 11.053,8.44 11.053,8.818 L11.053,12.258 L11.053,12.258 Z"></path>
            <path d="M6.089,12.259 C6.089,12.637 6.454,12.944 6.904,12.944 L8.128,12.944 C8.578,12.944 8.943,12.637 8.943,12.259 L8.943,7.779 C8.943,7.401 8.578,7.094 8.128,7.094 L6.904,7.094 C6.454,7.094 6.089,7.401 6.089,7.779 L6.089,12.259 L6.089,12.259 Z"></path>
            <path d="M1.062,12.232 C1.062,12.607 1.429,12.912 1.886,12.912 L3.122,12.912 C3.578,12.912 3.946,12.607 3.946,12.232 L3.946,5.727 C3.946,5.352 3.578,5.047 3.122,5.047 L1.886,5.047 C1.429,5.047 1.062,5.352 1.062,5.727 L1.062,12.232 L1.062,12.232 Z"></path>
            <path d="M14.266,6.921 C14.645,6.92 14.957,6.624 14.971,6.248 C14.985,5.863 14.68,5.542 14.289,5.529 C9.285,5.352 4.521,3.424 1.215,0.236 C0.936,-0.032 0.49,-0.029 0.214,0.248 C-0.058,0.522 -0.053,0.965 0.226,1.233 C3.832,4.71 8.809,6.73 14.24,6.92 C14.249,6.921 14.258,6.921 14.266,6.921 L14.266,6.921 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setColumnIncrease(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M15,14.977 C15,15.514 14.725,15.951 14.385,15.951 L0.615,15.951 C0.275,15.951 0,15.514 0,14.977 L0,14.977 C0,14.438 0.275,14.001 0.615,14.001 L14.385,14.001 C14.725,14.001 15,14.438 15,14.977 L15,14.977 L15,14.977 Z"></path>
            <path d="M3.947,12.258 C3.947,12.635 3.581,12.944 3.131,12.944 L1.908,12.944 C1.457,12.944 1.093,12.635 1.093,12.258 L1.093,8.818 C1.093,8.44 1.457,8.132 1.908,8.132 L3.131,8.132 C3.581,8.132 3.947,8.44 3.947,8.818 L3.947,12.258 L3.947,12.258 Z"></path>
            <path d="M8.911,12.259 C8.911,12.637 8.546,12.944 8.096,12.944 L6.872,12.944 C6.422,12.944 6.057,12.637 6.057,12.259 L6.057,7.779 C6.057,7.401 6.422,7.094 6.872,7.094 L8.096,7.094 C8.546,7.094 8.911,7.401 8.911,7.779 L8.911,12.259 L8.911,12.259 Z"></path>
            <path d="M13.938,12.232 C13.938,12.607 13.571,12.912 13.114,12.912 L11.878,12.912 C11.422,12.912 11.054,12.607 11.054,12.232 L11.054,5.727 C11.054,5.352 11.422,5.047 11.878,5.047 L13.114,5.047 C13.571,5.047 13.938,5.352 13.938,5.727 L13.938,12.232 L13.938,12.232 Z"></path>
            <path d="M0.734,6.921 C0.355,6.92 0.043,6.624 0.029,6.248 C0.015,5.863 0.32,5.542 0.711,5.529 C5.715,5.352 10.479,3.424 13.785,0.236 C14.064,-0.032 14.51,-0.029 14.785,0.248 C15.058,0.522 15.053,0.965 14.774,1.233 C11.168,4.71 6.191,6.73 0.76,6.92 C0.752,6.921 0.742,6.921 0.734,6.921 L0.734,6.921 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setCompass(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M8.021,0.035 C3.6098133,0.035 0.0209999999,3.62340908 0.0209999999,8.03550286 C0.0209999999,12.4475966 3.60880549,16.035 8.021,16.035 C12.4321867,16.035 16.021,12.4475966 16.021,8.03550286 C16.021,3.62340908 12.4321867,0.035 8.021,0.035 L8.021,0.035 Z M8.00048729,14 C4.69081459,14 2,11.3084476 2,8.00048689 C2,4.69349996 4.69178917,2 8.00048729,2 C11.31016,2 14,4.69349996 14,8.00048689 C14,11.3084476 11.31016,14 8.00048729,14 L8.00048729,14 Z"></path>
            <path d="M5.042,6.021 L7.063,9.021 L11.98,11 L9.001,7.042 L5.042,6.021 L5.042,6.021 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setGraduationCap(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.000000, 1.000000)" fill="${bg}">
            <g transform="translate(0.000000, 7.000000)">
              <path d="M8,5.099 L4.125,2.64 L4.125,5.794 C4.125,5.794 4.125,6.342 4.48,6.427 C5.594,6.691 6.759,6.943 8,6.943 C9.27,6.943 10.485,6.752 11.604,6.4 C11.875,6.342 11.875,5.849 11.875,5.849 L11.875,2.64 L8,5.099 L8,5.099 Z"></path>
              <path d="M1.246,0.066 L0.766,0.066 C0.355,1.63 0.052,6.603 0.052,6.912 C0.052,6.94 0.059,6.969 0.065,6.996 L1.948,6.996 C1.954,6.969 1.959,6.94 1.959,6.912 C1.958,6.604 1.654,1.631 1.246,0.066 L1.246,0.066 Z"></path>
            </g>
            <path d="M8,0.062 L0,5.043 L1.33,6.042 L6.885,4.784 C6.977,4.255 7.413,3.843 7.969,3.843 C8.59,3.843 9.094,4.347 9.094,4.968 C9.094,5.589 8.59,6.093 7.969,6.093 C7.655,6.093 7.385,5.952 7.186,5.741 L2.374,6.83 L8,10.702 L16,5.043 L8,0.062 L8,0.062 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setConnect(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M14.969,11.082 L14.969,4.918 C16.092,4.687 16.938,3.691 16.938,2.5 C16.938,1.137 15.833,0.031 14.469,0.031 C13.105,0.031 12,1.136 12,2.5 C12,3.713 12.877,4.717 14.031,4.925 L14.031,11.075 C13.711,11.133 13.413,11.252 13.148,11.42 L5.533,3.848 C5.787,3.46 5.937,2.998 5.937,2.5 C5.937,1.137 4.832,0.031 3.468,0.031 C2.104,0.031 0.999,1.136 0.999,2.5 C0.999,3.703 1.86,4.702 2.999,4.922 L2.999,11.078 C1.86,11.298 0.999,12.297 0.999,13.5 C0.999,14.863 2.104,15.969 3.468,15.969 C4.832,15.969 5.937,14.864 5.937,13.5 C5.937,12.319 5.107,11.336 3.999,11.092 L3.999,4.908 C4.3,4.842 4.579,4.722 4.828,4.557 L12.427,12.113 C12.157,12.509 11.999,12.986 11.999,13.5 C11.999,14.863 13.104,15.969 14.468,15.969 C15.832,15.969 16.937,14.864 16.937,13.5 C16.938,12.309 16.092,11.313 14.969,11.082 L14.969,11.082 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setConnect2(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M14.5,13.043 C14.242,13.043 14.002,13.112 13.79,13.225 L10.531,9.954 C10.738,9.664 10.885,9.331 10.953,8.968 L12.086,8.968 C12.287,9.544 12.84,9.96 13.5,9.96 C14.329,9.96 15,9.308 15,8.502 C15,7.696 14.329,7.044 13.5,7.044 C12.826,7.044 12.264,7.479 12.074,8.073 L10.955,8.073 C10.893,7.725 10.764,7.401 10.573,7.119 L13.863,3.817 C14.057,3.906 14.271,3.96 14.5,3.96 C15.329,3.96 16,3.308 16,2.502 C16,1.696 15.329,1.044 14.5,1.044 C13.672,1.044 13.002,1.696 13.002,2.502 C13.002,2.763 13.077,3.005 13.201,3.217 L9.945,6.486 C9.652,6.279 9.316,6.133 8.949,6.067 L8.949,4.886 C9.556,4.7 10,4.155 10,3.502 C10,2.696 9.329,2.044 8.5,2.044 C7.672,2.044 7.002,2.696 7.002,3.502 C7.002,4.157 7.447,4.705 8.06,4.889 L8.06,6.066 C7.696,6.13 7.36,6.271 7.069,6.474 L3.809,3.203 C3.927,2.994 4,2.758 4,2.503 C4,1.697 3.329,1.045 2.5,1.045 C1.672,1.045 1.002,1.697 1.002,2.503 C1.002,3.309 1.672,3.961 2.5,3.961 C2.734,3.961 2.955,3.904 3.152,3.811 L6.437,7.108 C6.241,7.393 6.107,7.721 6.044,8.075 L4.926,8.075 C4.737,7.48 4.173,7.046 3.499,7.046 C2.671,7.046 2.001,7.698 2.001,8.504 C2.001,9.31 2.671,9.962 3.499,9.962 C4.159,9.962 4.714,9.546 4.913,8.97 L6.046,8.97 C6.114,9.339 6.267,9.677 6.48,9.97 L3.226,13.236 C3.01,13.119 2.765,13.047 2.499,13.047 C1.671,13.047 1.001,13.699 1.001,14.505 C1.001,15.311 1.671,15.963 2.499,15.963 C3.328,15.963 3.999,15.311 3.999,14.505 C3.999,14.279 3.942,14.068 3.849,13.879 L7.124,10.59 C7.401,10.774 7.718,10.899 8.059,10.959 L8.059,12.118 C7.447,12.302 7.001,12.849 7.001,13.505 C7.001,14.311 7.671,14.963 8.499,14.963 C9.328,14.963 9.999,14.311 9.999,13.505 C9.999,12.853 9.556,12.307 8.948,12.121 L8.948,10.958 C9.292,10.896 9.611,10.768 9.89,10.581 L13.159,13.862 C13.06,14.056 13.001,14.273 13.001,14.505 C13.001,15.311 13.671,15.963 14.499,15.963 C15.328,15.963 15.999,15.311 15.999,14.505 C15.999,13.699 15.329,13.043 14.5,13.043 L14.5,13.043 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setContrast(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M8.502,0.115 C4.406,0.115 1.084,3.435 1.084,7.534 C1.084,11.632 4.406,14.954 8.502,14.954 C12.601,14.954 15.923,11.632 15.923,7.534 C15.923,3.436 12.601,0.115 8.502,0.115 L8.502,0.115 Z M7.918,13.242 L7.918,1.827 C11.395,1.827 14.21,4.383 14.21,7.534 C14.21,10.685 11.395,13.242 7.918,13.242 L7.918,13.242 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setCpu(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <g transform="translate(2.000000, 2.000000)">
              <path d="M9.8297716,0.041 L2.2542284,0.041 C1.03239919,0.041 0.042,1.026 0.042,2.24 L0.042,9.801 C0.042,11.016 1.03239919,12 2.2542284,12 L9.8297716,12 C11.053622,12 12.042,11.016 12.042,9.801 L12.042,2.24 C12.042,1.026 11.053622,0.041 9.8297716,0.041 L9.8297716,0.041 Z M2,10.958 L1,10.958 L1,9.958 L2,9.958 L2,10.958 L2,10.958 Z M2,1.958 L1,1.958 L1,0.958 L2,0.958 L2,1.958 L2,1.958 Z M8.958,8.02823759 C8.958,8.5647517 8.52208163,9 7.98330612,9 L3.93367347,9 C3.39293878,9 2.958,8.5647517 2.958,8.02823759 L2.958,3.97273612 C2.958,3.4352483 3.39293878,3 3.93367347,3 L7.98330612,3 C8.52208163,3 8.958,3.4352483 8.958,3.97273612 L8.958,8.02823759 L8.958,8.02823759 Z M11,10.958 L10,10.958 L10,9.958 L11,9.958 L11,10.958 L11,10.958 Z M11,1.958 L10,1.958 L10,0.958 L11,0.958 L11,1.958 L11,1.958 Z"></path>
              <path d="M4.72,4 C4.323,4 4,4.322 4,4.722 L4,7.18 C4,7.578 4.322,7.902 4.72,7.902 L7.156,7.902 C7.552,7.902 7.876,7.579 7.876,7.18 L7.876,4.722 C7.876,4.323 7.553,4 7.156,4 L4.72,4 Z"></path>
            </g>
            <g>
              <rect x="4" y="0" width="0.871" height="1"></rect>
              <rect x="11" y="0" width="0.871" height="1"></rect>
              <rect x="7" y="0" width="0.871" height="1"></rect>
              <rect x="4" y="15" width="0.959" height="0.896"></rect>
              <rect x="11" y="15" width="0.876" height="0.896"></rect>
              <rect x="7" y="15" width="0.918" height="0.896"></rect>
              <rect x="0" y="11" width="1" height="0.975"></rect>
              <rect x="0" y="4" width="1" height="0.975"></rect>
              <rect x="0" y="7" width="1" height="0.975"></rect>
              <rect x="15" y="11" width="0.957" height="0.975"></rect>
              <rect x="15" y="7" width="0.957" height="0.975"></rect>
              <rect x="15" y="4" width="0.957" height="0.975"></rect>
            </g>
          </g>
        </g>
      `;
      return this;
    }
  
    setCubic(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 1.000000)" fill="${bg}">
            <path d="M16,12.316 C16,12.685 15.701,12.983 15.333,12.983 L8.666,14.983 C8.298,14.983 8,14.685 8,14.316 L8,7.65 C8,7.281 8.298,6.983 8.666,6.983 L15.333,4.983 C15.701,4.983 16,5.281 16,5.65 L16,12.316 L16,12.316 Z"></path>
            <path d="M6.979,14.316 C6.979,14.685 6.696,14.983 6.344,14.983 L0.633,12.983 C0.283,12.983 0,12.685 0,12.316 L0,5.65 C0,5.281 0.283,4.983 0.633,4.983 L6.344,6.983 C6.696,6.983 6.979,7.281 6.979,7.65 L6.979,14.316 L6.979,14.316 Z"></path>
            <path d="M16,3.014 C16,3.332 15.334,3.552 15.334,3.552 L8.666,5.741 C8.666,5.741 8.102,5.961 7.66,5.961 C7.219,5.961 6.683,5.729 6.683,5.729 L0.687,3.579 C0.687,3.579 -0.001,3.364 -0.001,3.015 C-0.001,2.666 0.687,2.429 0.687,2.429 L6.685,0.279 C6.685,0.279 7.306,0.047 7.679,0.047 C8.051,0.047 8.669,0.269 8.669,0.269 L15.331,2.457 C15.332,2.455 16,2.695 16,3.014 L16,3.014 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setCustomerSupport(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <g transform="translate(0.000000, 2.000000)">
              <path d="M8.005,10.094 C6.563,10.094 5.098,9.238 4.243,8.105 C0.141,8.105 0.017,13.965 0.017,13.965 L15.992,13.965 C15.992,13.965 16.314,8.079 11.701,8.079 C10.847,9.226 9.447,10.094 8.005,10.094 Z"></path>
              <path d="M11.441,3.069 C11.441,4.755 9.902,7.979 8.002,7.979 C6.105,7.979 4.565,4.754 4.565,3.069 C4.565,1.384 6.104,0.016 8.002,0.016 C9.902,0.017 11.441,1.385 11.441,3.069 L11.441,3.069 Z"></path>
            </g>
            <path d="M12.975,3.614 C12.975,3.298 12.535,3.043 11.989,3.041 L11.989,2.39 C11.989,2.293 12.026,0.022 8.014,0.022 C4.004,0.022 4.041,2.293 4.041,2.39 L4.041,3.064 C4.031,3.064 4.023,3.061 4.014,3.061 C3.471,3.061 3.034,3.312 3.034,3.623 L3.034,6.377 C3.034,6.686 3.472,6.938 4.014,6.938 C4.556,6.938 4.996,6.686 4.996,6.377 L4.996,3.623 C4.996,3.58 4.969,3.541 4.953,3.501 L4.953,2.75 C4.953,2.681 4.665,0.967 8.014,0.967 C11.364,0.967 11.016,2.681 11.016,2.75 L11.016,3.541 C11.01,3.566 10.991,3.588 10.991,3.614 L10.991,6.431 C10.991,6.748 11.434,7.005 11.983,7.005 C11.995,7.005 12.004,7.001 12.016,7.001 L12.016,8.03 L11.032,8.03 L11.032,9 L12.985,9 L12.975,3.614 L12.975,3.614 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setDataBase(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <ellipse cx="6.43" cy="2.421" rx="6.43" ry="2.421"></ellipse>
            <path d="M6.463,11.08 C2.947,11.08 0.016,10.1 0.016,9.444 L0.016,12.713 C0.016,13.901 2.903,14.859 6.463,14.859 C10.023,14.859 12.91,13.9 12.91,12.713 L12.91,9.444 C12.91,10.1 9.979,11.08 6.463,11.08 L6.463,11.08 Z"></path>
            <path d="M6.494,6.051 C2.978,6.051 0.047,5.049 0.047,4.377 L0.047,7.723 C0.047,8.937 2.934,9.919 6.494,9.919 C10.054,9.919 12.941,8.937 12.941,7.723 L12.941,4.377 C12.941,5.049 10.01,6.051 6.494,6.051 L6.494,6.051 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setPc(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M15.089,0.064 L0.913,0.064 C0.409,0.064 0,0.472 0,0.975 L0,11.05 C0,11.554 0.409,11.962 0.913,11.962 L15.089,11.962 C15.592,11.962 16,11.554 16,11.05 L16,0.975 C16,0.473 15.592,0.064 15.089,0.064 L15.089,0.064 Z M1.971,9.369 L1.971,2.575 C1.971,2.2 2.254,1.898 2.604,1.898 L13.398,1.898 C13.749,1.898 14.031,2.2 14.031,2.575 L14.031,9.369 C14.031,9.742 13.749,10.045 13.398,10.045 L2.604,10.045 C2.254,10.045 1.971,9.742 1.971,9.369 L1.971,9.369 Z"></path>
            <path d="M13.447,14.083 L8.911,14.083 L8.911,12.042 L7.052,12.042 L7.052,14.083 L2.583,14.083 C2.301,14.083 2.072,14.875 2.072,15.276 C2.072,15.679 2.301,15.899 2.583,15.899 L13.447,15.899 C13.729,15.899 13.958,15.679 13.958,15.276 C13.958,14.875 13.729,14.083 13.447,14.083 L13.447,14.083 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setDiskDeny(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g fill="${bg}">
            <path d="M13.477,10.979 C12.1,10.979 10.982,12.099 10.982,13.476 C10.982,14.854 12.1,15.973 13.477,15.973 C14.854,15.973 15.973,14.854 15.973,13.476 C15.973,12.099 14.854,10.979 13.477,10.979 L13.477,10.979 Z M11.834,13.656 C11.834,12.638 12.65,11.813 13.654,11.813 C13.942,11.813 14.221,11.882 14.474,12.011 L12.031,14.486 C11.902,14.229 11.834,13.944 11.834,13.656 L11.834,13.656 Z M13.328,15.16 C13.078,15.16 12.836,15.105 12.605,15.001 L14.982,12.591 C15.085,12.825 15.141,13.075 15.141,13.326 C15.142,14.336 14.328,15.16 13.328,15.16 L13.328,15.16 Z"></path>
            <path d="M7.987,6.049 C6.877,6.049 5.977,6.924 5.977,8.004 C5.977,9.083 6.877,9.958 7.987,9.958 C9.095,9.958 9.996,9.083 9.996,8.004 C9.996,6.924 9.096,6.049 7.987,6.049 L7.987,6.049 Z"></path>
            <path d="M9.879,13.499 C9.879,11.51 11.502,9.895 13.502,9.895 C14.277,9.895 14.991,10.142 15.58,10.554 C15.848,9.76 16,8.912 16,8.029 C16,3.633 12.421,0.069 8.008,0.069 C3.594,0.069 0.0160000001,3.633 0.0160000001,8.029 C0.0160000001,12.425 3.594,15.989 8.008,15.989 C8.895,15.989 9.746,15.836 10.543,15.569 C10.127,14.982 9.879,14.271 9.879,13.499 L9.879,13.499 Z M12.423,2.772 L13.269,3.617 L11.482,5.405 L10.637,4.56 L12.423,2.772 L12.423,2.772 Z M3.548,13.338 L2.703,12.493 L4.491,10.705 L5.336,11.551 L3.548,13.338 L3.548,13.338 Z M5,8.00046853 C5,6.34280806 6.34322762,5 7.99953132,5 C9.65583503,5 11,6.34374512 11,8.00046853 C11,9.65719194 9.65583503,11 7.99953132,11 C6.34322762,11 5,9.65719194 5,8.00046853 L5,8.00046853 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setDna(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M8.105,3.551 C8.121,3.528 8.138,3.504 8.155,3.481 C9.145,2.118 10,0.94 10,0.042 L9,0.042 C9,0.284 8.861,0.618 8.648,1.001 L6.334,1.001 C6.129,0.628 6,0.297 6,0.042 L5,0.042 C5,1.002 5.877,2.184 6.89,3.554 C6.891,3.556 6.892,3.557 6.892,3.557 C5.903,4.942 5,6.336 5,7.535 C5,8.734 5.908,10.099 6.896,11.45 C6.879,11.473 6.862,11.498 6.845,11.52 C5.855,12.882 5,14.061 5,14.959 L6,14.959 C6,14.712 6.144,14.37 6.363,13.98 L8.654,13.98 C8.865,14.362 9,14.701 9,14.959 L10,14.959 C10,13.998 9.124,12.817 8.11,11.447 L8.107,11.443 C9.097,10.059 10,8.665 10,7.467 C10,6.268 9.093,4.9 8.105,3.551 L8.105,3.551 Z M8.038,1.958 C7.865,2.209 7.682,2.465 7.495,2.724 C7.305,2.465 7.119,2.209 6.943,1.958 L8.038,1.958 L8.038,1.958 Z M8.531,6 L6.492,6 C6.765,5.481 7.122,4.936 7.502,4.392 C7.891,4.934 8.257,5.48 8.531,6 L8.531,6 Z M9,7.467 C9,7.633 8.965,7.814 8.916,8 L6.064,8 C6.025,7.838 6,7.68 6,7.533 C6,7.361 6.037,7.173 6.09,6.978 L8.929,6.978 C8.971,7.148 9,7.313 9,7.467 L9,7.467 Z M6.961,13.042 C7.135,12.791 7.318,12.533 7.506,12.275 C7.696,12.534 7.881,12.791 8.057,13.042 L6.961,13.042 L6.961,13.042 Z M6.457,8.979 L8.518,8.979 C8.245,9.503 7.883,10.057 7.497,10.608 C7.104,10.059 6.732,9.504 6.457,8.979 L6.457,8.979 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setDog(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.000000, 2.000000)" fill="${bg}">
            <path d="M3.348,4.007 C3.322,4.007 3.29,4.021 3.262,4.024 L3.293,3.994 L0.025,1.965 L0.011,2.562 L1.511,5.022 C1.234,5.363 1.038,5.728 1.038,6.01 L1.038,10.918 L3,10.918 L3,9.263 L5.98,7.929 L8.999,7.929 L9.666,10.918 L10.918,10.918 L10.918,5.328 L9.911,4.008 L3.348,4.008 L3.348,4.007 Z"></path>
            <path d="M13.752,1.623 L13.336,0.238 L10.681,2.86 L12.01,4.243 L14.82,4.847 L16.012,3.975 L13.752,1.623 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setDoor(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(4.000000, 0.000000)" fill="${bg}">
            <path d="M0.083,0.041 L7.042,2.708 L7.042,14.792 L0.333,13.083 L0.125,13.917 L7.928,15.917 L7.928,13.875 L9.896,13.874 L9.896,0.041 L0.083,0.041 Z"></path>
            <rect x="5" y="8" width="0.875" height="0.875"></rect>
          </g>
        </g>
      `;
      return this;
    }
  
    setDownstair(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M15.969,0.047 L13.073,0.047 L13.073,2.047 L11.062,2.047 L11.062,4.047 L9.052,4.047 L9.052,6.047 L7.043,6.047 L7.043,8.047 L5.031,8.047 L5.031,10.047 L3.021,10.047 L3.021,12.047 L0,12.047 L0,14.965 L2.896,14.965 L16,2.965 L15.969,0.047 Z"></path>
            <path d="M1.029,5.971 L5.953,5.972 L3.799,4.558 L6.98,1.377 L5.654,0.051 L2.474,3.232 L1.026,1.027 L1.029,5.971 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setDropBox(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g fill="${bg}">
            <path d="M7.98,1.41066667 L2.615,4.35866667 L0.042,2.69466667 L4.627,0.0146666667 L7.98,1.41066667 Z"></path>
            <path d="M15.979,2.69466667 L12,0 L9.016,1.388 L13.96,4.52666667 L15.979,2.69466667 Z"></path>
            <path d="M6.13,12.6666667 L2,10.184 L2,12.6386667 L7.953,16 L7.953,10.3253333 L6.13,12.6666667 Z"></path>
            <path d="M2.589,5.33333333 L1,7.72266667 L6.115,10.6826667 L7.953,8.232 L2.589,5.33333333 Z"></path>
            <path d="M9,10.0653333 L9,16 L14.979,12.8333333 L14.979,10.3613333 L10.845,12.408 L9,10.0653333 Z"></path>
            <path d="M9.021,8.22 L10.885,10.6706667 L15.979,7.944 L14.464,5.32 L9.021,8.22 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setDropWater(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M3,10.333 C3,13.463 5.427,16 8.418,16 C11.41,16 14,13.463 14,10.333 C14,7.204 8.418,0 8.418,0 C8.418,0 3,7.204 3,10.333 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setDrum(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <path d="M14.969,5.984 C14.969,6.493 14.661,6.906 14.282,6.906 L0.749,6.906 C0.37,6.906 0.062,6.493 0.062,5.984 L0.062,5.984 C0.062,5.476 0.37,5.062 0.749,5.062 L14.282,5.062 C14.661,5.062 14.969,5.477 14.969,5.984 L14.969,5.984 L14.969,5.984 Z"></path>
            <path d="M14.969,14.984 C14.969,15.493 14.661,15.906 14.282,15.906 L0.749,15.906 C0.37,15.906 0.062,15.493 0.062,14.984 L0.062,14.984 C0.062,14.476 0.37,14.062 0.749,14.062 L14.282,14.062 C14.661,14.062 14.969,14.477 14.969,14.984 L14.969,14.984 L14.969,14.984 Z"></path>
            <path d="M12.973,8.062 L1.996,8.062 C1.445,8.062 1,8.509 1,9.062 L1,11.906 C1,12.459 1.445,12.906 1.996,12.906 L12.973,12.906 C13.524,12.906 13.969,12.459 13.969,11.906 L13.969,9.062 C13.969,8.51 13.523,8.062 12.973,8.062 L12.973,8.062 Z"></path>
            <ellipse cx="5.439" cy="2.459" rx="1.439" ry="1.459"></ellipse>
            <ellipse cx="9.439" cy="2.459" rx="1.439" ry="1.459"></ellipse>
            <path d="M5.528,2.957 C5.463,2.957 5.396,2.943 5.334,2.916 L1.251,0.79 C1.033,0.694 0.942,0.457 1.052,0.262 C1.158,0.067 1.422,-0.015 1.639,0.082 L5.724,2.208 C5.942,2.304 6.031,2.541 5.924,2.736 C5.846,2.876 5.691,2.957 5.528,2.957 L5.528,2.957 Z"></path>
            <path d="M9.446,2.957 C9.511,2.957 9.578,2.943 9.64,2.916 L13.723,0.79 C13.941,0.694 14.031,0.457 13.922,0.262 C13.815,0.067 13.552,-0.015 13.335,0.082 L9.25,2.208 C9.032,2.304 8.943,2.541 9.05,2.736 C9.129,2.876 9.283,2.957 9.446,2.957 L9.446,2.957 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setEasal(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M12.957,11.062 L12.957,3.107 L9.98,3.107 L9.98,2.107 L8.985,2.107 L8.985,1 C8.985,0.447 8.54,0 7.989,0 C7.439,0 7.084,0.447 7.084,1 L7.084,2.107 L6.089,2.107 L6.089,3.107 L3.023,3.107 L3.023,11.062 L1.085,11.062 L1.085,11.937 L4.149,11.999 L3.164,14.708 C2.979,15.228 3.162,15.755 3.68,15.94 C4.199,16.126 4.637,15.79 4.823,15.27 L5.938,11.999 L7.085,11.999 L7.085,14.999 C7.085,15.552 7.44,15.999 7.99,15.999 C8.541,15.999 8.986,15.552 8.986,14.999 L8.986,11.999 L10.075,11.999 L11.139,15.333 C11.324,15.853 11.785,16.126 12.301,15.94 C12.82,15.754 13.003,15.249 12.819,14.727 L11.863,11.998 L14.896,11.936 L14.896,11.062 L12.957,11.062 Z M3.95,3.979 L6.023,3.979 L6.023,4.917 L9.917,4.917 L9.917,3.979 L12.049,3.979 L12.049,11.063 L3.95,11.063 L3.95,3.979 L3.95,3.979 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setElectron(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <ellipse cx="7.956" cy="7.964" rx="1.956" ry="1.964"></ellipse>
            <path d="M11.977,15.997 C9.557,15.997 6.516,14.453 4.039,11.967 C0.177,8.09 -1.113,3.311 1.103,1.086 C1.808,0.377 2.812,0.002 4.001,0.002 C6.422,0.002 9.463,1.547 11.94,4.034 C15.801,7.91 17.09,12.689 14.876,14.914 C14.171,15.623 13.168,15.997 11.977,15.997 L11.977,15.997 Z M4.002,1.342 C3.161,1.342 2.502,1.574 2.046,2.033 C0.416,3.669 1.761,7.785 4.982,11.019 C7.217,13.263 9.898,14.658 11.977,14.658 C12.819,14.658 13.477,14.426 13.934,13.967 C15.565,12.33 14.219,8.215 10.998,4.981 C8.763,2.736 6.082,1.342 4.002,1.342 L4.002,1.342 Z"></path>
            <path d="M4.002,15.997 C2.813,15.997 1.809,15.623 1.104,14.914 C-1.113,12.689 0.177,7.91 4.04,4.033 C6.517,1.547 9.558,0.002 11.978,0.002 C13.169,0.002 14.171,0.377 14.878,1.086 C17.092,3.309 15.802,8.089 11.942,11.967 C9.464,14.453 6.422,15.997 4.002,15.997 L4.002,15.997 Z M11.977,1.341 C9.898,1.341 7.217,2.736 4.982,4.98 C1.761,8.215 0.417,12.331 2.046,13.967 C2.502,14.425 3.161,14.658 4.002,14.658 C6.082,14.658 8.762,13.263 10.998,11.019 C14.219,7.784 15.562,3.667 13.933,2.032 C13.476,1.574 12.818,1.341 11.977,1.341 L11.977,1.341 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setEmoticon(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M7.981,0.084 C3.596,0.084 0.042,3.639 0.042,8.022 C0.042,12.406 3.596,15.96 7.981,15.96 C12.364,15.96 15.917,12.406 15.917,8.022 C15.917,3.639 12.363,0.084 7.981,0.084 L7.981,0.084 Z M10.998,4 C12.106,4 13,4.894 13,6 C13,7.103 12.106,8 10.998,8 C9.897,8 9,7.103 9,6 C9,4.894 9.897,4 10.998,4 L10.998,4 Z M5,4 C6.104,4 7,4.896 7,6 C7,7.104 6.104,8 5,8 C3.896,8 3,7.104 3,6 C3,4.895 3.896,4 5,4 L5,4 Z M8,14 C4.987,14 3,12.101 3,10 L13,10 C13,12.101 11.012,14 8,14 L8,14 Z" fill="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setErase(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}" >
            <path d="M8.932,13.014 L2.958,7.039 L9.84,0.158 C10.162,-0.167 10.696,-0.156 11.031,0.18 L15.793,4.939 C16.127,5.275 16.138,5.808 15.814,6.13 L8.932,13.014 L8.932,13.014 Z"></path>
            <path d="M7.963,14.11 C6.381,15.693 2.529,14.41 0.861,12.742 C-0.805,11.075 0.341,9.655 1.924,8.072 L7.963,14.11 L7.963,14.11 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setText(bg) {
      this.setViewBox(0,0,1000,1000)
      this.svg.innerHTML = `
        <g>
          <path d="M10,892h980v98H10V892z" fill="${bg}"/>
          <path d="M219.8,114h179.1v447.2c0,71.3-29.6,102.2-115.5,102.2h-19.3v98h466.1v-98h-18.3c-90.3,0-110.7-29.9-110.7-102.2V114h173.3c61.6,0,82.9,40.3,82.9,91.6h64.5V10H78.2v195.6h64.5C142.8,146.1,162.1,114,219.8,114z" fill="${bg}"/>
        </g>
      `;
      return this;
    }
  
    setMessageSent(bg) {
      this.svg.innerHTML = `
        <g>  
          <path d="M 0.9375 0.94726562 L 2.8203125 7 L 15 7 L 0.9375 0.94726562 z M 2.8203125 8 L 0.9375 14.052734 L 15 8 L 2.8203125 8 z" fill="${bg}"/>
        </g>
      `;
      return this;
    }
  
    setImage(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1">
          <g transform="translate(0.000000, 2.000000)" fill="${bg}">
            <path d="M13.438,11.944 L2.557,11.944 C1.163,11.944 0.029,10.781 0.029,9.353 L0.029,2.603 C0.029,1.173 1.164,0.012 2.557,0.012 L13.438,0.012 C14.831,0.012 15.965,1.173 15.965,2.603 L15.965,9.353 C15.965,10.781 14.83,11.944 13.438,11.944 L13.438,11.944 Z M2.237,0.979 C1.537,0.979 0.965,1.593 0.965,2.35 L0.965,9.668 C0.965,10.425 1.537,11.039 2.237,11.039 L13.754,11.039 C14.456,11.039 15.027,10.425 15.027,9.668 L15.027,2.35 C15.027,1.593 14.456,0.979 13.754,0.979 L2.237,0.979 L2.237,0.979 Z"></path>
            <ellipse cx="5.471" cy="3.461" rx="1.471" ry="1.461"></ellipse>
            <path d="M11.234,3.037 L13.994,9.988 L2.021,9.988 L5.497,5.98 L8.614,6.924 L11.234,3.037 Z"></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setCircle2(bg) {
      this.svg.setAttribute('hasStroke',true);
      this.setViewBox(0,0,19,16);
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <circle stroke="${bg}" cx="9" cy="9" r="8"></circle>
        </g>
      `;
      return this;
    }
  
    setSquare(bg) {
      this.svg.setAttribute('hasStroke',true);
      this.svg.innerHTML = `
        <g stroke-width="1" fill="none" fill-rule="evenood">
          <rect x ="1" y="0" width="15" height="16" stroke = "${bg}"></rect>
        </g>
      `;
      return this;
    }
  
    setFigure(bg) {
      this.setViewBox(0,0,24,24);
      this.svg.innerHTML = `
      <g stroke-width="1" fill="none" fill-rule="evenood">
        <path d="M8.5,3A5.5,5.5 0 0,1 14,8.5C14,9.83 13.53,11.05 12.74,12H21V21H12V12.74C11.05,13.53 9.83,14 8.5,14A5.5,5.5 0 0,1 3,8.5A5.5,5.5 0 0,1 8.5,3Z" fill = "${bg}"/>
      </g>
      `;
      return this;
    }
  
    setEllipse(bg) {
      this.setViewBox(0,0,24,24);
      this.svg.innerHTML = `
        <g stroke-width="1" fill="none" fill-rule="evenood">
          <path d="M12,6C16.41,6 20,8.69 20,12C20,15.31 16.41,18 12,18C7.59,18 4,15.31 4,12C4,8.69 7.59,6 12,6M12,4C6.5,4 2,7.58 2,12C2,16.42 6.5,20 12,20C17.5,20 22,16.42 22,12C22,7.58 17.5,4 12,4Z" fill = "${bg}"/>
        </g>
      `;
      return this;
    }
  
    setTriangle(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M17.027,0 9.027,0 C4.60902928,0 1.027,3.5808656 1.027,8 C1.027,12.4191344 4.60902928,16 9.027,8 Z M5.15423141,10 C4.94858953,9.81414406 4.94858953,9.22609194 5.15423141,9.03925264 L8.62117967,4.14012948 C8.827787,3.95329017 9.16183436,3.95329017 9.36651079,4.14012948 L12.8450445,9.03925264 C13.0516518,9.22510858 13.0516518,9.8131607 12.8450445,10 L5.15423141,10 L5.15423141,10 Z" stroke="${bg}"></path>
        </g>
      `;
      return this;
    }
  
    setMic(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(2.000000, 1.000000)" fill="${bg}">
            <path d="M11.984,6.031 L11.944,4.024 L11.008,4.024 L11.048,8.653 C11.048,10.581 9.06,12.062 6.519,12.062 C3.978,12.062 1.984,10.581 1.984,8.653 L1.984,4.031 L1.01,4.031 L1.01,6.016 L0.015,6.016 L0.015,6.938 L1.01,6.938 L1.01,9.049 C1.01,10.747 2.751,12.299 4.999,12.799 L4.999,15 L7.978,15 L7.978,12.812 C10.253,12.327 11.983,10.764 11.983,9.05 L11.983,6.953 L12.983,6.953 L12.983,6.031 L11.984,6.031 L11.984,6.031 Z"></path>
            <path d="M6.495,9.953 C8.409,9.953 9.963,9.084 9.963,8.013 L9.963,6.016 L3.025,6.016 L3.025,8.013 C3.025,9.084 4.579,9.953 6.495,9.953 L6.495,9.953 Z" ></path>
            <path d="M9.979,2.428 C9.979,1.086 8.421,0 6.5,0 C4.579,0 3.021,1.086 3.021,2.428 L3.021,4.99 L9.978,4.99 L9.978,2.428 L9.979,2.428 Z" ></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setSound(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M3.953,9.912 L3.953,5.01 L2.128,5.01 C0.845,5.01 0.013,6.094 0.013,7.47 L0.013,8.494 C0.013,9.953 0.782,10.953 2.128,10.953 L2.514,10.953 L3.953,9.912 Z" ></path>
          <path d="M13.987,14.868 C13.987,15.494 13.308,16 12.471,16 L5.957,11.473 C5.118,11.473 4.044,10.965 4.044,10.34 L4.044,5.682 C4.044,5.058 5.118,4.55 5.957,4.55 L12.471,0.022 C13.308,0.022 13.987,0.53 13.987,1.155 L13.987,14.868 L13.987,14.868 Z" fill="${bg}" ></path>
        </g>
      `;
      return this;
    }
  
    setSoundMute(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 0.000000)" fill="${bg}">
            <rect transform="translate(8.823150, 8.300450) rotate(-38.512169) translate(-8.823150, -8.300450) " x="-0.177126926" y="7.80043462" width="17.8925505" height="1.40204314" ></rect>
            <path d="M3.953,9.912 L3.953,5.01 L2.128,5.01 C0.845,5.01 0.013,6.094 0.013,7.47 L0.013,8.494 C0.013,9.953 0.782,10.953 2.128,10.953 L2.514,10.953 L3.953,9.912 Z" ></path>
            <path d="M6.877,12.659 L11.936,15.972 C12.522,15.972 12.996,15.572 12.996,15.077 L12.996,7.919 L6.877,12.659 L6.877,12.659 Z" ></path>
            <path d="M12.987,0.971 C12.987,0.464 12.488,0.051 11.872,0.051 L6.114,3.73 C5.499,3.73 5,4.142 5,4.65 L5,8.839 L12.987,2.596 L12.987,0.971 L12.987,0.971 Z" ></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setMessageDissabled(bg) {
      this.setViewBox(0,0,24,24);
      this.svg.innerHTML = `
      <path d="M7.2 4L5.2 2H20C21.11 2 22 2.9 22 4V16C22 16.76 21.57 17.41 20.95 17.75L19.2 16H20V4H7.2M22.11 21.46L20.84 22.73L16.11 18H13.9L10.2 21.71C10 21.9 9.75 22 9.5 22H9C8.45 22 8 21.55 8 21V18H4C2.9 18 2 17.11 2 16V4C2 3.97 2 3.93 2 3.9L1.11 3L2.39 1.73L22.11 21.46M14.11 16L4 5.89V16H10V19.08L13.08 16H14.11Z" fill = "${bg}" /></svg>
      `;
      return this;
    }
  
    setHouse(bg) {
      this.svg.innerHTML = `
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 1.000000)" fill="${bg}">
            <path d="M15.794,7.77 L11.984,3.864 L11.9839997,1.01706251 L11.0159997,1.03906251 L11.016,2.767 L8.502,0.245 C8.224,-0.031 7.776,-0.031 7.499,0.245 L0.206,7.771 C-0.069,8.048 -0.068,8.498 0.206,8.773 C0.482,9.049 0.933,9.049 1.209,8.772 L8,1.982 L14.793,8.772 C14.931,8.91 15.111,8.98 15.293,8.98 C15.474,8.98 15.654,8.912 15.794,8.773 C16.068,8.496 16.068,8.045 15.794,7.77 L15.794,7.77 Z" ></path>
            <path d="M3.043,8.532 L3.043,14.222 C3.043,14.616 3.26102394,15.0078125 3.61002394,15.0078125 L5.88702394,15.0078125 L5.95099996,11.0147705 L10.0249632,11.0147705 L10.0230128,15.0078125 L12.3260496,15.0078125 C12.6750496,15.0078125 12.958,14.617 12.958,14.222 L12.958,8.531 L8,3.625 L3.043,8.532 L3.043,8.532 Z" ></path>
          </g>
        </g>
      `;
      return this;
    }
  
    setFacebook(bg) {
      this.setViewBox(0,0,455.73, 455.73)
      this.svg.innerHTML = `
        <path style="fill:${bg};" d="M0,0v455.73h242.704V279.691h-59.33v-71.864h59.33v-60.353c0-43.893,35.582-79.475,79.475-79.475 h62.025v64.622h-44.382c-13.947,0-25.254,11.307-25.254,25.254v49.953h68.521l-9.47,71.864h-59.051V455.73H455.73V0H0z"/>
      `;
      return this;
    }
  
    setInstagram(bg) {
      this.setViewBox(0,0,551.034, 551.034);
      this.svg.innerHTML = `
      <g>
        <path style="fill:${bg}" d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156
          C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156
          c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722
          c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"/>

        <path style="fill:${bg}" d="M275.517,133C196.933,133,133,196.933,133,275.516s63.933,142.517,142.517,142.517
          S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6c-48.095,0-87.083-38.988-87.083-87.083
          s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083C362.6,323.611,323.611,362.6,275.517,362.6z"/>
        
        <circle style="fill:${bg}" cx="418.31" cy="134.07" r="34.15"/>
      </g>
      `;
      return this;
    }
  
    setGMail(bg) {
      this.setViewBox(0,0,512,512);
      this.svg.innerHTML = `
        <g  fill = "${bg}" transform="matrix(18.510943,0,0,18.510943,0,-0.11106566)">
          <path d="M3.3,23h3.9v-9.4L1.7,9.4v11.9C1.7,22.2,2.4,23,3.3,23z"/>
          <path  d="M20.5,23h3.9c0.9,0,1.7-0.7,1.7-1.7V9.4l-5.5,4.1V23z"/>
          <path  d="M20.5,6.4v7.2L26,9.4V7.2c0-1.4-1.1-2.5-2.5-2.5c-0.5,0-1.1,0.2-1.5,0.5L20.5,6.4z"/>
          <path  d="M7.2,13.6V6.4l6.6,5l6.6-5v7.2l-6.6,5L7.2,13.6z"/>
          <path  d="M1.7,7.2v2.2l5.5,4.1V6.4L5.7,5.2C4.6,4.4,3,4.6,2.2,5.7C1.8,6.1,1.7,6.7,1.7,7.2z"/>
        </g>
      `;
      return this;
    }
  
    setTwitter(bg) {
      this.setViewBox(0,0,512,512);
      this.svg.innerHTML = `
        <path style="fill:${bg};" d="M500.398,94.784c-8.043,3.567-16.313,6.578-24.763,9.023c10.004-11.314,17.631-24.626,22.287-39.193
          c1.044-3.265-0.038-6.839-2.722-8.975c-2.681-2.137-6.405-2.393-9.356-0.644c-17.945,10.643-37.305,18.292-57.605,22.764
          c-20.449-19.981-48.222-31.353-76.934-31.353c-60.606,0-109.913,49.306-109.913,109.91c0,4.773,0.302,9.52,0.9,14.201
          c-75.206-6.603-145.124-43.568-193.136-102.463c-1.711-2.099-4.347-3.231-7.046-3.014c-2.7,0.211-5.127,1.734-6.491,4.075
          c-9.738,16.709-14.886,35.82-14.886,55.265c0,26.484,9.455,51.611,26.158,71.246c-5.079-1.759-10.007-3.957-14.711-6.568
          c-2.525-1.406-5.607-1.384-8.116,0.054c-2.51,1.439-4.084,4.084-4.151,6.976c-0.012,0.487-0.012,0.974-0.012,1.468
          c0,39.531,21.276,75.122,53.805,94.52c-2.795-0.279-5.587-0.684-8.362-1.214c-2.861-0.547-5.802,0.456-7.731,2.638
          c-1.932,2.18-2.572,5.219-1.681,7.994c12.04,37.591,43.039,65.24,80.514,73.67c-31.082,19.468-66.626,29.665-103.939,29.665
          c-7.786,0-15.616-0.457-23.279-1.364c-3.807-0.453-7.447,1.795-8.744,5.416c-1.297,3.622,0.078,7.66,3.316,9.736
          c47.935,30.735,103.361,46.98,160.284,46.98c111.903,0,181.907-52.769,220.926-97.037c48.657-55.199,76.562-128.261,76.562-200.451
          c0-3.016-0.046-6.061-0.139-9.097c19.197-14.463,35.724-31.967,49.173-52.085c2.043-3.055,1.822-7.094-0.545-9.906
          C507.7,94.204,503.76,93.294,500.398,94.784z"/>
      `;
      return this;
    }
  
    setYouTube(bg) {
      this.setViewBox(0,0,24,24);
      this.svg.innerHTML = `
      <path fill="${bg}" d="m23.469 5.929.03.196c-.29-1.029-1.073-1.823-2.068-2.112l-.021-.005c-1.871-.508-9.4-.508-9.4-.508s-7.51-.01-9.4.508c-1.014.294-1.798 1.088-2.083 2.096l-.005.021c-.699 3.651-.704 8.038.031 11.947l-.031-.198c.29 1.029 1.073 1.823 2.068 2.112l.021.005c1.869.509 9.4.509 9.4.509s7.509 0 9.4-.509c1.015-.294 1.799-1.088 2.084-2.096l.005-.021c.318-1.698.5-3.652.5-5.648 0-.073 0-.147-.001-.221.001-.068.001-.149.001-.23 0-1.997-.182-3.951-.531-5.846zm-13.861 9.722v-7.293l6.266 3.652z"/>
      `;
      return this;
    }
  
    setNewspaper(bg) {
      this.setViewBox(0,0,25,25);
      this.svg.innerHTML = `
        <g fill="${bg}">
          <path d="M22,0H3C1.35,0,0,1.35,0,3v19c0,1.65,1.35,3,3,3h19c1.65,0,3-1.35,3-3V3C25,1.35,23.65,0,22,0z M13.042,2.281l0.399,2.182
            c0.119,0.629,0.229,1.313,0.313,1.848h0.017c0.086-0.575,0.211-1.21,0.345-1.862l0.446-2.167h1.272l0.425,2.229
            c0.118,0.622,0.204,1.188,0.282,1.774h0.017c0.078-0.588,0.195-1.208,0.307-1.837l0.431-2.167h1.218l-1.367,5.292h-1.295
            l-0.447-2.277c-0.103-0.533-0.188-1.027-0.252-1.631h-0.016c-0.094,0.596-0.18,1.098-0.306,1.631l-0.502,2.277h-1.312
            l-1.256-5.292H13.042z M7.914,2.281h3.266v0.981H9.115v1.1h1.948v0.974H9.115v1.255h2.175v0.982H7.915L7.914,2.281L7.914,2.281z
            M2.493,2.281H3.89L4.989,4.22c0.314,0.557,0.628,1.218,0.864,1.814h0.023C5.797,5.335,5.774,4.621,5.774,3.827V2.28h1.099v5.292
            H5.617L4.487,5.53c-0.314-0.563-0.66-1.247-0.918-1.866L3.545,3.671c0.032,0.697,0.048,1.443,0.048,2.308v1.594H2.494L2.493,2.281
            L2.493,2.281z M22.5,21.5c0,0.55-0.45,1-1,1h-18c-0.55,0-1-0.45-1-1v-12h20V21.5z M20.372,7.651c-0.604,0-1.201-0.157-1.5-0.321
            l0.243-0.99c0.322,0.167,0.816,0.329,1.328,0.329c0.548,0,0.84-0.227,0.84-0.571c0-0.329-0.251-0.52-0.887-0.747
            c-0.879-0.306-1.453-0.792-1.453-1.561c0-0.904,0.754-1.595,2.002-1.595c0.596,0,1.035,0.127,1.351,0.268l-0.267,0.964
            c-0.213-0.101-0.59-0.249-1.109-0.249c-0.518,0-0.768,0.235-0.768,0.51c0,0.338,0.298,0.485,0.98,0.746
            c0.934,0.344,1.374,0.83,1.374,1.578C22.507,6.897,21.824,7.651,20.372,7.651z"/>
          <path d="M3.879,11.727h7.554c0.275,0,0.5-0.188,0.5-0.416c0-0.229-0.225-0.417-0.5-0.417H3.879c-0.275,0-0.5,0.188-0.5,0.417
            C3.379,11.539,3.604,11.727,3.879,11.727z"/>
          <path d="M3.879,13.604h7.554c0.275,0,0.5-0.188,0.5-0.416c0-0.229-0.225-0.418-0.5-0.418H3.879c-0.275,0-0.5,0.188-0.5,0.418
            C3.379,13.415,3.604,13.604,3.879,13.604z"/>
          <path d="M3.879,15.479h7.554c0.275,0,0.5-0.188,0.5-0.416s-0.225-0.416-0.5-0.416H3.879c-0.275,0-0.5,0.188-0.5,0.416
            S3.604,15.479,3.879,15.479z"/>
          <path d="M3.879,17.354h7.554c0.275,0,0.5-0.188,0.5-0.416s-0.225-0.416-0.5-0.416H3.879c-0.275,0-0.5,0.188-0.5,0.416
            C3.379,17.167,3.604,17.354,3.879,17.354z"/>
          <path d="M3.879,19.23h7.554c0.275,0,0.5-0.188,0.5-0.416c0-0.229-0.225-0.418-0.5-0.418H3.879c-0.275,0-0.5,0.188-0.5,0.418
            C3.379,19.043,3.604,19.23,3.879,19.23z"/>
          <path d="M3.879,21.105h7.554c0.275,0,0.5-0.188,0.5-0.416s-0.225-0.416-0.5-0.416H3.879c-0.275,0-0.5,0.188-0.5,0.416
            C3.379,20.919,3.604,21.105,3.879,21.105z"/>
          <path d="M13.566,11.727h7.555c0.275,0,0.5-0.188,0.5-0.416c0-0.229-0.225-0.417-0.5-0.417h-7.555c-0.274,0-0.5,0.188-0.5,0.417
            C13.066,11.539,13.292,11.727,13.566,11.727z"/>
          <path d="M13.566,13.604h7.555c0.275,0,0.5-0.188,0.5-0.416c0-0.229-0.225-0.418-0.5-0.418h-7.555c-0.274,0-0.5,0.188-0.5,0.418
            C13.066,13.415,13.292,13.604,13.566,13.604z"/>
          <path d="M13.566,15.479h7.555c0.275,0,0.5-0.188,0.5-0.416s-0.225-0.416-0.5-0.416h-7.555c-0.274,0-0.5,0.188-0.5,0.416
            S13.292,15.479,13.566,15.479z"/>
          <path d="M13.566,17.354h7.555c0.275,0,0.5-0.188,0.5-0.416s-0.225-0.416-0.5-0.416h-7.555c-0.274,0-0.5,0.188-0.5,0.416
            C13.066,17.167,13.292,17.354,13.566,17.354z"/>
          <path d="M13.566,19.23h7.555c0.275,0,0.5-0.188,0.5-0.416c0-0.229-0.225-0.418-0.5-0.418h-7.555c-0.274,0-0.5,0.188-0.5,0.418
            C13.066,19.043,13.292,19.23,13.566,19.23z"/>
          <path d="M13.566,21.105h7.555c0.275,0,0.5-0.188,0.5-0.416s-0.225-0.416-0.5-0.416h-7.555c-0.274,0-0.5,0.188-0.5,0.416
            C13.066,20.919,13.292,21.105,13.566,21.105z"/>
      </g>
      `;
      return this;
    }
  
    setColorPalette(bg) {
      this.setViewBox(0, 0, 431.85, 431.85)
      this.svg.innerHTML = `
        <path fill="${bg}" d="M423.257,51.829c-0.808-2.045-2.67-3.484-4.853-3.751c-2.177-0.266-4.335,0.682-5.612,2.472
        c-7.581,10.629-17.529,14.172-29.053,18.275c-9.292,3.31-18.901,6.73-29.286,14.186c-14.687,10.544-21.405,24.917-18.055,38.54
        l-0.358,0.459c-6.133-8.897-12.806-17.126-19.848-24.474c-32.947-34.378-78.984-55.046-126.311-56.703
        c-2.085-0.073-4.204-0.11-6.298-0.11c-52.846,0-103.428,23.624-138.775,64.813C9.646,146.512-5.939,199.853,2.051,251.882
        c0.668,4.349,1.504,8.743,2.487,13.063c12.996,57.202,46.189,100.717,91.069,119.383c11.063,4.602,22.222,6.934,33.163,6.934
        c27.183,0,50.926-14.539,65.143-39.889c5.404-9.646,8.891-19.621,10.36-29.651c0.866-5.92,0.274-11.835-0.3-17.567
        c-0.591-5.9-1.149-11.476-0.256-17.09c2.047-12.869,11.036-20.553,24.047-20.553c3.701,0,7.483,0.609,11.26,1.812
        c-4.422,8.11-8.438,15.854-11.947,23.032c-7.437,15.212-12.567,27.81-15.252,37.44c-1.655,5.939-6.052,21.722,4.67,29.164
        c3.405,2.363,7.722,3.197,12.215,2.361c4.049-0.752,16.369-3.041,51.378-42.896c9.396-10.695,19.521-23.072,30.104-36.794
        c27.168-9.15,48.31-31.921,53.903-58.087c1.4-6.541,1.984-13.541,1.735-20.812c10.172-15.72,19.094-30.388,28.072-46.156
        c0.172-0.304,0.342-0.628,0.51-0.96c13.031-3.569,24.254-13.71,30.842-27.891C434.872,106.028,434.163,79.428,423.257,51.829z
        M276.385,149.834c-4.713,7.485-12.814,11.954-21.673,11.954c-4.81,0-9.515-1.361-13.605-3.937
        c-5.782-3.642-9.803-9.317-11.316-15.98s-0.345-13.518,3.298-19.301c4.714-7.485,12.816-11.954,21.675-11.954
        c4.811,0,9.515,1.361,13.604,3.938c5.782,3.64,9.802,9.315,11.316,15.979C281.197,137.197,280.026,144.051,276.385,149.834z
        M309.592,196.187c12.934-19.057,26.612-38,39.604-54.85c2.106,1.902,4.461,3.76,7.012,5.53c4.227,2.933,8.648,5.201,13.164,6.754
        c-10.969,18.758-22.763,37.342-37.043,58.375c-23.463,34.571-47.859,66.684-68.695,90.424
        c-11.638,13.26-21.823,23.498-29.671,29.839c3.029-9.69,8.818-22.989,16.875-38.746
        C265.245,265.336,286.111,230.772,309.592,196.187z M82.506,196.023c-4.811,0-9.516-1.361-13.607-3.938
        c-5.782-3.641-9.801-9.314-11.315-15.979c-1.514-6.664-0.342-13.519,3.301-19.302c4.711-7.484,12.813-11.953,21.671-11.953
        c4.812,0,9.517,1.361,13.607,3.938c11.936,7.518,15.532,23.345,8.019,35.279C99.466,191.554,91.363,196.023,82.506,196.023z
        M55.688,252.358c4.713-7.486,12.814-11.955,21.673-11.955c4.81,0,9.514,1.362,13.606,3.938c5.782,3.641,9.801,9.315,11.315,15.979
        c1.515,6.662,0.343,13.516-3.301,19.301c-4.711,7.483-12.813,11.953-21.671,11.953c-4.811,0-9.517-1.361-13.609-3.938
        c-5.782-3.642-9.8-9.315-11.313-15.979C50.876,264.995,52.049,258.14,55.688,252.358z M137.62,100.414
        c4.713-7.485,12.815-11.954,21.673-11.954c4.809,0,9.514,1.361,13.604,3.937c11.937,7.516,15.533,23.344,8.019,35.28
        c-4.715,7.486-12.817,11.955-21.675,11.955c-4.81,0-9.515-1.361-13.605-3.938c-5.781-3.64-9.799-9.314-11.313-15.979
        C132.807,113.052,133.979,106.198,137.62,100.414z"/>
      `;
      return this;
    }
  
    set(bg) {
      this.svg.innerHTML = `
  
      `;
      return this;
    }
  
    set(bg) {
      this.svg.innerHTML = `
  
      `;
      return this;
    }
  
    set(bg) {
      this.svg.innerHTML = `
  
      `;
      return this;
    }
  
    set(bg) {
      this.svg.innerHTML = `
  
      `;
      return this;
    }
  
    set(bg) {
      this.svg.innerHTML = `
  
      `;
      return this;
    }
  
    set(bg) {
      this.svg.innerHTML = `
  
      `;
      return this;
    }
  
    set(bg) {
      this.svg.innerHTML = `
  
      `;
      return this;
    }
  
    set(bg) {
      this.svg.innerHTML = `
  
      `;
      return this;
    }
  
    set(bg) {
      this.svg.innerHTML = `
  
      `;
      return this;
    }
  
    set(bg) {
      this.svg.innerHTML = `
  
      `;
      return this;
    }
  
    set(bg) {
      this.svg.innerHTML = `
  
      `;
      return this;
    }
  
    set(bg) {
      this.svg.innerHTML = `
  
      `;
      return this;
    }
  
    set(bg) {
      this.svg.innerHTML = `
  
      `;
      return this;
    }
  
    set(bg) {
      this.svg.innerHTML = `
  
      `;
      return this;
    }
  
    set(bg) {
      this.svg.innerHTML = `
  
      `;
      return this;
    }
  
    set(bg) {
      this.svg.innerHTML = `
  
      `;
      return this;
    }
  
    set(bg) {
      this.svg.innerHTML = `
  
      `;
      return this;
    }
  
    set(bg) {
      this.svg.innerHTML = `
  
      `;
      return this;
    }
    repaint(bg, bg2, bg3) {
      if (!bg) bg = this.objProperties.backgroundColor1;
      if (!bg2) bg2 = this.objProperties.backgroundColor2;
      if (!bg3) bg3 = this.objProperties.backgroundColor3;      
      if (this.objProperties.typeButton === 'first') this.setFirst(bg);
      if (this.objProperties.typeButton === 'priorPage') this.setPriorPage(bg);
      if (this.objProperties.typeButton === 'prior') this.setPrior(bg);
      if (this.objProperties.typeButton === 'next') this.setNext(bg);
      if (this.objProperties.typeButton === 'nextPage') this.setNextPage(bg);
      if (this.objProperties.typeButton === 'last') this.setLast(bg);
      if (this.objProperties.typeButton === 'stop') this.setStop(bg);
      if (this.objProperties.typeButton === 'onOff') this.setOnOff(bg);
      if (this.objProperties.typeButton === 'pause') this.setPause(bg);
      if (this.objProperties.typeButton === 'exchange') this.setExchange(bg);
      if (this.objProperties.typeButton === 'arrowRight') this.setArrowRight(bg);
      if (this.objProperties.typeButton === 'arrowUp') this.setArrowUp(bg);
      if (this.objProperties.typeButton === 'arrowDown') this.setArrowDown(bg);
      if (this.objProperties.typeButton === 'arrowLeft') this.setArrowLeft(bg);
      if (this.objProperties.typeButton === 'verticalExchange') this.setVerticalExchange(bg);
      if (this.objProperties.typeButton === 'doc') this.setDoc(bg);
      if (this.objProperties.typeButton === 'docPlus') this.setDocPlus(bg);
      if (this.objProperties.typeButton === 'docRemove') this.setDocRemove(bg);
      if (this.objProperties.typeButton === 'docEdit') this.setDocEdit(bg);
      if (this.objProperties.typeButton === 'docSearch') this.setDocSearch(bg);
      if (this.objProperties.typeButton === 'docFav') this.setDocFav(bg);
      if (this.objProperties.typeButton === 'docList') this.setDocList(bg);
      if (this.objProperties.typeButton === 'docLeft') this.setDocLeft(bg);
      if (this.objProperties.typeButton === 'docRight') this.setDocRight(bg);
      if (this.objProperties.typeButton === 'docUp') this.setDocUp(bg);
      if (this.objProperties.typeButton === 'docDown') this.setDocDown(bg);
      if (this.objProperties.typeButton === 'docChecked') this.setDocDown(bg);
      if (this.objProperties.typeButton === 'docRss') this.setDocRss(bg);
      if (this.objProperties.typeButton === 'docCopy') this.setDocCopy(bg);
      if (this.objProperties.typeButton === 'folder') this.setFolder(bg);
      if (this.objProperties.typeButton === 'openFolder') this.setOpenFolder(bg);
      if (this.objProperties.typeButton === 'disk') this.setDisk(bg);
      if (this.objProperties.typeButton === 'alert') this.setAlert(bg);
      if (this.objProperties.typeButton === 'find') this.setFind(bg);
      if (this.objProperties.typeButton === 'findText') this.setFindText(bg);
      if (this.objProperties.typeButton === 'print') this.setPrint(bg);
      if (this.objProperties.typeButton === 'save') this.setSave(bg);
      if (this.objProperties.typeButton === 'edit') this.setEdit(bg);
      if (this.objProperties.typeButton === 'editText') this.setEditText(bg);
      if (this.objProperties.typeButton === 'refresh') this.setRefresh(bg);
      if (this.objProperties.typeButton === 'block') this.setBlock(bg);
      if (this.objProperties.typeButton === 'close') this.setClose(bg);
      if (this.objProperties.typeButton === 'info') this.setInfo(bg);
      if (this.objProperties.typeButton === 'checked') this.setChecked(bg);
      if (this.objProperties.typeButton === 'delete') this.setDelete(bg);
      if (this.objProperties.typeButton === 'download') this.setDownload(bg);
      if (this.objProperties.typeButton === 'upload') this.setUpload(bg);
      if (this.objProperties.typeButton === 'user') this.setUser(bg);
      if (this.objProperties.typeButton === 'people') this.setPeople(bg);
      if (this.objProperties.typeButton === 'man') this.setMan(bg);
      if (this.objProperties.typeButton === 'woman') this.setWoman(bg);
      if (this.objProperties.typeButton === 'personTalk') this.setPersonTalk(bg);
      if (this.objProperties.typeButton === 'flag') this.setFlag(bg);
      if (this.objProperties.typeButton === 'flag2') this.setFlag2(bg);
      if (this.objProperties.typeButton === 'info2') this.setInfo2(bg);
      if (this.objProperties.typeButton === 'music') this.setMusic(bg);
      if (this.objProperties.typeButton === 'musicNote') this.setMusicNote(bg);
      if (this.objProperties.typeButton === 'photo') this.setPhoto(bg);
      if (this.objProperties.typeButton === 'security') this.setSecurity(bg);
      if (this.objProperties.typeButton === 'closeButton') this.setCloseButton(bg);
      if (this.objProperties.typeButton === 'maximize') this.setMaximize(bg);
      if (this.objProperties.typeButton === 'maximize2') this.setMaximize2(bg);
      if (this.objProperties.typeButton === 'minimize') this.setMinimize(bg);
      if (this.objProperties.typeButton === 'minimize2') this.setMinimize2(bg);
      if (this.objProperties.typeButton === 'buttonPlus') this.setButtonPlus(bg);
      if (this.objProperties.typeButton === 'plus') this.setPlus(bg);
      if (this.objProperties.typeButton === 'buttonPlus2') this.setButtonPlus2(bg);
      if (this.objProperties.typeButton === 'buttonMinus') this.setButtonMinus(bg);
      if (this.objProperties.typeButton === 'minus') this.setMinus(bg);
      if (this.objProperties.typeButton === 'buttonMinus2') this.setButtonMinus2(bg);
      if (this.objProperties.typeButton === 'batery') this.setBatery(bg);
      if (this.objProperties.typeButton === 'pdf') this.setPdf(bg);
      if (this.objProperties.typeButton === 'excel') this.setExcel(bg);
      if (this.objProperties.typeButton === 'lock') this.setLock(bg);
      if (this.objProperties.typeButton === 'unLock') this.setUnLock(bg);
      if (this.objProperties.typeButton === 'reload') this.setReload(bg);
      if (this.objProperties.typeButton === 'repeat') this.setRepeat(bg);
      if (this.objProperties.typeButton === 'abacus') this.setAbacus(bg);
      if (this.objProperties.typeButton === 'calculator') this.setCalculator(bg);
      if (this.objProperties.typeButton === 'operation') this.setOperation(bg);
      if (this.objProperties.typeButton === 'config') this.setConfig(bg);
      if (this.objProperties.typeButton === 'config2') this.setConfig2(bg);
      if (this.objProperties.typeButton === 'airplane') this.setAirplane(bg);
      if (this.objProperties.typeButton === 'alarmClock') this.setAlarmClock(bg);
      if (this.objProperties.typeButton === 'alignLeft') this.setAlignLeft(bg);
      if (this.objProperties.typeButton === 'alignCenter') this.setAlignCenter(bg);
      if (this.objProperties.typeButton === 'alignRight') this.setAlignRight(bg);
      if (this.objProperties.typeButton === 'ambulance') this.setAmbulance(bg);
      if (this.objProperties.typeButton === 'anchor') this.setAnchor(bg);
      if (this.objProperties.typeButton === 'android') this.setAndroid(bg);
      if (this.objProperties.typeButton === 'antenna') this.setAntenna(bg);
      if (this.objProperties.typeButton === 'back') this.setBack(bg);
      if (this.objProperties.typeButton === 'change') this.setChange(bg);
      if (this.objProperties.typeButton === 'forward') this.setForward(bg);
      if (this.objProperties.typeButton === 'recicle2') this.setRecicle2(bg);
      if (this.objProperties.typeButton === 'fourway') this.setFourWay(bg);
      if (this.objProperties.typeButton === 'fullscreen') this.setFullscreen(bg);
      if (this.objProperties.typeButton === 'fullscreen2') this.setFullscreen2(bg);
      if (this.objProperties.typeButton === 'move') this.setMove(bg);
      if (this.objProperties.typeButton === 'expand') this.setExpand(bg);
      if (this.objProperties.typeButton === 'expand3') this.setExpand2(bg);
      if (this.objProperties.typeButton === 'expand2') this.setExpand3(bg);
      if (this.objProperties.typeButton === 'expand4') this.setExpand4(bg);
      if (this.objProperties.typeButton === 'contract') this.setContract(bg);
      if (this.objProperties.typeButton === 'contract2') this.setContract2(bg);
      if (this.objProperties.typeButton === 'user2') this.setUser2(bg);
      if (this.objProperties.typeButton === 'shuffle') this.setShuffle(bg);
      if (this.objProperties.typeButton === 'up') this.setUp(bg);
      if (this.objProperties.typeButton === 'left') this.setLeft(bg);
      if (this.objProperties.typeButton === 'down') this.setDown(bg);
      if (this.objProperties.typeButton === 'right') this.setRight(bg);
      if (this.objProperties.typeButton === 'recicle') this.setRecicle(bg);
      if (this.objProperties.typeButton === 'twoWay') this.setTwoWay(bg);
      if (this.objProperties.typeButton === 'twoWay2') this.setTwoWay2(bg);
      if (this.objProperties.typeButton === 'debitCard') this.setDebitCard(bg);
      if (this.objProperties.typeButton === 'userCard') this.setUserCard(bg);
      if (this.objProperties.typeButton === 'balance') this.setBalance(bg);
      if (this.objProperties.typeButton === 'balloon') this.setBalloon(bg);
      if (this.objProperties.typeButton === 'bandage') this.setBandage(bg);
      if (this.objProperties.typeButton === 'bank') this.setBank(bg);
      if (this.objProperties.typeButton === 'barcode') this.setBarcode(bg);
      if (this.objProperties.typeButton === 'barrier') this.setBarrier(bg);
      if (this.objProperties.typeButton === 'baseball') this.setBaseball(bg);
      if (this.objProperties.typeButton === 'bate') this.setBate(bg);
      if (this.objProperties.typeButton === 'basketball') this.setBasketball(bg);
      if (this.objProperties.typeButton === 'batteryCharging') this.setBatteryCharging(bg);
      if (this.objProperties.typeButton === 'batteryEmpty') this.setBatteryEmpty(bg);
      if (this.objProperties.typeButton === 'batteryHalf') this.setBatteryHalf(bg);
      if (this.objProperties.typeButton === 'batteryHalf2') this.setBatteryHalf2(bg);
      if (this.objProperties.typeButton === 'batteryLow') this.setBatteryLow(bg);
      if (this.objProperties.typeButton === 'bell') this.setBell(bg);
      if (this.objProperties.typeButton === 'birthday') this.setBirthday(bg);
      if (this.objProperties.typeButton === 'blender') this.setBlender(bg);
      if (this.objProperties.typeButton === 'bluetooh') this.setBluetooh(bg);
      if (this.objProperties.typeButton === 'bloodBag') this.setBloodBag(bg);
      if (this.objProperties.typeButton === 'board') this.setBoard(bg);
      if (this.objProperties.typeButton === 'bolt') this.setBolt(bg);
      if (this.objProperties.typeButton === 'bomb') this.setBomb(bg);
      if (this.objProperties.typeButton === 'boat') this.setBoat(bg);
      if (this.objProperties.typeButton === 'bone') this.setBone(bg);
      if (this.objProperties.typeButton === 'book') this.setBook(bg);
      if (this.objProperties.typeButton === 'book2') this.setBook2(bg);
      if (this.objProperties.typeButton === 'bookmark') this.setBookmark(bg);
      if (this.objProperties.typeButton === 'briefcase') this.setBriefcase(bg);
      if (this.objProperties.typeButton === 'brightness') this.setBrightness(bg);
      if (this.objProperties.typeButton === 'brush') this.setBrush(bg);
      if (this.objProperties.typeButton === 'brush2') this.setBrush2(bg);
      if (this.objProperties.typeButton === 'brushPencil') this.setBrushPencil(bg);
      if (this.objProperties.typeButton === 'message') this.setMessage(bg);
      if (this.objProperties.typeButton === 'message2') this.setMessage2(bg);
      if (this.objProperties.typeButton === 'messageDot') this.setMessageDot(bg);
      if (this.objProperties.typeButton === 'chat') this.setChat(bg);
      if (this.objProperties.typeButton === 'messageQuote') this.setMessageQuote(bg);
      if (this.objProperties.typeButton === 'messageText') this.setMessageText(bg);
      if (this.objProperties.typeButton === 'bug') this.setBug(bg);
      if (this.objProperties.typeButton === 'bicycle') this.setBicycle(bg);
      if (this.objProperties.typeButton === 'building') this.setBuilding(bg);
      if (this.objProperties.typeButton === 'checkedList') this.setCheckedList(bg);
      if (this.objProperties.typeButton === 'list') this.setList(bg);
      if (this.objProperties.typeButton === 'list2') this.setList2(bg);
      if (this.objProperties.typeButton === 'bus') this.setBus(bg);
      if (this.objProperties.typeButton === 'circleDown') this.setCircleDown(bg);
      if (this.objProperties.typeButton === 'circleLeft') this.setCircleLeft(bg);
      if (this.objProperties.typeButton === 'circleRight') this.setCircleRight(bg);
      if (this.objProperties.typeButton === 'circleUp') this.setCircleUp(bg);
      if (this.objProperties.typeButton === 'triangleUp') this.setTriangleUp(bg);
      if (this.objProperties.typeButton === 'cabinCable') this.setCabinCable(bg);
      if (this.objProperties.typeButton === 'calendar') this.setCalendar(bg);
      if (this.objProperties.typeButton === 'call') this.setCall(bg);
      if (this.objProperties.typeButton === 'callForward') this.setCallForward(bg);
      if (this.objProperties.typeButton === 'callReply') this.setCallReply(bg);
      if (this.objProperties.typeButton === 'camera') this.setCamera(bg);
      if (this.objProperties.typeButton === 'candy') this.setCandy(bg);
      if (this.objProperties.typeButton === 'car') this.setCar(bg);
      if (this.objProperties.typeButton === 'cashierMachine') this.setCashierMachine(bg);
      if (this.objProperties.typeButton === 'caterpillar') this.setCaterpillar(bg);
      if (this.objProperties.typeButton === 'justify') this.setJustify(bg);
      if (this.objProperties.typeButton === 'candyStick') this.setCandyStick(bg);
      if (this.objProperties.typeButton === 'cup') this.setCup(bg);
      if (this.objProperties.typeButton === 'graphicColumn') this.setGraphicColumn(bg);
      if (this.objProperties.typeButton === 'graphic') this.setGraphic(bg);
      if (this.objProperties.typeButton === 'graphicPie') this.setGraphicPie(bg);
      if (this.objProperties.typeButton === 'mistletoe') this.setMistletoe(bg);
      if (this.objProperties.typeButton === 'christmassBall') this.setChristmassBall(bg);
      if (this.objProperties.typeButton === 'christmassEgg') this.setChristmassEgg(bg);
      if (this.objProperties.typeButton === 'christmassHat') this.setChristmassHat(bg);
      if (this.objProperties.typeButton === 'christmassTree') this.setChristmassTree(bg);
      if (this.objProperties.typeButton === 'circle') this.setCircle(bg);
      if (this.objProperties.typeButton === 'controlPad') this.setControlPad(bg);
      if (this.objProperties.typeButton === 'help') this.setHelp(bg);
      if (this.objProperties.typeButton === 'star') this.setStar(bg);
      if (this.objProperties.typeButton === 'triangleDown') this.setTriangleDown(bg);
      if (this.objProperties.typeButton === 'triangleLeft') this.setTriangleLeft(bg);
      if (this.objProperties.typeButton === 'triangleRight') this.setTriangleRight(bg);
      if (this.objProperties.typeButton === 'city') this.setCity(bg);
      if (this.objProperties.typeButton === 'clamp') this.setClamp(bg);
      if (this.objProperties.typeButton === 'clapBoard') this.setClapBoard(bg);
      if (this.objProperties.typeButton === 'clapBoardPlay') this.setClapBoardPlay(bg);
      if (this.objProperties.typeButton === 'clipboard') this.setClipboard(bg);
      if (this.objProperties.typeButton === 'clock') this.setClock(bg);
      if (this.objProperties.typeButton === 'code') this.setCode(bg);
      if (this.objProperties.typeButton === 'colorPicker') this.setColorPicker(bg);
      if (this.objProperties.typeButton === 'columnIncrease') this.setColumnIncrease(bg);
      if (this.objProperties.typeButton === 'columnDecrease') this.setColumnDecrease(bg);
      if (this.objProperties.typeButton === 'compass') this.setCompass(bg);
      if (this.objProperties.typeButton === 'graduationCap') this.setGraduationCap(bg);
      if (this.objProperties.typeButton === 'connect') this.setConnect(bg);
      if (this.objProperties.typeButton === 'connect2') this.setConnect2(bg);
      if (this.objProperties.typeButton === 'contrast') this.setContrast(bg);
      if (this.objProperties.typeButton === 'cpu') this.setCpu(bg);
      if (this.objProperties.typeButton === 'cubic') this.setCubic(bg);
      if (this.objProperties.typeButton === 'customerSupport') this.setCustomerSupport(bg);
      if (this.objProperties.typeButton === 'dataBase') this.setDataBase(bg);
      if (this.objProperties.typeButton === 'pc') this.setPc(bg);
      if (this.objProperties.typeButton === 'diskDeny') this.setDiskDeny(bg);
      if (this.objProperties.typeButton === 'clover') this.setClover(bg);
      if (this.objProperties.typeButton === 'dna') this.setDna(bg);
      if (this.objProperties.typeButton === 'dog') this.setDog(bg);
      if (this.objProperties.typeButton === 'door') this.setDoor(bg);
      if (this.objProperties.typeButton === 'downstair') this.setDownstair(bg);
      if (this.objProperties.typeButton === 'dropBox') this.setDropBox(bg);
      if (this.objProperties.typeButton === 'dropWater') this.setDropWater(bg);
      if (this.objProperties.typeButton === 'drum') this.setDrum(bg);
      if (this.objProperties.typeButton === 'easal') this.setEasal(bg);
      if (this.objProperties.typeButton === 'electron') this.setElectron(bg);
      if (this.objProperties.typeButton === 'emoticon') this.setEmoticon(bg);
      if (this.objProperties.typeButton === 'erase') this.setErase(bg);
      if (this.objProperties.typeButton === 'text') this.setText(bg);
      if (this.objProperties.typeButton === 'messageSent') this.setMessageSent(bg);
      if (this.objProperties.typeButton === 'image') this.setImage(bg);
      if (this.objProperties.typeButton === 'square') this.setSquare(bg);
      if (this.objProperties.typeButton === 'circle2') this.setCircle2(bg);
      if (this.objProperties.typeButton === 'figure') this.setFigure(bg);
      if (this.objProperties.typeButton === 'ellipse') this.setEllipse(bg);
      if (this.objProperties.typeButton === 'rect') this.setRect(bg);
      if (this.objProperties.typeButton === 'triangle') this.setTriangle(bg);
      if (this.objProperties.typeButton === 'mic') this.setMic(bg);
      if (this.objProperties.typeButton === 'sound') this.setSound(bg);
      if (this.objProperties.typeButton === 'soundMute') this.setSoundMute(bg);
      if (this.objProperties.typeButton === 'messageDissabled') this.setMessageDissabled(bg);
      if (this.objProperties.typeButton === 'house') this.setHouse(bg);
      if (this.objProperties.typeButton === 'facebook') this.setFacebook(bg);
      if (this.objProperties.typeButton === 'instagram') this.setInstagram(bg);
      if (this.objProperties.typeButton === 'gMail') this.setGMail(bg);
      if (this.objProperties.typeButton === 'twitter') this.setTwitter(bg);
      if (this.objProperties.typeButton === 'youTube') this.setYouTube(bg);
      if (this.objProperties.typeButton === 'newspaper') this.setNewspaper(bg);
      if (this.objProperties.typeButton === 'colorPalette') this.setColorPalette(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
      // if (this.objProperties.typeButton === 'efra') this.setvalet(bg);
  
  
      return this;
    }
  
    getTypeButton() {
      return this.objProperties.typeButton;
    }
  
    changeType(typeButton) {
      this.objProperties.typeButton = typeButton;
      this.repaint(this.objProperties.backgroundColor1, this.objProperties.backgroundColor2, this.objProperties.backgroundColor3);
      return this;
    }
  }