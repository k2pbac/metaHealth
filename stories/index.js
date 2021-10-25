import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "index.scss";
//NavBar Imports
import NavbarHeader from "components/Navbar/NavHeader";
import Button from "components/Button";
import LoggedOut from "components/Navbar/LoggedState/LoggedOut";
import LoggedInPatient from "components/Navbar/LoggedState/LoggedInPatient";
import LoggedInEmployee from "components/Navbar/LoggedState/LoggedInEmployee";

//Home Page Imports
import Home from "components/Home/Home";
import Body from "components/Home/Body";
import Header from "components/Home/Header";
import Testimonial from "components/Home/Testimonial";
import TestimonialList from "components/Home/TestimonialList";

import { EmployeeData } from "components/Home/EmployeeData";
import { PatientData } from "components/Home/PatientData";

import Footer from "components/Footer";

// Registration and Login Selection Pages Imports
import LoginSelectionPanel from "components/Register_and_Login_Selection/LoginSelectionPanel";
import RegisterSelectionPanel from "components/Register_and_Login_Selection/RegisterSelectionPanel";
import Section from "components/Home/Section";

//*********************************************************Navbar Stories*****************************************************
//*********************************************************************************************************************************

storiesOf("Navbar", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("Login", () => <Button onClick={action("Login")}>Login</Button>)
  .add("Logout", () => <Button onClick={action("Logout")}>Logout</Button>)
  .add("Sign Up", () => <Button onClick={action("Sign Up")}>Sign Up</Button>)
  .add("Navbar Layout", () => <NavbarHeader></NavbarHeader>)

  .add("Logged Out", () => (
    <LoggedOut
      onLogin={action("Login")}
      onSignup={action("SignUp")}
    ></LoggedOut>
  ))
  .add("Logged In - Patient", () => (
    <LoggedInPatient
      onLogout={action("Logout")}
      name="Michael Scott"
      avatar="images/patient.jpg"
    ></LoggedInPatient>
  ))
  .add("Logged In - Employee", () => (
    <LoggedInEmployee
      onLogout={action("Logout")}
      name="Sam Henry"
      avatar="images/doctor.jpg"
    ></LoggedInEmployee>
  ));

//Home Page Stories
storiesOf("Home", module)
  .add("Header", () => <Header></Header>)
  .add("Body", () => <Body></Body>)
  .add("Employee-Testimonial", () => (
    <Testimonial
      companyName={EmployeeData[0].companyName}
      description={EmployeeData[0].description}
      image={EmployeeData[0].image}
      name={EmployeeData[0].name}
      position={EmployeeData[0].position}
      role={EmployeeData[0].role}
    ></Testimonial>
  ))
  .add("Patient-Testimonial", () => (
    <Testimonial
      companyName={PatientData[0].companyName}
      role={PatientData[0].role}
      name={PatientData[0].name}
      position={PatientData[0].position}
      image={PatientData[0].image}
      description={PatientData[0].description}
    ></Testimonial>
  ))
  .add("Patient-Testimonial List", () => (
    <TestimonialList peopleData={PatientData}></TestimonialList>
  ))
  .add("Employee Testimonial List", () => (
    <TestimonialList peopleData={EmployeeData}></TestimonialList>
  ))
  .add("Patient Section", () => <Section></Section>)
  .add("Home Page", () => {
    return <Home></Home>;
  });

storiesOf("Home Page", module)
  .add("Nav with logged in", () => {
    return (
      <>
        <LoggedInEmployee
          onLogout={action("Logout")}
          name="Sam Henry"
          avatar="images/doctor.jpg"
        ></LoggedInEmployee>
        <Home></Home>
      </>
    );
  })
  .add("Nav (logged in) and Footer", () => {
    return (
      <>
        <LoggedInEmployee
          onLogout={action("Logout")}
          name="Sam Henry"
          avatar="images/doctor.jpg"
        ></LoggedInEmployee>
        <Home></Home>
        <Footer></Footer>
      </>
    );
  });

storiesOf("Footer", module).add("Footer", () => <Footer></Footer>);

// Registration and Login Selection Pages
storiesOf("Registration and Login Selection", module)
  .add("LoginSelectionPanel", () => (
    <LoginSelectionPanel
      onPatientLogin={action("Patient Login")}
      onEmployeeLogin={action("Employee Login")}
    ></LoginSelectionPanel>
  ))
  .add("RegisterSelectionPanel", () => (
    <RegisterSelectionPanel
      onPatientRegister={action("Patient Register")}
      onEmployeeRegister={action("Employee Register")}
    ></RegisterSelectionPanel>
  ));
