// navbar 
const btn = document.querySelector("#navbarOpen");
let navList = document.querySelector("#navlist");

btn.addEventListener("click", button);

function button(){
    navList.classList.toggle("active");
}

// car Details Information 

setInterval(function(){
    let newDay = new Date();
    const dayDate = document.querySelectorAll("#days,#hours,#mint,#secs");
    
    for(let i = 0; i < dayDate.length; i++){
        dayDate[0].innerHTML = newDay.getDay();
        dayDate[1].innerHTML = newDay.getHours();
        dayDate[2].innerHTML = newDay.getMinutes();
        dayDate[3].innerHTML = newDay.getSeconds();
    }   
}, 1000);

