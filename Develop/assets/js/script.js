let nextId = JSON.parse(localStorage.getItem("nextId"));
let taskList = document.querySelector('#todo-cards')
let inProgressList = document.querySelector('#in-progress-cards')
let doneList = document.querySelector('#done-cards')
const titleInput = document.getElementById('task-title-input');
const dateInput = document.getElementById('datepicker');
const descriptionInput = document.getElementById('description-text');




let taskStorage = [];
let taskId = [];

// Todo: create a function to generate a unique task id
function generateTaskId() {
 const characters = 'ABCDEFGHHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
 let taskId = 'A';
 for (let i = 0; i < 6; i++) {
    taskId += characters.charAt(Math.floor(Math.random() * characters.length));
    
 }
 taskId++
 return taskId;


}

// Todo: create a function to create a task card
// create a singular card from a task object
function createTaskCard(task) {
    taskList.innerHTML = '';
    inProgressList.innerHTML = '';
    doneList.innerHTML = '';
    // console.log(taskStorage)
    for (let i = 0; i < taskStorage.length; i++) {
        const task = taskStorage[i];
        
        const div = document.createElement('div')
        div.setAttribute('task-button', i);
        div.id = generateTaskId();
        div.classList.add('ui-state-default')

        const h3 = document.createElement('h3')
        h3.textContent = task.taskTitle;
        
        const p1 = document.createElement('p')
        p1.textContent = task.taskDescription;
        
        const p2 = document.createElement('p')
        p2.textContent = task.date;

        const b = document.createElement('button')
        b.textContent = 'Delete';
        
        taskList.append(div)
        div.appendChild(h3)
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(b)
    }
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    // const taskLister = document.getElementById('#todo-cards');
    // const taskListItems = taskLister.children;
    // console.log(taskListItems);
   
    // $( function() {
    //     $( "#todo-cards, #in-progress-cards, #done-cards" ).draggable({
    //         revert: 'invalid',
    //         snap: '.connectedSortable',
    //         stack: '#todo-cards'
    //     });
    //   } );
   
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
}

$(taskList).on('click', function handleDeleteTask(event){
    event.preventDefault();
    const element = event.target;

    if (element.matches('button') === true) {
        const index = element.parentElement.getAttribute('task-button');
        taskStorage.splice(index, 1);

        storeTasks();
        createTaskCard();
    }
});

$(inProgressList).on('click', function handleDeleteTask(event){
    event.preventDefault();
    const element = event.target;

    if (element.matches('button') === true) {
        const index = element.parentElement.getAttribute('task-button');
        taskStorage.splice(index, 1);

        storeTasks();
        createTaskCard();
    }
});

$(doneList).on('click', function handleDeleteTask(event){
    event.preventDefault();
    const element = event.target;

    if (element.matches('button') === true) {
        const index = element.parentElement.getAttribute('task-button');
        taskStorage.splice(index, 1);

        storeTasks();
        createTaskCard();
    }
});
// Todo: create a function to handle dropping a task into a new status lane
$(function handleDrop() {
    $( "#todo-cards, #in-progress-cards, #done-cards" ).sortable({
        connectWith: ".connectedSortable",
        update: function(event, ui){}
    }).disableSelection();
});


// Todo: when the page loads, render the task list+, ?add event listeners?, make lanes droppable+, and make the due date field a date picker+
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



$(function () {
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
            titleInput.value = '';
            dateInput.value = '';
            descriptionInput.value = ''
        }
        
        storeTasks();
        createTaskCard();
        renderTaskList();
        
    })

    $( "#datepicker" ).datepicker({
        changeMonth: true,
        changeYear: true,
    });
});
