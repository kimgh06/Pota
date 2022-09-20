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

function postingButtonToggle() {
    if (document.getElementById("postingForm")) {
        document.getElementById("postingForm").remove();
        document.querySelector("#writing").innerText = "글쓰기";
    }
    else {
        document.querySelector("#writing").innerText = "안쓰기";
        const postingForm = document.createElement('form');
        postingForm.id = "postingForm";
        const postingInput = document.createElement('input');
        postingInput.type = 'text';
        postingInput.placeholder = "입력하기";
        postingInput.id = "postingInput";
        postingInput.maxLength = '100';
        const postingCompleteButton = document.createElement('button');
        postingCompleteButton.innerText = "완료";
        postingCompleteButton.id = "postingCompleteButton";
        postingForm.addEventListener("submit", postingComplete);
        postingForm.appendChild(postingInput);
        postingForm.appendChild(postingCompleteButton);
        document.body.appendChild(postingForm);
        document.querySelector("#postingInput").focus();
        document.querySelector("#postingInput").required = true;
    }
}

function postingComplete(event) {
    event.preventDefault();
    const finalClick = confirm("제출하시겠습니까?");
    const newPostTexting = document.querySelector("#postingInput").value;
    if (finalClick) {
        postingButtonToggle(); //input 해제
        const newPostingArray = {
            id: Date.now(),
            text: newPostTexting,
        }
        postingArray.push(newPostingArray);
        console.log(postingArray); //확인용
        localStorage.setItem("postingArray", JSON.stringify(postingArray));
        paintPosts(newPostingArray);
    }
}

function paintPosts(theArray) {
    const postings = document.querySelector("#postings");
    const newPostingDiv = document.createElement("div");
    newPostingDiv.id = theArray.id;
    newPostingDiv.className = "post";
    newPostingDiv.style.position = "relative";
    const newPostingLine = document.createElement("hr");
    const newPosting = document.createElement("li");
    const newPostingSpan = document.createElement("span");
    newPostingSpan.className = "postingSpan";
    newPostingSpan.innerText = theArray.text;
    const delButton = document.createElement("button");
    delButton.classList = "delButton";
    delButton.innerText = "X";
    delButton.addEventListener("click", delAll);
    newPosting.appendChild(newPostingSpan);
    newPostingDiv.appendChild(newPostingLine);
    newPostingDiv.appendChild(newPosting);
    newPostingDiv.appendChild(delButton);
    postings.appendChild(newPostingDiv);
}

function delAll(event) {
    const div = event.target.parentElement.parentElement;
    div.remove();
    postingArray = postingArray.filter((post) => parseInt(post.id) != parseInt(div.id));
    localStorage.setItem("postingArray", JSON.stringify(postingArray));
}

function search(event){
    event.preventDefault();
    let on = 0;
    const toSearchText = document.querySelector("#searchLine").value.toLowerCase();
    const post = document.getElementsByClassName("post");
    for(let i = 0; i<post.length;i++){
        const posting = post[i].getElementsByClassName("postingSpan");
        if(posting[0].innerHTML.toLowerCase().includes(toSearchText)){
            post[i].style.display = "flex";
            post[i].style.display = "block";
            const postingId = post[i].id;
            console.log(postingId);
            on = 1;
        }
        else
            post[i].style.display = "none";
    }
    if(!on)
        console.log("없");
}

const searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", search)

const savedPostingArray = localStorage.getItem("postingArray");
if (savedPostingArray) {
    console.log(JSON.parse(savedPostingArray)); //저장확인용
    const parsedPostingArray = JSON.parse(savedPostingArray);
    postingArray = parsedPostingArray;
    parsedPostingArray.forEach(paintPosts);
    countingPost = postingArray.length;
}
