import React, {useState} from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useVisualMode } from "../hooks/useVisualMode";
import { updateProfile } from "actions";
import { useDispatch } from "react-redux";

import "components/View_Profile/Profile.scss";

export default function EmployeeEditProfile(props) {
  const { mode, transition, back } = useVisualMode();
  const dispatch = useDispatch();

  const {
    id,
    first_name,
    last_name,
    username,
    avatar,
    profile_description,
    phone_number,
    email_address,
    employedAt,
    isDoctor,
    onSubmit,
    onBack,
    clinic_id,
    clinic_verified,
    gender,
  } = props;

  const [state, setState] = useState({
    firstName: first_name,
    lastName: last_name,
    userName: username,
    phoneNumber: phone_number,
    emailAddress: email_address
  })

  // Handles on Change for Edit Imputs
  const changeHandler = e => {
    setState({...state, [e.target.name]: e.target.value})
 }

 console.log("props:",props)

  //Handles onSubmit for button
 const submitHandler = (event) => {
  event.preventDefault();
  const newProfile = {
    id: id,
    first_name: state.firstName,
    last_name: state.lastName,
    username: state.userName,
    avatar: avatar,
    phone_number: state.phoneNumber,
    email_address: state.emailAddress,
    gender: gender,
    profile_description: profile_description,
    clinic_id: clinic_id, 
    clinic_verified: clinic_verified,
    is_doctor: isDoctor,
    employedAt: employedAt
  };

  dispatch(updateProfile(newProfile))

  transition("SHOW");
};


  const navClass = classNames("view-profile");

  return (
    <Form>
      <div className="profile">
        <section className="left-section">
          <Image className="profile-image" src={avatar} alt={first_name}></Image>
          <Button
            variant="outline-dark"
            size="lg"
            className="blue-outline rounded-0"
            onClick={submitHandler}
          >
            Submit
          </Button>
          <Button
            variant="outline-dark"
            size="lg"
            className="blue-outline rounded-0"
            onClick={onBack}
          >
            Back
          </Button>
        </section>

        <section className="middle-section">
          <div className="personal">
            <h1>Personal Information: </h1>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
              type="text" 
              placeholder={first_name}
              name="firstName"
              value={state.firstName || ""}
              onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
              type="text" 
              placeholder={last_name} 
              name="lastName"
              value={state.lastName || ""}
              onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control 
              type="text" 
              placeholder={username} 
              name="userName"
              value={state.userName || ""}
              onChange={changeHandler}
              />
            </Form.Group>

          </div>
        </section>

        <section className="right-section">
          <div className="contact">
            <h1>Contact Information:</h1>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control 
              type="text" 
              placeholder={phone_number}
              name="phoneNumber"
              value={state.phoneNumber || ""}
              onChange={changeHandler} 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
              type="text" 
              placeholder={email_address} 
              name="emailAddress"
              value={state.emailAddress|| ""}
              onChange={changeHandler}
              />
            </Form.Group>
          </div>
        </section>
      </div>
    </Form>
  );
}
