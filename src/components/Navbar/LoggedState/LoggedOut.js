import React from "react";
import classNames from "classnames"

import "components/Navbar/NavHeader.scss";
import Button from "components/Button";

export default function LoggedOut(props) {

   const navClass = classNames('navbar');

   const img = "https://media.istockphoto.com/photos/medical-technology-background-picture-id1255646957?k=20&m=1255646957&s=612x612&w=0&h=3vwwc_1QLqMzqZ89q9R1etUvxX2RyylcR_Td18XnAEk="

   return (
   <nav className = {navClass}>
     <img className = "logo" src={img} alt="Meta Health Logo"></img>
     <div>
     <Button onClick = {props.onLogin}>Login</Button>
     <Button onClick = {props.onSignup}>Signup</Button>
     </div>
   </nav>
   )
}
