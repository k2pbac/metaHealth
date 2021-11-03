import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./ManageAppointments.scss";
import "react-calendar/dist/Calendar.css";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import Schedule from "components/Schedule/Schedule";
import PatientSchedule from "components/PatientSchedule/PatientSchedule";
import { patient } from "components/PatientSchedule/patient_appointment";
import {
  employeeSchedule,
  patientSchedule,
} from "components/Schedule/AppointmentData";
import { displayClinicAppointments, getClinicRecords } from "helpers/selectors";
import { useSelector } from "react-redux";
import { format } from "date-fns";

import Spinner from "react-bootstrap/Spinner";

import ClinicEmployeeList from "./ClinicEmployeeList";

import { userServices } from "hooks/userServices";
const { getEmployeesForClinic, verifyEmployee, unverifyEmployee } =
  userServices;

const ManageAppointments = ({
  clinic,
  isEmployee,
  appState,
  bookAppointment,
  deleteAppointment,
  setAppState,
  updatePatientNotes,
}) => {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [appointments, setAppointments] = useState({});
  const [clinicRecords, setClinicRecords] = useState({});
  // State for employee list in manage appointment index
  const [employeeList, setEmployeeList] = useState();

  const loggedUser = useSelector((state) => state.userLogged);

  useEffect(() => {
    const date = new Date(currentDay);
    var formattedDate = format(date, "MMMM do, yyyy");

    if (clinic) {
      setAppointments({
        ...displayClinicAppointments(
          appState,
          currentDay.toLocaleDateString("en-US"),
          clinic.id
        ),
        isEmployee,
        patient: loggedUser.user.first_name,
        id: loggedUser.user.id,
        date: formattedDate,
        clinic_id: clinic.id,
        bookingDate: currentDay,
      });
      setClinicRecords({
        ...getClinicRecords(
          appState,
          formattedDate,
          loggedUser.user.id,
          clinic.id
        ),
      });
      if (JSON.parse(localStorage.getItem("isEmployee"))) {
        setEmployeeList(() => {
          const clinic_id = loggedUser.user.clinic_id;
          return getEmployeesForClinic(clinic_id);
        });
      }
    }
  }, [appState]);

  const handleCalendarChange = (value, event) => {
    const date = new Date(value);
    var formattedDate = format(date, "MMMM do, yyyy");

    setCurrentDay(value);
    setAppointments({
      ...displayClinicAppointments(
        appState,
        value.toLocaleDateString("en-US"),
        clinic.id
      ),
      isEmployee,
      patient: loggedUser.user.first_name,
      id: loggedUser.user.id,
      date: formattedDate,
      clinic_id: clinic.id,
      bookingDate: value,
    });
    setClinicRecords({
      ...getClinicRecords(
        appState,
        formattedDate,
        loggedUser.user.id,
        clinic.id
      ),
    });
  };

  return (
    (clinic &&
      employeeList &&
      JSON.parse(localStorage.getItem("isEmployee")) && (
        <Row className="p-3 w-100">
          <Column>
            {(isEmployee && (
              <div className="d-flex flex-column align-items-center">
                <h3>{employeeSchedule.clinic}</h3>
                <p style={{ width: "50%" }}>{clinic.address}</p>
              </div>
            )) || (
              <>
                <span>{clinic.name}</span>
                <p className="w-50">{clinic.address}</p>
              </>
            )}

            <Calendar
              className="mb-5"
              onChange={handleCalendarChange}
              value={currentDay}
            />
            {isEmployee && <a href="#!">View Patient Medical Records</a>}
          </Column>
          <Column>
            <Row>
              <Column>
                {(!JSON.parse(localStorage.getItem("isEmployee")) && (
                  <Schedule
                    setAppointments={setAppointments}
                    bookAppointment={bookAppointment}
                    appointmentData={appointments}
                    deleteAppointment={deleteAppointment}
                  ></Schedule>
                )) ||
                  (JSON.parse(localStorage.getItem("isEmployee")) && (
                    <Schedule
                      setAppointments={setAppointments}
                      bookAppointment={bookAppointment}
                      appointmentData={appointments}
                      deleteAppointment={deleteAppointment}
                    ></Schedule>
                  ))}
              </Column>
              <Column>
                {(!JSON.parse(localStorage.getItem("isEmployee")) && (
                  <PatientSchedule
                    patient={patient}
                    clinicRecords={clinicRecords}
                    clinicName={clinic.name}
                    updatePatientNotes={updatePatientNotes}
                  ></PatientSchedule>
                )) ||
                  (employeeList && (
                    <ClinicEmployeeList
                      employeeList={employeeList}
                    ></ClinicEmployeeList>
                  ))}
              </Column>
            </Row>
          </Column>
        </Row>
      )) ||
    (clinic && (
      <Row className="p-3 w-100">
        <Column>
          <>
            <span>{clinic.name}</span>
            <p className="w-50">{clinic.address}</p>
          </>

          <Calendar
            className="mb-5"
            onChange={handleCalendarChange}
            value={currentDay}
          />
          {isEmployee && <a href="#!">View Patient Medical Records</a>}
        </Column>
        <Column>
          <Row>
            <Column>
              {!JSON.parse(localStorage.getItem("isEmployee")) && (
                <Schedule
                  setAppointments={setAppointments}
                  bookAppointment={bookAppointment}
                  appointmentData={appointments}
                  deleteAppointment={deleteAppointment}
                ></Schedule>
              )}
            </Column>
            <Column>
              {!JSON.parse(localStorage.getItem("isEmployee")) && (
                <PatientSchedule
                  patient={patient}
                  clinicRecords={clinicRecords}
                  clinicName={clinic.name}
                  updatePatientNotes={updatePatientNotes}
                ></PatientSchedule>
              )}
            </Column>
          </Row>
        </Column>
      </Row>
    )) || <Spinner></Spinner>
  );
};

export default ManageAppointments;
