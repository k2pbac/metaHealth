import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./PatientSchedule.scss";
import { format } from "date-fns";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const PatientSchedule = ({ clinicRecords, clinicName, updatePatientNotes }) => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [updateText, setUpdateText] = useState(false);
  const [modalState, setModalState] = useState({ activeModal: null });

  const handleSave = (appointment_id) => {
    setVisible(false);
    updatePatientNotes({ patient_notes: textAreaValue, appointment_id });
    setUpdateText(true);
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
                onClick={(e) => {
                  handleShow();
                  setModalState({ activeModal: index });
                }}
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
                show={show && modalState.activeModal === index}
                backdrop={false}
                scrollable={true}
                onExit={() => setVisible(false)}
                onHide={() => {
                  handleClose();
                  setVisible(false);
                  setModalState({ activeModal: null });
                }}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Appointment Notes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {updateText ? (
                    <p className={visible ? "d-none" : "d-block"}>
                      {textAreaValue}
                    </p>
                  ) : (
                    (
                      <p className={visible ? "d-none" : "d-block"}>
                        {clinicRecords[record].patient_notes}
                      </p>
                    ) || (
                      <span className={visible ? "d-none" : "d-block"}>
                        No Information entered
                      </span>
                    )
                  )}
                  <>
                    <Form.Control
                      name="textarea"
                      // value={textAreaValue}
                      defaultValue={clinicRecords[record].patient_notes}
                      onChange={(e) => setTextAreaValue(e.target.value)}
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      className={visible ? "d-block" : "d-none"}
                    />
                  </>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    className={visible ? "d-block" : "d-none"}
                    variant="secondary"
                    onClick={(e, index) => {
                      setVisible(false);
                    }}
                  >
                    Go Back
                  </Button>
                  <Button
                    className={visible ? "d-none" : "d-block"}
                    variant="success"
                    onClick={(e, index) => {
                      setVisible(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    className={visible ? "d-block" : "d-none"}
                    variant="success"
                    onClick={() => {
                      handleSave(clinicRecords[record].appointment_id);
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
