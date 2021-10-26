import React, { useState } from "react";

import Testimonial from "./Testimonial";
import "./Testimonial.scss";
import "./TestimonialList.scss";
const TestimonialList = ({ patientData, employeeData }) => {
  const [currentView, setCurrentView] = useState(false);
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

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="text-center mb-4">{patientData[0].role} Testimonials</h1>
      <div className="d-flex">
        {currentView && patients}
        {!currentView && employees}
      </div>
    </div>
  );
};

export default TestimonialList;
