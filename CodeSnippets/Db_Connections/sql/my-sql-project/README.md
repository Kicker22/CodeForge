# My SQL Project

This project is designed to demonstrate basic SQL operations and database setup. It includes example queries and scripts for setting up a database schema.

## Project Structure

```
my-sql-project
├── src
│   ├── queries
│   │   └── example-query.sql
│   └── scripts
│       └── setup.sql
├── config
│   └── database-config.json
├── README.md
└── .gitignore
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-sql-project
   ```

2. Configure the database connection:
   - Open `config/database-config.json` and update the connection parameters (host, port, user, password, database name) as needed.

3. Set up the database schema:
   - Run the setup script located in `src/scripts/setup.sql` to create the necessary tables and insert initial data.

## Usage Examples

- To execute the example query, run the SQL commands in `src/queries/example-query.sql` against your configured database.

## License

This project is licensed under the MIT License.