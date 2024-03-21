// Retrieve tasks and nextId from localStorage
// let taskList = JSON.parse(localStorage.getItem("tasks"));
// let nextId = JSON.parse(localStorage.getItem("nextId"));
let taskList = document.querySelector('#todo-cards')
const titleInput = document.getElementById('task-title-input');
const dateInput = document.getElementById('datepicker');
const descriptionInput = document.getElementById('description-text');




let taskStorage = [];
let tasks = [];

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {
    taskList.innerHTML = '';
    console.log(taskStorage)
    for (let i = 0; i < taskStorage.length; i++) {
        const task = taskStorage[i];
        
        const li = document.createElement('li')
        li.textContent = task;
        
        const h3 = document.createElement('h3')
        h3.textContent = task.taskTitle;
        
        const p1 = document.createElement('p')
        p1.textContent = task.date;
        
        const p2 = document.createElement('p')
        p2.textContent = task.taskDescription;

        const b = document.createElement('button')
        b.textContent = 'Delete';
        
        taskList.append(li)
        li.appendChild(h3)
        li.appendChild(p1)
        li.appendChild(p2)
        li.appendChild(b)
        
    }
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    // const storedTasks = JSON.parse(localStorage.getItem('taskStorage'));

    // if (storedTasks !== null) {
    //     tasks = storedTasks
    // }
    // renderTaskList();
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    
    
    // localStorage.setItem('tasks', JSON.stringify(tasks))

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
function init(){
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks !== null) {
        taskStorage = storedTasks;
    }
    createTaskCard();
    
};

function storeTasks(){
    localStorage.setItem('tasks', JSON.stringify(taskStorage))
    
};

$(document).ready(function () {
    init();
    let submitTask = document.getElementById('submitTask');
    submitTask.addEventListener('click', function(event){
        localStorage.setItem('tasks', JSON.stringify(taskStorage))
        event.preventDefault();

        const taskContent = {
            taskTitle: titleInput.value.trim(),
            date: dateInput.value.trim(),
            taskDescription: descriptionInput.value.trim(),
        };

        if (titleInput.value === '' ||
            dateInput.value === '' ||
            descriptionInput.value === '') {
            return false;
        }
        else{
            taskStorage.push(taskContent)
            console.log(taskStorage)
            console.log(tasks)
            titleInput.value = '';
            dateInput.value = '';
            descriptionInput.value = ''
        }
        
        storeTasks();
        createTaskCard();
    })

    // storeTasks();

    $( "#datepicker" ).datepicker();
});

// function init(){
//     const storedTasks = JSON.parse(localStorage.getItem('taskStorage'));

//     if (storedTasks !== null) {
//         tasks = storedTasks
//         console.log(tasks)
//     }
//     createTaskCard();
    
// };
// init();
