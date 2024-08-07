import { Task, renderTasks } from './todo.js';

let tasks = [];

const addTask = () => {
    const newTaskInput = document.getElementById('new-task');
    const newTaskDescription = newTaskInput.value.trim();

    if (newTaskDescription) {
        const newTask = new Task(newTaskDescription);
        tasks = [...tasks, newTask]; 
        renderTasks(tasks);
        newTaskInput.value = '';
    }
};

const toggleTask = (index) => {
    tasks[index].toggle();
    renderTasks(tasks);
};

const removeTask = (index) => {
    tasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)]; 
    renderTasks(tasks);
};


window.addTask = addTask;
window.toggleTask = toggleTask;
window.removeTask = removeTask;