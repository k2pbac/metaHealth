import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import "components/Application.scss";
import Home from "./Home/Home";
import Footer from "./Footer";
import LoggedInPatient from "./Navbar/LoggedState/LoggedInPatient";
import Navbar from "./Navbar/NavHeader";
import LoginSelectionPanel from "./Register_and_Login_Selection/LoginSelectionPanel";
import LoginForm from "./LoginForm/LoginForm";
import RegisterSelectionPanel from "./Register_and_Login_Selection/RegisterSelectionPanel";
import Form from "./RegisterForm/Form";
import {
  employeeFormData,
  patientFormData,
  clinicFormData,
} from "./RegisterForm/FormData";
import BookAppointments from "./BookAppointments/BookAppointments";
import PatientProfileIndex from "./View_Profile/PatientProfileIndex";

const clinics = [
  {
    id: 1,
    name: "Toronto Public Clinic",
    address: "123 Yonge St. Toronto, ON M3B 2T1",
    image:
      "https://www.bannerhealth.com/-/media/images/project/bh/location-images/florence/banner-health-clinic-florence.ashx?h=318&w=478&hash=F1FF82CC61E5028148B77B46AB9D74BF",
  },
  {
    id: 2,
    name: "Patients Walk-In Clinic",
    address: "700 Don Mills Rd. Toronto, ON M3C 2T3",
    image:
      "https://www.bannerhealth.com/-/media/images/project/bh/location-images/florence/banner-health-clinic-florence.ashx?h=318&w=478&hash=F1FF82CC61E5028148B77B46AB9D74BF",
  },
  {
    id: 3,
    name: "Bay Walk-In Clinic",
    address: "555 Bay St. Toronto, ON M4B 3S1",
    image:
      "https://www.bannerhealth.com/-/media/images/project/bh/location-images/florence/banner-health-clinic-florence.ashx?h=318&w=478&hash=F1FF82CC61E5028148B77B46AB9D74BF",
  },
];
export default function Application(props) {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/login" component={LoginSelectionPanel} />
        <Route path="/login-patient" component={LoginForm} />
        <Route path="/login-employee" component={LoginForm} />

        {/* Change Login form for employee vs patient */}
        <Route path="/register" component={RegisterSelectionPanel} />
        <Route
          path="/register-patient"
          component={() => <Form formData={patientFormData}></Form>}
        />
        <Route
          path="/register-employee"
          component={() => <Form formData={employeeFormData}></Form>}
        />
        <Route
          path="/register-clinic"
          component={() => <Form formData={clinicFormData}></Form>}
        />
        <Route path="/patient-profile" component={PatientProfileIndex} />
        <Route
          path="/clinics"
          component={() => (
            <BookAppointments clinicsList={clinics}></BookAppointments>
          )}
        />

        {/*  */}
      </Switch>
      <Footer></Footer>
    </>
  );
}
