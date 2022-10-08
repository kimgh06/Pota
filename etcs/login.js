let cnt = 0;

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
    if(cnt<5)
        alert("아직 안돼요");
    else
        alert("안된다니까.");
}

const id = document.querySelector("#id");
id.addEventListener("focusin", idPlaceholderFocusOn);
id.addEventListener("focusout", idPlaceholderFocusOff);

const pw = document.querySelector("#pw");
pw.addEventListener("focusin", pwPlaceholderFocusOn);
pw.addEventListener("focusout", pwPlaceholderFocusOff);

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", login);