import React from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

import "components/Navbar/NavHeader.scss";
import Button from "components/Button";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const navClass = classNames("navbar");

  // Link to logo image
  const logo = "images/logo.png";

  return (
    <nav className={navClass}>
      <Link to={"./"}>
        <img className="logo" src={logo} alt="Meta Health Logo"></img>
      </Link>
      <div className="login-buttons">
        <Link to={"./login"}>
          <Button>Login</Button>
        </Link>
        <Link to={"./register"}>
          <Button>Signup</Button>
        </Link>
      </div>
    </nav>
  );
}
