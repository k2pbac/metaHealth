const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const employeeRouter = require("./routes/employees");
const patientRouter = require("./routes/patients");
const clinicsRouter = require("./routes/clinics");
const registeredRouter = require("./routes/registered");
const userAuthenticationRouter = require("./routes/userAuthentication");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const cors = require("cors");

const db = require("./db/index");
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());

const { employeeLogin, patientLogin } = require("./passportConfig");
employeeLogin(passport);
patientLogin(passport);
//************************Employee Login*******************

app.post("/api/employee/login", function (req, res, next) {
  passport.authenticate("employee-local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

//************************Patient Login*******************
app.post("/api/patient/login", function (req, res, next) {
  passport.authenticate("patient-local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

app.use("/", clinicsRouter);
app.use("/", employeeRouter);
app.use("/", patientRouter);
app.use("/", registeredRouter);
app.use("/", userAuthenticationRouter);
module.exports = app;
