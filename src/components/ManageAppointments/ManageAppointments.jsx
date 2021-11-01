import React from "react";
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
const ManageAppointments = ({ clinic, isEmployee }) => {
  console.log(clinic);
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
            <p className="w-25">{clinic.address}</p>
          </>
        )}

        <Calendar className="mb-5" />
        {isEmployee && <a href="#!">View Patient Medical Records</a>}
      </Column>
      <Column>
        <Row>
          <Column>
            {(!isEmployee && (
              <Schedule appointmentData={patientSchedule}></Schedule>
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
