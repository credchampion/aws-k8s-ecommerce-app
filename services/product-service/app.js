const express = require('express');
const app = express();
const PORT = 3001;

// Simple product data
const products = [
    { id: 1, name: "iPhone 15", price: 999 },
    { id: 2, name: "Nike Shoes", price: 129 },
    { id: 3, name: "Coffee Mug", price: 12 }
];

// Get all products
app.get('/products', (req, res) => {
    res.json(products);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Product service running on port ${PORT}`);
});