const pg = require("pg");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || connectionString,
});

client.connect();

module.exports = client;
