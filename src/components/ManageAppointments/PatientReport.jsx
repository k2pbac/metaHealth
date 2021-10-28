import React from "react";
import "./PatientReport.scss";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Column from "react-bootstrap/Col";
import { FloatingLabel, Form } from "react-bootstrap";
const PatientReport = ({ report, clinic, patient }) => {
  return (
    <Row
      className="report-container py-4"
      style={{ paddingRight: "40px", paddingLeft: "40px" }}
    >
      <Row className="d-flex dates-container">
        <Column>
          <p>Created on {patientReportData.report.created_on}</p>
          <p>Created by {patientReportData.report.created_by}</p>
        </Column>
        <Column className="d-flex align-items-end flex-column">
          <p>Last updated {patientReportData.reportDetails.last_updated}</p>
          <p>
            Last updated by {patientReportData.reportDetails.last_updated_by}
          </p>
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
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "150px" }}
                  value={patientReportData.reportDetails.information}
                  className="my-2"
                />
              </FloatingLabel>
            </Form.Group>
            <Row className="g-2 d-flex flex-row">
              <Column xs="auto" className="w-25">
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Prescription Medication"
                >
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={
                      patientReportData.reportDetails.medication_prescribed ||
                      ""
                    }
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
                    value={patientReportData.reportDetails.referral || ""}
                    type="text"
                    placeholder=""
                  />
                </FloatingLabel>
              </Column>
              <Column style={{ paddingLeft: "25px" }} xs="auto" className="">
                <Button
                  variant="secondary"
                  style={{ width: "100px", marginRight: "10px" }}
                  type="submit"
                >
                  Edit
                </Button>
                <Button
                  style={{ width: "100px" }}
                  variant="danger"
                  type="submit"
                >
                  Delete
                </Button>
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
