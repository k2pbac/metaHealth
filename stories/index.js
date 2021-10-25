import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import NavbarHeader from "components/Navbar/NavHeader";
import Button from "components/Button";
import LoggedOut from "components/Navbar/LoggedState/LoggedOut"
import LoggedInPatient from "components/Navbar/LoggedState/LoggedInPatient"
import LoggedInEmployee from "components/Navbar/LoggedState/LoggedInEmployee"

//*********************************************************Navbar Stories*****************************************************
//*********************************************************************************************************************************

storiesOf("Navbar", module)

  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("Login", () => <Button onClick = {action("Login")}>Login</Button>)
  .add("Logout", () => <Button onClick = {action("Logout")}>Logout</Button>)
  .add("Sign Up", () => <Button onClick = {action("Sign Up")}>Sign Up</Button>)
  .add("Navbar Layout",  () => <NavbarHeader></NavbarHeader>)
  
  .add("Logged Out",  () => <LoggedOut onLogin = {action("Login")} onSignup = {action("SignUp")}></LoggedOut>)
  .add("Logged In - Patient",  () => <LoggedInPatient onLogout = {action("Logout")} name = "Michael Scott" avatar = "images/patient.jpg"></LoggedInPatient>)
  .add("Logged In - Employee",  () => <LoggedInEmployee onLogout = {action("Logout")} name = "Sam Henry" avatar = "images/doctor.jpg"></LoggedInEmployee>)