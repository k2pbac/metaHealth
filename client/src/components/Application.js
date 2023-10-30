import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  Routes,
  Redirect,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "components/Application.scss";
import Home from "./Home/Home";
import Footer from "./Footer";
import LoggedInPatient from "./Navbar/LoggedState/LoggedInPatient";
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
} from "./RegisterForm/FormData";
import BookAppointments from "./BookAppointments/BookAppointments";
import PatientProfileIndex from "./View_Profile/PatientProfileIndex";
import EmployeeProfileIndex from "./View_Profile/EmployeeProfileIndex";
import { useSelector, useStore, useDispatch } from "react-redux";
import useApplicationData from "hooks/useApplicationData";
import { displayClinics, displayClinicAddress } from "helpers/selectors";
import { userServices } from "hooks/userServices";
import LoggedInEmployee from "./Navbar/LoggedState/LoggedInEmployee";
import LoggedOut from "./Navbar/LoggedState/LoggedOut";
import ManageAppointments from "./ManageAppointments/ManageAppointments";
import PatientReportView from "./ManageAppointments/PatientReportView";
import PatientAppointmentList from "./PatientSchedule/PatientAppointmentList";
import { alertActions } from "actions/userAuthAlerts";
export default function Application(props) {
  const completeRegisterSelector = useSelector((state) => state.registerUser);
  const alert = useSelector((state) => state.alert);
  const userLogged = useSelector((state) => state.userLogged);
  const dispatch = useDispatch();
  //Get value of local storage with JSON parse
  const getLocalStorage = (item) => {
    return JSON.parse(localStorage.getItem(item));
  };

  // getting individual clinic for manage appointment component
  const [clinic, setClinic] = useState();
  const navigate = useNavigate();
  const location = useLocation();
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
    editPatientRecord,
  } = useApplicationData();

  const {
    submitPatientRegistration,
    submitEmployeeRegistration,
    submitClinicRegistration,
  } = userServices;

  const setClinicAddress = async (clinic_id) => {
    const clinic = await displayClinicAddress(appState, clinic_id);
    setClinic({ ...clinic });
    localStorage.setItem("clinic", JSON.stringify(clinic));
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    dispatch(alertActions.clear());
    if (
      getLocalStorage("isEmployee") &&
      userLogged &&
      userLogged.user &&
      userLogged.user.clinic_id &&
      userLogged.user.clinic_id !== null
    ) {
      setClinicAddress(userLogged.user.clinic_id);
    }

    if (location.pathname === "/clinics") {
      setClinicName("");
    }
  }, [location]);

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
        submitClinicRegistration(completeRegisterSelector)
          .then((res) => {
            if (res.payload) {
              navigate("/");
            } else {
              dispatch(alertActions.error(res.message));
              scrollTop();
            }
          })
          .catch((err) => {
            dispatch(alertActions.error(res.message));
            scrollTop();
          });
      } else if (completeRegisterSelector.isEmployee) {
        if (completeRegisterSelector.isEmployee) {
          submitEmployeeRegistration(completeRegisterSelector)
            .then((res) => {
              if (res.payload) {
                navigate("/");
              } else {
                dispatch(alertActions.error(res.message));
                scrollTop();
              }
            })
            .catch((err) => {
              dispatch(alertActions.error(res.message));
              scrollTop();
            });
        }
      } else {
        submitPatientRegistration(completeRegisterSelector)
          .then((res) => {
            if (res.payload) {
              navigate("/");
            } else {
              dispatch(alertActions.error(res.message));
              scrollTop();
            }
          })
          .catch((err) => {
            dispatch(alertActions.error(res.message));
            scrollTop();
          });
      }
    }
  }, [completeRegisterSelector]);

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
      {!!alert.type && !!alert.message ? (
        <div className={`alert ${alert.type} text-center`} role="alert">
          {alert.message}
        </div>
      ) : null}
      {userLogged.loggedIn ? (
        <Routes>
          <Route
            exact
            path="/"
            element={<Home loggedIn={userLogged.loggedIn}></Home>}
          />
          <Route
            path="/login/patient"
            element={<LoginForm isEmployee={false}></LoginForm>}
          />
          <Route
            path="/login/employee"
            element={<LoginForm isEmployee={true}></LoginForm>}
          />
          <Route
            path="/register/patient"
            element={
              <RegisterForm
                formData={patientFormData}
                isEmployee={false}
              ></RegisterForm>
            }
          />
          <Route
            path="/register/employee"
            element={
              <RegisterForm
                formData={employeeFormData}
                isEmployee={true}
              ></RegisterForm>
            }
          />
          <Route
            path="/register/clinic"
            element={<RegisterForm formData={clinicFormData}></RegisterForm>}
          />

          <Route
            path="/register/existing/clinic"
            element={
              <RegisterToAClinicForm
                clinicsList={clinics}
                clinicName={clinicName}
                setClinicName={setClinicName}
              ></RegisterToAClinicForm>
            }
          />

          <Route path="/login" element={<LoginSelectionPanel />} />
          <Route path="/register" element={<RegisterSelectionPanel />} />

          <Route
            path="/patient/profile"
            element={
              <PatientProfileIndex {...userLogged.user}></PatientProfileIndex>
            }
          />

          <Route
            path="/employee/profile"
            element={
              <EmployeeProfileIndex
                {...userLogged.user}
                appState={appState}
              ></EmployeeProfileIndex>
            }
          />

          <Route
            path="/clinics"
            element={
              <BookAppointments
                setClinicAddress={setClinicAddress}
                clinicsList={clinics}
                clinicName={clinicName}
                setClinicName={setClinicName}
              ></BookAppointments>
            }
          />

          <Route
            path="/clinic-medical-records"
            element={
              <PatientMedicalRecords
                setPatientName={setPatientName}
                patientName={patientName}
                patientsList={patients}
              ></PatientMedicalRecords>
            }
          />

          <Route
            path="/clinic/patient/record/:id"
            element={
              <PatientReportView
                appState={appState}
                editPatientRecord={editPatientRecord}
              ></PatientReportView>
            }
          />

          <Route
            path={`/clinic/appointments/:id`}
            element={
              <ManageAppointments
                setAppState={setAppState}
                bookAppointment={bookAppointment}
                deleteAppointment={deleteAppointment}
                appState={appState}
                clinic={clinic || getLocalStorage("clinic")}
                updatePatientNotes={updatePatientNotes}
              ></ManageAppointments>
            }
          />

          <Route
            path={`/patient/:id/appointments`}
            element={
              <PatientAppointmentList
                appState={appState}
              ></PatientAppointmentList>
            }
          />
        </Routes>
      ) : (
        <Routes>
          <Route
            exact
            path="/"
            element={<Home loggedIn={userLogged.loggedIn}></Home>}
          />
          <Route
            path="/login/patient"
            element={<LoginForm isEmployee={false}></LoginForm>}
          />
          <Route
            path="/login/employee"
            element={<LoginForm isEmployee={true}></LoginForm>}
          />
          <Route
            path="/register/patient"
            element={
              <RegisterForm
                formData={patientFormData}
                isEmployee={false}
              ></RegisterForm>
            }
          />
          <Route
            path="/register/employee"
            element={
              <RegisterForm
                formData={employeeFormData}
                isEmployee={true}
              ></RegisterForm>
            }
          />
          <Route path="/login" element={<LoginSelectionPanel />} />
          <Route path="/register" element={<RegisterSelectionPanel />} />
          <Route path="/*" element={<LoginSelectionPanel />} />
        </Routes>
      )}
      <Footer></Footer>
    </div>
  );
}
