// navbar 
const btn = document.querySelector("#navbarOpen");
let navList = document.querySelector("#navlist");

btn.addEventListener("click", button);

function button(){
    navList.classList.toggle("active");
}