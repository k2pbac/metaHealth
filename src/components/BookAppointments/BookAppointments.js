import React, { useState } from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "components/BookAppointments/BookAppointments.scss";

import ClinicCard from "./ClinicCard";
import { FormGroup } from "react-bootstrap";
import useApplicationData from "hooks/useApplicationData";

export default function BookAppointments(props) {
  const { clinicsList } = props;

  return (
    <div className="book-appointments">
      <Form.Group className="appointment-search" controlId="appointment-search">
        <Form.Label className="form-label">Clinic Name: </Form.Label>
        <Form.Control type="search" placeholder="Search" />
      </Form.Group>
      <div className="container">
        <section className="cards">
          <ClinicCard
            name={clinicsList[0].name}
            address={clinicsList[0].address}
            image={clinicsList[0].image}
          ></ClinicCard>
          <ClinicCard
            name={clinicsList[0].name}
            address={clinicsList[0].address}
            image={clinicsList[0].image}
          ></ClinicCard>
          <ClinicCard
            name={clinicsList[0].name}
            address={clinicsList[0].address}
            image={clinicsList[0].image}
          ></ClinicCard>
          <ClinicCard
            name={clinicsList[0].name}
            address={clinicsList[0].address}
            image={clinicsList[0].image}
          ></ClinicCard>
          <ClinicCard
            name={clinicsList[0].name}
            address={clinicsList[0].address}
            image={clinicsList[0].image}
          ></ClinicCard>
          <ClinicCard
            name={clinicsList[0].name}
            address={clinicsList[0].address}
            image={clinicsList[0].image}
          ></ClinicCard>
          <ClinicCard
            name={clinicsList[0].name}
            address={clinicsList[0].address}
            image={clinicsList[0].image}
          ></ClinicCard>
          <ClinicCard
            name={clinicsList[0].name}
            address={clinicsList[0].address}
            image={clinicsList[0].image}
          ></ClinicCard>
          <ClinicCard
            name={clinicsList[0].name}
            address={clinicsList[0].address}
            image={clinicsList[0].image}
          ></ClinicCard>
        </section>
      </div>
    </div>
  );
}
