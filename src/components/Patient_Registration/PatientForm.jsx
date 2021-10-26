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
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    birthDate: "",
    gender: "",
    description: "",
    address: "",
    planName: "",
    memberID: "",
    polNumber: "",
  });

  const handleClick = (viewNumber) => {
    if (viewNumber === infoSelected) setInfoSelected(0);
    else setInfoSelected(viewNumber);
  };

  const handleInputChange = (event) => {
    event.persist();
    setFormValues((prev) => {
      let newForm = Object.assign({}, prev);
      newForm[event.target.name] = event.target.value;
      return newForm;
    });
    if (!badgesInfo[infoSelected].filledFields[event.target.id]) {
      badgesInfo[infoSelected].filledFields[event.target.id] = true;
      setBadgesInfo((prev) => ({
        ...prev,
        ...prev[infoSelected].currentVal++,
      }));
    } else {
      if (!event.target.value.length) {
        setBadgesInfo((prev) => {
          delete prev[infoSelected].filledFields[event.target.id];
          return {
            ...prev,
            ...prev[infoSelected].currentVal--,
          };
        });
      }
    }
  };

  return (
    <Container className="text-center shadow-sm border p-5 patient-form m-auto">
      <h1 className="mb-5">Patient Registration</h1>
      <Form className="w-50 m-auto">
        <div
          className="mb-2 hvr-fade info bg-light d-flex justify-content-center align-items-center border"
          onClick={() => handleClick("badge1")}
        >
          Account Info
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
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                value={formValues.username}
                type="text"
                placeholder="Enter username"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                value={formValues.password}
                type="password"
                placeholder="Password"
                onChange={handleInputChange}
              />
            </Form.Group>
          </FadeIn>
        )}
        <div
          className="mb-2 hvr-fade info bg-light d-flex justify-content-center align-items-center border"
          onClick={() => handleClick("badge2")}
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
            <Form.Group className="mb-3" controlId="DOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                name="date"
                type="date"
                placeholder="Year"
                value={formValues.birthDate}
                onChange={handleInputChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                name="gender"
                type="text"
                placeholder="Gender"
                value={formValues.gender}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ProfileDesc">
              <Form.Label>Profile Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                placeholder="Description"
                value={formValues.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                type="text"
                placeholder="Address"
                value={formValues.address}
                onChange={handleInputChange}
              />
            </Form.Group>
          </FadeIn>
        )}
        <div
          className="info hvr-fade bg-light d-flex justify-content-center align-items-center border"
          onClick={() => handleClick("badge3")}
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
            <Form.Group className="mb-3" controlId="plan-name">
              <Form.Label>Plan Name</Form.Label>
              <Form.Control
                name="planName"
                type="text"
                placeholder="Plan Name"
                value={formValues.planName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="member_id">
              <Form.Label>Member ID</Form.Label>
              <Form.Control
                name="memberID"
                type="text"
                placeholder="Member ID"
                value={formValues.memberID}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="policy-number">
              <Form.Label>Policy Number</Form.Label>
              <Form.Control
                name="policyNumber"
                type="text"
                placeholder="Policy Number"
                value={formValues.polNumber}
                onChange={handleInputChange}
              />
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
