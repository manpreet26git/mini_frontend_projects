const counter_count = document.querySelector(".counter_count");
const counter_buttons_decrease = document.querySelector(".counter_buttons-decrease");
const counter_buttons_reset = document.querySelector(".counter_buttons-reset");
const counter_buttons_increase = document.querySelector(".counter_buttons-increase");

let count = 0;

counter_buttons_decrease.addEventListener('click', ()=>{
    count--;
    counter_count.textContent = count;
    counter_buttons_decrease.classList.add("selected_button");
    counter_buttons_increase.classList.remove("selected_button");
    counter_buttons_reset.classList.remove("selected_button");
   
})

counter_buttons_increase.addEventListener('click', ()=>{
    count++;
    counter_count.textContent = count;
    counter_buttons_decrease.classList.remove("selected_button");
    counter_buttons_increase.classList.add("selected_button");
    counter_buttons_reset.classList.remove("selected_button");
})

counter_buttons_reset.addEventListener('click', ()=>{
    count = 0;
    counter_count.textContent = count;
    counter_buttons_decrease.classList.remove("selected_button");
    counter_buttons_increase.classList.remove("selected_button");
    counter_buttons_reset.classList.add("selected_button");
})