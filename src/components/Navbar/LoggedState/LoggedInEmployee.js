import React from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";

import "components/Navbar/NavHeader.scss";
import Button from "components/Button";

export default function LoggedInEmployee(props) {
  const { name, onLogout, avatar } = props;

  const navClass = classNames("navbar");

  // Link to logo image
  const logo = "images/logo.png";

  return (
    <nav className={navClass}>
      <Image className="logo" src={logo} alt="Meta Health Logo"></Image>
      <div className="right-side">
        <div className="avatar">
          <Image
            className="avatar-image"
            src={avatar}
            alt={name}
            roundedCircle
          ></Image>
          <label>Hello, {props.name}</label>
        </div>

        <div className="menu">
          <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">View Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Manage Clinic Appointments
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                View Patient Medical Records
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button onClick={onLogout}>Logout</Button>
        </div>
      </div>
    </nav>
  );
}
