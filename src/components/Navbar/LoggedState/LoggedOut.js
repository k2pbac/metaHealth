import React from "react";
import classNames from "classnames"

import "components/Navbar/NavHeader.scss";
import Button from "components/Button";

export default function LoggedOut(props) {

   const navClass = classNames('navbar');

    // Link to logo image
    const logo = "images/logo.png"

   return (
   <nav className = {navClass}>
     <img className = "logo" src={logo} alt="Meta Health Logo"></img>
     <div>
     <Button onClick = {props.onLogin}>Login</Button>
     <Button onClick = {props.onSignup}>Signup</Button>
     </div>
   </nav>
   )
}
