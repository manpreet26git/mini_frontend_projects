const nav_links = document.querySelector(".nav_links");
let nav_main_button = document.querySelector(".nav_main_button");

nav_main_button.addEventListener("click", ()=>{
    
    nav_links.classList.toggle("show-links");
    
});