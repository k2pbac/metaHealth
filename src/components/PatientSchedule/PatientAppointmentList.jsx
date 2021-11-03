import React from "react";
import "./PatientAppointmentList.scss";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
const PatientAppointmentList = () => {
  return (
    <Container
      className="justify-content-center align-items-center text-center d-flex flex-column"
      fluid
    >
      <h1 className="fs-5">Upcoming Appointments</h1>

      <Table className="table individual-scrollable-table">
        {/* <tbody>{recordList}</tbody> */}
      </Table>
    </Container>
  );
};

export default PatientAppointmentList;
