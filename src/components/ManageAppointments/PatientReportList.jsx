import React, { useState, useEffect } from "react";

import "./PatientReportList.scss";
import "./PatientReport";
import { patientReportData } from "./patientReportData";
import PatientReport from "./PatientReport";

const PatientReportList = ({ createNewReport, setCreateNewReport }) => {
  const [reports, setReports] = useState(patientReportData.reports);
  let newReports;
  useEffect(() => {
    if (createNewReport === true) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      var today = new Date(),
        date =
          monthNames[today.getMonth() + 1] +
          " " +
          today.getDate() +
          ", " +
          today.getFullYear();
      setReports((prev) => [
        {
          created_on: date,
          created_by: "Dr. Sam Henry",
          last_updated: date,
          last_updated_by: "Dr. Sam Henry",
          information: "",
          medication_prescribed: "",
          referral: "",
        },
        ...prev,
      ]);
    }
    setCreateNewReport(() => false);
  }, [createNewReport]);

  return reports.map((report) => (
    <PatientReport
      report={report}
      clinic={patientReportData.clinic}
      patient={patientReportData.patient}
    ></PatientReport>
  ));
};

export default PatientReportList;
