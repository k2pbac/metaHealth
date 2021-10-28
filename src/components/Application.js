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
import PatientProfileIndex from "./View_Profile/PatientProfileIndex";

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
      </Switch>
      <Footer></Footer>
    </>
  );
}
