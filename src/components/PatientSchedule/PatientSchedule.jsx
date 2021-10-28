import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "./PatientSchedule.scss";

const PatientSchedule = ({ patient }) => {
  return (
    <Container
      className="justify-content-center align-items-center text-center d-flex flex-column"
      fluid
    >
      <h1 className="fs-5">Upcoming Appointments</h1>

      <Table className="table individual-scrollable-table">
        <tbody>
          {patient.appointments.map((appointment) => (
            <tr>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.clinic}</td>
              <td>Appointment Notes</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PatientSchedule;
