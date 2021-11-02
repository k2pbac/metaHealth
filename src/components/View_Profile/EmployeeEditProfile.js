import React from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "components/View_Profile/Profile.scss";

export default function EmployeeEditProfile(props) {
  const {
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
  } = props;

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
            onClick={onSubmit}
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
              <Form.Control type="name" placeholder={first_name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="name" placeholder={last_name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder={username} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProfileDescription">
              <Form.Label>Profile Description</Form.Label>
              <Form.Control
                type="profileDescription"
                as="textarea"
                placeholder={profile_description}
              />
            </Form.Group>
          </div>
        </section>

        <section className="right-section">
          <div className="contact">
            <h1>Contact Information:</h1>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="phoneNumber" placeholder={phone_number} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder={email_address} />
            </Form.Group>
          </div>
        </section>
      </div>
    </Form>
  );
}
