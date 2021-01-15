// navbar 
const btn = document.querySelector("#navbarOpen");
let navList = document.querySelector("#navlist");

btn.addEventListener("click", button);

function button(){
    navList.classList.toggle("active");
}

// car image color chnage 
const carContainer = () => {
 let maineCar = document.getElementById("jaquarCar");
let carImgAll = document.querySelectorAll(".carColorImg");

carImgAll[0].addEventListener("click", function(){
    maineCar.setAttribute("src", "jaquar1.png.png")
})
carImgAll[1].addEventListener("click", function(){
    maineCar.setAttribute("src", "jaquar2.png.png")
})
carImgAll[2].addEventListener("click", function(){
    maineCar.setAttribute("src", "jaquar.png.png")
})
carImgAll[3].addEventListener("click", function(){
    maineCar.setAttribute("src", "jaquar3.png.png")
})
carImgAll[4].addEventListener("click", function(){
    maineCar.setAttribute("src", "jaquar4.png.png")
})
}

carContainer();

let textimonialArray = [
    {
        id: 1,
        img: "https://media-exp1.licdn.com/dms/image/C5603AQFitnNqw7svZA/profile-displayphoto-shrink_400_400/0/1602580496370?e=1611792000&v=beta&t=As0rcHMqO7jWcJnPLfzMbQLrne8wvo_4HxGeTizRdyw",
        name: "MD AZMAL ALI",
        job: "Web Developer",
        text: "Just purchased my first vehicle from Jon. He listened to what I was looking for and helped me choose the right car for me, a beautiful BMW 5 Series. I would (and already have) recommend him to people I know. I will be a return customer, for sure!"
    },

    {
        id: 2,
        img: "https://scontent.fdel11-1.fna.fbcdn.net/v/t1.0-0/p600x600/83481975_1277304422469349_8732166630190088192_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=CMbdoafH2CQAX-Q3eYr&_nc_ht=scontent.fdel11-1.fna&tp=6&oh=f49691597ff5bfddf9dc55e990d05eb4&oe=5FDFF58B",
        name: "Rohit Singh",
        job: "Car Manufacturers",
        text: "I enjoyed working with Jon on my car purchase and appreciate his candid no-pressure style. He's a car guy and relates with the auto enthusiast in all of us!"
    },

    {
        id: 3,
        img: "https://scontent.fdel11-2.fna.fbcdn.net/v/t1.0-9/61106225_2276997629228832_5242245074984632320_n.jpg?_nc_cat=108&ccb=2&_nc_sid=174925&_nc_ohc=5FyZdWfxAdYAX-zuLWc&_nc_ht=scontent.fdel11-2.fna&oh=34d49fbce8d3b51533adc45fdd30f109&oe=5FDEFD09",
        name: "Naresh Mehara",
        job: "Car Dealers",
        text: "I could not be happier with my vehicle or the purchase process. I spent many months looking elsewhere and at Auto Source before I bought from Jon. I have also brought three more sales to Jon and his staff. I plan on replacing my other vehicle at Auto Source soon."
    },

    {
        id: 4,
        img: "https://scontent.fdel11-1.fna.fbcdn.net/v/t1.0-9/106274346_969258033509521_709209684143515779_o.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_ohc=jG2LTDuvUqsAX_E8ns3&_nc_ht=scontent.fdel11-1.fna&oh=3d11e29f089026dfdaab90137a5e95e2&oe=5FE084E7",
        name: "Pawan Kumar",
        job: "Car Shop",
        text: "I live in Lexington KY and am a very satisfied customer of Jon Kutsch and Autosource. The next time I buy a car I hope to do business with Autosource again. The Audi I bought was every bit as clean as Jon said it would be. Jim Clemons 859-268-5463"
    },

    {
        id: 5,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPoMz4NXoAf7_bD_7kAWTbkrx7cEbCWBGaw&usqp=CAU",
        name: "Rafeh Qazi",
        job: "Clever Programmer",
        text: "Great people to work with. Jon proved to be very patient while my wife and I procrastinated. I have already had one friend buy from John and have two others talking to him now."
    }
]

const imgPreson = document.getElementById("img_person");
const name = document.getElementById("name");
const job = document.getElementById("job");
const text = document.getElementById("text");

const leftBtn = document.querySelector(".left_btn");
const rightBtn = document.querySelector(".right_btn");
const buttonRandom = document.querySelector(".random");

let currentItemList = 0;

window.addEventListener("DOMContentLoaded", () => {
    listItemPreson();
    carDublecatShow();
})

const listItemPreson = () => {
    const itemList = textimonialArray[currentItemList];
    imgPreson.src = itemList.img;
    name.textContent = itemList.name;
    job.textContent = itemList.job;
    text.textContent = itemList.text;
}

leftBtn.addEventListener("click", function(){
    currentItemList++;
    if(currentItemList > textimonialArray.length - 1){
        currentItemList = 0;
    }
    listItemPreson();
})

rightBtn.addEventListener("click", function(){
    currentItemList--;
    if(currentItemList < 0){
        currentItemList = textimonialArray.length - 1;
    }
    listItemPreson();
})

buttonRandom.addEventListener("click", function(){
    currentItemList = Math.floor(Math.random() * textimonialArray.length);
    listItemPreson();
})


// car dublecat show 
function carDublecatShow(){

const aboutCar = document.querySelector("#aboutCar");
const aboutCar1 = document.querySelector("#aboutCar1");

aboutCar.addEventListener("mouseover", function(){
    document.querySelector(".aboutCarDetails").setAttribute("src", "aboutCar2.png.png");
})

aboutCar.addEventListener("mouseout", function(){
    document.querySelector(".aboutCarDetails").setAttribute("src", "aboutCar.png.png");
})

aboutCar1.addEventListener("mouseover", function(){
    document.querySelector(".aboutCarDetails1").setAttribute("src", "aboutCar.png.png");
})

aboutCar1.addEventListener("mouseout", function(){
    document.querySelector(".aboutCarDetails1").setAttribute("src", "aboutCar2.png.png");
})

}


// card slier show with icon 
// const showCard1 = document.querySelector(".card");

// showCard1.addEventListener("mouseover", function(){
//     document.querySelector(".cardShow").classList.add("showCardDiv");
// })

// showCard1.addEventListener("mouseout", function(){
//     document.querySelector(".cardShow").classList.remove("showCardDiv");
// })

// model container start 

const modelBox = document.querySelectorAll(".model_box");

modelBox.forEach( (btn) => {
    btn.addEventListener("click", () => {
        console.log("Hello Wolrd");
    })
})

const scrollTop = document.querySelector(".iconSliderTop");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 150){
        scrollTop.classList.add("active");
    }else{
        scrollTop.classList.remove("active");
    }
});