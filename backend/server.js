const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create connection to MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'task_manager'
});

// Connect to MySQL database
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle creating a new task
app.post('/tasks', (req, res) => {
    // Insert new task into database
});

// Endpoint to handle updating an existing task
app.put('/tasks/:taskId', (req, res) => {
    // Update task in database
});

// Endpoint to handle deleting a task
app.delete('/tasks/:taskId', (req, res) => {
    // Delete task from database
});

// Endpoint to handle listing all tasks
app.get('/tasks', (req, res) => {
    // Retrieve all tasks from database
});

// Endpoint to handle filtering tasks by status
app.get('/tasks/status/:status', (req, res) => {
    // Retrieve tasks filtered by status from database
});

// Endpoint to handle filtering tasks by due date
app.get('/tasks/due/:dueDate', (req, res) => {
    // Retrieve tasks filtered by due date from database
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
