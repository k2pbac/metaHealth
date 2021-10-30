const express = require("express");
const router = express.Router();
const db = require("../db/index");

router.get("/api/clinics", function (req, res, next) {
  db.query(`SELECT * FROM clinics`, (error, results) => {
    if (error) {
      throw error;
    }
    res.json(results.rows);
  });
});

/* Get Clinics from API. */
router.get("/api/clinics/:clinic_name", function (req, res, next) {
  const { clinic_name } = req.params;

  db.query(
    `SELECT * FROM clinics
  WHERE name ILIKE '${clinic_name}%'
  ORDER BY name;`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.json(results.rows);
    }
  );

  router.get(
    "/api/registered-patients/:clinic_name",
    function (req, res, next) {
      const { clinic_name } = req.params;

      db.query(
        `SELECT *, registered.clinic_id FROM patient_accounts 
        JOIN registered on patient_accounts.id = registered.patient_account_id
        WHERE (first_name ILIKE '${clinic_name}%') 
        OR (last_name ILIKE '${clinic_name}%')
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
