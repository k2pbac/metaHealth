import React, { useState } from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import "components/View_Profile/Profile.scss";

const SHOW = "SHOW";
const EDIT = "EDIT";

export default function PatientProfile(props) {
  const {
    first_name,
    last_name,
    username,
    gender,
    avatar,
    date_of_birth,
    profile_description,
    phone_number,
    email_address,
    address,
    insurance_member_id,
    insurance_policy_number,
    insurance_plan_name,
    onEdit,
  } = props;

  const navClass = classNames("view-profile");
  console.log("rendered patient profile");
  console.log(props);

  return (
    <div className="profile">
      <section className="left-section">
        <Image className="profile-image" src={avatar} alt={first_name}></Image>
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
            <h2>First Name:</h2> {props.first_name}
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
          <div className="profile-dob">
            <h2>Date of Birth:</h2> {date_of_birth}
          </div>
          <div className="profile-address">
            <h2>Address:</h2> {address}
          </div>
          <div className="profile-desription">
            <h2>Profile Description:</h2> {profile_description}
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

        <div className="medical">
          <h1>Medical Information</h1>
          <div className="profile-insid">
            <h2>Insurance ID No.</h2>
            {insurance_member_id}
          </div>
          <div className="profile-polnum">
            <h2>Insurance Policy No.</h2>
            {insurance_policy_number}
          </div>
          <div className="profile-insplan">
            <h2>Insurance Plan Name</h2>
            {insurance_plan_name}
          </div>
        </div>
      </section>
    </div>
  );
}
