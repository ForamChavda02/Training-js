document.getElementById("btnAdd").addEventListener("click", increaseCount);
document.getElementById("btnDecrease").addEventListener("click", decreaseCount);
document.getElementById("btnReset").addEventListener("click", resetCount);
document.getElementById("btnsave").addEventListener("click", saveCount);
document.getElementById("btnLoad").addEventListener("click", loadCount);

let msg = document.getElementById("message");

function displayMessage(txt) {
    msg.innerHTML = txt;

    setTimeout(() => {
        msg.innerHTML = "";
    }, 2000);
}

let count = 0;

function updateCount() {
    document.getElementById("count").innerHTML = count;
}

function increaseCount() {
    count ++;
    updateCount();
}

function decreaseCount() {
    count --;
    updateCount();
}

function resetCount() {
    count = 0;
    updateCount();
}

function saveCount() {
    localStorage.setItem("count", count);
    displayMessage("saved");
}

function loadCount() {
    let saved = localStorage.getItem("count");

    if(saved != null) {
        count = Number(saved);
        displayMessage("loaded");
    }
    updateCount();
}