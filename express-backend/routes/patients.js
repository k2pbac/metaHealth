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

  router.put("/api/patient/profile", (req, res, next) => {
    const {
      first_name,
      last_name,
      username,
      date_of_birth,
      profile_description,
      phone_number,
      email_address,
      address,
      insurance_member_id,
      insurance_policy_number = 12344234,
      insurance_plan_name,
      id,
    } = req.body;

    db.query(
      `UPDATE patient_accounts 
    SET first_name = '${first_name}',
    last_name = '${last_name}',
    username = '${username}',
    date_of_birth = '${date_of_birth}',
    profile_description = '${profile_description}',
    phone_number = '${phone_number}',
    email_address = '${email_address}',
    address = '${address}',
    insurance_member_id = '${insurance_member_id}',
    insurance_policy_number = '1234543534',
    insurance_plan_name = '${insurance_plan_name}'
    WHERE patient_accounts.id = ${id}
    `,
      (error, results) => {
        if (error) {
          throw error;
        }
        res.json(results.rows);
      }
    );
  });

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
