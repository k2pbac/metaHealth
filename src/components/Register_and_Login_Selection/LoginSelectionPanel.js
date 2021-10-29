import React from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

import "components/Register_and_Login_Selection/SelectionPanel.scss";

export default function LoginSelectionPanel(props) {
  const { onPatientLogin, onEmployeeLogin } = props;

  const patient_image = "images/patient_selection.jpg";
  const employee_image = "images/employee_selection.jpg";
  const navClass = classNames("selection_panel");

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
          <Link to={"./login-patient"}>
            <div className="selection-panel" onClick={onPatientLogin}>
              <Image
                className="selection-image1"
                src={patient_image}
                alt="Patient"
              ></Image>
              <div className="content">
                <h3>
                  Patient <br /> Login
                </h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to={"./login-employee"}>
            <div className="selection-panel" onClick={onEmployeeLogin}>
              <Image
                className="selection-image2"
                src={employee_image}
                alt="Employee"
              ></Image>
              <div className="content">
                <h3>
                  Employee <br /> Login
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
