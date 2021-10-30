const express = require("express");
const router = express.Router();
const db = require("../db/index");

/* Get Clinics from API. */
router.get("/api/clinics", function (req, res, next) {
  db.query("SELECT * FROM clinics ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.json(results.rows);
  });
});

module.exports = router;
