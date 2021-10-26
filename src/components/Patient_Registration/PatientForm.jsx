import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./PatientForm.scss";
const PatientForm = (props) => {
  const [infoSelected, setInfoSelected] = useState(0);

  const handleUserClick = (viewNumber) => {
    console.log(viewNumber);
  };

  return (
    <Container className="text-center w-75 shadow-sm border p-5 patient-form">
      <h1 className="mb-5">Register</h1>
      <Form className="w-50 m-auto">
        <div
          className="user-info bg-light d-flex justify-content-center align-items-center"
          onClick={() => handleUserClick(1)}
        >
          User Info
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default PatientForm;
