import React, { useState } from "react";
import classNames from "classnames"
import 'bootstrap/dist/css/bootstrap.min.css';

import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";

import "components/BookAppointments/BookAppointments.scss"

export default function ClinicCard(props) {

  const {
    name,
    address,
    image
  } = props;

  return (
    <div className="clinic-card">
      <div className="clinic-image-container">
        <Image className="clinic-image" src={image} alt={name}></Image>
      </div>
      <div className="clinic-name">{name}</div>
      <div className="clinic-address">{address}</div>
    </div>
  )
}