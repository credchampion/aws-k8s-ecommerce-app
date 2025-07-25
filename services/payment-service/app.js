const express = require('express');
const app = express();
const PORT = 3004;

// Middleware to read JSON
app.use(express.json());

// Simple payment history
const payments = [
    {
        id: 1,
        userId: 1,
        amount: 1023,
        status: "completed",
        date: "2024-01-15"
    },
    {
        id: 2,
        userId: 2,
        amount: 129,
        status: "completed",
        date: "2024-01-14"
    }
];

// Get payment history for a user
app.get('/payments/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const userPayments = payments.filter(payment => payment.userId === userId);
    res.json(userPayments);
});

// Process a new payment
app.post('/payments', (req, res) => {
    const { userId, amount } = req.body;

    const newPayment = {
        id: payments.length + 1,
        userId: userId,
        amount: amount,
        status: "completed",
        date: new Date().toISOString().split('T')[0]
    };

    payments.push(newPayment);
    res.json({ message: "Payment successful", payment: newPayment });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Payment service running on port ${PORT}`);
});