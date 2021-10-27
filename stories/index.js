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
import {
  patientFormData,
  employeeFormData,
  clinicFormData,
} from "components/RegisterForm/FormData";

import Footer from "components/Footer";

// Registration and Login Selection Pages Imports
import LoginSelectionPanel from "components/Register_and_Login_Selection/LoginSelectionPanel";
import RegisterSelectionPanel from "components/Register_and_Login_Selection/RegisterSelectionPanel";


import Section from "components/Home/Section";
import Form from "components/RegisterForm/Form";
import LoginForm from "components/LoginForm/LoginForm";

//View Profile Page Imports
import PatientProfile from "components/View_Profile/PatientProfile";
import PatientEditProfile from "components/View_Profile/PatientEditProfile";
import PatientProfileIndex from "components/View_Profile/PatientProfileIndex";

import EmployeeProfile from "components/View_Profile/EmployeeProfile";
import EmployeeEditProfile from "components/View_Profile/EmployeeEditProfile";
import EmployeeProfileIndex from "components/View_Profile/EmployeeProfileIndex";

// const EmployeeData = [
//   {
//     id: 1,
//     companyName: "Sabertooth",
//     description:
//       "Wow! This website is amazing. It has made my life working at Sabertooth much easier! Thank you all at Meta Health!",
//     image:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1061&q=80",
//     name: "JANICE KULAS",
//     position: "Assistant Manager",
//     role: "Employee",
//   },
//   {
//     id: 2,
//     companyName: "Health Ontario",
//     description:
//       "Great Work with this website. The only thing I think that you could improve is the amount of clinics that you support. As mine is currently unsupported",
//     image:
//       "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80",
//     name: "Bryant Franecki",
//     position: "Front Desk Receptionist",
//     role: "Employee",
//   },
// ];
// const PatientData = [
//   {
//     id: 1,
//     companyName: "The Office",
//     description:
//       "Thank you Meta Health for this website. I would normally have to wait 15-20 minutes longer when I go into a walk-in clinic. But now I go in and the doctor sees me right away",
//     image: "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png",
//     name: "Michael Scott",
//     position: "Member since 2021",
//     role: "Patient",
//   },
//   {
//     id: 2,
//     companyName: "Health Ontario",
//     description:
//       "Great Work with this website. The only thing I think that you could improve is the amount of clinics that you support. As mine is currently unsupported",
//     image: "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png",
//     name: "Bryant Franecki",
//     position: "Member since 2010",
//     role: "Patient",
//   },
//   {
//     id: 3,
//     companyName: "North York General",
//     description:
//       "I love this hospital and this application makes it easier to make an appointment",
//     image:
//       "https://images.unsplash.com/photo-1550791871-0bcd47c97881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//     name: "Lamar Kassulke",
//     position: "Member since 1990",
//     role: "Patient",
//   },
// ];

const patient_accounts = {
  id: 1,
  name: "Michael Scott", 
  username: "Mic123",
  avatar: "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png", 
  date_of_birth: 'Jul 12 1980',
  profile_decription: "I love vaccines!",
  phone_number: "416-123-1234",
  email_address: "Michael123@gmail.com",
  address: "23 Dundas St. Toronto, ON",
  insurance_member_id: "12345ABCDEF",
  insurance_policy_number: "12345678YZ",
  insurance_plan_name: "OHIP",
  medical_history_id: "" 
};

const employee_accounts = [
  {
  id: 1,
  name: "Sam Henry", 
  username: "Sam123",
  avatar: "https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4=", 
  profile_decription: "I love working with my patients",
  phone_number: "416-321-1234",
  email_address: "SamHenry123@gmail.com",
  employedAt: "Toronto Public Clinic, 123 Yonge St. Toronto,ON M3B 2T1",
  isDoctor: true
},
{
  id: 2,
  name: "Cindy Mitchel", 
  username: "Cindy123",
  avatar: "https://dentalreceptionist.ca/wp-content/uploads/2018/09/iStock-910148934-650x500.jpg", 
  profile_decription: "I'll assist you with in-clinic check-ins",
  phone_number: "416-123-5234",
  email_address: "Cindy123@gmail.com",
  employedAt: "Toronto Public Clinic, 123 Yonge St. Toronto,ON M3B 2T1",
  isDoctor: false
}
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
  .add("Testimonial List", () => (
    <TestimonialList
      patientData={PatientData}
      employeeData={EmployeeData}
    ></TestimonialList>
  ))
  .add("Patient Section", () => <Section reverse={true}></Section>)
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

// Registration and Login Selection Pages Stories
storiesOf("Registration and Login Selection", module)
.add("LoginSelectionPanel", () => <LoginSelectionPanel onPatientLogin={action("Patient Login")} onEmployeeLogin={action("Employee Login")}></LoginSelectionPanel>)
.add("RegisterSelectionPanel", () => <RegisterSelectionPanel onPatientRegister={action("Patient Register")} onEmployeeRegister={action("Employee Register")}></RegisterSelectionPanel>)
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

//View Profile Pages Stories
storiesOf("View Profile", module)
.add("Patient Profile", () => 
<PatientProfile 
name = {patient_accounts.name}
username = {patient_accounts.username}
avatar = {patient_accounts.avatar}
date_of_birth = {patient_accounts.date_of_birth}
profile_decription = {patient_accounts.profile_decription}
phone_number = {patient_accounts.phone_number}
email_address = {patient_accounts.email_address}
address = {patient_accounts.address}
insurance_member_id = {patient_accounts.insurance_member_id}
insurance_policy_number = {patient_accounts.insurance_policy_number}
insurance_plan_name = {patient_accounts.insurance_plan_name}
></PatientProfile>)
.add("Patient Edit Profile", () => 
<PatientEditProfile 
name = {patient_accounts.name}
username = {patient_accounts.username}
avatar = {patient_accounts.avatar}
date_of_birth = {patient_accounts.date_of_birth}
profile_decription = {patient_accounts.profile_decription}
phone_number = {patient_accounts.phone_number}
email_address = {patient_accounts.email_address}
address = {patient_accounts.address}
insurance_member_id = {patient_accounts.insurance_member_id}
insurance_policy_number = {patient_accounts.insurance_policy_number}
insurance_plan_name = {patient_accounts.insurance_plan_name}
></PatientEditProfile>)
.add("Patient Profile Index", () => 
<PatientProfileIndex 
name = {patient_accounts.name}
username = {patient_accounts.username}
avatar = {patient_accounts.avatar}
date_of_birth = {patient_accounts.date_of_birth}
profile_decription = {patient_accounts.profile_decription}
phone_number = {patient_accounts.phone_number}
email_address = {patient_accounts.email_address}
address = {patient_accounts.address}
insurance_member_id = {patient_accounts.insurance_member_id}
insurance_policy_number = {patient_accounts.insurance_policy_number}
insurance_plan_name = {patient_accounts.insurance_plan_name}
></PatientProfileIndex>)


.add("Employee Profile", () => 
<EmployeeProfile 
name = {employee_accounts[1].name}
username = {employee_accounts[1].username}
avatar = {employee_accounts[1].avatar}
profile_decription = {employee_accounts[1].profile_decription}
phone_number = {employee_accounts[1].phone_number}
email_address = {employee_accounts[1].email_address}
employedAt = {employee_accounts[1].employedAt}
isDoctor = {employee_accounts[1].isDoctor}
></EmployeeProfile>)

.add("Employee Edit Profile", () => 
<EmployeeEditProfile 
name = {employee_accounts[1].name}
username = {employee_accounts[1].username}
avatar = {employee_accounts[1].avatar}
profile_decription = {employee_accounts[1].profile_decription}
phone_number = {employee_accounts[1].phone_number}
email_address = {employee_accounts[1].email_address}
employedAt = {employee_accounts[1].employedAt}
isDoctor = {employee_accounts[1].isDoctor}
></EmployeeEditProfile>)

.add("Employee Profile Index", () => 
<EmployeeProfileIndex 
name = {employee_accounts[1].name}
username = {employee_accounts[1].username}
avatar = {employee_accounts[1].avatar}
profile_decription = {employee_accounts[1].profile_decription}
phone_number = {employee_accounts[1].phone_number}
email_address = {employee_accounts[1].email_address}
employedAt = {employee_accounts[1].employedAt}
isDoctor = {employee_accounts[1].isDoctor}
></EmployeeProfileIndex>)

.add("Employee Profile Index (Doctor)", () => 
<EmployeeProfileIndex 
name = {employee_accounts[0].name}
username = {employee_accounts[0].username}
avatar = {employee_accounts[0].avatar}
profile_decription = {employee_accounts[0].profile_decription}
phone_number = {employee_accounts[0].phone_number}
email_address = {employee_accounts[0].email_address}
employedAt = {employee_accounts[0].employedAt}
isDoctor = {employee_accounts[0].isDoctor}
></EmployeeProfileIndex>)


// Patient and Employee Registration Form

storiesOf("Registration Form", module)
  .add("Patient's Form", () => <Form formData={patientFormData}></Form>)
  .add("Employee's Form", () => <Form formData={employeeFormData}></Form>)
  .add("Clinic Form", () => <Form formData={clinicFormData}></Form>);

storiesOf("Login Form", module).add("Patient's Form", () => (
  <LoginForm></LoginForm>
));

