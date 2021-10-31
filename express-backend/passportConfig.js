const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
const db = require("./db/index");

module.exports.employeeLogin = function (passport) {
  passport.use(
    "employee-local",
    new localStrategy((username, password, done) => {
      db.query(
        `SELECT * FROM employee_accounts where username = '${username}'`,
        (error, user) => {
          if (error) {
            throw error;
          }
          bcrypt.compare(password, user.rows[0].password, (err, result) => {
            if (err) throw err;
            if (result === true) {
              return done(null, user.rows[0]);
            } else {
              console.log("password didn't match");
              return done(null, false);
            }
          });
        }
      );
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    db.query(
      `SELECT * FROM employee_accounts where id = ${id}`,
      (error, user) => {
        if (error) {
          throw error;
        }
        const userInformation = {
          username: user.rows[0].username,
        };
        cb(error, userInformation);
      }
    );
  });
};

module.exports.patientLogin = function (passport) {
  passport.use(
    "patient-local",
    new localStrategy((username, password, done) => {
      db.query(
        `SELECT * FROM patient_accounts where username = '${username}'`,
        (error, user) => {
          if (error) {
            throw error;
          }
          console.log(user);
          bcrypt.compare(password, user.rows[0].password, (err, result) => {
            if (err) throw err;
            if (result === true) {
              return done(null, user.rows[0]);
            } else {
              return done(null, false);
            }
          });
        }
      );
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    db.query(
      `SELECT * FROM employee_accounts where id = ${id}`,
      (error, user) => {
        if (error) {
          throw error;
        }
        const userInformation = {
          username: user.rows[0].username,
        };
        cb(error, userInformation);
      }
    );
  });
  passport.deserializeUser((id, cb) => {
    db.query(
      `SELECT * FROM patient_accounts where id = ${id}`,
      (error, user) => {
        if (error) {
          throw error;
        }
        const userInformation = {
          username: user.username,
        };
        cb(error, userInformation);
      }
    );
  });
};
