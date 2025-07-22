// filepath: /C:/Users/Matt/github/CodeForge/Db_Connections/sql/my-sql-project/server.js
const mysql = require('mysql2');
const express = require('express');
const app = express();
const dbConfig = require('./config/database-config.js');

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.host,
  port: dbConfig.port,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});

// Open the MySQL connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Successfully connected to the database');
});

// Set port, listen for requests
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}.`);
});