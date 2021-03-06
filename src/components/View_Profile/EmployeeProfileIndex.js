import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "react-bootstrap/Image";

import "components/View_Profile/Profile.scss";

import EmployeeProfile from "./EmployeeProfile";
import EmployeeEditProfile from "./EmployeeEditProfile";

import { useVisualMode } from "../hooks/useVisualMode";
import { getEmployer } from "helpers/selectors";
import { userServices } from "hooks/userServices";
const { getClinicData } = userServices;

const SHOW = "SHOW";
const EDIT = "EDIT";

export default function EmployeeProfileIndex(props) {
  const { mode, transition, back } = useVisualMode(SHOW);
  const [employedAt, setEmployedAt] = useState("");

  const {
    id,
    first_name,
    last_name,
    username,
    gender,
    avatar,
    profile_description,
    phone_number,
    email_address,
    clinic_verified,
    clinic_id,
    is_doctor,
    appState,
  } = props;

  const clinicData = function (clinic_id) {};

  // useEffect(() => {
  //   // clinicData(clinic_id);
  // if (clinic_id) {
  //   if (clinic_id === null) {
  //     setEmployedAt("Unemployed");
  //   } else {
  //     getEmployer()
  //     // getClinicData(clinic_id).then((res) => {
  //     //   console.log("Result:", res[0].name);
  //     //   setEmployedAt(`${res[0].name}, ${res[0].address}`);
  //     // });
  //   }
  // }
  //   }
  // }, [id]);

  useEffect(() => {
    if (clinic_id) {
      const data = getEmployer(appState, clinic_id);
      if (Object.values(data).length) {
        setEmployedAt(Object.values(data)[0]["name"]);
      }
    }
  }, [appState]);

  // console.log("employedAt:", employedAt);

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
    transition(SHOW);
  }

  return (
    <article>
      {mode === SHOW && (
        <EmployeeProfile
          id={id}
          first_name={first_name}
          last_name={last_name}
          username={username}
          gender={gender}
          avatar={avatar}
          profile_description={profile_description}
          phone_number={phone_number}
          email_address={email_address}
          clinic_verified={clinic_verified}
          clinic_id={clinic_id}
          employedAt={employedAt}
          isDoctor={is_doctor}
          onEdit={onEdit}
        />
      )}
      {mode === EDIT && (
        <EmployeeEditProfile
          id={id}
          first_name={first_name}
          last_name={last_name}
          username={username}
          avatar={avatar}
          profile_description={profile_description}
          phone_number={phone_number}
          email_address={email_address}
          clinic_verified={clinic_verified}
          clinic_id={clinic_id}
          employedAt={employedAt}
          isDoctor={is_doctor}
          onSubmit={onSubmit}
          onBack={back}
        />
      )}
    </article>
  );
}
