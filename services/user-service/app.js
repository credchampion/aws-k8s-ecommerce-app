const express = require('express');
const app = express();
const PORT = 3002;

// Middleware to read JSON
app.use(express.json());

// Simple user data
const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Start the server
app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
});