let searchLine = document.querySelector("#searchLine");
let countingPost = 0;
let postingArray = [];
const main = document.querySelector("#main");
function toggleMenu() {
    const mainside = document.querySelector("#mainside");
    const menuButton = document.querySelector("#menuButton");
    const sideBar = document.querySelector("#sideBar");
    const loginDiv = document.querySelector("#loginDiv");
    const background = document.querySelector("#background");
    if (mainside.classList.contains("hidden")) {
        mainside.classList.remove("hidden");
        menuButton.style.backgroundColor = "white";
        menuButton.style.color = "black";
        menuButton.style.transform = "rotate(-180deg)"
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
        menuButton.style.transform = "rotate(0deg)"
        sideBar.style.backgroundColor = "rgba(255, 255, 255, 0)";
        sideBar.classList.add("hidden");
        loginDiv.style.display = 'none';
        background.classList.add("hidden");
        background.style.opacity = "0";
    }
}

function postingButtonToggle() {
    if (document.getElementById("postingBackground")) {
        document.getElementById("postingBackground").remove();
    }
    else {
        const postingBackground = document.createElement('div');
        postingBackground.id = "postingBackground";
        const postingInput = document.createElement('input');
        postingInput.type = 'text';
        postingInput.placeholder = "입력하기";
        postingInput.id = "postingInput";
        postingInput.maxLength = '100';
        const postingCompleteButton = document.createElement('button');
        postingCompleteButton.innerText = "완료";
        postingCompleteButton.id = "postingCompleteButton";
        postingCompleteButton.onclick = postingComplete;
        postingBackground.appendChild(postingInput);
        postingBackground.appendChild(postingCompleteButton);
        document.body.appendChild(postingBackground);
        document.querySelector("#postingInput").focus();
    }
}

function postingComplete() {
    const finalClick = confirm("제출하시겠습니까?");
    if (finalClick) {
        const newPostTexting = document.querySelector("#postingInput").value;
        postingButtonToggle(); //input 해제
        const newPostingArray = {
            num: countingPost++,
            text: newPostTexting,
            Date: new Date()
        }
        postingArray.push(newPostingArray);
        console.log(postingArray); //확인용
        localStorage.setItem("postingArray", JSON.stringify(postingArray));
        paintPosts(postingArray);
    }
}

function paintPosts(theArray) {
    const postings = document.querySelector("#postings");
    const newPostingDiv = document.createElement("div");
    newPostingDiv.id = `post ${countingPost++}`;
    const newPostingLine = document.createElement("hr");
    const newPosting = document.createElement("li");
    newPosting.innerText = theArray.text;
    const delButton = document.createElement("button");
    delButton.classList = "delButton";
    delButton.innerText = "X";
    delButton.addEventListener("click", delAll);
    newPosting.appendChild(delButton);
    newPostingDiv.appendChild(newPostingLine);
    newPostingDiv.appendChild(newPosting);
    postings.appendChild(newPostingDiv);
}

function delAll(event){
    const div = event.target.parentElement.parentElement;
    div.remove();
    postingArray = postingArray.filter((post) => parseInt(post.num) != parseInt(div.id));
    localStorage.setItem("postingArray", JSON.stringify(postingArray));
}

const savedPostingArray = localStorage.getItem("postingArray");
if (savedPostingArray) {
    console.log(JSON.parse(savedPostingArray)); //저장확인용
    const parsedPostingArray = JSON.parse(savedPostingArray);
    postingArray = parsedPostingArray;
    parsedPostingArray.forEach(paintPosts);
    countingPost = postingArray.length;
}
