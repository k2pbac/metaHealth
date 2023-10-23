import React, { useState } from "react";
import "./LoginForm.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useDispatch } from "react-redux";
import { authenticateEmployee, authenticatePatient } from "actions";

const LoginForm = ({ isEmployee }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    if (isEmployee) {
      //actions to set the state of whether login attempt is employee or patient
      console.log("employee:", isEmployee);
      dispatch(authenticateEmployee(username, password, isEmployee));
    } else {
      console.log("patient:", isEmployee);
      dispatch(authenticatePatient(username, password, isEmployee));
    }
  };

  return (
    <Container className="login-form w-50 h-100 text-center shadow">
      <h1 className="mb-4">Login</h1>
      <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <Button
            style={{ paddingLeft: "40px", paddingRight: "40px" }}
            variant="outline-success"
            type="submit"
            className="mx-0"
          >
            Login
          </Button>
          <span className="mt-2 text-center" style={{ fontSize: "0.8rem" }}>
            <a href="#!">Forgot your password?</a>
          </span>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;
