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
      {mode === SHOW && <PatientProfile {...userLogged.user} onEdit={onEdit} />}
      {mode === EDIT && (
        <PatientEditProfile
          {...userLogged.user}
          onSubmit={onSubmit}
          onBack={back}
        />
      )}
    </article>
  );
}
