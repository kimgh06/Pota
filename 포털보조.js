let searchLine = document.querySelector("#searchLine");
let countingPost = 0;
let postingArray = [];
const main = document.querySelector("#main");

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
    const newPostingSpan = document.createElement("div");
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
    postings.insertBefore(newPostingDiv, postings.firstChild);
    // const div = document.querySelector(theArray.id);
    // postings.insertBefore(div, postings.firstChild);
}

function delAll(event) {
    const div = event.target.parentElement;
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

function searchButtonReactOn(){
     console.log("됨");
}

const searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", search);

const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("mouseover", searchButtonReactOn);

const savedPostingArray = localStorage.getItem("postingArray");
if (savedPostingArray) {
    console.log(JSON.parse(savedPostingArray)); //저장확인용
    const parsedPostingArray = JSON.parse(savedPostingArray);
    postingArray = parsedPostingArray;
    parsedPostingArray.forEach(paintPosts);
    countingPost = postingArray.length;
}
