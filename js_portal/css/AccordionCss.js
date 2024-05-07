flex.varCss.__AccordionCss = `
  .Accordion_css0{
    height: auto;
    width: 500px;
    border-top: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
    margin: .5rem 0 1rem 0;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
  }

  .AccordionItem_css0{

  }

  .AccordionItemHeader_css0{
    height: 50px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background-color: #2196F3;
    border-bottom: 1px solid #ddd;
    overflow: hidden;
    color: #FFFFFF;
  }

  .AccordionTitleContainer_css0{
    display: flex;
    margin-left : 10px;
  }

  .AccordionItemTitle_css0{
    margin : 0 5px;
    line-height: 26px;
    text-transform: capitalize;
  }
  
  .AccordionItemBody_css0{
    overflow: hidden;
    height: 0;
    padding: 0;
    will-change: height;
    transition: height ease .25s;
    border-bottom: none;
    scrollbar-width: none;
  }

  .AccordionItemBody_css0::-webkit-scrollbar{
    display:none;
  }

  .BodyItem_css0{
    width: 100%;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .BodyItem_css0:hover{
    background-color: rgba(0, 0, 0, 0.1);
    transition: 0.25s;
  }

  span.Ripple{
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 830ms linear;
    background-color: #BBDEFB;
  }

  @keyframes ripple{
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

`