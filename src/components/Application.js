import React, { useEffect, useState } from "react";
import axios from "axios";

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
import RegisterForm from "./RegisterForm/RegisterForm";
import {
  employeeFormData,
  patientFormData,
  clinicFormData,
} from "./RegisterForm/FormData";
import BookAppointments from "./BookAppointments/BookAppointments";
import PatientProfileIndex from "./View_Profile/PatientProfileIndex";
import { useSelector, useStore } from "react-redux";
import useApplicationData from "hooks/useApplicationData";

export default function Application(props) {
  const isLoggedSelector = useSelector((state) => state.isLogged);
  const [isLogged, setIsLogged] = useState(isLoggedSelector);

  const { clinics } = useApplicationData();

  useEffect(() => {
    setIsLogged(localStorage.getItem("isLogged"));
  }, [isLoggedSelector]);
  return (
    <>
      {!isLogged && <Navbar></Navbar>}
      {isLogged && <LoggedInPatient></LoggedInPatient>}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginSelectionPanel} />
        <Route path="/login-patient" component={LoginForm} />
        <Route path="/login-employee" component={LoginForm} />
        {/* Change Login form for employee vs patient */}
        <Route path="/register" component={RegisterSelectionPanel} />
        <Route
          path="/register-patient"
          component={() => (
            <RegisterForm formData={patientFormData}></RegisterForm>
          )}
        />
        <Route
          path="/register-employee"
          component={() => (
            <RegisterForm formData={employeeFormData}></RegisterForm>
          )}
        />
        <Route
          path="/register-clinic"
          component={() => (
            <RegisterForm formData={clinicFormData}></RegisterForm>
          )}
        />
        <Route path="/patient-profile" component={PatientProfileIndex} />
        return (
        <Route
          path="/clinics"
          component={() => (
            <BookAppointments clinicsList={clinics}></BookAppointments>
          )}
        />
        );
        {/* Manage Appointments Routes for Employee and Patient - will need to figure out how to pass params */}
        {/* View Patient Medical Records Routes will also need params passed  */}
        {/* Add/Edit Patient Medical Record Page route will need clinic params */}
      </Switch>
      <Footer></Footer>
    </>
  );
}
