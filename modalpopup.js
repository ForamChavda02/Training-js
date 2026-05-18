const modal = document.getElementById("modal");
const openBtn = document.getElementById("openbtn");
const closeBtn = document.getElementById("closebtn");

modal.style.display = "none";

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function(event){
    if(event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", function(event) {
    if(event.key === "Escape"){
        closeModal();
    }
});