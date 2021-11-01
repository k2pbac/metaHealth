import React, { useState } from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import "components/View_Profile/Profile.scss";

export default function EmployeeProfile(props) {
  const {
    first_name,
    last_name,
    username,
    gender,
    avatar,
    profile_description,
    phone_number,
    email_address,
    employedAt,
    isDoctor,
    onEdit,
  } = props;

  const navClass = classNames("view-profile");

  const img = "images/doctor_verified.png";

  return (
    <div className="profile">
      <section className="left-section">
        <Image className="profile-image" src={avatar} alt={name}></Image>
        {isDoctor === true && (
          <Image
            className="doctor-verified"
            src={img}
            alt="Doctor Verified"
          ></Image>
        )}
        <Button
          variant="outline-dark"
          size="lg"
          className="blue-outline rounded-0"
          onClick={onEdit}
        >
          Edit Profile
        </Button>
      </section>
      <section className="middle-section">
        <div className="personal">
          <h1>Personal Information: </h1>
          <div className="profile-name">
            <h2>First Name:</h2> {first_name}
          </div>
          <div className="profile-name">
            <h2>Last Name:</h2> {last_name}
          </div>
          <div className="profile-username">
            <h2>Username:</h2> {username}
          </div>
          <div className="profile-username">
            <h2>Gender:</h2> {gender}
          </div>
          <div className="profile-desription">
            <h2>Profile Description:</h2> {profile_description}
          </div>
          <div className="profile-employment">
            <h2>Employed at:</h2> {employedAt}
          </div>
        </div>
      </section>
      <section className="right-section">
        <div className="contact">
          <h1>Contact Information:</h1>
          <div className="profile-phone">
            <h2>Phone Number:</h2> {phone_number}
          </div>
          <div className="profile-email">
            <h2>Email:</h2> {email_address}
          </div>
        </div>
      </section>
    </div>
  );
}
