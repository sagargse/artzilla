const alertClose = document.querySelector("#alert-close");
const closeBtn = document.querySelector("#close-btn");

closeBtn.addEventListener("click",()=>{
    alertClose.style.display = "none";
})

const card = document.getElementById("card-dismiss");
const dismissButton = document.querySelector(".card-dismiss-icon");

dismissButton.addEventListener("click", () => {
  card.style.display = "none";
});