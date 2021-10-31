import React, { useState } from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useVisualMode } from "../hooks/useVisualMode";
import { useDispatch } from "react-redux";
import "components/View_Profile/Profile.scss";
import { updateProfile } from "actions";
export default function PatientEditProfile(props) {
  const dispatch = useDispatch();
  const { mode, transition, back } = useVisualMode();
  const SHOW = "SHOW";
  const {
    first_name,
    last_name,
    username,
    avatar,
    date_of_birth,
    profile_description,
    phone_number,
    email_address,
    address,
    gender,
    insurance_member_id,
    insurance_policy_number,
    insurance_plan_name,
    onSubmit,
    onBack,
    setPatient,
  } = props;

  const [firstName, setFirstName] = useState(first_name);
  const [lastName, setLastName] = useState(last_name);
  const [userName, setUserName] = useState(username);
  const [_avatar, setAvatar] = useState(avatar);
  const [dateOfBirth, setDateOfBirth] = useState(date_of_birth);
  const [profileDescription, setProfileDescription] =
    useState(profile_description);
  const [phoneNumber, setPhoneNumber] = useState(phone_number);
  const [emailAddress, setEmailAddress] = useState(email_address);
  const [profileAddress, setProfileAddress] = useState(address);
  const [insuranceMemberId, setInsuranceMemberId] =
    useState(insurance_member_id);
  const [insurancePolicyNumber, setInsurancePolicyNumber] = useState(
    insurance_policy_number
  );
  const [insurancePlanName, setInsurancePlanName] =
    useState(insurance_plan_name);
  const navClass = classNames("view-profile");

  const submitHandler = (event) => {
    event.preventDefault();
    const newProfile = {
      first_name: firstName,
      last_name: lastName,
      username: userName,
      gender: gender,
      avatar: avatar,
      date_of_birth: dateOfBirth,
      profile_description: profileDescription,
      phone_number: phoneNumber,
      email_address: emailAddress,
      address: profileAddress,
      insurance_member_id: insuranceMemberId,
      insurance_policy_number: insurancePolicyNumber,
      insurance_plan_name: insurancePlanName,
    };

    // setPatient({
    //   firstName,
    //   lastName,
    //   userName,
    //   _avatar,
    //   dateOfBirth,
    //   profileDescription,
    //   phoneNumber,
    //   emailAddress,
    //   profileAddress,
    //   insuranceMemberId,
    //   insurancePolicyNumber,
    //   insurancePlanName,
    // });

    dispatch(updateProfile(newProfile));

    console.log(newProfile);
    transition(SHOW);
  };

  return (
    <Form>
      <div className="profile">
        <section className="left-section">
          <Image
            className="profile-image"
            src={_avatar}
            alt={first_name}
          ></Image>
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
                name="first_name"
                type="text"
                placeholder={first_name}
                value={firstName || ""}
                onChange={(e) => {
                  console.log(e.target.value);
                  setFirstName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="last_name"
                type="text"
                placeholder={last_name}
                value={lastName || ""}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder={username}
                value={userName || ""}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                name="date_of_birth"
                type="date"
                placeholder={date_of_birth}
                value={dateOfBirth || ""}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                type="text"
                placeholder={address}
                value={profileAddress || ""}
                onChange={(e) => setProfileAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProfileDescription">
              <Form.Label>Profile Description</Form.Label>
              <Form.Control
                name="profile_description"
                type="text"
                as="textarea"
                placeholder={profile_description}
                value={profileDescription || ""}
                onChange={(e) => setProfileDescription(e.target.value)}
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
                name="phone_number"
                type="phone"
                placeholder={phone_number}
                value={phoneNumber || ""}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email_address"
                type="email"
                placeholder={email_address}
                value={emailAddress || ""}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="medical">
            <h1>Medical Information</h1>
            <Form.Group className="mb-3" controlId="formInsId">
              <Form.Label>Insurance ID No.</Form.Label>
              <Form.Control
                name="insurance_member_id"
                type="text"
                placeholder={insurance_member_id}
                value={insuranceMemberId || ""}
                onChange={(e) => setInsuranceMemberId(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formInsPol">
              <Form.Label>Insurance Policy No.</Form.Label>
              <Form.Control
                name="insurance_policy_number"
                type="text"
                placeholder={insurance_policy_number}
                value={insurancePolicyNumber || ""}
                onChange={(e) => setInsurancePolicyNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formInsPlan">
              <Form.Label>Insurance Policy Plan</Form.Label>
              <Form.Control
                name="insurance_plan_name"
                type="text"
                placeholder={insurance_plan_name}
                value={insurance_plan_name || ""}
                onChange={(e) => setInsurancePlanName(e.target.value)}
              />
            </Form.Group>
          </div>
        </section>
      </div>
    </Form>
  );
}
