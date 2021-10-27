import React from "react";
import "./LoginForm.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
const LoginForm = (props) => {
  return (
    <Container className="login-form bg-light w-50 h-100 text-center shadow-sm">
      <h1 className="mb-4">Login</h1>
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button className="register-link" type="submit">
            Sign Up
          </Button>
          <Button className="login-link" type="button">
            Login
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;
