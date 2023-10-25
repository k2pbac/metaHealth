const express = require("express");
const router = express.Router();
const db = require("../db/index");

/* Get Patients from API. */
router.get("/api/registered", function (req, res, next) {
  db.query("SELECT * FROM registered ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.json(results.rows);
  });
});

module.exports = router;
