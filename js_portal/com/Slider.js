flex.Slider = class extends flex.VisualComponent {
   constructor(options) {
     super(options, 'Slider', false)
     this.currentSlide = 0;
     this.slider = this.vcContainer;
     this.elements = [this.slider];
     this.names = ['Slider'];
     this.hasCssClass = true;
     this.setProperties(options);
     this.interval;
   }
 
   createSlider(dataSlider) {
     let scroller = document.createElement('div');
     let containerControl = document.createElement('div');
     let next = document.createElement('div');
     let prev = document.createElement('div');
 
     containerControl.className = 'scrollerControls';
     next.className = 'scrollBtn';
     prev.className = 'scrollBtn';
     scroller.className = 'scrollerSlider';
 
     this.createCB({
       id: 'left',
       typeButton: 'arrowLeft',
       container: prev,
       scroller
     });
 
     this.createCB({
       id: 'right',
       typeButton: 'arrowRight',
       container: next,
       direction: 'right',
       scroller
     });
 
     dataSlider.forEach((dataSlider, i)=>{
       scroller.appendChild(this.createSlide({
         dataSlider,
         zIndex: i == 0 ? 4 : 2,
         display: i !== 0 ? 'none' : 'block'
       }));
     });
 
     this.slider.appendChild(scroller);
     containerControl.appendChild(prev);
     containerControl.appendChild(next);
     this.slider.appendChild(containerControl);
	//ACTIVA LA VISUALIZACION DE LAS IMAGENES DE FORMA AUTOMATICA
     this.interval = setInterval(()=>{this.slide('right', this.getScroller())},this.objProperties.slideTime);
     return this;
   }
 
   createSlide(option) {
     const { dataSlider, zIndex, display } = option;
     const {imgSrc, title, subTitle, link} = dataSlider;
     const containerSlider = document.createElement('div');
     const slideCaption = document.createElement('div');
     const sliderTitle = document.createElement('h1');
     const sliderSubTitle = document.createElement('a');
     sliderTitle.textContent = title;
     sliderSubTitle.style.textDecoration = 'none';
     sliderSubTitle.style.color = 'inherit';
 
     sliderSubTitle.textContent = subTitle;
     if(link) sliderSubTitle.href = link;
     slideCaption.className = 'SlideCaption_css'+this.enviroment;
     sliderTitle.className = 'SlideTitle_css'+this.enviroment;
     sliderSubTitle.className = 'SlideSubTitle_css'+this.enviroment;
     
     const image = new Image();
     image.src = imgSrc;
     image.className = 'slideImage';
     image.draggable = false;
   	 
     containerSlider.className = 'slide';
     containerSlider.style.display = display;
		 containerSlider.style.zIndex = zIndex;
     
     containerSlider.appendChild(image);
     containerSlider.appendChild(slideCaption);
     if(title !== ''){
       slideCaption.appendChild(sliderTitle);
     }
     if(subTitle !== ''){
       slideCaption.appendChild(sliderSubTitle);
      }
     containerSlider.addEventListener('transitionend', e => {
       if (e.target.getBoundingClientRect().left < 0) {
         e.target.style.transition = null;
         e.target.style.transform = 'translateX(0px)';
         e.target.style.display = 'none';
         e.target.style.zIndex = 2;
       } else {
         e.target.style.transition = null;
         e.target.style.left = 0;
         e.target.style.transform = 'translateX(0)';
       }
     })
     slideCaption.getBoundingClientRect().width;
     return containerSlider;
   }
 
   slide(direction, scroller) {
     if (direction === 'right') {
       if (this.currentSlide == scroller.children.length) this.currentSlide = 0;
       let currentSlide = scroller.children[this.currentSlide];
       let nextSlide = currentSlide.nextSibling ? currentSlide.nextSibling : scroller.children[0];
       let prevSlide = currentSlide.previousSibling ? currentSlide.previousSibling : scroller.children[scroller.children.length - 1];
       currentSlide.style.zIndex = 4;
       nextSlide.style.zIndex = 3;
       prevSlide.style.zIndex = 2;
       nextSlide.style.display = 'block';
       currentSlide.style.transition = 'transform ease-out 0.4s';
       currentSlide.style.transform = `translateX(-${currentSlide.getBoundingClientRect().width}px)`;
       this.currentSlide++
     } else {
       this.currentSlide--;
       if (this.currentSlide < 0) this.currentSlide = scroller.children.length - 1;
       let nextSlide = scroller.children[this.currentSlide];
       let currentSlide = nextSlide.nextSibling ? nextSlide.nextSibling : scroller.children[0];
       let prevSlide = currentSlide.nextSibling ? currentSlide.nextSibling : scroller.children[0];
       nextSlide.style.transition = 'transform ease-out 0.4s';
       nextSlide.style.zIndex = 4;
       nextSlide.style.display = 'block';
       currentSlide.style.zIndex = 3;
       prevSlide.style.zIndex = 2;
       prevSlide.style.display = 'none';
       nextSlide.style.left = `-${currentSlide.getBoundingClientRect().width}px`;
       nextSlide.style.transform = `translateX(${currentSlide.getBoundingClientRect().width}px)`;
     }
   }
 
   createCB(option) {
     let { id, typeButton, direction, scroller, container } = option;
     let cb = new flex.ControlButton({
       id: 'cbSlider' + this.id + id,
       idxElement: 0,
       showHint: false,
       cssClass: {
         width: '25px',
         height: '25px',
       },
       typeButton,
       _built: () => {
         container.appendChild(cb.getPanel());
         container.addEventListener('click', () => {
           this.slide(direction, scroller);
           clearInterval(this.interval);
           this.interval = setInterval(()=>this.slide('right',this.getScroller()),this.objProperties.slideTime);
         });
       }
     });
   }
 
   getScroller(){
     return this.slider.querySelector('div.scrollerSlider');
   }
 
   refreshProperties(prop) {
     // *************** PROPIEDADES DEL CSS ******************
     prop.that = this;
     flex.propertyManager.refreshProperties(prop);
     let classObj = flex.controller.getObjClass(prop);
     if (classObj) {
       for (var attrname in classObj) {
         this.objProperties[attrname] = classObj[attrname];
       }
     }
     if(!this.objProperties.slideTime) this.objProperties.slideTime = 7200;
     // ******************************************************
   }
 }
