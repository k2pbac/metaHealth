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
import RegisterToAClinicForm from "./RegisterForm/RegisterToAClinicForm";
import PatientMedicalRecords from "./PatientMedicalRecords/PatientMedicalRecords";
import {
  employeeFormData,
  patientFormData,
  clinicFormData,
  registerToAClinicFormData,
} from "./RegisterForm/FormData";
import BookAppointments from "./BookAppointments/BookAppointments";
import PatientProfileIndex from "./View_Profile/PatientProfileIndex";
import EmployeeProfileIndex from "./View_Profile/EmployeeProfileIndex";
import { useSelector, useStore, useDispatch } from "react-redux";
import useApplicationData from "hooks/useApplicationData";
import {
  displayClinics,
  viewPatientProfile,
  displayClinicAddress,
  displayClinicAppointments,
} from "helpers/selectors";
import { userServices } from "hooks/userServices";
import { useHistory } from "react-router-dom";
import { loginUser, registerComplete } from "../actions/index";
import LoggedInEmployee from "./Navbar/LoggedState/LoggedInEmployee";
import LoggedOut from "./Navbar/LoggedState/LoggedOut";
import ManageAppointments from "./ManageAppointments/ManageAppointments";
import PatientReportView from "./ManageAppointments/PatientReportView";
import PatientSchedule from "./PatientSchedule/PatientSchedule";
import PatientAppointmentList from "./PatientSchedule/PatientAppointmentList";

export default function Application(props) {
  const completeRegisterSelector = useSelector((state) => state.registerUser);
  const userAuth = useSelector((state) => state.userAuth);
  const userLogged = useSelector((state) => state.userLogged);
  const [appointmentList, setAppointmentList] = useState({});

  const [isEmployee, setIsEmployee] = useState("");

  //Get value of local storage with JSON parse
  const getLocalStorage = (item) => {
    return JSON.parse(localStorage.getItem(item));
  };

  // getting individual clinic for manage appointment component
  const [clinic, setClinic] = useState();
  const dispatch = useDispatch();
  // let clinic = {};
  const history = useHistory();
  const {
    setAppState,
    appState,
    patients,
    patientName,
    setPatientName,
    // Clinic name for book appointments component to enter into search bar
    clinicName,
    setClinicName,
    //Clinics for book appointments component to display clinics after searching
    setClinics,
    clinics,
    bookAppointment,
    deleteAppointment,
    updatePatientProfile,
    updateEmployeeProfile,
    updatePatientNotes,
    getPatientAppointmentsList,

    editPatientRecord,
  } = useApplicationData();

  const {
    submitPatientRegistration,
    submitEmployeeRegistration,
    submitClinicRegistration,
    authenticateEmployee,
    authenticatePatient,
  } = userServices;

  const setClinicAddress = async (clinic_id) => {
    const clinic = await displayClinicAddress(appState, clinic_id);
    setClinic({ ...clinic });
    localStorage.setItem("clinic", JSON.stringify(clinic));
  };

  history.listen((nextLocation) => {
    if (
      getLocalStorage("isEmployee") &&
      userLogged &&
      userLogged.user &&
      userLogged.user.clinic_id &&
      userLogged.user.clinic_id !== null
    ) {
      setClinicAddress(userLogged.user.clinic_id);
    }

    if (nextLocation.pathname === "/clinics") {
      setClinicName("");
    }
  });
  useEffect(() => {
    if (userLogged.update_profile && !getLocalStorage("isEmployee")) {
      updatePatientProfile(userLogged.user);
    } else if (userLogged.update_profile && getLocalStorage("isEmployee")) {
      updateEmployeeProfile(userLogged.user);
    }
  }, [userLogged.user]);

  useEffect(() => {
    setClinics(displayClinics(appState, clinicName));
  }, [clinicName]);

  useEffect(() => {
    if (completeRegisterSelector) {
      if (completeRegisterSelector.isClinic) {
        submitClinicRegistration(completeRegisterSelector).then((res) => {
          if (res.payload) {
            history.push("/");
          }
        });
      } else if (completeRegisterSelector.isEmployee) {
        if (completeRegisterSelector.isEmployee) {
          submitEmployeeRegistration(completeRegisterSelector).then((res) => {
            console.log(res);
            if (res.payload) {
              history.push("/");
            }
          });
        }
      } else {
        submitPatientRegistration(completeRegisterSelector)
          .then((res) => {
            if (res.payload) {
              history.push("/");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
      // dispatch(registerComplete());
    }
  }, [completeRegisterSelector]);

  useEffect(() => {
    if (userAuth && !userLogged.loggedIn) {
      if (userAuth.isEmployee) {
        authenticateEmployee(userAuth).then((res) => {
          dispatch(loginUser(res, true));
          setIsEmployee(true);
          if (getLocalStorage("user")) {
            history.push("/");
          }
        });
      } else if (!userAuth.isEmployee) {
        authenticatePatient(userAuth).then((res) => {
          dispatch(loginUser(res, false));
          setIsEmployee(false);
          console.log(userLogged);

          if (getLocalStorage("user")) {
            history.push("/");
          }
        });
      }
    }
  }, [userAuth]);

  return (
    <div className="">
      {!userLogged.loggedIn && <LoggedOut></LoggedOut>}
      {/* Patient Nav View */}
      {userLogged.loggedIn && getLocalStorage("isEmployee") == false && (
        <LoggedInPatient></LoggedInPatient>
      )}
      {userLogged.loggedIn && getLocalStorage("isEmployee") == true && (
        <LoggedInEmployee></LoggedInEmployee>
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/login/patient"
          component={() => <LoginForm isEmployee={false}></LoginForm>}
        />
        <Route
          path="/login/employee"
          component={() => <LoginForm isEmployee={true}></LoginForm>}
        />
        <Route
          path="/register/patient"
          component={() => (
            <RegisterForm
              formData={patientFormData}
              isEmployee={false}
            ></RegisterForm>
          )}
        />
        <Route
          path="/register/employee"
          component={() => (
            <RegisterForm
              formData={employeeFormData}
              isEmployee={true}
            ></RegisterForm>
          )}
        />
        <Route
          path="/register/clinic"
          component={() => (
            <RegisterForm formData={clinicFormData}></RegisterForm>
          )}
        />

        <Route
          path="/register/existing/clinic"
          component={() => (
            <RegisterToAClinicForm
              clinicsList={clinics}
              clinicName={clinicName}
              setClinicName={setClinicName}
            ></RegisterToAClinicForm>
          )}
        />

        <Route path="/login" component={LoginSelectionPanel} />
        {/* Change Login form for employee vs patient */}
        <Route path="/register" component={RegisterSelectionPanel} />

        <Route
          path="/patient/profile"
          component={() => (
            <PatientProfileIndex {...userLogged.user}></PatientProfileIndex>
          )}
        />

        <Route
          path="/employee/profile"
          component={() => (
            <EmployeeProfileIndex
              {...userLogged.user}
              appState={appState}
            ></EmployeeProfileIndex>
          )}
        />

        <Route
          path="/clinics"
          component={() => (
            <BookAppointments
              setClinicAddress={setClinicAddress}
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
          path="/clinic/patient/record/:id"
          render={(props) => (
            <PatientReportView
              appState={appState}
              {...props}
              editPatientRecord={editPatientRecord}
            ></PatientReportView>
          )}
        />

        <Route
          path={`/clinic/appointments/:id`}
          component={() => (
            <ManageAppointments
              setAppState={setAppState}
              bookAppointment={bookAppointment}
              deleteAppointment={deleteAppointment}
              appState={appState}
              clinic={clinic || getLocalStorage("clinic")}
              updatePatientNotes={updatePatientNotes}
            ></ManageAppointments>
          )}
        />

        <Route
          path={`/patient/:id/appointments`}
          render={(props) => (
            <PatientAppointmentList
              {...props}
              appState={appState}
            ></PatientAppointmentList>
          )}
        />

        {/* Manage Appointments Routes for Employee and Patient - will need to figure out how to pass params */}
        {/* View Patient Medical Records Routes will also need params passed  */}
        {/* Add/Edit Patient Medical Record Page route will need clinic params */}
      </Switch>
      <Footer></Footer>
    </div>
  );
}
