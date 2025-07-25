const express = require('express');
const app = express();
const PORT = 3003;

// Middleware to read JSON
app.use(express.json());

// Simple cart data (each user has a cart)
const carts = [
    {
        userId: 1,
        items: [
            { productId: 1, name: "iPhone 15", quantity: 1, price: 999 },
            { productId: 3, name: "Coffee Mug", quantity: 2, price: 12 }
        ]
    },
    {
        userId: 2,
        items: [
            { productId: 2, name: "Nike Shoes", quantity: 1, price: 129 }
        ]
    }
];

// Get cart for a user
app.get('/cart/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const userCart = carts.find(cart => cart.userId === userId);

    if (userCart) {
        res.json(userCart);
    } else {
        res.json({ userId: userId, items: [] });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Cart service running on port ${PORT}`);
});