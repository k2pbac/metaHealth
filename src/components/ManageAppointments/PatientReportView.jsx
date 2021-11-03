import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import PatientDetails from "./PatientDetails";
import PatientReportList from "./PatientReportList";
import "./PatientReportView.scss";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { getPatientMedicalRecords } from "helpers/selectors";
const PatientReportView = (props) => {
  const { match, appState, editPatientRecord } = props;
  const [reportData, setReportData] = useState({});
  const [createNewReport, setCreateNewReport] = useState(false);

  useEffect(() => {
    if (Object.keys(appState).length) {
      const data = getPatientMedicalRecords(appState, match.params.id);
      setReportData(data);
    }
  }, [appState, match.params.id]);

  const report = Object.keys(reportData).length && (
    <Container className="patient-view">
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={4} className="p-0">
          <PatientDetails
            setCreateNewReport={setCreateNewReport}
            reportData={reportData}
          ></PatientDetails>
        </Col>
        <Col xs={8} style={{ height: "700px" }}>
          <Row className="d-flex justify-content-center flex-column">
            <div className="d-flex p-0">
              <Col md={3}>
                <FloatingLabel controlId="floatingSelectGrid" label="Day">
                  <Form.Select aria-label="Floating label select example">
                    <option disabled defaultValue></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col md={3}>
                <FloatingLabel controlId="floatingSelectGrid" label="Month">
                  <Form.Select aria-label="Floating label select example">
                    <option disabled defaultValue></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col md={3}>
                <FloatingLabel controlId="floatingSelectGrid" label="Year">
                  <Form.Select aria-label="Floating label select example">
                    <option disabled defaultValue></option>
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
              {Object.keys(reportData).length && (
                <PatientReportList
                  editPatientRecord={editPatientRecord}
                  createNewReport={createNewReport}
                  setCreateNewReport={setCreateNewReport}
                  reportData={reportData}
                ></PatientReportList>
              )}
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
  return report;
};

export default PatientReportView;
