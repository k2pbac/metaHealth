import React, { useState } from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "components/BookAppointments/BookAppointments.scss";

export default function ClinicCard(props) {
  const { name, address, image, id } = props;

  const storeClinic = () => {
    localStorage.setItem("clinic_id", id);
    console.log(localStorage.getItem("clinic_id"));
  };

  return (
    <Link
      onClick={storeClinic}
      className="clinic-card"
      to={`/clinic/appointments/${id}`}
    >
      <div className="clinic-image-container">
        <Image className="clinic-image" src={image} alt={name}></Image>
      </div>
      <div className="clinic-name">{name}</div>
      <div className="clinic-address">{address}</div>
    </Link>
  );
}
