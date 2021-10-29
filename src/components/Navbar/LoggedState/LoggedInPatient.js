import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";

import "components/Navbar/NavHeader.scss";
import Button from "components/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "actions";

export default function LoggedInPatient(props) {
  const { name, avatar } = props;
  const [user, setUser] = useState(localStorage.getItem("user"));
  const navClass = classNames("navbar");
  const dispatch = useDispatch();
  // Link to logo image
  const logo = "images/logo.png";

  const onLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    setUser(localStorage.getItem("user") || "");
  }, [localStorage.getItem("user")]);

  return (
    <nav className={navClass}>
      <Link to={"./"}>
        <Image className="logo" src={logo} alt="Meta Health Logo"></Image>
      </Link>
      <div className="right-side">
        <div className="avatar">
          <Image
            className="avatar-image"
            src={avatar}
            alt={name}
            roundedCircle
          ></Image>
          {localStorage.getItem("isLogged") && <label>Hello, {user}</label>}
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
              <Dropdown.Item href="#/action-2">Book Appointments</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Manage Appointments
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button onClick={onLogout}>Logout</Button>
        </div>
      </div>
    </nav>
  );
}
