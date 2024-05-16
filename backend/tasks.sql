-- Create a database named task_manager
CREATE DATABASE IF NOT EXISTS task_manager;

-- Use the task_manager database
USE task_manager;

-- Create a table named tasks
CREATE TABLE IF NOT EXISTS tasks (
    task_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    status ENUM('TODO', 'IN_PROGRESS', 'DONE'),
    due_date DATE
);
