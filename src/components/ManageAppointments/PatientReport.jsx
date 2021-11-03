import React, { useState } from "react";
import "./PatientReport.scss";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Column from "react-bootstrap/Col";
import { FloatingLabel, Form } from "react-bootstrap";

const PatientReport = ({
  patient,
  report,
  editing,
  setEditing,
  reportIndex,
  currentlyEditing,
  deleteReport,
  editPatientRecord,
}) => {
  const [reportData, setReportData] = useState({
    info: report.information,
    medication: report.medication_prescribed,
    referral: report.referral,
    id: report.id,
  });
  console.log(report);
  const isEditing = currentlyEditing();
  const removeReport = () => {
    deleteReport();
    setEditing(false);
  };

  return (
    <Row
      className="report-container py-4 mb-3"
      style={{ paddingRight: "40px", paddingLeft: "40px" }}
    >
      <Row className="d-flex dates-container">
        <Column>
          {editing && (
            <span style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
              Currently Editing
            </span>
          )}
          <p>
            Created on {new Date(report.created_at).toLocaleDateString() || ""}
          </p>
          <p>Created by {report.created_by || "Dr. Smith Jones"}</p>
        </Column>
        <Column className="d-flex align-items-end flex-column">
          <p>
            Last updated{" "}
            {new Date(report.updated_at).toLocaleDateString() || ""}
          </p>
          <p>Last updated by {report.last_updated_by || "Dr. Smith Jones"}</p>
        </Column>
      </Row>
      <Row
        style={{
          paddingRight: "40px",
          paddingLeft: "40px",
          fontWeight: "bold",
        }}
        className="d-flex flex-column"
      >
        <Column>
          <Form>
            <Form.Group className="mb-3" controlId="info">
              <FloatingLabel
                className="report-area w-75"
                controlId="floatingTextarea2"
                label="Information"
              >
                <Form.Control
                  name="info"
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "150px" }}
                  value={reportData.info}
                  onChange={(e) => {
                    const { value } = e.target;

                    setReportData((prev) => {
                      let obj = Object.assign({}, prev);
                      obj.info = value;
                      return obj;
                    });
                  }}
                  className="my-2"
                  disabled={!editing}
                />
              </FloatingLabel>
            </Form.Group>
            <Row className="g-2 d-flex flex-row">
              <Column xs="auto" className="w-25">
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Prescription"
                >
                  <Form.Control
                    name="medication"
                    type="text"
                    placeholder=""
                    value={reportData.medication}
                    onChange={(e) => {
                      const { value } = e.target;
                      setReportData((prev) => {
                        let obj = Object.assign({}, prev);
                        obj.medication = value;
                        return obj;
                      });
                    }}
                    disabled={!editing}
                  />
                </FloatingLabel>
              </Column>
              <Column md="auto" className="w-25">
                <FloatingLabel
                  controlId="floatingInputGrid2"
                  label="Referrals"
                  className=""
                >
                  <Form.Control
                    name="referral"
                    value={reportData.referral}
                    type="text"
                    placeholder=""
                    onChange={(e) => {
                      const { value } = e.target;

                      setReportData((prev) => {
                        let obj = Object.assign({}, prev);
                        obj.referral = value;
                        return obj;
                      });
                    }}
                    disabled={!editing}
                  />
                </FloatingLabel>
              </Column>
              <Column style={{ paddingLeft: "25px" }} xs="auto" className="">
                {!editing && !isEditing && (
                  <Button
                    variant="primary"
                    style={{ width: "100px", marginRight: "10px" }}
                    type="button"
                    onClick={() =>
                      setEditing((prev) => {
                        let newForm = Object.assign({}, prev);
                        newForm[reportIndex] = true;
                        return newForm;
                      })
                    }
                  >
                    Edit
                  </Button>
                )}
                {editing && (
                  <>
                    <Button
                      style={{ width: "100px", marginRight: "10px" }}
                      variant="success"
                      type="button"
                      onClick={() => {
                        setEditing((prev) => {
                          let newForm = Object.assign({}, prev);
                          newForm[reportIndex] = false;
                          return newForm;
                        });
                        console.log(reportData, patient.id);
                        editPatientRecord(reportData, patient.id);
                      }}
                    >
                      Save
                    </Button>
                    <Button
                      style={{ width: "100px" }}
                      variant="danger"
                      type="button"
                      onClick={() => removeReport()}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </Column>
            </Row>
          </Form>
          <></>
        </Column>
      </Row>
    </Row>
  );
};

export default PatientReport;
