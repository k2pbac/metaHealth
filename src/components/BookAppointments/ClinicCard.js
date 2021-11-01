import React, { useState } from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import FadeIn from "react-fade-in";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "components/BookAppointments/BookAppointments.scss";

export default function ClinicCard(props) {
  const { name, address, image, id, setClinicAddress } = props;

  return (
    <Link
      onClick={() => setClinicAddress(id)}
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
