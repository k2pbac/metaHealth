import React, { useState } from "react";
import classNames from "classnames"
import 'bootstrap/dist/css/bootstrap.min.css';

import Image from 'react-bootstrap/Image';


import "components/View_Profile/Profile.scss"

import EmployeeProfile from "./EmployeeProfile";
import EmployeeEditProfile from "./EmployeeEditProfile";

import { useVisualMode } from "../hooks/useVisualMode"


const SHOW = "SHOW";
const EDIT = "EDIT";



export default function EmployeeProfileIndex(props) {
  const { mode, transition, back } = useVisualMode(SHOW);

  const {
    name,
    username,
    avatar,
    profile_decription,
    phone_number,
    email_address,
    employedAt,
    isDoctor,
  } = props;

  const navClass = classNames('view-profile');

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

  function onSubmit(){
    //Add code here for Submitting updated information to DB
    console.log("Submitted")
    transition(SHOW);
  }

  return (
    <article>
     {mode === SHOW && (
      <EmployeeProfile
        name = {name}
        username = {username}
        avatar = {avatar}
        profile_decription = {profile_decription}
        phone_number = {phone_number}
        email_address = {email_address}
        employedAt = {employedAt}
        isDoctor = {isDoctor}
        onEdit = {onEdit}
      />
     )}
     {mode === EDIT && (
      <EmployeeEditProfile
        name = {name}
        username = {username}
        avatar = {avatar}
        profile_decription = {profile_decription}
        phone_number = {phone_number}
        email_address = {email_address}
        employedAt = {employedAt}
        isDoctor = {isDoctor}
        onSubmit = {onSubmit}
        onBack = {back}
      />
     )}
  </article>
  )
     }