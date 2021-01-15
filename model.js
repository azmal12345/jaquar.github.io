// navbar 
const btn = document.querySelector("#navbarOpen");
let navList = document.querySelector("#navlist");

btn.addEventListener("click", button);

function button(){
    navList.classList.toggle("active");
}


// pop show 
function pop(){

const modelCarSection = document.getElementById("model_car");
const modelPop1 = document.querySelectorAll("#modelBox1,#modelBox2,#modelBox3,#modelBox4");
const carPopSection = document.querySelectorAll("#carPop, #carPop1,#carPop2, #carPop3");
const closeIcon = document.querySelectorAll("#carPopIcon, #carPopIcon1, #carPopIcon2, #carPopIcon3");

// first card 1
modelPop1[0].addEventListener("click", () => {
    // document.body.style.backgroundColor = "black";
    modelCarSection.style.display = "none";
    carPopSection[0].style.display = "block";
})

closeIcon[0].addEventListener("click", () => {
    modelCarSection.style.display = "block";
    carPopSection[0].style.display = "none";
})

// secound card 2
modelPop1[1].addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    modelCarSection.style.display = "none";
    carPopSection[1].style.display = "block";
})

closeIcon[1].addEventListener("click", () => {
    modelCarSection.style.display = "block";
    carPopSection[1].style.display = "none";
})

// three card 3
modelPop1[2].addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    modelCarSection.style.display = "none";
    carPopSection[2].style.display = "block";
})

closeIcon[2].addEventListener("click", () => {
    modelCarSection.style.display = "block";
    carPopSection[2].style.display = "none";
})

// three card 4
modelPop1[3].addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    modelCarSection.style.display = "none";
    carPopSection[3].style.display = "block";
})

closeIcon[3].addEventListener("click", () => {
    modelCarSection.style.display = "block";
    carPopSection[3].style.display = "none";
})

}

window.addEventListener("DOMContentLoaded", function(){
    pop();
    // incranceCar() function;
    soundContainer();
});



// incranceCar();
function soundContainer(){

const song = new Audio();
document.getElementById("insucraceCar").addEventListener("click", function(){
    song.src = "car.mp3.mp3";
    song.play();
})

document.getElementById("petrol").addEventListener("click", function(){
    song.src = "petrol.mp3.mp3";
    song.play();
})

document.getElementById("tools").addEventListener("click", function(){
    song.src = "fine_car.mp3.mp3";
    song.play();
})

document.getElementById("oil").addEventListener("click", function(){
    song.src = "oil.mp3.mp3";
    song.play();
})

document.getElementById("wheel").addEventListener("click", function(){
    song.src = "wheel.mp3.mp3";
    song.play();
})

document.getElementById("service").addEventListener("click", function(){
    song.src = "service.mp3.mp3";
    song.play();
})
}