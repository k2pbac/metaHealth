import React, { useState } from "react";

import Testimonial from "./Testimonial";
import "./Testimonial.scss";
import "./TestimonialList.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowRight, faArrowLeft);

const TestimonialList = ({ patientData, employeeData }) => {
  const [currentView, setCurrentView] = useState(false);
  const [currentRole, setCurrentRole] = useState("Employee");
  const patients =
    patientData &&
    patientData.map((person) => {
      return (
        <Testimonial
          key={person.id}
          companyName={person.companyName}
          description={person.description}
          image={person.image}
          name={person.name}
          position={person.position}
          role={person.role}
        ></Testimonial>
      );
    });

  const employees =
    employeeData &&
    employeeData.map((person) => {
      return (
        <Testimonial
          key={person.id}
          companyName={person.companyName}
          description={person.description}
          image={person.image}
          name={person.name}
          position={person.position}
          role={person.role}
        ></Testimonial>
      );
    });

  const updateView = () => {
    setCurrentView((prevState) => !prevState);
    setCurrentRole((prevState) =>
      prevState === "Employee" ? "Patient" : "Employee"
    );
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="text-center mb-4">{currentRole} Testimonials</h1>
      <div className="d-flex list-container">
        {currentView && patients}
        {!currentView && employees}
        <a onClick={updateView} className="arrow-right">
          <FontAwesomeIcon size="2x" icon={faArrowRight} />
        </a>
        <a onClick={updateView} className="arrow-left">
          <FontAwesomeIcon size="2x" icon={faArrowLeft} />
        </a>
      </div>
    </div>
  );
};

export default TestimonialList;
