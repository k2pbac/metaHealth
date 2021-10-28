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
import {
  employeeSchedule,
  patientSchedule,
} from "components/Schedule/AppointmentData";
import Footer from "components/Footer";

// Registration and Login Selection Pages Imports
import LoginSelectionPanel from "components/Register_and_Login_Selection/LoginSelectionPanel";
import RegisterSelectionPanel from "components/Register_and_Login_Selection/RegisterSelectionPanel";

import Section from "components/Home/Section";
import Form from "components/RegisterForm/Form";
import LoginForm from "components/LoginForm/LoginForm";

//Patient and Employee Manage Appoinments Pages Imports
import Schedule from "components/Schedule/Schedule";
import PatientSchedule from "components/PatientSchedule/PatientSchedule";
import { patient } from "components/PatientSchedule/patient_appointment";
import ManageAppointments from "components/ManageAppointments/ManageAppointments";

//View Profile Page Imports
import PatientProfile from "components/View_Profile/PatientProfile";
import PatientEditProfile from "components/View_Profile/PatientEditProfile";
import PatientProfileIndex from "components/View_Profile/PatientProfileIndex";

import EmployeeProfile from "components/View_Profile/EmployeeProfile";
import EmployeeEditProfile from "components/View_Profile/EmployeeEditProfile";
import EmployeeProfileIndex from "components/View_Profile/EmployeeProfileIndex";
import PatientDetails from "components/ManageAppointments/PatientDetails";
import PatientReport from "components/ManageAppointments/PatientReport";

// Book Appointments Imports
import ClinicCard from "components/BookAppointments/ClinicCard";
import BookAppointments from "components/BookAppointments/BookAppointments";




const patient_accounts = {
  id: 1,
  name: "Michael Scott",
  username: "Mic123",
  avatar: "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png",
  date_of_birth: "Jul 12 1980",
  profile_decription: "I love vaccines!",
  phone_number: "416-123-1234",
  email_address: "Michael123@gmail.com",
  address: "23 Dundas St. Toronto, ON",
  insurance_member_id: "12345ABCDEF",
  insurance_policy_number: "12345678YZ",
  insurance_plan_name: "OHIP",
  medical_history_id: "",
};

const employee_accounts = [
  {
    id: 1,
    name: "Sam Henry",
    username: "Sam123",
    avatar:
      "https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4=",
    profile_decription: "I love working with my patients",
    phone_number: "416-321-1234",
    email_address: "SamHenry123@gmail.com",
    employedAt: "Toronto Public Clinic, 123 Yonge St. Toronto,ON M3B 2T1",
    isDoctor: true,
  },
  {
    id: 2,
    name: "Cindy Mitchel",
    username: "Cindy123",
    avatar:
      "https://dentalreceptionist.ca/wp-content/uploads/2018/09/iStock-910148934-650x500.jpg",
    profile_decription: "I'll assist you with in-clinic check-ins",
    phone_number: "416-123-5234",
    email_address: "Cindy123@gmail.com",
    employedAt: "Toronto Public Clinic, 123 Yonge St. Toronto,ON M3B 2T1",
    isDoctor: false,
  },
];

const clinics = [
{
  id:1,
  name: "Toronto Public Clinic",
  address: "123 Yonge St. Toronto, ON M3B 2T1",
  image: "https://www.bannerhealth.com/-/media/images/project/bh/location-images/florence/banner-health-clinic-florence.ashx?h=318&w=478&hash=F1FF82CC61E5028148B77B46AB9D74BF",
},
{
  id:2,
  name: "Patients Walk-In Clinic",
  address: "700 Don Mills Rd. Toronto, ON M3C 2T3",
  image: "https://www.bannerhealth.com/-/media/images/project/bh/location-images/florence/banner-health-clinic-florence.ashx?h=318&w=478&hash=F1FF82CC61E5028148B77B46AB9D74BF"
},
{
  id:3,
  name: "Bay Walk-In Clinic",
  address: "555 Bay St. Toronto, ON M4B 3S1",
  image: "https://www.bannerhealth.com/-/media/images/project/bh/location-images/florence/banner-health-clinic-florence.ashx?h=318&w=478&hash=F1FF82CC61E5028148B77B46AB9D74BF"
},
]

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
  ))
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
  .add("Patient Profile", () => (
    <PatientProfile
      name={patient_accounts.name}
      username={patient_accounts.username}
      avatar={patient_accounts.avatar}
      date_of_birth={patient_accounts.date_of_birth}
      profile_decription={patient_accounts.profile_decription}
      phone_number={patient_accounts.phone_number}
      email_address={patient_accounts.email_address}
      address={patient_accounts.address}
      insurance_member_id={patient_accounts.insurance_member_id}
      insurance_policy_number={patient_accounts.insurance_policy_number}
      insurance_plan_name={patient_accounts.insurance_plan_name}
    ></PatientProfile>
  ))
  .add("Patient Edit Profile", () => (
    <PatientEditProfile
      name={patient_accounts.name}
      username={patient_accounts.username}
      avatar={patient_accounts.avatar}
      date_of_birth={patient_accounts.date_of_birth}
      profile_decription={patient_accounts.profile_decription}
      phone_number={patient_accounts.phone_number}
      email_address={patient_accounts.email_address}
      address={patient_accounts.address}
      insurance_member_id={patient_accounts.insurance_member_id}
      insurance_policy_number={patient_accounts.insurance_policy_number}
      insurance_plan_name={patient_accounts.insurance_plan_name}
    ></PatientEditProfile>
  ))
  .add("Patient Profile Index", () => (
    <PatientProfileIndex
      name={patient_accounts.name}
      username={patient_accounts.username}
      avatar={patient_accounts.avatar}
      date_of_birth={patient_accounts.date_of_birth}
      profile_decription={patient_accounts.profile_decription}
      phone_number={patient_accounts.phone_number}
      email_address={patient_accounts.email_address}
      address={patient_accounts.address}
      insurance_member_id={patient_accounts.insurance_member_id}
      insurance_policy_number={patient_accounts.insurance_policy_number}
      insurance_plan_name={patient_accounts.insurance_plan_name}
    ></PatientProfileIndex>
  ))

  .add("Employee Profile", () => (
    <EmployeeProfile
      name={employee_accounts[1].name}
      username={employee_accounts[1].username}
      avatar={employee_accounts[1].avatar}
      profile_decription={employee_accounts[1].profile_decription}
      phone_number={employee_accounts[1].phone_number}
      email_address={employee_accounts[1].email_address}
      employedAt={employee_accounts[1].employedAt}
      isDoctor={employee_accounts[1].isDoctor}
    ></EmployeeProfile>
  ))

  .add("Employee Edit Profile", () => (
    <EmployeeEditProfile
      name={employee_accounts[1].name}
      username={employee_accounts[1].username}
      avatar={employee_accounts[1].avatar}
      profile_decription={employee_accounts[1].profile_decription}
      phone_number={employee_accounts[1].phone_number}
      email_address={employee_accounts[1].email_address}
      employedAt={employee_accounts[1].employedAt}
      isDoctor={employee_accounts[1].isDoctor}
    ></EmployeeEditProfile>
  ))

  .add("Employee Profile Index", () => (
    <EmployeeProfileIndex
      name={employee_accounts[1].name}
      username={employee_accounts[1].username}
      avatar={employee_accounts[1].avatar}
      profile_decription={employee_accounts[1].profile_decription}
      phone_number={employee_accounts[1].phone_number}
      email_address={employee_accounts[1].email_address}
      employedAt={employee_accounts[1].employedAt}
      isDoctor={employee_accounts[1].isDoctor}
    ></EmployeeProfileIndex>
  ))

  .add("Employee Profile Index (Doctor)", () => (
    <EmployeeProfileIndex
      name={employee_accounts[0].name}
      username={employee_accounts[0].username}
      avatar={employee_accounts[0].avatar}
      profile_decription={employee_accounts[0].profile_decription}
      phone_number={employee_accounts[0].phone_number}
      email_address={employee_accounts[0].email_address}
      employedAt={employee_accounts[0].employedAt}
      isDoctor={employee_accounts[0].isDoctor}
    ></EmployeeProfileIndex>
  ));

// Patient and Employee Registration Form

storiesOf("Registration Form", module)
  .add("Patient's Form", () => <Form formData={patientFormData}></Form>)
  .add("Employee's Form", () => <Form formData={employeeFormData}></Form>)
  .add("Clinic Form", () => <Form formData={clinicFormData}></Form>);

storiesOf("Login Form", module).add("Patient's Form", () => (
  <LoginForm></LoginForm>
));

// Manage Appointments components and page

storiesOf("Schedule", module)
  .add("Patient Schedule", () => (
    <Schedule appointmentData={patientSchedule}></Schedule>
  ))
  .add("Employee Schedule", () => (
    <Schedule appointmentData={employeeSchedule}></Schedule>
  ));

storiesOf("Patient Appointments", module).add("View", () => (
  <PatientSchedule patient={patient}></PatientSchedule>
));

storiesOf("Manage Appointments Page", module)
  .add("Full Page for Patient", () => (
    <ManageAppointments isEmployee={false}></ManageAppointments>
  ))
  .add("Full Page for Employee", () => (
    <ManageAppointments isEmployee={true}></ManageAppointments>
  ));


storiesOf("Individual Patient Records Page", module)
  .add("Patient Details", () => <PatientDetails></PatientDetails>)
  .add("Existing Patient Report", () => <PatientReport></PatientReport>);


//Book Appointments Page Stories
storiesOf("Book Appointment", module)
.add("Clinic Card", () => (
  <ClinicCard name={clinics[0].name} address={clinics[0].address} image={clinics[0].image}></ClinicCard>
))
.add("Book Appointments Page (Patients)", () => (
  <BookAppointments clinicsList={clinics}></BookAppointments>
))
