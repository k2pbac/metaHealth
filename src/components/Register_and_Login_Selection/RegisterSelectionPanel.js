import React from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "react-bootstrap/Image";

import "components/Register_and_Login_Selection/SelectionPanel.scss";
import { Link } from "react-router-dom";

export default function RegisterSelectionPanel(props) {
  const { onPatientRegister, onEmployeeRegister } = props;

  const patient_image = "/images/patient-reg.jpg";
  const employee_image = "/images/employee-reg.jpg";

  const navClass = classNames("selection_panel");

  return (
    <div className="container">
      <div className="selection-title">
        <h1>REGISTER</h1>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
          <Link to={"/register/patient"}>
            <div className="selection-panel" onClick={onPatientRegister}>
              <Image
                className="selection-image1"
                src={patient_image}
                alt="Patient"
              ></Image>
              <div className="content">
                <h3>
                  Patient <br /> Registration
                </h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to={"/register/employee"}>
            <div className="selection-panel" onClick={onEmployeeRegister}>
              <Image
                className="selection-image2"
                src={employee_image}
                alt="Employee"
              ></Image>
              <div className="content">
                <h3>
                  Employee <br /> Registration
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
