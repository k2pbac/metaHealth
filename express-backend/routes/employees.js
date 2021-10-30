const express = require("express");
const router = express.Router();
const db = require("../db/index");

/* Get Employees from API. */
router.get("/api/employees", function (req, res, next) {
  db.query(
    "SELECT * FROM employee_accounts ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      res.json(results.rows);
    }
  );
});

router.put("/api/employee/register", (req, res, next) => {
  const { newUser } = req.body;
  db.query(
    `INSERT INTO employee_accounts (first_name, last_name, username, password, gender, phone_number, email_address, is_doctor)
    VALUES ('${newUser.first_name}', '${newUser.last_name}', '${newUser.username}', '${newUser.password}', '${newUser.gender}', '${newUser.phone_number}', '${newUser.email_address}', '${newUser.is_doctor}')`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.json(results.rows);
    }
  );
});

module.exports = router;

// id SERIAL PRIMARY KEY NOT NULL,
//   first_name VARCHAR(255) NOT NULL,
//   last_name VARCHAR(255) NOT NULL,
//   username VARCHAR(255) NOT NULL,
//   password TEXT NOT NULL,
//   gender VARCHAR(255) DEFAULT NULL,
//   phone_number VARCHAR(255) NOT NULL,
//   email_address VARCHAR(255) NOT NULL,
//   avatar VARCHAR(255) DEFAULT NULL,
//   is_doctor BOOLEAN DEFAULT FALSE,
//   clinic_id INTEGER REFERENCES clinics(id)
