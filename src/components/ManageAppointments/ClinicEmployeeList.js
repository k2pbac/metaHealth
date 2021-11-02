import React, { useState } from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
// import FadeIn from "react-fade-in";
// import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import "components/ManageAppointments/ClinicEmployeeList.scss";

export default function ClinicEmployeeList(props) {
  const { employeeList } = props;

  const onAccept= function(){

  }

  const onReject= function(){

  }

  return (
    <div className="employee-list-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email Address</th>
            <th>Status</th>
            <th>Acceptance</th>
          </tr>
        </thead>
        <tbody>
          {(Object.keys(employeeList).map((element) => (
            <tr key={employeeList[element].id}>
              <td>{employeeList[element].first_name}</td>
              <td>{employeeList[element].last_name}</td>
              <td>{employeeList[element].phone_number}</td>
              <td>{employeeList[element].email_address}</td>
              <td>{employeeList[element].clinic_verified ? "Verified" : "Unverified"}</td>
              <td>
                <Button className="accept" onClick={onAccept}>Accept</Button>
                <Button className="reject" onClick={onReject}>Reject</Button>
              </td>
            </tr>
          ))
          )}
        </tbody>
      </table>
    </div>
  );
}
