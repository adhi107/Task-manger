document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div>
            <button class="complete-btn">✔</button>
            <button class="delete-btn">❌</button>
        </div>
    `;

    taskList.appendChild(listItem);

    // Add event listeners for task buttons
    listItem.querySelector('.complete-btn').addEventListener('click', () => toggleComplete(listItem));
    listItem.querySelector('.delete-btn').addEventListener('click', () => deleteTask(listItem));

    // Clear input field after adding the task
    taskInput.value = "";
}

function toggleComplete(taskItem) {
    taskItem.classList.toggle('completed');
}

function deleteTask(taskItem) {
    taskItem.remove();
}
