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
import { displayClinicAppointments } from "helpers/selectors";
const ManageAppointments = ({ clinic, isEmployee, appState }) => {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [appointments, setAppointments] = useState({});
  console.log("Clinic:", clinic);
  useEffect(() => {
    setAppointments({
      ...displayClinicAppointments(
        appState,
        currentDay.toLocaleDateString("en-US"),
        clinic.id
      ),
      isEmployee,
    });
  }, []);

  const handleCalendarChange = (value, event) => {
    setCurrentDay(value);
    setAppointments({
      ...displayClinicAppointments(
        appState,
        value.toLocaleDateString("en-US"),
        clinic.id
      ),
      isEmployee,
    });
  };

  return (
    <Row className="p-3">
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
            {(!isEmployee && (
              <Schedule appointmentData={appointments}></Schedule>
            )) || <Schedule appointmentData={employeeSchedule}></Schedule>}
          </Column>
          <Column>
            <PatientSchedule patient={patient}></PatientSchedule>
          </Column>
        </Row>
      </Column>
    </Row>
  );
};

export default ManageAppointments;
