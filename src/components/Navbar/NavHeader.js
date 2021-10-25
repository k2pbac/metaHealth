import React from "react";
import classNames from "classnames"
import 'bootstrap/dist/css/bootstrap.min.css';

import "components/Navbar/NavHeader.scss";
import Button from "components/Button";

export default function Navbar(props) {

   const navClass = classNames('navbar');

    // Link to logo image
    const logo = "images/logo.png"

   return (
   <nav className = {navClass}>
     <img className = "logo" src={logo} alt="Meta Health Logo"></img>
     <div>
     <Button>Login</Button>
     <Button>Signup</Button>
     </div>
   </nav>
   )
}
