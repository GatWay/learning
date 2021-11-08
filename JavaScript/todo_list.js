const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
};

function changeStatus(task, status) {
    list[task] = status;
}

function addTask(task) {
    list[task] = "";
}

function deleteTask(task) {
    delete list[task];
}

function showList() {
    
}