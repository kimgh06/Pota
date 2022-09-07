let searchLine = document.querySelector("#searchLine");

function toggleMenu(){
    const menu = document.querySelector("#menu");
    const menuButton = document.querySelector("#menuButton");
    const sideBar = document.querySelector("#sideBar");
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
        menuButton.style.backgroundColor = "white";
        menuButton.style.color = "black";
        menuButton.style.transform = "rotate(-180deg)"
        sideBar.style.backgroundColor = "rgb(105, 191, 225)";
    }
    else{
        menu.classList.add("hidden");
        menuButton.style.color = "white";
        menuButton.style.backgroundColor = "rgb(105, 191, 225)";
        menuButton.style.transform = "rotate(0deg)"
        sideBar.style.backgroundColor = "rgba(255, 255, 255, 0)";
    }
}
