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
import Footer from "components/Footer";

// Registration and Login Selection Pages Imports
import LoginSelectionPanel from "components/Register_and_Login_Selection/LoginSelectionPanel";
import RegisterSelectionPanel from "components/Register_and_Login_Selection/RegisterSelectionPanel";

const EmployeeData = [
  {
    id: 1,
    companyName: "Sabertooth",
    description:
      "Wow! This website is amazing. It has made my life working at Sabertooth much easier! Thank you all at Meta Health!",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1061&q=80",
    name: "JANICE KULAS",
    position: "Assistant Manager",
    role: "Employee",
  },
  {
    id: 2,
    companyName: "Health Ontario",
    description:
      "Great Work with this website. The only thing I think that you could improve is the amount of clinics that you support. As mine is currently unsupported",
    image:
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80",
    name: "Bryant Franecki",
    position: "Front Desk Receptionist",
    role: "Employee",
  },
];
const PatientData = [
  {
    id: 1,
    companyName: "The Office",
    description:
      "Thank you Meta Health for this website. I would normally have to wait 15-20 minutes longer when I go into a walk-in clinic. But now I go in and the doctor sees me right away",
    image: "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png",
    name: "Michael Scott",
    position: "Member since 2021",
    role: "Patient",
  },
  {
    id: 2,
    companyName: "Health Ontario",
    description:
      "Great Work with this website. The only thing I think that you could improve is the amount of clinics that you support. As mine is currently unsupported",
    image: "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png",
    name: "Bryant Franecki",
    position: "Member since 2010",
    role: "Patient",
  },
  {
    id: 3,
    companyName: "North York General",
    description:
      "I love this hospital and this application makes it easier to make an appointment",
    image:
      "https://images.unsplash.com/photo-1550791871-0bcd47c97881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    name: "Lamar Kassulke",
    position: "Member since 1990",
    role: "Patient",
  },
];

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
  ));

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
