const Login = class{
    constructor(options){
        this.options = options;
        this.container = document.createElement('div');
        this.imageContainer = document.createElement('div');
        this.image = document.createElement('img');
        this.user = document.createElement('input');
        this.password = document.createElement('input');
//        this.guess = document.createElement('input');
        this.recoverPassword = document.createElement('button');
        this.admision = document.createElement('button');
        this.submit = document.createElement('button');
        
        this.image.src = options.imgSrc;
//        this.user.type= this.guess.type = 'text';
        this.password.type = 'password';
        this.user.placeholder = options.userLabel;
        this.password.placeholder = options.passwordLabel;
//        this.guess.placeholder = options.guessLabel;
        this.recoverPassword.innerText = options.recoverPasswordLabel;
        this.admision.innerText = options.admisionLabel;
        this.submit.innerText = options.submitLabel;
        
        this.container.className = 'login';
        this.image.className = 'login-image';
        this.user.className = 'login-input';
        this.password.className = 'login-input';
//        this.guess.className = 'login-input';
        this.recoverPassword.className = 'login-recover-password';
        this.admision.className = 'login-admision';
        this.submit.className = 'login-submit';
        this.imageContainer.className = 'login-image-container';

        this.container.appendChild(this.imageContainer);
        this.imageContainer.appendChild(this.image);
        this.container.appendChild(this.user);
        this.container.appendChild(this.password);
//        this.container.appendChild(this.guess);
        this.container.appendChild(this.recoverPassword);
        this.container.appendChild(this.submit);
        this.container.appendChild(this.admision);

        this.events();
    }    

    addToBody(){
        document.body.appendChild(this.container);
    }

    events(){
	this.user.addEventListener('keyup',(e)=>{
	    if(e.keyCode === 13) this.password.focus();
	});
		
	this.password.addEventListener('keyup',(e)=>{
	    if(e.keyCode === 13) this.submit.click();
	});
        this.admision.addEventListener('click', ()=>{
            if(this.options.onClickAdmision)this.options.onClickAdmision();
        });

        this.recoverPassword.addEventListener('click', ()=>{
            if(this.options.onClickRecoverPassword)this.options.onClickRecoverPassword();
        });

        this.submit.addEventListener('click', ()=>{
            if(this.options.onClickSubmit)this.options.onClickSubmit();
        });
    }

    onClickAdmision(extFunct){this.options.onClickAdmision = extFunct;}
    onClickRecoverPassword(extFunct){this.options.onClickRecoverPassword = extFunct;}
    onClickSubmit(extFunct){this.options.onClickSubmit = extFunct;}

    getUser(){
        return this.user.value;
    }
    
    getPassword(){
        return this.password.value;
    }

//    getGuess(){
//        return this.guess.value;
//    }
}
