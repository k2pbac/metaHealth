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

module.exports = router;
