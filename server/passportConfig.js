const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
const db = require("./db/index");
const passport = require("passport");

module.exports.patientLogin = function () {
  passport.use(
    "patient-local",
    new localStrategy((username, password, done) => {
      db.query(
        `SELECT * FROM patient_accounts where username = '${username}'`,
        async (error, user) => {
          if (error) {
            return done(error);
          }
          if (!user.rowCount) {
            return done(null, false, {
              message: "Incorrect username or password",
            });
          }
          await bcrypt.compare(
            password,
            user.rows[0].password,
            (err, result) => {
              if (err) {
                console.log(err);
                return done(err);
              }
              if (result === true) {
                return done(null, user.rows[0]);
              } else {
                return done(null, false);
              }
            }
          );
        }
      );
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    db.query(
      `SELECT * FROM patient_accounts where id = ${id}`,
      (error, user) => {
        if (error) {
          throw error;
        }
        const userInformation = {
          username: "",
        };
        done(error, userInformation);
      }
    );
  });
};

module.exports.employeeLogin = function () {
  passport.use(
    "employee-local",
    new localStrategy((username, password, done) => {
      db.query(
        `SELECT * FROM employee_accounts where username = '${username}'`,
        (error, user) => {
          if (error) {
            return done(error);
          }
          if (!user.rowCount) {
            return done(null, false, { message: "No user found" });
          } else {
            bcrypt.compare(password, user.rows[0].password, (err, result) => {
              if (err) return done(err);
              if (result === true) {
                return done(null, user.rows[0]);
              } else {
                return done(null, false);
              }
            });
          }
        }
      );
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    db.query(
      `SELECT * FROM employee_accounts where id = ${id}`,
      (error, user) => {
        if (error) {
          throw error;
        }
        const userInformation = {
          username: "",
        };
        done(error, userInformation);
      }
    );
  });
};
