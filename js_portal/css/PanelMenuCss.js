flex.varCss.__PanelMenuCss = `
.PanelMenu_css0{
  width: min-content;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
}

.PanelMenuOption_css0{
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 10px 5px;
  background-color: #FFFFFF;
}

.PanelMenuOption_css0:hover{
  background-color:  #757575;
  cursor: pointer;
}

.PanelMenuOption_css0:hover > .PanelMenuText_css0{
  color: #FFFFFF;
} 

.PanelMenuOption_css0:hover > .ControlButton_css0 > svg *{
  fill: #FFFFFF
}

.PanelMenuOption_css0:not(.PanelMenuOption_css0:last-of-type){
  border-bottom: solid 1px rgba(0,0,0,0.3);
}

.PanelMenuText_css0{
  font-size: 0.9em;
  text-transform: capitalize;
  flex-grow: 1;
  padding-left: 10px;
  color: #757575;
}

.PanelMenuOptionChild_css0{
  position: absolute;
  width: 125%;
  left: 100%;
  top: 0px;
  z-index: 10;
  visibility: hidden;
  background-color: #FFFFFF;
  box-sizing: content-box;
  overflow: visible;
  z-index: 20;
  box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
}
` ;