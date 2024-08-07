export class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }

    toggle() {
        this.completed = !this.completed;
    }
}

export const renderTasks = (tasks) => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span style="text-decoration: ${task.completed ? 'line-through' : 'none'};">
                ${task.description}
            </span>
            <button onclick="toggleTask(${index})">Toggle</button>
            <button onclick="removeTask(${index})">Remove</button>
        `;
        taskList.appendChild(taskItem);
    });
};