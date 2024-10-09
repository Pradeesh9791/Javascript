
const taskList = document.getElementById('task-list');

const addButton = document.getElementById('add_button');

const taskInput = document.getElementById('task-input');


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }


    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>`;
    
    taskList.appendChild(listItem);
    taskInput.value = '';
}

function handleTaskClick(event) {
    const target = event.target;


    if (target.classList.contains('task-checkbox')) {
        target.parentElement.classList.toggle('completed');
    }


    if (target.classList.contains('delete-btn')) {
        target.parentElement.remove();
    }
}


addButton.addEventListener('click', addTask);


taskList.addEventListener('click', handleTaskClick);
