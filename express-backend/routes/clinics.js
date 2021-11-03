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


//Get the Clinic Data For A Specific Clinic
router.post("/api/clinics/data", function (req, res, next) {
  const {clinic_id } = req.body;

  db.query(
    `SELECT * FROM clinics
   WHERE clinics.id = ${clinic_id};`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.json(results.rows);
    }
  );
});



// Query To Get All Patients For a Clinic (Patient Medical Recrods Index Page)

router.post("/api/clinics/patient/records", function (req, res, next) {
  const { patient_name, clinic_id } = req.body;
  

  db.query(
    `SELECT DISTINCT patient_accounts.id as id,patient_accounts.first_name as first_name, patient_accounts.last_name as last_name,
    patient_accounts.gender as gender, patient_accounts.date_of_birth as date_of_birth, 
    patient_accounts.address as address, patient_accounts.phone_number as phone_number,
    patient_accounts.email_address as email_address
         FROM patient_accounts 
        JOIN registered ON patient_accounts.id = patient_account_id
        JOIN clinics ON registered.clinic_id = clinics.id
        WHERE (patient_accounts.first_name ILIKE '${patient_name}%') 
        OR (patient_accounts.last_name ILIKE '${patient_name}%')
        AND clinics.id = ${clinic_id}
        ORDER BY patient_accounts.last_name;`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.json(results.rows);
    }
  );
});

// Set Clinic Id For Employee When They Register To A Clinic

router.put("/api/clinics/register/existing", function (req, res, next) {
  const { employee, clinic_id } = req.body;

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

// Get List of Employees for a Clinic

router.post("/api/clinics/employee/list", function (req, res, next) {
  const { clinic_id } = req.body;
  db.query(
    `SELECT *, employee_accounts.id FROM employee_accounts
     JOIN clinics on clinics.id = clinic_id
     WHERE clinic_id = ${clinic_id}
     ORDER by clinic_verified;
    `,
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log("result.rows:", results.rows);
      res.json(results.rows);
    }
  );
});

// Verify Employee
router.put("/api/clinics/employee/verify", function (req, res, next) {
  const { employee_id, clinic_id } = req.body;

  db.query(
  `
  UPDATE employee_accounts 
  SET clinic_verified = TRUE 
  FROM clinics
  WHERE 
  clinic_id = clinics.id 
  AND employee_accounts.id = ${employee_id} 
  AND clinics.id = ${clinic_id};`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.json(results.rows);
    }
  );
});

//Unverify Employee
router.put("/api/clinics/employee/unverify", function (req, res, next) {
  const { employee_id, clinic_id } = req.body;

  db.query(
    `  
    UPDATE employee_accounts 
    SET clinic_verified = FALSE,
    clinic_id = null 
    FROM clinics
    WHERE 
    clinic_id = clinics.id 
    AND employee_accounts.id = ${employee_id} 
    AND clinics.id = ${clinic_id};`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.json(results.rows);
    }
  );
});


module.exports = router;

//TESTING DB QUERIES

// SELECT * FROM patient_accounts
//     JOIN registered ON patient_accounts.id = patient_account_id
//     JOIN clinics ON registered.clinic_id = clinics.id
//     WHERE (patient_accounts.first_name ILIKE '${patient_name}%')
//     OR (patient_accounts.last_name ILIKE '${patient_name}%')
//     AND clinics.id = ${clinic_id}
//     ORDER BY last_name;

// SELECT DISTINCT patient_accounts.id as id,patient_accounts.first_name as first_name, patient_accounts.last_name as last_name,
// patient_accounts.gender as gender, patient_accounts.date_of_birth as date_of_birth,
// patient_accounts.address as address, patient_accounts.phone_number as phone_number,
// patient_accounts.email_address as email_address
//      FROM patient_accounts
//     JOIN registered ON patient_accounts.id = patient_account_id
//     JOIN clinics ON registered.clinic_id = clinics.id
//     WHERE (patient_accounts.first_name ILIKE 'k%')
//     OR (patient_accounts.last_name ILIKE 'k%')
//     AND clinics.id = 5
//     ORDER BY patient_accounts.last_name;

