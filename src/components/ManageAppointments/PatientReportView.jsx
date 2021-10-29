import React from "react";
import { Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import PatientDetails from "./PatientDetails";
import PatientReportList from "./PatientReportList";
import "./PatientReportView.scss";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";
import Container from "react-bootstrap/Container";
const PatientReportView = (props) => {
  return (
    <Container className="patient-view">
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={4} className="p-0">
          <PatientDetails></PatientDetails>
        </Col>
        <Col xs={8} style={{ height: "700px" }}>
          <Row className="d-flex justify-content-center flex-column">
            <div class="d-flex p-0">
              <Col md={3}>
                <FloatingLabel controlId="floatingSelectGrid" label="Day">
                  <Form.Select aria-label="Floating label select example">
                    <option disabled selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col md={3}>
                <FloatingLabel controlId="floatingSelectGrid" label="Month">
                  <Form.Select aria-label="Floating label select example">
                    <option disabled selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col md={3}>
                <FloatingLabel controlId="floatingSelectGrid" label="Year">
                  <Form.Select aria-label="Floating label select example">
                    <option disabled selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </div>

            <div
              className="patient-component"
              style={{
                overflow: "hidden",
                overflowY: "scroll",
                height: "640px",
              }}
            >
              <PatientReportList></PatientReportList>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PatientReportView;
