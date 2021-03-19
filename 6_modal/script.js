const openmodal = document.querySelector(".modalproject_header-open");
const closemodal = document.querySelector(".modalproject_main-close");
const content = document.querySelector(".modalproject_main");
const model_background = document.querySelector(".modalproject_background");
const header = document.querySelector(".modalproject_header")

openmodal.addEventListener("click", () =>{
    content.classList.toggle("show");
    model_background.classList.toggle("background");
    header.style.zIndex = -1;
    
})

closemodal.addEventListener("click", () =>{
    content.classList.toggle("show");
    model_background.classList.toggle("background");
})

