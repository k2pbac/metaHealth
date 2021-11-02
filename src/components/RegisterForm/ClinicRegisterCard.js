import React, { useState } from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import FadeIn from "react-fade-in";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import "components/BookAppointments/BookAppointments.scss";
import "components/RegisterForm/RegisterToAClinicForm.scss"

export default function ClinicRegisterCard(props) {
  const { name, address, image, id } = props;

  const storeClinic = () => {
    localStorage.setItem("clinic_id", id);
    localStorage.setItem("clinic_name", name);
    localStorage.setItem("clinic_address", address);
    // console.log(localStorage.getItem("clinic_id"))
    // console.log(localStorage.getItem("clinic_name"))
    // console.log(localStorage.getItem("clinic_address"))
  };

  return (
    <div
      onClick={storeClinic}
      className="clinic-card"
    >
      <div className="clinic-image-container">
        <Image className="clinic-image" src={image} alt={name}></Image>
      </div>
      <div className="clinic-name">{name}</div>
      <div className="clinic-address">{address}</div>
    </div>
  );
}
