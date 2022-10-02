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