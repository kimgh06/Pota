const inputId = document.createElement("input");
inputId.id = "loginId";
inputId.placeholder = "Id";
inputId.type = "text";
const inputPw = document.createElement("input");
inputPw.id = "loginPw";
inputPw.placeholder = "Password";
inputPw.type = "text";
const loginInputDiv = document.createElement("div");
loginInputDiv.appendChild(inputId);
loginInputDiv.appendChild(inputPw);

const loginButton = document.createElement("button");
loginButton.innerText = "login";
loginButton.id = "loginButton";
const buttonDiv = document.createElement("div");
buttonDiv.appendChild(loginButton);

const loginDiv = document.createElement("div");
loginDiv.id = "loginDiv";
loginDiv.style.display = "none";
loginDiv.appendChild(loginInputDiv);
loginDiv.appendChild(buttonDiv);

document.querySelector("#sideBar").appendChild(loginDiv);

const mainPage = document.createElement("a");
const li1 = document.createElement("li");
mainPage.innerText = '▶ Main Page ◀';
mainPage.href = "index.html";
mainPage.className = "link";
mainPage.title = "click here";
li1.appendChild(mainPage);

const GoGoogle = document.createElement("a");
const li2 = document.createElement("li");
GoGoogle.innerText = '▶ Go To Google ◀';
GoGoogle.href = "https://www.google.com";
GoGoogle.target="_blank";
GoGoogle.className = "link";
GoGoogle.title = "click here";
li2.appendChild(GoGoogle);

const code = document.createElement("a");
const li3 = document.createElement("li");
code.href = "https://kimgh06.github.io/Pota/";
code.innerText = '▶ View Source Code ◀';
code.target = "_blank";
code.className = "link";
code.title = "click here";
li3.appendChild(code);

const link = document.createElement("ul");
link.className = "link";
link.appendChild(li1);
link.appendChild(li2);
link.appendChild(li3);

const mainSide = document.createElement("div");
mainSide.id = "mainside";
mainSide.className = "hidden";
mainSide.appendChild(link);

document.querySelector("#sideBar").appendChild(mainSide);

const endUl = document.createElement("ul");
endUl.innerHTML = "<b>If you<br>Want to<br>Send ideas<br>To me?</b><br>";
const endli = document.createElement("li");
endli.innerHTML = "E-mail:<br>kkh061101@naver.com";
endUl.appendChild(endli);
const endDiv = document.createElement("div");
endDiv.id = "end";
endDiv.appendChild(endUl);

document.querySelector("#sideBar").appendChild(endDiv);
