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
import PatientMedicalRecords from "./PatientMedicalRecords/PatientMedicalRecords";
import {
  employeeFormData,
  patientFormData,
  clinicFormData,
} from "./RegisterForm/FormData";
import BookAppointments from "./BookAppointments/BookAppointments";
import PatientProfileIndex from "./View_Profile/PatientProfileIndex";
import { useSelector, useStore, useDispatch } from "react-redux";
import useApplicationData from "hooks/useApplicationData";
import {
  displayClinics,
  viewPatientProfile,
  displayClinicAddress,
} from "helpers/selectors";
import { userServices } from "hooks/userServices";
import { useHistory } from "react-router-dom";
import { loginUser } from "../actions/index";
import LoggedInEmployee from "./Navbar/LoggedState/LoggedInEmployee";
import LoggedOut from "./Navbar/LoggedState/LoggedOut";
import ManageAppointments from "./ManageAppointments/ManageAppointments";

export default function Application(props) {
  const completeRegisterSelector = useSelector((state) => state.registerUser);
  const userAuth = useSelector((state) => state.userAuth);
  const userLogged = useSelector((state) => state.userLogged);
  const dispatch = useDispatch();
  let clinic = {};
  const history = useHistory();
  const {
    appState,
    patients,
    patientName,
    setPatientName,
    clinicName,
    setClinicName,
    setClinics,
    clinics,
    updatePatientProfile,
  } = useApplicationData();

  const {
    submitPatientRegistration,
    submitEmployeeRegistration,
    authenticateEmployee,
    authenticatePatient,
  } = userServices;

  if (localStorage.getItem("clinic_id")) {
    clinic = displayClinicAddress(appState, localStorage.getItem("clinic_id"));
  }

  useEffect(() => {
    if (userAuth && !userLogged.loggedIn) {
      if (userAuth.isEmployee) {
        authenticateEmployee(userAuth).then((res) => {
          dispatch(loginUser(res, true));
          history.push("/");
        });
      } else if (!userLogged.loggedIn) {
        authenticatePatient(userAuth).then((res) => {
          dispatch(loginUser(res, false));
          history.push("/");
        });
      }
    }
  }, [userAuth]);

  useEffect(() => {
    if (userLogged.update_profile) {
      updatePatientProfile(userLogged.user);
    }
  }, [userLogged.user]);

  useEffect(() => {
    console.log(appState);
    setClinics(displayClinics(appState, clinicName));
  }, [clinicName]);

  useEffect(() => {
    if (completeRegisterSelector) {
      console.log(completeRegisterSelector);
      if (completeRegisterSelector.isEmployee) {
        submitEmployeeRegistration(completeRegisterSelector).then((user) => {});
      } else {
        submitPatientRegistration(completeRegisterSelector);
      }
      // setAppState((prev) => {
      //   return {
      //     ...prev,
      //     employee: {
      //       ...prev.employee,
      //       newUser,
      //     },
      //   };
      // });
    }
  }, [completeRegisterSelector]);
  return (
    <>
      {!userLogged.loggedIn && <LoggedOut></LoggedOut>}
      {userLogged.loggedIn && !userAuth.isEmployee && (
        <LoggedInPatient></LoggedInPatient>
      )}
      {userLogged.loggedIn && userAuth.isEmployee && (
        <LoggedInEmployee></LoggedInEmployee>
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginSelectionPanel} />
        <Route
          path="/login-patient"
          component={() => <LoginForm isEmployee={false}></LoginForm>}
        />
        <Route
          path="/login-employee"
          component={() => <LoginForm isEmployee={true}></LoginForm>}
        />
        {/* Change Login form for employee vs patient */}
        <Route path="/register" component={RegisterSelectionPanel} />
        <Route
          path="/register-patient"
          component={() => (
            <RegisterForm
              formData={patientFormData}
              isEmployee={false}
            ></RegisterForm>
          )}
        />
        <Route
          path="/register-employee"
          component={() => (
            <RegisterForm
              formData={employeeFormData}
              isEmployee={true}
            ></RegisterForm>
          )}
        />
        <Route
          path="/register-clinic"
          component={() => (
            <RegisterForm formData={clinicFormData}></RegisterForm>
          )}
        />
        <Route
          path="/patient/profile"
          component={() => (
            <PatientProfileIndex {...userLogged.user}></PatientProfileIndex>
          )}
        />

        <Route
          path="/clinics"
          component={() => (
            <BookAppointments
              clinicsList={clinics}
              clinicName={clinicName}
              setClinicName={setClinicName}
            ></BookAppointments>
          )}
        />

        <Route
          path="/clinic-medical-records"
          component={() => (
            <PatientMedicalRecords
              setPatientName={setPatientName}
              patientName={patientName}
              patientsList={patients}
            ></PatientMedicalRecords>
          )}
        />

        <Route
          path={`/clinic/appointments/${localStorage.getItem("clinic_id")}`}
          component={() => (
            <ManageAppointments clinic={clinic}></ManageAppointments>
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
