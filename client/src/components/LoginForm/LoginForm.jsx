import React, { useState } from "react";
import "./LoginForm.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { authenticateEmployee, authenticatePatient } from "actions";
import { userServices } from "hooks/userServices";
import { loginUser, loginUserFailed } from "../../actions/index";
import { alertActions } from "../../actions/userAuthAlerts";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ isEmployee }) => {
  const getLocalStorage = (item) => {
    return JSON.parse(localStorage.getItem(item));
  };
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userAuth = useSelector((state) => state.userAuth);
  const userAuthServices = userServices;
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    if (isEmployee) {
      //actions to set the state of whether login attempt is employee or patient
      dispatch(authenticateEmployee(username, password, isEmployee));
      userAuthServices
        .authenticateEmployee(username, password)
        .then((res) => {
          if (!!res["user"]) {
            dispatch(loginUser(res, true));
            dispatch(alertActions.success(res.message));
            if (getLocalStorage("user")) {
              navigate("/");
            }
          } else {
            dispatch(loginUserFailed());
            dispatch(alertActions.error(res.message));
          }
        })
        .catch((err) => {
          console.log(err, "Login failed");
        });
    } else {
      dispatch(authenticatePatient(username, password, isEmployee));
      userAuthServices
        .authenticatePatient(username, password)
        .then((res) => {
          if (!!res["user"]) {
            dispatch(loginUser(res, false));
            dispatch(alertActions.success(res.message));
            if (getLocalStorage("user")) {
              navigate("/");
            }
          } else {
            dispatch(loginUserFailed());
            dispatch(alertActions.error(res.message));
          }
        })
        .catch((err) => {
          console.log(err, "Login failed");
        });
    }
  };

  return (
    <Container className="login-container h-100 text-center shadow-sm border">
      <h1 className="mb-4">Login</h1>
      <Form className="login-form mx-auto" onSubmit={handleSubmit}>
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
