flex.varCss.__SwitchCss = `
  .Switch_css0{
    position: relative;
    display: inline-block;
    width: 100px;
    height: 18px;
    background-color: #ccc;
    border-radius:34px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: ease 0.5s;
    z-index: 1;
    cursor: pointer;
  }

  .Switch_css0[active = 'true']{
    background-color : #BBDEFB;
  }

  .Switch_css0[active = 'true'] > .SwitchSlider_css0{
    background-color: #1976D2;
  }

  .SwitchSlider_Css0{
    position: absolute;
    height: 30px;
    width: 30px;
    background-color: #FFFFFF;
    transition: .4s;
    border-radius: 50%;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.4);
    z-index: 2;
  }

  .SwitchRipple_css0{
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: rippleSwitch 600ms linear;
    background-color: #BBDEFB;
  }

  @keyframes rippleSwitch{
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

`