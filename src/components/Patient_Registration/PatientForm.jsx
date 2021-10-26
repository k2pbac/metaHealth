import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./PatientForm.scss";
import FadeIn from "react-fade-in";
const PatientForm = (props) => {
  const [infoSelected, setInfoSelected] = useState(0);

  const handleUserClick = (viewNumber) => {
    if (viewNumber === infoSelected) setInfoSelected(0);
    else setInfoSelected(viewNumber);
  };

  return (
    <Container className="text-center w-75 shadow-sm border p-5 patient-form m-auto">
      <h1 className="mb-5">Patient Registration</h1>
      <Form className="w-50 m-auto">
        <div
          className="mb-2 hvr-fade info bg-light d-flex justify-content-center align-items-center border"
          onClick={() => handleUserClick(1)}
        >
          Account Info
        </div>
        {infoSelected === 1 && (
          <FadeIn>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </FadeIn>
        )}
        <div
          className="mb-2 hvr-fade info bg-light d-flex justify-content-center align-items-center border"
          onClick={() => handleUserClick(2)}
        >
          Personal Info
        </div>

        {infoSelected === 2 && (
          <FadeIn>
            <Form.Group className="mb-3" controlId="DOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" placeholder="Year"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control type="text" placeholder="Gender" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ProfileDesc">
              <Form.Label>Profile Description</Form.Label>
              <Form.Control type="text" placeholder="Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>
          </FadeIn>
        )}
        <div
          className="info hvr-fade bg-light d-flex justify-content-center align-items-center border"
          onClick={() => handleUserClick(3)}
        >
          Insurance Info
        </div>
        {infoSelected === 3 && (
          <FadeIn>
            <Form.Group className="mb-3" controlId="plan-name">
              <Form.Label>Plan Name</Form.Label>
              <Form.Control type="text" placeholder="Plan Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="member_id">
              <Form.Label>Member ID</Form.Label>
              <Form.Control type="text" placeholder="Member ID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="policy-number">
              <Form.Label>Policy Number</Form.Label>
              <Form.Control type="text" placeholder="Policy Number" />
            </Form.Group>
          </FadeIn>
        )}
        <Button className="mt-4" variant="outline-success" type="submit">
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
