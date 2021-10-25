import React from "react";
import Image from "react-bootstrap/Image";
import "./Section.scss";
const Section = (props) => {
  return (
    <section className="d-flex">
      <div className="image-content">
        <Image src="https://images.unsplash.com/photo-1542353436-312f0e1f67ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1542&q=80"></Image>
      </div>
      <div className="text-content">
        <p></p>
      </div>
    </section>
  );
};

export default Section;
