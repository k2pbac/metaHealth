import React, { useState } from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
//import FadeIn from "react-fade-in";
// import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import "components/ManageAppointments/ClinicEmployeeList.scss";

export default function ClinicEmployeeList(props) {
  const { employeeList } = props;
  const [employeeState, setEmployeeState] = useState({});
  const onAccept = function () {};

  const onReject = function () {};
  let employees = [];
  console.log(employeeList);
  employeeList.then((results) => {
    setEmployeeState(results);
  });
  console.log(employeeState);
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
          {Object.keys(employeeState).map((element) => {
            return (
              <tr key={employeeState[element].id}>
                <td>{employeeState[element].first_name}</td>
                <td>{employeeState[element].last_name}</td>
                <td>{employeeState[element].phone_number}</td>
                <td>{employeeState[element].email_address}</td>
                <td>
                  {employeeState[element].clinic_verified
                    ? "Verified"
                    : "Unverified"}
                </td>
                <td className="">
                  {(!employeeState[element].clinic_verified && (
                    <>
                      <Button
                        size="sm"
                        variant="success"
                        // className="accept"
                        onClick={onAccept}
                      >
                        Accept
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        // className="reject"
                        onClick={onReject}
                      >
                        Reject
                      </Button>
                    </>
                  )) || (
                    <Button size="sm" variant="danger">
                      Remove
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
