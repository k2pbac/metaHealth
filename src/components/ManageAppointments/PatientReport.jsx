import React, { useState } from "react";
import "./PatientReport.scss";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Column from "react-bootstrap/Col";
import { FloatingLabel, Form } from "react-bootstrap";

const PatientReport = ({ report }) => {
  const [reportData, setReportData] = useState({
    info: report.information || "",
    medication: report.medication_prescribed || "",
    referral: report.referral || "",
  });

  return (
    <Row
      className="report-container py-4 mb-3"
      style={{ paddingRight: "40px", paddingLeft: "40px" }}
    >
      <Row className="d-flex dates-container">
        <Column>
          <p>Created on {report.created_on || ""}</p>
          <p>Created by {report.created_by || ""}</p>
        </Column>
        <Column className="d-flex align-items-end flex-column">
          <p>Last updated {report.last_updated || ""}</p>
          <p>Last updated by {report.last_updated_by || ""}</p>
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
                  value={reportData.info}
                  onChange={(e) => setReportData(e.target.value)}
                  className="my-2"
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
                    type="text"
                    placeholder=""
                    value={reportData.medication}
                    onChange={(e) => setReportData(e.target.value)}
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
                    value={reportData.referral}
                    type="text"
                    placeholder=""
                    onChange={(e) => setReportData(e.target.value)}
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
