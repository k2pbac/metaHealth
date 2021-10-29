import React from "react";

import "./PatientDetails.scss";
import { patientReportData } from "./patientReportData";
const PatientDetails = ({ patient }) => {
  return (
    <div className="border p-4 d-flex flex-column" style={{ height: "80vh" }}>
      <div className="mb-5">
        <h3>{patientReportData.clinic}</h3>
        <p className="w-50 text-start">{patientReportData.address}</p>
      </div>
      <div className="text-center">
        <h1 className="text-center mb-5">Patient</h1>
        {Object.keys(patientReportData.patient).map((key) => (
          <p>{patientReportData.patient[key]}</p>
        ))}
      </div>
    </div>
  );
};

export default PatientDetails;
