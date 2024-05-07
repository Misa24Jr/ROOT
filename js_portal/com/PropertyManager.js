var DEFAULT_ENV = 0;
var LLUVIA_ENV = 1;
flex.PropertyManager = class {
    constructor() {
        var that = this;
        this.loaded = false;
        this.loadedCss = false;
        this.actualEnv = DEFAULT_ENV;
        this.reqComp = new Map();
        this._files = [];
        this._variablesCss = [];
        
        this.cssProperties = {
            alignContent : 'align-content',alignItems : 'align-Items',alignSelf : 'align-self',all : 'all',animation : 'animation',
            animationDelay : 'animation-delay',animationDirection : 'animation-direction',animationDuration : 'animation-duration',
            animationFillMode : 'animation-fill-mode',animationIterationCount : 'animation-iteration-count',animationName : 'animation-name',
            animationPlayState : 'animation-play-state',animationTimingFunction : 'animation-timing-function',backfaceVisibility : 'backface-visibility',
            background : 'background',backgroundAttachment : 'background-attachment',backgroundBlendMode : 'background-blend-mode',
            backgroundClip : 'background-clip',backgroundColor : 'background-color',backgroundImage : 'background-image',
            backgroundOrigin : 'background-origin',backgroundPosition : 'background-position',backgroundRepeat : 'background-repeat',
            backgroundSize : 'background-size',border : 'border',borderBottom : 'border-bottom',borderBottomColor : 'border-bottom-color',
            borderBottomLeftRadius : 'border-bottom-left-radius',borderBottomRightRadius : 'border-bottom-right-radius',
            borderBottomStyle : 'border-bottom-style',borderBottomWidth : 'border-bottom-width',borderCollapse : 'border-collapse',
            borderColor : 'border-color',borderImage : 'borde-image',borderImageOutset : 'border-image-outset',borderImageRepeat : 'border-image-repeat',
            borderImageSlice : 'border-image-slice',borderImageSource : 'border-image-source',borderImageWidth : 'border-image-width',
            borderLeft : 'border-left',borderLeftColor : 'border-left-color',borderLeftStyle : 'border-left-style',borderLeftWidth : 'border-left-width',
            borderRadius : 'border-radius',borderRight : 'border-right',borderRightColor : 'border-right-color',borderRightStyle : 'border-right-style',
            borderRightWidth : 'border-right-width',display : 'display',emptyCells : 'empty-cells',filter : 'filter',flex : 'flex',
            flexBasis : 'flex-basis',flexDirection : 'flex-direction',flexFlow : 'flex-flow',flexGrow : 'flex-grow',flexShrink : 'flex-shrink',
            flexWrap : 'flex-wrap',float : 'float',font : 'font',fontFamily : 'font-family',fontFeatureSettings : 'font-feature-settings',
            fontKerning : 'font-kerning',fontLanguageOverride : 'font-language-override',fontSize : 'font-size',fontSizeAdjust : 'font-size-adjust',
            fontStretch : 'font-stretch',fontStyle : 'font-style',fontSynthesis : 'font-synthesis',fontVariant : 'font-variant',
            fontVariantAlternates : 'font-variant-alternates',fontVariantCaps : 'font-variant-caps',fontVariantEastAsian : 'font-variant-east-asian',
            fontVariantLigatures : 'font-variant-ligatures',fontVariantNumeric : 'font-variant-numeric',fontVariantPosition : 'font-variant-position',
            fontWeight : 'font-weight',grid : 'grid',gridArea : 'grid-area',gridAutoColumns : 'grid-auto-columns',gridAutoFlow : 'grid-auto-flow',
            gridAutoRows : 'grid-auto-rows',gridColumn : 'grid-column',gridColumnEnd : 'grid-column-end',gridColumnGap : 'grid-column-gap',
            gridColumnStart : 'grid-column-start',gridGap : 'grid-gap',gridRow : 'grid-row',gridRowEnd : 'grid-row-end',gridRowGap : 'grid-row-gap',
            gridRowStart : 'grid-row-start',gridTemplate : 'grid-template',gridTemplateAreas : 'grid-template-areas',
            gridTemplateColumns : 'grid-template-columns',gridTemplateRows : 'grid-template-rows',hangingPunctuation : 'hanging-punctuation',
            height : 'height',hyphens : 'hyphens',imageRendering : 'image-rendering',isolation : 'isolation',justifyContent : 'justify-content',
            left : 'left',letterSpacing : 'letter-spacing',lineBreak : 'line-break',lineHeight : 'line-height',listStyle : 'list-style',
            listStyleImage : 'list-style-image',listStylePosition : 'list-style-position',listStyleType : 'list-style-type',margin : 'margin',
            marginBottom : 'margin-bottom',marginLeft : 'margin-left',marginRight : 'margin-right',marginTop : 'margin-top',mask : 'mask',
            maskType : 'mask-type',maxHeight : 'max-height',maxWidth : 'max-width',minHeight : 'min-height',minWidth : 'min-width',
            mixBlendMode : 'mix-blend-mode',objectFit : 'object-fit',objectPosition : 'object-position',opacity : 'opacity',order : 'order',
            orphans : 'orphans',outline : 'outline',outlineColor : 'outline-color',outlineOffset : 'outline-offset',outlineStyle : 'outline-style',
            outlineWidth : 'outline-width',overflow : 'overflow',overflowWrap : 'overflow-wrap',overflowX : 'overflowX',overflowY : 'overflowY',
            padding : 'padding',paddingBottom : 'padding-bottom',paddingLeft : 'padding-left',paddingRight : 'padding-right',
            paddingTop : 'padding-top',pageBreakAfter : 'page-break-after',pageBreakBefore : 'page-break-before',pageBreakInside : 'page-break-inside',
            perspective : 'perspective',perspectiveOrigin : 'perspective-origin',pointerEvents : 'pointer-events',position : 'position',quotes : 'quotes',
            resize : 'resize',right : 'right',scrollBehavior : 'scroll-behavior',tabSize : 'tab-size',tableLayout : 'table-layout',textAlign : 'text-align',
            textAlignLast : 'text-align-last',textCombineUpright : 'text-combine-upright',textDecoration : 'text-decoration',
            textDecorationColor : 'text-decoration-color',textDecorationLine : 'text-decoration-line',textDecorationStyle : 'text-decoration-style',
            textIndent : 'text-indent',textJustify : 'text-justify',textOrientation : 'text-orientation',textOverflow : 'text-overflow',
            textShadow : 'text-shadow',textTransform : 'text-transform',textUnderlinePosition : 'text-underline-position',top : 'top',
            transform : 'transform',transformOrigin : 'transform-origin',transformStyle : 'transform-style',transition : 'transition',
            transitionDelay : 'transition-delay',transitionDuration : 'transition-duration',transitionProperty : 'transition-property',
            transitionTimingFunction : 'transition-timing-function',unicodeBidi : 'unicode-bidi',userSelect : 'user-select',verticalAlign : 'vertical-align',
            visibility : 'visibility',whiteSpace : 'white-space',widows : 'widows',width : 'width',wordBreak : 'word-break',wordSpacing : 'word-spacing',
            wordWrap : 'word-wrap',writingMode : 'writing-mode',zIndex : 'z-index'
        };
        for(let i=0; i<flex.reqComp.noVisualComp.length; i++){
            this.reqComp.set((flex.pathComponent.trim()+flex.reqComp.noVisualComp[i].trim()).replace('\n',''), true);
            this._files.push((flex.pathComponent.trim()+flex.reqComp.noVisualComp[i].trim()).replace('\n',''))
        }    
        for(let i=0; i<flex.reqComp.visualComp.length; i++){    
            this.reqComp.set((flex.pathComponent.trim()+flex.reqComp.visualComp[i].trim()).replace('\n',''), true);
            this.reqComp.set((flex.pathCss.trim()+flex.reqComp.visualComp[i].trim()+'Css').replace('\n',''), true);
            this._files.push((flex.pathComponent.trim()+flex.reqComp.visualComp[i].trim()).replace('\n',''));
            this._files.push((flex.pathCss.trim()+flex.reqComp.visualComp[i].trim()+'Css').replace('\n',''));
            this._variablesCss.push(("__"+flex.reqComp.visualComp[i].trim()+'Css').replace('\n',''));
        }
    }

    compExists(comp){
        if(this.reqComp.get(comp))
            return true;
        else    
            return false;
    }

    refreshProperties(prop){
        if(prop.cssClass){
            if(Array.isArray(prop.idxElement)){
                for(let i=0; i<prop.idxElement.length; i++){
                    prop.that.elements[i].classList.remove(`${prop.that.names[i]}_${prop.that.id}`);    
                }
            }
            else
                prop.that.elements[prop.idxElement].classList.remove(`${prop.that.names[prop.idxElement]}_${prop.that.id}`);
            if(flex.controller.mapCss.get(`_${prop.that.id}`)===undefined){
                if(Array.isArray(prop.cssClass)){   
					for(let i=0; i<prop.cssClass.length; i++){
                        if(typeof prop.cssClass[i]==='string'){
                            prop.that.createCSS(`.${prop.that.names[prop.idxElement[i]]}_${prop.that.id}${prop.cssClass[i]}`);
                            flex.controller.CSS({
                                method:'toggle',
                                element : prop.that.elements[prop.idxElement[i]],
                                className : `${prop.that.names[prop.idxElement[i]]}_${prop.that.id}`
                            });
                        }
                        else{
                            var cssProp =this.cssProperties;
                            var newCssClass = `.${prop.that.names[prop.idxElement[i]]}_${prop.that.id}{`;
                            for(var attrname in prop.cssClass[i]) {
                                newCssClass += `${cssProp[attrname]}:${prop.cssClass[i][attrname]};`;
                            };
                            newCssClass = newCssClass.substr(0,newCssClass.length-1) + '}';
                            prop.that.createCSS(`.${prop.that.names[prop.idxElement[i]]}_${prop.that.id}${newCssClass}`);
                            flex.controller.CSS({
                                method:'toggle',
                                element : prop.that.elements[prop.idxElement[i]],
                                className : `${prop.that.names[prop.idxElement[i]]}_${prop.that.id}`
                            });
                        }                       
					}				
				}
				else{
                    if(typeof prop.cssClass ==='string'){
                        prop.that.createCSS(`.${prop.that.names[prop.idxElement]}_${prop.that.id}${prop.cssClass}`);
                        flex.controller.CSS({
                            method:'toggle',
                            element : prop.that.elements[prop.idxElement],
                            className : `${prop.that.names[prop.idxElement]}_${prop.that.id}`
                        });
                    }
                    if(typeof prop.cssClass ==='object'){
                        var cssProp =this.cssProperties;
                        var newCssClass = `.${prop.that.names[prop.idxElement]}_${prop.that.id}{`;
                        for(var attrname in prop.cssClass) {
                            newCssClass += `${cssProp[attrname]}:${prop.cssClass[attrname]};`;
                        };
                        newCssClass = newCssClass.substr(0,newCssClass.length-1) + '}';
                        prop.that.createCSS(`.${prop.that.names[prop.idxElement]}_${prop.that.id}${newCssClass}`);
                        flex.controller.CSS({
                            method:'toggle',
                            element : prop.that.elements[prop.idxElement],
                            className : `${prop.that.names[prop.idxElement]}_${prop.that.id}`
                        });
                    }
				}
			}
			else{
                if(typeof prop.cssClass==='string'){
					var ss = document.styleSheets[0];	
					for(let i=0; i<ss.cssRules.length; i++){
						if(ss.cssRules[i].selectorText === `.${prop.that.names[prop.idxElement]}_${prop.that.id}`){
							let prop_obj = flex.controller.parseCSSText(prop.cssClass).style;
							for(var attrname in prop_obj) {
								ss.cssRules[i].style[attrname] = prop_obj[attrname];
							};							
							flex.controller.CSS({
								method:'toggle',
								element : prop.that.elements[prop.idxElement],
								className : `${prop.that.names[prop.idxElement]}_${prop.that.id}`
							});
							break;			
						}
					}
				}
                if(typeof prop.cssClass ==='object'){
                    var cssProp =this.cssProperties;
                    var newCssClass = `.${prop.that.names[prop.idxElement]}_${prop.that.id}{`;
                    for(var attrname in prop.cssClass) {
                        newCssClass += `${cssProp[attrname]}:${prop.cssClass[attrname]};`;
                    };
                    newCssClass = newCssClass.substr(0,newCssClass.length-1) + '}';
                    prop.that.createCSS(`.${prop.that.names[prop.idxElement]}_${prop.that.id}${newCssClass}`);
                    flex.controller.CSS({
                        method:'toggle',
                        element : prop.that.elements[prop.idxElement],
                        className : `${prop.that.names[prop.idxElement]}_${prop.that.id}`
                    });
                }
			}
        }
        else{
            if(prop){
                let newProp = {};
                let flag = false;
                for(var attrname in prop) {
                    if(this.cssProperties[attrname]===''){
                        newProp[attrname] = prop[attrname];
                        flag = true;
                    }                    
                };
                if(flag){
                    for(let i=0; i<prop.cssClass.length; i++){
						prop.that.createCSS(`.${prop.that.names[prop.idxElement[i]]}_${prop.that.id}${prop.cssClass[i]}`);
						flex.controller.CSS({
							method:'toggle',
							element : prop.that.elements[prop.idxElement[i]],
							className : `${prop.that.names[prop.idxElement[i]]}_${prop.that.id}`
						});                       
					}
				}
            }
        }
    }

    load(f) {
        var fls = [];
        if (!this.loaded)
            fls = this._files;
        if (f)
            fls = fls.concat(f);
        this.loaded = true;
        return flex.include.requireAll({ objects: fls });
    }

    setActualEnv(env) {
        this.actualEnv = env;
        return this;
    }

    getActEnviroment() {
        return this.actualEnv;
    }
}