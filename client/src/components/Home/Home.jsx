import React from "react";
import Header from "./Header";
import Body from "./Body";
import TestimonialList from "./TestimonialList";
import { EmployeeData } from "./EmployeeData";
import { PatientData } from "./PatientData";
import Section from "./Section";
const Home = (props) => {
  return (
    <>
      <Header loggedIn={props.loggedIn}></Header>
      <Body></Body>
      <Section></Section>
      <TestimonialList
        patientData={PatientData}
        employeeData={EmployeeData}
      ></TestimonialList>
    </>
  );
};

export default Home;