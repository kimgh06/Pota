let id;
let password;
let account = [];
const idInput = document.querySelector("#id");
const pwInput = document.querySelector("#pw");

function idPlaceholderFocusOn(){
    idInput.placeholder = "";
}

function idPlaceholderFocusOff(){
    idInput.placeholder = "id";
}

function pwPlaceholderFocusOn(){
    pwInput.placeholder = "";
}

function pwPlaceholderFocusOff(){
    pwInput.placeholder = 'password';
}

function login(event){
    event.preventDefault();
    id = idInput.value;
    password = pwInput.value;
    account = {id : id, password: password}
    console.log(account);
}

idInput.addEventListener("focusin", idPlaceholderFocusOn);
idInput.addEventListener("focusout", idPlaceholderFocusOff);

pwInput.addEventListener("focusin", pwPlaceholderFocusOn);
pwInput.addEventListener("focusout", pwPlaceholderFocusOff);

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", login);