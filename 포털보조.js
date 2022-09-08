let searchLine = document.querySelector("#searchLine");

function toggleMenu(){
    const mainside = document.querySelector("#mainside");
    const menuButton = document.querySelector("#menuButton");
    const sideBar = document.querySelector("#sideBar");
    const loginDiv = document.querySelector("#loginDiv");
    if(mainside.classList.contains("hidden")){
        mainside.classList.remove("hidden");
        menuButton.style.backgroundColor = "white";
        menuButton.style.color = "black";
        menuButton.style.transform = "rotate(-180deg)"
        sideBar.style.backgroundColor = "rgb(105, 191, 225)";
        loginDiv.classList.remove("hidden");
    }
    else{
        mainside.classList.add("hidden");
        menuButton.style.color = "white";
        menuButton.style.backgroundColor = "rgb(105, 191, 225)";
        menuButton.style.transform = "rotate(0deg)"
        sideBar.style.backgroundColor = "rgba(255, 255, 255, 0)";
        loginDiv.classList.add("hidden");
    }
}

