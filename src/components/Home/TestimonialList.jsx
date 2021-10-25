import React from "react";

import Testimonial from "./Testimonial";
import "./Testimonial.scss";

const TestimonialList = ({ peopleData }) => {
  return peopleData.map((person) => (
    <Testimonial
      companyName={person.companyName}
      description={person.description}
      image={person.image}
      name={person.name}
      position={person.position}
      role={person.role}
    ></Testimonial>
  ));
};

export default TestimonialList;
