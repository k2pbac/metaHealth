import React, { useState } from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Form from "react-bootstrap/Form";

import "components/PatientMedicalRecords/PatientMedicalRecords.scss";
import { Link } from "react-router-dom";

export default function PatientMedicalRecords(props) {
  const { patientsList, patientName, setPatientName } = props;
  // console.log(patientsList);
  const renderPatients = [];

  // for (let elements in patientsList) {
  //   Object.keys(patientsList).map((element) => (
  //     <tr key={patientsList[element].id}>
  //       <td>{patientsList[element].first_name}</td>
  //       <td>{patientsList[element].last_name}</td>
  //       <td>{patientsList[element].gender}</td>
  //       <td>{patientsList[element].date_of_birth}</td>
  //       <td>{patientsList[element].address}</td>
  //       <td>{patientsList[element].phone_number}</td>
  //       <td>{patientsList[element].email_address}</td>
  //       <td>
  //         <a href="">Add/Edit Record</a>
  //       </td>
  //     </tr>
  //   ));
  // }

  return (
    <div className="medical-records">
      <Form.Group className="patient-search" controlId="patient-search">
        <Form.Label className="form-label">Patient Name: </Form.Label>
        <Form.Control
          onChange={(e) => {
            e.preventDefault();
            setPatientName(e.target.value);
          }}
          autoFocus
          type="search"
          placeholder="Search"
          value={patientName}
        />
      </Form.Group>
      <div className="table-container">
        <table className="content-table scrollable-table">
          <thead>
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Gender</th>
              <th>Date of Brith</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>View Patient Record</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(patientsList).map((element) => (
              <tr key={patientsList[element].id}>
                <td>{patientsList[element].first_name}</td>
                <td>{patientsList[element].last_name}</td>
                <td>{patientsList[element].gender}</td>
                <td>{patientsList[element].date_of_birth}</td>
                <td>{patientsList[element].address}</td>
                <td>{patientsList[element].phone_number}</td>
                <td>{patientsList[element].email_address}</td>
                <td>
                  <Link to={`clinic/patient/${patientsList[element].id}`}>
                    <a href="">Add/Edit Record</a>
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
