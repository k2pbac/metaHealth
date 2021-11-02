import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./RegisterToAClinicForm.scss";

import ClinicRegisterCard from "./ClinicRegisterCard";

import {userServices} from "hooks/userServices"
const {submitEmployeeRegistrationForClinic} = userServices;

const SHOW = "SHOW";
const REGISTERED = "REGISTERED";


export default function RegisterToAClinicForm(props) {
  const { clinicsList, clinicName, setClinicName } = props;
  const [mode, setMode] = useState(SHOW)

  const onRegister = function(event) {
    event.preventDefault();
    setMode(REGISTERED);

    const employee = JSON.parse(localStorage.getItem("user"));
    const clinic_id = localStorage.getItem("clinic_id");
    submitEmployeeRegistrationForClinic(employee, clinic_id);

    console.log(localStorage.getItem("user"))
    console.log(localStorage.getItem("clinic_id"))
  }

  return (
    <article>
    {mode === SHOW && ( 
    <Container className="text-center shadow-sm border p-5 form-container">
      <h1 className="mb-5"> Register To An Existing Clinic </h1>
      <Form className="w-50 m-auto" >

        <div className="select-clinic">
          <>
            <Form.Group
              className="clinic-search"
              controlId="clinic-search"
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
              <section className="clinics">
                {Object.keys(clinicsList).map((clinic) => (
                  <ClinicRegisterCard
                    key={clinicsList[clinic].id}
                    id={clinicsList[clinic].id}
                    name={clinicsList[clinic].name}
                    address={clinicsList[clinic].address}
                    image={clinicsList[clinic].avatar}
                  ></ClinicRegisterCard>
                ))}
              </section>
            </div>
          </>
        </div>
        <div className="d-flex justify-content-center flex-column align-items-center register-button">
          <Button size="large" variant="outline-success" type="submit" onClick={onRegister}>
            Register
          </Button>
          
        </div>
      </Form>
    </Container>
    )} 

    {mode === REGISTERED && (
      <div className="registration-container">
        <h1>Thank you for Registering</h1>
        <h2>You've registered with:</h2>
        <section className="clinic-details">
        <div>{localStorage.getItem("clinic_name")}</div>
        <div>{localStorage.getItem("clinic_address")}</div>
        </section>
        <div className="approval">Your application may take time to get approved by the clinic</div>
        </div>
    )}
    </article>        
  );
}
