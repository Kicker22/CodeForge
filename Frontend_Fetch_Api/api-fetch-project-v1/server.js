// Import Express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// establish port
const port = process.env.PORT || 3000;

// Add Middleware
app.use(bodyParser.json());
app.use(cors());

// Define a route
app.get('/', (req, res) => {
    // This route will display whatever you put in res.send
    res.send(`Hello! from localhost:${port}`);
});

// Define another route
app.get('/api/data', (req, res) => {
    // This route will send some JSON data
    res.json({ message: 'Hello from the API route!' });
});

// Start the server
app.listen(port, () => console.log(`listening on http://localhost:${port}`));