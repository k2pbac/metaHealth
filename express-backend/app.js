const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const employeeRouter = require("./routes/employees");
const patientRouter = require("./routes/patients");
const clinicsRouter = require("./routes/clinics");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const cors = require("cors");

const db = require("./db/index");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", clinicsRouter);
app.use("/", employeeRouter);
app.use("/", patientRouter);
module.exports = app;
