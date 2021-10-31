const express = require("express");
const router = express.Router();
const db = require("../db/index");
const bcrypt = require("bcryptjs");

//************************Employee Register*******************
router.post("/api/employee/register", (req, res, next) => {
  const { newUser } = req.body;
  db.query(
    `SELECT count(*) from employee_accounts 
     WHERE username = '${newUser.username}'
     OR email_address ='${newUser.email_address}'`
  )
    .then((results) => {
      if (parseInt(results.rows[0].count) <= 0) {
        const hashedPassword = bcrypt
          .hash(newUser.password, 10)
          .then((resultPassword) => {
            db.query(
              `INSERT INTO employee_accounts (first_name, last_name, username, password, gender, phone_number, email_address, is_doctor)
          VALUES ('${newUser.first_name}', '${newUser.last_name}', '${newUser.username}', '${resultPassword}', '${newUser.gender}', '${newUser.phone_number}', '${newUser.email_address}', '${newUser.is_doctor}')`,
              (error, results) => {
                if (error) {
                  throw error;
                }
                return res.json(results.rows);
              }
            );
          });
      } else {
        return res.json({
          message: "Username and/or Email Address is already taken!",
        });
      }
    })
    .catch((err) => {
      if (err) throw err;
    });
});

//************************Patient Register*******************
router.post("/api/patient/register", function (req, res, next) {
  const { newUser } = req.body;

  db.query(
    `SELECT count(*) from patient_accounts 
     WHERE username = '${newUser.username}' 
     OR email_address = '${newUser.email_address}'`
  )
    .then((results) => {
      if (parseInt(results.rows[0].count) <= 0) {
        const hashedPassword = bcrypt
          .hash(newUser.password, 10)
          .then((resultPassword) => {
            db.query(
              `INSERT INTO patient_accounts (first_name, last_name, username, password, date_of_birth, gender, profile_description, phone_number, email_address, address, health_card_number, insurance_member_id, insurance_policy_number, insurance_plan_name)
            VALUES ('${newUser.first_name}', '${newUser.last_name}', '${newUser.username}', '${resultPassword}', '${newUser.date_of_birth}', '${newUser.gender}', '${newUser.profile_description}', '${newUser.phone_number}', '${newUser.email_address}', '${newUser.address}', '${newUser.health_card_number}', '${newUser.insurance_member_id}', '${newUser.policy_number}', '${newUser.insurance_plan_name}')`,
              (error, results) => {
                if (error) {
                  throw error;
                }
                res.json(results.rows);
              }
            );
          });
      } else {
        return res.json({
          message: "Username and/or Email Address is already taken!",
        });
      }
    })
    .catch((err) => {
      if (err) throw err;
    });
});

module.exports = router;
