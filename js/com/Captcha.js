var Captcha = class {
    constructor(options) {
        var that = this;
        this.numbers = [];
        this.ed = document.createElement('input');
        this.bt = document.createElement('input');
        //this.btc = document.createElement('input');
        this.bt.type = 'button';
        this.bt.value = 'ACEPTAR';
        this.bt.style.width = '100px';
        this.bt.style.height = '35px';
        this.bt.style.fontSize = '18px';
        //this.btc.type = 'button';
        //this.btc.value = 'cambiar';
        this.ed.style.width = '82px';
        this.ed.style.height = '50px';
        this.ed.style.fontFamily = 'arial';
        this.ed.style.fontSize = '36px';
        this.ed.maxLength = 4;
        this.onValidFunct = () => {};
        /*this.btc.onclick = () => {
            that.generateCaptcha();
        }
        */
        this.bt.onclick = () => {
            that.valid();
        }
        this.objProperties = {
            x: 0,
            y: 0
        }
        for (var attrname in options) { this.objProperties[attrname] = options[attrname] };
        this.pb = new PanelBuilder(null, 300, 220);
        this.pb.addObj(this.ed, 108, 110);
        this.pb.addObj(this.bt, 103, 175);
        //this.pb.addObj(this.btc, 160, 150);
        this.pb.addToBody();
        this.pb.setAbsoluteMode();
        this.pb.setFill(240, 240, 240, 1);
        this.ctx = this.pb.getCanvasContext();
        this.generateCaptcha();
        this.setPosition(this.objProperties.x, this.objProperties.y)
        this.pb.show();
        this.ed.focus();
        this.ed.onkeyup = (e)=>{
        	if(e.key==='Enter')
        		that.valid();
        } 
    }

    dibujarNumero(pos, n) {
        switch (n) {
            case 0:
                {
                    this.ctx.moveTo(40 + pos, 30);
                    this.ctx.lineTo(60 + pos, 34);
                    this.ctx.lineTo(58 + pos, 60);
                    this.ctx.lineTo(40 + pos, 50);
                    this.ctx.lineTo(40 + pos, 30);
                    this.ctx.stroke();
                    break;
                }
            case 1:
                {
                    this.ctx.moveTo(40 + pos, 40);
                    this.ctx.lineTo(44 + pos, 70);
                    this.ctx.moveTo(40 + pos, 40);
                    this.ctx.lineTo(36 + pos, 50);
                    this.ctx.stroke();
                    break;
                }
            case 2:
                {
                    this.ctx.moveTo(40 + pos, 35);
                    this.ctx.lineTo(60 + pos, 40);
                    this.ctx.lineTo(60 + pos, 52);
                    this.ctx.lineTo(40 + pos, 50);
                    this.ctx.lineTo(40 + pos, 60);
                    this.ctx.lineTo(60 + pos, 65);
                    this.ctx.stroke();
                    break;
                }
            case 3:
                {
                    this.ctx.moveTo(40 + pos, 35);
                    this.ctx.lineTo(60 + pos, 40);
                    this.ctx.lineTo(60 + pos, 52);
                    this.ctx.lineTo(40 + pos, 50);
                    this.ctx.moveTo(60 + pos, 52);
                    this.ctx.lineTo(60 + pos, 60);
                    this.ctx.lineTo(40 + pos, 60);
                    this.ctx.stroke();
                    break;
                }
            case 4:
                {
                    this.ctx.moveTo(40 + pos, 35);
                    this.ctx.lineTo(42 + pos, 50);
                    this.ctx.lineTo(60 + pos, 52);
                    this.ctx.moveTo(60 + pos, 35);
                    this.ctx.lineTo(58 + pos, 70);
                    this.ctx.stroke();
                    break;
                }
            case 5:
                {
                    this.ctx.moveTo(60 + pos, 40);
                    this.ctx.lineTo(40 + pos, 38);
                    this.ctx.lineTo(42 + pos, 52);
                    this.ctx.lineTo(60 + pos, 53);
                    this.ctx.lineTo(60 + pos, 62);
                    this.ctx.lineTo(41 + pos, 68);
                    this.ctx.stroke();
                    break;
                }
            case 6:
                {
                    this.ctx.moveTo(60 + pos, 40);
                    this.ctx.lineTo(40 + pos, 38);
                    this.ctx.lineTo(42 + pos, 52);
                    this.ctx.lineTo(60 + pos, 53);
                    this.ctx.lineTo(60 + pos, 62);
                    this.ctx.lineTo(41 + pos, 68);
                    this.ctx.lineTo(42 + pos, 53);
                    this.ctx.stroke();
                    break;
                }
            case 7:
                {
                    this.ctx.moveTo(40 + pos, 40);
                    this.ctx.lineTo(60 + pos, 42);
                    this.ctx.lineTo(58 + pos, 70);
                    this.ctx.moveTo(60 + pos, 55);
                    this.ctx.lineTo(44 + pos, 52);
                    this.ctx.stroke();
                    break;
                }
            case 8:
                {
                    this.ctx.moveTo(40 + pos, 30);
                    this.ctx.lineTo(60 + pos, 34);
                    this.ctx.lineTo(58 + pos, 60);
                    this.ctx.lineTo(40 + pos, 60);
                    this.ctx.lineTo(40 + pos, 30);
                    this.ctx.moveTo(40 + pos, 45);
                    this.ctx.lineTo(60 + pos, 46);
                    this.ctx.stroke();
                    break;
                }
            case 9:
                {
                    this.ctx.moveTo(40 + pos, 30);
                    this.ctx.lineTo(60 + pos, 34);
                    this.ctx.lineTo(58 + pos, 60);
                    this.ctx.moveTo(40 + pos, 30);
                    this.ctx.lineTo(40 + pos, 47);
                    this.ctx.lineTo(60 + pos, 46);
                    this.ctx.stroke();
                    break;
                }

        }
    }

    setCenterScreen() {
        var x = document.documentElement.clientWidth / 2 - 300 / 2;
        var y = document.documentElement.clientHeight / 2 - 200 / 2;
        this.setPosition(x, y);
        return this;
    }

    onValid(funct) {
        if (typeof funct === 'string')
            this.onValidFunct = new Function(funct)
        else
            this.onValidFunct = funct;
        return this;
    }

    getPanel() {
        return this.pb.getPanel();
    }

    setFill(r, g, b, t) {
        this.pb.setFill(r, g, b, t);
        return this;
    }

    setPosition(x, y) {
        this.pb.setPosition(x, y);
        return this;
    }

    show() {
        this.pb.show();
        return this;
    }

    hide() {
        this.pb.hide();
        return this;
    }

    addToBody() {
        this.pb.addToBody();
        return this;
    }

    setAbsoluteMode() {
        this.pb.setAbsoluteMode();
        return this;
    }

    generateCaptcha() {
        this.ed.value = '';
        this.numbers.length = 0;
        this.numbers.push(Math.ceil(Math.random() * 9));
        this.numbers.push(Math.ceil(Math.random() * 9));
        this.numbers.push(Math.ceil(Math.random() * 9));
        this.numbers.push(Math.ceil(Math.random() * 9));
        this.pb.setRadius(5, 5, 5, 5);
        this.pb.setText(60, 16, 'COMPRUEBE QUE NO ES UN ROBOT');
        this.pb.setText(50, 95, 'ESCRIBA EL NUMERO Y PULSE ACEPTAR..!');
        this.dibujarNumero(10, this.numbers[0]);
        this.dibujarNumero(70, this.numbers[1]);
        this.dibujarNumero(130, this.numbers[2]);
        this.dibujarNumero(190, this.numbers[3]);
        this.ed.focus();
        return this;
    }

    valid() {
        var str1 = this.ed.value;
        var str2 = this.numbers[0] + '' + this.numbers[1] + '' + this.numbers[2] + '' + this.numbers[3];
        if (str1 != str2)
            this.generateCaptcha();
        else
            this.onValidFunct();
        return this;
    }
}