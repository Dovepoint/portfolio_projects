// Create a new task
function createTask(newTask) {
    return fetch('/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to create task');
        }
        return response.json();
    });
}

// Update an existing task
function updateTask(taskId, updatedTask) {
    return fetch(`/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update task');
        }
        return response.json();
    });
}

// Delete a task
function deleteTask(taskId) {
    return fetch(`/tasks/${taskId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete task');
        }
        return response.json();
    });
}

// List all tasks
function listTasks() {
    return fetch('/tasks')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to list tasks');
        }
        return response.json();
    });
}

// Filter tasks by status
function filterTasksByStatus(status) {
    return fetch(`/tasks/status/${status}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to filter tasks by status');
        }
        return response.json();
    });
}

// Filter tasks by due date
function filterTasksByDueDate(dueDate) {
    return fetch(`/tasks/due/${dueDate}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to filter tasks by due date');
        }
        return response.json();
    });
}
