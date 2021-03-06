import React, { useState } from "react";
// import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import "components/BookAppointments/BookAppointments.scss";
import { Link } from "react-router-dom";
import ClinicCard from "./ClinicCard";
import { displayClinicAddress } from "helpers/selectors";

const BookAppointments = (props) => {
  const { clinicsList, clinicName, setClinicName, setClinicAddress } = props;

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
          <div
            className={
              (Object.keys(clinicsList).length !== 0 && `container`) ||
              `container empty`
            }
          >
            <section
              className={
                (Object.keys(clinicsList).length !== 0 && `cards`) || ""
              }
            >
              {(clinicsList &&
                Object.keys(clinicsList).length !== 0 &&
                Object.getPrototypeOf(clinicsList) === Object.prototype &&
                Object.keys(clinicsList).map((clinic) => (
                  <ClinicCard
                    setClinicAddress={setClinicAddress}
                    key={clinicsList[clinic].id}
                    id={clinicsList[clinic].id}
                    name={clinicsList[clinic].name}
                    address={clinicsList[clinic].address}
                    image={clinicsList[clinic].avatar}
                  ></ClinicCard>
                ))) || <h2>No clinics found. (enter a clinic name)</h2>}
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
