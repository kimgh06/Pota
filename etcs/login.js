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
    else if(cnt<10)
        alert("안된다니까.");
    else if(cnt<20)
        alert("그만해");
    else
        alert("404 NOT FOUND.");
    cnt++;
}

const id = document.querySelector("#id");
id.addEventListener("focusin", idPlaceholderFocusOn);
id.addEventListener("focusout", idPlaceholderFocusOff);

const pw = document.querySelector("#pw");
pw.addEventListener("focusin", pwPlaceholderFocusOn);
pw.addEventListener("focusout", pwPlaceholderFocusOff);

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", login);