const alertClose = document.querySelector("#alert-close");
const closeBtn = document.querySelector("#close-btn");

closeBtn.addEventListener("click",()=>{
    alertClose.style.display = "none";
})