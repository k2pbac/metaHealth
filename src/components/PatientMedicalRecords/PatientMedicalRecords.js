import React, { useState } from "react";
import classNames from "classnames"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Form from 'react-bootstrap/Form'

import "components/PatientMedicalRecords/PatientMedicalRecords.scss"


export default function PatientMedicalRecords(props) {

  const {
    patientsList
  } = props;

  const renderPatients = [];

  for (let element in patientsList) {
    renderPatients.push(
      <tr>
        <td>{patientsList[element].first_name}</td>
        <td>{patientsList[element].last_name}</td>
        <td>{patientsList[element].gender}</td>
        <td>{patientsList[element].date_of_birth}</td>
        <td>{patientsList[element].address}</td>
        <td>{patientsList[element].phone_number}</td>
        <td>{patientsList[element].email_address}</td>
        <td><a href="">Add/Edit Record</a></td>
      </tr>
    )
  }


  return (
    <div className="medical-records">
      <Form.Group className="patient-search" controlId="patient-search">
        <Form.Label className="form-label">Patient Name: </Form.Label>
        <Form.Control type="search" placeholder="Search" />
      </Form.Group>
      <div className="table-container">
        <table class="content-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Date of Brith</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>View Patient Record</th>
            </tr>
          </thead>
          <tbody>
            {renderPatients}
          </tbody>
        </table>

      </div>
    </div>

  )
}