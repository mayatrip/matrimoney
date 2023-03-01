## Setup

### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).
- in the client project folder, run `npm install react-router-dom` to install React Router for the project

### Database Prep

- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=matrimoney
  DB_PASS=YOURPASSWORD
```
- To change the initial db setup in mysql, look at ./model/init_db.sql
- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create a table called 'income' in your database.

### Development

- Run `npm start` in project directory to start the Express server on port 5000
- In another terminal, do `cd client` and run `npm start` to start the client in development mode with hot reloading in port 3000.