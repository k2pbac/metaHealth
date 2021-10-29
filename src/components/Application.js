import React, { useEffect, useState } from "react";
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
  const isLoggedSelector = useSelector((state) => state.isLogged);
  const [isLogged, setIsLogged] = useState(isLoggedSelector);

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
        <Route
          path="/clinics"
          component={() => (
            <BookAppointments clinicsList={clinics}></BookAppointments>
          )}
        />

        {/* Manage Appointments Routes for Employee and Patient - will need to figure out how to pass params */}
        {/* View Patient Medical Records Routes will also need params passed  */}
        {/* Add/Edit Patient Medical Record Page route will need clinic params */}
      </Switch>
      <Footer></Footer>
    </>
  );
}
