const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "onppe_db",
  password: "sept2020*",
  port: 5432,
});

module.exports = {
  query: (text, params , body) => pool.query(text, params , body),
};
