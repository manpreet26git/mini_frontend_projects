const back = document.querySelector(".reviews_button-back");
const forward = document.querySelector(".reviews_button-next");
const surprise_me = document.querySelector(".reviews_button-surprise");

const image = document.querySelector(".reviews_main-img");
const name = document.querySelector(".reviews_main-name");
const profession = document.querySelector(".reviews_main-profession");
const review = document.querySelector(".reviews_main-review");

let images = ["person-1.jpeg", "person-2'.jpg"];
let names= ["Susan Smith", "Kathy Path"];
let professions = ["Web Developer", "Intern"]
let reviews = ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid corrupti voluptatum assumenda obcaecati. Velit totam, dolor sit sapiente beatae debitis. Similique sed laboriosam incidunt illo, libero voluptate expedita", "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."];

let i = 0;

function changereview(image, name, profession, review, index){
    image.src = images[index];
    name.textContent = names[index];
    profession.textContent = professions[index];
    review.textContent = reviews[index]; 
}

window.addEventListener("DOMContentLoaded", ()=>{

    changereview(image, name, profession, review, 0);
});

back.addEventListener("click", ()=>{
    i--;
    if(i < 0)i = images.length-1;
    changereview(image, name, profession, review, i);
})

forward.addEventListener("click", ()=>{
    i++;
    if(i >= images.length)i = 0;
    changereview(image, name, profession, review, i);
})

surprise_me.addEventListener("click", ()=>{
    i = Math.floor(Math.random() * (images.length));
    changereview(image, name, profession, review, i);
})