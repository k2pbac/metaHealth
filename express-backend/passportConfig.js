const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
const db = require("./db/index");

module.exports.patientLogin = function (passport) {
  console.log("using ptatient logni");
  passport.use(
    "patient-local",
    new localStrategy((username, password, done) => {
      db.query(
        `SELECT * FROM patient_accounts where username = '${username}'`,
        (error, user) => {
          if (error) {
            console.log(error);
            return error;
          }
          if (!user.rowCount) {
            console.log("no user found");
            return done(null, false, { message: "No user found" });
          } else {
            console.log("comparing password");
            bcrypt.compare(password, user.rows[0].password, (err, result) => {
              if (err) {
                console.log(err);
                return err;
              }
              console.log("result:", result);
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
          if (!user.rowCount) {
            return done(null, false, { message: "No user found" });
          } else {
            console.log(username);
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
