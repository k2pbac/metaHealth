import React from "react";
import "./PatientReport.scss";
import { patientReportData } from "./patientReportData";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Column from "react-bootstrap/Col";
import { FloatingLabel, Form } from "react-bootstrap";
const PatientReport = ({ report }) => {
  return (
    <Row
      className="report-container py-4"
      style={{ paddingRight: "40px", paddingLeft: "40px" }}
    >
      <Row className="d-flex dates-container">
        <Column>
          <p>Created on {patientReportData.reportDetails.created_on}</p>
          <p>Created by {patientReportData.reportDetails.created_by}</p>
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
            <FloatingLabel controlId="floatingTextarea2" label="Information">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "150px", width: "75%" }}
                value={patientReportData.reportDetails.information}
              />
            </FloatingLabel>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <></>
        </Column>
        <Column></Column>
      </Row>
    </Row>
  );
};

export default PatientReport;
