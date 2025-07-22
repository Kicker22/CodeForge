// Import Express
const express = require('express');

const app = express();

// establish port
const port = process.env.PORT || 3000;

// Add Middleware 

// Define a route
app.get('/', (req, res) => {
    // This route will dsplay whatever you put in res.send
    res.send(`Hello! from localhost:${port}`);
});

// Start the server
app.listen(port, () => console.log(`listening on http://localhost:${port}`));