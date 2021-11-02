import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./PatientSchedule.scss";
import { format } from "date-fns";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const PatientSchedule = ({ clinicRecords, clinicName }) => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    setVisible(false);
  };

  const recordList = Object.keys(clinicRecords) ? (
    Object.keys(clinicRecords).map((record, index) => {
      const date = new Date(clinicRecords[record].created_at);
      var formattedDate = format(date, "MMMM do, yyyy");
      var time = date.getHours();
      return (
        <tr key={record}>
          <td>{formattedDate}</td>
          <td>{time < 12 && time >= 8 ? time + ":00 AM" : time + ":00 PM"}</td>
          <td>
            {clinicRecords[record].first_name +
              " " +
              clinicRecords[record].last_name}
          </td>
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

              <Modal
                centered
                animation={false}
                show={show}
                backdrop={false}
                scrollable={true}
                onExit={() => setVisible(false)}
                onHide={() => {
                  handleClose();
                  setVisible(false);
                }}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Appointment Notes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {clinicRecords[record].information || (
                    <span className={visible ? "d-none" : "d-block"}>
                      No Information entered
                    </span>
                  )}

                  <>
                    <FloatingLabel
                      className={visible ? "d-block" : "d-none"}
                      controlId="floatingTextarea2"
                      label="Comments"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "100px" }}
                      />
                    </FloatingLabel>
                  </>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    className={visible ? "d-block" : "d-none"}
                    variant="secondary"
                    onClick={() => setVisible(false)}
                  >
                    Go Back
                  </Button>
                  <Button
                    className={visible ? "d-none" : "d-block"}
                    variant="success"
                    onClick={() => setVisible(true)}
                  >
                    Edit
                  </Button>
                  <Button
                    className={visible ? "d-block" : "d-none"}
                    variant="success"
                    onClick={() => {
                      handleSave();
                    }}
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </td>
        </tr>
      );
    })
  ) : (
    <></>
  );
  return (
    <Container
      className="justify-content-center align-items-center text-center d-flex flex-column"
      fluid
    >
      <h1 className="fs-5">Upcoming Appointments</h1>

      <Table className="table individual-scrollable-table">
        <tbody>{recordList}</tbody>
      </Table>
    </Container>
  );
};

export default PatientSchedule;
