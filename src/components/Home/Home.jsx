import React from "react";
import Header from "./Header";
import Body from "./Body";
import Button from "components/Button";
import TestimonialList from "./TestimonialList";
import { EmployeeData } from "./EmployeeData";
import { PatientData } from "./PatientData";
const Home = (props) => {
  return (
    <>
      <Header></Header>
      <Body></Body>
      <TestimonialList peopleData={PatientData}></TestimonialList>
    </>
  );
};

export default Home;
