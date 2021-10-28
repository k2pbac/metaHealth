import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./PatientSchedule.scss";

const PatientSchedule = ({ patient }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              <td>
                <>
                  <a
                    onClick={handleShow}
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "blue",
                    }}
                  >
                    Appointment Notes
                  </a>

                  <Modal animation={false} show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Appointment Notes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{appointment.report}</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PatientSchedule;
