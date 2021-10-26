import React from "react";
import Header from "./Header";
import Body from "./Body";
import Button from "components/Button";
import TestimonialList from "./TestimonialList";
import { EmployeeData } from "./EmployeeData";
import { PatientData } from "./PatientData";
import Section from "./Section";
const Home = (props) => {
  return (
    <>
      <Header></Header>
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
