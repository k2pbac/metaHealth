var express = require("express");
var router = express.Router();
const db = require("../db/index");

/* GET home page. */
router.get("/clinics", function (req, res, next) {
  db.query(
    "SELECT name, address, avatar FROM clinics ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      res.json(results.rows);
    }
  );
});

module.exports = router;
