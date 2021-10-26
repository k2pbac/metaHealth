import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./PatientForm.scss";
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
          className="mb-2 user-info bg-light d-flex justify-content-center align-items-center border"
          onClick={() => handleUserClick(1)}
        >
          Account Info - 0/2
        </div>
        {infoSelected === 1 && (
          <>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </>
        )}
        <div
          className="mb-2 user-info bg-light d-flex justify-content-center align-items-center border"
          onClick={() => handleUserClick(2)}
        >
          Personal Info - 0/4
        </div>

        {infoSelected === 2 && (
          <>
            <Form.Group className="mb-3" controlId="DOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="text" placeholder="Date of Birth" />
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
          </>
        )}
        <div
          className="user-info bg-light d-flex justify-content-center align-items-center border"
          onClick={() => handleUserClick(3)}
        >
          Insurance Info - 0/3
        </div>
        {infoSelected === 3 && (
          <>
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
          </>
        )}
        <Button className="mt-4" variant="outline-success" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default PatientForm;
