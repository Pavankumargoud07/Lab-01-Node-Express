
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Route 1: Home
app.get("/", (req, res) => {
    res.status(200).send("Welcome to my Node.js and Express server!");
});

// Route 2: About
app.get("/about", (req, res) => {
    res.status(200).json({
        name: "Pavan Kumar Goud",
        section: "AIDE"
    });
});

// Route 3: Current date and time
app.get("/time", (req, res) => {
    res.status(200).json({
        currentDateTime: new Date().toString()
    });
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).send("404 - Page not found");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});
