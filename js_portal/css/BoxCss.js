flex.varCss.__BoxCss = `
.Box_css0{
    width : 100px;
    height: 100px;
    display: inline-flex;
    justify-content: center;
    overflow: visible;
    position: absolute;
    padding: 0px;
    border: dashed 0px red;
    touch-action: none;
    background-color: azure;
    cursor: move;
    --size: 15px; 
}   

.BoxPanelControlContainer_css0{
    position: fixed;
    display: grid;
    grid-row-gap: 5px;
    grid-column-gap: 2px;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(10, 1fr);
    width: 24%;
    height: auto;
    top: 5px;
    left: 30%;
    z-index: 100;
    background-color: #FFFFFF;
    padding: 0.5vw;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
}

.BoxButtonContainer_css0{
    display: flex;
    position: absolute;
    width: 100%;
    top: calc(101% + var(--size));
    flex-direction: row;
    justify-content: space-between;
    user-select: none;
}

.InnerBox_css0{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,1);
    touch-action: none;
    pointer-events: none;
    z-index: 2;
}

.InputBox_css0{
    width: 100%;
    height: 100%;
    box-sizing: border-box; 
    display: inline-block;
    border: solid 1px black;
    outline: none;
}

.BoxSpanResize_css0{
    position: absolute;
    width: var(--size);
    height: var(--size);
    box-sizing: border-box;
    z-index: 3;
    border: solid 2px blue;
    border-radius: 50%;
    background-color: #FFFFFF;
}

span.top{
    top: calc( -1 * var(--size));
}

span.midTop{
    top: calc(50% - var(--size)/2);
    cursor: e-resize;
}

span.bottom{
    bottom: calc( -1 * var(--size));
}

span.left{
    left: calc( -1 * var(--size));
}

span.midLeft{
    left: calc(50% - var(--size)/2);
    cursor: n-resize;
}

span.right{
    right: calc( -1 * var(--size));
}

span.left.bottom,
span.right.top{
    cursor: ne-resize;
}

span.left.top,
span.right.bottom{
    cursor: nw-resize;
}

`