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

// /* Get Clinics from API. */
// router.get("/api/clinics/:clinic_name", function (req, res, next) {
//   const { clinic_name } = req.params;

//   db.query(
//     `SELECT * FROM clinics
//   WHERE name ILIKE '${clinic_name}%'
//   ORDER BY name;`,
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       res.json(results.rows);
//     }
//   );

//   router.get(
//     "/api/registered-patients/:clinic_name",
//     function (req, res, next) {
//       const { clinic_name } = req.params;

//       db.query(
//         `SELECT *, registered.clinic_id FROM patient_accounts
//         WHERE (first_name ILIKE '${clinic_name}%')
//         OR (last_name ILIKE '${clinic_name}%')
//         ORDER BY last_name;`,
//         (error, results) => {
//           if (error) {
//             throw error;
//           }
//           res.json(results.rows);
//         }
//       );
//     }
//   );
// });

router.put("/api/clinics/register/existing", function (req, res, next) {
  const { employee, clinic_id } = req.body;
  console.log("Employee:", employee);
  console.log("clinic_id:", clinic_id);

  db.query(
    `UPDATE employee_accounts
   SET clinic_id = ${clinic_id}
   WHERE id = ${employee.user.id};`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.json(results.rows);
    }
  );
});

module.exports = router;
