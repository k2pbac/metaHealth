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

  router.get("/api/patient/:id/appointments", (req, res, next) => {
    const { id } = req.params;

    db.query(
      `select clinics.name as clinic_name, clinics.address as clinic_address, appointments.date, patient_accounts.first_name, patient_accounts.last_name, patient_notes
    FROM appointments
    join patient_accounts on patient_accounts.id = appointments.patient_account_id
    join clinics on clinics.id = appointments.clinic_id
    where patient_accounts.id = ${id}
    ORDER BY appointments.date;`,
      (err, results) => {
        if (err) throw err;
        res.json(results.rows);
      }
    );
  });

  router.get("/api/patient/records", (req, res, next) => {
    db.query(
      `SELECT * FROM patient_records
      join appointments on appointment_id = appointments.id
      join employee_accounts on appointments.employee_account_id = employee_accounts.id 
      ORDER By created_at ASC`,
      (error, results) => {
        if (error) {
          throw error;
        }
        res.json(results.rows);
      }
    );
  });

  router.get("/api/patient/medical-records", (req, res, next) => {
    db.query(
      `SELECT updated_at at time zone 'utc' at time zone 'est', *  FROM patient_records 
      ORDER By updated_at `,
      (error, results) => {
        if (error) {
          throw error;
        }
        res.json(results.rows);
      }
    );
  });

  router.put("/api/patient/report", (req, res, next) => {
    const { info, medication, referral, id, patient_id, user } = req.body;
    if (id) {
      db.query(
        `UPDATE patient_records
    SET information = '${info}',
        medication_prescribed = '${medication}',
        referral = '${referral}',
        updated_at = '${new Date().toISOString()}',
        updated_by = '${user}'
    WHERE id = ${id}`,
        (error, results) => {
          if (error) {
            throw error;
          }
          res.json(results.rows);
        }
      );
    } else {
      db.query(
        `INSERT INTO patient_records (information, medication_prescribed, referral, patient_id, appointment_id)
        VALUES ('${info || ""}', '${medication || ""}', '${
          referral || ""
        }', '${patient_id}', '${appointment_id}')`
      );
    }
  });

  router.put("/api/patient/records", (req, res, next) => {
    const { patient_notes, appointment_id } = req.body;

    db.query(
      `UPDATE appointments
    SET patient_notes = '${patient_notes}'
    WHERE appointments.id = ${appointment_id}`,
      (error, results) => {
        if (error) {
          throw error;
        }
        res.json(results.rows);
      }
    );
  });
});

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

router.put("/api/employee/profile", (req, res, next) => {
  const {
    id,
    first_name,
    last_name,
    username,
    avatar,
    phone_number,
    email_address,
  } = req.body;

  db.query(
    `UPDATE employee_accounts 
    SET first_name = '${first_name}',
    last_name = '${last_name}',
    username = '${username}',
    phone_number = '${phone_number}',
    email_address = '${email_address}'
    WHERE employee_accounts.id = ${id}
    `,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.json(results.rows);
    }
  );
});

router.get("/api/registered-patients/:patient_name", function (req, res, next) {
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
});

router.post("/api/patient/book", (req, res, next) => {
  const { date, clinic_id, patient_account_id, employee_account_id, time } =
    req.body;

  // 2015-03-25T12:00:00Z
  let newDate = new Date(date).toLocaleDateString();
  newDate += time < 10 ? ` 0${time}:00:00` : ` ${time}:00:00`;
  // console.log("unformatted:", date + "" + time + ":00:00");
  // console.log("formatted:", newDate);
  db.query(
    `INSERT INTO appointments (date, active, clinic_id, patient_account_id, employee_account_id)
    values ('${newDate}', 'true', '${clinic_id}', ${patient_account_id}, ${employee_account_id} ) RETURNING ID`,
    (error, results) => {
      if (error) {
        throw error;
      }
      db.query(
        `INSERT INTO patient_records (created_at, updated_at, appointment_id, patient_id) 
        values ('${newDate}', '${newDate}', ${results.rows[0].id}, ${patient_account_id} )`,
        (error, results) => {
          if (error) throw error;

          res.json(results.rows);
        }
      );
    }
  );
});

module.exports = router;
