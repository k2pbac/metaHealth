const express = require("express");
const router = express.Router();
const db = require("../db/index");

router.get("/api/appointments", function (req, res, next) {
  db.query("SELECT * FROM appointments", (error, results) => {
    if (error) {
      throw error;
    }
    const newResults = results.rows.map((row) => ({
      ...row,
      date: new Date(row.date).toLocaleDateString("en-US"),
      time: new Date(row.date).getHours() + 1,
    }));
    console.log(newResults);
    res.json(newResults);
  });
});

module.exports = router;
