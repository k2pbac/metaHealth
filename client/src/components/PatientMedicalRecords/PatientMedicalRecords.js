import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Form from "react-bootstrap/Form";

import "components/PatientMedicalRecords/PatientMedicalRecords.scss";
import { Link } from "react-router-dom";

import { userServices } from "hooks/userServices";
const { getPatientRecordsForClinic } = userServices;

export default function PatientMedicalRecords(props) {
  const { patientName, setPatientName } = props;
  const [patientList, setPatientList] = useState("");
  const [currentPatient, setCurrentPatient] = useState(patientName);

  const handleChange = async function (e) {
    setCurrentPatient(e.target.value);
    const temp = await getPatientRecordsForClinic(
      e.target.value,
      JSON.parse(localStorage.getItem("user")).user.clinic_id
    );

    setPatientList(temp);
  };

  return (
    <div className="medical-records">
      <Form.Group className="patient-search" controlId="patient-search">
        <Form.Label className="form-label">Patient Name: </Form.Label>
        <Form.Control
          onChange={(e) => {
            handleChange(e);
          }}
          autoFocus
          type="search"
          placeholder="Search"
          value={currentPatient || ""}
          onBlur={(e) => {
            // setPatientList({});
            // setCurrentPatient("");
          }}
        />
      </Form.Group>
      <div className="table-container">
        <table className="content-table scrollable-table">
          <thead>
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>View Patient Record</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(patientList).length !== 0 &&
              Object.keys(patientList).map((element) => (
                <tr key={patientList[element].id}>
                  {/* <tr> */}
                  <td>{patientList[element].first_name}</td>
                  <td>{patientList[element].last_name}</td>
                  <td>{patientList[element].gender}</td>
                  <td>{patientList[element].date_of_birth}</td>
                  <td>{patientList[element].address}</td>
                  <td>{patientList[element].phone_number}</td>
                  <td>{patientList[element].email_address}</td>
                  <td>
                    <Link
                      to={`clinic/patient/record/${patientList[element].id}`}
                    >
                      Add/Edit Record
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
