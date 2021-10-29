var express = require("express");
var router = express.Router();
const db = require("../db/index");

/* GET home page. */
router.get("/", function (req, res, next) {
  db.query(
    "SELECT * FROM patient_accounts ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      res.json(results.rows);
    }
  );

  // res.render("index", { title: "Express" });
});

module.exports = router;
