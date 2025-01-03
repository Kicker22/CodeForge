// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.connect(db)
.then (() => console.log("mongo connected"))
.catch(err => console.log(err))
app.use(bodyParser.json())

// Middleware to parse JSON requests
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});