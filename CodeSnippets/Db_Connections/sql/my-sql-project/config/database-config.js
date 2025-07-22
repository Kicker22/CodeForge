// filepath: /C:/Users/Matt/github/CodeForge/Db_Connections/sql/my-sql-project/config/database-config.js
require('dotenv').config();

module.exports = {
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.NAME
};