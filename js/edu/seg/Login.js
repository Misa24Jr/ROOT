const Login = class {
  constructor(options) {
    this.options = options;
    // Contenedor general
    this.container = document.createElement("div");

    // SubContenedores
    this.formsContainer = document.createElement("div");
    // Formulario de login
    this.singIn = document.createElement("div");
    this.signInForm = document.createElement("form");
    // item dentro del formulario
    this.title = document.createElement("h2");
    // Contenedor de los inputs
    this.inputFieldUser = document.createElement("div");
    this.inputFieldPassword = document.createElement("div");
    // Inputs
    this.user = document.createElement("input");
    this.password = document.createElement("input");
    // Boton de Login
    this.submit = document.createElement("button");

    this.panelsConatiner = document.createElement("div");
    this.panelLeftPanel = document.createElement("div");
    // SubContenedores
    this.content = document.createElement("div");
    // item dentro del contenedor
    this.title2 = document.createElement("h3");
    this.text = document.createElement("p");
    this.image = document.createElement("img");

    this.recoverPassword = document.createElement("button");
    this.admision = document.createElement("button");

    // Agregandole su contenido
    this.image.src = options.imgSrc;
    this.password.type = "password";
    this.user.placeholder = options.userLabel;
    this.password.placeholder = options.passwordLabel;
    this.title.innerText = options.title;
    this.title2.innerText = options.title2;
    this.text.innerText = options.text;
    this.recoverPassword.innerText = options.recoverPasswordLabel;
    this.admision.innerText = options.admisionLabel;
    this.submit.innerText = options.submitLabel;

    // Agregando clases
    this.container.className = "container";
    this.formsContainer.className = "forms-container";
    this.panelsConatiner.className = "panels-container";
    this.singIn.className = "signin-signup";
    this.signInForm.className = "sign-in-form";
    this.title.className = "title";
    this.inputFieldUser.className = "input-field";
    this.inputFieldPassword.className = "input-field";
    this.submit.className = "btn solid";
    this.user.className = "input";
    this.password.className = "input";
    this.panelsConatiner.className = "panels-container";
    this.panelLeftPanel.className = "panel left-panel";
    this.content.className = "content";
    this.image.className = "image";

    // Agregando donde va cada quien

    this.container.appendChild(this.formsContainer);

    this.formsContainer.appendChild(this.singIn);
    this.singIn.appendChild(this.signInForm);
    this.signInForm.appendChild(this.title);
    this.signInForm.appendChild(this.inputFieldUser);
    // this.inputFieldUser.appendChild(this.user);
    this.inputFieldUser.appendChild(this.user);
    this.signInForm.appendChild(this.inputFieldPassword);
    // this.inputFieldPassword.appendChild(this.password);
    this.inputFieldPassword.appendChild(this.password);
    this.signInForm.appendChild(this.submit);

    this.container.appendChild(this.panelsConatiner);
    this.panelsConatiner.appendChild(this.panelLeftPanel);
    this.panelLeftPanel.appendChild(this.content);
    this.panelLeftPanel.appendChild(this.image);
    this.content.appendChild(this.title2);
    this.content.appendChild(this.text);

    this.events();
  }

  addToBody() {
    document.body.appendChild(this.container);
  }

  events() {
    this.user.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) this.password.focus();
    });

    this.password.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) this.submit.click();
    });
    this.admision.addEventListener("click", () => {
      if (this.options.onClickAdmision) this.options.onClickAdmision();
    });

    this.recoverPassword.addEventListener("click", () => {
      if (this.options.onClickRecoverPassword)
        this.options.onClickRecoverPassword();
    });

    this.submit.addEventListener("click", () => {
      if (this.options.onClickSubmit) this.options.onClickSubmit();
    });
  }

  onClickAdmision(extFunct) {
    this.options.onClickAdmision = extFunct;
  }
  onClickRecoverPassword(extFunct) {
    this.options.onClickRecoverPassword = extFunct;
  }
  onClickSubmit(extFunct) {
    this.options.onClickSubmit = extFunct;
  }

  getUser() {
    console.log(this.user.value);
    return this.user.value;
  }

  getPassword() {
    console.log(this.password.value);
    return this.password.value;
  }

  //    getGuess(){
  //        return this.guess.value;
  //    }
};
