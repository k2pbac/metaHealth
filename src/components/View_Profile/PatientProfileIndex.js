import React, { useState } from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "react-bootstrap/Image";

import "components/View_Profile/Profile.scss";

import PatientProfile from "./PatientProfile";
import PatientEditProfile from "./PatientEditProfile";
import { useSelector } from "react-redux";
import { useVisualMode } from "../hooks/useVisualMode";

const SHOW = "SHOW";
const EDIT = "EDIT";

export default function PatientProfileIndex(props) {
  const { mode, transition, back } = useVisualMode(SHOW);
  const userLogged = useSelector((state) => state.userLogged);
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
    setPatient,
  } = props;

  console.log("rendered user data:", userLogged.user);
  const navClass = classNames("view-profile");

  //Save Function: saves the new profile imputs
  // function save(name, interviewer) {

  //   transition(SAVING, true);
  //     props.bookInterview(props.id, interview)
  //       .then(() => transition(SHOW))
  //       .catch(() => transition(ERROR_SAVE, true))
  //   }

  // onEdit function : tansitions to the EDIT mode
  function onEdit() {
    transition(EDIT);
  }

  function onSubmit() {
    //Add code here for Submitting updated information to DB
    console.log("Submitted");
    transition(SHOW);
  }

  return (
    <article>
      {mode === SHOW && (
        <PatientProfile
          {...userLogged.user}
          // first_name={first_name}
          // last_name={last_name}
          // username={username}
          // gender={gender}
          // avatar={avatar}
          // date_of_birth={date_of_birth}
          // profile_description={profile_description}
          // phone_number={phone_number}
          // email_address={email_address}
          // address={address}
          // insurance_member_id={insurance_member_id}
          // insurance_policy_number={insurance_policy_number}
          // insurance_plan_name={insurance_plan_name}
          onEdit={onEdit}
        />
      )}
      {mode === EDIT && (
        <PatientEditProfile
          {...userLogged.user}
          onSubmit={onSubmit}
          onBack={back}
          setPatient={setPatient}
          // first_name={first_name}
          // last_name={last_name}
          // username={username}
          // avatar={avatar}
          // date_of_birth={date_of_birth}
          // profile_description={profile_description}
          // phone_number={phone_number}
          // email_address={email_address}
          // address={address}
          // insurance_member_id={insurance_member_id}
          // insurance_policy_number={insurance_policy_number}
          // insurance_plan_name={insurance_plan_name}
        />
      )}
    </article>
  );
}
