const button = document.querySelector(".main_content_button");
const main = document.querySelector("main");
let main_content_info = document.querySelector(".main_content_info");

button.addEventListener("click", () => {
    let color = "#";

    for(let i = 0; i < 6; i++){
        color += (Math.floor( (Math.random() * 15)) + 1).toString(16);
    }

    main.style.background = color;
    main_content_info.textContent = "Background Generator: " + color;
    //for(let i = 0; i < 10; i++)
      //  console.log(Math.floor(Math.random() * 16));
})