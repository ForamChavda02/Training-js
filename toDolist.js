let tasks = [];

let taskIn = document.getElementById("task");
let taskList = document.getElementById("list");

function showMessage(txt) {
    msg.innerHTML = txt;
    
    setTimeout(() => {
        msg.innerHTML = "";
    }, 2000);
}

function display() {
    taskList.innerHTML = "";
    for(let i = 0; i < tasks.length; i++){
        let li = document.createElement("li");
        li.innerHTML = tasks[i] + "<button onclick='remove(" + i + ")'>delete</button>";
        taskList.appendChild(li);
    }
}

function addTask() {
    let task = taskIn.value.trim();
    tasks.push(task);
    taskIn.value = "";
    display();  
    showMessage("task added");
}

function remove(index) {
    tasks.splice(index, 1);
    display();
    showMessage("task removed");
}

function removeAll() {
    tasks.length = 0;
    display();
    showMessage("all tasks are removed");
}