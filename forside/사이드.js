function loginButtonReactOn(){
    loginButton.style.backgroundColor = 'rgb(123, 242, 202)';
}

function loginButtonReactOff(){
    loginButton.style.backgroundColor = 'aquamarine';
}

document.querySelector("#toInsertSide").insertAdjacentHTML('afterbegin', `
<div>
    <div>
        <button id="menuButton" onclick="toggleMenu()">
            <b>三</b>
        </button>
        <div id="sideBar" class="hidden">
            <div id="loginDiv" style="display:none">
                <div>
                    <input type="text" id="loginId" placeholder="Id"><br>
                    <input type="text" id="loginPw" placeholder="Password">
                </div>
                <div>
                    <button id="loginButton">
                        login
                    </button>
                </div>
            </div>
            <div id="mainside" class="hidden">
                <ul class="link">
                    <li>
                        <a href="index.html" class="link" title="click here">▶ Main Page ◀</a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank" class="link" title="click here">▶ Go To
                            Google
                            ◀</a>
                    </li>
                    <li>
                        <a href="https://kimgh06.github.io/Pota/" target="_blank" class="link"
                            title="click here">▶
                            View
                            Source Code ◀</a>
                    </li>
                </ul>
            </div>
            <div id="end">
                <ul>
                    <b>If you<br>Want to<br>Send ideas<br>To me?</b><br>
                    <li>
                        E-mail:<br>
                        kkh061101@naver.com
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div id="background" class="hidden" onclick="toggleMenu()"></div>
</div>
`);

function toggleMenu() {
    const mainside = document.querySelector("#mainside");
    const menuButton = document.querySelector("#menuButton");
    const sideBar = document.querySelector("#sideBar");
    const loginDiv = document.querySelector("#loginDiv");
    const background = document.querySelector("#background");
    const iframe = document.querySelector("#iframe");
    if (mainside.classList.contains("hidden")) {
        mainside.classList.remove("hidden");
        menuButton.style.backgroundColor = "white";
        menuButton.style.color = "black";
        menuButton.style.transform = "rotate(-180deg)";
        menuButton.style.boxShadow = "-2px -2px 5px #999";
        sideBar.style.backgroundColor = "rgb(105, 191, 225)";
        sideBar.classList.remove("hidden");
        loginDiv.style.display = 'flex';
        background.classList.remove("hidden");
        background.style.opacity = "0.3";
    }
    else {
        mainside.classList.add("hidden");
        menuButton.style.color = "white";
        menuButton.style.backgroundColor = "rgb(105, 191, 225)";
        menuButton.style.transform = "rotate(0deg)";
        menuButton.style.boxShadow = "2px 2px 5px #999";
        sideBar.style.backgroundColor = "rgba(255, 255, 255, 0)";
        sideBar.classList.add("hidden");
        loginDiv.style.display = 'none';
        background.classList.add("hidden");
        background.style.opacity = "0";
    }
}

const loginButton = document.querySelector("#loginButton");
loginButton.addEventListener("mouseover", loginButtonReactOn);
loginButton.addEventListener("mouseout", loginButtonReactOff);
