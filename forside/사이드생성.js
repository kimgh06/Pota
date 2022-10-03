document.querySelector("#toInsert").insertAdjacentHTML('afterbegin', `
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
</div>`)