const sidebar_toggle = document.querySelector(".sidebar_toggle");
const sidebar = document.querySelector(".sidebar");
const sidebar_header_close = document.querySelector(".sidebar_header-close");

sidebar_toggle.addEventListener("click", ()=>{
    sidebar.classList.toggle("hide");
})

sidebar_header_close.addEventListener("click", ()=>{
    sidebar.classList.add("hide");
})