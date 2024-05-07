flex.varCss.__BlackboardPanelCss = `
  .BlackboardPanel_css0{
    display: inline-flex;
    flex-flow: row;
    justify-content: flex-start;
    width: 60px;
    height: 400px;
    position: absolute;
    top: calc( 50% - 200px); 
  }

  .BlackboardPanel_css0 .ControlButton_css0{
    background-color: transparent;
    width: calc( 1.5vw + 0.81em);
    height: calc( 1.5vw + 0.81em);
  }

  .SecondaryPanel_css0 > .ToolPanel_css0 .ControlButton_css0{
    width: 20px;
    height: 20px;
    padding: 5px;
  }

  .SecondaryPanel_css0{
    width: auto;
    height: auto;
    left: 100%;
    display: inline-flex;
    flex-direction: column; 
    position: absolute;
  }
  
  .BlackboardPanel_css0 > div.ControlButton_css0{
    position: absolute;
    left:100%;
    top: calc(50% - 42px);
    transition-property: left, transform;
    transition: ease 0.3s;
  }
  
  .BlackboardPanel_css0 > div.ControlButton_css0[rotate = 'true']{
    left: 0;
    transform: rotate(180deg);
  }

  @media screen and (min-width:800px){
    .BlackboardPanel_css0  .ControlButton_css0{
      width: 25px;
      height: 25px;
    }
  }

`