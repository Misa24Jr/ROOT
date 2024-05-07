flex.varCss.__SliderCss = `
.Slider_css0 {
  height: 300px;
  margin: 20px auto;
  width: 100%;
  position: relative;
  overFlow-x: hidden;
  top:50px;
}

.scrollerSlider {
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: hidden;
  user-select: none;
}

.slide{
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #676666;
  color: white;
  overflow: hidden;
  object-fit: contain;
}

.scrollBtn {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  float: left;
  z-index: 8;
  background-color: #feffff80;
  opacity: 0.5;
  cursor: pointer;
}

.scrollBtn:last-of-type{
  float:right;
}

.scrollBtn:hover {
  background-color: #feffff;
}

.scrollerControls{
  position: absolute;
  margin: 0 2%;
  width: 96%;
  top: calc(50% - 25px);
  z-index: 7;
}

.slideImage{
  width: 100%;
  height: 100%;
}

.SlideCaption_css0{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}

.SlideTitle_css0{
  font-size: calc(1rem + 2vw);
  left: 0;
}

.SlideTitle_css0,
.SlideSubTitle_css0{
  background-color: rgba(0,0,0,0.5);
  padding: 10px 15px;
  border-radius: 5px;
}

.SlideSubTitle_css0{
  font-size: calc(1rem + 1vw);
  padding: 10px 20px;
  transition: background-color linear 0.2s;
}

.SlideSubTitle_css0:hover{
  background-color: rgba(0,0,0,0.65);
}
`