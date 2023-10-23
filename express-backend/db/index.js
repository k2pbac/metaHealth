const pg = require("pg");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
let connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;
// if ((process.env.NODE_ENV = "production")) {
//   connectionString = process.env.DATABASE_URL;
// }
const client = new pg.Client({
  connectionString: connectionString || process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = client;
