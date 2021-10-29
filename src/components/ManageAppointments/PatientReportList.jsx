import React from "react";

import "./PatientReportList.scss";
import "./PatientReport";
import { patientReportData } from "./patientReportData";
import PatientReport from "./PatientReport";

const PatientReportList = (props) => {
  return patientReportData.reports.map((report) => (
    <PatientReport
      report={report}
      clinic={patientReportData.clinic}
      patient={patientReportData.patient}
    ></PatientReport>
  ));
};

export default PatientReportList;
