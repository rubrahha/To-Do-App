// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        saveTasksToLocalStorage(taskText);
        taskInput.value = "";
    }
}

// Function to save tasks to local storage
function saveTasksToLocalStorage(taskText) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(function(taskText) {
        var li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
    });
}

// Load tasks from local storage when the page loads
window.onload = function() {
    loadTasksFromLocalStorage();
};
