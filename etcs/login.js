
function idPlaceholderFocusOn(){
    id.placeholder = "";
}

function idPlaceholderFocusOff(){
    id.placeholder = "id";
}

function pwPlaceholderFocusOn(){
    pw.placeholder = "";
}

function pwPlaceholderFocusOff(){
    pw.placeholder = 'password';
}

function login(){
}

const id = document.querySelector("#id");
id.addEventListener("focusin", idPlaceholderFocusOn);
id.addEventListener("focusout", idPlaceholderFocusOff);

const pw = document.querySelector("#pw");
pw.addEventListener("focusin", pwPlaceholderFocusOn);
pw.addEventListener("focusout", pwPlaceholderFocusOff);

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", login);