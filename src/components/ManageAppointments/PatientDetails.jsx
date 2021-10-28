import React from "react";

import "./PatientDetails.scss";
import { patientReport } from "./PatientReport";
const PatientDetails = ({ patient }) => {
  return (
    <div className="border p-4 w-25 d-flex flex-column">
      <div className="mb-5">
        <h3>{patientReport.clinic}</h3>
        <p className="w-50 text-start">{patientReport.address}</p>
      </div>
      <div className="text-center">
        <h1 className="text-center mb-5">Patient</h1>
        {Object.keys(patientReport.patient).map((key) => (
          <p>{patientReport.patient[key]}</p>
        ))}
      </div>
    </div>
  );
};

export default PatientDetails;
