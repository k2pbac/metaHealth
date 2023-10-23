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
              `INSERT INTO employee_accounts (first_name, last_name, username, password, gender, phone_number, email_address, avatar, is_doctor)
          VALUES ('${newUser.first_name}', '${newUser.last_name}', '${newUser.username}', '${resultPassword}', '${newUser.gender}', '${newUser.phone_number}', '${newUser.email_address}', '${newUser.avatar}','${newUser.is_doctor}') RETURNING id`,
              (error, results) => {
                if (error) {
                  console.log(error);
                  throw error;
                }
                return res.json({
                  payload: { name: newUser.first_name, id: results.rows[0].id },
                  message: "Successfully registered user",
                });
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
  console.log("registering patient");
  db.query(
    `SELECT count(*) from patient_accounts 
     WHERE username = '${newUser.username}' 
     OR email_address = '${newUser.email_address}'`
  )
    .then((results) => {
      console.log(results);
      if (parseInt(results.rows[0].count) <= 0) {
        console.log("creating new patient");
        const hashedPassword = bcrypt
          .hash(newUser.password, 10)
          .then((resultPassword) => {
            db.query(
              `INSERT INTO patient_accounts (first_name, last_name, username, password, date_of_birth, gender, profile_description, phone_number, email_address, address, avatar, health_card_number, insurance_member_id, insurance_policy_number, insurance_plan_name)
            VALUES ('${newUser.first_name}', '${newUser.last_name}', '${newUser.username}', '${resultPassword}', '${newUser.date_of_birth}', '${newUser.gender}', '${newUser.profile_description}', '${newUser.phone_number}', '${newUser.email_address}', '${newUser.address}', '${newUser.avatar}', '${newUser.health_card_number}', '${newUser.insurance_member_id}', '${newUser.policy_number}', '${newUser.insurance_plan_name}') RETURNING id`,
              (error, results) => {
                if (error) {
                  console.log(error);
                  throw error;
                }
                return res.json({
                  payload: { name: newUser.first_name, id: results.rows[0].id },
                  message: "Successfully registered user",
                });
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
      console.log(err);
      if (err) throw err;
    });
});

//************************Clinic Register*******************

router.post("/api/clinic/register", function (req, res, next) {
  const { newUser } = req.body;

  db.query(
    `INSERT INTO clinics 
    (name,
    address,
    website,
    phone_number,
    avatar,
    clinic_owner_id ,
    ein_number,
    insurance_number,
    tax_id_number) 
    values
    (
    '${newUser.name}',
    '${newUser.address}',
    '${newUser.website}',
    '${newUser.phone_number}',
    '${newUser.avatar}',
    '${newUser.clinic_owner_id}' ,
    '${newUser.ein_number}',
    '${newUser.insurance_number}',
    '${newUser.tax_id_number}'
    )
    `
  )
    .then((results) => {
      return res.json({
        message: "Successfully Registered A Clinic!",
      });
    })
    .catch((err) => {
      if (err) throw err;
    });
});

module.exports = router;
