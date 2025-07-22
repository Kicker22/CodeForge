// these arethe modules we'll need
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const main = require('./src/index');  // Assuming main() fetches the API data

// Create an instance of express which will be our server 
const app = express();

// Establish port
const port = process.env.PORT || 3000;

// Add Middleware
app.use(bodyParser.json());
app.use(cors());

// Define a route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Define another route that fetches data from the API
// and then sends it to the browser
app.get('/api/data', async (req, res) => {
    // we use try and catch to handle any errors that might occur
    // it works by trying to execute the code in the try block first then if an error occurs -
    // it will be caught in the catch block giving us a chance to handle it
    // this is very important for debugging and ensuring our application doesn't crash
    try {
        const response = await main();
        // Send JSON to browser
        res.json(response);  
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Start the server
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
