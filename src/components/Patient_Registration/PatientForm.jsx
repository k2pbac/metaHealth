import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./PatientForm.scss";
const PatientForm = (props) => {
  const [infoSelected, setInfoSelected] = useState(0);

  const handleUserClick = (viewNumber) => {
    setInfoSelected(viewNumber);
  };

  return (
    <Container className="text-center w-75 shadow-sm border p-5 patient-form m-auto">
      <h1 className="mb-5">Register</h1>
      <Form className="w-50 m-auto">
        <div
          className="mb-2 user-info bg-light d-flex justify-content-center align-items-center border"
          onClick={() => handleUserClick(1)}
        >
          Account Info
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
          className="user-info bg-light d-flex justify-content-center align-items-center border"
          onClick={() => handleUserClick(2)}
        >
          Personal Info
        </div>

        {infoSelected === 2 && (
          <>
            <Form.Group className="mb-3" controlId="DOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="text" placeholder="Enter Date of Birth" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control type="text" placeholder="Gender" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ProfileDesc">
              <Form.Label>Profile Description</Form.Label>
              <span></span>
              <Form.Control type="text" placeholder="Profile Description" />
            </Form.Group>
          </>
        )}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default PatientForm;
