import React from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import { useSelector, useDispatch } from "react-redux";
import "components/Navbar/NavHeader.scss";
import Button from "components/Button";
import { Link } from "react-router-dom";
import { logoutUser } from "actions";

export default function LoggedInEmployee(props) {
  const { name, avatar } = props;
  const userLogged = useSelector((state) => state.userLogged);
  const navClass = classNames("navbar");
  // Link to logo image
  const logo = "/images/logo.png";
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className={navClass}>
      <Image className="logo" src={logo} alt="Meta Health Logo"></Image>
      <div className="right-side">
        <div className="avatar">
          <Image
            className="avatar-image"
            src={userLogged.user.avatar}
            alt={name}
            roundedCircle
          ></Image>
          <label>Hello, {userLogged.user.first_name}</label>
        </div>

        <div className="menu">
          <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/employee/profile">
                View Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/clinic/appointments">
                Manage Clinic Appointments
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/clinic-medical-records">
                View Patient Medical Records
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/register/clinic">
                Register a New Clinic
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/register/existing/clinic">
                Register with an Existing Clinic
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Link to="./">
            <Button onClick={onLogout}>Logout</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
