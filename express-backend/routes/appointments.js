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
      time: new Date(row.date).getHours(),
    }));
    res.json(newResults);
  });
});

router.delete("/api/appointment/:id", (req, res, next) => {
  const { id } = req.params;
  db.query(`DELETE FROM appointments where id = ${id}`, (error, results) => {
    if (error) {
      throw error;
    }

    res.json(results);
  });
});

module.exports = router;
