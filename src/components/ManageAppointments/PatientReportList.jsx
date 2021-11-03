import React, { useState, useEffect } from "react";

import "./PatientReportList.scss";
import "./PatientReport";
import { patientReportData } from "./patientReportData";
import PatientReport from "./PatientReport";

const PatientReportList = ({
  createNewReport,
  setCreateNewReport,
  reportData,
  editPatientRecord,
}) => {
  const [reports, setReports] = useState(reportData.reports);
  console.log(reports);
  let getReportIds = {};
  for (let i = 0; i < reportData.reports.length; i++) {
    getReportIds[i] = false;
  }

  const getReportEditing = () => {
    for (let reportIndex in editing) {
      if (editing[reportIndex] === true) {
        return true;
      }
    }
    return false;
  };
  const [editing, setEditing] = useState(getReportIds);

  useEffect(() => {
    if (createNewReport === true) {
      var today = new Date().toLocaleDateString();
      setReports((prev) => [
        {
          created_on: today,
          created_by: "Dr. Sam Henry",
          last_updated: today,
          last_updated_by: "Dr. Sam Henry",
          information: "",
          medication_prescribed: "",
          referral: "",
        },
        ...prev,
      ]);
      setEditing((prev) => {
        let newForm = Object.assign({}, prev);
        newForm[0] = true;
        return newForm;
      });
    }
    setCreateNewReport(() => false);
  }, [createNewReport]);

  return reports.map((report, index) => {
    return (
      <PatientReport
        key={report.id || Math.random(12314)}
        report={report}
        clinic={reportData.clinic}
        patient={reportData.patient}
        editing={editing[index]}
        setEditing={setEditing}
        reportIndex={index}
        deleteReport={() =>
          setReports((prev) => {
            let newArr = prev;
            newArr.splice(index, 1);
            return newArr;
          })
        }
        editPatientRecord={editPatientRecord}
        currentlyEditing={() => getReportEditing()}
      ></PatientReport>
    );
  });
};

export default PatientReportList;
