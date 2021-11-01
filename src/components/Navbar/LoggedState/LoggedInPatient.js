import React from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import "components/Navbar/NavHeader.scss";
import Button from "components/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "actions";

export default function LoggedInPatient(props) {
  const { name, avatar } = props;
  const navClass = classNames("navbar");
  const userLogged = useSelector((state) => state.userLogged);
  const dispatch = useDispatch();
  // Link to logo image
  const logo = "/images/logo.png";

  const onLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className={navClass}>
      <Link to={"/"}>
        <Image className="logo" src={logo} alt="Meta Health Logo"></Image>
      </Link>
      <div className="right-side">
        <div className="avatar">
          <Image
            className="avatar-image"
            src={userLogged.user.avatar}
            alt={name}
            roundedCircle
          ></Image>
          {<label>Hello, {userLogged.user.first_name}</label>}
        </div>

        <div className="menu">
          <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/patient/profile">
                View Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/clinics">
                Book Appointments
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/clinic/appointments">
                Manage Appointments
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Link to="/">
            <Button onClick={onLogout}>Logout</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
