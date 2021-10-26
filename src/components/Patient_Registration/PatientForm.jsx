import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./PatientForm.scss";
import FadeIn from "react-fade-in";
import Badge from "react-bootstrap/Badge";

const PatientForm = (props) => {
  const [infoSelected, setInfoSelected] = useState("");
  const [badgesInfo, setBadgesInfo] = useState({
    badge1: { currentVal: 0, totalFields: 2, filledFields: {} },
    badge2: { currentVal: 0, totalFields: 4, filledFields: {} },
    badge3: { currentVal: 0, totalFields: 3, filledFields: {} },
  });
  const handleUserClick = (viewNumber) => {
    if (viewNumber === infoSelected) setInfoSelected(0);
    else setInfoSelected(viewNumber);
  };

  const handleInputChange = (event) => {
    event.persist();
    if (!badgesInfo[infoSelected].filledFields[event.target.id]) {
      badgesInfo[infoSelected].filledFields[event.target.id] = true;
      setBadgesInfo((prev) => ({
        ...prev,
        ...prev[infoSelected].currentVal++,
      }));
    } else {
      if (!event.target.value.length) {
        setBadgesInfo((prev) => {
          console.log(prev[infoSelected].filledFields, event.target);
          delete prev[infoSelected].filledFields[event.target.id];
          return {
            ...prev,
            ...prev[infoSelected].currentVal--,
          };
        });
      }
      console.log(badgesInfo);
    }
  };

  return (
    <Container className="text-center shadow-sm border p-5 patient-form m-auto">
      <h1 className="mb-5">Patient Registration</h1>
      <Form className="w-50 m-auto">
        <div
          className="mb-2 hvr-fade info bg-light d-flex justify-content-center align-items-center border"
          onClick={() => handleUserClick("badge1")}
        >
          Account Info{" "}
          <Badge
            bg={`${
              (badgesInfo.badge1.currentVal < badgesInfo.badge1.totalFields &&
                "secondary") ||
              "success"
            }`}
          >
            {badgesInfo.badge1.currentVal}/{badgesInfo.badge1.totalFields}
          </Badge>
        </div>
        {infoSelected === "badge1" && (
          <FadeIn>
            <Form.Group
              className="mb-3"
              controlId="formBasicName"
              onChange={handleInputChange}
            >
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              onChange={handleInputChange}
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </FadeIn>
        )}
        <div
          className="mb-2 hvr-fade info bg-light d-flex justify-content-center align-items-center border"
          onClick={() => handleUserClick("badge2")}
        >
          Personal Info{" "}
          <Badge
            bg={`${
              (badgesInfo.badge2.currentVal < badgesInfo.badge2.totalFields &&
                "secondary") ||
              "success"
            }`}
          >
            {badgesInfo.badge2.currentVal}/{badgesInfo.badge2.totalFields}
          </Badge>
        </div>

        {infoSelected === "badge2" && (
          <FadeIn>
            <Form.Group
              className="mb-3"
              controlId="DOB"
              onChange={handleInputChange}
            >
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Year"
                onChange={handleInputChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="Gender"
              onChange={handleInputChange}
            >
              <Form.Label>Gender</Form.Label>
              <Form.Control type="text" placeholder="Gender" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="ProfileDesc"
              onChange={handleInputChange}
            >
              <Form.Label>Profile Description</Form.Label>
              <Form.Control type="text" placeholder="Description" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="Address"
              onChange={handleInputChange}
            >
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>
          </FadeIn>
        )}
        <div
          className="info hvr-fade bg-light d-flex justify-content-center align-items-center border"
          onClick={() => handleUserClick("badge3")}
        >
          Insurance Info{" "}
          <Badge
            bg={`${
              (badgesInfo.badge3.currentVal < badgesInfo.badge3.totalFields &&
                "secondary") ||
              "success"
            }`}
          >
            {badgesInfo.badge3.currentVal}/{badgesInfo.badge3.totalFields}
          </Badge>
        </div>
        {infoSelected === "badge3" && (
          <FadeIn>
            <Form.Group
              className="mb-3"
              controlId="plan-name"
              onChange={handleInputChange}
            >
              <Form.Label>Plan Name</Form.Label>
              <Form.Control type="text" placeholder="Plan Name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="member_id"
              onChange={handleInputChange}
            >
              <Form.Label>Member ID</Form.Label>
              <Form.Control type="text" placeholder="Member ID" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="policy-number"
              onChange={handleInputChange}
            >
              <Form.Label>Policy Number</Form.Label>
              <Form.Control type="text" placeholder="Policy Number" />
            </Form.Group>
          </FadeIn>
        )}
        <Button className="mt-5" size="sm" variant="success" type="submit">
          Submit
        </Button>
      </Form>
      <span className="d-block mt-4">
        Already a user? <a href="#!">Login</a>
      </span>
    </Container>
  );
};

export default PatientForm;
