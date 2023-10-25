import React, { useState } from "react";

import "./PatientDetails.scss";
import { patientReportData } from "./patientReportData";
const PatientDetails = ({ setCreateNewReport, reportData }) => {
  return (
    <div className="border p-4 d-flex flex-column" style={{ height: "700px" }}>
      <div className="mb-5">
        <h3>{reportData.clinic}</h3>
        <p className="w-50 text-start">{reportData.address}</p>
      </div>
      <div className="text-center">
        <h1 className="text-center mb-5">Patient</h1>
        {Object.keys(reportData.patient).map((key) => (
          <p key={key}>
            {typeof reportData.patient[key] !== "number" &&
              reportData.patient[key]}
          </p>
        ))}
        <div className="mt-5">
          <a
            className="create-report-link"
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => {
              setCreateNewReport(true);
            }}
          >
            Create a new report
          </a>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
