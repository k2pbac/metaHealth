import React, { useState } from "react";
// import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import "components/BookAppointments/BookAppointments.scss";

import ClinicCard from "./ClinicCard";

const BookAppointments = (props) => {
  const { clinicsList, clinicName, setClinicName } = props;
  return (
    <div className="book-appointments">
      {(clinicsList && (
        <>
          <Form.Group
            className="appointment-search"
            controlId="appointment-search"
          >
            <Form.Label className="form-label">Clinic Name: </Form.Label>
            <Form.Control
              onChange={(e) => {
                e.preventDefault();
                setClinicName(e.target.value);
              }}
              autoFocus
              type="search"
              placeholder="Search"
              value={clinicName}
            />
          </Form.Group>
          <div className="container">
            <section className="cards">
              {Object.keys(clinicsList).map((clinic) => (
                <ClinicCard
                  key={clinicsList[clinic].id}
                  name={clinicsList[clinic].name}
                  address={clinicsList[clinic].address}
                  image={clinicsList[clinic].avatar}
                ></ClinicCard>
              ))}
            </section>
          </div>
        </>
      )) || (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default BookAppointments;
