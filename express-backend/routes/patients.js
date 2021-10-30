const express = require("express");
const router = express.Router();
const db = require("../db/index");

/* Get Patients from API. */
router.get("/api/patients", function (req, res, next) {
  db.query(
    "SELECT * FROM patient_accounts ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      res.json(results.rows);
    }
  );

  router.get(
    "/api/registered-patients/:patient_name",
    function (req, res, next) {
      const { patient_name } = req.params;

      db.query(
        `SELECT *, registered.clinic_id FROM patient_accounts 
        JOIN registered on patient_accounts.id = registered.patient_account_id
        WHERE (first_name ILIKE '${patient_name}%') 
        OR (last_name ILIKE '${patient_name}%')
        ORDER BY last_name;`,
        (error, results) => {
          if (error) {
            throw error;
          }
          console.log(results.rows);
          res.json(results.rows);
        }
      );
    }
  );
});

module.exports = router;
// SELECT * FROM patient_accounts
//       JOIN registered on patient_accounts.id = registered.patient_account_id
//       WHERE (first_name LIKE UPPER('k%'))
//       OR (first_name LIKE LOWER('k%'))
//       OR (last_name LIKE UPPER('k%'))
//       OR (last_name LIKE LOWER('k%'))
//       ORDER BY last_name;
