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
        loginDiv.style.display = 'flex';
        background.classList.remove("hidden");
    }
    else {
        mainside.classList.add("hidden");
        menuButton.style.color = "white";
        menuButton.style.backgroundColor = "rgb(105, 191, 225)";
        menuButton.style.transform = "rotate(0deg)"
        sideBar.style.backgroundColor = "rgba(255, 255, 255, 0)";
        loginDiv.style.display = 'none';
        background.classList.add("hidden");
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
    }
}

function postingComplete(){
    const finalClick =  confirm("제출하시겠습니까?");
    if(finalClick){
        const newPostTexting = document.querySelector("#postingInput").value;
        postingArray.push(JSON.stringify(newPostTexting));
        postingButtonToggle();
        console.log(postingArray); //확인용
        localStorage.setItem("postingArray", postingArray);

        const postings = document.querySelector("#postings");
        const newPostingDiv = document.createElement("div");
        newPostingDiv.id = `post ${countingPost}`;
        const newPostingLine = document.createElement("hr");
        const newPosting = document.createElement("li");
        newPostingDiv.appendChild(newPostingLine);
        newPostingDiv.appendChild(newPosting);
        newPostingDiv.appendChild(newPostTexting);
        countingPost++;
    }
}
