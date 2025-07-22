const express = require('express');
const connection = require('./config/dbConnection');
const itemsRouter = require('./routes/items');

// This initializes an express app
const app = express();

// Middleware to parse JSON (if needed)
app.use(express.json());

app.use('/', itemsRouter);

// serve static files from the 'public' directory
app.use(express.static('public'));

app.use('/api', require('./routes/items'));


// Set port, listen for requests
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}.`);
});