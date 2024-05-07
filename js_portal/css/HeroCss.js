flex.varCss.__HeroCss = `
  body,html{
    margin: 0;
    padding: 0;
    overFlow-x: hidden;
    color: black;
  }

  .Hero_css0 {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
  }
  
  .Hero_css0,
  .HeroImage_css0{
    width: 100vw;
    height: 100vh;
  }

  .HeroImage_css0{
    position: absolute;
    left: 0;
    top:0;
    height: 100%;
    opacity: 0.4;
    z-index: -1;
  }

  .HeroTitleContent_css0{
    position: relative; 
    color: inherit;
    text-align: center;
    margin: 0.625rem;
  }

  .HeroTitle_css0{
    font-size: calc(1rem + 3vw);
    font-weight: 600;
    margin: 0;
  }

  .HeroSubTitle_css0{
    font-size: calc(0.5rem + 2vw);
    font-weight: 200;
    margin-top: 1rem;
  }

  .HeroLinkContent_css0{
    position: absolute;
    margin: 0 auto;
    top: 88vh;
    width: 80%;
    display: flex;
    justify-content: space-between;
  }

  .HeroLinkContent_css0 div.ControlButton_css0 > svg *{
    padding: 0;
    fill: #FFFFFF;
  }

  .HeroLinkContent_css0 div.ControlButton_css0{
    width: calc(1rem + 1.5vw);
    height: calc(1rem + 1.5vw);
    margin-right: 5px;
  }

  .HeroLink_css0{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    background-color: #2bab8e;
    width: auto;
    height: auto;
    color: white;
    border: 1px solid #279b81;
    padding: 1.7vh 1.5vw;
    font-size: calc(0.8rem + 0.3vw);
    font-weight: 200;
    text-decoration: none;
  }

  @media screen and (min-width: 460px){
    .HeroLinkContent_css0{
      width: 300px;
    }
    
    .HeroLinkContent_css0 div.ControlButton_css0{
      width: 2.5vw;
      height: 2.5vw;
      margin-right: 5px;
    }
  }

  @media screen and (min-height:460px){
    .HeroLinkContent_css0{
      top: 90vh;
    }
  }


  

  @media screen and (min-width: 600px){

    .HeroLinkContent_css0 div.ControlButton_css0{
      width: 2vw;
      height: 2vw;
      margin-right: 5px;
    }
  }

  @media screen and (min-width: 1200px){

    .HeroLinkContent_css0 div.ControlButton_css0{
      width: 22px;
      height: 22px;
      margin-right: 5px;
    }

    .HeroLinkContent_css0{
      width: 400px;
    }
  }
`